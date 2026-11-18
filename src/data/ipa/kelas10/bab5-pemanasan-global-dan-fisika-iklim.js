import { bab, soal } from '../author.js';

export default bab({
  grade: 10,
  number: 5,
  slug: 'pemanasan-global-dan-fisika-iklim',
  title: 'Kalor, Radiasi, dan Perubahan Iklim',
  element: 'Energi dan perubahannya: kalor, radiasi, dan perubahan iklim',
  summary: {
    overview: 'Pemanasan global dapat dipahami secara tepat melalui hukum-hukum fisika tentang kalor, radiasi termal, dan kesetimbangan energi Bumi. Bab ini membahas perpindahan kalor dan hukum radiasi Stefan-Boltzmann, kesetimbangan energi antara radiasi gelombang pendek Matahari dan radiasi inframerah Bumi beserta peran albedo, mekanisme efek rumah kaca oleh gas CO₂ dan CH₄, dampak fisis seperti pemuaian termal air laut dan mencairnya es, serta solusi mitigasi berbasis teknologi.',
    coreConcepts: [
      'Perpindahan Kalor dan Radiasi Benda Hitam: Kalor berpindah melalui konduksi, konveksi, dan radiasi. Setiap benda bersuhu mutlak $T$ (dalam kelvin) memancarkan radiasi elektromagnetik dengan daya menurut hukum Stefan-Boltzmann: $P = e\\sigma A T^4$, di mana $e$ emisivitas ($0 \\le e \\le 1$), $\\sigma = 5{,}67 \\times 10^{-8}\\text{ W/m}^2\\text{K}^4$, dan $A$ luas permukaan. Sesuai hukum pergeseran Wien ($\\lambda_{\\text{maks}} T = \\text{konstan}$), benda yang jauh lebih panas memancarkan panjang gelombang lebih pendek.',
      'Kesetimbangan Energi Bumi dan Albedo: Matahari ($\\sim 5.800\\text{ K}$) memancarkan radiasi gelombang pendek (cahaya tampak dan ultraviolet), sedangkan Bumi ($\\sim 288\\text{ K}$) memancarkan radiasi gelombang panjang (inframerah). Tidak semua radiasi Matahari diserap: fraksi yang dipantulkan kembali oleh awan, es, dan permukaan Bumi disebut albedo ($\\alpha$). Daya yang diserap bernilai $P_{\\text{serap}} = (1 - \\alpha)P_{\\text{datang}}$. Dalam kondisi setimbang, laju energi yang diserap sama dengan laju energi yang diradiasikan kembali ke antariksa.',
      'Efek Rumah Kaca dan Gas Rumah Kaca: Atmosfer relatif transparan terhadap radiasi gelombang pendek Matahari, tetapi gas rumah kaca seperti uap air, $\\text{CO}_2$, $\\text{CH}_4$, dan $\\text{N}_2\\text{O}$ menyerap lalu memancarkan kembali sebagian radiasi inframerah dari permukaan Bumi. Efek rumah kaca alami menjaga suhu rata-rata Bumi sekitar $15^\\circ\\text{C}$ (bukan $-18^\\circ\\text{C}$), sedangkan kelebihan emisi dari pembakaran fosil, deforestasi, dan peternakan memicu pemanasan global.',
      'Dampak Fisika Pemanasan Global: Kenaikan suhu global menyebabkan dua pendorong utama naiknya permukaan laut: (1) pemuaian termal air laut ($\\Delta V = \\gamma V_0 \\Delta T$, sehingga ketinggian kolom air naik $\\Delta h = \\gamma h_0 \\Delta T$) dan (2) mencairnya es daratan/gletser yang menyerap kalor lebur $Q = m L_f$. Pencairan es kutub juga memicu umpan balik es-albedo: es putih ($\\alpha \\approx 0{,}8$) tergantikan air laut gelap ($\\alpha \\approx 0{,}1$) sehingga Bumi menyerap lebih banyak energi.',
      'Mitigasi Perubahan Iklim Berbasis Teknologi: Upaya menekan laju pemanasan global secara fisis dilakukan dengan menurunkan emisi gas rumah kaca serta mengatur neraca radiasi: transisi pembangkit listrik fosil ke energi terbarukan (PLTS, PLTB, PLTP, PLTA), elektrifikasi transportasi, peningkatan efisiensi energi dan insulasi termal bangunan, penggunaan atap ber-albedo tinggi (cool roof), penangkapan dan penyimpanan karbon (CCS), serta konservasi hutan dan mangrove sebagai penyerap $\\text{CO}_2$.'
    ],
    keyFormulas: [
      { label: 'Hukum Stefan-Boltzmann', formula: 'P = e\\sigma A T^4 \\qquad \\dfrac{P_2}{P_1} = \\left(\\dfrac{T_2}{T_1}\\right)^4' },
      { label: 'Daya serap dan albedo', formula: 'P_{\\text{serap}} = (1 - \\alpha)\\,I\\,A' },
      { label: 'Kalor suhu & lebur es', formula: 'Q = m c\\,\\Delta T \\qquad Q = m L_f' },
      { label: 'Pemuaian termal air laut', formula: '\\Delta V = \\gamma V_0\\,\\Delta T \\qquad \\Delta h = \\gamma h_0\\,\\Delta T' }
    ],
    workedExamples: [
      {
        title: 'Perbandingan daya radiasi Stefan-Boltzmann',
        problem: 'Sebuah benda hitam bersuhu $27^\\circ\\text{C}$ dipanaskan hingga bersuhu $327^\\circ\\text{C}$. Berapa kali lipat daya radiasi yang dipancarkannya?',
        solution: 'Ubah ke kelvin: $T_1 = 27 + 273 = 300\\text{ K}$ dan $T_2 = 327 + 273 = 600\\text{ K}$.\n$\\dfrac{P_2}{P_1} = \\left(\\dfrac{600}{300}\\right)^4 = 2^4 = 16$ kali semula.'
      },
      {
        title: 'Menghitung energi terserap dari nilai albedo',
        problem: 'Lapisan es seluas $20\\text{ m}^2$ dengan albedo $0{,}85$ menerima intensitas sinar matahari $1.000\\text{ W/m}^2$. Berapa daya yang diserap lapisan es?',
        solution: '$P_{\\text{serap}} = (1 - \\alpha) I A = (1 - 0{,}85) \\times 1.000 \\times 20 = 0{,}15 \\times 20.000 = 3.000\\text{ W}$.'
      },
      {
        title: 'Kalor pencairan es dan pemanasan air',
        problem: 'Sebanyak $2\\text{ kg}$ es bersuhu $0^\\circ\\text{C}$ mencair seluruhnya lalu dipanaskan hingga $10^\\circ\\text{C}$ ($L_f = 336\\text{ kJ/kg}$, $c = 4{,}2\\text{ kJ/kg}^\\circ\\text{C}$). Hitung total kalor yang diserap.',
        solution: '$Q_1 = m L_f = 2 \\times 336 = 672\\text{ kJ}$.\n$Q_2 = m c\\,\\Delta T = 2 \\times 4{,}2 \\times 10 = 84\\text{ kJ}$.\n$Q_{\\text{total}} = 672 + 84 = 756\\text{ kJ}$.'
      }
    ],
    misconceptions: [
      'Memasukkan suhu dalam derajat Celsius ($^\\circ\\text{C}$) langsung ke hukum Stefan-Boltzmann $P = e\\sigma A T^4$. Suhu wajib dikonversi ke kelvin ($T = t + 273$) karena nol mutlak berada pada $0\\text{ K}$.',
      'Mengira mencairnya es laut yang sudah mengapung menjadi penyebab utama naiknya permukaan laut. Menurut hukum Archimedes, es terapung sudah mendesak volume air setara beratnya; kenaikan muka laut berasal dari mencairnya es daratan (gletser dan lapisan es kutub) serta pemuaian termal air laut.',
      'Menyamakan penipisan lapisan ozon dengan efek rumah kaca. Kerusakan ozon oleh CFC meningkatkan paparan sinar UV, sedangkan pemanasan global dipicu peningkatan gas rumah kaca yang menahan radiasi inframerah.',
      'Menganggap efek rumah kaca selalu berdampak negatif. Tanpa efek rumah kaca alami, permukaan Bumi akan membeku pada suhu rata-rata sekitar $-18^\\circ\\text{C}$.'
    ],
    tutorTip: 'Setiap kali memakai hukum Stefan-Boltzmann $P \\propto T^4$, ubah suhu ke kelvin terlebih dahulu! Ingat pasangan praktis: $27^\\circ\\text{C} = 300\\text{ K}$ dan $327^\\circ\\text{C} = 600\\text{ K}$ agar cepat menghitung perbandingan pangkat empatnya.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Berbeda dengan Matahari yang banyak memancarkan cahaya tampak, permukaan Bumi yang jauh lebih dingin memancarkan energi panas ke atmosfer dan antariksa terutama dalam bentuk...',
      options: [
        'sinar gamma',
        'radiasi inframerah (gelombang panjang)',
        'sinar ultraviolet berenergi tinggi',
        'gelombang bunyi'
      ],
      answer: 'B',
      hint: 'Menurut hukum pergeseran Wien, benda yang lebih dingin memancarkan radiasi pada panjang gelombang yang lebih panjang.',
      solution: 'Karena suhu permukaan Bumi sekitar $288\\text{ K}$ (jauh lebih rendah daripada Matahari $\\sim 5.800\\text{ K}$), puncak radiasi termal Bumi berada pada **radiasi inframerah gelombang panjang** yang kemudian diserap sebagian oleh gas rumah kaca. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Dalam kajian kesetimbangan energi iklim Bumi, besaran yang disebut albedo menyatakan...',
      options: [
        'fraksi radiasi matahari yang dipantulkan kembali oleh suatu permukaan atau atmosfer terhadap total radiasi yang datang',
        'laju pembakaran bahan bakar fosil per tahun oleh industri',
        'jumlah kalor yang dibutuhkan untuk menaikkan suhu air laut sebesar $1^\\circ\\text{C}$',
        'besar tekanan atmosfer di daerah kutub'
      ],
      answer: 'A',
      hint: 'Salju putih memiliki nilai besaran ini sekitar $0{,}8$, sedangkan aspal atau laut terbuka hanya sekitar $0{,}1$.',
      solution: '**Albedo** ($\\alpha$) adalah perbandingan daya radiasi matahari yang dipantulkan kembali oleh permukaan terhadap seluruh radiasi yang datang ($0 \\le \\alpha \\le 1$). Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pasangan gas rumah kaca utama yang konsentrasinya meningkat tajam akibat pembakaran bahan bakar fosil serta aktivitas peternakan dan lahan gambut berturut-turut adalah...',
      options: [
        'oksigen ($\\text{O}_2$) dan nitrogen ($\\text{N}_2$)',
        'argon ($\\text{Ar}$) dan helium ($\\text{He}$)',
        'karbon dioksida ($\\text{CO}_2$) dan metana ($\\text{CH}_4$)',
        'hidrogen ($\\text{H}_2$) dan neon ($\\text{Ne}$)'
      ],
      answer: 'C',
      hint: 'Pembakaran batu bara dan minyak melepas gas karbon hasil oksidasi, sedangkan fermentasi anaerob ternak dan rawa melepas gas metana.',
      solution: 'Pembakaran bahan bakar fosil menyumbang emisi **karbon dioksida ($\\text{CO}_2$)** terbesar, sedangkan peternakan ruminansia, sawah tergenang, dan lahan gambut menghasilkan **metana ($\\text{CH}_4$)** yang sangat kuat menyerap inframerah. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada persamaan hukum radiasi Stefan-Boltzmann $P = e\\sigma A T^4$, satuan suhu $T$ yang wajib digunakan dalam perhitungan adalah...',
      options: ['derajat Celsius ($^\\circ\\text{C}$)', 'derajat Fahrenheit ($^\\circ\\text{F}$)', 'derajat Reamur ($^\\circ\\text{R}$)', 'kelvin ($\\text{K}$)'],
      answer: 'D',
      hint: 'Hukum radiasi benda hitam menggunakan suhu mutlak dari skala SI.',
      solution: 'Pada hukum Stefan-Boltzmann, $T$ adalah suhu mutlak dalam satuan SI **kelvin ($\\text{K}$)**, di mana $T = t_{\\text{C}} + 273$. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Seandainya Bumi tidak memiliki atmosfer dan gas rumah kaca sama sekali, kondisi suhu rata-rata permukaan Bumi akan menjadi...',
      options: [
        'jauh lebih panas hingga air laut mendidih',
        'jauh lebih dingin dan membeku di sekitar $-18^\\circ\\text{C}$',
        'tetap stabil di sekitar $15^\\circ\\text{C}$ seperti sekarang',
        'tidak terpengaruh oleh radiasi matahari'
      ],
      answer: 'B',
      hint: 'Efek rumah kaca alami menahan sebagian radiasi inframerah agar Bumi tetap hangat.',
      solution: 'Tanpa efek rumah kaca alami, seluruh radiasi inframerah Bumi langsung lolos ke antariksa sehingga suhu rata-rata kesetimbangan Bumi turun dari $15^\\circ\\text{C}$ menjadi sekitar **$-18^\\circ\\text{C}$**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dua benda hitam identik memiliki luas permukaan dan emisivitas yang sama. Benda pertama bersuhu mutlak $200\\text{ K}$ dan benda kedua bersuhu mutlak $600\\text{ K}$. Perbandingan daya radiasi yang dipancarkan benda kedua terhadap benda pertama ($P_2 : P_1$) adalah...',
      options: ['$3 : 1$', '$9 : 1$', '$81 : 1$', '$27 : 1$'],
      answer: 'C',
      hint: 'Karena $e$, $\\sigma$, dan $A$ sama, $P \\propto T^4$.',
      solution: '$\\dfrac{P_2}{P_1} = \\left(\\dfrac{T_2}{T_1}\\right)^4 = \\left(\\dfrac{600}{200}\\right)^4 = 3^4 = 81$, sehingga perbandingannya **$81 : 1$**. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah pelat pemanas hitam sempurna mula-mula bersuhu $27^\\circ\\text{C}$, lalu dipanaskan hingga suhunya mencapai $327^\\circ\\text{C}$. Laju energi radiasi termal yang dipancarkan pelat menjadi...',
      options: ['16 kali semula', '12 kali semula', '4 kali semula', '8 kali semula'],
      answer: 'A',
      hint: 'Konversikan terlebih dahulu kedua suhu ke kelvin ($T = t + 273$), lalu gunakan $\\left(\\dfrac{T_2}{T_1}\\right)^4$.',
      solution: '$T_1 = 27 + 273 = 300\\text{ K}$ dan $T_2 = 327 + 273 = 600\\text{ K}$.\n$\\dfrac{P_2}{P_1} = \\left(\\dfrac{600}{300}\\right)^4 = 2^4 = 16$ kali semula. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Suatu hamparan salju seluas $10\\text{ m}^2$ memiliki albedo $\\alpha = 0{,}8$ dan menerima intensitas radiasi matahari tegak lurus sebesar $1.000\\text{ W/m}^2$. Daya radiasi matahari yang diserap oleh permukaan salju tersebut adalah...',
      options: ['10.000 W', '8.000 W', '1.250 W', '2.000 W'],
      answer: 'D',
      hint: 'Sebesar $\\alpha$ bagian dipantulkan, sehingga bagian yang diserap adalah $(1 - \\alpha)$.',
      solution: 'Fraksi energi yang diserap $= 1 - 0{,}8 = 0{,}2$.\n$P_{\\text{serap}} = 0{,}2 \\times 1.000\\text{ W/m}^2 \\times 10\\text{ m}^2 = 2.000\\text{ W}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebanyak $5\\text{ kg}$ es daratan bersuhu $0^\\circ\\text{C}$ mencair seluruhnya menjadi air bersuhu $0^\\circ\\text{C}$ akibat pemanasan lingkungan. Jika kalor lebur es $L_f = 336\\text{ kJ/kg}$, energi kalor yang diserap es tersebut adalah...',
      options: ['67,2 kJ', '1.680 kJ', '336 kJ', '3.360 kJ'],
      answer: 'B',
      hint: 'Pada saat melebur suhu tidak berubah; gunakan rumus kalor laten $Q = m L_f$.',
      solution: '$Q = m L_f = 5\\text{ kg} \\times 336\\text{ kJ/kg} = 1.680\\text{ kJ}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dari sudut pandang fisika, dua penyebab utama naiknya tinggi permukaan air laut secara global akibat pemanasan Bumi adalah...',
      options: [
        'bertambahnya curah hujan di lautan dan mencairnya gunung es yang mengapung di laut',
        'penguapan air laut yang berkurang dan gaya pasang surut bulan yang membesar',
        'pemuaian termal air laut yang menghangat dan mencairnya es daratan (gletser serta lapisan es kutub)',
        'penipisan lapisan ozon dan meningkatnya kecepatan angin laut'
      ],
      answer: 'C',
      hint: 'Es yang sudah terapung di air tidak mengubah tinggi air saat mencair; perubahan volume berasal dari suhu air yang naik dan tambahan massa air dari daratan.',
      solution: 'Kenaikan permukaan laut global terutama didorong oleh **pemuaian termal volume air laut** akibat kenaikan suhu lautan serta tambahan air dari **mencairnya es daratan** (gletser pegunungan, Greenland, dan Antarktika). Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Wilayah kutub mengalami pemanasan lebih cepat dibandingkan rata-rata global akibat fenomena umpan balik es-albedo. Penjelasan fisis yang paling tepat mengenai mekanisme ini adalah...',
      options: [
        'pencairan es ber-albedo tinggi membuka permukaan laut gelap ber-albedo rendah sehingga makin banyak radiasi matahari terserap dan mempercepat pencairan berikutnya',
        'pencairan es meningkatkan albedo lautan sehingga makin banyak panas dipantulkan kembali ke permukaan kutub',
        'air laut yang mencair membebaskan oksigen sehingga lapisan ozon menebal dan memerangkap panas',
        'es di kutub memiliki kalor jenis lebih kecil daripada aspal sehingga lebih cepat memanas'
      ],
      answer: 'A',
      hint: 'Bandingkan albedo es ($\\approx 0{,}8$) dengan albedo air laut terbuka ($\\approx 0{,}1$) serta dampaknya terhadap energi yang diserap.',
      solution: 'Es memantulkan sebagian besar radiasi matahari ($\\alpha \\approx 0{,}8$). Saat es mencair, permukaan laut gelap ($\\alpha \\approx 0{,}1$) tersingkap dan **menyerap jauh lebih banyak radiasi**, menaikkan suhu setempat dan memicu pencairan es lebih lanjut (umpan balik positif). Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Anggap suatu kolom air laut memiliki kedalaman rata-rata $h_0 = 2.000\\text{ m}$ dengan luas penampang horizontal dianggap tetap. Jika seluruh kolom air mengalami kenaikan suhu rata-rata $\\Delta T = 0{,}5^\\circ\\text{C}$ dan koefisien muai volume air laut $\\gamma = 2 \\times 10^{-4}\\ /^\\circ\\text{C}$ ($\\Delta h = \\gamma h_0 \\Delta T$), kenaikan tinggi permukaan laut akibat pemuaian termal tersebut adalah...',
      options: ['0,02 m', '2,0 m', '0,5 m', '0,2 m'],
      answer: 'D',
      hint: 'Substitusikan $\\gamma$, $h_0$, dan $\\Delta T$ langsung ke persamaan $\\Delta h = \\gamma h_0 \\Delta T$.',
      solution: '$\\Delta h = (2 \\times 10^{-4}\\ /^\\circ\\text{C}) \\times 2.000\\text{ m} \\times 0{,}5^\\circ\\text{C} = 0{,}4 \\times 0{,}5 = 0{,}2\\text{ m}$ ($20\\text{ cm}$). Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebongkah es daratan bermassa $2\\text{ kg}$ bersuhu $0^\\circ\\text{C}$ menyerap energi kalor dari lingkungan hingga seluruhnya mencair dan air leburannya bersuhu $20^\\circ\\text{C}$. Jika $L_f = 336\\text{ kJ/kg}$ dan kalor jenis air $c = 4{,}2\\text{ kJ/kg}^\\circ\\text{C}$, total kalor yang diserap adalah...',
      options: ['672 kJ', '840 kJ', '168 kJ', '504 kJ'],
      answer: 'B',
      hint: 'Jumlahkan kalor untuk melebur es pada $0^\\circ\\text{C}$ ($m L_f$) dan kalor untuk menaikkan suhu air dari $0^\\circ\\text{C}$ ke $20^\\circ\\text{C}$ ($m c\\,\\Delta T$).',
      solution: '$Q_{\\text{lebur}} = 2 \\times 336 = 672\\text{ kJ}$.\n$Q_{\\text{naik}} = 2 \\times 4{,}2 \\times (20 - 0) = 168\\text{ kJ}$.\nTotal kalor $= 672 + 168 = 840\\text{ kJ}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dua planet tanpa atmosfer, X dan Y, memiliki emisivitas permukaan sama ($e = 1$). Dalam kesetimbangan energi radiasi termal, daya radiasi rata-rata yang diserap per satuan luas di Planet X adalah $16$ kali lebih besar daripada di Planet Y. Perbandingan suhu mutlak kesetimbangan permukaan kedua planet ($T_X : T_Y$) adalah...',
      options: ['$16 : 1$', '$4 : 1$', '$2 : 1$', '$1 : 2$'],
      answer: 'C',
      hint: 'Pada kesetimbangan energi, intensitas daya yang dipancarkan sama dengan yang diserap: $\\sigma T^4 = I_{\\text{serap}}$.',
      solution: 'Dari $\\dfrac{P_X / A_X}{P_Y / A_Y} = \\left(\\dfrac{T_X}{T_Y}\\right)^4 = 16$, diperoleh $\\dfrac{T_X}{T_Y} = \\sqrt[4]{16} = 2$, sehingga perbandingannya **$2 : 1$**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah kota merancang paket kebijakan mitigasi berbasis fisika iklim untuk menekan pemanasan kota dan emisi karbon. Kombinasi tindakan yang secara bersamaan mengurangi penyerapan radiasi inframerah di atmosfer dan meningkatkan pemantulan radiasi matahari gelombang pendek di permukaan kota adalah...',
      options: [
        'mengganti pembangkit listrik batu bara dengan PLTS/PLTP serta melapisi atap bangunan dengan cat putih ber-albedo tinggi',
        'mengganti seluruh atap bangunan menjadi berwarna hitam pekat dan menambah armada bus berbahan bakar solar',
        'memasang kaca gelap di semua jalan raya tanpa mengubah sumber listrik fosil',
        'membakar seluruh sampah organik di pinggiran kota agar tidak menghasilkan metana'
      ],
      answer: 'A',
      hint: 'Cari tindakan yang memutus emisi gas rumah kaca (penyerap inframerah) sekaligus menaikkan nilai albedo permukaan kota.',
      solution: 'Peralihan dari batu bara ke **PLTS/PLTP** menekan emisi $\\text{CO}_2$ sehingga mengurangi pemerangkapan radiasi inframerah, sedangkan **cat putih ber-albedo tinggi** memantulkan lebih banyak radiasi gelombang pendek Matahari agar energi tidak terserap sebagai panas kota. Jawaban: **A**.'
    })
  ]
});
