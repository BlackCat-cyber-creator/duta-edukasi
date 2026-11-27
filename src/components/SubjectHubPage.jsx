import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileCheck2, Sigma } from 'lucide-react';
import { curriculumFor } from '../data/curriculumData';
import { PUBLISHED_PAPER_MANIFEST, PAPER_SUBJECT_META } from '../data/papers/manifest';
import { ORGANIZATION } from '../data/siteInfo';
import { subjectHubMeta, levelLabel } from '../utils/seoMeta';
import { gradePath, chapterPath } from '../utils/seoRoutes';
import { getSubjectHubFaqs } from '../utils/seoFaqs';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

/**
 * Halaman hub per mata pelajaran sekolah (/matematika, /ipa, /fisika, /kimia, /biologi).
 * Memperkuat arsitektur hub-and-spoke untuk SEO dan memudahkan penjelajahan per jenjang.
 */
export function SubjectHubPage({ subject = 'matematika' }) {
  const meta = subjectHubMeta(subject);
  useDocumentMeta(meta);

  const dataSubject = subject === 'fisika' ? 'ipa' : subject;
  const rawGrades = curriculumFor(dataSubject);
  const grades = subject === 'fisika'
    ? rawGrades.filter((g) => g.grade >= 10)
    : subject === 'ipa'
      ? rawGrades.filter((g) => g.grade <= 9)
      : rawGrades;

  const papersCount = PUBLISHED_PAPER_MANIFEST.filter((p) => p.subject === subject).length;
  const faqs = getSubjectHubFaqs(subject);
  const totalChapters = grades.reduce((s, g) => s + (g.chapters?.length || 0), 0);

  return (
    <div className="handbook-container seo-page">
      <nav className="seo-breadcrumb" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <span>{meta.name}</span>
      </nav>

      <section className="info-hero">
        <div className="paper-card-badges" style={{ marginBottom: '0.45rem' }}>
          <span className="badge badge-smp">{meta.levelText}</span>
          <span className="badge badge-subtle">{grades.length} Kelas · {totalChapters} Bab</span>
          <span className="badge badge-subtle">{ORGANIZATION.licenseName}</span>
        </div>
        <h1>Materi &amp; Latihan {meta.name} ({meta.levelText})</h1>
        <p style={{ margin: 0 }}>{meta.description}</p>
      </section>

      <div className="info-grid">
        {grades.map((g) => (
          <article key={g.grade} className="info-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <h2 style={{ fontSize: '1.1rem', margin: 0 }}>
                <Link to={gradePath(g.grade, subject)} style={{ color: 'var(--brand-navy)', textDecoration: 'none' }}>
                  {subject === 'ipa' ? 'IPA' : meta.name.replace(/\s+(SMA|Terpadu)$/i, '')} Kelas {g.grade} {levelLabel(g.grade)}
                </Link>
              </h2>
              <span className="badge badge-subtle">{g.chapters?.length || 0} bab</span>
            </div>
            {g.description && (
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>{g.description}</p>
            )}
            <ul style={{ margin: '0 0 0.75rem', paddingLeft: '1.15rem', fontSize: '0.88rem' }}>
              {(g.chapters || []).map((ch) => (
                <li key={ch.id} style={{ marginBottom: '0.25rem' }}>
                  <Link to={chapterPath(g.grade, ch.id, subject)}>{ch.title}</Link>
                </li>
              ))}
            </ul>
            <Link to={gradePath(g.grade, subject)} className="hub-more-link">
              Buka Kelas {g.grade} <ArrowRight size={13} />
            </Link>
          </article>
        ))}
      </div>

      <div className="hub-ref-grid" style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
        {papersCount > 0 && (
          <Link to={`/paket-soal/${subject}`} className="hub-ref-card">
            <FileCheck2 size={16} />
            <div>
              <strong>Paket Soal {PAPER_SUBJECT_META[subject]?.label || meta.name} ({papersCount})</strong>
              <span>Kunci jawaban, prinsip &amp; rubrik skor</span>
            </div>
          </Link>
        )}
        <Link to="/rumus" className="hub-ref-card">
          <Sigma size={16} />
          <div>
            <strong>Kumpulan Rumus</strong>
            <span>Referensi cepat KaTeX per bab</span>
          </div>
        </Link>
        <Link to="/daftar-isi" className="hub-ref-card">
          <BookOpen size={16} />
          <div>
            <strong>Daftar Isi per Topik</strong>
            <span>Jelajah materi lintas kelas</span>
          </div>
        </Link>
      </div>

      {faqs.length > 0 && (
        <section className="info-card seo-faq-box" aria-label="Pertanyaan Umum">
          <h2 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Pertanyaan Umum {meta.name}</h2>
          <div className="seo-faq-grid">
            {faqs.map((f) => (
              <div key={f.question} className="seo-faq-item">
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default SubjectHubPage;
