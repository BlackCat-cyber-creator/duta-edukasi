/**
 * Database kurikulum Kurikulum Merdeka: Matematika (Kelas 4–12), IPA & Fisika, Kimia, dan Biologi.
 *
 * Optimized with Code-Splitting:
 * - Lightweight metadata and chapter index are loaded immediately
 * - Full grade data (soal & pembahasan) dimuat saat dibutuhkan lewat dynamic import
 * Semua fungsi menerima `subject` ('matematika' | 'ipa' | 'kimia' | 'biologi'); bawaannya Matematika.
 */

import { GRADE_METADATA, ALL_CHAPTERS_INDEX } from "./chapterIndex.js";
import { IPA_GRADE_METADATA, ALL_IPA_CHAPTERS_INDEX } from "./ipa/chapterIndex.js";
import { KIMIA_GRADE_METADATA, ALL_KIMIA_CHAPTERS_INDEX } from "./kimia/chapterIndex.js";
import { BIOLOGI_GRADE_METADATA, ALL_BIOLOGI_CHAPTERS_INDEX } from "./biologi/chapterIndex.js";

export {
  GRADE_METADATA, ALL_CHAPTERS_INDEX,
  IPA_GRADE_METADATA, ALL_IPA_CHAPTERS_INDEX,
  KIMIA_GRADE_METADATA, ALL_KIMIA_CHAPTERS_INDEX,
  BIOLOGI_GRADE_METADATA, ALL_BIOLOGI_CHAPTERS_INDEX
};

export const SUBJECT_LABELS = { matematika: 'Matematika', ipa: 'IPA', fisika: 'Fisika', kimia: 'Kimia', biologi: 'Biologi' };

/** Mata pelajaran dari ID bab ("ipa7-..." → ipa). */
export function subjectOf(chapterId) {
  const id = String(chapterId || '');
  if (/^kimia\d+-/.test(id)) return 'kimia';
  if (/^biologi\d+-/.test(id)) return 'biologi';
  return /^ipa\d+-/.test(id) ? 'ipa' : 'matematika';
}

export const EXAM_CATEGORIES = [
  { id: "ALL", label: "Semua Soal Latihan", badgeClass: "badge-subtle" }
];

export const gradeLoaders = {
  4: () => import("./grades/grade4.js").then((m) => m.grade4Data),
  5: () => import("./grades/grade5.js").then((m) => m.grade5Data),
  6: () => import("./grades/grade6.js").then((m) => m.grade6Data),
  7: () => import("./grades/grade7.js").then((m) => m.grade7Data),
  8: () => import("./grades/grade8.js").then((m) => m.grade8Data),
  9: () => import("./grades/grade9.js").then((m) => m.grade9Data),
  10: () => import("./grades/grade10.js").then((m) => m.grade10Data),
  11: () => import("./grades/grade11.js").then((m) => m.grade11Data),
  12: () => import("./grades/grade12.js").then((m) => m.grade12Data),
};

export const ipaGradeLoaders = {
  4: () => import("./ipa/grade4.js").then((m) => m.ipaGrade4Data),
  5: () => import("./ipa/grade5.js").then((m) => m.ipaGrade5Data),
  6: () => import("./ipa/grade6.js").then((m) => m.ipaGrade6Data),
  7: () => import("./ipa/grade7.js").then((m) => m.ipaGrade7Data),
  8: () => import("./ipa/grade8.js").then((m) => m.ipaGrade8Data),
  9: () => import("./ipa/grade9.js").then((m) => m.ipaGrade9Data),
  10: () => import("./ipa/grade10.js").then((m) => m.ipaGrade10Data),
  11: () => import("./ipa/grade11.js").then((m) => m.ipaGrade11Data),
  12: () => import("./ipa/grade12.js").then((m) => m.ipaGrade12Data),
};

export const kimiaGradeLoaders = {
  10: () => import("./kimia/grade10.js").then((m) => m.kimiaGrade10Data),
  11: () => import("./kimia/grade11.js").then((m) => m.kimiaGrade11Data),
  12: () => import("./kimia/grade12.js").then((m) => m.kimiaGrade12Data),
};

export const biologiGradeLoaders = {
  10: () => import("./biologi/grade10.js").then((m) => m.biologiGrade10Data),
  11: () => import("./biologi/grade11.js").then((m) => m.biologiGrade11Data),
  12: () => import("./biologi/grade12.js").then((m) => m.biologiGrade12Data),
};

