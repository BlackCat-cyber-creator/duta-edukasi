# Laporan Ingesti & Audit Dua-Model Paket Soal (Batch 1 + Batch 2)

Seluruh **27 paket soal** di bawah ini melewati pipeline verifikasi terpisah:
1. **Ekstraksi (`flash`)**: menyusun naskah soal, diagram `.webp` terpotong bersih (`device_scale_factor=1` untuk render PDF penuh tanpa terpotong), kunci jawaban, prinsip utama, pembahasan terperinci, serta rubrik poin dengan mempertahankan bahasa asli dokumen sumber (`en` atau `id`, tanpa terjemahan paksa).
2. **Blind Solve Independen (`pro`)**: memecahkan seluruh butir soal secara mandiri langsung dari naskah/gambar tanpa mengandalkan kunci asli, lalu membandingkan hasilnya terhadap kunci sumber.
3. **Audit Kualitas Hydrogen (`flash_lite`, strictly 1 paket per panggilan)**: memverifikasi kesesuaian poin rubrik, validitas KaTeX, bebas bocoran angka di deskripsi gambar, dan konsistensi dengan laporan `pro`.

---

## 1. Seluruh Paket Terpublikasi (`status: 'published'` — 27 Paket)

### A. Fisika, Kimia & Biologi Sekolah (8 Paket · `accessTier: 'free'`)

| ID Paket | Judul | Mapel / Kelas | Bahasa | Total Poin | Hasil Audit & Tindak Lanjut | Rute Publik |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `fis10-kinematika2-p2` *(Pilot)* | Physics Grade 10 – Kinematics II (Projectile Motion) – Paket 2 | Fisika · Kelas 10 | `en` | 50 (`13` bagian) | `PASS` (`0` mismatch · `0` flag) | `/paket-soal/fisika/kinematika-2-paket-2` |
| `fis10-kinematika2-p1` | Physics Grade 10 – Kinematics II (Projectile Motion) – Paket 1 | Fisika · Kelas 10 | `en` | 50 (`13` bagian) | `PASS` (`0` mismatch · `0` flag) | `/paket-soal/fisika/kinematika-2-paket-1` |
| `fis10-kinematika1-ex1` | Physics Grade 10 – Kinematics I Exercise | Fisika · Kelas 10 | `en` | 42 (`14` bagian) | `PASS` (`0` mismatch · `0` flag) | `/paket-soal/fisika/kinematika-1-latihan-1` |
| `fis10-kinematika2-adv` | Physics Grade 10 – Kinematics II (Advanced Exercise) | Fisika · Kelas 10 | `en` | 41 (`13` bagian) | `PASS` (`0` mismatch · `0` flag) | `/paket-soal/fisika/kinematika-2-lanjutan` |
| `fis10-kinematika1-adv` | Physics Grade 10 – Kinematics I (Advanced Exercise) | Fisika · Kelas 10 | `en` | 40 (`14` bagian) | `PASS` (`0` mismatch · `0` flag) | `/paket-soal/fisika/kinematika-1-lanjutan` |
| `kim11-laju-reaksi-p1` | Laju Reaksi Kimia Kelas XI – Paket 1 | Kimia · Kelas 11 | `id` | 35 (`19` bagian) | Diperbaiki pada Q15(a) (`0,693 × 8,314 × 9300 = 53.582,90 J/mol → 53,58 kJ/mol`, bukan `53,59`) | `/paket-soal/kimia/laju-reaksi-paket-1` |
| `kim10-cambridge-essay` | Chemistry Grade 10 – Periodicity & Periodic Trends (Essay) | Kimia · Kelas 10 | `en` | 45 (`15` esai) | Diperbaiki pada Q5(a) (blok-$d$ Periode 6 berorbital luar `$5d$` & `$6s$`, bukan `$6p$`) | `/paket-soal/kimia/cambridge-chemistry-grade-10-essay` |
| `bio10-biodiversity-p1` | Biology Grade 10 – Biodiversity & Classification (Practice Set 1) | Biologi · Kelas 10 | `en` | 30 (`30` PG) | `PASS` (`30/30` · `0` mismatch · `0` flag); nama siswa dihapus dari judul & `source.file` | `/paket-soal/biologi/biology-grade-10-practice-set-1` |

### B. Olimpiade Sains / OSN IPA (1 Paket · `accessTier: 'olympiad-pro'`)

