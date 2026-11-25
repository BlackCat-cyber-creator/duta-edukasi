/**
 * Paket Soal Terstruktur: Bilangan Olimpiade Matematika SD Kelas 4–5 – Elite Olympiad
 * Sumber: content-inbox/extracted/BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4–5 – ELITE OLYMPIAD.txt
 * Bahasa tiap butir soal dipertahankan sesuai bahasa asli dokumen sumber (Keputusan D5).
 */
export default {
  id: 'olim-sd-bilangan-elite',
  slug: 'bilangan-sd-elite',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  topic: 'Bilangan Olimpiade SD Kelas 4–5 (Elite Olympiad)',
  relatedChapterIds: ['sd5-bab2-kpk-fpb', 'sd5-bab3-bilangan-pecahan'],
  lang: 'id',
  langDisplay: 'ID / EN',
  competition: 'Seri Pembinaan OSN',
  title: 'Bilangan Olimpiade Matematika SD Kelas 4–5 – Elite Olympiad',
  totalMarks: 40,
  instructions:
    'Kerjakan seluruh 40 soal yang terdiri atas Bagian A (25 soal Pilihan Ganda) dan Bagian B (15 soal Isian Singkat). Setiap soal bernilai 1 poin.',
  constants: [],
  source: {
    org: 'Duta e-dukasi',
    file: 'BILANGAN OLIMPIADE MATEMATIKA SD KELAS 4\u20135 \u2013 ELITE OLYMPIAD.pdf',
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
      stem: 'Pilihlah satu jawaban yang paling tepat (A, B, C, atau D) untuk setiap soal berikut.',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Berapakah angka satuan (digit terakhir) dari hasil penjumlahan $2^{2026} + 3^{2026} + 4^{2026} + 5^{2026}$?\n\nA. 0\nB. 2\nC. 4\nD. 6',
          answer: 'C. 4',
          principle:
            'Periodisitas angka satuan bilangan berpangkat modulo $10$ (siklus pangkat modulo $4$ untuk basis $2$ dan $3$, serta paritas pangkat untuk basis $4$).',
          solution:
            'Evaluasi angka satuan masing-masing suku dengan membagi pangkat $2026$ terhadap $4$ ($2026 = 4 \\times 506 + 2$, sisa $2$):\n- Angka satuan $2^{2026}$ sama dengan satuan $2^2 = 4$.\n- Angka satuan $3^{2026}$ sama dengan satuan $3^2 = 9$.\n- Angka satuan $4^{2026}$ karena pangkat genap selalu berakhiran $6$.\n- Angka satuan $5^{2026}$ selalu berakhiran $5$.\n\nJumlah angka satuan $= 4 + 9 + 6 + 5 = 24$, sehingga angka satuan akhirnya adalah $4$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'The Least Common Multiple (LCM) of three strictly distinct positive integers is $120$. What is the absolute maximum possible sum of these three integers?\n\nA. 120\nB. 180\nC. 200\nD. 220',
          answer: 'D. 220',
          principle:
            'Any positive integer whose LCM with others is $L$ must be a divisor of $L$; choosing the three largest distinct divisors of $120$ maximizes the sum.',
          solution:
            'To maximize the sum of three strictly distinct positive integers with an LCM of $120$, select the three largest distinct divisors of $120$: $120$, $60$, and $40$. Since $\\operatorname{lcm}(120, 60, 40) = 120$, the maximum possible sum is $120 + 60 + 40 = 220$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Jumlah tiga bilangan prima berbeda adalah $100$. Berapakah nilai maksimum yang mungkin dari hasil kali ketiga bilangan prima tersebut?\n\nA. 4514\nB. 4154\nC. 3154\nD. 3002',
          answer: 'A. 4514',
          principle:
            'Paritas bilangan prima (satu-satunya bilangan prima genap adalah $2$) serta memaksimalkan hasil kali dua bilangan berjumlah tetap dengan memilih pasangan yang paling berdekatan.',
          solution:
            'Karena jumlah ketiga bilangan prima adalah bilangan genap ($100$), ketiga bilangan prima tersebut tidak mungkin semuanya ganjil (jumlah tiga bilangan ganjil selalu ganjil). Maka tepat satu di antaranya harus genap, yaitu $2$, sedangkan dua lainnya merupakan bilangan prima ganjil $p$ dan $q$ dengan $p + q = 100 - 2 = 98$.\n\nTuliskan $p = 49 - d$ dan $q = 49 + d$ (dengan $d > 0$ genap karena $p, q$ ganjil dan berbeda). Hasil kalinya adalah $pq = (49 - d)(49 + d) = 49^2 - d^2$, yang mencapai nilai maksimum ketika $d$ sekecil mungkin:\n- $d = 2 \\implies (47, 51)$, gugur karena $51 = 3 \\times 17$.\n- $d = 4 \\implies (45, 53)$, gugur karena $45$ bukan prima.\n- $d = 6 \\implies (43, 55)$, gugur karena $55$ bukan prima.\n- $d = 8 \\implies (41, 57)$, gugur karena $57 = 3 \\times 19$.\n- $d = 10 \\implies (39, 59)$, gugur karena $39$ bukan prima.\n- $d = 12 \\implies (37, 61)$, keduanya bilangan prima.\n\nJadi, nilai maksimum hasil kali ketiganya adalah $2 \\times 37 \\times 61 = 4514$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'What is the exact value of the following telescoping sum: $\\frac{1}{1 \\times 3} + \\frac{1}{3 \\times 5} + \\frac{1}{5 \\times 7} + \\dots + \\frac{1}{19 \\times 21}$?\n\nA. $9/21$\nB. $10/21$\nC. $20/21$\nD. $1/21$',
          answer: 'B. 10/21',
          principle:
            'Telescoping series using partial fraction decomposition $\\frac{1}{n(n+2)} = \\frac{1}{2}\\left(\\frac{1}{n} - \\frac{1}{n+2}\\right)$.',
          solution:
            'Rewrite each term using $\\frac{1}{n(n+2)} = \\frac{1}{2}\\left(\\frac{1}{n} - \\frac{1}{n+2}\\right)$:\n$$\\frac{1}{2}\\left[\\left(\\frac{1}{1} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{5}\\right) + \\dots + \\left(\\frac{1}{19} - \\frac{1}{21}\\right)\\right] = \\frac{1}{2}\\left(1 - \\frac{1}{21}\\right) = \\frac{1}{2} \\times \\frac{20}{21} = \\frac{10}{21}$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Dalam suatu basis bilangan $b$ (dengan $b \\ge 5$), nilai dari bilangan $144_b$ merupakan sebuah kuadrat sempurna. Akar kuadrat dari $144_b$ jika ditulis kembali dalam basis $b$ adalah...\n\nA. $10_b$\nB. $12_b$\nC. $14_b$\nD. $22_b$',
          answer: 'B. $12_b$',
          principle:
            'Ekspansi polinomial bilangan basis $b$ dan pemfaktoran bentuk kuadrat sempurna.',
          solution:
            'Ubah $144_b$ ke bentuk aljabar: $144_b = 1(b^2) + 4(b) + 4 = (b + 2)^2$. Maka akar kuadratnya adalah $b + 2$. Karena $b \\ge 5$, bilangan $b + 2 = 1 \\cdot b + 2$ ditulis dalam basis $b$ sebagai $12_b$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'A mathematical operation is defined as $x \\oplus y = \\frac{x \\times y}{x + y}$. If the equation $(12 \\oplus 6) \\oplus k = 2$ holds true, what is the value of $k$?\n\nA. 2\nB. 4\nC. 6\nD. 8',
          answer: 'B. 4',
          principle:
            'Sequential substitution into a custom binary operation and solving the resulting linear equation.',
          solution:
            'First compute $12 \\oplus 6 = \\frac{12 \\times 6}{12 + 6} = \\frac{72}{18} = 4$. Substituting into $(12 \\oplus 6) \\oplus k = 2$ gives $4 \\oplus k = 2$, so $\\frac{4k}{4 + k} = 2 \\implies 4k = 8 + 2k \\implies 2k = 8 \\implies k = 4$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Perhatikan pola barisan bilangan berikut: $1, 2, 4, 7, 11, 16, \\dots$ Bilangan pada urutan ke-$100$ adalah...\n\nA. 4950\nB. 4951\nC. 5050\nD. 5051',
          answer: 'B. 4951',
          principle:
            'Barisan bertingkat dengan selisih antarsuku $+1, +2, +3, \\dots$ dan rumus jumlah deret aritmetika.',
          solution:
            'Selisih antar suku berturut-turut adalah $+1, +2, +3, +4, \\dots$, sehingga suku ke-$n$ memenuhi $U_n = 1 + (1 + 2 + 3 + \\dots + (n - 1))$. Untuk $n = 100$:\n$$U_{100} = 1 + \\frac{99 \\times 100}{2} = 1 + 4950 = 4951$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'How many prime numbers $p$ exist such that the value of $p^2 + 2$ is also a prime number?\n\nA. 0\nB. 1\nC. 2\nD. Infinitely many',
          answer: 'B. 1',
          principle:
            'Modular arithmetic modulo $3$: every integer $p$ not divisible by $3$ satisfies $p^2 \\equiv 1 \\pmod{3}$.',
          solution:
            'If $p = 3$, then $p^2 + 2 = 9 + 2 = 11$, which is prime. For any other prime $p \\neq 3$, $p$ is not divisible by $3$, so $p \\equiv 1$ or $2 \\pmod{3}$, giving $p^2 \\equiv 1 \\pmod{3}$ and $p^2 + 2 \\equiv 3 \\equiv 0 \\pmod{3}$. Since $p^2 + 2 > 3$, it is composite. Thus, only $1$ prime ($p = 3$) exists.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Dua buah bilangan bulat positif $A$ dan $B$ memiliki FPB $15$ dan KPK $180$. Jika diketahui $A$ dan $B$ bukanlah kelipatan satu sama lain, berapakah nilai mutlak dari selisih $A$ dan $B$?\n\nA. 15\nB. 30\nC. 45\nD. 60',
          answer: 'A. 15',
          principle:
            'Pemfaktoran FPB dan KPK: jika $\\operatorname{FPB}(A, B) = d$, maka $A = dx$ dan $B = dy$ dengan $\\operatorname{FPB}(x, y) = 1$ dan $\\operatorname{KPK}(A, B) = dxy$.',
          solution:
            'Misalkan $A = 15x$ dan $B = 15y$ dengan $x$ dan $y$ saling prima. Maka $\\operatorname{KPK}(A, B) = 15xy = 180 \\implies xy = 12$. Pasangan $(x, y)$ yang saling prima adalah $(1, 12)$ dan $(3, 4)$. Pasangan $(1, 12)$ menghasilkan $15$ dan $180$ (saling kelipatan, gugur). Pasangan $(3, 4)$ menghasilkan $45$ dan $60$ (bukan kelipatan satu sama lain). Selisih mutlaknya adalah $|60 - 45| = 15$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'The infinite repeating decimal $0.abcabc\\dots$ (where $a$, $b$, and $c$ are single digits) is exactly equal to the fraction $\\frac{17}{37}$. What is the sum of the digits $a + b + c$?\n\nA. 15\nB. 17\nC. 18\nD. 20',
          answer: 'C. 18',
          principle:
            'Converting a $3$-digit repeating decimal $0.\\overline{abc}$ to $\\frac{\\overline{abc}}{999}$ using $37 \\times 27 = 999$.',
          solution:
            'A repeating decimal $0.abcabc\\dots$ equals $\\frac{\\overline{abc}}{999}$. Multiplying numerator and denominator of $\\frac{17}{37}$ by $27$ gives $\\frac{17 \\times 27}{37 \\times 27} = \\frac{459}{999}$. Therefore, $a = 4$, $b = 5$, and $c = 9$, so $a + b + c = 4 + 5 + 9 = 18$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Sebuah bilangan $2$-digit dalam basis $7$ memiliki nilai yang sama persis jika digit-digitnya ditulis secara terbalik pada sistem basis $9$. Bilangan berapakah itu jika ditulis secara normal dalam basis $10$ (desimal)?\n\nA. 21\nB. 31\nC. 41\nD. 51',
          answer: 'B. 31',
          principle:
            'Representasi nilai tempat bilangan basis $7$ dan basis $9$ serta syarat digit valid.',
          solution:
            'Misalkan bilangan tersebut adalah $\\overline{ab}_7 = \\overline{ba}_9$, dengan syarat bilangan $2$-digit yang valid di kedua basis yaitu $1 \\le a, b < 7$. Konversikan ke basis $10$:\n$$7a + b = 9b + a \\implies 6a = 8b \\implies 3a = 4b$$\nKarena $\\operatorname{FPB}(3, 4) = 1$, maka $a$ harus habis dibagi $4$. Dengan syarat $1 \\le a < 7$, satu-satunya nilai yang mungkin adalah $a = 4$, sehingga $b = \\frac{3 \\times 4}{4} = 3$. Dalam basis $10$, nilainya adalah $(4 \\times 7) + 3 = 31$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'If $a$, $b$, and $c$ are three distinct positive integers such that $a \\times b \\times c = 120$, what is the minimum possible value of their sum $a + b + c$?\n\nA. 15\nB. 16\nC. 18\nD. 21',
          answer: 'A. 15',
          principle:
            'Minimizing the sum of positive factors with a fixed product by choosing distinct factors as close to each other as possible.',
          solution:
            'Factor $120 = 2^3 \\times 3 \\times 5$, and order the three distinct positive integers as $a < b < c$. Since $a \\ge 5$ would imply $a \\times b \\times c \\ge 5 \\times 6 \\times 7 = 210 > 120$, we must have $a \\in \\{1, 2, 3, 4\\}$:\n- If $a = 1$, then $bc = 120$ (with $b, c > 1$); the closest factor pair is $(10, 12)$, giving sum $1 + 10 + 12 = 23$.\n- If $a = 2$, then $bc = 60$ (with $b, c > 2$); the closest factor pair is $(6, 10)$, giving sum $2 + 6 + 10 = 18$.\n- If $a = 3$, then $bc = 40$ (with $b, c > 3$); the closest factor pair is $(5, 8)$, giving sum $3 + 5 + 8 = 16$.\n- If $a = 4$, then $bc = 30$ (with $b, c > 4$); the closest factor pair is $(5, 6)$, giving sum $4 + 5 + 6 = 15$.\n\nThus, the minimum possible sum is $4 + 5 + 6 = 15$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Diketahui $p$ dan $q$ adalah bilangan prima yang memenuhi persamaan $p^2 - q^2 = 24$. Berapakah nilai dari $p + q$?\n\nA. 8\nB. 10\nC. 12\nD. 14',
          answer: 'C. 12',
          principle:
            'Pemfaktoran selisih dua kuadrat $p^2 - q^2 = (p - q)(p + q)$ dan kesamaan paritas faktor.',
          solution:
            'Faktorkan persamaan menjadi $(p - q)(p + q) = 24$. Faktor dari $24$ yang keduanya berparitas sama (sama-sama genap) adalah $(2, 12)$ atau $(4, 6)$. Jika $p - q = 4$ dan $p + q = 6$, didapat $p = 5$ dan $q = 1$ (bukan prima). Jika $p - q = 2$ dan $p + q = 12$, didapat $p = 7$ dan $q = 5$ (keduanya prima). Jadi, $p + q = 12$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'What is the value of the expression $101_2 \\times 101_3 \\times 101_4$ when converted and evaluated in the standard base-$10$ system?\n\nA. 850\nB. 860\nC. 950\nD. 1050',
          answer: 'A. 850',
          principle:
            'Positional base-$b$ conversion: $101_b = 1 \\cdot b^2 + 0 \\cdot b + 1 = b^2 + 1$.',
          solution:
            'Convert each number to base $10$:\n- $101_2 = (1 \\times 4) + (0 \\times 2) + 1 = 5$\n- $101_3 = (1 \\times 9) + (0 \\times 3) + 1 = 10$\n- $101_4 = (1 \\times 16) + (0 \\times 4) + 1 = 17$\n\nThe product is $5 \\times 10 \\times 17 = 850$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Berapakah sisa pembagian jika deret tak hingga $1! + 2! + 3! + 4! + \\dots + 2026!$ dibagi oleh $10$?\n\nA. 1\nB. 3\nC. 5\nD. 7',
          answer: 'B. 3',
          principle:
            'Sifat keterbagian faktorial oleh $10$: untuk setiap $n \\ge 5$, nilai $n!$ selalu habis dibagi $10$.',
          solution:
            'Faktorial $5! = 120$ dan seterusnya selalu berakhiran angka $0$, sehingga habis dibagi $10$ dan tidak memengaruhi sisa pembagian. Cukup hitung jumlah empat suku pertama:\n$$1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33$$\nSisa pembagian $33$ oleh $10$ adalah $3$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'What is the maximum possible Greatest Common Factor (GCF) of three strictly distinct positive integers whose Least Common Multiple (LCM) is exactly $1000$?\n\nA. 100\nB. 125\nC. 200\nD. 250',
          answer: 'D. 250',
          principle:
            'Every number in the set must divide the LCM ($1000$) and be a multiple of the GCF, so the GCF cannot exceed the third largest divisor of $1000$.',
          solution:
            'The three strictly distinct positive integers must be divisors of $1000$. The three largest divisors of $1000$ are $1000$, $500$, and $250$, whose LCM is $1000$ and whose GCF is $250$. No larger GCF is possible because if $g > 250$ divides $1000$, $1000$ has fewer than three multiples of $g$ dividing it. Thus, the maximum GCF is $250$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Tentukan nilai $x$ yang memenuhi persamaan pecahan berantai (telescoping product) berikut: $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\dots \\times \\frac{x}{x+1} = \\frac{1}{100}$.\n\nA. 98\nB. 99\nC. 100\nD. 101',
          answer: 'B. 99',
          principle:
            'Perkalian teleskopik: penyebut setiap pecahan saling meniadakan dengan pembilang pecahan berikutnya.',
          solution:
            'Pada perkalian $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\dots \\times \\frac{x}{x+1}$, faktor $2, 3, \\dots, x$ saling mencoret sehingga hanya tersisa pembilang pertama ($1$) dan penyebut terakhir ($x + 1$). Diperoleh $\\frac{1}{x + 1} = \\frac{1}{100}$, sehingga $x + 1 = 100 \\implies x = 99$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'An operation is defined as $x \\otimes y = (x \\times y) + x + y$. If $a \\otimes a = 120$ for a positive integer $a$, what is the value of $a$?\n\nA. 8\nB. 10\nC. 11\nD. 12',
          answer: 'B. 10',
          principle:
            'Substituting into a defined binary operation and solving the resulting quadratic equation (or using $x \\otimes y = (x + 1)(y + 1) - 1$).',
          solution:
            'Substitute $x = y = a$: $a \\otimes a = a^2 + a + a = a^2 + 2a = 120$. Rearranging gives $a^2 + 2a - 120 = 0$, which factors as $(a + 12)(a - 10) = 0$. Since $a$ is a positive integer, $a = 10$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Tiga orang remaja (berusia belasan tahun) memiliki hasil kali umur tepat $4.590$. Berapakah jumlah umur ketiga remaja tersebut?\n\nA. 48\nB. 50\nC. 51\nD. 52',
          answer: 'B. 50',
          principle:
            'Faktorisasi prima dan pengelompokan faktor ke dalam rentang bilangan belasan ($13$–$19$).',
          solution:
            'Faktorkan $4590 = 10 \\times 459 = 2 \\times 5 \\times 9 \\times 51 = 2 \\times 3^3 \\times 5 \\times 17$. Usia remaja berada di rentang $13$–$19$ tahun:\n- Faktor prima $17$ tidak bisa dikalikan dengan faktor prima lain karena $2 \\times 17 = 34 > 19$, sehingga salah satu remaja pasti berusia $17$ tahun.\n- Sisa hasil kali dua usia lainnya adalah $2 \\times 3^3 \\times 5 = 270$. Faktor prima $5$ hanya dapat membentuk bilangan belasan jika dipasangkan dengan $3$, menghasilkan $3 \\times 5 = 15$ ($2 \\times 5 = 10$ terlalu kecil dan $5 \\times 9 = 45$ terlalu besar).\n- Faktor yang tersisa adalah $2 \\times 3^2 = 18$.\n\nJadi usia ketiga remaja adalah $15$, $17$, dan $18$ tahun, dengan jumlah $15 + 17 + 18 = 50$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'The equation $123_x + 321_x = 444_x$ holds true for which values of the numerical base $x$?\n\nA. Only $x = 5$\nB. Only $x = 10$\nC. Any base $x \\ge 4$\nD. Any base $x \\ge 5$',
          answer: 'D. Any base $x \\ge 5$',
          principle:
            'Column-wise base-$x$ addition without carry-overs and the valid-digit constraint ($\\text{digit} < x$).',
          solution:
            'Adding column by column gives $3 + 1 = 4$, $2 + 2 = 4$, and $1 + 3 = 4$ with no carry-overs, so $(x^2 + 2x + 3) + (3x^2 + 2x + 1) = 4x^2 + 4x + 4$ holds identically. However, for the digit $4$ to be valid in base $x$, we must have $x > 4$, meaning any base $x \\ge 5$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Berapakah banyak angka nol ($0$) berurutan yang ada di bagian paling akhir dari bilangan hasil $100!$ ($100$ faktorial)?\n\nA. 20\nB. 21\nC. 24\nD. 25',
          answer: 'C. 24',
          principle:
            'Teorema Legendre untuk menghitung banyaknya faktor prima $5$ pada $n!$, karena pasangan $2 \\times 5$ menghasilkan angka nol di akhir.',
          solution:
            'Setiap angka $0$ di akhir bilangan berasal dari satu pasangan faktor $2 \\times 5 = 10$. Dalam perkalian $100! = 1 \\times 2 \\times \\dots \\times 100$, faktor prima $2$ muncul jauh lebih banyak daripada faktor prima $5$ (ada $\\lfloor 100/2 \\rfloor = 50$ kelipatan $2$), sehingga banyaknya angka nol ditentukan sepenuhnya oleh pangkat faktor prima $5$ (Teorema Legendre).\n- Setiap kelipatan $5$ menyumbang sedikitnya satu faktor $5$: $\\left\\lfloor \\frac{100}{5} \\right\\rfloor = 20$.\n- Setiap kelipatan $25 = 5^2$ menyumbang satu faktor $5$ tambahan: $\\left\\lfloor \\frac{100}{25} \\right\\rfloor = 4$.\n- Kelipatan $125 = 5^3$ tidak ada karena $125 > 100$.\n\nTotal faktor $5$ pada $100!$ adalah $20 + 4 = 24$, sehingga terdapat $24$ angka nol berurutan di akhir $100!$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Evaluate the nested complex fraction: $1 - \\dfrac{1}{1 + \\dfrac{1}{1 + \\frac{1}{2}}}$.\n\nA. $1/5$\nB. $2/5$\nC. $3/5$\nD. $4/5$',
          answer: 'B. 2/5',
          principle:
            'Simplifying a nested continued fraction step by step from the innermost denominator outward.',
          solution:
            'Work from the innermost fraction outward:\n- $1 + \\frac{1}{2} = \\frac{3}{2}$\n- $\\frac{1}{3/2} = \\frac{2}{3}$\n- $1 + \\frac{2}{3} = \\frac{5}{3}$\n- $\\frac{1}{5/3} = \\frac{3}{5}$\n- $1 - \\frac{3}{5} = \\frac{2}{5}$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Tentukan jumlah seluruh bilangan prima $p$ yang memenuhi kondisi bahwa $p + 20$ dan $p + 40$ juga merupakan bilangan prima.\n\nA. 3\nB. 10\nC. 13\nD. 16',
          answer: 'A. 3',
          principle:
            'Analisis sisa pembagian modulo $3$ pada tiga bilangan $p$, $p + 20$, dan $p + 40$.',
          solution:
            'Jika $p = 3$, maka $p + 20 = 23$ (prima) dan $p + 40 = 43$ (prima). Untuk setiap bilangan prima $p > 3$, $p$ berbentuk $3k + 1$ atau $3k + 2$. Jika $p = 3k + 1$, maka $p + 20 = 3k + 21$ (kelipatan $3$, komposit). Jika $p = 3k + 2$, maka $p + 40 = 3k + 42$ (kelipatan $3$, komposit). Jadi hanya $p = 3$ yang memenuhi, sehingga jumlahnya adalah $3$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'If $a$ and $b$ are positive integers such that $a^2 - b^2 = 2024$, what is the absolute maximum possible value of $a$?\n\nA. 505\nB. 506\nC. 507\nD. 1012',
          answer: 'C. 507',
          principle:
            'Difference of squares factorization $a^2 - b^2 = (a - b)(a + b)$ using same-parity factor pairs of $2024$.',
          solution:
            'Factor as $(a - b)(a + b) = 2024$. Since $a - b$ and $a + b$ have the same parity and their product is even, both factors must be even. To maximize $a = \\frac{(a - b) + (a + b)}{2}$, maximize $a + b$ by setting $a - b = 2$ and $a + b = 1012$. Adding gives $2a = 1014 \\implies a = 507$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Sebuah pecahan disederhanakan menjadi $\\frac{7}{11}$. Kelipatan Persekutuan Terkecil (KPK) dari pembilang dan penyebut asli pecahan tersebut (sebelum disederhanakan) adalah $385$. Berapakah jumlah pembilang dan penyebut asli tersebut?\n\nA. 70\nB. 80\nC. 90\nD. 100',
          answer: 'C. 90',
          principle:
            'Bentuk umum pecahan ekuivalen $\\frac{7k}{11k}$ dan hubungan $\\operatorname{KPK}(7k, 11k) = 77k$.',
          solution:
            'Pecahan asli dapat ditulis sebagai $\\frac{7k}{11k}$ untuk suatu bilangan asli $k$. Karena $7$ dan $11$ saling prima, $\\operatorname{KPK}(7k, 11k) = 77k$. Diketahui $77k = 385 \\implies k = 5$. Pembilang asli $= 7 \\times 5 = 35$ dan penyebut asli $= 11 \\times 5 = 55$, sehingga jumlahnya adalah $35 + 55 = 90$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Isian Singkat',
      marks: 15,
      stem: 'Isilah jawaban singkat dan eksak untuk setiap soal berikut.',
      parts: [
        {
          label: '26',
          marks: 1,
          prompt:
            'What is the exact number of digits in the expanded base-$10$ evaluation of $8^{20} \\times 25^{28}$?',
          answer: '58',
          answerNumeric: [{ name: 'digits', value: 58 }],
          principle:
            'Prime factorization and pairing factors of $2$ and $5$ to form powers of $10$ ($2 \\times 5 = 10$).',
          solution:
            'Express both factors in prime bases:\n$$8^{20} \\times 25^{28} = (2^3)^{20} \\times (5^2)^{28} = 2^{60} \\times 5^{56} = 2^4 \\times (2^{56} \\times 5^{56}) = 16 \\times 10^{56}$$\nThis number is $16$ followed by $56$ zeros, giving $2 + 56 = 58$ digits.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Jumlah dua bilangan bulat positif adalah $100$, dan Faktor Persekutuan Terbesar (FPB) mereka adalah $10$. Berapa banyak pasangan tak terurut dari kedua bilangan tersebut yang memenuhi syarat?',
          answer: '2',
          answerNumeric: [{ name: 'count', value: 2 }],
          principle:
            'Menuliskan kedua bilangan sebagai $10x$ dan $10y$ dengan syarat $\\operatorname{FPB}(x, y) = 1$.',
          solution:
            'Misalkan kedua bilangan adalah $10x$ dan $10y$ dengan $x$ dan $y$ bilangan bulat positif yang saling prima ($\\operatorname{FPB}(x, y) = 1$). Maka $10x + 10y = 100 \\implies x + y = 10$. Semua pasangan tak terurut $(x, y)$ dengan $x \\le y$ yang berjumlah $10$ adalah $(1, 9)$, $(2, 8)$, $(3, 7)$, $(4, 6)$, dan $(5, 5)$. Pasangan $(2, 8)$, $(4, 6)$, dan $(5, 5)$ gugur karena FPB-nya berturut-turut $2$, $2$, dan $5$. Hanya $(1, 9)$ dan $(3, 7)$ yang saling prima, menghasilkan pasangan $(10, 90)$ dan $(30, 70)$, sehingga ada $2$ pasangan.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '28',
          marks: 1,
          prompt:
            "A book has its pages numbered consecutively from $1$ to $N$. The digit '7' is printed exactly $20$ times in the page numbers. What is the absolute maximum possible value of $N$?",
          answer: '106',
          answerNumeric: [{ name: 'N', value: 106 }],
          principle:
            'Systematic digit counting by place value up to the $21$st occurrence of the digit $7$.',
          solution:
            'Count occurrences of the digit $7$: pages $7, 17, 27, 37, 47, 57, 67$ contribute $7$ times; the $70$s block ($70$–$79$) has ten $7$s in the tens place and one in the units place ($77$), adding $11$ (total $18$). The $19$th occurs at $87$ and the $20$th at $97$. The $21$st occurrence is at page $107$, so the maximum possible value of $N$ is $106$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Hitunglah hasil dari operasi deret kuadrat bergantian berikut: $2026^2 - 2025^2 + 2024^2 - 2023^2 + \\dots + 2^2 - 1^2$.',
          answer: '2.053.351',
          answerNumeric: [{ name: 'sum', value: 2053351 }],
          principle:
            'Pemfaktoran selisih dua kuadrat $a^2 - b^2 = (a - b)(a + b)$ berpasangan dan rumus jumlah deret aritmetika $\\frac{n(n+1)}{2}$.',
          solution:
            'Kelompokkan berpasangan dan faktorkan tiap pasang menggunakan $a^2 - b^2 = (a - b)(a + b)$:\n$$(2026^2 - 2025^2) + (2024^2 - 2023^2) + \\dots + (2^2 - 1^2) = 2026 + 2025 + 2024 + 2023 + \\dots + 2 + 1$$\nDengan rumus jumlah $n$ bilangan asli pertama:\n$$\\frac{2026 \\times 2027}{2} = 1013 \\times 2027 = 2.053.351$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'How many positive integer pairs $(x, y)$ satisfy the Diophantine equation $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{5}$?',
          answer: '3',
          answerNumeric: [{ name: 'pairs', value: 3 }],
          principle:
            'Clearing denominators and applying Simon’s Favorite Factoring Trick: $(x - 5)(y - 5) = 25$.',
          solution:
            'Multiply both sides by $5xy$ to obtain $5y + 5x = xy \\implies xy - 5x - 5y = 0$. Add $25$ to both sides and factor: $(x - 5)(y - 5) = 25$. For positive integers $x, y$, we need $x - 5 > -5$ and $y - 5 > -5$, which excludes negative factor pairs of $25$. The positive factor pairs $(1, 25)$, $(5, 5)$, and $(25, 1)$ yield $(6, 30)$, $(10, 10)$, and $(30, 6)$, giving $3$ valid ordered pairs.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '31',
          marks: 1,
          prompt: 'Berapakah jumlah dari seluruh faktor pembagi positif dari bilangan $1.000$?',
          answer: '2340',
          answerNumeric: [{ name: 'sum', value: 2340 }],
          principle:
            'Fungsi jumlah pembagi $\\sigma(n)$ dari faktorisasi prima $1000 = 2^3 \\times 5^3$.',
          solution:
            'Faktorisasi prima dari $1000$ adalah $2^3 \\times 5^3$. Setiap faktor pembagi positif dari $1000$ berbentuk $2^a \\times 5^b$ dengan $a \\in \\{0, 1, 2, 3\\}$ dan $b \\in \\{0, 1, 2, 3\\}$. Jika kita menjabarkan hasil kali $(2^0 + 2^1 + 2^2 + 2^3)(5^0 + 5^1 + 5^2 + 5^3)$ dengan sifat distributif, setiap suku $2^a \\times 5^b$ muncul tepat satu kali sehingga hasilnya sama dengan jumlah seluruh $4 \\times 4 = 16$ faktor pembagi positif tersebut:\n$$(1 + 2 + 4 + 8) \\times (1 + 5 + 25 + 125) = 15 \\times 156 = 2340$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'Find the sum of all distinct real values of $x$ that satisfy the equation $(x - 2)^{x^2 - 9} = 1$.',
          answer: '1',
          answerNumeric: [{ name: 'sum', value: 1 }],
          principle:
            'Solving $A^B = 1$ across all three cases: $B = 0$ ($A \\neq 0$), $A = 1$, and $A = -1$ ($B$ even).',
          solution:
            'Evaluate all three cases for $A^B = 1$:\n- Case 1 ($B = 0$): $x^2 - 9 = 0 \\implies x = 3$ or $x = -3$ (base $x - 2 \\neq 0$, both valid).\n- Case 2 ($A = 1$): $x - 2 = 1 \\implies x = 3$ (already counted).\n- Case 3 ($A = -1$): $x - 2 = -1 \\implies x = 1$; exponent $1^2 - 9 = -8$ is even, so $(-1)^{-8} = 1$ (valid).\n\nThe distinct real solutions are $3$, $-3$, and $1$, whose sum is $3 + (-3) + 1 = 1$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Konversikan bilangan desimal $2026$ (basis $10$) menjadi bentuk bilangan pada sistem basis $5$!',
          answer: '$31101_5$',
          principle:
            'Konversi basis $10$ ke basis $5$ dengan pembagian berulang oleh $5$ dan membaca sisa dari bawah ke atas.',
          solution:
            'Bagi $2026$ dengan $5$ secara berulang:\n- $2026 \\div 5 = 405$ sisa $1$\n- $405 \\div 5 = 81$ sisa $0$\n- $81 \\div 5 = 16$ sisa $1$\n- $16 \\div 5 = 3$ sisa $1$\n- $3 \\div 5 = 0$ sisa $3$\n\nMembaca sisa pembagian dari bawah ke atas menghasilkan $31101_5$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '34',
          marks: 1,
          prompt:
            'Let $A = \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27} + \\frac{1}{81} + \\dots$ (continuing infinitely). What is the exact fraction value of $A$?',
          answer: '$\\frac{1}{2}$',
          answerNumeric: [{ name: 'A', value: 0.5 }],
          principle:
            'Sum of an infinite geometric series $S_\\infty = \\frac{a}{1 - r}$ for $|r| < 1$.',
          solution:
            'Notice that every term after the first is $\\frac{1}{3}$ of the previous term. Multiply both sides of $A = \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27} + \\frac{1}{81} + \\dots$ by $3$:\n$$3A = 1 + \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27} + \\dots = 1 + A$$\nSubtracting $A$ from both sides gives $2A = 1$, so $A = \\frac{1}{2}$ (which also matches the geometric series formula $\\frac{a}{1 - r} = \\frac{1/3}{1 - 1/3} = \\frac{1}{2}$).',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'Dalam sebuah barisan bilangan $A_n$, suku pertama $A_1 = 2$, suku kedua $A_2 = 5$, dan aturan untuk suku berikutnya adalah $A_n = 2A_{n-1} - A_{n-2}$. Berapakah nilai dari $A_{100}$?',
          answer: '299',
          answerNumeric: [{ name: 'A100', value: 299 }],
          principle:
            'Relasi rekurensi $A_n - A_{n-1} = A_{n-1} - A_{n-2}$ merupakan barisan aritmetika dengan beda tetap.',
          solution:
            'Aturan $A_n = 2A_{n-1} - A_{n-2}$ dapat ditulis menjadi $A_n - A_{n-1} = A_{n-1} - A_{n-2}$, sehingga selisih antarsuku selalu konstan (barisan aritmetika). Dengan $A_1 = 2$ dan $A_2 = 5$, bedanya adalah $b = 5 - 2 = 3$. Maka:\n$$A_{100} = A_1 + 99b = 2 + 99 \\times 3 = 2 + 297 = 299$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '36',
          marks: 1,
          prompt:
            'If $p$, $q$, and $r$ are prime numbers such that $p \\times q \\times r = 1001$, what is the value of $p + q + r$?',
          answer: '31',
          answerNumeric: [{ name: 'sum', value: 31 }],
          principle:
            'Unique prime factorization of $1001 = 7 \\times 11 \\times 13$.',
          solution:
            'Find the prime factorization of $1001$: $1001 = 7 \\times 143 = 7 \\times 11 \\times 13$. Therefore, the three primes are $7$, $11$, and $13$, and their sum is $7 + 11 + 13 = 31$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '37',
          marks: 1,
          prompt:
            'Diberikan dua bilangan positif yang saling berbeda, $X$ dan $Y$. Jika Kelipatan Persekutuan Terkecil (KPK) dari $X$ dan $Y$ adalah $72$, berapakah nilai terbesar yang mungkin untuk $X + Y$?',
          answer: '108',
          answerNumeric: [{ name: 'maxSum', value: 108 }],
          principle:
            'Memilih dua pembagi berbeda terbesar dari KPK ($72$) yang tetap mempertahankan nilai KPK $= 72$.',
          solution:
            'Agar $X + Y$ maksimum dengan $\\operatorname{KPK}(X, Y) = 72$ dan $X \\neq Y$, pilih dua faktor pembagi positif terbesar yang berbeda dari $72$, yaitu $72$ dan $36$. Karena $\\operatorname{KPK}(72, 36) = 72$, nilai maksimum $X + Y = 72 + 36 = 108$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '38',
          marks: 1,
          prompt:
            'Evaluate the product: $\\left(1 - \\frac{1}{2^2}\\right) \\times \\left(1 - \\frac{1}{3^2}\\right) \\times \\left(1 - \\frac{1}{4^2}\\right) \\times \\dots \\times \\left(1 - \\frac{1}{20^2}\\right)$.',
          answer: '$\\frac{21}{40}$',
          answerNumeric: [{ name: 'product', value: 0.525 }],
          principle:
            'Difference of squares factorization $1 - \\frac{1}{k^2} = \\frac{k-1}{k} \\times \\frac{k+1}{k}$ creating a telescoping product.',
          solution:
            'Factor each term using the difference of squares $1 - \\frac{1}{k^2} = \\frac{k^2 - 1}{k^2} = \\frac{k - 1}{k} \\times \\frac{k + 1}{k}$:\n$$\\left(\\frac{1}{2} \\cdot \\frac{3}{2}\\right) \\times \\left(\\frac{2}{3} \\cdot \\frac{4}{3}\\right) \\times \\left(\\frac{3}{4} \\cdot \\frac{5}{4}\\right) \\times \\dots \\times \\left(\\frac{19}{20} \\cdot \\frac{21}{20}\\right)$$\nEvery consecutive pair $\\frac{k + 1}{k} \\times \\frac{k}{k + 1}$ cancels to $1$, leaving only the very first factor $\\frac{1}{2}$ and the very last factor $\\frac{21}{20}$. Thus, the product is $\\frac{1}{2} \\times \\frac{21}{20} = \\frac{21}{40}$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '39',
          marks: 1,
          prompt:
            'Tentukan bilangan asli $x$ yang memenuhi persamaan akar berantai tak hingga: $\\sqrt{x + \\sqrt{x + \\sqrt{x + \\dots}}} = 5$.',
          answer: '20',
          answerNumeric: [{ name: 'x', value: 20 }],
          principle:
            'Sifat keserupaan diri (self-similarity) pada bentuk akar bersarang tak hingga $y = \\sqrt{x + y}$.',
          solution:
            'Misalkan $y = \\sqrt{x + \\sqrt{x + \\sqrt{x + \\dots}}} = 5$. Maka persamaan dapat ditulis sebagai $y = \\sqrt{x + y}$. Kuadratkan kedua ruas menjadi $y^2 = x + y$. Substitusikan $y = 5$ sehingga $5^2 = x + 5 \\implies 25 = x + 5 \\implies x = 20$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '40',
          marks: 1,
          prompt:
            'A train leaves a station exactly at 8:00 AM. Every $45$ minutes, another train leaves. If the station closes at 10:00 PM on the same day, how many trains leave the station in total that day?',
          answer: '19',
          answerNumeric: [{ name: 'trains', value: 19 }],
          principle:
            'Counting equally spaced departures with fencepost adjustment: $\\lfloor \\text{total time} / \\text{interval} \\rfloor + 1$.',
          solution:
            'The operating window from $8{:}00\\ \\text{AM}$ to $10{:}00\\ \\text{PM}$ spans $14$ hours, or $14 \\times 60 = 840$ minutes. Dividing by $45$ minutes gives $840 \\div 45 = 18$ complete intervals with a remainder of $30$ minutes. Including the initial train at $8{:}00\\ \\text{AM}$, a total of $18 + 1 = 19$ trains leave that day.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
