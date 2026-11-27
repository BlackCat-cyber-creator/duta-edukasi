import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  LogOut,
  CheckCircle2,
  Bookmark,
  Clock,
  Sparkles,
  Cloud,
  CloudOff,
  Loader2,
  ArrowRight,
  Trash2
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import {
  getProgress,
  getStudyState,
  updateStudentProfile,
  toggleBookmark,
  PROGRESS_EVENT,
  STUDY_STATE_EVENT
} from '../utils/progress';
import { PUBLISHED_PAPER_MANIFEST, paperPath } from '../data/papers/manifest';
import { findChapterIndex } from '../data/curriculumData';
import { chapterPath } from '../utils/seoRoutes';
import { AiAssistantPanel } from './AiAssistantWidget';

const ACCOUNT_META = {
  title: 'Akun Belajar & Progres | Duta e-dukasi',
  description: 'Masuk atau daftar gratis di Duta e-dukasi untuk menyinkronkan progres belajar, bookmark paket soal, dan mengakses Asisten Belajar AI.',
  path: '/akun',
  noindex: true
};

const LEVEL_CHOICES = ['SD', 'SMP', 'SMA'];
const COMP_CHOICES = ['OSN', 'AMC', 'SASMO', 'SMO', 'TKA', 'Cambridge'];

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z" />
      <path fill="#34A853" d="M12 24c3.3 0 6.08-1.09 8.1-2.96l-3.88-3.05c-1.1.74-2.51 1.18-4.22 1.18-3.25 0-6-2.19-6.98-5.14H1.01v3.14C3.03 21.18 7.21 24 12 24Z" />
      <path fill="#FBBC05" d="M5.02 14.03c-.25-.74-.39-1.54-.39-2.36s.14-1.62.39-2.36V6.17H1.01C.37 7.45 0 8.88 0 11.67s.37 4.22 1.01 5.5l4.01-3.14Z" />
      <path fill="#EA4335" d="M12 4.75c1.8 0 3.41.62 4.68 1.84l3.51-3.51C18.07 1.19 15.3 0 12 0 7.21 0 3.03 2.82 1.01 6.86l4.01 3.14c.98-2.95 3.73-5.25 6.98-5.25Z" />
    </svg>
  );
}

