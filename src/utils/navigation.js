/** Menu "Materi" aktif di beranda, semua halaman mata pelajaran, dan daftar isi. */
const MATERI_PREFIXES = ['/matematika', '/ipa', '/fisika', '/kimia', '/biologi', '/daftar-isi'];

export function isMateriPath(pathname = '/') {
  return pathname === '/' || MATERI_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

/*
 * Gulir ke atas saat pindah halaman. Buku saku (semua mapel & AMC) mengatur guliran sendiri
 * saat ganti bab/kelas, dan filter /paket-soal/<mapel> hanya mengganti isi daftar, jadi
 * perpindahan di dalam kelompok itu tidak memaksa halaman kembali ke atas.
 */
const HANDBOOK_PATH = /^\/(matematika|ipa|fisika|kimia|biologi)(\/|$)|^\/olimpiade\/amc-/;

export function scrollSectionOf(pathname = '/') {
  if (HANDBOOK_PATH.test(pathname)) return 'handbook';
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'paket-soal' && parts.length <= 2) return 'paket-soal-hub';
  return pathname;
}

export function shouldScrollToTop(fromPath, toPath) {
  return fromPath !== toPath && scrollSectionOf(fromPath) !== scrollSectionOf(toPath);
}
