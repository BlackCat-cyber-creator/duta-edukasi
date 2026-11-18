/**
 * Prerender halaman publik untuk mesin pencari dan AI/LLM (dijalankan setelah `vite build`).
 *
 * Menghasilkan HTML statis berisi materi lengkap (KaTeX htmlAndMathml), data terstruktur JSON-LD
 * (`EducationalOrganization`, `LocalBusiness`, `Person`, `LearningResource`, `Quiz`, `FAQPage`,
 * `BreadcrumbList`), indeks `llms.txt`, korpus lengkap `llms-full.txt`, serta `sitemap.xml`.
 *
 * Keluaran utama:
 *   dist/index.html, dist/app.html
 *   dist/tentang.html, dist/program.html, dist/pendiri.html, dist/prestasi.html, dist/kontak.html
 *   dist/paket-soal.html, dist/paket-soal/<mapel>.html, dist/paket-soal/<mapel>/<slug>.html
 *   dist/rumus.html, dist/daftar-isi.html, dist/tka.html, dist/tka/<paket>.html
 *   dist/matematika/kelas-N[.html|/<bab>.html], dist/ipa/kelas-N[.html|/<bab>.html], dist/olimpiade/amc-N[.html|/<bab>.html]
 *   dist/llms.txt, dist/llms-full.txt, dist/sitemap.xml
 */