| ID Paket | Judul | Mapel / Kelas | Bahasa | Total Poin | Hasil Audit & Tindak Lanjut | Rute Publik |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `olim-smp-ipa-osk` | Simulasi Olimpiade Sains Kabupaten (OSK) IPA SMP – Paket 1 | Olimpiade Sains · Kelas 8 | `id` | 60 (`50` PG + `10` Isian) | Diagram Q2 (`fig-2.webp`) dipotong bersih & dipasang di Part 2 dengan `alt` netral; Q36 pakai jawaban fisis `A. 1 : 12` (koreksi salah cetak huruf `B` di kunci PDF); Q46 diperjelas `"dibentuk ulang"` agar konsisten dengan volume berubah menuju `8R` | `/paket-soal/olimpiade-sains/osk-ipa-smp-simulasi-1` |

### C. Olimpiade Matematika SD Bilangan Kelas 4–5 (9 Paket — `40` Soal per Paket)

| ID Paket | Judul | Tier | Hasil Blind Solve (`pro`) & Audit Editorial | Rute Publik |
| :--- | :--- | :--- | :--- | :--- |
| `olim-sd-bilangan-basic1` | Bilangan Olimpiade SD Kelas 4–5 – Basic 1 | `free` | `PASS` (`40/40`, `0` mismatch, `0` flag) | `/paket-soal/olimpiade-mat/bilangan-sd-basic-1` |
| `olim-sd-bilangan-basic2` | Bilangan Olimpiade SD Kelas 4–5 – Basic 2 | `free` | `PASS` (`40/40`, `0` mismatch, `0` flag) | `/paket-soal/olimpiade-mat/bilangan-sd-basic-2` |
| `olim-sd-bilangan-int1` | Bilangan Olimpiade SD Kelas 4–5 – Intermediate 1 | `free` | `PASS` (`40/40`, `0` mismatch, `0` flag) | `/paket-soal/olimpiade-mat/bilangan-sd-intermediate-1` |
| `olim-sd-bilangan-int2` | Bilangan Olimpiade SD Kelas 4–5 – Intermediate 2 | `free` | Q1(14) diperjelas `"greater than $5$"` agar `C. 62` unik; Q2(30) memakai `$211_3$` terverifikasi (koreksi salah cetak `$201_3$` di kunci PDF) | `/paket-soal/olimpiade-mat/bilangan-sd-intermediate-2` |
| `olim-sd-bilangan-adv1` | Bilangan Olimpiade SD Kelas 4–5 – Advanced 1 | `olympiad-pro` | Q1(5) diperbaiki premis `$x = 72$` (tak mungkin untuk `FPB=12, KPK=216`) menjadi `$x = 108 \implies y = 24$` (`A. 24`) | `/paket-soal/olimpiade-mat/bilangan-sd-advanced-1` |
| `olim-sd-bilangan-adv2` | Bilangan Olimpiade SD Kelas 4–5 – Advanced 2 | `olympiad-pro` | `PASS` (`40/40`, `0` mismatch, `0` flag) | `/paket-soal/olimpiade-mat/bilangan-sd-advanced-2` |
| `olim-sd-bilangan-exp1` | Bilangan Olimpiade SD Kelas 4–5 – Expert 1 | `olympiad-pro` | Q1(14) memakai `D. 26`; Q1(25) diperbaiki pecahan tak-solubel `13/20` menjadi `7/10` (`a=2, b=5 \implies a+b=7`, `A. 7`) | `/paket-soal/olimpiade-mat/bilangan-sd-expert-1` |
| `olim-sd-bilangan-exp2` | Bilangan Olimpiade SD Kelas 4–5 – Expert 2 | `olympiad-pro` | Q2(29) memakai minimum valid `$7$` (`x=3, y=4 \implies 121_3 = 16 = 100_4`; dokumentasi selisih kunci PDF `17`) | `/paket-soal/olimpiade-mat/bilangan-sd-expert-2` |
| `olim-sd-bilangan-elite` | Bilangan Olimpiade SD Kelas 4–5 – Elite Olympiad | `olympiad-pro` | `PASS` (`40/40`, `0` mismatch, `0` flag) | `/paket-soal/olimpiade-mat/bilangan-sd-elite` |

### D. Olimpiade Matematika SMP Bilangan Kelas 7–8 (9 Paket — `30` Soal per Paket · `accessTier: 'olympiad-pro'`)

