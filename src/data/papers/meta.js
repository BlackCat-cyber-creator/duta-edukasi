/**
 * Metadata dan utilitas ringan Paket Soal Terstruktur (tanpa mengimpor seluruh bank soal).
 * Dipakai bersama oleh `manifest.js` (UI browser lazy-loaded) dan `index.js` (prerender/tes Node).
 */
import { SITE_URL } from '../../utils/seoRoutes.js';

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
  'olimpiade-bio': { id: 'olimpiade-bio', label: 'Olimpiade Biologi', shortLabel: 'Olimpiade Bio', color: '#059669' },
  'olimpiade-inf': { id: 'olimpiade-inf', label: 'Olimpiade Informatika', shortLabel: 'Olimpiade Inf', color: '#0284C7' },
  'olimpiade-astro': { id: 'olimpiade-astro', label: 'Olimpiade Astronomi', shortLabel: 'Olimpiade Astro', color: '#4338CA' },
  'olimpiade-kebumian': { id: 'olimpiade-kebumian', label: 'Olimpiade Kebumian', shortLabel: 'Olimpiade Kebumian', color: '#B45309' },
  'olimpiade-eko': { id: 'olimpiade-eko', label: 'Olimpiade Ekonomi', shortLabel: 'Olimpiade Eko', color: '#0E7490' }
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
  'cambridge-style': 'Gaya Cambridge / IGCSE',
  'utbk-snbt': 'UTBK / SNBT'
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
  const url = `${SITE_URL}/paket-soal/${paper.subject}/${paper.slug}#soal-${q.no}`;
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

/** Ekstrak tahun 4 digit (2000–2099) dari metadata, slug, atau judul paket. */
export function extractPaperYear(paper) {
  if (Number.isInteger(paper?.year)) return paper.year;
  const src = `${paper?.slug || ''} ${paper?.title || ''}`;
  const matches = src.match(/\b(20\d{2})\b/g);
  if (!matches || matches.length === 0) return null;
  return Number(matches[matches.length - 1]);
}

/** Benar bila paket berbahasa Inggris atau dwibahasa (EN / ID / EN). */
export function englishPapersFilter(paper) {
  return paper?.lang === 'en' || String(paper?.langDisplay || '').includes('EN');
}

