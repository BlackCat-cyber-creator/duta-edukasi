/**
 * Retriever katalog lokal untuk Asisten Belajar AI Duta e-dukasi.
 * Murni JS tanpa ketergantungan eksternal agar cepat di client (`firebase/ai`),
 * Vercel Serverless, dan mudah diuji di Vitest.
 */

const ALIAS_MAP = {
  mtk: 'matematika',
  math: 'matematika',
  fis: 'fisika',
  kim: 'kimia',
  bio: 'biologi',
  inf: 'informatika',
  astro: 'astronomi',
  eko: 'ekonomi',
  osk: 'osn',
  osp: 'osn',
  ksn: 'osn',
  soal: 'paket',
  latihan: 'paket',
  ujian: 'tka',
  formula: 'rumus',
  inggris: 'english'
};

const STOPWORDS = new Set([
  'hi', 'hai', 'halo', 'hello', 'hey', 'hei', 'yang', 'dan', 'di', 'ke', 'dari', 'untuk',
  'apa', 'ada', 'bisa', 'saya', 'aku', 'kamu', 'tolong', 'dong', 'mau', 'ingin',
  'the', 'and', 'for', 'what', 'how', 'can', 'you', 'me', 'is', 'are', 'to', 'of', 'in',
  'ya', 'nih', 'kak', 'pak', 'bu', 'min', 'sih', 'nya', 'ini', 'itu', 'dengan', 'atau'
]);

const ACADEMIC_OR_SITE_KEYWORD_RE = /\b(matematika|mtk|math|ipa|fisika|kimia|biologi|informatika|astronomi|kebumian|ekonomi|rumus|formula|bab|materi|paket|soal|latihan|osn|osk|osp|ksn|amc|aime|sasmo|smo|hkimo|timo|simoc|ikmc|kangaroo|ksm|kmnr|amo|asmopss|imso|cemc|tka|utbk|snbt|igcse|cambridge|aljabar|geometri|bilangan|peluang|trigonometri|kalkulus|kinematika|dinamika|termokimia|stoikiometri|genetika|ekosistem|sd|smp|sma|kelas)\b/i;

const PURE_GREETING_RE = /^(hi+|hai+|halo+|hello+|hey+|hei+|p|tes+|test+|pagi|siang|sore|malam|selamat\s+(pagi|siang|sore|malam)|apa\s+kabar|ok|oke|okay|siap|makasih|terima\s+kasih|thanks|thank\s+you|tq|thx|permisi|yo+)[!.,?\s]*$/i;

const GRATITUDE_OR_ACK_RE = /^(ok|oke|okay|siap|makasih|terima\s+kasih|thanks|thank\s+you|tq|thx)[!.,?\s]*$/i;

export function isGreetingOrSmallTalk(text) {
  const clean = String(text || '').trim();
  if (!clean) return false;
  if (ACADEMIC_OR_SITE_KEYWORD_RE.test(clean)) return false;
  return PURE_GREETING_RE.test(clean);
}

export function tokenizeQuery(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 2 && !STOPWORDS.has(w))
    .map((w) => ALIAS_MAP[w] || w);
}

function splitWords(text) {
  return String(text || '').toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}

/**
 * Mengembalikan item katalog paling relevan untuk pertanyaan pengguna + konteks profilnya.
 */
