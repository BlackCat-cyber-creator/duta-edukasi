/**
 * Bangun ulang src/data/chapterIndex.js (Matematika) dan src/data/ipa/chapterIndex.js (IPA)
 * dari data kelas. Indeks ringan ini dipakai navigasi, pencarian, dan Studio Guru tanpa memuat soal.
 * Jalankan setiap kali judul/konsep/tips bab berubah:
 *   node pipeline/build_chapter_index.mjs
 */
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { ROOT, GRADES, loadGrade } from './migrations/lib.mjs';
import { GRADE_METADATA } from '../src/data/chapterIndex.js';

export async function buildChapterIndex() {
  const metaByGrade = Object.fromEntries(GRADE_METADATA.map((g) => [g.grade, g]));
  const entries = [];
  for (const grade of GRADES) {
    const { data } = await loadGrade(grade);
    const meta = metaByGrade[grade];
    data.chapters.forEach((ch, i) => {
      entries.push({
        id: ch.id,
        grade,
        level: meta.level,
        phase: meta.phase,
        chapterIndex: i,
        title: ch.title,
        track: ch.track ?? null,
        ...(ch.trackLabel ? { trackLabel: ch.trackLabel } : {}),
        coreConcepts: ch.summary?.coreConcepts || [],
        tutorTip: ch.summary?.tutorTip || '',
        questionCount: (ch.questions || []).length
      });
    });
  }
  return entries;
}

export async function buildIpaChapterIndex() {
  const grades = [
    (await import('../src/data/ipa/grade4.js')).ipaGrade4Data,
    (await import('../src/data/ipa/grade5.js')).ipaGrade5Data,
    (await import('../src/data/ipa/grade6.js')).ipaGrade6Data,
    (await import('../src/data/ipa/grade7.js')).ipaGrade7Data,
    (await import('../src/data/ipa/grade8.js')).ipaGrade8Data,
    (await import('../src/data/ipa/grade9.js')).ipaGrade9Data,
    (await import('../src/data/ipa/grade10.js')).ipaGrade10Data,
    (await import('../src/data/ipa/grade11.js')).ipaGrade11Data,
    (await import('../src/data/ipa/grade12.js')).ipaGrade12Data
  ];
  const meta = grades.map((g) => ({
    subject: 'ipa',
    grade: g.grade,
    level: g.level,
    phase: g.phase,
    description: g.description,
    chaptersCount: g.chapters.length
  }));
  const entries = grades.flatMap((g) => g.chapters.map((ch, i) => ({
    id: ch.id,
    subject: 'ipa',
    grade: g.grade,
    level: g.level,
    phase: g.phase,
    chapterIndex: i,
    title: ch.title,
    track: null,
    element: ch.element || null,
    coreConcepts: ch.summary?.coreConcepts || [],
    tutorTip: ch.summary?.tutorTip || '',
    questionCount: (ch.questions || []).length
  })));
  return { meta, entries };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const file = path.join(ROOT, 'src/data/chapterIndex.js');
  const src = fs.readFileSync(file, 'utf8');
  const marker = 'export const ALL_CHAPTERS_INDEX = ';
  const head = src.slice(0, src.indexOf(marker));
  const entries = await buildChapterIndex();
  fs.writeFileSync(file, `${head}${marker}${JSON.stringify(entries, null, 2)};\n`);
  console.log(`chapterIndex.js diperbarui: ${entries.length} bab`);

  const ipa = await buildIpaChapterIndex();
  fs.writeFileSync(path.join(ROOT, 'src/data/ipa/chapterIndex.js'), `/**
 * Indeks ringan IPA Kurikulum Merdeka (tanpa soal). Dibuat otomatis oleh
 * pipeline/build_chapter_index.mjs — jangan diedit manual; edit file bab di src/data/ipa/kelasN/.
 */

export const IPA_GRADE_METADATA = ${JSON.stringify(ipa.meta, null, 2)};

export const ALL_IPA_CHAPTERS_INDEX = ${JSON.stringify(ipa.entries, null, 2)};
`);
  console.log(`ipa/chapterIndex.js diperbarui: ${ipa.entries.length} bab`);
}
