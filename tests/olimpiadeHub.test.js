import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { OlimpiadeHubPage } from '../src/components/OlimpiadeHubPage.jsx';
import { HomeHubPage } from '../src/components/HomeHubPage.jsx';
import { PapersHubPage } from '../src/components/PapersHubPage.jsx';
import {
  PUBLISHED_PAPERS,
  OLYMPIAD_COMPETITIONS,
  countPaperItems,
  formatPaperMeta,
  paperTag
} from '../src/data/papers/index.js';

const clean = (s) => s.replace(/<!--[\s\S]*?-->/g, '');
const renderAt = (path, element) =>
  clean(renderToString(React.createElement(MemoryRouter, { initialEntries: [path] }, element)));

describe('Metadata paket soal', () => {
  it('semua paket punya competition dan langDisplay yang valid', () => {
    for (const p of PUBLISHED_PAPERS) {
      expect(p.competition, `${p.id} competition`).toBeTruthy();
      expect(['EN', 'ID', 'ID / EN'], `${p.id} langDisplay`).toContain(p.langDisplay);
    }
  });

  it('countPaperItems menghitung soal sebenarnya, bukan jumlah bagian', () => {
    const p = PUBLISHED_PAPERS.find((x) => x.id === 'olim-sd-bilangan-basic1');
    expect(p.questions.length).toBe(2);
    expect(countPaperItems(p)).toBe(40);
    const meta = formatPaperMeta(p);
    expect(meta.itemsLabel).toBe('40 Soal');
    expect(meta.score).toBeNull();
    expect(meta.track).toBe('Olimpiade SD');
    expect(meta.tag).toBe('Seri Pembinaan OSN · SD');
  });

  it('istilah Marks hanya untuk paket bergaya Cambridge/IGCSE', () => {
    for (const p of PUBLISHED_PAPERS) {
      const m = formatPaperMeta(p);
      if (p.track === 'cambridge-style') expect(m.score).toMatch(/Marks$/);
      else expect(m.score || '').not.toMatch(/Marks/);
      expect(m.track).not.toMatch(/olimpiade-|kurikulum-merdeka|cambridge-style/);
    }
  });

  it('tag kompetisi membawa nama kompetisi nyata', () => {
    const sasmo = PUBLISHED_PAPERS.find((p) => p.competition === 'SASMO');
    expect(paperTag(sasmo)).toMatch(/^SASMO · Kelas \d+$/);
  });
});

describe('Pusat Olimpiade /olimpiade', () => {
  it('menampilkan semua kompetisi secara setara, AMC hanya salah satunya', () => {
    const html = renderAt('/olimpiade', React.createElement(OlimpiadeHubPage));
    expect(html).toContain('Olimpiade &amp; Kompetisi');
    for (const label of ['OSN / OSK', 'SASMO', 'AMC 8 / 10 / 12', 'HKIMO', 'TIMO', 'SIMOC', 'Seri Pembinaan OSN']) {
      expect(html, label).toContain(label);
    }
    expect(html).toContain('href="/olimpiade/amc-8"');
    expect(html).toContain('href="/olimpiade/amc-12"');
    expect(OLYMPIAD_COMPETITIONS.filter((c) => c.amc)).toHaveLength(1);
  });

  it('kartu paket memakai label tenang (ID/EN) dan "Soal", bukan badge merah atau "Marks"', () => {
    const html = renderAt('/olimpiade', React.createElement(OlimpiadeHubPage));
    expect(html).toContain('class="lang-pill"');
    expect(html).not.toContain('badge-lang-id');
    expect(html).not.toMatch(/\d+ Marks/);
    expect(html).toMatch(/\d+ Soal/);
  });
});

describe('Beranda dan hub paket soal', () => {
  it('beranda: lima baris mata pelajaran seragam dengan ikon spesifik dan tautan ke /olimpiade', () => {
    const html = renderAt('/', React.createElement(HomeHubPage));
    for (const label of ['Matematika', 'IPA (SD–SMP)', 'Fisika (SMA)', 'Kimia (SMA)', 'Biologi (SMA)']) {
      expect(html, label).toContain(label);
    }
    expect((html.match(/class="hub-subject-row"/g) || []).length).toBe(5);
    expect(html).not.toContain('hub-subject-split');
    for (const icon of ['lucide-sigma', 'lucide-microscope', 'lucide-atom', 'lucide-flask-conical', 'lucide-dna']) {
      expect(html).toContain(icon);
    }
    expect(html).toContain('href="/kimia/kelas-10"');
    expect(html).toContain('href="/biologi/kelas-12"');
    expect(html).toContain('href="/olimpiade');
    expect(html).not.toContain('wa.me');
  });

  it('hub paket soal: tidak ada slug mentah (olimpiade-sd) dan tidak ada "2 soal (olimpiade-sd)"', () => {
    const html = renderAt('/paket-soal', React.createElement(PapersHubPage));
    expect(html).not.toMatch(/\(olimpiade-/);
    expect(html).not.toContain('BAHASA INDONESIA');
    expect(html).toContain('40 Soal');
  });
});