import fs from 'fs';
import path from 'path';
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
  subjectHubPath
} from '../src/data/papers/index.js';
import { ipaGrade4Data } from '../src/data/ipa/grade4.js';
import { ipaGrade5Data } from '../src/data/ipa/grade5.js';
import { ipaGrade6Data } from '../src/data/ipa/grade6.js';
import { ipaGrade7Data } from '../src/data/ipa/grade7.js';
import { ipaGrade8Data } from '../src/data/ipa/grade8.js';
import { ipaGrade9Data } from '../src/data/ipa/grade9.js';
import { ipaGrade10Data } from '../src/data/ipa/grade10.js';
import { ipaGrade11Data } from '../src/data/ipa/grade11.js';
import { ipaGrade12Data } from '../src/data/ipa/grade12.js';
import { grade4Data } from '../src/data/grades/grade4.js';
import { grade5Data } from '../src/data/grades/grade5.js';
import { grade6Data } from '../src/data/grades/grade6.js';
import { grade7Data } from '../src/data/grades/grade7.js';
import { grade8Data } from '../src/data/grades/grade8.js';
import { grade9Data } from '../src/data/grades/grade9.js';
import { grade10Data } from '../src/data/grades/grade10.js';
import { grade11Data } from '../src/data/grades/grade11.js';
import { grade12Data } from '../src/data/grades/grade12.js';
import { amc8Data } from '../src/data/amc/amc8Data.js';
import { amc10Data } from '../src/data/amc/amc10Data.js';
import { amc12Data } from '../src/data/amc/amc12Data.js';
import { getCp2025Note } from '../src/data/cp2025Mapping.js';
import { SITE_URL, SITE_NAME, gradePath, chapterPath, amcLevelPath, amcChapterPath } from '../src/utils/seoRoutes.js';
import {
  HOME_META,
  ABOUT_META,
  PROGRAM_META,
  FOUNDER_META,
  PRESTASI_META,
  CONTACT_META,
  TOPIC_INDEX_META,
  FORMULA_INDEX_META,
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
import { AUTHOR, ABOUT, FOUNDER, ORGANIZATION, PROGRAMS, FAQS, PRESTASI_DATA } from '../src/data/siteInfo.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '../dist');
const GRADES = [grade4Data, grade5Data, grade6Data, grade7Data, grade8Data, grade9Data, grade10Data, grade11Data, grade12Data];
const IPA = [ipaGrade4Data, ipaGrade5Data, ipaGrade6Data, ipaGrade7Data, ipaGrade8Data, ipaGrade9Data, ipaGrade10Data, ipaGrade11Data, ipaGrade12Data].filter((g) => g.chapters.length > 0);
const AMC = [amc8Data, amc10Data, amc12Data];
const PHASE = Object.fromEntries(GRADE_METADATA.map((g) => [g.grade, g.phase]));

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
  <p><strong>${escapeHtml(ORGANIZATION.name)}</strong> (${escapeHtml(ORGANIZATION.legalName)}) · ${escapeHtml(ORGANIZATION.shortAddress)} · <a href="${escapeHtml(ORGANIZATION.whatsappUrl)}">WA ${escapeHtml(ORGANIZATION.whatsappDisplay)}</a> · Disusun oleh <a href="/tentang">${escapeHtml(AUTHOR.name)}</a>.</p>
  <p><a href="/paket-soal">Paket Soal</a> · <a href="/program">Program</a> · <a href="/pendiri">Pendiri</a> · <a href="/prestasi">Prestasi</a> · <a href="/kontak">Kontak</a> · <a href="/daftar-isi">Daftar isi</a> · <a href="/rumus">Kumpulan rumus</a> · <a href="/tka">Latihan TKA</a> · Lisensi <a href="${escapeHtml(ORGANIZATION.licenseUrl)}">${escapeHtml(ORGANIZATION.licenseName)}</a></p>
</footer>`;

function renderPage({ meta, body, jsonLd = [] }) {
  const url = `${SITE_URL}${meta.path === '/' ? '/' : meta.path}`;
  const docLang = meta.lang || 'id';
  const ogLocale = docLang === 'en' ? 'en_US' : 'id_ID';
  const head = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:locale" content="${ogLocale}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE_URL}/brand/og-default.png" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
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
  image: `${SITE_URL}/brand/og-default.png`,
  telephone: ORGANIZATION.telephone,
  address: {
    '@type': 'PostalAddress',
    ...ORGANIZATION.address
  },
  areaServed: 'Pontianak, Kalimantan Barat',
  hasMap: ORGANIZATION.mapsUrl,
  founder: FOUNDER_LD,
  sameAs: ORGANIZATION.sameAs,
  license: ORGANIZATION.licenseUrl
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

const learningResourceLd = ({ meta, educationalLevel, subject = 'Matematika', inLanguage = 'id' }) => ({
  '@context': 'https://schema.org',
  '@type': 'LearningResource',
  name: meta.title.split(' | ')[0],
  description: meta.description,
  url: `${SITE_URL}${meta.path}`,
  inLanguage,
  isAccessibleForFree: true,
  license: ORGANIZATION.licenseUrl,
  educationalLevel,
  learningResourceType: ['Ringkasan materi', 'Rumus kunci', 'Contoh soal', 'Latihan soal'],
  about: { '@type': 'Thing', name: subject },
  provider: { '@type': 'EducationalOrganization', name: SITE_NAME, url: SITE_URL },
  author: PERSON_LD
});

function quizLd({ meta, questions = [], educationalLevel, subject = 'Matematika', inLanguage = 'id' }) {
  if (!questions.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: `Latihan Soal: ${meta.title.split(' | ')[0]}`,
    description: meta.description,
    url: `${SITE_URL}${meta.path}#latihan-soal`,
    inLanguage,
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
    ? `<h2>Paket Soal Terkait</h2><ul>${papers.map((p) => `<li><a href="${paperPath(p)}">${escapeHtml(p.title)}</a> (${p.lang === 'en' ? 'English' : 'Indonesia'} · ${p.totalMarks} marks)</li>`).join('')}</ul>`
    : '';
  const chBlock = items.length
    ? `<h2>Materi Terkait</h2><ul>${items.map((c) => `<li><a href="${c.path}">${escapeHtml(c.title)}</a> (${escapeHtml(c.label)})</li>`).join('')}</ul>`
    : '';
  return `<aside class="seo-related">${papersBlock}${chBlock}</aside>`;
};

const sitemap = [];
const addToSitemap = (p, priority) => sitemap.push({ loc: `${SITE_URL}${p === '/' ? '/' : p}`, priority });

