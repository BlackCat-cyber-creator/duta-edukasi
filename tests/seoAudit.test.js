import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import { ALL_PAPERS, PUBLISHED_PAPERS } from '../src/data/papers/index.js';
import { ALL_CHAPTERS_INDEX, GRADE_METADATA } from '../src/data/chapterIndex.js';
import { ALL_IPA_CHAPTERS_INDEX, IPA_GRADE_METADATA } from '../src/data/ipa/chapterIndex.js';
import { ALL_KIMIA_CHAPTERS_INDEX, KIMIA_GRADE_METADATA } from '../src/data/kimia/chapterIndex.js';
import { ALL_BIOLOGI_CHAPTERS_INDEX, BIOLOGI_GRADE_METADATA } from '../src/data/biologi/chapterIndex.js';
import { ALL_AMC_CHAPTERS_INDEX, AMC_LEVELS_METADATA } from '../src/data/amc/amcMetadata.js';
import { TKA_TESTS, TKA_PACKETS } from '../src/data/tka.js';
import {
  HOME_META,
  ABOUT_META,
  PROGRAM_META,
  FOUNDER_META,
  CONTACT_META,
  TOPIC_INDEX_META,
  FORMULA_INDEX_META,
  OLIMPIADE_HUB_META,
  subjectHubMeta,
  papersHubMeta,
  englishPapersHubMeta,
  paperDetailMeta,
  tkaHomeMeta,
  tkaPacketMeta,
  gradeMeta,
  chapterMeta,
  amcLevelMeta,
  amcChapterMeta
} from '../src/utils/seoMeta.js';
import { SubjectHubPage } from '../src/components/SubjectHubPage.jsx';
import { NotFoundPage } from '../src/components/NotFoundPage.jsx';

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const clean = (s) => s.replace(/<!--[\s\S]*?-->/g, '');

function walkHtml(dir) {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walkHtml(p));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

