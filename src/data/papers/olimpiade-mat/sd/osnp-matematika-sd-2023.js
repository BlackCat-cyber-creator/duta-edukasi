/**
 * Paket Soal Terstruktur: OSN-P Matematika SD 2023 (20 Soal Isian Singkat)
 * Sumber: Soal OSNP Bidang Matematika SD Tahun 2023.pdf (Olimpiade Sains Nasional Tingkat Provinsi, Kemendikbudristek / Pusat Prestasi Nasional).
 * Catatan:
 * - Soal nomor 2, 3, 12, 18, 19, dan 20 disertai gambar/diagram yang dipotong bersih dari naskah resmi.
 * - Pada soal nomor 7, pangkat yang merapat pada ekstraksi teks (25 x 33 dan 34 x 52) dipastikan dari naskah PDF asli sebagai 2^5 x 3^3 dan 3^4 x 5^2.
 */
export default {
  id: 'osnp-mat-sd-2023',
  slug: 'osnp-matematika-sd-2023',
  subject: 'olimpiade-mat',
  grade: 6,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'OSN-P Matematika SD 2023: aritmetika, teori bilangan, geometri, dan kombinatorika',
  relatedChapterIds: [
    'sd5-bab2-kpk-fpb',
    'sd5-bab5-luas-daerah-bangun-datar',
    'sd6-bab2-rasio',
    'sd6-bab4-peluang'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-P',
  title: 'OSN-P Matematika SD 2023',
  totalMarks: 40,
  instructions:
    'Kerjakan seluruh 20 soal isian singkat OSN-P Matematika SD 2023 berikut. Naskah asli menggunakan petunjuk penulisan jawaban: (1) nominal uang dituliskan bilangannya saja tanpa tanda baca, (2) bentuk akar ditulis akar(n), (3) bilangan desimal menggunakan tanda koma, dan (4) bentuk perbandingan menggunakan tanda titik dua. Pada paket latihan ini setiap soal bernilai 2 poin (1 poin langkah penyelesaian dan 1 poin jawaban akhir; total 40 poin).',
  source: {
    org: 'OSN-P',
    file: 'Soal OSNP Bidang Matematika SD Tahun 2023.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Isian Singkat',
      marks: 40,
      stem: 'Selesaikan ke-20 soal berikut secara cermat dan tuliskan jawaban akhir yang tepat (masing-masing bernilai 2 poin).',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            'Alfian menjual sepeda motor bekas dengan harga dua kali lipat dari harga belinya. Sebelum menjual ia telah mengeluarkan biaya sebesar $60\\%$ dari harga belinya untuk memperbaiki dan menambah aksesoris pada sepeda motor tersebut. Jika biaya perbaikan dan penambahan aksesoris sebesar $\\text{Rp}1.650.000{,}00$, maka keuntungan yang diperoleh Alfian adalah $\\ldots$ rupiah.',
          answer: '$1.100.000$',
          principle:
            'Hitung harga beli mula-mula dari persentase biaya perbaikan, lalu kurangkan total modal (harga beli ditambah biaya perbaikan) dari harga jual.',
          solution:
            'Misalkan harga beli sepeda motor adalah $B$. Biaya perbaikan dan penambahan aksesoris sebesar $60\\%$ dari harga beli, sehingga:\n$$60\\% \\times B = 1.650.000 \\implies 0{,}6 B = 1.650.000 \\implies B = \\frac{1.650.000}{0{,}6} = 2.750.000.$$\nHarga jual sepeda motor adalah dua kali lipat harga beli:\n$$\\text{Harga jual} = 2 \\times 2.750.000 = 5.500.000.$$\nTotal modal yang dikeluarkan Alfian adalah:\n$$\\text{Modal} = 2.750.000 + 1.650.000 = 4.400.000.$$\nJadi, keuntungan yang diperoleh Alfian adalah:\n$$5.500.000 - 4.400.000 = 1.100.000\\ \\text{rupiah}$$ (dituliskan $1100000$ tanpa tanda baca sesuai petunjuk penulisan).',
          rubric: [
            {
              code: 'M1',
              text: 'Menentukan harga beli $B = \\text{Rp}2.750.000$, harga jual $\\text{Rp}5.500.000$, dan total modal $\\text{Rp}4.400.000$.'
            },
            { code: 'A1', text: 'Memperoleh keuntungan $1.100.000$ rupiah ($1100000$).' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Bu Linda membuat suatu permainan yang disebut **Berpindah Bernilai**. Permainan tersebut memiliki aturan sebagai berikut:\na. hanya bisa berpindah maju, geser ke kiri atau berputar pada posisinya;\nb. maju $1$ petak bernilai $10$;\nc. geser ke kiri $1$ petak bernilai $-10$;\nd. berputar $t$ derajat searah putaran jarum jam bernilai $-t$ dengan $t$ bilangan positif dan tidak melebihi $360$;\ne. berputar $t$ derajat berlawanan arah putaran jarum jam bernilai $t$ dengan $t$ bilangan positif dan tidak melebihi $360$;\nf. nilai permainan sama dengan jumlah seluruh nilai langkah atau berputar.\n\nBu Linda meminta siswa-siswanya memainkan permainan **Berpindah Bernilai** sehingga boneka A (menghadap Utara) berpindah menuju dan menjadi boneka C (menghadap Timur). Aisyah mencoba permainan tersebut dengan melakukan perpindahan atau berputar dengan urutan sebagai berikut: (1) berputar searah jarum jam, (2) maju $4$ petak, (3) berputar searah jarum jam, (4) maju $2$ petak, (5) berputar berlawanan arah putar jarum jam. Nilai permainan yang diperoleh Aisyah adalah $\\ldots$',
          figures: [
            {
              src: '/papers/osnp-mat-sd-2023/fig-2.webp',
              alt: 'Papan berpetak enam kali empat yang memuat posisi boneka A menghadap utara, posisi boneka C menghadap timur, dan penunjuk arah mata angin.',
              caption: 'Lintasan permainan Berpindah Bernilai dari boneka A menuju boneka C.'
            }
          ],
          answer: '$-30$',
          principle:
            'Tentukan perpindahan horizontal dan vertikal dari titik kisi A ke titik kisi C, lalu tentukan besar sudut putar pada setiap belokan agar arah hadap akhir tepat ke Timur.',
          solution:
            'Dari gambar papan berpetak dengan arah Utara ($\\text{U}$) ke atas:\n- Boneka A berada pada perpotongan garis tegak ke-$1$ dari kiri dan garis mendatar ke-$1$ dari atas, menghadap Utara.\n- Boneka C berada $4$ petak ke Timur (kanan) dan $2$ petak ke Selatan (bawah) dari posisi A, menghadap Timur.\n\nTelusuri setiap langkah Aisyah secara berurutan:\n1. **Berputar searah jarum jam**: agar dari posisi A dapat maju $4$ petak ke arah Timur, dari hadap Utara Aisyah berputar $90^\\circ$ searah jarum jam sehingga menghadap Timur. Nilai $= -90$.\n2. **Maju $4$ petak**: bergerak $4$ petak ke Timur. Nilai $= 4 \\times 10 = +40$.\n3. **Berputar searah jarum jam**: agar dapat maju $2$ petak ke arah Selatan menuju posisi C, dari hadap Timur Aisyah berputar $90^\\circ$ searah jarum jam sehingga menghadap Selatan. Nilai $= -90$.\n4. **Maju $2$ petak**: bergerak $2$ petak ke Selatan dan tiba di titik C dalam keadaan menghadap Selatan. Nilai $= 2 \\times 10 = +20$.\n5. **Berputar berlawanan arah putar jarum jam**: agar menghadap Timur seperti boneka C, dari hadap Selatan Aisyah berputar $90^\\circ$ berlawanan arah jarum jam. Nilai $= +90$.\n\nJumlah seluruh nilai permainan Aisyah:\n$$-90 + 40 - 90 + 20 + 90 = -30.$$',
          rubric: [
            {
              code: 'M1',
              text: 'Menentukan sudut putar tiap tahap ($90^\\circ$ searah jarum jam, $90^\\circ$ searah jarum jam, dan $90^\\circ$ berlawanan jarum jam) beserta nilai langkah maju.'
            },
            { code: 'A1', text: 'Menghitung total nilai permainan $-30$.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'Ari mencari kata KAKAK yang ada pada petak $7 \\times 7$ berikut. Kata KAKAK yang dicari hanya pada garis mendatar (boleh dari kanan ke kiri atau sebaliknya) atau tegak (boleh dari atas ke bawah atau sebaliknya). Paling banyak kata KAKAK yang bisa diperoleh Ari adalah $\\ldots$',
          figures: [
            {
              src: '/papers/osnp-mat-sd-2023/fig-3.webp',
              alt: 'Papan berpetak tujuh kali tujuh berisi susunan huruf K dan A berselang-seling seperti papan catur.',
              caption: 'Susunan huruf K dan A pada petak 7 × 7.'
            }
          ],
          answer: '$44$',
          principle:
            'Hitung banyak ruas $5$-petak berturut-turut yang membentuk K-A-K-A-K pada setiap baris dan kolom, lalu perhitungkan kedua arah pembacaan yang diizinkan.',
          solution:
            'Pada petak $7 \\times 7$ tersebut, huruf K dan A tersusun berselang-seling:\n- **Baris ganjil** (baris ke-$1, 3, 5, 7$; ada $4$ baris) berpola `K A K A K A K`. Pada tiap baris ini terdapat $2$ ruas $5$-petak yang membentuk `KAKAK`, yaitu kolom $1\\text{--}5$ dan kolom $3\\text{--}7$.\n- **Baris genap** (baris ke-$2, 4, 6$; ada $3$ baris) berpola `A K A K A K A`. Pada tiap baris ini terdapat $1$ ruas $5$-petak yang membentuk `KAKAK`, yaitu kolom $2\\text{--}6$.\n\nTotal ruas mendatar adalah $(4 \\times 2) + (3 \\times 1) = 8 + 3 = 11$ ruas.\nKarena susunan huruf simetris antara baris dan kolom, total ruas tegak juga ada $11$ ruas, sehingga seluruhnya ada $11 + 11 = 22$ ruas $5$-petak.\n\nKarena soal mengizinkan pembacaan dari dua arah berlawanan (kanan ke kiri maupun kiri ke kanan pada garis mendatar, serta atas ke bawah maupun bawah ke atas pada garis tegak), setiap ruas terhitung untuk $2$ arah baca terarah:\n$$22 \\times 2 = 44.$$',
          rubric: [
            {
              code: 'M1',
              text: 'Menghitung $11$ ruas mendatar ($4 \\times 2 + 3 \\times 1$) dan $11$ ruas tegak menjadi $22$ ruas $5$-petak.'
            },
            { code: 'A1', text: 'Memperoleh total $44$ kata KAKAK (dua arah pada tiap ruas).' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Diketahui operasi bilangan $a \\circledast b = \\max\\{a, b\\}$, dengan $\\max\\{a, b\\}$ menyatakan bilangan terbesar antara $a$ dan $b$. Jika $3 \\circledast (-x) = 5$, maka nilai $x$ adalah $\\ldots$',
          answer: '$-5$',
          principle:
            'Gunakan definisi nilai maksimum antara dua bilangan: karena salah satunya $3 \\neq 5$, bilangan kedua harus bernilai $5$.',
          solution:
            'Berdasarkan definisi operasi:\n$$3 \\circledast (-x) = \\max\\{3, -x\\} = 5.$$\nKarena $3 < 5$, maka bilangan terbesar di antara $3$ dan $-x$ pastilah $-x$. Dengan demikian:\n$$-x = 5 \\implies x = -5.$$',
          rubric: [
            { code: 'M1', text: 'Menyimpulkan $-x = 5$ dari $\\max\\{3, -x\\} = 5$ karena $3 \\neq 5$.' },
            { code: 'A1', text: 'Menemukan $x = -5$.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Diketahui lingkaran dengan pusat $O$ berjari-jari $5\\text{ cm}$. Titik $A$ dan $B$ pada lingkaran sehingga jarak $A$ dan $B$ adalah $8\\text{ cm}$. Jika titik $C$ pada lingkaran dengan panjang $AC$ sama dengan panjang $BC$, maka luas segitiga $ABC$ terbesar adalah $\\ldots\\text{ cm}^2$.',
          answer: '$32$',
          principle:
            'Titik $C$ dengan $AC = BC$ terletak pada garis sumbu tali busur $AB$ yang melalui pusat $O$; gunakan teorema Pythagoras untuk mencari jarak $O$ ke $AB$, lalu maksimalkan tinggi segitiga.',
          solution:
            'Misalkan $M$ adalah titik tengah tali busur $AB$, sehingga $AM = MB = \\frac{8}{2} = 4\\text{ cm}$ dan $OM \\perp AB$.\nPada segitiga siku-siku $OMA$ dengan $OA = 5\\text{ cm}$:\n$$OM = \\sqrt{OA^2 - AM^2} = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = \\sqrt{9} = 3\\text{ cm}.$$\nKarena $AC = BC$, titik $C$ berada pada garis lurus $OM$ (sumbu simetri tali busur $AB$) dan terletak pada lingkaran ($OC = 5\\text{ cm}$). Agar luas $\\triangle ABC$ terbesar, pilih $C$ pada busur besar di seberang $O$ dari $AB$, sehingga tinggi segitiga terhadap alas $AB$ adalah:\n$$t_{\\text{maks}} = OC + OM = 5 + 3 = 8\\text{ cm}.$$\nJadi luas $\\triangle ABC$ terbesar adalah:\n$$L = \\frac{1}{2} \\times AB \\times t_{\\text{maks}} = \\frac{1}{2} \\times 8 \\times 8 = 32\\text{ cm}^2.$$',
          rubric: [
            {
              code: 'M1',
              text: 'Menghitung jarak pusat ke tali busur $OM = 3\\text{ cm}$ dan tinggi maksimum $5 + 3 = 8\\text{ cm}$.'
            },
            { code: 'A1', text: 'Menghitung luas maksimum $32\\text{ cm}^2$.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'Banyak bilangan tiga digit yang habis dibagi $4$ dan habis dibagi $6$ tetapi tidak habis dibagi $30$ adalah $\\ldots$',
          answer: '$60$',
          principle:
            'Habis dibagi $4$ dan $6$ setara dengan habis dibagi $\\text{KPK}(4, 6) = 12$; lalu kurangkan bilangan yang juga habis dibagi $\\text{KPK}(12, 30) = 60$.',
          solution:
            'Bilangan tiga digit terletak dari $100$ hingga $999$.\n1. Habis dibagi $4$ dan $6$ berarti habis dibagi $\\text{KPK}(4, 6) = 12$.\n   - Kelipatan $12$ terkecil $\\ge 100$ adalah $12 \\times 9 = 108$.\n   - Kelipatan $12$ terbesar $\\le 999$ adalah $12 \\times 83 = 996$.\n   - Banyaknya ada $83 - 9 + 1 = 75$ bilangan.\n2. Di antara kelipatan $12$ tersebut, yang juga habis dibagi $30$ adalah kelipatan $\\text{KPK}(12, 30) = 60$.\n   - Kelipatan $60$ terkecil $\\ge 100$ adalah $60 \\times 2 = 120$.\n   - Kelipatan $60$ terbesar $\\le 999$ adalah $60 \\times 16 = 960$.\n   - Banyaknya ada $16 - 2 + 1 = 15$ bilangan.\n\nJadi banyak bilangan tiga digit yang memenuhi adalah:\n$$75 - 15 = 60.$$',
          rubric: [
            {
              code: 'M1',
              text: 'Menentukan kelipatan $12$ ada $75$ bilangan dan kelipatan $60$ ada $15$ bilangan di rentang $100\\text{--}999$.'
            },
            { code: 'A1', text: 'Memperoleh selisih $60$ bilangan.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'Misalkan $a = 2^5 \\times 3^3$ dan $b = 3^4 \\times 5^2$. Banyak faktor positif dari $a \\times b$ yang habis dibagi $6$ adalah $\\ldots$',
          answer: '$105$',
          principle:
            'Gabungkan faktorisasi prima $a \\times b$, lalu hitung pilihan pangkat tiap faktor prima dengan syarat pangkat $2$ dan $3$ minimal $1$.',
          solution:
            'Kalikan $a$ dan $b$:\n$$a \\times b = (2^5 \\times 3^3) \\times (3^4 \\times 5^2) = 2^5 \\times 3^7 \\times 5^2.$$\nSetiap faktor positif dari $a \\times b$ berbentuk $2^p \\times 3^q \\times 5^r$ dengan $0 \\le p \\le 5$, $0 \\le q \\le 7$, dan $0 \\le r \\le 2$.\nAgar faktor tersebut habis dibagi $6 = 2^1 \\times 3^1$, pangkat $2$ dan $3$ harus minimal $1$:\n- $p \\in \\{1, 2, 3, 4, 5\\}$ ($5$ pilihan),\n- $q \\in \\{1, 2, 3, 4, 5, 6, 7\\}$ ($7$ pilihan),\n- $r \\in \\{0, 1, 2\\}$ ($3$ pilihan).\n\nBanyak faktor positif yang memenuhi adalah:\n$$5 \\times 7 \\times 3 = 105.$$',
          rubric: [
            {
              code: 'M1',
              text: 'Menulis $a \\times b = 2^5 \\times 3^7 \\times 5^2$ dan membatasi $1 \\le p \\le 5$, $1 \\le q \\le 7$, $0 \\le r \\le 2$.'
            },
            { code: 'A1', text: 'Menghitung $5 \\times 7 \\times 3 = 105$.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'Anita membuka toko online yang menjual berbagai jenis pakaian. Setiap pembelian berikutnya dari barang yang sama diberi potongan harga $2\\%$ dari harga sebelumnya untuk barang dengan harga lebih dari $\\text{Rp}100.000$ dan potongan $1\\%$ untuk harga $\\text{Rp}100.000$ atau kurang. Tabel berikut adalah data pembelian seorang pelanggan dengan nama akun `@juriosnsd23`:\n\n| Nama Barang | Harga satuan (Rp) | Pembelian Ke 1 | Pembelian Ke 2 | Pembelian Ke 3 | Pembelian Ke 4 |\n|---|---:|---:|---:|---:|---:|\n| Kemeja | 150.000 | 2 | 2 | | |\n| Celana Panjang | 175.000 | | 2 | 2 | |\n| Celana Pendek | 60.000 | | | 1 | 1 |\n\nJumlah uang yang diterima Anita dari akun `@juriosnsd23` adalah $\\ldots$ rupiah.',
          answer: '$1.406.400$',
          principle:
            'Hitung biaya tiap jenis barang secara terpisah: pembelian pertama menggunakan harga normal, sedangkan pembelian berikutnya menggunakan harga setelah potongan sesuai kategori harga barang.',
          solution:
            'Hitung pembayaran untuk masing-masing jenis pakaian:\n1. **Kemeja** (harga satuan $\\text{Rp}150.000 > \\text{Rp}100.000$, sehingga pembelian berikutnya mendapat potongan $2\\%$):\n   - Pembelian Ke 1 ($2$ buah): $2 \\times 150.000 = 300.000$.\n   - Pembelian Ke 2 ($2$ buah, harga satuan $98\\% \\times 150.000 = 147.000$): $2 \\times 147.000 = 294.000$.\n   - Subtotal Kemeja $= 300.000 + 294.000 = 594.000$.\n2. **Celana Panjang** (harga satuan $\\text{Rp}175.000 > \\text{Rp}100.000$, sehingga pembelian berikutnya mendapat potongan $2\\%$):\n   - Pembelian Ke 2 (pertama kali beli celana panjang, $2$ buah): $2 \\times 175.000 = 350.000$.\n   - Pembelian Ke 3 ($2$ buah, harga satuan $98\\% \\times 175.000 = 171.500$): $2 \\times 171.500 = 343.000$.\n   - Subtotal Celana Panjang $= 350.000 + 343.000 = 693.000$.\n3. **Celana Pendek** (harga satuan $\\text{Rp}60.000 \\le \\text{Rp}100.000$, sehingga pembelian berikutnya mendapat potongan $1\\%$):\n   - Pembelian Ke 3 (pertama kali beli celana pendek, $1$ buah): $1 \\times 60.000 = 60.000$.\n   - Pembelian Ke 4 ($1$ buah, harga satuan $99\\% \\times 60.000 = 59.400$): $1 \\times 59.400 = 59.400$.\n   - Subtotal Celana Pendek $= 60.000 + 59.400 = 119.400$.\n\nTotal uang yang diterima Anita:\n$$594.000 + 693.000 + 119.400 = 1.406.400\\ \\text{rupiah}$$ (dituliskan $1406400$ tanpa tanda baca sesuai petunjuk penulisan).',
          rubric: [
            {
              code: 'M1',
              text: 'Menghitung subtotal Kemeja ($594.000$), Celana Panjang ($693.000$), dan Celana Pendek ($119.400$) dengan tarif diskon yang tepat.'
            },
            { code: 'A1', text: 'Menjumlahkan total menjadi $1.406.400$ rupiah ($1406400$).' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'Jarak kota Palu ke kota Poso adalah $180\\text{ km}$. Jarak tersebut jika ditempuh dengan kendaraan umum ternyata lebih lambat $2\\text{ jam}$ daripada jika ditempuh dengan kendaraan pribadi. Jika kecepatan rata-rata kendaraan umum $32\\text{ km/jam}$ lebih lambat dari kecepatan rata-rata kendaraan pribadi, maka perbandingan kecepatan rata-rata kendaraan umum dan kendaraan pribadi adalah $\\ldots$ (tuliskan jawaban dalam bentuk $a:b$ yang paling sederhana).',
          answer: '$5:9$',
          principle:
            'Nyatakan selisih waktu tempuh $\\frac{s}{v_u} - \\frac{s}{v_p} = 2$ lalu faktorkan hasil kali dua bilangan yang berselisih $32$.',
          solution:
            'Misalkan kecepatan rata-rata kendaraan pribadi adalah $v\\text{ km/jam}$, sehingga kecepatan rata-rata kendaraan umum adalah $(v - 32)\\text{ km/jam}$ (dengan $v > 32$).\nSelisih waktu tempuh kedua kendaraan adalah $2\\text{ jam}$:\n$$\\frac{180}{v - 32} - \\frac{180}{v} = 2.$$\nSamakan penyebutnya:\n$$\\frac{180v - 180(v - 32)}{v(v - 32)} = 2 \\implies \\frac{180 \\times 32}{v(v - 32)} = 2 \\implies v(v - 32) = 90 \\times 32 = 2880.$$\nCari dua bilangan berselisih $32$ yang hasil kalinya $2880$: $72 \\times 40 = 2880$, sehingga $v = 72\\text{ km/jam}$ dan $v - 32 = 40\\text{ km/jam}$.\nPerbandingan kecepatan rata-rata kendaraan umum dan kendaraan pribadi adalah:\n$$40 : 72 = 5 : 9.$$',
          rubric: [
            {
              code: 'M1',
              text: 'Menyusun persamaan $v(v - 32) = 2880$ dan menemukan $v_{\\text{pribadi}} = 72\\text{ km/jam}$ serta $v_{\\text{umum}} = 40\\text{ km/jam}$.'
            },
            { code: 'A1', text: 'Menyederhanakan perbandingan menjadi $5:9$.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'Diketahui segitiga $ABC$ dengan titik tengah masing-masing sisinya adalah $P$, $Q$, dan $R$. Banyak segitiga yang dapat dibentuk dari titik-titik $A$, $B$, $C$, $P$, $Q$, dan $R$ adalah $\\ldots$',
          answer: '$17$',
          principle:
            'Kurangkan banyak himpunan $3$ titik yang segaris (kolinear) dari seluruh kombinasi $3$ titik yang dipilih dari $6$ titik.',
          solution:
            'Banyak cara memilih $3$ titik dari $6$ titik yang ada ($A, B, C, P, Q, R$) adalah:\n$$\\binom{6}{3} = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20.$$\nTiga titik tidak dapat membentuk segitiga jika dan hanya jika ketiganya segaris (kolinear). Karena $P, Q, R$ adalah titik tengah masing-masing sisi $\\triangle ABC$, satu-satunya kelompok $3$ titik yang segaris adalah ketiga sisi segitiga $ABC$ itu sendiri (yaitu satu sisi memuat dua titik sudut dan satu titik tengahnya, misalnya pada sisi $AB$, sisi $BC$, dan sisi $CA$), sehingga ada $3$ kelompok titik segaris.\n\nJadi banyak segitiga yang dapat dibentuk adalah:\n$$20 - 3 = 17.$$',
          rubric: [
            { code: 'M1', text: 'Menghitung $\\binom{6}{3} = 20$ dan mengidentifikasi $3$ tripel titik segaris.' },
            { code: 'A1', text: 'Memperoleh $17$ segitiga.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'Diketahui dua bilangan yang merupakan faktor dari $192$. Jika selisih dua bilangan tersebut adalah $16$, dan selisih hasil bagi $192$ dengan masing-masing bilangan tersebut adalah $2$, maka jumlah dua bilangan tersebut adalah $\\ldots$',
          answer: '$80$',
          principle:
            'Daftar pasangan faktor dari $192$ atau gunakan persamaan hasil kali $xy$ dari selisih kedua bilangan dan selisih hasil baginya.',
          solution:
            'Misalkan kedua faktor positif dari $192$ tersebut adalah $x$ dan $y$ dengan $x > y$. Diketahui:\n$$x - y = 16 \\qquad \\text{dan} \\qquad \\frac{192}{y} - \\frac{192}{x} = 2.$$\nSederhanakan persamaan kedua:\n$$192 \\cdot \\frac{x - y}{xy} = 2 \\implies 192 \\cdot \\frac{16}{xy} = 2 \\implies xy = 96 \\times 16 = 1536.$$\nFaktor-faktor positif dari $192$ adalah $1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 192$. Pasangan faktor yang berselisih $16$ dan hasil kalinya $1536$ adalah $x = 48$ dan $y = 32$ (periksa: $192 \\div 32 - 192 \\div 48 = 6 - 4 = 2$).\nJadi jumlah kedua bilangan tersebut adalah:\n$$48 + 32 = 80.$$',
          rubric: [
            { code: 'M1', text: 'Menemukan kedua faktor adalah $48$ dan $32$ dari syarat selisih $16$ dan selisih hasil bagi $2$.' },
            { code: 'A1', text: 'Menghitung jumlah $48 + 32 = 80$.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'Pak Amir memiliki kolam ikan berbentuk persegi yang diperluas ke arah Timur dan Utara sejauh $2\\text{ meter}$ seperti gambar di samping. Jika luas kolam ikan Pak Amir bertambah $44\\%$ dari luas semula, maka luas kolam ikan semula adalah $\\ldots\\text{ m}^2$.',
          figures: [
            {
              src: '/papers/osnp-mat-sd-2023/fig-12.webp',
              alt: 'Persegi kolam ikan awal di dalam persegi yang lebih besar karena diperluas dua meter ke kanan dan dua meter ke atas.',
              caption: 'Perluasan kolam ikan persegi Pak Amir sejauh 2 m ke Timur dan Utara.'
            }
          ],
          answer: '$100$',
          principle:
            'Pertambahan luas persegi sebesar $44\\%$ berarti luas baru menjadi $1{,}44$ kali luas semula, sehingga panjang sisinya menjadi $\\sqrt{1{,}44} = 1{,}2$ kali sisi semula.',
          solution:
            'Misalkan panjang sisi kolam semula adalah $s\\text{ meter}$, sehingga luas semula $L = s^2$. Setelah diperluas $2\\text{ m}$ ke arah Timur (kanan) dan $2\\text{ m}$ ke arah Utara (atas), kolam tetap berbentuk persegi dengan sisi $(s + 2)\\text{ meter}$.\nKarena luas bertambah $44\\%$, luas kolam baru adalah $144\\% = 1{,}44$ kali luas semula:\n$$(s + 2)^2 = 1{,}44 s^2.$$\nTarik akar kuadrat kedua ruas (karena $s > 0$):\n$$s + 2 = 1{,}2 s \\implies 0{,}2 s = 2 \\implies s = \\frac{2}{0{,}2} = 10\\text{ m}.$$\nJadi luas kolam ikan semula adalah:\n$$s^2 = 10^2 = 100\\text{ m}^2.$$',
          rubric: [
            { code: 'M1', text: 'Menyusun persamaan $(s + 2)^2 = 1{,}44 s^2$ hingga memperoleh sisi semula $s = 10\\text{ m}$.' },
            { code: 'A1', text: 'Menghitung luas kolam semula $100\\text{ m}^2$.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Luki bersepeda dari pos A ke pos D melalui pos B dan pos C tanpa berhenti. Data jarak, waktu tempuh, dan kecepatan rata-rata pada tiap trayek disajikan dalam tabel berikut:\n\n| Trayek | Jarak (km) | Waktu tempuh (menit) | Kecepatan rata-rata (km/jam) |\n|---|---:|---:|---:|\n| A ke B | $5{,}25$ | $X$ | $21$ |\n| B ke C | $6{,}4$ | $32$ | $Y$ |\n| C ke D | $Z$ | $13$ | $18$ |\n\nKecepatan rata-rata Luki bersepeda dari pos A ke pos D adalah $\\ldots\\text{ km/jam}$.',
          answer: '$15{,}55$',
          principle:
            'Kecepatan rata-rata keseluruhan adalah total jarak dibagi total waktu (bukan rata-rata dari ketiga kecepatan).',
          solution:
            'Lengkapi nilai $X$ dan $Z$ pada tabel (nilai $Y$ tidak diperlukan untuk jarak/waktu total, yaitu $Y = 6{,}4 \\div \\frac{32}{60} = 12\\text{ km/jam}$):\n- Pada trayek A ke B:\n  $$X = \\frac{5{,}25}{21}\\text{ jam} = 0{,}25\\text{ jam} = 15\\text{ menit}.$$\n- Pada trayek C ke D:\n  $$Z = 18 \\times \\frac{13}{60} = \\frac{234}{60} = 3{,}9\\text{ km}.$$\n\nHitung total jarak dan total waktu tempuh dari pos A ke pos D:\n- Total jarak $= 5{,}25 + 6{,}4 + 3{,}9 = 15{,}55\\text{ km}$.\n- Total waktu $= 15 + 32 + 13 = 60\\text{ menit} = 1\\text{ jam}$.\n\nJadi kecepatan rata-rata Luki dari pos A ke pos D adalah:\n$$\\bar{v} = \\frac{15{,}55\\text{ km}}{1\\text{ jam}} = 15{,}55\\text{ km/jam}.$$',
          rubric: [
            { code: 'M1', text: 'Menghitung $X = 15$ menit, $Z = 3{,}9\\text{ km}$, total jarak $15{,}55\\text{ km}$, dan total waktu $60$ menit ($1$ jam).' },
            { code: 'A1', text: 'Memperoleh kecepatan rata-rata $15{,}55\\text{ km/jam}$.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Sebuah bilangan ratusan $abc$ memenuhi kondisi berikut:\n1) $a$, $b$ dan $c$ berbeda dan lebih dari $2$;\n2) $a$ kelipatan dari $b$ atau sebaliknya, atau $a$ dan $b$ berbeda $3$;\n3) $b$ kelipatan dari $c$ atau sebaliknya, atau $b$ dan $c$ berbeda $3$;\nBanyak bilangan $abc$ yang mungkin adalah $\\ldots$',
          answer: '$10$',
          principle:
            'Karena $b$ terhubung ke $a$ dan $c$ dengan aturan yang sama, kelompokkan kemungkinan berdasarkan angka puluhan $b \\in \\{3, 4, 5, 6, 7, 8, 9\\}$.',
          solution:
            'Setiap angka berasal dari himpunan $\\{3, 4, 5, 6, 7, 8, 9\\}$ dan ketiganya harus berbeda ($a \\neq b$, $b \\neq c$, $a \\neq c$). Dua angka berbeda dikatakan cocok jika yang satu kelipatan lainnya atau selisihnya $3$.\n\nDaftar angka yang cocok dengan tiap nilai $b$:\n- $b = 3$: cocok dengan $6$ (kelipatan/selisih $3$) dan $9$ (kelipatan) $\\implies (a, c) \\in \\{(6,9), (9,6)\\}$ ($2$ bilangan: $639, 936$).\n- $b = 4$: cocok dengan $7$ (selisih $3$) dan $8$ (kelipatan) $\\implies (a, c) \\in \\{(7,8), (8,7)\\}$ ($2$ bilangan: $748, 847$).\n- $b = 5$: hanya cocok dengan $8$ (selisih $3$), sehingga tidak ada dua angka berbeda untuk $a$ dan $c$ ($0$ bilangan).\n- $b = 6$: cocok dengan $3$ dan $9$ $\\implies (a, c) \\in \\{(3,9), (9,3)\\}$ ($2$ bilangan: $369, 963$).\n- $b = 7$: hanya cocok dengan $4$ (selisih $3$) ($0$ bilangan).\n- $b = 8$: cocok dengan $4$ (faktor) dan $5$ (selisih $3$) $\\implies (a, c) \\in \\{(4,5), (5,4)\\}$ ($2$ bilangan: $485, 584$).\n- $b = 9$: cocok dengan $3$ (faktor) dan $6$ (selisih $3$) $\\implies (a, c) \\in \\{(3,6), (6,3)\\}$ ($2$ bilangan: $396, 693$).\n\nTotal bilangan ratusan $abc$ yang mungkin adalah:\n$$2 + 2 + 0 + 2 + 0 + 2 + 2 = 10.$$',
          rubric: [
            { code: 'M1', text: 'Mencacah pasangan angka yang cocok dengan setiap nilai tengah $b \\in \\{3, 4, 5, 6, 7, 8, 9\\}$.' },
            { code: 'A1', text: 'Memperoleh total $10$ bilangan.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Masing-masing bidang sisi suatu balok memiliki luas $12$, $36$, dan $48\\text{ cm}^2$. Panjang diagonal ruang balok tersebut adalah $\\ldots\\text{ cm}$.',
          answer: '$13$',
          principle:
            'Kalikan ketiga luas sisi $(ab)(bc)(ac) = (abc)^2$ untuk memperoleh volume balok, lalu tentukan panjang, lebar, dan tingginya untuk menghitung $\\sqrt{a^2 + b^2 + c^2}$.',
          solution:
            'Misalkan ukuran panjang, lebar, dan tinggi balok adalah $p$, $l$, dan $t$ dalam $\\text{cm}$. Diketahui:\n$$pl = 12, \\qquad lt = 36, \\qquad pt = 48.$$\nKalikan ketiga persamaan:\n$$(pl)(lt)(pt) = 12 \\times 36 \\times 48 \\implies (plt)^2 = 20.736 = 144^2 \\implies plt = 144.$$\nDari nilai $plt = 144$, diperoleh masing-masing rusuk:\n$$t = \\frac{144}{12} = 12\\text{ cm}, \\qquad p = \\frac{144}{36} = 4\\text{ cm}, \\qquad l = \\frac{144}{48} = 3\\text{ cm}.$$\nPanjang diagonal ruang balok adalah:\n$$d = \\sqrt{p^2 + l^2 + t^2} = \\sqrt{4^2 + 3^2 + 12^2} = \\sqrt{16 + 9 + 144} = \\sqrt{169} = 13\\text{ cm}.$$',
          rubric: [
            { code: 'M1', text: 'Menentukan rusuk balok $p = 4$, $l = 3$, dan $t = 12\\text{ cm}$ dari $plt = 144$.' },
            { code: 'A1', text: 'Menghitung diagonal ruang $\\sqrt{169} = 13\\text{ cm}$.' }
          ]
        },
        {
          label: '16',
          marks: 2,
          prompt:
            'Perhatikan tabel berikut:\n\n| Kelompok | Banyak Anggota | Rata-rata Tinggi Badan (cm) |\n|---|---:|---:|\n| A | 4 | 134 |\n| B | 6 | 128 |\n\nSeorang anak dari kelompok A dan seorang anak dari kelompok B bertukar posisi kelompok sehingga rata-rata tinggi badan kedua kelompok tersebut berbeda $1\\text{ cm}$. Jika tinggi badan (dalam cm) setiap anak adalah bilangan bulat, maka selisih tinggi badan kedua anak yang bertukar posisi kelompok tersebut adalah $\\ldots\\text{ cm}$.',
          answer: '$12$',
          principle:
            'Gunakan perubahan rata-rata tiap kelompok akibat pertukaran satu anggota dan syarat bahwa selisih tinggi badan harus berupa bilangan bulat.',
          solution:
            'Jumlah tinggi badan mula-mula:\n- Kelompok A: $4 \\times 134 = 536\\text{ cm}$.\n- Kelompok B: $6 \\times 128 = 768\\text{ cm}$.\n\nMisalkan anak dari kelompok A bertinggi $a\\text{ cm}$ bertukar dengan anak dari kelompok B bertinggi $b\\text{ cm}$, dan misalkan $d = b - a$ (bilangan bulat).\nRata-rata baru masing-masing kelompok menjadi:\n- $\\bar{x}_A\' = \\frac{536 + d}{4} = 134 + \\frac{d}{4}$,\n- $\\bar{x}_B\' = \\frac{768 - d}{6} = 128 - \\frac{d}{6}$.\n\nKarena selisih kedua rata-rata baru adalah $1\\text{ cm}$:\n$$\\left|\\left(134 + \\frac{d}{4}\\right) - \\left(128 - \\frac{d}{6}\\right)\\right| = 1 \\implies \\left|6 + \\frac{5d}{12}\\right| = 1.$$\nAda dua kemungkinan:\n1. $6 + \\frac{5d}{12} = 1 \\implies \\frac{5d}{12} = -5 \\implies d = -12$ (bilangan bulat, memenuhi).\n2. $6 + \\frac{5d}{12} = -1 \\implies \\frac{5d}{12} = -7 \\implies d = -\\frac{84}{5} = -16{,}8$ (bukan bilangan bulat, tidak memenuhi).\n\nJadi selisih tinggi badan kedua anak tersebut adalah $|a - b| = |d| = 12\\text{ cm}$.',
          rubric: [
            { code: 'M1', text: 'Menyusun persamaan $\\left|6 + \\frac{5(b - a)}{12}\\right| = 1$ dan menyaring solusi bilangan bulat.' },
            { code: 'A1', text: 'Menemukan selisih tinggi badan $12\\text{ cm}$.' }
          ]
        },
        {
          label: '17',
          marks: 2,
          prompt: 'Faktor terbesar dari $2023$ yang kurang dari $2023$ adalah $\\ldots$',
          answer: '$289$',
          principle:
            'Faktor sejati terbesar suatu bilangan bulat positif adalah hasil bagi bilangan tersebut dengan faktor prima terkecilnya.',
          solution:
            'Faktorkan $2023$ menjadi perkalian faktor prima:\n$$2023 = 7 \\times 289 = 7 \\times 17^2.$$\nFaktor prima terkecil dari $2023$ adalah $7$, sehingga faktor terbesar dari $2023$ yang kurang dari $2023$ adalah:\n$$\\frac{2023}{7} = 289.$$',
          rubric: [
            { code: 'M1', text: 'Memfaktorkan $2023 = 7 \\times 17^2$ dan mengenali faktor prima terkecilnya adalah $7$.' },
            { code: 'A1', text: 'Menghitung $2023 \\div 7 = 289$.' }
          ]
        },
        {
          label: '18',
          marks: 2,
          prompt:
            'Petak-petak $A, B, C, D, E, F, G, H, I,$ dan $J$ pada gambar di samping akan diisi dengan bilangan cacah berbeda sehingga jumlah bilangan dari petak-petak yang segaris adalah $19$. Jika petak $D$ diisi bilangan $7$ dan petak-petak yang lain diisi bilangan yang kurang dari $10$, maka jumlah minimum dari bilangan pada petak $A, B,$ dan $C$ adalah $\\ldots$',
          figures: [
            {
              src: '/papers/osnp-mat-sd-2023/fig-18.webp',
              alt: 'Diagram sepuluh petak berhuruf A sampai J dengan satu baris mendatar lima petak dan dua kolom menurun yang masing-masing berjumlah sembilan belas.',
              caption: 'Susunan petak A sampai J dengan jumlah tiap garis 19.'
            }
          ],
          answer: '$6$',
          principle:
            'Kesepuluh bilangan cacah berbeda yang kurang dari $10$ tepat menggunakan semua angka $0$ sampai $9$; jumlahkan seluruh garis untuk mengunci nilai petak perpotongan $B$.',
          solution:
            'Ada $10$ petak ($A$ sampai $J$) dan semuanya diisi bilangan cacah berbeda kurang dari $10$, artinya kesepuluh petak tepat menggunakan seluruh angka $\\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\\}$ yang jumlahnya:\n$$0 + 1 + 2 + \\cdots + 9 = 45.$$\nJumlahkan ketiga garis segaris pada diagram:\n$$(A + B + C + D + E) + (B + F + G + H) + (D + I + J) = 19 + 19 + 19 = 57.$$\nKarena $B$ dan $D$ masing-masing terhitung dua kali sedangkan delapan huruf lainnya terhitung satu kali, diperoleh:\n$$(A + B + C + D + E + F + G + H + I + J) + B + D = 57 \\implies 45 + B + D = 57 \\implies B + D = 12.$$\nDiketahui $D = 7$, sehingga $B = 12 - 7 = 5$.\n\nUntuk meminimumkan $A + B + C$ dengan $B = 5$, pilih $A$ dan $C$ sekecil mungkin dari bilangan cacah tersisa selain $5$ dan $7$, yaitu $0$ dan $1$:\n$$A + B + C \\ge 0 + 5 + 1 = 6.$$\nNilai $6$ dapat dicapai, misalnya dengan $(A, B, C, D, E) = (0, 5, 1, 7, 6)$, $(F, G, H) = (2, 3, 9)$, dan $(I, J) = (4, 8)$ (masing-masing garis berjumlah $0+5+1+7+6 = 19$, $5+2+3+9 = 19$, dan $7+4+8 = 19$). Jadi jumlah minimumnya adalah $6$.',
          rubric: [
            {
              code: 'M1',
              text: 'Menjumlahkan ketiga garis untuk memperoleh $45 + B + D = 57$ sehingga $B = 5$, serta memberikan konstruksi yang valid.'
            },
            { code: 'A1', text: 'Menyimpulkan nilai minimum $A + B + C = 6$.' }
          ]
        },
        {
          label: '19',
          marks: 2,
          prompt:
            'Data pengunjung suatu taman bermain untuk setiap wahana pada hari Sabtu dan Minggu disajikan dalam diagram di samping. Persentase kenaikan tertinggi jumlah pengunjung terjadi pada wahana $\\ldots$',
          figures: [
            {
              src: '/papers/osnp-mat-sd-2023/fig-19.webp',
              alt: 'Diagram batang horizontal perbandingan jumlah pengunjung delapan wahana taman bermain pada hari Sabtu dan hari Minggu.',
              caption: 'Data pengunjung delapan wahana pada hari Sabtu dan Minggu.'
            }
          ],
          answer: 'Ontang-anting',
          principle:
            'Persentase kenaikan dihitung sebagai rasio selisih pengunjung (Minggu dikurangi Sabtu) terhadap jumlah pengunjung awal (hari Sabtu).',
          solution:
            'Hitung persentase kenaikan $\\frac{\\text{Minggu} - \\text{Sabtu}}{\\text{Sabtu}} \\times 100\\%$ untuk setiap wahana:\n- **Ontang-anting**: $\\frac{195 - 145}{145} = \\frac{50}{145} = \\frac{10}{29} \\approx 34{,}48\\%$\n- **Bianglala**: $\\frac{315 - 255}{255} = \\frac{60}{255} = \\frac{4}{17} \\approx 23{,}53\\%$\n- **Kicir-kicir**: $\\frac{255 - 230}{230} = \\frac{25}{230} = \\frac{5}{46} \\approx 10{,}87\\%$\n- **Halilintar**: $\\frac{200 - 150}{150} = \\frac{50}{150} = \\frac{1}{3} \\approx 33{,}33\\%$\n- **Istana Boneka**: $\\frac{475 - 400}{400} = \\frac{75}{400} = \\frac{3}{16} = 18{,}75\\%$\n- **Tornado**: $\\frac{255 - 200}{200} = \\frac{55}{200} = 27{,}50\\%$\n- **Niaga gara**: $\\frac{275 - 250}{250} = \\frac{25}{250} = 10{,}00\\%$\n- **Kora-kora**: $\\frac{350 - 300}{300} = \\frac{50}{300} = \\frac{1}{6} \\approx 16{,}67\\%$\n\nPerhatikan Ontang-anting dan Halilintar sama-sama naik $50$ pengunjung, tetapi basis hari Sabtu pada Ontang-anting ($145$) lebih kecil daripada Halilintar ($150$), sehingga persentase kenaikan tertinggi terjadi pada **Ontang-anting**.',
          rubric: [
            {
              code: 'M1',
              text: 'Membandingkan rasio kenaikan terhadap pengunjung hari Sabtu (khususnya $\\frac{50}{145}$ vs $\\frac{50}{150}$ dan wahana lain).'
            },
            { code: 'A1', text: 'Menentukan wahana Ontang-anting sebagai yang tertinggi.' }
          ]
        },
        {
          label: '20',
          marks: 2,
          prompt:
            'Perhatikan petak $4 \\times 4$ yang berisi angka-angka berikut. Aris mewarnai $3$ petak yang saling bersisian (memiliki dua pasang petak yang sisinya berimpit) sehingga membentuk bilangan ratusan yang habis dibagi $4$. Banyak susunan berbeda yang dapat dibuat oleh Aris adalah $\\ldots$',
          figures: [
            {
              src: '/papers/osnp-mat-sd-2023/fig-20a.webp',
              alt: 'Petak berukuran empat kali empat yang setiap kotaknya berisi satu angka satuan dari nol sampai sembilan.',
              caption: 'Petak 4 × 4 berisi angka-angka.'
            },
            {
              src: '/papers/osnp-mat-sd-2023/fig-20b.webp',
              alt: 'Ilustrasi contoh tiga petak bersisian ditandai warna kuning dan contoh tiga petak tidak bersisian ditandai warna biru.',
              caption: 'Contoh 3 petak bersisian (kuning) dan 3 petak yang tidak bersisian (biru).'
            }
          ],
          answer: '$25$',
          principle:
            'Suatu bilangan ratusan habis dibagi $4$ jika dua digit terakhirnya habis dibagi $4$; periksa seluruh susunan $3$ petak bersisian (bentuk lurus $3$ petak atau bentuk L) yang memuat minimal satu angka genap.',
          solution:
            'Gunakan koordinat $(b, k)$ dengan baris $b \\in \\{1, 2, 3, 4\\}$ dari atas dan kolom $k \\in \\{1, 2, 3, 4\\}$ dari kiri. Angka genap hanya ada di empat petak: $(1,2)=2$, $(2,2)=4$, $(3,2)=6$, dan $(3,3)=0$. Agar $3$ petak bersisian dapat membentuk bilangan ratusan kelipatan $4$, ketiga petak harus memuat minimal satu angka genap dan dua angkanya dapat disusun menjadi kelipatan $4$.\n\nDaftar seluruh susunan $3$ petak bersisian yang memenuhi (dikelompokkan berdasarkan angka genap yang termuat):\n1. **Hanya memuat $2$ (tanpa $4, 6, 0$)** ($4$ susunan):\n   - $(1,1),(1,2),(1,3)$ berangka $\\{1,2,5\\}$ ($152, 512$);\n   - $(1,1),(1,2),(2,1)$ berangka $\\{1,2,5\\}$ ($152, 512$);\n   - $(1,2),(1,3),(1,4)$ berangka $\\{2,5,9\\}$ ($592, 952$);\n   - $(1,2),(1,3),(2,3)$ berangka $\\{2,5,5\\}$ ($552$).\n2. **Memuat $4$ tanpa $6$ maupun $0$** ($4$ susunan — perhatikan $\\{4,5,5\\}$ tidak dapat membentuk kelipatan $4$):\n   - $(1,1),(1,2),(2,2)$ berangka $\\{1,2,4\\}$ ($124, 412$);\n   - $(1,2),(1,3),(2,2)$ berangka $\\{2,5,4\\}$ ($452, 524$);\n   - $(1,2),(2,1),(2,2)$ berangka $\\{2,5,4\\}$ ($452, 524$);\n   - $(1,2),(2,2),(2,3)$ berangka $\\{2,4,5\\}$ ($452, 524$).\n3. **Memuat $4$ bersama $6$ atau $0$** ($7$ susunan):\n   - $(1,2),(2,2),(3,2)$ berangka $\\{2,4,6\\}$ ($264, 624$);\n   - $(2,1),(2,2),(3,2)$ berangka $\\{5,4,6\\}$ ($456, 564$);\n   - $(2,2),(2,3),(3,2)$ berangka $\\{4,5,6\\}$ ($456, 564$);\n   - $(2,2),(3,1),(3,2)$ berangka $\\{4,7,6\\}$ ($476, 764$);\n   - $(2,2),(3,2),(4,2)$ berangka $\\{4,6,7\\}$ ($476, 764$);\n   - $(2,2),(2,3),(3,3)$ berangka $\\{4,5,0\\}$ ($504, 540$);\n   - $(2,2),(3,2),(3,3)$ berangka $\\{4,6,0\\}$ ($460, 604, 640$).\n4. **Memuat $6$ tanpa $4$** ($10$ susunan):\n   - $(2,1),(3,1),(3,2)$ berangka $\\{5,7,6\\}$ ($576, 756$);\n   - $(3,1),(3,2),(4,1)$ berangka $\\{7,6,1\\}$ ($176, 716$);\n   - $(3,1),(3,2),(4,2)$ berangka $\\{7,6,7\\}$ ($776$);\n   - $(3,2),(4,1),(4,2)$ berangka $\\{6,1,7\\}$ ($176, 716$);\n   - $(3,2),(4,2),(4,3)$ berangka $\\{6,7,3\\}$ ($376, 736$);\n   - $(2,3),(3,2),(3,3)$ berangka $\\{5,6,0\\}$ ($560$);\n   - $(3,1),(3,2),(3,3)$ berangka $\\{7,6,0\\}$ ($760$);\n   - $(3,2),(3,3),(3,4)$ berangka $\\{6,0,9\\}$ ($960$);\n   - $(3,2),(3,3),(4,2)$ berangka $\\{6,0,7\\}$ ($760$);\n   - $(3,2),(3,3),(4,3)$ berangka $\\{6,0,3\\}$ ($360$).\n\nSusunan $3$ petak yang hanya memuat $0$ bersama angka ganjil $\\{5, 9, 3\\}$ tidak dapat membentuk kelipatan $4$ karena $50, 90,$ dan $30$ tidak habis dibagi $4$, sedangkan susunan yang seluruhnya angka ganjil juga tidak memenuhi.\n\nJadi total susunan berbeda yang dapat dibuat Aris adalah:\n$$4 + 4 + 7 + 10 = 25\\ \\text{susunan}.$$\n*(Jika dihitung sebagai bilangan ratusan kelipatan $4$ yang berbeda tanpa membedakan posisi petaknya, ke-$25$ susunan tersebut menghasilkan $31$ bilangan berbeda.)*',
          rubric: [
            {
              code: 'M1',
              text: 'Menggunakan syarat keterbagian $4$ dan mencacah susunan $3$ petak bersisian yang memuat angka genap $\\{2, 4, 6, 0\\}$.'
            },
            { code: 'A1', text: 'Memperoleh total $25$ susunan $3$ petak yang memenuhi.' }
          ]
        }
      ]
    }
  ]
};
