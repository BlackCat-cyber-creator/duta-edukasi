/**
 * Paket Soal Terstruktur: KSN-K / OSN-K Matematika SMP 2020 (24 soal pilihan ganda)
 * Sumber: scraped_raw/osnk-matematika-smp-2020.md (25 soal asli).
 * Catatan penyuntingan: 24 soal dimuat (nomor asli 1-6 dan 8-25, dinomori ulang 1-24).
 * Soal nomor asli 7 dilewati karena mutlak membutuhkan gambar yang hilang pada arsip sumber.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-mat-smp-2020',
  slug: 'osnk-matematika-smp-2020',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'KSN-K / OSN-K Matematika SMP 2020',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab4-bentuk-aljabar',
    'smp7-bab5-kesebangunan',
    'smp8-bab1-bilangan-berpangkat',
    'smp8-bab2-teorema-pythagoras',
    'smp8-bab6-statistika',
    'smp9-bab2-bangun-ruang',
    'smp9-bab3-transformasi-geometri',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SMP 2020',
  totalMarks: 24,
  instructions:
    'Naskah asli KSN-K / OSN-K Matematika SMP 2020 terdiri atas 25 soal pilihan ganda. Dari 25 soal tersebut, 24 soal dimuat pada paket ini (nomor asli 1-6 dan 8-25, dinomori ulang 1-24) dan 1 soal dilewati (nomor asli 7) karena mutlak membutuhkan gambar asli yang tidak tersedia pada arsip sumber. Setiap jawaban benar bernilai 1 poin (total 24 poin).',
  source: {
    org: 'OSN-K / KSN-K Matematika SMP',
    file: 'scraped_raw/osnk-matematika-smp-2020.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 24,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (24 soal dimuat dari 25 soal naskah asli; masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Jika $a, b, c, d$ adalah bilangan bulat positif berbeda sehingga $abcd = 2020$, maka nilai terkecil yang mungkin dari $\\frac{a+b}{c+d}$ adalah ....\n\nA. $\\frac{3}{507}$\nB. $\\frac{5}{106}$\nC. $\\frac{1}{17}$\nD. $\\frac{1}{69}$',
          answer: 'D. $\\frac{1}{69}$',
          principle: 'Faktorisasi prima bilangan bulat dan meminimumkan pecahan positif dengan pembilang sekecil mungkin dan penyebut sebesar mungkin.',
          solution:
            'Faktorkan $2020$ ke dalam faktor prima:\n$$2020 = 2^2 \\times 5 \\times 101.$$\nBanyaknya faktor prima (dengan pengulangan) adalah $4$, terdiri atas tiga prima berbeda ($2, 5, 101$). Agar diperoleh empat bilangan bulat positif berbeda $a, b, c, d$, salah satunya harus bernilai $1$ (jika semuanya $> 1$, satu-satunya cara memecah menjadi empat faktor adalah $\\{2, 2, 5, 101\\}$ yang memuat dua bilangan sama).\n\nKemungkinan himpunan keempat bilangan berbeda tersebut adalah:\n- $\\{1, 2, 5, 202\\}$: nilai minimum $\\frac{a+b}{c+d} = \\frac{1+2}{5+202} = \\frac{3}{207} = \\frac{1}{69}$.\n- $\\{1, 2, 10, 101\\}$: nilai minimum $\\frac{a+b}{c+d} = \\frac{1+2}{10+101} = \\frac{3}{111} = \\frac{1}{37}$.\n- $\\{1, 4, 5, 101\\}$: nilai minimum $\\frac{a+b}{c+d} = \\frac{1+4}{5+101} = \\frac{5}{106}$.\n\nMembandingkan ketiganya: $\\frac{1}{69} < \\frac{1}{37}$ dan $5 \\times 69 = 345 > 106$ sehingga $\\frac{1}{69} < \\frac{5}{106}$. Jadi nilai terkecilnya adalah $\\frac{1}{69}$.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Manakah di antara bilangan berikut yang merupakan bilangan prima?\n\nA. $2017$\nB. $2019$\nC. $2021$\nD. $2023$',
          answer: 'A. $2017$',
          principle: 'Uji keterbagian dan pemfaktoran selisih dua kuadrat untuk mengeliminasi bilangan komposit.',
          solution:
            'Periksa masing-masing pilihan:\n- $2019$: jumlah digitnya $2 + 0 + 1 + 9 = 12$ habis dibagi $3$, sehingga $2019 = 3 \\times 673$ (bukan prima).\n- $2021$: gunakan selisih dua kuadrat, $2021 = 45^2 - 2^2 = (45 - 2)(45 + 2) = 43 \\times 47$ (bukan prima).\n- $2023$: $2023 = 2100 - 77 = 7(300 - 11) = 7 \\times 289 = 7 \\times 17^2$ (bukan prima).\n- $2017$: karena $\\sqrt{2017} < \\sqrt{2025} = 45$, cukup periksa keterbagian $2017$ oleh bilangan prima $\\le 43$, yaitu $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43$. Tidak ada satu pun yang membagi habis $2017$ (misalnya $2017 = 7 \\times 288 + 1$, $2017 = 11 \\times 183 + 4$, $2017 = 13 \\times 155 + 2$, $2017 = 17 \\times 118 + 11$, $2017 = 19 \\times 106 + 3$, $2017 = 23 \\times 87 + 16$, $2017 = 29 \\times 69 + 16$, $2017 = 31 \\times 65 + 2$, $2017 = 37 \\times 54 + 19$, $2017 = 41 \\times 49 + 8$, $2017 = 43 \\times 46 + 39$).\n\nJadi bilangan prima di antara keempat pilihan tersebut adalah $2017$.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Jika $\\Delta(a,b,c) = ab + ac + bc$, dan misalkan $x_1$ dan $x_2$ adalah bilangan yang memenuhi $\\frac{1}{3}\\Delta(x+1, x-2, 5) = (x-2)(x+2)$, maka nilai terbesar yang mungkin dari $2x_1 - 3x_2$ adalah ....\n\nA. $-16$\nB. $13$\nC. $8$\nD. $\\frac{23}{2}$',
          answer: 'D. $\\frac{23}{2}$',
          principle: 'Substitusi definisi fungsi tiga peubah ke dalam persamaan kuadrat lalu pemfaktoran.',
          solution:
            'Substitusikan $a = x+1$, $b = x-2$, dan $c = 5$ ke persamaan:\n$$\\frac{1}{3}\\bigl((x+1)(x-2) + 5(x+1) + 5(x-2)\\bigr) = x^2 - 4.$$\nKalikan kedua ruas dengan $3$:\n$$(x^2 - x - 2) + (5x + 5) + (5x - 10) = 3x^2 - 12$$\n$$x^2 + 9x - 7 = 3x^2 - 12$$\n$$2x^2 - 9x - 5 = 0$$\n$$(2x + 1)(x - 5) = 0.$$\nDiperoleh akar-akar $x = -\\frac{1}{2}$ dan $x = 5$. Untuk memaksimumkan $2x_1 - 3x_2$, pilih $x_1$ sebesar mungkin ($x_1 = 5$) dan $x_2$ sekecil mungkin ($x_2 = -\\frac{1}{2}$):\n$$2(5) - 3\\left(-\\frac{1}{2}\\right) = 10 + \\frac{3}{2} = \\frac{23}{2}.$$',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Jumlah $n$ suku pertama suatu deret aritmetika adalah $450$. Jika suku pertama adalah $n$ dan suku ke-$n$ adalah $45$, maka selisih barisan tersebut adalah ....\n\nA. $\\frac{13}{7}$\nB. $\\frac{15}{7}$\nC. $\\frac{13}{11}$\nD. $\\frac{15}{11}$',
          answer: 'B. $\\frac{15}{7}$',
          principle: 'Rumus jumlah $n$ suku pertama $S_n = \\frac{n}{2}(a + u_n)$ dan suku ke-$n$ barisan aritmetika $u_n = a + (n-1)b$.',
          solution:
            'Diketahui $S_n = 450$, $a = n$, dan $u_n = 45$. Dari rumus jumlah deret aritmetika:\n$$S_n = \\frac{n}{2}(a + u_n) \\implies 450 = \\frac{n}{2}(n + 45)$$\n$$n^2 + 45n - 900 = 0$$\n$$(n - 15)(n + 60) = 0.$$\nKarena $n$ menyatakan banyaknya suku ($n > 0$), diperoleh $n = 15$ dan suku pertama $a = 15$. Selanjutnya gunakan $u_n = a + (n-1)b$:\n$$45 = 15 + (15 - 1)b \\implies 14b = 30 \\implies b = \\frac{30}{14} = \\frac{15}{7}.$$',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Jika $f(x) = 5x - 3$, maka jumlah semua $x$ yang memenuhi $(f(x))^2 - 6f(x) = -9$ adalah ....\n\nA. $0$\nB. $3$\nC. $\\frac{3}{5}$\nD. $\\frac{6}{5}$',
          answer: 'D. $\\frac{6}{5}$',
          principle: 'Pemfaktoran kuadrat sempurna $(u - 3)^2 = 0$ menghasilkan penyelesaian tunggal.',
          solution:
            'Pindahkan $-9$ ke ruas kiri sehingga membentuk kuadrat sempurna terhadap $f(x)$:\n$$(f(x))^2 - 6f(x) + 9 = 0 \\iff (f(x) - 3)^2 = 0 \\iff f(x) = 3.$$\nSubstitusikan $f(x) = 5x - 3$:\n$$5x - 3 = 3 \\implies 5x = 6 \\implies x = \\frac{6}{5}.$$\nKarena hanya ada satu nilai $x$ yang memenuhi persamaan (bukan dua nilai berbeda), jumlah semua $x$ yang memenuhi adalah $\\frac{6}{5}$.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            '$R_t$ dan $R_k$ berturut-turut menyatakan jari-jari tabung dan jari-jari kerucut. Jika tinggi tabung dan tinggi kerucut adalah $3600\\text{ cm}$, volume tabung $490\\pi$ liter dan volume kerucut $30\\pi$ liter, maka hubungan antara $R_t$ dan $R_k$ adalah ....\n\nA. $7R_t = 3R_k$\nB. $3R_t = 7R_k$\nC. $6R_t = 7R_k$\nD. $6R_t = 3R_k$',
          answer: 'B. $3R_t = 7R_k$',
          principle: 'Perbandingan volume tabung ($\\pi R_t^2 t$) dan kerucut ($\\frac{1}{3}\\pi R_k^2 t$) pada tinggi yang sama.',
          solution:
            'Karena tinggi tabung dan kerucut sama ($t = 3600\\text{ cm}$) serta satuan volume keduanya sama (liter), perbandingan volumenya adalah:\n$$\\frac{V_{\\text{tabung}}}{V_{\\text{kerucut}}} = \\frac{\\pi R_t^2 t}{\\frac{1}{3}\\pi R_k^2 t} = \\frac{3R_t^2}{R_k^2}.$$\nSubstitusikan nilai volume yang diketahui:\n$$\\frac{490\\pi}{30\\pi} = \\frac{3R_t^2}{R_k^2} \\implies \\frac{49}{3} = \\frac{3R_t^2}{R_k^2} \\implies \\left(\\frac{R_t}{R_k}\\right)^2 = \\frac{49}{9}.$$\nKarena $R_t, R_k > 0$, tarik akar kuadrat kedua ruas:\n$$\\frac{R_t}{R_k} = \\frac{7}{3} \\implies 3R_t = 7R_k.$$',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Di dalam sebuah kerucut terdapat sebuah balok. Volume kerucut $600\\pi\\text{ cm}^3$ dan jari-jarinya $10\\text{ cm}$. Jika tinggi balok setengah tinggi kerucut, maka volume balok terbesar yang ada di dalam kerucut tersebut adalah ....\n\nA. $72\\text{ cm}^3$\nB. $225\\text{ cm}^3$\nC. $450\\text{ cm}^3$\nD. $900\\text{ cm}^3$',
          answer: 'C. $450\\text{ cm}^3$',
          principle: 'Kesebangunan penampang kerucut dan luas maksimum persegi panjang yang termuat dalam lingkaran.',
          solution:
            'Dari rumus volume kerucut dengan $r = 10\\text{ cm}$:\n$$600\\pi = \\frac{1}{3}\\pi (10)^2 t_K \\implies t_K = 18\\text{ cm}.$$\nTinggi balok adalah $t_B = \\frac{1}{2}t_K = 9\\text{ cm}$.\n\nPada ketinggian $9\\text{ cm}$ dari alas kerucut, penampang melintang kerucut berupa lingkaran dengan jari-jari $r\'$ yang memenuhi kesebangunan:\n$$\\frac{r\'}{r} = \\frac{t_K - t_B}{t_K} = \\frac{18 - 9}{18} = \\frac{1}{2} \\implies r\' = 5\\text{ cm}.$$\nAgar balok termuat dalam kerucut, alas (dan tutup) balok berukuran $p \\times l$ harus termuat dalam lingkaran berjari-jari $r\' = 5\\text{ cm}$, sehingga diagonalnya memenuhi $p^2 + l^2 \\le (2r\')^2 = 10^2 = 100$.\n\nDari $(p - l)^2 \\ge 0$ diperoleh $2pl \\le p^2 + l^2 \\le 100$, sehingga luas alas maksimum adalah $pl = 50\\text{ cm}^2$ (tercapai saat $p = l = 5\\sqrt{2}\\text{ cm}$).\nJadi volume balok terbesar adalah:\n$$V_{\\text{maks}} = 50 \\times 9 = 450\\text{ cm}^3.$$',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Pada suatu pameran seni di sekolah, akan dipajang $8$ lukisan istimewa terdiri dari $3$ lukisan cat air dan $5$ lukisan cat minyak. Semua lukisan tersebut saling berbeda. Untuk alasan artistik, setiap lukisan cat air akan diletakkan di antara dua lukisan cat minyak. Banyak kemungkinan susunan lukisan cat air dan cat minyak tersebut adalah ....\n\nA. $720$\nB. $930$\nC. $1250$\nD. $2880$',
          answer: 'D. $2880$',
          principle: 'Aturan perkalian dan penyisipan objek pada celah di antara objek lain.',
          solution:
            'Susun terlebih dahulu $5$ lukisan cat minyak ($M$) yang semuanya berbeda; banyaknya cara adalah $5! = 120$.\n\nSusunan tersebut membentuk $4$ celah di antara dua lukisan cat minyak yang berdekatan:\n$$M \\; \\underline{\\phantom{x}} \\; M \\; \\underline{\\phantom{x}} \\; M \\; \\underline{\\phantom{x}} \\; M \\; \\underline{\\phantom{x}} \\; M.$$\nAgar setiap lukisan cat air tepat diapit oleh dua lukisan cat minyak (dan tidak ada dua lukisan cat air yang bersebelahan), pilih $3$ dari $4$ celah tersebut dalam $\\binom{4}{3} = 4$ cara, lalu susun $3$ lukisan cat air berbeda pada ketiga celah terpilih dalam $3! = 6$ cara.\n\nTotal banyak susunan yang mungkin adalah:\n$$5! \\times \\binom{4}{3} \\times 3! = 120 \\times 4 \\times 6 = 2880.$$',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Sebuah dadu bersisi enam dilempar sebanyak $n$ kali, $n > 0$. Jika rata-rata mata dadu yang keluar adalah $\\frac{1}{4}n$, maka median dari seluruh nilai $n$ yang mungkin adalah ....\n\nA. $11$\nB. $12$\nC. $13$\nD. $14$',
          answer: 'D. $14$',
          principle: 'Batas rata-rata dan syarat bilangan bulat pada jumlah hasil pelemparan dadu, serta penentuan median.',
          solution:
            'Misalkan $S$ adalah jumlah seluruh mata dadu dari $n$ kali pelemparan. Karena setiap mata dadu bernilai antara $1$ sampai $6$, berlaku $n \\le S \\le 6n$.\n\nRata-rata yang diberikan adalah $\\frac{S}{n} = \\frac{1}{4}n$, sehingga:\n$$S = \\frac{n^2}{4}.$$\nSyarat yang harus dipenuhi oleh $n$:\n1. $S$ harus bilangan bulat, sehingga $4 \\mid n^2$, yang berarti $n$ harus bilangan bulat genap.\n2. Dari $1 \\le \\frac{1}{4}n \\le 6$ diperoleh $4 \\le n \\le 24$.\n\nSetiap bilangan genap $n \\in \\{4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24\\}$ menghasilkan bilangan bulat $S = \\frac{n^2}{4}$ yang memenuhi $n \\le S \\le 6n$, sehingga selalu dapat dibentuk dari $n$ pelemparan dadu. Ada $11$ nilai $n$ yang mungkin, dan mediannya (suku ke-$6$) adalah $14$.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Jika $2^{5n}$ dan $5^{2m}$ adalah faktor dari $2020^{2020}$, maka jumlah digit dari nilai maksimum $m + 2n$ adalah ....\n\nA. $16$\nB. $18$\nC. $20$\nD. $22$',
          answer: 'A. $16$',
          principle: 'Faktorisasi prima dari bilangan berpangkat dan syarat keterbagian pangkat prima.',
          solution:
            'Uraikan $2020^{2020}$ ke dalam faktor primanya:\n$$2020^{2020} = (2^2 \\cdot 5 \\cdot 101)^{2020} = 2^{4040} \\cdot 5^{2020} \\cdot 101^{2020}.$$\nAgar $2^{5n}$ dan $5^{2m}$ membagi habis $2020^{2020}$, pangkat masing-masing prima tidak boleh melebihi pangkatnya pada $2020^{2020}$:\n- $5n \\le 4040 \\implies n \\le 808$, sehingga nilai maksimum $n = 808$.\n- $2m \\le 2020 \\implies m \\le 1010$, sehingga nilai maksimum $m = 1010$.\n\nNilai maksimum dari $m + 2n$ adalah:\n$$1010 + 2(808) = 1010 + 1616 = 2626.$$\nJumlah digit dari $2626$ adalah $2 + 6 + 2 + 6 = 16$.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Diberikan empat bilangan bulat positif $a, b, c,$ dan $d$ yang memenuhi pertaksamaan $a < b < c < d$. Diketahui pula $\\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c} + \\frac{1}{d} = 1$. Banyaknya pasangan bilangan $(a,b,c,d)$ yang memenuhi permasalahan di atas adalah ....\n\nA. $1$\nB. $4$\nC. $6$\nD. $9$',
          answer: 'C. $6$',
          principle: 'Pencarian solusi pecahan satuan (Egyptian fractions) dengan pembatasan bertahap dan pemfaktoran.',
          solution:
            'Karena $1 \\le a < b < c < d$ dan $\\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c} + \\frac{1}{d} = 1$, maka $a > 1$ (jika $a=1$, jumlahnya $> 1$) dan\n$$1 = \\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c} + \\frac{1}{d} < \\frac{4}{a} \\implies a < 4,$$\nsehingga $a \\in \\{2, 3\\}$.\n\n**Kasus 1: $a = 2$.** Maka $\\frac{1}{b} + \\frac{1}{c} + \\frac{1}{d} = \\frac{1}{2}$ dengan $2 < b < c < d$. Dari $\\frac{3}{b} > \\frac{1}{2}$ diperoleh $b < 6$, jadi $b \\in \\{3, 4, 5\\}$.\n- $b = 3$: $\\frac{1}{c} + \\frac{1}{d} = \\frac{1}{6} \\iff (c-6)(d-6) = 36$ dengan $0 < c-6 < d-6$. Pasangan faktor $36$ yang berbeda adalah $(1,36), (2,18), (3,12), (4,9)$, menghasilkan $4$ solusi $(c,d) \\in \\{(7,42), (8,24), (9,18), (10,15)\\}$.\n- $b = 4$: $\\frac{1}{c} + \\frac{1}{d} = \\frac{1}{4} \\iff (c-4)(d-4) = 16$ dengan $0 < c-4 < d-4$. Pasangan faktor $16$ yang berbeda adalah $(1,16), (2,8)$, menghasilkan $2$ solusi $(c,d) \\in \\{(5,20), (6,12)\\}$.\n- $b = 5$: $\\frac{1}{c} + \\frac{1}{d} = \\frac{3}{10}$ dengan $5 < c < d$. Dari $\\frac{2}{c} > \\frac{3}{10} \\implies c < \\frac{20}{3}$, satu-satunya calon adalah $c = 6$, yang memberi $\\frac{1}{d} = \\frac{3}{10} - \\frac{1}{6} = \\frac{2}{15}$, bukan bilangan bulat.\n\n**Kasus 2: $a = 3$.** Maka $\\frac{1}{b} + \\frac{1}{c} + \\frac{1}{d} = \\frac{2}{3}$ dengan $3 < b < c < d$. Dari $\\frac{3}{b} > \\frac{2}{3} \\implies b < \\frac{9}{2}$, hanya $b = 4$ yang mungkin. Namun untuk $b = 4$, diperoleh $\\frac{1}{c} + \\frac{1}{d} = \\frac{2}{3} - \\frac{1}{4} = \\frac{5}{12}$, sehingga $\\frac{2}{c} > \\frac{5}{12} \\implies c < \\frac{24}{5} < 5$, bertentangan dengan $c > b = 4$. Tidak ada solusi.\n\nTotal banyaknya pasangan $(a,b,c,d)$ yang memenuhi adalah $4 + 2 = 6$.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Perhatikan barisan bilangan berikut.\n$$1, 2, 4, 8, 15, 26, ?, ?, ?, \\cdots$$\nTiga bilangan selanjutnya berturut-turut adalah ....\n\nA. $37, 49, 71$\nB. $37, 61, 99$\nC. $42, 58, 74$\nD. $42, 64, 93$',
          answer: 'D. $42, 64, 93$',
          principle: 'Analisis selisih tingkat pertama dan tingkat kedua pada barisan bilangan.',
          solution:
            'Hitung selisih antar-suku berurutan:\n- Barisan: $1, 2, 4, 8, 15, 26, \\dots$\n- Selisih tingkat 1: $1, 2, 4, 7, 11, \\dots$\n- Selisih tingkat 2: $1, 2, 3, 4, \\dots$\n\nSelisih tingkat 2 membentuk barisan bilangan asli berurutan, sehingga tiga selisih tingkat 2 berikutnya adalah $5, 6, 7$. Akibatnya:\n- Tiga selisih tingkat 1 berikutnya: $11 + 5 = 16$, $16 + 6 = 22$, dan $22 + 7 = 29$.\n- Tiga suku berikutnya pada barisan:\n  - $26 + 16 = 42$\n  - $42 + 22 = 64$\n  - $64 + 29 = 93$.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Jika $x_1$ dan $x_2$ dengan $x_1 < x_2$ adalah solusi yang memenuhi persamaan $x^{(x^x)} = (x^x)^x$, maka $25x_1^2 + 4x_2^2 - 10x_1x_2$ adalah ....\n\nA. $1$\nB. $4$\nC. $64$\nD. $21$',
          answer: 'D. $21$',
          principle: 'Sifat eksponen $(x^a)^b = x^{ab}$ dan penyamaan pangkat untuk basis positif $x \\ne 1$.',
          solution:
            'Gunakan sifat eksponen pada ruas kanan: $(x^x)^x = x^{x^2}$, sehingga persamaan menjadi:\n$$x^{(x^x)} = x^{x^2}.$$\nUntuk bilangan positif $x > 0$:\n- Jika $x = 1$, kedua ruas bernilai $1^1 = 1$, sehingga $x = 1$ adalah solusi.\n- Jika $x > 0$ dan $x \\ne 1$, basis sama dapat disamakan pangkatnya: $x^x = x^2 \\implies x = 2$.\n\n(Catatan: $x = -1$ juga memenuhi $(-1)^{-1} = -1$, tetapi pasangan yang memuat $x = -1$ menghasilkan nilai $39$ atau $61$ yang tidak terdapat pada pilihan jawaban, sehingga solusi yang dimaksud adalah pasangan bilangan positif $x_1 = 1$ dan $x_2 = 2$.)\n\nSubstitusikan $x_1 = 1$ dan $x_2 = 2$:\n$$25(1)^2 + 4(2)^2 - 10(1)(2) = 25 + 16 - 20 = 21.$$',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Diketahui tiga bilangan terurut $(x, y, z)$ dengan $x, y,$ dan $z$ adalah bilangan bulat positif yang memenuhi $(3x+y-1)^{y+z} = 729$. Jika himpunan selesaiannya adalah $\\{(x_1,y_1,z_1), (x_2,y_2,z_2), \\dots, (x_n,y_n,z_n)\\}$, maka nilai dari $x_1+x_2+\\cdots+x_n + y_1+y_2+\\cdots+y_n + z_1+z_2+\\cdots+z_n$ adalah ....\n\nA. $17$\nB. $18$\nC. $24$\nD. $29$',
          answer: 'C. $24$',
          principle: 'Persamaan eksponen bilangan bulat positif dengan faktorisasi $729 = 3^6$.',
          solution:
            'Karena $x, y, z \\ge 1$, maka basis $3x + y - 1 \\ge 3(1) + 1 - 1 = 3$ dan pangkat $y + z \\ge 1 + 1 = 2$. Karena $729 = 3^6$, kemungkinan nilai $(3x+y-1, y+z)$ hanyalah $(3, 6)$, $(9, 3)$, dan $(27, 2)$:\n- Untuk $3x + y - 1 = 3$ dan $y + z = 6$: diperoleh $3x + y = 4$. Karena $x, y \\ge 1$, satu-satunya solusi adalah $x = 1, y = 1$, sehingga $z = 5$. Didapat $(1, 1, 5)$.\n- Untuk $3x + y - 1 = 9$ dan $y + z = 3$: karena $y, z \\ge 1$, maka $y \\in \\{1, 2\\}$. Jika $y = 1$, maka $3x = 9 \\implies x = 3$ dan $z = 2$, didapat $(3, 1, 2)$. Jika $y = 2$, maka $3x + 1 = 9 \\implies 3x = 8$ (tidak ada solusi bulat).\n- Untuk $3x + y - 1 = 27$ dan $y + z = 2$: karena $y, z \\ge 1$, haruslah $y = 1$ dan $z = 1$, sehingga $3x = 27 \\implies x = 9$. Didapat $(9, 1, 1)$.\n\nJadi himpunan selesaiannya adalah $\\{(1,1,5), (3,1,2), (9,1,1)\\}$, dan jumlah seluruh komponennya adalah:\n$$(1 + 3 + 9) + (1 + 1 + 1) + (5 + 2 + 1) = 13 + 3 + 8 = 24.$$',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Pada $\\triangle ABC$, diketahui $D$ titik tengah sisi $AC$, $F$ titik tengah sisi $BD$, dan garis $DE$ sejajar $BC$. Jika $G$ adalah titik potong $AF$ dan $DE$, maka perbandingan $BC : DG$ adalah ....\n\nA. $5 : 3$\nB. $5 : 2$\nC. $3 : 1$\nD. $4 : 1$',
          answer: 'C. $3 : 1$',
          principle: 'Kekongruenan dan kesebangunan segitiga akibat garis sejajar.',
          solution:
            'Perpanjang garis $AF$ hingga memotong garis $BC$ di titik $H$. Misalkan $DG = p$.\n\nPerhatikan $\\triangle FDG$ dan $\\triangle FBH$:\n- $FD = FB$ (karena $F$ titik tengah $BD$),\n- $\\angle DFG = \\angle BFH$ (bertolak belakang),\n- $\\angle FDG = \\angle FBH$ (sudut dalam berseberangan karena $DE \\parallel BC$).\n\nOleh karena itu, $\\triangle FDG \\cong \\triangle FBH$ (Sd-S-Sd), sehingga $BH = DG = p$.\n\nSelanjutnya, karena $DG \\parallel HC$ dan $D$ titik tengah $AC$, $\\triangle ADG \\sim \\triangle ACH$ dengan perbandingan:\n$$\\frac{DG}{CH} = \\frac{AD}{AC} = \\frac{1}{2} \\implies CH = 2DG = 2p.$$\nKarena $B, H, C$ segaris dengan $H$ di antara $B$ dan $C$ (sinar $AF$ memotong ruas $BD$ di titik tengahnya, sehingga memotong sisi $BC$ di antara $B$ dan $C$), maka $BC = BH + HC = p + 2p = 3p$.\nJadi perbandingan $BC : DG = 3p : p = 3 : 1$.',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Diketahui suatu bilangan terdiri dari $6$ digit. Jika digit terakhirnya sama dengan digit pertama, maka banyak kemungkinan bilangan tersebut adalah ....\n\nA. $90000$\nB. $100000$\nC. $900000$\nD. $1000000$',
          answer: 'A. $90000$',
          principle: 'Aturan perkalian untuk pencacahan digit dengan syarat posisi pertama tidak nol.',
          solution:
            'Misalkan bilangan $6$ digit tersebut berbentuk $\\overline{d_1 d_2 d_3 d_4 d_5 d_6}$.\n- Digit pertama $d_1$ tidak boleh $0$, sehingga ada $9$ pilihan ($1, 2, \\dots, 9$).\n- Empat digit tengah $d_2, d_3, d_4, d_5$ masing-masing memiliki $10$ pilihan ($0, 1, \\dots, 9$).\n- Digit terakhir $d_6$ harus sama dengan $d_1$, sehingga hanya ada $1$ pilihan setelah $d_1$ ditentukan.\n\nBanyak kemungkinan bilangan tersebut adalah:\n$$9 \\times 10 \\times 10 \\times 10 \\times 10 \\times 1 = 90000.$$',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Siswa-siswi sebuah SMP yang menyaksikan pertandingan sepak bola, oleh panitia diberi Nomor Undian Doorprize (NUD) pada kertas yang terdiri atas empat digit. Panitia pertandingan sudah menyiapkan hadiah untuk semua NUD untung, yaitu nomor yang digit keempatnya merupakan pengurangan bilangan dua digit pertama oleh bilangan digit ketiga. Contohnya $1156 \\rightarrow 11 - 5 = 6$ adalah NUD untung. Banyak hadiah yang harus disediakan oleh panitia adalah ....\n\nA. $42$\nB. $44$\nC. $45$\nD. $46$',
          answer: 'C. $45$',
          principle: 'Pencacahan pasangan digit yang memenuhi persamaan linear dengan batasan nilai digit.',
          solution:
            'Misalkan NUD empat digit berbentuk $\\overline{abcd}$, dengan $N = \\overline{ab} = 10a + b \\in \\{10, 11, \\dots, 99\\}$ serta $c, d \\in \\{0, 1, \\dots, 9\\}$. Syarat NUD untung adalah:\n$$d = N - c \\iff c + d = N.$$\nKarena $c \\le 9$ dan $d \\le 9$, maka $N = c + d \\le 18$. Jadi nilai $N$ yang mungkin hanyalah $10, 11, 12, \\dots, 18$.\n\nUntuk setiap $N = 10 + k$ ($k = 0, 1, \\dots, 8$), agar $c = (10 + k) - d \\le 9$ dengan $d \\le 9$, maka $d$ dapat bernilai $k+1, k+2, \\dots, 9$, yaitu sebanyak $9 - k$ pilihan:\n- $N = 10$: $9$ nomor ($1019, 1028, \\dots, 1091$),\n- $N = 11$: $8$ nomor,\n- $\\dots$\n- $N = 18$: $1$ nomor ($1899$).\n\nTotal banyak hadiah adalah:\n$$9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = \\frac{9 \\times 10}{2} = 45.$$',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            '$A$ adalah himpunan semua bilangan tiga digit yang tidak memuat $0$ dan semua digitnya berbeda. Jika $x, y, z$ berturut-turut adalah rata-rata, median, dan jangkauan dari semua anggota $A$, maka nilai dari $x - y + z$ adalah ....\n\nA. $445$\nB. $504$\nC. $555$\nD. $864$',
          answer: 'D. $864$',
          principle: 'Simetri himpunan bilangan melalui komplemen digit terhadap $10$ untuk menentukan rata-rata dan median.',
          solution:
            'Bilangan anggota $A$ memiliki digit-digit berbeda dari $\\{1, 2, \\dots, 9\\}$, sehingga $|A| = 9 \\times 8 \\times 7 = 504$.\n\nUntuk setiap bilangan $\\overline{abc} \\in A$, bilangan komplemennya $\\overline{(10-a)(10-b)(10-c)}$ juga terdiri atas tiga digit tak nol yang berbeda, sehingga termasuk anggota $A$, dan jumlah keduanya adalah:\n$$\\overline{abc} + \\overline{(10-a)(10-b)(10-c)} = 1110.$$\nPemetaan $n \\mapsto 1110 - n$ membalik urutan anggota $A$ dari terkecil ke terbesar. Akibatnya:\n- Rata-rata setiap pasangan adalah $\\frac{1110}{2} = 555$, sehingga rata-rata seluruh anggota $A$ adalah $x = 555$.\n- Karena $|A| = 504$ genap, dua suku paling tengah (urutan ke-$252$ dan ke-$253$) saling berkomplemen dengan jumlah $1110$, sehingga median $y = \\frac{1110}{2} = 555$.\n- Anggota terkecil adalah $123$ dan terbesar adalah $987$, sehingga jangkauan $z = 987 - 123 = 864$.\n\nJadi nilai $x - y + z = 555 - 555 + 864 = 864$.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Bilangan $\\frac{b}{a}$ terbesar dengan $a, b$ positif sedemikian sehingga $\\frac{5}{a} + 20b$ merupakan bilangan kuadrat sempurna yang kurang dari $2020$ adalah ....\n\nA. $2800$\nB. $5500$\nC. $6400$\nD. $7500$',
          answer: 'C. $6400$',
          principle: 'Ketaksamaan AM-GM untuk memaksimumkan hasil kali dua bilangan positif dengan jumlah tetap.',
          solution:
            'Tulis $\\frac{5}{a} + 20b = 5\\left(\\frac{1}{a} + 4b\\right) = k^2 < 2020$. Dalam konteks pilihan jawaban bulat pada soal ini (di mana $\\frac{1}{a} + 4b$ berupa bilangan bulat positif sehingga $k^2$ merupakan kelipatan $5$, dan karena $k^2$ kuadrat sempurna maka $25 \\mid k^2$), bilangan kuadrat kelipatan $5$ terbesar yang kurang dari $2020$ adalah $40^2 = 1600$ (karena $45^2 = 2025 > 2020$).\n\nDengan $k^2 = 1600$:\n$$5\\left(\\frac{1}{a} + 4b\\right) = 1600 \\implies \\frac{1}{a} + 4b = 320.$$\nBerdasarkan ketaksamaan AM-GM pada dua bilangan positif $\\frac{1}{a}$ dan $4b$:\n$$\\frac{1}{a} \\cdot 4b \\le \\left(\\frac{\\frac{1}{a} + 4b}{2}\\right)^2 = \\left(\\frac{320}{2}\\right)^2 = 160^2 = 25600$$\n$$\\frac{b}{a} \\le \\frac{25600}{4} = 6400.$$\nKesamaan tercapai saat $\\frac{1}{a} = 4b = 160$, yaitu $a = \\frac{1}{160}$ dan $b = 40$. Jadi nilai $\\frac{b}{a}$ terbesar yang sesuai pilihan adalah $6400$.\n\n(Catatan: apabila $\\frac{1}{a} + 4b$ diperbolehkan tak bulat untuk $a, b$ real sembarang, kuadrat sempurna terbesar $< 2020$ adalah $44^2 = 1936$ yang memberi maksimum $\\frac{44^4}{400} = \\frac{234256}{25}$, yang tidak tercantum dalam pilihan jawaban.)',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Jika $a, b$ bilangan real positif dengan $a^{505} + b^{505} = 1$, maka nilai minimum dari $a^{2020} + b^{2020}$ adalah ....\n\nA. $1$\nB. $\\frac{1}{2}$\nC. $\\frac{1}{4}$\nD. $\\frac{1}{8}$',
          answer: 'D. $\\frac{1}{8}$',
          principle: 'Substitusi pangkat dan ketaksamaan kuadrat $x^2 + y^2 \\ge \\frac{(x+y)^2}{2}$.',
          solution:
            'Misalkan $x = a^{505} > 0$ dan $y = b^{505} > 0$. Maka $x + y = 1$, dan yang dicari adalah nilai minimum dari $x^4 + y^4$.\n\nGunakan identitas $u^2 + v^2 = \\frac{(u+v)^2 + (u-v)^2}{2} \\ge \\frac{(u+v)^2}{2}$ dua kali berturut-turut:\n1. $x^2 + y^2 \\ge \\frac{(x+y)^2}{2} = \\frac{1^2}{2} = \\frac{1}{2}$.\n2. $x^4 + y^4 \\ge \\frac{(x^2+y^2)^2}{2} \\ge \\frac{(1/2)^2}{2} = \\frac{1}{8}$.\n\nKesamaan tercapai saat $x = y = \\frac{1}{2}$, yaitu $a = b = \\left(\\frac{1}{2}\\right)^{\\frac{1}{505}} > 0$. Jadi nilai minimumnya adalah $\\frac{1}{8}$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Diketahui segi delapan beraturan $ABCDEFGH$ dengan panjang sisinya $2\\text{ cm}$. Akan dipilih secara acak $3$ titik sudutnya dan digunakan untuk membentuk suatu segitiga yang akan dihitung luas daerahnya. Jika $A$ adalah himpunan semua luas daerah segitiga yang mungkin dan jumlah semua anggota $A$ adalah $(a + b\\sqrt{2})\\text{ cm}^2$ (dengan $a, b$ bilangan bulat), maka nilai dari $a + b$ adalah ....\n\nA. $9$\nB. $12$\nC. $21$\nD. $33$',
          answer: 'C. $21$',
          principle: 'Klasifikasi segitiga berdasarkan partisi jarak antar-titik sudut pada segi-$8$ beraturan dan perhitungan luas pada koordinat.',
          solution:
            'Setiap segitiga dari $3$ titik sudut segi delapan beraturan dicirikan oleh partisi $8 = p + q + r$ ($1 \\le p \\le q \\le r$) yang menyatakan banyaknya langkah sisi antar-titik sudut. Hanya ada $5$ partisi yang mungkin:\n- $(1, 1, 6)$, contohnya $\\triangle ABC$,\n- $(1, 2, 5)$, contohnya $\\triangle ABD$,\n- $(1, 3, 4)$, contohnya $\\triangle ABE$,\n- $(2, 2, 4)$, contohnya $\\triangle ACE$,\n- $(2, 3, 3)$, contohnya $\\triangle ACF$.\n\nPasang koordinat dengan $A=(0,0)$, $B=(2,0)$, lalu berurutan berlawanan arah jarum jam dengan panjang sisi $2$ dan sudut belok $45^\\circ$:\n$$C=(2+\\sqrt{2},\\sqrt{2}), \\; D=(2+\\sqrt{2},2+\\sqrt{2}), \\; E=(2,2+2\\sqrt{2}), \\; F=(0,2+2\\sqrt{2}).$$\n\nHitung luas kelima kelas segitiga tersebut:\n1. $[ABC] = \\frac{1}{2} \\cdot AB \\cdot y_C = \\frac{1}{2} \\cdot 2 \\cdot \\sqrt{2} = \\sqrt{2}$.\n2. $[ABD] = \\frac{1}{2} \\cdot AB \\cdot y_D = \\frac{1}{2} \\cdot 2 \\cdot (2+\\sqrt{2}) = 2 + \\sqrt{2}$.\n3. $[ABE] = \\frac{1}{2} \\cdot AB \\cdot y_E = \\frac{1}{2} \\cdot 2 \\cdot (2+2\\sqrt{2}) = 2 + 2\\sqrt{2}$.\n4. $[ACE]$: karena $AE$ diameter lingkaran luar, $\\angle ACE = 90^\\circ$ dan $AC = CE$, dengan $AC^2 = (2+\\sqrt{2})^2 + (\\sqrt{2})^2 = 8 + 4\\sqrt{2}$. Maka $[ACE] = \\frac{1}{2}AC^2 = 4 + 2\\sqrt{2}$.\n5. $[ACF]$: alas $AF = 2 + 2\\sqrt{2}$ pada sumbu-$y$ dan tinggi $x_C = 2 + \\sqrt{2}$, sehingga $[ACF] = \\frac{1}{2}(2+2\\sqrt{2})(2+\\sqrt{2}) = (1+\\sqrt{2})(2+\\sqrt{2}) = 4 + 3\\sqrt{2}$.\n\nKelima luas tersebut saling berbeda, sehingga jumlah seluruh anggota $A$ adalah:\n$$\\sqrt{2} + (2+\\sqrt{2}) + (2+2\\sqrt{2}) + (4+2\\sqrt{2}) + (4+3\\sqrt{2}) = 12 + 9\\sqrt{2}.$$\nDengan $a = 12$ dan $b = 9$, diperoleh $a + b = 12 + 9 = 21$.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Diketahui persegipanjang $ABCD$ di bidang koordinat kartesius dengan $A$ dan $B$ di sumbu-$X$, $D$ di sumbu-$Y$, dan $C$ di kuadran $I$. Ada $4$ jenis rotasi yang akan dilakukan terhadap persegipanjang $ABCD$: $1.\\; R(C, -90^\\circ)$, $2.\\; R(A, 90^\\circ)$, $3.\\; R(C, 90^\\circ)$, $4.\\; R(A, -90^\\circ)$, di mana $R(P, 90^\\circ)$ berarti rotasi $90^\\circ$ berlawanan arah jarum jam dengan pusat $P$. Jika $ABCD$ dirotasi berturut-turut dengan urutan $1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3$ dan diperoleh koordinat akhir $A$ adalah $(38, 47)$, maka keliling persegipanjang $ABCD$ adalah .... satuan panjang.\n\nA. $9$\nB. $17$\nC. $38$\nD. $47$',
          answer: 'B. $17$',
          principle: 'Komposisi rotasi $90^\\circ$ dan $-90^\\circ$ pada bidang Kartesius membentuk translasi periodik.',
          solution:
            'Karena $A, B$ pada sumbu-$X$, $D$ pada sumbu-$Y$, $C$ di kuadran $I$, dan $DA \\perp AB$, maka $A = (0,0)$, $B = (x,0)$, $C = (x,y)$, $D = (0,y)$ dengan $x, y > 0$.\n\nLacak satu siklus transformasi $1, 2, 3, 4$ menggunakan rumus rotasi terhadap pusat $(p,q)$:\n- $R((p,q), 90^\\circ): (u,v) \\mapsto (p - (v-q),\\; q + (u-p))$,\n- $R((p,q), -90^\\circ): (u,v) \\mapsto (p + (v-q),\\; q - (u-p))$.\n\nPada siklus pertama:\n1. $R(C, -90^\\circ)$ dengan $C(x,y)$: $A(0,0) \\mapsto (x-y,\\; y+x)$ dan $C(x,y)$ tetap.\n2. $R(A, 90^\\circ)$ dengan $A(x-y, x+y)$: $A$ tetap dan $C(x,y) \\mapsto (2x-y,\\; x+2y)$.\n3. $R(C, 90^\\circ)$ dengan $C(2x-y, x+2y)$: $A(x-y, x+y) \\mapsto (2x,\\; 2y)$, sedangkan $B \\mapsto (2x, x+2y)$, $C$ tetap, $D \\mapsto (2x-y, 2y)$.\n4. $R(A, -90^\\circ)$ dengan $A(2x, 2y)$: $A(2x, 2y)$ tetap, dan $B, C, D$ kembali berorientasi tegak lurus sejajar sumbu koordinat di $(3x,2y), (3x,3y), (2x,3y)$.\n\nJadi setiap $1$ siklus penuh ($1, 2, 3, 4$) menggeser seluruh persegipanjang sebesar vektor $(2x, 2y)$ tanpa mengubah orientasinya. Urutan rotasi terdiri atas $4$ siklus penuh diikuti langkah $1, 2, 3$. Setelah $4$ siklus penuh, $A$ berada di $(8x, 8y)$; setelah langkah $1, 2, 3$ berikutnya, $A$ berpindah ke:\n$$(8x + 2x,\\; 8y + 2y) = (10x, 10y).$$\nKarena koordinat akhir $A$ adalah $(38, 47)$, diperoleh $10x = 38 \\implies x = \\frac{38}{10}$ dan $10y = 47 \\implies y = \\frac{47}{10}$.\nKeliling persegipanjang $ABCD$ adalah:\n$$2(x + y) = 2\\left(\\frac{38}{10} + \\frac{47}{10}\\right) = 2 \\cdot \\frac{85}{10} = 17.$$',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Pada suatu kotak terdapat $40$ bola warna merah dan hijau. Dua buah bola diambil secara acak dan diamati warnanya. Jika peluang bahwa terambil kedua bola berwarna merah adalah $\\frac{5}{12}$, maka banyaknya bola merah di dalam kotak semula adalah .... buah.\n\nA. $20$\nB. $22$\nC. $25$\nD. $26$',
          answer: 'D. $26$',
          principle: 'Peluang pengambilan dua objek tanpa pengembalian menggunakan kombinasi $\\binom{n}{2}$.',
          solution:
            'Misalkan banyaknya bola merah semula adalah $m$ ($2 \\le m \\le 40$). Banyak cara mengambil $2$ bola dari $40$ bola adalah $\\binom{40}{2} = \\frac{40 \\cdot 39}{2}$, dan banyak cara mengambil $2$ bola merah dari $m$ bola merah adalah $\\binom{m}{2} = \\frac{m(m-1)}{2}$.\n\nDari peluang yang diketahui:\n$$\\frac{\\binom{m}{2}}{\\binom{40}{2}} = \\frac{m(m-1)}{40 \\cdot 39} = \\frac{5}{12}$$\n$$m(m - 1) = \\frac{5 \\cdot 40 \\cdot 39}{12} = 5 \\cdot 10 \\cdot 13 = 650$$\n$$m^2 - m - 650 = 0$$\n$$(m - 26)(m + 25) = 0.$$\nKarena $m > 0$, banyaknya bola merah di dalam kotak semula adalah $26$.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Suatu kelas terdiri dari $35$ siswa. Pada saat ulangan matematika terdapat $2$ orang siswa berhalangan, misalnya siswa $A$ dan $B$. Nilai ulangan pada awalnya dicatat hanya dari $33$ siswa dan memiliki rata-rata $80$. Setelah ditambah nilai susulan dua siswa yang berhalangan tersebut, nilai rata-rata kelas menjadi $78$. Jika nilai $A$ dua kali lipat lebih tinggi dibandingkan nilai $B$, maka selisih nilai $A$ dan $B$ adalah ....\n\nA. $15$\nB. $20$\nC. $30$\nD. $55$',
          answer: 'C. $30$',
          principle: 'Hubungan antara rata-rata gabungan dan jumlah total nilai.',
          solution:
            'Jumlah nilai $33$ siswa pertama adalah:\n$$33 \\times 80 = 2640.$$\nJumlah nilai seluruh $35$ siswa setelah nilai susulan $A$ dan $B$ dimasukkan adalah:\n$$35 \\times 78 = 2730.$$\nAkibatnya, jumlah nilai $A$ dan $B$ adalah:\n$$x_A + x_B = 2730 - 2640 = 90.$$\nDiketahui $x_A = 2x_B$, sehingga $2x_B + x_B = 90 \\implies 3x_B = 90 \\implies x_B = 30$ dan $x_A = 60$.\nJadi selisih nilai $A$ dan $B$ adalah $60 - 30 = 30$.',
          rubric: OK
        }
      ]
    }
  ]
};
