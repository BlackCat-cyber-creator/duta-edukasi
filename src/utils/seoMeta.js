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

export const SUBJECT_NAME = { matematika: 'Matematika', ipa: 'IPA', fisika: 'Fisika' };

export function subjectDisplayName(subject, grade) {
  if (subject === 'matematika') return 'Matematika';
  if (subject === 'fisika') return 'Fisika';
  if (subject === 'ipa') return Number(grade) >= 10 ? 'Fisika' : 'IPA';
  return 'Matematika';
}

export const HOME_META = {
  title: `${SITE_NAME} • Platform Belajar Matematika & Sains, Olimpiade, dan Paket Soal`,
  description: `Portal belajar terbuka ${SITE_NAME}: materi Matematika, IPA SD–SMP, Fisika, Kimia & Biologi SMA, jalur Cambridge/Bilingual, persiapan Olimpiade Matematika & Sains (OSN/AMC), TKA, dan Paket Soal interaktif lengkap kunci & rubrik.`,
  path: '/'
};

export const ABOUT_META = {
  title: `Tentang ${SITE_NAME} — Platform Belajar Matematika & Sains Terbuka`,
  description: `Tentang ${SITE_NAME}, portal belajar Matematika & Sains gratis berlisensi CC BY 4.0 bersama pendiri ${FOUNDER.name} dan Lead Developer ${AUTHOR.name}.`,
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

export const PRESTASI_META = {
  title: `Prestasi Siswa & Peraih Medali Olimpiade | ${SITE_NAME}`,
  description: `Catatan prestasi terverifikasi siswa binaan ${SITE_NAME} di ajang Olimpiade Sains Nasional (OSN Matematika) dan kompetisi sains nasional/internasional.`,
  path: '/prestasi'
};

export const CONTACT_META = {
  title: `Kontak & Lokasi Bimbel ${SITE_NAME} Pontianak (${ORGANIZATION.whatsappDisplay})`,
  description: `Hubungi ${ORGANIZATION.legalName} di ${ORGANIZATION.fullAddress} melalui WhatsApp ${ORGANIZATION.whatsappDisplay} untuk informasi kelas reguler, privat, dan pembinaan olimpiade.`,
  path: '/kontak'
};

export function papersHubMeta(subject = 'all') {
  const labelMap = {
    matematika: 'Matematika',
    ipa: 'IPA',
    fisika: 'Fisika',
    kimia: 'Kimia',
    biologi: 'Biologi',
    'olimpiade-mat': 'Olimpiade Matematika',
    'olimpiade-sains': 'Olimpiade Sains',
    'olimpiade-fis': 'Olimpiade Fisika'
  };
  const subLabel = labelMap[subject];
  if (subLabel) {
    return {
      title: `Paket Soal ${subLabel} Interaktif + Kunci & Pembahasan | ${SITE_NAME}`,
      description: `Kumpulan Paket Soal ${subLabel} ${SITE_NAME} lengkap dengan kunci jawaban, prinsip konsep, pembahasan bertahap, dan rubrik penilaian.`,
      path: packetHubPath(subject)
    };
  }
  return {
    title: `Paket Soal Matematika, Sains & Olimpiade + Pembahasan | ${SITE_NAME}`,
    description: `Arsip Paket Soal interaktif ${SITE_NAME} (Matematika, IPA, Fisika, Kimia, Biologi, dan Olimpiade Matematika & Sains) lengkap dengan kunci jawaban, langkah pembahasan, dan rubrik penilaian.`,
    path: '/paket-soal'
  };
}

export function paperDetailMeta(paper) {
  return {
    title: `${paper.title} | Paket Soal ${SITE_NAME}`,
    description: `${paper.title} (${paper.totalMarks} marks, ${paper.questions?.length || 0} soal terstruktur) — dilengkapi diagram, kunci jawaban, langkah pembahasan prinsip, dan rubrik penilaian dari ${SITE_NAME}.`,
    path: packetPath(paper.subject, paper.slug),
    lang: paper.lang || 'id'
  };
}

export const TOPIC_INDEX_META = {
  title: `Daftar Isi Materi Matematika, IPA, Fisika, dan Olimpiade per Topik | ${SITE_NAME}`,
  description: 'Daftar lengkap materi per topik: bilangan, aljabar, geometri, data dan peluang, kalkulus, kerja ilmiah, fisika, kimia, biologi, bumi dan antariksa, serta olimpiade AMC. Gratis dengan contoh soal dan pembahasan.',
  path: '/daftar-isi'
};

export const FORMULA_INDEX_META = {
  title: `Kumpulan Rumus Matematika, IPA & Fisika Lengkap (Kelas 4–12) | ${SITE_NAME}`,
  description: 'Referensi cepat rumus kunci Matematika, IPA SD–SMP, Fisika SMA (Kelas 4–12), dan Olimpiade AMC beserta penjelasan konsep dan tautan latihan soal.',
  path: '/rumus'
};

export function tkaHomeMeta() {
  return {
    title: `Latihan Soal TKA Matematika, IPA & Fisika (SD, SMP, SMA) + Pembahasan | ${SITE_NAME}`,
    description: 'Paket latihan TKA (Tes Kemampuan Akademik) Matematika SD/SMP, IPA SMP, dan Fisika SMA: 30 soal per paket sesuai elemen TKA, dengan kunci jawaban dan pembahasan. Gratis tanpa daftar.',
    path: '/tka'
  };
}

export function tkaPacketMeta(test, packet) {
  const P = String(packet).toUpperCase();
  return {
    title: `30 Soal Latihan ${test.title} Paket ${P} dan Pembahasan | ${SITE_NAME}`,
    description: `Latihan ${test.title} (${test.audience}) Paket ${P}: 30 soal pilihan ganda per elemen ${test.elements.map((e) => e.name).join(', ')}, lengkap dengan kunci jawaban dan pembahasan.`,
    path: `/tka/${test.id}-${packet}`
  };
}

export function gradeMeta(grade, subject = 'matematika') {
  const lvl = levelLabel(grade);
  const name = subjectDisplayName(subject, grade);
  const extra = subject === 'ipa' ? 'ringkasan materi, rumus dan istilah penting' : 'ringkasan materi, rumus penting';
  return {
    title: `${name} Kelas ${grade} ${lvl} Kurikulum Merdeka — Materi & Latihan | ${SITE_NAME}`,
    description: `Daftar bab ${name} Kelas ${grade} ${lvl} Kurikulum Merdeka lengkap dengan ${extra}, contoh soal, dan latihan soal pilihan ganda beserta pembahasan.`,
    path: gradePath(grade, subject)
  };
}

export function chapterMeta(grade, chapter) {
  const lvl = levelLabel(grade);
  const name = subjectDisplayName(subjectOfChapter(chapter.id), grade);
  const overview = chapter?.summary?.overview || '';
  return {
    title: `${chapter.title} — ${name} Kelas ${grade} ${lvl} | ${SITE_NAME}`,
    description: overview
      ? truncate(overview)
      : `Materi ${plainText(chapter.title)} ${name} Kelas ${grade} ${lvl}: ringkasan, rumus, contoh soal, dan latihan.`,
    path: chapterPath(grade, chapter.id)
  };
}

export function amcLevelMeta(level) {
  return {
    title: `Persiapan Olimpiade AMC ${level} — Materi & Soal | ${SITE_NAME}`,
    description: `Modul persiapan olimpiade matematika AMC ${level}: konsep, strategi, soal isian kompetisi, petunjuk, dan pembahasan langkah demi langkah dalam Bahasa Indonesia.`,
    path: amcLevelPath(level)
  };
}

export function amcChapterMeta(level, chapter) {
  const overview = chapter?.summary?.overview || '';
  return {
    title: `${chapter.title} — Olimpiade AMC ${level} | ${SITE_NAME}`,
    description: overview
      ? truncate(overview)
      : `Materi ${plainText(chapter.title)} untuk persiapan AMC ${level}: konsep, soal kompetisi, dan pembahasan.`,
    path: amcChapterPath(level, chapter.id)
  };
}
