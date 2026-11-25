import { ALL_CHAPTERS_INDEX } from '../data/chapterIndex';
import { ALL_IPA_CHAPTERS_INDEX } from '../data/ipa/chapterIndex';
import { ALL_KIMIA_CHAPTERS_INDEX } from '../data/kimia/chapterIndex';
import { ALL_BIOLOGI_CHAPTERS_INDEX } from '../data/biologi/chapterIndex';
import { ALL_AMC_CHAPTERS_INDEX } from '../data/amc/amcMetadata';
import {
  PUBLISHED_PAPER_MANIFEST,
  PAPER_SUBJECT_META,
  OLYMPIAD_COMPETITIONS,
  paperPath,
  formatPaperMeta,
  levelNameOfGrade
} from '../data/papers/manifest';
import { TKA_TESTS, TKA_PACKETS, tkaPath } from '../data/tka';
import { chapterPath, amcChapterPath } from './seoRoutes';
import { normalizeSearchText } from './chapterSearch';

function conceptLabels(concepts = []) {
  return concepts.map((c) => String(c).split(':')[0]);
}

function buildUnifiedEntries() {
  const entries = [];

  // 1. Paket Soal Terstruktur (82+)
  for (const p of PUBLISHED_PAPER_MANIFEST) {
    const subjLabel = PAPER_SUBJECT_META[p.subject]?.label || p.subject;
    const info = formatPaperMeta(p);
    const lvl = levelNameOfGrade(p.grade);
    const langWords = p.lang === 'en' ? 'english inggris en internasional' : 'indonesia id';
    entries.push({
      id: `paper:${p.id}`,
      type: 'paper',
      category: 'Paket Soal',
      title: p.title,
      label: info.tag,
      meta: `${info.itemsLabel}${info.score ? ` · ${info.score}` : ''} · ${info.lang}`,
      path: paperPath(p),
      titleText: normalizeSearchText(`${p.title} ${p.competition || ''}`),
      labelText: normalizeSearchText(`paket soal ${subjLabel} ${p.competition || ''} ${p.year || ''} kelas ${p.grade} ${lvl} ${langWords}`),
      conceptText: normalizeSearchText(p.topic || ''),
      bodyText: normalizeSearchText(`${p.slug} ${p.track || ''}`)
    });
  }

  // 2. Pusat Kompetisi Olimpiade
  for (const c of OLYMPIAD_COMPETITIONS) {
    entries.push({
      id: `comp:${c.id}`,
      type: 'competition',
      category: 'Olimpiade',
      title: c.label,
      label: 'Pusat Kompetisi',
      meta: 'Arsip soal & pembahasan',
      path: c.path || `/olimpiade/${c.id}`,
      titleText: normalizeSearchText(`${c.label} ${c.competitions.join(' ')}`),
      labelText: normalizeSearchText(`olimpiade kompetisi ${c.id} ${c.competitions.join(' ')}`),
      conceptText: normalizeSearchText(c.seoTitle || ''),
      bodyText: normalizeSearchText(c.blurb || '')
    });
  }

  // 3. Materi Kurikulum (Matematika, IPA, Fisika, Kimia, Biologi)
  const subjectName = (ch) => (ch.subject === 'kimia' ? 'Kimia' : ch.subject === 'biologi' ? 'Biologi' : ch.subject === 'ipa' ? (ch.grade >= 10 ? 'Fisika' : 'IPA') : 'Matematika');
  const subjectWords = (ch) => (ch.subject === 'kimia' ? 'kimia sains' : ch.subject === 'biologi' ? 'biologi sains' : ch.subject === 'ipa' ? (ch.grade >= 10 ? 'fisika sains' : 'ipa sains') : 'matematika mtk');
  for (const ch of [...ALL_CHAPTERS_INDEX, ...ALL_IPA_CHAPTERS_INDEX, ...ALL_KIMIA_CHAPTERS_INDEX, ...ALL_BIOLOGI_CHAPTERS_INDEX]) {
    entries.push({
      id: `ch:${ch.id}`,
      type: 'chapter',
      category: 'Materi',
      title: ch.title,
      label: `${subjectName(ch)} ${ch.grade}`,
      meta: `Kelas ${ch.grade} · Ringkasan & kuis`,
      path: chapterPath(ch.grade, ch.id),
      titleText: normalizeSearchText(ch.title),
      labelText: normalizeSearchText(`materi bab ${subjectWords(ch)} kelas ${ch.grade} ${ch.level} ${ch.phase || ''}`),
      conceptText: normalizeSearchText(conceptLabels(ch.coreConcepts).join(' ')),
      bodyText: normalizeSearchText((ch.coreConcepts || []).join(' '))
    });
  }

  // 4. Modul Olimpiade AMC 8 / 10 / 12
  for (const ch of ALL_AMC_CHAPTERS_INDEX) {
    entries.push({
      id: `amc:${ch.id}`,
      type: 'amc',
      category: 'Modul AMC',
      title: ch.title,
      label: `AMC ${ch.level}`,
      meta: ch.domain || 'Olimpiade Matematika',
      path: amcChapterPath(ch.level, ch.id),
      titleText: normalizeSearchText(ch.title),
      labelText: normalizeSearchText(`amc ${ch.level} olimpiade modul ${ch.domain || ''}`),
      conceptText: normalizeSearchText((ch.concepts || []).join(' ')),
      bodyText: normalizeSearchText(`${ch.bookChapter || ''} ${(ch.concepts || []).join(' ')}`)
    });
  }

  // 5. Latihan TKA
  for (const test of TKA_TESTS) {
    for (const pkt of TKA_PACKETS) {
      entries.push({
        id: `tka:${test.id}-${pkt}`,
        type: 'tka',
        category: 'TKA',
        title: `${test.title} — Paket ${pkt.toUpperCase()}`,
        label: 'Latihan TKA',
        meta: `${test.audience} · 30 soal`,
        path: tkaPath(test.id, pkt),
        titleText: normalizeSearchText(`${test.title} paket ${pkt}`),
        labelText: normalizeSearchText(`tka ujian ${test.audience} ${test.subject || 'matematika'}`),
        conceptText: normalizeSearchText(test.elements.map((e) => e.name).join(' ')),
        bodyText: normalizeSearchText(test.intro)
      });
    }
  }

  // 6. Halaman Referensi
  entries.push(
    {
      id: 'ref:rumus',
      type: 'page',
      category: 'Referensi',
      title: 'Kumpulan Rumus Matematika, IPA, Fisika, Kimia & Biologi',
      label: 'Ensiklopedia Rumus',
      meta: 'Kelas 4–12 & AMC',
      path: '/rumus',
      titleText: normalizeSearchText('kumpulan rumus matematika ipa fisika kimia biologi formula'),
      labelText: normalizeSearchText('rumus formula cepat kelas 4 12'),
      conceptText: '',
      bodyText: ''
    },
    {
      id: 'ref:daftar-isi',
      type: 'page',
      category: 'Referensi',
      title: 'Daftar Isi Topik Lintas Kelas',
      label: 'Daftar Isi',
      meta: 'Peta topik lengkap',
      path: '/daftar-isi',
      titleText: normalizeSearchText('daftar isi topik materi lintas kelas'),
      labelText: normalizeSearchText('indeks topik bab'),
      conceptText: '',
      bodyText: ''
    }
  );

  return entries;
}

let cachedEntries = null;

/** Pencarian terpadu lintas Paket Soal, Olimpiade, Materi Bab, AMC, TKA, dan Referensi. */
export function searchSite(query, limit = 10) {
  const terms = normalizeSearchText(query).split(' ').filter(Boolean);
  if (terms.length === 0) return [];
  cachedEntries ||= buildUnifiedEntries();

  const matches = [];
  for (const e of cachedEntries) {
    let score = 0;
    let ok = true;
    for (const t of terms) {
      const wordRe = t.length < 3 ? new RegExp(`\\b${t}\\b`) : null;
      const has = (txt) => (wordRe ? wordRe.test(txt) : txt.includes(t));
      if (has(e.titleText)) score += 12;
      else if (has(e.labelText)) score += 7;
      else if (has(e.conceptText)) score += 4;
      else if (has(e.bodyText)) score += 1;
      else {
        ok = false;
        break;
      }
    }
    if (ok) {
      if (e.type === 'competition') score += 2;
      matches.push({
        id: e.id,
        type: e.type,
        category: e.category,
        title: e.title,
        label: e.label,
        meta: e.meta,
        path: e.path,
        score
      });
    }
  }

  return matches
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}
