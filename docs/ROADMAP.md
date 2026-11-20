# Roadmap AwesomeMathJ → Matematika & Fisika untuk Semua

## Tujuan

Materi **Matematika, IPA SD–SMP, dan Fisika SMA (Kelas 4–12)** serta **Olimpiade** yang bisa dibuka, dibaca, dan dipelajari siapa saja tanpa login, ringan di HP, bisa dipakai offline (PWA), serta terstruktur agar mudah dirujuk mesin pencari dan AI (`llms.txt`, `llms-full.txt`, MathML/LaTeX, dan JSON-LD `LearningResource`/`Quiz`).

**Studio Guru** tetap menjadi alat pribadi untuk mengirim PR ke murid. Murid reguler mendapat materi kurikulum (Matematika maupun IPA/Fisika), sedangkan murid olimpiade mendapat AMC. Keduanya memakai bank soal yang sama.

## Kurikulum yang dicakup

| Jalur | Untuk siapa | Acuan |
| :--- | :--- | :--- |
| **Kurikulum Merdeka** | Sekolah negeri & swasta nasional | CP Keputusan Kepala BSKAP **046/H/KR/2025** dan buku siswa **edisi revisi** (SD mulai semester 2 TA 2025/2026) |
| **Cambridge** | Sekolah bilingual/internasional | Primary Mathematics 0096 & Science 0097 (Stage 1–6); Lower Secondary Mathematics 0862 & Science 0893 (Stage 7–9); IGCSE Mathematics 0580, Physics 0625, Chemistry 0620, Biology 0610 |
| **Olimpiade** | Murid kompetisi | AMC 8/10/12 (sudah ada), lalu OSN/KSN |

Jalur Cambridge dipilih karena sekolah unggulan di Pontianak memakainya:
- **Sekolah Kristen Immanuel:** kelas bilingual, kurikulum nasional ditambah Cambridge IGCSE untuk Matematika & Sains.
- **Sekolah Tunas Bangsa:** IB PYP untuk TK–SD, Cambridge untuk SMP–SMA (IGCSE, AS/A Level).
- **Stella Maris:** Cambridge.

Data ini berasal dari direktori sekolah pihak ketiga, jadi perlu dicek ulang langsung ke sekolah.

**IPA dalam Kurikulum Merdeka:**
- SD Kelas 3–6 memakai mata pelajaran **IPAS** (IPA + IPS); hanya bagian IPA yang diambil.
- SMP memakai **IPA** terpadu.
- SMA Kelas 10 memakai **IPA** (Fase E); Kelas 11–12 terbagi menjadi **Fisika, Kimia, Biologi** (Fase F).

## Prinsip konten (berlaku untuk semua mata pelajaran)

1. **Satu soal, satu sumber.** Teks, pilihan, kunci, pembahasan, dan gambar ada dalam satu objek. Sudah diterapkan untuk Matematika Kelas 4–12.
2. **Setiap soal diberi label kurikulum:** mata pelajaran, jalur, kelas/fase, elemen CP atau kode Cambridge, dan sumber buku/bab.
3. **Gambar dibuat dari data soal.** Angka di gambar harus sama dengan angka di soal, dan dijaga oleh `tests/contentAudit.test.js`.
4. **Tidak ada soal yang bergantung pada soal lain.** Paket PR mengambil soal secara terpisah.
5. **Setiap perubahan konten lewat test.** Render gambar, cakupan fase, kunci jawaban, soal kembar.

## Temuan katalog buku resmi (buku.kemendikdasmen.go.id, Oktober 2026)

Katalog Kurikulum Merdeka resmi dibaca langsung lewat API publik situs:

| Mapel | Edisi terbaru di katalog |
| :--- | :--- |
| Matematika SD Kelas IV–VI, SMP Kelas VII–IX | Edisi 2022 — **file PDF yang sama** dengan yang dipakai proyek ini (`Matematika-BS-KLS-IV.pdf`, dst.) |
| Matematika SMA Kelas X | **Edisi Revisi** (`Matematika_BS_KLS_X_Rev.pdf`) |
| Matematika Tingkat Lanjut Kelas XI | **Edisi Revisi** (`Matematika_BS_KLS_XI_TL_Rev.pdf`) |
| Matematika Kelas XI, XII, Tingkat Lanjut XII | Edisi 2021/2022 |
| IPA SMP Kelas VII & VIII, IPA SMA Kelas X, IPAS SD Kelas IV & V | **Edisi Revisi** |

