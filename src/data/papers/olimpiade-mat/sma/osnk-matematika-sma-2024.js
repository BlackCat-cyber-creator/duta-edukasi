/**
 * Paket Soal Terstruktur: OSN-K Matematika SMA 2024 (Kemampuan Dasar)
 * Sumber: scraped_raw/osnk-matematika-sma-2024-dasar.md dan arsip PDF OSN-K Matematika SMA 2024 (seluruh 10 soal isian singkat bagian Kemampuan Dasar).
 */

export default {
  id: 'osnk-mat-sma-2024',
  slug: 'osnk-matematika-sma-2024',
  subject: 'olimpiade-mat',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'OSN-K Matematika SMA 2024 (Kemampuan Dasar)',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab2-barisan-deret',
    'sma10-bab6-fungsi-kuadrat',
    'sma12-bab3-kaidah-pencacahan'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SMA 2024',
  totalMarks: 40,
  instructions:
    'Paket ini memuat seluruh 10 soal isian singkat OSN-K Matematika SMA 2024 bagian Kemampuan Dasar. Setiap soal dijawab dengan bilangan bulat dan bernilai 4 poin (total 40 poin). Pada naskah asli bagian Kemampuan Dasar, setiap jawaban benar bernilai 2 poin tanpa pengurangan nilai; pada paket latihan ini setiap soal bernilai 4 poin yang dihitung dari jawaban benar.',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-matematika-sma-2024-dasar.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Kemampuan Dasar',
      marks: 40,
      stem: 'Jawablah setiap soal isian singkat berikut dengan bilangan bulat yang tepat (10 soal, masing-masing bernilai 4 poin).',
      parts: [
        {
          label: '1',
          marks: 4,
          prompt:
            'Sebuah persegi dibagi menjadi $2$ persegi panjang, seperti terlihat pada gambar. Diketahui hasil penjumlahan kedua keliling persegi panjang tersebut adalah $60$, maka luas persegi adalah $\\cdots$',
          figures: [
            {
              src: '/papers/osnk-mat-sma-2024/fig-1.webp',
              alt: 'Persegi yang terbagi secara horizontal menjadi dua persegi panjang dengan tinggi berbeda.',
              caption: 'Ilustrasi persegi yang dibagi menjadi dua persegi panjang pada Soal 1.'
            }
          ],
          answer: '$100$',
          principle: 'Keliling persegi panjang $K = 2(p + l)$ dan penjumlahan keliling dua bagian yang berbagi sisi potong sejajar.',
          solution:
            'Misalkan panjang sisi persegi tersebut adalah $x$ dan lebar persegi panjang bagian atas adalah $a$ (dengan $0 < a < x$), sehingga lebar persegi panjang bagian bawah adalah $x - a$, sedangkan panjang kedua persegi panjang sama dengan $x$.\n\nKeliling masing-masing persegi panjang adalah:\n- Keliling persegi panjang atas: $K_1 = 2(x + a) = 2x + 2a$.\n- Keliling persegi panjang bawah: $K_2 = 2(x + (x - a)) = 4x - 2a$.\n\nKarena jumlah kedua keliling persegi panjang tersebut adalah $60$, diperoleh:\n$$K_1 + K_2 = (2x + 2a) + (4x - 2a) = 60 \\iff 6x = 60 \\iff x = 10.$$\n(Secara geometris, garis pemotong horizontal sepanjang $x$ dihitung dua kali, sehingga jumlah kedua keliling sama dengan keliling persegi ditambah $2x$, yakni $4x + 2x = 6x$.)\n\nDengan demikian, luas persegi adalah:\n$$L = x^2 = 10^2 = 100.$$',
          rubric: [
            { code: 'M1', text: 'Memisalkan sisi persegi $x$ serta lebar kedua persegi panjang $a$ dan $x - a$.' },
            { code: 'M1', text: 'Menyusun persamaan jumlah keliling $2(x + a) + 2(2x - a) = 60$.' },
            { code: 'M1', text: 'Menyederhanakan menjadi $6x = 60$ dan memperoleh panjang sisi persegi $x = 10$.' },
            { code: 'A1', text: 'Menghitung luas persegi $x^2 = 100$.' }
          ]
        },
        {
          label: '2',
          marks: 4,
          prompt:
            'Diketahui ada $6$ pilihan jalan yang dapat digunakan untuk bepergian dari Kota A ke Kota B dan ada $8$ pilihan jalan yang dapat digunakan untuk bepergian dari Kota B ke Kota C. Jika seseorang akan bepergian dari Kota A ke Kota C melalui Kota B dan pulang kembali lagi ke Kota A melalui jalan-jalan yang berbeda dari ketika saat pergi, banyaknya cara untuk pergi dan kembali adalah $\\cdots$',
          answer: '$1680$',
          principle: 'Aturan perkalian untuk kejadian berurutan dengan syarat tidak menggunakan pilihan yang sama pada perjalanan pulang.',
          solution:
            'Perjalanan dibagi menjadi empat tahap berurutan:\n1. Pergi dari Kota A ke Kota B: tersedia $6$ pilihan jalan.\n2. Pergi dari Kota B ke Kota C: tersedia $8$ pilihan jalan.\n3. Pulang dari Kota C ke Kota B (tidak boleh melewati jalan yang digunakan saat pergi dari B ke C): tersisa $8 - 1 = 7$ pilihan jalan.\n4. Pulang dari Kota B ke Kota A (tidak boleh melewati jalan yang digunakan saat pergi dari A ke B): tersisa $6 - 1 = 5$ pilihan jalan.\n\nDengan aturan perkalian, total banyaknya cara pergi dan kembali adalah:\n$$6 \\times 8 \\times 7 \\times 5 = 30 \\times 56 = 1680.$$',
          rubric: [
            { code: 'M1', text: 'Menentukan banyaknya pilihan jalan pergi dari A ke C melalui B ($6 \\times 8$).' },
            { code: 'M2', text: 'Menentukan banyaknya pilihan jalan pulang dari C ke A melalui B tanpa melewati jalan pergi ($7 \\times 5$) dan menerapkan aturan perkalian.' },
            { code: 'A1', text: 'Memperoleh hasil akhir $1680$.' }
          ]
        },
        {
          label: '3',
          marks: 4,
          prompt:
            'Pada papan tertulis $90$ bilangan asli, yaitu $\\underbrace{1, 1, 1, \\cdots, 1}_{88\\text{ kali}}, a,$ dan $b.$ Hasil penjumlahan maupun perkalian dari semua bilangan asli tersebut sama, yaitu $A.$ Nilai $A$ adalah $\\cdots$',
          answer: '$180$',
          principle: 'Pemfaktoran aljabar $ab - a - b + 1 = (a - 1)(b - 1)$ dan ketunggalan pemfaktoran bilangan prima.',
          solution:
            'Jumlah dan hasil kali ke-$90$ bilangan tersebut bernilai sama, yaitu $A$, sehingga:\n$$A = \\underbrace{1 + 1 + \\cdots + 1}_{88\\text{ kali}} + a + b = 88 + a + b$$\ndan\n$$A = \\underbrace{1 \\cdot 1 \\cdots 1}_{88\\text{ kali}} \\cdot a \\cdot b = ab.$$\nDari kedua persamaan diperoleh:\n$$ab = 88 + a + b \\iff ab - a - b = 88.$$\nTambahkan $1$ pada kedua ruas untuk memfaktorkan:\n$$(a - 1)(b - 1) = 89.$$\nKarena $a$ dan $b$ bilangan asli ($a, b \\ge 1$), maka $a - 1 \\ge 0$ dan $b - 1 \\ge 0$ merupakan bilangan bulat taknegatif. Bilangan $89$ adalah bilangan prima (tidak habis dibagi bilangan prima mana pun yang kurang dari $\\sqrt{89} < 10$, yaitu $2, 3, 5, 7$). Oleh karena itu, satu-satunya pasangan faktor taknegatif dari $89$ adalah $(a - 1, b - 1) = (1, 89)$ atau $(89, 1)$, yang memberikan $\\{a, b\\} = \\{2, 90\\}$.\n\nPada kedua kemungkinan tersebut, nilai $A$ tunggal:\n$$A = ab = 2 \\times 90 = 180$$\n(terverifikasi pula $88 + 2 + 90 = 180$).',
          rubric: [
            { code: 'M1', text: 'Menyusun persamaan $88 + a + b = ab$ dari jumlah dan hasil kali $90$ bilangan.' },
            { code: 'M1', text: 'Memfaktorkan persamaan menjadi $(a - 1)(b - 1) = 89$.' },
            { code: 'M1', text: 'Membuktikan $89$ prima dan $a - 1, b - 1 \\ge 0$ sehingga $\\{a, b\\} = \\{2, 90\\}$ tunggal.' },
            { code: 'A1', text: 'Memperoleh nilai $A = 180$.' }
          ]
        },
        {
          label: '4',
          marks: 4,
          prompt:
            'Misalkan $a$ dan $b$ merupakan bilangan bulat positif yang tidak memiliki faktor persekutuan bersama yang bernilai positif selain $1.$ Jika\n$$\\frac{1+2+3+\\cdots+104}{3+4+5+\\cdots+106} = \\frac{a}{b},$$\nmaka nilai $a+b$ adalah $\\cdots$',
          answer: '$214$',
          principle: 'Rumus jumlah deret aritmetika $S_n = \\frac{n}{2}(u_1 + u_n)$ dan penyederhanaan pecahan hingga relatif prima.',
          solution:
            'Baik pembilang maupun penyebut merupakan deret aritmetika dengan beda $1$ dan banyak suku yang sama, yaitu $n = 104$ (pada penyebut, banyaknya suku adalah $106 - 3 + 1 = 104$).\n\nDengan menggunakan rumus jumlah $n$ suku pertama deret aritmetika $S_n = \\frac{n}{2}(u_1 + u_n)$, diperoleh:\n$$\\frac{1 + 2 + 3 + \\cdots + 104}{3 + 4 + 5 + \\cdots + 106} = \\frac{\\frac{104}{2}(1 + 104)}{\\frac{104}{2}(3 + 106)} = \\frac{105}{109}.$$\nPeriksa faktor persekutuan terbesar dengan algoritma Euclides:\n$$\\gcd(105, 109) = \\gcd(105, 109 - 105) = \\gcd(105, 4) = 1$$\nkarena $105$ bilangan ganjil. Jadi $105$ dan $109$ saling relatif prima. Karena $a, b > 0$ dengan $\\gcd(a, b) = 1$, diperoleh secara tunggal $a = 105$ dan $b = 109$.\n\nDengan demikian:\n$$a + b = 105 + 109 = 214.$$',
          rubric: [
            { code: 'M1', text: 'Menyatakan jumlah deret aritmetika pembilang dan penyebut dengan banyak suku $n = 104$.' },
            { code: 'M1', text: 'Menyederhanakan perbandingan menjadi $\\frac{105}{109}$.' },
            { code: 'M1', text: 'Membuktikan $\\gcd(105, 109) = 1$ sehingga $a = 105$ dan $b = 109$.' },
            { code: 'A1', text: 'Menghitung $a + b = 214$.' }
          ]
        },
        {
          label: '5',
          marks: 4,
          prompt:
            'Bilangan OSK adalah bilangan empat angka yang tidak dimulai dengan angka $0$ dan hasil penjumlahan semua angkanya adalah $8.$ Sebagai contoh, $2024$ merupakan bilangan OSK. Banyaknya bilangan OSK adalah $\\cdots$',
          answer: '$120$',
          principle: 'Kombinasi dengan pengulangan (metode bintang dan garis) pada persamaan penjumlahan bilangan bulat taknegatif.',
          solution:
            'Misalkan bilangan empat angka tersebut adalah $\\overline{abcd}$ dengan $a, b, c, d \\in \\{0, 1, \\dots, 9\\}$, $a \\ge 1$, dan:\n$$a + b + c + d = 8.$$\nPerhatikan bahwa karena $a \\ge 1$ dan $b, c, d \\ge 0$ serta jumlah keempatnya $8$, maka otomatis $a \\le 8 \\le 9$ dan $b, c, d \\le 7 \\le 9$. Artinya, tidak ada digit yang mungkin melebihi $9$ sehingga syarat batas atas digit selalu terpenuhi.\n\nSubstitusikan $p = a - 1$. Karena $a \\ge 1$, maka $p \\ge 0$, dan persamaan menjadi:\n$$p + b + c + d = 7$$\ndengan $p, b, c, d$ bilangan bulat taknegatif. Dengan metode bintang dan garis (stars and bars), banyaknya solusi bulat taknegatif persamaan tersebut adalah:\n$$\\binom{7 + 4 - 1}{4 - 1} = \\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120.$$\nJadi, terdapat $120$ bilangan OSK.',
          rubric: [
            { code: 'M1', text: 'Memodelkan bilangan OSK sebagai $a + b + c + d = 8$ dengan $a \\ge 1$, $b, c, d \\ge 0$, dan memastikan batas digit $\\le 9$ otomatis terpenuhi.' },
            { code: 'M2', text: 'Mengubah ke bentuk $p + b + c + d = 7$ ($p = a - 1 \\ge 0$) dan menerapkan rumus kombinasi $\\binom{10}{3}$.' },
            { code: 'A1', text: 'Menghitung nilai $\\binom{10}{3} = 120$.' }
          ]
        },
        {
          label: '6',
          marks: 4,
          prompt:
            'Misalkan $u_1,u_2,u_3, \\cdots$ adalah barisan geometri dengan $u_1>u_2.$ Jika $u_2=8$ dan $u_5+u_7= \\frac{17u_6}{4},$ maka nilai dari $u_1$ adalah $\\cdots$',
          answer: '$32$',
          principle: 'Suku ke-$n$ barisan geometri $u_n = u_1 r^{n-1}$ dan seleksi akar persamaan kuadrat berdasarkan syarat monoton turun.',
          solution:
            'Misalkan suku pertama adalah $u_1 = a$ dan rasionya $r$. Karena $u_2 = ar = 8 \\ne 0$, maka $a \\ne 0$ dan $r \\ne 0$.\n\nSubstitusikan $u_5 = ar^4$, $u_6 = ar^5$, dan $u_7 = ar^6$ ke persamaan yang diketahui:\n$$ar^4 + ar^6 = \\frac{17}{4} ar^5.$$\nKarena $ar^4 \\ne 0$, kedua ruas dapat dibagi dengan $ar^4$:\n$$1 + r^2 = \\frac{17}{4} r \\iff 4r^2 - 17r + 4 = 0 \\iff (4r - 1)(r - 4) = 0.$$\nDiperoleh dua kandidat rasio: $r = \\frac{1}{4}$ atau $r = 4$.\n\nGunakan syarat $u_1 > u_2 = 8$:\n- Jika $r = 4$, maka $u_1 = \\frac{u_2}{r} = \\frac{8}{4} = 2 < 8 = u_2$, tidak memenuhi syarat $u_1 > u_2$.\n- Jika $r = \\frac{1}{4}$, maka $u_1 = \\frac{u_2}{r} = \\frac{8}{1/4} = 32 > 8 = u_2$, memenuhi syarat.\n\nJadi, nilai $u_1$ adalah $32$.',
          rubric: [
            { code: 'M1', text: 'Menyatakan $u_5, u_6, u_7$ dalam $a$ dan $r$ lalu menyederhanakan menjadi $4r^2 - 17r + 4 = 0$.' },
            { code: 'M1', text: 'Memperoleh akar $r = \\frac{1}{4}$ dan $r = 4$.' },
            { code: 'M1', text: 'Menguji syarat $u_1 > u_2$ sehingga hanya $r = \\frac{1}{4}$ yang memenuhi.' },
            { code: 'A1', text: 'Menghitung $u_1 = 32$.' }
          ]
        },
        {
          label: '7',
          marks: 4,
          prompt:
            'Diberikan segiempat $ABCD$ dengan luas segitiga $AED$ sama dengan luas segitiga $BEC$. Jika $AB = 50$, $AE = 45$, dan $AC = 108$, maka $CD$ adalah $\\cdots$',
          figures: [
            {
              src: '/papers/osnk-mat-sma-2024/fig-7.webp',
              alt: 'Segiempat ABCD dengan kedua diagonal AC dan BD berpotongan di titik E di dalam segiempat.',
              caption: 'Ilustrasi segiempat ABCD dengan titik potong diagonal E pada Soal 7.'
            }
          ],
          answer: '$70$',
          principle: 'Hubungan luas segitiga $[AED] = [BEC]$ yang mengimplikasikan kesebangunan $\\triangle AEB \\sim \\triangle CED$ (atau kesejajaran $AB \\parallel CD$).',
          solution:
            'Pada gambar, titik $E$ merupakan perpotongan diagonal $AC$ dan $BD$ di dalam segiempat $ABCD$, sehingga $A, E, C$ segaris dan $B, E, D$ segaris. Karena $AE = 45$ dan $AC = 108$, panjang $EC$ adalah:\n$$EC = AC - AE = 108 - 45 = 63.$$\nDiketahui luas $\\triangle AED$ sama dengan luas $\\triangle BEC$, yakni $[AED] = [BEC]$. Karena $\\angle AED$ dan $\\angle BEC$ merupakan sudut bertolak belakang, maka $\\angle AED = \\angle BEC$, sehingga:\n$$\\frac{1}{2} \\cdot AE \\cdot ED \\sin \\angle AED = \\frac{1}{2} \\cdot BE \\cdot EC \\sin \\angle BEC \\implies AE \\cdot ED = BE \\cdot EC \\implies \\frac{AE}{EC} = \\frac{BE}{ED}.$$\nPerhatikan $\\triangle AEB$ dan $\\triangle CED$. Selain perbandingan sisi $\\frac{AE}{EC} = \\frac{BE}{ED}$, kedua segitiga juga memiliki sudut apit bertolak belakang $\\angle AEB = \\angle CED$. Berdasarkan kriteria kesebangunan Sisi-Sudut-Sisi, diperoleh $\\triangle AEB \\sim \\triangle CED$ (secara ekuivalen, $[ABD] = [AED] + [AEB] = [BEC] + [AEB] = [ABC]$ beralas sama $AB$, sehingga $AB \\parallel CD$).\n\nAkibatnya, perbandingan sisi-sisi yang bersesuaian memenuhi:\n$$\\frac{AB}{CD} = \\frac{AE}{EC} \\implies \\frac{50}{CD} = \\frac{45}{63} = \\frac{5}{7}.$$\nDengan demikian:\n$$CD = \\frac{50 \\times 7}{5} = 70.$$',
          rubric: [
            { code: 'M1', text: 'Menghitung panjang $EC = AC - AE = 63$.' },
            { code: 'M1', text: 'Menggunakan $[AED] = [BEC]$ dan sudut bertolak belakang untuk memperoleh $\\frac{AE}{EC} = \\frac{BE}{ED}$.' },
            { code: 'M1', text: 'Menyimpulkan $\\triangle AEB \\sim \\triangle CED$ sehingga $\\frac{AB}{CD} = \\frac{AE}{EC}$.' },
            { code: 'A1', text: 'Menghitung panjang $CD = 70$.' }
          ]
        },
        {
          label: '8',
          marks: 4,
          prompt:
            'Banyaknya bilangan dua angka $\\overline{ab}$ dengan $a,b \\ne 0$ sehingga $\\overline{ab} + \\overline{ba}$ merupakan kelipatan $66$ adalah $\\cdots$',
          answer: '$13$',
          principle: 'Representasi basis sepuluh $\\overline{ab} = 10a + b$ dan pencacahan kasus berdasarkan sifat keterbagian.',
          solution:
            'Karena $\\overline{ab} = 10a + b$ dan $\\overline{ba} = 10b + a$, jumlahnya adalah:\n$$\\overline{ab} + \\overline{ba} = 11a + 11b = 11(a + b).$$\nAgar $11(a + b)$ merupakan kelipatan $66 = 11 \\times 6$, maka $a + b$ harus merupakan kelipatan $6$.\n\nKarena $a, b \\in \\{1, 2, \\dots, 9\\}$, batas jumlah kedua digit tersebut adalah:\n$$2 \\le a + b \\le 18.$$\nKelipatan $6$ pada selang $[2, 18]$ hanyalah $6, 12,$ dan $18$. Kita cacah semua pasangan $(a, b)$ dengan $1 \\le a, b \\le 9$:\n- Kasus 1 ($a + b = 6$): $(1,5), (2,4), (3,3), (4,2), (5,1)$, ada $5$ bilangan.\n- Kasus 2 ($a + b = 12$): karena $b = 12 - a \\le 9$ menuntut $a \\ge 3$, maka $a \\in \\{3, 4, 5, 6, 7, 8, 9\\}$, yakni $(3,9), (4,8), (5,7), (6,6), (7,5), (8,4), (9,3)$, ada $7$ bilangan.\n- Kasus 3 ($a + b = 18$): hanya $(9,9)$, ada $1$ bilangan.\n\nTotal banyaknya bilangan dua angka yang memenuhi adalah $5 + 7 + 1 = 13$.',
          rubric: [
            { code: 'M1', text: 'Menjabarkan $\\overline{ab} + \\overline{ba} = 11(a + b)$ dan menyimpulkan $6 \\mid (a + b)$.' },
            { code: 'M1', text: 'Menentukan nilai yang mungkin $a + b \\in \\{6, 12, 18\\}$ dari batas $1 \\le a, b \\le 9$.' },
            { code: 'M1', text: 'Mencacah banyaknya pasangan $(a, b)$ pada ketiga kasus ($5$, $7$, dan $1$).' },
            { code: 'A1', text: 'Memperoleh total $13$.' }
          ]
        },
        {
          label: '9',
          marks: 4,
          prompt:
            'Misalkan $k$ merupakan bilangan bulat positif terkecil kelipatan $2024$ yang memiliki $28$ faktor positif. Sisa hasil bagi $k$ oleh $100$ adalah $\\cdots$',
          answer: '$92$',
          principle: 'Faktorisasi prima, rumus banyaknya faktor positif $\\prod (e_i + 1)$, dan aritmetika modulo $100$.',
          solution:
            'Faktorisasi prima dari $2024$ adalah:\n$$2024 = 8 \\times 253 = 2^3 \\times 11^1 \\times 23^1.$$\nBanyaknya faktor positif dari $2024$ adalah $(3 + 1)(1 + 1)(1 + 1) = 16$.\n\nKarena $k$ kelipatan positif dari $2024$, faktorisasi prima $k$ berbentuk:\n$$k = 2^a \\cdot 11^b \\cdot 23^c \\cdot m$$\ndengan $a \\ge 3$, $b \\ge 1$, $c \\ge 1$, dan $m \\ge 1$ relatif prima terhadap $2, 11, 23$. Banyaknya faktor positif $k$ adalah:\n$$d(k) = (a + 1)(b + 1)(c + 1)\\,d(m) = 28.$$\nJika $m > 1$, maka $d(m) \\ge 2$ sehingga $d(k) \\ge 16 \\times 2 = 32 > 28$, tidak mungkin. Jadi $m = 1$, dan:\n$$(a + 1)(b + 1)(c + 1) = 28 = 2^2 \\times 7$$\ndengan $a + 1 \\ge 4$, $b + 1 \\ge 2$, dan $c + 1 \\ge 2$.\n\nKarena $a + 1$ adalah pembagi $28$ yang tidak kurang dari $4$, dan $(b + 1)(c + 1) = \\frac{28}{a + 1} \\ge 2 \\times 2 = 4$, nilai $a + 1$ hanya mungkin $4$ atau $7$:\n- Jika $a + 1 = 4$, maka $(b + 1)(c + 1) = 7$. Karena $7$ prima, tidak mungkin ditulis sebagai hasil kali dua bilangan bulat yang masing-masing $\\ge 2$.\n- Jika $a + 1 = 7$, maka $(b + 1)(c + 1) = 4$, yang karena $b + 1 \\ge 2$ dan $c + 1 \\ge 2$ memaksa $b + 1 = 2$ dan $c + 1 = 2$.\n\nDengan demikian, solusi tunggalnya adalah $a = 6, b = 1, c = 1$, sehingga:\n$$k = 2^6 \\times 11 \\times 23 = 2^3 \\times 2024 = 8 \\times 2024.$$\nSisa pembagian $k$ oleh $100$ adalah:\n$$k = 8 \\times 2024 \\equiv 8 \\times 24 = 192 \\equiv 92 \\pmod{100}.$$',
          rubric: [
            { code: 'M1', text: 'Memfaktorkan $2024 = 2^3 \\times 11 \\times 23$ dan membuktikan $k$ tidak memuat faktor prima lain selain $2, 11, 23$.' },
            { code: 'M1', text: 'Menyelesaikan $(a + 1)(b + 1)(c + 1) = 28$ dengan $a \\ge 3$ dan $b, c \\ge 1$ hingga diperoleh $k = 2^3 \\times 2024$ secara tunggal.' },
            { code: 'M1', text: 'Menghitung kongruensi $8 \\times 2024 \\equiv 8 \\times 24 \\pmod{100}$.' },
            { code: 'A1', text: 'Memperoleh sisa pembagian $92$.' }
          ]
        },
        {
          label: '10',
          marks: 4,
          prompt:
            'Misalkan $x$ dan $y$ merupakan bilangan real positif dengan $x>y.$ Jika diketahui bahwa $x^2+y^2=\\frac{545}{272}xy,$ maka nilai dari $\\frac{x+y}{x-y}$ adalah $\\cdots$',
          answer: '$33$',
          principle: 'Identitas kuadrat jumlah dan selisih $(x \\pm y)^2 = x^2 + y^2 \\pm 2xy$.',
          solution:
            'Dengan memanfaatkan identitas $(x + y)^2 = x^2 + y^2 + 2xy$ dan $(x - y)^2 = x^2 + y^2 - 2xy$, substitusikan $x^2 + y^2 = \\frac{545}{272}xy$:\n$$(x + y)^2 = \\frac{545}{272}xy + 2xy = \\frac{545 + 544}{272}xy = \\frac{1089}{272}xy = \\frac{33^2}{272}xy,$$\n$$(x - y)^2 = \\frac{545}{272}xy - 2xy = \\frac{545 - 544}{272}xy = \\frac{1}{272}xy.$$\nKarena $x > y > 0$, maka $x + y > 0$, $x - y > 0$, dan $xy > 0$. Membagi kedua persamaan menghasilkan:\n$$\\left(\\frac{x + y}{x - y}\\right)^2 = \\frac{\\frac{33^2}{272}xy}{\\frac{1}{272}xy} = 33^2.$$\nKarena $\\frac{x + y}{x - y} > 0$, diperoleh:\n$$\\frac{x + y}{x - y} = 33.$$',
          rubric: [
            { code: 'M1', text: 'Menghitung $(x + y)^2 = \\frac{1089}{272}xy$.' },
            { code: 'M1', text: 'Menghitung $(x - y)^2 = \\frac{1}{272}xy$.' },
            { code: 'M1', text: 'Membagi kedua persamaan untuk memperoleh $\\left(\\frac{x+y}{x-y}\\right)^2 = 33^2$ dan menggunakan syarat $x > y > 0$.' },
            { code: 'A1', text: 'Menyimpulkan $\\frac{x + y}{x - y} = 33$.' }
          ]
        }
      ]
    }
  ]
};
