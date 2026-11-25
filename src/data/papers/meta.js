/**
 * Metadata dan utilitas ringan Paket Soal Terstruktur (tanpa mengimpor seluruh bank soal).
 * Dipakai bersama oleh `manifest.js` (UI browser lazy-loaded) dan `index.js` (prerender/tes Node).
 */

export const PAPER_SUBJECT_META = {
  fisika: { id: 'fisika', label: 'Fisika', shortLabel: 'Fisika', color: '#0369A1' },
  kimia: { id: 'kimia', label: 'Kimia', shortLabel: 'Kimia', color: '#6D28D9' },
  biologi: { id: 'biologi', label: 'Biologi', shortLabel: 'Biologi', color: '#047857' },
  matematika: { id: 'matematika', label: 'Matematika', shortLabel: 'Matematika', color: '#12337A' },
  ipa: { id: 'ipa', label: 'IPA', shortLabel: 'IPA', color: '#0F766E' },
  'olimpiade-mat': { id: 'olimpiade-mat', label: 'Olimpiade Matematika', shortLabel: 'Olimpiade Mat', color: '#9F1239' },
  'olimpiade-sains': { id: 'olimpiade-sains', label: 'Olimpiade Sains (OSN)', shortLabel: 'Olimpiade Sains', color: '#0D9488' },
  'olimpiade-fis': { id: 'olimpiade-fis', label: 'Olimpiade Fisika', shortLabel: 'Olimpiade Fis', color: '#1D4ED8' },
  'olimpiade-kim': { id: 'olimpiade-kim', label: 'Olimpiade Kimia', shortLabel: 'Olimpiade Kim', color: '#7C3AED' },
  'olimpiade-bio': { id: 'olimpiade-bio', label: 'Olimpiade Biologi', shortLabel: 'Olimpiade Bio', color: '#059669' }
};

export function paperPath(paper) {
  return `/paket-soal/${paper.subject}/${paper.slug}`;
}

export function subjectHubPath(subject) {
  return subject && subject !== 'all' ? `/paket-soal/${subject}` : '/paket-soal';
}

/** Nama ramah untuk slug jalur paket (jangan tampilkan slug mentah seperti "olimpiade-sd" ke pengguna). */
export const TRACK_LABELS = {
  'olimpiade-sd': 'Olimpiade SD',
  'olimpiade-smp': 'Olimpiade SMP',
  'olimpiade-sma': 'Olimpiade SMA',
  'kurikulum-merdeka': 'Kurikulum Merdeka',
  'cambridge-style': 'Gaya Cambridge / IGCSE'
};

/** Hanya paket bergaya mark scheme (Cambridge/Edexcel/IGCSE) yang memakai istilah "Marks". */
const MARK_SCHEME_TRACKS = new Set(['cambridge-style']);

/**
 * Jumlah soal sebenarnya. Paket pilihan ganda menyimpan "Bagian A" dan "Bagian B" sebagai
 * dua kelompok, sedangkan soalnya ada di dalam `parts`; pada entri manifest, `itemCount` sudah dihitung terlebih dahulu.
 */
export function countPaperItems(paper) {
  if (Number.isInteger(paper?.itemCount)) return paper.itemCount;
  return (paper?.questions || []).reduce((sum, q) => sum + (q.parts?.length || 1), 0);
}

export function trackLabel(paper) {
  return TRACK_LABELS[paper.track] || 'Latihan';
}

export function levelNameOfGrade(grade) {
  const g = Number(grade);
  if (g <= 6) return 'SD';
  if (g <= 9) return 'SMP';
  return 'SMA';
}

/** Label bahasa yang tenang: ID, EN, atau ID / EN. */
export function paperLangLabel(paper) {
  return paper.langDisplay || (paper.lang === 'en' ? 'EN' : 'ID');
}

/** Tag kompetisi/seri, mis. "SASMO · Kelas 8" atau "Seri Pembinaan OSN · SD". */
export function paperTag(paper) {
  const comp = paper.competition || (PAPER_SUBJECT_META[paper.subject]?.label ?? paper.subject);
  if (/^Seri Pembinaan/i.test(comp)) return `${comp} · ${levelNameOfGrade(paper.grade)}`;
  return `${comp} · Kelas ${paper.grade}`;
}

/** Ringkasan angka untuk kartu: "40 Soal", plus "35 poin" atau "35 Marks" bila relevan. */
export function formatPaperMeta(paper) {
  const items = countPaperItems(paper);
  const usesMarks = MARK_SCHEME_TRACKS.has(paper.track);
  let score = null;
  if (usesMarks) score = `${paper.totalMarks} Marks`;
  else if (paper.totalMarks !== items) score = `${paper.totalMarks} poin`;
  return { items, itemsLabel: `${items} Soal`, score, usesMarks, track: trackLabel(paper), lang: paperLangLabel(paper), tag: paperTag(paper) };
}

