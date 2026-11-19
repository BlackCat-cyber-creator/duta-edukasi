/**
 * Helper penulisan bab Kimia SMA (Kelas 10–12).
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
    id: `kimia${grade}-bab${number}-${slug}`,
    title: `Bab ${number}: ${title}`,
    subject: 'kimia',
    curriculum: 'merdeka',
    element: element || null,
    summary,
    questions: questions.map((item, i) => ({ id: `kimia${grade}-b${number}-${i + 1}`, ...item }))
  };
}

export function kelas({ grade, level, phase, description, chapters }) {
  const g = Number(grade);
  return {
    subject: 'kimia',
    grade: g,
    level: level || 'SMA',
    phase: phase || (g === 10 ? 'Fase E' : 'Fase F'),
    description,
    chapters
  };
}
