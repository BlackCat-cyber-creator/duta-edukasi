import { describe, it, expect } from 'vitest';
import katex from 'katex';

/**
 * Penjaga kualitas Kimia & Biologi SMA (Kelas 10–12): bentuk bab dan soal, kunci jawaban
 * konsisten dengan pembahasan, rumus KaTeX valid (tanpa mhchem), dan indeks bab sinkron.
 */
const gradeModules = import.meta.glob('../src/data/{kimia,biologi}/grade*.js', { eager: true });
const rawChapterSources = import.meta.glob('../src/data/{kimia,biologi}/kelas*/*.js', {
  eager: true,
  query: '?raw',
  import: 'default'
});

const EXPECTED = {
  kimia: { grades: { 10: 4, 11: 5, 12: 4 } },
  biologi: { grades: { 10: 4, 11: 5, 12: 4 } }
};

const GRADES = Object.values(gradeModules)
  .flatMap((mod) => Object.values(mod))
  .filter((g) => g && g.subject && Array.isArray(g.chapters))
  .sort((a, b) => a.subject.localeCompare(b.subject) || a.grade - b.grade);
const CHAPTERS = GRADES.flatMap((g) => g.chapters.map((ch) => ({ subject: g.subject, grade: g.grade, ch })));
const QUESTIONS = CHAPTERS.flatMap(({ subject, grade, ch }) => ch.questions.map((q) => ({ subject, grade, ch, q })));

const MATH_SPLIT = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$)/g;

/** Semua string di dalam bab (materi + soal) agar bisa diperiksa seragam. */
function collectStrings(value, path, out) {
  if (typeof value === 'string') out.push({ path, text: value });
  else if (Array.isArray(value)) value.forEach((v, i) => collectStrings(v, `${path}[${i}]`, out));
  else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) collectStrings(v, `${path}.${k}`, out);
  }
  return out;
}

function mathSegments(text) {
  return text.split(MATH_SPLIT).filter((p) => p && (p.startsWith('$$') || (p.startsWith('$') && p.endsWith('$'))));
}

function renderOk(tex, displayMode = false) {
  katex.renderToString(tex, { throwOnError: true, strict: 'ignore', displayMode });
}

describe('Kimia & Biologi: cakupan kurikulum', () => {
  for (const [subject, spec] of Object.entries(EXPECTED)) {
    it(`${subject}: kelas 10–12 lengkap dengan jumlah bab sesuai CP 046/2025`, () => {
      const loaded = GRADES.filter((g) => g.subject === subject);
      const got = Object.fromEntries(loaded.map((g) => [g.grade, g.chapters.length]));
      expect(got).toEqual(spec.grades);
    });
  }
});

describe('Kimia & Biologi: bentuk bab', () => {
  it('ID bab dan soal unik serta berawalan <mapel><kelas>-bab', () => {
    const ids = [...CHAPTERS.map(({ ch }) => ch.id), ...QUESTIONS.map(({ q }) => q.id)];
    expect(new Set(ids).size).toBe(ids.length);
    for (const { subject, grade, ch } of CHAPTERS) {
      expect(ch.id.startsWith(`${subject}${grade}-bab`)).toBe(true);
      expect(ch.subject).toBe(subject);
    }
  });

  it('setiap bab punya 6 bagian materi yang lengkap', () => {
    const problems = [];
    for (const { ch } of CHAPTERS) {
      const s = ch.summary || {};
      if (!s.overview || s.overview.length < 140) problems.push(`${ch.id}: overview`);
      const cc = s.coreConcepts || [];
      if (cc.length < 4 || cc.length > 6) problems.push(`${ch.id}: coreConcepts ${cc.length}`);
      if (cc.some((c) => !/^[^:]{3,70}: /.test(c))) problems.push(`${ch.id}: subbab harus "Judul: isi"`);
      const kf = s.keyFormulas || [];
      if (kf.length < 3 || kf.length > 4) problems.push(`${ch.id}: keyFormulas ${kf.length}`);
      if (kf.some((f) => !f.label || !f.formula)) problems.push(`${ch.id}: keyFormulas label/formula kosong`);
      if ((s.workedExamples || []).length < 3) problems.push(`${ch.id}: workedExamples < 3`);
      if ((s.workedExamples || []).some((w) => !w.title || !w.problem || !w.solution)) problems.push(`${ch.id}: workedExamples tidak lengkap`);
      if ((s.misconceptions || []).length < 3) problems.push(`${ch.id}: misconceptions < 3`);
      if (!s.tutorTip) problems.push(`${ch.id}: tutorTip`);
    }
    expect(problems).toEqual([]);
  });

  it('15 soal per bab, urut 5 Dasar → 5 Sedang → 5 Tantangan', () => {
    const want = [...Array(5).fill('Dasar'), ...Array(5).fill('Sedang'), ...Array(5).fill('Tantangan')].join();
    const bad = CHAPTERS.filter(({ ch }) => ch.questions.map((q) => q.difficulty).join() !== want).map(({ ch }) => ch.id);
    expect(bad).toEqual([]);
  });
});

