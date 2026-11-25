import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import {
  Eye,
  EyeOff,
  CheckCircle2,
  BookOpen,
  Printer,
  RotateCcw,
  Flag,
  Loader2,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  Trophy
} from 'lucide-react';
import {
  PUBLISHED_PAPER_MANIFEST,
  getManifestBySlug,
  loadPaperBySlug,
  buildCorrectionIssueUrl,
  PAPER_SUBJECT_META,
  paperPath,
  subjectHubPath,
  formatPaperMeta,
  getRelatedPapers,
  competitionOfPaper
} from '../data/papers/manifest';
import { findChapterIndex } from '../data/curriculumData';
import { ORGANIZATION } from '../data/siteInfo';
import { SITE_URL, chapterPath } from '../utils/seoRoutes';
import { paperDetailMeta } from '../utils/seoMeta';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import {
  getPaperProgress,
  updatePaperProgress,
  toggleBookmark,
  isBookmarked,
  recordRecentActivity
} from '../utils/progress';
import { MathText } from './MathRenderer';

function parseRubricMarks(code) {
  const m = String(code || '').match(/^[BMA](\d+)$/i);
  return m ? Number(m[1]) : 0;
}

function computeEarnedMarks(paper, checkedRubrics, routeKey) {
  if (!paper) return 0;
  let earned = 0;
  for (const q of paper.questions) {
    for (const pt of q.parts) {
      (pt.rubric || []).forEach((r, idx) => {
        const rKey = `${routeKey}::${q.no}-${pt.label}-${idx}`;
        if (checkedRubrics[rKey]) earned += parseRubricMarks(r.code);
      });
    }
  }
  return earned;
}

export function PaperDetailPage() {
  const { subject, slug } = useParams();
  return <PaperDetailInner key={`${subject || ''}/${slug || ''}`} subject={subject} slug={slug} />;
}

