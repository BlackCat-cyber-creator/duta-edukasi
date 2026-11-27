/**
 * Prerender halaman publik untuk mesin pencari dan AI/LLM (dijalankan setelah `vite build`).
 *
 * Menghasilkan HTML statis ringan (KaTeX MathML), Knowledge Graph JSON-LD (`@graph` dengan
 * `EducationalOrganization`, `LocalBusiness`, `WebSite`, `WebPage`, `Course`, `LearningResource`,
 * `Quiz`, `FAQPage`, `Dataset`, `DefinedTermSet`, `BreadcrumbList`), kembaran Markdown per halaman
 * (`.md`), dataset terbuka (`paket-soal-index.json`, `paket-soal-corpus.jsonl`, `kurikulum-index.json`),
 * indeks `llms.txt`, korpus `llms-*.txt`, `rss.xml`, serta `sitemap.xml` (image + hreflang).
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
import { parsePaperPart } from '../src/utils/paperInteractive.js';
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
  getRelatedPapers,
  extractPaperYear
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
  SUBJECT_HUB_INFO,
  subjectHubMeta,
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
  plainText,
  truncate
} from '../src/utils/seoMeta.js';
import {
  PAPERS_HUB_FAQS,
  ENGLISH_PAPERS_HUB_FAQS,
  OLIMPIADE_HUB_FAQS,
  TKA_HUB_FAQS,
  FORMULA_INDEX_FAQS,
  getSubjectHubFaqs,
  getPaperFaqs
} from '../src/utils/seoFaqs.js';
import { AUTHOR, ABOUT, FOUNDER, ORGANIZATION, PROGRAMS, FAQS, PRESTASI_DATA, isPublicInstagramUrl, parseInstagramPost } from '../src/data/siteInfo.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.resolve(ROOT, 'public');
const DIST = path.resolve(ROOT, 'dist');
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
    // fallback when git history unavailable
  }
  return map;
})();

function fileMtimeDate(relPath) {
  try {
    const stat = fs.statSync(path.join(ROOT, relPath));
    return stat.mtime.toISOString().slice(0, 10);
  } catch {
    return '';
  }
}

function lastmodFor(...relPaths) {
  let latest = '';
  for (const rel of relPaths.flat()) {
    if (!rel) continue;
    const norm = String(rel).replace(/\\/g, '/').replace(/^\.\//, '');
    const d = GIT_FILE_DATES.get(norm) || fileMtimeDate(norm);
    if (d && d > latest) latest = d;
  }
  return latest || TODAY;
}

const PAPER_DISK_FILES = (() => {
  const files = [];
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.js') && !['index.js', 'meta.js', 'manifest.js'].includes(e.name)) {
        files.push(path.relative(ROOT, p).replace(/\\/g, '/'));
      }
    }
  };
  walk(path.join(ROOT, 'src/data/papers'));
  return files;
})();

const PAPER_FILE_DATES = new Map();
for (const fp of PAPER_DISK_FILES) {
  const d = GIT_FILE_DATES.get(fp) || fileMtimeDate(fp);
  if (d) PAPER_FILE_DATES.set(fp, d);
}
for (const [filePath, d] of GIT_FILE_DATES.entries()) {
  if (filePath.startsWith('src/data/papers/') && !PAPER_FILE_DATES.has(filePath)) {
    PAPER_FILE_DATES.set(filePath, d);
  }
}

function paperLastmod(paper) {
  const slugKey = `/${paper.slug}.js`;
  for (const [fp, d] of PAPER_FILE_DATES.entries()) {
    if (fp.endsWith(slugKey) || (fp.includes(`/${paper.subject}/`) && fp.includes(paper.slug))) return d;
  }
  return lastmodFor('src/data/papers/index.js');
}

// ---------------------------------------------------------------------------
// Image Dimensions Helper (CLS = 0)
// ---------------------------------------------------------------------------
const IMAGE_DIM_CACHE = new Map();

function getImageDimensions(publicRelPath) {
  const cleanRel = String(publicRelPath || '').replace(/^\//, '');
  if (!cleanRel) return null;
  if (IMAGE_DIM_CACHE.has(cleanRel)) return IMAGE_DIM_CACHE.get(cleanRel);

  const absPath = path.join(PUBLIC_DIR, cleanRel);
  let dims = null;
  try {
    const ext = path.extname(absPath).toLowerCase();
    const buf = fs.readFileSync(absPath);
    if (ext === '.png' && buf.length >= 24 && buf.toString('ascii', 1, 4) === 'PNG') {
      dims = { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    } else if ((ext === '.jpg' || ext === '.jpeg') && buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8) {
      let i = 2;
      while (i + 9 < buf.length) {
        if (buf[i] !== 0xff) { i += 1; continue; }
        const marker = buf[i + 1];
        if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
          dims = { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
          break;
        }
        if (marker === 0xd9 || marker === 0xda) break;
        const segLen = buf.readUInt16BE(i + 2);
        if (segLen < 2) break;
        i += 2 + segLen;
      }
    } else if (ext === '.webp' && buf.length >= 30 && buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
      const chunk = buf.toString('ascii', 12, 16);
      if (chunk === 'VP8 ' && buf.length >= 30) {
        dims = { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
      } else if (chunk === 'VP8L' && buf.length >= 25) {
        const b = buf.readUInt32LE(21);
        dims = { width: (b & 0x3fff) + 1, height: ((b >> 14) & 0x3fff) + 1 };
      } else if (chunk === 'VP8X' && buf.length >= 30) {
        const w = 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16));
        const h = 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16));
        dims = { width: w, height: h };
      }
    } else if (ext === '.svg') {
      const text = buf.toString('utf8', 0, Math.min(buf.length, 4096));
      const vb = text.match(/viewBox=["']\s*[\d.-]+[\s,]+[\d.-]+[\s,]+([\d.]+)[\s,]+([\d.]+)/i);
      const wm = text.match(/\bwidth=["']([\d.]+)(?:px)?["']/i);
      const hm = text.match(/\bheight=["']([\d.]+)(?:px)?["']/i);
      if (wm && hm) dims = { width: Math.round(Number(wm[1])), height: Math.round(Number(hm[1])) };
      else if (vb) dims = { width: Math.round(Number(vb[1])), height: Math.round(Number(vb[2])) };
    }
  } catch {
    dims = null;
  }
  IMAGE_DIM_CACHE.set(cleanRel, dims);
  return dims;
}

const escapeHtml = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const escapeXml = (s) => escapeHtml(s).replace(/'/g, '&apos;');

function imgTag(src, alt, fallbackDims = null, extraAttrs = '') {
  const dims = getImageDimensions(src) || fallbackDims;
  const dimAttrs = dims && dims.width > 0 && dims.height > 0
    ? ` width="${dims.width}" height="${dims.height}"`
    : '';
  return `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}"${dimAttrs} loading="lazy" decoding="async"${extraAttrs ? ` ${extraAttrs}` : ''} />`;
}

// ---------------------------------------------------------------------------
// Data kurikuler & bank soal
// ---------------------------------------------------------------------------
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
// Teks -> HTML (KaTeX MathML ringan untuk CWV, **tebal**, baris baru)
// ---------------------------------------------------------------------------
function renderMath(tex, displayMode) {
  try {
    return katex.renderToString(tex, { displayMode, throwOnError: false, strict: 'ignore', output: 'mathml' });
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
// Kerangka halaman & Knowledge Graph JSON-LD (@graph + @id)
// ---------------------------------------------------------------------------
const shell = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
if (!shell.includes('<div id="root"></div>')) throw new Error('dist/index.html tidak berisi <div id="root"></div>');
// app.html sebagai fallback SPA/404 wajib noindex agar tidak terindeks sebagai soft-404
fs.writeFileSync(
  path.join(DIST, 'app.html'),
  shell.replace('</head>', '    <meta name="robots" content="noindex, nofollow" />\n  </head>')
);

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const FOUNDER_ID = `${SITE_URL}/#founder`;
const AUTHOR_ID = `${SITE_URL}/#author`;

const PERSON_NODE = {
  '@type': 'Person',
  '@id': AUTHOR_ID,
  name: AUTHOR.name,
  jobTitle: AUTHOR.jobTitle,
  url: `${SITE_URL}/tentang#tim`,
  worksFor: { '@id': ORG_ID },
  knowsAbout: ['Matematika', 'Fisika', 'Olimpiade Sains', 'Teknologi Edukasi'],
  ...(AUTHOR.sameAs.length ? { sameAs: AUTHOR.sameAs } : {})
};

const FOUNDER_NODE = {
  '@type': 'Person',
  '@id': FOUNDER_ID,
  name: FOUNDER.name,
  alternateName: FOUNDER.formalName,
  jobTitle: FOUNDER.role,
  url: `${SITE_URL}/pendiri`,
  ...(FOUNDER.photo ? { image: `${SITE_URL}${FOUNDER.photo}` } : {}),
  worksFor: { '@id': ORG_ID },
  sameAs: [FOUNDER.instagramUrl, ...(FOUNDER.youtubeUrl ? [FOUNDER.youtubeUrl] : [])]
};

const ORGANIZATION_NODE = {
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': ORG_ID,
  name: ORGANIZATION.name,
  legalName: ORGANIZATION.legalName,
  alternateName: ORGANIZATION.alternateName,
  description: ABOUT.intro,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/brand/icon-512.png`,
    width: 512,
    height: 512
  },
  image: `${SITE_URL}/brand/og/default.png`,
  telephone: ORGANIZATION.telephone,
  priceRange: 'Rp0 (Portal Online Gratis)',
  knowsLanguage: ['id', 'en'],
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
  award: PRESTASI_DATA.slice(0, 8).map((p) => `${p.year} ${p.award} — ${p.competition}`),
  areaServed: ['Indonesia', 'Pontianak, Kalimantan Barat'],
  hasMap: ORGANIZATION.mapsUrl,
  founder: { '@id': FOUNDER_ID },
  sameAs: ORGANIZATION.sameAs,
  license: ORGANIZATION.licenseUrl
};

const WEBSITE_NODE = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE_NAME,
  alternateName: ORGANIZATION.alternateName,
  url: SITE_URL,
  inLanguage: ['id', 'en'],
  description: HOME_META.description,
  license: ORGANIZATION.licenseUrl,
  publisher: { '@id': ORG_ID },
  creator: { '@id': AUTHOR_ID },
  author: { '@id': AUTHOR_ID },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/paket-soal?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
};

const DATASET_NODE = {
  '@type': 'Dataset',
  '@id': `${SITE_URL}/paket-soal#dataset`,
  name: `${SITE_NAME} Open Math, Science & Olympiad Practice Dataset (${PUBLISHED_PAPERS.length} Papers)`,
  description: `Open structured benchmark & study corpus containing ${PUBLISHED_PAPERS.length} Matematika, IPA, Fisika, Kimia, Biologi, UTBK-SNBT, Cambridge IGCSE, and Olympiad (OSN, AMC/AIME, SASMO, SMO, HKIMO, TIMO, SIMOC, IKMC) practice papers with step-by-step solutions, key principles, LaTeX math, and marking rubrics.`,
  identifier: `${SITE_URL}/datasets/paket-soal-index.json`,
  version: TODAY,
  url: `${SITE_URL}/paket-soal`,
  inLanguage: ['id', 'en'],
  isAccessibleForFree: true,
  license: ORGANIZATION.licenseUrl,
  dateModified: TODAY,
  spatialCoverage: 'Indonesia',
  temporalCoverage: '2010/2026',
  measurementTechnique: 'Curated & structured STEM problem-solving with LaTeX and marking rubrics',
  variableMeasured: ['questionCount', 'marks', 'answerKey', 'principle', 'rubric'],
  sameAs: ORGANIZATION.repoUrl,
  keywords: [
    'Bank Soal Matematika Indonesia',
    'Soal Olimpiade OSN Pembahasan',
    'AMC SASMO HKIMO TIMO Solutions',
    'UTBK SNBT Penalaran Matematika',
    'Cambridge IGCSE 0580 Practice',
    'Indonesian STEM Education Dataset'
  ],
  creator: { '@id': ORG_ID },
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
      name: 'Kurikulum & AMC Chapter Index (JSON)',
      encodingFormat: 'application/json',
      contentUrl: `${SITE_URL}/datasets/kurikulum-index.json`
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

const FOOTER_HTML = `<footer class="seo-footer">
  <p><strong>${escapeHtml(ORGANIZATION.name)}</strong> — Platform Belajar Terbuka Matematika &amp; Sains · Disusun oleh <a href="/tentang">${escapeHtml(AUTHOR.name)}</a>.</p>
  <p>Belajar: <a href="/matematika">Matematika</a> · <a href="/ipa">IPA</a> · <a href="/fisika">Fisika</a> · <a href="/kimia">Kimia</a> · <a href="/biologi">Biologi</a> · <a href="/daftar-isi">Daftar isi</a> · <a href="/rumus">Kumpulan rumus</a> · <a href="/tka">Latihan TKA</a> · <a href="/olimpiade">Olimpiade</a> · <a href="/paket-soal">Paket Soal</a></p>
  <p>Referensi Terbuka &amp; AI: <a href="/llms.txt">Indeks AI (llms.txt)</a> · <a href="/datasets/paket-soal-index.json">Dataset Soal (JSON)</a> · <a href="/datasets/kurikulum-index.json">Dataset Kurikulum (JSON)</a> · <a href="/rss.xml">RSS</a> · <a href="/sitemap.xml">Sitemap</a></p>
  <p>Tentang kami: <a href="/tentang">Tentang</a> · <a href="/tentang#prestasi">Prestasi siswa</a> · <a href="/pendiri">Pendiri</a> · <a href="/program">Program</a> · <a href="/kontak">Kontak</a> · Lisensi <a href="${escapeHtml(ORGANIZATION.licenseUrl)}">${escapeHtml(ORGANIZATION.licenseName)}</a></p>
</footer>`;

function renderPage({ meta, body, jsonLd = [], pageType = 'WebPage', dateModified = TODAY, hasBreadcrumb = true }) {
  const url = `${SITE_URL}${meta.path === '/' ? '/' : meta.path}`;
  const docLang = meta.lang || 'id';
  const ogLocale = docLang === 'en' ? 'en_US' : 'id_ID';
  const hasAltLang = Array.isArray(meta.alternates) && meta.alternates.some((a) => a.hreflang !== docLang && a.hreflang !== 'x-default');
  const ogLocaleAlt = hasAltLang ? (docLang === 'en' ? 'id_ID' : 'en_US') : null;
  const ogImageUrl = `${SITE_URL}${meta.ogImage || '/brand/og/default.png'}`;
  const altLinks = Array.isArray(meta.alternates) && meta.alternates.length
    ? meta.alternates.map((a) => `<link rel="alternate" hreflang="${escapeHtml(a.hreflang)}" href="${SITE_URL}${a.path}" />`)
    : [
        `<link rel="alternate" hreflang="${escapeHtml(docLang)}" href="${url}" />`,
        `<link rel="alternate" hreflang="x-default" href="${url}" />`
      ];

  const webPageNode = {
    '@type': pageType,
    '@id': `${url}#webpage`,
    url,
    name: meta.title,
    description: meta.description,
    inLanguage: docLang,
    dateModified,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    ...(hasBreadcrumb ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.seo-subtitle', '.seo-faq']
    }
  };

  const graphNodes = [
    ORGANIZATION_NODE,
    WEBSITE_NODE,
    FOUNDER_NODE,
    PERSON_NODE,
    webPageNode,
    ...jsonLd.filter(Boolean).map((n) => {
      if (!n || typeof n !== 'object') return n;
      const copy = { ...n };
      delete copy['@context'];
      return copy;
    })
  ];

  const graphPayload = {
    '@context': 'https://schema.org',
    '@graph': graphNodes
  };

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
    ...(ogLocaleAlt ? [`<meta property="og:locale:alternate" content="${ogLocaleAlt}" />`] : []),
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${ogImageUrl}" />`,
    `<meta property="og:image:type" content="image/png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:image" content="${ogImageUrl}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(meta.title)}" />`,
    `<script type="application/ld+json">${JSON.stringify(graphPayload).replace(/</g, '\\u003c')}</script>`
  ].join('\n    ');

  return shell
    .replace(/<html lang="[^"]*">/, `<html lang="${escapeHtml(docLang)}">`)
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace(/<meta property="og:image"[^>]*>/, '')
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root"><div class="handbook-container seo-page">${body}${FOOTER_HTML}</div></div>`);
}

function writePage(routePath, html) {
  const file = routePath === '/' ? path.join(DIST, 'index.html') : path.join(DIST, `${routePath.slice(1)}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

function writeMdTwin(routePath, content) {
  const mdRel = routePath === '/' ? 'index.md' : `${routePath.slice(1)}.md`;
  const mdDest = path.join(DIST, mdRel);
  fs.mkdirSync(path.dirname(mdDest), { recursive: true });
  fs.writeFileSync(mdDest, content);
}

const breadcrumbLd = (items, pagePath) => {
  const url = `${SITE_URL}${pagePath === '/' ? '/' : pagePath}`;
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: items.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE_URL}${p}` }))
  };
};

const breadcrumbHtml = (items) => `<nav class="seo-breadcrumb" aria-label="Navigasi">${items
  .map(([name, p], i) => (i === items.length - 1 ? `<span>${escapeHtml(name)}</span>` : `<a href="${p}">${escapeHtml(name)}</a>`))
  .join(' › ')}</nav>`;

const faqPageLd = (faqs = []) => {
  if (!faqs.length) return null;
  return {
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

const courseListLd = (courses = []) => ({
  '@type': 'ItemList',
  numberOfItems: courses.length,
  itemListElement: courses.map((c, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    item: {
      '@type': 'Course',
      url: `${SITE_URL}${c.path}`,
      name: c.name,
      description: c.description,
      provider: { '@id': ORG_ID },
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'IDR',
        category: 'Free'
      }
    }
  }))
});

const courseNodeLd = ({ name, description, pagePath, educationalLevel, chapters = [], inLanguage = 'id' }) => ({
  '@type': 'Course',
  name,
  description,
  url: `${SITE_URL}${pagePath}`,
  inLanguage,
  educationalLevel,
  isAccessibleForFree: true,
  provider: { '@id': ORG_ID },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'IDR',
    category: 'Free'
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    courseWorkload: `PT${Math.max(1, chapters.length) * 2}H`
  },
  ...(chapters.length
    ? {
        syllabusSections: chapters.map((ch) => ({
          '@type': 'Syllabus',
          name: ch.title,
          description: truncate(ch.summary?.overview || ch.title, 140)
        }))
      }
    : {})
});

const learningResourceLd = ({ meta, educationalLevel, subject = 'Matematika', inLanguage = 'id', dateModified = TODAY, keywords = [] }) => ({
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
  provider: { '@id': ORG_ID },
  author: { '@id': AUTHOR_ID }
});

function quizLd({ meta, questions = [], educationalLevel, subject = 'Matematika', inLanguage = 'id', dateModified = TODAY }) {
  if (!questions.length) return null;
  const ageRange = /\bSD\b|Kelas\s+[4-6]\b/i.test(educationalLevel)
    ? '9-12'
    : /\bSMP\b|Kelas\s+[7-9]\b|AMC\s*8\b/i.test(educationalLevel)
      ? '12-15'
      : '15-18';
  const alignment = [
    { '@type': 'AlignmentObject', alignmentType: 'educationalSubject', targetName: subject },
    { '@type': 'AlignmentObject', alignmentType: 'educationalLevel', targetName: educationalLevel }
  ];
  const topicAssessed = meta.title.split(' — ')[0].split(' | ')[0];

  return {
    '@type': 'Quiz',
    name: `Latihan Soal: ${meta.title.split(' | ')[0]}`,
    description: meta.description,
    url: `${SITE_URL}${meta.path}#latihan-soal`,
    inLanguage,
    dateModified,
    isAccessibleForFree: true,
    license: ORGANIZATION.licenseUrl,
    educationalLevel,
    educationalAlignment: alignment,
    typicalAgeRange: ageRange,
    about: { '@type': 'Thing', name: subject },
    author: { '@id': AUTHOR_ID },
    hasPart: questions.map((q, idx) => {
      const hasOptions = Array.isArray(q.options) && q.options.length > 0;
      const key = q.correctAnswer || q.answer;
      const correctIdx = hasOptions && q.correctAnswer
        ? q.options.findIndex((o) => o.key === q.correctAnswer)
        : -1;
      const acceptedPos = correctIdx >= 0 ? correctIdx + 1 : 1;
      const ansText = hasOptions && q.correctAnswer
        ? `${q.correctAnswer}. ${(q.options || []).find((o) => o.key === q.correctAnswer)?.text || ''}`
        : String(key ?? '');
      const distractors = hasOptions && q.correctAnswer
        ? q.options
            .map((o, optIdx) => ({ o, pos: optIdx + 1 }))
            .filter(({ o }) => o.key !== q.correctAnswer)
            .map(({ o, pos }) => ({
              '@type': 'Answer',
              position: pos,
              encodingFormat: 'text/plain',
              text: plainText(`${o.key}. ${o.text}`)
            }))
        : [];
      const sol = q.bestSolution || q.conceptualSolution || q.explanation || '';
      const shortSol = sol ? truncate(sol, 500) : '';
      return {
        '@type': 'Question',
        position: idx + 1,
        name: `Soal ${idx + 1}`,
        text: truncate(q.question || q.problem || '', 600),
        encodingFormat: 'text/plain',
        eduQuestionType: hasOptions ? 'Multiple choice' : 'Short answer',
        learningResourceType: 'Practice problem',
        educationalAlignment: alignment,
        typicalAgeRange: ageRange,
        assesses: topicAssessed,
        acceptedAnswer: {
          '@type': 'Answer',
          position: acceptedPos,
          encodingFormat: 'text/plain',
          text: plainText(ansText),
          comment: { '@type': 'Comment', text: inLanguage === 'en' ? 'Correct answer.' : 'Jawaban benar.' },
          ...(shortSol ? { answerExplanation: { '@type': 'Comment', text: shortSol } } : {})
        },
        ...(distractors.length ? { suggestedAnswer: distractors } : {})
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

function mdChapter(title, metaLabel, url, ch) {
  const s = ch.summary || {};
  const out = [
    `# ${title}`,
    `Canonical URL: ${url}`,
    `Markdown URL: ${url}.md`,
    `Kategori: ${metaLabel}`,
    `Cite As: ${SITE_NAME} — ${title} (${url})`,
    `License: ${ORGANIZATION.licenseName} (${ORGANIZATION.licenseUrl})`,
    ''
  ];
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
}

const sitemap = [];
const addToSitemap = (p, priority, lastmod = TODAY, { images = [], alternates = [] } = {}) => {
  const uniqueImages = [];
  const seenImg = new Set();
  for (const img of images) {
    if (!img?.src || seenImg.has(img.src)) continue;
    seenImg.add(img.src);
    uniqueImages.push(img);
  }
  sitemap.push({
    loc: `${SITE_URL}${p === '/' ? '/' : p}`,
    priority,
    lastmod: lastmod || TODAY,
    images: uniqueImages,
    alternates
  });
};

// ---------------------------------------------------------------------------
// Beranda
// ---------------------------------------------------------------------------
{
  const homeLastmod = lastmodFor('src/components/HomeHubPage.jsx', 'src/data/papers/index.js');
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
    <p><a href="/matematika">Matematika</a> · <a href="/ipa">IPA</a> · <a href="/fisika">Fisika</a> · <a href="/kimia">Kimia</a> · <a href="/biologi">Biologi</a> · <a href="/paket-soal">Paket Soal</a> · <a href="/olimpiade">Olimpiade</a> · <a href="/daftar-isi">Daftar Isi</a> · <a href="/rumus">Kumpulan Rumus</a> · <a href="/tka">Latihan TKA</a> · <a href="/tentang">Tentang</a></p>
    <section><h2>1. Materi Sekolah — Matematika &amp; Sains</h2>
      <h3><a href="/matematika">Matematika (Kelas 4–12)</a></h3><ul>${gradeList}</ul>
      ${ipaSchoolList ? `<h3><a href="/ipa">IPA (SD &amp; SMP, Kelas 4–9)</a></h3><ul>${ipaSchoolList}</ul>` : ''}
      ${fisikaSmaList ? `<h3><a href="/fisika">Fisika (SMA, Kelas 10–12)</a></h3><ul>${fisikaSmaList}</ul>` : ''}
      ${kimiaSmaList ? `<h3><a href="/kimia">Kimia (SMA, Kelas 10–12)</a></h3><ul>${kimiaSmaList}</ul>` : ''}
      ${biologiSmaList ? `<h3><a href="/biologi">Biologi (SMA, Kelas 10–12)</a></h3><ul>${biologiSmaList}</ul>` : ''}
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
  const homeCourses = Object.values(SUBJECT_HUB_INFO).map((s) => ({
    name: `${s.name} (${s.levelText})`,
    description: s.description,
    path: s.path
  }));
  writePage('/', renderPage({
    meta: HOME_META,
    body,
    jsonLd: [courseListLd(homeCourses)],
    dateModified: homeLastmod,
    hasBreadcrumb: false
  }));
  addToSitemap('/', '1.0', homeLastmod, {
    images: [{ src: HOME_META.ogImage, title: HOME_META.title, caption: HOME_META.description }]
  });
}

// ---------------------------------------------------------------------------
// Halaman Informasi Bimbel (/tentang + prestasi, /program, /pendiri, /kontak)
// ---------------------------------------------------------------------------
{
  const aboutLastmod = lastmodFor('src/data/siteInfo.js', 'src/components/AboutPage.jsx', 'src/components/about/PrestasiSection.jsx');
  const prestasiImgs = PRESTASI_DATA.filter((p) => p.photo).map((p) => ({
    src: p.photo,
    title: `${p.studentName} — ${p.award}`,
    caption: `${p.year} ${p.competition}`
  }));
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
      const photo = p.photo ? `<div>${imgTag(p.photo, `${p.studentName} — ${p.award}`)}</div>` : '';
      return `
      <li>
        ${photo}
        <strong>${escapeHtml(p.year)} — ${escapeHtml(p.award)}</strong>: ${escapeHtml(p.studentName)}, ${escapeHtml(p.school)} — ${escapeHtml(p.competition)}.
        ${p.notes ? escapeHtml(p.notes) : ''}${source}
      </li>`;
    }).join('\n')}
    </ul>
    <h2>Lisensi Terbuka</h2>
    <p>Seluruh materi berlisensi <a href="${escapeHtml(ORGANIZATION.licenseUrl)}">${escapeHtml(ORGANIZATION.licenseName)}</a> dengan atribusi kepada ${escapeHtml(ORGANIZATION.name)}.</p>
    <h2>Mulai Belajar</h2>
    <ul><li><a href="/">Materi per kelas (Matematika, IPA, Fisika, Kimia, Biologi)</a></li><li><a href="/daftar-isi">Daftar Isi per Topik</a></li><li><a href="/rumus">Kumpulan Rumus</a></li><li><a href="/tka">Latihan TKA</a></li><li><a href="/olimpiade">Olimpiade &amp; Kompetisi</a></li><li><a href="/paket-soal">Paket Soal Terstruktur</a></li></ul>`;
  const crumbs = [['Beranda', '/'], ['Tentang', ABOUT_META.path]];
  writePage(ABOUT_META.path, renderPage({
    meta: ABOUT_META,
    body,
    pageType: 'AboutPage',
    dateModified: aboutLastmod,
    jsonLd: [breadcrumbLd(crumbs, ABOUT_META.path)]
  }));
  addToSitemap(ABOUT_META.path, '0.8', aboutLastmod, { images: prestasiImgs });
}

{
  const programLastmod = lastmodFor('src/data/siteInfo.js', 'src/components/ProgramPage.jsx');
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
    ${faqSectionHtml(FAQS, 'Pertanyaan Umum (FAQ)')}
    <p><a href="${escapeHtml(ORGANIZATION.whatsappUrl)}">Konsultasi &amp; Daftar via WhatsApp (${escapeHtml(ORGANIZATION.whatsappDisplay)})</a></p>`;
  const crumbs = [['Beranda', '/'], ['Program Bimbel', PROGRAM_META.path]];
  const offerCatalogLd = {
    '@type': 'OfferCatalog',
    name: `Program Bimbingan Belajar ${ORGANIZATION.name}`,
    url: `${SITE_URL}${PROGRAM_META.path}`,
    itemListElement: PROGRAMS.map((prog, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Course',
        name: prog.title,
        description: prog.summary,
        educationalLevel: prog.audience,
        provider: { '@id': ORG_ID }
      }
    }))
  };
  writePage(PROGRAM_META.path, renderPage({
    meta: PROGRAM_META,
    body,
    dateModified: programLastmod,
    jsonLd: [offerCatalogLd, faqPageLd(FAQS), breadcrumbLd(crumbs, PROGRAM_META.path)]
  }));
  addToSitemap(PROGRAM_META.path, '0.8', programLastmod);
}

{
  const founderLastmod = lastmodFor('src/data/siteInfo.js', 'src/components/FounderPage.jsx');
  const body = `
    ${breadcrumbHtml([['Beranda', '/'], ['Pendiri', FOUNDER_META.path]])}
    <h1>${escapeHtml(FOUNDER.name)} (${escapeHtml(FOUNDER.formalName)}) — ${escapeHtml(FOUNDER.role)}</h1>
    ${FOUNDER.photo ? imgTag(FOUNDER.photo, `Foto ${FOUNDER.name}`, { width: 112, height: 112 }) : ''}
    <ul>${FOUNDER.bioHighlights.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>
    <h2>Rekam Jejak Terverifikasi</h2>
    <ul>${FOUNDER.credentials.map((c) => `<li><strong>${escapeHtml(c.year)} — ${escapeHtml(c.title)}</strong>: ${escapeHtml(c.detail)} (<a href="${escapeHtml(c.sourceUrl)}">Sumber</a>)</li>`).join('')}</ul>
    <p>Instagram: <a href="${escapeHtml(FOUNDER.instagramUrl)}">${escapeHtml(FOUNDER.instagramHandle)}</a> · <a href="/tentang#prestasi">Prestasi Siswa Binaan</a></p>
    <h2>Tim Pengajar &amp; Lead Developer Portal Digital</h2>
    <p><strong>${escapeHtml(AUTHOR.name)}</strong> — ${escapeHtml(AUTHOR.jobTitle)}.</p>
    <ul>${(AUTHOR.bioHighlights || []).map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>
    <p>${AUTHOR.instagramUrl ? `Instagram: <a href="${escapeHtml(AUTHOR.instagramUrl)}">${escapeHtml(AUTHOR.instagramHandle)}</a> · ` : ''}${AUTHOR.githubUrl ? `<a href="${escapeHtml(AUTHOR.githubUrl)}">GitHub</a> · ` : ''}<a href="/tentang">Tentang Platform Duta e-dukasi</a></p>`;
  const crumbs = [['Beranda', '/'], ['Pendiri', FOUNDER_META.path]];
  writePage(FOUNDER_META.path, renderPage({
    meta: FOUNDER_META,
    body,
    pageType: 'ProfilePage',
    dateModified: founderLastmod,
    jsonLd: [breadcrumbLd(crumbs, FOUNDER_META.path)]
  }));
  addToSitemap(FOUNDER_META.path, '0.7', founderLastmod, {
    images: FOUNDER.photo ? [{ src: FOUNDER.photo, title: FOUNDER.name, caption: FOUNDER.role }] : []
  });
}

{
  const contactLastmod = lastmodFor('src/data/siteInfo.js', 'src/components/ContactPage.jsx');
  const body = `
    ${breadcrumbHtml([['Beranda', '/'], ['Kontak', CONTACT_META.path]])}
    <h1>Kontak &amp; Lokasi ${escapeHtml(ORGANIZATION.legalName)}</h1>
    <p><strong>Alamat:</strong> ${escapeHtml(ORGANIZATION.fullAddress)}</p>
    <p><strong>WhatsApp / Telepon:</strong> <a href="${escapeHtml(ORGANIZATION.whatsappUrl)}">${escapeHtml(ORGANIZATION.whatsappDisplay)}</a></p>
    <p><strong>Google Maps:</strong> <a href="${escapeHtml(ORGANIZATION.mapsUrl)}">${escapeHtml(ORGANIZATION.mapsUrl)}</a></p>
    <p><strong>Pendiri:</strong> <a href="/pendiri">${escapeHtml(FOUNDER.name)}</a> (<a href="${escapeHtml(FOUNDER.instagramUrl)}">${escapeHtml(FOUNDER.instagramHandle)}</a>)</p>`;
  const crumbs = [['Beranda', '/'], ['Kontak', CONTACT_META.path]];
  writePage(CONTACT_META.path, renderPage({
    meta: CONTACT_META,
    body,
    pageType: 'ContactPage',
    dateModified: contactLastmod,
    jsonLd: [breadcrumbLd(crumbs, CONTACT_META.path)]
  }));
  addToSitemap(CONTACT_META.path, '0.8', contactLastmod);
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
  const papersHubLastmod = lastmodFor('src/data/papers/index.js', 'src/components/PapersHubPage.jsx');
  const renderPacketList = (papers) =>
    `<ul>${papers.map((p) => {
      const info = formatPaperMeta(p);
      return `<li><a href="${paperPath(p)}"><strong>${escapeHtml(p.title)}</strong></a> — ${escapeHtml(p.topic)} · Kelas ${p.grade} · ${escapeHtml(info.itemsLabel)}${info.score ? ` (${escapeHtml(info.score)})` : ''} · ${escapeHtml(info.lang)}</li>`;
    }).join('\n')}</ul>`;

  const hubMeta = papersHubMeta('all');
  const hubCrumbs = [['Beranda', '/'], ['Paket Soal', '/paket-soal']];
  const hubBody = `
    ${breadcrumbHtml(hubCrumbs)}
    <h1>Paket Soal Terstruktur ${escapeHtml(ORGANIZATION.name)}</h1>
    <p>${escapeHtml(hubMeta.description)}</p>
    <p><a href="/paket-soal/english">International &amp; English Practice Papers (EN)</a> · <a href="/olimpiade">Pusat Olimpiade</a> · <a href="/datasets/paket-soal-index.json">Dataset Terbuka (JSON)</a> · <a href="/llms.txt">Indeks AI (llms.txt)</a></p>
    ${renderPacketList(PUBLISHED_PAPERS)}
    ${faqSectionHtml(PAPERS_HUB_FAQS, 'Pertanyaan Umum Paket Soal')}`;
  writePage('/paket-soal', renderPage({
    meta: hubMeta,
    body: hubBody,
    pageType: 'CollectionPage',
    dateModified: papersHubLastmod,
    jsonLd: [
      DATASET_NODE,
      itemListLd('Paket Soal Terstruktur Duta e-dukasi', '/paket-soal', PUBLISHED_PAPERS.map((p) => ({ name: p.title, path: paperPath(p) }))),
      faqPageLd(PAPERS_HUB_FAQS),
      breadcrumbLd(hubCrumbs, '/paket-soal')
    ].filter(Boolean)
  }));
  addToSitemap('/paket-soal', '0.9', papersHubLastmod, {
    images: [{ src: hubMeta.ogImage, title: hubMeta.title, caption: hubMeta.description }],
    alternates: hubMeta.alternates
  });

  // Dedicated English Hub (/paket-soal/english)
  const englishPapers = PUBLISHED_PAPERS.filter(englishPapersFilter);
  const enHubMeta = englishPapersHubMeta(englishPapers.length);
  const enCrumbs = [...hubCrumbs, ['English Papers', '/paket-soal/english']];
  const enBody = `
    ${breadcrumbHtml(enCrumbs)}
    <h1>International &amp; English Math and Science Practice Papers</h1>
    <p>${escapeHtml(enHubMeta.description)}</p>
    ${renderPacketList(englishPapers)}
    ${faqSectionHtml(ENGLISH_PAPERS_HUB_FAQS, 'Frequently Asked Questions')}`;
  writePage('/paket-soal/english', renderPage({
    meta: enHubMeta,
    body: enBody,
    pageType: 'CollectionPage',
    dateModified: papersHubLastmod,
    jsonLd: [
      itemListLd(enHubMeta.title.split(' | ')[0], '/paket-soal/english', englishPapers.map((p) => ({ name: p.title, path: paperPath(p) }))),
      faqPageLd(ENGLISH_PAPERS_HUB_FAQS),
      breadcrumbLd(enCrumbs, '/paket-soal/english')
    ]
  }));
  addToSitemap('/paket-soal/english', '0.85', papersHubLastmod, {
    images: [{ src: enHubMeta.ogImage, title: enHubMeta.title, caption: enHubMeta.description }],
    alternates: enHubMeta.alternates
  });

  for (const subjMeta of Object.values(PAPER_SUBJECT_META)) {
    const subjPapers = getPapersBySubject(subjMeta.id);
    const meta = papersHubMeta(subjMeta.id);
    const crumbs = [...hubCrumbs, [subjMeta.label, subjectHubPath(subjMeta.id)]];
    const body = `
      ${breadcrumbHtml(crumbs)}
      <h1>Paket Soal ${escapeHtml(subjMeta.label)} — ${escapeHtml(ORGANIZATION.name)}</h1>
      <p>${escapeHtml(meta.description)}</p>
      ${subjPapers.length ? renderPacketList(subjPapers) : `<p>Belum ada paket soal di kategori ${escapeHtml(subjMeta.label)}. <a href="/paket-soal">Lihat semua Paket Soal</a>.</p>`}
      ${faqSectionHtml(PAPERS_HUB_FAQS, 'Pertanyaan Umum Paket Soal')}`;
    writePage(meta.path, renderPage({
      meta,
      body,
      pageType: 'CollectionPage',
      dateModified: papersHubLastmod,
      jsonLd: [
        itemListLd(`Paket Soal ${subjMeta.label}`, meta.path, subjPapers.map((p) => ({ name: p.title, path: paperPath(p) }))),
        faqPageLd(PAPERS_HUB_FAQS),
        breadcrumbLd(crumbs, meta.path)
      ]
    }));
    if (subjPapers.length > 0) {
      addToSitemap(meta.path, '0.8', papersHubLastmod, {
        images: [{ src: meta.ogImage, title: meta.title, caption: meta.description }]
      });
    }
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

    writeMdTwin(meta.path, mdPacket(paper));

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

    const paperImages = [];
    const packetQuestionsForLd = [];

    for (const q of paper.questions || []) {
      for (const f of q.figures || []) {
        paperImages.push({ src: f.src, title: f.caption || q.title, caption: f.alt });
      }
      for (const pt of q.parts || []) {
        for (const f of pt.figures || []) {
          paperImages.push({ src: f.src, title: f.caption || q.title, caption: f.alt });
        }
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

        const parsed = parsePaperPart(pt);
        packetQuestionsForLd.push({
          question: `${q.title} — ${q.stem} (${pt.label}) ${parsed.stemPrompt || pt.prompt}`,
          options: parsed.kind === 'mcq' ? parsed.options : [],
          correctAnswer: parsed.kind === 'mcq' ? parsed.correctKey : undefined,
          answer: pt.answer,
          explanation: `${pt.principle} ${pt.solution}`
        });
      }
    }

    const crumbs = [['Beranda', '/'], ['Paket Soal', '/paket-soal'], [subjLabel, subjectHubPath(paper.subject)], [paper.title, meta.path]];
    const constsHtml = paper.constants?.length
      ? `<section class="paper-constants-box"><h2>${paper.lang === 'en' ? 'Given Constants' : 'Konstanta'}</h2><ul>${paper.constants.map((c) => `<li>${renderMath(c, false)}</li>`).join('')}</ul></section>`
      : '';
    const qsHtml = paper.questions.map((q) => {
      const figsHtml = (q.figures || []).map((f) => `<figure>${imgTag(f.src, f.alt)}<figcaption>${escapeHtml(f.caption)}</figcaption></figure>`).join('\n');
      const partsHtml = q.parts.map((pt) => {
        const ptFigsHtml = (pt.figures || []).map((f) => `<figure>${imgTag(f.src, f.alt)}<figcaption>${escapeHtml(f.caption)}</figcaption></figure>`).join('\n');
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

    const paperFaqs = getPaperFaqs(paper, info);

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
      breadcrumbLd(crumbs, meta.path)
    ].filter(Boolean);

    writePage(meta.path, renderPage({
      meta: { ...meta, markdownPath: mdRelPath },
      body,
      dateModified: pLastmod,
      jsonLd: ld
    }));
    addToSitemap(meta.path, '0.8', pLastmod, {
      images: [
        ...paperImages,
        { src: meta.ogImage, title: paper.title, caption: meta.description }
      ]
    });
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
    .replace('</head>', `    <meta name="robots" content="noindex, follow" />\n    <link rel="canonical" href="${fullTarget}" />\n    <meta http-equiv="refresh" content="0;url=${targetPath}" />\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root"><p>Materi tersedia di <a href="${targetPath}">${fullTarget}</a>.</p></div>`);
  writePage(oldPath, html);
}

// ---------------------------------------------------------------------------
// Kurikulum: Hub Mata Pelajaran (/matematika, /ipa, /fisika, /kimia, /biologi) & Kelas/Bab
// ---------------------------------------------------------------------------
function gradeSourceFile(subject, grade) {
  if (subject === 'matematika') return `src/data/matematika/grade${grade}.js`;
  if (subject === 'ipa') return grade >= 10 ? `src/data/fisika/grade${grade}.js` : `src/data/ipa/grade${grade}.js`;
  return `src/data/${subject}/grade${grade}.js`;
}

const kurikulumIndexEntries = [];

function renderSubjectHub(subjectKey, grades) {
  const hubInfo = subjectHubMeta(subjectKey);
  const faqs = getSubjectHubFaqs(subjectKey);
  const crumbs = [['Beranda', '/'], [hubInfo.name, hubInfo.path]];
  const sourceFiles = grades.map((g) => gradeSourceFile(subjectKey === 'fisika' ? 'ipa' : subjectKey, g.grade));
  const hubLastmod = lastmodFor('src/components/SubjectHubPage.jsx', ...sourceFiles);

  const gradeCardsHtml = grades.map((g) => `
    <section>
      <h2><a href="${gradePath(g.grade, subjectKey)}">${subjectKey === 'ipa' ? 'IPA' : hubInfo.name.replace(/\s+(SMA|Terpadu)$/i, '')} Kelas ${g.grade} ${levelLabel(g.grade)}</a> (${g.chapters.length} bab)</h2>
      ${gradeToc(g.chapters, (c) => chapterPath(g.grade, c.id, subjectKey))}
    </section>`).join('\n');

  const body = `
    ${breadcrumbHtml(crumbs)}
    <h1>Materi &amp; Latihan ${escapeHtml(hubInfo.name)} (${escapeHtml(hubInfo.levelText)})</h1>
    <p>${escapeHtml(hubInfo.description)}</p>
    <p><a href="/paket-soal/${subjectKey}">Paket Soal ${escapeHtml(hubInfo.name)}</a> · <a href="/rumus">Kumpulan Rumus</a> · <a href="/daftar-isi">Daftar Isi</a></p>
    ${gradeCardsHtml}
    ${faqSectionHtml(faqs, `Pertanyaan Umum ${hubInfo.name}`)}`;

  const courses = grades.map((g) => {
    const gm = gradeMeta(g.grade, subjectKey);
    return {
      name: gm.title.split(' | ')[0],
      description: gm.description,
      path: gm.path
    };
  });

  writePage(hubInfo.path, renderPage({
    meta: hubInfo,
    body,
    pageType: 'CollectionPage',
    dateModified: hubLastmod,
    jsonLd: [
      courseListLd(courses),
      faqPageLd(faqs),
      breadcrumbLd(crumbs, hubInfo.path)
    ].filter(Boolean)
  }));
  addToSitemap(hubInfo.path, '0.9', hubLastmod, {
    images: [{ src: hubInfo.ogImage, title: hubInfo.title, caption: hubInfo.description }]
  });
}

renderSubjectHub('matematika', GRADES);
renderSubjectHub('ipa', IPA.filter((g) => g.grade <= 9));
renderSubjectHub('fisika', IPA.filter((g) => g.grade >= 10));
renderSubjectHub('kimia', KIMIA);
renderSubjectHub('biologi', BIOLOGI);

function renderCurriculum(subject, grades) {
  for (const g of grades) {
    const displaySubjKey = subject === 'ipa' && g.grade >= 10 ? 'fisika' : subject;
    const hubInfo = subjectHubMeta(displaySubjKey);
    const name = subjectDisplayName(subject, g.grade);
    const lvl = levelLabel(g.grade);
    const phase = g.phase || PHASE[g.grade] || '';
    const crumbsBase = [['Beranda', '/'], [hubInfo.name, hubInfo.path], [`${name} Kelas ${g.grade}`, gradePath(g.grade, subject)]];
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
      pageType: 'CollectionPage',
      dateModified: gLastmod,
      jsonLd: [
        courseNodeLd({
          name: gMeta.title.split(' | ')[0],
          description: gMeta.description,
          pagePath: gMeta.path,
          educationalLevel: `Kelas ${g.grade} ${lvl} (${phase})`,
          chapters: g.chapters
        }),
        itemListLd(`${name} Kelas ${g.grade} ${lvl}`, gMeta.path, g.chapters.map((c) => ({ name: c.title, path: chapterPath(g.grade, c.id) }))),
        breadcrumbLd(crumbsBase, gMeta.path)
      ]
    }));
    addToSitemap(gMeta.path, '0.8', gLastmod, {
      images: [{ src: gMeta.ogImage, title: gMeta.title, caption: gMeta.description }]
    });
    if (subject === 'ipa' && g.grade >= 10) {
      writeRedirectStub(`/ipa/kelas-${g.grade}`, gMeta.path, gMeta.title.split(' | ')[0]);
    }

    for (const ch of g.chapters) {
      const meta = chapterMeta(g.grade, ch);
      const mdRelPath = `${meta.path}.md`;
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
        ${siblingLinks(g.chapters, ch.id, (c) => chapterPath(g.grade, c.id))}
        <p><a href="${escapeHtml(mdRelPath)}">Versi Markdown + LaTeX (.md)</a></p>`;

      writeMdTwin(meta.path, mdChapter(
        ch.title,
        `${name} Kelas ${g.grade} ${lvl} (${phase})`,
        `${SITE_URL}${meta.path}`,
        ch
      ));

      kurikulumIndexEntries.push({
        id: ch.id,
        title: ch.title,
        subject: displaySubjKey,
        subjectLabel: name,
        grade: g.grade,
        level: lvl,
        url: `${SITE_URL}${meta.path}`,
        markdownUrl: `${SITE_URL}${mdRelPath}`,
        formulaCount: ch.summary?.keyFormulas?.length || 0,
        questionCount: ch.questions?.length || 0,
        lastmod: gLastmod
      });

      const qLd = quizLd({ meta, questions: ch.questions || [], educationalLevel: `Kelas ${g.grade} ${lvl} (${phase})`, subject: name, dateModified: gLastmod });
      const ld = [
        learningResourceLd({ meta, educationalLevel: `Kelas ${g.grade} ${lvl} (${phase})`, subject: name, dateModified: gLastmod }),
        ...(qLd ? [qLd] : []),
        breadcrumbLd(crumbs, meta.path)
      ];
      writePage(meta.path, renderPage({
        meta: { ...meta, markdownPath: mdRelPath },
        body,
        dateModified: gLastmod,
        jsonLd: ld
      }));
      addToSitemap(meta.path, '0.7', gLastmod, {
        images: [{ src: meta.ogImage, title: ch.title, caption: meta.description }]
      });
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
  const olimpLastmod = lastmodFor('src/components/OlimpiadeHubPage.jsx', 'src/data/papers/index.js');
  const crumbs = [['Beranda', '/'], ['Olimpiade', OLIMPIADE_HUB_META.path]];

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

  const subjectLinks = Object.keys(PAPER_SUBJECT_META)
    .filter((id) => id.startsWith('olimpiade-'))
    .map((id) => {
      const cnt = PUBLISHED_PAPERS.filter((p) => p.subject === id).length;
      if (!cnt) return '';
      const label = PAPER_SUBJECT_META[id]?.label || id;
      return `<li><a href="${subjectHubPath(id)}">${escapeHtml(label)} (${cnt} paket)</a></li>`;
    })
    .filter(Boolean)
    .join('');

  const body = `
    ${breadcrumbHtml(crumbs)}
    <h1>Olimpiade &amp; Kompetisi</h1>
    <p>${escapeHtml(OLIMPIADE_HUB_META.description)}</p>
    ${subjectLinks ? `<nav class="seo-chapters" aria-label="Olimpiade per Bidang"><h2>Olimpiade per Bidang</h2><ul>${subjectLinks}</ul></nav>` : ''}
    ${blocks}
    ${faqSectionHtml(OLIMPIADE_HUB_FAQS)}
    <p><a href="/paket-soal">Semua paket soal</a> · <a href="/tentang#prestasi">Arsip prestasi siswa</a></p>`;
  const olimpListItems = OLYMPIAD_COMPETITIONS.map((c) => ({ name: c.label, path: c.path }));
  writePage(OLIMPIADE_HUB_META.path, renderPage({
    meta: OLIMPIADE_HUB_META,
    body,
    pageType: 'CollectionPage',
    dateModified: olimpLastmod,
    jsonLd: [
      DATASET_NODE,
      itemListLd('Pusat Olimpiade & Kompetisi', OLIMPIADE_HUB_META.path, olimpListItems),
      faqPageLd(OLIMPIADE_HUB_FAQS),
      breadcrumbLd(crumbs, OLIMPIADE_HUB_META.path)
    ].filter(Boolean)
  }));
  addToSitemap(OLIMPIADE_HUB_META.path, '0.9', olimpLastmod, {
    images: [{ src: OLIMPIADE_HUB_META.ogImage, title: OLIMPIADE_HUB_META.title, caption: OLIMPIADE_HUB_META.description }]
  });

  for (const c of OLYMPIAD_COMPETITIONS) {
    const papers = PUBLISHED_PAPERS.filter((p) => c.competitions.includes(p.competition));
    if (!c.amc && papers.length === 0) continue;
    const cMeta = olympiadCompetitionMeta(c, papers.length);
    const cLastmod = papers.length
      ? papers.reduce((max, p) => { const d = paperLastmod(p); return d > max ? d : max; }, '')
      : olimpLastmod;
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
      pageType: 'CollectionPage',
      dateModified: cLastmod || olimpLastmod,
      jsonLd: [
        itemListLd(c.label, c.path, listEntries),
        faqPageLd(c.faqs || []),
        breadcrumbLd(cCrumbs, c.path)
      ].filter(Boolean)
    }));
    addToSitemap(c.path, '0.85', cLastmod || olimpLastmod, {
      images: [{ src: cMeta.ogImage, title: cMeta.title, caption: cMeta.description }]
    });
  }
}

// ---------------------------------------------------------------------------
// Olimpiade AMC
// ---------------------------------------------------------------------------
for (const d of AMC) {
  const amcLastmod = lastmodFor(`src/data/amc/amc${d.level}Data.js`, 'src/data/amc/amcMetadata.js');
  const levelInfo = AMC_LEVELS_METADATA.find((m) => m.level === d.level) || {};
  const crumbsBase = [['Beranda', '/'], ['Olimpiade', OLIMPIADE_HUB_META.path], [`Olimpiade AMC ${d.level}`, amcLevelPath(d.level)]];
  const lMeta = amcLevelMeta(d.level);
  const levelBody = `
    ${breadcrumbHtml(crumbsBase)}
    <h1>Persiapan Olimpiade AMC ${d.level}</h1>
    <p>${escapeHtml(levelInfo.subtitle || '')}${levelInfo.targetGrades ? ` · ${escapeHtml(levelInfo.targetGrades)}` : ''}</p>
    <ul>${d.chapters.map((c) => `<li><a href="${amcChapterPath(d.level, c.id)}">${escapeHtml(c.title)}</a>${c.domain ? ` (${escapeHtml(c.domain)})` : ''}</li>`).join('')}</ul>`;
  writePage(lMeta.path, renderPage({
    meta: lMeta,
    body: levelBody,
    pageType: 'CollectionPage',
    dateModified: amcLastmod,
    jsonLd: [
      courseNodeLd({
        name: lMeta.title.split(' | ')[0],
        description: lMeta.description,
        pagePath: lMeta.path,
        educationalLevel: `Olimpiade AMC ${d.level} (${levelInfo.targetGrades || ''})`,
        chapters: d.chapters
      }),
      breadcrumbLd(crumbsBase, lMeta.path)
    ]
  }));
  addToSitemap(lMeta.path, '0.7', amcLastmod, {
    images: [{ src: lMeta.ogImage, title: lMeta.title, caption: lMeta.description }]
  });

  for (const ch of d.chapters) {
    const meta = amcChapterMeta(d.level, ch);
    const mdRelPath = `${meta.path}.md`;
    const crumbs = [...crumbsBase, [ch.title, meta.path]];
    const body = `
      ${breadcrumbHtml(crumbs)}
      <h1>${escapeHtml(ch.title)}</h1>
      <p class="seo-subtitle">Olimpiade AMC ${d.level}${ch.domain ? ` · ${escapeHtml(ch.domain)}` : ''}</p>
      ${chapterBody(ch)}
      <section id="latihan-soal"><h2>Soal Latihan Kompetisi (${ch.questions?.length || 0} soal)</h2>${questionList(ch.questions || [])}</section>
      ${siblingLinks(d.chapters, ch.id, (c) => amcChapterPath(d.level, c.id))}
      <p><a href="${escapeHtml(mdRelPath)}">Versi Markdown + LaTeX (.md)</a></p>`;

    writeMdTwin(meta.path, mdChapter(
      ch.title,
      `Olimpiade AMC ${d.level}${ch.domain ? ` — ${ch.domain}` : ''}`,
      `${SITE_URL}${meta.path}`,
      ch
    ));

    kurikulumIndexEntries.push({
      id: ch.id,
      title: ch.title,
      subject: `amc-${d.level}`,
      subjectLabel: `Olimpiade AMC ${d.level}`,
      grade: d.level === 8 ? 8 : d.level === 10 ? 10 : 12,
      level: d.level === 8 ? 'SMP' : 'SMA',
      url: `${SITE_URL}${meta.path}`,
      markdownUrl: `${SITE_URL}${mdRelPath}`,
      formulaCount: ch.summary?.keyFormulas?.length || 0,
      questionCount: ch.questions?.length || 0,
      lastmod: amcLastmod
    });

    const qLd = quizLd({ meta, questions: ch.questions || [], educationalLevel: `Olimpiade AMC ${d.level}`, subject: 'Matematika Olimpiade', dateModified: amcLastmod });
    const ld = [
      learningResourceLd({ meta, educationalLevel: `Olimpiade AMC ${d.level}`, subject: 'Matematika Olimpiade', dateModified: amcLastmod }),
      ...(qLd ? [qLd] : []),
      breadcrumbLd(crumbs, meta.path)
    ];
    writePage(meta.path, renderPage({
      meta: { ...meta, markdownPath: mdRelPath },
      body,
      dateModified: amcLastmod,
      jsonLd: ld
    }));
    addToSitemap(meta.path, '0.6', amcLastmod, {
      images: [{ src: meta.ogImage, title: ch.title, caption: meta.description }]
    });
  }
}

fs.writeFileSync(
  path.join(DIST, 'datasets/kurikulum-index.json'),
  JSON.stringify(
    {
      name: `${SITE_NAME} Open Kurikulum & AMC Chapter Index`,
      publisher: ORGANIZATION.legalName,
      siteUrl: SITE_URL,
      license: ORGANIZATION.licenseUrl,
      generatedAt: TODAY,
      totalEntries: kurikulumIndexEntries.length,
      chapters: kurikulumIndexEntries
    },
    null,
    2
  )
);

// ---------------------------------------------------------------------------
// Daftar isi per topik
// ---------------------------------------------------------------------------
{
  const topicLastmod = lastmodFor('src/data/topics.js', 'src/components/TopicIndexPage.jsx');
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
  writePage(TOPIC_INDEX_META.path, renderPage({
    meta: TOPIC_INDEX_META,
    body,
    pageType: 'CollectionPage',
    dateModified: topicLastmod,
    jsonLd: [breadcrumbLd(crumbs, TOPIC_INDEX_META.path)]
  }));
  addToSitemap(TOPIC_INDEX_META.path, '0.9', topicLastmod);
}

// ---------------------------------------------------------------------------
// Ensiklopedia Rumus (/rumus)
// ---------------------------------------------------------------------------
{
  const formulaLastmod = lastmodFor('src/components/FormulaIndexPage.jsx', 'src/data/chapterIndex.js');
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
    ${renderFormulaGroup('Olimpiade Matematika AMC', amcItems)}
    ${faqSectionHtml(FORMULA_INDEX_FAQS, 'Pertanyaan Umum Kumpulan Rumus')}`;
  const definedTermSetLd = {
    '@type': 'DefinedTermSet',
    name: FORMULA_INDEX_META.title.split(' | ')[0],
    description: FORMULA_INDEX_META.description,
    url: `${SITE_URL}${FORMULA_INDEX_META.path}`,
    inLanguage: 'id',
    isAccessibleForFree: true,
    license: ORGANIZATION.licenseUrl,
    creator: { '@id': ORG_ID }
  };
  writePage(FORMULA_INDEX_META.path, renderPage({
    meta: FORMULA_INDEX_META,
    body,
    pageType: 'CollectionPage',
    dateModified: formulaLastmod,
    jsonLd: [definedTermSetLd, faqPageLd(FORMULA_INDEX_FAQS), breadcrumbLd(crumbs, FORMULA_INDEX_META.path)].filter(Boolean)
  }));
  addToSitemap(FORMULA_INDEX_META.path, '0.9', formulaLastmod, {
    images: [{ src: FORMULA_INDEX_META.ogImage, title: FORMULA_INDEX_META.title, caption: FORMULA_INDEX_META.description }]
  });
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
  const tkaLastmod = lastmodFor('src/data/tka.js', 'src/utils/tkaBuilder.js', 'src/components/TkaPage.jsx');
  const homeBody = `${breadcrumbHtml(homeCrumbs)}<h1>Latihan TKA Matematika, IPA &amp; Fisika (SD, SMP, SMA)</h1>
    <p>${escapeHtml(homeMeta.description)}</p>
    ${TKA_TESTS.map((test) => `<section><h2>${escapeHtml(test.title)}</h2><p>${escapeHtml(test.audience)}</p><p>${escapeHtml(test.intro)}</p>${elementTable(test)}
      <ul>${TKA_PACKETS.map((p) => `<li><a href="${tkaPath(test.id, p)}">${escapeHtml(test.title)} Paket ${p.toUpperCase()}</a></li>`).join('')}</ul></section>`).join('')}
    ${faqSectionHtml(TKA_HUB_FAQS, 'Pertanyaan Umum Latihan TKA')}
    <p>Muatan dan cakupan elemen mengacu pada kerangka TKA Pusmendik Kemendikdasmen. Paket ini adalah latihan dari ${escapeHtml(SITE_NAME)}, bukan soal resmi.</p>`;
  const tkaList = TKA_TESTS.flatMap((test) => TKA_PACKETS.map((p) => ({ name: `${test.title} Paket ${p.toUpperCase()}`, path: tkaPath(test.id, p) })));
  writePage('/tka', renderPage({
    meta: homeMeta,
    body: homeBody,
    pageType: 'CollectionPage',
    dateModified: tkaLastmod,
    jsonLd: [
      itemListLd('Latihan TKA Matematika, IPA & Fisika', '/tka', tkaList),
      faqPageLd(TKA_HUB_FAQS),
      breadcrumbLd(homeCrumbs, '/tka')
    ].filter(Boolean)
  }));
  addToSitemap('/tka', '0.9', tkaLastmod, {
    images: [{ src: homeMeta.ogImage, title: homeMeta.title, caption: homeMeta.description }]
  });

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
      const qLd = quizLd({ meta, questions, educationalLevel: test.audience, subject: subjName, dateModified: tkaLastmod });
      const ld = [
        learningResourceLd({ meta, educationalLevel: test.audience, subject: subjName, dateModified: tkaLastmod }),
        ...(qLd ? [qLd] : []),
        breadcrumbLd(crumbs, meta.path)
      ];
      writePage(meta.path, renderPage({ meta, body, dateModified: tkaLastmod, jsonLd: ld }));
      addToSitemap(meta.path, '0.8', tkaLastmod, {
        images: [{ src: meta.ogImage, title: meta.title, caption: meta.description }]
      });
    }
  }
}

// ---------------------------------------------------------------------------
// llms.txt (ringkas & terstruktur) & llms-full.txt / llms-olimpiade.txt / llms-kurikulum.txt
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
    `- Versi Markdown + LaTeX bersih tersedia dengan menambahkan ekstensi \`.md\` pada URL paket soal maupun URL bab materi, misalnya: \`${SITE_URL}/paket-soal/olimpiade-inf/osnk-informatika-sma-simulasi-1.md\` atau \`${SITE_URL}/matematika/kelas-8/bab2-teorema-pythagoras.md\`.`,
    `- Indeks metadata paket soal JSON (${PUBLISHED_PAPERS.length} paket): ${SITE_URL}/datasets/paket-soal-index.json`,
    `- Korpus butir soal + kunci + prinsip + pembahasan JSONL lengkap: ${SITE_URL}/datasets/paket-soal-corpus.jsonl`,
    `- Indeks bab kurikulum & AMC JSON: ${SITE_URL}/datasets/kurikulum-index.json`,
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
    `- [Matematika (Kelas 4–12)](${SITE_URL}/matematika), [IPA (Kelas 4–9)](${SITE_URL}/ipa), [Fisika SMA](${SITE_URL}/fisika), [Kimia SMA](${SITE_URL}/kimia), [Biologi SMA](${SITE_URL}/biologi)`,
    `- [Olimpiade & Kompetisi](${SITE_URL}/olimpiade): Pusat OSN/OSK (9 bidang), AIME, AMC 8/10/12, SASMO, SMO, HKIMO, TIMO, SIMOC, IKMC, AMO, ASMOPSS, IMSO, CEMC, dan Seri Pembinaan.`,
    `- [Paket Soal Terstruktur](${SITE_URL}/paket-soal): Arsip ${PUBLISHED_PAPERS.length} paket soal Matematika, IPA, Fisika, Kimia, Biologi, UTBK-SNBT, Cambridge IGCSE & Olimpiade ber-rubrik dalam bahasa asli.`,
    `- [International & English Practice Papers](${SITE_URL}/paket-soal/english): Koleksi paket soal berbahasa Inggris & dwibahasa.`,
    `- [Open Dataset Index (JSON)](${SITE_URL}/datasets/paket-soal-index.json) · [Corpus (JSONL)](${SITE_URL}/datasets/paket-soal-corpus.jsonl) · [Kurikulum Index (JSON)](${SITE_URL}/datasets/kurikulum-index.json)`,
    `- [Program Bimbel](${SITE_URL}/program) · [Profil Pendiri (${FOUNDER.name})](${SITE_URL}/pendiri) · [Prestasi Siswa](${SITE_URL}/tentang#prestasi) · [Kontak & Lokasi](${SITE_URL}/kontak) · [Tentang](${SITE_URL}/tentang)`,
    `- [Daftar Isi per Topik](${SITE_URL}/daftar-isi) · [Kumpulan Rumus](${SITE_URL}/rumus) · [Latihan TKA](${SITE_URL}/tka)`,
    `- [Korpus Olimpiade (.txt)](${SITE_URL}/llms-olimpiade.txt) · [Korpus Kurikulum (.txt)](${SITE_URL}/llms-kurikulum.txt) · [Korpus Lengkap (.txt)](${SITE_URL}/llms-full.txt)`,
    ''
  ];

  if (PUBLISHED_PAPERS.length > 0) {
    llmsLines.push(`## Paket Soal Duta e-dukasi (${PUBLISHED_PAPERS.length} Paket · Tambah .md pada URL untuk Markdown + LaTeX)`);
    for (const p of PUBLISHED_PAPERS) {
      const info = formatPaperMeta(p);
      llmsLines.push(
        `- [${p.title}](${SITE_URL}${paperPath(p)}) — ${p.competition || PAPER_SUBJECT_META[p.subject]?.label || p.subject}, Kelas ${p.grade}, ${p.lang.toUpperCase()}, ${info.itemsLabel}: ${p.topic}`
      );
    }
    llmsLines.push('');
  }

  llmsLines.push('## Kurikulum Merdeka (Kelas 4–12, Tambah .md untuk Markdown + LaTeX)');
  for (const g of GRADES) {
    llmsLines.push(`- **Matematika Kelas ${g.grade} ${levelLabel(g.grade)}** (${SITE_URL}${gradePath(g.grade)}): ${g.chapters.map((ch) => `[${ch.title}](${SITE_URL}${chapterPath(g.grade, ch.id)})`).join(' · ')}`);
  }
  for (const g of IPA) {
    const subjName = subjectDisplayName('ipa', g.grade);
    llmsLines.push(`- **${subjName} Kelas ${g.grade} ${levelLabel(g.grade)}** (${SITE_URL}${gradePath(g.grade, 'ipa')}): ${g.chapters.map((ch) => `[${ch.title}](${SITE_URL}${chapterPath(g.grade, ch.id)})`).join(' · ')}`);
  }
  for (const g of KIMIA) {
    llmsLines.push(`- **Kimia Kelas ${g.grade} SMA** (${SITE_URL}${gradePath(g.grade, 'kimia')}): ${g.chapters.map((ch) => `[${ch.title}](${SITE_URL}${chapterPath(g.grade, ch.id)})`).join(' · ')}`);
  }
  for (const g of BIOLOGI) {
    llmsLines.push(`- **Biologi Kelas ${g.grade} SMA** (${SITE_URL}${gradePath(g.grade, 'biologi')}): ${g.chapters.map((ch) => `[${ch.title}](${SITE_URL}${chapterPath(g.grade, ch.id)})`).join(' · ')}`);
  }
  llmsLines.push('');

  llmsLines.push('## Olimpiade & Kompetisi');
  for (const c of OLYMPIAD_COMPETITIONS) {
    const n = PUBLISHED_PAPERS.filter((p) => c.competitions.includes(p.competition)).length;
    if (n || c.amc) llmsLines.push(`- [${c.label}](${SITE_URL}${c.path}) (${n} paket soal): ${c.blurb}`);
  }
  for (const d of AMC) {
    llmsLines.push(`- **AMC ${d.level}** (${SITE_URL}${amcLevelPath(d.level)}): ${d.chapters.map((ch) => `[${ch.title}](${SITE_URL}${amcChapterPath(d.level, ch.id)})`).join(' · ')}`);
  }
  llmsLines.push('');

  llmsLines.push('## Paket Latihan TKA');
  for (const { test, packet, meta, questions } of tkaGeneratedPackets) {
    llmsLines.push(`- [${test.title} Paket ${packet.toUpperCase()}](${SITE_URL}${meta.path}): ${test.audience}, ${questions.length} soal.`);
  }

  fs.writeFileSync(path.join(DIST, 'llms.txt'), `${llmsLines.join('\n')}\n`);

  const fullParts = [
    `# ${SITE_NAME} (${ORGANIZATION.legalName}) — Korpus Materi, Paket Soal, Rumus & Bank Soal`,
    `Sumber: ${SITE_URL}`,
    `Pendiri: ${FOUNDER.name} (${FOUNDER.formalName}) · Penyusun: ${AUTHOR.name}`,
    `Alamat: ${ORGANIZATION.fullAddress} · WhatsApp: ${ORGANIZATION.whatsappDisplay}`,
    `Lisensi: ${ORGANIZATION.licenseName} (${ORGANIZATION.licenseUrl})`,
    ''
  ];

  for (const p of PUBLISHED_PAPERS) fullParts.push(mdPacket(p));
  for (const g of GRADES) {
    for (const ch of g.chapters) {
      fullParts.push(mdChapter(ch.title, `Matematika Kelas ${g.grade} ${levelLabel(g.grade)} (${g.phase || PHASE[g.grade] || ''})`, `${SITE_URL}${chapterPath(g.grade, ch.id)}`, ch));
    }
  }
  for (const g of IPA) {
    const subjName = subjectDisplayName('ipa', g.grade);
    for (const ch of g.chapters) {
      fullParts.push(mdChapter(ch.title, `${subjName} Kelas ${g.grade} ${levelLabel(g.grade)} (${g.phase || ''})`, `${SITE_URL}${chapterPath(g.grade, ch.id)}`, ch));
    }
  }
  for (const [subjName, list] of [['Kimia', KIMIA], ['Biologi', BIOLOGI]]) {
    for (const g of list) {
      for (const ch of g.chapters) {
        fullParts.push(mdChapter(ch.title, `${subjName} Kelas ${g.grade} ${levelLabel(g.grade)} (${g.phase || ''})`, `${SITE_URL}${chapterPath(g.grade, ch.id)}`, ch));
      }
    }
  }
  for (const d of AMC) {
    for (const ch of d.chapters) {
      fullParts.push(mdChapter(ch.title, `Olimpiade AMC ${d.level}${ch.domain ? ` — ${ch.domain}` : ''}`, `${SITE_URL}${amcChapterPath(d.level, ch.id)}`, ch));
    }
  }
  fs.writeFileSync(path.join(DIST, 'llms-full.txt'), fullParts.join('\n'));

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
      olimpParts.push(mdChapter(ch.title, `Olimpiade AMC ${d.level}${ch.domain ? ` — ${ch.domain}` : ''}`, `${SITE_URL}${amcChapterPath(d.level, ch.id)}`, ch));
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
// sitemap.xml (image + xhtml:link hreflang) & W3C-valid rss.xml
// ---------------------------------------------------------------------------
const sitemapXmlEntries = sitemap.map((u) => {
  const altXml = (u.alternates || []).map((a) =>
    `\n    <xhtml:link rel="alternate" hreflang="${escapeXml(a.hreflang)}" href="${escapeXml(`${SITE_URL}${a.path === '/' ? '/' : a.path}`)}" />`
  ).join('');
  const imgXml = (u.images || []).map((im) => {
    const loc = `${SITE_URL}${im.src.startsWith('/') ? im.src : `/${im.src}`}`;
    const titleTag = im.title ? `<image:title>${escapeXml(im.title)}</image:title>` : '';
    const capTag = im.caption ? `<image:caption>${escapeXml(im.caption)}</image:caption>` : '';
    return `\n    <image:image><image:loc>${escapeXml(loc)}</image:loc>${titleTag}${capTag}</image:image>`;
  }).join('');
  return `  <url><loc>${escapeXml(u.loc)}</loc><lastmod>${u.lastmod || TODAY}</lastmod><priority>${u.priority}</priority>${altXml}${imgXml}</url>`;
});

fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapXmlEntries.join('\n')}
</urlset>
`);

const sortedRssPapers = PUBLISHED_PAPERS.slice().sort((a, b) => {
  const da = paperLastmod(a);
  const db = paperLastmod(b);
  if (db !== da) return db.localeCompare(da);
  return (extractPaperYear(b) || 0) - (extractPaperYear(a) || 0);
}).slice(0, 50);

const rssItems = sortedRssPapers.map((p) => {
  const link = `${SITE_URL}${paperPath(p)}`;
  const info = formatPaperMeta(p);
  const d = paperLastmod(p);
  const cat = PAPER_SUBJECT_META[p.subject]?.label || p.subject;
  return `  <item>
    <title>${escapeXml(p.title)}</title>
    <link>${escapeXml(link)}</link>
    <guid isPermaLink="true">${escapeXml(link)}</guid>
    <category>${escapeXml(cat)}</category>
    <pubDate>${new Date(`${d}T00:00:00Z`).toUTCString()}</pubDate>
    <description>${escapeXml(`${info.tag} · ${info.itemsLabel} · ${p.topic}`)}</description>
  </item>`;
}).join('\n');

fs.writeFileSync(path.join(DIST, 'rss.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(SITE_NAME)} — Paket Soal &amp; Olimpiade</title>
  <link>${SITE_URL}/paket-soal</link>
  <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
  <description>${escapeXml(HOME_META.description)}</description>
  <language>id</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${rssItems}
</channel>
</rss>
`);

console.log(`Prerender selesai: ${sitemap.length} halaman + 5 subject hubs + .md twins + datasets + llms*.txt + rss.xml + sitemap.xml`);