Artinya, ketidaksesuaian kelas (soal Kelas 4 berisi materi Kelas 5) **bukan karena buku lama**. Penyebabnya soal tambahan yang dibuat tanpa dicek ke CP (sudah diperbaiki di Tahap 0). Buku Matematika SD–SMP di katalog resmi belum diganti edisi baru. Yang perlu diselaraskan ulang dengan edisi revisi adalah **Kelas X** dan **Matematika Tingkat Lanjut XI**.

Catatan akses (30 Oktober 2026): `static.buku.kemdikbud.go.id`, `pusmendik.kemendikdasmen.go.id`, `repositori.kemendikdasmen.go.id`, dan `web.archive.org` tidak dapat dijangkau dari server ini (koneksi ditolak). Salinan buku resmi diambil dari perpustakaan digital sekolah:
- IPA Kelas VII **Edisi Revisi**: e-Library SMPN 1 Samarinda (Google Drive).
- IPA Kelas VIII dan IX edisi 2022: e-Library SMPN 1 Samarinda. Edisi revisi Kelas VIII hanya tersedia di Scribd, yang memerlukan login.
- Matematika Kelas VIII edisi baru (2023): e-Library SMPN 1 Samarinda.
- Panduan Guru Matematika Kelas X **Edisi Revisi 2023**: perpustakaan SMAN 1 Ciruas.

Hasil penyelarasan:
- **IPA:** urutan dan isi subbab mengikuti daftar isi buku. Kelas VII Bab 6 berganti judul menjadi "Ekologi dan Pelestarian Lingkungan". Asam–basa dipindah dari Kelas VIII Bab 5 ke Kelas IX Bab 5, dan Kelas VIII Bab 5 kini membahas atom, tabel periodik, dan molekul. Kelas IX Bab 7 ditambah Krisis Energi dan Ketersediaan Pangan. Kelas VIII Bab 1 ditambah Spesialisasi Sel. Sistem gerak dan struktur tumbuhan di Kelas VIII Bab 2 ditandai sebagai pengayaan.
- **Matematika Kelas X:** buku edisi revisi berisi 7 bab tanpa logaritma dan vektor. Keterangan bab di `src/data/cp2025Mapping.js` kini menyebut isi buku edisi revisi sekaligus posisi bab menurut CP 046/2025.
- **Matematika Kelas VIII:** 6 bab di buku edisi baru sama dengan bab situs.
- **Belum didapat:** Matematika Tingkat Lanjut Kelas XI edisi revisi.

## Tahapan

### Tahap 0 — Perbaikan darurat ✅ (Oktober 2026)
- Gambar dipindahkan ke dalam soal; 63 gambar diperbaiki.
- Soal Kelas 4 di luar Fase B diganti; soal kembar dan soal yang merujuk "soal sebelumnya" dibereskan.
- Audit otomatis dipasang. Rincian ada di `docs/audit/AUDIT_2026-10.md`.

### Tahap 0b — Studio Guru sederhana ✅ (Oktober 2026)
- Satu halaman berbasis murid; 1 bab = 1 PR (mudah → sulit); PR AMC untuk murid olimpiade.
- Pemutar PR mendukung pilihan ganda, isian, dan uraian; jawaban per soal terlihat oleh guru.
- Login Google murid dihapus; progres pengunjung publik tersimpan di perangkat.
- Aturan Firestore diperketat (daftar PR hanya untuk guru pemilik). **Perlu di-deploy:** `firebase deploy --only firestore:rules`.