function PaperDetailInner({ subject, slug }) {
  const manifestEntry = useMemo(() => getManifestBySlug(subject, slug), [subject, slug]);
  useDocumentMeta(
    manifestEntry
      ? paperDetailMeta(manifestEntry)
      : { title: `Paket Soal Tidak Ditemukan | ${ORGANIZATION.name}`, description: '', path: '/paket-soal' }
  );

  const [loadedState, setLoadedState] = useState({ key: '', paper: null, error: false });
  const [revealedKeys, setRevealedKeys] = useState({});
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [checkedRubrics, setCheckedRubrics] = useState(() => (
    manifestEntry ? (getPaperProgress(manifestEntry.id)?.checkedRubrics || {}) : {}
  ));
  const [completed, setCompleted] = useState(() => (
    manifestEntry ? Boolean(getPaperProgress(manifestEntry.id)?.completed) : false
  ));
  const [bookmarked, setBookmarked] = useState(() => (
    manifestEntry ? isBookmarked(paperPath(manifestEntry)) : false
  ));
  const [printMode, setPrintMode] = useState('full');
  const [retryCount, setRetryCount] = useState(0);

  const routeKey = manifestEntry ? `${manifestEntry.subject}/${manifestEntry.slug}` : '';

  useEffect(() => {
    if (!manifestEntry) return undefined;
    let active = true;

    loadPaperBySlug(manifestEntry.subject, manifestEntry.slug)
      .then((loaded) => {
        if (!active) return;
        setLoadedState({ key: routeKey, paper: loaded, error: !loaded });
        if (loaded) {
          const info = formatPaperMeta(loaded);
          recordRecentActivity({
            path: paperPath(loaded),
            title: loaded.title,
            type: 'paper',
            meta: `${info.tag} · ${info.itemsLabel}`
          });
        }
      })
      .catch(() => {
        if (!active) return;
        setLoadedState({ key: routeKey, paper: null, error: true });
      });
    return () => {
      active = false;
    };
  }, [manifestEntry, routeKey, retryCount]);

  useEffect(() => {
    const onAfterPrint = () => setPrintMode('full');
    window.addEventListener('afterprint', onAfterPrint);
    return () => window.removeEventListener('afterprint', onAfterPrint);
  }, []);

  if (!manifestEntry) {
    return (
      <div className="handbook-container seo-page">
        <h1>Paket Soal Tidak Ditemukan</h1>
        <p>Paket soal yang Anda cari belum tersedia atau telah dipindahkan.</p>
        <Link className="btn btn-royal" to="/paket-soal" style={{ color: '#fff', textDecoration: 'none' }}>
          Kembali ke Daftar Paket Soal
        </Link>
      </div>
    );
  }

  const isCurrent = loadedState.key === routeKey;
  const paper = isCurrent ? loadedState.paper : null;

  if (!isCurrent) {
    return (
      <div className="handbook-container seo-page" lang={manifestEntry.lang || 'id'}>
        <nav className="seo-breadcrumb no-print" aria-label="Navigasi">
          <Link to="/">Beranda</Link> › <Link to="/paket-soal">Paket Soal</Link> ›{' '}
          <Link to={subjectHubPath(manifestEntry.subject)}>{PAPER_SUBJECT_META[manifestEntry.subject]?.label || manifestEntry.subject}</Link> ›{' '}
          <span>{manifestEntry.title}</span>
        </nav>
        <div className="route-fallback" role="status" style={{ minHeight: '35vh' }}>
          <Loader2 size={30} className="spinner route-fallback-icon" />
          <span>{manifestEntry.lang === 'en' ? 'Loading problem set...' : 'Memuat paket soal...'}</span>
        </div>
      </div>
    );
  }

  if (loadedState.error || !paper) {
    return (
      <div className="handbook-container seo-page">
        <h1>Gagal Memuat Paket Soal</h1>
        <p>Terjadi kendala saat mengunduh naskah soal. Periksa koneksi lalu coba lagi.</p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button type="button" className="btn btn-royal" onClick={() => { setLoadedState({ key: '', paper: null, error: false }); setRetryCount((c) => c + 1); }}>
            Muat Ulang Paket
          </button>
          <Link className="btn btn-outline" to="/paket-soal" style={{ textDecoration: 'none' }}>
            Kembali ke Daftar Paket Soal
          </Link>
        </div>
      </div>
    );
  }

  const togglePartKey = (k) => setRevealedKeys((prev) => ({ ...prev, [k]: !prev[k] }));
  const togglePartSolution = (k) => setRevealedSolutions((prev) => ({ ...prev, [k]: !prev[k] }));

  const toggleRubricCheck = (rKey) => {
    setCheckedRubrics((prev) => {
      const next = { ...prev, [rKey]: !prev[rKey] };
      const earned = computeEarnedMarks(paper, next, routeKey);
      updatePaperProgress(paper.id, {
        checkedRubrics: next,
        earnedMarks: earned,
        totalMarks: paper.totalMarks
      });
      return next;
    });
  };

  const resetScore = () => {
    setCheckedRubrics({});
    updatePaperProgress(paper.id, {
      checkedRubrics: {},
      earnedMarks: 0,
      totalMarks: paper.totalMarks
    });
  };

  const handleToggleCompleted = () => {
    const next = !completed;
    setCompleted(next);
    updatePaperProgress(paper.id, {
      completed: next,
      earnedMarks: computeEarnedMarks(paper, checkedRubrics, routeKey),
      totalMarks: paper.totalMarks
    });
  };

  const handleToggleBookmark = () => {
    const info = formatPaperMeta(paper);
    const saved = toggleBookmark({
      path: paperPath(paper),
      title: paper.title,
      type: 'paper',
      meta: `${info.tag} · ${info.itemsLabel}`
    });
    setBookmarked(saved);
    updatePaperProgress(paper.id, { bookmarked: saved });
  };

  const revealAll = (open) => {
    setRevealedKeys((prev) => {
      const next = { ...prev };
      for (const q of paper.questions) {
        for (const pt of q.parts) next[`${routeKey}::${q.no}-${pt.label}`] = open;
      }
      return next;
    });
    setRevealedSolutions((prev) => {
      const next = { ...prev };
      for (const q of paper.questions) {
        for (const pt of q.parts) next[`${routeKey}::${q.no}-${pt.label}`] = open;
      }
      return next;
    });
  };

  const triggerPrintExam = () => {
    setPrintMode('exam');
    setTimeout(() => window.print(), 60);
  };

  const triggerPrintWithSolutions = () => {
    setPrintMode('full');
    revealAll(true);
    setTimeout(() => window.print(), 90);
  };

  const earnedMarks = computeEarnedMarks(paper, checkedRubrics, routeKey);
  const subjectLabel = PAPER_SUBJECT_META[paper.subject]?.label || paper.subject;
  const info = formatPaperMeta(paper);
  const markWord = info.usesMarks ? (paper.lang === 'en' ? 'marks' : 'poin') : (paper.lang === 'en' ? 'points' : 'poin');
  const comp = competitionOfPaper(paper);
  const { prev: prevPaper, next: nextPaper, related: relatedPapers } = getRelatedPapers(paper, PUBLISHED_PAPER_MANIFEST);
  const relatedChapters = (paper.relatedChapterIds || [])
    .map((id) => findChapterIndex(id))
    .filter(Boolean);

  const canonicalPaperUrl = `${SITE_URL}${paperPath(paper)}`;

  const jumpTargets = paper.questions.length > 1
    ? paper.questions.map((q) => ({ label: String(q.no), href: `#soal-${q.no}`, key: `q-${q.no}` }))
    : (paper.questions[0]?.parts || []).map((pt) => ({
        label: String(pt.label),
        href: `#soal-${paper.questions[0].no}-${pt.label}`,
        key: `p-${pt.label}`
      }));

  return (
    <div className={`handbook-container seo-page ${printMode === 'exam' ? 'paper-print-exam-only' : ''}`} lang={paper.lang || 'id'}>
      {/* Header cetak resmi dengan QR Code pembahasan */}
      <div className="print-only-header" aria-hidden="true">
        <div>
          <div style={{ fontSize: '9pt', fontWeight: 700, color: '#B30C35', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            {ORGANIZATION.name} · {info.tag}
          </div>
          <div style={{ fontSize: '14pt', fontWeight: 800, color: '#12337A', marginTop: '2pt' }}>
            {paper.title}
          </div>
          <div style={{ fontSize: '9pt', color: '#475569', marginTop: '2pt' }}>
            {info.itemsLabel}{info.score ? ` · ${info.score}` : ''} · {printMode === 'exam' ? 'Lembar Soal' : 'Soal & Pembahasan'}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <QRCodeSVG value={canonicalPaperUrl} size={68} level="M" />
          <div style={{ fontSize: '7.5pt', color: '#334155', marginTop: '2pt' }}>Pindai QR: Kunci &amp; Pembahasan</div>
        </div>
      </div>

      <nav className="seo-breadcrumb no-print" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <Link to="/paket-soal">Paket Soal</Link> ›{' '}
        <Link to={subjectHubPath(paper.subject)}>{subjectLabel}</Link>
        {comp && <> › <Link to={comp.path}>{comp.label}</Link></>} › <span>{paper.title}</span>
      </nav>

      <section className="info-hero">
        <div className="paper-card-badges" style={{ marginBottom: '0.5rem' }}>
          <span className="badge badge-smp" title={subjectLabel}>{info.tag}</span>
          <span className="lang-pill" title="Bahasa soal" aria-label={`Bahasa soal: ${info.lang}`}>{info.lang}</span>
          <span className="badge badge-subtle">{info.itemsLabel}{info.score ? ` · ${info.score}` : ''}</span>
          <span className="badge badge-subtle">{paper.source?.license || ORGANIZATION.licenseName}</span>
          {completed && <span className="paper-status-pill is-done"><CheckCircle2 size={12} /> Selesai</span>}
        </div>

        <h1 style={{ marginBottom: '0.4rem' }}>{paper.title}</h1>
        <p style={{ margin: '0 0 0.75rem', fontSize: '0.92rem' }}>
          <MathText text={paper.instructions} />
        </p>

        <div className="no-print" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button type="button" className="btn btn-royal" style={{ fontSize: '0.82rem' }} onClick={() => revealAll(true)}>
            <Eye size={14} /> Buka Semua Kunci &amp; Pembahasan
          </button>
          <button type="button" className="btn btn-outline" style={{ fontSize: '0.82rem' }} onClick={() => revealAll(false)}>
            <EyeOff size={14} /> Tutup Semua Pembahasan
          </button>
          <button type="button" className="btn btn-subtle" style={{ fontSize: '0.82rem' }} onClick={triggerPrintExam}>
            <Printer size={14} /> Cetak Soal + QR
          </button>
          <button type="button" className="btn btn-subtle" style={{ fontSize: '0.82rem' }} onClick={triggerPrintWithSolutions}>
            <Printer size={14} /> Cetak + Pembahasan
          </button>
          <button
            type="button"
            className={`btn ${bookmarked ? 'btn-primary' : 'btn-outline'}`}
            style={{ fontSize: '0.82rem' }}
            onClick={handleToggleBookmark}
          >
            <Bookmark size={14} /> {bookmarked ? 'Tersimpan' : 'Simpan'}
          </button>
          <button
            type="button"
            className={`btn ${completed ? 'btn-primary' : 'btn-outline'}`}
            style={{ fontSize: '0.82rem' }}
            onClick={handleToggleCompleted}
          >
            <CheckCircle2 size={14} /> {completed ? 'Sudah Selesai' : 'Tandai Selesai'}
          </button>
        </div>
      </section>

      {jumpTargets.length >= 6 && (
        <nav className="paper-jump-rail no-print" aria-label="Lompat ke nomor soal">
          <span className="paper-jump-label">Lompat ke soal:</span>
          <div className="paper-jump-list">
            {jumpTargets.map((jt) => (
              <a key={jt.key} href={jt.href} className="paper-jump-chip">{jt.label}</a>
            ))}
          </div>
        </nav>
      )}

      {paper.constants?.length > 0 && (
        <div className="paper-constants-box">
          <div style={{ fontWeight: 700, color: 'var(--brand-navy)', fontSize: '0.88rem' }}>
            {paper.lang === 'en' ? 'Given Constants & Exact Values:' : 'Konstanta & Nilai Ketetapan:'}
          </div>
          <div className="paper-constants-list">
            {paper.constants.map((c, idx) => (
              <span key={idx}><MathText text={`$${c}$`} /></span>
            ))}
          </div>
        </div>
      )}

      {paper.questions.map((q) => (
        <article key={q.no} className="paper-question-card" id={`soal-${q.no}`}>
          <div className="paper-question-head">
            <h2 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--brand-navy)' }}>
              {q.no}. {q.title}
            </h2>
            <span className="badge badge-cat-pas">[{q.marks} {markWord}]</span>
          </div>

          <p style={{ fontSize: '0.96rem', lineHeight: 1.65 }}>
            <MathText text={q.stem} />
          </p>

          {(q.figures || []).map((fig) => (
            <figure key={fig.src} className="paper-figure">
              <img src={fig.src} alt={fig.alt} loading="lazy" />
              <figcaption>{fig.caption}</figcaption>
            </figure>
          ))}

          <div>
            {q.parts.map((pt) => {
              const partKey = `${routeKey}::${q.no}-${pt.label}`;
              const showKey = Boolean(revealedKeys[partKey]);
              const showSol = Boolean(revealedSolutions[partKey]);
              return (
                <div key={pt.label} className="paper-part" id={`soal-${q.no}-${pt.label}`}>
                  <div className="paper-part-head">
                    <div style={{ flex: 1 }}>
                      <strong>({pt.label})</strong> <MathText text={pt.prompt} />
                    </div>
                    <span className="badge badge-subtle" style={{ flexShrink: 0 }}>[{pt.marks}]</span>
                  </div>

                  {(pt.figures || []).map((fig) => (
                    <figure key={fig.src} className="paper-figure" style={{ marginTop: '0.6rem', marginBottom: '0.6rem' }}>
                      <img src={fig.src} alt={fig.alt} loading="lazy" />
                      <figcaption>{fig.caption}</figcaption>
                    </figure>
                  ))}

                  <div className="paper-part-actions no-print">
                    <button
                      type="button"
                      className="btn btn-outline"
                      style={{ fontSize: '0.78rem', padding: '0.28rem 0.65rem' }}
                      onClick={() => togglePartKey(partKey)}
                    >
                      <CheckCircle2 size={13} /> {showKey ? 'Tutup Kunci' : 'Lihat Kunci'}
                    </button>
                    <button
                      type="button"
                      className="btn btn-subtle"
                      style={{ fontSize: '0.78rem', padding: '0.28rem 0.65rem' }}
                      onClick={() => togglePartSolution(partKey)}
                    >
                      <BookOpen size={13} /> {showSol ? 'Tutup Pembahasan + Rubrik' : 'Lihat Pembahasan + Rubrik'}
                    </button>
                    <a
                      href={buildCorrectionIssueUrl(paper, q, pt, ORGANIZATION.repoUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-subtle"
                      style={{ fontSize: '0.78rem', padding: '0.28rem 0.65rem', textDecoration: 'none' }}
                      title={paper.lang === 'en' ? 'Report an error or suggest an alternative solution on GitHub' : 'Laporkan koreksi kunci atau kirim solusi alternatif di GitHub'}
                    >
                      <Flag size={13} /> {paper.lang === 'en' ? 'Report Issue / Alt. Solution' : 'Laporkan Koreksi'}
                    </a>
                  </div>

                  {showKey && (
                    <div className="paper-reveal-box paper-reveal-key">
                      <strong>{paper.lang === 'en' ? 'Answer Key:' : 'Kunci Jawaban:'}</strong>{' '}
                      <MathText text={pt.answer} />
                    </div>
                  )}

                  {showSol && (
                    <div className="paper-reveal-box paper-reveal-solution">
                      <div className="paper-principle-box">
                        <strong>
                          {paper.lang === 'en'
                            ? (/fisika|physics/i.test(paper.subject) ? 'Physics Principle:' : 'Core Principle:')
                            : 'Prinsip Utama:'}
                        </strong>{' '}
                        <MathText text={pt.principle} />
                      </div>
                      <div style={{ marginBottom: '0.6rem' }}>
                        <MathText text={pt.solution} />
                      </div>
                      <div style={{ borderTop: '1px solid #CBD5E1', paddingTop: '0.5rem' }}>
                        <strong style={{ fontSize: '0.84rem', color: 'var(--brand-navy)' }}>
                          {paper.lang === 'en' ? `Marking Rubric [${pt.marks} ${markWord}]` : `Rubrik Penilaian Mandiri [${pt.marks} poin]`}
                        </strong>
                        <ul className="paper-rubric-list">
                          {(pt.rubric || []).map((r, idx) => {
                            const rKey = `${routeKey}::${q.no}-${pt.label}-${idx}`;
                            const checked = Boolean(checkedRubrics[rKey]);
                            return (
                              <li key={rKey} className="paper-rubric-item">
                                <input
                                  type="checkbox"
                                  id={`rub-${q.no}-${pt.label}-${idx}`}
                                  className="no-print"
                                  checked={checked}
                                  onChange={() => toggleRubricCheck(rKey)}
                                  style={{ marginTop: '0.22rem', cursor: 'pointer' }}
                                />
                                <label htmlFor={`rub-${q.no}-${pt.label}-${idx}`} style={{ cursor: 'pointer', display: 'flex', gap: '0.45rem', alignItems: 'flex-start' }}>
                                  <span className="paper-rubric-code">{r.code}</span>
                                  <span><MathText text={r.text} /></span>
                                </label>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </article>
      ))}

      {/* Self-Scoring Progress Bar */}
      <div className="paper-score-bar no-print">
        <div>
          <strong style={{ color: 'var(--brand-navy)' }}>Skor Rubrik Mandiri:</strong>{' '}
          <span style={{ fontWeight: 800, color: 'var(--brand-crimson)', fontSize: '1.05rem' }}>
            {earnedMarks} / {paper.totalMarks}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {earnedMarks > 0 && (
            <button
              type="button"
              className="btn btn-subtle"
              style={{ fontSize: '0.78rem', padding: '0.3rem 0.6rem' }}
              onClick={resetScore}
            >
              <RotateCcw size={13} /> Reset Skor
            </button>
          )}
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Centang kotak [B1/M1/A1] pada pembahasan untuk menghitung skor (tersimpan otomatis).
          </span>
        </div>
      </div>

      {/* Navigasi Lintas Paket (Sebelumnya / Berikutnya) */}
      {(prevPaper || nextPaper) && (
        <nav className="paper-ladder-nav no-print" aria-label="Navigasi Paket Soal">
          {prevPaper ? (
            <Link to={paperPath(prevPaper)} className="paper-ladder-card">
              <span className="paper-ladder-dir"><ArrowLeft size={14} /> Paket Sebelumnya</span>
              <strong>{prevPaper.title}</strong>
            </Link>
          ) : <div />}
          {nextPaper && (
            <Link to={paperPath(nextPaper)} className="paper-ladder-card is-next">
              <span className="paper-ladder-dir">Paket Berikutnya <ArrowRight size={14} /></span>
              <strong>{nextPaper.title}</strong>
            </Link>
          )}
        </nav>
      )}

      {/* Paket Soal Terkait & Pusat Kompetisi */}
      {(relatedPapers.length > 0 || comp) && (
        <aside className="info-card no-print" style={{ marginTop: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.65rem' }}>
            <h2 style={{ fontSize: '1.05rem', margin: 0 }}>Paket Soal Terkait</h2>
            {comp && (
              <Link to={comp.path} className="hub-more-link">
                <Trophy size={14} /> Semua paket {comp.label} <ArrowRight size={13} />
              </Link>
            )}
          </div>
          {relatedPapers.length > 0 && (
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              {relatedPapers.map((rp) => {
                const rInfo = formatPaperMeta(rp);
                return (
                  <li key={rp.id} style={{ marginBottom: '0.25rem' }}>
                    <Link to={paperPath(rp)}>{rp.title}</Link>{' '}
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>({rInfo.itemsLabel} · {rInfo.lang})</span>
                  </li>
                );
              })}
            </ul>
          )}
        </aside>
      )}

      {relatedChapters.length > 0 && (
        <aside className="info-card no-print" style={{ marginTop: '1.25rem' }}>
          <h2 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Materi &amp; Bab Terkait di Buku Saku</h2>
          <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
            {relatedChapters.map((ch) => (
              <li key={ch.id}>
                <Link to={chapterPath(ch.grade, ch.id)}>
                  {ch.title} (Kelas {ch.grade})
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <div className="info-card" style={{ marginTop: '1.25rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
        <strong>Sumber &amp; Lisensi:</strong> Materi oleh <strong>{paper.source?.org || ORGANIZATION.name}</strong> ({paper.source?.file}).
        Diterbitkan di bawah lisensi{' '}
        <a href={ORGANIZATION.licenseUrl} target="_blank" rel="noopener noreferrer">
          {paper.source?.license || ORGANIZATION.licenseName}
        </a>{' '}
        — boleh digunakan dan dibagikan kembali dengan mencantumkan kredit <strong>{ORGANIZATION.name}</strong>.
      </div>
    </div>
  );
}

export default PaperDetailPage;
