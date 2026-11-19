/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SMP Kelas 7–8 – Intermediate 2
 * Sumber: Duta e-dukasi (BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7–8 – INTERMEDIATE 2.pdf).
 * Bahasa dipertahankan sesuai naskah sumber untuk tiap butir soal (Keputusan D5).
 */
export default {
  id: 'olim-smp-bilangan-int2',
  slug: 'bilangan-smp-intermediate-2',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  topic: 'Bilangan Olimpiade SMP Kelas 7–8 (Intermediate 2)',
  relatedChapterIds: ['smp7-bab1-bilangan-bulat', 'smp8-bab1-bilangan-berpangkat'],
  lang: 'id',
  title: 'Bilangan Olimpiade Matematika SMP Kelas 7–8 – Intermediate 2',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 20 soal Pilihan Ganda (Bagian A) dan 10 soal Isian Singkat (Bagian B) dengan teliti. Pertahankan bahasa masing-masing soal sesuai naskah asli.',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 7\u20138 \u2013 INTERMEDIATE 2.pdf',
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
            'Tentukan nilai dari $x$ jika $x = \\sqrt{42 - \\sqrt{42 - \\sqrt{42 - \\dots}}}$ dengan $x > 0$.\n\nA. $6$\nB. $7$\nC. $42$\nD. $49$',
          answer: 'A. $6$',
          principle: 'Substitusi diri pada akar bersarang tak hingga (nested radical) untuk membentuk persamaan kuadrat.',
          solution:
            'Karena bentuk akar bersarang berlangsung tak hingga, substitusikan kembali $x$ ke dalam akar:\n$$x = \\sqrt{42 - x}$$\nKuadratkan kedua ruas:\n$$x^2 = 42 - x \\implies x^2 + x - 42 = 0$$\nFaktorkan persamaan kuadrat:\n$$(x + 7)(x - 6) = 0$$\nKarena disyaratkan $x > 0$, maka nilai yang memenuhi adalah $x = 6$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'How many trailing consecutive zero digits are at the end of the number $50!$ ($50$ factorial)?\n\nA. $10$\nB. $12$\nC. $15$\nD. $20$',
          answer: 'B. $12$',
          principle: "Legendre's formula for the highest power of prime $5$ dividing $n!$ (since factors of $2$ are more abundant than factors of $5$).",
          solution:
            "The number of trailing zeros equals the highest power of $5$ dividing $50!$. Using Legendre's formula:\n$$\\left\\lfloor \\frac{50}{5} \\right\\rfloor + \\left\\lfloor \\frac{50}{25} \\right\\rfloor = 10 + 2 = 12$$\nThus, there are $12$ trailing zero digits.",
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Berapakah sisa pembagian bilangan $(3^{2026} + 4^{2026})$ oleh $5$?\n\nA. $0$\nB. $1$\nC. $2$\nD. $4$',
          answer: 'A. $0$',
          principle: 'Aritmetika modular dan pola periodik sisa perpangkatan modulo $5$.',
          solution:
            'Perhatikan pola sisa perpangkatan basis $3$ modulo $5$:\n$$3^1 \\equiv 3, \\quad 3^2 \\equiv 4, \\quad 3^3 \\equiv 2, \\quad 3^4 \\equiv 1 \\pmod{5}$$\nSiklus berulang setiap $4$ pangkat. Karena $2026 = 4 \\times 506 + 2$ (bersisa $2$ saat dibagi $4$), maka:\n$$3^{2026} \\equiv 3^2 \\equiv 4 \\pmod{5}$$\nUntuk basis $4$, $4 \\equiv -1 \\pmod{5}$, sehingga:\n$$4^{2026} \\equiv (-1)^{2026} = 1 \\pmod{5}$$\nJumlahkan kedua sisa:\n$$3^{2026} + 4^{2026} \\equiv 4 + 1 = 5 \\equiv 0 \\pmod{5}$$\nJadi, sisa pembagiannya adalah $0$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'In a certain base $b$, the addition $23_b + 45_b = 101_b$ is mathematically valid. What is the value of $b$?\n\nA. $6$\nB. $7$\nC. $8$\nD. $9$',
          answer: 'B. $7$',
          principle: 'Positional value expansion of base-$b$ numerals into base-$10$ polynomial equations with valid digits $0 \\le d < b$.',
          solution:
            'Every digit in the numerals forces $b > 5$. Convert the base-$b$ equation into base $10$:\n$$(2b + 3) + (4b + 5) = b^2 + 0 \\cdot b + 1$$\nSimplify and solve for $b > 5$:\n$$6b + 8 = b^2 + 1 \\implies b^2 - 6b - 7 = 0 \\implies (b - 7)(b + 1) = 0$$\nSince $b$ is a positive integer base, $b = 7$ (validating $23_7 + 45_7 = 17 + 33 = 50 = 101_7$).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Tiga bus selalu berangkat dari terminal secara periodik berturut-turut setiap $45$ menit, $60$ menit, dan $75$ menit. Jika ketiga bus tersebut berangkat bersama-sama pada pukul $06.00$, pada pukul berapakah ketiganya akan berangkat bersama-sama lagi untuk pertama kalinya?\n\nA. 18.00\nB. 19.30\nC. 21.00\nD. 22.15',
          answer: 'C. 21.00',
          principle: 'Penentuan jadwal pertemuan bersama berikutnya menggunakan Kelipatan Persekutuan Terkecil (KPK).',
          solution:
            'Tentukan faktorisasi prima dari masing-masing periode keberangkatan:\n$$45 = 3^2 \\times 5, \\qquad 60 = 2^2 \\times 3 \\times 5, \\qquad 75 = 3 \\times 5^2$$\nHitung KPK-nya:\n$$\\text{KPK}(45, 60, 75) = 2^2 \\times 3^2 \\times 5^2 = 4 \\times 9 \\times 25 = 900 \\text{ menit}$$\nKonversi ke jam: $\\frac{900}{60} = 15$ jam.\nKetiga bus akan berangkat bersama lagi pada pukul $06.00 + 15.00 = 21.00$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Evaluate the exact value of:\n$$\\frac{1}{\\sqrt{2}+1} + \\frac{1}{\\sqrt{3}+\\sqrt{2}} + \\dots + \\frac{1}{\\sqrt{100}+\\sqrt{99}}$$\n\nA. $9$\nB. $10$\nC. $11$\nD. $10\\sqrt{2}$',
          answer: 'A. $9$',
          principle: 'Rationalizing denominators with conjugates to create a telescoping sum.',
          solution:
            'Rationalize each term by multiplying numerator and denominator by its conjugate $\\sqrt{n} - \\sqrt{n-1}$:\n$$\\frac{1}{\\sqrt{n} + \\sqrt{n-1}} = \\frac{\\sqrt{n} - \\sqrt{n-1}}{n - (n-1)} = \\sqrt{n} - \\sqrt{n-1}$$\nRewrite the entire sum:\n$$(\\sqrt{2} - 1) + (\\sqrt{3} - \\sqrt{2}) + \\dots + (\\sqrt{100} - \\sqrt{99})$$\nAll intermediate terms cancel out, leaving:\n$$\\sqrt{100} - 1 = 10 - 1 = 9$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Bilangan desimal berulang $0{,}343434\\dots$ dapat dinyatakan sebagai pecahan $\\frac{a}{b}$ dalam bentuk paling sederhana ($\\text{FPB}(a,b) = 1$). Nilai dari $a + b$ adalah...\n\nA. $133$\nB. $123$\nC. $143$\nD. $153$',
          answer: 'A. $133$',
          principle: 'Konversi bilangan desimal berulang menjadi pecahan biasa dengan eliminasi aljabar.',
          solution:
            'Misalkan $x = 0{,}343434\\dots$\nKalikan kedua ruas dengan $100$:\n$$100x = 34{,}343434\\dots$$\nKurangkan persamaan awal dari persamaan kedua:\n$$100x - x = 34 \\implies 99x = 34 \\implies x = \\frac{34}{99}$$\nKarena $\\text{FPB}(34, 99) = 1$, maka $a = 34$ dan $b = 99$.\nNilai dari $a + b = 34 + 99 = 133$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'How many positive odd integer divisors does the number $N = 2^4 \\times 3^2 \\times 5^3$ have?\n\nA. $12$\nB. $24$\nC. $30$\nD. $60$',
          answer: 'A. $12$',
          principle: 'Divisor counting formula applied only to odd prime factors.',
          solution:
            'Odd divisors cannot include any factor of $2$, so we ignore $2^4$ and consider only the odd prime part $3^2 \\times 5^3$.\nUsing the number-of-divisors formula:\n$$(2 + 1)(3 + 1) = 3 \\times 4 = 12$$\nThus, $N$ has $12$ positive odd integer divisors.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Angka satuan dari hasil operasi $2^{2026} \\times 3^{2026}$ adalah...\n\nA. $2$\nB. $4$\nC. $6$\nD. $8$',
          answer: 'C. $6$',
          principle: 'Sifat eksponen $a^n \\times b^n = (a \\times b)^n$ dan invarian angka satuan bilangan berakhiran $6$.',
          solution:
            'Gabungkan kedua bilangan berpangkat karena memiliki eksponen yang sama:\n$$2^{2026} \\times 3^{2026} = (2 \\times 3)^{2026} = 6^{2026}$$\nSetiap bilangan bulat yang berakhiran digit $6$, jika dipangkatkan dengan bilangan asli apa pun, angka satuannya selalu tetap $6$ (karena $6 \\times 6 = 36$).\nJadi, angka satuan dari $2^{2026} \\times 3^{2026}$ adalah $6$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Given that $x - y = 5$ and $xy = 14$. What is the value of $x^3 - y^3$?\n\nA. $125$\nB. $210$\nC. $275$\nD. $335$',
          answer: 'D. $335$',
          principle: 'Algebraic identities for difference of cubes $x^3 - y^3 = (x - y)(x^2 + xy + y^2)$ and $(x - y)^2$.',
          solution:
            'First find $x^2 + y^2$ using $(x - y)^2 = x^2 - 2xy + y^2$:\n$$5^2 = x^2 + y^2 - 2(14) \\implies 25 = x^2 + y^2 - 28 \\implies x^2 + y^2 = 53$$\nNow apply $x^3 - y^3 = (x - y)(x^2 + xy + y^2)$:\n$$x^3 - y^3 = 5 \\times (53 + 14) = 5 \\times 67 = 335$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'FPB dari dua buah bilangan asli $x$ dan $y$ adalah $14$, sedangkan KPK-nya adalah $420$. Jika kedua bilangan tersebut bukan merupakan kelipatan satu sama lain dan selisihnya sekecil mungkin, berapakah jumlah kedua bilangan tersebut?\n\nA. $154$\nB. $182$\nC. $238$\nD. $294$',
          answer: 'A. $154$',
          principle: 'Representasi dua bilangan melalui FPB-nya: $x = da$, $y = db$ dengan $\\text{FPB}(a, b) = 1$ dan $\\text{KPK}(x, y) = dab$.',
          solution:
            'Misalkan $x = 14a$ dan $y = 14b$ dengan $\\text{FPB}(a, b) = 1$. Maka:\n$$\\text{KPK}(x, y) = 14ab = 420 \\implies ab = 30$$\nPasangan faktor $(a, b)$ yang saling prima dengan $ab = 30$ adalah $(1, 30)$, $(2, 15)$, $(3, 10)$, dan $(5, 6)$.\nKarena $x$ dan $y$ bukan kelipatan satu sama lain, $(1, 30)$ tidak memenuhi. Selisih terkecil terjadi saat $|a - b|$ paling kecil, yaitu $(5, 6)$:\n$$x = 14 \\times 5 = 70, \\qquad y = 14 \\times 6 = 84$$\nJumlah keduanya adalah $70 + 84 = 154$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Find the smallest positive integer $n$ such that $12n$ is a perfect cube.\n\nA. $6$\nB. $12$\nC. $18$\nD. $36$',
          answer: 'C. $18$',
          principle: 'Prime factorization condition for perfect cubes: all prime exponents must be multiples of $3$.',
          solution:
            'Factorize $12$ into primes:\n$$12 = 2^2 \\times 3^1$$\nFor $12n$ to be a perfect cube, each prime exponent in its prime factorization must be a multiple of $3$. The minimal additional factors needed are $2^1$ and $3^2$ to yield $2^3 \\times 3^3$.\nTherefore:\n$$n = 2^1 \\times 3^2 = 2 \\times 9 = 18$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Berapakah jumlah dari seluruh bilangan prima yang berada di antara $40$ dan $50$?\n\nA. $131$\nB. $141$\nC. $170$\nD. $220$',
          answer: 'A. $131$',
          principle: 'Identifikasi bilangan prima dalam suatu interval dengan uji keterbagian prima kecil.',
          solution:
            'Periksa bilangan ganjil di antara $40$ dan $50$: $41, 43, 45, 47, 49$.\n- $45 = 5 \\times 9$ (bukan prima)\n- $49 = 7 \\times 7$ (bukan prima)\n- $41, 43,$ dan $47$ adalah bilangan prima.\nJumlah seluruhnya adalah:\n$$41 + 43 + 47 = 131$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'What is the remainder when the sum $1! + 2! + 3! + \\dots + 50!$ is divided by $12$?\n\nA. $3$\nB. $5$\nC. $9$\nD. $11$',
          answer: 'C. $9$',
          principle: 'Modular reduction of factorial sums when factorials from $k!$ onward become multiples of the modulus.',
          solution:
            'Observe that $4! = 24$ is divisible by $12$, so for every $n \\ge 4$, $n!$ is also a multiple of $12$ ($n! \\equiv 0 \\pmod{12}$).\nThus we only need to sum the first three terms:\n$$1! + 2! + 3! = 1 + 2 + 6 = 9$$\nSince $9 < 12$, the remainder is $9$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Terdapat beberapa bilangan prima positif dua angka (dua digit). Jika diketahui bahwa hasil kali kedua digit pembentuk bilangan prima tersebut adalah tepat $6$, berapakah banyak bilangan prima yang memenuhi syarat tersebut?\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$',
          answer: 'B. $2$',
          principle: 'Pencacahan kombinasi digit dengan syarat hasil kali digit tertentu dan uji keprimaan.',
          solution:
            'Pasangan digit positif yang hasil kalinya $6$ adalah $(1, 6)$ dan $(2, 3)$.\nBilangan dua digit yang dapat dibentuk adalah $16, 61, 23,$ dan $32$.\n- $16$ dan $32$ genap (habis dibagi $2$), sehingga bukan prima.\n- $23$ dan $61$ keduanya merupakan bilangan prima.\nJadi, terdapat tepat $2$ bilangan prima yang memenuhi.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'How many positive integers less than $100$ are relatively prime (coprime) to $100$?\n\nA. $25$\nB. $40$\nC. $50$\nD. $60$',
          answer: 'B. $40$',
          principle: "Euler's totient function $\\varphi(n) = n \\prod_{p \\mid n} \\left(1 - \\frac{1}{p}\\right)$.",
          solution:
            "This asks for Euler's totient function $\\varphi(100)$. Prime factorize $100 = 2^2 \\times 5^2$:\n$$\\varphi(100) = 100 \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{5}\\right) = 100 \\times \\frac{1}{2} \\times \\frac{4}{5} = 40$$",
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Diketahui $a = 2^3 \\times 3^x \\times 5^2$ dan $b = 2^y \\times 3^2 \\times 5^z$. Jika $\\text{FPB}(a,b) = 360$ dan $\\text{KPK}(a,b) = 10800$, maka nilai dari $x + y + z$ adalah...\n\nA. $6$\nB. $7$\nC. $8$\nD. $9$',
          answer: 'C. $8$',
          principle: 'Penentuan eksponen faktor prima dari FPB (pangkat minimum) dan KPK (pangkat maksimum).',
          solution:
            'Faktorisasi prima FPB dan KPK:\n$$\\text{FPB} = 360 = 2^3 \\times 3^2 \\times 5^1$$\n$$\\text{KPK} = 10800 = 2^4 \\times 3^3 \\times 5^2$$\nBandingkan eksponen setiap basis prima:\n- Untuk basis $2$: $\\min(3, y) = 3$ dan $\\max(3, y) = 4 \\implies y = 4$.\n- Untuk basis $3$: $\\min(x, 2) = 2$ dan $\\max(x, 2) = 3 \\implies x = 3$.\n- Untuk basis $5$: $\\min(2, z) = 1$ dan $\\max(2, z) = 2 \\implies z = 1$.\nMaka $x + y + z = 3 + 4 + 1 = 8$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Perform the subtraction in base $8$ arithmetic: $345_8 - 167_8$.\n\nA. $156_8$\nB. $166_8$\nC. $256_8$\nD. $176_8$',
          answer: 'A. $156_8$',
          principle: 'Column-by-column subtraction in base $8$ where borrowing adds $8$ to the next lower place value.',
          solution:
            'Subtract column by column in base $8$:\n- Units place: $5 - 7$ requires borrowing $1$ from the eights place ($4$ becomes $3$), giving $(8 + 5) - 7 = 13 - 7 = 6$.\n- Eights place: $3 - 6$ requires borrowing $1$ from the sixty-fours place ($3$ becomes $2$), giving $(8 + 3) - 6 = 11 - 6 = 5$.\n- Sixty-fours place: $2 - 1 = 1$.\nHence, $345_8 - 167_8 = 156_8$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Jika diketahui $A = 1 \\times 2 + 2 \\times 3 + 3 \\times 4 + \\dots + 20 \\times 21$, maka nilai $A$ adalah...\n\nA. $2870$\nB. $3080$\nC. $3210$\nD. $3450$',
          answer: 'B. $3080$',
          principle: 'Rumus jumlah deret perkalian dua bilangan berurutan: $\\sum_{k=1}^{n} k(k + 1) = \\frac{n(n + 1)(n + 2)}{3}$.',
          solution:
            'Gunakan rumus jumlah deret $\\sum_{k=1}^{n} k(k + 1) = \\frac{n(n + 1)(n + 2)}{3}$ dengan $n = 20$:\n$$A = \\frac{20 \\times 21 \\times 22}{3} = 20 \\times 7 \\times 22 = 3080$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'What is the largest prime factor of the number $2^8 - 1$?\n\nA. $13$\nB. $17$\nC. $31$\nD. $255$',
          answer: 'B. $17$',
          principle: 'Factoring $a^2 - b^2 = (a - b)(a + b)$ before finding prime factors.',
          solution:
            'Factor $2^8 - 1$ as a difference of squares:\n$$2^8 - 1 = (2^4 - 1)(2^4 + 1) = (16 - 1)(16 + 1) = 15 \\times 17$$\nSince $15 = 3 \\times 5$ and $17$ is prime, the complete prime factorization is $3 \\times 5 \\times 17$. The largest prime factor is $17$.',
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
          prompt: 'Hitunglah nilai Kelipatan Persekutuan Terkecil (KPK) dari $15$, $25$, dan $35$.',
          answer: '$525$',
          answerNumeric: [{ name: 'kpk', value: 525, unit: '' }],
          principle: 'Penentuan KPK dari hasil kali pangkat tertinggi seluruh faktor prima yang muncul.',
          solution:
            'Faktorisasi prima masing-masing bilangan:\n$$15 = 3 \\times 5, \\qquad 25 = 5^2, \\qquad 35 = 5 \\times 7$$\nKalikan seluruh faktor prima dengan pangkat tertinggi:\n$$\\text{KPK}(15, 25, 35) = 3 \\times 5^2 \\times 7 = 3 \\times 25 \\times 7 = 525$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt: 'Calculate the sum of all digits of the number obtained by evaluating $10^{15} - 2026$.',
          answer: '$126$',
          answerNumeric: [{ name: 'sumOfDigits', value: 126, unit: '' }],
          principle: 'Digit pattern analysis when subtracting a small integer from a large power of $10$.',
          solution:
            '$10^{15}$ consists of $1$ followed by $15$ zeros. Subtracting $2026$ gives:\n$$1\\,000\\,000\\,000\\,000\\,000 - 2026 = 999\\,999\\,999\\,997\\,974$$\nThere are $15$ digits in total: the first $11$ digits are all $9$s, followed by $7, 9, 7, 4$.\nSum of digits:\n$$(11 \\times 9) + 7 + 9 + 7 + 4 = 99 + 27 = 126$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt: 'Tentukan jumlah semua faktor positif genap dari bilangan $100$.',
          answer: '$186$',
          answerNumeric: [{ name: 'jumlahFaktorGenap', value: 186, unit: '' }],
          principle: 'Penjumlahan faktor positif yang memuat sedikitnya satu faktor prima $2$.',
          solution:
            'Faktorisasi prima dari $100$ adalah $2^2 \\times 5^2$.\nSeluruh faktor positif dari $100$ adalah $1, 2, 4, 5, 10, 20, 25, 50, 100$.\nFaktor yang bernilai genap adalah $2, 4, 10, 20, 50, 100$, sehingga jumlahnya:\n$$2 + 4 + 10 + 20 + 50 + 100 = 186$$\n(Atau menggunakan rumus jumlah faktor genap: $(2^1 + 2^2)(5^0 + 5^1 + 5^2) = 6 \\times 31 = 186$.)',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'A positive integer $N$ leaves a remainder of $5$ when divided by $7$, and a remainder of $2$ when divided by $6$. What is the smallest possible positive value of $N$?',
          answer: '$26$',
          answerNumeric: [{ name: 'N', value: 26, unit: '' }],
          principle: 'Solving a system of linear congruences by testing arithmetic progression candidates.',
          solution:
            'We have $N \\equiv 5 \\pmod{7}$ and $N \\equiv 2 \\pmod{6}$.\nFrom the first congruence, write $N = 7k + 5$ for non-negative integers $k$:\n- $k = 0 \\implies N = 5 \\equiv 5 \\pmod{6}$\n- $k = 1 \\implies N = 12 \\equiv 0 \\pmod{6}$\n- $k = 2 \\implies N = 19 \\equiv 1 \\pmod{6}$\n- $k = 3 \\implies N = 26 \\equiv 2 \\pmod{6}$\nThe smallest positive value is $N = 26$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt: 'Berapakah sisa pembagian $\\frac{10!}{2}$ jika dibagi oleh $11$?',
          answer: '$5$',
          answerNumeric: [{ name: 'sisa', value: 5, unit: '' }],
          principle: 'Teorema Wilson: untuk bilangan prima $p$, berlaku $(p - 1)! \\equiv -1 \\pmod{p}$.',
          solution:
            'Berdasarkan Teorema Wilson untuk bilangan prima $p = 11$:\n$$10! \\equiv -1 \\equiv 10 \\pmod{11}$$\nMisalkan $x = \\frac{10!}{2}$, sehingga $2x = 10! \\equiv 10 \\pmod{11}$.\nKarena $\\text{FPB}(2, 11) = 1$, kedua ruas dapat dibagi dengan $2$:\n$$x \\equiv 5 \\pmod{11}$$\nJadi, sisa pembagiannya adalah $5$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Find the greatest positive integer $k$ such that $2^k$ divides completely into $50!$ ($50$ factorial).',
          answer: '$47$',
          answerNumeric: [{ name: 'k', value: 47, unit: '' }],
          principle: "Legendre's formula for the exact exponent of a prime $p$ dividing $n!$.",
          solution:
            "Apply Legendre's formula for $p = 2$ in $50!$:\n$$k = \\left\\lfloor \\frac{50}{2} \\right\\rfloor + \\left\\lfloor \\frac{50}{4} \\right\\rfloor + \\left\\lfloor \\frac{50}{8} \\right\\rfloor + \\left\\lfloor \\frac{50}{16} \\right\\rfloor + \\left\\lfloor \\frac{50}{32} \\right\\rfloor$$\n$$k = 25 + 12 + 6 + 3 + 1 = 47$$",
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Jika $\\frac{a}{b} = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{7}$, dengan $\\text{FPB}(a, b) = 1$, tentukan nilai dari $a - b$.',
          answer: '$-1$',
          answerNumeric: [{ name: 'hasil', value: -1, unit: '' }],
          principle: 'Penjumlahan pecahan dengan menyamakan penyebut ke KPK lalu menyederhanakan hingga koprima.',
          solution:
            'Samakan penyebut pecahan menjadi $\\text{KPK}(2, 3, 7) = 42$:\n$$\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{7} = \\frac{21}{42} + \\frac{14}{42} + \\frac{6}{42} = \\frac{41}{42}$$\nKarena $\\text{FPB}(41, 42) = 1$, diperoleh $a = 41$ dan $b = 42$.\nMaka nilai $a - b = 41 - 42 = -1$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'What is the exact product of the greatest common divisor (GCD) and the least common multiple (LCM) of the numbers $14$, $21$, and $28$?',
          answer: '$588$',
          answerNumeric: [{ name: 'product', value: 588, unit: '' }],
          principle: 'Compute GCD and LCM of three integers directly via prime factorizations (note: $abc = \\gcd \\times \\operatorname{lcm}$ only holds in general for two integers).',
          solution:
            'Prime factorize the three numbers:\n$$14 = 2 \\times 7, \\qquad 21 = 3 \\times 7, \\qquad 28 = 2^2 \\times 7$$\nHence:\n$$\\gcd(14, 21, 28) = 7$$\n$$\\operatorname{lcm}(14, 21, 28) = 2^2 \\times 3 \\times 7 = 84$$\nThe exact product is:\n$$7 \\times 84 = 588$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Diketahui bilangan prima positif $p$ dan $q$ memenuhi persamaan $p^2 - 2q^2 = 1$. Tentukan nilai dari $p + q$.',
          answer: '$5$',
          answerNumeric: [{ name: 'hasil', value: 5, unit: '' }],
          principle: 'Analisis paritas (genap-ganjil) dan faktorisasi selisih kuadrat pada persamaan Diophantine bilangan prima.',
          solution:
            'Ubah persamaan menjadi:\n$$p^2 - 1 = 2q^2 \\implies (p - 1)(p + 1) = 2q^2$$\nJika $p = 2$, maka $2q^2 = 3$ yang tidak memiliki solusi bulat; maka $p$ harus merupakan bilangan prima ganjil. Karena $p$ ganjil, $(p - 1)$ dan $(p + 1)$ merupakan dua bilangan genap berurutan, sehingga hasil kalinya pasti habis dibagi $8$.\nAkibatnya, $2q^2$ habis dibagi $8$, sehingga $q^2$ genap dan $q$ harus genap.\nSatu-satunya bilangan prima genap adalah $q = 2$. Substitusikan ke persamaan awal:\n$$p^2 - 2(2)^2 = 1 \\implies p^2 = 9 \\implies p = 3$$\nJadi, nilai $p + q = 3 + 2 = 5$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'The repeating decimal $0.142857142857\\dots$ ($0.\\overline{142857}$) is multiplied by $3$. Express the resulting number as a simple fraction in its lowest terms.',
          answer: '$\\frac{3}{7}$',
          principle: 'Exact fractional representation of the repeating decimal $0.\\overline{142857} = \\frac{1}{7}$.',
          solution:
            'Notice that $0.142857142857\\dots = \\frac{142857}{999999} = \\frac{1}{7}$.\nMultiplying by $3$ gives:\n$$3 \\times \\frac{1}{7} = \\frac{3}{7}$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
