/**
 * Retriever katalog lokal untuk Asisten Belajar AI Duta e-dukasi.
 * Murni JS tanpa ketergantungan eksternal agar cepat di Vercel Serverless & mudah diuji di Vitest.
 */

const ALIAS_MAP = {
  mtk: 'matematika',
  math: 'matematika',
  fis: 'fisika',
  kim: 'kimia',
  bio: 'biologi',
  osk: 'osn',
  osp: 'osn',
  ksn: 'osn',
  soal: 'paket',
  latihan: 'paket',
  ujian: 'tka',
  formula: 'rumus',
  inggris: 'english'
};

export function tokenizeQuery(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 2)
    .map((w) => ALIAS_MAP[w] || w);
}

/**
 * Mengembalikan item katalog paling relevan untuk pertanyaan pengguna + konteks profilnya.
 */
export function retrieveCatalogContext(query, catalog, userContext = {}, limit = 12) {
  const items = catalog?.items || [];
  if (!items.length) return [];

  const tokens = tokenizeQuery(query);
  const completedIds = new Set(userContext?.completedPaperIds || []);
  const targetLevel = String(userContext?.targetLevel || '').toUpperCase();
  const targetComps = (userContext?.targetCompetitions || []).map((c) => String(c).toLowerCase());
  const wantsPapers = /\b(paket|soal|latihan|osn|amc|sasmo|smo|hkimo|timo|simoc|ikmc|ksm|kmnr|try\s*out)\b/i.test(query);
  const wantsMaterial = /\b(materi|bab|belajar|konsep|rumus|jelaskan)\b/i.test(query);

  const scored = items.map((item) => {
    let score = 0;
    const titleLow = String(item.title || '').toLowerCase();
    const hay = `${titleLow} ${item.keywords || ''} ${item.topic || ''} ${item.subject || ''} ${item.competition || ''}`.toLowerCase();

    for (const tok of tokens) {
      if (titleLow.includes(tok)) score += 10;
      else if (hay.includes(tok)) score += 5;
    }

    if (wantsPapers && (item.type === 'paper' || item.type === 'competition')) score += 3;
    if (wantsMaterial && (item.type === 'chapter' || item.type === 'amc' || item.id === 'rumus')) score += 3;

    if (targetLevel && item.level === targetLevel) score += 2.5;
    if (targetComps.length && item.competition) {
      const compLow = item.competition.toLowerCase();
      if (targetComps.some((tc) => compLow.includes(tc))) score += 3;
    }
    if (item.type === 'paper' && completedIds.has(item.id)) score -= 2;
    if (userContext?.currentPath && item.path === userContext.currentPath) score += 2;

    return { item, score };
  });

  const positives = scored.filter((x) => x.score > 0).sort((a, b) => b.score - a.score);
  if (positives.length > 0) {
    return positives.slice(0, limit).map((x) => x.item);
  }

  // Default rekomendasi awal sesuai level target bila query terlalu umum ("halo", "rekomendasi")
  const fallback = items.filter((it) => !targetLevel || it.level === targetLevel || it.type === 'competition');
  return fallback.slice(0, limit);
}

export function buildFallbackReply(query, matches = [], userContext = {}) {
  const levelNote = userContext?.targetLevel ? ` untuk jenjang **${userContext.targetLevel}**` : '';
  if (!matches.length) {
    return `Halo! Kamu bisa menjelajahi [Materi per Kelas](/), [Pusat Olimpiade](/olimpiade), atau [82+ Paket Soal Interaktif](/paket-soal) di Duta e-dukasi.`;
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
    'Klik salah satu tautan di atas untuk langsung membuka halaman soal, kunci jawaban, atau pembahasannya.'
  ].join('\n');
}
