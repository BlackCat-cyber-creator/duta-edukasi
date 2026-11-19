/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SD Kelas 4–5 – Advanced 2
 * Sumber: BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4–5 – ADVANCED 2.pdf (Duta e-dukasi).
 * Bahasa asli tiap butir soal (Indonesia / Inggris) dipertahankan sesuai Keputusan D5.
 */
export default {
  id: 'olim-sd-bilangan-adv2',
  slug: 'bilangan-sd-advanced-2',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  topic: 'Bilangan Olimpiade SD Kelas 4–5 (Advanced 2)',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan'
  ],
  lang: 'id',
  title: 'Bilangan Olimpiade Matematika SD Kelas 4–5 – Advanced 2',
  totalMarks: 40,
  instructions:
    'Kerjakan seluruh 40 soal (25 Pilihan Ganda pada Bagian A dan 15 Isian Singkat pada Bagian B). Setiap soal dipertahankan dalam bahasa aslinya (Bahasa Indonesia atau Bahasa Inggris).',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4\u20135 \u2013 ADVANCED 2.pdf',
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
            'Berapakah hasil dari perhitungan $2026 \\times 20252025 - 2025 \\times 20262026$?\nA. 0\nB. 1\nC. 2025\nD. 2026',
          answer: 'A. 0',
          principle:
            'Bilangan berpola pengulangan $abcdabcd$ dapat difaktorkan menjadi $abcd \\times 10001$ untuk menyederhanakan perkalian.',
          solution:
            'Angka $20252025$ dapat ditulis sebagai $2025 \\times 10001$, dan $20262026$ dapat ditulis sebagai $2026 \\times 10001$.\nSubstitusikan ke dalam ekspresi:\n$$(2026 \\times 2025 \\times 10001) - (2025 \\times 2026 \\times 10001) = 0.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'A math test has $40$ questions. A student scores $5$ points for each correct answer, loses $2$ points for each incorrect answer, and gets $0$ points for omitted questions. If John scored exactly $131$ points, what is the maximum number of questions he could have answered correctly?\nA. 25\nB. 27\nC. 29\nD. 31',
          answer: 'C. 29',
          principle:
            'Formulate the linear Diophantine equation $5C - 2I = 131$ subject to the total question constraint $C + I \\le 40$.',
          solution:
            'Let $C$ be the number of correct answers and $I$ be the number of incorrect answers. Then $5C - 2I = 131$ and $C + I \\le 40$.\nTesting options: if $C = 29$, then $145 - 2I = 131 \\implies I = 7$, giving $C + I = 36 \\le 40$ (valid).\nIf $C = 31$, then $155 - 2I = 131 \\implies I = 12$, giving $C + I = 43 > 40$ (exceeds total questions).\nThus, the maximum number of correct answers is $29$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Berapa banyak bilangan prima $2$-angka yang jika posisi digit-digitnya ditukar (dibalik posisinya) juga menghasilkan sebuah bilangan prima?\nA. 7\nB. 8\nC. 9\nD. 10',
          answer: 'C. 9',
          principle:
            'Suatu bilangan prima $2$-angka yang tetap prima saat digitnya dibalik hanya dapat tersusun dari digit-digit ganjil selain $5$, yaitu $1, 3, 7,$ dan $9$.',
          solution:
            'Bilangan prima $2$-angka yang jika dibalik juga prima adalah:\n$11, 13 \\text{ (menjadi } 31\\text{)}, 17 \\text{ (menjadi } 71\\text{)}, 31 \\text{ (menjadi } 13\\text{)}, 37 \\text{ (menjadi } 73\\text{)}, 71 \\text{ (menjadi } 17\\text{)}, 73 \\text{ (menjadi } 37\\text{)}, 79 \\text{ (menjadi } 97\\text{)},$ dan $97 \\text{ (menjadi } 79\\text{)}$.\nTotal ada $9$ bilangan.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Calculate the value of the sum: $\\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\frac{1}{3 \\times 4} + \\dots + \\frac{1}{99 \\times 100}$.\nA. $\\frac{98}{99}$\nB. $\\frac{99}{100}$\nC. $\\frac{100}{101}$\nD. 1',
          answer: 'B. $\\frac{99}{100}$',
          principle:
            'Use partial fraction decomposition $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ to create a telescoping sum.',
          solution:
            'Each term $\\frac{1}{n(n+1)}$ splits into $\\frac{1}{n} - \\frac{1}{n+1}$:\n$$\\left(\\frac{1}{1} - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{99} - \\frac{1}{100}\\right).$$\nAll middle terms cancel out, leaving $1 - \\frac{1}{100} = \\frac{99}{100}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Diketahui suatu bilangan $123$ dalam sebuah sistem basis $x$ bernilai sama dengan $38$ dalam sistem desimal (basis $10$). Maka, $123_x = 38_{10}$. Berapakah nilai $x$?\nA. 5\nB. 6\nC. 7\nD. 8',
          answer: 'A. 5',
          principle:
            'Uraikan bilangan basis $x$ menurut nilai tempat pangkat $x$ untuk memperoleh persamaan polinomial dalam basis $10$.',
          solution:
            'Ubah $123_x$ ke basis $10$:\n$$1x^2 + 2x^1 + 3x^0 = 38 \\implies x^2 + 2x + 3 = 38 \\implies x^2 + 2x - 35 = 0.$$\nFaktorkan menjadi $(x + 7)(x - 5) = 0$. Karena basis bilangan harus positif ($x > 3$), maka $x = 5$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Find the sum of the digits of the 50th term in the following sequence: $9, 99, 999, 9999, \\dots$\nA. 350\nB. 400\nC. 450\nD. 500',
          answer: 'C. 450',
          principle:
            'Identify the pattern relating the term position $n$ to the number of repeated digits in the $n$-th term.',
          solution:
            'The $1$st term has one $9$, the $2$nd term has two $9$s, so the $50$th term consists of fifty $9$s.\nThe sum of its digits is $50 \\times 9 = 450$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Sebuah operasi matematika baru $\\diamond$ didefinisikan dengan aturan $a \\diamond b = \\frac{a + b}{a - b}$. Berapakah nilai dari $(6 \\diamond 2) \\diamond 3$?\nA. $-5$\nB. $-1$\nC. 1\nD. 5',
          answer: 'A. $-5$',
          principle:
            'Evaluasi operasi baru sesuai definisi secara bertahap dimulai dari operasi di dalam tanda kurung.',
          solution:
            'Hitung bagian dalam kurung terlebih dahulu:\n$$6 \\diamond 2 = \\frac{6 + 2}{6 - 2} = \\frac{8}{4} = 2.$$\nSelanjutnya hitung $2 \\diamond 3$:\n$$2 \\diamond 3 = \\frac{2 + 3}{2 - 3} = \\frac{5}{-1} = -5.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Three buses leave the station at intervals of $18$ minutes, $24$ minutes, and $32$ minutes respectively. If they all leave together at 06:30 AM, at what time will they next leave the station together?\nA. 10:48 AM\nB. 11:18 AM\nC. 11:48 AM\nD. 12:18 PM',
          answer: 'B. 11:18 AM',
          principle:
            'The next simultaneous departure occurs after a duration equal to the Least Common Multiple (LCM) of all three intervals.',
          solution:
            'Find the prime factorizations: $18 = 2 \\times 3^2$, $24 = 2^3 \\times 3$, and $32 = 2^5$.\n$$\\text{LCM}(18, 24, 32) = 2^5 \\times 3^2 = 32 \\times 9 = 288\\text{ minutes}.$$\nSince $288$ minutes equals $4$ hours and $48$ minutes, adding this to 06:30 AM gives 11:18 AM.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Hasil kali dari tiga bilangan prima yang berurutan adalah $2.431$. Berapakah jumlah dari ketiga bilangan prima tersebut?\nA. 39\nB. 41\nC. 45\nD. 49',
          answer: 'B. 41',
          principle:
            'Perkirakan nilai tengah ketiga bilangan prima menggunakan akar pangkat tiga dari hasil kalinya, lalu verifikasi dengan perkalian.',
          solution:
            'Akar pangkat tiga dari $2.431$ mendekati $13$. Uji tiga bilangan prima berurutan di sekitar $13$, yaitu $11, 13,$ dan $17$:\n$$11 \\times 13 \\times 17 = 143 \\times 17 = 2.431.$$\nJadi ketiga bilangan prima tersebut adalah $11, 13,$ dan $17$, dengan jumlah $11 + 13 + 17 = 41$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Which of the following fractions is equivalent to the repeating decimal $0.2454545\\dots$?\nA. $\\frac{12}{55}$\nB. $\\frac{27}{110}$\nC. $\\frac{49}{198}$\nD. $\\frac{121}{495}$',
          answer: 'B. $\\frac{27}{110}$',
          principle:
            'Multiply the repeating decimal by powers of $10$ to align the repeating block, subtract to eliminate the infinite tail, and simplify.',
          solution:
            'Let $x = 0.24545\\dots$. Then $1000x = 245.4545\\dots$ and $10x = 2.4545\\dots$\nSubtracting gives:\n$$990x = 243 \\implies x = \\frac{243}{990} = \\frac{243 \\div 9}{990 \\div 9} = \\frac{27}{110}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Konversi bilangan biner $101101_2$ ke dalam sistem bilangan basis $8$ yang tepat adalah...\nA. $45_8$\nB. $55_8$\nC. $65_8$\nD. $75_8$',
          answer: 'B. $55_8$',
          principle:
            'Konversi basis $2$ ke basis $8$ ($2^3$) dilakukan dengan mengelompokkan digit biner per $3$ digit dari kanan.',
          solution:
            'Kelompokkan $101101_2$ menjadi kelompok $3$ digit dari kanan: $101 \\mid 101$.\nSetiap kelompok bernilai $1 \\times 4 + 0 \\times 2 + 1 \\times 1 = 5$.\nMaka dalam basis $8$ penulisannya adalah $55_8$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'How many digits does the number $N = 2^{2026} \\times 5^{2020}$ have when written in its fully expanded base-10 form?\nA. 2020\nB. 2022\nC. 2024\nD. 2026',
          answer: 'B. 2022',
          principle:
            'Pair factors of $2$ and $5$ to form powers of $10$, then count the digits of the remaining factor plus the trailing zeros.',
          solution:
            'Factor out powers of $10$:\n$$N = 2^{2026} \\times 5^{2020} = 2^6 \\times (2^{2020} \\times 5^{2020}) = 64 \\times 10^{2020}.$$\nThis consists of the $2$ digits of $64$ followed by $2020$ zeros, giving $2 + 2020 = 2022$ digits.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Suatu turnamen basket diikuti oleh $20$ tim. Setiap tim bertanding melawan setiap tim lainnya tepat satu kali selama turnamen berlangsung. Berapa total pertandingan yang terjadi dalam turnamen tersebut?\nA. 190\nB. 200\nC. 380\nD. 400',
          answer: 'A. 190',
          principle:
            'Banyaknya pasangan unik dari $n$ peserta tanpa pengulangan adalah $\\frac{n(n - 1)}{2}$.',
          solution:
            'Gunakan rumus kombinasi pasangan untuk $n = 20$:\n$$\\frac{20 \\times 19}{2} = \\frac{380}{2} = 190\\text{ pertandingan}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'What is the smallest positive integer $n$ such that $\\frac{n}{2}$ is a perfect square and $\\frac{n}{3}$ is a perfect cube?\nA. 72\nB. 216\nC. 432\nD. 648',
          answer: 'D. 648',
          principle:
            'Write $n = 2^x \\times 3^y$ and match the divisibility conditions on the exponents $x$ and $y$ for squares (even exponents) and cubes (multiples of $3$).',
          solution:
            'Let $n = 2^x \\times 3^y$.\nFor $\\frac{n}{2} = 2^{x-1} \\times 3^y$ to be a square, $x - 1$ must be even ($x$ is odd) and $y$ must be even.\nFor $\\frac{n}{3} = 2^x \\times 3^{y-1}$ to be a cube, $x$ must be a multiple of $3$ and $y - 1$ must be a multiple of $3$.\nThe smallest odd multiple of $3$ is $x = 3$, and the smallest even $y$ with $y - 1$ divisible by $3$ is $y = 4$.\nThus, $n = 2^3 \\times 3^4 = 8 \\times 81 = 648$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Berapa banyak faktor pembagi positif yang dimiliki oleh bilangan $10.000$ (sepuluh ribu)?\nA. 16\nB. 20\nC. 25\nD. 100',
          answer: 'C. 25',
          principle:
            'Jika faktorisasi prima suatu bilangan adalah $p_1^{a_1} \\times p_2^{a_2} \\times \\dots$, maka banyaknya faktor positifnya adalah $(a_1 + 1)(a_2 + 1)\\dots$',
          solution:
            'Faktorisasi prima $10.000 = 10^4 = (2 \\times 5)^4 = 2^4 \\times 5^4$.\nBanyaknya faktor pembagi positif adalah $(4 + 1)(4 + 1) = 5 \\times 5 = 25$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'The fraction $\\frac{4}{7}$ is written as a repeating decimal: $0.571428571428\\dots$ What is the 2026th digit after the decimal point?\nA. 1\nB. 4\nC. 7\nD. 8',
          answer: 'B. 4',
          principle:
            'Find the remainder when the target position is divided by the length of the repeating cycle.',
          solution:
            'The repeating block $571428$ has length $6$.\nDivide $2026$ by $6$: $2026 = 337 \\times 6 + 4$.\nBecause the remainder is $4$, the $2026$th digit is the $4$th digit in the block $571428$, which is $4$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Diketahui persamaan basis $1000_x = 216_{10}$. Nilai dari basis $x$ adalah...\nA. 5\nB. 6\nC. 7\nD. 8',
          answer: 'B. 6',
          principle:
            'Nilai bilangan $1000_x$ dalam basis $10$ adalah $1 \\times x^3$.',
          solution:
            'Persamaan menjadi $1 \\times x^3 = 216$, sehingga $x^3 = 216$.\nKarena $6 \\times 6 \\times 6 = 216$, maka $x = 6$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'In the number sequence: $1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, \\dots$, what is the 100th term?\nA. 13\nB. 14\nC. 15\nD. 16',
          answer: 'B. 14',
          principle:
            'The cumulative count of terms up to the end of group $n$ is the $n$-th triangular number $\\frac{n(n+1)}{2}$.',
          solution:
            'The last position of group $n$ is $\\frac{n(n+1)}{2}$.\nFor $n = 13$, $\\frac{13 \\times 14}{2} = 91$.\nFor $n = 14$, $\\frac{14 \\times 15}{2} = 105$.\nSince $91 < 100 \\le 105$, the $100$th term lies in group $14$ and equals $14$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Selisih antara kuadrat dari dua bilangan bulat positif yang berurutan adalah $145$. Berapakah nilai bilangan yang lebih besar dari kedua bilangan tersebut?\nA. 71\nB. 72\nC. 73\nD. 74',
          answer: 'C. 73',
          principle:
            'Selisih kuadrat dua bilangan bulat berurutan $(x + 1)^2 - x^2$ sama dengan $2x + 1$.',
          solution:
            'Misalkan kedua bilangan berurutan tersebut adalah $x$ dan $x + 1$.\n$$(x + 1)^2 - x^2 = (x^2 + 2x + 1) - x^2 = 2x + 1 = 145.$$\nDidapat $2x = 144 \\implies x = 72$. Bilangan yang lebih besar adalah $72 + 1 = 73$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Find the greatest positive integer which divides $135$, $220$, and $305$, leaving the exact same remainder in each case.\nA. 15\nB. 17\nC. 85\nD. 135',
          answer: 'C. 85',
          principle:
            'If an integer leaves the same remainder when dividing $a$, $b$, and $c$, it must divide their pairwise differences $|b - a|$ and $|c - b|$; the greatest such divisor is their GCD.',
          solution:
            'Compute the differences: $220 - 135 = 85$ and $305 - 220 = 85$.\nThe greatest common divisor of $85$ and $85$ is $85$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Sebuah bilangan genap $n$ diketahui memiliki tepat $6$ faktor pembagi positif. Jika nilai $n$ tidak lebih dari $30$ ($n \\le 30$), berapakah nilai $n$ terbesar yang mungkin?\nA. 20\nB. 24\nC. 28\nD. 30',
          answer: 'C. 28',
          principle:
            'Bilangan dengan tepat $6$ faktor positif memiliki bentuk faktorisasi prima $p^5$ atau $p^1 q^2$ dengan $p, q$ bilangan prima berbeda.',
          solution:
            'Karena $n$ genap, salah satu faktor primanya harus $2$.\nUntuk bentuk $2^5$: $2^5 = 32 > 30$ (tidak memenuhi).\nUntuk bentuk $p \\times q^2$: $2 \\times 3^2 = 18$, $3 \\times 2^2 = 12$, $5 \\times 2^2 = 20$, $7 \\times 2^2 = 28$, dan $11 \\times 2^2 = 44 > 30$.\nNilai genap terbesar yang memenuhi adalah $28$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'A water tank is exactly $\\frac{3}{5}$ full. When $40$ liters of water are drawn out, the tank becomes $\\frac{1}{3}$ full. What is the maximum full capacity of this water tank?\nA. 120 liters\nB. 150 liters\nC. 180 liters\nD. 200 liters',
          answer: 'B. 150 liters',
          principle:
            'Equate the volume drawn out to the difference in the fractional fill levels of the tank.',
          solution:
            'The change in fraction of the tank\'s capacity $V$ is $\\frac{3}{5} - \\frac{1}{3} = \\frac{9}{15} - \\frac{5}{15} = \\frac{4}{15}$.\nSince $\\frac{4}{15} V = 40$ liters, we have:\n$$V = \\frac{40 \\times 15}{4} = 150\\text{ liters}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Hitunglah hasil perkalian $34_5 \\times 2_5$ dan nyatakan hasilnya kembali dalam sistem bilangan basis $5$.\nA. $113_5$\nB. $123_5$\nC. $133_5$\nD. $143_5$',
          answer: 'B. $123_5$',
          principle:
            'Ubah bilangan basis $5$ ke basis $10$ untuk menghitung hasil kalinya, lalu konversi hasilnya kembali ke basis $5$ dengan pembagian berulang oleh $5$.',
          solution:
            'Konversi ke desimal: $34_5 = 3 \\times 5 + 4 = 19$ dan $2_5 = 2$.\nHasil kali $= 19 \\times 2 = 38_{10}$.\nKonversi $38$ kembali ke basis $5$: $38 \\div 5 = 7$ sisa $3$, lalu $7 \\div 5 = 1$ sisa $2$.\nUrutkan dari hasil bagi terakhir dan sisa-sisanya: $123_5$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'What is the unit digit (the last digit) of the product $7^{2025} \\times 3^{2026}$?\nA. 1\nB. 3\nC. 7\nD. 9',
          answer: 'B. 3',
          principle:
            'Determine the unit digit of each power using its modulo-$4$ cycle length, then multiply the resulting unit digits modulo $10$.',
          solution:
            'Powers of $7$ and $3$ both cycle in unit digits every $4$ steps.\nFor $7^{2025}$: $2025 \\bmod 4 = 1$, so the unit digit matches $7^1 = 7$.\nFor $3^{2026}$: $2026 \\bmod 4 = 2$, so the unit digit matches $3^2 = 9$.\nMultiplying the unit digits gives $7 \\times 9 = 63$, so the final unit digit is $3$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Diketahui nilai $A = -2$, $B = 3$, dan $C = -4$. Berapakah hasil akhir dari ekspresi $A^2 - B^3 + C^2$?\nA. $-11$\nB. $-7$\nC. 5\nD. 13',
          answer: 'B. $-7$',
          principle:
            'Substitusikan nilai bilangan negatif dalam tanda kurung sebelum memangkatkan.',
          solution:
            'Hitung tiap suku dengan teliti:\n$$A^2 = (-2)^2 = 4, \\quad B^3 = 3^3 = 27, \\quad C^2 = (-4)^2 = 16.$$\nMaka:\n$$A^2 - B^3 + C^2 = 4 - 27 + 16 = -7.$$',
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
            'The sum of $41$ consecutive integers is exactly $0$. What is the largest of these $41$ integers?',
          answer: '20',
          answerNumeric: [{ name: 'largestInteger', value: 20 }],
          principle:
            'For an odd number of consecutive integers to sum to $0$, they must be symmetric around $0$.',
          solution:
            'With $41$ consecutive integers summing to $0$, the middle integer is $0$, with $20$ negative integers below it and $20$ positive integers above it ($-20, \\dots, 0, \\dots, 20$).\nThe largest integer is $20$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Tentukan bilangan bulat positif $x$ terkecil sedemikian rupa sehingga FPB dari $x$ dan $15$ adalah $3$, sedangkan KPK dari $x$ dan $15$ adalah $60$.',
          answer: '12',
          answerNumeric: [{ name: 'x', value: 12 }],
          principle:
            'Untuk dua bilangan bulat positif $x$ dan $y$, berlaku hubungan $x \\times y = \\text{FPB}(x, y) \\times \\text{KPK}(x, y)$.',
          solution:
            'Gunakan sifat $x \\times 15 = \\text{FPB}(x, 15) \\times \\text{KPK}(x, 15)$:\n$$15x = 3 \\times 60 = 180 \\implies x = 12.$$\nPeriksa kembali: $\\text{FPB}(12, 15) = 3$ dan $\\text{KPK}(12, 15) = 60$, sehingga $x = 12$ memenuhi syarat.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'What is the largest two-digit prime number whose individual digits are also both prime numbers?',
          answer: '73',
          answerNumeric: [{ name: 'prime', value: 73 }],
          principle:
            'Restrict the digits to the single-digit primes ($2, 3, 5, 7$) and test the largest two-digit combinations in descending order.',
          solution:
            'The prime digits are $2, 3, 5,$ and $7$.\nTesting two-digit numbers beginning with the largest prime digit $7$ in descending order: $77 = 7 \\times 11$ (composite), $75 = 3 \\times 25$ (composite), and $73$ is prime.\nThus, the largest such number is $73$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Berapa banyak pecahan satuan (pecahan dengan pembilang $1$ dan penyebut bilangan bulat) yang nilainya berada di antara $\\frac{1}{10}$ dan $\\frac{1}{5}$ secara eksklusif?',
          answer: '4',
          answerNumeric: [{ name: 'count', value: 4 }],
          principle:
            'Untuk pecahan satuan $\\frac{1}{n}$ dengan $n > 0$, ketaksamaan $\\frac{1}{10} < \\frac{1}{n} < \\frac{1}{5}$ ekuivalen dengan $5 < n < 10$.',
          solution:
            'Pecahan satuan yang memenuhi $\\frac{1}{10} < \\frac{1}{n} < \\frac{1}{5}$ memiliki penyebut bulat $n$ dengan $5 < n < 10$, yaitu $n \\in \\{6, 7, 8, 9\\}$.\nPecahan-pecahan tersebut adalah $\\frac{1}{9}, \\frac{1}{8}, \\frac{1}{7},$ dan $\\frac{1}{6}$, sehingga seluruhnya ada $4$ pecahan.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Convert the base-4 number $321_4$ directly into the base-2 (binary) number system.',
          answer: '$111001_2$',
          principle:
            'Since $4 = 2^2$, each base-$4$ digit maps directly to a two-digit binary block.',
          solution:
            'Convert each base-$4$ digit into a $2$-bit binary block: $3_4 = 11_2$, $2_4 = 10_2$, and $1_4 = 01_2$.\nConcatenating the blocks gives $111001_2$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'Perhatikan pola barisan berikut: $2, 5, 10, 17, 26, 37, \\dots$ Berapakah nilai suku ke-$10$ dari barisan tersebut?',
          answer: '101',
          answerNumeric: [{ name: 'sukuKe10', value: 101 }],
          principle:
            'Amati hubungan suku ke-$n$ dengan bilangan kuadrat $n^2$.',
          solution:
            'Setiap suku mengikuti pola $n^2 + 1$: $1^2 + 1 = 2$, $2^2 + 1 = 5$, $3^2 + 1 = 10$, dan seterusnya.\nUntuk suku ke-$10$: $10^2 + 1 = 101$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'A teacher has $30$ students in her class. If every student shakes hands with every other student exactly once to greet each other, how many total handshakes occur?',
          answer: '435',
          answerNumeric: [{ name: 'handshakes', value: 435 }],
          principle:
            'The number of unique pairs among $n$ people is given by $\\frac{n(n - 1)}{2}$.',
          solution:
            'Using the handshake formula for $n = 30$:\n$$\\frac{30 \\times 29}{2} = 15 \\times 29 = 435\\text{ handshakes}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Dua buah bilangan memiliki hasil kali $864$ dan Faktor Persekutuan Terbesar (FPB) bernilai $6$. Tentukan KPK dari kedua bilangan tersebut!',
          answer: '144',
          answerNumeric: [{ name: 'kpk', value: 144 }],
          principle:
            'Hasil kali dua bilangan bulat positif sama dengan hasil kali FPB dan KPK-nya.',
          solution:
            'Diketahui $\\text{Hasil Kali} = \\text{FPB} \\times \\text{KPK}$, maka:\n$$864 = 6 \\times \\text{KPK} \\implies \\text{KPK} = \\frac{864}{6} = 144.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '34',
          marks: 1,
          prompt:
            'The sum of three distinct prime numbers is $100$. If one of the numbers is $2$, what is the maximum possible difference between the other two numbers?',
          answer: '60',
          answerNumeric: [{ name: 'difference', value: 60 }],
          principle:
            'Subtract the known prime from the total sum, then pair the smallest prime summand with its prime complement to maximize the difference.',
          solution:
            'With one prime equal to $2$, the other two distinct odd primes sum to $100 - 2 = 98$.\nThe prime pairs summing to $98$ are $(19, 79)$, $(31, 67)$, and $(37, 61)$.\nThe pair with the greatest difference is $(19, 79)$, giving $79 - 19 = 60$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'Hitunglah hasil dari operasi pecahan berpola berikut: $1 - \\frac{1}{2} + \\frac{1}{4} - \\frac{1}{8} + \\frac{1}{16} - \\frac{1}{32}$. Berikan jawaban dalam bentuk pecahan biasa.',
          answer: '$\\frac{21}{32}$',
          principle:
            'Samakan penyebut seluruh pecahan ke KPK penyebut terbesarnya lalu jumlahkan pembilangnya.',
          solution:
            'Samakan seluruh penyebut menjadi $32$:\n$$\\frac{32}{32} - \\frac{16}{32} + \\frac{8}{32} - \\frac{4}{32} + \\frac{2}{32} - \\frac{1}{32} = \\frac{32 - 16 + 8 - 4 + 2 - 1}{32} = \\frac{21}{32}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '36',
          marks: 1,
          prompt:
            'For what positive integer base $b$ does the equation $65_b = 53_{10}$ hold true?',
          answer: '8',
          answerNumeric: [{ name: 'base', value: 8 }],
          principle:
            'Expand the base-$b$ representation into a linear equation in base $10$.',
          solution:
            'Convert $65_b$ to base $10$:\n$$6b + 5 = 53 \\implies 6b = 48 \\implies b = 8.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '37',
          marks: 1,
          prompt:
            'Diketahui bahwa jumlah dari $n$ buah bilangan ganjil positif pertama adalah $400$. Berapakah nilai $n$?',
          answer: '20',
          answerNumeric: [{ name: 'n', value: 20 }],
          principle:
            'Jumlah $n$ bilangan ganjil positif pertama ($1 + 3 + 5 + \\dots$) selalu sama dengan $n^2$.',
          solution:
            'Karena jumlah $n$ bilangan ganjil positif pertama adalah $n^2$, diperoleh:\n$$n^2 = 400 \\implies n = 20.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '38',
          marks: 1,
          prompt:
            'A mathematical operation $*$ is defined as $x * y = x^2 - y^2$. Find the positive integer value of $k$ in the equation $10 * k = 64$.',
          answer: '6',
          answerNumeric: [{ name: 'k', value: 6 }],
          principle:
            'Substitute the inputs into the operation rule and solve the resulting quadratic equation for the positive root.',
          solution:
            'From the definition, $10 * k = 10^2 - k^2 = 64$.\nThus $100 - k^2 = 64 \\implies k^2 = 36$.\nSince $k$ is a positive integer, $k = 6$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '39',
          marks: 1,
          prompt:
            'Diberikan dua buah bilangan prima $p$ dan $q$ sedemikian sehingga berlaku persamaan: $p^2 - q^2 = p + q$. Tentukan nilai dari $p \\times q$.',
          answer: '6',
          answerNumeric: [{ name: 'product', value: 6 }],
          principle:
            'Faktorkan selisih dua kuadrat $p^2 - q^2 = (p - q)(p + q)$ untuk menyederhanakan persamaan.',
          solution:
            'Faktorkan ruas kiri: $(p - q)(p + q) = p + q$.\nKarena $p + q > 0$, bagi kedua ruas dengan $(p + q)$ sehingga diperoleh $p - q = 1$.\nSatu-satunya pasangan bilangan prima yang berselisih $1$ adalah $p = 3$ dan $q = 2$.\nMaka $p \\times q = 3 \\times 2 = 6$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '40',
          marks: 1,
          prompt:
            'Express the repeating decimal $3.1666\\dots$ (where the digit $6$ repeats infinitely) as a fraction in its simplest form.',
          answer: '$\\frac{19}{6}$',
          principle:
            'Multiply by powers of $10$ to align the repeating decimal part, subtract to obtain a linear equation, and reduce the fraction to lowest terms.',
          solution:
            'Let $x = 3.1666\\dots$, so $10x = 31.666\\dots$\nSubtracting $x$ from $10x$ gives $9x = 28.5$.\nMultiplying by $2$ gives $18x = 57$, so:\n$$x = \\frac{57}{18} = \\frac{57 \\div 3}{18 \\div 3} = \\frac{19}{6}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
