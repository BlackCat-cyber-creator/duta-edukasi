/**
 * Paket Soal Terstruktur: OSN-P Matematika SD 2025 (20 Soal Uraian)
 * Sumber: osn_mat_sd_prov_2025.pdf (Olimpiade Sains Nasional Tingkat Provinsi, Kemendikdasmen / Pusat Prestasi Nasional).
 * Catatan rekonstruksi naskah:
 * - Soal 1, 4, 6, 8, 9, 10, dan 18 disertai gambar/tabel/diagram SVG yang direkonstruksi persis dari PDF.
 * - Pada soal 10, baris Tanjung Malaka tertulis "55.76" pada tabel PDF, sedangkan kunci resmi memakai 55.760 jiwa
 *   (sehingga 2/5 x 55.760 = 22.304 dan rata-rata bulat 11.406); angka tabel dinormalisasi menjadi 55.760.
 * - Pada soal 15, PDF salah cetak pangkat pada "f - 32" (dan menurunkan angka 2 pada 4^2, 2^2, 3^2), sedangkan
 *   pembahasan resmi memakai f - 9 = f - 3^2; soal dituliskan konsisten dengan 4^2, 2^2, 3^2, 3^2.
 */
export default {
  id: 'osnp-mat-sd-2025',
  slug: 'osnp-matematika-sd-2025',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'OSN-P Matematika SD 2025: bilangan, aljabar, geometri (keliling, luas, sudut, tabung), statistika, logika, dan kombinatorika',
  relatedChapterIds: [
    'sd4-bab3-pola-gambar-bilangan',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan',
    'sd5-bab4-keliling-bangun-datar',
    'sd5-bab5-luas-daerah-bangun-datar',
    'sd5-bab6-sudut',
    'sd5-bab8-data',
    'sd6-bab2-rasio',
    'sd6-bab3-kubus-balok',
    'sd6-bab4-peluang'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-P',
  title: 'OSN-P Matematika SD 2025',
  totalMarks: 40,
  instructions:
    'Kerjakan seluruh 20 soal uraian singkat berikut. Naskah sumber tidak mencantumkan bobot nilai per nomor, sehingga pada paket latihan ini setiap soal bernilai 2 poin (1 poin langkah penyelesaian dan 1 poin jawaban akhir; total 40 poin).',
  source: {
    org: 'OSN-P',
    file: 'osn_mat_sd_prov_2025.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Uraian',
      marks: 40,
      stem: 'Selesaikan ke-20 soal uraian berikut secara cermat dan tuliskan jawaban akhir yang tepat (masing-masing bernilai 2 poin).',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            'Jika hasil penjumlahan bilangan pada setiap baris, kolom, maupun diagonal adalah sama, maka bilangan pengganti $x$ adalah $\\ldots$',
          figures: [
            {
              src: '/papers/osnp-mat-sd-2025/fig-1.svg',
              alt: 'Persegi ajaib berukuran 3 kali 3 dengan baris kedua berisi 23, 20, 17 serta baris ketiga berisi 15, kosong, dan x.',
              caption: 'Kotak persegi 3 × 3 dengan sebagian bilangan diketahui.'
            }
          ],
          answer: '$18$',
          principle:
            'Tentukan jumlah konstan (konstanta ajaib) dari satu baris atau kolom yang lengkap, lalu gunakan diagonal dan kolom untuk mencari sel yang belum diketahui.',
          solution:
            'Baris kedua sudah terisi lengkap, yaitu $23$, $20$, dan $17$, sehingga jumlah bilangan pada setiap baris, kolom, dan diagonal adalah:\n$$S = 23 + 20 + 17 = 60.$$\nSelanjutnya perhatikan diagonal dari kiri bawah ke kanan atas. Misalkan bilangan di pojok kanan atas adalah $y$:\n$$15 + 20 + y = 60 \\implies 35 + y = 60 \\implies y = 25.$$\nSekarang perhatikan kolom ketiga (pojok kanan atas $y = 25$, tengah $17$, dan kanan bawah $x$):\n$$25 + 17 + x = 60 \\implies 42 + x = 60 \\implies x = 18.$$\nPemeriksaan: jika pojok kiri atas diisi $60 - 20 - 18 = 22$, maka kolom pertama berjumlah $22 + 23 + 15 = 60$, baris pertama $22 + 13 + 25 = 60$, kolom kedua $13 + 20 + 27 = 60$, dan baris ketiga $15 + 27 + 18 = 60$. Jadi $x = 18$.',
          rubric: [
            { code: 'M1', text: 'Menghitung jumlah tetap $60$ dari baris kedua dan menemukan pojok kanan atas $25$ melalui diagonal.' },
            { code: 'A1', text: 'Menentukan nilai $x = 18$ dengan tepat.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Pada awal pendirian klub penggemar badminton terdiri atas $15$ anak laki-laki dan $20$ anak perempuan. Klub ini mampu menarik minat anak-anak lain untuk bergabung, sehingga setiap bulan, $1$ anak perempuan baru dan $2$ anak laki-laki baru bergabung ke klub. Setelah beberapa waktu jumlah anak laki-laki di klub sama dengan jumlah anak perempuan, sehingga anggota klub di waktu tersebut adalah $\\ldots$',
          answer: '$50$',
          principle:
            'Bandingkan laju pertambahan kedua kelompok per bulan untuk menentukan waktu saat selisih awal menjadi nol.',
          solution:
            'Misalkan setelah $t$ bulan, jumlah anak laki-laki dan perempuan menjadi sama.\n- Banyak anak laki-laki setelah $t$ bulan: $15 + 2t$.\n- Banyak anak perempuan setelah $t$ bulan: $20 + t$.\nKarena jumlahnya sama:\n$$15 + 2t = 20 + t \\implies 2t - t = 20 - 15 \\implies t = 5\\ \\text{bulan}.$$\nPada bulan ke-$5$:\n- Anak laki-laki $= 15 + 2(5) = 25$ anak.\n- Anak perempuan $= 20 + 5 = 25$ anak.\nJadi total anggota klub pada waktu tersebut adalah $25 + 25 = 50$ anak.',
          rubric: [
            { code: 'M1', text: 'Menyusun persamaan $15 + 2t = 20 + t$ (atau menghitung selisih awal $5$ berkurang $1$ per bulan) hingga memperoleh $t = 5$ bulan.' },
            { code: 'A1', text: 'Total anggota klub $50$ anak.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'Sebuah pesawat berangkat dari kota A pada hari Sabtu pukul $08.20$ waktu setempat. Pesawat tersebut tiba di kota B pada hari Minggu pukul $06.35$ waktu setempat. Waktu tempuh penerbangan tersebut adalah $14$ jam $15$ menit. Perbedaan waktu antara kota A dan kota B adalah $\\ldots$ jam.',
          answer: '$8$',
          principle:
            'Hitung waktu tiba pesawat menurut zona waktu kota asal terlebih dahulu, lalu bandingkan dengan waktu setempat di kota tujuan.',
          solution:
            'Pesawat berangkat dari kota A pada hari Sabtu pukul $08.20$ waktu kota A dan terbang selama $14$ jam $15$ menit.\nWaktu tiba pesawat menurut jam kota A adalah:\n$$08.20 + 14\\ \\text{jam}\\ 15\\ \\text{menit} = 22.35\\ \\text{(hari Sabtu)}.$$\nSementara itu, jam setempat di kota B menunjukkan hari Minggu pukul $06.35$.\nHitung selisih dari Sabtu $22.35$ menuju Minggu $06.35$:\n- Dari Sabtu $22.35$ ke Minggu $00.00$ adalah $1$ jam $25$ menit.\n- Dari Minggu $00.00$ ke Minggu $06.35$ adalah $6$ jam $35$ menit.\nTotal perbedaan waktu $= (1\\ \\text{jam}\\ 25\\ \\text{menit}) + (6\\ \\text{jam}\\ 35\\ \\text{menit}) = 7\\ \\text{jam}\\ 60\\ \\text{menit} = 8\\ \\text{jam}$.\nJadi perbedaan waktu antara kota A dan kota B adalah $8$ jam (kota B lebih cepat $8$ jam).',
          rubric: [
            { code: 'M1', text: 'Menentukan waktu tiba menurut jam kota A (Sabtu pukul $22.35$) lalu menghitung selisihnya ke Minggu pukul $06.35$.' },
            { code: 'A1', text: 'Perbedaan waktu $8$ jam.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt: 'Keliling bangun di bawah ini adalah $\\ldots$ satuan panjang.',
          figures: [
            {
              src: '/papers/osnp-mat-sd-2025/fig-4.svg',
              alt: 'Bangun datar berbentuk huruf L dengan semua sudut siku-siku, panjang sisi atas 8 dan tinggi sisi kiri 6.',
              caption: 'Bangun datar bersudut siku-siku dengan ukuran sisi atas 8 dan sisi kiri 6.'
            }
          ],
          answer: '$28$',
          principle:
            'Pada bangun siku-siku berbentuk huruf L, geser sisi-sisi mendatar bawah ke satu garis dan sisi-sisi tegak kanan ke satu garis sehingga kelilingnya sama dengan keliling persegi panjang pembungkusnya.',
          solution:
            'Semua sudut pada bangun berbentuk huruf L tersebut adalah sudut siku-siku.\n- Jumlah panjang semua sisi mendatar di bagian bawah sama dengan panjang sisi mendatar paling atas, yaitu $8$ satuan panjang.\n- Jumlah panjang semua sisi tegak di bagian kanan sama dengan panjang sisi tegak paling kiri, yaitu $6$ satuan panjang.\nDengan demikian, keliling bangun tersebut sama dengan keliling persegi panjang berukuran $8 \\times 6$:\n$$\\text{Keliling} = 8 + 6 + 8 + 6 = 2 \\times (8 + 6) = 28\\ \\text{satuan panjang}.$$',
          rubric: [
            { code: 'M1', text: 'Menunjukkan bahwa jumlah sisi mendatar bawah $= 8$ dan jumlah sisi tegak kanan $= 6$ karena seluruh sudut siku-siku.' },
            { code: 'A1', text: 'Keliling $28$ satuan panjang.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Misalkan $ABCD$ adalah bilangan ribuan yang habis dibagi $3$. Diketahui pula $ABC$ bilangan ratusan habis dibagi $4$ dan $AB$ bilangan puluhan habis dibagi $5$. Bilangan $ABCD$ terbesar adalah $\\ldots$',
          answer: '$9567$',
          principle:
            'Maksimalkan angka dari nilai tempat tertinggi ($A$ ribuan) ke terendah sambil memenuhi aturan keterbagian oleh $5$, $4$, dan $3$.',
          solution:
            'Agar bilangan empat angka $\\overline{ABCD}$ bernilai sebesar mungkin, maksimalkan digit dari kiri ke kanan:\n1. Pilih angka ribuan terbesar, yaitu $A = 9$.\n2. Bilangan dua angka $\\overline{AB} = \\overline{9B}$ habis dibagi $5$, sehingga $B \\in \\{0, 5\\}$. Untuk memaksimalkan nilai, pilih $B = 5$ (sehingga $\\overline{AB} = 95$).\n3. Bilangan tiga angka $\\overline{ABC} = \\overline{95C}$ habis dibagi $4$. Suatu bilangan habis dibagi $4$ jika dua angka terakhirnya ($\\overline{5C}$) habis dibagi $4$. Kelipatan $4$ antara $50$ dan $59$ adalah $52$ dan $56$. Pilih terbesar, yaitu $C = 6$ (sehingga $\\overline{ABC} = 956$).\n4. Bilangan $\\overline{ABCD} = \\overline{956D}$ habis dibagi $3$, sehingga jumlah angka-angkanya harus kelipatan $3$:\n   $$9 + 5 + 6 + D = 20 + D.$$\n   Nilai $D \\in \\{0, 1, \\dots, 9\\}$ yang membuat $20 + D$ habis dibagi $3$ adalah $1, 4,$ dan $7$. Pilih terbesar, yaitu $D = 7$.\nPemeriksaan: $95 \\div 5 = 19$, $956 \\div 4 = 239$, dan $9567 \\div 3 = 3189$. Jadi bilangan terbesar adalah $9567$.',
          rubric: [
            { code: 'M1', text: 'Menentukan $A=9$, $B=5$, $C=6$ secara bertahap menggunakan uji habis dibagi $5$ dan $4$.' },
            { code: 'A1', text: 'Menentukan $D=7$ sehingga diperoleh $9567$.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'Setiap simbol di atas melambangkan sebuah bilangan. Hasil penjumlahan bilangan-bilangan pada setiap baris dan kolom terlihat di samping kanan dan bawah tabel. Hasil penjumlahan bilangan-bilangan pada kolom pertama adalah $\\ldots$',
          figures: [
            {
              src: '/papers/osnp-mat-sd-2025/fig-6.svg',
              alt: 'Tabel 4 kali 4 berisi simbol hati, belah ketupat, bintang, dan cincin hijau beserta jumlah setiap baris di kanan dan jumlah kolom di bawah dengan kolom pertama bertanda tanya.',
              caption: 'Tabel simbol 4 × 4 beserta jumlah masing-masing baris dan kolom.'
            }
          ],
          answer: '$25$',
          principle:
            'Jumlah seluruh bilangan di tabel jika dihitung per baris harus sama dengan jumlah jika dihitung per kolom (dapat pula diselesaikan dengan mencari nilai tiap simbol).',
          solution:
            '**Cara 1 (Jumlah total baris = jumlah total kolom):**\nJumlah seluruh bilangan pada tabel menurut empat baris adalah:\n$$24 + 26 + 23 + 26 = 99.$$\nJumlah seluruh bilangan menurut empat kolom harus sama dengan $99$. Jika jumlah kolom pertama dimisalkan $K_1$, maka:\n$$K_1 + 24 + 23 + 27 = 99 \\implies K_1 + 74 = 99 \\implies K_1 = 25.$$\n\n**Cara 2 (Mencari nilai masing-masing simbol untuk memeriksa):**\n- Selisih baris ke-$2$ dan baris ke-$3$: $(3\\text{ bintang} + \\text{cincin}) - (3\\text{ bintang} + \\text{hati}) = 26 - 23 \\implies \\text{cincin} - \\text{hati} = 3$.\n- Dari baris ke-$4$: $2\\text{ cincin} + 2\\text{ hati} = 26 \\implies \\text{cincin} + \\text{hati} = 13$.\n  Jumlahkan kedua persamaan: $2\\text{ cincin} = 16 \\implies \\text{cincin} = 8$ dan $\\text{hati} = 5$.\n- Dari baris ke-$2$: $3\\text{ bintang} + 8 = 26 \\implies 3\\text{ bintang} = 18 \\implies \\text{bintang} = 6$.\n- Jadi jumlah kolom pertama $= \\text{hati} + \\text{bintang} + \\text{bintang} + \\text{cincin} = 5 + 6 + 6 + 8 = 25$.',
          rubric: [
            { code: 'M1', text: 'Menyamakan total jumlah baris $99$ dengan total jumlah kolom $? + 74$ (atau menentukan nilai simbol cincin $=8$, hati $=5$, bintang $=6$).' },
            { code: 'A1', text: 'Hasil penjumlahan kolom pertama adalah $25$.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'Misalkan\n$$A = \\frac{3}{2} + \\frac{4}{3} + \\frac{5}{4} + \\cdots + \\frac{2026}{2025} \\quad \\text{dan} \\quad B = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots + \\frac{1}{2025},$$\nmaka hasil dari $2026 + A - (2025 + B)$ adalah $\\ldots$',
          answer: '$2025$',
          principle:
            'Kelompokkan suku-suku berpenyebut sama antara $A$ dan $B$ sehingga setiap pasang selisih pecahan bernilai $1$.',
          solution:
            'Buka tanda kurung dan kelompokkan $2026 - 2025$ serta $A - B$:\n$$2026 + A - (2025 + B) = (2026 - 2025) + (A - B) = 1 + (A - B).$$\nSekarang pasangkan setiap pecahan pada $A$ dengan pecahan berpenyebut sama pada $B$:\n$$A - B = \\left(\\frac{3}{2} - \\frac{1}{2}\\right) + \\left(\\frac{4}{3} - \\frac{1}{3}\\right) + \\left(\\frac{5}{4} - \\frac{1}{4}\\right) + \\cdots + \\left(\\frac{2026}{2025} - \\frac{1}{2025}\\right).$$\nSetiap pasang memiliki nilai:\n$$\\frac{k+1}{k} - \\frac{1}{k} = \\frac{k}{k} = 1.$$\nPenyebut berjalan dari $2$ sampai $2025$, sehingga banyaknya pasangan adalah $2025 - 2 + 1 = 2024$ pasang.\nOleh karena itu, $A - B = 2024 \\times 1 = 2024$, dan:\n$$2026 + A - (2025 + B) = 1 + 2024 = 2025.$$',
          rubric: [
            { code: 'M1', text: 'Memasangkan suku berpenyebut sama pada $A - B$ menjadi $\\frac{k+1}{k} - \\frac{1}{k} = 1$ sebanyak $2024$ suku.' },
            { code: 'A1', text: 'Hasil akhir $1 + 2024 = 2025$.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'Perhatikan persegi $ABCD$ berikut. Jika $\\angle AFE = \\angle GEC = x^\\circ$ dan $\\angle EFC = y^\\circ$, maka $3y^\\circ - x^\\circ$ adalah $\\ldots^\\circ$.',
          figures: [
            {
              src: '/papers/osnp-mat-sd-2025/fig-8.svg',
              alt: 'Persegi ABCD dengan diagonal AC serta garis lurus yang memotong AC di F, memotong sisi BC di E, dan berlanjut ke titik G di luar persegi.',
              caption: 'Persegi ABCD dengan diagonal AC dan garis lurus FEG.'
            }
          ],
          answer: '$90^\\circ$',
          principle:
            'Gunakan sifat sudut berpelurus ($180^\\circ$), sudut diagonal persegi ($45^\\circ$), dan jumlah sudut dalam segitiga ($180^\\circ$).',
          solution:
            'Perhatikan hubungan sudut-sudut pada gambar:\n1. Titik $A, F, C$ terletak pada garis lurus diagonal $AC$, sehingga $\\angle AFE$ dan $\\angle EFC$ saling berpelurus:\n   $$x^\\circ + y^\\circ = 180^\\circ \\implies y = 180 - x.$$\n2. Titik $F, E, G$ terletak pada satu garis lurus, sehingga $\\angle FEC$ dan $\\angle GEC$ juga saling berpelurus:\n   $$\\angle FEC = 180^\\circ - \\angle GEC = 180^\\circ - x^\\circ.$$\n3. Karena $ABCD$ persegi dan $AC$ adalah diagonalnya, maka $\\angle ECF = \\angle ACB = 45^\\circ$.\n4. Pada segitiga $EFC$, jumlah ketiga sudut dalamnya adalah $180^\\circ$:\n   $$\\angle EFC + \\angle ECF + \\angle FEC = 180^\\circ$$\n   $$y + 45 + (180 - x) = 180.$$\n   Substitusikan $y = 180 - x$:\n   $$(180 - x) + 45 + (180 - x) = 180 \\implies 225 - 2x = 0 \\implies 2x = 225 \\implies x = 112{,}5.$$\n   Maka $y = 180 - 112{,}5 = 67{,}5$.\nDengan demikian:\n$$3y^\\circ - x^\\circ = 3(67{,}5)^\\circ - 112{,}5^\\circ = 202{,}5^\\circ - 112{,}5^\\circ = 90^\\circ.$$',
          rubric: [
            { code: 'M1', text: 'Menyusun $x + y = 180$, $\\angle FEC = 180^\\circ - x^\\circ$, dan $\\angle ECF = 45^\\circ$ pada $\\triangle EFC$ sehingga $x = 112{,}5$ dan $y = 67{,}5$.' },
            { code: 'A1', text: 'Nilai $3y^\\circ - x^\\circ = 90^\\circ$.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'Diketahui $ABCD$ suatu persegi yang terbagi oleh garis tengah mendatar dan tegak menjadi $4$ persegi kecil yang kongruen, dengan $H$ titik tengah $AB$, $K$ titik tengah $BC$, dan $J$ titik pusat persegi. Jika luas daerah yang diarsir $DHJK$ adalah $9\\ \\text{cm}^2$, maka panjang sisi persegi $ABCD$ adalah $\\ldots\\ \\text{cm}$.',
          figures: [
            {
              src: '/papers/osnp-mat-sd-2025/fig-9.svg',
              alt: 'Persegi ABCD terbagi menjadi empat persegi kecil dengan titik tengah H pada AB, K pada BC, pusat J, dan daerah segiempat DHJK diarsir biru.',
              caption: 'Persegi ABCD dengan pembagian 2 × 2 dan daerah arsir DHJK.'
            }
          ],
          answer: '$6$',
          principle:
            'Hitung luas daerah yang diarsir dengan mengurangi luas persegi besar oleh tiga bangun sederhana yang tidak diarsir.',
          solution:
            'Misalkan panjang sisi setiap persegi kecil adalah $a\\ \\text{cm}$ ($AH = HB = BK = KC = a$), sehingga panjang sisi persegi besar $ABCD$ adalah $2a\\ \\text{cm}$.\n- Luas persegi besar $ABCD = (2a)^2 = 4a^2$.\nDaerah di luar arsiran $DHJK$ terdiri atas tiga bangun:\n1. Segitiga siku-siku $DAH$ dengan alas $AH = a$ dan tinggi $DA = 2a$:\n   $$\\text{Luas } \\triangle DAH = \\frac{1}{2} \\times a \\times 2a = a^2.$$\n2. Segitiga siku-siku $DCK$ dengan alas $DC = 2a$ dan tinggi $CK = a$:\n   $$\\text{Luas } \\triangle DCK = \\frac{1}{2} \\times 2a \\times a = a^2.$$\n3. Persegi kecil $HBKJ$ dengan sisi $a$:\n   $$\\text{Luas } HBKJ = a \\times a = a^2.$$\nMaka luas daerah yang diarsir adalah:\n$$\\text{Luas } DHJK = 4a^2 - (a^2 + a^2 + a^2) = 4a^2 - 3a^2 = a^2.$$\nKarena diketahui $\\text{Luas } DHJK = 9\\ \\text{cm}^2$, diperoleh $a^2 = 9 \\implies a = 3\\ \\text{cm}$.\nJadi panjang sisi persegi $ABCD$ adalah $2a = 2 \\times 3 = 6\\ \\text{cm}$.',
          rubric: [
            { code: 'M1', text: 'Menyatakan luas arsir sebagai $\\text{Luas}(ABCD) - (\\text{Luas}(\\triangle DAH) + \\text{Luas}(\\triangle DCK) + \\text{Luas}(HBKJ)) = 4a^2 - 3a^2 = a^2$.' },
            { code: 'A1', text: 'Memperoleh $a = 3$ sehingga sisi persegi $ABCD = 6\\ \\text{cm}$.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'Berikut adalah data Penduduk di Kecamatan Tanjung Puri pada bulan Juni Tahun $2025$ (Keterangan: $L$ = Laki-laki, $P$ = Perempuan). Misalkan $A$ adalah rata-rata jumlah penduduk laki-laki per kelurahan di Kecamatan Tanjung Puri. Banyak kelurahan di Kecamatan Tanjung Puri yang jumlah penduduk berjenis kelamin laki-laki kurang dari $A$ adalah $\\ldots$ kelurahan.',
          figures: [
            {
              src: '/papers/osnp-mat-sd-2025/fig-10.svg',
              alt: 'Tabel tujuh kelurahan di Kecamatan Tanjung Puri beserta jumlah penduduk total dan proporsi penduduk laki-laki atau perempuan.',
              caption: 'Data penduduk Kecamatan Tanjung Puri bulan Juni 2025.'
            }
          ],
          answer: '$4$',
          principle:
            'Hitung banyak penduduk laki-laki di masing-masing kelurahan dari persen, pecahan, atau perbandingan, lalu hitung rata-rata gabungannya.',
          solution:
            'Hitung jumlah penduduk laki-laki ($L$) untuk setiap kelurahan:\n1. **Bunga Tanjung**: $50\\% \\times 34.592 = \\frac{1}{2} \\times 34.592 = 17.296$ jiwa.\n2. **Pondok Tanjung**: $L : P = 1 : 2$, sehingga bagian laki-laki $= \\frac{1}{1+2} = \\frac{1}{3}$:\n   $$\\frac{1}{3} \\times 18.468 = 6.156\\ \\text{jiwa}.$$\n3. **Tanjung Cinta**: $0{,}75$ bagian perempuan, berarti bagian laki-laki $= 1 - 0{,}75 = 0{,}25 = \\frac{1}{4}$:\n   $$\\frac{1}{4} \\times 14.836 = 3.709\\ \\text{jiwa}.$$\n4. **Tanjung Sari**: $\\frac{1}{2}$ bagian perempuan, berarti bagian laki-laki $= 1 - \\frac{1}{2} = \\frac{1}{2}$:\n   $$\\frac{1}{2} \\times 13.434 = 6.717\\ \\text{jiwa}.$$\n5. **Tanjung Malaka**: $L : P = 2 : 3$, sehingga bagian laki-laki $= \\frac{2}{2+3} = \\frac{2}{5}$:\n   $$\\frac{2}{5} \\times 55.760 = 2 \\times 11.152 = 22.304\\ \\text{jiwa}.$$\n6. **Tanjung Jaya**: $L : P = 2 : 1$, sehingga bagian laki-laki $= \\frac{2}{2+1} = \\frac{2}{3}$:\n   $$\\frac{2}{3} \\times 15.063 = 2 \\times 5.021 = 10.042\\ \\text{jiwa}.$$\n7. **Sabana Tanjung**: $0{,}4 = \\frac{2}{5}$ bagian laki-laki:\n   $$\\frac{2}{5} \\times 34.045 = 2 \\times 6.809 = 13.618\\ \\text{jiwa}.$$\nJumlah seluruh penduduk laki-laki di $7$ kelurahan adalah:\n$$17.296 + 6.156 + 3.709 + 6.717 + 22.304 + 10.042 + 13.618 = 79.842\\ \\text{jiwa}.$$\nRata-rata per kelurahan:\n$$A = \\frac{79.842}{7} = 11.406\\ \\text{jiwa}.$$\nKelurahan yang jumlah penduduk laki-lakinya kurang dari $11.406$ adalah Pondok Tanjung ($6.156$), Tanjung Cinta ($3.709$), Tanjung Sari ($6.717$), dan Tanjung Jaya ($10.042$), yaitu sebanyak $4$ kelurahan.',
          rubric: [
            { code: 'M1', text: 'Menghitung jumlah penduduk laki-laki ketujuh kelurahan dan rata-ratanya $A = 79.842 \\div 7 = 11.406$.' },
            { code: 'A1', text: 'Menyimpulkan ada $4$ kelurahan yang kurang dari $A$.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'Andi, Bardi, Clara, Dora, dan Endang tinggal di RW yang sama. Dua dari mereka tinggal di RT1 dan tiga lainnya tinggal di RT2. Dora tinggal di RT yang berbeda dengan Clara dan Endang. Bardi tinggal di RT yang berbeda dengan Andi dan Clara. Yang rumahnya di RT1 adalah $\\ldots$',
          answer: 'Bardi dan Dora',
          principle:
            'Kelompokkan orang-orang yang berada pada RT yang sama berdasarkan keterangan perbedaan RT, lalu cocokan ukuran kelompoknya ($2$ orang di RT1 dan $3$ orang di RT2).',
          solution:
            'Karena hanya ada dua RT (RT1 dan RT2), dua orang yang tinggal di RT berbeda dengan orang yang sama pasti tinggal di RT yang sama:\n1. Dora tinggal di RT yang berbeda dengan Clara dan Endang, sehingga **Clara dan Endang** tinggal di RT yang sama (berlawanan dengan Dora).\n2. Bardi tinggal di RT yang berbeda dengan Andi dan Clara, sehingga **Andi dan Clara** tinggal di RT yang sama (berlawanan dengan Bardi).\nDari (1) dan (2), **Andi, Clara, dan Endang** ketiganya tinggal di RT yang sama, sedangkan **Dora** dan **Bardi** tinggal di RT yang satunya lagi.\nKarena diketahui ada $3$ orang di RT2 dan $2$ orang di RT1, maka:\n- Penghuni RT2 ($3$ orang): Andi, Clara, dan Endang.\n- Penghuni RT1 ($2$ orang): Bardi dan Dora.\nJadi yang rumahnya di RT1 adalah Bardi dan Dora.',
          rubric: [
            { code: 'M1', text: 'Menyimpulkan Andi, Clara, dan Endang berada di satu RT yang sama (RT2 karena berjumlah $3$ orang).' },
            { code: 'A1', text: 'Menyebutkan Bardi dan Dora tinggal di RT1.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'Dua buah dadu warna merah dan biru dilempar bersamaan. Mata dadu yang muncul kemudian dijumlahkan dan dikalikan. Sebagai contoh, misalnya saat pelemparan muncul mata dadu $2$ pada dadu merah dan mata dadu $3$ pada dadu biru:\n$$2 + 3 = 5$$\n$$2 \\times 3 = 6$$\nKemudian hasil perkaliannya dikurangkan dengan hasil penjumlahannya sehingga diperoleh sebuah bilangan bulat:\n$$(2 \\times 3) - (2 + 3) = 6 - 5 = 1$$\nBanyaknya pasangan mata dadu yang menghasilkan bilangan kuadrat adalah $\\ldots$ pasang.',
          answer: '$7$',
          principle:
            'Faktorkan $mb - (m + b) = (m - 1)(b - 1) - 1$ lalu daftar semua nilai kuadrat sempurna $0, 1, 4, 9, \\dots$ yang mungkin dicapai oleh mata dadu $1$ sampai $6$.',
          solution:
            'Misalkan mata dadu merah adalah $m$ dan mata dadu biru adalah $b$, dengan $m, b \\in \\{1, 2, 3, 4, 5, 6\\}$.\nNilai yang dihasilkan adalah:\n$$N = mb - (m + b) = (m - 1)(b - 1) - 1.$$\nAgar $N$ merupakan bilangan kuadrat ($0 = 0^2, 1 = 1^2, 4 = 2^2, 9 = 3^2, 16 = 4^2, \\dots$), haruslah $(m - 1)(b - 1) = k^2 + 1$ dengan $0 \\le m - 1 \\le 5$ dan $0 \\le b - 1 \\le 5$ (sehingga hasil kali maksimal $5 \\times 5 = 25$).\nUji setiap nilai $k^2 + 1 \\le 25$:\n- $k = 0 \\implies (m - 1)(b - 1) = 1$: hanya $1 \\times 1$, memberikan $(m, b) = (2, 2)$ (nilai $0 = 0^2$).\n- $k = 1 \\implies (m - 1)(b - 1) = 2$: $1 \\times 2$ dan $2 \\times 1$, memberikan $(2, 3)$ dan $(3, 2)$ (nilai $1 = 1^2$).\n- $k = 2 \\implies (m - 1)(b - 1) = 5$: $1 \\times 5$ dan $5 \\times 1$, memberikan $(2, 6)$ dan $(6, 2)$ (nilai $4 = 2^2$).\n- $k = 3 \\implies (m - 1)(b - 1) = 10$: $2 \\times 5$ dan $5 \\times 2$, memberikan $(3, 6)$ dan $(6, 3)$ (nilai $9 = 3^2$).\n- $k = 4 \\implies (m - 1)(b - 1) = 17$: $17$ bilangan prima $> 5$, tidak mungkin.\nJadi seluruh pasangan $(m, b)$ ada sebanyak $1 + 2 + 2 + 2 = 7$ pasang.',
          rubric: [
            { code: 'M1', text: 'Mengubah bentuk menjadi $(m-1)(b-1) - 1 = k^2$ dan menguji kemungkinan kuadrat $0, 1, 4, 9, 16$.' },
            { code: 'A1', text: 'Menemukan ketujuh pasangan: $(2,2), (2,3), (3,2), (2,6), (6,2), (3,6), (6,3)$ (total $7$ pasang).' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            '$ROTI$ dan $KEJU$ melambangkan bilangan ribuan. Tiap huruf $R, O, T, I, K, E, J, U$ melambangkan satu buah bilangan berbeda antara $0, 1, 2, 3, \\dots, 9$, sehingga:\n$$\\begin{array}{r} \\text{ROTI} \\\\ +\\ \\text{ROTI} \\\\ \\hline \\text{KEJU} \\end{array}$$\nNilai $KEJU$ terkecil yang mungkin adalah $\\ldots$',
          answer: '$2690$',
          principle:
            'Karena $KEJU = 2 \\times ROTI$, meminimalkan $KEJU$ ekuivalen dengan meminimalkan $ROTI$ sambil menjaga kedelapan digit tetap berbeda.',
          solution:
            'Kita ingin meminimalkan $\\overline{KEJU} = 2 \\times \\overline{ROTI}$ dengan syarat $8$ huruf bernilai berbeda dari $\\{0, 1, \\dots, 9\\}$ dan $R \\neq 0, K \\neq 0$.\n1. Pilih $R$ sekecil mungkin, yaitu $R = 1$. Untuk meminimalkan ribuan hasil, pilih tidak ada simpanan ke ribuan sehingga $K = 2$.\n2. Berikutnya pilih $O$ sekecil mungkin (tersisa $0, 3, 4, \\dots$). Jika $O = 0$, maka $E$ bernilai $0$ (sama dengan $O$) atau $1$ (sama dengan $R$), keduanya tidak boleh. Jadi $O \\ge 3$. Pilih $O = 3$.\n   - Jika tidak ada simpanan dari puluhan ke ratusan, $E = 6$ (jika ada simpanan $E = 7$, lebih besar). Ambil $E = 6$.\n3. Digit terpakai sejauh ini: $R=1, K=2, O=3, E=6$. Sisa digit untuk $T$: $0, 4, 5, 7, 8, 9$.\n   - Jika $T = 0$, maka $J = 0$ (sama dengan $T$) atau $J = 1$ (sama dengan $R$), tidak mungkin.\n   - Coba $T = 4$. Jika tanpa simpanan dari satuan, $J = 8$, sehingga butuh $I \\in \\{0, 5, 7, 9\\}$ dengan $2I < 10$; hanya $I = 0$ yang memenuhi, tetapi menghasilkan $U = 0 = I$ (tidak boleh).\n   - Jika ada simpanan dari satuan ($I \\ge 5$), maka $J = 2(4) + 1 = 9$. Sisa digit $\\ge 5$ yang belum dipakai adalah $5, 7, 8$. Pilih terkecil $I = 5$, menghasilkan $5 + 5 = 10 \\implies U = 0$ dan simpanan $1$.\nPemeriksaan: $1345 + 1345 = 2690$, menggunakan $8$ digit berbeda $\\{1, 3, 4, 5, 2, 6, 9, 0\\}$. Jadi nilai $KEJU$ terkecil adalah $2690$.',
          rubric: [
            { code: 'M1', text: 'Meminimalkan digit dari kiri ($R=1, K=2$, menolak $O=0$ sehingga $O=3, E=6$, menolak $T=0$ sehingga $T=4$).' },
            { code: 'A1', text: 'Memperoleh $1345 + 1345 = 2690$, sehingga $KEJU = 2690$.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Diberikan bilangan prima berbeda $a$, $b$, dan $c$ yang memenuhi\n$$499 \\times a + 103 \\times b + 102 \\times c = 2025.$$\nNilai dari $a + b - c$ adalah $\\ldots$',
          answer: '$6$',
          principle:
            'Gunakan analisis paritas (genap-ganjil) dan batas atas untuk menemukan bilangan prima genap tunggal $2$ di antara variabel.',
          solution:
            'Perhatikan paritas kedua ruas persamaan $499a + 103b + 102c = 2025$:\n- $102c$ selalu genap, sedangkan $2025$ ganjil, sehingga $499a + 103b$ harus ganjil.\n- Karena $499$ dan $103$ keduanya ganjil, agar jumlahnya ganjil maka salah satu dari $a$ atau $b$ harus genap dan yang lain ganjil. Satu-satunya bilangan prima genap adalah $2$.\nUji dua kasus:\n- **Kasus 1 ($a = 2$):**\n  $$499(2) + 103b + 102c = 2025 \\implies 103b + 102c = 1027.$$\n  Karena $c \\ge 3$ (berbeda dari $a = 2$), maka $103b \\le 1027 - 102(3) = 721 \\implies b \\le 7$.\n  Bilangan prima ganjil $\\le 7$ adalah $3, 5, 7$:\n  - Jika $b = 3$: $102c = 1027 - 309 = 718$ (tidak habis dibagi $102$).\n  - Jika $b = 5$: $102c = 1027 - 515 = 512$ (tidak habis dibagi $102$).\n  - Jika $b = 7$: $102c = 1027 - 721 = 306 \\implies c = 3$ (prima dan berbeda dari $2, 7$!).\n- **Kasus 2 ($b = 2$):**\n  $$499a + 102c = 2025 - 206 = 1819.$$\n  Karena $c \\ge 3$, $499a \\le 1819 - 306 = 1513 \\implies a = 3$, tetapi $1819 - 499(3) = 322$ tidak habis dibagi $102$.\nJadi satu-satunya solusi adalah $a = 2, b = 7, c = 3$, sehingga $a + b - c = 2 + 7 - 3 = 6$.',
          rubric: [
            { code: 'M1', text: 'Menggunakan paritas untuk menyimpulkan $a=2$ (dan memeriksa $b=2$) hingga memperoleh $(a,b,c) = (2,7,3)$.' },
            { code: 'A1', text: 'Nilai $a + b - c = 6$.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Diberikan bilangan bulat $a, b, c, d, e, f$ dengan\n$$a + 2 = b - 4^2 = c + 7 = d + 2^2 = e + 3^2 = f - 3^2.$$\nDi antara $a, b, c, d, e,$ dan $f$, yang terbesar adalah $\\ldots$',
          answer: '$b$',
          principle:
            'Nyatakan setiap variabel dalam satu konstanta pembanding $K$ setelah menghitung nilai kuadratnya.',
          solution:
            'Hitung dahulu nilai perpangkatannya ($4^2 = 16$, $2^2 = 4$, $3^2 = 9$), lalu misalkan seluruh persamaan bernilai sama dengan $K$:\n$$a + 2 = b - 16 = c + 7 = d + 4 = e + 9 = f - 9 = K.$$\nNyatakan masing-masing bilangan dalam $K$:\n- $a = K - 2$\n- $b = K + 16$\n- $c = K - 7$\n- $d = K - 4$\n- $e = K - 9$\n- $f = K + 9$\nUrutkan dari yang terkecil hingga terbesar:\n$$K - 9 < K - 7 < K - 4 < K - 2 < K + 9 < K + 16,$$\nyaitu $e < c < d < a < f < b$. Jadi bilangan yang terbesar adalah $b$.',
          rubric: [
            { code: 'M1', text: 'Menyatakan semua variabel terhadap satu nilai $K$: $b = K + 16$, $f = K + 9$, $a = K - 2$, dan seterusnya.' },
            { code: 'A1', text: 'Menentukan $b$ sebagai bilangan terbesar.' }
          ]
        },
        {
          label: '16',
          marks: 2,
          prompt:
            'Diketahui jari-jari tabung A, B, dan C berturut-turut adalah $8\\ \\text{cm}$, $3\\ \\text{cm}$, dan $2\\ \\text{cm}$. Sedangkan tinggi tabung A, B, dan C berturut-turut adalah $15\\ \\text{cm}$, $7\\ \\text{cm}$, dan $3\\ \\text{cm}$. Andika ingin mengisi tabung A hingga penuh menggunakan air dari tabung B dan tabung C. Berapa kali jumlah minimum yang mungkin untuk tabung B dan tabung C harus digunakan (masing-masing diisi penuh lalu dituangkan ke tabung A) agar tabung A terisi penuh?',
          answer: '$29$',
          principle:
            'Susun persamaan Diophantine linear dari volume tabung $V = \\pi r^2 t$, lalu maksimalkan penggunaan tabung bervolume lebih besar untuk meminimalkan total penuangan.',
          solution:
            'Hitung volume masing-masing tabung dengan rumus $V = \\pi r^2 t$:\n- $V_A = \\pi \\times 8^2 \\times 15 = 960\\pi\\ \\text{cm}^3$\n- $V_B = \\pi \\times 3^2 \\times 7 = 63\\pi\\ \\text{cm}^3$\n- $V_C = \\pi \\times 2^2 \\times 3 = 12\\pi\\ \\text{cm}^3$\nMisalkan tabung B digunakan $x$ kali dan tabung C digunakan $y$ kali ($x, y \\ge 0$ bilangan bulat). Agar terisi penuh tepat tanpa meluap:\n$$63\\pi x + 12\\pi y = 960\\pi \\implies 63x + 12y = 960.$$\nBagi kedua ruas dengan $3$:\n$$21x + 4y = 320.$$\nPerhatikan bahwa $4y$ dan $320$ habis dibagi $4$, sehingga $21x$ juga harus habis dibagi $4$. Karena $\\gcd(21, 4) = 1$, maka $x$ harus kelipatan $4$.\nSelain itu $21x \\le 320 \\implies x \\le 15$, sehingga nilai $x$ yang mungkin hanyalah $0, 4, 8,$ dan $12$.\nKarena $V_B > V_C$, total penuangan $x + y$ akan sekecil mungkin jika $x$ sebesar mungkin, yaitu $x = 12$:\n$$21(12) + 4y = 320 \\implies 252 + 4y = 320 \\implies 4y = 68 \\implies y = 17.$$\nPemeriksaan: $63(12) + 12(17) = 756 + 204 = 960$. Jadi jumlah minimum penggunaannya adalah $12 + 17 = 29$ kali.',
          rubric: [
            { code: 'M1', text: 'Menghitung volume $960\\pi, 63\\pi, 12\\pi$ dan menyederhanakan persamaan menjadi $21x + 4y = 320$ dengan $x$ kelipatan $4$.' },
            { code: 'A1', text: 'Menemukan $x = 12, y = 17$ dan jumlah minimum $29$ kali.' }
          ]
        },
        {
          label: '17',
          marks: 2,
          prompt:
            'Banyak siswa SD Permata Bunda kelas VIA adalah $45$ siswa, sementara banyak siswa kelas VIB adalah $40$ siswa. Perbandingan rata-rata uang jajan siswa kelas VIA dengan rata-rata uang jajan siswa kelas VIB adalah $2 : 3$. Bila rata-rata uang jajan siswa pada kedua kelas adalah Rp7.000,00, maka rata-rata uang jajan siswa kelas VIB adalah $\\ldots$ rupiah.',
          answer: '$8.500$',
          principle:
            'Gunakan rata-rata gabungan (jumlah total nilai dibagi total siswa) dan nyatakan kedua rata-rata menggunakan satu variabel perbandingan.',
          solution:
            'Misalkan rata-rata uang jajan kelas VIA adalah $R_A = 2k$ dan kelas VIB adalah $R_B = 3k$ (sesuai perbandingan $2 : 3$).\n- Jumlah seluruh siswa $= 45 + 40 = 85$ siswa.\n- Total uang jajan kedua kelas $= 85 \\times 7.000 = 595.000$ rupiah.\nDi sisi lain, total uang jajan juga sama dengan:\n$$45 \\times (2k) + 40 \\times (3k) = 90k + 120k = 210k.$$\nSamakan kedua bentuk:\n$$210k = 595.000 \\implies k = \\frac{595.000}{210} = \\frac{8.500}{3}.$$\nOleh karena itu, rata-rata uang jajan siswa kelas VIB adalah:\n$$R_B = 3k = 3 \\times \\frac{8.500}{3} = 8.500\\ \\text{rupiah}.$$\nPemeriksaan: $R_A = 2k = \\frac{17.000}{3}$, sehingga $45 R_A + 40 R_B = 15(17.000) + 40(8.500) = 255.000 + 340.000 = 595.000 = 85 \\times 7.000$.',
          rubric: [
            { code: 'M1', text: 'Memisalkan $R_A = 2k, R_B = 3k$ dan menyusun persamaan rata-rata gabungan $\\frac{45(2k) + 40(3k)}{85} = 7.000$.' },
            { code: 'A1', text: 'Menghitung $R_B = 8.500$ rupiah.' }
          ]
        },
        {
          label: '18',
          marks: 2,
          prompt:
            'Berikut adalah data penjualan barang Fashion pada toko Amanah selama seminggu. Diketahui harga kaos, kemeja, dan celana sama, harga kaos Rp5.000,00 lebih mahal dari harga kerudung, dan harga gamis dua kali harga kemeja. Jika hasil penjualan kerudung seminggu tersebut adalah Rp5.170.000,00, maka selama satu minggu hasil penjualan barang Fashion toko Amanah adalah $\\ldots$ rupiah.',
          figures: [
            {
              src: '/papers/osnp-mat-sd-2025/fig-18.svg',
              alt: 'Diagram batang berkelompok penjualan harian kaos, kemeja, gamis, celana, dan kerudung dari hari Senin sampai Minggu.',
              caption: 'Diagram batang penjualan barang Fashion Toko Amanah selama satu minggu.'
            }
          ],
          answer: '$24.310.000$',
          principle:
            'Jumlahkan banyak terjual tiap jenis barang dari diagram batang, cari harga satuan dari data kerudung, lalu kalikan masing-masing dengan jumlah penjualannya.',
          solution:
            'Jumlahkan banyak penjualan setiap jenis barang dari Senin sampai Minggu:\n- **Kaos**: $10 + 12 + 8 + 6 + 10 + 20 + 16 = 82$ buah.\n- **Kemeja**: $4 + 3 + 2 + 4 + 6 + 15 + 10 = 44$ buah.\n- **Gamis**: $4 + 6 + 8 + 7 + 6 + 10 + 12 = 53$ buah.\n- **Celana**: $10 + 12 + 10 + 10 + 10 + 20 + 15 = 87$ buah.\n- **Kerudung**: $8 + 6 + 8 + 12 + 10 + 30 + 20 = 94$ buah.\n\nTentukan harga satuan tiap barang:\n- Harga $1$ kerudung $= 5.170.000 \\div 94 = 55.000$ rupiah.\n- Harga kaos $=$ harga kemeja $=$ harga celana $= 55.000 + 5.000 = 60.000$ rupiah.\n- Harga gamis $= 2 \\times 60.000 = 120.000$ rupiah.\n\nTotal penjualan selama satu minggu:\n$$\\begin{aligned} \\text{Total} &= (82 + 44 + 87) \\times 60.000 + 53 \\times 120.000 + 5.170.000 \\\\ &= 213 \\times 60.000 + 6.360.000 + 5.170.000 \\\\ &= 12.780.000 + 6.360.000 + 5.170.000 \\\\ &= 24.310.000\\ \\text{rupiah}. \\end{aligned}$$',
          rubric: [
            { code: 'M1', text: 'Menjumlahkan penjualan mingguan tiap item ($82, 44, 53, 87, 94$) dan menemukan harga kerudung Rp55.000,00, kaos/kemeja/celana Rp60.000,00, dan gamis Rp120.000,00.' },
            { code: 'A1', text: 'Total hasil penjualan Rp24.310.000,00 ($24.310.000$).' }
          ]
        },
        {
          label: '19',
          marks: 2,
          prompt:
            'Keluarga Andika terdiri dari Andika, istri Andika, $1$ orang anak laki-laki, dan $2$ orang anak perempuan. Mereka memiliki meja makan yang berbentuk lingkaran dengan $5$ kursi. Berapa banyak cara mereka duduk sehingga Andika dan istrinya selalu duduk berdekatan?',
          answer: '$12$',
          principle:
            'Gunakan permutasi siklis $(n - 1)!$ dengan menyatukan pasangan yang harus berdekatan sebagai satu blok, lalu kalikan dengan permutasi internal di dalam blok.',
          solution:
            'Karena Andika dan istrinya selalu duduk berdekatan, anggap keduanya sebagai $1$ kesatuan (blok).\nDengan demikian terdapat $4$ unsur yang duduk melingkar (blok pasangan Andika–istri, $1$ anak laki-laki, dan $2$ anak perempuan).\n- Banyak susunan melingkar dari $4$ unsur adalah $(4 - 1)! = 3! = 3 \\times 2 \\times 1 = 6$ cara.\n- Di dalam blok tersebut, Andika dan istrinya dapat bertukar posisi (kiri–kanan atau kanan–kiri) dalam $2! = 2$ cara.\nJadi total banyak cara duduk mereka adalah $6 \\times 2 = 12$ cara.',
          rubric: [
            { code: 'M1', text: 'Menggabungkan Andika dan istri sebagai $1$ blok sehingga diperoleh $(4-1)! = 6$ susunan siklis dan $2! = 2$ susunan dalam blok.' },
            { code: 'A1', text: 'Banyak cara duduk adalah $12$ cara.' }
          ]
        },
        {
          label: '20',
          marks: 2,
          prompt:
            'Misalkan diberikan tujuh angka: $0, 1, 2, 3, 6, 7,$ dan $9$. Akan dibentuk sebuah bilangan yang terdiri dari $4$ angka, dengan setiap angka hanya digunakan sekali dan angka pertama tidak boleh sama dengan nol. Banyaknya bilangan genap yang terbentuk adalah $\\ldots$ bilangan.',
          answer: '$320$',
          principle:
            'Pecah pencacahan berdasarkan angka satuan ($0$ atau bukan $0$) agar syarat angka pertama tidak boleh nol dapat ditangani secara tepat.',
          solution:
            'Bilangan $4$ angka $\\overline{ABCD}$ bernilai genap jika angka satuan $D$ genap. Dari angka yang tersedia $\\{0, 1, 2, 3, 6, 7, 9\\}$, angka genap adalah $0, 2,$ dan $6$. Bagi menjadi $3$ kasus:\n- **Kasus 1 ($D = 0$):**\n  - $A$ (ribuan) dapat memilih $6$ angka tersisa (semuanya bukan $0$). \n  - $B$ (ratusan) memiliki $5$ pilihan.\n  - $C$ (puluhan) memiliki $4$ pilihan.\n  Banyak bilangan $= 6 \\times 5 \\times 4 = 120$.\n- **Kasus 2 ($D = 2$):**\n  - $A$ tidak boleh $0$ dan tidak boleh $2$, sehingga memiliki $5$ pilihan ($1, 3, 6, 7, 9$).\n  - $B$ boleh menggunakan $0$ (tetapi tidak boleh $2$ dan $A$), sehingga memiliki $5$ pilihan.\n  - $C$ memiliki $4$ pilihan.\n  Banyak bilangan $= 5 \\times 5 \\times 4 = 100$.\n- **Kasus 3 ($D = 6$):**\n  - Sama seperti kasus $D = 2$: $A$ memiliki $5$ pilihan, $B$ memiliki $5$ pilihan, dan $C$ memiliki $4$ pilihan.\n  Banyak bilangan $= 5 \\times 5 \\times 4 = 100$.\n\nTotal bilangan genap yang terbentuk adalah $120 + 100 + 100 = 320$ bilangan.',
          rubric: [
            { code: 'M1', text: 'Membagi kasus satuan $D=0$ ($120$ bilangan) serta $D=2$ dan $D=6$ (masing-masing $100$ bilangan) dengan memperhatikan syarat $A \\neq 0$.' },
            { code: 'A1', text: 'Total $320$ bilangan genap.' }
          ]
        }
      ]
    }
  ]
};
