import { bab, soal } from '../author.js';

export default bab({
  grade: 10,
  number: 3,
  slug: 'gerak-parabola-dan-melingkar',
  title: 'Gerak Parabola dan Gerak Melingkar',
  element: 'Energi dan perubahannya: gerak dua dimensi (parabola dan melingkar)',
  summary: {
    overview: 'Banyak gerak di alam terjadi pada bidang dua dimensi, seperti lintasan bola yang ditendang melambung atau gerakan roda dan planet yang berputar mengelilingi pusatnya. Bab ini menganalisis gerak parabola sebagai perpaduan gerak lurus beraturan di arah horizontal dan gerak lurus berubah beraturan di arah vertikal, serta gerak melingkar beraturan beserta besaran sudut, kelajuan linear, percepatan sentripetal, dan hubungan roda-roda.',
    coreConcepts: [
      'Gerak Parabola sebagai Perpaduan Gerak: Dengan mengabaikan hambatan udara, gerak parabola terdiri atas gerak lurus beraturan (GLB) pada sumbu-$x$ ($a_x = 0$, $v_x = v_0\\cos\\theta$ konstan) dan gerak lurus berubah beraturan (GLBB) pada sumbu-$y$ ($a_y = -g$, $v_y = v_0\\sin\\theta - g t$). Posisi benda pada saat $t$ adalah $x = (v_0\\cos\\theta)t$ dan $y = (v_0\\sin\\theta)t - \\tfrac{1}{2}g t^2$.',
      'Titik Tertinggi dan Jangkauan Gerak Parabola: Di titik tertinggi, komponen kecepatan vertikal bernilai nol ($v_y = 0$), sehingga kelajuan benda tinggal $v_x = v_0\\cos\\theta$. Waktu mencapai puncak $t_p = \\dfrac{v_0\\sin\\theta}{g}$, tinggi maksimum $h_{\\text{maks}} = \\dfrac{v_0^2\\sin^2\\theta}{2g}$, waktu total kembali ke bidang datar $t_{\\text{total}} = 2t_p$, dan jangkauan mendatar maksimum $x_{\\text{maks}} = \\dfrac{v_0^2\\sin(2\\theta)}{g}$ (terjauh saat $\\theta = 45^\\circ$).',
      'Besaran Gerak Melingkar Beraturan (GMB): Pada GMB, benda menempuh lintasan lingkaran dengan kelajuan konstan. Periode ($T = \\dfrac{t}{n}$) adalah waktu untuk satu putaran penuh dan frekuensi ($f = \\dfrac{n}{t} = \\dfrac{1}{T}$) adalah banyak putaran per sekon. Kecepatan sudut $\\omega = \\dfrac{2\\pi}{T} = 2\\pi f$ bersatuan $\\text{rad/s}$ (dengan $1\\text{ rpm} = \\dfrac{2\\pi}{60}\\text{ rad/s}$).',
      'Kelajuan Linear dan Percepatan Sentripetal: Hubungan kecepatan sudut dan kelajuan linear adalah $v = \\omega R$ dengan arah selalu menyinggung lintasan. Meskipun besar kelajuannya tetap, arah vektor kecepatan terus berubah sehingga muncul percepatan sentripetal menuju pusat lingkaran: $a_s = \\dfrac{v^2}{R} = \\omega^2 R$, yang dihasilkan oleh gaya sentripetal $F_s = m a_s$.',
      'Hubungan Roda-Roda pada Gerak Melingkar: Dua roda yang sepusat (seporos) memiliki kecepatan sudut sama ($\\omega_1 = \\omega_2 \\Rightarrow \\dfrac{v_1}{R_1} = \\dfrac{v_2}{R_2}$). Dua roda yang bersinggungan langsung atau dihubungkan dengan sabuk/rantai memiliki kelajuan linear sama ($v_1 = v_2 \\Rightarrow \\omega_1 R_1 = \\omega_2 R_2$).'
    ],
    keyFormulas: [
      { label: 'Komponen kecepatan parabola', formula: 'v_x = v_0\\cos\\theta \\qquad v_y = v_0\\sin\\theta - g t' },
      { label: 'Tinggi & jangkauan maksimum', formula: 'h_{\\text{maks}} = \\dfrac{v_0^2\\sin^2\\theta}{2g} \\qquad x_{\\text{maks}} = \\dfrac{v_0^2\\sin(2\\theta)}{g}' },
      { label: 'Kecepatan sudut & linear', formula: '\\omega = \\dfrac{2\\pi}{T} = 2\\pi f \\qquad v = \\omega R' },
      { label: 'Percepatan & gaya sentripetal', formula: 'a_s = \\dfrac{v^2}{R} = \\omega^2 R \\qquad F_s = m a_s' }
    ],
    workedExamples: [
      {
        title: 'Menghitung waktu puncak dan tinggi maksimum',
        problem: 'Bola dilempar dengan kecepatan awal $20\\text{ m/s}$ pada sudut elevasi $30^\\circ$ ($g = 10\\text{ m/s}^2$). Tentukan waktu mencapai puncak dan tinggi maksimumnya.',
        solution: '$v_{0y} = 20\\sin 30^\\circ = 10\\text{ m/s}$.\n$t_p = \\dfrac{v_{0y}}{g} = \\dfrac{10}{10} = 1\\text{ s}$ dan $h_{\\text{maks}} = \\dfrac{v_{0y}^2}{2g} = \\dfrac{10^2}{2(10)} = 5\\text{ m}$.'
      },
      {
        title: 'Percepatan sentripetal roda berputar',
        problem: 'Sebuah titik di tepi roda berjari-jari $0{,}25\\text{ m}$ berputar dengan kelajuan linear $4\\text{ m/s}$. Berapa percepatan sentripetalnya?',
        solution: '$a_s = \\dfrac{v^2}{R} = \\dfrac{4^2}{0{,}25} = \\dfrac{16}{0{,}25} = 64\\text{ m/s}^2$ menuju pusat roda.'
      },
      {
        title: 'Hubungan roda bersabuk',
        problem: 'Roda A berjari-jari $15\\text{ cm}$ dihubungkan sabuk dengan roda B berjari-jari $5\\text{ cm}$. Jika roda A berputar dengan $\\omega_A = 6\\text{ rad/s}$, berapa $\\omega_B$?',
        solution: 'Karena dihubungkan sabuk, $v_A = v_B \\Rightarrow \\omega_A R_A = \\omega_B R_B$.\n$6 \\times 15 = \\omega_B \\times 5 \\Rightarrow \\omega_B = 18\\text{ rad/s}$.'
      }
    ],
    misconceptions: [
      'Menganggap kecepatan benda di titik tertinggi gerak parabola bernilai nol. Hanya komponen vertikal $v_y = 0$, sedangkan komponen horizontal $v_x = v_0\\cos\\theta$ tetap ada.',
      'Menganggap benda yang bergerak melingkar beraturan tidak memiliki percepatan karena kelajuannya konstan. Arah kecepatan terus berubah sehingga selalu ada percepatan sentripetal menuju pusat.',
      'Tertukar syarat hubungan roda-roda: roda seporos memiliki $\\omega$ sama, sedangkan roda bersabuk atau bersinggungan memiliki $v$ sama.'
    ],
    tutorTip: 'Pada gerak parabola, jangan menghafal terlalu banyak rumus turunan. Cukup uraikan $v_{0x} = v_0\\cos\\theta$ dan $v_{0y} = v_0\\sin\\theta$: sumbu-$x$ selalu GLB ($x = v_{0x}t$) dan sumbu-$y$ selalu GLBB vertikal ($v_y = v_{0y} - g t$, $y = v_{0y}t - \\tfrac{1}{2}gt^2$).'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Pada gerak parabola yang tidak dipengaruhi gesekan udara, pernyataan yang benar mengenai kecepatan benda di titik tertinggi lintasannya adalah...',
      options: [
        'kecepatan totalnya bernilai nol',
        'komponen kecepatan vertikalnya nol dan kecepatannya sama dengan $v_0\\cos\\theta$ berarah mendatar',
        'komponen kecepatan horizontalnya nol',
        'kecepatannya berbalik arah ke bawah'
      ],
      answer: 'B',
      hint: 'Di titik tertinggi benda berhenti naik sejenak, tetapi gerak mendatarnya tetap berlangsung konstan.',
      solution: 'Di titik tertinggi $v_y = 0$, sedangkan komponen mendatar $v_x = v_0\\cos\\theta$ tetap konstan, sehingga kecepatan benda sama dengan **$v_0\\cos\\theta$ berarah mendatar**. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Agar peluru yang ditembakkan dari tanah datar dengan kelajuan awal tertentu mencapai jarak mendatar terjauh (hambatan udara diabaikan), sudut elevasi yang harus dipilih adalah...',
      options: ['$30^\\circ$', '$60^\\circ$', '$90^\\circ$', '$45^\\circ$'],
      answer: 'D',
      hint: 'Lihat faktor $\\sin(2\\theta)$ pada rumus $x_{\\text{maks}} = \\dfrac{v_0^2\\sin(2\\theta)}{g}$. Nilai maksimum sinus adalah $1$.',
      solution: '$x_{\\text{maks}}$ bernilai maksimum ketika $\\sin(2\\theta) = 1$, yaitu $2\\theta = 90^\\circ$ atau **$\\theta = 45^\\circ$**. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah baling-baling berputar sebanyak $120$ putaran dalam waktu $60\\text{ sekon}$. Frekuensi dan periode putaran baling-baling tersebut berturut-turut adalah...',
      options: [
        '$2\\text{ Hz}$ dan $0{,}5\\text{ s}$',
        '$0{,}5\\text{ Hz}$ dan $2\\text{ s}$',
        '$2\\text{ Hz}$ dan $2\\text{ s}$',
        '$60\\text{ Hz}$ dan $120\\text{ s}$'
      ],
      answer: 'A',
      hint: 'Gunakan $f = \\dfrac{n}{t}$ dan $T = \\dfrac{1}{f}$.',
      solution: '$f = \\dfrac{120}{60} = 2\\text{ Hz}$ dan $T = \\dfrac{1}{2} = 0{,}5\\text{ s}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah kipas angin berputar dengan kelajuan sudut $300\\text{ rpm}$ (putaran per menit). Kecepatan sudut kipas angin tersebut dalam satuan SI ($\\text{rad/s}$) adalah...',
      options: ['$5\\pi\\text{ rad/s}$', '$300\\pi\\text{ rad/s}$', '$10\\pi\\text{ rad/s}$', '$20\\pi\\text{ rad/s}$'],
      answer: 'C',
      hint: '$1\\text{ putaran} = 2\\pi\\text{ rad}$ dan $1\\text{ menit} = 60\\text{ s}$.',
      solution: '$\\omega = \\dfrac{300 \\times 2\\pi}{60} = 5 \\times 2\\pi = 10\\pi\\text{ rad/s}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada gerak melingkar beraturan, arah kecepatan linear dan arah percepatan sentripetal benda berturut-turut adalah...',
      options: [
        'menuju pusat lingkaran dan menyinggung lintasan',
        'menyinggung lintasan dan menuju pusat lingkaran',
        'keduanya menuju pusat lingkaran',
        'menyinggung lintasan dan menjauhi pusat lingkaran'
      ],
      answer: 'B',
      hint: 'Kecepatan selalu searah garis singgung lintasan, sedangkan percepatan sentripetal menarik benda tetap berada di jalur lingkaran.',
      solution: 'Kecepatan linear selalu **menyinggung lintasan lingkaran**, sedangkan percepatan sentripetal selalu **menuju pusat lingkaran** (keduanya saling tegak lurus). Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah bola ditendang dari tanah dengan kecepatan awal $v_0 = 40\\text{ m/s}$ dan sudut elevasi $30^\\circ$ seperti tampak pada gambar ($g = 10\\text{ m/s}^2$). Tinggi maksimum yang dicapai bola adalah...',
      options: ['40 m', '80 m', '10 m', '20 m'],
      answer: 'D',
      hint: 'Hitung $v_{0y} = v_0\\sin 30^\\circ$ terlebih dahulu, lalu gunakan $h_{\\text{maks}} = \\dfrac{v_{0y}^2}{2g}$.',
      solution: '$v_{0y} = 40\\sin 30^\\circ = 20\\text{ m/s}$.\n$h_{\\text{maks}} = \\dfrac{20^2}{2 \\times 10} = \\dfrac{400}{20} = 20\\text{ m}$. Jawaban: **D**.',
      visual: {
        type: 'projectile',
        props: {
          title: 'Gerak Parabola Bola',
          v0Label: 'v₀ = 40 m/s',
          angleLabel: '30°',
          heightLabel: 'h = ?'
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah peluru ditembakkan dengan kecepatan awal $60\\text{ m/s}$ dan sudut elevasi $30^\\circ$ ($g = 10\\text{ m/s}^2$). Waktu untuk mencapai titik tertinggi dan besar kecepatan peluru saat di titik tertinggi berturut-turut adalah...',
      options: [
        '$6\\text{ s}$ dan $30\\text{ m/s}$',
        '$3\\text{ s}$ dan $0\\text{ m/s}$',
        '$3\\text{ s}$ dan $30\\sqrt{3}\\text{ m/s}$',
        '$6\\text{ s}$ dan $30\\sqrt{3}\\text{ m/s}$'
      ],
      answer: 'C',
      hint: 'Waktu puncak $t_p = \\dfrac{v_0\\sin 30^\\circ}{g}$, sedangkan di titik tertinggi kelajuan benda bernilai $v_0\\cos 30^\\circ$.',
      solution: '$t_p = \\dfrac{60\\sin 30^\\circ}{10} = \\dfrac{30}{10} = 3\\text{ s}$.\nDi titik tertinggi $v_y = 0$, sehingga besar kecepatannya adalah $v_x = 60\\cos 30^\\circ = 60(\\tfrac{1}{2}\\sqrt{3}) = 30\\sqrt{3}\\text{ m/s}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah benda bergerak melingkar beraturan dengan jari-jari lintasan $0{,}5\\text{ m}$ dan kecepatan sudut $4\\text{ rad/s}$. Besar percepatan sentripetal yang dialami benda tersebut adalah...',
      options: ['$8\\text{ m/s}^2$', '$2\\text{ m/s}^2$', '$4\\text{ m/s}^2$', '$16\\text{ m/s}^2$'],
      answer: 'A',
      hint: 'Gunakan rumus $a_s = \\omega^2 R$.',
      solution: '$a_s = \\omega^2 R = 4^2 \\times 0{,}5 = 16 \\times 0{,}5 = 8\\text{ m/s}^2$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Gir depan sebuah sepeda berjari-jari $12\\text{ cm}$ diputar dengan kecepatan sudut $5\\text{ rad/s}$. Gir tersebut dihubungkan rantai ke gir belakang yang berjari-jari $4\\text{ cm}$. Kecepatan sudut gir belakang adalah...',
      options: ['$1{,}67\\text{ rad/s}$', '$15\\text{ rad/s}$', '$20\\text{ rad/s}$', '$60\\text{ rad/s}$'],
      answer: 'B',
      hint: 'Dua gir yang dihubungkan rantai memiliki kelajuan linear yang sama: $\\omega_1 R_1 = \\omega_2 R_2$.',
      solution: 'Karena terhubung rantai, $v_1 = v_2 \\Rightarrow \\omega_1 R_1 = \\omega_2 R_2$.\n$5 \\times 12 = \\omega_2 \\times 4 \\Rightarrow \\omega_2 = \\dfrac{60}{4} = 15\\text{ rad/s}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dua bola ditendang dari tanah datar dengan kelajuan awal yang sama besar $v_0$. Bola A ditendang dengan sudut elevasi $30^\\circ$ dan bola B dengan sudut elevasi $60^\\circ$. Perbandingan jarak mendatar maksimum $x_A : x_B$ adalah...',
      options: ['$1 : 3$', '$1 : \\sqrt{3}$', '$\\sqrt{3} : 1$', '$1 : 1$'],
      answer: 'D',
      hint: 'Pasangan sudut yang jumlahnya $90^\\circ$ (berpenyiku) memenuhi $\\sin(2\\theta_1) = \\sin(2\\theta_2)$.',
      solution: '$\\sin(2 \\times 30^\\circ) = \\sin 60^\\circ$ dan $\\sin(2 \\times 60^\\circ) = \\sin 120^\\circ = \\sin 60^\\circ$. Karena $v_0$ dan $g$ sama, $x_A = x_B$ sehingga perbandingannya **$1 : 1$**. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah peluru ditembakkan dari permukaan tanah dengan kelajuan awal $v_0 = 50\\text{ m/s}$ dan sudut elevasi $37^\\circ$ seperti pada gambar ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\text{ m/s}^2$). Jangkauan mendatar maksimum peluru adalah...',
      options: ['120 m', '180 m', '240 m', '300 m'],
      answer: 'C',
      hint: 'Hitung waktu total di udara $t_{\\text{total}} = \\dfrac{2 v_0\\sin 37^\\circ}{g}$, lalu kalikan dengan $v_{0x} = v_0\\cos 37^\\circ$.',
      solution: '$v_{0x} = 50(0{,}8) = 40\\text{ m/s}$ dan $v_{0y} = 50(0{,}6) = 30\\text{ m/s}$.\nWaktu total di udara $t_{\\text{total}} = \\dfrac{2 \\times 30}{10} = 6\\text{ s}$.\nJangkauan mendatar $x_{\\text{maks}} = 40 \\times 6 = 240\\text{ m}$. Jawaban: **C**.',
      visual: {
        type: 'projectile',
        props: {
          title: 'Jangkauan Gerak Parabola',
          v0Label: 'v₀ = 50 m/s',
          angleLabel: '37°',
          rangeLabel: 'x = ?'
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah pesawat terbang mendatar dengan kelajuan konstan $80\\text{ m/s}$ pada ketinggian $180\\text{ m}$ di atas tanah datar dan menjatuhkan paket bantuan tanpa dorongan awal vertikal ($g = 10\\text{ m/s}^2$). Jarak mendatar jatuhnya paket diukur dari posisi pesawat saat melepas paket adalah...',
      options: ['240 m', '480 m', '360 m', '640 m'],
      answer: 'B',
      hint: 'Cari waktu jatuh bebas vertikal dari $h = \\tfrac{1}{2}g t^2$, lalu hitung jarak mendatar $x = v_{0x} t$.',
      solution: 'Waktu jatuh: $180 = \\tfrac{1}{2}(10)t^2 \\Rightarrow t^2 = 36 \\Rightarrow t = 6\\text{ s}$.\nJarak mendatar: $x = 80 \\times 6 = 480\\text{ m}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah proyektil ditembakkan dari tanah dengan kecepatan awal $50\\text{ m/s}$ pada sudut elevasi $53^\\circ$ ($\\sin 53^\\circ = 0{,}8$; $\\cos 53^\\circ = 0{,}6$; $g = 10\\text{ m/s}^2$). Besar kecepatan proyektil pada saat $t = 1\\text{ s}$ setelah ditembakkan adalah...',
      options: ['$30\\text{ m/s}$', '$40\\text{ m/s}$', '$50\\text{ m/s}$', '$30\\sqrt{2}\\text{ m/s}$'],
      answer: 'D',
      hint: 'Tentukan komponen $v_x$ dan $v_y$ saat $t = 1\\text{ s}$, lalu hitung resultannya $v = \\sqrt{v_x^2 + v_y^2}$.',
      solution: '$v_x = 50\\cos 53^\\circ = 50(0{,}6) = 30\\text{ m/s}$.\n$v_y = 50\\sin 53^\\circ - g t = 40 - 10(1) = 30\\text{ m/s}$.\nBesar kecepatan $v = \\sqrt{30^2 + 30^2} = 30\\sqrt{2}\\text{ m/s}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pada sebuah mesin terdapat tiga roda A, B, dan C. Roda A ($R_A = 10\\text{ cm}$) seporos dengan roda B ($R_B = 30\\text{ cm}$), sedangkan roda A dihubungkan dengan sabuk ke roda C ($R_C = 5\\text{ cm}$). Jika roda C berputar dengan kecepatan sudut $12\\text{ rad/s}$, kelajuan linear di tepi roda B adalah...',
      options: ['$1{,}8\\text{ m/s}$', '$0{,}6\\text{ m/s}$', '$3{,}6\\text{ m/s}$', '$0{,}2\\text{ m/s}$'],
      answer: 'A',
      hint: 'Dari hubungan sabuk $v_A = v_C$ cari $\\omega_A$, gunakan $\\omega_B = \\omega_A$ (seporos), lalu hitung $v_B = \\omega_B R_B$.',
      solution: '$v_A = v_C = \\omega_C R_C = 12 \\times 0{,}05 = 0{,}6\\text{ m/s}$.\nKecepatan sudut roda A dan B sama: $\\omega_B = \\omega_A = \\dfrac{v_A}{R_A} = \\dfrac{0{,}6}{0{,}10} = 6\\text{ rad/s}$.\nKelajuan tepi roda B: $v_B = \\omega_B R_B = 6 \\times 0{,}30 = 1{,}8\\text{ m/s}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah mobil bermassa $1.200\\text{ kg}$ melaju dengan kelajuan $20\\text{ m/s}$ melewati tikungan datar berbentuk busur lingkaran berjari-jari $80\\text{ m}$. Gaya sentripetal minimum yang harus disediakan oleh gesekan ban dengan aspal agar mobil tidak tergelincir keluar tikungan adalah...',
      options: ['300 N', '3.000 N', '6.000 N', '24.000 N'],
      answer: 'C',
      hint: 'Gunakan rumus gaya sentripetal $F_s = \\dfrac{m v^2}{R}$.',
      solution: '$F_s = \\dfrac{m v^2}{R} = \\dfrac{1.200 \\times 20^2}{80} = \\dfrac{1.200 \\times 400}{80} = 1.200 \\times 5 = 6.000\\text{ N}$. Jawaban: **C**.'
    })
  ]
});
