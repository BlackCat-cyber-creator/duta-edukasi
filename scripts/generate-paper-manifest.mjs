/**
 * Membangkitkan `src/data/papers/manifest.js` dari `src/data/papers/index.js`:
 * - `PAPER_MANIFEST`: metadata ringan tiap paket tanpa isi `questions`
 * - `PAPER_LOADERS`: peta `subject/slug -> () => import('./...')` dengan literal string statis agar Vite melakukan code-splitting per paket soal
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ALL_PAPERS, countPaperItems } from '../src/data/papers/index.js';
import { extractPaperYear } from '../src/data/papers/meta.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const INDEX_PATH = path.join(ROOT, 'src/data/papers/index.js');
const OUT_PATH = path.join(ROOT, 'src/data/papers/manifest.js');

const indexSrc = fs.readFileSync(INDEX_PATH, 'utf8');
const importMap = new Map();
for (const m of indexSrc.matchAll(/^import\s+([A-Za-z0-9_$]+)\s+from\s+'(\.[^']+)';/gm)) {
  importMap.set(m[1], m[2]);
}

const arrMatch = indexSrc.match(/export\s+const\s+ALL_PAPERS\s*=\s*\[([\s\S]*?)\];/);
if (!arrMatch) throw new Error('ALL_PAPERS array not found in src/data/papers/index.js');

const varNames = arrMatch[1]
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

if (varNames.length !== ALL_PAPERS.length) {
  throw new Error(`ALL_PAPERS length mismatch: parsed ${varNames.length} vs imported ${ALL_PAPERS.length}`);
}

const manifest = ALL_PAPERS.map((p) => ({
  id: p.id,
  slug: p.slug,
  subject: p.subject,
  grade: p.grade,
  track: p.track,
  accessTier: p.accessTier || 'free',
  topic: p.topic,
  relatedChapterIds: p.relatedChapterIds || [],
  lang: p.lang,
  langDisplay: p.langDisplay || (p.lang === 'en' ? 'EN' : 'ID'),
  competition: p.competition,
  year: extractPaperYear(p),
  title: p.title,
  totalMarks: p.totalMarks,
  itemCount: countPaperItems(p),
  questionCount: (p.questions || []).length,
  status: p.status
}));

const loaderLines = ALL_PAPERS.map((p, idx) => {
  const varName = varNames[idx];
  const relPath = importMap.get(varName);
  if (!relPath) throw new Error(`Missing import path for ${varName}`);
  const key = `${p.subject}/${p.slug}`;
  return `  '${key}': () => import('${relPath}')`;
});

const out = `/**
 * BERKAS HASIL GENERASI OTOMATIS oleh \`scripts/generate-paper-manifest.mjs\`.
 * Jangan sunting manual — jalankan \`node scripts/generate-paper-manifest.mjs\` setelah menambah/mengubah paket soal.
 */
export * from './meta.js';

export const PAPER_MANIFEST = ${JSON.stringify(manifest, null, 2)};

export const PUBLISHED_PAPER_MANIFEST = PAPER_MANIFEST.filter((p) => p.status === 'published');

export function getManifestBySubject(subject) {
  if (!subject || subject === 'all') return PUBLISHED_PAPER_MANIFEST;
  return PUBLISHED_PAPER_MANIFEST.filter((p) => p.subject === subject);
}

export function getManifestBySlug(subject, slug) {
  return PUBLISHED_PAPER_MANIFEST.find((p) => p.subject === subject && p.slug === slug) || null;
}

export const PAPER_LOADERS = {
${loaderLines.join(',\n')}
};

const paperCache = new Map();

export async function loadPaperBySlug(subject, slug) {
  const key = \`\${subject}/\${slug}\`;
  if (paperCache.has(key)) return paperCache.get(key);
  const loader = PAPER_LOADERS[key];
  if (!loader) return null;
  const mod = await loader();
  const paper = mod?.default || null;
  if (paper) paperCache.set(key, paper);
  return paper;
}
`;

fs.writeFileSync(OUT_PATH, out, 'utf8');
console.log(`Generated ${manifest.length} manifest entries -> src/data/papers/manifest.js`);
