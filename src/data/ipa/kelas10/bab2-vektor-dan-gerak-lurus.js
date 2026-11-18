import { bab, soal } from '../author.js';

export default bab({
  grade: 10,
  number: 2,
  slug: 'vektor-dan-gerak-lurus',
  title: 'Vektor dan Kinematika Gerak Lurus',
  element: 'Energi dan perubahannya: vektor dan kinematika gerak lurus',
  summary: {
    overview: 'Dalam fisika, banyak besaran seperti perpindahan, kecepatan, dan gaya tidak cukup dinyatakan hanya dengan nilai angkanya saja, melainkan memerlukan arah. Bab ini membahas perbedaan besaran skalar dan vektor, penguraian komponen vektor serta penjumlahan vektor secara analitis, konsep jarak versus perpindahan, gerak lurus beraturan (GLB), gerak lurus berubah beraturan (GLBB) termasuk gerak vertikal, serta interpretasi grafik s–t dan v–t.',
    coreConcepts: [
      'Besaran Skalar dan Vektor: Besaran skalar hanya memiliki nilai (jarak, kelajuan, massa, suhu, energi), sedangkan besaran vektor memiliki nilai dan arah (perpindahan, kecepatan, percepatan, gaya). Vektor $\\vec{F}$ pada bidang datar dapat diuraikan menjadi komponen sumbu-$x$ dan sumbu-$y$: $F_x = F\\cos\\theta$ dan $F_y = F\\sin\\theta$, dengan $\\theta$ adalah sudut terhadap sumbu-$x$ positif.',
      'Resultan Vektor Secara Analitis: Besar resultan dua vektor $F_1$ dan $F_2$ yang membentuk sudut apit $\\alpha$ adalah $R = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2\\cos\\alpha}$. Untuk lebih dari dua vektor, gunakan metode penguraian komponen: $R_x = \\sum F_x$ dan $R_y = \\sum F_y$, sehingga $R = \\sqrt{R_x^2 + R_y^2}$ dengan arah $\\tan\\theta = \\dfrac{R_y}{R_x}$.',
      'Jarak, Perpindahan, Kelajuan, dan Kecepatan: Jarak adalah panjang total lintasan yang ditempuh (skalar), sedangkan perpindahan adalah perubahan posisi dari titik awal ke titik akhir $\\Delta\\vec{r} = \\vec{r}_2 - \\vec{r}_1$ (vektor). Kelajuan rata-rata = jarak total dibagi waktu total, sedangkan kecepatan rata-rata = perpindahan dibagi selang waktu.',
      'Gerak Lurus Beraturan dan Berubah Beraturan: Pada GLB, kecepatan tetap ($a = 0$) sehingga $s = v \\cdot t$. Pada GLBB, percepatan tetap ($a \\neq 0$) dan berlaku tiga persamaan kinematika: $v_t = v_0 + a t$, $s = v_0 t + \\tfrac{1}{2}a t^2$, dan $v_t^2 = v_0^2 + 2a s$. Pada gerak jatuh bebas ($v_0 = 0$) dan gerak vertikal, percepatan yang bekerja adalah percepatan gravitasi $g$ ke arah bawah.',
      'Interpretasi Grafik Gerak Lurus: Pada grafik posisi terhadap waktu ($s\\text{--}t$), kemiringan (gradien) kurva menyatakan kecepatan sesaat benda; garis lurus miring menandakan GLB, sedangkan kurva parabola menandakan GLBB. Pada grafik kecepatan terhadap waktu ($v\\text{--}t$), kemiringan garis menyatakan percepatan $a = \\dfrac{\\Delta v}{\\Delta t}$, dan luas daerah di bawah grafik menyatakan perpindahan atau jarak tempuh benda.'
    ],
    keyFormulas: [
      { label: 'Komponen vektor', formula: 'F_x = F\\cos\\theta \\qquad F_y = F\\sin\\theta' },
      { label: 'Resultan dua vektor', formula: 'R = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2\\cos\\alpha}' },
      { label: 'Resultan komponen', formula: 'R = \\sqrt{R_x^2 + R_y^2} \\qquad \\tan\\theta = \\dfrac{R_y}{R_x}' },
      { label: 'Persamaan GLBB', formula: 'v_t = v_0 + a t \\qquad s = v_0 t + \\tfrac{1}{2}a t^2 \\qquad v_t^2 = v_0^2 + 2a s' }
    ],
    workedExamples: [
      {
        title: 'Resultan vektor dengan sudut apit',
        problem: 'Dua vektor gaya masing-masing $F_1 = 6\\text{ N}$ dan $F_2 = 10\\text{ N}$ bertitik tangkap sama dan membentuk sudut $60^\\circ$. Tentukan besar resultannya.',
        solution: '$R = \\sqrt{6^2 + 10^2 + 2(6)(10)\\cos 60^\\circ} = \\sqrt{36 + 100 + 120(0{,}5)} = \\sqrt{196} = 14\\text{ N}$.'
      },
      {
        title: 'Jarak pengereman mobil (GLBB)',
        problem: 'Sebuah mobil melaju dengan kecepatan $20\\text{ m/s}$ lalu direm dengan perlambatan tetap $5\\text{ m/s}^2$ hingga berhenti. Berapa jarak yang ditempuh sejak pengereman hingga berhenti?',
        solution: 'Saat berhenti $v_t = 0$ dan $a = -5\\text{ m/s}^2$. Dari $v_t^2 = v_0^2 + 2a s$ diperoleh $0 = 20^2 + 2(-5)s \\Rightarrow 10s = 400 \\Rightarrow s = 40\\text{ m}$.'
      },
      {
        title: 'Menghitung jarak dari grafik v–t',
        problem: 'Sebuah benda mula-mula bergerak $4\\text{ m/s}$ pada $t = 0\\text{ s}$, lalu dipercepat beraturan hingga $12\\text{ m/s}$ pada $t = 5\\text{ s}$. Tentukan jarak tempuh selama $5\\text{ s}$.',
        solution: 'Jarak = luas trapesium di bawah grafik $v\\text{--}t$: $s = \\dfrac{v_0 + v_t}{2} \\times t = \\dfrac{4 + 12}{2} \\times 5 = 8 \\times 5 = 40\\text{ m}$.'
      }
    ],
    misconceptions: [
      'Menjumlahkan dua vektor gaya secara langsung seperti skalar tanpa memperhatikan sudut dan arahnya.',
      'Menganggap benda yang dilempar vertikal ke atas memiliki percepatan nol di titik tertinggi. Di titik tertinggi kecepatannya memang nol ($v_y = 0$), tetapi percepatan gravitasinya tetap $g$ ke bawah.',
      'Mengira luas di bawah grafik $s\\text{--}t$ menyatakan jarak tempuh; yang menyatakan perpindahan/jarak adalah luas di bawah grafik $v\\text{--}t$, sedangkan grafik $s\\text{--}t$ langsung menunjukkan posisi dan kemiringannya menyatakan kecepatan.'
    ],
    tutorTip: 'Untuk soal grafik $v\\text{--}t$ bertahap (naik–datar–turun), pecah daerah di bawah grafik menjadi segitiga, persegi panjang, atau trapesium lalu jumlahkan luasnya — jauh lebih cepat dan minim kesalahan dibanding memakai rumus GLBB berulang kali.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Kelompok besaran fisika berikut yang seluruhnya merupakan besaran vektor adalah...',
      options: [
        'jarak, kelajuan, dan energi',
        'massa, waktu, dan percepatan',
        'perpindahan, kecepatan, dan gaya',
        'suhu, panjang, dan usaha'
      ],
      answer: 'C',
      hint: 'Besaran vektor memiliki besar sekaligus arah.',
      solution: '**Perpindahan, kecepatan, dan gaya** semuanya memiliki besar dan arah sehingga termasuk besaran vektor. Jarak, kelajuan, massa, waktu, suhu, energi, dan usaha adalah besaran skalar. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah gaya $F = 20\\text{ N}$ membentuk sudut $60^\\circ$ terhadap sumbu-$x$ positif. Komponen gaya pada sumbu-$x$ dan sumbu-$y$ berturut-turut adalah...',
      options: [
        '$F_x = 10\\text{ N}$ dan $F_y = 10\\sqrt{3}\\text{ N}$',
        '$F_x = 10\\sqrt{3}\\text{ N}$ dan $F_y = 10\\text{ N}$',
        '$F_x = 10\\sqrt{2}\\text{ N}$ dan $F_y = 10\\sqrt{2}\\text{ N}$',
        '$F_x = 20\\text{ N}$ dan $F_y = 10\\text{ N}$'
      ],
      answer: 'A',
      hint: 'Gunakan $F_x = F\\cos 60^\\circ$ dan $F_y = F\\sin 60^\\circ$.',
      solution: '$F_x = 20\\cos 60^\\circ = 20(0{,}5) = 10\\text{ N}$ dan $F_y = 20\\sin 60^\\circ = 20(\\tfrac{1}{2}\\sqrt{3}) = 10\\sqrt{3}\\text{ N}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Dua vektor gaya saling tegak lurus bekerja pada satu titik, masing-masing $6\\text{ N}$ ke arah timur dan $8\\text{ N}$ ke arah utara. Besar resultan kedua gaya tersebut adalah...',
      options: ['2 N', '14 N', '48 N', '10 N'],
      answer: 'D',
      hint: 'Karena saling tegak lurus ($\\cos 90^\\circ = 0$), gunakan teorema Pythagoras $R = \\sqrt{F_1^2 + F_2^2}$.',
      solution: '$R = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ N}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pasangan bentuk grafik gerak lurus yang benar untuk gerak lurus beraturan (GLB) pada grafik $s\\text{--}t$ dan gerak lurus berubah beraturan (GLBB) dipercepat pada grafik $v\\text{--}t$ adalah...',
      options: [
        'grafik $s\\text{--}t$ mendatar dan grafik $v\\text{--}t$ mendatar',
        'grafik $s\\text{--}t$ garis lurus miring dan grafik $v\\text{--}t$ garis lurus miring naik',
        'grafik $s\\text{--}t$ melengkung dan grafik $v\\text{--}t$ mendatar',
        'grafik $s\\text{--}t$ garis lurus miring dan grafik $v\\text{--}t$ mendatar'
      ],
      answer: 'B',
      hint: 'Pada GLB, posisi bertambah secara tetap tiap sekon; pada GLBB dipercepat, kecepatan bertambah secara tetap tiap sekon.',
      solution: 'Pada GLB, $s = v\\,t$ sehingga grafik $s\\text{--}t$ berbentuk **garis lurus miring**. Pada GLBB dipercepat, $v = v_0 + a\\,t$ ($a > 0$) sehingga grafik $v\\text{--}t$ berbentuk **garis lurus miring naik**. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah batu dijatuhkan tanpa kecepatan awal dari puncak sebuah menara dan menyentuh tanah setelah $3\\text{ s}$ ($g = 10\\text{ m/s}^2$). Tinggi menara tersebut adalah...',
      options: ['45 m', '30 m', '15 m', '90 m'],
      answer: 'A',
      hint: 'Pada gerak jatuh bebas ($v_0 = 0$), gunakan $h = \\tfrac{1}{2} g t^2$.',
      solution: '$h = \\tfrac{1}{2} \\times 10 \\times 3^2 = 5 \\times 9 = 45\\text{ m}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dua vektor gaya masing-masing $F_1 = 5\\text{ N}$ dan $F_2 = 3\\text{ N}$ bertitik tangkap sama dan membentuk sudut $60^\\circ$. Besar resultan kedua vektor tersebut adalah...',
      options: ['4 N', '8 N', '7 N', '15 N'],
      answer: 'C',
      hint: 'Gunakan rumus kosinus $R = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2\\cos 60^\\circ}$.',
      solution: '$R = \\sqrt{5^2 + 3^2 + 2(5)(3)(0{,}5)} = \\sqrt{25 + 9 + 15} = \\sqrt{49} = 7\\text{ N}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Seorang pelajar berjalan $60\\text{ m}$ ke arah timur, lalu berbelok dan berjalan $80\\text{ m}$ ke arah utara dalam waktu total $20\\text{ s}$. Kelajuan rata-rata dan besar kecepatan rata-rata pelajar tersebut berturut-turut adalah...',
      options: [
        '$5\\text{ m/s}$ dan $7\\text{ m/s}$',
        '$7\\text{ m/s}$ dan $5\\text{ m/s}$',
        '$7\\text{ m/s}$ dan $7\\text{ m/s}$',
        '$5\\text{ m/s}$ dan $5\\text{ m/s}$'
      ],
      answer: 'B',
      hint: 'Jarak = $60 + 80$, sedangkan besar perpindahan = $\\sqrt{60^2 + 80^2}$.',
      solution: 'Jarak total $= 60 + 80 = 140\\text{ m}$, sehingga kelajuan rata-rata $= 140 : 20 = 7\\text{ m/s}$.\nBesar perpindahan $= \\sqrt{60^2 + 80^2} = 100\\text{ m}$, sehingga besar kecepatan rata-rata $= 100 : 20 = 5\\text{ m/s}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah mobil melaju dengan kecepatan $20\\text{ m/s}$, kemudian pengemudi menginjak rem sehingga mobil mengalami perlambatan konstan $4\\text{ m/s}^2$ hingga berhenti. Jarak yang ditempuh mobil sejak pengereman hingga berhenti adalah...',
      options: ['5 m', '40 m', '100 m', '50 m'],
      answer: 'D',
      hint: 'Gunakan $v_t^2 = v_0^2 + 2a s$ dengan $v_t = 0$ dan $a = -4\\text{ m/s}^2$.',
      solution: '$0 = 20^2 + 2(-4)s \\Rightarrow 8s = 400 \\Rightarrow s = 50\\text{ m}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah bola dilempar vertikal ke atas dengan kecepatan awal $20\\text{ m/s}$ ($g = 10\\text{ m/s}^2$). Tinggi maksimum yang dicapai bola diukur dari titik pelemparan adalah...',
      options: ['20 m', '40 m', '10 m', '2 m'],
      answer: 'A',
      hint: 'Di titik tertinggi $v_t = 0$. Gunakan $v_t^2 = v_0^2 - 2g h_{\\text{maks}}$.',
      solution: '$0 = 20^2 - 2(10)h_{\\text{maks}} \\Rightarrow 20 h_{\\text{maks}} = 400 \\Rightarrow h_{\\text{maks}} = 20\\text{ m}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Grafik kecepatan terhadap waktu ($v\\text{--}t$) sebuah benda ditunjukkan pada gambar. Pada $t = 0\\text{ s}$ kecepatannya $4\\text{ m/s}$, lalu dipercepat beraturan hingga mencapai $16\\text{ m/s}$ pada $t = 6\\text{ s}$. Perpindahan benda selama $6\\text{ s}$ tersebut adalah...',
      options: ['36 m', '96 m', '72 m', '60 m'],
      answer: 'D',
      hint: 'Perpindahan sama dengan luas daerah berbentuk trapesium di bawah grafik $v\\text{--}t$.',
      solution: 'Luas trapesium $= \\dfrac{4 + 16}{2} \\times 6 = 10 \\times 6 = 60\\text{ m}$. Jawaban: **D**.',
      visual: {
        type: 'motion-graph',
        props: {
          title: 'Grafik v–t Gerak Lurus',
          points: [[0, 4], [6, 16]],
          xTicks: [0, 6],
          yTicks: [4, 16],
          xLabel: 't (s)',
          yLabel: 'v (m/s)'
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Tiga buah gaya bertitik tangkap sama pada bidang $xy$: $F_1 = 20\\text{ N}$ membentuk sudut $30^\\circ$, $F_2 = 20\\text{ N}$ membentuk sudut $150^\\circ$, dan $F_3 = 12\\text{ N}$ membentuk sudut $270^\\circ$ terhadap sumbu-$x$ positif. Besar dan arah resultan ketiga gaya tersebut adalah...',
      options: [
        '$32\\text{ N}$ ke arah sumbu-$y$ positif',
        '$8\\text{ N}$ ke arah sumbu-$y$ negatif',
        '$8\\text{ N}$ ke arah sumbu-$y$ positif',
        '$16\\text{ N}$ ke arah sumbu-$x$ positif'
      ],
      answer: 'C',
      hint: 'Uraikan tiap gaya ke sumbu-$x$ dan sumbu-$y$, lalu jumlahkan masing-masing komponennya.',
      solution: '$F_{1x} = 20\\cos 30^\\circ = 10\\sqrt{3}\\text{ N}$, $F_{2x} = 20\\cos 150^\\circ = -10\\sqrt{3}\\text{ N}$, $F_{3x} = 0 \\Rightarrow R_x = 0$.\n$F_{1y} = 20\\sin 30^\\circ = 10\\text{ N}$, $F_{2y} = 20\\sin 150^\\circ = 10\\text{ N}$, $F_{3y} = -12\\text{ N} \\Rightarrow R_y = 10 + 10 - 12 = 8\\text{ N}$.\nJadi resultannya **$8\\text{ N}$ ke arah sumbu-$y$ positif**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah kereta bergerak lurus sesuai grafik $v\\text{--}t$ berikut. Kereta dipercepat dari keadaan diam ($t = 0\\text{ s}$) hingga mencapai kecepatan $12\\text{ m/s}$ pada $t = 4\\text{ s}$, melaju konstan $12\\text{ m/s}$ hingga $t = 10\\text{ s}$, lalu diperlambat hingga berhenti pada $t = 13\\text{ s}$. Jarak total yang ditempuh kereta selama $13\\text{ s}$ adalah...',
      options: ['156 m', '114 m', '132 m', '96 m'],
      answer: 'B',
      hint: 'Jumlahkan luas segitiga ($0\\text{--}4\\text{ s}$), persegi panjang ($4\\text{--}10\\text{ s}$), dan segitiga ($10\\text{--}13\\text{ s}$), atau gunakan rumus luas trapesium.',
      solution: 'Luas trapesium dengan sisi sejajar $6\\text{ s}$ (dari $4$ ke $10\\text{ s}$) dan $13\\text{ s}$, serta tinggi $12\\text{ m/s}$:\n$s = \\dfrac{13 + 6}{2} \\times 12 = 19 \\times 6 = 114\\text{ m}$. Jawaban: **B**.',
      visual: {
        type: 'motion-graph',
        props: {
          title: 'Grafik v–t Kereta',
          points: [[0, 0], [4, 12], [10, 12], [13, 0]],
          xTicks: [0, 4, 10, 13],
          yTicks: [12],
          xLabel: 't (s)',
          yLabel: 'v (m/s)'
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Mobil A melaju dengan kecepatan konstan $20\\text{ m/s}$ melewati mobil B yang sedang diam di tepi jalan. Tepat saat dilewati, mobil B langsung bergerak mengejar mobil A dengan percepatan tetap $4\\text{ m/s}^2$. Jarak yang ditempuh mobil B hingga tepat menyusul mobil A adalah...',
      options: ['200 m', '100 m', '400 m', '150 m'],
      answer: 'A',
      hint: 'Saat menyusul, jarak tempuh keduanya sama: $v_A t = \\tfrac{1}{2}a_B t^2$.',
      solution: 'Syarat menyusul: $s_A = s_B \\Rightarrow 20 t = \\tfrac{1}{2}(4)t^2 \\Rightarrow 2t^2 - 20t = 0 \\Rightarrow t = 10\\text{ s}$ (untuk $t > 0$).\nJarak saat menyusul $= v_A t = 20 \\times 10 = 200\\text{ m}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah bola dijatuhkan bebas dari atap gedung setinggi $80\\text{ m}$ di atas tanah ($g = 10\\text{ m/s}^2$). Kelajuan bola saat berada pada ketinggian $35\\text{ m}$ di atas permukaan tanah adalah...',
      options: ['40 m/s', '20 m/s', '35 m/s', '30 m/s'],
      answer: 'D',
      hint: 'Hitung jarak jatuh $\\Delta h = 80 - 35 = 45\\text{ m}$, lalu gunakan $v^2 = 2g\\,\\Delta h$.',
      solution: 'Bola telah turun sejauh $\\Delta h = 80 - 35 = 45\\text{ m}$.\n$v = \\sqrt{2 g\\,\\Delta h} = \\sqrt{2 \\times 10 \\times 45} = \\sqrt{900} = 30\\text{ m/s}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Bola P dijatuhkan tanpa kecepatan awal dari ketinggian $60\\text{ m}$. Pada saat yang bersamaan, bola Q dilempar vertikal ke atas dari permukaan tanah tepat di bawahnya dengan kecepatan awal $30\\text{ m/s}$ ($g = 10\\text{ m/s}^2$). Kedua bola akan berpapasan pada ketinggian...',
      options: ['20 m di atas tanah', '30 m di atas tanah', '40 m di atas tanah', '45 m di atas tanah'],
      answer: 'C',
      hint: 'Samakan posisi ketinggian kedua bola dari tanah: $60 - \\tfrac{1}{2}g t^2 = v_{0Q} t - \\tfrac{1}{2}g t^2$.',
      solution: 'Posisi dari tanah: $h_P = 60 - 5t^2$ dan $h_Q = 30t - 5t^2$.\nSaat berpapasan, $h_P = h_Q \\Rightarrow 60 - 5t^2 = 30t - 5t^2 \\Rightarrow 30t = 60 \\Rightarrow t = 2\\text{ s}$.\nKetinggian saat itu: $h = 60 - 5(2)^2 = 60 - 20 = 40\\text{ m}$ di atas tanah. Jawaban: **C**.'
    })
  ]
});
