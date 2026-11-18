import { bab, soal } from '../author.js';

export default bab({
  grade: 4,
  number: 1,
  slug: 'wujud-zat-dan-perubahannya',
  title: 'Wujud Zat dan Perubahannya',
  element: 'Pemahaman IPAS (Zat dan Perubahannya): wujud zat, sifat, dan perubahan wujudnya',
  summary: {
    overview: 'Setiap benda di sekitar kita tersusun atas materi atau zat yang memiliki massa dan menempati ruang. Bab ini membahas cara mengenal massa dan volume secara sederhana, sifat zat padat, cair, dan gas, serta bagaimana panas (kalor) atau pendinginan mengubah wujud benda dalam kehidupan sehari-hari.',
    coreConcepts: [
      'Materi, Massa, dan Volume: Materi adalah segala sesuatu yang memiliki massa dan menempati ruang (memiliki volume). Massa menyatakan banyaknya bahan penyusun suatu benda dan diukur dengan timbangan atau neraca dalam satuan gram (g) atau kilogram (kg). Volume menyatakan ukuran ruang yang ditempati benda dan dapat diukur dengan gelas ukur dalam mililiter (mL) atau liter (L).',
      'Sifat Zat Padat: Zat padat memiliki bentuk dan volume yang tetap walaupun dipindahkan ke wadah yang berbeda. Contohnya batu, pensil, buku, dan penghapus. Bentuk zat padat tidak mengikuti wadahnya dan baru berubah jika diberi perlakuan seperti dipotong, ditekan, atau dipatahkan.',
      'Sifat Zat Cair: Zat cair memiliki volume yang tetap, tetapi bentuknya selalu berubah mengikuti bentuk wadahnya. Permukaan zat cair yang tenang selalu mendatar, dan zat cair mengalir dari tempat tinggi ke tempat rendah serta dapat meresap melalui celah kecil. Contohnya air, minyak goreng, kecap, dan sirup.',
      'Sifat Zat Gas: Zat gas memiliki bentuk dan volume yang berubah-ubah sesuai wadah atau ruangan yang ditempatinya serta menekan ke segala arah. Gas tidak selalu terlihat oleh mata, tetapi dapat dirasakan dan memiliki massa, misalnya udara di dalam balon, ban sepeda, dan uap air.',
      'Perubahan Wujud yang Menyerap Kalor: Ketika benda dipanaskan atau menerima kalor sehingga suhunya naik, wujudnya berubah menjadi lebih renggang. Mencair adalah perubahan dari padat ke cair (es batu meleleh). Menguap adalah perubahan dari cair ke gas (air mendidih, pakaian basah mengering). Menyublim adalah perubahan dari padat langsung menjadi gas (kapur barus lama-lama habis).',
      'Perubahan Wujud yang Melepaskan Kalor: Ketika benda didinginkan atau melepaskan kalor sehingga suhunya turun, wujudnya menjadi lebih rapat. Membeku adalah perubahan dari cair ke padat (air di freezer menjadi es batu). Mengembun adalah perubahan dari gas ke cair (titik air di luar gelas berisi es, embun pagi). Mengkristal adalah perubahan dari gas langsung menjadi padat (terbentuknya bunga es di dalam freezer).'
    ],
    keyFormulas: [
      { label: 'Menjumlahkan massa benda', formula: 'm_{\\text{total}} = m_1 + m_2' },
      { label: 'Volume benda di gelas ukur', formula: 'V_{\\text{benda}} = V_{\\text{akhir}} - V_{\\text{awal}}' },
      { label: 'Kenaikan suhu saat dipanaskan', formula: '\\text{Kenaikan suhu} = \\text{Suhu akhir} - \\text{Suhu awal}' }
    ],
    workedExamples: [
      {
        title: 'Mengukur volume batu dengan gelas ukur',
        problem: 'Sebuah gelas ukur mula-mula berisi 120 mL air. Setelah sebuah batu kecil dimasukkan seluruhnya ke dalam air, permukaan air naik hingga angka 175 mL. Berapa volume batu tersebut?',
        solution: 'Volume batu sama dengan selisih volume air setelah dan sebelum batu dimasukkan:\n$V_{\\text{benda}} = 175 - 120 = 55\\ \\text{mL}$.\nJadi, volume batu tersebut adalah **55 mL**.'
      },
      {
        title: 'Menghitung selisih suhu pada termometer',
        problem: 'Air dingin di gelas pertama bersuhu 15 °C, sedangkan air hangat di gelas kedua bersuhu 65 °C. Berapa selisih suhu kedua gelas air tersebut?',
        solution: 'Kurangkan suhu yang lebih tinggi dengan suhu yang lebih rendah:\n$65 - 15 = 50\\ ^\\circ\\text{C}$.\nJadi, selisih suhu kedua gelas air adalah **50 °C**.'
      },
      {
        title: 'Mengelompokkan perubahan wujud karena panas atau dingin',
        problem: 'Kelompokkan peristiwa berikut ke dalam perubahan wujud karena menerima panas atau melepas panas: (1) mentega meleleh di wajan, (2) air menjadi es di freezer, (3) kapur barus di lemari mengecil, (4) embun muncul di kaca mobil pada pagi hari.',
        solution: 'Perubahan wujud karena menerima panas: (1) mentega meleleh (**mencair**) dan (3) kapur barus mengecil (**menyublim**).\nPerubahan wujud karena melepas panas: (2) air menjadi es (**membeku**) dan (4) embun di kaca mobil (**mengembun**).'
      }
    ],
    misconceptions: [
      'Mengira udara tidak memiliki massa dan tidak menempati ruang. Faktanya, balon yang ditiup lebih berat daripada balon kempis dan mengembang karena udara menempati ruang di dalamnya.',
      'Mengira titik-titik air di bagian luar gelas berisi es berasal dari air es yang merembes menembus kaca. Titik-titik air itu berasal dari uap air di udara sekitar yang mendingin lalu mengembun.',
      'Menganggap asap putih di atas air mendidih adalah uap air murni berwujud gas. Uap air yang masih berupa gas tidak terlihat mata; asap putih itu sebenarnya titik-titik air sangat kecil yang sudah mengembun kembali.'
    ],
    tutorTip: 'Ingat arah panasnya: perubahan ke wujud yang lebih renggang (padat → cair → gas) selalu menerima panas (mencair, menguap, menyublim). Sebaliknya, arah pulang (gas → cair → padat) selalu melepas panas (mengembun, membeku, mengkristal).'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sebuah penghapus karet dipindahkan dari dalam kotak pensil ke atas meja belajar. Yang terjadi pada bentuk dan volume penghapus adalah...',
      options: [
        'bentuknya berubah mengikuti bentuk meja',
        'volumenya bertambah menjadi lebih besar',
        'bentuk dan volumenya tetap',
        'penghapus mengalir memenuhi seluruh meja'
      ],
      answer: 'C',
      hint: 'Penghapus termasuk benda padat. Ingat sifat utama zat padat.',
      solution: 'Penghapus berwujud padat. Zat padat memiliki **bentuk dan volume yang tetap** walaupun dipindahkan ke tempat berbeda. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sirup yang dituang dari botol ke dalam gelas akan memiliki sifat...',
      options: [
        'bentuknya berubah mengikuti bentuk gelas, sedangkan volumenya tetap',
        'bentuk dan volumenya selalu tetap seperti bentuk botol',
        'bentuk dan volumenya berubah memenuhi seluruh ruangan',
        'volumenya berkurang ketika dipindahkan ke gelas lebar'
      ],
      answer: 'A',
      hint: 'Sirup adalah zat cair. Perhatikan bagaimana bentuk air atau sirup saat dipindah wadah.',
      solution: 'Sirup termasuk zat cair. Zat cair memiliki **bentuk yang berubah mengikuti wadahnya**, tetapi **volumenya tetap**. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Ketika ditiup, balon karet mengembang semakin besar ke semua sisi. Hal ini menunjukkan bahwa gas atau udara...',
      options: [
        'memiliki bentuk yang selalu tetap',
        'hanya menekan ke arah bawah saja',
        'tidak memiliki massa sama sekali',
        'menempati ruang dan menekan ke segala arah'
      ],
      answer: 'D',
      hint: 'Balon mengembang merata ke segala sisi saat udara masuk.',
      solution: 'Udara adalah zat gas yang sifatnya mengisi ruang yang ada dan **menekan ke segala arah**, sehingga dinding balon mengembang merata. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sepotong mentega yang diletakkan di atas wajan panas lama-kelamaan berubah menjadi cairan kuning. Perubahan wujud yang terjadi disebut...',
      options: ['membeku', 'mencair', 'mengembun', 'menyublim'],
      answer: 'B',
      hint: 'Padat berubah menjadi cair karena menerima panas.',
      solution: 'Mentega yang awalnya padat berubah menjadi cair karena dipanaskan. Perubahan wujud dari padat menjadi cair disebut **mencair**. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Andi ingin mengetahui massa sebungkus tepung terigu secara tepat. Alat ukur yang paling sesuai untuk digunakan Andi adalah...',
      options: ['timbangan atau neraca', 'gelas ukur', 'penggaris plastik', 'termometer'],
      answer: 'A',
      hint: 'Massa dinyatakan dalam gram atau kilogram.',
      solution: 'Massa benda diukur menggunakan **timbangan atau neraca** (satuannya gram atau kilogram). Gelas ukur untuk volume, penggaris untuk panjang, dan termometer untuk suhu. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Perhatikan gambar dua termometer berskala 0 sampai 100 °C yang mengukur suhu air di dua gelas. Gelas A berisi air biasa bersuhu 25 °C, sedangkan Gelas B berisi air hangat bersuhu 75 °C. Berapa selisih suhu antara Gelas B dan Gelas A?',
      options: ['25 °C', '40 °C', '50 °C', '100 °C'],
      answer: 'C',
      hint: 'Kurangkan suhu Gelas B dengan suhu Gelas A.',
      solution: 'Selisih suhu = $75 - 25 = 50\\ ^\\circ\\text{C}$. Jadi suhu Gelas B lebih tinggi **50 °C** daripada Gelas A. Jawaban: **C**.',
      visual: {
        type: 'thermometer',
        props: {
          title: 'Suhu Air Gelas A dan Gelas B',
          caption: '*Pengukuran menggunakan termometer skala Celsius',
          scales: [
            { name: 'Gelas A', bottom: '0', top: '100', reading: '25', level: 0.25 },
            { name: 'Gelas B', bottom: '0', top: '100', reading: '75', level: 0.75 }
          ]
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Pada pagi hari yang sejuk, sering tampak titik-titik air menempel di bagian luar kaca jendela atau di permukaan daun. Peristiwa tersebut terjadi karena...',
      options: [
        'air hujan merembes keluar dari dalam daun',
        'es di udara langsung berubah menjadi padatan',
        'kaca jendela mencair karena terkena sinar pagi',
        'uap air di udara mendingin sehingga mengembun menjadi titik-titik air'
      ],
      answer: 'D',
      hint: 'Gas berubah menjadi cair ketika bertemu permukaan yang dingin.',
      solution: 'Uap air (gas) di udara yang menyentuh permukaan dingin akan melepaskan kalor dan berubah wujud menjadi titik-titik air (cair). Proses ini disebut **mengembun**. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Kapur barus (kamper) yang diletakkan di dalam lemari pakaian lama-kelamaan mengecil dan habis, serta tercium bau harum di lemari tanpa meninggalkan cairan. Perubahan wujud yang dialami kapur barus adalah...',
      options: [
        'menguap, dari cair menjadi gas',
        'menyublim, dari padat menjadi gas',
        'mengkristal, dari gas menjadi padat',
        'mencair, dari padat menjadi cair'
      ],
      answer: 'B',
      hint: 'Zat padat langsung berubah menjadi gas tanpa menjadi cair dulu.',
      solution: 'Kapur barus berwujud padat lalu langsung berubah menjadi gas yang berbau harum tanpa mencair terlebih dahulu. Peristiwa ini disebut **menyublim**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah gelas ukur berisi 150 mL air. Ketika sebuah kelereng besar dimasukkan seluruhnya ke dasar gelas, permukaan air naik menjadi 190 mL. Volume kelereng tersebut adalah...',
      options: ['40 mL', '150 mL', '190 mL', '340 mL'],
      answer: 'A',
      hint: 'Volume benda = volume akhir dikurangi volume awal.',
      solution: 'Volume kelereng = $190 - 150 = 40\\ \\text{mL}$. Kelereng mendesak air naik sesuai besar volumenya. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pasangan perubahan wujud berikut yang terjadi karena zat melepaskan panas (didinginkan) adalah...',
      options: [
        'mencair dan menguap',
        'menguap dan menyublim',
        'mencair dan menyublim',
        'membeku dan mengembun'
      ],
      answer: 'D',
      hint: 'Saat didinginkan, wujud zat berubah dari gas ke cair atau cair ke padat.',
      solution: '**Membeku** (cair ke padat) dan **mengembun** (gas ke cair) terjadi saat zat didinginkan dan melepaskan panas. Sebaliknya, mencair, menguap, dan menyublim membutuhkan panas. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Gambar menunjukkan hasil ukur termometer skala 0 sampai 100 °C pada tiga keadaan air: Keadaan 1 bersuhu 0 °C, Keadaan 2 bersuhu 30 °C, dan Keadaan 3 bersuhu 100 °C. Jika air pada Keadaan 3 terus dipanaskan, perubahan wujud yang berlangsung cepat adalah...',
      options: [
        'membeku menjadi es',
        'menguap menjadi uap air',
        'mengembun menjadi titik air',
        'menyublim menjadi padat'
      ],
      answer: 'B',
      hint: 'Pada suhu 100 °C, air mencapai titik didihnya.',
      solution: 'Pada suhu **100 °C**, air mendidih dan cepat berubah wujud dari cair menjadi gas (**menguap menjadi uap air**) karena terus menerima kalor. Jawaban: **B**.',
      visual: {
        type: 'thermometer',
        props: {
          title: 'Suhu Air pada Tiga Keadaan',
          caption: '*Skala termometer Celsius dari 0 sampai 100',
          scales: [
            { name: 'Keadaan 1', bottom: '0', top: '100', reading: '0', level: 0.05 },
            { name: 'Keadaan 2', bottom: '0', top: '100', reading: '30', level: 0.3 },
            { name: 'Keadaan 3', bottom: '0', top: '100', reading: '100', level: 1.0 }
          ]
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Di dalam ruang pembeku (freezer) kulkas yang sangat dingin, uap air di udara dapat langsung berubah menjadi lapisan bunga es tanpa menjadi cairan terlebih dahulu. Peristiwa ini merupakan contoh...',
      options: ['mengembun', 'membeku', 'mengkristal', 'menyublim'],
      answer: 'C',
      hint: 'Gas langsung berubah menjadi zat padat.',
      solution: 'Perubahan wujud dari gas (uap air) langsung menjadi padat (bunga es) tanpa melalui fase cair disebut **mengkristal** (deposisi). Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Siti menggantung dua balon kempes yang sama berat di kedua ujung kayu seimbang. Setelah itu, satu balon ditiup hingga besar lalu digantung kembali di ujung yang sama. Hasilnya, sisi balon berisi udara turun lebih rendah. Kesimpulan yang paling tepat adalah...',
      options: [
        'udara atau gas memiliki massa',
        'balon yang ditiup kehilangan beratnya',
        'udara hanya menekan ke arah atas',
        'karet balon berubah menjadi zat padat yang lebih berat'
      ],
      answer: 'A',
      hint: 'Sisi yang turun pada timbangan menunjukkan sisi yang lebih berat.',
      solution: 'Ujung kayu di sisi balon yang ditiup turun lebih rendah karena bertambah massa dari udara di dalamnya. Hal ini membuktikan bahwa **udara atau gas memiliki massa**. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Ibu menjemur dua handuk basah yang ukurannya sama. Handuk pertama dibentangkan lebar di bawah terik matahari, sedangkan handuk kedua dilipat dan ditaruh di tempat teduh. Handuk pertama jauh lebih cepat kering karena...',
      options: [
        'air di handuk pertama membeku terlebih dahulu',
        'handuk pertama terhindar dari kalor matahari',
        'permukaan yang luas dan suhu hangat mempercepat penguapan',
        'cahaya matahari mengubah air menjadi benda padat'
      ],
      answer: 'C',
      hint: 'Pakaian kering karena air di dalamnya menguap.',
      solution: 'Air di handuk mengering karena mengalami **penguapan** (cair menjadi gas). Membentangkan handuk memperluas permukaan dan sinar matahari menambah panas, sehingga **penguapan berlangsung lebih cepat**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebongkah es batu diletakkan di dalam panci lalu dipanaskan di atas kompor hingga seluruhnya berubah menjadi air, dan terus dipanaskan sampai air mendidih serta habis menjadi uap. Urutan perubahan wujud yang terjadi adalah...',
      options: [
        'membeku lalu mengembun',
        'mengembun lalu menguap',
        'menyublim lalu membeku',
        'mencair lalu menguap'
      ],
      answer: 'D',
      hint: 'Es (padat) → air (cair) → uap air (gas).',
      solution: 'Es batu berubah dari padat menjadi cair (**mencair**), kemudian air yang terus dipanaskan berubah dari cair menjadi gas (**menguap**). Jadi urutannya adalah **mencair lalu menguap**. Jawaban: **D**.'
    })
  ]
});