// ---------------------------------------------------------------------------
// Beranda
// ---------------------------------------------------------------------------
{
  const gradeList = GRADES.map((g) => `<li><a href="${gradePath(g.grade)}"><strong>Matematika Kelas ${g.grade} ${levelLabel(g.grade)}</strong></a> — ${g.chapters.map((c) => `<a href="${chapterPath(g.grade, c.id)}">${escapeHtml(c.title)}</a>`).join(', ')}</li>`).join('\n');
  const ipaList = IPA.map((g) => `<li><a href="${gradePath(g.grade, 'ipa')}"><strong>${subjectDisplayName('ipa', g.grade)} Kelas ${g.grade} ${levelLabel(g.grade)}</strong></a> — ${g.chapters.map((c) => `<a href="${chapterPath(g.grade, c.id)}">${escapeHtml(c.title)}</a>`).join(', ')}</li>`).join('\n');
  const amcList = AMC.map((d) => `<li><a href="${amcLevelPath(d.level)}"><strong>AMC ${d.level}</strong></a> — ${d.chapters.map((c) => `<a href="${amcChapterPath(d.level, c.id)}">${escapeHtml(c.title)}</a>`).join(', ')}</li>`).join('\n');
  const papersList = PUBLISHED_PAPERS.map((p) => `<li><a href="${paperPath(p)}"><strong>${escapeHtml(p.title)}</strong></a> (${p.lang === 'en' ? 'English' : 'Indonesia'} · ${p.totalMarks} marks)</li>`).join('\n');

  const body = `
    <h1>${escapeHtml(ORGANIZATION.name)} — Belajar Matematika, IPA &amp; Fisika Kelas 4–12, Paket Soal &amp; Olimpiade</h1>
    <p>${escapeHtml(HOME_META.description)}</p>
    <p>Didirikan oleh <a href="/pendiri">${escapeHtml(FOUNDER.name)}</a> di ${escapeHtml(ORGANIZATION.shortAddress)} · Portal belajar disusun oleh <a href="/tentang">${escapeHtml(AUTHOR.name)}</a>.</p>
    <p><a href="/paket-soal">Paket Soal Terstruktur</a> · <a href="/program">Program Bimbel</a> · <a href="/prestasi">Prestasi Siswa</a> · <a href="/daftar-isi">Daftar Isi Topik</a> · <a href="/rumus">Kumpulan Rumus</a> · <a href="/tka">Latihan TKA</a> · <a href="/kontak">Kontak (${escapeHtml(ORGANIZATION.whatsappDisplay)})</a></p>
    ${papersList ? `<section><h2>Paket Soal Terstruktur Duta e-dukasi</h2><ul>${papersList}</ul></section>` : ''}
    <section><h2>Matematika Kurikulum Merdeka (Kelas 4–12)</h2><ul>${gradeList}</ul></section>
    ${ipaList ? `<section><h2>IPA &amp; Fisika Kurikulum Merdeka (Kelas 4–12)</h2><ul>${ipaList}</ul></section>` : ''}
    <section><h2>Olimpiade Matematika AMC</h2><ul>${amcList}</ul></section>`;
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
      author: PERSON_LD
    }
  ];
  writePage('/', renderPage({ meta: HOME_META, body, jsonLd: ld }));
  addToSitemap('/', '1.0');
}

