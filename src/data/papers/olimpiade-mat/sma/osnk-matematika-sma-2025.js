/**
 * Paket Soal Terstruktur: OSN-K Matematika SMA 2025 (Kemampuan Dasar)
 * Sumber: scraped_raw/osnk-matematika-sma-2025-dasar.md (10 soal isian singkat).
 * Catatan penyuntingan: 8 soal dimuat (nomor asli 1-6, 9, 10, dinomori ulang 1-8).
 * Soal nomor asli 7 dan 8 dilewati karena memerlukan gambar asli yang tidak tersedia
 * (serta terdapat ketidakkonsistenan teks pada naskah sumber soal nomor 8).
 */
const R4 = [
  { code: 'M2', text: 'Penalaran dan langkah penyelesaian yang benar.' },
  { code: 'A2', text: 'Jawaban akhir benar.' }
];

export default {
  id: 'osnk-mat-sma-2025',
  slug: 'osnk-matematika-sma-2025',
  subject: 'olimpiade-mat',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'OSN-K Matematika SMA 2025 (Kemampuan Dasar)',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab6-fungsi-kuadrat',
    'sma12-bab3-kaidah-pencacahan'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SMA 2025',
  totalMarks: 32,
  instructions:
    'Naskah asli OSN-K Matematika SMA 2025 bagian Kemampuan Dasar terdiri atas 10 soal isian singkat (jawaban benar bernilai 4 poin, salah -1 poin, dan kosong 0 poin). Dari 10 soal tersebut, 8 soal dimuat pada paket ini (nomor asli 1-6, 9, dan 10, dinomori ulang 1-8) dan 2 soal dilewati (nomor 7 dan 8) karena memerlukan gambar asli yang tidak tersedia. Setiap soal pada paket latihan ini bernilai 4 poin (total 32 poin) tanpa pengurangan nilai.',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-matematika-sma-2025-dasar.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Kemampuan Dasar',
      marks: 32,
      stem: 'Jawablah setiap soal isian singkat berikut dengan bilangan bulat yang tepat (8 soal dimuat dari 10 soal naskah asli; masing-masing bernilai 4 poin).',
      parts: [
        {
          label: '1',
          marks: 4,
          prompt:
            'Diketahui $n^2 + 4n + 3 = 16m$. Jika $m$ bulat, banyaknya bilangan bulat $n$ dengan $1 \\le n \\le 110$ yang memenuhi persamaan tersebut adalah ....',
          answer: '$27$',
          principle:
            'Pemfaktoran kuadrat, paritas bilangan bulat, dan keterbagian oleh $4$ pada hasil kali dua bilangan bulat berurutan.',
          solution:
            'Faktorkan ruas kiri:\n$$(n + 1)(n + 3) = 16m.$$\nKarena $16m$ genap, maka $(n + 1)(n + 3)$ genap, sehingga $n$ harus merupakan bilangan ganjil. Tulis $n = 2t - 1$ untuk suatu bilangan bulat $t$. Substitusi menghasilkan\n$$2t(2t + 2) = 16m \\implies 4t(t + 1) = 16m \\implies t(t + 1) = 4m.$$\nKarena $t$ dan $t + 1$ adalah dua bilangan bulat berurutan, keduanya saling prima (salah satunya ganjil dan lainnya genap). Oleh karena itu, $4 \\mid t(t + 1)$ terjadi jika dan hanya jika $4 \\mid t$ atau $4 \\mid (t + 1)$.\n\nSyarat $1 \\le n \\le 110$ memberikan\n$$1 \\le 2t - 1 \\le 110 \\implies 2 \\le 2t \\le 111 \\implies 1 \\le t \\le 55.$$\n- **Kasus 1 ($t = 4b$):** $1 \\le 4b \\le 55 \\implies 1 \\le b \\le 13$ (karena $4 \\times 13 = 52 \\le 55 < 56$), terdapat $13$ nilai $t$.\n- **Kasus 2 ($t = 4c - 1$):** $1 \\le 4c - 1 \\le 55 \\implies 2 \\le 4c \\le 56 \\implies 1 \\le c \\le 14$ (karena $4 \\times 14 - 1 = 55$), terdapat $14$ nilai $t$.\n\nTotal banyaknya bilangan bulat $n$ yang memenuhi adalah $13 + 14 = 27$.',
          rubric: R4
        },
        {
          label: '2',
          marks: 4,
          prompt:
            'Bilangan bulat positif terkecil $n$ sehingga $n!$ habis dibagi $1430$ adalah ....',
          answer: '$13$',
          principle:
            'Faktorisasi prima: $n!$ habis dibagi $k$ jika dan hanya jika setiap faktor prima beserta pangkatnya dari $k$ termuat dalam $n!$.',
          solution:
            'Faktorkan $1430$ ke dalam faktor-faktor primanya:\n$$1430 = 10 \\times 143 = 2 \\times 5 \\times 11 \\times 13.$$\nKeempat faktor prima tersebut berbeda dengan pangkat masing-masing $1$. Agar $1430 \\mid n!$, bilangan $n!$ harus habis dibagi $2$, $5$, $11$, dan $13$.\n\nKarena $13$ adalah bilangan prima, $13 \\nmid n!$ untuk setiap $1 \\le n \\le 12$, sehingga wajib $n \\ge 13$. Untuk $n = 13$, hasil kali $13! = 1 \\times 2 \\times \\cdots \\times 5 \\times \\cdots \\times 11 \\times 12 \\times 13$ memuat faktor $2$, $5$, $11$, dan $13$, sehingga $1430 \\mid 13!$. Jadi, bilangan bulat positif $n$ terkecil adalah $13$.',
          rubric: R4
        },
        {
          label: '3',
          marks: 4,
          prompt:
            'Diketahui $ABCD$ adalah trapesium dengan $AB \\parallel CD$ dan $\\angle ADC = 90^\\circ$. Titik $E$ pada ruas garis $AD$ sehingga $BE = EC$. Jika $AB = 22$, $CD = 27$, dan $BC = 25\\sqrt{2}$, maka panjang $AE$ adalah ....',
          answer: '$21$',
          principle:
            'Garis tinggi trapesium siku-siku, teorema Pythagoras, dan identitas selisih dua kuadrat.',
          solution:
            'Karena $AB \\parallel CD$ dan $\\angle ADC = 90^\\circ$, maka $\\angle DAB = 90^\\circ$. Pilih titik $X$ pada sisi $CD$ sehingga $BX \\perp CD$. Bangun $ABXD$ adalah persegi panjang, sehingga $DX = AB = 22$ dan $AD = BX$. Diperoleh\n$$CX = CD - DX = 27 - 22 = 5.$$\nPada segitiga siku-siku $BXC$, teorema Pythagoras memberikan\n$$AD = BX = \\sqrt{BC^2 - CX^2} = \\sqrt{(25\\sqrt{2})^2 - 5^2} = \\sqrt{1250 - 25} = \\sqrt{1225} = 35.$$\nMisalkan $AE = x$, sehingga $ED = 35 - x$ dengan $0 \\le x \\le 35$. Pada segitiga siku-siku $ABE$ dan $EDC$, syarat $BE = EC$ berarti $BE^2 = EC^2$:\n$$AE^2 + AB^2 = ED^2 + CD^2$$\n$$x^2 + 22^2 = (35 - x)^2 + 27^2$$\n$$x^2 - (35 - x)^2 = 27^2 - 22^2.$$\nGunakan identitas selisih dua kuadrat $a^2 - b^2 = (a + b)(a - b)$:\n$$(x + 35 - x)(x - (35 - x)) = (27 + 22)(27 - 22)$$\n$$35(2x - 35) = 49 \\times 5 \\implies 2x - 35 = 7 \\implies 2x = 42 \\implies x = 21.$$\nJadi, panjang $AE = 21$.',
          rubric: R4
        },
        {
          label: '4',
          marks: 4,
          prompt:
            'Banyaknya himpunan bagian dari $\\{1, 2, 3, 4, 5, 6, 7\\}$ yang memuat semua anggota dari himpunan $\\{1, 2, 3, 4, 5\\}$ atau $\\{4, 5, 6\\}$ adalah ....',
          answer: '$18$',
          principle:
            'Prinsip inklusi-eksklusi dan pencacahan himpunan bagian: $k$ elemen bebas memberikan $2^k$ pilihan.',
          solution:
            'Misalkan $S = \\{1, 2, 3, 4, 5, 6, 7\\}$, $A$ adalah keluarga himpunan bagian dari $S$ yang memuat $\\{1, 2, 3, 4, 5\\}$, dan $B$ adalah keluarga himpunan bagian dari $S$ yang memuat $\\{4, 5, 6\\}$.\n- **Menghitung $|A|$:** Setiap anggota $A$ berbentuk $\\{1, 2, 3, 4, 5\\} \\cup X$ dengan $X \\subseteq \\{6, 7\\}$. Banyaknya pilihan $X$ adalah $2^2 = 4$, sehingga $|A| = 4$.\n- **Menghitung $|B|$:** Setiap anggota $B$ berbentuk $\\{4, 5, 6\\} \\cup Y$ dengan $Y \\subseteq \\{1, 2, 3, 7\\}$. Banyaknya pilihan $Y$ adalah $2^4 = 16$, sehingga $|B| = 16$.\n- **Menghitung $|A \\cap B|$:** Himpunan dalam $A \\cap B$ memuat $\\{1, 2, 3, 4, 5\\} \\cup \\{4, 5, 6\\} = \\{1, 2, 3, 4, 5, 6\\}$, sehingga berbentuk $\\{1, 2, 3, 4, 5, 6\\} \\cup Z$ dengan $Z \\subseteq \\{7\\}$. Banyaknya pilihan $Z$ adalah $2^1 = 2$, sehingga $|A \\cap B| = 2$.\n\nDengan prinsip inklusi-eksklusi:\n$$|A \\cup B| = |A| + |B| - |A \\cap B| = 4 + 16 - 2 = 18.$$\nJadi, terdapat $18$ himpunan bagian yang memenuhi.',
          rubric: R4
        },
        {
          label: '5',
          marks: 4,
          prompt:
            'Afif menuliskan sembilan bilangan bulat positif berbeda yang lebih kecil dari $18$. Ia memastikan bahwa penjumlahan dua bilangan mana pun di antara sembilan bilangan tersebut tidak sama dengan $18$. Bilangan positif yang pasti ditulis Afif adalah ....',
          answer: '$9$',
          principle:
            'Prinsip sarang merpati (Pigeonhole Principle) dengan mengelompokkan bilangan menjadi pasangan yang berjumlah $18$.',
          solution:
            'Bilangan bulat positif yang lebih kecil dari $18$ adalah $\\{1, 2, \\ldots, 17\\}$. Kelompokkan himpunan tersebut menjadi $8$ pasangan yang masing-masing berjumlah $18$ dan satu bilangan tunggal:\n$$\\{1, 17\\}, \\{2, 16\\}, \\{3, 15\\}, \\{4, 14\\}, \\{5, 13\\}, \\{6, 12\\}, \\{7, 11\\}, \\{8, 10\\}, \\text{ dan } \\{9\\}.$$\nDari setiap pasangan $\\{a, 18 - a\\}$, Afif paling banyak boleh memilih satu bilangan agar tidak ada dua bilangan berbeda yang berjumlah $18$. Akibatnya, dari kedelapan pasangan tersebut ia paling banyak dapat memilih $8$ bilangan.\n\nKarena Afif menuliskan $9$ bilangan berbeda, berdasarkan prinsip sarang merpati ia harus memilih bilangan di luar kedelapan pasangan tersebut, yaitu $9$ (yang tidak memiliki pasangan berbeda agar berjumlah $18$). Sebagai contoh, himpunan $\\{1, 2, 3, 4, 5, 6, 7, 8, 9\\}$ memenuhi syarat. Jadi, bilangan yang pasti ditulis Afif adalah $9$.',
          rubric: R4
        },
        {
          label: '6',
          marks: 4,
          prompt:
            'Koefisien suku $x^2$ dari penjabaran $(x + 3)^n$ adalah $81k$ untuk suatu bilangan asli $k$. Bilangan asli $k$ terkecil yang memenuhi syarat tersebut adalah ....',
          answer: '$15$',
          principle:
            'Teorema binomial dan analisis keterbagian pangkat bilangan prima $3$.',
          solution:
            'Agar suku $x^2$ muncul pada penjabaran $(x + 3)^n$, haruslah $n \\ge 2$. Berdasarkan teorema binomial, koefisien suku $x^2$ adalah\n$$\\binom{n}{2} \\cdot 3^{n - 2} = \\frac{n(n - 1)}{2} \\cdot 3^{n - 2} = 81k = 3^4 k.$$\nPeriksa nilai $2 \\le n \\le 5$:\n- $n = 2$: $1 \\cdot 3^0 = 1$, tidak habis dibagi $81$.\n- $n = 3$: $3 \\cdot 3^1 = 9$, tidak habis dibagi $81$.\n- $n = 4$: $6 \\cdot 3^2 = 54$, tidak habis dibagi $81$.\n- $n = 5$: $10 \\cdot 3^3 = 270$, tidak habis dibagi $81$ ($270 = 81 \\times 3 + 27$).\n\nUntuk $n \\ge 6$, bagi kedua ruas dengan $3^4$ sehingga diperoleh\n$$k = \\frac{n(n - 1)}{2} \\cdot 3^{n - 6},$$\nyang selalu berupa bilangan asli dan nilainya meningkat secara ketat seiring bertambahnya $n$. Oleh karena itu, bilangan asli $k$ terkecil dicapai saat $n = 6$:\n$$k = \\frac{6 \\times 5}{2} \\cdot 3^{6 - 6} = 15 \\times 1 = 15.$$',
          rubric: R4
        },
        {
          label: '7',
          marks: 4,
          prompt:
            'Diketahui polinomial $P(5^b + 1) = 5^{5b} + 4$ untuk setiap bilangan real $b$. Nilai dari $P(3)$ adalah ....',
          answer: '$36$',
          principle:
            'Substitusi peubah pada persamaan eksponen dan sifat identitas polinomial.',
          solution:
            'Karena $2 > 0$, terdapat bilangan real $b$ (yaitu $b = \\log_5 2$) yang memenuhi $5^b = 2$, sehingga $5^b + 1 = 3$. Substitusikan $5^b = 2$ ke persamaan yang diberikan dengan sifat $5^{5b} = (5^b)^5$:\n$$P(3) = P(5^b + 1) = (5^b)^5 + 4 = 2^5 + 4 = 32 + 4 = 36.$$\n(Secara umum, dengan memisalkan $x = 5^b + 1$, diperoleh $P(x) = (x - 1)^5 + 4$ untuk semua $x > 1$; karena $P$ polinomial, identitas ini berlaku untuk semua $x \\in \\mathbb{R}$, sehingga $P(3) = (3 - 1)^5 + 4 = 36$.)',
          rubric: R4
        },
        {
          label: '8',
          marks: 4,
          prompt:
            'Banyaknya bilangan bulat $m$ sehingga membuat persamaan kuadrat $x^2 + mx + 37 = m$ tidak mempunyai akar real adalah ....',
          answer: '$25$',
          principle:
            'Syarat persamaan kuadrat tidak memiliki akar real ($D < 0$) dan pembatasan kuadrat bilangan bulat tanpa kalkulator.',
          solution:
            'Susun ulang persamaan menjadi bentuk baku $x^2 + mx + (37 - m) = 0$. Persamaan kuadrat tidak mempunyai akar real jika dan hanya jika diskriminannya negatif:\n$$D = m^2 - 4(1)(37 - m) < 0$$\n$$m^2 + 4m - 148 < 0.$$\nLengkapkan kuadrat sempurna pada ruas kiri:\n$$(m + 2)^2 - 4 - 148 < 0 \\iff (m + 2)^2 < 152.$$\nKarena $m$ bilangan bulat, maka $m + 2$ juga bilangan bulat. Bandingkan $152$ dengan kuadrat bilangan bulat yang berdekatan:\n$$12^2 = 144 < 152 < 169 = 13^2.$$\nDengan demikian, bilangan bulat $m + 2$ memenuhi $(m + 2)^2 < 152$ jika dan hanya jika $|m + 2| \\le 12$, yaitu\n$$-12 \\le m + 2 \\le 12 \\iff -14 \\le m \\le 10.$$\nBanyaknya bilangan bulat $m$ dalam selang tersebut adalah $10 - (-14) + 1 = 25$.',
          rubric: R4
        }
      ]
    }
  ]
};
