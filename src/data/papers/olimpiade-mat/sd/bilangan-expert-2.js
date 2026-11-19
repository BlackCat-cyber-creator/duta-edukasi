/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SD Kelas 4–5 – Expert 2
 * Sumber: BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4–5 – EXPERT 2.pdf (Duta e-dukasi).
 * Bahasa asli tiap butir soal (Indonesia / Inggris) dipertahankan sesuai Keputusan D5.
 */
export default {
  id: 'olim-sd-bilangan-exp2',
  slug: 'bilangan-sd-expert-2',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  topic: 'Bilangan Olimpiade SD Kelas 4–5 (Expert 2)',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan'
  ],
  lang: 'id',
  langDisplay: 'ID / EN',
  competition: 'Seri Pembinaan OSN',
  title: 'Bilangan Olimpiade Matematika SD Kelas 4–5 – Expert 2',
  totalMarks: 40,
  instructions:
    'Kerjakan seluruh 40 soal (25 Pilihan Ganda pada Bagian A dan 15 Isian Singkat pada Bagian B). Setiap soal dipertahankan dalam bahasa aslinya (Bahasa Indonesia atau Bahasa Inggris).',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4\u20135 \u2013 EXPERT 2.pdf',
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
            'Didefinisikan sebuah operasi bilangan bulat $a \\nabla b = a \\times b - (a + b)$. Tentukan nilai dari $(5 \\nabla (-3)) \\nabla 4$.\nA. $-55$\nB. $-45$\nC. $-35$\nD. $-25$',
          answer: 'A. $-55$',
          principle:
            'Evaluasi operasi yang didefinisikan dari tanda kurung terdalam terlebih dahulu dengan menyubstitusikan nilai $a$ dan $b$ sesuai aturan operasi.',
          solution:
            'Terapkan aturan operasi pada $5 \\nabla (-3)$ terlebih dahulu:\n$$5 \\nabla (-3) = 5 \\times (-3) - (5 + (-3)) = -15 - 2 = -17.$$\nSelanjutnya, terapkan pada $(-17) \\nabla 4$:\n$$(-17) \\nabla 4 = -17 \\times 4 - (-17 + 4) = -68 - (-13) = -68 + 13 = -55.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'The Least Common Multiple (LCM) of two positive integers $x$ and $y$ is $420$ and their Greatest Common Factor (GCF) is $14$. If the absolute difference between $x$ and $y$ is as small as possible, what is the sum of $x$ and $y$?\nA. 154\nB. 182\nC. 238\nD. 434',
          answer: 'A. 154',
          principle:
            'Express two positive integers with GCF $d$ as $x = da$ and $y = db$ where $\\gcd(a, b) = 1$, so $\\text{LCM}(x, y) = dab$.',
          solution:
            'Let $x = 14a$ and $y = 14b$, where $a$ and $b$ are coprime positive integers.\nThe LCM is $14ab = 420$, meaning $ab = 30$.\nThe coprime pairs for $30$ are $(1, 30)$, $(2, 15)$, $(3, 10)$, and $(5, 6)$.\nTo make the absolute difference $|x - y| = 14|a - b|$ as small as possible, we choose the pair closest to each other: $a = 5$ and $b = 6$.\nThus, the sum is:\n$$14(5) + 14(6) = 70 + 84 = 154.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Diketahui $p$, $q$, dan $r$ adalah tiga bilangan prima yang memenuhi persamaan $p + q^2 = r$. Jika $p < q < r$, berapakah nilai pasti dari $p + q + r$?\nA. 12\nB. 16\nC. 24\nD. 32',
          answer: 'B. 16',
          principle:
            'Analisis paritas (genap/ganjil) bilangan prima: satu-satunya bilangan prima genap adalah $2$, sedangkan semua bilangan prima lainnya ganjil.',
          solution:
            'Karena $p$, $q$, dan $r$ adalah bilangan prima, jika $p$ dan $q$ keduanya ganjil, maka $p + q^2$ akan genap (ganjil $+$ ganjil $=$ genap).\nSatu-satunya bilangan prima genap adalah $2$, tetapi $r$ tidak mungkin $2$ karena $r > q > p \\ge 2$. Maka salah satu dari $p$ atau $q$ haruslah genap, yaitu $2$.\nKarena $p < q$, maka $p = 2$. Uji nilai prima $q > 2$:\nJika $q = 3$, maka $r = 2 + 3^2 = 11$ (prima, memenuhi).\n(Jika $q > 3$, maka $q \\equiv \\pm 1 \\pmod{3}$ sehingga $q^2 \\equiv 1 \\pmod{3}$, akibatnya $2 + q^2$ habis dibagi $3$ dan lebih dari $3$, bukan prima.)\nJadi $p = 2$, $q = 3$, dan $r = 11$, sehingga:\n$$p + q + r = 2 + 3 + 11 = 16.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'What is the value of the following fraction sum: $\\frac{1}{1 \\times 4} + \\frac{1}{4 \\times 7} + \\frac{1}{7 \\times 10} + \\dots + \\frac{1}{28 \\times 31}$?\nA. $\\frac{10}{31}$\nB. $\\frac{9}{31}$\nC. $\\frac{30}{31}$\nD. $\\frac{1}{31}$',
          answer: 'A. $\\frac{10}{31}$',
          principle:
            'Use telescoping partial fraction decomposition: $\\frac{1}{n(n+d)} = \\frac{1}{d}\\left(\\frac{1}{n} - \\frac{1}{n+d}\\right)$.',
          solution:
            'This is a telescoping sum where the difference between factors in the denominator is $3$.\nUsing $\\frac{1}{n(n+3)} = \\frac{1}{3}\\left(\\frac{1}{n} - \\frac{1}{n+3}\\right)$, pull out $\\frac{1}{3}$:\n$$\\frac{1}{3}\\left[\\left(1 - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{7}\\right) + \\dots + \\left(\\frac{1}{28} - \\frac{1}{31}\\right)\\right]$$\nAll intermediate terms cancel out, leaving:\n$$\\frac{1}{3} \\times \\left(1 - \\frac{1}{31}\\right) = \\frac{1}{3} \\times \\frac{30}{31} = \\frac{10}{31}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Bilangan desimal $2027$ jika dikonversikan ke dalam sistem bilangan basis $8$ adalah...\nA. $3573_8$\nB. $3753_8$\nC. $3735_8$\nD. $3537_8$',
          answer: 'B. $3753_8$',
          principle:
            'Konversi bilangan desimal ke basis $b$ dilakukan dengan pembagian berulang oleh $b$ dan membaca sisa pembagian dari bawah ke atas.',
          solution:
            'Bagi $2027$ dengan $8$ secara berulang-ulang:\n- $2027 \\div 8 = 253$ sisa $3$\n- $253 \\div 8 = 31$ sisa $5$\n- $31 \\div 8 = 3$ sisa $7$\n- $3 \\div 8 = 0$ sisa $3$\nMembaca sisa dari yang terakhir (bawah ke atas) menghasilkan $3753_8$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'The sum of the digits of the extremely large integer evaluated from $10^{2026} - 2026$ is:\nA. 18225\nB. 18234\nC. 18216\nD. 18243',
          answer: 'A. 18225',
          principle:
            'Subtracting an integer from $10^k$ produces leading digits of $9$ followed by the complement of the subtracted trailing digits.',
          solution:
            'The number $10^{2026}$ is a $1$ followed by $2026$ zeros.\nSubtracting $2026$ gives a number consisting of $2026 - 4 = 2022$ nines followed by the digits $7974$ (since $10000 - 2026 = 7974$).\nThe sum of the digits is:\n$$(2022 \\times 9) + 7 + 9 + 7 + 4 = 18198 + 27 = 18225.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Hitunglah hasil dari deret panjang bilangan bulat berikut: $-1 + 2 - 3 + 4 - 5 + 6 - \\dots - 2025 + 2026$.\nA. $-1013$\nB. $1013$\nC. $2026$\nD. $-2026$',
          answer: 'B. $1013$',
          principle:
            'Kelompokkan suku-suku berpasangan untuk menyederhanakan deret berganti tanda.',
          solution:
            'Kelompokkan setiap pasang bilangan berurutan:\n$$(-1 + 2) + (-3 + 4) + (-5 + 6) + \\dots + (-2025 + 2026).$$\nSetiap pasangan bernilai $1$. Terdapat $2026$ bilangan, sehingga ada tepat $\\frac{2026}{2} = 1013$ pasangan.\nJumlah totalnya adalah $1013 \\times 1 = 1013$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Three numbers have a GCF of $12$. The ratio of the three numbers to each other is $3 : 4 : 5$. What is the LCM of these three numbers?\nA. 360\nB. 720\nC. 1440\nD. 2880',
          answer: 'B. 720',
          principle:
            'When three numbers are written as $da$, $db$, $dc$ with $\\gcd(a, b, c) = 1$, their LCM is $d \\times \\text{LCM}(a, b, c)$.',
          solution:
            'Since the ratio of the numbers is $3 : 4 : 5$ and $3, 4, 5$ are pairwise coprime, the three numbers are $12 \\times 3$, $12 \\times 4$, and $12 \\times 5$.\nTheir LCM is:\n$$12 \\times \\text{LCM}(3, 4, 5) = 12 \\times (3 \\times 4 \\times 5) = 12 \\times 60 = 720.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Diketahui $p$ dan $q$ adalah bilangan prima yang memenuhi persamaan $p^2 - 2q^2 = 1$. Berapakah nilai dari $p + q$?\nA. 3\nB. 5\nC. 7\nD. 9',
          answer: 'B. 5',
          principle:
            'Gunakan analisis paritas atau sisa pembagian modulo $8$ (atau modulo $3$) pada kuadrat bilangan bulat untuk membatasi kemungkinan bilangan prima.',
          solution:
            'Ubah persamaan menjadi $p^2 = 2q^2 + 1$. Dari sini, $p^2$ ganjil sehingga $p$ pasti bilangan prima ganjil.\nJika $q$ juga ganjil, maka $q^2 \\equiv 1 \\pmod{8}$, sehingga $2q^2 + 1 = 2(8k + 1) + 1 = 16k + 3 \\equiv 3 \\pmod{8}$.\nPadahal kuadrat bilangan ganjil $p^2$ harus bersisa $1$ jika dibagi $8$. Kontradiksi ini menunjukkan $q$ tidak mungkin ganjil.\nKarena $q$ prima, maka $q = 2$. Substitusi memberikan:\n$$p^2 = 2(2^2) + 1 = 9 \\implies p = 3.$$\nMaka nilai $p + q = 3 + 2 = 5$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'A fraction is equivalent to $\\frac{5}{8}$. If you add exactly $12$ to both its numerator and denominator, the newly formed fraction becomes equivalent to $\\frac{3}{4}$. What was the numerator of the original fraction?\nA. 10\nB. 15\nC. 20\nD. 25',
          answer: 'B. 15',
          principle:
            'Represent a fraction equivalent to $\\frac{a}{b}$ as $\\frac{ax}{bx}$ and solve the resulting linear proportion via cross-multiplication.',
          solution:
            'Let the original fraction be $\\frac{5x}{8x}$. Adding $12$ to both yields:\n$$\\frac{5x + 12}{8x + 12} = \\frac{3}{4}.$$\nCross-multiplying gives:\n$$4(5x + 12) = 3(8x + 12) \\implies 20x + 48 = 24x + 36.$$\nSolving for $x$ yields $4x = 12$, so $x = 3$.\nThe numerator of the original fraction is $5(3) = 15$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Bilangan misterius $N$ jika ditulis dalam basis $5$ adalah $324_5$. Bagaimana penulisan bilangan $N$ tersebut di dalam sistem bilangan basis $2$?\nA. $1011001_2$\nB. $1101001_2$\nC. $1010101_2$\nD. $1001101_2$',
          answer: 'A. $1011001_2$',
          principle:
            'Untuk mengubah bilangan antar basis non-desimal, konversi dahulu ke basis $10$ menggunakan nilai tempat pangkat basis, lalu ubah ke basis tujuan.',
          solution:
            'Pertama-tama, ubah $324_5$ ke basis $10$:\n$$324_5 = (3 \\times 5^2) + (2 \\times 5^1) + (4 \\times 5^0) = 75 + 10 + 4 = 89.$$\nKemudian ubah $89$ ke basis $2$ (biner):\n$$89 = 64 + 16 + 8 + 1 = 2^6 + 2^4 + 2^3 + 2^0 = 1011001_2.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Find the sum of the first $100$ terms of the sequence: $1, -2, 2, -3, 3, -4, 4, -5, \\dots$\nA. $-50$\nB. $-51$\nC. $50$\nD. $51$',
          answer: 'A. $-50$',
          principle:
            'Pair consecutive opposite terms after isolating the unmatched initial term so that paired terms sum to zero.',
          solution:
            'Look at the terms starting from the second term: $(-2, 2), (-3, 3), (-4, 4), \\dots$\nThe $1\\text{st}$ term is $1$. The next $98$ terms form $49$ pairs that each sum to $0$, ending with $(-50, 50)$.\nThis covers $1 + 98 = 99$ terms. The $100\\text{th}$ term is the start of the next pair, which is $-51$.\nTherefore, the total sum is:\n$$1 + 0 + (-51) = -50.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Hitunglah nilai akhir dari deret kuadrat bergantian berikut: $1^2 - 2^2 + 3^2 - 4^2 + 5^2 - \\dots - 40^2$.\nA. $-410$\nB. $-820$\nC. $-1640$\nD. $-400$',
          answer: 'B. $-820$',
          principle:
            'Gunakan identitas selisih dua kuadrat $a^2 - b^2 = (a - b)(a + b)$ pada setiap pasang suku berurutan.',
          solution:
            'Pasangkan setiap dua suku berurutan dan faktorkan menggunakan selisih kuadrat:\n$$(1^2 - 2^2) + (3^2 - 4^2) + \\dots + (39^2 - 40^2)$$\n$$= (1 - 2)(1 + 2) + (3 - 4)(3 + 4) + \\dots + (39 - 40)(39 + 40)$$\n$$= -(1 + 2 + 3 + 4 + \\dots + 40).$$\nDengan rumus jumlah $n$ bilangan asli pertama:\n$$-\\frac{40 \\times 41}{2} = -820.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'How many ordered pairs $(a, b)$ of positive integers exist such that $\\text{GCF}(a, b) = 5$ and $\\text{LCM}(a, b) = 150$?\nA. 4\nB. 6\nC. 8\nD. 16',
          answer: 'C. 8',
          principle:
            'Factor out the GCF to reduce the problem to counting coprime factor pairs of $\\frac{\\text{LCM}}{\\text{GCF}}$, remembering that ordered pairs count $(a, b)$ and $(b, a)$ separately when $a \\neq b$.',
          solution:
            'Let $a = 5x$ and $b = 5y$, where $x$ and $y$ are coprime positive integers.\nThe LCM is $5xy = 150$, so $xy = 30$.\nThe unordered coprime factor pairs of $30$ are $\\{1, 30\\}$, $\\{2, 15\\}$, $\\{3, 10\\}$, and $\\{5, 6\\}$ ($4$ pairs).\nSince the question asks for ordered pairs $(a, b)$ and $x \\neq y$ in every pair, each of the $4$ unordered pairs yields $2$ ordered pairs.\nTotal ordered pairs $= 4 \\times 2 = 8$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Jika $x$ dan $y$ adalah bilangan bulat positif sehingga $x^2 - y^2 = 101$, dan diketahui bahwa $101$ adalah bilangan prima. Berapakah nilai pasti dari $x^2 + y^2$?\nA. 5001\nB. 5101\nC. 5201\nD. 5301',
          answer: 'B. 5101',
          principle:
            'Faktorkan $x^2 - y^2 = (x - y)(x + y)$ dan manfaatkan sifat bilangan prima yang hanya memiliki faktor $1$ dan dirinya sendiri.',
          solution:
            'Faktorkan persamaan menjadi $(x - y)(x + y) = 101$.\nKarena $101$ adalah bilangan prima dan $x, y$ positif (sehingga $x + y > x - y > 0$), maka haruslah $x - y = 1$ dan $x + y = 101$.\nJumlahkan kedua persamaan:\n$$2x = 102 \\implies x = 51, \\quad y = 50.$$\nMaka nilai dari $x^2 + y^2$ adalah:\n$$51^2 + 50^2 = 2601 + 2500 = 5101.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'A student simplified a fraction by dividing both the numerator and denominator by their greatest common factor, and obtained $\\frac{4}{9}$. If the sum of the numerator and denominator of the original unsimplified fraction was $117$, what was the original fraction\'s numerator?\nA. 24\nB. 36\nC. 45\nD. 54',
          answer: 'B. 36',
          principle:
            'An unsimplified fraction with simplest form $\\frac{p}{q}$ can be written as $\\frac{pk}{qk}$, where $k$ is the greatest common factor of the numerator and denominator.',
          solution:
            'Let the greatest common factor be $k$. The original fraction is $\\frac{4k}{9k}$.\nWe are given the sum of the original numerator and denominator:\n$$4k + 9k = 117 \\implies 13k = 117 \\implies k = 9.$$\nThus, the original numerator is $4(9) = 36$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Jika suatu persamaan beda basis menyatakan bahwa $243_x = 1001001_2$, berapakah nilai dari basis $x$?\nA. 4\nB. 5\nC. 6\nD. 7',
          answer: 'B. 5',
          principle:
            'Konversikan kedua ruas persamaan ke dalam basis $10$ untuk membentuk persamaan polinomial dalam basis $x$, dengan syarat basis lebih besar dari setiap digitnya.',
          solution:
            'Ubah ruas kanan ke basis $10$:\n$$1001001_2 = 2^6 + 2^3 + 2^0 = 64 + 8 + 1 = 73.$$\nPersamaan menjadi $2x^2 + 4x + 3 = 73$.\nKurangi kedua ruas dengan $3$ lalu bagi $2$:\n$$2x^2 + 4x = 70 \\implies x^2 + 2x - 35 = 0.$$\nFaktorkan menjadi $(x + 7)(x - 5) = 0$. Karena basis harus bilangan bulat positif lebih dari $4$, maka $x = 5$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'The $1\\text{st}$ term of a sequence is $2$. The $2\\text{nd}$ term is $3$. Each subsequent term is exactly the unit digit (last digit) of the product of the previous two terms. What is the numerical value of the $2026\\text{th}$ term?\nA. 2\nB. 4\nC. 6\nD. 8',
          answer: 'D. 8',
          principle:
            'Generate initial terms to identify any pre-period and repeating cycle, then use modular arithmetic to determine the target term.',
          solution:
            'Map the sequence:\n$T_1 = 2$, $T_2 = 3$, $T_3 = 6$, $T_4 = 8$, $T_5 = 8$, $T_6 = 4$ ($8 \\times 8 = 64$), $T_7 = 2$ ($8 \\times 4 = 32$), $T_8 = 8$ ($4 \\times 2 = 8$), $T_9 = 6$ ($2 \\times 8 = 16$), $T_{10} = 8$ ($8 \\times 6 = 48$).\nNotice that starting at $T_3$, the cycle $6, 8, 8, 4, 2, 8$ of length $6$ repeats endlessly.\nTo find the $2026\\text{th}$ term, subtract the first two non-cyclic terms: $2026 - 2 = 2024$.\nSince $2024 \\equiv 2 \\pmod{6}$, the $2026\\text{th}$ term corresponds to the $2\\text{nd}$ element in the repeating block $(6, 8, 8, 4, 2, 8)$, which is $8$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Diketahui $x$ dan $y$ adalah dua buah bilangan bulat negatif. Jika hasil kali $x \\times y = 36$ dan selisih $x - y = -5$, berapakah nilai dari penjumlahan $x + y$?\nA. $-13$\nB. $-12$\nC. $13$\nD. $12$',
          answer: 'A. $-13$',
          principle:
            'Daftarkan pasangan faktor negatif dari hasil kali yang diketahui dan pilih pasangan yang memenuhi selisih yang diberikan.',
          solution:
            'Karena $x$ dan $y$ bilangan bulat negatif dengan $x \\times y = 36$, pasangan faktor negatif dari $36$ adalah $(-1, -36)$, $(-2, -18)$, $(-3, -12)$, $(-4, -9)$, dan $(-6, -6)$.\nPersamaan $x - y = -5$ berarti $x = y - 5$, sehingga $x < y$.\nPasangan yang memenuhi adalah $x = -9$ dan $y = -4$ (karena $-9 - (-4) = -5$).\nJadi, $x + y = -9 + (-4) = -13$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'A botanical garden is perfectly rectangular with dimensions $108\\text{ m}$ by $144\\text{ m}$. Trees are to be planted at exactly equal distances along the entire border of the garden, including ensuring there is one tree at each of the four corners. What is the minimum number of trees required to do this?\nA. 12\nB. 14\nC. 16\nD. 28',
          answer: 'B. 14',
          principle:
            'To plant equally spaced trees along a rectangle\'s perimeter including corners using the fewest trees, choose the maximum possible spacing, which is the GCF of the side lengths.',
          solution:
            'The spacing between consecutive trees must divide both $108$ and $144$. To minimize the number of trees, maximize the interval using the GCF:\n$$\\text{GCF}(108, 144) = 36\\text{ m}.$$\nThe perimeter of the garden is $2 \\times (108 + 144) = 2 \\times 252 = 504\\text{ m}$.\nThe minimum number of trees needed around the closed perimeter is:\n$$\\frac{504}{36} = 14.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Banyaknya bilangan prima $p$ yang dapat membuat bentuk $p^2 + 11$ memiliki tepat $6$ faktor pembagi positif adalah...\nA. 0\nB. 1\nC. 2\nD. Tak terhingga',
          answer: 'B. 1',
          principle:
            'Uji nilai prima kecil $p = 2, 3$ secara langsung dan gunakan kongruensi modulo $3$ dan $4$ untuk $p \\ge 5$ guna memeriksa jumlah faktor pembagi positif.',
          solution:
            'Uji $p = 2$: $2^2 + 11 = 15 = 3 \\times 5$, memiliki $(1+1)(1+1) = 4$ faktor (tidak memenuhi).\nUji $p = 3$: $3^2 + 11 = 20 = 2^2 \\times 5$, memiliki $(2+1)(1+1) = 6$ faktor yaitu $1, 2, 4, 5, 10, 20$ (memenuhi).\nJika $p \\ge 5$, maka $p$ tidak habis dibagi $3$ dan ganjil, sehingga $p^2 \\equiv 1 \\pmod{3}$ (akibatnya $p^2 + 11$ kelipatan $3$) serta $p^2 \\equiv 1 \\pmod{8}$ (akibatnya $p^2 + 11$ kelipatan $4$).\nJadi $p^2 + 11$ selalu kelipatan $12$ dan bernilai $\\ge 5^2 + 11 = 36$. Setiap kelipatan $12$ yang lebih dari $12$ sedikitnya memiliki faktor $1, 2, 3, 4, 6, 12$, dan dirinya sendiri ($\\ge 7$ faktor).\nDengan demikian, hanya ada $1$ bilangan prima yang memenuhi ($p = 3$).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'The improper fraction $\\frac{43}{30}$ can be expressed in the form $1 + \\frac{1}{a + \\frac{1}{b + \\frac{1}{c}}}$ where $a$, $b$, and $c$ are positive integers. What is the product $a \\times b \\times c$?\nA. 12\nB. 18\nC. 24\nD. 36',
          answer: 'C. 24',
          principle:
            'Expand a rational number into a simple continued fraction by repeatedly separating the integer part and taking the reciprocal of the remaining proper fraction.',
          solution:
            'Rewrite $\\frac{43}{30}$ as a mixed number and take reciprocals step by step:\n$$\\frac{43}{30} = 1 + \\frac{13}{30} = 1 + \\frac{1}{\\frac{30}{13}}.$$\nConvert $\\frac{30}{13} = 2 + \\frac{4}{13}$, so $a = 2$.\nTake the reciprocal of $\\frac{4}{13}$:\n$$\\frac{13}{4} = 3 + \\frac{1}{4},$$\nso $b = 3$ and $c = 4$.\nThe product is $a \\times b \\times c = 2 \\times 3 \\times 4 = 24$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Diketahui $A$ adalah bilangan terbesar $3$ digit dalam sistem basis $4$, dan $B$ adalah bilangan terbesar $2$ digit dalam sistem basis $6$. Jika $A$ dan $B$ dijumlahkan dan hasilnya ditulis dalam basis desimal (basis $10$), hasilnya adalah...\nA. 97\nB. 98\nC. 99\nD. 100',
          answer: 'B. 98',
          principle:
            'Bilangan terbesar $k$ digit pada basis $b$ tersusun atas seluruh digit maksimum $(b - 1)$ dan bernilai $b^k - 1$ dalam basis $10$.',
          solution:
            'Bilangan terbesar $3$ digit dalam basis $4$ adalah $333_4 = 4^3 - 1 = 64 - 1 = 63$.\nBilangan terbesar $2$ digit dalam basis $6$ adalah $55_6 = 6^2 - 1 = 36 - 1 = 35$.\nJumlah keduanya dalam basis desimal adalah:\n$$63 + 35 = 98.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'A thick encyclopedia has its pages numbered consecutively from $1$ to $N$. The total number of digits printed by the publisher to number all these pages is exactly $2{,}025$. What is the total number of pages $N$ in the book?\nA. 701\nB. 711\nC. 721\nD. 731',
          answer: 'B. 711',
          principle:
            'Count printed digits by grouping page numbers according to their digit length ($1$-digit, $2$-digit, $3$-digit pages).',
          solution:
            '- Pages $1$ to $9$ ($9$ pages) use $9 \\times 1 = 9$ digits.\n- Pages $10$ to $99$ ($90$ pages) use $90 \\times 2 = 180$ digits.\nTotal digits used up to page $99$ is $9 + 180 = 189$ digits.\nThe remaining digits for $3$-digit pages is $2025 - 189 = 1836$ digits, which accounts for $\\frac{1836}{3} = 612$ pages.\nThus, the total number of pages is $N = 99 + 612 = 711$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Tentukan bilangan asli $y$ yang memenuhi persamaan deret: $2y + 3y + 4y + \\dots + 20y = 418$.\nA. 1\nB. 2\nC. 3\nD. 4',
          answer: 'B. 2',
          principle:
            'Faktorkan variabel yang sama dari deret aritmetika, hitung jumlah deret koefisiennya, lalu selesaikan persamaan linear.',
          solution:
            'Keluarkan $y$ sebagai faktor persekutuan:\n$$y(2 + 3 + 4 + \\dots + 20) = 418.$$\nBanyak suku dari $2$ sampai $20$ adalah $20 - 2 + 1 = 19$ suku, sehingga jumlahnya:\n$$\\frac{19}{2}(2 + 20) = \\frac{19}{2} \\times 22 = 209.$$\nDiperoleh $209y = 418$, sehingga $y = 2$.',
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
            'The Greatest Common Factor (GCF) of two numbers is $18$, and their product is exactly $4860$. What is the Least Common Multiple (LCM) of these two numbers?',
          answer: '270',
          answerNumeric: [{ name: 'lcm', value: 270 }],
          principle:
            'For any two positive integers $a$ and $b$, $a \\times b = \\text{GCF}(a, b) \\times \\text{LCM}(a, b)$.',
          solution:
            'Using the identity $\\text{GCF} \\times \\text{LCM} = \\text{product}$:\n$$18 \\times \\text{LCM} = 4860 \\implies \\text{LCM} = \\frac{4860}{18} = 270.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Tentukan bilangan prima $p$ terkecil sedemikian rupa sehingga bilangan $p + 10$ dan bilangan $p + 14$ juga merupakan bilangan prima!',
          answer: '3',
          answerNumeric: [{ name: 'p', value: 3 }],
          principle:
            'Uji bilangan prima secara berurutan dari yang terkecil hingga seluruh syarat keprimaan terpenuhi.',
          solution:
            'Uji dari bilangan prima terkecil:\n- Jika $p = 2$, maka $p + 10 = 12$ (bukan prima).\n- Jika $p = 3$, maka $p + 10 = 13$ (prima) dan $p + 14 = 17$ (prima).\nJadi, bilangan prima $p$ terkecil adalah $3$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Calculate the exact value of the expression: $\\frac{2026 \\times 2025 - 1}{2024 \\times 2026 + 2025}$.',
          answer: '1',
          answerNumeric: [{ name: 'value', value: 1 }],
          principle:
            'Substitute a variable for a central integer and apply $(x - 1)(x + 1) = x^2 - 1$ to simplify large numerical fractions algebraically.',
          solution:
            'Let $x = 2025$. Then:\n- Numerator: $(x + 1)x - 1 = x^2 + x - 1$.\n- Denominator: $(x - 1)(x + 1) + x = x^2 - 1 + x = x^2 + x - 1$.\nSince both numerator and denominator are equal and non-zero, the value of the expression is $1$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Jika persamaan $121_x = 100_y$ bernilai benar untuk bilangan asli $x$ dan $y$ dengan syarat $x < y$, berapakah nilai minimum yang mungkin untuk $x + y$?',
          answer: '7',
          answerNumeric: [{ name: 'minimum', value: 7 }],
          principle:
            'Nyatakan bilangan dalam basis $10$ dan perhatikan syarat nilai minimum basis harus lebih besar daripada digit terbesar yang digunakan.',
          solution:
            'Ubah kedua ruas persamaan ke basis $10$:\n$$x^2 + 2x + 1 = y^2 \\implies (x + 1)^2 = y^2.$$\nKarena $x$ dan $y$ adalah bilangan asli, maka $y = x + 1$ (memenuhi $x < y$).\nKarena penulisan $121_x$ memuat digit $2$, maka basis $x$ minimal bernilai $3$ (dan untuk $y = x + 1 \\ge 4$, penulisan $100_y$ valid karena hanya memuat digit $0$ dan $1$).\nUntuk nilai terkecil $x = 3$ dan $y = 4$, berlaku $121_3 = 9 + 6 + 1 = 16 = 100_4$, sehingga nilai minimum $x + y = 3 + 4 = 7$.\n(Catatan: kunci pada dokumen sumber tertulis $17$ dari $x=8, y=9$, namun $x=3, y=4$ sudah memenuhi syarat basis dan menghasilkan nilai minimum $7$.)',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'In the sequence $a_1, a_2, a_3, \\dots$, we are given $a_1 = 3$, $a_2 = 7$, and $a_n = a_{n-1} + a_{n-2}$ for all $n \\ge 3$. What is the remainder when $a_{2026}$ is divided by $2$?',
          answer: '1',
          answerNumeric: [{ name: 'remainder', value: 1 }],
          principle:
            'Track remainders modulo $2$ (parity) directly using the recurrence relation to uncover a short repeating cycle.',
          solution:
            'We only need the remainders modulo $2$:\n$a_1 \\equiv 1$, $a_2 \\equiv 1$, $a_3 \\equiv 1 + 1 \\equiv 0$, $a_4 \\equiv 0 + 1 \\equiv 1$, $a_5 \\equiv 1 + 0 \\equiv 1$, $a_6 \\equiv 1 + 1 \\equiv 0 \\pmod{2}$.\nThe parity sequence repeats in a $3$-cycle: $1, 1, 0, 1, 1, 0, \\dots$\nSince $2026 = 3 \\times 675 + 1$, $2026 \\equiv 1 \\pmod{3}$, so $a_{2026}$ corresponds to the $1\\text{st}$ term of the cycle, giving remainder $1$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'Dari lima keping angka $1, 2, 3, 4, 5$, akan disusun bilangan-bilangan $5$-digit tanpa ada angka yang diulang. Berapakah selisih terbesar yang mungkin antara dua bilangan berbeda yang dapat disusun dari angka-angka tersebut?',
          answer: '41976',
          answerNumeric: [{ name: 'selisih', value: 41976 }],
          principle:
            'Selisih terbesar diperoleh dari pengurangan bilangan terbesar (digit diurutkan menurun) dengan bilangan terkecil (digit diurutkan menaik).',
          solution:
            'Bilangan $5$-digit terbesar yang dapat disusun tanpa pengulangan adalah $54321$, sedangkan yang terkecil adalah $12345$.\nSelisih terbesarnya adalah:\n$$54321 - 12345 = 41976.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'What is the least number of identical square tiles needed to completely tile a rectangular floor measuring $420\\text{ cm}$ by $546\\text{ cm}$ without cutting any tiles?',
          answer: '130',
          answerNumeric: [{ name: 'tiles', value: 130 }],
          principle:
            'To minimize the number of identical square tiles covering a rectangle with no cuts, the tile side length must equal the GCF of the rectangle\'s dimensions.',
          solution:
            'The side length of the largest possible square tile is $\\text{GCF}(420, 546) = 42\\text{ cm}$.\nThe number of tiles along the width is $\\frac{420}{42} = 10$, and along the length is $\\frac{546}{42} = 13$.\nTotal tiles required $= 10 \\times 13 = 130$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Diketahui $N$ adalah hasil kali dari $10$ bilangan prima pertama yang ada secara berurutan. Berapakah angka satuan (digit paling kanan) dari nilai $N$ tersebut?',
          answer: '0',
          answerNumeric: [{ name: 'angkaSatuan', value: 0 }],
          principle:
            'Setiap hasil kali bilangan bulat yang memuat faktor $2$ dan $5$ merupakan kelipatan $10$ sehingga berakhiran digit $0$.',
          solution:
            'Di antara $10$ bilangan prima pertama ($2, 3, 5, 7, 11, 13, 17, 19, 23, 29$), terdapat bilangan prima $2$ dan $5$.\nPerkalian $2 \\times 5 = 10$ membuat $N$ merupakan kelipatan $10$, sehingga angka satuannya pasti $0$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '34',
          marks: 1,
          prompt:
            'A positive rational number $x$ satisfies the equation $x + \\frac{1}{x} = \\frac{34}{15}$. If it is known that $x < 1$, find the fraction $x$ in its simplest form.',
          answer: '$\\frac{3}{5}$',
          principle:
            'Match a sum of reciprocals $\\frac{a}{b} + \\frac{b}{a} = \\frac{a^2 + b^2}{ab}$ or clear denominators to solve the quadratic equation.',
          solution:
            'Notice that $\\frac{34}{15}$ can be rewritten as:\n$$\\frac{9 + 25}{15} = \\frac{9}{15} + \\frac{25}{15} = \\frac{3}{5} + \\frac{5}{3}.$$\nThis matches $x + \\frac{1}{x}$. Since $x < 1$, we obtain $x = \\frac{3}{5}$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'Berapakah banyak angka "0" secara berurutan yang mengakhiri bilangan $200!$ ($200$ faktorial) jika bilangan tersebut dijabarkan penuh ke dalam sistem bilangan desimal?',
          answer: '49',
          answerNumeric: [{ name: 'jumlahNol', value: 49 }],
          principle:
            'Banyaknya angka nol di akhir $n!$ ditentukan oleh pangkat faktor prima $5$ pada $n!$ menurut Teorema Legendre: $\\sum_{k \\ge 1} \\left\\lfloor \\frac{n}{5^k} \\right\\rfloor$.',
          solution:
            'Gunakan Teorema Legendre untuk mencari banyak faktor $5$ dalam $200!$:\n$$\\left\\lfloor \\frac{200}{5} \\right\\rfloor + \\left\\lfloor \\frac{200}{25} \\right\\rfloor + \\left\\lfloor \\frac{200}{125} \\right\\rfloor = 40 + 8 + 1 = 49.$$\nKarena faktor $2$ lebih banyak daripada faktor $5$, terdapat $49$ pasangan $2 \\times 5$, sehingga $200!$ berakhir dengan $49$ angka nol.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '36',
          marks: 1,
          prompt:
            'The sum of the page numbers of a specific chapter in a book is exactly $388$. If the chapter starts on an odd-numbered page, ends on an even-numbered page, and contains exactly $8$ pages, on what page number does the chapter start?',
          answer: '45',
          answerNumeric: [{ name: 'startPage', value: 45 }],
          principle:
            'Represent consecutive page numbers starting at $x$ as $x, x + 1, \\dots, x + (k - 1)$ and equate their sum to the given total.',
          solution:
            'Let the first page (which is odd) be $x$. The $8$ consecutive pages are $x, x+1, \\dots, x+7$.\nTheir sum is:\n$$8x + (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7) = 8x + 28 = 388.$$\nSolving for $x$ gives $8x = 360$, so $x = 45$. (Indeed, page $45$ is odd and the ending page $52$ is even.)',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '37',
          marks: 1,
          prompt:
            'Hitunglah hasil dari operasi selisih kuadrat berantai berikut: $1000^2 - 999^2 + 998^2 - 997^2 + \\dots + 2^2 - 1^2$.',
          answer: '500500',
          answerNumeric: [{ name: 'hasil', value: 500500 }],
          principle:
            'Faktorkan setiap pasang selisih kuadrat $a^2 - (a - 1)^2 = 2a - 1 = a + (a - 1)$ untuk mereduksi deret menjadi penjumlahan bilangan berurutan.',
          solution:
            'Terapkan pemfaktoran selisih kuadrat pada setiap pasangan:\n$$(1000^2 - 999^2) + (998^2 - 997^2) + \\dots + (2^2 - 1^2)$$\n$$= (1000 - 999)(1000 + 999) + (998 - 997)(998 + 997) + \\dots + (2 - 1)(2 + 1)$$\n$$= 1000 + 999 + 998 + 997 + \\dots + 2 + 1.$$\nJumlah $1000$ bilangan asli pertama adalah:\n$$\\frac{1000 \\times 1001}{2} = 500500.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '38',
          marks: 1,
          prompt:
            'A student computed the GCF and LCM of two positive integers $a$ and $b$. He found $\\text{GCF} = 12$ and $\\text{LCM} = 360$. He also verified that $a + b = 132$. What is the absolute difference between $a$ and $b$?',
          answer: '12',
          answerNumeric: [{ name: 'difference', value: 12 }],
          principle:
            'Write $a = dx$ and $b = dy$ with $d = \\text{GCF}(a, b)$ and $\\gcd(x, y) = 1$, then use both $x + y$ and $xy$ to determine $x$ and $y$.',
          solution:
            'Let $a = 12x$ and $b = 12y$, where $x$ and $y$ are coprime positive integers.\nFrom $a + b = 132$, we get $12(x + y) = 132 \\implies x + y = 11$.\nFrom $\\text{LCM} = 12xy = 360$, we get $xy = 30$.\nThe two integers whose sum is $11$ and product is $30$ are $5$ and $6$ (coprime).\nThus the original numbers are $12(5) = 60$ and $12(6) = 72$, and their absolute difference is $|60 - 72| = 12$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '39',
          marks: 1,
          prompt:
            'Diketahui $A$ adalah suatu bilangan genap dan $B$ adalah satu-satunya bilangan prima genap. Jika kelipatan persekutuan terkecil (KPK) dari $A$ dan $B$ adalah $14$, berapakah nilai mutlak dari $A$?',
          answer: '14',
          answerNumeric: [{ name: 'nilaiMutlakA', value: 14 }],
          principle:
            'Satu-satunya bilangan prima genap adalah $2$; gunakan faktor pembagi dari nilai KPK untuk menentukan bilangan yang memenuhi syarat paritas.',
          solution:
            'Satu-satunya bilangan prima genap adalah $2$, sehingga $B = 2$.\nDiketahui $\\text{KPK}(A, 2) = 14$, sehingga $|A|$ harus merupakan pembagi dari $14$ ($1, 2, 7,$ atau $14$) dan kelipatan $7$.\nKarena $A$ adalah bilangan genap, maka $|A|$ tidak mungkin $7$, sehingga $|A| = 14$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '40',
          marks: 1,
          prompt:
            'Find the exact positive value of $x$ if the following holds true: $\\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12} + \\dots + \\frac{1}{x(x + 1)} = \\frac{49}{50}$.',
          answer: '49',
          answerNumeric: [{ name: 'x', value: 49 }],
          principle:
            'Apply the telescoping identity $\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}$ to collapse the sum.',
          solution:
            'Each term has the form $\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}$:\n$$\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{x} - \\frac{1}{x + 1}\\right) = 1 - \\frac{1}{x + 1}.$$\nSetting this equal to $\\frac{49}{50}$ gives:\n$$1 - \\frac{1}{x + 1} = \\frac{49}{50} \\implies \\frac{1}{x + 1} = \\frac{1}{50} \\implies x + 1 = 50 \\implies x = 49.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
