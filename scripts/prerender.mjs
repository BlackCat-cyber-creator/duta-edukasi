/**
 * Prerender halaman publik untuk mesin pencari dan AI/LLM (dijalankan setelah `vite build`).
 *
 * Menghasilkan HTML statis berisi materi lengkap (KaTeX htmlAndMathml), data terstruktur JSON-LD
 * (`EducationalOrganization`, `LocalBusiness`, `Person`, `LearningResource`, `Quiz`, `FAQPage`,
 * `BreadcrumbList`), indeks `llms.txt`, korpus lengkap `llms-full.txt`, serta `sitemap.xml`.
 *
 * Keluaran utama:
 *   dist/index.html, dist/app.html
 *   dist/tentang.html (termasuk prestasi siswa), dist/program.html, dist/pendiri.html, dist/kontak.html
 *   dist/paket-soal.html, dist/paket-soal/<mapel>.html, dist/paket-soal/<mapel>/<slug>.html
 *   dist/rumus.html, dist/daftar-isi.html, dist/tka.html, dist/tka/<paket>.html
 *   dist/matematika/kelas-N[.html|/<bab>.html], dist/ipa/kelas-N[.html|/<bab>.html] (IPA SD–SMP; Kelas 10–12 = stub ke /fisika)
 *   dist/fisika/kelas-N[.html|/<bab>.html], dist/kimia/kelas-N[.html|/<bab>.html], dist/biologi/kelas-N[.html|/<bab>.html] (SMA Kelas 10–12)
 *   dist/olimpiade.html (pusat Olimpiade: semua kompetisi), dist/olimpiade/amc-N[.html|/<bab>.html]
 *   dist/llms.txt, dist/llms-full.txt, dist/sitemap.xml
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import katex from 'katex';
import { GRADE_METADATA } from '../src/data/chapterIndex.js';
import { AMC_LEVELS_METADATA, ALL_AMC_CHAPTERS_INDEX } from '../src/data/amc/amcMetadata.js';
import { questionAnchor } from '../src/utils/reports.js';
import { splitSubbab, articleSections } from '../src/utils/chapterOutline.js';
import { TOPIC_GROUPS } from '../src/data/topics.js';
import { topicChapters, relatedChapters } from '../src/utils/relatedChapters.js';
import { TKA_TESTS, TKA_PACKETS, tkaPath } from '../src/data/tka.js';
import { buildTkaPacket, chaptersMap } from '../src/utils/tkaBuilder.js';
import {
  PUBLISHED_PAPERS,
  PAPER_SUBJECT_META,
  getPapersBySubject,
  getRelatedPapersForChapter,
  paperPath,
  subjectHubPath,
  OLYMPIAD_COMPETITIONS,
  formatPaperMeta,
  levelNameOfGrade,
  englishPapersFilter,
  competitionOfPaper,
  getRelatedPapers
} from '../src/data/papers/index.js';
import { kimiaGrade10Data } from '../src/data/kimia/grade10.js';
import { kimiaGrade11Data } from '../src/data/kimia/grade11.js';
import { kimiaGrade12Data } from '../src/data/kimia/grade12.js';
import { biologiGrade10Data } from '../src/data/biologi/grade10.js';
import { biologiGrade11Data } from '../src/data/biologi/grade11.js';
import { biologiGrade12Data } from '../src/data/biologi/grade12.js';
import { ipaGrade4Data } from '../src/data/ipa/grade4.js';
import { ipaGrade5Data } from '../src/data/ipa/grade5.js';
import { ipaGrade6Data } from '../src/data/ipa/grade6.js';
import { ipaGrade7Data } from '../src/data/ipa/grade7.js';
import { ipaGrade8Data } from '../src/data/ipa/grade8.js';
import { ipaGrade9Data } from '../src/data/ipa/grade9.js';
import { fisikaGrade10Data } from '../src/data/fisika/grade10.js';
import { fisikaGrade11Data } from '../src/data/fisika/grade11.js';
import { fisikaGrade12Data } from '../src/data/fisika/grade12.js';
import { grade4Data } from '../src/data/matematika/grade4.js';
import { grade5Data } from '../src/data/matematika/grade5.js';
import { grade6Data } from '../src/data/matematika/grade6.js';
import { grade7Data } from '../src/data/matematika/grade7.js';
import { grade8Data } from '../src/data/matematika/grade8.js';
import { grade9Data } from '../src/data/matematika/grade9.js';
import { grade10Data } from '../src/data/matematika/grade10.js';
import { grade11Data } from '../src/data/matematika/grade11.js';
import { grade12Data } from '../src/data/matematika/grade12.js';
import { amc8Data } from '../src/data/amc/amc8Data.js';
import { amc10Data } from '../src/data/amc/amc10Data.js';
import { amc12Data } from '../src/data/amc/amc12Data.js';
import { SITE_URL, SITE_NAME, gradePath, chapterPath, chapterSlug, amcLevelPath, amcChapterPath } from '../src/utils/seoRoutes.js';
import {
  HOME_META,
  ABOUT_META,
  PROGRAM_META,
  FOUNDER_META,
  CONTACT_META,
  TOPIC_INDEX_META,
  FORMULA_INDEX_META,
  OLIMPIADE_HUB_META,
  olympiadCompetitionMeta,
  englishPapersHubMeta,
  papersHubMeta,
  paperDetailMeta,
  tkaHomeMeta,
  tkaPacketMeta,
  gradeMeta,
  chapterMeta,
  amcLevelMeta,
  amcChapterMeta,
  levelLabel,
  subjectDisplayName,
  plainText
} from '../src/utils/seoMeta.js';
import { AUTHOR, ABOUT, FOUNDER, ORGANIZATION, PROGRAMS, FAQS, PRESTASI_DATA, isPublicInstagramUrl, parseInstagramPost } from '../src/data/siteInfo.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.resolve(__dirname, '../dist');
const TODAY = new Date().toISOString().slice(0, 10);

const GIT_FILE_DATES = (() => {
  const map = new Map();
  try {
    const log = execSync('git log --format=__DATE__%cs --name-only', { cwd: ROOT, encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 });
    let cur = TODAY;
    for (const rawLine of log.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line) continue;
      if (line.startsWith('__DATE__')) {
        cur = line.slice(8);
      } else if (!map.has(line)) {
        map.set(line, cur);
      }
    }
  } catch {
    // fallback to TODAY when git history unavailable
  }
  return map;
})();

function lastmodFor(...relPaths) {
  let latest = '';
  for (const rel of relPaths.flat()) {
    if (!rel) continue;
    const norm = String(rel).replace(/\\/g, '/').replace(/^\.\//, '');
    const d = GIT_FILE_DATES.get(norm);
    if (d && d > latest) latest = d;
  }
  return latest || TODAY;
}

const PAPER_FILE_DATES = new Map();
for (const [filePath, d] of GIT_FILE_DATES.entries()) {
  if (filePath.startsWith('src/data/papers/')) {
    PAPER_FILE_DATES.set(filePath, d);
  }
}

function paperLastmod(paper) {
  const slugKey = `/${paper.slug}.js`;
  for (const [fp, d] of PAPER_FILE_DATES.entries()) {
    if (fp.endsWith(slugKey) || fp.includes(`/${paper.subject}/`) && fp.includes(paper.slug)) return d;
  }
  return lastmodFor('src/data/papers/index.js');
}
const GRADES = [grade4Data, grade5Data, grade6Data, grade7Data, grade8Data, grade9Data, grade10Data, grade11Data, grade12Data];
const IPA = [ipaGrade4Data, ipaGrade5Data, ipaGrade6Data, ipaGrade7Data, ipaGrade8Data, ipaGrade9Data, fisikaGrade10Data, fisikaGrade11Data, fisikaGrade12Data].filter((g) => g.chapters.length > 0);
const KIMIA = [kimiaGrade10Data, kimiaGrade11Data, kimiaGrade12Data].filter((g) => g.chapters.length > 0);
const BIOLOGI = [biologiGrade10Data, biologiGrade11Data, biologiGrade12Data].filter((g) => g.chapters.length > 0);
const AMC = [amc8Data, amc10Data, amc12Data];
const PHASE = Object.fromEntries(GRADE_METADATA.map((g) => [g.grade, g.phase]));
const CHAPTER_TITLE_MAP = new Map(
  [...GRADES, ...IPA, ...KIMIA, ...BIOLOGI].flatMap((g) =>
    (g.chapters || []).map((ch) => [ch.id, ch.title])
  )
);

// ---------------------------------------------------------------------------
// Teks -> HTML (LaTeX dirender KaTeX htmlAndMathml, **tebal**, baris baru)
// ---------------------------------------------------------------------------
const escapeHtml = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function renderMath(tex, displayMode) {
  try {
    return katex.renderToString(tex, { displayMode, throwOnError: false, strict: 'ignore', output: 'htmlAndMathml' });
  } catch {
    return escapeHtml(tex);
  }
}

function rich(text) {
  const src = String(text ?? '');
  const hasDelimiters = /\$/.test(src);
  if (!hasDelimiters && /\\[a-zA-Z]+|\^\{?/.test(src)) return renderMath(src, false);
  return src
    .split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$)/g)
    .map((part) => {
      if (part.startsWith('$$') && part.endsWith('$$') && part.length > 4) return renderMath(part.slice(2, -2), true);
      if (part.startsWith('$') && part.endsWith('$') && part.length > 2) return renderMath(part.slice(1, -1), false);
      return escapeHtml(part)
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
    })
    .join('');
}

const paragraphs = (text) => String(text || '').split(/\n\s*\n/).map((p) => `<p>${rich(p)}</p>`).join('\n');

// ---------------------------------------------------------------------------
// Kerangka halaman
// ---------------------------------------------------------------------------
const shell = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
const katexCss = fs.readdirSync(path.join(DIST, 'assets')).find((f) => /katex.*\.css$/.test(f));
if (!shell.includes('<div id="root"></div>')) throw new Error('dist/index.html tidak berisi <div id="root"></div>');
fs.writeFileSync(path.join(DIST, 'app.html'), shell);

const FOOTER_HTML = `<footer class="seo-footer">
  <p><strong>${escapeHtml(ORGANIZATION.name)}</strong> — Platform Belajar Terbuka Matematika &amp; Sains · Disusun oleh <a href="/tentang">${escapeHtml(AUTHOR.name)}</a>.</p>
  <p>Belajar: <a href="/">Materi</a> · <a href="/daftar-isi">Daftar isi</a> · <a href="/rumus">Kumpulan rumus</a> · <a href="/tka">Latihan TKA</a> · <a href="/olimpiade">Olimpiade</a> · <a href="/paket-soal">Paket Soal</a></p>
  <p>Referensi Terbuka &amp; AI: <a href="/llms.txt">Indeks AI (llms.txt)</a> · <a href="/datasets/paket-soal-index.json">Dataset Terbuka (JSON)</a> · <a href="/rss.xml">RSS</a> · <a href="/sitemap.xml">Sitemap</a></p>
  <p>Tentang kami: <a href="/tentang">Tentang</a> · <a href="/tentang#prestasi">Prestasi siswa</a> · <a href="/pendiri">Pendiri</a> · <a href="/program">Program</a> · <a href="/kontak">Kontak</a> · Lisensi <a href="${escapeHtml(ORGANIZATION.licenseUrl)}">${escapeHtml(ORGANIZATION.licenseName)}</a></p>
</footer>`;

function renderPage({ meta, body, jsonLd = [] }) {
  const url = `${SITE_URL}${meta.path === '/' ? '/' : meta.path}`;
  const docLang = meta.lang || 'id';
  const ogLocale = docLang === 'en' ? 'en_US' : 'id_ID';
  const ogImageUrl = `${SITE_URL}${meta.ogImage || '/brand/og/default.png'}`;
  const altLinks = Array.isArray(meta.alternates) && meta.alternates.length
    ? meta.alternates.map((a) => `<link rel="alternate" hreflang="${escapeHtml(a.hreflang)}" href="${SITE_URL}${a.path}" />`)
    : [
        `<link rel="alternate" hreflang="${escapeHtml(docLang)}" href="${url}" />`,
        `<link rel="alternate" hreflang="x-default" href="${url}" />`
      ];
  const head = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
    `<link rel="canonical" href="${url}" />`,
    ...altLinks,
    `<link rel="alternate" type="application/rss+xml" title="${escapeHtml(SITE_NAME)} — Paket Soal &amp; Olimpiade" href="${SITE_URL}/rss.xml" />`,
    `<link rel="alternate" type="text/markdown" title="${escapeHtml(SITE_NAME)} AI/LLM Index (llms.txt)" href="${SITE_URL}/llms.txt" />`,
    ...(meta.markdownPath ? [`<link rel="alternate" type="text/markdown" title="${escapeHtml(meta.title.split(' | ')[0])} (Markdown + LaTeX)" href="${SITE_URL}${meta.markdownPath}" />`] : []),
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:locale" content="${ogLocale}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${ogImageUrl}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:image" content="${ogImageUrl}" />`,
    ...(katexCss ? [`<link rel="stylesheet" href="/assets/${katexCss}" />`] : []),
    ...jsonLd.map((obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`)
  ].join('\n    ');

  return shell
    .replace(/<html lang="[^"]*">/, `<html lang="${escapeHtml(docLang)}">`)
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace(/<meta property="og:image"[^>]*>/, '')
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root"><div class="handbook-container seo-page">${body}${FOOTER_HTML}</div></div>`);
}

const PERSON_LD = {
  '@type': 'Person',
  name: AUTHOR.name,
  jobTitle: AUTHOR.jobTitle,
  url: `${SITE_URL}/tentang`,
  ...(AUTHOR.sameAs.length ? { sameAs: AUTHOR.sameAs } : {})
};

const FOUNDER_LD = {
  '@type': 'Person',
  name: FOUNDER.name,
  alternateName: FOUNDER.formalName,
  jobTitle: FOUNDER.role,
  url: `${SITE_URL}/pendiri`,
  sameAs: [FOUNDER.instagramUrl, ...(FOUNDER.youtubeUrl ? [FOUNDER.youtubeUrl] : [])]
};

const ORGANIZATION_LD = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  name: ORGANIZATION.name,
  legalName: ORGANIZATION.legalName,
  alternateName: ORGANIZATION.alternateName,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-monogram.svg`,
  image: `${SITE_URL}/brand/og/default.png`,
  telephone: ORGANIZATION.telephone,
  address: {
    '@type': 'PostalAddress',
    ...ORGANIZATION.address
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: ORGANIZATION.telephone,
    contactType: 'customer service',
    areaServed: 'ID',
    availableLanguage: ['Indonesian', 'English']
  },
  knowsAbout: [
    'Matematika', 'IPA', 'Fisika', 'Kimia', 'Biologi',
    'OSN', 'AIME', 'AMC', 'SASMO', 'SMO', 'HKIMO', 'TIMO', 'SIMOC', 'IKMC',
    'KSM', 'KMNR', 'UTBK', 'SNBT', 'TKA', 'Kurikulum Merdeka', 'Cambridge IGCSE 0580',
    'Olimpiade Informatika', 'Olimpiade Astronomi', 'Olimpiade Kebumian', 'Olimpiade Ekonomi'
  ],
  areaServed: ['Indonesia', 'Pontianak, Kalimantan Barat'],
  hasMap: ORGANIZATION.mapsUrl,
  founder: FOUNDER_LD,
  sameAs: ORGANIZATION.sameAs,
  license: ORGANIZATION.licenseUrl
};

const DATASET_LD = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: `${SITE_NAME} Open Math, Science & Olympiad Practice Dataset (${PUBLISHED_PAPERS.length} Papers)`,
  description: `Open structured benchmark & study corpus containing ${PUBLISHED_PAPERS.length} Matematika, IPA, Fisika, Kimia, Biologi, UTBK-SNBT, Cambridge IGCSE, and Olympiad (OSN, AMC/AIME, SASMO, SMO, HKIMO, TIMO, SIMOC, IKMC) practice papers with step-by-step solutions, key principles, LaTeX math, and marking rubrics.`,
  url: `${SITE_URL}/paket-soal`,
  inLanguage: ['id', 'en'],
  isAccessibleForFree: true,
  license: ORGANIZATION.licenseUrl,
  dateModified: TODAY,
  keywords: [
    'Bank Soal Matematika Indonesia',
    'Soal Olimpiade OSN Pembahasan',
    'AMC SASMO HKIMO TIMO Solutions',
    'UTBK SNBT Penalaran Matematika',
    'Cambridge IGCSE 0580 Practice',
    'Indonesian STEM Education Dataset'
  ],
  creator: {
    '@type': 'EducationalOrganization',
    name: ORGANIZATION.name,
    legalName: ORGANIZATION.legalName,
    url: SITE_URL
  },
  distribution: [
    {
      '@type': 'DataDownload',
      name: 'Paket Soal Index (JSON)',
      encodingFormat: 'application/json',
      contentUrl: `${SITE_URL}/datasets/paket-soal-index.json`
    },
    {
      '@type': 'DataDownload',
      name: 'Full Structured Question & Solution Corpus (JSONL)',
      encodingFormat: 'application/x-ndjson',
      contentUrl: `${SITE_URL}/datasets/paket-soal-corpus.jsonl`
    },
    {
      '@type': 'DataDownload',
      name: 'Complete Markdown + LaTeX Corpus (llms-full.txt)',
      encodingFormat: 'text/markdown',
      contentUrl: `${SITE_URL}/llms-full.txt`
    },
    {
      '@type': 'DataDownload',
      name: 'Olympiad Corpus Markdown + LaTeX (llms-olimpiade.txt)',
      encodingFormat: 'text/markdown',
      contentUrl: `${SITE_URL}/llms-olimpiade.txt`
    },
    {
      '@type': 'DataDownload',
      name: 'Kurikulum Merdeka Corpus Markdown + LaTeX (llms-kurikulum.txt)',
      encodingFormat: 'text/markdown',
      contentUrl: `${SITE_URL}/llms-kurikulum.txt`
    }
  ]
};

function writePage(routePath, html) {
  const file = routePath === '/' ? path.join(DIST, 'index.html') : path.join(DIST, `${routePath.slice(1)}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const breadcrumbLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE_URL}${p}` }))
});

const breadcrumbHtml = (items) => `<nav class="seo-breadcrumb" aria-label="Navigasi">${items
  .map(([name, p], i) => (i === items.length - 1 ? `<span>${escapeHtml(name)}</span>` : `<a href="${p}">${escapeHtml(name)}</a>`))
  .join(' › ')}</nav>`;

const faqPageLd = (faqs = []) => {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };
};

const faqSectionHtml = (faqs = [], title = 'Pertanyaan Umum') => {
  if (!faqs.length) return '';
  return `<section class="seo-faq"><h2>${escapeHtml(title)}</h2>${faqs.map((f) => `<article><h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p></article>`).join('\n')}</section>`;
};

const itemListLd = (name, pagePath, items = []) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name,
  url: `${SITE_URL}${pagePath}`,
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: items.length,
    itemListElement: items.slice(0, 500).map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      url: `${SITE_URL}${it.path}`
    }))
  }
});

const learningResourceLd = ({ meta, educationalLevel, subject = 'Matematika', inLanguage = 'id', dateModified = TODAY, keywords = [] }) => ({
  '@context': 'https://schema.org',
  '@type': 'LearningResource',
  name: meta.title.split(' | ')[0],
  description: meta.description,
  url: `${SITE_URL}${meta.path}`,
  image: `${SITE_URL}${meta.ogImage || '/brand/og/default.png'}`,
  inLanguage,
  dateModified,
  ...(keywords.length ? { keywords: keywords.join(', ') } : {}),
  isAccessibleForFree: true,
  license: ORGANIZATION.licenseUrl,
  educationalLevel,
  learningResourceType: ['Ringkasan materi', 'Rumus kunci', 'Contoh soal', 'Latihan soal'],
  about: { '@type': 'Thing', name: subject },
  provider: { '@type': 'EducationalOrganization', name: SITE_NAME, url: SITE_URL },
  author: PERSON_LD
});

function quizLd({ meta, questions = [], educationalLevel, subject = 'Matematika', inLanguage = 'id', dateModified = TODAY }) {
  if (!questions.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: `Latihan Soal: ${meta.title.split(' | ')[0]}`,
    description: meta.description,
    url: `${SITE_URL}${meta.path}#latihan-soal`,
    inLanguage,
    dateModified,
    isAccessibleForFree: true,
    license: ORGANIZATION.licenseUrl,
    educationalLevel,
    about: { '@type': 'Thing', name: subject },
    author: PERSON_LD,
    hasPart: questions.map((q, idx) => {
      const key = q.correctAnswer || q.answer;
      const ansText = q.correctAnswer
        ? `${q.correctAnswer}. ${(q.options || []).find((o) => o.key === q.correctAnswer)?.text || ''}`
        : String(key ?? '');
      const sol = q.bestSolution || q.conceptualSolution || q.explanation || '';
      return {
        '@type': 'Question',
        position: idx + 1,
        name: `Soal ${idx + 1}`,
        text: plainText(q.question || q.problem || ''),
        eduQuestionType: (q.options || []).length ? 'Multiple choice' : 'Short answer',
        acceptedAnswer: {
          '@type': 'Answer',
          text: plainText(ansText)
        },
        ...(sol ? { comment: { '@type': 'Comment', text: plainText(sol) } } : {})
      };
    })
  };
}

function questionList(questions) {
  return `<ol class="seo-questions">${questions.map((q) => {
    const options = (q.options || []).length
      ? `<ul class="seo-options">${q.options.map((o) => `<li><strong>${escapeHtml(o.key)}.</strong> ${rich(o.text)}</li>`).join('')}</ul>`
      : '';
    const key = q.correctAnswer || q.answer;
    const solution = q.bestSolution || q.conceptualSolution || q.explanation;
    const answerText = q.correctAnswer
      ? `${escapeHtml(q.correctAnswer)}. ${rich((q.options || []).find((o) => o.key === q.correctAnswer)?.text || '')}`
      : rich(String(key ?? ''));
    const details = key || solution
      ? `<details class="seo-solution"><summary>Pembahasan</summary>${key ? `<p><strong>Jawaban: ${answerText}</strong></p>` : ''}${solution ? `<div>${rich(solution)}</div>` : ''}</details>`
      : '';
    return `<li id="${questionAnchor(q.id)}"><div>${rich(q.question || q.problem)}</div>${options}${details}</li>`;
  }).join('\n')}</ol>`;
}

function chapterBody(chapter) {
  const s = chapter.summary || {};
  const practiceCount = chapter.questions?.length || 0;
  const subbab = (s.coreConcepts || []).map(splitSubbab);
  const toc = articleSections(s, practiceCount).map((sec) => {
    const sub = sec.id === 'materi'
      ? `<ol type="a">${subbab.map((sb, i) => `<li><a href="#materi-${i + 1}">${rich(sb.title)}</a></li>`).join('')}</ol>`
      : '';
    return `<li><a href="#${sec.id}">${escapeHtml(sec.label)}</a>${sub}</li>`;
  }).join('');
  const parts = [`<nav class="seo-toc" aria-label="Daftar isi bab"><h2>Daftar Isi</h2><ol>${toc}</ol></nav>`];
  if (s.overview) parts.push(`<section id="pengantar"><h2>Pengantar</h2>${paragraphs(s.overview)}</section>`);
  if (subbab.length) {
    parts.push(`<section id="materi"><h2>Materi</h2>${subbab.map((sb, i) => `
      <div id="materi-${i + 1}"><h3>${i + 1}. ${rich(sb.title)}</h3><p>${rich(sb.body)}</p></div>`).join('')}</section>`);
  }
  if (s.keyFormulas?.length) parts.push(`<section id="rumus"><h2>Rumus Kunci</h2><ul>${s.keyFormulas.map((f) => `<li><strong>${rich(f.label)}</strong>: ${renderMath(f.formula, false)}</li>`).join('')}</ul></section>`);
  if (s.workedExamples?.length) {
    parts.push(`<section id="contoh"><h2>Contoh Soal dan Pembahasan</h2>${s.workedExamples.map((ex, i) => `
      <article><h3>Contoh ${i + 1}${ex.title ? `: ${rich(ex.title)}` : ''}</h3><p>${rich(ex.problem)}</p><details><summary>Lihat pembahasan</summary><div>${rich(ex.solution)}</div></details></article>`).join('')}</section>`);
  }
  if (s.misconceptions?.length) parts.push(`<section id="kesalahan"><h2>Kesalahan yang Sering Terjadi</h2><ul>${s.misconceptions.map((m) => `<li>${rich(m)}</li>`).join('')}</ul></section>`);
  if (s.tutorTip) parts.push(`<section><h2>Tips</h2><p>${rich(s.tutorTip)}</p></section>`);
  return parts.join('\n');
}

function gradeToc(chapters, toPath) {
  return `<ol class="seo-grade-toc">${chapters.map((c) => {
    const subs = (c.summary?.coreConcepts || []).map(splitSubbab);
    return `<li><a href="${toPath(c)}"><strong>${escapeHtml(c.title)}</strong></a>${c.trackLabel ? ` (${escapeHtml(c.trackLabel)})` : ''}
      <ul>${subs.map((sb, i) => `<li><a href="${toPath(c)}#materi-${i + 1}">${rich(sb.title)}</a></li>`).join('')}</ul></li>`;
  }).join('\n')}</ol>`;
}

const siblingLinks = (items, currentId, toPath) => `<nav class="seo-chapters"><h2>Bab Lainnya</h2><ul>${items
  .map((c) => (c.id === currentId ? `<li><strong>${escapeHtml(c.title)}</strong></li>` : `<li><a href="${toPath(c)}">${escapeHtml(c.title)}</a></li>`))
  .join('')}</ul></nav>`;

const relatedHtml = (chapterId) => {
  const items = relatedChapters(chapterId);
  const papers = getRelatedPapersForChapter(chapterId);
  if (!items.length && !papers.length) return '';
  const papersBlock = papers.length
    ? `<h2>Paket Soal Terkait</h2><ul>${papers.map((p) => {
        const info = formatPaperMeta(p);
        return `<li><a href="${paperPath(p)}">${escapeHtml(p.title)}</a> (${p.lang === 'en' ? 'English' : 'Indonesia'} · ${escapeHtml(info.itemsLabel)}${info.score ? ` · ${escapeHtml(info.score)}` : ''})</li>`;
      }).join('')}</ul>`
    : '';
  const chBlock = items.length
    ? `<h2>Materi Terkait</h2><ul>${items.map((c) => `<li><a href="${c.path}">${escapeHtml(c.title)}</a> (${escapeHtml(c.label)})</li>`).join('')}</ul>`
    : '';
  return `<aside class="seo-related">${papersBlock}${chBlock}</aside>`;
};

const sitemap = [];
const addToSitemap = (p, priority, lastmod = TODAY) => sitemap.push({ loc: `${SITE_URL}${p === '/' ? '/' : p}`, priority, lastmod });

// ---------------------------------------------------------------------------
// Beranda
// ---------------------------------------------------------------------------
{
  const gradeList = GRADES.map((g) => `<li><a href="${gradePath(g.grade)}"><strong>Matematika Kelas ${g.grade} ${levelLabel(g.grade)}</strong></a> — ${g.chapters.map((c) => `<a href="${chapterPath(g.grade, c.id)}">${escapeHtml(c.title)}</a>`).join(', ')}</li>`).join('\n');
  const ipaSchoolList = IPA.filter((g) => g.grade <= 9).map((g) => `<li><a href="${gradePath(g.grade, 'ipa')}"><strong>IPA Kelas ${g.grade} ${levelLabel(g.grade)}</strong></a> — ${g.chapters.map((c) => `<a href="${chapterPath(g.grade, c.id)}">${escapeHtml(c.title)}</a>`).join(', ')}</li>`).join('\n');
  const fisikaSmaList = IPA.filter((g) => g.grade >= 10).map((g) => `<li><a href="${gradePath(g.grade, 'fisika')}"><strong>Fisika Kelas ${g.grade} ${levelLabel(g.grade)}</strong></a> — ${g.chapters.map((c) => `<a href="${chapterPath(g.grade, c.id)}">${escapeHtml(c.title)}</a>`).join(', ')}</li>`).join('\n');
  const kimiaSmaList = KIMIA.map((g) => `<li><a href="${gradePath(g.grade, 'kimia')}"><strong>Kimia Kelas ${g.grade} ${levelLabel(g.grade)}</strong></a> — ${g.chapters.map((c) => `<a href="${chapterPath(g.grade, c.id)}">${escapeHtml(c.title)}</a>`).join(', ')}</li>`).join('\n');
  const biologiSmaList = BIOLOGI.map((g) => `<li><a href="${gradePath(g.grade, 'biologi')}"><strong>Biologi Kelas ${g.grade} ${levelLabel(g.grade)}</strong></a> — ${g.chapters.map((c) => `<a href="${chapterPath(g.grade, c.id)}">${escapeHtml(c.title)}</a>`).join(', ')}</li>`).join('\n');
  const amcList = AMC.map((d) => `<li><a href="${amcLevelPath(d.level)}"><strong>AMC ${d.level}</strong></a> — ${d.chapters.map((c) => `<a href="${amcChapterPath(d.level, c.id)}">${escapeHtml(c.title)}</a>`).join(', ')}</li>`).join('\n');
  const papersList = PUBLISHED_PAPERS.map((p) => {
    const info = formatPaperMeta(p);
    return `<li><a href="${paperPath(p)}"><strong>${escapeHtml(p.title)}</strong></a> (${p.lang === 'en' ? 'English' : 'Indonesia'} · ${escapeHtml(info.itemsLabel)}${info.score ? ` · ${escapeHtml(info.score)}` : ''})</li>`;
  }).join('\n');
  const englishPapersList = PUBLISHED_PAPERS.filter((p) => p.lang === 'en').map((p) => `<li><a href="${paperPath(p)}"><strong>${escapeHtml(p.title)}</strong></a> (Kelas ${p.grade})</li>`).join('\n');

  const body = `
    <h1>Matematika &amp; Sains — ${escapeHtml(ORGANIZATION.name)}</h1>
    <p>${escapeHtml(HOME_META.description)}</p>
    <p><a href="/paket-soal">Paket Soal</a> · <a href="/olimpiade">Olimpiade &amp; Kompetisi</a> · <a href="/tentang#prestasi">Prestasi Siswa</a> · <a href="/daftar-isi">Daftar Isi</a> · <a href="/rumus">Kumpulan Rumus</a> · <a href="/tka">Latihan TKA</a> · <a href="/tentang">Tentang</a></p>
    <section><h2>1. Materi Sekolah — Matematika &amp; Sains</h2>
      <h3>Matematika (Kelas 4–12)</h3><ul>${gradeList}</ul>
      ${ipaSchoolList ? `<h3>IPA (SD &amp; SMP, Kelas 4–9)</h3><ul>${ipaSchoolList}</ul>` : ''}
      ${fisikaSmaList ? `<h3>Fisika (SMA, Kelas 10–12)</h3><ul>${fisikaSmaList}</ul>` : ''}
      ${kimiaSmaList ? `<h3>Kimia (SMA, Kelas 10–12)</h3><ul>${kimiaSmaList}</ul>` : ''}
      ${biologiSmaList ? `<h3>Biologi (SMA, Kelas 10–12)</h3><ul>${biologiSmaList}</ul>` : ''}
      <ul><li><a href="/paket-soal/kimia">Paket Soal Kimia SMA</a></li><li><a href="/paket-soal/biologi">Paket Soal Biologi SMA</a></li></ul>
    </section>
    <section><h2>2. Olimpiade &amp; Kompetisi</h2>
      <ul>
        <li><a href="/olimpiade"><strong>Pusat Olimpiade: OSN, SASMO, AMC/AIME, HKIMO, TIMO, SIMOC, SMO, IKMC, KSM, KMNR</strong></a></li>
        <li><a href="/olimpiade/osn">Pusat OSN / OSK / OSN-P (9 Bidang Sains &amp; Matematika)</a> · <a href="/olimpiade/amc">AMC 8/10/12 &amp; AIME</a> · <a href="/olimpiade/sasmo">SASMO</a></li>
        <li><a href="/paket-soal/olimpiade-mat">Olimpiade Matematika</a> · <a href="/paket-soal/olimpiade-sains">Olimpiade Sains (OSN IPA)</a> · <a href="/paket-soal/olimpiade-fis">OSN Fisika</a> · <a href="/paket-soal/olimpiade-kim">OSN Kimia</a> · <a href="/paket-soal/olimpiade-bio">OSN Biologi</a> · <a href="/paket-soal/olimpiade-inf">OSN Informatika</a> · <a href="/paket-soal/olimpiade-astro">OSN Astronomi</a> · <a href="/paket-soal/olimpiade-kebumian">OSN Kebumian</a> · <a href="/paket-soal/olimpiade-eko">OSN Ekonomi</a></li>
        <li><a href="/paket-soal/english">International &amp; English Practice Papers (EN)</a> · <a href="/tentang#prestasi">Arsip Prestasi Siswa</a></li>
      </ul>
      <ul>${amcList}</ul>
    </section>
    <section><h2>3. Jalur Internasional / Bilingual (EN)</h2>
      ${englishPapersList ? `<ul>${englishPapersList}</ul>` : '<p><a href="/paket-soal">Lihat Paket Soal Bahasa Inggris (Cambridge / IGCSE)</a></p>'}
    </section>
    <section><h2>4. Paket Soal Interaktif, TKA &amp; Referensi Cepat</h2>
      <ul>
        <li><a href="/paket-soal">Semua Paket Soal Terstruktur (${PUBLISHED_PAPERS.length} paket)</a></li>
        <li><a href="/tka">Latihan TKA Matematika, IPA &amp; Fisika</a></li>
        <li><a href="/rumus">Kumpulan Rumus Matematika, IPA, Fisika, Kimia &amp; Biologi</a></li>
        <li><a href="/daftar-isi">Daftar Isi Topik Lintas Kelas</a></li>
      </ul>
      ${papersList ? `<ul>${papersList}</ul>` : ''}
    </section>`;
  const ld = [
    ORGANIZATION_LD,
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      alternateName: ORGANIZATION.alternateName,
      url: SITE_URL,
      inLanguage: 'id',
      description: HOME_META.description,
      license: ORGANIZATION.licenseUrl,
      publisher: { '@type': 'EducationalOrganization', name: ORGANIZATION.name, url: SITE_URL },
      creator: PERSON_LD,
      author: PERSON_LD,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/paket-soal?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    }
  ];
  writePage('/', renderPage({ meta: HOME_META, body, jsonLd: ld }));
  addToSitemap('/', '1.0', lastmodFor('src/components/HomeHubPage.jsx', 'src/data/papers/index.js'));
}

// ---------------------------------------------------------------------------
// Halaman Informasi Bimbel (/tentang + prestasi, /program, /pendiri, /kontak)
// ---------------------------------------------------------------------------
{
  const body = `
    ${breadcrumbHtml([['Beranda', '/'], ['Tentang', ABOUT_META.path]])}
    <h1>${escapeHtml(ABOUT.title)}</h1>
    <p><strong>${escapeHtml(ABOUT.intro)}</strong></p>
    ${ABOUT.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n')}
    <h2 id="tim">Pendiri &amp; Tim</h2>
    <ul>
      <li>Pendiri Bimbel: <a href="/pendiri">${escapeHtml(FOUNDER.name)} (${escapeHtml(FOUNDER.formalName)})</a> — ${escapeHtml(FOUNDER.role)}.</li>
      <li>Lead Developer &amp; Penyusun Portal: ${escapeHtml(AUTHOR.name)} — ${escapeHtml(AUTHOR.jobTitle)} (${AUTHOR.instagramUrl ? `<a href="${escapeHtml(AUTHOR.instagramUrl)}">${escapeHtml(AUTHOR.instagramHandle)}</a> · ` : ''}${AUTHOR.githubUrl ? `<a href="${escapeHtml(AUTHOR.githubUrl)}">GitHub</a>` : ''}${AUTHOR.whatsappUrl ? ` · <a href="${escapeHtml(AUTHOR.whatsappUrl)}">WhatsApp ${escapeHtml(AUTHOR.whatsappDisplay)}</a>` : ''})</li>
      <li>Lokasi &amp; Kontak: ${escapeHtml(ORGANIZATION.fullAddress)} · WhatsApp ${escapeHtml(ORGANIZATION.whatsappDisplay)}</li>
    </ul>
    ${(AUTHOR.bioHighlights || []).length ? `<h3>Tentang Lead Developer Portal (${escapeHtml(AUTHOR.name)})</h3><ul>${AUTHOR.bioHighlights.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>` : ''}
    <h2 id="prestasi">Prestasi Siswa &amp; Alumni</h2>
    <ul>${PRESTASI_DATA.map((p) => {
      const source = !p.sourceUrl ? '' : isPublicInstagramUrl(p.sourceUrl)
        ? ` (<a href="${escapeHtml(p.sourceUrl)}">${escapeHtml(p.sourceLabel)}</a>)`
        : ` (Dokumentasi: @${escapeHtml(parseInstagramPost(p.sourceUrl)?.account || 'instagram')}, akun Instagram privat)`;
      return `
      <li>
        <strong>${escapeHtml(p.year)} — ${escapeHtml(p.award)}</strong>: ${escapeHtml(p.studentName)}, ${escapeHtml(p.school)} — ${escapeHtml(p.competition)}.
        ${p.notes ? escapeHtml(p.notes) : ''}${source}
      </li>`;
    }).join('\n')}
    </ul>
    <h2>Lisensi Terbuka</h2>
    <p>Seluruh materi berlisensi <a href="${escapeHtml(ORGANIZATION.licenseUrl)}">${escapeHtml(ORGANIZATION.licenseName)}</a> dengan atribusi kepada ${escapeHtml(ORGANIZATION.name)}.</p>
    <h2>Mulai Belajar</h2>
    <ul><li><a href="/">Materi per kelas (Matematika, IPA, Fisika, Kimia, Biologi)</a></li><li><a href="/daftar-isi">Daftar Isi per Topik</a></li><li><a href="/rumus">Kumpulan Rumus</a></li><li><a href="/tka">Latihan TKA</a></li><li><a href="/olimpiade">Olimpiade &amp; Kompetisi</a></li><li><a href="/paket-soal">Paket Soal Terstruktur</a></li></ul>`;
  const ld = [
    ORGANIZATION_LD,
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      url: `${SITE_URL}${ABOUT_META.path}`,
      name: ABOUT_META.title,
      mainEntity: { ...PERSON_LD, description: ABOUT.intro, worksFor: { '@type': 'EducationalOrganization', name: ORGANIZATION.name, url: SITE_URL } }
    },
    breadcrumbLd([['Beranda', '/'], ['Tentang', ABOUT_META.path]])
  ];
  writePage(ABOUT_META.path, renderPage({ meta: ABOUT_META, body, jsonLd: ld }));
  addToSitemap(ABOUT_META.path, '0.8');
}

{
  const body = `
    ${breadcrumbHtml([['Beranda', '/'], ['Program Bimbel', PROGRAM_META.path]])}
    <h1>Program Bimbingan Belajar ${escapeHtml(ORGANIZATION.name)}</h1>
    <p>${escapeHtml(PROGRAM_META.description)}</p>
    ${PROGRAMS.map((prog) => `
      <section>
        <h2>${escapeHtml(prog.title)}</h2>
        <p class="seo-subtitle">${escapeHtml(prog.audience)}</p>
        <p>${escapeHtml(prog.summary)}</p>
        <ul>${prog.points.map((pt) => `<li>${escapeHtml(pt)}</li>`).join('')}</ul>
      </section>`).join('\n')}
    <section>
      <h2>Pertanyaan Umum (FAQ)</h2>
      ${FAQS.map((f) => `<article><h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p></article>`).join('\n')}
    </section>
    <p><a href="${escapeHtml(ORGANIZATION.whatsappUrl)}">Konsultasi &amp; Daftar via WhatsApp (${escapeHtml(ORGANIZATION.whatsappDisplay)})</a></p>`;
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };
  writePage(PROGRAM_META.path, renderPage({
    meta: PROGRAM_META,
    body,
    jsonLd: [ORGANIZATION_LD, faqLd, breadcrumbLd([['Beranda', '/'], ['Program Bimbel', PROGRAM_META.path]])]
  }));
  addToSitemap(PROGRAM_META.path, '0.8');
}

{
  const body = `
    ${breadcrumbHtml([['Beranda', '/'], ['Pendiri', FOUNDER_META.path]])}
    <h1>${escapeHtml(FOUNDER.name)} (${escapeHtml(FOUNDER.formalName)}) — ${escapeHtml(FOUNDER.role)}</h1>
    ${FOUNDER.photo ? `<img src="${escapeHtml(FOUNDER.photo)}" alt="Foto ${escapeHtml(FOUNDER.name)}" width="112" height="112">` : ''}
    <ul>${FOUNDER.bioHighlights.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>
    <h2>Rekam Jejak Terverifikasi</h2>
    <ul>${FOUNDER.credentials.map((c) => `<li><strong>${escapeHtml(c.year)} — ${escapeHtml(c.title)}</strong>: ${escapeHtml(c.detail)} (<a href="${escapeHtml(c.sourceUrl)}">Sumber</a>)</li>`).join('')}</ul>
    <p>Instagram: <a href="${escapeHtml(FOUNDER.instagramUrl)}">${escapeHtml(FOUNDER.instagramHandle)}</a> · <a href="/tentang#prestasi">Prestasi Siswa Binaan</a></p>
    <h2>Tim Pengajar &amp; Lead Developer Portal Digital</h2>
    <p><strong>${escapeHtml(AUTHOR.name)}</strong> — ${escapeHtml(AUTHOR.jobTitle)}.</p>
    <ul>${(AUTHOR.bioHighlights || []).map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>
    <p>${AUTHOR.instagramUrl ? `Instagram: <a href="${escapeHtml(AUTHOR.instagramUrl)}">${escapeHtml(AUTHOR.instagramHandle)}</a> · ` : ''}${AUTHOR.githubUrl ? `<a href="${escapeHtml(AUTHOR.githubUrl)}">GitHub</a> · ` : ''}<a href="/tentang">Tentang Platform Duta e-dukasi</a></p>`;
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      url: `${SITE_URL}${FOUNDER_META.path}`,
      name: FOUNDER_META.title,
      mainEntity: FOUNDER_LD
    },
    breadcrumbLd([['Beranda', '/'], ['Pendiri', FOUNDER_META.path]])
  ];
  writePage(FOUNDER_META.path, renderPage({ meta: FOUNDER_META, body, jsonLd: ld }));
  addToSitemap(FOUNDER_META.path, '0.7');
}

// /prestasi kini bagian dari /tentang (#prestasi); Vercel mengalihkan alamat lama secara permanen.

{
  const body = `
    ${breadcrumbHtml([['Beranda', '/'], ['Kontak', CONTACT_META.path]])}
    <h1>Kontak &amp; Lokasi ${escapeHtml(ORGANIZATION.legalName)}</h1>
    <p><strong>Alamat:</strong> ${escapeHtml(ORGANIZATION.fullAddress)}</p>
    <p><strong>WhatsApp / Telepon:</strong> <a href="${escapeHtml(ORGANIZATION.whatsappUrl)}">${escapeHtml(ORGANIZATION.whatsappDisplay)}</a></p>
    <p><strong>Google Maps:</strong> <a href="${escapeHtml(ORGANIZATION.mapsUrl)}">${escapeHtml(ORGANIZATION.mapsUrl)}</a></p>
    <p><strong>Pendiri:</strong> <a href="/pendiri">${escapeHtml(FOUNDER.name)}</a> (<a href="${escapeHtml(FOUNDER.instagramUrl)}">${escapeHtml(FOUNDER.instagramHandle)}</a>)</p>`;
  writePage(CONTACT_META.path, renderPage({
    meta: CONTACT_META,
    body,
    jsonLd: [ORGANIZATION_LD, breadcrumbLd([['Beranda', '/'], ['Kontak', CONTACT_META.path]])]
  }));
  addToSitemap(CONTACT_META.path, '0.8');
}

// ---------------------------------------------------------------------------
// Paket Soal Terstruktur (/paket-soal, /paket-soal/english, /paket-soal/<mapel>, /paket-soal/<mapel>/<slug>)
// ---------------------------------------------------------------------------
function mdPacket(paper) {
  const url = `${SITE_URL}${paperPath(paper)}`;
  const info = formatPaperMeta(paper);
  const out = [
    `# [Paket Soal] ${paper.title}`,
    `Canonical URL: ${url}`,
    `Markdown URL: ${url}.md`,
    `Cite As: ${SITE_NAME} — ${paper.title} (${url})`,
    `Subject: ${PAPER_SUBJECT_META[paper.subject]?.label || paper.subject} | Competition: ${paper.competition || '-'} | Track: ${info.track} | Grade: ${paper.grade} | Language: ${paper.lang} | Items: ${info.itemsLabel}${info.score ? ` | Score: ${info.score}` : ''}`,
    `Source: ${paper.source?.org || ORGANIZATION.name} (${paper.source?.license || ORGANIZATION.licenseName})`,
    `License: ${ORGANIZATION.licenseName} (${ORGANIZATION.licenseUrl})`,
    '',
    paper.instructions,
    ''
  ];
  if (paper.constants?.length) {
    out.push('**Constants:** ' + paper.constants.map((c) => `$${c}$`).join(', '), '');
  }
  for (const q of paper.questions) {
    out.push(`## Question ${q.no}: ${q.title} [${q.marks} ${info.usesMarks ? 'Marks' : 'Poin'}]`, q.stem, '');
    for (const pt of q.parts) {
      out.push(
        `### (${pt.label}) [${pt.marks} ${info.usesMarks ? 'marks' : 'poin'}]`,
        pt.prompt,
        `**Answer:** ${pt.answer}`,
        `**Principle:** ${pt.principle}`,
        `**Solution:**\n${pt.solution}`,
        `**Rubric:** ${(pt.rubric || []).map((r) => `[${r.code}] ${r.text}`).join(' ')}`,
        ''
      );
    }
  }
  out.push('---', '');
  return out.join('\n');
}

{
  const renderPacketList = (papers) =>
    `<ul>${papers.map((p) => {
      const info = formatPaperMeta(p);
      return `<li><a href="${paperPath(p)}"><strong>${escapeHtml(p.title)}</strong></a> — ${escapeHtml(p.topic)} · Kelas ${p.grade} · ${escapeHtml(info.itemsLabel)}${info.score ? ` (${escapeHtml(info.score)})` : ''} · ${escapeHtml(info.lang)}</li>`;
    }).join('\n')}</ul>`;

  const hubFaqs = [
    {
      question: 'Apa itu Paket Soal Terstruktur Duta e-dukasi?',
      answer: 'Paket Soal Terstruktur adalah kumpulan soal pilihan ganda, isian, dan uraian bertahap lengkap dengan kunci jawaban, prinsip konsep utama, pembahasan langkah demi langkah, dan rubrik penilaian mandiri.'
    },
    {
      question: 'Apakah tersedia paket soal olimpiade dan soal berbahasa Inggris?',
      answer: 'Ya, tersedia paket OSN-K/OSN-P (9 bidang), AMC 8/10/12 & AIME, SASMO, SMO Singapore, HKIMO, TIMO, SIMOC, IKMC/Kangaroo, KSM, KMNR, UTBK/SNBT, Seri Pembinaan OSN, serta soal bergaya Cambridge/IGCSE 0580.'
    }
  ];

  const hubMeta = papersHubMeta('all');
  const hubCrumbs = [['Beranda', '/'], ['Paket Soal', '/paket-soal']];
  const hubBody = `
    ${breadcrumbHtml(hubCrumbs)}
    <h1>Paket Soal Terstruktur ${escapeHtml(ORGANIZATION.name)}</h1>
    <p>${escapeHtml(hubMeta.description)}</p>
    <p><a href="/paket-soal/english">International &amp; English Practice Papers (EN)</a> · <a href="/olimpiade">Pusat Olimpiade</a> · <a href="/datasets/paket-soal-index.json">Dataset Terbuka (JSON)</a> · <a href="/llms.txt">Indeks AI (llms.txt)</a></p>
    ${renderPacketList(PUBLISHED_PAPERS)}
    ${faqSectionHtml(hubFaqs)}`;
  writePage('/paket-soal', renderPage({
    meta: hubMeta,
    body: hubBody,
    jsonLd: [
      ORGANIZATION_LD,
      DATASET_LD,
      itemListLd('Paket Soal Terstruktur Duta e-dukasi', '/paket-soal', PUBLISHED_PAPERS.map((p) => ({ name: p.title, path: paperPath(p) }))),
      faqPageLd(hubFaqs),
      breadcrumbLd(hubCrumbs)
    ].filter(Boolean)
  }));
  addToSitemap('/paket-soal', '0.9', lastmodFor('src/data/papers/index.js'));

  // Dedicated English Hub (/paket-soal/english)
  const englishPapers = PUBLISHED_PAPERS.filter(englishPapersFilter);
  const enHubMeta = englishPapersHubMeta(englishPapers.length);
  const enCrumbs = [...hubCrumbs, ['English Papers', '/paket-soal/english']];
  const enBody = `
    ${breadcrumbHtml(enCrumbs)}
    <h1>International &amp; English Math and Science Practice Papers</h1>
    <p>${escapeHtml(enHubMeta.description)}</p>
    ${renderPacketList(englishPapers)}`;
  writePage('/paket-soal/english', renderPage({
    meta: enHubMeta,
    body: enBody,
    jsonLd: [
      itemListLd(enHubMeta.title.split(' | ')[0], '/paket-soal/english', englishPapers.map((p) => ({ name: p.title, path: paperPath(p) }))),
      breadcrumbLd(enCrumbs)
    ]
  }));
  addToSitemap('/paket-soal/english', '0.85', lastmodFor('src/data/papers/index.js'));

  for (const subjMeta of Object.values(PAPER_SUBJECT_META)) {
    const subjPapers = getPapersBySubject(subjMeta.id);
    const meta = papersHubMeta(subjMeta.id);
    const crumbs = [...hubCrumbs, [subjMeta.label, subjectHubPath(subjMeta.id)]];
    const body = `
      ${breadcrumbHtml(crumbs)}
      <h1>Paket Soal ${escapeHtml(subjMeta.label)} — ${escapeHtml(ORGANIZATION.name)}</h1>
      <p>${escapeHtml(meta.description)}</p>
      ${subjPapers.length ? renderPacketList(subjPapers) : `<p>Belum ada paket soal di kategori ${escapeHtml(subjMeta.label)}. <a href="/paket-soal">Lihat semua Paket Soal</a>.</p>`}`;
    writePage(meta.path, renderPage({
      meta,
      body,
      jsonLd: [
        itemListLd(`Paket Soal ${subjMeta.label}`, meta.path, subjPapers.map((p) => ({ name: p.title, path: paperPath(p) }))),
        breadcrumbLd(crumbs)
      ]
    }));
    if (subjPapers.length > 0) addToSitemap(meta.path, '0.8', lastmodFor('src/data/papers/index.js'));
  }

  const datasetIndexEntries = [];
  const datasetJsonlLines = [];
  let totalDatasetItems = 0;

  for (const paper of PUBLISHED_PAPERS) {
    const meta = paperDetailMeta(paper);
    const mdRelPath = `${meta.path}.md`;
    const info = formatPaperMeta(paper);
    const comp = competitionOfPaper(paper);
    const { prev, next, related } = getRelatedPapers(paper, PUBLISHED_PAPERS);
    const pLastmod = paperLastmod(paper);
    const subjLabel = PAPER_SUBJECT_META[paper.subject]?.label || paper.subject;
    const canonicalUrl = `${SITE_URL}${meta.path}`;
    const markdownUrl = `${SITE_URL}${mdRelPath}`;
    const citationString = `${SITE_NAME} — ${paper.title} (${canonicalUrl})`;

    // Write per-paper Markdown + LaTeX twin for AI systems, scrapers, and researchers
    const mdDest = path.join(DIST, `${meta.path.slice(1)}.md`);
    fs.mkdirSync(path.dirname(mdDest), { recursive: true });
    fs.writeFileSync(mdDest, mdPacket(paper));

    totalDatasetItems += info.items;
    datasetIndexEntries.push({
      id: paper.id,
      title: paper.title,
      url: canonicalUrl,
      markdownUrl,
      subject: paper.subject,
      subjectLabel: subjLabel,
      competition: paper.competition || null,
      track: paper.track,
      grade: paper.grade,
      lang: paper.lang,
      itemCount: info.items,
      topic: paper.topic,
      lastmod: pLastmod,
      citation: citationString
    });

    for (const q of paper.questions || []) {
      for (const pt of q.parts || []) {
        datasetJsonlLines.push(JSON.stringify({
          paperId: paper.id,
          paperTitle: paper.title,
          url: `${canonicalUrl}#soal-${q.no}`,
          markdownUrl,
          subject: paper.subject,
          competition: paper.competition || null,
          grade: paper.grade,
          lang: paper.lang,
          questionNo: q.no,
          questionTitle: q.title,
          partLabel: pt.label,
          marks: pt.marks,
          prompt: pt.prompt,
          answer: pt.answer,
          principle: pt.principle,
          solution: pt.solution,
          license: ORGANIZATION.licenseUrl,
          attribution: `${SITE_NAME} (${SITE_URL})`
        }));
      }
    }

    const crumbs = [['Beranda', '/'], ['Paket Soal', '/paket-soal'], [subjLabel, subjectHubPath(paper.subject)], [paper.title, meta.path]];
    const constsHtml = paper.constants?.length
      ? `<section class="paper-constants-box"><h2>${paper.lang === 'en' ? 'Given Constants' : 'Konstanta'}</h2><ul>${paper.constants.map((c) => `<li>${renderMath(c, false)}</li>`).join('')}</ul></section>`
      : '';
    const qsHtml = paper.questions.map((q) => {
      const figsHtml = (q.figures || []).map((f) => `<figure><img src="${escapeHtml(f.src)}" alt="${escapeHtml(f.alt)}" /><figcaption>${escapeHtml(f.caption)}</figcaption></figure>`).join('\n');
      const partsHtml = q.parts.map((pt) => {
        const ptFigsHtml = (pt.figures || []).map((f) => `<figure><img src="${escapeHtml(f.src)}" alt="${escapeHtml(f.alt)}" /><figcaption>${escapeHtml(f.caption)}</figcaption></figure>`).join('\n');
        const rubHtml = (pt.rubric || []).map((r) => `<li><strong>[${escapeHtml(r.code)}]</strong> ${rich(r.text)}</li>`).join('');
        return `
          <div class="paper-part">
            <p><strong>(${escapeHtml(pt.label)})</strong> ${rich(pt.prompt)} <span>[${pt.marks}]</span></p>
            ${ptFigsHtml}
            <details class="seo-solution" open>
              <summary>${paper.lang === 'en' ? 'Answer Key, Solution & Marking Rubric' : 'Kunci Jawaban, Pembahasan & Rubrik'}</summary>
              <p><strong>${paper.lang === 'en' ? 'Answer:' : 'Kunci Jawaban:'}</strong> ${rich(pt.answer)}</p>
              <p><strong>${paper.lang === 'en' ? 'Principle:' : 'Prinsip Utama:'}</strong> ${rich(pt.principle)}</p>
              <div>${rich(pt.solution)}</div>
              <ul>${rubHtml}</ul>
            </details>
          </div>`;
      }).join('\n');
      return `<section id="soal-${q.no}"><h2>${q.no}. ${escapeHtml(q.title)} [${q.marks} ${info.usesMarks ? 'Marks' : 'Poin'}]</h2><p>${rich(q.stem)}</p>${figsHtml}${partsHtml}</section>`;
    }).join('\n');

    const relatedLinks = [];
    if (comp) relatedLinks.push(`<li><a href="${comp.path}">Pusat Kompetisi ${escapeHtml(comp.label)}</a></li>`);
    if (prev) relatedLinks.push(`<li>← Sebelumnya: <a href="${paperPath(prev)}">${escapeHtml(prev.title)}</a></li>`);
    if (next) relatedLinks.push(`<li>Berikutnya →: <a href="${paperPath(next)}">${escapeHtml(next.title)}</a></li>`);
    for (const rp of related) relatedLinks.push(`<li><a href="${paperPath(rp)}">${escapeHtml(rp.title)}</a></li>`);
    for (const chId of paper.relatedChapterIds || []) {
      const m = String(chId).match(/^(?:sd|smp|sma|ipa|kimia|biologi)(\d+)-/);
      if (m) {
        const chTitle = CHAPTER_TITLE_MAP.get(chId) || chId;
        relatedLinks.push(`<li>Materi Buku Saku: <a href="${chapterPath(Number(m[1]), chId)}">${escapeHtml(chTitle)}</a></li>`);
      }
    }
    const relatedBlock = relatedLinks.length
      ? `<aside class="seo-related"><h2>Paket &amp; Kompetisi Terkait</h2><ul>${relatedLinks.join('')}</ul></aside>`
      : '';

    const citationBox = paper.lang === 'en'
      ? `<section class="seo-citation"><h2>How to Cite &amp; AI / Research Format</h2><p><strong>Cite as:</strong> ${escapeHtml(citationString)} — licensed under <a href="${escapeHtml(ORGANIZATION.licenseUrl)}">${escapeHtml(ORGANIZATION.licenseName)}</a>.</p><p><a href="${escapeHtml(mdRelPath)}">Versi Markdown + LaTeX untuk AI &amp; Riset (${escapeHtml(mdRelPath)})</a> · <a href="/datasets/paket-soal-index.json">Open Dataset Index (JSON)</a></p></section>`
      : `<section class="seo-citation"><h2>Sitasi &amp; Format Riset / AI</h2><p><strong>Sumber kutipan resmi:</strong> ${escapeHtml(citationString)} — berlisensi terbuka <a href="${escapeHtml(ORGANIZATION.licenseUrl)}">${escapeHtml(ORGANIZATION.licenseName)}</a>.</p><p><a href="${escapeHtml(mdRelPath)}">Versi Markdown + LaTeX untuk AI &amp; Riset (${escapeHtml(mdRelPath)})</a> · <a href="/datasets/paket-soal-index.json">Dataset Terbuka (JSON)</a></p></section>`;

    const paperFaqs = paper.lang === 'en'
      ? [
          {
            question: `How many questions are included in ${paper.title}?`,
            answer: `${paper.title} contains ${info.items} structured problems covering ${paper.topic} for Grade ${paper.grade}.`
          },
          {
            question: `Are answers, step-by-step solutions, and marking rubrics included for free?`,
            answer: `Yes. Every question in ${paper.title} includes the final answer key, core mathematical or scientific principle, step-by-step solution, and grading rubric free on ${SITE_NAME}, plus a printable worksheet QR view.`
          }
        ]
      : [
          {
            question: `Berapa jumlah soal dan materi pada ${paper.title}?`,
            answer: `${paper.title} berisi ${info.items} butir soal terstruktur untuk Kelas ${paper.grade} dengan cakupan: ${paper.topic}.`
          },
          {
            question: `Apakah kunci jawaban, pembahasan bertahap, dan rubrik penilaiannya gratis?`,
            answer: `Ya. Seluruh soal dilengkapi kunci jawaban, prinsip konsep utama, pembahasan langkah demi langkah, rubrik penilaian, serta versi cetak LKPD ber-QR secara gratis di ${SITE_NAME}.`
          }
        ];

    const body = `
      ${breadcrumbHtml(crumbs)}
      <h1>${escapeHtml(paper.title)}</h1>
      <p class="seo-subtitle">${escapeHtml(info.tag)} · ${escapeHtml(info.itemsLabel)}${info.score ? ` · ${escapeHtml(info.score)}` : ''} · ${escapeHtml(info.lang)} · Sumber: ${escapeHtml(paper.source?.org || ORGANIZATION.name)} (${escapeHtml(paper.source?.license || ORGANIZATION.licenseName)})</p>
      <p>${rich(paper.instructions)}</p>
      ${constsHtml}
      ${qsHtml}
      ${relatedBlock}
      ${citationBox}
      ${faqSectionHtml(paperFaqs, paper.lang === 'en' ? 'Frequently Asked Questions' : 'Pertanyaan Umum')}
      <p><strong>Lisensi:</strong> ${escapeHtml(paper.source?.license || ORGANIZATION.licenseName)} — <a href="${escapeHtml(ORGANIZATION.licenseUrl)}">${escapeHtml(ORGANIZATION.name)}</a></p>`;

    const packetQuestionsForLd = paper.questions.flatMap((q) =>
      q.parts.map((pt) => ({
        question: `${q.title} — ${q.stem} (${pt.label}) ${pt.prompt}`,
        answer: pt.answer,
        explanation: `${pt.principle} ${pt.solution}`
      }))
    );
    const ld = [
      learningResourceLd({
        meta,
        educationalLevel: `Kelas ${paper.grade} (${info.track})`,
        subject: subjLabel,
        inLanguage: paper.lang || 'id',
        dateModified: pLastmod,
        keywords: [paper.competition, subjLabel, paper.topic, `Kelas ${paper.grade}`].filter(Boolean)
      }),
      quizLd({
        meta,
        questions: packetQuestionsForLd,
        educationalLevel: `Kelas ${paper.grade}`,
        subject: subjLabel,
        inLanguage: paper.lang || 'id',
        dateModified: pLastmod
      }),
      faqPageLd(paperFaqs),
      breadcrumbLd(crumbs)
    ].filter(Boolean);

    writePage(meta.path, renderPage({ meta: { ...meta, markdownPath: mdRelPath }, body, jsonLd: ld }));
    addToSitemap(meta.path, '0.8', pLastmod);
  }

  fs.mkdirSync(path.join(DIST, 'datasets'), { recursive: true });
  fs.writeFileSync(
    path.join(DIST, 'datasets/paket-soal-index.json'),
    JSON.stringify(
      {
        name: `${SITE_NAME} Open Practice & Olympiad Index`,
        publisher: ORGANIZATION.legalName,
        siteUrl: SITE_URL,
        license: ORGANIZATION.licenseUrl,
        generatedAt: TODAY,
        totalPapers: datasetIndexEntries.length,
        totalItems: totalDatasetItems,
        papers: datasetIndexEntries
      },
      null,
      2
    )
  );
  fs.writeFileSync(path.join(DIST, 'datasets/paket-soal-corpus.jsonl'), `${datasetJsonlLines.join('\n')}\n`);
}

function writeRedirectStub(oldPath, targetPath, label) {
  const fullTarget = `${SITE_URL}${targetPath}`;
  const html = shell
    .replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(label)} | ${escapeHtml(SITE_NAME)}</title>`)
    .replace(/<link rel="canonical"[^>]*>/i, '')
    .replace('</head>', `    <link rel="canonical" href="${fullTarget}" />\n    <meta http-equiv="refresh" content="0;url=${targetPath}" />\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root"><p>Materi tersedia di <a href="${targetPath}">${fullTarget}</a>.</p></div>`);
  writePage(oldPath, html);
}

// ---------------------------------------------------------------------------
// Kurikulum: Matematika, IPA (SD–SMP) & Fisika (SMA)
// ---------------------------------------------------------------------------
function gradeSourceFile(subject, grade) {
  if (subject === 'matematika') return `src/data/matematika/grade${grade}.js`;
  if (subject === 'ipa') return grade >= 10 ? `src/data/fisika/grade${grade}.js` : `src/data/ipa/grade${grade}.js`;
  return `src/data/${subject}/grade${grade}.js`;
}

function renderCurriculum(subject, grades) {
  for (const g of grades) {
    const name = subjectDisplayName(subject, g.grade);
    const lvl = levelLabel(g.grade);
    const phase = g.phase || PHASE[g.grade] || '';
    const crumbsBase = [['Beranda', '/'], [`${name} Kelas ${g.grade}`, gradePath(g.grade, subject)]];
    const gLastmod = lastmodFor(gradeSourceFile(subject, g.grade));

    const gMeta = gradeMeta(g.grade, subject);
    const gradeBody = `
      ${breadcrumbHtml(crumbsBase)}
      <h1>${name} Kelas ${g.grade} ${lvl}</h1>
      <p>${g.chapters.length} bab · ${g.chapters.reduce((n, c) => n + (c.questions?.length || 0), 0)} latihan soal dengan pembahasan.</p>
      <h2>Daftar Isi</h2>
      ${gradeToc(g.chapters, (c) => chapterPath(g.grade, c.id))}`;
    writePage(gMeta.path, renderPage({
      meta: gMeta,
      body: gradeBody,
      jsonLd: [
        itemListLd(`${name} Kelas ${g.grade} ${lvl}`, gMeta.path, g.chapters.map((c) => ({ name: c.title, path: chapterPath(g.grade, c.id) }))),
        breadcrumbLd(crumbsBase)
      ]
    }));
    addToSitemap(gMeta.path, '0.8', gLastmod);
    if (subject === 'ipa' && g.grade >= 10) {
      writeRedirectStub(`/ipa/kelas-${g.grade}`, gMeta.path, gMeta.title.split(' | ')[0]);
    }

    for (const ch of g.chapters) {
      const meta = chapterMeta(g.grade, ch);
      const crumbs = [...crumbsBase, [ch.title, meta.path]];
      const body = `
        ${breadcrumbHtml(crumbs)}
        <h1>${escapeHtml(ch.title)}</h1>
        <p class="seo-subtitle">${name} Kelas ${g.grade} ${lvl}${ch.trackLabel ? ` · ${escapeHtml(ch.trackLabel)}` : ''}</p>
        ${chapterBody(ch)}
        <section id="latihan-soal"><h2>Latihan Soal (${ch.questions?.length || 0} soal)</h2>
          <p>Kerjakan latihan interaktif di halaman ini untuk melihat nilai dan pembahasan setiap soal.</p>
          ${questionList(ch.questions || [])}
        </section>
        ${relatedHtml(ch.id)}
        ${siblingLinks(g.chapters, ch.id, (c) => chapterPath(g.grade, c.id))}`;
      const qLd = quizLd({ meta, questions: ch.questions || [], educationalLevel: `Kelas ${g.grade} ${lvl} (${phase})`, subject: name, dateModified: gLastmod });
      const ld = [
        learningResourceLd({ meta, educationalLevel: `Kelas ${g.grade} ${lvl} (${phase})`, subject: name, dateModified: gLastmod }),
        ...(qLd ? [qLd] : []),
        breadcrumbLd(crumbs)
      ];
      writePage(meta.path, renderPage({ meta, body, jsonLd: ld }));
      addToSitemap(meta.path, '0.7', gLastmod);
      if (subject === 'ipa' && g.grade >= 10) {
        writeRedirectStub(`/ipa/kelas-${g.grade}/${chapterSlug(ch.id)}`, meta.path, ch.title);
      }
    }
  }
}

renderCurriculum('matematika', GRADES);
renderCurriculum('ipa', IPA);
renderCurriculum('kimia', KIMIA);
renderCurriculum('biologi', BIOLOGI);

// ---------------------------------------------------------------------------
// Pusat Olimpiade (/olimpiade) & Halaman Khusus Kompetisi (/olimpiade/:id)
// ---------------------------------------------------------------------------
{
  const crumbs = [['Beranda', '/'], ['Olimpiade', OLIMPIADE_HUB_META.path]];
  const olimpFaqs = [
    {
      question: 'Kompetisi olimpiade apa saja yang tersedia di Duta e-dukasi?',
      answer: 'Tersedia latihan soal dan pembahasan OSN/OSK/OSN-P (9 bidang: Matematika, IPA, Fisika, Kimia, Biologi, Informatika, Astronomi, Kebumian, dan Ekonomi), AMC 8/10/12 & AIME (termasuk 36 bab modul konsep), SASMO, SMO Singapore, HKIMO, TIMO, SIMOC, IKMC/Kangaroo, KSM, KMNR, OMVN, UTBK/SNBT, serta Seri Pembinaan OSN.'
    },
    {
      question: 'Apakah seluruh pembahasan soal olimpiade dapat diakses gratis?',
      answer: 'Ya, seluruh paket soal dan pembahasan di halaman Olimpiade Duta e-dukasi terbuka gratis tanpa perlu login dan berlisensi CC BY 4.0.'
    }
  ];

  const blocks = OLYMPIAD_COMPETITIONS.map((c) => {
    const papers = PUBLISHED_PAPERS.filter((p) => c.competitions.includes(p.competition));
    const items = papers.map((p) => {
      const info = formatPaperMeta(p);
      return `<li><a href="${paperPath(p)}"><strong>${escapeHtml(p.title)}</strong></a> — ${escapeHtml(info.tag)}${info.tag.endsWith(levelNameOfGrade(p.grade)) ? '' : ` · ${escapeHtml(levelNameOfGrade(p.grade))}`} · ${escapeHtml(info.itemsLabel)} · ${escapeHtml(info.track)} · ${escapeHtml(info.lang)}</li>`;
    }).join('\n');
    if (c.amc) {
      const levels = AMC_LEVELS_METADATA.map((lvl) => `<li><a href="${amcLevelPath(lvl.level)}"><strong>${escapeHtml(lvl.title)}</strong></a> (${escapeHtml(lvl.targetGrades)}) — ${ALL_AMC_CHAPTERS_INDEX.filter((ch) => ch.level === lvl.level).length} bab interaktif</li>`).join('');
      const papersHtml = items ? `<ul>${items}</ul>` : '';
      return `<section id="kompetisi-${c.id}"><h2><a href="${c.path}">${escapeHtml(c.label)}</a></h2><p>${escapeHtml(c.blurb)}</p><ul>${levels}</ul>${papersHtml}</section>`;
    }
    if (!papers.length) return '';
    return `<section id="kompetisi-${c.id}"><h2><a href="${c.path}">${escapeHtml(c.label)}</a></h2><p>${escapeHtml(c.blurb)}</p><ul>${items}</ul></section>`;
  }).filter(Boolean).join('\n');

  const body = `
    ${breadcrumbHtml(crumbs)}
    <h1>Olimpiade &amp; Kompetisi</h1>
    <p>${escapeHtml(OLIMPIADE_HUB_META.description)}</p>
    ${blocks}
    ${faqSectionHtml(olimpFaqs)}
    <p><a href="/paket-soal">Semua paket soal</a> · <a href="/tentang#prestasi">Arsip prestasi siswa</a></p>`;
  const olimpListItems = OLYMPIAD_COMPETITIONS.map((c) => ({ name: c.label, path: c.path }));
  writePage(OLIMPIADE_HUB_META.path, renderPage({
    meta: OLIMPIADE_HUB_META,
    body,
    jsonLd: [
      ORGANIZATION_LD,
      DATASET_LD,
      itemListLd('Pusat Olimpiade & Kompetisi', OLIMPIADE_HUB_META.path, olimpListItems),
      faqPageLd(olimpFaqs),
      breadcrumbLd(crumbs)
    ].filter(Boolean)
  }));
  addToSitemap(OLIMPIADE_HUB_META.path, '0.9', lastmodFor('src/components/OlimpiadeHubPage.jsx', 'src/data/papers/index.js'));

  // Prerender halaman khusus per kompetisi: /olimpiade/:id
  for (const c of OLYMPIAD_COMPETITIONS) {
    const papers = PUBLISHED_PAPERS.filter((p) => c.competitions.includes(p.competition));
    if (!c.amc && papers.length === 0) continue;
    const cMeta = olympiadCompetitionMeta(c, papers.length);
    const cCrumbs = [...crumbs, [c.label, c.path]];
    const itemsHtml = papers.map((p) => {
      const info = formatPaperMeta(p);
      return `<li><a href="${paperPath(p)}"><strong>${escapeHtml(p.title)}</strong></a> — ${escapeHtml(info.tag)} · ${escapeHtml(info.itemsLabel)} · ${escapeHtml(info.lang)}</li>`;
    }).join('\n');
    const amcHtml = c.amc
      ? `<h2>Modul Konsep AMC 8 / 10 / 12</h2><ul>${AMC_LEVELS_METADATA.map((lvl) => `<li><a href="${amcLevelPath(lvl.level)}"><strong>${escapeHtml(lvl.title)}</strong></a> (${escapeHtml(lvl.targetGrades)}) — ${ALL_AMC_CHAPTERS_INDEX.filter((ch) => ch.level === lvl.level).length} bab interaktif</li>`).join('')}</ul>`
      : '';
    const siblingNav = `<nav class="seo-chapters"><h2>Kompetisi Olimpiade Lainnya</h2><ul>${OLYMPIAD_COMPETITIONS.filter((x) => x.id !== c.id).map((x) => `<li><a href="${x.path}">${escapeHtml(x.label)}</a></li>`).join('')}</ul></nav>`;
    const cBody = `
      ${breadcrumbHtml(cCrumbs)}
      <h1>${escapeHtml(c.seoTitle || c.label)}</h1>
      <p>${escapeHtml(c.blurb)}</p>
      ${amcHtml}
      ${papers.length ? `<section><h2>Paket Soal ${escapeHtml(c.label)} (${papers.length})</h2><ul>${itemsHtml}</ul></section>` : ''}
      ${faqSectionHtml(c.faqs || [])}
      ${siblingNav}`;
    const listEntries = [
      ...(c.amc ? AMC_LEVELS_METADATA.map((lvl) => ({ name: lvl.title, path: amcLevelPath(lvl.level) })) : []),
      ...papers.map((p) => ({ name: p.title, path: paperPath(p) }))
    ];
    writePage(c.path, renderPage({
      meta: cMeta,
      body: cBody,
      jsonLd: [
        itemListLd(c.label, c.path, listEntries),
        faqPageLd(c.faqs || []),
        breadcrumbLd(cCrumbs)
      ].filter(Boolean)
    }));
    addToSitemap(c.path, '0.85', lastmodFor('src/data/papers/index.js'));
  }
}

// ---------------------------------------------------------------------------
// Olimpiade AMC
// ---------------------------------------------------------------------------
for (const d of AMC) {
  const levelInfo = AMC_LEVELS_METADATA.find((m) => m.level === d.level) || {};
  const crumbsBase = [['Beranda', '/'], ['Olimpiade', OLIMPIADE_HUB_META.path], [`Olimpiade AMC ${d.level}`, amcLevelPath(d.level)]];
  const lMeta = amcLevelMeta(d.level);
  const levelBody = `
    ${breadcrumbHtml(crumbsBase)}
    <h1>Persiapan Olimpiade AMC ${d.level}</h1>
    <p>${escapeHtml(levelInfo.subtitle || '')}${levelInfo.targetGrades ? ` · ${escapeHtml(levelInfo.targetGrades)}` : ''}</p>
    <ul>${d.chapters.map((c) => `<li><a href="${amcChapterPath(d.level, c.id)}">${escapeHtml(c.title)}</a>${c.domain ? ` (${escapeHtml(c.domain)})` : ''}</li>`).join('')}</ul>`;
  writePage(lMeta.path, renderPage({ meta: lMeta, body: levelBody, jsonLd: [breadcrumbLd(crumbsBase)] }));
  addToSitemap(lMeta.path, '0.6');

  for (const ch of d.chapters) {
    const meta = amcChapterMeta(d.level, ch);
    const crumbs = [...crumbsBase, [ch.title, meta.path]];
    const body = `
      ${breadcrumbHtml(crumbs)}
      <h1>${escapeHtml(ch.title)}</h1>
      <p class="seo-subtitle">Olimpiade AMC ${d.level}${ch.domain ? ` · ${escapeHtml(ch.domain)}` : ''}</p>
      ${chapterBody(ch)}
      <section id="latihan-soal"><h2>Soal Latihan Kompetisi (${ch.questions?.length || 0} soal)</h2>${questionList(ch.questions || [])}</section>
      ${siblingLinks(d.chapters, ch.id, (c) => amcChapterPath(d.level, c.id))}`;
    const qLd = quizLd({ meta, questions: ch.questions || [], educationalLevel: `Olimpiade AMC ${d.level}`, subject: 'Matematika Olimpiade' });
    const ld = [
      learningResourceLd({ meta, educationalLevel: `Olimpiade AMC ${d.level}` }),
      ...(qLd ? [qLd] : []),
      breadcrumbLd(crumbs)
    ];
    writePage(meta.path, renderPage({ meta, body, jsonLd: ld }));
    addToSitemap(meta.path, '0.5');
  }
}

// ---------------------------------------------------------------------------
// Daftar isi per topik
// ---------------------------------------------------------------------------
{
  const strip = (t) => escapeHtml(String(t).replace(/^Bab \d+:\s*/, ''));
  const groups = TOPIC_GROUPS.map((group) => `<section><h2>${group.name}</h2>${group.topics.map((topic) => `
    <div id="topik-${topic.id}"><h3>${escapeHtml(topic.name)}</h3><p>${escapeHtml(topic.description)}</p>
    <ul>${topicChapters(topic).map((c) => `<li><a href="${c.path}">${strip(c.title)}</a> — ${escapeHtml(c.label)}</li>`).join('')}</ul></div>`).join('')}</section>`).join('\n');
  const amc = `<section><h2>Olimpiade AMC</h2>${AMC_LEVELS_METADATA.map((lvl) => `<h3>${escapeHtml(lvl.title)} (${escapeHtml(lvl.targetGrades)})</h3><ul>${ALL_AMC_CHAPTERS_INDEX
    .filter((c) => c.level === lvl.level).map((c) => `<li><a href="${amcChapterPath(lvl.level, c.id)}">${strip(c.title)}</a> — ${escapeHtml(c.domain)}</li>`).join('')}</ul>`).join('')}</section>`;
  const crumbs = [['Beranda', '/'], ['Daftar Isi', TOPIC_INDEX_META.path]];
  const body = `${breadcrumbHtml(crumbs)}<h1>Daftar Isi Materi</h1>
    <p>Semua bab Matematika (Kelas 4–12), IPA (Kelas 4–9), Fisika, Kimia, dan Biologi (Kelas 10–12), serta Olimpiade AMC, dikelompokkan per topik.</p>
    <p><a href="/paket-soal">Paket Soal Terstruktur</a> · <a href="/olimpiade">Olimpiade &amp; Kompetisi</a> · <a href="/rumus">Kumpulan Rumus Matematika, IPA, Fisika, Kimia &amp; Biologi</a> · <a href="/tka">Latihan TKA SD, SMP &amp; SMA</a></p>${groups}${amc}`;
  writePage(TOPIC_INDEX_META.path, renderPage({ meta: TOPIC_INDEX_META, body, jsonLd: [breadcrumbLd(crumbs)] }));
  addToSitemap(TOPIC_INDEX_META.path, '0.9');
}

