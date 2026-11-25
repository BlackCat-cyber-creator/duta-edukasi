/**
 * Paket Soal Terstruktur: OSN-K Matematika SMA 2022 (Kemampuan Dasar)
 * Sumber: scraped_raw/osnk-matematika-sma-2022-dasar.md (9 dari 10 soal isian singkat).
 * Soal nomor 7 dilewati karena membutuhkan gambar segitiga yang tidak tersedia pada arsip sumber.
 */
export default {
  id: 'osnk-mat-sma-2022',
  slug: 'osnk-matematika-sma-2022',
  subject: 'olimpiade-mat',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'OSN-K Matematika SMA 2022 (Kemampuan Dasar)',
  relatedChapterIds: [
    'sma11-bab1-fungsi-invers',
    'sma10-bab2-barisan-deret',
    'sma10-bab6-fungsi-kuadrat',
    'sma12-bab3-kaidah-pencacahan'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SMA 2022',
  totalMarks: 36,
  instructions:
    'Paket ini memuat 9 soal isian singkat (nomor 1–6 dan 8–10) dari 10 soal bagian Kemampuan Dasar OSN-K Matematika SMA 2022; 1 soal (nomor 7) dilewati karena membutuhkan gambar yang tidak tersedia pada arsip sumber. Setiap jawaban akhir berupa bilangan bulat. Pada naskah asli, jawaban benar bernilai 4 poin, jawaban salah bernilai -1 poin, dan tidak dijawab bernilai 0 poin; pada paket latihan ini setiap soal bernilai 4 poin (total 36 poin).',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-matematika-sma-2022-dasar.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Kemampuan Dasar',
      marks: 36,
      stem: 'Jawablah setiap soal isian singkat berikut dengan bilangan bulat yang tepat (9 soal, masing-masing bernilai 4 poin).',
      parts: [
        {
          label: '1',
          marks: 4,
          prompt:
            'Misalkan $f(x) = a^2 x + 300$. Jika\n$$f(20) + f^{-1}(22) = f^{-1}(20) + f(22),$$\nmaka $f(1) = \\cdots$',
          answer: '$301$',
          principle: 'Fungsi invers dari fungsi linear $f(x) = mx + c$ ($m \\neq 0$) adalah $f^{-1}(x) = \\frac{x - c}{m}$.',
          solution:
            'Karena $f$ memiliki invers $f^{-1}$, haruslah koefisien $a^2 \\neq 0$; karena $a$ bilangan real, berlaku $a^2 > 0$.\nDari $y = a^2 x + 300$, diperoleh $x = \\frac{y - 300}{a^2}$, sehingga\n$$f^{-1}(x) = \\frac{x - 300}{a^2}.$$\nKelompokkan suku $f$ dan $f^{-1}$ pada persamaan yang diketahui:\n$$f^{-1}(22) - f^{-1}(20) = f(22) - f(20).$$\nSubstitusikan bentuk masing-masing fungsi:\n$$\\frac{22 - 300}{a^2} - \\frac{20 - 300}{a^2} = (22a^2 + 300) - (20a^2 + 300)$$\n$$\\frac{2}{a^2} = 2a^2 \\implies a^4 = 1.$$\nKarena $a^2 > 0$, diperoleh $a^2 = 1$. Akibatnya, $f(x) = x + 300$, sehingga $f(1) = 1 + 300 = 301$.',
          rubric: [
            { code: 'B1', text: 'Menentukan rumus invers $f^{-1}(x) = \\frac{x - 300}{a^2}$ dengan syarat $a^2 > 0$.' },
            { code: 'M2', text: 'Menyusun dan menyelesaikan persamaan hingga diperoleh $a^4 = 1$ dan $a^2 = 1$.' },
            { code: 'A1', text: 'Menghitung nilai $f(1) = 301$.' }
          ]
        },
        {
          label: '2',
          marks: 4,
          prompt:
            'Banyaknya bilangan bulat dari $1001$ sampai $2022$ yang habis dibagi $9$ atau $15$ adalah $\\cdots$',
          answer: '$159$',
          principle: 'Prinsip Inklusi–Eksklusi: $|A \\cup B| = |A| + |B| - |A \\cap B|$, dengan irisan berupa kelipatan $\\text{KPK}(9, 15) = 45$.',
          solution:
            'Misalkan $A$ adalah himpunan bilangan bulat pada selang $[1001, 2022]$ yang habis dibagi $9$, dan $B$ adalah himpunan bilangan bulat pada selang yang sama yang habis dibagi $15$. Banyaknya kelipatan $d$ dari $1001$ sampai $2022$ adalah $\\left\\lfloor \\frac{2022}{d} \\right\\rfloor - \\left\\lfloor \\frac{1000}{d} \\right\\rfloor$.\n- Untuk $A$ ($d = 9$): kelipatan $9$ dari $1008 = 9 \\times 112$ sampai $2016 = 9 \\times 224$ berjumlah\n$$|A| = 224 - 112 + 1 = 113.$$\n- Untuk $B$ ($d = 15$): kelipatan $15$ dari $1005 = 15 \\times 67$ sampai $2010 = 15 \\times 134$ berjumlah\n$$|B| = 134 - 67 + 1 = 68.$$\n- Untuk $A \\cap B$ (habis dibagi $9$ dan $15$, yaitu kelipatan $\\text{KPK}(9, 15) = 45$): kelipatan $45$ dari $1035 = 45 \\times 23$ sampai $1980 = 45 \\times 44$ berjumlah\n$$|A \\cap B| = 44 - 23 + 1 = 22.$$\nDengan Prinsip Inklusi–Eksklusi:\n$$|A \\cup B| = |A| + |B| - |A \\cap B| = 113 + 68 - 22 = 159.$$',
          rubric: [
            { code: 'M1', text: 'Menghitung $|A| = 113$ dan $|B| = 68$.' },
            { code: 'M2', text: 'Menggunakan $\\text{KPK}(9, 15) = 45$ untuk menentukan $|A \\cap B| = 22$ dan menerapkan inklusi–eksklusi.' },
            { code: 'A1', text: 'Memperoleh jawaban akhir $159$.' }
          ]
        },
        {
          label: '3',
          marks: 4,
          prompt:
            'Diberikan segitiga $ABC$ dengan sudut siku-siku di $B$. Titik $D$ berada pada sisi $AB$ dan titik $E$ berada pada sisi $AC$. Diketahui bahwa $DE$ sejajar dengan $BC$. Jika $AD = 21$, $DB = 3$, dan $BC = 32$, maka panjang $AE$ adalah $\\cdots$',
          answer: '$35$',
          principle: 'Teorema Pythagoras pada segitiga siku-siku dan kesebangunan segitiga akibat garis sejajar ($\\text{AA}$).',
          solution:
            'Karena $D$ terletak pada sisi $AB$, panjang sisi $AB = AD + DB = 21 + 3 = 24$.\nPada segitiga siku-siku $ABC$ (siku-siku di $B$), berlaku Teorema Pythagoras:\n$$AC = \\sqrt{AB^2 + BC^2} = \\sqrt{24^2 + 32^2} = 8\\sqrt{3^2 + 4^2} = 8 \\cdot 5 = 40.$$\nKarena $DE \\parallel BC$, pasangan sudut sehadap sama besar ($\\angle ADE = \\angle ABC = 90^\\circ$) dan $\\angle DAE = \\angle BAC$ berimpit, sehingga $\\triangle ADE \\sim \\triangle ABC$ (kriteria sudut–sudut). Perbandingan sisi yang bersesuaian memberikan:\n$$\\frac{AE}{AC} = \\frac{AD}{AB} \\implies AE = \\frac{21}{24} \\cdot 40 = \\frac{7}{8} \\cdot 40 = 35.$$',
          rubric: [
            { code: 'B1', text: 'Menentukan $AB = 24$ dan menghitung $AC = 40$ dengan Teorema Pythagoras.' },
            { code: 'M2', text: 'Membuktikan $\\triangle ADE \\sim \\triangle ABC$ dan menyusun perbandingan $\\frac{AE}{AC} = \\frac{AD}{AB}$.' },
            { code: 'A1', text: 'Menghitung panjang $AE = 35$.' }
          ]
        },
        {
          label: '4',
          marks: 4,
          prompt:
            'Banyaknya pasangan bilangan bulat $(x, y)$ yang memenuhi persamaan\n$$|x| + |y| + |x + y| = 24$$\nadalah $\\cdots$',
          answer: '$72$',
          principle: 'Pembagian kasus tanda nilai mutlak secara teratur dan tuntas.',
          solution:
            'Tinjau empat kasus berdasarkan tanda $x$ dan $y$:\n1. **Kasus $x \\ge 0$ dan $y \\ge 0$**: maka $x + y \\ge 0$, sehingga $x + y + (x + y) = 24 \\iff x + y = 12$. Untuk $x \\in \\{0, 1, \\dots, 12\\}$, nilai $y = 12 - x \\ge 0$ unik, menghasilkan $13$ pasangan.\n2. **Kasus $x < 0$ dan $y < 0$**: maka $x + y < 0$, sehingga $-x - y - (x + y) = 24 \\iff x + y = -12$. Untuk $x \\in \\{-11, -10, \\dots, -1\\}$, nilai $y = -12 - x < 0$ unik, menghasilkan $11$ pasangan.\n3. **Kasus $x \\ge 0$ dan $y < 0$**:\n   - Jika $x + y \\ge 0$: $x - y + (x + y) = 24 \\implies 2x = 24 \\implies x = 12$. Syarat $y < 0$ dan $12 + y \\ge 0$ memberi $y \\in \\{-12, -11, \\dots, -1\\}$, yaitu $12$ pasangan.\n   - Jika $x + y < 0$: $x - y - (x + y) = 24 \\implies -2y = 24 \\implies y = -12$. Syarat $x \\ge 0$ dan $x - 12 < 0$ memberi $x \\in \\{0, 1, \\dots, 11\\}$, yaitu $12$ pasangan.\n   Total untuk kasus ketiga adalah $12 + 12 = 24$ pasangan.\n4. **Kasus $x < 0$ dan $y \\ge 0$**: dengan simetri menukar peran $x$ dan $y$ pada kasus ketiga, diperoleh $24$ pasangan pula.\nJumlah seluruh pasangan bilangan bulat $(x, y)$ adalah $13 + 11 + 24 + 24 = 72$.',
          rubric: [
            { code: 'M1', text: 'Menghitung solusi pada kasus bertanda sama ($x, y \\ge 0$ dan $x, y < 0$) yaitu $13 + 11 = 24$.' },
            { code: 'M2', text: 'Menghitung solusi pada dua subkasus bertanda berbeda ($x \\ge 0, y < 0$ dan simetrinya) yaitu $24 + 24 = 48$.' },
            { code: 'A1', text: 'Menjumlahkan seluruh kasus menjadi $72$.' }
          ]
        },
        {
          label: '5',
          marks: 4,
          prompt:
            'Jika sisa pembagian\n$$x^{2021} + x^{1011} + x^{506} + x^{258} + x^{127}$$\noleh $x^2 - 1$ adalah $Ax + B$, maka nilai $4A + 5B = \\cdots$',
          answer: '$22$',
          principle: 'Teorema Sisa Polinomial: sisa pembagian $P(x)$ oleh $(x - 1)(x + 1)$ ditentukan oleh $P(1)$ dan $P(-1)$.',
          solution:
            'Misalkan $P(x) = x^{2021} + x^{1011} + x^{506} + x^{258} + x^{127}$. Karena $x^2 - 1 = (x - 1)(x + 1)$, tuliskan\n$$P(x) = (x - 1)(x + 1)Q(x) + Ax + B.$$\n- Substitusi $x = 1$:\n$$A(1) + B = 1^{2021} + 1^{1011} + 1^{506} + 1^{258} + 1^{127} = 1 + 1 + 1 + 1 + 1 = 5.$$\n- Substitusi $x = -1$ (pangkat ganjil menghasilkan $-1$, pangkat genap menghasilkan $1$):\n$$A(-1) + B = (-1)^{2021} + (-1)^{1011} + (-1)^{506} + (-1)^{258} + (-1)^{127} = -1 - 1 + 1 + 1 - 1 = -1.$$\nDiperoleh sistem persamaan linear:\n$$\\begin{cases} A + B = 5 \\\\ -A + B = -1 \\end{cases}$$\nMenjumlahkan kedua persamaan memberi $2B = 4 \\implies B = 2$, lalu $A = 5 - 2 = 3$.\nJadi, $4A + 5B = 4(3) + 5(2) = 12 + 10 = 22$.',
          rubric: [
            { code: 'M2', text: 'Mensubstitusikan $x = 1$ dan $x = -1$ untuk membentuk sistem $A + B = 5$ dan $-A + B = -1$.' },
            { code: 'M1', text: 'Menentukan $A = 3$ dan $B = 2$.' },
            { code: 'A1', text: 'Menghitung $4A + 5B = 22$.' }
          ]
        },
        {
          label: '6',
          marks: 4,
          prompt:
            'Sebuah papan catur persegi panjang $3 \\times 22$ akan ditutupi $22$ buah L-tromino (ubin berbentuk huruf L yang tersusun atas $3$ petak satuan $1 \\times 1$ dan dapat diputar) sehingga seluruh papan catur tertutup rapat dan tidak ada tromino yang tumpang tindih. Banyaknya cara untuk menyusun L-tromino tersebut adalah $\\cdots$',
          answer: '$2048$',
          principle: 'Dekomposisi pengubinan berdasarkan pemaksaan di batas kolom dan kaidah perkalian.',
          solution:
            'Beri koordinat setiap petak papan $3 \\times 22$ sebagai $(r, c)$ dengan baris $r \\in \\{1, 2, 3\\}$ dan kolom $c \\in \\{1, 2, \\dots, 22\\}$.\nTinjau kolom ke-$1$. Karena setiap L-tromino termuat dalam persegi $2 \\times 2$, petak $(1, 1)$ dan $(3, 1)$ tidak dapat berada pada satu L-tromino yang sama, sehingga keduanya ditutupi oleh dua L-tromino berbeda: $T_1$ (memuat $(1, 1)$) dan $T_2$ (memuat $(3, 1)$).\nPetak $(2, 1)$ harus ditutupi oleh $T_1$ atau $T_2$:\n- Jika $(2, 1)$ ditutupi oleh $T_1$, petak ketiga $T_1$ hanya dapat berupa $(1, 2)$ atau $(2, 2)$. Andaikan petak ketiga $T_1$ adalah $(2, 2)$; maka untuk $T_2$ yang memuat $(3, 1)$, petak $(2, 1)$ dan $(2, 2)$ sudah terpakai sehingga $T_2$ hanya bisa diperluas ke $(3, 2)$ lalu $(3, 3)$, yang membentuk tromino lurus $1 \\times 3$ (bukan L-tromino). Maka $T_1$ wajib menempati $\\{(1, 1), (2, 1), (1, 2)\\}$, dan akibatnya $T_2$ terpaksa menempati $\\{(3, 1), (3, 2), (2, 2)\\}$.\n- Secara simetris, jika $(2, 1)$ ditutupi oleh $T_2$, maka $T_2$ wajib menempati $\\{(3, 1), (2, 1), (3, 2)\\}$ dan $T_1$ terpaksa menempati $\\{(1, 1), (1, 2), (2, 2)\\}$.\nPada kedua kemungkinan tersebut, seluruh blok $3 \\times 2$ pertama (kolom $1$ dan $2$) tertutup sempurna dengan tepat $2$ cara, tanpa melintasi batas ke kolom $3$.\nMengulangi argumen yang sama dari kiri ke kanan, papan $3 \\times 22$ terpecah menjadi $11$ blok $3 \\times 2$ yang saling bebas. Dengan kaidah perkalian, banyaknya cara menyusun L-tromino adalah $2^{11} = 2048$.',
          rubric: [
            { code: 'M2', text: 'Membuktikan bahwa blok $3 \\times 2$ awal tidak dapat melintasi batas ke kolom berikutnya dan memiliki tepat $2$ cara pengisian.' },
            { code: 'M1', text: 'Memecah papan $3 \\times 22$ menjadi $11$ blok $3 \\times 2$ yang independen.' },
            { code: 'A1', text: 'Menghitung $2^{11} = 2048$.' }
          ]
        },
        {
          label: '8',
          marks: 4,
          prompt:
            'Untuk setiap bilangan asli $n$, misalkan $S(n)$ adalah jumlah dari semua digit dari $n$. Diberikan barisan $\\{a_n\\}$ dengan $a_1 = 5$ dan $a_n = (S(a_{n-1}))^2 - 1$ untuk $n \\ge 2$. Sisa pembagian $a_1 + a_2 + \\cdots + a_{2022}$ oleh $21$ adalah $\\cdots$',
          answer: '$18$',
          principle: 'Menemukan keperiodikan barisan rekursif dan mereduksi jumlah dengan aritmetika modulo $21$.',
          solution:
            'Hitung beberapa suku awal barisan:\n$$\\begin{aligned} a_1 &= 5 \\\\ a_2 &= (S(5))^2 - 1 = 5^2 - 1 = 24 \\\\ a_3 &= (S(24))^2 - 1 = (2 + 4)^2 - 1 = 35 \\\\ a_4 &= (S(35))^2 - 1 = (3 + 5)^2 - 1 = 63 \\\\ a_5 &= (S(63))^2 - 1 = (6 + 3)^2 - 1 = 80 \\\\ a_6 &= (S(80))^2 - 1 = (8 + 0)^2 - 1 = 63 \\end{aligned}$$\nMulai $n \\ge 4$, barisan berulang dengan periode $2$: $a_n = 63$ jika $n$ genap, dan $a_n = 80$ jika $n$ ganjil.\nPada indeks $4 \\le n \\le 2022$:\n- Banyaknya $n$ genap ($4, 6, \\dots, 2022$) adalah $\\frac{2022 - 4}{2} + 1 = 1010$.\n- Banyaknya $n$ ganjil ($5, 7, \\dots, 2021$) adalah $\\frac{2021 - 5}{2} + 1 = 1009$.\nSekarang reduksi setiap bagian modulo $21$:\n- Tiga suku awal: $a_1 + a_2 + a_3 = 5 + 24 + 35 = 64 = 3 \\cdot 21 + 1 \\equiv 1 \\pmod{21}$.\n- Suku bernilai $63$: karena $63 = 3 \\cdot 21 \\equiv 0 \\pmod{21}$, diperoleh $1010 \\cdot 63 \\equiv 0 \\pmod{21}$.\n- Suku bernilai $80$: karena $80 = 4 \\cdot 21 - 4 \\equiv -4 \\pmod{21}$ dan $1009 = 21 \\cdot 48 + 1 \\equiv 1 \\pmod{21}$, diperoleh $1009 \\cdot 80 \\equiv 1 \\cdot (-4) = -4 \\pmod{21}$.\nJadi,\n$$a_1 + a_2 + \\cdots + a_{2022} \\equiv 1 + 0 - 4 = -3 \\equiv 18 \\pmod{21}.$$\nSisa pembagiannya oleh $21$ adalah $18$.',
          rubric: [
            { code: 'B1', text: 'Menghitung suku awal hingga menemukan pola periodik $63, 80, 63, 80, \\dots$ untuk $n \\ge 4$.' },
            { code: 'M2', text: 'Mencacah $1010$ suku bernilai $63$ dan $1009$ suku bernilai $80$ serta mereduksi dalam modulo $21$.' },
            { code: 'A1', text: 'Memperoleh sisa pembagian $18$.' }
          ]
        },
        {
          label: '9',
          marks: 4,
          prompt:
            'Diberikan dua bilangan real $x$ dan $y$ dengan $x > y > 0$. Jika\n$$x + 300 \\le \\sqrt{x^2 - y^2 + 600(x + y)},$$\nmaka nilai dari $y$ adalah $\\cdots$',
          answer: '$300$',
          principle: 'Pengkuadratan pertidaksamaan bernilai positif dan sifat nonnegatif kuadrat bilangan real ($(y - 300)^2 \\ge 0$).',
          solution:
            'Karena $x > y > 0$, ruas kiri $x + 300 > 0$, sehingga mengkuadratkan kedua ruas menghasilkan pertidaksamaan yang ekuivalen (dan sekaligus menjamin bilangan di dalam akar bernilai positif):\n$$(x + 300)^2 \\le x^2 - y^2 + 600(x + y)$$\n$$x^2 + 600x + 300^2 \\le x^2 - y^2 + 600x + 600y.$$\nKurangkan $x^2 + 600x$ dari kedua ruas dan pindahkan suku $y$ ke ruas kiri:\n$$y^2 - 600y + 300^2 \\le 0 \\iff (y - 300)^2 \\le 0.$$\nKarena kuadrat bilangan real selalu tak negatif ($(y - 300)^2 \\ge 0$), pertidaksamaan terpenuhi hanya jika $(y - 300)^2 = 0$, yakni $y = 300$ (konsisten dengan $x > y > 0$ untuk sembarang $x > 300$).',
          rubric: [
            { code: 'M1', text: 'Mengkuadratkan kedua ruas dengan memperhatikan $x + 300 > 0$.' },
            { code: 'M2', text: 'Menyederhanakan pertidaksamaan menjadi $(y - 300)^2 \\le 0$.' },
            { code: 'A1', text: 'Menyimpulkan nilai tunggal $y = 300$.' }
          ]
        },
        {
          label: '10',
          marks: 4,
          prompt:
            'Misalkan $x$ merupakan bilangan asli sehingga $x^2 + 110x$ merupakan bilangan pangkat tiga dari suatu bilangan prima. Nilai $x$ adalah $\\cdots$',
          answer: '$11$',
          principle: 'Faktorisasi aljabar dan sifat pembagi positif dari pangkat tiga bilangan prima $p^3$.',
          solution:
            'Misalkan $x^2 + 110x = p^3$ untuk suatu bilangan prima $p$ dan bilangan asli $x \\ge 1$. Faktorkan ruas kiri:\n$$x(x + 110) = p^3.$$\nKarena $1 \\le x < x + 110$, pasangan $(x, x + 110)$ merupakan dua pembagi positif dari $p^3$ yang hasil kalinya $p^3$ dengan faktor pertama lebih kecil daripada faktor kedua. Pembagi positif dari $p^3$ hanyalah $1, p, p^2, p^3$, sehingga hanya ada dua kemungkinan:\n1. $(x, x + 110) = (1, p^3)$: maka $p^3 = 1 + 110 = 111 = 3 \\times 37$, yang bukan bilangan pangkat tiga sempurna sehingga tidak memenuhi.\n2. $(x, x + 110) = (p, p^2)$: maka $x = p$ dan $p + 110 = p^2$, sehingga\n$$p^2 - p - 110 = 0 \\iff (p - 11)(p + 10) = 0.$$\nKarena $p > 0$, diperoleh $p = 11$ (bilangan prima), sehingga $x = 11$.\nPemeriksaan: $11^2 + 110 \\cdot 11 = 121 + 1210 = 1331 = 11^3$. Jadi, nilai $x$ adalah $11$.',
          rubric: [
            { code: 'B1', text: 'Memfaktorkan $x(x + 110) = p^3$ dan mendaftar kemungkinan pasangan pembagi positif $(1, p^3)$ serta $(p, p^2)$.' },
            { code: 'M2', text: 'Mengeliminasi $(1, p^3)$ dan menyelesaikan $p^2 - p - 110 = 0$ untuk $p > 0$.' },
            { code: 'A1', text: 'Memperoleh $x = 11$ dan memverifikasi $p = 11$ prima.' }
          ]
        }
      ]
    }
  ]
};
