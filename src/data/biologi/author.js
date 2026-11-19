/**
 * Helper penulisan bab Biologi SMA (Kelas 10–12).
 * Menyerupai struktur src/data/ipa/author.js agar terintegrasi penuh dengan
 * UI buku saku, Kumpulan Rumus, Pencarian, Daftar Isi, Prerender SEO, dan Pengujian.
 */

const KEYS = ['A', 'B', 'C', 'D'];

export function soal({ level, q, options, answer, hint, solution, visual }) {
  return {
    category: 'Latihan',
    difficulty: level,
    question: q,
    options: options.map((text, i) => ({ key: KEYS[i], text })),
    correctAnswer: answer,
    hint,
    bestSolution: solution,
    ...(visual ? { visual } : {})
  };
}

export function bab({ grade, number, slug, title, element, summary, questions }) {
  return {
    id: `biologi${grade}-bab${number}-${slug}`,
    title: `Bab ${number}: ${title}`,
    subject: 'biologi',
    curriculum: 'merdeka',
    element: element || null,
    summary,
    questions: questions.map((item, i) => ({ id: `biologi${grade}-b${number}-${i + 1}`, ...item }))
  };
}

export function kelas({ grade, level, phase, description, chapters }) {
  const g = Number(grade);
  return {
    subject: 'biologi',
    grade: g,
    level: level || 'SMA',
    phase: phase || (g === 10 ? 'Fase E' : 'Fase F'),
    description,
    chapters
  };
}

/**
 * Penulis ringkas untuk soal pilihan ganda: dasar/sedang/tantangan(pertanyaan, [A,B,C,D], kunci, petunjuk, pembahasan).
 * Kalimat penutup "Jawaban: **X**." ditambahkan otomatis agar selalu sama dengan kunci.
 */
const tingkat = (level) => (q, options, answer, hint, solution) =>
  soal({ level, q, options, answer, hint, solution: `${solution.trim()} Jawaban: **${answer}**.` });

export const dasar = tingkat('Dasar');
export const sedang = tingkat('Sedang');
export const tantangan = tingkat('Tantangan');