describe('SEO Data & Metadata Integrity', () => {
  it('seluruh relatedChapterIds di ALL_PAPERS merujuk bab yang benar-benar ada', () => {
    const validIds = new Set([
      ...ALL_CHAPTERS_INDEX,
      ...ALL_IPA_CHAPTERS_INDEX,
      ...ALL_KIMIA_CHAPTERS_INDEX,
      ...ALL_BIOLOGI_CHAPTERS_INDEX,
      ...ALL_AMC_CHAPTERS_INDEX
    ].map((c) => c.id));

    const broken = [];
    for (const p of ALL_PAPERS) {
      for (const cid of p.relatedChapterIds || []) {
        if (!validIds.has(cid)) broken.push({ paper: p.id, cid });
      }
    }
    expect(broken).toEqual([]);
  });

  it('seluruh deskripsi meta di seoMeta.js <= 160 karakter dan tidak kosong', () => {
    const entries = [
      HOME_META,
      ABOUT_META,
      PROGRAM_META,
      FOUNDER_META,
      CONTACT_META,
      TOPIC_INDEX_META,
      FORMULA_INDEX_META,
      OLIMPIADE_HUB_META,
      papersHubMeta('all'),
      englishPapersHubMeta(50),
      tkaHomeMeta(),
      ...['matematika', 'ipa', 'fisika', 'kimia', 'biologi'].map((s) => subjectHubMeta(s)),
      ...GRADE_METADATA.map((g) => gradeMeta(g.grade, 'matematika')),
      ...IPA_GRADE_METADATA.map((g) => gradeMeta(g.grade, g.grade >= 10 ? 'fisika' : 'ipa')),
      ...KIMIA_GRADE_METADATA.map((g) => gradeMeta(g.grade, 'kimia')),
      ...BIOLOGI_GRADE_METADATA.map((g) => gradeMeta(g.grade, 'biologi')),
      ...ALL_CHAPTERS_INDEX.map((c) => chapterMeta(c.grade, c)),
      ...ALL_IPA_CHAPTERS_INDEX.map((c) => chapterMeta(c.grade, c)),
      ...ALL_KIMIA_CHAPTERS_INDEX.map((c) => chapterMeta(c.grade, c)),
      ...ALL_BIOLOGI_CHAPTERS_INDEX.map((c) => chapterMeta(c.grade, c)),
      ...AMC_LEVELS_METADATA.map((m) => amcLevelMeta(m.level)),
      ...ALL_AMC_CHAPTERS_INDEX.map((c) => amcChapterMeta(c.level, c)),
      ...TKA_TESTS.flatMap((t) => TKA_PACKETS.map((p) => tkaPacketMeta(t, p))),
      ...PUBLISHED_PAPERS.map((p) => paperDetailMeta(p))
    ];

    for (const m of entries) {
      expect(m.title.length, `${m.path} empty title`).toBeGreaterThan(10);
      expect(m.description.length, `${m.path} empty desc`).toBeGreaterThan(40);
      expect(m.description.length, `${m.path} desc > 160: ${m.description}`).toBeLessThanOrEqual(160);
    }
  });

  it('SubjectHubPage dan NotFoundPage merender SSR dengan <h1> dan tautan valid', () => {
    for (const subj of ['matematika', 'ipa', 'fisika', 'kimia', 'biologi']) {
      const html = clean(renderToString(
        React.createElement(MemoryRouter, { initialEntries: [`/${subj}`] }, React.createElement(SubjectHubPage, { subject: subj }))
      ));
      expect(html, subj).toContain('<h1');
      expect(html, subj).toContain('Pertanyaan Umum');
      expect(html, subj).toContain('href="/rumus"');
    }

    const notFoundHtml = clean(renderToString(
      React.createElement(MemoryRouter, { initialEntries: ['/tidak-ada'] }, React.createElement(NotFoundPage))
    ));
    expect(notFoundHtml).toContain('<h1');
    expect(notFoundHtml).toContain('href="/"');
  });

  it('aset teknis SEO & ikon PWA/OpenSearch tersedia dan RelatedChapters tidak membocorkan bundle', () => {
    for (const rel of ['public/opensearch.xml', 'public/favicon.ico', 'public/brand/icon-192.png', 'public/brand/icon-512.png']) {
      expect(fs.existsSync(path.join(ROOT, rel)), `Missing ${rel}`).toBe(true);
    }
    const relSrc = fs.readFileSync(path.join(ROOT, 'src/components/handbook/RelatedChapters.jsx'), 'utf8');
    expect(relSrc).not.toMatch(/papers\/index/);
    expect(relSrc).toMatch(/papers\/manifest/);

    const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
    expect(indexHtml).toContain('G-G2BZYXCEFM');
    const analyticsSrc = fs.readFileSync(path.join(ROOT, 'src/utils/analytics.js'), 'utf8');
    expect(analyticsSrc).toContain('export function trackPageView');
  });
});

const hasDist = fs.existsSync(path.join(DIST, 'sitemap.xml'));