| ID Paket | Judul | Hasil Blind Solve (`pro`) & Audit Editorial | Rute Publik |
| :--- | :--- | :--- | :--- |
| `olim-smp-bilangan-basic1` | Bilangan Olimpiade SMP Kelas 7–8 – Basic 1 | Q1(20) diperbaiki opsi ganda ambigu `D. $22$` menjadi `D. $23$` agar `A. $7$` unik | `/paket-soal/olimpiade-mat/bilangan-smp-basic-1` |
| `olim-smp-bilangan-basic2` | Bilangan Olimpiade SMP Kelas 7–8 – Basic 2 | `PASS` (`30/30`, `0` mismatch, `0` flag) | `/paket-soal/olimpiade-mat/bilangan-smp-basic-2` |
| `olim-smp-bilangan-int1` | Bilangan Olimpiade SMP Kelas 7–8 – Intermediate 1 | `PASS` (`30/30`, `0` mismatch, `0` flag) | `/paket-soal/olimpiade-mat/bilangan-smp-intermediate-1` |
| `olim-smp-bilangan-int2` | Bilangan Olimpiade SMP Kelas 7–8 – Intermediate 2 | Q1(4) diperbaiki persamaan tak-valid `71_b` menjadi `101_b` agar solusi `b = 7` (`B. $7$`) memenuhi batasan digit $0 \le d < b$ | `/paket-soal/olimpiade-mat/bilangan-smp-intermediate-2` |
| `olim-smp-bilangan-adv1` | Bilangan Olimpiade SMP Kelas 7–8 – Advanced 1 | `PASS` (`30/30`, `0` mismatch, `0` flag) | `/paket-soal/olimpiade-mat/bilangan-smp-advanced-1` |
| `olim-smp-bilangan-adv2` | Bilangan Olimpiade SMP Kelas 7–8 – Advanced 2 | `PASS` (`30/30`, `0` mismatch, `0` flag) | `/paket-soal/olimpiade-mat/bilangan-smp-advanced-2` |
| `olim-smp-bilangan-exp1` | Bilangan Olimpiade SMP Kelas 7–8 – Expert 1 | `PASS` (`30/30`, `0` mismatch, `0` flag) | `/paket-soal/olimpiade-mat/bilangan-smp-expert-1` |
| `olim-smp-bilangan-exp2` | Bilangan Olimpiade SMP Kelas 7–8 – Expert 2 | Q1(1) diperbaiki opsi `C. $11$` menjadi `C. $8$` sesuai nilai eksak $3^{2026} \equiv 8 \pmod{17}$; Q2(2) diperbaiki premis tak-mungkin $\gcd(n,15)=4$ menjadi $\gcd(n,20)=4,\ \operatorname{lcm}(n,20)=60 \implies n=12$ | `/paket-soal/olimpiade-mat/bilangan-smp-expert-2` |
| `olim-smp-bilangan-elite` | Bilangan Olimpiade SMP Kelas 7–8 – Elite Olympiad | Q1(17) diperbaiki kongruensi ke $4 \pmod 5,\ 6 \pmod 7$ (menghasilkan $x=209$); Q2(5) tetap `$7$` terverifikasi; Q2(7) diperjelas `"smallest positive integer"` (`$8$`) | `/paket-soal/olimpiade-mat/bilangan-smp-elite` |

---

## Batch 3: Paket Soal Kompetisi Bernama (11 Paket Baru, Total 38 `published`)

Sumber: arsip Google Drive (`content-inbox/drive/batch3/`, tidak di-commit). Setiap paket memakai nama kompetisi nyata pada field `competition`, label bahasa `langDisplay` (`ID` / `EN` / `ID / EN`), dan `relatedChapterIds` ke bab buku saku. Butir yang bergantung pada gambar yang tidak dapat dinyatakan penuh dalam teks **dibuang atau ditulis ulang secara teks**; tidak ada butir dengan angka yang dikarang. Seluruh kunci diselesaikan ulang secara mandiri (beberapa dengan brute force) dan divalidasi `scratch/verify_paper.mjs` + `tests/papers.test.js` (jumlah poin, rubrik, KaTeX).