### Tahap 0c — Penyelarasan CP 046/2025 ✅ (Oktober 2026)
- Teks resmi CP Matematika, Matematika Tingkat Lanjut, IPAS, IPA, Fisika, Kimia, dan Biologi disimpan di `docs/kurikulum/cp-046-2025/`.
- 39 soal SD yang memakai materi Fase D diganti (statistika, diagram lingkaran, peluang berupa angka, lingkaran, desimal dua angka, skala). Bab Peluang Kelas 6 kini membahas kemungkinan kejadian sesuai Fase C.
- Aturan otomatis cakupan fase untuk Kelas 4–9; keterangan CP 2025 untuk bab Kelas X yang berpindah fase.

### Tahap 0d — Exposure mesin pencari (SEO) ✅ (Oktober 2026)
- Alamat rapi per bab: `/matematika/kelas-4/bab2-pecahan`, `/olimpiade/amc-8/ch1-permutations` (link lama `/?grade=` dialihkan otomatis).
- `npm run build` menjalankan `scripts/prerender.mjs`. Hasilnya 104 halaman HTML berisi materi lengkap (rumus dirender KaTeX), dengan judul/deskripsi unik, canonical, Open Graph, dan JSON-LD (`LearningResource`, `BreadcrumbList`), plus `sitemap.xml`.
- `public/robots.txt` menutup Studio Guru, link PR, lembar kerja, dan halaman kunci jawaban dari indeks.
- `vercel.json`: alamat rapi di-rewrite eksplisit ke file `.html` hasil prerender, dan rute lain ke `/app.html`. `cleanUrls` tidak dipakai, karena fitur itu mengalihkan file verifikasi Google `googlebd291c9eb4b652d2.html`. Hal ini dijaga oleh `tests/deployConfig.test.js`.
- Perlu dilakukan pemilik situs: daftarkan `https://awesomemathj.vercel.app` di Google Search Console, lalu kirim `sitemap.xml`.

### Tahap 1 — Fondasi multi-mata pelajaran ✅ (Oktober 2026)
- Tombol **"Laporkan soal"** di setiap soal buku saku, AMC, dan PR murid. Laporan masuk ke `reports/{id}` di Firestore dan tampil di Studio Guru → **Laporan soal**. Nama dan email pelapor tidak disimpan.
- **Link per soal**, misalnya `/matematika/kelas-4/bab2-pecahan#soal-sd4-b2-3`.
- **Cari materi di semua kelas** di beranda: Matematika, IPA, dan AMC.
- **Mata pelajaran di alamat**: `/matematika/kelas-N/...` dan `/ipa/kelas-N/...`. Tab Matematika / IPA / Olimpiade AMC.
- **Data IPA satu file per bab** (`src/data/ipa/kelasN/babM-*.js`) dengan penulis ringkas `soal()`/`bab()` di `src/data/ipa/author.js`. Setelah mengedit, jalankan `node pipeline/build_chapter_index.mjs`.
- Bab IPA diberi label `subject`, `curriculum`, dan `element` (elemen CP); fase berasal dari kelas.
- Studio Guru: pilihan **IPA Kelas N** saat membuat PR untuk murid Kelas 7–9.
- **Perlu dilakukan pemilik:** deploy ulang aturan Firestore (`docs/prompts/DEPLOY_FIREBASE_RULES.md`).

### Segmentasi materi (Oktober 2026)
Polanya dibandingkan langsung dengan mathcyber1997.com dan defantri.com setelah akses jaringan dibuka.
- **mathcyber1997:** beranda berupa "Daftar Isi Blog" yang dikelompokkan per **topik** (Aljabar, Geometri, Peluang, ...). Artikel berpola "Materi, Soal, dan Pembahasan – Topik": materi singkat, lalu Bagian Pilihan Ganda dan Bagian Esai. Setiap soal punya tombol **Pembahasan** yang bisa dibuka-tutup dan membahas tiap pilihan. Ada tautan "Baca Juga" ke materi terkait.
- **defantri:** lalu lintas besar datang dari **paket soal TKA** (Model A, B, C, ...). Setiap paket memuat muatan dan matriks asesmen resmi Pusmendik, lalu 25–40 soal bernomor dengan kunci jawaban.

