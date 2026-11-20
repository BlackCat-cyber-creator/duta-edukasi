import { bab, soal } from '../author.js';

export default bab({
  grade: 12,
  number: 2,
  slug: 'listrik-arus-searah',
  title: 'Rangkaian Listrik Arus Searah dan Hukum Kirchhoff',
  element: 'Pemahaman Fisika: kelistrikan dan kemagnetan (rangkaian arus searah)',
  summary: {
    overview: 'Jaringan listrik pada kendaraan bermotor, baterai ponsel, dan rangkaian pengukur presisi di laboratorium menggunakan arus searah (DC). Bab ini memperdalam analisis kuat arus listrik, hambatan jenis penghantar, hukum Ohm, GGL dan hambatan dalam sumber tegangan beserta tegangan jepit, susunan seri-paralel dan jembatan Wheatstone seimbang, hukum I dan II Kirchhoff untuk rangkaian bercabang, serta energi dan daya listrik.',
    coreConcepts: [
      'Arus Listrik dan Hambatan Jenis Kawat: Kuat arus listrik adalah banyaknya muatan yang mengalir per satuan waktu: $I = \\dfrac{Q}{t} = \\dfrac{n e}{t}$. Hambatan suatu kawat konduktor bergantung pada hambatan jenis bahan $\\rho$, panjang kawat $\\ell$, dan luas penampang $A$: $R = \\rho\\dfrac{\\ell}{A}$. Jika kawat ditarik memanjang tanpa perubahan volume ($A\\ell$ tetap), hambatan berubah sebanding dengan kuadrat panjangnya.',
      'Hukum Ohm, GGL, dan Tegangan Jepit: Hukum Ohm menyatakan $V = I R$ untuk komponen ohmik bersuhu tetap. Baterai nyata memiliki gaya gerak listrik (GGL) $\\varepsilon$ dan hambatan dalam $r$. Saat baterai mengalirkan arus $I$ ke hambatan luar $R$, kuat arus totalnya $I = \\dfrac{\\varepsilon}{R + r}$, sehingga tegangan terukur di kutub baterai (tegangan jepit) adalah $V = I R = \\varepsilon - I r$.',
      'Rangkaian Seri, Paralel, dan Jembatan Wheatstone: Hambatan seri memiliki arus sama dan $R_s = R_1 + R_2 + \\dots$, sedangkan hambatan paralel memiliki tegangan sama dan $\\dfrac{1}{R_p} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dots$ Pada rangkaian jembatan Wheatstone yang menghubungkan cabang atas ($R_1, R_2$) dan cabang bawah ($R_3, R_4$) dengan resistor tengah $R_5$, jembatan dikatakan seimbang bila $R_1 R_4 = R_2 R_3$; dalam keadaan ini tidak ada arus mengalir melalui $R_5$ sehingga $R_5$ dapat diabaikan.',
      'Hukum I dan Hukum II Kirchhoff: Hukum I Kirchhoff (kekekalan muatan) menyatakan jumlah arus masuk sama dengan jumlah arus keluar di titik cabang: $\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$ (atau $\\Sigma I = 0$). Hukum II Kirchhoff (kekekalan energi) menyatakan jumlah aljabar perubahan potensial mengelilingi lintasan tertutup (loop) sama dengan nol: $\\Sigma \\varepsilon + \\Sigma I R = 0$.',
      'Daya dan Energi Listrik Arus Searah: Daya listrik adalah laju perubahan energi listrik menjadi kalor, cahaya, atau kerja mekanik: $P = V I = I^2 R = \\dfrac{V^2}{R}$, dengan energi $W = P t = V I t$. Pada alat listrik bertuliskan spesifikasi $P_0 / V_0$, hambatan elemen tetap $R = \\dfrac{V_0^2}{P_0}$, sehingga jika dipasang pada tegangan lain $V$, dayanya menjadi $P = \\left(\\dfrac{V}{V_0}\\right)^2 P_0$.'
    ],
    keyFormulas: [
      { label: 'Kuat arus & hambatan kawat', formula: 'I = \\dfrac{Q}{t} \\qquad R = \\rho\\dfrac{\\ell}{A}' },
      { label: 'Hukum Ohm & tegangan jepit', formula: 'I = \\dfrac{\\varepsilon}{R + r} \\qquad V = \\varepsilon - I r' },
      { label: 'Jembatan Wheatstone seimbang', formula: 'R_1 R_4 = R_2 R_3 \\implies I_{\\text{tengah}} = 0' },
      { label: 'Hukum I & II Kirchhoff', formula: '\\Sigma I = 0 \\qquad \\Sigma \\varepsilon + \\Sigma I R = 0' },
      { label: 'Daya & energi listrik', formula: 'P = V I = I^2 R = \\dfrac{V^2}{R} \\qquad W = P t' }
    ],
    workedExamples: [
      {
        title: 'Tegangan jepit dan hambatan dalam baterai',
        problem: 'Sebuah baterai ber-GGL $12\\ \\text{V}$ dan hambatan dalam $0{,}5\\ \\Omega$ dihubungkan ke resistor luar $5{,}5\\ \\Omega$. Hitung kuat arus rangkaian dan tegangan jepit baterai.',
        solution: 'Kuat arus total: $I = \\dfrac{\\varepsilon}{R + r} = \\dfrac{12}{5{,}5 + 0{,}5} = \\dfrac{12}{6} = 2\\ \\text{A}$.\nTegangan jepit: $V = \\varepsilon - I r = 12 - 2(0{,}5) = \\mathbf{11\\ V}$ (sama dengan $I R = 2 \\times 5{,}5 = 11\\ \\text{V}$).'
      },
      {
        title: 'Jembatan Wheatstone seimbang',
        problem: 'Pada rangkaian jembatan Wheatstone, cabang atas terdiri dari $R_1 = 2\\ \\Omega$ dan $R_2 = 4\\ \\Omega$ seri, cabang bawah $R_3 = 5\\ \\Omega$ dan $R_4 = 10\\ \\Omega$ seri, sedangkan antara titik tengah atas dan bawah terpasang $R_5 = 8\\ \\Omega$. Tentukan hambatan pengganti rangkaian tersebut.',
        solution: 'Periksa syarat seimbang: $R_1 R_4 = 2 \\times 10 = 20$ dan $R_2 R_3 = 4 \\times 5 = 20$. Karena $R_1 R_4 = R_2 R_3$, jembatan **seimbang** dan $I_5 = 0$ (resistor $8\\ \\Omega$ tidak dilalui arus).\nCabang atas: $R_{\\text{atas}} = 2 + 4 = 6\\ \\Omega$.\nCabang bawah: $R_{\\text{bawah}} = 5 + 10 = 15\\ \\Omega$.\nParalel keduanya: $\\dfrac{1}{R_{\\text{tot}}} = \\dfrac{1}{6} + \\dfrac{1}{15} = \\dfrac{5 + 2}{30} = \\dfrac{7}{30} \\implies R_{\\text{tot}} = \\dfrac{30}{7}\\ \\Omega \\approx \\mathbf{4{,}29\\ \\Omega}$.'
      },
      {
        title: 'Hukum II Kirchhoff pada rangkaian dua loop',
        problem: 'Suatu rangkaian memiliki cabang kiri berisi $\\varepsilon_1 = 12\\ \\text{V}$ seri dengan $R_1 = 2\\ \\Omega$, cabang kanan berisi $\\varepsilon_2 = 6\\ \\text{V}$ seri dengan $R_2 = 1\\ \\Omega$ (keduanya berkutub positif di atas), dan cabang tengah berisi $R_3 = 2\\ \\Omega$. Tentukan kuat arus melalui $R_3$.',
        solution: 'Misalkan $I_1$ naik dari cabang kiri, $I_2$ naik dari cabang kanan, dan $I_3 = I_1 + I_2$ turun melalui $R_3$.\nLoop kiri: $12 - 2I_1 - 2I_3 = 0 \\implies I_1 + I_3 = 6$.\nLoop kanan: $6 - 1I_2 - 2I_3 = 0 \\implies I_2 = 6 - 2I_3$.\nSubstitusi ke $I_3 = I_1 + I_2 = (6 - I_3) + (6 - 2I_3) = 12 - 3I_3 \\implies 4I_3 = 12 \\implies I_3 = \\mathbf{3\\ A}$.'
      }
    ],
    misconceptions: [
      'Menganggap tegangan jepit baterai selalu sama dengan GGL-nya ($12\\ \\text{V}$). Ketika ada arus mengalir dan $r > 0$, sebagian tegangan hilang di dalam baterai sebesar $Ir$ sehingga tegangan jepit $V = \\varepsilon - Ir < \\varepsilon$.',
      'Mengira jika lampu $60\\ \\text{W} / 220\\ \\text{V}$ dipasang pada $110\\ \\text{V}$ maka dayanya menjadi setengahnya ($30\\ \\text{W}$). Karena $P = V^2/R$, tegangan setengahnya menghasilkan daya seperempatnya ($15\\ \\text{W}$).',
      'Melupakan aturan tanda saat menelusuri loop hukum II Kirchhoff. Jika arah penelusuran searah arus, suku $IR$ bertanda negatif (penurunan potensial), dan jika melewati GGL dari kutub negatif ke positif maka $\\varepsilon$ bertanda positif.'
    ],
    tutorTip: 'Untuk soal dua loop Hukum II Kirchhoff yang kedua kutub positif baterainya menghadap titik cabang atas A (titik B di bawah sebagai nol), kamu boleh memakai cara cepat tegangan titik simpul: $\\dfrac{\\varepsilon_1 - V_A}{R_1} + \\dfrac{\\varepsilon_2 - V_A}{R_2} = \\dfrac{V_A}{R_3}$, lalu cari tiap arus langsung dari $V_A$.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sebuah kawat tembaga mengalirkan arus listrik konstan sebesar $2{,}4\\ \\text{A}$ selama $5\\ \\text{menit}$. Jumlah muatan listrik yang melewati penampang kawat tersebut adalah...',
      options: ['$12\\ \\text{C}$', '$120\\ \\text{C}$', '$720\\ \\text{C}$', '$144\\ \\text{C}$'],
      answer: 'C',
      hint: 'Ubah waktu dari menit ke sekon, lalu hitung $Q = I \\times t$.',
      solution: '$t = 5 \\times 60 = 300\\ \\text{s}$.\n$Q = I \\times t = 2{,}4 \\times 300 = 720\\ \\text{C}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah kawat penghantar dengan panjang $\\ell$ dan luas penampang $A$ memiliki hambatan $8\\ \\Omega$. Kawat lain dari bahan yang sama memiliki panjang $2\\ell$ dan luas penampang $\\dfrac{1}{2}A$. Hambatan kawat kedua tersebut adalah...',
      options: ['$32\\ \\Omega$', '$16\\ \\Omega$', '$8\\ \\Omega$', '$2\\ \\Omega$'],
      answer: 'A',
      hint: 'Gunakan $R = \\rho \\ell / A$. Memperpanjang kawat dan memperkecil penampang sama-sama memperbesar $R$.',
      solution: '$R\' = \\rho \\dfrac{2\\ell}{\\frac{1}{2}A} = 4 \\left(\\rho\\dfrac{\\ell}{A}\\right) = 4 \\times 8 = 32\\ \\Omega$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada suatu titik simpul rangkaian listrik, arus $I_1 = 5\\ \\text{A}$ dan $I_2 = 3\\ \\text{A}$ masuk menuju simpul, sedangkan arus $I_3 = 2\\ \\text{A}$ dan $I_4$ keluar meninggalkan simpul. Berdasarkan Hukum I Kirchhoff, besar kuat arus $I_4$ adalah...',
      options: ['$10\\ \\text{A}$', '$4\\ \\text{A}$', '$8\\ \\text{A}$', '$6\\ \\text{A}$'],
      answer: 'D',
      hint: 'Jumlah arus yang masuk titik cabang sama dengan jumlah arus yang keluar.',
      solution: '$I_1 + I_2 = I_3 + I_4 \\implies 5 + 3 = 2 + I_4 \\implies I_4 = 6\\ \\text{A}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah pemanas listrik memiliki spesifikasi $400\\ \\text{W} / 200\\ \\text{V}$. Hambatan elemen pemanas tersebut saat bekerja pada kondisi normal adalah...',
      options: ['$50\\ \\Omega$', '$100\\ \\Omega$', '$200\\ \\Omega$', '$0{,}5\\ \\Omega$'],
      answer: 'B',
      hint: 'Hubungkan daya dan tegangan dengan $P = V^2 / R$.',
      solution: '$R = \\dfrac{V^2}{P} = \\dfrac{200^2}{400} = \\dfrac{40.000}{400} = 100\\ \\Omega$. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Ketika sebuah baterai ber-GGL $\\varepsilon$ dan hambatan dalam $r > 0$ mengalirkan arus $I$ ke sebuah hambatan luar $R$, tegangan jepit $V$ di antara kedua kutub baterai bernilai...',
      options: [
        'lebih kecil daripada $\\varepsilon$ sebesar $Ir$',
        'selalu sama persis dengan $\\varepsilon$',
        'lebih besar daripada $\\varepsilon$ sebesar $Ir$',
        'sama dengan nol selama arus mengalir'
      ],
      answer: 'A',
      hint: 'Ingat persamaan tegangan jepit $V = \\varepsilon - Ir$.',
      solution: 'Sebagian GGL turun di dalam hambatan dalam baterai sebesar $Ir$, sehingga tegangan jepit $V = \\varepsilon - Ir$ selalu **lebih kecil daripada $\\varepsilon$ sebesar $Ir$** saat baterai menyuplai arus. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Perhatikan rangkaian seri pada gambar. Tiga resistor bernilai $3\\ \\Omega$, $5\\ \\Omega$, dan $4\\ \\Omega$ dihubungkan secara seri dengan sumber tegangan DC $24\\ \\text{V}$. Kuat arus yang mengalir melalui resistor $5\\ \\Omega$ dan beda potensial di ujung-ujungnya berturut-turut adalah...',
      options: [
        '$2\\ \\text{A}$ dan $6\\ \\text{V}$',
        '$2\\ \\text{A}$ dan $8\\ \\text{V}$',
        '$2\\ \\text{A}$ dan $10\\ \\text{V}$',
        '$4\\ \\text{A}$ dan $20\\ \\text{V}$'
      ],
      answer: 'C',
      hint: 'Pada rangkaian seri, hambatan total adalah jumlah semua hambatan dan arus di tiap resistor sama.',
      solution: '$R_{\\text{tot}} = 3 + 5 + 4 = 12\\ \\Omega$, sehingga $I = \\dfrac{24}{12} = 2\\ \\text{A}$.\nTegangan pada resistor $5\\ \\Omega$: $V = I R = 2 \\times 5 = 10\\ \\text{V}$. Jawaban: **C**.',
      visual: {
        type: 'circuit',
        props: {
          title: 'Rangkaian Seri Tiga Resistor',
          mode: 'series',
          batteryLabel: '24 V',
          resistors: ['3 Ω', '5 Ω', '4 Ω']
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah baterai dengan GGL $\\varepsilon = 12\\ \\text{V}$ dan hambatan dalam $r = 1\\ \\Omega$ dihubungkan dengan resistor luar $R = 5\\ \\Omega$. Tegangan jepit baterai saat rangkaian tertutup adalah...',
      options: ['$12\\ \\text{V}$', '$10\\ \\text{V}$', '$2\\ \\text{V}$', '$6\\ \\text{V}$'],
      answer: 'B',
      hint: 'Hitung arus total $I = \\varepsilon / (R + r)$, lalu hitung $V = \\varepsilon - Ir$ atau $V = IR$.',
      solution: '$I = \\dfrac{12}{5 + 1} = 2\\ \\text{A}$.\n$V = \\varepsilon - Ir = 12 - 2(1) = 10\\ \\text{V}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Perhatikan rangkaian paralel pada gambar. Resistor $6\\ \\Omega$ dan $12\\ \\Omega$ dirangkai paralel pada baterai $12\\ \\text{V}$ yang hambatan dalamnya diabaikan. Daya listrik total yang diserap oleh kedua resistor tersebut adalah...',
      options: ['$8\\ \\text{W}$', '$18\\ \\text{W}$', '$24\\ \\text{W}$', '$36\\ \\text{W}$'],
      answer: 'D',
      hint: 'Cari hambatan pengganti paralel $R_p$, lalu gunakan $P = V^2 / R_p$ (atau jumlahkan daya tiap cabang).',
      solution: '$\\dfrac{1}{R_p} = \\dfrac{1}{6} + \\dfrac{1}{12} = \\dfrac{3}{12} \\implies R_p = 4\\ \\Omega$.\n$P_{\\text{tot}} = \\dfrac{V^2}{R_p} = \\dfrac{12^2}{4} = \\dfrac{144}{4} = 36\\ \\text{W}$. Jawaban: **D**.',
      visual: {
        type: 'circuit',
        props: {
          title: 'Rangkaian Paralel Dua Resistor',
          mode: 'parallel',
          batteryLabel: '12 V',
          resistors: ['6 Ω', '12 Ω']
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah lampu bertuliskan $60\\ \\text{W} / 220\\ \\text{V}$ dipasang pada sumber tegangan $110\\ \\text{V}$. Jika hambatan filamen lampu dianggap konstan, daya listrik yang terdisipasi pada lampu tersebut adalah...',
      options: ['$15\\ \\text{W}$', '$30\\ \\text{W}$', '$60\\ \\text{W}$', '$120\\ \\text{W}$'],
      answer: 'A',
      hint: 'Gunakan perbandingan $P = (V / V_0)^2 P_0$.',
      solution: '$P = \\left(\\dfrac{110}{220}\\right)^2 \\times 60 = \\left(\\dfrac{1}{2}\\right)^2 \\times 60 = \\dfrac{1}{4} \\times 60 = 15\\ \\text{W}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Suatu rangkaian satu loop tertutup berisi dua baterai $\\varepsilon_1 = 12\\ \\text{V}$ dan $\\varepsilon_2 = 4\\ \\text{V}$ yang dipasang berlawanan arah, serta tiga resistor seri bernilai $2\\ \\Omega$, $3\\ \\Omega$, dan $3\\ \\Omega$ (hambatan dalam diabaikan). Kuat arus listrik dalam rangkaian adalah...',
      options: ['$0{,}5\\ \\text{A}$', '$1{,}0\\ \\text{A}$', '$1{,}5\\ \\text{A}$', '$2{,}0\\ \\text{A}$'],
      answer: 'B',
      hint: 'Karena kedua GGL berlawanan polaritas, $\\Sigma \\varepsilon = \\varepsilon_1 - \\varepsilon_2$.',
      solution: 'Dari Hukum II Kirchhoff: $\\Sigma \\varepsilon + \\Sigma IR = 0 \\implies (12 - 4) - I(2 + 3 + 3) = 0 \\implies 8I = 8 \\implies I = 1{,}0\\ \\text{A}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Lima resistor disusun membentuk jembatan Wheatstone antara terminal A dan B: cabang atas terdiri dari $R_1 = 3\\ \\Omega$ (A–C) seri dengan $R_2 = 6\\ \\Omega$ (C–B); cabang bawah terdiri dari $R_3 = 6\\ \\Omega$ (A–D) seri dengan $R_4 = 12\\ \\Omega$ (D–B); serta resistor tengah $R_5 = 10\\ \\Omega$ menghubungkan titik C dan D. Hambatan pengganti antara A dan B adalah...',
      options: ['$10\\ \\Omega$', '$12\\ \\Omega$', '$6\\ \\Omega$', '$9\\ \\Omega$'],
      answer: 'C',
      hint: 'Periksa terlebih dahulu apakah $R_1 R_4 = R_2 R_3$ untuk melihat apakah jembatan dalam keadaan seimbang.',
      solution: '$R_1 R_4 = 3 \\times 12 = 36$ dan $R_2 R_3 = 6 \\times 6 = 36$. Karena $R_1 R_4 = R_2 R_3$, jembatan seimbang dan tidak ada arus melewati $R_5 = 10\\ \\Omega$.\nCabang atas: $R_{ACB} = 3 + 6 = 9\\ \\Omega$. Cabang bawah: $R_{ADB} = 6 + 12 = 18\\ \\Omega$.\nHambatan total: $\\dfrac{1}{R_{AB}} = \\dfrac{1}{9} + \\dfrac{1}{18} = \\dfrac{3}{18} \\implies R_{AB} = 6\\ \\Omega$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu rangkaian dua loop memiliki titik simpul atas A dan bawah B. Cabang kiri berisi GGL $\\varepsilon_1 = 21\\ \\text{V}$ (kutub positif di atas) seri dengan $R_1 = 3\\ \\Omega$; cabang kanan berisi GGL $\\varepsilon_2 = 18\\ \\text{V}$ (kutub positif di atas) seri dengan $R_2 = 6\\ \\Omega$; sedangkan cabang tengah menghubungkan A dan B melalui resistor $R_3 = 3\\ \\Omega$. Besar kuat arus yang mengalir melalui resistor tengah $R_3$ adalah...',
      options: ['$1\\ \\text{A}$', '$3\\ \\text{A}$', '$5\\ \\text{A}$', '$4\\ \\text{A}$'],
      answer: 'D',
      hint: 'Susun persamaan loop kiri ($21 - 3I_1 - 3I_3 = 0$), loop kanan ($18 - 6I_2 - 3I_3 = 0$), dan $I_3 = I_1 + I_2$.',
      solution: 'Dari loop kiri: $21 - 3I_1 - 3I_3 = 0 \\implies I_1 = 7 - I_3$.\nDari loop kanan: $18 - 6I_2 - 3I_3 = 0 \\implies 2I_2 = 6 - I_3 \\implies I_2 = 3 - \\dfrac{1}{2}I_3$.\nSubstitusi ke $I_3 = I_1 + I_2$: $I_3 = 10 - \\dfrac{3}{2}I_3 \\implies \\dfrac{5}{2}I_3 = 10 \\implies I_3 = 4\\ \\text{A}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah baterai ber-GGL $\\varepsilon$ dan hambatan dalam $r$ menghasilkan arus $2\\ \\text{A}$ ketika dihubungkan dengan resistor $5\\ \\Omega$, serta menghasilkan arus $3\\ \\text{A}$ ketika dihubungkan dengan resistor $3\\ \\Omega$. Nilai $\\varepsilon$ dan $r$ baterai tersebut berturut-turut adalah...',
      options: [
        '$\\varepsilon = 12\\ \\text{V}$ dan $r = 1\\ \\Omega$',
        '$\\varepsilon = 10\\ \\text{V}$ dan $r = 2\\ \\Omega$',
        '$\\varepsilon = 12\\ \\text{V}$ dan $r = 2\\ \\Omega$',
        '$\\varepsilon = 9\\ \\text{V}$ dan $r = 1\\ \\Omega$'
      ],
      answer: 'A',
      hint: 'Tulis dua persamaan $\\varepsilon = I(R + r)$ untuk masing-masing kondisi lalu samakan.',
      solution: 'Dari kondisi 1 dan 2: $\\varepsilon = 2(5 + r) = 10 + 2r$ dan $\\varepsilon = 3(3 + r) = 9 + 3r$.\nSamakan: $10 + 2r = 9 + 3r \\implies r = 1\\ \\Omega$.\nSubstitusi kembali: $\\varepsilon = 2(5 + 1) = 12\\ \\text{V}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah teko pemanas listrik berhambatan $40\\ \\Omega$ dialiri arus $5\\ \\text{A}$ untuk memanaskan $1\\ \\text{kg}$ air ($c = 4.200\\ \\text{J/(kg}\\cdot^\\circ\\text{C)}$) dari suhu $25^\\circ\\text{C}$ hingga $100^\\circ\\text{C}$. Jika $75\\%$ energi listrik diserap oleh air, waktu yang dibutuhkan adalah...',
      options: ['$5\\ \\text{menit}$', '$7\\ \\text{menit}$', '$5{,}25\\ \\text{menit}$', '$9\\ \\text{menit}$'],
      answer: 'B',
      hint: 'Samakan $0{,}75 \\times I^2 R t = m c \\Delta T$.',
      solution: 'Daya listrik $P = I^2 R = 5^2 \\times 40 = 1.000\\ \\text{W}$, sehingga daya berguna ke air $0{,}75 \\times 1.000 = 750\\ \\text{W}$.\nKalor yang diperlukan: $Q = m c \\Delta T = 1 \\times 4.200 \\times (100 - 25) = 315.000\\ \\text{J}$.\nWaktu: $t = \\dfrac{315.000}{750} = 420\\ \\text{s} = 7\\ \\text{menit}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sepotong kawat konduktor berhambatan $4\\ \\Omega$ ditarik secara seragam hingga panjangnya menjadi $3$ kali panjang semula dengan volume kawat tetap. Hambatan kawat setelah ditarik menjadi...',
      options: ['$12\\ \\Omega$', '$16\\ \\Omega$', '$36\\ \\Omega$', '$4\\ \\Omega$'],
      answer: 'C',
      hint: 'Jika volume $V = A\\ell$ tetap dan panjang menjadi $3\\ell$, maka luas penampang menyusut menjadi $A/3$.',
      solution: 'Volume konstan: $A\'\\ell\' = A\\ell$. Karena $\\ell\' = 3\\ell$, maka $A\' = \\dfrac{1}{3}A$.\n$R\' = \\rho\\dfrac{3\\ell}{A/3} = 9\\left(\\rho\\dfrac{\\ell}{A}\\right) = 9 \\times 4 = 36\\ \\Omega$. Jawaban: **C**.'
    })
  ]
});
