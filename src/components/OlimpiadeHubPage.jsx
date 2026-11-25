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
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { getStudyState, STUDY_STATE_EVENT } from '../utils/progress';

const LEVELS = [
  { id: 'all', label: 'Semua jenjang' },
  { id: 'SD', label: 'SD' },
  { id: 'SMP', label: 'SMP' },
  { id: 'SMA', label: 'SMA' }
];

const HUB_FAQS = [
  {
    question: 'Kompetisi olimpiade apa saja yang tersedia di Duta e-dukasi?',
    answer: 'Tersedia latihan soal dan pembahasan OSN/OSK/OSN-P (Matematika, IPA, Fisika, Kimia, Biologi), AMC 8/10/12 (termasuk 36 bab modul konsep), SASMO, SMO Singapore, HKIMO, TIMO, SIMOC, IKMC/Kangaroo, KSM, KMNR, OMVN, serta Seri Pembinaan OSN.'
  },
  {
    question: 'Apakah seluruh pembahasan soal olimpiade dapat diakses gratis?',
    answer: 'Ya, seluruh paket soal dan pembahasan di halaman Olimpiade Duta e-dukasi terbuka gratis tanpa perlu login dan berlisensi CC BY 4.0.'
  }
];

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
  const subjectFilter = params.get('m') || 'all';
  const yearFilter = params.get('t') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const [paperProgressMap, setPaperProgressMap] = useState({});

  useEffect(() => {
    const sync = () => setPaperProgressMap(getStudyState().papers || {});
    sync();
    window.addEventListener(STUDY_STATE_EVENT, sync);
    return () => window.removeEventListener(STUDY_STATE_EVENT, sync);
  }, []);

  const papersOf = (c) => PUBLISHED_PAPERS.filter((p) => c.competitions.includes(p.competition));
  const routePapersCount = routeComp ? papersOf(routeComp).length : 0;
  useDocumentMeta(routeComp ? olympiadCompetitionMeta(routeComp, routePapersCount) : OLIMPIADE_HUB_META);

  const setFilter = (key, value) => {
    const next = new URLSearchParams(params);
    if (value === 'all') next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const competitions = useMemo(
    () => OLYMPIAD_COMPETITIONS.filter((c) => c.amc || papersOf(c).length > 0),
    []
  );
  const amcTotal = ALL_AMC_CHAPTERS_INDEX.length;

  const shownCompetitions = competitions.filter((c) => active === 'all' || c.id === active);
  const routePapers = useMemo(() => (routeComp ? papersOf(routeComp) : []), [routeComp]);

  const availableSubjects = useMemo(() => {
    const set = new Set(routePapers.map((p) => p.subject));
    return Array.from(set);
  }, [routePapers]);

  const availableYears = useMemo(() => {
    const set = new Set(routePapers.map((p) => extractPaperYear(p)).filter(Boolean));
    return Array.from(set).sort((a, b) => b - a);
  }, [routePapers]);

  const matchesFilters = (p) => {
    if (level !== 'all' && levelNameOfGrade(p.grade) !== level) return false;
    if (routeComp && subjectFilter !== 'all' && p.subject !== subjectFilter) return false;
    if (routeComp && yearFilter !== 'all' && extractPaperYear(p) !== Number(yearFilter)) return false;
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      const hay = `${p.title} ${p.topic} ${p.competition || ''} kelas ${p.grade}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  };

  const faqsToRender = routeComp?.faqs?.length ? routeComp.faqs : HUB_FAQS;

  return (
    <div className="handbook-container">
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
            : 'Soal dan pembahasan dari berbagai kompetisi matematika dan sains nasional maupun internasional. Pilih kompetisi atau jenjang, lalu buka paketnya.'}
        </p>

        <div className="hub-level-tabs" role="tablist" aria-label="Pilih kompetisi">
          <Link
            to="/olimpiade"
            className={`hub-level-pill ${active === 'all' ? 'active' : ''}`}
            style={{ textDecoration: 'none' }}
          >
            Semua kompetisi
          </Link>
          {competitions.map((c) => (
            <Link
              key={c.id}
              to={c.path || `/olimpiade/${c.id}`}
              className={`hub-level-pill ${active === c.id ? 'active' : ''}`}
              style={{ textDecoration: 'none' }}
            >
              {c.label}
            </Link>
          ))}
        </div>

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

          {routeComp && availableSubjects.length > 1 && (
            <select
              className="filter-select"
              value={subjectFilter}
              onChange={(e) => setFilter('m', e.target.value)}
              aria-label="Filter bidang"
            >
              <option value="all">Semua Bidang</option>
              {availableSubjects.map((s) => (
                <option key={s} value={s}>{PAPER_SUBJECT_META[s]?.label || s}</option>
              ))}
            </select>
          )}

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
          const papers = papersOf(c).filter(matchesFilters);
          const amcLevels = c.amc
            ? AMC_LEVELS_METADATA.filter((lvl) => level === 'all' || (level === 'SMP' && lvl.level === 8) || (level === 'SMA' && lvl.level !== 8))
            : [];
          if (!c.amc && papers.length === 0) return null;
          if (c.amc && amcLevels.length === 0 && papers.length === 0) return null;
          return (
            <article key={c.id} className="olim-block" id={`kompetisi-${c.id}`}>
              <header className="olim-block-head">
                <span className="hub-icon-box hub-icon-crimson">{c.amc ? <Award size={18} /> : <Trophy size={18} />}</span>
                <div style={{ flex: 1 }}>
                  <div className="olim-block-title-row">
                    <h2 className="olim-block-title">
                      {routeComp ? c.label : <Link to={c.path || `/olimpiade/${c.id}`}>{c.label}</Link>}
                    </h2>
                    {!routeComp && (
                      <Link to={c.path || `/olimpiade/${c.id}`} className="hub-more-link">
                        Halaman {c.label} <ArrowRight size={13} />
                      </Link>
                    )}
                  </div>
                  <p className="olim-block-blurb">{c.blurb}</p>
                </div>
              </header>

              {c.amc && amcLevels.length > 0 && (
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
                <div className="info-grid" style={c.amc && amcLevels.length > 0 ? { marginTop: '0.85rem' } : undefined}>
                  {papers.map((paper) => (
                    <PaperCard key={paper.id} paper={paper} progress={paperProgressMap[paper.id]} />
                  ))}
                </div>
              )}
            </article>
          );
        })}

        {shownCompetitions.every((c) => {
          const papersCount = papersOf(c).filter(matchesFilters).length;
          const amcLevelsCount = c.amc
            ? AMC_LEVELS_METADATA.filter((lvl) => level === 'all' || (level === 'SMP' && lvl.level === 8) || (level === 'SMA' && lvl.level !== 8)).length
            : 0;
          return papersCount === 0 && amcLevelsCount === 0;
        }) && (
          <p className="olim-empty">Belum ada paket untuk kombinasi kompetisi dan filter ini.</p>
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
