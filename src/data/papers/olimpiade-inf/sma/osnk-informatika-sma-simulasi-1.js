/**
 * Paket Soal Terstruktur: Simulasi OSN-K Informatika SMA — Paket 1
 * Materi kurasi asli Tim Akademik Duta e-dukasi (10 Soal Pilihan Ganda + 5 Soal Isian Singkat / Output Program).
 */
const OK1 = [{ code: 'A1', text: 'Jawaban pilihan ganda benar sesuai pembahasan.' }];
const R2 = [
  { code: 'M1', text: 'Analisis matematis atau pelacakan algoritma/kode yang tepat.' },
  { code: 'A1', text: 'Jawaban akhir atau keluaran program benar.' }
];

export default {
  id: 'osnk-inf-sma-simulasi-1',
  slug: 'osnk-informatika-sma-simulasi-1',
  subject: 'olimpiade-inf',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic:
    'Simulasi OSN-K Informatika SMA: logika analitik, kombinatorika, teori bilangan, graf dan pohon, serta pelacakan pseudocode/C++',
  relatedChapterIds: [
    'sma10-bab2-barisan-deret',
    'sma12-bab3-kaidah-pencacahan',
    'sma10-bab8-peluang'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'Simulasi OSN-K Informatika SMA \u2014 Paket 1',
  totalMarks: 20,
  instructions:
    'Paket simulasi ini terdiri atas 15 soal orisinal OSN-K Informatika SMA: Bagian A memuat 10 soal pilihan ganda (masing-masing 1 poin, total 10 poin) dan Bagian B memuat 5 soal isian singkat atau keluaran program C++ (masing-masing 2 poin, total 10 poin). Total skor maksimum adalah 20 poin.',
  source: {
    org: 'Tim Akademik Duta e-dukasi',
    file: 'original-curated-batch-9',
    license: 'Hak cipta materi kurasi asli Duta e-dukasi'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Soal Pilihan Ganda',
      marks: 10,
      stem: 'Pilihlah satu jawaban yang paling tepat (A, B, C, D, atau E) untuk setiap soal berikut (nomor 1\u201310, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Diketahui pernyataan majemuk $(p \\land \\neg q) \\rightarrow (r \\lor \\neg p)$ bernilai **Salah**. Manakah pernyataan di bawah ini yang pasti bernilai **Benar**?\n\nA. $\\neg p \\lor q$\nB. $(p \\land r) \\lor q$\nC. $\\neg q \\land \\neg r \\land p$\nD. $\\neg q \\rightarrow r$\nE. $(p \\lor q) \\rightarrow r$',
          answer: 'C. $\\neg q \\land \\neg r \\land p$',
          principle:
            'Sebuah implikasi $X \\rightarrow Y$ bernilai Salah hanya ketika anteseden $X$ bernilai Benar dan konsekuen $Y$ bernilai Salah.',
          solution:
            'Agar implikasi $(p \\land \\neg q) \\rightarrow (r \\lor \\neg p)$ bernilai Salah, haruslah:\n1. Anteseden $(p \\land \\neg q)$ bernilai Benar, sehingga $p = \\text{Benar}$ dan $\\neg q = \\text{Benar}$ (artinya $q = \\text{Salah}$).\n2. Konsekuen $(r \\lor \\neg p)$ bernilai Salah, sehingga $r = \\text{Salah}$ dan $\\neg p = \\text{Salah}$ (konsisten dengan $p = \\text{Benar}$).\n\nDengan penugasan tunggal $(p, q, r) = (\\text{Benar}, \\text{Salah}, \\text{Salah})$, kita periksa setiap opsi:\n- A: $\\neg p \\lor q = \\text{Salah} \\lor \\text{Salah} = \\text{Salah}$.\n- B: $(p \\land r) \\lor q = (\\text{Benar} \\land \\text{Salah}) \\lor \\text{Salah} = \\text{Salah}$.\n- C: $\\neg q \\land \\neg r \\land p = \\text{Benar} \\land \\text{Benar} \\land \\text{Benar} = \\text{Benar}$.\n- D: $\\neg q \\rightarrow r = \\text{Benar} \\rightarrow \\text{Salah} = \\text{Salah}$.\n- E: $(p \\lor q) \\rightarrow r = \\text{Benar} \\rightarrow \\text{Salah} = \\text{Salah}$.\n\nJadi hanya opsi C yang pasti bernilai Benar.',
          rubric: OK1
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Lima modul komputasi ($M_1, M_2, M_3, M_4, M_5$) dieksekusi secara berurutan pada slot waktu ke-$1$ hingga ke-$5$ (masing-masing tepat satu slot) dengan ketentuan:\n1. $M_1$ dieksekusi sebelum $M_3$, dan $M_1$ tidak berada pada slot ke-$1$.\n2. $M_4$ dieksekusi tepat satu slot setelah $M_2$.\n3. $M_5$ tidak berada pada slot ke-$1$ maupun slot ke-$5$.\n4. $M_2$ dieksekusi sebelum $M_1$.\n\nPernyataan manakah yang **pasti benar**?\n\nA. $M_1$ selalu berada pada slot ke-$3$\nB. $M_5$ selalu berada pada slot ke-$4$\nC. $M_4$ selalu berada pada slot ke-$2$\nD. $M_3$ dapat berada pada slot ke-$4$\nE. $M_2$ selalu berada pada slot ke-$2$',
          answer: 'C. $M_4$ selalu berada pada slot ke-$2$',
          principle:
            'Penalaran analitik melalui eliminasi posisi pada penjadwalan terurut menggunakan kendala relatif dan posisi terlarang.',
          solution:
            'Tinjau modul mana yang dapat menempati slot ke-$1$:\n- $M_1$ dilarang berada di slot ke-$1$ (syarat 1).\n- $M_3$ harus sesudah $M_1$ (syarat 1), sehingga tidak mungkin di slot ke-$1$.\n- $M_4$ tepat setelah $M_2$ (syarat 2), sehingga tidak mungkin di slot ke-$1$.\n- $M_5$ dilarang berada di slot ke-$1$ (syarat 3).\n\nSatu-satunya modul yang tersisa untuk slot ke-$1$ adalah $M_2$. Karena $M_4$ tepat satu slot setelah $M_2$ (syarat 2), maka $M_4$ **pasti** berada pada slot ke-$2$.\n\nSelanjutnya, slot ke-$5$ tidak dapat diisi $M_5$ (syarat 3) dan tidak dapat diisi $M_1$ (karena $M_1$ sebelum $M_3$), sehingga slot ke-$5$ **pasti** diisi $M_3$. Tersisa slot ke-$3$ dan ke-$4$ untuk $M_1$ dan $M_5$, yang menghasilkan tepat dua urutan valid: $(M_2, M_4, M_1, M_5, M_3)$ dan $(M_2, M_4, M_5, M_1, M_3)$. Oleh karena itu, pernyataan yang pasti benar adalah $M_4$ selalu berada pada slot ke-$2$.',
          rubric: OK1
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Banyaknya string terner dengan panjang $6$ yang tersusun dari angka $\\{0, 1, 2\\}$ sehingga memuat **tepat dua** angka $0$ dan **tidak ada** dua angka $0$ yang bersebelahan adalah $\\cdots$\n\nA. $96$\nB. $120$\nC. $144$\nD. $160$\nE. $240$',
          answer: 'D. $160$',
          principle:
            'Pemilihan $k$ posisi tidak bersebelahan dari $n$ posisi berjumlah $\\binom{n - k + 1}{k}$, dikalikan banyaknya pengisian sisa posisi (aturan perkalian).',
          solution:
            'Terlebih dahulu, tentukan posisi untuk kedua angka $0$ di antara $6$ posisi agar tidak bersebelahan. Jika terdapat $4$ posisi bukan-$0$, tersedia $4 + 1 = 5$ celah (sebelum, di antara, dan sesudah keempat posisi bukan-$0$) untuk menyisipkan $2$ angka $0$ sehingga tidak ada dua angka $0$ yang bersebelahan.\n\nBanyaknya cara memilih posisi untuk kedua angka $0$ adalah:\n$$\\binom{6 - 2 + 1}{2} = \\binom{5}{2} = \\frac{5 \\times 4}{2} = 10.$$\n\nSetelah posisi kedua angka $0$ ditetapkan, keempat posisi lainnya harus diisi dengan angka $1$ atau $2$ (masing-masing $2$ pilihan), yaitu sebanyak $2^4 = 16$ cara.\n\nDengan aturan perkalian, total string terner yang memenuhi adalah:\n$$10 \\times 16 = 160.$$',
          rubric: OK1
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Tentukan sisa pembagian $5^{2025} + 3^{2026}$ oleh $11$.\n\nA. $1$\nB. $2$\nC. $4$\nD. $6$\nE. $8$',
          answer: 'C. $4$',
          principle:
            'Aritmetika modular dan orde perkalian (Teorema Kecil Fermat) untuk mereduksi pangkat besar modulo bilangan prima.',
          solution:
            'Periksa perpangkatan kecil dari $5$ dan $3$ modulo $11$:\n- Untuk basis $5$: $5^2 = 25 \\equiv 3$, $5^3 \\equiv 15 \\equiv 4$, $5^4 \\equiv 20 \\equiv 9$, dan $5^5 \\equiv 45 \\equiv 1 \\pmod{11}$.\n- Untuk basis $3$: $3^2 = 9$, $3^3 = 27 \\equiv 5$, $3^4 \\equiv 15 \\equiv 4$, dan $3^5 \\equiv 12 \\equiv 1 \\pmod{11}$.\n\nKarena $2025 = 5 \\times 405$ dan $2026 = 5 \\times 405 + 1$, diperoleh:\n$$5^{2025} = (5^5)^{405} \\equiv 1^{405} = 1 \\pmod{11},$$\n$$3^{2026} = (3^5)^{405} \\cdot 3^1 \\equiv 1^{405} \\cdot 3 = 3 \\pmod{11}.$$\n\nDengan demikian:\n$$5^{2025} + 3^{2026} \\equiv 1 + 3 = 4 \\pmod{11}.$$',
          rubric: OK1
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Barisan $(f(n))$ didefinisikan oleh $f(0) = 1$, $f(1) = 2$, dan untuk setiap $n \\ge 2$ berlaku\n$$f(n) = (2f(n-1) + f(n-2)) \\bmod 7.$$\nNilai dari $f(2026)$ adalah $\\cdots$\n\nA. $1$\nB. $2$\nC. $4$\nD. $5$\nE. $6$',
          answer: 'A. $1$',
          principle:
            'Rekurensi linear modulo bilangan bulat $m$ selalu bersifat periodik pada akhirnya karena pasangan keadaan berurutan $(f(n-1), f(n))$ berjumlah hingga.',
          solution:
            'Hitung nilai $f(n)$ secara berurutan hingga pasangan $(f(n), f(n+1))$ kembali ke $(1, 2)$:\n- $f(0) = 1$\n- $f(1) = 2$\n- $f(2) = (2(2) + 1) \\bmod 7 = 5$\n- $f(3) = (2(5) + 2) \\bmod 7 = 12 \\bmod 7 = 5$\n- $f(4) = (2(5) + 5) \\bmod 7 = 15 \\bmod 7 = 1$\n- $f(5) = (2(1) + 5) \\bmod 7 = 7 \\bmod 7 = 0$\n- $f(6) = (2(0) + 1) \\bmod 7 = 1$\n- $f(7) = (2(1) + 0) \\bmod 7 = 2$\n\nKarena $(f(6), f(7)) = (1, 2) = (f(0), f(1))$, barisan berulang secara periodik dengan periode $6$: $[1, 2, 5, 5, 1, 0]$.\n\nKarena $2026 = 6 \\times 337 + 4$, maka:\n$$f(2026) = f(2026 \\bmod 6) = f(4) = 1.$$',
          rubric: OK1
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Suatu graf sederhana tak berarah memiliki $10$ simpul dan tepat $2$ komponen terhubung. Jumlah sisi maksimum yang mungkin dimiliki graf tersebut adalah $\\cdots$\n\nA. $20$\nB. $24$\nC. $28$\nD. $32$\nE. $36$',
          answer: 'E. $36$',
          principle:
            'Pada graf sederhana dengan banyak komponen tetap, jumlah sisi maksimum dicapai saat setiap komponen berupa graf lengkap dan ukuran komponen dibuat se-ekstrem mungkin (satu komponen besar dan sisanya simpul terisolasi).',
          solution:
            'Misalkan kedua komponen terhubung masing-masing memiliki $k$ simpul dan $10 - k$ simpul, dengan $1 \\le k \\le 9$. Agar banyak sisi maksimum tanpa menghubungkan kedua komponen, masing-masing komponen dibuat menjadi graf lengkap ($K_k$ dan $K_{10-k}$), sehingga total sisinya adalah:\n$$E(k) = \\binom{k}{2} + \\binom{10-k}{2} = \\frac{k(k-1) + (10-k)(9-k)}{2} = k^2 - 10k + 45 = (k - 5)^2 + 20.$$\n\nNilai kuadrat $(k - 5)^2 + 20$ mencapai maksimum pada batas terjauh dari $5$, yakni $k = 1$ atau $k = 9$:\n$$E_{\\text{maks}} = \\binom{9}{2} + \\binom{1}{2} = 36 + 0 = 36.$$',
          rubric: OK1
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Penelusuran *preorder* suatu pohon biner adalah `A B D E H C F G`, sedangkan penelusuran *inorder*-nya adalah `D B H E A F C G`. Penelusuran *postorder* pohon biner tersebut adalah $\\cdots$\n\nA. `D H E B G F C A`\nB. `D H E B F G C A`\nC. `H D E B F G C A`\nD. `D E H B F C G A`\nE. `D B H E F G C A`',
          answer: 'B. `D H E B F G C A`',
          principle:
            'Pada pohon biner, elemen pertama preorder adalah akar yang mempartisi barisan inorder menjadi subpohon kiri dan subpohon kanan; postorder mengunjungi kiri, kanan, lalu akar.',
          solution:
            'Langkah rekonstruksi dari *preorder* (`A B D E H C F G`) dan *inorder* (`D B H E A F C G`):\n1. Elemen pertama *preorder* adalah `A`, sehingga akar pohon adalah `A`. Dalam *inorder*, di kiri `A` ada `D B H E` (4 simpul) dan di kanan `A` ada `F C G` (3 simpul).\n2. Subpohon kiri memiliki *preorder* `B D E H` dan *inorder* `D B H E`:\n   - Akarnya `B`, dengan anak kiri `D` dan subpohon kanan memiliki *preorder* `E H`, *inorder* `H E` (berarti akar `E` dengan anak kiri `H`).\n   - Jadi *postorder* subpohon kiri adalah `D H E B`.\n3. Subpohon kanan memiliki *preorder* `C F G` dan *inorder* `F C G`:\n   - Akarnya `C`, dengan anak kiri `F` dan anak kanan `G`.\n   - Jadi *postorder* subpohon kanan adalah `F G C`.\n\nMenggabungkan *postorder* kiri, kanan, dan akar `A` menghasilkan `D H E B F G C A`.',
          rubric: OK1
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Perhatikan potongan kode C++ berikut:\n```cpp\nint s = 0;\nfor (int i = 1; i <= 6; i++) {\n    for (int j = 1; j <= i; j++) {\n        if ((i + j) % 3 == 0) continue;\n        if (i * j > 15) break;\n        s += i - j;\n    }\n}\ncout << s << endl;\n```\nKeluaran dari potongan kode di atas adalah $\\cdots$\n\nA. $15$\nB. $18$\nC. $21$\nD. $24$\nE. $27$',
          answer: 'C. $21$',
          principle:
            'Pelacakan eksekusi perulangan bersarang secara teliti dengan memperhatikan urutan evaluasi `continue` dan `break`.',
          solution:
            'Lacak setiap nilai $i$ dari $1$ sampai $6$ dan $j$ dari $1$ sampai $i$:\n- $i = 1$: $j = 1 \\implies i+j=2, i\\cdot j=1 \\implies s \\mathrel{+}= 0$ ($s = 0$).\n- $i = 2$: $j = 1$ dilewati (`continue` karena $2+1=3$); $j = 2 \\implies s \\mathrel{+}= 0$ ($s = 0$).\n- $i = 3$: $j = 1 \\implies s \\mathrel{+}= 2$ ($s = 2$); $j = 2 \\implies s \\mathrel{+}= 1$ ($s = 3$); $j = 3$ dilewati (`continue` karena $3+3=6$).\n- $i = 4$: $j = 1 \\implies s \\mathrel{+}= 3$ ($s = 6$); $j = 2$ dilewati (`continue` karena $4+2=6$); $j = 3 \\implies s \\mathrel{+}= 1$ ($s = 7$); $j = 4 \\implies 4 \\cdot 4 = 16 > 15$ sehingga `break`.\n- $i = 5$: $j = 1$ dilewati (`continue`); $j = 2 \\implies s \\mathrel{+}= 3$ ($s = 10$); $j = 3 \\implies s \\mathrel{+}= 2$ ($s = 12$); $j = 4$ dilewati (`continue` sebelum cek `break` karena $5+4=9$); $j = 5 \\implies 5 \\cdot 5 = 25 > 15$ sehingga `break`.\n- $i = 6$: $j = 1 \\implies s \\mathrel{+}= 5$ ($s = 17$); $j = 2 \\implies s \\mathrel{+}= 4$ ($s = 21$); $j = 3$ dilewati (`continue`); $j = 4 \\implies 6 \\cdot 4 = 24 > 15$ sehingga `break`.\n\nNilai akhir yang dicetak adalah $21$.',
          rubric: OK1
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Diberikan fungsi rekursif C++ berikut:\n```cpp\nint f(int a, int b) {\n    if (b == 0) return a;\n    if (a < b) return f(b, a);\n    if (a % 2 == 0) return f(a / 2, b) + 1;\n    return f(a - b, b) + 2;\n}\n```\nNilai kembalian dari pemanggilan `f(19, 6)` adalah $\\cdots$\n\nA. $9$\nB. $11$\nC. $13$\nD. $15$\nE. $17$',
          answer: 'C. $13$',
          principle:
            'Penelusuran rantai pemanggilan fungsi rekursif (*call stack*) dari argumen awal hingga kasus dasar (*base case*) lalu menjumlahkan konstanta kembalian.',
          solution:
            'Telusuri pemanggilan `f(19, 6)` langkah demi langkah:\n1. $f(19, 6)$ ($19$ ganjil, $19 \\ge 6$) $= f(13, 6) + 2$\n2. $f(13, 6)$ ($13$ ganjil, $13 \\ge 6$) $= f(7, 6) + 2$\n3. $f(7, 6)$ ($7$ ganjil, $7 \\ge 6$) $= f(1, 6) + 2$\n4. $f(1, 6)$ ($1 < 6$) $= f(6, 1)$\n5. $f(6, 1)$ ($6$ genap) $= f(3, 1) + 1$\n6. $f(3, 1)$ ($3$ ganjil) $= f(2, 1) + 2$\n7. $f(2, 1)$ ($2$ genap) $= f(1, 1) + 1$\n8. $f(1, 1)$ ($1$ ganjil) $= f(0, 1) + 2$\n9. $f(0, 1)$ ($0 < 1$) $= f(1, 0) = 1$ (kasus dasar $b = 0$).\n\nJumlahkan seluruh tambahan konstanta ke atas:\n$$f(19, 6) = 1 + (2 + 1 + 2 + 1 + 2 + 2 + 2) = 1 + 12 = 13.$$',
          rubric: OK1
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Perhatikan potongan kode C++ yang memanfaatkan operator bitwise berikut:\n```cpp\nint a[6] = {8, 5, 16, 11, 4, 7};\nint ans = 0;\nfor (int i = 0; i < 6; i++) {\n    if ((a[i] & (a[i] - 1)) == 0)\n        ans += (a[i] >> 1);\n    else\n        ans ^= a[i];\n}\ncout << ans << endl;\n```\nKeluaran dari potongan kode di atas adalah $\\cdots$\n\nA. $0$\nB. $2$\nC. $3$\nD. $6$\nE. $14$',
          answer: 'C. $3$',
          principle:
            'Untuk bilangan bulat positif $x$, ekspresi `(x & (x - 1)) == 0` bernilai benar jika dan hanya jika $x$ merupakan bilangan pangkat dua ($2^k$). Operator `>> 1` membagi dua secara bulat, dan `^=` melakukan XOR bitwise.',
          solution:
            'Evaluasi kondisi dan pembaruan nilai `ans` untuk tiap indeks $i = 0, \\dots, 5$:\n- $i = 0, a[0] = 8$ ($1000_2$, pangkat dua): `8 & 7 == 0` benar $\\implies \\text{ans} = 0 + (8 \\gg 1) = 0 + 4 = 4$.\n- $i = 1, a[1] = 5$ ($0101_2$, bukan pangkat dua): $\\text{ans} = 4 \\oplus 5 = 0100_2 \\oplus 0101_2 = 0001_2 = 1$.\n- $i = 2, a[2] = 16$ ($10000_2$, pangkat dua): $\\text{ans} = 1 + (16 \\gg 1) = 1 + 8 = 9$.\n- $i = 3, a[3] = 11$ ($1011_2$, bukan pangkat dua): $\\text{ans} = 9 \\oplus 11 = 1001_2 \\oplus 1011_2 = 0010_2 = 2$.\n- $i = 4, a[4] = 4$ ($0100_2$, pangkat dua): $\\text{ans} = 2 + (4 \\gg 1) = 2 + 2 = 4$.\n- $i = 5, a[5] = 7$ ($0111_2$, bukan pangkat dua): $\\text{ans} = 4 \\oplus 7 = 0100_2 \\oplus 0111_2 = 0011_2 = 3$.\n\nJadi keluaran program adalah $3$.',
          rubric: OK1
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Soal Isian Singkat & Output Program',
      marks: 10,
      stem: 'Tuliskan jawaban singkat (bilangan bulat) atau keluaran program C++ yang tepat untuk setiap soal berikut (nomor 11\u201315, masing-masing bernilai 2 poin).',
      parts: [
        {
          label: '11',
          marks: 2,
          prompt:
            'Berapa banyak bilangan bulat positif $x$ dengan $1 \\le x \\le 1000$ yang memenuhi $\\gcd(x, 30) = 1$ dan $x \\equiv 1 \\pmod{7}$?',
          answer: '$38$',
          principle:
            'Menggabungkan syarat kekongruenan linear $x = 7k + 1$ dengan fungsi totien Euler $\\varphi(30) = 8$ serta sifat periodisitas sisa pembagian terhadap $30$.',
          solution:
            'Syarat $x \\equiv 1 \\pmod{7}$ dengan $1 \\le x \\le 1000$ berarti $x = 7k + 1$ untuk $0 \\le k \\le 142$ (karena $7(142) + 1 = 995 \\le 1000$ dan $7(143) + 1 = 1002 > 1000$), sehingga terdapat $143$ kandidat.\n\nKarena $\\gcd(7, 30) = 1$, pemetaan $k \\mapsto (7k + 1) \\bmod 30$ merupakan bijeksi pada $\\mathbb{Z}_{30}$. Dalam setiap blok $30$ nilai $k$ berurutan, tepat sebanyak $\\varphi(30) = 30\\left(1-\\frac{1}{2}\\right)\\left(1-\\frac{1}{3}\\right)\\left(1-\\frac{1}{5}\\right) = 8$ nilai $k$ menghasilkan $\\gcd(7k + 1, 30) = 1$.\n\nSecara eksplisit, syarat $\\gcd(7k+1, 30) = 1$ menuntut:\n- $7k + 1 \\not\\equiv 0 \\pmod 2 \\implies k \\equiv 0 \\pmod 2$ ($k$ genap),\n- $7k + 1 \\not\\equiv 0 \\pmod 3 \\implies k \\not\\equiv 2 \\pmod 3$,\n- $7k + 1 \\not\\equiv 0 \\pmod 5 \\implies 2k + 1 \\not\\equiv 0 \\pmod 5 \\implies k \\not\\equiv 2 \\pmod 5$.\n\nNilai $k \\bmod 30$ yang memenuhi ketiga syarat adalah $\\{0, 4, 6, 10, 16, 18, 24, 28\\}$ ($8$ nilai).\n- Untuk $k = 0, \\dots, 119$ (terdiri atas $4$ blok penuh berukuran $30$), ada $4 \\times 8 = 32$ nilai.\n- Untuk $k = 120, \\dots, 142$ (bersesuaian dengan sisa $0, \\dots, 22 \\bmod 30$), yang memenuhi adalah $6$ nilai: $0, 4, 6, 10, 16, 18$.\n\nTotal banyaknya $x$ yang memenuhi adalah $32 + 6 = 38$.',
          rubric: R2
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'Berapa banyak string dengan panjang $7$ yang disusun dari huruf $\\{A, B, C\\}$ sedemikian hingga **tidak ada** dua huruf $A$ yang bersebelahan dan huruf $A$ muncul **minimal satu kali**?',
          answer: '$1096$',
          principle:
            'Menghitung banyak string bebas pola terlarang menggunakan pemrograman dinamis / relasi rekurensi, lalu menerapkan komplemen terhadap himpunan tanpa huruf $A$.',
          solution:
            'Misalkan $d_n$ menyatakan banyaknya string panjang $n$ dari $\\{A, B, C\\}$ yang tidak memuat subkata `AA`. Nilai awal $d_0 = 1$ (string kosong) dan $d_1 = 3$ (`A`, `B`, `C`).\n\nUntuk $n \\ge 2$, tinjau karakter pertama:\n- Jika diawali `B` atau `C` ($2$ pilihan), sisa panjang $n - 1$ dapat diisi sebanyak $d_{n-1}$ cara.\n- Jika diawali `A`, karakter kedua wajib `B` atau `C` ($2$ pilihan), lalu sisa panjang $n - 2$ diisi sebanyak $d_{n-2}$ cara.\n\nDiperoleh relasi rekurensi $d_n = 2d_{n-1} + 2d_{n-2}$:\n- $d_2 = 2(3) + 2(1) = 8$\n- $d_3 = 2(8) + 2(3) = 22$\n- $d_4 = 2(22) + 2(8) = 60$\n- $d_5 = 2(60) + 2(22) = 164$\n- $d_6 = 2(164) + 2(60) = 448$\n- $d_7 = 2(448) + 2(164) = 896 + 328 = 1224$.\n\nBanyaknya string panjang $7$ yang tidak memuat huruf $A$ sama sekali (hanya dari $\\{B, C\\}$) adalah $2^7 = 128$, dan semuanya jelas tidak memuat `AA`. Maka banyaknya string yang memuat minimal satu huruf $A$ tanpa `AA` adalah:\n$$1224 - 128 = 1096.$$',
          rubric: R2
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Diberikan sebuah graf berarah asiklik (*directed acyclic graph*) dengan $7$ simpul bernomor $1, 2, 3, 4, 5, 6, 7$ dan $12$ sisi berarah berikut:\n$$(1,2), (1,3), (2,3), (2,4), (2,5), (3,5), (3,6), (4,5), (4,7), (5,6), (5,7), (6,7).$$\nBerapa banyak lintasan berarah berbeda dari simpul $1$ menuju simpul $7$?',
          answer: '$11$',
          principle:
            'Pemrograman dinamis pada graf berarah asiklik (DAG) dalam urutan topologis: banyak lintasan menuju simpul $v$ sama dengan jumlah banyak lintasan menuju seluruh pendahulunya.',
          solution:
            'Urutan $1, 2, 3, 4, 5, 6, 7$ sudah merupakan urutan topologis karena setiap sisi $(u, v)$ memenuhi $u < v$. Misalkan $w(v)$ menyatakan banyaknya lintasan berarah dari simpul $1$ ke simpul $v$, dengan $w(1) = 1$:\n- $w(2) = w(1) = 1$\n- $w(3) = w(1) + w(2) = 1 + 1 = 2$\n- $w(4) = w(2) = 1$\n- $w(5) = w(2) + w(3) + w(4) = 1 + 2 + 1 = 4$\n- $w(6) = w(3) + w(5) = 2 + 4 = 6$\n- $w(7) = w(4) + w(5) + w(6) = 1 + 4 + 6 = 11$.\n\nJadi terdapat $11$ lintasan berarah berbeda dari simpul $1$ ke simpul $7$.',
          rubric: R2
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Tentukan bilangan bulat yang dicetak oleh program C++ berikut:\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[8] = {3, 7, 2, 8, 5, 1, 6, 4};\n    for (int step = 0; step < 3; step++) {\n        for (int i = 0; i < 7; i++) {\n            if (a[i] > a[i + 1]) {\n                int tmp = a[i];\n                a[i] = a[i + 1];\n                a[i + 1] = tmp;\n            }\n        }\n    }\n    int ans = 0;\n    for (int i = 0; i < 8; i++) {\n        ans += (i + 1) * a[i];\n    }\n    cout << ans << endl;\n    return 0;\n}\n```',
          answer: '$200$',
          principle:
            'Simulasi tiga iterasi *bubble sort* (pertukaran elemen bersebelahan dari kiri ke kanan) dan evaluasi jumlah berbobot indeks array.',
          solution:
            'Lacak kondisi array `a` setelah setiap iterasi `step`:\n- Awal: `{3, 7, 2, 8, 5, 1, 6, 4}`\n- Setelah `step = 0` (pass ke-$1$, elemen terbesar $8$ bergerak ke paling kanan): `{3, 2, 7, 5, 1, 6, 4, 8}`\n- Setelah `step = 1` (pass ke-$2$, $7$ bergerak ke indeks $6$): `{2, 3, 5, 1, 6, 4, 7, 8}`\n- Setelah `step = 2` (pass ke-$3$, $6$ bergerak ke indeks $5$): `{2, 3, 1, 5, 4, 6, 7, 8}`\n\nHitung jumlah berbobot $\\sum_{i=0}^{7} (i + 1)\\cdot a[i]$:\n$$\\text{ans} = 1(2) + 2(3) + 3(1) + 4(5) + 5(4) + 6(6) + 7(7) + 8(8) = 2 + 6 + 3 + 20 + 20 + 36 + 49 + 64 = 200.$$',
          rubric: R2
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Tentukan bilangan bulat yang dicetak oleh program C++ berikut:\n```cpp\n#include <iostream>\nusing namespace std;\n\nint f(int n) {\n    if (n <= 2) return n;\n    if (n % 2 == 0) return f(n / 2) + f(n / 2 - 1);\n    return 2 * f(n - 1) - f(n - 3);\n}\n\nint main() {\n    cout << f(15) << endl;\n    return 0;\n}\n```',
          answer: '$20$',
          principle:
            'Evaluasi fungsi rekursif *bottom-up* (memoisasi manual) untuk mencegah penghitungan berulang pada cabang rekursi yang tumpang tindih.',
          solution:
            'Hitung nilai `f(n)` mulai dari nilai kecil secara berurutan:\n- Kasus dasar: $f(0) = 0, \\quad f(1) = 1, \\quad f(2) = 2$\n- $f(3) = 2f(2) - f(0) = 2(2) - 0 = 4$\n- $f(4) = f(2) + f(1) = 2 + 1 = 3$\n- $f(5) = 2f(4) - f(2) = 2(3) - 2 = 4$\n- $f(6) = f(3) + f(2) = 4 + 2 = 6$\n- $f(7) = 2f(6) - f(4) = 2(6) - 3 = 9$\n- $f(12) = f(6) + f(5) = 6 + 4 = 10$\n- $f(14) = f(7) + f(6) = 9 + 6 = 15$\n\nAkhirnya, untuk $n = 15$ (ganjil):\n$$f(15) = 2f(14) - f(12) = 2(15) - 10 = 20.$$',
          rubric: R2
        }
      ]
    }
  ]
};
