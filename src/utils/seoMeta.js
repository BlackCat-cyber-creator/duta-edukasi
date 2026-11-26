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
  return `${cut.slice(0, cut.lastIndexOf(' ') > 80 ? cut.lastIndexOf(' ') : cut.length)}…`;
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

export const HOME_META = {
  title: `${SITE_NAME} • Platform Belajar Matematika & Sains, Olimpiade, dan Paket Soal`,
  description: `Portal belajar terbuka ${SITE_NAME}: materi Matematika, IPA (SD–SMP), Fisika, Kimia & Biologi (SMA), jalur Internasional/Bilingual, Olimpiade Matematika & Sains (OSN, SASMO, AMC, HKIMO, TIMO, SIMOC), TKA, dan Paket Soal interaktif lengkap kunci & pembahasan.`,
  path: '/',
  ogImage: ogImageFor('default')
};

export const OLIMPIADE_HUB_META = {
  title: `Olimpiade Matematika & Sains (OSN, SASMO, AMC, HKIMO, TIMO, SIMOC, SMO) | ${SITE_NAME}`,
  description: `Pusat persiapan Olimpiade Matematika & Sains SD, SMP, dan SMA di ${SITE_NAME}: soal & pembahasan OSN/OSK Nasional, SASMO, AMC 8/10/12, SMO Singapore, HKIMO, TIMO, SIMOC, IKMC, dan Seri Pembinaan berjenjang.`,
  path: '/olimpiade',
  ogImage: ogImageFor('olimpiade')
};

export function olympiadCompetitionMeta(comp, count = 0) {
  if (!comp) return OLIMPIADE_HUB_META;
  const countTag = count > 0 ? ` (${count} Paket)` : '';
  return {
    title: `${comp.seoTitle || `Soal & Pembahasan ${comp.label}`}${countTag} | ${SITE_NAME}`,
    description: comp.seoDescription || comp.blurb,
    path: comp.path || `/olimpiade/${comp.id}`,
    ogImage: ogImageFor(comp.ogCategory || 'olimpiade')
  };
}

export const ABOUT_META = {
  title: `Tentang ${SITE_NAME} — Platform Belajar Matematika & Sains Terbuka`,
  description: `Tentang ${SITE_NAME}: portal belajar Matematika & Sains gratis berlisensi CC BY 4.0 dari pendiri ${FOUNDER.name} dan Lead Developer ${AUTHOR.name}, beserta prestasi siswa binaan.`,
  path: '/tentang'
};

export const PROGRAM_META = {
  title: `Program Bimbel Reguler, Privat & Olimpiade | ${SITE_NAME}`,
  description: `Program bimbingan belajar ${ORGANIZATION.legalName} di Pontianak & daring: kelas reguler dan privat Matematika, IPA, dan Fisika SD–SMA serta pembinaan Olimpiade OSN & AMC.`,
  path: '/program'
};

export const FOUNDER_META = {
  title: `Profil Pendiri: ${FOUNDER.name} (${FOUNDER.formalName}) | ${SITE_NAME}`,
  description: `Mengenal ${FOUNDER.name} (${FOUNDER.formalName}), pendiri ${ORGANIZATION.legalName} Pontianak dan pembina Olimpiade Matematika (OSN-Guru 2013 Matematika SMP, Bandung).`,
  path: '/pendiri'
};

export const CONTACT_META = {
  title: `Kontak & Lokasi Bimbel ${SITE_NAME} Pontianak (${ORGANIZATION.whatsappDisplay})`,
  description: `Hubungi ${ORGANIZATION.legalName} di ${ORGANIZATION.fullAddress} melalui WhatsApp ${ORGANIZATION.whatsappDisplay} untuk informasi kelas reguler, privat, dan pembinaan olimpiade.`,
  path: '/kontak'
};

export function englishPapersHubMeta(count = 0) {
  return {
    title: `International & English Math/Science Practice Papers (AMC, SASMO, SMO, Cambridge) | ${SITE_NAME}`,
    description: `Explore ${count > 0 ? `${count} ` : ''}English-language & bilingual competition and Cambridge-style math and science practice papers (AMC 8/10/12, SASMO, SMO, IKMC, HKIMO, TIMO, SIMOC) with step-by-step solutions and rubrics.`,
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
      title: `Paket Soal ${subLabel} Interaktif + Kunci & Pembahasan | ${SITE_NAME}`,
      description: `Kumpulan Paket Soal ${subLabel} ${SITE_NAME} lengkap dengan kunci jawaban, prinsip konsep, pembahasan bertahap, dan rubrik penilaian.`,
      path: packetHubPath(subject),
      ogImage: ogImageFor(ogMap[subject] || 'paket-soal')
    };
  }
  return {
    title: `Paket Soal Matematika, Sains & Olimpiade + Pembahasan | ${SITE_NAME}`,
    description: `Arsip Paket Soal interaktif ${SITE_NAME} (Matematika, IPA, Fisika, Kimia, Biologi, dan Olimpiade Matematika & Sains) lengkap dengan kunci jawaban, langkah pembahasan, dan rubrik penilaian.`,
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
    return {
      title: `${paper.title} — Practice Paper & Solutions | ${SITE_NAME}`,
      description: `${paper.title} (${items} questions${scoreNote}) with answer key, core principles, step-by-step solutions, and marking rubric on ${SITE_NAME}. Free online access.`,
      path,
      lang: 'en',
      ogImage: ogImageFor(ogCategory)
    };
  }

  const hasSoalPrefix = /^(soal|latihan|simulasi|try\s*out)/i.test(String(paper.title || '').trim());
  const titleHead = hasSoalPrefix ? paper.title : `Soal & Pembahasan ${paper.title}`;
  return {
    title: `${titleHead} | ${SITE_NAME}`,
    description: `Latihan ${paper.title} (${items} soal${scoreNote}) lengkap dengan kunci jawaban, prinsip konsep, pembahasan bertahap, dan rubrik penilaian di ${SITE_NAME}.`,
    path,
    lang: 'id',
    ogImage: ogImageFor(ogCategory)
  };
}

