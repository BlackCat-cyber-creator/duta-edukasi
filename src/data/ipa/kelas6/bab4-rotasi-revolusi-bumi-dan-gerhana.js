import { bab, soal } from '../author.js';

export default bab({
  grade: 6,
  number: 4,
  slug: 'rotasi-revolusi-bumi-dan-gerhana',
  title: 'Rotasi, Revolusi Bumi, dan Gerhana',
  element: 'Pemahaman IPAS: rotasi dan revolusi bumi, fase bulan, serta gerhana',
  summary: {
    overview: 'Setiap hari kita menyaksikan Matahari terbit di timur dan tenggelam di barat, serta bentuk Bulan yang tampak berubah-ubah dari malam ke malam. Semua peristiwa itu terjadi karena gerak rotasi dan revolusi Bumi serta peredaran Bulan. Bab ini membahas akibat rotasi Bumi (24 jam), revolusi Bumi (365¼ hari), fase-fase Bulan, serta terjadinya gerhana Matahari dan gerhana Bulan beserta bayangan umbra dan penumbra.',
    coreConcepts: [
      'Rotasi Bumi dan Akibatnya: Rotasi bumi adalah perputaran bumi pada porosnya dari barat ke timur selama sekitar 24 jam. Akibatnya terjadi pergantian siang dan malam (bagian menghadap Matahari mengalami siang, yang membelakangi mengalami malam), gerak semu harian Matahari yang tampak terbit di timur dan terbenam di barat, serta perbedaan waktu di berbagai wilayah bumi. Karena bumi berputar 360° dalam 24 jam, setiap 15° bujur berselisih 1 jam; Indonesia memiliki tiga zona waktu yaitu WIB, WITA, dan WIT yang masing-masing berbeda 1 jam.',
      'Revolusi Bumi dan Pergantian Musim: Revolusi bumi adalah gerak bumi mengelilingi Matahari selama sekitar 365¼ hari (365,25 hari) dengan sumbu rotasi miring 23,5°. Kelebihan ¼ hari setiap tahun dikumpulkan setiap 4 tahun menjadi tahun kabisat berjumlah 366 hari (Februari menjadi 29 hari). Akibat revolusi dan kemiringan porosnya: pergantian musim di belahan bumi utara dan selatan, gerak semu tahunan Matahari antara garis balik utara dan selatan, perbedaan lamanya siang dan malam, serta terlihatnya rasi bintang yang berbeda sepanjang tahun.',
      'Fase-Fase Bulan: Bulan berotasi dan berevolusi mengelilingi bumi dalam periode yang sama sehingga wajah bulan yang menghadap bumi selalu sama. Bagian bulan yang diterangi Matahari dan tampak dari bumi berubah-ubah setiap malam membentuk fase bulan: bulan baru (tidak tampak), sabit awal, kuartal pertama (separuh), cembung, bulan purnama (bulat penuh), cembung akhir, kuartal akhir, dan sabit akhir. Satu siklus lengkap fase bulan berlangsung sekitar 29,5 hari.',
      'Gerhana Matahari dan Jenisnya: Gerhana matahari terjadi pada siang hari saat fase bulan baru, ketika Matahari, Bulan, dan Bumi berada pada satu garis lurus sehingga bayangan bulan jatuh ke permukaan bumi. Daerah bayangan inti yang gelap pekat disebut umbra, sedangkan bayangan kabur di sekelilingnya disebut penumbra. Wilayah yang terkena umbra mengalami gerhana matahari total; wilayah di penumbra mengalami gerhana matahari sebagian. Jika bulan berada di titik terjauh dari bumi sehingga kerucut umbra tidak menyentuh permukaan bumi, tampak gerhana matahari cincin.',
      'Gerhana Bulan dan Posisi Umbra-Penumbra: Gerhana bulan terjadi pada malam hari saat fase bulan purnama, ketika Matahari, Bumi, dan Bulan berada pada satu garis lurus sehingga bulan masuk ke dalam bayangan bumi. Jika seluruh piringan bulan masuk ke daerah umbra bumi, terjadi gerhana bulan total (bulan sering tampak kemerahan). Jika hanya sebagian bulan masuk ke umbra dan bagian lain berada di penumbra, terjadi gerhana bulan sebagian. Bila bulan hanya melewati daerah penumbra, terjadilah gerhana bulan penumbra yang redup tipis.'
    ],
    keyFormulas: [
      { label: 'Selisih waktu rotasi bumi', formula: '\\dfrac{360^\\circ}{24\\ \\text{jam}} = 15^\\circ\\ \\text{per jam} \\qquad (\\text{WITA} = \\text{WIB} + 1,\\ \\text{WIT} = \\text{WIB} + 2)' },
      { label: 'Periode gerak bumi dan bulan', formula: '\\text{Rotasi} \\approx 24\\ \\text{jam} \\qquad \\text{Revolusi} \\approx 365\\tfrac{1}{4}\\ \\text{hari} \\qquad \\text{Fase Bulan} \\approx 29{,}5\\ \\text{hari}' },
      { label: 'Susunan posisi saat gerhana', formula: '\\text{Gerhana Matahari: } \\text{M} - \\text{Bl} - \\text{B} \\qquad \\text{Gerhana Bulan: } \\text{M} - \\text{B} - \\text{Bl}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung perbedaan waktu Indonesia',
        problem: 'Upacara bendera di Jakarta (WIB) dimulai pukul 07.00. Pukul berapa saat yang sama di Denpasar (WITA) dan Jayapura (WIT)?',
        solution: 'WITA lebih cepat 1 jam daripada WIB: $07.00 + 1\\ \\text{jam} = \\mathbf{08.00\\ \\text{WITA}}$.\nWIT lebih cepat 2 jam daripada WIB: $07.00 + 2\\ \\text{jam} = \\mathbf{09.00\\ \\text{WIT}}$.'
      },
      {
        title: 'Menentukan jenis gerhana dari daerah bayangan',
        problem: 'Pada siang hari saat fase bulan baru, Kota X berada di daerah umbra bulan dan Kota Y berada di daerah penumbra bulan. Peristiwa apa yang disaksikan warga di kedua kota?',
        solution: 'Karena terjadi pada fase bulan baru saat bayangan bulan jatuh ke bumi, peristiwanya adalah **gerhana matahari**. Warga Kota X di **umbra** melihat **gerhana matahari total**, sedangkan warga Kota Y di **penumbra** melihat **gerhana matahari sebagian**.'
      },
      {
        title: 'Menjelaskan munculnya tahun kabisat',
        problem: 'Mengapa setiap empat tahun sekali jumlah hari dalam satu tahun menjadi 366 hari?',
        solution: 'Satu kali revolusi bumi memerlukan waktu sekitar **$365\\tfrac{1}{4}$ hari**. Sisa $\\tfrac{1}{4}$ hari setiap tahun dikumpulkan selama 4 tahun ($4 \\times \\tfrac{1}{4} = 1\\ \\text{hari}$ penuh) dan ditambahkan ke bulan Februari menjadi 29 hari, sehingga tahun kabisat berisi **366 hari**.'
      }
    ],
    misconceptions: [
      'Menganggap Matahari benar-benar bergerak mengelilingi Bumi setiap hari dari timur ke barat. Sebenarnya Bumi yang berotasi dari barat ke timur sehingga Matahari tampak seolah-olah bergerak (gerak semu harian).',
      'Menganggap bentuk bulan sabit atau separuh terjadi karena bayangan Bumi menutupi Bulan. Fase bulan terjadi karena berubahnya bagian sisi Bulan yang disinari Matahari yang tampak dari Bumi; bayangan Bumi hanya menutupi Bulan saat gerhana bulan.',
      'Menganggap gerhana matahari dan gerhana bulan terjadi setiap bulan saat bulan baru dan purnama. Bidang orbit Bulan miring sekitar 5° terhadap bidang orbit Bumi, sehingga ketiga benda jarang tepat segaris.'
    ],
    tutorTip: 'Bedakan gerhana dari benda yang berada di TENGAH: Gerhana Matahari = M–Bl–B (Bulan di tengah, saat bulan baru); Gerhana Bulan = M–B–Bl (Bumi di tengah, saat bulan purnama). Umbra = bayangan inti gelap (total); Penumbra = bayangan kabur (sebagian).'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Terjadinya pergantian siang dan malam serta gerak semu harian Matahari dari timur ke barat disebabkan oleh...',
      options: [
        'revolusi bulan mengelilingi bumi',
        'revolusi bumi mengelilingi matahari',
        'rotasi bulan pada porosnya',
        'rotasi bumi pada porosnya dari barat ke timur'
      ],
      answer: 'D',
      hint: 'Gerakan ini berlangsung satu kali setiap sekitar 24 jam.',
      solution: 'Bumi berputar pada porosnya (**rotasi bumi**) dari barat ke timur setiap sekitar 24 jam, menyebabkan bagian bumi bergantian menghadap Matahari (siang) dan membelakanginya (malam). Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Waktu yang diperlukan Bumi untuk menyelesaikan satu kali revolusi mengelilingi Matahari adalah sekitar...',
      options: ['24 jam', '365¼ hari', '29,5 hari', '7 hari'],
      answer: 'B',
      hint: 'Periode ini menjadi dasar perhitungan satu tahun pada kalender Masehi.',
      solution: 'Satu kali **revolusi bumi** berlangsung selama sekitar **365¼ hari** (365 hari 6 jam). Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada peristiwa gerhana, daerah bayangan inti yang sangat gelap karena seluruh cahaya Matahari terhalang disebut...',
      options: ['umbra', 'penumbra', 'orbit', 'korona'],
      answer: 'A',
      hint: 'Bayangan kabur di sekitarnya disebut penumbra.',
      solution: '**Umbra** adalah bayangan inti yang gelap pekat tempat gerhana total terjadi, sedangkan penumbra adalah bayangan kabur di sekitarnya. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Gerhana bulan hanya dapat terjadi ketika Bulan berada pada fase...',
      options: ['bulan baru', 'bulan sabit', 'bulan purnama', 'kuartal pertama'],
      answer: 'C',
      hint: 'Posisi Bumi berada di antara Matahari dan Bulan sehingga sisi Bulan yang menghadap Bumi seharusnya tampak penuh.',
      solution: 'Pada gerhana bulan, posisi **Matahari – Bumi – Bulan** segaris dengan Bumi di tengah, yaitu saat **fase bulan purnama**. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Susunan posisi Matahari, Bumi, dan Bulan yang menyebabkan terjadinya gerhana matahari adalah...',
      options: [
        'Bumi berada di antara Matahari dan Bulan',
        'Bulan berada di antara Matahari dan Bumi pada satu garis lurus',
        'Matahari berada di antara Bumi dan Bulan',
        'Bulan membentuk sudut siku-siku terhadap Bumi dan Matahari'
      ],
      answer: 'B',
      hint: 'Bayangan Bulan jatuh menutupi sebagian permukaan Bumi.',
      solution: 'Gerhana matahari terjadi saat **Bulan berada di antara Matahari dan Bumi** pada satu garis lurus, sehingga bayangan Bulan jatuh ke Bumi. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah acara pembelajaran daring dimulai dari Denpasar (WITA) pukul 10.00. Waktu pelaksanaan acara tersebut bagi siswa di Surabaya (WIB) dan di Ambon (WIT) berturut-turut adalah pukul...',
      options: [
        '09.00 WIB dan 11.00 WIT',
        '11.00 WIB dan 09.00 WIT',
        '08.00 WIB dan 12.00 WIT',
        '09.00 WIB dan 12.00 WIT'
      ],
      answer: 'A',
      hint: 'WIB lebih lambat 1 jam daripada WITA, sedangkan WIT lebih cepat 1 jam daripada WITA.',
      solution: 'Dari WITA ke WIB dikurangi 1 jam menjadi **09.00 WIB**. Dari WITA ke WIT ditambah 1 jam menjadi **11.00 WIT**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dalam kalender Masehi, setiap 4 tahun sekali muncul tahun kabisat dengan jumlah 366 hari (bulan Februari berisi 29 hari). Hal ini ditetapkan karena...',
      options: [
        'rotasi bumi berlangsung selama 25 jam setiap hari',
        'satu siklus fase bulan selalu tepat 31 hari',
        'setiap 4 tahun Matahari berhenti bersinar selama 1 hari',
        'periode revolusi bumi 365¼ hari menyisakan ¼ hari tiap tahun yang genap menjadi 1 hari dalam 4 tahun'
      ],
      answer: 'D',
      hint: 'Kalikan sisa waktu revolusi bumi per tahun dengan 4.',
      solution: 'Karena satu revolusi bumi adalah **365¼ hari**, kelebihan **¼ hari setiap tahun** terkumpul menjadi $4 \\times \\tfrac{1}{4} = 1\\ \\text{hari}$ setiap 4 tahun (tahun kabisat berjumlah 366 hari). Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pergantian empat musim di negara subtropis serta pergeseran gerak semu tahunan Matahari antara belahan utara dan selatan terutama disebabkan oleh...',
      options: [
        'rotasi bumi yang berlawanan dengan arah jarum jam',
        'pasang surut air laut yang dipengaruhi gravitasi bulan',
        'revolusi bumi mengelilingi Matahari dengan sumbu rotasi miring 23,5°',
        'jarak bumi dan bulan yang selalu berubah setiap hari'
      ],
      answer: 'C',
      hint: 'Kemiringan poros bumi membuat belahan utara dan selatan bergantian condong ke arah Matahari.',
      solution: 'Selama **revolusi bumi**, **poros bumi yang miring 23,5°** membuat belahan utara dan selatan bergantian menerima penyinaran Matahari lebih lama dan lebih tegak, memicu pergantian musim dan gerak semu tahunan Matahari. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Gerhana matahari cincin terjadi ketika Matahari, Bulan, dan Bumi berada satu garis lurus pada kondisi...',
      options: [
        'Bulan berada sangat dekat dengan Bumi sehingga menutupi seluruh cahaya Matahari',
        'Bulan berada di titik terjauh dari Bumi sehingga tampak lebih kecil dan tepi Matahari tampak seperti cincin cahaya',
        'Bumi berada di antara Matahari dan Bulan pada malam hari',
        'Bulan hanya memasuki bagian penumbra bayangan Bumi'
      ],
      answer: 'B',
      hint: 'Ketika lebih jauh, ukuran piringan Bulan tampak sedikit lebih kecil daripada piringan Matahari.',
      solution: 'Saat **Bulan berada di titik terjauhnya dari Bumi**, bayangan umbra tidak mencapai permukaan Bumi sehingga bagian tengah Matahari tertutup tetapi tepinya tetap terlihat seperti **cincin bercahaya**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Perbedaan antara gerhana bulan total dan gerhana bulan sebagian terletak pada...',
      options: [
        'gerhana bulan total terjadi pada siang hari, sedangkan gerhana bulan sebagian terjadi pada malam hari',
        'gerhana bulan total terjadi saat bulan baru, sedangkan gerhana bulan sebagian saat kuartal awal',
        'gerhana bulan total terjadi saat bulan masuk bayangan bulan, sedangkan sebagian saat masuk bayangan mars',
        'pada gerhana bulan total seluruh bagian bulan masuk ke umbra bumi, sedangkan pada gerhana bulan sebagian hanya sebagian bulan masuk ke umbra dan sisanya di penumbra'
      ],
      answer: 'D',
      hint: 'Bandingkan seberapa banyak bagian Bulan yang memasuki daerah bayangan inti (umbra) Bumi.',
      solution: '**Gerhana bulan total** terjadi apabila seluruh bagian Bulan masuk ke dalam **umbra bumi**, sedangkan **gerhana bulan sebagian** terjadi jika hanya sebagian Bulan masuk ke umbra dan bagian lainnya berada di **penumbra**. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Kota M terletak pada garis bujur 90° BT dan Kota N terletak pada 135° BT. Jika di Kota M pukul 07.30 pagi, waktu di Kota N pada saat yang sama adalah...',
      options: ['04.30 pagi', '09.30 pagi', '10.30 pagi', '12.30 siang'],
      answer: 'C',
      hint: 'Setiap selisih bujur 15° berbeda waktu 1 jam, dan wilayah lebih ke timur waktunya lebih cepat.',
      solution: 'Selisih bujur = $135^\\circ - 90^\\circ = 45^\\circ$. Selisih waktu = $45^\\circ : 15^\\circ = 3\\ \\text{jam}$. Karena Kota N berada lebih ke timur, waktunya lebih cepat: $07.30 + 3\\ \\text{jam} = \\mathbf{10.30\\ \\text{pagi}}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Penduduk di Papua (WIT) melihat Matahari terbit lebih dahulu dibandingkan penduduk di Sumatra (WIB). Penjelasan ilmiah yang tepat untuk peristiwa ini adalah...',
      options: [
        'Bumi berotasi dari barat ke timur sehingga wilayah timur lebih dahulu menghadap ke Matahari',
        'Matahari bergerak mengelilingi Bumi dari arah Papua menuju Sumatra',
        'Papua berada lebih dekat dengan Matahari daripada Sumatra selama revolusi bumi',
        'gravitasi di wilayah timur menarik cahaya Matahari lebih cepat'
      ],
      answer: 'A',
      hint: 'Ingat arah putaran Bumi pada porosnya.',
      solution: 'Karena **Bumi berotasi dari barat ke timur**, daerah yang berada lebih di timur seperti Papua akan **lebih dahulu menghadap ke arah Matahari** sehingga mengalami fajar dan terbit lebih awal. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pada malam tanggal 15 bulan Hijriah, Dina mengamati bulan purnama yang bulat sempurna. Sekitar 15 hari kemudian, fase bulan yang paling mungkin terjadi adalah...',
      options: [
        'bulan purnama lagi karena siklus bulan berlangsung 15 hari',
        'bulan baru (tidak tampak dari Bumi) karena telah menempuh sekitar setengah siklus fase bulan',
        'kuartal pertama karena bulan baru menempuh seperempat lintasan',
        'gerhana matahari cincin yang pasti terjadi di seluruh dunia'
      ],
      answer: 'B',
      hint: 'Satu siklus penuh fase bulan berlangsung sekitar 29,5 hari; 15 hari adalah setengahnya.',
      solution: 'Satu siklus fase bulan berlangsung sekitar **29,5 hari**, sehingga 14–15 hari merupakan sekitar **setengah siklus**. Setengah siklus setelah bulan purnama adalah fase **bulan baru**. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Fase bulan baru dan bulan purnama terjadi setiap bulan, tetapi gerhana matahari dan gerhana bulan tidak terjadi setiap bulan. Penyebabnya adalah...',
      options: [
        'kecepatan rotasi bumi berubah-ubah terlalu cepat setiap minggu',
        'jarak Matahari ke Bumi terlalu jauh sehingga bayangan tidak pernah terbentuk',
        'Bulan tidak selalu memantulkan cahaya Matahari pada setiap bulan purnama',
        'bidang orbit Bulan miring sekitar 5° terhadap bidang orbit Bumi sehingga ketiganya jarang berada tepat pada satu garis lurus'
      ],
      answer: 'D',
      hint: 'Syarat gerhana adalah Matahari, Bumi, dan Bulan benar-benar segaris.',
      solution: 'Karena **bidang orbit Bulan miring sekitar 5°** terhadap bidang orbit Bumi, bayangan Bulan atau Bumi biasanya melintas sedikit di atas atau di bawah sasaran saat bulan baru maupun purnama. Gerhana hanya terjadi jika posisi ketiganya **tepat segaris**. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Ketika terjadi gerhana matahari, pengamat di Kota A melihat seluruh piringan Matahari tertutup Bulan sehingga langit tampak gelap sesaat, sedangkan pada waktu yang sama pengamat di Kota B melihat Matahari hanya tertutup sebagian seperti sabit. Kesimpulan mengenai posisi kedua kota terhadap bayangan Bulan adalah...',
      options: [
        'Kota A dan Kota B sama-sama berada di luar bayangan umbra maupun penumbra',
        'Kota A berada di daerah penumbra bumi, sedangkan Kota B di daerah umbra bumi',
        'Kota A berada di daerah umbra bulan, sedangkan Kota B berada di daerah penumbra bulan',
        'Kota A mengalami gerhana bulan total, sedangkan Kota B mengalami gerhana matahari cincin'
      ],
      answer: 'C',
      hint: 'Hubungkan pengamatan total dan sebagian dengan bayangan inti (umbra) dan bayangan kabur (penumbra) bulan.',
      solution: 'Pengamat yang melihat seluruh Matahari tertutup (gerhana matahari total) berada di daerah bayangan inti bulan (**umbra bulan**), sedangkan pengamat yang hanya melihat tertutup sebagian (gerhana matahari sebagian) berada di bayangan kabur bulan (**penumbra bulan**). Jawaban: **C**.'
    })
  ]
});
