/**
 * Paket Soal Terstruktur: OSN-K Matematika SMP 2019 (20 soal pilihan ganda)
 * Sumber: scraped_raw/osnk-matematika-smp-2019.md (25 soal asli).
 * Catatan penyuntingan: 20 soal dimuat (nomor asli 1-7, 9-12, 15-17, 19-23, dan 25; dinomori ulang 1-20).
 * Soal nomor asli 8, 13, 14, 18, dan 24 dilewati karena mutlak membutuhkan gambar/diagram yang tidak tersedia pada arsip sumber.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-mat-smp-2019',
  slug: 'osnk-matematika-smp-2019',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'OSN-K Matematika SMP 2019',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab2-bilangan-rasional',
    'smp7-bab3-rasio',
    'smp7-bab4-bentuk-aljabar',
    'smp7-bab5-kesebangunan',
    'smp8-bab1-bilangan-berpangkat',
    'smp8-bab3-persamaan-pertidaksamaan-linear',
    'smp8-bab4-relasi-fungsi',
    'smp8-bab6-statistika',
    'smp9-bab2-bangun-ruang',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SMP 2019',
  totalMarks: 20,
  instructions:
    'Naskah asli OSN-K Matematika SMP 2019 terdiri atas 25 soal pilihan ganda. Paket ini memuat 20 soal yang utuh secara teks (nomor asli 1-7, 9-12, 15-17, 19-23, dan 25; dinomori ulang 1-20). Sebanyak 5 soal dilewati (nomor asli 8, 13, 14, 18, dan 24) karena mutlak memerlukan gambar atau diagram yang tidak tersedia pada arsip sumber. Setiap jawaban benar bernilai 1 poin (total 20 poin).',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-matematika-smp-2019.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 20,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (20 soal dimuat dari 25 soal naskah asli; nomor asli 8, 13, 14, 18, dan 24 dilewati karena ketiadaan gambar/diagram; masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Diketahui $A = \\{0, 1, 2, 3, 4\\}$. Jika $a, b, c$ adalah tiga anggota berbeda dari $A$ dan $(a^b)^c = n$, maka nilai maksimum dari $n$ adalah ....\n\nA. $4.096$\nB. $6.561$\nC. $9.561$\nD. $9.651$',
          answer: 'B. $6.561$',
          principle: 'Sifat bilangan berpangkat $(a^b)^c = a^{bc}$ dan perbandingan nilai eksponen untuk himpunan bilangan bulat.',
          solution:
            'Perhatikan bahwa $(a^b)^c = a^{bc}$. Memilih $a \\in \\{0, 1\\}$ atau memilih $0$ sebagai $b$ maupun $c$ hanya menghasilkan $n \\le 1$, sedangkan memilih $1$ sebagai $b$ atau $c$ membuat pangkatnya lebih kecil dibandingkan jika diganti bilangan yang lebih besar. Oleh karena itu, agar $a^{bc}$ maksimum, kita harus memilih $\\{a, b, c\\} = \\{2, 3, 4\\}$.\n\nKarena perkalian bersifat komutatif ($bc = cb$), pertukaran nilai $b$ dan $c$ menghasilkan bilangan yang sama. Periksa ketiga kemungkinan basis $a$:\n- $a = 2$ dengan $\\{b, c\\} = \\{3, 4\\}$: $2^{3 \\cdot 4} = 2^{12} = 4.096$\n- $a = 3$ dengan $\\{b, c\\} = \\{2, 4\\}$: $3^{2 \\cdot 4} = 3^8 = 6.561$\n- $a = 4$ dengan $\\{b, c\\} = \\{2, 3\\}$: $4^{2 \\cdot 3} = 4^6 = 2^{12} = 4.096$.\n\nJadi, nilai maksimum dari $n$ adalah $6.561$.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Dua akuarium A dan B diisi air sehingga volumenya sama, yaitu $64.000\\text{ cm}^3$. Anto memiliki $30$ kelereng kecil dan $20$ kelereng besar yang akan dimasukkan ke dalam akuarium tersebut. Ke dalam akuarium A dimasukkan $7$ kelereng kecil dan $7$ kelereng besar sehingga volume akuarium yang terisi menjadi $64.821\\frac{1}{3}\\text{ cm}^3$, sedangkan ke dalam akuarium B dimasukkan $21$ kelereng kecil dan $7$ kelereng besar sehingga volume akuarium yang terisi menjadi $64.880\\text{ cm}^3$. Volume seluruh kelereng Anto yang tidak dimasukkan ke akuarium adalah .... $\\text{cm}^3$.\n\nA. $113\\frac{3}{21}$\nB. $226\\frac{6}{21}$\nC. $251\\frac{9}{21}$\nD. $687\\frac{5}{21}$',
          answer: 'D. $687\\frac{5}{21}$',
          principle: 'Sistem persamaan linear dua variabel untuk volume masing-masing ukuran kelereng.',
          solution:
            'Misalkan volume satu kelereng kecil adalah $v_k$ dan volume satu kelereng besar adalah $v_b$. Penambahan volume pada masing-masing akuarium adalah:\n$$7v_k + 7v_b = 64.821\\frac{1}{3} - 64.000 = 821\\frac{1}{3} = \\frac{2.464}{3}$$\n$$21v_k + 7v_b = 64.880 - 64.000 = 880 = \\frac{2.640}{3}.$$\nKurangkan persamaan pertama dari persamaan kedua untuk menghilangkan $7v_b$:\n$$14v_k = \\frac{2.640}{3} - \\frac{2.464}{3} = \\frac{176}{3} \\implies v_k = \\frac{176}{42} = \\frac{88}{21}\\text{ cm}^3.$$\nSubstitusikan $7v_k = 7 \\cdot \\frac{88}{21} = \\frac{88}{3}$ ke persamaan pertama:\n$$7v_b = \\frac{2.464}{3} - \\frac{88}{3} = \\frac{2.376}{3} \\implies v_b = \\frac{2.376}{21}\\text{ cm}^3.$$\n(Catatan: dengan $\\pi = \\frac{22}{7}$, volume tersebut bersesuaian dengan kelereng berjari-jari $r = 1\\text{ cm}$ dan $R = 3\\text{ cm}$.)\n\nBanyak kelereng yang tidak dimasukkan ke akuarium adalah $30 - 7 - 21 = 2$ kelereng kecil dan $20 - 7 - 7 = 6$ kelereng besar. Jadi volume seluruh kelereng yang tersisa adalah:\n$$2v_k + 6v_b = 2 \\cdot \\frac{88}{21} + 6 \\cdot \\frac{2.376}{21} = \\frac{176 + 14.256}{21} = \\frac{14.432}{21} = 687\\frac{5}{21}\\text{ cm}^3.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Hasil Ikan Tangkapan (HIT) seorang nelayan selama bulan Januari 2019 menurun $25\\%$ dibanding bulan sebelumnya dan HIT selama bulan Februari 2019 menurun $20\\%$ dibanding bulan sebelumnya. Jika diketahui HIT selama bulan Maret 2019 turun $10\\%$ dibanding bulan sebelumnya sehingga menjadi $108\\text{ kg}$, maka pernyataan berikut yang benar adalah ....\n\nA. HIT bulan Desember 2018 sebanyak $200\\text{ kg}$\nB. HIT bulan Januari 2019 sebanyak $120\\text{ kg}$\nC. HIT bulan Februari 2019 sebanyak $130\\text{ kg}$\nD. HIT bulan Maret 2019 sebanyak $150\\text{ kg}$',
          answer: 'A. HIT bulan Desember 2018 sebanyak $200\\text{ kg}$',
          principle: 'Penurunan persentase berurutan menggunakan faktor pengali $(1 - p)$ dalam bentuk pecahan eksak.',
          solution:
            'Misalkan HIT pada bulan Desember 2018 adalah $x\\text{ kg}$. Maka berturut-turut diperoleh:\n- Januari 2019 (turun $25\\%$): $\\left(1 - \\frac{25}{100}\\right)x = \\frac{3}{4}x$\n- Februari 2019 (turun $20\\%$): $\\left(1 - \\frac{20}{100}\\right)\\left(\\frac{3}{4}x\\right) = \\frac{4}{5} \\cdot \\frac{3}{4}x = \\frac{3}{5}x$\n- Maret 2019 (turun $10\\%$): $\\left(1 - \\frac{10}{100}\\right)\\left(\\frac{3}{5}x\\right) = \\frac{9}{10} \\cdot \\frac{3}{5}x = \\frac{27}{50}x$.\n\nDiketahui HIT bulan Maret 2019 adalah $108\\text{ kg}$, sehingga:\n$$\\frac{27}{50}x = 108 \\implies x = 108 \\cdot \\frac{50}{27} = 4 \\cdot 50 = 200\\text{ kg}.$$\nDengan demikian, HIT Desember 2018 adalah $200\\text{ kg}$, HIT Januari 2019 adalah $\\frac{3}{4}(200) = 150\\text{ kg}$, HIT Februari 2019 adalah $\\frac{4}{5}(150) = 120\\text{ kg}$, dan HIT Maret 2019 adalah $\\frac{9}{10}(120) = 108\\text{ kg}$. Jadi pernyataan yang benar adalah pilihan A.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Jika $x = 2p - 4q$ dan $y = -p + 2q$, maka nilai $\\frac{2x^2 - 3xy + y^2}{x^2 - y^2}$ adalah ....\n\nA. $\\frac{1}{5}$\nB. $\\frac{1}{3}$\nC. $3$\nD. $5$',
          answer: 'D. $5$',
          principle: 'Pemfaktoran bentuk kuadrat aljabar dan penyederhanaan pecahan aljabar.',
          solution:
            'Faktorkan pembilang dan penyebut pecahan tersebut (dengan syarat penyebut $x^2 - y^2 \\neq 0$, yakni $p - 2q \\neq 0$):\n$$\\frac{2x^2 - 3xy + y^2}{x^2 - y^2} = \\frac{(2x - y)(x - y)}{(x + y)(x - y)} = \\frac{2x - y}{x + y}.$$\nSubstitusikan $x = 2(p - 2q)$ dan $y = -(p - 2q)$:\n$$\\frac{2x - y}{x + y} = \\frac{2(2(p - 2q)) - (-(p - 2q))}{2(p - 2q) + (-(p - 2q))} = \\frac{5(p - 2q)}{p - 2q} = 5.$$',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Diketahui $xy + 2x + y = 10$ dengan $x, y$ bilangan bulat positif. Nilai minimum dari $x + y$ adalah ....\n\nA. $4$\nB. $5$\nC. $8$\nD. $10$',
          answer: 'A. $4$',
          principle: 'Pemfaktoran persamaan Diophantine $xy + ax + by = c$ menjadi $(x + b)(y + a) = c + ab$.',
          solution:
            'Tambahkan $2$ pada kedua ruas persamaan agar dapat difaktorkan:\n$$xy + 2x + y + 2 = 12 \\implies (x + 1)(y + 2) = 12.$$\nKarena $x$ dan $y$ bilangan bulat positif ($x \\ge 1, y \\ge 1$), maka $x + 1 \\ge 2$ dan $y + 2 \\ge 3$. Pasangan faktor positif $(x + 1, y + 2)$ dari $12$ yang memenuhi batas tersebut adalah:\n- $(x + 1, y + 2) = (2, 6) \\implies (x, y) = (1, 4)$, sehingga $x + y = 5$\n- $(x + 1, y + 2) = (3, 4) \\implies (x, y) = (2, 2)$, sehingga $x + y = 4$\n- $(x + 1, y + 2) = (4, 3) \\implies (x, y) = (3, 1)$, sehingga $x + y = 4$.\n\nJadi, nilai minimum dari $x + y$ adalah $4$.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Akar-akar dari $x^2 - 5bx + b = 0$ adalah kuadrat kebalikan dari akar-akar persamaan $x^2 - ax + a - 1 = 0$. Nilai terbesar yang mungkin dari hasil perkalian $a$ dan $b$ adalah ....\n\nA. $\\frac{1}{4}$\nB. $\\frac{3}{4}$\nC. $\\frac{4}{3}$\nD. $\\frac{8}{3}$',
          answer: 'B. $\\frac{3}{4}$',
          principle: 'Pemfaktoran persamaan kuadrat dan Teorema Vieta untuk jumlah serta hasil kali akar.',
          solution:
            'Faktorkan persamaan kuadrat kedua:\n$$x^2 - ax + a - 1 = (x - 1)(x - (a - 1)) = 0.$$\nAkar-akarnya adalah $m = 1$ dan $n = a - 1$ (dengan $a \\neq 1$ agar $n \\neq 0$ sehingga kebalikannya terdefinisi). Kuadrat kebalikan akar-akar tersebut adalah $\\frac{1}{m^2} = 1$ dan $\\frac{1}{n^2} = \\frac{1}{(a - 1)^2}$, yang merupakan akar-akar persamaan $x^2 - 5bx + b = 0$.\n\nMenurut Teorema Vieta pada $x^2 - 5bx + b = 0$:\n- Jumlah akar: $1 + \\frac{1}{(a - 1)^2} = 5b$\n- Hasil kali akar: $1 \\cdot \\frac{1}{(a - 1)^2} = b$.\n\nSubstitusikan $b = \\frac{1}{(a - 1)^2}$ ke persamaan jumlah akar:\n$$1 + b = 5b \\implies 4b = 1 \\implies b = \\frac{1}{4}.$$\nAkibatnya $\\frac{1}{(a - 1)^2} = \\frac{1}{4}$, sehingga $(a - 1)^2 = 4$ dan $a - 1 = \\pm 2$, yang memberikan $a = 3$ atau $a = -1$.\n- Jika $a = 3$ dan $b = \\frac{1}{4}$, maka $ab = \\frac{3}{4}$.\n- Jika $a = -1$ dan $b = \\frac{1}{4}$, maka $ab = -\\frac{1}{4}$.\n\nJadi, nilai terbesar yang mungkin dari $ab$ adalah $\\frac{3}{4}$.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Didefinisikan $\\lfloor a \\rfloor$ adalah bilangan bulat terbesar yang lebih kecil atau sama dengan $a$. Sebagai contoh, $\\lfloor 2 \\rfloor = 2$, $\\left\\lfloor \\frac{3}{4} \\right\\rfloor = 0$, dan $\\left\\lfloor \\frac{5}{4} \\right\\rfloor = 1$. Jika $x = 7$, maka nilai $\\left\\lfloor \\frac{3x + 1}{4 - x} \\right\\rfloor$ adalah ....\n\nA. $8$\nB. $7$\nC. $-7$\nD. $-8$',
          answer: 'D. $-8$',
          principle: 'Definisi fungsi tangga (floor) untuk bilangan negatif: $\\lfloor a \\rfloor \\le a < \\lfloor a \\rfloor + 1$.',
          solution:
            'Untuk $x = 7$, hitung terlebih dahulu nilai pecahannya:\n$$\\frac{3(7) + 1}{4 - 7} = \\frac{22}{-3} = -7\\frac{1}{3}.$$\nKarena $-8 \\le -7\\frac{1}{3} < -7$, bilangan bulat terbesar yang lebih kecil atau sama dengan $-7\\frac{1}{3}$ adalah $-8$. Jadi $\\left\\lfloor \\frac{3x + 1}{4 - x} \\right\\rfloor = -8$.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Jika $f[n]$ menyatakan banyak faktor positif dari bilangan bulat $n$ yang lebih dari $\\sqrt{n}$, maka selisih nilai dari $f[(3^4 \\cdot 4^3)^2]$ dan $f[(3^3 \\cdot 4^2)^2]$ adalah ....\n\nA. $0$\nB. $24$\nC. $27$\nD. $54$',
          answer: 'C. $27$',
          principle: 'Banyak faktor positif dari faktorisasi prima dan korespondensi pasangan faktor $(d, n/d)$ terhadap $\\sqrt{n}$.',
          solution:
            'Untuk setiap bilangan kuadrat sempurna $n$, semua faktor positif $n$ selain $\\sqrt{n}$ berpasangan sebagai $(d, n/d)$ dengan tepat satu faktor kurang dari $\\sqrt{n}$ dan satu faktor lainnya lebih dari $\\sqrt{n}$. Jika $d(n)$ menyatakan total banyak faktor positif $n$, maka:\n$$f[n] = \\frac{d(n) - 1}{2}.$$\n1. Misalkan $p = (3^4 \\cdot 4^3)^2 = (3^4 \\cdot 2^6)^2 = 2^{12} \\cdot 3^8$. Total faktor positif $p$ adalah $d(p) = (12 + 1)(8 + 1) = 13 \\times 9 = 117$, sehingga $f[p] = \\frac{117 - 1}{2} = 58$.\n2. Misalkan $q = (3^3 \\cdot 4^2)^2 = (3^3 \\cdot 2^4)^2 = 2^8 \\cdot 3^6$. Total faktor positif $q$ adalah $d(q) = (8 + 1)(6 + 1) = 9 \\times 7 = 63$, sehingga $f[q] = \\frac{63 - 1}{2} = 31$.\n\nJadi selisihnya adalah $f[p] - f[q] = 58 - 31 = 27$.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Bilangan tadutima adalah bilangan bulat positif yang bukan kelipatan $2$, $3$, atau $5$. Banyak bilangan bulat positif kurang dari $1.001$ yang merupakan bilangan tadutima adalah ....\n\nA. $333$\nB. $266$\nC. $233$\nD. $167$',
          answer: 'B. $266$',
          principle: 'Prinsip Inklusi-Eksklusi untuk menghitung banyak bilangan bulat yang tidak habis dibagi oleh $2$, $3$, maupun $5$.',
          solution:
            'Bilangan bulat positif yang kurang dari $1.001$ adalah $1, 2, 3, \\dots, 1.000$ (sebanyak $1.000$ bilangan). Misalkan $A_k$ adalah himpunan kelipatan $k$ dalam $\\{1, 2, \\dots, 1.000\\}$, sehingga $|A_k| = \\left\\lfloor \\frac{1.000}{k} \\right\\rfloor$:\n- $|A_2| = 500$, $|A_3| = 333$, $|A_5| = 200$\n- $|A_2 \\cap A_3| = |A_6| = 166$, $|A_2 \\cap A_5| = |A_{10}| = 100$, $|A_3 \\cap A_5| = |A_{15}| = 66$\n- $|A_2 \\cap A_3 \\cap A_5| = |A_{30}| = 33$.\n\nDengan Prinsip Inklusi-Eksklusi, banyak bilangan yang merupakan kelipatan $2$, $3$, atau $5$ adalah:\n$$|A_2 \\cup A_3 \\cup A_5| = (500 + 333 + 200) - (166 + 100 + 66) + 33 = 1.033 - 332 + 33 = 734.$$\nJadi, banyak bilangan tadutima yang kurang dari $1.001$ adalah $1.000 - 734 = 266$.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Di antara bilangan berikut, bilangan yang bernilai ganjil untuk setiap bilangan bulat $n$ adalah ....\n\nA. $2019 - 3n$\nB. $2019 + n$\nC. $2019 + 2n$\nD. $2019 + n^2$',
          answer: 'C. $2019 + 2n$',
          principle: 'Paritas (sifat ganjil-genap) pada penjumlahan dan perkalian bilangan bulat.',
          solution:
            'Bilangan $2019$ bernilai ganjil. Untuk setiap bilangan bulat $n$, bilangan $2n$ selalu genap, sehingga:\n$$2019 + 2n = \\text{ganjil} + \\text{genap} = \\text{ganjil}.$$\nPada pilihan lainnya, jika $n$ bernilai ganjil maka $3n$, $n$, dan $n^2$ semuanya bernilai ganjil, sehingga $2019 - 3n$, $2019 + n$, dan $2019 + n^2$ menjadi genap. Jadi hanya $2019 + 2n$ yang selalu ganjil untuk setiap bilangan bulat $n$.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Diketahui $A$ adalah himpunan yang memiliki tepat tiga anggota. Hasil penjumlahan setiap dua bilangan anggota $A$ adalah $1.209$, $1.690$, dan $2.019$. Selisih bilangan terbesar dan terkecil dari anggota $A$ adalah ....\n\nA. $329$\nB. $481$\nC. $769$\nD. $810$',
          answer: 'D. $810$',
          principle: 'Sistem persamaan linear simetris untuk penjumlahan berpasangan tiga bilangan.',
          solution:
            'Misalkan ketiga anggota himpunan $A$ diurutkan sebagai $a < b < c$. Maka jumlah setiap dua anggotanya terurut sebagai $a + b < a + c < b + c$, sehingga:\n$$a + b = 1.209, \\qquad a + c = 1.690, \\qquad b + c = 2.019.$$\nKurangkan persamaan pertama dari persamaan ketiga:\n$$(b + c) - (a + b) = 2.019 - 1.209 \\implies c - a = 810.$$\n(Sebagai verifikasi, menjumlahkan ketiga persamaan menghasilkan $2(a + b + c) = 4.918 \\implies a + b + c = 2.459$, sehingga $a = 440$, $b = 769$, $c = 1.250$, dan $c - a = 810$.)',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Parabola $y = ax^2 + bx + c$ mempunyai puncak di $(p, p)$ dan titik potong dengan sumbu-$Y$ di $(0, -p)$. Jika $p \\neq 0$, maka nilai $b$ adalah ....\n\nA. $1$\nB. $2$\nC. $4$\nD. $8$',
          answer: 'C. $4$',
          principle: 'Bentuk puncak fungsi kuadrat $y = a(x - h)^2 + k$ untuk menentukan koefisien suku linear.',
          solution:
            'Karena parabola memiliki puncak di $(p, p)$, persamaannya dapat ditulis dalam bentuk puncak:\n$$y = a(x - p)^2 + p = ax^2 - 2apx + (ap^2 + p).$$\nDengan membandingkan koefisiennya terhadap $y = ax^2 + bx + c$, diperoleh $b = -2ap$ dan $c = ap^2 + p$.\n\nKarena parabola memotong sumbu-$Y$ di $(0, -p)$, maka $c = -p$, sehingga:\n$$ap^2 + p = -p \\implies ap^2 = -2p.$$\nKarena $p \\neq 0$, bagi kedua ruas dengan $p$ untuk memperoleh $ap = -2$. Jadi:\n$$b = -2ap = -2(-2) = 4.$$',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            '$ABCD$ adalah jajar genjang. $E$ adalah titik tengah $AB$. Ruas garis $DE$ memotong $AC$ di titik $P$. Perbandingan luas jajar genjang $ABCD$ dengan luas segitiga $AEP$ adalah ....\n\nA. $12 : 1$\nB. $8 : 1$\nC. $6 : 1$\nD. $4 : 1$',
          answer: 'A. $12 : 1$',
          principle: 'Kesebangunan segitiga $\\triangle AEP \\sim \\triangle CDP$ dan perbandingan tinggi terhadap jajar genjang.',
          solution:
            'Pada jajar genjang $ABCD$, sisi $AB \\parallel CD$ dan $AB = CD$. Karena $E$ titik tengah $AB$, maka $AE = \\frac{1}{2}AB = \\frac{1}{2}CD$.\n\nKarena $AE \\parallel CD$, sudut-sudut dalam berseberangan sama besar ($\\angle EAP = \\angle DCP$ dan $\\angle AEP = \\angle CDP$), sehingga $\\triangle AEP \\sim \\triangle CDP$ dengan rasio kesebangunan $\\frac{AE}{CD} = \\frac{1}{2}$.\n\nMisalkan $h$ adalah tinggi jajar genjang $ABCD$ terhadap alas $AB$, sedangkan $h_1$ dan $h_2$ berturut-turut adalah tinggi $\\triangle AEP$ dan $\\triangle CDP$ dari titik $P$. Karena $h_1 + h_2 = h$ dan $\\frac{h_1}{h_2} = \\frac{1}{2}$, diperoleh $h_1 = \\frac{1}{3}h$.\n\nLuas segitiga $AEP$ menjadi:\n$$[AEP] = \\frac{1}{2} \\cdot AE \\cdot h_1 = \\frac{1}{2} \\cdot \\left(\\frac{1}{2}AB\\right) \\cdot \\left(\\frac{1}{3}h\\right) = \\frac{1}{12}(AB \\cdot h) = \\frac{1}{12}[ABCD].$$\nJadi, perbandingan $[ABCD] : [AEP] = 12 : 1$.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Dalam segitiga sama sisi $ABC$, titik $D, E$, dan $F$ masing-masing pada sisi $BC, CA$, dan $AB$ sehingga $\\angle AFE = \\angle BFD$, $\\angle BDF = \\angle CDE$, dan $\\angle CED = \\angle AEF$. Jika panjang sisi segitiga $ABC$ adalah $8\\text{ cm}$, maka luas segitiga $DEF$ adalah .... $\\text{cm}^2$.\n\nA. $2\\sqrt{3}$\nB. $4\\sqrt{3}$\nC. $6\\sqrt{3}$\nD. $8\\sqrt{3}$',
          answer: 'B. $4\\sqrt{3}$',
          principle: 'Jumlah sudut dalam segitiga, sifat segitiga sama sisi, dan kesamaan sisi segitiga sama sisi.',
          solution:
            'Misalkan $\\angle AFE = \\angle BFD = \\alpha$, $\\angle BDF = \\angle CDE = \\beta$, dan $\\angle CED = \\angle AEF = \\gamma$. Karena $\\triangle ABC$ sama sisi, maka $\\angle A = \\angle B = \\angle C = 60^\\circ$. Dari jumlah sudut pada ketiga segitiga pojok:\n- Pada $\\triangle AEF$: $\\alpha + \\gamma = 180^\\circ - 60^\\circ = 120^\\circ$\n- Pada $\\triangle BFD$: $\\alpha + \\beta = 180^\\circ - 60^\\circ = 120^\\circ$\n- Pada $\\triangle CDE$: $\\beta + \\gamma = 180^\\circ - 60^\\circ = 120^\\circ$.\n\nDari dua persamaan pertama diperoleh $\\beta = \\gamma$. Substitusi ke persamaan ketiga memberikan $2\\beta = 120^\\circ \\implies \\beta = 60^\\circ$, sehingga $\\alpha = \\beta = \\gamma = 60^\\circ$.\n\nAkibatnya, $\\triangle AEF$, $\\triangle BFD$, dan $\\triangle CDE$ masing-masing memiliki ketiga sudut $60^\\circ$ sehingga semuanya segitiga sama sisi, dan pada $\\triangle DEF$ setiap sudutnya juga $180^\\circ - 60^\\circ - 60^\\circ = 60^\\circ$. Karena $\\triangle DEF$ sama sisi ($EF = FD = DE$), diperoleh $AF = EF = FD = BF$. Dengan $AB = 8\\text{ cm}$, panjang sisi $\\triangle DEF$ adalah $AF = BF = 4\\text{ cm}$.\n\nJadi, luas segitiga $DEF$ adalah:\n$$L_{\\triangle DEF} = \\frac{\\sqrt{3}}{4} \\cdot 4^2 = 4\\sqrt{3}\\text{ cm}^2.$$',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Terdapat empat kotak yang dinomori $1$ sampai $4$. Setiap kotak dapat diisi maksimum $5$ koin dengan syarat kotak yang bernomor lebih besar tidak boleh berisi koin lebih banyak dari kotak yang bernomor lebih kecil. Jika tidak boleh ada kotak yang kosong, banyak cara pengisian koin yang mungkin ke dalam keempat kotak tersebut adalah ....\n\nA. $25$\nB. $70$\nC. $252$\nD. $625$',
          answer: 'B. $70$',
          principle: 'Kombinasi dengan pengulangan untuk menghitung banyaknya barisan tak naik pada himpunan terbatas.',
          solution:
            'Misalkan banyak koin pada kotak $1, 2, 3, 4$ berturut-turut adalah $c_1, c_2, c_3, c_4$. Syarat tidak kosong, maksimum $5$ koin, dan kotak bernomor lebih besar tidak melebihi kotak sebelumnya berarti:\n$$5 \\ge c_1 \\ge c_2 \\ge c_3 \\ge c_4 \\ge 1.$$\nSetiap susunan tak naik tersebut berkorespondensi satu-satu dengan cara memilih $4$ bilangan dari himpunan $\\{1, 2, 3, 4, 5\\}$ dengan pengulangan diperbolehkan (lalu mengurutkannya dari yang terbesar ke terkecil). Menggunakan rumus kombinasi dengan pengulangan:\n$$\\binom{5 + 4 - 1}{4} = \\binom{8}{4} = \\frac{8 \\cdot 7 \\cdot 6 \\cdot 5}{4 \\cdot 3 \\cdot 2 \\cdot 1} = 70.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Untuk setiap buku baru yang datang, seorang pustakawan bertugas untuk menempel label nomor di bagian samping buku dan menyampul buku tersebut dengan plastik transparan. Proses menempel label dan menyampul ini disebut pengerjaan. Agar label nomor tidak cepat rusak, proses penyampulan suatu buku harus dilakukan setelah menempel label nomornya. Jika ada tiga buku baru berbeda yang harus dikerjakan, banyak kemungkinan urutan pengerjaan yang dapat dilakukan oleh pustakawan tersebut adalah ....\n\nA. $8$\nB. $48$\nC. $90$\nD. $720$',
          answer: 'C. $90$',
          principle: 'Permutasi dengan pembatasan urutan relatif pada pasangan pekerjaan yang saling bebas.',
          solution:
            'Terdapat $3$ buku berbeda, yang masing-masing memiliki $2$ tahap pekerjaan: menempel label ($L_i$) dan menyampul ($S_i$) untuk $i = 1, 2, 3$. Tanpa syarat urutan, ada $6! = 720$ urutan pengerjaan dari $6$ pekerjaan berbeda tersebut.\n\nUntuk setiap buku $i$, pekerjaan $L_i$ harus dikerjakan sebelum $S_i$. Secara simetris, tepat separuh dari seluruh permutasi menempatkan $L_i$ sebelum $S_i$, dan hal ini berlaku bebas untuk ketiga buku secara bersamaan. Jadi, banyak urutan pengerjaan yang memenuhi syarat adalah:\n$$\\frac{6!}{2! \\cdot 2! \\cdot 2!} = \\frac{720}{8} = 90.$$',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Password akun media sosial Ahmad terdiri dari enam karakter berbeda penyusun kata "NKRIgo". Ahmad memintamu untuk menebak password-nya dengan memberikan dua informasi tambahan, yaitu "g" tidak bersebelahan dengan "o", dan "R" bersebelahan dengan "I". Jika kamu menggunakan seluruh informasi tersebut dengan baik, peluangmu untuk dapat langsung menebak dengan benar adalah ....\n\nA. $\\frac{1}{36}$\nB. $\\frac{1}{72}$\nC. $\\frac{1}{144}$\nD. $\\frac{1}{720}$',
          answer: 'C. $\\frac{1}{144}$',
          principle: 'Permutasi blok bersebelahan dengan prinsip komplemen serta definisi peluang klasik $\\frac{1}{|S|}$.',
          solution:
            'Keenam karakter pada kata "NKRIgo" seluruhnya berbeda.\n1. Banyak susunan dengan "R" dan "I" bersebelahan: anggap pasangan $\\{R, I\\}$ sebagai $1$ blok bersama $4$ karakter lain sehingga ada $5$ unsur. Karena blok $\\{R, I\\}$ dapat disusun dalam $2!$ cara ($RI$ atau $IR$), terdapat $5! \\times 2! = 120 \\times 2 = 240$ susunan.\n2. Banyak susunan dengan "R" bersebelahan dengan "I" sekaligus "g" bersebelahan dengan "o": anggap $\\{R, I\\}$ dan $\\{g, o\\}$ sebagai dua blok bersama $2$ karakter lain sehingga ada $4$ unsur, menghasilkan $4! \\times 2! \\times 2! = 24 \\times 4 = 96$ susunan.\n\nJadi, banyak password yang memenuhi syarat ("R" bersebelahan dengan "I", tetapi "g" tidak bersebelahan dengan "o") adalah $240 - 96 = 144$. Karena hanya ada satu password yang benar, peluang langsung menebak dengan benar adalah $\\frac{1}{144}$.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Misalkan terdapat $n$ nilai ulangan yang rata-ratanya $75$. Jika ada tambahan sebanyak $m$ nilai yang masing-masingnya $100$, maka rata-ratanya sekarang menjadi lebih dari $80$. Nilai $\\frac{m}{n}$ yang mungkin adalah ....\n\nA. $\\frac{4}{11}$\nB. $\\frac{4}{17}$\nC. $\\frac{2}{9}$\nD. $\\frac{5}{24}$',
          answer: 'A. $\\frac{4}{11}$',
          principle: 'Rata-rata gabungan dan pertidaksamaan linear untuk rasio banyak data.',
          solution:
            'Jumlah $n$ nilai awal adalah $75n$, dan setelah ditambahkan $m$ nilai bernilai $100$, jumlah seluruhnya menjadi $75n + 100m$ untuk $n + m$ nilai. Syarat rata-rata baru lebih dari $80$ memberikan:\n$$\\frac{75n + 100m}{n + m} > 80 \\implies 75n + 100m > 80n + 80m \\implies 20m > 5n \\implies \\frac{m}{n} > \\frac{1}{4}.$$\nPeriksa setiap pilihan terhadap $\\frac{1}{4}$:\n- A. $\\frac{4}{11} > \\frac{4}{16} = \\frac{1}{4}$ (memenuhi)\n- B. $\\frac{4}{17} < \\frac{4}{16} = \\frac{1}{4}$\n- C. $\\frac{2}{9} < \\frac{2}{8} = \\frac{1}{4}$\n- D. $\\frac{5}{24} < \\frac{5}{20} = \\frac{1}{4}$.\n\nJadi, nilai $\\frac{m}{n}$ yang mungkin adalah $\\frac{4}{11}$.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Diketahui lima buah bilangan bulat positif yang sudah terurut, yaitu $n + 1$, $n + 2$, $2m - 4$, $2m - 2$, dan $m + 4$. Rata-rata lima bilangan tersebut sama dengan jangkauannya dan sama pula dengan mediannya. Nilai $m + n$ adalah ....\n\nA. $5$\nB. $7$\nC. $10$\nD. $12$',
          answer: 'B. $7$',
          principle: 'Hubungan rata-rata, median, dan jangkauan pada himpunan data terurut.',
          solution:
            'Karena kelima bilangan sudah terurut dari terkecil ke terbesar:\n- Jangkauan: $J = (m + 4) - (n + 1) = m - n + 3$\n- Median (suku ke-$3$): $M_e = 2m - 4$\n- Rata-rata: $\\bar{x} = \\frac{(n + 1) + (n + 2) + (2m - 4) + (2m - 2) + (m + 4)}{5} = \\frac{5m + 2n + 1}{5}$.\n\nDari $\\bar{x} = J$ diperoleh:\n$$\\frac{5m + 2n + 1}{5} = m - n + 3 \\implies 5m + 2n + 1 = 5m - 5n + 15 \\implies 7n = 14 \\implies n = 2.$$\nSubstitusikan $n = 2$ ke $J = M_e$:\n$$m - 2 + 3 = 2m - 4 \\implies m + 1 = 2m - 4 \\implies m = 5.$$\nVerifikasi untuk $n = 2$ dan $m = 5$: kelima bilangan tersebut adalah $3, 4, 6, 8, 9$ (terurut naik dan semuanya bilangan bulat positif, dengan $J = 9 - 3 = 6$, $M_e = 6$, dan $\\bar{x} = \\frac{30}{5} = 6$). Jadi $m + n = 5 + 2 = 7$.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Diketahui jumlah $20$ suku pertama suatu barisan aritmetika adalah $1.390$. Jika suku pertama dari barisan tersebut adalah $3$, maka selisih dari dua suku berurutan di barisan tersebut adalah ....\n\nA. $7$\nB. $17$\nC. $21$\nD. $24$',
          answer: 'A. $7$',
          principle: 'Rumus jumlah $n$ suku pertama deret aritmetika $S_n = \\frac{n}{2}(2a + (n - 1)b)$.',
          solution:
            'Diketahui $n = 20$, suku pertama $a = 3$, dan $S_{20} = 1.390$. Selisih dua suku berurutan adalah beda barisan $b$. Dengan rumus jumlah deret aritmetika:\n$$S_{20} = \\frac{20}{2}(2(3) + (20 - 1)b)$$\n$$1.390 = 10(6 + 19b) \\implies 139 = 6 + 19b \\implies 19b = 133 \\implies b = \\frac{133}{19} = 7.$$\nJadi, selisih dua suku berurutan di barisan tersebut adalah $7$.',
          rubric: OK
        }
      ]
    }
  ]
};
