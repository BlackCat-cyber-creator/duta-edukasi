# Catatan Migrasi Portal: AwesomeMathJ ke Duta e-dukasi

Dokumen ini mencatat status pembaruan identitas merek, repositori, domain, serta layanan pendukung (`GitHub`, `Vercel`, `Firebase`, `Google Analytics 4`, dan `Google Search Console`).

---

## 1. Status Langkah Terlaksana

- **Identitas & Halaman Publik (`Phase P0–P2`, commit `0216c69`):**
  - Aset merek (`public/brand/logo-monogram.svg`, `favicon.svg`, `logo-full.svg`, `apple-touch-icon.png`, `og-default.png`) dibuat dari materi banner resmi Duta e-dukasi (`#B30C35` crimson, `#12337A` navy).
  - Halaman informasi baru ditambahkan dan diprerender: `/tentang`, `/program`, `/pendiri`, `/prestasi`, `/kontak`, `/paket-soal`, `/paket-soal/:subject`, `/paket-soal/:subject/:slug`.
  - Seluruh klaim prestasi pendiri (`Jono Yang` / `Jono, S.T.`) dan siswa dicatat bersama tautan bukti primer di [`docs/research/prestasi.md`](research/prestasi.md).
- **Ingesti & Verifikasi Paket Soal Batch 1 (`Phase P3`, commit `ccbad93`):**
  - `6` paket baru terpublikasi (`status: 'published'`, total `7` paket live termasuk pilot `fis10-kinematika2-p2`), terdiri atas `5` paket Fisika Kinematika Kelas 10 berbahasa Inggris dan `2` paket Bilangan Olimpiade Matematika SD Kelas 4–5 — semuanya lulus 100% blind solve (`pro`) + audit Hydrogen (`flash_lite`) tanpa mismatch.
  - `2` paket Olimpiade Matematika SMP (`bilangan-smp-basic-1` dan `bilangan-smp-elite`) disimpan sebagai `status: 'needs-human'` di [`docs/research/audit-paket-soal.md`](research/audit-paket-soal.md) karena ditemukan cacat matematis pada PDF asli.
- **Repositori GitHub:**
  - Berhasil di-rename dari `BlackCat-cyber-creator/AwesomeMathJ` menjadi **`https://github.com/BlackCat-cyber-creator/duta-edukasi`** melalui `gh repo rename duta-edukasi --yes`.
  - Remote lokal diperbarui ke `https://github.com/BlackCat-cyber-creator/duta-edukasi.git`.
- **Proyek, Domain & Redirect Vercel (`b162d480`):**
  - Koneksi Git terverifikasi menunjuk ke **`BlackCat-cyber-creator/duta-edukasi`** (`Ready` pada commit `ccbad93`).
  - Nama proyek Vercel diubah dari `awesomemathj` menjadi **`dutaedukasi`**.
  - Domain utama **`https://dutaedukasi.vercel.app`** aktif (`Valid Configuration`, Production).
  - Domain lama **`awesomemathj.vercel.app`** tetap terpasang dan diarahkan melalui **308 Permanent Redirect** menuju `dutaedukasi.vercel.app`.
- **Cutover URL Kanonik & Profil Pengembang:**
  - `SITE_URL` di `src/utils/seoRoutes.js` dan `Sitemap:` di `public/robots.txt` diperbarui ke **`https://dutaedukasi.vercel.app`**.
  - Profil Lead Developer & Penyusun Portal (**Jevon Naldo Yoshield**, `@jevon.n.shield`) ditambahkan ke `AUTHOR` (`src/data/siteInfo.js`), `/tentang`, `/pendiri`, `README.md`, dan JSON-LD/prerender (`scripts/prerender.mjs`).

---

## 2. Langkah Berjalan / Berikutnya (`Phase P4 Finalization & P5`)

Setelah pembaruan `SITE_URL` ke `https://dutaedukasi.vercel.app` di-push ke `main`:
1. **Firebase Console (`projectId: awesomemathj`, tetap dipertahankan):**
   - `Authentication -> Settings -> Authorized domains`: tambahkan `dutaedukasi.vercel.app`.
   - `Project Settings`: perbarui nama tampilan proyek menjadi `Duta e-dukasi`.
2. **Google Analytics 4 & Google Search Console:**
   - Perbarui `Stream Name` (`Duta e-dukasi`) dan `Stream URL` (`https://dutaedukasi.vercel.app`) di GA4.
   - Tambahkan properti URL-prefix `https://dutaedukasi.vercel.app/` di Search Console, kirim `https://dutaedukasi.vercel.app/sitemap.xml`, dan cek *Change of Address* dari `awesomemathj.vercel.app`.
3. **Verifikasi Live Akhir:**
   - Cek status HTTP `308` dari `https://awesomemathj.vercel.app/` menuju `https://dutaedukasi.vercel.app/`, cek `/sitemap.xml` dan `/llms.txt`, serta uji tampilan langsung pada domain baru.
