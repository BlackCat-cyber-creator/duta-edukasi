/**
 * Paket Soal Terstruktur: OSN-K Matematika SD — Bilangan Paket 1
 * Sumber: 1 BILANGAN PAKET 1.pdf (Modul Olimpiade SD PrimaNesa).
 * Seluruh 15 soal asli dimuat secara berurutan (1–15).
 * Soal nomor 13 dipertahankan dalam bahasa Inggris sesuai naskah asli.
 */
export default {
  id: 'osk-mat-sd-bilangan-p1',
  slug: 'osk-bilangan-paket-1',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'Bilangan Olimpiade SD (OSN-K Paket 1): pecahan, pola bilangan dan ubin, keterbagian, sisa pembagian, KPK, FPB, deret teleskopik',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd4-bab3-pola-gambar-bilangan',
    'sd5-bab1-bilangan-cacah-100k',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan',
    'sd6-bab1-pecahan-desimal',
    'smp7-bab1-bilangan-bulat'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SD — Bilangan Paket 1',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 15 soal pada naskah (masing-masing bernilai 2 poin: 1 poin metode dan 1 poin jawaban akhir; total 30 poin). Penomoran soal mengikuti naskah asli (1–15), dan soal nomor 13 dipertahankan dalam bahasa Inggris sesuai aslinya.',
  source: {
    org: 'OSN-K',
    file: '1 BILANGAN PAKET 1.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Latihan Soal Bilangan — Paket 1',
      marks: 30,
      stem: 'Selesaikan ke-15 soal bilangan berikut (nomor 1–15) secara teliti dan sistematis.',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            '(Soal Tingkat Kabupaten 2020) Doni, Joko, Gonto, dan Peter bermain matematika. Setiap anak menuliskan sebuah bilangan pecahan positif dalam tiga kertas berbeda kemudian memberikannya kepada tiga temannya. Aturan mainnya adalah menjumlahkan semua bilangan pecahan yang diterima dan jika jumlahnya tidak bulat maka harus mengurangi dengan sebuah pecahan positif lain sehingga nilainya menjadi bilangan bulat terbesar. Joko menerima bilangan pecahan berikut dari tiga temannya:\n$$2\\frac{3}{8}; \\quad 0{,}125; \\quad 25\\%.$$\nBerapa bilangan pecahan yang harus dikurangkan oleh Joko?',
          answer: '$\\frac{3}{4}$ (atau $0{,}75$)',
          principle:
            'Ubah seluruh bentuk pecahan, desimal, dan persen ke pecahan berpenyebut sama untuk dijumlahkan, lalu kurangkan bagian pecahannya agar diperoleh bilangan bulat terbesar.',
          solution:
            'Ubah ketiga bilangan yang diterima Joko ke pecahan biasa dengan penyebut $8$:\n- $2\\frac{3}{8} = \\frac{19}{8}$\n- $0{,}125 = \\frac{125}{1000} = \\frac{1}{8}$\n- $25\\% = \\frac{25}{100} = \\frac{1}{4} = \\frac{2}{8}$\n\nJumlahkan ketiganya:\n$$\\frac{19}{8} + \\frac{1}{8} + \\frac{2}{8} = \\frac{22}{8} = \\frac{11}{4} = 2\\frac{3}{4}.$$\nKarena $2\\frac{3}{4}$ bukan bilangan bulat, Joko harus menguranginya dengan sebuah pecahan positif agar hasilnya menjadi bilangan bulat terbesar yang masih lebih kecil dari $2\\frac{3}{4}$, yaitu $2$.\nMaka pecahan positif yang harus dikurangkan adalah:\n$$2\\frac{3}{4} - 2 = \\frac{3}{4} = 0{,}75.$$',
          rubric: [
            { code: 'M1', text: 'Mengubah semua bilangan ke bentuk pecahan sejenis dan menjumlahkannya menjadi $2\\frac{3}{4}$.' },
            { code: 'A1', text: 'Menentukan pecahan yang harus dikurangkan adalah $\\frac{3}{4}$ (atau $0{,}75$).' }
          ]
        },
        {
          label: '2',
          marks: 2,
          figures: [
            {
              src: '/papers/osk-mat-sd-bilangan-p1/fig-2.svg',
              alt: 'Tujuh ubin segi enam beraturan dengan satu ubin pusat bertuliskan angka sembilan dan tiga garis lurus putus-putus melewati pusat',
              caption: 'Susunan tujuh ubin segi enam dengan tiga garis segaris melewati ubin pusat bernilai 9.'
            }
          ],
          prompt:
            '(Soal Tingkat Kabupaten 2020) Bilangan $9, 10, 11, 12, 13, 14,$ dan $15$ akan diletakkan di ubin segi enam seperti pada gambar. Jumlah tiga bilangan yang terletak di tiga ubin segaris adalah sama. Jumlah tiga bilangan yang memenuhi kondisi tersebut adalah ....',
          answer: '$34$',
          principle:
            'Karena ketiga garis lurus berpotongan di ubin pusat ($9$), enam ubin luar terbagi menjadi tiga pasang ubin berhadapan yang masing-masing berjumlah sama.',
          solution:
            'Pada gambar terlihat bahwa angka $9$ sudah ditempatkan di ubin pusat, dan ketiga garis putus-putus masing-masing memuat $2$ ubin luar yang berhadapan serta ubin pusat $9$.\nEnam bilangan yang tersisa untuk ditempatkan pada enam ubin luar adalah $10, 11, 12, 13, 14,$ dan $15$. Jumlah keenam bilangan tersebut adalah:\n$$10 + 11 + 12 + 13 + 14 + 15 = 75.$$\nKarena jumlah tiap garis sama dan ubin pusatnya sama-sama bernilai $9$, maka jumlah setiap pasang ubin luar yang berhadapan harus sama, yaitu:\n$$\\frac{75}{3} = 25.$$\nPasangan tersebut dapat dibentuk dengan tepat: $(10, 15)$, $(11, 14)$, dan $(12, 13)$, yang masing-masing berjumlah $25$.\nDengan demikian, jumlah tiga bilangan pada setiap garis adalah:\n$$9 + 25 = 34.$$',
          rubric: [
            { code: 'M1', text: 'Menjumlahkan enam bilangan luar ($75$) dan membaginya rata menjadi tiga pasangan berjumlah $25$.' },
            { code: 'A1', text: 'Memperoleh jumlah tiga bilangan segaris adalah $34$.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          figures: [
            {
              src: '/papers/osk-mat-sd-bilangan-p1/fig-3.svg',
              alt: 'Lima petak persegi mendatar berlabel huruf A, B, C, D, dan E secara berurutan',
              caption: 'Lima petak berurutan untuk diisi bilangan pada A, C, E serta operasi hitung pada B, D.'
            }
          ],
          prompt:
            '(Soal Tingkat Kabupaten 2020) Isilah petak A, C, dan E dengan bilangan $4, 7,$ atau $9$, sedangkan petak B dan D dengan operasi hitung $+, -, \\times,$ atau $\\div$. Jika kelima petak diisi dengan angka dan operasi hitung berbeda, maka nilai minimum hasil operasi hitung pada petak tersebut adalah ....',
          answer: '$-59$',
          principle:
            'Gunakan aturan urutan operasi hitung (perkalian dan pembagian dikerjakan sebelum penjumlahan dan pengurangan) dan maksimalkan hasil kali yang bertanda negatif.',
          solution:
            'Susunan petak membentuk ekspresi $A \\text{ [B] } C \\text{ [D] } E$, dengan $A, C, E$ adalah permutasi dari $\\{4, 7, 9\\}$ dan $B, D$ dua operasi berbeda dari $\\{+, -, \\times, \\div\\}$.\nSesuai aturan urutan operasi hitung, perkalian ($\\times$) dan pembagian ($\\div$) dikerjakan terlebih dahulu sebelum penjumlahan ($+$) dan pengurangan ($-$).\nAgar hasil sekecil mungkin (paling negatif), kita perlu mengurangkan hasil perkalian terbesar dari bilangan terkecil:\n- Jika pengurangan diletakkan di $B$ dan perkalian di $D$ ($A - C \\times E$): pilih $A = 4$ serta $\\{C, E\\} = \\{7, 9\\}$, sehingga diperoleh:\n$$4 - 7 \\times 9 = 4 - 63 = -59 \\quad (\\text{atau } 4 - 9 \\times 7 = -59).$$\n- Bandingkan dengan penempatan lain:\n  - Jika $B = \\times$ dan $D = -$ ($A \\times C - E$): hasil terkecil adalah $4 \\times 7 - 9 = 19$.\n  - Jika melibatkan $\\div$ dan $-$: nilai paling kecil adalah $\\frac{4}{9} - 7 = -6\\frac{5}{9}$ atau $\\frac{4}{7} - 9 = -8\\frac{3}{7}$, yang jauh lebih besar daripada $-59$.\n  - Jika tidak menggunakan $-$ sama sekali ($+$ bersama $\\times$ atau $\\div$): semua hasil bernilai positif.\n\nJadi nilai minimum hasil operasi hitung tersebut adalah $-59$.',
          rubric: [
            { code: 'M1', text: 'Menerapkan urutan operasi hitung untuk meminimalkan $A - C \\times E$ dengan $A=4$ dan $\\{C,E\\}=\\{7,9\\}$.' },
            { code: 'A1', text: 'Memperoleh nilai minimum $-59$.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            '(Soal Tingkat Kecamatan 2022) Sebuah bilangan asli $A$, jika dibagi $5$ bersisa $1$, dibagi $6$ bersisa $2$, dibagi $8$ bersisa $4$, dan dibagi $9$ bersisa $2$. Jika bilangan $A$ terkecil dibagi $7$, akan bersisa ....',
          answer: '$5$',
          principle:
            'Ubah syarat sisa yang memiliki selisih tetap terhadap pembagi ($5-1 = 6-2 = 8-4 = 4$) menjadi kelipatan KPK dari pembagi-pembaginya.',
          solution:
            'Perhatikan selisih antara pembagi dan sisa pada tiga syarat pertama:\n- Dibagi $5$ bersisa $1 \\implies A + 4$ habis dibagi $5$.\n- Dibagi $6$ bersisa $2 \\implies A + 4$ habis dibagi $6$.\n- Dibagi $8$ bersisa $4 \\implies A + 4$ habis dibagi $8$.\n\nArtinya, $A + 4$ harus merupakan kelipatan persekutuan dari $5, 6,$ dan $8$. Hitung KPK-nya:\n$$5 = 5, \\quad 6 = 2 \\times 3, \\quad 8 = 2^3 \\implies \\text{KPK}(5, 6, 8) = 2^3 \\times 3 \\times 5 = 120.$$\nDengan demikian, $A + 4 = 120k$ atau $A = 120k - 4$ untuk suatu bilangan asli $k \\ge 1$.\nSekarang uji syarat keempat, yaitu $A$ dibagi $9$ bersisa $2$:\n- Untuk $k = 1$: $A = 120(1) - 4 = 116$. Karena $116 = 9 \\times 12 + 8$, sisanya $8$ (tidak memenuhi).\n- Untuk $k = 2$: $A = 120(2) - 4 = 236$. Karena $236 = 9 \\times 26 + 2$, sisanya $2$ (memenuhi).\n\nJadi bilangan asli $A$ terkecil adalah $236$.\nSelanjutnya bagi $236$ dengan $7$:\n$$236 = 7 \\times 33 + 5.$$\nSisa pembagiannya adalah $5$.',
          rubric: [
            { code: 'M1', text: 'Menemukan $A = 120k - 4$ dari $\\text{KPK}(5,6,8)=120$ lalu menguji syarat sisa $2$ ketika dibagi $9$ hingga memperoleh $A=236$.' },
            { code: 'A1', text: 'Menghitung sisa pembagian $236$ oleh $7$, yaitu $5$.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            '(Soal Tingkat Kecamatan 2022) Utusan anggota Pramuka Penggalang dari kelas IV, V, dan VI sekolah dasar untuk mengikuti Persami sebanyak $108$ orang. Utusan dari kelas IV sebanyak $30$ orang, kelas V sebanyak $36$ orang, dan kelas VI sebanyak $42$ orang. Untuk acara baris-berbaris semua utusan dibagi dalam beberapa kelompok. Tiap kelompok merupakan campuran dari semua kelas dengan jumlah yang sama. Banyak anggota tiap kelompok adalah ... orang.',
          answer: '$18$ orang',
          principle:
            'Banyak kelompok maksimal yang membagi rata tiap kelas ditentukan oleh FPB dari jumlah siswa masing-masing kelas.',
          solution:
            'Agar setiap kelompok memiliki komposisi anggota kelas IV, V, dan VI yang sama banyak, maka banyak kelompok harus menjadi faktor persekutuan dari $30, 36,$ dan $42$.\nFaktorkan ketiga bilangan:\n- $30 = 2 \\times 3 \\times 5$\n- $36 = 2^2 \\times 3^2$\n- $42 = 2 \\times 3 \\times 7$\n\nSehingga $\\text{FPB}(30, 36, 42) = 2 \\times 3 = 6$.\nSesuai soal FPB standar (jumlah kelompok terbanyak sehingga tiap kelompok berukuran paling kecil yang seimbang), dibentuk $6$ kelompok. Banyak anggota tiap kelompok adalah:\n- Kelas IV: $30 \\div 6 = 5$ orang\n- Kelas V: $36 \\div 6 = 6$ orang\n- Kelas VI: $42 \\div 6 = 7$ orang\nTotal tiap kelompok $= 5 + 6 + 7 = 18$ orang (atau $108 \\div 6 = 18$ orang).\n(Catatan: apabila banyak kelompok tidak dibatasi terbanyak, faktor persekutuan lain seperti $2$ atau $3$ kelompok masing-masing berisi $54$ atau $36$ orang.)',
          rubric: [
            { code: 'M1', text: 'Menghitung $\\text{FPB}(30, 36, 42) = 6$ sebagai banyaknya kelompok terbanyak.' },
            { code: 'A1', text: 'Menentukan banyak anggota tiap kelompok adalah $18$ orang.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            '(Soal Tingkat Kecamatan 2022) Dalam sebuah pembagian, $M$ merupakan hasil bagi dan $N$ menyatakan sisa. Jika $432$ dibagi $201$, maka $(M, N)$ adalah ....',
          answer: '$(2, 30)$',
          principle:
            'Algoritma pembagian bilangan bulat: $a = b \\times M + N$ dengan $0 \\le N < b$.',
          solution:
            'Lakukan pembagian bersisa $432$ oleh $201$:\n$$201 \\times 2 = 402 \\le 432, \\qquad 201 \\times 3 = 603 > 432.$$\nSehingga:\n$$432 = 201 \\times 2 + 30.$$\nKarena $0 \\le 30 < 201$, diperoleh hasil bagi $M = 2$ dan sisa $N = 30$.\nJadi pasangan $(M, N) = (2, 30)$.',
          rubric: [
            { code: 'M1', text: 'Menuliskan bentuk pembagian $432 = 201 \\times 2 + 30$.' },
            { code: 'A1', text: 'Menyatakan $(M, N) = (2, 30)$.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            '(Soal Tingkat Nasional 2015) Andi mempunyai enam bilangan, yaitu $15; 16; 18; 19; 20;$ dan $31$. Dia memberi tahu Budi bahwa dia akan menghapus salah satu dari enam bilangan tersebut, dan lima bilangan sisanya ketika dijumlahkan habis dibagi tiga. Bilangan yang akan dihapus Andi adalah ....',
          answer: '$20$',
          principle:
            'Jumlah sisa bilangan yang tersisa habis dibagi $3$ jika dan hanya jika bilangan yang dihapus memiliki sisa pembagian terhadap $3$ yang sama dengan jumlah seluruh bilangan.',
          solution:
            'Hitung jumlah keenam bilangan terlebih dahulu:\n$$15 + 16 + 18 + 19 + 20 + 31 = 119.$$\nTentukan sisa pembagian $119$ oleh $3$:\n$$119 = 3 \\times 39 + 2 \\implies 119 \\equiv 2 \\pmod{3}.$$\nAgar jumlah lima bilangan yang tersisa habis dibagi $3$ (bersisa $0$), bilangan yang dihapus harus bersisa $2$ ketika dibagi $3$.\nPeriksa sisa pembagian oleh $3$ dari setiap bilangan:\n- $15 = 3 \\times 5 + 0$ (sisa $0$)\n- $16 = 3 \\times 5 + 1$ (sisa $1$)\n- $18 = 3 \\times 6 + 0$ (sisa $0$)\n- $19 = 3 \\times 6 + 1$ (sisa $1$)\n- $20 = 3 \\times 6 + 2$ (sisa $2$)\n- $31 = 3 \\times 10 + 1$ (sisa $1$)\n\nHanya $20$ yang bersisa $2$ saat dibagi $3$. Periksa: $119 - 20 = 99 = 3 \\times 33$ (habis dibagi $3$). Jadi bilangan yang dihapus Andi adalah $20$.',
          rubric: [
            { code: 'M1', text: 'Menjumlahkan keenam bilangan ($119 \\equiv 2 \\pmod{3}$) dan mencari anggota himpunan yang bersisa $2$ jika dibagi $3$.' },
            { code: 'A1', text: 'Menentukan bilangan yang dihapus adalah $20$.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            '(Soal Tingkat Nasional 2015) Tanggal 21 Mei 2015 dapat juga ditulis `21 05 2015`. Jumlah empat angka pertama (yang menyatakan tanggal dan bulan) yaitu $(2 + 1 + 0 + 5) = 8$ sama dengan jumlah empat angka terakhir (yang menyatakan tahun) yaitu $(2 + 0 + 1 + 5) = 8$. Banyaknya tanggal di tahun 2015 yang memiliki sifat seperti itu adalah ... tanggal.',
          answer: '$30$ tanggal',
          principle:
            'Cacah secara sistematis per bulan dengan syarat jumlah dua digit tanggal ditambah jumlah dua digit bulan sama dengan $8$, memperhatikan banyak hari tiap bulan pada tahun 2015 (bukan tahun kabisat).',
          solution:
            'Jumlah empat digit tahun $2015$ adalah $2 + 0 + 1 + 5 = 8$. Jadi untuk format `TT BB`, jumlah digit tanggal ($\\text{sum}(TT)$) ditambah jumlah digit bulan ($\\text{sum}(BB)$) harus sama dengan $8$. Perhatikan pula bahwa $2015$ bukan tahun kabisat (Februari memiliki $28$ hari).\n\nData tiap bulan:\n- Bulan `01` ($\\text{sum}=1$), butuh $\\text{sum}(TT) = 7$: `07`, `16`, `25` $\\to 3$ tanggal.\n- Bulan `02` ($\\text{sum}=2$), butuh $\\text{sum}(TT) = 6$: `06`, `15`, `24` $\\to 3$ tanggal (semua $\\le 28$).\n- Bulan `03` ($\\text{sum}=3$), butuh $\\text{sum}(TT) = 5$: `05`, `14`, `23` $\\to 3$ tanggal.\n- Bulan `04` ($\\text{sum}=4$), butuh $\\text{sum}(TT) = 4$: `04`, `13`, `22` $\\to 3$ tanggal.\n- Bulan `05` ($\\text{sum}=5$), butuh $\\text{sum}(TT) = 3$: `03`, `12`, `21`, `30` $\\to 4$ tanggal.\n- Bulan `06` ($\\text{sum}=6$), butuh $\\text{sum}(TT) = 2$: `02`, `11`, `20` $\\to 3$ tanggal.\n- Bulan `07` ($\\text{sum}=7$), butuh $\\text{sum}(TT) = 1$: `01`, `10` $\\to 2$ tanggal.\n- Bulan `08` ($\\text{sum}=8$), butuh $\\text{sum}(TT) = 0$: tidak ada tanggal `00` $\\to 0$ tanggal.\n- Bulan `09` ($\\text{sum}=9 > 8$): tidak mungkin $\\to 0$ tanggal.\n- Bulan `10` ($\\text{sum}=1+0=1$), butuh $\\text{sum}(TT) = 7$: `07`, `16`, `25` $\\to 3$ tanggal.\n- Bulan `11` ($\\text{sum}=1+1=2$), butuh $\\text{sum}(TT) = 6$: `06`, `15`, `24` $\\to 3$ tanggal.\n- Bulan `12` ($\\text{sum}=1+2=3$), butuh $\\text{sum}(TT) = 5$: `05`, `14`, `23` $\\to 3$ tanggal.\n\nTotal banyaknya tanggal adalah:\n$$3 + 3 + 3 + 3 + 4 + 3 + 2 + 0 + 0 + 3 + 3 + 3 = 30\\text{ tanggal}.$$',
          rubric: [
            { code: 'M1', text: 'Mencacah tanggal valid per bulan (01 sampai 12) dengan syarat jumlah digit tanggal + bulan sama dengan $8$.' },
            { code: 'A1', text: 'Menjumlahkan hasil pencacahan dan memperoleh $30$ tanggal.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            '(Soal Tingkat Nasional 2015) Tuti menjumlahkan bilangan-bilangan $1; 3; 5; 7; \\dots; 2015$. Sementara Irma menjumlahkan bilangan-bilangan $2; 4; 6; 8; \\dots; 2014$. Selisih jumlah yang diperoleh Tuti dengan jumlah yang diperoleh Irma adalah ....',
          answer: '$1008$',
          principle:
            'Pasangkan suku berurutan dari kedua deret agar selisih tiap pasangan konstan, atau gunakan rumus jumlah bilangan ganjil dan genap.',
          solution:
            'Misalkan $T = 1 + 3 + 5 + \\dots + 2015$ dan $I = 2 + 4 + 6 + \\dots + 2014$.\n\n**Cara 1 (Memasangkan suku):**\nDari $2$ hingga $2014$, terdapat $\\frac{2014}{2} = 1007$ bilangan genap pada jumlah Irma. Pada jumlah Tuti terdapat $1008$ bilangan ganjil. Kelompokkan $T - I$ sebagai:\n$$T - I = 1 + (3 - 2) + (5 - 4) + (7 - 6) + \\dots + (2015 - 2014).$$\nSetiap pasangan dalam kurung bernilai $1$, dan ada sebanyak $1007$ pasang:\n$$T - I = 1 + \\underbrace{1 + 1 + \\dots + 1}_{1007\\text{ kali}} = 1 + 1007 = 1008.$$\n\n**Cara 2 (Rumus jumlah deret):**\nJumlah $n$ bilangan ganjil pertama adalah $n^2$, sehingga $T = 1008^2$.\nJumlah $m$ bilangan genap pertama adalah $m(m+1)$, sehingga $I = 1007 \\times 1008$.\nMaka:\n$$T - I = 1008^2 - 1007 \\times 1008 = 1008 \\times (1008 - 1007) = 1008.$$',
          rubric: [
            { code: 'M1', text: 'Memasangkan suku-suku berurutan $(3-2) + (5-4) + \\dots + (2015-2014)$ atau memakai rumus jumlah deret.' },
            { code: 'A1', text: 'Memperoleh selisih sama dengan $1008$.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'Diketahui $(a \\diamond b)$ menyatakan operasi $(a \\times b) - (a - b)$. Hasil dari $4 \\diamond (2 \\diamond 5)$ dengan operasi di atas adalah ....\n\nA. $13$\nB. $43$\nC. $61$\nD. $81$',
          answer: 'C. $61$',
          principle:
            'Evaluasi operasi baru secara bertahap mulai dari ekspresi di dalam tanda kurung terlebih dahulu.',
          solution:
            'Hitung bagian di dalam tanda kurung, yaitu $2 \\diamond 5$, menggunakan definisi $a \\diamond b = (a \\times b) - (a - b)$:\n$$2 \\diamond 5 = (2 \\times 5) - (2 - 5) = 10 - (-3) = 10 + 3 = 13.$$\nSelanjutnya substitusi hasil tersebut untuk menghitung $4 \\diamond 13$:\n$$4 \\diamond 13 = (4 \\times 13) - (4 - 13) = 52 - (-9) = 52 + 9 = 61.$$\nJadi hasilnya adalah $61$ (pilihan C).',
          rubric: [
            { code: 'M1', text: 'Menghitung $2 \\diamond 5 = 13$ lalu mensubstitusikannya ke $4 \\diamond 13$.' },
            { code: 'A1', text: 'Memperoleh hasil $61$, pilihan C.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          figures: [
            {
              src: '/papers/osk-mat-sd-bilangan-p1/fig-11.webp',
              alt: 'Persegi panjang ABCD terbagi menjadi sembilan bagian dalam kisi tiga kali tiga dengan keliling lima bagian bernilai 11, 20, 8, 11, dan 12',
              caption: 'Pembagian persegi panjang ABCD menjadi sembilan persegi panjang kecil beserta keliling lima bagiannya.'
            }
          ],
          prompt:
            'Perhatikan gambar di samping! Jika angka-angka pada gambar menunjukkan keliling dari masing-masing bagian, maka keliling persegi panjang $ABCD$ adalah ....',
          answer: '$46$',
          principle:
            'Jumlahkan keliling kelima bagian yang diketahui, lalu kurangkan dua kali keliling bagian tengah yang terhitung berlebih agar diperoleh keliling persegi panjang $ABCD$.',
          solution:
            'Pada gambar, persegi panjang $ABCD$ terbagi menjadi kisi $3 \\times 3$ persegi panjang kecil dengan lebar kolom berturut-turut $w_1, w_2, w_3$ dan tinggi baris berturut-turut $h_1, h_2, h_3$.\nBerdasarkan keliling lima bagian yang diketahui:\n- Bagian atas tengah: $2(w_2 + h_1) = 11$\n- Bagian tengah kiri: $2(w_1 + h_2) = 20$\n- Bagian pusat (tengah-tengah): $2(w_2 + h_2) = 8$\n- Bagian tengah kanan: $2(w_3 + h_2) = 11$\n- Bagian bawah tengah: $2(w_2 + h_3) = 12$\n\nJumlahkan keliling kelima bagian tersebut:\n$$11 + 20 + 8 + 11 + 12 = 62.$$\nSecara aljabar, jumlah tersebut bernilai:\n$$2(w_2 + h_1) + 2(w_1 + h_2) + 2(w_2 + h_2) + 2(w_3 + h_2) + 2(w_2 + h_3) = 2(w_1 + w_2 + w_3 + h_1 + h_2 + h_3) + 4(w_2 + h_2).$$\nPerhatikan bahwa $2(w_1 + w_2 + w_3 + h_1 + h_2 + h_3)$ tepat merupakan keliling persegi panjang $ABCD$, sedangkan $4(w_2 + h_2) = 2 \\times 2(w_2 + h_2) = 2 \\times 8 = 16$.\nDengan demikian, keliling persegi panjang $ABCD$ adalah:\n$$62 - 16 = 46.$$',
          rubric: [
            { code: 'M1', text: 'Menjumlahkan keliling lima bagian yang diketahui ($62$) dan mengurangkan dua kali keliling bagian tengah ($2 \\times 8 = 16$).' },
            { code: 'A1', text: 'Memperoleh keliling persegi panjang $ABCD$ adalah $46$.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'Jumlah dari: $1 - 2 + 3 - 4 + \\dots + 199 - 200$ adalah ....\n\nA. $-50$\nB. $-75$\nC. $-80$\nD. $-100$',
          answer: 'D. $-100$',
          principle:
            'Kelompokkan suku berurutan menjadi pasangan dua bilangan dengan selisih konstan.',
          solution:
            'Dari $1$ sampai $200$ terdapat $200$ bilangan, yang dapat dikelompokkan menjadi $\\frac{200}{2} = 100$ pasang berurutan:\n$$(1 - 2) + (3 - 4) + (5 - 6) + \\dots + (199 - 200).$$\nSetiap pasangan bernilai $-1$, sehingga jumlah keseluruhannya adalah:\n$$100 \\times (-1) = -100.$$\nJadi jawabannya adalah $-100$ (pilihan D).',
          rubric: [
            { code: 'M1', text: 'Mengelompokkan deret menjadi $100$ pasang berurutan yang masing-masing bernilai $-1$.' },
            { code: 'A1', text: 'Memperoleh jumlah $-100$, pilihan D.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Find the sum of the following:\n$$\\frac{1}{2}\\left(1 - \\frac{1}{3}\\right) + \\frac{1}{2}\\left(\\frac{1}{3} - \\frac{1}{5}\\right) + \\frac{1}{2}\\left(\\frac{1}{5} - \\frac{1}{7}\\right) + \\dots + \\frac{1}{2}\\left(\\frac{1}{2013} - \\frac{1}{2015}\\right)$$',
          answer: '$\\frac{1007}{2015}$',
          principle:
            'Gunakan sifat distributif untuk mengeluarkan faktor $\\frac{1}{2}$, lalu terapkan penjumlahan teleskopik karena suku-suku tengah saling meniadakan.',
          solution:
            'Keluarkan faktor persekutuan $\\frac{1}{2}$ dari seluruh suku:\n$$\\frac{1}{2}\\left[\\left(1 - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{5}\\right) + \\left(\\frac{1}{5} - \\frac{1}{7}\\right) + \\dots + \\left(\\frac{1}{2013} - \\frac{1}{2015}\\right)\\right].$$\nPerhatikan bahwa setiap suku negatif di dalam tanda kurung langsung ditiadakan oleh suku positif berikutnya ($-\\frac{1}{3} + \\frac{1}{3} = 0$, $-\\frac{1}{5} + \\frac{1}{5} = 0$, dan seterusnya hingga $-\\frac{1}{2013} + \\frac{1}{2013} = 0$). Hanya suku pertama dan suku terakhir yang tersisa:\n$$= \\frac{1}{2}\\left(1 - \\frac{1}{2015}\\right) = \\frac{1}{2} \\times \\frac{2014}{2015} = \\frac{1007}{2015}.$$',
          rubric: [
            { code: 'M1', text: 'Mengeluarkan faktor $\\frac{1}{2}$ dan menyederhanakan deret teleskopik menjadi $\\frac{1}{2}\\left(1 - \\frac{1}{2015}\\right)$.' },
            { code: 'A1', text: 'Memperoleh hasil $\\frac{1007}{2015}$.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Ali berenang $10$ hari sekali, Budi berenang $15$ hari sekali, sedangkan Amir berenang $20$ hari sekali. Ketiga-tiganya sama-sama berenang pertama kali pada tanggal $20$ Februari $2012$. Kapan ketiga-tiganya sama-sama berenang untuk yang kedua kalinya?',
          answer: '$20$ April $2012$',
          principle:
            'Waktu pertemuan bersama berikutnya adalah KPK dari periode masing-masing; perhatikan bahwa tahun $2012$ adalah tahun kabisat sehingga bulan Februari memiliki $29$ hari.',
          solution:
            'Tentukan KPK dari $10, 15,$ dan $20$:\n- $10 = 2 \\times 5$\n- $15 = 3 \\times 5$\n- $20 = 2^2 \\times 5$\n\nSehingga $\\text{KPK}(10, 15, 20) = 2^2 \\times 3 \\times 5 = 60$ hari.\nKetiganya berenang bersama lagi tepat $60$ hari setelah tanggal $20$ Februari $2012$. Karena $2012$ habis dibagi $4$ ($2012 = 4 \\times 503$), tahun $2012$ adalah **tahun kabisat** dengan jumlah hari pada bulan Februari sebanyak $29$ hari.\nHitung $60$ hari ke depan:\n- Sisa hari pada Februari $2012$: $29 - 20 = 9$ hari (sampai $29$ Februari).\n- Jumlah hari pada Maret $2012$: $31$ hari ($9 + 31 = 40$ hari, sampai $31$ Maret).\n- Sisa hari yang dibutuhkan pada April $2012$: $60 - 40 = 20$ hari.\n\nJadi ketiga-tiganya berenang bersama untuk kedua kalinya pada tanggal $20$ April $2012$.',
          rubric: [
            { code: 'M1', text: 'Menghitung $\\text{KPK}(10, 15, 20) = 60$ hari dan memperhitungkan Februari $2012$ memiliki $29$ hari (tahun kabisat).' },
            { code: 'A1', text: 'Menentukan tanggal pertemuan kedua adalah $20$ April $2012$.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            '(Soal Tingkat Kabupaten 2012) Jika faktor persekutuan terbesar dan kelipatan persekutuan terkecil dari bilangan bulat $98$ dan $226$ berturut-turut adalah $p$ dan $q$, maka tentukan nilai dari $q - p^{12}$.',
          answer: '$6978$',
          principle:
            'Gunakan faktorisasi prima untuk memperoleh FPB ($p$) dan KPK ($q$), atau sifat $p \\times q = a \\times b$.',
          solution:
            'Faktorkan $98$ dan $226$ ke dalam faktor prima:\n- $98 = 2 \\times 49 = 2 \\times 7^2$\n- $226 = 2 \\times 113$ ($113$ merupakan bilangan prima karena tidak habis dibagi $2, 3, 5,$ maupun $7$)\n\nTentukan $p$ dan $q$:\n- $p = \\text{FPB}(98, 226) = 2$\n- $q = \\text{KPK}(98, 226) = 2 \\times 7^2 \\times 113 = 98 \\times 113 = 11074$\n\nHitung $p^{12}$:\n$$p^{12} = 2^{12} = 4096.$$\nMaka:\n$$q - p^{12} = 11074 - 4096 = 6978.$$',
          rubric: [
            { code: 'M1', text: 'Menentukan $p = 2$, $q = 11074$, dan $p^{12} = 2^{12} = 4096$.' },
            { code: 'A1', text: 'Menghitung $q - p^{12} = 6978$.' }
          ]
        }
      ]
    }
  ]
};
