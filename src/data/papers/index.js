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
  olimSmpBilanganElite
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
