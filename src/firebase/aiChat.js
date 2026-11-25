import { getAI, getGenerativeModel, GoogleAIBackend } from 'firebase/ai';
import app from './config';
import { retrieveCatalogContext, buildFallbackReply } from '../utils/aiRetriever';

const MODEL_NAME = 'gemini-2.5-flash-lite';
const RATE_LIMIT_KEY = 'duta_ai_rate_v1';
const RATE_LIMIT_MAX = 25;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

let cachedCatalog = null;

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
    .slice(-6)
    .map((m) => ({
      role: m?.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: String(m?.text || '').trim().slice(0, 600) }]
    }))
    .filter((m) => m.parts[0].text.length > 0);

  while (cleaned.length > 0 && cleaned[0].role !== 'user') {
    cleaned.shift();
  }
  return cleaned;
}

function buildSystemInstruction(catalog, matches, userContext, displayName) {
  const stats = catalog?.stats || {};
  const catalogLines = matches
    .map((m) => `- [${m.title}](${m.path}) | tipe=${m.type} | mapel=${m.subject} | level=${m.level || '-'} | topik=${m.topic || '-'}`)
    .join('\n');

  return [
    'Kamu adalah Asisten Belajar Duta e-dukasi (portal belajar Matematika, IPA, Fisika, Kimia, Biologi, Informatika, Astronomi, Kebumian, Ekonomi Kelas 4–12, TKA, UTBK, dan Olimpiade OSN/AMC/AIME/SASMO/SMO/HKIMO/TIMO/SIMOC/IKMC).',
    `Statistik situs saat ini: ${stats.totalPapers || 100}+ Paket Soal terstruktur, ${stats.totalSchoolChapters || 70}+ bab kurikulum sekolah, dan ${stats.totalAmcChapters || 10}+ modul AMC.`,
    `Konteks pelajar: nama="${displayName || 'Pelajar'}", jenjang="${userContext?.targetLevel || 'belum diisi'}", target="${(userContext?.targetCompetitions || []).join(', ') || 'umum'}", halamanSaatIni="${userContext?.currentPath || '/'}".`,
    'Aturan ketat:',
    '1. Jawab ringkas, ramah pelajar, dan akurat dalam Bahasa Indonesia (kecuali pengguna bertanya dalam Bahasa Inggris).',
    '2. Hanya rekomendasikan URL/path yang ada dalam daftar KATALOG RELEVAN di bawah menggunakan format Markdown [Judul](path). JANGAN mengarang URL atau paket yang tidak ada di daftar.',
    '3. Jika pelajar meminta rencana belajar atau latihan berikutnya, susun urutan 2–4 tautan dari mudah ke menantang.',
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

  const catalog = await loadCatalog();
  const matches = retrieveCatalogContext(latestUserMsg, catalog, userContext, 12);
  const recommendations = matches.slice(0, 5).map(({ id, type, title, path, subject, level, count }) => ({
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
  } catch {
    // Lanjut ke endpoint server / fallback katalog bila Firebase AI Logic belum aktif
  }

  try {
    const res = await fetch('/api/ai-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(idToken ? { Authorization: `Bearer ${idToken}` } : {})
      },
      body: JSON.stringify({ messages, userContext })
    });
    if (res.ok) {
      const data = await res.json().catch(() => null);
      if (data?.reply) {
        recordRateTimestamp();
        return {
          ok: true,
          reply: data.reply,
          recommendations: data.recommendations || recommendations,
          mode: data.mode || 'api'
        };
      }
    }
  } catch {
    // Fallback terakhir menggunakan katalog lokal di browser
  }

  return {
    ok: true,
    reply: buildFallbackReply(latestUserMsg, matches, userContext),
    recommendations,
    mode: 'catalog-fallback'
  };
}
