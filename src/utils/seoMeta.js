/**
 * seoMeta:
 * Judul & deskripsi halaman untuk mesin pencari dan pratinjau link (WhatsApp, dsb).
 * Dipakai oleh aplikasi (useDocumentMeta) dan prerender (scripts/prerender.mjs)
 * agar teks yang dibaca Google sama dengan yang tampil di browser.
 */
import {
  SITE_NAME,
  gradePath,
  chapterPath,
  amcLevelPath,
  amcChapterPath,
  subjectOfChapter,
  packetHubPath,
  packetPath
} from './seoRoutes.js';
import { AUTHOR, FOUNDER, ORGANIZATION } from '../data/siteInfo.js';
import { countPaperItems, formatPaperMeta, competitionOfPaper } from '../data/papers/meta.js';

export function ogImageFor(category = 'default') {
  return `/brand/og/${category || 'default'}.png`;
}

/** Teks polos dari string bercampur LaTeX/markdown. */
export function plainText(text) {
  return String(text || '')
    .replace(/\$\$?([^$]*)\$\$?/g, (_, m) => m)
    .replace(/\\(text|mathrm|textbf)\{([^}]*)\}/g, '$2')
    .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '$1/$2')
    .replace(/\\(times|cdot)/g, '×')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}*_#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function truncate(text, max = 155) {
  const t = plainText(text);
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  const minBreak = Math.floor(max * 0.5);
  return `${cut.slice(0, lastSpace > minBreak ? lastSpace : cut.length).trim()}…`;
}

/** Menjaga panjang `<title>` ringkas (default maks 65 karakter) tanpa memotong akhiran penting. */
export function fitTitle(core, suffix = ` | ${SITE_NAME}`, max = 65) {
  const c = plainText(core);
  const s = String(suffix || '');
  if (!s) return truncate(c, max);
  if (c.length + s.length <= max) return `${c}${s}`;
  const budget = max - s.length;
  if (budget >= 20) return `${truncate(c, budget)}${s}`;
  return truncate(c, max);
}

export function levelLabel(grade) {
  const g = Number(grade);
  return g <= 6 ? 'SD' : g <= 9 ? 'SMP' : 'SMA';
}

export const SUBJECT_NAME = {
  matematika: 'Matematika',
  ipa: 'IPA',
  fisika: 'Fisika',
  kimia: 'Kimia',
  biologi: 'Biologi'
};

export function subjectDisplayName(subject, grade) {
  if (subject === 'kimia') return 'Kimia';
  if (subject === 'biologi') return 'Biologi';
  if (subject === 'fisika') return 'Fisika';
  if (subject === 'ipa') return Number(grade) >= 10 ? 'Fisika' : 'IPA';
  return 'Matematika';
}

