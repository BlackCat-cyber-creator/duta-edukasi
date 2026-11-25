/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SMP Kelas 7–8 – Basic 2
 * Sumber: Duta e-dukasi (BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7–8 – BASIC 2.pdf).
 * Bahasa dipertahankan sesuai naskah sumber untuk tiap butir soal (Keputusan D5).
 */
export default {
  id: 'olim-smp-bilangan-basic2',
  slug: 'bilangan-smp-basic-2',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'olympiad-pro',
  topic: 'Bilangan Olimpiade SMP Kelas 7–8 (Basic 2)',
  relatedChapterIds: ['smp7-bab1-bilangan-bulat', 'smp8-bab1-bilangan-berpangkat'],
  lang: 'id',
  langDisplay: 'ID / EN',
  competition: 'Seri Pembinaan OSN',
  title: 'Bilangan Olimpiade Matematika SMP Kelas 7–8 – Basic 2',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 20 soal Pilihan Ganda (Bagian A) dan 10 soal Isian Singkat (Bagian B) dengan teliti. Pertahankan bahasa masing-masing soal sesuai naskah asli.',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7\u20138 \u2013 BASIC 2.pdf',
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
            'Nilai dari operasi $999 \\times 1001 - 999^2$ adalah...\n\nA. $999$\nB. $1001$\nC. $1998$\nD. $2000$',
          answer: 'C. $1998$',
          principle: 'Sifat distributif perkalian (pemfaktoran aljabar): $ab - a^2 = a(b - a)$.',
          solution:
            'Gunakan pemfaktoran aljabar dengan mengeluarkan faktor persekutuan $999$:\n$$999 \\times 1001 - 999^2 = 999(1001 - 999) = 999 \\times 2 = 1998$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'What is the sum of the greatest common divisor (GCD) and the least common multiple (LCM) of $18$ and $24$?\n\nA. $72$\nB. $78$\nC. $84$\nD. $90$',
          answer: 'B. $78$',
          principle: 'Determine GCD using minimum prime powers and LCM using maximum prime powers from prime factorizations.',
          solution:
            'Write the prime factorizations of $18$ and $24$:\n$$18 = 2 \\times 3^2, \\qquad 24 = 2^3 \\times 3$$\nCompute the GCD and LCM:\n$$\\gcd(18, 24) = 2 \\times 3 = 6$$\n$$\\operatorname{lcm}(18, 24) = 2^3 \\times 3^2 = 8 \\times 9 = 72$$\nTheir sum is:\n$$6 + 72 = 78$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Angka satuan dari hasil penjumlahan $7^{100} + 3^{100}$ adalah...\n\nA. $0$\nB. $2$\nC. $4$\nD. $8$',
          answer: 'B. $2$',
          principle: 'Siklus periodik angka satuan perpangkatan modulo $10$.',
          solution:
            'Pola angka satuan pangkat $7$ berulang setiap $4$ siklus ($7, 9, 3, 1$):\n$$7^4 = 2401 \\equiv 1 \\pmod{10} \\implies 7^{100} = (7^4)^{25} \\equiv 1^{25} \\equiv 1 \\pmod{10}$$\nPola angka satuan pangkat $3$ juga berulang setiap $4$ siklus ($3, 9, 7, 1$):\n$$3^4 = 81 \\equiv 1 \\pmod{10} \\implies 3^{100} = (3^4)^{25} \\equiv 1^{25} \\equiv 1 \\pmod{10}$$\nJumlah angka satuannya adalah:\n$$1 + 1 = 2$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'In base $4$ arithmetic, compute the product of $23_4$ and $3_4$.\n\nA. $131_4$\nB. $201_4$\nC. $211_4$\nD. $1201_4$',
          answer: 'B. $201_4$',
          principle: 'Convert numbers between base $4$ and base $10$ using place values of powers of $4$.',
          solution:
            'Convert the operands to base $10$:\n$$23_4 = (2 \\times 4^1) + (3 \\times 4^0) = 8 + 3 = 11, \\qquad 3_4 = 3$$\nMultiply in base $10$:\n$$11 \\times 3 = 33$$\nConvert $33$ back to base $4$:\n$$33 = (2 \\times 4^2) + (0 \\times 4^1) + (1 \\times 4^0) = 201_4$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Bentuk sederhana dari pecahan $\\frac{\\sqrt{3} + \\sqrt{2}}{\\sqrt{3} - \\sqrt{2}}$ adalah...\n\nA. $1$\nB. $5$\nC. $5 + \\sqrt{6}$\nD. $5 + 2\\sqrt{6}$',
          answer: 'D. $5 + 2\\sqrt{6}$',
          principle: 'Rasionalisasi penyebut bentuk akar dengan mengalikan faktor sekawan $(\\sqrt{a} + \\sqrt{b})$.',
          solution:
            'Kalikan pembilang dan penyebut dengan bentuk sekawan $(\\sqrt{3} + \\sqrt{2})$:\n$$\\frac{\\sqrt{3} + \\sqrt{2}}{\\sqrt{3} - \\sqrt{2}} \\times \\frac{\\sqrt{3} + \\sqrt{2}}{\\sqrt{3} + \\sqrt{2}} = \\frac{(\\sqrt{3} + \\sqrt{2})^2}{(\\sqrt{3})^2 - (\\sqrt{2})^2} = \\frac{3 + 2\\sqrt{6} + 2}{3 - 2} = 5 + 2\\sqrt{6}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'If $4^{x+1} = 256$, what is the value of $x^3$?\n\nA. $8$\nB. $27$\nC. $64$\nD. $125$',
          answer: 'B. $27$',
          principle: 'Equate exponents when both sides of an exponential equation share the same base.',
          solution:
            'Express $256$ as a power of $4$:\n$$4^{x+1} = 256 = 4^4 \\implies x + 1 = 4 \\implies x = 3$$\nTherefore, the value of $x^3$ is:\n$$x^3 = 3^3 = 27$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Dua buah jam weker diatur berdering secara berkala. Jam pertama berdering setiap $36$ menit, dan jam kedua setiap $48$ menit. Jika keduanya berdering bersamaan pada pukul $08.00$, pada pukul berapa keduanya akan berdering bersamaan lagi untuk pertama kalinya?\n\nA. $09.24$\nB. $09.48$\nC. $10.24$\nD. $10.48$',
          answer: 'C. $10.24$',
          principle: 'Kelipatan Persekutuan Terkecil (KPK) untuk menentukan periode pertemuan kejadian berulang.',
          solution:
            'Tentukan KPK dari $36$ dan $48$:\n$$36 = 2^2 \\times 3^2, \\qquad 48 = 2^4 \\times 3$$\n$$\\text{KPK}(36, 48) = 2^4 \\times 3^2 = 16 \\times 9 = 144\\text{ menit}$$\nKonversi $144$ menit ke jam dan menit:\n$$144\\text{ menit} = 2\\text{ jam } 24\\text{ menit}$$\nWaktu dering bersamaan berikutnya adalah:\n$$08.00 + 02.24 = 10.24$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'When a positive integer $M$ is divided by $8$, the remainder is $5$. What is the remainder when $3M$ is divided by $8$?\n\nA. $1$\nB. $3$\nC. $5$\nD. $7$',
          answer: 'D. $7$',
          principle: 'Compatibility of modular arithmetic with multiplication: if $M \\equiv r \\pmod{m}$, then $kM \\equiv kr \\pmod{m}$.',
          solution:
            'Since $M$ leaves a remainder of $5$ when divided by $8$:\n$$M \\equiv 5 \\pmod{8}$$\nMultiply both sides by $3$:\n$$3M \\equiv 3 \\times 5 = 15 \\equiv 7 \\pmod{8}$$\nSo the remainder when $3M$ is divided by $8$ is $7$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Jika $x$ dan $y$ adalah bilangan bulat positif yang memenuhi persamaan $x^2 - y^2 = 17$, berapakah nilai dari $x \\times y$?\n\nA. $36$\nB. $72$\nC. $81$\nD. $144$',
          answer: 'B. $72$',
          principle: 'Pemfaktoran selisih dua kuadrat $x^2 - y^2 = (x - y)(x + y)$ dan sifat faktor bilangan prima.',
          solution:
            'Faktorkan ruas kiri sebagai selisih kuadrat:\n$$(x - y)(x + y) = 17$$\nKarena $17$ adalah bilangan prima serta $x, y$ bilangan bulat positif (sehingga $x + y > x - y > 0$), maka haruslah:\n$$x - y = 1 \\quad \\text{dan} \\quad x + y = 17$$\nJumlahkan kedua persamaan:\n$$2x = 18 \\implies x = 9, \\qquad y = 8$$\nJadi, nilai $x \\times y = 9 \\times 8 = 72$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'How many positive integers from $1$ to $30$ are relatively prime (coprime) to $30$?\n\nA. $6$\nB. $8$\nC. $10$\nD. $12$',
          answer: 'B. $8$',
          principle: "Euler's totient function $\\varphi(n) = n \\prod_{p \\mid n} \\left(1 - \\frac{1}{p}\\right)$ counts integers in $\\{1, \\dots, n\\}$ coprime to $n$.",
          solution:
            'An integer is coprime to $30 = 2 \\times 3 \\times 5$ if and only if it is divisible by none of $2$, $3$, or $5$. Over the full period of $30$ integers from $1$ to $30$, divisibility by distinct primes $2$, $3$, and $5$ is independent: removing multiples of $2$ leaves $1 - \\frac{1}{2}$ of the integers, removing multiples of $3$ leaves $1 - \\frac{1}{3}$ of those, and removing multiples of $5$ leaves $1 - \\frac{1}{5}$ (Euler’s totient formula):\n$$\\varphi(30) = 30 \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{5}\\right) = 30 \\times \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{4}{5} = 8$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Sisa pembagian bilangan $5^{2026}$ oleh $6$ adalah...\n\nA. $1$\nB. $2$\nC. $4$\nD. $5$',
          answer: 'A. $1$',
          principle: 'Aritmetika modular untuk perpangkatan dengan substitusi kongruensi negatif $5 \\equiv -1 \\pmod{6}$.',
          solution:
            'Perhatikan bahwa $5 \\equiv -1 \\pmod{6}$. Pangkatkan kedua ruas dengan $2026$:\n$$5^{2026} \\equiv (-1)^{2026} \\pmod{6}$$\nKarena $2026$ adalah bilangan genap, $(-1)^{2026} = 1$, sehingga:\n$$5^{2026} \\equiv 1 \\pmod{6}$$\nSisa pembagiannya adalah $1$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Evaluate the exact value of:\n$$\\frac{1}{2 \\times 3} + \\frac{1}{3 \\times 4} + \\frac{1}{4 \\times 5} + \\dots + \\frac{1}{9 \\times 10}$$\n\nA. $\\frac{1}{5}$\nB. $\\frac{2}{9}$\nC. $\\frac{2}{5}$\nD. $\\frac{4}{9}$',
          answer: 'C. $\\frac{2}{5}$',
          principle: 'Telescoping sum decomposition $\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}$.',
          solution:
            'Rewrite each term using $\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}$:\n$$\\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{5}\\right) + \\cdots + \\left(\\frac{1}{9} - \\frac{1}{10}\\right)$$\nAll intermediate terms cancel out, leaving:\n$$= \\frac{1}{2} - \\frac{1}{10} = \\frac{5}{10} - \\frac{1}{10} = \\frac{4}{10} = \\frac{2}{5}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Kelipatan Persekutuan Terkecil (KPK) dari dua bilangan adalah $420$ dan Faktor Persekutuan Terbesar (FPB)-nya adalah $14$. Jika bilangan pertama adalah $70$, maka bilangan kedua adalah...\n\nA. $42$\nB. $56$\nC. $84$\nD. $112$',
          answer: 'C. $84$',
          principle: 'Identitas dasar hubungan dua bilangan bulat positif dengan KPK dan FPB: $a \\times b = \\text{KPK}(a, b) \\times \\text{FPB}(a, b)$.',
          solution:
            'Gunakan sifat $\\text{Bilangan}_1 \\times \\text{Bilangan}_2 = \\text{KPK} \\times \\text{FPB}$:\n$$70 \\times \\text{Bilangan}_2 = 420 \\times 14$$\n$$\\text{Bilangan}_2 = \\frac{420 \\times 14}{70} = 6 \\times 14 = 84$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Which of the following numbers is equivalent to the decimal number $100$ written in base $8$ (octal)?\n\nA. $124_8$\nB. $144_8$\nC. $204_8$\nD. $244_8$',
          answer: 'B. $144_8$',
          principle: 'Convert a decimal integer to base $8$ by repeated division by $8$ and reading remainders bottom-to-top.',
          solution:
            'Divide $100$ successively by $8$:\n$$100 \\div 8 = 12\\text{ remainder } 4$$\n$$12 \\div 8 = 1\\text{ remainder } 4$$\n$$1 \\div 8 = 0\\text{ remainder } 1$$\nReading the remainders from bottom to top gives $144_8$ (check: $1 \\times 64 + 4 \\times 8 + 4 = 100$).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Nilai dari bentuk akar bersarang tak hingga $\\sqrt{12 + \\sqrt{12 + \\sqrt{12 + \\dots}}}$ adalah...\n\nA. $3$\nB. $4$\nC. $6$\nD. $12$',
          answer: 'B. $4$',
          principle: 'Memisalkan ekspresi akar bersarang tak hingga sebagai variabel $x > 0$ lalu membentuk persamaan kuadrat $x^2 = a + x$.',
          solution:
            'Misalkan $x = \\sqrt{12 + \\sqrt{12 + \\sqrt{12 + \\dots}}}$ dengan $x > 0$. Kuadratkan kedua ruas:\n$$x^2 = 12 + x \\implies x^2 - x - 12 = 0$$\nFaktorkan persamaan kuadrat:\n$$(x - 4)(x + 3) = 0$$\nKarena hasil akar kuadrat bernilai positif, maka $x = 4$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'If $a = 2^{50}$, $b = 3^{40}$, and $c = 4^{30}$, which of the following inequalities represents the correct order from smallest to largest?\n\nA. $a < b < c$\nB. $a < c < b$\nC. $c < a < b$\nD. $b < c < a$',
          answer: 'B. $a < c < b$',
          principle: 'Compare large powers by rewriting them with a common exponent using $(x^m)^n = x^{mn}$.',
          solution:
            'Express $a$, $b$, and $c$ with a common exponent of $10$:\n$$a = 2^{50} = (2^5)^{10} = 32^{10}$$\n$$b = 3^{40} = (3^4)^{10} = 81^{10}$$\n$$c = 4^{30} = (4^3)^{10} = 64^{10}$$\nSince $32 < 64 < 81$, we have:\n$$a < c < b$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Tersedia $84$ buku tulis, $126$ pensil, dan $168$ penghapus. Barang-barang tersebut akan dimasukkan ke dalam beberapa paket bungkusan dengan jumlah yang seragam untuk setiap jenis barang di semua paket. Jumlah paket paling banyak yang dapat dibuat adalah...\n\nA. $14$\nB. $21$\nC. $42$\nD. $84$',
          answer: 'C. $42$',
          principle: 'Faktor Persekutuan Terbesar (FPB) untuk membagi beberapa jenis barang menjadi paket terbanyak dengan komposisi sama.',
          solution:
            'Jumlah paket terbanyak adalah $\\text{FPB}(84, 126, 168)$:\n$$84 = 2^2 \\times 3 \\times 7$$\n$$126 = 2 \\times 3^2 \\times 7$$\n$$168 = 2^3 \\times 3 \\times 7$$\nAmbil faktor prima persekutuan dengan pangkat terkecil:\n$$\\text{FPB}(84, 126, 168) = 2 \\times 3 \\times 7 = 42$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'What is the last digit of the product $2^5 \\times 3^5 \\times 4^5$?\n\nA. $2$\nB. $4$\nC. $6$\nD. $8$',
          answer: 'B. $4$',
          principle: 'Combine powers with the same exponent via $a^n b^n c^n = (abc)^n$ and evaluate modulo $10$.',
          solution:
            'Combine the bases under the common exponent $5$:\n$$2^5 \\times 3^5 \\times 4^5 = (2 \\times 3 \\times 4)^5 = 24^5$$\nThe last digit depends only on the units digit $4$:\n$$24^5 \\equiv 4^5 \\pmod{10}$$\nPowers of $4$ cycle in units digits as $4, 6, 4, 6, \\dots$ Since the exponent $5$ is odd, the last digit is $4$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Hasil perkalian berderet dari $\\left(1 - \\frac{1}{2^2}\\right) \\times \\left(1 - \\frac{1}{3^2}\\right) \\times \\dots \\times \\left(1 - \\frac{1}{9^2}\\right)$ adalah...\n\nA. $\\frac{4}{9}$\nB. $\\frac{5}{9}$\nC. $\\frac{2}{3}$\nD. $\\frac{7}{9}$',
          answer: 'B. $\\frac{5}{9}$',
          principle: 'Perkalian teleskopik setelah memfaktorkan $1 - \\frac{1}{k^2} = \\frac{k - 1}{k} \\cdot \\frac{k + 1}{k}$.',
          solution:
            'Faktorkan setiap suku menggunakan selisih kuadrat $1 - \\frac{1}{k^2} = \\frac{(k - 1)(k + 1)}{k^2}$:\n$$\\left(\\frac{1}{2} \\times \\frac{3}{2}\\right) \\times \\left(\\frac{2}{3} \\times \\frac{4}{3}\\right) \\times \\left(\\frac{3}{4} \\times \\frac{5}{4}\\right) \\times \\cdots \\times \\left(\\frac{8}{9} \\times \\frac{10}{9}\\right)$$\nSemua suku tengah saling meniadakan (telescoping), menyisakan suku pertama dan terakhir:\n$$= \\frac{1}{2} \\times \\frac{10}{9} = \\frac{5}{9}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'The least common multiple (LCM) of three different prime numbers $p$, $q$, and $r$ is $1001$. What is the value of $p + q + r$?\n\nA. $21$\nB. $31$\nC. $41$\nD. $51$',
          answer: 'B. $31$',
          principle: 'The LCM of distinct prime numbers is their product, so factorize $1001$ into primes.',
          solution:
            'Since $p$, $q$, and $r$ are distinct primes, $\\operatorname{lcm}(p, q, r) = p \\times q \\times r = 1001$.\nFactorize $1001$:\n$$1001 = 7 \\times 143 = 7 \\times 11 \\times 13$$\nThus the three primes are $7$, $11$, and $13$, and their sum is:\n$$p + q + r = 7 + 11 + 13 = 31$$',
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
          prompt: 'Tentukan nilai eksak dari $(2023^2 - 2022^2) + (2021^2 - 2020^2)$.',
          answer: '$8086$',
          answerNumeric: [{ name: 'nilai', value: 8086, unit: '' }],
          principle: 'Identitas selisih dua kuadrat: $a^2 - b^2 = (a - b)(a + b)$.',
          solution:
            'Gunakan identitas $a^2 - b^2 = (a - b)(a + b)$ pada masing-masing pasangan:\n$$(2023 - 2022)(2023 + 2022) + (2021 - 2020)(2021 + 2020)$$\n$$= 1(4045) + 1(4041) = 4045 + 4041 = 8086$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Convert the hexadecimal (base $16$) number $\\text{A}3_{16}$ into a decimal (base $10$) number. (Note: In hex, $\\text{A} = 10$).',
          answer: '$163$',
          answerNumeric: [{ name: 'decimal', value: 163, unit: '' }],
          principle: 'Expand a base-$16$ number using place values $16^1$ and $16^0$.',
          solution:
            'In base $16$, $\\text{A} = 10$ sits in the $16^1$ place and $3$ sits in the $16^0$ place:\n$$\\text{A}3_{16} = (10 \\times 16^1) + (3 \\times 16^0) = 160 + 3 = 163$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Diketahui $\\text{FPB}(a, 36) = 12$ dan $\\text{KPK}(a, 36) = 180$. Berapakah nilai dari bilangan bulat positif $a$?',
          answer: '$60$',
          answerNumeric: [{ name: 'a', value: 60, unit: '' }],
          principle: 'Identitas $a \\times b = \\text{FPB}(a, b) \\times \\text{KPK}(a, b)$.',
          solution:
            'Terapkan sifat $a \\times b = \\text{FPB}(a, b) \\times \\text{KPK}(a, b)$:\n$$a \\times 36 = 12 \\times 180$$\n$$a = \\frac{12 \\times 180}{36} = \\frac{180}{3} = 60$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt: 'Given $\\sqrt{x} + \\sqrt{x} + \\sqrt{x} + \\sqrt{x} = 20$, find the value of $x$.',
          answer: '$25$',
          answerNumeric: [{ name: 'x', value: 25, unit: '' }],
          principle: 'Combine like radical terms and square both sides to solve for $x$.',
          solution:
            'Combine the four identical $\\sqrt{x}$ terms (with $x \\ge 0$ so $\\sqrt{x}$ is defined):\n$$4\\sqrt{x} = 20 \\implies \\sqrt{x} = 5$$\nBecause both sides are non-negative, squaring gives the unique solution:\n$$x = 5^2 = 25$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt: 'Berapakah sisa pembagian $2^{20} + 3^{20}$ jika dibagi oleh $5$?',
          answer: '$2$',
          answerNumeric: [{ name: 'sisa', value: 2, unit: '' }],
          principle: 'Aritmetika modular modulo $5$: $2^4 \\equiv 1 \\pmod{5}$ dan $3^4 \\equiv 1 \\pmod{5}$.',
          solution:
            'Perhatikan bahwa $2^4 = 16 \\equiv 1 \\pmod{5}$ dan $3^4 = 81 \\equiv 1 \\pmod{5}$.\nMaka:\n$$2^{20} = (2^4)^5 \\equiv 1^5 = 1 \\pmod{5}$$\n$$3^{20} = (3^4)^5 \\equiv 1^5 = 1 \\pmod{5}$$\nSehingga:\n$$2^{20} + 3^{20} \\equiv 1 + 1 = 2 \\pmod{5}$$\nSisa pembagiannya adalah $2$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'A rectangular floor with dimensions $360\\text{ cm}$ by $432\\text{ cm}$ is to be tiled with identical square tiles. What is the side length (in cm) of the largest square tile that can perfectly cover the floor?',
          answer: '$72\\text{ cm}$',
          answerNumeric: [{ name: 'sideLength', value: 72, unit: 'cm' }],
          principle: 'The largest square tile side length dividing both dimensions evenly is $\\gcd(360, 432)$.',
          solution:
            'Find $\\gcd(360, 432)$ using the Euclidean algorithm:\n$$432 = 1 \\times 360 + 72$$\n$$360 = 5 \\times 72 + 0$$\nHence $\\gcd(360, 432) = 72$, so the largest square tile has side length $72\\text{ cm}$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt: 'Jika diketahui $x + \\frac{1}{x} = 4$, berapakah nilai dari $x^2 + \\frac{1}{x^2}$?',
          answer: '$14$',
          answerNumeric: [{ name: 'nilai', value: 14, unit: '' }],
          principle: 'Identitas aljabar $\\left(x + \\frac{1}{x}\\right)^2 = x^2 + 2 + \\frac{1}{x^2}$.',
          solution:
            'Kuadratkan kedua ruas persamaan $x + \\frac{1}{x} = 4$:\n$$\\left(x + \\frac{1}{x}\\right)^2 = 4^2$$\n$$x^2 + 2(x)\\left(\\frac{1}{x}\\right) + \\frac{1}{x^2} = 16$$\n$$x^2 + 2 + \\frac{1}{x^2} = 16 \\implies x^2 + \\frac{1}{x^2} = 16 - 2 = 14$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Find the remainder when the sum $1! + 2! + 3! + 4! + 5! + \\dots + 10!$ is divided by $10$.',
          answer: '$3$',
          answerNumeric: [{ name: 'remainder', value: 3, unit: '' }],
          principle: 'For $n \\ge 5$, $n!$ contains both $2$ and $5$ as factors, so $n! \\equiv 0 \\pmod{10}$.',
          solution:
            'Since every factorial $n!$ for $n \\ge 5$ is a multiple of $10$, we only need the sum of the first four terms modulo $10$:\n$$1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33$$\nDividing $33$ by $10$ gives a remainder of $3$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Hasil operasi bilangan $\\frac{10^8 - 10^6}{10^7}$ jika dituliskan dalam bentuk pecahan desimal adalah...',
          answer: '$9{,}9$',
          answerNumeric: [{ name: 'nilai', value: 9.9, unit: '' }],
          principle: 'Pemfaktoran pangkat basis $10$: $10^n - 10^m = 10^m(10^{n - m} - 1)$.',
          solution:
            'Faktorkan $10^6$ pada pembilang:\n$$\\frac{10^8 - 10^6}{10^7} = \\frac{10^6(10^2 - 1)}{10^7} = \\frac{99 \\times 10^6}{10^7} = \\frac{99}{10} = 9{,}9$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt: 'What is the greatest three-digit number that is a common multiple of $4$, $5$, and $6$?',
          answer: '$960$',
          answerNumeric: [{ name: 'number', value: 960, unit: '' }],
          principle: 'Any common multiple of $4$, $5$, and $6$ is a multiple of $\\operatorname{lcm}(4, 5, 6)$.',
          solution:
            'Any common multiple of $4$, $5$, and $6$ is a multiple of their LCM. Using the prime factorizations $4 = 2^2$, $5 = 5$, and $6 = 2 \\times 3$:\n$$\\operatorname{lcm}(4, 5, 6) = 2^2 \\times 3 \\times 5 = 60$$\nSince the greatest three-digit integer is $999$, divide $999$ by $60$ to find the largest multiple of $60$ at most $999$:\n$$999 = 16 \\times 60 + 39 \\implies 16 \\times 60 = 960$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
