/**
 * Paket Soal Terstruktur: Latihan Soal OSN IPA SD — Paket 1 (27 soal pilihan ganda)
 * Sumber: Latihan Soal OSN IPA SD.pdf (30 soal asli; nomor 12, 13, dan 14 dilewati karena halaman 4 pada pindaian kosong/hilang).
 * Penomoran label butir soal mengikuti nomor asli (1–11 dan 15–30), bahasa sumber dipertahankan,
 * dan soal bergambar/grafik/tabel dinyatakan ulang secara tekstual.
 */
export default {
  id: 'osn-ipa-sd-latihan-1',
  slug: 'osn-ipa-sd-latihan-1',
  subject: 'olimpiade-sains',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'Latihan Soal OSN IPA SD: biologi tumbuhan & manusia, ekologi, metode ilmiah, mekanika, kalor & wujud zat, gelombang, optik, magnet, tata surya, dan cuaca',
  relatedChapterIds: [
    'ipa4-bab1-wujud-zat-dan-perubahannya',
    'ipa4-bab2-gaya-di-sekitar-kita',
    'ipa4-bab3-energi-dan-perubahannya',
    'ipa4-bab4-pancaindra-dan-pengamatan-ilmiah',
    'ipa5-bab1-cahaya-dan-sifatnya',
    'ipa5-bab2-bunyi-dan-pendengaran',
    'ipa5-bab3-listrik-dan-magnet-sederhana',
    'ipa5-bab4-ekosistem-dan-siklus-air',
    'ipa6-bab1-rangka-dan-mekanika-gerak-tubuh',
    'ipa6-bab3-sistem-tata-surya'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'Latihan Soal OSN IPA SD — Paket 1',
  totalMarks: 27,
  instructions:
    'Kerjakan seluruh 27 soal pilihan ganda berikut (masing-masing bernilai 1 poin; total 27 poin). Penomoran butir soal mengikuti nomor asli naskah (1–11 dan 15–30). Dari 30 soal pada naskah sumber, sebanyak 3 soal (nomor 12, 13, dan 14) dilewati karena halaman 4 pada pindaian naskah (osn-ipa-sd-latihan-1_p4.png) kosong/hilang. Soal yang memuat gambar, grafik, atau tabel dinyatakan ulang secara lengkap dalam teks.',
  source: {
    org: 'OSN-K',
    file: 'Latihan Soal OSN IPA SD.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 27,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (27 soal pilihan ganda; masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Berikut ini yang tidak mempengaruhi proses transpirasi pada tumbuhan adalah ...\n\nA. jumlah floem yang terkandung di dalam tumbuhan\nB. keberadaan lapisan kutikula pada daun\nC. ukuran, posisi dan jumlah stomata pada daun\nD. intensitas cahaya yang didapatkan tumbuhan',
          answer: 'A. jumlah floem yang terkandung di dalam tumbuhan',
          principle:
            'Transpirasi adalah penguapan air melalui bagian tumbuhan (terutama stomata daun) yang dipengaruhi struktur daun dan faktor lingkungan, sedangkan floem berfungsi mengangkut hasil fotosintesis.',
          solution:
            'Transpirasi merupakan proses keluarnya uap air dari tubuh tumbuhan ke atmosfer, terutama melalui stomata di daun (dan sedikit melalui kutikula).\n- Keberadaan lapisan kutikula yang tebal menghambat penguapan air (mempengaruhi transpirasi).\n- Ukuran, posisi, dan jumlah stomata secara langsung menentukan laju keluarnya uap air.\n- Intensitas cahaya memicu pembukaan stomata dan meningkatkan suhu daun sehingga mempercepat transpirasi.\n- Sebaliknya, floem (pembuluh tapis) berperan mengangkut zat makanan hasil fotosintesis dari daun ke seluruh bagian tumbuhan, bukan mengatur penguapan air. Jadi jumlah floem tidak mempengaruhi proses transpirasi.',
          rubric: [{ code: 'A1', text: 'Memilih opsi A (jumlah floem yang terkandung di dalam tumbuhan).' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Rina mengendarai mobil dengan kecepatan $20\\text{ m/s}$ seperti pada gambar berikut (gambar menunjukkan sebuah mobil melaju dengan panah berlabel $V = 20\\text{ m/s}$).\n\nJika perjalanan Rina menempuh jarak $4{,}8\\text{ km}$, maka waktu yang diperlukan Rina untuk sampai ke tujuan adalah...\n\nA. 2,0 menit\nB. 2,4 menit\nC. 4,0 menit\nD. 4,2 menit',
          answer: 'C. 4,0 menit',
          principle:
            'Pada gerak lurus beraturan, waktu tempuh adalah jarak dibagi kelajuan ($t = \\frac{s}{v}$), dengan satuan panjang dan waktu disamakan terlebih dahulu.',
          solution:
            'Diketahui:\n- Kelajuan mobil $v = 20\\text{ m/s}$\n- Jarak tempuh $s = 4{,}8\\text{ km} = 4{,}8 \\times 1000\\text{ m} = 4800\\text{ m}$\n\nWaktu tempuh dalam detik:\n$$t = \\frac{s}{v} = \\frac{4800\\text{ m}}{20\\text{ m/s}} = 240\\text{ s}$$\nKonversi ke menit:\n$$t = \\frac{240}{60} = 4{,}0\\text{ menit}$$',
          rubric: [{ code: 'A1', text: 'Menghitung waktu tempuh $240\\text{ s} = 4{,}0\\text{ menit}$ dan memilih opsi C.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Apakah peran yang dilakukan oleh vena pulmonalis pada sistem sirkulasi ...\n\nA. membawa darah miskin karbondioksida keluar jantung\nB. membawa darah kaya karbondioksida dari organ tubuh\nC. membawa darah miskin karbondioksida menuju jantung\nD. membawa darah kaya karondioksida keluar jantung',
          answer: 'C. membawa darah miskin karbondioksida menuju jantung',
          principle:
            'Semua pembuluh vena mengalirkan darah menuju jantung; vena pulmonalis mengalirkan darah dari paru-paru yang kaya oksigen (miskin karbon dioksida) ke serambi kiri jantung.',
          solution:
            'Dalam sistem peredaran darah kecil (pulmonal), darah yang telah melepaskan $\\text{CO}_2$ dan mengikat $\\text{O}_2$ di alveolus paru-paru dialirkan kembali menuju serambi (atrium) kiri jantung melalui **vena pulmonalis**.\n- Pembuluh **vena** selalu membawa darah **menuju jantung** (sehingga opsi A dan D salah).\n- Karena berasal dari paru-paru setelah pertukaran gas, darah pada vena pulmonalis kaya $\\text{O}_2$ dan **miskin karbondioksida** (sehingga opsi B salah).',
          rubric: [{ code: 'A1', text: 'Memilih opsi C (membawa darah miskin karbondioksida menuju jantung).' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Sebuah beban digantungkan pada katrol bebas seperti pada gambar berikut (diagram menunjukkan satu katrol bergerak yang menopang beban $w$ di bagian tengahnya; satu ujung tali diikat tetap pada penopang di atas, melingkari bagian bawah katrol, dan ujung tali lainnya ditarik ke atas dengan gaya $F$).\n\nJika berat beban adalah $20\\text{ N}$, maka besar gaya $F$ minimum untuk mengangkat benda adalah ...\n\nA. 10 N\nB. 20 N\nC. 30 N\nD. 40 N',
          answer: 'A. 10 N',
          principle:
            'Katrol bebas tunggal ditopang oleh dua segmen tali yang sama tegangannya sehingga memiliki keuntungan mekanis $KM = 2$, yaitu $F = \\frac{w}{2}$.',
          solution:
            'Pada katrol bebas (katrol bergerak) tunggal ideal, berat beban $w$ ditahan secara merata oleh dua bagian tali di kiri dan kanan katrol. Karena keuntungan mekanisnya $KM = 2$, gaya kuasa minimum $F$ yang diperlukan adalah:\n$$F = \\frac{w}{2} = \\frac{20\\text{ N}}{2} = 10\\text{ N}$$',
          rubric: [{ code: 'A1', text: 'Menghitung gaya kuasa $10\\text{ N}$ dan memilih opsi A.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Organ yang berperan dalam pencernaan lemak adalah ...\n\nA. mulut\nB. esofagus\nC. lambung\nD. usus halus',
          answer: 'D. usus halus',
          principle:
            'Pencernaan lemak secara utama berlangsung di usus halus dengan bantuan cairan empedu (mengemulsikan lemak) dan enzim lipase pankreas (mengubah lemak menjadi asam lemak dan gliserol).',
          solution:
            'Proses pencernaan lemak terutama terjadi di **usus halus** (khususnya usus dua belas jari/duodenum). Di sana, garam empedu dari hati mengemulsikan butiran lemak menjadi tetesan kecil, lalu enzim **lipase** dari pankreas memecah lemak menjadi asam lemak dan gliserol agar dapat diserap.\n- Di mulut, pencernaan kimiawi hanya memecah amilum oleh ptialin (amilase).\n- Esofagus hanya menyalurkan makanan ke lambung secara peristaltik.\n- Di lambung, pencernaan kimiawi terutama memecah protein oleh pepsin (dan menggumpalkan susu pada bayi oleh renin).',
          rubric: [{ code: 'A1', text: 'Memilih opsi D (usus halus).' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Perhatikan pernyataan dan grafik kecepatan terhadap waktu berikut.\n\n(Grafik $v\\text{ (m/s)}$ terhadap $t\\text{ (s)}$ menunjukkan: dari $t = 0\\text{ s}$ hingga $t = 4\\text{ s}$ berupa garis datar pada $v = 15\\text{ m/s}$; dari $t = 4\\text{ s}$ hingga $t = 6\\text{ s}$ berupa garis lurus naik dari $v = 15\\text{ m/s}$ menjadi $v = 20\\text{ m/s}$; dan dari $t = 6\\text{ s}$ hingga $t = 10\\text{ s}$ berupa garis lurus turun dari $v = 20\\text{ m/s}$ menjadi $v = 0\\text{ m/s}$.)\n\n(1) Benda bergerak dengan kecepatan tetap pada detik ke-0 hingga 4\n(2) Benda mengalami percepatan pada detik ke-4 hingga 6\n(3) Benda mengalami perlambatan pada detik ke-6 hingga 10\n(4) Benda tidak bergerak pada detik ke-0 hingga 4\n\nPernyataan yang benar berdasarkan grafik di atas adalah ...\n\nA. (1) dan (2)\nB. (3) dan (4)\nC. (1), (2) dan (3)\nD. (2), (3) dan (4)',
          answer: 'C. (1), (2) dan (3)',
          principle:
            'Pada grafik $v$–$t$: garis horizontal pada $v \\neq 0$ menunjukkan gerak lurus beraturan (kecepatan tetap), garis miring naik menunjukkan percepatan, dan garis miring turun menuju nol menunjukkan perlambatan.',
          solution:
            'Analisis tiap selang waktu pada grafik $v$–$t$:\n- $t = 0$ hingga $t = 4\\text{ s}$: grafik mendatar pada $v = 15\\text{ m/s} \\neq 0$. Artinya benda bergerak dengan kecepatan tetap (GLB), bukan diam. Maka pernyataan (1) benar dan (4) salah.\n- $t = 4$ hingga $t = 6\\text{ s}$: kecepatan naik dari $15\\text{ m/s}$ menjadi $20\\text{ m/s}$, sehingga benda mengalami percepatan ($a = \\frac{20-15}{6-4} = 2{,}5\\text{ m/s}^2$). Pernyataan (2) benar.\n- $t = 6$ hingga $t = 10\\text{ s}$: kecepatan turun dari $20\\text{ m/s}$ menjadi $0\\text{ m/s}$, sehingga benda mengalami perlambatan ($a = \\frac{0-20}{10-6} = -5\\text{ m/s}^2$). Pernyataan (3) benar.\n\nJadi pernyataan yang benar adalah (1), (2), dan (3).',
          rubric: [{ code: 'A1', text: 'Memilih opsi C ((1), (2) dan (3)).' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Jaringan ikat yang menjadi pembungkus sendi adalah ...\n\nA. tendon\nB. ligamen\nC. kartilago\nD. fasia',
          answer: 'B. ligamen',
          principle:
            'Ligamen adalah jaringan ikat fibrosa kuat yang menghubungkan antartulang sekaligus membungkus dan menstabilkan persendian.',
          solution:
            'Mari kita bedakan fungsi masing-masing jaringan:\n- **Ligamen**: jaringan ikat padat yang menghubungkan tulang dengan tulang pada persendian serta membungkus dan memperkuat sendi agar tulang tidak bergeser.\n- **Tendon**: jaringan ikat yang melekatkan otot pada tulang.\n- **Kartilago**: tulang rawan yang melapisi ujung-ujung tulang pada sendi untuk mengurangi gesekan.\n- **Fasia**: selaput jaringan ikat yang membungkus berkas otot.',
          rubric: [{ code: 'A1', text: 'Memilih opsi B (ligamen).' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Urutan planet-planet berikut yang merupakan bagian sistem tata surya dengan satelit alami paling banyak hingga paling sedikit adalah ...\n\nA. Bumi – Mars – Jupiter – Saturnus\nB. Saturnus – Jupiter – Mars – Bumi\nC. Jupiter – Saturnus – Mars – Bumi\nD. Mars – Bumi – Saturnus – Jupiter',
          answer: 'C. Jupiter – Saturnus – Mars – Bumi',
          principle:
            'Bumi memiliki $1$ satelit alami dan Mars memiliki $2$ satelit alami, sedangkan Jupiter dan Saturnus merupakan raksasa gas dengan puluhan hingga lebih dari seratus satelit alami.',
          solution:
            'Jumlah satelit alami Mars adalah $2$ (Phobos dan Deimos), sedangkan Bumi memiliki $1$ (Bulan), sehingga di bagian akhir urutannya pasti Mars lalu Bumi.\n\nMengikuti kunci jawaban resmi naskah latihan (yang disusun berdasarkan data buku ajar sebelum tahun 2019), urutan dari satelit alami terbanyak adalah **Jupiter – Saturnus – Mars – Bumi** (opsi C), karena saat itu Jupiter tercatat memiliki satelit terkonfirmasi terbanyak ($79$) dibandingkan Saturnus ($62$).\n\n*Catatan pembaruan sains terkini:* Sejak penemuan bulan-bulan baru pada tahun 2019–2023+, persatuan astronomi internasional mencatat Saturnus memiliki satelit alami terkonfirmasi lebih banyak daripada Jupiter, sehingga menurut data astronomi mutakhir urutannya menjadi Saturnus – Jupiter – Mars – Bumi (opsi B).',
          rubric: [{ code: 'A1', text: 'Memilih opsi C sesuai kunci resmi naskah (dengan pemahaman catatan pembaruan data satelit).' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Berikut ini yang **tidak** berperan dalam proses penyaringan, pelembapan, dan penghangatan udara yang masuk pada saluran pernapasan adalah ...\n\nA. rongga hidung\nB. trachea\nC. bronchus\nD. alveolus',
          answer: 'D. alveolus',
          principle:
            'Saluran penghantar udara (rongga hidung, trakea, bronkus) menyaring, melembapkan, dan menghangatkan udara dengan lendir dan silia, sedangkan alveolus khusus untuk pertukaran gas.',
          solution:
            'Rongga hidung (dilengkapi rambut hidung, selaput lendir, dan konka yang kaya pembuluh darah), trakea, dan bronkus (memiliki selaput lendir/mukosa dan silia) berfungsi menyaring debu/partikel, melembapkan, serta menyesuaikan suhu udara pernapasan.\n\nSebaliknya, **alveolus** merupakan gelembung-gelembung paru berdinding sangat tipis tanpa silia maupun kelenjar mukus yang berfungsi sebagai tempat pertukaran gas oksigen ($\\text{O}_2$) dan karbon dioksida ($\\text{CO}_2$) secara difusi.',
          rubric: [{ code: 'A1', text: 'Memilih opsi D (alveolus).' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Empat jenis cairan dengan massa jenis berbeda ditempatkan dalam sebuah wadah seperti pada gambar berikut.\n\n(Gambar menunjukkan sebuah wadah berisi empat lapisan cairan tidak saling bercampur yang tersusun vertikal dari atas ke bawah: lapisan paling atas $K$, lapisan kedua $L$, lapisan ketiga $M$, dan lapisan paling bawah $N$. Tabel massa jenis menunjukkan: Madu $= 1420\\text{ kg/m}^3$, Air $= 1000\\text{ kg/m}^3$, Minyak $= 800\\text{ kg/m}^3$, Sirup $= 1300\\text{ kg/m}^3$.)\n\nCairan yang tepat pada K, L, M dan N berturut-turut adalah ...\n\nA. Minyak, Air, Madu, Sirup\nB. Madu, Sirup, Air, Minyak\nC. Minyak, Air, Sirup, Madu\nD. Sirup, Minyak, Air, Madu',
          answer: 'C. Minyak, Air, Sirup, Madu',
          principle:
            'Pada fluida tak saling campur, cairan bermassa jenis lebih kecil selalu berada di lapisan atas, sedangkan cairan bermassa jenis lebih besar tenggelam ke lapisan bawah.',
          solution:
            'Urutkan keempat cairan dari massa jenis paling kecil (lapisan teratas $K$) hingga massa jenis paling besar (lapisan terbawah $N$):\n1. $K$: Minyak ($800\\text{ kg/m}^3$)\n2. $L$: Air ($1000\\text{ kg/m}^3$)\n3. $M$: Sirup ($1300\\text{ kg/m}^3$)\n4. $N$: Madu ($1420\\text{ kg/m}^3$)\n\nJadi K, L, M, dan N berturut-turut adalah Minyak, Air, Sirup, Madu.',
          rubric: [{ code: 'A1', text: 'Mengurutkan massa jenis dari kecil ke besar dan memilih opsi C.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Pernyataan di bawah ini menggambarkan hal-hal yang terjadi setelah darah keluar dari luka:\n1. Trombin dan fibrinogen bereaksi untuk membentuk fibrin\n2. Tromboplastin dilepas oleh trombosit\n3. Ca, tromboplastin, dan protrombin bereaksi membentuk trombin\n4. Trombosit pecah ketika bergesekan dengan pembuluh darah rusak\n\nUrutan proses pembekuan darah yang benar adalah ...\n\nA. 2-4-3-1\nB. 4-2-3-1\nC. 4-3-2-1\nD. 2-3-4-1',
          answer: 'B. 4-2-3-1',
          principle:
            'Mekanisme pembekuan darah berlangsung berurutan: pecahnya trombosit $\\rightarrow$ pelepasan tromboplastin $\\rightarrow$ pengubahan protrombin menjadi trombin $\\rightarrow$ pengubahan fibrinogen menjadi benang fibrin.',
          solution:
            'Tahapan pembekuan darah saat terjadi luka adalah sebagai berikut:\n1. (4) Trombosit pecah ketika bersentuhan/bergesekan dengan permukaan pembuluh darah yang rusak.\n2. (2) Trombosit yang pecah melepaskan enzim tromboplastin (trombokinase).\n3. (3) Dengan bantuan ion kalsium ($\\text{Ca}^{2+}$) dan vitamin K, tromboplastin mengubah protrombin menjadi trombin.\n4. (1) Trombin mengubah protein plasma fibrinogen menjadi benang-benang fibrin yang menjaring sel darah merah untuk menutup luka.\n\nUrutan yang benar adalah **4-2-3-1**.',
          rubric: [{ code: 'A1', text: 'Memilih opsi B (4-2-3-1).' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Pernyataan berikut adalah informasi bagian-bagian penyusun bunga,\nP : benang sari\nQ : putik\nR : mahkota\nS : kelopak\nT : tangkai bunga\n\nBagian yang dimiliki oleh bunga sempurna adalah ...\n\nA. P-Q\nB. Q-R\nC. S-T\nD. P-S',
          answer: 'A. P-Q',
          principle:
            'Bunga sempurna (bunga hermafrodit) adalah bunga yang memiliki dua alat perkembangbiakan generatif sekaligus, yaitu benang sari (jantan) dan putik (betina).',
          solution:
            'Dalam botani, suatu bunga disebut **bunga sempurna** apabila memiliki kedua organ reproduksi sekaligus, yaitu **benang sari** ($P$) dan **putik** ($Q$). (Adapun bunga yang memiliki seluruh bagian seperti kelopak, mahkota, benang sari, dan putik disebut bunga lengkap.) Jadi pasangan bagian yang mencirikan bunga sempurna adalah $P$-$Q$.',
          rubric: [{ code: 'A1', text: 'Memilih opsi A (P-Q).' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Perhatikan gambar berikut (gambar menunjukkan seekor burung mula-mula berada di posisi A pada ketinggian $16\\text{ m}$ di atas tanah datar, lalu terbang naik ke posisi B pada ketinggian $24\\text{ m}$ di atas tanah datar).\n\nSeekor burung mula-mula terbang pada ketinggian A, setelah beberapa saat burung tersebut terbang naik hingga ketinggian B. Jika massa burung $600\\text{ gram}$, maka perubahan energi potensial burung untuk berpindah dari posisi A ke B adalah ... ($g = 10\\text{ m/s}^2$)\n\nA. 48 Joule\nB. 96 Joule\nC. 144 Joule\nD. 240 Joule',
          answer: 'A. 48 Joule',
          principle:
            'Perubahan energi potensial gravitasi bergantung pada selisih ketinggian vertikal: $\\Delta E_p = m g (h_B - h_A)$ dengan massa dalam kilogram.',
          solution:
            'Diketahui:\n- Massa burung $m = 600\\text{ g} = 0{,}6\\text{ kg}$\n- Percepatan gravitasi $g = 10\\text{ m/s}^2$\n- Ketinggian awal $h_A = 16\\text{ m}$ dan ketinggian akhir $h_B = 24\\text{ m}$\n\nPerubahan energi potensial:\n$$\\Delta E_p = m \\times g \\times (h_B - h_A) = 0{,}6 \\times 10 \\times (24 - 16) = 6 \\times 8 = 48\\text{ Joule}$$',
          rubric: [{ code: 'A1', text: 'Menghitung $\\Delta E_p = 48\\text{ Joule}$ dan memilih opsi A.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Berikut contoh hewan yang memiliki jantung dengan tiga ruang adalah...\n\nA. Lumba-lumba\nB. buaya muara\nC. Katak pohon\nD. Ikan Hiu',
          answer: 'C. Katak pohon',
          principle:
            'Amfibi memiliki jantung beruang tiga (2 serambi dan 1 bilik), ikan beruang dua, sedangkan mamalia, burung, dan buaya memiliki jantung beruang empat.',
          solution:
            'Periksa jumlah ruang jantung masing-masing hewan vertebrata:\n- **Katak pohon** (amfibi): memiliki **3 ruang** jantung, yaitu 2 serambi (atrium) dan 1 bilik (ventrikel).\n- Lumba-lumba (mamalia): memiliki 4 ruang jantung (2 serambi, 2 bilik).\n- Buaya muara (reptil ordo Crocodilia): memiliki 4 ruang jantung karena sekat antarbiliknya sudah sempurna (dengan *foramen Panizzae*).\n- Ikan hiu (ikan/Pisces): memiliki 2 ruang jantung (1 serambi dan 1 bilik).',
          rubric: [{ code: 'A1', text: 'Memilih opsi C (Katak pohon).' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Tiga buah magnet batang disusun seperti pada gambar berikut (tiga magnet batang berjajar horizontal: magnet pertama ujung kiri $K$ dan ujung kanan $L$; magnet kedua ujung kiri $M$ dan ujung kanan $N$; magnet ketiga ujung kiri $O$ dan ujung kanan $P$).\n\nKutub L tolak-menolak dengan kutub M dan kutub N tarik-menarik dengan kutub O. Jika kutub P adalah kutub selatan, maka kutub yang sesuai pada magnet yang lain adalah ...\n\nA. K = selatan, L = utara, M = utara, N = selatan, O = selatan\nB. K = selatan, L = utara, M = utara, N = selatan, O = utara\nC. K = utara, L = selatan, M = selatan, N = utara, O = selatan\nD. K = utara, L = selatan, M = selatan, N = utara, O = utara',
          answer: 'B. K = selatan, L = utara, M = utara, N = selatan, O = utara',
          principle:
            'Setiap magnet batang memiliki dua kutub berlawanan (utara dan selatan); kutub senama tolak-menolak, sedangkan kutub tak senama tarik-menarik.',
          solution:
            'Telusuri dari ujung $P$ ke ujung $K$:\n1. Diketahui $P =$ **selatan**, sehingga ujung lain pada magnet ketiga adalah $O =$ **utara**.\n2. Kutub $N$ tarik-menarik dengan $O$ (utara), maka $N$ harus berlawanan jenis: $N =$ **selatan**.\n3. Karena $N =$ selatan, maka ujung lain pada magnet kedua adalah $M =$ **utara**.\n4. Kutub $L$ tolak-menolak dengan $M$ (utara), maka $L$ harus sejenis: $L =$ **utara**.\n5. Karena $L =$ utara, maka ujung lain pada magnet pertama adalah $K =$ **selatan**.\n\nJadi berturut-turut $(K, L, M, N, O) =$ (selatan, utara, utara, selatan, utara), sesuai opsi B.',
          rubric: [{ code: 'A1', text: 'Menentukan seluruh kutub magnet dengan benar dan memilih opsi B.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Beberapa sifat jaringan otot :\n1) selnya berbentuk kumparan\n2) bentuk serabut bercabang-cabang\n3) inti satu di tengah sel\n4) berinti banyak\n5) dapat diperintah\n6) bekerja secara tak sadar/ otomatis\n7) bekerja teratur, terus menerus\n\nSifat otot polos ditunjukkan oleh nomor ...\n\nA. 1, 3, 5, 6\nB. 1, 3, 6, 7\nC. 1, 4, 5, 7\nD. 2, 3, 5, 7',
          answer: 'B. 1, 3, 6, 7',
          principle:
            'Otot polos berbentuk gelendong/kumparan dengan satu inti di tengah, bekerja secara tidak sadar (otonom), lambat, teratur, dan tahan lelah.',
          solution:
            'Ciri-ciri otot polos meliputi:\n- (1) Sel berbentuk gelendong atau kumparan yang meruncing di kedua ujung.\n- (3) Memiliki satu inti sel yang terletak di tengah.\n- (6) Bekerja secara tak sadar/otonom (tidak dapat diperintah kehendak, sehingga 5 salah).\n- (7) Kontraksinya lambat, teratur, dan dapat bekerja terus-menerus tanpa cepat lelah.\n\nSementara ciri (2) adalah sifat otot jantung, serta (4) dan (5) adalah sifat otot lurik (otot rangka). Jadi jawabannya 1, 3, 6, 7.',
          rubric: [{ code: 'A1', text: 'Memilih opsi B (1, 3, 6, 7).' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Perhatikan gambar di samping (grafik simpangan terhadap waktu menampilkan tiga kurva gelombang yang mulai dari simpangan $1\\text{ m}$ pada $t = 0\\text{ s}$: satu kurva beramplitudo tetap $\\pm 1\\text{ m}$, satu kurva beramplitudo menurun perlahan hingga sekitar $0{,}68\\text{ m}$ pada $t \\approx 38\\text{ s}$, dan satu kurva lagi mengalami penurunan amplitudo secara cepat menuju nol pada $t \\approx 35\\text{–}40\\text{ s}$; tanda panah menunjuk langsung pada kurva yang amplitudonya menyusut mendekati nol tersebut).\n\nPeristiwa yang ditunjukkan dengan tanda panah pada grafik gelombang tersebut adalah ...\n\nA. gelombang stasioner\nB. gelombang kontinu\nC. gelombang teredam\nD. gelombang tetap',
          answer: 'C. gelombang teredam',
          principle:
            'Gelombang atau osilasi teredam (*damped wave*) ditandai oleh amplitudo yang makin lama makin berkurang terhadap waktu akibat kehilangan energi.',
          solution:
            'Pada grafik simpangan (m) terhadap waktu (s), kurva yang ditunjuk oleh tanda panah memiliki amplitudo yang terus mengecil secara bertahap dari $1\\text{ m}$ hingga mendekati $0\\text{ m}$ seiring bertambahnya waktu. Berkurangnya amplitudo ini merupakan ciri khas **gelombang teredam**, sedangkan kurva dengan amplitudo tetap merupakan gelombang kontinu/tidak teredam.',
          rubric: [{ code: 'A1', text: 'Memilih opsi C (gelombang teredam).' }]
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Jamur dibedakan dari tumbuhan karena tidak memiliki klorofil. Untuk kelangsungan hidupnya jamur memiliki tiga cara untuk memperoleh makanannya yaitu ...\n\nA. saprofit, parasit, mutualisme\nB. autotrof, saprofit, mutualisme\nC. saprofit, kemoautotrof, mutualisme\nD. fotoautotrof, heterotrof, saprofit',
          answer: 'A. saprofit, parasit, mutualisme',
          principle:
            'Karena tidak berklorofil, semua jamur bersifat heterotrof dan memperoleh zat organik sebagai saprofit (pengurai), parasit, atau simbion mutualisme.',
          solution:
            'Jamur (Fungi) tidak memiliki klorofil sehingga tidak dapat membuat makanannya sendiri (bukan autotrof, fotoautotrof, maupun kemoautotrof). Jamur bersifat heterotrof dan menyerap nutrien dari lingkungan melalui tiga cara:\n1. **Saprofit**: menguraikan sisa organisme atau bahan organik mati.\n2. **Parasit**: menyerap makanan dari inang hidup dan merugikan inangnya.\n3. **Mutualisme**: bersimbiosis saling menguntungkan dengan organisme lain (misalnya mikoriza dengan akar tumbuhan atau liken dengan alga/sianobakteri).',
          rubric: [{ code: 'A1', text: 'Memilih opsi A (saprofit, parasit, mutualisme).' }]
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Perhatikan macam-macam pemanfaatan alat optik pada gambar berikut.\n(1) Cermin cembung pengawas tikungan jalan (*traffic mirror*)\n(2) Kaca spion mobil\n(3) Kaca pembesar (lup)\n(4) Lilin menyala di depan cermin datar\n\nPemanfaatan cermin cembung ditunjukkan oleh gambar ...\n\nA. (1) dan (2)\nB. (2) dan (3)\nC. (3) dan (4)\nD. (4) dan (1)',
          answer: 'A. (1) dan (2)',
          principle:
            'Cermin cembung selalu membentuk bayangan maya, tegak, dan diperkecil sehingga menghasilkan bidang pandang yang luas.',
          solution:
            'Sifat cermin cembung adalah menyebarkan sinar (divergen) dan menghasilkan bayangan yang selalu maya, tegak, dan diperkecil sehingga jangkauan penglihatannya luas:\n- (1) Cermin tikungan jalan menggunakan **cermin cembung** agar pengendara dapat melihat kendaraan dari arah berlawanan secara luas.\n- (2) Kaca spion mobil juga menggunakan **cermin cembung** untuk memperluas daerah pandang di belakang dan samping kendaraan.\n- (3) Lup menggunakan **lensa cembung**, bukan cermin cembung.\n- (4) Lilin di depan cermin datar menunjukkan pemantulan pada **cermin datar**.\n\nJadi pemanfaatan cermin cembung ditunjukkan oleh (1) dan (2).',
          rubric: [{ code: 'A1', text: 'Memilih opsi A ((1) dan (2)).' }]
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Hipotesis : Pertumbuhan tanaman cabe di tanah yang mengandung pupuk kandang lebih baik dari pertumbuhan cabe di tanah yang tidak mengandung pupuk kandang, maka perlakuan yang diberikan pada percobaan tersebut adalah ...\n\nA. semua tanaman diberi pupuk kandang\nB. sebagian tanaman diberi pupuk kandang, sebagian lagi pupuk hijau\nC. semua tanaman tidak diberi pupuk kandang\nD. sebagian tanaman diberi pupuk kandang sebagian lagi tidak diberi pupuk',
          answer: 'D. sebagian tanaman diberi pupuk kandang sebagian lagi tidak diberi pupuk',
          principle:
            'Dalam eksperimen ilmiah, untuk menguji pengaruh suatu variabel bebas harus ada kelompok perlakuan yang diberi faktor uji dan kelompok kontrol yang tidak diberi faktor uji.',
          solution:
            'Hipotesis membandingkan dua kondisi: tanah yang mengandung pupuk kandang vs tanah yang tidak mengandung pupuk kandang.\nOleh sebab itu, percobaan harus membagi tanaman cabai menjadi:\n- Kelompok perlakuan: diberi pupuk kandang.\n- Kelompok kontrol (pembanding): tidak diberi pupuk.\n\nOpsi A dan C tidak memiliki pembanding, sedangkan opsi B menambahkan jenis pupuk lain (pupuk hijau) yang tidak sesuai dengan hipotesis.',
          rubric: [{ code: 'A1', text: 'Memilih opsi D (kelompok perlakuan pupuk kandang dan kelompok kontrol tanpa pupuk).' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Gilang berdiri di depan cermin datar seperti yang ditunjukkan pada gambar berikut (di sebelah kiri garis vertikal bertuliskan CERMIN DATAR, tampak anak laki-laki menghadap ke depan; lengan kanannya di sisi kiri gambar terangkat sedikit menjauhi tubuh dengan telapak tangan terbuka, sedangkan lengan kirinya di sisi kanan gambar lurus ke bawah di samping badan).\n\nPembentukan bayangan yang tepat ditunjukkan oleh ...\n\nA. Gambar A (bayangan berupa anak perempuan berambut kuncir tampak dari belakang)\nB. Gambar B (bayangan anak laki-laki tampak depan identik tanpa pencerminan: lengan yang terangkat tetap berada di sisi kiri dekat cermin)\nC. Gambar C (bayangan berupa anak bertopi/berkuncir tampak dari samping menghadap ke cermin)\nD. Gambar D (bayangan anak laki-laki tampak depan yang simetris kiri–kanan terhadap garis cermin: lengan yang dekat cermin lurus ke bawah, sedangkan lengan yang jauh dari cermin di sisi kanan terangkat terbuka)',
          answer:
            'D. Gambar D (bayangan anak laki-laki tampak depan yang simetris kiri–kanan terhadap garis cermin: lengan yang dekat cermin lurus ke bawah, sedangkan lengan yang jauh dari cermin di sisi kanan terangkat terbuka)',
          principle:
            'Cermin datar membentuk bayangan maya, tegak, sama besar, berjarak sama dengan jarak benda ke cermin, dan simetris (tertukar kiri–kanan terhadap bidang cermin).',
          solution:
            'Pada gambar benda di sebelah kiri cermin datar:\n- Sisi tubuh Gilang yang **dekat** dengan cermin adalah lengan yang lurus ke bawah.\n- Sisi tubuh Gilang yang **jauh** dari cermin adalah lengan yang terangkat ke samping.\n\nBerdasarkan sifat bayangan cermin datar yang simetris terhadap garis cermin, bayangan di sebelah kanan cermin juga harus tampak sama besar, tegak, dan bagian yang dekat cermin tetap di sisi yang dekat cermin (lengan kiri bayangan lurus ke bawah), sedangkan lengan yang terangkat berada di sisi yang jauh dari cermin (sisi kanan gambar). Pola pencerminan ini ditunjukkan dengan tepat oleh gambar **D** (gambar B hanya menggeser objek tanpa mencerminkan, sedangkan A dan C bukan bayangan Gilang yang sesuai).',
          rubric: [{ code: 'A1', text: 'Memilih opsi D sesuai sifat simetri bayangan pada cermin datar.' }]
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Di bawah ini adalah beberapa aktifitas yang dilakukan manusia :\n1) Berburu secara liar\n2) Memberikan beberapa pupuk pada tanaman tertentu\n3) Menebang kayu secara mekanisasi dan terencana\n4) Membasmi hama dengan musuh alami\n5) Memanfaatkan hutan semaksimal mungkin\n\nTindakan manusia yang menyebabkan gangguan keseimbangan lingkungan adalah ...\n\nA. 1 dan 2\nB. 3 dan 4\nC. 1 dan 3\nD. 1 dan 5',
          answer: 'D. 1 dan 5',
          principle:
            'Perburuan liar dan eksploitasi sumber daya hutan secara berlebihan merusak rantai makanan dan habitat sehingga mengganggu keseimbangan ekosistem.',
          solution:
            'Evaluasi tiap aktivitas:\n- (1) Berburu secara liar menurunkan populasi satwa secara drastis hingga punah dan memutus rantai makanan (mengganggu keseimbangan lingkungan).\n- (2) Pemberian pupuk secukupnya pada tanaman tertentu membantu pertumbuhan tanaman.\n- (3) Penebangan kayu secara terencana (tebang pilih dan reboisasi) menjaga kelestarian hutan.\n- (4) Pengendalian hama hayati menggunakan musuh alami ramah lingkungan karena tidak mencemari ekosistem dengan pestisida.\n- (5) Memanfaatkan hutan semaksimal mungkin (eksploitasi berlebihan tanpa batas) mengakibatkan penggundulan hutan, hilangnya habitat, dan erosi (mengganggu keseimbangan lingkungan).\n\nJadi tindakan yang mengganggu keseimbangan lingkungan adalah **1 dan 5**.',
          rubric: [{ code: 'A1', text: 'Memilih opsi D (1 dan 5).' }]
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Perhatikan diagram perubahan wujud zat berikut.\n\n(Diagram segitiga menghubungkan kotak $P$ di kiri bawah, kotak $\\text{Cair}$ di kanan bawah, dan kotak $Q$ di puncak atas: panah dari $P$ ke $\\text{Cair}$ bertuliskan $\\text{Mencair}$ dan sebaliknya bertuliskan $\\text{Membeku}$; panah dari $P$ ke $Q$ bertuliskan $\\text{Menyublim}$ dan sebaliknya bertuliskan $\\text{Mengkristal}$; panah dari $\\text{Cair}$ ke $Q$ bertuliskan $\\text{Menguap}$ dan panah sebaliknya dari $Q$ ke $\\text{Cair}$ berlabel $R$.)\n\nJenis zat pada P dan Q serta perubahan wujud R yang tepat sesuai diagram di atas adalah ...\n\nA. P = Padat, Q = Gas, R = Mengembun\nB. P = Padat, Q = Gas, R = Mencair\nC. P = Gas, Q = Padat, R = Mengembun\nD. P = Gas, Q = Padat, R = Mencair',
          answer: 'A. P = Padat, Q = Gas, R = Mengembun',
          principle:
            'Zat padat mencair menjadi cair dan menyublim menjadi gas; zat gas mengembun menjadi cair dan mengkristal menjadi padat.',
          solution:
            'Dari panah pada diagram:\n- $P \\rightarrow \\text{Cair}$ disebut *Mencair* dan $\\text{Cair} \\rightarrow P$ disebut *Membeku*, maka $P$ adalah wujud **Padat**.\n- $\\text{Cair} \\rightarrow Q$ disebut *Menguap* dan $\\text{Padat} \\rightarrow Q$ disebut *Menyublim*, maka $Q$ adalah wujud **Gas**.\n- Perubahan wujud $R$ berarah dari $Q$ (Gas) menuju $\\text{Cair}$, sehingga $R$ adalah **Mengembun**.\n\nJawaban yang tepat adalah opsi A.',
          rubric: [{ code: 'A1', text: 'Memilih opsi A (P = Padat, Q = Gas, R = Mengembun).' }]
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Di bawah ini nama-nama struktur bagian pada tumbuhan :\n1. akar serabut\n2. akar tunggang\n3. tulang daun menyirip\n4. batang bercabang\n5. tulang daun sejajar\n6. batang tak bercabang\n7. perhiasan bunga kelipatan 4 atau 5\n\nCiri-ciri manakah yang sesuai untuk tumbuhan dikotil? ...\n\nA. 1 - 3 - 4 - 7\nB. 2 - 3 - 6 - 7\nC. 2 - 3 - 4 - 7\nD. 1 - 7 - 5 - 2',
          answer: 'C. 2 - 3 - 4 - 7',
          principle:
            'Tumbuhan dikotil (berkeping dua) berciri akar tunggang, tulang daun menyirip atau menjari, batang bercabang dan berkambium, serta bagian bunga kelipatan 4 atau 5.',
          solution:
            'Ciri-ciri morfologi tumbuhan dikotil meliputi:\n- (2) Memiliki sistem **akar tunggang**.\n- (3) Memiliki **tulang daun menyirip** (atau menjari).\n- (4) Memiliki **batang bercabang** dan umumnya berkambium.\n- (7) Memiliki **perhiasan bunga kelipatan 4 atau 5**.\n\nAdapun ciri (1), (5), dan (6) merupakan ciri umum tumbuhan monokotil. Jadi kombinasi yang benar adalah **2 - 3 - 4 - 7**.',
          rubric: [{ code: 'A1', text: 'Memilih opsi C (2 - 3 - 4 - 7).' }]
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Seorang nelayan memanfaatkan angin darat untuk melaut seperti pada gambar berikut (ilustrasi pantai pada malam hari: perahu layar nelayan bergerak menjauhi daratan menuju ke laut lepas terdorong angin dari arah daratan).\n\nPernyataan yang tepat mengenai angin darat adalah ...\n\nA. angin darat merupakan jenis angin yang bergerak dari darat ke laut dan berlangsung pada malam hari\nB. angin darat merupakan jenis angin yang bergerak dari darat ke laut dan berlangsung pada siang hari\nC. angin darat merupakan jenis angin yang bergerak dari laut ke darat dan berlangsung pada malam hari\nD. angin darat merupakan jenis angin yang bergerak dari laut ke darat dan berlangsung pada siang hari',
          answer: 'A. angin darat merupakan jenis angin yang bergerak dari darat ke laut dan berlangsung pada malam hari',
          principle:
            'Angin bergerak dari daerah bertekanan udara tinggi (lebih dingin) ke daerah bertekanan udara rendah (lebih hangat); nama angin diambil dari arah asalnya.',
          solution:
            'Pada **malam hari**, daratan melepaskan kalor lebih cepat daripada lautan sehingga suhu daratan menjadi lebih dingin (tekanan udara lebih tinggi), sedangkan air laut masih relatif hangat (udara di atas laut memuai dan naik sehingga tekanannya lebih rendah). Akibat perbedaan tekanan ini, udara bergerak **dari darat menuju laut**, dan disebut **angin darat**. Nelayan tradisional memanfaatkan angin darat pada malam hingga dini hari untuk berlayar ke laut.',
          rubric: [{ code: 'A1', text: 'Memilih opsi A (angin dari darat ke laut pada malam hari).' }]
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Budidaya tanaman dengan menggunakan medium air yang berisi unsur hara dalam suatu wadah dikenal dengan nama teknik ...\n\nA. hidroponik\nB. kultur jaringan\nC. mikrohidrologi\nD. aeroponik',
          answer: 'A. hidroponik',
          principle:
            'Hidroponik adalah teknik budidaya tanaman tanpa tanah dengan memanfaatkan larutan air yang mengandung mineral/unsur hara esensial.',
          solution:
            'Mari kita bedakan istilah berikut:\n- **Hidroponik**: budidaya tanaman menggunakan media air yang dilarutkan unsur hara (atau media tanam inert yang dialiri larutan nutrisi).\n- **Kultur jaringan**: perbanyakan tanaman secara vegetatif dengan menumbuhkan jaringan/sel tumbuhan dalam media agar steril di laboratorium.\n- **Aeroponik**: budidaya tanaman dengan akar menggantung di udara dan disemprot kabut larutan nutrisi.\n- **Mikrohidrologi**: bukan teknik budidaya tanaman dengan larutan hara.\n\nJadi teknik yang dimaksud adalah **hidroponik**.',
          rubric: [{ code: 'A1', text: 'Memilih opsi A (hidroponik).' }]
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Look at the figure (diagram *Common types of clouds in the troposphere* menampilkan ketinggian awan: *Cirrocumulus* dan *Cirrus* di atas $18{.}000\\text{ feet}$; *Altocumulus* dan *Altostratus* pada $6{.}000\\text{–}20{.}000\\text{ feet}$; *Stratocumulus*, *Stratus*, dan *Cumulus* di bawah $6{.}000\\text{ feet}$; serta awan *Cumulonimbus* yang menjulang tinggi dari dekat permukaan tanah hingga di atas $50{.}000\\text{ feet}$ disertai curah hujan lebat di bawahnya).\n\nType of cloud which has strong connection with thunderstorm is ...\n\nA. Stratocumulus\nB. Cumulus\nC. Altostratus\nD. Cumulonimbus',
          answer: 'D. Cumulonimbus',
          principle:
            'Awan *Cumulonimbus* merupakan awan konvektif vertikal yang menjulang dari lapisan troposfer bawah hingga puncak troposfer dan menghasilkan hujan deras, petir, serta badai guntur (*thunderstorm*).',
          solution:
            'Berdasarkan diagram jenis-jenis awan di troposfer, **Cumulonimbus** adalah satu-satunya awan yang berkembang secara vertikal sangat tinggi (dari dekat permukaan tanah hingga di atas $50{.}000\\text{ feet}$) dengan dasar gelap dan garis hujan lebat di bagian bawahnya. Dalam meteorologi, awan Cumulonimbus berkaitan erat dengan peristiwa **thunderstorm** (badai guntur disertai petir, hujan lebat, dan angin kencang).\n- *Stratocumulus*, *Cumulus*, dan *Altostratus* tidak menghasilkan badai petir hebat seperti *Cumulonimbus*.',
          rubric: [{ code: 'A1', text: 'Memilih opsi D (Cumulonimbus).' }]
        }
      ]
    }
  ]
};
