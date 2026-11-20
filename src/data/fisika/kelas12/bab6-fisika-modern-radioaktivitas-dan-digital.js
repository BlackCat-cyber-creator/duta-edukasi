import { bab, soal } from '../author.js';

export default bab({
  grade: 12,
  number: 6,
  slug: 'fisika-modern-radioaktivitas-dan-digital',
  title: 'Fisika Modern, Inti-Radioaktivitas, dan Teknologi Digital',
  element: 'Pemahaman Fisika: fisika modern dan teori dasar digital',
  summary: {
    overview: 'Ketika kecepatan mendekati laju cahaya atau ukuran materi menyusut ke skala atom dan inti, hukum mekanika klasik perlu diperluas oleh fisika modern yang sekaligus menjadi landasan teknologi semikonduktor, komputer, dan telekomunikasi digital masa kini. Bab ini membahas relativitas khusus dasar, dualisme gelombang-partikel (efek fotolistrik dan panjang gelombang de Broglie), struktur inti dan energi ikat, peluruhan radioaktif, reaksi fisi dan fusi, serta teori dasar teknologi digital meliputi sinyal analog-digital, gerbang logika, dan transmisi data.',
    coreConcepts: [
      'Relativitas Khusus Dasar: Einstein merumuskan bahwa hukum fisika sama di semua kerangka inersia dan laju cahaya di ruang hampa ($c = 3 \\times 10^8\\ \\text{m/s}$) konstan bagi semua pengamat. Akibatnya muncul faktor Lorentz $\\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}} \\ge 1$, yang menyebabkan dilatasi waktu ($\\Delta t = \\gamma\\Delta t_0$, waktu pengamat diam lebih lama daripada waktu proper $\\Delta t_0$), kontraksi panjang ($L = \\dfrac{L_0}{\\gamma}$, panjang benda bergerak memendek searah gerak), serta energi relativistik $E = \\gamma m_0 c^2$ dan energi kinetik $E_k = (\\gamma - 1) m_0 c^2$.',
      'Dualisme Gelombang-Partikel dan Efek Fotolistrik: Cahaya memiliki sifat partikel dalam paket energi foton $E = h f = \\dfrac{hc}{\\lambda}$ ($h = 6{,}6 \\times 10^{-34}\\ \\text{J}\\cdot\\text{s}$). Pada efek fotolistrik, elektron terlepas dari permukaan logam jika frekuensi cahaya melampaui frekuensi ambang ($f > f_0$, atau energi foton lebih besar dari fungsi kerja $W_0 = hf_0$) dengan energi kinetik maksimum $E_k = hf - W_0 = e V_0$. Intensitas cahaya hanya memengaruhi jumlah fotoelektron per sekon, bukan $E_k$. Sebaliknya, partikel bermassa $m$ berkelajuan $v$ bersifat seperti gelombang dengan panjang gelombang de Broglie $\\lambda = \\dfrac{h}{p} = \\dfrac{h}{mv}$.',
      'Struktur Inti Atom dan Energi Ikat: Inti atom $^A_Z\\text{X}$ tersusun atas $Z$ proton dan $N = A - Z$ neutron (nukleon). Massa inti sejatinya sedikit lebih kecil daripada jumlah massa proton dan neutron penyusunnya; selisih ini disebut defek massa $\\Delta m = Z m_p + (A - Z) m_n - m_{\\text{inti}}$. Menurut kesetaraan massa–energi, energi ikat inti bernilai $E_{\\text{ikat}} = \\Delta m \\cdot c^2 \\approx \\Delta m \\times 931\\ \\text{MeV}$ (dengan $\\Delta m$ dalam satuan massa atom, sma).',
      'Radioaktivitas, Peluruhan, dan Reaksi Inti: Inti tidak stabil meluruh secara spontan memancarkan sinar alfa ($^4_2\\text{He}$), beta ($^0_{-1}e$ atau $^0_{+1}e$), atau gamma ($\\gamma$). Banyaknya inti tersisa setelah waktu $t$ mengikuti hukum waktu paruh $N = N_0 \\left(\\dfrac{1}{2}\\right)^{t / T_{1/2}}$ (digunakan pada penanggalan karbon-14 dan terapi medis). Dalam reaksi inti berlaku kekekalan nomor atom ($Z$) dan nomor massa ($A$). Reaksi fisi adalah pembelahan inti berat (seperti $^{235}\\text{U}$ di PLTN), sedangkan fusi adalah penggabungan inti ringan (seperti hidrogen menjadi helium di inti Matahari).',
      'Sinyal Analog vs Digital dan Gerbang Logika: Sinyal analog memiliki nilai tegangan kontinu terhadap waktu dan rentan terganggu derau (noise), sedangkan sinyal digital hanya memiliki level diskret biner (logika $0$ = rendah dan $1$ = tinggi) sehingga tahan derau dan mudah diproses. Rangkaian digital tersusun dari gerbang logika: NOT ($Y = \\overline{A}$, pembalik), AND ($Y = A \\cdot B$, bernilai $1$ hanya jika semua masukan $1$), OR ($Y = A + B$, bernilai $1$ jika minimal satu masukan $1$), dan NAND ($Y = \\overline{A \\cdot B}$, kebalikan AND yang bersifat universal).',
      'Transmisi dan Penyimpanan Data Digital: Sinyal analog (misalnya suara) diubah menjadi data digital oleh ADC (Analog-to-Digital Converter) melalui pencuplikan (sampling) dan kuantisasi dalam bit ($1\\ \\text{byte} = 8\\ \\text{bit}$). Kapasitas citra/audio bergantung pada jumlah sampel/piksel dan kedalaman bit, sedangkan waktu kirim pada saluran berkecepatan (bit rate) tertentu adalah $t = \\dfrac{\\text{ukuran data (bit)}}{\\text{laju bit (bit/s)}}$. Teknologi digital mendukung koreksi galat, kompresi, serta enkripsi data pada komunikasi nirkabel dan serat optik.'
    ],
    keyFormulas: [
      { label: 'Relativitas khusus', formula: '\\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}} \\qquad \\Delta t = \\gamma\\Delta t_0 \\qquad L = \\dfrac{L_0}{\\gamma}' },
      { label: 'Energi relativistik & de Broglie', formula: 'E_k = (\\gamma - 1)m_0 c^2 \\qquad \\lambda = \\dfrac{h}{mv}' },
      { label: 'Efek fotolistrik', formula: 'E_k = h f - W_0 = e V_0 \\qquad W_0 = h f_0' },
      { label: 'Energi ikat & waktu paruh', formula: 'E_{\\text{ikat}} = \\Delta m \\times 931\\ \\text{MeV} \\qquad N = N_0 \\left(\\dfrac{1}{2}\\right)^{t / T_{1/2}}' },
      { label: 'Gerbang logika dasar', formula: '\\text{AND}: A\\cdot B \\qquad \\text{OR}: A + B \\qquad \\text{NOT}: \\overline{A} \\qquad \\text{NAND}: \\overline{A\\cdot B}' }
    ],
    workedExamples: [
      {
        title: 'Dilatasi waktu dan kontraksi panjang',
        problem: 'Sebuah pesawat bergerak dengan laju $v = 0{,}6c$ relatif terhadap Bumi. Jika panjang diam pesawat $100\\ \\text{m}$ dan pengamat di Bumi mencatat selang waktu $10\\ \\text{tahun}$, berapakah panjang pesawat menurut pengamat di Bumi dan waktu yang berlalu di jam pesawat?',
        solution: 'Faktor Lorentz: $\\gamma = \\dfrac{1}{\\sqrt{1 - 0{,}6^2}} = \\dfrac{1}{\\sqrt{0{,}64}} = \\dfrac{1}{0{,}8} = 1{,}25$.\nPanjang terukur di Bumi (kontraksi panjang): $L = \\dfrac{L_0}{\\gamma} = \\dfrac{100}{1{,}25} = \\mathbf{80\\ m}$.\nWaktu di pesawat ($\\Delta t_0$): $\\Delta t_0 = \\dfrac{\\Delta t}{\\gamma} = \\dfrac{10}{1{,}25} = \\mathbf{8\\ tahun}$.'
      },
      {
        title: 'Efek fotolistrik dan energi ambang',
        problem: 'Permukaan logam natrium memiliki fungsi kerja $W_0 = 2{,}3\\ \\text{eV}$ disinari foton berenergi $4{,}1\\ \\text{eV}$. Tentukan energi kinetik maksimum fotoelektron dalam elektronvolt dan joule ($1\\ \\text{eV} = 1{,}6 \\times 10^{-19}\\ \\text{J}$).',
        solution: '$E_k = E_{\\text{foton}} - W_0 = 4{,}1 - 2{,}3 = \\mathbf{1{,}8\\ eV}$.\nDalam joule: $E_k = 1{,}8 \\times 1{,}6 \\times 10^{-19} = \\mathbf{2{,}88 \\times 10^{-19}\\ J}$.'
      },
      {
        title: 'Waktu paruh peluruhan radioaktif',
        problem: 'Suatu unsur radioaktif mempunyai waktu paruh $2\\ \\text{jam}$. Jika massa awalnya $80\\ \\text{gram}$, berapa massa yang sudah meluruh setelah $6\\ \\text{jam}$?',
        solution: 'Jumlah waktu paruh: $n = \\dfrac{t}{T_{1/2}} = \\dfrac{6}{2} = 3$.\nMassa tersisa: $N = 80 \\times \\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{80}{8} = 10\\ \\text{gram}$.\nMassa yang sudah meluruh: $80 - 10 = \\mathbf{70\\ gram}$.'
      },
      {
        title: 'Kombinasi gerbang logika dan gerbang universal NAND',
        problem: 'Dua gerbang NAND dirangkai seri: masukan $A$ dan $B$ masuk ke $\\text{NAND}_1$ menghasilkan $X$, lalu $X$ dihubungkan ke kedua input $\\text{NAND}_2$ menghasilkan $Y$. Jika $A = 1$ dan $B = 0$, tentukan $Y$ dan gerbang tunggal apa yang setara dengan rangkaian ini.',
        solution: 'Untuk $A = 1, B = 0$: $X = \\overline{1 \\cdot 0} = \\overline{0} = 1$, lalu $Y = \\overline{1 \\cdot 1} = \\mathbf{0}$.\nSecara umum: $Y = \\overline{X \\cdot X} = \\overline{X} = \\overline{\\overline{A \\cdot B}} = A \\cdot B$, sehingga rangkaian dua NAND ini setara dengan gerbang **AND**.'
      }
    ],
    misconceptions: [
      'Mengira menaikkan intensitas cahaya pada efek fotolistrik membuat elektron meluncur lebih cepat (energi kinetik naik). Intensitas hanya menambah jumlah foton per sekon sehingga arus elektron bertambah; energi tiap elektron hanya bergantung pada frekuensi cahaya ($E_k = hf - W_0$).',
      'Menganggap setelah dua kali waktu paruh ($2 T_{1/2}$) seluruh zat radioaktif habis meluruh. Peluruhan bersifat eksponensial: setelah $1 T_{1/2}$ tersisa $50\\%$, setelah $2 T_{1/2}$ tersisa $25\\%$, dan seterusnya.',
      'Menyamakan ukuran bit (b) dan byte (B) saat menghitung waktu transmisi digital. Kecepatan internet umum dinyatakan dalam megabit per sekon (Mbps), sedangkan ukuran file sering dalam megabyte (MB), dengan $1\\ \\text{byte} = 8\\ \\text{bit}$.'
    ],
    tutorTip: 'Untuk soal relativitas dengan laju $0{,}6c$ dan $0{,}8c$, hafalkan pasangan tripel Pythagoras $3-4-5$: jika $v = 0{,}6c$ maka faktor $\\sqrt{1 - v^2/c^2} = 0{,}8$ ($\\gamma = 5/4$); jika $v = 0{,}8c$ maka faktor $\\sqrt{1 - v^2/c^2} = 0{,}6$ ($\\gamma = 5/3$).'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Menurut teori relativitas khusus Einstein, sebuah pesawat ruang angkasa yang memiliki panjang diam $L_0$ bergerak lurus terhadap pengamat di Bumi dengan kelajuan $v = 0{,}6c$. Panjang pesawat yang terukur oleh pengamat di Bumi adalah...',
      options: ['menjadi $0{,}8 L_0$ (lebih pendek)', 'menjadi $1{,}25 L_0$ (lebih panjang)', 'tetap sama dengan $L_0$', 'menjadi $0{,}6 L_0$'],
      answer: 'A',
      hint: 'Gunakan rumus kontraksi panjang $L = L_0 \\sqrt{1 - v^2/c^2}$.',
      solution: '$L = L_0\\sqrt{1 - 0{,}6^2} = L_0\\sqrt{0{,}64} = 0{,}8 L_0$ (teramati lebih pendek searah gerak). Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada peristiwa efek fotolistrik, jika intensitas cahaya yang menyinari pelat logam diperbesar dengan mempertahankan frekuensinya di atas frekuensi ambang $f_0$, hal yang terjadi adalah...',
      options: [
        'energi kinetik maksimum fotoelektron bertambah besar',
        'jumlah fotoelektron yang terlepas tiap sekon (arus fotolistrik) bertambah besar',
        'fungsi kerja logam menurun',
        'frekuensi ambang logam bertambah besar'
      ],
      answer: 'B',
      hint: 'Intensitas cahaya sebanding dengan banyaknya foton per detik, bukan energi tiap foton.',
      solution: 'Memperbesar intensitas cahaya pada frekuensi tetap menambah jumlah foton yang menumbuk logam tiap sekon, sehingga **jumlah fotoelektron yang terlepas tiap sekon (arus fotolistrik) bertambah besar**, sementara energi kinetik maksimum tetap. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Suatu atom netral memiliki inti kobalt-60 yang ditulis dengan lambang $^{60}_{27}\\text{Co}$. Jumlah proton, neutron, dan elektron dalam atom netral tersebut berturut-turut adalah...',
      options: ['$27$, $60$, dan $27$', '$33$, $27$, dan $33$', '$60$, $27$, dan $33$', '$27$, $33$, dan $27$'],
      answer: 'D',
      hint: 'Nomor atom $Z$ menunjukkan jumlah proton (sama dengan elektron pada atom netral), dan jumlah neutron $= A - Z$.',
      solution: 'Dari $^{60}_{27}\\text{Co}$, jumlah proton $Z = 27$, jumlah neutron $N = A - Z = 60 - 27 = 33$, dan pada atom netral jumlah elektron sama dengan proton yaitu $27$. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Matahari memancarkan energi sangat besar secara terus-menerus melalui reaksi nuklir di intinya yang menggabungkan inti-inti hidrogen menjadi inti helium. Proses tersebut dinamakan...',
      options: ['reaksi fisi nuklir', 'peluruhan alfa', 'reaksi fusi nuklir', 'efek fotolistrik'],
      answer: 'C',
      hint: 'Penggabungan dua atau lebih inti atom ringan menjadi inti yang lebih berat.',
      solution: 'Penggabungan inti-inti ringan (hidrogen) menjadi inti yang lebih berat (helium) disertai pelepasan energi disebut **reaksi fusi nuklir**. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Keunggulan utama sinyal digital dibandingkan sinyal analog dalam sistem komunikasi dan penyimpanan data adalah...',
      options: [
        'lebih tahan terhadap derau (noise) serta mudah disimpan dan digandakan tanpa menurunkan kualitas data',
        'memiliki nilai tegangan yang berubah secara kontinu tak terbatas',
        'tidak memerlukan pengubah sinyal (ADC) saat merekam suara dari mikrofon',
        'hanya dapat ditransmisikan melalui kabel tembaga dan bukan serat optik'
      ],
      answer: 'A',
      hint: 'Sinyal digital hanya mengenali dua keadaan tegas (0 dan 1).',
      solution: 'Karena menggunakan level diskret biner ($0$ dan $1$), sinyal digital jauh **lebih tahan terhadap derau (noise) serta mudah disimpan, diproses, dan digandakan tanpa penurunan mutu**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Seorang astronaut melakukan perjalanan luar angkasa dengan pesawat berkecepatan $v = 0{,}8c$ relatif terhadap Bumi. Menurut jam di dalam pesawat, perjalanan berlangsung selama $6\\ \\text{tahun}$. Lama perjalanan tersebut menurut pengamat yang diam di Bumi adalah...',
      options: ['$3{,}6\\ \\text{tahun}$', '$6\\ \\text{tahun}$', '$10\\ \\text{tahun}$', '$7{,}5\\ \\text{tahun}$'],
      answer: 'C',
      hint: 'Gunakan rumus dilatasi waktu $\\Delta t = \\Delta t_0 / \\sqrt{1 - v^2/c^2}$ dengan $\\Delta t_0 = 6\\ \\text{tahun}$.',
      solution: '$\\gamma = \\dfrac{1}{\\sqrt{1 - 0{,}8^2}} = \\dfrac{1}{0{,}6} = \\dfrac{5}{3}$.\n$\\Delta t = \\gamma \\Delta t_0 = \\dfrac{5}{3} \\times 6 = 10\\ \\text{tahun}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Seberkas cahaya dengan energi foton $3{,}6\\ \\text{eV}$ jatuh pada permukaan logam yang memiliki fungsi kerja $W_0 = 2{,}1\\ \\text{eV}$. Jika $1\\ \\text{eV} = 1{,}6 \\times 10^{-19}\\ \\text{J}$, energi kinetik maksimum fotoelektron yang terpancar adalah...',
      options: [
        '$2{,}4 \\times 10^{-19}\\ \\text{J}$',
        '$5{,}76 \\times 10^{-19}\\ \\text{J}$',
        '$3{,}36 \\times 10^{-19}\\ \\text{J}$',
        '$9{,}12 \\times 10^{-19}\\ \\text{J}$'
      ],
      answer: 'A',
      hint: 'Hitung $E_k = hf - W_0$ dalam eV lalu kalikan dengan $1{,}6 \\times 10^{-19}\\ \\text{J/eV}$.',
      solution: '$E_k = 3{,}6 - 2{,}1 = 1{,}5\\ \\text{eV} = 1{,}5 \\times 1{,}6 \\times 10^{-19}\\ \\text{J} = 2{,}4 \\times 10^{-19}\\ \\text{J}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah partikel bermassa $2 \\times 10^{-30}\\ \\text{kg}$ bergerak dengan kelajuan $3{,}3 \\times 10^5\\ \\text{m/s}$. Jika konstanta Planck $h = 6{,}6 \\times 10^{-34}\\ \\text{J}\\cdot\\text{s}$, panjang gelombang de Broglie partikel tersebut adalah...',
      options: ['$10\\ \\text{nm}$', '$0{,}1\\ \\text{nm}$', '$2\\ \\text{nm}$', '$1\\ \\text{nm}$'],
      answer: 'D',
      hint: 'Gunakan $\\lambda = h / (m v)$ lalu konversikan hasilnya dari meter ke nanometer ($10^{-9}\\ \\text{m}$ per nanometer).',
      solution: '$\\lambda = \\dfrac{6{,}6 \\times 10^{-34}}{2 \\times 10^{-30} \\times 3{,}3 \\times 10^5} = \\dfrac{6{,}6 \\times 10^{-34}}{6{,}6 \\times 10^{-25}} = 10^{-9}\\ \\text{m} = 1\\ \\text{nm}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Suatu zat radioaktif memiliki massa mula-mula $160\\ \\text{gram}$ dan waktu paruh $4\\ \\text{hari}$. Massa zat radioaktif yang masih tersisa setelah meluruh selama $16\\ \\text{hari}$ adalah...',
      options: ['$20\\ \\text{gram}$', '$10\\ \\text{gram}$', '$5\\ \\text{gram}$', '$40\\ \\text{gram}$'],
      answer: 'B',
      hint: 'Gunakan $N = N_0 (1/2)^{t / T_{1/2}}$.',
      solution: 'Banyaknya waktu paruh $n = \\dfrac{16}{4} = 4$.\n$N = 160 \\times \\left(\\dfrac{1}{2}\\right)^4 = \\dfrac{160}{16} = 10\\ \\text{gram}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dua masukan biner $A = 1$ dan $B = 0$ dimasukkan ke gerbang logika **AND** sehingga menghasilkan keluaran $P$. Selanjutnya, $P$ dan $A$ dimasukkan ke gerbang logika **NAND** untuk menghasilkan keluaran akhir $Q$. Nilai pasangan $(P, Q)$ berturut-turut adalah...',
      options: ['$(0, 0)$', '$(1, 0)$', '$(0, 1)$', '$(1, 1)$'],
      answer: 'C',
      hint: 'Gerbang AND bernilai $1$ hanya jika kedua input $1$; gerbang NAND membalik hasil AND.',
      solution: 'Keluaran gerbang AND: $P = A \\cdot B = 1 \\cdot 0 = 0$.\nKeluaran gerbang NAND: $Q = \\overline{P \\cdot A} = \\overline{0 \\cdot 1} = \\overline{0} = 1$.\nJadi $(P, Q) = (0, 1)$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Diketahui massa proton $1{,}0073\\ \\text{sma}$, massa neutron $1{,}0087\\ \\text{sma}$, dan massa inti helium $^4_2\\text{He}$ sebesar $4{,}0020\\ \\text{sma}$. Jika $1\\ \\text{sma}$ setara dengan energi $931\\ \\text{MeV}$, besar energi ikat inti $^4_2\\text{He}$ adalah...',
      options: ['$27{,}93\\ \\text{MeV}$', '$28{,}20\\ \\text{MeV}$', '$13{,}97\\ \\text{MeV}$', '$30{,}00\\ \\text{MeV}$'],
      answer: 'A',
      hint: 'Hitung defek massa $\\Delta m = 2m_p + 2m_n - m_{\\text{He}}$, lalu kalikan dengan $931\\ \\text{MeV}$.',
      solution: 'Massa penyusun: $2(1{,}0073) + 2(1{,}0087) = 2{,}0146 + 2{,}0174 = 4{,}0320\\ \\text{sma}$.\nDefek massa: $\\Delta m = 4{,}0320 - 4{,}0020 = 0{,}0300\\ \\text{sma}$.\nEnergi ikat: $E_{\\text{ikat}} = 0{,}03 \\times 931 = 27{,}93\\ \\text{MeV}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pada reaksi fisi inti uranium-235 berikut: ${}^{235}_{92}\\text{U} + {}^1_0\\text{n} \\to {}^{141}_{56}\\text{Ba} + {}^A_Z\\text{Kr} + 3\\,{}^1_0\\text{n}$, nilai nomor massa $A$ dan nomor atom $Z$ inti kripton berturut-turut adalah...',
      options: [
        '$A = 95$ dan $Z = 36$',
        '$A = 92$ dan $Z = 38$',
        '$A = 94$ dan $Z = 36$',
        '$A = 92$ dan $Z = 36$'
      ],
      answer: 'D',
      hint: 'Samakan jumlah nomor massa di ruas kiri dan kanan, serta jumlah nomor atom di ruas kiri dan kanan.',
      solution: 'Kekekalan nomor massa: $235 + 1 = 141 + A + 3(1) \\implies 236 = 144 + A \\implies A = 92$.\nKekekalan nomor atom: $92 + 0 = 56 + Z + 3(0) \\implies Z = 92 - 56 = 36$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu logam memiliki frekuensi ambang $f_0 = 6 \\times 10^{14}\\ \\text{Hz}$ disinari cahaya monokromatik berpanjang gelombang $\\lambda = 300\\ \\text{nm}$ ($c = 3 \\times 10^8\\ \\text{m/s}$, $h = 6{,}6 \\times 10^{-34}\\ \\text{J}\\cdot\\text{s}$, $e = 1{,}6 \\times 10^{-19}\\ \\text{C}$). Besar potensial henti (stopping potential) yang diperlukan untuk menghentikan seluruh fotoelektron adalah...',
      options: ['$4{,}125\\ \\text{V}$', '$1{,}65\\ \\text{V}$', '$2{,}475\\ \\text{V}$', '$0{,}825\\ \\text{V}$'],
      answer: 'B',
      hint: 'Hitung frekuensi cahaya $f = c/\\lambda$, energi kinetik $E_k = h(f - f_0)$, lalu $V_0 = E_k / e$.',
      solution: 'Frekuensi cahaya datang: $f = \\dfrac{3 \\times 10^8}{300 \\times 10^{-9}} = 10 \\times 10^{14}\\ \\text{Hz}$.\nEnergi kinetik maksimum: $E_k = h(f - f_0) = 6{,}6 \\times 10^{-34} \\times (10 - 6) \\times 10^{14} = 2{,}64 \\times 10^{-19}\\ \\text{J}$.\nPotensial henti: $V_0 = \\dfrac{E_k}{e} = \\dfrac{2{,}64 \\times 10^{-19}}{1{,}6 \\times 10^{-19}} = 1{,}65\\ \\text{V}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah citra digital berukuran $1.000 \\times 800$ piksel disimpan tanpa kompresi dengan kedalaman warna $24\\ \\text{bit}$ per piksel. Jika citra tersebut ditransmisikan melalui jaringan berkecepatan efektif $16\\ \\text{Mbps}$ ($1\\ \\text{Mbps} = 10^6\\ \\text{bit/s}$), waktu yang diperlukan untuk mengirim seluruh citra adalah...',
      options: ['$0{,}15\\ \\text{s}$', '$9{,}6\\ \\text{s}$', '$1{,}2\\ \\text{s}$', '$2{,}4\\ \\text{s}$'],
      answer: 'C',
      hint: 'Hitung total ukuran data dalam bit (jumlah piksel $\\times$ bit per piksel), lalu bagi dengan laju bit transmisi.',
      solution: 'Total piksel $= 1.000 \\times 800 = 8 \\times 10^5$ piksel.\nUkuran data $= 8 \\times 10^5 \\times 24\\ \\text{bit} = 19{,}2 \\times 10^6\\ \\text{bit}$.\nWaktu kirim: $t = \\dfrac{19{,}2 \\times 10^6}{16 \\times 10^6} = 1{,}2\\ \\text{s}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah partikel bermassa diam $m_0$ memiliki energi diam $E_0 = m_0 c^2$. Jika partikel dipercepat hingga kelajuannya mencapai $0{,}6c$, besar energi kinetik relativistik partikel tersebut adalah...',
      options: ['$0{,}25 E_0$', '$1{,}25 E_0$', '$0{,}18 E_0$', '$0{,}80 E_0$'],
      answer: 'A',
      hint: 'Gunakan $E_k = (\\gamma - 1)E_0$, bukan rumus klasik $\\frac{1}{2}m_0 v^2$.',
      solution: 'Faktor Lorentz: $\\gamma = \\dfrac{1}{\\sqrt{1 - 0{,}6^2}} = \\dfrac{1}{0{,}8} = 1{,}25$.\nEnergi kinetik relativistik: $E_k = (\\gamma - 1)E_0 = (1{,}25 - 1)E_0 = 0{,}25 E_0$. Jawaban: **A**.'
    })
  ]
});
