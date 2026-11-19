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

- **Desain Ulang Portal Belajar Matematika & Sains 4-Pilar + Pemisahan IPA / Fisika (`Phase P4`):**
  - **Beranda 4-Pilar (`/` — `HomeHubPage.jsx`)**: Struktur portal publik Matematika & Sains dengan filter jenjang (`Semua`, `SD 4–6`, `SMP 7–9`, `SMA 10–12`, `Olimpiade`, `Internasional EN`) dan pencarian lintas materi, menonjolkan 4 pilar:
    1. *Materi Sekolah*: Matematika (`4–12`), IPA (`SD–SMP 4–9`), Fisika (`SMA 10–12`), Kimia (`/paket-soal/kimia`), Biologi (`/paket-soal/biologi`).
    2. *Olimpiade & Kompetisi*: Olimpiade Matematika (`/paket-soal/olimpiade-mat`), Olimpiade Sains / OSN (`/paket-soal/olimpiade-sains`), AMC 8/10/12, Arsip `/prestasi`.
    3. *Jalur Internasional / Bilingual (EN)*: Paket Cambridge/IGCSE Physics, Chemistry & Biology berbahasa Inggris.
    4. *Paket Soal, Ujian & Referensi*: `/paket-soal`, `/tka`, `/rumus`, `/daftar-isi`.
  - **Pemisahan Taksonomi IPA vs Fisika:** Tab `IPA (SD–SMP)` merujuk `/ipa/kelas-4..9` dan tab `Fisika (SMA)` merujuk kanonik `/fisika/kelas-10..12` (`vercel.json` rewrite + stub `<meta http-equiv="refresh">` + `<link rel="canonical">` untuk rute lama `/ipa/kelas-10..12`).
  - **UI Portal Publik Bersih:** Menghapus tombol WhatsApp mengambang, `<WhatsappBanner />` dari halaman belajar/beranda (hanya tersisa pada `/program` dan `/kontak`), serta lencana dekoratif yang bising (`Kurikulum Merdeka · CP 046/2025`, pil `Kelas 4–12`).
  - **Batch 2 Paket Soal (`27` Paket `published`, `accessTier: 'free' | 'olympiad-pro'`):**
    - Penambahan `Kimia XI & X`, `Biologi X`, `Simulasi OSK IPA SMP` (dilengkapi diagram sel terpotong bersih `/papers/olim-smp-ipa-osk/fig-2.webp`), serta seluruh `14` paket `Bilangan Olimpiade Matematika SD & SMP` tersisa ditambah publikasi `2` paket SMP Batch 1 yang telah direvisi -> total **`27` paket aktif** dengan `211` halaman statis terindeks di `sitemap.xml` (lengkap dicatat di [`docs/research/audit-paket-soal.md`](research/audit-paket-soal.md)).
- **Google Analytics (GA4) — Properti `awesomemathj` (`G-G2BZYXCEFM`):**
  - Setelah akses diberikan ke akun Google pengelola (`378128144` / Property `553551452`), Web Stream **`15751926191`** selesai diperbarui via UI Analytics menjadi Stream Name **`Duta e-dukasi`** dan Stream URL **`https://dutaedukasi.vercel.app`**.

---

## 2. Catatan Operasi Berkelanjutan

- **Monetisasi Masa Depan:** Setiap modul di `src/data/papers/` membawa metadata `accessTier: 'free' | 'olympiad-pro'` (`'free'` untuk materi sekolah & dasar, `'olympiad-pro'` untuk olimpiade menengah/lanjutan & OSK). Seluruh paket tetap terbuka gratis pada rilis saat ini; kait *paywall*/iklan dapat diaktifkan kemudian tanpa migrasi skema data.
- **Google Search Console (`https://dutaedukasi.vercel.app/`):** Pengiriman ulang `sitemap.xml` (`211` URL setelah rilis 4-Pilar + `/fisika/*` + Batch 2).
