/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SMP Kelas 7–8 – Intermediate 1
 * Sumber: BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7–8 – INTERMEDIATE 1.pdf (Duta e-dukasi).
 * Bahasa asli tiap butir soal (Indonesia / Inggris) dipertahankan sesuai Keputusan D5.
 */
export default {
  id: 'olim-smp-bilangan-int1',
  slug: 'bilangan-smp-intermediate-1',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'olympiad-pro',
  topic: 'Bilangan Olimpiade SMP Kelas 7–8 (Intermediate 1)',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp8-bab1-bilangan-berpangkat'
  ],
  lang: 'id',
  langDisplay: 'ID / EN',
  competition: 'Seri Pembinaan OSN',
  title: 'Bilangan Olimpiade Matematika SMP Kelas 7–8 – Intermediate 1',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 30 soal (20 Pilihan Ganda pada Bagian A dan 10 Isian Singkat pada Bagian B). Setiap soal dipertahankan dalam bahasa aslinya (Bahasa Indonesia atau Bahasa Inggris).',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7\u20138 \u2013 INTERMEDIATE 1.pdf',
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
            'Nilai dari deret pecahan $\\frac{1}{1 \\times 4} + \\frac{1}{4 \\times 7} + \\frac{1}{7 \\times 10} + \\dots + \\frac{1}{28 \\times 31}$ adalah...\nA. $\\frac{10}{31}$\nB. $\\frac{9}{31}$\nC. $\\frac{11}{31}$\nD. $\\frac{1}{31}$',
          answer: 'A. $\\frac{10}{31}$',
          principle:
            'Deret pecahan teleskopik berbentuk $\\frac{1}{n(n+3)}$ dapat diuraikan menjadi $\\frac{1}{3}\\left(\\frac{1}{n} - \\frac{1}{n+3}\\right)$.',
          solution:
            'Bentuk pecahan $\\frac{1}{n(n+3)}$ dapat ditulis sebagai $\\frac{1}{3}\\left(\\frac{1}{n} - \\frac{1}{n+3}\\right)$. Deret tersebut menjadi:\n$$\\frac{1}{3}\\left[\\left(1 - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{7}\\right) + \\dots + \\left(\\frac{1}{28} - \\frac{1}{31}\\right)\\right]$$\nGunakan prinsip teleskopik, semua suku tengah saling meniadakan:\n$$\\frac{1}{3}\\left(1 - \\frac{1}{31}\\right) = \\frac{1}{3} \\times \\frac{30}{31} = \\frac{10}{31}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'How many positive integer divisors does the number $100{,}000$ ($10^5$) have?\nA. 25\nB. 30\nC. 36\nD. 40',
          answer: 'C. 36',
          principle:
            'If the prime factorization of a positive integer is $p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}$, the number of positive divisors is $(a_1 + 1)(a_2 + 1) \\cdots (a_k + 1)$.',
          solution:
            'The prime factorization of $100{,}000$ is:\n$$10^5 = (2 \\times 5)^5 = 2^5 \\times 5^5.$$\nEvery positive divisor of $2^5 \\times 5^5$ has the form $2^a \\times 5^b$ where $0 \\le a \\le 5$ ($6$ choices) and $0 \\le b \\le 5$ ($6$ choices).\nBy the multiplication principle, the total number of positive divisors is:\n$$(5 + 1)(5 + 1) = 6 \\times 6 = 36.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Diketahui $\\text{FPB}(x, y) = 15$ dan $\\text{KPK}(x, y) = 225$. Banyaknya pasangan bilangan bulat positif $(x, y)$ dengan $x \\le y$ yang memenuhi kondisi tersebut adalah...\nA. 1\nB. 2\nC. 3\nD. 4',
          answer: 'B. 2',
          principle:
            'Jika $\\text{FPB}(x, y) = d$, maka $x = da$ dan $y = db$ dengan $\\text{FPB}(a, b) = 1$ dan $\\text{KPK}(x, y) = d \\cdot a \\cdot b$.',
          solution:
            'Misalkan $x = 15a$ dan $y = 15b$, dengan $\\text{FPB}(a, b) = 1$. Maka $\\text{KPK}(x, y) = 15ab = 225$, sehingga $ab = 15$.\nPasangan $(a, b)$ yang saling prima dan memenuhi $a \\le b$ adalah $(1, 15)$ dan $(3, 5)$.\nJadi, terdapat $2$ pasang bilangan $(x, y)$, yaitu $(15, 225)$ dan $(45, 75)$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'What is the remainder when $3^{2024}$ is divided by $7$?\nA. 1\nB. 2\nC. 3\nD. 4',
          answer: 'B. 2',
          principle:
            'Powers of an integer modulo $m$ form a repeating cycle; use modular arithmetic or Fermat\'s Little Theorem to reduce large exponents.',
          solution:
            'Observe the pattern of powers of $3$ modulo $7$:\n$3^1 \\equiv 3$, $3^2 \\equiv 2$, $3^3 \\equiv 6$, $3^4 \\equiv 4$, $3^5 \\equiv 5$, $3^6 \\equiv 1 \\pmod{7}$.\nThe cycle length is $6$. Dividing $2024$ by $6$ gives $2024 = 6 \\times 337 + 2$ (remainder $2$).\nTherefore, $3^{2024} \\equiv 3^2 = 9 \\equiv 2 \\pmod{7}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Jika sebuah bilangan direpresentasikan sebagai $144$ dalam basis $b$ dan nilainya sama dengan $81$ dalam basis $10$ ($144_b = 81_{10}$), maka nilai $b$ adalah...\nA. 5\nB. 6\nC. 7\nD. 8',
          answer: 'C. 7',
          principle:
            'Bilangan dalam basis $b$ dapat dikonversi ke basis $10$ dengan menguraikan setiap digit menurut pangkat basis $b$: $\\overline{a_2a_1a_0}_b = a_2b^2 + a_1b + a_0$.',
          solution:
            'Konversikan $144_b$ ke basis $10$:\n$$1(b^2) + 4(b) + 4 = 81 \\implies b^2 + 4b - 77 = 0.$$\nFaktorkan persamaan kuadrat tersebut:\n$$(b - 7)(b + 11) = 0.$$\nKarena basis bilangan harus positif (dan lebih besar dari $4$), maka $b = 7$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'A four-digit number $3a5b$ is completely divisible by $36$. What is the maximum possible value of the product $a \\times b$?\nA. 12\nB. 16\nC. 18\nD. 24',
          answer: 'D. 24',
          principle:
            'An integer is divisible by $36$ if and only if it is divisible by both $4$ (last two digits divisible by $4$) and $9$ (sum of digits divisible by $9$).',
          solution:
            'For $3a5b$ to be divisible by $36$, it must be divisible by $4$ and $9$.\nDivisibility by $4$ means the two-digit number $5b$ is divisible by $4$, so $b \\in \\{2, 6\\}$.\n- If $b = 2$, sum of digits $= 3 + a + 5 + 2 = 10 + a$. For divisibility by $9$, $a = 8$, giving $a \\times b = 16$.\n- If $b = 6$, sum of digits $= 3 + a + 5 + 6 = 14 + a$. For divisibility by $9$, $a = 4$, giving $a \\times b = 24$.\nThe maximum possible product is $24$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Bentuk sederhana dari $\\sqrt{7 - 4\\sqrt{3}} + \\sqrt{7 + 4\\sqrt{3}}$ adalah...\nA. 2\nB. 4\nC. $2\\sqrt{3}$\nD. $4\\sqrt{3}$',
          answer: 'B. 4',
          principle:
            'Bentuk akar rangkap $\\sqrt{(p+q) \\pm 2\\sqrt{pq}}$ dapat disederhanakan menjadi $\\sqrt{p} \\pm \\sqrt{q}$ untuk $p > q > 0$.',
          solution:
            'Ubah bentuk di dalam akar menjadi kuadrat sempurna menggunakan $4\\sqrt{3} = 2\\sqrt{12}$:\n$$\\sqrt{7 - 4\\sqrt{3}} = \\sqrt{7 - 2\\sqrt{12}} = \\sqrt{4} - \\sqrt{3} = 2 - \\sqrt{3},$$\n$$\\sqrt{7 + 4\\sqrt{3}} = \\sqrt{7 + 2\\sqrt{12}} = \\sqrt{4} + \\sqrt{3} = 2 + \\sqrt{3}.$$\nJumlah keduanya adalah $(2 - \\sqrt{3}) + (2 + \\sqrt{3}) = 4$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'The five-digit number $5x7y2$ is divisible by $11$. What is the maximum possible value of $x + y$?\nA. 3\nB. 9\nC. 11\nD. 14',
          answer: 'D. 14',
          principle:
            'An integer is divisible by $11$ if and only if the alternating sum of its digits is a multiple of $11$.',
          solution:
            'Compute the alternating sum of the digits of $5x7y2$:\n$$5 - x + 7 - y + 2 = 14 - (x + y).$$\nThis must be a multiple of $11$. Since $x$ and $y$ are single digits, $0 \\le x + y \\le 18$.\n- If $14 - (x + y) = 11$, then $x + y = 3$.\n- If $14 - (x + y) = 0$, then $x + y = 14$.\nThe maximum possible value of $x + y$ is $14$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Berapakah jumlah digit-digit dari hasil operasi $(10^{20} - 1) / 9$?\nA. 9\nB. 18\nC. 20\nD. 40',
          answer: 'C. 20',
          principle:
            'Bilangan $\\frac{10^n - 1}{9}$ merupakan bilangan repunit yang terdiri dari tepat $n$ buah angka $1$.',
          solution:
            'Perhatikan polanya:\n$\\frac{10^1 - 1}{9} = \\frac{9}{9} = 1$, $\\frac{10^2 - 1}{9} = \\frac{99}{9} = 11$.\nSecara umum, $\\frac{10^n - 1}{9}$ menghasilkan bilangan yang terdiri dari angka $1$ sebanyak $n$ kali.\nJadi, hasil dari $\\frac{10^{20} - 1}{9}$ adalah $11\\dots 1$ sebanyak $20$ digit angka $1$, sehingga jumlah digit-digitnya adalah $20 \\times 1 = 20$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Which of the following fractions lies strictly between $\\frac{1}{3}$ and $\\frac{1}{2}$ and has the smallest positive denominator?\nA. $\\frac{3}{8}$\nB. $\\frac{2}{5}$\nC. $\\frac{4}{9}$\nD. $\\frac{3}{7}$',
          answer: 'B. $\\frac{2}{5}$',
          principle:
            'To find a fraction between $\\frac{1}{3}$ and $\\frac{1}{2}$ with the smallest positive denominator, multiply $\\frac{1}{3} < \\frac{p}{q} < \\frac{1}{2}$ by $6q > 0$ to obtain the exact integer inequality $2q < 6p < 3q$, then test positive integers $q$ in increasing order.',
          solution:
            'We want positive integers $p$ and $q$ with $\\frac{1}{3} < \\frac{p}{q} < \\frac{1}{2}$ and $q$ as small as possible. Multiplying through by $6q > 0$ gives the equivalent integer condition:\n$$2q < 6p < 3q.$$\nTest small positive denominators $q$ in increasing order to see whether a multiple of $6$ lies strictly between $2q$ and $3q$:\n- $q = 1$: $2 < 6p < 3$ (no multiple of $6$).\n- $q = 2$: $4 < 6p < 6$ (no multiple of $6$).\n- $q = 3$: $6 < 6p < 9$ (no multiple of $6$).\n- $q = 4$: $8 < 6p < 12$ (no multiple of $6$ strictly between $8$ and $12$).\n- $q = 5$: $10 < 6p < 15$, which is satisfied by $6p = 12 \\implies p = 2$, giving $\\frac{2}{5}$.\nIndeed, using the common denominator $30$, $\\frac{1}{3} = \\frac{10}{30} < \\frac{12}{30} = \\frac{2}{5} < \\frac{15}{30} = \\frac{1}{2}$ (and the other options have larger denominators $7, 8, 9$). Thus, $\\frac{2}{5}$ has the smallest positive denominator.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'KPK dari tiga buah bilangan bulat adalah $120$. Jika dua bilangan di antaranya adalah $12$ dan $15$, berapakah nilai minimum yang mungkin untuk bilangan ketiga?\nA. 8\nB. 24\nC. 40\nD. 120',
          answer: 'A. 8',
          principle:
            'KPK dari beberapa bilangan bulat diperoleh dengan mengambil pangkat tertinggi dari setiap faktor prima yang muncul pada bilangan-bilangan tersebut.',
          solution:
            'Faktorisasi prima dari bilangan yang diketahui:\n$12 = 2^2 \\times 3$, $15 = 3 \\times 5$, dan $\\text{KPK} = 120 = 2^3 \\times 3 \\times 5$.\nFaktor $3^1$ dan $5^1$ sudah tercakup pada $12$ dan $15$. Namun, pangkat tertinggi faktor $2$ pada KPK adalah $2^3$, sedangkan $12$ hanya memiliki $2^2$.\nAgar KPK mencapai $120$ dengan nilai minimum, bilangan ketiga cukup memiliki faktor $2^3 = 8$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'How many consecutive zero digits are at the end of the number $30!$ ($30$ factorial)?\nA. 6\nB. 7\nC. 8\nD. 10',
          answer: 'B. 7',
          principle:
            'The number of trailing zeros in $n!$ equals the exponent of $5$ in its prime factorization (Legendre\'s formula): $\\sum_{k \\ge 1} \\lfloor n / 5^k \\rfloor$.',
          solution:
            'Each trailing zero corresponds to a factor of $10 = 2 \\times 5$, and factors of $5$ are rarer than factors of $2$ in $30!$.\nUsing Legendre\'s formula:\n$$\\left\\lfloor \\frac{30}{5} \\right\\rfloor + \\left\\lfloor \\frac{30}{25} \\right\\rfloor = 6 + 1 = 7.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Sebuah bilangan bulat positif $N$ memberikan sisa $2$ jika dibagi $3$, sisa $3$ jika dibagi $4$, dan sisa $4$ jika dibagi $5$. Nilai minimum dari $N$ adalah...\nA. 59\nB. 61\nC. 119\nD. 121',
          answer: 'A. 59',
          principle:
            'Jika pembagian $N$ oleh beberapa pembagi $d_i$ selalu menghasilkan sisa $d_i - k$ yang sama selisihnya, maka $N + k$ habis dibagi oleh $\\text{KPK}(d_1, d_2, \\dots)$.',
          solution:
            'Perhatikan bahwa sisa pembagian selalu kurang $1$ dari pembaginya ($3 - 1 = 2$, $4 - 1 = 3$, $5 - 1 = 4$).\nHal ini berarti $N + 1$ habis dibagi oleh $3$, $4$, dan $5$.\nKarena $\\text{KPK}(3, 4, 5) = 60$, nilai positif terkecil untuk $N + 1$ adalah $60$, sehingga $N = 59$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'What is the sum of all positive integer divisors of $24$?\nA. 36\nB. 48\nC. 60\nD. 72',
          answer: 'C. 60',
          principle:
            'The sum of all positive divisors of $n = p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}$ is given by $\\sigma(n) = \\prod_{i=1}^k \\frac{p_i^{a_i + 1} - 1}{p_i - 1}$.',
          solution:
            'Using the prime factorization $24 = 2^3 \\times 3^1$, every positive divisor of $24$ has the form $2^a \\times 3^b$ with $0 \\le a \\le 3$ and $0 \\le b \\le 1$.\nBy distributing the product of the prime-power sums:\n$$(1 + 2 + 2^2 + 2^3)(1 + 3) = (1 + 2 + 4 + 8)(1 + 3) = 15 \\times 4 = 60,$$\nevery divisor $2^a \\times 3^b$ ($1, 2, 4, 8, 3, 6, 12, 24$) appears in the expansion exactly once.\nEquivalently, using the geometric-series formula:\n$$\\sigma(24) = \\frac{2^4 - 1}{2 - 1} \\times \\frac{3^2 - 1}{3 - 1} = 15 \\times 4 = 60.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Jika diketahui $2^{x+y} = 32$ dan $2^{x-y} = 8$, berapakah nilai dari $x^2 - y^2$?\nA. 8\nB. 12\nC. 15\nD. 20',
          answer: 'C. 15',
          principle:
            'Gunakan sifat persamaan eksponen $a^m = a^n \\implies m = n$ (untuk $a > 0, a \\neq 1$) serta identitas selisih kuadrat $x^2 - y^2 = (x + y)(x - y)$.',
          solution:
            'Dari $2^{x+y} = 32 = 2^5$, diperoleh $x + y = 5$.\nDari $2^{x-y} = 8 = 2^3$, diperoleh $x - y = 3$.\nMenggunakan identitas selisih kuadrat:\n$$x^2 - y^2 = (x + y)(x - y) = 5 \\times 3 = 15.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Find the unit digit of the number $7^{2027}$.\nA. 1\nB. 3\nC. 7\nD. 9',
          answer: 'B. 3',
          principle:
            'The unit digits of consecutive powers of an integer repeat periodically modulo $10$.',
          solution:
            'The unit digits of powers of $7$ follow a cycle of length $4$:\n$7^1 \\equiv 7$, $7^2 \\equiv 9$, $7^3 \\equiv 3$, $7^4 \\equiv 1 \\pmod{10}$.\nDividing $2027$ by $4$ gives $2027 = 4 \\times 506 + 3$ (remainder $3$).\nThus, the unit digit of $7^{2027}$ matches that of $7^3$, which is $3$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Berapakah hasil dari penjumlahan deret bilangan genap: $2 + 4 + 6 + \\dots + 100$?\nA. 2500\nB. 2550\nC. 5000\nD. 5050',
          answer: 'B. 2550',
          principle:
            'Jumlah $n$ bilangan asli pertama adalah $\\frac{n(n+1)}{2}$, sehingga jumlah $n$ bilangan genap positif pertama adalah $2 \\times \\frac{n(n+1)}{2} = n(n+1)$.',
          solution:
            'Deret dapat ditulis sebagai $2(1 + 2 + 3 + \\dots + 50)$.\nMenggunakan rumus jumlah deret aritmetika $\\sum_{k=1}^{n} k = \\frac{n(n + 1)}{2}$:\n$$2 \\times \\frac{50 \\times 51}{2} = 50 \\times 51 = 2550.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Evaluate the finite sum: $\\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12} + \\frac{1}{20} + \\dots + \\frac{1}{9900}$.\nA. $\\frac{98}{99}$\nB. $\\frac{99}{100}$\nC. $\\frac{100}{101}$\nD. 1',
          answer: 'B. $\\frac{99}{100}$',
          principle:
            'Use the telescoping identity $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ to cancel intermediate terms in the sum.',
          solution:
            'Rewrite each term as $\\frac{1}{n(n+1)}$:\n$$\\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\frac{1}{3 \\times 4} + \\dots + \\frac{1}{99 \\times 100}.$$\nUsing telescoping sums:\n$$\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{99} - \\frac{1}{100}\\right) = 1 - \\frac{1}{100} = \\frac{99}{100}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Berapakah Kelipatan Persekutuan Terkecil (KPK) dari $10$, $12$, dan $14$?\nA. 210\nB. 360\nC. 420\nD. 840',
          answer: 'C. 420',
          principle:
            'KPK dari beberapa bilangan diperoleh dengan mengalikan semua faktor prima yang muncul menggunakan pangkat tertingginya masing-masing.',
          solution:
            'Faktorisasi prima masing-masing bilangan:\n$10 = 2 \\times 5$, $12 = 2^2 \\times 3$, dan $14 = 2 \\times 7$.\nKPK $= 2^2 \\times 3 \\times 5 \\times 7 = 4 \\times 105 = 420$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'If a number is written as $123_4$ in base $4$, how is it written in base $5$?\nA. $102_5$\nB. $112_5$\nC. $122_5$\nD. $201_5$',
          answer: 'A. $102_5$',
          principle:
            'Convert from base $b_1$ to base $b_2$ by first expanding to base $10$ and then repeatedly dividing by $b_2$ and reading the remainders from bottom to top.',
          solution:
            'First, convert $123_4$ to base $10$:\n$$1(4^2) + 2(4^1) + 3(4^0) = 16 + 8 + 3 = 27_{10}.$$\nNext, convert $27$ to base $5$:\n$27 \\div 5 = 5$ remainder $2$, $5 \\div 5 = 1$ remainder $0$, $1 \\div 5 = 0$ remainder $1$.\nReading the remainders upwards gives $102_5$.',
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
            'Jika $x = \\sqrt{6 + \\sqrt{6 + \\sqrt{6 + \\dots}}}$, dengan $x > 0$, tentukan nilai dari $x$.',
          answer: '3',
          answerNumeric: [{ name: 'x', value: 3 }],
          principle:
            'Untuk bentuk akar bersarang tak hingga $x = \\sqrt{a + \\sqrt{a + \\dots}}$, kuadratkan kedua ruas sehingga diperoleh persamaan kuadrat $x^2 = a + x$.',
          solution:
            'Misalkan $x = \\sqrt{6 + \\sqrt{6 + \\sqrt{6 + \\dots}}}$. Kuadratkan kedua ruas:\n$$x^2 = 6 + x \\implies x^2 - x - 6 = 0 \\implies (x - 3)(x + 2) = 0.$$\nKarena $x > 0$, maka $x = 3$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt: 'Find the sum of all distinct prime factors of $2024$.',
          answer: '36',
          answerNumeric: [{ name: 'sum', value: 36 }],
          principle:
            'Decompose an integer into its prime factorization and sum each distinct prime base once.',
          solution:
            'Find the prime factorization of $2024$:\n$$2024 = 8 \\times 253 = 2^3 \\times 11 \\times 23.$$\nThe distinct prime factors are $2$, $11$, and $23$, so their sum is $2 + 11 + 23 = 36$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt: 'Berapakah sisa pembagian $7^{2026}$ oleh $10$?',
          answer: '9',
          answerNumeric: [{ name: 'sisa', value: 9 }],
          principle:
            'Sisa pembagian suatu bilangan bulat positif oleh $10$ sama dengan angka satuan bilangan tersebut; gunakan siklus angka satuan pangkat.',
          solution:
            'Mencari sisa pembagian oleh $10$ sama dengan mencari angka satuan. Siklus angka satuan pangkat $7$ berulang setiap $4$ langkah ($7, 9, 3, 1$).\nKarena $2026 = 4 \\times 506 + 2$ (bersisa $2$), maka angka satuannya mengikuti $7^2 = 49$, yaitu $9$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'The product of two positive integers is $108$, and their greatest common divisor (GCD) is $3$. What is the maximum possible value of their sum?',
          answer: '39',
          answerNumeric: [{ name: 'maxSum', value: 39 }],
          principle:
            'Write two integers with $\\gcd(x, y) = d$ as $da$ and $db$ with $\\gcd(a, b) = 1$, then test all coprime factor pairs $(a, b)$ of $\\frac{xy}{d^2}$.',
          solution:
            'Let the two positive integers be $3a$ and $3b$ with $\\gcd(a, b) = 1$.\nTheir product is $3a \\times 3b = 9ab = 108 \\implies ab = 12$.\nThe factor pairs $(a, b)$ of $12$ (with $a \\le b$) are $(1, 12)$, $(2, 6)$, and $(3, 4)$. Since $\\gcd(2, 6) = 2 \\neq 1$ (which would give a GCD of $6$), only $(1, 12)$ and $(3, 4)$ are valid coprime pairs:\n- For $(1, 12)$: the numbers are $3$ and $36$, with sum $3 + 36 = 39$.\n- For $(3, 4)$: the numbers are $9$ and $12$, with sum $9 + 12 = 21$.\nThe maximum possible sum is $39$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Diberikan $a$, $b$, dan $c$ adalah bilangan prima sedemikian sehingga $a + b + c = 14$. Tentukan nilai dari $a \\times b \\times c$.',
          answer: '70',
          answerNumeric: [{ name: 'hasilKali', value: 70 }],
          principle:
            'Jumlah tiga bilangan bulat bernilai genap hanya jika ketiganya genap atau tepat satu di antaranya genap dan dua lainnya ganjil; satu-satunya bilangan prima genap adalah $2$.',
          solution:
            'Karena jumlah ketiga bilangan prima adalah bilangan genap ($14$), tidak mungkin ketiganya ganjil (jumlah tiga bilangan ganjil selalu ganjil), sehingga setidaknya satu bilangan prima harus genap.\nSatu-satunya bilangan prima genap adalah $2$. Misalkan $a = 2$, maka $b + c = 12$.\nPasangan bilangan prima yang jumlahnya $12$ adalah $5$ dan $7$.\nMaka hasil kalinya adalah $a \\times b \\times c = 2 \\times 5 \\times 7 = 70$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt: 'Let $N = 999^2 + 999$. Evaluate the value of $N / 1000$.',
          answer: '999',
          answerNumeric: [{ name: 'value', value: 999 }],
          principle:
            'Factor out the common term $a$ using $a^2 + a = a(a + 1)$ to simplify arithmetic expressions.',
          solution:
            'Factor the expression:\n$$N = 999^2 + 999 = 999(999 + 1) = 999 \\times 1000.$$\nTherefore, $N / 1000 = \\frac{999 \\times 1000}{1000} = 999$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Berapakah banyaknya faktor pembagi positif dari bilangan $2000$?',
          answer: '20',
          answerNumeric: [{ name: 'banyakFaktor', value: 20 }],
          principle:
            'Jika faktorisasi prima suatu bilangan adalah $p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}$, maka banyaknya faktor pembagi positif adalah $(a_1 + 1)(a_2 + 1) \\cdots (a_k + 1)$.',
          solution:
            'Faktorisasi prima dari $2000$:\n$$2000 = 2 \\times 1000 = 2 \\times (2^3 \\times 5^3) = 2^4 \\times 5^3.$$\nSetiap faktor pembagi positif dari $2000$ berbentuk $2^a \\times 5^b$ dengan $0 \\le a \\le 4$ ($5$ pilihan untuk $a$) dan $0 \\le b \\le 3$ ($4$ pilihan untuk $b$).\nDengan aturan perkalian, banyaknya faktor pembagi positif adalah:\n$$(4 + 1) \\times (3 + 1) = 5 \\times 4 = 20.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt: 'If $3^{x-1} = 81$, evaluate the value of $x^2 - 2x$.',
          answer: '15',
          answerNumeric: [{ name: 'value', value: 15 }],
          principle:
            'Express both sides of an exponential equation with the same prime base to equate exponents and solve for $x$.',
          solution:
            'Since $81 = 3^4$, the equation $3^{x-1} = 3^4$ gives $x - 1 = 4 \\implies x = 5$.\nSubstitute $x = 5$ into $x^2 - 2x$:\n$$x^2 - 2x = 5^2 - 2(5) = 25 - 10 = 15.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Sebuah buku memiliki halaman yang dinomori secara berurutan mulai dari $1$ hingga $100$. Berapa kali digit "7" tercetak pada penomoran halaman buku tersebut?',
          answer: '20',
          answerNumeric: [{ name: 'jumlahDigit7', value: 20 }],
          principle:
            'Hitung kemunculan suatu digit secara terpisah berdasarkan nilai tempatnya (satuan dan puluhan) agar kemunculan ganda seperti $77$ terhitung tepat.',
          solution:
            'Hitung kemunculan digit $7$ pada setiap posisi:\n- Posisi satuan: $7, 17, 27, 37, 47, 57, 67, 77, 87, 97$ ($10$ kali).\n- Posisi puluhan: $70, 71, 72, 73, 74, 75, 76, 77, 78, 79$ ($10$ kali).\nTotal digit $7$ tercetak sebanyak $10 + 10 = 20$ kali.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Evaluate the alternating sum of squares: $100^2 - 99^2 + 98^2 - 97^2 + \\dots + 2^2 - 1^2$.',
          answer: '5050',
          answerNumeric: [{ name: 'sum', value: 5050 }],
          principle:
            'Pair adjacent terms and apply the difference of squares identity $a^2 - b^2 = (a - b)(a + b)$.',
          solution:
            'Group into consecutive pairs:\n$$(100^2 - 99^2) + (98^2 - 97^2) + \\dots + (2^2 - 1^2).$$\nUsing $(n+1)^2 - n^2 = ((n+1) - n)((n+1) + n) = (n+1) + n$, the series becomes the sum of all integers from $1$ to $100$:\n$$100 + 99 + 98 + 97 + \\dots + 2 + 1 = \\frac{100 \\times 101}{2} = 5050.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
