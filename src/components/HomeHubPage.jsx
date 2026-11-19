import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  FlaskConical,
  Atom,
  Trophy,
  Globe,
  Compass,
  ArrowRight,
  FileText,
  Sigma
} from 'lucide-react';
import { PUBLISHED_PAPERS, PAPER_SUBJECT_META, paperPath } from '../data/papers/index';
import { HOME_META } from '../utils/seoMeta';
import { gradePath, amcLevelPath } from '../utils/seoRoutes';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { SiteSearch } from './SiteSearch';

const LEVEL_TABS = [
  { id: 'all', label: 'Semua' },
  { id: 'sd', label: 'SD (4–6)' },
  { id: 'smp', label: 'SMP (7–9)' },
  { id: 'sma', label: 'SMA (10–12)' },
  { id: 'olimpiade', label: 'Olimpiade' },
  { id: 'en', label: 'Internasional (EN)' }
];

function matchesLevel(paper, filter) {
  if (filter === 'all') return true;
  if (filter === 'en') return paper.lang === 'en';
  if (filter === 'olimpiade') return String(paper.subject || '').startsWith('olimpiade');
  if (filter === 'sd') return paper.grade <= 6;
  if (filter === 'smp') return paper.grade >= 7 && paper.grade <= 9;
  if (filter === 'sma') return paper.grade >= 10;
  return true;
}

function showSchoolCard(filter, minG, maxG) {
  if (filter === 'all' || filter === 'olimpiade' || filter === 'en') return true;
  if (filter === 'sd') return minG <= 6;
  if (filter === 'smp') return maxG >= 7 && minG <= 9;
  if (filter === 'sma') return maxG >= 10;
  return true;
}

function visibleGradesFor(grades, filter) {
  if (filter === 'sd') return grades.filter((g) => g <= 6);
  if (filter === 'smp') return grades.filter((g) => g >= 7 && g <= 9);
  if (filter === 'sma') return grades.filter((g) => g >= 10);
  return grades;
}

