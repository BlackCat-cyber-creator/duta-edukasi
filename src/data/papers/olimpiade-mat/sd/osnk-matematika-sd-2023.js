/**
 * Paket Soal Terstruktur: OSN-K Matematika SD 2023 (30 soal pilihan ganda lengkap)
 * Sumber: scraped_raw/osnk-matematika-sd-2023.md & naskah PDF resmi OSN-K Matematika SD 2023.
 * Catatan rekonstruksi naskah:
 * - Soal nomor 2 dan 15 dipertahankan dalam bahasa Inggris sesuai naskah aslinya.
 * - Pada soal 10, kesalahan OCR "15" dan "110" diperbaiki menjadi pecahan 1/5 dan 1/10 sesuai naskah asli dan opsi jawaban.
 * - Pada soal 15, naskah asli tertulis "area of region A is 2,5 cm^2, then the area of region B is ...";
 *   berdasarkan gambar berpetak, B adalah persegi satuan (1 satuan) dan A seluas 9,5 satuan sehingga
 *   9,5 x 2,5 = 23,75 cm^2 sesuai opsi B. Label A dan B pada soal dinormalisasi agar konsisten dengan gambar dan opsi.
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
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 30 soal pilihan ganda OSN-K Matematika SD 2023 berikut. Setiap jawaban benar bernilai 1 poin (total 30 poin). Penomoran label soal mengikuti naskah asli, soal nomor 2 dan 15 dipertahankan dalam bahasa Inggris sesuai aslinya, kesalahan ketik OCR pecahan pada soal nomor 10 telah diperbaiki menjadi 1/5 dan 1/10, serta kesalahan ketik label daerah A dan B yang tertukar pada soal nomor 15 telah dinormalisasi agar sesuai dengan gambar dan pilihan jawaban.',
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
      marks: 30,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (30 soal pilihan ganda, masing-masing bernilai 1 poin).',
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
          label: '11',
          marks: 1,
          prompt:
            'Perhatikan gambar berikut:\n\nSegitiga, persegi dan jajar genjang mewakili bilangan berbeda $1, 2, 3, 4, 5, 6, 7, 8$ atau $9$. Segitiga di ruas kanan dan kiri merupakan bilangan yang sama. Lingkaran mewakili operasi hitung: tambah, kurang, kali atau bagi. Kedua lingkaran boleh dipasang operasi hitung yang berbeda. Banyak bilangan yang mungkin dipasang pada segitiga adalah ....\n\nA. $6$\nB. $7$\nC. $8$\nD. $9$',
          figures: [
            {
              src: '/papers/osnk-mat-sd-2023/fig-11.webp',
              alt: 'Persamaan bergambar terdiri atas segitiga terbalik, lingkaran operasi, persegi, lingkaran operasi, dan jajar genjang yang sama dengan segitiga terbalik.',
              caption: 'Persamaan operasi hitung dengan simbol segitiga, persegi, dan jajar genjang.'
            }
          ],
          answer: 'B. $7$',
          principle: 'Memisalkan segitiga $= a$, persegi $= b$, dan jajar genjang $= c$ ($a, b, c \\in \\{1, \\dots, 9\\}$ berbeda) lalu memeriksa kemungkinan operasi hitung yang mengembalikan nilai ke $a$.',
          solution:
            'Misalkan segitiga $= a$, persegi $= b$, dan jajar genjang $= c$, dengan $a, b, c \\in \\{1, 2, \\dots, 9\\}$ saling berbeda. Persamaan berbentuk $a\\ \\text{op}_1\\ b\\ \\text{op}_2\\ c = a$.\nPerhatikan tujuh nilai $a$ yang dapat dibentuk:\n- $a = 1$: $1 \\times 3 - 2 = 1$\n- $a = 2$: $2 \\times 3 - 4 = 2$\n- $a = 3$: $3 \\times 4 - 9 = 3$\n- $a = 4$: $4 \\times 3 - 8 = 4$\n- $a = 6$: $6 \\div 2 + 3 = 6$\n- $a = 8$: $8 \\div 2 + 4 = 8$\n- $a = 9$: $9 \\div 3 + 6 = 9$\n\nSekarang periksa apakah $a = 5$ dan $a = 7$ mungkin:\n- Karena $b \\neq c$, bentuk $a + (b - c)$, $a - (b - c)$, $a \\times b \\div c$, dan $a \\div b \\times c$ tidak mungkin sama dengan $a$ (sebab $b - c \\neq 0$ dan $b \\div c \\neq 1$). Bentuk $a + b \\times c$, $a + b \\div c$, $a - b \\times c$, dan $a - b \\div c$ juga tidak mungkin sama dengan $a$ karena $b \\times c > 0$ dan $b \\div c > 0$.\n- Jadi operasi harus berbentuk $a \\times b - c = a \\iff a(b - 1) = c$, atau $a \\div b + c = a \\iff c = a - \\frac{a}{b}$, atau $(a + b) \\div c = a \\iff b = a(c - 1)$, atau $(a - b) \\times c = a$.\n- Untuk $a = 5$: faktor pembagi $5$ hanyalah $1$ dan $5$. Jika $b = 1$, $a \\div 1 + c = 5 + c > 5$; jika $b = 5$, melanggar $a \\neq b$. Untuk $5(b - 1) = c$ dengan $b \\ge 2$: nilai terkecil $c = 5(1) = 5 = a$ (tidak boleh sama) dan berikutnya $5(2) = 10 > 9$. Begitu pula $(5 - b) \\times c = 5$ memaksa $c = 1$ dan $5 - b = 5 \\implies b = 0$ (tidak valid), atau $c = 5 = a$. Maka $a = 5$ mustahil.\n- Untuk $a = 7$: karena $7$ bilangan prima dan $7(b - 1) = c$ untuk $b \\ge 2$ paling kecil memberi $c = 7 = a$, maka $a = 7$ juga mustahil.\n\nDengan demikian, bilangan yang mungkin dipasang pada segitiga adalah $1, 2, 3, 4, 6, 8,$ dan $9$, yaitu sebanyak $7$ bilangan.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Diberikan empat bilangan bulat positif yang berbeda $A$, $B$, $C$ dan $D$ sehingga $A + B + C + D = 15$. Hasil operasi dari $A \\times C + B \\times D - A : B$ sebesar mungkin adalah .... (pembulatan sampai dua angka di belakang koma)\n\nA. $32{,}83$\nB. $33{,}88$\nC. $36{,}86$\nD. $37{,}17$',
          answer: 'C. $36{,}86$',
          principle: 'Memaksimumkan jumlah dua hasil kali $AC + BD$ dari empat bilangan bulat positif berbeda berjumlah $15$, lalu meminimumkan suku pengurang $A : B$.',
          solution:
            'Karena $A, B, C, D$ empat bilangan bulat positif yang berbeda dengan $A + B + C + D = 15$, dua bilangan terbesar paling banyak adalah $7$ dan $5$ (jika ada $8$, sisa $3$ bilangan minimal $1 + 2 + 4 = 7$ sehingga $8 + 7 = 15$ memberi $8 \\times 4 + 2 \\times 1 = 34$, lebih kecil daripada $7 \\times 5 + 2 \\times 1 = 37$; jika ada $9$, sisa $3$ bilangan minimal $1 + 2 + 3 = 6$ sehingga $9 \\times 3 + 2 \\times 1 = 29$).\nUntuk memaksimumkan $A \\times C + B \\times D - \\frac{A}{B}$, pasangkan dua bilangan terbesar $\\{5, 7\\}$ menjadi $B \\times D = 35$ dan dua bilangan terkecil $\\{1, 2\\}$ menjadi $A \\times C = 2$, sehingga jumlah hasil kalinya mencapai maksimum $35 + 2 = 37$.\nAgar pengurang $\\frac{A}{B}$ sekecil mungkin, pilih $A = 1$ (yang terkecil dari $\\{1, 2\\}$) dan $B = 7$ (yang terbesar dari $\\{5, 7\\}$), dengan $C = 2$ dan $D = 5$:\n$$A \\times C + B \\times D - \\frac{A}{B} = 1 \\times 2 + 7 \\times 5 - \\frac{1}{7} = 37 - \\frac{1}{7} = 36\\frac{6}{7} \\approx 36{,}8571\\dots$$\nDibulatkan sampai dua angka di belakang koma, hasilnya adalah $36{,}86$.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Perhatikan gambar di bawah ini:\n\nGambar di atas terdiri dari satu lingkaran besar dan empat buah setengah lingkaran kecil yang identik. Jika jari-jari lingkaran besar adalah diameter lingkaran kecil, maka perbandingan luas daerah yang diarsir dan yang tidak diarsir pada gambar di atas adalah ....\n\nA. $1 : 1$\nB. $2 : 3$\nC. $3 : 4$\nD. $4 : 5$',
          figures: [
            {
              src: '/papers/osnk-mat-sd-2023/fig-13.svg',
              alt: 'Satu lingkaran besar yang di dalamnya terdapat empat setengah lingkaran kecil identik yang diarsir membentuk pola kincir.',
              caption: 'Lingkaran besar berisi empat setengah lingkaran kecil identik yang diarsir.'
            }
          ],
          answer: 'A. $1 : 1$',
          principle: 'Menghitung luas total empat setengah lingkaran kecil yang saling lepas terhadap luas lingkaran besar dengan $R = 2r$.',
          solution:
            'Misalkan jari-jari lingkaran kecil adalah $r$, sehingga diameter lingkaran kecil adalah $2r$. Karena jari-jari lingkaran besar sama dengan diameter lingkaran kecil, maka jari-jari lingkaran besar adalah $R = 2r$.\nLuas lingkaran besar adalah:\n$$L_{\\text{besar}} = \\pi R^2 = \\pi (2r)^2 = 4\\pi r^2.$$\nKeempat setengah lingkaran kecil berada pada empat kuadran berbeda dan tidak saling tumpang tindih. Empat buah setengah lingkaran identik setara dengan $2$ lingkaran kecil utuh, sehingga luas daerah yang diarsir adalah:\n$$L_{\\text{arsir}} = 4 \\times \\frac{1}{2}\\pi r^2 = 2\\pi r^2.$$\nMaka luas daerah yang tidak diarsir adalah:\n$$L_{\\text{tidak diarsir}} = 4\\pi r^2 - 2\\pi r^2 = 2\\pi r^2.$$\nJadi perbandingan luas daerah yang diarsir dan yang tidak diarsir adalah:\n$$2\\pi r^2 : 2\\pi r^2 = 1 : 1.$$',
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
          label: '15',
          marks: 1,
          prompt:
            'Look at the following picture.\n\nIf the area of region B is $2{,}5\\ \\text{cm}^{2}$, then the area of region A is .... $\\text{cm}^{2}$.\n\nA. $20$\nB. $23{,}75$\nC. $25$\nD. $26{,}25$',
          figures: [
            {
              src: '/papers/osnk-mat-sd-2023/fig-15.webp',
              alt: 'Bidang berpetak berisi poligon segilima A dan sebuah persegi kecil B yang masing-masing titik sudutnya berada pada titik kisi.',
              caption: 'Bangun A dan persegi B pada bidang berpetak.'
            }
          ],
          answer: 'B. $23{,}75$',
          principle: 'Menghitung luas bangun pada kisi persegi satuan dengan persegi pembungkus lalu mengalikan dengan nilai luas per satuan petak.',
          solution:
            'Perhatikan garis kisi utama pada gambar. Persegi B berukuran $1 \\times 1$ petak utama sehingga luas B adalah $1$ satuan petak $= 2{,}5\\ \\text{cm}^2$.\nUntuk menentukan luas poligon A dalam satuan petak utama, tempatkan titik paling kiri di $(0, 2)$. Maka kelima titik sudut poligon A berturut-turut berada di $(0, 2)$, $(3, 0)$, $(5, 4)$, $(3, 3)$, dan $(2, 4)$.\nBangun A termuat dalam persegi panjang pembungkus berukuran $5 \\times 4$ (dari $x = 0$ sampai $x = 5$, dan $y = 0$ sampai $y = 4$) dengan luas $5 \\times 4 = 20$ satuan petak. Daerah di luar A di dalam persegi panjang tersebut terdiri atas empat segitiga siku-siku dan sebuah trapesium:\n- Kiri bawah: segitiga siku-siku dengan alas $3$ dan tinggi $2$, luas $= \\frac{1}{2} \\times 3 \\times 2 = 3$.\n- Kiri atas: segitiga siku-siku dengan alas $2$ dan tinggi $2$, luas $= \\frac{1}{2} \\times 2 \\times 2 = 2$.\n- Cekungan atas (antara $(2,4)$, $(3,3)$, $(5,4)$): segitiga dengan alas $3$ (dari $x = 2$ ke $5$ pada $y = 4$) dan tinggi $1$, luas $= \\frac{1}{2} \\times 3 \\times 1 = 1{,}5$.\n- Kanan bawah: segitiga siku-siku dengan alas $2$ (dari $x = 3$ ke $5$) dan tinggi $4$, luas $= \\frac{1}{2} \\times 2 \\times 4 = 4$.\n\nMaka luas poligon A dalam satuan petak adalah:\n$$20 - (3 + 2 + 1{,}5 + 4) = 20 - 10{,}5 = 9{,}5\\ \\text{satuan petak}.$$\nJadi luas daerah A adalah:\n$$9{,}5 \\times 2{,}5\\ \\text{cm}^2 = 23{,}75\\ \\text{cm}^2.$$\n(Catatan: pada naskah cetak asli label A dan B pada kalimat soal sempat tertukar.)',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Berikut merupakan jaring-jaring suatu kubus.\n\nJika jaring-jaring tersebut dibentuk menjadi kubus, maka sisi $Y$ akan berhadapan dengan sisi ....\n\nA. $U$\nB. $V$\nC. $X$\nD. $Z$',
          figures: [
            {
              src: '/papers/osnk-mat-sd-2023/fig-16.webp',
              alt: 'Jaring-jaring kubus berbentuk enam persegi berlabel huruf W, V, U mendatar, X dan Z di bawah V, serta Y di atas U.',
              caption: 'Jaring-jaring kubus dengan enam sisi berlabel U, V, W, X, Y, dan Z.'
            }
          ],
          answer: 'C. $X$',
          principle: 'Menentukan pasangan sisi kubus yang berhadapan dengan menetapkan satu sisi sebagai alas dan melipat sisi-sisi lain tegak lurus.',
          solution:
            'Tetapkan persegi $V$ sebagai sisi **alas** kubus, lalu lipat sisi-sisi di sekelilingnya ke atas:\n- $W$ terhubung di sisi kiri $V$, sehingga menjadi sisi **kiri**.\n- $U$ terhubung di sisi kanan $V$, sehingga menjadi sisi **kanan**.\n- $X$ terhubung di sisi depan (bawah pada gambar) $V$, sehingga menjadi sisi **depan**.\n- $Z$ terhubung di sisi bawah $X$, sehingga setelah $X$ dilipat tegak, $Z$ terlipat menjadi sisi **atas** (tutup), berhadapan dengan $V$.\n- $Y$ terhubung di sisi atas $U$, sehingga setelah $U$ dilipat tegak menjadi sisi kanan, $Y$ terlipat ke arah belakang menjadi sisi **belakang**.\n\nDengan demikian, pasangan sisi yang saling berhadapan adalah $(W, U)$, $(V, Z)$, dan $(X, Y)$. Jadi sisi $Y$ berhadapan dengan sisi $X$.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Gambar berikut adalah $2$ kerucut. Kerucut besar dengan diameter alas $AC$ dan tinggi $OB$. Kerucut kecil dengan diameter alas $CF$ dan tinggi $DE$. $ABC$ dan $CEF$ keduanya segitiga sama sisi dengan $AB : CE = 3 : 2$. Perbandingan volume kerucut kecil dan kerucut besar adalah ....\n\nA. $2 : 7$\nB. $4 : 9$\nC. $5 : 12$\nD. $8 : 27$',
          figures: [
            {
              src: '/papers/osnk-mat-sd-2023/fig-17.webp',
              alt: 'Dua kerucut terbalik bersarang dengan diameter alas kerucut besar AC dan tinggi OB serta diameter alas kerucut kecil CF dan tinggi DE.',
              caption: 'Kerucut besar berdiameter AC dan kerucut kecil berdiameter CF.'
            }
          ],
          answer: 'D. $8 : 27$',
          principle: 'Dua kerucut dengan penampang segitiga sama sisi bersifat sebangun, sehingga perbandingan volumenya sama dengan pangkat tiga perbandingan panjang rusuk bersesuaian.',
          solution:
            'Karena $\\triangle ABC$ dan $\\triangle CEF$ keduanya segitiga sama sisi, kedua kerucut tersebut sebangun. Diketahui $AB : CE = 3 : 2$, sehingga perbandingan panjang unsur-unsur kerucut kecil terhadap kerucut besar adalah $2 : 3$:\n- Perbandingan jari-jari alas: $\\frac{r_{\\text{kecil}}}{r_{\\text{besar}}} = \\frac{CF/2}{AC/2} = \\frac{CE}{AB} = \\frac{2}{3}$.\n- Perbandingan tinggi kerucut: $\\frac{t_{\\text{kecil}}}{t_{\\text{besar}}} = \\frac{DE}{OB} = \\frac{CE}{AB} = \\frac{2}{3}$.\n\nGunakan rumus volume kerucut $V = \\frac{1}{3}\\pi r^2 t$:\n$$\\frac{V_{\\text{kecil}}}{V_{\\text{besar}}} = \\frac{\\frac{1}{3}\\pi r_{\\text{kecil}}^2 t_{\\text{kecil}}}{\\frac{1}{3}\\pi r_{\\text{besar}}^2 t_{\\text{besar}}} = \\left(\\frac{r_{\\text{kecil}}}{r_{\\text{besar}}}\\right)^2 \\times \\frac{t_{\\text{kecil}}}{t_{\\text{besar}}} = \\left(\\frac{2}{3}\\right)^2 \\times \\frac{2}{3} = \\frac{8}{27}.$$\nJadi perbandingan volume kerucut kecil dan kerucut besar adalah $8 : 27$.',
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
          label: '19',
          marks: 1,
          prompt:
            'Berikut adalah data penjualan selama triwulan ke-satu (TW 1), ke-dua (TW 2), dan ke-tiga (TW 3) pada tahun $2022$ dari suatu pabrik makanan ringan dalam satuan ton.\n\nJika penjualan pada TW 3 merupakan $20\\%$ dari total penjualan dalam setahun, maka penjualan makanan ringan tersebut pada TW 4 adalah .... ton.\n\nA. $4{,}5$\nB. $5{,}5$\nC. $6{,}5$\nD. $7{,}5$',
          figures: [
            {
              src: '/papers/osnk-mat-sd-2023/fig-19.webp',
              alt: 'Diagram batang penjualan triwulan ke-satu, ke-dua, dan ke-tiga dengan nilai masing-masing 4,5, 5, dan 4 ton.',
              caption: 'Diagram batang data penjualan TW 1, TW 2, dan TW 3 tahun 2022.'
            }
          ],
          answer: 'C. $6{,}5$',
          principle: 'Menentukan total penjualan setahun dari persentase satu triwulan lalu mengurangkan jumlah penjualan tiga triwulan yang diketahui.',
          solution:
            'Dari diagram batang diperoleh data penjualan:\n- TW 1 $= 4{,}5\\ \\text{ton}$\n- TW 2 $= 5\\ \\text{ton}$\n- TW 3 $= 4\\ \\text{ton}$\n\nDiketahui penjualan pada TW 3 ($4\\ \\text{ton}$) merupakan $20\\%$ dari total penjualan dalam setahun ($1$ tahun $= 4$ triwulan):\n$$20\\% \\times \\text{Total} = 4 \\implies \\text{Total} = \\frac{4}{0{,}2} = 20\\ \\text{ton}.$$\nDengan demikian, penjualan pada TW 4 adalah:\n$$\\text{TW 4} = 20 - (4{,}5 + 5 + 4) = 20 - 13{,}5 = 6{,}5\\ \\text{ton}.$$',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Data banyaknya kepala keluarga (KK) dan pemilih kepala Desa Taruma Indah pada $4$ RW disajikan sebagai berikut:\n\nRata-rata banyak pemilih di setiap RW yang bukan kepala keluarga (KK) adalah .... orang.\n\nA. $80$\nB. $85$\nC. $88$\nD. $92$',
          figures: [
            {
              src: '/papers/osnk-mat-sd-2023/fig-20.svg',
              alt: 'Tabel berisi empat baris RW beserta kolom banyaknya kepala keluarga dan banyaknya pemilih di Desa Taruma Indah.',
              caption: 'Data banyaknya KK dan pemilih di 4 RW Desa Taruma Indah.'
            }
          ],
          answer: 'C. $88$',
          principle: 'Menghitung selisih banyak pemilih dan banyak kepala keluarga pada setiap RW, lalu mencari rata-ratanya.',
          solution:
            'Banyak pemilih yang bukan kepala keluarga (KK) di masing-masing RW diperoleh dari selisih banyak pemilih dengan banyak KK:\n- RW 01: $210 - 95 = 115$ orang\n- RW 02: $200 - 153 = 47$ orang\n- RW 03: $280 - 120 = 160$ orang\n- RW 04: $165 - 135 = 30$ orang\n\nJumlah pemilih yang bukan KK di keempat RW adalah:\n$$115 + 47 + 160 + 30 = 352\\ \\text{orang}.$$\nJadi rata-rata banyak pemilih yang bukan KK di setiap RW adalah:\n$$\\frac{352}{4} = 88\\ \\text{orang}.$$',
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
          label: '22',
          marks: 1,
          prompt:
            'Hasil penilaian tes matematika yang dilakukan sebanyak dua kali di suatu kelas disajikan sebagai berikut:\n\nPada baris A kolom C tertera angka $1$, artinya banyaknya siswa yang memperoleh nilai A pada tes 1 dan nilai C pada tes 2 adalah $1$ orang. Persentase siswa yang nilainya sama untuk $2$ kali tes adalah ....\n\nA. $30\\%$\nB. $40\\%$\nC. $50\\%$\nD. $60\\%$',
          figures: [
            {
              src: '/papers/osnk-mat-sd-2023/fig-22.webp',
              alt: 'Tabel silang lima kali lima yang menunjukkan sebaran nilai A sampai E siswa pada Tes 1 dan Tes 2.',
              caption: 'Tabel silang hasil Tes 1 dan Tes 2 matematika.'
            }
          ],
          answer: 'B. $40\\%$',
          principle: 'Menjumlahkan seluruh frekuensi pada tabel sebagai total siswa dan menjumlahkan elemen diagonal utama sebagai siswa bernilai sama pada kedua tes.',
          solution:
            'Hitung jumlah seluruh siswa di kelas dengan menjumlahkan seluruh angka pada tabel:\n- Baris A: $3 + 1 + 1 + 0 + 0 = 5$\n- Baris B: $1 + 4 + 3 + 0 + 0 = 8$\n- Baris C: $2 + 3 + 3 + 2 + 0 = 10$\n- Baris D: $0 + 0 + 1 + 2 + 1 = 4$\n- Baris E: $0 + 0 + 2 + 1 + 0 = 3$\n\nTotal siswa $= 5 + 8 + 10 + 4 + 3 = 30$ orang.\nSiswa yang nilainya sama untuk $2$ kali tes berada pada diagonal utama tabel (AA, BB, CC, DD, EE):\n$$3 + 4 + 3 + 2 + 0 = 12\\ \\text{orang}.$$\nJadi persentase siswa yang nilainya sama adalah:\n$$\\frac{12}{30} \\times 100\\% = 40\\%.$$',
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
          label: '27',
          marks: 1,
          prompt:
            'Andika ditugaskan untuk melengkapi huruf-huruf pada petak $3 \\times 4$ berikut.\n\nDalam satu baris, satu kolom, dan satu diagonal yang sama tidak boleh diletakkan huruf yang sama. Minimum banyaknya huruf yang berbeda yang dapat diletakkan pada petak tersebut adalah .... huruf.\n\nA. $4$\nB. $5$\nC. $6$\nD. $7$',
          figures: [
            {
              src: '/papers/osnk-mat-sd-2023/fig-27.webp',
              alt: 'Petak persegi panjang kosong berukuran tiga baris dan empat kolom.',
              caption: 'Petak persegi panjang berukuran 3 × 4.'
            }
          ],
          answer: 'B. $5$',
          principle: 'Membuktikan batas bawah pada subpetak $3 \\times 3$ (sel pusat terhubung ke semua sel luar) lalu menyusun konfigurasi valid pada petak $3 \\times 4$.',
          solution:
            'Pertama, periksa subpetak $3 \\times 3$ di tiga kolom pertama. Andaikan hanya tersedia $4$ huruf berbeda:\n- Petak tengah $(2, 2)$ terletak pada satu baris, satu kolom, atau satu diagonal dengan seluruh $8$ petak tepi di sekelilingnya, sehingga huruf di $(2, 2)$ tidak dapat dipakai lagi pada ke-$8$ petak tepi tersebut.\n- Tersisa paling banyak $3$ huruf lain untuk mengisi $8$ petak tepi.\n- Namun, pada $8$ petak tepi persegi $3 \\times 3$, tidak ada satu pun huruf yang dapat muncul $3$ kali tanpa berpasangan pada baris, kolom, atau diagonal yang sama: jika memakai sudut seperti $(1,1)$, dua petak tersisa yang aman hanyalah $(2,3)$ dan $(3,2)$, padahal $(2,3)$ dan $(3,2)$ berada pada satu diagonal; jika memakai sisi tengah seperti $(1,2)$, dua petak tersisa yang aman hanyalah $(3,1)$ dan $(3,3)$, padahal keduanya berada pada satu baris.\n- Akibatnya, $3$ huruf paling banyak hanya bisa mengisi $3 \\times 2 = 6 < 8$ petak tepi. Kontradiksi! Jadi dibutuhkan paling sedikit $5$ huruf.\n\nSebanyak $5$ huruf berbeda ($A, B, C, D, E$) sudah mencukupi untuk mengisi seluruh petak $3 \\times 4$, misalnya:\n$$\\begin{array}{|c|c|c|c|} \\hline A & B & C & D \\\\ \\hline C & D & E & A \\\\ \\hline E & A & B & C \\\\ \\hline \\end{array}$$\nDapat diperiksa bahwa setiap baris, setiap kolom, dan setiap garis diagonal pada susunan tersebut memuat huruf-huruf yang saling berbeda. Jadi minimum banyak huruf berbeda yang dapat diletakkan adalah $5$ huruf.',
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
          label: '29',
          marks: 1,
          prompt:
            'Berikut peta perjalanan dari $6$ kecamatan di suatu kabupaten:\n\nAda berapa rute berbeda yang dapat ditempuh oleh seseorang yang berangkat dari M ke N?\n\nA. $9$\nB. $8$\nC. $7$\nD. $6$',
          figures: [
            {
              src: '/papers/osnk-mat-sd-2023/fig-29.webp',
              alt: 'Graf berarah berbentuk segitiga dengan enam titik simpul berlabel M di puncak, A dan B di tengah, serta D, C, dan N di alas.',
              caption: 'Peta graf berarah dari kecamatan M menuju kecamatan N.'
            }
          ],
          answer: 'D. $6$',
          principle: 'Menghitung banyak rute pada graf berarah (DAG) dengan metode penjumlahan rute di setiap simpul atau mendaftar seluruh lintasan secara sistematis.',
          solution:
            'Ikuti arah panah pada peta dari $M$ menuju $N$:\n- Dari $M$: hanya dapat menuju $A$ ($1$ cara) atau $B$ ($1$ cara).\n- Dari $B$: ada panah ke $A$, $C$, dan $N$.\n- Dari $A$: total cara masuk ke $A$ adalah $1$ (dari $M$) $+ 1$ (dari $M \\to B \\to A$) $= 2$ cara.\n- Dari $D$: hanya dimasuki dari $A$, sehingga ada $2$ cara menuju $D$.\n- Dari $C$: dimasuki dari $D$ ($2$ cara), langsung dari $A$ ($2$ cara), dan langsung dari $B$ ($1$ cara), sehingga total ada $2 + 2 + 1 = 5$ cara menuju $C$.\n- Ke $N$: dimasuki dari $B$ ($1$ cara) dan dari $C$ ($5$ cara), sehingga total ada $1 + 5 = 6$ rute.\n\nSeluruh $6$ rute berbeda tersebut adalah:\n1. $M \\to B \\to N$\n2. $M \\to B \\to C \\to N$\n3. $M \\to B \\to A \\to C \\to N$\n4. $M \\to B \\to A \\to D \\to C \\to N$\n5. $M \\to A \\to C \\to N$\n6. $M \\to A \\to D \\to C \\to N$',
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
