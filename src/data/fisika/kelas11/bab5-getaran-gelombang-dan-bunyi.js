import { bab, soal } from '../author.js';

export default bab({
  grade: 11,
  number: 5,
  slug: 'getaran-gelombang-dan-bunyi',
  title: 'Getaran Harmonik, Gelombang, dan Bunyi',
  element: 'Pemahaman Fisika: gejala gelombang, getaran harmonik, dan bunyi',
  summary: {
    overview: 'Dari ayunan bandul jam kuno, senar gitar yang dipetik, hingga sirine ambulans yang nadanya berubah saat melintas cepat, semuanya mengikuti hukum getaran dan gelombang. Bab ini mempelajari gerak harmonik sederhana pada pegas dan bandul, persamaan gelombang berjalan dan gelombang stasioner, cepat rambat gelombang pada dawai, resonansi pada pipa organa, efek Doppler, serta intensitas dan taraf intensitas bunyi.',
    coreConcepts: [
      'Gerak Harmonik Sederhana pada Pegas dan Bandul: Gerak harmonik sederhana (GHS) terjadi akibat gaya pemulih yang sebanding dengan simpangan dan berlawanan arah ($F = -ky$). Periode sistem pegas adalah $T = 2\\pi\\sqrt{\\dfrac{m}{k}}$ dan periode bandul matematis sudut kecil adalah $T = 2\\pi\\sqrt{\\dfrac{L}{g}}$. Pegas yang dirangkai paralel memiliki $k_p = k_1 + k_2$, sedangkan seri memenuhi $\\dfrac{1}{k_s} = \\dfrac{1}{k_1} + \\dfrac{1}{k_2}$.',
      'Kinematika dan Energi GHS: Persamaan simpangan GHS $y = A\\sin(\\omega t + \\phi_0)$ menghasilkan kecepatan $v = \\omega A\\cos(\\omega t + \\phi_0) = \\omega\\sqrt{A^2 - y^2}$ dan percepatan $a = -\\omega^2 y$. Di titik setimbang ($y = 0$), kelajuan dan energi kinetik maksimum; di titik balik ($y = \\pm A$), kelajuan nol dan energi potensial maksimum. Energi mekanik totalnya kekal: $E_m = \\tfrac{1}{2}kA^2 = \\tfrac{1}{2}m\\omega^2 A^2$.',
      'Gelombang Berjalan: Gelombang mekanik yang merambat dengan amplitudo tetap dinyatakan oleh $y = A\\sin(\\omega t \\mp kx)$, dengan $\\omega = 2\\pi f$, bilangan gelombang $k = \\dfrac{2\\pi}{\\lambda}$, dan cepat rambat $v = \\lambda f = \\dfrac{\\omega}{k}$. Tanda negatif ($-kx$) menunjukkan gelombang merambat ke arah $+x$ (kanan), sedangkan tanda positif ($+kx$) merambat ke arah $-x$ (kiri). Beda fase dua titik berjarak $\\Delta x$ adalah $\\Delta\\varphi = \\dfrac{\\Delta x}{\\lambda}$.',
      'Gelombang Stasioner: Superposisi gelombang datang dan gelombang pantul menghasilkan gelombang berdiri. Pada ujung terikat, simpul terbentuk di ujung pantul ($x = 0$) dengan persamaan $y_s = 2A\\sin(kx)\\cos(\\omega t)$ dan letak simpul ke-$n$ di $x_n = (n - 1)\\dfrac{\\lambda}{2}$. Pada ujung bebas, perut terbentuk di ujung pantul dengan persamaan $y_s = 2A\\cos(kx)\\sin(\\omega t)$ dan letak perut ke-$n$ di $x_n = (n - 1)\\dfrac{\\lambda}{2}$. Cepat rambat pada dawai (hukum Melde) adalah $v = \\sqrt{\\dfrac{F}{\\mu}} = \\sqrt{\\dfrac{FL}{m}}$.',
      'Pipa Organa dan Efek Doppler: Frekuensi harmonik ke-$n$ ($n = 0, 1, 2, \\dots$) pada dawai dan pipa organa terbuka memenuhi $f_n = \\dfrac{(n+1)v}{2L}$, sedangkan pada pipa organa tertutup hanya memuat kelipatan ganjil $f_n = \\dfrac{(2n+1)v}{4L}$. Akibat gerak relatif sumber bunyi ($v_s$) dan pendengar ($v_p$), frekuensi yang terdengar berubah menurut efek Doppler: $f_p = \\dfrac{v \\pm v_p}{v \\mp v_s}f_s$.',
      'Intensitas dan Taraf Intensitas Bunyi: Intensitas bunyi adalah daya tiap satuan luas permukaan bola yang ditembus gelombang: $I = \\dfrac{P}{4\\pi r^2}$. Tingkat kebisingan dinyatakan dalam taraf intensitas (dB): $TI = 10\\log\\left(\\dfrac{I}{I_0}\\right)$ dengan $I_0 = 10^{-12}\\text{ W/m}^2$. Untuk $n$ sumber identik berlaku $TI_n = TI_1 + 10\\log n$, dan untuk perubahan jarak berlaku $TI_2 = TI_1 - 20\\log\\left(\\dfrac{r_2}{r_1}\\right)$.'
    ],
    keyFormulas: [
      { label: 'Periode pegas & bandul', formula: 'T_{\\text{pegas}} = 2\\pi\\sqrt{\\dfrac{m}{k}} \\qquad T_{\\text{bandul}} = 2\\pi\\sqrt{\\dfrac{L}{g}}' },
      { label: 'Kecepatan & energi GHS', formula: 'v = \\omega\\sqrt{A^2 - y^2} \\qquad E_m = \\tfrac{1}{2}kA^2' },
      { label: 'Gelombang berjalan', formula: 'y = A\\sin(\\omega t \\mp kx) \\qquad k = \\dfrac{2\\pi}{\\lambda} \\qquad v = \\dfrac{\\omega}{k}' },
      { label: 'Hukum Melde pada dawai', formula: 'v = \\sqrt{\\dfrac{F}{\\mu}} = \\sqrt{\\dfrac{F L}{m}}' },
      { label: 'Pipa organa terbuka & tertutup', formula: 'f_{n,\\text{terbuka}} = \\dfrac{(n+1)v}{2L} \\qquad f_{n,\\text{tertutup}} = \\dfrac{(2n+1)v}{4L}' },
      { label: 'Efek Doppler & taraf intensitas', formula: 'f_p = \\dfrac{v \\pm v_p}{v \\mp v_s}f_s \\qquad TI = 10\\log\\left(\\dfrac{I}{I_0}\\right)' }
    ],
    workedExamples: [
      {
        title: 'Analisis persamaan gelombang berjalan',
        problem: 'Sebuah gelombang tali memenuhi $y = 0{,}04\\sin(20\\pi t - 0{,}5\\pi x)$ dengan $x, y$ dalam meter dan $t$ dalam sekon. Tentukan amplitudo, frekuensi, panjang gelombang, cepat rambat, dan arah rambatnya.',
        solution: 'Dari persamaan: $A = 0{,}04\\text{ m}$, $\\omega = 20\\pi\\text{ rad/s}$, dan $k = 0{,}5\\pi\\text{ m}^{-1}$.\nFrekuensi: $f = \\dfrac{\\omega}{2\\pi} = \\dfrac{20\\pi}{2\\pi} = 10\\text{ Hz}$.\nPanjang gelombang: $\\lambda = \\dfrac{2\\pi}{k} = \\dfrac{2\\pi}{0{,}5\\pi} = 4\\text{ m}$.\nCepat rambat: $v = \\lambda f = 4 \\times 10 = 40\\text{ m/s}$ ke arah $+x$ (karena tanda di depan $kx$ negatif).'
      },
      {
        title: 'Menghitung frekuensi terukur pada efek Doppler',
        problem: 'Sebuah ambulans melaju $20\\text{ m/s}$ mendekati pengamat yang diam di tepi jalan sambil membunyikan sirine $640\\text{ Hz}$. Jika cepat rambat bunyi di udara $340\\text{ m/s}$, berapa frekuensi sirine yang didengar pengamat?',
        solution: 'Pengamat diam ($v_p = 0$) dan sumber mendekati pendengar (tanda minus pada penyebut).\n$f_p = \\dfrac{340 + 0}{340 - 20} \\times 640 = \\dfrac{340}{320} \\times 640 = 680\\text{ Hz}$.'
      },
      {
        title: 'Taraf intensitas terhadap jumlah sumber dan jarak',
        problem: 'Satu mesin pabrik menimbulkan taraf intensitas $60\\text{ dB}$ pada jarak $5\\text{ m}$. Berapa taraf intensitas jika $10$ mesin identik dinyalakan bersamaan dan diamati pada jarak $50\\text{ m}$?',
        solution: 'Penambahan karena $10$ sumber: $+10\\log 10 = +10\\text{ dB}$.\nPenurunan karena jarak $5\\text{ m} \\to 50\\text{ m}$: $-20\\log\\left(\\dfrac{50}{5}\\right) = -20\\text{ dB}$.\nTotal: $TI = 60 + 10 - 20 = 50\\text{ dB}$.'
      }
    ],
    misconceptions: [
      'Mengira tanda minus pada $y = A\\sin(\\omega t - kx)$ berarti gelombang merambat ke kiri. Justru tanda minus sebelum $kx$ menunjukkan gelombang merambat ke arah sumbu-$x$ positif (kanan).',
      'Menganggap benda yang bergetar harmonik berkecepatan maksimum saat berada di amplitudo ($y = A$). Di titik balik $y = \\pm A$ benda berhenti sesaat ($v = 0$) sedangkan percepatannya maksimum; kecepatan maksimum terjadi di titik setimbang ($y = 0$).',
      'Menjumlahkan taraf intensitas secara aritmetis biasa (mengira $10$ sumber menghasilkan $10 \\times TI_1$). Skala desibel bersifat logaritmik sehingga $10$ sumber identik hanya menambah $10\\text{ dB}$.'
    ],
    tutorTip: 'Untuk tanda pada Efek Doppler $f_p = \\dfrac{v \\pm v_p}{v \\mp v_s}f_s$, cukup ingat: jika saling mendekat frekuensi harus NAIK (pembilang $+$ atau penyebut $-$); jika saling menjauh frekuensi harus TURUN (pembilang $-$ atau penyebut $+$).'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sebuah beban bermassa $m$ digantungkan pada sebuah pegas dan bergetar harmonik sederhana dengan periode $2\\text{ s}$. Jika beban diganti dengan beban lain bermassa $4m$ pada pegas yang sama, periode getarannya menjadi...',
      options: ['1 s', '4 s', '8 s', '0,5 s'],
      answer: 'B',
      hint: 'Gunakan hubungan periode pegas $T = 2\\pi\\sqrt{m/k}$, sehingga $T \\propto \\sqrt{m}$.',
      solution: 'Karena $T \\propto \\sqrt{m}$, saat massa menjadi $4$ kali semula, periode menjadi $\\sqrt{4} = 2$ kali semula: $T\' = 2 \\times 2 = 4\\text{ s}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Perhatikan ayunan bandul harmonik sederhana pada gambar dengan posisi A dan C sebagai titik balik terjauh serta B sebagai titik setimbang. Pernyataan yang tepat mengenai keadaan bandul saat melewati titik B adalah...',
      options: [
        'energi potensial mencapai maksimum dan kelajuan bandul bernilai nol',
        'percepatan tangensial dan gaya pemulih keduanya mencapai maksimum',
        'kelajuan bandul bernilai nol karena gaya pemulih mencapai maksimum',
        'kelajuan serta energi kinetik bandul mencapai maksimum sedangkan gaya pemulih bernilai nol'
      ],
      answer: 'D',
      hint: 'Di titik setimbang simpangan $y = 0$ dan ketinggian bandul paling rendah.',
      solution: 'Di titik setimbang B, simpangan nol sehingga **gaya pemulih bernilai nol**, sementara energi potensial minimum berubah seluruhnya menjadi energi kinetik sehingga **kelajuan dan energi kinetiknya mencapai maksimum**. Jawaban: **D**.',
      visual: {
        type: 'pendulum',
        props: {
          title: 'Ayunan Bandul GHS',
          labels: ['A', 'B', 'C']
        }
      }
    }),
    soal({
      level: 'Dasar',
      q: 'Suatu gelombang berjalan merambat pada tali dengan persamaan simpangan $y = 0{,}05\\sin(10\\pi t - 2\\pi x)$, di mana $x$ dan $y$ dalam meter serta $t$ dalam sekon. Cepat rambat dan arah rambat gelombang tersebut adalah...',
      options: [
        '5 m/s ke arah sumbu-x positif',
        '5 m/s ke arah sumbu-x negatif',
        '20 m/s ke arah sumbu-x positif',
        '0,2 m/s ke arah sumbu-x negatif'
      ],
      answer: 'A',
      hint: 'Identifikasi $\\omega = 10\\pi$ dan $k = 2\\pi$, lalu hitung $v = \\omega / k$ dan perhatikan tanda di depan $kx$.',
      solution: '$v = \\dfrac{\\omega}{k} = \\dfrac{10\\pi}{2\\pi} = 5\\text{ m/s}$. Karena tanda di depan $kx$ negatif ($-2\\pi x$), gelombang merambat **ke arah sumbu-$x$ positif**. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Cepat rambat bunyi di dalam baja jauh lebih besar daripada di udara, dan bunyi di udara merambat lebih cepat pada siang hari yang panas dibandingkan malam hari yang dingin. Penjelasan fisika yang tepat atas kedua fakta tersebut adalah...',
      options: [
        'gelombang bunyi merupakan gelombang transversal yang bergantung pada intensitas cahaya',
        'udara memiliki kerapatan lebih tinggi daripada baja sehingga menghambat rambatan gelombang',
        'baja memiliki modulus elastisitas jauh lebih besar dan suhu tinggi memperbesar laju termal molekul udara',
        'frekuensi bunyi otomatis bertambah besar ketika memasuki zat padat atau bersuhu tinggi'
      ],
      answer: 'C',
      hint: 'Laju bunyi di zat padat bergantung pada modulus Young terhadap massa jenis $\\sqrt{E/\\rho}$, dan di gas sebanding dengan $\\sqrt{T}$.',
      solution: 'Zat padat seperti baja memiliki **modulus elastisitas sangat besar** sehingga interaksi antarpartikelnya cepat, sedangkan kenaikan suhu pada gas memperbesar energi kinetik molekul sehingga **laju bunyi di udara meningkat**. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Dua buah pipa organa memiliki panjang sama: pipa P terbuka di kedua ujungnya, sedangkan pipa Q tertutup di salah satu ujungnya. Pada suhu udara yang sama, perbandingan frekuensi nada dasar pipa P terhadap frekuensi nada dasar pipa Q adalah...',
      options: ['1 : 2', '2 : 1', '1 : 4', '4 : 1'],
      answer: 'B',
      hint: 'Gunakan $f_{0,\\text{terbuka}} = \\dfrac{v}{2L}$ dan $f_{0,\\text{tertutup}} = \\dfrac{v}{4L}$.',
      solution: '$\\dfrac{f_{0,P}}{f_{0,Q}} = \\dfrac{v/(2L)}{v/(4L)} = \\dfrac{4}{2} = 2 : 1$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah benda bergetar harmonik sederhana dengan persamaan simpangan $y = 10\\sin(4t)\\text{ cm}$ ($t$ dalam sekon). Ketika simpangan benda mencapai $6\\text{ cm}$, besar kelajuan benda tersebut adalah...',
      options: ['0,40 m/s', '0,24 m/s', '0,16 m/s', '0,32 m/s'],
      answer: 'D',
      hint: 'Gunakan $v = \\omega\\sqrt{A^2 - y^2}$ lalu konversikan cm/s ke m/s.',
      solution: 'Dari persamaan: $A = 10\\text{ cm}$ dan $\\omega = 4\\text{ rad/s}$.\n$v = 4\\sqrt{10^2 - 6^2} = 4 \\times 8 = 32\\text{ cm/s} = 0{,}32\\text{ m/s}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Perhatikan gambar gelombang transversal yang membentuk $2$ gelombang penuh sepanjang $12\\text{ m}$ dengan amplitudo $0{,}2\\text{ m}$. Jika frekuensi sumber getar adalah $5\\text{ Hz}$, cepat rambat dan bilangan gelombang ($k$) gelombang tersebut berturut-turut adalah...',
      options: [
        '30 m/s dan π/3 m⁻¹',
        '60 m/s dan π/6 m⁻¹',
        '30 m/s dan 2π/3 m⁻¹',
        '15 m/s dan π/3 m⁻¹'
      ],
      answer: 'A',
      hint: 'Tentukan panjang gelombang $\\lambda = 12\\text{ m} / 2$, lalu hitung $v = \\lambda f$ dan $k = 2\\pi / \\lambda$.',
      solution: '$\\lambda = \\dfrac{12}{2} = 6\\text{ m}$.\n$v = \\lambda f = 6 \\times 5 = 30\\text{ m/s}$ dan $k = \\dfrac{2\\pi}{6} = \\dfrac{\\pi}{3}\\text{ m}^{-1}$. Jawaban: **A**.',
      visual: {
        type: 'wave',
        props: {
          title: 'Gelombang Transversal',
          kind: 'transversal',
          cycles: 2,
          lengthLabel: '12 m',
          amplitudeLabel: '0,2 m'
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Seutas dawai sepanjang $1\\text{ m}$ dan bermassa $10\\text{ g}$ ditegangkan dengan gaya $64\\text{ N}$. Cepat rambat gelombang transversal pada dawai tersebut adalah...',
      options: ['40 m/s', '64 m/s', '80 m/s', '160 m/s'],
      answer: 'C',
      hint: 'Ubah massa dawai menjadi kilogram ($0{,}01\\text{ kg}$), lalu gunakan hukum Melde $v = \\sqrt{FL/m}$.',
      solution: '$\\mu = \\dfrac{m}{L} = \\dfrac{0{,}01}{1} = 0{,}01\\text{ kg/m}$.\n$v = \\sqrt{\\dfrac{F}{\\mu}} = \\sqrt{\\dfrac{64}{0{,}01}} = \\sqrt{6.400} = 80\\text{ m/s}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Gelombang berjalan memiliki frekuensi $25\\text{ Hz}$ dan cepat rambat $100\\text{ m/s}$. Beda fase ($\\Delta\\varphi = \\Delta x / \\lambda$) antara dua titik pada medium yang berjarak $1\\text{ m}$ satu sama lain adalah...',
      options: ['0,50', '0,25', '0,75', '1,00'],
      answer: 'B',
      hint: 'Cari panjang gelombang dulu dengan $\\lambda = v / f$.',
      solution: '$\\lambda = \\dfrac{100}{25} = 4\\text{ m}$.\nBeda fase $\\Delta\\varphi = \\dfrac{\\Delta x}{\\lambda} = \\dfrac{1}{4} = 0{,}25$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Taraf intensitas bunyi sebuah mesin jahit pada jarak tertentu adalah $50\\text{ dB}$. Jika $100$ mesin jahit identik dinyalakan bersamaan pada jarak yang sama, taraf intensitas total yang terdengar adalah...',
      options: ['500 dB', '60 dB', '150 dB', '70 dB'],
      answer: 'D',
      hint: 'Gunakan $TI_n = TI_1 + 10\\log n$ dengan $n = 100$.',
      solution: '$TI_{100} = 50 + 10\\log(100) = 50 + 10(2) = 70\\text{ dB}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu gelombang stasioner pada tali ujung terikat memenuhi persamaan $y = 0{,}06\\sin(0{,}5\\pi x)\\cos(40\\pi t)$, dengan $x$ dan $y$ dalam meter serta $t$ dalam sekon. Letak simpul ke-3 (diukur dari ujung pantul $x = 0$, dengan simpul ke-1 di $x = 0$) dan cepat rambat gelombang asalnya berturut-turut adalah...',
      options: [
        '2 m dan 80 m/s',
        '4 m dan 40 m/s',
        '4 m dan 80 m/s',
        '6 m dan 80 m/s'
      ],
      answer: 'C',
      hint: 'Dari $k = 0{,}5\\pi$ dan $\\omega = 40\\pi$, cari $\\lambda$ serta $v = \\omega/k$, lalu gunakan $x_n = (n-1)\\tfrac{\\lambda}{2}$.',
      solution: '$k = 0{,}5\\pi \\Rightarrow \\lambda = \\dfrac{2\\pi}{0{,}5\\pi} = 4\\text{ m}$, dan $v = \\dfrac{\\omega}{k} = \\dfrac{40\\pi}{0{,}5\\pi} = 80\\text{ m/s}$.\nSimpul ke-3 ($n = 3$): $x_3 = (3 - 1)\\dfrac{4}{2} = 4\\text{ m}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah mobil polisi melaju dengan kecepatan $20\\text{ m/s}$ sambil membunyikan sirine berfrekuensi $640\\text{ Hz}$ mengejar seorang pengendara motor yang melaju searah di depannya dengan kecepatan $10\\text{ m/s}$. Jika cepat rambat bunyi di udara $340\\text{ m/s}$, frekuensi sirine yang didengar pengendara motor adalah...',
      options: ['660 Hz', '620 Hz', '700 Hz', '600 Hz'],
      answer: 'A',
      hint: 'Sumber (polisi) mendekati pendengar ($-v_s$), sedangkan pendengar (motor) menjauhi sumber ($-v_p$).',
      solution: '$f_p = \\dfrac{v - v_p}{v - v_s}f_s = \\dfrac{340 - 10}{340 - 20} \\times 640 = \\dfrac{330}{320} \\times 640 = 660\\text{ Hz}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah pipa organa terbuka menghasilkan nada atas pertama dengan frekuensi yang sama dengan nada atas kedua sebuah pipa organa tertutup. Jika panjang pipa organa terbuka adalah $40\\text{ cm}$, panjang pipa organa tertutup tersebut adalah...',
      options: ['32 cm', '50 cm', '60 cm', '25 cm'],
      answer: 'B',
      hint: 'Nada atas pertama pipa terbuka memiliki $f = \\dfrac{2v}{2L_1}$, sedangkan nada atas kedua pipa tertutup memiliki $f = \\dfrac{5v}{4L_2}$.',
      solution: 'Samakan kedua frekuensi: $\\dfrac{2v}{2(40)} = \\dfrac{5v}{4L_2} \\Rightarrow \\dfrac{1}{40} = \\dfrac{5}{4L_2} \\Rightarrow 4L_2 = 200 \\Rightarrow L_2 = 50\\text{ cm}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah sirine pabrik menghasilkan taraf intensitas $80\\text{ dB}$ pada jarak $10\\text{ m}$ ($I_0 = 10^{-12}\\text{ W/m}^2$). Jika seorang pengamat menjauh hingga berada pada jarak $100\\text{ m}$ dari sirine tersebut, taraf intensitas bunyi yang didengar pengamat menjadi...',
      options: ['8 dB', '40 dB', '70 dB', '60 dB'],
      answer: 'D',
      hint: 'Gunakan $TI_2 = TI_1 - 20\\log(r_2 / r_1)$.',
      solution: '$TI_2 = 80 - 20\\log\\left(\\dfrac{100}{10}\\right) = 80 - 20(1) = 60\\text{ dB}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dua pegas identik masing-masing memiliki konstanta $k = 200\\text{ N/m}$ dirangkai secara paralel, lalu ujung bawahnya digantungi beban bermassa $1\\text{ kg}$. Beban ditarik sejauh $5\\text{ cm}$ dari posisi setimbangnya kemudian dilepaskan hingga bergetar harmonik. Energi kinetik beban saat melewati posisi setimbang adalah...',
      options: ['0,5 J', '0,25 J', '1,0 J', '2,0 J'],
      answer: 'A',
      hint: 'Di posisi setimbang, energi kinetik bernilai maksimum sama dengan energi mekanik total $\\tfrac{1}{2}k_{\\text{paralel}}A^2$.',
      solution: '$k_p = 200 + 200 = 400\\text{ N/m}$ dan $A = 0{,}05\\text{ m}$.\n$E_{k,\\text{maks}} = \\tfrac{1}{2} k_p A^2 = \\tfrac{1}{2}(400)(0{,}05)^2 = 200 \\times 0{,}0025 = 0{,}5\\text{ J}$. Jawaban: **A**.'
    })
  ]
});
