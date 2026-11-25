/**
 * Paket Soal Terstruktur: OSN-K Matematika SD — Aritmatika Paket 1
 * Sumber: 2 ARITMATIKA PAKET 1.pdf (15 soal isian/uraian singkat).
 * Soal nomor 4 dan 9 dipertahankan dalam bahasa Inggris sesuai naskah asli;
 * gambar konfigurasi meja segienam pada soal nomor 1 direkonstruksi sebagai SVG.
 */
export default {
  id: 'osk-mat-sd-aritmatika-p1',
  slug: 'osk-aritmatika-paket-1',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'OSN-K Matematika SD — Aritmatika Paket 1: pola bilangan, operasi bilangan, persamaan dan pertidaksamaan linear, pecahan, persentase, perbandingan, dan aritmatika sosial',
  relatedChapterIds: [
    'sd4-bab3-pola-gambar-bilangan',
    'sd5-bab1-bilangan-cacah-100k',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan',
    'sd6-bab1-pecahan-desimal',
    'sd6-bab2-rasio'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SD — Aritmatika Paket 1',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 15 soal isian/uraian singkat berikut. Naskah sumber tidak mencantumkan bobot nilai per nomor, sehingga pada paket latihan ini setiap soal bernilai 2 poin (1 poin langkah penyelesaian dan 1 poin jawaban akhir; total 30 poin). Soal nomor 4 dan 9 dipertahankan dalam bahasa Inggris sesuai naskah asli, dan ilustrasi meja segienam pada soal nomor 1 disertakan dalam bentuk diagram.',
  source: {
    org: 'OSN-K',
    file: '2 ARITMATIKA PAKET 1.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Isian dan Uraian Singkat',
      marks: 30,
      stem: 'Selesaikan seluruh 15 soal berikut secara cermat dan tuliskan jawaban akhir yang tepat (masing-masing bernilai 2 poin).',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            'Sebuah meja belajar berbentuk segienam dapat dipasang $6$ kursi. Jika dua meja dirapatkan, maka dapat dipasang $10$ kursi. Jika tiga meja dirapatkan, maka dapat dipasang $14$ kursi, dan seterusnya seperti diilustrasikan pada gambar di bawah.\n\nDi sekolah Rini terdapat $10$ meja segienam. Jika semua meja dipasang dan dirapatkan memanjang, maka banyak kursi maksimal yang dapat dipasang adalah $\\ldots$ buah.',
          figures: [
            {
              src: '/papers/osk-mat-sd-aritmatika-p1/fig-1.svg',
              alt: 'Ilustrasi susunan satu meja segienam dengan enam kursi, dua meja segienam dirapatkan dengan sepuluh kursi, dan tiga meja segienam dirapatkan dengan empat belas kursi.',
              caption: 'Pola pemasangan kursi pada susunan 1, 2, dan 3 meja segienam yang dirapatkan memanjang.'
            }
          ],
          answer: '$42$ buah',
          principle:
            'Pola barisan aritmetika: setiap penambahan satu meja segienam di ujung barisan menutup satu sisi lama ($-1$ kursi) dan menambah lima sisi luar baru ($+5$ kursi), sehingga bertambah $4$ kursi.',
          solution:
            'Perhatikan banyak kursi untuk $n$ meja segienam yang dirapatkan memanjang:\n- $n = 1$ meja: $6$ kursi.\n- $n = 2$ meja: $10 = 6 + 4$ kursi.\n- $n = 3$ meja: $14 = 6 + 2 \\times 4$ kursi.\n\nSetiap tambahan $1$ meja selalu menambah $4$ kursi (dua sisi atas dan dua sisi bawah, sedangkan sisi sambungan tertutup). Rumus untuk $n$ meja adalah:\n$$\\text{Banyak kursi} = 6 + 4(n - 1) = 4n + 2.$$\nUntuk $n = 10$ meja:\n$$4(10) + 2 = 40 + 2 = 42.$$',
          rubric: [
            { code: 'M1', text: 'Menemukan pola pertambahan $+4$ kursi per meja atau rumus $4n + 2$.' },
            { code: 'A1', text: 'Jawaban akhir $42$ buah.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Bianca akan membeli $3$ jenis anak ikan hias, yaitu Lion Head, Slayer, dan Silver yang masing-masing harganya $\\text{Rp}7.500{,}00$; $\\text{Rp}12.500{,}00$; dan $\\text{Rp}15.000{,}00$. Uang yang dimiliki Bianca sebesar $\\text{Rp}80.000{,}00$. Bianca ingin membeli ikan tersebut dengan total sebanyak $6$ ekor dan tidak semua jenis ikan harus dibeli. Banyak cara membeli $6$ ikan tersebut agar uangnya tersisa paling sedikit $\\text{Rp}10.000{,}00$ adalah $\\ldots$ cara.',
          answer: '$14$ cara',
          principle:
            'Ubah syarat pembelian dan sisa uang menjadi sistem persamaan dan pertidaksamaan bilangan cacah, lalu cacah pasangan yang memenuhi secara sistematis.',
          solution:
            'Misalkan banyak ikan Lion Head, Slayer, dan Silver yang dibeli berturut-turut adalah $x$, $y$, dan $z$ (dengan $x, y, z \\ge 0$ bilangan bulat).\nSyarat jumlah ikan:\n$$x + y + z = 6 \\implies z = 6 - x - y \\quad (0 \\le y \\le 6 - x).$$\nAgar uang tersisa paling sedikit $\\text{Rp}10.000{,}00$ dari $\\text{Rp}80.000{,}00$, total belanja maksimal adalah $\\text{Rp}70.000{,}00$:\n$$7.500x + 12.500y + 15.000z \\le 70.000.$$\nBagi kedua ruas dengan $2.500$:\n$$3x + 5y + 6z \\le 28.$$\nSubstitusikan $z = 6 - x - y$:\n$$3x + 5y + 6(6 - x - y) \\le 28 \\implies 36 - 3x - y \\le 28 \\implies 3x + y \\ge 8.$$\nSekarang cacah nilai $y$ yang memenuhi $8 - 3x \\le y \\le 6 - x$ serta $y \\ge 0$ untuk tiap $x \\in \\{0, 1, 2, 3, 4, 5, 6\\}$:\n- $x = 0$: $8 \\le y \\le 6$ $\\implies 0$ cara.\n- $x = 1$: $5 \\le y \\le 5$ $\\implies y = 5$ ($z = 0$) $\\implies 1$ cara.\n- $x = 2$: $2 \\le y \\le 4$ $\\implies y \\in \\{2, 3, 4\\}$ $\\implies 3$ cara.\n- $x = 3$: $0 \\le y \\le 3$ $\\implies y \\in \\{0, 1, 2, 3\\}$ $\\implies 4$ cara.\n- $x = 4$: $0 \\le y \\le 2$ $\\implies y \\in \\{0, 1, 2\\}$ $\\implies 3$ cara.\n- $x = 5$: $0 \\le y \\le 1$ $\\implies y \\in \\{0, 1\\}$ $\\implies 2$ cara.\n- $x = 6$: $0 \\le y \\le 0$ $\\implies y = 0$ ($z = 0$) $\\implies 1$ cara.\n\nTotal banyak cara adalah:\n$$0 + 1 + 3 + 4 + 3 + 2 + 1 = 14 \\text{ cara}.$$',
          rubric: [
            { code: 'M1', text: 'Menyusun $x+y+z=6$ dan pertidaksamaan biaya $3x+5y+6z \\le 28$ (atau $3x+y \\ge 8$) lalu mencacah kasus.' },
            { code: 'A1', text: 'Jawaban akhir $14$ cara.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'Umur Komang lebih tua $5$ tahun dari Rahmat. Rahmat usianya $6$ tahun lebih muda dari Robert. Ketika Robert berumur $20$ tahun, maka umur Komang adalah $\\ldots$ tahun.',
          answer: '$19$ tahun',
          principle:
            'Terjemahkan perbandingan selisih umur ke operasi penjumlahan dan pengurangan berurutan.',
          solution:
            'Diketahui umur Robert adalah $20$ tahun.\nUmur Rahmat $6$ tahun lebih muda dari Robert:\n$$\\text{Umur Rahmat} = 20 - 6 = 14 \\text{ tahun}.$$\nUmur Komang $5$ tahun lebih tua dari Rahmat:\n$$\\text{Umur Komang} = 14 + 5 = 19 \\text{ tahun}.$$',
          rubric: [
            { code: 'M1', text: 'Menghitung umur Rahmat $20 - 6 = 14$ tahun dan menambahkan $5$ tahun.' },
            { code: 'A1', text: 'Jawaban akhir $19$ tahun.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'A swimming pool full of water can emptied with pump C in $1$ hour. It can be emptied with pump B in $30$ minutes. Pump C and pump B can empty the pool together in $\\ldots$ minutes.',
          answer: '$20$ minutes',
          principle:
            'Add the individual draining rates (fraction of the pool emptied per minute) to find the combined rate, then take the reciprocal.',
          solution:
            'Convert pump C\'s time into minutes: $1\\text{ hour} = 60\\text{ minutes}$.\nFind the fraction of the pool each pump empties in $1$ minute:\n- Pump C empties $\\frac{1}{60}$ of the pool per minute.\n- Pump B empties $\\frac{1}{30}$ of the pool per minute.\n\nWorking together, their combined rate per minute is:\n$$\\frac{1}{60} + \\frac{1}{30} = \\frac{1}{60} + \\frac{2}{60} = \\frac{3}{60} = \\frac{1}{20}\\text{ of the pool per minute}.$$\nTherefore, both pumps together empty the full pool in $20$ minutes.',
          rubric: [
            { code: 'M1', text: 'Converts $1$ hour to $60$ minutes and adds the rates $\\frac{1}{60} + \\frac{1}{30} = \\frac{1}{20}$.' },
            { code: 'A1', text: 'Final answer $20$ minutes.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Wayan menghabiskan $\\text{Rp}40.000{,}00$ pada hari pertama perjalanannya. Pada hari kedua, dia menghabiskan setengah dari sisa uangnya. Jika sekarang dia memiliki sisa uang $\\text{Rp}10.000{,}00$, banyak uang yang dimilikinya sebelum melakukan perjalanan adalah $\\ldots$',
          answer: '$\\text{Rp}60.000{,}00$',
          principle:
            'Bekerja mundur (working backwards) atau menggunakan persamaan linear satu variabel untuk membalikkan setiap pengeluaran.',
          solution:
            'Misalkan uang Wayan mula-mula adalah $U$.\nSetelah hari pertama, sisa uangnya adalah $U - 40.000$.\nPada hari kedua, ia menghabiskan setengah dari sisa tersebut, sehingga bagian yang tersisa juga setengah dari sisa hari pertama:\n$$\\frac{1}{2}(U - 40.000) = 10.000.$$\nKalikan kedua ruas dengan $2$:\n$$U - 40.000 = 20.000 \\implies U = 20.000 + 40.000 = 60.000.$$\nJadi, uang yang dimilikinya sebelum melakukan perjalanan adalah $\\text{Rp}60.000{,}00$.',
          rubric: [
            { code: 'M1', text: 'Menyusun $\\frac{1}{2}(U - 40.000) = 10.000$ atau membalikkan langkah dari sisa $\\text{Rp}10.000{,}00$.' },
            { code: 'A1', text: 'Jawaban akhir $\\text{Rp}60.000{,}00$.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'Anin membeli $10b$ apel. Apel tersebut bersisa $3b + 8$ setelah diberikan kepada Dayu sebanyak $20$ apel. Jika harga setiap apel $\\text{Rp}2.500{,}00$, maka uang yang harus dibayarkan Anin untuk membeli semua apel tersebut adalah $\\ldots$',
          answer: '$\\text{Rp}100.000{,}00$',
          principle:
            'Selesaikan persamaan linear satu variabel untuk memperoleh nilai $b$, lalu hitung total apel dan total harganya.',
          solution:
            'Banyak apel awal dikurangi $20$ sama dengan sisa apel:\n$$10b - 20 = 3b + 8.$$\nKurangkan $3b$ dan tambahkan $20$ pada kedua ruas:\n$$10b - 3b = 8 + 20 \\implies 7b = 28 \\implies b = 4.$$\nBanyak seluruh apel yang dibeli Anin adalah:\n$$10b = 10 \\times 4 = 40 \\text{ apel}.$$\nDengan harga $\\text{Rp}2.500{,}00$ per apel, total uang yang harus dibayarkan adalah:\n$$40 \\times 2.500 = 100.000.$$\nJadi, Anin harus membayar $\\text{Rp}100.000{,}00$.',
          rubric: [
            { code: 'M1', text: 'Menyelesaikan $10b - 20 = 3b + 8$ untuk memperoleh $b = 4$ dan banyak apel $40$.' },
            { code: 'A1', text: 'Jawaban akhir $\\text{Rp}100.000{,}00$.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'Seorang pedagang menjual beras jenis A seharga $\\text{Rp}14.000{,}00$ per kg dan beras jenis B seharga $\\text{Rp}20.000{,}00$ per kg. Jika $100\\text{ kg}$ beras jenis A dicampur dengan $80\\text{ kg}$ beras jenis B dijual dengan harga $\\text{Rp}18.000{,}00$ per kg dan terjual habis, berapakah keuntungan yang diperoleh pedagang tersebut?',
          answer: '$\\text{Rp}240.000{,}00$',
          principle:
            'Keuntungan adalah selisih antara total hasil penjualan campuran dengan total biaya/nilai asal masing-masing jenis beras.',
          solution:
            'Hitung total nilai beras sebelum dicampur (modal):\n$$\\text{Modal} = (100 \\times 14.000) + (80 \\times 20.000) = 1.400.000 + 1.600.000 = 3.000.000.$$\nBerat total beras campuran adalah $100 + 80 = 180\\text{ kg}$. Hitung total hasil penjualan:\n$$\\text{Penjualan} = 180 \\times 18.000 = 3.240.000.$$\nKeuntungan yang diperoleh pedagang:\n$$\\text{Keuntungan} = 3.240.000 - 3.000.000 = 240.000.$$\nJadi, keuntungan pedagang tersebut adalah $\\text{Rp}240.000{,}00$.',
          rubric: [
            { code: 'M1', text: 'Menghitung modal $\\text{Rp}3.000.000{,}00$ dan total penjualan $\\text{Rp}3.240.000{,}00$.' },
            { code: 'A1', text: 'Jawaban akhir $\\text{Rp}240.000{,}00$.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'Setiap meja dalam sebuah restoran berbentuk persegi yang dapat memuat empat orang yaitu satu orang pada setiap sisinya. Jika terdapat $30$ meja yang digabungkan menjadi satu meja panjang, berapa orang yang dapat dimuat?',
          answer: '$62$ orang',
          principle:
            'Ketika meja persegi dijajar memanjang, setiap meja memberi $2$ tempat duduk di sisi atas dan bawah, ditambah $2$ tempat duduk di kedua ujung barisan.',
          solution:
            'Jika $n$ meja persegi digabungkan memanjang dalam satu baris:\n- Sisi panjang bagian atas memuat $n$ orang dan sisi panjang bagian bawah memuat $n$ orang, seluruhnya $2n$ orang.\n- Kedua ujung (ujung paling kiri dan paling kanan) masing-masing memuat $1$ orang, seluruhnya $2$ orang.\n\nDengan demikian, banyak orang yang dapat dimuat adalah $2n + 2$.\nUntuk $n = 30$ meja:\n$$2(30) + 2 = 60 + 2 = 62\\text{ orang}.$$',
          rubric: [
            { code: 'M1', text: 'Menemukan pola atau rumus $2n + 2$ untuk $n$ meja persegi yang digabung memanjang.' },
            { code: 'A1', text: 'Jawaban akhir $62$ orang.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'Two positive integers $A$ and $B$ satisfy\n$$\\frac{A}{11} + \\frac{B}{33} = \\frac{17}{33}.$$\nMaximum of the value of $A^2 + B^2$ is $\\ldots$',
          answer: '$197$',
          principle:
            'Clear denominators to obtain a linear Diophantine equation, list all positive integer pairs $(A, B)$, and compare $A^2 + B^2$.',
          solution:
            'Multiply both sides of the equation by $33$:\n$$3A + B = 17.$$\nSince $A$ and $B$ are positive integers ($A \\ge 1$, $B \\ge 1$), we have $3A < 17$, so $A \\in \\{1, 2, 3, 4, 5\\}$. Evaluate $B = 17 - 3A$ and $A^2 + B^2$ for each case:\n- $A = 1 \\implies B = 14 \\implies A^2 + B^2 = 1^2 + 14^2 = 1 + 196 = 197$\n- $A = 2 \\implies B = 11 \\implies A^2 + B^2 = 2^2 + 11^2 = 4 + 121 = 125$\n- $A = 3 \\implies B = 8 \\implies A^2 + B^2 = 3^2 + 8^2 = 9 + 64 = 73$\n- $A = 4 \\implies B = 5 \\implies A^2 + B^2 = 4^2 + 5^2 = 16 + 25 = 41$\n- $A = 5 \\implies B = 2 \\implies A^2 + B^2 = 5^2 + 2^2 = 25 + 4 = 29$\n\nThus, the maximum value of $A^2 + B^2$ is $197$.',
          rubric: [
            { code: 'M1', text: 'Derives $3A + B = 17$ and tests positive integer solutions $(A, B)$.' },
            { code: 'A1', text: 'Final answer $197$.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'Tiga bilangan memiliki selisih yang sama antara dua bilangan yang berurutan. Jumlah ketiga bilangan itu $24$ dan hasil kalinya $384$. Ketiga bilangan itu adalah $\\ldots$',
          answer: '$4$, $8$, dan $12$',
          principle:
            'Nyatakan tiga bilangan berurutan berselisih sama secara simetris sebagai $a - d$, $a$, dan $a + d$ agar jumlahnya langsung menentukan suku tengah $a$.',
          solution:
            'Misalkan ketiga bilangan tersebut adalah $a - d$, $a$, dan $a + d$ dengan $d > 0$.\nDari jumlah ketiga bilangan:\n$$(a - d) + a + (a + d) = 24 \\implies 3a = 24 \\implies a = 8.$$\nSubstitusikan $a = 8$ ke persamaan hasil kali:\n$$(8 - d) \\times 8 \\times (8 + d) = 384.$$\nBagi kedua ruas dengan $8$:\n$$(8 - d)(8 + d) = 48 \\implies 64 - d^2 = 48 \\implies d^2 = 16 \\implies d = 4.$$\nJadi, ketiga bilangan tersebut adalah:\n$$8 - 4 = 4, \\quad 8, \\quad \\text{dan} \\quad 8 + 4 = 12.$$\nPeriksa: $4 + 8 + 12 = 24$ dan $4 \\times 8 \\times 12 = 384$.',
          rubric: [
            { code: 'M1', text: 'Memisalkan $a - d, a, a + d$ hingga mendapat $a = 8$ dan $64 - d^2 = 48$.' },
            { code: 'A1', text: 'Jawaban akhir $4$, $8$, dan $12$.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'Jumlah angka-angka dari hasil $666.666^2 - 333.333^2$ adalah $\\ldots$',
          answer: '$54$',
          principle:
            'Gunakan identitas selisih dua kuadrat $a^2 - b^2 = (a - b)(a + b)$ lalu kalikan dengan $999.999 = 10^6 - 1$.',
          solution:
            'Faktorkan menggunakan $a^2 - b^2 = (a - b)(a + b)$:\n$$666.666^2 - 333.333^2 = (666.666 - 333.333)(666.666 + 333.333) = 333.333 \\times 999.999.$$\nTuliskan $999.999 = 1.000.000 - 1$:\n$$333.333 \\times (1.000.000 - 1) = 333.333.000.000 - 333.333 = 333.332.666.667.$$\nJumlahkan seluruh angka penyusun hasilnya:\n$$(3 + 3 + 3 + 3 + 3) + 2 + (6 + 6 + 6 + 6 + 6) + 7 = 15 + 2 + 30 + 7 = 54.$$',
          rubric: [
            { code: 'M1', text: 'Menyederhanakan menjadi $333.333 \\times 999.999 = 333.332.666.667$.' },
            { code: 'A1', text: 'Jawaban akhir $54$.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'Jika $12{,}5\\%$ dari $(N - 2)$ adalah $412{,}5\\%$, maka nilai $N = \\ldots$',
          answer: '$35$',
          principle:
            'Ubah persen menjadi pecahan atau bagi kedua ruas persamaan dengan $12{,}5\\%$ untuk langsung memperoleh $N - 2$.',
          solution:
            'Dari kalimat soal diperoleh persamaan:\n$$12{,}5\\% \\times (N - 2) = 412{,}5\\%.$$\nPerhatikan bahwa $12{,}5\\% = \\frac{1}{8}$ dan $412{,}5\\% = \\frac{412{,}5}{100} = \\frac{33}{8}$, atau langsung bagi kedua ruas dengan $12{,}5\\%$:\n$$N - 2 = \\frac{412{,}5\\%}{12{,}5\\%} = \\frac{412{,}5}{12{,}5} = \\frac{825}{25} = 33.$$\nMaka nilai $N$ adalah:\n$$N = 33 + 2 = 35.$$',
          rubric: [
            { code: 'M1', text: 'Menyusun $12{,}5\\% \\times (N - 2) = 412{,}5\\%$ dan memperoleh $N - 2 = 33$.' },
            { code: 'A1', text: 'Jawaban akhir $35$.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Andi mempunyai beberapa kelereng. Dia memberikan kepada Bobi $\\frac{1}{3}$ bagian dan Soni $\\frac{2}{5}$ bagian. Setelah itu, $2$ butir kelereng milik Andi hilang dan sekarang tersisa $14$ butir. Berapa jumlah kelereng Andi mula-mula?',
          answer: '$60$ butir',
          principle:
            'Hitung pecahan bagian yang tersisa sebelum $2$ kelereng hilang, lalu samakan dengan $14 + 2 = 16$ butir.',
          solution:
            'Misalkan banyak kelereng Andi mula-mula adalah $x$.\nTotal bagian yang diberikan kepada Bobi dan Soni adalah:\n$$\\frac{1}{3} + \\frac{2}{5} = \\frac{5}{15} + \\frac{6}{15} = \\frac{11}{15} \\text{ bagian}.$$\nBagian yang masih tersisa sebelum $2$ butir hilang adalah:\n$$1 - \\frac{11}{15} = \\frac{4}{15} \\text{ bagian}.$$\nKarena setelah hilang $2$ butir tersisa $14$ butir, maka sebelum hilang terdapat $14 + 2 = 16$ butir:\n$$\\frac{4}{15}x = 16 \\implies x = 16 \\times \\frac{15}{4} = 4 \\times 15 = 60.$$\nJadi, jumlah kelereng Andi mula-mula adalah $60$ butir.',
          rubric: [
            { code: 'M1', text: 'Menemukan sisa sebelum hilang sebesar $\\frac{4}{15}$ bagian sama dengan $16$ butir.' },
            { code: 'A1', text: 'Jawaban akhir $60$ butir.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Tahun lalu umur Ani kelipatan $6$, tahun ini umurnya kelipatan $5$ dan tiga tahun lagi kelipatan $4$. Jika umur Ani kurang dari $30$ tahun, maka Ani lahir pada tahun $\\ldots$',
          answer: '$1996$',
          principle:
            'Daftar semua kelipatan $5$ yang kurang dari $30$, uji syarat kelipatan $6$ untuk $u - 1$ dan kelipatan $4$ untuk $u + 3$, lalu kurangkan dari tahun pelaksanaan soal ($2021$).',
          solution:
            'Misalkan umur Ani tahun ini adalah $u$ (dengan $u < 30$ dan $u$ bilangan asli).\nKarena $u$ kelipatan $5$, kemungkinan nilai $u$ adalah $5, 10, 15, 20,$ atau $25$.\nUji syarat "tahun lalu ($u - 1$) kelipatan $6$":\n- $u = 5 \\implies u - 1 = 4$ (bukan kelipatan $6$)\n- $u = 10 \\implies u - 1 = 9$ (bukan kelipatan $6$)\n- $u = 15 \\implies u - 1 = 14$ (bukan kelipatan $6$)\n- $u = 20 \\implies u - 1 = 19$ (bukan kelipatan $6$)\n- $u = 25 \\implies u - 1 = 24 = 6 \\times 4$ (memenuhi)\n\nPeriksa syarat ketiga untuk $u = 25$: tiga tahun lagi umurnya $25 + 3 = 28 = 4 \\times 7$, benar kelipatan $4$.\nKarena soal berasal dari seleksi tingkat kecamatan tahun $2021$, "tahun ini" merujuk pada tahun $2021$. Maka Ani lahir pada tahun:\n$$2021 - 25 = 1996.$$',
          rubric: [
            { code: 'M1', text: 'Menemukan umur Ani $25$ tahun dari syarat kelipatan $5$, $6$, dan $4$.' },
            { code: 'A1', text: 'Menghitung tahun lahir $2021 - 25 = 1996$.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Jika $2a + 2b = 15$, $b + 2c = 7$, $c + d = 9$, $2d + a = 5$, maka $\\frac{1}{2}a + \\frac{1}{2}b + \\frac{1}{2}c + \\frac{1}{2}d = \\ldots$',
          answer: '$6$',
          principle:
            'Jumlahkan keempat persamaan sekaligus untuk memperoleh nilai $a + b + c + d$ tanpa mencari nilai masing-masing variabel.',
          solution:
            'Jumlahkan keempat persamaan yang diketahui secara bersusun:\n$$(2a + 2b) + (b + 2c) + (c + d) + (2d + a) = 15 + 7 + 9 + 5.$$\nKelompokkan suku-suku sejenis:\n$$3a + 3b + 3c + 3d = 36 \\implies 3(a + b + c + d) = 36.$$\nBagi kedua ruas dengan $3$:\n$$a + b + c + d = 12.$$\nDengan demikian, nilai yang ditanyakan adalah:\n$$\\frac{1}{2}a + \\frac{1}{2}b + \\frac{1}{2}c + \\frac{1}{2}d = \\frac{1}{2}(a + b + c + d) = \\frac{1}{2} \\times 12 = 6.$$',
          rubric: [
            { code: 'M1', text: 'Menjumlahkan keempat persamaan hingga memperoleh $3(a+b+c+d)=36$ atau $a+b+c+d=12$.' },
            { code: 'A1', text: 'Jawaban akhir $6$.' }
          ]
        }
      ]
    }
  ]
};
