/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SMP Kelas 7–8 – Basic 1
 * Sumber: Duta e-dukasi (BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7–8 – BASIC 1.pdf).
 * Bahasa dipertahankan sesuai naskah sumber untuk tiap butir soal (Keputusan D5).
 */
export default {
  id: 'olim-smp-bilangan-basic1',
  slug: 'bilangan-smp-basic-1',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  topic: 'Bilangan Olimpiade SMP Kelas 7–8 (Basic 1)',
  relatedChapterIds: ['smp7-bab1-bilangan-bulat', 'smp8-bab1-bilangan-berpangkat'],
  lang: 'id',
  langDisplay: 'ID / EN',
  competition: 'Seri Pembinaan OSN',
  title: 'Bilangan Olimpiade Matematika SMP Kelas 7–8 – Basic 1',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 20 soal Pilihan Ganda (Bagian A) dan 10 soal Isian Singkat (Bagian B) dengan teliti. Pertahankan bahasa masing-masing soal sesuai naskah asli.',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7\u20138 \u2013 BASIC 1.pdf',
    driveFolder: '1cBh4tYsSB8-l2fiGVEyfoes5pKtMQU2h',
    license: 'CC BY 4.0'
  },
  status: 'published',
  accessTier: 'olympiad-pro',
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
            'Nilai dari $(1 - \\frac{1}{2}) \\times (1 - \\frac{1}{3}) \\times (1 - \\frac{1}{4}) \\times \\dots \\times (1 - \\frac{1}{10})$ adalah...\n\nA. $\\frac{1}{5}$\nB. $\\frac{1}{10}$\nC. $\\frac{1}{9}$\nD. $\\frac{1}{2}$',
          answer: 'B. $\\frac{1}{10}$',
          principle: 'Perkalian teleskopik (telescoping product) pada deret pecahan.',
          solution:
            'Ubah setiap suku dalam kurung menjadi pecahan tunggal:\n$$\\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{4}\\right)\\cdots\\left(1 - \\frac{1}{10}\\right) = \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\cdots \\times \\frac{9}{10}$$\nSeluruh pembilang dan penyebut di tengah saling meniadakan (telescoping), sehingga tersisa pembilang pertama dan penyebut terakhir:\n$$= \\frac{1}{10}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'The greatest common divisor (GCD) of two numbers is $12$ and their least common multiple (LCM) is $144$. If one of the numbers is $36$, what is the other number?\n\nA. $24$\nB. $48$\nC. $72$\nD. $60$',
          answer: 'B. $48$',
          principle: 'Fundamental identity relating product, GCD, and LCM: $a \\times b = \\gcd(a, b) \\times \\operatorname{lcm}(a, b)$.',
          solution:
            'Using the identity $a \\times b = \\gcd(a, b) \\times \\operatorname{lcm}(a, b)$ with $a = 36$:\n$$36 \\times b = 12 \\times 144$$\nDivide both sides by $36$ and simplify before multiplying:\n$$b = \\frac{12 \\times 144}{36} = \\frac{144}{3} = 48$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Angka satuan dari bilangan $3^{2026}$ adalah...\n\nA. $1$\nB. $3$\nC. $7$\nD. $9$',
          answer: 'D. $9$',
          principle: 'Pola periodik angka satuan perpangkatan modulo $10$.',
          solution:
            'Pola angka satuan untuk pangkat dari $3$ berulang dengan periode $4$:\n$$3^1 \\equiv 3, \\quad 3^2 \\equiv 9, \\quad 3^3 \\equiv 7, \\quad 3^4 \\equiv 1 \\pmod{10}$$\nKarena $2026 = 4 \\times 506 + 2$ (bersisa $2$ saat dibagi $4$), angka satuan $3^{2026}$ sama dengan angka satuan $3^2$, yaitu $9$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'If $2^x = 8$, what is the value of $3^{x + 1}$?\n\nA. $27$\nB. $81$\nC. $243$\nD. $9$',
          answer: 'B. $81$',
          principle: 'Solving basic exponential equations by matching bases.',
          solution:
            'Rewrite $8$ as a power of $2$:\n$$2^x = 8 = 2^3 \\implies x = 3$$\nSubstitute $x = 3$ into $3^{x + 1}$:\n$$3^{3 + 1} = 3^4 = 81$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Lampu merah menyala setiap $15$ detik, lampu kuning setiap $20$ detik, dan lampu hijau setiap $25$ detik. Jika ketiga lampu menyala bersamaan pada pukul $10.00$, setelah berapa menit ketiga lampu tersebut akan menyala bersamaan untuk kedua kalinya?\n\nA. $3\\text{ menit}$\nB. $4\\text{ menit}$\nC. $5\\text{ menit}$\nD. $6\\text{ menit}$',
          answer: 'C. $5\\text{ menit}$',
          principle: 'Kelipatan Persekutuan Terkecil (KPK) untuk kejadian berulang bersamaan.',
          solution:
            'Waktu menyala bersamaan berikutnya adalah KPK dari $15$, $20$, dan $25$:\n$$15 = 3 \\times 5, \\quad 20 = 2^2 \\times 5, \\quad 25 = 5^2$$\n$$\\text{KPK} = 2^2 \\times 3 \\times 5^2 = 4 \\times 3 \\times 25 = 300\\text{ detik} = \\frac{300}{60}\\text{ menit} = 5\\text{ menit}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Which of the following is the binary (base $2$) representation of the decimal number $45$?\n\nA. $101001_2$\nB. $101101_2$\nC. $110101_2$\nD. $100111_2$',
          answer: 'B. $101101_2$',
          principle: 'Decimal-to-binary conversion via sum of powers of $2$.',
          solution:
            'Decompose $45$ into powers of $2$:\n$$45 = 32 + 8 + 4 + 1 = 1(2^5) + 0(2^4) + 1(2^3) + 1(2^2) + 0(2^1) + 1(2^0)$$\nThus, the binary representation of $45$ is $101101_2$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Bentuk paling sederhana dari operasi $\\sqrt{50} + \\sqrt{18} - \\sqrt{8}$ adalah...\n\nA. $4\\sqrt{2}$\nB. $5\\sqrt{2}$\nC. $6\\sqrt{2}$\nD. $8\\sqrt{2}$',
          answer: 'C. $6\\sqrt{2}$',
          principle: 'Penyederhanaan bentuk akar senama.',
          solution:
            'Sederhanakan setiap bentuk akar dengan faktor kuadrat sempurna:\n$$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}, \\quad \\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}, \\quad \\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$$\nJumlahkan dan kurangkan suku-suku sejenis:\n$$5\\sqrt{2} + 3\\sqrt{2} - 2\\sqrt{2} = 6\\sqrt{2}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'How many positive integer divisors does the number $72$ have?\n\nA. $10$\nB. $12$\nC. $14$\nD. $16$',
          answer: 'B. $12$',
          principle: 'Divisor counting formula $\\tau(n) = \\prod (e_i + 1)$ from prime factorization.',
          solution:
            'Find the prime factorization of $72$:\n$$72 = 2^3 \\times 3^2$$\nEvery positive divisor of $72$ has the form $2^a \\times 3^b$, where $a \\in \\{0, 1, 2, 3\\}$ ($3 + 1 = 4$ choices) and $b \\in \\{0, 1, 2\\}$ ($2 + 1 = 3$ choices). By the multiplication principle, the total number of divisors is:\n$$(3 + 1)(2 + 1) = 4 \\times 3 = 12$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Jika hari ini adalah hari Rabu, maka $100$ hari dari sekarang adalah hari...\n\nA. Kamis\nB. Jumat\nC. Sabtu\nD. Minggu',
          answer: 'B. Jumat',
          principle: 'Aritmetika modular modulo $7$ pada siklus hari.',
          solution:
            'Nama hari berulang setiap $7$ hari. Cari sisa pembagian $100$ oleh $7$:\n$$100 = 7 \\times 14 + 2 \\implies 100 \\equiv 2 \\pmod{7}$$\nDua hari setelah hari Rabu adalah hari Jumat.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Which of the following fractions has the largest value?\n\nA. $\\frac{3}{4}$\nB. $\\frac{4}{5}$\nC. $\\frac{5}{6}$\nD. $\\frac{6}{7}$',
          answer: 'D. $\\frac{6}{7}$',
          principle: 'Comparing fractions via their complement to $1$.',
          solution:
            'Write each fraction as $1 - \\frac{1}{k}$:\n$$\\frac{3}{4} = 1 - \\frac{1}{4}, \\quad \\frac{4}{5} = 1 - \\frac{1}{5}, \\quad \\frac{5}{6} = 1 - \\frac{1}{6}, \\quad \\frac{6}{7} = 1 - \\frac{1}{7}$$\nSince $\\frac{1}{7}$ is the smallest amount subtracted from $1$, $\\frac{6}{7}$ has the largest value.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Diberikan dua bilangan bulat $p = 2^3 \\times 3^2 \\times 5$ dan $q = 2^2 \\times 3^3 \\times 7$. Faktor Persekutuan Terbesar (FPB) dari $p$ dan $q$ adalah...\n\nA. $12$\nB. $18$\nC. $36$\nD. $72$',
          answer: 'C. $36$',
          principle: 'Menentukan FPB dari faktorisasi prima dengan pangkat terkecil faktor persekutuan.',
          solution:
            'Ambil faktor prima yang sama pada $p = 2^3 \\times 3^2 \\times 5$ dan $q = 2^2 \\times 3^3 \\times 7$ dengan pangkat terkecil:\n$$\\text{FPB}(p, q) = 2^2 \\times 3^2 = 4 \\times 9 = 36$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'In base $5$ arithmetic, evaluate the sum of $23_5 + 14_5$.\n\nA. $37_5$\nB. $42_5$\nC. $41_5$\nD. $102_5$',
          answer: 'B. $42_5$',
          principle: 'Column addition with carrying in base $5$.',
          solution:
            'Add the units column in base $5$:\n$$3 + 4 = 7 = 1 \\times 5 + 2$$\nWrite down $2$ and carry $1$ to the $5$s place. Then add the $5$s column:\n$$2 + 1 + 1 = 4$$\nHence, $23_5 + 14_5 = 42_5$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Jika $a + b = 10$ dan $a \\times b = 21$, maka nilai dari $a^2 + b^2$ adalah...\n\nA. $42$\nB. $58$\nC. $79$\nD. $100$',
          answer: 'B. $58$',
          principle: 'Identitas aljabar $(a + b)^2 = a^2 + b^2 + 2ab$.',
          solution:
            'Gunakan identitas kuadrat jumlah:\n$$(a + b)^2 = a^2 + b^2 + 2ab$$\n$$10^2 = a^2 + b^2 + 2(21) \\implies 100 = a^2 + b^2 + 42$$\n$$a^2 + b^2 = 100 - 42 = 58$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Find the smallest positive integer that is a multiple of $6$, $8$, and $9$.\n\nA. $48$\nB. $72$\nC. $144$\nD. $216$',
          answer: 'B. $72$',
          principle: 'Least Common Multiple (LCM) using highest powers of prime factors.',
          solution:
            'Factorize each number into primes:\n$$6 = 2 \\times 3, \\quad 8 = 2^3, \\quad 9 = 3^2$$\nTake the highest power of each prime:\n$$\\operatorname{LCM}(6, 8, 9) = 2^3 \\times 3^2 = 8 \\times 9 = 72$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Sisa pembagian $2^{10}$ oleh $7$ adalah...\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$',
          answer: 'B. $2$',
          principle: 'Aritmetika modular untuk perpangkatan bilangan.',
          solution:
            'Perhatikan bahwa $2^3 = 8 \\equiv 1 \\pmod{7}$. Oleh karena itu:\n$$2^{10} = (2^3)^3 \\times 2^1 \\equiv 1^3 \\times 2 \\equiv 2 \\pmod{7}$$\nJadi, sisa pembagian $2^{10}$ oleh $7$ adalah $2$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'What is the value of $1 - 2 + 3 - 4 + 5 - 6 + \\dots + 99 - 100$?\n\nA. $-50$\nB. $0$\nC. $50$\nD. $-100$',
          answer: 'A. $-50$',
          principle: 'Pairing consecutive terms in an alternating arithmetic series.',
          solution:
            'Group consecutive pairs of terms:\n$$(1 - 2) + (3 - 4) + (5 - 6) + \\dots + (99 - 100)$$\nEach pair equals $-1$. Since there are $100$ terms, there are $50$ pairs:\n$$50 \\times (-1) = -50$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Ibu membagikan $48$ apel dan $60$ jeruk ke dalam beberapa keranjang. Jika tiap keranjang harus memuat apel dan jeruk dengan jumlah yang sama rata antar keranjang, berapakah jumlah maksimal keranjang yang dapat disiapkan?\n\nA. $6$\nB. $8$\nC. $12$\nD. $24$',
          answer: 'C. $12$',
          principle: 'Aplikasi Faktor Persekutuan Terbesar (FPB) dalam pembagian sama rata.',
          solution:
            'Agar $48$ apel dan $60$ jeruk terbagi sama rata ke setiap keranjang tanpa sisa, banyak keranjang harus membagi habis $48$ sekaligus $60$ (faktor persekutuan). Untuk memperoleh jumlah keranjang maksimal, kita cari FPB dari $48$ dan $60$:\n$$48 = 2^4 \\times 3, \\qquad 60 = 2^2 \\times 3 \\times 5$$\nAmbil faktor prima yang sama dengan pangkat terkecil:\n$$\\text{FPB}(48, 60) = 2^2 \\times 3 = 12\\text{ keranjang}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'The sum of two consecutive positive integers is always:\n\nA. An even number\nB. An odd number\nC. A prime number\nD. A multiple of $3$',
          answer: 'B. An odd number',
          principle: 'Parity of the sum of two consecutive integers.',
          solution:
            'Let the two consecutive positive integers be $n$ and $n + 1$. Their sum is:\n$$n + (n + 1) = 2n + 1$$\nAny integer of the form $2n + 1$ is always an odd number.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Jika $9^n = 27$, maka nilai $n$ adalah...\n\nA. $1$\nB. $1{,}5$\nC. $2$\nD. $3$',
          answer: 'B. $1{,}5$',
          principle: 'Menyamakan bilangan pokok pada persamaan eksponen.',
          solution:
            'Ubah kedua ruas ke basis $3$:\n$$9^n = (3^2)^n = 3^{2n} \\quad \\text{dan} \\quad 27 = 3^3$$\nSehingga $3^{2n} = 3^3$, maka:\n$$2n = 3 \\implies n = \\frac{3}{2} = 1{,}5$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'A positive integer leaves a remainder of $2$ when divided by $5$, and a remainder of $1$ when divided by $3$. Which of the following could be the number?\n\nA. $7$\nB. $12$\nC. $17$\nD. $23$',
          answer: 'A. $7$',
          principle: 'Solving a system of linear congruences.',
          solution:
            'Let the positive integer be $n$. The first condition gives $n \\equiv 2 \\pmod{5}$, so we can write $n = 5k + 2$ for some integer $k \\ge 0$. Substitute into the second condition $n \\equiv 1 \\pmod{3}$:\n$$5k + 2 \\equiv 1 \\pmod{3} \\implies 2k \\equiv -1 \\equiv 2 \\pmod{3}$$\nSince $\\gcd(2, 3) = 1$, dividing both sides by $2$ yields $k \\equiv 1 \\pmod{3}$, so $k = 3m + 1$ for an integer $m \\ge 0$. Hence:\n$$n = 5(3m + 1) + 2 = 15m + 7$$\nThus, valid integers are $7, 22, 37, \\dots$ Among the given choices, only $7$ (option A) satisfies $n \\equiv 7 \\pmod{15}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Isian Singkat',
      marks: 10,
      stem: 'Isilah jawaban akhir yang tepat dan eksak untuk setiap soal berikut (10 soal, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Hitunglah nilai dari $\\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12} + \\frac{1}{20} + \\frac{1}{30}$.',
          answer: '$\\frac{5}{6}$',
          principle: 'Deret teleskopik (telescoping series) menggunakan dekomposisi $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$.',
          solution:
            'Pecah setiap suku menjadi selisih dua pecahan:\n$$\\frac{1}{2} = 1 - \\frac{1}{2}, \\quad \\frac{1}{6} = \\frac{1}{2} - \\frac{1}{3}, \\quad \\frac{1}{12} = \\frac{1}{3} - \\frac{1}{4}, \\quad \\frac{1}{20} = \\frac{1}{4} - \\frac{1}{5}, \\quad \\frac{1}{30} = \\frac{1}{5} - \\frac{1}{6}$$\nJumlahkan seluruhnya sehingga suku tengah saling meniadakan:\n$$\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{5}\\right) + \\left(\\frac{1}{5} - \\frac{1}{6}\\right) = 1 - \\frac{1}{6} = \\frac{5}{6}$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt: 'What is the greatest common divisor (GCD) of $120$ and $150$?',
          answer: '$30$',
          answerNumeric: [{ name: 'gcd', value: 30, unit: '' }],
          principle: 'Greatest Common Divisor from the lowest powers of common prime factors.',
          solution:
            'Prime factorize both numbers:\n$$120 = 2^3 \\times 3 \\times 5, \\qquad 150 = 2 \\times 3 \\times 5^2$$\nMultiply the lowest power of each common prime factor:\n$$\\gcd(120, 150) = 2^1 \\times 3^1 \\times 5^1 = 30$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Diketahui bilangan kelipatan $5$ yang lebih besar dari $0$ dan kurang dari $50$. Berapa banyak dari bilangan-bilangan tersebut yang bersisa $1$ jika dibagi $3$?',
          answer: '$3$ bilangan',
          answerNumeric: [{ name: 'banyakBilangan', value: 3, unit: 'bilangan' }],
          principle: 'Kongruensi linear modulo $3$ untuk kelipatan suatu bilangan.',
          solution:
            'Setiap bilangan kelipatan $5$ antara $0$ dan $50$ berbentuk $n = 5k$ dengan bilangan bulat $1 \\le k \\le 9$ (karena $0 < 5k < 50$). Syarat bersisa $1$ saat dibagi $3$ berarti:\n$$5k \\equiv 1 \\pmod{3}$$\nKarena $5 \\equiv 2 \\pmod{3}$, kongruensi ini menjadi:\n$$2k \\equiv 1 \\equiv 4 \\pmod{3}$$\nDengan $\\gcd(2, 3) = 1$, bagi kedua ruas dengan $2$ sehingga diperoleh $k \\equiv 2 \\pmod{3}$. Untuk $1 \\le k \\le 9$, nilai $k$ yang memenuhi adalah $k = 2, 5, 8$ (menghasilkan $10, 25,$ dan $40$). Jadi, terdapat $3$ bilangan.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt: 'Evaluate the exact value of the expression: $\\sqrt{13^2 - 12^2}$.',
          answer: '$5$',
          answerNumeric: [{ name: 'value', value: 5, unit: '' }],
          principle: 'Difference of squares identity $a^2 - b^2 = (a - b)(a + b)$.',
          solution:
            'Apply the difference of squares:\n$$13^2 - 12^2 = (13 - 12)(13 + 12) = 1 \\times 25 = 25$$\nTake the positive square root:\n$$\\sqrt{25} = 5$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Jumlah dua bilangan bulat positif adalah $36$ dan Kelipatan Persekutuan Terkecil (KPK) keduanya adalah $105$. Tentukan hasil kali kedua bilangan tersebut.',
          answer: '$315$',
          answerNumeric: [{ name: 'hasilKali', value: 315, unit: '' }],
          principle: 'Hubungan $\\text{FPB}(a + b, \\text{KPK}(a, b)) = \\text{FPB}(a, b)$ serta identitas $a \\times b = \\text{FPB}(a, b) \\times \\text{KPK}(a, b)$.',
          solution:
            'Misalkan $d = \\text{FPB}(a, b)$, sehingga dapat ditulis $a = dx$ dan $b = dy$ dengan $x, y$ bilangan bulat positif dan $\\text{FPB}(x, y) = 1$. Maka:\n$$a + b = d(x + y) = 36 \\qquad \\text{dan} \\qquad \\text{KPK}(a, b) = dxy = 105$$\nKarena $\\text{FPB}(x, y) = 1$, tidak ada bilangan prima yang membagi sekaligus $x + y$ dan $xy$ (jika prima $p \\mid xy$, maka $p \\mid x$ atau $p \\mid y$, sehingga $p$ tidak dapat membagi $x + y$). Akibatnya $\\text{FPB}(x + y, xy) = 1$, sehingga:\n$$d = \\text{FPB}(d(x + y), dxy) = \\text{FPB}(36, 105) = 3$$\n(karena $36 = 2^2 \\times 3^2$ dan $105 = 3 \\times 5 \\times 7$). Dengan identitas $a \\times b = \\text{FPB}(a, b) \\times \\text{KPK}(a, b)$, langsung diperoleh:\n$$a \\times b = 3 \\times 105 = 315$$\n(Sebagai verifikasi, $x + y = 12$ dan $xy = 35$ memberikan $\\{x, y\\} = \\{5, 7\\}$, yakni kedua bilangan adalah $15$ dan $21$.)',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Find the smallest positive integer $n > 1$ such that $n$ leaves a remainder of $1$ when divided by $2$, $3$, $4$, $5$, and $6$.',
          answer: '$61$',
          answerNumeric: [{ name: 'n', value: 61, unit: '' }],
          principle: 'Common remainder condition: $n - 1$ is divisible by $\\operatorname{LCM}(2, 3, 4, 5, 6)$.',
          solution:
            'Since $n$ leaves a remainder of $1$ when divided by $2, 3, 4, 5,$ and $6$, the number $n - 1$ must be divisible by each of $2, 3, 4, 5,$ and $6$, i.e., $n - 1$ is a common multiple of them. Using prime factorization ($4 = 2^2$ and $6 = 2 \\times 3$):\n$$\\operatorname{LCM}(2, 3, 4, 5, 6) = 2^2 \\times 3 \\times 5 = 60$$\nBecause $n > 1$, we require $n - 1 > 0$ (excluding $n - 1 = 0$, which would give $n = 1$). Thus, the smallest positive multiple is $n - 1 = 60$, yielding:\n$$n = 61$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Jika $x = 0{,}333\\dots$ dan $y = 0{,}666\\dots$, tentukan nilai eksak dari $(x + y)^2$.',
          answer: '$1$',
          answerNumeric: [{ name: 'nilai', value: 1, unit: '' }],
          principle: 'Konversi desimal berulang menjadi pecahan rasional eksak.',
          solution:
            'Ubah desimal berulang ke bentuk pecahan rasional eksak. Untuk $x = 0{,}333\\dots$, kalikan dengan $10$ lalu kurangkan:\n$$10x - x = 3{,}333\\dots - 0{,}333\\dots \\implies 9x = 3 \\implies x = \\frac{3}{9} = \\frac{1}{3}$$\nDengan cara serupa, $y = 0{,}666\\dots = 2x = \\frac{2}{3}$ (atau $9y = 6 \\implies y = \\frac{2}{3}$). Maka:\n$$x + y = \\frac{1}{3} + \\frac{2}{3} = 1 \\implies (x + y)^2 = 1^2 = 1$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'The product of two integer numbers is $864$ and their greatest common divisor (GCD) is $12$. What is their least common multiple (LCM)?',
          answer: '$72$',
          answerNumeric: [{ name: 'lcm', value: 72, unit: '' }],
          principle: 'Identity $\\gcd(x, y) \\times \\operatorname{lcm}(x, y) = x \\times y$.',
          solution:
            'Using $\\gcd(x, y) \\times \\operatorname{lcm}(x, y) = x \\times y$:\n$$12 \\times \\operatorname{lcm}(x, y) = 864$$\n$$\\operatorname{lcm}(x, y) = \\frac{864}{12} = 72$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt: 'Tuliskan representasi bilangan desimal $27$ dalam basis $2$ (sistem biner).',
          answer: '$11011_2$',
          principle: 'Konversi bilangan desimal ke basis $2$ menggunakan penjumlahan pangkat $2$.',
          solution:
            'Jabarkan $27$ ke dalam jumlah pangkat $2$:\n$$27 = 16 + 8 + 2 + 1 = 1(2^4) + 1(2^3) + 0(2^2) + 1(2^1) + 1(2^0)$$\nJadi, representasi biner dari $27$ adalah $11011_2$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt: 'Calculate the value of $2^4 \\times 5^3$.',
          answer: '$2000$',
          answerNumeric: [{ name: 'value', value: 2000, unit: '' }],
          principle: 'Grouping $2 \\times 5 = 10$ via exponent laws $a^n b^n = (ab)^n$.',
          solution:
            'Split $2^4$ as $2 \\times 2^3$ to pair with $5^3$:\n$$2^4 \\times 5^3 = 2 \\times (2^3 \\times 5^3) = 2 \\times (2 \\times 5)^3 = 2 \\times 10^3 = 2 \\times 1000 = 2000$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
