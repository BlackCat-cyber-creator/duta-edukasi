/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SMP Kelas 7–8 – Expert 1
 * Sumber: Duta e-dukasi (BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7–8 – EXPERT 1.pdf).
 * Bahasa dipertahankan sesuai naskah sumber untuk tiap butir soal (Keputusan D5).
 */
export default {
  id: 'olim-smp-bilangan-exp1',
  slug: 'bilangan-smp-expert-1',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'olympiad-pro',
  topic: 'Bilangan Olimpiade SMP Kelas 7–8 (Expert 1)',
  relatedChapterIds: ['smp7-bab1-bilangan-bulat', 'smp8-bab1-bilangan-berpangkat'],
  lang: 'id',
  title: 'Bilangan Olimpiade Matematika SMP Kelas 7–8 – Expert 1',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 20 soal Pilihan Ganda (Bagian A) dan 10 soal Isian Singkat (Bagian B) dengan teliti. Pertahankan bahasa masing-masing soal sesuai naskah asli.',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7\u20138 \u2013 EXPERT 1.pdf',
    driveFolder: '1cBh4tYsSB8-l2fiGVEyfoes5pKtMQU2h',
    license: 'CC BY 4.0'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Pilihan Ganda',
      marks: 20,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (20 soal, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Berapakah sisa pembagian bilangan $2^{2026}$ jika dibagi oleh $13$?\n\nA. $3$\nB. $4$\nC. $10$\nD. $12$',
          answer: 'C. $10$',
          principle: 'Teorema Fermat Kecil untuk bilangan prima $p = 13$: $a^{12} \\equiv 1 \\pmod{13}$ untuk $\\gcd(a, 13) = 1$.',
          solution:
            'Berdasarkan Teorema Fermat Kecil, karena $\\gcd(2, 13) = 1$, berlaku $2^{12} \\equiv 1 \\pmod{13}$.\nBagi eksponen $2026$ dengan $12$:\n$$2026 = 12 \\times 168 + 10$$\nSehingga:\n$$2^{2026} = (2^{12})^{168} \\times 2^{10} \\equiv 1^{168} \\times 2^{10} \\equiv 2^{10} \\pmod{13}$$\nHitung $2^{10} \\pmod{13}$:\n$$2^4 = 16 \\equiv 3 \\pmod{13}$$\n$$2^8 = (2^4)^2 \\equiv 3^2 = 9 \\equiv -4 \\pmod{13}$$\n$$2^{10} = 2^8 \\times 2^2 \\equiv (-4) \\times 4 = -16 \\equiv 10 \\pmod{13}$$\nJadi, sisa pembagiannya adalah $10$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'How many positive integer divisors of the number $10^{99}$ are also multiples of $10^{88}$?\n\nA. $100$\nB. $121$\nC. $144$\nD. $169$',
          answer: 'C. $144$',
          principle: 'Count valid exponents in the prime factorization $2^a \\times 5^b$ bounded between the divisor and the multiple.',
          solution:
            'Write the prime factorizations:\n$$10^{99} = 2^{99} \\times 5^{99}, \\qquad 10^{88} = 2^{88} \\times 5^{88}$$\nAny positive divisor of $10^{99}$ that is also a multiple of $10^{88}$ must have the form $2^a \\times 5^b$ where:\n$$88 \\le a \\le 99 \\quad \\text{and} \\quad 88 \\le b \\le 99$$\nThe number of choices for $a$ is $99 - 88 + 1 = 12$, and the number of choices for $b$ is $99 - 88 + 1 = 12$.\nHence, the total number of valid divisors is:\n$$12 \\times 12 = 144$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Diketahui dua bilangan asli $a$ dan $b$ memenuhi $\\text{FPB}(a, b) = 10$ dan $\\text{KPK}(a, b) = 1000$. Jika $a < b$, berapakah banyak pasangan $(a, b)$ yang memenuhi kondisi tersebut?\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$',
          answer: 'B. $2$',
          principle: 'Nyatakan $a = dx$ dan $b = dy$ dengan $d = \\text{FPB}(a, b)$, $\\gcd(x, y) = 1$, dan $\\text{KPK}(a, b) = dxy$.',
          solution:
            'Misalkan $a = 10x$ dan $b = 10y$ dengan $\\text{FPB}(x, y) = 1$ dan $x < y$.\nMaka:\n$$\\text{KPK}(a, b) = 10xy = 1000 \\implies xy = 100$$\nKarena $100 = 2^2 \\times 5^2$, pasangan bilangan bulat positif saling prima $(x, y)$ dengan $xy = 100$ dan $x < y$ adalah:\n$$(x, y) \\in \\{(1, 100), (4, 25)\\}$$\nOleh karena itu, terdapat tepat $2$ pasangan $(a, b)$ yang memenuhi, yaitu $(10, 1000)$ dan $(40, 250)$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'The number $341_b$ in base $b$ is a perfect square when converted to base $10$. What is the smallest possible integer value of the base $b > 4$?\n\nA. $6$\nB. $7$\nC. $8$\nD. $9$',
          answer: 'C. $8$',
          principle: 'Expand the base-$b$ numeral into a quadratic polynomial in $b$ and factor it to test perfect square values.',
          solution:
            'Convert $341_b$ to base $10$:\n$$341_b = 3b^2 + 4b + 1 = (3b + 1)(b + 1)$$\nTest integer values of $b > 4$:\n- $b = 5$: $(16)(6) = 96$ (not a square)\n- $b = 6$: $(19)(7) = 133$ (not a square)\n- $b = 7$: $(22)(8) = 176$ (not a square)\n- $b = 8$: $(25)(9) = 225 = 15^2$ (a perfect square)\nThus, the smallest valid base is $8$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Tentukan nilai maksimum dari $x + y$ yang memenuhi persamaan $3^x - 2^y = 1$ untuk bilangan bulat positif $x$ dan $y$.\n\nA. $2$\nB. $3$\nC. $5$\nD. $7$',
          answer: 'C. $5$',
          principle: 'Analisis persamaan Diophantine eksponensial $3^x - 2^y = 1$ (kasus khusus Konjektur Catalan / Teorema Mihăilescu).',
          solution:
            'Uji nilai bilangan bulat positif $x$ dan $y$:\n- Jika $x = 1$: $3^1 - 2^y = 1 \\implies 2^y = 2 \\implies y = 1$, sehingga $x + y = 2$.\n- Jika $x = 2$: $3^2 - 2^y = 1 \\implies 2^y = 8 \\implies y = 3$, sehingga $x + y = 5$.\nUntuk $x \\ge 3$, perhatikan modulo $8$: jika $y \\ge 3$, maka $3^x \\equiv 1 \\pmod{8}$ menuntut $x$ genap ($x = 2k$), sehingga $(3^k - 1)(3^k + 1) = 2^y$. Dua bilangan genap berjarak $2$ yang keduanya merupakan pangkat $2$ hanyalah $2$ dan $4$ ($3^k = 3 \\implies k = 1, x = 2$).\nJadi tidak ada solusi bulat positif lain, dan nilai maksimum $x + y$ adalah $5$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Let $\\lfloor x \\rfloor$ denote the greatest integer less than or equal to $x$ (the floor function). Evaluate the sum:\n$$\\lfloor \\sqrt{1} \\rfloor + \\lfloor \\sqrt{2} \\rfloor + \\lfloor \\sqrt{3} \\rfloor + \\dots + \\lfloor \\sqrt{24} \\rfloor$$\n\nA. $60$\nB. $65$\nC. $70$\nD. $75$',
          answer: 'C. $70$',
          principle: 'Group consecutive integers between consecutive perfect squares $k^2 \\le n < (k + 1)^2$, where $\\lfloor \\sqrt{n} \\rfloor = k$.',
          solution:
            'Group the terms according to their constant floor value:\n- $\\lfloor \\sqrt{n} \\rfloor = 1$ for $1 \\le n \\le 3$ ($3$ terms): $3 \\times 1 = 3$\n- $\\lfloor \\sqrt{n} \\rfloor = 2$ for $4 \\le n \\le 8$ ($5$ terms): $5 \\times 2 = 10$\n- $\\lfloor \\sqrt{n} \\rfloor = 3$ for $9 \\le n \\le 15$ ($7$ terms): $7 \\times 3 = 21$\n- $\\lfloor \\sqrt{n} \\rfloor = 4$ for $16 \\le n \\le 24$ ($9$ terms): $9 \\times 4 = 36$\nTotal sum:\n$$3 + 10 + 21 + 36 = 70$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Berapakah sisa pembagian bilangan $16!$ ($16$ faktorial) oleh $19$?\n\nA. $1$\nB. $9$\nC. $17$\nD. $18$',
          answer: 'B. $9$',
          principle: 'Teorema Wilson: untuk bilangan prima $p$, $(p - 1)! \\equiv -1 \\pmod{p}$.',
          solution:
            'Berdasarkan Teorema Wilson untuk $p = 19$:\n$$18! \\equiv -1 \\equiv 18 \\pmod{19}$$\nUraikan $18! = 18 \\times 17 \\times 16!$. Karena $18 \\equiv -1 \\pmod{19}$ dan $17 \\equiv -2 \\pmod{19}$:\n$$(-1) \\times (-2) \\times 16! \\equiv 18 \\pmod{19}$$\n$$2 \\times 16! \\equiv 18 \\pmod{19}$$\nKarena $\\gcd(2, 19) = 1$, kedua ruas dapat dibagi $2$:\n$$16! \\equiv 9 \\pmod{19}$$\nJadi, sisa pembagiannya adalah $9$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Let $x = 0.123123123\\dots$ and $y = 0.321321321\\dots$ be repeating decimals. What is the value of $x + y$ expressed as a fraction in its simplest form?\n\nA. $\\frac{1}{3}$\nB. $\\frac{4}{9}$\nC. $\\frac{5}{9}$\nD. $\\frac{1}{2}$',
          answer: 'B. $\\frac{4}{9}$',
          principle: 'Sum aligned repeating decimal digits or convert repeating blocks $0.\\overline{d_1 d_2 \\dots d_k} = \\frac{d_1 d_2 \\dots d_k}{10^k - 1}$.',
          solution:
            'Add the two repeating decimals digit by digit:\n$$x + y = 0.123123123\\dots + 0.321321321\\dots = 0.444444\\dots$$\nConvert the repeating decimal $0.\\overline{4}$ to a fraction:\n$$0.444444\\dots = \\frac{4}{9}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Diketahui $p$ dan $p^2 + 2$ keduanya adalah bilangan prima positif. Berapakah nilai dari $p^3 + 2$?\n\nA. $11$\nB. $29$\nC. $127$\nD. $218$',
          answer: 'B. $29$',
          principle: 'Analisis residu kuadratik modulo $3$: setiap bilangan prima $p \\neq 3$ memenuhi $p^2 \\equiv 1 \\pmod{3}$.',
          solution:
            'Tinjau nilai $p$ modulo $3$:\n- Jika $p = 3$, maka $p^2 + 2 = 3^2 + 2 = 11$, yang juga merupakan bilangan prima.\n- Jika $p \\neq 3$, maka $p$ tidak habis dibagi $3$, sehingga $p \\equiv 1$ atau $2 \\pmod{3}$. Akibatnya $p^2 \\equiv 1 \\pmod{3}$, dan:\n$$p^2 + 2 \\equiv 1 + 2 = 3 \\equiv 0 \\pmod{3}$$\nKarena $p^2 + 2 > 3$ dan habis dibagi $3$, maka $p^2 + 2$ bukan bilangan prima.\nJadi satu-satunya nilai yang memenuhi adalah $p = 3$, sehingga:\n$$p^3 + 2 = 3^3 + 2 = 27 + 2 = 29$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Find the exponent of the highest power of $12$ that completely divides $300!$ ($300$ factorial).\n\nA. $147$\nB. $148$\nC. $296$\nD. $300$',
          answer: 'B. $148$',
          principle: 'Use Legendre’s formula to find $v_2(n!)$ and $v_3(n!)$, then take $\\min\\left(\\lfloor v_2(n!)/2 \\rfloor, v_3(n!)\\right)$ for $12 = 2^2 \\times 3$.',
          solution:
            'Factorize $12 = 2^2 \\times 3$. Compute the exponent of $2$ in $300!$ using Legendre’s formula:\n$$v_2(300!) = \\left\\lfloor \\frac{300}{2} \\right\\rfloor + \\left\\lfloor \\frac{300}{4} \\right\\rfloor + \\dots + \\left\\lfloor \\frac{300}{256} \\right\\rfloor = 150 + 75 + 37 + 18 + 9 + 4 + 2 + 1 = 296$$\nThus the exponent of $4 = 2^2$ is $\\lfloor 296 / 2 \\rfloor = 148$.\nCompute the exponent of $3$ in $300!$:\n$$v_3(300!) = 100 + 33 + 11 + 3 + 1 = 148$$\nThe highest power of $12$ dividing $300!$ is $\\min(148, 148) = 148$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Ada berapa banyak penyelesaian (pasangan bilangan bulat positif $x, y$) dari Persamaan Diophantine linier $3x + 7y = 200$?\n\nA. $8$\nB. $9$\nC. $10$\nD. $11$',
          answer: 'B. $9$',
          principle: 'Selesaikan persamaan Diophantine linier $ax + by = c$ menggunakan kongruensi modulo $a$ dan batas $x, y \\ge 1$.',
          solution:
            'Tuliskan $3x = 200 - 7y$. Karena $x \\ge 1$, maka $7y \\le 197 \\implies y \\le 28$.\nAgar $x$ bilangan bulat, $200 - 7y$ harus habis dibagi $3$:\n$$200 - 7y \\equiv 0 \\pmod{3} \\implies 2 - y \\equiv 0 \\pmod{3} \\implies y \\equiv 2 \\pmod{3}$$\nNilai bilangan bulat positif $y \\le 28$ yang memenuhi $y \\equiv 2 \\pmod{3}$ adalah:\n$$2, 5, 8, 11, 14, 17, 20, 23, 26$$\nBanyaknya nilai $y$ yang memenuhi adalah $\\frac{26 - 2}{3} + 1 = 9$, sehingga terdapat $9$ pasangan penyelesaian $(x, y)$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Euler\'s totient function, $\\varphi(n)$, counts the positive integers up to a given integer $n$ that are relatively prime to $n$. Calculate $\\varphi(2025)$.\n\nA. $1000$\nB. $1050$\nC. $1080$\nD. $1200$',
          answer: 'C. $1080$',
          principle: 'Compute Euler’s totient function from prime factorization: $\\varphi(n) = n \\prod_{p \\mid n} \\left(1 - \\frac{1}{p}\\right)$.',
          solution:
            'First, find the prime factorization of $2025$:\n$$2025 = 25 \\times 81 = 3^4 \\times 5^2$$\nApply Euler’s totient product formula:\n$$\\varphi(2025) = 2025 \\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{5}\\right) = 2025 \\times \\frac{2}{3} \\times \\frac{4}{5} = 2025 \\times \\frac{8}{15} = 135 \\times 8 = 1080$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Berapakah nilai eksak dari penjumlahan bentuk akar $\\sqrt{11 - 2\\sqrt{30}} + \\sqrt{11 + 2\\sqrt{30}}$?\n\nA. $2\\sqrt{5}$\nB. $2\\sqrt{6}$\nC. $\\sqrt{30}$\nD. $2\\sqrt{11}$',
          answer: 'B. $2\\sqrt{6}$',
          principle: 'Penyederhanaan akar rangkap: $\\sqrt{(a + b) \\pm 2\\sqrt{ab}} = \\sqrt{a} \\pm \\sqrt{b}$ untuk $a > b > 0$.',
          solution:
            'Cari dua bilangan yang jumlahnya $11$ dan hasil kalinya $30$, yaitu $6$ dan $5$.\nMaka:\n$$\\sqrt{11 - 2\\sqrt{30}} = \\sqrt{(\\sqrt{6} - \\sqrt{5})^2} = \\sqrt{6} - \\sqrt{5}$$\n$$\\sqrt{11 + 2\\sqrt{30}} = \\sqrt{(\\sqrt{6} + \\sqrt{5})^2} = \\sqrt{6} + \\sqrt{5}$$\nJumlahkan kedua bentuk tersebut:\n$$(\\sqrt{6} - \\sqrt{5}) + (\\sqrt{6} + \\sqrt{5}) = 2\\sqrt{6}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'A positive integer leaves a remainder of $2$ when divided by $5$, a remainder of $3$ when divided by $7$, and a remainder of $4$ when divided by $11$. What is the smallest possible value for this integer?\n\nA. $357$\nB. $367$\nC. $377$\nD. $387$',
          answer: 'B. $367$',
          principle: 'Solve a system of linear congruences with pairwise coprime moduli using successive substitution (Chinese Remainder Theorem).',
          solution:
            'Let the integer be $x$. We have:\n$$x \\equiv 2 \\pmod{5}, \\qquad x \\equiv 3 \\pmod{7}, \\qquad x \\equiv 4 \\pmod{11}$$\nFrom $x \\equiv 2 \\pmod{5}$, write $x = 5k + 2$. Substitute into the second congruence:\n$$5k + 2 \\equiv 3 \\pmod{7} \\implies 5k \\equiv 1 \\equiv 15 \\pmod{7} \\implies k \\equiv 3 \\pmod{7}$$\nWrite $k = 7m + 3$, so $x = 5(7m + 3) + 2 = 35m + 17$. Substitute into the third congruence:\n$$35m + 17 \\equiv 4 \\pmod{11} \\implies 2m + 6 \\equiv 4 \\pmod{11} \\implies 2m \\equiv -2 \\pmod{11} \\implies m \\equiv 10 \\pmod{11}$$\nTaking the smallest non-negative $m = 10$ gives:\n$$x = 35(10) + 17 = 367$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Diketahui Faktor Persekutuan Terbesar (FPB) dari dua bilangan asli $m$ dan $n$ adalah $12$, serta $m \\times n = 21600$. Berapakah nilai terkecil yang mungkin untuk $m + n$?\n\nA. $348$\nB. $372$\nC. $408$\nD. $432$',
          answer: 'B. $372$',
          principle: 'Misalkan $m = 12x$ dan $n = 12y$ dengan $\\gcd(x, y) = 1$, lalu minimumkan $x + y$ untuk hasil kali $xy$ yang tetap.',
          solution:
            'Misalkan $m = 12x$ dan $n = 12y$ dengan $\\text{FPB}(x, y) = 1$.\nDari $m \\times n = 21600$, diperoleh:\n$$144xy = 21600 \\implies xy = 150 = 2 \\times 3 \\times 5^2$$\nPasangan bilangan saling prima $(x, y)$ yang hasil kalinya $150$ beserta jumlahnya:\n- $(1, 150) \\implies x + y = 151$\n- $(2, 75) \\implies x + y = 77$\n- $(3, 50) \\implies x + y = 53$\n- $(6, 25) \\implies x + y = 31$\nNilai $x + y$ terkecil adalah $31$, sehingga nilai minimum $m + n$ adalah:\n$$m + n = 12(x + y) = 12 \\times 31 = 372$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'What is the remainder when the number $5^{2026}$ is divided by $14$?\n\nA. $1$\nB. $5$\nC. $9$\nD. $11$',
          answer: 'C. $9$',
          principle: 'Euler’s theorem: since $\\gcd(a, m) = 1$, $a^{\\varphi(m)} \\equiv 1 \\pmod{m}$.',
          solution:
            'Since $\\gcd(5, 14) = 1$, compute $\\varphi(14) = \\varphi(2)\\varphi(7) = 1 \\times 6 = 6$. By Euler’s theorem:\n$$5^6 \\equiv 1 \\pmod{14}$$\nDivide the exponent $2026$ by $6$:\n$$2026 = 6 \\times 337 + 4$$\nThus:\n$$5^{2026} = (5^6)^{337} \\times 5^4 \\equiv 5^4 \\pmod{14}$$\nCompute $5^4 \\pmod{14}$:\n$$5^2 = 25 \\equiv -3 \\pmod{14} \\implies 5^4 \\equiv (-3)^2 = 9 \\pmod{14}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Berapakah angka satuan (digit terakhir) dari ekspresi perpangkatan $2^{(3^{(4^5)})}$?\n\nA. $2$\nB. $4$\nC. $6$\nD. $8$',
          answer: 'A. $2$',
          principle: 'Siklus angka satuan perpangkatan $2^k$ berulang setiap $4$, sehingga eksponen $k$ cukup ditinjau modulo $4$.',
          solution:
            'Pola angka satuan pangkat $2$ berulang setiap $4$ siklus: $2, 4, 8, 6$.\nTinjau eksponennya, yaitu $3^{(4^5)}$, modulo $4$:\nKarena $3 \\equiv -1 \\pmod{4}$ dan $4^5$ adalah bilangan genap, maka:\n$$3^{(4^5)} \\equiv (-1)^{4^5} = 1 \\pmod{4}$$\nKarena eksponennya bersisa $1$ saat dibagi $4$, angka satuan dari $2^{(3^{(4^5)})}$ sama dengan angka satuan dari $2^1$, yaitu $2$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'If calculated, how many digits are there in the decimal representation of the number $4^{16} \\times 5^{25}$?\n\nA. $27$\nB. $28$\nC. $29$\nD. $30$',
          answer: 'B. $28$',
          principle: 'Rewrite bases as powers of $2$ and $5$ to pair factors into $10^k$, separating leading significant digits from trailing zeros.',
          solution:
            'Combine factors of $2$ and $5$ to form powers of $10$:\n$$4^{16} \\times 5^{25} = (2^2)^{16} \\times 5^{25} = 2^{32} \\times 5^{25} = 2^7 \\times (2^{25} \\times 5^{25}) = 128 \\times 10^{25}$$\nThe integer $128$ has $3$ digits, followed by $25$ zeros.\nTherefore, the total number of digits is:\n$$3 + 25 = 28$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Diketahui bilangan bulat $A = 123456789$ dan $B = 987654321$. Jika bilangan $C$ dibentuk dengan menempelkan digit-digit $B$ tepat di belakang $A$ (sehingga $C = 123456789987654321$), berapakah sisa pembagian $C$ oleh $11$?\n\nA. $0$\nB. $1$\nC. $9$\nD. $10$',
          answer: 'A. $0$',
          principle: 'Uji keterbagian $11$: sisa pembagian oleh $11$ sama dengan jumlah bergantian digit-digitnya dari kanan ke kiri modulo $11$.',
          solution:
            'Jumlah bergantian digit-digit $C = 123456789987654321$ (dari kanan ke kiri atau kiri ke kanan dengan tanda berlawanan) adalah:\n$$(1 - 2 + 3 - 4 + 5 - 6 + 7 - 8 + 9) - (9 - 8 + 7 - 6 + 5 - 4 + 3 - 2 + 1)$$\nKarena $C$ merupakan palindrom berjumlah digit genap ($18$ digit), setiap pasangan digit yang bersesuaian saling meniadakan:\n$$5 - 5 = 0$$\nJadi $C$ habis dibagi $11$, dan sisa pembagiannya adalah $0$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'The fraction $\\frac{7}{15}$ in base $10$ is expressed as a repeating binary decimal $0.a_1a_2a_3\\dots$ in base $2$. What is the repeating part of this binary fraction?\n\nA. $0011$\nB. $0101$\nC. $0111$\nD. $1111$',
          answer: 'C. $0111$',
          principle: 'Any fraction $\\frac{x}{2^n - 1}$ with $0 < x < 2^n - 1$ repeats with period $n$ in base $2$, given by the $n$-bit binary form of $x$.',
          solution:
            'Notice that $15 = 2^4 - 1$, so we can write:\n$$\\frac{7}{15} = \\frac{7}{2^4 - 1} = \\frac{7}{16} + \\frac{7}{16^2} + \\frac{7}{16^3} + \\dots$$\nIn base $2$, the $4$-bit binary representation of $7$ is $0111_2$. Thus:\n$$\\frac{7}{15} = 0.011101110111\\dots_2$$\nThe repeating block is $0111$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Isian Singkat',
      marks: 10,
      stem: 'Isilah jawaban akhir yang paling tepat dan singkat untuk setiap soal berikut (10 soal, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Kelipatan Persekutuan Terkecil (KPK) dari dua bilangan asli (bulat positif) yang berbeda, yaitu $a$ dan $b$, adalah $2024$. Berapa nilai maksimum yang mungkin untuk jumlah $a + b$?',
          answer: '$3036$',
          answerNumeric: [{ name: 'nilai', value: 3036, unit: '' }],
          principle: 'Jika $\\text{KPK}(a, b) = L$, maka $a$ dan $b$ haruslah pembagi dari $L$; untuk memaksimumkan $a + b$ dengan $a \\neq b$, pilih dua pembagi terbesar yang berbeda.',
          solution:
            'Karena $\\text{KPK}(a, b) = 2024$, maka $a$ dan $b$ keduanya membagi $2024$.\nAgar $a + b$ maksimum dengan syarat $a \\neq b$, pilih pembagi terbesar dan pembagi terbesar kedua dari $2024$:\n- Pembagi terbesar: $2024$\n- Pembagi terbesar kedua: $\\frac{2024}{2} = 1012$\nPeriksa bahwa $\\text{KPK}(2024, 1012) = 2024$.\nMaka jumlah maksimumnya adalah:\n$$2024 + 1012 = 3036$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt: 'Find the last two digits of the number $9^{(9^9)}$.',
          answer: '$89$',
          answerNumeric: [{ name: 'lastTwoDigits', value: 89, unit: '' }],
          principle: 'Reduce the exponent modulo $\\varphi(100) = 40$ using Euler’s theorem, then evaluate modulo $100$ via binomial expansion.',
          solution:
            'We need $9^{(9^9)} \\pmod{100}$. Since $\\gcd(9, 100) = 1$ and $\\varphi(100) = 40$, Euler’s theorem gives $9^{40} \\equiv 1 \\pmod{100}$.\nFirst, reduce the exponent $9^9$ modulo $40$:\n$$9^9 = 3^{18}$$\nSince $3^4 = 81 \\equiv 1 \\pmod{40}$:\n$$3^{18} = (3^4)^4 \\times 3^2 \\equiv 1^4 \\times 9 = 9 \\pmod{40}$$\nNow compute $9^9 \\pmod{100}$ using the binomial expansion of $(10 - 1)^9$:\n$$(10 - 1)^9 \\equiv \\binom{9}{1}(10)(-1)^8 + (-1)^9 = 90 - 1 = 89 \\pmod{100}$$\nThus, the last two digits are $89$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Jika bilangan desimal (basis $10$) $x = 123$ dituliskan ke dalam sistem bilangan basis $3$, berapakah jumlah seluruh digit dari representasi basis $3$ tersebut?',
          answer: '$5$',
          answerNumeric: [{ name: 'jumlahDigit', value: 5, unit: '' }],
          principle: 'Konversi bilangan desimal ke basis $3$ melalui pembagian berulang dengan $3$ dan pengumpulan sisa pembagian.',
          solution:
            'Lakukan pembagian berulang $123$ oleh $3$:\n- $123 = 3 \\times 41 + 0$\n- $41 = 3 \\times 13 + 2$\n- $13 = 3 \\times 4 + 1$\n- $4 = 3 \\times 1 + 1$\n- $1 = 3 \\times 0 + 1$\nMembaca sisa dari bawah ke atas, diperoleh $123_{10} = 11120_3$.\nJumlah seluruh digitnya adalah:\n$$1 + 1 + 1 + 2 + 0 = 5$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'If the product of three distinct prime numbers is exactly equal to $5$ times their sum, what is the product of these three primes?',
          answer: '$70$',
          answerNumeric: [{ name: 'product', value: 70, unit: '' }],
          principle: 'Use prime divisibility to identify one prime factor, then apply Simon’s Favorite Factoring Trick to the remaining two.',
          solution:
            'Let the three distinct primes be $p, q, r$ such that:\n$$pqr = 5(p + q + r)$$\nSince $5$ divides $pqr$ and $p, q, r$ are prime, one of them must be $5$. Without loss of generality, let $p = 5$:\n$$5qr = 5(5 + q + r) \\implies qr = 5 + q + r$$\nRearrange and add $1$ to both sides to factor:\n$$qr - q - r + 1 = 6 \\implies (q - 1)(r - 1) = 6$$\nFor positive factor pairs of $6$ with $q < r$:\n- $(q - 1, r - 1) = (1, 6) \\implies (q, r) = (2, 7)$ (both prime, valid)\n- $(q - 1, r - 1) = (2, 3) \\implies (q, r) = (3, 4)$ ($4$ is not prime, invalid)\nHence the three primes are $2, 5, 7$, and their product is:\n$$2 \\times 5 \\times 7 = 70$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Berapakah eksponen dari pangkat tertinggi bilangan $7$ yang membagi habis $1000!$ ($1000$ faktorial)?',
          answer: '$164$',
          answerNumeric: [{ name: 'eksponen', value: 164, unit: '' }],
          principle: 'Rumus Legendre untuk pangkat prima $p$ pada $n!$: $v_p(n!) = \\sum_{k \\ge 1} \\left\\lfloor \\frac{n}{p^k} \\right\\rfloor$.',
          solution:
            'Gunakan rumus Legendre dengan pembagian berulang oleh $7$:\n$$\\left\\lfloor \\frac{1000}{7} \\right\\rfloor = 142$$\n$$\\left\\lfloor \\frac{142}{7} \\right\\rfloor = 20$$\n$$\\left\\lfloor \\frac{20}{7} \\right\\rfloor = 2$$\nJumlahkan seluruh hasil bagi bulat tersebut:\n$$142 + 20 + 2 = 164$$\nJadi, eksponen pangkat tertinggi $7$ yang membagi habis $1000!$ adalah $164$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'What is the smallest positive integer $x$ such that $3x \\equiv 1 \\pmod{11}$ and $4x \\equiv 1 \\pmod{13}$?',
          answer: '$114$',
          answerNumeric: [{ name: 'x', value: 114, unit: '' }],
          principle: 'Invert the coefficients in each modular congruence, then combine the congruences by substitution.',
          solution:
            'Solve each congruence individually:\n$$3x \\equiv 1 \\equiv 12 \\pmod{11} \\implies x \\equiv 4 \\pmod{11}$$\n$$4x \\equiv 1 \\equiv 40 \\pmod{13} \\implies x \\equiv 10 \\pmod{13}$$\nFrom the first congruence, write $x = 11k + 4$ and substitute into the second:\n$$11k + 4 \\equiv 10 \\pmod{13} \\implies -2k \\equiv 6 \\pmod{13} \\implies k \\equiv -3 \\equiv 10 \\pmod{13}$$\nThe smallest non-negative integer $k$ is $10$, giving:\n$$x = 11(10) + 4 = 114$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt: 'Berapakah sisa pembagian bilangan bulat $(2^{32} + 1)$ jika dibagi oleh $(2^{16} + 1)$?',
          answer: '$2$',
          answerNumeric: [{ name: 'sisa', value: 2, unit: '' }],
          principle: 'Substitusi aljabar dan Teorema Sisa Polinomial: sisa pembagian $f(u)$ oleh $(u + 1)$ adalah $f(-1)$.',
          solution:
            'Misalkan $u = 2^{16}$, sehingga $2^{32} + 1 = u^2 + 1$ dan pembaginya adalah $u + 1$.\nTuliskan:\n$$u^2 + 1 = (u^2 - 1) + 2 = (u + 1)(u - 1) + 2$$\nKarena $0 \\le 2 < 2^{16} + 1$, maka sisa pembagian $(2^{32} + 1)$ oleh $(2^{16} + 1)$ adalah $2$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Find the number of ordered pairs of positive integers $(x, y)$ satisfying the equation $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{10}$.',
          answer: '$9$',
          answerNumeric: [{ name: 'pairs', value: 9, unit: '' }],
          principle: 'Clear denominators and factor into $(x - n)(y - n) = n^2$, then count positive divisors of $n^2$.',
          solution:
            'Multiply both sides by $10xy$:\n$$10y + 10x = xy \\implies xy - 10x - 10y = 0$$\nAdd $100$ to both sides to factor:\n$$(x - 10)(y - 10) = 100$$\nFor positive integers $x, y$, if $x - 10 = -d$ for a positive divisor $d \\mid 100$, then $x > 0$ requires $d < 10$, which implies $100/d > 10$ and $y = 10 - 100/d < 0$. Thus negative divisors never yield positive $(x, y)$, while every positive divisor of $100$ gives a valid positive pair $(x, y)$.\nSince $100 = 2^2 \\times 5^2$, the number of positive divisors is:\n$$(2 + 1)(2 + 1) = 9$$\nHence there are $9$ ordered pairs.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Hitunglah jumlah dari semua bilangan bulat positif yang kurang dari $100$ dan saling prima (coprime) dengan $100$.',
          answer: '$2000$',
          answerNumeric: [{ name: 'jumlah', value: 2000, unit: '' }],
          principle: 'Untuk $n > 1$, jumlah semua bilangan bulat positif kurang dari $n$ yang saling prima dengan $n$ adalah $\\frac{1}{2} n \\cdot \\varphi(n)$.',
          solution:
            'Karena $\\gcd(k, n) = 1 \\iff \\gcd(n - k, n) = 1$, bilangan yang saling prima dengan $n$ dapat dipasangkan menjadi $(k, n - k)$ dengan jumlah tiap pasang $n$.\nHitung $\\varphi(100)$ dengan $100 = 2^2 \\times 5^2$:\n$$\\varphi(100) = 100 \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{5}\\right) = 100 \\times \\frac{1}{2} \\times \\frac{4}{5} = 40$$\nMaka jumlah seluruh bilangan yang dimaksud adalah:\n$$\\frac{1}{2} \\times 100 \\times \\varphi(100) = \\frac{1}{2} \\times 100 \\times 40 = 2000$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Let $d(n)$ denote the number of positive divisors of the integer $n$. Find the smallest positive integer $n$ such that $d(n) = 15$.',
          answer: '$144$',
          answerNumeric: [{ name: 'n', value: 144, unit: '' }],
          principle: 'Use the divisor-count formula $d\\left(\\prod p_i^{e_i}\\right) = \\prod (e_i + 1)$ and assign the largest exponents to the smallest primes.',
          solution:
            'Since $d(n) = 15$ and $15$ factors either as $15$ or $5 \\times 3$, the prime factorization of $n$ takes the form $p^{14}$ or $p^4 q^2$ for distinct primes $p, q$.\nTo minimize $n$, assign the smallest primes ($2$ and $3$) to the largest exponents:\n- Form $p^{14}$: $2^{14} = 16384$\n- Form $p^4 q^2$: $2^4 \\times 3^2 = 16 \\times 9 = 144$\nComparing the two candidates, the smallest positive integer is $144$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
