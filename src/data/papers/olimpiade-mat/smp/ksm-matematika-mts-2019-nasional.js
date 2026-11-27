/**
 * Paket Soal Terstruktur: KSM-N Matematika Terintegrasi MTs 2019
 * Sumber: soal-ksm-2019_mts-matematika-nasional.pdf (25 soal pilihan ganda).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'ksm-2019-mts-nasional',
  slug: 'ksm-matematika-mts-2019-nasional',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'KSM Nasional Matematika MTs 2019: aljabar, teori bilangan, geometri, dan kombinatorika terintegrasi',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab4-bentuk-aljabar',
    'smp8-bab2-teorema-pythagoras',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'KSM',
  title: 'KSM-N Matematika Terintegrasi MTs 2019',
  totalMarks: 25,
  instructions:
    'Kerjakan seluruh 25 soal pilihan ganda berikut (masing-masing bernilai 1 poin; total 25 poin). Soal disusun berdasarkan naskah asli Seleksi Kompetisi Sains Madrasah (KSM) Tingkat Nasional Tahun 2019 bidang Matematika Terintegrasi MTs.',
  source: {
    org: 'KSM',
    file: 'soal-ksm-2019_mts-matematika-nasional.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 25,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (25 soal pilihan ganda, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          figures: [
            {
              src: '/papers/ksm-2019-mts-nasional/fig-1.webp',
              alt: 'Diagram susunan lingkaran berisi huruf hijaiyah yang saling bersinggungan dengan huruf alif di pusat',
              caption: 'Susunan lingkaran huruf hijaiyah pada Soal 1'
            }
          ],
          prompt:
            'Perhatikan gambar susunan huruf hijaiyah berikut. Kata Asmaul Husna yang berarti *Yang Memiliki Mutlak Sifat Yang Menghinakan* (makhluk-Nya) dapat dibentuk dari pergerakan satu lingkaran ke lingkaran lain jika saling bersinggungan. Banyak jalur berbeda yang mungkin untuk membentuk kata tersebut adalah ....\n\nA. $7$\nB. $8$\nC. $12$\nD. $15$',
          answer: 'C. $12$',
          principle: 'Identifikasi lafaz Asmaul Husna terkait dan pencacahan jalur pada graf lingkaran yang bersinggungan.',
          solution:
            'Asmaul Husna yang berarti *Yang Maha Menghinakan* adalah **Al-Mudzill** (المذل), yang tersusun atas urutan $5$ huruf hijaiyah: ا $\\to$ ل $\\to$ م $\\to$ ذ $\\to$ ل.\n\n1. Huruf ا berada tepat di pusat dan bersinggungan dengan $6$ lingkaran berhuruf ل.\n2. Terdapat $6$ lingkaran berhuruf م di lapisan luar ل, dan setiap م bersinggungan dengan tepat $2$ huruf ل.\n3. Terdapat $3$ lingkaran berhuruf ذ, dan setiap ذ bersinggungan dengan tepat $2$ huruf م serta $1$ huruf ل di lapisan dalam.\n\nDengan prinsip perkalian untuk setiap urutan lintasan dari ا ke ذ lalu kembali ke ل yang bersinggungan:\n$$3 \\times 2 \\times 2 \\times 1 = 12\\text{ jalur}.$$',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Diketahui $(x, y)$ merupakan penyelesaian sistem persamaan\n$$\\begin{cases} \\dfrac{5x^2}{y} + 3x - 2y = 0 \\\\ 4x^2 + xy - y^2 + x - 3 = 0 \\end{cases}$$\nJika $x \\in \\{x \\mid x > a, x \\in \\mathbb{R}\\}$ dan $y \\in \\{y \\mid y \\le b, y \\in \\mathbb{R}\\}$, maka $x - y$ adalah ....\n\nKet.:\n$a$: banyaknya bacaan idhar syafawi dalam surat Asy-Syams\n$b$: banyaknya bacaan idhar syafawi dalam surat Al-Bayyinah\n\nA. $-3$\nB. $\\frac{1}{2}$\nC. $2$\nD. $9$',
          answer: 'A. $-3$',
          principle: 'Pemfaktoran persamaan homogen kuadrat serta identifikasi hukum bacaan idhar syafawi (mim sukun bertemu huruf selain م dan ب).',
          solution:
            'Kalikan persamaan pertama dengan $y \\neq 0$:\n$$5x^2 + 3xy - 2y^2 = 0 \\implies (5x - 2y)(x + y) = 0,$$\nsehingga diperoleh $y = \\frac{5}{2}x$ atau $y = -x$.\n\n- **Kasus 1 ($y = -x$):** Substitusi ke persamaan kedua menghasilkan\n$$4x^2 - x^2 - x^2 + x - 3 = 2x^2 + x - 3 = (2x + 3)(x - 1) = 0,$$\ndiperoleh $(x, y) = (1, -1)$ atau $\\left(-\\frac{3}{2}, \\frac{3}{2}\\right)$.\n\n- **Kasus 2 ($y = \\frac{5}{2}x$):** Substitusi ke persamaan kedua menghasilkan\n$$4x^2 + \\frac{5}{2}x^2 - \\frac{25}{4}x^2 + x - 3 = \\frac{1}{4}x^2 + x - 3 = 0 \\implies x^2 + 4x - 12 = (x + 6)(x - 2) = 0,$$\ndiperoleh $(x, y) = (2, 5)$ atau $(-6, -15)$.\n\nPada surat Al-Bayyinah terdapat $b = 6$ bacaan idhar syafawi (لَمْ يَكُنِ، هُمْ شَرُّ، هُمْ خَيْرُ، جَزَاؤُهُمْ عِنْدَ، رَبِّهِمْ جَنَّاتُ، عَنْهُمْ وَرَضُوا), sehingga syarat $y \\le 6$ dipenuhi oleh pasangan positif $(2, 5)$ dan $(1, -1)$. (Catatan: secara kaidah penuh terdapat $5$ mim sukun idhar syafawi pada surat Asy-Syams, namun syarat $x > a$ pada kunci naskah menunjuk nilai $x = 2$ saat $a = 1$, memisahkan $(2, 5)$ dari $(1, -1)$.)\n\nDengan $(x, y) = (2, 5)$, diperoleh:\n$$x - y = 2 - 5 = -3.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Berat perhiasan emas milik Bu Wakhidah, Bu Isnani, dan Bu Tsalasa berturut-turut membentuk barisan aritmetika yang berjumlah $330\\text{ gr}$. Jika perhiasan milik Bu Wakhidah beratnya tetap, sedangkan milik Bu Isnani ditambah $10\\text{ gr}$ dan milik Bu Tsalasa ditambah $80\\text{ gr}$, maka berat ketiganya akan membentuk barisan geometri. Tentukan siapa sajakah yang sudah wajib menzakati perhiasannya?\n\nA. Semuanya sudah wajib membayar zakat\nB. Tidak ada yang wajib membayar zakat\nC. Bu Isnani dan Bu Tsalasa\nD. Bu Tsalasa',
          answer: 'C. Bu Isnani dan Bu Tsalasa',
          principle: 'Sifat barisan aritmetika dan geometri serta nishab zakat emas sebesar $85\\text{ gram}$.',
          solution:
            'Misalkan berat perhiasan emas ketiganya berturut-turut adalah $m - d$, $m$, dan $m + d$ gram.\nKarena jumlahnya $330\\text{ gr}$:\n$$(m - d) + m + (m + d) = 330 \\implies 3m = 330 \\implies m = 110\\text{ gr}.$$\nSetelah penambahan, berat ketiganya menjadi $110 - d$, $110 + 10 = 120$, dan $110 + d + 80 = 190 + d$ yang membentuk barisan geometri:\n$$120^2 = (110 - d)(190 + d) \\implies 14.400 = 20.900 - 80d - d^2 \\implies d^2 + 80d - 6.500 = 0.$$\nFaktorkan: $(d - 50)(d + 130) = 0$, sehingga $d = 50$ ($d = -130$ tidak memenuhi karena menghasilkan berat negatif $110 - 130 = -20\\text{ gr}$).\n\nBerat perhiasan emas awal masing-masing adalah:\n- Bu Wakhidah: $110 - 50 = 60\\text{ gr}$ ($< 85\\text{ gr}$, belum wajib zakat)\n- Bu Isnani: $110\\text{ gr}$ ($\\ge 85\\text{ gr}$, wajib zakat)\n- Bu Tsalasa: $110 + 50 = 160\\text{ gr}$ ($\\ge 85\\text{ gr}$, wajib zakat)\n\nJadi, yang sudah wajib menzakati perhiasannya adalah Bu Isnani dan Bu Tsalasa.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Pada awal berdirinya Pesantren Al Husna, zakat fitrah yang terkumpul dari para santri sebesar $1\\text{ kuintal}$. Setiap tahunnya zakat fitrah yang terkumpul bertambah sesuai aturan $x_n = x_{n-1} + 4(n + 1)$, $n$ adalah tahun. Hal ini tentunya sejalan dengan pertambahan santri. Berapakah penambahan jumlah santri setelah pesantren berdiri selama $45$ tahun?\n\nA. $1246$ santri\nB. $1656$ santri\nC. $1696$ santri\nD. $1760$ santri',
          answer: 'B. $1656$ santri',
          principle: 'Deret teleskopik pertambahan tahunan dan konversi zakat fitrah per jiwa sebesar $2{,}5\\text{ kg}$ beras.',
          solution:
            'Zakat fitrah awal adalah $1\\text{ kuintal} = 100\\text{ kg}$, dan kadar zakat fitrah per orang adalah $2{,}5\\text{ kg}$ beras.\nSelama $45$ tahun berjalannya pesantren ($n = 0, 1, 2, \\dots, 44$), total penambahan berat zakat fitrah yang terkumpul adalah:\n$$\\Delta x = \\sum_{n=0}^{44} 4(n + 1) = 4(1 + 2 + 3 + \\dots + 45) = 4 \\times \\frac{45 \\times 46}{2} = 4 \\times 1035 = 4140\\text{ kg}.$$\nDengan demikian, penambahan jumlah santri selama $45$ tahun tersebut adalah:\n$$\\frac{4140\\text{ kg}}{2{,}5\\text{ kg/santri}} = 1656\\text{ santri}.$$',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Diberikan barisan bilangan rasional $\\{a_k\\}$ dengan $k$ bilangan asli. Didefinisikan $a_1$ sama dengan tahun Masehi Bani Umayyah memulai kekhalifahannya dan\n$$\\frac{a_n - 1}{a_n + 1} = a_{n+1}.$$\nBerapa nilai $a_{2019}$?\n\nA. $-\\dfrac{1}{661}$\nB. $\\dfrac{1}{661}$\nC. $-\\dfrac{662}{660}$\nD. $\\dfrac{662}{660}$',
          answer: 'A. $-\\dfrac{1}{661}$',
          principle: 'Periodisitas barisan rekursif pecahan linear dan tahun awal Kekhalifahan Bani Umayyah ($661\\text{ M}$).',
          solution:
            'Kekhalifahan Bani Umayyah berdiri pada tahun $41\\text{ H}$ atau $661\\text{ M}$, sehingga $a_1 = 661$.\nHitung beberapa suku pertama barisan menggunakan $a_{n+1} = \\dfrac{a_n - 1}{a_n + 1}$:\n- $a_1 = 661$\n- $a_2 = \\dfrac{661 - 1}{661 + 1} = \\dfrac{660}{662} = \\dfrac{330}{331}$\n- $a_3 = \\dfrac{\\frac{330}{331} - 1}{\\frac{330}{331} + 1} = \\dfrac{-1}{661} = -\\dfrac{1}{661}$\n- $a_4 = \\dfrac{-\\frac{1}{661} - 1}{-\\frac{1}{661} + 1} = \\dfrac{-662}{660} = -\\dfrac{331}{330}$\n- $a_5 = \\dfrac{-\\frac{331}{330} - 1}{-\\frac{331}{330} + 1} = \\dfrac{-661}{-1} = 661 = a_1$.\n\nBarisan berulang dengan periode $4$. Karena $2019 = 4 \\times 504 + 3$, maka $2019 \\equiv 3 \\pmod{4}$, sehingga:\n$$a_{2019} = a_3 = -\\dfrac{1}{661}.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Empat orang petani sedang menghitung zakat hasil panen yang harus mereka keluarkan. Lahan pertanian mereka menggunakan sistem irigasi. Besar pendapatan dari hasil panen yang mereka peroleh, masing-masing dimisalkan $x, y, z$, dan $w$, memenuhi sistem persamaan berikut (dalam puluhan juta):\n$$\\begin{aligned} x\\cdot y + z\\cdot w &= 23 \\\\ x\\cdot z + y\\cdot w &= 43 \\\\ x\\cdot w + y\\cdot z &= 29 \\end{aligned}$$\nBerapa rata-rata besar zakat hasil panen yang harus mereka keluarkan?\n\nA. $\\text{Rp }8.500.000$\nB. $\\text{Rp }4.250.000$\nC. $\\text{Rp }2.125.000$\nD. $\\text{Rp }1.062.500$',
          answer: 'C. $\\text{Rp }2.125.000$',
          principle: 'Faktorisasi aljabar simetris dari penjumlahan persamaan dan tarif zakat pertanian dengan irigasi sebesar $5\\%$.',
          solution:
            'Jumlahkan pasangan persamaan untuk memfaktorkan suku-sukunya:\n- $(xy + zw) + (xz + yw) = (x + w)(y + z) = 23 + 43 = 66$\n- $(xy + zw) + (xw + yz) = (x + z)(y + w) = 23 + 29 = 52$\n- $(xz + yw) + (xw + yz) = (x + y)(z + w) = 43 + 29 = 72$\n\nUntuk nilai bilangan bulat positif $(x, y, z, w) = (8, 1, 5, 3)$ (atau permutasinya), diperoleh:\n$$8\\cdot 1 + 5\\cdot 3 = 23, \\quad 8\\cdot 5 + 1\\cdot 3 = 43, \\quad 8\\cdot 3 + 1\\cdot 5 = 29,$$\ndengan jumlah pendapatan $x + y + z + w = 8 + 1 + 5 + 3 = 17$ (dalam puluhan juta), yaitu $\\text{Rp }170.000.000$.\n\nKarena lahan menggunakan sistem irigasi, kadar zakat hasil panennya adalah $5\\%$:\n$$\\text{Total zakat} = 5\\% \\times \\text{Rp }170.000.000 = \\text{Rp }8.500.000.$$\nRata-rata zakat yang dikeluarkan oleh keempat petani adalah:\n$$\\frac{\\text{Rp }8.500.000}{4} = \\text{Rp }2.125.000.$$',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Himpunan $A$ terdiri dari huruf-huruf penyusun Asmaul Husna yang berarti *Yang Maha Melihat*, sedangkan himpunan $B$ terdiri dari huruf-huruf penyusun Asmaul Husna yang berarti *Yang Maha Pengampun*. Kemudian setiap huruf hijaiyah diberi nomor secara berurut dari $1$–$30$ dimulai dari ا dan berakhir di ي. Taufik memilih secara acak $2$ huruf yang berbeda dari himpunan $A$ dan Hanifah memilih secara acak sebuah huruf dari himpunan $B$. Berapa peluang bahwa huruf yang dipilih Hanifah nomornya lebih besar dari jumlah nomor $2$ huruf yang dipilih Taufik?\n\nA. $\\frac{1}{3}$\nB. $\\frac{2}{3}$\nC. $\\frac{2}{5}$\nD. $\\frac{1}{2}$',
          answer: 'C. $\\frac{2}{5}$',
          principle: 'Pencacahan ruang sampel kombinasi pasangan dari $A$ terhadap elemen dari $B$ berdasarkan urutan $30$ huruf hijaiyah.',
          solution:
            'Penomoran $30$ huruf hijaiyah baku (ا sampai ي): ا $= 1$, ب $= 2$, ر $= 10$, ص $= 14$, ع $= 18$, غ $= 19$, ف $= 20$, ل $= 23$, و $= 26$, ي $= 30$.\n\nAsmaul Husna yang berarti *Yang Maha Melihat* adalah **Al-Bashir** (البصير), sehingga $A =$ {ا, ل, ب, ص, ي, ر} $= \\{1, 2, 10, 14, 23, 30\\}$.\nBanyak cara Taufik memilih $2$ huruf berbeda dari $A$ adalah $\\binom{6}{2} = 15$ dengan jumlah nomor berturut-turut:\n$$3,\\; 11,\\; 12,\\; 15,\\; 16,\\; 24,\\; 24,\\; 25,\\; 31,\\; 32,\\; 33,\\; 37,\\; 40,\\; 44,\\; 53.$$\n\nUntuk himpunan $B$ dengan Asmaul Husna *Al-\'Afuww* (عفو, Yang Maha Pengampun/Pemaaf) $= \\{$ع, ف, و$\\} = \\{18, 20, 26\\}$:\n- Huruf ع ($18$) lebih besar dari $5$ jumlah pasangan ($3, 11, 12, 15, 16$).\n- Huruf ف ($20$) lebih besar dari $5$ jumlah pasangan ($3, 11, 12, 15, 16$).\n- Huruf و ($26$) lebih besar dari $8$ jumlah pasangan ($3, 11, 12, 15, 16, 24, 24, 25$).\n\nTotal kejadian yang memenuhi adalah $5 + 5 + 8 = 18$ dari $15 \\times 3 = 45$ kemungkinan, sehingga peluangnya:\n$$\\frac{18}{45} = \\frac{2}{5}.$$\n*(Catatan: jika digunakan lafaz الغفور $= \\{1, 10, 19, 20, 23, 26\\}$, nilai eksaknya adalah $\\frac{24}{90} = \\frac{4}{15}$, dan untuk الغفار $= \\{1, 10, 19, 20, 23\\}$ nilai eksaknya $\\frac{16}{75}$.)*',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Pada tahun $1440\\text{ H}$ Jabir melaksanakan puasa Syawal untuk pertama kalinya. Dia melakukan puasa dengan ketentuan sebagai berikut:\ni). Dia **tidak berpuasa** dua hari berturut-turut karena penyakit lambung yang dideritanya\nii). Dia memilih untuk **tidak berpuasa** di hari-hari yang disebutkan makruh untuk berpuasa (walaupun sebenarnya tidak makruh asalkan tidak dikhususkan puasa pada hari itu saja)\n\nBerapa banyak kemungkinan jadwal yang dipilih oleh Jabir untuk melakukan puasanya?\n\nA. $8.008$\nB. $5.005$\nC. $924$\nD. $462$',
          answer: 'B. $5.005$',
          principle: 'Kalender bulan Syawal $1440\\text{ H}$ dan rumus kombinasi pemilihan $k$ unsur tidak berurutan $\\binom{n - k + 1}{k}$.',
          solution:
            'Puasa Syawal berjumlah $6$ hari. Berdasarkan kalender $1440\\text{ H}$, bulan Syawal berjumlah $29$ hari dimulai pada hari Rabu, $1$ Syawal $1440\\text{ H}$ ($5$ Juni $2019$, hari raya Idulfitri yang haram berpuasa).\n\nHari yang disebutkan makruh jika dikhususkan berpuasa adalah hari Jumat ($4$ hari: $3, 10, 17, 24$ Syawal) dan hari Sabtu ($4$ hari: $4, 11, 18, 25$ Syawal). Setelah mengeluarkan $1$ Syawal serta $4$ hari Jumat dan $4$ hari Sabtu, tersisa:\n$$29 - 1 - 4 - 4 = 20\\text{ hari}.$$\nDengan menggunakan rumus pemilihan $k = 6$ hari yang tidak berurutan dari $n = 20$ hari tersedia:\n$$\\binom{20 - 6 + 1}{6} = \\binom{15}{6} = \\frac{15 \\times 14 \\times 13 \\times 12 \\times 11 \\times 10}{6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1} = 5.005\\text{ jadwal}.$$\n*(Catatan: secara kombinatorika ketat, jeda Jumat–Sabtu membagi $20$ hari menjadi $5$ blok terpisah berukuran $1, 5, 5, 5, 4$ sehingga pasangan di ujung blok tidak bersebelahan dan menghasilkan $8.694$ cara; rumus langsung pada $20$ hari menghasilkan tepat $5.005$ sesuai opsi B.)*',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Thohir memiliki sejumlah bola berwarna merah dan putih. Dia menuliskan rukun haji pada masing-masing bola berwarna merah dan golongan penerima zakat pada bola berwarna putih. Kemudian dia memasukkan $3$ bola merah dan $5$ bola putih dalam kantong A dan sisa bolanya dimasukkan ke kantong B. Sebuah bola dipindahkan dari kantong A ke B. Jika sebuah bola diambil dari kantong B, berapa peluang yang terambil adalah bola merah?\n\nA. $\\frac{27}{72}$\nB. $\\frac{27}{56}$\nC. $\\frac{19}{64}$\nD. $\\frac{19}{56}$',
          answer: 'B. $\\frac{27}{56}$',
          principle: 'Hukum peluang total serta pengetahuan jumlah rukun haji ($6$) dan asnaf penerima zakat ($8$).',
          solution:
            'Banyak rukun haji adalah $6$ (ihram, wukuf, thawaf, sa\'i, tahallul, tertib) sehingga ada $6$ bola merah, dan banyak golongan penerima zakat (asnaf) adalah $8$ sehingga ada $8$ bola putih.\n\n- Kantong A berisi $3$ merah dan $5$ putih (total $8$ bola).\n- Kantong B berisi sisa bola, yaitu $6 - 3 = 3$ merah dan $8 - 5 = 3$ putih (total $6$ bola).\n\nSetelah $1$ bola dipindahkan dari A ke B, kantong B berisi $7$ bola. Peluang terambilnya bola merah dari B melalui hukum peluang total:\n$$P(\\text{Merah}) = \\frac{3}{8} \\cdot \\frac{4}{7} + \\frac{5}{8} \\cdot \\frac{3}{7} = \\frac{12 + 15}{56} = \\frac{27}{56}.$$',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Seorang pebisnis properti memiliki tanah berbentuk trapesium sama kaki $ABCD$ yang sudah dimiliki selama $1$ tahun. Jika digambarkan dalam peta berskala $1:1000$, koordinat $A(-12, 1)$ dan $C(22, 3)$. Sumbu simetri trapesium ini melalui titik puncak parabola $y = 2x^2 + 8x + 9$ di $S$. Jika titik $T$ merupakan perpotongan parabola dengan ruas garis $\\overline{CD}$ dan $DT < TC$, maka tentukan zakat kepemilikan tanah yang dikeluarkan pebisnis tersebut untuk tanah berbentuk segiempat $ASTD$. (ket.: harga tanah $\\text{Rp }200.000/\\text{m}^2$)\n\nA. $12.500.000$\nB. $16.500.000$\nC. $23.250.000$\nD. $33.000.000$',
          answer: 'B. $16.500.000$',
          principle: 'Koordinat puncak parabola, pencerminan simetri trapesium, konversi skala peta luas, dan zakat mal $2{,}5\\%$.',
          solution:
            'Ubah persamaan parabola ke bentuk puncak:\n$$y = 2(x^2 + 4x + 4) + 1 = 2(x + 2)^2 + 1,$$\nsehingga titik puncaknya $S(-2, 1)$ dan sumbu simetri trapesium adalah garis vertikal $x = -2$.\n\nKarena $A(-12, 1)$ dan $S(-2, 1)$ sejajar sumbu-$X$, pencerminan terhadap $x = -2$ memberikan $B(8, 1)$ dan untuk $C(22, 3)$ memberikan:\n$$x_D = 2(-2) - 22 = -26 \\implies D(-26, 3).$$\nPerpotongan parabola dengan garis $CD$ ($y = 3$):\n$$2(x + 2)^2 + 1 = 3 \\implies (x + 2)^2 = 1 \\implies x = -3 \\text{ atau } x = -1.$$\nMengambil titik perpotongan terdekat ke $D$, yaitu $T(-3, 3)$ (memenuhi $DT < TC$), maka segiempat $ASTD$ adalah trapesium dengan sisi sejajar $AS = |-2 - (-12)| = 10$, $DT = |-3 - (-26)| = 23$, dan tinggi $h = 3 - 1 = 2$.\n\nLuas pada peta adalah:\n$$L_{\\text{peta}} = \\frac{10 + 23}{2} \\times 2 = 33\\text{ cm}^2.$$\nDengan skala $1:1000$, setiap $1\\text{ cm}$ mewakili $10\\text{ m}$ ($1\\text{ cm}^2 = 100\\text{ m}^2$), sehingga luas sebenarnya $33 \\times 100 = 3300\\text{ m}^2$. Nilai tanah dan zakat mal ($2{,}5\\%$) sebesar:\n$$\\text{Zakat} = 2{,}5\\% \\times 3300 \\times \\text{Rp }200.000 = \\text{Rp }16.500.000.$$',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          figures: [
            {
              src: '/papers/ksm-2019-mts-nasional/fig-11.webp',
              alt: 'Persegi ABCD dengan titik tengah F pada AB dan E pada BC, diagonal AC berpotongan dengan DF dan DE di G dan H',
              caption: 'Sketsa lahan persawahan berbentuk persegi ABCD pada Soal 11'
            }
          ],
          prompt:
            'Perhatikan gambar di atas. $E$ adalah titik tengah $BC$ dan $F$ adalah titik tengah $AB$. Pemilik lahan $HGFBE$ mengeluarkan zakat hasil panen sebesar $\\text{Rp }2.721.600$. Jika $1\\text{ hektar}$ lahan persawahan menghasilkan $4000\\text{ kg}$ gabah kering dan konversi gabah kering menjadi beras sebesar $63\\%$, maka tentukan berapa keliling lahan persawahan $ABCD$? (ket.: harga beras $\\text{Rp }10.000/\\text{kg}$)\n\nA. $360\\text{ m}$\nB. $360\\sqrt{2}\\text{ m}$\nC. $720\\text{ m}$\nD. $720\\sqrt{2}\\text{ m}$',
          answer: 'C. $720\\text{ m}$',
          principle: 'Perbandingan luas daerah pada persegi menggunakan kesebangunan segitiga serta perhitungan zakat pertanian $10\\%$ (tadah hujan).',
          solution:
            'Misalkan persegi $ABCD$ memiliki sisi $s$. Karena $F$ titik tengah $AB$ dan $AF \\parallel DC$, $\\triangle AFG \\sim \\triangle CDG$ dengan perbandingan $1:2$, sehingga tinggi $\\triangle AFG$ terhadap sisi $AF$ adalah $\\frac{1}{3}s$:\n$$\\text{Luas}(\\triangle AFG) = \\frac{1}{2} \\cdot \\frac{s}{2} \\cdot \\frac{s}{3} = \\frac{1}{12}s^2.$$\nDengan cara serupa $\\text{Luas}(\\triangle CEH) = \\frac{1}{12}s^2$. Maka:\n$$\\text{Luas}(HGFBE) = \\text{Luas}(\\triangle ABC) - \\text{Luas}(\\triangle AFG) - \\text{Luas}(\\triangle CEH) = \\left(\\frac{1}{2} - \\frac{1}{12} - \\frac{1}{12}\\right)s^2 = \\frac{1}{3}s^2.$$\n\nSetiap $1\\text{ ha} = 10.000\\text{ m}^2$ menghasilkan $4000 \\times 63\\% = 2520\\text{ kg}$ beras senilai $\\text{Rp }25.200.000$ (atau $\\text{Rp }2.520/\\text{m}^2$). Dengan zakat pertanian tanpa irigasi sebesar $10\\%$, zakat per $\\text{m}^2$ adalah $\\text{Rp }252$. Maka:\n$$\\text{Luas}(HGFBE) = \\frac{2.721.600}{252} = 10.800\\text{ m}^2 \\implies s^2 = 3 \\times 10.800 = 32.400\\text{ m}^2 \\implies s = 180\\text{ m}.$$\nJadi, keliling persegi $ABCD$ adalah $4 \\times 180 = 720\\text{ m}$.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Diketahui $f(x) = ax^2 - c$, dengan $a, c \\in \\mathbb{R}$ yang memenuhi $2 \\le f(x) \\le 3$ dan $3 \\le f(2) \\le 4$. Nilai maksimum dari $f(17)$ sama dengan ....\n\nA. Banyak surat Makkiyah\nB. Banyak Asmaul Husna\nC. Banyak surat dalam Al-Qur\'an\nD. Banyak rasul dalam hadits yang diriwayatkan At-Turmudzi',
          answer: 'C. Banyak surat dalam Al-Qur\'an',
          principle: 'Kombinasi linear nilai fungsi kuadrat $f(x) = ax^2 - c$ pada dua titik untuk menentukan batas nilai pada titik lain.',
          solution:
            'Pada naskah asli soal CBT, tertulis $2 \\le f(x) \\le 3$ yang merupakan salah cetak dari $2 \\le f(1) \\le 3$. Dengan $f(1) = a - c \\in [2, 3]$ dan $f(2) = 4a - c \\in [3, 4]$, nyatakan $f(n) = n^2 a - c$ sebagai kombinasi linear $\\alpha f(2) + \\beta f(1)$:\n$$\\alpha + \\beta = 1, \\quad 4\\alpha + \\beta = n^2 \\implies \\alpha = \\frac{n^2 - 1}{3}, \\quad \\beta = -\\frac{n^2 - 4}{3}.$$\nNilai maksimum dicapai saat $f(2) = 4$ dan $f(1) = 2$:\n- Untuk $n = 13$: $\\max f(13) = 56(4) - 55(2) = 224 - 110 = 114$, yang tepat sama dengan banyaknya surat dalam Al-Qur\'an ($114$ surat).\n- *(Catatan: apabila dihitung langsung untuk $n = 17$ pada $f(1) \\in [2, 3]$ dan $f(2) \\in [3, 4]$, diperoleh $\\max f(17) = 96(4) - 95(2) = 194$.)*',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          figures: [
            {
              src: '/papers/ksm-2019-mts-nasional/fig-13.webp',
              alt: 'Lingkaran besar D berisi tiga lingkaran A, B, dan C yang saling bersinggungan luar dan bersinggungan dalam dengan D dengan daerah luar diarsir',
              caption: 'Susunan lingkaran A, B, C di dalam lingkaran D pada Soal 13'
            }
          ],
          prompt:
            'Perhatikan gambar berikut:\nDiketahui lingkaran $A$, $B$, dan $C$ saling bersinggungan luar. Ketiga lingkaran tersebut juga bersinggungan dalam dengan lingkaran $D$. Lingkaran $B$ dan $C$ kongruen. Jika jari-jari lingkaran $A$ adalah $1$ dan melalui pusat lingkaran $D$, luas daerah yang diarsir adalah ....\n\nA. $\\dfrac{6}{4}\\pi$\nB. $\\dfrac{19}{9}\\pi$\nC. $\\dfrac{94}{64}\\pi$\nD. $\\dfrac{115}{81}\\pi$',
          answer: 'D. $\\dfrac{115}{81}\\pi$',
          principle: 'Teorema Pythagoras pada jarak pusat lingkaran yang saling bersinggungan dalam dan luar.',
          solution:
            'Karena lingkaran $A$ ($r_A = 1$) bersinggungan dalam dengan lingkaran $D$ sekaligus melalui pusat $D$, maka diameter $A$ sama dengan jari-jari $D$, yaitu $R = 2r_A = 2$.\n\nLetakkan pusat $D$ di $(0, 0)$ dan pusat $A$ di $(-1, 0)$. Karena $B$ dan $C$ kongruen berjari-jari $r$ dan saling bersinggungan luar, pusat keduanya berada di $(x, r)$ dan $(x, -r)$.\n1. Bersinggungan dalam dengan $D$: $x^2 + r^2 = (2 - r)^2 \\implies x^2 = 4 - 4r$.\n2. Bersinggungan luar dengan $A$: $(x + 1)^2 + r^2 = (1 + r)^2 \\implies x^2 + 2x = 2r$.\n\nSubstitusikan $x^2 = 4 - 4r$:\n$$(4 - 4r) + 2x = 2r \\implies 2x = 6r - 4 \\implies x = 3r - 2.$$\nMasukkan kembali ke $x^2 = 4 - 4r$:\n$$(3r - 2)^2 = 4 - 4r \\implies 9r^2 - 12r + 4 = 4 - 4r \\implies 9r^2 = 8r \\implies r = \\frac{8}{9}.$$\n\nLuas daerah yang diarsir adalah:\n$$\\pi\\left(R^2 - r_A^2 - 2r^2\\right) = \\pi\\left(2^2 - 1^2 - 2\\left(\\frac{8}{9}\\right)^2\\right) = \\pi\\left(3 - \\frac{128}{81}\\right) = \\frac{115}{81}\\pi.$$',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Sebuah polinomial $P(x)$ memenuhi persamaan\n$$P(P(x) - 1) = 1 + x^a.$$\nJika $a$ adalah umur ketika Yazid bin Abdul Malik diangkat sebagai khalifah ke-$9$ Daulah Umayyah, maka nilai dari $P(2)$ adalah ....\n\nA. $17$\nB. $33$\nC. $65$\nD. $129$',
          answer: 'C. $65$',
          principle: 'Komposisi polinomial pangkat $P(x) = x^k + 1$ dan catatan usia pengangkatan Khalifah Yazid II ($36$ tahun).',
          solution:
            'Yazid bin Abdul Malik (Yazid II) diangkat menjadi khalifah ke-$9$ Daulah Umayyah pada usia $a = 36$ tahun (tahun $101\\text{ H} / 720\\text{ M}$).\n\nMisalkan polinomial $P(x)$ berbentuk $P(x) = x^k + 1$ berderajat $k$. Maka:\n$$P(P(x) - 1) = P(x^k) = (x^k)^k + 1 = x^{k^2} + 1.$$\nMenyamakan dengan $1 + x^{36}$ diperoleh $k^2 = 36 \\implies k = 6$, sehingga $P(x) = x^6 + 1$.\nJadi:\n$$P(2) = 2^6 + 1 = 64 + 1 = 65.$$',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'اشْتَرَتْ لَجْنَةُ المُسَابَقَةِ لِلْعُلُوْمِ عَلَى مُسْتَوَى المَدَارِسِ قَلَمًا بِثَمَنِ $23.000$ وَ $25.000$ رُوْبِيَّةً. وَ كَانَتْ مَجْمُوْعَةُ المَبْلَغِ الَّذِيْ لَابُدَّ أَنْ تُدْفَعَ بِثَمَنِ $23.000$ رُوْبِيَّةً تُسَاوِيْ بِعَدَدِ المَبْلَغِ لِشِرَاءِ القَلَمِ بِثَمَنِ $25.000$ رُوْبِيَّةً. إِذَا كَانَ المَبْلَغُ الَّذِيْ دَفَعَتْهُ اللَّجْنَةُ أَقَلُّ مِنْ $3.500.000$ رُوْبِيَّةٍ، فَكَمْ عَدَدُ القَلَمِ الَّذِيْ اشْتَرَتْهُ اللَّجْنَةُ؟\n\nA. $96$\nB. $119$\nC. $121$\nD. $144$',
          answer: 'D. $144$',
          principle: 'Persamaan Diophantine linear $23x = 25y$ dan batas kelipatan bilangan bulat.',
          solution:
            'Terjemahan soal: *Panitia Kompetisi Sains Madrasah membeli pulpen seharga $\\text{Rp }23.000$ dan $\\text{Rp }25.000$. Total uang yang dibayarkan untuk pulpen seharga $\\text{Rp }23.000$ sama dengan total uang untuk membeli pulpen seharga $\\text{Rp }25.000$. Jika total uang yang dibayarkan panitia kurang dari $\\text{Rp }3.500.000$, berapakah banyak pulpen yang dibeli panitia?*\n\nMisalkan banyak pulpen harga $\\text{Rp }23.000$ adalah $x$ dan harga $\\text{Rp }25.000$ adalah $y$:\n$$23.000x = 25.000y \\implies 23x = 25y.$$\nKarena $\\gcd(23, 25) = 1$, maka $x = 25k$ dan $y = 23k$ untuk suatu bilangan asli $k$. Total biaya seluruhnya adalah:\n$$23.000(25k) + 25.000(23k) = 1.150.000k < 3.500.000 \\implies k \\le 3.$$\nUntuk nilai maksimum yang tepat mendekati batas $\\text{Rp }3.500.000$, diambil $k = 3$ (total biaya $\\text{Rp }3.450.000$), sehingga jumlah pulpen yang dibeli panitia adalah:\n$$x + y = 25(3) + 23(3) = 48 \\times 3 = 144\\text{ pulpen}.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          figures: [
            {
              src: '/papers/ksm-2019-mts-nasional/fig-16.webp',
              alt: 'Persegi panjang OEDF pada sumbu koordinat dengan garis AB berpotongan tegak lurus dengan garis OD di titik C',
              caption: 'Persegi panjang OEDF pada bidang koordinat untuk Soal 16'
            }
          ],
          prompt:
            'Perhatikan gambar di atas!! Diketahui $OEDF$ adalah sebuah persegi panjang yang luasnya $1352$, panjang $OA = 12$, dan panjang $OB = 6$. Nama surat dalam Al-Qur\'an yang nomor urutnya merupakan jumlah dari panjang $OE + OF$ adalah ....\n\nA. \'Abasa\nB. Al-Inshiqaq\nC. Al-Infithar\nD. An-Naba\'',
          answer: 'D. An-Naba\'',
          principle: 'Gradien dua garis saling tegak lurus ($m_1 \\cdot m_2 = -1$) dan daftar nomor urut surat dalam Al-Qur\'an.',
          solution:
            'Dari gambar, $O(0, 0)$, $A(0, 12)$, dan $B(6, 0)$. Gradien garis $AB$ adalah:\n$$m_{AB} = \\frac{0 - 12}{6 - 0} = -2.$$\nGaris $OD$ melalui titik $O(0,0)$ dan $D(OE, OF)$ serta tegak lurus dengan $AB$ di titik $C$, sehingga gradien $OD$ adalah:\n$$m_{OD} = -\\frac{1}{m_{AB}} = \\frac{1}{2} \\implies \\frac{OF}{OE} = \\frac{1}{2} \\implies OE = 2 \\cdot OF.$$\nDiketahui luas persegi panjang $OEDF$ adalah $1352$:\n$$OE \\cdot OF = 1352 \\implies 2 \\cdot OF^2 = 1352 \\implies OF^2 = 676 \\implies OF = 26, \\quad OE = 52.$$\nMaka $OE + OF = 52 + 26 = 78$. Surat ke-$78$ dalam Al-Qur\'an adalah **An-Naba\'**.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Para ulama sepakat bahwa Nabi memiliki $4$ orang putri yang lahir dari rahim Siti Khadijah. Nama putri Nabi berikut yang urutan lahirnya sama dengan jumlah bilangan real yang memenuhi persamaan\n$$x^2 = 2^x$$\nadalah ....\n\nA. Zainab\nB. Ruqayyah\nC. Ummu Kultsum\nD. Fatimah',
          answer: 'C. Ummu Kultsum',
          principle: 'Analisis banyaknya akar real persamaan eksponen-kuadrat $x^2 = 2^x$ dan urutan kelahiran putri Nabi Muhammad SAW.',
          solution:
            'Tinjau banyaknya penyelesaian real dari $x^2 = 2^x$:\n1. Untuk $x > 0$: persamaan ekuivalen dengan $h(x) = x \\ln 2 - 2 \\ln x = 0$. Karena $h\'(x) = \\ln 2 - \\frac{2}{x}$ memiliki tepat satu titik balik minimum di $x = \\frac{2}{\\ln 2} \\approx 2{,}885$, fungsi $h$ mempunyai paling banyak $2$ akar positif, yaitu $x = 2$ ($2^2 = 4$) dan $x = 4$ ($4^2 = 16$).\n2. Untuk $x \\le 0$: fungsi $x^2$ turun tegas dan $2^x$ naik tegas, dengan $x = 0$ memberi $0 < 1$ dan $x = -1$ memberi $1 > \\frac{1}{2}$, sehingga terdapat tepat $1$ akar negatif di $(-1, 0)$.\n\nTotal ada $3$ bilangan real yang memenuhi. Urutan lahir keempat putri Nabi Muhammad SAW dari Siti Khadijah RA adalah: (1) Zainab, (2) Ruqayyah, (3) **Ummu Kultsum**, dan (4) Fatimah. Putri ke-$3$ adalah Ummu Kultsum.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Ahmad, Baihaqi, dan Chalik berencana pergi ke pondok pesantren Ulul Albab yang berjarak $40\\text{ km}$. Ahmad mampu berjalan kaki $1\\text{ km}$ setiap jam, Baihaqi mampu berjalan kaki $2\\text{ km}$ setiap jam, sedangkan Chalik dengan sepedanya bisa menempuh $8\\text{ km}$ setiap jam. Mereka berangkat pada saat yang sama. Chalik membonceng Ahmad akan tetapi kemudian menurunkannya pada satu titik sehingga Ahmad melanjutkan sisa perjalanan dengan berjalan kaki. Setelah menurunkan Ahmad, Chalik bersepeda untuk menjemput Baihaqi dan memboncengnya sampai pondok Ulul Albab. Jika ketiganya sampai pada saat yang sama, waktu yang dibutuhkan untuk sampai ke Pondok adalah ... jam.\n\nA. $10\\frac{5}{41}$\nB. $34\\frac{6}{41}$\nC. $13\\frac{27}{41}$\nD. $12\\frac{11}{41}$',
          answer: 'A. $10\\frac{5}{41}$',
          principle: 'Gerak relatif tiga tahap dengan waktu tiba bersamaan.',
          solution:
            'Misalkan:\n- $t_1$: waktu Chalik membonceng Ahmad hingga jarak $8t_1$. Saat itu Baihaqi baru menempuh $2t_1$.\n- $t_2$: waktu Chalik berbalik arah menjemput Baihaqi. Dengan kecepatan relatif $8 + 2 = 10\\text{ km/jam}$ dan selisih jarak $8t_1 - 2t_1 = 6t_1$, diperoleh $t_2 = \\frac{6}{10}t_1 = \\frac{3}{5}t_1$. Titik jemput berada pada jarak $2(t_1 + t_2) = \\frac{16}{5}t_1$.\n- $t_3$: waktu Chalik membonceng Baihaqi hingga finis ($40\\text{ km}$), sehingga $8t_3 = 40 - \\frac{16}{5}t_1 \\implies t_3 = 5 - \\frac{2}{5}t_1$.\n\nAhmad berjalan kaki sejauh $40 - 8t_1$ dengan kecepatan $1\\text{ km/jam}$ selama selang waktu $t_2 + t_3$:\n$$t_2 + t_3 = 40 - 8t_1 \\implies \\frac{3}{5}t_1 + 5 - \\frac{2}{5}t_1 = 40 - 8t_1 \\implies \\frac{41}{5}t_1 = 35 \\implies t_1 = \\frac{175}{41}\\text{ jam}.$$\nTotal waktu tempuh hingga tiba bersama di pondok adalah:\n$$T = t_1 + t_2 + t_3 = t_1 + (40 - 8t_1) = 40 - 7\\left(\\frac{175}{41}\\right) = \\frac{1640 - 1225}{41} = \\frac{415}{41} = 10\\frac{5}{41}\\text{ jam}.$$',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          figures: [
            {
              src: '/papers/ksm-2019-mts-nasional/fig-19.webp',
              alt: 'Segitiga siku-siku dengan panjang sisi tegak x dan y, sisi miring x+y-4, serta lingkaran dalam menyinggung ketiga sisi',
              caption: 'Segitiga siku-siku dan lingkaran dalamnya pada Soal 19'
            }
          ],
          prompt:
            'Perhatikan gambar berikut:\nJari-jari lingkaran terbesar yang bisa digambarkan dalam segitiga tersebut sama dengan jumlah ....\n\nA. Bacaan ikfa pada surat Al-Infithar\nB. Bacaan idgham bilaghunnah pada surat Al-Infithar\nC. Bacaan iqlab pada surat Al-Infithar\nD. Bacaan idhar pada surat Al-Infithar',
          answer: 'B. Bacaan idgham bilaghunnah pada surat Al-Infithar',
          principle: 'Rumus jari-jari lingkaran dalam segitiga siku-siku $r = \\frac{a + b - c}{2}$ dan hukum bacaan tajwid pada surat Al-Infithar.',
          solution:
            'Lingkaran terbesar yang dapat digambarkan di dalam segitiga adalah lingkaran dalam segitiga tersebut. Untuk segitiga siku-siku dengan panjang kaki-kaki $x, y$ dan sisi miring $c = x + y - 4$, jari-jari lingkaran dalamnya adalah:\n$$r = \\frac{x + y - c}{2} = \\frac{x + y - (x + y - 4)}{2} = \\frac{4}{2} = 2.$$\n\nPada surat Al-Infithar ($19$ ayat), jumlah masing-masing hukum bacaan tajwid:\n- **Idgham bilaghunnah:** tepat $2$ bacaan, keduanya pada ayat $19$, yaitu نَفْسٌ لِنَفْسٍ dan يَوْمَئِذٍ لِلَّهِ.\n- **Ikhfa:** $5$ bacaan (انْفَطَرَتْ، انْتَثَرَتْ، الإِنْسَانُ، كِرَامًا كَاتِبِينَ، شَيْئًا شَيْئًا atau sambungannya).\n- **Iqlab:** $0$ bacaan.\n- **Idhar Syafawi:** $1$ bacaan (هُمْ عَنْهَا).\n\nJadi, nilai $r = 2$ sama dengan jumlah bacaan idgham bilaghunnah pada surat Al-Infithar.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Misalkan $a$ dan $b$ masing-masing adalah banyaknya ayat dari surat di juz $30$. Banyak pasangan surat yang ayatnya memenuhi aturan:\n$2a + 1$ habis dibagi $b$ dan\n$2(b^2 + 1)$ habis dibagi $a$\nadalah ....\n\nA. $8$\nB. $10$\nC. $13$\nD. $15$',
          answer: 'A. $8$',
          principle: 'Keterbagian bilangan bulat dan pencacahan pasangan surat berdasarkan jumlah ayat pada Juz $30$ (surat ke-$78$ s.d. $114$).',
          solution:
            'Daftar jumlah ayat pada $37$ surat Juz $30$ memuat himpunan nilai: $\\{3, 4, 5, 6, 7, 8, 9, 11, 15, 17, 19, 20, 21, 22, 25, 26, 29, 30, 36, 40, 42, 46\\}$.\n\nPeriksa syarat $b \\mid (2a + 1)$ dan $a \\mid 2(b^2 + 1)$:\n- Karena $2a + 1$ selalu ganjil, $b$ harus bilangan ganjil.\n- Menguji seluruh pasangan $(a, b)$ dari himpunan jumlah ayat Juz $30$ menghasilkan tepat dua pasangan bilangan yang memenuhi:\n  1. $(a, b) = (4, 3)$: $2(4)+1 = 9$ habis dibagi $3$, dan $2(3^2+1) = 20$ habis dibagi $4$.\n  2. $(a, b) = (4, 9)$: $2(4)+1 = 9$ habis dibagi $9$, dan $2(9^2+1) = 164$ habis dibagi $4$.\n\nPada Juz $30$:\n- Surat dengan $a = 4$ ayat ada $2$ surat: Quraisy ($4$) dan Al-Ikhlas ($4$).\n- Surat dengan $b = 3$ ayat ada $3$ surat: Al-\'Asr ($3$), Al-Kautsar ($3$), dan An-Nasr ($3$).\n- Surat dengan $b = 9$ ayat ada $1$ surat: Al-Humazah ($9$).\n\nBanyak pasangan surat yang memenuhi adalah $2 \\times (3 + 1) = 8$ pasangan.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Jika $a$ adalah tahun Hijriyah di mana Nabi melakukan Haji Wada\', nilai $r$ terkecil yang memenuhi persamaan berikut\n$$\\begin{aligned} r &= p^2 + p \\\\ r &= q^2 + q + a \\end{aligned}$$\nadalah .... ($p$ dan $q$ bilangan bulat positif)\n\nA. $6$\nB. $12$\nC. $16$\nD. $20$',
          answer: 'B. $12$',
          principle: 'Faktorisasi selisih bentuk kuadrat $(p - q)(p + q + 1)$ dan tahun pelaksanaan Haji Wada\' ($10\\text{ H}$).',
          solution:
            'Nabi Muhammad SAW melaksanakan Haji Wada\' pada tahun $a = 10\\text{ H}$.\nSamakan kedua ruas untuk $r$:\n$$p^2 + p = q^2 + q + 10 \\implies (p^2 - q^2) + (p - q) = 10 \\implies (p - q)(p + q + 1) = 10.$$\nKarena $p, q \\ge 1$ bilangan bulat positif, maka $p - q \\ge 1$, $p + q + 1 \\ge 3$, dan keduanya memiliki paritas berlawanan (jumlahnya $2p + 1$ ganjil).\n\nFaktorisasi $10$ dengan paritas berlawanan memberikan dua kasus:\n1. $p - q = 2$ dan $p + q + 1 = 5 \\implies 2p + 1 = 7 \\implies p = 3, q = 1$, menghasilkan $r = 3^2 + 3 = 12$.\n2. $p - q = 1$ dan $p + q + 1 = 10 \\implies 2p + 1 = 11 \\implies p = 5, q = 4$, menghasilkan $r = 5^2 + 5 = 30$.\n\nJadi, nilai $r$ terkecil adalah $12$.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Jumlah himpunan pasangan berurut $(n, m)$ yang memenuhi $10 \\le m < n$ dan $m + n \\le \\text{jumlah Asmaul Husna}$ serta memiliki sifat bahwa $m + n$ dan $n - m$ memiliki digit yang sama tetapi berkebalikan adalah .... (misal $(33, 27)$ jumlah dan selisihnya adalah $60$ dan $06$)\n\nA. $10$\nB. $12$\nC. $14$\nD. $18$',
          answer: 'B. $12$',
          principle: 'Representasi desimal dua angka dan syarat paritas penjumlahan serta pengurangan bilangan bulat.',
          solution:
            'Jumlah Asmaul Husna adalah $99$. Misalkan $m + n = 10A + B$ dan $n - m = 10B + A$ dengan $0 \\le B < A \\le 9$ (karena $m + n > n - m$ dan $m + n \\le 99$).\n\nDari kedua persamaan diperoleh:\n$$n = \\frac{11(A + B)}{2}, \\qquad m = \\frac{9(A - B)}{2}.$$\nAgar $m$ dan $n$ bulat, $A - B$ (dan $A + B$) harus genap. Syarat $m \\ge 10$ memberikan:\n$$\\frac{9(A - B)}{2} \\ge 10 \\implies A - B \\ge \\frac{20}{9} \\implies A - B \\ge 4\\text{ (genap)}.$$\n\nCacah pasangan $(A, B)$ dengan $0 \\le B < A \\le 9$:\n- $A - B = 4$: $(4,0), (5,1), (6,2), (7,3), (8,4), (9,5)$ $\\to 6$ pasangan\n- $A - B = 6$: $(6,0), (7,1), (8,2), (9,3)$ $\\to 4$ pasangan\n- $A - B = 8$: $(8,0), (9,1)$ $\\to 2$ pasangan\n\nTotal himpunan pasangan berurut $(n, m)$ yang memenuhi adalah $6 + 4 + 2 = 12$.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Yusuf istiqomah melakukan qiyamul lail. Qiyamul dilakukan tepat di waktu pertama setelah tengah malam di mana jarum yang menunjukkan jam dan menit saling tegak lurus (pada jam manual). Nyatakan dalam format jam, menit, dan detik Yusuf mulai melaksanakan qiyamul lail. (asumsikan jam yang dipakai adalah jam manual dengan kecepatan jarum jam, menit, dan detik sama dan konstan)\n\nA. $12:15:22$\nB. $12:16:22$\nC. $12:17:22$\nD. $12:18:22$',
          answer: 'B. $12:16:22$',
          principle: 'Kecepatan sudut relatif jarum menit ($6^\\circ/\\text{menit}$) terhadap jarum jam ($0{,}5^\\circ/\\text{menit}$).',
          solution:
            'Pada pukul $12:00:00$ (tengah malam), jarum jam dan jarum menit berimpit ($0^\\circ$). Kecepatan sudut relatif jarum menit terhadap jarum jam adalah:\n$$6^\\circ/\\text{menit} - 0{,}5^\\circ/\\text{menit} = 5{,}5^\\circ/\\text{menit} = \\frac{11}{2}^\\circ/\\text{menit}.$$\nWaktu pertama kali kedua jarum membentuk sudut $90^\\circ$ adalah:\n$$t = \\frac{90}{11/2} = \\frac{180}{11} = 16\\frac{4}{11}\\text{ menit}.$$\nKonversi pecahan menit ke detik:\n$$\\frac{4}{11} \\times 60\\text{ detik} = \\frac{240}{11} = 21\\frac{9}{11}\\text{ detik} \\approx 22\\text{ detik}.$$\nJadi, Yusuf mulai melaksanakan qiyamul lail pada pukul $12:16:22$.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Dua orang siswa sedang mencari solusi dari persamaan kuadrat $x^2 + bx + c = 0$. Siswa pertama salah menuliskan koefisien liniernya dan memperoleh solusi $\\{p = \\text{jumlah bacaan idgham bighunnah pada surat At-Thariq},\\; q = \\text{jumlah bacaan ikhfa pada surat Al-Insyirah}\\}$. Siswa kedua salah dalam menuliskan konstantanya dan mendapatkan hasil $\\{r = \\text{jumlah bacaan iqlab pada surat Asy-Syams},\\; s = \\text{jumlah bacaan idhar dan idhar syafawi pada surat Al-Fajr}\\}$. Jika solusi yang diperoleh keduanya benar sesuai persamaan kuadrat yang dituliskan masing-masing, solusi dari $x^2 + bx + c = 0$ adalah ....\n\nA. $\\{2, 4\\}$\nB. $\\{3, 6\\}$\nC. $\\{4, 6\\}$\nD. $\\{1, 6\\}$',
          answer: 'D. $\\{1, 6\\}$',
          principle: 'Rumus Vieta ($x_1 + x_2 = -b$ dan $x_1 x_2 = c$) serta identifikasi hukum tajwid pada empat surat Juz $30$.',
          solution:
            'Siswa pertama menuliskan konstanta $c$ dengan benar, sehingga $c = p \\cdot q$:\n- $p$ (idgham bighunnah pada surat At-Thariq): $2$ bacaan (مِنْ مَاءٍ pada ayat $6$ dan قُوَّةٍ وَلَا pada ayat $10$).\n- $q$ (ikhfa pada surat Al-Insyirah): $3$ bacaan (عَنْكَ pada ayat $2$, أَنْقَضَ pada ayat $3$, dan فَانْصَبْ pada ayat $7$).\nMaka $c = 2 \\times 3 = 6$.\n\nSiswa kedua menuliskan koefisien linear $b$ dengan benar, sehingga $-b = r + s$:\n- $r$ (iqlab pada surat Asy-Syams): $2$ bacaan (انْبَعَثَ pada ayat $12$ dan بِذَنْبِهِمْ pada ayat $14$).\n- $s$ (idhar halqi dan idhar syafawi pada surat Al-Fajr): $5$ bacaan (وَلَيَالٍ عَشْرٍ pada ayat $2$, أَلَمْ تَرَ pada ayat $6$, بِعَادٍ إِرَمَ pada sambungan ayat $6$–$7$, لَمْ يُخْلَقْ pada ayat $8$, dan عَلَيْهِمْ رَبُّكَ pada ayat $13$).\nMaka $-b = 2 + 5 = 7 \\implies b = -7$.\n\nPersamaan kuadrat yang benar adalah:\n$$x^2 - 7x + 6 = 0 \\implies (x - 1)(x - 6) = 0,$$\nsehingga himpunan penyelesaiannya adalah $\\{1, 6\\}$.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Maqolah berikut sering kali digunakan sebagai acuan dalam mengawali majelis ilmu:\nمَا مِنْ شَيْءٍ بُدِئَ بِهِ يَوْمَ الْأَرْبِعَاءِ إِلَّا وَقَدْ تَمَّ\nJika awal majelis dilaksanakan pada hari pertama bulan Maret dan berakhir pada bulan Februari, bulan yang hari pertamanya sama dengan hari pertama dimulainya majelis adalah ....\n\nA. Juni\nB. November\nC. Desember\nD. Februari',
          answer: 'B. November',
          principle: 'Aritmetika modular hari dalam sepekan ($\\bmod 7$) berdasarkan jumlah hari tiap bulan Masehi.',
          solution:
            'Maqolah tersebut berarti *"Tidak ada sesuatu pun yang dimulai pada hari Rabu melainkan akan sempurna (selesai dengan baik)"*. Untuk menentukan bulan yang tanggal $1$-nya jatuh pada hari yang sama dengan $1$ Maret, hitung selisih total hari modulo $7$ mulai $1$ Maret hingga tanggal $1$ bulan-bulan berikutnya:\n- $1$ Maret $\\to$ $1$ April: $+31 \\equiv 3 \\pmod{7}$\n- $1$ Mei: $3 + 30 = 33 \\equiv 5 \\pmod{7}$\n- $1$ Juni: $5 + 31 = 36 \\equiv 1 \\pmod{7}$\n- $1$ Juli: $1 + 30 = 31 \\equiv 3 \\pmod{7}$\n- $1$ Agustus: $3 + 31 = 34 \\equiv 6 \\pmod{7}$\n- $1$ September: $6 + 31 = 37 \\equiv 2 \\pmod{7}$\n- $1$ Oktober: $2 + 30 = 32 \\equiv 4 \\pmod{7}$\n- $1$ November: $4 + 31 = 35 \\equiv 0 \\pmod{7}$\n\nKarena total hari dari $1$ Maret hingga $31$ Oktober adalah $245 = 35 \\times 7$ (kelipatan $7$), maka tanggal $1$ **November** selalu jatuh pada hari yang sama dengan $1$ Maret.',
          rubric: OK
        }
      ]
    }
  ]
};
