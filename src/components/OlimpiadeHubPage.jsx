import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Trophy, Award, ArrowRight, FileCheck2, Search, CheckCircle2, Bookmark } from 'lucide-react';
import {
  PUBLISHED_PAPER_MANIFEST as PUBLISHED_PAPERS,
  PAPER_SUBJECT_META,
  OLYMPIAD_COMPETITIONS,
  getOlympiadCompetition,
  paperPath,
  formatPaperMeta,
  levelNameOfGrade,
  extractPaperYear
} from '../data/papers/manifest';
import { AMC_LEVELS_METADATA, ALL_AMC_CHAPTERS_INDEX } from '../data/amc';
import { amcLevelPath } from '../utils/seoRoutes';
import { OLIMPIADE_HUB_META, olympiadCompetitionMeta } from '../utils/seoMeta';
import { OLIMPIADE_HUB_FAQS } from '../utils/seoFaqs';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { getStudyState, STUDY_STATE_EVENT } from '../utils/progress';

const LEVELS = [
  { id: 'all', label: 'Semua jenjang' },
  { id: 'SD', label: 'SD' },
  { id: 'SMP', label: 'SMP' },
  { id: 'SMA', label: 'SMA' }
];

const OLYMPIAD_SUBJECT_ORDER = [
  { id: 'olimpiade-mat', label: 'Matematika' },
  { id: 'olimpiade-sains', label: 'IPA / Sains' },
  { id: 'olimpiade-fis', label: 'Fisika' },
  { id: 'olimpiade-kim', label: 'Kimia' },
  { id: 'olimpiade-bio', label: 'Biologi' },
  { id: 'olimpiade-inf', label: 'Informatika' },
  { id: 'olimpiade-astro', label: 'Astronomi' },
  { id: 'olimpiade-kebumian', label: 'Kebumian' },
  { id: 'olimpiade-eko', label: 'Ekonomi' }
];

const papersOfComp = (c) => PUBLISHED_PAPERS.filter((p) => c.competitions.includes(p.competition));

function PaperCard({ paper, progress }) {
  const meta = PAPER_SUBJECT_META[paper.subject] || {};
  const info = formatPaperMeta(paper);
  const done = Boolean(progress?.completed);
  const saved = Boolean(progress?.bookmarked);
  return (
    <article className="info-card paper-card" style={{ '--card-accent': meta.color || '#9F1239' }}>
      <div className="paper-card-badges">
        <span className="badge badge-smp">{info.tag}</span>
        {done && <span className="paper-status-pill is-done"><CheckCircle2 size={12} /> Selesai</span>}
        {saved && <span className="paper-status-pill is-saved"><Bookmark size={12} /></span>}
        <span className="lang-pill" title="Bahasa soal">{info.lang}</span>
      </div>
      <h3 className="paper-card-title"><Link to={paperPath(paper)}>{paper.title}</Link></h3>
      <p className="paper-card-meta"><strong>{info.itemsLabel}</strong> · {info.track}</p>
      <p className="paper-card-topic">{paper.topic}</p>
      <Link to={paperPath(paper)} className="btn btn-royal paper-card-cta">
        <FileCheck2 size={15} /> Buka Paket <ArrowRight size={14} />
      </Link>
    </article>
  );
}

