# Quality Bar — Paket Soal Terstruktur Duta e-dukasi

Dokumen ini menetapkan standar mutu dan struktur baku untuk seluruh konten **Paket Soal Duta e-dukasi** (`src/data/papers/**`), mengacu langsung pada dokumen acuan emas [`docs/reference/gold-standard-fis10-kinematika2-p2.pdf`](./gold-standard-fis10-kinematika2-p2.pdf) (*Physics Grade 10 – Kinematics II (Projectile Motion) – Paket 2*, 50 marks).

---

## 1. Prinsip Bahasa & Hak Cipta (Keputusan D4, D5, D6)

1. **Tetap pada bahasa asli (Stay in Lane — D5):**
   - Naskah sumber berbahasa Inggris disimpan dan diterbitkan dalam **Bahasa Inggris** (`lang: 'en'`).
   - Naskah sumber berbahasa Indonesia disimpan dan diterbitkan dalam **Bahasa Indonesia** (`lang: 'id'`).
   - **Dilarang menerjemahkan soal** secara otomatis atau manual antarkanal. Metadata HTML (`<html lang>`) dan JSON-LD (`inLanguage`) mengikuti `paper.lang`, sementara antarmuka navigasi situs tetap berbahasa Indonesia dengan lencana bahasa pada kartu indeks.
2. **Lisensi & Atribusi (D4, D6):**
   - Seluruh paket soal diterbitkan di bawah lisensi **CC BY 4.0** dengan kredit **Duta e-dukasi** (serta sumber kompetisi/kurikulum asli bila tercantum, misalnya OSN/KSN).

---

## 2. Struktur Wajib Setiap Paket Soal

Setiap modul paket di `src/data/papers/<subject>/kelas<g>/<slug>.js` harus memenuhi komponen berikut:

### A. Tajuk & Instruksi Paket
- `id`: unik (contoh: `fis10-kinematika2-p2`).
- `slug`: URL-friendly slug (contoh: `kinematika-2-paket-2`).
- `subject`: `'fisika' | 'matematika' | 'ipa' | 'olimpiade-mat' | 'olimpiade-fis'`.
- `grade`: angka kelas (`4`–`12`) atau tingkat.
- `track`: `'kurikulum' | 'cambridge-style' | 'osn' | 'amc'`.
- `lang`: `'en'` atau `'id'`.
- `totalMarks`: jumlah skor seluruh soal (contoh: `50`), harus sama persis dengan jumlah `question.marks`.
- `instructions`: instruksi umum pengerjaan (ketentuan satuan SI, nilai $g$ atau konstanta, ketelitian).
- `constants`: daftar konstanta numerik/trigonometri dalam LaTeX yang diberikan kepada peserta di awal paket.

### B. Badan Soal (`questions[]`) — Terstruktur Bertahap
Setiap soal berisi:
1. `no`, `title`, `marks`: nomor soal, judul kontekstual singkat, dan total bobot nilai (`marks === sum(parts.marks)`).
2. `stem`: cerita konteks fisik/matematis yang realistis, jelas, lengkap dengan seluruh nilai diketahui beserta satuannya.
3. `figures[]`: ilustrasi/diagram berlabel `Fig. X.Y (Not to scale)` / `Gambar X.Y (Tidak sesuai skala)` dalam format `.webp` di `public/papers/<id>/`.
   - **Aturan Anti-Bocoran:** Deskripsi `alt` dan `caption` gambar **tidak boleh** memuat nilai jawaban (`answerNumeric`) maupun bocoran hasil perhitungan.
   - Diagram harus konsisten 100% dengan teks soal (sudut, titik acuan $O/A/P$, arah sumbu, besaran diketahui).
4. `parts[]`: anak soal terstruktur `(a)`, `(b)`, `(c)`, … disusun **dari langkah dasar ke sintesis akhir** (scaffolding):
   - Bagian `(a)` umumnya menguji pemecahan komponen dasar atau identifikasi konsep awal.
   - Bagian tengah membangun besaran antara (tinggi maksimum, waktu tempuh, jarak mendatar, syarat batas).
   - Bagian akhir menguji sintesis multi-langkah (kecepatan resultan pada waktu $t$, dampak akhir, kasus bersyarat).

### C. Kunci Jawaban, Pembahasan & Rubrik (`parts[i]`)
Setiap bagian `(a)`–`(e)` wajib memuat:
1. `marks`: bobot nilai bagian (bilangan bulat positif).
2. `prompt`: pertanyaan eksplisit yang menyebutkan besaran dan bentuk yang diminta.
3. `answer`: **Kunci jawaban ringkas bentuk ganda**, yaitu bentuk **eksak** (akar/pecahan/$\pi$) dan **desimal SI** (umumnya 3 angka penting) lengkap dengan satuan, contoh: `v_{0x} = 20\\sqrt{3}\\ \\text{m s}^{-1}\\ (\\approx 34.6\\ \\text{m s}^{-1})`.
4. `answerNumeric`: daftar `{ name, value, unit }` untuk verifikasi otomatis oleh solver independen dan uji anti-bocoran.
5. `principle`: satu kalimat tegas **`Physics Principle:`** atau **`Prinsip Fisika:` / `Prinsip Matematika:`** yang menjelaskan hukum atau alasan matematis sebelum hitungan dimulai.
6. `solution`: penurunan rumus dan langkah substitusi aljabar lengkap dalam LaTeX KaTeX valid hingga hasil akhir (termasuk penjelasan penolakan akar tidak fisis, misalnya $t < 0$).
7. `rubric[]`: perincian kode skor granular (`B1` fakta/konsep independen, `M1` metode/substitusi sah, `A1` ketepatan hasil akhir + satuan/tanda) yang jumlah bobot kodenya sama persis dengan `part.marks`.

---

## 3. Checklist Audit Sebelum Diterbitkan

1. **Kelengkapan Skor:** $\sum \text{rubric} = \text{part.marks}$, $\sum \text{parts.marks} = \text{question.marks}$, $\sum \text{questions.marks} = \text{totalMarks}$.
2. **Validasi Solver Independen (Model Berbeda):** Solver menerima *hanya* instruksi, konstanta, teks `stem` + `parts.prompt`, dan deskripsi gambar (tanpa kunci), lalu memastikan kecocokan 100% dengan `answerNumeric` dan `answer`.
3. **Audit Hydrogen (`flash_lite`, 1 paket per panggilan):** Bebas dari artefak OCR (mis. `vy\n2`), satuan tidak konsisten, besaran diketahui yang hilang, atau ketidaksesuaian gambar–teks.
4. **Render KaTeX & Aset:** Seluruh ekspresi KaTeX terurai tanpa error (`throwOnError: true`), dan semua file gambar `fig-*.webp` tersedia di `public/`.
