/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SMP Kelas 7–8 – Expert 2
 * Sumber: Duta e-dukasi (BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 78  EXPERT 2.pdf).
 * Bahasa dipertahankan sesuai naskah sumber untuk tiap butir soal.
 */
export default {
  id: 'olim-smp-bilangan-exp2',
  slug: 'bilangan-smp-expert-2',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'olympiad-pro',
  topic: 'Bilangan Olimpiade SMP Kelas 7–8 (Expert 2)',
  relatedChapterIds: ['smp7-bab1-bilangan-bulat', 'smp8-bab1-bilangan-berpangkat'],
  lang: 'id',
  title: 'Bilangan Olimpiade Matematika SMP Kelas 7–8 – Expert 2',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 20 soal Pilihan Ganda (Bagian A) dan 10 soal Isian Singkat (Bagian B) dengan teliti. Pertahankan bahasa masing-masing soal sesuai naskah asli.',
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SMP KELAS 78  EXPERT 2.pdf',
    driveFolder: '1cBh4tYsSB8-l2fiGVEyfoes5pKtMQU2h',
    license: 'CC BY 4.0'
  },
  status: 'published',
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
            'Berapakah sisa pembagian $3^{2026}$ jika dibagi oleh $17$?\n\nA. $7$\nB. $9$\nC. $8$\nD. $15$',
          answer: 'C. $8$',
          principle: 'Teorema Fermat Kecil untuk bilangan prima $p = 17$: $a^{16} \\equiv 1 \\pmod{17}$ bagi $\\gcd(a, 17) = 1$.',
          solution:
            'Menurut Teorema Fermat Kecil, karena $17$ adalah bilangan prima dan $\\gcd(3, 17) = 1$, maka:\n$$3^{16} \\equiv 1 \\pmod{17}$$\nBagi eksponen $2026$ dengan $16$:\n$$2026 = 16 \\times 126 + 10$$\nSehingga:\n$$3^{2026} = (3^{16})^{126} \\times 3^{10} \\equiv 1^{126} \\times 3^{10} = 3^{10} \\pmod{17}$$\nEvaluasi $3^{10} \\pmod{17}$:\n$$3^2 = 9, \\qquad 3^4 = 81 \\equiv -4 \\pmod{17}, \\qquad 3^8 \\equiv (-4)^2 = 16 \\equiv -1 \\pmod{17}$$\n$$3^{10} = 3^8 \\times 3^2 \\equiv (-1) \\times 9 = -9 \\equiv 8 \\pmod{17}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'How many positive integer divisors of $2024^3$ are multiples of $2024$? (Note: $2024 = 8 \\times 253 = 2^3 \\times 11 \\times 23$)\n\nA. $63$\nB. $120$\nC. $128$\nD. $256$',
          answer: 'A. $63$',
          principle: 'Factorize $2024^3$ into prime powers and count exponent tuples exceeding the exponents of $2024$.',
          solution:
            'From $2024 = 2^3 \\times 11^1 \\times 23^1$, cubing gives:\n$$2024^3 = 2^9 \\times 11^3 \\times 23^3$$\nAny divisor $d = 2^a \\times 11^b \\times 23^c$ of $2024^3$ that is a multiple of $2024$ must satisfy:\n$$3 \\le a \\le 9, \\qquad 1 \\le b \\le 3, \\qquad 1 \\le c \\le 3$$\nThere are $7$ choices for $a$, $3$ choices for $b$, and $3$ choices for $c$, so the total number of such divisors is:\n$$7 \\times 3 \\times 3 = 63$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Berapa banyak pasangan bilangan bulat positif $(x, y)$ yang memenuhi persamaan $\\frac{1}{x} + \\frac{2}{y} = \\frac{1}{5}$?\n\nA. $3$\nB. $4$\nC. $5$\nD. $6$',
          answer: 'D. $6$',
          principle: 'Selesaikan persamaan Diophantine pecahan dengan pemfaktoran Simon\'s Favorite Factoring Trick.',
          solution:
            'Kalikan kedua ruas persamaan dengan $5xy$:\n$$5y + 10x = xy \\implies xy - 10x - 5y = 0$$\nTambahkan $50$ pada kedua ruas untuk memfaktorkan:\n$$(x - 5)(y - 10) = 50$$\nKarena $x, y > 0$, kemungkinan pasangan faktor dari $50$ yang menghasilkan $(x, y)$ bulat positif berasal dari pembagi positif $50$, yaitu $1, 2, 5, 10, 25, 50$:\n- $x - 5 = d \\implies x = 5 + d > 5$\n- $y - 10 = \\frac{50}{d} \\implies y = 10 + \\frac{50}{d} > 10$\n(Faktor negatif $d < 0$ tidak menghasilkan $x, y$ yang keduanya positif.)\nKarena ada $6$ pembagi positif dari $50$, terdapat $6$ pasangan bilangan bulat positif $(x, y)$ yang memenuhi.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Let $N$ be the smallest positive integer such that $N!$ ($N$ factorial) ends in exactly $100$ consecutive zeros. What is the value of $N$?\n\nA. $400$\nB. $404$\nC. $405$\nD. $410$',
          answer: 'C. $405$',
          principle: 'Use Legendre\'s formula to compute the exponent of $5$ in $N!$, which equals the number of trailing zeros.',
          solution:
            'The number of trailing zeros in $N!$ equals $v_5(N!) = \\sum_{k \\ge 1} \\left\\lfloor \\frac{N}{5^k} \\right\\rfloor$.\nCheck $N = 404$:\n$$\\left\\lfloor \\frac{404}{5} \\right\\rfloor + \\left\\lfloor \\frac{404}{25} \\right\\rfloor + \\left\\lfloor \\frac{404}{125} \\right\\rfloor = 80 + 16 + 3 = 99$$\nCheck $N = 405$:\n$$\\left\\lfloor \\frac{405}{5} \\right\\rfloor + \\left\\lfloor \\frac{405}{25} \\right\\rfloor + \\left\\lfloor \\frac{405}{125} \\right\\rfloor = 81 + 16 + 3 = 100$$\nThus the smallest positive integer $N$ is $405$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Jika $x^3 - y^3 = 999$ dan $x, y$ adalah bilangan bulat, berapakah nilai maksimum yang mungkin dari $x + y$?\n\nA. $9$\nB. $12$\nC. $21$\nD. $37$',
          answer: 'C. $21$',
          principle: 'Pemfaktoran selisih pangkat tiga $x^3 - y^3 = (x - y)(x^2 + xy + y^2)$ dan analisis pembagi positif $999$.',
          solution:
            'Faktorkan $x^3 - y^3$:\n$$x^3 - y^3 = (x - y)(x^2 + xy + y^2) = 999$$\nKarena $x^2 + xy + y^2 = \\left(x + \\frac{y}{2}\\right)^2 + \\frac{3}{4}y^2 > 0$, maka $d = x - y$ harus merupakan pembagi positif dari $999 = 3^3 \\times 37$.\nSubstitusikan $x = y + d$ ke $x^2 + xy + y^2 = \\frac{999}{d}$:\n- Untuk $d = 1$: $3y^2 + 3y + 1 = 999 \\implies 3y(y + 1) = 998$, tidak memiliki solusi bulat karena $3 \\nmid 998$.\n- Untuk $d = 3$: $(y + 3)^2 + (y + 3)y + y^2 = 333 \\implies 3y^2 + 9y - 324 = 0 \\implies (y + 12)(y - 9) = 0$. Diperoleh $(x, y) = (12, 9)$ dengan $x + y = 21$ atau $(x, y) = (-9, -12)$ dengan $x + y = -21$.\n- Untuk $d = 9$: $3y^2 + 27y + 81 = 111 \\implies y^2 + 9y - 10 = 0 \\implies (y + 10)(y - 1) = 0$, memberi nilai maksimum $x + y = 10 + 1 = 11$.\n- Untuk $d \\ge 27$: nilai minimum $x^2 + xy + y^2 = 3\\left(y + \\frac{d}{2}\\right)^2 + \\frac{d^2}{4} \\ge \\frac{27^2}{4} = 182{,}25 > \\frac{999}{27} = 37$, sehingga tidak ada solusi.\nJadi, nilai maksimum yang mungkin dari $x + y$ adalah $21$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'If $p$ and $q$ are prime numbers such that $p^2 - 2q^2 = 17$, what is the value of $p + q$?\n\nA. $7$\nB. $8$\nC. $10$\nD. $12$',
          answer: 'A. $7$',
          principle: 'Analyze parity and congruences modulo $8$ since any odd integer squared is congruent to $1 \\pmod{8}$.',
          solution:
            'Consider the equation modulo $8$. Note that $p^2 = 2q^2 + 17$ is odd, so $p$ must be an odd prime, giving $p^2 \\equiv 1 \\pmod{8}$.\nIf $q$ were also an odd prime, then $q^2 \\equiv 1 \\pmod{8}$, yielding:\n$$p^2 - 2q^2 \\equiv 1 - 2(1) = -1 \\equiv 7 \\pmod{8}$$\nHowever, $17 \\equiv 1 \\pmod{8}$, a contradiction. Hence $q$ must be the even prime $q = 2$.\nSubstituting $q = 2$:\n$$p^2 - 2(2^2) = 17 \\implies p^2 = 25 \\implies p = 5$$\nTherefore, $p + q = 5 + 2 = 7$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Hitunglah nilai eksak dari $\\sqrt{1 + (2024 \\times 2025 \\times 2026 \\times 2027)}$.\n\nA. $4102649$\nB. $4102648$\nC. $4104675$\nD. $4100625$',
          answer: 'A. $4102649$',
          principle: 'Identitas aljabar untuk hasil kali empat bilangan berurutan ditambah satu: $1 + n(n + 1)(n + 2)(n + 3) = [n(n + 3) + 1]^2$.',
          solution:
            'Misalkan $n = 2024$. Perhatikan pengelompokan suku luar dan suku dalam:\n$$n(n + 1)(n + 2)(n + 3) + 1 = [n(n + 3)][(n + 1)(n + 2)] + 1$$\n$$= (n^2 + 3n)(n^2 + 3n + 2) + 1 = (n^2 + 3n)^2 + 2(n^2 + 3n) + 1 = (n^2 + 3n + 1)^2$$\nSehingga bentuk akarnya menjadi:\n$$\\sqrt{1 + n(n + 1)(n + 2)(n + 3)} = n(n + 3) + 1$$\nSubstitusikan $n = 2024$:\n$$2024 \\times 2027 + 1 = 4102648 + 1 = 4102649$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'What is the remainder when the number $(7^{2026} + 9^{2026})$ is divided by $64$?\n\nA. $2$\nB. $16$\nC. $32$\nD. $50$',
          answer: 'A. $2$',
          principle: 'Use modular exponentiation modulo $64$ by finding small periods of $7^k$ and $9^k$ modulo $64$.',
          solution:
            'Evaluate small powers of $7$ and $9$ modulo $64$:\n$$7^2 = 49, \\quad 7^4 = 2401 = 64 \\times 37 + 33 \\equiv 33 \\pmod{64}, \\quad 7^8 \\equiv 33^2 = 1089 = 64 \\times 17 + 1 \\equiv 1 \\pmod{64}$$\n$$9^2 = 81 \\equiv 17 \\pmod{64}, \\quad 9^4 \\equiv 17^2 = 289 \\equiv 33 \\pmod{64}, \\quad 9^8 \\equiv 33^2 \\equiv 1 \\pmod{64}$$\nSince $2026 = 8 \\times 253 + 2$, we obtain:\n$$7^{2026} \\equiv 7^2 = 49 \\pmod{64}, \\qquad 9^{2026} \\equiv 9^2 = 81 \\equiv 17 \\pmod{64}$$\nSumming both remainders gives:\n$$7^{2026} + 9^{2026} \\equiv 49 + 17 = 66 \\equiv 2 \\pmod{64}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Berapakah angka puluhan (digit kedua dari belakang) dari bilangan $3^{2026}$?\n\nA. $0$\nB. $2$\nC. $7$\nD. $9$',
          answer: 'B. $2$',
          principle: 'Menentukan dua digit terakhir bilangan melalui aritmetika modulo $100$ dan Teorema Euler $\\varphi(100) = 40$.',
          solution:
            'Angka puluhan ditentukan oleh sisa pembagian modulo $100$. Karena $\\gcd(3, 100) = 1$ dan $\\varphi(100) = 40$, berlaku $3^{40} \\equiv 1 \\pmod{100}$.\nLebih lanjut, $3^{10} = 59049 \\equiv 49 \\pmod{100}$, sehingga:\n$$3^{20} \\equiv 49^2 = 2401 \\equiv 1 \\pmod{100}$$\nDengan membagi eksponen $2026 = 20 \\times 101 + 6$, diperoleh:\n$$3^{2026} = (3^{20})^{101} \\times 3^6 \\equiv 1^{101} \\times 729 \\equiv 29 \\pmod{100}$$\nDua digit terakhir $3^{2026}$ adalah $29$, sehingga angka puluhannya adalah $2$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'The base-$4$ representation of a number is $123123_4$. When this number is converted to base $8$, what is its representation?\n\nA. $3333_8$\nB. $2153_8$\nC. $6363_8$\nD. $1233_8$',
          answer: 'A. $3333_8$',
          principle: 'Convert from base $4$ to binary ($2$-bit blocks) and regroup into $3$-bit blocks for base $8$.',
          solution:
            'Convert each base-$4$ digit into its $2$-bit binary equivalent ($1 \\to 01$, $2 \\to 10$, $3 \\to 11$):\n$$123123_4 = 01\\,10\\,11\\,01\\,10\\,11_2$$\nGroup the $12$ binary digits into $3$-bit blocks from right to left:\n$$011\\,011\\,011\\,011_2$$\nEach $011_2$ block equals $3$ in base $8$, so the base-$8$ representation is $3333_8$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Diberikan fungsi $f(n)$ sebagai jumlah dari seluruh faktor bulat positif dari bilangan $n$. Tentukan nilai terkecil dari bilangan asli $n$ sedemikian sehingga $f(n) = 91$.\n\nA. $36$\nB. $48$\nC. $64$\nD. $72$',
          answer: 'A. $36$',
          principle: 'Fungsi jumlah pembagi $\\sigma(n)$ bersifat multiplikatif: jika $n = \\prod p_i^{a_i}$, maka $\\sigma(n) = \\prod (1 + p_i + \\dots + p_i^{a_i})$.',
          solution:
            'Diketahui $f(n) = \\sigma(n) = 91 = 7 \\times 13$.\nUntuk kasus satu faktor prima $n = p^a$, nilai $1 + p + \\dots + p^a = 91$ tidak memiliki solusi prima $p$ (untuk $a = 1$, $p = 90$ bukan prima; untuk $a = 2$, $p^2 + p + 1 = 91 \\implies p = 9$ bukan prima; untuk $a \\ge 3$, nilai untuk $p = 2$ adalah $15, 31, 63, 127$ dan untuk $p = 3$ adalah $40, 121$).\nUntuk dua faktor prima $n = p^a q^b$, faktorisasi $91 = 7 \\times 13$ memberikan:\n$$1 + p + p^2 = 7 \\implies p = 2 \\quad (a = 2)$$\n$$1 + q + q^2 = 13 \\implies q = 3 \\quad (b = 2)$$\nJadi, bilangan asli terkecil adalah $n = 2^2 \\times 3^2 = 36$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'If the five-digit number $7A42B$ is completely divisible by $44$, what is the maximum possible value of the product $A \\times B$?\n\nA. $16$\nB. $24$\nC. $48$\nD. $54$',
          answer: 'C. $48$',
          principle: 'Divisibility by $44$ requires simultaneous divisibility by $4$ (last two digits) and $11$ (alternating digit sum).',
          solution:
            'Since $44 = 4 \\times 11$ with $\\gcd(4, 11) = 1$, $7A42B$ must be divisible by both $4$ and $11$.\n1. Divisibility by $4$: the two-digit suffix $2B$ is divisible by $4$, so $B \\in \\{0, 4, 8\\}$.\n2. Divisibility by $11$: the alternating sum satisfies:\n$$7 - A + 4 - 2 + B = 9 - A + B \\equiv 0 \\pmod{11}$$\nTest each valid $B$ with $0 \\le A \\le 9$:\n- $B = 0 \\implies 9 - A \\equiv 0 \\pmod{11} \\implies A = 9$, giving $A \\times B = 0$.\n- $B = 4 \\implies 13 - A \\equiv 0 \\pmod{11} \\implies A = 2$, giving $A \\times B = 8$.\n- $B = 8 \\implies 17 - A \\equiv 0 \\pmod{11} \\implies A = 6$, giving $A \\times B = 48$.\nThus the maximum possible value of $A \\times B$ is $48$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Kelipatan Persekutuan Terkecil (KPK) dari bilangan $x$ dan $y$ adalah $240$, dan FPB-nya adalah $8$. Jika $x$ dan $y$ sama-sama merupakan bilangan dua digit (puluhan) dan selisih positif antara keduanya dibuat sekecil mungkin, berapakah selisih tersebut?\n\nA. $8$\nB. $16$\nC. $32$\nD. $56$',
          answer: 'A. $8$',
          principle: 'Nyatakan $x = da$ dan $y = db$ dengan $d = \\text{FPB}(x, y)$, $\\gcd(a, b) = 1$, serta $\\text{KPK}(x, y) = dab$.',
          solution:
            'Misalkan $x = 8a$ dan $y = 8b$ dengan $\\gcd(a, b) = 1$. Karena $\\text{KPK}(x, y) = 8ab = 240$, maka:\n$$ab = 30$$\nPasangan $(a, b)$ yang saling prima dan menghasilkan bilangan dua digit $10 \\le 8a, 8b \\le 99$ adalah:\n- $(a, b) = (3, 10) \\implies (x, y) = (24, 80)$ dengan selisih $80 - 24 = 56$.\n- $(a, b) = (5, 6) \\implies (x, y) = (40, 48)$ dengan selisih $48 - 40 = 8$.\n(Pasangan $(1, 30)$ dan $(2, 15)$ menghasilkan $8$ atau $120$, bukan dua digit.)\nSelisih positif terkecil yang mungkin adalah $8$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'What is the remainder when the sum of fifth powers $1^5 + 2^5 + 3^5 + \\cdots + 100^5$ is divided by $4$?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$',
          answer: 'A. $0$',
          principle: 'Reduce each base modulo $4$ and sum periodic blocks of four consecutive terms.',
          solution:
            'Evaluate $n^5 \\pmod{4}$ according to $n \\pmod{4}$:\n- If $n \\equiv 0 \\pmod{4}$, $n^5 \\equiv 0 \\pmod{4}$.\n- If $n \\equiv 1 \\pmod{4}$, $n^5 \\equiv 1 \\pmod{4}$.\n- If $n \\equiv 2 \\pmod{4}$, $n^5 = 32k^5 \\equiv 0 \\pmod{4}$.\n- If $n \\equiv 3 \\pmod{4}$, $n^5 \\equiv (-1)^5 = -1 \\equiv 3 \\pmod{4}$.\nAny block of four consecutive integers satisfies:\n$$n^5 + (n + 1)^5 + (n + 2)^5 + (n + 3)^5 \\equiv 0 + 1 + 0 + 3 = 4 \\equiv 0 \\pmod{4}$$\nSince $100$ is divisible by $4$ ($25$ complete blocks), the total sum is congruent to $0 \\pmod{4}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Tentukan sisa pembagian hasil jumlahan pangkat $5^{20} + 7^{20}$ apabila dibagi oleh $11$.\n\nA. $0$\nB. $2$\nC. $5$\nD. $7$',
          answer: 'B. $2$',
          principle: 'Teorema Fermat Kecil untuk modulus prima $p = 11$: $a^{10} \\equiv 1 \\pmod{11}$ bagi $11 \\nmid a$.',
          solution:
            'Berdasarkan Teorema Fermat Kecil, karena $11$ prima serta $\\gcd(5, 11) = 1$ dan $\\gcd(7, 11) = 1$, berlaku:\n$$5^{10} \\equiv 1 \\pmod{11}, \\qquad 7^{10} \\equiv 1 \\pmod{11}$$\nOleh karena itu:\n$$5^{20} + 7^{20} = (5^{10})^2 + (7^{10})^2 \\equiv 1^2 + 1^2 = 2 \\pmod{11}$$\nSisa pembagian oleh $11$ adalah $2$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Evaluate the exact value of the infinite sum: $\\frac{1}{3} + \\frac{1}{15} + \\frac{1}{35} + \\frac{1}{63} + \\dots$\n\nA. $\\frac{1}{3}$\nB. $\\frac{1}{2}$\nC. $\\frac{2}{3}$\nD. $1$',
          answer: 'B. $\\frac{1}{2}$',
          principle: 'Use partial fraction decomposition to rewrite the series as a telescoping sum.',
          solution:
            'Observe the pattern in the denominators: $3 = 1 \\times 3$, $15 = 3 \\times 5$, $35 = 5 \\times 7$, $63 = 7 \\times 9$. The $n$-th term is:\n$$\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2}\\left(\\frac{1}{2n - 1} - \\frac{1}{2n + 1}\\right)$$\nSumming from $n = 1$ to $N$ yields a telescoping sum:\n$$S_N = \\frac{1}{2}\\left[\\left(1 - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{5}\\right) + \\cdots + \\left(\\frac{1}{2N - 1} - \\frac{1}{2N + 1}\\right)\\right] = \\frac{1}{2}\\left(1 - \\frac{1}{2N + 1}\\right)$$\nAs $N \\to \\infty$, $\\frac{1}{2N + 1} \\to 0$, so the infinite sum equals $\\frac{1}{2}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Diketahui FPB dari bilangan $n$ dan $36$ adalah $12$, dan KPK dari $n$ dan $36$ adalah $72$. Tentukan nilai eksak dari $n$.\n\nA. $12$\nB. $18$\nC. $24$\nD. $48$',
          answer: 'C. $24$',
          principle: 'Hubungan antara dua bilangan bulat positif dengan FPB dan KPK-nya: $a \\times b = \\text{FPB}(a, b) \\times \\text{KPK}(a, b)$.',
          solution:
            'Gunakan sifat $\\text{FPB}(n, 36) \\times \\text{KPK}(n, 36) = n \\times 36$:\n$$12 \\times 72 = n \\times 36$$\n$$n = \\frac{12 \\times 72}{36} = 12 \\times 2 = 24$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'In base $10$, the number $1024$ is equal to $2^{10}$. How many digits does the base $2$ (binary) representation of the number $1024^{1024}$ have?\n\nA. $1024$\nB. $1025$\nC. $10240$\nD. $10241$',
          answer: 'D. $10241$',
          principle: 'A power of two $2^k$ has binary representation consisting of a $1$ followed by $k$ zeros, totaling $k + 1$ digits.',
          solution:
            'Rewrite $1024^{1024}$ as a power of $2$:\n$$1024^{1024} = (2^{10})^{1024} = 2^{10240}$$\nIn binary (base $2$), $2^k$ is written as the digit $1$ followed by $k$ zeros. Therefore, $2^{10240}$ has:\n$$10240 + 1 = 10241\\text{ digits}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Diberikan sistem kekongruenan linier: $x \\equiv 2 \\pmod{3}$, $x \\equiv 3 \\pmod{5}$, dan $x \\equiv 2 \\pmod{7}$. Nilai minimum bulat positif dari $x$ adalah...\n\nA. $17$\nB. $23$\nC. $38$\nD. $128$',
          answer: 'B. $23$',
          principle: 'Gabungkan kekongruenan dengan sisa sama terlebih dahulu menggunakan KPK modulus, lalu selesaikan sistem yang tersisa.',
          solution:
            'Dari $x \\equiv 2 \\pmod{3}$ dan $x \\equiv 2 \\pmod{7}$, karena $\\gcd(3, 7) = 1$, diperoleh:\n$$x \\equiv 2 \\pmod{21} \\implies x = 21k + 2$$\nSubstitusikan ke kekongruenan $x \\equiv 3 \\pmod{5}$:\n$$21k + 2 \\equiv 3 \\pmod{5} \\implies k + 2 \\equiv 3 \\pmod{5} \\implies k \\equiv 1 \\pmod{5}$$\nUntuk $k = 1$, nilai bulat positif minimum adalah:\n$$x = 21(1) + 2 = 23$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'If the roots of the quadratic equation $x^2 - px + q = 0$ are two distinct prime numbers, and $p = 15$, what is the value of $q$?\n\nA. $26$\nB. $34$\nC. $46$\nD. $56$',
          answer: 'A. $26$',
          principle: 'Apply Vieta\'s formulas ($r_1 + r_2 = p$ and $r_1 r_2 = q$) along with parity of prime numbers.',
          solution:
            'Let the two distinct prime roots be $r_1$ and $r_2$. By Vieta\'s formulas:\n$$r_1 + r_2 = p = 15, \\qquad r_1 r_2 = q$$\nSince $15$ is odd, one of the two primes must be even and the other odd. The only even prime is $2$, so the roots are $2$ and $15 - 2 = 13$ (which is prime).\nThus:\n$$q = 2 \\times 13 = 26$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Isian Singkat',
      marks: 10,
      stem: 'Isilah jawaban akhir yang paling tepat dan singkat untuk setiap soal berikut (10 soal, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt: 'Berapakah sisa pembagian $(100! + 200!)$ apabila dibagi oleh bilangan prima $97$?',
          answer: '$0$',
          answerNumeric: [{ name: 'sisa', value: 0, unit: '' }],
          principle: 'Setiap faktorial $n!$ dengan $n \\ge p$ pasti habis dibagi oleh $p$.',
          solution:
            'Karena $97 \\le 100$ dan $97 \\le 200$, bilangan $97$ muncul sebagai salah satu faktor perkalian di dalam $100!$ maupun $200!$.\nAkibatnya:\n$$100! \\equiv 0 \\pmod{97}, \\qquad 200! \\equiv 0 \\pmod{97}$$\nSehingga $100! + 200! \\equiv 0 + 0 = 0 \\pmod{97}$, dan sisa pembagiannya adalah $0$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'The least common multiple (LCM) of a positive integer $n$ and $20$ is $60$, and their greatest common divisor (GCD) is $4$. Find the value of $n$.',
          answer: '$12$',
          answerNumeric: [{ name: 'n', value: 12, unit: '' }],
          principle: 'Apply the identity $a \\times b = \\operatorname{lcm}(a, b) \\times \\gcd(a, b)$.',
          solution:
            'Using the product identity $n \\times 20 = \\operatorname{lcm}(n, 20) \\times \\gcd(n, 20)$:\n$$n \\times 20 = 60 \\times 4 = 240 \\implies n = \\frac{240}{20} = 12$$\nChecking: $\\gcd(12, 20) = 4$ and $\\operatorname{lcm}(12, 20) = 60$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Hitung nilai eksak (dalam bentuk desimal) dari operasi perkalian berantai berikut: $\\left(1 + \\frac{1}{2}\\right)\\left(1 + \\frac{1}{3}\\right)\\left(1 + \\frac{1}{4}\\right) \\dots \\left(1 + \\frac{1}{100}\\right)$.',
          answer: '$50.5$',
          answerNumeric: [{ name: 'nilai', value: 50.5, unit: '' }],
          principle: 'Sederhanakan tiap faktor menjadi pecahan tunggal $\\frac{k + 1}{k}$ agar terjadi pencoretan teleskopik.',
          solution:
            'Ubah setiap faktor menjadi pecahan tunggal:\n$$\\left(\\frac{3}{2}\\right)\\left(\\frac{4}{3}\\right)\\left(\\frac{5}{4}\\right) \\cdots \\left(\\frac{101}{100}\\right)$$\nPembilang setiap suku saling mencoret dengan penyebut suku berikutnya, menyisakan:\n$$\\frac{101}{2} = 50.5$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt: 'What is the highest power of $10$ that completely divides the number $300!$ ($300$ factorial)?',
          answer: '$74$',
          answerNumeric: [{ name: 'power', value: 74, unit: '' }],
          principle: 'Since $10 = 2 \\times 5$ and $v_2(300!) > v_5(300!)$, the highest power of $10$ dividing $300!$ equals $v_5(300!)$ via Legendre\'s formula.',
          solution:
            'Use Legendre\'s formula for the prime factor $5$ in $300!$:\n$$v_5(300!) = \\left\\lfloor \\frac{300}{5} \\right\\rfloor + \\left\\lfloor \\frac{300}{25} \\right\\rfloor + \\left\\lfloor \\frac{300}{125} \\right\\rfloor = 60 + 12 + 2 = 74$$\nThus $10^{74}$ is the highest power of $10$ that divides $300!$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt: 'Tentukan dua digit terakhir pembentuk bilangan $14^{2026}$.',
          answer: '$36$',
          answerNumeric: [{ name: 'duaDigitTerakhir', value: 36, unit: '' }],
          principle: 'Gunakan Teorema Sisa Cina (CRT) pada modulo $4$ dan modulo $25$ untuk menentukan sisa modulo $100$.',
          solution:
            'Cari $14^{2026} \\pmod{100}$ dengan memecah ke modulo $4$ dan modulo $25$:\n1. Modulo $4$: karena $2026 \\ge 2$, maka $14^{2026} = 2^{2026} \\times 7^{2026} \\equiv 0 \\pmod{4}$.\n2. Modulo $25$: $\\varphi(25) = 20$, sehingga $14^{20} \\equiv 1 \\pmod{25}$. Karena $2026 \\equiv 6 \\pmod{20}$:\n$$14^{2026} \\equiv 14^6 \\equiv (-11)^6 = (121)^3 \\equiv (-4)^3 = -64 \\equiv 11 \\pmod{25}$$\nBilangan antara $0$ hingga $99$ yang habis dibagi $4$ dan bersisa $11$ saat dibagi $25$ adalah $36$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt: 'Find the smallest positive integer $n > 1$ such that its square $n^2$ ends with the digits $44$.',
          answer: '$12$',
          answerNumeric: [{ name: 'n', value: 12, unit: '' }],
          principle: 'Analyze $n^2 \\equiv 44 \\pmod{100}$ by checking modulo $4$ and modulo $25$, or testing small integers.',
          solution:
            'If $n^2 \\equiv 44 \\pmod{100}$, then $n^2 \\equiv 0 \\pmod{4}$ (so $n$ is even) and $n^2 \\equiv 44 \\equiv 19 \\pmod{25}$.\nTesting small positive even integers $n > 1$:\n$$2^2 = 4, \\quad 4^2 = 16, \\quad 6^2 = 36, \\quad 8^2 = 64, \\quad 10^2 = 100, \\quad 12^2 = 144$$\nSince $12^2 = 144$ ends in $44$, the smallest such integer $n > 1$ is $12$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Jika $x$ dan $y$ adalah bilangan asli (bulat positif) yang memenuhi persamaan $2^x - 3^y = 7$, berapakah nilai dari penjumlahan $x + y$?',
          answer: '$6$',
          answerNumeric: [{ name: 'jumlah', value: 6, unit: '' }],
          principle: 'Analisis modularitas modulo $8$ dan modulo $3$ untuk menyimpulkan paritas $x$ dan $y$, lalu faktorkan selisih dua kuadrat.',
          solution:
            'Karena $2^x = 3^y + 7 \\ge 3^1 + 7 = 10$, maka $x \\ge 4$, sehingga $2^x \\equiv 0 \\pmod{8}$.\nTinjau persamaan modulo $8$:\n$$0 - 3^y \\equiv 7 \\pmod{8} \\implies 3^y \\equiv 1 \\pmod{8}$$\nKarena $3^1 \\equiv 3$ dan $3^2 \\equiv 1 \\pmod{8}$, maka $y$ harus genap: $y = 2k$.\nSelanjutnya tinjau modulo $3$:\n$$2^x \\equiv 7 \\equiv 1 \\pmod{3}$$\nSehingga $x$ juga genap: $x = 2m$. Persamaan dapat difaktorkan menjadi:\n$$(2^m - 3^k)(2^m + 3^k) = 7$$\nKarena $7$ prima dan kedua faktor bilangan bulat positif dengan $2^m + 3^k > 2^m - 3^k$, diperoleh:\n$$2^m - 3^k = 1, \\qquad 2^m + 3^k = 7$$\nJumlahkan kedua persamaan: $2^{m+1} = 8 \\implies m = 2 \\implies x = 4$, lalu $3^k = 3 \\implies k = 1 \\implies y = 2$.\nMaka $x + y = 4 + 2 = 6$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'What is the greatest common divisor (GCD) of the two large integers $(2^{100} - 1)$ and $(2^{120} - 1)$? (Write the answer as an algebraic power of $2$).',
          answer: '$2^{20} - 1$',
          principle: 'Use the divisibility identity $\\gcd(2^a - 1, 2^b - 1) = 2^{\\gcd(a, b)} - 1$.',
          solution:
            'By the standard Euclidean identity for Mersenne-type numbers $\\gcd(2^a - 1, 2^b - 1) = 2^{\\gcd(a, b)} - 1$:\n$$\\gcd(100, 120) = 20$$\nTherefore:\n$$\\gcd(2^{100} - 1, 2^{120} - 1) = 2^{20} - 1$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Sederhanakan bentuk akar berulang tak hingga berikut menjadi satu bilangan bulat positif: $\\sqrt{2 + \\sqrt{2 + \\sqrt{2 + \\dots}}}$',
          answer: '$2$',
          answerNumeric: [{ name: 'nilai', value: 2, unit: '' }],
          principle: 'Misalkan nilai bentuk akar tak hingga sebagai $x > 0$ sehingga membentuk persamaan kuadrat $x = \\sqrt{2 + x}$.',
          solution:
            'Misalkan $x = \\sqrt{2 + \\sqrt{2 + \\sqrt{2 + \\dots}}}$, dengan $x > 0$. Substitusi diri memberikan:\n$$x = \\sqrt{2 + x}$$\nKuadratkan kedua ruas:\n$$x^2 = 2 + x \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0$$\nKarena nilai akar harus positif ($x > 0$), diambil $x = 2$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'If $p$ is a prime number such that $p^2 + 14$ is also a prime number, find the exact value of the expression $p^3 + p$.',
          answer: '$30$',
          answerNumeric: [{ name: 'nilai', value: 30, unit: '' }],
          principle: 'Test divisibility of $p^2 + 14$ modulo $3$ to restrict the possible prime values of $p$.',
          solution:
            'If $p$ is a prime other than $3$, then $3 \\nmid p$, so $p^2 \\equiv 1 \\pmod{3}$. Consequently:\n$$p^2 + 14 \\equiv 1 + 14 = 15 \\equiv 0 \\pmod{3}$$\nSince $p^2 + 14 > 3$, it would be a multiple of $3$ greater than $3$ and hence composite, contradicting that $p^2 + 14$ is prime.\nThus $p = 3$ is the only candidate. Checking $p = 3$: $3^2 + 14 = 23$, which is prime.\nTherefore:\n$$p^3 + p = 3^3 + 3 = 27 + 3 = 30$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
