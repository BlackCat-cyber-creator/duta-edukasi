# Duta e-dukasi — Portal Belajar Matematika & Sains

Portal belajar terbuka dari **Bimbingan Belajar Duta Edukasi Pontianak** (Jl. Siam No. 37): materi per bab, contoh soal, kuis dengan pembahasan, paket soal ber-rubrik, latihan TKA, dan pembinaan olimpiade. Semua materi bisa dibuka **gratis tanpa login**, ringan di HP, dan tetap bisa dipakai offline (PWA).

Situs: **https://dutaedukasi.vercel.app** (domain lama `awesomemathj.vercel.app` dialihkan permanen ke sini).

---

## Isi untuk pelajar

| Bagian | Jenjang | Isi |
| :--- | :--- | :--- |
| Matematika | Kelas 4–12 (SD–SMA) | 55 bab · 1.100 soal latihan + pembahasan |
| IPA | Kelas 4–9 (SD–SMP) | 32 bab · 480 soal |
| Fisika | Kelas 10–12 (SMA) | 17 bab · 255 soal |
| Kimia | Kelas 10–12 (SMA) | 13 bab · 195 soal |
| Biologi | Kelas 10–12 (SMA) | 13 bab · 195 soal |
| Olimpiade AMC 8 / 10 / 12 | SMP–SMA | 36 bab konsep + latihan isian singkat |
| Paket Soal | SD–SMA & olimpiade | 38 paket (Fisika 5, Kimia 4, Biologi 2, Olimpiade Matematika 26, Olimpiade Sains 1) dengan kunci & rubrik |
| Latihan TKA | Kelas 6, 9, 12 | 4 mata uji × Paket A/B (30 soal per paket) |

Setiap bab kurikulum berisi: pengantar, materi per subbab, rumus kunci, contoh soal bertahap, kesalahan yang sering terjadi, tips, dan latihan soal (mudah → sulit) yang bisa dicetak sebagai LKPD A4 ber-QR. Materi diselaraskan dengan Capaian Pembelajaran Kurikulum Merdeka (Keputusan Kepala BSKAP No. 046/H/KR/2025).

## Alamat utama

Menu atas hanya berisi tujuan belajar: **Materi · Olimpiade · Paket Soal · TKA · Rumus**. Halaman profil (Tentang, Prestasi, Pendiri, Program, Kontak) ada di footer.

| Alamat | Isi |
| :--- | :--- |
| `/` | Beranda: pilih mata pelajaran & kelas, cari materi |
| `/matematika/kelas-N/<bab>` | Bab Matematika (N = 4–12) |
| `/ipa/kelas-N/<bab>` | Bab IPA (N = 4–9) |
| `/fisika/kelas-N/<bab>`, `/kimia/…`, `/biologi/…` | Bab SMA (N = 10–12) |
| `/olimpiade` | Pusat olimpiade (OSN, SASMO, AMC, HKIMO, TIMO, SIMOC) |
| `/olimpiade/amc-N/<bab>` | Bab AMC 8 / 10 / 12 |
| `/paket-soal`, `/paket-soal/<mapel>/<slug>` | Arsip paket soal + rubrik |
| `/tka`, `/tka/<paket>` | Latihan TKA |
| `/rumus`, `/daftar-isi` | Kumpulan rumus, daftar isi per topik |
| `/tentang` | Profil, pendiri & tim, **prestasi siswa** (`/tentang#prestasi`), lisensi |
| `/pendiri`, `/program`, `/kontak` | Profil pendiri, program bimbel, kontak & lokasi |
| `/quest/:id`, `/worksheet/:id`, `/solution/…` | PR murid, LKPD cetak, pembahasan dari QR |
| `/teacher` | Studio Guru (login guru) |

Alamat lama tetap berfungsi: `/prestasi` → `/tentang#prestasi` (pengalihan permanen di `vercel.json`), dan tautan `/?questId=…` / `/?pembahasan=1&grade=…` dari QR lama diarahkan oleh `QueryRedirectHandler` di `src/App.jsx`.

---

## Menjalankan proyek

