/**
 * Paket Soal Terstruktur: OSN-K Matematika SMP 2025 (25 soal pilihan ganda)
 * Sumber: Naskah OSN-K Matematika SMP 2025 (25 soal asli, nomor 1-25).
 * Seluruh gambar diagram pada soal (2, 3, 11, 13, 16, 21, 24) dimuat sebagai WebP pada public/papers/osnk-mat-smp-2025/.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-mat-smp-2025',
  slug: 'osnk-matematika-smp-2025',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'OSN-K Matematika SMP 2025: aljabar, teori bilangan, geometri, kombinatorika, dan statistika',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp8-bab2-teorema-pythagoras',
    'smp8-bab6-statistika',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SMP 2025',
  totalMarks: 25,
  instructions:
    'Kerjakan seluruh 25 soal pilihan ganda OSN-K Matematika SMP 2025. Pilihlah satu jawaban yang paling tepat untuk setiap soal. Setiap jawaban benar bernilai 1 poin (total 25 poin).',
  source: {
    org: 'OSN-K',
    file: 'OSK SMP 2025.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 25,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (25 soal pilihan ganda, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Suatu data terdiri dari $35$ bilangan bulat positif. Bilangan terbesar adalah $29$ dan mediannya adalah $22$. Misalkan rata-rata terkecil yang mungkin dari data tersebut adalah $x$, dan rata-rata terbesar yang mungkin adalah $y$. Nilai $x + y$ adalah ....\n\nA. $40{,}4$\nB. $37{,}4$\nC. $36{,}4$\nD. $25{,}4$',
          answer: 'B. $37{,}4$',
          principle:
            'Nilai ekstrem rata-rata data terurut dengan median dan maksimum tetap dicapai saat data lain dibuat sekecil atau sebesar mungkin.',
          solution:
            'Urutkan ke-$35$ bilangan bulat positif dari yang terkecil hingga terbesar: $a_1 \\le a_2 \\le \\dots \\le a_{35}$ dengan median $a_{18} = 22$ dan nilai maksimum $a_{35} = 29$.\n- **Rata-rata terkecil ($x$):** dicapai saat $a_1 = \\dots = a_{17} = 1$ (bilangan bulat positif terkecil) dan $a_{19} = \\dots = a_{34} = 22$:\n$$x = \\frac{17 \\cdot 1 + 17 \\cdot 22 + 29}{35} = \\frac{17 + 374 + 29}{35} = \\frac{420}{35}.$$\n- **Rata-rata terbesar ($y$):** dicapai saat $a_1 = \\dots = a_{17} = 22$ dan $a_{19} = \\dots = a_{34} = 29$:\n$$y = \\frac{18 \\cdot 22 + 17 \\cdot 29}{35} = \\frac{396 + 493}{35} = \\frac{889}{35}.$$\nJadi,\n$$x + y = \\frac{420 + 889}{35} = \\frac{1309}{35} = \\frac{187}{5} = 37{,}4.$$',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-mat-smp-2025/fig-2.webp',
              alt: 'Jajargenjang ABCD dengan garis tinggi DE, titik F dan H pada CE, FK sejajar DE, serta daerah berarsir di dalam segitiga ECD',
              caption: 'Diagram jajargenjang ABCD dan daerah berwarna pada soal nomor 2.'
            }
          ],
          prompt:
            'Jajargenjang $ABCD$ memiliki keliling $106\\text{ cm}$, dengan panjang sisi $AB = (3x + 1)\\text{ cm}$ dan sisi $BC = (5x - 20)\\text{ cm}$. Titik $E$ pada sisi $AB$ sehingga $DE$ tegak lurus $AB$. Titik $F$ dan $H$ pada ruas garis $CE$. Titik $K$ pada sisi $AB$ sehingga $FK$ sejajar $DE$. Titik $G$ berada di dalam segitiga $ECD$ sehingga garis $GF$ tegak lurus $GH$ dan $GF$ sejajar $DE$.\n\nJika panjang $DE = (3x - 7)\\text{ cm}$, $HC = 2 \\times EF$ dan $FK = 5\\text{ cm}$, luas daerah bangun datar yang berwarna adalah ....\n\nA. $122{,}5$\nB. $185$\nC. $262{,}5$\nD. $280$',
          answer: 'C. $262{,}5$',
          principle:
            'Gunakan keliling jajargenjang untuk menentukan $x$, lalu manfaatkan kesebangunan segitiga siku-siku dan kurangkan luas $\\triangle FGH$ dari luas $\\triangle CDE$.',
          solution:
            'Dari keliling jajargenjang $ABCD$:\n$$2(AB + BC) = 106 \\implies (3x + 1) + (5x - 20) = 53 \\implies 8x = 72 \\implies x = 9.$$\nSubstitusikan $x = 9$:\n$$AB = CD = 3(9) + 1 = 28\\text{ cm}, \\qquad DE = 3(9) - 7 = 20\\text{ cm}.$$\nKarena $FK \\parallel DE$ dan $AB \\parallel CD$, maka $\\triangle EFK \\sim \\triangle CED$, sehingga\n$$\\frac{EK}{FK} = \\frac{CD}{DE} \\implies \\frac{EK}{5} = \\frac{28}{20} \\implies EK = 7\\text{ cm}.$$\nProyeksikan titik $H$ secara tegak lurus ke $CD$ di $H\'$. Karena $HC = 2 \\cdot EF$ dan $\\triangle CHH\' \\sim \\triangle EFK$, diperoleh\n$$CH\' = 2 \\cdot EK = 14\\text{ cm}, \\qquad HH\' = 2 \\cdot FK = 10\\text{ cm}.$$\nKarena $DE \\perp CD$ dan $GF \\perp GH$ dengan $GF \\parallel DE$, maka $GH \\parallel CD$. Akibatnya,\n$$FG = DE - FK - HH\' = 20 - 5 - 10 = 5\\text{ cm},$$\n$$GH = CD - EK - CH\' = 28 - 7 - 14 = 7\\text{ cm}.$$\nLuas daerah berwarna adalah luas $\\triangle CDE$ dikurangi luas $\\triangle FGH$:\n$$[CDE] - [FGH] = \\frac{28 \\times 20}{2} - \\frac{7 \\times 5}{2} = 280 - 17{,}5 = 262{,}5\\text{ cm}^2.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-mat-smp-2025/fig-3.webp',
              alt: 'Lingkaran berpusat di O dengan diameter AC dan segitiga siku-siku ABC di mana sudut ACB bernilai 60 derajat',
              caption: 'Diagram lingkaran berpusat di O dengan diameter AC pada soal nomor 3.'
            }
          ],
          prompt:
            'Dalam suatu lingkaran berpusat di $O$ berjari-jari $7$, dibuat segitiga $ABC$ dengan titik $A$, $B$, dan $C$ terletak pada lingkaran, $AC$ merupakan diameter lingkaran dan $\\angle ACB = 60^\\circ$. Melalui $C$ dan titik tengah $AB$, dibuat garis memotong lingkaran di titik $D$.\n\nPanjang $CD$ sama dengan ....\n\nA. $3\\sqrt{7}$\nB. $5\\sqrt{7}$\nC. $6\\sqrt{7}$\nD. $7\\sqrt{7}$',
          answer: 'B. $5\\sqrt{7}$',
          principle:
            'Sudut keliling menghadap diameter bernilai $90^\\circ$, teorema Pythagoras pada segitiga siku-siku istimewa $30^\\circ\\text{-}60^\\circ\\text{-}90^\\circ$, dan kesebangunan dua tali busur berpotongan (kuasa titik).',
          solution:
            'Karena $AC$ adalah diameter lingkaran berjari-jari $7$, maka $AC = 14$ dan sudut keliling $\\angle ABC = 90^\\circ$. Pada segitiga siku-siku $ABC$ dengan $\\angle ACB = 60^\\circ$, perbandingan sisinya $BC : AC : AB = 1 : 2 : \\sqrt{3}$, sehingga\n$$BC = 7, \\qquad AB = 7\\sqrt{3}.$$\nMisalkan $P$ titik tengah $AB$, maka $AP = BP = \\frac{7}{2}\\sqrt{3}$. Pada $\\triangle PBC$ yang siku-siku di $B$:\n$$PC = \\sqrt{PB^2 + BC^2} = \\sqrt{\\left(\\frac{7}{2}\\sqrt{3}\\right)^2 + 7^2} = 7\\sqrt{\\frac{3}{4} + 1} = \\frac{7}{2}\\sqrt{7}.$$\nTali busur $AB$ dan $CD$ berpotongan di $P$. Karena $\\angle DAB = \\angle DCB$ (menghadap busur $BD$) dan $\\angle APD = \\angle CPB$, maka $\\triangle ADP \\sim \\triangle CBP$, sehingga\n$$DP \\cdot PC = AP \\cdot BP \\implies DP \\cdot \\frac{7}{2}\\sqrt{7} = \\left(\\frac{7}{2}\\sqrt{3}\\right)^2 = \\frac{147}{4} \\implies DP = \\frac{3}{2}\\sqrt{7}.$$\nJadi,\n$$CD = CP + DP = \\frac{7}{2}\\sqrt{7} + \\frac{3}{2}\\sqrt{7} = 5\\sqrt{7}.$$',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Diketahui $p$ dan $q$ adalah bilangan bulat positif dengan:\n$$p - 1 = (k^2 - 4k - 3)^2 \\quad \\text{dan} \\quad q - 1 = (k^2 - 4k - 5)^2.$$\nJika $pq$ adalah bilangan prima, maka nilai terbesar yang mungkin bagi $p^2 + q^2$ adalah ....\n\nA. $10$\nB. $26$\nC. $122$\nD. $1370$',
          answer: 'B. $26$',
          principle:
            'Hasil kali dua bilangan bulat positif $pq$ bernilai prima hanya jika salah satunya bernilai $1$ dan yang lain bilangan prima.',
          solution:
            'Karena $p, q$ bilangan bulat positif dan $pq$ prima, maka tepat satu di antara $p$ atau $q$ harus sama dengan $1$, sedangkan lainnya adalah bilangan prima. Misalkan $m = k^2 - 4k - 3 = (k - 2)^2 - 7 \\ge -7$, sehingga $p - 1 = m^2$ dan $q - 1 = (m - 2)^2$.\n- **Kasus 1 ($p = 1$):** $m^2 = 0 \\implies m = 0$. Maka $q = 1 + (0 - 2)^2 = 5$ (prima), dan $p^2 + q^2 = 1^2 + 5^2 = 26$.\n- **Kasus 2 ($q = 1$):** $(m - 2)^2 = 0 \\implies m = 2$. Maka $p = 1 + 2^2 = 5$ (prima), dan $p^2 + q^2 = 5^2 + 1^2 = 26$.\nKedua kasus memenuhi $m \\ge -7$ dan menghasilkan nilai yang sama, yaitu $26$.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Jika\n$$a = \\frac{(-1)^4 \\times 4 + (-1)^3 \\times 3 + (-1)^2 \\times 2 + (-1)^1 \\times 1}{2^3},$$\nmaka nilai dari\n$$\\frac{a + \\sqrt{a}}{a - \\sqrt{a}} = \\ldots$$\n\nA. $-3$\nB. $-\\frac{1}{3}$\nC. $\\frac{1}{3}$\nD. $3$',
          answer: 'A. $-3$',
          principle: 'Hitung nilai $a$ terlebih dahulu dengan memperhatikan pangkat genap dan ganjil dari $-1$.',
          solution:
            'Hitung pembilang dan penyebut $a$:\n$$a = \\frac{1 \\cdot 4 + (-1) \\cdot 3 + 1 \\cdot 2 + (-1) \\cdot 1}{8} = \\frac{4 - 3 + 2 - 1}{8} = \\frac{2}{8} = \\frac{1}{4}.$$\nMaka $\\sqrt{a} = \\frac{1}{2}$, sehingga\n$$\\frac{a + \\sqrt{a}}{a - \\sqrt{a}} = \\frac{\\frac{1}{4} + \\frac{1}{2}}{\\frac{1}{4} - \\frac{1}{2}} = \\frac{\\frac{3}{4}}{-\\frac{1}{4}} = -3.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Tiga bersaudara Ana, Bona, dan Cinta mendapatkan uang saku bulanan mereka dalam bentuk uang pecahan $\\text{Rp}5.000$, $\\text{Rp}10.000$, serta $\\text{Rp}20.000$ dengan pembagian sebagai berikut:\n- Ana mendapatkan $x$ lembar $\\text{Rp}5.000$, $y$ lembar $\\text{Rp}10.000$, serta $z$ lembar $\\text{Rp}20.000$.\n- Bona mendapat $y$ lembar $\\text{Rp}5.000$, $z$ lembar $\\text{Rp}10.000$, serta $x$ lembar $\\text{Rp}20.000$.\n- Cinta mendapat $z$ lembar $\\text{Rp}5.000$, $x$ lembar $\\text{Rp}10.000$, serta $y$ lembar $\\text{Rp}20.000$.\n\nDiketahui total uang saku ketiganya adalah $\\text{Rp}700.000$, maka pernyataan benar tentang uang saku mereka yang dapat disimpulkan dari informasi tersebut adalah ....\n\nA. Ana mendapatkan uang saku sejumlah tepat $20$ lembar.\nB. Bona mendapatkan uang saku dengan nilai terbesar.\nC. Cinta mendapatkan uang saku dengan nilai terkecil.\nD. Ana, Bona, dan Cinta mendapatkan uang saku lembaran $\\text{Rp}10.000$ yang sama banyaknya.',
          answer: 'A. Ana mendapatkan uang saku sejumlah tepat $20$ lembar.',
          principle: 'Jumlahkan ketiga persamaan secara simetris untuk menentukan $x + y + z$.',
          solution:
            'Setiap variabel $x, y, z$ muncul tepat satu kali pada masing-masing pecahan $\\text{Rp}5.000$, $\\text{Rp}10.000$, dan $\\text{Rp}20.000$ ketika uang saku ketiganya dijumlahkan. Oleh karena itu,\n$$(5.000 + 10.000 + 20.000)(x + y + z) = 700.000$$\n$$35.000(x + y + z) = 700.000 \\implies x + y + z = 20.$$\nBanyak lembar uang yang diterima Ana adalah $x + y + z = 20$ lembar. Adapun perbandingan besar nilai uang maupun banyak lembar pecahan $\\text{Rp}10.000$ bergantung pada nilai masing-masing $x, y, z$ sehingga tidak dapat ditentukan secara tunggal.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Perhatikan barisan bilangan berikut:\n$$1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, \\dots$$\nSuku-suku barisan tersebut diperoleh dari semua bilangan bulat positif dengan menghilangkan semua kelipatan $5$. Suku ke-$2025$ dari barisan tersebut adalah ....\n\nA. $2430$\nB. $2530$\nC. $2531$\nD. $2532$',
          answer: 'C. $2531$',
          principle: 'Kelompokkan bilangan ke dalam blok berukuran $5$ yang masing-masing menyisakan $4$ suku.',
          solution:
            'Setiap blok lima bilangan berurutan $(5k+1, 5k+2, 5k+3, 5k+4, 5k+5)$ menyisakan tepat $4$ suku setelah kelipatan $5$ dihapus.\nBagikan $2025$ dengan $4$:\n$$2025 = 506 \\times 4 + 1.$$\nSebanyak $506$ blok penuh mencakup $506 \\times 5 = 2530$ bilangan pertama, dan suku ke-$2025$ adalah bilangan pertama pada blok berikutnya, yaitu\n$$2530 + 1 = 2531.$$',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Suatu perusahaan pembuat baterai mobil listrik sedang melakukan *control kualitas* terhadap $2000$ baterai hasil produksinya. Ada $3$ hasil pengecekan kerusakan pada baterai yang dicek, yaitu kerusakan pelat penutup, kerusakan elektrolit, dan kerusakan terminal. Hasil pengecekan kerusakan dirangkum pada tabel berikut.\n\n| No. | Jenis Kerusakan | Banyak Baterai yang Rusak |\n| :---: | :--- | :---: |\n| 1 | Pelat Penutup | 30 |\n| 2 | Elektrolit | 50 |\n| 3 | Terminal | 40 |\n| 4 | Terminal dan Pelat Penutup | 10 |\n| 5 | Pelat Penutup dan Elektrolit | 19 |\n| 6 | Terminal dan Elektrolit | 15 |\n| 7 | Pelat Penutup, Elektrolit, dan Terminal | 5 |\n\nBaterai yang tidak mengalami kerusakan sama sekali dikatakan memenuhi standar. Berdasarkan data tersebut, banyaknya baterai yang memenuhi standar adalah ....\n\nA. $1804$\nB. $1880$\nC. $1919$\nD. $1920$',
          answer: 'C. $1919$',
          principle:
            'Gunakan prinsip inklusi-eksklusi untuk tiga himpunan: $|P \\cup E \\cup T| = |P| + |E| + |T| - |P \\cap E| - |P \\cap T| - |E \\cap T| + |P \\cap E \\cap T|$.',
          solution:
            'Misalkan $P$, $E$, dan $T$ berturut-turut menyatakan himpunan baterai dengan kerusakan pelat penutup, elektrolit, dan terminal. Banyak baterai yang mengalami minimal satu kerusakan adalah\n$$|P \\cup E \\cup T| = 30 + 50 + 40 - 19 - 10 - 15 + 5 = 81.$$\nBanyak baterai yang tidak mengalami kerusakan sama sekali (memenuhi standar) adalah\n$$2000 - 81 = 1919.$$',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Suatu pasangan terurut bilangan bulat $(x, y)$ dengan $-5 \\le x \\le 5$ dan $-5 \\le y \\le 5$, yang memenuhi nilai\n$$10 \\le x^2 + y^2 \\le 30$$\nada sebanyak ....\n\nA. $10$\nB. $25$\nC. $34$\nD. $68$',
          answer: 'D. $68$',
          principle: 'Cacah secara sistematis berdasarkan nilai $x \\in \\{-5, \\dots, 5\\}$ menggunakan simetri $|x|$ dan $|y|$.',
          solution:
            'Untuk setiap nilai $x \\in \\{-5, \\dots, 5\\}$, tentukan banyak nilai bulat $y \\in \\{-5, \\dots, 5\\}$ yang memenuhi $10 - x^2 \\le y^2 \\le 30 - x^2$:\n- $|x| = 0$ ($1$ nilai $x$): $10 \\le y^2 \\le 30 \\implies |y| \\in \\{4, 5\\}$ ($4$ nilai $y$) $\\to 1 \\times 4 = 4$.\n- $|x| = 1$ ($2$ nilai $x$): $9 \\le y^2 \\le 29 \\implies |y| \\in \\{3, 4, 5\\}$ ($6$ nilai $y$) $\\to 2 \\times 6 = 12$.\n- $|x| = 2$ ($2$ nilai $x$): $6 \\le y^2 \\le 26 \\implies |y| \\in \\{3, 4, 5\\}$ ($6$ nilai $y$) $\\to 2 \\times 6 = 12$.\n- $|x| = 3$ ($2$ nilai $x$): $1 \\le y^2 \\le 21 \\implies |y| \\in \\{1, 2, 3, 4\\}$ ($8$ nilai $y$) $\\to 2 \\times 8 = 16$.\n- $|x| = 4$ ($2$ nilai $x$): $-6 \\le y^2 \\le 14 \\implies y \\in \\{-3, -2, -1, 0, 1, 2, 3\\}$ ($7$ nilai $y$) $\\to 2 \\times 7 = 14$.\n- $|x| = 5$ ($2$ nilai $x$): $-15 \\le y^2 \\le 5 \\implies y \\in \\{-2, -1, 0, 1, 2\\}$ ($5$ nilai $y$) $\\to 2 \\times 5 = 10$.\n\nTotal pasangan terurut yang memenuhi adalah\n$$4 + 12 + 12 + 16 + 14 + 10 = 68.$$',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Suatu objek di titik $(x, y)$ hanya dapat bergerak ke titik $(x + 1, y)$, $(x, y + 1)$, atau $(x + 1, y + 1)$. Banyaknya jalur berbeda yang dapat dilalui objek yang bergerak dari titik $(0, 0)$ ke titik $(5, 5)$ adalah ....\n\nA. $25$\nB. $252$\nC. $1683$\nD. $3125$',
          answer: 'C. $1683$',
          principle:
            'Klasifikasikan jalur berdasarkan banyaknya langkah diagonal $k$ dari $(1, 1)$, lalu jumlahkan permutasi langkah kanan, atas, dan diagonal.',
          solution:
            'Misalkan dalam suatu perjalanan terdapat $k$ langkah diagonal $(+1, +1)$, dengan $0 \\le k \\le 5$. Sisa perpindahan ke kanan $(+1, 0)$ dan ke atas $(0, +1)$ masing-masing sebanyak $5 - k$ langkah. Total langkah seluruhnya adalah $k + 2(5 - k) = 10 - k$.\nBanyaknya cara menyusun $k$ langkah diagonal, $5 - k$ langkah kanan, dan $5 - k$ langkah atas adalah\n$$\\binom{10 - k}{k} \\binom{10 - 2k}{5 - k} = \\binom{5}{k} \\binom{10 - k}{5}.$$\nJumlahkan untuk $k = 0, 1, 2, 3, 4, 5$:\n- $k = 0$: $\\binom{5}{0}\\binom{10}{5} = 1 \\times 252 = 252$\n- $k = 1$: $\\binom{5}{1}\\binom{9}{5} = 5 \\times 126 = 630$\n- $k = 2$: $\\binom{5}{2}\\binom{8}{5} = 10 \\times 56 = 560$\n- $k = 3$: $\\binom{5}{3}\\binom{7}{5} = 10 \\times 21 = 210$\n- $k = 4$: $\\binom{5}{4}\\binom{6}{5} = 5 \\times 6 = 30$\n- $k = 5$: $\\binom{5}{5}\\binom{5}{5} = 1 \\times 1 = 1$\n\nTotal seluruh jalur adalah\n$$252 + 630 + 560 + 210 + 30 + 1 = 1683.$$',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-mat-smp-2025/fig-11.webp',
              alt: 'Ilustrasi dua lembar kertas yang ditumpuk dan dilipat menjadi buku dengan penomoran halaman berurutan',
              caption: 'Ilustrasi pelipatan dua lembar kertas menjadi buku pada soal nomor 11.'
            }
          ],
          prompt:
            'Sejumlah kertas berbentuk persegi panjang ditumpuk kemudian dilipat dua sekaligus untuk membentuk buku. Buku yang terbentuk diberi nomor halaman berurutan mulai dari $1, 2, 3,$ dan seterusnya hingga akhir. Jika salah satu lembar kertas dari buku tersebut diambil, jumlah keempat nomor halamannya adalah $122$. Banyak kertas yang digunakan untuk menyusun buku tersebut adalah .... lembar.\n\nA. $10$\nB. $12$\nC. $15$\nD. $60$\n\n*Catatan:* Ilustrasi pada gambar menunjukkan buku yang menggunakan $2$ lembar kertas; jumlah nomor halaman untuk lembar kertas berwarna biru muda adalah $3 + 4 + 5 + 6 = 18$.',
          answer: 'C. $15$',
          principle:
            'Setiap lembar kertas memuat dua halaman berpasangan dari depan dan dua halaman berpasangan dari belakang yang jumlahnya konstan.',
          solution:
            'Misalkan buku disusun dari $N$ lembar kertas, sehingga terdapat $4N$ halaman bernomor $1$ sampai $4N$.\nPada sebarang satu lembar kertas, jika nomor halaman di bagian kiri luar dan kiri dalam adalah $k$ dan $k + 1$, maka pasangan nomor halaman di bagian kanan dalam dan kanan luarnya adalah $4N - k$ dan $4N - k + 1$.\nJumlah keempat nomor halaman pada satu lembar kertas tersebut selalu tetap, yaitu\n$$k + (k + 1) + (4N - k) + (4N - k + 1) = 8N + 2.$$\nDiketahui jumlahnya $122$, maka\n$$8N + 2 = 122 \\implies 8N = 120 \\implies N = 15.$$',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Jika dua bilangan bulat positif memiliki jumlah $40$ dan KPK $48$, maka FPB dari kedua bilangan tersebut adalah ....\n\nA. $8$\nB. $12$\nC. $16$\nD. $24$',
          answer: 'A. $8$',
          principle:
            'Tuliskan kedua bilangan sebagai $dx$ dan $dy$ dengan $d = \\text{FPB}(a, b)$ dan $\\text{FPB}(x, y) = 1$, sehingga $a + b = d(x + y)$ dan $\\text{KPK}(a, b) = dxy$.',
          solution:
            'Misalkan kedua bilangan adalah $a = dx$ dan $b = dy$ dengan $d = \\text{FPB}(a, b)$ dan $\\text{FPB}(x, y) = 1$. Maka\n$$d(x + y) = 40 \\quad \\text{dan} \\quad dxy = 48.$$\nKarena $d$ membagi $40$ dan $48$, maka $d$ membagi $\\text{FPB}(40, 48) = 8$, sehingga $d \\in \\{1, 2, 4, 8\\}$. Di antara pilihan jawaban, hanya $d = 8$ yang membagi $\\text{FPB}(40, 48) = 8$.\nPeriksa $d = 8$: diperoleh $x + y = 5$ dan $xy = 6$, yang dipenuhi oleh $x = 2$ dan $y = 3$ (saling prima). Kedua bilangan adalah $16$ dan $24$, dengan $16 + 24 = 40$, $\\text{KPK}(16, 24) = 48$, dan $\\text{FPB}(16, 24) = 8$.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-mat-smp-2025/fig-13.webp',
              alt: 'Bidang empat T.ABC dengan tiga rusuk saling tegak lurus di titik sudut B',
              caption: 'Sketsa bidang empat T.ABC pada soal nomor 13.'
            }
          ],
          prompt:
            'Suatu bidang empat $T.ABC$ memiliki bidang sisi segitiga $TBC$, $TBA$, dan $ABC$ yang masing-masing saling tegak lurus seperti pada gambar berikut.\n\nLuas $TBC : \\text{Luas } TBA : \\text{Luas } ABC = 1 : 2 : 3$ dan panjang $AC = 10\\text{ cm}$. Volume bidang empat $T.ABC$ sama dengan .... $\\text{cm}^3$.\n\nA. $\\frac{80}{9}\\sqrt{5}$\nB. $\\frac{80}{3}\\sqrt{5}$\nC. $80\\sqrt{5}$\nD. $320\\sqrt{5}$',
          answer: 'A. $\\frac{80}{9}\\sqrt{5}$',
          principle:
            'Jika tiga sisi bidang empat saling tegak lurus di $B$, maka rusuk $BA$, $BC$, dan $BT$ saling tegak lurus dan $V = \\frac{1}{6} BA \\cdot BC \\cdot BT$.',
          solution:
            'Misalkan $BA = a$, $BC = b$, dan $BT = c$. Karena ketiga bidang di titik $B$ saling tegak lurus, maka $BA \\perp BC \\perp BT$, sehingga luas ketiga sisi tegaknya adalah $[TBC] = \\frac{1}{2}bc$, $[TBA] = \\frac{1}{2}ac$, dan $[ABC] = \\frac{1}{2}ab$.\nDari perbandingan luas:\n$$bc : ac : ab = 1 : 2 : 3.$$\nBagi ketiga suku dengan $abc$:\n$$\\frac{1}{a} : \\frac{1}{b} : \\frac{1}{c} = 1 : 2 : 3 \\implies a : b : c = 6 : 3 : 2.$$\nMisalkan $a = 6t$, $b = 3t$, dan $c = 2t$. Pada segitiga siku-siku $ABC$ berlaku\n$$AC^2 = a^2 + b^2 \\implies 10^2 = (6t)^2 + (3t)^2 = 45t^2 \\implies t^2 = \\frac{100}{45} = \\frac{20}{9} \\implies t = \\frac{2\\sqrt{5}}{3}.$$\nVolume bidang empat $T.ABC$ adalah\n$$V = \\frac{1}{3} \\cdot [ABC] \\cdot BT = \\frac{1}{6}abc = \\frac{1}{6}(6t)(3t)(2t) = 6t^3 = 6 \\cdot \\frac{20}{9} \\cdot \\frac{2\\sqrt{5}}{3} = \\frac{80}{9}\\sqrt{5}\\text{ cm}^3.$$',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Diketahui barisan geometri: $80, x, y, z, 3125$. Nilai terkecil yang mungkin dari\n$$x - y + z$$\nadalah ....\n\nA. $-3120$\nB. $-1950$\nC. $480$\nD. $950$',
          answer: 'B. $-1950$',
          principle: 'Suku ke-$5$ barisan geometri memberi $r^4 = \\frac{U_5}{U_1}$, yang memiliki dua akar real berlawanan tanda.',
          solution:
            'Misalkan rasio barisan geometri adalah $r$, maka\n$$80r^4 = 3125 \\implies r^4 = \\frac{3125}{80} = \\frac{625}{16} = \\left(\\frac{5}{2}\\right)^4.$$\nUntuk $r$ bilangan real, terdapat dua kemungkinan, yaitu $r = \\frac{5}{2}$ atau $r = -\\frac{5}{2}$.\nAgar nilai $x - y + z = 80r - 80r^2 + 80r^3$ sekecil mungkin, pilih $r = -\\frac{5}{2}$:\n$$x = 80\\left(-\\frac{5}{2}\\right) = -200, \\quad y = -200\\left(-\\frac{5}{2}\\right) = 500, \\quad z = 500\\left(-\\frac{5}{2}\\right) = -1250.$$\nDengan demikian, nilai terkecil yang mungkin adalah\n$$x - y + z = -200 - 500 + (-1250) = -1950.$$',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Enam bilangan prima kurang dari $160$ membentuk barisan aritmetika dengan beda lebih dari $1$. Jumlah keenam bilangan tersebut adalah ....\n\nA. $240$\nB. $300$\nC. $492$\nD. $926$',
          answer: 'C. $492$',
          principle:
            'Agar $6$ suku dalam barisan aritmetika semuanya prima dan lebih dari $5$, beda barisannya harus merupakan kelipatan $2 \\times 3 \\times 5 = 30$.',
          solution:
            'Misalkan enam bilangan prima tersebut adalah $p, p+d, p+2d, p+3d, p+4d, p+5d$ dengan $d > 1$.\n- Karena $p$ dan $p+d$ sama-sama ganjil (jika $p = 2$, maka $p+2d$ genap lebih dari $2$), maka $d$ harus genap (habis dibagi $2$).\n- Jika $d$ tidak habis dibagi $3$, salah satu dari tiga suku pertama $p, p+d, p+2d$ akan habis dibagi $3$. Karena suku terkecil hanya bisa $3$ jika $p=3$, dan $p=3$ membuat $p+3d$ habis dibagi $3$ dan lebih dari $3$, maka $d$ harus habis dibagi $3$.\n- Jika $d$ tidak habis dibagi $5$, salah satu dari lima suku $p, p+d, \\dots, p+4d$ akan habis dibagi $5$. Suku tersebut bisa prima hanya jika $p = 5$, namun $p = 5$ membuat $p + 5d$ habis dibagi $5$ dan lebih dari $5$. Jadi $d$ juga harus habis dibagi $5$.\n\nAkibatnya $d$ kelipatan $\\text{KPK}(2, 3, 5) = 30$. Karena suku keenam kurang dari $160$ ($p + 5d < 160$), satu-satunya kelipatan $30$ yang mungkin adalah $d = 30$ (sebab $d \\ge 60$ memberi $p + 5d > 300$). Dengan $d = 30$, $p < 10$; mencoba $p = 7$ menghasilkan enam bilangan prima:\n$$7, 37, 67, 97, 127, 157.$$\nJumlah keenam bilangan tersebut adalah\n$$\\frac{6}{2}(7 + 157) = 3 \\times 164 = 492.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-mat-smp-2025/fig-16.webp',
              alt: 'Sembilan stiker yang terdiri atas dua stiker lingkaran, empat stiker centang, dan tiga stiker hati tersenyum',
              caption: 'Kesembilan stiker yang dimiliki Ana pada soal nomor 16.'
            }
          ],
          prompt:
            'Ana memiliki $9$ stiker seperti pada gambar. Delapan stiker akan ditempel berjajar dari kiri ke kanan di sampul buku tulisnya. Banyaknya cara ia menempel kedelapan stiker tersebut, sehingga stiker yang sama tidak bersebelahan dan stiker bergambar hati tersenyum terletak di paling kanan adalah ....\n\nA. $26$\nB. $32$\nC. $35$\nD. $36$',
          answer: 'C. $35$',
          principle:
            'Karena $8$ dari $9$ stiker dipilih, bagi kasus berdasarkan jenis $1$ stiker yang tidak dipakai, lalu cacah susunan tanpa elemen identik bersebelahan.',
          solution:
            'Terdapat $2$ stiker lingkaran (sebut $L$), $4$ stiker centang (sebut $C$), dan $3$ stiker hati tersenyum (sebut $H$). Karena dipakai $8$ stiker dan posisi paling kanan (ke-$8$) wajib $H$, tersisa $7$ posisi di kiri yang harus diisi dengan memilih $1$ stiker untuk disisihkan:\n- **Kasus 1: $1$ stiker $L$ disisihkan.** Sisa di $7$ posisi kiri adalah $1\\,L$, $4\\,C$, dan $2\\,H$. Keempat $C$ harus dipisahkan oleh $3$ pemisah yang tersedia ($1\\,L$ dan $2\\,H$), sehingga bentuk susunan $7$ posisi awal wajib $C\\,\\_\\,C\\,\\_\\,C\\,\\_\\,C$. Ke-$3$ celah diisi $1\\,L$ dan $2\\,H$ dalam $\\frac{3!}{2!} = 3$ cara.\n- **Kasus 2: $1$ stiker $H$ disisihkan.** Sisa di $7$ posisi kiri adalah $2\\,L$, $4\\,C$, dan $1\\,H$. Sama seperti Kasus 1, keempat $C$ memaksa bentuk $C\\,\\_\\,C\\,\\_\\,C\\,\\_\\,C$, dan $3$ celah diisi $2\\,L$ dan $1\\,H$ dalam $\\frac{3!}{2!} = 3$ cara.\n- **Kasus 3: $1$ stiker $C$ disisihkan.** Sisa di $7$ posisi kiri adalah $2\\,L$, $3\\,C$, dan $2\\,H$, dengan syarat tidak ada yang bersebelahan dan posisi ke-$7$ bukan $H$. Susun terlebih dahulu $2\\,L$ dan $2\\,H$ ($4$ stiker) yang membentuk $5$ celah potensial (dengan posisi ke-$7$ adalah salah satu huruf di kanan jika tidak diisi $C$):\n  - Jika $2\\,L$ dan $2\\,H$ berselang-seling: $LHLH$ (akhir $H$, maka celah paling kanan wajib diisi $C$ agar tidak bersebelahan dengan $H$ di posisi $8$, sisa $2\\,C$ dipilih dari $4$ celah lain: $\\binom{4}{2} = 6$ cara) dan $HLHL$ (akhir $L$, bebas menempatkan $3\\,C$ di $5$ celah: $\\binom{5}{3} = 10$ cara).\n  - Jika tepat sepasang identik bersebelahan di antara $L, H$ (harus dipisah oleh minimal $1\\,C$): susunan $LLHH$ (akhir $H$, wajib isi $C$ di celah antara $LL$, antara $HH$, dan di ujung kanan $\\to 1$ cara), $HHLL$ (akhir $L$, wajib isi $C$ di celah antara $HH$ dan antara $LL$, sisa $1\\,C$ bebas di $3$ celah lain $\\to 3$ cara), $LHHL$ (wajib isi $C$ di antara $HH$, sisa $2\\,C$ di $4$ celah lain $\\to \\binom{4}{2} = 6$ cara), $HLLH$ (wajib isi $C$ di antara $LL$ dan di ujung kanan, sisa $1\\,C$ di $3$ celah lain $\\to 3$ cara).\n  Total Kasus 3 $= 6 + 10 + 1 + 3 + 6 + 3 = 29$ cara.\n\nTotal seluruh cara adalah $3 + 3 + 29 = 35$.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Segitiga sama sisi $ABC$ dan $DEF$ dengan panjang sisi sama, yaitu $1\\text{ cm}$. Titik $B$ terletak pada sisi $DE$, titik $D$ terletak pada sisi $AB$, dan titik $G$ adalah perpotongan sisi $BC$ dan sisi $DF$. Jika luas daerah segiempat $ADGC$ sama dengan luas daerah segiempat $BEFG$ dan juga sama dengan luas daerah segitiga $BDG$, maka keliling segilima $AEFGC$ adalah .... cm.\n\nA. $6 - \\frac{1}{2}\\sqrt{2}$\nB. $6 - \\sqrt{2}$\nC. $6 - \\frac{3}{2}\\sqrt{2}$\nD. $6 - 3\\sqrt{2}$',
          answer: 'C. $6 - \\frac{3}{2}\\sqrt{2}$',
          principle:
            'Irisan dua segitiga sama sisi yang berimpit pada dua sisinya membentuk segitiga sama sisi yang sebangun; gunakan perbandingan luas sama dengan kuadrat perbandingan sisi.',
          solution:
            'Misalkan luas masing-masing segitiga sama sisi $ABC$ dan $DEF$ adalah $T$. Karena $D$ pada $AB$, $B$ pada $DE$, dan $G = BC \\cap DF$, daerah irisan keduanya adalah $\\triangle BDG$. Dari informasi soal,\n$$[ADGC] = [BEFG] = [BDG].$$\nKarena $[ABC] = [ADGC] + [BDG] = T$, diperoleh $[BDG] = \\frac{1}{2}T$.\nPada $\\triangle BDG$, $\\angle DBG = \\angle ABC = 60^\\circ$ dan $\\angle BDG = \\angle EDF = 60^\\circ$, sehingga $\\triangle BDG$ juga merupakan segitiga sama sisi. Karena perbandingan luasnya terhadap $\\triangle ABC$ adalah $\\frac{1}{2}$, panjang sisinya adalah\n$$s = BD = BG = DG = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}\\text{ cm}.$$\nKarena $A\\text{-}D\\text{-}B\\text{-}E$ segaris dengan $AB = DE = 1$ dan irisan $BD = s$, panjang segmen-segmen pembentuk keliling segilima $AEFGC$ adalah:\n- $AE = AB + DE - BD = 1 + 1 - s = 2 - s$,\n- $EF = 1$,\n- $FG = DF - DG = 1 - s$,\n- $GC = BC - BG = 1 - s$,\n- $CA = 1$.\n\nJadi keliling segilima $AEFGC$ adalah\n$$AE + EF + FG + GC + CA = (2 - s) + 1 + (1 - s) + (1 - s) + 1 = 6 - 3s = 6 - \\frac{3}{2}\\sqrt{2}\\text{ cm}.$$',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            '**Bilangan Super Ganjil** didefinisikan sebagai bilangan bulat positif yang semua digitnya ganjil. Hasil penjumlahan semua bilangan Super Ganjil yang kurang dari $1000$ adalah ....\n\nA. $45130$\nB. $55250$\nC. $60125$\nD. $70775$',
          answer: 'D. $70775$',
          principle: 'Hitung jumlah berdasarkan nilai tempat tiap digit dari himpunan $\\{1, 3, 5, 7, 9\\}$ yang rata-ratanya $5$.',
          solution:
            'Digit yang tersedia adalah $\\{1, 3, 5, 7, 9\\}$ ($5$ pilihan dengan jumlah $1 + 3 + 5 + 7 + 9 = 25$ dan rata-rata $5$). Bilangan kurang dari $1000$ terdiri atas $1$, $2$, atau $3$ digit:\n- **$1$ digit ($5$ bilangan):** jumlahnya $= 25$.\n- **$2$ digit ($5^2 = 25$ bilangan):** setiap digit muncul $5$ kali di posisi puluhan dan $5$ kali di posisi satuan, sehingga jumlahnya $= 5 \\cdot 25 \\cdot (10 + 1) = 125 \\times 11 = 1375$.\n- **$3$ digit ($5^3 = 125$ bilangan):** setiap digit muncul $25$ kali pada masing-masing posisi ratusan, puluhan, dan satuan, sehingga jumlahnya $= 25 \\cdot 25 \\cdot (100 + 10 + 1) = 625 \\times 111 = 69375$.\n\nJumlah seluruh bilangan Super Ganjil kurang dari $1000$ adalah\n$$25 + 1375 + 69375 = 70775.$$',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Berikut ini adalah barisan bilangan bulat positif berurutan dari $1$ sampai $10$ yang ditulis dengan aturan menggunakan hanya huruf $A$, $B$, dan $C$ saja:\n$$A, AB, AC, AA, ABB, ABC, ABA, ACB, ACC, ACA, \\dots$$\nJika aturan tersebut digunakan untuk menuliskan seluruh bilangan bulat positif, maka nilai dari $ABAB$ ditambah $ACAC$ adalah ....\n\nA. $ABCCC$\nB. $ABCBB$\nC. $ABCAC$\nD. $ABCAB$',
          answer: 'B. $ABCBB$',
          principle: 'Identifikasi korespondensi urutan huruf setelah huruf awal $A$ sebagai sistem bilangan basis $3$.',
          solution:
            'Setiap kode diawali huruf $A$, diikuti oleh $k \\ge 0$ huruf dari $\\{B, C, A\\}$ sesuai urutan leksikografis $B \\to 0$, $C \\to 1$, $A \\to 2$:\n- Panjang $1$ ($1$ bilangan): $A$ ($1$).\n- Panjang $2$ ($3$ bilangan): $AB$ ($2$), $AC$ ($3$), $AA$ ($4$).\n- Panjang $3$ ($9$ bilangan): $ABB$ ($5$) hingga $AAA$ ($13$).\n- Panjang $4$ ($27$ bilangan): dimulai dari urutan ke-$14$ ($ABBB$) hingga ke-$40$ ($AAAA$).\n  - $ABAB$ memiliki akhiran $BAB \\equiv (0, 2, 0)_3 = 0\\cdot 9 + 2\\cdot 3 + 0 = 6$, sehingga urutannya adalah $14 + 6 = 20$.\n  - $ACAC$ memiliki akhiran $CAC \\equiv (1, 2, 1)_3 = 1\\cdot 9 + 2\\cdot 3 + 1 = 16$, sehingga urutannya adalah $14 + 16 = 30$.\n\nHasil penjumlahannya adalah $20 + 30 = 50$. Bilangan panjang $5$ dimulai pada urutan ke-$41$ ($ABBBB$). Indeks ke-$50$ berjarak $50 - 41 = 9$ dari awal blok panjang $5$. Dalam basis $3$ empat digit:\n$$9 = 0 \\cdot 27 + 1 \\cdot 9 + 0 \\cdot 3 + 0 \\cdot 1 = (0, 1, 0, 0)_3 \\longrightarrow BCBB.$$\nDengan menambahkan huruf $A$ di depan, bilangan ke-$50$ ditulis sebagai $ABCBB$.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Jika\n$$f(x) = 2025 + \\frac{x + 1}{x} + \\frac{x^2 + 2}{x^2} + \\frac{x^3 + 3}{x^3} + \\dots + \\frac{x^{10} + 10}{x^{10}},$$\nmaka $f(2) + f(1) - f(-1) - f(-2) = \\ldots$\n\nA. $0$\nB. $\\frac{565}{256}$\nC. $\\frac{13365}{256}$\nD. $11430$',
          answer: 'C. $\\frac{13365}{256}$',
          principle: 'Sederhanakan $f(x)$ menjadi $2035 + \\sum_{k=1}^{10} \\frac{k}{x^k}$ dan manfaatkan saling hapus suku berindeks genap pada $f(x) - f(-x)$.',
          solution:
            'Pecah tiap suku $\\frac{x^k + k}{x^k} = 1 + \\frac{k}{x^k}$ untuk $k = 1, 2, \\dots, 10$, sehingga\n$$f(x) = 2025 + 10 + \\sum_{k=1}^{10} \\frac{k}{x^k} = 2035 + \\sum_{k=1}^{10} \\frac{k}{x^k}.$$\nKetika menghitung $f(x) - f(-x)$, konstanta $2035$ serta seluruh suku dengan $k$ genap saling menghilangkan, sedangkan suku dengan $k$ ganjil berjumlah dua kali lipatnya:\n$$f(x) - f(-x) = 2\\left(\\frac{1}{x} + \\frac{3}{x^3} + \\frac{5}{x^5} + \\frac{7}{x^7} + \\frac{9}{x^9}\\right).$$\nSubstitusikan $x = 1$ dan $x = 2$:\n$$f(1) - f(-1) = 2(1 + 3 + 5 + 7 + 9) = 50,$$\n$$f(2) - f(-2) = 2\\left(\\frac{1}{2} + \\frac{3}{8} + \\frac{5}{32} + \\frac{7}{128} + \\frac{9}{512}\\right) = 2\\left(\\frac{256 + 192 + 80 + 28 + 9}{512}\\right) = \\frac{565}{256}.$$\nJadi,\n$$f(2) + f(1) - f(-1) - f(-2) = 50 + \\frac{565}{256} = \\frac{12800 + 565}{256} = \\frac{13365}{256}.$$',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-mat-smp-2025/fig-21.webp',
              alt: 'Pola titik membentuk segilima bertingkat untuk bilangan segilima ke-0 sampai ke-3',
              caption: 'Ilustrasi bilangan segilima ke-0, ke-1, ke-2, dan ke-3 pada soal nomor 21.'
            }
          ],
          prompt:
            'Bilangan segilima ke-$n$ adalah banyaknya titik yang membentuk $n$ segilima seperti yang diilustrasikan pada gambar berikut.\n\nBilangan segilima ke-$0$ adalah $1$, bilangan segilima ke-$1$ adalah $5$, bilangan segilima ke-$2$ adalah $12$, dan bilangan segilima ke-$3$ adalah $22$. Bilangan segilima yang paling dekat dengan $2025$ adalah bilangan segilima ke- ....\n\nA. $30$\nB. $33$\nC. $36$\nD. $39$',
          answer: 'C. $36$',
          principle: 'Rumus eksplisit bilangan pentagonal $P_n = \\frac{(n+1)(3n+2)}{2}$ diperoleh dari deret aritmetika selisih $4, 7, 10, \\dots$.',
          solution:
            'Selisih antar suku berturut-turut adalah $5 - 1 = 4$, $12 - 5 = 7$, $22 - 12 = 10$, membentuk barisan aritmetika dengan suku pertama $4$ dan beda $3$. Dengan demikian,\n$$P_n = 1 + \\sum_{k=1}^{n} (3k + 1) = 1 + n + \\frac{3n(n+1)}{2} = \\frac{(n+1)(3n+2)}{2}.$$\nUji keempat pilihan jawaban:\n- $n = 30 \\implies P_{30} = \\frac{31 \\times 92}{2} = 1426$,\n- $n = 33 \\implies P_{33} = \\frac{34 \\times 101}{2} = 1717$,\n- $n = 36 \\implies P_{36} = \\frac{37 \\times 110}{2} = 2035$,\n- $n = 39 \\implies P_{39} = \\frac{40 \\times 119}{2} = 2380$.\n\nSelisih terdekat dengan $2025$ adalah $|2035 - 2025| = 10$, sehingga bilangan segilima terdekat adalah ke-$36$.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Suatu segitiga $ABC$ sama kaki dengan $AC = BC$ dan $AB = 10\\text{ cm}$ memiliki luas $25\\text{ cm}^2$. Titik $D$, $E$, dan $F$ terletak berturut-turut pada sisi $BC$, $AC$, dan $AB$ dengan\n$$BD : DC = CE : EA = AF : FB = 2 : 3.$$\nTitik $P$, $Q$, dan $R$ berturut-turut adalah titik potong garis $AD$ dan $CF$, garis $AD$ dan $BE$, serta garis $BE$ dan $CF$. Perbandingan luas segitiga $PQR$ dan $ABC$ adalah ....\n\nA. $1 : 19$\nB. $2 : 19$\nC. $3 : 25$\nD. $1 : 5$',
          answer: 'A. $1 : 19$',
          principle: 'Gunakan Teorema Menelaus dan perbandingan luas segitiga yang berbagi tinggi untuk menghitung luas bagian di luar $\\triangle PQR$.',
          solution:
            'Karena $BD : DC = CE : EA = AF : FB = 2 : 3$, maka $\\frac{DC}{BC} = \\frac{EA}{AC} = \\frac{FB}{AB} = \\frac{3}{5}$.\nTerapkan Teorema Menelaus pada $\\triangle ABD$ dengan garis potong $C\\text{-}P\\text{-}F$:\n$$\\frac{AF}{FB} \\cdot \\frac{BC}{CD} \\cdot \\frac{DP}{PA} = 1 \\implies \\frac{2}{3} \\cdot \\frac{5}{3} \\cdot \\frac{DP}{PA} = 1 \\implies \\frac{DP}{PA} = \\frac{9}{10},$$\nsehingga $\\frac{AP}{AD} = \\frac{10}{19}$. Karena $\\triangle ACP$ dan $\\triangle ACD$ memiliki tinggi yang sama dari $C$, sedangkan $[ACD] = \\frac{DC}{BC}[ABC] = \\frac{3}{5}[ABC]$, diperoleh\n$$[ACP] = \\frac{10}{19}[ACD] = \\frac{10}{19} \\cdot \\frac{3}{5}[ABC] = \\frac{6}{19}[ABC].$$\nDengan cara yang identik secara siklis, $[BAQ] = \\frac{6}{19}[ABC]$ dan $[CBR] = \\frac{6}{19}[ABC]$.\nKarena $\\triangle ABC$ terbagi oleh $\\triangle PQR$, $\\triangle ACP$, $\\triangle BAQ$, dan $\\triangle CBR$, maka\n$$[PQR] = [ABC] - 3 \\cdot \\frac{6}{19}[ABC] = \\frac{1}{19}[ABC],$$\nsehingga $[PQR] : [ABC] = 1 : 19$.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Liam berkesempatan memilih secara acak satu nomor keberuntungan yang terdiri dari $6$ digit bilangan dari $0$ sampai $9$. Ia akan mendapatkan hadiah jika ada setidaknya $3$ bilangan ganjil berurutan di nomor keberuntungannya. Peluang Liam mendapatkan hadiah adalah ....\n\nA. $\\frac{1}{8}$\nB. $\\frac{3}{16}$\nC. $\\frac{1}{4}$\nD. $\\frac{5}{16}$',
          answer: 'D. $\\frac{5}{16}$',
          principle: 'Setiap digit berpeluang sama ($\\frac{1}{2}$) bernilai ganjil atau genap; hitung komplemennya berupa barisan paritas tanpa tiga ganjil berurutan.',
          solution:
            'Terdapat $5$ digit ganjil ($\\text{O}$) dan $5$ digit genap ($\\text{E}$), sehingga setiap posisi digit secara bebas berpeluang $\\frac{1}{2}$ ganjil dan $\\frac{1}{2}$ genap. Total seluruh barisan paritas sepanjang $6$ digit adalah $2^6 = 64$.\nMisalkan $a_n$ menyatakan banyaknya barisan paritas panjang $n$ yang **tidak** memuat tiga huruf $\\text{O}$ berurutan. Setiap barisan valid harus diakhiri oleh $\\text{E}$, $\\text{EO}$, atau $\\text{EOO}$, sehingga untuk $n \\ge 3$ berlaku $a_n = a_{n-1} + a_{n-2} + a_{n-3}$ dengan nilai awal $a_0 = 1$, $a_1 = 2$, $a_2 = 4$:\n$$a_3 = 1 + 2 + 4 = 7, \\quad a_4 = 2 + 4 + 7 = 13, \\quad a_5 = 4 + 7 + 13 = 24, \\quad a_6 = 7 + 13 + 24 = 44.$$\nBanyak barisan yang memuat minimal $3$ digit ganjil berurutan adalah $64 - 44 = 20$. Jadi, peluang Liam mendapatkan hadiah adalah\n$$\\frac{20}{64} = \\frac{5}{16}.$$',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-mat-smp-2025/fig-24.webp',
              alt: 'Jaring-jaring oktahedron beraturan dengan delapan sisi segitiga sama sisi berlabel huruf a sampai h',
              caption: 'Jaring-jaring oktahedron beraturan pada soal nomor 24.'
            }
          ],
          prompt:
            'Oktahedron adalah bangun ruang tiga dimensi dengan delapan bidang sisi datar. Berikut ini adalah jaring-jaring suatu oktahedron beraturan yang memiliki delapan bidang sisi segitiga sama sisi yang kongruen.\n\nJika jaring-jaring tersebut dibentuk menjadi oktahedron, maka angka pada setiap bidang sisi sama dengan penjumlahan semua bidang sisi yang berbagi rusuk dengan bidang sisi tersebut (contoh: $b = a + c + d$). Jika $a = -4$, $c = 0$, dan $g = -10$, maka nilai $b$ adalah ....\n\nA. $-10$\nB. $-8$\nC. $8$\nD. $10$',
          answer: 'D. $10$',
          principle: 'Manfaatkan kesimetrian graf sisi oktahedron: jumlah seluruh nilai sisi bernilai nol dan setiap pasangan sisi berhadapan berjumlah nol.',
          solution:
            'Pada jaring-jaring oktahedron, tiga sisi yang berbagi rusuk dengan $b$ adalah $a, c, d$, sehingga\n$$b = a + c + d \\implies a + b + c + d = 2b.$$\nSetelah dilipat menjadi oktahedron beraturan, sisi $g$ berbagi rusuk tepat dengan $e, f,$ dan $h$, sehingga\n$$g = e + f + h \\implies e + f + g + h = 2g.$$\nMisalkan $S = a + b + c + d + e + f + g + h$ adalah jumlah nilai kedelapan sisi. Karena setiap sisi pada oktahedron berbagi rusuk dengan tepat $3$ sisi lain, penjumlahan kedelapan persamaan sisi menghasilkan setiap huruf tepat $3$ kali di ruas kanan:\n$$S = 3S \\implies S = 0.$$\nSubstitusikan kedua kelompok empat sisi di atas ke $S = 0$:\n$$2b + 2g = 0 \\implies b = -g = -(-10) = 10.$$',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Delapan ekor semut ditempatkan pada setiap titik sudut suatu kerangka kubus dari kawat, sehingga satu ekor semut menempati satu titik sudut kubus. Pada saat yang bersamaan masing-masing semut bergerak dengan kecepatan yang sama sepanjang rangka kubus secara acak menuju ke salah satu dari tiga titik sudut yang terhubung dengan posisi awalnya, setelah sampai di titik sudut tujuan, semut berhenti. Peluang bahwa tidak ada semut yang bertemu dengan semut lain baik di tengah perjalanan maupun di titik sudut tujuan adalah ....\n\nA. $\\frac{2}{3^8}$\nB. $\\frac{5}{3^8}$\nC. $\\frac{4}{3^7}$\nD. $\\frac{8}{3^7}$',
          answer: 'D. $\\frac{8}{3^7}$',
          principle:
            'Pergerakan tanpa tabrakan di titik sudut maupun tengah rusuk bersesuaian dengan penguraian $8$ titik sudut kubus menjadi siklus-siklus berarah sepanjang rusuk dengan panjang minimal $4$.',
          solution:
            'Setiap dari $8$ semut memiliki $3$ pilihan rusuk tujuan secara bebas, sehingga banyak seluruh kemungkinan gerak adalah $3^8$.\nAgar tidak ada dua semut berakhir di titik sudut yang sama, pemetaan dari titik awal ke titik tujuan harus berupa bijeksi pada himpunan $8$ titik sudut kubus, sehingga lintasan berarahnya terurai menjadi siklus-siklus saling lepas. Agar tidak bertemu di tengah rusuk, tidak boleh ada siklus panjang $2$ (dua semut bertukar posisi sepanjang satu rusuk).\nKarena graf kubus bersifat bipartit, setiap siklus memiliki panjang genap. Dengan demikian, seluruh $8$ titik sudut harus terurai menjadi:\n1. **Dua siklus berarah masing-masing sepanjang $4$ (dua sisi berhadapan pada kubus):** terdapat $3$ pasang sisi berhadapan pada kubus, dan masing-masing siklus $4$ dapat diberi arah searah atau berlawanan jarum jam ($2$ cara per sisi), menghasilkan $3 \\times 2 \\times 2 = 12$ konfigurasi.\n2. **Satu siklus berarah sepanjang $8$ (siklus Hamilton pada kubus):** pada kubus terdapat $6$ siklus Hamilton tak-berarah; masing-masing dapat diberi $2$ orientasi arah gerak, menghasilkan $6 \\times 2 = 12$ konfigurasi.\n\nTotal konfigurasi yang memenuhi adalah $12 + 12 = 24$. Peluang yang dicari adalah\n$$\\frac{24}{3^8} = \\frac{8}{3^7}.$$',
          rubric: OK
        }
      ]
    }
  ]
};
