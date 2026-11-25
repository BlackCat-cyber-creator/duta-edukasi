import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { retrieveCatalogContext, buildFallbackReply } from './_retriever.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CATALOG_PATH = path.join(__dirname, '_catalog.json');
let cachedCatalog = null;

function getCatalog() {
  if (!cachedCatalog) {
    const raw = fs.readFileSync(CATALOG_PATH, 'utf8');
    cachedCatalog = JSON.parse(raw);
  }
  return cachedCatalog;
}

const DEFAULT_FIREBASE_WEB_API_KEY = process.env.FIREBASE_WEB_API_KEY || process.env.VITE_FIREBASE_API_KEY || 'AIzaSyAYoJsUL0x7dBAGNX69psNZpmquqaoTnjM';
const RATE_LIMIT_MAX = 25;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const rateBuckets = new Map();

function checkRateLimit(uid) {
  const now = Date.now();
  const bucket = (rateBuckets.get(uid) || []).filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  if (bucket.length >= RATE_LIMIT_MAX) return false;
  bucket.push(now);
  rateBuckets.set(uid, bucket);
  return true;
}

async function verifyFirebaseIdToken(idToken) {
  if (!idToken) return null;
  try {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(DEFAULT_FIREBASE_WEB_API_KEY)}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken })
    });
    if (!res.ok) return null;
    const data = await res.json();
    const u = data?.users?.[0];
    return u?.localId ? { uid: u.localId, email: u.email || '', displayName: u.displayName || '' } : null;
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Metode tidak diizinkan.' });
    return;
  }

  const authHeader = String(req.headers.authorization || '');
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
  const verifiedUser = await verifyFirebaseIdToken(token);
  if (!verifiedUser) {
    res.status(401).json({ error: 'Silakan masuk ke akun Duta e-dukasi terlebih dahulu untuk menggunakan Asisten AI.' });
    return;
  }

  if (!checkRateLimit(verifiedUser.uid)) {
    res.status(429).json({ error: 'Batas pertanyaan AI per jam (25 pesan) tercapai. Silakan coba lagi beberapa saat lagi.' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const rawMessages = Array.isArray(body?.messages) ? body.messages : [];
  const messages = rawMessages
    .slice(-6)
    .map((m) => ({
      role: m?.role === 'assistant' ? 'model' : 'user',
      text: String(m?.text || '').trim().slice(0, 600)
    }))
    .filter((m) => m.text.length > 0);

  const latestUserMsg = [...messages].reverse().find((m) => m.role === 'user')?.text || '';
  if (!latestUserMsg) {
    res.status(400).json({ error: 'Pesan tidak boleh kosong.' });
    return;
  }

  const userContext = body?.userContext && typeof body.userContext === 'object' ? body.userContext : {};
  const catalog = getCatalog();
  const matches = retrieveCatalogContext(latestUserMsg, catalog, userContext, 12);
  const recommendations = matches.slice(0, 5).map(({ id, type, title, path: p, subject, level, count }) => ({
    id, type, title, path: p, subject, level, count
  }));

  const geminiKey = process.env.GEMINI_API_KEY;
  if (!geminiKey) {
    res.status(200).json({
      reply: buildFallbackReply(latestUserMsg, matches, userContext),
      recommendations,
      mode: 'catalog-fallback'
    });
    return;
  }

  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash-lite';
  const catalogLines = matches.map((m) =>
    `- [${m.title}](${m.path}) | tipe=${m.type} | mapel=${m.subject} | level=${m.level || '-'} | topik=${m.topic || '-'}`
  ).join('\n');

  const systemInstruction = [
    'Kamu adalah Asisten Belajar Duta e-dukasi (portal belajar Matematika, IPA, Fisika, Kimia, Biologi Kelas 4–12, TKA, dan Olimpiade OSN/AMC/SASMO/SMO/HKIMO/TIMO/SIMOC/IKMC).',
    `Statistik situs saat ini: ${catalog.stats.totalPapers} Paket Soal terstruktur, ${catalog.stats.totalSchoolChapters} bab kurikulum sekolah, dan ${catalog.stats.totalAmcChapters} modul AMC.`,
    `Konteks pelajar: nama="${verifiedUser.displayName || 'Pelajar'}", jenjang="${userContext.targetLevel || 'belum diisi'}", target="${(userContext.targetCompetitions || []).join(', ') || 'umum'}", halamanSaatIni="${userContext.currentPath || '/'}".`,
    'Aturan ketat:',
    '1. Jawab ringkas, ramah pelajar, dan akurat dalam Bahasa Indonesia (kecuali pengguna bertanya dalam Bahasa Inggris).',
    '2. Hanya rekomendasikan URL/path yang ada dalam daftar KATALOG RELEVAN di bawah menggunakan format Markdown [Judul](path). JANGAN mengarang URL atau paket yang tidak ada di daftar.',
    '3. Jika pelajar meminta rencana belajar atau latihan berikutnya, susun urutan 2–4 tautan dari mudah ke menantang.',
    '',
    'KATALOG RELEVAN:',
    catalogLines
  ].join('\n');

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': geminiKey
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemInstruction }] },
          contents: messages.map((m) => ({ role: m.role, parts: [{ text: m.text }] })),
          generationConfig: { temperature: 0.4, maxOutputTokens: 650 }
        })
      }
    );

    if (!geminiRes.ok) {
      res.status(200).json({
        reply: buildFallbackReply(latestUserMsg, matches, userContext),
        recommendations,
        mode: 'catalog-fallback'
      });
      return;
    }

    const payload = await geminiRes.json();
    const reply = payload?.candidates?.[0]?.content?.parts?.map((p) => p.text || '').join('').trim();
    if (!reply) {
      res.status(200).json({
        reply: buildFallbackReply(latestUserMsg, matches, userContext),
        recommendations,
        mode: 'catalog-fallback'
      });
      return;
    }

    res.status(200).json({ reply, recommendations, mode: 'gemini', model });
  } catch {
    res.status(200).json({
      reply: buildFallbackReply(latestUserMsg, matches, userContext),
      recommendations,
      mode: 'catalog-fallback'
    });
  }
}
