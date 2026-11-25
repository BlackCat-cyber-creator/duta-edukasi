/**
 * Paket Soal Terstruktur: OSN-P Matematika SMP 2019 (11 Isian Singkat + 3 Uraian)
 * Sumber: scraped_raw/osnp-matematika-smp-2019.md (18 soal asli: 15 Isian Singkat + 3 Uraian).
 * Catatan penyuntingan: 14 soal dimuat (Isian Singkat nomor asli 1-7, 10-12, 15 dinomori ulang 1-11 pada Bagian A;
 * seluruh Uraian nomor asli 16-18 dimuat sebagai 1-3 pada Bagian B).
 * Soal Isian Singkat nomor asli 8, 9, 13, dan 14 dilewati karena mutlak membutuhkan gambar yang hilang pada arsip sumber.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnp-mat-smp-2019',
  slug: 'osnp-matematika-smp-2019',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'OSN-P Matematika SMP 2019',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab2-bilangan-rasional',
    'smp7-bab4-bentuk-aljabar',
    'smp8-bab1-bilangan-berpangkat',
    'smp8-bab3-persamaan-pertidaksamaan-linear',
    'smp8-bab4-relasi-fungsi',
    'smp8-bab5-persamaan-garis-lurus',
    'smp9-bab2-bangun-ruang',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-P',
  title: 'OSN-P Matematika SMP 2019',
  totalMarks: 32,
  instructions:
    'Naskah asli OSN-P Matematika SMP 2019 terdiri atas 18 soal (15 soal Isian Singkat nomor 1-15 dan 3 soal Uraian nomor 16-18). Paket ini memuat 14 soal: 11 soal Isian Singkat pada Bagian A (nomor asli 1-7, 10-12, dan 15; dinomori ulang 1-11, masing-masing 1 poin) serta seluruh 3 soal Uraian pada Bagian B (nomor asli 16-18; dinomori ulang 1-3, masing-masing 7 poin). Sebanyak 4 soal Isian Singkat dilewati (nomor asli 8, 9, 13, dan 14) karena mutlak memerlukan gambar/diagram yang tidak tersedia pada arsip sumber. Total skor maksimum adalah 32 poin.',
  source: {
    org: 'OSN-P (Olimpiade Sains Nasional tingkat Provinsi)',
    file: 'scraped_raw/osnp-matematika-smp-2019.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Isian Singkat',
      marks: 11,
      stem: 'Tuliskan jawaban akhir yang singkat dan eksak untuk setiap soal berikut (11 soal Isian Singkat yang dimuat dari 15 soal asli; nomor asli 8, 9, 13, dan 14 dilewati karena ketiadaan gambar). Setiap jawaban benar bernilai 1 poin.',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Simbol $\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}$ menyatakan $ad - bc$. Jumlah semua nilai $x$ yang memenuhi\n$$\\begin{vmatrix} x - 2 & -2 \\\\ -x & x + 4 \\end{vmatrix} = 2x$$\nadalah ....',
          answer: '$2$',
          principle: 'Definisi determinan $2 \\times 2$ dan rumus jumlah akar persamaan kuadrat $x_1 + x_2 = -\\frac{b}{a}$.',
          solution:
            'Berdasarkan definisi simbol $\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$, persamaan menjadi:\n$$(x - 2)(x + 4) - (-2)(-x) = 2x$$\n$$(x^2 + 2x - 8) - 2x = 2x$$\n$$x^2 - 2x - 8 = 0.$$\nPersamaan kuadrat ini memiliki diskriminan $\\Delta = (-2)^2 - 4(1)(-8) = 36 > 0$, sehingga memiliki dua akar real berbeda yang dapat difaktorkan menjadi $(x - 4)(x + 2) = 0$, yakni $x_1 = 4$ dan $x_2 = -2$.\nJadi, jumlah semua nilai $x$ yang memenuhi adalah $4 + (-2) = 2$ (atau langsung melalui rumus Vieta: $-\\frac{-2}{1} = 2$).',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Diketahui $A$ dan $B$ bilangan dua digit, $C$ bilangan tiga digit, dan $A + B = C$. Tujuh digit pembentuk bilangan $A$, $B$, dan $C$, yaitu $1, 2, 4, 5, 6, 7, 8$, masing-masing digunakan tepat satu kali. Digit satuan dari $C$ adalah $6$. Bilangan $C$ yang dimaksud adalah ....',
          answer: '$156$',
          principle: 'Analisis nilai tempat penjumlahan dan batas atas hasil jumlah dua bilangan dua digit.',
          solution:
            'Misalkan $A = 10a + b$, $B = 10c + d$, dan $C = 100e + 10f + g$ dengan $g = 6$. Enam digit tersisa untuk $\\{a, b, c, d, e, f\\}$ adalah $\\{1, 2, 4, 5, 7, 8\\}$.\nKarena nilai terbesar $A$ dan $B$ dari digit tersisa paling banyak $87 + 54$ (bahkan untuk dua digit sebarang dari himpunan tersebut paling banyak $85 + 74 = 159 < 200$), dan $C$ adalah bilangan tiga digit, maka digit ratusan $e$ haruslah $e = 1$.\nKini tersisa lima digit $\\{2, 4, 5, 7, 8\\}$ untuk $\\{a, b, c, d, f\\}$.\nPada posisi satuan, $b + d$ harus berakhir dengan digit $g = 6$. Dari $\\{2, 4, 5, 7, 8\\}$, jumlah dua digit berbeda paling besar adalah $7 + 8 = 15 < 16$, sehingga $b + d$ tidak mungkin $16$ (tidak ada simpanan ke puluhan). Oleh karena itu, $b + d = 6$, yang hanya dipenuhi oleh $\\{b, d\\} = \\{2, 4\\}$.\nTiga digit tersisa untuk $\\{a, c, f\\}$ adalah $\\{5, 7, 8\\}$. Pada posisi puluhan (tanpa simpanan), berlaku $a + c = 10e + f = 10 + f$. Uji kemungkinan $f \\in \\{5, 7, 8\\}$:\n- Jika $f = 5$, maka $a + c = 7 + 8 = 15 = 10 + 5$ (memenuhi).\n- Jika $f = 7$, maka $a + c = 5 + 8 = 13 \\ne 17$.\n- Jika $f = 8$, maka $a + c = 5 + 7 = 12 \\ne 18$.\nJadi, secara tunggal diperoleh $e = 1$, $f = 5$, dan $g = 6$ (contohnya $72 + 84 = 156$), sehingga $C = 156$.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Sebuah balok memiliki panjang $a~\\text{cm}$, lebar $b~\\text{cm}$, dan tinggi $c~\\text{cm}$, dengan $a$, $b$, dan $c$ merupakan bilangan asli. Diketahui bahwa volume balok $240~\\text{cm}^3$, $a + b + c = 19$, serta $a > b > c > 3$. Luas semua sisi balok yang memiliki rusuk berukuran $b$ dan $c$ adalah .... $\\text{cm}^2$.',
          answer: '$60$',
          principle: 'Faktorisasi bilangan bulat $abc = 240$ dan pembatasan nilai rusuk terkecil $c$.',
          solution:
            'Karena $a > b > c > 3$ merupakan bilangan asli, maka $c \\ge 4$ dan $c^3 < abc = 240 < 7^3 = 343$, sehingga $c \\in \\{4, 5, 6\\}$ dan $c$ harus membagi $240$. Periksa setiap nilai $c$:\n- Untuk $c = 4$: diperoleh $ab = 60$ dan $a + b = 15$ dengan $a > b > 4$. Pasangan faktor $60$ dengan $b > 4$ hanyalah $(12, 5)$ dan $(10, 6)$, yang jumlahnya masing-masing $17$ dan $16$ (bukan $15$).\n- Untuk $c = 5$: diperoleh $ab = 48$ dan $a + b = 14$ dengan $a > b > 5$. Pasangan faktor $48$ dengan $b > 5$ hanyalah $(8, 6)$, dan $8 + 6 = 14$ memenuhi.\n- Untuk $c = 6$: diperoleh $ab = 40$ dan $a + b = 13$ dengan $a > b > 6$. Tidak ada pasangan faktor $40$ yang kedua faktornya lebih dari $6$ (faktor terbesar yang kurang dari $\\sqrt{40}$ adalah $5$).\nDengan demikian, dimensi balok secara tunggal adalah $a = 8$, $b = 6$, dan $c = 5$. Balok memiliki tepat $2$ sisi berhadapan yang berukuran $b \\times c$, sehingga luas totalnya adalah $2 \\times b \\times c = 2 \\times 6 \\times 5 = 60~\\text{cm}^2$.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Misalkan $(x, y)$ adalah koordinat titik yang memenuhi persamaan $(4 - x)^2 + (y - 3)^2 = 25$. Misalkan pula $(a, b)$ membuat $x^2 + y^2$ bernilai maksimum dan $(c, d)$ membuat $x^2 + y^2$ bernilai minimum. Nilai dari $ac + bd$ adalah ....',
          answer: '$0$',
          principle: 'Sifat tak negatif jumlah kuadrat $x^2 + y^2 \\ge 0$ dan kedudukan titik asal pada lingkaran $(x - 4)^2 + (y - 3)^2 = 25$.',
          solution:
            'Persamaan $(x - 4)^2 + (y - 3)^2 = 5^2$ menyatakan lingkaran berpusat di $P(4, 3)$ dengan jari-jari $r = 5$.\nJarak pusat $P(4, 3)$ ke titik asal $O(0, 0)$ adalah $OP = \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5 = r$, sehingga titik $(0, 0)$ terletak tepat pada lingkaran (substitusi langsung: $(4 - 0)^2 + (0 - 3)^2 = 16 + 9 = 25$).\nKarena $x^2 + y^2$ menyatakan kuadrat jarak dari $(x, y)$ ke $O(0, 0)$ dan $x^2 + y^2 \\ge 0$ untuk setiap bilangan real $x, y$, maka nilai minimum $x^2 + y^2$ adalah $0$ yang dicapai tepat pada $(c, d) = (0, 0)$ (sedangkan nilai maksimumnya dicapai pada titik ujung diameter seberangnya, yaitu $(a, b) = (8, 6)$).\nOleh karena itu, $ac + bd = a(0) + b(0) = 0$.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Jika $f(x) = x^4 + 4x^3 + 6x^2 + 4x + 10$, maka nilai dari $f(\\sqrt[4]{5} - 1)$ adalah ....',
          answer: '$14$',
          principle: 'Identitas pangkat empat suku dua $(x + 1)^4 = x^4 + 4x^3 + 6x^2 + 4x + 1$.',
          solution:
            'Perhatikan bahwa koefisien $1, 4, 6, 4, 1$ merupakan penjabaran dari $(x + 1)^4$. Pisahkan konstanta $10 = 1 + 9$:\n$$f(x) = (x^4 + 4x^3 + 6x^2 + 4x + 1) + 9 = (x + 1)^4 + 9.$$\nSubstitusikan $x = \\sqrt[4]{5} - 1$:\n$$f(\\sqrt[4]{5} - 1) = ((\\sqrt[4]{5} - 1) + 1)^4 + 9 = (\\sqrt[4]{5})^4 + 9 = 5 + 9 = 14.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Jika suatu pekerjaan dapat dikerjakan dengan mesin A, B, atau C saja, maka pekerjaan tersebut akan selesai berturut-turut dalam waktu $30$ menit, $36$ menit, atau $45$ menit. Jika ketiga mesin tersebut digunakan bersama-sama selama $6$ menit, maka bagian dari pekerjaan tersebut yang akan selesai sebesar .... bagian.',
          answer: '$\\frac{1}{2}$',
          principle: 'Laju kerja gabungan adalah jumlah laju kerja masing-masing mesin per satuan waktu.',
          solution:
            'Dalam $1$ menit, mesin A, B, dan C berturut-turut dapat menyelesaikan $\\frac{1}{30}$, $\\frac{1}{36}$, dan $\\frac{1}{45}$ bagian pekerjaan.\nJika ketiganya bekerja bersama-sama, laju kerja gabungannya adalah:\n$$\\frac{1}{30} + \\frac{1}{36} + \\frac{1}{45} = \\frac{6 + 5 + 4}{180} = \\frac{15}{180} = \\frac{1}{12}\\text{ bagian/menit}.$$\nDalam waktu $6$ menit, bagian pekerjaan yang selesai adalah $6 \\times \\frac{1}{12} = \\frac{1}{2}$ bagian.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Misalkan\n$$A = \\{(x, y) \\mid y - x \\le 2,\\; 2x + y \\le 2,\\; y \\ge 0\\}$$\n$$B = \\{(x, y) \\mid 2y - 3x \\le 6,\\; kx + 2y \\le 2k,\\; y \\ge 0\\}.$$\nNilai $k$ sehingga luas daerah $B$ dua kali luas daerah $A$ adalah ....',
          answer: '$3$',
          principle: 'Menentukan daerah segitiga pada bidang Kartesius dari sistem pertidaksamaan linear dua variabel dan menghitung luasnya.',
          solution:
            'Tentukan titik-titik sudut daerah $A$ yang dibatasi oleh $y = x + 2$, $y = -2x + 2$, dan $y = 0$:\n- Perpotongan $y = x + 2$ dengan $y = 0$ adalah $(-2, 0)$.\n- Perpotongan $2x + y = 2$ dengan $y = 0$ adalah $(1, 0)$.\n- Perpotongan $y = x + 2$ dan $2x + y = 2$ menghasilkan $3x = 0 \\implies (0, 2)$.\nDaerah $A$ berupa segitiga dengan alas sepanjang $1 - (-2) = 3$ pada sumbu-$X$ dan tinggi $2$, sehingga luasnya:\n$$L_A = \\frac{1}{2} \\times 3 \\times 2 = 3.$$\nMaka luas daerah $B$ haruslah $L_B = 2 L_A = 6$.\nUntuk daerah $B$, batas $2y - 3x = 6$ memotong sumbu-$X$ di $(-2, 0)$, dan titik $(0, 0)$ memenuhi $2(0) - 3(0) \\le 6$.\nPeriksa tanda $k$ pada pertidaksamaan $kx + 2y \\le 2k$:\n- Jika $k = 0$, maka $2y \\le 0$ dan $y \\ge 0$ memberi $y = 0$ saja (luas $0 \\ne 6$).\n- Jika $k < 0$, pada $y = 0$ diperoleh $kx \\le 2k \\iff x \\ge 2$, dan untuk semua $x \\ge 2$ berlaku $0 \\le y \\le \\min\\left(\\frac{3}{2}x + 3,\\; \\frac{-k}{2}(x - 2)\\right)$ sehingga daerah $B$ tidak terbatas (luas tak hingga).\n- Jadi haruslah $k > 0$. Garis $kx + 2y = 2k$ memotong sumbu-$X$ di $(2, 0)$ dan bagian $y = 0$ yang memenuhi $B$ adalah ruas garis dari $(-2, 0)$ ke $(2, 0)$ (panjang alas $4$). Titik potong garis $y = \\frac{3}{2}x + 3$ dan $y = -\\frac{k}{2}x + k$ memenuhi:\n$$\\frac{3}{2}x + 3 = -\\frac{k}{2}x + k \\implies (k + 3)x = 2(k - 3) \\implies x_0 = \\frac{2(k - 3)}{k + 3}.$$\nNilai ordinat titik puncaknya adalah:\n$$y_0 = \\frac{3}{2} \\cdot \\frac{2(k - 3)}{k + 3} + 3 = \\frac{3(k - 3) + 3(k + 3)}{k + 3} = \\frac{6k}{k + 3} > 0.$$\nKarena $k > 0$, daerah $B$ berupa segitiga dengan alas $4$ dan tinggi $y_0$, sehingga luasnya:\n$$L_B = \\frac{1}{2} \\times 4 \\times \\frac{6k}{k + 3} = \\frac{12k}{k + 3}.$$\nSyarat $L_B = 6$ memberikan $\\frac{12k}{k + 3} = 6 \\implies 12k = 6k + 18 \\implies 6k = 18 \\implies k = 3$.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Di rumah Pak Budi yang sedang ditinggal pergi berlibur, lampu teras diberi sakelar otomatis yang akan mulai menyala pada pukul $19.00$, $19.30$, $20.00$, $20.30$, atau $21.00$ secara acak (masing-masing berpeluang sama). Lampu tersebut kemudian akan otomatis padam pada suatu waktu antara pukul $04.00$ sampai pukul $06.00$ pagi harinya. Misalkan diketahui pada malam ini lampu tersebut menyala selama $t$ jam, peluang bahwa lampu menyala selama $9 < t < 10$ jam adalah ....',
          answer: '$\\frac{7}{20}$',
          principle: 'Hukum peluang total dengan membagi $5$ kasus waktu menyala yang sama mungkin dan selang waktu padam yang seragam ($2$ jam).',
          solution:
            'Panjang selang waktu lampu padam dari pukul $04.00$ sampai $06.00$ adalah $2$ jam. Setiap dari $5$ waktu mulai menyala memiliki peluang $\\frac{1}{5}$. Hitung peluang bersyarat $9 < t < 10$ untuk masing-masing waktu menyala:\n1. Mulai pukul $19.00$: agar $9 < t < 10$, lampu harus padam antara $04.00$ dan $05.00$ (panjang selang $1$ jam dari $2$ jam). Peluang kasus ini: $\\frac{1}{5} \\times \\frac{1}{2} = \\frac{1}{10}$.\n2. Mulai pukul $19.30$: lampu harus padam antara $04.30$ dan $05.30$ (panjang selang $1$ jam dari $2$ jam). Peluang kasus ini: $\\frac{1}{5} \\times \\frac{1}{2} = \\frac{1}{10}$.\n3. Mulai pukul $20.00$: lampu harus padam antara $05.00$ dan $06.00$ (panjang selang $1$ jam dari $2$ jam). Peluang kasus ini: $\\frac{1}{5} \\times \\frac{1}{2} = \\frac{1}{10}$.\n4. Mulai pukul $20.30$: agar $9 < t < 10$, waktu padam harus antara $05.30$ dan $06.30$, yang beririsan dengan jadwal $[04.00, 06.00]$ pada selang $(05.30, 06.00)$ sepanjang $\\frac{1}{2}$ jam. Peluang kasus ini: $\\frac{1}{5} \\times \\frac{1/2}{2} = \\frac{1}{20}$.\n5. Mulai pukul $21.00$: dibutuhkan waktu padam setelah $06.00$, yang mustahil terjadi pada jadwal $[04.00, 06.00]$. Peluang kasus ini: $0$.\nTotal peluangnya adalah:\n$$\\frac{1}{10} + \\frac{1}{10} + \\frac{1}{10} + \\frac{1}{20} + 0 = \\frac{7}{20}.$$',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Untuk suatu bilangan bulat positif $n$, didefinisikan $B(n)$ sebagai bilangan bulat terkecil yang habis dibagi oleh semua bilangan bulat $1, 2, \\dots, n$. Sebagai contoh, $B(5) = 60$, karena $60$ habis dibagi oleh $1, 2, 3, 4$, serta $5$. Untuk $1 \\le n \\le 25$, banyaknya kemungkinan $n$ yang memenuhi $B(n) = B(n + 2)$ adalah ....',
          answer: '$3$',
          principle: '$B(n) = \\text{KPK}(1, 2, \\dots, n)$ hanya bertambah nilainya ketika $m$ berbentuk perpangkatan bilangan prima $p^k$ ($k \\ge 1$).',
          solution:
            'Perhatikan bahwa $B(n) = \\text{KPK}(1, 2, \\dots, n)$. Untuk setiap $m \\ge 2$, berlaku $B(m) = B(m - 1)$ jika dan hanya jika $m$ membagi $B(m - 1)$.\n- Jika $m = p^k$ (perpangkatan suatu bilangan prima $p$ dengan $k \\ge 1$), tidak ada bilangan di $\\{1, \\dots, m - 1\\}$ yang habis dibagi $p^k$, sehingga $B(m) > B(m - 1)$.\n- Sebaliknya, jika $m$ bukan perpangkatan prima, maka $m = a \\cdot b$ dengan $\\gcd(a, b) = 1$ dan $1 < a, b < m$. Karena $a \\mid B(m - 1)$ dan $b \\mid B(m - 1)$, maka $m = ab \\mid B(m - 1)$, sehingga $B(m) = B(m - 1)$.\nOleh karena itu, $B(n) = B(n + 2)$ berlaku jika dan hanya jika $n + 1$ dan $n + 2$ keduanya BUKAN perpangkatan bilangan prima.\nDaftar semua perpangkatan prima $p^k$ ($k \\ge 1$) dalam selang $2 \\le m \\le 27$ adalah:\n$$2, 3, 4, 5, 7, 8, 9, 11, 13, 16, 17, 19, 23, 25, 27.$$\nBilangan bukan perpangkatan prima dalam selang $2 \\le m \\le 27$ adalah:\n$$6, 10, 12, 14, 15, 18, 20, 21, 22, 24, 26.$$\nPasangan bilangan berurutan $(n + 1, n + 2)$ yang keduanya termuat dalam daftar tersebut (dengan $1 \\le n \\le 25$) hanyalah $(14, 15)$, $(20, 21)$, dan $(21, 22)$, yang berturut-turut bersesuaian dengan $n = 13$, $n = 19$, dan $n = 20$.\nJadi, ada $3$ nilai $n$ yang memenuhi.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Misalkan $g(n)$ menyatakan faktor ganjil terbesar dari suatu bilangan bulat positif $n$. Sebagai contoh, $g(10) = 5$, $g(11) = 11$, dan $g(16) = 1$. Jika hasil penjumlahan $g(2019) + g(2020) + g(2021) + \\dots + g(4038)$ adalah $2019 \\times m$, maka nilai $m$ adalah ....',
          answer: '$2020$',
          principle: 'Sifat $g(2k) = g(k)$, $g(2k - 1) = 2k - 1$, serta jumlah $N$ bilangan ganjil positif pertama adalah $N^2$.',
          solution:
            'Definisikan $S(N) = \\sum_{n=1}^{N} g(n)$, sehingga jumlah yang dicari adalah $S(4038) - S(2018)$.\nPisahkan suku-suku pada $S(4038)$ menjadi indeks ganjil dan indeks genap:\n- Untuk $n$ ganjil ($1, 3, 5, \\dots, 4037$), banyaknya suku adalah $2019$ dan $g(n) = n$, sehingga jumlahnya:\n$$1 + 3 + 5 + \\dots + 4037 = 2019^2.$$\n- Untuk $n$ genap ($2, 4, 6, \\dots, 4038$), karena $g(2k) = g(k)$, jumlahnya adalah:\n$$g(2) + g(4) + \\dots + g(4038) = g(1) + g(2) + \\dots + g(2019) = S(2019).$$\nOleh karena itu,\n$$S(4038) = 2019^2 + S(2019) = 2019^2 + S(2018) + g(2019).$$\nKurangkan $S(2018)$ dari kedua ruas dan gunakan $g(2019) = 2019$ (karena $2019$ ganjil):\n$$\\sum_{n=2019}^{4038} g(n) = S(4038) - S(2018) = 2019^2 + 2019 = 2019 \\times (2019 + 1) = 2019 \\times 2020.$$\nJadi, $m = 2020$.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Di babak bonus suatu kuis, seorang peserta akan diminta untuk mengambil secara acak $5$ dari $20$ bola yang telah dinomori $1$ sampai $20$. Hadiah utama akan didapatkan jika selisih nomor dari setiap pasang bola tidak kurang dari $3$. Banyaknya kemungkinan peserta tersebut memenangkan hadiah utama adalah ....',
          answer: '$792$',
          principle: 'Bijeksi pergeseran indeks untuk menghitung subhimpunan berjarak minimal $3$.',
          solution:
            'Misalkan kelima nomor bola yang terambil diurutkan sebagai $1 \\le x_1 < x_2 < x_3 < x_4 < x_5 \\le 20$. Selisih setiap pasang bernilai paling sedikit $3$ jika dan hanya jika selisih dua suku berurutan memenuhi $x_{i+1} - x_i \\ge 3$ untuk $i = 1, 2, 3, 4$.\nDefinisikan peubah baru dengan menggeser masing-masing suku:\n$$y_1 = x_1,\\quad y_2 = x_2 - 2,\\quad y_3 = x_3 - 4,\\quad y_4 = x_4 - 6,\\quad y_5 = x_5 - 8.$$\nSyarat $x_{i+1} - x_i \\ge 3$ ekuivalen dengan $y_{i+1} - y_i = (x_{i+1} - x_i) - 2 \\ge 1$, yaitu $y_{i+1} > y_i$. Batas atas $x_5 \\le 20$ menjadi $y_5 = x_5 - 8 \\le 12$, sehingga diperoleh korespondensi satu-satu dengan himpunan $5$-bilangan bulat berbeda:\n$$1 \\le y_1 < y_2 < y_3 < y_4 < y_5 \\le 12.$$\nBanyaknya cara memilih $5$ bilangan dari $\\{1, 2, \\dots, 12\\}$ adalah:\n$$\\binom{12}{5} = \\frac{12 \\times 11 \\times 10 \\times 9 \\times 8}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 11 \\times 9 \\times 8 = 792.$$',
          rubric: OK
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Uraian',
      marks: 21,
      stem: 'Selesaikan ketiga soal uraian berikut dengan langkah pembuktian atau konstruksi yang lengkap dan runtut (nomor asli 16-18; masing-masing bernilai 7 poin).',
      parts: [
        {
          label: '1',
          marks: 7,
          prompt:
            '(Nomor asli 16) Misalkan $f(5x + 2) \\ge f(5x) + 2$ dan $f(5x + 1) \\le f(5x) + 1$ untuk setiap bilangan real $x$. Jika $g(x) = f(x) - 2$ dan\n$$f(5) = \\frac{1}{(1)(2)} + \\frac{1}{(2)(3)} + \\frac{1}{(3)(4)} + \\dots + \\frac{1}{(2018)(2019)},$$\nhitunglah nilai dari $g(7)$.',
          answer: '$\\frac{2018}{2019}$',
          principle: 'Mengapit pertidaksamaan fungsi melalui substitusi peubah dan menjumlahkan deret teleskopik pecahan parsial.',
          solution:
            'Langkah 1: Menentukan hubungan antara $f(5x + 2)$ dan $f(5x)$.\nDiketahui untuk setiap bilangan real $x$ berlaku:\n$$f(5x + 2) \\ge f(5x) + 2 \\qquad (1)$$\n$$f(5x + 1) \\le f(5x) + 1 \\qquad (2)$$\nSubstitusikan $x$ dengan $x + \\frac{1}{5}$ ke ketaksamaan $(2)$, sehingga $5\\left(x + \\frac{1}{5}\\right) = 5x + 1$ dan $5\\left(x + \\frac{1}{5}\\right) + 1 = 5x + 2$. Diperoleh:\n$$f(5x + 2) \\le f(5x + 1) + 1.$$\nRangkaikan ketaksamaan $(1)$, hasil di atas, dan $(2)$:\n$$f(5x) + 2 \\le f(5x + 2) \\le f(5x + 1) + 1 \\le (f(5x) + 1) + 1 = f(5x) + 2.$$\nKarena ruas paling kiri dan ruas paling kanan sama-sama bernilai $f(5x) + 2$, maka tanda kesamaan harus berlaku di sepanjang rantai pertidaksamaan tersebut. Khususnya,\n$$f(5x + 2) = f(5x) + 2$$\nuntuk setiap $x \\in \\mathbb{R}$. Dengan mengambil $x = 1$, diperoleh $f(7) = f(5) + 2$.\n\nLangkah 2: Menghitung nilai $f(5)$.\nGunakan pemecahan pecahan parsial $\\frac{1}{k(k + 1)} = \\frac{1}{k} - \\frac{1}{k + 1}$:\n$$f(5) = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\dots + \\left(\\frac{1}{2018} - \\frac{1}{2019}\\right).$$\nDengan sifat teleskopik, semua suku tengah saling meniadakan sehingga tersisa:\n$$f(5) = 1 - \\frac{1}{2019} = \\frac{2018}{2019}.$$\n\nLangkah 3: Menentukan $g(7)$.\nKarena $g(x) = f(x) - 2$, maka:\n$$g(7) = f(7) - 2 = (f(5) + 2) - 2 = f(5) = \\frac{2018}{2019}.$$',
          rubric: [
            { code: 'M2', text: 'Menurunkan $f(5x + 2) \\le f(5x + 1) + 1$ melalui substitusi $x \\mapsto x + \\frac{1}{5}$ pada ketaksamaan kedua.' },
            { code: 'M2', text: 'Merangkai $f(5x) + 2 \\le f(5x + 2) \\le f(5x + 1) + 1 \\le f(5x) + 2$ dan menyimpulkan $f(7) = f(5) + 2$.' },
            { code: 'M2', text: 'Menghitung deret teleskopik $f(5) = 1 - \\frac{1}{2019} = \\frac{2018}{2019}$.' },
            { code: 'A1', text: 'Menyimpulkan $g(7) = f(7) - 2 = \\frac{2018}{2019}$ dengan benar.' }
          ]
        },
        {
          label: '2',
          marks: 7,
          prompt:
            '(Nomor asli 17) Misalkan diketahui alfabet di suatu "Negeri Awan" hanya terdiri dari huruf A, B, C, D, dan E saja. Perhatikan bahwa A dan E adalah huruf vokal, sedangkan B, C, dan D adalah huruf konsonan. Suatu deretan huruf disebut kata jika tidak mengandung huruf sama bersebelahan serta tidak mengandung huruf vokal bersebelahan. Tentukan banyaknya kata di "Negeri Awan" yang terdiri dari $7$ huruf.',
          answer: '$11640$',
          principle: 'Relasi rekursi berpasangan berdasarkan huruf terakhir kata (vokal atau konsonan).',
          solution:
            'Untuk setiap bilangan asli $n \\ge 1$, misalkan:\n- $v_n$ adalah banyaknya kata panjang $n$ yang berakhiran huruf vokal ($\\text{A}$ atau $\\text{E}$),\n- $k_n$ adalah banyaknya kata panjang $n$ yang berakhiran huruf konsonan ($\\text{B}$, $\\text{C}$, atau $\\text{D}$),\n- $a_n = v_n + k_n$ adalah total kata panjang $n$.\n\nLangkah 1: Nilai awal untuk $n = 1$.\nSetiap huruf tunggal merupakan kata yang sah, sehingga $v_1 = 2$ dan $k_1 = 3$ ($a_1 = 5$).\n\nLangkah 2: Membangun relasi rekursi dari panjang $n$ ke $n + 1$.\n- Agar kata panjang $n + 1$ berakhiran vokal: karena tidak boleh ada dua vokal bersebelahan, huruf ke-$n$ wajib konsonan, dan huruf ke-$(n+1)$ dapat memilih salah satu dari $2$ vokal ($\\text{A}$ atau $\\text{E}$). Jadi:\n$$v_{n+1} = 2k_n.$$\n- Agar kata panjang $n + 1$ berakhiran konsonan:\n  1. Jika huruf ke-$n$ adalah vokal ($v_n$ cara), huruf ke-$(n+1)$ bebas memilih salah satu dari $3$ konsonan.\n  2. Jika huruf ke-$n$ adalah konsonan ($k_n$ cara), huruf ke-$(n+1)$ tidak boleh sama dengan huruf ke-$n$, sehingga hanya ada $3 - 1 = 2$ pilihan konsonan.\n  Jadi:\n$$k_{n+1} = 3v_n + 2k_n.$$\n\nLangkah 3: Menghitung $(v_n, k_n)$ bertahap hingga $n = 7$.\n- $n = 1$: $v_1 = 2$, $k_1 = 3$, $a_1 = 5$.\n- $n = 2$: $v_2 = 2(3) = 6$, $k_2 = 3(2) + 2(3) = 12$, $a_2 = 18$.\n- $n = 3$: $v_3 = 2(12) = 24$, $k_3 = 3(6) + 2(12) = 42$, $a_3 = 66$.\n- $n = 4$: $v_4 = 2(42) = 84$, $k_4 = 3(24) + 2(42) = 156$, $a_4 = 240$.\n- $n = 5$: $v_5 = 2(156) = 312$, $k_5 = 3(84) + 2(156) = 564$, $a_5 = 876$.\n- $n = 6$: $v_6 = 2(564) = 1128$, $k_6 = 3(312) + 2(564) = 2064$, $a_6 = 3192$.\n- $n = 7$: $v_7 = 2(2064) = 4128$, $k_7 = 3(1128) + 2(2064) = 3384 + 4128 = 7512$.\n\nJadi, banyaknya kata yang terdiri dari $7$ huruf adalah:\n$$a_7 = v_7 + k_7 = 4128 + 7512 = 11640.$$',
          rubric: [
            { code: 'B1', text: 'Mendefinisikan $v_n$ (berakhiran vokal) dan $k_n$ (berakhiran konsonan) beserta nilai awal $v_1 = 2$, $k_1 = 3$.' },
            { code: 'M2', text: 'Menurunkan relasi rekursi $v_{n+1} = 2k_n$ dan $k_{n+1} = 3v_n + 2k_n$ dengan alasan kombinatorial yang tepat.' },
            { code: 'M3', text: 'Menghitung nilai $(v_n, k_n)$ secara runtut dari $n = 2$ hingga $n = 7$.' },
            { code: 'A1', text: 'Menjumlahkan $a_7 = 4128 + 7512 = 11640$ dengan tepat.' }
          ]
        },
        {
          label: '3',
          marks: 7,
          prompt:
            '(Nomor asli 18) Sandi memiliki $12$ kandang hamster yang terdiri dari $3$ kandang warna hijau, $3$ warna merah, $3$ warna biru, dan $3$ warna kuning. Terdapat $10$ ekor hamster yang akan didistribusikan ke dalam kandang-kandang tersebut. Ia mendistribusikan $4$ hamster ke dalam kandang warna hijau. Selanjutnya, ia mendistribusikan $3$ hamster ke kandang warna merah, $2$ hamster ke kandang warna biru, serta seekor hamster ke dalam kandang warna kuning. Asumsikan masing-masing hamster memiliki kemungkinan yang sama untuk dimasukkan ke dalam kandang tertentu. Tentukan peluang bahwa kandang hijau berisi lebih banyak hamster dibanding kandang lain, baik kandang hijau yang sewarna, maupun kandang lain warna.',
          answer: '$\\frac{89}{243}$',
          principle: 'Kemandirian distribusi antarwarna kandang dan pemecahan kasus berdasarkan isi kandang hijau terbanyak yang tunggal.',
          solution:
            'Kejadian yang dimaksud adalah terdapat sebuah kandang hijau yang memiliki jumlah hamster paling banyak secara tunggal (strictly greater) di antara seluruh $12$ kandang (baik $2$ kandang hijau lainnya maupun $9$ kandang merah, biru, dan kuning).\nKarena setiap hamster memilih salah satu dari $3$ kandang pada warna yang ditentukan secara acak dan saling bebas, banyak cara penempatan per warna adalah $3^4 = 81$ (hijau), $3^3 = 27$ (merah), $3^2 = 9$ (biru), dan $3^1 = 3$ (kuning).\n\nLangkah 1: Analisis distribusi $4$ hamster pada $3$ kandang hijau.\nPartisi tak terurut dari $4$ menjadi $3$ bilangan cacah adalah $(4, 0, 0)$, $(3, 1, 0)$, $(2, 2, 0)$, dan $(2, 1, 1)$. Partisi $(2, 2, 0)$ tidak memenuhi karena dua kandang hijau memiliki isi terbanyak yang sama (seri). Jadi hanya ada tiga kasus saling lepas:\n1. Kasus $1$ — isi hijau $(4, 0, 0)$ (kandang hijau terbanyak berisi $4$ hamster):\n   Pilih $1$ dari $3$ kandang hijau ($3$ cara), seluruh $4$ hamster masuk ke kandang itu ($1$ cara). Peluang pada hijau: $\\frac{3}{81} = \\frac{1}{27}$.\n2. Kasus $2$ — isi hijau $(3, 1, 0)$ (kandang hijau terbanyak berisi $3$ hamster):\n   Pilih kandang yang berisi $3$ ($3$ cara), pilih $3$ dari $4$ hamster ($\\binom{4}{3} = 4$ cara), dan letakkan $1$ hamster tersisa ke salah satu dari $2$ kandang hijau lain ($2$ cara). Banyak cara: $3 \\times 4 \\times 2 = 24$, sehingga peluang pada hijau: $\\frac{24}{81} = \\frac{8}{27}$.\n3. Kasus $3$ — isi hijau $(2, 1, 1)$ (kandang hijau terbanyak berisi $2$ hamster):\n   Pilih kandang yang berisi $2$ ($3$ cara), pilih $2$ dari $4$ hamster ($\\binom{4}{2} = 6$ cara), lalu bagi $2$ hamster tersisa ke $2$ kandang hijau lain masing-masing $1$ ($2! = 2$ cara). Banyak cara: $3 \\times 6 \\times 2 = 36$, sehingga peluang pada hijau: $\\frac{36}{81} = \\frac{4}{9}$.\n\nLangkah 2: Syarat pada warna merah, biru, dan kuning untuk setiap kasus.\n- Pada Kasus $1$ (maksimum hijau $= 4$): setiap kandang merah (total $3$ hamster), biru (total $2$ hamster), dan kuning (total $1$ hamster) pasti berisi kurang dari $4$ hamster. Peluang gabungan warna lain adalah $1 \\times 1 \\times 1 = 1$.\n  Peluang Kasus $1$:\n  $$P_1 = \\frac{1}{27} \\times 1 = \\frac{1}{27}.$$\n- Pada Kasus $2$ (maksimum hijau $= 3$): tidak boleh ada kandang merah yang berisi $3$ hamster (komplemen dari $(3, 0, 0)$ yang berjumlah $3$ cara dari $27$, sehingga peluang merah memenuhi adalah $1 - \\frac{3}{27} = \\frac{8}{9}$). Kandang biru dan kuning otomatis berisi $\\le 2 < 3$ (peluang masing-masing $1$).\n  Peluang Kasus $2$:\n  $$P_2 = \\frac{8}{27} \\times \\frac{8}{9} \\times 1 \\times 1 = \\frac{64}{243}.$$\n- Pada Kasus $3$ (maksimum hijau $= 2$): setiap kandang merah, biru, dan kuning paling banyak boleh berisi $1$ hamster:\n  - Merah ($3$ hamster ke $3$ kandang, masing-masing $1$): $3! = 6$ cara dari $27$, peluangnya $\\frac{6}{27} = \\frac{2}{9}$.\n  - Biru ($2$ hamster ke $3$ kandang berbeda): $3 \\times 2 = 6$ cara dari $9$, peluangnya $\\frac{6}{9} = \\frac{2}{3}$.\n  - Kuning ($1$ hamster): pasti paling banyak $1$, peluangnya $1$.\n  Peluang Kasus $3$:\n  $$P_3 = \\frac{4}{9} \\times \\frac{2}{9} \\times \\frac{2}{3} \\times 1 = \\frac{16}{243}.$$\n\nLangkah 3: Menjumlahkan peluang seluruh kasus.\n$$P = P_1 + P_2 + P_3 = \\frac{1}{27} + \\frac{64}{243} + \\frac{16}{243} = \\frac{9 + 64 + 16}{243} = \\frac{89}{243}.$$',
          rubric: [
            { code: 'B1', text: 'Memodelkan peluang independen antarwarna dengan ruang sampel $3^4, 3^3, 3^2, 3^1$ serta memaknai syarat pemenang tunggal pada kandang hijau.' },
            { code: 'M2', text: 'Menghitung peluang pada kandang hijau untuk kasus $(4,0,0)$, $(3,1,0)$, dan $(2,1,1)$ serta menyingkirkan $(2,2,0)$.' },
            { code: 'M3', text: 'Menghitung peluang syarat kandang merah, biru, dan kuning untuk masing-masing dari ketiga kasus.' },
            { code: 'A1', text: 'Menjumlahkan peluang ketiga kasus saling lepas hingga memperoleh $\\frac{89}{243}$.' }
          ]
        }
      ]
    }
  ]
};
