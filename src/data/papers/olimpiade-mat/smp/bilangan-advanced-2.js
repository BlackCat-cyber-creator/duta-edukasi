/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SMP Kelas 7–8 – Advanced 2
 * Sumber: Duta e-dukasi (BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7–8 – ADVANCED 2.pdf).
 * Bahasa dipertahankan sesuai naskah sumber untuk tiap butir soal.
 */
export default {
  id: 'olim-smp-bilangan-adv2',
  slug: 'bilangan-smp-advanced-2',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'olympiad-pro',
  topic: 'Bilangan Olimpiade SMP Kelas 7–8 (Advanced 2)',
  relatedChapterIds: ['smp7-bab1-bilangan-bulat', 'smp8-bab1-bilangan-berpangkat'],
  lang: 'id',
  langDisplay: 'ID / EN',
  competition: 'Seri Pembinaan OSN',
  title: 'Bilangan Olimpiade Matematika SMP Kelas 7–8 – Advanced 2',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 20 soal Pilihan Ganda (Bagian A) dan 10 soal Isian Singkat (Bagian B) dengan teliti. Pertahankan bahasa masing-masing soal sesuai naskah asli.',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7\u20138 \u2013 ADVANCED 2.pdf',
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
            'Berapakah sisa pembagian bilangan $2026^{2026}$ jika dibagi oleh $7$?\n\nA. $1$\nB. $2$\nC. $4$\nD. $6$',
          answer: 'C. $4$',
          principle: 'Aritmetika modular dan Teorema Fermat Kecil: $a^6 \\equiv 1 \\pmod{7}$ untuk $7 \\nmid a$.',
          solution:
            'Pertama, cari sisa $2026$ modulo $7$:\n$$2026 = 7 \\times 289 + 3 \\implies 2026 \\equiv 3 \\pmod{7}$$\nSehingga $2026^{2026} \\equiv 3^{2026} \\pmod{7}$. Menurut Teorema Fermat Kecil, $3^6 \\equiv 1 \\pmod{7}$.\nBagi eksponennya dengan $6$:\n$$2026 = 6 \\times 337 + 4$$\nMaka:\n$$3^{2026} = (3^6)^{337} \\times 3^4 \\equiv 1^{337} \\times 81 \\equiv 4 \\pmod{7}$$\nJadi, sisa pembagiannya adalah $4$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'How many positive integer divisors of $10^6$ are perfect squares?\n\nA. $9$\nB. $16$\nC. $25$\nD. $36$',
          answer: 'B. $16$',
          principle:
            'A divisor of $p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k}$ is a perfect square if and only if every prime exponent in the divisor is even.',
          solution:
            'Write the prime factorization of $10^6$:\n$$10^6 = (2 \\times 5)^6 = 2^6 \\times 5^6$$\nAny divisor that is a perfect square has the form $2^{2a} \\times 5^{2b}$ with even exponents:\n- Allowed values for $2a$: $0, 2, 4, 6$ ($4$ choices).\n- Allowed values for $2b$: $0, 2, 4, 6$ ($4$ choices).\nTherefore, the total number of perfect square divisors is:\n$$4 \\times 4 = 16$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Berapa banyak pasangan bilangan bulat positif $(x, y)$ yang memenuhi persamaan $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{6}$?\n\nA. $5$\nB. $7$\nC. $9$\nD. $11$',
          answer: 'C. $9$',
          principle:
            "Persamaan Diophantine pecahan satuan $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{k}$ diubah menggunakan trik pemfaktoran (Simon's Favorite Factoring Trick) menjadi $(x - k)(y - k) = k^2$.",
          solution:
            'Kalikan kedua ruas persamaan dengan $6xy$:\n$$6y + 6x = xy \\implies xy - 6x - 6y = 0$$\nTambahkan $36$ ke kedua ruas untuk pemfaktoran:\n$$xy - 6x - 6y + 36 = 36 \\implies (x - 6)(y - 6) = 36$$\nKarena $x, y > 0$, maka $\\frac{1}{x} < \\frac{1}{6}$ dan $\\frac{1}{y} < \\frac{1}{6}$, yang memaksa $x > 6$ dan $y > 6$, sehingga kedua faktor $(x - 6)$ dan $(y - 6)$ harus bernilai positif (faktor negatif seperti $-1$ dan $-36$ menghasilkan $y = -30 < 0$).\nFaktorisasi prima $36 = 2^2 \\times 3^2$ memiliki $(2 + 1)(2 + 1) = 9$ pembagi positif, yaitu $1, 2, 3, 4, 6, 9, 12, 18,$ dan $36$. Setiap pilihan faktor positif $x - 6$ menghasilkan tepat satu pasangan bilangan bulat positif $(x, y)$, sehingga terdapat tepat $9$ pasangan.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'The product of two positive integers $a$ and $b$ is $19200$, and their greatest common divisor (GCD) is $40$. If neither number is a multiple of the other, what is the value of $a + b$?\n\nA. $240$\nB. $260$\nC. $280$\nD. $320$',
          answer: 'C. $280$',
          principle:
            'Express two integers with $\\gcd(a, b) = d$ as $a = dx$ and $b = dy$ where $\\gcd(x, y) = 1$.',
          solution:
            'Let $a = 40x$ and $b = 40y$ with $\\gcd(x, y) = 1$. Using their product:\n$$(40x)(40y) = 19200 \\implies 1600xy = 19200 \\implies xy = 12$$\nThe pairs of coprime positive integers multiplying to $12$ are $(1, 12)$ and $(3, 4)$ (up to order):\n- The pair $(1, 12)$ gives $40$ and $480$, where $480$ is a multiple of $40$, violating the condition.\n- The pair $(3, 4)$ gives $a = 40 \\times 3 = 120$ and $b = 40 \\times 4 = 160$ (neither is a multiple of the other).\nThus, the sum is:\n$$a + b = 120 + 160 = 280$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Sebuah bilangan tiga digit $ABC$ dalam basis $10$ bernilai tepat sama dengan bilangan $CBA$ jika dituliskan dalam basis $9$. Berapakah nilai dari $A + B + C$?\n\nA. $11$\nB. $13$\nC. $15$\nD. $17$',
          answer: 'B. $13$',
          principle:
            'Konversi representasi bilangan basis $b$ menjadi polinomial nilai tempat, batasan digit basis ($0 \\le d < b$), serta reduksi aritmetika modular.',
          solution:
            'Nyatakan nilai masing-masing bilangan dalam basis $10$:\n$$ABC_{10} = 100A + 10B + C$$\n$$CBA_9 = 81C + 9B + A$$\nSamakan kedua ekspresi:\n$$100A + 10B + C = 81C + 9B + A \\implies 99A + B = 80C$$\nKarena $A, B, C$ adalah digit basis $9$ dengan digit terdepan $A, C \\neq 0$, maka $1 \\le A, C \\le 8$ dan $0 \\le B \\le 8$. Reduksi persamaan modulo $9$ (perhatikan $99 \\equiv 0 \\pmod{9}$ dan $80 \\equiv -1 \\pmod{9}$):\n$$B \\equiv -C \\pmod{9} \\implies B + C \\equiv 0 \\pmod{9}$$\nKarena $1 \\le B + C \\le 8 + 8 = 16$, satu-satunya kelipatan $9$ yang mungkin adalah $B + C = 9$, sehingga $B = 9 - C$. Substitusikan ke persamaan awal:\n$$99A + (9 - C) = 80C \\implies 99A + 9 = 81C \\implies 11A + 1 = 9C$$\nReduksi kembali persamaan $11A + 1 = 9C$ modulo $9$:\n$$2A + 1 \\equiv 0 \\pmod{9} \\implies 2A \\equiv 8 \\pmod{9} \\implies A \\equiv 4 \\pmod{9}$$\nKarena $1 \\le A \\le 8$, diperoleh nilai tunggal $A = 4$. Substitusi $A = 4$ memberikan $9C = 11(4) + 1 = 45 \\implies C = 5$, dan $B = 9 - 5 = 4$.\nJadi, $A + B + C = 4 + 4 + 5 = 13$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'What is the smallest positive integer $n$ such that $2^n \\equiv 1 \\pmod{17}$?\n\nA. $4$\nB. $6$\nC. $8$\nD. $16$',
          answer: 'C. $8$',
          principle:
            "By Fermat's Little Theorem, the multiplicative order of $a$ modulo prime $p$ divides $p - 1$.",
          solution:
            "Since $17$ is prime, Fermat's Little Theorem gives $2^{16} \\equiv 1 \\pmod{17}$. Therefore, the smallest positive integer $n$ (the order of $2$ modulo $17$) must be a divisor of $16$: $1, 2, 4, 8,$ or $16$.\nTest the divisors in increasing order:\n- $2^1 = 2 \\not\\equiv 1 \\pmod{17}$\n- $2^2 = 4 \\not\\equiv 1 \\pmod{17}$\n- $2^4 = 16 \\equiv -1 \\pmod{17}$\n- $2^8 = (2^4)^2 \\equiv (-1)^2 = 1 \\pmod{17}$\nThus, the smallest positive integer is $n = 8$.",
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Berapa banyak angka nol berturut-turut yang terdapat di bagian paling akhir dari hasil perhitungan $125!$ ($125$ faktorial)?\n\nA. $25$\nB. $31$\nC. $32$\nD. $36$',
          answer: 'B. $31$',
          principle:
            'Banyaknya angka nol di akhir $N!$ ditentukan oleh pangkat tertinggi faktor prima $5$ menggunakan rumus Legendre: $\\sum_{k \\ge 1} \\lfloor N / 5^k \\rfloor$.',
          solution:
            'Banyaknya angka nol di akhir $125!$ sama dengan pangkat tertinggi dari $10 = 2 \\times 5$ yang membagi $125!$. Karena faktor prima $2$ selalu jauh lebih banyak daripada $5$ (sudah ada $\\lfloor 125/2 \\rfloor = 62$ kelipatan $2$), jumlah angka nol ditentukan oleh banyaknya faktor prima $5$.\nDengan rumus Legendre, setiap kelipatan $5$ menyumbang minimal satu faktor $5$, setiap kelipatan $25 = 5^2$ menyumbang satu faktor tambahan, dan $125 = 5^3$ menyumbang satu faktor tambahan lagi:\n$$v_5(125!) = \\left\\lfloor \\frac{125}{5} \\right\\rfloor + \\left\\lfloor \\frac{125}{25} \\right\\rfloor + \\left\\lfloor \\frac{125}{125} \\right\\rfloor = 25 + 5 + 1 = 31$$\nJadi, terdapat $31$ angka nol berturut-turut di bagian paling akhir.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'For how many pairs of positive integers $(a, b)$ with $a \\le b$ is it true that $\\gcd(a, b) = 15$ and $\\operatorname{lcm}(a, b) = 3150$?\n\nA. $4$\nB. $6$\nC. $8$\nD. $16$',
          answer: 'C. $8$',
          principle:
            'Use $a = dx$, $b = dy$ with $\\gcd(x, y) = 1$, giving $\\operatorname{lcm}(a, b) = dxy$, and count unordered coprime factorizations.',
          solution:
            'Let $a = 15x$ and $b = 15y$ with $\\gcd(x, y) = 1$. Then $\\operatorname{lcm}(a, b) = 15xy = 3150$, so:\n$$xy = \\frac{3150}{15} = 210$$\nFactor $210$ into primes:\n$$210 = 2 \\times 3 \\times 5 \\times 7$$\nSince $\\gcd(x, y) = 1$, each of the $4$ distinct prime factors must be assigned entirely to either $x$ or $y$, yielding $2^4 = 16$ ordered pairs $(x, y)$. Because $a \\le b$ requires $x \\le y$ (and $x \\neq y$ since $xy = 210 > 1$), we halve the count to remove symmetric duplicates:\n$$\\frac{16}{2} = 8\\text{ pairs}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Jika suatu bilangan positif $n$ dinyatakan sebagai $p^2 \\times q^3$ di mana $p$ dan $q$ adalah dua bilangan prima yang berbeda, berapakah banyak pembagi bulat positif dari $n^2$?\n\nA. $15$\nB. $35$\nC. $45$\nD. $60$',
          answer: 'B. $35$',
          principle:
            'Untuk bilangan $N = p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k}$, banyak pembagi positifnya adalah $(e_1 + 1)(e_2 + 1) \\cdots (e_k + 1)$.',
          solution:
            'Kuadratkan bilangan $n = p^2 \\times q^3$:\n$$n^2 = (p^2 q^3)^2 = p^4 q^6$$\nKarena $p$ dan $q$ bilangan prima yang berbeda, banyak pembagi bulat positif dari $n^2$ adalah:\n$$(4 + 1) \\times (6 + 1) = 5 \\times 7 = 35$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Evaluate the exact difference of the nested radicals:\n$\\sqrt{13 + 4\\sqrt{3}} - \\sqrt{13 - 4\\sqrt{3}}$.\n\nA. $1$\nB. $2$\nC. $2\\sqrt{3}$\nD. $4$',
          answer: 'B. $2$',
          principle:
            'Simplify nested radicals using the identity $\\sqrt{(a + b) \\pm 2\\sqrt{ab}} = \\sqrt{a} \\pm \\sqrt{b}$ for $a > b > 0$.',
          solution:
            'Rewrite $4\\sqrt{3}$ as $2\\sqrt{12}$, so the expression becomes:\n$$\\sqrt{13 + 2\\sqrt{12}} - \\sqrt{13 - 2\\sqrt{12}}$$\nLook for two positive numbers whose sum is $13$ and product is $12$; these are $12$ and $1$. Thus:\n$$\\sqrt{13 + 2\\sqrt{12}} = \\sqrt{12} + \\sqrt{1} = 2\\sqrt{3} + 1$$\n$$\\sqrt{13 - 2\\sqrt{12}} = \\sqrt{12} - \\sqrt{1} = 2\\sqrt{3} - 1$$\nSubtracting the two gives:\n$$(2\\sqrt{3} + 1) - (2\\sqrt{3} - 1) = 2$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Sebuah bilangan genap positif $N$ memberikan sisa $3$ jika dibagi $7$ dan memberikan sisa $4$ jika dibagi $9$. Berapakah sisa pembagian $N$ jika dibagi $63$?\n\nA. $17$\nB. $22$\nC. $29$\nD. $31$',
          answer: 'D. $31$',
          principle:
            'Sistem kongruensi linier dengan modulus relatif prima (Teorema Sisa Tiongkok / Chinese Remainder Theorem).',
          solution:
            'Dari $N \\equiv 4 \\pmod{9}$, tuliskan $N = 9k + 4$ untuk suatu bilangan bulat $k$. Substitusikan ke kongruensi pertama $N \\equiv 3 \\pmod{7}$:\n$$9k + 4 \\equiv 3 \\pmod{7} \\implies 2k + 4 \\equiv 3 \\pmod{7}$$\n$$2k \\equiv -1 \\equiv 6 \\pmod{7} \\implies k \\equiv 3 \\pmod{7}$$\nMaka $k = 7m + 3$. Substitusi kembali ke $N$:\n$$N = 9(7m + 3) + 4 = 63m + 27 + 4 = 63m + 31$$\nAgar $N$ genap positif, $m$ harus merupakan bilangan bulat positif ganjil (misalnya $m = 1 \\implies N = 94$). Namun untuk setiap $m$, berdasarkan bentuk $63m + 31$, sisa pembagian $N$ oleh $63$ selalu $31$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Let $S$ be the sum of all positive divisors of the number $120$. What is the value of $S$?\n\nA. $240$\nB. $320$\nC. $360$\nD. $480$',
          answer: 'C. $360$',
          principle:
            'Sum of divisors function $\\sigma(n) = \\prod_{i=1}^k (1 + p_i + p_i^2 + \\dots + p_i^{e_i})$ from the prime factorization $n = \\prod p_i^{e_i}$.',
          solution:
            'Find the prime factorization of $120$:\n$$120 = 2^3 \\times 3^1 \\times 5^1$$\nEvery positive divisor of $120$ has the form $2^a 3^b 5^c$ with $0 \\le a \\le 3$, $0 \\le b \\le 1$, and $0 \\le c \\le 1$. By the distributive property, expanding the product of the prime-power sums generates each divisor $2^a 3^b 5^c$ exactly once:\n$$S = (2^0 + 2^1 + 2^2 + 2^3)(3^0 + 3^1)(5^0 + 5^1)$$\n$$S = (1 + 2 + 4 + 8)(1 + 3)(1 + 5) = 15 \\times 4 \\times 6 = 360$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Berapakah nilai eksak dari deret pecahan teleskopik:\n$\\frac{1}{1 \\times 2 \\times 3} + \\frac{1}{2 \\times 3 \\times 4} + \\dots + \\frac{1}{10 \\times 11 \\times 12}$?\n\nA. $\\frac{63}{264}$\nB. $\\frac{65}{264}$\nC. $\\frac{67}{264}$\nD. $\\frac{71}{264}$',
          answer: 'B. $\\frac{65}{264}$',
          principle:
            'Dekomposisi pecahan parsial untuk deret teleskopik tiga faktor berurutan: $\\frac{1}{n(n+1)(n+2)} = \\frac{1}{2}\\left(\\frac{1}{n(n+1)} - \\frac{1}{(n+1)(n+2)}\\right)$.',
          solution:
            'Gunakan identitas dekomposisi pecahan parsial:\n$$\\frac{1}{n(n+1)(n+2)} = \\frac{1}{2}\\left(\\frac{1}{n(n+1)} - \\frac{1}{(n+1)(n+2)}\\right)$$\nDeret menjadi:\n$$\\frac{1}{2}\\left[\\left(\\frac{1}{1 \\times 2} - \\frac{1}{2 \\times 3}\\right) + \\left(\\frac{1}{2 \\times 3} - \\frac{1}{3 \\times 4}\\right) + \\dots + \\left(\\frac{1}{10 \\times 11} - \\frac{1}{11 \\times 12}\\right)\\right]$$\nSuku-suku tengah saling menghilangkan, menyisakan:\n$$\\frac{1}{2}\\left(\\frac{1}{2} - \\frac{1}{132}\\right) = \\frac{1}{2}\\left(\\frac{66 - 1}{132}\\right) = \\frac{1}{2} \\times \\frac{65}{132} = \\frac{65}{264}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'In base $x$ arithmetic, the number $132_x$ is exactly equal to the number $30_y$ in base $y$. If $x$ and $y$ are positive integers and $x < y$, what is the minimum possible value of $x + y$?\n\nA. $14$\nB. $19$\nC. $21$\nD. $24$',
          answer: 'A. $14$',
          principle:
            'Convert positional base representations into base-$10$ polynomials and enforce valid base constraints ($\\text{base} > \\text{largest digit}$).',
          solution:
            'Convert both expressions to base $10$:\n$$132_x = 1(x^2) + 3(x) + 2 = x^2 + 3x + 2 = (x + 1)(x + 2)$$\n$$30_y = 3(y) + 0 = 3y$$\nEquating both gives $(x + 1)(x + 2) = 3y$.\nBecause $132_x$ uses the digit $3$, the base $x$ must satisfy $x \\ge 4$. Testing the minimum base $x = 4$:\n$$(4 + 1)(4 + 2) = 5 \\times 6 = 30 = 3y \\implies y = 10$$\nNotice $x = 4 < y = 10$ and all digits in $30_{10}$ are valid. Since $y = \\frac{(x+1)(x+2)}{3}$ increases with $x$, the minimum possible value of $x + y$ is:\n$$4 + 10 = 14$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Faktor Persekutuan Terbesar (FPB) dari $a^3b^2c$ dan $a^2b^4c^2$ adalah $X$, sedangkan Kelipatan Persekutuan Terkecil (KPK)-nya adalah $Y$. Hasil dari $X \\times Y$ adalah...\n\nA. $a^6b^8c^2$\nB. $a^5b^6c^3$\nC. $a^5b^8c^3$\nD. $a^6b^6c^2$',
          answer: 'B. $a^5b^6c^3$',
          principle: 'Sifat dasar FPB dan KPK untuk dua suku aljabar atau bilangan: $\\text{FPB}(M, N) \\times \\text{KPK}(M, N) = M \\times N$.',
          solution:
            'Hasil kali FPB dan KPK dua ekspresi sama dengan hasil kali kedua ekspresi tersebut:\n$$X \\times Y = (a^3b^2c) \\times (a^2b^4c^2) = a^{3+2}b^{2+4}c^{1+2} = a^5b^6c^3$$\n(Secara terpisah, $X = a^2b^2c$ dan $Y = a^3b^4c^2$, yang jika dikalikan juga menghasilkan $a^5b^6c^3$).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'The $7$-digit number $3A45B6C$ is completely divisible by $99$. What is the maximum possible value of the sum $A + B + C$?\n\nA. $9$\nB. $18$\nC. $27$\nD. $36$',
          answer: 'B. $18$',
          principle:
            'Divisibility by $99 = 9 \\times 11$ requires simultaneous divisibility by $9$ (digit sum) and $11$ (alternating digit sum).',
          solution:
            'A number is divisible by $99$ if and only if it is divisible by both $9$ and $11$.\n1. Divisibility by $9$: The sum of digits must be a multiple of $9$:\n$$3 + A + 4 + 5 + B + 6 + C = 18 + A + B + C \\implies A + B + C \\equiv 0 \\pmod{9}$$\nSince $A, B, C \\in \\{0, 1, \\dots, 9\\}$, possible values for $A + B + C$ are $0, 9, 18, 27$.\n2. Divisibility by $11$: The alternating digit sum must be divisible by $11$:\n$$3 - A + 4 - 5 + B - 6 + C = -4 - A + B + C \\equiv 0 \\pmod{11} \\implies (B + C) - A \\equiv 4 \\pmod{11}$$\nCheck the largest candidate $A + B + C = 27$: this forces $A = B = C = 9$, giving $(9 + 9) - 9 = 9 \\not\\equiv 4 \\pmod{11}$ (invalid).\nCheck $A + B + C = 18$: let $S = B + C$, so $A + S = 18$ and $S - A \\equiv 4 \\pmod{11}$. Adding gives $2S \\equiv 22 \\equiv 0 \\pmod{11}$, so $S \\equiv 0 \\pmod{11}$. Since $0 \\le S \\le 18$, either $S = 0$ (which forces $A = 18 > 9$, invalid) or $S = 11$ (giving $A = 7$, valid). For example, $(A, B, C) = (7, 5, 6)$ gives $3745566 = 99 \\times 37834$.\nThus, the maximum possible value of $A + B + C$ is $18$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Angka satuan (digit paling belakang) dari hasil operasi perpangkatan bertumpuk $7^{(7^7)}$ adalah...\n\nA. $1$\nB. $3$\nC. $7$\nD. $9$',
          answer: 'B. $3$',
          principle: 'Pangkat bertingkat dievaluasi dengan mereduksi eksponen modulo panjang siklus angka satuan ($4$ untuk basis $7$).',
          solution:
            'Angka satuan pangkat dari $7$ berulang setiap $4$ siklus ($7, 9, 3, 1$). Oleh karena itu, kita perlu mencari sisa dari eksponen $7^7$ modulo $4$:\n$$7 \\equiv -1 \\pmod{4} \\implies 7^7 \\equiv (-1)^7 = -1 \\equiv 3 \\pmod{4}$$\nKarena eksponennya kongruen dengan $3 \\pmod{4}$, angka satuan dari $7^{(7^7)}$ sama dengan angka satuan dari $7^3 = 343$, yaitu $3$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Let $P(n)$ be the product of all positive divisors of the integer $n$. If $P(n) = n^{12}$, how many distinct positive divisors does $n$ have?\n\nA. $12$\nB. $18$\nC. $24$\nD. $36$',
          answer: 'C. $24$',
          principle:
            'The product of all positive divisors of a positive integer $n$ is given by $P(n) = n^{d(n)/2}$, where $d(n)$ is the number of divisors.',
          solution:
            'Pairing each divisor $k$ with $n/k$ shows that the product of all positive divisors of $n$ satisfies:\n$$P(n) = n^{d(n)/2}$$\nGiven $P(n) = n^{12}$ (with $n > 1$), equate the exponents:\n$$\\frac{d(n)}{2} = 12 \\implies d(n) = 24$$\nTherefore, $n$ has $24$ distinct positive divisors.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Solusi bilangan bulat positif terkecil $x$ yang memenuhi persamaan kongruensi linier $15x \\equiv 7 \\pmod{22}$ adalah...\n\nA. $9$\nB. $15$\nC. $21$\nD. $23$',
          answer: 'C. $21$',
          principle:
            'Menyelesaikan kongruensi linier $ax \\equiv b \\pmod{m}$ dengan mencari invers perkalian modulo $m$.',
          solution:
            'Perhatikan bahwa $15 \\times 3 = 45 = 2 \\times 22 + 1 \\equiv 1 \\pmod{22}$, sehingga $3$ adalah invers modulo $22$ dari $15$. Kalikan kedua ruas kongruensi dengan $3$:\n$$45x \\equiv 21 \\pmod{22}$$\n$$x \\equiv 21 \\pmod{22}$$\nJadi, solusi bilangan bulat positif terkecilnya adalah $x = 21$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Rationalize the denominator and simplify the expression:\n$\\frac{1}{\\sqrt[3]{4} + \\sqrt[3]{2} + 1}$.\n\nA. $\\sqrt[3]{2} + 1$\nB. $\\sqrt[3]{2} - 1$\nC. $\\sqrt[3]{4} - \\sqrt[3]{2}$\nD. $2\\sqrt[3]{2} - 1$',
          answer: 'B. $\\sqrt[3]{2} - 1$',
          principle:
            'Rationalize a cubic-root denominator of the form $a^2 + a + 1$ using the difference of cubes identity $(a - 1)(a^2 + a + 1) = a^3 - 1$.',
          solution:
            'Let $a = \\sqrt[3]{2}$, so $\\sqrt[3]{4} = a^2$ and the denominator is $a^2 + a + 1$. Multiply the numerator and denominator by $(a - 1)$:\n$$\\frac{1}{a^2 + a + 1} \\times \\frac{a - 1}{a - 1} = \\frac{a - 1}{a^3 - 1}$$\nSubstituting $a = \\sqrt[3]{2}$ gives $a^3 = 2$, so:\n$$\\frac{\\sqrt[3]{2} - 1}{2 - 1} = \\sqrt[3]{2} - 1$$',
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
            'Berapa banyak pasangan bilangan asli (bulat positif) $(x, y)$ yang memenuhi persamaan $2x + 5y = 100$?',
          answer: '$9$ pasangan',
          answerNumeric: [{ name: 'pasangan', value: 9, unit: '' }],
          principle:
            'Persamaan Diophantine linier $ax + by = c$ diselesaikan menggunakan paritas/kelipatan koefisien dan syarat batas $x, y \\ge 1$.',
          solution:
            'Dari $2x + 5y = 100$, pindahkan suku $5y$:\n$$2x = 100 - 5y$$\nAgar $x$ merupakan bilangan bulat, $5y$ harus genap sehingga $y$ harus genap. Misalkan $y = 2k$ untuk bilangan bulat $k$. Substitusi memberikan:\n$$2x = 100 - 10k \\implies x = 50 - 5k$$\nKarena $x$ dan $y$ bilangan bulat positif, harus dipenuhi:\n- $y > 0 \\implies 2k > 0 \\implies k \\ge 1$\n- $x > 0 \\implies 50 - 5k > 0 \\implies k < 10$\nNilai $k$ yang memenuhi adalah $1, 2, 3, \\dots, 9$. Jadi, terdapat $9$ pasangan $(x, y)$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt: 'What is the highest power of $7$ that divides completely into $200!$ ($200$ factorial)?',
          answer: '$32$',
          answerNumeric: [{ name: 'power', value: 32, unit: '' }],
          principle:
            "Use Legendre's Formula to find the exponent of prime $p$ in $N!$: $v_p(N!) = \\sum_{k \\ge 1} \\lfloor N / p^k \\rfloor$.",
          solution:
            "Apply Legendre's Formula for the prime $p = 7$ dividing $200!$. Each multiple of $7$ contributes at least one factor of $7$, and each multiple of $7^2 = 49$ contributes an additional factor of $7$ (while $7^3 = 343 > 200$ contributes none):\n$$v_7(200!) = \\left\\lfloor \\frac{200}{7} \\right\\rfloor + \\left\\lfloor \\frac{200}{49} \\right\\rfloor + \\left\\lfloor \\frac{200}{343} \\right\\rfloor = 28 + 4 + 0 = 32$$\nThe highest power of $7$ dividing $200!$ is $32$.",
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Tentukan nilai eksak dari deret perkalian:\n$\\left(1 - \\frac{1}{2^2}\\right) \\times \\left(1 - \\frac{1}{3^2}\\right) \\times \\dots \\times \\left(1 - \\frac{1}{100^2}\\right)$.',
          answer: '$\\frac{101}{200}$',
          answerNumeric: [{ name: 'nilai', value: 0.505, unit: '' }],
          principle:
            'Faktorisasi selisih dua kuadrat $1 - \\frac{1}{n^2} = \\frac{n - 1}{n} \\times \\frac{n + 1}{n}$ untuk membentuk hasil kali teleskopik.',
          solution:
            'Faktorkan suku umum pada perkalian tersebut:\n$$1 - \\frac{1}{n^2} = \\frac{n^2 - 1}{n^2} = \\frac{(n - 1)(n + 1)}{n^2} = \\frac{n - 1}{n} \\times \\frac{n + 1}{n}$$\nTuliskan perkalian berderet untuk $n = 2$ hingga $n = 100$:\n$$\\left(\\frac{1}{2} \\times \\frac{3}{2}\\right) \\times \\left(\\frac{2}{3} \\times \\frac{4}{3}\\right) \\times \\left(\\frac{3}{4} \\times \\frac{5}{4}\\right) \\times \\dots \\times \\left(\\frac{99}{100} \\times \\frac{101}{100}\\right)$$\nSeluruh pasangan faktor di bagian tengah saling menyederhanakan ($\\frac{3}{2} \\times \\frac{2}{3} = 1$, dst.), menyisakan faktor pertama dan terakhir:\n$$\\frac{1}{2} \\times \\frac{101}{100} = \\frac{101}{200}$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Find the remainder when the sum of cubes $1^3 + 2^3 + 3^3 + \\dots + 99^3$ is divided by $100$.',
          answer: '$0$',
          answerNumeric: [{ name: 'remainder', value: 0, unit: '' }],
          principle:
            'Use Nicomachus’s theorem for the sum of the first $n$ cubes: $\\sum_{k=1}^n k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$.',
          solution:
            'Use the closed-form formula for the sum of the first $n$ cubes with $n = 99$:\n$$\\sum_{k=1}^{99} k^3 = \\left(\\frac{99 \\times 100}{2}\\right)^2 = (99 \\times 50)^2 = 99^2 \\times 2500$$\nSince $2500 = 25 \\times 100$ is a multiple of $100$, the entire sum is divisible by $100$. Therefore, the remainder is $0$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Dua bilangan prima positif $p$ dan $q$ memenuhi persamaan kuadrat $p^2 + 5pq + q^2 = 249$. Tentukan nilai dari $p + q$.',
          answer: '$12$',
          answerNumeric: [{ name: 'nilai', value: 12, unit: '' }],
          principle:
            'Identitas $(p + q)^2 + 3pq = p^2 + 5pq + q^2$, analisis keterbagian modulo $3$, paritas, dan faktorisasi prima.',
          solution:
            'Ubah bentuk persamaan dengan melengkapkan kuadrat:\n$$(p + q)^2 + 3pq = 249$$\nKarena $249 = 3 \\times 83$ habis dibagi $3$ dan $3pq$ kelipatan $3$, maka $(p + q)^2$ harus habis dibagi $3$, sehingga $p + q$ merupakan kelipatan $3$. Selain itu, karena $3pq > 0$, diperoleh $(p + q)^2 < 249 \\implies p + q \\le 15$.\nPeriksa kemungkinan bilangan prima genap $p = 2$ (atau $q = 2$ karena simetris): substitusi $p = 2$ memberikan $4 + 10q + q^2 = 249 \\implies (q + 5)^2 = 270$, yang tidak memiliki solusi bulat karena $16^2 = 256 < 270 < 289 = 17^2$. Dengan demikian, $p$ dan $q$ keduanya prima ganjil, sehingga $p + q$ genap.\nKelipatan $3$ yang genap dan memenuhi $p + q \\le 15$ hanyalah $6$ dan $12$:\n- Jika $p + q = 6$, maka $6^2 + 3pq = 249 \\implies 3pq = 213 \\implies pq = 71$ (mustahil karena $71$ prima dan tidak ada dua prima ganjil yang jumlahnya $6$ selain $3 + 3$ dengan $3 \\times 3 = 9 \\neq 71$).\n- Jika $p + q = 12$, maka $12^2 + 3pq = 249 \\implies 3pq = 105 \\implies pq = 35$. Faktorisasi prima tunggal $35 = 5 \\times 7$ menghasilkan $\\{p, q\\} = \\{5, 7\\}$, yang tepat memenuhi $5 + 7 = 12$.\nJadi, nilai dari $p + q$ adalah $12$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Let $\\gcd(x, y) = 18$ and $x \\times y = 11340$. If $x$ and $y$ are positive integers, find the sum of all possible values of $(x + y)$.',
          answer: '$864$',
          answerNumeric: [{ name: 'sum', value: 864, unit: '' }],
          principle:
            'Write $x = da$ and $y = db$ with $\\gcd(a, b) = 1$, find all coprime factorizations of $xy/d^2$, and sum the distinct values of $x + y = d(a + b)$.',
          solution:
            'Let $x = 18a$ and $y = 18b$ where $\\gcd(a, b) = 1$. Substituting into the product gives:\n$$(18a)(18b) = 11340 \\implies 324ab = 11340 \\implies ab = 35$$\nThe unordered pairs of coprime positive integers $(a, b)$ multiplying to $35$ are $\\{1, 35\\}$ and $\\{5, 7\\}$. Notice that swapping $x$ and $y$ leaves $x + y$ unchanged, so the distinct possible values of $x + y = 18(a + b)$ are:\n- For $\\{1, 35\\}$: $x + y = 18(1 + 35) = 18 \\times 36 = 648$.\n- For $\\{5, 7\\}$: $x + y = 18(5 + 7) = 18 \\times 12 = 216$.\nSumming all possible values of $(x + y)$:\n$$648 + 216 = 864$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt: 'Berapakah dua digit terakhir penyusun bilangan $2^{1000}$?',
          answer: '$76$',
          answerNumeric: [{ name: 'duaDigitTerakhir', value: 76, unit: '' }],
          principle:
            'Dua digit terakhir suatu bilangan ditentukan modulo $100$ dengan memecahnya menjadi modulo $4$ dan modulo $25$ (Teorema Euler: $a^{\\varphi(25)} \\equiv 1 \\pmod{25}$).',
          solution:
            'Mencari dua digit terakhir setara dengan mencari sisa pembagian terhadap $100$.\n1. Modulo $4$: Karena $1000 \\ge 2$, jelas $2^{1000} \\equiv 0 \\pmod{4}$.\n2. Modulo $25$: Dengan Teorema Euler, $\\varphi(25) = 20$, sehingga $2^{20} \\equiv 1 \\pmod{25}$. Maka:\n$$2^{1000} = (2^{20})^{50} \\equiv 1^{50} = 1 \\pmod{25}$$\nBilangan antara $0$ hingga $99$ yang kongruen dengan $1 \\pmod{25}$ adalah $1, 26, 51,$ dan $76$. Dari keempat bilangan tersebut, satu-satunya yang habis dibagi $4$ adalah $76$.\nJadi, dua digit terakhir dari $2^{1000}$ adalah $76$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Find the smallest positive integer $x$ such that $x \\equiv 3 \\pmod{7}$ and $x \\equiv 5 \\pmod{11}$.',
          answer: '$38$',
          answerNumeric: [{ name: 'x', value: 38, unit: '' }],
          principle:
            'Solve a system of two linear congruences with coprime moduli by substitution (Chinese Remainder Theorem).',
          solution:
            'From $x \\equiv 5 \\pmod{11}$, write $x = 11k + 5$ for an integer $k$. Substitute into $x \\equiv 3 \\pmod{7}$:\n$$11k + 5 \\equiv 3 \\pmod{7} \\implies 4k \\equiv -2 \\equiv 5 \\pmod{7}$$\nMultiply both sides by $2$ (since $2 \\times 4 = 8 \\equiv 1 \\pmod{7}$):\n$$8k \\equiv 10 \\pmod{7} \\implies k \\equiv 3 \\pmod{7}$$\nThe smallest nonnegative value is $k = 3$, giving:\n$$x = 11(3) + 5 = 38$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Hasil operasi dari $\\sqrt{1111 - 22}$ adalah sebuah bilangan bulat positif. Berapakah nilainya?',
          answer: '$33$',
          answerNumeric: [{ name: 'nilai', value: 33, unit: '' }],
          principle:
            'Evaluasi aritmetika langsung dan pola bilangan repunit: $11\\dots 1 - 22\\dots 2 = (33\\dots 3)^2$.',
          solution:
            'Faktorkan bilangan repunit di dalam tanda akar menggunakan nilai tempat ($1111 = 11 \\times 101$ dan $22 = 11 \\times 2$):\n$$1111 - 22 = 11 \\times (101 - 2) = 11 \\times 99 = 11 \\times (9 \\times 11) = 3^2 \\times 11^2 = (3 \\times 11)^2 = 33^2$$\nTentukan akar kuadrat positifnya:\n$$\\sqrt{1111 - 22} = \\sqrt{33^2} = 33$$\nJadi, nilainya adalah $33$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'A three-digit positive integer has the property that its digits sum to $18$. Its tens digit is $2$ more than its units digit, and its hundreds digit is $1$ less than its tens digit. What is the number?',
          answer: '$675$',
          answerNumeric: [{ name: 'number', value: 675, unit: '' }],
          principle:
            'Represent the digits algebraically in terms of a single variable and solve the linear sum equation.',
          solution:
            'Let the units digit be $u$. Then:\n- Tens digit: $u + 2$\n- Hundreds digit: $(u + 2) - 1 = u + 1$\nThe sum of the three digits is $18$:\n$$(u + 1) + (u + 2) + u = 18 \\implies 3u + 3 = 18 \\implies 3u = 15 \\implies u = 5$$\nTherefore, the units digit is $5$, the tens digit is $5 + 2 = 7$, and the hundreds digit is $5 + 1 = 6$. The three-digit number is $675$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