export const SUBJECT_HUB_INFO = {
  matematika: {
    id: 'matematika',
    name: 'Matematika',
    levelText: 'Kelas 4 SD – 12 SMA',
    grades: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    title: `Materi & Latihan Matematika Kelas 4–12 | ${SITE_NAME}`,
    description: truncate(
      `Ringkasan materi, rumus kunci, contoh soal, dan kuis interaktif Matematika Kelas 4–12 SD, SMP, SMA (Kurikulum Merdeka) gratis di ${SITE_NAME}.`,
      155
    ),
    path: '/matematika',
    ogImage: ogImageFor('matematika')
  },
  ipa: {
    id: 'ipa',
    name: 'IPA Terpadu',
    levelText: 'Kelas 4 SD – 9 SMP',
    grades: [4, 5, 6, 7, 8, 9],
    title: `Materi & Latihan IPA SD–SMP (Kelas 4–9) | ${SITE_NAME}`,
    description: truncate(
      `Materi lengkap IPA SD Kelas 4–6 dan IPA SMP Kelas 7–9: konsep inti, rumus kunci, contoh soal, dan kuis interaktif gratis di ${SITE_NAME}.`,
      155
    ),
    path: '/ipa',
    ogImage: ogImageFor('ipa')
  },
  fisika: {
    id: 'fisika',
    name: 'Fisika SMA',
    levelText: 'Kelas 10 – 12 SMA',
    grades: [10, 11, 12],
    title: `Materi, Rumus & Soal Fisika SMA Kelas 10–12 | ${SITE_NAME}`,
    description: truncate(
      `Portal belajar Fisika SMA Kelas 10–12 Kurikulum Merdeka: kinematika, dinamika, fluida, termodinamika, listrik-magnet, dan fisika modern + kuis.`,
      155
    ),
    path: '/fisika',
    ogImage: ogImageFor('fisika')
  },
  kimia: {
    id: 'kimia',
    name: 'Kimia SMA',
    levelText: 'Kelas 10 – 12 SMA',
    grades: [10, 11, 12],
    title: `Materi, Rumus & Soal Kimia SMA Kelas 10–12 | ${SITE_NAME}`,
    description: truncate(
      `Materi Kimia SMA Kelas 10–12: struktur atom, stoikiometri, termokimia, laju reaksi, kesetimbangan, asam-basa, dan elektrokimia lengkap latihan.`,
      155
    ),
    path: '/kimia',
    ogImage: ogImageFor('kimia')
  },
  biologi: {
    id: 'biologi',
    name: 'Biologi SMA',
    levelText: 'Kelas 10 – 12 SMA',
    grades: [10, 11, 12],
    title: `Materi & Soal Biologi SMA Kelas 10–12 | ${SITE_NAME}`,
    description: truncate(
      `Materi Biologi SMA Kelas 10–12: keanekaragaman hayati, sel, jaringan, organ, metabolisme, genetika, evolusi, dan bioteknologi lengkap kuis.`,
      155
    ),
    path: '/biologi',
    ogImage: ogImageFor('biologi')
  }
};

export function subjectHubMeta(subject) {
  return SUBJECT_HUB_INFO[subject] || SUBJECT_HUB_INFO.matematika;
}

export const HOME_META = {
  title: `${SITE_NAME} — Materi Matematika, Sains & Olimpiade Gratis`,
  description: truncate(
    `Portal belajar gratis ${SITE_NAME}: materi Matematika, IPA (4–9), Fisika, Kimia, Biologi SMA, TKA, Olimpiade OSN, AMC, SASMO, serta Paket Soal ber-rubrik.`,
    152
  ),
  path: '/',
  ogImage: ogImageFor('default')
};

export const OLIMPIADE_HUB_META = {
  title: `Olimpiade Matematika & Sains (OSN, AMC, SASMO) | ${SITE_NAME}`,
  description: truncate(
    `Pusat Olimpiade ${SITE_NAME}: soal & pembahasan OSN/OSK, SASMO, AMC 8/10/12, AIME, SMO, HKIMO, TIMO, SIMOC, IKMC, dan Seri Pembinaan SD–SMA.`,
    155
  ),
  path: '/olimpiade',
  ogImage: ogImageFor('olimpiade')
};

export function olympiadCompetitionMeta(comp, count = 0) {
  if (!comp) return OLIMPIADE_HUB_META;
  const countTag = count > 0 ? ` (${count} Paket)` : '';
  const rawTitle = `${comp.seoTitle || `Soal & Pembahasan ${comp.label}`}${countTag}`;
  return {
    title: fitTitle(rawTitle, ` | ${SITE_NAME}`, 65),
    description: truncate(comp.seoDescription || comp.blurb, 155),
    path: comp.path || `/olimpiade/${comp.id}`,
    ogImage: ogImageFor(comp.ogCategory || 'olimpiade')
  };
}

export const ABOUT_META = {
  title: `Tentang ${SITE_NAME} — Platform Belajar Terbuka`,
  description: truncate(
    `Tentang ${SITE_NAME}: portal belajar Matematika & Sains gratis berlisensi CC BY 4.0 dari ${FOUNDER.name} dan ${AUTHOR.name}, beserta prestasi siswa binaan.`,
    155
  ),
  path: '/tentang'
};

