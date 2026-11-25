/**
 * Paket Soal Terstruktur: OSN-K Matematika SD 2023 (19 soal pilihan ganda terpilih dari 30 soal asli)
 * Sumber: scraped_raw/osnk-matematika-sd-2023.md
 * Soal 11, 13, 15, 16, 17, 19, 20, 22, 27, dan 29 tidak dimuat karena gambar/tabel tidak tersedia pada arsip;
 * soal 12 tidak dimuat karena nilai maksimum eksak dari ekspresi pada naskah (47) tidak terdapat pada pilihan jawaban.
 * Pada soal 10, kesalahan OCR "15" dan "110" diperbaiki menjadi pecahan 1/5 dan 1/10 sesuai naskah asli dan opsi jawaban.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-mat-sd-2023',
  slug: 'osnk-matematika-sd-2023',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'OSN-K Matematika SD 2023',
  relatedChapterIds: [
    'sd4-bab3-pola-gambar-bilangan',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan',
    'sd5-bab4-keliling-bangun-datar',
    'sd5-bab5-luas-daerah-bangun-datar',
    'sd5-bab8-data',
    'sd6-bab2-rasio',
    'sd6-bab3-kubus-balok',
    'sd6-bab4-peluang'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SD 2023',
  totalMarks: 19,
  instructions:
    'Kerjakan seluruh 19 soal pilihan ganda terpilih (dari 30 soal asli OSN-K Matematika SD 2023). Setiap jawaban benar bernilai 1 poin. Sebanyak 11 soal tidak dimuat: nomor 11, 13, 15, 16, 17, 19, 20, 22, 27, dan 29 karena memerlukan gambar atau tabel yang tidak tersedia pada arsip, serta nomor 12 karena nilai maksimum eksak dari ekspresi pada naskah (47) tidak tercantum pada pilihan jawaban. Penomoran label soal mengikuti naskah asli, soal nomor 2 dipertahankan dalam bahasa Inggris sesuai aslinya, dan kesalahan ketik OCR pecahan pada soal nomor 10 telah diperbaiki menjadi 1/5 dan 1/10.',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-matematika-sd-2023.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 19,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (19 soal terpilih dari 30 soal asli, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Misalkan $a$ adalah bilangan asli. Faktor Persekutuan Terbesar dari $3$ dan $a$ adalah $3$. Jika Kelipatan Persekutuan Terkecil dari $15$ dan $a$ adalah $105$, maka nilai $a$ adalah ....\n\nA. $7$\nB. $15$\nC. $21$\nD. $45$',
          answer: 'C. $21$',
          principle: 'Faktorisasi prima untuk menentukan syarat keterbagian dari FPB dan KPK.',
          solution:
            'Karena $\\text{FPB}(3, a) = 3$, maka $a$ harus habis dibagi $3$ ($3$ merupakan faktor dari $a$).\nSelanjutnya, faktorkan $15$ dan $105$ ke dalam faktor prima:\n$$15 = 3 \\times 5, \\qquad 105 = 3 \\times 5 \\times 7.$$\nKarena $\\text{KPK}(15, a) = 105$, bilangan $a$ merupakan faktor dari $105$ dan wajib memuat faktor prima $7$ (karena $15$ tidak memiliki faktor $7$).\nDengan demikian, $a$ harus habis dibagi $3 \\times 7 = 21$ sekaligus membagi habis $105$. Nilai $a$ yang memenuhi adalah $21$ atau $105$. Di antara pilihan jawaban yang tersedia, nilai $a$ adalah $21$.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'The result of $125\\% \\times \\dfrac{2}{5} \\div 0{,}25 \\times 1\\frac{1}{4} \\div 2{,}5$ is ....\n\nA. $0{,}1$\nB. $0{,}64$\nC. $1$\nD. $10$',
          answer: 'C. $1$',
          principle: 'Mengubah persen, desimal, dan pecahan campuran menjadi pecahan biasa lalu menghitung berurutan dari kiri ke kanan.',
          solution:
            'Ubah setiap bilangan menjadi pecahan biasa paling sederhana:\n- $125\\% = \\frac{125}{100} = \\frac{5}{4}$\n- $0{,}25 = \\frac{25}{100} = \\frac{1}{4}$\n- $1\\frac{1}{4} = \\frac{5}{4}$\n- $2{,}5 = \\frac{25}{10} = \\frac{5}{2}$\n\nKarena perkalian dan pembagian setingkat, kerjakan berurutan dari kiri ke kanan (pembagian pecahan sama dengan perkalian dengan kebalikannya):\n$$\\frac{5}{4} \\times \\frac{2}{5} \\div \\frac{1}{4} \\times \\frac{5}{4} \\div \\frac{5}{2} = \\frac{5}{4} \\times \\frac{2}{5} \\times 4 \\times \\frac{5}{4} \\times \\frac{2}{5}.$$\nHitung bertahap:\n$$\\left(\\frac{5}{4} \\times \\frac{2}{5}\\right) \\times 4 \\times \\left(\\frac{5}{4} \\times \\frac{2}{5}\\right) = \\frac{1}{2} \\times 4 \\times \\frac{1}{2} = 2 \\times \\frac{1}{2} = 1.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Bila $m$ dan $n$ adalah dua bilangan asli berbeda, maka salah satu hasil operasi $5 \\times m + 8 \\times n$ adalah ....\n\nA. $17$\nB. $19$\nC. $39$\nD. $47$',
          answer: 'D. $47$',
          principle: 'Menguji nilai $5m + 8n$ untuk bilangan asli $m \\neq n$ dengan menyaring kelipatan $5$ setelah dikurangi $8n$.',
          solution:
            'Karena $m$ dan $n$ bilangan asli ($\\ge 1$) dan $m \\neq n$, nilai $5m = \\text{hasil} - 8n$ harus merupakan kelipatan $5$ yang positif.\nPeriksa satu per satu pilihan jawaban:\n- Untuk $17$: $17 - 8(1) = 9$ dan $17 - 8(2) = 1$, tidak ada yang habis dibagi $5$.\n- Untuk $19$: $19 - 8(1) = 11$ dan $19 - 8(2) = 3$, tidak ada yang habis dibagi $5$.\n- Untuk $39$: satu-satunya $n \\ge 1$ dengan $39 - 8n > 0$ dan habis dibagi $5$ adalah $n = 3$ (karena $39 - 24 = 15 = 5 \\times 3$). Namun hal ini menghasilkan $m = 3 = n$, melanggar syarat $m$ dan $n$ berbeda.\n- Untuk $47$: coba $n = 4$, diperoleh $47 - 8(4) = 47 - 32 = 15 = 5 \\times 3$, sehingga $m = 3$ dan $n = 4$. Keduanya bilangan asli yang berbeda.\n\nJadi salah satu hasil operasi yang mungkin adalah $47$.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Diketahui $q$ merupakan bilangan asli. Banyaknya $q$ yang memenuhi pertidaksamaan $\\dfrac{21}{135} < \\dfrac{q}{8} < \\dfrac{27}{24}$ adalah ....\n\nA. $7$\nB. $8$\nC. $9$\nD. $10$',
          answer: 'A. $7$',
          principle: 'Menyederhanakan pecahan lalu mengalikan ketiga ruas pertidaksamaan dengan $8$ untuk membatasi nilai bilangan asli $q$.',
          solution:
            'Sederhanakan pecahan di ruas kiri dan kanan terlebih dahulu:\n$$\\frac{21}{135} = \\frac{21 \\div 3}{135 \\div 3} = \\frac{7}{45}, \\qquad \\frac{27}{24} = \\frac{27 \\div 3}{24 \\div 3} = \\frac{9}{8}.$$\nPertidaksamaan menjadi:\n$$\\frac{7}{45} < \\frac{q}{8} < \\frac{9}{8}.$$\nKalikan ketiga ruas dengan $8$:\n$$\\frac{56}{45} < q < 9 \\implies 1\\frac{11}{45} < q < 9.$$\nKarena $q$ bilangan asli dan $1 < 1\\frac{11}{45} < 2$, nilai $q$ yang memenuhi adalah $2, 3, 4, 5, 6, 7,$ dan $8$. Banyaknya nilai $q$ ada $8 - 2 + 1 = 7$.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Diketahui barisan bilangan $a$, $b$, $a+b$, $a+2b$, $2a+3b$, $3a+5b$, $\\dots$\nBila bilangan ke-$2$ dan ke-$9$ pada barisan tersebut berturut-turut $74\\frac{2}{3}$ dan $2023$, maka bilangan ke-$5$ pada barisan tersebut adalah ....\n\nA. $246$\nB. $249$\nC. $264$\nD. $294$',
          answer: 'D. $294$',
          principle: 'Pola barisan Fibonacci: setiap suku setelah suku kedua merupakan jumlah dua suku tepat di depannya.',
          solution:
            'Perhatikan bahwa setiap suku mulai suku ke-$3$ adalah jumlah dua suku sebelumnya:\n- Suku ke-$1$: $a$\n- Suku ke-$2$: $b$\n- Suku ke-$3$: $a + b$\n- Suku ke-$4$: $a + 2b$\n- Suku ke-$5$: $2a + 3b$\n- Suku ke-$6$: $3a + 5b$\n- Suku ke-$7$: $(2a + 3b) + (3a + 5b) = 5a + 8b$\n- Suku ke-$8$: $(3a + 5b) + (5a + 8b) = 8a + 13b$\n- Suku ke-$9$: $(5a + 8b) + (8a + 13b) = 13a + 21b$.\n\nDiketahui $b = 74\\frac{2}{3} = \\frac{224}{3}$ dan suku ke-$9$ adalah $2023$, sehingga:\n$$13a + 21 \\times \\frac{224}{3} = 2023 \\implies 13a + 7 \\times 224 = 2023.$$\nHitung $7 \\times 224 = 1568$, maka:\n$$13a = 2023 - 1568 = 455 \\implies a = \\frac{455}{13} = 35.$$\nJadi bilangan ke-$5$ adalah:\n$$2a + 3b = 2(35) + 3 \\times \\frac{224}{3} = 70 + 224 = 294.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Jika $m$ merupakan bilangan asli yang bersisa $3$ ketika dibagi $4$, bersisa $4$ ketika dibagi $9$, dan bersisa $1$ ketika dibagi $3$, maka nilai $m - 6$ adalah ....\n\nA. $25$\nB. $29$\nC. $31$\nD. $34$',
          answer: 'A. $25$',
          principle: 'Mendaftar bilangan yang memenuhi sisa pembagian terbesar terlebih dahulu ($\\text{mod } 9$) lalu menyaringnya terhadap syarat pembagi lain.',
          solution:
            'Bilangan asli $m$ yang bersisa $4$ ketika dibagi $9$ berbentuk $9k + 4$, yaitu:\n$$4,\\ 13,\\ 22,\\ 31,\\ 40,\\ 49,\\ 58,\\ 67,\\ \\dots$$\nPerhatikan bahwa setiap bilangan tersebut otomatis bersisa $1$ ketika dibagi $3$ (karena $9k + 4 = 3(3k + 1) + 1$).\nSelanjutnya periksa sisa pembagian oleh $4$:\n- $4 \\div 4$ bersisa $0$\n- $13 \\div 4$ bersisa $1$\n- $22 \\div 4$ bersisa $2$\n- $31 \\div 4 = 7$ bersisa $3$ (memenuhi!)\n\nBilangan asli terkecil yang memenuhi semua syarat adalah $m = 31$ (solusi berikutnya berjarak kelipatan $\\text{KPK}(4, 9) = 36$, yaitu $67, 103, \\dots$). Dengan $m = 31$, diperoleh:\n$$m - 6 = 31 - 6 = 25.$$',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Perhatikan operasi pengurangan berikut:\n$$\\begin{array}{cccl} 9 & 4 & 3 & \\\\ & \\square & \\bigtriangleup & - \\\\ \\hline 8 & \\bigtriangleup & 4 & \\end{array}$$\nNilai $\\square + \\bigtriangleup = \\cdots$\n\nA. $11$\nB. $12$\nC. $13$\nD. $14$',
          answer: 'C. $13$',
          principle: 'Pengurangan bersusun dengan peminjaman nilai tempat dari kolom satuan ke puluhan dan ratusan.',
          solution:
            'Setiap simbol $\\square$ dan $\\bigtriangleup$ mewakili satu angka dari $0$ sampai $9$. Perhatikan pengurangan bersusun dari kanan ke kiri:\n1. Kolom satuan: $3 - \\bigtriangleup$ menghasilkan angka satuan $4$. Karena $3 < 4$, kita meminjam $1$ puluhan dari angka $4$ sehingga menjadi:\n   $$13 - \\bigtriangleup = 4 \\implies \\bigtriangleup = 9.$$\n2. Kolom puluhan: angka $4$ sudah dipinjam $1$ sehingga tersisa $3$. Lalu $3 - \\square$ menghasilkan angka $\\bigtriangleup = 9$. Karena $3 < 9$, kita meminjam $1$ ratusan dari angka $9$ sehingga menjadi:\n   $$13 - \\square = 9 \\implies \\square = 4.$$\n3. Pemeriksaan kolom ratusan: angka $9$ dipinjam $1$ menjadi $8$, sesuai dengan angka ratusan pada hasil $894$. Benar bahwa $943 - 49 = 894$.\n\nJadi $\\square + \\bigtriangleup = 4 + 9 = 13$.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Butet berolahraga selama $1\\frac{1}{4}$ jam dengan berjalan kaki selama $45$ menit dengan kecepatan rata-rata $4\\ \\text{km/jam}$ kemudian dilanjutkan dengan berlari selama $30$ menit dengan kecepatan rata-rata $10\\ \\text{km/jam}$. Jarak yang ditempuh Butet selama berolahraga adalah .... km.\n\nA. $5$\nB. $6$\nC. $7$\nD. $8$',
          answer: 'D. $8$',
          principle: 'Jarak tempuh sama dengan kecepatan dikali waktu tempuh (dengan menyamakan satuan waktu ke jam).',
          solution:
            'Ubah satuan waktu tiap tahap ke dalam jam ($1\\ \\text{jam} = 60\\ \\text{menit}$):\n- Berjalan kaki selama $45\\ \\text{menit} = \\frac{45}{60}\\ \\text{jam} = \\frac{3}{4}\\ \\text{jam}$.\n  Jarak berjalan $= 4\\ \\text{km/jam} \\times \\frac{3}{4}\\ \\text{jam} = 3\\ \\text{km}$.\n- Berlari selama $30\\ \\text{menit} = \\frac{30}{60}\\ \\text{jam} = \\frac{1}{2}\\ \\text{jam}$.\n  Jarak berlari $= 10\\ \\text{km/jam} \\times \\frac{1}{2}\\ \\text{jam} = 5\\ \\text{km}$.\n\n(Total waktu $45 + 30 = 75\\ \\text{menit} = 1\\frac{1}{4}\\ \\text{jam}$, sesuai keterangan soal.)\nTotal jarak yang ditempuh Butet adalah $3 + 5 = 8\\ \\text{km}$.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Sebuah sanggar tari memiliki $40$ anggota yang dibagi menjadi $2$ kelas. Seluruh anggota akan tampil pada suatu acara dan membutuhkan kostum. Harga sewa kostum untuk kelas $A$ adalah $\\text{Rp}60.000{,}00$/orang dan untuk kelas $B$ adalah $\\text{Rp}70.000{,}00$/orang. Jika total biaya sewa seluruh kostum adalah $\\text{Rp}2.580.000{,}00$ maka total biaya sewa kostum untuk seluruh anggota kelas $A$ adalah ....\n\nA. $\\text{Rp}1.080.000{,}00$\nB. $\\text{Rp}1.260.000{,}00$\nC. $\\text{Rp}1.320.000{,}00$\nD. $\\text{Rp}1.380.000{,}00$',
          answer: 'C. $\\text{Rp}1.320.000{,}00$',
          principle: 'Menyelesaikan sistem dua persamaan linear dengan substitusi atau metode pengandaian.',
          solution:
            'Misalkan banyak anggota kelas $A$ adalah $a$ dan banyak anggota kelas $B$ adalah $b$.\nDiketahui:\n$$a + b = 40 \\implies b = 40 - a.$$\nTotal biaya sewa (dalam ribuan rupiah) memenuhi:\n$$60a + 70b = 2580 \\implies 6a + 7b = 258.$$\nSubstitusikan $b = 40 - a$:\n$$6a + 7(40 - a) = 258 \\implies 280 - a = 258 \\implies a = 22.$$\nArtinya terdapat $22$ anggota kelas $A$ (dan $18$ anggota kelas $B$). Jadi total biaya sewa kostum untuk seluruh anggota kelas $A$ adalah:\n$$22 \\times \\text{Rp}60.000{,}00 = \\text{Rp}1.320.000{,}00.$$',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Bagiyo, Gito, dan Rio merupakan tiga bersaudara dan memiliki jumlah tabungan yang sama. Bagiyo memberi Gito sebesar $\\frac{1}{5}$ dari semua tabungannya, kemudian Gito memberi Rio $50\\%$ dari semua tabungan yang dimiliki saat ini. Selanjutnya jika Rio memberikan sebesar $\\frac{1}{10}$ dari semua tabungannya kepada Bagiyo, maka tabungan Bagiyo akan berkurang $\\text{Rp}500.000{,}00$ dari tabungan awal yang dimiliki. Jumlah tabungan yang dimiliki oleh Gito saat ini adalah ....\n\nA. $\\text{Rp}2.500.000{,}00$\nB. $\\text{Rp}7.500.000{,}00$\nC. $\\text{Rp}12.500.000{,}00$\nD. $\\text{Rp}18.000.000{,}00$',
          answer: 'B. $\\text{Rp}7.500.000{,}00$',
          principle: 'Memisalkan tabungan awal masing-masing sebagai $x$ dan menelusuri perubahan pecahan tabungan langkah demi langkah.',
          solution:
            'Misalkan tabungan awal Bagiyo, Gito, dan Rio masing-masing adalah $x$.\n1. Bagiyo memberi Gito $\\frac{1}{5}x$:\n   - Tabungan Bagiyo $= x - \\frac{1}{5}x = \\frac{4}{5}x$.\n   - Tabungan Gito $= x + \\frac{1}{5}x = \\frac{6}{5}x$.\n   - Tabungan Rio $= x$.\n2. Gito memberi Rio $50\\% = \\frac{1}{2}$ dari tabungannya saat itu ($\\frac{1}{2} \\times \\frac{6}{5}x = \\frac{3}{5}x$):\n   - Tabungan Gito saat ini $= \\frac{6}{5}x - \\frac{3}{5}x = \\frac{3}{5}x$.\n   - Tabungan Rio $= x + \\frac{3}{5}x = \\frac{8}{5}x$.\n3. Jika Rio memberi Bagiyo $\\frac{1}{10}$ dari tabungannya ($\\frac{1}{10} \\times \\frac{8}{5}x = \\frac{4}{25}x$):\n   - Tabungan Bagiyo menjadi $\\frac{4}{5}x + \\frac{4}{25}x = \\frac{20}{25}x + \\frac{4}{25}x = \\frac{24}{25}x$.\n\nKarena tabungan Bagiyo berkurang $\\text{Rp}500.000{,}00$ dari tabungan awal $x$, maka:\n$$x - \\frac{24}{25}x = \\frac{1}{25}x = 500.000 \\implies x = 25 \\times 500.000 = 12.500.000.$$\nJadi jumlah tabungan Gito saat ini adalah:\n$$\\frac{3}{5}x = \\frac{3}{5} \\times \\text{Rp}12.500.000{,}00 = \\text{Rp}7.500.000{,}00.$$',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Perbandingan panjang, lebar, dan tinggi suatu balok adalah $1 : 5 : 2$. Jika luas permukaan balok tersebut $9.826\\ \\text{cm}^{2}$, maka volume balok tersebut adalah .... $\\text{cm}^{3}$.\n\nA. $49.013$\nB. $49.130$\nC. $49.301$\nD. $49.310$',
          answer: 'B. $49.130$',
          principle: 'Menyatakan panjang, lebar, dan tinggi balok sebagai kelipatan faktor pembanding $k$ pada rumus luas permukaan dan volume balok.',
          solution:
            'Misalkan panjang $p = k$, lebar $l = 5k$, dan tinggi $t = 2k$ (dalam $\\text{cm}$).\nLuas permukaan balok adalah:\n$$L = 2(pl + pt + lt) = 2(k \\cdot 5k + k \\cdot 2k + 5k \\cdot 2k) = 2(5k^2 + 2k^2 + 10k^2) = 34k^2.$$\nDiketahui $L = 9.826\\ \\text{cm}^2$, sehingga:\n$$34k^2 = 9.826 \\implies k^2 = \\frac{9.826}{34} = 289 = 17^2 \\implies k = 17\\ \\text{cm}.$$\nMaka volume balok tersebut adalah:\n$$V = p \\times l \\times t = k \\times 5k \\times 2k = 10k^3 = 10 \\times 17^3 = 10 \\times 4.913 = 49.130\\ \\text{cm}^3.$$',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Dua buah bangun yang berbentuk persegi dan segitiga mempunyai keliling yang sama. Sisi-sisi segitiga tersebut mempunyai panjang $5\\ \\text{cm}$, $8\\ \\text{cm}$ dan $5\\ \\text{cm}$. Jumlah luas kedua bangun tersebut adalah ....\n\nA. $32\\ \\text{cm}^{2}$\nB. $32{,}25\\ \\text{cm}^{2}$\nC. $32{,}5\\ \\text{cm}^{2}$\nD. $32{,}75\\ \\text{cm}^{2}$',
          answer: 'B. $32{,}25\\ \\text{cm}^{2}$',
          principle: 'Mencari sisi persegi dari keliling yang sama, serta tinggi segitiga sama kaki dengan menarik garis tinggi ke alasnya (tripel Pythagoras $3$-$4$-$5$).',
          solution:
            'Hitung keliling segitiga:\n$$K = 5 + 8 + 5 = 18\\ \\text{cm}.$$\nKarena keliling persegi juga $18\\ \\text{cm}$, panjang sisi persegi adalah:\n$$s = \\frac{18}{4} = \\frac{9}{2}\\ \\text{cm} = 4{,}5\\ \\text{cm},$$\nsehingga luas persegi adalah:\n$$L_{\\text{persegi}} = \\left(\\frac{9}{2}\\right)^2 = \\frac{81}{4} = 20{,}25\\ \\text{cm}^2.$$\nSegitiga dengan sisi $5\\ \\text{cm}, 5\\ \\text{cm}, 8\\ \\text{cm}$ merupakan segitiga sama kaki dengan alas $8\\ \\text{cm}$. Garis tinggi dari puncak ke alas membagi alas menjadi dua bagian sama panjang, masing-masing $4\\ \\text{cm}$, membentuk segitiga siku-siku dengan sisi miring $5\\ \\text{cm}$. Berdasarkan tripel Pythagoras $(3, 4, 5)$, tinggi segitiga adalah:\n$$t = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = \\sqrt{9} = 3\\ \\text{cm}.$$\nLuas segitiga adalah:\n$$L_{\\text{segitiga}} = \\frac{1}{2} \\times 8 \\times 3 = 12\\ \\text{cm}^2.$$\nJadi jumlah luas kedua bangun adalah $20{,}25 + 12 = 32{,}25\\ \\text{cm}^2$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Pada suatu permainan flying fox, seorang pemain harus menaiki tangga $AB$ kemudian meluncur pada kabel baja $BC$ dan menuruni tangga $CD$. Tinggi $AB$ dan $CD$ masing-masing $3$ meter. David menaiki tangga $AB$ dengan kecepatan $2$ meter/menit, meluncur pada $BC$ dengan kecepatan $15$ km/jam dan menuruni tangga $CD$ dengan kecepatan $3$ meter/menit. Jika waktu yang diperlukan David untuk bermain flying fox adalah $5$ menit (dari $A$ ke $D$), maka panjang kabel baja flying fox adalah .... meter.\n\nA. $550$\nB. $575$\nC. $600$\nD. $625$',
          answer: 'D. $625$',
          principle: 'Menghitung sisa waktu meluncur setelah dikurangi waktu naik dan turun tangga, lalu menyamakan satuan kecepatan ke meter/menit.',
          solution:
            'Tangga $AB$ dan $CD$ masing-masing memiliki tinggi (panjang lintasan vertikal) $3\\ \\text{m}$. Hitung waktu pada masing-masing tangga:\n- Waktu naik tangga $AB$: $t_{AB} = \\frac{3\\ \\text{m}}{2\\ \\text{m/menit}} = 1{,}5\\ \\text{menit}$.\n- Waktu turun tangga $CD$: $t_{CD} = \\frac{3\\ \\text{m}}{3\\ \\text{m/menit}} = 1\\ \\text{menit}$.\n\nKarena total waktu perjalanan dari $A$ ke $D$ adalah $5\\ \\text{menit}$, waktu meluncur pada kabel baja $BC$ adalah:\n$$t_{BC} = 5 - 1{,}5 - 1 = 2{,}5\\ \\text{menit}.$$\nUbah kecepatan meluncur ke satuan meter/menit:\n$$15\\ \\text{km/jam} = \\frac{15.000\\ \\text{m}}{60\\ \\text{menit}} = 250\\ \\text{m/menit}.$$\nJadi panjang kabel baja $BC$ adalah:\n$$250\\ \\text{m/menit} \\times 2{,}5\\ \\text{menit} = 625\\ \\text{m}.$$',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Benny menyalin data dari hasil survey yang dilakukannya. Karena kurang hati-hati kertas hasil survey terkena air sehingga terdapat sejumlah data yang tidak terbaca. Data yang tidak terbaca diberi simbol dengan huruf. Data yang dituliskan Benny adalah sebagai berikut: $96$, $A$, $64$, $78$, $78$, $90$, $60$, $60$, $70$, $80$, dan $B$. Jika median data tersebut adalah $76$ dan rata-rata data tersebut adalah $75$, maka data yang tidak terbaca adalah ....\n\nA. $76\\ \\text{dan}\\ 75$\nB. $76\\ \\text{dan}\\ 73$\nC. $77\\ \\text{dan}\\ 75$\nD. $78\\ \\text{dan}\\ 74$',
          answer: 'B. $76\\ \\text{dan}\\ 73$',
          principle: 'Menggunakan jumlah seluruh data dari rata-rata serta posisi nilai tengah (median) pada data terurut berjumlah ganjil.',
          solution:
            'Banyak data seluruhnya ada $11$ buah ($9$ bilangan yang terbaca dan $2$ huruf $A, B$).\nKarena rata-ratanya $75$, jumlah seluruh $11$ data adalah:\n$$11 \\times 75 = 825.$$\nJumlah $9$ bilangan yang terbaca adalah:\n$$60 + 60 + 64 + 70 + 78 + 78 + 80 + 90 + 96 = 676.$$\nMaka jumlah kedua data yang hilang adalah:\n$$A + B = 825 - 676 = 149.$$\nSelanjutnya perhatikan urutan $9$ bilangan yang terbaca dari terkecil ke terbesar:\n$$60,\\ 60,\\ 64,\\ 70,\\ 78,\\ 78,\\ 80,\\ 90,\\ 96.$$\nTerdapat $4$ data yang bernilai $\\le 70$ dan $5$ data yang bernilai $\\ge 78$. Dari $11$ data terurut, median terletak pada urutan ke-$6$. Karena mediannya $76$ (berada di antara $70$ dan $78$), salah satu dari $A$ atau $B$ wajib bernilai $76$ (menempati urutan ke-$6$) dan yang lainnya bernilai $\\le 76$ (agar ada $5$ data di sebelah kiri $76$).\n\nJadi salah satu data adalah $76$, dan data lainnya adalah $149 - 76 = 73$ (memenuhi $73 \\le 76$). Kedua data yang tidak terbaca adalah $76$ dan $73$.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Ati, Bani, dan Cici menabung di Bank $M$ dan $N$. Perbandingan tabungan Ati, Bani, dan Cici di Bank $M$ adalah $2 : 3 : 5$, sementara di Bank $N$ adalah $5 : 4 : 3$. Jika tabungan Ati di Bank $M$ sebesar $\\text{Rp}2.400.000{,}00$ dan rata-rata tabungan mereka di Bank $N$ adalah dua kali rata-rata tabungan mereka di Bank $M$, maka tabungan Ati di Bank $N$ sebesar ....\n\nA. $\\text{Rp}8.400.000{,}00$\nB. $\\text{Rp}10.000.000{,}00$\nC. $\\text{Rp}10.600.000{,}00$\nD. $\\text{Rp}12.000.000{,}00$',
          answer: 'B. $\\text{Rp}10.000.000{,}00$',
          principle: 'Menghubungkan rasio bagian dengan jumlah keseluruhan tabungan dan sifat rata-rata untuk banyak orang yang sama.',
          solution:
            'Di Bank $M$, perbandingan tabungan Ati : Bani : Cici $= 2 : 3 : 5$, sehingga jumlah bagian perbandingannya adalah $2 + 3 + 5 = 10$ bagian.\nKarena $2$ bagian milik Ati bernilai $\\text{Rp}2.400.000{,}00$, maka $1$ bagian bernilai $\\text{Rp}1.200.000{,}00$, sehingga total tabungan ketiganya di Bank $M$ adalah:\n$$10 \\times \\text{Rp}1.200.000{,}00 = \\text{Rp}12.000.000{,}00.$$\nKarena jumlah orang di kedua bank sama ($3$ orang) dan rata-rata di Bank $N$ dua kali rata-rata di Bank $M$, maka total tabungan mereka di Bank $N$ juga dua kali total tabungan di Bank $M$:\n$$2 \\times \\text{Rp}12.000.000{,}00 = \\text{Rp}24.000.000{,}00.$$\nDi Bank $N$, perbandingan tabungan Ati : Bani : Cici $= 5 : 4 : 3$ (jumlah bagian $= 5 + 4 + 3 = 12$). Jadi tabungan Ati di Bank $N$ adalah:\n$$\\frac{5}{12} \\times \\text{Rp}24.000.000{,}00 = \\text{Rp}10.000.000{,}00.$$',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Felly berada di toko alat-alat kantor hendak membeli $3$ buah buku dan $2$ buah bolpoin. Di etalase toko terdapat $5$ merek buku dan $7$ merek bolpoin, serta tidak ada buku dan bolpoin yang bermerek sama. Berapa banyak pilihan yang dimiliki Felly, jika buku dan bolpoin yang dibeli berasal dari merek yang berbeda?\n\nA. $2.520$\nB. $840$\nC. $420$\nD. $210$',
          answer: 'D. $210$',
          principle: 'Aturan perkalian dan kombinasi: memilih $k$ merek berbeda tanpa memperhatikan urutan.',
          solution:
            'Karena urutan pembelian tidak memengaruhi pilihan (yang penting adalah kombinasi merek yang dibeli berbeda):\n- Banyak cara memilih $3$ merek buku berbeda dari $5$ merek yang tersedia adalah:\n  $$\\binom{5}{3} = \\frac{5 \\times 4}{2 \\times 1} = 10\\ \\text{cara}.$$\n- Banyak cara memilih $2$ merek bolpoin berbeda dari $7$ merek yang tersedia adalah:\n  $$\\binom{7}{2} = \\frac{7 \\times 6}{2 \\times 1} = 21\\ \\text{cara}.$$\n\nKarena tidak ada merek buku dan bolpoin yang sama, kedua pemilihan tersebut bebas digabungkan menggunakan aturan perkalian:\n$$10 \\times 21 = 210\\ \\text{pilihan}.$$',
          rubric: OK
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Banyak cara menyusun tiga bilangan asli dengan susunan genap-ganjil-genap yang hasil kalinya merupakan kelipatan $8$ dan kurang dari $30$ adalah ....\n\nA. $9$\nB. $10$\nC. $11$\nD. $12$',
          answer: 'C. $11$',
          principle: 'Memecah kasus menurut nilai kelipatan $8$ yang kurang dari $30$ ($8, 16, 24$) dan mendaftar pasangan faktor berurutan.',
          solution:
            'Misalkan ketiga bilangan asli secara berurutan adalah $(a, b, c)$ dengan $a$ genap, $b$ ganjil, dan $c$ genap (bilangan boleh berulang karena tidak disyaratkan berbeda). Tulis $a = 2x$ dan $c = 2y$ untuk bilangan asli $x, y \\ge 1$, sehingga hasil kalinya adalah $a \\times b \\times c = 4xyb$.\nKelipatan $8$ yang kurang dari $30$ dan positif hanyalah $8, 16,$ dan $24$. Periksa tiap kasus:\n1. Hasil kali $= 8 \\implies 4xyb = 8 \\implies xyb = 2$.\n   Karena $b$ ganjil, haruslah $b = 1$ dan $xy = 2$, sehingga $(x, y) \\in \\{(1, 2), (2, 1)\\}$.\n   Susunan $(a, b, c)$: $(2, 1, 4)$ dan $(4, 1, 2)$ ($2$ cara).\n2. Hasil kali $= 16 \\implies 4xyb = 16 \\implies xyb = 4$.\n   Karena $b$ ganjil, haruslah $b = 1$ dan $xy = 4$, sehingga $(x, y) \\in \\{(1, 4), (2, 2), (4, 1)\\}$.\n   Susunan $(a, b, c)$: $(2, 1, 8), (4, 1, 4), (8, 1, 2)$ ($3$ cara).\n3. Hasil kali $= 24 \\implies 4xyb = 24 \\implies xyb = 6$.\n   Karena $b$ ganjil pembagi $6$, maka $b = 1$ atau $b = 3$:\n   - Jika $b = 1$: $xy = 6$, pasangan $(x, y) \\in \\{(1, 6), (2, 3), (3, 2), (6, 1)\\}$ menghasilkan $(2, 1, 12), (4, 1, 6), (6, 1, 4), (12, 1, 2)$ ($4$ cara).\n   - Jika $b = 3$: $xy = 2$, pasangan $(x, y) \\in \\{(1, 2), (2, 1)\\}$ menghasilkan $(2, 3, 4), (4, 3, 2)$ ($2$ cara).\n\nTotal banyak cara menyusun adalah $2 + 3 + 4 + 2 = 11$ cara.',
          rubric: OK
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Banyak bilangan bulat antara $100$ sampai $400$ yang memuat angka $2$ adalah .... bilangan.\n\nA. $128$\nB. $136$\nC. $138$\nD. $140$',
          answer: 'C. $138$',
          principle: 'Pencacahan berdasarkan digit ratusan dan aturan komplemen (menghitung bilangan yang tidak memuat angka $2$).',
          solution:
            'Perhatikan bahwa $100$ dan $400$ tidak memuat angka $2$, sehingga pencacahan dibagi menurut angka ratusannya:\n1. Rentang $100$–$199$ (ratusan $= 1$, seluruhnya $100$ bilangan):\n   Banyak bilangan yang tidak memuat angka $2$ memiliki $9$ pilihan angka puluhan ($0, 1, 3, \\dots, 9$) dan $9$ pilihan angka satuan ($0, 1, 3, \\dots, 9$), yaitu $9 \\times 9 = 81$ bilangan.\n   Jadi bilangan yang memuat angka $2$ ada $100 - 81 = 19$ bilangan.\n2. Rentang $200$–$299$ (ratusan $= 2$, seluruhnya $100$ bilangan):\n   Semua $100$ bilangan pada rentang ini pasti memuat angka $2$ di posisi ratusan.\n3. Rentang $300$–$399$ (ratusan $= 3$, seluruhnya $100$ bilangan):\n   Sama seperti rentang $100$–$199$, banyak bilangan yang memuat angka $2$ ada $100 - 81 = 19$ bilangan.\n4. Bilangan $400$ tidak memuat angka $2$ ($0$ bilangan).\n\nTotal bilangan bulat yang memuat angka $2$ adalah $19 + 100 + 19 = 138$ bilangan.',
          rubric: OK
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Agnes memiliki $5$ buah persegi panjang yang masing-masing berukuran $2\\ \\text{cm} \\times 3\\ \\text{cm}$. Pak guru meminta Agnes untuk membentuk bangun datar baru dengan cara menempelkan sisi-sisi kelima persegi panjang tersebut sehingga sisi yang sama panjang tepat berimpit. Banyak bangun datar dengan keliling berbeda yang dapat dibuat Agnes ada .... bangun.\n\nA. $3$\nB. $4$\nC. $5$\nD. $6$',
          answer: 'D. $6$',
          principle: 'Setiap tempelan sisi yang berimpit mengurangi total keliling sebesar dua kali panjang sisi tempelan ($4\\ \\text{cm}$ atau $6\\ \\text{cm}$).',
          solution:
            'Keliling $1$ persegi panjang berukuran $2\\ \\text{cm} \\times 3\\ \\text{cm}$ adalah $2(2 + 3) = 10\\ \\text{cm}$, sehingga jumlah keliling $5$ persegi panjang terpisah adalah $5 \\times 10 = 50\\ \\text{cm}$.\nMisalkan terdapat $a$ tempelan sisi sepanjang $2\\ \\text{cm}$ dan $b$ tempelan sisi sepanjang $3\\ \\text{cm}$. Setiap tempelan menghilangkan $2$ sisi dari keliling luar, sehingga keliling bangun baru adalah:\n$$K = 50 - 4a - 6b.$$\nUntuk menghubungkan $5$ persegi panjang diperlukan paling sedikit $4$ tempelan ($a + b \\ge 4$). Karena $3$ persegi panjang tidak dapat saling menempel penuh membentuk segitiga, dan $5$ persegi panjang kongruen tidak dapat membentuk graf tertutup dengan $6$ tempelan sisi penuh berimpit tanpa saling tumpang tindih atau menempel sebagian, maka banyaknya tempelan yang mungkin hanyalah $4$ atau $5$:\n- Kasus $a + b = 4$ (tanpa putaran/siklus): seluruh kemungkinan $(a, b)$ adalah $(4,0), (3,1), (2,2), (1,3), (0,4)$, menghasilkan keliling:\n  - $(4,0)$: $50 - 16 = 34\\ \\text{cm}$ ($5$ buah sejajar berjajar sisi $2\\ \\text{cm}$, ukuran $15 \\times 2$)\n  - $(3,1)$: $50 - 18 = 32\\ \\text{cm}$ ($4$ sejajar pada sisi $2\\ \\text{cm}$, ditambah $1$ pada sisi $3\\ \\text{cm}$)\n  - $(2,2)$: $50 - 20 = 30\\ \\text{cm}$ ($3$ sejajar pada sisi $2\\ \\text{cm}$, ditambah $2$ masing-masing pada sisi $3\\ \\text{cm}$ di dua ujung berbeda)\n  - $(1,3)$: $50 - 22 = 28\\ \\text{cm}$ ($4$ bertumpuk pada sisi $3\\ \\text{cm}$, ditambah $1$ pada sisi $2\\ \\text{cm}$)\n  - $(0,4)$: $50 - 24 = 26\\ \\text{cm}$ ($5$ buah bertumpuk pada sisi $3\\ \\text{cm}$, ukuran $3 \\times 10$).\n- Kasus $a + b = 5$ (memuat satu blok $2 \\times 2$ dari $4$ persegi panjang): sebuah blok $2 \\times 2$ ($6\\ \\text{cm} \\times 4\\ \\text{cm}$) memiliki tepat $2$ tempelan sisi $2\\ \\text{cm}$ dan $2$ tempelan sisi $3\\ \\text{cm}$ ($a=2, b=2$). Menempelkan persegi panjang ke-$5$ pada salah satu sisi luarnya menghasilkan:\n  - $(3,2)$: $50 - 24 = 26\\ \\text{cm}$ (tempel pada sisi $2\\ \\text{cm}$)\n  - $(2,3)$: $50 - 26 = 24\\ \\text{cm}$ (tempel pada sisi $3\\ \\text{cm}$, keliling blok $20 + 2 + 2 = 24\\ \\text{cm}$).\n\nSemua nilai keliling berbeda yang dapat dibuat adalah $24, 26, 28, 30, 32,$ dan $34\\ \\text{cm}$, yaitu sebanyak $6$ bangun.',
          rubric: OK
        }
      ]
    }
  ]
};
