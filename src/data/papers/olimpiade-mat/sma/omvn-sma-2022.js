/**
 * Paket Soal Terstruktur: OMVN SMA Penyisihan 2022 (16 soal dimuat; 6 soal dilewati)
 * Sumber: scraped_raw/omvn-sma-2022.md
 * Bagian A Isian Singkat (14 soal dimuat dari 20 soal asli x 2 poin) dan Bagian B Uraian Pembanding (2 soal x 5 poin).
 */
const R2 = [
  { code: 'M1', text: 'Penalaran dan langkah penyelesaian yang benar.' },
  { code: 'A1', text: 'Jawaban akhir benar.' }
];

export default {
  id: 'omvn-sma-2022',
  slug: 'omvn-sma-2022',
  subject: 'olimpiade-mat',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'OMVN SMA Babak Penyisihan (2022)',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab2-barisan-deret',
    'sma10-bab4-trigonometri',
    'sma10-bab5-spltv-sptldv',
    'sma10-bab6-fungsi-kuadrat',
    'sma12-bab3-kaidah-pencacahan'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OMVN',
  title: 'OMVN SMA Penyisihan 2022',
  totalMarks: 38,
  instructions:
    'Naskah sumber OMVN SMA Babak Penyisihan 2022 terdiri atas 20 soal Bagian A (Isian Singkat, tanpa kunci bawaan) dan 2 soal Bagian B (Uraian Pembanding). Pada paket ini dimuat 16 soal terverifikasi (14 soal Isian Singkat x 2 poin dan 2 soal Uraian Pembanding x 5 poin, total 38 poin) serta 6 soal Bagian A dilewati karena gambar hilang atau teks rumus rusak/ambigu pada arsip PDF: No. 1 (pecahan dan pangkat/indeks akar `34` dan `8` terpecah baris secara ambigu), No. 3 (gambar konfigurasi persegi pada setengah lingkaran tidak tersedia dan titik $G$ tidak terdefinisi dalam teks), No. 5 (gambar kisi "2 baris dan 1 kolom" untuk kuis Tebak Kata tidak tersedia), No. 6 (ilustrasi tampilan 7-segmen lampu lalu lintas untuk konvensi angka tidak tersedia), No. 13 (rumus target kontradiktif secara aljabar: suku penyebut menuntut $9b = 27$ sehingga $b = 3$ sedangkan pembilang menuntut $b = 108$, dan $c\\sqrt{d} = 6\\sqrt{3}$ bertentangan dengan $\\text{FPB}(a, c) = 4$), serta No. 17 (domain $m, n$ tidak disebutkan, notasi pangkat terdatarkan, dan penentuan seluruh solusi persamaan Diophantine eksponensial $7 \\cdot 2^{2019} + 2^m + 7^n = k^2$ tidak dapat dilakukan secara elementer lengkap). Asumsi standar pada Bagian A No. 2: bangun datar 5 sisi sama panjang yang memiliki titik pusat diasumsikan sebagai segi lima beraturan.',
  source: {
    org: 'Olimpiade Matematika Vektor Nasional (OMVN) — Universitas Negeri Malang',
    file: 'scraped_raw/omvn-sma-2022.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Isian Singkat',
      marks: 28,
      stem: 'Jawablah setiap soal Isian Singkat berikut dengan nilai eksak yang paling sederhana (14 soal dimuat dari 20 soal asli; masing-masing bernilai 2 poin).',
      parts: [
        {
          label: '2',
          marks: 2,
          prompt:
            'Misalkan $ABCDE$ adalah bangun datar dengan $5$ sisi. Panjang sisi-sisinya yaitu $AB = a$, $BC = b$, $CD = c$, $DE = d$, dan $EA = e$. Panjang sisi tersebut memenuhi persamaan\n$$5a^2 + 5b^2 + 2c^2 + 5d^2 + 5e^2 = 8ab + 2bc + 2cd + 8de + 2ea.$$\nDiketahui juga ukuran panjang dari titik pusat bangun datar $ABCDE$ ke titik $B$ adalah $14$ satuan. Tentukan nilai dari\n$$\\frac{3a^2 + b^2 - 2c^2 + d^2 - 2e^2}{98}.$$',
          answer: '$5 - \\sqrt{5}$',
          principle: 'Melengkapkan jumlah kuadrat untuk membuktikan kesamaan sisi dan menggunakan jari-jari lingkaran luar segi lima beraturan $s = 2R\\sin 36^\\circ$.',
          solution:
            'Pindahkan seluruh suku ke ruas kiri dan kelompokkan menjadi jumlah lima kuadrat sempurna:\n$$4(a - b)^2 + (b - c)^2 + (c - d)^2 + 4(d - e)^2 + (e - a)^2 = 0.$$\nKarena setiap suku kuadrat bernilai tak negatif, semua suku harus nol, sehingga diperoleh\n$$a = b = c = d = e.$$\nSubstitusi $a = b = c = d = e$ menyederhanakan ekspresi yang dicari menjadi\n$$\\frac{3a^2 + a^2 - 2a^2 + a^2 - 2a^2}{98} = \\frac{a^2}{98}.$$\nDengan asumsi $ABCDE$ adalah segi lima beraturan berjari-jari lingkaran luar $R = 14$, sudut pusat satu sisi adalah $\\frac{360^\\circ}{5} = 72^\\circ$, sehingga $a = 2R\\sin 36^\\circ = 28\\sin 36^\\circ$. Untuk nilai eksak $\\sin^2 36^\\circ$, misalkan $\\theta = 18^\\circ$; karena $5\\theta = 90^\\circ$, maka $\\sin 2\\theta = \\cos 3\\theta$, yakni $2\\sin\\theta\\cos\\theta = \\cos\\theta(4\\cos^2\\theta - 3) = \\cos\\theta(1 - 4\\sin^2\\theta)$. Akibatnya $4\\sin^2\\theta + 2\\sin\\theta - 1 = 0$, sehingga $\\sin 18^\\circ = \\frac{\\sqrt{5} - 1}{4} = \\cos 72^\\circ$. Dengan demikian,\n$$\\sin^2 36^\\circ = \\frac{1 - \\cos 72^\\circ}{2} = \\frac{1 - \\frac{\\sqrt{5}-1}{4}}{2} = \\frac{5 - \\sqrt{5}}{8}.$$\nJadi $a^2 = 28^2 \\cdot \\frac{5 - \\sqrt{5}}{8} = 784 \\cdot \\frac{5 - \\sqrt{5}}{8} = 98(5 - \\sqrt{5})$, dan\n$$\\frac{a^2}{98} = 5 - \\sqrt{5}.$$',
          rubric: R2
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Tentukan digit terakhir dari\n$$2019^{2018^{2017^{2016}}} + 2020^{2019^{2018^{2017}}} + 2021^{2020^{2019^{2018}}} + 2022^{2021^{2020^{2019}}}.$$',
          answer: '$4$',
          principle: 'Aritmetika modular modulo $10$ dan periode siklus digit satuan pangkat.',
          solution:
            'Digit terakhir suatu bilangan sama dengan sisanya modulo $10$. Tinjau masing-masing suku:\n- Suku pertama: $2019 \\equiv 9 \\equiv -1 \\pmod{10}$. Karena pangkatnya $2018^{2017^{2016}}$ merupakan bilangan genap, maka $2019^{2018^{2017^{2016}}} \\equiv (-1)^{\\text{genap}} \\equiv 1 \\pmod{10}$.\n- Suku kedua: $2020 \\equiv 0 \\pmod{10}$ dan pangkatnya positif, sehingga $2020^{2019^{2018^{2017}}} \\equiv 0 \\pmod{10}$.\n- Suku ketiga: $2021 \\equiv 1 \\pmod{10}$, sehingga $2021^{2020^{2019^{2018}}} \\equiv 1 \\pmod{10}$.\n- Suku keempat: $2022 \\equiv 2 \\pmod{10}$. Siklus digit satuan dari $2^k$ untuk $k \\ge 1$ berperiode $4$: $(2, 4, 8, 6)$. Perhatikan pangkatnya $E = 2021^{2020^{2019}}$. Karena $2021 \\equiv 1 \\pmod{4}$, maka $E \\equiv 1^{2020^{2019}} \\equiv 1 \\pmod{4}$. Akibatnya $2022^E \\equiv 2^1 = 2 \\pmod{10}$.\n\nJumlah seluruh sisa modulo $10$ adalah $1 + 0 + 1 + 2 = 4$. Jadi digit terakhirnya adalah $4$.',
          rubric: R2
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'Budi memiliki $180$ mainan yang berbeda yang akan dimasukkan ke dalam kotak kardus. Budi melabeli setiap permainan berdasarkan $4$ komposisi dengan format "komposisi bahan - komposisi ukuran - komposisi bentuk - komposisi warna".\n- Komposisi bahan terdiri dari Plastik, Kayu, dan Besi.\n- Komposisi ukuran terdiri dari Besar, Sedang, dan Kecil.\n- Komposisi bentuk terdiri dari Segitiga, Segi empat, Segi lima, dan Segi enam.\n- Komposisi warna terdiri dari Biru, Hijau, Kuning, Ungu, dan Merah.\n\nMainan yang menjadi favorit Budi berlabel "Kayu - Kecil - Segitiga - Merah". Budi hanya akan memasukkan mainan yang memiliki tepat $2$ komposisi berbeda dari mainan favoritnya. Tentukan banyaknya mainan yang dimasukkan Budi ke dalam kotak kardus.',
          answer: '$44$',
          principle: 'Aturan penjumlahan dan perkalian pada kombinatorika berdasarkan pembagian kasus.',
          solution:
            'Banyak seluruh kombinasi label berbeda adalah $3 \\times 3 \\times 4 \\times 5 = 180$, sehingga tepat setiap kombinasi muncul satu kali. Banyak pilihan pada tiap komposisi yang berbeda dari label favorit "Kayu - Kecil - Segitiga - Merah" berturut-turut adalah:\n- Bahan: $3 - 1 = 2$ pilihan berbeda;\n- Ukuran: $3 - 1 = 2$ pilihan berbeda;\n- Bentuk: $4 - 1 = 3$ pilihan berbeda;\n- Warna: $5 - 1 = 4$ pilihan berbeda.\n\nMainan yang dimasukkan memiliki tepat $2$ komposisi berbeda dan $2$ komposisi sisanya sama dengan favorit. Ada $\\binom{4}{2} = 6$ pasangan komposisi yang berbeda:\n1. Bahan dan Ukuran berbeda: $2 \\times 2 = 4$.\n2. Bahan dan Bentuk berbeda: $2 \\times 3 = 6$.\n3. Bahan dan Warna berbeda: $2 \\times 4 = 8$.\n4. Ukuran dan Bentuk berbeda: $2 \\times 3 = 6$.\n5. Ukuran dan Warna berbeda: $2 \\times 4 = 8$.\n6. Bentuk dan Warna berbeda: $3 \\times 4 = 12$.\n\nTotal banyaknya mainan yang dimasukkan adalah $4 + 6 + 8 + 6 + 8 + 12 = 44$.',
          rubric: R2
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'Diketahui $A$ dan $B$ adalah himpunan tak kosong. Tentukan banyaknya pasangan himpunan $(A, B)$ yang memenuhi\n$$A \\cup B = \\{1, 2, \\dots, 22\\}, \\quad A \\cap B = \\emptyset, \\quad |A| \\in A, \\quad \\text{dan} \\quad |B| \\in B.$$',
          answer: '$863820$',
          principle: 'Partisi himpunan dengan syarat keanggotaan kardinalitas dan identitas jumlah koefisien binomial $\\sum_{j=0}^{n} \\binom{n}{j} = 2^n$.',
          solution:
            'Misalkan $|A| = k$. Karena $A$ dan $B$ tak kosong dan saling lepas dengan gabungan $\\{1, 2, \\dots, 22\\}$, maka $1 \\le k \\le 21$ dan $|B| = 22 - k$.\n\nJika $k = 11$, maka $|A| = |B| = 11$, sehingga syarat $|A| \\in A$ dan $|B| \\in B$ menuntut $11 \\in A$ sekaligus $11 \\in B$, yang bertentangan dengan $A \\cap B = \\emptyset$.\n\nUntuk setiap $k \\in \\{1, 2, \\dots, 21\\} \\setminus \\{11\\}$, nilai $k$ dan $22 - k$ berbeda dan keduanya berada di $\\{1, 2, \\dots, 22\\}$. Elemen $k$ wajib masuk ke $A$ dan $22 - k$ wajib masuk ke $B$. Sisa $22 - 2 = 20$ elemen lainnya harus dibagi dengan memilih tepat $k - 1$ elemen untuk melengkapi $A$ (dan sisanya menjadi anggota $B$). Banyaknya cara untuk suatu $k$ tetap adalah $\\binom{20}{k-1}$.\n\nDengan memisalkan $j = k - 1 \\in \\{0, 1, \\dots, 20\\} \\setminus \\{10\\}$, total pasangan $(A, B)$ adalah\n$$\\sum_{j=0}^{20} \\binom{20}{j} - \\binom{20}{10} = 2^{20} - \\binom{20}{10} = 1048576 - 184756 = 863820.$$',
          rubric: R2
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'Tentukan nilai dari\n$$\\sum_{n=0}^{2022} \\frac{1}{n+1} \\binom{2022}{n}.$$\nKeterangan: $\\binom{a}{b} = \\frac{a!}{b!(a-b)!}$.',
          answer: '$\\frac{2^{2023} - 1}{2023}$',
          principle: 'Identitas koefisien binomial $\\frac{1}{n+1}\\binom{m}{n} = \\frac{1}{m+1}\\binom{m+1}{n+1}$ dan deret binomial $(1+1)^{m+1}$.',
          solution:
            'Gunakan identitas penyerapan koefisien binomial untuk $m = 2022$:\n$$\\frac{1}{n+1}\\binom{2022}{n} = \\frac{1}{n+1} \\cdot \\frac{2022!}{n!(2022-n)!} = \\frac{1}{2023} \\cdot \\frac{2023!}{(n+1)!(2023-(n+1))!} = \\frac{1}{2023}\\binom{2023}{n+1}.$$\nSubstitusikan ke dalam penjumlahan dan lakukan penggeseran indeks $k = n + 1$:\n$$\\sum_{n=0}^{2022} \\frac{1}{n+1}\\binom{2022}{n} = \\frac{1}{2023} \\sum_{k=1}^{2023} \\binom{2023}{k} = \\frac{1}{2023}\\left(\\sum_{k=0}^{2023} \\binom{2023}{k} - \\binom{2023}{0}\\right) = \\frac{2^{2023} - 1}{2023}.$$',
          rubric: R2
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'Tentukan banyaknya pasangan bilangan real positif $(a, b, c, x, y, z)$ yang memenuhi persamaan\n$$ax + by + cz = 2022$$\n$$ax^2 + by^2 + cz^2 = 2023$$\n$$ax^3 + by^3 + cz^3 = 2024$$\n$$ax^4 + by^4 + cz^4 = 2025.$$',
          answer: '$0$',
          principle: 'Ketaksamaan Cauchy-Schwarz pada jumlah berpangkat suku positif.',
          solution:
            'Karena $a, b, c, x, y, z > 0$, kita dapat mendefinisikan dua vektor berdimensi tiga:\n$$\\mathbf{u} = \\left(\\sqrt{ax}, \\sqrt{by}, \\sqrt{cz}\\right), \\qquad \\mathbf{v} = \\left(\\sqrt{ax^3}, \\sqrt{by^3}, \\sqrt{cz^3}\\right).$$\nBerdasarkan ketaksamaan Cauchy-Schwarz, $(\\mathbf{u} \\cdot \\mathbf{v})^2 \\le \\|\\mathbf{u}\\|^2 \\|\\mathbf{v}\\|^2$, yakni\n$$(ax^2 + by^2 + cz^2)^2 \\le (ax + by + cz)(ax^3 + by^3 + cz^3).$$\nSubstitusi nilai dari tiga persamaan pertama menghasilkan\n$$2023^2 \\le 2022 \\cdot 2024 = (2023 - 1)(2023 + 1) = 2023^2 - 1,$$\nyang ekuivalen dengan $0 \\le -1$, suatu kontradiksi. Oleh karena itu, tidak ada pasangan bilangan real positif yang memenuhi sistem persamaan tersebut (banyaknya adalah $0$).',
          rubric: R2
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'Sebuah kubus $ABCD.EFGH$ memiliki panjang rusuk $x$ satuan. Di dalam kubus, terdapat limas segi empat dengan titik puncak $T$ yang berada di dalam kubus dan alas limas tersebut adalah $ABCD$. Misalkan jarak masing-masing titik $A, B, C, D$ ke titik puncak limas adalah $12$ satuan, dan jarak titik puncak limas ke bidang $AFGD$ adalah $\\sqrt{8}$ satuan. Tentukan nilai dari $x$.',
          answer: '$16$ atau $\\frac{32}{3}$',
          principle: 'Geometri ruang koordinat Kartesius dan rumus jarak titik ke bidang.',
          solution:
            'Tempatkan kubus pada koordinat ruang dengan $A(0,0,0)$, $B(x,0,0)$, $C(x,x,0)$, $D(0,x,0)$, $E(0,0,x)$, $F(x,0,x)$, $G(x,x,x)$, dan $H(0,x,x)$.\n\nKarena $TA = TB = TC = TD = 12$, proyeksi $T$ pada bidang $ABCD$ adalah pusat persegi $ABCD$, sehingga koordinat $T$ berbentuk $T\\left(\\frac{x}{2}, \\frac{x}{2}, z\\right)$ dengan $0 < z < x$ (karena $T$ berada di dalam kubus). Dari $TA = 12$, diperoleh\n$$\\left(\\frac{x}{2}\\right)^2 + \\left(\\frac{x}{2}\\right)^2 + z^2 = 12^2 \\implies \\frac{x^2}{2} + z^2 = 144. \\qquad (1)$$\nBidang $AFGD$ melalui $A(0,0,0)$, $F(x,0,x)$, $G(x,x,x)$, dan $D(0,x,0)$, sehingga persamaannya adalah $X - Z = 0$. Jarak dari $T$ ke bidang $AFGD$ adalah $\\sqrt{8} = 2\\sqrt{2}$:\n$$\\frac{\\left|\\frac{x}{2} - z\\right|}{\\sqrt{1^2 + (-1)^2}} = 2\\sqrt{2} \\implies \\left|\\frac{x}{2} - z\\right| = 4 \\implies z = \\frac{x}{2} \\pm 4.$$\nTinjau dua kasus posisi $T$ di dalam kubus:\n- Kasus 1 ($z = \\frac{x}{2} - 4$, titik $T$ di bawah bidang $AFGD$): substitusi ke $(1)$ memberi\n$$\\frac{x^2}{2} + \\left(\\frac{x}{2} - 4\\right)^2 = 144 \\implies \\frac{3}{4}x^2 - 4x - 128 = 0 \\implies 3x^2 - 16x - 512 = 0.$$\nDiskriminannya $16^2 + 4 \\cdot 3 \\cdot 512 = 6400 = 80^2$, sehingga akar positifnya $x = \\frac{16 + 80}{6} = 16$. Nilai $z = \\frac{16}{2} - 4 = 4$ memenuhi $0 < 4 < 16$.\n- Kasus 2 ($z = \\frac{x}{2} + 4$, titik $T$ di atas bidang $AFGD$): substitusi ke $(1)$ memberi\n$$\\frac{x^2}{2} + \\left(\\frac{x}{2} + 4\\right)^2 = 144 \\implies 3x^2 + 16x - 512 = 0.$$\nAkar positifnya adalah $x = \\frac{-16 + 80}{6} = \\frac{32}{3}$. Nilai $z = \\frac{16}{3} + 4 = \\frac{28}{3}$ juga memenuhi $0 < \\frac{28}{3} < \\frac{32}{3}$, sehingga $T$ tetap berada di dalam kubus.\n\nJadi nilai $x$ yang memenuhi adalah $16$ atau $\\frac{32}{3}$.',
          rubric: R2
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'Diketahui barisan $U_n = 4n - 3$ dengan $n$ adalah bilangan asli. Apabila nilai dari\n$$2045253U_1 + 2043231U_2 + 2041210U_3 + 2039190U_4 + \\dots + U_{2022}$$\ndapat dinyatakan dalam bentuk $a \\cdot b \\cdot c \\cdot d$ dengan $a, b, c,$ dan $d$ adalah bilangan asli sehingga $2000 < b, c, d < 2050$ dan $300 < a < 400$. Tentukan nilai dari $(b + c + d) - a$.',
          answer: '$5732$',
          principle: 'Pengenalan bilangan segitiga sebagai koefisien $\\binom{2024-k}{2}$ dan identitas tongkat hoki (Hockey-Stick).',
          solution:
            'Perhatikan selisih koefisien yang berurutan: $2045253 - 2043231 = 2022$, $2043231 - 2041210 = 2021$, dan $2041210 - 2039190 = 2020$. Lebih lanjut, $2045253 = \\frac{2022 \\cdot 2023}{2} = \\binom{2023}{2}$. Jadi koefisien $U_k$ adalah $\\binom{2024 - k}{2}$ untuk $k = 1, 2, \\dots, 2022$.\n\nMisalkan $j = 2023 - k$ (sehingga $k = 2023 - j$ dan $j$ berjalan dari $1$ sampai $2022$). Maka $U_k = 4(2023 - j) - 3 = 8089 - 4j = 8097 - 4(j + 2)$. Jumlah total $S$ menjadi\n$$S = \\sum_{j=1}^{2022} \\binom{j+1}{2}(8097 - 4(j+2)) = 8097\\sum_{j=1}^{2022}\\binom{j+1}{2} - 12\\sum_{j=1}^{2022}\\binom{j+2}{3},$$\nkarena $\\binom{j+1}{2}(j+2) = 3\\binom{j+2}{3}$. Dengan identitas tongkat hoki $\\sum_{j=1}^{2022}\\binom{j+1}{2} = \\binom{2024}{3}$ dan $\\sum_{j=1}^{2022}\\binom{j+2}{3} = \\binom{2025}{4}$, diperoleh\n$$S = 8097 \\cdot \\frac{2024 \\cdot 2023 \\cdot 2022}{6} - 12 \\cdot \\frac{2025 \\cdot 2024 \\cdot 2023 \\cdot 2022}{24}.$$\nFaktorkan $\\frac{2024 \\cdot 2023 \\cdot 2022}{2}$:\n$$S = \\frac{2024 \\cdot 2023 \\cdot 2022}{2}\\left(\\frac{8097}{3} - 2025\\right) = \\frac{2024 \\cdot 2023 \\cdot 2022}{2}(2699 - 2025) = 337 \\cdot 2022 \\cdot 2023 \\cdot 2024.$$\nFaktorisasi prima $S$ adalah $2^4 \\cdot 3 \\cdot 7 \\cdot 11 \\cdot 17^2 \\cdot 23 \\cdot 337^2$, dan satu-satunya faktor pembagi $S$ dalam selang $(2000, 2050)$ hanyalah $2022 = 2 \\cdot 3 \\cdot 337$, $2023 = 7 \\cdot 17^2$, dan $2024 = 2^3 \\cdot 11 \\cdot 23$. Sehingga $\\{b, c, d\\} = \\{2022, 2023, 2024\\}$ dan $a = 337 \\in (300, 400)$ bersifat tunggal.\n\nJadi $(b + c + d) - a = (2022 + 2023 + 2024) - 337 = 6069 - 337 = 5732$.',
          rubric: R2
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Jika $x^4 - 10x^3 - 2x^2 + 21x - 10 = 0$ memiliki tiga akar yang sama dengan ketiga akar dari $x^3 - ax + b = 0$, tentukan nilai $a + b$.',
          answer: '$3$',
          principle: 'Keterbagian polinomial dan hubungan akar-koefisien (rumus Vieta).',
          solution:
            'Karena ketiga akar $x^3 - ax + b = 0$ juga merupakan akar dari $P(x) = x^4 - 10x^3 - 2x^2 + 21x - 10$, maka $x^3 - ax + b$ membagi $P(x)$. Misalkan akar keempat dari $P(x)$ adalah $r$, sehingga\n$$x^4 - 10x^3 - 2x^2 + 21x - 10 = (x - r)(x^3 - ax + b) = x^4 - rx^3 - ax^2 + (ar + b)x - br.$$\nSamakan koefisien suku-suku sejenis pada kedua ruas:\n1. Koefisien $x^3$: $-r = -10 \\implies r = 10$.\n2. Koefisien $x^2$: $-a = -2 \\implies a = 2$.\n3. Koefisien $x$: $ar + b = 21 \\implies 2(10) + b = 21 \\implies b = 1$.\n4. Suku konstanta: $-br = -1(10) = -10$ (konsisten).\n\nPeriksa pula bahwa $x^3 - 2x + 1 = (x - 1)(x^2 + x - 1)$ memiliki tiga akar real yang berbeda. Dengan demikian $a + b = 2 + 1 = 3$.',
          rubric: R2
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Misalkan $a$ dan $b$ bilangan real sedemikian sehingga $x^4 + 2x^3 - x^2 + ax + b = [Q(x)]^2$ untuk suatu suku banyak $Q(x)$. Tentukan nilai $5a^3 + b^2$.',
          answer: '$-39$',
          principle: 'Identitas kesamaan koefisien pada kuadrat suku banyak berderajat dua.',
          solution:
            'Karena ruas kiri berderajat $4$ dengan koefisien utama $1$, suku banyak $Q(x)$ harus berderajat $2$ dengan koefisien utama $\\pm 1$. Tanpa mengurangi keumuman (sebab $(-Q(x))^2 = [Q(x)]^2$), misalkan $Q(x) = x^2 + px + q$. Jabarkan kuadratnya:\n$$[Q(x)]^2 = (x^2 + px + q)^2 = x^4 + 2px^3 + (p^2 + 2q)x^2 + 2pqx + q^2.$$\nSamakan koefisien dengan $x^4 + 2x^3 - x^2 + ax + b$:\n- Koefisien $x^3$: $2p = 2 \\implies p = 1$.\n- Koefisien $x^2$: $p^2 + 2q = -1 \\implies 1 + 2q = -1 \\implies q = -1$.\n- Koefisien $x$: $a = 2pq = 2(1)(-1) = -2$.\n- Konstanta: $b = q^2 = (-1)^2 = 1$.\n\nJadi $5a^3 + b^2 = 5(-2)^3 + 1^2 = 5(-8) + 1 = -39$.',
          rubric: R2
        },
        {
          label: '16',
          marks: 2,
          prompt:
            'Diketahui $p, q,$ dan $r$ adalah bilangan bulat positif dengan $\\text{FPB}(p, q) = \\text{FPB}(q, r) = 1$ dan $\\frac{1}{p} + \\frac{1}{q} + \\frac{1}{r}$ adalah bilangan bulat. Tentukan nilai maksimum dari $p + q + r$.',
          answer: '$5$',
          principle: 'Keterbagian pada persamaan pecahan satuan dan analisis faktor.',
          solution:
            'Misalkan $\\frac{1}{p} + \\frac{1}{q} + \\frac{1}{r} = k$ dengan $k \\in \\mathbb{Z}^+$. Kalikan kedua ruas dengan $pqr$:\n$$qr + pr + pq = kpqr.$$\nPerhatikan persamaan ini modulo $q$: setiap suku selain $pr$ habis dibagi $q$, sehingga $q \\mid pr$. Karena $\\text{FPB}(p, q) = \\text{FPB}(r, q) = 1$, diperoleh $\\text{FPB}(pr, q) = 1$. Akibatnya haruslah $q = 1$.\n\nSubstitusi $q = 1$ memberikan $\\frac{1}{p} + \\frac{1}{r} = k - 1$. Karena $p, r \\ge 1$, maka $0 < \\frac{1}{p} + \\frac{1}{r} \\le 2$, sehingga $k - 1 \\in \\{1, 2\\}$:\n- Jika $k - 1 = 2$, maka $p = r = 1$, sehingga $p + q + r = 3$.\n- Jika $k - 1 = 1$, maka $\\frac{1}{p} + \\frac{1}{r} = 1 \\iff (p - 1)(r - 1) = 1$. Karena $p, r \\in \\mathbb{Z}^+$, satu-satunya solusi adalah $p - 1 = 1$ dan $r - 1 = 1$, yaitu $p = r = 2$, sehingga $p + q + r = 2 + 1 + 2 = 5$.\n\nPasangan $(p, q, r) = (2, 1, 2)$ memenuhi $\\text{FPB}(2, 1) = \\text{FPB}(1, 2) = 1$ dan $\\frac{1}{2} + 1 + \\frac{1}{2} = 2$. Jadi nilai maksimum $p + q + r$ adalah $5$.',
          rubric: R2
        },
        {
          label: '18',
          marks: 2,
          prompt:
            'Berapa banyak solusi bilangan asli $(p, q)$ yang memenuhi persamaan\n$$4p^2 + q^2 = 12p + 18q?$$',
          answer: '$3$',
          principle: 'Melengkapkan kuadrat menjadi jumlah dua kuadrat bilangan bulat.',
          solution:
            'Pindahkan seluruh suku variabel ke ruas kiri dan lengkapkan kuadratnya:\n$$(4p^2 - 12p + 9) + (q^2 - 18q + 81) = 9 + 81$$\n$$(2p - 3)^2 + (q - 9)^2 = 90.$$\nKarena $p, q$ bilangan asli, maka $2p - 3$ adalah bilangan bulat ganjil dengan $(2p - 3)^2 \\le 90$. Periksa semua nilai $|2p - 3| \\in \\{1, 3, 5, 7, 9\\}$:\n- $|2p - 3| = 1 \\implies (q - 9)^2 = 89$ (bukan kuadrat).\n- $|2p - 3| = 3 \\implies (q - 9)^2 = 81 \\implies |q - 9| = 9$. Dari $2p - 3 = \\pm 3$ didapat $p = 3$ atau $p = 0$ (bukan bilangan asli), dan dari $q - 9 = \\pm 9$ didapat $q = 18$ atau $q = 0$ (bukan bilangan asli). Diperoleh $1$ solusi: $(3, 18)$.\n- $|2p - 3| = 5 \\implies (q - 9)^2 = 65$ (bukan kuadrat).\n- $|2p - 3| = 7 \\implies (q - 9)^2 = 41$ (bukan kuadrat).\n- $|2p - 3| = 9 \\implies (q - 9)^2 = 9 \\implies |q - 9| = 3$. Dari $2p - 3 = \\pm 9$ didapat $p = 6$ atau $p = -3$ (bukan bilangan asli), dan dari $q - 9 = \\pm 3$ didapat $q = 12$ atau $q = 6$. Diperoleh $2$ solusi: $(6, 6)$ dan $(6, 12)$.\n\nTotal ada $3$ solusi bilangan asli, yaitu $(3, 18)$, $(6, 6)$, dan $(6, 12)$.',
          rubric: R2
        },
        {
          label: '19',
          marks: 2,
          prompt:
            'Tentukan bilangan asli $n$ terkecil sehingga $\\left\\lfloor \\frac{\\sqrt{2202}}{n} \\right\\rfloor$ membagi $2022$.',
          answer: '$7$',
          principle: 'Penentuan fungsi lantai melalui pengapit kuadrat bilangan bulat dan faktorisasi prima $2022 = 2 \\cdot 3 \\cdot 337$.',
          solution:
            'Faktorisasi prima dari $2022$ adalah $2022 = 2 \\cdot 3 \\cdot 337$. Untuk menentukan $\\left\\lfloor \\frac{\\sqrt{2202}}{n} \\right\\rfloor = k$ tanpa aproksimasi desimal, gunakan syarat $k^2 n^2 \\le 2202 < (k+1)^2 n^2$. Uji $n = 1, 2, 3, \\dots$ secara berurutan:\n- $n = 1$: $46^2 = 2116 \\le 2202 < 2209 = 47^2$, sehingga hasilnya $46 \\nmid 2022$.\n- $n = 2$: $23^2 \\cdot 4 = 2116 \\le 2202 < 24^2 \\cdot 4 = 2304$, sehingga hasilnya $23 \\nmid 2022$.\n- $n = 3$: $15^2 \\cdot 9 = 2025 \\le 2202 < 16^2 \\cdot 9 = 2304$, sehingga hasilnya $15 \\nmid 2022$.\n- $n = 4$: $11^2 \\cdot 16 = 1936 \\le 2202 < 12^2 \\cdot 16 = 2304$, sehingga hasilnya $11 \\nmid 2022$.\n- $n = 5$: $9^2 \\cdot 25 = 2025 \\le 2202 < 10^2 \\cdot 25 = 2500$, sehingga hasilnya $9 \\nmid 2022$.\n- $n = 6$: $7^2 \\cdot 36 = 1764 \\le 2202 < 8^2 \\cdot 36 = 2304$, sehingga hasilnya $7 \\nmid 2022$.\n- $n = 7$: $6^2 \\cdot 49 = 1764 \\le 2202 < 7^2 \\cdot 49 = 2401$, sehingga $\\left\\lfloor \\frac{\\sqrt{2202}}{7} \\right\\rfloor = 6$, dan $6 \\mid 2022$ karena $2022 = 6 \\cdot 337$.\n\nJadi bilangan asli $n$ terkecil yang memenuhi adalah $7$.',
          rubric: R2
        },
        {
          label: '20',
          marks: 2,
          prompt:
            'Misalkan $x, y$ bilangan bulat positif yang memenuhi\n$$1501(x^3 y^3 + x^2 - y^2) = 216119(x y^3 + 1).$$\nHitung nilai $(x + y)^2$.',
          answer: '$289$',
          principle: 'Faktorisasi aljabar dan pembatasan ketaksamaan pada persamaan Diophantine.',
          solution:
            'Kelompokkan suku pada ruas kiri agar memuat faktor $xy^3 + 1$:\n$$x^3 y^3 + x^2 - y^2 = x^2(xy^3 + 1) - y^2.$$\nSubstitusikan ke persamaan awal dan pindahkan suku yang memuat $(xy^3 + 1)$ ke satu ruas:\n$$1501\\big(x^2(xy^3 + 1) - y^2\\big) = 216119(xy^3 + 1)$$\n$$(1501x^2 - 216119)(xy^3 + 1) = 1501y^2.$$\nKarena $x, y \\ge 1$, ruas kanan bernilai positif dan $xy^3 + 1 > 0$, sehingga wajib $1501x^2 > 216119$. Perhatikan $1501 \\cdot 143 = 214643 < 216119 < 216144 = 1501 \\cdot 144$, sehingga $x^2 \\ge 144$, atau $x \\ge 12$.\n\nJika $x \\ge 13$, maka $1501x^2 - 216119 \\ge 1501 \\cdot 169 - 216119 = 37550 > 1501$, dan karena $y \\ge 1$, berlaku pula $xy^3 + 1 \\ge 13y^3 + 1 > y^2$. Akibatnya $(1501x^2 - 216119)(xy^3 + 1) > 1501y^2$, kontradiksi.\n\nDengan demikian haruslah $x = 12$. Substitusi $x = 12$ memberi $1501 \\cdot 144 - 216119 = 25$, sehingga\n$$25(12y^3 + 1) = 1501y^2 \\implies y^2(1501 - 300y) = 25.$$\nKarena $y \\in \\mathbb{Z}^+$ dan $y^2 \\mid 25$, maka $y \\in \\{1, 5\\}$. Untuk $y = 1$ diperoleh $1(1201) \\ne 25$, sedangkan untuk $y = 5$ diperoleh $25(1501 - 1500) = 25$. Jadi $(x, y) = (12, 5)$ dan $(x + y)^2 = (12 + 5)^2 = 289$.',
          rubric: R2
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Uraian Pembanding',
      marks: 10,
      stem: 'Tuliskan langkah pembuktian dan penyelesaian secara lengkap untuk kedua soal uraian pembanding berikut (masing-masing bernilai 5 poin).',
      parts: [
        {
          label: '1',
          marks: 5,
          prompt:
            'Jika $p(x)$ adalah suatu polinomial yang memenuhi $2p(x) + 2x^2 = p(x^2 - 2x + 4) + 8x + 5$, tentukan nilai satuan dari $p(2^{2022})$.',
          answer: '$1$',
          principle: 'Penentuan derajat polinomial, penyamaan koefisien suku banyak, dan periodisitas digit satuan pangkat $2^k \\pmod{10}$.',
          solution:
            'Misalkan derajat polinomial $p(x)$ adalah $d$.\n- Jika $p(x)$ polinomial nol atau konstanta ($d = 0$), ruas kiri berderajat $2$ (dari $2x^2$) sedangkan ruas kanan berderajat $1$ (dari $8x$), tidak mungkin sama.\n- Jika $d \\ge 2$, maka ruas kiri berderajat $\\max(d, 2) = d$, sedangkan ruas kanan $p(x^2 - 2x + 4) + 8x + 5$ berderajat $2d > d$, tidak mungkin sama.\n\nOleh karena itu, haruslah $d = 1$. Tulis $p(x) = ax + b$ dengan $a \\ne 0$. Substitusikan ke persamaan polinomial:\n$$2(ax + b) + 2x^2 = a(x^2 - 2x + 4) + b + 8x + 5$$\n$$2x^2 + 2ax + 2b = ax^2 + (-2a + 8)x + (4a + b + 5).$$\nDengan menyamakan koefisien pada kedua ruas:\n1. Koefisien $x^2$: $a = 2$.\n2. Koefisien $x$: $2a = -2a + 8 \\implies 4a = 8 \\implies a = 2$ (konsisten).\n3. Konstanta: $2b = 4a + b + 5 \\implies b = 4(2) + 5 = 13$.\n\nJadi $p(x) = 2x + 13$, sehingga\n$$p(2^{2022}) = 2 \\cdot 2^{2022} + 13 = 2^{2023} + 13.$$\nSiklus sisa $2^k \\pmod{10}$ untuk $k \\ge 1$ berperiode $4$: $(2, 4, 8, 6)$. Karena $2023 = 4 \\cdot 505 + 3$, maka $2^{2023} \\equiv 2^3 = 8 \\pmod{10}$. Akibatnya\n$$p(2^{2022}) \\equiv 8 + 13 = 21 \\equiv 1 \\pmod{10}.$$\nJadi nilai satuan dari $p(2^{2022})$ adalah $1$.',
          rubric: [
            { code: 'M1', text: 'Membuktikan bahwa derajat $p(x)$ harus sama dengan $1$.' },
            { code: 'M2', text: 'Menyamakan koefisien hingga memperoleh $p(x) = 2x + 13$ secara benar.' },
            { code: 'M1', text: 'Menghitung $p(2^{2022}) = 2^{2023} + 13$ dan menentukan sisa $2^{2023} \\pmod{10}$.' },
            { code: 'A1', text: 'Menyimpulkan nilai satuan adalah $1$.' }
          ]
        },
        {
          label: '2',
          marks: 5,
          prompt:
            'Misalkan $a, b,$ dan $c$ adalah sisi-sisi dari suatu segitiga dengan $a + b + c = 1$. Tunjukkan bahwa\n$$(a^n + b^n)^{\\frac{1}{n}} + (b^n + c^n)^{\\frac{1}{n}} + (c^n + a^n)^{\\frac{1}{n}} < 1 + \\frac{2^{\\frac{1}{n}}}{2}$$\nberlaku untuk setiap bilangan bulat $n \\ge 2$.',
          answer: 'Terbukti untuk setiap bilangan bulat $n \\ge 2$.',
          principle: 'Ketaksamaan segitiga ($a, b, c < \\frac{1}{2}$), dekomposisi kombinasi konveks terhadap titik batas $(\\frac{1}{2}, \\frac{1}{2}, 0)$, dan ketaksamaan Minkowski.',
          solution:
            'Karena $a, b, c$ merupakan panjang sisi-sisi suatu segitiga dengan $a + b + c = 1$, menurut ketaksamaan segitiga berlaku $a < b + c$, sehingga $2a < a + b + c = 1$, yakni $a < \\frac{1}{2}$. Secara analog, $0 < a, b, c < \\frac{1}{2}$, sehingga\n$$1 - 2a > 0, \\quad 1 - 2b > 0, \\quad 1 - 2c > 0.$$\nPerhatikan identitas aljabar berikut untuk pasangan $(a, b)$:\n$$(a, b) = \\left(\\frac{1 - 2c}{2},\\, \\frac{1 - 2c}{2}\\right) + \\left(\\frac{1 - 2b}{2},\\, 0\\right) + \\left(0,\\, \\frac{1 - 2a}{2}\\right),$$\nkarena $\\frac{1 - 2c}{2} + \\frac{1 - 2b}{2} = 1 - b - c = a$ dan $\\frac{1 - 2c}{2} + \\frac{1 - 2a}{2} = 1 - a - c = b$.\n\nUntuk vektor $\\mathbf{v} = \\left(\\frac{1-2b}{2}, 0\\right)$ dan $\\mathbf{w} = \\left(0, \\frac{1-2a}{2}\\right)$ dengan komponen positif dan $n \\ge 2$, menurut teorema binomial berlaku\n$$\\left(\\frac{1-2b}{2}\\right)^n + \\left(\\frac{1-2a}{2}\\right)^n < \\left(\\frac{1-2b}{2} + \\frac{1-2a}{2}\\right)^n = (1 - a - b)^n = c^n,$$\nsehingga $\\|\\mathbf{v} + \\mathbf{w}\\|_n < c$. Dengan menerapkan ketaksamaan segitiga norma $\\ell_n$ (ketaksamaan Minkowski untuk $n \\ge 2$) pada $\\mathbf{u} = \\left(\\frac{1-2c}{2}, \\frac{1-2c}{2}\\right)$ dan $\\mathbf{v} + \\mathbf{w}$, diperoleh\n$$(a^n + b^n)^{\\frac{1}{n}} = \\|\\mathbf{u} + (\\mathbf{v} + \\mathbf{w})\\|_n \\le \\|\\mathbf{u}\\|_n + \\|\\mathbf{v} + \\mathbf{w}\\|_n < \\frac{1 - 2c}{2} \\cdot 2^{\\frac{1}{n}} + c.$$\nDengan cara yang persis sama secara siklis untuk $(b, c)$ dan $(c, a)$, diperoleh pula\n$$(b^n + c^n)^{\\frac{1}{n}} < \\frac{1 - 2a}{2} \\cdot 2^{\\frac{1}{n}} + a, \\qquad (c^n + a^n)^{\\frac{1}{n}} < \\frac{1 - 2b}{2} \\cdot 2^{\\frac{1}{n}} + b.$$\nJumlahkan ketiga ketaksamaan ketat tersebut:\n$$(a^n + b^n)^{\\frac{1}{n}} + (b^n + c^n)^{\\frac{1}{n}} + (c^n + a^n)^{\\frac{1}{n}} < \\frac{3 - 2(a + b + c)}{2} \\cdot 2^{\\frac{1}{n}} + (a + b + c).$$\nKarena $a + b + c = 1$, maka $\\frac{3 - 2(1)}{2} = \\frac{1}{2}$, sehingga\n$$(a^n + b^n)^{\\frac{1}{n}} + (b^n + c^n)^{\\frac{1}{n}} + (c^n + a^n)^{\\frac{1}{n}} < 1 + \\frac{2^{\\frac{1}{n}}}{2},$$\nyang terbukti berlaku untuk setiap bilangan bulat $n \\ge 2$.',
          rubric: [
            { code: 'M1', text: 'Menurunkan syarat $0 < a, b, c < \\frac{1}{2}$ dari ketaksamaan segitiga dan $a + b + c = 1$.' },
            { code: 'M2', text: 'Menyatakan $(a, b)$ sebagai jumlah vektor $\\left(\\frac{1-2c}{2}, \\frac{1-2c}{2}\\right) + \\left(\\frac{1-2b}{2}, 0\\right) + \\left(0, \\frac{1-2a}{2}\\right)$ dan membuktikan $(a^n + b^n)^{1/n} < \\frac{1-2c}{2} \\cdot 2^{1/n} + c$ secara ketat.' },
            { code: 'M1', text: 'Menjumlahkan ketiga ketaksamaan siklis dengan memanfaatkan $a + b + c = 1$.' },
            { code: 'A1', text: 'Menyimpulkan ketaksamaan ketat terbukti untuk setiap $n \\ge 2$.' }
          ]
        }
      ]
    }
  ]
};
