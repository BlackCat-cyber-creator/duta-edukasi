/**
 * Identitas pembuat situs. Dipakai bersama oleh aplikasi (footer, halaman /tentang)
 * dan prerender (meta author, JSON-LD Person) agar mesin pencari mengaitkan nama
 * pembuat dengan situs ini.
 *
 * `sameAs`: tambahkan tautan profil resmi (Instagram, LinkedIn, YouTube, dsb.) untuk
 * memperkuat hubungan nama ↔ situs di Google.
 */
export const AUTHOR = {
  name: 'Jevon Naldo Yoshield',
  jobTitle: 'Guru Matematika & Fisika serta Pembina Olimpiade',
  sameAs: []
};

export const ABOUT = {
  title: 'Tentang AwesomeMathJ',
  intro: `AwesomeMathJ dibuat dan dikelola oleh ${AUTHOR.name}, guru Matematika dan Fisika yang mengajar murid dari Kelas 4 SD sampai Kelas 12 SMA, termasuk membina murid persiapan olimpiade.`,
  paragraphs: [
    'Situs ini lahir dari kebutuhan di kelas: murid perlu materi yang mudah dibuka kapan saja, soal latihan yang sesuai dengan kelasnya, dan pembahasan yang jelas langkah demi langkah.',
    'Semua materi Kurikulum Merdeka di AwesomeMathJ — Matematika Kelas 4–12, IPA SD Kelas 4–6, IPA SMP Kelas 7–9, serta Fisika SMA Kelas 10–12 — diselaraskan dengan Capaian Pembelajaran resmi (Keputusan Kepala BSKAP Nomor 046/H/KR/2025). Setiap bab disusun rapi: daftar isi, subbab, rumus kunci, contoh soal dengan pembahasan, kesalahan yang sering terjadi, dan latihan soal gratis tanpa daftar akun.',
    'Tersedia pula halaman referensi cepat Kumpulan Rumus (/rumus), Daftar Isi per Topik (/daftar-isi), paket latihan TKA (/tka), dan Studio Guru untuk mengirim PR per bab kepada murid bimbingan.'
  ]
};
