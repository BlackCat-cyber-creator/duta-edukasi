import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Sigma,
  Microscope,
  Atom,
  FlaskConical,
  Dna,
  Trophy,
  Globe,
  Compass,
  ArrowRight,
  FileCheck2,
  ClipboardCheck
} from 'lucide-react';
import { PUBLISHED_PAPERS, PAPER_SUBJECT_META, paperPath, formatPaperMeta, OLYMPIAD_COMPETITIONS } from '../data/papers/index';
import { HOME_META } from '../utils/seoMeta';
import { gradePath } from '../utils/seoRoutes';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { SiteSearch } from './SiteSearch';
import { ORGANIZATION } from '../data/siteInfo';

const LEVEL_TABS = [
  { id: 'all', label: 'Semua' },
  { id: 'sd', label: 'SD (4–6)' },
  { id: 'smp', label: 'SMP (7–9)' },
  { id: 'sma', label: 'SMA (10–12)' },
  { id: 'olimpiade', label: 'Olimpiade' },
  { id: 'en', label: 'Internasional (EN)' }
];

/** Lima mata pelajaran sekolah dengan satu pola baris yang seragam. */
const SCHOOL_SUBJECTS = [
  { id: 'matematika', label: 'Matematika', grades: [4, 5, 6, 7, 8, 9, 10, 11, 12], Icon: Sigma, color: '#12337A' },
  { id: 'ipa', label: 'IPA (SD–SMP)', grades: [4, 5, 6, 7, 8, 9], Icon: Microscope, color: '#0F766E' },
  { id: 'fisika', label: 'Fisika (SMA)', grades: [10, 11, 12], Icon: Atom, color: '#0369A1' },
  { id: 'kimia', label: 'Kimia (SMA)', grades: [10, 11, 12], Icon: FlaskConical, color: '#6D28D9' },
  { id: 'biologi', label: 'Biologi (SMA)', grades: [10, 11, 12], Icon: Dna, color: '#047857' }
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

function visibleGradesFor(grades, filter) {
  if (filter === 'sd') return grades.filter((g) => g <= 6);
  if (filter === 'smp') return grades.filter((g) => g >= 7 && g <= 9);
  if (filter === 'sma') return grades.filter((g) => g >= 10);
  return grades;
}

function rangeLabel(grades) {
  return `Kelas ${grades[0]}–${grades[grades.length - 1]}`;
}

export function HomeHubPage() {
  useDocumentMeta(HOME_META);
  const [levelFilter, setLevelFilter] = useState('all');

  const filteredPapers = PUBLISHED_PAPERS.filter((p) => matchesLevel(p, levelFilter));
  const englishPapers = PUBLISHED_PAPERS.filter((p) => p.lang === 'en').slice(0, 6);
  const paperCountBySubject = PUBLISHED_PAPERS.reduce((acc, p) => {
    acc[p.subject] = (acc[p.subject] || 0) + 1;
    return acc;
  }, {});
  const competitionCount = (names) => PUBLISHED_PAPERS.filter((p) => names.includes(p.competition)).length;

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
          {/* Pilar 1: Kurikulum Sekolah — lima mata pelajaran, satu pola baris */}
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
              {SCHOOL_SUBJECTS.map(({ id, label, grades, Icon, color }) => {
                const shown = visibleGradesFor(grades, levelFilter);
                if (shown.length === 0) return null;
                const papers = paperCountBySubject[id] || 0;
                return (
                  <div key={id} className="hub-subject-row" style={{ '--row-accent': color }}>
                    <Link to={gradePath(shown[0], id)} className="hub-subject-label" aria-label={`${label}, ${rangeLabel(grades)}`}>
                      <span className="hub-subject-icon"><Icon size={17} /></span>
                      <span className="hub-subject-name">
                        <strong>{label}</strong>
                        <small>{rangeLabel(grades)}</small>
                      </span>
                    </Link>
                    <div className="hub-chip-list">
                      {shown.map((g) => (
                        <Link key={g} to={gradePath(g, id)} className="hub-grade-chip">
                          Kelas {g}
                        </Link>
                      ))}
                      {papers > 0 && (
                        <Link to={`/paket-soal/${id}`} className="hub-grade-chip hub-chip-accent">
                          Paket Soal ({papers}) <ArrowRight size={12} />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          {/* Pilar 2: Olimpiade & Kompetisi, disajikan setara */}
          <article className="hub-pillar hub-accent-crimson">
            <div className="hub-pillar-head">
              <div className="hub-pillar-title-row">
                <span className="hub-icon-box hub-icon-crimson"><Trophy size={18} /></span>
                <div>
                  <h2 className="hub-pillar-title">Olimpiade &amp; Kompetisi</h2>
                  <p className="hub-pillar-sub">Latihan soal dari berbagai kompetisi nasional dan internasional.</p>
                </div>
              </div>
              <Link to="/olimpiade" className="hub-more-link">
                Semua <ArrowRight size={13} />
              </Link>
            </div>

            <div className="hub-chip-list">
              {OLYMPIAD_COMPETITIONS.map((c) => {
                const n = c.amc ? null : competitionCount(c.competitions);
                if (n === 0) return null;
                return (
                  <Link key={c.id} to={`/olimpiade?k=${c.id}`} className="hub-grade-chip">
                    {c.label}{n ? ` (${n})` : ''}
                  </Link>
                );
              })}
              <Link to="/prestasi" className="hub-grade-chip hub-chip-accent">Arsip Prestasi</Link>
            </div>
          </article>

          {/* Pilar 3: Jalur Internasional / Bilingual */}
          <article className="hub-pillar hub-accent-sky">
            <div className="hub-pillar-head">
              <div className="hub-pillar-title-row">
                <span className="hub-icon-box hub-icon-sky"><Globe size={18} /></span>
                <div>
                  <h2 className="hub-pillar-title">Internasional / Bilingual (EN)</h2>
                  <p className="hub-pillar-sub">Soal bahasa Inggris berstandar Cambridge &amp; IGCSE serta kompetisi internasional.</p>
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
                <FileCheck2 size={16} />
                <div>
                  <strong>Paket Soal Interaktif</strong>
                  <span>Kunci jawaban &amp; rubrik skor B1/M1/A1</span>
                </div>
              </Link>
              <Link to="/tka" className="hub-ref-card">
                <ClipboardCheck size={16} />
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
            const info = formatPaperMeta(paper);
            return (
              <Link
                key={paper.id}
                to={paperPath(paper)}
                className="hub-paper-card"
                style={{ '--card-accent': accent }}
              >
                <div className="hub-paper-meta">
                  <span className="hub-dot" style={{ backgroundColor: accent }} />
                  <span>{info.tag}</span>
                  <span className="lang-pill">{info.lang}</span>
                </div>
                <h3 className="hub-paper-title">{paper.title}</h3>
                <p className="hub-paper-topic">{info.itemsLabel} · {paper.topic}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Info singkat tentang Duta e-dukasi (tanpa promosi kelas) */}
      <section className="home-about" aria-label="Tentang Duta e-dukasi">
        <div className="home-about-body">
          <h2 className="home-about-title">Tentang {ORGANIZATION.name}</h2>
          <p>
            {ORGANIZATION.name} adalah platform belajar Matematika &amp; Sains terbuka (lisensi {ORGANIZATION.licenseName}) dari
            Bimbingan Belajar Duta Edukasi, Pontianak: materi per bab, kuis, paket soal, dan arsip olimpiade.
          </p>
          <p className="home-about-address">{ORGANIZATION.fullAddress}</p>
        </div>
        <div className="home-about-links">
          <Link to="/tentang" className="hub-grade-chip hub-chip-accent">Tentang kami <ArrowRight size={12} /></Link>
          <Link to="/pendiri" className="hub-grade-chip">Pendiri</Link>
          <Link to="/prestasi" className="hub-grade-chip">Prestasi</Link>
          <Link to="/kontak" className="hub-grade-chip">Kontak &amp; lokasi</Link>
        </div>
      </section>
    </div>
  );
}

export default HomeHubPage;