export const PROGRAM_META = {
  title: `Program Bimbel Reguler, Privat & Olimpiade | ${SITE_NAME}`,
  description: truncate(
    `Program ${ORGANIZATION.legalName} di Pontianak & daring: kelas reguler dan privat Matematika, IPA, dan Fisika SD–SMA serta pembinaan Olimpiade OSN & AMC.`,
    155
  ),
  path: '/program'
};

export const FOUNDER_META = {
  title: `Profil Pendiri: ${FOUNDER.name} (${FOUNDER.formalName}) | ${SITE_NAME}`,
  description: truncate(
    `Mengenal ${FOUNDER.name} (${FOUNDER.formalName}), pendiri ${ORGANIZATION.legalName} Pontianak dan pembina Olimpiade Matematika (OSN-Guru 2013 Bandung).`,
    155
  ),
  path: '/pendiri'
};

export const CONTACT_META = {
  title: `Kontak & Lokasi Bimbel ${SITE_NAME} Pontianak`,
  description: truncate(
    `Hubungi ${ORGANIZATION.legalName}, Jl. Siam No. 37, Pontianak Selatan via WhatsApp ${ORGANIZATION.whatsappDisplay} untuk kelas reguler, privat & olimpiade.`,
    155
  ),
  path: '/kontak'
};

export function englishPapersHubMeta(count = 0) {
  return {
    title: `International & English Math/Science Papers | ${SITE_NAME}`,
    description: truncate(
      `Explore ${count > 0 ? `${count} ` : ''}English & bilingual competition and Cambridge papers (AMC 8/10/12, SASMO, SMO, IKMC, HKIMO, TIMO) with full solutions.`,
      155
    ),
    path: '/paket-soal/english',
    lang: 'en',
    ogImage: ogImageFor('english'),
    alternates: [
      { hreflang: 'id', path: '/paket-soal' },
      { hreflang: 'en', path: '/paket-soal/english' },
      { hreflang: 'x-default', path: '/paket-soal' }
    ]
  };
}

export function papersHubMeta(subject = 'all') {
  if (subject === 'english') return englishPapersHubMeta();
  const labelMap = {
    matematika: 'Matematika',
    ipa: 'IPA',
    fisika: 'Fisika',
    kimia: 'Kimia',
    biologi: 'Biologi',
    'olimpiade-mat': 'Olimpiade Matematika',
    'olimpiade-sains': 'Olimpiade Sains',
    'olimpiade-fis': 'Olimpiade Fisika',
    'olimpiade-kim': 'Olimpiade Kimia',
    'olimpiade-bio': 'Olimpiade Biologi',
    'olimpiade-inf': 'Olimpiade Informatika',
    'olimpiade-astro': 'Olimpiade Astronomi',
    'olimpiade-kebumian': 'Olimpiade Kebumian',
    'olimpiade-eko': 'Olimpiade Ekonomi'
  };
  const ogMap = {
    matematika: 'matematika',
    ipa: 'ipa',
    fisika: 'fisika',
    kimia: 'kimia',
    biologi: 'biologi',
    'olimpiade-mat': 'olimpiade',
    'olimpiade-sains': 'osn',
    'olimpiade-fis': 'osn',
    'olimpiade-kim': 'osn',
    'olimpiade-bio': 'osn',
    'olimpiade-inf': 'osn',
    'olimpiade-astro': 'osn',
    'olimpiade-kebumian': 'osn',
    'olimpiade-eko': 'osn'
  };
  const subLabel = labelMap[subject];
  if (subLabel) {
    return {
      title: fitTitle(`Paket Soal ${subLabel} + Kunci & Pembahasan`, ` | ${SITE_NAME}`, 65),
      description: truncate(
        `Kumpulan Paket Soal ${subLabel} ${SITE_NAME} lengkap dengan kunci jawaban, prinsip konsep, pembahasan bertahap, dan rubrik penilaian gratis.`,
        155
      ),
      path: packetHubPath(subject),
      ogImage: ogImageFor(ogMap[subject] || 'paket-soal')
    };
  }
  return {
    title: `Paket Soal Matematika, Sains & Olimpiade | ${SITE_NAME}`,
    description: truncate(
      `Arsip Paket Soal interaktif ${SITE_NAME} (Matematika, IPA, Fisika, Kimia, Biologi & Olimpiade) lengkap kunci jawaban, pembahasan, dan rubrik penilaian.`,
      155
    ),
    path: '/paket-soal',
    ogImage: ogImageFor('paket-soal'),
    alternates: [
      { hreflang: 'id', path: '/paket-soal' },
      { hreflang: 'en', path: '/paket-soal/english' },
      { hreflang: 'x-default', path: '/paket-soal' }
    ]
  };
}

