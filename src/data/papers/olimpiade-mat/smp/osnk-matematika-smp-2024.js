/**
 * Paket Soal Terstruktur: OSN-K Matematika SMP 2024 (23 soal pilihan ganda)
 * Sumber: scraped_raw/osnk-matematika-smp-2024-kenji.md (25 soal asli).
 * Catatan penyuntingan: 23 soal dimuat (nomor asli 1-4, 6, 8-25, dinomori ulang 1-23).
 * Soal nomor asli 5 dan 7 dilewati karena mutlak membutuhkan gambar yang hilang pada arsip sumber.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-mat-smp-2024',
  slug: 'osnk-matematika-smp-2024',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'OSN-K Matematika SMP 2024',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab4-bentuk-aljabar',
    'smp7-bab5-kesebangunan',
    'smp8-bab1-bilangan-berpangkat',
    'smp8-bab2-teorema-pythagoras',
    'smp8-bab6-statistika',
    'smp9-bab2-bangun-ruang',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SMP 2024',
  totalMarks: 23,
  instructions:
    'Naskah asli OSN-K Matematika SMP 2024 terdiri atas 25 soal pilihan ganda. Dari 25 soal tersebut, 23 soal dimuat pada paket ini (nomor asli 1-4, 6, dan 8-25, dinomori ulang 1-23) dan 2 soal dilewati (nomor asli 5 dan 7) karena mutlak membutuhkan gambar asli yang tidak tersedia pada arsip sumber. Setiap jawaban benar bernilai 1 poin (total 23 poin).',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-matematika-smp-2024-kenji.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 23,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (23 soal dimuat dari 25 soal naskah asli; masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Atlet bulu tangkis Anthony Ginting menjalani pertandingan persahabatan dengan Jonathan Christie, rekan sesama timnya. Pertandingan berakhir jika salah satu pemain menang dua set langsung atau menang dua set dari tiga set permainan (rubber set). Tim pelatih Ginting menyatakan bahwa peluang Ginting dapat memenangkan suatu set adalah $1{,}6$ kali lipat peluang Ginting memenangkan pertandingan. Misalkan tidak ada pertandingan yang berakhir imbang/seri. Berdasarkan pernyataan tim pelatih Ginting, peluang Jonathan memenangkan pertandingan adalah ....\n\nA. $\\frac{1}{4}$\nB. $\\frac{3}{4}$\nC. $\\frac{5}{32}$\nD. $\\frac{27}{32}$',
          answer: 'D. $\\frac{27}{32}$',
          principle: 'Peluang kejadian saling bebas pada pertandingan best-of-three: $P(\\text{menang}) = p^2 + 2p^2(1-p)$.',
          solution:
            'Misalkan peluang Ginting memenangkan pertandingan adalah $x$ (dengan $x > 0$), sehingga peluang Ginting memenangkan satu set adalah $p = 1{,}6x = \\frac{8}{5}x$, dan peluang Jonathan memenangkan satu set adalah $1 - p$.\nGinting memenangkan pertandingan melalui tiga kemungkinan: menang $2$ set langsung (peluang $p^2$), menang-kalah-menang (peluang $p(1-p)p$), atau kalah-menang-menang (peluang $(1-p)p^2$). Oleh karena itu,\n$$x = p^2 + 2p^2(1 - p) = p^2(3 - 2p).$$\nSubstitusikan $p = \\frac{8}{5}x$:\n$$x = \\left(\\frac{8}{5}x\\right)^2\\left(3 - \\frac{16}{5}x\\right).$$\nKarena $x > 0$, kedua ruas dapat dibagi $x$:\n$$1 = \\frac{64}{25}x\\left(\\frac{15 - 16x}{5}\\right) \\implies 1024x^2 - 960x + 125 = 0.$$\nFaktorkan persamaan kuadrat tersebut:\n$$(32x - 25)(32x - 5) = 0 \\implies x = \\frac{25}{32} \\text{ atau } x = \\frac{5}{32}.$$\nJika $x = \\frac{25}{32}$, maka $p = \\frac{8}{5} \\cdot \\frac{25}{32} = \\frac{5}{4} > 1$, yang tidak mungkin terjadi karena nilai peluang paling besar adalah $1$.\nJadi, $x = \\frac{5}{32}$ (dengan $p = \\frac{1}{4}$). Peluang Jonathan memenangkan pertandingan adalah\n$$1 - x = 1 - \\frac{5}{32} = \\frac{27}{32}.$$',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Diketahui sistem persamaan berikut dengan $a, b,$ dan $c$ adalah bilangan real positif:\n$$\\begin{aligned} a &= bc \\\\ b &= c(a + 2) \\\\ c &= b(a - 2) \\end{aligned}$$\nNilai dari $a^2 + b^2 + c^2$ adalah ....\n\nA. $15$\nB. $15 - 4\\sqrt{15}$\nC. $225$\nD. $15 + 4\\sqrt{5}$',
          answer: 'A. $15$',
          principle: 'Eliminasi variabel dengan perkalian dua persamaan dan merasionalkan penyebut bentuk akar.',
          solution:
            'Kalikan persamaan kedua dan ketiga:\n$$bc = bc(a + 2)(a - 2) = bc(a^2 - 4).$$\nKarena $b, c > 0$, maka $bc > 0$, sehingga kedua ruas dapat dibagi $bc$:\n$$a^2 - 4 = 1 \\implies a^2 = 5.$$\nKarena $a > 0$, diperoleh $a = \\sqrt{5}$.\nSubstitusikan $b = c(a + 2)$ ke persamaan pertama $a = bc$:\n$$a = c^2(a + 2) \\implies c^2 = \\frac{\\sqrt{5}}{\\sqrt{5} + 2} = \\frac{\\sqrt{5}(\\sqrt{5} - 2)}{5 - 4} = 5 - 2\\sqrt{5}.$$\nDengan cara yang sama, substitusikan $c = b(a - 2)$ ke persamaan pertama:\n$$a = b^2(a - 2) \\implies b^2 = \\frac{\\sqrt{5}}{\\sqrt{5} - 2} = \\frac{\\sqrt{5}(\\sqrt{5} + 2)}{5 - 4} = 5 + 2\\sqrt{5}.$$\nMaka,\n$$a^2 + b^2 + c^2 = 5 + (5 + 2\\sqrt{5}) + (5 - 2\\sqrt{5}) = 15.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Diketahui suatu kerucut dengan titik puncak $T$, pusat sisi alas $O$, dan diameter alas $AB$. Titik $C$ berada pada ruas garis $AT$ dengan $AC = OC = 11\\text{ cm}$. Titik $D$ merupakan titik potong antara garis $OT$ dan $BC$ dengan $DC = 7\\text{ cm}$. Volume kerucut tersebut adalah .... $\\text{cm}^3$.\n\nA. $196\\pi$\nB. $960\\pi$\nC. $1960\\pi$\nD. $9600\\pi$',
          answer: 'B. $960\\pi$',
          principle: 'Sifat garis tengah, titik berat segitiga, teorema Pythagoras pada penampang kerucut, dan rumus volume kerucut $V = \\frac{1}{3}\\pi r^2 t$.',
          solution:
            'Tinjau penampang segitiga sama kaki $TAB$ dengan $TA = TB$ dan $O$ titik tengah diameter alas $AB$ ($TO \\perp AB$).\nKarena $AC = OC = 11$, segitiga $OAC$ sama kaki sehingga $\\angle COA = \\angle CAO = \\angle TAB = \\angle TBA$. Akibatnya, $OC \\parallel TB$.\nKarena $O$ titik tengah $AB$ dan $OC \\parallel TB$, maka $OC$ adalah garis tengah segitiga $TAB$. Jadi $C$ adalah titik tengah $AT$, sehingga $CT = AC = 11\\text{ cm}$ dan garis pelukis $AT = BT = 22\\text{ cm}$.\nKarena $TO$ dan $BC$ masing-masing adalah garis berat segitiga $TAB$, titik potongnya $D$ merupakan titik berat segitiga $TAB$. Dengan perbandingan titik berat $BD : DC = 2 : 1$, diperoleh $BD = 2 \\cdot 7 = 14\\text{ cm}$ dan $BC = 21\\text{ cm}$.\nMisalkan jari-jari alas $r = OA = OB$ dan tinggi kerucut $h = OT$. Pada segitiga siku-siku $TOB$ berlaku $r^2 + h^2 = BT^2 = 22^2 = 484$.\nTarik garis tinggi $CH$ dari $C$ ke $AB$ ($CH \\parallel TO$). Karena $C$ titik tengah $AT$, maka $H$ titik tengah $AO$, sehingga $CH = \\frac{1}{2}h$ dan $BH = BO + OH = r + \\frac{1}{2}r = \\frac{3}{2}r$.\nPada segitiga siku-siku $CHB$:\n$$BC^2 = BH^2 + CH^2 \\implies 21^2 = \\left(\\frac{3}{2}r\\right)^2 + \\left(\\frac{1}{2}h\\right)^2 = \\frac{9}{4}r^2 + \\frac{1}{4}(484 - r^2) = 2r^2 + 121.$$\nDari sini diperoleh $2r^2 = 441 - 121 = 320 \\implies r^2 = 160$, sehingga\n$$h = \\sqrt{484 - 160} = \\sqrt{324} = 18\\text{ cm}.$$\nVolume kerucut adalah\n$$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (160)(18) = 960\\pi\\text{ cm}^3.$$',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Misalkan $N(a, b, c)$ menyatakan banyaknya kelipatan $a$ yang lebih besar dari $b$ dan kurang dari $c$. Sebagai contoh, $N(3, 5, 10) = 2$ karena terdapat dua bilangan antara $5$ dan $10$ yang merupakan kelipatan $3$. Nilai dari $N(6^3, 6^4, 6^6)$ adalah ....\n\nA. $216$\nB. $215$\nC. $209$\nD. $208$',
          answer: 'C. $209$',
          principle: 'Sifat eksponen $6^4 = 6 \\cdot 6^3$ dan $6^6 = 6^3 \\cdot 6^3$ untuk mencacah bilangan bulat dalam selang terbuka.',
          solution:
            'Kelipatan $6^3$ dapat ditulis sebagai $6^3 k$ untuk suatu bilangan bulat $k$. Syarat pada soal adalah\n$$6^4 < 6^3 k < 6^6.$$\nBagikan ketiga bagian ketaksamaan dengan $6^3 > 0$:\n$$6 < k < 6^3 = 216.$$\nKarena $k$ bilangan bulat, maka $7 \\le k \\le 215$. Banyaknya nilai $k$ yang memenuhi adalah\n$$215 - 7 + 1 = 209.$$',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Jika $x^3 + \\frac{1}{x^3} = 18$ dan $x \\neq 0$, maka nilai dari $x^7 + \\frac{1}{x^7} + 7$ adalah ....\n\nA. $845$\nB. $850$\nC. $855$\nD. $860$',
          answer: 'B. $850$',
          principle: 'Identitas aljabar simetris untuk $x^n + x^{-n}$: $(x^3 + x^{-3})(x^4 + x^{-4}) = (x^7 + x^{-7}) + (x + x^{-1})$.',
          solution:
            'Misalkan $a = x + \\frac{1}{x}$. Dari identitas $a^3 = x^3 + \\frac{1}{x^3} + 3\\left(x + \\frac{1}{x}\\right)$, diperoleh\n$$a^3 - 3a = 18 \\implies a^3 - 3a - 18 = 0.$$\nFaktorkan persamaan tersebut:\n$$(a - 3)(a^2 + 3a + 6) = 0.$$\nPerhatikan bahwa $a^2 + 3a + 6 = \\left(a + \\frac{3}{2}\\right)^2 + \\frac{15}{4} > 0$ untuk semua bilangan real $a$, sehingga satu-satunya nilai real adalah $a = 3$.\nSelanjutnya hitung bertahap:\n$$x^2 + \\frac{1}{x^2} = a^2 - 2 = 3^2 - 2 = 7,$$\n$$x^4 + \\frac{1}{x^4} = \\left(x^2 + \\frac{1}{x^2}\\right)^2 - 2 = 7^2 - 2 = 47.$$\nDengan mengalikan $\\left(x^3 + \\frac{1}{x^3}\\right)$ dan $\\left(x^4 + \\frac{1}{x^4}\\right)$, diperoleh\n$$\\left(x^3 + \\frac{1}{x^3}\\right)\\left(x^4 + \\frac{1}{x^4}\\right) = \\left(x^7 + \\frac{1}{x^7}\\right) + \\left(x + \\frac{1}{x}\\right),$$\nsehingga\n$$x^7 + \\frac{1}{x^7} = 18 \\cdot 47 - 3 = 846 - 3 = 843.$$\nJadi,\n$$x^7 + \\frac{1}{x^7} + 7 = 843 + 7 = 850.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Jika bilangan real positif $p, q, r, s$ memenuhi sistem persamaan\n$$\\begin{aligned} p^2 + q^2 &= r^2 + s^2 \\\\ p^2 + s^2 - ps &= q^2 + r^2 + qr \\end{aligned}$$\nmaka nilai dari $\\frac{pq + rs}{ps + qr}$ adalah ....\n\nA. $\\frac{\\sqrt{2}}{3}$\nB. $\\frac{\\sqrt{2}}{2}$\nC. $\\frac{\\sqrt{3}}{3}$\nD. $\\frac{\\sqrt{3}}{2}$',
          answer: 'D. $\\frac{\\sqrt{3}}{2}$',
          principle: 'Identitas aljabar selisih dua kuadrat $(ps + qr)^2 - (pq + rs)^2 = (p^2 - r^2)(s^2 - q^2)$.',
          solution:
            'Susun ulang kedua persamaan:\n$$\\begin{aligned} (1) \\quad p^2 - r^2 + q^2 - s^2 &= 0 \\\\ (2) \\quad p^2 - r^2 - q^2 + s^2 &= ps + qr \\end{aligned}$$\nJumlahkan (1) dan (2), lalu kurangkan (1) dari (2):\n$$2(p^2 - r^2) = ps + qr \\implies p^2 - r^2 = \\frac{ps + qr}{2},$$\n$$2(s^2 - q^2) = ps + qr \\implies s^2 - q^2 = \\frac{ps + qr}{2}.$$\nSekarang tinjau identitas aljabar:\n$$\\begin{aligned} (ps + qr)^2 - (pq + rs)^2 &= (p^2s^2 + 2pqrs + q^2r^2) - (p^2q^2 + 2pqrs + r^2s^2) \\\\ &= p^2(s^2 - q^2) - r^2(s^2 - q^2) \\\\ &= (p^2 - r^2)(s^2 - q^2). \\end{aligned}$$\nSubstitusikan kedua ekspresi sebelumnya:\n$$(ps + qr)^2 - (pq + rs)^2 = \\left(\\frac{ps + qr}{2}\\right)^2 = \\frac{1}{4}(ps + qr)^2.$$\nPindahkan suku sehingga diperoleh\n$$(pq + rs)^2 = \\frac{3}{4}(ps + qr)^2.$$\nKarena $p, q, r, s > 0$, baik $pq + rs$ maupun $ps + qr$ bernilai positif. Dengan menarik akar kuadrat kedua ruas:\n$$\\frac{pq + rs}{ps + qr} = \\frac{\\sqrt{3}}{2}.$$',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Suatu bilangan bulat positif $n$ disebut bilangan JUMPAT jika jumlah $n$ bilangan bulat positif pertama dapat dinyatakan sebagai penjumlahan empat bilangan bulat positif berurutan. Banyaknya bilangan JUMPAT yang kurang dari $2024$ adalah ....\n\nA. $252$\nB. $253$\nC. $504$\nD. $505$',
          answer: 'D. $505$',
          principle: 'Deret aritmetika $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$ dan aritmetika modulo $8$ karena $\\gcd(n, n+1) = 1$.',
          solution:
            'Jumlah $n$ bilangan bulat positif pertama adalah $\\frac{n(n+1)}{2}$. Penjumlahan empat bilangan bulat positif berurutan dapat ditulis sebagai $a + (a+1) + (a+2) + (a+3) = 4a + 6$ untuk suatu bilangan bulat positif $a \\ge 1$.\nSyarat soal memberikan\n$$\\frac{n(n+1)}{2} = 4a + 6 \\iff n(n+1) = 8a + 12 = 8(a + 1) + 4.$$\nPertama, karena $a \\ge 1$, maka $n(n+1) \\ge 20$, sehingga $n \\ge 4$ (untuk $n = 3$, $n(n+1) = 12$ menghasilkan $a = 0$ yang bukan bilangan bulat positif).\nKedua, persamaan di atas ekuivalen dengan kekongruenan\n$$n(n+1) \\equiv 4 \\pmod{8}.$$\nKarena $n$ dan $n + 1$ berurutan, salah satunya ganjil dan yang lainnya genap. Agar hasil kalinya bersisa $4$ jika dibagi $8$, bilangan yang genap harus bersisa $4$ modulo $8$:\n- Kasus 1: $n \\equiv 4 \\pmod{8}$, yaitu $n = 8k + 4$ ($k \\ge 0$, semua memenuhi $n \\ge 4$). Dari $8k + 4 < 2024$ diperoleh $8k < 2020 \\implies k \\le 252$, yaitu $253$ nilai ($k = 0, 1, \\dots, 252$).\n- Kasus 2: $n + 1 \\equiv 4 \\pmod{8} \\iff n \\equiv 3 \\pmod{8}$, yaitu $n = 8k + 3$. Karena $n \\ge 4$, nilai $k = 0$ ($n = 3$) tidak memenuhi, sehingga $k \\ge 1$. Dari $8k + 3 < 2024$ diperoleh $8k < 2021 \\implies k \\le 252$, yaitu $252$ nilai ($k = 1, 2, \\dots, 252$).\nTotal bilangan JUMPAT yang kurang dari $2024$ adalah $253 + 252 = 505$.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Diketahui persamaan\n$$x^4 + ax^3 + 54x^2 - 108x + 81 = 0$$\ndengan $a$ bilangan real, memiliki $4$ akar berbeda, yaitu $r_1, r_2, r_3, r_4$. Jika\n$$r_1 \\times r_2 \\times r_3 \\times r_4 = \\left(\\frac{r_1 + r_2 + r_3 + r_4}{4}\\right)^4,$$\nmaka nilai dari $a$ adalah ....\n\nA. $-12$\nB. $-8$\nC. $3$\nD. $12$',
          answer: 'D. $12$',
          principle: 'Teorema Vieta untuk jumlah dan hasil kali akar suku banyak berderajat empat.',
          solution:
            'Berdasarkan Teorema Vieta pada persamaan $x^4 + ax^3 + 54x^2 - 108x + 81 = 0$:\n$$r_1 + r_2 + r_3 + r_4 = -a, \\qquad r_1 r_2 r_3 r_4 = 81.$$\nSubstitusikan ke syarat yang diberikan:\n$$81 = \\left(\\frac{-a}{4}\\right)^4 \\implies \\left(\\frac{a}{4}\\right)^4 = 3^4.$$\nKarena $a$ bilangan real, diperoleh $\\frac{a}{4} = \\pm 3$, sehingga $a = 12$ atau $a = -12$.\n- Jika $a = -12$, persamaan menjadi $x^4 - 12x^3 + 54x^2 - 108x + 81 = (x - 3)^4 = 0$, yang hanya memiliki satu akar kembar $x = 3$, tidak memenuhi syarat $4$ akar berbeda.\n- Jika $a = 12$, persamaan menjadi $f(x) = x^4 + 12x^3 + 54x^2 - 108x + 81 = (x + 3)^4 - 216x = 0$. Andaikan $f(x)$ memiliki akar kembar $r$, maka $f(r) = 0$ dan $4(r+3)^3 - 216 = 0 \\implies (r+3)^3 = 54$, sehingga $0 = (r+3)\\cdot 54 - 216r = 162 - 162r \\implies r = 1$, tetapi $(1+3)^3 = 64 \\neq 54$ (kontradiksi). Jadi seluruh $4$ akar kompleksnya berbeda.\nOleh karena itu, nilai $a$ yang memenuhi adalah $12$.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Sepuluh persegi panjang kecil dengan ukuran $1\\text{ cm} \\times 2\\text{ cm}$ akan digunakan untuk membentuk persegi panjang besar dengan ukuran $10\\text{ cm} \\times 2\\text{ cm}$. Banyaknya cara membentuk persegi panjang besar tersebut adalah ....\n\nA. $78$\nB. $89$\nC. $144$\nD. $233$',
          answer: 'B. $89$',
          principle: 'Relasi rekurensi Fibonacci untuk pengubinan papan $n \\times 2$ dengan domino $1 \\times 2$.',
          solution:
            'Misalkan $f(n)$ adalah banyaknya cara menyusun persegi panjang berukuran $n \\times 2$ menggunakan ubin $1 \\times 2$.\nTinjau ujung paling kanan dari persegi panjang $n \\times 2$:\n- Kasus 1: Ujung paling kanan diisi satu ubin vertikal $1 \\times 2$. Sisa daerah di sebelah kiri berukuran $(n-1) \\times 2$, yang dapat diisi dalam $f(n-1)$ cara.\n- Kasus 2: Ujung paling kanan diisi dua ubin horizontal $2 \\times 1$ yang bertumpuk membentuk blok $2 \\times 2$. Sisa daerah di sebelah kiri berukuran $(n-2) \\times 2$, yang dapat diisi dalam $f(n-2)$ cara.\nKedua kasus saling lepas dan mencakup semua kemungkinan, sehingga berlaku $f(n) = f(n-1) + f(n-2)$ untuk $n \\ge 3$.\nDengan nilai awal $f(1) = 1$ (satu ubin vertikal) dan $f(2) = 2$ (dua vertikal atau dua horizontal), kita hitung suku demi suku:\n$$f(1) = 1,\\ f(2) = 2,\\ f(3) = 3,\\ f(4) = 5,\\ f(5) = 8,\\ f(6) = 13,\\ f(7) = 21,\\ f(8) = 34,\\ f(9) = 55,\\ f(10) = 89.$$\nJadi, banyaknya cara yang mungkin adalah $89$.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Diketahui segitiga sama kaki $ABC$ dengan $AB = BC = 8\\text{ cm}$ dan $\\angle ABC = 120^\\circ$. Titik tengah $AB$ dan $BC$ masing-masing adalah $D$ dan $E$. Garis $DF$ tegak lurus $AB$ dan $EF$ tegak lurus $BC$. Misalkan garis $EF$ dan $DF$ memotong garis $AC$ berturut-turut di titik $J$ dan $K$. Luas $\\triangle FJK$ adalah .... $\\text{cm}^2$.\n\nA. $\\frac{8\\sqrt{3}}{3}$\nB. $\\frac{16\\sqrt{3}}{3}$\nC. $8\\sqrt{3}$\nD. $16\\sqrt{3}$',
          answer: 'B. $\\frac{16\\sqrt{3}}{3}$',
          principle: 'Perbandingan sisi segitiga siku-siku bersudut $30^\\circ\\text{-}60^\\circ\\text{-}90^\\circ$ dan luas segitiga sama sisi.',
          solution:
            'Karena $ABC$ sama kaki dengan $AB = BC = 8$ dan $\\angle ABC = 120^\\circ$, maka $\\angle BAC = \\angle BCA = 30^\\circ$. Titik $D$ dan $E$ adalah titik tengah $AB$ dan $BC$, sehingga $AD = DB = BE = EC = 4\\text{ cm}$.\nKarena $DF \\perp AB$ dan $EF \\perp BC$, segitiga siku-siku $BDF$ dan $BEF$ kongruen ($BD = BE = 4$ dan $BF$ berimpit), sehingga $BF$ membagi dua $\\angle ABC$ dan $\\angle DBF = \\angle EBF = 60^\\circ$.\nPada segitiga siku-siku $BDF$ ($30^\\circ\\text{-}60^\\circ\\text{-}90^\\circ$):\n$$DF = BD \\tan 60^\\circ = 4\\sqrt{3}\\text{ cm}, \\qquad EF = DF = 4\\sqrt{3}\\text{ cm}.$$\nPada segiempat $BDFE$, jumlah sudutnya $360^\\circ$ dengan $\\angle BDF = \\angle BEF = 90^\\circ$ dan $\\angle DBE = 120^\\circ$, sehingga $\\angle DFE = 60^\\circ$.\nSelanjutnya tinjau segitiga siku-siku $ADK$ (siku-siku di $D$, $\\angle DAK = 30^\\circ$):\n$$DK = AD \\tan 30^\\circ = \\frac{4}{\\sqrt{3}} = \\frac{4\\sqrt{3}}{3}\\text{ cm}.$$\nDengan cara yang sama pada segitiga siku-siku $CEJ$, diperoleh $EJ = \\frac{4\\sqrt{3}}{3}\\text{ cm}$.\nKarena $DK < DF$ dan $EJ < EF$, maka $K$ terletak pada ruas garis $DF$ dan $J$ terletak pada ruas garis $EF$, dengan\n$$FK = DF - DK = 4\\sqrt{3} - \\frac{4\\sqrt{3}}{3} = \\frac{8\\sqrt{3}}{3}\\text{ cm}, \\qquad FJ = EF - EJ = \\frac{8\\sqrt{3}}{3}\\text{ cm}.$$\nKarena $FJ = FK$ dan $\\angle JKF$ berhadapan dengan sisi yang sama serta $\\angle JFK = 60^\\circ$, segitiga $FJK$ merupakan segitiga sama sisi dengan panjang sisi $\\frac{8\\sqrt{3}}{3}\\text{ cm}$.\nLuas $\\triangle FJK$ adalah\n$$L_{\\triangle FJK} = \\frac{1}{2} \\cdot FJ \\cdot FK \\cdot \\sin 60^\\circ = \\frac{1}{2} \\cdot \\left(\\frac{8\\sqrt{3}}{3}\\right)^2 \\cdot \\frac{\\sqrt{3}}{2} = \\frac{1}{2} \\cdot \\frac{64 \\cdot 3}{9} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{16\\sqrt{3}}{3}\\text{ cm}^2.$$',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Dari segi lima $ABCDE$ dipilih $21$ titik yang berbeda. Satu titik dari sisi $AB$, dua titik dari sisi $BC$, tiga titik dari sisi $CD$, empat titik dari sisi $DE$, lima titik dari titik sudut $A, B, C, D, E$, dan enam titik dari sisi $AE$. Banyaknya segitiga yang dapat dibentuk dari seluruh titik yang dipilih adalah ....\n\nA. $560$\nB. $770$\nC. $1239$\nD. $1330$',
          answer: 'C. $1239$',
          principle: 'Pencacahan komplemen: banyaknya segitiga adalah $\\binom{21}{3}$ dikurangi banyaknya tripel titik yang segaris pada masing-masing sisi.',
          solution:
            'Banyaknya cara memilih $3$ titik sembarang dari $21$ titik yang tersedia adalah\n$$\\binom{21}{3} = \\frac{21 \\times 20 \\times 19}{3 \\times 2 \\times 1} = 1330.$$\nTiga titik tidak membentuk segitiga jika dan hanya jika ketiganya segaris, yaitu terletak pada sisi yang sama dari segi lima cembung $ABCDE$. Dengan mengikutsertakan $2$ titik sudut pada ujung setiap sisi, banyaknya titik pada masing-masing sisi adalah:\n- Sisi $AB$: $1 + 2 = 3$ titik $\\implies \\binom{3}{3} = 1$ tripel segaris.\n- Sisi $BC$: $2 + 2 = 4$ titik $\\implies \\binom{4}{3} = 4$ tripel segaris.\n- Sisi $CD$: $3 + 2 = 5$ titik $\\implies \\binom{5}{3} = 10$ tripel segaris.\n- Sisi $DE$: $4 + 2 = 6$ titik $\\implies \\binom{6}{3} = 20$ tripel segaris.\n- Sisi $AE$: $6 + 2 = 8$ titik $\\implies \\binom{8}{3} = 56$ tripel segaris.\nTotal tripel titik segaris adalah $1 + 4 + 10 + 20 + 56 = 91$.\nDengan demikian, banyaknya segitiga yang dapat dibentuk adalah\n$$1330 - 91 = 1239.$$',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Diketahui $x$ merupakan bilangan bulat positif kelipatan $2$ yang kurang dari $50$, $y$ merupakan bilangan bulat positif kelipatan $3$, dan $y - x = 10$. Jika $A$ adalah himpunan semua faktor prima dari $x$, $B$ adalah himpunan semua faktor prima dari $y$, dan jumlah semua anggota dari $A \\cup B$ adalah $10$, maka nilai dari $x + y$ adalah ....\n\nA. $14$\nB. $26$\nC. $38$\nD. $50$',
          answer: 'D. $50$',
          principle: 'Faktorisasi prima, keterbagian, dan analisis pembatas bilangan bulat.',
          solution:
            'Karena $x$ kelipatan $2$ dan $y$ kelipatan $3$, maka $2 \\in A$ dan $3 \\in B$, sehingga $\\{2, 3\\} \\subseteq A \\cup B$.\nJumlah seluruh anggota $A \\cup B$ adalah $10$, dan $2 + 3 = 5$, sehingga sisa bilangan prima pada $A \\cup B$ harus berjumlah $10 - 5 = 5$. Karena bilangan prima terkecil selain $2$ dan $3$ adalah $5$, satu-satunya kemungkinan adalah $A \\cup B = \\{2, 3, 5\\}$.\nDari $y = x + 10$, karena $x$ dan $10$ habis dibagi $2$, maka $y$ juga habis dibagi $2$. Akibatnya $y$ habis dibagi $6$, sehingga dapat ditulis $y = 6k$ ($k \\ge 1$ bulat) dan $x = 6k - 10 = 2(3k - 5)$.\nKarena $0 < x < 50$, diperoleh $0 < 6k - 10 < 50 \\implies 2 \\le k \\le 9$.\nSelain itu, $5 \\in A \\cup B$ berarti $5 \\mid x$ atau $5 \\mid y$. Perhatikan bahwa $5 \\mid 6k \\iff 5 \\mid k$, dan $5 \\mid 2(3k - 5) \\iff 5 \\mid 3k \\iff 5 \\mid k$. Jadi $5$ membagi $k$.\nSatu-satunya kelipatan $5$ dalam selang $2 \\le k \\le 9$ adalah $k = 5$.\nDiperoleh $y = 6(5) = 30$ (faktor prima $\\{2, 3, 5\\}$) dan $x = 30 - 10 = 20$ (faktor prima $\\{2, 5\\}$), yang memenuhi $A \\cup B = \\{2, 3, 5\\}$ dengan jumlah $10$.\nJadi, $x + y = 20 + 30 = 50$.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Gina bermain angka dengan mengisikan bilangan bulat $1, 2, \\dots, 9$ masing-masing tepat satu kali pada tabel $3 \\times 3$, sehingga hasil kali ketiga bilangan pada setiap baris adalah bilangan di sebelah kanan tabel dan hasil kali ketiga bilangan pada setiap kolom adalah bilangan di bawah tabel, seperti pada susunan berikut:\n$$\\begin{array}{ccc|c} \\square & \\square & \\square & 96 \\\\ N & \\square & \\square & 84 \\\\ \\square & \\square & \\square & 45 \\\\ \\hline 24 & 144 & 105 & \\end{array}$$\nNilai $N$ adalah ....\n\nA. $1$\nB. $3$\nC. $4$\nD. $6$',
          answer: 'D. $6$',
          principle: 'Faktorisasi prima unik untuk menentukan posisi bilangan prima $5$ dan $7$ serta menelusuri hasil kali baris dan kolom.',
          solution:
            'Faktorkan hasil kali kolom ketiga: $105 = 3 \\times 5 \\times 7$. Karena hanya ada satu bilangan kelipatan $5$ dan satu kelipatan $7$ di antara $1, \\dots, 9$, maka kolom ketiga tepat diisi oleh $\\{3, 5, 7\\}$.\n- Di antara hasil kali baris ($96, 84, 45$), hanya $45$ yang habis dibagi $5$, sehingga angka $5$ harus berada pada baris ke-$3$, kolom ke-$3$.\n- Hanya $84$ yang habis dibagi $7$, sehingga angka $7$ berada pada baris ke-$2$, kolom ke-$3$.\n- Sisa kolom ketiga adalah $3$ pada baris ke-$1$, kolom ke-$3$.\nSelanjutnya tinjau baris ke-$3$: hasil kali dua sel pertamanya adalah $\\frac{45}{5} = 9$. Dari bilangan tersisa $\\{1, 2, 4, 6, 8, 9\\}$, satu-satunya pasangan berhasil kali $9$ adalah $\\{1, 9\\}$. Karena hasil kali kolom pertama adalah $24$ (tidak habis dibagi $9$), sel baris ke-$3$ kolom ke-$1$ bernilai $1$, dan baris ke-$3$ kolom ke-$2$ bernilai $9$.\nPada kolom kedua, hasil kali dua sel teratas adalah $\\frac{144}{9} = 16$. Pada baris kedua, hasil kali dua sel pertamanya adalah $\\frac{84}{7} = 12$. Dari bilangan tersisa $\\{2, 4, 6, 8\\}$:\n- Satu-satunya pasangan yang hasil kalinya $12$ adalah $\\{2, 6\\}$, sehingga $N \\in \\{2, 6\\}$.\n- Karena sel baris ke-$2$ kolom ke-$2$ harus membagi $16$, sel tersebut tidak mungkin $6$, sehingga nilainya $2$ (dan baris ke-$1$ kolom ke-$2$ bernilai $8$).\nAkibatnya, $N = 6$ (dan sel baris ke-$1$ kolom ke-$1$ adalah $4$, yang memenuhi $4 \\times 8 \\times 3 = 96$ dan $4 \\times 6 \\times 1 = 24$).',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Sekelompok bilangan berbeda terdiri dari $6$ bilangan genap dan $4$ bilangan ganjil. Dari kelompok bilangan tersebut diperoleh informasi sebagai berikut.\n- Jangkauan data $= 24$.\n- Jangkauan antarkuartil $= 14$.\n- Bilangan ke-$3$, $5$, $6$, dan $8$ adalah bilangan ganjil.\n- Median $= 2024$.\n- Rata-rata bilangan ganjil adalah $2022$.\nRata-rata terbesar yang mungkin dimiliki oleh kelompok bilangan tersebut adalah ....\n\nA. $2022$\nB. $2022{,}4$\nC. $2024$\nD. $2024{,}4$',
          answer: 'B. $2022{,}4$',
          principle: 'Statistika data terurut ($n = 10$): median $= \\frac{x_5+x_6}{2}$, $Q_1 = x_3$, $Q_3 = x_8$, serta syarat bilangan bulat berbeda dan jangkauan.',
          solution:
            'Misalkan kesepuluh bilangan berbeda tersebut diurutkan menjadi $x_1 < x_2 < \\dots < x_{10}$, dengan $x_3, x_5, x_6, x_8$ ganjil dan enam bilangan lainnya genap.\n- Dari median $= 2024$: $\\frac{x_5 + x_6}{2} = 2024 \\implies x_5 + x_6 = 4048$.\n- Dari rata-rata $4$ bilangan ganjil $= 2022$: $x_3 + x_5 + x_6 + x_8 = 4 \\times 2022 = 8088$.\nKurangkan kedua persamaan tersebut: $x_3 + x_8 = 8088 - 4048 = 4040$.\n- Untuk $10$ data, kuartil bawah adalah median paruh bawah ($Q_1 = x_3$) dan kuartil atas adalah median paruh atas ($Q_3 = x_8$). Dari jangkauan antarkuartil $= 14$: $x_8 - x_3 = 14$.\nMenyelesaikan $x_8 + x_3 = 4040$ dan $x_8 - x_3 = 14$ menghasilkan $x_8 = 2027$ dan $x_3 = 2013$.\nKarena $x_6 < x_7 < x_8 = 2027$ dengan $x_7$ genap dan $x_6$ ganjil, maka $x_7 \\le 2026$ dan $x_6 \\le 2025$. Karena $x_5 < x_6$ dan $x_5 + x_6 = 4048$, maka $x_5 \\ge 2023$, sehingga terpaksa $x_5 = 2023$, $x_6 = 2025$, dan $x_7 = 2026$.\nUntuk memaksimumkan rata-rata, kita memaksimumkan bilangan genap lainnya:\n- Karena $x_1 < x_2 < x_3 = 2013$, nilai genap terbesar adalah $x_2 = 2012$ dan $x_1 = 2010$.\n- Karena $x_3 = 2013 < x_4 < x_5 = 2023$, nilai genap terbesar adalah $x_4 = 2022$.\n- Dari jangkauan $x_{10} - x_1 = 24$, nilai $x_{10} = x_1 + 24 \\le 2010 + 24 = 2034$, sehingga $x_{10} = 2034$ dan $x_9 = 2032$ (memenuhi $x_8 = 2027 < 2032 < 2034$).\nJumlah maksimum seluruh data adalah\n$$(2010 + 2012 + 2022 + 2026 + 2032 + 2034) + 8088 = 12136 + 8088 = 20224.$$\nRata-rata terbesar yang mungkin adalah $\\frac{20224}{10} = 2022{,}4$.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Jumlah semua bilangan ratusan yang ketiga digitnya berbeda dan tidak memuat $0$ adalah ....\n\nA. $359640$\nB. $279720$\nC. $277200$\nD. $252000$',
          answer: 'B. $279720$',
          principle: 'Simetri pencacahan nilai tempat pada bilangan tiga digit.',
          solution:
            'Bilangan ratusan yang dimaksud berbentuk $\\overline{xyz}$ dengan $x, y, z \\in \\{1, 2, \\dots, 9\\}$ dan ketiganya saling berbeda.\nOleh simetri, untuk setiap digit $d \\in \\{1, 2, \\dots, 9\\}$ pada posisi tertentu (ratusan, puluhan, atau satuan), dua posisi lainnya dapat diisi oleh $8 \\times 7 = 56$ pasangan digit berbeda dari sisa $8$ digit yang ada.\nJadi, setiap digit $1, 2, \\dots, 9$ muncul tepat $56$ kali pada posisi ratusan, $56$ kali pada posisi puluhan, dan $56$ kali pada posisi satuan.\nJumlah semua digit pada satu posisi nilai tempat adalah\n$$56 \\times (1 + 2 + \\dots + 9) = 56 \\times 45 = 2520.$$\nDengan menjumlahkan nilai tempat ratusan, puluhan, dan satuan:\n$$2520 \\times (100 + 10 + 1) = 2520 \\times 111 = 279720.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Diberikan $4$ bola pejal berukuran sama dengan diameter $22\\text{ cm}$ dan sebuah silinder dengan diameter $46\\text{ cm}$. Dua bola diletakkan di dasar silinder dengan jarak pusat keduanya $24\\text{ cm}$. Dua bola sisanya juga dimasukkan ke dalam silinder dengan jarak antar pusat keduanya $24\\text{ cm}$ dan garis yang menghubungkan kedua pusat bola ini tegak lurus dengan garis yang menghubungkan kedua pusat bola sebelumnya. Jika air dimasukkan ke dalam silinder sehingga menutupi seluruh permukaan bola, maka volume minimum air yang dimasukkan adalah .... $\\text{cm}^3$.\n\nA. $307\\frac{1}{2}\\pi$\nB. $529\\frac{1}{3}\\pi$\nC. $1694\\pi$\nD. $7098\\frac{2}{3}\\pi$',
          answer: '$\\frac{35836}{3}\\pi = 11945\\frac{1}{3}\\pi$ (catatan: opsi pada naskah asli tidak memuat nilai tepat)',
          principle: 'Geometri ruang 3D: jarak pusat dua bola bersinggungan $2r$ dengan teorema Pythagoras dan volume selisih tabung terhadap bola.',
          solution:
            'Jari-jari setiap bola adalah $r = \\frac{22}{2} = 11\\text{ cm}$ dan jari-jari silinder adalah $R = \\frac{46}{2} = 23\\text{ cm}$. Letakkan sumbu silinder pada sumbu-$z$ dan dasarnya pada bidang $z = 0$.\nDua bola di dasar memiliki pusat $O_1(-12, 0, 11)$ dan $O_2(12, 0, 11)$ (jaraknya $24\\text{ cm}$ dan masing-masing berjarak $12 + 11 = 23\\text{ cm}$ dari sumbu silinder sehingga pas menyentuh dinding silinder).\nAgar tinggi permukaan air minimum, dua bola di atasnya diletakkan serendah mungkin dengan pusat $O_3(0, -12, 11 + \\Delta z)$ dan $O_4(0, 12, 11 + \\Delta z)$ sehingga bersinggungan dengan bola di bawah ($O_1O_3 = 2r = 22\\text{ cm}$).\nDengan teorema Pythagoras 3D:\n$$O_1O_3^2 = (0 - (-12))^2 + (-12 - 0)^2 + \\Delta z^2 \\implies 22^2 = 12^2 + 12^2 + \\Delta z^2.$$\nDiperoleh $\\Delta z^2 = 484 - 288 = 196 \\implies \\Delta z = 14\\text{ cm}$.\nTitik tertinggi kedua bola atas berada pada ketinggian\n$$h = 11 + 14 + 11 = 36\\text{ cm}.$$\nVolume air minimum adalah volume tabung setinggi $h = 36\\text{ cm}$ dikurangi volume $4$ bola:\n$$V_{\\text{air}} = \\pi R^2 h - 4 \\cdot \\frac{4}{3}\\pi r^3 = \\pi(23^2)(36) - \\frac{16}{3}\\pi(11^3) = 19044\\pi - \\frac{21296}{3}\\pi = \\frac{35836}{3}\\pi = 11945\\frac{1}{3}\\pi\\text{ cm}^3.$$\n(Catatan: pada naskah asli OSN-K 2024, opsi pilihan ganda tidak memuat nilai tepat $11945\\frac{1}{3}\\pi$; nilai $7098\\frac{2}{3}\\pi$ pada opsi D adalah total volume keempat bola saja.)',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Empat bilangan asli kurang dari sepuluh memiliki rata-rata, median, dan modus tunggal yang membentuk tiga bilangan asli berurutan. Jika $A$ adalah jumlah terkecil yang mungkin dari empat bilangan tersebut dan $B$ adalah jumlah terbesar yang mungkin dari empat bilangan tersebut, maka nilai dari $A + B$ adalah ....\n\nA. $36$\nB. $40$\nC. $42$\nD. $44$',
          answer: 'B. $40$',
          principle: 'Analisis syarat modus tunggal dan urutan nilai rata-rata, median, serta modus pada empat data.',
          solution:
            'Misalkan keempat bilangan asli tersebut adalah $1 \\le a \\le b \\le c \\le d \\le 9$, dengan rata-rata $\\bar{x}$, median $M$, dan modus tunggal $\\text{Mo}$.\nAgar memiliki **modus tunggal**, tidak mungkin keempatnya sama ($\\bar{x} = M = \\text{Mo}$), tidak mungkin tepat tiga sama ($M = \\text{Mo}$), tidak mungkin ada dua pasang sama (dua modus), dan tidak mungkin semuanya berbeda (tidak ada modus). Jadi harus ada tepat dua bilangan sama dan dua lainnya berbeda.\n- Jika $b = c$ ($a < b = c < d$): maka $M = b = \\text{Mo}$, tidak mungkin.\n- Kasus 1: $a = b < c < d$. Diperoleh $\\text{Mo} = a$, $M = \\frac{a+c}{2}$, $\\bar{x} = \\frac{2a+c+d}{4}$. Karena $a < c < d$, berlaku $a < \\frac{a+c}{2} < \\frac{2a+c+d}{4}$, yakni $\\text{Mo} < M < \\bar{x}$. Agar berurutan:\n  $$M = \\text{Mo} + 1 \\implies \\frac{a+c}{2} = a + 1 \\implies c = a + 2,$$\n  $$\\bar{x} = \\text{Mo} + 2 \\implies \\frac{2a + (a+2) + d}{4} = a + 2 \\implies d = a + 6.$$\n  Keempat bilangan berbentuk $(a, a, a+2, a+6)$ dengan $1 \\le a$ dan $a+6 \\le 9 \\implies 1 \\le a \\le 3$. Jumlah terkecil terjadi saat $a = 1$, yaitu $(1, 1, 3, 7)$ dengan jumlah $12$, dan terbesar pada kasus ini adalah $20$ ($a = 3$).\n- Kasus 2: $a < b < c = d$. Diperoleh $\\bar{x} < M < \\text{Mo} = c$. Agar berurutan:\n  $$M = c - 1 \\implies \\frac{b+c}{2} = c - 1 \\implies b = c - 2,$$\n  $$\\bar{x} = c - 2 \\implies \\frac{a + (c-2) + 2c}{4} = c - 2 \\implies a = c - 6.$$\n  Keempat bilangan berbentuk $(c-6, c-2, c, c)$ dengan $c - 6 \\ge 1$ dan $c \\le 9 \\implies 7 \\le c \\le 9$. Jumlah terbesar terjadi saat $c = 9$, yaitu $(3, 7, 9, 9)$ dengan jumlah $28$ (jumlah terkecil pada kasus ini adalah $20$).\nJadi $A = 12$ dan $B = 28$, sehingga $A + B = 12 + 28 = 40$.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Bilangan-bilangan $4, 5, 6, 9, 11, 12, 18, 20,$ dan $24$ akan diletakkan pada $4$ lingkaran dan $5$ persegi yang disusun berselang-seling dalam satu baris sebagai berikut:\n$$\\square - \\bigcirc - \\square - \\bigcirc - \\square - \\bigcirc - \\square - \\bigcirc - \\square$$\nSetiap bilangan harus digunakan tepat satu kali dan diletakkan di tempat yang berbeda. Selain itu, bilangan pada setiap lingkaran harus merupakan hasil penjumlahan dari dua bilangan pada persegi yang berada tepat di sebelah kiri dan kanannya. Jika $x$ adalah bilangan pada persegi paling kiri dan $y$ adalah bilangan pada persegi paling kanan, maka nilai terbesar yang mungkin dari $x + y$ adalah ....\n\nA. $32$\nB. $38$\nC. $42$\nD. $44$',
          answer: 'A. $32$',
          principle: 'Pembatasan ekstremum pada graf lintasan dengan aturan penjumlahan tetangga.',
          solution:
            'Karena semua bilangan bernilai positif, bilangan pada setiap lingkaran selalu lebih besar daripada kedua bilangan pada persegi di kiri dan kanannya.\nAkibatnya, bilangan terbesar $24$ tidak mungkin diletakkan pada persegi (jika diletakkan pada persegi, lingkaran di sebelahnya harus bernilai lebih dari $24$, yang tidak tersedia). Jadi pilihan $44 = 24 + 20$ dan $42 = 24 + 18$ tidak mungkin.\nAndaikan $x + y = 38$, maka pasangan dua bilangan dari sisa daftar yang jumlahnya $38$ hanyalah $\\{20, 18\\}$. Misalkan $x = 20$ dan $y = 18$. Lingkaran di sebelah kanan $x$ harus bernilai $> 20$, sehingga wajib berisi $24$. Lingkaran di sebelah kiri $y$ harus bernilai $> 18$ dan berbeda dari $24$, sehingga wajib berisi $20$—tetapi $20$ sudah dipakai sebagai $x$ (kontradiksi). Jadi $38$ juga tidak mungkin.\nUntuk $x + y = 32$, konstruksi berikut memenuhi semua syarat dengan $x = 20$ dan $y = 12$:\n$$20 - (24) - 4 - (9) - 5 - (11) - 6 - (18) - 12.$$\nKarena seluruh bilangan $\\{4, 5, 6, 9, 11, 12, 18, 20, 24\\}$ terpakai tepat satu kali, nilai terbesar yang mungkin dari $x + y$ adalah $32$.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Diketahui $A = \\{0, 1, 2, \\dots, 9\\}$ dan $\\overline{rstu}$ adalah bilangan empat digit dengan $r, s, t, u$ adalah anggota $A$ yang berbeda. Jika\n$$\\overline{rstu} + \\overline{stu} = \\overline{vwxyz},$$\ndengan $r, s, t, u, v, w, x, y, z$ adalah anggota $A$ yang berbeda, maka anggota $A$ yang tidak digunakan dalam operasi penjumlahan tersebut adalah ....\n\nA. $2$\nB. $3$\nC. $5$\nD. $8$',
          answer: 'B. $3$',
          principle: 'Invarian modulo $9$ untuk jumlah seluruh digit ($0+1+\\dots+9=45$) dan batas nilai tempat.',
          solution:
            'Karena $\\overline{stu} < 1000$ dan $\\overline{vwxyz} \\ge 10000$, maka $\\overline{rstu} > 9000 \\implies r = 9$. Selain itu, $\\overline{rstu} + \\overline{stu} < 10000 + 1000 = 11000$, sehingga $v = 1$ dan $w = 0$.\nMisalkan $d \\in A$ adalah satu digit yang tidak digunakan. Jumlah seluruh $10$ digit pada $A$ adalah $0 + 1 + \\dots + 9 = 45 \\equiv 0 \\pmod{9}$, sehingga jumlah sembilan digit yang digunakan kongruen dengan $-d \\pmod{9}$:\n$$(r + s + t + u) + (v + w + x + y + z) \\equiv -d \\pmod{9}.$$\nDari $\\overline{rstu} + \\overline{stu} = \\overline{vwxyz}$ dalam modulo $9$:\n$$(r + s + t + u) + (s + t + u) \\equiv v + w + x + y + z \\pmod{9}.$$\nSubstitusikan ekspresi $v + w + x + y + z$ tersebut ke kekongruenan sebelumnya dan gunakan $r = 9 \\equiv 0 \\pmod{9}$:\n$$2(r + s + t + u) + (s + t + u) \\equiv 3(s + t + u) \\equiv -d \\pmod{9}.$$\nKarena $3(s + t + u)$ habis dibagi $3$, maka $d$ harus habis dibagi $3$, yaitu $d \\in \\{0, 3, 6, 9\\}$. Karena $w = 0$ dan $r = 9$ sudah terpakai, maka $d \\in \\{3, 6\\}$.\nDi antara pilihan jawaban yang tersedia ($2, 3, 5, 8$), hanya $3$ yang merupakan kelipatan $3$. Contoh susunan valid yang tidak memakai angka $3$ adalah\n$$9782 + 782 = 10564,$$\nyang menggunakan tepat sembilan digit berbeda $\\{0, 1, 2, 4, 5, 6, 7, 8, 9\\}$. Jadi anggota $A$ yang tidak digunakan adalah $3$.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Banyaknya faktor positif dari $2024$ yang lebih besar dari $\\sqrt{2024}$ adalah ....\n\nA. $4$\nB. $8$\nC. $12$\nD. $16$',
          answer: 'B. $8$',
          principle: 'Faktorisasi prima untuk menghitung banyak faktor dan pemasangan faktor komplementer $(d, n/d)$.',
          solution:
            'Faktorisasi prima dari $2024$ adalah\n$$2024 = 8 \\times 253 = 2^3 \\times 11^1 \\times 23^1.$$\nBanyaknya seluruh faktor positif dari $2024$ adalah\n$$(3 + 1)(1 + 1)(1 + 1) = 4 \\times 2 \\times 2 = 16.$$\nKarena $44^2 = 1936 < 2024 < 2025 = 45^2$, bilangan $2024$ bukan bilangan kuadrat sempurna, sehingga $\\sqrt{2024}$ bukan bilangan bulat.\nKe-$16$ faktor positif $2024$ dapat dipasangkan menjadi $8$ pasangan faktor komplementer $(d, 2024/d)$ dengan $d < \\sqrt{2024} < \\frac{2024}{d}$.\nJadi, terdapat tepat $8$ faktor positif yang lebih besar dari $\\sqrt{2024}$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Diketahui pertidaksamaan $\\sqrt{x - 3} + \\sqrt{6 - x} \\ge p$ memiliki penyelesaian untuk $x \\in \\mathbb{R}$. Nilai $p$ terbesar yang mungkin adalah ....\n\nA. $\\sqrt{6}$\nB. $3$\nC. $\\sqrt{6} + \\sqrt{3}$\nD. $6$',
          answer: 'A. $\\sqrt{6}$',
          principle: 'Mencari nilai maksimum bentuk akar dengan pengkuadratan dan ketaksamaan $4ab \\le (a+b)^2$.',
          solution:
            'Agar $\\sqrt{x - 3}$ dan $\\sqrt{6 - x}$ terdefinisi di $\\mathbb{R}$, haruslah $x - 3 \\ge 0$ dan $6 - x \\ge 0$, yaitu $3 \\le x \\le 6$.\nMisalkan $f(x) = \\sqrt{x - 3} + \\sqrt{6 - x} > 0$. Kuadratkan $f(x)$:\n$$f(x)^2 = (x - 3) + (6 - x) + 2\\sqrt{(x - 3)(6 - x)} = 3 + 2\\sqrt{(x - 3)(6 - x)}.$$\nDengan identitas $(a - b)^2 \\ge 0 \\iff ab \\le \\left(\\frac{a + b}{2}\\right)^2$ untuk $a = x - 3$ dan $b = 6 - x$ (di mana $a + b = 3$):\n$$(x - 3)(6 - x) \\le \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4},$$\ndengan kesamaan tercapai saat $x - 3 = 6 - x \\iff x = \\frac{9}{2} \\in [3, 6]$.\nAkibatnya,\n$$f(x)^2 \\le 3 + 2\\sqrt{\\frac{9}{4}} = 3 + 3 = 6 \\implies f(x) \\le \\sqrt{6}.$$\nPertidaksamaan $f(x) \\ge p$ memiliki penyelesaian real jika dan hanya jika $p \\le f(x)_{\\text{maks}} = \\sqrt{6}$. Jadi nilai $p$ terbesar yang mungkin adalah $\\sqrt{6}$.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Segi enam beraturan $ABCDEF$ memiliki panjang sisi $2024\\text{ mm}$. Titik $G$ adalah titik tengah $AB$ dan titik $H$ adalah titik tengah $EG$. Perbandingan luas daerah segitiga $CDH$ dan segi enam $ABCDEF$ adalah ....\n\nA. $4:24$\nB. $5:24$\nC. $6:24$\nD. $7:24$',
          answer: 'B. $5:24$',
          principle: 'Sifat jarak titik tengah terhadap garis alas: jika $H$ titik tengah $EG$, maka $[\\triangle CDH] = \\frac{1}{2}([\\triangle CDE] + [\\triangle CDG])$.',
          solution:
            'Misalkan luas segi enam beraturan $ABCDEF$ adalah $L$. Segi enam beraturan terbagi menjadi $6$ segitiga sama sisi kongruen, masing-masing berluas $\\frac{1}{6}L$.\nKarena seluruh titik segi enam terletak pada sisi yang sama terhadap garis $CD$, jarak dari titik tengah $H$ pada $EG$ ke garis $CD$ adalah rata-rata jarak $E$ dan $G$ ke $CD$. Dengan alas bersama $CD$, diperoleh\n$$[\\triangle CDH] = \\frac{[\\triangle CDE] + [\\triangle CDG]}{2}.$$\nDengan cara yang sama, karena $G$ titik tengah $AB$:\n$$[\\triangle CDG] = \\frac{[\\triangle CDA] + [\\triangle CDB]}{2}.$$\nTinjau masing-masing luas segitiga dalam $L$ (misalkan sisi segi enam $s$, sehingga tinggi segitiga sama sisi adalah $t = \\frac{\\sqrt{3}}{2}s$ dan $L = 6 \\cdot \\frac{1}{2}st = 3st$):\n- $[\\triangle CDE] = \\frac{1}{2} s \\cdot s\\sin 120^\\circ = \\frac{1}{2}st = \\frac{1}{6}L$.\n- $[\\triangle CDB] = \\frac{1}{2} s \\cdot s\\sin 120^\\circ = \\frac{1}{6}L$.\n- Karena $AF \\parallel CD$ dan jarak antara kedua sisi sejajar berhadapan ini adalah $2t$, maka $[\\triangle CDA] = \\frac{1}{2} s (2t) = st = \\frac{1}{3}L$.\nSubstitusikan berturut-turut:\n$$[\\triangle CDG] = \\frac{\\frac{1}{3}L + \\frac{1}{6}L}{2} = \\frac{1}{4}L,$$\n$$[\\triangle CDH] = \\frac{\\frac{1}{6}L + \\frac{1}{4}L}{2} = \\frac{\\frac{5}{12}L}{2} = \\frac{5}{24}L.$$\nJadi perbandingan luas $\\triangle CDH$ dan segi enam $ABCDEF$ adalah $5:24$.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Diketahui $a, b,$ dan $c$ adalah bilangan ratusan yang satuannya sama dengan ratusannya. Jika $b = 2a + 1$ dan $c = 2b + 1$, maka banyaknya kemungkinan tripel $(a, b, c)$ yang berbeda adalah ....\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$',
          answer: 'B. $2$',
          principle: 'Representasi nilai tempat bilangan tiga digit palindrom $\\overline{xyx} = 101x + 10y$ dan pembatasan digit satuan serta ratusan.',
          solution:
            'Karena $a$ adalah bilangan tiga digit dengan digit ratusan dan satuan sama, tulis $a = \\overline{xyx} = 101x + 10y$ dengan $x \\in \\{1, 2, \\dots, 9\\}$ dan $y \\in \\{0, 1, \\dots, 9\\}$.\nMaka\n$$b = 2a + 1 = 202x + 20y + 1,$$\n$$c = 2b + 1 = 404x + 40y + 3.$$\nKarena $c$ adalah bilangan ratusan ($c \\le 999$), haruslah $404x + 40y + 3 \\le 999$, sehingga $x \\in \\{1, 2\\}$.\n- Kasus 1 ($x = 1$): Diperoleh $c = 407 + 40y$. Karena $40y$ selalu berakhiran $0$, digit satuan $c$ adalah $7$. Agar digit ratusan $c$ juga sama dengan $7$, haruslah\n  $$700 \\le 407 + 40y \\le 799 \\implies 293 \\le 40y \\le 392 \\implies y \\in \\{8, 9\\}.$$\n  Uji keduanya:\n  - Untuk $y = 8$: $(a, b, c) = (181, 363, 727)$ — ketiganya bilangan ratusan dengan satuan sama dengan ratusan.\n  - Untuk $y = 9$: $(a, b, c) = (191, 383, 767)$ — ketiganya juga memenuhi.\n- Kasus 2 ($x = 2$): Diperoleh $c = 811 + 40y \\ge 811$. Digit satuan $c$ adalah $1$, sedangkan digit ratusannya minimal $8$, sehingga tidak mungkin sama.\nJadi, terdapat tepat $2$ tripel $(a, b, c)$ yang memenuhi.',
          rubric: OK
        }
      ]
    }
  ]
};
