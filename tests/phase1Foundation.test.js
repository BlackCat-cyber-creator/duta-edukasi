import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import {
  PUBLISHED_PAPER_MANIFEST,
  buildCorrectionIssueUrl,
  getRelatedPapers,
  englishPapersFilter
} from '../src/data/papers/manifest.js';
import { paperDetailMeta, olympiadCompetitionMeta, englishPapersHubMeta } from '../src/utils/seoMeta.js';
import { searchSite } from '../src/utils/siteSearch.js';
import { mergeStudyStates } from '../src/utils/progress.js';
import { OlimpiadeHubPage } from '../src/components/OlimpiadeHubPage.jsx';
import { PapersHubPage } from '../src/components/PapersHubPage.jsx';
import { retrieveCatalogContext, buildFallbackReply } from '../api/_retriever.js';

const clean = (s) => s.replace(/<!--[\s\S]*?-->/g, '');

describe('Phase 1 SEO & Metadata Fixes', () => {
  it('paperDetailMeta memakai jumlah item akurat, bahasa asli, dan bebas "Marks" untuk non-Cambridge', () => {
    const amcManifest = PUBLISHED_PAPER_MANIFEST.find((p) => p.id === 'amc-8-2024');
    expect(amcManifest).toBeTruthy();
    const amcMeta = paperDetailMeta(amcManifest);
    expect(amcMeta.lang).toBe('en');
    expect(amcMeta.title).toContain('Practice Paper & Solutions');
    expect(amcMeta.description).toContain(`${amcManifest.itemCount} questions`);
    expect(amcMeta.description).not.toContain('0 soal');
    expect(amcMeta.ogImage).toBe('/brand/og/amc.png');

    const osnManifest = PUBLISHED_PAPER_MANIFEST.find((p) => p.id === 'osnk-mat-sd-2026');
    expect(osnManifest).toBeTruthy();
    const osnMeta = paperDetailMeta(osnManifest);
    expect(osnMeta.lang).toBe('id');
    expect(osnMeta.description).toContain(`${osnManifest.itemCount} soal`);
    expect(osnMeta.description).not.toMatch(/marks/i);
    expect(osnMeta.ogImage).toBe('/brand/og/osn.png');
  });

  it('buildCorrectionIssueUrl mengarah ke dutaedukasi.vercel.app (bukan dutaedukasi.id)', () => {
    const sample = PUBLISHED_PAPER_MANIFEST[0];
    const url = buildCorrectionIssueUrl(sample, { no: 1 }, { label: 'a' });
    const parsed = new URL(url);
    expect(parsed.searchParams.get('body')).toContain('https://dutaedukasi.vercel.app/paket-soal/');
    expect(parsed.searchParams.get('body')).not.toContain('dutaedukasi.id');
  });

  it('seluruh gambar OG kategori tersedia di public/brand/og/', () => {
    const ogDir = path.resolve(__dirname, '../public/brand/og');
    for (const file of ['default.png', 'matematika.png', 'ipa.png', 'fisika.png', 'kimia.png', 'biologi.png', 'olimpiade.png', 'osn.png', 'amc.png', 'sasmo.png', 'smo.png', 'paket-soal.png', 'tka.png', 'rumus.png', 'english.png']) {
      expect(fs.existsSync(path.join(ogDir, file)), `Missing OG asset ${file}`).toBe(true);
    }
  });
});

describe('Dedicated Competition Hubs & English Hub SSR', () => {
  it('merender /olimpiade/osn, /olimpiade/sasmo, dan /olimpiade/amc dengan FAQ dan daftar paket', () => {
    for (const compId of ['osn', 'sasmo', 'amc']) {
      const html = clean(renderToString(
        React.createElement(
          MemoryRouter,
          { initialEntries: [`/olimpiade/${compId}`] },
          React.createElement(
            Routes,
            null,
            React.createElement(Route, { path: '/olimpiade/:competitionId', element: React.createElement(OlimpiadeHubPage) })
          )
        )
      ));
      expect(html).toContain('Pertanyaan Umum');
      expect(html).toContain('href="/olimpiade"');
      if (compId === 'amc') {
        expect(html).toContain('href="/olimpiade/amc-8"');
      }
      if (compId === 'osn') {
        expect(html).toContain('Semua Bidang');
      }
    }
  });

  it('merender /paket-soal/english hanya dengan paket English/Bilingual', () => {
    const html = clean(renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/paket-soal/english'] },
        React.createElement(
          Routes,
          null,
          React.createElement(Route, { path: '/paket-soal/:subject', element: React.createElement(PapersHubPage) })
        )
      )
    ));
    expect(html).toContain('International &amp; English Practice Papers');
    const enCount = PUBLISHED_PAPER_MANIFEST.filter(englishPapersFilter).length;
    expect(html).toContain(`<strong>${enCount}</strong>`);
    expect(englishPapersHubMeta(enCount).lang).toBe('en');
    expect(olympiadCompetitionMeta(null).path).toBe('/olimpiade');
  });
});

