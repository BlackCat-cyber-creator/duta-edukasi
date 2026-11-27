/**
 * Konfigurasi Duta Live (Ruang Kelas Privat 1-on-1)
 * Terisolasi dari halaman publik dan tidak dibundel ke rute publik.
 */

export const DEFAULT_TEACHER_EMAILS = ['jevon.naldo@gmail.com'];

export const DEFAULT_ICE_SERVERS = [
  {
    urls: [
      'stun:stun.l.google.com:19302',
      'stun:stun1.l.google.com:19302',
      'stun:stun2.l.google.com:19302'
    ]
  },
  {
    urls: ['stun:stun.cloudflare.com:3478']
  }
];

export const LIVE_SOAL_SHORTCUTS = [
  { label: 'Paket Soal', path: '/paket-soal' },
  { label: 'Matematika', path: '/matematika' },
  { label: 'Fisika', path: '/fisika' },
  { label: 'Kimia', path: '/kimia' },
  { label: 'Biologi', path: '/biologi' },
  { label: 'IPA SD/SMP', path: '/ipa' },
  { label: 'Olimpiade', path: '/olimpiade' },
  { label: 'Latihan TKA', path: '/tka' },
  { label: 'Kumpulan Rumus', path: '/rumus' },
  { label: 'Daftar Isi', path: '/daftar-isi' }
];

export function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

export function isValidEmail(email) {
  const clean = normalizeEmail(email);
  if (!clean || clean.length < 5 || clean.length > 160) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(clean);
}

export function getTeacherEmails(envOverride) {
  const rawEnv =
    typeof envOverride === 'string'
      ? envOverride
      : (typeof import.meta !== 'undefined' && import.meta.env?.VITE_LIVE_TEACHER_EMAILS) || '';
  const fromEnv = String(rawEnv)
    .split(',')
    .map(normalizeEmail)
    .filter(Boolean);
  return [...new Set([...DEFAULT_TEACHER_EMAILS, ...fromEnv])];
}

export function isLiveTeacherEmail(email, envOverride) {
  const clean = normalizeEmail(email);
  if (!clean) return false;
  return getTeacherEmails(envOverride).includes(clean);
}

export function buildRoomUrl(roomId, originOverride) {
  const base =
    originOverride ||
    (typeof window !== 'undefined' && window.location?.origin
      ? window.location.origin
      : 'https://dutaedukasi.vercel.app');
  return `${String(base).replace(/\/+$/, '')}/kelas/${encodeURIComponent(String(roomId || '').trim())}`;
}

export function sanitizeLivePath(inputPath, fallback = '/paket-soal') {
  const raw = String(inputPath || '').trim();
  if (!raw) return fallback;
  try {
    if (/^https?:\/\//i.test(raw)) {
      const parsed = new URL(raw);
      return `${parsed.pathname || '/'}${parsed.search || ''}${parsed.hash || ''}`;
    }
  } catch {
    return fallback;
  }
  if (!raw.startsWith('/')) return `/${raw}`;
  if (raw.startsWith('//') || raw.startsWith('/kelas')) return fallback;
  return raw;
}

export function buildWhatsappInviteUrl({ roomUrl, studentName, studentEmail, topic, phone } = {}) {
  const cleanPhone = String(phone || '').replace(/[^\d]/g, '');
  const formattedPhone = cleanPhone.startsWith('0') ? `62${cleanPhone.slice(1)}` : cleanPhone;
  const greeting = studentName ? `Halo ${String(studentName).trim()},` : 'Halo,';
  const topicLine = topic ? `Topik: ${String(topic).trim()}\n` : '';
  const emailLine = studentEmail
    ? `Pastikan masuk (login) menggunakan akun email: ${normalizeEmail(studentEmail)}\n`
    : '';
  const text = [
    greeting,
    'Sesi kelas privat Duta e-dukasi sudah siap.',
    topicLine ? topicLine.trim() : null,
    emailLine ? emailLine.trim() : null,
    `Link kelas: ${roomUrl || ''}`
  ]
    .filter(Boolean)
    .join('\n');

  const query = `text=${encodeURIComponent(text)}`;
  return formattedPhone ? `https://wa.me/${formattedPhone}?${query}` : `https://wa.me/?${query}`;
}

export function formatCallDuration(totalSeconds) {
  const sec = Math.max(0, Math.floor(Number(totalSeconds) || 0));
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  const pad = (n) => String(n).padStart(2, '0');
  if (hours > 0) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  return `${pad(minutes)}:${pad(seconds)}`;
}
