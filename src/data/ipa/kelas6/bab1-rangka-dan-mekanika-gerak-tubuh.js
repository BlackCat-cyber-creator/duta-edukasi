import { bab, soal } from '../author.js';

export default bab({
  grade: 6,
  number: 1,
  slug: 'rangka-dan-mekanika-gerak-tubuh',
  title: 'Rangka, Otot, dan Mekanika Gerak Tubuh',
  element: 'Pemahaman IPAS: sistem organ gerak manusia, mekanika tuas, dan menjaga kesehatan tubuh',
  summary: {
    overview: 'Setiap langkah kaki, ayunan tangan, dan anggukan kepala terjadi berkat kerja sama rangka, sendi, dan otot. Bab ini membahas fungsi rangka dan tulang utama tubuh manusia, berbagai jenis sendi, cara kerja otot secara berpasangan (antagonis), hubungan gerak lengan dan kaki dengan prinsip tuas sederhana secara konseptual, serta cara menjaga kesehatan tulang dan postur tubuh.',
    coreConcepts: [
      'Fungsi Rangka dan Tulang Utama: Rangka merupakan alat gerak pasif yang memberi bentuk tubuh, menegakkan tubuh, menjadi tempat melekatnya otot, melindungi organ vital (tengkorak melindungi otak; tulang rusuk dan dada melindungi jantung serta paru-paru), dan membentuk sel darah di sumsum tulang. Tulang utama terbagi menjadi rangka kepala (tengkorak), rangka badan (tulang belakang, tulang dada, tulang rusuk, panggul), serta rangka anggota gerak atas (lengan) dan bawah (tungkai).',
      'Jenis-Jenis Sendi dan Arah Geraknya: Sendi menghubungkan antartulang sehingga tubuh dapat digerakkan. Lima jenis sendi gerak: sendi engsel bergerak satu arah (siku dan lutut), sendi peluru bergerak ke segala arah (bahu dan pangkal paha), sendi putar bergerak memutar pada satu poros (tulang leher dengan tengkorak), sendi pelana bergerak dua arah (pangkal ibu jari), dan sendi geser memungkinkan gerakan menggeser sedikit (antartulang pergelangan tangan dan kaki).',
      'Cara Kerja Otot dan Gerak Antagonis: Otot adalah alat gerak aktif karena mampu berkontraksi (memendek dan mengeras) serta berelaksasi (memanjang dan mengendur). Otot rangka melekat pada tulang melalui tendon dan bekerja secara sadar. Dua otot yang bekerja berlawanan disebut antagonis: saat lengan ditekuk, otot bisep berkontraksi sedangkan otot trisep berelaksasi; saat lengan diluruskan, bisep berelaksasi dan trisep berkontraksi.',
      'Prinsip Tuas pada Gerak Lengan dan Kaki: Gerak tulang yang ditarik otot di sekitar sendi bekerja seperti tuas sederhana: sendi sebagai titik tumpu, tarikan otot sebagai kuasa, dan berat bagian tubuh atau benda sebagai beban. Tuas jenis pertama memiliki titik tumpu di tengah (sendi leher saat menengadah); jenis kedua memiliki beban di tengah (kaki berjinjit dengan tumpuan ujung jari kaki); jenis ketiga memiliki kuasa di tengah (lengan bawah mengangkat benda dengan tumpuan siku). Makin panjang lengan kuasa dibanding lengan beban, makin kecil gaya yang diperlukan.',
      'Menjaga Kesehatan Tulang dan Postur Tubuh: Kebiasaan duduk atau membawa tas yang salah memicu kelainan tulang belakang: kifosis (melengkung ke belakang/membungkuk), lordosis (terlalu melengkung ke depan), dan skoliosis (melengkung ke samping menyerupai huruf S atau C). Kekurangan vitamin D menyebabkan rakitis, sedangkan kekurangan kalsium memicu pengeroposan tulang (osteoporosis). Jaga tulang dengan makan makanan kaya kalsium dan vitamin D, berjemur sinar matahari pagi, berolahraga teratur, duduk tegak, dan memakai tas ransel di kedua bahu.'
    ],
    keyFormulas: [
      { label: 'Peran bagian tubuh pada tuas', formula: '\\text{Sendi} = \\text{titik tumpu}, \\quad \\text{Otot} = \\text{kuasa}, \\quad \\text{Benda/anggota tubuh} = \\text{beban}' },
      { label: 'Keseimbangan tuas sederhana', formula: '\\text{beban} \\times \\text{lengan beban} = \\text{kuasa} \\times \\text{lengan kuasa}' },
      { label: 'Posisi tengah tuas I, II, dan III', formula: '\\text{Jenis I: Tumpu} \\qquad \\text{Jenis II: Beban} \\qquad \\text{Jenis III: Kuasa}' }
    ],
    workedExamples: [
      {
        title: 'Menentukan kerja otot bisep dan trisep',
        problem: 'Dito menekuk sikunya ke atas untuk mengangkat tas sekolah. Bagaimana keadaan otot bisep dan trisep pada lengan atas Dito?',
        solution: 'Saat siku ditekuk, **otot bisep berkontraksi** (memendek dan menegang) untuk menarik lengan bawah ke atas, sedangkan **otot trisep berelaksasi** (memanjang dan mengendur). Kerja berlawanan ini disebut kerja antagonis.'
      },
      {
        title: 'Mengenali jenis tuas pada gerak tubuh',
        problem: 'Mengapa gerakan kaki saat berjinjit termasuk tuas jenis kedua, sedangkan lengan bawah saat mengangkat buku termasuk tuas jenis ketiga?',
        solution: 'Saat berjinjit, ujung jari kaki menjadi titik tumpu, berat tubuh berada di tengah sebagai beban, dan otot betis menarik tumit ke atas sebagai kuasa; beban di tengah = **tuas jenis kedua**. Saat lengan mengangkat buku, siku menjadi titik tumpu, otot bisep menarik di dekat siku sebagai kuasa di tengah, dan buku di telapak tangan sebagai beban; kuasa di tengah = **tuas jenis ketiga**.'
      },
      {
        title: 'Menghitung gaya pada model tuas sederhana',
        problem: 'Sebuah model tuas jenis pertama menahan beban 40 N pada jarak 10 cm dari titik tumpu. Jika gaya kuasa diberikan pada jarak 20 cm di sisi lain titik tumpu, berapa gaya kuasa minimal agar tuas seimbang?',
        solution: 'Lengan kuasa (20 cm) panjangnya **2 kali** lengan beban (10 cm), sehingga gaya kuasa yang dibutuhkan cukup setengah dari beban: $40 : 2 = \\mathbf{20\\ \\text{N}}$ (sesuai $40 \\times 10 = 20 \\times 20$).'
      }
    ],
    misconceptions: [
      'Menganggap tulang dapat bergerak sendiri tanpa bantuan otot. Tulang adalah alat gerak pasif; gerak hanya terjadi jika otot berkontraksi menarik tulang.',
      'Menganggap otot dapat mendorong tulang kembali ke posisi semula. Otot hanya mampu menarik ketika berkontraksi, sehingga diperlukan otot pasangan (antagonis) untuk menarik ke arah sebaliknya.',
      'Menganggap semua sendi dapat bergerak bebas ke segala arah. Bentuk ujung tulang membatasi arah gerak sendi, misalnya sendi engsel pada siku hanya bergerak satu arah.'
    ],
    tutorTip: 'Ingat singkatan "T-B-K" untuk bagian yang berada di TENGAH pada tuas jenis I–II–III: Tumpu (I: leher menengadah), Beban (II: kaki berjinjit), dan Kuasa (III: lengan bawah mengangkat beban).'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Bagian rangka manusia yang berfungsi melindungi organ penting seperti jantung dan paru-paru adalah...',
      options: [
        'tulang lengan dan tulang paha',
        'tulang rusuk dan tulang dada',
        'tulang telapak tangan dan jari',
        'tulang pengumpil dan hasta'
      ],
      answer: 'B',
      hint: 'Organ jantung dan paru-paru terletak di rongga dada.',
      solution: '**Tulang rusuk dan tulang dada** membentuk rongga dada yang melindungi jantung serta paru-paru dari benturan. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Dalam sistem gerak manusia, otot disebut alat gerak aktif sedangkan tulang disebut alat gerak pasif karena...',
      options: [
        'otot dapat berkontraksi dan berelaksasi untuk menarik tulang agar bergerak',
        'tulang lebih lunak daripada otot sehingga tidak bisa menahan tubuh',
        'otot tidak menempel pada tulang dan hanya melindungi organ dalam',
        'tulang dapat memendek dan memanjang sendiri tanpa bantuan otot'
      ],
      answer: 'A',
      hint: 'Pikirkan bagian tubuh mana yang mampu memendek dan menghasilkan tarikan.',
      solution: 'Otot mampu **berkontraksi (memendek) dan berelaksasi (memanjang)** sehingga menghasilkan tarikan yang menggerakkan tulang. Tulang sendiri tidak dapat bergerak tanpa tarikan otot. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sendi yang terdapat pada siku dan lutut hanya memungkinkan gerakan satu arah seperti engsel pintu, yaitu sendi...',
      options: ['peluru', 'putar', 'pelana', 'engsel'],
      answer: 'D',
      hint: 'Namanya sama dengan bagian yang membuat daun pintu membuka satu arah.',
      solution: '**Sendi engsel** hanya memungkinkan gerakan ke satu arah (menekuk dan meluruskan), misalnya pada siku dan lutut. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Saat berenang atau melempar bola, lengan kita dapat berputar ke berbagai arah dari pangkal bahu. Jenis sendi pada bahu adalah...',
      options: ['sendi geser', 'sendi putar', 'sendi peluru', 'sendi engsel'],
      answer: 'C',
      hint: 'Salah satu ujung tulangnya berbentuk bulat seperti bola yang masuk ke mangkuk tulang.',
      solution: '**Sendi peluru** memungkinkan gerakan ke segala arah, terdapat pada sambungan lengan atas dengan tulang belikat (bahu) serta pangkal paha. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Kebiasaan mengonsumsi susu atau ikan teri serta berjemur di bawah sinar matahari pagi bermanfaat bagi tulang karena membantu memenuhi kebutuhan...',
      options: [
        'vitamin C dan zat besi',
        'kalsium dan vitamin D',
        'karbohidrat dan lemak',
        'protein dan serat kasar'
      ],
      answer: 'B',
      hint: 'Kekurangan kedua zat ini membuat tulang rapuh atau mudah bengkok.',
      solution: 'Susu dan ikan kaya akan **kalsium** untuk kepadatan tulang, sedangkan sinar matahari pagi membantu tubuh membentuk **vitamin D** yang diperlukan untuk menyerap kalsium. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Ketika kita meluruskan lengan bawah kembali ke posisi semula setelah mengangkat benda, kondisi otot bisep dan otot trisep yang tepat adalah...',
      options: [
        'bisep dan trisep sama-sama berkontraksi',
        'bisep berkontraksi dan trisep berelaksasi',
        'bisep dan trisep sama-sama berelaksasi',
        'bisep berelaksasi dan trisep berkontraksi'
      ],
      answer: 'D',
      hint: 'Otot bisep berada di depan lengan atas untuk menekuk lengan; otot pasangannya di belakang bekerja berlawanan.',
      solution: 'Bisep dan trisep bekerja secara antagonis. Saat lengan **diluruskan**, otot **bisep berelaksasi** (mengendur) dan otot **trisep berkontraksi** (menarik lengan bawah menjadi lurus). Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Gerakan menolehkan kepala ke kiri dan ke kanan melibatkan sendi antara tulang tengkorak dan tulang leher teratas yang bekerja sebagai...',
      options: ['sendi putar', 'sendi pelana', 'sendi engsel', 'sendi geser'],
      answer: 'A',
      hint: 'Satu tulang menjadi poros agar tulang lainnya dapat berputar.',
      solution: 'Tulang leher teratas (atlas) menjadi poros bagi tengkorak untuk berputar ke kiri dan kanan; hubungan ini adalah **sendi putar**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Rani sering membawa tas sekolah yang sangat berat hanya di bahu kanan dan duduk dengan posisi tubuh miring ke satu sisi. Kebiasaan ini dapat menyebabkan kelainan tulang belakang yang melengkung ke samping, yaitu...',
      options: ['kifosis', 'lordosis', 'skoliosis', 'osteoporosis'],
      answer: 'C',
      hint: 'Tulang belakang melengkung ke kiri atau ke kanan menyerupai huruf S atau C.',
      solution: 'Kelainan tulang belakang yang melengkung ke samping akibat beban atau posisi duduk miring disebut **skoliosis**. Kifosis melengkung ke belakang (membungkuk), sedangkan lordosis terlalu melengkung ke depan. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Saat tangan memegang sebuah buku dan siku menekuk, lengan bekerja seperti tuas sederhana. Pasangan peran bagian tubuh yang benar adalah...',
      options: [
        'buku sebagai kuasa, siku sebagai beban, otot bisep sebagai titik tumpu',
        'siku sebagai titik tumpu, otot bisep sebagai kuasa, buku sebagai beban',
        'otot bisep sebagai titik tumpu, buku sebagai kuasa, siku sebagai beban',
        'siku sebagai kuasa, otot bisep sebagai beban, buku sebagai titik tumpu'
      ],
      answer: 'B',
      hint: 'Sendi menjadi poros gerakan dan tarikan otot menjadi gaya penggerak.',
      solution: 'Pada gerak lengan, sendi **siku berperan sebagai titik tumpu**, tarikan **otot bisep berperan sebagai kuasa**, dan **buku di telapak tangan sebagai beban**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Gerakan kaki saat seseorang berjinjit untuk mengambil barang di rak tinggi menerapkan prinsip tuas jenis kedua karena...',
      options: [
        'titik tumpu berada di antara beban dan gaya otot betis',
        'gaya kuasa otot betis berada di antara ujung jari kaki dan beban tubuh',
        'ujung jari kaki berada di antara tumit dan lutut',
        'beban berat tubuh berada di antara titik tumpu ujung jari kaki dan kuasa otot betis'
      ],
      answer: 'D',
      hint: 'Tentukan letak ujung jari kaki (tumpu), berat badan (beban), dan tarikan otot betis di tumit (kuasa).',
      solution: 'Saat berjinjit, ujung jari kaki menyentuh lantai sebagai titik tumpu, otot betis menarik tumit di bagian belakang sebagai kuasa, dan **beban berat tubuh menekan di tengah antara keduanya**. Beban di tengah merupakan ciri **tuas jenis kedua**. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Gerak kepala saat menengadah bekerja seperti tuas jenis pertama dengan titik tumpu di leher. Perhatikan model tuas pada gambar: beban 60 N memiliki lengan beban 10 cm dan lengan kuasa 30 cm. Agar tuas seimbang, besar gaya kuasa minimal yang diperlukan adalah...',
      options: ['20 N', '30 N', '60 N', '180 N'],
      answer: 'A',
      hint: 'Bandingkan panjang lengan kuasa (30 cm) dengan lengan beban (10 cm), lalu bagi beban dengan perbandingannya.',
      solution: 'Lengan kuasa 30 cm panjangnya **3 kali** lengan beban 10 cm, sehingga gaya kuasa yang diperlukan hanya sepertiga dari beban: $60 : 3 = \\mathbf{20\\ \\text{N}}$ (sesuai $60 \\times 10 = 20 \\times 30$). Jawaban: **A**.',
      visual: {
        type: 'lever',
        props: {
          title: 'Model Tuas Jenis Pertama',
          loadLabel: 'w = 60 N',
          effortLabel: 'F = ?',
          loadArmLabel: '10 cm',
          effortArmLabel: '30 cm',
          ratio: 3
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Dua anak mengungkit sebuah batu besar menggunakan papan kayu yang bertumpu pada batu kecil. Anak pertama menekan ujung papan dekat titik tumpu, sedangkan anak kedua menekan ujung papan yang jauh dari titik tumpu. Anak kedua memerlukan gaya dorong yang...',
      options: [
        'sama besar karena berat batu tidak berubah',
        'lebih besar karena jaraknya dari titik tumpu terlalu jauh',
        'lebih kecil karena lengan kuasanya lebih panjang',
        'nol karena batu tidak ikut bergerak'
      ],
      answer: 'C',
      hint: 'Makin jauh titik dorong dari titik tumpu, makin panjang lengan kuasanya.',
      solution: 'Menekan lebih jauh dari titik tumpu memperpanjang **lengan kuasa**, sehingga keuntungan mekanis bertambah dan **gaya yang dibutuhkan menjadi lebih kecil**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Saat bermain bulu tangkis, seorang siswa mengayunkan lengan dari bahu ke segala arah, menekuk siku satu arah, dan menggerakkan pangkal ibu jari ke dua arah untuk memegang gagang raket. Jenis sendi yang bekerja pada bahu, siku, dan pangkal ibu jari secara berurutan adalah...',
      options: [
        'peluru, engsel, dan pelana',
        'putar, peluru, dan geser',
        'engsel, peluru, dan putar',
        'pelana, engsel, dan putar'
      ],
      answer: 'A',
      hint: 'Cocokkan masing-masing arah gerak dengan nama sendinya.',
      solution: 'Bahu bergerak ke segala arah (**sendi peluru**), siku bergerak satu arah (**sendi engsel**), dan pangkal ibu jari bergerak dua arah (**sendi pelana**). Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Saat lengan bawah menahan beban di telapak tangan secara mendatar, otot bisep menarik tulang lengan bawah di titik yang sangat dekat dengan siku. Secara prinsip tuas, akibat dari posisi tarikan otot yang dekat dengan titik tumpu tersebut adalah...',
      options: [
        'gaya tarikan otot bisep lebih kecil daripada berat beban karena dibantu sendi peluru',
        'otot bisep dan otot trisep tidak perlu berkontraksi',
        'gaya tarikan otot bisep harus lebih besar daripada berat beban karena lengan kuasanya lebih pendek daripada lengan beban',
        'siku berpindah posisi menjadi beban dan telapak tangan menjadi titik tumpu'
      ],
      answer: 'C',
      hint: 'Bandingkan panjang lengan kuasa (siku ke titik lekat bisep) dengan lengan beban (siku ke telapak tangan).',
      solution: 'Lengan bawah bekerja sebagai tuas jenis ketiga: jarak titik lekat otot bisep ke siku (**lengan kuasa**) jauh lebih pendek daripada jarak telapak tangan ke siku (**lengan beban**). Akibatnya, otot bisep harus menghasilkan **gaya lebih besar daripada berat beban**, tetapi gerakan ujung tangan menjadi cepat dan leluasa. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seorang siswa sering mengeluh punggungnya pegal dan tampak membungkuk karena meja belajarnya terlalu rendah, ditambah ia jarang minum susu serta jarang beraktivitas di luar rumah pada pagi hari. Kelainan postur yang paling berisiko dialaminya beserta langkah perbaikan yang tepat adalah...',
      options: [
        'skoliosis; mengatasinya dengan tidur tanpa bantal dan mengurangi olahraga',
        'kifosis; mengatasinya dengan menyesuaikan tinggi meja agar duduk tegak, rutin berjemur pagi, dan mencukupi asupan kalsium',
        'lordosis; mengatasinya dengan menunduk lebih rendah saat membaca agar otot punggung tertarik',
        'rakitis; mengatasinya dengan memakai tas selempang berat di satu sisi bahu saja'
      ],
      answer: 'B',
      hint: 'Kebiasaan membungkuk ke depan membuat tulang belakang bagian atas melengkung ke belakang.',
      solution: 'Kebiasaan membungkuk karena meja terlalu rendah berisiko menimbulkan **kifosis** (punggung melengkung ke belakang). Perbaikannya adalah **mengatur tinggi meja dan kursi agar duduk tegak**, berolahraga, **berjemur pagi (vitamin D)**, serta **mencukupi kalsium**. Jawaban: **B**.'
    })
  ]
});