/** Kompetisi untuk pusat Olimpiade (/olimpiade dan /olimpiade/:id). Nama sesuai field `competition` pada paket. */
export const OLYMPIAD_COMPETITIONS = [
  {
    id: 'osn',
    label: 'OSN / OSK',
    path: '/olimpiade/osn',
    ogCategory: 'osn',
    competitions: ['OSN-K', 'OSN-P', 'OSN'],
    blurb: 'Olimpiade Sains Nasional jenjang Kabupaten/Kota hingga Nasional: latihan soal Matematika dan sains berbahasa Indonesia.',
    seoTitle: 'Soal & Pembahasan OSN / OSK / OSN-P Matematika & Sains (SD, SMP, SMA)',
    seoDescription: 'Arsip lengkap soal OSN-K dan OSN-P Matematika, IPA, Fisika, Kimia, Biologi, Informatika, Astronomi, Kebumian, dan Ekonomi SD–SMA beserta kunci jawaban dan pembahasan bertahap gratis.',
    faqs: [
      {
        question: 'Apa perbedaan OSN-K, OSN-P, dan OSN Nasional?',
        answer: 'OSN-K adalah seleksi tingkat Kabupaten/Kota, peserta terbaik melaju ke OSN-P (tingkat Provinsi), lalu finalis terbaik bertanding di OSN tingkat Nasional.'
      },
      {
        question: 'Apakah soal OSN di Duta e-dukasi bisa dikerjakan gratis tanpa daftar?',
        answer: 'Ya, seluruh paket soal OSN-K dan OSN-P Matematika, IPA, Fisika, Kimia, Biologi, Informatika, Astronomi, Kebumian, dan Ekonomi beserta kunci jawaban dan pembahasannya dapat dibuka dan dicetak gratis tanpa login.'
      },
      {
        question: 'Jenjang apa saja yang tersedia untuk latihan OSN?',
        answer: 'Tersedia paket soal OSN untuk jenjang SD (Matematika & IPA), SMP (Matematika & IPA), dan SMA (Matematika, Fisika, Kimia, Biologi, Informatika, Astronomi, Kebumian, dan Ekonomi).'
      }
    ]
  },
  {
    id: 'sasmo',
    label: 'SASMO',
    path: '/olimpiade/sasmo',
    ogCategory: 'sasmo',
    competitions: ['SASMO'],
    blurb: 'Soal kompetisi matematika SASMO (berbahasa Inggris) dengan pembahasan langkah demi langkah.',
    seoTitle: 'Soal & Pembahasan SASMO (Singapore and Asian Schools Math Olympiad)',
    seoDescription: 'Latihan soal kompetisi matematika SASMO berbahasa Inggris lengkap dengan kunci jawaban, prinsip konseptual, pembahasan bertahap, dan rubrik penilaian mandiri.',
    faqs: [
      {
        question: 'Dalam bahasa apa soal SASMO disajikan di Duta e-dukasi?',
        answer: 'Soal SASMO disajikan sesuai naskah aslinya dalam Bahasa Inggris agar siswa terbiasa membaca terminologi kompetisi internasional.'
      },
      {
        question: 'Apakah setiap soal SASMO dilengkapi pembahasan langkah demi langkah?',
        answer: 'Ya, setiap butir disertai kunci jawaban, prinsip matematika utama, penurunan langkah demi langkah, dan rubrik penilaian.'
      }
    ]
  },
  {
    id: 'amc',
    label: 'AMC 8 / 10 / 12 & AIME',
    path: '/olimpiade/amc',
    ogCategory: 'amc',
    competitions: ['AMC 8', 'AMC 10', 'AMC 12', 'AIME'],
    amc: true,
    blurb: 'Modul interaktif American Mathematics Competitions (36 bab konsep) serta paket soal resmi AMC 8, AMC 10, dan AMC 12.',
    seoTitle: 'Persiapan & Paket Soal AMC 8, AMC 10, dan AMC 12 Lengkap Pembahasan',
    seoDescription: 'Kumpulan 36 modul konsep interaktif serta paket soal AMC 8, AMC 10A/10B, dan AMC 12A/12B lengkap dengan diagram, kunci jawaban, dan pembahasan bertahap.',
    faqs: [
      {
        question: 'Apa beda AMC 8, AMC 10, dan AMC 12?',
        answer: 'AMC 8 ditujukan untuk siswa hingga kelas 8 SMP, AMC 10 untuk kelas 9–10, dan AMC 12 untuk kelas 11–12 SMA menuju jalur AIME.'
      },
      {
        question: 'Bagaimana cara belajar AMC secara terstruktur di Duta e-dukasi?',
        answer: 'Mulailah dari 36 bab konsep interaktif AMC 8/10/12 (berbahasa Indonesia) untuk menguasai teknik inti, lalu berlatih menggunakan paket soal tahunan AMC 8, 10A/10B, dan 12A/12B.'
      }
    ]
  },
  {
    id: 'hkimo',
    label: 'HKIMO',
    path: '/olimpiade/hkimo',
    ogCategory: 'olimpiade',
    competitions: ['HKIMO'],
    blurb: 'Latihan persiapan HKIMO (berbahasa Inggris) dengan pembahasan lengkap.',
    seoTitle: 'Latihan Soal & Pembahasan HKIMO (Hong Kong International Mathematical Olympiad)',
    seoDescription: 'Kumpulan soal persiapan HKIMO berbahasa Inggris untuk mengasah logika, aritmetika, teori bilangan, geometri, dan kombinatorika lengkap pembahasan.',
    faqs: [
      {
        question: 'Topik apa saja yang diujikan di HKIMO?',
        answer: 'HKIMO menguji lima area inti: Logical Thinking, Arithmetic/Algebra, Number Theory, Geometry, dan Combinatorics.'
      },
      {
        question: 'Apakah paket latihan HKIMO dapat dicetak?',
        answer: 'Ya, setiap halaman paket memiliki tombol cetak yang menghasilkan lembar soal rapi beserta kode QR untuk membuka pembahasan daring.'
      }
    ]
  },
  {
    id: 'timo',
    label: 'TIMO',
    path: '/olimpiade/timo',
    ogCategory: 'olimpiade',
    competitions: ['TIMO'],
    blurb: 'Soal babak penyisihan TIMO (berbahasa Inggris) beserta pembahasan.',
    seoTitle: 'Soal & Pembahasan TIMO (Thailand International Mathematical Olympiad)',
    seoDescription: 'Latihan soal Thailand International Mathematical Olympiad (TIMO) Heat Round berbahasa Inggris lengkap dengan kunci jawaban dan pembahasan langkah demi langkah.',
    faqs: [
      {
        question: 'Apa fokus utama soal TIMO?',
        answer: 'TIMO Heat Round menguji 5 topik yang seimbang: Logical Thinking, Arithmetic/Algebra, Number Theory, Geometry, dan Combinatorics.'
      }
    ]
  },
  {
    id: 'simoc',
    label: 'SIMOC',
    path: '/olimpiade/simoc',
    ogCategory: 'olimpiade',
    competitions: ['SIMOC'],
    blurb: 'Soal kompetisi SIMOC (berbahasa Inggris) beserta pembahasan konseptual.',
    seoTitle: 'Soal & Pembahasan SIMOC (Singapore International Math Olympiad Challenge)',
    seoDescription: 'Paket soal SIMOC berbahasa Inggris lengkap dengan kunci jawaban, prinsip pemecahan masalah, dan pembahasan terperinci.',
    faqs: [
      {
        question: 'Bagaimana tingkat kesulitan soal SIMOC?',
        answer: 'SIMOC memadukan soal pilihan ganda dan isian singkat yang menekankan penalaran kreatif, pola bilangan, dan strategi logika.'
      }
    ]
  },
  {
    id: 'smo',
    label: 'SMO (Singapore)',
    path: '/olimpiade/smo',
    ogCategory: 'smo',
    competitions: ['SMO'],
    blurb: 'Singapore Mathematical Olympiad (Junior & Senior) berbahasa Inggris dengan pembahasan konseptual.',
    seoTitle: 'Soal & Pembahasan SMO (Singapore Mathematical Olympiad Junior, Senior, Open)',
    seoDescription: 'Arsip soal Singapore Mathematical Olympiad (SMO Junior, Senior, dan Open) berbahasa Inggris dengan pembuktian konseptual, kunci jawaban, dan rubrik.',
    faqs: [
      {
        question: 'Apa saja kategori di SMO (Singapore)?',
        answer: 'SMO terdiri dari divisi Junior (SMP), Senior (SMA awal), dan Open (terbuka hingga pra-olimpiade internasional), dengan tingkat ketelitian aljabar dan teori bilangan yang tinggi.'
      }
    ]
  },
  {
    id: 'ikmc',
    label: 'IKMC / Kangaroo',
    path: '/olimpiade/ikmc',
    ogCategory: 'olimpiade',
    competitions: ['IKMC', 'Kangaroo'],
    blurb: 'International Kangaroo Mathematics Contest (IKMC / Math Kangaroo) untuk SD, SMP, dan SMA.',
    seoTitle: 'Soal & Pembahasan IKMC / Math Kangaroo (Kadett, Student, SD–SMA)',
    seoDescription: 'Latihan soal International Kangaroo Mathematics Contest (IKMC / Singapore Math Kangaroo) lengkap kunci jawaban dan pembahasan konseptual.',
    faqs: [
      {
        question: 'Untuk jenjang apa kompetisi IKMC / Math Kangaroo?',
        answer: 'IKMC mencakup jenjang SD hingga SMA (Pre-Ecolier, Ecolier, Benjamin, Kadett, Junior, dan Student) dengan soal penalaran visual dan logika yang ramah bagi pemula olimpiade.'
      }
    ]
  },
  {
    id: 'ksm',
    label: 'KSM',
    path: '/olimpiade/ksm',
    ogCategory: 'osn',
    competitions: ['KSM'],
    blurb: 'Kompetisi Sains Madrasah (Matematika & IPA) dengan pembahasan bertahap.',
    seoTitle: 'Soal & Pembahasan KSM (Kompetisi Sains Madrasah) Matematika & Kimia',
    seoDescription: 'Kumpulan soal Kompetisi Sains Madrasah (KSM) jenjang MA/SMA lengkap perhitungan eksak, kunci jawaban, dan pembahasan bertahap.',
    faqs: [
      {
        question: 'Apa ciri khas soal KSM?',
        answer: 'KSM menggabungkan penguasaan materi sains/matematika setara OSN dengan konteks terintegrasi budaya dan keislaman.'
      }
    ]
  },
  {
    id: 'kmnr',
    label: 'KMNR',
    path: '/olimpiade/kmnr',
    ogCategory: 'olimpiade',
    competitions: ['KMNR'],
    blurb: 'Kompetisi Matematika Nalaria Realistik untuk SD, SMP, dan SMA.',
    seoTitle: 'Soal & Pembahasan KMNR (Kompetisi Matematika Nalaria Realistik)',
    seoDescription: 'Latihan soal Kompetisi Matematika Nalaria Realistik (KMNR) lengkap kunci jawaban dan pembahasan penalaran langkah demi langkah.',
    faqs: [
      {
        question: 'Apa fokus soal KMNR?',
        answer: 'KMNR menekankan matematika nalaria realistik—menghubungkan masalah sehari-hari dengan pemodelan logika dan aritmetika.'
      }
    ]
  },
  {
    id: 'kompetisi-nasional',
    label: 'Kompetisi Nasional Lainnya',
    path: '/olimpiade/kompetisi-nasional',
    ogCategory: 'olimpiade',
    competitions: ['OMVN', 'KOM', 'OMITS', 'OPTIKA'],
    blurb: 'Soal kompetisi matematika dan sains nasional universitas/lembaga (OMVN, KOM, OMITS, dll.).',
    seoTitle: 'Soal & Pembahasan Kompetisi Matematika Nasional (OMVN, OMITS, KOM)',
    seoDescription: 'Arsip soal kompetisi matematika nasional perguruan tinggi dan lembaga seperti OMVN lengkap kunci jawaban dan pembahasan eksak.',
    faqs: [
      {
        question: 'Kompetisi apa yang termasuk di kategori ini?',
        answer: 'Kategori ini menghimpun soal kompetisi nasional seperti OMVN dan kompetisi universitas/lembaga setara tingkat OSN.'
      }
    ]
  },
  {
    id: 'pembinaan',
    label: 'Seri Pembinaan OSN',
    path: '/olimpiade/pembinaan',
    ogCategory: 'osn',
    competitions: ['Seri Pembinaan OSN'],
    blurb: 'Seri latihan Bilangan berjenjang (Basic sampai Elite) untuk pembinaan OSN SD dan SMP.',
    seoTitle: 'Seri Pembinaan OSN Matematika SD & SMP (Basic hingga Elite)',
    seoDescription: '18 paket latihan Teori Bilangan Olimpiade SD dan SMP berjenjang dari Basic 1–2, Intermediate, Advanced, Expert, hingga Elite Olympiad lengkap pembahasan.',
    faqs: [
      {
        question: 'Bagaimana urutan belajar Seri Pembinaan OSN?',
        answer: 'Mulailah dari Basic 1 & 2, lanjut ke Intermediate 1 & 2, Advanced 1 & 2, Expert 1 & 2, hingga Elite Olympiad. Setiap tingkat menyediakan 30–40 soal terkurasi.'
      }
    ]
  }
];