export const TOPIC_INDEX_META = {
  title: `Daftar Isi Materi Matematika, IPA, Fisika, Kimia, Biologi & Olimpiade | ${SITE_NAME}`,
  description: 'Daftar lengkap materi per topik: bilangan, aljabar, geometri, data dan peluang, kalkulus, kerja ilmiah, fisika, kimia, biologi, bumi dan antariksa, serta olimpiade matematika dan sains.',
  path: '/daftar-isi'
};

export const FORMULA_INDEX_META = {
  title: `Kumpulan Rumus Matematika, IPA, Fisika & Kimia Lengkap (Kelas 4–12) | ${SITE_NAME}`,
  description: 'Referensi cepat rumus & konsep kunci Matematika, IPA (SD–SMP), Fisika, Kimia & Biologi (SMA Kelas 10–12), dan Olimpiade beserta contoh dan latihan soal.',
  path: '/rumus',
  ogImage: ogImageFor('rumus')
};

export function tkaHomeMeta() {
  return {
    title: `Latihan Soal TKA Matematika, IPA & Fisika (SD, SMP, SMA) + Pembahasan | ${SITE_NAME}`,
    description: 'Paket latihan TKA (Tes Kemampuan Akademik) Matematika SD/SMP, IPA SMP, dan Fisika SMA: 30 soal per paket sesuai elemen TKA, dengan kunci jawaban dan pembahasan. Gratis tanpa daftar.',
    path: '/tka',
    ogImage: ogImageFor('tka')
  };
}

export function tkaPacketMeta(test, packet) {
  const P = String(packet).toUpperCase();
  return {
    title: `30 Soal Latihan ${test.title} Paket ${P} dan Pembahasan | ${SITE_NAME}`,
    description: `Latihan ${test.title} (${test.audience}) Paket ${P}: 30 soal pilihan ganda per elemen ${test.elements.map((e) => e.name).join(', ')}, lengkap dengan kunci jawaban dan pembahasan.`,
    path: `/tka/${test.id}-${packet}`,
    ogImage: ogImageFor('tka')
  };
}

export function gradeMeta(grade, subject = 'matematika') {
  const lvl = levelLabel(grade);
  const name = subjectDisplayName(subject, grade);
  const extra = subject === 'matematika' ? 'ringkasan materi, rumus penting' : 'ringkasan materi, konsep kunci, dan rumus penting';
  const ogKey = subject === 'ipa' && Number(grade) >= 10 ? 'fisika' : subject;
  return {
    title: `${name} Kelas ${grade} ${lvl} — Materi & Latihan | ${SITE_NAME}`,
    description: `Daftar bab ${name} Kelas ${grade} ${lvl} lengkap dengan ${extra}, contoh soal, dan latihan soal pilihan ganda beserta pembahasan.`,
    path: gradePath(grade, subject),
    ogImage: ogImageFor(ogKey)
  };
}

export function chapterMeta(grade, chapter) {
  const lvl = levelLabel(grade);
  const subj = subjectOfChapter(chapter.id);
  const name = subjectDisplayName(subj, grade);
  const overview = chapter?.summary?.overview || '';
  return {
    title: `${chapter.title} — ${name} Kelas ${grade} ${lvl} | ${SITE_NAME}`,
    description: overview
      ? truncate(overview)
      : `Materi ${plainText(chapter.title)} ${name} Kelas ${grade} ${lvl}: ringkasan, rumus, contoh soal, dan latihan.`,
    path: chapterPath(grade, chapter.id),
    ogImage: ogImageFor(subj)
  };
}

export function amcLevelMeta(level) {
  return {
    title: `Persiapan Olimpiade AMC ${level} — Materi & Soal | ${SITE_NAME}`,
    description: `Modul persiapan olimpiade matematika AMC ${level}: konsep, strategi, soal isian kompetisi, petunjuk, dan pembahasan langkah demi langkah dalam Bahasa Indonesia.`,
    path: amcLevelPath(level),
    ogImage: ogImageFor('amc')
  };
}

export function amcChapterMeta(level, chapter) {
  const overview = chapter?.summary?.overview || '';
  return {
    title: `${chapter.title} — Olimpiade AMC ${level} | ${SITE_NAME}`,
    description: overview
      ? truncate(overview)
      : `Materi ${plainText(chapter.title)} untuk persiapan AMC ${level}: konsep, soal kompetisi, dan pembahasan.`,
    path: amcChapterPath(level, chapter.id),
    ogImage: ogImageFor('amc')
  };
}