Yang diterapkan di AwesomeMathJ:
- **Halaman kelas:** daftar isi semua bab beserta subbabnya.
- **Halaman bab:** Daftar Isi → Pengantar → Materi (subbab bernomor) → Rumus Kunci → Contoh Soal dan Pembahasan → Kesalahan yang Sering Terjadi → Tips → Latihan Soal → Materi Terkait → Bab sebelumnya / berikutnya.
- **Pembahasan per soal** bisa dibuka kapan saja. Di HTML prerender, setiap soal disertai `<details>` berisi kunci dan pembahasan, sehingga terbaca Google.
- **`/daftar-isi`:** semua bab Matematika, IPA, dan AMC per topik (`src/data/topics.js`), sekaligus sumber "Materi Terkait".
- **`/tka`:** Latihan TKA Matematika SD/MI (Kelas 6) dan SMP/MTs (Kelas 9), masing-masing Paket A dan B berisi 30 soal per elemen TKA (`src/data/tka.js`, `src/utils/tkaBuilder.js`). Muatan elemen dikutip dari kerangka TKA Pusmendik sebagaimana dimuat defantri.com, karena situs Pusmendik mengembalikan error 502 ke server ini.

### Tahap 2 — Matematika Kurikulum Merdeka edisi revisi
- Selaraskan ulang **Kelas X** dan **Matematika Tingkat Lanjut XI** dengan edisi revisi.
- Kelas 4–9: periksa setiap soal terhadap buku 2022 (yang masih berlaku) dan CP 046/2025; ganti soal yang keluar dari cakupan bab.
- Ganti sisa soal kembar dan mirip (daftar di laporan audit).
- **Butuh:** akses ke PDF buku resmi (lihat "Kebutuhan dari Anda").

### Tahap 3 — IPA SD–SMP & Fisika SMA Kurikulum Merdeka ✅ (Oktober–November 2026)
- ✅ **IPA SMP Kelas 7–9 (Oktober 2026):** 20 bab, dengan urutan bab mengikuti buku siswa IPA Kurikulum Merdeka.
  - Kelas 7: Metode Ilmiah, Zat, Suhu & Kalor, Gerak & Gaya, Klasifikasi, Ekologi, Tata Surya.
  - Kelas 8: Sel, Struktur & Fungsi Tubuh (termasuk zat aditif), Usaha & Pesawat Sederhana, Getaran–Gelombang–Cahaya, Unsur–Senyawa–Campuran, Struktur Bumi.
  - Kelas 9: Pertumbuhan, Koordinasi–Reproduksi–Homeostasis (termasuk zat adiktif), Tekanan, Listrik–Magnet–Energi Alternatif, Reaksi Kimia, Pewarisan Sifat & Bioteknologi, Isu Lingkungan.
  - Setiap bab berisi 6–7 subbab, rumus/istilah kunci, 3 contoh soal dengan pembahasan, kesalahan umum, tips, dan 15 soal (5 Dasar, 5 Sedang, 5 Tantangan).
  - Gambar SVG: termometer, tuas, rangkaian seri/paralel, gelombang, diagram gaya, grafik v–t, jaring makanan, dongkrak hidrolik, bandul.
- ✅ **IPA SD Kelas 4–6 (berbasis Fisika & IPAS CP 046/2025, November 2026):** 12 bab (4 bab per kelas, 180 soal).
  - Kelas 4 (Fase B): Wujud Zat & Perubahannya, Gaya di Sekitar Kita, Sumber & Perubahan Energi, Pancaindra & Pengamatan Ilmiah.
  - Kelas 5 (Fase C): Cahaya & Alat Optik Sederhana, Bunyi & Pendengaran, Listrik & Magnet, Ekosistem & Siklus Air.
  - Kelas 6 (Fase C): Rangka & Mekanika Gerak Tubuh, Efisiensi & Energi Terbarukan, Sistem Tata Surya, Rotasi–Revolusi & Gerhana.
