/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SMP Kelas 7–8 – Advanced 1
 * Sumber: BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7–8 – ADVANCED 1.pdf (Duta e-dukasi).
 * Bahasa asli tiap butir soal (Indonesia / Inggris) dipertahankan sesuai aslinya.
 */
export default {
  id: 'olim-smp-bilangan-adv1',
  slug: 'bilangan-smp-advanced-1',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'olympiad-pro',
  topic: 'Bilangan Olimpiade SMP Kelas 7–8 (Advanced 1)',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp8-bab1-bilangan-berpangkat'
  ],
  lang: 'id',
  langDisplay: 'ID / EN',
  competition: 'Seri Pembinaan OSN',
  title: 'Bilangan Olimpiade Matematika SMP Kelas 7–8 – Advanced 1',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 30 soal (20 Pilihan Ganda pada Bagian A dan 10 Isian Singkat pada Bagian B). Setiap soal dipertahankan dalam bahasa aslinya (Bahasa Indonesia atau Bahasa Inggris).',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7\u20138 \u2013 ADVANCED 1.pdf',
    driveFolder: '1cBh4tYsSB8-l2fiGVEyfoes5pKtMQU2h',
    license: 'CC BY 4.0'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Pilihan Ganda',
      marks: 20,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal (nomor 1–20).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Berapakah sisa pembagian $(2^{2026} + 5^{2026})$ jika dibagi oleh $7$?\nA. 0\nB. 2\nC. 4\nD. 5',
          answer: 'C. 4',
          principle:
            'Teorema Fermat Kecil untuk modulo prima $7$ ($a^6 \\equiv 1 \\pmod{7}$ jika $7 \\nmid a$) dan sifat kongruensi $5 \\equiv -2 \\pmod{7}$.',
          solution:
            'Periksa eksponen modulo $6$ (berdasarkan Teorema Fermat Kecil untuk modulo $7$, di mana $2^6 \\equiv 1 \\pmod{7}$). Karena $2026 = 6 \\times 337 + 4$, maka $2026 \\equiv 4 \\pmod{6}$.\n$$2^{2026} \\equiv 2^4 = 16 \\equiv 2 \\pmod{7}.$$\nUntuk $5^{2026}$, karena $5 \\equiv -2 \\pmod{7}$, diperoleh:\n$$5^{2026} \\equiv (-2)^{2026} = 2^{2026} \\equiv 2 \\pmod{7}.$$\nJumlah sisa: $2 + 2 = 4$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'How many positive integer divisors does the number $2024^2$ have? (Note: $2024 = 8 \\times 253$)\nA. 24\nB. 48\nC. 63\nD. 120',
          answer: 'C. 63',
          principle:
            'If the prime factorization of a positive integer is $p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k}$, the number of positive divisors is $(e_1 + 1)(e_2 + 1)\\cdots(e_k + 1)$.',
          solution:
            'First, find the prime factorization of $2024$:\n$$2024 = 8 \\times 253 = 2^3 \\times 11 \\times 23.$$\nThen square both sides:\n$$2024^2 = (2^3 \\times 11 \\times 23)^2 = 2^6 \\times 11^2 \\times 23^2.$$\nThe number of positive integer divisors is the product of $(\\text{exponent} + 1)$:\n$$(6 + 1)(2 + 1)(2 + 1) = 7 \\times 3 \\times 3 = 63.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Diketahui bilangan bulat positif $x$ dan $y$ memenuhi Persamaan Diophantine $xy - 2x - 3y = 5$. Jumlah dari semua nilai $x + y$ yang mungkin adalah...\nA. 13\nB. 15\nC. 17\nD. 20',
          answer: 'C. 17',
          principle:
            'Pemfaktoran aljabar Simon\'s Favorite Factoring Trick (SFFT) mengubah persamaan $xy + ax + by = c$ menjadi $(x + b)(y + a) = c + ab$.',
          solution:
            'Lakukan pemfaktoran aljabar (Simon\'s Favorite Factoring Trick) dengan menambahkan $6$ pada kedua ruas:\n$$xy - 2x - 3y + 6 = 5 + 6$$\n$$x(y - 2) - 3(y - 2) = 11 \\implies (x - 3)(y - 2) = 11.$$\nKarena $11$ adalah bilangan prima dan $x, y > 0$ (sehingga $x - 3 \\ge -2$ dan $y - 2 \\ge -1$), pasangan faktor yang mungkin hanya $(1, 11)$ dan $(11, 1)$.\n- Kasus 1: $x - 3 = 1 \\implies x = 4$, dan $y - 2 = 11 \\implies y = 13$, sehingga $x + y = 17$.\n- Kasus 2: $x - 3 = 11 \\implies x = 14$, dan $y - 2 = 1 \\implies y = 3$, sehingga $x + y = 17$.\nPada kedua kasus, nilai $x + y$ selalu $17$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Let $N$ be the smallest positive integer such that $\\frac{N}{2}$ is a perfect square and $\\frac{N}{3}$ is a perfect cube. What is the value of $N$?\nA. 72\nB. 216\nC. 432\nD. 648',
          answer: 'D. 648',
          principle:
            'In prime factorization, a perfect square has all even exponents and a perfect cube has all exponents divisible by $3$.',
          solution:
            'Let $N = 2^a \\times 3^b$ (no other primes are needed to minimize $N$). For $\\frac{N}{2} = 2^{a-1} \\times 3^b$ to be a perfect square, $a - 1$ and $b$ must be even, so $a$ is odd and $b$ is even.\nFor $\\frac{N}{3} = 2^a \\times 3^{b-1}$ to be a perfect cube, $a$ must be a multiple of $3$, and $b - 1$ must be a multiple of $3$ (so $b \\equiv 1 \\pmod{3}$).\n- Smallest odd multiple of $3$ for $a$: $a = 3$.\n- Smallest even positive integer congruent to $1 \\pmod{3}$ for $b$: $b = 4$.\nTherefore, $N = 2^3 \\times 3^4 = 8 \\times 81 = 648$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Faktor Persekutuan Terbesar (FPB) dari dua bilangan asli $x$ dan $y$ adalah $12$, dan Kelipatan Persekutuan Terkecil (KPK)-nya adalah $864$. Jika diketahui $x - y = 12$, berapakah nilai dari $x + y$?\nA. 180\nB. 192\nC. 204\nD. 216',
          answer: 'C. 204',
          principle:
            'Dua bilangan dengan $\\text{FPB}(x, y) = d$ dapat ditulis sebagai $x = da$ dan $y = db$ dengan $\\text{FPB}(a, b) = 1$, sehingga $\\text{KPK}(x, y) = d \\times a \\times b$.',
          solution:
            'Misalkan $x = 12a$ dan $y = 12b$ dengan $\\text{FPB}(a, b) = 1$. Maka:\n$$\\text{KPK} = 12 \\times a \\times b = 864 \\implies a \\times b = 72.$$\nKarena $x - y = 12$, maka $12a - 12b = 12 \\implies a - b = 1$.\nPasangan bilangan asli berurutan dengan hasil kali $72$ adalah $a = 9$ dan $b = 8$ (saling prima).\nDiperoleh $x = 12 \\times 9 = 108$ dan $y = 12 \\times 8 = 96$, sehingga:\n$$x + y = 108 + 96 = 204.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'What is the unit digit (last digit) of the number obtained by evaluating $11^{11} + 12^{12} + 13^{13}$?\nA. 0\nB. 2\nC. 8\nD. 9',
          answer: 'A. 0',
          principle:
            'The unit digit of $a^n$ depends only on the unit digit of $a$ and the cycle length (at most $4$) of its powers modulo $10$.',
          solution:
            'Evaluate the unit digit of each term separately:\n- $11^{11}$ ends in $1$ (since any positive power of $1$ ends in $1$).\n- $12^{12} \\equiv 2^{12} \\pmod{10}$. Powers of $2$ cycle with period $4$: $2, 4, 8, 6$. Since $12$ is a multiple of $4$, $12^{12}$ ends in $6$.\n- $13^{13} \\equiv 3^{13} \\pmod{10}$. Powers of $3$ cycle with period $4$: $3, 9, 7, 1$. Since $13 = 4 \\times 3 + 1$, $13^{13}$ ends in $3$.\nSumming the unit digits: $1 + 6 + 3 = 10$, so the unit digit is $0$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Hasil kali tiga bilangan bulat berurutan adalah $336$. Berapakah jumlah dari ketiga bilangan bulat tersebut?\nA. 18\nB. 21\nC. 24\nD. 27',
          answer: 'B. 21',
          principle:
            'Nyatakan tiga bilangan berurutan secara simetris sebagai $m - 1$, $m$, dan $m + 1$ sehingga hasil kalinya adalah $m^3 - m$, lalu apit di antara dua pangkat tiga bilangan bulat yang eksak.',
          solution:
            'Misalkan ketiga bilangan bulat berurutan tersebut adalah $m - 1$, $m$, dan $m + 1$, sehingga:\n$$(m - 1)m(m + 1) = m(m^2 - 1) = m^3 - m = 336.$$\nJika $m \\le 1$, maka $(m - 1)m(m + 1) \\le 0$, padahal hasil kalinya positif; jadi $m \\ge 2$.\nGunakan ketaksamaan eksak bilangan pangkat tiga:\n- Karena $m^3 > m^3 - m = 336 > 216 = 6^3$, diperoleh $m > 6$, sehingga $m \\ge 7$.\n- Karena fungsi $(m - 1)m(m + 1)$ naik untuk $m \\ge 2$, untuk $m \\ge 8$ berlaku $(m - 1)m(m + 1) \\ge 7 \\times 8 \\times 9 = 504 > 336$, sehingga haruslah $m \\le 7$.\nDari $7 \\le m \\le 7$, nilai $m$ tunggal yang memenuhi adalah $m = 7$ (terbukti $6 \\times 7 \\times 8 = 336$, konsisten dengan faktorisasi prima $336 = 2^4 \\times 3 \\times 7$).\nJumlah ketiga bilangan tersebut adalah $(m - 1) + m + (m + 1) = 3m = 3 \\times 7 = 21$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'A number written in base $b$ as $235_b$ is equal to the decimal (base $10$) number $124$. What is the value of the base $b$?\nA. 6\nB. 7\nC. 8\nD. 9',
          answer: 'B. 7',
          principle:
            'A three-digit number $\\overline{d_2 d_1 d_0}_b$ in base $b$ equals $d_2 b^2 + d_1 b + d_0$ in base $10$, with all digits strictly less than $b$.',
          solution:
            'Convert $235_b$ to base $10$:\n$$2b^2 + 3b + 5 = 124 \\implies 2b^2 + 3b - 119 = 0.$$\nFactor the quadratic equation:\n$$(2b + 17)(b - 7) = 0.$$\nSince the base $b$ must be a positive integer greater than $5$, we get $b = 7$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Jika diketahui bahwa $\\frac{20}{13} = 1 + \\frac{1}{x + \\frac{1}{y + \\frac{1}{z}}}$, dengan $x$, $y$, dan $z$ adalah bilangan bulat positif, berapakah nilai $x + y + z$?\nA. 6\nB. 7\nC. 8\nD. 9',
          answer: 'C. 8',
          principle:
            'Setiap bilangan rasional dapat dinyatakan secara tunggal sebagai pecahan berlanjut sederhana menggunakan Algoritma Pembagian Euclid.',
          solution:
            'Gunakan algoritma Euclid (pecahan berlanjut):\n$$\\frac{20}{13} = 1 + \\frac{7}{13} = 1 + \\frac{1}{\\frac{13}{7}}$$\n$$\\frac{13}{7} = 1 + \\frac{6}{7} = 1 + \\frac{1}{\\frac{7}{6}} = 1 + \\frac{1}{1 + \\frac{1}{6}}.$$\nJadi:\n$$\\frac{20}{13} = 1 + \\frac{1}{1 + \\frac{1}{1 + \\frac{1}{6}}}.$$\nDiperoleh $x = 1$, $y = 1$, dan $z = 6$, sehingga $x + y + z = 1 + 1 + 6 = 8$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'If $p$, $q$, and $r$ are prime numbers satisfying the equation $p \\times q \\times r = 5(p + q + r)$, what is the maximum possible value of $p + q + r$?\nA. 10\nB. 12\nC. 14\nD. 16',
          answer: 'C. 14',
          principle:
            'If a prime divides a product of primes, it must equal one of the prime factors.',
          solution:
            'Since $5$ divides $p \\times q \\times r$ and $p, q, r$ are primes, one of them (without loss of generality, $p$) must be $5$. Substitute $p = 5$:\n$$5qr = 5(5 + q + r) \\implies qr = 5 + q + r.$$\nRearrange and factor:\n$$qr - q - r + 1 = 6 \\implies (q - 1)(r - 1) = 6.$$\nThe positive factor pairs of $6$ are $(1, 6)$ and $(2, 3)$:\n- If $(q - 1, r - 1) = (1, 6)$, then $q = 2$ and $r = 7$ (both are primes).\n- If $(q - 1, r - 1) = (2, 3)$, then $q = 3$ and $r = 4$ ($4$ is not prime).\nThus the primes are $5, 2, 7$, and the maximum possible value of $p + q + r$ is $5 + 2 + 7 = 14$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Angka puluhan (digit kedua dari belakang) pada bilangan $7^{2024}$ adalah...\nA. 0\nB. 2\nC. 4\nD. 9',
          answer: 'A. 0',
          principle:
            'Dua digit terakhir suatu bilangan bulat ditentukan oleh sisanya modulo $100$.',
          solution:
            'Untuk mendapatkan angka puluhan, periksa pola dua angka terakhir (modulo $100$):\n$$7^1 \\equiv 07, \\quad 7^2 \\equiv 49, \\quad 7^3 = 343 \\equiv 43, \\quad 7^4 = 2401 \\equiv 01 \\pmod{100}.$$\nKarena $7^4 \\equiv 01 \\pmod{100}$, pola dua angka terakhir berulang setiap $4$ pangkat dan $2024 = 4 \\times 506$ habis dibagi $4$.\nMaka $7^{2024} = (7^4)^{506} \\equiv 01^{506} = 01 \\pmod{100}$, sehingga angka puluhannya adalah $0$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'The decimal number $100!$ ($100$ factorial) has exactly $24$ trailing zeros. If $100!$ is converted and written in base $8$, how many trailing consecutive zeros will it have?\nA. 24\nB. 32\nC. 48\nD. 97',
          answer: 'B. 32',
          principle:
            'The number of trailing zeros of $N$ in base $b = p^k$ equals $\\lfloor v_p(N) / k \\rfloor$, where $v_p(n!)$ is found via Legendre\'s formula.',
          solution:
            'Trailing zeros in base $8 = 2^3$ depend on the highest power of $8$ that divides $100!$, which equals $\\lfloor v_2(100!) / 3 \\rfloor$.\nIn $100! = 1 \\times 2 \\times \\dots \\times 100$, each multiple of $2$ contributes at least one factor of $2$, each multiple of $4$ contributes a second factor of $2$, and so on up to $2^6 = 64$ (since $2^7 = 128 > 100$). By Legendre\'s formula, the exponent of $2$ in $100!$ is:\n$$v_2(100!) = \\left\\lfloor \\frac{100}{2} \\right\\rfloor + \\left\\lfloor \\frac{100}{4} \\right\\rfloor + \\left\\lfloor \\frac{100}{8} \\right\\rfloor + \\left\\lfloor \\frac{100}{16} \\right\\rfloor + \\left\\lfloor \\frac{100}{32} \\right\\rfloor + \\left\\lfloor \\frac{100}{64} \\right\\rfloor = 50 + 25 + 12 + 6 + 3 + 1 = 97.$$\nSince $8 = 2^3$, the number of trailing zeros in base $8$ is $\\lfloor 97 / 3 \\rfloor = 32$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Penyebut pada bentuk rasional dan paling sederhana dari pecahan $\\frac{1}{\\sqrt{2} + \\sqrt{3} + \\sqrt{5}}$ adalah...\nA. 6\nB. 10\nC. 12\nD. 24',
          answer: 'C. 12',
          principle:
            'Merasionalkan penyebut tiga suku bentuk akar dilakukan bertahap dengan mengelompokkan dua suku terlebih dahulu dan mengalikan dengan bentuk sekawannya.',
          solution:
            'Kalikan pembilang dan penyebut dengan sekawan $(\\sqrt{2} + \\sqrt{3}) - \\sqrt{5}$:\n$$\\frac{(\\sqrt{2} + \\sqrt{3}) - \\sqrt{5}}{(\\sqrt{2} + \\sqrt{3})^2 - (\\sqrt{5})^2} = \\frac{\\sqrt{2} + \\sqrt{3} - \\sqrt{5}}{(2 + 3 + 2\\sqrt{6}) - 5} = \\frac{\\sqrt{2} + \\sqrt{3} - \\sqrt{5}}{2\\sqrt{6}}.$$\nAgar penyebut rasional sepenuhnya, kalikan lagi pembilang dan penyebut dengan $\\sqrt{6}$:\n$$\\frac{(\\sqrt{2} + \\sqrt{3} - \\sqrt{5})\\sqrt{6}}{2\\sqrt{6} \\cdot \\sqrt{6}} = \\frac{\\sqrt{12} + \\sqrt{18} - \\sqrt{30}}{12} = \\frac{2\\sqrt{3} + 3\\sqrt{2} - \\sqrt{30}}{12}.$$\nPembilang dan penyebut tidak memiliki faktor persekutuan yang dapat disederhanakan, sehingga penyebut paling sederhananya adalah $12$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Find the greatest three-digit positive integer $x$ that satisfies both congruences: $x \\equiv 17 \\pmod{35}$ and $x \\equiv 4 \\pmod{9}$.\nA. 787\nB. 832\nC. 942\nD. 977',
          answer: 'A. 787',
          principle:
            'Solve a system of linear congruences by substituting $x = m_1 k + r_1$ into the second congruence (Chinese Remainder Theorem method).',
          solution:
            'From the first congruence, write $x = 35k + 17$ for some integer $k$. Substitute into the second congruence:\n$$35k + 17 \\equiv 4 \\pmod{9}.$$\nReduce coefficients modulo $9$ ($35 \\equiv -1$ and $17 \\equiv 8$):\n$$-k + 8 \\equiv 4 \\pmod{9} \\implies -k \\equiv -4 \\pmod{9} \\implies k \\equiv 4 \\pmod{9}.$$\nThus $k = 9m + 4$, so:\n$$x = 35(9m + 4) + 17 = 315m + 157.$$\nWe want the largest three-digit integer ($x \\le 999$):\n- For $m = 2$: $x = 315(2) + 157 = 630 + 157 = 787$.\n- For $m = 3$: $x = 315(3) + 157 = 1102$ (four digits).\nThe greatest three-digit solution is $787$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Diberikan $a$ dan $b$ adalah bilangan asli ganjil yang saling prima (coprime) sedemikian rupa sehingga $a^2 - b^2 = 2024$. Jika $a$ dan $b$ dipilih agar jumlah keduanya sekecil mungkin, berapakah nilai dari $a + b$?\nA. 46\nB. 92\nC. 253\nD. 506',
          answer: 'A. 46',
          principle:
            'Faktorisasi selisih kuadrat $a^2 - b^2 = (a - b)(a + b)$ mengubah persamaan ke dalam pencarian pasangan faktor dengan syarat paritas dan saling prima.',
          solution:
            'Faktorkan selisih kuadrat: $(a - b)(a + b) = 2024$.\nMisalkan $u = a + b$ dan $v = a - b$ dengan $u > v > 0$. Karena $a$ dan $b$ ganjil, maka $u$ dan $v$ pasti genap. Tulis $u = 2x$ dan $v = 2y$, sehingga:\n$$(2x)(2y) = 2024 \\implies xy = 506 = 2 \\times 11 \\times 23.$$\nPerhatikan bahwa $a = x + y$ dan $b = x - y$. Karena $a$ dan $b$ ganjil serta saling prima, maka $x$ dan $y$ harus saling prima dan berbeda paritas (satu ganjil, satu genap), serta $x > y$.\nPasangan $(x, y)$ yang mungkin adalah $(506, 1)$, $(253, 2)$, $(46, 11)$, dan $(23, 22)$.\nUntuk meminimalkan $a + b = u = 2x$, pilih $x$ sekecil mungkin yaitu $x = 23$ (dengan $y = 22$, menghasilkan $a = 45$ dan $b = 1$ yang ganjil dan saling prima).\nJadi nilai terkecil $a + b = 2 \\times 23 = 46$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'If $\\sqrt{14 - 4\\sqrt{6}}$ can be expressed in the form $\\sqrt{a} - \\sqrt{b}$ where $a$ and $b$ are positive integers and $a > b$, what is the value of $a \\times b$?\nA. 12\nB. 24\nC. 36\nD. 48',
          answer: 'B. 24',
          principle:
            'For $a > b > 0$, $\\sqrt{(a + b) - 2\\sqrt{ab}} = \\sqrt{a} - \\sqrt{b}$.',
          solution:
            'First, rewrite the nested radical so the inner radical has coefficient $2$:\n$$\\sqrt{14 - 4\\sqrt{6}} = \\sqrt{14 - 2\\sqrt{4 \\times 6}} = \\sqrt{14 - 2\\sqrt{24}}.$$\nWe seek positive integers $a > b$ with $a + b = 14$ and $a \\times b = 24$. These numbers are $a = 12$ and $b = 2$ (since $12 + 2 = 14$ and $12 \\times 2 = 24$).\nThus the radical simplifies to $\\sqrt{12} - \\sqrt{2}$, giving $a \\times b = 12 \\times 2 = 24$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Kelipatan Persekutuan Terkecil (KPK) dari dua buah bilangan adalah $3.600$ dan Faktor Persekutuan Terbesarnya (FPB) adalah $15$. Jika bilangan pertama adalah $75$, berapakah bilangan kedua?\nA. 240\nB. 360\nC. 720\nD. 1080',
          answer: 'C. 720',
          principle:
            'Untuk dua bilangan asli $A$ dan $B$, berlaku identitas $A \\times B = \\text{FPB}(A, B) \\times \\text{KPK}(A, B)$.',
          solution:
            'Gunakan sifat hubungan antara dua bilangan dengan FPB dan KPK-nya:\n$$\\text{Bilangan 1} \\times \\text{Bilangan 2} = \\text{FPB} \\times \\text{KPK}$$\n$$75 \\times \\text{Bilangan 2} = 15 \\times 3600 \\implies \\text{Bilangan 2} = \\frac{15 \\times 3600}{75} = \\frac{3600}{5} = 720.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'What is the sum of all positive integers less than $100$ that are multiples of $3$ but NOT multiples of $5$?\nA. 1238\nB. 1368\nC. 1533\nD. 1683',
          answer: 'B. 1368',
          principle:
            'Use the inclusion-exclusion principle: subtract the sum of multiples of $\\text{LCM}(3, 5) = 15$ from the sum of multiples of $3$.',
          solution:
            'First, find the sum of all positive multiples of $3$ less than $100$ (from $3$ to $99$, which is $33$ terms):\n$$S_3 = 3(1 + 2 + \\dots + 33) = 3 \\times \\frac{33 \\times 34}{2} = 1683.$$\nNext, find the sum of multiples of both $3$ and $5$, i.e., multiples of $15$ less than $100$ (from $15$ to $90$, which is $6$ terms):\n$$S_{15} = 15(1 + 2 + \\dots + 6) = 15 \\times \\frac{6 \\times 7}{2} = 315.$$\nThe required sum is:\n$$S_3 - S_{15} = 1683 - 315 = 1368.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Jika diketahui $2^x = 3$ dan $3^y = 5$, berapakah nilai dari $8^{xy}$?\nA. 15\nB. 25\nC. 75\nD. 125',
          answer: 'D. 125',
          principle:
            'Sifat pangkat dari bilangan berpangkat: $(a^m)^n = a^{mn} = (a^n)^m$.',
          solution:
            'Pangkatkan kedua ruas persamaan pertama dengan $y$:\n$$(2^x)^y = 3^y \\implies 2^{xy} = 5 \\quad (\\text{karena } 3^y = 5).$$\nDengan sifat eksponen, nyatakan $8^{xy}$ dalam basis $2^{xy}$:\n$$8^{xy} = (2^3)^{xy} = (2^{xy})^3 = 5^3 = 125.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'The digits of a three-digit integer $ABC$ form an arithmetic progression with a non-zero positive common difference (meaning $A > B > C$ or $C > B > A$). If the number $ABC$ is a multiple of $9$ and $A > C$, what is the maximum possible value of the number $ABC$?\nA. 864\nB. 954\nC. 963\nD. 981',
          answer: 'C. 963',
          principle:
            'Three numbers $A, B, C$ in arithmetic progression satisfy $A + C = 2B$, and an integer is divisible by $9$ if and only if the sum of its digits is divisible by $9$.',
          solution:
            'In an arithmetic progression, $A + C = 2B$, so the sum of digits is $A + B + C = 3B$.\nFor $\\overline{ABC}$ to be a multiple of $9$, $3B$ must be a multiple of $9$, meaning $B$ is a multiple of $3$, so $B \\in \\{3, 6, 9\\}$ (since $B$ is a digit and $A > B > C \\ge 0$ forces $B > 0$).\n- If $B = 9$, then $A + C = 18$, forcing $A = 9, C = 9$ (common difference is $0$, invalid).\n- If $B = 6$, then $A + C = 12$. With $A > B > C$ and $A \\le 9$, valid pairs $(A, C)$ are $(9, 3)$, $(8, 4)$, and $(7, 5)$, giving numbers $963, 864, 765$.\n- If $B = 3$, then $A + C = 6$, giving numbers at most $630$.\nThe maximum possible value is $963$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Isian Singkat',
      marks: 10,
      stem: 'Tuliskan jawaban akhir yang singkat dan tepat untuk setiap soal (nomor 1–10).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Berapakah banyak angka nol berurutan di bagian akhir hasil perkalian $1 \\times 3 \\times 5 \\times \\dots \\times 99$?',
          answer: '0',
          answerNumeric: [{ name: 'banyakNol', value: 0 }],
          principle:
            'Banyaknya angka nol di akhir hasil perkalian sama dengan pangkat tertinggi $10 = 2 \\times 5$ yang membagi hasil kali tersebut.',
          solution:
            'Jumlah angka nol di bagian akhir bergantung pada banyaknya pasangan faktor prima $2$ dan $5$. Karena perkalian ini hanya melibatkan bilangan ganjil ($1, 3, 5, \\dots, 99$), tidak ada satu pun faktor $2$ di dalamnya. Oleh karena itu, banyaknya angka nol berurutan di bagian akhir adalah $0$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'What is the remainder when the number $2024^{2024}$ is divided by $9$?',
          answer: '1',
          answerNumeric: [{ name: 'remainder', value: 1 }],
          principle:
            'An integer is congruent to the sum of its base-$10$ digits modulo $9$.',
          solution:
            'Evaluate $2024$ modulo $9$ using the sum of its digits:\n$$2 + 0 + 2 + 4 = 8 \\equiv -1 \\pmod{9}.$$\nRaising to the $2024$-th power gives:\n$$2024^{2024} \\equiv (-1)^{2024} = 1 \\pmod{9}.$$\nSo the remainder is $1$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'KPK dari suatu bilangan positif $n$ dan $45$ adalah $180$, sedangkan FPB dari $n$ dan $45$ adalah $15$. Tentukan nilai $n$.',
          answer: '60',
          answerNumeric: [{ name: 'n', value: 60 }],
          principle:
            'Untuk dua bilangan asli $a$ dan $b$, berlaku $a \\times b = \\text{KPK}(a, b) \\times \\text{FPB}(a, b)$.',
          solution:
            'Gunakan rumus hubungan KPK dan FPB:\n$$n \\times 45 = \\text{KPK}(n, 45) \\times \\text{FPB}(n, 45) = 180 \\times 15$$\n$$n = \\frac{180 \\times 15}{45} = \\frac{2700}{45} = 60.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Let $x$ and $y$ be positive integers such that $x^2 - y^2 = 101$. Find the exact value of $x^2 + y^2$.',
          answer: '5101',
          answerNumeric: [{ name: 'value', value: 5101 }],
          principle:
            'Factor difference of squares as $(x - y)(x + y)$ and use the primality of the right-hand side.',
          solution:
            'Factor the difference of squares:\n$$(x - y)(x + y) = 101.$$\nSince $101$ is prime and $x, y$ are positive integers ($x + y > x - y > 0$), we must have $x - y = 1$ and $x + y = 101$.\nAdding both equations gives $2x = 102 \\implies x = 51$, and subtracting gives $y = 50$.\nTherefore:\n$$x^2 + y^2 = 51^2 + 50^2 = 2601 + 2500 = 5101.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Jika bentuk $\\frac{3}{\\sqrt{7} - 2}$ dirasionalkan dan disederhanakan menjadi $a\\sqrt{7} + b$ dengan $a$ dan $b$ adalah bilangan bulat, berapakah nilai dari $a \\times b$?',
          answer: '2',
          answerNumeric: [{ name: 'hasil', value: 2 }],
          principle:
            'Rasionalisasi penyebut berbentuk $\\sqrt{p} - q$ dilakukan dengan mengalikan pembilang dan penyebut oleh sekawannya $\\sqrt{p} + q$.',
          solution:
            'Kalikan pembilang dan penyebut dengan sekawan $(\\sqrt{7} + 2)$:\n$$\\frac{3}{\\sqrt{7} - 2} \\times \\frac{\\sqrt{7} + 2}{\\sqrt{7} + 2} = \\frac{3(\\sqrt{7} + 2)}{7 - 4} = \\frac{3(\\sqrt{7} + 2)}{3} = \\sqrt{7} + 2.$$\nMembandingkan dengan bentuk $a\\sqrt{7} + b$, diperoleh $a = 1$ dan $b = 2$, sehingga $a \\times b = 1 \\times 2 = 2$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Evaluate the exact numerical value of the infinite nested radical: $\\sqrt{20 + \\sqrt{20 + \\sqrt{20 + \\dots}}}$.',
          answer: '5',
          answerNumeric: [{ name: 'value', value: 5 }],
          principle:
            'An infinite self-similar nested radical satisfies a fixed-point quadratic equation obtained by setting $x$ equal to the entire expression.',
          solution:
            'Let $x = \\sqrt{20 + \\sqrt{20 + \\sqrt{20 + \\dots}}}$. Since $x > 0$ and the expression repeats infinitely under the outer radical, we have $x = \\sqrt{20 + x}$.\nSquaring both sides gives:\n$$x^2 = 20 + x \\implies x^2 - x - 20 = 0 \\implies (x - 5)(x + 4) = 0.$$\nSince $x > 0$, we obtain $x = 5$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Berapakah bilangan bulat tak negatif terbesar $n$ sedemikian sehingga $3^n$ dapat membagi habis $100!$ ($100$ faktorial)?',
          answer: '48',
          answerNumeric: [{ name: 'n', value: 48 }],
          principle:
            'Pangkat tertinggi bilangan prima $p$ yang membagi $N!$ dihitung dengan rumus Legendre: $v_p(N!) = \\sum_{k \\ge 1} \\lfloor N / p^k \\rfloor$.',
          solution:
            'Dalam perkalian $100! = 1 \\times 2 \\times \\dots \\times 100$, setiap kelipatan $3$ menyumbang sedikitnya satu faktor $3$, setiap kelipatan $9$ menyumbang satu faktor $3$ tambahan, setiap kelipatan $27$ menyumbang faktor ketiga, dan setiap kelipatan $81$ menyumbang faktor keempat (berhenti di $81$ karena $3^5 = 243 > 100$).\nDengan rumus Legendre, pangkat maksimum $n$ dari $3$ dalam $100!$ adalah:\n$$n = \\left\\lfloor \\frac{100}{3} \\right\\rfloor + \\left\\lfloor \\frac{100}{9} \\right\\rfloor + \\left\\lfloor \\frac{100}{27} \\right\\rfloor + \\left\\lfloor \\frac{100}{81} \\right\\rfloor = 33 + 11 + 3 + 1 = 48.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Find the smallest positive integer $x$ such that $x \\equiv 1 \\pmod{2}$, $x \\equiv 2 \\pmod{3}$, $x \\equiv 3 \\pmod{4}$, $x \\equiv 4 \\pmod{5}$, and $x \\equiv 5 \\pmod{6}$.',
          answer: '59',
          answerNumeric: [{ name: 'x', value: 59 }],
          principle:
            'When every remainder is $k$ less than its modulus ($x \\equiv m_i - k \\pmod{m_i}$), $x + k$ is divisible by $\\text{LCM}(m_1, m_2, \\dots)$.',
          solution:
            'Notice that in each congruence, the remainder is exactly $1$ less than the modulus, meaning $x \\equiv -1 \\pmod{m}$ for $m \\in \\{2, 3, 4, 5, 6\\}$.\nTherefore, $x + 1$ is a positive common multiple of $2, 3, 4, 5,$ and $6$.\nSince $\\text{LCM}(2, 3, 4, 5, 6) = 60$, the smallest positive solution satisfies $x + 1 = 60$, giving $x = 59$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Tentukan angka satuan (digit paling belakang) dari hasil operasi bilangan pangkat bertingkat $2^{(3^4)}$.',
          answer: '2',
          answerNumeric: [{ name: 'angkaSatuan', value: 2 }],
          principle:
            'Digit satuan perpangkatan basis $2$ berulang dengan periode $4$, sehingga cukup mengevaluasi pangkatnya modulo $4$.',
          solution:
            'Angka satuan pangkat dari $2$ berulang setiap $4$ siklus ($2, 4, 8, 6$). Hitung terlebih dahulu nilai eksponen $3^4 = 81$.\nKarena $81 = 4 \\times 20 + 1 \\equiv 1 \\pmod{4}$, maka $2^{(3^4)} = 2^{81}$ memiliki angka satuan yang sama dengan $2^1$, yaitu $2$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'The sum of two positive integers is $50$, and their greatest common divisor (GCD) is $5$. How many such unordered pairs (sets of two numbers) exist?',
          answer: '2',
          answerNumeric: [{ name: 'pairs', value: 2 }],
          principle:
            'Write two numbers with $\\gcd(x, y) = d$ as $da$ and $db$ with $\\gcd(a, b) = 1$, then count coprime pairs summing to $(x + y)/d$.',
          solution:
            'Let the two positive integers be $5a$ and $5b$, where $\\gcd(a, b) = 1$. Then:\n$$5a + 5b = 50 \\implies a + b = 10.$$\nPositive coprime pairs $\\{a, b\\}$ summing to $10$ are $\\{1, 9\\}$ and $\\{3, 7\\}$ (giving number pairs $\\{5, 45\\}$ and $\\{15, 35\\}$; note $\\{2, 8\\}$, $\\{4, 6\\}$, and $\\{5, 5\\}$ are not coprime).\nSince the question asks for unordered pairs, there are exactly $2$ pairs.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
