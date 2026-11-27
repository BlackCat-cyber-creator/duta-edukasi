/**
 * Paket Soal Terstruktur: OSN-K Matematika SD 2025 (30 soal pilihan ganda lengkap)
 * Sumber: content-inbox/drive/restore/osnk_mat_sd_2025.pdf & scraped_raw/osnk-matematika-sd-2025.md (30 soal asli).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-mat-sd-2025',
  slug: 'osnk-matematika-sd-2025',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'OSN-K Matematika SD 2025',
  relatedChapterIds: [
    'sd4-bab3-pola-gambar-bilangan',
    'sd5-bab3-bilangan-pecahan',
    'sd5-bab5-luas-daerah-bangun-datar',
    'sd5-bab8-data',
    'sd6-bab2-rasio',
    'sd6-bab3-kubus-balok',
    'sd6-bab4-peluang'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SD 2025',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 30 soal pilihan ganda berikut (setiap jawaban benar bernilai 1 poin). Penomoran label soal mengikuti urutan naskah asli, dan soal nomor 23 serta 28 dipertahankan dalam bahasa Inggris sesuai aslinya.',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-matematika-sd-2025.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 30,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (30 soal, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Terdapat bilangan-bilangan sebagai berikut: $75\\% \\ ; \\ 0{,}745 \\ ; \\ \\frac{67}{100} \\ ; \\ \\frac{2}{3}$. Jika bilangan-bilangan tersebut diurutkan dari nilai terkecil hingga terbesar, maka urutannya adalah ....\n\nA. $\\frac{2}{3} \\ ; \\ \\frac{67}{100} \\ ; \\ 0{,}745 \\ ; \\ 75\\%$\nB. $\\frac{67}{100} \\ ; \\ \\frac{2}{3} \\ ; \\ 0{,}745 \\ ; \\ 75\\%$\nC. $\\frac{2}{3} \\ ; \\ \\frac{67}{100} \\ ; \\ 75\\% \\ ; \\ 0{,}745$\nD. $\\frac{67}{100} \\ ; \\ \\frac{2}{3} \\ ; \\ 75\\% \\ ; \\ 0{,}745$',
          answer: 'A. $\\frac{2}{3} \\ ; \\ \\frac{67}{100} \\ ; \\ 0{,}745 \\ ; \\ 75\\%$',
          principle: 'Mengurutkan pecahan, desimal, dan persen dengan menyamakan bentuk atau perkalian silang.',
          solution:
            'Ubah bilangan yang berpenyebut kelipatan $10$ ke bentuk desimal tiga angka di belakang koma:\n- $75\\% = \\frac{75}{100} = 0{,}750$\n- $0{,}745 = 0{,}745$\n- $\\frac{67}{100} = 0{,}670$\nDari ketiganya terlihat $\\frac{67}{100} < 0{,}745 < 75\\%$.\nSelanjutnya bandingkan $\\frac{2}{3}$ dengan $\\frac{67}{100}$ menggunakan perkalian silang:\n$$2 \\times 100 = 200 < 3 \\times 67 = 201,$$\nsehingga $\\frac{2}{3} < \\frac{67}{100}$.\nJadi urutan dari nilai terkecil hingga terbesar adalah $\\frac{2}{3} \\ ; \\ \\frac{67}{100} \\ ; \\ 0{,}745 \\ ; \\ 75\\%$.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Rifky mempunyai uang Rp50.000,00. Uang tersebut akan digunakan untuk membeli kue yang dijual dengan harga Rp10.000,00 per bungkus. Jika satu bungkus berisi tiga kue, maka maksimal banyaknya kue yang didapat Rifky adalah ... kue.\n\nA. $3$\nB. $5$\nC. $12$\nD. $15$',
          answer: 'D. $15$',
          principle: 'Operasi hitung pembagian dan perkalian pada soal cerita.',
          solution:
            'Dengan uang Rp50.000,00 dan harga Rp10.000,00 per bungkus, banyak bungkus yang dapat dibeli adalah:\n$$50.000 \\div 10.000 = 5\\ \\text{bungkus}.$$\nKarena setiap bungkus berisi $3$ kue, maksimal kue yang didapat Rifky adalah $5 \\times 3 = 15$ kue.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Sebuah kubus dengan panjang rusuk $4\\ \\text{cm}$ dicat seluruh permukaannya dengan warna merah. Kubus tersebut kemudian dipotong-potong menjadi kubus-kubus kecil dengan panjang rusuk $1\\ \\text{cm}$. Banyak kubus kecil yang tepat memiliki dua sisi berwarna merah adalah ....\n\nA. $16$\nB. $24$\nC. $32$\nD. $48$',
          answer: 'B. $24$',
          principle: 'Kubus kecil dengan tepat $2$ sisi bercat berada di bagian tengah setiap rusuk (bukan di titik sudut).',
          solution:
            'Kubus besar berukuran $4 \\times 4 \\times 4$ dipotong menjadi $64$ kubus kecil berukuran $1 \\times 1 \\times 1$.\nKubus kecil yang tepat memiliki dua sisi berwarna merah terletak di sepanjang rusuk kubus besar, tetapi tidak di titik sudut (karena kubus di titik sudut memiliki $3$ sisi merah).\nPada setiap rusuk sepanjang $4$ kubus kecil, terdapat $2$ kubus sudut di kedua ujungnya, sehingga tersisa $4 - 2 = 2$ kubus kecil di bagian tengah rusuk.\nKarena kubus memiliki $12$ rusuk, banyak kubus kecil yang tepat memiliki dua sisi berwarna merah adalah $12 \\times 2 = 24$.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-mat-sd-2025/fig-4.webp',
              alt: 'Diagram batang Data Peminjaman Buku Perpustakaan untuk siswa Kelas 4, Kelas 5, dan Kelas 6 dengan skala vertikal 0 sampai 50.',
              caption: 'Diagram batang peminjaman buku perpustakaan selama satu minggu'
            }
          ],
          prompt:
            'Data peminjaman buku siswa kelas $4$, $5$, dan $6$ selama satu minggu di perpustakaan sekolah disajikan dalam diagram batang berikut.\n\nPernyataan yang tepat mengenai data tersebut adalah ....\n\nA. Rata-rata banyak buku yang dipinjam oleh tiap kelas adalah $30$\nB. Selisih banyak buku yang dipinjam antara kelas $6$ dengan kelas $4$ adalah $15$ buku\nC. Median dari data peminjaman buku adalah $35$ buku\nD. Jumlah buku yang dipinjam oleh ketiga kelas adalah $100$ buku',
          answer: 'D. Jumlah buku yang dipinjam oleh ketiga kelas adalah $100$ buku',
          principle: 'Membaca data pada diagram batang lalu menghitung rata-rata, selisih, median, dan jumlah data.',
          solution:
            'Berdasarkan diagram batang, banyak buku yang dipinjam masing-masing kelas adalah:\n- Kelas $4$: $25$ buku\n- Kelas $5$: $30$ buku\n- Kelas $6$: $45$ buku\nPeriksa setiap pernyataan:\n- A salah: rata-rata banyak buku adalah $\\frac{25 + 30 + 45}{3} = \\frac{100}{3} = 33\\frac{1}{3} \\ne 30$.\n- B salah: selisih kelas $6$ dan kelas $4$ adalah $45 - 25 = 20 \\ne 15$ buku.\n- C salah: karena data terurut adalah $25, 30, 45$, mediannya adalah $30 \\ne 35$ buku.\n- D benar: jumlah buku yang dipinjam ketiga kelas adalah $25 + 30 + 45 = 100$ buku.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Berikut adalah data banyaknya jawaban benar dari $10$ siswa yang mengikuti kompetisi matematika SD:\n$$10,\\ 12,\\ 8,\\ 15,\\ 17,\\ 18,\\ 25,\\ 30,\\ 35,\\ 40.$$\nRata-rata banyaknya jawaban benar dari $10$ siswa tersebut adalah ....\n\nA. $12$\nB. $18$\nC. $21$\nD. $3$',
          answer: 'C. $21$',
          principle: 'Rata-rata hitung adalah jumlah seluruh data dibagi banyak data.',
          solution:
            'Jumlahkan seluruh data dengan mengelompokkan pasangan yang mudah dihitung:\n$$(10 + 40) + (12 + 8) + (15 + 35) + (17 + 18) + (25 + 30) = 50 + 20 + 50 + 35 + 55 = 210.$$\nRata-rata banyaknya jawaban benar adalah:\n$$\\frac{210}{10} = 21.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Pukul $06.15$ Amir berangkat ke sekolah naik sepeda dengan kecepatan $10\\ \\text{km/jam}$. Jika jarak rumah Amir ke sekolah adalah $3\\ \\text{km}$, maka Amir tiba di sekolah pada pukul ....\n\nA. $06.24$\nB. $06.33$\nC. $06.44$\nD. $06.55$',
          answer: 'B. $06.33$',
          principle: 'Waktu tempuh sama dengan jarak dibagi kecepatan, lalu ubah satuan jam ke menit ($1\\ \\text{jam} = 60\\ \\text{menit}$).',
          solution:
            'Lama perjalanan Amir adalah:\n$$\\text{Waktu} = \\frac{\\text{jarak}}{\\text{kecepatan}} = \\frac{3\\ \\text{km}}{10\\ \\text{km/jam}} = \\frac{3}{10}\\ \\text{jam}.$$\nUbah ke menit:\n$$\\frac{3}{10} \\times 60\\ \\text{menit} = 18\\ \\text{menit}.$$\nKarena berangkat pukul $06.15$, Amir tiba di sekolah pada pukul $06.15 + 18\\ \\text{menit} = 06.33$.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Terdapat $10$ kartu bilangan prima pertama. Banyaknya cara mengambil $2$ kartu sehingga jumlah bilangan dari kedua kartu tersebut bernilai ganjil adalah ... cara.\n\nA. $90$\nB. $10$\nC. $9$\nD. $5$',
          answer: 'C. $9$',
          principle: 'Paritas penjumlahan: jumlah dua bilangan bulat bernilai ganjil jika dan hanya jika satu genap dan satu ganjil.',
          solution:
            'Sepuluh bilangan prima pertama adalah $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$. Dari kesepuluh bilangan tersebut, hanya $2$ yang bernilai genap, sedangkan $9$ bilangan lainnya bernilai ganjil.\nAgar jumlah dua kartu bernilai ganjil, kedua kartu harus terdiri atas $1$ bilangan genap dan $1$ bilangan ganjil (karena $\\text{genap}+\\text{genap}=\\text{genap}$ dan $\\text{ganjil}+\\text{ganjil}=\\text{genap}$).\nJadi satu kartu wajib bernilai $2$, dan kartu lainnya dapat dipilih dari $9$ bilangan prima ganjil. Banyaknya cara adalah $1 \\times 9 = 9$ cara.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Sebuah tim cerdas cermat terdiri dari $3$ siswa yang dipilih dari $4$ siswa terbaik di kelas. Banyak tim berbeda yang mungkin dapat dibentuk adalah ....\n\nA. $4$\nB. $6$\nC. $12$\nD. $24$',
          answer: 'A. $4$',
          principle: 'Memilih $3$ anggota dari $4$ calon sama artinya dengan memilih $1$ orang yang tidak diikutsertakan.',
          solution:
            'Misalkan keempat siswa tersebut adalah $A, B, C,$ dan $D$. Memilih $3$ siswa untuk masuk tim sama saja dengan menentukan $1$ siswa yang tidak dipilih.\nKarena ada $4$ siswa, ada tepat $4$ pilihan tim berbeda, yaitu $\\{A,B,C\\}$, $\\{A,B,D\\}$, $\\{A,C,D\\}$, dan $\\{B,C,D\\}$. Jadi ada $4$ tim yang dapat dibentuk.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Lina memiliki tiga kotak berisi pensil. Kotak pertama berisi $24$ pensil. Kotak kedua berisi tiga kali dari isi kotak pertama, dan kotak ketiga berisi setengah dari isi kotak kedua. Banyak pensil yang dimiliki Lina dari ketiga kotak tersebut adalah ....\n\nA. $96$\nB. $120$\nC. $132$\nD. $144$',
          answer: 'C. $132$',
          principle: 'Menghitung nilai secara bertahap sesuai hubungan kelipatan dan pecahan.',
          solution:
            '- Kotak pertama $= 24$ pensil.\n- Kotak kedua $= 3 \\times 24 = 72$ pensil.\n- Kotak ketiga $= \\frac{1}{2} \\times 72 = 36$ pensil.\nJumlah pensil seluruhnya adalah $24 + 72 + 36 = 132$ pensil.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Suhu udara di Antartika tanggal 16 Mei 2025 pukul $04.00$ mencapai $-48^{\\circ}\\text{C}$, dua jam kemudian suhu udara mengalami kenaikan sebesar $2$ derajat Celsius dan dua jam kemudian suhu mengalami penurunan sebesar $3$ derajat Celsius. Suhu udara di Antartika tanggal 16 Mei 2025 ....\n\nA. pukul $06.00$ mencapai $-50^{\\circ}\\text{C}$\nB. pukul $08.00$ mencapai $-47^{\\circ}\\text{C}$\nC. pukul $06.00$ mencapai $-46^{\\circ}\\text{C}$\nD. pukul $08.00$ mencapai $-43^{\\circ}\\text{C}$',
          answer: 'C. pukul $06.00$ mencapai $-46^{\\circ}\\text{C}$',
          principle: 'Penjumlahan dan pengurangan bilangan bulat negatif untuk kenaikan dan penurunan suhu.',
          solution:
            'Catat perubahan suhu berdasarkan waktu:\n- Pukul $04.00$: suhu awal $-48^{\\circ}\\text{C}$.\n- Dua jam kemudian, pukul $06.00$: naik $2^{\\circ}\\text{C}$ menjadi $-48 + 2 = -46^{\\circ}\\text{C}$.\n- Dua jam kemudian, pukul $08.00$: turun $3^{\\circ}\\text{C}$ menjadi $-46 - 3 = -49^{\\circ}\\text{C}$.\nPernyataan yang benar adalah pukul $06.00$ mencapai $-46^{\\circ}\\text{C}$ (pilihan C).',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Jumlah dari $8\\frac{2}{5} \\div 2{,}25$ dan $\\frac{10}{3} \\times 2\\frac{3}{5}$ adalah ....\n\nA. $12{,}75$\nB. $12{,}55$\nC. $12{,}40$\nD. $12{,}00$',
          answer: 'C. $12{,}40$',
          principle: 'Operasi hitung campuran pecahan campuran dan desimal dengan mengubah ke pecahan biasa.',
          solution:
            'Ubah setiap bilangan menjadi pecahan biasa:\n$$8\\frac{2}{5} = \\frac{42}{5}, \\quad 2{,}25 = 2\\frac{1}{4} = \\frac{9}{4}, \\quad 2\\frac{3}{5} = \\frac{13}{5}.$$\nHitung pembagian dan perkalian terlebih dahulu:\n$$\\frac{42}{5} \\div \\frac{9}{4} = \\frac{42}{5} \\times \\frac{4}{9} = \\frac{14 \\times 4}{5 \\times 3} = \\frac{56}{15},$$\n$$\\frac{10}{3} \\times \\frac{13}{5} = \\frac{2 \\times 13}{3 \\times 1} = \\frac{26}{3} = \\frac{130}{15}.$$\nJumlahkan kedua hasilnya:\n$$\\frac{56}{15} + \\frac{130}{15} = \\frac{186}{15} = \\frac{62}{5} = 12\\frac{2}{5} = 12{,}40.$$',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Dua buah bangun yang berbentuk persegi dan segitiga mempunyai keliling yang sama. Sisi-sisi segitiga tersebut mempunyai panjang $10\\ \\text{cm}$, $16\\ \\text{cm}$, dan $10\\ \\text{cm}$. Jumlah luas kedua bangun tersebut adalah ....\n\nA. $72\\ \\text{cm}^2$\nB. $84\\ \\text{cm}^2$\nC. $129\\ \\text{cm}^2$\nD. $177\\ \\text{cm}^2$',
          answer: 'C. $129\\ \\text{cm}^2$',
          principle: 'Keliling bangun datar dan tinggi segitiga sama kaki dengan Teorema Pythagoras.',
          solution:
            'Keliling segitiga $= 10 + 16 + 10 = 36\\ \\text{cm}$. Karena keliling persegi sama dengan keliling segitiga, panjang sisi persegi adalah $36 \\div 4 = 9\\ \\text{cm}$, sehingga luas persegi $= 9 \\times 9 = 81\\ \\text{cm}^2$.\nSegitiga bersisi $10\\ \\text{cm}, 10\\ \\text{cm}, 16\\ \\text{cm}$ adalah segitiga sama kaki dengan alas $16\\ \\text{cm}$. Garis tinggi ke alas membagi alas menjadi dua bagian sama panjang sebesar $8\\ \\text{cm}$. Dengan Teorema Pythagoras:\n$$t = \\sqrt{10^2 - 8^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6\\ \\text{cm}.$$\nLuas segitiga $= \\frac{1}{2} \\times 16 \\times 6 = 48\\ \\text{cm}^2$.\nJadi jumlah luas kedua bangun adalah $81 + 48 = 129\\ \\text{cm}^2$.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-mat-sd-2025/fig-13.webp',
              alt: 'Tiga persegi yang saling berimpitan secara mendatar dari kiri ke kanan, yaitu Taman 1 yang terbesar, Taman 2 di tengah, dan Taman 3 yang terkecil.',
              caption: 'Susunan tiga taman berbentuk persegi yang saling berimpitan'
            }
          ],
          prompt:
            'Sebuah taman kota terdiri dari tiga taman saling berimpitan yaitu Taman $1$, Taman $2$, dan Taman $3$ yang masing-masing berbentuk persegi seperti pada gambar berikut.\n\nJika perbandingan sisi Taman $1$, Taman $2$, dan Taman $3$ adalah $5 : 4 : 3$, dan luas Taman $1$ adalah $100\\ \\text{m}^2$, maka keliling taman kota adalah ....\n\nA. $60\\ \\text{m}$\nB. $64\\ \\text{m}$\nC. $68\\ \\text{m}$\nD. $72\\ \\text{m}$',
          answer: 'C. $68\\ \\text{m}$',
          principle: 'Menentukan panjang sisi persegi dari luasnya, menggunakan perbandingan senilai, dan menghitung keliling gabungan tanpa sisi berimpitan di bagian dalam.',
          solution:
            'Luas Taman $1$ adalah $100\\ \\text{m}^2$ (pada naskah asli tertulis $\\text{cm}^2$, disesuaikan menjadi $\\text{m}^2$ mengikuti satuan meter pada pilihan jawaban), sehingga panjang sisi Taman $1$ adalah:\n$$s_1 = \\sqrt{100} = 10\\ \\text{m}.$$\nDengan perbandingan sisi $s_1 : s_2 : s_3 = 5 : 4 : 3$, diperoleh:\n$$s_2 = \\frac{4}{5} \\times 10 = 8\\ \\text{m}, \\qquad s_3 = \\frac{3}{5} \\times 10 = 6\\ \\text{m}.$$\nKetika ketiga persegi disusun mendatar dan berimpitan, sisi bersama antara Taman $1$ dan Taman $2$ (panjang $s_2$) serta antara Taman $2$ dan Taman $3$ (panjang $s_3$) tidak termasuk keliling luar. Masing-masing sisi bersama tersebut terhitung dua kali jika kita menjumlahkan keliling ketiga persegi, sehingga:\n$$\\text{Keliling} = 4(10 + 8 + 6) - 2(8 + 6) = 96 - 28 = 68\\ \\text{m}.$$',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-mat-sd-2025/fig-14.webp',
              alt: 'Persegi ABEI dengan titik-titik sudut A, B, E, I serta titik C, D pada sisi BE dan titik F, G, H pada sisi EI yang membentuk empat segitiga arsiran berpuncak di A.',
              caption: 'Persegi ABEI dengan empat daerah segitiga yang diarsir'
            }
          ],
          prompt:
            'Perhatikan gambar berikut!\n\nJika luas persegi $ABEI$ adalah $49\\ \\text{cm}^2$ dan luas daerah yang diarsir dalam persegi adalah $35\\ \\text{cm}^2$, maka panjang $BC + DE + EF + GH = \\dots\\ \\text{cm}$.\n\nA. $9$\nB. $10$\nC. $12$\nD. $14$',
          answer: 'B. $10$',
          principle: 'Keempat segitiga yang diarsir memiliki tinggi yang sama dengan panjang sisi persegi.',
          solution:
            'Karena luas persegi $ABEI$ adalah $49\\ \\text{cm}^2$, panjang sisi persegi adalah:\n$$s = \\sqrt{49} = 7\\ \\text{cm}.$$\nKeempat segitiga yang diarsir berpusat di titik $A$:\n- $\\triangle ABC$ dan $\\triangle ADE$ beralas di sisi $BE$ dengan tinggi $AB = 7\\ \\text{cm}$.\n- $\\triangle AEF$ dan $\\triangle AGH$ beralas di sisi $EI$ dengan tinggi $AI = 7\\ \\text{cm}$.\nJumlah luas keempat segitiga yang diarsir adalah:\n$$\\frac{1}{2} \\times 7 \\times (BC + DE + EF + GH) = 35.$$\nKalikan kedua ruas dengan $\\frac{2}{7}$:\n$$BC + DE + EF + GH = \\frac{35 \\times 2}{7} = 10\\ \\text{cm}.$$',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Median dari data berikut:\n$$\\frac{4}{5};\\ \\frac{5}{10};\\ 0{,}235;\\ \\frac{3}{4}$$\nadalah ....\n\nA. $0{,}5$\nB. $0{,}625$\nC. $0{,}75$\nD. $0{,}8$',
          answer: 'B. $0{,}625$',
          principle: 'Median data genap adalah rata-rata dari dua nilai tengah setelah data diurutkan.',
          solution:
            'Ubah semua pecahan menjadi bentuk desimal agar mudah diurutkan:\n$$\\frac{4}{5} = 0{,}8; \\quad \\frac{5}{10} = 0{,}5; \\quad 0{,}235; \\quad \\frac{3}{4} = 0{,}75.$$\nUrutan dari yang terkecil hingga terbesar adalah $0{,}235;\\ 0{,}5;\\ 0{,}75;\\ 0{,}8$.\nKarena ada $4$ data, median adalah rata-rata dari data ke-$2$ dan ke-$3$:\n$$\\text{Median} = \\frac{0{,}5 + 0{,}75}{2} = \\frac{1{,}25}{2} = 0{,}625.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Pak Marto memanen padi pada lahan $2$ hektar dengan hasil $10{,}6$ ton per hektar. Setelah dijemur, berat padi tersebut akan berkurang $20\\%$. Berat padi yang diperoleh pak Marto setelah dijemur adalah ....\n\nA. $848\\ \\text{kg}$\nB. $1.696\\ \\text{kg}$\nC. $8.480\\ \\text{kg}$\nD. $16.960\\ \\text{kg}$',
          answer: 'D. $16.960\\ \\text{kg}$',
          principle: 'Konversi satuan ton ke kilogram ($1\\ \\text{ton} = 1.000\\ \\text{kg}$) dan perhitungan persentase sisa.',
          solution:
            'Total hasil panen dari $2$ hektar lahan adalah $2 \\times 10{,}6 = 21{,}2\\ \\text{ton} = 21.200\\ \\text{kg}$.\nKarena berat berkurang $20\\%$ saat dijemur, berat padi kering yang tersisa adalah $100\\% - 20\\% = 80\\%$ dari berat awal:\n$$\\frac{80}{100} \\times 21.200\\ \\text{kg} = 80 \\times 212 = 16.960\\ \\text{kg}.$$',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Pak Agung memiliki $4$ anak dan $1$ istri. Hari minggu, Pak Agung dan keluarga akan melakukan foto bersama di studio foto. Banyak cara menata pose foto dalam satu baris dari keluarga pak Agung sehingga Pak Agung dan Istri berdiri saling berdampingan adalah ....\n\nA. $120$ cara\nB. $140$ cara\nC. $220$ cara\nD. $240$ cara',
          answer: 'D. $240$ cara',
          principle: 'Metode pengelompokan (mengikat objek yang harus berdampingan) dan aturan perkalian.',
          solution:
            'Keluarga Pak Agung terdiri atas $6$ orang (Pak Agung, Istri, dan $4$ anak).\nKarena Pak Agung dan Istri harus selalu berdampingan, anggap keduanya sebagai $1$ kelompok yang tidak terpisahkan. Dengan demikian, kita menyusun $5$ objek dalam satu baris ($1$ kelompok pasangan dan $4$ anak).\nBanyak cara menyusun $5$ objek tersebut adalah:\n$$5 \\times 4 \\times 3 \\times 2 \\times 1 = 120\\ \\text{cara}.$$\nDi dalam kelompok pasangan, Pak Agung dan Istri bisa saling bertukar tempat dalam $2$ cara (Pak Agung di kiri atau di kanan Istri).\nJadi seluruhnya terdapat $120 \\times 2 = 240$ cara.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Aris akan mengisi petak berukuran $2 \\times 2$ ($4$ kotak) dengan bilangan prima berbeda yang nilainya masing-masing kurang dari $40$. Banyak cara untuk mengisi petak-petak tersebut adalah ....\n\nA. $24$ cara\nB. $64$ cara\nC. $11.880$ cara\nD. $20.736$ cara',
          answer: 'C. $11.880$ cara',
          principle: 'Mendata bilangan prima kurang dari $40$ dan menggunakan aturan perkalian untuk pengisian kotak berbeda tanpa pengulangan.',
          solution:
            'Bilangan prima yang kurang dari $40$ adalah $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37$, yaitu sebanyak $12$ bilangan.\nTerdapat $4$ kotak pada petak $2 \\times 2$ yang harus diisi dengan bilangan berbeda:\n- Kotak ke-$1$ memiliki $12$ pilihan.\n- Kotak ke-$2$ memiliki $11$ pilihan.\n- Kotak ke-$3$ memiliki $10$ pilihan.\n- Kotak ke-$4$ memiliki $9$ pilihan.\nDengan aturan perkalian, banyak seluruh cara pengisian adalah:\n$$12 \\times 11 \\times 10 \\times 9 = 132 \\times 90 = 11.880\\ \\text{cara}.$$',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Terdapat $5$ pasang putra putri duta pendidikan dari $5$ sekolah dan akan dibentuk tim kepanitiaan yang terdiri dari $2$ putra dan $2$ putri. Jika tidak boleh ada putra dan putri dari satu sekolah yang sama dalam kepanitiaan, maka banyak cara membentuk tim kepanitiaan adalah ....\n\nA. $30$ cara\nB. $100$ cara\nC. $200$ cara\nD. $210$ cara',
          answer: 'A. $30$ cara',
          principle: 'Kombinasi bertahap dengan syarat saling bebas antar-sekolah.',
          solution:
            'Langkah pertama, pilih $2$ putra dari $5$ sekolah yang berbeda. Banyak pasang putra yang dapat dipilih adalah:\n$$\\frac{5 \\times 4}{2} = 10\\ \\text{cara}.$$\nSetelah $2$ sekolah terpakai untuk anggota putra, tersisa $5 - 2 = 3$ sekolah yang boleh menyumbangkan anggota putri.\nLangkah kedua, pilih $2$ putri dari $3$ sekolah yang tersisa (sama dengan memilih $1$ sekolah yang tidak ikut):\n$$\\frac{3 \\times 2}{2} = 3\\ \\text{cara}.$$\nJadi banyak cara membentuk tim kepanitiaan adalah $10 \\times 3 = 30$ cara.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Jika $35\\%$ dari suatu bilangan adalah $75$, maka $21\\%$ dari bilangan tersebut adalah ....\n\nA. $35$\nB. $42$\nC. $45$\nD. $55$',
          answer: 'C. $45$',
          principle: 'Perbandingan senilai pada persentase.',
          solution:
            'Diketahui $35\\%$ dari bilangan tersebut bernilai $75$.\nBagi kedua nilai dengan $5$, sehingga diperoleh:\n$$7\\%\\ \\text{dari bilangan tersebut} = 75 \\div 5 = 15.$$\nUntuk memperoleh $21\\%$, kalikan kedua nilai dengan $3$:\n$$21\\%\\ \\text{dari bilangan tersebut} = 3 \\times 15 = 45.$$',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Bilangan yang tidak dapat dinyatakan sebagai penjumlahan dari $3$ bilangan prima yang berbeda adalah ....\n\nA. $12$\nB. $13$\nC. $14$\nD. $15$',
          answer: 'B. $13$',
          principle: 'Uji kombinasi bilangan prima terkecil dan analisis paritas (ganjil-genap).',
          solution:
            'Bilangan prima terkecil adalah $2, 3, 5, 7, 11, \\dots$. Periksa pilihan jawaban yang dapat dibentuk dari $3$ prima berbeda:\n- $12 = 2 + 3 + 7$ (dapat dibentuk)\n- $14 = 2 + 5 + 7$ (dapat dibentuk)\n- $15 = 3 + 5 + 7$ (dapat dibentuk)\nSekarang periksa $13$:\n- Jika bilangan $2$ tidak dipakai, ketiga bilangan prima harus ganjil ($\\ge 3$), tetapi jumlah terkecilnya adalah $3 + 5 + 7 = 15 > 13$, sehingga mustahil.\n- Jika bilangan $2$ dipakai, dua bilangan prima lainnya harus berjumlah $13 - 2 = 11$. Karena $11$ ganjil, salah satu dari kedua bilangan prima itu harus genap (yaitu $2$), padahal $2$ sudah dipakai dan tidak boleh diulang (lagipula $11 - 2 = 9$ bukan prima).\nJadi $13$ tidak dapat dinyatakan sebagai penjumlahan $3$ bilangan prima yang berbeda.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Misalkan $x$ adalah suatu pecahan. Jika pembilang dari $x$ ditambah $3$ maka nilainya menjadi $\\frac{2}{3}$. Jika penyebut dari $x$ dikurangi $1$ maka nilainya menjadi $\\frac{1}{2}$. Nilai $x$ adalah ....\n\nA. $\\frac{2}{3}$\nB. $\\frac{7}{15}$\nC. $\\frac{4}{7}$\nD. $\\frac{8}{15}$',
          answer: 'B. $\\frac{7}{15}$',
          principle: 'Menyatakan syarat pecahan dalam hubungan perkalian silang dan substitusi.',
          solution:
            'Misalkan pecahan tersebut adalah $x = \\frac{a}{b}$.\nDari syarat pertama:\n$$\\frac{a+3}{b} = \\frac{2}{3} \\implies 3(a+3) = 2b \\implies 3a + 9 = 2b.$$\nDari syarat kedua:\n$$\\frac{a}{b-1} = \\frac{1}{2} \\implies 2a = b - 1 \\implies b = 2a + 1.$$\nSubstitusikan $b = 2a + 1$ ke persamaan pertama:\n$$3a + 9 = 2(2a + 1) = 4a + 2 \\implies a = 9 - 2 = 7.$$\nMaka $b = 2(7) + 1 = 15$, sehingga $x = \\frac{7}{15}$.\nPemeriksaan: $\\frac{7+3}{15} = \\frac{10}{15} = \\frac{2}{3}$ dan $\\frac{7}{15-1} = \\frac{7}{14} = \\frac{1}{2}$.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-mat-sd-2025/fig-23.webp',
              alt: 'Square grid diagram showing polygon ABCDEFGH and a single unit square labeled P below it.',
              caption: 'Polygon ABCDEFGH and unit square P on a square grid'
            }
          ],
          prompt:
            'Look at the picture below.\n\nThe area of $P$ is $2\\ \\text{cm}^2$, the area of $ABCDEFGH$ is $\\dots\\ \\text{cm}^2$.\n\nA. $36$\nB. $40$\nC. $42$\nD. $44$',
          answer: 'B. $40$',
          principle: 'Menghitung banyak petak satuan yang menyusun bangun dengan membagi menjadi persegi panjang dan segitiga siku-siku.',
          solution:
            'Bagi bangun $ABCDEFGH$ mengikuti garis petak menjadi empat bagian yang mudah dihitung:\n- Persegi panjang bagian atas ($AB$ selebar $5$ petak dan $BC$ setinggi $2$ petak): $5 \\times 2 = 10$ petak satuan.\n- Persegi panjang tengah-kiri (di kiri garis $DE$, lebar $2$ petak dan tinggi $1$ petak): $2 \\times 1 = 2$ petak satuan.\n- Persegi bawah-kiri (dibatasi oleh $HG$ dan perpanjangan vertikal $DE$, berukuran $2 \\times 2$): $2 \\times 2 = 4$ petak satuan.\n- Segitiga siku-siku bawah-kanan (alas $EF = 4$ petak dan tinggi vertikal dari $E$ sejajar $G$ sebesar $2$ petak): $\\frac{1}{2} \\times 4 \\times 2 = 4$ petak satuan.\nTotal luas bangun $ABCDEFGH$ adalah $10 + 2 + 4 + 4 = 20$ petak satuan. Karena luas $1$ petak satuan $P$ adalah $2\\ \\text{cm}^2$, luas $ABCDEFGH$ adalah $20 \\times 2 = 40\\ \\text{cm}^2$.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Sepuluh kubus masing-masing memiliki panjang rusuk $1\\ \\text{cm}$ akan disusun sehingga sisinya bersisian dan membentuk satu bangun ruang baru. Luas permukaan minimal bangun ruang baru tersebut adalah ....\n\nA. $24$\nB. $28$\nC. $30$\nD. $42$',
          answer: 'C. $30$',
          principle: 'Meminimalkan luas permukaan gabungan kubus satuan dengan memaksimumkan banyak sisi yang saling berimpitan.',
          solution:
            'Untuk meminimalkan luas permukaan $10$ kubus satuan, susun kubus serapat mungkin mendekati bentuk kubus/balok:\n- Susun $8$ kubus menjadi sebuah kubus $2 \\times 2 \\times 2$, yang memiliki luas permukaan $6 \\times (2 \\times 2) = 24\\ \\text{cm}^2$.\n- Tempelkan $1$ kubus ke-$9$ pada salah satu sisi kubus $2 \\times 2 \\times 2$: satu muka tertutupi dan lima muka baru terlihat, sehingga luas permukaan bertambah $5 - 1 = 4\\ \\text{cm}^2$ menjadi $28\\ \\text{cm}^2$.\n- Tempelkan $1$ kubus ke-$10$ tepat di sebelah kubus ke-$9$ sekaligus menempel pada kubus $2 \\times 2 \\times 2$: dua muka tertutupi dan empat muka baru terlihat, sehingga luas permukaan bertambah $4 - 2 = 2\\ \\text{cm}^2$ menjadi $30\\ \\text{cm}^2$.\nLuas permukaan $28\\ \\text{cm}^2$ mustahil dicapai karena jumlah luas proyeksi dari tiga arah (atas, depan, samping) minimal $4 + 5 + 6 = 15$ petak (proyeksi $(4, 5, 5)$ hanya dapat menampung susunan berkapasitas penuh $2\\times 2\\times 2$ dengan tinggi tidak seragam sehingga minimal salah satu proyeksi menjadi $6$), sehingga luas permukaan minimal adalah $2 \\times 15 = 30$.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Sepuluh anak membentuk kelompok bermain yang masing-masing terdiri dari empat anak dan enam anak. Rata-rata usia kelompok empat anak adalah $6$ tahun, dan rata-rata usia kelompok enam anak adalah $6{,}5$ tahun. Jika satu anak dari masing-masing kelompok ditukarkan, maka rata-rata usia kedua kelompok sama. Selisih usia kedua anak yang ditukarkan adalah ....\n\nA. $1{,}2$ tahun\nB. $1{,}0$ tahun\nC. $0{,}5$ tahun\nD. $0{,}25$ tahun',
          answer: 'A. $1{,}2$ tahun',
          principle: 'Jika dua kelompok memiliki rata-rata yang sama setelah pertukaran, rata-rata keduanya sama dengan rata-rata gabungan seluruh anggota.',
          solution:
            'Hitung jumlah usia masing-masing kelompok mula-mula:\n- Kelompok $4$ anak: $4 \\times 6 = 24$ tahun.\n- Kelompok $6$ anak: $6 \\times 6{,}5 = 39$ tahun.\nTotal usia ke-$10$ anak adalah $24 + 39 = 63$ tahun.\nSetelah satu anak dari tiap kelompok ditukar, rata-rata kedua kelompok menjadi sama. Artinya, rata-rata baru masing-masing kelompok sama dengan rata-rata seluruh $10$ anak, yaitu:\n$$\\frac{63}{10} = 6{,}3\\ \\text{tahun}.$$\nJumlah usia kelompok $4$ anak setelah pertukaran menjadi $4 \\times 6{,}3 = 25{,}2$ tahun.\nJadi kelompok $4$ anak bertambah $25{,}2 - 24 = 1{,}2$ tahun (sedangkan kelompok $6$ anak berkurang dari $39$ menjadi $6 \\times 6{,}3 = 37{,}8$, yaitu berkurang $1{,}2$ tahun).\nArtinya selisih usia kedua anak yang ditukarkan adalah $1{,}2$ tahun.',
          rubric: OK
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Bilangan genap lima angka akan disusun dari angka-angka $1$, $2$, $3$, dan $5$, dengan ketentuan sebagai berikut:\na. semua angka harus digunakan\nb. angka $5$ boleh muncul maksimal dua kali\nc. angka $2$ hanya muncul satu kali.\nBanyak susunan bilangan genap yang mungkin adalah ....\n\nA. $12$\nB. $24$\nC. $36$\nD. $42$',
          answer: 'C. $36$',
          principle: 'Pencacahan berdasarkan kasus setelah mengunci angka satuan agar bilangan bernilai genap.',
          solution:
            'Karena bilangan $5$ angka harus genap dan satu-satunya angka genap adalah $2$ (yang hanya boleh muncul satu kali), posisi satuan (angka ke-$5$) wajib ditempati angka $2$.\nEmpat posisi pertama harus diisi angka $1, 3,$ dan $5$ dengan semua angka dipakai dan angka $5$ maksimal $2$ kali. Ada $3$ kemungkinan komposisi angka:\n1. Angka $5$ muncul $2$ kali, yaitu menggunakan angka-angka $1, 3, 5, 5$:\n   Banyak susunan $= \\frac{4!}{2!\\cdot 1!\\cdot 1!} = \\frac{24}{2} = 12$.\n2. Angka $5$ muncul $1$ kali dan angka $1$ muncul $2$ kali, yaitu menggunakan angka-angka $1, 1, 3, 5$:\n   Banyak susunan $= \\frac{4!}{2!\\cdot 1!\\cdot 1!} = \\frac{24}{2} = 12$.\n3. Angka $5$ muncul $1$ kali dan angka $3$ muncul $2$ kali, yaitu menggunakan angka-angka $1, 3, 3, 5$:\n   Banyak susunan $= \\frac{4!}{2!\\cdot 1!\\cdot 1!} = \\frac{24}{2} = 12$.\nTotal susunan bilangan genap yang mungkin adalah $12 + 12 + 12 = 36$.',
          rubric: OK
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Bilangan-bilangan disusun dengan pola sebagai berikut: $12, 20, 30, 42, 56, 72, 90, \\dots$. Jika angka-angka penyusun pada bilangan ke-$15$ dijumlahkan maka hasilnya adalah ....\n\nA. $8$\nB. $9$\nC. $11$\nD. $12$',
          answer: 'B. $9$',
          principle: 'Mengenali pola bilangan sebagai hasil kali dua bilangan bulat berurutan.',
          solution:
            'Uraikan suku-suku awal menjadi perkalian dua bilangan berurutan:\n- Suku ke-$1$: $12 = 3 \\times 4$\n- Suku ke-$2$: $20 = 4 \\times 5$\n- Suku ke-$3$: $30 = 5 \\times 6$\n- Suku ke-$4$: $42 = 6 \\times 7$\nTerlihat bahwa pada suku ke-$n$, faktor pertamanya adalah $n + 2$ dan faktor keduanya adalah $n + 3$.\nUntuk $n = 15$, bilangan ke-$15$ adalah:\n$$(15 + 2) \\times (15 + 3) = 17 \\times 18 = 306.$$\nJumlah angka-angka penyusun $306$ adalah $3 + 0 + 6 = 9$.',
          rubric: OK
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'The result of\n$$\\frac{45 + 3^{2025}(4^2 - 1)}{3 + 3^{2025}}$$\nis ....\n\nA. $5$\nB. $10$\nC. $15$\nD. $20$',
          answer: 'C. $15$',
          principle: 'Pemfaktoran menggunakan sifat distributif tanpa menghitung pangkat besar secara langsung.',
          solution:
            'Sederhanakan bilangan di dalam tanda kurung terlebih dahulu: $4^2 - 1 = 16 - 1 = 15$.\nKarena $45 = 15 \\times 3$, keluarkan faktor $15$ dari pembilang:\n$$\\frac{45 + 3^{2025}(4^2 - 1)}{3 + 3^{2025}} = \\frac{15 \\times 3 + 15 \\times 3^{2025}}{3 + 3^{2025}} = \\frac{15(3 + 3^{2025})}{3 + 3^{2025}} = 15.$$',
          rubric: OK
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Andika berbelanja di toko alat-alat tulis membeli beberapa barang yaitu sepuluh buku tulis, lima pensil, satu penggaris, dan satu kotak pensil. Harga satu buku Rp5.000,00, satu pensil atau satu penggaris Rp2.000,00, dan satu kotak pensil Rp30.000,00. Jika toko memberikan diskon $10\\%$ untuk buku dan $5\\%$ untuk kotak pensil, maka jumlah yang harus dibayar oleh Andika adalah ....\n\nA. Rp92.000,00\nB. Rp88.400,00\nC. Rp85.500,00\nD. Rp83.800,00',
          answer: 'C. Rp85.500,00',
          principle: 'Menghitung harga total tiap barang dan menerapkan potongan diskon persentase secara terpisah.',
          solution:
            'Hitung biaya masing-masing barang setelah diskon:\n- $10$ buku tulis: harga sebelum diskon $10 \\times \\text{Rp}5.000{,}00 = \\text{Rp}50.000{,}00$. Diskon $10\\%$ sebesar $\\frac{10}{100} \\times 50.000 = \\text{Rp}5.000{,}00$, sehingga harga bayar $= \\text{Rp}45.000{,}00$.\n- $5$ pensil dan $1$ penggaris: $(5 + 1) \\times \\text{Rp}2.000{,}00 = 6 \\times \\text{Rp}2.000{,}00 = \\text{Rp}12.000{,}00$.\n- $1$ kotak pensil: harga sebelum diskon $\\text{Rp}30.000{,}00$. Diskon $5\\%$ sebesar $\\frac{5}{100} \\times 30.000 = \\text{Rp}1.500{,}00$, sehingga harga bayar $= \\text{Rp}28.500{,}00$.\nTotal jumlah yang harus dibayar oleh Andika adalah:\n$$\\text{Rp}45.000{,}00 + \\text{Rp}12.000{,}00 + \\text{Rp}28.500{,}00 = \\text{Rp}85.500{,}00.$$',
          rubric: OK
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Diberikan tiga bilangan bulat positif $a, b, c$ dengan $a : b = b : c = c : a$. Hasil dari\n$$\\frac{(200 \\times a) + (100 \\times b) + (250 \\times c)}{(3 \\times b) + (4 \\times c) - 2a}$$\nadalah ....\n\nA. $100$\nB. $110$\nC. $120$\nD. $130$',
          answer: 'B. $110$',
          principle: 'Jika tiga perbandingan siklik $a:b = b:c = c:a$ bernilai sama untuk bilangan positif, maka $a = b = c$.',
          solution:
            'Diketahui $a, b, c > 0$ dan $\\frac{a}{b} = \\frac{b}{c} = \\frac{c}{a}$.\nAndaikan $a < b$, maka $\\frac{a}{b} < 1$. Karena perbandingannya sama, haruslah $\\frac{b}{c} < 1$ (artinya $b < c$) dan $\\frac{c}{a} < 1$ (artinya $c < a$), sehingga $a < b < c < a$, yang tidak mungkin terjadi. Hal serupa terjadi jika $a > b$ (diperoleh $a > b > c > a$, mustahil).\nOleh karena itu, satu-satunya kemungkinan adalah $a = b = c$.\nSubstitusikan $b = a$ dan $c = a$ ke dalam pecahan:\n$$\\frac{(200 \\times a) + (100 \\times a) + (250 \\times a)}{(3 \\times a) + (4 \\times a) - 2a} = \\frac{550a}{5a} = 110.$$',
          rubric: OK
        }
      ]
    }
  ]
};
