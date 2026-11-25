/**
 * Paket Soal Terstruktur: KMNR XI Babak Penyisihan Kelas 9 (2016)
 * Sumber: scraped_raw/kmnr-kelas-9-2016.md (25 soal asli).
 * Catatan penyuntingan: 20 soal mandiri dimuat (nomor asli 1-4, 6-15, 17, dan 21-25 dengan nomor asli dipertahankan).
 * 5 soal dilewati (nomor asli 5, 16, 18, 19, dan 20) karena memerlukan gambar pada naskah soal yang tidak tersedia di arsip sumber.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'kmnr-kelas-9-2016',
  slug: 'kmnr-kelas-9-2016',
  subject: 'olimpiade-mat',
  grade: 9,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'KMNR XI Babak Penyisihan Kelas 9 (2016)',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab2-bilangan-rasional',
    'smp7-bab3-rasio',
    'smp7-bab4-bentuk-aljabar',
    'smp8-bab1-bilangan-berpangkat',
    'smp8-bab6-statistika',
    'smp9-bab1-spldv',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'KMNR',
  title: 'KMNR XI Penyisihan — Kelas 9 (2016)',
  totalMarks: 20,
  instructions:
    'Naskah asli KMNR XI Babak Penyisihan Kelas 9 (2016) terdiri atas 25 soal pilihan ganda. Dari 25 soal tersebut, 20 soal mandiri disertakan pada paket ini (nomor asli 1–4, 6–15, 17, dan 21–25, dengan nomor soal asli dipertahankan) dan 5 soal dilewati (nomor asli 5, 16, 18, 19, dan 20) karena membutuhkan gambar pada naskah soal yang tidak tersedia dalam arsip. Kerjakan seluruh 20 soal tanpa kalkulator; setiap jawaban benar bernilai 1 poin (total 20 poin).',
  source: {
    org: 'Klinik Pendidikan MIPA (KPM) — KMNR',
    file: 'scraped_raw/kmnr-kelas-9-2016.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 20,
      stem: 'Pilihlah satu jawaban yang paling tepat (A, B, C, D, atau E) untuk setiap soal berikut (20 soal dimuat dari 25 soal asli; nomor asli KMNR dipertahankan; masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Nilai dari $12 \\div 4 + 20 \\times 16 = \\cdots$\n\nA. $386$\nB. $368$\nC. $323$\nD. $303$\nE. $223$',
          answer: 'C. $323$',
          principle: 'Urutan operasi hitung campuran (dahulukan pembagian dan perkalian sebelum penjumlahan).',
          solution:
            'Sesuai aturan prioritas operasi aritmetika, kerjakan pembagian dan perkalian terlebih dahulu dari kiri ke kanan sebelum penjumlahan:\n$$12 \\div 4 + 20 \\times 16 = (12 \\div 4) + (20 \\times 16) = 3 + 320 = 323.$$\nJadi, nilainya adalah $323$ (C).',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Nilai dari $\\dfrac{2+0+1+6}{6-1-0-2} = \\cdots$\n\nA. $1$\nB. $\\dfrac{2}{3}$\nC. $2$\nD. $\\dfrac{3}{2}$\nE. $3$',
          answer: 'E. $3$',
          principle: 'Sederhanakan pembilang dan penyebut masing-masing sebelum membagi.',
          solution:
            'Hitung bagian pembilang dan penyebut secara terpisah:\n- Pembilang: $2 + 0 + 1 + 6 = 9$.\n- Penyebut: $6 - 1 - 0 - 2 = 3$.\n\nDengan demikian,\n$$\\frac{2+0+1+6}{6-1-0-2} = \\frac{9}{3} = 3.$$\nJadi, jawabannya adalah $3$ (E).',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Tiga per empat dari bilangan $20\\dfrac{1}{6}$ adalah $\\cdots$\n\nA. $15,2$\nB. $\\dfrac{15}{6}$\nC. $15\\dfrac{1}{8}$\nD. $15\\dfrac{1}{6}$\nE. $15\\dfrac{1}{3}$',
          answer: 'C. $15\\dfrac{1}{8}$',
          principle: 'Ubah pecahan campuran menjadi pecahan biasa sebelum melakukan perkalian pecahan.',
          solution:
            'Ubah pecahan campuran $20\\frac{1}{6}$ menjadi pecahan biasa:\n$$20\\frac{1}{6} = \\frac{20 \\times 6 + 1}{6} = \\frac{121}{6}.$$\nKalikan dengan $\\frac{3}{4}$ lalu sederhanakan faktor persekutuan $3$:\n$$\\frac{3}{4} \\times \\frac{121}{6} = \\frac{1}{4} \\times \\frac{121}{2} = \\frac{121}{8}.$$\nKarena $121 = 15 \\times 8 + 1$, maka\n$$\\frac{121}{8} = 15\\frac{1}{8}.$$\nJadi, hasilnya adalah $15\\frac{1}{8}$ (C).',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Dari bilangan-bilangan berikut ini, yang terbesar adalah $\\cdots$\n\nA. $\\sqrt{125}$\nB. $5\\sqrt{6}$\nC. $5^{\\frac{5}{2}}$\nD. $\\dfrac{125}{2}$\nE. $\\sqrt{225}$',
          answer: 'D. $\\dfrac{125}{2}$',
          principle: 'Untuk bilangan positif $a$ dan $b$, berlaku $a > b \\iff a^2 > b^2$; gunakan kuadrat atau faktorisasi persekutuan untuk membandingkan bentuk akar dan pecahan secara eksak.',
          solution:
            'Karena kelima bilangan bernilai positif, urutan nilainya sama dengan urutan kuadrat masing-masing:\n- A: $(\\sqrt{125})^2 = 125$.\n- B: $(5\\sqrt{6})^2 = 25 \\times 6 = 150$.\n- C: $\\left(5^{\\frac{5}{2}}\\right)^2 = 5^5 = 3.125$.\n- D: $\\left(\\dfrac{125}{2}\\right)^2 = \\dfrac{15.625}{4} = 3.906\\dfrac{1}{4}$.\n- E: $(\\sqrt{225})^2 = 225$.\n\nCara cepat membandingkan C dan D secara eksak: tulis $5^{\\frac{5}{2}} = 5^2\\sqrt{5} = 25\\sqrt{5}$ dan $\\frac{125}{2} = 25 \\cdot \\frac{5}{2}$. Karena $\\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4} = 6\\frac{1}{4} > 5 = (\\sqrt{5})^2$, maka $\\frac{5}{2} > \\sqrt{5}$, sehingga $\\frac{125}{2} > 25\\sqrt{5}$.\n\nDengan demikian, bilangan yang terbesar adalah $\\frac{125}{2}$ (D).',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Angka-angka $3, 5, 7, 6, 8$ akan dibentuk menjadi beberapa bilangan genap lima angka. Angka ratusan pada bilangan genap lima angka terbesar yang dapat dibentuk adalah $\\cdots$\n\nA. $3$\nB. $5$\nC. $6$\nD. $7$\nE. $8$',
          answer: 'B. $5$',
          principle: 'Bilangan genap ditentukan oleh angka satuan genap; untuk memaksimumkan nilai tempat, tempatkan angka terbesar pada nilai tempat tertinggi.',
          solution:
            'Setiap bilangan menggunakan kelima angka $3, 5, 7, 6, 8$ tepat satu kali.\n1. Agar bilangan bernilai genap, angka satuan harus dipilih dari angka genap yang tersedia, yaitu $6$ atau $8$.\n2. Agar bilangan lima angka tersebut sebesar mungkin, tempatkan angka terbesar $8$ pada posisi puluh ribuan dan angka terbesar berikutnya $7$ pada posisi ribuan.\n3. Karena $8$ sudah dipakai di posisi puluh ribuan, satu-satunya angka genap yang tersisa untuk posisi satuan adalah $6$.\n4. Dua angka yang tersisa adalah $5$ dan $3$; agar maksimum, letakkan $5$ di posisi ratusan dan $3$ di posisi puluhan.\n\nBilangan genap terbesar yang terbentuk adalah $87.536$, sehingga angka ratusannya adalah $5$ (B).',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Berapakah nilai terbesar yang akan didapat jika kita mengalikan dua bilangan dari himpunan $\\{-5, 8, 12, 9, -7, -16\\}$?\n\nA. $90$\nB. $102$\nC. $108$\nD. $112$\nE. $192$',
          answer: 'D. $112$',
          principle: 'Hasil kali dua bilangan bertanda sama bernilai positif, baik keduanya positif maupun keduanya negatif.',
          solution:
            'Untuk memperoleh hasil kali terbesar (positif) dari dua bilangan berbeda dalam himpunan $\\{-5, 8, 12, 9, -7, -16\\}$, periksa dua kemungkinan pasangan bertanda sama:\n- Dua bilangan positif terbesar: $12 \\times 9 = 108$.\n- Dua bilangan negatif dengan nilai mutlak terbesar: $(-16) \\times (-7) = 112$.\n\nPerkalian satu bilangan positif dan satu bilangan negatif selalu bernilai negatif sehingga lebih kecil daripada hasil positif. Karena $112 > 108$, nilai terbesar yang dapat diperoleh adalah $112$ (D).',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Jika $-2x + 19 = 5x - 8$, maka nilai $x + \\dfrac{1}{7}$ adalah $\\cdots$\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $4$',
          answer: 'E. $4$',
          principle: 'Selesaikan persamaan linear satu variabel dengan mengumpulkan suku sejenis di kedua ruas.',
          solution:
            'Dari persamaan $-2x + 19 = 5x - 8$, tambahkan $2x$ dan $8$ ke kedua ruas:\n$$19 + 8 = 5x + 2x \\implies 27 = 7x \\implies x = \\frac{27}{7}.$$\nSubstitusikan ke ekspresi yang dicari:\n$$x + \\frac{1}{7} = \\frac{27}{7} + \\frac{1}{7} = \\frac{28}{7} = 4.$$\nJadi, nilainya adalah $4$ (E).',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Arief meninggalkan kantor Republika pada pukul $13.10$ menuju Pasar Minggu untuk sebuah liputan. Arief sampai di lokasi pada pukul $14.15$. Lama Arief menempuh perjalanan adalah $\\cdots$ detik.\n\nA. $3.660$\nB. $3.900$\nC. $4.500$\nD. $5.400$\nE. $7.500$',
          answer: 'B. $3.900$',
          principle: 'Konversi satuan waktu: $1\\text{ jam} = 60\\text{ menit}$ dan $1\\text{ menit} = 60\\text{ detik}$.',
          solution:
            'Selisih waktu dari pukul $13.10$ sampai pukul $14.15$ adalah:\n- Dari $13.10$ ke $14.10$ lamanya $1$ jam $= 60$ menit.\n- Dari $14.10$ ke $14.15$ lamanya $5$ menit.\n\nTotal waktu tempuh adalah $60 + 5 = 65$ menit. Dalam satuan detik:\n$$65 \\times 60 = 3.900\\text{ detik}.$$\nJadi, lama perjalanan adalah $3.900$ detik (B).',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Dalam sebuah stoples terdapat beraneka ragam kue. Tiga per tujuhnya adalah kue kacang. Dua per limanya adalah kue cokelat, dan sisanya ada $6$ kue keju. Berapa total banyaknya kue dalam stoples tersebut?\n\nA. $29$\nB. $32$\nC. $35$\nD. $42$\nE. $70$',
          answer: 'C. $35$',
          principle: 'Jumlah bagian pecahan dari keseluruhan sama dengan $1$; nyatakan bagian sisa sebagai pecahan terhadap total.',
          solution:
            'Bagian kue keju (sisa) terhadap seluruh kue dalam stoples adalah:\n$$1 - \\frac{3}{7} - \\frac{2}{5} = \\frac{35 - 15 - 14}{35} = \\frac{6}{35}.$$\nMisalkan total banyaknya kue adalah $N$. Karena $\\frac{6}{35}$ bagian bernilai $6$ kue, maka\n$$\\frac{6}{35} N = 6 \\implies N = 6 \\times \\frac{35}{6} = 35.$$\nJadi, total kue dalam stoples tersebut adalah $35$ (C).',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Hanan memiliki sebuah kantong berisi $20$ kelereng identik yang diberi nomor $1$ sampai $20$. Jika ia mengambil satu kelereng secara acak, manakah dari peristiwa berikut yang memiliki peluang terbesar?\n\nA. Terpilih bola bernomor ganjil lebih dari $1$\nB. Terpilih bola bernomor kurang dari $10$\nC. Terpilih bola bernomor kelipatan $2$\nD. Terpilih bola bernomor lebih dari $10$\nE. Terpilih bola bernomor bilangan prima',
          answer: 'C atau D (keduanya memiliki peluang terbesar $\\dfrac{10}{20} = \\dfrac{1}{2}$)',
          principle: 'Peluang suatu kejadian pada ruang sampel berpeluang sama adalah $P(A) = \\dfrac{n(A)}{n(S)}$ dengan $n(S) = 20$.',
          solution:
            'Ruang sampel terdiri atas $20$ nomor: $S = \\{1, 2, 3, \\ldots, 20\\}$, sehingga $n(S) = 20$. Hitung banyak anggota dan peluang masing-masing peristiwa:\n- A (ganjil lebih dari $1$): $\\{3, 5, 7, 9, 11, 13, 15, 17, 19\\}$ ada $9$ buah, $P = \\frac{9}{20}$.\n- B (kurang dari $10$): $\\{1, 2, 3, 4, 5, 6, 7, 8, 9\\}$ ada $9$ buah, $P = \\frac{9}{20}$.\n- C (kelipatan $2$): $\\{2, 4, 6, 8, 10, 12, 14, 16, 18, 20\\}$ ada $10$ buah, $P = \\frac{10}{20} = \\frac{1}{2}$.\n- D (lebih dari $10$): $\\{11, 12, 13, 14, 15, 16, 17, 18, 19, 20\\}$ ada $10$ buah, $P = \\frac{10}{20} = \\frac{1}{2}$.\n- E (bilangan prima): $\\{2, 3, 5, 7, 11, 13, 17, 19\\}$ ada $8$ buah, $P = \\frac{8}{20} = \\frac{2}{5}$.\n\nCatatan verifikasi: Baik pilihan C maupun D memiliki banyak titik sampel terbesar yang sama, yaitu $10$ dari $20$ (peluang $\\frac{1}{2}$), sehingga naskah asli soal ini memiliki jawaban ganda (C atau D).',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Bilangan berikut ini: $3, 6, 12, 17, 18, 33, x$ memiliki rata-rata dan median yang sama. Jika $x$ kurang dari $33$, maka nilai $x$ adalah $\\cdots$\n\nA. $16$\nB. $25$\nC. $30$\nD. $31$\nE. $37$',
          answer: 'C. $30$',
          principle: 'Median $7$ data terurut adalah data ke-$4$; tinjau semua kemungkinan selang nilai $x$ untuk menentukan median secara sistematis.',
          solution:
            'Banyak data adalah $7$, sehingga setelah diurutkan dari kecil ke besar, mediannya adalah suku ke-$4$. Jumlah ketujuh data adalah\n$$3 + 6 + 12 + 17 + 18 + 33 + x = 89 + x,$$\nsehingga rata-ratanya $\\overline{x} = \\frac{89 + x}{7}$.\n\nKarena diketahui $x < 33$, bagi analisis menjadi tiga kasus posisi $x$ terhadap urutan $3, 6, 12, 17, 18, 33$:\n- **Kasus 1 ($x \\le 12$):** Tiga data pertama terdiri atas $x, 3, 6$ dalam suatu urutan, sehingga data ke-$4$ (median) adalah $12$. Persamaan $\\frac{89+x}{7} = 12$ memberi $89 + x = 84 \\implies x = -5$ (memenuhi $x \\le 12$, namun tidak ada pada pilihan).\n- **Kasus 2 ($12 < x < 17$):** Data ke-$4$ adalah $x$, sehingga $\\frac{89+x}{7} = x \\implies 6x = 89 \\implies x = \\frac{89}{6} = 14\\frac{5}{6}$ (memenuhi selang, namun tidak ada pada pilihan).\n- **Kasus 3 ($17 \\le x < 33$):** Empat data pertama adalah $3, 6, 12, 17$, sehingga mediannya adalah $17$. Maka\n$$\\frac{89 + x}{7} = 17 \\implies 89 + x = 119 \\implies x = 30.$$\nNilai $x = 30$ memenuhi syarat $17 \\le 30 < 33$ dan sesuai dengan pilihan C.\n\nJadi, nilai $x$ adalah $30$ (C).',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Hanif membeli cokelat berukuran $8 \\times 10$ blok. Jika ia menghabiskan bagian terluar dari cokelat tersebut, berapa bagian yang tersisa?\n\nA. $\\dfrac{1}{2}$\nB. $\\dfrac{1}{3}$\nC. $\\dfrac{2}{5}$\nD. $\\dfrac{3}{5}$\nE. $\\dfrac{4}{5}$',
          answer: 'D. $\\dfrac{3}{5}$',
          principle: 'Menghilangkan satu lapisan bingkai terluar pada persegi panjang berukuran $p \\times l$ menyisakan bagian dalam berukuran $(p - 2) \\times (l - 2)$.',
          solution:
            'Cokelat mula-mula berbentuk kisi berukuran $8 \\times 10$, sehingga jumlah seluruh bloknya adalah $8 \\times 10 = 80$ blok.\n\nBagian terluar terdiri atas $1$ baris paling atas, $1$ baris paling bawah, $1$ kolom paling kiri, dan $1$ kolom paling kanan. Ketika lapisan terluar tersebut dihabiskan, ukuran cokelat yang tersisa berkurang $2$ pada panjang dan $2$ pada lebarnya, menjadi:\n$$(8 - 2) \\times (10 - 2) = 6 \\times 8 = 48\\text{ blok}.$$\nOleh karena itu, bagian cokelat yang tersisa adalah\n$$\\frac{48}{80} = \\frac{48 \\div 16}{80 \\div 16} = \\frac{3}{5}.$$\nJadi, bagian yang tersisa adalah $\\frac{3}{5}$ (D).',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Tempat parkir untuk motor dan mobil dapat menampung $25$ buah kendaraan. Jumlah roda seluruhnya $74$ buah. Jika banyak motor dinyatakan dengan $x$ dan banyak mobil dinyatakan dengan $y$, maka sistem persamaan linear dua variabel dari pernyataan di atas adalah $\\cdots$\n\nA. $\\begin{cases} x+y=74 \\\\ 2x+4y=25 \\end{cases}$\nB. $\\begin{cases} x+y=25 \\\\ x+2y=49 \\end{cases}$\nC. $\\begin{cases} x+y=25 \\\\ x+2y=37 \\end{cases}$\nD. $\\begin{cases} x+2y=25 \\\\ 2x+4y=74 \\end{cases}$\nE. $x=12, y = 13$',
          answer: 'C. $\\begin{cases} x+y=25 \\\\ x+2y=37 \\end{cases}$',
          principle: 'Terjemahkan kendala jumlah kendaraan dan jumlah roda (motor beroda $2$, mobil beroda $4$) ke dalam persamaan linear, lalu sederhanakan.',
          solution:
            'Diketahui $x$ menyatakan banyak motor dan $y$ menyatakan banyak mobil:\n1. Total kendaraan ada $25$ buah: $x + y = 25$.\n2. Setiap motor memiliki $2$ roda dan setiap mobil memiliki $4$ roda, sedangkan total roda ada $74$ buah: $2x + 4y = 74$.\n\nBagi kedua ruas persamaan kedua dengan $2$ untuk menyederhanakannya:\n$$x + 2y = 37.$$\nDengan demikian, sistem persamaan linear dua variabel yang menyatakan permasalahan tersebut adalah\n$$\\begin{cases} x+y=25 \\\\ x+2y=37 \\end{cases}$$\n(pilihan C).',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Bilangan manakah yang harus dihilangkan dari $\\dfrac{1}{12}, \\dfrac{1}{2}, \\dfrac{1}{4}, \\dfrac{1}{6}, \\dfrac{1}{10}$, sehingga jumlah dari bilangan yang tersisa adalah $1$?\n\nA. $\\dfrac{1}{2}$\nB. $\\dfrac{1}{4}$\nC. $\\dfrac{1}{6}$\nD. $\\dfrac{1}{10}$\nE. $\\dfrac{1}{12}$',
          answer: 'D. $\\dfrac{1}{10}$',
          principle: 'Jumlahkan seluruh pecahan dengan menyamakan penyebut ke KPK-nya, lalu tentukan kelebihannya terhadap $1$.',
          solution:
            'KPK dari penyebut $12, 2, 4, 6, 10$ adalah $60$. Jumlah kelima pecahan tersebut adalah:\n$$\\frac{1}{12} + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{6} + \\frac{1}{10} = \\frac{5 + 30 + 15 + 10 + 6}{60} = \\frac{66}{60} = 1 + \\frac{6}{60} = 1 + \\frac{1}{10}.$$\nAgar jumlah empat bilangan yang tersisa tepat sama dengan $1$, bilangan yang harus dihilangkan adalah kelebihannya terhadap $1$, yaitu $\\frac{1}{10}$ (D).',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Salah satu akar dari persamaan $5x^2 - mx - 16 = 0$ adalah $2$. Jumlah akar-akarnya adalah $\\cdots$\n\nA. $-2\\dfrac{2}{5}$\nB. $-\\dfrac{2}{5}$\nC. $\\dfrac{1}{5}$\nD. $\\dfrac{2}{5}$\nE. $2\\dfrac{2}{5}$',
          answer: 'D. $\\dfrac{2}{5}$',
          principle: 'Rumus Vieta pada persamaan kuadrat $ax^2 + bx + c = 0$: $x_1 + x_2 = -\\dfrac{b}{a}$ dan $x_1 x_2 = \\dfrac{c}{a}$.',
          solution:
            '**Cara 1 (substitusi akar lalu Vieta):**\nKarena $x = 2$ merupakan salah satu akar $5x^2 - mx - 16 = 0$, substitusi $x = 2$ memenuhi persamaan:\n$$5(2)^2 - m(2) - 16 = 0 \\implies 20 - 2m - 16 = 0 \\implies 2m = 4 \\implies m = 2.$$\nPersamaan kuadratnya menjadi $5x^2 - 2x - 16 = 0$. Jumlah akar-akarnya adalah\n$$x_1 + x_2 = -\\frac{b}{a} = -\\frac{-2}{5} = \\frac{2}{5}.$$\n\n**Cara 2 (langsung dengan hasil kali akar):**\nDengan Vieta, $x_1 x_2 = \\frac{-16}{5}$. Karena $x_1 = 2$, maka $x_2 = -\\frac{8}{5}$, sehingga\n$$x_1 + x_2 = 2 - \\frac{8}{5} = \\frac{2}{5}.$$\nJadi, jumlah akar-akarnya adalah $\\frac{2}{5}$ (D).',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Sebuah peta mempunyai skala $1 : 500.000$, kemudian difotokopi dengan ukuran $60\\%$. Jika jarak dua kota pada peta hasil fotokopi adalah $3,6$ cm, maka jarak dua kota sebenarnya adalah $\\cdots$ km.\n\nA. $0,3$\nB. $3$\nC. $30$\nD. $300$\nE. $3.000$',
          answer: 'C. $30$',
          principle: 'Fotokopi dengan persentase $60\\%$ memperkecil setiap panjang pada peta menjadi $\\dfrac{60}{100} = \\dfrac{3}{5}$ kali panjang semula.',
          solution:
            'Misalkan jarak kedua kota pada peta awal adalah $d$ cm. Karena peta diperkecil menjadi $60\\% = \\frac{3}{5}$ dari ukuran semula, berlaku:\n$$\\frac{3}{5} d = 3,6 = \\frac{18}{5} \\implies d = \\frac{18}{5} \\times \\frac{5}{3} = 6\\text{ cm}.$$\nDengan skala peta awal $1 : 500.000$, jarak sebenarnya adalah:\n$$6\\text{ cm} \\times 500.000 = 3.000.000\\text{ cm}.$$\nKarena $1\\text{ km} = 100.000\\text{ cm}$, konversikan ke kilometer:\n$$\\frac{3.000.000}{100.000}\\text{ km} = 30\\text{ km}.$$\nJadi, jarak dua kota sebenarnya adalah $30$ km (C).',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Jika $x + \\dfrac{1}{x} = 4$, maka nilai dari $\\dfrac{13}{x^3 + \\dfrac{1}{x^3}}$ adalah $\\cdots$\n\nA. $\\dfrac{1}{3}$\nB. $\\dfrac{1}{4}$\nC. $\\dfrac{5}{6}$\nD. $\\dfrac{1}{9}$\nE. $\\dfrac{5}{9}$',
          answer: 'B. $\\dfrac{1}{4}$',
          principle: 'Gunakan identitas kubik $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$ dengan $a = x$ dan $b = \\dfrac{1}{x}$ sehingga $ab = 1$.',
          solution:
            'Pangkat tigakan kedua ruas persamaan $x + \\frac{1}{x} = 4$:\n$$\\left(x + \\frac{1}{x}\\right)^3 = 4^3 \\implies x^3 + \\frac{1}{x^3} + 3\\left(x \\cdot \\frac{1}{x}\\right)\\left(x + \\frac{1}{x}\\right) = 64.$$\nSubstitusikan $x \\cdot \\frac{1}{x} = 1$ dan $x + \\frac{1}{x} = 4$:\n$$x^3 + \\frac{1}{x^3} + 3(4) = 64 \\implies x^3 + \\frac{1}{x^3} = 64 - 12 = 52.$$\nDengan demikian,\n$$\\frac{13}{x^3 + \\frac{1}{x^3}} = \\frac{13}{52} = \\frac{1}{4}.$$\nJadi, nilainya adalah $\\frac{1}{4}$ (B).',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Pada sebuah koordinat Kartesius, diketahui titik $A(-1,1)$, $B(2,3)$, $C(5,0)$, $D(0,-2)$. Berapa luas segi empat $ABCD$?\n\nA. $10$\nB. $12$\nC. $16$\nD. $25$\nE. $32$',
          answer: 'C. $16$',
          principle: 'Kurangkan luas persegi panjang pembatas (bounding box) dengan luas empat segitiga siku-siku di sudut-sudut luar segi empat.',
          solution:
            'Titik-titik sudut $A(-1,1)$, $B(2,3)$, $C(5,0)$, dan $D(0,-2)$ berurutan searah jarum jam dan terletak di dalam persegi panjang pembatas dengan $x \\in [-1, 5]$ dan $y \\in [-2, 3]$.\n\nUkuran persegi panjang pembatas tersebut adalah lebar $5 - (-1) = 6$ dan tinggi $3 - (-2) = 5$, sehingga luasnya:\n$$L_{\\text{persegi panjang}} = 6 \\times 5 = 30.$$\nDi luar segi empat $ABCD$ tetapi di dalam persegi panjang pembatas terdapat $4$ segitiga siku-siku di keempat sudut:\n- Sudut kiri atas $(-1, 3)$ dengan $A(-1,1)$ dan $B(2,3)$: alas $3$, tinggi $2$, luas $= \\frac{1}{2}(3)(2) = 3$.\n- Sudut kanan atas $(5, 3)$ dengan $B(2,3)$ dan $C(5,0)$: alas $3$, tinggi $3$, luas $= \\frac{1}{2}(3)(3) = \\frac{9}{2}$.\n- Sudut kanan bawah $(5, -2)$ dengan $C(5,0)$ dan $D(0,-2)$: alas $5$, tinggi $2$, luas $= \\frac{1}{2}(5)(2) = 5$.\n- Sudut kiri bawah $(-1, -2)$ dengan $D(0,-2)$ dan $A(-1,1)$: alas $1$, tinggi $3$, luas $= \\frac{1}{2}(1)(3) = \\frac{3}{2}$.\n\nJumlah luas keempat segitiga siku-siku adalah $3 + \\frac{9}{2} + 5 + \\frac{3}{2} = 8 + 6 = 14$.\n\nOleh karena itu, luas segi empat $ABCD$ adalah:\n$$L_{ABCD} = 30 - 14 = 16.$$\nJadi, luasnya adalah $16$ (C).',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Berikut ini yang bukan merupakan solusi dari persamaan $(x+1)^{x^2-5x+6} = 1$ adalah $\\cdots$\n\nA. $-2$\nB. $0$\nC. $1$\nD. $2$\nE. $3$',
          answer: 'C. $1$',
          principle: 'Persamaan eksponen berbentuk $f(x)^{g(x)} = 1$ dipenuhi jika: (1) $f(x) = 1$, (2) $g(x) = 0$ dengan $f(x) \\neq 0$, atau (3) $f(x) = -1$ dengan $g(x)$ bilangan bulat genap.',
          solution:
            'Tinjau ketiga kemungkinan agar $(x+1)^{x^2-5x+6} = 1$:\n1. **Basis sama dengan $1$:** $x + 1 = 1 \\implies x = 0$. Uji: $(0+1)^6 = 1^6 = 1$ (solusi).\n2. **Pangkat sama dengan $0$ dan basis tak nol:** $x^2 - 5x + 6 = (x - 2)(x - 3) = 0 \\implies x = 2$ atau $x = 3$.\n   - Untuk $x = 2$: basis $2 + 1 = 3 \\neq 0$, sehingga $3^0 = 1$ (solusi).\n   - Untuk $x = 3$: basis $3 + 1 = 4 \\neq 0$, sehingga $4^0 = 1$ (solusi).\n3. **Basis sama dengan $-1$ dan pangkat bilangan bulat genap:** $x + 1 = -1 \\implies x = -2$. Uji pangkat: $(-2)^2 - 5(-2) + 6 = 4 + 10 + 6 = 20$ (genap), sehingga $(-1)^{20} = 1$ (solusi).\n\nHimpunan penyelesaiannya adalah $\\{-2, 0, 2, 3\\}$. Untuk $x = 1$, nilainya adalah $(1+1)^{1-5+6} = 2^2 = 4 \\neq 1$.\n\nJadi, yang bukan merupakan solusi adalah $1$ (C).',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Diketahui tiga suku barisan aritmetika pertama, yaitu $p, 5, q$ dan tiga suku barisan geometri pertama, yaitu $p, 2, q$. Nilai dari $\\dfrac{8}{p} + \\dfrac{8}{q}$ adalah $\\cdots$\n\nA. $20$\nB. $24$\nC. $25$\nD. $48$\nE. $50$',
          answer: 'A. $20$',
          principle: 'Untuk tiga suku berurutan $a, b, c$: pada barisan aritmetika berlaku $a + c = 2b$, dan pada barisan geometri berlaku $ac = b^2$.',
          solution:
            'Dari sifat suku tengah kedua barisan:\n1. Karena $p, 5, q$ adalah barisan aritmetika, berlaku $5 - p = q - 5$, sehingga:\n$$p + q = 2(5) = 10.$$\n2. Karena $p, 2, q$ adalah barisan geometri, berlaku $\\frac{2}{p} = \\frac{q}{2}$, sehingga:\n$$pq = 2^2 = 4.$$\n(Nilai real $p, q \\neq 0$ ada karena $t^2 - 10t + 4 = 0$ memiliki diskriminan $100 - 16 = 84 > 0$.)\n\nSamakan penyebut ekspresi yang dicari:\n$$\\frac{8}{p} + \\frac{8}{q} = \\frac{8(p + q)}{pq} = \\frac{8 \\times 10}{4} = 20.$$\nJadi, nilainya adalah $20$ (A).',
          rubric: OK
        }
      ]
    }
  ]
};
