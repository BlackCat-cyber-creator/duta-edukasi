/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SD Kelas 4–5 – Expert 1
 * Sumber: BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4–5 – EXPERT 1.pdf (Duta e-dukasi).
 * Bahasa asli tiap butir soal (Indonesia / Inggris) dipertahankan sesuai Keputusan D5.
 */
export default {
  id: 'olim-sd-bilangan-exp1',
  slug: 'bilangan-sd-expert-1',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  topic: 'Bilangan Olimpiade SD Kelas 4–5 (Expert 1)',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan'
  ],
  lang: 'id',
  langDisplay: 'ID / EN',
  competition: 'Seri Pembinaan OSN',
  title: 'Bilangan Olimpiade Matematika SD Kelas 4–5 – Expert 1',
  totalMarks: 40,
  instructions:
    'Kerjakan seluruh 40 soal (25 Pilihan Ganda pada Bagian A dan 15 Isian Singkat pada Bagian B). Setiap soal dipertahankan dalam bahasa aslinya (Bahasa Indonesia atau Bahasa Inggris).',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4\u20135 \u2013 EXPERT 1.pdf',
    driveFolder: '1cBh4tYsSB8-l2fiGVEyfoes5pKtMQU2h',
    license: 'CC BY 4.0'
  },
  status: 'published',
  accessTier: 'olympiad-pro',
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
            'A number leaves a remainder of $2$ when divided by $3$, a remainder of $3$ when divided by $4$, a remainder of $4$ when divided by $5$, and a remainder of $5$ when divided by $6$. What is the smallest such positive integer?\nA. 29\nB. 59\nC. 89\nD. 119',
          answer: 'B. 59',
          principle:
            'When the remainder is always $1$ less than the divisor ($d - 1$), adding $1$ to the number makes it divisible by every divisor, so $N + 1$ is a multiple of their LCM.',
          solution:
            'Let the number be $N$. Notice that $N + 1$ is divisible by $3, 4, 5,$ and $6$.\n$$\\text{LCM}(3, 4, 5, 6) = 60.$$\nThe smallest positive value is $N + 1 = 60$, so $N = 59$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Sebuah bilangan prima $p$ disebut "Prima Istimewa" jika $2p + 1$ dan $4p + 3$ juga merupakan bilangan prima. Jika nilai $p$ kurang dari $20$ ($p < 20$), berapakah nilai $p$ terbesar yang memenuhi syarat tersebut?\nA. 7\nB. 11\nC. 13\nD. 17',
          answer: 'B. 11',
          principle:
            'Uji bilangan prima secara menurun dari yang terbesar di bawah batas atas hingga seluruh syarat keprimaan terpenuhi.',
          solution:
            'Uji bilangan prima $p < 20$ dari yang terbesar:\n- $p = 19 \\implies 2(19) + 1 = 39 = 3 \\times 13$ (bukan prima).\n- $p = 17 \\implies 2(17) + 1 = 35 = 5 \\times 7$ (bukan prima).\n- $p = 13 \\implies 2(13) + 1 = 27 = 3^3$ (bukan prima).\n- $p = 11 \\implies 2(11) + 1 = 23$ (prima) dan $4(11) + 3 = 47$ (prima).\nJadi nilai $p$ terbesar yang memenuhi adalah $11$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Simplify the following complex fraction to its simplest form:\n$$\\frac{1}{1 + \\frac{1}{1 + \\frac{1}{2}}}$$\nA. $\\frac{2}{3}$\nB. $\\frac{3}{4}$\nC. $\\frac{3}{5}$\nD. $\\frac{5}{8}$',
          answer: 'C. $\\frac{3}{5}$',
          principle:
            'Simplify nested continued fractions step by step from the innermost denominator outward.',
          solution:
            'Work from the bottom layer upward:\n$$1 + \\frac{1}{2} = \\frac{3}{2} \\implies \\frac{1}{\\frac{3}{2}} = \\frac{2}{3}.$$\nNext layer:\n$$1 + \\frac{2}{3} = \\frac{5}{3} \\implies \\frac{1}{\\frac{5}{3}} = \\frac{3}{5}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Bilangan desimal $2024$ jika diubah ke dalam sistem bilangan basis $7$ akan memiliki angka satuan (digit paling kanan) yang bernilai...\nA. 1\nB. 2\nC. 3\nD. 4',
          answer: 'A. 1',
          principle:
            'Digit paling kanan (satuan) suatu bilangan bulat dalam basis $b$ sama dengan sisa pembagian bilangan tersebut terhadap $b$.',
          solution:
            'Dalam basis $7$, suatu bilangan ditulis sebagai $a_k 7^k + \\dots + a_1 \\cdot 7 + a_0$ dengan $0 \\le a_0 < 7$. Semua suku kecuali $a_0$ habis dibagi $7$, sehingga digit satuan $a_0$ tepat sama dengan sisa pembagian $2024$ oleh $7$:\n$$2024 = 7 \\times 289 + 1.$$\nKarena sisa pembagiannya $1$, angka satuan pada basis $7$ adalah $1$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Find the sum of the first $20$ terms of the sequence: $1, -2, 3, -4, 5, -6, 7, -8, \\dots$\nA. $-10$\nB. $-20$\nC. $10$\nD. $20$',
          answer: 'A. $-10$',
          principle:
            'Group consecutive pairs of terms with alternating signs when each pair yields a constant sum.',
          solution:
            'Group the $20$ terms into $10$ consecutive pairs:\n$$(1 - 2) + (3 - 4) + (5 - 6) + \\dots + (19 - 20).$$\nEach pair equals $-1$, so the total sum is $10 \\times (-1) = -10$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Didefinisikan sebuah operasi bilangan bulat $a \\star b = a^b - b^a + (a \\times b)$. Tentukan nilai akhir dari $(3 \\star 2) \\star 1$.\nA. 6\nB. 7\nC. 13\nD. 14',
          answer: 'C. 13',
          principle:
            'Substitusikan pasangan bilangan ke definisi operasi secara berurutan dimulai dari operasi di dalam tanda kurung.',
          solution:
            'Hitung terlebih dahulu $3 \\star 2$:\n$$3 \\star 2 = 3^2 - 2^3 + (3 \\times 2) = 9 - 8 + 6 = 7.$$\nLanjutkan dengan $7 \\star 1$:\n$$7 \\star 1 = 7^1 - 1^7 + (7 \\times 1) = 7 - 1 + 7 = 13.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'The product of two positive integers is $10,800$, and their Greatest Common Factor (GCF) is $30$. How many such unordered pairs of positive integers exist?\nA. 2\nB. 3\nC. 4\nD. 6',
          answer: 'A. 2',
          principle:
            'Write two integers with GCF $g$ as $gx$ and $gy$ where $\\gcd(x, y) = 1$, then count coprime factor pairs of $\\frac{\\text{product}}{g^2}$.',
          solution:
            'Let the two numbers be $30x$ and $30y$ with $\\gcd(x, y) = 1$. Then:\n$$(30x)(30y) = 900xy = 10,800 \\implies xy = 12.$$\nThe unordered coprime positive integer pairs $\\{x, y\\}$ with $xy = 12$ are $\\{1, 12\\}$ and $\\{3, 4\\}$ (note $\\{2, 6\\}$ is excluded because $\\gcd(2, 6) = 2 \\ne 1$).\nThus, there are $2$ unordered pairs.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Berapa banyak bilangan komposit ganjil yang nilainya kurang dari $30$?\nA. 3\nB. 4\nC. 5\nD. 6',
          answer: 'C. 5',
          principle:
            'Bilangan komposit adalah bilangan asli lebih dari $1$ yang bukan bilangan prima (memiliki lebih dari dua faktor positif).',
          solution:
            'Bilangan $1$ hanya memiliki satu faktor sehingga bukan bilangan prima maupun komposit. Karena $7^2 = 49 > 30$, setiap bilangan komposit ganjil kurang dari $30$ pasti memiliki faktor prima ganjil $\\le 5$, yaitu $3$ atau $5$:\n- Kelipatan ganjil $3$ yang lebih dari $3$ dan kurang dari $30$: $9 = 3^2$, $15 = 3 \\times 5$, $21 = 3 \\times 7$, $27 = 3^3$.\n- Kelipatan ganjil $5$ lainnya yang lebih dari $5$ dan kurang dari $30$: $25 = 5^2$.\nJadi terdapat $5$ bilangan komposit ganjil yang kurang dari $30$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'What is the $2027\\text{th}$ digit after the decimal point in the decimal representation of the fraction $\\frac{5}{7}$?\nA. 2\nB. 4\nC. 5\nD. 8',
          answer: 'D. 8',
          principle:
            'For a repeating decimal with period $k$, the $n\\text{th}$ digit after the decimal point corresponds to position $n \\bmod k$ in the repeating cycle.',
          solution:
            'The decimal expansion of $\\frac{5}{7}$ has a repeating block of length $6$:\n$$\\frac{5}{7} = 0.\\overline{714285}.$$\nDivide $2027$ by $6$:\n$$2027 = 337 \\times 6 + 5 \\implies 2027 \\equiv 5 \\pmod 6.$$\nThe $5\\text{th}$ digit in $714285$ is $8$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Diketahui persamaan dalam beda basis bilangan: $144_x = 100_y$. Jika $x$ dan $y$ adalah bilangan bulat positif yang kurang dari $10$, berapakah nilai maksimum yang mungkin dari $x + y$?\nA. 13\nB. 14\nC. 15\nD. 16',
          answer: 'D. 16',
          principle:
            'Konversikan bilangan dari basis $x$ dan basis $y$ ke basis $10$ dengan syarat nilai setiap basis harus lebih besar daripada digit terbesar yang muncul.',
          solution:
            'Konversi ke basis $10$:\n$$x^2 + 4x + 4 = y^2 \\implies (x + 2)^2 = y^2.$$\nKarena $x, y > 0$, maka $y = x + 2$. Digit $4$ pada $144_x$ mensyaratkan $x \\ge 5$, dan $x, y < 10$.\nAgar $x + y$ maksimum, ambil nilai terbesar $y = 9$, sehingga $x = 7$.\nJadi nilai maksimum $x + y = 7 + 9 = 16$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'The sum of the first $n$ terms of a specific sequence is given by the formula $S_n = n^2 + 2n$. What is the value of the $10\\text{th}$ term in this sequence?\nA. 19\nB. 21\nC. 120\nD. 121',
          answer: 'B. 21',
          principle:
            'The $n\\text{th}$ term of a sequence equals the difference between the sum of the first $n$ terms and the sum of the first $n - 1$ terms: $a_n = S_n - S_{n-1}$.',
          solution:
            'Compute $S_{10}$ and $S_9$:\n$$S_{10} = 10^2 + 2(10) = 120, \\qquad S_9 = 9^2 + 2(9) = 81 + 18 = 99.$$\nTherefore, the $10\\text{th}$ term is $a_{10} = 120 - 99 = 21$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Dalam sebuah kompetisi matematika, skor diberikan dengan aturan: Benar mendapat $+4$, Salah mendapat $-1$, dan Tidak Dijawab mendapat $0$. Dari total $50$ soal, Budi memperoleh skor $125$. Jika Budi membiarkan $5$ soal tidak dijawab, berapa banyak soal yang dijawab Budi dengan salah?\nA. 9\nB. 10\nC. 11\nD. 12',
          answer: 'C. 11',
          principle:
            'Bentuk sistem persamaan linear dua variabel dari total soal yang dijawab dan total skor yang diperoleh.',
          solution:
            'Banyak soal yang dijawab adalah $50 - 5 = 45$ soal. Misalkan $B$ adalah banyak jawaban benar dan $S$ adalah banyak jawaban salah:\n$$B + S = 45 \\quad \\text{dan} \\quad 4B - S = 125.$$\nJumlahkan kedua persamaan: $5B = 170 \\implies B = 34$.\nMaka $S = 45 - 34 = 11$ soal salah.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Three large bells ring at exact intervals of $36$ seconds, $40$ seconds, and $48$ seconds, respectively. If they all start ringing together exactly at `12:00:00`, at what precise time will they next ring together?\nA. 12:08:00\nB. 12:12:00\nC. 12:14:24\nD. 12:24:00',
          answer: 'B. 12:12:00',
          principle:
            'Periodic events starting simultaneously next coincide after a duration equal to the Least Common Multiple (LCM) of their periods.',
          solution:
            'Find the prime factorizations: $36 = 2^2 \\times 3^2$, $40 = 2^3 \\times 5$, and $48 = 2^4 \\times 3$.\n$$\\text{LCM}(36, 40, 48) = 2^4 \\times 3^2 \\times 5 = 720\\text{ seconds}.$$\nSince $720\\text{ seconds} = 12\\text{ minutes}$, the bells next ring together at `12:12:00`.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Tentukan jumlah dari semua faktor prima ganjil penyusun bilangan $9.240$.\nA. 15\nB. 21\nC. 23\nD. 26',
          answer: 'D. 26',
          principle:
            'Uraikan bilangan menjadi faktorisasi prima, lalu jumlahkan setiap faktor prima berbeda yang bernilai ganjil.',
          solution:
            'Faktorisasi prima dari $9.240$:\n$$9.240 = 10 \\times 924 = (2 \\times 5) \\times (4 \\times 231) = 2^3 \\times 5 \\times (3 \\times 77) = 2^3 \\times 3 \\times 5 \\times 7 \\times 11.$$\nFaktor-faktor prima ganjilnya adalah $3, 5, 7,$ dan $11$, sehingga jumlahnya:\n$$3 + 5 + 7 + 11 = 26.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'If the fraction $\\frac{x}{y}$ is equal to $0.875$, and $x$ and $y$ are coprime positive integers, what is the value of $y - x$?\nA. 1\nB. 2\nC. 3\nD. 7',
          answer: 'A. 1',
          principle:
            'Convert the terminating decimal to a fraction over a power of $10$ and reduce it to lowest terms so numerator and denominator are coprime.',
          solution:
            'Write $0.875$ as a fraction and simplify:\n$$0.875 = \\frac{875}{1000} = \\frac{875 \\div 125}{1000 \\div 125} = \\frac{7}{8}.$$\nSince $\\gcd(7, 8) = 1$, we have $x = 7$ and $y = 8$, giving $y - x = 8 - 7 = 1$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Hasil dari operasi pengurangan $1000_2 - 101_2$ jika dinyatakan kembali dalam sistem bilangan biner (basis $2$) adalah...\nA. $11_2$\nB. $101_2$\nC. $110_2$\nD. $111_2$',
          answer: 'A. $11_2$',
          principle:
            'Pengurangan bilangan biner dapat dilakukan dengan mengonversi masing-masing bilangan ke basis $10$ atau meminjam antar-nilai tempat pangkat $2$.',
          solution:
            'Konversikan ke basis $10$:\n$$1000_2 = 2^3 = 8, \\qquad 101_2 = 2^2 + 2^0 = 5.$$\nHasil pengurangannya adalah $8 - 5 = 3$, yang dalam basis $2$ bernilai $2^1 + 2^0 = 11_2$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Observe the mathematical pattern: $1^2 - 2^2 + 3^2 - 4^2 + \\dots + 19^2 - 20^2$. Calculate the final sum of this series.\nA. $-190$\nB. $-210$\nC. $-400$\nD. $210$',
          answer: 'B. $-210$',
          principle:
            'Factor consecutive square differences using $a^2 - b^2 = (a - b)(a + b)$ to reduce the series to an arithmetic sum.',
          solution:
            'Pair consecutive terms and apply $a^2 - b^2 = (a - b)(a + b)$:\n$$(1^2 - 2^2) + (3^2 - 4^2) + \\dots + (19^2 - 20^2) = -(1 + 2) - (3 + 4) - \\dots - (19 + 20).$$\nThis equals the negative of the sum of the first $20$ positive integers:\n$$-\\frac{20 \\times 21}{2} = -210.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Jika $a$ dan $b$ adalah bilangan bulat positif yang memenuhi persamaan $\\frac{a}{11} + \\frac{b}{3} = \\frac{31}{33}$, berapakah hasil dari $a \\times b$?\nA. 5\nB. 6\nC. 8\nD. 9',
          answer: 'B. 6',
          principle:
            'Samakan penyebut pecahan untuk memperoleh persamaan Diophantine linear, lalu uji bilangan bulat positif yang memenuhi.',
          solution:
            'Samakan penyebut menjadi $33$:\n$$\\frac{3a + 11b}{33} = \\frac{31}{33} \\implies 3a + 11b = 31.$$\nKarena $a \\ge 1$, maka $3a \\ge 3$, sehingga $11b = 31 - 3a \\le 28$. Akibatnya, satu-satunya nilai bulat positif $b$ yang mungkin hanyalah $b = 1$ atau $b = 2$:\n- Jika $b = 1$, maka $3a = 20$ (bukan bilangan bulat).\n- Jika $b = 2$, maka $3a = 9 \\implies a = 3$.\nDiperoleh $a = 3$ dan $b = 2$, sehingga $a \\times b = 3 \\times 2 = 6$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'What is the exact base-10 value of the largest possible $3$-digit number written in base-$5$?\nA. 124\nB. 125\nC. 216\nD. 343',
          answer: 'A. 124',
          principle:
            'In base $b$, the largest digit is $b - 1$, so the largest $n$-digit number is $(b - 1)\\dots(b - 1)_b = b^n - 1$.',
          solution:
            'The largest digit in base $5$ is $4$, so the largest $3$-digit number in base $5$ is $444_5$:\n$$444_5 = 4 \\times 5^2 + 4 \\times 5^1 + 4 \\times 5^0 = 100 + 20 + 4 = 124.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Sebuah kapal selam berada di kedalaman $120$ meter di bawah permukaan laut. Kapal selam tersebut kemudian naik $45$ meter, lalu menyelam lagi sejauh $65$ meter. Berapa meter jarak vertikal kapal selam tersebut dari permukaan laut sekarang?\nA. 10 meter\nB. 100 meter\nC. 140 meter\nD. 230 meter',
          answer: 'C. 140 meter',
          principle:
            'Gunakan bilangan bertanda dengan permukaan laut sebagai titik nol ($0$), kedalaman di bawah laut bernilai negatif, dan jarak merupakan nilai mutlak posisi akhir.',
          solution:
            'Posisi awal adalah $-120\\text{ m}$. Setelah naik $45\\text{ m}$ dan menyelam $65\\text{ m}$:\n$$-120 + 45 - 65 = -140\\text{ m}.$$\nJarak vertikalnya dari permukaan laut adalah $|-140| = 140\\text{ meter}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'What is the smallest positive integer that has exactly $10$ positive divisors?\nA. 30\nB. 48\nC. 72\nD. 120',
          answer: 'B. 48',
          principle:
            'An integer with prime factorization $p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k}$ has $(e_1 + 1)(e_2 + 1)\\cdots(e_k + 1)$ positive divisors.',
          solution:
            'Since $10 = 10$ or $10 = 5 \\times 2$, the prime factorization must have the form $p^9$ or $p^4 q^1$.\nAssign the smallest primes to the largest exponents:\n$$2^9 = 512, \\qquad 2^4 \\times 3^1 = 16 \\times 3 = 48.$$\nThe smallest such integer is $48$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Angka satuan (digit paling kanan) dari hasil perpangkatan $2027^{2027}$ adalah...\nA. 1\nB. 3\nC. 7\nD. 9',
          answer: 'B. 3',
          principle:
            'Angka satuan suatu perpangkatan hanya ditentukan oleh angka satuan basisnya dan mengikuti pola periodik terhadap eksponen.',
          solution:
            'Digit satuan $2027$ adalah $7$. Pola angka satuan $7^k$ berulang setiap $4$ langkah:\n$$7^1 \\equiv 7, \\quad 7^2 \\equiv 9, \\quad 7^3 \\equiv 3, \\quad 7^4 \\equiv 1 \\pmod{10}.$$\nKarena $2027 = 4 \\times 506 + 3$, sisanya adalah $3$, sehingga angka satuannya sama dengan $7^3$, yaitu $3$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'A rectangular floor measuring $120\\text{ cm}$ by $168\\text{ cm}$ is to be completely covered with identical square tiles without any gaps or overlapping. What is the minimum number of such square tiles required to cover the floor?\nA. 24\nB. 30\nC. 35\nD. 42',
          answer: 'C. 35',
          principle:
            'Minimizing the number of identical square tiles requires maximizing the tile side length, which equals the GCF of the rectangle dimensions.',
          solution:
            'To cover the floor with no gaps or overlaps, the square tile side length $s$ must divide both $120$ and $168$. Using prime factorizations:\n$$120 = 2^3 \\times 3 \\times 5, \\qquad 168 = 2^3 \\times 3 \\times 7 \\implies s_{\\max} = \\gcd(120, 168) = 2^3 \\times 3 = 24\\text{ cm}.$$\nNumber of tiles along each side: $\\frac{120}{24} = 5$ and $\\frac{168}{24} = 7$.\nMinimum number of tiles $= 5 \\times 7 = 35$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Manakah urutan pecahan berikut yang benar jika diurutkan dari nilai yang paling kecil hingga yang paling besar?\nA. $\\frac{17}{24}, \\frac{5}{7}, \\frac{11}{15}$\nB. $\\frac{5}{7}, \\frac{17}{24}, \\frac{11}{15}$\nC. $\\frac{11}{15}, \\frac{5}{7}, \\frac{17}{24}$\nD. $\\frac{5}{7}, \\frac{11}{15}, \\frac{17}{24}$',
          answer: 'A. $\\frac{17}{24}, \\frac{5}{7}, \\frac{11}{15}$',
          principle:
            'Bandingkan pecahan dengan menyamakan penyebut atau membandingkan perkalian silangnya secara berpasangan.',
          solution:
            'Bandingkan $\\frac{17}{24}$ dan $\\frac{5}{7}$: $17 \\times 7 = 119 < 24 \\times 5 = 120$, sehingga $\\frac{17}{24} < \\frac{5}{7}$.\nBandingkan $\\frac{5}{7}$ dan $\\frac{11}{15}$: $5 \\times 15 = 75 < 7 \\times 11 = 77$, sehingga $\\frac{5}{7} < \\frac{11}{15}$.\nUrutan dari yang paling kecil adalah $\\frac{17}{24}, \\frac{5}{7}, \\frac{11}{15}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'The fraction $\\frac{7}{10}$ can be written as the sum of two distinct unit fractions (fractions with a numerator of $1$): $\\frac{1}{a} + \\frac{1}{b}$. If $a < b$, what is the value of $a + b$?\nA. 7\nB. 12\nC. 22\nD. 24',
          answer: 'A. 7',
          principle:
            'For $\\frac{1}{a} + \\frac{1}{b} = \\frac{7}{10}$ with positive integers $a < b$, bounding $\\frac{2}{a} > \\frac{7}{10} > \\frac{1}{a}$ restricts the possible values of $a$ to a unique candidate.',
          solution:
            'Since $0 < a < b$, we have $\\frac{1}{a} < \\frac{7}{10} < \\frac{2}{a}$, which gives $\\frac{10}{7} < a < \\frac{20}{7}$, so $a = 2$ is the only integer candidate.\nSubstituting $a = 2$ yields:\n$$\\frac{1}{b} = \\frac{7}{10} - \\frac{1}{2} = \\frac{2}{10} = \\frac{1}{5} \\implies b = 5.$$\nThus $a + b = 2 + 5 = 7$.',
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
          prompt:
            'Evaluate the following sum of integers: $100 - 98 + 96 - 94 + 92 - 90 + \\dots + 4 - 2$.',
          answer: '50',
          answerNumeric: [{ name: 'sum', value: 50 }],
          principle:
            'Group consecutive subtraction pairs when each pair simplifies to the same constant.',
          solution:
            'There are $50$ consecutive even integers from $100$ down to $2$, forming $25$ pairs:\n$$(100 - 98) + (96 - 94) + \\dots + (4 - 2) = 25 \\times 2 = 50.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'KPK dari dua buah bilangan adalah $480$ dan FPB-nya adalah $12$. Jika salah satu dari bilangan tersebut adalah $60$, berapakah nilai bilangan yang lain?',
          answer: '96',
          answerNumeric: [{ name: 'bilangan', value: 96 }],
          principle:
            'Untuk dua bilangan bulat positif $A$ dan $B$, berlaku identitas $A \\times B = \\text{KPK}(A, B) \\times \\text{FPB}(A, B)$.',
          solution:
            'Gunakan sifat $A \\times B = \\text{KPK} \\times \\text{FPB}$:\n$$60 \\times B = 480 \\times 12 \\implies B = \\frac{480}{60} \\times 12 = 8 \\times 12 = 96.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '28',
          marks: 1,
          prompt: 'How many prime numbers less than $100$ end with the digit $3$?',
          answer: '7',
          answerNumeric: [{ name: 'count', value: 7 }],
          principle:
            'List all positive integers below $100$ ending in $3$ and filter out those divisible by smaller primes such as $3$ or $7$.',
          solution:
            'The integers less than $100$ ending in $3$ are $3, 13, 23, 33, 43, 53, 63, 73, 83, 93$.\nSince $\\sqrt{100} = 10$, any composite number below $100$ has a prime factor $\\le 7$. Numbers ending in $3$ are never divisible by $2$ or $5$, so we only need to remove multiples of $3$ and $7$:\n- Multiples of $3$: $33 = 3 \\times 11$, $63 = 3^2 \\times 7$, $93 = 3 \\times 31$.\n- Multiples of $7$: $63$ (already removed).\nThe remaining $7$ numbers—$3, 13, 23, 43, 53, 73,$ and $83$—are all prime.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Tentukan bentuk pecahan biasa paling sederhana dari penjumlahan desimal berulang berikut: $0,454545\\dots + 0,111111\\dots$',
          answer: '$\\frac{56}{99}$',
          principle:
            'Desimal berulang dengan dua digit berulang $0,\\overline{ab}$ bernilai $\\frac{ab}{99}$, sedangkan satu digit berulang $0,\\overline{a}$ bernilai $\\frac{a}{9}$.',
          solution:
            'Ubah masing-masing desimal berulang menjadi pecahan biasa:\n$$0,454545\\dots = \\frac{45}{99}, \\qquad 0,111111\\dots = \\frac{1}{9} = \\frac{11}{99}.$$\nJumlahkan keduanya:\n$$\\frac{45}{99} + \\frac{11}{99} = \\frac{56}{99}.$$\nKarena $\\text{FPB}(56, 99) = 1$, pecahan $\\frac{56}{99}$ sudah paling sederhana.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'If an unknown integer $x$ is written in base $6$ as $215_6$, write the value of $x$ in the base-$3$ number system.',
          answer: '$10002_3$',
          principle:
            'Convert the number from base $6$ to base $10$ by expanding powers of $6$, then convert from base $10$ to base $3$ via repeated division by $3$.',
          solution:
            'First convert $215_6$ to base $10$:\n$$x = 2 \\times 6^2 + 1 \\times 6^1 + 5 \\times 6^0 = 72 + 6 + 5 = 83.$$\nNext convert $83$ to base $3$:\n$$83 = 81 + 2 = 1 \\times 3^4 + 0 \\times 3^3 + 0 \\times 3^2 + 0 \\times 3^1 + 2 \\times 3^0 = 10002_3.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'Jika suku ke-$n$ pada suatu barisan bilangan dirumuskan dengan $A_n = 2n^2 - n + 1$, berapakah nilai pasti dari $A_{10} - A_5$?',
          answer: '145',
          answerNumeric: [{ name: 'selisih', value: 145 }],
          principle:
            'Substitusikan masing-masing indeks $n$ ke rumus suku ke-$n$, kemudian hitung selisihnya.',
          solution:
            'Hitung $A_{10}$ dan $A_5$:\n$$A_{10} = 2(10^2) - 10 + 1 = 200 - 10 + 1 = 191,$$\n$$A_5 = 2(5^2) - 5 + 1 = 50 - 5 + 1 = 46.$$\nMaka $A_{10} - A_5 = 191 - 46 = 145$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'What is the greatest three-digit positive integer that is a common multiple of both $12$ and $15$?',
          answer: '960',
          answerNumeric: [{ name: 'integer', value: 960 }],
          principle:
            'Every common multiple of two integers is a multiple of their LCM; find the largest multiple of the LCM not exceeding $999$.',
          solution:
            'First compute $\\text{LCM}(12, 15) = 60$.\nDivide the largest $3$-digit integer by $60$:\n$$999 = 16 \\times 60 + 39.$$\nThus, the greatest $3$-digit common multiple is $16 \\times 60 = 960$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Jumlah dari $11$ bilangan bulat yang berurutan adalah tepat $0$. Berapakah hasil kali dari bilangan terkecil dan bilangan terbesar dalam deret tersebut?',
          answer: '$-25$',
          answerNumeric: [{ name: 'hasilKali', value: -25 }],
          principle:
            'Pada ganjil banyaknya bilangan bulat berurutan, rata-ratanya sama dengan bilangan tengah (median) deret tersebut.',
          solution:
            'Karena jumlah $11$ bilangan berurutan adalah $0$, bilangan tengahnya (suku ke-$6$) adalah $\\frac{0}{11} = 0$.\nDeret lengkapnya adalah $-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5$.\nHasil kali bilangan terkecil dan terbesar adalah $(-5) \\times 5 = -25$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '34',
          marks: 1,
          prompt:
            'What is the smallest numerical base $b$ such that the number written as $15_b$ evaluates to a prime number in the standard base-$10$ system?',
          answer: '6',
          answerNumeric: [{ name: 'base', value: 6 }],
          principle:
            'The base $b$ must strictly exceed every digit used in the representation, and the base-$10$ value of $15_b$ is $b + 5$.',
          solution:
            'Because the digit $5$ appears in $15_b$, we must have $b \\ge 6$.\nIn base $10$, $15_b = 1 \\times b + 5 = b + 5$.\nTesting the smallest valid base $b = 6$ gives $6 + 5 = 11$, which is prime. Thus, $b = 6$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'Berapakah hasil dari perkalian pecahan berpola berikut: $\\left(1 - \\frac{1}{2^2}\\right) \\times \\left(1 - \\frac{1}{3^2}\\right) \\times \\left(1 - \\frac{1}{4^2}\\right) \\times \\dots \\times \\left(1 - \\frac{1}{10^2}\\right)$? (Tuliskan dalam bentuk pecahan biasa).',
          answer: '$\\frac{11}{20}$',
          principle:
            'Faktorkan setiap suku menggunakan selisih kuadrat $1 - \\frac{1}{k^2} = \\frac{(k - 1)(k + 1)}{k^2}$ agar faktor perantara saling mencoret (perkalian teleskopik).',
          solution:
            'Ubah tiap faktor dengan identitas $1 - \\frac{1}{k^2} = \\frac{k - 1}{k} \\cdot \\frac{k + 1}{k}$:\n$$\\left(\\frac{1}{2} \\cdot \\frac{3}{2}\\right) \\left(\\frac{2}{3} \\cdot \\frac{4}{3}\\right) \\left(\\frac{3}{4} \\cdot \\frac{5}{4}\\right) \\cdots \\left(\\frac{9}{10} \\cdot \\frac{11}{10}\\right).$$\nFaktor-faktor tengah saling meniadakan, menyisakan:\n$$\\frac{1}{2} \\times \\frac{11}{10} = \\frac{11}{20}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '36',
          marks: 1,
          prompt:
            'Convert the repeating decimal $0.232323\\dots$ written in base-$4$ into a simplified fraction evaluated in base-$10$.',
          answer: '$\\frac{11}{15}$',
          principle:
            'A $2$-digit repeating fractional expansion $0.\\overline{xy}_b$ in base $b$ equals $\\frac{xy_b}{b^2 - 1}$ in base $10$.',
          solution:
            'Let $N = 0.232323\\dots_4$. Multiplying by $4^2 = 16$ shifts two base-$4$ places left:\n$$16N = 23_4 + N \\implies 15N = 23_4.$$\nSince $23_4 = 2 \\times 4 + 3 = 11$ in base $10$, we obtain $N = \\frac{11}{15}$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '37',
          marks: 1,
          prompt:
            'Bilangan cacah $n$ disebut "sangat komposit" (highly composite) jika ia memiliki faktor pembagi positif yang lebih banyak daripada bilangan cacah manapun yang lebih kecil dari $n$. Bilangan sangat komposit pertama yang nilainya lebih besar dari $12$ adalah...',
          answer: '24',
          answerNumeric: [{ name: 'bilangan', value: 24 }],
          principle:
            'Hitung banyak faktor positif $d(n) = (e_1 + 1)(e_2 + 1)\\cdots$ dan cari bilangan terkecil $n > 12$ yang melebihi rekor sebelumnya $d(12) = 6$.',
          solution:
            'Diketahui $12 = 2^2 \\times 3$ memiliki $d(12) = (2 + 1)(1 + 1) = 6$ faktor.\nAgar suatu bilangan $n$ memiliki lebih dari $6$ faktor positif ($d(n) \\ge 7$), faktorisasi primanya harus berbentuk salah satu dari:\n- $p^{e_1}$ dengan $e_1 \\ge 6 \\implies n \\ge 2^6 = 64$.\n- $p^{e_1} q^{e_2}$ dengan $(e_1 + 1)(e_2 + 1) \\ge 7$. Karena tidak ada perkalian dua bilangan $\\ge 2$ yang bernilai $7$, maka minimal $(e_1 + 1)(e_2 + 1) = 4 \\times 2 = 8$ (bentuk $p^3 q$) atau $3 \\times 3 = 9$ (bentuk $p^2 q^2$), sehingga $n \\ge \\min(2^3 \\times 3, \\, 2^2 \\times 3^2) = \\min(24, 36) = 24$.\n- Tiga atau lebih faktor prima berbeda ($p q r$) $\\implies n \\ge 2 \\times 3 \\times 5 = 30$.\nOleh karena itu, tidak ada bilangan $13 \\le n \\le 23$ yang memiliki lebih dari $6$ faktor, sedangkan $n = 24 = 2^3 \\times 3$ memiliki $d(24) = (3 + 1)(1 + 1) = 8 > 6$ faktor.\nJadi bilangan sangat komposit pertama setelah $12$ adalah $24$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '38',
          marks: 1,
          prompt:
            'In a sequence, the first term is $3$. Each subsequent term is found by taking the sum of the digits of the square of the previous term. What is the numerical value of the $2026\\text{th}$ term?',
          answer: '9',
          answerNumeric: [{ name: 'term2026', value: 9 }],
          principle:
            'Compute the initial terms until the sequence reaches a fixed point or repeating cycle.',
          solution:
            'Compute the first three terms:\n- Term $1$: $3$.\n- Term $2$: $3^2 = 9$, sum of digits is $9$.\n- Term $3$: $9^2 = 81$, sum of digits is $8 + 1 = 9$.\nSince $9$ maps to $9$, every term from the $2\\text{nd}$ term onward is $9$. Thus, the $2026\\text{th}$ term is $9$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '39',
          marks: 1,
          prompt:
            'Tentukan nilai-nilai $x$ (dalam bilangan bulat) yang memenuhi persamaan nilai mutlak $|2x - 5| = 13$.',
          answer: '$9$ dan $-4$',
          principle:
            'Persamaan nilai mutlak $|u| = k$ untuk $k > 0$ ekuivalen dengan dua kasus linear: $u = k$ atau $u = -k$.',
          solution:
            'Selesaikan kedua kasus nilai mutlak:\n- Kasus 1: $2x - 5 = 13 \\implies 2x = 18 \\implies x = 9$.\n- Kasus 2: $2x - 5 = -13 \\implies 2x = -8 \\implies x = -4$.\nKedua nilai merupakan bilangan bulat, yaitu $9$ dan $-4$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '40',
          marks: 1,
          prompt:
            'A solid rectangular block of wood has dimensions $24\\text{ cm}$ by $36\\text{ cm}$ by $60\\text{ cm}$. It is to be cut into identical perfect cubes with the maximum possible side length, leaving no wood remaining. How many such cubes will be formed?',
          answer: '30',
          answerNumeric: [{ name: 'cubes', value: 30 }],
          principle:
            'The maximum possible cube side length dividing all three block dimensions evenly is their GCF.',
          solution:
            'To cut the block with no wood left over, the cube edge length $s$ must divide $24$, $36$, and $60$. Using prime factorizations:\n$$24 = 2^3 \\times 3, \\qquad 36 = 2^2 \\times 3^2, \\qquad 60 = 2^2 \\times 3 \\times 5 \\implies s_{\\max} = \\gcd(24, 36, 60) = 2^2 \\times 3 = 12\\text{ cm}.$$\nThe number of $12\\text{ cm}$ cubes along each edge is $\\frac{24}{12} = 2$, $\\frac{36}{12} = 3$, and $\\frac{60}{12} = 5$.\nTotal cubes $= 2 \\times 3 \\times 5 = 30$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