// ---------------------------------------------------------------------------
// Ensiklopedia Rumus (/rumus)
// ---------------------------------------------------------------------------
{
  const crumbs = [['Beranda', '/'], ['Kumpulan Rumus', FORMULA_INDEX_META.path]];
  const renderFormulaGroup = (heading, items) => `
    <section>
      <h2>${escapeHtml(heading)}</h2>
      ${items.map(({ label, ch, path: chPath }) => `
        <article id="rumus-${ch.id}">
          <h3><a href="${chPath}">${escapeHtml(ch.title)}</a> <span class="topic-meta">(${escapeHtml(label)})</span></h3>
          <ul>${(ch.summary?.keyFormulas || []).map((f) => `<li><strong>${rich(f.label)}</strong>: ${renderMath(f.formula, false)}</li>`).join('')}</ul>
        </article>`).join('\n')}
    </section>`;

  const mathItems = GRADES.flatMap((g) =>
    g.chapters.filter((ch) => ch.summary?.keyFormulas?.length).map((ch) => ({
      label: `Matematika Kelas ${g.grade} ${levelLabel(g.grade)}`,
      ch,
      path: chapterPath(g.grade, ch.id)
    }))
  );
  const ipaItems = IPA.filter((g) => g.grade <= 9).flatMap((g) =>
    g.chapters.filter((ch) => ch.summary?.keyFormulas?.length).map((ch) => ({
      label: `IPA Kelas ${g.grade} ${levelLabel(g.grade)}`,
      ch,
      path: chapterPath(g.grade, ch.id)
    }))
  );
  const fisikaItems = IPA.filter((g) => g.grade >= 10).flatMap((g) =>
    g.chapters.filter((ch) => ch.summary?.keyFormulas?.length).map((ch) => ({
      label: `Fisika Kelas ${g.grade} ${levelLabel(g.grade)}`,
      ch,
      path: chapterPath(g.grade, ch.id)
    }))
  );
  const smaItems = (subjName, list) => list.flatMap((g) =>
    g.chapters.filter((ch) => ch.summary?.keyFormulas?.length).map((ch) => ({
      label: `${subjName} Kelas ${g.grade} ${levelLabel(g.grade)}`,
      ch,
      path: chapterPath(g.grade, ch.id)
    }))
  );
  const kimiaItems = smaItems('Kimia', KIMIA);
  const biologiItems = smaItems('Biologi', BIOLOGI);
  const amcItems = AMC.flatMap((d) =>
    d.chapters.filter((ch) => ch.summary?.keyFormulas?.length).map((ch) => ({
      label: `Olimpiade AMC ${d.level}`,
      ch,
      path: amcChapterPath(d.level, ch.id)
    }))
  );

  const body = `
    ${breadcrumbHtml(crumbs)}
    <h1>Kumpulan Rumus Matematika, IPA, Fisika, Kimia &amp; Biologi (Kelas 4–12)</h1>
    <p>${escapeHtml(FORMULA_INDEX_META.description)}</p>
    ${renderFormulaGroup('Matematika (Kelas 4–12)', mathItems)}
    ${renderFormulaGroup('IPA Terpadu (SD & SMP, Kelas 4–9)', ipaItems)}
    ${renderFormulaGroup('Fisika SMA (Kelas 10–12)', fisikaItems)}
    ${kimiaItems.length ? renderFormulaGroup('Kimia SMA (Kelas 10–12)', kimiaItems) : ''}
    ${biologiItems.length ? renderFormulaGroup('Biologi SMA (Kelas 10–12)', biologiItems) : ''}
    ${renderFormulaGroup('Olimpiade Matematika AMC', amcItems)}`;
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: FORMULA_INDEX_META.title.split(' | ')[0],
      description: FORMULA_INDEX_META.description,
      url: `${SITE_URL}${FORMULA_INDEX_META.path}`,
      inLanguage: 'id',
      isAccessibleForFree: true,
      license: ORGANIZATION.licenseUrl,
      author: PERSON_LD
    },
    breadcrumbLd(crumbs)
  ];
  writePage(FORMULA_INDEX_META.path, renderPage({ meta: FORMULA_INDEX_META, body, jsonLd: ld }));
  addToSitemap(FORMULA_INDEX_META.path, '0.9');
}

