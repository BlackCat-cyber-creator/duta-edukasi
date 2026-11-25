/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SMP Kelas 7–8 – Elite Olympiad
 * Sumber: BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 78  ELITE OLYMPIAD.pdf (Duta e-dukasi).
 * Bahasa tiap butir soal dipertahankan sesuai dokumen sumber (Keputusan D5).
 */
export default {
  id: 'olim-smp-bilangan-elite',
  slug: 'bilangan-smp-elite',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  topic: 'Bilangan Olimpiade SMP Kelas 7–8 (Elite Olympiad)',
  relatedChapterIds: ['smp7-bab1-bilangan-bulat', 'smp8-bab1-bilangan-berpangkat'],
  lang: 'id',
  langDisplay: 'ID / EN',
  competition: 'Seri Pembinaan OSN',
  title: 'Bilangan Olimpiade Matematika SMP Kelas 7–8 – Elite Olympiad',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 20 soal Pilihan Ganda (Bagian A) dan 10 soal Isian Singkat (Bagian B). Setiap soal bernilai 1 poin (total 30 poin).',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 78  ELITE OLYMPIAD.pdf',
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
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (20 soal, masing-masing 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Sisa pembagian bilangan $2025!$ ($2025$ faktorial) oleh $2027$ (diketahui $2027$ adalah bilangan prima) adalah...\nA. $1$\nB. $2025$\nC. $2026$\nD. $0$',
          answer: 'A. $1$',
          principle: 'Teorema Wilson',
          solution:
            'Karena $2027$ adalah bilangan prima, menurut Teorema Wilson:\n$$(2027 - 1)! \\equiv -1 \\pmod{2027} \\implies 2026! \\equiv -1 \\pmod{2027}$$\nPecah $2026! = 2026 \\times 2025!$. Karena $2026 \\equiv -1 \\pmod{2027}$, maka:\n$$-1 \\times 2025! \\equiv -1 \\pmod{2027} \\implies 2025! \\equiv 1 \\pmod{2027}$$\nJadi, sisa pembagian $2025!$ oleh $2027$ adalah $1$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'How many perfect square divisors does the positive integer $N = 2^{10} \\times 3^{15} \\times 5^{20}$ have?\nA. $480$\nB. $528$\nC. $1056$\nD. $3000$',
          answer: 'B. $528$',
          principle: 'Counting Divisors via Prime Factorization',
          solution:
            'A divisor of $N = 2^{10} \\times 3^{15} \\times 5^{20}$ is a perfect square if and only if all exponents in its prime factorization are even:\n- For base $2$: $0, 2, 4, 6, 8, 10$ ($6$ choices)\n- For base $3$: $0, 2, 4, \\dots, 14$ ($8$ choices)\n- For base $5$: $0, 2, 4, \\dots, 20$ ($11$ choices)\n\nTotal perfect square divisors $= 6 \\times 8 \\times 11 = 528$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Banyaknya pasangan bilangan bulat positif $(x, y)$ yang memenuhi persamaan Diophantine $x^2 - y^2 = 2026$ adalah...\nA. $0$\nB. $2$\nC. $4$\nD. $8$',
          answer: 'A. $0$',
          principle: 'Faktorisasi Selisih Kuadrat dan Paritas Modulo 4',
          solution:
            'Faktorkan ruas kiri: $x^2 - y^2 = (x - y)(x + y) = 2026$.\nPerhatikan bahwa $(x - y)$ dan $(x + y)$ selalu memiliki paritas yang sama karena $(x + y) + (x - y) = 2x$ (genap).\n- Jika keduanya ganjil, hasil kalinya ganjil (tidak mungkin $2026$).\n- Jika keduanya genap, hasil kalinya harus habis dibagi $4$.\n\nNamun $2026 = 2 \\times 1013 \\equiv 2 \\pmod{4}$, sehingga tidak ada pasangan bilangan bulat positif $(x, y)$ yang memenuhi ($0$ solusi).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'What is the remainder when the large exponent tower $2026^{2027^{2028}}$ is divided by $11$?\nA. $1$\nB. $2$\nC. $7$\nD. $9$',
          answer: 'B. $2$',
          principle: "Fermat's Little Theorem and Modular Exponentiation",
          solution:
            'Evaluate modulo $11$: $2026 = 11 \\times 184 + 2 \\equiv 2 \\pmod{11}$.\nBy Fermat’s Little Theorem, $2^{10} \\equiv 1 \\pmod{11}$, so we reduce the exponent $2027^{2028}$ modulo $10$:\n$$2027 \\equiv 7 \\pmod{10}, \\qquad 7^4 = 2401 \\equiv 1 \\pmod{10}$$\nSince $2028 = 4 \\times 507$, we have $7^{2028} \\equiv (7^4)^{507} \\equiv 1 \\pmod{10}$. Thus:\n$$2026^{2027^{2028}} \\equiv 2^1 = 2 \\pmod{11}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Tentukan angka puluhan (digit kedua dari kanan) dari hasil perhitungan $11^{2026}$.\nA. $1$\nB. $3$\nC. $6$\nD. $9$',
          answer: 'C. $6$',
          principle: 'Ekspansi Binomial Newton Modulo 100',
          solution:
            'Untuk memperoleh dua angka terakhir, evaluasi $11^{2026} = (10 + 1)^{2026}$ modulo $100$. Semua suku dengan faktor $10^k$ ($k \\ge 2$) habis dibagi $100$, sehingga hanya dua suku pertama yang tersisa:\n$$11^{2026} \\equiv \\binom{2026}{0} 1^{2026} + \\binom{2026}{1} 10 \\cdot 1^{2025} = 1 + 20260 = 20261 \\equiv 61 \\pmod{100}$$\nDua digit terakhirnya adalah $61$, sehingga angka puluhannya adalah $6$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Find the smallest positive integer $x$ that satisfies the linear congruence $17x \\equiv 1 \\pmod{101}$.\nA. $6$\nB. $12$\nC. $18$\nD. $24$',
          answer: 'A. $6$',
          principle: 'Modular Multiplicative Inverse',
          solution:
            'Apply the Extended Euclidean Algorithm to $101$ and $17$:\n$$101 = 17 \\times 5 + 16 \\implies 16 = 101 - 17 \\times 5$$\n$$17 = 16 \\times 1 + 1 \\implies 1 = 17 - 16$$\nSubstituting $16 = 101 - 17 \\times 5$ gives:\n$$1 = 17 - (101 - 17 \\times 5) = 17 \\times 6 - 101$$\nReducing modulo $101$ yields $17 \\times 6 \\equiv 1 \\pmod{101}$. Since $\\gcd(17, 101) = 1$, the inverse modulo $101$ is unique in $\\{1, 2, \\dots, 100\\}$, so the smallest positive integer solution is $x = 6$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Berapa banyak bilangan prima positif $p$ yang memenuhi syarat bahwa bilangan $(p^2 + 2)$ juga merupakan bilangan prima?\nA. $0$\nB. $1$\nC. $2$\nD. Tak hingga (Infinite)',
          answer: 'B. $1$',
          principle: 'Aritmetika Modulo 3 untuk Bilangan Prima',
          solution:
            'Uji nilai bilangan prima $p$:\n- Untuk $p = 2$: $p^2 + 2 = 4 + 2 = 6$ (bukan prima).\n- Untuk $p = 3$: $p^2 + 2 = 9 + 2 = 11$ (prima, memenuhi).\n- Untuk $p > 3$: karena $p$ prima tidak habis dibagi $3$, maka $p \\equiv 1$ atau $2 \\pmod{3}$, sehingga $p^2 \\equiv 1 \\pmod{3}$. Akibatnya, $p^2 + 2 \\equiv 1 + 2 \\equiv 0 \\pmod{3}$ dan $p^2 + 2 > 3$, sehingga selalu komposit.\n\nJadi, hanya terdapat $1$ bilangan prima yang memenuhi ($p = 3$).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'If $n$ is the smallest positive integer such that $n!$ is a multiple of $2026^2$, what is the exact value of $n$? (Note: $1013$ is a prime number).\nA. $1013$\nB. $2026$\nC. $4052$\nD. $20260$',
          answer: 'B. $2026$',
          principle: 'Prime Factors in Factorials',
          solution:
            'Factorize $2026^2 = (2 \\times 1013)^2 = 2^2 \\times 1013^2$. Since $1013$ is prime, $n!$ must contain at least two factors of $1013$ (and at least two factors of $2$, which is guaranteed once $n \\ge 4$).\nThe positive multiples of $1013$ are $1013, 2026, 3039, \\dots$. Thus, $n!$ obtains its second factor of $1013$ precisely at $n = 2026$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Sebuah bilangan asli $x$ jika dinyatakan dalam sistem basis $2$ (biner) adalah $1111111111_2$ (terdiri dari sepuluh angka $1$). Berapakah jumlah seluruh digit bilangan $x$ tersebut apabila dinyatakan dalam basis $10$ (desimal)?\nA. $6$\nB. $8$\nC. $10$\nD. $12$',
          answer: 'A. $6$',
          principle: 'Konversi Basis Biner ke Desimal',
          solution:
            'Setiap posisi digit biner bernilai pangkat $2$, sehingga bilangan biner dengan sepuluh angka $1$ bernilai jumlah deret geometri:\n$$x = 2^9 + 2^8 + \\cdots + 2^1 + 2^0 = \\frac{2^{10} - 1}{2 - 1} = 2^{10} - 1$$\n(Secara intuitif, jika ditambah $1_2$, bilangan $1111111111_2$ menjadi $10000000000_2 = 2^{10}$.)\nKarena $2^{10} = 1024$, maka $x = 1024 - 1 = 1023$. Jumlah seluruh digit $1023$ dalam basis $10$ adalah $1 + 0 + 2 + 3 = 6$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Let $S(n)$ denote the sum of the digits of a positive integer $n$ in base $10$. Find the exact value of $S(S(S(4444^{4444})))$.\nA. $2$\nB. $4$\nC. $7$\nD. $9$',
          answer: 'C. $7$',
          principle: 'Digit Sum Congruence Modulo 9 and Upper Bound Estimation',
          solution:
            'Every positive integer is congruent to its digit sum modulo $9$: $N \\equiv S(N) \\pmod{9}$.\nSince $4444 \\equiv 4 + 4 + 4 + 4 = 16 \\equiv 7 \\pmod{9}$, and $7^1 \\equiv 7, 7^2 \\equiv 4, 7^3 \\equiv 1 \\pmod{9}$, with $4444 = 3 \\times 1481 + 1$, we get:\n$$4444^{4444} \\equiv 7^{4444} \\equiv 7^1 = 7 \\pmod{9}$$\nNext, bound the size: $4444^{4444} < 10000^{5000} = 10^{20000}$, so it has at most $20000$ digits. Hence $S(4444^{4444}) \\le 20000 \\times 9 = 180000$.\nAmong positive integers $\\le 180000$, the maximum digit sum is $S(99999) = 45$ (since $S(179999) = 44$), so $S(S(4444^{4444})) \\le 45$. Among positive integers $\\le 45$, the maximum digit sum is $S(39) = 3 + 9 = 12$, and thus $S(S(S(4444^{4444}))) \\le 12$.\nThe only positive integer $\\le 12$ congruent to $7 \\pmod{9}$ is $7$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Faktor Persekutuan Terbesar (FPB) dari dua bilangan raksasa $(2^{100} - 1)$ dan $(2^{120} - 1)$ adalah...\nA. $2^{10} - 1$\nB. $2^{20} - 1$\nC. $2^{40} - 1$\nD. $2^{60} - 1$',
          answer: 'B. $2^{20} - 1$',
          principle: 'Sifat FPB Bentuk $a^m - 1$ dan $a^n - 1$',
          solution:
            'Terapkan Algoritma Euclid secara langsung pada $2^{120} - 1$ dan $2^{100} - 1$:\n$$2^{120} - 1 = 2^{20}(2^{100} - 1) + (2^{20} - 1)$$\nBerdasarkan sifat $\\gcd(a, b) = \\gcd(b, a - qb)$, diperoleh:\n$$\\gcd(2^{120} - 1, 2^{100} - 1) = \\gcd(2^{100} - 1, 2^{20} - 1)$$\nPerhatikan bahwa $2^{100} - 1 = (2^{20})^5 - 1$. Karena $t - 1$ selalu membagi habis $t^5 - 1 = (t - 1)(t^4 + t^3 + t^2 + t + 1)$, maka $(2^{20} - 1)$ membagi habis $(2^{100} - 1)$.\nDengan demikian, $\\gcd(2^{100} - 1, 2^{120} - 1) = 2^{20} - 1$. (Identitas umumnya: $\\gcd(x^A - 1, x^B - 1) = x^{\\gcd(A, B)} - 1$.)',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            "What is the exact value of Euler's totient function, $\\varphi(2026)$?\nA. $1012$\nB. $1013$\nC. $2025$\nD. $2026$",
          answer: 'A. $1012$',
          principle: "Euler's Totient Function",
          solution:
            'Factorize $2026 = 2 \\times 1013$. Since both $2$ and $1013$ are prime:\n$$\\varphi(2026) = 2026 \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{1013}\\right) = 2026 \\times \\frac{1}{2} \\times \\frac{1012}{1013} = 1012$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Jumlah dari semua pembagi bulat positif dari bilangan $N = p^2 q$, di mana $p$ dan $q$ adalah dua bilangan prima yang berbeda, dapat dirumuskan sebagai...\nA. $(p^2 + 1)(q + 1)$\nB. $(p^2 + p + 1)(q + 1)$\nC. $(p^2 + p)(q^2 + q)$\nD. $(2p + 1)(q + 1)$',
          answer: 'B. $(p^2 + p + 1)(q + 1)$',
          principle: 'Fungsi Jumlah Pembagi Positif $\\sigma(N)$',
          solution:
            'Setiap pembagi bulat positif dari $N = p^2 q$ berbentuk $p^a q^b$ dengan $a \\in \\{0, 1, 2\\}$ dan $b \\in \\{0, 1\\}$ (terdapat $3 \\times 2 = 6$ pembagi: $1, p, p^2, q, pq, p^2 q$).\nJika kita menjabarkan hasil kali deret geometri pangkat faktor prima dengan sifat distributif, setiap suku pada hasil jabaran berkorespondensi tepat satu-satu dengan seluruh pembagi $N$:\n$$(1 + p + p^2)(1 + q) = 1 + p + p^2 + q + pq + p^2 q$$\nJadi, jumlah seluruh pembagi bulat positif $\\sigma(N)$ adalah $(p^2 + p + 1)(q + 1)$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Find the highest power of $3$ (i.e., the largest integer $k$) such that $3^k$ completely divides $1000!$ ($1000$ factorial).\nA. $333$\nB. $444$\nC. $498$\nD. $500$',
          answer: 'C. $498$',
          principle: "Legendre's Formula",
          solution:
            "In the product $1000! = 1 \\times 2 \\times \\cdots \\times 1000$, each multiple of $3$ contributes at least one factor of $3$ ($\\lfloor 1000/3 \\rfloor$ integers), each multiple of $3^2 = 9$ contributes an additional second factor of $3$ ($\\lfloor 1000/9 \\rfloor$ integers), each multiple of $27$ contributes a third factor, and so on up to $3^6 = 729$ ($3^7 = 2187 > 1000$). Summing these counts gives Legendre's Formula:\n$$k = \\left\\lfloor \\frac{1000}{3} \\right\\rfloor + \\left\\lfloor \\frac{1000}{9} \\right\\rfloor + \\left\\lfloor \\frac{1000}{27} \\right\\rfloor + \\left\\lfloor \\frac{1000}{81} \\right\\rfloor + \\left\\lfloor \\frac{1000}{243} \\right\\rfloor + \\left\\lfloor \\frac{1000}{729} \\right\\rfloor$$\n$$k = 333 + 111 + 37 + 12 + 4 + 1 = 498$$",
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Tentukan nilai bilangan bulat positif terbesar $n$ sedemikian rupa sehingga bentuk aljabar $(n + 10)$ dapat membagi habis $(n^3 + 100)$.\nA. $100$\nB. $890$\nC. $900$\nD. $1000$',
          answer: 'B. $890$',
          principle: 'Pembagian Polinomial dan Keterbagian',
          solution:
            'Lakukan pembagian polinomial $n^3 + 100$ oleh $n + 10$:\n$$n^3 + 100 = (n + 10)(n^2 - 10n + 100) - 1000 + 100 = (n + 10)(n^2 - 10n + 100) - 900$$\nAgar $(n + 10)$ membagi habis $(n^3 + 100)$, maka $(n + 10)$ harus membagi habis $900$. Nilai terbesar terjadi saat $n + 10 = 900$, sehingga $n = 890$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'How many consecutive trailing zeros are there at the very end of the decimal representation of the number $2026!$ ?\nA. $405$\nB. $486$\nC. $505$\nD. $506$',
          answer: 'C. $505$',
          principle: "Counting Trailing Zeros via Legendre's Formula",
          solution:
            'The number of trailing zeros equals the exponent of $5$ in the prime factorization of $2026!$ (since factors of $2$ outnumber factors of $5$):\n$$\\left\\lfloor \\frac{2026}{5} \\right\\rfloor + \\left\\lfloor \\frac{2026}{25} \\right\\rfloor + \\left\\lfloor \\frac{2026}{125} \\right\\rfloor + \\left\\lfloor \\frac{2026}{625} \\right\\rfloor = 405 + 81 + 16 + 3 = 505$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Bilangan asli terkecil $x$ yang memenuhi sekaligus sistem kekongruenan $x \\equiv 1 \\pmod{2}$, $x \\equiv 2 \\pmod{3}$, $x \\equiv 4 \\pmod{5}$, dan $x \\equiv 6 \\pmod{7}$ adalah...\nA. $209$\nB. $210$\nC. $211$\nD. $419$',
          answer: 'A. $209$',
          principle: 'Teorema Sisa Tiongkok (Chinese Remainder Theorem)',
          solution:
            'Perhatikan bahwa sisa setiap kekongruenan berselisih tepat $1$ dari pembaginya, yaitu $x \\equiv -1 \\pmod{m}$ untuk setiap modulus $2, 3, 5, 7$. Oleh karena itu:\n$$x \\equiv -1 \\pmod{\\text{KPK}(2, 3, 5, 7)} \\implies x \\equiv -1 \\pmod{210} \\implies x = 210 - 1 = 209$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Two integers are called coprime (relatively prime) if their greatest common divisor is $1$. How many positive integers less than or equal to $1000$ are coprime to $1000$?\nA. $200$\nB. $250$\nC. $400$\nD. $500$',
          answer: 'C. $400$',
          principle: "Euler's Totient Function",
          solution:
            "The count of positive integers $\\le 1000$ coprime to $1000$ is Euler's totient $\\varphi(1000)$. Since $1000 = 2^3 \\times 5^3$:\n$$\\varphi(1000) = 1000 \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{5}\\right) = 1000 \\times \\frac{1}{2} \\times \\frac{4}{5} = 400$$",
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Tentukan hasil persis dari deret pecahan faktorial tak hingga berikut: $\\frac{1}{2!} + \\frac{2}{3!} + \\frac{3}{4!} + \\frac{4}{5!} + \\dots$\nA. $\\frac{1}{2}$\nB. $1$\nC. $e - 1$\nD. $2$',
          answer: 'B. $1$',
          principle: 'Deret Teleskopik Faktorial',
          solution:
            'Pecah setiap suku ke-$n$ sebagai berikut:\n$$\\frac{n}{(n+1)!} = \\frac{(n+1) - 1}{(n+1)!} = \\frac{1}{n!} - \\frac{1}{(n+1)!}$$\nDeret menjadi deret teleskopik:\n$$\\left(\\frac{1}{1!} - \\frac{1}{2!}\\right) + \\left(\\frac{1}{2!} - \\frac{1}{3!}\\right) + \\left(\\frac{1}{3!} - \\frac{1}{4!}\\right) + \\dots$$\nSemua suku tengah saling menghilangkan hingga menyisakan suku pertama $\\frac{1}{1!} = 1$ (karena $\\lim_{n\\to\\infty} \\frac{1}{(n+1)!} = 0$).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'What is the sum of all digits of the number obtained by evaluating $10^{100} - 2026$?\nA. $882$\nB. $891$\nC. $900$\nD. $909$',
          answer: 'B. $891$',
          principle: 'Decimal Digit Structure Under Subtraction',
          solution:
            '$10^{100}$ consists of the digit $1$ followed by $100$ zeros ($101$ digits total). When subtracting $2026$, the last four digits become $10000 - 2026 = 7974$, while the preceding $100 - 4 = 96$ digits all become $9$.\n$$\\text{Sum of digits} = (96 \\times 9) + 7 + 9 + 7 + 4 = 864 + 27 = 891$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Isian Singkat',
      marks: 10,
      stem: 'Tuliskan jawaban akhir yang singkat dan eksak untuk setiap soal berikut (10 soal, masing-masing 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Find the last two digits (the tens and units digits) of the power tower expression $7^{7^7}$.',
          answer: '$43$',
          answerNumeric: [{ name: 'jawaban', value: 43 }],
          principle: 'Modular Arithmetic Modulo 100 and Exponent Reduction',
          solution:
            'Finding the last two digits is equivalent to evaluating $7^{7^7} \\pmod{100}$. Since $7^4 = 2401 \\equiv 1 \\pmod{100}$, we reduce the exponent $7^7$ modulo $4$:\n$$7 \\equiv -1 \\pmod{4} \\implies 7^7 \\equiv (-1)^7 = -1 \\equiv 3 \\pmod{4}$$\nHence $7^{7^7} \\equiv 7^3 = 343 \\equiv 43 \\pmod{100}$. The last two digits are $43$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Berapakah sisa pembagian bilangan raksasa $2026^{2026}$ apabila dibagi oleh $7$?',
          answer: '$4$',
          answerNumeric: [{ name: 'jawaban', value: 4 }],
          principle: 'Teorema Kecil Fermat Modulo 7',
          solution:
            'Evaluasi basis modulo $7$: $2026 = 7 \\times 289 + 3 \\equiv 3 \\pmod{7}$.\nMenurut Teorema Kecil Fermat, $3^6 \\equiv 1 \\pmod{7}$. Bagi eksponen dengan $6$: $2026 = 6 \\times 337 + 4$.\nMaka:\n$$2026^{2026} \\equiv 3^{2026} \\equiv (3^6)^{337} \\cdot 3^4 \\equiv 1 \\cdot 81 \\equiv 4 \\pmod{7}$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'How many positive integer divisors of the number $10^{10}$ are NOT multiples of $10$?',
          answer: '$21$',
          answerNumeric: [{ name: 'jawaban', value: 21 }],
          principle: 'Inclusion-Exclusion on Prime Factorization Divisors',
          solution:
            'Factorize $10^{10} = 2^{10} \\times 5^{10}$. A divisor is not a multiple of $10$ if and only if it lacks factor $2$ or lacks factor $5$.\n- Powers of $2$: $2^0, 2^1, \\dots, 2^{10}$ ($11$ divisors)\n- Powers of $5$: $5^0, 5^1, \\dots, 5^{10}$ ($11$ divisors)\n\nSince $2^0 5^0 = 1$ is counted in both sets, the total count is $11 + 11 - 1 = 21$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Tentukan nilai eksak dari operasi bentuk akar khusus berikut: $\\sqrt{44444444 - 8888}$.',
          answer: '$6666$',
          answerNumeric: [{ name: 'jawaban', value: 6666 }],
          principle: 'Representasi Aljabar Bilangan Repdigit Basis 10',
          solution:
            'Karena $99999999 = 10^8 - 1$ dan $9999 = 10^4 - 1$, nyatakan kedua bilangan repdigit dalam bentuk pangkat $10$:\n$$44444444 = \\frac{4}{9}(10^8 - 1), \\qquad 8888 = \\frac{8}{9}(10^4 - 1)$$\nHitung selisihnya lalu faktorkan menjadi bentuk kuadrat sempurna:\n$$44444444 - 8888 = \\frac{4}{9}(10^8 - 1) - \\frac{8}{9}(10^4 - 1) = \\frac{4}{9}(10^8 - 2 \\cdot 10^4 + 1) = \\frac{4}{9}(10^4 - 1)^2$$\nTarik akarnya:\n$$\\sqrt{44444444 - 8888} = \\frac{2}{3}(10^4 - 1) = \\frac{2}{3}(9999) = 2 \\times 3333 = 6666$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Find the remainder when the sum $1^1 + 2^2 + 3^3 + 4^4 + \\cdots + 10^{10}$ is divided by $10$.',
          answer: '$7$',
          answerNumeric: [{ name: 'jawaban', value: 7 }],
          principle: 'Units Digit Cycles Modulo 10',
          solution:
            'Evaluate each term modulo $10$ (units digit), using $7^4 = 2401 \\equiv 1$, $8^4 = 4096 \\equiv 6$, and $9^2 = 81 \\equiv 1 \\pmod{10}$:\n- $1^1 = 1 \\equiv 1$, $2^2 = 4 \\equiv 4$, $3^3 = 27 \\equiv 7$, $4^4 = 256 \\equiv 6$\n- $5^5 \\equiv 5$, $6^6 \\equiv 6$, $10^{10} \\equiv 0$\n- $7^7 = 7^4 \\cdot 7^3 \\equiv 1 \\cdot 343 \\equiv 3$\n- $8^8 = (8^4)^2 \\equiv 6^2 = 36 \\equiv 6$\n- $9^9 = (9^2)^4 \\cdot 9 \\equiv 1^4 \\cdot 9 = 9$\n\nSumming the units digits gives $1 + 4 + 7 + 6 + 5 + 6 + 3 + 6 + 9 + 0 = 47 \\equiv 7 \\pmod{10}$.\n(Audit note: the source PDF answer key lists $5$ due to miscomputing $8^8 \\equiv 4 \\pmod{10}$ instead of $8^8 = (8^4)^2 \\equiv 6^2 \\equiv 6 \\pmod{10}$.)',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Kelipatan Persekutuan Terkecil (KPK) dari dua bilangan asli $a$ dan $b$ adalah $2024$. Jika Faktor Persekutuan Terbesar (FPB)-nya adalah $2$, berapakah jumlah maksimum yang mungkin untuk $a + b$?',
          answer: '$2026$',
          answerNumeric: [{ name: 'jawaban', value: 2026 }],
          principle: 'Identitas $\\text{FPB}(a, b) \\times \\text{KPK}(a, b) = ab$',
          solution:
            'Diketahui $\\text{KPK}(a, b) = 2024$ dan $\\text{FPB}(a, b) = 2$, sehingga $ab = 2 \\times 2024 = 4048$.\nMisalkan $a = 2x$ dan $b = 2y$ dengan $x, y$ bilangan bulat positif dan $\\gcd(x, y) = 1$, maka $4xy = 4048 \\implies xy = 1012$.\nKarena $x \\ge 1$ dan $y \\ge 1$, berlaku:\n$$(x - 1)(y - 1) \\ge 0 \\implies xy - (x + y) + 1 \\ge 0 \\implies x + y \\le xy + 1 = 1013$$\nKesamaan tercapai saat salah satunya bernilai $1$, yaitu $x = 1$ dan $y = 1012$ (dan keduanya saling prima karena $\\gcd(1, 1012) = 1$). Jadi, jumlah maksimumnya adalah:\n$$a + b = 2(x + y) = 2(1 + 1012) = 2026$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'What is the smallest positive integer $n$ such that $2^n \\equiv 1 \\pmod{17}$?',
          answer: '$8$',
          answerNumeric: [{ name: 'jawaban', value: 8 }],
          principle: 'Multiplicative Order Modulo a Prime',
          solution:
            "We seek the multiplicative order $\\text{ord}_{17}(2)$ (the smallest positive integer $n$ with $2^n \\equiv 1 \\pmod{17}$). By Fermat's Little Theorem, $2^{16} \\equiv 1 \\pmod{17}$, so the smallest such $n$ must divide $16$ (if $16 = qn + r$ with $0 \\le r < n$, then $2^r \\equiv 1 \\pmod{17}$, forcing $r = 0$).\nChecking the divisors of $16$ ($1, 2, 4, 8$) in order:\n$$2^1 = 2, \\quad 2^2 = 4, \\quad 2^4 = 16 \\equiv -1 \\pmod{17}$$\nSquaring gives $2^8 \\equiv (-1)^2 = 1 \\pmod{17}$. Thus, the smallest positive exponent is $n = 8$.",
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Hitung nilai persis dari deret pecahan teleskopik: $\\frac{1}{1 \\times 4} + \\frac{1}{4 \\times 7} + \\frac{1}{7 \\times 10} + \\cdots + \\frac{1}{2023 \\times 2026}$.',
          answer: '$\\frac{675}{2026}$',
          principle: 'Deret Pecahan Teleskopik',
          solution:
            'Suku ke-$k$ (untuk $k = 1, 2, \\dots, 675$) dapat dipecah menjadi:\n$$\\frac{1}{(3k - 2)(3k + 1)} = \\frac{1}{3}\\left(\\frac{1}{3k - 2} - \\frac{1}{3k + 1}\\right)$$\nJumlah seluruh suku dari $k = 1$ sampai $k = 675$ saling meniadakan (teleskopik) hingga tersisa:\n$$\\frac{1}{3}\\left(1 - \\frac{1}{2026}\\right) = \\frac{1}{3}\\left(\\frac{2025}{2026}\\right) = \\frac{675}{2026}$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Find the exact remainder when the sum of factorials $1! + 2! + 3! + \\cdots + 100!$ is divided by $15$.',
          answer: '$3$',
          answerNumeric: [{ name: 'jawaban', value: 3 }],
          principle: 'Factorial Divisibility Modulo 15',
          solution:
            'For all $n \\ge 5$, $n!$ contains both $3$ and $5$ as factors, so $15 \\mid n!$, meaning $n! \\equiv 0 \\pmod{15}$.\nOnly the first four terms contribute to the remainder:\n$$1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33 \\equiv 3 \\pmod{15}$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Jumlah dari seluruh bilangan asli yang kurang dari $120$ dan saling prima (coprime) dengan $120$ adalah...',
          answer: '$1920$',
          answerNumeric: [{ name: 'jawaban', value: 1920 }],
          principle: 'Simetri Bilangan Coprime dan Fungsi Totien Euler',
          solution:
            'Karena $\\gcd(k, n) = 1 \\iff \\gcd(n - k, n) = 1$, setiap pasangan bilangan saling prima $(k, n - k)$ berjumlah $n$. Dengan $\\varphi(n)$ bilangan yang saling prima kurang dari $n$, jumlah keseluruhannya adalah $\\frac{1}{2} n \\varphi(n)$.\nUntuk $n = 120 = 2^3 \\times 3 \\times 5$:\n$$\\varphi(120) = 120\\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{5}\\right) = 32$$\nMaka jumlahnya adalah $\\frac{1}{2} \\times 120 \\times 32 = 1920$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
