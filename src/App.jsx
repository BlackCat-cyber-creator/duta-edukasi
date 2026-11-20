import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { Routes, Route, Navigate, Link, NavLink, useNavigate, useLocation, useNavigationType, useSearchParams } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { handbookPath } from './utils/seoRoutes';
import { isMateriPath, shouldScrollToTop } from './utils/navigation';
import { AUTHOR, ORGANIZATION } from './data/siteInfo';
import {
  Lock,
  ShieldCheck,
  BookOpen,
  LogOut,
  Loader2
} from 'lucide-react';

// Lazy-loaded Views for maximal code-splitting
const HomeHubPage = lazy(() => import('./components/HomeHubPage').then((m) => ({ default: m.HomeHubPage })));
const TeacherDashboard = lazy(() => import('./components/TeacherDashboard').then((m) => ({ default: m.TeacherDashboard })));
const StudentQuestView = lazy(() => import('./components/StudentQuestView').then((m) => ({ default: m.StudentQuestView })));
const PrintableWorksheet = lazy(() => import('./components/PrintableWorksheet').then((m) => ({ default: m.PrintableWorksheet })));
const ChapterSolutionView = lazy(() => import('./components/ChapterSolutionView').then((m) => ({ default: m.ChapterSolutionView })));
const PublicHandbook = lazy(() => import('./components/PublicHandbook').then((m) => ({ default: m.PublicHandbook })));
const OlimpiadeHubPage = lazy(() => import('./components/OlimpiadeHubPage').then((m) => ({ default: m.OlimpiadeHubPage })));
const AboutPage = lazy(() => import('./components/AboutPage').then((m) => ({ default: m.AboutPage })));
const ProgramPage = lazy(() => import('./components/ProgramPage').then((m) => ({ default: m.ProgramPage })));
const FounderPage = lazy(() => import('./components/FounderPage').then((m) => ({ default: m.FounderPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then((m) => ({ default: m.ContactPage })));
const PapersHubPage = lazy(() => import('./components/PapersHubPage').then((m) => ({ default: m.PapersHubPage })));
const PaperDetailPage = lazy(() => import('./components/PaperDetailPage').then((m) => ({ default: m.PaperDetailPage })));
const TopicIndexPage = lazy(() => import('./components/TopicIndexPage').then((m) => ({ default: m.TopicIndexPage })));
const FormulaIndexPage = lazy(() => import('./components/FormulaIndexPage').then((m) => ({ default: m.FormulaIndexPage })));
const TkaPage = lazy(() => import('./components/TkaPage').then((m) => ({ default: m.TkaPage })));
const TeacherLoginView = lazy(() => import('./components/TeacherLoginView').then((m) => ({ default: m.TeacherLoginView })));

/** Mata pelajaran sekolah yang memakai buku saku (alamat /<mapel>/kelas-N/<bab>). */
const HANDBOOK_SUBJECT_PATHS = ['matematika', 'ipa', 'fisika', 'kimia', 'biologi'];

function RouteFallback() {
  return (
    <div className="route-fallback" role="status">
      <Loader2 size={36} className="spinner route-fallback-icon" />
      <span>Memuat halaman...</span>
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

/** Halaman baru dibuka dari atas (kecuali tombol kembali/maju browser dan tautan #bagian). */
function ScrollToTopOnNavigate() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const from = previousPath.current;
    previousPath.current = pathname;
    if (hash || navigationType === 'POP') return;
    if (shouldScrollToTop(from, pathname)) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash, navigationType]);

  return null;
}

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

  // Satu komponen buku saku untuk semua mata pelajaran dan jalur AMC
  const handbook = <PublicHandbook onLaunchPractice={handleLaunchPracticeQuest} onPrintQuest={handlePrintQuest} />;

  const handleSignOut = async () => {
    await logout();
    navigate('/teacher/login');
  };

  return (
    <div className="app-layout">
      {/* Backward-compatibility query redirector */}
      <QueryRedirectHandler />
      <ScrollToTopOnNavigate />

      {/* Top Navbar */}
      <header className="top-navbar no-print">
        <div className="nav-container">
          {/* Logo: tautan ke beranda (bisa difokus dengan keyboard) */}
          <Link to="/" className="brand-logo" onClick={handleBackToHome} aria-label={`${ORGANIZATION.name} — Beranda`}>
            <img
              className="brand-logo-mark"
              src="/brand/logo-monogram.svg"
              alt=""
              width={40}
              height={40}
            />
            <div className="brand-text-content">
              <div className="brand-wordmark-row">
                <span className="brand-wordmark">
                  <span className="brand-wordmark-duta">DUTA</span>
                  <span className="brand-wordmark-edukasi">e-dukasi</span>
                </span>
              </div>
              {isTeacherRoute && (
                <div className="brand-subtitle">
                  Studio Guru {ORGANIZATION.name}
                </div>
              )}
            </div>
          </Link>

          {/* Right Header Navigation & Actions */}
          <div className="nav-actions">
            {isFullScreenView ? (
              <button
                id="btn-nav-back-home"
                className="btn btn-outline btn-nav-sm"
                onClick={handleBackToHome}
              >
                <BookOpen size={14} />
                Portal Utama
              </button>
            ) : isTeacherRoute ? (
              <div className="nav-teacher-actions">
                {isAuthenticated && (
                  <div className="teacher-status-pill">
                    <span className="teacher-status-dot" aria-hidden="true"></span>
                    <span className="teacher-status-name">Studio Guru ({teacherName})</span>
                  </div>
                )}

                <button
                  id="btn-nav-switch-public"
                  className="btn btn-outline btn-nav-sm"
                  onClick={() => navigate('/')}
                  title="Kembali ke Buku Panduan Publik"
                >
                  <BookOpen size={14} />
                  Portal Publik
                </button>

                {isAuthenticated && (
                  <button
                    id="btn-nav-signout"
                    className="btn btn-subtle btn-nav-sm btn-nav-signout"
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
                {/* Menu utama hanya berisi tujuan belajar; Tentang, Prestasi, Pendiri & Kontak ada di footer */}
                <nav className="top-nav-links" aria-label="Menu Utama">
                  <NavLink to="/" className={() => `top-nav-link ${isMateriPath(location.pathname) ? 'active' : ''}`}>
                    Materi
                  </NavLink>
                  <NavLink to="/olimpiade" className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}>
                    Olimpiade
                  </NavLink>
                  <NavLink to="/paket-soal" className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}>
                    Paket Soal
                  </NavLink>
                  <NavLink to="/tka" className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}>
                    TKA
                  </NavLink>
                  <NavLink to="/rumus" className={({ isActive }) => `top-nav-link ${isActive ? 'active' : ''}`}>
                    Rumus
                  </NavLink>
                </nav>
                <button
                  id="btn-nav-open-teacher-studio"
                  className="btn btn-royal btn-nav-studio"
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
            {/* 1. Public Portal Hub */}
            <Route path="/" element={<HomeHubPage />} />

            {/* 1b. Buku saku dengan alamat rapi (diindeks mesin pencari) */}
            {HANDBOOK_SUBJECT_PATHS.map((subject) => (
              <Route key={subject} path={`/${subject}/*`} element={handbook} />
            ))}
            <Route path="/olimpiade" element={<OlimpiadeHubPage />} />
            <Route path="/olimpiade/*" element={handbook} />

            {/* 1c. Halaman Profil Bimbel & Arsip Paket Soal */}
            <Route path="/tentang" element={<AboutPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/pendiri" element={<FounderPage />} />
            {/* Prestasi kini bagian dari halaman Tentang; alamat lama tetap berfungsi */}
            <Route path="/prestasi" element={<Navigate to="/tentang#prestasi" replace />} />
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
        <footer className="site-footer no-print">
          <div className="site-footer-columns">
            <nav className="site-footer-group" aria-label="Belajar">
              <h2 className="site-footer-heading">Belajar</h2>
              <Link to="/">Materi per kelas</Link>
              <Link to="/daftar-isi">Daftar isi per topik</Link>
              <Link to="/rumus">Kumpulan rumus</Link>
              <Link to="/tka">Latihan TKA</Link>
              <Link to="/olimpiade">Olimpiade</Link>
              <Link to="/paket-soal">Paket soal</Link>
            </nav>
            <nav className="site-footer-group" aria-label="Tentang kami">
              <h2 className="site-footer-heading">Tentang kami</h2>
              <Link to="/tentang">Tentang {ORGANIZATION.name}</Link>
              <Link to="/tentang#prestasi">Prestasi siswa</Link>
              <Link to="/pendiri">Pendiri</Link>
              <Link to="/program">Program bimbel</Link>
              <Link to="/kontak">Kontak &amp; lokasi</Link>
            </nav>
            <div className="site-footer-group">
              <h2 className="site-footer-heading">{ORGANIZATION.name}</h2>
              <span>{ORGANIZATION.shortAddress}</span>
              <a href={ORGANIZATION.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp {ORGANIZATION.whatsappDisplay}</a>
            </div>
          </div>
          <div className="site-footer-bottom">
            Platform belajar Matematika &amp; Sains terbuka · Disusun oleh{' '}
            <Link to="/tentang#tim">{AUTHOR.name}</Link> · Lisensi{' '}
            <a href={ORGANIZATION.licenseUrl} target="_blank" rel="noopener noreferrer">{ORGANIZATION.licenseName}</a>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