/** Pusat Olimpiade (/olimpiade) & halaman khusus kompetisi (/olimpiade/:competitionId). */
export function OlimpiadeHubPage() {
  const { competitionId } = useParams();
  const [params, setParams] = useSearchParams();
  const routeComp = competitionId ? getOlympiadCompetition(competitionId) : null;
  const legacyParam = !routeComp && OLYMPIAD_COMPETITIONS.some((c) => c.id === params.get('k')) ? params.get('k') : 'all';
  const active = routeComp ? routeComp.id : legacyParam;
  const level = LEVELS.some((l) => l.id === params.get('j')) ? params.get('j') : 'all';
  const yearFilter = params.get('t') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const [paperProgressMap, setPaperProgressMap] = useState({});

  useEffect(() => {
    const sync = () => setPaperProgressMap(getStudyState().papers || {});
    sync();
    window.addEventListener(STUDY_STATE_EVENT, sync);
    return () => window.removeEventListener(STUDY_STATE_EVENT, sync);
  }, []);

  const isUnknownCompetition = Boolean(competitionId && !routeComp);
  const routePapers = useMemo(() => (routeComp ? papersOfComp(routeComp) : []), [routeComp]);
  const routePapersCount = routePapers.length;
  useDocumentMeta(
    isUnknownCompetition
      ? { ...OLIMPIADE_HUB_META, title: 'Kompetisi Tidak Ditemukan | Duta e-dukasi', path: '', noindex: true }
      : routeComp
        ? olympiadCompetitionMeta(routeComp, routePapersCount)
        : OLIMPIADE_HUB_META
  );

  const setFilter = (key, value) => {
    const next = new URLSearchParams(params);
    if (value === 'all') next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const competitions = useMemo(
    () => OLYMPIAD_COMPETITIONS.filter((c) => c.amc || papersOfComp(c).length > 0),
    []
  );
  const allOlympiadPapers = useMemo(() => {
    const compSet = new Set(OLYMPIAD_COMPETITIONS.flatMap((c) => c.competitions));
    return PUBLISHED_PAPERS.filter((p) => compSet.has(p.competition));
  }, []);
  const amcTotal = ALL_AMC_CHAPTERS_INDEX.length;

  const { subjectCounts, bidangOptions } = useMemo(() => {
    const scoped = routeComp ? routePapers : allOlympiadPapers;
    const counts = {};
    for (const p of scoped) {
      counts[p.subject] = (counts[p.subject] || 0) + 1;
    }
    const hasAmcInScope = routeComp ? Boolean(routeComp.amc) : competitions.some((c) => c.amc);
    const options = OLYMPIAD_SUBJECT_ORDER.filter(
      (s) => (counts[s.id] || 0) > 0 || (s.id === 'olimpiade-mat' && hasAmcInScope)
    );
    return { subjectCounts: counts, bidangOptions: options };
  }, [routeComp, routePapers, allOlympiadPapers, competitions]);

  const subjectFilter = bidangOptions.some((b) => b.id === params.get('m')) ? params.get('m') : 'all';

  const visibleCompetitions = useMemo(() => {
    if (subjectFilter === 'all') return competitions;
    return competitions.filter(
      (c) => (c.amc && subjectFilter === 'olimpiade-mat') || papersOfComp(c).some((p) => p.subject === subjectFilter)
    );
  }, [competitions, subjectFilter]);

  const shownCompetitions = active === 'all'
    ? visibleCompetitions
    : competitions.filter((c) => c.id === active);

  const availableYears = useMemo(() => {
    const set = new Set(routePapers.map((p) => extractPaperYear(p)).filter(Boolean));
    return Array.from(set).sort((a, b) => b - a);
  }, [routePapers]);

  const matchesFilters = (p) => {
    if (level !== 'all' && levelNameOfGrade(p.grade) !== level) return false;
    if (subjectFilter !== 'all' && p.subject !== subjectFilter) return false;
    if (routeComp && yearFilter !== 'all' && extractPaperYear(p) !== Number(yearFilter)) return false;
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      const hay = `${p.title} ${p.topic} ${p.competition || ''} kelas ${p.grade}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  };

  const faqsToRender = routeComp?.faqs?.length ? routeComp.faqs : OLIMPIADE_HUB_FAQS;
  const compQuerySuffix = subjectFilter !== 'all' ? `?m=${encodeURIComponent(subjectFilter)}` : '';

  return (
    <div className="handbook-container">
      {isUnknownCompetition && (
        <div className="editorial-card" style={{ padding: '1rem 1.25rem', marginBottom: '1rem', borderLeft: '4px solid var(--brand-crimson)' }}>
          <strong>Kompetisi tidak ditemukan.</strong> Menampilkan semua kompetisi di{' '}
          <Link to="/olimpiade">Pusat Olimpiade Duta e-dukasi</Link>.
        </div>
      )}
      {routeComp && (
        <nav className="seo-breadcrumb" aria-label="Navigasi">
          <Link to="/">Beranda</Link> › <Link to="/olimpiade">Olimpiade</Link> › <span>{routeComp.label}</span>
        </nav>
      )}

      <section className="hub-hero">
        <h1 className="hub-hero-title">
          {routeComp ? (routeComp.seoTitle || routeComp.label) : 'Olimpiade & Kompetisi'}
        </h1>
        <p className="hub-hero-desc">
          {routeComp
            ? routeComp.blurb
            : 'Soal dan pembahasan dari berbagai kompetisi matematika dan sains nasional maupun internasional. Pilih bidang, kompetisi, atau jenjang, lalu buka paketnya.'}
        </p>

        {bidangOptions.length > 1 && (
          <div className="olim-filter-group">
            <span className="olim-filter-label">Bidang</span>
            <div className="hub-level-tabs" role="tablist" aria-label="Filter bidang olimpiade">
              <button
                type="button"
                role="tab"
                aria-selected={subjectFilter === 'all'}
                className={`hub-level-pill ${subjectFilter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('m', 'all')}
              >
                Semua Bidang
              </button>
              {bidangOptions.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  role="tab"
                  aria-selected={subjectFilter === b.id}
                  className={`hub-level-pill ${subjectFilter === b.id ? 'active' : ''}`}
                  onClick={() => setFilter('m', b.id)}
                >
                  {b.label} ({subjectCounts[b.id] || 0})
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="olim-filter-group">
          <span className="olim-filter-label">Kompetisi</span>
          <div className="hub-level-tabs" role="tablist" aria-label="Pilih kompetisi">
            <Link
              to={`/olimpiade${compQuerySuffix}`}
              className={`hub-level-pill hub-level-pill-sub ${active === 'all' ? 'active' : ''}`}
              style={{ textDecoration: 'none' }}
            >
              Semua kompetisi
            </Link>
            {visibleCompetitions.map((c) => {
              const target = `${c.path || `/olimpiade/${c.id}`}${compQuerySuffix}`;
              return (
                <Link
                  key={c.id}
                  to={target}
                  className={`hub-level-pill hub-level-pill-sub ${active === c.id ? 'active' : ''}`}
                  style={{ textDecoration: 'none' }}
                >
                  {c.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="olim-filter-group">
          <span className="olim-filter-label">Jenjang</span>
          <div className="hub-level-tabs" role="tablist" aria-label="Filter jenjang">
            {LEVELS.map((l) => (
              <button
                key={l.id}
                type="button"
                role="tab"
                aria-selected={level === l.id}
                className={`hub-level-pill hub-level-pill-sub ${level === l.id ? 'active' : ''}`}
                onClick={() => setFilter('j', l.id)}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div className="olim-filter-bar">
          <div className="formula-search-box">
            <Search size={15} />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={routeComp ? `Cari di ${routeComp.label}...` : 'Cari judul atau topik paket olimpiade...'}
              aria-label="Cari paket olimpiade"
            />
          </div>

          {routeComp && availableYears.length > 1 && (
            <select
              className="filter-select"
              value={yearFilter}
              onChange={(e) => setFilter('t', e.target.value)}
              aria-label="Filter tahun"
            >
              <option value="all">Semua Tahun</option>
              {availableYears.map((y) => (
                <option key={y} value={String(y)}>{y}</option>
              ))}
            </select>
          )}
        </div>
      </section>

      <section className="hub-section" aria-label="Daftar kompetisi">
        {shownCompetitions.map((c) => {
          const papers = papersOfComp(c).filter(matchesFilters);
          const showAmc = c.amc && (subjectFilter === 'all' || subjectFilter === 'olimpiade-mat');
          const amcLevels = showAmc
            ? AMC_LEVELS_METADATA.filter((lvl) => level === 'all' || (level === 'SMP' && lvl.level === 8) || (level === 'SMA' && lvl.level !== 8))
            : [];
          if (!c.amc && papers.length === 0) return null;
          if (c.amc && amcLevels.length === 0 && papers.length === 0) return null;
          const compTarget = `${c.path || `/olimpiade/${c.id}`}${compQuerySuffix}`;
          return (
            <article key={c.id} className="olim-block" id={`kompetisi-${c.id}`}>
              <header className="olim-block-head">
                <span className="hub-icon-box hub-icon-crimson">{c.amc ? <Award size={18} /> : <Trophy size={18} />}</span>
                <div style={{ flex: 1 }}>
                  <div className="olim-block-title-row">
                    <h2 className="olim-block-title">
                      {routeComp ? c.label : <Link to={compTarget}>{c.label}</Link>}
                    </h2>
                    {!routeComp && (
                      <Link to={compTarget} className="hub-more-link">
                        Halaman {c.label} <ArrowRight size={13} />
                      </Link>
                    )}
                  </div>
                  <p className="olim-block-blurb">{c.blurb}</p>
                </div>
              </header>

              {showAmc && amcLevels.length > 0 && (
                <div className="olim-amc-grid">
                  {amcLevels.map((lvl) => (
                    <Link key={lvl.level} to={amcLevelPath(lvl.level)} className="olim-amc-card">
                      <strong>{lvl.title}</strong>
                      <span>{lvl.targetGrades}</span>
                      <small>{ALL_AMC_CHAPTERS_INDEX.filter((ch) => ch.level === lvl.level).length} bab interaktif</small>
                      <ArrowRight size={14} className="hub-mini-arrow" />
                    </Link>
                  ))}
                  <p className="olim-amc-note">Total {amcTotal} bab konsep dan latihan untuk AMC 8, 10, dan 12.</p>
                </div>
              )}

              {papers.length > 0 && (
                <div className="info-grid" style={showAmc && amcLevels.length > 0 ? { marginTop: '0.85rem' } : undefined}>
                  {papers.map((paper) => (
                    <PaperCard key={paper.id} paper={paper} progress={paperProgressMap[paper.id]} />
                  ))}
                </div>
              )}
            </article>
          );
        })}

        {shownCompetitions.every((c) => {
          const papersCount = papersOfComp(c).filter(matchesFilters).length;
          const showAmc = c.amc && (subjectFilter === 'all' || subjectFilter === 'olimpiade-mat');
          const amcLevelsCount = showAmc
            ? AMC_LEVELS_METADATA.filter((lvl) => level === 'all' || (level === 'SMP' && lvl.level === 8) || (level === 'SMA' && lvl.level !== 8)).length
            : 0;
          return papersCount === 0 && amcLevelsCount === 0;
        }) && (
          <p className="olim-empty">Belum ada paket untuk kombinasi bidang, kompetisi, dan filter ini.</p>
        )}
      </section>

      {faqsToRender.length > 0 && (
        <section className="info-card seo-faq-box" aria-label="Pertanyaan Umum">
          <h2 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Pertanyaan Umum {routeComp ? routeComp.label : 'Olimpiade'}</h2>
          <div className="seo-faq-grid">
            {faqsToRender.map((f) => (
              <div key={f.question} className="seo-faq-item">
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <p className="handbook-quicklinks">
        <Link to="/paket-soal">Semua paket soal</Link>
        <span aria-hidden="true">·</span>
        <Link to="/tentang#prestasi">Arsip prestasi siswa</Link>
      </p>
    </div>
  );
}

export default OlimpiadeHubPage;