describe.skipIf(!hasDist)('Post-build dist/ SEO Audit', { timeout: 20000 }, () => {
  it('HTML prerender ringan (<1MB), unik title/desc, tanpa broken internal link, dan gambar punya width/height/lazy', () => {
    const files = walkHtml(DIST).filter((f) => !f.endsWith('googlebd291c9eb4b652d2.html') && !f.endsWith('app.html'));
    const distRoutes = new Set(['/']);
    for (const f of files) {
      const rel = `/${path.relative(DIST, f).replace(/\\/g, '/').replace(/\.html$/, '')}`;
      distRoutes.add(rel === '/index' ? '/' : rel);
    }

    const titles = new Set();
    const descs = new Set();
    const seenTypes = new Set();

    for (const f of files) {
      const html = fs.readFileSync(f, 'utf8');
      if (html.includes('http-equiv="refresh"')) {
        expect(html).toContain('noindex, follow');
        continue;
      }
      const size = Buffer.byteLength(html, 'utf8');
      expect(size, `${f} > 1MB (${size})`).toBeLessThan(1024 * 1024);

      const tm = html.match(/<title>([\s\S]*?)<\/title>/);
      expect(tm, `${f} missing title`).toBeTruthy();
      const title = tm[1].trim();
      expect(titles.has(title), `Duplicate title: ${title}`).toBe(false);
      titles.add(title);

      const dm = html.match(/<meta name="description" content="([^"]*)"/);
      expect(dm, `${f} missing description`).toBeTruthy();
      const desc = dm[1]
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .trim();
      expect(desc.length, `${f} desc > 160`).toBeLessThanOrEqual(160);
      expect(descs.has(desc), `Duplicate desc on ${f}`).toBe(false);
      descs.add(desc);

      const h1s = html.match(/<h1[\s>]/g) || [];
      expect(h1s.length, `${f} H1 count`).toBe(1);
      expect(html, `${f} missing canonical`).toContain('rel="canonical"');

      for (const img of html.match(/<img\b[^>]*>/g) || []) {
        expect(img, `${f} img missing alt`).toMatch(/\balt=/);
        expect(img, `${f} img missing width`).toMatch(/\bwidth="\d+"/);
        expect(img, `${f} img missing height`).toMatch(/\bheight="\d+"/);
        expect(img, `${f} img missing loading="lazy"`).toMatch(/\bloading="lazy"/);
      }

      for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
        const href = m[1];
        if (/\.(xml|txt|md|webmanifest|svg|png|jpg|webp|ico)$/.test(href)) continue;
        if (href.startsWith('/assets/') || href.startsWith('/brand/') || href.startsWith('/datasets/')) continue;
        expect(distRoutes.has(href), `Broken internal link ${href} in ${f}`).toBe(true);
      }

      const ldMatches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
      expect(ldMatches.length, `${f} missing JSON-LD`).toBeGreaterThan(0);
      for (const lm of ldMatches) {
        const parsed = JSON.parse(lm[1]);
        const nodes = Array.isArray(parsed['@graph']) ? parsed['@graph'] : [parsed];
        for (const node of nodes) {
          const ts = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
          for (const t of ts) if (t) seenTypes.add(t);
        }
      }
    }

    for (const requiredType of ['EducationalOrganization', 'WebSite', 'WebPage', 'Course', 'Quiz', 'FAQPage', 'Dataset', 'DefinedTermSet', 'BreadcrumbList']) {
      expect(seenTypes.has(requiredType), `Missing JSON-LD @type ${requiredType}`).toBe(true);
    }
  });

  it('app.html noindex, sitemap.xml valid (image+xhtml), rss.xml valid, llms.txt ringkas, dan datasets tersedia', () => {
    const appHtml = fs.readFileSync(path.join(DIST, 'app.html'), 'utf8');
    expect(appHtml).toContain('noindex, nofollow');

    const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
    expect(sitemap).toContain('xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"');
    expect(sitemap).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"');
    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    expect(locs.length).toBeGreaterThan(400);
    expect(new Set(locs).size).toBe(locs.length);

    const rss = fs.readFileSync(path.join(DIST, 'rss.xml'), 'utf8');
    expect(rss).toContain('atom:link');
    expect(rss).toContain('<lastBuildDate>');

    const llmsSize = fs.statSync(path.join(DIST, 'llms.txt')).size;
    expect(llmsSize).toBeLessThan(80 * 1024);

    const kurIndex = JSON.parse(fs.readFileSync(path.join(DIST, 'datasets/kurikulum-index.json'), 'utf8'));
    expect(kurIndex.totalEntries).toBeGreaterThan(90);

    const bioHtml = fs.readFileSync(path.join(DIST, 'biologi/kelas-11/bab3-sistem-gerak-sirkulasi-dan-pencernaan.html'), 'utf8');
    const bioGraph = JSON.parse(bioHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
    const bioQuiz = bioGraph.find((n) => n['@type'] === 'Quiz');
    expect(bioQuiz).toBeTruthy();
    const firstQ = bioQuiz.hasPart[0];
    expect(Array.isArray(firstQ.suggestedAnswer)).toBe(true);
    expect(firstQ.suggestedAnswer.length).toBeGreaterThanOrEqual(3);
    expect(firstQ.encodingFormat).toBe('text/plain');
    expect(firstQ.educationalAlignment).toBeTruthy();
    expect(firstQ.typicalAgeRange).toBe('15-18');
    expect(firstQ.assesses).toBeTruthy();
    expect(firstQ.acceptedAnswer.position).toBeGreaterThanOrEqual(1);
    expect(firstQ.acceptedAnswer.encodingFormat).toBe('text/plain');
    expect(firstQ.acceptedAnswer.answerExplanation).toBeTruthy();
  });
});