export function paperDetailMeta(paper) {
  const items = countPaperItems(paper);
  const info = formatPaperMeta(paper);
  const comp = competitionOfPaper(paper);
  const scoreNote = info.score ? `, ${info.score}` : '';
  const path = packetPath(paper.subject, paper.slug);

  let ogCategory = 'paket-soal';
  if (comp?.ogCategory) ogCategory = comp.ogCategory;
  else if (['fisika', 'kimia', 'biologi', 'matematika', 'ipa'].includes(paper.subject)) ogCategory = paper.subject;
  else if (paper.lang === 'en') ogCategory = 'english';

  if (paper.lang === 'en') {
    const withBrand = `${paper.title} — Practice Paper & Solutions | ${SITE_NAME}`;
    const enTitle = withBrand.length <= 70
      ? withBrand
      : `${paper.title} — Practice Paper & Solutions`;
    return {
      title: enTitle,
      description: truncate(
        `${paper.title} (${items} questions${scoreNote}) with answer key, core principles, step-by-step solutions, and rubric free on ${SITE_NAME}.`,
        155
      ),
      path,
      lang: 'en',
      ogImage: ogImageFor(ogCategory)
    };
  }

  const hasSoalPrefix = /^(soal|latihan|simulasi|try\s*out)/i.test(String(paper.title || '').trim());
  const titleHead = hasSoalPrefix ? paper.title : `Soal & Pembahasan ${paper.title}`;
  const fullIdTitle = `${titleHead} | ${SITE_NAME}`;
  const idTitle = fullIdTitle.length <= 72
    ? fullIdTitle
    : `${paper.title} | ${SITE_NAME}`.length <= 75
      ? `${paper.title} | ${SITE_NAME}`
      : paper.title;
  return {
    title: idTitle,
    description: truncate(
      `Latihan ${paper.title} (${items} soal${scoreNote}) lengkap kunci jawaban, prinsip konsep, pembahasan bertahap, dan rubrik di ${SITE_NAME}.`,
      155
    ),
    path,
    lang: 'id',
    ogImage: ogImageFor(ogCategory)
  };
}

export const TOPIC_INDEX_META = {
  title: `Daftar Isi Materi Matematika, Sains & Olimpiade | ${SITE_NAME}`,
  description: truncate(
    'Daftar lengkap materi per topik: bilangan, aljabar, geometri, peluang, kalkulus, fisika, kimia, biologi, tata surya, serta olimpiade matematika dan sains.',
    155
  ),
  path: '/daftar-isi'
};

export const FORMULA_INDEX_META = {
  title: `Kumpulan Rumus Matematika, IPA, Fisika & Kimia | ${SITE_NAME}`,
  description: truncate(
    'Referensi cepat rumus & konsep kunci Matematika, IPA (SD–SMP), Fisika, Kimia & Biologi (SMA 10–12), serta Olimpiade AMC lengkap contoh soal.',
    155
  ),
  path: '/rumus',
  ogImage: ogImageFor('rumus')
};

export function tkaHomeMeta() {
  return {
    title: `Latihan Soal TKA Matematika, IPA & Fisika | ${SITE_NAME}`,
    description: truncate(
      'Paket latihan TKA (Tes Kemampuan Akademik) Matematika SD/SMP, IPA SMP, dan Fisika SMA: 30 soal per paket lengkap kunci dan pembahasan gratis.',
      155
    ),
    path: '/tka',
    ogImage: ogImageFor('tka')
  };
}