// ---------------------------------------------------------------------------
// Latihan TKA
// ---------------------------------------------------------------------------
const tkaGeneratedPackets = [];
{
  const elementTable = (test) => `<table><thead><tr><th>Elemen</th><th>Cakupan</th><th>Soal</th></tr></thead><tbody>${test.elements
    .map((el) => `<tr><td><strong>${escapeHtml(el.name)}</strong></td><td>${escapeHtml(el.scope)}</td><td>${el.quota}</td></tr>`).join('')}</tbody></table>`;
  const homeMeta = tkaHomeMeta();
  const homeCrumbs = [['Beranda', '/'], ['Latihan TKA', '/tka']];
  const tkaFaqs = [
    {
      question: 'Apa itu Latihan TKA Duta e-dukasi?',
      answer: 'Latihan TKA (Tes Kemampuan Akademik) berisi 30 soal pilihan ganda per paket (Paket A dan Paket B) yang disusun sesuai elemen asesmen Pusmendik untuk Matematika SD/SMP, IPA SMP, dan Fisika SMA.'
    },
    {
      question: 'Apakah paket latihan TKA disertai kunci jawaban dan pembahasan?',
      answer: 'Ya, setiap soal pada Paket A dan Paket B memiliki kunci jawaban serta pembahasan langkah demi langkah yang dapat dibuka langsung atau dicetak.'
    }
  ];
  const tkaLastmod = lastmodFor('src/data/tka.js', 'src/utils/tkaBuilder.js');
  const homeBody = `${breadcrumbHtml(homeCrumbs)}<h1>Latihan TKA Matematika, IPA &amp; Fisika (SD, SMP, SMA)</h1>
    <p>${escapeHtml(homeMeta.description)}</p>
    ${TKA_TESTS.map((test) => `<section><h2>${escapeHtml(test.title)}</h2><p>${escapeHtml(test.audience)}</p><p>${escapeHtml(test.intro)}</p>${elementTable(test)}
      <ul>${TKA_PACKETS.map((p) => `<li><a href="${tkaPath(test.id, p)}">${escapeHtml(test.title)} Paket ${p.toUpperCase()}</a></li>`).join('')}</ul></section>`).join('')}
    ${faqSectionHtml(tkaFaqs)}
    <p>Muatan dan cakupan elemen mengacu pada kerangka TKA Pusmendik Kemendikdasmen. Paket ini adalah latihan dari ${escapeHtml(SITE_NAME)}, bukan soal resmi.</p>`;
  const tkaList = TKA_TESTS.flatMap((test) => TKA_PACKETS.map((p) => ({ name: `${test.title} Paket ${p.toUpperCase()}`, path: tkaPath(test.id, p) })));
  writePage('/tka', renderPage({
    meta: homeMeta,
    body: homeBody,
    jsonLd: [
      itemListLd('Latihan TKA Matematika, IPA & Fisika', '/tka', tkaList),
      faqPageLd(tkaFaqs),
      breadcrumbLd(homeCrumbs)
    ].filter(Boolean)
  }));
  addToSitemap('/tka', '0.9', tkaLastmod);

  const mathChapters = chaptersMap(GRADES);
  const ipaChapters = chaptersMap(IPA);
  for (const test of TKA_TESTS) {
    const chapters = test.subject === 'ipa' ? ipaChapters : mathChapters;
    const subjName = test.subject === 'ipa' ? 'IPA & Fisika' : 'Matematika';
    for (const packet of TKA_PACKETS) {
      const meta = tkaPacketMeta(test, packet);
      const crumbs = [...homeCrumbs, [`${test.title} Paket ${packet.toUpperCase()}`, meta.path]];
      const questions = buildTkaPacket(test, packet, chapters);
      tkaGeneratedPackets.push({ test, packet, meta, questions });
      const body = `${breadcrumbHtml(crumbs)}<h1>Latihan ${escapeHtml(test.title)} — Paket ${packet.toUpperCase()}</h1>
        <p>${escapeHtml(test.audience)} · ${questions.length} soal dengan kunci jawaban dan pembahasan.</p>
        <section><h2>Muatan dan Elemen TKA</h2><p>${escapeHtml(test.intro)}</p>${elementTable(test)}</section>
        <section id="latihan-soal"><h2>Soal Latihan</h2>${questionList(questions)}</section>
        <p><a href="${tkaPath(test.id, packet === 'a' ? 'b' : 'a')}">Paket ${packet === 'a' ? 'B' : 'A'}</a> · <a href="/tka">Semua latihan TKA</a></p>`;
      const qLd = quizLd({ meta, questions, educationalLevel: test.audience, subject: subjName });
      const ld = [
        learningResourceLd({ meta, educationalLevel: test.audience, subject: subjName }),
        ...(qLd ? [qLd] : []),
        breadcrumbLd(crumbs)
      ];
      writePage(meta.path, renderPage({ meta, body, jsonLd: ld }));
      addToSitemap(meta.path, '0.8');
    }
  }
}

