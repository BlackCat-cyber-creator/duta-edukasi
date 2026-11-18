import { bab, soal } from '../author.js';

export default bab({
  grade: 5,
  number: 2,
  slug: 'bunyi-dan-pendengaran',
  title: 'Bunyi dan Indra Pendengaran',
  element: 'Gelombang bunyi: sumber, perambatan, sifat bunyi, dan indra pendengaran',
  summary: {
    overview: 'Setiap hari kita mendengar beragam bunyi, mulai dari suara guru, kicauan burung, hingga alunan musik. Semua bunyi berasal dari benda yang bergetar. Bab ini membahas sumber bunyi, cara perambatan bunyi melalui benda padat, cair, dan gas, tinggi-rendah nada dan kuat-lemah bunyi, peristiwa pemantulan serta penyerapan bunyi, hingga bagian-bagian telinga dan cara menjaga kesehatan pendengaran.',
    coreConcepts: [
      'Sumber dan Perambatan Bunyi: Bunyi dihasilkan oleh benda yang bergetar (sumber bunyi), misalnya senar gitar yang dipetik, pita suara di tenggorokan saat berbicara, dan membran drum yang dipukul. Bunyi merambat sebagai gelombang getaran melalui medium berupa benda padat (telepon kaleng berbenang), benda cair (ketukan batu di dalam air), dan gas (udara di sekitar kita), tetapi tidak dapat merambat di ruang hampa seperti luar angkasa. Bunyi merambat paling cepat di benda padat karena partikelnya paling rapat, lalu cair, dan paling lambat di gas.',
      'Tinggi-Rendah Nada dan Kuat-Lemah Bunyi: Tinggi-rendah nada bergantung pada cepat-lambatnya getaran benda (frekuensi). Benda yang bergetar lebih cepat menghasilkan nada tinggi, sedangkan getaran lebih lambat menghasilkan nada rendah; misalnya senar pendek, tipis, dan tegang menghasilkan nada lebih tinggi daripada senar panjang dan kendur. Sementara itu, kuat-lemah (keras-pelan) bunyi dipengaruhi besarnya simpangan getaran (amplitudo) dan jarak pendengar. Memetik senar lebih kuat memperbesar simpangan sehingga bunyi terdengar lebih keras.',
      'Pemantulan dan Penyerapan Bunyi: Bunyi dapat dipantulkan jika mengenai permukaan keras dan rata seperti tembok beton, kaca, atau tebing batu. Gaung (kerdam) adalah bunyi pantul yang terdengar hampir bersamaan dengan bunyi asli sehingga suara menjadi tumpang tindih dan kurang jelas, sering muncul di aula tertutup. Gema adalah bunyi pantul yang terdengar jelas setelah bunyi asli selesai, misalnya saat berteriak di depan tebing jauh. Untuk meredam gaung, gedung bioskop dan studio musik dilapisi bahan lunak berpori penyerap bunyi seperti busa, karpet, kain tebal, wol, atau gabus.',
      'Bagian-Bagian Telinga dan Fungsinya: Telinga terdiri atas tiga bagian. Telinga luar: daun telinga menangkap gelombang bunyi dan saluran telinga meneruskannya. Telinga tengah: gendang telinga (bergetar saat terkena bunyi), tiga tulang pendengaran yaitu martil, landasan, dan sanggurdi (meneruskan serta memperkuat getaran), serta saluran Eustachius yang menyeimbangkan tekanan udara dengan tenggorokan. Telinga dalam: rumah siput atau koklea (berisi cairan dan reseptor bunyi), saraf pendengaran (mengirim sinyal ke otak), serta tiga saluran setengah lingkaran sebagai alat keseimbangan tubuh.',
      'Menjaga Kesehatan Indra Pendengaran: Telinga adalah organ yang peka terhadap suara bising dan luka fisik. Hindari mendengarkan musik melalui earphone dengan volume terlalu keras dalam waktu lama karena dapat merusak sel pendengaran di koklea. Jangan memasukkan benda tajam atau mengorek liang telinga terlalu dalam karena berisiko melukai gendang telinga; bersihkan daun telinga dan bagian luarnya saja dengan kain bersih yang lembut, dan periksakan ke dokter bila telinga nyeri atau berdenging terus-menerus.'
    ],
    keyFormulas: [
      { label: 'Kecepatan rambat bunyi pada medium', formula: '\\text{Padat} > \\text{Cair} > \\text{Gas} \\qquad (\\text{Ruang hampa} = \\text{tidak merambat})' },
      { label: 'Pengaruh getaran terhadap bunyi', formula: '\\text{Getaran cepat (frekuensi tinggi)} \\Rightarrow \\text{Nada tinggi} \\qquad \\text{Simpangan besar (amplitudo)} \\Rightarrow \\text{Bunyi keras}' },
      { label: 'Alur mendengar bunyi', formula: '\\text{Daun telinga} \\to \\text{Gendang telinga} \\to \\text{Tulang pendengaran} \\to \\text{Koklea} \\to \\text{Otak}' }
    ],
    workedExamples: [
      {
        title: 'Komunikasi astronot di luar angkasa',
        problem: 'Dua astronot sedang memperbaiki bagian luar stasiun antariksa di ruang hampa. Meskipun berjarak dekat, mereka tetap harus memakai radio di helmnya untuk bercakap-cakap. Mengapa demikian?',
        solution: 'Luar angkasa merupakan **ruang hampa** yang hampir tidak memiliki partikel udara. Karena bunyi memerlukan medium untuk merambat, suara tidak dapat merambat langsung di ruang hampa sehingga diperlukan komunikasi radio.'
      },
      {
        title: 'Membedakan gaung dan gema',
        problem: 'Saat Andi berbicara di aula sekolah yang kosong dan berdinding beton, suaranya terdengar berdesing dan membingungkan. Saat berteriak di lembah pegunungan, suaranya terdengar terulang jelas beberapa saat sesudah ia selesai berteriak. Peristiwa apa yang terjadi di aula dan di lembah?',
        solution: 'Di aula tertutup jarak dinding pemantul dekat sehingga bunyi pantul datang hampir bersamaan dan mengganggu bunyi asli; peristiwa ini disebut **gaung**. Di lembah dengan tebing jauh, bunyi pantul datang setelah bunyi asli selesai sehingga terdengar jelas terpisah; peristiwa ini disebut **gema**.'
      },
      {
        title: 'Tinggi nada pada gelas kaca berisi air',
        problem: 'Tiga gelas kaca identik diisi air berbeda: gelas P hampir penuh, gelas Q setengah penuh, dan gelas R hanya sedikit airnya. Saat dinding luar masing-masing gelas diketuk pelan dengan sendok logam, gelas mana yang menghasilkan nada paling tinggi?',
        solution: 'Saat dinding gelas diketuk, gelas dan air di dalamnya bergetar. Gelas **R** memiliki paling sedikit air sehingga lebih ringan untuk bergetar cepat dan menghasilkan **nada paling tinggi**, sedangkan gelas P bergetar paling lambat sehingga bernada paling rendah.'
      }
    ],
    misconceptions: [
      'Menganggap bunyi merambat paling cepat melalui udara karena sehari-hari kita mendengar suara lewat udara. Bunyi sebenarnya merambat paling cepat pada benda padat karena partikelnya paling rapat.',
      'Menyamakan suara keras dengan nada tinggi. Pukulan drum besar yang keras memiliki amplitudo besar tetapi nadanya rendah, sedangkan tiupan peluit pelan memiliki nada tinggi.',
      'Mengira kotoran telinga harus dibersihkan sampai jauh ke dalam dengan korek kuping. Kotoran telinga bagian luar sebenarnya keluar secara alami, sedangkan mengorek terlalu dalam dapat mendorong kotoran menyumbat atau merobek gendang telinga.'
    ],
    tutorTip: 'Ingat dua kata pasangan ini: FREKUENSI mengatur tinggi-rendah NADA (makin cepat getaran, nada makin tinggi), sedangkan AMPLITUDO mengatur kuat-lemah BUNYI (makin besar simpangan, bunyi makin keras).'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Semua sumber bunyi seperti senar gitar yang dipetik, peluit yang ditiup, dan pita suara saat berbicara memiliki kesamaan, yaitu semuanya menghasilkan bunyi karena...',
      options: ['bergetar', 'memanas', 'memantulkan cahaya', 'mengubah warna'],
      answer: 'A',
      hint: 'Sentuhlah tenggorokanmu saat sedang berbicara atau bersenandung.',
      solution: 'Bunyi hanya dihasilkan oleh benda yang **bergetar**. Saat berbicara, pita suara di tenggorokan terasa bergetar. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Berikut ini adalah tempat atau medium yang TIDAK dapat dilalui oleh bunyi untuk merambat, yaitu...',
      options: ['batang besi', 'air di kolam renang', 'ruang hampa', 'udara terbuka'],
      answer: 'C',
      hint: 'Bunyi membutuhkan partikel zat perantara agar getarannya dapat diteruskan.',
      solution: 'Bunyi dapat merambat melalui zat padat (besi), zat cair (air), dan gas (udara), tetapi tidak dapat merambat di **ruang hampa** karena tidak ada partikel penghantar getaran. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bagian telinga tengah berupa selaput tipis yang pertama kali bergetar ketika menerima gelombang bunyi dari saluran telinga adalah...',
      options: ['daun telinga', 'rumah siput', 'saluran setengah lingkaran', 'gendang telinga'],
      answer: 'D',
      hint: 'Namanya mirip dengan alat musik pukul yang memiliki selaput tipis.',
      solution: '**Gendang telinga** adalah selaput tipis di perbatasan telinga luar dan telinga tengah yang bergetar saat gelombang bunyi datang. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Agar suara di dalam ruangan studio musik tidak terganggu pantulan bunyi, dinding ruangan sebaiknya dilapisi bahan lunak penyerap bunyi seperti...',
      options: ['lempeng kaca tebal', 'busa dan karpet tebal', 'pelat besi mengilap', 'keramik lantai licin'],
      answer: 'B',
      hint: 'Pilih bahan yang empuk dan berpori sehingga dapat meredam getaran suara.',
      solution: 'Benda lunak dan berpori seperti **busa dan karpet tebal** mampu menyerap bunyi dengan baik, sedangkan kaca, besi, dan keramik justru memantulkan bunyi. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Reno menempelkan telinganya pada salah satu ujung pagar besi panjang, lalu temannya mengetuk ujung pagar lainnya secara pelan. Reno dapat mendengar ketukan dengan jelas melalui pagar. Hal ini menunjukkan bahwa...',
      options: [
        'bunyi hanya bisa terdengar jika pagar dipanaskan',
        'besi mengubah bunyi menjadi gelombang cahaya',
        'bunyi dapat merambat melalui benda padat',
        'bunyi tidak dapat merambat di udara sama sekali'
      ],
      answer: 'C',
      hint: 'Pagar besi termasuk benda berwujud padat.',
      solution: 'Terdengarnya ketukan melalui pagar besi membuktikan bahwa **bunyi dapat merambat melalui benda padat**, bahkan lebih cepat dan jelas daripada melalui udara. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Perhatikan gambar pola perambatan bunyi di udara berikut. Ketika garpu tala bergetar, partikel udara di sekitarnya membentuk rapatan dan renggangan secara bergantian. Dari gambar tersebut dapat disimpulkan bahwa agar bunyi sampai ke telinga kita, bunyi memerlukan...',
      options: [
        'cahaya matahari untuk menerangi partikel',
        'ruang hampa agar tidak terhalang udara',
        'medium atau zat perantara yang partikelnya dapat bergetar',
        'suhu udara yang sangat dingin'
      ],
      answer: 'C',
      hint: 'Rapatan dan renggangan hanya dapat terbentuk jika ada partikel zat di sepanjang lintasan bunyi.',
      solution: 'Pola rapatan dan renggangan hanya dapat terbentuk dan merambat bila ada partikel zat yang ikut bergetar, sehingga bunyi memerlukan **medium atau zat perantara**. Jawaban: **C**.',
      visual: {
        type: 'wave',
        props: {
          title: 'Perambatan Gelombang di Udara',
          caption: 'Pola rapatan dan renggangan saat suara merambat',
          kind: 'longitudinal',
          cycles: 2
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Di sebuah gedung pertemuan yang dindingnya polos tanpa tirai atau karpet, suara pembicara terdengar tumpang tindih dengan pantulannya sehingga sulit dimengerti. Peristiwa pemantulan bunyi tersebut disebut...',
      options: ['gema', 'gaung', 'pembiasan', 'resonansi'],
      answer: 'B',
      hint: 'Pantulan ini datang terlalu cepat sehingga menumpuk bunyi aslinya.',
      solution: '**Gaung** (kerdam) adalah bunyi pantul yang datang hampir bersamaan dengan bunyi asli sehingga membuat suara terdengar tidak jelas. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Di dalam telinga tengah terdapat tiga tulang pendengaran kecil, yaitu tulang martil, landasan, dan sanggurdi. Fungsi utama ketiga tulang tersebut adalah...',
      options: [
        'menghasilkan cairan kotoran untuk menyaring debu',
        'mengubah energi bunyi langsung menjadi warna',
        'menjaga keseimbangan tubuh saat berlari',
        'meneruskan dan memperkuat getaran dari gendang telinga menuju rumah siput'
      ],
      answer: 'D',
      hint: 'Ketiga tulang ini tersambung tepat di belakang gendang telinga hingga ke telinga dalam.',
      solution: 'Tulang martil, landasan, dan sanggurdi berfungsi **meneruskan dan memperkuat getaran** mekanis dari gendang telinga menuju rumah siput (koklea). Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Ketika pemain gitar menekan salah satu senar agar bagian senar yang bergetar menjadi lebih pendek, lalu memetiknya dengan kekuatan yang sama, bunyi yang dihasilkan memiliki nada yang lebih tinggi. Penyebabnya adalah...',
      options: [
        'senar yang lebih pendek bergetar lebih cepat',
        'senar yang pendek menghasilkan simpangan getar paling besar',
        'udara di sekitar gitar menjadi lebih berat',
        'senar yang pendek berhenti bergetar lebih awal sebelum berbunyi'
      ],
      answer: 'A',
      hint: 'Ingat hubungan antara cepat-lambatnya getaran dengan tinggi-rendahnya nada.',
      solution: 'Bagian senar yang lebih pendek **bergetar lebih cepat** (frekuensi lebih tinggi), sehingga menghasilkan **nada yang lebih tinggi**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah kapal nelayan modern memancarkan bunyi ke arah perairan di bawahnya dan menerima kembali pantulan bunyi dari kumpulan ikan di laut. Peristiwa alam yang dimanfaatkan oleh alat tersebut adalah...',
      options: [
        'bunyi dapat dibelokkan oleh angin laut',
        'bunyi dapat dipantulkan ketika mengenai benda atau dasar laut',
        'bunyi tidak dapat merambat di dalam air laut',
        'bunyi hanya merambat lurus di ruang hampa'
      ],
      answer: 'B',
      hint: 'Alat tersebut menunggu bunyi kembali setelah mengenai gerombolan ikan.',
      solution: 'Gelombang bunyi merambat di dalam air dan **dipantulkan kembali** saat mengenai benda keras seperti tubuh ikan atau dasar laut. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Perhatikan gambar ilustrasi simpangan bunyi dari suatu senar gitar berikut. Jarak X menunjukkan simpangan terjauh dari posisi diam ke puncak gelombang. Ketika senar gitar dipetik jauh lebih kuat sehingga Jarak X menjadi makin besar, bunyi yang terdengar menjadi...',
      options: [
        'lebih lemah karena simpangannya membesar',
        'lebih keras karena amplitudo getarannya makin besar',
        'lebih rendah nadanya karena jumlah gelombang bertambah',
        'hilang karena senar berhenti memantulkan udara'
      ],
      answer: 'B',
      hint: 'Simpangan terjauh disebut amplitudo; hubungkan amplitudo dengan kuat-lemah bunyi.',
      solution: 'Jarak X dari posisi diam ke puncak adalah **amplitudo**. Makin kuat senar dipetik, makin besar amplitudo getarannya sehingga bunyi yang dihasilkan terdengar **lebih keras**. Jawaban: **B**.',
      visual: {
        type: 'wave',
        props: {
          title: 'Ilustrasi Simpangan Bunyi',
          caption: 'Garis mendatar menunjukkan posisi diam',
          kind: 'transversal',
          cycles: 2,
          amplitudeLabel: 'Jarak X'
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Di telinga dalam terdapat rumah siput (koklea) dan tiga saluran setengah lingkaran. Jika seseorang mengalami peradangan atau gangguan pada bagian tiga saluran setengah lingkaran, keluhan yang paling mungkin dialami adalah...',
      options: [
        'tidak bisa membedakan warna cahaya',
        'suara di ruangan selalu terdengar bergema',
        'tulang pendengaran berubah menjadi lunak',
        'sering merasa pusing berputar dan kehilangan keseimbangan tubuh'
      ],
      answer: 'D',
      hint: 'Selain mendengar, telinga dalam memiliki bagian khusus yang mengatur posisi tubuh.',
      solution: 'Tiga saluran setengah lingkaran di telinga dalam berfungsi sebagai **alat keseimbangan tubuh**, sehingga gangguannya membuat seseorang pusing dan kehilangan keseimbangan. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Saat naik pesawat terbang atau berkendara cepat menuju puncak gunung, telinga sering terasa pengang atau sedikit nyeri, lalu kembali nyaman setelah kita menelan ludah atau menguap. Bagian telinga yang membantu menyeimbangkan tekanan udara di telinga tengah saat menelan adalah...',
      options: [
        'saluran Eustachius yang menghubungkan telinga tengah dan tenggorokan',
        'daun telinga yang membesar saat rahang bergerak',
        'saraf pendengaran yang memutus bunyi mesin pesawat',
        'gendang telinga yang membuka lubang kecil sementara'
      ],
      answer: 'A',
      hint: 'Saluran ini terbuka singkat ketika kita menguap atau menelan sehingga udara dapat masuk atau keluar.',
      solution: '**Saluran Eustachius** menghubungkan rongga telinga tengah dengan tenggorokan dan terbuka saat kita menelan atau menguap agar tekanan udara di kedua sisi gendang telinga kembali seimbang. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Rina memukul sebuah drum dengan pelan, lalu memukul drum yang sama lebih keras tanpa mengubah ketegangan kulit drum. Pernyataan yang benar mengenai perbedaan bunyi kedua pukulan tersebut adalah...',
      options: [
        'pukulan kedua bernada jauh lebih tinggi dan bunyinya lebih pelan',
        'pukulan kedua terdengar lebih pelan karena kulit drum bergetar lambat',
        'tinggi nadanya sama, tetapi pukulan kedua terdengar lebih keras karena simpangan getarannya lebih besar',
        'pukulan pertama merambat di benda padat, sedangkan pukulan kedua tidak'
      ],
      answer: 'C',
      hint: 'Memukul lebih keras mengubah kekuatan getaran (amplitudo), bukan jenis nada dasar drum.',
      solution: 'Karena ukuran dan ketegangan drum tetap sama, **tinggi nadanya sama**, namun pukulan yang lebih kuat menghasilkan simpangan getaran (amplitudo) lebih besar sehingga bunyi terdengar **lebih keras**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Ruang perpustakaan sekolah baru memiliki dinding beton rata dan lantai keramik sehingga suara langkah kaki dan obrolan pelan bergema cukup mengganggu. Usulan paling tepat untuk mengurangi pantulan bunyi sekaligus menjaga suasana nyaman adalah...',
      options: [
        'melapisi seluruh dinding dengan lembaran aluminium mengilap',
        'membuka seluruh kaca jendela agar bunyi berubah menjadi cahaya',
        'mengganti kursi kayu dengan kursi logam berongga',
        'memasang tirai kain tebal, papan gabus pengumuman di dinding, dan karpet pada area baca'
      ],
      answer: 'D',
      hint: 'Pilih bahan bertekstur lunak atau berpori yang banyak menyerap energi bunyi.',
      solution: 'Tirai kain tebal, papan gabus, dan karpet merupakan bahan lunak berpori yang **menyerap bunyi** sehingga dapat meredam pantulan dan mengurangi kebisingan ruang. Jawaban: **D**.'
    })
  ]
});
