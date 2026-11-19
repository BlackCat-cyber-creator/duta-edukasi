/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SD Kelas 4–5 – Advanced 1
 * Sumber: BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4–5 – ADVANCED 1.pdf (Duta e-dukasi).
 * Bahasa asli tiap butir soal (Indonesia / Inggris) dipertahankan sesuai Keputusan D5.
 */
export default {
  id: 'olim-sd-bilangan-adv1',
  slug: 'bilangan-sd-advanced-1',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  topic: 'Bilangan Olimpiade SD Kelas 4–5 (Advanced 1)',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan'
  ],
  lang: 'id',
  title: 'Bilangan Olimpiade Matematika SD Kelas 4–5 – Advanced 1',
  totalMarks: 40,
  instructions:
    'Kerjakan seluruh 40 soal (25 Pilihan Ganda pada Bagian A dan 15 Isian Singkat pada Bagian B). Setiap soal dipertahankan dalam bahasa aslinya (Bahasa Indonesia atau Bahasa Inggris).',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4\u20135 \u2013 ADVANCED 1.pdf',
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
            'Berapakah hasil dari $2026 - 2025 + 2024 - 2023 + \\dots + 4 - 3 + 2 - 1$?\nA. 1012\nB. 1013\nC. 2025\nD. 2026',
          answer: 'B. 1013',
          principle:
            'Pengelompokan pasangan berurutan (telescoping / pairing) menyederhanakan penjumlahan dan pengurangan berselang-seling dengan selisih konstan.',
          solution:
            'Kelompokkan setiap pasangan bilangan berurutan:\n$$(2026 - 2025) + (2024 - 2023) + \\dots + (2 - 1)$$\nSetiap pasang menghasilkan selisih $1$. Banyaknya pasangan adalah $2026 \\div 2 = 1013$ pasang. Jadi, $1013 \\times 1 = 1013$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'A snail is at the bottom of a $30$-meter well. Each day it climbs up $4$ meters, and each night it slips down $3$ meters. On which day will the snail first reach the top of the well?\nA. 27th day\nB. 28th day\nC. 30th day\nD. 31st day',
          answer: 'A. 27th day',
          principle:
            'Account for the final climb separately: once the climber reaches or exceeds the top during the day, it does not slip back that night.',
          solution:
            'The snail makes a net progress of $4 - 3 = 1$ meter per full $24$ hours. However, once it reaches $30\\text{ m}$, it doesn\'t slip down. By the end of the 26th day, it is at $26$ meters. On the 27th day, it climbs $4$ meters ($26 + 4 = 30$) and reaches the top.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Hasil kali empat bilangan bulat positif berurutan adalah $3.024$. Berapakah nilai bilangan yang paling besar dari keempat bilangan tersebut?\nA. 7\nB. 8\nC. 9\nD. 10',
          answer: 'C. 9',
          principle:
            'Estimasi menggunakan akar pangkat empat (atau faktorisasi prima) membantu menentukan empat bilangan bulat berurutan yang hasil kalinya diketahui.',
          solution:
            'Kita mencari bilangan sekitar akar pangkat empat dari $3.024$. Karena $7^4 = 2.401$, kita dapat mencoba bilangan di sekitar $7$. Jika diuji: $6 \\times 7 \\times 8 \\times 9 = 42 \\times 72 = 3.024$. Bilangan terbesarnya adalah $9$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'The sum of five consecutive odd integers is $-45$. What is the product of the smallest and the largest of these five integers?\nA. -65\nB. 65\nC. -45\nD. 45',
          answer: 'B. 65',
          principle:
            'For an odd number of consecutive integers in an arithmetic sequence, the middle term equals their average (sum divided by count).',
          solution:
            'Let the integers be $x - 4, x - 2, x, x + 2,$ and $x + 4$. Their sum is $5x = -45$, so $x = -9$. The integers are $-13, -11, -9, -7, -5$. The product of the smallest ($-13$) and largest ($-5$) is $(-13) \\times (-5) = 65$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'FPB (Faktor Persekutuan Terbesar) dari bilangan $x$ dan $y$ adalah $12$, sedangkan KPK-nya adalah $216$. Jika nilai $x$ adalah $108$, berapakah nilai $y$?\nA. 24\nB. 36\nC. 48\nD. 54',
          answer: 'A. 24',
          principle:
            'Untuk dua bilangan bulat positif $x$ dan $y$, berlaku hubungan $x \\times y = \\text{FPB}(x, y) \\times \\text{KPK}(x, y)$.',
          solution:
            'Gunakan sifat: $x \\times y = \\text{FPB}(x, y) \\times \\text{KPK}(x, y)$. Substitusi nilai: $108 \\times y = 12 \\times 216$, sehingga\n$$y = \\frac{12 \\times 216}{108} = 12 \\times 2 = 24.$$\nVerifikasi: $108 = 2^2 \\cdot 3^3$ dan $24 = 2^3 \\cdot 3$, sehingga $\\text{FPB}(108, 24) = 12$ dan $\\text{KPK}(108, 24) = 216$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'The least common multiple (LCM) of two positive integers $a$ and $b$ is $60$, and their greatest common factor (GCF) is $4$. How many such unordered pairs $\\{a, b\\}$ exist?\nA. 1\nB. 2\nC. 3\nD. 4',
          answer: 'B. 2',
          principle:
            'Write $a = gx$ and $b = gy$ where $g = \\gcd(a, b)$ and $\\gcd(x, y) = 1$; then $\\text{lcm}(a, b) = gxy$.',
          solution:
            'Since GCF is $4$, let $a = 4x$ and $b = 4y$ where $x$ and $y$ are coprime. $\\text{LCM} = 4xy = 60$, so $xy = 15$. The coprime pairs $(x, y)$ that multiply to $15$ (unordered) are $(1, 15)$ and $(3, 5)$. This gives two sets of numbers $\\{a, b\\}$: $\\{4, 60\\}$ and $\\{12, 20\\}$. Total $2$ pairs.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Tiga buah lonceng berbunyi dengan interval yang berbeda. Lonceng A setiap $24$ menit, B setiap $36$ menit, dan C setiap $48$ menit. Jika ketiganya berbunyi bersamaan pada pukul $09:00$, pada pukul berapa mereka akan berbunyi bersama-sama lagi untuk yang pertama kalinya setelah itu?\nA. 10:44\nB. 11:24\nC. 11:48\nD. 12:24',
          answer: 'B. 11:24',
          principle:
            'Kejadian periodik yang dimulai bersama akan terulang kembali secara bersamaan untuk pertama kali setelah selang waktu sebesar KPK dari masing-masing periodenya.',
          solution:
            'Cari KPK dari $24$, $36$, dan $48$, yaitu $144$ menit. $144$ menit sama dengan $2$ jam $24$ menit. Lonceng akan berbunyi bersama lagi pada pukul $09:00 + 2\\text{ jam } 24\\text{ menit} = 11:24$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'What is the greatest $3$-digit number that leaves a remainder of $3$ when divided by $4, 5,$ and $6$?\nA. 903\nB. 960\nC. 963\nD. 993',
          answer: 'C. 963',
          principle:
            'A number leaving the same remainder $r$ when divided by several divisors has the form $k \\cdot \\text{LCM} + r$.',
          solution:
            'The LCM of $4, 5,$ and $6$ is $60$. The number must be a multiple of $60$ plus $3$. The greatest $3$-digit multiple of $60$ is $960$ (since $1000 / 60 = 16.66\\dots$, $16 \\times 60 = 960$). Add the remainder: $960 + 3 = 963$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Jumlah empat bilangan prima berurutan adalah $72$. Berapakah bilangan prima yang paling kecil di antara keempat bilangan tersebut?\nA. 11\nB. 13\nC. 17\nD. 19',
          answer: 'B. 13',
          principle:
            'Nilai rata-rata dari sekumpulan bilangan berurutan berada di sekitar bagian tengah deretan tersebut.',
          solution:
            'Rata-rata keempat bilangan prima tersebut adalah $72 \\div 4 = 18$. Bilangan prima yang berdekatan dengan $18$ adalah $17$ dan $19$. Coba urutan: $13 + 17 + 19 + 23 = 72$. Sesuai. Bilangan terkecilnya adalah $13$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'A prime number $p$ is such that $(p + 2)$ and $(p + 4)$ are also prime numbers. What is the value of $p^2$?\nA. 4\nB. 9\nC. 25\nD. 49',
          answer: 'B. 9',
          principle:
            'Among $p, p + 2,$ and $p + 4$, exactly one is divisible by $3$; the only prime divisible by $3$ is $3$ itself.',
          solution:
            'The only set of three consecutive odd prime numbers (a prime triplet) is $3, 5,$ and $7$. Thus, $p = 3$. The value of $p^2$ is $3^2 = 9$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Nilai $n$ merupakan bilangan asli terkecil sedemikian sehingga $n!$ ($n$ faktorial $= 1 \\times 2 \\times 3 \\times \\dots \\times n$) habis dibagi oleh $99$. Nilai $n$ adalah...\nA. 9\nB. 11\nC. 33\nD. 99',
          answer: 'B. 11',
          principle:
            'Agar $n!$ habis dibagi suatu bilangan komposit $k$, seluruh faktor prima berpangkat dari $k$ harus termuat dalam perkalian $1 \\times 2 \\times \\dots \\times n$.',
          solution:
            '$99 = 9 \\times 11$. Agar $n!$ habis dibagi $99$, $n!$ harus mengandung faktor $11$ dan $9$. Karena $11$ adalah bilangan prima, kita harus mencapai setidaknya angka $11$ pada faktorial ($11!$). Di dalam $11!$ juga sudah terdapat angka $3$ dan $9$, sehingga memenuhi syarat habis dibagi $9$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'How many prime numbers are there between $80$ and $100$?\nA. 2\nB. 3\nC. 4\nD. 5',
          answer: 'B. 3',
          principle:
            'To test if an integer $n < 100$ is prime, it suffices to check divisibility by primes up to $\\sqrt{100} = 10$ (namely $2, 3, 5,$ and $7$).',
          solution:
            'The prime numbers between $80$ and $100$ are $83, 89,$ and $97$ ($81, 87, 93, 99$ are divisible by $3$; $85, 95$ by $5$; $91$ by $7$). There are $3$ primes.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Semua faktor prima dari suatu bilangan genap $X$ jika dijumlahkan hasilnya adalah $10$. Jika $X$ bernilai kurang dari $50$, bilangan $X$ terbesar yang mungkin adalah...\nA. 20\nB. 30\nC. 32\nD. 42',
          answer: 'B. 30',
          principle:
            'Bilangan genap pasti memiliki $2$ sebagai salah satu faktor primanya; faktor prima lainnya dicari dari sisa jumlah yang diberikan.',
          solution:
            'Karena $X$ genap, salah satu faktor primanya pasti $2$. Sisa jumlah faktor prima lainnya $= 10 - 2 = 8$. Pasangan prima yang berjumlah $8$ adalah $3$ dan $5$. Maka, faktor primanya adalah $2, 3,$ dan $5$. Nilai $X = 2 \\times 3 \\times 5 = 30$. (Nilai kelipatannya seperti $2^2 \\times 3 \\times 5 = 60$ sudah melampaui $50$).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Express the infinite repeating decimal $0.123123123\\dots$ as a fraction in its simplest form.\nA. $\\frac{123}{1000}$\nB. $\\frac{41}{333}$\nC. $\\frac{41}{330}$\nD. $\\frac{1}{8}$',
          answer: 'B. $\\frac{41}{333}$',
          principle:
            'A purely repeating decimal with a block of $k$ repeating digits equals that $k$-digit integer divided by $10^k - 1$ (a string of $k$ nines).',
          solution:
            'A repeating decimal with $3$ repeating digits is represented over $999$:\n$$0.123123\\dots = \\frac{123}{999}.$$\nDivide numerator and denominator by $3$ to get $\\frac{41}{333}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Hasil dari $(1 - \\frac{1}{2}) \\times (1 - \\frac{1}{3}) \\times (1 - \\frac{1}{4}) \\times \\dots \\times (1 - \\frac{1}{50})$ adalah...\nA. $\\frac{1}{50}$\nB. $\\frac{1}{49}$\nC. $\\frac{49}{50}$\nD. $\\frac{1}{2500}$',
          answer: 'A. $\\frac{1}{50}$',
          principle:
            'Perkalian berantai berbentuk $\\frac{1}{2} \\times \\frac{2}{3} \\times \\dots \\times \\frac{n-1}{n}$ saling mencoret (telescoping product).',
          solution:
            'Sederhanakan tiap suku di dalam kurung:\n$$\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\dots \\times \\frac{49}{50}.$$\nPembilang pada tiap pecahan akan dicoret habis oleh penyebut pada pecahan sebelumnya, menyisakan pembilang pertama ($1$) dan penyebut terakhir ($50$). Hasilnya $\\frac{1}{50}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'What fraction is exactly halfway between $\\frac{1}{6}$ and $\\frac{1}{4}$ on the number line?\nA. $\\frac{2}{5}$\nB. $\\frac{5}{24}$\nC. $\\frac{1}{5}$\nD. $\\frac{5}{12}$',
          answer: 'B. $\\frac{5}{24}$',
          principle:
            'The number exactly halfway between $x$ and $y$ on a number line is their arithmetic mean $\\frac{x + y}{2}$.',
          solution:
            'Find the average of $\\frac{1}{6}$ and $\\frac{1}{4}$. Find a common denominator ($12$): $\\frac{1}{6} = \\frac{2}{12}$ and $\\frac{1}{4} = \\frac{3}{12}$. Halfway between $\\frac{2}{12}$ and $\\frac{3}{12}$ is $\\frac{2.5}{12}$. Multiply by $\\frac{2}{2}$ to eliminate the decimal: $\\frac{5}{24}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Pecahan $\\frac{a}{b}$ adalah bentuk paling sederhana dari desimal $0,28$. Nilai dari $a + b$ adalah...\nA. 25\nB. 28\nC. 32\nD. 35',
          answer: 'C. 32',
          principle:
            'Bilangan desimal berhingga dengan dua angka di belakang koma dapat ditulis per seratus lalu disederhanakan menggunakan FPB pembilang dan penyebut.',
          solution:
            'Ubah $0,28$ menjadi pecahan biasa: $\\frac{28}{100}$. Sederhanakan dengan membagi $4$: $\\frac{7}{25}$. Maka $a = 7$ dan $b = 25$. Nilai $a + b = 7 + 25 = 32$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'What is the representation of the base-$10$ number $100$ when written in base-$6$?\nA. $244_6$\nB. $424_6$\nC. $144_6$\nD. $224_6$',
          answer: 'A. $244_6$',
          principle:
            'Convert a base-$10$ integer to base $b$ by repeatedly dividing by $b$ and reading the remainders from bottom to top.',
          solution:
            'Divide $100$ by $6$ repeatedly: $100 \\div 6 = 16$ remainder $4$; $16 \\div 6 = 2$ remainder $4$; $2 \\div 6 = 0$ remainder $2$. Reading remainders upwards gives $244_6$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Jika diketahui $x_4 = 43_5$, maka penulisan bilangan $x$ dalam basis $4$ yang benar adalah...\nA. $113_4$\nB. $131_4$\nC. $213_4$\nD. $311_4$',
          answer: 'A. $113_4$',
          principle:
            'Untuk mengonversi bilangan dari basis $5$ ke basis $4$, ubah terlebih dahulu ke basis $10$ lalu bagi berulang dengan $4$.',
          solution:
            'Terjemahkan $43_5$ ke basis $10$: $(4 \\times 5) + 3 = 23$. Selanjutnya, ubah $23$ ke basis $4$: $23 \\div 4 = 5$ sisa $3$; $5 \\div 4 = 1$ sisa $1$; $1 \\div 4 = 0$ sisa $1$. Hasil penulisannya dari sisa pembagian adalah $113_4$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Calculate the sum $1101_2 + 1011_2$ and express the final answer in base-$2$.\nA. $10100_2$\nB. $11000_2$\nC. $11010_2$\nD. $11100_2$',
          answer: 'B. $11000_2$',
          principle:
            'Binary addition can be performed directly with base-$2$ carries ($1 + 1 = 10_2$) or by converting operands to base-$10$ and converting the sum back.',
          solution:
            'Convert to base-$10$ first: $1101_2 = 13$ and $1011_2 = 11$. Sum $= 13 + 11 = 24$. Convert $24$ back to binary: $24 = 16 + 8 = 11000_2$. (Or add directly in binary with carries).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Sebuah bilangan dalam basis $8$ ditulis sebagai $25_8$. Bilangan ini jika diubah ke dalam sistem basis $2$ adalah...\nA. $11101_2$\nB. $10101_2$\nC. $10011_2$\nD. $10111_2$',
          answer: 'B. $10101_2$',
          principle:
            'Karena $8 = 2^3$, setiap satu digit pada basis $8$ berkorespondensi langsung dengan tepat $3$ digit biner (basis $2$).',
          solution:
            'Setiap $1$ digit pada basis $8$ setara dengan $3$ digit pada basis $2$. Digit $2 = 010_2$ dan digit $5 = 101_2$. Digabungkan menjadi $010101_2$, atau ditulis $10101_2$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Find the 20th term of the arithmetic sequence: $5, 9, 13, 17, \\dots$\nA. 77\nB. 81\nC. 85\nD. 89',
          answer: 'B. 81',
          principle:
            'The $n$-th term of an arithmetic sequence with first term $a$ and common difference $d$ is $a_n = a + (n - 1)d$.',
          solution:
            'The sequence has a first term $a = 5$ and a common difference $d = 4$. The formula for the $n$-th term is $a + (n - 1)d$. For $n = 20$, $5 + (19 \\times 4) = 5 + 76 = 81$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Diberikan pola bilangan kuadrat: $1, 4, 9, 16, 25, 36, \\dots$ Berapakah selisih antara suku ke-$15$ dan suku ke-$14$ pada pola tersebut?\nA. 27\nB. 29\nC. 31\nD. 225',
          answer: 'B. 29',
          principle:
            'Selisih dua bilangan kuadrat berurutan memenuhi identitas $n^2 - (n - 1)^2 = 2n - 1$.',
          solution:
            'Suku ke-$15 = 15^2 = 225$. Suku ke-$14 = 14^2 = 196$. Selisih $= 225 - 196 = 29$. (Atau gunakan rumus selisih kuadrat berurutan: $n^2 - (n-1)^2 = 2n - 1$. Untuk $n = 15$, $(2 \\times 15) - 1 = 29$).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'A pattern is formed by drawing connected regular hexagons using matchsticks. The 1st shape has $6$ matchsticks, the 2nd shape has $11$, and the 3rd shape has $16$. How many matchsticks are needed to build the 10th shape?\nA. 51\nB. 56\nC. 61\nD. 66',
          answer: 'A. 51',
          principle:
            'Identify the initial count and the constant number of matchsticks added at each step to form an arithmetic sequence.',
          solution:
            'The first hexagon uses $6$ matchsticks. Each subsequent connected hexagon shares $1$ matchstick and requires $5$ new ones. Thus, the $n$-th shape requires $6 + 5(n - 1)$ matchsticks. For $n = 10$, $6 + 5(9) = 6 + 45 = 51$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Berapakah angka satuan (digit terakhir) dari hasil penjumlahan $2^{2026} + 3^{2026}$?\nA. 1\nB. 3\nC. 5\nD. 7',
          answer: 'B. 3',
          principle:
            'Digit terakhir perpangkatan bilangan bulat berulang secara periodik setiap kelipatan $4$ pada eksponennya.',
          solution:
            'Cari angka satuan dengan pola perpangkatan berulang setiap kelipatan $4$. $2026 \\bmod 4 = 2$. Angka satuan $2^{2026}$ sama dengan $2^2$ yaitu $4$. Angka satuan $3^{2026}$ sama dengan $3^2$ yaitu $9$. Jumlahnya $= 4 + 9 = 13$, sehingga angka satuannya adalah $3$.',
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
            'A custom mathematical operation $\\nabla$ is defined as $a \\nabla b = a^b - b^a$. Find the value of $3 \\nabla 2$.',
          answer: '1',
          answerNumeric: [{ name: 'value', value: 1 }],
          principle:
            'Evaluate a custom binary operation by substituting the given numbers into its defining expression in order.',
          solution:
            'Substitute $a = 3$ and $b = 2$ into the operation definition:\n$$3 \\nabla 2 = 3^2 - 2^3 = 9 - 8 = 1.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'FPB dari dua bilangan bulat positif adalah $8$ dan KPK-nya adalah $120$. Jika kedua bilangan tersebut nilainya berada di antara $10$ dan $50$, tentukan selisih dari kedua bilangan tersebut!',
          answer: '16',
          answerNumeric: [{ name: 'selisih', value: 16 }],
          principle:
            'Jika $\\text{FPB}(a, b) = g$, maka $a = gx$ dan $b = gy$ dengan $x, y$ saling prima dan $x \\cdot y = \\text{KPK} / \\text{FPB}$.',
          solution:
            'Gunakan rasio $\\text{KPK}/\\text{FPB} = 120/8 = 15$. Faktor yang saling prima dari $15$ adalah $3$ dan $5$. Kalikan dengan FPB untuk mendapat kedua bilangan tersebut: $3 \\times 8 = 24$ dan $5 \\times 8 = 40$. (Keduanya berada di antara $10$ dan $50$). Selisih $= 40 - 24 = 16$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '28',
          marks: 1,
          prompt: 'What is the sum of all the distinct prime factors of the number $2025$?',
          answer: '8',
          answerNumeric: [{ name: 'sum', value: 8 }],
          principle:
            'Decompose an integer into its prime factorization and sum each distinct prime base once.',
          solution:
            'Find the prime factorization of $2025$. $2025$ ends in $25$, so it\'s divisible by $25$. $2025 \\div 25 = 81$. Thus, $2025 = 81 \\times 25 = 3^4 \\times 5^2$. The distinct prime factors are $3$ and $5$. Sum $= 3 + 5 = 8$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Ubahlah bentuk desimal berulang $0,555\\dots + 0,777\\dots$ ke dalam bentuk pecahan biasa yang paling sederhana!',
          answer: '$\\frac{4}{3}$',
          principle:
            'Desimal berulang satu digit $0,aaa\\dots$ bernilai sama dengan pecahan $\\frac{a}{9}$.',
          solution:
            'Ingat bahwa $0,aaa\\dots = \\frac{a}{9}$. Maka $0,555\\dots = \\frac{5}{9}$ dan $0,777\\dots = \\frac{7}{9}$. Penjumlahannya adalah\n$$\\frac{5}{9} + \\frac{7}{9} = \\frac{12}{9} = \\frac{4}{3}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '30',
          marks: 1,
          prompt: 'In what numerical base $b$ is the equation $44_b = 32_{10}$ true?',
          answer: '7',
          answerNumeric: [{ name: 'b', value: 7 }],
          principle:
            'Expand a two-digit number $d_1 d_0$ in base $b$ as $d_1 \\cdot b + d_0$ to solve for the base.',
          solution:
            'Translate $44_b$ into a base-$10$ equation: $4b + 4 = 32$. Solving for $b$: $4b = 28$, so $b = 7$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'Perhatikan barisan bilangan berikut: $2, 6, 12, 20, 30, x, \\dots$ Nilai yang tepat untuk menggantikan $x$ adalah...',
          answer: '42',
          answerNumeric: [{ name: 'x', value: 42 }],
          principle:
            'Pola bilangan persegi panjang ke-$n$ memiliki rumus $n(n + 1)$, atau selisih antarsukunya bertambah $2$ secara tetap.',
          solution:
            'Pola yang terbentuk adalah perkalian dua bilangan berurutan: $1 \\times 2 = 2$, $2 \\times 3 = 6$, $3 \\times 4 = 12$, $4 \\times 5 = 20$, $5 \\times 6 = 30$. Maka $x$ adalah suku ke-$6$ yaitu $6 \\times 7 = 42$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'The product of three consecutive even integers is $480$. What is the sum of these three integers?',
          answer: '24',
          answerNumeric: [{ name: 'sum', value: 24 }],
          principle:
            'The cube root of the product approximates the middle integer of three consecutive even integers.',
          solution:
            'Estimate the cube root of $480$ (since $x^3 \\approx 480$). The cube root of $512$ is $8$. Let\'s test even numbers around $8$: $6 \\times 8 \\times 10 = 480$. The three numbers are $6, 8,$ and $10$. Their sum is $6 + 8 + 10 = 24$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Jumlah dua buah bilangan asli adalah $48$ dan FPB mereka adalah $6$. Jika kedua bilangan tersebut bukan merupakan kelipatan satu sama lain, berapakah hasil kali kedua bilangan itu?',
          answer: '540',
          answerNumeric: [{ name: 'hasil_kali', value: 540 }],
          principle:
            'Nyatakan kedua bilangan sebagai $6x$ dan $6y$ dengan $\\text{FPB}(x, y) = 1$; syarat bukan kelipatan satu sama lain berarti $x > 1$ dan $y > 1$.',
          solution:
            'Misalkan bilangannya adalah $6x$ dan $6y$ (dengan $x$ dan $y$ saling prima). $6x + 6y = 48$, sehingga $x + y = 8$. Pasangan $(x, y)$ yang saling prima adalah $(1, 7)$ dan $(3, 5)$. Jika dipilih $(1, 7)$, bilangannya $6$ dan $42$ (kelipatan satu sama lain). Jika dipilih $(3, 5)$, bilangannya $18$ dan $30$ (bukan kelipatan). Hasil kalinya $= 18 \\times 30 = 540$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '34',
          marks: 1,
          prompt: 'How many prime numbers less than $50$ have digits that sum to exactly $10$?',
          answer: '2',
          answerNumeric: [{ name: 'count', value: 2 }],
          principle:
            'List all two-digit candidates under $50$ whose digits add to $10$, then test each candidate for primality.',
          solution:
            'We look for prime numbers $< 50$ where the digits sum to $10$. The possible pairs of digits that sum to $10$ are $(1,9), (2,8), (3,7), (4,6)$. The numbers formed less than $50$ are $19, 28, 37, 46$. Among these, $19$ and $37$ are prime. Total $= 2$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'Sebuah drum berisi air sebanyak $\\frac{1}{3}$ dari kapasitas penuhnya. Setelah ditambahkan $40$ liter air, drum tersebut kini terisi $\\frac{3}{4}$ bagian. Berapakah liter kapasitas penuh drum tersebut?',
          answer: '96 liter',
          answerNumeric: [{ name: 'kapasitas', value: 96, unit: 'liter' }],
          principle:
            'Selisih fraksi volume sebelum dan sesudah penambahan air sebanding dengan volume air yang ditambahkan.',
          solution:
            'Misalkan kapasitas penuh adalah $V$. Selisih bagian $= \\frac{3}{4} - \\frac{1}{3} = \\frac{9}{12} - \\frac{4}{12} = \\frac{5}{12}$ bagian. Diketahui $\\frac{5}{12} V = 40$ liter. Maka $V = 40 \\times \\frac{12}{5} = 8 \\times 12 = 96$ liter.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '36',
          marks: 1,
          prompt:
            'Convert the binary (base-$2$) number $101010_2$ directly into the octal (base-$8$) number system.',
          answer: '$52_8$',
          principle:
            'Since $8 = 2^3$, group binary digits into threes from right to left and convert each $3$-bit group into one octal digit.',
          solution:
            'Group the binary digits in sets of three from right to left: $101 \\mid 010$. Convert each group to its decimal equivalent (which acts as the octal digit): $101_2 = 5$ and $010_2 = 2$. The result is $52_8$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '37',
          marks: 1,
          prompt:
            'Diketahui barisan bilangan $1, 1, 2, 3, 5, 8, 13, y, \\dots$ Berapakah nilai $y$ pada barisan Fibonacci tersebut?',
          answer: '21',
          answerNumeric: [{ name: 'y', value: 21 }],
          principle:
            'Pada barisan Fibonacci, setiap suku mulai dari suku ketiga merupakan hasil penjumlahan dua suku tepat di depannya.',
          solution:
            'Pada barisan Fibonacci, setiap suku (mulai dari yang ketiga) adalah hasil penjumlahan dua suku sebelumnya. $5 + 8 = 13$. Maka $y = 8 + 13 = 21$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '38',
          marks: 1,
          prompt: 'Counting up from the smallest prime ($2$), what is the 10th prime number?',
          answer: '29',
          answerNumeric: [{ name: 'prime', value: 29 }],
          principle:
            'Prime numbers are integers greater than $1$ that have exactly two positive divisors: $1$ and themselves.',
          solution:
            'List the primes: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$. The 10th prime number is $29$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '39',
          marks: 1,
          prompt:
            'Sebuah lift mula-mula berada di lantai $5$. Lift tersebut kemudian bergerak turun sejauh $7$ lantai, lalu bergerak naik sejauh $12$ lantai, dan terakhir bergerak turun lagi sejauh $3$ lantai. Di lantai berapakah posisi lift tersebut sekarang?',
          answer: 'Lantai 7',
          answerNumeric: [{ name: 'lantai', value: 7 }],
          principle:
            'Gerakan naik dimodelkan sebagai penjumlahan bilangan bulat positif dan gerakan turun sebagai pengurangan (atau bilangan bulat negatif).',
          solution:
            'Posisi lift: $5 - 7 = -2$ ($2$ lantai di bawah tanah). Kemudian $-2 + 12 = 10$ (Lantai $10$). Terakhir $10 - 3 = 7$. Lift berada di lantai $7$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '40',
          marks: 1,
          prompt:
            'Evaluate the following sum of fractions: $\\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12} + \\frac{1}{20} + \\frac{1}{30}$.',
          answer: '$\\frac{5}{6}$',
          principle:
            'Decompose each unit fraction $\\frac{1}{n(n+1)}$ as $\\frac{1}{n} - \\frac{1}{n+1}$ to create a telescoping sum.',
          solution:
            'Notice that each fraction is of the form $\\frac{1}{n(n+1)}$. This forms a telescoping sum: $\\frac{1}{2} = \\frac{1}{1} - \\frac{1}{2}$, $\\frac{1}{6} = \\frac{1}{2} - \\frac{1}{3}$, $\\frac{1}{12} = \\frac{1}{3} - \\frac{1}{4}$, $\\frac{1}{20} = \\frac{1}{4} - \\frac{1}{5}$, $\\frac{1}{30} = \\frac{1}{5} - \\frac{1}{6}$. Adding them up cancels out the intermediate terms, leaving $1 - \\frac{1}{6} = \\frac{5}{6}$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