export function getOlympiadCompetition(id) {
  return OLYMPIAD_COMPETITIONS.find((c) => c.id === id) || null;
}

export function competitionOfPaper(paper) {
  if (!paper?.competition) return null;
  return OLYMPIAD_COMPETITIONS.find((c) => c.competitions.includes(paper.competition)) || null;
}

const PEMBINAAN_ORDER = [
  'basic-1', 'basic-2', 'intermediate-1', 'intermediate-2',
  'advanced-1', 'advanced-2', 'expert-1', 'expert-2', 'elite'
];

function pembinaanRank(slug) {
  const s = String(slug || '');
  const idx = PEMBINAAN_ORDER.findIndex((tier) => s.endsWith(tier));
  return idx === -1 ? 99 : idx;
}

/**
 * Mengembalikan { prev, next, related } untuk alur belajar antar-paket soal.
 * Bekerja baik dengan objek manifest maupun paket penuh.
 */
export function getRelatedPapers(paper, allPapers = []) {
  if (!paper || !allPapers.length) return { prev: null, next: null, related: [] };
  const lvl = levelNameOfGrade(paper.grade);

  let ladder = [];
  if (paper.competition === 'Seri Pembinaan OSN') {
    ladder = allPapers
      .filter((p) => p.competition === 'Seri Pembinaan OSN' && levelNameOfGrade(p.grade) === lvl)
      .sort((a, b) => pembinaanRank(a.slug) - pembinaanRank(b.slug));
  } else {
    ladder = allPapers
      .filter((p) => p.subject === paper.subject && p.competition === paper.competition && levelNameOfGrade(p.grade) === lvl)
      .sort((a, b) => {
        const ya = extractPaperYear(a) ?? 9999;
        const yb = extractPaperYear(b) ?? 9999;
        if (ya !== yb) return ya - yb;
        return String(a.slug).localeCompare(String(b.slug));
      });
  }

  const idx = ladder.findIndex((p) => p.id === paper.id);
  const prev = idx > 0 ? ladder[idx - 1] : null;
  const next = idx >= 0 && idx < ladder.length - 1 ? ladder[idx + 1] : null;

  const exclude = new Set([paper.id, prev?.id, next?.id].filter(Boolean));
  const sameComp = allPapers.filter((p) => !exclude.has(p.id) && p.competition === paper.competition);
  const sameSubject = allPapers.filter((p) => !exclude.has(p.id) && p.competition !== paper.competition && p.subject === paper.subject);
  const related = [...sameComp, ...sameSubject].slice(0, 4);

  return { prev, next, related };
}
