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
            'Keluarkan faktor yang sama ($25$) menggunakan sifat distributif agar perhitungan lebih sederhana tanpa mengalikan satu per satu:\n$$25 \\times 18 - 25 \\times 8 = 25 \\times (18 - 8) = 25 \\times 10 = 250.$$',
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
            'Periksa keterbagian masing-masing pilihan:\n- $51$ ($5 + 1 = 6$, habis dibagi $3$): $51 = 3 \\times 17$ (komposit).\n- $57$ ($5 + 7 = 12$, habis dibagi $3$): $57 = 3 \\times 19$ (komposit).\n- $87$ ($8 + 7 = 15$, habis dibagi $3$): $87 = 3 \\times 29$ (komposit).\n- $97$: untuk menguji keprimaannya, cukup periksa bilangan prima $\\le \\sqrt{97}$ (karena $9^2 < 97 < 10^2$), yaitu $2, 3, 5,$ dan $7$. Bilangan $97$ ganjil (tidak habis dibagi $2$), $9 + 7 = 16$ (tidak habis dibagi $3$), tidak berakhiran $0$ atau $5$ (tidak habis dibagi $5$), dan $97 = 7 \\times 13 + 6$ (tidak habis dibagi $7$).\nJadi, $97$ merupakan bilangan prima.',
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
            'Uraikan bilangan $34.567$ berdasarkan nilai tempatnya:\n$$34.567 = 30.000 + 4.000 + 500 + 60 + 7.$$\nDari kiri ke kanan, angka $3$ menempati puluh ribuan, angka $4$ menempati ribuan, $5$ ratusan, $6$ puluhan, dan $7$ satuan. Jadi, angka $4$ bernilai $4.000$.',
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
            'The first term is $a_1 = 3$ and the common difference is $d = 7 - 3 = 4$.\nUsing $a_n = a_1 + (n - 1)d$, the $10$th term requires adding $4$ a total of $10 - 1 = 9$ times:\n$$a_{10} = 3 + (10 - 1) \\times 4 = 3 + 36 = 39.$$',
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
          solution:
            'Suhu awal pada malam hari adalah $-5^\\circ\\text{C}$ ($5^\\circ\\text{C}$ di bawah nol). Karena suhu naik $12^\\circ\\text{C}$, kenaikan sebesar $5^\\circ\\text{C}$ pertama membawanya ke $0^\\circ\\text{C}$, lalu tersisa kenaikan $12 - 5 = 7^\\circ\\text{C}$ di atas nol:\n$$\\text{Suhu siang hari} = -5^\\circ\\text{C} + 12^\\circ\\text{C} = 7^\\circ\\text{C}.$$',
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
            'Nilai tempat dalam basis $2$ dari kanan ke kiri berturut-turut adalah $2^0, 2^1, 2^2, 2^3$:\n$$1011_2 = (1 \\times 2^3) + (0 \\times 2^2) + (1 \\times 2^1) + (1 \\times 2^0) = 8 + 0 + 2 + 1 = 11.$$',
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
            'Each term is the square of its position number: $1 = 1^2$, $4 = 2^2$, $9 = 3^2$, $16 = 4^2$, and $36 = 6^2$.\nTherefore, the $5$th term is $5^2 = 25$.',
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
            'Cari KPK dari $4$ dan $6$ menggunakan faktorisasi prima ($4 = 2^2$ dan $6 = 2 \\times 3$, sehingga $\\text{KPK} = 2^2 \\times 3 = 12$) atau daftar kelipatan:\n- Kelipatan $4$: $4, 8, 12, 16, \\dots$\n- Kelipatan $6$: $6, 12, 18, \\dots$\nKelipatan persekutuan terkecilnya adalah $12$, sehingga kedua lampu akan berkedip bersamaan lagi setelah $12$ detik.',
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
            'Note that $1$ is not prime (it has only one divisor), and $4 = 2^2$ and $6 = 2 \\times 3$ are composite. Thus the first four prime numbers are $2, 3, 5,$ and $7$.\n$$\\text{Sum} = 2 + 3 + 5 + 7 = 17.$$',
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
            'Hitung selisih antarsuku berurutan:\n$$5 - 2 = 3, \\quad 10 - 5 = 5, \\quad 17 - 10 = 7, \\quad 26 - 17 = 9.$$\nSelisihnya membentuk barisan bilangan ganjil berurutan ($+3, +5, +7, +9$), sehingga selisih berikutnya adalah $+11$ (sesuai pola suku ke-$n$: $n^2 + 1$).\nJadi, bilangan selanjutnya adalah $26 + 11 = 37$ (yaitu $6^2 + 1 = 37$).',
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
            'Banyaknya kantong paling banyak adalah FPB dari $20$ dan $30$. Gunakan faktorisasi prima:\n$$20 = 2^2 \\times 5, \\qquad 30 = 2 \\times 3 \\times 5.$$\nAmbil faktor prima persekutuan dengan pangkat terkecil: $\\text{FPB}(20, 30) = 2 \\times 5 = 10$.\nJadi, paling banyak dibutuhkan $10$ kantong plastik (masing-masing berisi $20 \\div 10 = 2$ apel dan $30 \\div 10 = 3$ jeruk).',
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
            'Nilai pecahan positif dapat dibandingkan secara eksak dengan menyamakan pembilang (untuk pembilang sama, penyebut terkecil bernilai terbesar), menyamakan penyebut, atau perkalian silang.',
          solution:
            'Samakan pembilang keempat pecahan menjadi $\\text{KPK}(1, 5, 4, 3) = 60$ secara eksak:\n$$\\frac{1}{2} = \\frac{60}{120}, \\quad \\frac{5}{9} = \\frac{60}{108}, \\quad \\frac{4}{7} = \\frac{60}{105}, \\quad \\frac{3}{5} = \\frac{60}{100}.$$\nUntuk pembilang positif yang sama ($60$), pecahan dengan penyebut terkecil ($100$) memiliki nilai terbesar.\n(Pemeriksaan perkalian silang: $\\frac{4}{7} < \\frac{3}{5}$ karena $4 \\times 5 = 20 < 21 = 3 \\times 7$, dan $\\frac{5}{9} < \\frac{3}{5}$ karena $5 \\times 5 = 25 < 27 = 3 \\times 9$.)\nJadi, nilai terbesar adalah $\\frac{3}{5}$.',
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
            'Setiap suku diperoleh dengan mengalikan suku sebelumnya oleh $2$, membentuk barisan pangkat $2$:\n$$a_1 = 1 = 2^0, \\quad a_2 = 2 = 2^1, \\quad a_3 = 4 = 2^2, \\quad a_4 = 8 = 2^3, \\quad a_5 = 16 = 2^4.$$\nPola suku ke-$n$ adalah $2^{n - 1}$, sehingga bilangan ke-$7$ adalah $a_7 = 2^{7 - 1} = 2^6 = 64$.',
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
            'Decompose $9$ into powers of $2$ ($2^3 = 8, 2^2 = 4, 2^1 = 2, 2^0 = 1$):\n$$9 = 8 + 1 = (1 \\times 2^3) + (0 \\times 2^2) + (0 \\times 2^1) + (1 \\times 2^0).$$\nReading the coefficients of each power from left to right gives $1001_2$.',
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
            'Kerjakan operasi di dalam masing-masing tanda kurung terlebih dahulu:\n$$(15 + 9) = 24 \\quad \\text{dan} \\quad (20 - 12) = 8.$$\nLalu kalikan kedua hasilnya (gunakan sifat distributif $24 = 20 + 4$):\n$$24 \\times 8 = (20 + 4) \\times 8 = 160 + 32 = 192.$$',
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
            'We need $\\text{LCM}(6, 8, 12)$. Factor each number into primes:\n$$6 = 2 \\times 3, \\qquad 8 = 2^3, \\qquad 12 = 2^2 \\times 3.$$\nTake the highest power of each prime factor present:\n$$\\text{LCM}(6, 8, 12) = 2^3 \\times 3 = 8 \\times 3 = 24.$$',
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
            'Pecah $120$ secara bertahap menjadi faktor-faktor prima, lalu gabungkan faktor prima yang sama:\n$$120 = 12 \\times 10 = (4 \\times 3) \\times (2 \\times 5) = (2^2 \\times 3) \\times (2 \\times 5) = 2^3 \\times 3 \\times 5.$$',
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
            'Since $0.85$ has two decimal places, write it over $100$, then divide numerator and denominator by $\\text{GCF}(85, 100) = 5$:\n$$0.85 = \\frac{85}{100} = \\frac{85 \\div 5}{100 \\div 5} = \\frac{17}{20}.$$\nBecause $17$ is prime and does not divide $20$, $\\frac{17}{20}$ is in simplest form.',
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
            'The $k$-th odd positive integer is $2k - 1$, so the $50$th odd integer is $2(50) - 1 = 99$. Pair the $50$ terms from the outside in (Gauss pairing):\n$$S = (1 + 99) + (3 + 97) + \\dots + (49 + 51).$$\nThere are $\\frac{50}{2} = 25$ pairs, each summing to $100$ (which explains why $n$ odd integers always sum to $\\frac{n}{2} \\times (1 + 2n - 1) = n^2$):\n$$S = 25 \\times 100 = 2500.$$',
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
            'Cari KPK dari $15$ dan $20$ dengan faktorisasi prima:\n$$15 = 3 \\times 5, \\qquad 20 = 2^2 \\times 5 \\implies \\text{KPK}(15, 20) = 2^2 \\times 3 \\times 5 = 60\\text{ menit} = 1\\text{ jam}.$$\nMereka akan berangkat bersamaan lagi $1$ jam setelah pukul 07:00, yaitu pukul 08:00.',
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
            'Test two-digit numbers from $99$ downward:\n- $99 = 9 \\times 11$ (composite) and $98 = 2 \\times 49$ (composite).\n- For $97$, check prime divisors $\\le \\sqrt{97}$ (since $9^2 < 97 < 10^2$), namely $2, 3, 5,$ and $7$: $97$ is odd (not divisible by $2$), $9 + 7 = 16$ (not divisible by $3$), does not end in $0$ or $5$ (not divisible by $5$), and $97 = 7 \\times 13 + 6$ (not divisible by $7$).\nTherefore, the largest two-digit prime number is $97$.',
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
            'Uraikan kedua bilangan menjadi faktorisasi prima:\n$$60 = 2^2 \\times 3 \\times 5, \\qquad 84 = 2^2 \\times 3 \\times 7.$$\nAmbil faktor prima persekutuan dengan pangkat terkecil:\n$$\\text{FPB}(60, 84) = 2^2 \\times 3 = 4 \\times 3 = 12.$$',
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
            'Write $7$ as a sum of powers of $2$ ($2^2 = 4, 2^1 = 2, 2^0 = 1$):\n$$7 = 4 + 2 + 1 = (1 \\times 2^2) + (1 \\times 2^1) + (1 \\times 2^0).$$\nReading the coefficients from left to right gives $111$ in binary.',
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
            'Bilangan segitiga ke-$n$ adalah jumlah $n$ bilangan asli pertama: $T_n = 1 + 2 + \\dots + n$.\nUntuk $n = 8$, pasangkan suku awal dan akhir secara simetris (metode Gauss):\n$$T_8 = (1 + 8) + (2 + 7) + (3 + 6) + (4 + 5) = 4 \\times 9 = 36.$$\n(Inilah alasan rumus umumnya adalah $T_n = \\frac{n(n + 1)}{2}$, yang untuk $n = 8$ memberi $\\frac{8 \\times 9}{2} = 36$.)',
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
            'Find $\\text{LCM}(2, 3, 6) = 6$ and rewrite each fraction with denominator $6$:\n$$\\frac{1}{2} + \\frac{2}{3} + \\frac{5}{6} = \\frac{1 \\times 3}{2 \\times 3} + \\frac{2 \\times 2}{3 \\times 2} + \\frac{5}{6} = \\frac{3}{6} + \\frac{4}{6} + \\frac{5}{6} = \\frac{12}{6} = 2.$$',
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
            'In base $3$, the place values from left to right for a three-digit number are $3^2, 3^1,$ and $3^0$:\n$$102_3 = (1 \\times 3^2) + (0 \\times 3^1) + (2 \\times 3^0) = 9 + 0 + 2 = 11.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
