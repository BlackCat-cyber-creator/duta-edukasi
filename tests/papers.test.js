import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import katex from 'katex';
import { ALL_PAPERS, PUBLISHED_PAPERS } from '../src/data/papers/index.js';
import { PAPER_MANIFEST, PAPER_LOADERS } from '../src/data/papers/manifest.js';

const PUBLIC_DIR = path.resolve(__dirname, '../public');

function parseRubricMarks(code) {
  const m = String(code || '').match(/^[BMA](\d+)$/i);
  return m ? Number(m[1]) : 0;
}

function validateLatexString(str, context) {
  const s = String(str ?? '');
  if (!s.includes('$')) return;
  const segments = s.split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$)/g);
  for (const seg of segments) {
    if (seg.startsWith('$$') && seg.endsWith('$$') && seg.length > 4) {
      expect(() => katex.renderToString(seg.slice(2, -2), { displayMode: true, throwOnError: true, strict: 'ignore' }), `${context}: ${seg}`).not.toThrow();
    } else if (seg.startsWith('$') && seg.endsWith('$') && seg.length > 2) {
      expect(() => katex.renderToString(seg.slice(1, -1), { displayMode: false, throwOnError: true, strict: 'ignore' }), `${context}: ${seg}`).not.toThrow();
    }
  }
}

