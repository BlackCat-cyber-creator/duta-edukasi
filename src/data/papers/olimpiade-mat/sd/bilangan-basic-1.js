/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SD Kelas 4–5 – Basic 1
 * Sumber: BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4–5 – BASIC 1.pdf (Duta e-dukasi).
 * Bahasa asli tiap butir soal (Indonesia / Inggris) dipertahankan sesuai Keputusan D5.
 */
export default {
  id: 'olim-sd-bilangan-basic1',
  slug: 'bilangan-sd-basic-1',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  topic: 'Bilangan Olimpiade SD Kelas 4–5 (Basic 1)',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan'
  ],
  lang: 'id',
  langDisplay: 'ID / EN',
  competition: 'Seri Pembinaan OSN',
  title: 'Bilangan Olimpiade Matematika SD Kelas 4–5 – Basic 1',
  totalMarks: 40,
  instructions:
    'Kerjakan seluruh 40 soal (25 Pilihan Ganda pada Bagian A dan 15 Isian Singkat pada Bagian B). Setiap soal dipertahankan dalam bahasa aslinya (Bahasa Indonesia atau Bahasa Inggris).',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4\u20135 \u2013 BASIC 1.pdf',
    driveFolder: '1cBh4tYsSB8-l2fiGVEyfoes5pKtMQU2h',
    license: 'CC BY 4.0'
  },
  status: 'published',
  accessTier: 'free',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Pilihan Ganda',
      marks: 25,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal (nomor 1–25).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Tentukan hasil dari $25 \\times 18 - 25 \\times 8$.\nA. 200\nB. 250\nC. 300\nD. 350',
          answer: 'B. 250',
          principle:
            'Sifat distributif perkalian terhadap pengurangan: $a \\times b - a \\times c = a \\times (b - c)$.',
          solution:
            'Gunakan sifat distributif:\n$$25 \\times 18 - 25 \\times 8 = 25 \\times (18 - 8) = 25 \\times 10 = 250.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Find the greatest common factor (GCF) of $36$ and $48$.\nA. 6\nB. 8\nC. 12\nD. 24',
          answer: 'C. 12',
          principle:
            'The greatest common factor (GCF) of two integers is the largest positive integer that divides both numbers without a remainder.',
          solution:
            'Factors of $36$ are $1, 2, 3, 4, 6, 9, 12, 18, 36$.\nFactors of $48$ are $1, 2, 3, 4, 6, 8, 12, 16, 24, 48$.\nThe greatest common factor is $12$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Manakah dari bilangan berikut yang merupakan bilangan prima?\nA. 51\nB. 57\nC. 87\nD. 97',
          answer: 'D. 97',
          principle:
            'Bilangan prima adalah bilangan asli lebih dari $1$ yang hanya memiliki dua faktor pembagi, yaitu $1$ dan dirinya sendiri.',
          solution:
            '$51 = 3 \\times 17$ (habis dibagi $3$), $57 = 3 \\times 19$ (habis dibagi $3$), dan $87 = 3 \\times 29$ (habis dibagi $3$) adalah bilangan komposit.\n$97$ hanya bisa dibagi $1$ dan $97$, sehingga $97$ merupakan bilangan prima.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'What is the value of $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8}$?\nA. $\\frac{3}{14}$\nB. $\\frac{7}{8}$\nC. $\\frac{3}{8}$\nD. $\\frac{5}{8}$',
          answer: 'B. $\\frac{7}{8}$',
          principle:
            'Add fractions by rewriting them with a common denominator equal to the LCM of their denominators.',
          solution:
            'Make common denominators ($8$):\n$$\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} = \\frac{4}{8} + \\frac{2}{8} + \\frac{1}{8} = \\frac{7}{8}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Angka $4$ pada bilangan $34.567$ bernilai...\nA. 40\nB. 400\nC. 4.000\nD. 40.000',
          answer: 'C. 4.000',
          principle:
            'Nilai angka ditentukan oleh nilai tempatnya pada sistem bilangan desimal.',
          solution:
            'Angka $4$ pada bilangan $34.567$ menempati nilai tempat ribuan, sehingga bernilai $4.000$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'What is the 10th term in the sequence: $3, 7, 11, 15, \\dots$?\nA. 35\nB. 39\nC. 43\nD. 47',
          answer: 'B. 39',
          principle:
            'An arithmetic sequence with first term $a_1$ and common difference $d$ has $n$-th term $a_n = a_1 + (n - 1)d$.',
          solution:
            'The sequence adds $4$ each time ($3, 7, 11, \\dots$). The $n$-th term formula is $4n - 1$.\nFor the 10th term: $4(10) - 1 = 39$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Suhu di sebuah kota pada malam hari adalah $-5^\\circ\\text{C}$. Pada siang hari, suhu naik $12^\\circ\\text{C}$. Berapa suhu pada siang hari?\nA. $7^\\circ\\text{C}$\nB. $-17^\\circ\\text{C}$\nC. $17^\\circ\\text{C}$\nD. $-7^\\circ\\text{C}$',
          answer: 'A. $7^\\circ\\text{C}$',
          principle:
            'Kenaikan suhu berarti menambahkan bilangan positif pada nilai suhu awal.',
          solution: 'Suhu siang hari $= -5^\\circ\\text{C} + 12^\\circ\\text{C} = 7^\\circ\\text{C}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'What is the smallest positive integer that is divisible by both $9$ and $15$?\nA. 15\nB. 30\nC. 45\nD. 90',
          answer: 'C. 45',
          principle:
            'The smallest positive integer divisible by both $a$ and $b$ is their Least Common Multiple (LCM).',
          solution:
            'This is the Least Common Multiple (LCM) of $9$ and $15$.\nMultiples of $15$: $15, 30, 45, \\dots$\nSince $45$ is divisible by $9$, the LCM is $45$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Berapa banyak bilangan prima genap yang ada?\nA. 0\nB. 1\nC. 2\nD. Tak terhingga',
          answer: 'B. 1',
          principle:
            'Setiap bilangan genap habis dibagi $2$, sehingga bilangan genap lebih dari $2$ bukan bilangan prima.',
          solution:
            'Hanya ada satu bilangan prima yang genap, yaitu $2$. Bilangan genap lainnya lebih dari $2$ selalu memiliki faktor $2$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Which decimal is equivalent to $\\frac{15}{25}$?\nA. 0.15\nB. 0.40\nC. 0.60\nD. 0.75',
          answer: 'C. 0.60',
          principle:
            'Convert a fraction to a decimal by scaling the denominator to a power of $10$ (such as $100$).',
          solution:
            'Multiply both numerator and denominator by $4$ to get a base of $100$:\n$$\\frac{15}{25} = \\frac{15 \\times 4}{25 \\times 4} = \\frac{60}{100} = 0.60.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Jika bilangan biner (basis 2) $1011$ diubah menjadi basis 10, nilainya adalah...\nA. 7\nB. 9\nC. 11\nD. 13',
          answer: 'C. 11',
          principle:
            'Konversi basis $2$ ke basis $10$ dilakukan dengan menjumlahkan hasil kali setiap digit dengan pangkat $2$ sesuai nilai tempatnya.',
          solution:
            '$$1011_2 = (1 \\times 2^3) + (0 \\times 2^2) + (1 \\times 2^1) + (1 \\times 2^0) = 8 + 0 + 2 + 1 = 11.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Find the missing number in the sequence: $1, 4, 9, 16, \\underline{\\hspace{1.2em}}, 36$.\nA. 20\nB. 24\nC. 25\nD. 30',
          answer: 'C. 25',
          principle:
            'Identify the sequence of perfect squares $n^2$ for consecutive positive integers $n$.',
          solution:
            'These are perfect squares: $1^2, 2^2, 3^2, 4^2, \\dots, 6^2$.\nThe missing number is $5^2 = 25$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Lampu merah berkedip setiap $4$ detik, sedangkan lampu biru setiap $6$ detik. Jika keduanya berkedip bersamaan sekarang, berapa detik lagi keduanya akan berkedip bersamaan untuk pertama kalinya?\nA. 10\nB. 12\nC. 24\nD. 36',
          answer: 'B. 12',
          principle:
            'Dua kejadian periodik terjadi bersamaan kembali setelah selang waktu sebesar KPK dari kedua periodenya.',
          solution:
            'KPK dari $4$ dan $6$ adalah $12$. Lampu akan berkedip bersamaan lagi setiap $12$ detik.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'What is the value of $100 - 99 + 98 - 97 + \\dots + 2 - 1$?\nA. 25\nB. 50\nC. 75\nD. 100',
          answer: 'B. 50',
          principle:
            'Group consecutive pairs of terms with alternating signs so each pair simplifies to $1$.',
          solution:
            'Group the numbers into pairs:\n$$(100 - 99) + (98 - 97) + \\dots + (2 - 1)$$\nThere are exactly $50$ pairs, each equal to $1$.\n$$\\text{Sum} = 50 \\times 1 = 50.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Bentuk desimal dari $\\frac{3}{8}$ adalah...\nA. 0.375\nB. 0.380\nC. 0.125\nD. 0.875',
          answer: 'A. 0.375',
          principle:
            'Pecahan biasa dapat diubah menjadi desimal dengan pembagian bersusun atau mengalikan pembilang dan penyebut agar penyebutnya menjadi $1000$.',
          solution:
            '$3$ dibagi $8$ secara bersusun memberikan hasil $0.375$.\nAtau:\n$$\\frac{3}{8} \\times \\frac{125}{125} = \\frac{375}{1000} = 0.375.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'What is the sum of the first $4$ prime numbers?\nA. 16\nB. 17\nC. 18\nD. 26',
          answer: 'B. 17',
          principle:
            'A prime number is an integer greater than $1$ having only two positive divisors: $1$ and itself.',
          solution:
            'The first four prime numbers are $2, 3, 5,$ and $7$.\n$$\\text{Sum} = 2 + 3 + 5 + 7 = 17.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Tentukan bilangan selanjutnya dalam pola berikut: $2, 5, 10, 17, 26, \\dots$\nA. 35\nB. 36\nC. 37\nD. 38',
          answer: 'C. 37',
          principle:
            'Amati pola selisih antar suku berurutan untuk menentukan suku berikutnya.',
          solution:
            'Selisih antar bilangan bertambah ganjil: $+3, +5, +7, +9$. Selisih berikutnya adalah $+11$.\nJadi, $26 + 11 = 37$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            "In the base-10 number system, how many times greater is the value of the digit '8' in $8{,}420$ than the digit '8' in $4{,}820$?\nA. 10\nB. 100\nC. 1,000\nD. 8,000",
          answer: 'A. 10',
          principle:
            'In base-10 place value, each step to the left multiplies a digit’s place value by $10$.',
          solution:
            "The digit '8' in $8{,}420$ is $8{,}000$. The digit '8' in $4{,}820$ is $800$.\n$$\\frac{8{,}000}{800} = 10\\text{ times greater}.$$",
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'A snail climbs up a $10$-meter wall. Each day it climbs $3$ meters, and each night it slips down $2$ meters. On which day will it first reach the top?\nA. 8th\nB. 9th\nC. 10th\nD. 11th',
          answer: 'A. 8th',
          principle:
            'Compute net progress per day-night cycle up to the final ascent, since reaching the top during the day ends the climb.',
          solution:
            "The snail's net progress is $1\\text{ m}$ per day. By the end of day 7, it is at $7\\text{ m}$.\nOn the morning of the 8th day, it climbs $3\\text{ m}$, reaching the $10\\text{ m}$ top without slipping down.",
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Ibu memiliki $20$ apel dan $30$ jeruk. Buah-buahan tersebut akan dimasukkan ke dalam kantong plastik dengan jumlah yang sama banyak untuk setiap jenis buah. Paling banyak kantong plastik yang dibutuhkan adalah...\nA. 5\nB. 10\nC. 15\nD. 20',
          answer: 'B. 10',
          principle:
            'Pembagian benda ke dalam wadah terbanyak dengan komposisi sama rata diselesaikan dengan FPB (Faktor Persekutuan Terbesar).',
          solution:
            'Ini adalah persoalan FPB (Faktor Persekutuan Terbesar). FPB dari $20$ dan $30$ adalah $10$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'How many prime numbers are there between $20$ and $30$?\nA. 1\nB. 2\nC. 3\nD. 4',
          answer: 'B. 2',
          principle:
            'Check odd integers in the interval for divisibility by primes up to $\\sqrt{30}$.',
          solution:
            'The prime numbers between $20$ and $30$ are $23$ and $29$ (while $21, 25, 27$ are composite). Thus there are $2$ prime numbers.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Manakah dari pecahan berikut yang memiliki nilai paling besar?\nA. $\\frac{1}{2}$\nB. $\\frac{5}{9}$\nC. $\\frac{4}{7}$\nD. $\\frac{3}{5}$',
          answer: 'D. $\\frac{3}{5}$',
          principle:
            'Nilai pecahan dapat dibandingkan dengan mengubahnya ke bentuk desimal atau menyamakan penyebutnya.',
          solution:
            'Ubah menjadi desimal:\n$\\frac{1}{2} = 0.50$; $\\frac{5}{9} \\approx 0.55$; $\\frac{4}{7} \\approx 0.57$; $\\frac{3}{5} = 0.60$.\nNilai terbesar adalah $\\frac{3}{5}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Perhatikan barisan bilangan berikut: $1, 2, 4, 8, 16, \\dots$ Bilangan ke-7 pada barisan tersebut adalah...\nA. 32\nB. 48\nC. 64\nD. 128',
          answer: 'C. 64',
          principle:
            'Barisan geometri pangkat $2$ memiliki suku ke-$n$ sebesar $2^{n-1}$.',
          solution:
            'Ini adalah barisan pangkat $2$: $2^0, 2^1, 2^2, \\dots$\nBilangan ke-7 adalah $2^6 = 64$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'What is the binary (base-2) representation of the decimal number $9$?\nA. 1000\nB. 1001\nC. 1010\nD. 1011',
          answer: 'B. 1001',
          principle:
            'Express a base-10 integer as a sum of powers of $2$ ($2^k$) to obtain its binary digits.',
          solution:
            '$9$ in base $2$ is calculated as $8 + 1 = 2^3 + 2^0$, which gives $1001$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'KPK dari $12$ dan $18$ adalah...\nA. 24\nB. 36\nC. 48\nD. 72',
          answer: 'B. 36',
          principle:
            'Kelipatan Persekutuan Terkecil (KPK) adalah kelipatan positif terkecil yang sama dari kedua bilangan.',
          solution:
            'Kelipatan $12$: $12, 24, 36, \\dots$\nKelipatan $18$: $18, 36, \\dots$\nKPK dari $12$ dan $18$ adalah $36$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Isian Singkat',
      marks: 15,
      stem: 'Tuliskan jawaban akhir yang singkat dan tepat untuk setiap soal (nomor 26–40).',
      parts: [
        {
          label: '26',
          marks: 1,
          prompt: 'Hitunglah hasil dari $(15 + 9) \\times (20 - 12)$.',
          answer: '192',
          answerNumeric: [{ name: 'hasil', value: 192 }],
          principle:
            'Operasi di dalam tanda kurung diselesaikan terlebih dahulu sebelum perkalian.',
          solution:
            '$$(15 + 9) = 24, \\qquad (20 - 12) = 8$$\n$$24 \\times 8 = 192.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'What is the least number of candies you can have if you can divide them equally into groups of $6$, $8$, or $12$ without any remainders?',
          answer: '24',
          answerNumeric: [{ name: 'candies', value: 24 }],
          principle:
            'The least positive integer divisible by $6$, $8$, and $12$ is their Least Common Multiple (LCM).',
          solution:
            'We need the Least Common Multiple (LCM) of $6, 8,$ and $12$, which is $24$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '28',
          marks: 1,
          prompt: 'Tuliskan faktorisasi prima dari $120$.',
          answer: '$2^3 \\times 3 \\times 5$',
          principle:
            'Faktorisasi prima menguraikan bilangan menjadi perkalian faktor-faktor prima berpangkat.',
          solution:
            '$$120 = 12 \\times 10 = (2^2 \\times 3) \\times (2 \\times 5) = 2^3 \\times 3 \\times 5.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '29',
          marks: 1,
          prompt: 'Express $0.85$ as a fraction in its simplest form.',
          answer: '$\\frac{17}{20}$',
          principle:
            'Rewrite a terminating decimal over a power of $10$ and simplify by dividing numerator and denominator by their GCF.',
          solution:
            '$$0.85 = \\frac{85}{100} = \\frac{85 \\div 5}{100 \\div 5} = \\frac{17}{20}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Jika bilangan $14$ (basis 10) diubah menjadi basis 5, penulisannya adalah...',
          answer: '24',
          principle:
            'Konversi basis $10$ ke basis $5$ dilakukan dengan membagi berulang oleh $5$ dan menyusun hasil bagi serta sisanya.',
          solution:
            '$14$ dibagi $5$ sama dengan $2$ sisa $4$ ($14 = 2 \\times 5^1 + 4 \\times 5^0$).\nMaka penulisannya dalam basis $5$ adalah $24$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '31',
          marks: 1,
          prompt: 'The sum of the first $50$ odd positive integers is...',
          answer: '2500',
          answerNumeric: [{ name: 'sum', value: 2500 }],
          principle:
            'The sum of the first $n$ odd positive integers equals $n^2$.',
          solution:
            'The sum of the first $n$ odd integers is exactly $n^2$.\nFor $n = 50$, $50^2 = 2500$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'Dua buah bus berangkat dari terminal yang sama. Bus A berangkat setiap $15$ menit, dan Bus B berangkat setiap $20$ menit. Jika pada pukul 07:00 kedua bus berangkat bersamaan, pada pukul berapa mereka akan berangkat bersamaan lagi untuk pertama kalinya?',
          answer: '08:00',
          principle:
            'Waktu keberangkatan bersamaan berikutnya diperoleh dengan menambahkan KPK kedua periode keberangkatan pada waktu awal.',
          solution:
            'KPK dari $15$ dan $20$ adalah $60$ menit ($1$ jam).\nMereka akan berangkat bersama $1$ jam setelah 07:00, yaitu pukul 08:00.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'The sum of two consecutive integers is $87$. What is the larger integer?',
          answer: '44',
          answerNumeric: [{ name: 'largerInteger', value: 44 }],
          principle:
            'Represent consecutive integers as $x$ and $x + 1$ and solve the linear equation.',
          solution:
            'Let the integers be $x$ and $x + 1$.\n$$x + x + 1 = 87 \\implies 2x = 86 \\implies x = 43.$$\nThe larger integer is $44$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '34',
          marks: 1,
          prompt:
            'Seperempat dari suatu bilangan adalah $12$. Berapakah sepertiga dari bilangan tersebut?',
          answer: '16',
          answerNumeric: [{ name: 'hasil', value: 16 }],
          principle:
            'Tentukan bilangan awal terlebih dahulu dari nilai pecahannya, lalu hitung sepertiga dari bilangan tersebut.',
          solution:
            'Misalkan bilangan itu adalah $N$.\n$$\\frac{1}{4} \\times N = 12 \\implies N = 48.$$\nMaka, sepertiga dari $48$ adalah $\\frac{1}{3} \\times 48 = 16$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '35',
          marks: 1,
          prompt: 'What is the largest two-digit prime number?',
          answer: '97',
          answerNumeric: [{ name: 'prime', value: 97 }],
          principle:
            'Test the largest two-digit integers in descending order for primality.',
          solution:
            'The numbers $98$ and $99$ are composite. $97$ is only divisible by $1$ and $97$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '36',
          marks: 1,
          prompt: 'FPB dari $60$ dan $84$ adalah...',
          answer: '12',
          answerNumeric: [{ name: 'fpb', value: 12 }],
          principle:
            'Faktor Persekutuan Terbesar (FPB) adalah bilangan bulat positif terbesar yang membagi habis kedua bilangan.',
          solution:
            '$60 = 12 \\times 5$ dan $84 = 12 \\times 7$. Faktor persekutuan terbesarnya adalah $12$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '37',
          marks: 1,
          prompt:
            'The number $7$ in base-10, when written in base-2 (binary) is...',
          answer: '111',
          principle:
            'Decompose a base-10 integer into a sum of powers of $2$ ($2^k$) to write it in binary.',
          solution:
            '$$7 = 4 + 2 + 1 = 2^2 + 2^1 + 2^0.$$\nIn binary, this is written as $111$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '38',
          marks: 1,
          prompt:
            'Diberikan pola bilangan segitiga: $1, 3, 6, 10, 15, \\dots$ Berapakah bilangan ke-8 dari pola tersebut?',
          answer: '36',
          answerNumeric: [{ name: 'sukuKe8', value: 36 }],
          principle:
            'Bilangan segitiga ke-$n$ memenuhi rumus $T_n = \\frac{n(n + 1)}{2}$.',
          solution:
            'Rumus bilangan segitiga ke-$n$ adalah $\\frac{n(n + 1)}{2}$.\nUntuk $n = 8$, hasilnya adalah $\\frac{8(9)}{2} = 36$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '39',
          marks: 1,
          prompt: 'Calculate: $\\frac{1}{2} + \\frac{2}{3} + \\frac{5}{6}$.',
          answer: '2',
          answerNumeric: [{ name: 'result', value: 2 }],
          principle:
            'Rewrite fractions with a common denominator before adding their numerators.',
          solution:
            'Make a common denominator of $6$:\n$$\\frac{3}{6} + \\frac{4}{6} + \\frac{5}{6} = \\frac{12}{6} = 2.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '40',
          marks: 1,
          prompt:
            'What is the decimal (base-10) value of the base-3 number $102$?',
          answer: '11',
          answerNumeric: [{ name: 'value', value: 11 }],
          principle:
            'Expand a base-3 number using place values $3^2, 3^1, 3^0$ to obtain its base-10 value.',
          solution:
            '$$102_3 = (1 \\times 3^2) + (0 \\times 3^1) + (2 \\times 3^0) = 9 + 0 + 2 = 11.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
