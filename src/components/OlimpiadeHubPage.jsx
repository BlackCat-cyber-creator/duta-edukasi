import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Trophy, Award, ArrowRight, FileCheck2 } from 'lucide-react';
import {
  PUBLISHED_PAPER_MANIFEST as PUBLISHED_PAPERS,
  PAPER_SUBJECT_META,
  OLYMPIAD_COMPETITIONS,
  paperPath,
  formatPaperMeta,
  levelNameOfGrade
} from '../data/papers/manifest';
import { AMC_LEVELS_METADATA, ALL_AMC_CHAPTERS_INDEX } from '../data/amc';
import { amcLevelPath } from '../utils/seoRoutes';
import { OLIMPIADE_HUB_META } from '../utils/seoMeta';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const LEVELS = [
  { id: 'all', label: 'Semua jenjang' },
  { id: 'SD', label: 'SD' },
  { id: 'SMP', label: 'SMP' },
  { id: 'SMA', label: 'SMA' }
];

/** Pusat Olimpiade (/olimpiade): semua kompetisi disajikan setara, AMC salah satunya. */
export function OlimpiadeHubPage() {
  useDocumentMeta(OLIMPIADE_HUB_META);
  const [params, setParams] = useSearchParams();
  const active = OLYMPIAD_COMPETITIONS.some((c) => c.id === params.get('k')) ? params.get('k') : 'all';
  const level = LEVELS.some((l) => l.id === params.get('j')) ? params.get('j') : 'all';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(params);
    if (value === 'all') next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const papersOf = (c) => PUBLISHED_PAPERS.filter((p) => c.competitions.includes(p.competition));
  const competitions = useMemo(
    () => OLYMPIAD_COMPETITIONS.filter((c) => c.amc || papersOf(c).length > 0),
    []
  );
  const amcTotal = ALL_AMC_CHAPTERS_INDEX.length;

  const shownCompetitions = competitions.filter((c) => active === 'all' || c.id === active);
  const matchesLevel = (p) => level === 'all' || levelNameOfGrade(p.grade) === level;

  return (
    <div className="handbook-container">
      <section className="hub-hero">
        <h1 className="hub-hero-title">Olimpiade &amp; Kompetisi</h1>
        <p className="hub-hero-desc">
          Soal dan pembahasan dari berbagai kompetisi matematika dan sains nasional maupun internasional. Pilih
          kompetisi atau jenjang, lalu buka paketnya.
        </p>
        <div className="hub-level-tabs" role="tablist" aria-label="Filter kompetisi">
          <button
            type="button"
            role="tab"
            aria-selected={active === 'all'}
            className={`hub-level-pill ${active === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('k', 'all')}
          >
            Semua kompetisi
          </button>
          {competitions.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={active === c.id}
              className={`hub-level-pill ${active === c.id ? 'active' : ''}`}
              onClick={() => setFilter('k', c.id)}
            >
              {c.label}
            </button>
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
      </section>

      <section className="hub-section" aria-label="Daftar kompetisi">
        {shownCompetitions.map((c) => {
          const papers = papersOf(c).filter(matchesLevel);
          const amcLevels = c.amc
            ? AMC_LEVELS_METADATA.filter((lvl) => level === 'all' || (level === 'SMP' && lvl.level === 8) || (level === 'SMA' && lvl.level !== 8))
            : [];
          if (!c.amc && papers.length === 0) return null;
          if (c.amc && amcLevels.length === 0 && papers.length === 0) return null;
          return (
            <article key={c.id} className="olim-block" id={`kompetisi-${c.id}`}>
              <header className="olim-block-head">
                <span className="hub-icon-box hub-icon-crimson">{c.amc ? <Award size={18} /> : <Trophy size={18} />}</span>
                <div>
                  <h2 className="olim-block-title">{c.label}</h2>
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
                  {papers.map((paper) => {
                    const meta = PAPER_SUBJECT_META[paper.subject] || {};
                    const info = formatPaperMeta(paper);
                    return (
                      <article key={paper.id} className="info-card paper-card" style={{ '--card-accent': meta.color || '#9F1239' }}>
                        <div className="paper-card-badges">
                          <span className="badge badge-smp">{info.tag}</span>
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
                  })}
                </div>
              )}
            </article>
          );
        })}
        {shownCompetitions.every((c) => {
          const papersCount = papersOf(c).filter(matchesLevel).length;
          const amcLevelsCount = c.amc
            ? AMC_LEVELS_METADATA.filter((lvl) => level === 'all' || (level === 'SMP' && lvl.level === 8) || (level === 'SMA' && lvl.level !== 8)).length
            : 0;
          return papersCount === 0 && amcLevelsCount === 0;
        }) && (
          <p className="olim-empty">Belum ada paket untuk kombinasi kompetisi dan jenjang ini.</p>
        )}
      </section>

      <p className="handbook-quicklinks">
        <Link to="/paket-soal">Semua paket soal</Link>
        <span aria-hidden="true">·</span>
        <Link to="/tentang#prestasi">Arsip prestasi siswa</Link>
      </p>
    </div>
  );
}

export default OlimpiadeHubPage;