- ✅ **Fisika SMA Kelas 10–12 (Fase E & F CP 046/2025, November 2026):** 17 bab (255 soal), plus 4 engine SVG baru (`inclined-plane`, `optics`, `projectile`, `pv-diagram`).
  - Kelas 10 (Fase E, 5 bab): Hakikat Fisika & Pengukuran, Vektor & Gerak Lurus, Gerak Parabola & Melingkar, Usaha–Energi & Energi Terbarukan, Kalor–Radiasi & Perubahan Iklim.
  - Kelas 11 (Fase F, 6 bab): Dinamika Partikel & Hukum Newton, Momentum–Impuls & Tumbukan, Dinamika Rotasi & Kesetimbangan, Fluida Statis & Dinamis, Getaran–Gelombang & Bunyi, Kalor & Termodinamika.
  - Kelas 12 (Fase F, 6 bab): Listrik Statis & Kapasitor, Listrik Arus Searah & Kirchhoff, Medan Magnet & Induksi Elektromagnetik, Rangkaian AC, Gelombang Elektromagnetik & Optika, Fisika Modern–Radioaktivitas & Teknologi Digital.
- ✅ **TKA IPA SMP & TKA Fisika SMA (`/tka`):** Paket A & B masing-masing 30 soal sesuai elemen kurikulum.
- `tests/ipaContent.test.js` menjaga bentuk bab, kecocokan kunci dengan pembahasan, sebaran kunci jawaban, gambar, dan sinkronisasi indeks untuk seluruh 49 bab IPA & Fisika (Kelas 4–12).
- Saat PDF buku resmi edisi revisi bisa diakses, cocokkan ulang subbab dengan buku siswa resmi.

### Tahap 3b — Referensi Publik, Pencarian & AI Referenceability ✅ (November 2026)
- **`/rumus` (Ensiklopedia Rumus):** Kumpulan seluruh rumus kunci Matematika (Kelas 4–12), IPA & Fisika (Kelas 4–12), dan AMC lengkap dengan pencarian langsung dan tautan ke bab terkait, ikut diprerender ke `dist/rumus.html`.
- **KaTeX `htmlAndMathml` di HTML prerender:** Setiap rumus menyertakan `<math>` MathML dan `<annotation encoding="application/x-tex">` agar crawler pencarian, screen reader, dan LLM membaca notasi matematika secara presisi.
- **JSON-LD `Quiz` + `LearningResource`:** Setiap halaman bab dan paket TKA menyertakan schema `Quiz` lengkap dengan `Question` dan `acceptedAnswer`.
- **`/llms.txt` & `/llms-full.txt`:** Indeks ringkas dan korpus lengkap Markdown + LaTeX seluruh materi, rumus, contoh soal, dan bank soal latihan siap rujuk oleh AI.

### Tahap 4 — Jalur Cambridge (Fokus Matematika & Fisika)
- Cambridge Primary Mathematics 0096, Lower Secondary Mathematics 0862, IGCSE Mathematics 0580 & Physics 0625.
- Konten dalam bahasa Inggris, dengan istilah kunci dwibahasa.

### Tahap 5 — Olimpiade & Pendalaman Bank Soal (Matematika & Fisika)
- Rapikan modul AMC (6 gambar di `amcRegistry.js` yang belum terhubung) dan tambah jalur **OSN/KSN Matematika & Fisika**.
- Tambah paket soal UTBK/SNBT (Penalaran Matematika) dan perluas variasi soal per bab (modularisasi `src/data/matematika/gradeX.js` menjadi satu file per bab seperti `src/data/ipa/`).

## Kebutuhan dari Anda

1. **Akses PDF buku resmi.** Katalog `buku.kemendikdasmen.go.id` sudah bisa dibaca, tetapi file PDF-nya ada di `static.buku.kemdikbud.go.id` yang masih diblokir. Tambahkan domain itu di *Network access* environment (https://code.claude.com/docs/en/cloud-environments#network-access), atau unggah PDF ke repo (misalnya folder `sources/`).
2. **Contoh soal dari sekolah murid.** Lembar kerja atau ujian dari Immanuel, Tunas Bangsa, dan lainnya akan membantu menyesuaikan gaya dan tingkat kesulitan soal.
