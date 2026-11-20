import { bab, soal } from '../author.js';

export default bab({
  grade: 12,
  number: 3,
  slug: 'medan-magnet-dan-induksi-elektromagnetik',
  title: 'Medan Magnet dan Induksi Elektromagnetik',
  element: 'Pemahaman Fisika: kelistrikan dan kemagnetan (medan magnet dan induksi elektromagnetik)',
  summary: {
    overview: 'Motor listrik, mesin MRI, generator pembangkit listrik tenaga air, hingga trafo di gardu PLN semuanya bekerja berdasarkan keterkaitan antara arus listrik dan medan magnet. Bab ini membahas medan magnet akibat kawat lurus, melingkar, dan solenoida, gaya Lorentz pada muatan bergerak dan kawat berarus, fluks magnetik, hukum Faraday dan hukum Lenz, GGL gerak pada konduktor, generator AC, serta transformator ideal dan efisiensinya.',
    coreConcepts: [
      'Medan Magnet di Sekitar Arus Listrik: Arus listrik menghasilkan medan magnet dengan arah mengikuti kaidah tangan kanan (ibu jari arah arus, lipatan keempat jari arah medan $B$). Pada jarak tegak lurus $a$ dari kawat lurus sangat panjang berarus $I$: $B = \\dfrac{\\mu_0 I}{2\\pi a}$, dengan $\\mu_0 = 4\\pi \\times 10^{-7}\\ \\text{Wb/(A}\\cdot\\text{m)}$. Di pusat kawat melingkar berjari-jari $a$ dengan $N$ lilitan: $B = \\dfrac{\\mu_0 I N}{2a}$. Di pusat solenoida sepanjang $\\ell$ dengan $N$ lilitan ($n = N/\\ell$): $B = \\mu_0 n I = \\dfrac{\\mu_0 I N}{\\ell}$, dan di ujungnya setengah nilai pusat.',
      'Gaya Lorentz pada Muatan dan Kawat Berarus: Muatan $q$ yang bergerak dengan kecepatan $v$ memotong medan magnet $B$ pada sudut $\\theta$ mengalami gaya Lorentz $F = q v B \\sin\\theta$. Jika tegak lurus ($\\theta = 90^\\circ$), muatan bergerak melingkar berjari-jari $R = \\dfrac{mv}{qB}$. Kawat berarus $I$ sepanjang $\\ell$ dalam medan $B$ mengalami gaya $F = B I \\ell \\sin\\theta$. Dua kawat lurus sejajar berjarak $a$ saling tarik-menarik jika arus searah dan tolak-menolak jika berlawanan arah dengan gaya per satuan panjang $\\dfrac{F}{\\ell} = \\dfrac{\\mu_0 I_1 I_2}{2\\pi a}$.',
      'Fluks Magnetik, Hukum Faraday, dan Hukum Lenz: Fluks magnetik yang menembus luas penampang $A$ didefinisikan $\\Phi = B A \\cos\\theta$, dengan $\\theta$ sudut antara $\\vec{B}$ dan garis normal bidang, bersatuan weber (Wb). Menurut hukum Faraday, perubahan fluks magnetik menginduksi gaya gerak listrik: $\\varepsilon = -N\\dfrac{\\Delta \\Phi}{\\Delta t}$. Tanda negatif merangkum hukum Lenz: arah arus induksi selalu menimbulkan medan magnet yang melawan perubahan fluks penyebabnya.',
      'GGL Gerak dan Generator Listrik: Batang konduktor sepanjang $\\ell$ yang digerakkan dengan kecepatan $v$ tegak lurus memotong medan magnet $B$ menimbulkan GGL induksi $\\varepsilon = B \\ell v \\sin\\theta$. Generator mengubah energi mekanik putaran kumparan dalam medan magnet menjadi energi listrik bolak-balik dengan GGL sesaat $\\varepsilon(t) = N B A \\omega \\sin(\\omega t)$ dan nilai maksimum $\\varepsilon_{\\text{maks}} = N B A \\omega$.',
      'Transformator Ideal dan Efisiensi Trafo: Transformator menaikkan (step-up) atau menurunkan (step-down) tegangan bolak-balik melalui induksi timbal balik antar kumparan primer dan sekunder. Pada transformator ideal tanpa rugi daya ($P_p = P_s$), berlaku $\\dfrac{N_p}{N_s} = \\dfrac{V_p}{V_s} = \\dfrac{I_s}{I_p}$. Pada transformator nyata dengan efisiensi $\\eta < 100\\%$, berlaku $\\eta = \\dfrac{P_s}{P_p} \\times 100\\% = \\dfrac{V_s I_s}{V_p I_p} \\times 100\\%$.'
    ],
    keyFormulas: [
      { label: 'Medan magnet kawat lurus & solenoida', formula: 'B_{\\text{lurus}} = \\dfrac{\\mu_0 I}{2\\pi a} \\qquad B_{\\text{pusat sol}} = \\dfrac{\\mu_0 I N}{\\ell}' },
      { label: 'Gaya Lorentz & jari-jari lintasan', formula: 'F = q v B \\sin\\theta \\qquad F = B I \\ell \\sin\\theta \\qquad R = \\dfrac{m v}{q B}' },
      { label: 'Fluks & hukum Faraday–Lenz', formula: '\\Phi = B A \\cos\\theta \\qquad \\varepsilon = -N\\dfrac{\\Delta \\Phi}{\\Delta t}' },
      { label: 'GGL gerak & generator', formula: '\\varepsilon = B \\ell v \\sin\\theta \\qquad \\varepsilon_{\\text{maks}} = N B A \\omega' },
      { label: 'Transformator ideal & efisiensi', formula: '\\dfrac{N_p}{N_s} = \\dfrac{V_p}{V_s} = \\dfrac{I_s}{I_p} \\qquad \\eta = \\dfrac{V_s I_s}{V_p I_p} \\times 100\\%' }
    ],
    workedExamples: [
      {
        title: 'Medan magnet di antara dua kawat sejajar',
        problem: 'Dua kawat lurus panjang sejajar A dan B berjarak $10\\ \\text{cm}$ dialiri arus berlawanan arah masing-masing $I_A = 2\\ \\text{A}$ dan $I_B = 3\\ \\text{A}$. Tentukan besar induksi magnetik di titik P tepat di tengah kedua kawat ($\\mu_0 = 4\\pi \\times 10^{-7}\\ \\text{Wb/(A}\\cdot\\text{m)}$).',
        solution: 'Jarak titik P ke masing-masing kawat $a = 5\\ \\text{cm} = 0{,}05\\ \\text{m}$. Karena arus berlawanan arah, di antara kedua kawat arah medan $B_A$ dan $B_B$ searah (saling menguatkan).\n$$B_A = \\dfrac{4\\pi \\times 10^{-7} \\times 2}{2\\pi \\times 0{,}05} = 0{,}8 \\times 10^{-5}\\ \\text{T}$$\n$$B_B = \\dfrac{4\\pi \\times 10^{-7} \\times 3}{2\\pi \\times 0{,}05} = 1{,}2 \\times 10^{-5}\\ \\text{T}$$\n$$B_{\\text{tot}} = B_A + B_B = \\mathbf{2{,}0 \\times 10^{-5}\\ T}.$$'
      },
      {
        title: 'GGL induksi hukum Faraday',
        problem: 'Sebuah kumparan dengan $400$ lilitan dan luas penampang $0{,}02\\ \\text{m}^2$ berada tegak lurus medan magnet yang berkurang beraturan dari $0{,}8\\ \\text{T}$ menjadi $0{,}2\\ \\text{T}$ dalam waktu $0{,}04\\ \\text{s}$. Hitung besar GGL induksi yang timbul.',
        solution: 'Perubahan fluks: $\\Delta \\Phi = A \\Delta B = 0{,}02 \\times (0{,}2 - 0{,}8) = -0{,}012\\ \\text{Wb}$.\nBesar GGL induksi:\n$$|\\varepsilon| = N\\left|\\dfrac{\\Delta \\Phi}{\\Delta t}\\right| = 400 \\times \\dfrac{0{,}012}{0{,}04} = \\mathbf{120\\ V}.$$'
      },
      {
        title: 'Transformator tidak ideal',
        problem: 'Sebuah transformator step-down memiliki efisiensi $75\\%$ untuk menurunkan tegangan $220\\ \\text{V}$ menjadi $11\\ \\text{V}$. Jika arus keluaran sekunder $5\\ \\text{A}$, berapakah kuat arus pada kumparan primer?',
        solution: 'Daya sekunder: $P_s = V_s I_s = 11 \\times 5 = 55\\ \\text{W}$.\nDaya primer: $\\eta = \\dfrac{P_s}{P_p} \\implies P_p = \\dfrac{55}{0{,}75} = \\dfrac{220}{3}\\ \\text{W}$.\nArus primer: $I_p = \\dfrac{P_p}{V_p} = \\dfrac{220/3}{220} = \\mathbf{\\dfrac{1}{3}\\ A \\approx 0{,}33\\ A}$.'
      }
    ],
    misconceptions: [
      'Menganggap fluks magnetik maksimum saat garis medan sejajar dengan bidang kumparan. Fluks $\\Phi = BA\\cos\\theta$ bernilai maksimum justru saat garis medan tegak lurus terhadap bidang (sejajar dengan garis normal bidang, $\\theta = 0^\\circ$).',
      'Menganggap dua kawat sejajar berarus searah saling tolak-menolak seperti muatan sejenis. Arus searah menghasilkan medan tarik-menarik antar kawat, sedangkan arus berlawanan arah menghasilkan gaya tolak-menolak.',
      'Mengira transformator dapat bekerja pada tegangan baterai DC murni yang konstan. Trafo membutuhkan perubahan fluks magnetik terus-menerus agar terjadi GGL induksi pada kumparan sekunder, sehingga hanya bekerja pada arus AC (atau arus DC yang berdenyut).'
    ],
    tutorTip: 'Ingat kaidah tangan kanan untuk gaya Lorentz $\\vec{F} = q\\vec{v} \\times \\vec{B}$ atau $I\\vec{\\ell} \\times \\vec{B}$: arahkan ibu jari searah arus ($I$ atau muatan $+$), keempat jari searah medan magnet ($B$), maka dorongan telapak tangan adalah arah gaya Lorentz ($F$). Untuk muatan negatif (elektron), balikkan hasilnya.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sebuah kawat lurus sangat panjang dialiri arus listrik $10\\ \\text{A}$. Besar induksi magnetik pada jarak tegak lurus $4\\ \\text{cm}$ dari kawat tersebut ($\\mu_0 = 4\\pi \\times 10^{-7}\\ \\text{Wb/(A}\\cdot\\text{m)}$) adalah...',
      options: ['$5 \\times 10^{-5}\\ \\text{T}$', '$2{,}5 \\times 10^{-5}\\ \\text{T}$', '$1 \\times 10^{-4}\\ \\text{T}$', '$5 \\times 10^{-7}\\ \\text{T}$'],
      answer: 'A',
      hint: 'Ubah $4\\ \\text{cm}$ menjadi $4 \\times 10^{-2}\\ \\text{m}$, lalu gunakan $B = \\mu_0 I / (2\\pi a)$.',
      solution: '$B = \\dfrac{4\\pi \\times 10^{-7} \\times 10}{2\\pi \\times 4 \\times 10^{-2}} = \\dfrac{20 \\times 10^{-7}}{4 \\times 10^{-2}} = 5 \\times 10^{-5}\\ \\text{T}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah kawat lurus mendatar dialiri arus listrik ke arah timur di dalam medan magnet homogen yang mengarah vertikal ke bawah (menuju permukaan bumi). Arah gaya Lorentz yang dialami kawat tersebut adalah...',
      options: ['ke selatan', 'ke atas', 'ke utara', 'ke barat'],
      answer: 'C',
      hint: 'Gunakan kaidah tangan kanan: ibu jari ke timur (arah arus), keempat jari ke bawah (arah medan magnet).',
      solution: 'Dengan kaidah tangan kanan, ibu jari ke timur dan keempat jari menunjuk ke bawah menyebabkan telapak tangan menghadap **ke utara**. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah loop persegi seluas $0{,}04\\ \\text{m}^2$ berada dalam medan magnet homogen $0{,}5\\ \\text{T}$ dengan bidang loop tegak lurus terhadap arah medan magnet. Fluks magnetik yang menembus loop tersebut adalah...',
      options: ['$0\\ \\text{Wb}$', '$2 \\times 10^{-2}\\ \\text{Wb}$', '$2 \\times 10^{-1}\\ \\text{Wb}$', '$8 \\times 10^{-2}\\ \\text{Wb}$'],
      answer: 'B',
      hint: 'Bidang tegak lurus medan berarti garis normal sejajar medan ($\\theta = 0^\\circ$).',
      solution: '$\\Phi = B A \\cos 0^\\circ = 0{,}5 \\times 0{,}04 \\times 1 = 0{,}02\\ \\text{Wb} = 2 \\times 10^{-2}\\ \\text{Wb}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Ketika kutub utara magnet batang didorong masuk ke dalam kumparan yang terhubung dengan galvanometer, arus induksi mengalir sedemikian rupa sehingga ujung kumparan yang menghadap magnet menjadi kutub utara untuk menolak gerakan magnet tersebut. Prinsip ini dikenal sebagai...',
      options: ['hukum Coulomb', 'hukum Biot–Savart', 'hukum Gauss', 'hukum Lenz'],
      answer: 'D',
      hint: 'Hukum ini menjelaskan arah arus induksi yang selalu melawan perubahan fluks penyebabnya.',
      solution: 'Arah arus induksi yang menimbulkan medan magnet berlawanan dengan perubahan fluks magnetik penyebabnya dinyatakan oleh **hukum Lenz**. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah transformator ideal memiliki $1.000$ lilitan primer dan $200$ lilitan sekunder. Jika kumparan primer diberi tegangan AC $220\\ \\text{V}$, tegangan keluaran pada kumparan sekunder adalah...',
      options: ['$44\\ \\text{V}$', '$1.100\\ \\text{V}$', '$110\\ \\text{V}$', '$22\\ \\text{V}$'],
      answer: 'A',
      hint: 'Gunakan perbandingan $V_s / V_p = N_s / N_p$.',
      solution: '$V_s = \\dfrac{N_s}{N_p} V_p = \\dfrac{200}{1.000} \\times 220 = 44\\ \\text{V}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah solenoida sepanjang $40\\ \\text{cm}$ memiliki $800$ lilitan dan dialiri arus listrik $2\\ \\text{A}$ ($\\mu_0 = 4\\pi \\times 10^{-7}\\ \\text{Wb/(A}\\cdot\\text{m)}$). Besar induksi magnetik di **pusat** solenoida adalah...',
      options: [
        '$0{,}8\\pi \\times 10^{-3}\\ \\text{T}$',
        '$1{,}6\\pi \\times 10^{-3}\\ \\text{T}$',
        '$3{,}2\\pi \\times 10^{-3}\\ \\text{T}$',
        '$4\\pi \\times 10^{-4}\\ \\text{T}$'
      ],
      answer: 'B',
      hint: 'Gunakan rumus medan magnet di pusat solenoida $B = \\mu_0 I N / \\ell$ dengan $\\ell = 0{,}4\\ \\text{m}$.',
      solution: '$B = \\dfrac{4\\pi \\times 10^{-7} \\times 2 \\times 800}{0{,}4} = 4\\pi \\times 10^{-7} \\times 4.000 = 1{,}6\\pi \\times 10^{-3}\\ \\text{T}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah elektron ($|q| = 1{,}6 \\times 10^{-19}\\ \\text{C}$) bergerak dengan kecepatan $4 \\times 10^6\\ \\text{m/s}$ memasuki medan magnet homogen $0{,}25\\ \\text{T}$ sambil membentuk sudut $30^\\circ$ terhadap garis medan magnet. Besar gaya Lorentz yang dialami elektron adalah...',
      options: [
        '$1{,}6 \\times 10^{-13}\\ \\text{N}$',
        '$8\\sqrt{3} \\times 10^{-14}\\ \\text{N}$',
        '$8 \\times 10^{-14}\\ \\text{N}$',
        '$3{,}2 \\times 10^{-13}\\ \\text{N}$'
      ],
      answer: 'C',
      hint: 'Gunakan $F = |q| v B \\sin\\theta$ dengan $\\sin 30^\\circ = 0{,}5$.',
      solution: '$F = 1{,}6 \\times 10^{-19} \\times 4 \\times 10^6 \\times 0{,}25 \\times \\sin 30^\\circ = 1{,}6 \\times 10^{-13} \\times 0{,}5 = 8 \\times 10^{-14}\\ \\text{N}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah kumparan terdiri atas $250$ lilitan mengalami penurunan fluks magnetik secara beraturan dari $8 \\times 10^{-3}\\ \\text{Wb}$ menjadi $2 \\times 10^{-3}\\ \\text{Wb}$ dalam waktu $0{,}05\\ \\text{s}$. Besar GGL induksi yang timbul pada kumparan adalah...',
      options: ['$15\\ \\text{V}$', '$40\\ \\text{V}$', '$10\\ \\text{V}$', '$30\\ \\text{V}$'],
      answer: 'D',
      hint: 'Gunakan $|\\varepsilon| = N |\\Delta \\Phi| / \\Delta t$.',
      solution: '$|\\varepsilon| = 250 \\times \\dfrac{8 \\times 10^{-3} - 2 \\times 10^{-3}}{0{,}05} = 250 \\times \\dfrac{6 \\times 10^{-3}}{0{,}05} = 250 \\times 0{,}12 = 30\\ \\text{V}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Batang konduktor sepanjang $50\\ \\text{cm}$ digerakkan dengan kelajuan konstan $6\\ \\text{m/s}$ tegak lurus memotong medan magnet homogen $0{,}4\\ \\text{T}$ di atas rel konduktor berbentuk huruf U yang terhubung dengan resistor $3\\ \\Omega$. Kuat arus induksi yang mengalir melalui resistor adalah...',
      options: ['$0{,}4\\ \\text{A}$', '$1{,}2\\ \\text{A}$', '$3{,}6\\ \\text{A}$', '$0{,}8\\ \\text{A}$'],
      answer: 'A',
      hint: 'Hitung GGL gerak $\\varepsilon = B\\ell v$, lalu bagi dengan hambatan $R$.',
      solution: '$\\varepsilon = B\\ell v = 0{,}4 \\times 0{,}5 \\times 6 = 1{,}2\\ \\text{V}$.\n$I = \\dfrac{\\varepsilon}{R} = \\dfrac{1{,}2}{3} = 0{,}4\\ \\text{A}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Kumparan sebuah generator AC memiliki $100$ lilitan dengan luas penampang $0{,}02\\ \\text{m}^2$ dan berputar dengan kecepatan sudut $50\\ \\text{rad/s}$ dalam medan magnet homogen $0{,}4\\ \\text{T}$. Besar GGL maksimum yang dihasilkan generator tersebut adalah...',
      options: ['$20\\ \\text{V}$', '$40\\ \\text{V}$', '$80\\ \\text{V}$', '$400\\ \\text{V}$'],
      answer: 'B',
      hint: 'GGL maksimum generator memenuhi $\\varepsilon_{\\text{maks}} = N B A \\omega$.',
      solution: '$\\varepsilon_{\\text{maks}} = 100 \\times 0{,}4 \\times 0{,}02 \\times 50 = 40\\ \\text{V}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dua kawat lurus sangat panjang sejajar A dan B berjarak $15\\ \\text{cm}$ dialiri arus listrik searah masing-masing $I_A = 6\\ \\text{A}$ dan $I_B = 9\\ \\text{A}$. Letak titik dengan induksi magnetik total sama dengan nol adalah...',
      options: [
        '$6\\ \\text{cm}$ di luar kawat A (menjauhi B)',
        '$9\\ \\text{cm}$ dari kawat A di antara kedua kawat',
        '$6\\ \\text{cm}$ dari kawat A di antara kedua kawat',
        '$7{,}5\\ \\text{cm}$ tepat di tengah kedua kawat'
      ],
      answer: 'C',
      hint: 'Karena kedua arus searah, titik bermedan nol terletak di antara kedua kawat dan memenuhi $I_A / x = I_B / (15 - x)$.',
      solution: 'Di antara kedua kawat, arah medan $B_A$ dan $B_B$ berlawanan sehingga dapat saling meniadakan. Misalkan jarak ke kawat A adalah $x$ cm:\n$\\dfrac{6}{x} = \\dfrac{9}{15 - x} \\implies 6(15 - x) = 9x \\implies 90 = 15x \\implies x = 6\\ \\text{cm}$ dari kawat A. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah partikel bermassa $m$ dan bermuatan $q$ bergerak tegak lurus memasuki medan magnet homogen $B$ dengan energi kinetik $E_k$, membentuk lintasan melingkar berjari-jari $R$. Jika partikel kedua bermassa sama $m$ tetapi bermuatan $2q$ memasuki medan magnet yang sama dengan energi kinetik $2E_k$, jari-jari lintasan partikel kedua adalah...',
      options: ['$2R$', '$\\sqrt{2} R$', '$\\dfrac{1}{2} R$', '$\\dfrac{1}{2}\\sqrt{2} R$'],
      answer: 'D',
      hint: 'Nyatakan momentum dalam energi kinetik ($p = mv = \\sqrt{2mE_k}$) pada rumus $R = mv / (qB)$.',
      solution: '$R = \\dfrac{mv}{qB} = \\dfrac{\\sqrt{2mE_k}}{qB}$. Untuk partikel kedua ($q\' = 2q$, $E_k\' = 2E_k$):\n$R\' = \\dfrac{\\sqrt{2m(2E_k)}}{(2q)B} = \\dfrac{\\sqrt{2}}{2}\\dfrac{\\sqrt{2mE_k}}{qB} = \\dfrac{1}{2}\\sqrt{2}R$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah transformator ber-efisiensi $80\\%$ digunakan untuk menurunkan tegangan AC $220\\ \\text{V}$ menjadi $22\\ \\text{V}$. Jika kumparan sekundernya dihubungkan dengan beban berdaya $44\\ \\text{W}$, kuat arus listrik yang mengalir pada kumparan primer adalah...',
      options: ['$0{,}25\\ \\text{A}$', '$0{,}20\\ \\text{A}$', '$0{,}16\\ \\text{A}$', '$2{,}0\\ \\text{A}$'],
      answer: 'A',
      hint: 'Hitung daya primer $P_p = P_s / \\eta$, lalu cari $I_p = P_p / V_p$.',
      solution: 'Daya sekunder $P_s = 44\\ \\text{W}$. Dari $\\eta = \\dfrac{P_s}{P_p}$, diperoleh $P_p = \\dfrac{44}{0{,}8} = 55\\ \\text{W}$.\nKuat arus primer: $I_p = \\dfrac{P_p}{V_p} = \\dfrac{55}{220} = 0{,}25\\ \\text{A}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Tiga kawat lurus panjang sejajar terletak pada satu bidang. Kawat 1 ($I_1 = 4\\ \\text{A}$ ke atas) dan kawat 2 ($I_2 = 6\\ \\text{A}$ ke bawah) terpisah sejauh $10\\ \\text{cm}$. Kawat 3 berarus $I_3 = 5\\ \\text{A}$ ke atas diletakkan di antara keduanya, berjarak $4\\ \\text{cm}$ dari kawat 1 dan $6\\ \\text{cm}$ dari kawat 2 ($\\mu_0 = 4\\pi \\times 10^{-7}\\ \\text{Wb/(A}\\cdot\\text{m)}$). Gaya magnetik per satuan panjang pada kawat 3 adalah...',
      options: [
        '$0\\ \\text{N/m}$',
        '$2{,}0 \\times 10^{-4}\\ \\text{N/m}$ menuju kawat 1',
        '$2{,}0 \\times 10^{-4}\\ \\text{N/m}$ menuju kawat 2',
        '$1{,}0 \\times 10^{-4}\\ \\text{N/m}$ menuju kawat 1'
      ],
      answer: 'B',
      hint: 'Arus searah tarik-menarik sedangkan berlawanan arah tolak-menolak; perhatikan arah gaya dari kawat 1 dan kawat 2 pada kawat 3.',
      solution: 'Kawat 3 searah dengan kawat 1 (ditarik ke kawat 1) dan berlawanan dengan kawat 2 (ditolak menjauhi kawat 2, juga menuju kawat 1), sehingga kedua gaya searah dan dijumlahkan:\n$\\dfrac{F_{31}}{\\ell} = \\dfrac{4\\pi \\times 10^{-7} \\times 4 \\times 5}{2\\pi \\times 0{,}04} = 1{,}0 \\times 10^{-4}\\ \\text{N/m}$.\n$\\dfrac{F_{32}}{\\ell} = \\dfrac{4\\pi \\times 10^{-7} \\times 6 \\times 5}{2\\pi \\times 0{,}06} = 1{,}0 \\times 10^{-4}\\ \\text{N/m}$.\nTotal gaya per satuan panjang $= 2{,}0 \\times 10^{-4}\\ \\text{N/m}$ menuju kawat 1. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebatang konduktor sepanjang $0{,}5\\ \\text{m}$ digerakkan ke kanan dengan kelajuan tetap $8\\ \\text{m/s}$ di atas rel konduktor licin berbentuk U yang dihubungkan dengan resistor $2\\ \\Omega$. Seluruh sistem berada dalam medan magnet homogen $0{,}5\\ \\text{T}$ tegak lurus bidang rel. Besar gaya luar ke kanan yang diperlukan agar batang tetap bergerak dengan kelajuan konstan adalah...',
      options: ['$0{,}50\\ \\text{N}$', '$1{,}00\\ \\text{N}$', '$0{,}25\\ \\text{N}$', '$0{,}125\\ \\text{N}$'],
      answer: 'C',
      hint: 'Gaya luar harus mengimbangi gaya Lorentz pengereman $F_L = B I \\ell$ dari arus induksi.',
      solution: 'GGL gerak: $\\varepsilon = B\\ell v = 0{,}5 \\times 0{,}5 \\times 8 = 2\\ \\text{V}$, sehingga arus induksi $I = \\dfrac{2}{2} = 1\\ \\text{A}$.\nGaya Lorentz yang melawan gerak: $F_L = B I \\ell = 0{,}5 \\times 1 \\times 0{,}5 = 0{,}25\\ \\text{N}$. Agar kelajuan konstan, gaya luar ke kanan harus sebesar $0{,}25\\ \\text{N}$. Jawaban: **C**.'
    })
  ]
});
