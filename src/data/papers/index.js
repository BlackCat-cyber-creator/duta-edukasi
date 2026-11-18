/**
 * Registry terpusat seluruh Paket Soal Terstruktur (Paket Soal Duta e-dukasi).
 * Semua berkas paket dengan `status === 'published'` otomatis tampil di hub `/paket-soal`,
 * diprerender ke HTML statis, dan dimasukkan ke `llms.txt` + `sitemap.xml`.
 */
import fis10Kinematika2P2 from './fisika/kelas10/kinematika-2-paket-2.js';

export const PAPER_SUBJECT_META = {
  fisika: { id: 'fisika', label: 'Fisika', shortLabel: 'Fisika' },
  matematika: { id: 'matematika', label: 'Matematika', shortLabel: 'Matematika' },
  ipa: { id: 'ipa', label: 'IPA', shortLabel: 'IPA' },
  'olimpiade-mat': { id: 'olimpiade-mat', label: 'Olimpiade Matematika', shortLabel: 'Olimpiade Mat' },
  'olimpiade-fis': { id: 'olimpiade-fis', label: 'Olimpiade Fisika', shortLabel: 'Olimpiade Fis' }
};

export const ALL_PAPERS = [fis10Kinematika2P2];

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