Butuh Node.js 18+.

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # Vitest (konten, rute, konfigurasi deploy)
npm run lint     # oxlint
npm run build    # vite build + scripts/prerender.mjs → dist/
```

`npm run build` juga membuat HTML statis untuk setiap bab (untuk mesin pencari), `sitemap.xml`, `llms.txt`, dan `llms-full.txt`.

## Struktur folder

```
src/
├── App.jsx                 # rute, menu atas, footer
├── components/             # halaman (HomeHubPage, PublicHandbook, AboutPage, …)
│   ├── about/              # kartu tim, prestasi, embed Instagram
│   ├── handbook/           # artikel bab, kuis, navigasi bab
│   ├── teacher/            # Studio Guru
│   └── visuals/            # gambar soal SVG
├── data/
│   ├── matematika/         # gradeN.js — Matematika Kelas 4–12 (satu file per kelas)
│   ├── ipa/                # IPA Kelas 4–9 (kelasN/babM-*.js, satu file per bab)
│   ├── fisika/             # Fisika Kelas 10–12 (kelasN/babM-*.js)
│   ├── kimia/, biologi/    # Kimia & Biologi Kelas 10–12
│   ├── amc/                # AMC 8 / 10 / 12
│   ├── papers/             # Paket Soal
│   ├── siteInfo.js         # organisasi, pendiri, tim, prestasi, program, FAQ
│   └── chapterIndex.js …   # indeks ringan (dibuat oleh pipeline/build_chapter_index.mjs)
├── styles/                 # CSS per bagian, dimuat berurutan oleh src/index.css
├── utils/, hooks/, firebase/
public/                     # logo, foto (public/people/), file verifikasi Google
scripts/prerender.mjs       # HTML statis, sitemap, llms.txt
pipeline/                   # alat konten (validator, audit, indeks bab, migrasi)
│   └── archive/            # skrip lama yang sudah tidak dipakai (jangan dijalankan)
docs/                       # roadmap, audit, CP 046/2025, prompt AI, riwayat
tests/                      # Vitest
```

`scratch/` dan `content-inbox/` hanya ada di komputer lokal (diabaikan git): PDF buku, hasil render, dan skrip sekali pakai.

## Mengedit konten

| Yang diubah | File |
| :--- | :--- |
| Bab & soal Matematika | `src/data/matematika/gradeN.js` |
| Bab IPA / Fisika / Kimia / Biologi | `src/data/<mapel>/kelasN/babM-*.js` |
| Paket soal | `src/data/papers/<mapel>/…` lalu daftarkan di `src/data/papers/index.js` |
| Profil, kontak, prestasi | `src/data/siteInfo.js` |
| Foto pendiri / tim | `public/people/` (dirujuk dari `siteInfo.js`) |

Setelah menambah atau mengganti judul bab, jalankan `node pipeline/build_chapter_index.mjs` agar indeks pencarian ikut diperbarui, lalu `npm test`.

**Prestasi & Instagram.** Akun `@jonoyang78` saat ini privat, jadi tautan unggahannya tidak bisa dibuka pengunjung umum. Akun yang privat dicatat di `PRIVATE_INSTAGRAM_ACCOUNTS` (`src/data/siteInfo.js`): sumbernya ditampilkan sebagai keterangan, bukan tautan mati. Bila akun dibuat publik, hapus namanya dari daftar itu dan foto unggahan otomatis tampil di kartu prestasi. Foto juga bisa disimpan langsung di `public/` dan dirujuk lewat kolom `photo` pada entri prestasi.

**Jangan diubah** (tercetak di LKPD, tersimpan di Firestore, atau sudah diindeks Google): ID bab (`smp8-bab1-…`, `ipa10-…`, `kimia11-…`), alamat publik di atas, rute `/solution/…`, dan kunci `localStorage` `mathquest_*`. Memindahkan file data boleh, asalkan ID di dalamnya tetap.

## Dokumen lain

- Rencana pengembangan: [`docs/ROADMAP.md`](docs/ROADMAP.md)
- Capaian Pembelajaran per mapel: [`docs/kurikulum/`](docs/kurikulum/README.md)
- Standar kualitas paket soal: [`docs/reference/QUALITY_BAR.md`](docs/reference/QUALITY_BAR.md)
- Audit konten: [`docs/audit/AUDIT_2026-10.md`](docs/audit/AUDIT_2026-10.md), [`docs/research/audit-paket-soal.md`](docs/research/audit-paket-soal.md)
- Sumber data prestasi: [`docs/research/prestasi.md`](docs/research/prestasi.md)
- Prompt AI untuk ekstraksi materi, gambar soal, dan Studio Guru: [`docs/prompts/`](docs/prompts/)
- Alat konten: [`pipeline/README.md`](pipeline/README.md)

## Lisensi & kredit

- Konten pembelajaran: **CC BY 4.0** dengan atribusi kepada **Duta e-dukasi**.
- Duta e-dukasi didirikan oleh **Jono Yang** (`@jonoyang78`). Platform web disusun oleh putranya, **Jevon Naldo Yoshield** (`@jevon.n.shield`), kakak dari **Jenover Viano Yoshield** (`@jenovervy`).
