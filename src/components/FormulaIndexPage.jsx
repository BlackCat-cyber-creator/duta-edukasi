import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Loader2, Bookmark } from 'lucide-react';
import { getGradeData } from '../data/curriculumData';
import { getAmcModuleData } from '../data/amc/amcData';
import { chapterPath, amcChapterPath, SUBJECT_GRADES } from '../utils/seoRoutes';
import { FORMULA_INDEX_META, subjectDisplayName, levelLabel } from '../utils/seoMeta';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { MathText } from './MathRenderer';

const AMC_LEVELS = [8, 10, 12];

/**
 * Halaman /rumus: Ensiklopedia Kumpulan Rumus Matematika, IPA, Fisika (Kelas 4–12), dan AMC.
 */
export function FormulaIndexPage() {
  useDocumentMeta(FORMULA_INDEX_META);
  const [sections, setSections] = useState(null);
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    let active = true;
    async function loadAllFormulas() {
      const mathTasks = SUBJECT_GRADES.matematika.map((g) =>
        getGradeData(g, 'matematika').then((data) => ({ subject: 'matematika', grade: g, data }))
      );
      const ipaTasks = SUBJECT_GRADES.ipa.map((g) =>
        getGradeData(g, 'ipa').then((data) => ({ subject: 'ipa', grade: g, data }))
      );
      const amcTasks = AMC_LEVELS.map((lvl) =>
        getAmcModuleData(lvl).then((data) => ({ subject: 'amc', level: lvl, data }))
      );

      const loaded = await Promise.all([...mathTasks, ...ipaTasks, ...amcTasks]);
      if (!active) return;

      const entries = [];
      for (const item of loaded) {
        const chapters = item.data?.chapters || [];
        for (const ch of chapters) {
          const formulas = ch.summary?.keyFormulas || [];
          if (!formulas.length) continue;
          if (item.subject === 'amc') {
            entries.push({
              id: ch.id,
              subjectKey: 'amc',
              groupLabel: `Olimpiade AMC ${item.level}`,
              chapterTitle: ch.title,
              path: amcChapterPath(item.level, ch.id),
              formulas
            });
          } else {
            const subjName = subjectDisplayName(item.subject, item.grade);
            entries.push({
              id: ch.id,
              subjectKey: item.subject,
              groupLabel: `${subjName} Kelas ${item.grade} ${levelLabel(item.grade)}`,
              chapterTitle: ch.title,
              path: chapterPath(item.grade, ch.id),
              formulas
            });
          }
        }
      }
      setSections(entries);
    }

    loadAllFormulas().catch(() => {
      if (active) setSections([]);
    });
    return () => { active = false; };
  }, []);

  const filtered = useMemo(() => {
    if (!sections) return [];
    const q = query.trim().toLowerCase();
    return sections
      .filter((sec) => subjectFilter === 'all' || sec.subjectKey === subjectFilter)
      .map((sec) => {
        if (!q) return sec;
        const groupMatches = `${sec.groupLabel} ${sec.chapterTitle}`.toLowerCase().includes(q);
        if (groupMatches) return sec;
        const matchingFormulas = sec.formulas.filter((f) =>
          `${f.label} ${f.formula}`.toLowerCase().includes(q)
        );
        return matchingFormulas.length ? { ...sec, formulas: matchingFormulas } : null;
      })
      .filter(Boolean);
  }, [sections, subjectFilter, query]);

  const totalFormulas = useMemo(
    () => (sections ? sections.reduce((sum, sec) => sum + sec.formulas.length, 0) : 0),
    [sections]
  );

  return (
    <div className="handbook-container seo-page formula-index">
      <nav className="seo-breadcrumb" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <span>Kumpulan Rumus</span>
      </nav>
      <h1>Kumpulan Rumus Matematika, IPA &amp; Fisika (Kelas 4–12)</h1>
      <p>
        Referensi rumus kunci per bab untuk Matematika (Kelas 4–12), IPA SD–SMP (Kelas 4–9), Fisika SMA (Kelas 10–12),
        dan Olimpiade AMC. Klik tautan bab untuk membaca penjelasan konsep, contoh soal, dan latihan interaktif.
      </p>
      <p className="topic-meta">
        <Link to="/daftar-isi">Daftar Isi per Topik</Link> · <Link to="/tka">Latihan TKA SD, SMP &amp; SMA</Link>
        {sections ? ` · ${totalFormulas} rumus dari ${sections.length} bab` : ''}
      </p>

      <div className="formula-controls">
        <div className="nav-pill-group" role="tablist" aria-label="Filter mata pelajaran">
          {[
            { id: 'all', label: 'Semua' },
            { id: 'matematika', label: 'Matematika' },
            { id: 'ipa', label: 'IPA & Fisika' },
            { id: 'amc', label: 'Olimpiade AMC' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={subjectFilter === tab.id}
              className={`nav-pill ${subjectFilter === tab.id ? 'active' : ''}`}
              onClick={() => setSubjectFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="formula-search-box">
          <Search size={15} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama rumus, bab, atau simbol (mis. Newton, Pythagoras, Ohm)..."
            aria-label="Cari rumus"
          />
          {query && (
            <button type="button" className="site-search-clear" onClick={() => setQuery('')} aria-label="Hapus pencarian">
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {sections === null ? (
        <div className="editorial-card tka-loading">
          <Loader2 size={20} className="spinner" /> Memuat kumpulan rumus...
        </div>
      ) : filtered.length === 0 ? (
        <div className="editorial-card" style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          Tidak ditemukan rumus yang cocok dengan pencarian &ldquo;{query}&rdquo;.
        </div>
      ) : (
        <div className="formula-sections">
          {filtered.map((sec) => (
            <section key={sec.id} id={`rumus-${sec.id}`} className="formula-chapter-block editorial-card">
              <div className="formula-chapter-head">
                <div>
                  <span className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>{sec.groupLabel}</span>
                  <h2>{sec.chapterTitle}</h2>
                </div>
                <Link to={sec.path} className="formula-chapter-link">
                  <Bookmark size={14} /> Materi &amp; Latihan →
                </Link>
              </div>
              <div className="chapter-formula-grid">
                {sec.formulas.map((kf, idx) => (
                  <div key={idx} className={`chapter-formula ${kf.formula.length > 45 ? 'is-wide' : ''}`}>
                    <div className="chapter-formula-label">{kf.label}</div>
                    <MathText text={`$$${kf.formula}$$`} />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default FormulaIndexPage;
