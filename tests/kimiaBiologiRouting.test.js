import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PublicHandbook } from '../src/components/PublicHandbook.jsx';
import { AuthContext } from '../src/context/AuthContext.jsx';
import {
  getGradeData,
  getChapterSolutionData,
  curriculumFor,
  subjectOf,
  findChapterIndex
} from '../src/data/curriculumData.js';
import { gradePath, parseHandbookPath, chapterPath, subjectOfChapter } from '../src/utils/seoRoutes.js';
import { ALL_KIMIA_CHAPTERS_INDEX, KIMIA_GRADE_METADATA } from '../src/data/kimia/chapterIndex.js';
import { ALL_BIOLOGI_CHAPTERS_INDEX, BIOLOGI_GRADE_METADATA } from '../src/data/biologi/chapterIndex.js';
import { kimiaGrade10Data } from '../src/data/kimia/grade10.js';
import { kimiaGrade11Data } from '../src/data/kimia/grade11.js';
import { kimiaGrade12Data } from '../src/data/kimia/grade12.js';
import { biologiGrade10Data } from '../src/data/biologi/grade10.js';
import { biologiGrade11Data } from '../src/data/biologi/grade11.js';
import { biologiGrade12Data } from '../src/data/biologi/grade12.js';

const clean = (s) => s.replace(/<!--[\s\S]*?-->/g, '');

function renderAt(path) {
  return clean(renderToString(
    React.createElement(
      MemoryRouter,
      { initialEntries: [path] },
      React.createElement(AuthContext.Provider, { value: { isAuthenticated: false, studentId: null } },
        React.createElement(PublicHandbook, { onLaunchPractice: () => {}, onPrintQuest: () => {} })
      )
    )
  ));
}

describe('Kimia & Biologi: alamat buku saku', () => {
  it('gradePath dan parseHandbookPath bolak-balik untuk kimia dan biologi', () => {
    expect(gradePath(10, 'kimia')).toBe('/kimia/kelas-10');
    expect(gradePath(12, 'biologi')).toBe('/biologi/kelas-12');
    const r = parseHandbookPath('/kimia/kelas-11/bab2-termokimia');
    expect(r).toMatchObject({ mode: 'school', subject: 'kimia', grade: 11, chapter: 'kimia11-bab2-termokimia' });
    const b = parseHandbookPath('/biologi/kelas-10');
    expect(b).toMatchObject({ mode: 'school', subject: 'biologi', grade: 10 });
  });

  it('kelas di luar 10–12 untuk kimia dan biologi ditolak', () => {
    expect(parseHandbookPath('/kimia/kelas-9')).toBeNull();
    expect(parseHandbookPath('/biologi/kelas-4')).toBeNull();
  });

  it('chapterPath dan subjectOfChapter mengenali ID bab kimia/biologi', () => {
    expect(subjectOfChapter('kimia12-bab3-kimia-unsur')).toBe('kimia');
    expect(subjectOfChapter('biologi11-bab1-sel-dan-bioproses-membran')).toBe('biologi');
    expect(chapterPath(12, 'kimia12-bab3-kimia-unsur')).toBe('/kimia/kelas-12/bab3-kimia-unsur');
    expect(chapterPath(11, 'biologi11-bab1-sel-dan-bioproses-membran')).toBe('/biologi/kelas-11/bab1-sel-dan-bioproses-membran');
  });
});