describe('Unified Search, Related Ladder & Progress Merge', () => {
  it('searchSite menemukan Paket Soal, Kompetisi Olimpiade, Materi Bab, dan TKA', () => {
    const osnResults = searchSite('OSN 2025');
    expect(osnResults.some((r) => r.type === 'paper' && r.path.startsWith('/paket-soal/'))).toBe(true);

    const smoResults = searchSite('SMO');
    expect(smoResults.some((r) => r.type === 'competition' && r.path === '/olimpiade/smo')).toBe(true);

    const pythResults = searchSite('Pythagoras');
    expect(pythResults.some((r) => r.type === 'chapter' && r.path.includes('pythagoras'))).toBe(true);

    const tkaResults = searchSite('TKA SMP');
    expect(tkaResults.some((r) => r.type === 'tka' && r.path.startsWith('/tka/'))).toBe(true);
  });

  it('getRelatedPapers menyusun urutan berjenjang Seri Pembinaan OSN dan tahun kompetisi', () => {
    const basic1 = PUBLISHED_PAPER_MANIFEST.find((p) => p.id === 'olim-sd-bilangan-basic1');
    const ladder1 = getRelatedPapers(basic1, PUBLISHED_PAPER_MANIFEST);
    expect(ladder1.prev).toBeNull();
    expect(ladder1.next?.id).toBe('olim-sd-bilangan-basic2');
    expect(ladder1.related.length).toBeGreaterThan(0);

    const amc2024 = PUBLISHED_PAPER_MANIFEST.find((p) => p.id === 'amc-8-2024');
    const amcRel = getRelatedPapers(amc2024, PUBLISHED_PAPER_MANIFEST);
    expect(amcRel.prev?.id).toBe('amc-8-2023');
    expect(amcRel.next?.id).toBe('amc-8-2025');
  });

  it('mergeStudyStates menggabungkan skor terbaik, bookmark, dan riwayat secara deterministik', () => {
    const merged = mergeStudyStates(
      {
        chapters: { c1: { score: 60, bestScore: 80 } },
        study: {
          profile: { targetLevel: 'SMP', targetCompetitions: ['OSN'], school: '' },
          papers: { p1: { completed: false, earnedMarks: 10, totalMarks: 30, checkedRubrics: { a: true } } },
          bookmarks: { '/paket-soal/a': { path: '/paket-soal/a', title: 'A' } },
          recent: [{ path: '/paket-soal/a', title: 'A', visitedAt: '2026-11-25T10:00:00Z' }],
          updatedAt: '2026-11-25T10:00:00Z'
        }
      },
      {
        chapters: { c1: { score: 90, bestScore: 90 }, c2: { score: 75, bestScore: 75 } },
        study: {
          profile: { targetLevel: 'SD', targetCompetitions: ['AMC'], school: 'SMP 1' },
          papers: { p1: { completed: true, earnedMarks: 22, totalMarks: 30, checkedRubrics: { b: true } } },
          bookmarks: { '/paket-soal/b': { path: '/paket-soal/b', title: 'B' } },
          recent: [{ path: '/paket-soal/b', title: 'B', visitedAt: '2026-11-25T12:00:00Z' }],
          updatedAt: '2026-11-24T10:00:00Z'
        }
      }
    );
    expect(merged.chapters.c1.bestScore).toBe(90);
    expect(merged.chapters.c2.bestScore).toBe(75);
    expect(merged.study.papers.p1.completed).toBe(true);
    expect(merged.study.papers.p1.earnedMarks).toBe(22);
    expect(merged.study.papers.p1.checkedRubrics).toEqual({ a: true, b: true });
    expect(Object.keys(merged.study.bookmarks)).toHaveLength(2);
    expect(merged.study.recent[0].path).toBe('/paket-soal/b');
    expect(merged.study.profile.targetLevel).toBe('SMP');
    expect(merged.study.profile.school).toBe('SMP 1');
  });
});

describe('AI Catalog & Retriever', () => {
  it('retrieveCatalogContext mengembalikan tautan valid dari api/_catalog.json', () => {
    const catalogPath = path.resolve(__dirname, '../api/_catalog.json');
    expect(fs.existsSync(catalogPath)).toBe(true);
    const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
    expect(catalog.items.length).toBeGreaterThan(200);

    const matches = retrieveCatalogContext('latihan soal OSN matematika SMP', catalog, { targetLevel: 'SMP' }, 8);
    expect(matches.length).toBeGreaterThan(0);
    expect(matches.every((m) => typeof m.path === 'string' && m.path.startsWith('/'))).toBe(true);

    const reply = buildFallbackReply('latihan soal OSN matematika SMP', matches, { targetLevel: 'SMP' });
    expect(reply).toContain('](/');
  });
});