describe('Kimia & Biologi: soal dan kunci jawaban', () => {
  it('4 pilihan A–D yang berbeda, kunci valid, petunjuk dan pembahasan ada', () => {
    const bad = [];
    for (const { q } of QUESTIONS) {
      const keys = q.options.map((o) => o.key).join('');
      const texts = new Set(q.options.map((o) => o.text.trim()));
      if (keys !== 'ABCD') bad.push(`${q.id}: kunci pilihan ${keys}`);
      if (texts.size !== 4) bad.push(`${q.id}: pilihan kembar`);
      if (!'ABCD'.includes(q.correctAnswer)) bad.push(`${q.id}: correctAnswer`);
      if (!q.hint || !q.bestSolution) bad.push(`${q.id}: hint/pembahasan`);
    }
    expect(bad).toEqual([]);
  });

  it('huruf "Jawaban: **X**" di pembahasan sama dengan kunci', () => {
    const bad = QUESTIONS.filter(({ q }) => {
      const m = q.bestSolution.match(/Jawaban: \*\*([A-D])\*\*\s*\.?\s*$/);
      return !m || m[1] !== q.correctAnswer;
    }).map(({ q }) => q.id);
    expect(bad).toEqual([]);
  });

  it('sebaran kunci per bab seimbang (tiap huruf 3–4 dari 15)', () => {
    const bad = [];
    for (const { ch } of CHAPTERS) {
      const count = { A: 0, B: 0, C: 0, D: 0 };
      for (const q of ch.questions) count[q.correctAnswer] += 1;
      if (Object.values(count).some((n) => n < 3 || n > 4)) bad.push(`${ch.id}: ${JSON.stringify(count)}`);
    }
    expect(bad).toEqual([]);
  });

  it('tidak ada soal kembar dalam satu kelas dan tidak merujuk soal lain', () => {
    const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const bad = [];
    for (const g of GRADES) {
      const seen = new Map();
      for (const ch of g.chapters) {
        for (const q of ch.questions) {
          const k = norm(q.question);
          if (seen.has(k)) bad.push(`${seen.get(k)} = ${q.id}`);
          seen.set(k, q.id);
          if (/soal (sebelumnya|nomor)/i.test(q.question)) bad.push(`${q.id}: merujuk soal lain`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('kunci jawaban tidak selalu pilihan terpanjang (hindari pola tebakan)', () => {
    const bad = [];
    for (const { ch } of CHAPTERS) {
      let longest = 0;
      for (const q of ch.questions) {
        const lens = q.options.map((o) => o.text.length);
        const max = Math.max(...lens);
        const idx = 'ABCD'.indexOf(q.correctAnswer);
        if (lens[idx] === max && lens.filter((l) => l === max).length === 1) longest += 1;
      }
      if (longest > 9) bad.push(`${ch.id}: ${longest}/15 jawaban benar adalah pilihan terpanjang`);
    }
    expect(bad).toEqual([]);
  });
});

describe('Kimia & Biologi: rumus dan teks', () => {
  it('tidak memakai mhchem (\\ce / \\pu) dan keyFormulas tanpa pembatas $', () => {
    const bad = [];
    for (const { ch } of CHAPTERS) {
      for (const { path, text } of collectStrings(ch, ch.id, [])) {
        if (/\\(ce|pu)\b/.test(text)) bad.push(`${path}: mhchem`);
      }
      for (const f of ch.summary.keyFormulas) if (f.formula.includes('$')) bad.push(`${ch.id}: keyFormulas memakai $`);
    }
    expect(bad).toEqual([]);
  });

  it('setiap rumus $...$ dan keyFormulas berhasil dirender KaTeX tanpa galat', () => {
    const bad = [];
    for (const { ch } of CHAPTERS) {
      for (const f of ch.summary.keyFormulas) {
        try { renderOk(f.formula, true); } catch (e) { bad.push(`${ch.id} keyFormula "${f.label}": ${e.message}`); }
      }
      for (const { path, text } of collectStrings({ summary: { ...ch.summary, keyFormulas: [] }, questions: ch.questions }, ch.id, [])) {
        for (const seg of mathSegments(text)) {
          const block = seg.startsWith('$$');
          const tex = block ? seg.slice(2, -2).trim() : seg.slice(1, -1).trim();
          try { renderOk(tex, block); } catch (e) { bad.push(`${path}: ${e.message.slice(0, 120)}`); }
        }
        // sisa tanda $ yang tidak berpasangan merusak tampilan
        const leftover = text.replace(MATH_SPLIT, '');
        if (leftover.includes('$')) bad.push(`${path}: tanda $ tidak berpasangan`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('teks tanpa $ tidak memuat perintah LaTeX (akan dipaksa menjadi rumus oleh MathText)', () => {
    const bad = [];
    for (const { ch } of CHAPTERS) {
      for (const { path, text } of collectStrings({ ...ch.summary, keyFormulas: [], questions: ch.questions }, ch.id, [])) {
        if (text.includes('$')) continue;
        if (/\\[a-zA-Z]+/.test(text) || /[\^_]\{?[0-9a-zA-Z+-]+\}?/.test(text)) bad.push(`${path}: ${text.slice(0, 60)}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('file sumber tidak memuat escape backslash tunggal (mis. "\\alpha" yang berubah jadi "alpha")', () => {
    const bad = [];
    for (const [file, src] of Object.entries(rawChapterSources)) {
      const re = /\\(.)/gs;
      let m;
      while ((m = re.exec(src))) {
        // \n = baris baru yang disengaja di dalam teks soal
        if (m[1] === '\\' || m[1] === "'" || m[1] === '"' || m[1] === 'n') continue;
        const line = src.slice(0, m.index).split('\n').length;
        bad.push(`${file}:${line} \\${m[1]}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('tidak ada karakter kendali tersembunyi dalam string', () => {
    const bad = [];
    for (const { ch } of CHAPTERS) {
      for (const { path, text } of collectStrings(ch, ch.id, [])) {
        // eslint-disable-next-line no-control-regex
        if (/[\u0000-\u0009\u000b-\u001f]/.test(text)) bad.push(path);
      }
    }
    expect(bad).toEqual([]);
  });
});
