import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FileText, ArrowRight, Globe, Search } from 'lucide-react';
import {
  PUBLISHED_PAPERS,
  PAPER_SUBJECT_META,
  getPapersBySubject,
  paperPath,
  subjectHubPath
} from '../data/papers/index';
import { ORGANIZATION } from '../data/siteInfo';
import { papersHubMeta } from '../utils/seoMeta';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function PapersHubPage() {
  const { subject } = useParams();
  const activeSubject = subject && PAPER_SUBJECT_META[subject] ? subject : 'all';
  const [gradeFilter, setGradeFilter] = useState('ALL');
  const [langFilter, setLangFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  useDocumentMeta(papersHubMeta(activeSubject));

  const subjectCounts = useMemo(() => {
    const counts = { all: PUBLISHED_PAPERS.length };
    for (const p of PUBLISHED_PAPERS) {
      counts[p.subject] = (counts[p.subject] || 0) + 1;
    }
    return counts;
  }, []);

  const papersForSubject = useMemo(() => getPapersBySubject(activeSubject), [activeSubject]);

  const gradesAvailable = useMemo(
    () => Array.from(new Set(papersForSubject.map((p) => p.grade))).sort((a, b) => a - b),
    [papersForSubject]
  );

  const visiblePapers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return papersForSubject.filter((p) => {
      if (gradeFilter !== 'ALL' && p.grade !== Number(gradeFilter)) return false;
      if (langFilter !== 'all' && (p.lang || 'id') !== langFilter) return false;
      if (q) {
        const hay = `${p.title} ${p.topic} ${p.subject} kelas ${p.grade}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [papersForSubject, gradeFilter, langFilter, searchQuery]);

  return (
    <div className="handbook-container seo-page">
      <nav className="seo-breadcrumb" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <span>Paket Soal</span>
        {activeSubject !== 'all' && <> › <span>{PAPER_SUBJECT_META[activeSubject].label}</span></>}
      </nav>

      <section className="info-hero">
        <h1>Paket Soal {ORGANIZATION.name}</h1>
        <p style={{ margin: 0 }}>
          Kumpulan soal terstruktur Matematika, Sains (IPA, Fisika, Kimia, Biologi), dan Olimpiade lengkap dengan kunci
          jawaban exact/SI, langkah penyelesaian bertahap, serta rubrik B1/M1/A1 dalam bahasa asli sumbernya.
        </p>
      </section>

      {/* Filter Mapel */}
      <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
        <Link
          to="/paket-soal"
          onClick={() => setGradeFilter('ALL')}
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
              onClick={() => setGradeFilter('ALL')}
              className={`btn ${activeSubject === m.id ? 'btn-royal' : 'btn-outline'}`}
              style={{ fontSize: '0.83rem', textDecoration: 'none', color: activeSubject === m.id ? '#fff' : undefined }}
            >
              {m.label} ({subjectCounts[m.id]})
            </Link>
          ) : null
        ))}
      </div>

      {/* Pencarian, Bahasa & Filter Kelas */}
      <div className="formula-controls" style={{ marginBottom: '1rem' }}>
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
              onClick={() => setLangFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="formula-search-box">
          <Search size={15} />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari judul atau topik paket soal..."
            aria-label="Cari paket soal"
          />
        </div>
      </div>

      {gradesAvailable.length > 1 && (
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <button
            type="button"
            className={`btn ${gradeFilter === 'ALL' ? 'btn-primary' : 'btn-subtle'}`}
            style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }}
            onClick={() => setGradeFilter('ALL')}
          >
            Semua Kelas
          </button>
          {gradesAvailable.map((g) => (
            <button
              key={g}
              type="button"
              className={`btn ${Number(gradeFilter) === g ? 'btn-primary' : 'btn-subtle'}`}
              style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }}
              onClick={() => setGradeFilter(String(g))}
            >
              Kelas {g}
            </button>
          ))}
        </div>
      )}

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
            return (
              <article key={paper.id} className="info-card" style={{ borderTop: `3px solid ${accent}` }}>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  <span className="badge badge-smp">{subjectLabel} Kelas {paper.grade}</span>
                  <span className={`badge ${paper.lang === 'en' ? 'badge-lang-en' : 'badge-lang-id'}`}>
                    <Globe size={11} /> {paper.lang === 'en' ? 'English' : 'Bahasa Indonesia'}
                  </span>
                  <span className="badge badge-subtle">{paper.totalMarks} Marks</span>
                </div>
                <h2 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                  <Link to={paperPath(paper)} style={{ color: 'var(--brand-navy)', textDecoration: 'none' }}>
                    {paper.title}
                  </Link>
                </h2>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                  Topik: {paper.topic} · {paper.questions.length} soal ({paper.track}).
                </p>
                <Link
                  to={paperPath(paper)}
                  className="btn btn-royal"
                  style={{ fontSize: '0.84rem', textDecoration: 'none', color: '#fff' }}
                >
                  <FileText size={15} /> Buka Paket &amp; Rubrik <ArrowRight size={14} />
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PapersHubPage;