export function tkaPacketMeta(test, packet) {
  const P = String(packet).toUpperCase();
  return {
    title: fitTitle(`30 Soal Latihan ${test.title} Paket ${P}`, ` | ${SITE_NAME}`, 65),
    description: truncate(
      `Latihan ${test.title} (${test.audience}) Paket ${P}: 30 soal pilihan ganda (${test.elements.map((e) => e.name).join(', ')}) lengkap pembahasan.`,
      155
    ),
    path: `/tka/${test.id}-${packet}`,
    ogImage: ogImageFor('tka')
  };
}

export function gradeMeta(grade, subject = 'matematika') {
  const lvl = levelLabel(grade);
  const name = subjectDisplayName(subject, grade);
  const extra = subject === 'matematika' ? 'ringkasan materi, rumus' : 'ringkasan materi, konsep, rumus';
  const ogKey = subject === 'ipa' && Number(grade) >= 10 ? 'fisika' : subject;
  return {
    title: `${name} Kelas ${grade} ${lvl} — Materi & Latihan | ${SITE_NAME}`,
    description: truncate(
      `Daftar bab ${name} Kelas ${grade} ${lvl} lengkap dengan ${extra}, contoh soal, dan latihan soal pilihan ganda beserta pembahasan gratis.`,
      155
    ),
    path: gradePath(grade, subject),
    ogImage: ogImageFor(ogKey)
  };
}

export function chapterMeta(grade, chapter) {
  const lvl = levelLabel(grade);
  const subj = subjectOfChapter(chapter.id);
  const name = subjectDisplayName(subj, grade);
  const overview = chapter?.summary?.overview || '';
  const cleanChapterTitle = String(chapter.title || '').replace(/^Bab\s+\d+:\s*/i, '');
  const fullHead = `${chapter.title} — ${name} Kelas ${grade} ${lvl}`;
  const shortHead = `${cleanChapterTitle} — ${name} Kelas ${grade}`;
  const title = fullHead.length + ` | ${SITE_NAME}`.length <= 65
    ? `${fullHead} | ${SITE_NAME}`
    : fitTitle(shortHead, ` | ${SITE_NAME}`, 65);
  return {
    title,
    description: overview
      ? truncate(overview, 155)
      : truncate(`Materi ${plainText(chapter.title)} ${name} Kelas ${grade} ${lvl}: ringkasan, rumus, contoh soal, dan latihan.`, 155),
    path: chapterPath(grade, chapter.id),
    ogImage: ogImageFor(subj)
  };
}

export function amcLevelMeta(level) {
  return {
    title: `Persiapan Olimpiade AMC ${level} — Materi & Soal | ${SITE_NAME}`,
    description: truncate(
      `Modul persiapan olimpiade matematika AMC ${level}: konsep, strategi, soal isian kompetisi, petunjuk, dan pembahasan langkah demi langkah.`,
      155
    ),
    path: amcLevelPath(level),
    ogImage: ogImageFor('amc')
  };
}

export function amcChapterMeta(level, chapter) {
  const overview = chapter?.summary?.overview || '';
  const cleanTitle = String(chapter.title || '').replace(/^Bab\s+\d+:\s*/i, '');
  const fullHead = `${chapter.title} — AMC ${level}`;
  const title = fullHead.length + ` | ${SITE_NAME}`.length <= 65
    ? `${fullHead} | ${SITE_NAME}`
    : fitTitle(`${cleanTitle} — AMC ${level}`, ` | ${SITE_NAME}`, 65);
  return {
    title,
    description: overview
      ? truncate(overview, 155)
      : truncate(`Materi ${plainText(chapter.title)} untuk persiapan AMC ${level}: konsep, soal kompetisi, dan pembahasan.`, 155),
    path: amcChapterPath(level, chapter.id),
    ogImage: ogImageFor('amc')
  };
}