export function HomeHubPage() {
  useDocumentMeta(HOME_META);
  const [levelFilter, setLevelFilter] = useState('all');

  const mathGrades = visibleGradesFor([4, 5, 6, 7, 8, 9, 10, 11, 12], levelFilter);
  const ipaGrades = visibleGradesFor([4, 5, 6, 7, 8, 9], levelFilter);
  const fisikaGrades = visibleGradesFor([10, 11, 12], levelFilter);

  const filteredPapers = PUBLISHED_PAPERS.filter((p) => matchesLevel(p, levelFilter));
  const englishPapers = PUBLISHED_PAPERS.filter((p) => p.lang === 'en').slice(0, 6);
  const olympiadMatCount = PUBLISHED_PAPERS.filter((p) => p.subject === 'olimpiade-mat').length;
  const olympiadSainsCount = PUBLISHED_PAPERS.filter((p) => p.subject === 'olimpiade-sains').length;

  return (
    <div className="handbook-container">
      {/* Structural Blueprint Header */}
      <section className="hub-hero">
        <h1 className="hub-hero-title">Matematika &amp; Sains</h1>
        <p className="hub-hero-desc">
          Materi terstruktur, rumus kunci, kuis latihan, dan paket soal interaktif dari tingkat dasar hingga olimpiade.
        </p>
        <div className="hub-search-wrap">
          <SiteSearch />
        </div>
        <div className="hub-level-tabs" role="tablist" aria-label="Filter jenjang">
          {LEVEL_TABS.map((tab) => (
            <button
              key={tab.id}
              id={`btn-hub-level-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={levelFilter === tab.id}
              className={`hub-level-pill ${levelFilter === tab.id ? 'active' : ''}`}
              onClick={() => setLevelFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 4 Structural Bento Pillars */}
      <section className="hub-section" aria-label="Pilar Utama Belajar">
        <div className="hub-bento-grid">
          {/* Pilar 1: Kurikulum Sekolah */}
          <article className="hub-pillar hub-pillar-wide hub-accent-navy">
            <div className="hub-pillar-head">
              <div className="hub-pillar-title-row">
                <span className="hub-icon-box hub-icon-navy"><BookOpen size={18} /></span>
                <div>
                  <h2 className="hub-pillar-title">Materi Sekolah — Matematika &amp; Sains</h2>
                  <p className="hub-pillar-sub">Ringkasan materi, contoh soal, dan kuis per bab.</p>
                </div>
              </div>
              <Link to="/daftar-isi" className="hub-more-link">
                Daftar isi <ArrowRight size={13} />
              </Link>
            </div>

            <div className="hub-subject-rows">
              {showSchoolCard(levelFilter, 4, 12) && (
                <div className="hub-subject-row" style={{ borderLeftColor: '#12337A' }}>
                  <div className="hub-subject-label">
                    <strong>Matematika</strong>
                  </div>
                  <div className="hub-chip-list">
                    {mathGrades.map((g) => (
                      <Link key={g} to={gradePath(g, 'matematika')} className="hub-grade-chip">
                        Kelas {g}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {showSchoolCard(levelFilter, 4, 9) && ipaGrades.length > 0 && (
                <div className="hub-subject-row" style={{ borderLeftColor: '#0F766E' }}>
                  <div className="hub-subject-label">
                    <strong>IPA (SD &amp; SMP)</strong>
                  </div>
                  <div className="hub-chip-list">
                    {ipaGrades.map((g) => (
                      <Link key={g} to={gradePath(g, 'ipa')} className="hub-grade-chip">
                        Kelas {g}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {showSchoolCard(levelFilter, 10, 12) && fisikaGrades.length > 0 && (
                <div className="hub-subject-row" style={{ borderLeftColor: '#0369A1' }}>
                  <div className="hub-subject-label">
                    <strong>Fisika (SMA)</strong>
                  </div>
                  <div className="hub-chip-list">
                    {fisikaGrades.map((g) => (
                      <Link key={g} to={gradePath(g, 'fisika')} className="hub-grade-chip">
                        Kelas {g}
                      </Link>
                    ))}
                    <Link to="/paket-soal/fisika" className="hub-grade-chip hub-chip-accent">
                      Paket Soal Fisika →
                    </Link>
                  </div>
                </div>
              )}

              {showSchoolCard(levelFilter, 10, 12) && (
                <div className="hub-subject-split">
                  <Link to="/paket-soal/kimia" className="hub-mini-subject" style={{ borderLeftColor: '#6D28D9' }}>
                    <FlaskConical size={16} color="#6D28D9" />
                    <div>
                      <strong>Kimia (SMA)</strong>
                      <span>Paket soal &amp; pembahasan</span>
                    </div>
                    <ArrowRight size={14} className="hub-mini-arrow" />
                  </Link>
                  <Link to="/paket-soal/biologi" className="hub-mini-subject" style={{ borderLeftColor: '#047857' }}>
                    <Atom size={16} color="#047857" />
                    <div>
                      <strong>Biologi (SMA)</strong>
                      <span>Paket soal &amp; pembahasan</span>
                    </div>
                    <ArrowRight size={14} className="hub-mini-arrow" />
                  </Link>
                </div>
              )}
            </div>
          </article>

          {/* Pilar 2: Olimpiade Matematika & Sains */}
          <article className="hub-pillar hub-accent-crimson">
            <div className="hub-pillar-head">
              <div className="hub-pillar-title-row">
                <span className="hub-icon-box hub-icon-crimson"><Trophy size={18} /></span>
                <div>
                  <h2 className="hub-pillar-title">Olimpiade &amp; Kompetisi</h2>
                  <p className="hub-pillar-sub">Latihan berjenjang SD, SMP, SMA hingga AMC.</p>
                </div>
              </div>
            </div>

            <div className="hub-link-stack">
              <Link to="/paket-soal/olimpiade-mat" className="hub-stack-item">
                <span>Olimpiade Matematika ({olympiadMatCount} paket)</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/paket-soal/olimpiade-sains" className="hub-stack-item">
                <span>Olimpiade Sains / OSN IPA ({olympiadSainsCount} paket)</span>
                <ArrowRight size={14} />
              </Link>
              <div className="hub-chip-list" style={{ marginTop: '0.25rem' }}>
                <Link to={amcLevelPath(8)} className="hub-grade-chip">AMC 8</Link>
                <Link to={amcLevelPath(10)} className="hub-grade-chip">AMC 10</Link>
                <Link to={amcLevelPath(12)} className="hub-grade-chip">AMC 12</Link>
                <Link to="/prestasi" className="hub-grade-chip">Arsip Prestasi</Link>
              </div>
            </div>
          </article>

          {/* Pilar 3: Jalur Internasional / Bilingual */}
          <article className="hub-pillar hub-accent-sky">
            <div className="hub-pillar-head">
              <div className="hub-pillar-title-row">
                <span className="hub-icon-box hub-icon-sky"><Globe size={18} /></span>
                <div>
                  <h2 className="hub-pillar-title">Internasional / Bilingual (EN)</h2>
                  <p className="hub-pillar-sub">Soal bahasa Inggris berstandar Cambridge &amp; IGCSE.</p>
                </div>
              </div>
            </div>
            <div className="hub-link-stack">
              {englishPapers.slice(0, 4).map((p) => (
                <Link key={p.id} to={paperPath(p)} className="hub-stack-item">
                  <span>{p.title}</span>
                  <ArrowRight size={14} />
                </Link>
              ))}
              <Link to="/paket-soal" className="hub-more-link" style={{ marginTop: '0.25rem' }}>
                Semua paket English <ArrowRight size={13} />
              </Link>
            </div>
          </article>

          {/* Pilar 4: Ujian & Referensi Cepat */}
          <article className="hub-pillar hub-pillar-wide hub-accent-slate">
            <div className="hub-pillar-head">
              <div className="hub-pillar-title-row">
                <span className="hub-icon-box hub-icon-slate"><Compass size={18} /></span>
                <div>
                  <h2 className="hub-pillar-title">Paket Soal, Ujian &amp; Referensi</h2>
                  <p className="hub-pillar-sub">Latihan TKA, kumpulan rumus lengkap, dan indeks topik.</p>
                </div>
              </div>
            </div>

            <div className="hub-ref-grid">
              <Link to="/paket-soal" className="hub-ref-card">
                <FileText size={16} />
                <div>
                  <strong>Paket Soal Interaktif</strong>
                  <span>Kunci jawaban &amp; rubrik skor B1/M1/A1</span>
                </div>
              </Link>
              <Link to="/tka" className="hub-ref-card">
                <Compass size={16} />
                <div>
                  <strong>Latihan TKA</strong>
                  <span>Matematika SD/SMP, IPA SMP &amp; Fisika SMA</span>
                </div>
              </Link>
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
                  <strong>Daftar Isi Topik</strong>
                  <span>Jelajah bab lintas kelas</span>
                </div>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Paket Soal Terpilih / Live Interactive Papers */}
      <section className="hub-section" aria-label="Paket Soal Interaktif">
        <div className="hub-section-header">
          <h2>Paket Soal Interaktif ({filteredPapers.length})</h2>
          <Link to="/paket-soal" className="hub-more-link">
            Lihat semua <ArrowRight size={14} />
          </Link>
        </div>

        <div className="hub-papers-grid">
          {filteredPapers.slice(0, 9).map((paper) => {
            const meta = PAPER_SUBJECT_META[paper.subject] || {};
            const accent = meta.color || '#12337A';
            return (
              <Link
                key={paper.id}
                to={paperPath(paper)}
                className="hub-paper-card"
                style={{ borderTopColor: accent }}
              >
                <div className="hub-paper-meta">
                  <span className="hub-dot" style={{ backgroundColor: accent }} />
                  <span>{meta.shortLabel || paper.subject} · Kelas {paper.grade}</span>
                  <span className={`hub-lang-tag ${paper.lang === 'en' ? 'en' : 'id'}`}>
                    {paper.lang === 'en' ? 'EN' : 'ID'}
                  </span>
                </div>
                <h3 className="hub-paper-title">{paper.title}</h3>
                <p className="hub-paper-topic">{paper.topic}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default HomeHubPage;
