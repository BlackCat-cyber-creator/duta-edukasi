import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate, Link, NavLink, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { handbookPath } from './utils/seoRoutes';
import { AUTHOR, ORGANIZATION } from './data/siteInfo';
import { FloatingWhatsappButton } from './components/WhatsappCta';
import {
  Lock,
  ShieldCheck,
  BookOpen,
  LogOut,
  Loader2
} from 'lucide-react';

// Lazy-loaded Views for maximal code-splitting
const TeacherDashboard = lazy(() => import('./components/TeacherDashboard').then((m) => ({ default: m.TeacherDashboard })));
const StudentQuestView = lazy(() => import('./components/StudentQuestView').then((m) => ({ default: m.StudentQuestView })));
const PrintableWorksheet = lazy(() => import('./components/PrintableWorksheet').then((m) => ({ default: m.PrintableWorksheet })));
const ChapterSolutionView = lazy(() => import('./components/ChapterSolutionView').then((m) => ({ default: m.ChapterSolutionView })));
const PublicHandbook = lazy(() => import('./components/PublicHandbook').then((m) => ({ default: m.PublicHandbook })));
const AboutPage = lazy(() => import('./components/AboutPage').then((m) => ({ default: m.AboutPage })));
const ProgramPage = lazy(() => import('./components/ProgramPage').then((m) => ({ default: m.ProgramPage })));
const FounderPage = lazy(() => import('./components/FounderPage').then((m) => ({ default: m.FounderPage })));
const PrestasiPage = lazy(() => import('./components/PrestasiPage').then((m) => ({ default: m.PrestasiPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then((m) => ({ default: m.ContactPage })));
const PapersHubPage = lazy(() => import('./components/PapersHubPage').then((m) => ({ default: m.PapersHubPage })));
const PaperDetailPage = lazy(() => import('./components/PaperDetailPage').then((m) => ({ default: m.PaperDetailPage })));
const TopicIndexPage = lazy(() => import('./components/TopicIndexPage').then((m) => ({ default: m.TopicIndexPage })));
const FormulaIndexPage = lazy(() => import('./components/FormulaIndexPage').then((m) => ({ default: m.FormulaIndexPage })));
const TkaPage = lazy(() => import('./components/TkaPage').then((m) => ({ default: m.TkaPage })));
const TeacherLoginView = lazy(() => import('./components/TeacherLoginView').then((m) => ({ default: m.TeacherLoginView })));

function RouteFallback() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      color: 'var(--text-muted)'
    }}>
      <Loader2 size={36} className="spinner" style={{ color: 'var(--brand-navy)', animation: 'spin 1s linear infinite' }} />
      <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Memuat halaman...</span>
    </div>
  );
}

/**
 * Backward Compatibility Layer:
 * Automatically redirects legacy query-string URLs (from previously printed QR codes or bookmarks):
 * - /?questId=... -> /quest/:questId
 * - /?pembahasan=1&grade=...&chapter=... -> /solution/:grade/:chapter
 */
function resolveQueryRedirect(searchParams, pathname = '/') {
  if (pathname !== '/') return null;

  const questId = searchParams.get('questId');
  const isSolution = searchParams.get('pembahasan') || searchParams.get('solution');
  const grade = searchParams.get('grade');
  const chapter = searchParams.get('chapter');
  const mode = searchParams.get('mode');
  const level = searchParams.get('level');
  const view = searchParams.get('view');

  if (view === 'worksheet') {
    if (questId) {
      return `/worksheet/${encodeURIComponent(questId)}`;
    }
    return '/worksheet';
  }
  if (questId && !isSolution) {
    return `/quest/${encodeURIComponent(questId)}`;
  }
  if (isSolution && (mode === 'amc' || (chapter && String(chapter).toLowerCase().startsWith('amc'))) && (level || grade) && chapter) {
    const amcLevel = level || grade || (String(chapter).match(/amc(\d+)/i)?.[1]) || '8';
    return `/solution/amc/${encodeURIComponent(amcLevel)}/${encodeURIComponent(chapter)}`;
  }
  if (isSolution && grade && chapter) {
    return `/solution/${encodeURIComponent(grade)}/${encodeURIComponent(chapter)}`;
  }
  // Link buku saku lama (?grade=... / ?mode=amc...) -> alamat rapi
  if (mode === 'amc') {
    return handbookPath({ mode: 'amc', level: Number(level) || 8, chapter });
  }
  if (grade && Number(grade) >= 4 && Number(grade) <= 12) {
    return handbookPath({ mode: 'school', grade: Number(grade), chapter });
  }
  return null;
}

export function QueryRedirectHandler() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const target = resolveQueryRedirect(searchParams, location.pathname);
    if (target) {
      navigate(target, { replace: true });
    }
  }, [searchParams, location.pathname, navigate]);

  return null;
}
QueryRedirectHandler.resolve = resolveQueryRedirect;

