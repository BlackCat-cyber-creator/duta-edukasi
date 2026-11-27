import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { FileCheck2, ArrowRight, Search, CheckCircle2, Bookmark, RotateCcw } from 'lucide-react';
import {
  PUBLISHED_PAPER_MANIFEST as PUBLISHED_PAPERS,
  PAPER_SUBJECT_META,
  OLYMPIAD_COMPETITIONS,
  getManifestBySubject as getPapersBySubject,
  paperPath,
  subjectHubPath,
  formatPaperMeta,
  levelNameOfGrade,
  englishPapersFilter,
  extractPaperYear
} from '../data/papers/manifest';
import { ORGANIZATION } from '../data/siteInfo';
import { englishPapersHubMeta, papersHubMeta } from '../utils/seoMeta';
import { PAPERS_HUB_FAQS, ENGLISH_PAPERS_HUB_FAQS } from '../utils/seoFaqs';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { getStudyState, STUDY_STATE_EVENT } from '../utils/progress';

const JENJANG_OPTIONS = [
  { id: 'all', label: 'Semua Jenjang' },
  { id: 'SD', label: 'SD (4–6)' },
  { id: 'SMP', label: 'SMP (7–9)' },
  { id: 'SMA', label: 'SMA (10–12)' }
];

export function PapersHubPage() {
  const { subject } = useParams();
  const [params, setParams] = useSearchParams();
  const isEnglishHub = subject === 'english';
  const activeSubject = isEnglishHub
    ? 'english'
    : subject && PAPER_SUBJECT_META[subject]
      ? subject
      : 'all';

  const searchQuery = params.get('q') || '';
  const jenjangFilter = JENJANG_OPTIONS.some((j) => j.id === params.get('jenjang')) ? params.get('jenjang') : 'all';
  const gradeFilter = params.get('kelas') || 'ALL';
  const compFilter = params.get('kompetisi') || 'all';
  const yearFilter = params.get('tahun') || 'all';
  const langFilter = isEnglishHub ? 'en' : (params.get('lang') || 'all');
  const sortBy = params.get('sort') || 'default';

  const [paperProgressMap, setPaperProgressMap] = useState({});

  useEffect(() => {
    const sync = () => setPaperProgressMap(getStudyState().papers || {});
    sync();
    window.addEventListener(STUDY_STATE_EVENT, sync);
    return () => window.removeEventListener(STUDY_STATE_EVENT, sync);
  }, []);

  const englishCount = useMemo(() => PUBLISHED_PAPERS.filter(englishPapersFilter).length, []);
  useDocumentMeta(isEnglishHub ? englishPapersHubMeta(englishCount) : papersHubMeta(activeSubject));

  const updateParam = (key, value, defaultVal = 'all') => {
    const next = new URLSearchParams(params);
    if (!value || value === defaultVal) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const resetAllFilters = () => {
    setParams(new URLSearchParams(), { replace: true });
  };

  const subjectCounts = useMemo(() => {
    const counts = { all: PUBLISHED_PAPERS.length };
    for (const p of PUBLISHED_PAPERS) {
      counts[p.subject] = (counts[p.subject] || 0) + 1;
    }
    return counts;
  }, []);

  const papersForSubject = useMemo(() => {
    if (isEnglishHub) return PUBLISHED_PAPERS.filter(englishPapersFilter);
    return getPapersBySubject(activeSubject);
  }, [activeSubject, isEnglishHub]);

  const gradesAvailable = useMemo(
    () => Array.from(new Set(papersForSubject.map((p) => p.grade))).sort((a, b) => a - b),
    [papersForSubject]
  );

  const competitionsAvailable = useMemo(() => {
    const present = new Set(papersForSubject.map((p) => p.competition).filter(Boolean));
    return OLYMPIAD_COMPETITIONS.filter((c) => c.competitions.some((name) => present.has(name)));
  }, [papersForSubject]);

  const yearsAvailable = useMemo(() => {
    const set = new Set(papersForSubject.map((p) => extractPaperYear(p)).filter(Boolean));
    return Array.from(set).sort((a, b) => b - a);
  }, [papersForSubject]);

  const visiblePapers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const matchedComp = compFilter !== 'all' ? OLYMPIAD_COMPETITIONS.find((c) => c.id === compFilter) : null;

    const list = papersForSubject.filter((p) => {
      if (jenjangFilter !== 'all' && levelNameOfGrade(p.grade) !== jenjangFilter) return false;
      if (gradeFilter !== 'ALL' && p.grade !== Number(gradeFilter)) return false;
      if (matchedComp && !matchedComp.competitions.includes(p.competition)) return false;
      if (yearFilter !== 'all' && extractPaperYear(p) !== Number(yearFilter)) return false;
      if (langFilter !== 'all' && !(p.langDisplay || (p.lang === 'en' ? 'EN' : 'ID')).toLowerCase().includes(langFilter)) return false;
      if (q) {
        const hay = `${p.title} ${p.topic} ${p.subject} ${p.competition || ''} ${p.year || ''} kelas ${p.grade}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    if (sortBy === 'newest') {
      return [...list].sort((a, b) => (extractPaperYear(b) || 0) - (extractPaperYear(a) || 0) || a.title.localeCompare(b.title));
    }
    if (sortBy === 'items') {
      return [...list].sort((a, b) => (b.itemCount || 0) - (a.itemCount || 0));
    }
    if (sortBy === 'title') {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    return list;
  }, [papersForSubject, jenjangFilter, gradeFilter, compFilter, yearFilter, langFilter, searchQuery, sortBy]);

  const hasActiveFilters = Boolean(
    searchQuery || jenjangFilter !== 'all' || gradeFilter !== 'ALL' || compFilter !== 'all' || yearFilter !== 'all' || (!isEnglishHub && langFilter !== 'all') || sortBy !== 'default'
  );

  return (
    <div className="handbook-container seo-page" lang={isEnglishHub ? 'en' : 'id'}>
      <nav className="seo-breadcrumb" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <Link to="/paket-soal">Paket Soal</Link>
        {isEnglishHub && <> › <span>English Papers</span></>}
        {!isEnglishHub && activeSubject !== 'all' && <> › <span>{PAPER_SUBJECT_META[activeSubject].label}</span></>}
      </nav>

      <section className="info-hero">
        <h1>{isEnglishHub ? `International & English Practice Papers — ${ORGANIZATION.name}` : `Paket Soal ${ORGANIZATION.name}`}</h1>
        <p style={{ margin: 0 }}>
          {isEnglishHub
            ? 'Curated English and bilingual math & science competition papers (AMC 8/10/12, SASMO, SMO, IKMC, HKIMO, TIMO, SIMOC, and Cambridge IGCSE) with exact answer keys, principles, step-by-step solutions, and marking rubrics.'
            : 'Kumpulan soal terstruktur Matematika, Sains (IPA, Fisika, Kimia, Biologi), dan Olimpiade lengkap dengan kunci jawaban exact/SI, langkah penyelesaian bertahap, serta rubrik B1/M1/A1 dalam bahasa asli sumbernya.'}
        </p>
      </section>

      {/* Filter Mapel */}
      <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
        <Link
          to="/paket-soal"
          className={`btn ${activeSubject === 'all' ? 'btn-royal' : 'btn-outline'}`}
          style={{ fontSize: '0.83rem', textDecoration: 'none', color: activeSubject === 'all' ? '#fff' : undefined }}
        >
          Semua ({subjectCounts.all || 0})
        </Link>
        {Object.values(PAPER_SUBJECT_META).map((m) => (
          subjectCounts[m.id] ? (
            <Link
              key={m.id}
              to={subjectHubPath(m.id)}
              className={`btn ${activeSubject === m.id ? 'btn-royal' : 'btn-outline'}`}
              style={{ fontSize: '0.83rem', textDecoration: 'none', color: activeSubject === m.id ? '#fff' : undefined }}
            >
              {m.label} ({subjectCounts[m.id]})
            </Link>
          ) : null
        ))}
        <Link
          to="/paket-soal/english"
          className={`btn ${isEnglishHub ? 'btn-royal' : 'btn-outline'}`}
          style={{ fontSize: '0.83rem', textDecoration: 'none', color: isEnglishHub ? '#fff' : undefined }}
        >
          English / Bilingual ({englishCount})
        </Link>
      </div>

      {/* Pencarian, Bahasa, Jenjang & Sortir */}
      <div className="formula-controls" style={{ marginBottom: '0.75rem' }}>
        {!isEnglishHub && (
          <div className="nav-pill-group" role="tablist" aria-label="Filter bahasa paket">
            {[
              { id: 'all', label: 'Semua Bahasa' },
              { id: 'id', label: 'Indonesia' },
              { id: 'en', label: 'English' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={langFilter === tab.id}
                className={`nav-pill ${langFilter === tab.id ? 'active' : ''}`}
                onClick={() => updateParam('lang', tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        <div className="formula-search-box">
          <Search size={15} />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => updateParam('q', e.target.value, '')}
            placeholder="Cari judul, kompetisi, tahun, atau topik paket soal..."
            aria-label="Cari paket soal"
          />
        </div>
      </div>

      <div className="papers-facets-row">
        <div className="papers-jenjang-pills" role="group" aria-label="Filter jenjang">
          {JENJANG_OPTIONS.map((j) => (
            <button
              key={j.id}
              type="button"
              className={`btn ${jenjangFilter === j.id ? 'btn-primary' : 'btn-subtle'}`}
              style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }}
              onClick={() => updateParam('jenjang', j.id)}
            >
              {j.label}
            </button>
          ))}
        </div>

        <div className="papers-selects">
          {competitionsAvailable.length > 1 && (
            <select
              className="filter-select"
              value={compFilter}
              onChange={(e) => updateParam('kompetisi', e.target.value)}
              aria-label="Filter kompetisi"
            >
              <option value="all">Semua Kompetisi</option>
              {competitionsAvailable.map((c) => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
          )}

          {yearsAvailable.length > 1 && (
            <select
              className="filter-select"
              value={yearFilter}
              onChange={(e) => updateParam('tahun', e.target.value)}
              aria-label="Filter tahun"
            >
              <option value="all">Semua Tahun</option>
              {yearsAvailable.map((y) => (
                <option key={y} value={String(y)}>{y}</option>
              ))}
            </select>
          )}

          {gradesAvailable.length > 1 && (
            <select
              className="filter-select"
              value={gradeFilter}
              onChange={(e) => updateParam('kelas', e.target.value, 'ALL')}
              aria-label="Filter kelas"
            >
              <option value="ALL">Semua Kelas</option>
              {gradesAvailable.map((g) => (
                <option key={g} value={String(g)}>Kelas {g}</option>
              ))}
            </select>
          )}

          <select
            className="filter-select"
            value={sortBy}
            onChange={(e) => updateParam('sort', e.target.value, 'default')}
            aria-label="Urutkan paket soal"
          >
            <option value="default">Urutan: Default</option>
            <option value="newest">Tahun Terbaru</option>
            <option value="items">Soal Terbanyak</option>
            <option value="title">Judul A–Z</option>
          </select>

          {hasActiveFilters && (
            <button type="button" className="btn btn-subtle" style={{ fontSize: '0.78rem', padding: '0.32rem 0.65rem' }} onClick={resetAllFilters}>
              <RotateCcw size={13} /> Reset Filter
            </button>
          )}
        </div>
      </div>

      <p className="papers-count-summary">
        Menampilkan <strong>{visiblePapers.length}</strong> dari {papersForSubject.length} paket soal
      </p>

      {/* Daftar Paket Soal */}
      {visiblePapers.length === 0 ? (
        <div className="editorial-card" style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          Belum ada paket soal yang cocok dengan filter ini.
        </div>
      ) : (
        <div className="info-grid">
          {visiblePapers.map((paper) => {
            const meta = PAPER_SUBJECT_META[paper.subject] || {};
            const subjectLabel = meta.shortLabel || paper.subject;
            const accent = meta.color || '#12337A';
            const info = formatPaperMeta(paper);
            const prog = paperProgressMap[paper.id];
            return (
              <article key={paper.id} className="info-card paper-card" style={{ '--card-accent': accent }}>
                <div className="paper-card-badges">
                  <span className="badge badge-smp" title={subjectLabel}>{info.tag}</span>
                  {prog?.completed && <span className="paper-status-pill is-done"><CheckCircle2 size={12} /> Selesai</span>}
                  {prog?.bookmarked && <span className="paper-status-pill is-saved"><Bookmark size={12} /></span>}
                  <span className="lang-pill" title="Bahasa soal" aria-label={`Bahasa soal: ${info.lang}`}>{info.lang}</span>
                </div>
                <h2 className="paper-card-title">
                  <Link to={paperPath(paper)}>{paper.title}</Link>
                </h2>
                <p className="paper-card-meta">
                  <strong>{info.itemsLabel}</strong>
                  {info.score ? ` · ${info.score}` : ''} · {info.track}
                </p>
                <p className="paper-card-topic">{paper.topic}</p>
                <Link to={paperPath(paper)} className="btn btn-royal paper-card-cta">
                  <FileCheck2 size={15} /> Buka Paket &amp; Rubrik <ArrowRight size={14} />
                </Link>
              </article>
            );
          })}
        </div>
      )}

      <section className="info-card seo-faq-box" aria-label={isEnglishHub ? 'Frequently Asked Questions' : 'Pertanyaan Umum'} style={{ marginTop: '1.5rem' }}>
        <h2 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>
          {isEnglishHub ? 'Frequently Asked Questions' : 'Pertanyaan Umum Paket Soal'}
        </h2>
        <div className="seo-faq-grid">
          {(isEnglishHub ? ENGLISH_PAPERS_HUB_FAQS : PAPERS_HUB_FAQS).map((f) => (
            <div key={f.question} className="seo-faq-item">
              <h3>{f.question}</h3>
              <p>{f.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PapersHubPage;
