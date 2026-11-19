/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SD Kelas 4–5 – Basic 2
 * Sumber: BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4–5 – BASIC 2.pdf (Duta e-dukasi).
 * Bahasa asli tiap butir soal (Indonesia / Inggris) dipertahankan sesuai aslinya.
 */
export default {
  id: 'olim-sd-bilangan-basic2',
  slug: 'bilangan-sd-basic-2',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  topic: 'Bilangan Olimpiade SD Kelas 4–5 (Basic 2)',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan'
  ],
  lang: 'id',
  title: 'Bilangan Olimpiade Matematika SD Kelas 4–5 – Basic 2',
  totalMarks: 40,
  instructions:
    'Kerjakan seluruh 40 soal (25 Pilihan Ganda pada Bagian A dan 15 Isian Singkat pada Bagian B). Setiap soal dipertahankan dalam bahasa aslinya (Bahasa Indonesia atau Bahasa Inggris).',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4\u20135 \u2013 BASIC 2.pdf',
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
            'Hasil dari operasi campuran $50 - 10 \\times 2 + 8 \\div 4$ adalah...\nA. 22\nB. 32\nC. 42\nD. 72',
          answer: 'B. 32',
          principle:
            'Pada operasi hitung campuran, perkalian dan pembagian dikerjakan terlebih dahulu dari kiri ke kanan sebelum penjumlahan dan pengurangan.',
          solution:
            'Gunakan urutan operasi (PEMDAS/KuKaBaTaKu):\n$$50 - (10 \\times 2) + (8 \\div 4) = 50 - 20 + 2 = 32.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Evaluate the following sum: $100 - 95 + 90 - 85 + 80 - 75 + \\dots + 10 - 5$.\nA. 25\nB. 50\nC. 75\nD. 100',
          answer: 'B. 50',
          principle:
            'Group consecutive pairs of terms with alternating signs so each pair simplifies to the same constant difference.',
          solution:
            'Group the terms into pairs:\n$$(100 - 95) + (90 - 85) + \\dots + (10 - 5)$$\nEach pair equals $5$. There are $20$ numbers in the sequence, so there are $10$ pairs.\n$$10 \\times 5 = 50.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Seekor burung camar terbang $15$ meter di atas permukaan laut. Ia menukik sejauh $22$ meter lurus ke bawah untuk menangkap ikan. Di manakah posisi burung tersebut sekarang?\nA. 7 meter di bawah permukaan laut\nB. 22 meter di bawah permukaan laut\nC. 37 meter di bawah permukaan laut\nD. 7 meter di atas permukaan laut',
          answer: 'A. 7 meter di bawah permukaan laut',
          principle:
            'Posisi di atas permukaan laut dinyatakan sebagai bilangan positif, sedangkan pergerakan turun ke bawah dinyatakan dengan pengurangan (tanda negatif menunjukkan posisi di bawah permukaan laut).',
          solution:
            'Ketinggian awal $= +15\\text{ m}$. Menukik $22\\text{ m}$ berarti berkurang $22\\text{ m}$:\n$$15 - 22 = -7\\text{ m}.$$\nNilai minus menunjukkan posisi berada $7$ meter di bawah permukaan laut.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'A bell rings every $14$ minutes, and another bell rings every $21$ minutes. If both bells ring together at 10:00 AM, at what time will they ring together next?\nA. 10:21 AM\nB. 10:28 AM\nC. 10:35 AM\nD. 10:42 AM',
          answer: 'D. 10:42 AM',
          principle:
            'Two periodic events occur simultaneously again after an interval equal to the Least Common Multiple (LCM) of their periods.',
          solution:
            'We need the Least Common Multiple (LCM) of $14$ and $21$.\nMultiples of $21$: $21, 42$. Since $42$ is divisible by $14$, the LCM is $42$.\nThey will ring together $42$ minutes after 10:00 AM, which is 10:42 AM.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Pak Ali membagikan $42$ buku dan $70$ pensil ke dalam beberapa kantong plastik. Setiap kantong berisi buku dan pensil dengan jumlah sama rata. Jika ia membuat kantong plastik sebanyak-banyaknya, berapa banyak buku dalam setiap kantong?\nA. 3 buku\nB. 5 buku\nC. 14 buku\nD. 21 buku',
          answer: 'A. 3 buku',
          principle:
            'Jumlah wadah terbanyak untuk pembagian sama rata dua jenis benda sama dengan Faktor Persekutuan Terbesar (FPB) dari kedua jumlah benda tersebut.',
          solution:
            'Cari Faktor Persekutuan Terbesar (FPB) dari $42$ dan $70$ untuk menentukan jumlah kantong maksimal, yaitu $14$ kantong.\nJumlah buku per kantong $= 42 \\div 14 = 3$ buku.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'The least common multiple (LCM) of two prime numbers $p$ and $q$ is $85$. What is the value of $|p - q|$?\nA. 2\nB. 8\nC. 12\nD. 14',
          answer: 'C. 12',
          principle:
            'The LCM of two distinct prime numbers is equal to their product.',
          solution:
            'For distinct prime numbers $p$ and $q$, their LCM is their product: $p \\times q = 85$.\nThe prime factors of $85$ are $5$ and $17$.\nThus, $|17 - 5| = 12$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Jika $\\text{FPB}(a, b) = 1$ dan $\\text{KPK}(a, b) = 72$, dengan $a$ dan $b$ adalah bilangan bulat lebih dari $1$. Nilai dari $a + b$ adalah...\nA. 17\nB. 18\nC. 27\nD. 73',
          answer: 'A. 17',
          principle:
            'Dua bilangan dengan $\\text{FPB} = 1$ bersifat saling prima (koprima), sehingga $\\text{KPK}(a, b) = a \\times b$.',
          solution:
            '$\\text{KPK} = 72$ dan $\\text{FPB} = 1$ berarti $a$ dan $b$ saling prima dengan $a \\times b = 72$.\nPasangan faktor dari $72$ yang saling prima dan lebih dari $1$ adalah $8$ dan $9$.\nMaka $a + b = 8 + 9 = 17$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'How many two-digit prime numbers end with the digit $5$?\nA. 0\nB. 1\nC. 2\nD. 3',
          answer: 'A. 0',
          principle:
            'Any integer greater than $5$ ending in $5$ is divisible by $5$ and therefore composite.',
          solution:
            'Any two-digit number ending in $5$ is divisible by $5$ (e.g., $15, 25, 35, \\dots$) and therefore composite.\nThere are $0$ two-digit prime numbers ending in $5$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Jumlah dua bilangan prima adalah $31$. Hasil kali kedua bilangan prima tersebut adalah...\nA. 30\nB. 58\nC. 85\nD. 114',
          answer: 'B. 58',
          principle:
            'Jumlah dua bilangan bulat bernilai ganjil hanya jika satu bilangan genap dan satu bilangan ganjil; satu-satunya bilangan prima genap adalah $2$.',
          solution:
            'Jumlah dua bilangan prima adalah ganjil ($31$), maka salah satunya harus genap. Satu-satunya bilangan prima genap adalah $2$.\nBilangan prima lainnya adalah $31 - 2 = 29$.\nHasil kalinya $= 2 \\times 29 = 58$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'What is the sum of all distinct prime factors of $210$?\nA. 10\nB. 12\nC. 15\nD. 17',
          answer: 'D. 17',
          principle:
            'Find the prime factorization of a composite number to identify all its distinct prime factors.',
          solution:
            'The prime factorization of $210$ is $2 \\times 3 \\times 5 \\times 7$.\nThe sum of these distinct prime factors is $2 + 3 + 5 + 7 = 17$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Hasil kali tiga bilangan prima berurutan adalah $105$. Jumlah ketiga bilangan tersebut adalah...\nA. 11\nB. 15\nC. 17\nD. 21',
          answer: 'B. 15',
          principle:
            'Faktorkan bilangan komposit menjadi perkalian bilangan-bilangan prima untuk menemukan tiga bilangan prima berurutan yang dimaksud.',
          solution:
            'Coba perkalian tiga bilangan prima kecil berurutan: $2 \\times 3 \\times 5 = 30$.\nCoba selanjutnya: $3 \\times 5 \\times 7 = 105$ (sesuai).\nJumlahnya $= 3 + 5 + 7 = 15$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Which of the following fractions lies strictly between $\\frac{1}{3}$ and $\\frac{1}{2}$?\nA. $\\frac{2}{7}$\nB. $\\frac{1}{4}$\nC. $\\frac{2}{5}$\nD. $\\frac{5}{9}$',
          answer: 'C. $\\frac{2}{5}$',
          principle:
            'Convert fractions to decimals or a common denominator to compare their relative order.',
          solution:
            'Convert to decimals: $\\frac{1}{3} \\approx 0.333$ and $\\frac{1}{2} = 0.50$.\nOption A ($\\frac{2}{7} \\approx 0.286$), Option B ($\\frac{1}{4} = 0.25$), Option C ($\\frac{2}{5} = 0.40$), Option D ($\\frac{5}{9} \\approx 0.556$).\nOnly $\\frac{2}{5}$ lies strictly between $\\frac{1}{3}$ and $\\frac{1}{2}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Nilai dari $0,4 + \\frac{3}{5} \\times 1,5$ adalah...\nA. 1,0\nB. 1,3\nC. 1,5\nD. 2,0',
          answer: 'B. 1,3',
          principle:
            'Selesaikan perkalian terlebih dahulu sebelum penjumlahan, lalu samakan bentuk bilangan (desimal atau pecahan) untuk menghitung hasilnya.',
          solution:
            'Selesaikan perkalian terlebih dahulu dengan mengubah $\\frac{3}{5} = 0,6$.\n$$0,4 + (0,6 \\times 1,5) = 0,4 + 0,9 = 1,3.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'What is the fraction form of the repeating decimal $0.444\\dots$?\nA. $\\frac{4}{10}$\nB. $\\frac{2}{5}$\nC. $\\frac{4}{9}$\nD. $\\frac{5}{11}$',
          answer: 'C. $\\frac{4}{9}$',
          principle:
            'A repeating decimal of the form $0.ddd\\dots$ with a single repeating digit $d$ equals $\\frac{d}{9}$.',
          solution:
            'Let $x = 0.444\\dots$, so $10x = 4.444\\dots$\nSubtracting gives $9x = 4$, therefore $x = \\frac{4}{9}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Sebuah semangka dipotong menjadi beberapa bagian. Andi memakan $\\frac{1}{4}$ bagian, Budi memakan $\\frac{3}{8}$ bagian, dan sisanya dimakan oleh Cici. Berapa bagian semangka yang dimakan Cici?\nA. $\\frac{1}{8}$\nB. $\\frac{1}{4}$\nC. $\\frac{3}{8}$\nD. $\\frac{1}{2}$',
          answer: 'C. $\\frac{3}{8}$',
          principle:
            'Satu kesatuan utuh bernilai $1$; samakan penyebut pecahan terlebih dahulu sebelum melakukan penjumlahan dan pengurangan.',
          solution:
            'Samakan penyebut ($8$): bagian Andi $= \\frac{1}{4} = \\frac{2}{8}$ dan bagian Budi $= \\frac{3}{8}$.\nTotal dimakan $= \\frac{2}{8} + \\frac{3}{8} = \\frac{5}{8}$.\nSisa untuk Cici $= 1 - \\frac{5}{8} = \\frac{8}{8} - \\frac{5}{8} = \\frac{3}{8}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'In the base-$5$ number system, what is the next number counting directly after $44_5$?\nA. $45_5$\nB. $50_5$\nC. $100_5$\nD. $101_5$',
          answer: 'C. $100_5$',
          principle:
            'In base $5$, valid digits are $0$ through $4$; reaching $5$ in any place carries $1$ to the next higher place value.',
          solution:
            'In base $5$, valid digits are $0$–$4$. Counting up from $44_5$: adding $1$ to the units place gives $5$, which carries $1$ to the next column leaving $0$.\nAdding the carry $1$ to $4$ again gives $5$, carrying $1$ over and leaving $0$.\nResult: $100_5$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Umur Budi jika ditulis dalam sistem bilangan biner (basis $2$) adalah $11010_2$. Berapa umur Budi dalam basis $10$?\nA. 24\nB. 26\nC. 28\nD. 30',
          answer: 'B. 26',
          principle:
            'Konversi bilangan biner (basis $2$) ke basis $10$ dilakukan dengan menjumlahkan hasil kali setiap digit dengan pangkat $2$ sesuai nilai tempatnya.',
          solution:
            'Nilai dari $11010_2$:\n$$11010_2 = (1 \\times 2^4) + (1 \\times 2^3) + (0 \\times 2^2) + (1 \\times 2^1) + (0 \\times 2^0) = 16 + 8 + 0 + 2 + 0 = 26.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'The number $27$ in base-$10$ is written in base-$4$ as:\nA. $123_4$\nB. $132_4$\nC. $321_4$\nD. $213_4$',
          answer: 'A. $123_4$',
          principle:
            'Convert a base-$10$ integer to base $4$ by repeated division by $4$ and reading the remainders from bottom to top.',
          solution:
            'Divide repeatedly by $4$:\n$27 \\div 4 = 6$ remainder $3$.\n$6 \\div 4 = 1$ remainder $2$.\n$1 \\div 4 = 0$ remainder $1$.\nReading the remainders backwards gives $123_4$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Jika $3x_4 = 14_{10}$, berapakah nilai digit $x$?\nA. 0\nB. 1\nC. 2\nD. 3',
          answer: 'C. 2',
          principle:
            'Uraikan bilangan basis $4$ menggunakan nilai tempat pangkat $4$ ($4^1$ dan $4^0$) untuk membentuk persamaan dalam basis $10$.',
          solution:
            'Terjemahkan $3x_4$ ke basis $10$:\n$$(3 \\times 4^1) + (x \\times 4^0) = 12 + x.$$\nKarena nilainya $14$, maka $12 + x = 14$, sehingga $x = 2$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'A number sequence starts with $2$ and $4$. Each subsequent term is the sum of the two preceding terms. What is the 6th term of this sequence?\nA. 10\nB. 16\nC. 26\nD. 42',
          answer: 'C. 26',
          principle:
            'Generate consecutive terms recursively by adding the two immediately preceding terms (Fibonacci-type rule).',
          solution:
            'The sequence follows the additive rule:\n1st term $= 2$, 2nd $= 4$, 3rd $= 2 + 4 = 6$, 4th $= 4 + 6 = 10$, 5th $= 6 + 10 = 16$, 6th $= 10 + 16 = 26$.\nThe 6th term is $26$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Pola huruf M, A, T, E, M, A, T, I, K, A ditulis berulang-ulang tanpa henti. Huruf ke-$2023$ pada pola tersebut adalah...\nA. M\nB. A\nC. T\nD. E',
          answer: 'C. T',
          principle:
            'Untuk pola periodik dengan panjang periode $k$, posisi suku ke-$n$ ditentukan oleh sisa pembagian $n$ terhadap $k$.',
          solution:
            'Kata MATEMATIKA terdiri dari $10$ huruf berulang.\nUntuk mencari huruf ke-$2023$, hitung $2023 \\bmod 10 = 3$ (sisa pembagian $2023$ oleh $10$ adalah $3$).\nHuruf ke-$3$ pada kata MATEMATIKA adalah T.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'What is the sum of the first $10$ even positive integers?\nA. 55\nB. 90\nC. 110\nD. 120',
          answer: 'C. 110',
          principle:
            'The sum of the first $n$ even positive integers is $2(1 + 2 + \\dots + n) = n(n + 1)$.',
          solution:
            'The sequence is $2, 4, 6, 8, \\dots, 20$.\n$$\\text{Sum} = 2 \\times (1 + 2 + 3 + \\dots + 10) = 2 \\times 55 = 110.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Diberikan himpunan bilangan $\\{-8, 5, -3, 7\\}$. Jika dua bilangan berbeda dipilih dan dikalikan, nilai minimum yang mungkin diperoleh adalah...\nA. $-56$\nB. $-40$\nC. $-24$\nD. $-21$',
          answer: 'A. $-56$',
          principle:
            'Hasil kali dua bilangan menjadi minimum (paling negatif) jika kita mengalikan bilangan positif terbesar dengan bilangan negatif terkecil (nilai mutlak terbesar).',
          solution:
            'Untuk mendapat nilai minimum, kalikan bilangan positif terbesar ($7$) dengan bilangan negatif terkecil ($-8$).\n$$7 \\times (-8) = -56.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'The product of two numbers is $432$. If their greatest common factor (GCF) is $6$, what is their least common multiple (LCM)?\nA. 36\nB. 72\nC. 144\nD. 216',
          answer: 'B. 72',
          principle:
            'For any two positive integers $a$ and $b$, $\\text{LCM}(a, b) \\times \\text{GCF}(a, b) = a \\times b$.',
          solution:
            'Use the identity $\\text{LCM} \\times \\text{GCF} = \\text{Product}$:\n$$\\text{LCM} \\times 6 = 432 \\implies \\text{LCM} = 432 \\div 6 = 72.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Berapa banyak faktor pembagi positif dari bilangan $72$?\nA. 6\nB. 8\nC. 10\nD. 12',
          answer: 'D. 12',
          principle:
            'Jika faktorisasi prima suatu bilangan adalah $p_1^{e_1} \\times p_2^{e_2} \\times \\dots$, maka banyaknya faktor positif adalah $(e_1 + 1)(e_2 + 1)\\dots$',
          solution:
            'Faktorisasi prima dari $72$ adalah $2^3 \\times 3^2$.\nJumlah faktor pembaginya adalah hasil kali $(\\text{pangkat} + 1)$:\n$$(3 + 1)(2 + 1) = 4 \\times 3 = 12\\text{ faktor}.$$',
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
            'The product of three distinct positive integers is $36$. What is the smallest possible sum of these three numbers?',
          answer: '11',
          answerNumeric: [{ name: 'sum', value: 11 }],
          principle:
            'List all triples of distinct positive integer factors of $36$ and choose the triple with the minimum sum (factors closest together yield the smallest sum).',
          solution:
            'The distinct positive integers that multiply to $36$ are $(1, 2, 18)$, $(1, 3, 12)$, $(1, 4, 9)$, or $(2, 3, 6)$.\nTheir sums are $21, 16, 14,$ and $11$.\nThe smallest sum comes from $2 + 3 + 6 = 11$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Tentukan selisih antara bilangan asli terbesar dan terkecil yang jika dibulatkan ke puluhan terdekat hasilnya adalah $400$.',
          answer: '9',
          answerNumeric: [{ name: 'selisih', value: 9 }],
          principle:
            'Pembulatan ke puluhan terdekat menjadi $400$ mencakup bilangan mulai dari $395$ sampai $404$.',
          solution:
            'Rentang bilangan asli yang dibulatkan menjadi $400$ (ke puluhan terdekat) adalah $395$ hingga $404$.\nSelisih terbesar dan terkecil $= 404 - 395 = 9$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'If the least common multiple (LCM) of $8$, $12$, and $n$ is $72$, what is the smallest possible positive integer value for $n$?',
          answer: '9',
          answerNumeric: [{ name: 'n', value: 9 }],
          principle:
            'Compare the prime factorizations of the given numbers with that of the LCM; the smallest $n$ needs only the prime powers in the LCM not already supplied by $8$ or $12$.',
          solution:
            'Prime factorizations: $8 = 2^3$, $12 = 2^2 \\times 3$, and $\\text{LCM} = 72 = 2^3 \\times 3^2$.\nSince $8$ already supplies $2^3$, $n$ must supply the $3^2$ factor.\nThe smallest such positive integer is $n = 3^2 = 9$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Dua lampu hias dinyalakan bersamaan. Lampu A berkedip setiap $18$ detik, sedangkan Lampu B berkedip setiap $24$ detik. Berapa kali kedua lampu tersebut berkedip secara bersamaan dalam $5$ menit pertama setelah dinyalakan?',
          answer: '4',
          answerNumeric: [{ name: 'jumlahKedipan', value: 4 }],
          principle:
            'Kedua lampu berkedip bersamaan setiap kelipatan dari $\\text{KPK}$ kedua periodenya.',
          solution:
            'Cari KPK dari $18$ dan $24$, yaitu $72$ detik. Mereka berkedip bersama setiap $72$ detik.\n$5$ menit $= 300$ detik.\nBanyak kedipan bersamaan setelah start awal $= 300 \\div 72 = 4$ (sisa $12$ detik), yakni pada detik ke-$72, 144, 216,$ dan $288$. Jadi $4$ kali.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '30',
          marks: 1,
          prompt: 'What is the smallest $3$-digit prime number?',
          answer: '101',
          answerNumeric: [{ name: 'prime', value: 101 }],
          principle:
            'Test $3$-digit integers starting from $100$ for divisibility by primes up to $\\sqrt{n}$.',
          solution:
            'The first $3$-digit number is $100$ (composite). The next is $101$.\nChecking primes up to $\\sqrt{101}$ ($2, 3, 5, 7$), none divide $101$ evenly.\nThus, $101$ is the smallest $3$-digit prime.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'Berapa banyak faktor prima berbeda yang dimiliki oleh bilangan $1.000$?',
          answer: '2',
          answerNumeric: [{ name: 'jumlahFaktorPrima', value: 2 }],
          principle:
            'Nyatakan bilangan dalam bentuk faktorisasi prima untuk menghitung banyaknya bilangan prima penyusun yang berbeda.',
          solution:
            'Faktorisasi prima dari $1.000 = 10^3 = (2 \\times 5)^3 = 2^3 \\times 5^3$.\nBilangan ini hanya disusun oleh $2$ faktor prima yang berbeda, yaitu $2$ dan $5$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'If $\\frac{5}{7} = \\frac{x}{21} = \\frac{20}{y}$, what is the value of $x + y$?',
          answer: '43',
          answerNumeric: [{ name: 'value', value: 43 }],
          principle:
            'Use equivalent fractions by scaling numerator and denominator by the same nonzero factor.',
          solution:
            'From $\\frac{5}{7} = \\frac{x}{21}$, multiply numerator and denominator by $3$ to get $x = 15$.\nFrom $\\frac{5}{7} = \\frac{20}{y}$, multiply numerator and denominator by $4$ to get $y = 28$.\nThen $x + y = 15 + 28 = 43$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Hitunglah hasil dari bilangan desimal $0,125$ dikalikan dengan $32$.',
          answer: '4',
          answerNumeric: [{ name: 'hasil', value: 4 }],
          principle:
            'Ubah desimal istimewa seperti $0,125$ menjadi pecahan biasa $\\frac{1}{8}$ untuk mempermudah perkalian.',
          solution:
            'Ubah desimal menjadi pecahan biasa: $0,125 = \\frac{125}{1000} = \\frac{1}{8}$.\nKemudian kalikan: $\\frac{1}{8} \\times 32 = 4$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '34',
          marks: 1,
          prompt:
            'Evaluate the complex fraction: $\\frac{1}{1 + \\frac{1}{2}}$',
          answer: '$\\frac{2}{3}$',
          principle:
            'Simplify the denominator of a complex fraction first, then take its reciprocal.',
          solution:
            'First simplify the denominator: $1 + \\frac{1}{2} = \\frac{3}{2}$.\nThen calculate $\\frac{1}{\\frac{3}{2}} = \\frac{2}{3}$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'Ubahlah bilangan biner $1011_2$ ke dalam sistem bilangan basis $4$.',
          answer: '23',
          principle:
            'Konversi antar basis bilangan dapat dilakukan melalui basis $10$ terlebih dahulu, lalu dibagi berulang dengan basis tujuan.',
          solution:
            'Ubah ke basis $10$ dahulu: $1011_2 = 8 + 0 + 2 + 1 = 11$.\nUbah $11$ ke basis $4$: $11 \\div 4 = 2$ sisa $3$.\nPenulisannya dalam basis $4$ adalah $23_4$ (ditulis $23$).',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '36',
          marks: 1,
          prompt: 'Which base $b$ makes the equation $25_b = 17_{10}$ true?',
          answer: '6',
          answerNumeric: [{ name: 'base', value: 6 }],
          principle:
            'Expand a base-$b$ numeral by place values $b^1$ and $b^0$ and solve the resulting equation in base $10$.',
          solution:
            'Translate $25_b$ to base $10$: $2b + 5 = 17$.\nSolve for $b$: $2b = 12$, so $b = 6$ (valid since $b > 5$).',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '37',
          marks: 1,
          prompt:
            'Berapakah nilai desimal (basis $10$) terbesar yang dapat ditulis menggunakan tepat $3$ digit pada sistem bilangan biner (basis $2$)?',
          answer: '7',
          answerNumeric: [{ name: 'nilaiDesimal', value: 7 }],
          principle:
            'Bilangan terbesar dengan $n$ digit pada basis $b$ dibentuk dengan mengisi setiap digit menggunakan angka terbesar yang diizinkan ($b - 1$).',
          solution:
            'Nilai maksimum dengan $3$ digit pada basis $2$ adalah $111_2$.\nDalam desimal: $(1 \\times 4) + (1 \\times 2) + (1 \\times 1) = 7$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '38',
          marks: 1,
          prompt:
            'Find the missing number in the following pattern: $1, 2, 6, 15, \\underline{\\hspace{1.2em}}, 56$.',
          answer: '31',
          answerNumeric: [{ name: 'missingNumber', value: 31 }],
          principle:
            'Examine the first differences between consecutive terms to identify an underlying numerical pattern.',
          solution:
            'Look at the differences between consecutive terms: $+1, +4, +9$. These are consecutive perfect squares ($1^2, 2^2, 3^2$).\nThe next difference should be $4^2 = 16$, so $15 + 16 = 31$.\nCheck the following term: $31 + 5^2 = 31 + 25 = 56$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '39',
          marks: 1,
          prompt:
            'Perhatikan pola perkalian berikut:\n$1 \\times 9 + 2 = 11$\n$12 \\times 9 + 3 = 111$\n$123 \\times 9 + 4 = 1111$\nBerdasarkan pola tersebut, berapakah hasil dari $12345 \\times 9 + 6$?',
          answer: '111111',
          answerNumeric: [{ name: 'hasil', value: 111111 }],
          principle:
            'Amati hubungan antara banyaknya digit pengali (atau bilangan penambah terakhir) dengan banyaknya angka $1$ pada hasil.',
          solution:
            'Pola menunjukkan bahwa jumlah angka $1$ pada hasil akhir sama dengan angka penjumlah terakhir.\nKarena ditambahkan $6$, hasilnya terdiri dari enam angka $1$, yaitu $111111$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '40',
          marks: 1,
          prompt:
            'In a math competition, a correct answer gets $4$ points, a wrong answer gets $-1$ point, and an unanswered question gets $0$ points. Emma answered $15$ questions, out of which $12$ were correct and $3$ were wrong. What is her total score?',
          answer: '45',
          answerNumeric: [{ name: 'score', value: 45 }],
          principle:
            'Multiply the count of each answer category by its corresponding point value and sum the products.',
          solution:
            'Points from correct answers: $12 \\times 4 = 48$ points.\nPoints from wrong answers: $3 \\times (-1) = -3$ points.\nTotal score $= 48 - 3 = 45$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