| ID Paket | Kompetisi | Butir dipakai | Catatan audit |
| :--- | :--- | :--- | :--- |
| `kim11-asas-xi-p1` | ASAS SMA (Kimia XI) | 29 soal (32 bagian) | 1 butir dibuang (gambar tabung Zn/HCl); butir grafik orde-1 ditulis ulang; kunci cocok dengan sumber |
| `kim11-termokimia-latihan` | Kimia SMA | 20 soal | semua hasil entalpi dihitung ulang; catatan angka penting pada 2 butir |
| `bio10-blok-test-keanekaragaman-virus` | Biologi SMA | 54 bagian | sumber tanpa kunci; 4 butir dibuang (ambigu / bergantung gambar) |
| `sasmo-2015-g8` | SASMO | 25 soal | semua butir dipertahankan, gambar dinyatakan dalam teks |
| `sasmo-2016-sec2` | SASMO | 22 dari 25 | 3 butir dibuang (diagram); Q1 kunci cetak 43200 tidak ada di opsi A-D, jawaban E |
| `hkimo-sec2-prep` | HKIMO | 141 dari 150 | 9 butir dibuang (ambigu/ data kurang); sumber tanpa kunci; interpretasi dicatat pada soal |
| `timo-2022-2023-heat-sec2` | TIMO | 24 dari 25 | 1 butir dibuang (data tidak konsisten); sumber tanpa kunci |
| `simoc-2017-g4` | SIMOC | 23 dari 25 | 1 butir gambar, 1 butir keliru dibuang; Q23 aturan pola disimpulkan dari dua diagram lengkap |
| `osnk-mat-sd-2026` | OSN-K | 26 dari 29 | rekonstruksi soal latihan; 3 butir dibuang (tidak terdefinisi / data rusak) |
| `osnk-mat-smp-2026` | OSN-K | 25 soal | asumsi tambahan dicatat pada butir 7, 14, 24 |
| `to-osnk-mat-sma` | OSN-K (try out) | 20 soal | butir Lanjut 7 dinyatakan ulang sebagai pilihan acak 50/50 (catatan di pembahasan) |

Metadata 27 paket lama ikut dinaikkan: seri Bilangan menjadi `Seri Pembinaan OSN` (`ID / EN`), simulasi OSK menjadi `OSN-K`, paket sains SMA memakai nama mapel.

---

## Pemutakhiran Pedagogis 38 Paket Terbit & Batch 4 (32 Paket Baru Hasil Arsip Terbuka, Total 70 `published`)

### 1. Audit Pembahasan Pedagogis 38 Paket Lama (1.233 bagian)
Seluruh 38 paket terbit diaudit ulang per butir untuk menghapus jalan pintas kalkulator (`\approx` desimal pada soal matematika/logaritma), tebak-coba tanpa pembuktian, dan pembahasan 1 baris:
- `to-osnk-mat-sma` (20 bagian): butir logaritma Q1(10), identitas polinomial Q2(4), dan bukti geometri vektor Q2(10) ditulis ulang dengan hukum logaritma/ketidaksamaan eksak bebas kalkulator.
- 37 paket terbit lainnya (1.213 bagian diaudit, 246 bagian ditulis ulang): diperkaya penurunan konsep langkah demi langkah sesuai kaidah olimpiade & buku saku tanpa mengubah kunci terverifikasi maupun aset `.webp`.

### 2. Batch 4: 32 Paket Soal Olimpiade & Kompetisi Nasional/Internasional
Seluruh naskah bersumber dari arsip terbuka (Po-Shen Loh / MAA AMC, M3Kang, mathcyber1997, defantri, urip.info, folderosn, naskah PDF resmi). Butir bergambar hilang atau ambigu dilewati (tercatat pada `instructions` tiap paket), seluruh kunci diverifikasi ulang secara matematis/ilmiah, dan seluruh paket lulus `node scratch/verify_paper.mjs`, `npm test` (28 berkas / 303 tes), serta `npm run lint`.