describe('Paket Soal Terstruktur (papers schema & integrity)', { timeout: 60000 }, () => {
  it('seluruh ID dan pasangan (subject, slug) unik', () => {
    const ids = new Set();
    const routes = new Set();
    for (const p of ALL_PAPERS) {
      expect(p.id).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(['en', 'id']).toContain(p.lang);
      expect(['published', 'draft', 'needs-human']).toContain(p.status);
      expect(ids.has(p.id), `Duplicate id: ${p.id}`).toBe(false);
      ids.add(p.id);
      const route = `${p.subject}/${p.slug}`;
      expect(routes.has(route), `Duplicate route: ${route}`).toBe(false);
      routes.add(route);
    }
  });

  it('PUBLISHED_PAPERS mengecualikan status needs-human dan draft', () => {
    for (const p of PUBLISHED_PAPERS) {
      expect(p.status).toBe('published');
    }
    expect(PUBLISHED_PAPERS.length).toBeGreaterThan(0);
  });

  it('jumlah bobot nilai bagian -> soal -> totalMarks serta bobot rubrik cocok 100%', () => {
    for (const p of ALL_PAPERS) {
      let paperSum = 0;
      for (const q of p.questions) {
        let qSum = 0;
        for (const part of q.parts) {
          expect(part.marks).toBeGreaterThan(0);
          expect(part.prompt).toBeTruthy();
          expect(part.answer).toBeTruthy();
          expect(part.solution).toBeTruthy();
          expect(part.principle).toBeTruthy();
          expect(Array.isArray(part.rubric) && part.rubric.length > 0).toBe(true);
          const rubricSum = part.rubric.reduce((acc, r) => acc + parseRubricMarks(r.code), 0);
          expect(rubricSum, `${p.id} Q${q.no}(${part.label}) rubric sum`).toBe(part.marks);
          qSum += part.marks;
        }
        expect(qSum, `${p.id} Q${q.no} sum`).toBe(q.marks);
        paperSum += q.marks;
      }
      expect(paperSum, `${p.id} totalMarks`).toBe(p.totalMarks);
    }
  });

  it('seluruh berkas gambar fig-* tersedia di public/ dan alt/caption bebas bocoran answerNumeric', () => {
    for (const p of ALL_PAPERS) {
      for (const q of p.questions) {
        const numericItems = (q.parts || [])
          .flatMap((pt) => pt.answerNumeric || [])
          .filter((item) => item && item.value !== undefined && item.value !== null);
        const allFigs = [
          ...(q.figures || []),
          ...(q.parts || []).flatMap((pt) => pt.figures || [])
        ];
        for (const fig of allFigs) {
          expect(fig.src).toMatch(/^\/papers\/.+\.(webp|svg)$/);
          const diskPath = path.join(PUBLIC_DIR, fig.src.replace(/^\//, ''));
          expect(fs.existsSync(diskPath), `Missing figure file: ${diskPath}`).toBe(true);
          if (fig.src.endsWith('.svg')) {
            const svgText = fs.readFileSync(diskPath, 'utf8');
            expect(svgText, `Invalid SVG in ${diskPath}`).toMatch(/<svg[\s>]/i);
            expect(svgText, `Unsafe script tag in ${diskPath}`).not.toMatch(/<script/i);
          }
          expect(fig.alt && fig.alt.trim().length > 15, `Missing alt on ${p.id} Q${q.no}`).toBe(true);
          expect(fig.caption).toBeTruthy();
          const combined = `${fig.alt} ${fig.caption}`;
          for (const item of numericItems) {
            const absStr = String(Math.abs(Number(item.value))).replace('.', '\\.');
            const isAngleUnit = /deg|°|rad/i.test(String(item.unit || ''));
            // Abaikan bila angka diikuti tanda derajat (besaran sudut pada gambar soal), kecuali kunci jawaban sendiri bersatuan sudut.
            const re = isAngleUnit
              ? new RegExp(`(?<![\\d.])${absStr}(?![\\d.])`)
              : new RegExp(`(?<![\\d.])${absStr}(?![\\d.])(?!\\s*(?:°|deg|degree|degrees))`, 'i');
            expect(re.test(combined), `Potential answer leak (${item.value} ${item.unit || ''}) in figure alt/caption of ${p.id} Q${q.no}: "${combined}"`).toBe(false);
          }
        }
      }
    }
  });

  it('seluruh ekspresi LaTeX/KaTeX dalam paket valid tanpa galat sintaks', () => {
    for (const p of ALL_PAPERS) {
      validateLatexString(p.instructions, `${p.id} instructions`);
      for (const c of p.constants || []) {
        expect(() => katex.renderToString(c, { displayMode: false, throwOnError: true, strict: 'ignore' }), `${p.id} constant: ${c}`).not.toThrow();
      }
      for (const q of p.questions) {
        validateLatexString(q.stem, `${p.id} Q${q.no} stem`);
        for (const part of q.parts) {
          validateLatexString(part.prompt, `${p.id} Q${q.no}(${part.label}) prompt`);
          validateLatexString(part.answer, `${p.id} Q${q.no}(${part.label}) answer`);
          validateLatexString(part.principle, `${p.id} Q${q.no}(${part.label}) principle`);
          validateLatexString(part.solution, `${p.id} Q${q.no}(${part.label}) solution`);
          for (const r of part.rubric || []) {
            validateLatexString(r.text, `${p.id} Q${q.no}(${part.label}) rubric`);
          }
        }
      }
    }
  });

  it('manifest lazy-loading sinkron dengan ALL_PAPERS dan memiliki loader tiap paket', () => {
    expect(PAPER_MANIFEST).toHaveLength(ALL_PAPERS.length);
    for (let i = 0; i < ALL_PAPERS.length; i += 1) {
      const full = ALL_PAPERS[i];
      const meta = PAPER_MANIFEST[i];
      expect(meta.id).toBe(full.id);
      expect(meta.slug).toBe(full.slug);
      expect(meta.subject).toBe(full.subject);
      expect(meta.competition).toBe(full.competition);
      expect(meta.status).toBe(full.status);
      expect(meta.totalMarks).toBe(full.totalMarks);
      const partCount = full.questions.reduce((sum, q) => sum + q.parts.length, 0);
      expect(meta.itemCount).toBe(partCount);
      expect(typeof PAPER_LOADERS[`${full.subject}/${full.slug}`]).toBe('function');
    }
  });
});
