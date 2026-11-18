# Catatan Migrasi Portal: AwesomeMathJ ke Duta e-dukasi

Dokumen ini mencatat status lengkap pembaruan identitas merek, paket soal, repositori, domain, serta layanan pendukung (`GitHub`, `Vercel`, `Firebase`, `Google Search Console`, dan `Google Analytics 4`).

---

## 1. Status Selesai & Terverifikasi Live

- **Identitas & Halaman Publik (`Phase P0–P2`, commit `0216c69`):**
  - Aset merek (`public/brand/logo-monogram.svg`, `favicon.svg`, `logo-full.svg`, `apple-touch-icon.png`, `og-default.png`) dibuat dari materi banner resmi Duta e-dukasi (`#B30C35` crimson, `#12337A` navy).
  - Halaman baru live & ter-prerender: `/tentang`, `/program`, `/pendiri`, `/prestasi`, `/kontak`, `/paket-soal`, `/paket-soal/:subject`, `/paket-soal/:subject/:slug`.
  - Ledger klaim terverifikasi pendiri (**Jono Yang** / `@jonoyang78`), pengembang (**Jevon Naldo Yoshield** / `@jevon.n.shield`), dan siswa binaan dicatat di [`docs/research/prestasi.md`](research/prestasi.md).
- **Ingesti & Audit Dua-Model Paket Soal Batch 1 (`Phase P3`, commit `ccbad93`):**
  - `7` paket berstatus `published` (`5` Fisika Kinematika Kelas 10 berbahasa Inggris + `2` Bilangan Olimpiade Matematika SD Kelas 4–5), semuanya lulus `pro` blind solve (`0` mismatch) dan audit 1-paket-per-panggilan `flash_lite` (`0` flag).
  - `2` paket Bilangan Olimpiade SMP (`bilangan-smp-basic-1`, `bilangan-smp-elite`) disimpan sebagai `status: 'needs-human'` di [`docs/research/audit-paket-soal.md`](research/audit-paket-soal.md) karena terdapat 4 temuan cacat soal/kunci pada naskah PDF asli.
- **GitHub Repository Rename:**
  - Di-rename dari `BlackCat-cyber-creator/AwesomeMathJ` menjadi **`https://github.com/BlackCat-cyber-creator/duta-edukasi`** via `gh repo rename duta-edukasi --yes`.
- **Proyek, Domain & Redirect 308 Vercel (`b162d480` + Python HTTP check):**
  - Proyek Vercel diubah nama dari `awesomemathj` menjadi **`dutaedukasi`** (`Settings -> Git` tersambung ke `BlackCat-cyber-creator/duta-edukasi`).
  - Domain utama **`https://dutaedukasi.vercel.app`** aktif (`Valid Configuration`, Production).
  - **`awesomemathj.vercel.app/*`** mengembalikan **`HTTP 308 Permanent Redirect`** ke `https://dutaedukasi.vercel.app/*` pada seluruh rute (`/`, `/paket-soal`, `/tentang`, `/pendiri`, `/prestasi`, `/matematika/kelas-4/bab2-pecahan`).
  - Cek HTTP live pada `https://dutaedukasi.vercel.app/` (`/` hingga `/paket-soal/*`, `/robots.txt`, `/sitemap.xml` berisi `188` URL, dan `/llms.txt` berisi `227` baris): semua `HTTP 200`, tag `<link rel="canonical">` menunjuk `https://dutaedukasi.vercel.app/...`, tanpa sisa URL `awesomemathj.vercel.app`.
- **Cutover Kanonik & Profil Lead Developer (commit `28214e0`):**
  - `SITE_URL` (`src/utils/seoRoutes.js`), `Sitemap:` (`public/robots.txt`), `README.md`, JSON-LD, `/tentang`, dan `/pendiri` diperbarui dengan profil **Jevon Naldo Yoshield** (`@jevon.n.shield`, GitHub `BlackCat-cyber-creator`, `jevon-one.vercel.app`).
- **Firebase Console (`projectId: awesomemathj`):**
  - `Authentication -> Settings -> Authorized domains`: **`dutaedukasi.vercel.app`** ditambahkan (bersama `awesomemathj.vercel.app` dan `localhost`).
  - `Project settings -> General`: nama tampilan proyek diubah menjadi **`Duta e-dukasi`** (`projectId: awesomemathj` tetap dipertahankan).
- **Google Search Console:**
  - Properti URL-prefix **`https://dutaedukasi.vercel.app/`** ditambahkan & terverifikasi otomatis via **File HTML**.
  - `https://dutaedukasi.vercel.app/sitemap.xml` dikirim dan berstatus **`Sukses`** (`19 Nov 2026`, `188` halaman ditemukan).

---

## 2. Satu Langkah Tertunda karena Izin Akun (`BLOCKED / GA4_PERMISSION_REQUIRED`)

- **Google Analytics (GA4) — Properti `awesomemathj` (`G-G2BZYXCEFM`):**
  - Saat `b162d480` membuka tautan stream langsung dari integrasi Firebase (`https://analytics.google.com/analytics/web/#/a378128144p553551452/admin/streams/table/15751926191`), akun Google aktif (`jevon.naldo@gmail.com`) hanya memiliki akses ke akun GA4 lain dan mendapat pesan **`Izin tidak ada`** (HTTP `403`) pada Account **`378128144`** / Property **`553551452`** / Stream **`15751926191`**.
  - **Tindakan untuk Pemilik:** Buka URL stream GA4 tersebut memakai akun Google pemilik properti `G-G2BZYXCEFM` (atau berikan akses *Editor/Admin* ke `jevon.naldo@gmail.com`), lalu ubah **Stream URL** menjadi **`https://dutaedukasi.vercel.app`** dan **Stream Name** menjadi **`Duta e-dukasi`**.
