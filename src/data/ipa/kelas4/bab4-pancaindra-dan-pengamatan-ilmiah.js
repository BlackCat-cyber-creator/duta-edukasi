import { bab, soal } from '../author.js';

export default bab({
  grade: 4,
  number: 4,
  slug: 'pancaindra-dan-pengamatan-ilmiah',
  title: 'Pancaindra dan Pengamatan Ilmiah',
  element: 'Pemahaman IPAS & Keterampilan Proses: pancaindra dan pengamatan ilmiah',
  summary: {
    overview: 'Kita mengenal keadaan lingkungan melalui lima pancaindra: mata, telinga, hidung, lidah, dan kulit. Dalam IPA, pancaindra menjadi alat utama saat mengamati alam sekitar, lalu dipadukan dengan alat ukur sederhana serta pencatatan data berupa turus, tabel, dan diagram gambar agar hasil penyelidikan mudah dipahami.',
    coreConcepts: [
      'Indra Penglihat (Mata): Mata menerima rangsang cahaya sehingga kita bisa mengenali warna, bentuk, ukuran, dan gerak benda. Bagian luar mata meliputi alis (menahan keringat dari dahi), kelopak mata, dan bulu mata (melindungi dari debu). Bagian penting lainnya ialah kornea, pupil (mengatur banyaknya cahaya masuk), iris (memberi warna mata), lensa mata, dan retina. Rawat mata dengan membaca di tempat terang berjarak sekitar 30 cm serta tidak menatap matahari langsung.',
      'Indra Pendengar (Telinga): Telinga menangkap gelombang bunyi dan menjaga keseimbangan tubuh. Telinga terbagi atas telinga luar (daun telinga untuk mengumpulkan bunyi dan lubang telinga), telinga tengah (gendang telinga yang bergetar dan tulang pendengaran), serta telinga dalam (rumah siput atau koklea dan saluran setengah lingkaran sebagai alat keseimbangan). Rawat telinga dengan menghindari suara terlalu bising dan tidak mengorek bagian dalam memakai benda tajam.',
      'Indra Pembau (Hidung) dan Pengecap (Lidah): Hidung peka terhadap rangsang bau berupa gas atau aroma melalui sel pembau di rongga hidung, sekaligus menyaring debu menggunakan rambut hidung dan lendir. Lidah memiliki bintil-bintil pengecap (papila) yang peka terhadap rasa manis, asin, asam, pahit, dan gurih, serta membantu mengunyah, menelan, dan berbicara. Rawat keduanya dengan menjaga kebersihan rongga hidung, menyikat gigi dan lidah, serta menghindari makanan terlalu panas atau pedas.',
      'Indra Peraba (Kulit): Kulit merupakan pelindung terluar tubuh yang memiliki ujung saraf peraba untuk merasakan sentuhan, tekanan, permukaan halus atau kasar, panas, dingin, dan rasa nyeri. Kulit memiliki lapisan luar (epidermis) dan lapisan dalam (dermis) tempat kelenjar keringat serta saraf peraba berada. Rawat kulit dengan mandi teratur menggunakan air bersih dan sabun serta melindungi diri dari sinar matahari yang terlalu terik.',
      'Mengamati dan Mengukur Sederhana: Pengamatan ilmiah dilakukan memakai pancaindra secara teliti dan jujur sesuai kenyataan, bukan dugaan semata. Untuk memperoleh data yang tepat dan seragam bagi semua orang, kita menggunakan alat ukur sederhana yang baku, misalnya penggaris atau meteran untuk panjang (cm, m), timbangan untuk massa (g, kg), jam untuk waktu, dan gelas ukur untuk volume (mL).',
      'Mencatat Turus, Tabel, dan Diagram Gambar: Hasil pengamatan dicatat secara rapi dalam bentuk turus, tabel, atau diagram gambar (piktogram) agar polanya mudah dibaca. Pada turus, empat garis tegak yang diikat satu garis miring membentuk satu kelompok berisi 5 hitungan. Data dari tabel atau diagram gambar membantu kita membandingkan hasil dan menarik kesimpulan berdasarkan bukti.'
    ],
    keyFormulas: [
      { label: 'Nilai satu ikat turus penuh', formula: '\\text{1 kelompok turus penuh} = 5\\ \\text{hitungan}' },
      { label: 'Menghitung total dari turus', formula: '\\text{Jumlah data} = (\\text{banyak kelompok 5} \\times 5) + \\text{sisa garis}' },
      { label: 'Membaca diagram gambar (piktogram)', formula: '\\text{Banyak data} = \\text{jumlah simbol} \\times \\text{nilai 1 simbol}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung hasil pengamatan menggunakan turus',
        problem: 'Saat mengamati serangga di kebun sekolah, kelompok Melati mencatat lebah sebanyak 2 kelompok turus penuh dan 3 garis tegak sisa. Berapa ekor lebah yang diamati kelompok Melati?',
        solution: 'Setiap kelompok turus penuh bernilai 5.\n$\\text{Jumlah lebah} = (2 \\times 5) + 3 = 10 + 3 = 13\\ \\text{ekor}$.\nJadi, kelompok Melati mengamati **13 ekor lebah**.'
      },
      {
        title: 'Memilih pancaindra dan alat ukur sederhana',
        problem: 'Siska mengamati pertumbuhan kecambah kacang hijau setiap hari. Pancaindra apa yang dipakai untuk melihat perubahan warna daun, dan alat ukur apa yang tepat untuk mencatat pertambahan tinggi batangnya?',
        solution: 'Siska menggunakan **mata** (indra penglihat) untuk mengamati warna daun, lalu menggunakan **penggaris atau mistar** berskala sentimeter atau milimeter untuk mengukur tinggi batang secara tepat.'
      },
      {
        title: 'Membedakan pengamatan langsung dan dugaan',
        problem: 'Dari dua kalimat berikut, mana yang merupakan hasil pengamatan langsung: (A) "Daun tanaman di pot teduh berwarna hijau kekuningan dan tingginya 12 cm" atau (B) "Tanaman itu pasti kurang diberi pupuk oleh penjaga sekolah"?',
        solution: 'Kalimat **(A)** adalah hasil pengamatan langsung karena dapat dilihat dan diukur secara nyata. Kalimat (B) masih berupa dugaan karena belum dibuktikan.'
      }
    ],
    misconceptions: [
      'Mengira lidah hanya bisa merasakan satu rasa pada bagian ujung atau pangkal tertentu saja. Seluruh permukaan lidah yang memiliki papila peka terhadap berbagai rasa, hanya tingkat kepekaannya sedikit berbeda.',
      'Menganggap bagian dalam lubang telinga harus dikorek dalam-dalam setiap hari dengan benda keras. Kotoran telinga umumnya terdorong keluar sendiri; mengorek terlalu dalam dapat melukai gendang telinga.',
      'Mengira ukuran jengkal tangan sama akuratnya dengan penggaris dalam pengamatan ilmiah. Jengkal setiap orang berbeda-beda, sehingga pengamatan ilmiah memakai alat ukur baku seperti penggaris atau timbangan.'
    ],
    tutorTip: 'Saat menyajikan data pengamatan dengan turus, ikat setiap hitungan ke-5 agar cepat dihitung. Dalam laporan pengamatan ilmiah, tuliskan apa yang benar-benar terlihat dan terukur, baru setelah itu buat kesimpulannya!'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Bagian luar mata yang berfungsi menahan tetesan keringat dari dahi agar tidak masuk ke dalam mata adalah...',
      options: ['alis mata', 'lensa mata', 'retina', 'pupil'],
      answer: 'A',
      hint: 'Letaknya tepat di atas kelopak mata pada bagian dahi.',
      solution: '**Alis mata** berada di atas mata dan berfungsi menahan keringat atau air dari dahi agar tidak mengalir masuk ke mata. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bagian telinga luar yang berbentuk seperti corong untuk menangkap dan mengumpulkan gelombang bunyi dari udara adalah...',
      options: ['saluran setengah lingkaran', 'rumah siput', 'daun telinga', 'tulang pendengaran'],
      answer: 'C',
      hint: 'Bagian ini tampak dari luar di sisi kanan dan kiri kepala.',
      solution: '**Daun telinga** menangkap gelombang bunyi dari lingkungan lalu mengarahkannya ke saluran telinga menuju gendang telinga. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Kulit manusia berperan sebagai indra peraba karena memiliki ujung-ujung saraf yang peka terhadap...',
      options: [
        'cahaya dan warna benda',
        'sentuhan, tekanan, panas, dingin, dan nyeri',
        'aroma gas yang terbawa angin',
        'gelombang bunyi dari jarak jauh'
      ],
      answer: 'B',
      hint: 'Pikirkan apa saja yang bisa dirasakan ketika kulit menyentuh es batu, meja kasar, atau jarum.',
      solution: 'Ujung saraf pada kulit peka terhadap **sentuhan, tekanan, panas, dingin, dan nyeri**, serta merasakan halus atau kasarnya permukaan benda. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Untuk mengukur panjang batang kecambah secara teliti selama lima hari pengamatan, alat ukur sederhana yang paling tepat digunakan adalah...',
      options: ['termometer', 'timbangan dapur', 'gelas ukur', 'penggaris berskala sentimeter'],
      answer: 'D',
      hint: 'Alat ukur baku untuk mengukur panjang atau tinggi benda kecil.',
      solution: 'Panjang atau tinggi batang tanaman diukur secara baku dan teliti menggunakan **penggaris berskala sentimeter** (atau milimeter). Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Kebiasaan berikut yang paling tepat untuk merawat kesehatan mata adalah...',
      options: [
        'membaca buku di tempat cukup terang dengan posisi duduk tegak',
        'membaca sambil tiduran di ruangan yang redup',
        'menatap langsung cahaya matahari pada siang hari',
        'menggosok mata dengan tangan yang belum dicuci'
      ],
      answer: 'A',
      hint: 'Mata bekerja nyaman jika pencahayaan cukup dan jarak baca terjaga.',
      solution: '**Membaca di tempat cukup terang sambil duduk tegak** dengan jarak sekitar 30 cm menjaga agar mata tidak cepat lelah atau rusak. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Ketika kita berpindah dari halaman sekolah yang terang benderang ke dalam ruangan yang agak gelap, ukuran pupil mata membesar. Tujuan perubahan tersebut adalah...',
      options: [
        'mempercepat bunyi masuk ke dalam telinga',
        'menghasilkan air mata lebih banyak untuk mencuci alis',
        'mengubah warna iris mata menjadi lebih terang',
        'mengatur agar lebih banyak cahaya dapat masuk ke dalam mata'
      ],
      answer: 'D',
      hint: 'Di tempat gelap, mata membutuhkan lebih banyak cahaya agar benda tetap terlihat.',
      solution: '**Pupil** berfungsi mengatur banyaknya cahaya yang masuk ke mata. Saat cahaya redup, pupil membesar agar cahaya yang masuk cukup untuk melihat benda. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Selain berfungsi sebagai alat pendengaran, telinga bagian dalam yang disebut saluran setengah lingkaran juga berperan penting untuk...',
      options: [
        'mengecap rasa manis dan pahit makanan',
        'menjaga keseimbangan tubuh',
        'menyaring debu dari udara pernapasan',
        'mengatur suhu kulit saat udara panas'
      ],
      answer: 'B',
      hint: 'Fungsi tambahan telinga saat kita berdiri, berjalan, atau berputar.',
      solution: 'Di dalam telinga terdapat saluran setengah lingkaran yang berfungsi membantu **menjaga keseimbangan tubuh**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Kelompok siswa mencatat banyak daun berbentuk menyirip di taman sekolah memakai tanda turus. Mereka menulis sebanyak 3 kelompok turus penuh (masing-masing 5 hitungan) dan 4 garis tegak sisa. Jumlah daun menyirip yang diamati adalah...',
      options: ['12 lembar', '14 lembar', '19 lembar', '34 lembar'],
      answer: 'C',
      hint: 'Hitung $(3 \\times 5) + 4$.',
      solution: 'Setiap kelompok turus penuh bernilai 5. Jumlah daun = $(3 \\times 5) + 4 = 15 + 4 = 19\\ \\text{lembar}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Ketika sedang pilek berat dan hidung tersumbat, makanan yang kita makan sering terasa hambar meskipun lidah tidak terluka. Hal ini terjadi karena...',
      options: [
        'indra pembau pada hidung ikut membantu mengenali cita rasa makanan',
        'bintil pengecap pada lidah menghilang selama pilek',
        'telinga tidak bisa menangkap bunyi saat mengunyah',
        'kulit bibir kehilangan kepekaan terhadap warna makanan'
      ],
      answer: 'A',
      hint: 'Aroma makanan yang tercium hidung melengkapi rasa yang dicecap lidah.',
      solution: 'Saat makan, **indra pembau (hidung)** dan indra pengecap (lidah) bekerja bersama. Jika hidung tersumbat, aroma makanan tidak tercium sehingga makanan terasa hambar. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Cara merawat telinga yang paling aman agar gendang telinga tetap sehat dan tidak terluka adalah...',
      options: [
        'membersihkan bagian dalam lubang telinga dengan benda runcing',
        'mendengarkan musik melalui earphone dengan suara paling keras setiap hari',
        'membiarkan air kolam terus tertinggal di telinga setelah berenang',
        'menghindari suara terlalu bising dan membersihkan daun telinga dengan kain lembut'
      ],
      answer: 'D',
      hint: 'Gendang telinga tipis dan mudah rusak oleh suara keras atau tusukan benda keras.',
      solution: 'Gendang telinga harus dilindungi dengan cara **menghindari suara terlalu bising** serta tidak memasukkan benda keras ke lubang telinga, cukup membersihkan bagian luar dengan kain lembut. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sekelompok siswa mengamati banyaknya bunga yang mekar pada tanaman di empat pot percobaan, yaitu Pot A, Pot B, Pot C, dan Pot D. Hasil pengamatan disajikan pada diagram gambar berikut dengan aturan 1 gambar mewakili 2 kuntum bunga. Berapa selisih banyak bunga di Pot C dan Pot A?',
      options: ['3 kuntum bunga', '6 kuntum bunga', '10 kuntum bunga', '14 kuntum bunga'],
      answer: 'B',
      hint: 'Hitung jumlah bunga di Pot C dan Pot A dengan mengalikan banyak simbol dengan 2, lalu cari selisihnya.',
      solution: 'Pada diagram gambar, 1 simbol mewakili 2 kuntum bunga.\nPot C memiliki 5 simbol, sehingga banyak bunganya $5 \\times 2 = 10$ kuntum.\nPot A memiliki 2 simbol, sehingga banyak bunganya $2 \\times 2 = 4$ kuntum.\nSelisihnya = $10 - 4 = 6$ kuntum bunga. Jawaban: **B**.',
      visual: {
        type: 'pictogram',
        props: {
          title: 'Hasil Pengamatan Bunga Mekar',
          caption: '*1 simbol bunga mewakili 2 kuntum bunga',
          rows: [
            { label: 'Pot A', count: 2 },
            { label: 'Pot B', count: 3 },
            { label: 'Pot C', count: 5 },
            { label: 'Pot D', count: 4 }
          ],
          symbol: '🌸',
          unitLabel: '1 🌸 = 2 kuntum',
          heightSvg: 180
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Dalam sebuah percobaan kepekaan kulit, dua ujung pensil tumpul disentuhkan perlahan pada ujung jari tangan dan pada kulit punggung dengan jarak yang sama. Siswa lebih mudah membedakan dua titik sentuhan tersebut di ujung jari daripada di punggung. Kesimpulan yang paling tepat adalah...',
      options: [
        'kulit punggung tidak memiliki lapisan pelindung sama sekali',
        'ujung jari tangan tidak dapat merasakan panas dan dingin',
        'ujung saraf peraba tersebar lebih rapat di ujung jari dibandingkan di punggung',
        'kulit ujung jari lebih tebal sehingga tidak memiliki saraf'
      ],
      answer: 'C',
      hint: 'Kepekaan bagian tubuh dipengaruhi oleh kerapatan ujung saraf perabanya.',
      solution: 'Ujung jari tangan sangat peka karena memiliki **ujung saraf peraba yang lebih rapat** dibandingkan bagian kulit punggung. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Bima mengamati seekor kucing di halaman sekolah untuk laporan pengamatan IPA. Pernyataan berikut yang merupakan hasil pengamatan langsung menggunakan pancaindra dan alat ukur (bukan dugaan) adalah...',
      options: [
        'kucing itu pasti sedang mencari pemiliknya yang pergi',
        'kucing itu mungkin belum makan sejak kemarin pagi',
        'kucing itu tentu merasa takut kepada anak-anak kelas satu',
        'kucing itu berbulu putih kecokelatan dan panjang ekornya 22 cm'
      ],
      answer: 'D',
      hint: 'Pengamatan langsung berisi fakta yang benar-benar terlihat atau terukur, tanpa kata perkiraan seperti "pasti" atau "mungkin".',
      solution: 'Warna bulu dan panjang ekor yang diukur (**22 cm**) adalah fakta hasil pengamatan langsung oleh mata dan penggaris. Tiga pilihan lain berisi dugaan atau tafsiran. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Saat mengukur panjang meja belajar, Edo menggunakan jengkal tangannya dan memperoleh 6 jengkal, sedangkan adiknya memperoleh 8 jengkal untuk meja yang sama. Mengapa hasil keduanya berbeda dan bagaimana cara agar pengamatan ilmiah lebih tepat?',
      options: [
        'ukuran jengkal setiap orang berbeda, sehingga sebaiknya menggunakan alat ukur baku seperti penggaris atau meteran',
        'panjang meja kayu memuai dengan cepat saat diukur oleh anak yang lebih kecil',
        'adiknya pasti salah berhitung karena meja tidak bisa diukur dengan tangan',
        'jengkal tangan merupakan alat ukur baku dalam seluruh percobaan sains'
      ],
      answer: 'A',
      hint: 'Alat ukur tidak baku menghasilkan ukuran berbeda bagi tiap orang.',
      solution: 'Jengkal adalah satuan tidak baku karena **ukuran tangan tiap orang berbeda**. Agar hasil pengukuran seragam dan akurat, pengamatan ilmiah menggunakan **alat ukur baku** seperti penggaris atau meteran. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dalam tabel pengamatan selama 10 menit, siswa mencatat banyak semut yang mendatangi empat piring berbeda: piring gula pasir dikerumuni 18 semut, piring kue manis 15 semut, piring kerupuk tawar 2 semut, dan piring garam dapur 0 semut. Kesimpulan yang paling sesuai dengan data tabel tersebut adalah...',
      options: [
        'semut paling menyukai makanan yang terasa sangat asin',
        'semut tidak memiliki indra untuk mengenali jenis makanan',
        'semut lebih banyak mendatangi bahan makanan yang rasanya manis',
        'jumlah semut yang datang sama banyak pada semua piring'
      ],
      answer: 'C',
      hint: 'Bandingkan bahan pada dua piring yang paling banyak dikerumuni semut.',
      solution: 'Data menunjukkan semut paling banyak berada di piring gula pasir (18 semut) dan kue manis (15 semut), sedangkan garam 0 semut. Jadi kesimpulan yang tepat adalah **semut lebih banyak mendatangi bahan yang rasanya manis**. Jawaban: **C**.'
    })
  ]
});
