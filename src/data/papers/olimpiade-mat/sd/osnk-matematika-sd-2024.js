/**
 * Paket Soal Terstruktur: OSN-K Matematika SD 2024 (21 soal pilihan ganda terpilih dari 30 soal asli)
 * Sumber: scraped_raw/osnk-matematika-sd-2024.md
 * Soal 14, 17, 19, 21, 22, 23, 24, 29 tidak dimuat karena gambar/tabel tidak tersedia pada arsip;
 * soal 25 tidak dimuat karena ketidakkonsistenan redaksi pecahan dan duplikasi opsi pada arsip.
 * Pada soal 27, salah ketik OCR "4d+e+f = 10" diperbaiki menjadi "d+e+f = 10" sesuai naskah asli dan opsi jawaban.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-mat-sd-2024',
  slug: 'osnk-matematika-sd-2024',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'OSN-K Matematika SD 2024',
  relatedChapterIds: [
    'sd4-bab3-pola-gambar-bilangan',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan',
    'sd5-bab4-keliling-bangun-datar',
    'sd5-bab5-luas-daerah-bangun-datar',
    'sd5-bab8-data',
    'sd6-bab2-rasio',
    'sd6-bab4-peluang'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SD 2024',
  totalMarks: 21,
  instructions:
    'Kerjakan seluruh 21 soal pilihan ganda terpilih (dari 30 soal asli OSN-K Matematika SD 2024). Setiap jawaban benar bernilai 1 poin. Sebanyak 9 soal tidak dimuat: soal nomor 14, 17, 19, 21, 22, 23, 24, dan 29 karena memerlukan gambar atau tabel yang tidak tersedia pada arsip, serta soal nomor 25 karena ketidakkonsistenan redaksi pecahan dan duplikasi opsi pada arsip.',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-matematika-sd-2024.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 21,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (21 soal terpilih dari 30 soal asli, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Susi mengurutkan bilangan asli terkecil ke terbesar kelipatan $2$ dan Wati mengurutkan bilangan asli terkecil ke terbesar kelipatan $3$. Jumlah bilangan Susi urutan ke-$25$ dan bilangan Wati urutan ke-$20$ adalah ....\n\nA. $100$\nB. $110$\nC. $115$\nD. $125$',
          answer: 'B. $110$',
          principle: 'Pola bilangan kelipatan $k$: suku ke-$n$ bernilai $k \\times n$.',
          solution:
            'Bilangan asli kelipatan $2$ berurutan dari yang terkecil adalah $2, 4, 6, \\ldots$, sehingga bilangan pada urutan ke-$n$ adalah $2 \\times n$.\n- Bilangan Susi urutan ke-$25 = 2 \\times 25 = 50$.\n\nBilangan asli kelipatan $3$ berurutan dari yang terkecil adalah $3, 6, 9, \\ldots$, sehingga bilangan pada urutan ke-$n$ adalah $3 \\times n$.\n- Bilangan Wati urutan ke-$20 = 3 \\times 20 = 60$.\n\nJumlah kedua bilangan tersebut adalah $50 + 60 = 110$.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Diketahui suatu pola berikut ini:\n■ ♦ ♦ ● ▲ ▲ ▲ ■ ♦ ♦ ● ▲ ▲ ▲ $\\cdots$\nGambar yang akan tampak pada urutan ke-$100$ adalah ....\n\nA. ■\nB. ♦\nC. ●\nD. ▲',
          answer: 'B. ♦',
          principle: 'Pola berulang dengan periode $7$: tentukan sisa pembagian urutan oleh $7$.',
          solution:
            'Kelompok pola yang berulang terdiri dari $7$ simbol, yaitu:\n1: ■, 2: ♦, 3: ♦, 4: ●, 5: ▲, 6: ▲, 7: ▲.\n\nKarena setiap $7$ urutan polanya kembali ke awal, bagi $100$ dengan $7$:\n$$100 = 7 \\times 14 + 2.$$\nArtinya, pola berulang utuh sebanyak $14$ kali dan masih tersisa $2$ langkah. Jadi gambar pada urutan ke-$100$ sama dengan gambar urutan ke-$2$, yaitu ♦.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Bilangan ratusan $x$ dan $y$ dengan $x = apc$ dan $y = aqc$ memenuhi sifat $x - y = 50$ dan $p + q = 11$. Hasil dari $p \\times q$ adalah ....\n\nA. $24$\nB. $28$\nC. $30$\nD. $50$',
          answer: 'A. $24$',
          principle: 'Nilai tempat bilangan tiga angka: $\\overline{apc} = 100a + 10p + c$.',
          solution:
            'Nyatakan kedua bilangan tiga angka tersebut menurut nilai tempatnya (angka ratusan $a$, puluhan $p$ dan $q$, serta satuan $c$):\n$$x = 100a + 10p + c, \\qquad y = 100a + 10q + c.$$\nKurangkan kedua persamaan:\n$$x - y = (100a + 10p + c) - (100a + 10q + c) = 10(p - q).$$\nKarena $x - y = 50$, maka $10(p - q) = 50$, sehingga $p - q = 5$.\n\nDengan $p + q = 11$ dan $p - q = 5$, jumlahkan keduanya:\n$$2p = 11 + 5 = 16 \\implies p = 8,$$\nlalu $q = 11 - 8 = 3$. Keduanya merupakan angka satuan yang valid ($0 \\le p, q \\le 9$). Jadi $p \\times q = 8 \\times 3 = 24$.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Andi mengurutkan bilangan bulat yang bukan prima atau bukan kelipatan $5$, dimulai dari besar ke kecil. Jika urutan ke-$10$ bilangan yang dituliskan oleh Andi adalah $102$, maka urutan ke-$21$ adalah ....\n\nA. $83$\nB. $84$\nC. $86$\nD. $87$',
          answer: 'B. $84$',
          principle: 'Menyaring barisan bilangan menurun dengan mengeluarkan bilangan prima dan kelipatan $5$.',
          solution:
            'Maksud syarat pada soal adalah bilangan yang bukan merupakan bilangan prima maupun kelipatan $5$ (setiap bilangan prima dan setiap kelipatan $5$ dilewati).\n\nMulai dari urutan ke-$10$ yaitu $102$, kita hitung mundur satu per satu sambil menandai bilangan yang dilewati:\n- $101$ (prima, lewati), $100$ (kelipatan $5$, lewati)\n- Urutan ke-11: $99$, ke-12: $98$\n- $97$ (prima, lewati)\n- Urutan ke-13: $96$\n- $95$ (kelipatan $5$, lewati)\n- Urutan ke-14: $94$, ke-15: $93$ ($= 3 \\times 31$), ke-16: $92$, ke-17: $91$ ($= 7 \\times 13$)\n- $90$ (kelipatan $5$, lewati), $89$ (prima, lewati)\n- Urutan ke-18: $88$, ke-19: $87$ ($= 3 \\times 29$), ke-20: $86$\n- $85$ (kelipatan $5$, lewati)\n- Urutan ke-21: $84$.\n\nJadi bilangan pada urutan ke-$21$ adalah $84$.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Jika $\\dfrac{1}{4} \\times \\dfrac{1}{q} - \\dfrac{1}{4} - \\dfrac{1}{q} = \\dfrac{13}{2}$, maka nilai $q$ adalah ....\n\nA. $-9$\nB. $-\\dfrac{1}{9}$\nC. $\\dfrac{1}{9}$\nD. $9$',
          answer: 'B. $-\\dfrac{1}{9}$',
          principle: 'Pengelompokan suku sejenis pada persamaan pecahan.',
          solution:
            'Pindahkan $-\\frac{1}{4}$ ke ruas kanan dan sederhanakan suku yang memuat $\\frac{1}{q}$:\n$$\\frac{1}{q}\\left(\\frac{1}{4} - 1\\right) = \\frac{13}{2} + \\frac{1}{4}.$$\nHitung masing-masing ruas:\n$$\\frac{1}{q}\\left(-\\frac{3}{4}\\right) = \\frac{26}{4} + \\frac{1}{4} = \\frac{27}{4}.$$\nKalikan kedua ruas dengan $4$:\n$$-\\frac{3}{q} = 27 \\implies q = -\\frac{3}{27} = -\\frac{1}{9}.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Jika $a$ dan $b$ bilangan bulat positif yang memenuhi $a^{2} - b^{2} = 6^{3}$, maka nilai berikut yang bukan merupakan hasil dari $a \\times b$ adalah ....\n\nA. $45$\nB. $135$\nC. $315$\nD. $2915$',
          answer: 'B. $135$',
          principle: 'Pemfaktoran selisih kuadrat $a^2 - b^2 = (a+b)(a-b)$ dan pemeriksaan pasangan faktor berparitas sama.',
          solution:
            'Faktorkan ruas kiri menggunakan identitas selisih kuadrat:\n$$(a + b)(a - b) = 6^3 = 216.$$\nKarena $a$ dan $b$ bilangan bulat positif, maka $a + b > a - b > 0$. Selain itu, $(a + b) + (a - b) = 2a$ bernilai genap, sehingga $a + b$ dan $a - b$ harus sama-sama genap atau sama-sama ganjil. Karena $216$ genap, tidak mungkin keduanya ganjil, sehingga $a + b$ dan $a - b$ harus sama-sama genap.\n\nPasangan faktor positif dari $216$ yang keduanya genap dengan faktor pertama lebih besar adalah:\n1. $(108, 2) \\implies a = \\frac{108+2}{2} = 55,\\; b = \\frac{108-2}{2} = 53 \\implies a \\times b = 55 \\times 53 = 2915$.\n2. $(54, 4) \\implies a = \\frac{54+4}{2} = 29,\\; b = \\frac{54-4}{2} = 25 \\implies a \\times b = 29 \\times 25 = 725$.\n3. $(36, 6) \\implies a = \\frac{36+6}{2} = 21,\\; b = \\frac{36-6}{2} = 15 \\implies a \\times b = 21 \\times 15 = 315$.\n4. $(18, 12) \\implies a = \\frac{18+12}{2} = 15,\\; b = \\frac{18-12}{2} = 3 \\implies a \\times b = 15 \\times 3 = 45$.\n\nSemua hasil $a \\times b$ yang mungkin adalah $45, 315, 725,$ dan $2915$. Jadi $135$ bukan merupakan hasil dari $a \\times b$.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Tiga bilangan $x$, $y$, $z$ merupakan tiga bilangan kelipatan $n$ berurutan (contoh: $6$, $8$, $10$ merupakan bilangan kelipatan $2$ berurutan). Jumlah tiga bilangan tersebut adalah $27$ dan perkalian bilangan terkecil dan terbesarnya adalah $72$. Selisih bilangan terbesar dan terkecil adalah ....\n\nA. $2$\nB. $4$\nC. $6$\nD. $8$',
          answer: 'C. $6$',
          principle: 'Pemisalan simetris tiga suku berurutan $y-n$, $y$, $y+n$ dan identitas $(y-n)(y+n)=y^2-n^2$.',
          solution:
            'Misalkan ketiga bilangan tersebut dari yang terkecil ke terbesar adalah $y - n$, $y$, dan $y + n$ (dengan $n > 0$).\n\nDari jumlah ketiganya:\n$$(y - n) + y + (y + n) = 27 \\implies 3y = 27 \\implies y = 9.$$\nDari perkalian bilangan terkecil dan terbesar:\n$$(9 - n)(9 + n) = 72 \\implies 81 - n^2 = 72 \\implies n^2 = 9 \\implies n = 3.$$\n\nKetiga bilangan itu adalah $6$, $9$, dan $12$ (kelipatan $3$ berurutan). Jadi selisih bilangan terbesar dan terkecil adalah $12 - 6 = 6$.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Diketahui tiga orang sahabat, yaitu Ani, Budi, dan Corry. Di antara ketiganya, Ani paling muda dan Corry paling tua. Usia Ani dan Budi berselisih $1$ tahun, sedangkan usia Budi dan Corry berselisih $2$ tahun. Empat tahun kemudian jumlah usia mereka $76$ tahun. Jumlah usia Ani dan Corry saat ini adalah .... tahun.\n\nA. $45$\nB. $42$\nC. $41$\nD. $43$',
          answer: 'D. $43$',
          principle: 'Setiap orang bertambah usia sama banyak dalam selang waktu yang sama; nyatakan seluruh usia dalam satu variabel.',
          solution:
            'Misalkan usia saat ini adalah $A$ (Ani), $B$ (Budi), dan $C$ (Corry) dengan $A < B < C$. Diketahui:\n$$B - A = 1 \\implies A = B - 1, \\qquad C - B = 2 \\implies C = B + 2.$$\n\nEmpat tahun kemudian, usia masing-masing bertambah $4$ tahun sehingga jumlah usia mereka bertambah $3 \\times 4 = 12$ tahun. Maka jumlah usia mereka saat ini adalah:\n$$A + B + C = 76 - 12 = 64.$$\nSubstitusikan $A$ dan $C$ dalam $B$:\n$$(B - 1) + B + (B + 2) = 64 \\implies 3B + 1 = 64 \\implies 3B = 63 \\implies B = 21.$$\nDiperoleh $A = 20$ tahun dan $C = 23$ tahun, sehingga jumlah usia Ani dan Corry saat ini adalah $20 + 23 = 43$ tahun.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Pak Joni membeli $13\\ \\text{kg}$ keripik pisang seharga $\\text{Rp}650.000$. Keripik pisang dijual kembali dengan harga $\\text{Rp}15.000$ per $250\\ \\text{gram}$. Keuntungan maksimum yang akan diperoleh Pak Joni adalah ....\n\nA. $\\text{Rp}100.000$\nB. $\\text{Rp}130.000$\nC. $\\text{Rp}150.000$\nD. $\\text{Rp}180.000$',
          answer: 'B. $\\text{Rp}130.000$',
          principle: 'Konversi satuan massa ($1\\ \\text{kg} = 1.000\\ \\text{gram}$) dan keuntungan = total penjualan $-$ harga beli.',
          solution:
            'Karena $1\\ \\text{kg} = 1.000\\ \\text{gram} = 4 \\times 250\\ \\text{gram}$, harga jual untuk setiap $1\\ \\text{kg}$ keripik adalah:\n$$4 \\times \\text{Rp}15.000 = \\text{Rp}60.000.$$\nJika seluruh $13\\ \\text{kg}$ keripik habis terjual, total hasil penjualannya adalah:\n$$13 \\times \\text{Rp}60.000 = \\text{Rp}780.000.$$\nJadi keuntungan maksimum Pak Joni adalah $\\text{Rp}780.000 - \\text{Rp}650.000 = \\text{Rp}130.000$.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Naomi, Tori, dan Eksa sedang memainkan suatu permainan dalam $10$ babak. Juara ke-1, ke-2, dan ke-3 pada setiap babak akan mendapatkan poin berturut-turut sebesar $5$ poin, $3$ poin, dan $0$ poin. Dari seluruh babak, Naomi memperoleh total poin $28$. Berapa kali paling sedikit Naomi menjadi juara ke-3 dari seluruh babak permainan?\n\nA. $4$ kali\nB. $3$ kali\nC. $2$ kali\nD. $1$ kali',
          answer: 'C. $2$ kali',
          principle: 'Persamaan Diophantine linear sederhana: minimalkan $n_3$ dengan memaksimalkan $n_1 + n_2$.',
          solution:
            'Misalkan banyak babak Naomi menjadi juara ke-1, ke-2, dan ke-3 berturut-turut adalah $n_1$, $n_2$, dan $n_3$ (bilangan cacah). Diperoleh dua persamaan:\n$$n_1 + n_2 + n_3 = 10, \\qquad 5n_1 + 3n_2 = 28.$$\n\nPerhatikan kemungkinan nilai $n_1$ yang membuat $28 - 5n_1$ habis dibagi $3$:\n- Jika $n_1 = 5$: $3n_2 = 28 - 25 = 3 \\implies n_2 = 1$, sehingga $n_3 = 10 - 5 - 1 = 4$.\n- Jika $n_1 = 4$: $3n_2 = 8$ (tidak habis dibagi $3$).\n- Jika $n_1 = 3$: $3n_2 = 13$ (tidak habis dibagi $3$).\n- Jika $n_1 = 2$: $3n_2 = 28 - 10 = 18 \\implies n_2 = 6$, sehingga $n_3 = 10 - 2 - 6 = 2$.\n- Jika $n_1 = 1$: $3n_2 = 23$ (tidak habis dibagi $3$).\n- Jika $n_1 = 0$: $3n_2 = 28$ (tidak habis dibagi $3$).\n\nSatu-satunya nilai $n_3$ yang mungkin adalah $2$ atau $4$. Jadi paling sedikit Naomi menjadi juara ke-3 sebanyak $2$ kali.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Hasil operasi $\\left( (0,4)^{6} \\times 25^{3} \\right) + \\left( (0,5)^{4} \\times 16^{3} \\right)$ adalah ....\n\nA. $320$\nB. $312$\nC. $296$\nD. $272$',
          answer: 'A. $320$',
          principle: 'Mengubah desimal ke pecahan sederhana dan menyamakan bilangan pokok pangkat.',
          solution:
            'Ubah $0,4 = \\frac{2}{5}$, $0,5 = \\frac{1}{2}$, $25 = 5^2$, dan $16 = 2^4$. Hitung masing-masing suku:\n- Suku pertama:\n$$\\left(\\frac{2}{5}\\right)^6 \\times (5^2)^3 = \\frac{2^6}{5^6} \\times 5^6 = 2^6 = 64.$$\n- Suku kedua:\n$$\\left(\\frac{1}{2}\\right)^4 \\times (2^4)^3 = \\frac{1}{2^4} \\times 2^{12} = 2^{12-4} = 2^8 = 256.$$\n\nJumlah kedua suku adalah $64 + 256 = 320$.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Diketahui $\\dfrac{3}{4} + \\dfrac{7}{253} = \\dfrac{a}{2024}$. Nilai $a$ adalah ....\n\nA. $787$\nB. $1012$\nC. $1574$\nD. $1724$',
          answer: 'C. $1574$',
          principle: 'Penjumlahan pecahan dengan menyamakan penyebut terhadap $2024$.',
          solution:
            'Perhatikan bahwa $2024 = 4 \\times 506$ dan $2024 = 253 \\times 8$. Ubah kedua pecahan agar berpenyebut $2024$:\n$$\\frac{3}{4} = \\frac{3 \\times 506}{4 \\times 506} = \\frac{1518}{2024}, \\qquad \\frac{7}{253} = \\frac{7 \\times 8}{253 \\times 8} = \\frac{56}{2024}.$$\nJumlahkan keduanya:\n$$\\frac{1518}{2024} + \\frac{56}{2024} = \\frac{1574}{2024}.$$\nJadi $a = 1574$.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Azizah akan mengoperasikan suatu bilangan dengan operasi-operasi berikut: ditambah $2$, dibagi $6$, dibagi $5$, dikurang $3$, dan dikali $2$.\nSebagai contoh, Azizah mengoperasikan bilangan $11$ untuk mendapatkan hasil akhir $1$ sebagai berikut:\n$11 + 2 = 13$\n$13 - 3 = 10$\n$10 / 5 = 2$\n$2 + 2 = 4$\n$4 - 3 = 1$\nPada contoh tersebut Azizah melakukan sebanyak lima operasi.\nJika Azizah mengoperasikan bilangan $122$ dan hasil operasi terakhir yang diinginkan adalah $1$ (dengan setiap hasil antara merupakan bilangan bulat positif), maka banyaknya operasi yang paling sedikit dilakukan oleh Azizah adalah .... operasi.\n\nA. sepuluh\nB. tujuh\nC. sembilan\nD. enam',
          answer: 'B. tujuh',
          principle: 'Optimasi langkah berhitung: meminimalkan operasi dengan pembuktian batas bawah jumlah langkah.',
          solution:
            'Untuk turun dari $122$ ke $1$, pengurangan $3$ paling banyak menurunkan nilai sebesar $3$ per langkah, sedangkan $+2$ dan $\\times 2$ justru menaikkan nilai. Jika hanya memakai paling banyak satu kali pembagian dalam $6$ langkah, hasil terkecil yang mungkin jauh di atas $1$ (misalnya $120 \\div 6 = 20$ lalu $4$ kali dikurang $3$ masih $8 > 1$). Maka diperlukan minimal $2$ kali pembagian.\n\nKarena $122$ tidak habis dibagi $5$ maupun $6$ dan setiap hasil antara adalah bilangan bulat positif:\n- Untuk mencapai pembagian pertama dari $122$, paling cepat diperlukan $2$ langkah penambah/pengurang menuju kelipatan $6$ terdekat ($122 + 2 = 124$, $124 + 2 = 126$), lalu $\\div 6$ menghasilkan $21$ (sudah $3$ langkah; menuju kelipatan $5$ terdekat dari $122$ atau $244$ memerlukan minimal $4$ langkah).\n- Dari $21$ dengan sisa $3$ langkah (jika ingin total $6$ langkah), pembagian kedua tercepat adalah $21 - 3 = 18$ lalu $18 \\div 6 = 3$ (tersisa $1$ langkah dari $3$, hanya bisa menghasilkan $0, 5,$ atau $6 \\ne 1$) atau $21 \\times 2 = 42$ lalu $42 \\div 6 = 7$ (tersisa $1$ langkah dari $7$, hanya bisa menghasilkan $4, 9,$ atau $14 \\ne 1$).\n\nJadi $6$ operasi tidak mungkin. Dengan $7$ operasi, nilai $1$ dapat dicapai:\n$$122 \\xrightarrow{+2} 124 \\xrightarrow{+2} 126 \\xrightarrow{\\div 6} 21 \\xrightarrow{-3} 18 \\xrightarrow{\\div 6} 3 \\xrightarrow{+2} 5 \\xrightarrow{\\div 5} 1.$$\nJadi paling sedikit dibutuhkan tujuh operasi.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Limas $E.ABCD$ memiliki alas persegi panjang dengan ukuran $CD = 6\\ \\text{cm}$, $AD = 8\\ \\text{cm}$, dan rusuk-rusuk tegaknya $13\\ \\text{cm}$. Luas segitiga $BDE$ adalah .... $\\text{cm}^{2}$.\n\nA. $24$\nB. $30$\nC. $48$\nD. $60$',
          answer: 'D. $60$',
          principle: 'Teorema Pythagoras pada diagonal persegi panjang dan tinggi segitiga sama kaki.',
          solution:
            'Alas $ABCD$ adalah persegi panjang dengan $AB = CD = 6\\ \\text{cm}$ dan $AD = 8\\ \\text{cm}$. Panjang diagonal $BD$ adalah:\n$$BD = \\sqrt{AB^2 + AD^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\ \\text{cm}.$$\n\nPada segitiga $BDE$, diketahui rusuk-rusuk tegak limas $EB = ED = 13\\ \\text{cm}$, sehingga $\\triangle BDE$ adalah segitiga sama kaki dengan alas $BD = 10\\ \\text{cm}$. Garis tinggi dari $E$ membagi alas $BD$ menjadi dua bagian sama panjang masing-masing $\\frac{10}{2} = 5\\ \\text{cm}$.\n\nDengan Teorema Pythagoras, tinggi segitiga $BDE$ adalah:\n$$t = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\ \\text{cm}.$$\nMaka luas $\\triangle BDE = \\frac{1}{2} \\times 10 \\times 12 = 60\\ \\text{cm}^2$.',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Jumlah keliling suatu persegi dan suatu persegi panjang sama dengan tiga kali keliling suatu segitiga sama sisi. Diketahui panjang sisi persegi dan segitiga sama sisi berturut-turut adalah $12\\ \\text{cm}$ dan $10\\ \\text{cm}$. Jika lebar persegi panjang adalah $9\\ \\text{cm}$, maka perbandingan lebar dan panjang dari persegi panjang adalah ....\n\nA. $2 : 3$\nB. $1 : 2$\nC. $1 : 4$\nD. $3 : 4$',
          answer: 'D. $3 : 4$',
          principle: 'Keliling persegi ($4s$), segitiga sama sisi ($3s$), dan persegi panjang ($2(p+l)$).',
          solution:
            'Hitung keliling persegi dan segitiga sama sisi terlebih dahulu:\n- Keliling persegi $= 4 \\times 12 = 48\\ \\text{cm}$.\n- Keliling segitiga sama sisi $= 3 \\times 10 = 30\\ \\text{cm}$, sehingga tiga kali kelilingnya $= 3 \\times 30 = 90\\ \\text{cm}$.\n\nKarena jumlah keliling persegi dan persegi panjang sama dengan $90\\ \\text{cm}$, maka:\n$$\\text{Keliling persegi panjang} = 90 - 48 = 42\\ \\text{cm}.$$\nDengan rumus keliling persegi panjang $2(p + l) = 42$, diperoleh $p + l = 21$. Karena lebar $l = 9\\ \\text{cm}$, maka panjang $p = 21 - 9 = 12\\ \\text{cm}$.\n\nPerbandingan lebar dan panjangnya adalah $9 : 12 = 3 : 4$.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Diketahui tabung $A$ memiliki jari-jari sama dengan tingginya, sedangkan tabung $B$ memiliki jari-jari sama dengan $\\frac{3}{4}$ tingginya. Jika jari-jari tabung $A$ sama dengan dua kali jari-jari tabung $B$, maka perbandingan luas selimut tabung $A$ dan tabung $B$ adalah ....\n\nA. $2 : 1$\nB. $3 : 1$\nC. $4 : 3$\nD. $3 : 2$',
          answer: 'B. $3 : 1$',
          principle: 'Luas selimut tabung $= 2\\pi r t$; nyatakan semua ukuran dalam satu variabel jari-jari.',
          solution:
            'Misalkan jari-jari tabung $B$ adalah $r_B = r$. Maka:\n- Jari-jari tabung $A$ adalah $r_A = 2r$, dan tingginya $t_A = r_A = 2r$.\n- Pada tabung $B$, diketahui $r_B = \\frac{3}{4}t_B$, sehingga $t_B = \\frac{4}{3}r_B = \\frac{4}{3}r$.\n\nHitung perbandingan luas selimut kedua tabung:\n$$L_A : L_B = (2\\pi r_A t_A) : (2\\pi r_B t_B) = (r_A t_A) : (r_B t_B).$$\nSubstitusikan nilai-nilainya:\n$$L_A : L_B = (2r \\cdot 2r) : \\left(r \\cdot \\frac{4}{3}r\\right) = 4r^2 : \\frac{4}{3}r^2 = 4 : \\frac{4}{3} = 12 : 4 = 3 : 1.$$',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Hasil ujian matematika di suatu kelas yang terdiri dari $20$ siswa berada pada interval $56 - 100$. Rata-rata seluruh siswa di kelas tersebut adalah $68$. Sebanyak $3$ siswa mengikuti remedial dengan nilai maksimum $75$. Rata-rata tertinggi setelah remedial yang mungkin untuk kelas tersebut adalah ....\n\nA. $70,65$\nB. $70,75$\nC. $70,85$\nD. $70,95$',
          answer: 'C. $70,85$',
          principle: 'Rata-rata maksimum diperoleh saat total kenaikan nilai (nilai akhir $-$ nilai awal) sebesar mungkin.',
          solution:
            'Jumlah nilai awal seluruh $20$ siswa adalah:\n$$20 \\times 68 = 1360.$$\n\nAgar rata-rata setelah remedial setinggi mungkin, $3$ siswa peserta remedial harus memiliki nilai awal serendah mungkin dan nilai remedial setinggi mungkin. Karena seluruh nilai berada pada interval $56 - 100$ dan nilai remedial maksimal $75$, kenaikan terbesar terjadi jika ketiga siswa tersebut semula mendapat nilai $56$ dan setelah remedial mendapat nilai $75$.\n\nPeriksa kelayakan nilai $17$ siswa lainnya: jumlah nilai mereka adalah $1360 - 3 \\times 56 = 1360 - 168 = 1192$, sehingga rata-rata ke-$17$ siswa tersebut adalah $\\frac{1192}{17} = 70\\frac{2}{17}$, yang sah berada dalam interval $56 - 100$.\n\nTotal kenaikan nilai $= 3 \\times (75 - 56) = 3 \\times 19 = 57$. Jumlah nilai akhir $= 1360 + 57 = 1417$, sehingga rata-rata tertinggi adalah:\n$$\\frac{1417}{20} = \\frac{7085}{100} = 70,85.$$',
          rubric: OK
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Bilangan penyusun dari tahun $2024$ yaitu $2$, $0$, $2$, dan $4$, bila dijumlahkan hasilnya adalah $8$. Berapa banyak tahun yang memiliki sifat tersebut seabad setelah $2040$?\n\nA. $6$\nB. $7$\nC. $8$\nD. $9$',
          answer: 'B. $7$',
          principle: 'Pencacahan sistematis berdasarkan rentang tahun dan jumlah digit.',
          solution:
            'Satu abad ($100$ tahun) setelah $2040$ mencakup tahun $2041$ sampai $2140$ (tahun $2040$ berjumlah angka $2+0+4+0=6$ dan $2140$ berjumlah angka $2+1+4+0=7$, keduanya bukan $8$).\n\nKita kelompokkan berdasarkan dua angka pertamanya:\n1. Tahun berbentuk $20ab$ ($41 \\le ab \\le 99$):\n   Syarat jumlah digit: $2 + 0 + a + b = 8 \\implies a + b = 6$ dengan $a \\ge 4$.\n   Nilai yang memenuhi: $(a, b) = (4, 2), (5, 1), (6, 0)$, yaitu tahun $2042, 2051, 2060$ (ada $3$ tahun).\n2. Tahun berbentuk $21ab$ ($00 \\le ab \\le 40$):\n   Syarat jumlah digit: $2 + 1 + a + b = 8 \\implies a + b = 5$ dengan $0 \\le a \\le 4$ dan tahun $\\le 2140$.\n   - Jika $a = 4$, maka $b = 1$, menghasilkan $2141 > 2140$ (tidak memenuhi).\n   - Untuk $a \\in \\{0, 1, 2, 3\\}$, diperoleh tahun $2105, 2114, 2123, 2132$ (ada $4$ tahun).\n\nTotal banyak tahun yang memenuhi adalah $3 + 4 = 7$.',
          rubric: OK
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Berapa banyak bilangan ganjil sembilan angka $abcdefghi$ berbeda yang tersusun dari angka-angka $1, 2, 3, 4, 5, 6, 7, 8,$ dan $9$ sehingga $d + e + f = 10$?\n\nA. $2160$\nB. $4320$\nC. $6480$\nD. $8640$',
          answer: 'D. $8640$',
          principle: 'Kaidah perkalian: pilih himpunan tiga angka berjumlah $10$, susun $(d,e,f)$, pilih digit satuan ganjil $i$, lalu susun sisa $5$ digit.',
          solution:
            'Bilangan ganjil sembilan angka tersebut menggunakan seluruh angka $1$ sampai $9$ masing-masing tepat satu kali.\n\n1. Tentukan himpunan tiga angka berbeda $\\{d, e, f\\}$ dari $\\{1, 2, \\ldots, 9\\}$ yang jumlahnya $10$:\n   - $\\{1, 2, 7\\}$\n   - $\\{1, 3, 6\\}$\n   - $\\{1, 4, 5\\}$\n   - $\\{2, 3, 5\\}$\n   Ada $4$ himpunan yang mungkin. Perhatikan bahwa keempat himpunan tersebut sama-sama memuat tepat $2$ angka ganjil dan $1$ angka genap.\n2. Untuk setiap himpunan terpilih, posisi $d, e, f$ dapat disusun dalam $3! = 6$ cara.\n3. Karena dari $5$ angka ganjil $\\{1, 3, 5, 7, 9\\}$ sudah terpakai $2$ angka di kelompok $(d, e, f)$, tersisa $5 - 2 = 3$ pilihan angka ganjil untuk menempati posisi satuan $i$ (agar bilangan yang terbentuk ganjil).\n4. Lima angka yang tersisa dapat disusun pada lima posisi lainnya ($a, b, c, g, h$) dalam $5! = 120$ cara.\n\nDengan kaidah perkalian, banyak bilangan yang memenuhi adalah:\n$$4 \\times 6 \\times 3 \\times 120 = 8640.$$',
          rubric: OK
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Bilangan ratusan $abc$ disusun dari angka-angka yang berbeda $1, 2, 3, 4, 5,$ dan $6$. Jika $b$ merupakan bilangan genap dan $a > c$, maka banyak bilangan ratusan yang mungkin adalah .... bilangan.\n\nA. $16$\nB. $20$\nC. $30$\nD. $32$',
          answer: 'C. $30$',
          principle: 'Kombinasi dan kaidah perkalian: setiap $2$ angka berbeda memiliki tepat $1$ cara penyusunan agar $a > c$.',
          solution:
            'Angka yang tersedia adalah $\\{1, 2, 3, 4, 5, 6\\}$ dan ketiga angka $a, b, c$ harus berbeda.\n\n1. Karena $b$ genap, maka $b \\in \\{2, 4, 6\\}$, sehingga ada $3$ pilihan untuk $b$.\n2. Setelah memilih $b$, tersisa $5$ angka berbeda untuk mengisi $a$ dan $c$. Dari $5$ angka tersebut, pilih $2$ angka; banyak cara memilihnya adalah:\n   $$\\binom{5}{2} = \\frac{5 \\times 4}{2} = 10\\text{ pasang}.$$\n3. Untuk setiap pasang angka berbeda yang terpilih, hanya ada tepat $1$ cara menempatkannya pada posisi $a$ dan $c$ agar $a > c$ (angka yang lebih besar sebagai $a$, angka yang lebih kecil sebagai $c$).\n\nJadi banyak bilangan ratusan yang mungkin adalah $3 \\times 10 = 30$.',
          rubric: OK
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Panitia pentas seni membutuhkan $2$ orang bagian perlengkapan dan $2$ orang bagian sekretariat. Jika terdapat $3$ calon anggota bagian perlengkapan dan $4$ calon anggota bagian sekretariat, maka banyak susunan anggota berbeda yang dapat dipilih adalah ....\n\nA. $9$\nB. $18$\nC. $36$\nD. $72$',
          answer: 'B. $18$',
          principle: 'Kombinasi untuk pemilihan tanpa memperhatikan urutan dan kaidah perkalian.',
          solution:
            'Pemilihan anggota pada tiap bagian tidak memperhatikan urutan jabatan, sehingga digunakan kombinasi:\n- Banyak cara memilih $2$ orang perlengkapan dari $3$ calon:\n  $$\\binom{3}{2} = \\frac{3 \\times 2}{2 \\times 1} = 3\\text{ cara}.$$\n- Banyak cara memilih $2$ orang sekretariat dari $4$ calon:\n  $$\\binom{4}{2} = \\frac{4 \\times 3}{2 \\times 1} = 6\\text{ cara}.$$\n\nDengan kaidah perkalian, banyak susunan anggota berbeda yang dapat dipilih adalah $3 \\times 6 = 18$.',
          rubric: OK
        }
      ]
    }
  ]
};