export function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, teacherName, isAuthenticated, logout } = useAuth();

  const isTeacherRoute = location.pathname.startsWith('/teacher');
  const isFullScreenView = location.pathname.startsWith('/quest/') ||
                           location.pathname.startsWith('/worksheet') ||
                           location.pathname.startsWith('/solution/');

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  // Dibuka dari Studio Guru: mode pratinjau agar jawaban guru tidak tercatat sebagai jawaban murid
  const handleLaunchQuest = (qId) => {
    navigate(`/quest/${encodeURIComponent(qId)}?preview=1`);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleLaunchPracticeQuest = (practiceQuest) => {
    try {
      localStorage.setItem(`mathquest_practice_${practiceQuest.id}`, JSON.stringify(practiceQuest));
    } catch {}
    navigate(`/quest/${encodeURIComponent(practiceQuest.id)}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handlePrintQuest = (quest) => {
    if (!quest) return;
    try {
      localStorage.setItem(`mathquest_worksheet_${quest.id || 'current'}`, JSON.stringify(quest));
    } catch {}
    navigate(`/worksheet/${encodeURIComponent(quest.id || 'current')}`, { state: { quest } });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleSignOut = async () => {
    await logout();
    navigate('/teacher/login');
  };

  return (
    <div className="app-layout">
      {/* Backward-compatibility query redirector */}
      <QueryRedirectHandler />

      {/* Top Navbar */}
      <header className="top-navbar no-print">
        <div className="nav-container" style={{ gap: '0.75rem', flexWrap: 'wrap' }}>
          {/* Brand Logo */}
          <div
            className="brand-logo"
            onClick={handleBackToHome}
            style={{ cursor: 'pointer' }}
          >
            <img
              src="/brand/logo-monogram.svg"
              alt="Logo Duta e-dukasi"
              width={40}
              height={40}
              style={{ width: 40, height: 40, objectFit: 'contain', flexShrink: 0 }}
            />
            <div className="brand-text-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                <span className="brand-wordmark" aria-label={ORGANIZATION.name}>
                  <span className="brand-wordmark-duta">DUTA</span>
                  <span className="brand-wordmark-edukasi">e-dukasi</span>
                </span>
                <span className="badge badge-sd" style={{ fontSize: '0.65rem', padding: '0.15rem 0.45rem' }}>
                  Kelas 4–12
                </span>
              </div>
              <div className="brand-subtitle" style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {isTeacherRoute ? (
                  <>Studio Guru {ORGANIZATION.name}</>
                ) : (
                  <>Bimbel, Materi &amp; Paket Soal Matematika dan Fisika</>
                )}
              </div>
            </div>
          </div>

          {/* Right Header Navigation & Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
            {isFullScreenView ? (
              <button
                id="btn-nav-back-home"
                className="btn btn-outline"
                style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
                onClick={handleBackToHome}
              >
                <BookOpen size={14} />
                Portal Utama
              </button>
            ) : isTeacherRoute ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                {isAuthenticated && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      backgroundColor: '#ECFDF5',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid #A7F3D0',
                      fontSize: '0.8rem'
                    }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--status-emerald)', display: 'inline-block' }}></span>
                    <span style={{ color: '#065F46', fontWeight: 700 }}>Studio Guru ({teacherName})</span>
                  </div>
                )}

                <button
                  id="btn-nav-switch-public"
                  className="btn btn-outline"
                  style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
                  onClick={() => navigate('/')}
                  title="Kembali ke Buku Panduan Publik"
                >
                  <BookOpen size={14} />
                  Portal Publik
                </button>

                {isAuthenticated && (
                  <button
                    id="btn-nav-signout"
                    className="btn btn-subtle"
                    style={{ fontSize: '0.8rem', padding: '0.35rem 0.65rem', color: 'var(--status-brick)' }}
                    onClick={handleSignOut}
                    title="Keluar dari sesi guru"
                  >
                    <LogOut size={14} />
                    Keluar
                  </button>
                )}
              </div>
            ) : (
              <>
                <nav className="top-nav-links" aria-label="Menu Utama">
                  <NavLink to="/paket-soal" className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}>
                    Paket Soal
                  </NavLink>
                  <NavLink to="/program" className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}>
                    Program
                  </NavLink>
                  <NavLink to="/prestasi" className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}>
                    Prestasi
                  </NavLink>
                  <NavLink to="/tentang" className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}>
                    Tentang
                  </NavLink>
                  <NavLink to="/kontak" className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}>
                    Kontak
                  </NavLink>
                </nav>
                <button
                  id="btn-nav-open-teacher-studio"
                  className="btn btn-royal"
                  style={{ fontSize: '0.825rem', padding: '0.4rem 0.9rem' }}
                  onClick={() => navigate('/teacher')}
                >
                  {isAuthenticated ? <ShieldCheck size={15} /> : <Lock size={14} />}
                  Studio Guru
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area with Declarative React Router v7 */}
      <main>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            {/* 1. Public Handbook */}
            <Route path="/" element={
              <PublicHandbook
                onLaunchPractice={handleLaunchPracticeQuest}
                onPrintQuest={handlePrintQuest}
              />
            } />

            {/* 1b. Buku saku dengan alamat rapi (diindeks mesin pencari) */}
            <Route path="/matematika/*" element={
              <PublicHandbook onLaunchPractice={handleLaunchPracticeQuest} onPrintQuest={handlePrintQuest} />
            } />
            <Route path="/ipa/*" element={
              <PublicHandbook onLaunchPractice={handleLaunchPracticeQuest} onPrintQuest={handlePrintQuest} />
            } />
            <Route path="/olimpiade/*" element={
              <PublicHandbook onLaunchPractice={handleLaunchPracticeQuest} onPrintQuest={handlePrintQuest} />
            } />

            {/* 1c. Halaman Profil Bimbel & Arsip Paket Soal */}
            <Route path="/tentang" element={<AboutPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/pendiri" element={<FounderPage />} />
            <Route path="/prestasi" element={<PrestasiPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="/paket-soal" element={<PapersHubPage />} />
            <Route path="/paket-soal/:subject" element={<PapersHubPage />} />
            <Route path="/paket-soal/:subject/:slug" element={<PaperDetailPage />} />

            <Route path="/daftar-isi" element={<TopicIndexPage />} />
            <Route path="/rumus" element={<FormulaIndexPage />} />
            <Route path="/tka" element={<TkaPage onPrintQuest={handlePrintQuest} />} />
            <Route path="/tka/:paket" element={<TkaPage onPrintQuest={handlePrintQuest} />} />

            {/* 2. Interactive Student Quest Player */}
            <Route path="/quest/:questId" element={
              <StudentQuestView onBackToDashboard={handleBackToHome} />
            } />

            {/* 3. Printable Worksheet A4 with QR Code */}
            <Route path="/worksheet/:questId" element={
              <PrintableWorksheet onBack={handleBackToHome} />
            } />
            <Route path="/worksheet" element={
              <PrintableWorksheet onBack={handleBackToHome} />
            } />

            {/* 4. Chapter Online Solution via QR Code Scan */}
            <Route path="/solution/amc/:level/:chapterId" element={
              <ChapterSolutionView onBack={handleBackToHome} />
            } />
            <Route path="/solution/:grade/:chapterId" element={
              <ChapterSolutionView onBack={handleBackToHome} />
            } />

            {/* 5. Teacher Authentication */}
            <Route path="/teacher/login" element={
              isAuthenticated ? <Navigate to="/teacher" replace /> : (
                <TeacherLoginView
                  onBack={handleBackToHome}
                  onSuccess={() => navigate('/teacher')}
                />
              )
            } />

            {/* 6. Teacher Studio Workspace (Protected) */}
            <Route path="/teacher" element={
              isAuthenticated ? (
                <TeacherDashboard
                  onLaunchQuest={handleLaunchQuest}
                  onPrintQuest={handlePrintQuest}
                  currentTeacher={user}
                />
              ) : (
                <TeacherLoginView
                  onBack={handleBackToHome}
                  onSuccess={() => navigate('/teacher')}
                />
              )
            } />
            <Route path="/teacher/*" element={
              <Navigate to="/teacher" replace />
            } />

            {/* Catch-all fallback redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {!isTeacherRoute && !isFullScreenView && (
        <>
          <FloatingWhatsappButton />
          <footer className="site-footer no-print">
            <div>
              <strong>{ORGANIZATION.name}</strong> ({ORGANIZATION.legalName}) · {ORGANIZATION.shortAddress} ·{' '}
              <a href={ORGANIZATION.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WA {ORGANIZATION.whatsappDisplay}
              </a>
              {' '}· Disusun oleh <Link to="/tentang">{AUTHOR.name}</Link>
            </div>
            <div style={{ marginTop: '0.35rem', fontSize: '0.8rem' }}>
              <Link to="/paket-soal">Paket Soal</Link> · <Link to="/program">Program</Link> ·{' '}
              <Link to="/pendiri">Pendiri</Link> · <Link to="/prestasi">Prestasi</Link> ·{' '}
              <Link to="/kontak">Kontak</Link> · <Link to="/daftar-isi">Daftar isi</Link> ·{' '}
              <Link to="/rumus">Kumpulan rumus</Link> · <Link to="/tka">Latihan TKA</Link> · Lisensi{' '}
              <a href={ORGANIZATION.licenseUrl} target="_blank" rel="noopener noreferrer">{ORGANIZATION.licenseName}</a>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
