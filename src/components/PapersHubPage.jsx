import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FileText, ArrowRight, Globe } from 'lucide-react';
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
import { WhatsappBanner } from './WhatsappCta';

export function PapersHubPage() {
  const { subject } = useParams();
  const activeSubject = subject && PAPER_SUBJECT_META[subject] ? subject : 'all';
  const [gradeFilter, setGradeFilter] = useState('ALL');
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

  const visiblePapers = useMemo(
    () => (gradeFilter === 'ALL' ? papersForSubject : papersForSubject.filter((p) => p.grade === Number(gradeFilter))),
    [papersForSubject, gradeFilter]
  );

  return (
    <div className="handbook-container seo-page">
      <nav className="seo-breadcrumb" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <span>Paket Soal</span>
        {activeSubject !== 'all' && <> › <span>{PAPER_SUBJECT_META[activeSubject].label}</span></>}
      </nav>

      <section className="info-hero">
        <h1>Paket Soal Terstruktur {ORGANIZATION.name}</h1>
        <p style={{ margin: 0 }}>
          Kumpulan soal latihan terstruktur &amp; berjenjang beserta gambar diagram, kunci jawaban exact &amp; desimal SI,
          prinsip fisis/matematis, pembahasan langkah demi langkah, serta rubrik penilaian mandiri (B1/M1/A1). Setiap paket
          disajikan dalam bahasa asli sumbernya.
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

      {/* Filter Kelas */}
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
      <div className="info-grid">
        {visiblePapers.map((paper) => {
          const subjectLabel = PAPER_SUBJECT_META[paper.subject]?.shortLabel || paper.subject;
          return (
            <article key={paper.id} className="info-card">
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
                Topik: {paper.topic} · {paper.questions.length} soal terstruktur ({paper.track}).
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

      <WhatsappBanner />
    </div>
  );
}

export default PapersHubPage;
