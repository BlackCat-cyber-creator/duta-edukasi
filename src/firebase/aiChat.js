import { getAI, getGenerativeModel, GoogleAIBackend } from 'firebase/ai';
import app from './config';
import { retrieveCatalogContext, buildFallbackReply, isGreetingOrSmallTalk } from '../utils/aiRetriever';

const MODEL_NAME = 'gemini-3.5-flash-lite';
const RATE_LIMIT_KEY = 'duta_ai_rate_v1';
const RATE_LIMIT_MAX = 25;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

let cachedCatalog = null;
let serverGeminiUnavailable = false;

async function loadCatalog() {
  if (cachedCatalog) return cachedCatalog;
  try {
    const res = await fetch('/ai-catalog.json');
    if (res.ok) {
      cachedCatalog = await res.json();
      return cachedCatalog;
    }
  } catch {
    // Abaikan dan kembalikan katalog kosong agar fallback tetap aman
  }
  return { stats: { totalPapers: 0, totalSchoolChapters: 0, totalAmcChapters: 0 }, items: [] };
}

function readRateTimestamps() {
  try {
    const raw = window.localStorage.getItem(RATE_LIMIT_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    const now = Date.now();
    return Array.isArray(parsed)
      ? parsed.filter((ts) => typeof ts === 'number' && now - ts < RATE_LIMIT_WINDOW_MS)
      : [];
  } catch {
    return [];
  }
}

function recordRateTimestamp() {
  try {
    const timestamps = readRateTimestamps();
    timestamps.push(Date.now());
    window.localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(timestamps));
  } catch {
    // Abaikan kegagalan storage (mis. private mode)
  }
}

function normalizeContents(messages) {
  const cleaned = (Array.isArray(messages) ? messages : [])
    .slice(-8)
    .map((m) => ({
      role: m?.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: String(m?.text || '').trim().slice(0, 600) }]
    }))
    .filter((m) => m.parts[0].text.length > 0);

  while (cleaned.length > 0 && cleaned[0].role !== 'user') {
    cleaned.shift();
  }

  const merged = [];
  for (const m of cleaned) {
    const prev = merged[merged.length - 1];
    if (prev && prev.role === m.role) {
      prev.parts[0].text = `${prev.parts[0].text}\n${m.parts[0].text}`;
    } else {
      merged.push(m);
    }
  }
  return merged;
}

function buildSystemInstruction(catalog, matches, userContext, displayName) {
  const stats = catalog?.stats || {};
  const catalogLines = matches.length
    ? matches
      .map((m) => `- [${m.title}](${m.path}) | tipe=${m.type} | mapel=${m.subject} | level=${m.level || '-'} | topik=${m.topic || '-'}`)
      .join('\n')
    : '(tidak ada katalog spesifik untuk pesan ini)';

  return [
    'Kamu adalah Asisten Belajar & Tutor AI Duta e-dukasi (Matematika, IPA, Fisika, Kimia, Biologi, Informatika, Astronomi, Kebumian, Ekonomi Kelas 4–12, TKA, UTBK, serta Olimpiade OSN/AMC/AIME/SASMO/SMO/HKIMO/TIMO/SIMOC/IKMC).',
    `Statistik portal Duta e-dukasi saat ini: ${stats.totalPapers || 100}+ Paket Soal terstruktur, ${stats.totalSchoolChapters || 70}+ bab kurikulum sekolah, dan ${stats.totalAmcChapters || 10}+ modul AMC.`,
    `Konteks pelajar: nama="${displayName || 'Pelajar'}", jenjang="${userContext?.targetLevel || 'belum diisi'}", target="${(userContext?.targetCompetitions || []).join(', ') || 'umum'}", halamanSaatIni="${userContext?.currentPath || '/'}".`,
    'Aturan:',
    '1. Jawab ringkas, ramah pelajar, dan akurat dalam Bahasa Indonesia (atau Bahasa Inggris jika pengguna bertanya dalam Bahasa Inggris).',
    '2. Untuk sapaan atau obrolan ringan ("Hi", "Halo", "Terima kasih"), balas ramah dan singkat tanpa memaksa daftar rekomendasi atau tautan.',
    '3. Kamu boleh menjawab pertanyaan umum Matematika, Sains, dan Olimpiade secara langsung (menjelaskan konsep, rumus dengan LaTeX $...$, pembuktian, atau langkah penyelesaian) — pengetahuanmu tidak dibatasi hanya pada isi website.',
    '4. Jika merekomendasikan materi atau paket soal di Duta e-dukasi, HANYA gunakan URL/path yang ada dalam daftar KATALOG RELEVAN di bawah dengan format Markdown [Judul](path). JANGAN mengarang URL atau paket yang tidak ada di daftar.',
    '5. Jika pelajar meminta rencana belajar atau latihan berikutnya, susun urutan 2–4 tautan dari mudah ke menantang.',
    '',
    'KATALOG RELEVAN:',
    catalogLines
  ].join('\n');
}

export async function sendFirebaseAiChat({ messages, userContext = {}, displayName = 'Pelajar', idToken = '' }) {
  if (readRateTimestamps().length >= RATE_LIMIT_MAX) {
    return {
      ok: false,
      status: 429,
      error: 'Batas pertanyaan AI per jam (25 pesan) tercapai. Silakan coba lagi beberapa saat lagi.'
    };
  }

  const contents = normalizeContents(messages);
  const latestUserMsg = [...contents].reverse().find((m) => m.role === 'user')?.parts?.[0]?.text || '';
  if (!latestUserMsg) {
    return { ok: false, status: 400, error: 'Pesan tidak boleh kosong.' };
  }

  const isGreeting = isGreetingOrSmallTalk(latestUserMsg);

  if (idToken && !serverGeminiUnavailable) {
    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`
        },
        body: JSON.stringify({ messages, userContext: { ...userContext, displayName } })
      });
      if (res.ok) {
        const data = await res.json().catch(() => null);
        if (data?.mode === 'gemini' && data?.reply) {
          recordRateTimestamp();
          return {
            ok: true,
            reply: data.reply,
            recommendations: isGreeting ? [] : (data.recommendations || []),
            mode: data.mode,
            model: data.model
          };
        }
        if (data?.mode === 'catalog-fallback') {
          serverGeminiUnavailable = true;
        }
      }
    } catch (err) {
      console.warn('Server /api/ai-chat unavailable:', err?.message || err);
    }
  }

  const catalog = await loadCatalog();
  const matches = isGreeting ? [] : retrieveCatalogContext(latestUserMsg, catalog, userContext, 12);
  const recommendations = isGreeting
    ? []
    : matches.slice(0, 5).map(({ id, type, title, path, subject, level, count }) => ({
      id,
      type,
      title,
      path,
      subject,
      level,
      count
    }));

  try {
    const ai = getAI(app, { backend: new GoogleAIBackend() });
    const model = getGenerativeModel(ai, {
      model: MODEL_NAME,
      systemInstruction: buildSystemInstruction(catalog, matches, userContext, displayName),
      generationConfig: { temperature: 0.4, maxOutputTokens: 650 }
    });
    const result = await model.generateContent({ contents });
    const reply = result?.response?.text?.()?.trim();
    if (reply) {
      recordRateTimestamp();
      return { ok: true, reply, recommendations, mode: 'firebase-ai', model: MODEL_NAME };
    }
  } catch (err) {
    console.warn('Firebase AI Logic unavailable:', err?.message || err);
  }

  return {
    ok: true,
    reply: buildFallbackReply(latestUserMsg, matches, userContext),
    recommendations,
    mode: 'catalog-fallback'
  };
}