| ID Paket | Kompetisi | Butir dipakai | Sumber & catatan verifikasi |
| :--- | :--- | :--- | :--- |
| `osnk-mat-sma-2026` | OSN-K | 2 nomor (18 sub-bagian) | arsip folderosn; Dasar 1–8,10 + Lanjut 1–6,8–10 dimuat; 2 soal gambar/data kurang dilewati |
| `osnk-mat-sma-2025` | OSN-K | 8 soal | arsip mathcyber1997 (Kemampuan Dasar); butir teks lengkap diverifikasi ulang |
| `osnk-mat-sma-2024` | OSN-K | 8 soal | arsip mathcyber1997 (Kemampuan Dasar); No. 1 & 7 dilewati |
| `osnk-mat-sma-2023` | OSN-K | 10 soal | arsip mathcyber1997 (Kemampuan Dasar); seluruh 10 soal lengkap dimuat |
| `osnk-mat-sma-2022` | OSN-K | 9 soal | arsip mathcyber1997 (Kemampuan Dasar); No. 7 dilewati |
| `osnk-mat-smp-2024` | OSN-K | 23 soal | naskah PDF + pembahasan bersih; 2 butir bergambar dilewati |
| `osnk-mat-smp-2020` | OSN-K | 24 soal | arsip mathcyber1997; 1 butir bergambar dilewati |
| `osnp-mat-smp-2019` | OSN-P | 2 nomor (14 sub-bagian) | arsip mathcyber1997 (Isian Singkat + Uraian terverifikasi) |
| `osnk-mat-sd-2025` | OSN-K | 24 soal | arsip defantri; 6 butir bergambar/data hilang dilewati |
| `osnk-mat-sd-2024` | OSN-K | 21 soal | arsip defantri; 9 butir bergambar dilewati |
| `osnk-ipa-sd-2024` | OSN-K | 20 soal | arsip defantri (`[CORRECT]`); 10 butir bergambar dilewati |
| `osnk-ipa-sd-2023` | OSN-K | 29 soal | arsip defantri (`[CORRECT]`); butir bergambar dari 60 soal asli dilewati |
| `osnk-ipa-smp-2025` | OSN-K | 40 soal | arsip defantri (`[CORRECT]`); 10 butir bergambar dilewati |
| `osnp-ipa-smp-2024` | OSN-P | 32 soal | arsip defantri (`[CORRECT]`); butir bergambar dari 50 soal dilewati |
| `osnk-fis-sma-2024` | OSN-K | 27 soal | naskah soal + solusi PDF Basyir; 13 butir bergambar dilewati |
| `osnk-fis-sma-2023` | OSN-K | 26 soal | naskah soal + solusi PDF Basyir; butir bergambar dilewati |
| `osnp-fis-sma-2024` | OSN-P | 6 nomor (17 sub-bagian) | naskah soal + solusi uraian PDF Basyir; sub-soal bergambar dilewati |
| `osnk-kim-sma-2024` | OSN-K | 30 soal | arsip urip.info; seluruh stoikiometri/kesetimbangan/termokimia dihitung & diverifikasi ulang |
| `osnk-kim-sma-2023` | OSN-K | 30 soal | arsip urip.info; seluruh perhitungan kimia diverifikasi ulang tanpa `\ce`/`\pu` |
| `osnk-bio-sma-2024` | OSN-K | 14 skenario (56 pernyataan B/S) | arsip defantri (`[CORRECT]`); hanya skenario bebas gambar/grafik |
| `osnk-bio-sma-2023` | OSN-K | 6 skenario (24 pernyataan B/S) | arsip defantri (`[CORRECT]`); hanya skenario bebas gambar/grafik |
| `amc-8-2024` | AMC 8 | 22 soal | arsip resmi MAA (live.poshenloh.com); 3 soal bergambar dilewati |
| `amc-8-2023` | AMC 8 | 15 soal | arsip resmi MAA (live.poshenloh.com); 10 soal bergambar dilewati |
| `amc-10a-2024` | AMC 10 | 21 soal | arsip resmi MAA (live.poshenloh.com); 4 soal bergambar dilewati |
| `amc-10a-2023` | AMC 10 | 23 soal | arsip resmi MAA (live.poshenloh.com); Q11 & Q24 bergambar dilewati |
| `amc-12a-2024` | AMC 12 | 23 soal | arsip resmi MAA (live.poshenloh.com); 2 soal bergambar dilewati |
| `amc-12a-2023` | AMC 12 | 23 soal | arsip resmi MAA (live.poshenloh.com); 2 soal bergambar dilewati |
| `kangaroo-sg-2015-student` | Kangaroo | 3 nomor (21 sub-bagian) | Singapore Math Kangaroo 2015 Student (Grades 11–12); 9 soal gambar dilewati |
| `ikmc-kadett-2022-2024` | IKMC | 3 nomor (13 sub-bagian) | kompilasi teks lengkap M3Kang (Kadett 2022–2024) |
| `kmnr-kelas-9-2016` | KMNR | 20 soal | arsip mathcyber1997; 5 soal bergambar dilewati |
| `omvn-sma-2022` | OMVN | 2 nomor (16 sub-bagian) | PDF Penyisihan OMVN SMA 2022; dipecahkan ulang secara eksak (butir PDF rusak dilewati) |
| `ksm-mat-ma-2018` | KSM | 18 soal | arsip mathcyber1997; No. 2–25 diselesaikan & diverifikasi ulang, butir gambar/ambigu dilewati |