// ---------------------------------------------------------------------------
// Halaman Informasi Bimbel (/tentang, /program, /pendiri, /prestasi, /kontak)
// ---------------------------------------------------------------------------
{
  const body = `
    ${breadcrumbHtml([['Beranda', '/'], ['Tentang', ABOUT_META.path]])}
    <h1>${escapeHtml(ABOUT.title)}</h1>
    <p><strong>${escapeHtml(ABOUT.intro)}</strong></p>
    ${ABOUT.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n')}
    <h2>Pendiri &amp; Penyusun Portal</h2>
    <ul>
      <li>Pendiri Bimbel: <a href="/pendiri">${escapeHtml(FOUNDER.name)} (${escapeHtml(FOUNDER.formalName)})</a> — ${escapeHtml(FOUNDER.role)}</li>
      <li>Penyusun Portal: ${escapeHtml(AUTHOR.name)} — ${escapeHtml(AUTHOR.jobTitle)}</li>
      <li>Lokasi &amp; Kontak: ${escapeHtml(ORGANIZATION.fullAddress)} · WhatsApp ${escapeHtml(ORGANIZATION.whatsappDisplay)}</li>
    </ul>
    <h2>Lisensi Terbuka</h2>
    <p>Seluruh materi berlisensi <a href="${escapeHtml(ORGANIZATION.licenseUrl)}">${escapeHtml(ORGANIZATION.licenseName)}</a> dengan atribusi kepada ${escapeHtml(ORGANIZATION.name)}.</p>
    <h2>Mulai Belajar</h2>
    <ul><li><a href="/paket-soal">Paket Soal Terstruktur</a></li>${GRADES.map((g) => `<li><a href="${gradePath(g.grade)}">Matematika Kelas ${g.grade}</a></li>`).join('')}${IPA.map((g) => `<li><a href="${gradePath(g.grade, 'ipa')}">${subjectDisplayName('ipa', g.grade)} Kelas ${g.grade}</a></li>`).join('')}${AMC.map((d) => `<li><a href="${amcLevelPath(d.level)}">Olimpiade AMC ${d.level}</a></li>`).join('')}<li><a href="/rumus">Kumpulan Rumus</a></li><li><a href="/daftar-isi">Daftar Isi per Topik</a></li><li><a href="/tka">Latihan TKA</a></li></ul>`;
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
    <ul>${FOUNDER.bioHighlights.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>
    <h2>Rekam Jejak Terverifikasi</h2>
    <ul>${FOUNDER.credentials.map((c) => `<li><strong>${escapeHtml(c.year)} — ${escapeHtml(c.title)}</strong>: ${escapeHtml(c.detail)} (<a href="${escapeHtml(c.sourceUrl)}">Sumber</a>)</li>`).join('')}</ul>
    <p>Instagram: <a href="${escapeHtml(FOUNDER.instagramUrl)}">${escapeHtml(FOUNDER.instagramHandle)}</a> · <a href="/prestasi">Prestasi Siswa Binaan</a></p>`;
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

{
  const body = `
    ${breadcrumbHtml([['Beranda', '/'], ['Prestasi Siswa', PRESTASI_META.path]])}
    <h1>Prestasi Siswa &amp; Alumni ${escapeHtml(ORGANIZATION.name)}</h1>
    <p>${escapeHtml(PRESTASI_META.description)}</p>
    <ul>${PRESTASI_DATA.map((p) => `
      <li>
        <strong>${escapeHtml(p.year)} — ${escapeHtml(p.award)}</strong>: ${escapeHtml(p.studentName)} (${escapeHtml(p.school)}) — ${escapeHtml(p.competition)}.
        ${p.notes ? escapeHtml(p.notes) : ''} (<a href="${escapeHtml(p.sourceUrl)}">${escapeHtml(p.sourceLabel)}</a>)
      </li>`).join('\n')}
    </ul>`;
  writePage(PRESTASI_META.path, renderPage({
    meta: PRESTASI_META,
    body,
    jsonLd: [ORGANIZATION_LD, breadcrumbLd([['Beranda', '/'], ['Prestasi Siswa', PRESTASI_META.path]])]
  }));
  addToSitemap(PRESTASI_META.path, '0.8');
}

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
// Paket Soal Terstruktur (/paket-soal, /paket-soal/<mapel>, /paket-soal/<mapel>/<slug>)
// ---------------------------------------------------------------------------
{
  const renderPacketList = (papers) =>
    `<ul>${papers.map((p) => `<li><a href="${paperPath(p)}"><strong>${escapeHtml(p.title)}</strong></a> — ${escapeHtml(p.topic)} · Kelas ${p.grade} · ${p.totalMarks} marks · ${p.lang === 'en' ? 'English' : 'Bahasa Indonesia'}</li>`).join('\n')}</ul>`;

  const hubMeta = papersHubMeta('all');
  const hubCrumbs = [['Beranda', '/'], ['Paket Soal', '/paket-soal']];
  const hubBody = `
    ${breadcrumbHtml(hubCrumbs)}
    <h1>Paket Soal Terstruktur ${escapeHtml(ORGANIZATION.name)}</h1>
    <p>${escapeHtml(hubMeta.description)}</p>
    ${renderPacketList(PUBLISHED_PAPERS)}`;
  writePage('/paket-soal', renderPage({
    meta: hubMeta,
    body: hubBody,
    jsonLd: [ORGANIZATION_LD, breadcrumbLd(hubCrumbs)]
  }));
  addToSitemap('/paket-soal', '0.9');

  for (const subjMeta of Object.values(PAPER_SUBJECT_META)) {
    const subjPapers = getPapersBySubject(subjMeta.id);
    const meta = papersHubMeta(subjMeta.id);
    const crumbs = [...hubCrumbs, [subjMeta.label, subjectHubPath(subjMeta.id)]];
    const body = `
      ${breadcrumbHtml(crumbs)}
      <h1>Paket Soal ${escapeHtml(subjMeta.label)} — ${escapeHtml(ORGANIZATION.name)}</h1>
      <p>${escapeHtml(meta.description)}</p>
      ${subjPapers.length ? renderPacketList(subjPapers) : `<p>Belum ada paket soal di kategori ${escapeHtml(subjMeta.label)}. <a href="/paket-soal">Lihat semua Paket Soal</a>.</p>`}`;
    writePage(meta.path, renderPage({ meta, body, jsonLd: [breadcrumbLd(crumbs)] }));
    if (subjPapers.length > 0) addToSitemap(meta.path, '0.8');
  }

  for (const paper of PUBLISHED_PAPERS) {
    const meta = paperDetailMeta(paper);
    const subjLabel = PAPER_SUBJECT_META[paper.subject]?.label || paper.subject;
    const crumbs = [['Beranda', '/'], ['Paket Soal', '/paket-soal'], [subjLabel, subjectHubPath(paper.subject)], [paper.title, meta.path]];
    const constsHtml = paper.constants?.length
      ? `<section class="paper-constants-box"><h2>${paper.lang === 'en' ? 'Given Constants' : 'Konstanta'}</h2><ul>${paper.constants.map((c) => `<li>${renderMath(c, false)}</li>`).join('')}</ul></section>`
      : '';
    const qsHtml = paper.questions.map((q) => {
      const figsHtml = (q.figures || []).map((f) => `<figure><img src="${escapeHtml(f.src)}" alt="${escapeHtml(f.alt)}" /><figcaption>${escapeHtml(f.caption)}</figcaption></figure>`).join('\n');
      const partsHtml = q.parts.map((pt) => {
        const rubHtml = (pt.rubric || []).map((r) => `<li><strong>[${escapeHtml(r.code)}]</strong> ${rich(r.text)}</li>`).join('');
        return `
          <div class="paper-part">
            <p><strong>(${escapeHtml(pt.label)})</strong> ${rich(pt.prompt)} <span>[${pt.marks}]</span></p>
            <details class="seo-solution" open>
              <summary>${paper.lang === 'en' ? 'Answer Key, Solution & Marking Rubric' : 'Kunci Jawaban, Pembahasan & Rubrik'}</summary>
              <p><strong>${paper.lang === 'en' ? 'Answer:' : 'Kunci Jawaban:'}</strong> ${rich(pt.answer)}</p>
              <p><strong>${paper.lang === 'en' ? 'Principle:' : 'Prinsip Utama:'}</strong> ${rich(pt.principle)}</p>
              <div>${rich(pt.solution)}</div>
              <ul>${rubHtml}</ul>
            </details>
          </div>`;
      }).join('\n');
      return `<section id="soal-${q.no}"><h2>${q.no}. ${escapeHtml(q.title)} [${q.marks} Marks]</h2><p>${rich(q.stem)}</p>${figsHtml}${partsHtml}</section>`;
    }).join('\n');

    const body = `
      ${breadcrumbHtml(crumbs)}
      <h1>${escapeHtml(paper.title)}</h1>
      <p class="seo-subtitle">${escapeHtml(subjLabel)} · Kelas ${paper.grade} · ${paper.totalMarks} Marks · ${paper.lang === 'en' ? 'English' : 'Bahasa Indonesia'} · Sumber: ${escapeHtml(paper.source?.org || ORGANIZATION.name)} (${escapeHtml(paper.source?.license || ORGANIZATION.licenseName)})</p>
      <p>${rich(paper.instructions)}</p>
      ${constsHtml}
      ${qsHtml}
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
        educationalLevel: `Kelas ${paper.grade} (${paper.track})`,
        subject: subjLabel,
        inLanguage: paper.lang || 'id'
      }),
      quizLd({
        meta,
        questions: packetQuestionsForLd,
        educationalLevel: `Kelas ${paper.grade}`,
        subject: subjLabel,
        inLanguage: paper.lang || 'id'
      }),
      breadcrumbLd(crumbs)
    ].filter(Boolean);

    writePage(meta.path, renderPage({ meta, body, jsonLd: ld }));
    addToSitemap(meta.path, '0.8');
  }
}