const LOADERS = { matematika: gradeLoaders, ipa: ipaGradeLoaders, kimia: kimiaGradeLoaders, biologi: biologiGradeLoaders };
const gradeCache = new Map();
// Kunci cache memuat mapel agar Kimia/Biologi tidak bertabrakan dengan Matematika pada kelas yang sama.
const cacheKey = (grade, subject) => `${LOADERS[subject] ? subject : 'matematika'}:${Number(grade)}`;

/**
 * Load full grade data on demand (returns cached promise/data once loaded)
 */
export async function getGradeData(grade, subject = 'matematika') {
  const key = cacheKey(grade, subject);
  if (gradeCache.has(key)) {
    return gradeCache.get(key);
  }
  const loader = (LOADERS[subject] || gradeLoaders)[Number(grade)];
  if (!loader) return null;
  const data = await loader();
  gradeCache.set(key, data);
  return data;
}

/**
 * Get synchronously loaded grade data if already cached, otherwise returns null
 */
export function getLoadedGradeData(grade, subject = 'matematika') {
  return gradeCache.get(cacheKey(grade, subject)) || null;
}

/**
 * Lightweight synchronous curriculum index
 * Contains all metadata, grade info, and chapter titles/concepts without heavy questions array
 */
export const CURRICULUM_DATA = GRADE_METADATA.map((meta) => {
  const chapters = ALL_CHAPTERS_INDEX.filter((c) => c.grade === meta.grade);
  return {
    ...meta,
    chapters
  };
});

/**
 * Mencari data bab lengkap beserta kunci & pembahasan berdasarkan grade & chapterId
 */
export async function getChapterSolutionData(grade, chapterId) {
  if (!grade || !chapterId) return null;
  // If chapterId is an AMC competition chapter, delegate to AMC loader
  if (typeof chapterId === 'string' && chapterId.startsWith('amc')) {
    const { getAmcChapterSolutionData } = await import('./amc/amcData.js');
    return getAmcChapterSolutionData(grade, chapterId);
  }
  const gradeObj = await getGradeData(grade, subjectOf(chapterId));
  if (!gradeObj || !gradeObj.chapters) return null;
  const chapter = gradeObj.chapters.find((ch) => ch.id === chapterId);
  if (!chapter) return null;
  return {
    ...chapter,
    subject: gradeObj.subject || 'matematika',
    grade: gradeObj.grade,
    level: gradeObj.level,
    phase: gradeObj.phase
  };
}

/** Indeks ringan IPA per kelas (tanpa soal), bentuknya sama dengan CURRICULUM_DATA. */
export const IPA_CURRICULUM_DATA = IPA_GRADE_METADATA.map((meta) => ({
  ...meta,
  subject: 'ipa',
  chapters: ALL_IPA_CHAPTERS_INDEX.filter((c) => c.grade === meta.grade)
}));

/** Indeks ringan Kimia dan Biologi SMA per kelas. */
export const KIMIA_CURRICULUM_DATA = KIMIA_GRADE_METADATA.map((meta) => ({
  ...meta,
  chapters: ALL_KIMIA_CHAPTERS_INDEX.filter((c) => c.grade === meta.grade)
}));

export const BIOLOGI_CURRICULUM_DATA = BIOLOGI_GRADE_METADATA.map((meta) => ({
  ...meta,
  chapters: ALL_BIOLOGI_CHAPTERS_INDEX.filter((c) => c.grade === meta.grade)
}));

export function curriculumFor(subject = 'matematika') {
  if (subject === 'ipa') return IPA_CURRICULUM_DATA;
  if (subject === 'kimia') return KIMIA_CURRICULUM_DATA;
  if (subject === 'biologi') return BIOLOGI_CURRICULUM_DATA;
  return CURRICULUM_DATA;
}

/** Entri indeks bab dari mata pelajaran mana pun. */
export function findChapterIndex(chapterId) {
  return ALL_CHAPTERS_INDEX.find((c) => c.id === chapterId)
    || ALL_IPA_CHAPTERS_INDEX.find((c) => c.id === chapterId)
    || ALL_KIMIA_CHAPTERS_INDEX.find((c) => c.id === chapterId)
    || ALL_BIOLOGI_CHAPTERS_INDEX.find((c) => c.id === chapterId)
    || null;
}
