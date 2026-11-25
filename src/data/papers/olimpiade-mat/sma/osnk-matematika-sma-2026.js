/**
 * Paket Soal Terstruktur: OSN-K Matematika SMA 2026 (18 soal isian singkat dimuat; 2 soal dilewati)
 * Sumber: scraped_raw/folderosn-osnk-mat-sma-2026.md
 * Bagian I Kemampuan Dasar (9 soal dimuat x 2 poin; No. 9 dilewati) dan Bagian II Kemampuan Lanjut (9 soal dimuat x 4 poin; No. 7 dilewati).
 */
const R2 = [
  { code: 'M1', text: 'Penalaran dan langkah penyelesaian yang benar.' },
  { code: 'A1', text: 'Jawaban akhir benar.' }
];
const R4 = [
  { code: 'M2', text: 'Penalaran dan langkah penyelesaian yang benar.' },
  { code: 'A2', text: 'Jawaban akhir benar.' }
];

export default {
  id: 'osnk-mat-sma-2026',
  slug: 'osnk-matematika-sma-2026',
  subject: 'olimpiade-mat',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'OSN-K Matematika SMA 2026',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab2-barisan-deret',
    'sma10-bab6-fungsi-kuadrat',
    'sma10-bab8-peluang',
    'sma11-bab2-lingkaran',
    'sma12-bab3-kaidah-pencacahan'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SMA 2026',
  totalMarks: 54,
  instructions:
    'Naskah sumber OSN-K Matematika SMA 2026 terdiri atas 20 soal isian singkat (10 soal Bagian I: Kemampuan Dasar bernilai masing-masing 2 poin dan 10 soal Bagian II: Kemampuan Lanjut bernilai masing-masing 4 poin) tanpa kunci bawaan. Dari 20 soal tersebut, 18 soal dimuat (9 soal Kemampuan Dasar dan 9 soal Kemampuan Lanjut, total 54 poin) dan 2 soal dilewati karena informasi kunci tidak tersedia pada arsip sumber: Bagian I No. 9 (memerlukan gambar konfigurasi lingkaran dan persegi yang tidak tersedia) serta Bagian II No. 7 (nilai luas atau ukuran segitiga $ABC$ tidak tercantum sehingga luas segitiga $ADN$ tidak dapat ditentukan secara numerik). Asumsi standar: pada Bagian I No. 2 koin diasumsikan seimbang, pada Bagian I No. 3 diasumsikan $c \\ne 0$, pada Bagian II No. 1 pecahan $\\frac{a}{b}$ berada dalam bentuk paling sederhana, pada Bagian II No. 3 diasumsikan $x, y > 0$, dan pada Bagian II No. 8 koefisien binomial mensyaratkan $m \\ge k$ dan $n \\ge k + 1$.',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/folderosn-osnk-mat-sma-2026.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian I: Kemampuan Dasar',
      marks: 18,
      stem: 'Jawablah setiap soal isian singkat Kemampuan Dasar berikut dengan jawaban akhir yang tepat (9 soal dimuat dari 10 soal asli; masing-masing bernilai 2 poin).',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            'Diberikan $x, y, z$ bilangan real yang memenuhi sistem persamaan:\n$$x - y = 1$$\n$$y - z = 2$$\n$$xyz = 77$$\nNilai dari $\\frac{x}{yz} + \\frac{y}{xz} + \\frac{z}{xy} - \\left(\\frac{1}{x} + \\frac{1}{y} + \\frac{1}{z}\\right) = \\dots$',
          answer: '$\\frac{1}{11}$',
          principle: 'Identitas aljabar $x^2 + y^2 + z^2 - xy - yz - zx = \\frac{1}{2}\\left((x-y)^2 + (y-z)^2 + (z-x)^2\\right)$.',
          solution:
            'Karena $xyz = 77 \\ne 0$, maka $x, y, z \\ne 0$. Samakan penyebut seluruh suku menjadi $xyz$:\n$$\\frac{x}{yz} + \\frac{y}{xz} + \\frac{z}{xy} - \\left(\\frac{1}{x} + \\frac{1}{y} + \\frac{1}{z}\\right) = \\frac{x^2 + y^2 + z^2 - (xy + yz + zx)}{xyz}.$$\nDari $x - y = 1$ dan $y - z = 2$, diperoleh $x - z = (x - y) + (y - z) = 3$, sehingga $z - x = -3$. Gunakan identitas kuadrat selisih:\n$$x^2 + y^2 + z^2 - xy - yz - zx = \\frac{1}{2}\\left((x - y)^2 + (y - z)^2 + (z - x)^2\\right) = \\frac{1}{2}\\left(1^2 + 2^2 + (-3)^2\\right) = \\frac{14}{2} = 7.$$\nJadi, nilai ekspresi yang dicari adalah $\\frac{7}{77} = \\frac{1}{11}$.',
          rubric: R2
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Andi, Budi, dan Cici melakukan suatu permainan dengan melempar koin. Urutan pelemparan dimulai dari Andi, kemudian Budi, dan dilanjutkan Cici. Pemain pertama yang mendapatkan sisi Gambar dinyatakan sebagai pemenang. Ketika ketiga pemain berturut-turut mendapatkan sisi Angka, maka permainan dilanjutkan kembali dengan urutan pelemparan yang sama. Jika peluang Andi menang adalah $\\frac{a}{n}$, peluang Budi menang adalah $\\frac{b}{n}$, dan peluang Cici menang adalah $\\frac{c}{n}$, dengan $a, b, c, n$ adalah bilangan bulat positif yang relatif prima, maka hasil dari $c + n = \\dots$',
          answer: '$8$',
          principle: 'Keserupaan diri (rekursi peluang) pada permainan berulang dengan koin seimbang.',
          solution:
            'Asumsikan koin seimbang sehingga peluang muncul sisi Gambar dan sisi Angka masing-masing $\\frac{1}{2}$. Misalkan $P_A, P_B, P_C$ berturut-turut menyatakan peluang Andi, Budi, dan Cici menang.\n- Pada lemparan pertama, Andi langsung menang jika mendapat Gambar (peluang $\\frac{1}{2}$). Jika Andi, Budi, dan Cici berturut-turut mendapat Angka (peluang $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$), permainan kembali ke kondisi awal dengan giliran Andi lagi. Maka:\n$$P_A = \\frac{1}{2} + \\frac{1}{8} P_A \\implies \\frac{7}{8} P_A = \\frac{1}{2} \\implies P_A = \\frac{4}{7}.$$\n- Budi menang jika Andi mendapat Angka (peluang $\\frac{1}{2}$) dan selanjutnya Budi berada pada posisi pemain pertama yang melempar, sehingga $P_B = \\frac{1}{2} P_A = \\frac{2}{7}$.\n- Cici menang jika Andi dan Budi sama-sama mendapat Angka (peluang $\\frac{1}{4}$) dan selanjutnya Cici berada pada posisi pemain pertama yang melempar, sehingga $P_C = \\frac{1}{4} P_A = \\frac{1}{7}$.\nDiperoleh $(a, b, c, n) = (4, 2, 1, 7)$ dengan $\\gcd(4, 2, 1, 7) = 1$. Jadi, $c + n = 1 + 7 = 8$.',
          rubric: R2
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'Suku banyak $P(x) = x^3 + ax^2 + bx + c$ habis dibagi oleh $Q(x) = x^2 + \\frac{1}{40}$, maka nilai dari $\\frac{a}{c} = \\dots$',
          answer: '$40$',
          principle: 'Faktorisasi suku banyak monik dan perbandingan koefisien.',
          solution:
            'Karena $P(x)$ suku banyak monik berderajat $3$ dan habis dibagi $Q(x) = x^2 + \\frac{1}{40}$ yang juga monik berderajat $2$, hasil baginya haruslah suku banyak monik berderajat $1$, misalkan $x + r$:\n$$P(x) = (x + r)\\left(x^2 + \\frac{1}{40}\\right) = x^3 + r x^2 + \\frac{1}{40}x + \\frac{r}{40}.$$\nDengan menyamakan koefisien pada $P(x) = x^3 + ax^2 + bx + c$, diperoleh $a = r$ dan $c = \\frac{r}{40} = \\frac{a}{40}$. Karena nilai $\\frac{a}{c}$ ditanyakan (sehingga $c \\ne 0$ dan $a \\ne 0$), maka:\n$$\\frac{a}{c} = \\frac{a}{a/40} = 40.$$',
          rubric: R2
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Diketahui luas sebuah segitiga siku-siku adalah $45$. Jika jari-jari lingkaran luar segitiga tersebut adalah $8$, jari-jari lingkaran dalam segitiga adalah $r$, dan $r$ dapat dinyatakan dalam bentuk $\\sqrt{m} + n$ dengan $m, n \\in \\mathbb{Z}$, maka nilai dari $m + n$ adalah $\\dots$',
          answer: '$101$',
          principle: 'Jari-jari lingkaran luar $R = \\frac{c}{2}$ dan jari-jari lingkaran dalam $r = \\frac{a + b - c}{2}$ pada segitiga siku-siku.',
          solution:
            'Misalkan panjang kedua sisi siku-siku segitiga adalah $a, b$ dan sisi miringnya $c$. Karena jari-jari lingkaran luar segitiga siku-siku adalah setengah sisi miringnya, diperoleh $c = 2R = 2(8) = 16$.\nDari luas segitiga, $\\frac{1}{2}ab = 45 \\implies ab = 90$. Dengan Teorema Pythagoras, $a^2 + b^2 = c^2 = 256$, sehingga:\n$$(a + b)^2 = a^2 + b^2 + 2ab = 256 + 2(90) = 436 = 4 \\cdot 109 \\implies a + b = 2\\sqrt{109}.$$\n(Perhatikan bahwa $(a - b)^2 = 256 - 180 = 76 > 0$, sehingga segitiga memang ada.)\nJari-jari lingkaran dalam segitiga siku-siku adalah:\n$$r = \\frac{a + b - c}{2} = \\frac{2\\sqrt{109} - 16}{2} = \\sqrt{109} - 8.$$\nKarena $109$ prima sehingga $\\sqrt{109}$ irasional, representasi $\\sqrt{m} + n$ ($m, n \\in \\mathbb{Z}$) bersifat tunggal dengan $m = 109$ dan $n = -8$. Jadi, $m + n = 109 + (-8) = 101$.',
          rubric: R2
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Banyak bilangan asli dari $456, 457, \\dots, 2026$ yang digit-digitnya saling berbeda dan jika dibaca dari kiri ke kanan digit-digitnya berada dalam urutan naik (strictly increasing) adalah $\\dots$',
          answer: '$76$',
          principle: 'Kombinasi tanpa pengulangan untuk menentukan banyaknya susunan digit menaik tegas.',
          solution:
            'Suatu bilangan asli dengan digit menaik tegas dari kiri ke kanan tidak mungkin memuat digit $0$, sehingga seluruh digitnya diambil dari $\\{1, 2, \\dots, 9\\}$. Setiap himpunan bagian berukuran $k$ dari digit tersebut membentuk tepat satu bilangan $k$-angka dengan urutan digit menaik tegas.\n- Bilangan $3$-angka ($456 \\le N \\le 999$): digit ratusan minimal $4$. Jika digit ratusan sama dengan $4$, bilangan terkecil yang digitnya menaik tegas adalah $456$, sehingga seluruh bilangan $3$-angka menaik tegas yang dibentuk dari himpunan $\\{4, 5, 6, 7, 8, 9\\}$ memenuhi $456 \\le N \\le 789$. Banyaknya adalah $\\binom{6}{3} = 20$.\n- Bilangan $4$-angka ($1000 \\le N \\le 2026$): digit ribuan haruslah $1$, sebab jika digit ribuan minimal $2$, bilangan menaik tegas terkecil adalah $2345 > 2026$. Dengan digit ribuan $1$, ketiga digit sisanya dipilih dari $\\{2, 3, 4, 5, 6, 7, 8, 9\\}$ (semuanya memenuhi $N \\le 1789 < 2026$). Banyaknya adalah $\\binom{8}{3} = 56$.\nTotal bilangan yang memenuhi adalah $20 + 56 = 76$.',
          rubric: R2
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'Diberikan suku barisan $a_n$ sebagai sisa pembagian dari $(a_{n-2} + a_{n-1})$ oleh $3$. Jika diketahui $a_1 = 0$ dan $a_2 = 2$ untuk setiap $n \\ge 3$, maka nilai dari jumlah suku-suku $a_1 + a_2 + a_3 + \\dots + a_{2026}$ adalah $\\dots$',
          answer: '$2279$',
          principle: 'Periodisitas barisan rekursif modulo $3$.',
          solution:
            'Hitung suku-suku awal barisan modulo $3$ menggunakan $a_n \\equiv a_{n-2} + a_{n-1} \\pmod{3}$ ($0 \\le a_n \\le 2$):\n$$a_1 = 0, \\; a_2 = 2, \\; a_3 = 2, \\; a_4 = 1, \\; a_5 = 0, \\; a_6 = 1, \\; a_7 = 1, \\; a_8 = 2, \\; a_9 = 0, \\; a_{10} = 2.$$\nKarena $(a_9, a_{10}) = (0, 2) = (a_1, a_2)$ dan setiap suku hanya bergantung pada dua suku sebelumnya, barisan ini periodik murni dengan periode $8$: $(0, 2, 2, 1, 0, 1, 1, 2)$.\nJumlah satu periode penuh adalah $0 + 2 + 2 + 1 + 0 + 1 + 1 + 2 = 9$.\nKarena $2026 = 8 \\times 253 + 2$, terdapat $253$ periode penuh ditambah dua suku awal $a_1 + a_2 = 0 + 2 = 2$. Jadi:\n$$a_1 + a_2 + \\dots + a_{2026} = 253 \\times 9 + 2 = 2277 + 2 = 2279.$$',
          rubric: R2
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'Alda mempunyai koper dengan kombinasi kunci yang membentuk sebuah barisan yang terdiri dari $8$ angka pilihan dari himpunan $\\{1, 2, 3, 4, 5\\}$. Ia akan mengatur satu barisan tersebut sehingga koper dapat dibuka. Jika Alda menginginkan barisan kunci tersebut memuat tepat satu angka $1$ dan tepat empat angka $2$, maka banyak variasi susunan kunci koper yang mungkin dibuat adalah $\\dots$',
          answer: '$7560$',
          principle: 'Kaidah perkalian dan koefisien multinomial untuk penempatan posisi angka.',
          solution:
            'Dari $8$ posisi pada barisan kunci:\n1. Pilih $1$ posisi untuk angka $1$: $\\binom{8}{1} = 8$ cara.\n2. Pilih $4$ posisi dari $7$ posisi tersisa untuk angka $2$: $\\binom{7}{4} = 35$ cara.\n3. Sisa $3$ posisi diisi bebas menggunakan angka dari $\\{3, 4, 5\\}$ (masing-masing $3$ pilihan agar banyaknya angka $1$ dan $2$ tidak bertambah): $3^3 = 27$ cara.\nTotal variasi susunan kunci adalah:\n$$8 \\times 35 \\times 27 = 280 \\times 27 = 7560.$$',
          rubric: R2
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'Diberikan tiga bilangan prima $p, q, r$ yang memenuhi sistem persamaan:\n$$p + q + r = 26$$\n$$pq + qr + rp = 191$$\nNilai dari perkalian $pqr$ adalah $\\dots$',
          answer: '$286$',
          principle: 'Analisis paritas bilangan prima dan persamaan kuadrat dari relasi Vieta.',
          solution:
            'Karena jumlah tiga bilangan prima $p + q + r = 26$ bernilai genap, tidak mungkin ketiganya ganjil (jumlah tiga bilangan ganjil adalah ganjil), dan tidak mungkin ketiganya genap ($2 + 2 + 2 = 6 \\ne 26$). Jadi, tepat satu di antaranya adalah bilangan prima genap, yaitu $2$.\nTanpa mengurangi keumuman, misalkan $r = 2$. Maka:\n$$p + q = 26 - 2 = 24,$$\n$$pq + 2(p + q) = 191 \\implies pq = 191 - 2(24) = 143.$$\nMaka $p$ dan $q$ adalah akar dari $t^2 - 24t + 143 = 0 \\iff (t - 11)(t - 13) = 0$, sehingga $\\{p, q\\} = \\{11, 13\\}$ (keduanya prima). Jadi:\n$$pqr = 2 \\times 11 \\times 13 = 286.$$',
          rubric: R2
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'Sebuah fungsi kuadrat $f(x) = x^2 + px + q^2$ memiliki akar-akar yang keduanya merupakan bilangan bulat. Jika $p$ dan $q$ adalah bilangan prima, maka nilai dari $p + 2q = \\dots$',
          answer: '$9$',
          principle: 'Teorema Vieta, faktorisasi bilangan bulat, dan paritas bilangan prima.',
          solution:
            'Misalkan kedua akar bulat dari $x^2 + px + q^2 = 0$ adalah $\\alpha, \\beta \\in \\mathbb{Z}$. Berdasarkan rumus Vieta:\n$$\\alpha + \\beta = -p, \\qquad \\alpha\\beta = q^2.$$\nKarena $\\alpha\\beta = q^2 > 0$ dan $\\alpha + \\beta = -p < 0$ ($p$ prima), kedua akar $\\alpha$ dan $\\beta$ harus negatif. Karena $q$ prima, pembagi positif dari $q^2$ hanyalah $1, q, q^2$, sehingga himpunan $\\{\\alpha, \\beta\\}$ hanya mungkin $\\{-q, -q\\}$ atau $\\{-1, -q^2\\}$.\n- Jika $\\alpha = \\beta = -q$, maka $p = -(\\alpha + \\beta) = 2q$. Ini tidak mungkin karena $2q \\ge 4$ genap sehingga bukan prima.\n- Jika $\\{\\alpha, \\beta\\} = \\{-1, -q^2\\}$, maka $p = q^2 + 1$. Jika $q$ prima ganjil, $q^2 + 1$ genap dan lebih dari $2$, mustahil prima. Maka $q = 2$, yang memberikan $p = 2^2 + 1 = 5$ (prima).\nMemang benar $x^2 + 5x + 4 = (x + 1)(x + 4)$ memiliki dua akar bulat. Jadi, $p + 2q = 5 + 2(2) = 9$.',
          rubric: R2
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian II: Kemampuan Lanjut',
      marks: 36,
      stem: 'Jawablah setiap soal isian singkat Kemampuan Lanjut berikut dengan jawaban akhir yang tepat (9 soal dimuat dari 10 soal asli; masing-masing bernilai 4 poin).',
      parts: [
        {
          label: '1',
          marks: 4,
          prompt:
            'Tentukan nilai dari $a + b$ jika $\\frac{a}{b}$ adalah pecahan rasional terbesar kurang dari $100$ berbentuk $\\frac{a}{b}$ yang memenuhi persamaan matematika:\n$$x^2 + \\lfloor x \\rfloor = \\lfloor x^2 \\rfloor + x + \\frac{31}{100}$$\nKeterangan: $\\lfloor \\cdot \\rfloor$ menyatakan fungsi bilangan bulat terbesar yang kurang dari atau sama dengan $\\cdot$ (fungsi floor).',
          answer: '$981$',
          principle: 'Bagian pecahan $\\{x\\} = x - \\lfloor x \\rfloor$, persamaan kuadrat rasional, dan kongruensi kuadrat modulo $100$.',
          solution:
            'Tulis $x = n + f$ dengan $n = \\lfloor x \\rfloor \\in \\mathbb{Z}$ dan $f = \\{x\\} \\in [0, 1)$. Persamaan dapat ditulis ulang sebagai:\n$$\\{x^2\\} = \\{x\\} + \\frac{31}{100} = f + \\frac{31}{100}.$$\nKarena $0 \\le \\{x^2\\} < 1$, haruslah $0 \\le f < \\frac{69}{100}$. Misalkan $k = \\lfloor x^2 \\rfloor - n^2 = \\lfloor 2nf + f^2 \\rfloor \\in \\mathbb{Z}$, maka $x^2 = n^2 + 2nf + f^2$ memberikan:\n$$2nf + f^2 - k = f + \\frac{31}{100} \\iff 100f^2 + 100(2n - 1)f - (100k + 31) = 0.$$\nDengan rumus kuadrat, $f = \\frac{M - 5(2n - 1)}{10}$ di mana:\n$$M = \\sqrt{25(2n - 1)^2 + 100k + 31}.$$\nKarena $x$ rasional dan $f \\ge 0$, maka $M > 0$ adalah bilangan rasional yang kuadratnya bilangan bulat, sehingga $M \\in \\mathbb{Z}^+$. Selanjutnya, karena $2n - 1$ selalu ganjil, $(2n - 1)^2 \\equiv 1 \\pmod{4}$, akibatnya $25(2n - 1)^2 \\equiv 25 \\pmod{100}$. Jadi:\n$$M^2 = 25(2n - 1)^2 + 100k + 31 \\equiv 25 + 31 = 56 \\pmod{100}.$$\nUntuk $M = 10q + d$ dengan $d \\in \\{4, 6\\}$ (karena $M^2 \\equiv 6 \\pmod{10}$), diperoleh $M \\equiv 16, 34, 66, \\text{atau } 84 \\pmod{100}$.\nKarena $0 \\le f < \\frac{69}{100}$, batas untuk $M = 10n - 5 + 10f$ adalah:\n$$10n - 5 \\le M < 10n + \\frac{19}{10}.$$\nKita periksa $n \\le 99$ dari yang terbesar:\n- $n = 99$: $985 \\le M \\le 991$, tidak ada yang kongruen $16, 34, 66, 84 \\pmod{100}$.\n- $n = 98$: $975 \\le M \\le 981$, tidak ada yang memenuhi.\n- $n = 97$: $965 \\le M \\le 971$, terdapat tepat satu nilai yang memenuhi, yaitu $M = 966$ ($\\equiv 66 \\pmod{100}$).\nUntuk $n = 97$ dan $M = 966$, diperoleh $f = \\frac{966 - 965}{10} = \\frac{1}{10}$, sehingga $x = 97 + \\frac{1}{10} = \\frac{971}{10}$. Verifikasi: $x^2 = \\frac{942841}{100} = 9428 + \\frac{41}{100}$, sehingga $\\{x^2\\} = \\frac{41}{100} = \\frac{1}{10} + \\frac{31}{100}$, benar. Karena $\\gcd(971, 10) = 1$, maka $a + b = 971 + 10 = 981$.',
          rubric: R4
        },
        {
          label: '2',
          marks: 4,
          prompt:
            'Terdapat sebuah persegi panjang yang dibagi menjadi kotak-kotak petak berukuran $2 \\times 3$. Setiap petak akan diwarnai hitam atau putih dengan syarat: setiap kolom wajib memiliki minimal satu petak berwarna hitam, dan setiap baris wajib memiliki minimal satu petak berwarna hitam sekaligus minimal satu petak berwarna putih. Selanjutnya, setiap petak yang berwarna putih akan diisi oleh salah satu angka dari himpunan $\\{3, 4, 5, 6, 7, 8\\}$ sedemikian sehingga jumlah total bilangan pada setiap barisnya bernilai tepat sama dengan $8$. Berapa banyak cara pewarnaan dan pengisian yang dapat dilakukan untuk memenuhi prosedur tersebut?',
          answer: '$24$',
          principle: 'Analisis kasus berdasarkan banyaknya petak putih per baris dan kaidah pencacahan.',
          solution:
            'Misalkan $w_1$ dan $w_2$ masing-masing menyatakan banyaknya petak putih pada baris pertama dan baris kedua. Karena setiap baris memiliki $3$ petak dan wajib memuat minimal $1$ petak hitam serta minimal $1$ petak putih, maka $w_1, w_2 \\in \\{1, 2\\}$.\nKarena setiap kolom wajib memiliki minimal $1$ petak hitam, tidak ada kolom yang kedua petaknya berwarna putih. Artinya, posisi kolom petak putih di baris $1$ dan baris $2$ harus saling lepas, sehingga $w_1 + w_2 \\le 3$.\nSelanjutnya, untuk mengisi petak putih dengan angka dari $\\{3, 4, 5, 6, 7, 8\\}$ agar jumlah per baris tepat $8$:\n- Baris dengan $1$ petak putih hanya memiliki $1$ cara pengisian (angka $8$).\n- Baris dengan $2$ petak putih memiliki $3$ cara pengisian terurut yang berjumlah $8$: $(3, 5), (4, 4), (5, 3)$.\nKasus pasangan $(w_1, w_2)$ yang memenuhi $w_1 + w_2 \\le 3$:\n1. $(w_1, w_2) = (1, 1)$: Pilih $1$ kolom untuk petak putih baris $1$ ($3$ cara) dan $1$ kolom berbeda untuk petak putih baris $2$ ($2$ cara), total $6$ pewarnaan. Pengisian angka memiliki $1 \\times 1 = 1$ cara. Total: $6 \\times 1 = 6$ cara.\n2. $(w_1, w_2) = (2, 1)$: Pilih $2$ kolom untuk petak putih baris $1$ ($\\binom{3}{2} = 3$ cara) dan petak putih baris $2$ wajib menempati $1$ kolom tersisa ($1$ cara), total $3$ pewarnaan. Pengisian angka memiliki $3 \\times 1 = 3$ cara. Total: $3 \\times 3 = 9$ cara.\n3. $(w_1, w_2) = (1, 2)$: Simetris dengan kasus $(2, 1)$, menghasilkan $3 \\times (1 \\times 3) = 9$ cara.\nJadi, total seluruh cara yang memenuhi adalah $6 + 9 + 9 = 24$.',
          rubric: R4
        },
        {
          label: '3',
          marks: 4,
          prompt:
            'Nilai minimum dari bentuk aljabar $x + 50y + \\frac{625}{xy^2}$ tercapai saat nilai $x = a$ dan $y = b$. Tentukan nilai dari ekspresi $a + b + ab$.',
          answer: '$51$',
          principle: 'Pertidaksamaan AM-GM empat suku dengan pemecahan suku untuk menyamakan derajat variabel.',
          solution:
            'Dengan asumsi $x, y > 0$ (agar ekspresi memiliki batas bawah), pecah $50y$ menjadi $25y + 25y$ sehingga pangkat $x$ dan $y$ saling menghilangkan saat dikalikan:\n$$x + 50y + \\frac{625}{xy^2} = x + 25y + 25y + \\frac{625}{xy^2}.$$\nBerdasarkan ketaksamaan AM-GM untuk empat bilangan positif:\n$$x + 25y + 25y + \\frac{625}{xy^2} \\ge 4\\sqrt[4]{x \\cdot 25y \\cdot 25y \\cdot \\frac{625}{xy^2}} = 4\\sqrt[4]{625^2} = 4 \\cdot 25 = 100.$$\nKesamaan terjadi jika dan hanya jika keempat suku bernilai sama:\n$$x = 25y = \\frac{625}{xy^2}.$$\nSubstitusi $x = 25y$ ke persamaan $25y = \\frac{625}{xy^2}$ menghasilkan $25y = \\frac{625}{25y^3} = \\frac{25}{y^3} \\implies y^4 = 1$. Karena $y > 0$, diperoleh $y = 1$ (yakni $b = 1$) dan $x = 25(1) = 25$ (yakni $a = 25$).\nJadi, $a + b + ab = 25 + 1 + 25(1) = 51$.',
          rubric: R4
        },
        {
          label: '4',
          marks: 4,
          prompt:
            'Terdapat sebuah segitiga sama sisi $ABC$. Titik $M$ dan $N$ terletak pada sisi $BC$ dengan $M \\ne N$. Sebuah titik $D$ berada di dalam segitiga $ABC$ sedemikian rupa sehingga segitiga $DMN$ juga membentuk segitiga sama sisi. Garis $BD$ memotong sisi $AC$ di titik $E$, dan garis $CD$ memotong sisi $AB$ di titik $F$. Jika diketahui panjang $MN = 3$, $BF = 4$, dan $CE = 8$, berapakah panjang sisi dari segitiga $ABC$?',
          answer: '$24$',
          principle: 'Kesejajaran sisi pada dua segitiga sama sisi dan kesebangunan segitiga.',
          solution:
            'Misalkan panjang sisi segitiga sama sisi $ABC$ adalah $s$. Dari dua titik $\\{M, N\\}$ pada segmen $BC$, misalkan $P$ adalah titik yang lebih dekat ke $B$ dan $Q$ adalah titik yang lebih dekat ke $C$, sehingga urutan titik pada sisi $BC$ adalah $B - P - Q - C$ dengan $PQ = MN = 3$ dan $DP = DQ = 3$.\nKarena $\\triangle ABC$ dan $\\triangle DPQ$ sama-sama segitiga sama sisi dengan alas sejajar pada $BC$ dan $D$ di sisi yang sama dengan $A$ terhadap $BC$:\n- $\\angle DPQ = 60^\\circ = \\angle ABC$, sehingga $DP \\parallel AB$ (yakni $DP \\parallel FB$).\n- $\\angle DQP = 60^\\circ = \\angle ACB$, sehingga $DQ \\parallel AC$ (yakni $DQ \\parallel EC$).\nKarena $D$ berada pada ruas garis $BE$ dan $CF$:\n1. Dari $DQ \\parallel EC$, diperoleh $\\triangle BDQ \\sim \\triangle BEC$, sehingga:\n$$\\frac{BQ}{BC} = \\frac{DQ}{CE} \\implies \\frac{BQ}{s} = \\frac{3}{8} \\implies BQ = \\frac{3}{8}s.$$\n2. Dari $DP \\parallel FB$, diperoleh $\\triangle CDP \\sim \\triangle CFB$, sehingga:\n$$\\frac{CP}{CB} = \\frac{DP}{BF} \\implies \\frac{CP}{s} = \\frac{3}{4} \\implies CP = \\frac{3}{4}s.$$\nPerhatikan bahwa pada urutan $B - P - Q - C$, ruas $PQ$ terhitung dua kali dalam $BQ + CP$, sebab $BQ = BP + PQ$ dan $CP = PQ + QC$ sementara $BP + PQ + QC = BC = s$. Maka:\n$$BQ + CP = s + PQ = s + 3.$$\nSubstitusikan ekspresi $BQ$ dan $CP$:\n$$\\frac{3}{8}s + \\frac{3}{4}s = s + 3 \\implies \\frac{9}{8}s = s + 3 \\implies \\frac{1}{8}s = 3 \\implies s = 24.$$\n(Periksa konsistensi: $BQ = 9, CP = 18 \\implies BP = 6, QC = 15$, dan $D$ benar berada di dalam $\\triangle ABC$.) Jadi, panjang sisi $\\triangle ABC$ adalah $24$.',
          rubric: R4
        },
        {
          label: '5',
          marks: 4,
          prompt:
            'Misalkan $S(n)$ didefinisikan sebagai jumlah dari semua faktor positif dari bilangan $n$. Tentukan jumlah dari semua nilai bilangan asli $n \\le 225$ sedemikian sehingga nilai $S(n)$ bernilai ganjil.',
          answer: '$2010$',
          principle: 'Sifat multiplikatif fungsi jumlah faktor $S(n)$ dan paritasnya: $S(n)$ ganjil jika dan hanya jika $n = t^2$ atau $n = 2t^2$.',
          solution:
            'Tuliskan faktorisasi prima $n = 2^k p_1^{a_1} p_2^{a_2} \\cdots p_r^{a_r}$ dengan $p_i$ prima ganjil berbeda. Karena fungsi $S$ bersifat multiplikatif:\n$$S(n) = (1 + 2 + \\dots + 2^k) \\prod_{i=1}^{r} (1 + p_i + p_i^2 + \\dots + p_i^{a_i}).$$\nFaktor pertama $1 + 2 + \\dots + 2^k = 2^{k+1} - 1$ selalu bernilai ganjil untuk semua $k \\ge 0$. Untuk setiap prima ganjil $p_i$, suku $1 + p_i + \\dots + p_i^{a_i}$ merupakan penjumlahan $(a_i + 1)$ bilangan ganjil, sehingga bernilai ganjil jika dan hanya jika $a_i + 1$ ganjil, yakni setiap $a_i$ genap.\nDengan demikian, $S(n)$ ganjil jika dan hanya jika $n$ berbentuk $t^2$ (bila $k$ genap) atau $2t^2$ (bila $k$ ganjil), untuk $t \\in \\mathbb{Z}^+$. Kedua bentuk ini saling lepas karena pangkat faktor $2$-nya berlainan paritas.\nUntuk $n \\le 225$:\n- Kasus $n = t^2 \\le 225$: $1 \\le t \\le 15$ (karena $15^2 = 225$). Jumlahnya:\n$$\\sum_{t=1}^{15} t^2 = \\frac{15 \\cdot 16 \\cdot 31}{6} = 5 \\cdot 8 \\cdot 31 = 1240.$$\n- Kasus $n = 2t^2 \\le 225 \\iff t^2 \\le 112$: $1 \\le t \\le 10$ (karena $10^2 = 100 \\le 112 < 121$). Jumlahnya:\n$$2\\sum_{t=1}^{10} t^2 = 2 \\cdot \\frac{10 \\cdot 11 \\cdot 21}{6} = 2 \\cdot 385 = 770.$$\nTotal seluruh nilai $n$ yang memenuhi adalah $1240 + 770 = 2010$.',
          rubric: R4
        },
        {
          label: '6',
          marks: 4,
          prompt:
            'Dua buah lingkaran yang masing-masing berpusat di $O_1$ dan $O_2$ saling berpotongan di dua titik yaitu $X$ dan $Y$. Sebuah garis singgung persekutuan luar menyinggung lingkaran $O_1$ di titik $A$ dan lingkaran $O_2$ di titik $B$, dengan posisi garis singgung tersebut lebih dekat terhadap titik potong $X$. Perpanjangan dari segmen garis hubung potong $XY$ memotong garis singgung persekutuan luar tersebut di titik $P$. Jika diketahui jari-jari lingkaran $O_1$ adalah $4$ satuan, jari-jari lingkaran $O_2$ adalah $8$ satuan, dan jarak antar titik pusat lingkaran $O_1O_2 = 5$ satuan, berapakah nilai dari luas segitiga $O_1PO_2$?',
          answer: '$9$',
          principle: 'Sumbu radikal dua lingkaran ($XY$ membagi dua sama panjang ruas garis singgung persekutuan $AB$) dan luas trapesium siku-siku.',
          solution:
            'Diketahui $r_1 = O_1A = 4$, $r_2 = O_2B = 8$, dan $O_1O_2 = 5$. Karena $|r_2 - r_1| = 4 < 5 < 12 = r_1 + r_2$, kedua lingkaran berpotongan dan memiliki garis singgung persekutuan luar $AB$ dengan panjang:\n$$AB = \\sqrt{O_1O_2^2 - (r_2 - r_1)^2} = \\sqrt{5^2 - (8 - 4)^2} = \\sqrt{25 - 16} = 3.$$\nGaris $XY$ adalah sumbu radikal kedua lingkaran, sehingga titik $P$ pada perpanjangan $XY$ memiliki kuasa titik yang sama terhadap kedua lingkaran:\n$$PA^2 = PX \\cdot PY = PB^2 \\implies PA = PB.$$\nKarena $P$ berada pada ruas $AB$, titik $P$ adalah titik tengah $AB$, sehingga $PA = PB = \\frac{3}{2}$.\nSegiempat $O_1ABO_2$ adalah trapesium siku-siku ($O_1A \\perp AB$ dan $O_2B \\perp AB$) dengan luas:\n$$[O_1ABO_2] = \\frac{O_1A + O_2B}{2} \\cdot AB = \\frac{4 + 8}{2} \\cdot 3 = 18.$$\nLuas kedua segitiga siku-siku $\\triangle O_1AP$ dan $\\triangle O_2BP$ adalah:\n$$[\\triangle O_1AP] = \\frac{1}{2} \\cdot 4 \\cdot \\frac{3}{2} = 3, \\qquad [\\triangle O_2BP] = \\frac{1}{2} \\cdot 8 \\cdot \\frac{3}{2} = 6.$$\nJadi, luas segitiga $O_1PO_2$ adalah:\n$$[\\triangle O_1PO_2] = [O_1ABO_2] - [\\triangle O_1AP] - [\\triangle O_2BP] = 18 - 3 - 6 = 9.$$',
          rubric: R4
        },
        {
          label: '8',
          marks: 4,
          prompt:
            'Terdapat bilangan bulat positif $m$ terkecil yang memenuhi persamaan koefisien binomial berikut:\n$$16\\binom{m}{k} + 3\\binom{n}{k+1} = 48z$$\nuntuk setiap nilai $m, n, k, z$ bilangan bulat positif. Tentukan nilai terkecil yang mungkin dari $z$.',
          answer: '$6$',
          principle: 'Keterbagian koefisien binomial oleh $3$ dan $16$ serta analisis batas bawah kombinasi.',
          solution:
            'Dengan syarat kombinatorial $m \\ge k \\ge 1$ dan $n \\ge k + 1$ agar kedua koefisien binomial bernilai positif, bagi kedua ruas persamaan dengan $48$:\n$$z = \\frac{1}{3}\\binom{m}{k} + \\frac{1}{16}\\binom{n}{k+1}.$$\nKarena $\\gcd(16, 3) = 1$, kedua suku di ruas kanan harus berupa bilangan bulat positif, yakni $3 \\mid \\binom{m}{k}$ dan $16 \\mid \\binom{n}{k+1}$, sehingga $\\frac{1}{3}\\binom{m}{k} \\ge 1$ dan $\\frac{1}{16}\\binom{n}{k+1} \\ge 1$.\nAndaikan $z \\le 5$, maka $\\frac{1}{16}\\binom{n}{k+1} \\in \\{1, 2, 3, 4\\}$, artinya $\\binom{n}{k+1} \\in \\{16, 32, 48, 64\\}$. Misalkan $r = \\min(k + 1, n - k - 1)$:\n- Jika $r \\ge 4$, maka $n \\ge 2r \\ge 8$ dan $\\binom{n}{k+1} \\ge \\binom{8}{4} = 70 > 64$, tidak mungkin.\n- Jika $r = 3$, nilai $\\binom{n}{3}$ untuk $n \\ge 6$ adalah $20, 35, 56, 84, \\dots$, tidak ada yang termasuk $\\{16, 32, 48, 64\\}$.\n- Jika $r = 2$, maka $\\frac{n(n-1)}{2} \\in \\{16, 32, 48, 64\\} \\iff n(n-1) \\in \\{32, 64, 96, 128\\}$, yang tidak memiliki solusi bulat (sebab $5\\cdot 6=30, 6\\cdot 7=42, 7\\cdot 8=56, 8\\cdot 9=72, 9\\cdot 10=90, 10\\cdot 11=110, 11\\cdot 12=132$).\n- Jika $r = 1$, karena $k + 1 \\ge 2$, wajib $n - k - 1 = 1 \\implies k = n - 2$ dengan $n \\in \\{16, 32, 48, 64\\}$.\n  - Untuk $n = 16$, diperoleh $k = 14$. Karena $\\binom{14}{14} = 1$ tidak habis dibagi $3$, nilai $m$ terkecil adalah $m = 15$ dengan $\\binom{15}{14} = 15$, sehingga $z \\ge \\frac{15}{3} + \\frac{16}{16} = 5 + 1 = 6$.\n  - Untuk $n \\in \\{32, 48, 64\\}$, diperoleh $k = n - 2 \\ge 30$ dan $m \\ge k + 1 \\ge 31$ (sebab $\\binom{k}{k} = 1$), sehingga $\\frac{1}{3}\\binom{m}{k} \\ge \\frac{31}{3} > 10$, akibatnya $z > 10$.\nNilai $z = 6$ tercapai pada $(m, n, k, z) = (15, 16, 14, 6)$, yakni $16\\binom{15}{14} + 3\\binom{16}{15} = 16(15) + 3(16) = 288 = 48 \\cdot 6$. Jadi, nilai terkecil $z$ adalah $6$.',
          rubric: R4
        },
        {
          label: '9',
          marks: 4,
          prompt:
            'Terdapat sebuah barisan himpunan bilangan rasional yang terdiri dari suku-suku berikut:\n$$-\\frac{1}{567}, -\\frac{1}{566}, -\\frac{1}{565}, \\dots, -\\frac{1}{2}, \\frac{1}{2}, \\dots, \\frac{1}{565}, \\frac{1}{566}, \\frac{1}{567}$$\nPada setiap langkah permainan, Andi menghapus dua buah bilangan sebarang dari barisan, misalkan $x$ dan $y$, kemudian mengganti kedua bilangan tersebut dengan satu bilangan baru bernilai $(x + y - xy)$. Setelah serangkaian langkah dilakukan berulang kali, pada akhirnya hanya akan tersisa tepat satu bilangan tunggal. Jika bilangan terakhir tersebut dapat dinyatakan dalam bentuk pecahan paling sederhana $\\frac{a}{b}$ dengan $a$ dan $b$ merupakan bilangan asli yang saling relatif prima, maka tentukan nilai dari $a + b$.',
          answer: '$850$',
          principle: 'Invarian perkalian $\\prod (1 - x)$ terhadap operasi $x * y = x + y - xy$ dan produk teleskopik.',
          solution:
            'Misalkan $z = x + y - xy$. Perhatikan identitas:\n$$1 - z = 1 - (x + y - xy) = (1 - x)(1 - y).$$\nAkibatnya, nilai hasil kali $P = \\prod_{x} (1 - x)$ dari seluruh elemen yang masih berada pada barisan bersifat invarian (tetap sama) pada setiap langkah permainan. Jika $L$ adalah bilangan tunggal yang tersisa di akhir, maka $1 - L$ sama dengan hasil kali awal:\n$$1 - L = \\prod_{k=2}^{567} \\left(1 - \\left(-\\frac{1}{k}\\right)\\right)\\left(1 - \\frac{1}{k}\\right) = \\prod_{k=2}^{567} \\left(1 - \\frac{1}{k^2}\\right) = \\prod_{k=2}^{567} \\frac{(k - 1)(k + 1)}{k^2}.$$\nPisahkan menjadi dua produk teleskopik:\n$$\\left(\\prod_{k=2}^{567} \\frac{k - 1}{k}\\right)\\left(\\prod_{k=2}^{567} \\frac{k + 1}{k}\\right) = \\left(\\frac{1}{2} \\cdot \\frac{2}{3} \\cdots \\frac{566}{567}\\right)\\left(\\frac{3}{2} \\cdot \\frac{4}{3} \\cdots \\frac{568}{567}\\right) = \\frac{1}{567} \\cdot \\frac{568}{2} = \\frac{284}{567}.$$\nMaka bilangan terakhirnya adalah:\n$$L = 1 - \\frac{284}{567} = \\frac{283}{567}.$$\nKarena $567 = 2 \\cdot 283 + 1$, maka $\\gcd(283, 567) = 1$, sehingga $a = 283$ dan $b = 567$. Jadi, $a + b = 283 + 567 = 850$.',
          rubric: R4
        },
        {
          label: '10',
          marks: 4,
          prompt:
            'Tentukan nilai dari jumlah satu digit tepat di sebelah kiri koma (satuan) dan satu digit tepat di sebelah kanan koma (sepersepuluhan) dari bentuk ekspresi perpangkatan berikut:\n$$(6 + \\sqrt{26})^{18}$$',
          answer: '$11$',
          principle: 'Pasangan konjugat aljabar, rekurensi linear modulo $10$, dan taksiran pertidaksamaan rasional eksak.',
          solution:
            'Misalkan $\\alpha = 6 + \\sqrt{26}$ dan konjugatnya $\\beta = 6 - \\sqrt{26}$, sehingga $\\alpha + \\beta = 12$ dan $\\alpha\\beta = 36 - 26 = 10$. Definisikan $A_n = \\alpha^n + \\beta^n$ untuk $n \\ge 0$. Diperoleh $A_0 = 2$, $A_1 = 12$, dan untuk $n \\ge 2$ berlaku relasi rekursif:\n$$A_n = (\\alpha + \\beta)A_{n-1} - \\alpha\\beta A_{n-2} = 12A_{n-1} - 10A_{n-2}.$$\nDengan induksi, setiap $A_n$ adalah bilangan bulat. Lebih lanjut, dalam modulo $10$, suku $10A_{n-2}$ hilang sehingga $A_n \\equiv 2A_{n-1} \\pmod{10}$ untuk $n \\ge 2$. Karena $A_1 = 12 \\equiv 2 \\pmod{10}$, maka $A_n \\equiv 2^n \\pmod{10}$ untuk semua $n \\ge 1$. Untuk $n = 18$, $18 = 4 \\cdot 4 + 2$, sehingga:\n$$A_{18} \\equiv 2^{18} \\equiv 2^2 = 4 \\pmod{10}.$$\nSekarang kita tentukan letak $\\beta^{18}$ secara eksak. Karena $5^2 = 25 < 26 < \\frac{2601}{100} = \\left(\\frac{51}{10}\\right)^2$, berlaku $5 < \\sqrt{26} < \\frac{51}{10}$, sehingga:\n$$\\frac{11}{10} < \\frac{\\alpha}{10} = \\frac{6 + \\sqrt{26}}{10} < \\frac{111}{100}.$$\nPerhatikan $\\beta = \\frac{10}{\\alpha} = \\left(\\frac{\\alpha}{10}\\right)^{-1}$. Gunakan taksiran rasional eksak:\n- Batas bawah $\\left(\\frac{\\alpha}{10}\\right)^{18}$: $\\left(\\frac{11}{10}\\right)^6 = \\frac{1771561}{1000000} > \\frac{1750000}{1000000} = \\frac{7}{4}$, maka $\\left(\\frac{\\alpha}{10}\\right)^{18} > \\left(\\frac{7}{4}\\right)^3 = \\frac{343}{64} > \\frac{320}{64} = 5$. Jadi $\\beta^{18} < \\frac{1}{5} = \\frac{2}{10}$.\n- Batas atas $\\left(\\frac{\\alpha}{10}\\right)^{18}$: $\\left(\\frac{111}{100}\\right)^2 = \\frac{12321}{10000} < \\frac{12500}{10000} = \\frac{5}{4}$ dan $\\left(\\frac{5}{4}\\right)^3 = \\frac{125}{64} < 2$, maka $\\left(\\frac{\\alpha}{10}\\right)^{18} < \\left(\\frac{5}{4}\\right)^9 < 2^3 = 8 < 10$. Jadi $\\beta^{18} > \\frac{1}{10}$.\nKarena $\\frac{1}{10} < \\beta^{18} < \\frac{2}{10}$ dan $\\alpha^{18} = A_{18} - \\beta^{18}$, diperoleh:\n$$(A_{18} - 1) + \\frac{8}{10} < (6 + \\sqrt{26})^{18} < (A_{18} - 1) + \\frac{9}{10}.$$\nDengan demikian, digit satuan dari $(6 + \\sqrt{26})^{18}$ adalah digit satuan dari $(A_{18} - 1)$, yakni $4 - 1 = 3$, dan digit sepersepuluhannya adalah $8$. Jadi, jumlah kedua digit tersebut adalah $3 + 8 = 11$.',
          rubric: R4
        }
      ]
    }
  ]
};
