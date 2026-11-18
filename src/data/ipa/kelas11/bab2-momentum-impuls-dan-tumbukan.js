import { bab, soal } from '../author.js';

export default bab({
  grade: 11,
  number: 2,
  slug: 'momentum-impuls-dan-tumbukan',
  title: 'Momentum, Impuls, dan Tumbukan',
  element: 'Pemahaman Fisika: mekanika, momentum, impuls, dan tumbukan',
  summary: {
    overview: 'Saat bermain biliar, meluncurkan roket ke luar angkasa, atau merancang zona remuk dan kantung udara pada kendaraan modern, hukum fisika yang bekerja adalah momentum dan impuls. Bab ini mengupas besaran vektor momentum linear, teorema impuls-momentum beserta interpretasi luas grafik gaya terhadap waktu, hukum kekekalan momentum pada sistem terisolasi, analisis tiga jenis tumbukan lewat koefisien restitusi, serta penerapannya pada keselamatan berkendara dan propulsi roket.',
    coreConcepts: [
      'Momentum Linear: Momentum linear ($\\vec{p}$) adalah ukuran kelembaman gerak suatu benda yang didefinisikan sebagai hasil kali massa dan kecepatannya: $\\vec{p} = m\\vec{v}$, bersatuan $\\text{kg}\\cdot\\text{m/s}$. Karena kecepatan merupakan vektor, arah momentum selalu searah dengan kecepatan benda dan tanda positif/negatif wajib diperhatikan pada gerak satu dimensi.',
      'Impuls dan Teorema Impuls-Momentum: Impuls ($\\vec{I}$) merupakan hasil kali gaya rata-rata dengan selang waktu kerjanya: $\\vec{I} = \\vec{F}\\Delta t$, yang secara grafis sama dengan luas daerah di bawah kurva grafik $F\\text{--}t$. Menurut teorema impuls-momentum, impuls total yang bekerja pada benda sama dengan perubahan momentumnya: $\\vec{I} = \\Delta\\vec{p} = m(\\vec{v}_t - \\vec{v}_0)$.',
      'Hukum Kekekalan Momentum Linear: Jika resultan gaya luar yang bekerja pada sistem bernilai nol (sistem terisolasi), momentum total sistem selalu tetap sebelum dan sesudah interaksi: $m_1\\vec{v}_1 + m_2\\vec{v}_2 = m_1\\vec{v}_1\' + m_2\\vec{v}_2\'$. Prinsip ini menjelaskan gerak tolak balik (recoil) senapan serta peristiwa ledakan atau pelontaran massa.',
      'Koefisien Restitusi dan Jenis Tumbukan: Tingkat kelentingan tumbukan dua benda dinyatakan oleh koefisien restitusi $e = -\\dfrac{v_1\' - v_2\'}{v_1 - v_2}$. Pada tumbukan lenting sempurna ($e = 1$), momentum dan energi kinetik total sama-sama kekal. Pada tumbukan lenting sebagian ($0 < e < 1$), sebagian energi kinetik hilang menjadi panas atau bunyi. Pada tumbukan tidak lenting sama sekali ($e = 0$), kedua benda menyatu setelah bertumbukan ($v_1\' = v_2\' = v\'$).',
      'Keselamatan Kendaraan dan Propulsi Roket: Pada peristiwa benturan dengan perubahan momentum $\\Delta\\vec{p}$ tertentu hingga berhenti, kantung udara (airbag), helm berlapis busa, dan zona remuk mobil memperpanjang selang waktu kontak $\\Delta t$ sehingga gaya rata-rata $F = \\Delta p / \\Delta t$ berkurang drastis. Sementara itu, roket terdorong maju oleh gaya dorong (thrust) sebesar $F = v_{\\text{gas}}\\dfrac{\\Delta m}{\\Delta t}$ akibat menyemburkan gas pembakaran ke belakang.'
    ],
    keyFormulas: [
      { label: 'Momentum linear', formula: '\\vec{p} = m\\vec{v}' },
      { label: 'Impuls & perubahan momentum', formula: '\\vec{I} = \\vec{F}\\Delta t = \\Delta\\vec{p} = m(\\vec{v}_t - \\vec{v}_0)' },
      { label: 'Kekekalan momentum', formula: 'm_1\\vec{v}_1 + m_2\\vec{v}_2 = m_1\\vec{v}_1\' + m_2\\vec{v}_2\'' },
      { label: 'Koefisien restitusi', formula: 'e = -\\dfrac{v_1\' - v_2\'}{v_1 - v_2} \\qquad (0 \\le e \\le 1)' },
      { label: 'Tumbukan tidak lenting sama sekali', formula: 'm_1\\vec{v}_1 + m_2\\vec{v}_2 = (m_1 + m_2)\\vec{v}\'' }
    ],
    workedExamples: [
      {
        title: 'Impuls bola yang memantul',
        problem: 'Sebuah bola bermassa $0{,}4\\text{ kg}$ melaju horizontal ke kanan dengan kelajuan $15\\text{ m/s}$ lalu menumbuk dinding dan memantul ke kiri dengan kelajuan $10\\text{ m/s}$. Jika waktu sentuh bola dengan dinding $0{,}02\\text{ s}$, hitung besar impuls dan gaya rata-rata dinding pada bola.',
        solution: 'Tetapkan arah ke kanan positif, sehingga $v_1 = +15\\text{ m/s}$ dan $v_2 = -10\\text{ m/s}$.\n$I = m(v_2 - v_1) = 0{,}4(-10 - 15) = -10\\text{ N}\\cdot\\text{s}$ (besar impuls $10\\text{ N}\\cdot\\text{s}$ ke kiri).\nGaya rata-rata: $F = \\dfrac{|I|}{\\Delta t} = \\dfrac{10}{0{,}02} = 500\\text{ N}$.'
      },
      {
        title: 'Tumbukan lenting sempurna ($e = 1$)',
        problem: 'Benda A ($m_1 = 2\\text{ kg}$, $v_1 = 6\\text{ m/s}$ ke kanan) menumbuk benda B ($m_2 = 4\\text{ kg}$) yang diam di lantai licin secara lenting sempurna. Tentukan kecepatan masing-masing benda setelah tumbukan.',
        solution: 'Kekekalan momentum: $2(6) + 4(0) = 2v_1\' + 4v_2\' \\Rightarrow v_1\' + 2v_2\' = 6$.\nKoefisien restitusi ($e = 1$): $v_2\' - v_1\' = v_1 - v_2 = 6$.\nJumlahkan kedua persamaan: $3v_2\' = 12 \\Rightarrow v_2\' = 4\\text{ m/s}$ (ke kanan) dan $v_1\' = 4 - 6 = -2\\text{ m/s}$ ($2\\text{ m/s}$ ke kiri).'
      },
      {
        title: 'Energi kinetik yang hilang pada tumbukan tak lenting',
        problem: 'Sebutir peluru bermassa $0{,}02\\text{ kg}$ bergerak mendatar dengan kelajuan $200\\text{ m/s}$ menumbuk dan bersarang dalam balok kayu bermassa $1{,}98\\text{ kg}$ yang diam di bidang licin. Hitung kecepatan balok setelah tertumbuk dan energi kinetik yang hilang.',
        solution: 'Kekekalan momentum: $0{,}02(200) = (0{,}02 + 1{,}98)v\' \\Rightarrow v\' = \\dfrac{4}{2} = 2\\text{ m/s}$.\nEnergi kinetik awal: $E_{k,\\text{awal}} = \\tfrac{1}{2}(0{,}02)(200^2) = 400\\text{ J}$.\nEnergi kinetik akhir: $E_{k,\\text{akhir}} = \\tfrac{1}{2}(2)(2^2) = 4\\text{ J}$.\nEnergi kinetik yang hilang menjadi kalor/bunyi: $\\Delta E_k = 400 - 4 = 396\\text{ J}$.'
      }
    ],
    misconceptions: [
      'Mengabaikan tanda arah vektor kecepatan saat menghitung impuls benda yang memantul. Jika benda memantul berbalik arah, kelajuannya justru dijumlahkan dalam $\\Delta p = m(v_2 - v_1)$, bukan dikurangkan.',
      'Menganggap energi kinetik selalu kekal dalam semua tumbukan. Energi kinetik hanya kekal pada tumbukan lenting sempurna ($e = 1$), sedangkan momentum total selalu kekal untuk semua jenis tumbukan pada sistem terisolasi.',
      'Mengira kantung udara (airbag) memperkecil impuls tabrakan. Impuls yang dibutuhkan untuk menghentikan penumpang tetap sama; airbag bekerja dengan memperpanjang selang waktu kontak $\\Delta t$ agar gaya benturan rata-rata mengecil.'
    ],
    tutorTip: 'Selalu tetapkan satu arah positif (misalnya ke kanan) sebelum menulis persamaan momentum atau impuls. Pada tumbukan lenting sempurna ($e = 1$), gunakan dua persamaan cepat: kekekalan momentum dan $v_1 + v_1\' = v_2 + v_2\'$.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sebuah truk bermassa $2.000\\text{ kg}$ bergerak lurus ke timur dengan kelajuan $15\\text{ m/s}$. Besar momentum linear truk tersebut adalah...',
      options: ['15.000 kg·m/s', '20.000 kg·m/s', '30.000 kg·m/s', '45.000 kg·m/s'],
      answer: 'C',
      hint: 'Gunakan definisi momentum linear $p = m \\times v$.',
      solution: '$p = m \\times v = 2.000 \\times 15 = 30.000\\text{ kg}\\cdot\\text{m/s}$ ke timur. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Penggunaan kantung udara (airbag) dan zona remuk (crumple zone) pada mobil modern bertujuan mengurangi risiko cedera saat tabrakan dengan cara...',
      options: [
        'memperpanjang selang waktu kontak saat tumbukan sehingga gaya rata-rata menjadi lebih kecil',
        'mengurangi perubahan momentum total penumpang hingga bernilai nol',
        'memperbesar impuls yang diterima pengemudi agar terpental lebih cepat',
        'menghilangkan energi kinetik mobil sebelum terjadi pengereman'
      ],
      answer: 'A',
      hint: 'Ingat hubungan $F_{\\text{rata-rata}} = \\Delta p / \\Delta t$ untuk perubahan momentum yang tetap.',
      solution: 'Untuk menghentikan penumpang hingga diam, perubahan momentum ($\\Delta p$) bernilai tetap. Kantung udara dan zona remuk **memperpanjang selang waktu tumbukan ($\\Delta t$)** sehingga gaya benturan rata-rata mengecil. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada peristiwa tumbukan tidak lenting sama sekali ($e = 0$) antara dua benda dalam sistem terisolasi, besaran yang selalu kekal dan ciri geraknya setelah bertumbukan adalah...',
      options: [
        'energi kinetik total kekal dan kedua benda terpental berlawanan arah',
        'momentum tidak kekal dan kecepatan akhir kedua benda selalu nol',
        'energi kinetik dan momentum sama-sama bertambah setelah tumbukan',
        'momentum total sistem kekal dan kedua benda menyatu bergerak dengan kecepatan sama'
      ],
      answer: 'D',
      hint: 'Nilai $e = 0$ berarti beda kecepatan setelah tumbukan ($v_1\' - v_2\'$) bernilai nol.',
      solution: 'Pada tumbukan tidak lenting sama sekali dalam sistem terisolasi, **momentum total sistem kekal**, sebagian energi kinetik berubah menjadi kalor/bunyi, dan **kedua benda menyatu bergerak dengan kecepatan sama**. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah benda bermassa $2\\text{ kg}$ mula-mula diam di atas bidang datar licin, lalu didorong oleh gaya tetap $12\\text{ N}$ selama $3\\text{ s}$. Kelajuan benda setelah didorong adalah...',
      options: ['6 m/s', '18 m/s', '24 m/s', '36 m/s'],
      answer: 'B',
      hint: 'Samakan impuls $F\\Delta t$ dengan perubahan momentum $m(v_t - v_0)$.',
      solution: '$F\\Delta t = m(v_t - v_0) \\Rightarrow 12 \\times 3 = 2(v_t - 0) \\Rightarrow v_t = \\dfrac{36}{2} = 18\\text{ m/s}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebutir peluru bermassa $0{,}04\\text{ kg}$ ditembakkan mendatar dengan kelajuan $250\\text{ m/s}$ dari sepucuk senapan bermassa $2\\text{ kg}$ yang mula-mula diam. Kelajuan hentakan (recoil) senapan ke belakang sesaat setelah peluru keluar adalah...',
      options: ['2,5 m/s', '10 m/s', '5 m/s', '20 m/s'],
      answer: 'C',
      hint: 'Momentum total awal nol, sehingga $m_p v_p + m_s v_s\' = 0$.',
      solution: '$0 = 0{,}04(250) + 2 v_s\' \\Rightarrow 2 v_s\' = -10 \\Rightarrow v_s\' = -5\\text{ m/s}$ (besar kelajuan $5\\text{ m/s}$ ke belakang). Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah bola kasti bermassa $0{,}2\\text{ kg}$ dilempar mendatar mengenai dinding dengan kelajuan $20\\text{ m/s}$, lalu memantul berbalik arah tegak lurus dinding dengan kelajuan $15\\text{ m/s}$. Besar impuls yang dikerjakan dinding pada bola adalah...',
      options: ['7 N·s', '1 N·s', '3,5 N·s', '14 N·s'],
      answer: 'A',
      hint: 'Karena arah kecepatan berbalik, tetapkan satu arah positif dan satu arah negatif pada $\\Delta p = m(v_2 - v_1)$.',
      solution: 'Dengan $v_1 = +20\\text{ m/s}$ dan $v_2 = -15\\text{ m/s}$, diperoleh $I = 0{,}2(-15 - 20) = -7\\text{ N}\\cdot\\text{s}$. Besar impulsnya $7\\text{ N}\\cdot\\text{s}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah gaya horizontal $F$ bekerja pada benda bermassa $4\\text{ kg}$ selama $7\\text{ s}$ sesuai grafik $F\\text{--}t$ pada gambar. Gaya naik linear dari $0$ hingga $30\\text{ N}$ pada $t = 2\\text{ s}$, konstan $30\\text{ N}$ hingga $t = 5\\text{ s}$, lalu turun linear kembali ke $0$ pada $t = 7\\text{ s}$. Besar impuls total yang diterima benda adalah...',
      options: ['210 N·s', '90 N·s', '120 N·s', '150 N·s'],
      answer: 'D',
      hint: 'Impuls sama dengan luas daerah trapesium di bawah grafik $F\\text{--}t$.',
      solution: 'Luas trapesium memiliki sisi sejajar bawah $7\\text{ s}$, sisi sejajar atas $5 - 2 = 3\\text{ s}$, dan tinggi $30\\text{ N}$.\n$I = \\dfrac{7 + 3}{2} \\times 30 = 5 \\times 30 = 150\\text{ N}\\cdot\\text{s}$. Jawaban: **D**.',
      visual: {
        type: 'motion-graph',
        props: {
          title: 'Grafik Gaya terhadap Waktu (F–t)',
          points: [[0, 0], [2, 30], [5, 30], [7, 0]],
          xTicks: [0, 2, 5, 7],
          yTicks: [30],
          xLabel: 't (s)',
          yLabel: 'F (N)'
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah roket uji menyemburkan gas buang ke belakang dengan kelajuan relatif $2.000\\text{ m/s}$ pada laju pembakaran bahan bakar tetap $15\\text{ kg/s}$. Besar gaya dorong (thrust) yang dihasilkan mesin roket tersebut adalah...',
      options: ['15 kN', '30 kN', '60 kN', '20 kN'],
      answer: 'B',
      hint: 'Gaya dorong roket sebanding dengan laju perubahan momentum gas: $F = v_{\\text{gas}} (\\Delta m / \\Delta t)$.',
      solution: '$F = v_{\\text{gas}}\\dfrac{\\Delta m}{\\Delta t} = 2.000 \\times 15 = 30.000\\text{ N} = 30\\text{ kN}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah troli bermassa $3\\text{ kg}$ melaju ke kanan dengan kecepatan $8\\text{ m/s}$ menabrak troli lain bermassa $5\\text{ kg}$ yang bergerak ke kiri dengan kecepatan $1{,}6\\text{ m/s}$. Jika setelah bertumbukan kedua troli menempel dan bergerak bersama, kecepatan dan arah gerak keduanya setelah tumbukan adalah...',
      options: ['4 m/s ke kanan', '2 m/s ke kiri', '2 m/s ke kanan', '1 m/s ke kanan'],
      answer: 'C',
      hint: 'Gunakan $m_1 v_1 + m_2 v_2 = (m_1 + m_2) v\'$ dengan $v_2$ bertanda negatif karena ke kiri.',
      solution: '$3(8) + 5(-1{,}6) = (3 + 5)v\' \\Rightarrow 24 - 8 = 8v\' \\Rightarrow v\' = \\dfrac{16}{8} = +2\\text{ m/s}$ ($2\\text{ m/s}$ ke kanan). Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah bola dijatuhkan bebas dari ketinggian $h_1 = 8\\text{ m}$ di atas lantai datar dan memantul kembali hingga mencapai ketinggian maksimum $h_2 = 2\\text{ m}$. Nilai koefisien restitusi antara bola dan lantai serta tinggi pantulan berikutnya adalah...',
      options: ['0,5 dan 0,5 m', '0,25 dan 0,5 m', '0,5 dan 1,0 m', '0,25 dan 0,25 m'],
      answer: 'A',
      hint: 'Gunakan $e = \\sqrt{h_2 / h_1} = \\sqrt{h_3 / h_2}$.',
      solution: '$e = \\sqrt{\\dfrac{2}{8}} = \\sqrt{\\dfrac{1}{4}} = 0{,}5$.\nTinggi pantulan berikutnya: $h_3 = e^2 h_2 = (0{,}5)^2 \\times 2 = 0{,}5\\text{ m}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Bola A bermassa $2\\text{ kg}$ bergerak ke kanan dengan laju $9\\text{ m/s}$ menumbuk bola B bermassa $4\\text{ kg}$ yang mula-mula diam di atas lintasan lurus licin. Jika tumbukan berlangsung lenting sempurna ($e = 1$), kecepatan bola A dan bola B berturut-turut setelah tumbukan adalah...',
      options: [
        '3 m/s ke kanan dan 6 m/s ke kanan',
        '6 m/s ke kiri dan 3 m/s ke kanan',
        '4 m/s ke kiri dan 6,5 m/s ke kanan',
        '3 m/s ke kiri dan 6 m/s ke kanan'
      ],
      answer: 'D',
      hint: 'Gabungkan persamaan kekekalan momentum $2v_A\' + 4v_B\' = 18$ dengan syarat lenting sempurna $v_B\' - v_A\' = 9$.',
      solution: 'Dari $2(9) + 0 = 2v_A\' + 4v_B\'$ diperoleh $v_A\' + 2v_B\' = 9$.\nDari $e = 1$ diperoleh $v_B\' - v_A\' = 9$.\nJumlahkan keduanya: $3v_B\' = 18 \\Rightarrow v_B\' = 6\\text{ m/s}$ (ke kanan) dan $v_A\' = 6 - 9 = -3\\text{ m/s}$ ($3\\text{ m/s}$ ke kiri). Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Benda P bermassa $2\\text{ kg}$ bergerak ke kanan dengan kelajuan $8\\text{ m/s}$ menumbuk benda Q bermassa $3\\text{ kg}$ yang bergerak ke kiri dengan kelajuan $2\\text{ m/s}$. Jika koefisien restitusi tumbukan $e = 0{,}5$, kelajuan dan arah benda P serta Q setelah tumbukan berturut-turut adalah...',
      options: [
        '1 m/s ke kanan dan 4 m/s ke kanan',
        '1 m/s ke kiri dan 4 m/s ke kanan',
        '2 m/s ke kiri dan 4 m/s ke kanan',
        '1 m/s ke kiri dan 2 m/s ke kanan'
      ],
      answer: 'B',
      hint: 'Susun dua persamaan linear dari kekekalan momentum dan $v_Q\' - v_P\' = e(v_P - v_Q)$.',
      solution: 'Kekekalan momentum: $2(8) + 3(-2) = 2v_P\' + 3v_Q\' \\Rightarrow 2v_P\' + 3v_Q\' = 10$.\nKoefisien restitusi: $v_Q\' - v_P\' = 0{,}5(8 - (-2)) = 5 \\Rightarrow v_P\' = v_Q\' - 5$.\nSubstitusi: $2(v_Q\' - 5) + 3v_Q\' = 10 \\Rightarrow 5v_Q\' = 20 \\Rightarrow v_Q\' = 4\\text{ m/s}$ (ke kanan) dan $v_P\' = -1\\text{ m/s}$ ($1\\text{ m/s}$ ke kiri). Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah bola besi bermassa $4\\text{ kg}$ meluncur dengan laju $6\\text{ m/s}$ menumbuk balok plastisin bermassa $2\\text{ kg}$ yang diam di atas lantai licin sehingga keduanya menempel dan bergerak bersama. Besar energi kinetik yang berubah menjadi panas dan bunyi selama tumbukan adalah...',
      options: ['24 J', '48 J', '72 J', '12 J'],
      answer: 'A',
      hint: 'Cari kecepatan gabungan dulu dengan kekekalan momentum, lalu hitung selisih $E_{k,\\text{awal}} - E_{k,\\text{akhir}}$.',
      solution: '$v\' = \\dfrac{4 \\times 6}{4 + 2} = 4\\text{ m/s}$.\n$E_{k,\\text{awal}} = \\tfrac{1}{2}(4)(6^2) = 72\\text{ J}$ dan $E_{k,\\text{akhir}} = \\tfrac{1}{2}(6)(4^2) = 48\\text{ J}$.\nEnergi kinetik yang hilang: $\\Delta E_k = 72 - 48 = 24\\text{ J}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebutir peluru bermassa $20\\text{ g}$ ditembakkan mendatar menuju balok kayu bermassa $1{,}98\\text{ kg}$ yang tergantung diam pada tali panjang. Peluru bersarang di dalam balok dan keduanya berayun naik hingga ketinggian maksimum $20\\text{ cm}$ ($g = 10\\text{ m/s}^2$). Kelajuan peluru sesaat sebelum mengenai balok adalah...',
      options: ['100 m/s', '150 m/s', '200 m/s', '400 m/s'],
      answer: 'C',
      hint: 'Ubah $20\\text{ g}$ ke kg dan $20\\text{ cm}$ ke m; hitung $v\' = \\sqrt{2gh}$ setelah tumbukan, lalu gunakan kekekalan momentum.',
      solution: 'Kelajuan gabungan setelah tumbukan: $v\' = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 0{,}2} = 2\\text{ m/s}$.\nKekekalan momentum: $0{,}02 v_p = (0{,}02 + 1{,}98) \\times 2 \\Rightarrow 0{,}02 v_p = 4 \\Rightarrow v_p = 200\\text{ m/s}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah perahu bermassa $120\\text{ kg}$ mengangkut seorang penumpang bermassa $60\\text{ kg}$ dan melaju ke timur dengan kecepatan $4\\text{ m/s}$ di air tenang. Tiba-tiba penumpang melompat ke belakang (ke barat) dengan kelajuan $2\\text{ m/s}$ relatif terhadap air. Kecepatan perahu sesaat setelah penumpang melompat adalah...',
      options: ['5 m/s ke timur', '6 m/s ke timur', '8 m/s ke timur', '7 m/s ke timur'],
      answer: 'D',
      hint: 'Momentum awal sistem adalah $(m_{\\text{perahu}} + m_{\\text{orang}})v$; kecepatan penumpang ke barat bernilai negatif.',
      solution: 'Momentum awal: $(120 + 60) \\times 4 = 720\\text{ kg}\\cdot\\text{m/s}$.\nMomentum akhir: $120 v_{\\text{perahu}}\' + 60(-2) = 720 \\Rightarrow 120 v_{\\text{perahu}}\' = 840 \\Rightarrow v_{\\text{perahu}}\' = 7\\text{ m/s}$ ke timur. Jawaban: **D**.'
    })
  ]
});
