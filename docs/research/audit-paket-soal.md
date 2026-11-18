# Laporan Ingesti & Audit Dua-Model Paket Soal (Batch 1 + Pilot)

Seluruh paket di bawah ini melewati pipeline verifikasi terpisah:
1. **Ekstraksi (`flash`)**: menyusun naskah soal, diagram `.webp` terpotong bersih, kunci jawaban, prinsip utama, pembahasan terperinci, serta rubrik poin dengan mempertahankan bahasa asli dokumen sumber (`en` atau `id`, tanpa terjemahan paksa).
2. **Blind Solve Independen (`pro`)**: memecahkan seluruh butir soal secara mandiri langsung dari naskah/gambar tanpa mengandalkan kunci asli, lalu membandingkan hasilnya terhadap kunci sumber.
3. **Audit Kualitas Hydrogen (`flash_lite`, strictly 1 paket per panggilan)**: memverifikasi kesesuaian poin rubrik, validitas KaTeX, bebas bocoran angka di deskripsi gambar, dan konsistensi dengan laporan `pro`.

---

## 1. Paket Terpublikasi (`status: 'published'` — 7 Paket)

| ID Paket | Judul | Mapel / Kelas | Bahasa | Total Poin | Hasil Blind Solve (`pro`) & Audit Hydrogen | Rute Publik |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `fis10-kinematika2-p2` *(Pilot)* | Physics Grade 10 – Kinematics II (Projectile Motion) – Paket 2 | Fisika · Kelas 10 | `en` | 50 (`13` bagian) | `PASS` · `0` mismatch · `0` flag | `/paket-soal/fisika/kinematika-2-paket-2` |
| `fis10-kinematika2-p1` | Physics Grade 10 – Kinematics II (Projectile Motion) – Paket 1 | Fisika · Kelas 10 | `en` | 50 (`13` bagian) | `PASS` · `0` mismatch · `0` flag | `/paket-soal/fisika/kinematika-2-paket-1` |
| `fis10-kinematika1-ex1` | Physics Grade 10 – Kinematics I Exercise | Fisika · Kelas 10 | `en` | 42 (`14` bagian) | `PASS` · `0` mismatch · `0` flag | `/paket-soal/fisika/kinematika-1-latihan-1` |
| `fis10-kinematika2-adv` | Physics Grade 10 – Kinematics II (Advanced Exercise) | Fisika · Kelas 10 | `en` | 41 (`13` bagian) | `PASS` · `0` mismatch · `0` flag | `/paket-soal/fisika/kinematika-2-lanjutan` |
| `fis10-kinematika1-adv` | Physics Grade 10 – Kinematics I (Advanced Exercise) | Fisika · Kelas 10 | `en` | 40 (`14` bagian) | `PASS` · `0` mismatch · `0` flag | `/paket-soal/fisika/kinematika-1-lanjutan` |
| `olim-sd-bilangan-basic1` | Bilangan Olimpiade Matematika SD Kelas 4–5 – Basic 1 | Olimpiade Mat · Kelas 5 | `id` *(campuran butir ID/EN asli)* | 40 (`25` PG + `15` Isian) | `PASS` · `0` mismatch · `0` flag | `/paket-soal/olimpiade-mat/bilangan-sd-basic-1` |
| `olim-sd-bilangan-elite` | Bilangan Olimpiade Matematika SD Kelas 4–5 – Elite Olympiad | Olimpiade Mat · Kelas 5 | `id` *(campuran butir ID/EN asli)* | 40 (`25` PG + `15` Isian) | `PASS` · `0` mismatch · `0` flag | `/paket-soal/olimpiade-mat/bilangan-sd-elite` |

---

## 2. Paket Ditahan untuk Peninjauan (`status: 'needs-human'` — 2 Paket)

Dua paket Olimpiade SMP sudah diekstrak ke `ALL_PAPERS` dan lolos validasi skema/LaTeX/rubrik, namun **ditahan dari publikasi (`PUBLISHED_PAPERS`)** karena verifikasi `pro` + audit Hydrogen mendeteksi cacat matematis pada naskah PDF aslinya:

### A. `olim-smp-bilangan-basic1` (`bilangan-smp-basic-1` · 30 soal)
- **Sumber:** `BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7–8 – BASIC 1.pdf` (`29/30` soal bersih `match: true`).
- **Temuan (`Bagian A, Nomor 20`):**
  - Soal menanyakan bilangan bulat positif yang bersisa `2` jika dibagi `5` dan bersisa `1` jika dibagi `3`, dengan pilihan `A. 7`, `B. 12`, `C. 17`, `D. 22`.
  - Secara matematis $n \equiv 2 \pmod 5$ dan $n \equiv 1 \pmod 3 \iff n \equiv 7 \pmod{15}$, sehingga **baik `A. 7` maupun `D. 22` sama-sama benar** ($22 = 4 \times 5 + 2 = 7 \times 3 + 1$).
  - **Saran Perbaikan:** Ganti opsi `D. 22` menjadi bilangan yang tidak memenuhi (mis. `D. 27` atau `D. 23`), atau ubah pertanyaan menanyakan bilangan **terkecil** yang memenuhi.

### B. `olim-smp-bilangan-elite` (`bilangan-smp-elite` · 30 soal)
- **Sumber:** `BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 78  ELITE OLYMPIAD.pdf` (`27/30` soal bersih).
- **3 Temuan Spesifik:**
  1. **Bagian A, Nomor 17:** Naskah tertulis $x \equiv 1 \pmod 2,\ x \equiv 2 \pmod 3,\ x \equiv 3 \pmod 5,\ x \equiv 4 \pmod 7$, tetapi pilihan hanya `A. 209`, `B. 210`, `C. 211`, `D. 419`. Solusi asli sistem kongruensi tersebut adalah $x = 53$ ($53 \equiv 3 \pmod 5$ dan $53 \equiv 4 \pmod 7$), bukan `209`. Kunci `209` mensyaratkan $x \equiv -1 \pmod{2,3,5,7}$, yakni $x \equiv 4 \pmod 5$ dan $x \equiv 6 \pmod 7$.
  2. **Bagian B, Nomor 5:** Jumlah $1^1 + 2^2 + 3^3 + \dots + 10^{10} \pmod{10}$. Kunci PDF asli menuliskan `5` karena salah menghitung satuan $8^8 \equiv 4 \pmod{10}$, padahal $8^4 = 4096 \equiv 6 \pmod{10} \implies 8^8 \equiv 6 \pmod{10}$. Jumlah satuan sebenarnya adalah $1 + 4 + 7 + 6 + 5 + 6 + 3 + 6 + 9 + 0 = 47 \equiv \mathbf{7} \pmod{10}$. *(Catatan: pada file JS draf saat ini nilai jawaban sudah dikoreksi ke `$7$` sesuai hitungan matematis, menunggu konfirmasi pemilik untuk mengubah status ke `published`.)*
  3. **Bagian B, Nomor 7:** Pertanyaan menuliskan *"smallest **non-negative** integer $n$ such that $2^n \equiv 1 \pmod{17}$"*. Secara harfiah bilangan bulat tak-negatif terkecil adalah $n = \mathbf{0}$ ($2^0 = 1$), sedangkan kunci PDF mengharapkan orde perkalian $n = 8$ (*smallest **positive** integer*).