export function retrieveCatalogContext(query, catalog, userContext = {}, limit = 12) {
  const items = catalog?.items || [];
  if (!items.length || isGreetingOrSmallTalk(query)) return [];

  const tokens = tokenizeQuery(query);
  const completedIds = new Set(userContext?.completedPaperIds || []);
  const targetLevel = String(userContext?.targetLevel || '').toUpperCase();
  const targetComps = (userContext?.targetCompetitions || []).map((c) => String(c).toLowerCase());
  const wantsPapers = /\b(paket|soal|latihan|osn|amc|aime|sasmo|smo|hkimo|timo|simoc|ikmc|ksm|kmnr|utbk|snbt|try\s*out)\b/i.test(query);
  const wantsMaterial = /\b(materi|bab|belajar|konsep|rumus|jelaskan)\b/i.test(query);
  const asksRecommendation = /\b(rekomendasi|saran|mulai|jalur|rencana|paket|soal|materi|latihan)\b/i.test(query);

  const scored = items.map((item) => {
    let score = 0;
    const titleLow = String(item.title || '').toLowerCase();
    const titleWords = splitWords(titleLow);
    const hay = `${titleLow} ${item.topic || ''} ${item.subject || ''} ${item.competition || ''} ${item.level || ''} ${item.grade ? `kelas ${item.grade}` : ''} ${item.keywords || ''}`.toLowerCase();
    const hayWords = splitWords(hay);

    for (const tok of tokens) {
      if (titleWords.includes(tok)) {
        score += 10;
      } else if (hayWords.includes(tok)) {
        score += 5;
      } else if (tok.length >= 4) {
        if (titleWords.some((w) => w.startsWith(tok))) score += 6;
        else if (hayWords.some((w) => w.startsWith(tok))) score += 3;
      }
    }

    if (score > 0) {
      if (wantsPapers && (item.type === 'paper' || item.type === 'competition')) score += 3;
      if (wantsMaterial && (item.type === 'chapter' || item.type === 'amc' || item.id === 'rumus')) score += 3;
      if (targetLevel && item.level === targetLevel) score += 2.5;
      if (targetComps.length && item.competition) {
        const compLow = item.competition.toLowerCase();
        if (targetComps.some((tc) => compLow.includes(tc))) score += 3;
      }
      if (item.type === 'paper' && completedIds.has(item.id)) score -= 2;
      if (userContext?.currentPath && item.path === userContext.currentPath) score += 2;
    }

    return { item, score };
  });

  const positives = scored.filter((x) => x.score > 0).sort((a, b) => b.score - a.score);
  if (positives.length > 0) {
    return positives.slice(0, limit).map((x) => x.item);
  }

  // Fallback rekomendasi awal hanya jika user memang meminta saran/rekomendasi/latihan
  if (asksRecommendation) {
    const fallback = items.filter((it) => !targetLevel || it.level === targetLevel || it.type === 'competition');
    return fallback.slice(0, limit);
  }

  return [];
}

export function buildFallbackReply(query, matches = [], userContext = {}) {
  const levelNote = userContext?.targetLevel ? ` untuk jenjang **${userContext.targetLevel}**` : '';
  if (isGreetingOrSmallTalk(query)) {
    if (GRATITUDE_OR_ACK_RE.test(String(query || '').trim())) {
      return 'Sama-sama! Kalau ada materi, rumus, atau paket soal yang ingin dicari, langsung tanyakan saja ya.';
    }
    return 'Halo! Saya Asisten Belajar **Duta e-dukasi**. Kamu bisa tanya materi pelajaran (Matematika, IPA, Fisika, Kimia, Biologi), rumus, atau cari latihan soal OSN, AMC, SASMO, dan TKA. Mau belajar topik apa hari ini?';
  }
  if (!matches.length) {
    return 'Saya belum menemukan paket spesifik untuk topik tersebut di katalog cepat. Kamu bisa langsung menjelajahi [Materi per Kelas](/), [Pusat Olimpiade](/olimpiade), [Paket Soal](/paket-soal), atau [Kumpulan Rumus](/rumus) — atau coba tulis topik lebih spesifik (mis. "OSN Fisika", "Termokimia", atau "AMC 8").';
  }
  const lines = matches.slice(0, 5).map((m) => {
    const meta = [m.subject, m.level, m.count ? `${m.count} soal` : null].filter(Boolean).join(' · ');
    return `- [${m.title}](${m.path})${meta ? ` (${meta})` : ''}${m.topic ? ` — ${m.topic}` : ''}`;
  });
  return [
    `Berikut rekomendasi materi dan paket soal yang paling cocok${levelNote} berdasarkan pencarianmu:`,
    '',
    ...lines,
    '',
    'Klik salah satu tautan di atas untuk langsung membuka halaman soal, kunci jawaban, atau pembahasannya.',
    '',
    '_Catatan: saat ini berjalan di mode pencarian katalog (layanan percakapan Gemini belum aktif)._'
  ].join('\n');
}
