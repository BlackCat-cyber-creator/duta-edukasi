/**
 * Registry terpusat seluruh Paket Soal Terstruktur (Paket Soal Duta e-dukasi).
 * Semua berkas paket dengan `status === 'published'` otomatis tampil di hub `/paket-soal`,
 * diprerender ke HTML statis, dan dimasukkan ke `llms.txt` + `sitemap.xml`.
 */
import fis10Kinematika2P1 from './fisika/kelas10/kinematika-2-paket-1.js';
import fis10Kinematika2P2 from './fisika/kelas10/kinematika-2-paket-2.js';
import fis10Kinematika1Ex1 from './fisika/kelas10/kinematika-1-latihan-1.js';
import fis10Kinematika1Adv from './fisika/kelas10/kinematika-1-lanjutan.js';
import fis10Kinematika2Adv from './fisika/kelas10/kinematika-2-lanjutan.js';
import kim11LajuReaksiP1 from './kimia/kelas11/laju-reaksi-paket-1.js';
import kim10CambridgeEssay from './kimia/kelas10/cambridge-essay.js';
import bio10BiodiversityP1 from './biologi/kelas10/biodiversity-practice-set-1.js';
import olimSmpIpaOsk from './olimpiade-sains/smp/osk-ipa-simulasi-1.js';
import olimSdBilanganBasic1 from './olimpiade-mat/sd/bilangan-basic-1.js';
import olimSdBilanganBasic2 from './olimpiade-mat/sd/bilangan-basic-2.js';
import olimSdBilanganInt1 from './olimpiade-mat/sd/bilangan-intermediate-1.js';
import olimSdBilanganInt2 from './olimpiade-mat/sd/bilangan-intermediate-2.js';
import olimSdBilanganAdv1 from './olimpiade-mat/sd/bilangan-advanced-1.js';
import olimSdBilanganAdv2 from './olimpiade-mat/sd/bilangan-advanced-2.js';
import olimSdBilanganExp1 from './olimpiade-mat/sd/bilangan-expert-1.js';
import olimSdBilanganExp2 from './olimpiade-mat/sd/bilangan-expert-2.js';
import olimSdBilanganElite from './olimpiade-mat/sd/bilangan-elite.js';
import olimSmpBilanganBasic1 from './olimpiade-mat/smp/bilangan-basic-1.js';
import olimSmpBilanganBasic2 from './olimpiade-mat/smp/bilangan-basic-2.js';
import olimSmpBilanganInt1 from './olimpiade-mat/smp/bilangan-intermediate-1.js';
import olimSmpBilanganInt2 from './olimpiade-mat/smp/bilangan-intermediate-2.js';
import olimSmpBilanganAdv1 from './olimpiade-mat/smp/bilangan-advanced-1.js';
import olimSmpBilanganAdv2 from './olimpiade-mat/smp/bilangan-advanced-2.js';
import olimSmpBilanganExp1 from './olimpiade-mat/smp/bilangan-expert-1.js';
import olimSmpBilanganExp2 from './olimpiade-mat/smp/bilangan-expert-2.js';
import olimSmpBilanganElite from './olimpiade-mat/smp/bilangan-elite.js';
import olimTimo2223HeatS2 from './olimpiade-mat/smp/timo-2022-2023-heat-secondary-2.js';
import kim11AsasXi from './kimia/kelas11/asas-kimia-xi-semester-1.js';
import kim11TermokimiaLatihan from './kimia/kelas11/termokimia-xi-latihan.js';
import bio10BlokTest from './biologi/kelas10/blok-test-biologi-x-keanekaragaman-virus.js';
import olimSasmo2015G8 from './olimpiade-mat/smp/sasmo-2015-grade-8.js';
import olimSasmo2016Sec2 from './olimpiade-mat/smp/sasmo-2016-secondary-2.js';
import olimSimoc2017G4 from './olimpiade-mat/sd/simoc-2017-grade-4.js';
import olimOsnkMatSd2026 from './olimpiade-mat/sd/osnk-matematika-sd-2026.js';
import olimHkimoSec2Prep from './olimpiade-mat/smp/hkimo-secondary-2-prep.js';
import olimOsnkMatSmp2026 from './olimpiade-mat/smp/osnk-matematika-smp-2026.js';
import olimToOsnkMatSma from './olimpiade-mat/sma/to-osnk-matematika-sma.js';

export const PAPER_SUBJECT_META = {
  fisika: { id: 'fisika', label: 'Fisika', shortLabel: 'Fisika', color: '#0369A1' },
  kimia: { id: 'kimia', label: 'Kimia', shortLabel: 'Kimia', color: '#6D28D9' },
  biologi: { id: 'biologi', label: 'Biologi', shortLabel: 'Biologi', color: '#047857' },
  matematika: { id: 'matematika', label: 'Matematika', shortLabel: 'Matematika', color: '#12337A' },
  ipa: { id: 'ipa', label: 'IPA', shortLabel: 'IPA', color: '#0F766E' },
  'olimpiade-mat': { id: 'olimpiade-mat', label: 'Olimpiade Matematika', shortLabel: 'Olimpiade Mat', color: '#9F1239' },
  'olimpiade-sains': { id: 'olimpiade-sains', label: 'Olimpiade Sains (OSN)', shortLabel: 'Olimpiade Sains', color: '#0D9488' },
  'olimpiade-fis': { id: 'olimpiade-fis', label: 'Olimpiade Fisika', shortLabel: 'Olimpiade Fis', color: '#1D4ED8' }
};