// ---------------------------------------------------------------------------
// Kurikulum Merdeka: Matematika, IPA & Fisika
// ---------------------------------------------------------------------------
function renderCurriculum(subject, grades) {
  for (const g of grades) {
    const name = subjectDisplayName(subject, g.grade);
    const lvl = levelLabel(g.grade);
    const phase = g.phase || PHASE[g.grade] || '';
    const crumbsBase = [['Beranda', '/'], [`${name} Kelas ${g.grade}`, gradePath(g.grade, subject)]];

    const gMeta = gradeMeta(g.grade, subject);
    const gradeBody = `
      ${breadcrumbHtml(crumbsBase)}
      <h1>${name} Kelas ${g.grade} ${lvl} Kurikulum Merdeka</h1>
      <p>${escapeHtml(phase)} · ${g.chapters.length} bab · ${g.chapters.reduce((n, c) => n + (c.questions?.length || 0), 0)} latihan soal dengan pembahasan.</p>
      <h2>Daftar Isi</h2>
      ${gradeToc(g.chapters, (c) => chapterPath(g.grade, c.id))}`;
    writePage(gMeta.path, renderPage({ meta: gMeta, body: gradeBody, jsonLd: [breadcrumbLd(crumbsBase)] }));
    addToSitemap(gMeta.path, '0.8');

    for (const ch of g.chapters) {
      const meta = chapterMeta(g.grade, ch);
      const crumbs = [...crumbsBase, [ch.title, meta.path]];
      const note = getCp2025Note(ch.id);
      const body = `
        ${breadcrumbHtml(crumbs)}
        <h1>${escapeHtml(ch.title)}</h1>
        <p class="seo-subtitle">${name} Kelas ${g.grade} ${lvl} · ${escapeHtml(phase)} · Kurikulum Merdeka${ch.trackLabel ? ` · ${escapeHtml(ch.trackLabel)}` : ''}</p>
        ${note ? `<p class="cp2025-note"><strong>${escapeHtml(note.label)}.</strong> ${escapeHtml(note.note)}</p>` : ''}
        ${chapterBody(ch)}
        <section id="latihan-soal"><h2>Latihan Soal (${ch.questions?.length || 0} soal)</h2>
          <p>Kerjakan latihan interaktif di halaman ini untuk melihat nilai dan pembahasan setiap soal.</p>
          ${questionList(ch.questions || [])}
        </section>
        ${relatedHtml(ch.id)}
        ${siblingLinks(g.chapters, ch.id, (c) => chapterPath(g.grade, c.id))}`;
      const qLd = quizLd({ meta, questions: ch.questions || [], educationalLevel: `Kelas ${g.grade} ${lvl} (${phase})`, subject: name });
      const ld = [
        learningResourceLd({ meta, educationalLevel: `Kelas ${g.grade} ${lvl} (${phase})`, subject: name }),
        ...(qLd ? [qLd] : []),
        breadcrumbLd(crumbs)
      ];
      writePage(meta.path, renderPage({ meta, body, jsonLd: ld }));
      addToSitemap(meta.path, '0.7');
    }
  }
}