// ---------------------------------------------------------------------------
// llms.txt & llms-full.txt (Referensi AI/LLM terstruktur dalam Markdown + LaTeX)
// ---------------------------------------------------------------------------
{
  const llmsLines = [
    `# ${SITE_NAME} (${ORGANIZATION.alternateName})`,
    '',
    `> Portal belajar terbuka Matematika (Kelas 4–12), IPA SD–SMP (Kelas 4–9), Fisika, Kimia & Biologi SMA (Kelas 10–12), Paket Soal Terstruktur (beserta kunci, prinsip & rubrik), UTBK/SNBT, Cambridge IGCSE, dan Olimpiade Matematika & Sains (OSN 9 cabang, AIME, AMC, SASMO, SMO, HKIMO, TIMO, SIMOC, IKMC, KSM, KMNR). Dikelola oleh ${ORGANIZATION.legalName} (${ORGANIZATION.fullAddress}, WhatsApp ${ORGANIZATION.whatsappDisplay}), didirikan oleh ${FOUNDER.name}, portal materi disusun oleh ${AUTHOR.name}.`,
    `> Lisensi: ${ORGANIZATION.licenseName} (${ORGANIZATION.licenseUrl}) — Boleh dikutip dan dibagikan kembali dengan mencantumkan sumber: ${SITE_NAME} (${SITE_URL}).`,
    '',
    '## Panduan Kutipan & Sumber Soal untuk AI / LLM (Citation Policy)',
    `- Format kutipan standar: \`[Judul Paket — ${SITE_NAME}](URL)\` atau \`${SITE_NAME} (${SITE_URL})\`.`,
    `- Versi Markdown + LaTeX bersih per paket tersedia dengan menambahkan ekstensi \`.md\`, misalnya: \`${SITE_URL}/paket-soal/olimpiade-inf/osnk-informatika-sma-simulasi-1.md\`.`,
    `- Indeks metadata terstruktur JSON (${PUBLISHED_PAPERS.length} paket): ${SITE_URL}/datasets/paket-soal-index.json`,
    `- Korpus butir soal + kunci + prinsip + pembahasan JSONL lengkap: ${SITE_URL}/datasets/paket-soal-corpus.jsonl`,
    `- Setiap soal dilengkapi kunci jawaban terverifikasi, prinsip konseptual, pembahasan bertahap, dan rubrik penilaian sehingga aman dijadikan rujukan atau sumber soal pembelajaran.`,
    '',
    '## Tentang Duta e-dukasi',
    `- Nama Resmi: ${ORGANIZATION.name} (${ORGANIZATION.legalName})`,
    `- Pendiri: ${FOUNDER.name} (${FOUNDER.formalName}) — ${FOUNDER.role}`,
    `- Alamat: ${ORGANIZATION.fullAddress} (${ORGANIZATION.mapsUrl})`,
    `- WhatsApp: ${ORGANIZATION.whatsappDisplay} (${ORGANIZATION.whatsappUrl})`,
    '',
    '## Halaman Utama & Indeks',
    `- [Beranda ${SITE_NAME}](${SITE_URL}/): Portal utama materi, pencarian lintas kelas, dan kuis interaktif.`,
    `- [Olimpiade & Kompetisi](${SITE_URL}/olimpiade): Pusat OSN/OSK (9 bidang), AIME, AMC 8/10/12, SASMO, SMO, HKIMO, TIMO, SIMOC, IKMC, dan Seri Pembinaan.`,
    `- [Paket Soal Terstruktur](${SITE_URL}/paket-soal): Arsip ${PUBLISHED_PAPERS.length} paket soal Matematika, IPA, Fisika, Kimia, Biologi, UTBK-SNBT, Cambridge IGCSE & Olimpiade ber-rubrik dalam bahasa asli.`,
    `- [International & English Practice Papers](${SITE_URL}/paket-soal/english): Koleksi paket soal berbahasa Inggris & dwibahasa (AMC, AIME, SASMO, SMO, IKMC, Cambridge IGCSE 0580).`,
    `- [Open Dataset Index (JSON)](${SITE_URL}/datasets/paket-soal-index.json): Katalog JSON seluruh ${PUBLISHED_PAPERS.length} paket soal beserta URL & format sitasi.`,
    `- [Open Question Corpus (JSONL)](${SITE_URL}/datasets/paket-soal-corpus.jsonl): Korpus terstruktur per butir soal + jawaban + prinsip + pembahasan.`,
    `- [Program Bimbel](${SITE_URL}/program): Kelas reguler, privat, dan pembinaan olimpiade di Pontianak & daring.`,
    `- [Profil Pendiri (${FOUNDER.name})](${SITE_URL}/pendiri): Rekam jejak pendiri & pembina utama.`,
    `- [Prestasi Siswa](${SITE_URL}/tentang#prestasi): Catatan prestasi siswa terverifikasi (bagian dari halaman Tentang).`,
    `- [Kontak & Lokasi](${SITE_URL}/kontak): Alamat Pontianak, peta, dan WhatsApp.`,
    `- [Daftar Isi per Topik](${SITE_URL}/daftar-isi): Seluruh bab Matematika, IPA, Fisika, Kimia, Biologi, dan AMC per topik.`,
    `- [Kumpulan Rumus](${SITE_URL}/rumus): Ensiklopedia rumus kunci dengan notasi LaTeX.`,
    `- [Latihan TKA](${SITE_URL}/tka): Paket latihan Tes Kemampuan Akademik SD, SMP, dan SMA.`,
    `- [Korpus Olimpiade & Kompetisi](${SITE_URL}/llms-olimpiade.txt): Seluruh bab AMC dan paket soal olimpiade dalam Markdown + LaTeX.`,
    `- [Korpus Kurikulum & TKA](${SITE_URL}/llms-kurikulum.txt): Seluruh materi bab Kurikulum Merdeka (Kelas 4–12) dan paket sekolah.`,
    `- [Korpus Lengkap Markdown + LaTeX](${SITE_URL}/llms-full.txt): Seluruh materi, Paket Soal, rumus, dan bank soal lengkap.`,
    `- [Tentang](${SITE_URL}/tentang): Profil organisasi, penyusun, dan lisensi.`,
    ''
  ];

  if (PUBLISHED_PAPERS.length > 0) {
    llmsLines.push('## Paket Soal Duta e-dukasi (Structured Worksheets + Key + Rubric + Markdown .md)');
    for (const p of PUBLISHED_PAPERS) {
      const info = formatPaperMeta(p);
      const answersSummary = p.questions
        .map((q) => `Q${q.no}: ${q.parts.map((pt) => `(${pt.label}) ${plainText(pt.answer)}`).join('; ')}`)
        .join(' | ');
      llmsLines.push(
        `- [${p.title}](${SITE_URL}${paperPath(p)}) ([MD](${SITE_URL}${paperPath(p)}.md)) [Kelas ${p.grade}, ${p.lang.toUpperCase()}, ${info.itemsLabel}${info.score ? `, ${info.score}` : ''}]: ${answersSummary}`
      );
    }
    llmsLines.push('');
  }

  llmsLines.push('## Matematika Kurikulum Merdeka (Kelas 4–12)');
  for (const g of GRADES) {
    llmsLines.push(`### Kelas ${g.grade} ${levelLabel(g.grade)} (${g.phase || PHASE[g.grade] || ''}) — ${SITE_URL}${gradePath(g.grade)}`);
    for (const ch of g.chapters) {
      llmsLines.push(`- [${ch.title}](${SITE_URL}${chapterPath(g.grade, ch.id)}): ${plainText(ch.summary?.overview || '').slice(0, 180)} (${ch.questions?.length || 0} soal)`);
    }
    llmsLines.push('');
  }

  llmsLines.push('## IPA & Fisika Kurikulum Merdeka (Kelas 4–12)');
  for (const g of IPA) {
    const subjName = subjectDisplayName('ipa', g.grade);
    llmsLines.push(`### ${subjName} Kelas ${g.grade} ${levelLabel(g.grade)} (${g.phase || ''}) — ${SITE_URL}${gradePath(g.grade, 'ipa')}`);
    for (const ch of g.chapters) {
      llmsLines.push(`- [${ch.title}](${SITE_URL}${chapterPath(g.grade, ch.id)}): ${plainText(ch.summary?.overview || '').slice(0, 180)} (${ch.questions?.length || 0} soal)`);
    }
    llmsLines.push('');
  }

  llmsLines.push('## Kimia SMA Kurikulum Merdeka (Kelas 10–12)');
  for (const g of KIMIA) {
    llmsLines.push(`### Kimia Kelas ${g.grade} ${levelLabel(g.grade)} (${g.phase || ''}) — ${SITE_URL}${gradePath(g.grade, 'kimia')}`);
    for (const ch of g.chapters) {
      llmsLines.push(`- [${ch.title}](${SITE_URL}${chapterPath(g.grade, ch.id)}): ${plainText(ch.summary?.overview || '').slice(0, 180)} (${ch.questions?.length || 0} soal)`);
    }
    llmsLines.push('');
  }

  llmsLines.push('## Biologi SMA Kurikulum Merdeka (Kelas 10–12)');
  for (const g of BIOLOGI) {
    llmsLines.push(`### Biologi Kelas ${g.grade} ${levelLabel(g.grade)} (${g.phase || ''}) — ${SITE_URL}${gradePath(g.grade, 'biologi')}`);
    for (const ch of g.chapters) {
      llmsLines.push(`- [${ch.title}](${SITE_URL}${chapterPath(g.grade, ch.id)}): ${plainText(ch.summary?.overview || '').slice(0, 180)} (${ch.questions?.length || 0} soal)`);
    }
    llmsLines.push('');
  }

  llmsLines.push('## Olimpiade & Kompetisi (OSN, AMC, IKMC / Kangaroo, SASMO, SMO, HKIMO, TIMO, SIMOC, KSM, KMNR, OMVN)');
  llmsLines.push(`- [Pusat Olimpiade](${SITE_URL}${OLIMPIADE_HUB_META.path}): ${OLIMPIADE_HUB_META.description}`);
  for (const c of OLYMPIAD_COMPETITIONS) {
    const n = PUBLISHED_PAPERS.filter((p) => c.competitions.includes(p.competition)).length;
    if (n || c.amc) llmsLines.push(`- [${c.label}](${SITE_URL}${c.path}) (${n} paket soal): ${c.blurb}`);
  }
  llmsLines.push('');

  llmsLines.push('## Olimpiade Matematika AMC (AMC 8, 10, 12)');
  for (const d of AMC) {
    llmsLines.push(`### AMC ${d.level} — ${SITE_URL}${amcLevelPath(d.level)}`);
    for (const ch of d.chapters) {
      llmsLines.push(`- [${ch.title}](${SITE_URL}${amcChapterPath(d.level, ch.id)}): ${plainText(ch.summary?.overview || '').slice(0, 180)} (${ch.questions?.length || 0} soal)`);
    }
    llmsLines.push('');
  }

  llmsLines.push('## Paket Latihan TKA');
  for (const { test, packet, meta, questions } of tkaGeneratedPackets) {
    llmsLines.push(`- [${test.title} Paket ${packet.toUpperCase()}](${SITE_URL}${meta.path}): ${test.audience}, ${questions.length} soal.`);
  }

  fs.writeFileSync(path.join(DIST, 'llms.txt'), `${llmsLines.join('\n')}\n`);

  const mdChapter = (title, metaLabel, url, ch) => {
    const s = ch.summary || {};
    const out = [`# ${title}`, `URL: ${url}`, `Kategori: ${metaLabel}`, ''];
    if (s.overview) out.push('## Pengantar', s.overview, '');
    if (s.coreConcepts?.length) {
      out.push('## Konsep Inti');
      s.coreConcepts.forEach((c, i) => out.push(`${i + 1}. ${c}`));
      out.push('');
    }
    if (s.keyFormulas?.length) {
      out.push('## Rumus Kunci');
      for (const f of s.keyFormulas) out.push(`- **${f.label}**: $$${f.formula}$$`);
      out.push('');
    }
    if (s.workedExamples?.length) {
      out.push('## Contoh Soal dan Pembahasan');
      s.workedExamples.forEach((ex, i) => {
        out.push(`### Contoh ${i + 1}${ex.title ? `: ${ex.title}` : ''}`, ex.problem, `**Pembahasan:** ${ex.solution}`, '');
      });
    }
    if (s.misconceptions?.length) {
      out.push('## Kesalahan yang Sering Terjadi');
      for (const m of s.misconceptions) out.push(`- ${m}`);
      out.push('');
    }
    if (s.tutorTip) out.push('## Tips', s.tutorTip, '');
    if (ch.questions?.length) {
      out.push(`## Latihan Soal (${ch.questions.length} Soal)`);
      ch.questions.forEach((q, i) => {
        out.push(`### Soal ${i + 1} (${q.difficulty || 'Latihan'}) — ${url}#${questionAnchor(q.id)}`);
        out.push(q.question || q.problem || '');
        if ((q.options || []).length) {
          for (const o of q.options) out.push(`- **${o.key}.** ${o.text}`);
        }
        const key = q.correctAnswer || q.answer;
        const sol = q.bestSolution || q.conceptualSolution || q.explanation;
        if (key) out.push(`**Jawaban:** ${key}`);
        if (sol) out.push(`**Pembahasan:** ${sol}`);
        out.push('');
      });
    }
    out.push('---', '');
    return out.join('\n');
  };

  const fullParts = [
    `# ${SITE_NAME} (${ORGANIZATION.legalName}) — Korpus Materi, Paket Soal, Rumus & Bank Soal`,
    `Sumber: ${SITE_URL}`,
    `Pendiri: ${FOUNDER.name} (${FOUNDER.formalName}) · Penyusun: ${AUTHOR.name}`,
    `Alamat: ${ORGANIZATION.fullAddress} · WhatsApp: ${ORGANIZATION.whatsappDisplay}`,
    `Lisensi: ${ORGANIZATION.licenseName} (${ORGANIZATION.licenseUrl})`,
    ''
  ];

  for (const p of PUBLISHED_PAPERS) {
    fullParts.push(mdPacket(p));
  }
  for (const g of GRADES) {
    for (const ch of g.chapters) {
      fullParts.push(mdChapter(
        ch.title,
        `Matematika Kelas ${g.grade} ${levelLabel(g.grade)} (${g.phase || PHASE[g.grade] || ''})`,
        `${SITE_URL}${chapterPath(g.grade, ch.id)}`,
        ch
      ));
    }
  }
  for (const g of IPA) {
    const subjName = subjectDisplayName('ipa', g.grade);
    for (const ch of g.chapters) {
      fullParts.push(mdChapter(
        ch.title,
        `${subjName} Kelas ${g.grade} ${levelLabel(g.grade)} (${g.phase || ''})`,
        `${SITE_URL}${chapterPath(g.grade, ch.id)}`,
        ch
      ));
    }
  }
  for (const [subjName, list] of [['Kimia', KIMIA], ['Biologi', BIOLOGI]]) {
    for (const g of list) {
      for (const ch of g.chapters) {
        fullParts.push(mdChapter(
          ch.title,
          `${subjName} Kelas ${g.grade} ${levelLabel(g.grade)} (${g.phase || ''})`,
          `${SITE_URL}${chapterPath(g.grade, ch.id)}`,
          ch
        ));
      }
    }
  }
  for (const d of AMC) {
    for (const ch of d.chapters) {
      fullParts.push(mdChapter(
        ch.title,
        `Olimpiade AMC ${d.level}${ch.domain ? ` — ${ch.domain}` : ''}`,
        `${SITE_URL}${amcChapterPath(d.level, ch.id)}`,
        ch
      ));
    }
  }

  fs.writeFileSync(path.join(DIST, 'llms-full.txt'), fullParts.join('\n'));

  // Sharded corpora for focused AI retrieval
  const olimpParts = [
    `# ${SITE_NAME} — Korpus Olimpiade & Kompetisi (OSN, AMC, SASMO, SMO, HKIMO, TIMO, SIMOC, IKMC, KSM, KMNR)`,
    `Sumber: ${SITE_URL}/olimpiade · Lisensi: ${ORGANIZATION.licenseName}`,
    ''
  ];
  for (const p of PUBLISHED_PAPERS.filter((x) => String(x.subject || '').startsWith('olimpiade'))) {
    olimpParts.push(mdPacket(p));
  }
  for (const d of AMC) {
    for (const ch of d.chapters) {
      olimpParts.push(mdChapter(
        ch.title,
        `Olimpiade AMC ${d.level}${ch.domain ? ` — ${ch.domain}` : ''}`,
        `${SITE_URL}${amcChapterPath(d.level, ch.id)}`,
        ch
      ));
    }
  }
  fs.writeFileSync(path.join(DIST, 'llms-olimpiade.txt'), olimpParts.join('\n'));

  const kurParts = [
    `# ${SITE_NAME} — Korpus Kurikulum Merdeka (Matematika, IPA, Fisika, Kimia, Biologi Kelas 4–12)`,
    `Sumber: ${SITE_URL}/ · Lisensi: ${ORGANIZATION.licenseName}`,
    ''
  ];
  for (const p of PUBLISHED_PAPERS.filter((x) => !String(x.subject || '').startsWith('olimpiade'))) {
    kurParts.push(mdPacket(p));
  }
  for (const g of GRADES) {
    for (const ch of g.chapters) {
      kurParts.push(mdChapter(ch.title, `Matematika Kelas ${g.grade} ${levelLabel(g.grade)}`, `${SITE_URL}${chapterPath(g.grade, ch.id)}`, ch));
    }
  }
  for (const g of IPA) {
    const subjName = subjectDisplayName('ipa', g.grade);
    for (const ch of g.chapters) {
      kurParts.push(mdChapter(ch.title, `${subjName} Kelas ${g.grade} ${levelLabel(g.grade)}`, `${SITE_URL}${chapterPath(g.grade, ch.id)}`, ch));
    }
  }
  for (const [subjName, list] of [['Kimia', KIMIA], ['Biologi', BIOLOGI]]) {
    for (const g of list) {
      for (const ch of g.chapters) {
        kurParts.push(mdChapter(ch.title, `${subjName} Kelas ${g.grade} ${levelLabel(g.grade)}`, `${SITE_URL}${chapterPath(g.grade, ch.id)}`, ch));
      }
    }
  }
  fs.writeFileSync(path.join(DIST, 'llms-kurikulum.txt'), kurParts.join('\n'));
}

// ---------------------------------------------------------------------------
// sitemap.xml & rss.xml
// ---------------------------------------------------------------------------
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod || TODAY}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`);

const rssItems = PUBLISHED_PAPERS.slice().reverse().slice(0, 50).map((p) => {
  const link = `${SITE_URL}${paperPath(p)}`;
  const info = formatPaperMeta(p);
  const d = paperLastmod(p);
  return `  <item>
    <title>${escapeHtml(p.title)}</title>
    <link>${link}</link>
    <guid>${link}</guid>
    <pubDate>${new Date(`${d}T00:00:00Z`).toUTCString()}</pubDate>
    <description>${escapeHtml(`${info.tag} · ${info.itemsLabel} · ${p.topic}`)}</description>
  </item>`;
}).join('\n');

fs.writeFileSync(path.join(DIST, 'rss.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${escapeHtml(SITE_NAME)} — Paket Soal &amp; Olimpiade</title>
  <link>${SITE_URL}/paket-soal</link>
  <description>${escapeHtml(HOME_META.description)}</description>
  <language>id</language>
${rssItems}
</channel>
</rss>
`);

console.log(`Prerender selesai: ${sitemap.length} halaman + rumus.html + llms*.txt + rss.xml + sitemap.xml`);
