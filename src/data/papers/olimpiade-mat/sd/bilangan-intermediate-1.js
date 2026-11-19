/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SD Kelas 4–5 – Intermediate 1
 * Sumber: BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4–5 – INTERMEDIATE 1.pdf (Duta e-dukasi).
 * Bahasa asli tiap butir soal (Indonesia / Inggris) dipertahankan sesuai Keputusan D5.
 */
export default {
  id: 'olim-sd-bilangan-int1',
  slug: 'bilangan-sd-intermediate-1',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  topic: 'Bilangan Olimpiade SD Kelas 4–5 (Intermediate 1)',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan'
  ],
  lang: 'id',
  title: 'Bilangan Olimpiade Matematika SD Kelas 4–5 – Intermediate 1',
  totalMarks: 40,
  instructions:
    'Kerjakan seluruh 40 soal (25 Pilihan Ganda pada Bagian A dan 15 Isian Singkat pada Bagian B). Setiap soal dipertahankan dalam bahasa aslinya (Bahasa Indonesia atau Bahasa Inggris).',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4\u20135 \u2013 INTERMEDIATE 1.pdf',
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
            'Hasil perhitungan dari $(-15) + 24 \\times 3 - 50$ adalah...\nA. $-7$\nB. 7\nC. 17\nD. 37',
          answer: 'B. 7',
          principle:
            'Pada operasi hitung campuran, perkalian dan pembagian dikerjakan lebih dahulu sebelum penjumlahan dan pengurangan dari kiri ke kanan.',
          solution:
            'Dahulukan operasi perkalian: $24 \\times 3 = 72$.\nKemudian kerjakan penjumlahan dan pengurangan dari kiri ke kanan:\n$$-15 + 72 - 50 = 57 - 50 = 7.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Three bells ring at intervals of $12$, $15$, and $18$ minutes. If they all ring together at 08:00 AM, at what time will they next ring together?\nA. 09:30 AM\nB. 10:00 AM\nC. 10:30 AM\nD. 11:00 AM',
          answer: 'D. 11:00 AM',
          principle:
            'The time until multiple periodic events occur simultaneously again is the Least Common Multiple (LCM) of their intervals.',
          solution:
            'Find the LCM of $12$, $15$, and $18$:\n$$12 = 2^2 \\times 3, \\quad 15 = 3 \\times 5, \\quad 18 = 2 \\times 3^2$$\n$$\\text{LCM}(12, 15, 18) = 2^2 \\times 3^2 \\times 5 = 180\\text{ minutes} = 3\\text{ hours}.$$\nThe next time they ring together is $\\text{08:00 AM} + 3\\text{ hours} = \\text{11:00 AM}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Berapakah jumlah dari semua bilangan prima yang terletak di antara $30$ dan $40$?\nA. 31\nB. 68\nC. 101\nD. 107',
          answer: 'B. 68',
          principle:
            'Bilangan prima adalah bilangan asli lebih dari $1$ yang hanya habis dibagi oleh $1$ dan dirinya sendiri.',
          solution:
            'Bilangan prima antara $30$ dan $40$ adalah $31$ dan $37$ (sedangkan $33 = 3 \\times 11$, $35 = 5 \\times 7$, dan $39 = 3 \\times 13$ adalah komposit).\nJumlahnya adalah $31 + 37 = 68$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'What is the value of $\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4}$?\nA. $\\frac{3}{9}$\nB. $\\frac{11}{12}$\nC. $\\frac{13}{12}$\nD. $\\frac{15}{12}$',
          answer: 'C. $\\frac{13}{12}$',
          principle:
            'Add fractions by rewriting them with a common denominator equal to the LCM of their denominators.',
          solution:
            'Rewrite each fraction with a common denominator of $12$:\n$$\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} = \\frac{6}{12} + \\frac{4}{12} + \\frac{3}{12} = \\frac{13}{12}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Konversi bilangan desimal $45$ ke dalam sistem bilangan basis $4$ adalah...\nA. $231_4$\nB. $321_4$\nC. $123_4$\nD. $213_4$',
          answer: 'A. $231_4$',
          principle:
            'Konversi bilangan basis $10$ ke basis $4$ dilakukan dengan membagi berulang oleh $4$ dan membaca sisa pembagian dari urutan terakhir ke pertama.',
          solution:
            'Bagi $45$ dengan $4$ secara berulang:\n- $45 \\div 4 = 11$ sisa $1$\n- $11 \\div 4 = 2$ sisa $3$\n- $2 \\div 4 = 0$ sisa $2$\nSusun sisa dari bawah ke atas sehingga diperoleh $231_4$ ($2 \\times 4^2 + 3 \\times 4^1 + 1 \\times 4^0 = 32 + 12 + 1 = 45$).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Perhatikan pola barisan berikut: $2, 6, 12, 20, 30, \\dots$ Bilangan ke-6 pada pola tersebut adalah...\nA. 40\nB. 42\nC. 44\nD. 46',
          answer: 'B. 42',
          principle:
            'Pola barisan bilangan persegi panjang memiliki suku ke-$n$ sebesar $U_n = n(n + 1)$.',
          solution:
            'Polanya adalah hasil perkalian dua bilangan asli berurutan:\n$$1 \\times 2 = 2, \\quad 2 \\times 3 = 6, \\quad 3 \\times 4 = 12, \\quad 4 \\times 5 = 20, \\quad 5 \\times 6 = 30.$$\nBilangan ke-6 adalah $6 \\times 7 = 42$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'What is the absolute difference (distance) between $-15$ and $27$ on the number line?\nA. 12\nB. 32\nC. 42\nD. 52',
          answer: 'C. 42',
          principle:
            'The distance between two numbers $a$ and $b$ on the number line is $|a - b|$.',
          solution:
            'Compute the absolute difference:\n$$|27 - (-15)| = |27 + 15| = 42.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Faktor Persekutuan Terbesar (FPB) dari bilangan $48$, $72$, dan $120$ adalah...\nA. 12\nB. 24\nC. 36\nD. 48',
          answer: 'B. 24',
          principle:
            'FPB dari beberapa bilangan adalah hasil kali faktor prima persekutuan dengan pangkat terkecil.',
          solution:
            'Faktorisasi masing-masing bilangan: $48 = 24 \\times 2$, $72 = 24 \\times 3$, dan $120 = 24 \\times 5$.\nKarena $\\text{FPB}(2, 3, 5) = 1$, maka $\\text{FPB}(48, 72, 120) = 24$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'The sum of two distinct prime numbers is $50$. What is the maximum possible product of these two prime numbers?\nA. 141\nB. 481\nC. 589\nD. 621',
          answer: 'C. 589',
          principle:
            'For two numbers with a fixed sum, their product is maximized when the two numbers are as close to each other as possible.',
          solution:
            'List the prime pairs that sum to $50$: $(3, 47)$, $(7, 43)$, $(13, 37)$, and $(19, 31)$.\nThe closest pair gives the maximum product:\n$$19 \\times 31 = 589.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Bentuk pecahan biasa dari bilangan desimal $0,875$ adalah...\nA. $\\frac{3}{4}$\nB. $\\frac{5}{8}$\nC. $\\frac{7}{8}$\nD. $\\frac{9}{10}$',
          answer: 'C. $\\frac{7}{8}$',
          principle:
            'Bilangan desimal dengan tiga angka di belakang koma ditulis per $1000$, lalu disederhanakan dengan membagi pembilang dan penyebut oleh FPB-nya.',
          solution:
            'Ubah ke pecahan biasa dan sederhanakan dengan membagi pembilang serta penyebut oleh $125$:\n$$0{,}875 = \\frac{875}{1000} = \\frac{875 \\div 125}{1000 \\div 125} = \\frac{7}{8}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'What is the base-10 value of the binary number $10110_2$?\nA. 20\nB. 22\nC. 24\nD. 26',
          answer: 'B. 22',
          principle:
            'Convert a base-2 (binary) number to base-10 by expanding each digit according to its power of $2$.',
          solution:
            'Expand $10110_2$ by place values:\n$$10110_2 = (1 \\times 2^4) + (0 \\times 2^3) + (1 \\times 2^2) + (1 \\times 2^1) + (0 \\times 2^0) = 16 + 0 + 4 + 2 + 0 = 22.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Suku ke-10 dari barisan bilangan kuadrat ($1, 4, 9, 16, \\dots$) adalah...\nA. 64\nB. 81\nC. 100\nD. 121',
          answer: 'C. 100',
          principle:
            'Barisan bilangan kuadrat memiliki rumus suku ke-$n$ yaitu $U_n = n^2$.',
          solution:
            'Suku ke-$n$ pada barisan bilangan kuadrat adalah $n^2$.\nUntuk $n = 10$, suku ke-10 adalah $10^2 = 100$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Evaluate: $(-2)^3 + (-3)^2$.\nA. $-17$\nB. $-1$\nC. 1\nD. 17',
          answer: 'C. 1',
          principle:
            'A negative base raised to an odd exponent gives a negative result, while raised to an even exponent gives a positive result.',
          solution:
            'Evaluate each power separately:\n$$(-2)^3 = -8, \\qquad (-3)^2 = 9.$$\nAdd the two values:\n$$(-2)^3 + (-3)^2 = -8 + 9 = 1.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Bilangan bulat positif terkecil yang habis dibagi oleh $6$, $8$, dan $9$ adalah...\nA. 36\nB. 48\nC. 72\nD. 144',
          answer: 'C. 72',
          principle:
            'Bilangan bulat positif terkecil yang habis dibagi beberapa bilangan adalah Kelipatan Persekutuan Terkecil (KPK) dari bilangan-bilangan tersebut.',
          solution:
            'Tentukan $\\text{KPK}(6, 8, 9)$ dengan faktorisasi prima:\n$$6 = 2 \\times 3, \\quad 8 = 2^3, \\quad 9 = 3^2$$\n$$\\text{KPK}(6, 8, 9) = 2^3 \\times 3^2 = 8 \\times 9 = 72.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'What is the correct prime factorization of $360$?\nA. $2^3 \\times 3^2 \\times 5$\nB. $2^2 \\times 3^3 \\times 5$\nC. $2^3 \\times 3 \\times 5^2$\nD. $2^4 \\times 3 \\times 5$',
          answer: 'A. $2^3 \\times 3^2 \\times 5$',
          principle:
            'Prime factorization expresses a composite integer uniquely as a product of prime powers.',
          solution:
            'Factor $360$ step by step:\n$$360 = 36 \\times 10 = (2^2 \\times 3^2) \\times (2 \\times 5) = 2^3 \\times 3^2 \\times 5.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Manakah dari pecahan berikut yang memiliki nilai paling besar?\nA. $\\frac{1}{2}$\nB. $\\frac{3}{5}$\nC. $\\frac{5}{8}$\nD. $\\frac{7}{12}$',
          answer: 'C. $\\frac{5}{8}$',
          principle:
            'Untuk membandingkan beberapa pecahan, ubah semuanya ke bentuk desimal atau samakan penyebutnya.',
          solution:
            'Ubah setiap pecahan menjadi bentuk desimal:\n- $\\frac{1}{2} = 0{,}5$\n- $\\frac{3}{5} = 0{,}6$\n- $\\frac{5}{8} = 0{,}625$\n- $\\frac{7}{12} \\approx 0{,}583$\nNilai yang paling besar adalah $\\frac{5}{8}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Calculate the sum of $123_4$ and $21_4$ in the base-4 system.\nA. $144_4$\nB. $200_4$\nC. $210_4$\nD. $300_4$',
          answer: 'C. $210_4$',
          principle:
            'In base-4 addition, add digits from right to left and carry $1$ to the next column whenever a column sum reaches $4$.',
          solution:
            'Add from right to left in base $4$:\n- Units place: $3 + 1 = 4 = 10_4$ (write $0$, carry $1$).\n- Fours place: $2 + 2 + 1 = 5 = 11_4$ (write $1$, carry $1$).\n- Sixteens place: $1 + 1 = 2$.\nThus, $123_4 + 21_4 = 210_4$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Perhatikan pola barisan aritmetika berikut: $3, 7, 11, 15, \\dots$ Nilai suku ke-20 adalah...\nA. 76\nB. 79\nC. 83\nD. 87',
          answer: 'B. 79',
          principle:
            'Suku ke-$n$ barisan aritmetika dengan suku pertama $a$ dan beda $b$ dirumuskan sebagai $U_n = a + (n - 1)b$.',
          solution:
            'Diketahui $a = 3$ dan $b = 7 - 3 = 4$.\nUntuk $n = 20$:\n$$U_{20} = 3 + (20 - 1) \\times 4 = 3 + 19 \\times 4 = 3 + 76 = 79.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'In a test with $50$ questions, a correct answer scores $+4$, a wrong answer scores $-1$, and leaving it blank scores $0$. If a student answers $30$ correctly, $10$ wrongly, and leaves $10$ blank, what is their total score?\nA. 100\nB. 110\nC. 120\nD. 130',
          answer: 'B. 110',
          principle:
            'Total score is the sum of points earned from correct, wrong, and blank responses weighted by their point values.',
          solution:
            'Compute each component:\n- Correct: $30 \\times 4 = 120$\n- Wrong: $10 \\times (-1) = -10$\n- Blank: $10 \\times 0 = 0$\nTotal score $= 120 - 10 + 0 = 110$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Lantai berukuran $120\\text{ cm} \\times 150\\text{ cm}$ akan ditutupi ubin berbentuk persegi yang identik tanpa ada ubin yang dipotong. Ukuran sisi ubin terbesar yang dapat digunakan adalah...\nA. 10 cm\nB. 20 cm\nC. 30 cm\nD. 40 cm',
          answer: 'C. 30 cm',
          principle:
            'Ukuran sisi ubin persegi terbesar yang dapat menutupi persegi panjang tanpa sisa sama dengan FPB dari panjang dan lebarnya.',
          solution:
            'Hitung $\\text{FPB}(120, 150)$:\n$$120 = 30 \\times 4, \\qquad 150 = 30 \\times 5.$$\nJadi, ukuran sisi ubin terbesar yang dapat digunakan adalah $30\\text{ cm}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'How many composite numbers are there strictly between $10$ and $20$?\nA. 4\nB. 5\nC. 6\nD. 7',
          answer: 'B. 5',
          principle:
            'A composite number is an integer greater than $1$ that has more than two positive divisors (i.e., is not prime).',
          solution:
            'The integers strictly between $10$ and $20$ are $11, 12, 13, 14, 15, 16, 17, 18, 19$.\nAmong these, the primes are $11, 13, 17, 19$, and the composite numbers are $12, 14, 15, 16, 18$.\nThere are $5$ composite numbers.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Jika $\\frac{3}{4}$ bagian dari sebuah bilangan misterius bernilai $24$, berapakah bilangan misterius tersebut?\nA. 18\nB. 28\nC. 32\nD. 36',
          answer: 'C. 32',
          principle:
            'Jika $\\frac{a}{b}$ dari suatu bilangan $X$ bernilai $k$, maka $X = k \\times \\frac{b}{a}$.',
          solution:
            'Misalkan bilangan misterius tersebut adalah $X$.\n$$\\frac{3}{4} X = 24 \\implies X = \\frac{24 \\times 4}{3} = 8 \\times 4 = 32.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Find the unknown base $x$ if $32_x = 17_{10}$.\nA. 4\nB. 5\nC. 6\nD. 7',
          answer: 'B. 5',
          principle:
            'Expand a base-$x$ two-digit number $ab_x$ in base $10$ as $a \\cdot x + b$, and solve for $x$ (with $x > \\max(a, b)$).',
          solution:
            'Convert $32_x$ to base $10$:\n$$3x + 2 = 17 \\implies 3x = 15 \\implies x = 5.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Pola huruf A, B, C, D, E ditulis secara berulang-ulang terus menerus. Huruf pada urutan ke-100 adalah...\nA. A\nB. B\nC. D\nD. E',
          answer: 'D. E',
          principle:
            'Untuk pola berulang dengan periode $p$, posisi suku ke-$n$ ditentukan dari sisa pembagian $n$ oleh $p$ (sisa $0$ berarti suku ke-$p$).',
          solution:
            'Pola berulang setiap $5$ huruf (A, B, C, D, E).\nKarena $100 \\div 5 = 20$ bersisa $0$ (habis dibagi $5$), maka huruf pada urutan ke-100 adalah huruf ke-5 dalam pola, yaitu E.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'The product of the LCM and GCF of two numbers is $240$. If one of the numbers is $12$, what is the other number?\nA. 10\nB. 15\nC. 20\nD. 24',
          answer: 'C. 20',
          principle:
            'For any two positive integers $A$ and $B$, $\\text{LCM}(A, B) \\times \\text{GCF}(A, B) = A \\times B$.',
          solution:
            'Use the identity $A \\times B = \\text{LCM} \\times \\text{GCF}$:\n$$12 \\times B = 240 \\implies B = \\frac{240}{12} = 20.$$',
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
          prompt: 'Hitunglah nilai mutlak berikut: $|-10| - |5| + |-2|$.',
          answer: '7',
          answerNumeric: [{ name: 'hasil', value: 7 }],
          principle:
            'Nilai mutlak suatu bilangan $|a|$ menyatakan jarak bilangan tersebut dari $0$ pada garis bilangan sehingga selalu bernilai tak negatif.',
          solution:
            'Tentukan masing-masing nilai mutlak:\n$$|-10| = 10, \\quad |5| = 5, \\quad |-2| = 2.$$\nHitung hasilnya:\n$$10 - 5 + 2 = 7.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Three buses leave a station every $15$, $20$, and $25$ minutes. If they leave together at 6:00 AM, how many minutes will pass before they all leave together again?',
          answer: '300 minutes',
          answerNumeric: [{ name: 'minutes', value: 300, unit: 'minutes' }],
          principle:
            'The number of minutes until all buses depart together again equals the Least Common Multiple (LCM) of their departure intervals.',
          solution:
            'Find the LCM of $15$, $20$, and $25$:\n$$15 = 3 \\times 5, \\quad 20 = 2^2 \\times 5, \\quad 25 = 5^2$$\n$$\\text{LCM}(15, 20, 25) = 2^2 \\times 3 \\times 5^2 = 300\\text{ minutes}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Berapa banyak faktor prima yang saling berbeda (distinct prime factors) dari bilangan $210$?',
          answer: '4',
          answerNumeric: [{ name: 'faktorPrimaBerbeda', value: 4 }],
          principle:
            'Uraikan bilangan ke dalam faktorisasi primanya, lalu hitung banyaknya bilangan prima yang berbeda.',
          solution:
            'Faktorisasi prima dari $210$ adalah:\n$$210 = 2 \\times 3 \\times 5 \\times 7.$$\nTerdapat $4$ faktor prima yang saling berbeda, yaitu $2, 3, 5,$ dan $7$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '29',
          marks: 1,
          prompt: 'What is the fraction value of $0.333\\dots + 0.444\\dots$ ?',
          answer: '$\\frac{7}{9}$',
          principle:
            'A single-digit repeating decimal $0.\\overline{d} = 0.ddd\\dots$ equals $\\frac{d}{9}$.',
          solution:
            'Convert each repeating decimal to a fraction:\n$$0.333\\dots = \\frac{3}{9}, \\qquad 0.444\\dots = \\frac{4}{9}.$$\nAdd them:\n$$\\frac{3}{9} + \\frac{4}{9} = \\frac{7}{9}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Ubahlah bilangan desimal $50$ ke dalam sistem bilangan basis $5$.',
          answer: '$200_5$',
          principle:
            'Konversi basis $10$ ke basis $5$ dilakukan dengan membagi berulang oleh $5$ dan membaca sisa pembagian dari urutan terakhir ke pertama.',
          solution:
            'Bagi $50$ dengan $5$ secara berulang:\n- $50 \\div 5 = 10$ sisa $0$\n- $10 \\div 5 = 2$ sisa $0$\n- $2 \\div 5 = 0$ sisa $2$\nDibaca dari bawah ke atas, hasilnya adalah $200_5$ ($2 \\times 5^2 + 0 \\times 5^1 + 0 \\times 5^0 = 50$).',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'What is the 8th term of the triangular number sequence: $1, 3, 6, 10, 15, \\dots$?',
          answer: '36',
          answerNumeric: [{ name: 'term8', value: 36 }],
          principle:
            'The $n$-th triangular number is given by $T_n = \\frac{n(n + 1)}{2}$.',
          solution:
            'Substitute $n = 8$ into the triangular number formula:\n$$T_8 = \\frac{8(8 + 1)}{2} = \\frac{8 \\times 9}{2} = 36.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'Berapakah hasil penjumlahan seluruh bilangan bulat mulai dari $-10$ hingga $12$ secara berurutan?',
          answer: '23',
          answerNumeric: [{ name: 'jumlah', value: 23 }],
          principle:
            'Bilangan yang berlawanan tanda ($-k$ dan $+k$) saling meniadakan sehingga jumlahnya $0$.',
          solution:
            'Pasangan bilangan dari $-10$ sampai $10$ saling meniadakan karena $(-k) + k = 0$:\n$$(-10) + (-9) + \\dots + 9 + 10 = 0.$$\nSuku yang tersisa adalah $11$ dan $12$, sehingga:\n$$0 + 11 + 12 = 23.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'A teacher wants to divide $45$ red pens, $60$ blue pens, and $75$ black pens into identical groups with none left over. What is the greatest number of groups she can make?',
          answer: '15 groups',
          answerNumeric: [{ name: 'groups', value: 15 }],
          principle:
            'The greatest number of identical groups with no items left over is the Greatest Common Factor (GCF) of the item counts.',
          solution:
            'Find $\\text{GCF}(45, 60, 75)$:\n$$45 = 15 \\times 3, \\quad 60 = 15 \\times 4, \\quad 75 = 15 \\times 5.$$\nSince $\\text{GCF}(3, 4, 5) = 1$, she can make at most $15$ groups.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '34',
          marks: 1,
          prompt:
            'Tentukan bilangan prima terkecil yang nilainya lebih besar dari $50$.',
          answer: '53',
          answerNumeric: [{ name: 'prima', value: 53 }],
          principle:
            'Uji bilangan ganjil di atas $50$ secara berurutan apakah memiliki pembagi prima selain $1$ dan dirinya sendiri.',
          solution:
            'Bilangan ganjil pertama setelah $50$ adalah $51$, tetapi $51 = 3 \\times 17$ (bukan prima).\nBilangan berikutnya adalah $53$, yang hanya habis dibagi $1$ dan $53$, sehingga $53$ adalah bilangan prima terkecil yang lebih besar dari $50$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'Evaluate the complex fraction: $\\frac{1}{1 + \\frac{1}{3}}$.',
          answer: '$\\frac{3}{4}$',
          principle:
            'Simplify the denominator of a complex fraction first, then invert and multiply.',
          solution:
            'First simplify the denominator:\n$$1 + \\frac{1}{3} = \\frac{4}{3}.$$\nThen divide $1$ by $\\frac{4}{3}$:\n$$\\frac{1}{\\frac{4}{3}} = \\frac{3}{4}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '36',
          marks: 1,
          prompt:
            'Multiply the binary numbers $101_2$ and $11_2$, and write the answer in binary.',
          answer: '$1111_2$',
          principle:
            'Binary numbers can be multiplied directly in base $2$ or converted to base $10$, multiplied, and converted back to base $2$.',
          solution:
            'Convert to base $10$:\n$$101_2 = 4 + 0 + 1 = 5, \\qquad 11_2 = 2 + 1 = 3.$$\nMultiply in base $10$: $5 \\times 3 = 15$.\nConvert $15$ back to binary: $15 = 8 + 4 + 2 + 1 = 1111_2$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '37',
          marks: 1,
          prompt:
            'Barisan bilangan dibentuk dengan aturan "kalikan $2$ lalu tambah $1$". Jika barisan dimulai dengan $2, 5, 11, 23, \\dots$, berapakah bilangan selanjutnya?',
          answer: '47',
          answerNumeric: [{ name: 'bilanganSelanjutnya', value: 47 }],
          principle:
            'Terapkan aturan rekursif $U_{n+1} = 2U_n + 1$ pada suku terakhir yang diketahui.',
          solution:
            'Suku terakhir adalah $23$. Kalikan $2$ lalu tambah $1$:\n$$(23 \\times 2) + 1 = 46 + 1 = 47.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '38',
          marks: 1,
          prompt: 'Calculate: $(12 - 4) \\times (-3) + 10$.',
          answer: '$-14$',
          answerNumeric: [{ name: 'result', value: -14 }],
          principle:
            'Follow order of operations: evaluate parentheses first, then multiplication, and finally addition.',
          solution:
            'Evaluate inside the parentheses first:\n$$(12 - 4) \\times (-3) + 10 = 8 \\times (-3) + 10 = -24 + 10 = -14.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '39',
          marks: 1,
          prompt:
            'Two numbers have a GCF of $5$ and an LCM of $60$. If their sum is $35$, what is the larger number?',
          answer: '20',
          answerNumeric: [{ name: 'largerNumber', value: 20 }],
          principle:
            'For two positive integers $A$ and $B$, $A \\times B = \\text{GCF}(A, B) \\times \\text{LCM}(A, B)$.',
          solution:
            'Let the two numbers be $A$ and $B$.\n$$A \\times B = \\text{GCF} \\times \\text{LCM} = 5 \\times 60 = 300.$$\nFind a factor pair of $300$ (both multiples of $5$) whose sum is $35$: $15 + 20 = 35$ and $15 \\times 20 = 300$.\nThe larger number is $20$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '40',
          marks: 1,
          prompt:
            'Sepasang "bilangan prima kembar" adalah dua bilangan prima yang berselisih tepat $2$. Berapakah jumlah dari seluruh bilangan prima kembar yang letaknya di antara $10$ dan $20$?',
          answer: '60',
          answerNumeric: [{ name: 'jumlah', value: 60 }],
          principle:
            'Bilangan prima kembar adalah pasangan bilangan prima $(p, p + 2)$ dengan selisih $2$.',
          solution:
            'Bilangan prima di antara $10$ dan $20$ adalah $11, 13, 17,$ dan $19$.\nPasangan bilangan prima kembarnya adalah $(11, 13)$ dan $(17, 19)$.\nJumlah seluruhnya adalah:\n$$11 + 13 + 17 + 19 = 60.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
