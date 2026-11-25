/**
 * Paket Soal Terstruktur: OSN-K Matematika SMA 2023 (Bagian Kemampuan Dasar, 10 soal isian singkat)
 * Sumber: scraped_raw/osnk-matematika-sma-2023-dasar.md (arsip soal OSN-K 2023). Seluruh 10 soal dimuat, 0 dilewati.
 */
export default {
  id: 'osnk-mat-sma-2023',
  slug: 'osnk-matematika-sma-2023',
  subject: 'olimpiade-mat',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'OSN-K Matematika SMA 2023 (Kemampuan Dasar)',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab4-trigonometri',
    'sma10-bab6-fungsi-kuadrat',
    'sma12-bab3-kaidah-pencacahan'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SMA 2023',
  totalMarks: 40,
  instructions:
    'Paket ini memuat seluruh 10 soal isian singkat bagian Kemampuan Dasar OSN-K Matematika SMA 2023 (10 soal dimuat, 0 soal dilewati). Setiap soal dijawab dengan bilangan bulat. Pada naskah asli, jawaban benar bernilai 4 poin, jawaban salah bernilai -1 poin, dan tidak dijawab bernilai 0 poin; pada paket latihan ini setiap jawaban benar bernilai 4 poin (skor total 40).',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-matematika-sma-2023-dasar.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Kemampuan Dasar',
      marks: 40,
      stem: 'Jawablah setiap soal isian singkat berikut dengan bilangan bulat yang tepat (10 soal, masing-masing bernilai 4 poin).',
      parts: [
        {
          label: '1',
          marks: 4,
          prompt:
            'Hasil penjumlahan semua solusi dari persamaan $|x - |2x+6|| = 99$ adalah $\\cdots$',
          answer: '$58$',
          principle: 'Definisi nilai mutlak $|u| = k$ ($k > 0$) ekuivalen dengan $u = k$ atau $u = -k$, disertai pemeriksaan syarat tanda.',
          solution:
            'Persamaan $|x - |2x+6|| = 99$ terbagi menjadi dua kasus:\n- **Kasus 1:** $x - |2x+6| = 99 \\iff |2x+6| = x - 99$.\n  Karena $|2x+6| \\ge 0$, haruslah $x - 99 \\ge 0 \\iff x \\ge 99$. Untuk $x \\ge 99$, nilai $2x+6 > 0$ sehingga $|2x+6| = 2x+6$. Persamaan menjadi $2x + 6 = x - 99 \\implies x = -105$, yang tidak memenuhi syarat $x \\ge 99$. Jadi tidak ada solusi pada kasus ini.\n- **Kasus 2:** $x - |2x+6| = -99 \\iff |2x+6| = x + 99$.\n  Syarat tak negatif memberi $x + 99 \\ge 0 \\iff x \\ge -99$. Pecah menurut tanda $2x+6$:\n  1. Jika $2x+6 \\ge 0$ ($x \\ge -3$), maka $2x + 6 = x + 99 \\implies x = 93$ (memenuhi $x \\ge -3$).\n  2. Jika $2x+6 < 0$ ($x < -3$), maka $-(2x+6) = x + 99 \\implies -3x = 105 \\implies x = -35$ (memenuhi $-99 \\le -35 < -3$).\n\nDengan demikian, himpunan solusinya adalah $\\{-35, 93\\}$, dan jumlah semua solusinya adalah $-35 + 93 = 58$.',
          rubric: [
            { code: 'B1', text: 'Memecah persamaan nilai mutlak menjadi dua kasus: $x - |2x+6| = 99$ dan $x - |2x+6| = -99$.' },
            { code: 'M2', text: 'Menyelesaikan kedua kasus dengan syarat tanda nilai mutlak sehingga diperoleh $x = 93$ dan $x = -35$.' },
            { code: 'A1', text: 'Menjumlahkan semua solusi yang memenuhi: $-35 + 93 = 58$.' }
          ]
        },
        {
          label: '2',
          marks: 4,
          prompt:
            'Di dalam suatu laci, terdapat tujuh pasang kaus kaki yang setiap pasangnya berbeda dengan pasangan lainnya. Enam kaus kaki diambil sekaligus secara acak. Banyaknya cara pengambilan sehingga terdapat tepat sepasang kaus kaki yang cocok (berpasangan) di antara kaus kaki yang terambil adalah $\\cdots$\n(Catatan: Asumsikan kaus kaki kiri dan kanan identik.)',
          answer: '$105$',
          principle: 'Kombinasi dan aturan perkalian: memilih $1$ pasangan lengkap dan $4$ kaus kaki tunggal dari pasangan berbeda.',
          solution:
            'Agar di antara $6$ kaus kaki yang terambil terdapat tepat $1$ pasang yang cocok, pengambilan harus terdiri atas $1$ pasang lengkap ($2$ kaus kaki dari jenis yang sama) dan $4$ kaus kaki lainnya yang masing-masing berasal dari jenis berbeda.\n1. Banyak cara memilih $1$ jenis kaus kaki untuk pasangan lengkap dari $7$ jenis yang ada adalah $\\binom{7}{1} = 7$.\n2. Dari $6$ jenis kaus kaki yang tersisa, harus dipilih $4$ jenis untuk diambil masing-masing $1$ kaus kaki. Banyak cara memilih $4$ jenis tersebut adalah $\\binom{6}{4} = \\frac{6 \\cdot 5}{2} = 15$. Karena kaus kaki kiri dan kanan pada setiap pasangan identik, hanya ada $1$ cara mengambil sebuah kaus kaki dari masing-masing jenis yang dipilih.\n\nDengan aturan perkalian, total banyaknya cara pengambilan adalah $7 \\times 15 = 105$.',
          rubric: [
            { code: 'B1', text: 'Mengidentifikasi komposisi pengambilan: $1$ pasang lengkap dan $4$ kaus kaki dari $4$ jenis berbeda lainnya.' },
            { code: 'M2', text: 'Menghitung $\\binom{7}{1} = 7$ cara memilih pasangan lengkap dan $\\binom{6}{4} = 15$ cara memilih $4$ kaus kaki tunggal.' },
            { code: 'A1', text: 'Mengalikan keduanya hingga diperoleh $7 \\times 15 = 105$.' }
          ]
        },
        {
          label: '3',
          marks: 4,
          prompt:
            'Diberikan trapesium $ABCD$ dengan $AB = 14$, $CD = 19$, $AB$ sejajar $CD$, serta $\\angle ADC$ dan $\\angle BCD$ keduanya lancip. Misalkan $P$ dan $Q$ adalah titik yang terletak pada sisi $CD$ (dengan $P \\ne D$ dan $Q \\ne C$) sehingga $AD = AP$ dan $BC = BQ$. Panjang $PQ = \\cdots$',
          answer: '$9$',
          principle: 'Garis tinggi segitiga sama kaki membagi dua sama panjang sisi alasnya, serta proyeksi ortogonal sisi sejajar trapesium.',
          solution:
            'Misalkan $E$ dan $F$ berturut-turut adalah proyeksi tegak lurus titik $A$ dan $B$ pada sisi $CD$. Karena $AB \\parallel CD$ dan $\\angle ADC, \\angle BCD < 90^\\circ$, titik $E$ dan $F$ terletak pada ruas garis $CD$ dengan urutan $D, E, F, C$, dan segiempat $ABFE$ merupakan persegi panjang sehingga $EF = AB = 14$.\n\nMisalkan $DE = x > 0$ dan $FC = y > 0$. Dari panjang $CD = 19$, diperoleh:\n$$DE + EF + FC = 19 \\implies x + 14 + y = 19 \\implies x + y = 5.$$\n\nPada segitiga sama kaki $ADP$ ($AD = AP$, $P \\ne D$), garis tinggi $AE$ membagi alas $DP$ menjadi dua sama panjang, sehingga $EP = DE = x$ dan $DP = 2x$. Demikian pula pada segitiga sama kaki $BCQ$ ($BC = BQ$, $Q \\ne C$), garis tinggi $BF$ membagi alas $CQ$ menjadi dua sama panjang, sehingga $FQ = FC = y$ dan $CQ = 2y$.\n\nKarena $DP + CQ = 2(x + y) = 10 < 19 = CD$, titik $D, E, P, Q, F, C$ terletak berurutan pada sisi $CD$ tanpa saling tumpang tindih. Akibatnya:\n$$PQ = CD - DP - CQ = 19 - 2(x + y) = 19 - 10 = 9.$$',
          rubric: [
            { code: 'B1', text: 'Memproyeksikan $A$ dan $B$ ke $CD$ (titik $E, F$) dan memperoleh $x + y = CD - AB = 5$.' },
            { code: 'M2', text: 'Menggunakan sifat garis tinggi segitiga sama kaki pada $\\triangle ADP$ dan $\\triangle BCQ$ sehingga $DP = 2x$ dan $CQ = 2y$.' },
            { code: 'A1', text: 'Menghitung $PQ = 19 - 2(x+y) = 9$.' }
          ]
        },
        {
          label: '4',
          marks: 4,
          prompt:
            'Diketahui bilangan empat digit $\\overline{7ab9}$ merupakan bilangan kuadrat. Nilai $a + b = \\cdots$',
          answer: '$11$',
          principle: 'Penaksiran batas kuadrat sempurna dan analisis angka satuan bilangan kuadrat.',
          solution:
            'Misalkan $\\overline{7ab9} = n^2$ untuk suatu bilangan asli $n$. Karena $7000 < n^2 < 8000$ sedangkan $80^2 = 6400$ dan $90^2 = 8100$, haruslah $80 < n < 90$.\n\nAngka satuan dari $n^2$ adalah $9$, sehingga angka satuan dari $n$ yang mungkin hanyalah $3$ atau $7$. Oleh karena itu, kemungkinan nilai $n$ adalah $83$ atau $87$.\n- Jika $n = 83$, maka $83^2 = (80 + 3)^2 = 6400 + 480 + 9 = 6889$ (digit ribuan bukan $7$).\n- Jika $n = 87$, maka $87^2 = (90 - 3)^2 = 8100 - 540 + 9 = 7569$ (memenuhi bentuk $\\overline{7ab9}$).\n\nDengan demikian, $a = 5$ dan $b = 6$, sehingga $a + b = 5 + 6 = 11$.',
          rubric: [
            { code: 'B1', text: 'Membatasi $80 < n < 90$ dan menentukan satuan $n$ harus $3$ atau $7$.' },
            { code: 'M2', text: 'Menguji $83^2 = 6889$ dan $87^2 = 7569$ sehingga didapat $a = 5$ dan $b = 6$.' },
            { code: 'A1', text: 'Menghitung $a + b = 11$.' }
          ]
        },
        {
          label: '5',
          marks: 4,
          prompt:
            'Diberikan fungsi kuadrat yang didefinisikan oleh $f(x) = ax^2 + bx + c$ yang memenuhi $f(5) = 25$ dan $f(6) = 36$. Jika $a \\ne 1$, maka nilai dari $\\frac{c - b}{a - 1}$ adalah $\\cdots$',
          answer: '$41$',
          principle: 'Faktorisasi polinomial bantu $g(x) = f(x) - x^2$ berdasarkan akar-akarnya dan rumus Vieta.',
          solution:
            'Tinjau polinomial bantu $g(x) = f(x) - x^2 = (a - 1)x^2 + bx + c$. Karena $a \\ne 1$, maka $g(x)$ merupakan fungsi kuadrat.\n\nDari $f(5) = 25 = 5^2$ dan $f(6) = 36 = 6^2$, diperoleh $g(5) = 0$ dan $g(6) = 0$. Artinya, $5$ dan $6$ adalah akar-akar dari $g(x)$, sehingga:\n$$g(x) = (a - 1)(x - 5)(x - 6) = (a - 1)(x^2 - 11x + 30).$$\n\nDengan menyamakan koefisien pada kedua bentuk $g(x)$, diperoleh:\n$$b = -11(a - 1) \\quad \\text{dan} \\quad c = 30(a - 1).$$\n\nKarena $a - 1 \\ne 0$, maka:\n$$\\frac{c - b}{a - 1} = \\frac{30(a - 1) - (-11(a - 1))}{a - 1} = 30 + 11 = 41.$$',
          rubric: [
            { code: 'B1', text: 'Membentuk $g(x) = f(x) - x^2 = (a-1)x^2 + bx + c$ dengan akar $5$ dan $6$.' },
            { code: 'M2', text: 'Menyatakan $b = -11(a-1)$ dan $c = 30(a-1)$ (atau menggunakan rumus Vieta).' },
            { code: 'A1', text: 'Menyederhanakan $\\frac{c-b}{a-1} = 30 + 11 = 41$.' }
          ]
        },
        {
          label: '6',
          marks: 4,
          prompt:
            'Dua tim A dan B bertanding sepak bola sebanyak $15$ kali. Pada setiap pertandingan, tim yang berhasil mencetak $4$ gol pertama akan menjadi pemenang. Tidak ada pertandingan yang berakhir seri. Selama $15$ kali pertandingan tersebut, tim A memenangkan pertandingan lebih banyak dibandingkan tim B, tetapi banyak gol yang dicetak tim B lebih banyak dibandingkan tim A. Selisih total gol terbesar yang mungkin dicetak oleh kedua tim tersebut adalah $\\cdots$',
          answer: '$20$',
          principle: 'Optimasi dengan batas atas ketidaksamaan dan konstruksi contoh yang mencapai batas.',
          solution:
            'Misalkan tim A menang $w_A$ kali dan tim B menang $w_B$ kali, dengan $w_A + w_B = 15$. Karena tim A menang lebih banyak dari tim B, haruslah $w_A \\ge 8$ dan $w_B = 15 - w_A \\le 7$.\n\nMisalkan $G_A$ dan $G_B$ berturut-turut menyatakan total gol tim A dan tim B. Karena $G_B > G_A$, selisih total gol adalah $G_B - G_A$.\n- Pada setiap pertandingan yang dimenangkan tim A, tim A mencetak $4$ gol dan tim B mencetak paling banyak $3$ gol, sehingga selisih gol (B dikurangi A) pada pertandingan itu paling besar $3 - 4 = -1$.\n- Pada setiap pertandingan yang dimenangkan tim B, tim B mencetak $4$ gol dan tim A mencetak paling sedikit $0$ gol, sehingga selisih gol (B dikurangi A) pada pertandingan itu paling besar $4 - 0 = 4$.\n\nDengan menjumlahkan ke-$15$ pertandingan, diperoleh batas atas:\n$$G_B - G_A \\le (-1)w_A + 4w_B = 4(15 - w_A) - w_A = 60 - 5w_A.$$\nKarena $w_A \\ge 8$, maka:\n$$G_B - G_A \\le 60 - 5(8) = 20.$$\n\nNilai $20$ dapat dicapai jika $w_A = 8$ dengan skor $4\\text{-}3$ pada tiap kemenangan A, dan $w_B = 7$ dengan skor $0\\text{-}4$ pada tiap kemenangan B. Pada kondisi ini, $G_A = 8 \\times 4 = 32$ dan $G_B = 8 \\times 3 + 7 \\times 4 = 52 > 32$, sehingga $G_B - G_A = 52 - 32 = 20$. Jadi selisih total gol terbesar adalah $20$.',
          rubric: [
            { code: 'B1', text: 'Menentukan syarat jumlah kemenangan $w_A \\ge 8$ dan $w_B = 15 - w_A$.' },
            { code: 'M2', text: 'Membuktikan batas atas $G_B - G_A \\le 60 - 5w_A \\le 20$ serta memberikan konstruksi skor yang memenuhi.' },
            { code: 'A1', text: 'Menyimpulkan selisih total gol terbesar adalah $20$.' }
          ]
        },
        {
          label: '7',
          marks: 4,
          prompt:
            'Diberikan segitiga lancip $ABC$ dengan $AB = 12$, $AC = 10$, dan $D$ terletak pada sisi $BC$. Misalkan $E$ dan $F$ merupakan titik berat segitiga $ABD$ dan $ACD$. Jika luas segitiga $DEF$ adalah $4$, maka panjang sisi $BC$ adalah $\\sqrt{n}$ dengan $n = \\cdots$',
          answer: '$52$',
          principle: 'Sifat titik berat ($2:1$ pada garis berat), kesebangunan segitiga, rumus luas $\\frac{1}{2}bc\\sin A$, dan Aturan Kosinus.',
          solution:
            'Misalkan $M$ dan $N$ berturut-turut adalah titik tengah ruas garis $BD$ dan $CD$.\n\nKarena $E$ adalah titik berat $\\triangle ABD$ dan $F$ adalah titik berat $\\triangle ACD$, titik $E$ terletak pada garis berat $AM$ dengan $AE : EM = 2 : 1$ (sehingga $\\frac{AE}{AM} = \\frac{2}{3}$), dan $F$ terletak pada garis berat $AN$ dengan $AF : FN = 2 : 1$ (sehingga $\\frac{AF}{AN} = \\frac{2}{3}$).\n\nPada $\\triangle AMN$, karena $\\frac{AE}{AM} = \\frac{AF}{AN} = \\frac{2}{3}$ dan $\\angle EAF = \\angle MAN$, diperoleh $\\triangle AEF \\sim \\triangle AMN$ (Sisi-Sudut-Sisi). Akibatnya, $EF \\parallel MN$ (yakni $EF \\parallel BC$) dan:\n$$EF = \\frac{2}{3} MN = \\frac{2}{3} (MD + DN) = \\frac{2}{3} \\left(\\frac{1}{2}BD + \\frac{1}{2}DC\\right) = \\frac{1}{3}BC.$$\n\nMisalkan $h$ adalah tinggi $\\triangle ABC$ dari titik $A$ ke sisi $BC$. Karena $EF \\parallel BC$ berjarak $\\frac{2}{3}h$ dari $A$, maka jarak dari titik $D$ (pada $BC$) ke garis $EF$ adalah $t = h - \\frac{2}{3}h = \\frac{1}{3}h$. Oleh karena itu:\n$$[DEF] = \\frac{1}{2} \\cdot EF \\cdot t = \\frac{1}{2} \\cdot \\left(\\frac{1}{3}BC\\right) \\cdot \\left(\\frac{1}{3}h\\right) = \\frac{1}{9}[ABC].$$\n\nKarena $[DEF] = 4$, diperoleh $[ABC] = 9 \\times 4 = 36$. Dari rumus luas segitiga:\n$$36 = \\frac{1}{2} \\cdot AB \\cdot AC \\cdot \\sin A = \\frac{1}{2} \\cdot 12 \\cdot 10 \\cdot \\sin A \\implies \\sin A = \\frac{36}{60} = \\frac{3}{5}.$$\n\nKarena $\\triangle ABC$ lancip, $\\angle A < 90^\\circ$ sehingga $\\cos A = \\sqrt{1 - \\sin^2 A} = \\frac{4}{5}$. Dengan Aturan Kosinus:\n$$BC^2 = AB^2 + AC^2 - 2 \\cdot AB \\cdot AC \\cdot \\cos A = 12^2 + 10^2 - 2(12)(10)\\left(\\frac{4}{5}\\right) = 144 + 100 - 192 = 52.$$\n\nDiperoleh $BC = \\sqrt{52}$ (terlihat bahwa $10^2 + 52 > 12^2$, sehingga $\\triangle ABC$ memang lancip). Jadi $n = 52$.',
          rubric: [
            { code: 'B1', text: 'Menghubungkan posisi titik berat $E$ dan $F$ dengan kesebangunan $\\triangle AEF \\sim \\triangle AMN$ sehingga $EF = \\frac{1}{3}BC$.' },
            { code: 'M2', text: 'Menurunkan $[DEF] = \\frac{1}{9}[ABC]$ sehingga $[ABC] = 36$, lalu memperoleh $\\sin A = \\frac{3}{5}$ dan $\\cos A = \\frac{4}{5}$.' },
            { code: 'A1', text: 'Menerapkan Aturan Kosinus hingga diperoleh $BC^2 = 52$ dan $n = 52$.' }
          ]
        },
        {
          label: '8',
          marks: 4,
          prompt:
            'Sisa pembagian $5^{2022} + 11^{2022}$ oleh $64$ adalah $\\cdots$',
          answer: '$50$',
          principle: 'Teorema Euler $a^{\\varphi(m)} \\equiv 1 \\pmod m$ untuk $\\gcd(a, m) = 1$ dan aritmetika modular.',
          solution:
            'Karena $64 = 2^6$, nilai fungsi totien Euler adalah $\\varphi(64) = 64\\left(1 - \\frac{1}{2}\\right) = 32$. Baik $5$ maupun $11$ relatif prima terhadap $64$, sehingga menurut Teorema Euler berlaku:\n$$5^{32} \\equiv 1 \\pmod{64} \\quad \\text{dan} \\quad 11^{32} \\equiv 1 \\pmod{64}.$$\n\nPerhatikan bahwa $2022 = 32 \\times 63 + 6$. Maka:\n1. Untuk $5^{2022}$: karena $5^3 = 125 = 2 \\times 64 - 3 \\equiv -3 \\pmod{64}$, diperoleh:\n   $$5^{2022} = (5^{32})^{63} \\cdot (5^3)^2 \\equiv 1^{63} \\cdot (-3)^2 \\equiv 9 \\pmod{64}.$$\n2. Untuk $11^{2022}$: karena $11^2 = 121 = 2 \\times 64 - 7 \\equiv -7 \\pmod{64}$, diperoleh:\n   $$11^{2022} = (11^{32})^{63} \\cdot (11^2)^3 \\equiv 1^{63} \\cdot (-7)^3 = -343 \\pmod{64}.$$\n   Karena $64 \\times 6 = 384$, maka $-343 \\equiv -343 + 384 = 41 \\pmod{64}$.\n\nJumlahkan kedua kekongruenan:\n$$5^{2022} + 11^{2022} \\equiv 9 + 41 = 50 \\pmod{64}.$$\nKarena $0 \\le 50 < 64$, sisa pembagiannya adalah $50$.',
          rubric: [
            { code: 'B1', text: 'Menghitung $\\varphi(64) = 32$ dan mereduksi pangkat $2022 = 32 \\times 63 + 6$ dengan Teorema Euler.' },
            { code: 'M2', text: 'Menentukan $5^6 \\equiv 9 \\pmod{64}$ dan $11^6 \\equiv 41 \\pmod{64}$.' },
            { code: 'A1', text: 'Menjumlahkan sisa sehingga diperoleh $9 + 41 = 50$.' }
          ]
        },
        {
          label: '9',
          marks: 4,
          prompt:
            'Diberikan suku banyak $P(x)$ dengan koefisien bulat. Jika $P(r_1) = P(r_2) = 200$ dengan $r_1$ dan $r_2$ merupakan akar-akar persamaan $x^2 + x - 23 = 0$, maka sisa pembagian $P(1)$ oleh $21$ adalah $\\cdots$',
          answer: '$11$',
          principle: 'Teorema sisa dan pembagian polinomial berkoefisien bulat oleh polinomial monik.',
          solution:
            'Persamaan $x^2 + x - 23 = 0$ memiliki diskriminan $\\Delta = 1^2 - 4(1)(-23) = 93 > 0$, sehingga kedua akarnya berbeda ($r_1 \\ne r_2$) dan $x^2 + x - 23 = (x - r_1)(x - r_2)$.\n\nDefinisikan $Q(x) = P(x) - 200$, yang juga merupakan polinomial berkoefisien bulat. Karena $x^2 + x - 23$ adalah polinomial monik (koefisien utama $1$) dengan koefisien bulat, pembagian $Q(x)$ oleh $x^2 + x - 23$ menghasilkan hasil bagi $R(x)$ dan sisa linear $Ax + B$ yang keduanya juga berkoefisien bulat:\n$$Q(x) = (x^2 + x - 23)R(x) + Ax + B.$$\nSubstitusi $x = r_1$ dan $x = r_2$ memberikan $Ar_1 + B = 0$ dan $Ar_2 + B = 0$. Karena $r_1 \\ne r_2$, haruslah $A = B = 0$. Jadi:\n$$P(x) = (x^2 + x - 23)R(x) + 200,$$\ndengan $R(x)$ polinomial berkoefisien bulat.\n\nSubstitusi $x = 1$ menghasilkan:\n$$P(1) = (1^2 + 1 - 23)R(1) + 200 = -21R(1) + 200.$$\nKarena $R(1)$ adalah bilangan bulat, $-21R(1)$ habis dibagi $21$. Mengingat $200 = 21 \\times 9 + 11$, diperoleh:\n$$P(1) \\equiv 0 + 11 \\equiv 11 \\pmod{21}.$$\nJadi sisa pembagian $P(1)$ oleh $21$ adalah $11$.',
          rubric: [
            { code: 'B1', text: 'Membentuk $Q(x) = P(x) - 200$ dengan $Q(r_1) = Q(r_2) = 0$ dan $r_1 \\ne r_2$.' },
            { code: 'M2', text: 'Menunjukkan $P(x) = (x^2 + x - 23)R(x) + 200$ dengan $R(x)$ berkoefisien bulat, lalu menyubstitusi $x = 1$ menjadi $-21R(1) + 200$.' },
            { code: 'A1', text: 'Menentukan sisa pembagian $P(1)$ oleh $21$ yaitu $200 \\bmod 21 = 11$.' }
          ]
        },
        {
          label: '10',
          marks: 4,
          prompt:
            'Banyaknya bilangan empat angka yang habis dibagi $3$ dan memuat angka $6$ adalah $\\cdots$',
          answer: '$1056$',
          principle: 'Pencacahan dengan komplemen dan ciri keterbagian bilangan oleh $3$.',
          solution:
            'Gunakan prinsip komplemen terhadap himpunan semua bilangan empat angka ($1000$ sampai $9999$) yang habis dibagi $3$.\n1. **Total bilangan empat angka yang habis dibagi $3$:**\n   Bilangan terkecil adalah $1002 = 3 \\times 334$ dan terbesar adalah $9999 = 3 \\times 3333$. Banyaknya bilangan tersebut adalah:\n   $$3333 - 334 + 1 = 3000.$$\n2. **Bilangan empat angka $\\overline{abcd}$ yang habis dibagi $3$ dan TIDAK memuat angka $6$:**\n   Himpunan digit yang diperbolehkan adalah $S = \\{0, 1, 2, 3, 4, 5, 7, 8, 9\\}$. Perhatikan bahwa dalam $S$, setiap kelas sisa modulo $3$ memiliki tepat $3$ digit:\n   - sisa $0 \\pmod 3$: $\\{0, 3, 9\\}$,\n   - sisa $1 \\pmod 3$: $\\{1, 4, 7\\}$,\n   - sisa $2 \\pmod 3$: $\\{2, 5, 8\\}$.\n\n   Banyak pilihan untuk tiap posisi:\n   - Digit $a$ ($a \\ne 0, a \\ne 6$): $8$ pilihan.\n   - Digit $b$ ($b \\ne 6$): $9$ pilihan.\n   - Digit $c$ ($c \\ne 6$): $9$ pilihan.\n   - Digit $d$: agar $\\overline{abcd}$ habis dibagi $3$, haruslah $d \\equiv -(a + b + c) \\pmod 3$. Untuk sisa apa pun dari $(a+b+c)$ modulo $3$, selalu ada tepat $3$ pilihan digit $d \\in S$.\n\n   Jadi banyaknya bilangan empat angka yang habis dibagi $3$ tanpa angka $6$ adalah:\n   $$8 \\times 9 \\times 9 \\times 3 = 1944.$$\n\nDengan demikian, banyaknya bilangan empat angka yang habis dibagi $3$ dan memuat angka $6$ adalah $3000 - 1944 = 1056$.',
          rubric: [
            { code: 'B1', text: 'Menghitung total bilangan empat angka kelipatan $3$, yaitu $3000$.' },
            { code: 'M2', text: 'Menghitung banyak bilangan empat angka kelipatan $3$ tanpa digit $6$, yaitu $8 \\times 9 \\times 9 \\times 3 = 1944$.' },
            { code: 'A1', text: 'Mengurangkan menggunakan komplemen: $3000 - 1944 = 1056$.' }
          ]
        }
      ]
    }
  ]
};