export const ALL_PAPERS = [
  fis10Kinematika2P1,
  fis10Kinematika2P2,
  fis10Kinematika1Ex1,
  fis10Kinematika1Adv,
  fis10Kinematika2Adv,
  kim11LajuReaksiP1,
  kim10CambridgeEssay,
  bio10BiodiversityP1,
  olimSmpIpaOsk,
  olimSdBilanganBasic1,
  olimSdBilanganBasic2,
  olimSdBilanganInt1,
  olimSdBilanganInt2,
  olimSdBilanganAdv1,
  olimSdBilanganAdv2,
  olimSdBilanganExp1,
  olimSdBilanganExp2,
  olimSdBilanganElite,
  olimSmpBilanganBasic1,
  olimSmpBilanganBasic2,
  olimSmpBilanganInt1,
  olimSmpBilanganInt2,
  olimSmpBilanganAdv1,
  olimSmpBilanganAdv2,
  olimSmpBilanganExp1,
  olimSmpBilanganExp2,
  olimSmpBilanganElite,
  kim11AsasXi,
  kim11TermokimiaLatihan,
  bio10BlokTest,
  olimSasmo2015G8,
  olimSasmo2016Sec2,
  olimSimoc2017G4,
  olimOsnkMatSd2026,
  olimTimo2223HeatS2,
  olimHkimoSec2Prep,
  olimOsnkMatSmp2026,
  olimToOsnkMatSma
];

export const PUBLISHED_PAPERS = ALL_PAPERS.filter((p) => p.status === 'published');

export function paperPath(paper) {
  return `/paket-soal/${paper.subject}/${paper.slug}`;
}

export function subjectHubPath(subject) {
  return subject && subject !== 'all' ? `/paket-soal/${subject}` : '/paket-soal';
}

export function getPapersBySubject(subject) {
  if (!subject || subject === 'all') return PUBLISHED_PAPERS;
  return PUBLISHED_PAPERS.filter((p) => p.subject === subject);
}

export function getPaperBySlug(subject, slug) {
  return PUBLISHED_PAPERS.find((p) => p.subject === subject && p.slug === slug) || null;
}

export function getRelatedPapersForChapter(chapterId) {
  if (!chapterId) return [];
  return PUBLISHED_PAPERS.filter((p) => Array.isArray(p.relatedChapterIds) && p.relatedChapterIds.includes(chapterId));
}

/* ------------------------------------------------------------------ */
/* Salinan kartu: hitung soal sebenarnya, label jalur, dan tag lomba   */
/* ------------------------------------------------------------------ */

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
 * dua kelompok, sedangkan soalnya ada di dalam `parts`; maka hitung `parts`, bukan `questions`.
 */
export function countPaperItems(paper) {
  return (paper.questions || []).reduce((sum, q) => sum + (q.parts?.length || 1), 0);
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

/** Kompetisi untuk pusat Olimpiade (/olimpiade). Nama sesuai field `competition` pada paket. */
export const OLYMPIAD_COMPETITIONS = [
  { id: 'osn', label: 'OSN / OSK', competitions: ['OSN-K'], blurb: 'Olimpiade Sains Nasional jenjang Kabupaten/Kota: latihan soal Matematika dan sains berbahasa Indonesia.' },
  { id: 'sasmo', label: 'SASMO', competitions: ['SASMO'], blurb: 'Soal kompetisi matematika SASMO (berbahasa Inggris) dengan pembahasan langkah demi langkah.' },
  { id: 'amc', label: 'AMC 8 / 10 / 12', competitions: [], amc: true, blurb: 'Modul interaktif American Mathematics Competitions: 36 bab konsep dan latihan untuk AMC 8, AMC 10, dan AMC 12.' },
  { id: 'hkimo', label: 'HKIMO', competitions: ['HKIMO'], blurb: 'Latihan persiapan HKIMO (berbahasa Inggris) dengan pembahasan lengkap.' },
  { id: 'timo', label: 'TIMO', competitions: ['TIMO'], blurb: 'Soal babak penyisihan TIMO (berbahasa Inggris) beserta pembahasan.' },
  { id: 'simoc', label: 'SIMOC', competitions: ['SIMOC'], blurb: 'Soal kompetisi SIMOC (berbahasa Inggris) untuk jenjang sekolah dasar.' },
  { id: 'pembinaan', label: 'Seri Pembinaan OSN', competitions: ['Seri Pembinaan OSN'], blurb: 'Seri latihan Bilangan berjenjang (Basic sampai Elite) untuk pembinaan OSN SD dan SMP.' }
];

