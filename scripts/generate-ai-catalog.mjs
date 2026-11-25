/**
 * Membangkitkan indeks ringkas seluruh konten Duta e-dukasi (`api/_catalog.json`)
 * untuk dipakai oleh endpoint Asisten Belajar AI (`/api/ai-chat`).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PUBLISHED_PAPERS, OLYMPIAD_COMPETITIONS, PAPER_SUBJECT_META, paperPath, extractPaperYear } from '../src/data/papers/index.js';
import { ALL_CHAPTERS_INDEX } from '../src/data/chapterIndex.js';
import { ALL_IPA_CHAPTERS_INDEX } from '../src/data/ipa/chapterIndex.js';
import { ALL_KIMIA_CHAPTERS_INDEX } from '../src/data/kimia/chapterIndex.js';
import { ALL_BIOLOGI_CHAPTERS_INDEX } from '../src/data/biologi/chapterIndex.js';
import { ALL_AMC_CHAPTERS_INDEX } from '../src/data/amc/amcMetadata.js';
import { TKA_TESTS, TKA_PACKETS, tkaPath } from '../src/data/tka.js';
import { chapterPath, amcChapterPath } from '../src/utils/seoRoutes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_PATH = path.join(ROOT, 'api/_catalog.json');

const items = [];

for (const p of PUBLISHED_PAPERS) {
  const subjLabel = PAPER_SUBJECT_META[p.subject]?.label || p.subject;
  const itemCount = (p.questions || []).reduce((s, q) => s + (q.parts?.length || 1), 0);
  items.push({
    type: 'paper',
    id: p.id,
    title: p.title,
    path: paperPath(p),
    subject: subjLabel,
    grade: p.grade,
    level: p.grade <= 6 ? 'SD' : p.grade <= 9 ? 'SMP' : 'SMA',
    competition: p.competition || '',
    year: extractPaperYear(p),
    lang: p.langDisplay || p.lang?.toUpperCase() || 'ID',
    topic: p.topic || '',
    count: itemCount,
    keywords: `${p.title} ${p.competition || ''} ${subjLabel} kelas ${p.grade} ${p.topic || ''} ${p.slug}`.toLowerCase()
  });
}

for (const c of OLYMPIAD_COMPETITIONS) {
  items.push({
    type: 'competition',
    id: c.id,
    title: c.label,
    path: c.path || `/olimpiade/${c.id}`,
    subject: 'Olimpiade',
    competition: c.label,
    topic: c.blurb,
    keywords: `${c.label} ${c.competitions.join(' ')} olimpiade kompetisi ${c.blurb}`.toLowerCase()
  });
}

const subjectLabel = (ch) => (
  ch.subject === 'kimia' ? 'Kimia'
    : ch.subject === 'biologi' ? 'Biologi'
      : ch.subject === 'ipa' ? (ch.grade >= 10 ? 'Fisika' : 'IPA')
        : 'Matematika'
);

for (const ch of [...ALL_CHAPTERS_INDEX, ...ALL_IPA_CHAPTERS_INDEX, ...ALL_KIMIA_CHAPTERS_INDEX, ...ALL_BIOLOGI_CHAPTERS_INDEX]) {
  const subj = subjectLabel(ch);
  items.push({
    type: 'chapter',
    id: ch.id,
    title: ch.title,
    path: chapterPath(ch.grade, ch.id),
    subject: subj,
    grade: ch.grade,
    level: ch.grade <= 6 ? 'SD' : ch.grade <= 9 ? 'SMP' : 'SMA',
    topic: (ch.coreConcepts || []).map((x) => String(x).split(':')[0]).slice(0, 5).join(', '),
    keywords: `${ch.title} ${subj} kelas ${ch.grade} ${(ch.coreConcepts || []).join(' ')}`.toLowerCase()
  });
}

for (const ch of ALL_AMC_CHAPTERS_INDEX) {
  items.push({
    type: 'amc',
    id: ch.id,
    title: ch.title,
    path: amcChapterPath(ch.level, ch.id),
    subject: `AMC ${ch.level}`,
    level: ch.level === 8 ? 'SMP' : 'SMA',
    competition: `AMC ${ch.level}`,
    topic: ch.domain || 'Olimpiade Matematika',
    keywords: `${ch.title} amc ${ch.level} ${ch.domain || ''} ${(ch.concepts || []).join(' ')}`.toLowerCase()
  });
}

for (const test of TKA_TESTS) {
  for (const pkt of TKA_PACKETS) {
    items.push({
      type: 'tka',
      id: `${test.id}-${pkt}`,
      title: `${test.title} Paket ${pkt.toUpperCase()}`,
      path: tkaPath(test.id, pkt),
      subject: test.subject === 'ipa' ? 'IPA / Fisika' : 'Matematika',
      level: test.id.includes('-sd') ? 'SD' : test.id.includes('-smp') ? 'SMP' : 'SMA',
      topic: test.elements.map((e) => e.name).join(', '),
      count: 30,
      keywords: `${test.title} tka paket ${pkt} ${test.audience} ${test.elements.map((e) => e.name).join(' ')}`.toLowerCase()
    });
  }
}

items.push(
  {
    type: 'page',
    id: 'rumus',
    title: 'Kumpulan Rumus Matematika, IPA, Fisika, Kimia & Biologi',
    path: '/rumus',
    subject: 'Referensi',
    topic: 'Ensiklopedia rumus kunci Kelas 4–12 & AMC',
    keywords: 'rumus formula cepat matematika ipa fisika kimia biologi amc'
  },
  {
    type: 'page',
    id: 'daftar-isi',
    title: 'Daftar Isi Topik Lintas Kelas',
    path: '/daftar-isi',
    subject: 'Referensi',
    topic: 'Peta topik pembelajaran lengkap',
    keywords: 'daftar isi topik indeks materi semua kelas'
  },
  {
    type: 'page',
    id: 'english-hub',
    title: 'International & English Practice Papers (EN)',
    path: '/paket-soal/english',
    subject: 'English / Bilingual',
    topic: 'AMC, SASMO, SMO, IKMC, Cambridge IGCSE Physics/Chemistry/Biology',
    keywords: 'english internasional bilingual cambridge igcse sasmo smo amc'
  }
);

const catalog = {
  generatedAt: new Date().toISOString(),
  stats: {
    totalPapers: PUBLISHED_PAPERS.length,
    totalSchoolChapters: ALL_CHAPTERS_INDEX.length + ALL_IPA_CHAPTERS_INDEX.length + ALL_KIMIA_CHAPTERS_INDEX.length + ALL_BIOLOGI_CHAPTERS_INDEX.length,
    totalAmcChapters: ALL_AMC_CHAPTERS_INDEX.length,
    competitions: OLYMPIAD_COMPETITIONS.map((c) => c.label)
  },
  items
};

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, JSON.stringify(catalog));
console.log(`Generated AI catalog: ${items.length} items -> api/_catalog.json`);
