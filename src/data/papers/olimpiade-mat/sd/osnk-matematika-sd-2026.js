/**
 * Paket Soal Terstruktur: OSN-K Matematika SD 2026 (rekonstruksi soal latihan, isian singkat)
 * Sumber: osnk_mat_sd_2026.pdf. Bahasa dipertahankan sesuai naskah (soal 9 berbahasa Inggris).
 * Soal 28 (angka tidak konsisten) dan 29 (asumsi jam per hari tidak diketahui) tidak dimuat.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-mat-sd-2026',
  slug: 'osnk-matematika-sd-2026',
  subject: 'olimpiade-mat',
  grade: 6,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'OSN-K Matematika SD 2026',
  relatedChapterIds: ['sd5-bab2-kpk-fpb', 'sd5-bab3-bilangan-pecahan', 'sd6-bab3-kubus-balok', 'sd6-bab4-peluang'],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SD 2026',
  totalMarks: 27,
  instructions:
    'Kerjakan seluruh 27 soal isian singkat. Setiap jawaban benar bernilai 1 poin. Naskah ini merupakan rekonstruksi soal latihan bergaya OSN-K SD; satu soal (nomor 9) tetap berbahasa Inggris sesuai naskah.',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'osnk_mat_sd_2026.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian I: Soal Utama',
      marks: 23,
      stem: 'Jawablah setiap soal isian singkat berikut dengan jawaban akhir yang tepat (masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Tentukan jumlah dari semua bilangan 3 angka yang tersusun dari angka $1$, $2$, dan $3$, di mana tidak boleh ada angka yang berulang dalam satu bilangan.',
          answer: '$1332$',
          principle: 'Kaidah pencacahan (permutasi) dan simetri: setiap angka muncul sama banyak pada setiap posisi.',
          solution:
            'Bilangan yang mungkin adalah $123, 132, 213, 231, 312, 321$, yaitu $3! = 6$ bilangan. Karena simetris, setiap angka muncul $2$ kali pada posisi ratusan, $2$ kali pada posisi puluhan, dan $2$ kali pada posisi satuan.\n$$\\text{Jumlah} = 2 \\times (1+2+3) \\times (100+10+1) = 2 \\times 6 \\times 111 = 1332.$$\nPemeriksaan langsung: $123+132+213+231+312+321 = 1332$.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Perbandingan jumlah kelereng antara Andi dan Budi adalah $3:5$. Apabila Budi menyerahkan $12$ butir kelereng kepada Andi, maka jumlah kelereng mereka menjadi sama banyak ($1:1$). Berapakah jumlah total kelereng mereka berdua?',
          answer: '$96$',
          principle: 'Perbandingan senilai dan penyusunan persamaan dari kondisi akhir yang sama banyak.',
          solution:
            'Misalkan kelereng Andi $=3k$ dan Budi $=5k$. Setelah Budi memberi $12$ butir: $3k+12 = 5k-12$, sehingga $2k = 24$ dan $k=12$.\nAndi $=36$, Budi $=60$, total $=96$. Pemeriksaan: $36+12 = 48 = 60-12$.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Bilangan asli diurutkan secara memanjang sebagai berikut:\n$$123456789101112131415161718192021\\cdots$$\nTentukan angka yang menempati digit ke-$2026$ dari urutan tersebut.',
          answer: '$7$',
          principle: 'Menghitung banyak digit per kelompok bilangan (1 angka, 2 angka, 3 angka).',
          solution:
            'Bilangan $1$ sampai $9$ memakai $9$ digit. Bilangan $10$ sampai $99$ memakai $90 \\times 2 = 180$ digit. Jadi $189$ digit pertama habis dipakai oleh bilangan $1$ sampai $99$.\nSisa: $2026 - 189 = 1837$ digit pada bilangan tiga angka. Karena $1837 = 3 \\times 612 + 1$, ada $612$ bilangan tiga angka utuh, yaitu $100$ sampai $711$, lalu digit ke-$1837$ adalah digit pertama dari bilangan berikutnya, yaitu $712$.\nDigit pertama $712$ adalah $7$.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Lima persegi identik disusun membentuk tanda tambah ($+$): satu persegi di tengah dan empat persegi lainnya menempel tepat pada keempat sisinya (sisi dengan sisi). Jika luas masing-masing persegi adalah $36$ satuan luas, berapakah keliling bangun gabungan tersebut?',
          answer: '$72$ satuan',
          principle: 'Keliling bangun gabungan sama dengan jumlah panjang seluruh sisi luarnya.',
          solution:
            'Luas persegi $=36$, sehingga panjang sisinya $6$ satuan. Setiap "lengan" dari tanda tambah menyumbang $3$ sisi luar (satu sisi ujung dan dua sisi samping), sehingga ada $4 \\times 3 = 12$ sisi luar, masing-masing $6$ satuan.\n$$\\text{Keliling} = 12 \\times 6 = 72 \\text{ satuan}.$$',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Tentukan banyak langkah minimal untuk mengubah susunan kata KELAPA menjadi KEPALA, jika dalam satu langkah hanya diperbolehkan menukar posisi dua huruf yang saling bersebelahan.',
          answer: '$3$',
          principle: 'Setiap penukaran huruf bersebelahan mengubah urutan tepat satu pasang huruf (konsep inversi).',
          solution:
            'Huruf K dan E sudah tepat. Beri nomor posisi tujuan pada setiap huruf KELAPA: K$=1$, E$=2$, L$=5$, A$=4$, P$=3$, A$=6$. Urutan awal menjadi $(1,2,5,4,3,6)$, yang memiliki tepat $3$ inversi: $(5,4)$, $(5,3)$, $(4,3)$ (mencocokkan kedua huruf A dengan cara lain memberi $4$ inversi, jadi lebih buruk). Setiap penukaran dua huruf bersebelahan mengubah banyak inversi tepat sebesar $1$, sehingga dibutuhkan minimal $3$ langkah.\nContoh $3$ langkah: KELAPA $\\to$ KEALPA $\\to$ KEAPLA $\\to$ KEPALA.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Dalam sebuah kompetisi maraton yang diikuti oleh $100$ peserta, panitia memberikan nomor dada yang diurutkan mulai dari $2026$ hingga $2125$. Berapa kali angka $2$ akan digunakan atau dicetak pada seluruh nomor dada peserta tersebut?',
          answer: '$120$',
          principle: 'Menghitung kemunculan suatu angka per posisi nilai tempat.',
          solution:
            'Hitung per posisi untuk bilangan $2026$ sampai $2125$:\n- Ribuan: semua $100$ bilangan berangka ribuan $2$, jadi $100$ kali.\n- Ratusan: bernilai $0$ (untuk $2026$ sampai $2099$) atau $1$ (untuk $2100$ sampai $2125$), jadi $0$ kali.\n- Puluhan: angka $2$ pada $2026$ sampai $2029$ ($4$ bilangan) dan $2120$ sampai $2125$ ($6$ bilangan), jadi $10$ kali.\n- Satuan: angka $2$ pada $2032, 2042, \\ldots, 2092$ ($7$ bilangan) dan $2102, 2112, 2122$ ($3$ bilangan), jadi $10$ kali.\nTotal $=100+0+10+10=120$.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Ibu membeli $10$ donat (dianggap identik), lalu dibagikan kepada $3$ anak, Ali, Budi, dan Carissa. Berapa banyak cara untuk membagi donat tersebut, jika setiap anak mendapat paling sedikit $1$ donat?',
          answer: '$36$',
          principle: 'Metode bintang dan pembatas (stars and bars) untuk membagi benda identik.',
          solution:
            'Beri tiap anak $1$ donat lebih dahulu; tersisa $7$ donat yang dibagikan bebas kepada $3$ anak. Banyak cara membagi $7$ benda identik kepada $3$ orang adalah\n$$\\binom{7+3-1}{3-1} = \\binom{9}{2} = 36.$$\nSetara dengan memilih $2$ pembatas dari $9$ celah di antara $10$ donat: $\\binom{9}{2}=36$.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Dua buah lingkaran besar dengan jari-jari masing-masing $9$ satuan saling bersinggungan luar dan keduanya menyinggung sebuah garis lurus mendatar (keduanya berada di atas garis). Sebuah lingkaran kecil di celah antara kedua lingkaran besar dan garis menyinggung kedua lingkaran besar tersebut dan juga menyinggung garis lurus yang sama. Tentukan panjang jari-jari lingkaran kecil tersebut ($x$).',
          answer: '$\\frac{9}{4}$ satuan',
          principle: 'Teorema Pythagoras pada segitiga yang dibentuk oleh pusat lingkaran-lingkaran yang bersinggungan.',
          solution:
            'Pusat kedua lingkaran besar berjarak $9+9=18$ dan sama-sama berada pada ketinggian $9$ dari garis. Pusat lingkaran kecil berada tepat di bawah titik tengah kedua pusat besar (simetri) pada ketinggian $x$.\nJarak mendatar pusat kecil ke pusat besar adalah $9$, selisih tinggi $9-x$, dan jarak pusatnya $9+x$ (bersinggungan luar):\n$$9^2 + (9-x)^2 = (9+x)^2 \\implies 81 + 81 - 18x + x^2 = 81 + 18x + x^2 \\implies 36x = 81.$$\nJadi $x = \\frac{81}{36} = \\frac{9}{4}$.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Suppose the area of rectangle $ABCD$ is $240\\text{ cm}^2$. Points $P$, $Q$, $R$ lie on sides $AB$, $BC$, $CD$ respectively, with $AP:PB = 1:2$, $DR:RC = 1:3$, and $BQ:QC = 1:1$. Then the area of triangle $PQR$ is $\\ldots\\text{ cm}^2$.',
          answer: '$85\\text{ cm}^2$',
          principle: 'Area of a triangle inside a rectangle equals the rectangle area minus the areas of the surrounding pieces.',
          solution:
            'Let $AB = w$ and $BC = h$, so $wh = 240$. Then $AP = \\frac{w}{3}$, $PB = \\frac{2w}{3}$, $DR = \\frac{w}{4}$, $RC = \\frac{3w}{4}$, $BQ = QC = \\frac{h}{2}$.\nThe rectangle minus triangle $PQR$ consists of three pieces:\n- Triangle $PBQ$: $\\frac12 \\cdot \\frac{2w}{3} \\cdot \\frac{h}{2} = \\frac{wh}{6} = 40$.\n- Triangle $QCR$: $\\frac12 \\cdot \\frac{h}{2} \\cdot \\frac{3w}{4} = \\frac{3wh}{16} = 45$.\n- Trapezoid $APRD$ (parallel sides $AP$ and $DR$, height $h$): $\\frac12\\left(\\frac{w}{3}+\\frac{w}{4}\\right)h = \\frac{7wh}{24} = 70$.\nTherefore $[PQR] = 240 - 40 - 45 - 70 = 85$.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Diketahui $A$ dan $B$ adalah dua bilangan prima berbeda. Jika $C$ merupakan Kelipatan Persekutuan Terkecil (KPK) dari bilangan $4B$, $5A$, dan $18$, berapakah nilai $C$ yang terkecil?',
          answer: '$180$',
          principle: 'KPK memuat setiap faktor prima dengan pangkat terbesar yang muncul pada bilangan-bilangan tersebut.',
          solution:
            '$18 = 2 \\times 3^2$ sehingga $C$ selalu habis dibagi $9$. $4B$ membuat $C$ habis dibagi $4$. $5A$ membuat $C$ habis dibagi $5$ (karena $5 \\mid 5A$). Jadi $C$ kelipatan $\\text{KPK}(4,5,9)=180$, sehingga $C \\ge 180$.\nNilai $180$ tercapai, misalnya $A=2$, $B=3$: $\\text{KPK}(12, 10, 18) = 180$.\nJadi $C$ terkecil adalah $180$.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Ibu membeli $4$ kg apel dengan harga Rp25.000,00 per kg dan $3$ kg jeruk dengan harga Rp18.000,00 per kg. Jika Ibu membayar barang belanjaan tersebut dengan selembar uang Rp200.000,00, berapakah uang kembalian yang diterima Ibu?',
          answer: 'Rp46.000,00',
          principle: 'Operasi hitung bilangan cacah pada soal cerita (jumlah belanja dan kembalian).',
          solution:
            'Harga apel $=4 \\times 25.000 = 100.000$. Harga jeruk $=3 \\times 18.000 = 54.000$. Total belanja $=154.000$.\nKembalian $=200.000 - 154.000 = 46.000$ rupiah.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Diberikan $3$ buah gelas $A$, $B$, dan $C$ di mana $A = \\frac{1}{2}B$ dan $B = \\frac{1}{4}C$. Maka berapa kali minimal tuangan dari gelas $A$ yang diperlukan untuk memenuhi gelas $C$?',
          answer: '$8$ kali',
          principle: 'Perbandingan kapasitas: kapasitas $C$ dinyatakan dalam kapasitas $A$.',
          solution:
            '$A = \\frac12 B$ berarti $B = 2A$. $B = \\frac14 C$ berarti $C = 4B = 4 \\times 2A = 8A$.\nJadi gelas $C$ berkapasitas $8$ kali gelas $A$, sehingga perlu minimal $8$ kali tuangan dari gelas $A$ (penuh).',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Seseorang mempunyai $4$ buah baju, $3$ buah celana, dan $2$ pasang sepatu. Ditanyakan ada berapa banyak cara berbeda untuk memakai susunan setelan baju, celana, dan sepatu tersebut?',
          answer: '$24$',
          principle: 'Kaidah perkalian dalam pencacahan.',
          solution:
            'Memilih baju ada $4$ cara, celana $3$ cara, sepatu $2$ cara. Menurut kaidah perkalian, banyak susunan $=4 \\times 3 \\times 2 = 24$.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-mat-sd-2026/fig-14.svg',
              alt: 'Susunan tiga segitiga siku-siku identik yang sisi terpendeknya saling bertemu membentuk lubang segitiga sama sisi di bagian tengah',
              caption: 'Ilustrasi susunan mainan bumerang dari tiga segitiga siku-siku identik'
            }
          ],
          prompt:
            'Siti membuat sebuah mainan bumerang yang disusun dari $3$ buah karton berbentuk segitiga siku-siku identik. Ia merangkainya sedemikian rupa sehingga sisi terpendek dari ketiga segitiga tersebut saling bertemu dan membentuk sebuah lubang berbentuk segitiga sama sisi di bagian tengahnya, seperti ditunjukkan pada gambar. Jika semua sisi karton tersebut memiliki panjang berupa bilangan asli, berapakah keliling terkecil yang mungkin dari bumerang tersebut?',
          answer: '$27$ satuan',
          principle: 'Tripel Pythagoras bilangan asli terkecil dan keliling luar bangun datar gabungan.',
          solution:
            'Misalkan panjang sisi-sisi setiap segitiga siku-siku identik adalah $a < b < c$ (dengan $a$ sisi terpendek, $b$ sisi siku-siku lainnya, dan $c$ sisi miring). Karena ketiga panjang sisi berupa bilangan asli dan memenuhi teorema Pythagoras $a^2 + b^2 = c^2$, $(a, b, c)$ merupakan tripel Pythagoras.\nUntuk $c \\le 4$, tidak ada pasangan bilangan asli $a < b$ yang memenuhi $a^2 + b^2 = c^2$. Untuk $c = 5$, diperoleh tripel Pythagoras bilangan asli terkecil $(a, b, c) = (3, 4, 5)$, sebab $3^2 + 4^2 = 9 + 16 = 25 = 5^2$.\nPada susunan bumerang seperti pada gambar, ketiga sisi terpendek ($a = 3$) saling bertemu membentuk lubang segitiga sama sisi di bagian tengah, sedangkan tepi luar bumerang dibentuk oleh tiga pasang sisi $b$ dan $c$. Oleh karena itu, keliling terkecil yang mungkin dari bumerang tersebut adalah\n$$\\text{Keliling} = 3 \\times (b + c) = 3 \\times (4 + 5) = 3 \\times 9 = 27 \\text{ satuan}.$$',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Tentukan angka satuan (digit terakhir) dari hasil perkalian bilangan berikut:\n$$7 \\times 77 \\times 777 \\times 7.777 \\times \\cdots \\times 7.777.777.$$',
          answer: '$3$',
          principle: 'Angka satuan suatu hasil kali hanya ditentukan oleh angka satuan faktor-faktornya; pangkat $7$ berulang dengan periode $4$.',
          solution:
            'Faktor-faktornya adalah bilangan yang seluruh angkanya $7$ dengan banyak angka $1$ sampai $7$, yaitu $7, 77, 777, 7.777, 77.777, 777.777, 7.777.777$: ada $7$ faktor, semuanya berangka satuan $7$.\nJadi angka satuan hasil kali sama dengan angka satuan $7^7$. Angka satuan $7^1,7^2,7^3,7^4$ berturut-turut $7,9,3,1$ (periode $4$). Karena $7 = 4+3$, angka satuan $7^7$ sama dengan angka satuan $7^3$, yaitu $3$.',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Hitunglah hasil dari operasi pecahan berikut ini:\n$$\\left(\\frac{4}{6}+\\frac{3}{6}\\right) \\times \\left(\\frac{4}{6}-\\frac{3}{6}\\right) \\times \\left(\\frac{16}{36}+\\frac{9}{36}\\right).$$',
          answer: '$\\frac{175}{1296}$',
          principle: 'Selisih kuadrat: $(a+b)(a-b)(a^2+b^2) = a^4 - b^4$.',
          solution:
            'Karena $\\frac{16}{36} = \\left(\\frac46\\right)^2$ dan $\\frac{9}{36} = \\left(\\frac36\\right)^2$, bentuknya adalah $(a+b)(a-b)(a^2+b^2) = a^4-b^4$ dengan $a=\\frac46$, $b=\\frac36$.\n$$\\left(\\frac46\\right)^4 - \\left(\\frac36\\right)^4 = \\frac{256}{1296} - \\frac{81}{1296} = \\frac{175}{1296}.$$\nLangsung: $\\frac76 \\times \\frac16 \\times \\frac{25}{36} = \\frac{175}{1296}$.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Rata-rata nilai ujian dari suatu kelas yang terdiri dari $25$ orang adalah $80$. Setelah ditambah nilai $2$ orang siswa yang mengikuti ujian remedial, rata-ratanya menurun menjadi $78$. Jika nilai siswa remedial pertama $6$ poin lebih tinggi dari nilai siswa remedial kedua, berapakah nilai siswa pertama tersebut?',
          answer: '$56$',
          principle: 'Jumlah data = rata-rata $\\times$ banyak data.',
          solution:
            'Jumlah nilai $25$ siswa $=25 \\times 80 = 2000$. Jumlah nilai $27$ siswa $=27 \\times 78 = 2106$. Jumlah dua nilai remedial $=2106-2000=106$.\nMisalkan nilai kedua $=s$, nilai pertama $=s+6$: $2s+6=106$, sehingga $s=50$. Nilai siswa pertama $=56$.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Suatu balok besar disusun dari kubus-kubus satuan kecil. Panjang balok sama dengan $8$ kubus kecil, lebarnya $6$ kubus kecil, dan tingginya $5$ kubus kecil. Balok tersebut lalu dicat seluruh permukaannya. Setelah dicat, balok tersebut dibongkar kembali menjadi kubus-kubus kecil terpisah. Berapakah selisih antara banyak kubus kecil yang tidak terkena cat sama sekali dan banyak kubus kecil yang tepat terkena cat di dua sisinya?',
          answer: '$20$',
          principle: 'Klasifikasi kubus satuan: pojok (3 sisi cat), rusuk (2 sisi), permukaan (1 sisi), dalam (0 sisi).',
          solution:
            'Kubus tanpa cat berada di bagian dalam: $(8-2)(6-2)(5-2) = 6 \\times 4 \\times 3 = 72$.\nKubus bercat tepat $2$ sisi berada pada rusuk tanpa pojok: $4(8-2) + 4(6-2) + 4(5-2) = 24 + 16 + 12 = 52$.\nSelisih $=72-52=20$.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Sejumlah uang akan dibagikan kepada $3$ orang. Orang pertama mendapatkan $\\frac{1}{3}$ bagian dari total uang. Orang kedua mendapatkan $\\frac{1}{4}$ bagian dari sisa uang setelah dibagikan ke orang pertama. Orang ketiga mendapatkan seluruh sisa uang terakhir, yaitu sebesar Rp240.000,00. Berapakah jumlah total uang mula-mula?',
          answer: 'Rp480.000,00',
          principle: 'Pecahan dari sisa: hitung bertahap dari total yang dimisalkan.',
          solution:
            'Misalkan total $=T$. Orang pertama: $\\frac{T}{3}$, sisa $\\frac{2T}{3}$. Orang kedua: $\\frac14 \\cdot \\frac{2T}{3} = \\frac{T}{6}$, sisa $\\frac{2T}{3}-\\frac{T}{6} = \\frac{T}{2}$.\nOrang ketiga memperoleh $\\frac{T}{2} = 240.000$, sehingga $T = 480.000$ rupiah.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Suatu bilangan diketahui habis dibagi $3$, dan jika dikurangi dua akan habis dibagi $4$. Jika bilangan tersebut lebih kecil dari $4.000$, berapakah bilangan terbesar yang mungkin memenuhi syarat tersebut?',
          answer: '$3990$',
          principle: 'Sistem kongruensi sederhana dan KPK: syarat $3 \\mid n$ dan $n \\equiv 2 \\pmod 4$ memberi $n \\equiv 6 \\pmod{12}$.',
          solution:
            '$n$ kelipatan $3$ dan $n-2$ kelipatan $4$, yaitu $n \\equiv 2 \\pmod 4$. Bilangan kelipatan $3$ yang bersisa $2$ jika dibagi $4$: $6, 18, 30, \\ldots$, yaitu $n = 12t + 6$.\n$12t + 6 < 4000 \\implies t \\le 332$ (karena $12 \\times 333 + 6 = 4002$). Untuk $t = 332$: $n = 3984 + 6 = 3990$.\nPemeriksaan: $3990 = 3 \\times 1330$ dan $3988 = 4 \\times 997$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Terdapat $4$ orang anak yaitu Adi, Budi, Cecep, dan Dodi yang mengikuti perlombaan lari. Dalam perlombaan tersebut, mereka memperebutkan medali Emas (Juara 1), Perak (Juara 2), dan Perunggu (Juara 3). Jika disyaratkan bahwa posisi Adi harus lebih cepat daripada Budi di garis akhir, berapa banyak susunan peraih medali berbeda yang dapat terjadi?',
          answer: '$12$',
          principle: 'Permutasi dengan syarat urutan; simetri antara Adi di depan Budi dan sebaliknya.',
          solution:
            'Setiap susunan medali dapat dilengkapi menjadi urutan finis keempat anak secara tunggal (anak yang tidak mendapat medali finis terakhir). Ada $4! = 24$ urutan finis, dan separuhnya, yaitu $12$, menempatkan Adi di depan Budi (simetri).\nPemeriksaan langsung: (i) Adi dan Budi sama-sama bermedali, Adi di atas Budi: pilih peraih ketiga dari Cecep atau Dodi ($2$ cara), susun $3$ orang dengan Adi di atas Budi ($3$ cara), jadi $6$; (ii) Adi bermedali dan Budi tidak (peraih medali Adi, Cecep, Dodi): $3! = 6$ cara. Total $6+6=12$.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Berapa banyak password (sandi) berbeda yang terdiri dari $3$ digit angka yang dapat dibentuk dari angka $0$ hingga $9$, dengan syarat tidak boleh ada angka yang berulang di dalam satu password?',
          answer: '$720$',
          principle: 'Permutasi $P(10,3)$; pada password angka $0$ boleh berada di posisi pertama.',
          solution:
            'Digit pertama: $10$ pilihan (angka $0$ boleh di depan pada password), digit kedua: $9$ pilihan, digit ketiga: $8$ pilihan.\n$$10 \\times 9 \\times 8 = 720.$$',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Sebuah bak penampungan air memiliki volume $120$ liter. Bak tersebut diisi menggunakan dua buah selang secara bersamaan. Selang pertama dapat mengisi bak dengan kecepatan $20$ liter/menit, sedangkan selang kedua dapat mengisi dengan kecepatan $25$ liter/menit. Berapa lama waktu paling sedikit yang diperlukan untuk mengisi bak tersebut hingga penuh?',
          answer: '$\\frac{8}{3}$ menit (2 menit 40 detik)',
          principle: 'Debit gabungan: waktu = volume $\\div$ jumlah debit.',
          solution:
            'Debit gabungan $=20+25=45$ liter/menit. Waktu $=\\frac{120}{45} = \\frac{8}{3}$ menit $=2\\frac{2}{3}$ menit $=2$ menit $40$ detik.',
          rubric: OK
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian II: Soal Tambahan',
      marks: 4,
      stem: 'Jawablah setiap soal isian singkat berikut (masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '24',
          marks: 1,
          prompt:
            'Sebuah pabrik percetakan menargetkan produksi sebanyak $241.560$ eksemplar buku. Jika mesin pencetak di pabrik tersebut memiliki kecepatan produksi konstan sebesar $11$ buku setiap jamnya, berapakah total waktu yang dibutuhkan mesin tersebut untuk menyelesaikan seluruh target produksi? Tuliskan jawaban akhir dalam satuan jam.',
          answer: '$21.960$ jam',
          principle: 'Waktu = banyak pekerjaan $\\div$ laju kerja.',
          solution:
            'Waktu pengerjaan adalah total produksi dibagi kecepatan mesin:\n$$\\text{Waktu} = \\frac{241.560}{11}.$$\nUntuk membagi $241.560$ dengan $11$ secara bertahap (menguraikan ke kelipatan $11$ yang mudah):\n$$241.560 = 220.000 + 11.000 + 9.900 + 660,$$\nsehingga\n$$\\frac{241.560}{11} = 20.000 + 1.000 + 900 + 60 = 21.960 \\text{ jam}.$$\nPemeriksaan: $11 \\times 21.960 = 219.600 + 21.960 = 241.560$.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt: 'Hitunglah hasil penjumlahan dari pecahan berikut ini:\n$$\\frac{3}{5} + \\frac{1}{3} + \\frac{5}{9} = \\ldots$$',
          answer: '$\\frac{67}{45}$ (atau $1\\frac{22}{45}$)',
          principle: 'Penjumlahan pecahan berpenyebut berbeda dengan menyamakan penyebut (KPK).',
          solution:
            'KPK dari $5$, $3$, $9$ adalah $45$.\n$$\\frac{3}{5}+\\frac{1}{3}+\\frac{5}{9} = \\frac{27}{45}+\\frac{15}{45}+\\frac{25}{45} = \\frac{67}{45} = 1\\frac{22}{45}.$$',
          rubric: OK
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Berapa banyak bilangan asli $n$ di bawah $2.500$ yang jika dipangkatkan tiga ($n^3$) akan memiliki dua digit terakhir $44$? Dengan kata lain, $n^3$ bersisa $44$ jika dibagi $100$.',
          answer: '$50$',
          principle: 'Analisis angka satuan dan dua angka terakhir (aritmetika modular modulo $100$).',
          solution:
            'Agar $n^3$ berakhiran $44$, langkah pertama adalah menentukan angka satuan $n$. Karena $n^3$ genap (berakhiran $4$), maka $n$ harus genap sehingga angka satuannya salah satu dari $0, 2, 4, 6, 8$.\nPeriksa angka satuan $n^3$ untuk tiap kemungkinan satuan $n$:\n- $0^3 \\to 0$, $2^3 = 8$, $4^3 = 64 \\to 4$, $6^3 = 216 \\to 6$, $8^3 = 512 \\to 2$.\nHanya angka satuan $4$ yang menghasilkan satuan $4$, sehingga $n$ dapat ditulis sebagai $n = 10k + 4$ untuk suatu bilangan cacah $k$.\n\nSelanjutnya, cari dua angka terakhir (sisa dibagi $100$) dari $(10k + 4)^3$:\n$$(10k + 4)^2 = 100k^2 + 80k + 16 \\equiv 80k + 16 \\pmod{100}.$$\nKalikan lagi dengan $(10k + 4)$:\n$$(10k + 4)^3 \\equiv (80k + 16)(10k + 4) = 800k^2 + 480k + 64 \\equiv 80k + 64 \\pmod{100}.$$\nSyarat dua digit terakhir $44$ berarti $80k + 64 \\equiv 44 \\pmod{100}$, yaitu $80k \\equiv -20 \\equiv 80 \\pmod{100}$. Artinya $100 \\mid 80(k - 1)$, atau setelah disederhanakan dengan membagi $20$, diperoleh $5 \\mid 4(k - 1)$. Karena $\\gcd(4, 5) = 1$, haruslah $5 \\mid (k - 1)$, sehingga $k = 5j + 1$ ($j \\ge 0$).\n\nSubstitusi kembali memberi $n = 10(5j + 1) + 4 = 50j + 14$. Karena $n < 2.500$:\n$$50j + 14 < 2500 \\implies 50j < 2486 \\implies j \\le 49$$\n(untuk $j = 49$, $n = 2464$; untuk $j = 50$, $n = 2514$). Dari $j = 0$ sampai $j = 49$ terdapat $49 - 0 + 1 = 50$ bilangan.',
          rubric: OK
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Tentukan bilangan tiga angka yang tepat untuk mengisi kotak-kotak kosong pada operasi perkalian berikut ini:\n$$\\square\\square\\square \\times 9 = 3186.$$',
          answer: '$354$',
          principle: 'Perkalian dan pembagian sebagai operasi invers.',
          solution:
            'Karena perkalian dan pembagian saling invers, bilangan tiga angka tersebut adalah:\n$$\\square\\square\\square = \\frac{3186}{9}.$$\nKita dapat menguraikan $3186$ menjadi kelipatan $9$ secara bertahap:\n$$3186 = 2700 + 450 + 36,$$\nsehingga\n$$\\frac{3186}{9} = \\frac{2700}{9} + \\frac{450}{9} + \\frac{36}{9} = 300 + 50 + 4 = 354.$$\nBilangan $354$ tepat terdiri atas tiga angka. Pemeriksaan: $354 \\times 9 = 3186$.',
          rubric: OK
        }
      ]
    }
  ]
};
