# Catatan Migrasi Portal: AwesomeMathJ ke Duta e-dukasi

Dokumen ini mencatat status pembaruan identitas merek, repositori, domain, serta layanan pendukung (`GitHub`, `Vercel`, `Firebase`, `Google Analytics 4`, dan `Google Search Console`).

---

## 1. Status Langkah Terlaksana

- **Identitas & Halaman Publik (`Phase P0–P2`, commit `0216c69`):**
  - Aset merek (`public/brand/logo-monogram.svg`, `favicon.svg`, `logo-full.svg`, `apple-touch-icon.png`, `og-default.png`) dibuat dari materi banner resmi Duta e-dukasi (`#B30C35` crimson, `#12337A` navy).
  - Halaman informasi baru ditambahkan dan diprerender: `/tentang`, `/program`, `/pendiri`, `/prestasi`, `/kontak`, `/paket-soal`, `/paket-soal/:subject`, `/paket-soal/:subject/:slug`.
  - Seluruh klaim prestasi pendiri (`Jono Yang` / `Jono, S.T.`) dan siswa dicatat bersama tautan bukti primer di [`docs/research/prestasi.md`](research/prestasi.md).
- **Ingesti & Verifikasi Paket Soal Batch 1 (`Phase P3`):**
  - `6` paket baru terpublikasi (`status: 'published'`, total `7` paket live termasuk pilot `fis10-kinematika2-p2`), terdiri atas `5` paket Fisika Kinematika Kelas 10 berbahasa Inggris dan `2` paket Bilangan Olimpiade Matematika SD Kelas 4–5 — semuanya lulus 100% blind solve (`pro`) + audit Hydrogen (`flash_lite`) tanpa mismatch.
  - `2` paket Olimpiade Matematika SMP (`bilangan-smp-basic-1` dan `bilangan-smp-elite`) disimpan sebagai `status: 'needs-human'` di [`docs/research/audit-paket-soal.md`](research/audit-paket-soal.md) karena ditemukan cacat matematis pada PDF asli.
- **Repositori GitHub:**
  - Berhasil di-rename dari `BlackCat-cyber-creator/AwesomeMathJ` menjadi **`https://github.com/BlackCat-cyber-creator/duta-edukasi`** melalui `gh repo rename duta-edukasi --yes`.
  - Remote lokal diperbarui ke `https://github.com/BlackCat-cyber-creator/duta-edukasi.git`.

---

## 2. Langkah Pending (Menunggu Login Vercel dari Pemilik)

Browser subagent (`b162d480`) melaporkan `BLOCKED / AUTH_REQUIRED` pada `https://vercel.com/login`. Oleh karena itu, `SITE_URL` (`src/utils/seoRoutes.js`) dan `Sitemap:` (`public/robots.txt`) **sengaja dipertahankan di `https://awesomemathj.vercel.app`** agar meta kanonik dan sitemap tetap valid di domain aktif sampai domain baru terpasang di Vercel.

Setelah pemilik login ke Vercel di panel browser, langkah berikutnya tinggal dijalankan berurutan:
1. **Vercel (`Settings -> General`, `Settings -> Git`, `Settings -> Domains`):**
   - Pastikan koneksi Git mengarah ke `BlackCat-cyber-creator/duta-edukasi`.
   - Ubah nama proyek menjadi `dutaedukasi` (cadangan: `dutaedukasi-bimbel` / `dutaedukasi-pontianak`).
   - Pasang domain utama `dutaedukasi.vercel.app` (atau cadangan bila sudah dipakai).
   - Atur `awesomemathj.vercel.app` -> **308 Permanent Redirect** ke domain baru.
2. **Pembaruan Kanonik & Build Ulang:**
   - Ubah `SITE_URL` di `src/utils/seoRoutes.js` dan `Sitemap:` di `public/robots.txt` ke `https://<domain-baru>`, lalu commit & push ke `main` agar `sitemap.xml`, `llms.txt`, `llms-full.txt`, dan seluruh tag kanonik ter-generate dengan URL baru.
3. **Firebase Console (`projectId: awesomemathj`, tetap dipertahankan):**
   - `Authentication -> Settings -> Authorized domains`: tambahkan `<domain-baru>`.
   - `Project Settings`: perbarui nama tampilan proyek menjadi `Duta e-dukasi`.
4. **Google Analytics 4 & Google Search Console:**
   - Perbarui `Stream Name` dan `Stream URL` di GA4 ke `https://<domain-baru>`.
   - Tambahkan properti URL-prefix `https://<domain-baru>/` di Search Console, kirim `https://<domain-baru>/sitemap.xml`, dan cek opsi *Change of Address* dari `awesomemathj.vercel.app`.
5. **Verifikasi Live Akhir:**
   - Cek status HTTP `308` dari `https://awesomemathj.vercel.app/` menuju `https://<domain-baru>/`, serta uji tampilan desktop/mobile pada halaman utama, `/paket-soal`, dan detail paket soal.