describe('Kimia & Biologi: data kurikulum', () => {
  it('subjectOf dan findChapterIndex mengenali kedua mata pelajaran', () => {
    expect(subjectOf('kimia10-bab1-hakikat-kimia-dan-struktur-atom')).toBe('kimia');
    expect(subjectOf('biologi12-bab4-evolusi-dan-bioteknologi')).toBe('biologi');
    expect(findChapterIndex('kimia11-bab3-laju-reaksi')?.subject).toBe('kimia');
    expect(findChapterIndex('biologi10-bab2-virus-bakteri-dan-protista')?.subject).toBe('biologi');
  });

  it('cache tidak bertabrakan dengan Matematika pada kelas yang sama', async () => {
    const mat = await getGradeData(10, 'matematika');
    const kimia = await getGradeData(10, 'kimia');
    const bio = await getGradeData(10, 'biologi');
    expect(mat.subject || 'matematika').toBe('matematika');
    expect(kimia.subject).toBe('kimia');
    expect(bio.subject).toBe('biologi');
    // dipanggil ulang tetap mengembalikan mapel yang benar (bukan data Matematika dari cache)
    expect((await getGradeData(10, 'kimia')).chapters[0].id.startsWith('kimia10-')).toBe(true);
    expect((await getGradeData(10, 'biologi')).chapters[0].id.startsWith('biologi10-')).toBe(true);
  });

  it('getChapterSolutionData memuat bab beserta kunci dari mapel yang benar', async () => {
    const k = await getChapterSolutionData(12, 'kimia12-bab2-redoks-dan-elektrokimia');
    expect(k.subject).toBe('kimia');
    expect(k.questions).toHaveLength(15);
    const b = await getChapterSolutionData(11, 'biologi11-bab5-sistem-imun-dan-reproduksi');
    expect(b.subject).toBe('biologi');
    expect(b.questions[0].correctAnswer).toMatch(/^[A-D]$/);
  });

  it('curriculumFor mengembalikan tiga kelas (10–12) untuk kimia dan biologi', () => {
    expect(curriculumFor('kimia').map((g) => g.grade)).toEqual([10, 11, 12]);
    expect(curriculumFor('biologi').map((g) => g.chapters.length)).toEqual([4, 5, 4]);
  });

  it('indeks bab sama dengan data — jalankan `node pipeline/build_chapter_index.mjs` bila gagal', () => {
    const pairs = [
      [[kimiaGrade10Data, kimiaGrade11Data, kimiaGrade12Data], ALL_KIMIA_CHAPTERS_INDEX, KIMIA_GRADE_METADATA],
      [[biologiGrade10Data, biologiGrade11Data, biologiGrade12Data], ALL_BIOLOGI_CHAPTERS_INDEX, BIOLOGI_GRADE_METADATA]
    ];
    for (const [grades, index, meta] of pairs) {
      const fromData = grades.flatMap((g) => g.chapters.map((ch) => ({
        id: ch.id, title: ch.title, coreConcepts: ch.summary.coreConcepts, questionCount: ch.questions.length
      })));
      const fromIndex = index.map(({ id, title, coreConcepts, questionCount }) => ({ id, title, coreConcepts, questionCount }));
      expect(fromIndex).toEqual(fromData);
      expect(meta.map((g) => g.chaptersCount)).toEqual(grades.map((g) => g.chapters.length));
    }
  });
});

describe('Kimia & Biologi: tampilan buku saku', () => {
  it('/kimia/kelas-10 menampilkan lima tab mata pelajaran dan kelas 10–12 saja', () => {
    const html = renderAt('/kimia/kelas-10');
    expect(html).toContain('Kimia SMA');
    for (const id of ['school', 'ipa', 'fisika', 'kimia', 'biologi']) expect(html).toContain(`id="btn-mode-${id}"`);
    expect(html).not.toContain('id="btn-mode-amc"');
    expect(html).toContain('id="btn-public-grade-10"');
    expect(html).toContain('id="btn-public-grade-12"');
    expect(html).not.toContain('id="btn-public-grade-4"');
  });

  it('/biologi/kelas-11 menampilkan judul Biologi SMA', () => {
    const html = renderAt('/biologi/kelas-11');
    expect(html).toContain('Biologi SMA');
    expect(html).toContain('id="btn-public-grade-11"');
  });

  it('tab mata pelajaran memakai ikon spesifik (Sigma, Microscope, Atom, FlaskConical, Dna)', () => {
    const html = renderAt('/matematika/kelas-8');
    for (const icon of ['lucide-sigma', 'lucide-microscope', 'lucide-atom', 'lucide-flask-conical', 'lucide-dna']) {
      expect(html).toContain(icon);
    }
  });

  it('jalur AMC tidak menampilkan tab mata pelajaran dan punya tautan kembali ke /olimpiade', () => {
    const html = renderAt('/olimpiade/amc-8');
    expect(html).toContain('href="/olimpiade"');
    expect(html).not.toContain('id="btn-mode-kimia"');
  });
});