renderCurriculum('matematika', GRADES);
renderCurriculum('ipa', IPA);

// ---------------------------------------------------------------------------
// Olimpiade AMC
// ---------------------------------------------------------------------------
for (const d of AMC) {
  const levelInfo = AMC_LEVELS_METADATA.find((m) => m.level === d.level) || {};
  const crumbsBase = [['Beranda', '/'], [`Olimpiade AMC ${d.level}`, amcLevelPath(d.level)]];
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
    <p>Semua bab Matematika (Kelas 4–12), IPA &amp; Fisika (Kelas 4–12), dan Olimpiade AMC, dikelompokkan per topik.</p>
    <p><a href="/paket-soal">Paket Soal Terstruktur</a> · <a href="/rumus">Kumpulan Rumus Matematika &amp; Fisika</a> · <a href="/tka">Latihan TKA SD, SMP &amp; SMA</a></p>${groups}${amc}`;
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
  const ipaItems = IPA.flatMap((g) =>
    g.chapters.filter((ch) => ch.summary?.keyFormulas?.length).map((ch) => ({
      label: `${subjectDisplayName('ipa', g.grade)} Kelas ${g.grade} ${levelLabel(g.grade)}`,
      ch,
      path: chapterPath(g.grade, ch.id)
    }))
  );
  const amcItems = AMC.flatMap((d) =>
    d.chapters.filter((ch) => ch.summary?.keyFormulas?.length).map((ch) => ({
      label: `Olimpiade AMC ${d.level}`,
      ch,
      path: amcChapterPath(d.level, ch.id)
    }))
  );

  const body = `
    ${breadcrumbHtml(crumbs)}
    <h1>Kumpulan Rumus Matematika, IPA &amp; Fisika (Kelas 4–12)</h1>
    <p>${escapeHtml(FORMULA_INDEX_META.description)}</p>
    ${renderFormulaGroup('Matematika Kurikulum Merdeka (Kelas 4–12)', mathItems)}
    ${renderFormulaGroup('IPA & Fisika Kurikulum Merdeka (Kelas 4–12)', ipaItems)}
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
  const homeBody = `${breadcrumbHtml(homeCrumbs)}<h1>Latihan TKA Matematika, IPA &amp; Fisika (SD, SMP, SMA)</h1>
    <p>${escapeHtml(homeMeta.description)}</p>
    ${TKA_TESTS.map((test) => `<section><h2>${escapeHtml(test.title)}</h2><p>${escapeHtml(test.audience)}</p><p>${escapeHtml(test.intro)}</p>${elementTable(test)}
      <ul>${TKA_PACKETS.map((p) => `<li><a href="${tkaPath(test.id, p)}">${escapeHtml(test.title)} Paket ${p.toUpperCase()}</a></li>`).join('')}</ul></section>`).join('')}
    <p>Muatan dan cakupan elemen mengacu pada kerangka TKA Pusmendik Kemendikdasmen. Paket ini adalah latihan dari ${escapeHtml(SITE_NAME)}, bukan soal resmi.</p>`;
  writePage('/tka', renderPage({ meta: homeMeta, body: homeBody, jsonLd: [breadcrumbLd(homeCrumbs)] }));
  addToSitemap('/tka', '0.9');

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
    `> Portal belajar terbuka Matematika (Kelas 4–12), IPA SD–SMP (Kelas 4–9), Fisika SMA (Kelas 10–12), Paket Soal Terstruktur (beserta kunci, prinsip & rubrik B1/M1/A1), dan Olimpiade Matematika (OSN & AMC). Dikelola oleh ${ORGANIZATION.legalName} (${ORGANIZATION.fullAddress}, WhatsApp ${ORGANIZATION.whatsappDisplay}), didirikan oleh ${FOUNDER.name}, portal materi disusun oleh ${AUTHOR.name}.`,
    `> Lisensi: ${ORGANIZATION.licenseName} (${ORGANIZATION.licenseUrl}) — Boleh dikutip dan dibagikan kembali dengan mencantumkan sumber: ${SITE_NAME} (${SITE_URL}).`,
    '',
    '## Tentang Duta e-dukasi',
    `- Nama Resmi: ${ORGANIZATION.name} (${ORGANIZATION.legalName})`,
    `- Pendiri: ${FOUNDER.name} (${FOUNDER.formalName}) — ${FOUNDER.role}`,
    `- Alamat: ${ORGANIZATION.fullAddress} (${ORGANIZATION.mapsUrl})`,
    `- WhatsApp: ${ORGANIZATION.whatsappDisplay} (${ORGANIZATION.whatsappUrl})`,
    '',
    '## Halaman Utama & Indeks',
    `- [Beranda ${SITE_NAME}](${SITE_URL}/): Portal utama materi, pencarian lintas kelas, dan kuis interaktif.`,
    `- [Paket Soal Terstruktur](${SITE_URL}/paket-soal): Arsip paket soal Matematika, Fisika & Olimpiade ber-rubrik dalam bahasa asli.`,
    `- [Program Bimbel](${SITE_URL}/program): Kelas reguler, privat, dan pembinaan olimpiade di Pontianak & daring.`,
    `- [Profil Pendiri (${FOUNDER.name})](${SITE_URL}/pendiri): Rekam jejak pendiri & pembina utama.`,
    `- [Prestasi Siswa](${SITE_URL}/prestasi): Catatan prestasi siswa terverifikasi.`,
    `- [Kontak & Lokasi](${SITE_URL}/kontak): Alamat Pontianak, peta, dan WhatsApp.`,
    `- [Daftar Isi per Topik](${SITE_URL}/daftar-isi): Seluruh bab Matematika, IPA, Fisika, dan AMC per topik.`,
    `- [Kumpulan Rumus](${SITE_URL}/rumus): Ensiklopedia rumus kunci dengan notasi LaTeX.`,
    `- [Latihan TKA](${SITE_URL}/tka): Paket latihan Tes Kemampuan Akademik SD, SMP, dan SMA.`,
    `- [Korpus Lengkap Markdown + LaTeX](${SITE_URL}/llms-full.txt): Seluruh materi, Paket Soal, rumus, dan bank soal lengkap.`,
    `- [Tentang](${SITE_URL}/tentang): Profil organisasi, penyusun, dan lisensi.`,
    ''
  ];

  if (PUBLISHED_PAPERS.length > 0) {
    llmsLines.push('## Paket Soal Duta e-dukasi (Structured Worksheets + Key + Rubric)');
    for (const p of PUBLISHED_PAPERS) {
      const answersSummary = p.questions
        .map((q) => `Q${q.no}: ${q.parts.map((pt) => `(${pt.label}) ${plainText(pt.answer)}`).join('; ')}`)
        .join(' | ');
      llmsLines.push(
        `- [${p.title}](${SITE_URL}${paperPath(p)}) [Kelas ${p.grade}, ${p.lang.toUpperCase()}, ${p.totalMarks} marks]: ${answersSummary}`
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

  const mdPacket = (paper) => {
    const url = `${SITE_URL}${paperPath(paper)}`;
    const out = [
      `# [Paket Soal] ${paper.title}`,
      `URL: ${url}`,
      `Subject: ${PAPER_SUBJECT_META[paper.subject]?.label || paper.subject} | Grade: ${paper.grade} | Language: ${paper.lang} | Total Marks: ${paper.totalMarks}`,
      `Source: ${paper.source?.org || ORGANIZATION.name} (${paper.source?.license || ORGANIZATION.licenseName})`,
      '',
      paper.instructions,
      ''
    ];
    if (paper.constants?.length) {
      out.push('**Constants:** ' + paper.constants.map((c) => `$${c}$`).join(', '), '');
    }
    for (const q of paper.questions) {
      out.push(`## Question ${q.no}: ${q.title} [${q.marks} Marks]`, q.stem, '');
      for (const pt of q.parts) {
        out.push(
          `### (${pt.label}) [${pt.marks} marks]`,
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
  };

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
}

// ---------------------------------------------------------------------------
// sitemap.xml
// ---------------------------------------------------------------------------
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`);

console.log(`Prerender selesai: ${sitemap.length} halaman + rumus.html + llms.txt + llms-full.txt + sitemap.xml`);