/** Tautan GitHub Issue terisi otomatis untuk melaporkan koreksi kunci atau solusi alternatif. */
export function buildCorrectionIssueUrl(paper, q, pt, repoUrl = 'https://github.com/BlackCat-cyber-creator/duta-edukasi') {
  const base = `${repoUrl}/issues/new`;
  const partLabel = `Q${q.no}(${pt.label})`;
  const title = `[Koreksi Soal] ${paper.id} ${partLabel} — ${paper.title}`;
  const url = `https://dutaedukasi.id/paket-soal/${paper.subject}/${paper.slug}#soal-${q.no}`;
  const body = [
    `**Paket Soal:** ${paper.title} (\`${paper.id}\`)`,
    `**Bagian:** ${partLabel}`,
    `**Tautan:** ${url}`,
    '',
    '**Jenis masukan:** (centang salah satu)',
    '- [ ] Koreksi kunci jawaban / perhitungan',
    '- [ ] Tambahan metode penyelesaian alternatif (lebih ringkas / konseptual)',
    '- [ ] Typo naskah / tampilan rumus KaTeX',
    '',
    '**Uraian / Usulan Pembahasan:**',
    ''
  ].join('\n');
  const params = new URLSearchParams({ title, body, labels: 'koreksi-soal' });
  return `${base}?${params.toString()}`;
}

/** Kompetisi untuk pusat Olimpiade (/olimpiade). Nama sesuai field `competition` pada paket. */
export const OLYMPIAD_COMPETITIONS = [
  { id: 'osn', label: 'OSN / OSK', competitions: ['OSN-K', 'OSN-P', 'OSN'], blurb: 'Olimpiade Sains Nasional jenjang Kabupaten/Kota hingga Nasional: latihan soal Matematika dan sains berbahasa Indonesia.' },
  { id: 'sasmo', label: 'SASMO', competitions: ['SASMO'], blurb: 'Soal kompetisi matematika SASMO (berbahasa Inggris) dengan pembahasan langkah demi langkah.' },
  { id: 'amc', label: 'AMC 8 / 10 / 12', competitions: ['AMC 8', 'AMC 10', 'AMC 12'], amc: true, blurb: 'Modul interaktif American Mathematics Competitions (36 bab konsep) serta paket soal resmi AMC 8, AMC 10, dan AMC 12.' },
  { id: 'hkimo', label: 'HKIMO', competitions: ['HKIMO'], blurb: 'Latihan persiapan HKIMO (berbahasa Inggris) dengan pembahasan lengkap.' },
  { id: 'timo', label: 'TIMO', competitions: ['TIMO'], blurb: 'Soal babak penyisihan TIMO (berbahasa Inggris) beserta pembahasan.' },
  { id: 'simoc', label: 'SIMOC', competitions: ['SIMOC'], blurb: 'Soal kompetisi SIMOC (berbahasa Inggris) beserta pembahasan konseptual.' },
  { id: 'smo', label: 'SMO (Singapore)', competitions: ['SMO'], blurb: 'Singapore Mathematical Olympiad (Junior & Senior) berbahasa Inggris dengan pembahasan konseptual.' },
  { id: 'ikmc', label: 'IKMC / Kangaroo', competitions: ['IKMC', 'Kangaroo'], blurb: 'International Kangaroo Mathematics Contest (IKMC / Math Kangaroo) untuk SD, SMP, dan SMA.' },
  { id: 'ksm', label: 'KSM', competitions: ['KSM'], blurb: 'Kompetisi Sains Madrasah (Matematika & IPA) dengan pembahasan bertahap.' },
  { id: 'kmnr', label: 'KMNR', competitions: ['KMNR'], blurb: 'Kompetisi Matematika Nalaria Realistik untuk SD, SMP, dan SMA.' },
  { id: 'kompetisi-nasional', label: 'Kompetisi Nasional Lainnya', competitions: ['OMVN', 'KOM', 'OMITS', 'OPTIKA'], blurb: 'Soal kompetisi matematika dan sains nasional universitas/lembaga (OMVN, KOM, OMITS, dll.).' },
  { id: 'pembinaan', label: 'Seri Pembinaan OSN', competitions: ['Seri Pembinaan OSN'], blurb: 'Seri latihan Bilangan berjenjang (Basic sampai Elite) untuk pembinaan OSN SD dan SMP.' }
];
