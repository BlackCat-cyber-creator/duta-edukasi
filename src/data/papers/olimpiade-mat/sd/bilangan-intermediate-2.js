/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SD Kelas 4–5 – Intermediate 2
 * Sumber: BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4–5 – INTERMEDIATE 2.pdf (Duta e-dukasi).
 * Bahasa asli tiap butir soal (Indonesia / Inggris) dipertahankan sesuai Keputusan D5.
 */
export default {
  id: 'olim-sd-bilangan-int2',
  slug: 'bilangan-sd-intermediate-2',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  topic: 'Bilangan Olimpiade SD Kelas 4–5 (Intermediate 2)',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan'
  ],
  lang: 'id',
  langDisplay: 'ID / EN',
  competition: 'Seri Pembinaan OSN',
  title: 'Bilangan Olimpiade Matematika SD Kelas 4–5 – Intermediate 2',
  totalMarks: 40,
  instructions:
    'Kerjakan seluruh 40 soal (25 Pilihan Ganda pada Bagian A dan 15 Isian Singkat pada Bagian B). Setiap soal dipertahankan dalam bahasa aslinya (Bahasa Indonesia atau Bahasa Inggris).',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4\u20135 \u2013 INTERMEDIATE 2.pdf',
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
            'Hasil dari operasi $(-25) - (-12) \\times 5 + 48 \\div (-6)$ adalah...\nA. 27\nB. 35\nC. 43\nD. 77',
          answer: 'A. 27',
          principle:
            'Dahulukan operasi perkalian dan pembagian sebelum penjumlahan dan pengurangan, serta perhatikan aturan tanda bilangan bulat.',
          solution:
            'Kerjakan operasi perkalian dan pembagian terlebih dahulu:\n$$(-12) \\times 5 = -60 \\quad \\text{dan} \\quad 48 \\div (-6) = -8.$$\nSubstitusi kembali:\n$$(-25) - (-60) + (-8) = -25 + 60 - 8 = 35 - 8 = 27.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Three lighthouses flash their lights at different intervals: one every $12$ seconds, one every $15$ seconds, and one every $20$ seconds. If they all flash together at 8:00:00 PM, at what exact time will they next flash together?\nA. 8:00:47 PM\nB. 8:01:00 PM\nC. 8:01:20 PM\nD. 8:02:00 PM',
          answer: 'B. 8:01:00 PM',
          principle:
            'Periodic events starting together will coincide again after a duration equal to the Least Common Multiple (LCM) of their intervals.',
          solution:
            'Find the LCM of $12$, $15$, and $20$. Multiples of $20$ are $20, 40, 60$. Since $60$ is divisible by both $12$ and $15$, the LCM is $60$ seconds ($1$ minute).\nThus, they will flash together exactly $1$ minute later, at 8:01:00 PM.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Berapa banyak bilangan prima dua angka yang seluruh digit penyusunnya juga merupakan bilangan prima?\nA. 3\nB. 4\nC. 5\nD. 6',
          answer: 'B. 4',
          principle:
            'Bilangan prima satu digit hanyalah $2, 3, 5,$ dan $7$; periksa seluruh kombinasi dua angka dari digit-digit tersebut untuk melihat mana yang juga prima.',
          solution:
            'Digit-digit yang juga bilangan prima adalah $2, 3, 5,$ dan $7$.\nBentuklah bilangan prima dua angka dari digit-digit ini: $23$ (prima), $37$ (prima), $53$ (prima), dan $73$ (prima).\nKombinasi lain seperti $25, 27, 33, 35, 55, 57, 75, 77$ (serta bilangan genap dua digit berakhiran $2$) bukan bilangan prima.\nJadi, ada $4$ bilangan.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Evaluate the following expression: $\\left(\\frac{1}{2} + \\frac{1}{3}\\right) \\div \\left(\\frac{1}{4} + \\frac{1}{6}\\right)$.\nA. 1\nB. 1.5\nC. 2\nD. 2.5',
          answer: 'C. 2',
          principle:
            'Evaluate expressions inside parentheses first using common denominators, then divide fractions by multiplying by the reciprocal.',
          solution:
            'Evaluate the parentheses first:\n$$\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}, \\qquad \\frac{1}{4} + \\frac{1}{6} = \\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}.$$\nThen divide:\n$$\\frac{5}{6} \\div \\frac{5}{12} = \\frac{5}{6} \\times \\frac{12}{5} = \\frac{12}{6} = 2.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Hasil penjumlahan dua bilangan dalam sistem basis 4, yaitu $123_4 + 321_4$, adalah...\nA. $444_4$\nB. $1010_4$\nC. $1110_4$\nD. $1210_4$',
          answer: 'C. $1110_4$',
          principle:
            'Penjumlahan dalam basis $4$ dilakukan dari digit paling kanan; setiap jumlah $\\ge 4$ dikonversi ke basis $4$ untuk memperoleh digit hasil dan simpanan ke lajur berikutnya.',
          solution:
            'Tambahkan dari lajur paling kanan:\n- Lajur pertama: $3 + 1 = 4$. Pada basis $4$, $4$ ditulis $10_4$ (tulis $0$, simpan $1$).\n- Lajur kedua: $2 + 2 + 1\\text{ (simpanan)} = 5$. Pada basis $4$, $5$ ditulis $11_4$ (tulis $1$, simpan $1$).\n- Lajur ketiga: $1 + 3 + 1\\text{ (simpanan)} = 5$, ditulis $11_4$.\nGabungkan hasilnya menjadi $1110_4$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Consider the sequence: $1, 3, 7, 15, 31, \\dots$ What is the 7th term of this sequence?\nA. 63\nB. 127\nC. 128\nD. 255',
          answer: 'B. 127',
          principle:
            'Identify the explicit formula $a_n = 2^n - 1$ governing the sequence.',
          solution:
            'The sequence follows the pattern $2^n - 1$.\nTerm 1: $2^1 - 1 = 1$, Term 2: $2^2 - 1 = 3$, Term 3: $2^3 - 1 = 7$, and so on.\nThe 7th term is:\n$$2^7 - 1 = 128 - 1 = 127.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Suhu sebuah ruangan pendingin awalnya adalah $-8^\\circ\\text{C}$. Suhu ruangan tersebut kemudian dinaikkan $15^\\circ\\text{C}$, lalu diturunkan $12^\\circ\\text{C}$, dan akhirnya dinaikkan lagi $7^\\circ\\text{C}$. Suhu ruangan pendingin tersebut sekarang adalah...\nA. $-2^\\circ\\text{C}$\nB. $0^\\circ\\text{C}$\nC. $2^\\circ\\text{C}$\nD. $5^\\circ\\text{C}$',
          answer: 'C. $2^\\circ\\text{C}$',
          principle:
            'Kenaikan suhu dinyatakan sebagai penjumlahan bilangan positif dan penurunan suhu sebagai pengurangan.',
          solution:
            'Ikuti urutan perubahan suhu:\n$$-8^\\circ\\text{C} + 15^\\circ\\text{C} = 7^\\circ\\text{C}, \\quad 7^\\circ\\text{C} - 12^\\circ\\text{C} = -5^\\circ\\text{C}, \\quad -5^\\circ\\text{C} + 7^\\circ\\text{C} = 2^\\circ\\text{C}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'The LCM of two unknown positive integers is $120$ and their GCF is $6$. If one of the numbers is $24$, what is the other number?\nA. 30\nB. 36\nC. 42\nD. 60',
          answer: 'A. 30',
          principle:
            'For any two positive integers $a$ and $b$, the product equals the product of their LCM and GCF: $a \\times b = \\text{LCM}(a, b) \\times \\text{GCF}(a, b)$.',
          solution:
            'For any two numbers $a$ and $b$, $a \\times b = \\text{LCM}(a, b) \\times \\text{GCF}(a, b)$.\nWe know:\n$$24 \\times b = 120 \\times 6 \\implies 24b = 720 \\implies b = \\frac{720}{24} = 30.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Jumlah tiga bilangan prima yang saling berbeda adalah $34$. Berapakah nilai bilangan prima terbesar yang mungkin dari ketiga bilangan tersebut?\nA. 19\nB. 23\nC. 29\nD. 31',
          answer: 'C. 29',
          principle:
            'Jumlah tiga bilangan bulat bernilai genap hanya jika ketiganya genap atau tepat satu di antaranya genap (bilangan prima genap satu-satunya adalah $2$).',
          solution:
            'Karena jumlah tiga bilangan prima tersebut adalah bilangan genap ($34$), salah satu dari bilangan prima tersebut haruslah bilangan genap, yaitu $2$.\nMaka jumlah dua bilangan prima lainnya adalah $34 - 2 = 32$.\nPasangan bilangan prima berbeda yang berjumlah $32$ adalah $3$ dan $29$, atau $13$ dan $19$.\nBilangan terbesar dari pilihan tersebut adalah $29$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Which of the following fractions has the smallest value?\nA. $\\frac{5}{7}$\nB. $\\frac{7}{9}$\nC. $\\frac{9}{11}$\nD. $\\frac{11}{13}$',
          answer: 'A. $\\frac{5}{7}$',
          principle:
            'Rewrite fractions of the form $\\frac{n - 2}{n}$ as $1 - \\frac{2}{n}$; the fraction subtracting the largest remainder $\\frac{2}{n}$ is the smallest.',
          solution:
            'Notice that each fraction can be written as $1 - \\frac{2}{\\text{denominator}}$:\n$$\\frac{5}{7} = 1 - \\frac{2}{7}, \\quad \\frac{7}{9} = 1 - \\frac{2}{9}, \\quad \\frac{9}{11} = 1 - \\frac{2}{11}, \\quad \\frac{11}{13} = 1 - \\frac{2}{13}.$$\nThe smallest fraction will have the largest subtracted part ($\\frac{2}{7}$ is larger than $\\frac{2}{9}, \\frac{2}{11}, \\frac{2}{13}$). So $\\frac{5}{7}$ is the smallest.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Konversi bilangan biner $110110_2$ ke dalam sistem bilangan basis 4 adalah...\nA. $312_4$\nB. $321_4$\nC. $322_4$\nD. $213_4$',
          answer: 'A. $312_4$',
          principle:
            'Karena $4 = 2^2$, konversi dari basis $2$ ke basis $4$ dilakukan dengan mengelompokkan setiap $2$ digit biner dari kanan ke kiri.',
          solution:
            'Kelompokkan bilangan biner dari kanan ke kiri masing-masing $2$ digit: $11 \\mid 01 \\mid 10$.\nTerjemahkan tiap kelompok ke basis $10$ (yang juga merupakan digit basis $4$): $11_2 = 3$, $01_2 = 1$, $10_2 = 2$.\nMaka hasilnya adalah $312_4$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'The decimal expansion of $\\frac{1}{7}$ is the repeating decimal $0.142857142857\\dots$ What is the 100th digit after the decimal point?\nA. 1\nB. 2\nC. 5\nD. 8',
          answer: 'D. 8',
          principle:
            'Find the position in a repeating decimal block of length $k$ by dividing the target position $n$ by $k$ and inspecting the remainder.',
          solution:
            'The repeating block "$142857$" has $6$ digits.\nTo find the 100th digit, divide $100$ by $6$:\n$$100 = 16 \\times 6 + 4.$$\nThe remainder is $4$, which means the 100th digit is the 4th digit in the repeating block. The 4th digit of $142857$ is $8$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Sebuah operasi baru $\\otimes$ didefinisikan sebagai $a \\otimes b = a^2 - b^2$. Nilai dari $(5 \\otimes 3) \\otimes 4$ adalah...\nA. 16\nB. 64\nC. 240\nD. 256',
          answer: 'C. 240',
          principle:
            'Kerjakan operasi terdefinisi di dalam tanda kurung terlebih dahulu sesuai aturan $a \\otimes b = a^2 - b^2$, lalu substitusi hasilnya ke operasi berikutnya.',
          solution:
            'Hitung di dalam kurung terlebih dahulu:\n$$5 \\otimes 3 = 5^2 - 3^2 = 25 - 9 = 16.$$\nKemudian lanjutkan operasi:\n$$16 \\otimes 4 = 16^2 - 4^2 = 256 - 16 = 240.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'What is the smallest positive integer greater than $5$ that leaves a remainder of $2$ when divided by $3$, $4$, and $5$?\nA. 32\nB. 60\nC. 62\nD. 122',
          answer: 'C. 62',
          principle:
            'A positive integer leaving a constant remainder $r$ when divided by $a, b, c$ has the form $k \\cdot \\text{LCM}(a, b, c) + r$; the smallest positive solution exceeding $r$ is $\\text{LCM}(a, b, c) + r$.',
          solution:
            'First find the Least Common Multiple (LCM) of $3$, $4$, and $5$. Since they are pairwise coprime:\n$$\\text{LCM}(3, 4, 5) = 3 \\times 4 \\times 5 = 60.$$\nThe number must leave a remainder of $2$, so the smallest such number is $60 + 2 = 62$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Berapakah hasil penjumlahan dari semua bilangan prima yang terletak di antara $40$ dan $50$?\nA. 84\nB. 88\nC. 131\nD. 135',
          answer: 'C. 131',
          principle:
            'Identifikasi seluruh bilangan antara $40$ dan $50$ yang hanya memiliki tepat dua faktor pembagi ($1$ dan dirinya sendiri), lalu jumlahkan.',
          solution:
            'Bilangan prima antara $40$ dan $50$ adalah $41, 43,$ dan $47$ (karena $42, 44, 46, 48$ genap; $45$ habis dibagi $5$; dan $49 = 7^2$).\nJumlah ketiganya:\n$$41 + 43 + 47 = 131.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'John spends $\\frac{1}{3}$ of his allowance on books. He then spends $\\frac{1}{4}$ of the remaining money on food. If he is left with $\\char36 24$, what was his initial allowance?\nA. $\\char36 36$\nB. $\\char36 48$\nC. $\\char36 56$\nD. $\\char36 72$',
          answer: 'B. $\\char36 48$',
          principle:
            'Track the remaining fraction sequentially: spending fraction $f$ leaves $(1 - f)$ of the current amount.',
          solution:
            'If John spends $\\frac{1}{3}$, he has $\\frac{2}{3}$ left. He then spends $\\frac{1}{4}$ of the remaining, leaving him with $\\frac{3}{4}$ of the remaining.\nSo he is left with:\n$$\\frac{3}{4} \\times \\frac{2}{3} = \\frac{1}{2}$$\nof his initial allowance. If $\\frac{1}{2}$ of the allowance is $\\char36 24$, his initial allowance was $24 \\times 2 = \\char36 48$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Diketahui persamaan dalam basis bilangan: $25_x = 21_{10}$. Nilai dari basis $x$ adalah...\nA. 6\nB. 7\nC. 8\nD. 9',
          answer: 'C. 8',
          principle:
            'Ubah bilangan dua digit dalam basis $x$, yaitu $\\overline{ab}_x = a \\cdot x + b$, ke basis $10$ untuk membentuk persamaan linear.',
          solution:
            'Terjemahkan ruas kiri ke basis $10$:\n$$25_x = (2 \\times x) + (5 \\times 1) = 2x + 5.$$\nKarena nilainya $21$, maka:\n$$2x + 5 = 21 \\implies 2x = 16 \\implies x = 8.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'What is the exact difference between the sum of the first $20$ even positive integers and the sum of the first $20$ odd positive integers?\nA. 10\nB. 20\nC. 40\nD. 400',
          answer: 'B. 20',
          principle:
            'Pair corresponding terms $(2k) - (2k - 1) = 1$ across all $n$ pairs to determine the difference directly.',
          solution:
            'The first $20$ even positive integers are $2, 4, 6, \\dots, 40$. The first $20$ odd positive integers are $1, 3, 5, \\dots, 39$.\nNotice that each even number is exactly $1$ greater than its corresponding odd number ($2 - 1 = 1$, $4 - 3 = 1$, etc.).\nSince there are $20$ pairs, the total difference is $20 \\times 1 = 20$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Dalam suatu ujian matematika yang terdiri dari $50$ soal, jawaban benar diberi nilai $+4$, salah diberi nilai $-2$, dan tidak dijawab diberi nilai $-1$. Rina berhasil menjawab benar $35$ soal dan membiarkan $5$ soal tidak dijawab. Total nilai yang diperoleh Rina adalah...\nA. 110\nB. 115\nC. 120\nD. 135',
          answer: 'B. 115',
          principle:
            'Jumlah soal salah diperoleh dari total soal dikurangi soal benar dan soal kosong, lalu kalikan setiap kategori dengan bobot nilainya.',
          solution:
            'Total soal $= 50$. Benar $= 35$, Kosong $= 5$. Maka, Salah $= 50 - (35 + 5) = 10$ soal.\nPoin Benar $= 35 \\times 4 = 140$.\nPoin Salah $= 10 \\times (-2) = -20$.\nPoin Kosong $= 5 \\times (-1) = -5$.\nTotal Nilai $= 140 - 20 - 5 = 115$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Two connected gears have $36$ teeth and $24$ teeth, respectively. How many complete revolutions must the smaller gear make before both gears return to their exact original starting alignment?\nA. 2\nB. 3\nC. 4\nD. 6',
          answer: 'B. 3',
          principle:
            'Meshed gears advance the same number of teeth; realignment occurs when the number of teeth turned equals the LCM of their tooth counts.',
          solution:
            'The gears will realign when they have both turned the same number of teeth that is a multiple of both their sizes:\n$$\\text{LCM}(36, 24) = 72\\text{ teeth}.$$\nThe smaller gear has $24$ teeth. To turn $72$ teeth, it must make:\n$$\\frac{72}{24} = 3\\text{ complete revolutions}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Faktorisasi prima dari bilangan $999$ adalah...\nA. $3^2 \\times 111$\nB. $3^3 \\times 37$\nC. $9 \\times 111$\nD. $3^2 \\times 11 \\times 13$',
          answer: 'B. $3^3 \\times 37$',
          principle:
            'Uraikan bilangan komposit hingga seluruh faktornya berupa bilangan prima dalam bentuk pangkat.',
          solution:
            'Faktorkan $999$ secara bertahap:\n$$999 = 9 \\times 111 = 3^2 \\times (3 \\times 37) = 3^3 \\times 37.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'The repeating decimal $0.363636\\dots$ can be expressed as a fraction in its simplest form. What is this fraction?\nA. $\\frac{4}{11}$\nB. $\\frac{7}{22}$\nC. $\\frac{9}{25}$\nD. $\\frac{18}{50}$',
          answer: 'A. $\\frac{4}{11}$',
          principle:
            'A pure repeating decimal with a $2$-digit repeating block $\\overline{ab}$ equals $\\frac{\\overline{ab}}{99}$, which is then reduced to lowest terms.',
          solution:
            'The repeating decimal $0.3636\\dots$ with two repeating digits can be written as $\\frac{36}{99}$.\nSimplify the fraction by dividing numerator and denominator by $9$:\n$$\\frac{36}{99} = \\frac{4}{11}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Pada sistem bilangan heksadesimal (basis 16), angka-angka setelah $9$ dilambangkan dengan huruf ($A = 10$, $B = 11$, dst). Berapakah nilai desimal (basis 10) dari digit huruf "D"?\nA. 12\nB. 13\nC. 14\nD. 15',
          answer: 'B. 13',
          principle:
            'Dalam sistem bilangan heksadesimal, huruf A–F berturut-turut merepresentasikan nilai desimal $10$ hingga $15$.',
          solution:
            'Sistem heksadesimal: $A = 10, B = 11, C = 12, D = 13, E = 14, F = 15$.\nJadi, digit huruf "D" bernilai $13$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'In the sequence of perfect squares: $1, 4, 9, 16, 25, \\dots$, what is the 12th term?\nA. 121\nB. 144\nC. 169\nD. 196',
          answer: 'B. 144',
          principle:
            'The $n$-th term in the sequence of positive perfect squares is $n^2$.',
          solution:
            'The sequence of perfect squares is given by $n^2$.\nFor the 12th term, $n = 12$, so:\n$$12^2 = 144.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Nilai $x$ yang memenuhi persamaan $5 \\times (x - 4) = 45$ adalah...\nA. 9\nB. 11\nC. 13\nD. 15',
          answer: 'C. 13',
          principle:
            'Selesaikan persamaan linear satu variabel dengan melakukan operasi invers yang sama pada kedua ruas.',
          solution:
            'Selesaikan persamaannya: bagi kedua ruas dengan $5$, sehingga $x - 4 = 9$.\nTambahkan $4$ ke kedua ruas, didapat $x = 13$.',
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
            'Evaluate the following expression involving absolute values: $|-8 + 3| \\times |4 - 9|$.',
          answer: '25',
          answerNumeric: [{ name: 'value', value: 25 }],
          principle:
            'Evaluate the expression inside each absolute value bar first, then take its non-negative magnitude before multiplying.',
          solution:
            'First compute inside the absolute value bars:\n$$|-8 + 3| \\times |4 - 9| = |-5| \\times |-5|.$$\nAbsolute value turns negative to positive, so $5 \\times 5 = 25$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Tiga buah bus antarkota berangkat dari terminal yang sama. Bus pertama berangkat setiap $15$ menit, bus kedua setiap $20$ menit, dan bus ketiga setiap $25$ menit. Jika ketiga bus tersebut berangkat bersamaan pada pukul 06:00 pagi, pada pukul berapakah mereka akan berangkat bersamaan lagi untuk yang kedua kalinya?',
          answer: '11:00 pagi',
          principle:
            'Waktu keberangkatan bersamaan berikutnya diperoleh dengan menambahkan KPK interval keberangkatan pada waktu awal.',
          solution:
            'Cari KPK dari $15, 20,$ dan $25$ yang bernilai $300$ menit ($15 = 3 \\times 5$, $20 = 2^2 \\times 5$, $25 = 5^2$, sehingga $\\text{KPK} = 300$).\n$300$ menit sama dengan $5$ jam. Mereka akan berangkat bersama $5$ jam setelah pukul 06:00 pagi, yaitu pukul 11:00 pagi.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '28',
          marks: 1,
          prompt: 'What is the sum of the first $5$ composite numbers?',
          answer: '37',
          answerNumeric: [{ name: 'sum', value: 37 }],
          principle:
            'A composite number is an integer greater than $1$ with more than two positive factors ($1$ is neither prime nor composite).',
          solution:
            'Composite numbers are numbers with more than two factors. The first $5$ composite numbers are $4, 6, 8, 9, 10$.\n$$\\text{Sum} = 4 + 6 + 8 + 9 + 10 = 37.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Hitunglah hasil dari pembagian pecahan campuran berikut: $1\\frac{1}{2} \\div 2\\frac{1}{4}$. (Tuliskan jawaban dalam pecahan paling sederhana).',
          answer: '$\\frac{2}{3}$',
          principle:
            'Ubah pecahan campuran menjadi pecahan biasa terlebih dahulu, kemudian kalikan dengan kebalikan pecahan pembagi.',
          solution:
            'Ubah menjadi pecahan biasa:\n$$1\\frac{1}{2} \\div 2\\frac{1}{4} = \\frac{3}{2} \\div \\frac{9}{4}.$$\nPembagian pecahan sama dengan mengalikan kebalikannya:\n$$\\frac{3}{2} \\times \\frac{4}{9} = \\frac{12}{18}.$$\nSederhanakan dengan membagi $6$, hasilnya $\\frac{2}{3}$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Calculate $102_3 \\times 2_3$ and express the final result in the base-3 number system.',
          answer: '$211_3$',
          principle:
            'Convert operands to base-10, multiply, and convert the product back to base-3 via repeated division by $3$ (reading remainders from last to first).',
          solution:
            'Convert to base-10 first:\n$$102_3 = (1 \\times 9) + (0 \\times 3) + (2 \\times 1) = 11, \\qquad 2_3 = 2.$$\nProduct in base-10 $= 11 \\times 2 = 22$.\nConvert $22$ back to base-3: $22 \\div 3 = 7$ r $1$; $7 \\div 3 = 2$ r $1$; $2 \\div 3 = 0$ r $2$.\nReading the remainders from last to first gives $211_3$ (note: the source PDF answer key misprinted this as $201_3$, whereas $2 \\times 9 + 1 \\times 3 + 1 = 22$).',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'Perhatikan pola bilangan berikut: suku ke-1 adalah $1 \\times 2$, suku ke-2 adalah $2 \\times 3$, dan suku ke-3 adalah $3 \\times 4$. Berapakah hasil penjumlahan dari $5$ suku pertama pada pola bilangan tersebut?',
          answer: '70',
          answerNumeric: [{ name: 'jumlah', value: 70 }],
          principle:
            'Tentukan nilai tiap suku ke-$n$ dengan pola $n \\times (n + 1)$ untuk $n = 1, 2, 3, 4, 5$, kemudian jumlahkan.',
          solution:
            'Kelima suku tersebut adalah $(1 \\times 2) = 2$, $(2 \\times 3) = 6$, $(3 \\times 4) = 12$, $(4 \\times 5) = 20$, dan $(5 \\times 6) = 30$.\nPenjumlahan kelimanya:\n$$2 + 6 + 12 + 20 + 30 = 70.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'Find the sum of all consecutive integers from $-20$ to $25$ inclusive.',
          answer: '115',
          answerNumeric: [{ name: 'sum', value: 115 }],
          principle:
            'Pair additive inverses $(-k) + k = 0$ so only the remaining unmatched integers need to be summed.',
          solution:
            'The sum includes numbers from $-20$ to $25$. The numbers from $-20$ to $20$ are additive inverses of each other and their sum is exactly $0$.\nThe only remaining numbers are $21, 22, 23, 24,$ and $25$. Their sum is:\n$$21 + 22 + 23 + 24 + 25 = 115.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Tentukan Faktor Persekutuan Terbesar (FPB) dari tiga bilangan berikut: $72$, $108$, dan $180$.',
          answer: '36',
          answerNumeric: [{ name: 'fpb', value: 36 }],
          principle:
            'FPB dari beberapa bilangan diperoleh dengan mengalikan faktor-faktor prima yang sama dengan pangkat terkecil.',
          solution:
            'Faktorisasi prima:\n$$72 = 2^3 \\times 3^2, \\quad 108 = 2^2 \\times 3^3, \\quad 180 = 2^2 \\times 3^2 \\times 5.$$\nAmbil pangkat terkecil untuk faktor yang sama:\n$$2^2 \\times 3^2 = 4 \\times 9 = 36.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '34',
          marks: 1,
          prompt:
            'How many prime numbers are there strictly between $50$ and $60$?',
          answer: '2',
          answerNumeric: [{ name: 'count', value: 2 }],
          principle:
            'Check odd integers in $(50, 60)$ for divisibility by primes up to $\\sqrt{60} < 8$ (namely $3, 5, 7$).',
          solution:
            'The numbers between $50$ and $60$ are $51, 52, 53, 54, 55, 56, 57, 58, 59$.\nEvens and multiples of $5$ are out. $51$ and $57$ are divisible by $3$.\nThe remaining primes are $53$ and $59$. There are $2$ primes.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'Diketahui bahwa $\\frac{2}{5}$ bagian dari sebuah bilangan misterius adalah $40$. Berapakah nilai $\\frac{3}{4}$ bagian dari bilangan misterius tersebut?',
          answer: '75',
          answerNumeric: [{ name: 'nilai', value: 75 }],
          principle:
            'Tentukan bilangan utuh terlebih dahulu dari nilai pecahannya, lalu hitung pecahan yang diminta.',
          solution:
            'Misalkan bilangan tersebut adalah $N$. Diketahui $\\frac{2}{5} \\times N = 40$.\nMaka:\n$$N = 40 \\times \\frac{5}{2} = 100.$$\nKemudian nilai $\\frac{3}{4}$ dari $N$ adalah:\n$$\\frac{3}{4} \\times 100 = 75.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '36',
          marks: 1,
          prompt:
            'If a number $x$ expressed in base-5 is written as $32_5$, what is the value of $x$ in the decimal (base-10) system?',
          answer: '17',
          answerNumeric: [{ name: 'x', value: 17 }],
          principle:
            'Expand a base-5 number using powers of $5$ ($5^1$ and $5^0$) to compute its decimal value.',
          solution:
            'Evaluate $32_5$ in base-10:\n$$x = (3 \\times 5^1) + (2 \\times 5^0) = 15 + 2 = 17.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '37',
          marks: 1,
          prompt:
            'Berapakah jumlah dari seluruh angka-angka yang menyusun bilangan hasil pengurangan $10^{10} - 1$?',
          answer: '90',
          answerNumeric: [{ name: 'jumlah', value: 90 }],
          principle:
            'Bilangan berbentuk $10^n - 1$ tersusun atas tepat $n$ buah digit angka $9$.',
          solution:
            'Nilai $10^{10}$ adalah angka $1$ yang diikuti oleh sepuluh angka $0$ ($10.000.000.000$).\nJika dikurangi $1$, hasilnya adalah deretan sepuluh angka $9$ ($9.999.999.999$).\nJumlah seluruh angka $9$ tersebut adalah $10 \\times 9 = 90$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '38',
          marks: 1,
          prompt:
            'A custom mathematical operation $\\Delta$ is defined as $a \\Delta b = \\frac{a + b}{a - b}$. Find the exact value of $7 \\Delta 3$.',
          answer: '$2.5$ (atau $\\frac{5}{2}$)',
          answerNumeric: [{ name: 'value', value: 2.5 }],
          principle:
            'Substitute the given operands directly into the defined formula $a \\Delta b = \\frac{a + b}{a - b}$ and simplify.',
          solution:
            'Substitute $a = 7$ and $b = 3$ into the definition:\n$$7 \\Delta 3 = \\frac{7 + 3}{7 - 3} = \\frac{10}{4}.$$\nSimplifying gives $\\frac{5}{2}$ or $2.5$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '39',
          marks: 1,
          prompt:
            'Budi memiliki $48$ permen merah, $72$ permen biru, dan $120$ permen hijau. Permen-permen tersebut akan dimasukkan ke dalam kotak-kotak kecil sehingga setiap kotak memiliki jumlah permen merah, biru, dan hijau yang sama banyak. Berapa jumlah kotak terbanyak yang dapat disiapkan oleh Budi?',
          answer: '24',
          answerNumeric: [{ name: 'kotak', value: 24 }],
          principle:
            'Pembagian beberapa jenis benda ke dalam wadah terbanyak dengan komposisi sama banyak diselesaikan dengan mencari FPB.',
          solution:
            'Masalah ini adalah persoalan FPB. Cari FPB dari $48, 72,$ dan $120$:\n$$48 = 2^4 \\times 3, \\quad 72 = 2^3 \\times 3^2, \\quad 120 = 2^3 \\times 3 \\times 5.$$\n$$\\text{FPB}(48, 72, 120) = 2^3 \\times 3 = 24.$$\nJadi, kotak maksimal yang dapat disiapkan adalah $24$ kotak.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '40',
          marks: 1,
          prompt:
            'The sum of two prime numbers is exactly $55$. What is the product of these two prime numbers?',
          answer: '106',
          answerNumeric: [{ name: 'product', value: 106 }],
          principle:
            'An odd sum of two prime numbers requires one prime to be even ($2$) and the other to be odd.',
          solution:
            'Since the sum of two primes is an odd number ($55$), one of the primes must be the only even prime, which is $2$.\nThe other prime is $55 - 2 = 53$.\nThe product of these primes is $2 \\times 53 = 106$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