export function AccountPage() {
  useDocumentMeta(ACCOUNT_META);
  const {
    isAuthenticated,
    isLoading,
    displayName,
    email,
    photoURL,
    syncStatus,
    login,
    register,
    loginGoogle,
    logout
  } = useAuth();

  const [authTab, setAuthTab] = useState('login');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [authBusy, setAuthBusy] = useState(false);
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState('recent');
  const [studyState, setStudyState] = useState(() => getStudyState());
  const [chapterProgress, setChapterProgress] = useState(() => getProgress());

  useEffect(() => {
    const refresh = () => {
      setStudyState(getStudyState());
      setChapterProgress(getProgress());
    };
    refresh();
    window.addEventListener(STUDY_STATE_EVENT, refresh);
    window.addEventListener(PROGRESS_EVENT, refresh);
    return () => {
      window.removeEventListener(STUDY_STATE_EVENT, refresh);
      window.removeEventListener(PROGRESS_EVENT, refresh);
    };
  }, []);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    if (!emailInput.trim() || !passInput) {
      setAuthError('Isi email dan kata sandi terlebih dahulu.');
      return;
    }
    setAuthBusy(true);
    const res = authTab === 'login'
      ? await login(emailInput, passInput)
      : await register(emailInput, passInput, nameInput || emailInput.split('@')[0]);
    setAuthBusy(false);
    if (!res.success) setAuthError(res.error || 'Gagal masuk.');
  };

  const handleGoogleLogin = async () => {
    setAuthError('');
    setAuthBusy(true);
    const res = await loginGoogle();
    setAuthBusy(false);
    if (!res.success) setAuthError(res.error || 'Gagal masuk dengan Google.');
  };

  const handleToggleTargetComp = (comp) => {
    const current = studyState.profile?.targetCompetitions || [];
    const next = current.includes(comp) ? current.filter((x) => x !== comp) : [...current, comp];
    updateStudentProfile({ targetCompetitions: next });
  };

  const paperEntries = Object.entries(studyState.papers || {});
  const completedPapers = paperEntries.filter(([, v]) => v?.completed);
  const chapterEntries = Object.entries(chapterProgress || {});
  const bookmarkList = Object.values(studyState.bookmarks || {});
  const recentList = studyState.recent || [];

  const findPaperMeta = (id) => PUBLISHED_PAPER_MANIFEST.find((p) => p.id === id);

  if (isLoading) {
    return (
      <div className="handbook-container seo-page">
        <div className="route-fallback" role="status" style={{ minHeight: '40vh' }}>
          <Loader2 size={32} className="spinner route-fallback-icon" />
          <span>Memeriksa sesi akun...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="handbook-container seo-page">
      <nav className="seo-breadcrumb" aria-label="Navigasi">
        <Link to="/">Beranda</Link> › <span>Akun Belajar</span>
      </nav>

      {!isAuthenticated ? (
        <div className="account-auth-shell">
          <section className="info-hero" style={{ marginBottom: '1.25rem' }}>
            <h1>Akun Belajar Duta e-dukasi</h1>
            <p style={{ margin: 0 }}>
              Semua materi &amp; paket soal tetap 100% gratis tanpa login. Masuk atau daftar gratis untuk
              menyinkronkan progres antar perangkat, menyimpan bookmark, dan bertanya ke <strong>Asisten Belajar AI</strong>.
            </p>
          </section>

          <div className="account-auth-grid">
            <section className="info-card account-auth-card">
              <button
                type="button"
                className="btn-google-signin"
                onClick={handleGoogleLogin}
                disabled={authBusy}
              >
                <GoogleMark />
                <span>Lanjutkan dengan Google</span>
              </button>

              <div className="account-divider"><span>atau gunakan email</span></div>

              <div className="nav-pill-group" role="tablist" style={{ marginBottom: '1rem' }}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={authTab === 'login'}
                  className={`nav-pill ${authTab === 'login' ? 'active' : ''}`}
                  onClick={() => { setAuthTab('login'); setAuthError(''); }}
                >
                  Masuk
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={authTab === 'register'}
                  className={`nav-pill ${authTab === 'register' ? 'active' : ''}`}
                  onClick={() => { setAuthTab('register'); setAuthError(''); }}
                >
                  Daftar Akun Baru
                </button>
              </div>

              <form onSubmit={handleEmailSubmit} className="account-form">
                {authTab === 'register' && (
                  <label className="account-field">
                    <span>Nama Lengkap / Panggilan</span>
                    <input
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="Contoh: Nadia Putri"
                    />
                  </label>
                )}
                <label className="account-field">
                  <span>Email</span>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="nama@email.com"
                  />
                </label>
                <label className="account-field">
                  <span>Kata Sandi</span>
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={passInput}
                    onChange={(e) => setPassInput(e.target.value)}
                    placeholder="Minimal 6 karakter"
                  />
                </label>

                {authError && <p className="account-error">{authError}</p>}

                <button type="submit" className="btn btn-royal" disabled={authBusy} style={{ width: '100%', justifyContent: 'center' }}>
                  {authBusy ? 'Memproses...' : authTab === 'login' ? 'Masuk ke Akun' : 'Buat Akun Gratis'}
                </button>
              </form>
            </section>

            <aside className="info-card">
              <h2 style={{ fontSize: '1.05rem' }}>Keuntungan Punya Akun Gratis</h2>
              <ul className="account-benefits">
                <li><CheckCircle2 size={16} /> <span><strong>Sinkronisasi Otomatis:</strong> Progres kuis bab &amp; skor rubrik paket soal tersimpan ke cloud.</span></li>
                <li><Bookmark size={16} /> <span><strong>Bookmark &amp; Riwayat:</strong> Lanjutkan paket terakhir dari HP maupun laptop.</span></li>
                <li><Sparkles size={16} /> <span><strong>Asisten Belajar AI:</strong> Rekomendasi bab, paket soal, dan jalur latihan sesuai targetmu.</span></li>
              </ul>

              {(recentList.length > 0 || chapterEntries.length > 0 || paperEntries.length > 0) && (
                <div className="account-local-preview">
                  <strong>Progres di perangkat ini siap disinkronkan:</strong>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                    {chapterEntries.length} bab · {paperEntries.length} paket soal · {bookmarkList.length} bookmark
                  </p>
                </div>
              )}
            </aside>
          </div>
        </div>
      ) : (
        <div className="account-dashboard">
          <section className="info-hero account-profile-hero">
            <div className="account-user-row">
              {photoURL ? (
                <img src={photoURL} alt={displayName} className="account-avatar" />
              ) : (
                <span className="account-avatar account-avatar-initials"><User size={24} /></span>
              )}
              <div>
                <h1 style={{ margin: 0, fontSize: '1.45rem' }}>{displayName}</h1>
                <p style={{ margin: '0.15rem 0 0', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  {email} ·{' '}
                  <span className="account-sync-badge">
                    {syncStatus === 'synced' && <><Cloud size={13} /> Tersinkron</>}
                    {syncStatus === 'syncing' && <><Loader2 size={13} className="spinner" /> Menyinkronkan...</>}
                    {syncStatus === 'local-only' && <><CloudOff size={13} /> Tersimpan di perangkat</>}
                    {syncStatus === 'idle' && <><Cloud size={13} /> Aktif</>}
                  </span>
                </p>
              </div>
              <button type="button" className="btn btn-outline" onClick={logout} style={{ marginLeft: 'auto', fontSize: '0.82rem' }}>
                <LogOut size={14} /> Keluar
              </button>
            </div>

            <div className="account-targets">
              <div className="account-target-group">
                <span className="account-target-label">Jenjang:</span>
                {LEVEL_CHOICES.map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    className={`hub-level-pill hub-level-pill-sub ${studyState.profile?.targetLevel === lvl ? 'active' : ''}`}
                    onClick={() => updateStudentProfile({ targetLevel: studyState.profile?.targetLevel === lvl ? '' : lvl })}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
              <div className="account-target-group">
                <span className="account-target-label">Target:</span>
                {COMP_CHOICES.map((c) => {
                  const active = (studyState.profile?.targetCompetitions || []).includes(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      className={`hub-level-pill hub-level-pill-sub ${active ? 'active' : ''}`}
                      onClick={() => handleToggleTargetComp(c)}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <div className="account-stats-grid">
            <div className="info-card account-stat-tile">
              <strong>{chapterEntries.length}</strong>
              <span>Bab Dikerjakan</span>
            </div>
            <div className="info-card account-stat-tile">
              <strong>{completedPapers.length}</strong>
              <span>Paket Selesai</span>
            </div>
            <div className="info-card account-stat-tile">
              <strong>{bookmarkList.length}</strong>
              <span>Tersimpan</span>
            </div>
            <div className="info-card account-stat-tile">
              <strong>{recentList.length}</strong>
              <span>Riwayat Terakhir</span>
            </div>
          </div>

          <div className="nav-pill-group" role="tablist" style={{ marginBottom: '1rem' }}>
            {[
              { id: 'recent', label: 'Terakhir Dipelajari', Icon: Clock },
              { id: 'bookmarks', label: 'Tersimpan', Icon: Bookmark },
              { id: 'progress', label: 'Progres Paket & Bab', Icon: CheckCircle2 },
              { id: 'ai', label: 'Asisten AI', Icon: Sparkles }
            ].map(({ id, label, Icon }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={activeTab === id}
                className={`nav-pill ${activeTab === id ? 'active' : ''}`}
                onClick={() => setActiveTab(id)}
              >
                <Icon size={14} /> {label}
              </button>
            ))}
          </div>

          {activeTab === 'recent' && (
            <section className="info-card">
              <h2 style={{ fontSize: '1.08rem' }}>Terakhir Dipelajari</h2>
              {recentList.length === 0 ? (
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                  Belum ada riwayat. Mulai buka <Link to="/">Materi</Link> atau <Link to="/paket-soal">Paket Soal</Link>.
                </p>
              ) : (
                <ul className="account-item-list">
                  {recentList.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} className="account-item-link">
                        <div>
                          <strong>{item.title}</strong>
                          {item.meta && <small>{item.meta}</small>}
                        </div>
                        <ArrowRight size={15} />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {activeTab === 'bookmarks' && (
            <section className="info-card">
              <h2 style={{ fontSize: '1.08rem' }}>Materi &amp; Paket Tersimpan</h2>
              {bookmarkList.length === 0 ? (
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                  Belum ada bookmark. Klik tombol <strong>Simpan</strong> di halaman Paket Soal untuk menyimpannya di sini.
                </p>
              ) : (
                <ul className="account-item-list">
                  {bookmarkList.map((bm) => (
                    <li key={bm.path} className="account-item-row">
                      <Link to={bm.path} className="account-item-link">
                        <div>
                          <strong>{bm.title}</strong>
                          {bm.meta && <small>{bm.meta}</small>}
                        </div>
                        <ArrowRight size={15} />
                      </Link>
                      <button
                        type="button"
                        className="btn btn-subtle"
                        style={{ fontSize: '0.76rem', padding: '0.3rem 0.55rem' }}
                        onClick={() => toggleBookmark(bm)}
                        title="Hapus bookmark"
                      >
                        <Trash2 size={13} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {activeTab === 'progress' && (
            <div className="account-progress-grid">
              <section className="info-card">
                <h2 style={{ fontSize: '1.08rem' }}>Progres Paket Soal ({paperEntries.length})</h2>
                {paperEntries.length === 0 ? (
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>Belum ada skor rubrik atau status paket soal yang tercatat.</p>
                ) : (
                  <ul className="account-item-list">
                    {paperEntries.map(([pid, prog]) => {
                      const meta = findPaperMeta(pid);
                      const targetPath = meta ? paperPath(meta) : '/paket-soal';
                      return (
                        <li key={pid}>
                          <Link to={targetPath} className="account-item-link">
                            <div>
                              <strong>{meta?.title || pid}</strong>
                              <small>
                                {prog.completed ? 'Selesai' : 'Sedang dikerjakan'}
                                {prog.totalMarks ? ` · Skor rubrik: ${prog.earnedMarks || 0}/${prog.totalMarks}` : ''}
                              </small>
                            </div>
                            <ArrowRight size={15} />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>

              <section className="info-card">
                <h2 style={{ fontSize: '1.08rem' }}>Progres Kuis Bab ({chapterEntries.length})</h2>
                {chapterEntries.length === 0 ? (
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>Belum ada hasil kuis bab yang tersimpan.</p>
                ) : (
                  <ul className="account-item-list">
                    {chapterEntries.map(([cid, prog]) => {
                      const ch = findChapterIndex(cid);
                      const targetPath = ch ? chapterPath(ch.grade, ch.id) : '/';
                      return (
                        <li key={cid}>
                          <Link to={targetPath} className="account-item-link">
                            <div>
                              <strong>{ch?.title || cid}</strong>
                              <small>Skor terbaik: {prog.bestScore ?? prog.score ?? 0}%</small>
                            </div>
                            <ArrowRight size={15} />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            </div>
          )}

          {activeTab === 'ai' && (
            <section className="info-card" style={{ padding: 0, overflow: 'hidden' }}>
              <AiAssistantPanel embedded />
            </section>
          )}
        </div>
      )}
    </div>
  );
}

export default AccountPage;
