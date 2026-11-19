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
