import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Video,
  Copy,
  Check,
  MessageCircle,
  PhoneCall,
  Trash2,
  PowerOff,
  Loader2,
  LogOut,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import {
  LIVE_SOAL_SHORTCUTS,
  buildRoomUrl,
  buildWhatsappInviteUrl,
  isLiveTeacherEmail,
  isValidEmail,
  normalizeEmail
} from '../../utils/liveConfig';
import {
  createLiveRoom,
  deleteLiveRoom,
  endLiveRoom,
  ringLiveRoom,
  subscribeTeacherRooms
} from '../../firebase/liveRooms';
import '../../styles/13-live-classroom.css';

const LOBBY_META = {
  title: 'Ruang Kelas Privat | Duta e-dukasi',
  description: 'Ruang kelas daring privat terjadwal Duta e-dukasi.',
  path: '/kelas',
  noindex: true
};

function LoginCard({ auth }) {
  const [tab, setTab] = useState('login');
  const [name, setName] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const handleGoogle = async () => {
    setError('');
    setBusy(true);
    const res = await auth.loginGoogle();
    setBusy(false);
    if (!res.success) setError(res.error || 'Gagal masuk dengan Google.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    const res =
      tab === 'login'
        ? await auth.login(emailInput, passInput)
        : await auth.register(emailInput, passInput, name || emailInput.split('@')[0]);
    setBusy(false);
    if (!res.success) setError(res.error || 'Gagal masuk.');
  };

  return (
    <div className="live-lobby-shell" style={{ maxWidth: 480 }}>
      <section className="info-card">
        <h1 style={{ fontSize: '1.35rem', marginBottom: '0.35rem' }}>Ruang Kelas Privat</h1>
        <p style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>
          Masuk menggunakan akun yang terdaftar untuk melanjutkan ke sesi bimbingan privat.
        </p>

        <button type="button" className="btn-google-signin" onClick={handleGoogle} disabled={busy}>
          <span>Lanjutkan dengan Google</span>
        </button>

        <div className="account-divider">
          <span>atau gunakan email</span>
        </div>

        <div className="nav-pill-group" role="tablist" style={{ marginBottom: '0.9rem' }}>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'login'}
            className={`nav-pill ${tab === 'login' ? 'active' : ''}`}
            onClick={() => {
              setTab('login');
              setError('');
            }}
          >
            Masuk
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'register'}
            className={`nav-pill ${tab === 'register' ? 'active' : ''}`}
            onClick={() => {
              setTab('register');
              setError('');
            }}
          >
            Daftar
          </button>
        </div>

        <form onSubmit={handleSubmit} className="account-form">
          {tab === 'register' && (
            <label className="account-field">
              <span>Nama</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama lengkap"
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

          {error && <p className="account-error">{error}</p>}

          <button type="submit" className="btn btn-royal" disabled={busy} style={{ width: '100%', justifyContent: 'center' }}>
            {busy ? 'Memproses...' : tab === 'login' ? 'Masuk' : 'Buat Akun'}
          </button>
        </form>

        <div style={{ marginTop: '1rem', fontSize: '0.82rem', textAlign: 'center' }}>
          <Link to="/">Kembali ke Beranda Duta e-dukasi</Link>
        </div>
      </section>
    </div>
  );
}

export function LiveClassroomLobby() {
  useDocumentMeta(LOBBY_META);
  const auth = useAuth();
  const navigate = useNavigate();

  const isTeacher = auth.isAuthenticated && isLiveTeacherEmail(auth.email);

  const [studentEmail, setStudentEmail] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [topic, setTopic] = useState('');
  const [initialPath, setInitialPath] = useState('/paket-soal');
  const [creating, setCreating] = useState(false);
  const [formError, setFormError] = useState('');

  const [rooms, setRooms] = useState([]);
  const [copiedId, setCopiedId] = useState('');

  useEffect(() => {
    if (!isTeacher || !auth.uid) {
      return undefined;
    }
    return subscribeTeacherRooms(auth.uid, (list) => {
      setRooms(list);
    });
  }, [isTeacher, auth.uid]);

  const visibleRooms = isTeacher && auth.uid ? rooms : [];

  if (auth.isLoading) {
    return (
      <div className="live-lobby-shell">
        <div className="route-fallback" role="status" style={{ minHeight: '45vh' }}>
          <Loader2 size={32} className="spinner route-fallback-icon" />
          <span>Memeriksa sesi akun...</span>
        </div>
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return <LoginCard auth={auth} />;
  }

  if (!isTeacher) {
    return (
      <div className="live-lobby-shell" style={{ maxWidth: 560 }}>
        <section className="info-card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
          <ShieldAlert size={36} style={{ color: 'var(--brand-navy)', marginBottom: '0.6rem' }} />
          <h1 style={{ fontSize: '1.3rem', marginBottom: '0.45rem' }}>Sesi Kelas Privat Terjadwal</h1>
          <p style={{ fontSize: '0.9rem', marginBottom: '1.1rem' }}>
            Anda masuk sebagai <strong>{auth.email}</strong>. Halaman ini hanya untuk membuat ruang kelas pengajar.
            Jika Anda diundang belajar online, silakan buka tautan undangan khusus yang dikirimkan oleh pengajar Anda.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-royal">
              Ke Portal Materi
            </Link>
            <Link to="/akun" className="btn btn-outline">
              Akun Saya
            </Link>
            <button type="button" className="btn btn-outline" onClick={auth.logout}>
              <LogOut size={14} /> Ganti Akun
            </button>
          </div>
        </section>
      </div>
    );
  }

  const handleCreateRoom = async (e) => {
    e.preventDefault();
    setFormError('');
    if (!isValidEmail(studentEmail)) {
      setFormError('Masukkan alamat email murid yang valid (mis. murid@gmail.com).');
      return;
    }
    if (normalizeEmail(studentEmail) === normalizeEmail(auth.email)) {
      setFormError('Email murid tidak boleh sama dengan email pengajar.');
      return;
    }

    setCreating(true);
    try {
      const room = await createLiveRoom({
        teacherUid: auth.uid,
        teacherEmail: auth.email,
        teacherName: auth.displayName || 'Jevon Naldo',
        studentEmail,
        studentName,
        studentPhone,
        topic,
        initialPath
      });
      navigate(`/kelas/${encodeURIComponent(room.id)}`);
    } catch (err) {
      setFormError(err?.message || 'Gagal membuat ruang kelas.');
    } finally {
      setCreating(false);
    }
  };

  const handleCopy = async (roomId) => {
    const url = buildRoomUrl(roomId);
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(roomId);
      setTimeout(() => setCopiedId(''), 2000);
    } catch {
      window.prompt('Salin link kelas privat:', url);
    }
  };

  return (
    <div className="live-lobby-shell">
      <header className="live-lobby-header">
        <div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Duta Live — Kelas Privat</h1>
          <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--text-muted)' }}>
            Pengajar: <strong>{auth.email}</strong>
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Link to="/akun" className="btn btn-outline" style={{ fontSize: '0.82rem' }}>
            Akun Belajar
          </Link>
          <Link to="/" className="btn btn-outline" style={{ fontSize: '0.82rem' }}>
            Portal Utama
          </Link>
          <button type="button" className="btn btn-outline" onClick={auth.logout} style={{ fontSize: '0.82rem' }}>
            <LogOut size={14} /> Keluar
          </button>
        </div>
      </header>

      <div className="live-lobby-grid">
        <section className="info-card">
          <h2 style={{ fontSize: '1.1rem', marginBottom: '0.8rem' }}>Panggil / Buat Kelas Baru</h2>
          <form onSubmit={handleCreateRoom} className="live-form-stack">
            <label className="account-field">
              <span>Email Murid</span>
              <input
                type="email"
                required
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                placeholder="contoh.murid@gmail.com"
              />
            </label>

            <label className="account-field">
              <span>Nama Murid (Opsional)</span>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Contoh: Nadia"
              />
            </label>

            <label className="account-field">
              <span>No. WhatsApp (Opsional)</span>
              <input
                type="tel"
                value={studentPhone}
                onChange={(e) => setStudentPhone(e.target.value)}
                placeholder="0812..."
              />
            </label>

            <label className="account-field">
              <span>Topik Sesi (Opsional)</span>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Contoh: OSN Matematika — Geometri"
              />
            </label>

            <label className="account-field">
              <span>Halaman Soal Awal</span>
              <select
                value={initialPath}
                onChange={(e) => setInitialPath(e.target.value)}
                style={{
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '0.52rem 0.65rem',
                  fontSize: '0.9rem',
                  background: '#FFFFFF'
                }}
              >
                {LIVE_SOAL_SHORTCUTS.map((sc) => (
                  <option key={sc.path} value={sc.path}>
                    {sc.label} ({sc.path})
                  </option>
                ))}
              </select>
            </label>

            {formError && <p className="account-error">{formError}</p>}

            <button
              type="submit"
              className="btn btn-royal"
              disabled={creating}
              style={{ justifyContent: 'center', marginTop: '0.2rem' }}
            >
              <Video size={16} />
              <span>{creating ? 'Menyiapkan Ruang...' : 'Mulai & Panggil Murid'}</span>
            </button>
          </form>
        </section>

        <section className="info-card">
          <h2 style={{ fontSize: '1.1rem', marginBottom: '0.8rem' }}>
            Ruang Aktif &amp; Riwayat ({visibleRooms.length})
          </h2>

          {visibleRooms.length === 0 ? (
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              Belum ada ruang kelas. Masukkan email murid di sebelah kiri untuk memulai panggilan pertama.
            </p>
          ) : (
            <ul className="live-room-list">
              {visibleRooms.map((r) => {
                const roomUrl = buildRoomUrl(r.id);
                const waUrl = buildWhatsappInviteUrl({
                  roomUrl,
                  studentName: r.studentName,
                  studentEmail: r.studentEmail,
                  topic: r.topic,
                  phone: r.studentPhone
                });
                const statusLabel =
                  r.status === 'ringing' ? 'Memanggil' : r.status === 'active' ? 'Berlangsung' : 'Selesai';
                const statusClass =
                  r.status === 'ringing' ? 'is-ringing' : r.status === 'active' ? 'is-active' : 'is-ended';

                return (
                  <li key={r.id} className="live-room-item">
                    <div className="live-room-item-top">
                      <div>
                        <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                          {r.studentName || r.studentEmail}
                        </strong>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          {r.studentEmail}
                          {r.topic ? ` · ${r.topic}` : ''}
                        </div>
                      </div>
                      <span className={`live-status-pill ${statusClass}`}>{statusLabel}</span>
                    </div>

                    <div className="live-room-actions">
                      {r.status !== 'ended' && (
                        <>
                          <button
                            type="button"
                            className="btn btn-royal"
                            style={{ fontSize: '0.76rem', padding: '0.35rem 0.65rem' }}
                            onClick={() => navigate(`/kelas/${encodeURIComponent(r.id)}`)}
                          >
                            <ArrowRight size={13} /> Masuk
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline"
                            style={{ fontSize: '0.76rem', padding: '0.35rem 0.65rem' }}
                            onClick={() => handleCopy(r.id)}
                          >
                            {copiedId === r.id ? <Check size={13} /> : <Copy size={13} />}
                            {copiedId === r.id ? 'Disalin' : 'Salin Link'}
                          </button>
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ fontSize: '0.76rem', padding: '0.35rem 0.65rem', textDecoration: 'none' }}
                          >
                            <MessageCircle size={13} /> WhatsApp
                          </a>
                          <button
                            type="button"
                            className="btn btn-outline"
                            style={{ fontSize: '0.76rem', padding: '0.35rem 0.65rem' }}
                            onClick={() => ringLiveRoom(r.id)}
                            title="Bunyikan panggilan ulang jika murid sedang membuka website"
                          >
                            <PhoneCall size={13} /> Panggil Ulang
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline"
                            style={{ fontSize: '0.76rem', padding: '0.35rem 0.65rem', color: 'var(--status-brick)' }}
                            onClick={() => endLiveRoom(r.id)}
                          >
                            <PowerOff size={13} /> Akhiri
                          </button>
                        </>
                      )}
                      {r.status === 'ended' && (
                        <button
                          type="button"
                          className="btn btn-outline"
                          style={{ fontSize: '0.76rem', padding: '0.35rem 0.65rem', color: 'var(--status-brick)' }}
                          onClick={() => deleteLiveRoom(r.id)}
                        >
                          <Trash2 size={13} /> Hapus Riwayat
                        </button>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