## Peningkatan Arsitektur, Diagram SVG, & Batch 5 (82 Paket Terpublikasi)

1. **Lazy-loading manifest per paket soal (Item 1)**: Metadata ringan dipisah ke `src/data/papers/meta.js`, dan `scripts/generate-paper-manifest.mjs` menghasilkan `src/data/papers/manifest.js` berisi `PAPER_MANIFEST`, `PUBLISHED_PAPER_MANIFEST`, `PAPER_LOADERS`, dan `loadPaperBySlug`. Halaman hub (`HomeHubPage`, `OlimpiadeHubPage`, `PapersHubPage`) serta `PaperDetailPage` kini hanya mengimpor manifest sehingga tiap paket soal dimuat dinamis per rute.
2. **Konfigurasi PWA bersih (Item 2)**: Menghapus pola `'app.html'` yang tidak ada saat tahap build Vite dari `workbox.globPatterns` di `vite.config.js` agar `vite build` tidak memunculkan peringatan Workbox.
3. **Tombol Koreksi / Solusi Alternatif (Item 3)**: Setiap sub-soal pada `PaperDetailPage.jsx` dilengkapi tautan `Koreksi / Solusi Alternatif` menuju issue GitHub pra-isi via `buildCorrectionIssueUrl` (`ORGANIZATION.repoUrl` di `src/data/siteInfo.js`).
4. **Diagram SVG Kurasi & Dukungan `.svg` Aman (Item 7a)**: Validator di `tests/papers.test.js` dan `scratch/verify_paper.mjs` mendukung `/papers/.../*.svg` bebas `<script>`. Sebanyak 10 diagram SVG presisi ditambahkan di `public/papers/` untuk memulihkan butir bergambar serta memperkaya visualisasi pada `amc-8-2024` (4 SVG, memulihkan No. 3 -> 23 soal), `amc-10a-2024` (1 SVG), `amc-12a-2024` (1 SVG, memulihkan No. 18 -> 24 soal), dan `osnk-fis-sma-2024` (4 SVG, memulihkan No. 20 & 22 -> 29 soal).
5. **Batch 5 — 12 Paket Baru (Item 7b)**: Menambahkan cakupan **SMO (Singapore)**, **AMC 8 2025**, **AMC 10B/12B 2024**, serta **OSN-K / KSM** (total `82` paket terpublikasi):

| ID Paket | Kompetisi | Cakupan | Catatan |
| :--- | :--- | :--- | :--- |
| `smo-junior-2012` | SMO | 29 butir (29 skor) | SMO Junior 2012 (arsip terbuka `yuhesui-archive/SMO`) |
| `smo-senior-2012` | SMO | 28 butir (28 skor) | SMO Senior 2012 (arsip terbuka `yuhesui-archive/SMO`) |
| `smo-senior-2010` | SMO | 25 butir (25 skor) | SMO Senior 2010 (arsip terbuka `yuhesui-archive/SMO`) |
| `smo-open-2012` | SMO | 21 butir (21 skor) | SMO Open 2012 (arsip terbuka `yuhesui-archive/SMO`) |
| `amc-8-2025` | AMC 8 | 18 butir (18 skor) | AMC 8 2025; pembahasan langkah-demi-langkah |
| `amc-10b-2024` | AMC 10 | 21 butir (21 skor) | AMC 10B 2024; pembahasan langkah-demi-langkah |
| `amc-12b-2024` | AMC 12 | 23 butir (23 skor) | AMC 12B 2024; pembahasan langkah-demi-langkah |
| `osnk-ipa-smp-2024` | OSN-K | 35 butir (35 skor) | OSN-K IPA SMP 2024 |
| `osnk-mat-smp-2019` | OSN-K | 20 butir (20 skor) | OSK Matematika SMP 2019 |
| `osnk-mat-sd-2023` | OSN-K | 19 butir (19 skor) | OSN-K Matematika SD 2023 |
| `osnk-kim-sma-2025` | OSN-K | 30 butir (30 skor) | OSN-K Kimia SMA 2025 |
| `ksm-kim-ma-2022` | KSM | 3 butir (3 skor) | KSM Kimia MA 2022 (uraian/kontekstual mendalam) |
