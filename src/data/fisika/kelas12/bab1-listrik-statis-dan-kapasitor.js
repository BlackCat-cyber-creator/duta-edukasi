import { bab, soal } from '../author.js';

export default bab({
  grade: 12,
  number: 1,
  slug: 'listrik-statis-dan-kapasitor',
  title: 'Listrik Statis, Medan Listrik, dan Kapasitor',
  element: 'Pemahaman Fisika: kelistrikan dan kemagnetan (listrik statis dan kapasitor)',
  summary: {
    overview: 'Dari percikan listrik statis saat menyentuh gagang pintu hingga kapasitor penyimpan energi pada kilat kamera dan layar sentuh ponsel, interaksi muatan listrik bekerja melalui medan dan potensial listrik. Bab ini membahas hukum Coulomb, kuat medan listrik dan hukum Gauss sederhana, potensial serta energi potensial listrik, kapasitas kapasitor keping sejajar, rangkaian kapasitor seri dan paralel, serta energi yang tersimpan dalam kapasitor.',
    coreConcepts: [
      'Hukum Coulomb dan Resultan Gaya Listrik: Dua muatan titik $q_1$ dan $q_2$ yang terpisah sejauh $r$ saling mengerjakan gaya elektrostatik $F = k\\dfrac{|q_1 q_2|}{r^2}$, dengan $k = \\dfrac{1}{4\\pi\\varepsilon_0} \\approx 9 \\times 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$ di ruang hampa/udara. Muatan sejenis tolak-menolak dan berlainan jenis tarik-menarik. Jika suatu muatan dipengaruhi beberapa muatan lain, gaya totalnya adalah penjumlahan vektor (resultan gaya) di setiap sumbu.',
      'Kuat Medan Listrik dan Hukum Gauss Sederhana: Kuat medan listrik $E$ adalah gaya per satuan muatan uji positif: $E = \\dfrac{F}{q} = k\\dfrac{Q}{r^2}$ (arah menjauhi muatan positif, menuju muatan negatif). Menurut hukum Gauss, fluks listrik $\\Phi_E = E A \\cos\\theta = \\dfrac{Q_{\\text{dalam}}}{\\varepsilon_0}$, dengan $\\theta$ sudut antara $\\vec{E}$ dan garis normal bidang. Akibatnya, di dalam bola konduktor berongga bermuatan ($r < R$) kuat medannya nol karena tidak ada muatan di dalamnya, sedangkan di antara dua keping sejajar medannya seragam $E = \\dfrac{\\sigma}{\\varepsilon_0}$.',
      'Potensial dan Energi Potensial Listrik: Potensial listrik $V = k\\dfrac{Q}{r}$ dan energi potensial listrik $E_p = k\\dfrac{q_1 q_2}{r} = qV$ merupakan besaran skalar, sehingga tanda positif dan negatif muatan wajib dimasukkan langsung ke perhitungan. Usaha untuk memindahkan muatan $q$ dari titik A ke B memenuhi $W_{A \\to B} = q(V_B - V_A) = \\Delta E_p$. Di dalam bola konduktor bermuatan ($r \\le R$), potensial listriknya konstan sebesar $V = k\\dfrac{Q}{R}$.',
      'Kapasitor Keping Sejajar dan Dielektrik: Kapasitor menyimpan muatan dan energi dalam medan listrik di antara dua konduktor. Kapasitansi didefinisikan $C = \\dfrac{Q}{V}$ bersatuan farad (F). Untuk kapasitor keping sejajar berluas $A$, jarak pisah $d$, dan bahan dielektrik berkonstanta $\\varepsilon_r$, berlaku $C = \\varepsilon_r \\varepsilon_0 \\dfrac{A}{d}$ dengan $\\varepsilon_0 = 8{,}85 \\times 10^{-12}\\ \\text{C}^2/(\\text{N}\\cdot\\text{m}^2)$. Menyisipkan dielektrik memperbesar kapasitansi tanpa mengubah ukuran fisik pelat.',
      'Rangkaian Kapasitor Seri dan Paralel: Pada rangkaian seri, semua kapasitor menyimpan muatan sama ($Q_s = Q_1 = Q_2$) sedangkan tegangan terbagi ($V_s = V_1 + V_2$), sehingga $\\dfrac{1}{C_s} = \\dfrac{1}{C_1} + \\dfrac{1}{C_2} + \\dots$ Pada rangkaian paralel, setiap cabang mendapat tegangan sama ($V_p = V_1 = V_2$) sedangkan muatan terbagi ($Q_p = Q_1 + Q_2$), sehingga $C_p = C_1 + C_2 + \\dots$',
      'Energi Tersimpan dalam Kapasitor: Usaha pengisian kapasitor tersimpan sebagai energi potensial elektrostatik: $W = \\dfrac{1}{2}CV^2 = \\dfrac{1}{2}QV = \\dfrac{Q^2}{2C}$. Jika baterai dilepas lalu kapasitansi diubah (misalnya dielektrik disisipkan), muatan $Q$ tetap konstan; jika baterai tetap terhubung, tegangan $V$ yang tetap konstan.'
    ],
    keyFormulas: [
      { label: 'Hukum Coulomb & medan listrik', formula: 'F = k\\dfrac{|q_1 q_2|}{r^2} \\qquad E = k\\dfrac{Q}{r^2}' },
      { label: 'Hukum Gauss & potensial listrik', formula: '\\Phi_E = E A \\cos\\theta = \\dfrac{Q_{\\text{dalam}}}{\\varepsilon_0} \\qquad V = k\\dfrac{Q}{r}' },
      { label: 'Usaha & kapasitor keping sejajar', formula: 'W = q(V_B - V_A) \\qquad C = \\dfrac{Q}{V} = \\varepsilon_r\\varepsilon_0\\dfrac{A}{d}' },
      { label: 'Rangkaian kapasitor', formula: '\\dfrac{1}{C_s} = \\dfrac{1}{C_1} + \\dfrac{1}{C_2} \\qquad C_p = C_1 + C_2' },
      { label: 'Energi kapasitor', formula: 'W = \\dfrac{1}{2}CV^2 = \\dfrac{1}{2}QV = \\dfrac{Q^2}{2C}' }
    ],
    workedExamples: [
      {
        title: 'Titik kuat medan listrik nol',
        problem: 'Muatan $q_1 = +4\\ \\mu\\text{C}$ dan $q_2 = +9\\ \\mu\\text{C}$ terpisah sejauh $25\\ \\text{cm}$ di udara. Di manakah letak titik P yang kuat medan listrik totalnya nol?',
        solution: 'Karena kedua muatan bertanda sama, titik medan nol berada di antara keduanya. Misalkan jarak titik P ke $q_1$ adalah $x$ cm, maka jarak ke $q_2$ adalah $(25 - x)$ cm.\n$$E_1 = E_2 \\implies \\dfrac{k q_1}{x^2} = \\dfrac{k q_2}{(25 - x)^2}$$\n$$\\dfrac{4}{x^2} = \\dfrac{9}{(25 - x)^2} \\implies \\dfrac{2}{x} = \\dfrac{3}{25 - x}$$\n$3x = 50 - 2x \\implies 5x = 50 \\implies x = 10\\ \\text{cm}$.\nJadi, titik P berada **10 cm dari $q_1$** (atau 15 cm dari $q_2$) di antara kedua muatan.'
      },
      {
        title: 'Rangkaian kapasitor campuran',
        problem: 'Dua kapasitor $C_1 = 3\\ \\mu\\text{F}$ dan $C_2 = 6\\ \\mu\\text{F}$ disusun seri, kemudian diparalelkan dengan $C_3 = 4\\ \\mu\\text{F}$. Jika rangkaian dihubungkan ke tegangan $12\\ \\text{V}$, tentukan kapasitansi total dan energi total yang tersimpan.',
        solution: 'Langkah 1: Kapasitansi seri $C_1$ dan $C_2$:\n$$\\dfrac{1}{C_{12}} = \\dfrac{1}{3} + \\dfrac{1}{6} = \\dfrac{3}{6} \\implies C_{12} = 2\\ \\mu\\text{F}$$\nLangkah 2: Paralelkan dengan $C_3$:\n$$C_{\\text{tot}} = C_{12} + C_3 = 2 + 4 = 6\\ \\mu\\text{F}$$\nLangkah 3: Hitung energi total:\n$$W = \\dfrac{1}{2} C_{\\text{tot}} V^2 = \\dfrac{1}{2} (6 \\times 10^{-6})(12)^2 = 4{,}32 \\times 10^{-4}\\ \\text{J}$$\nJadi, kapasitansi totalnya **$6\\ \\mu\\text{F}$** dan energi tersimpannya **$4{,}32 \\times 10^{-4}\\ \\text{J}$**.'
      },
      {
        title: 'Kapasitor dan perubahan dielektrik saat baterai dilepas',
        problem: 'Sebuah kapasitor udara $5\\ \\mu\\text{F}$ dimuati hingga beda potensial $100\\ \\text{V}$ lalu dilepas dari sumbernya. Jika ruang antarkeping diisi dielektrik $\\varepsilon_r = 2$, berapakah tegangan kapasitor sekarang?',
        solution: 'Muatan awal $Q = C_0 V_0 = 5\\ \\mu\\text{F} \\times 100\\ \\text{V} = 500\\ \\mu\\text{C}$.\nKarena baterai sudah dilepas, muatan $Q$ tetap. Kapasitansi baru menjadi $C = \\varepsilon_r C_0 = 2 \\times 5 = 10\\ \\mu\\text{F}$.\nTegangan baru $V = \\dfrac{Q}{C} = \\dfrac{500\\ \\mu\\text{C}}{10\\ \\mu\\text{F}} = \\mathbf{50\\ V}$.'
      }
    ],
    misconceptions: [
      'Memasukkan tanda negatif muatan ke rumus besar gaya $F$ atau kuat medan $E$, lalu tetap menuliskannya sebagai vektor yang salah arah. Untuk $F$ dan $E$, hitung besarnya memakai nilai mutlak muatan lalu tentukan arah secara geometris; tanda muatan hanya dimasukkan langsung pada besaran skalar $V$ dan $E_p$.',
      'Mengira aturan seri dan paralel kapasitor sama dengan resistor. Kebalikannya: kapasitor paralel dijumlahkan langsung ($C_p = C_1 + C_2$), sedangkan kapasitor seri dijumlahkan sepernya ($1/C_s = 1/C_1 + 1/C_2$).',
      'Menganggap memperbesar tegangan $V$ memperbesar kapasitansi $C$ berdasarkan $C = Q/V$. Kapasitansi $C$ ditentukan oleh geometri dan bahan dielektrik ($C = \\varepsilon_r\\varepsilon_0 A/d$); menaikkan $V$ hanya memperbesar $Q$ secara sebanding sehingga rasio $Q/V$ tetap.'
    ],
    tutorTip: 'Bedakan skalar vs vektor sejak awal: gaya ($F$) dan medan ($E$) adalah vektor—hitung besarnya tanpa tanda minus lalu gambar arahnya; potensial ($V$) dan energi ($E_p$) adalah skalar—jumlahkan secara aljabar lengkap dengan tanda $+$ atau $-$ muatannya.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Dua muatan titik terpisah sejauh $r$ saling mengerjakan gaya tolak-menolak sebesar $F$. Jika jarak kedua muatan diperbesar menjadi $2r$ dengan besar muatan tetap, gaya elektrostatik di antara keduanya menjadi...',
      options: ['$4F$', '$2F$', '$\\dfrac{1}{2}F$', '$\\dfrac{1}{4}F$'],
      answer: 'D',
      hint: 'Menurut hukum Coulomb, gaya berbanding terbalik dengan kuadrat jarak ($F \\propto 1/r^2$).',
      solution: 'Dari hukum Coulomb $F = k\\dfrac{|q_1 q_2|}{r^2}$, jika jarak menjadi $2r$, maka $F\' = \\dfrac{F}{2^2} = \\dfrac{1}{4}F$. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah muatan titik $Q = +5\\ \\mu\\text{C}$ berada di ruang hampa ($k = 9 \\times 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$). Besar kuat medan listrik pada jarak $3\\ \\text{m}$ dari muatan tersebut adalah...',
      options: ['$5 \\times 10^3\\ \\text{N/C}$', '$1{,}5 \\times 10^4\\ \\text{N/C}$', '$4{,}5 \\times 10^4\\ \\text{N/C}$', '$1{,}5 \\times 10^3\\ \\text{N/C}$'],
      answer: 'A',
      hint: 'Ubah $5\\ \\mu\\text{C}$ menjadi $5 \\times 10^{-6}\\ \\text{C}$, lalu gunakan $E = kQ/r^2$.',
      solution: '$E = \\dfrac{9 \\times 10^9 \\times 5 \\times 10^{-6}}{3^2} = \\dfrac{45 \\times 10^3}{9} = 5 \\times 10^3\\ \\text{N/C}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah bola konduktor berongga berjari-jari $R$ diberi muatan positif $+Q$ yang tersebar merata di permukaan luarnya. Berdasarkan hukum Gauss, kuat medan listrik di bagian dalam rongga bola ($r < R$) adalah...',
      options: ['bernilai tetap sebesar $kQ/R^2$', 'nol', 'berbanding lurus dengan jarak $r$', 'berbanding terbalik dengan $r^2$'],
      answer: 'B',
      hint: 'Perhatikan berapa jumlah muatan yang dilingkupi permukaan Gauss berjari-jari $r < R$.',
      solution: 'Pada permukaan Gauss di dalam bola ($r < R$), muatan yang dilingkupi $Q_{\\text{dalam}} = 0$, sehingga fluks dan kuat medan listriknya bernilai **nol**. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Cara yang tepat untuk memperbesar kapasitas (kapasitansi) sebuah kapasitor keping sejajar adalah...',
      options: [
        'memperkecil luas penampang keping $A$',
        'memperbesar jarak antarkeping $d$',
        'menyisipkan bahan dielektrik di antara kedua keping',
        'menurunkan tegangan sumber pengisi kapasitor'
      ],
      answer: 'C',
      hint: 'Ingat rumus $C = \\varepsilon_r\\varepsilon_0 A / d$.',
      solution: 'Kapasitansi keping sejajar $C = \\varepsilon_r\\varepsilon_0\\dfrac{A}{d}$ bertambah jika konstanta dielektrik $\\varepsilon_r$ atau luas $A$ diperbesar, atau jarak $d$ diperkecil. Mengubah tegangan tidak mengubah nilai $C$. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah kapasitor berkapasitas $20\\ \\mu\\text{F}$ dihubungkan dengan sumber tegangan DC $100\\ \\text{V}$ hingga bermuatan penuh. Energi listrik yang tersimpan dalam kapasitor tersebut adalah...',
      options: ['$0{,}1\\ \\text{J}$', '$0{,}2\\ \\text{J}$', '$1{,}0\\ \\text{J}$', '$2{,}0\\ \\text{J}$'],
      answer: 'A',
      hint: 'Gunakan $W = \\dfrac{1}{2} C V^2$ dengan $1\\ \\mu\\text{F} = 10^{-6}\\ \\text{F}$.',
      solution: '$W = \\dfrac{1}{2} \\times 20 \\times 10^{-6} \\times 100^2 = 10 \\times 10^{-6} \\times 10^4 = 0{,}1\\ \\text{J}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dua muatan titik $q_1 = +4\\ \\mu\\text{C}$ dan $q_2 = -9\\ \\mu\\text{C}$ berada di udara pada jarak $30\\ \\text{cm}$ satu sama lain ($k = 9 \\times 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$). Besar dan jenis gaya Coulomb yang bekerja pada masing-masing muatan adalah...',
      options: ['$3{,}6\\ \\text{N}$, tolak-menarik', '$3{,}6\\ \\text{N}$, tarik-menarik', '$1{,}08\\ \\text{N}$, tarik-menarik', '$36\\ \\text{N}$, tolak-menarik'],
      answer: 'B',
      hint: 'Konversi $30\\ \\text{cm} = 0{,}3\\ \\text{m}$, lalu perhatikan bahwa kedua muatan berlawanan tanda.',
      solution: 'Kedua muatan berlawanan tanda sehingga **tarik-menarik**. Besar gayanya:\n$F = \\dfrac{9 \\times 10^9 \\times (4 \\times 10^{-6}) \\times (9 \\times 10^{-6})}{(0{,}3)^2} = \\dfrac{324 \\times 10^{-3}}{9 \\times 10^{-2}} = 3{,}6\\ \\text{N}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dua muatan $q_A = +4\\ \\mu\\text{C}$ dan $q_B = +16\\ \\mu\\text{C}$ terpisah sejauh $12\\ \\text{cm}$. Letak titik P agar kuat medan listrik resultan di titik P bernilai nol adalah...',
      options: ['$3\\ \\text{cm}$ dari $q_A$', '$6\\ \\text{cm}$ dari $q_A$', '$4\\ \\text{cm}$ dari $q_A$', '$4\\ \\text{cm}$ dari $q_B$'],
      answer: 'C',
      hint: 'Karena sejenis, titik P berada di antara $q_A$ dan $q_B$ dengan $E_A = E_B$.',
      solution: 'Misalkan P berjarak $x$ cm dari $q_A$ dan $(12 - x)$ cm dari $q_B$:\n$\\dfrac{4}{x^2} = \\dfrac{16}{(12 - x)^2} \\implies \\dfrac{2}{x} = \\dfrac{4}{12 - x} \\implies 24 - 2x = 4x \\implies x = 4\\ \\text{cm}$ dari $q_A$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Muatan sumber $Q = +6\\ \\mu\\text{C}$ berada di udara ($k = 9 \\times 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$). Usaha yang diperlukan untuk memindahkan muatan uji $q = +2\\ \\mu\\text{C}$ dari titik A yang berjarak $0{,}6\\ \\text{m}$ ke titik B yang berjarak $0{,}2\\ \\text{m}$ dari $Q$ adalah...',
      options: ['$0{,}18\\ \\text{J}$', '$0{,}54\\ \\text{J}$', '$0{,}72\\ \\text{J}$', '$0{,}36\\ \\text{J}$'],
      answer: 'D',
      hint: 'Hitung potensial $V_A$ dan $V_B$ dengan $V = kQ/r$, lalu gunakan $W = q(V_B - V_A)$.',
      solution: '$V_A = \\dfrac{9 \\times 10^9 \\times 6 \\times 10^{-6}}{0{,}6} = 9 \\times 10^4\\ \\text{V}$, dan $V_B = \\dfrac{9 \\times 10^9 \\times 6 \\times 10^{-6}}{0{,}2} = 2{,}7 \\times 10^5\\ \\text{V}$.\n$W = 2 \\times 10^{-6} \\times (2{,}7 \\times 10^5 - 0{,}9 \\times 10^5) = 2 \\times 10^{-6} \\times 1{,}8 \\times 10^5 = 0{,}36\\ \\text{J}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dua kapasitor $C_1 = 6\\ \\mu\\text{F}$ dan $C_2 = 12\\ \\mu\\text{F}$ dihubungkan secara seri, kemudian gabungannya dirangkai paralel dengan kapasitor $C_3 = 4\\ \\mu\\text{F}$. Kapasitansi pengganti seluruh rangkaian adalah...',
      options: ['$8\\ \\mu\\text{F}$', '$22\\ \\mu\\text{F}$', '$2{,}4\\ \\mu\\text{F}$', '$12\\ \\mu\\text{F}$'],
      answer: 'A',
      hint: 'Hitung seri $C_1$ dan $C_2$ terlebih dahulu, lalu jumlahkan secara paralel dengan $C_3$.',
      solution: 'Seri: $\\dfrac{1}{C_{12}} = \\dfrac{1}{6} + \\dfrac{1}{12} = \\dfrac{3}{12} \\implies C_{12} = 4\\ \\mu\\text{F}$.\nParalel dengan $C_3$: $C_{\\text{tot}} = 4 + 4 = 8\\ \\mu\\text{F}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Medan listrik seragam $E = 400\\ \\text{N/C}$ menembus sebuah bidang persegi seluas $0{,}5\\ \\text{m}^2$. Jika garis medan listrik membentuk sudut $30^\\circ$ terhadap **bidang persegi tersebut**, besar fluks listrik yang menembus bidang adalah...',
      options: [
        '$200\\ \\text{N}\\cdot\\text{m}^2/\\text{C}$',
        '$100\\sqrt{3}\\ \\text{N}\\cdot\\text{m}^2/\\text{C}$',
        '$100\\ \\text{N}\\cdot\\text{m}^2/\\text{C}$',
        '$400\\ \\text{N}\\cdot\\text{m}^2/\\text{C}$'
      ],
      answer: 'C',
      hint: 'Sudut $\\theta$ dalam rumus $\\Phi_E = EA\\cos\\theta$ adalah sudut terhadap garis normal bidang, bukan terhadap permukaan bidang.',
      solution: 'Sudut terhadap bidang $30^\\circ$, berarti sudut terhadap garis normal $\\theta = 90^\\circ - 30^\\circ = 60^\\circ$.\n$\\Phi_E = E A \\cos 60^\\circ = 400 \\times 0{,}5 \\times 0{,}5 = 100\\ \\text{N}\\cdot\\text{m}^2/\\text{C}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Kapasitor $C_1 = 4\\ \\mu\\text{F}$ dan $C_2 = 8\\ \\mu\\text{F}$ dirangkai paralel, lalu diserikan dengan $C_3 = 6\\ \\mu\\text{F}$ dan dihubungkan ke baterai $18\\ \\text{V}$. Muatan listrik yang tersimpan pada kapasitor $C_1$ adalah...',
      options: ['$72\\ \\mu\\text{C}$', '$24\\ \\mu\\text{C}$', '$48\\ \\mu\\text{C}$', '$12\\ \\mu\\text{C}$'],
      answer: 'B',
      hint: 'Cari kapasitansi total dan muatan total terlebih dahulu; muatan total sama dengan muatan pada cabang paralel $C_{12}$.',
      solution: '$C_{12} = 4 + 8 = 12\\ \\mu\\text{F}$. Seri dengan $C_3$: $\\dfrac{1}{C_{\\text{tot}}} = \\dfrac{1}{12} + \\dfrac{1}{6} = \\dfrac{3}{12} \\implies C_{\\text{tot}} = 4\\ \\mu\\text{F}$.\n$Q_{\\text{tot}} = C_{\\text{tot}} V = 4 \\times 18 = 72\\ \\mu\\text{C}$.\nKarena $C_{12}$ seri dengan $C_3$, maka $Q_{12} = 72\\ \\mu\\text{C}$, sehingga $V_{12} = \\dfrac{72}{12} = 6\\ \\text{V}$.\nJadi, $Q_1 = C_1 V_{12} = 4 \\times 6 = 24\\ \\mu\\text{C}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah kapasitor keping sejajar berudara berkapasitansi $6\\ \\mu\\text{F}$ dimuati dengan baterai $20\\ \\text{V}$, lalu baterai dilepas. Setelah itu, ruang antarkeping diisi penuh bahan dielektrik berkonstanta $\\varepsilon_r = 4$. Energi yang tersimpan di kapasitor setelah penyisipan dielektrik adalah...',
      options: ['$4{,}8\\ \\text{mJ}$', '$1{,}2\\ \\text{mJ}$', '$0{,}6\\ \\text{mJ}$', '$0{,}3\\ \\text{mJ}$'],
      answer: 'D',
      hint: 'Saat baterai dilepas, muatan $Q$ konstan sedangkan kapasitansi menjadi $\\varepsilon_r C_0$.',
      solution: 'Muatan tetap $Q = C_0 V_0 = 6\\ \\mu\\text{F} \\times 20\\ \\text{V} = 120\\ \\mu\\text{C}$. Kapasitansi baru $C = 4 \\times 6 = 24\\ \\mu\\text{F}$.\n$W = \\dfrac{Q^2}{2C} = \\dfrac{(120 \\times 10^{-6})^2}{2 \\times 24 \\times 10^{-6}} = 300 \\times 10^{-6}\\ \\text{J} = 0{,}3\\ \\text{mJ}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Muatan $q_1 = +3\\ \\mu\\text{C}$ berada $0{,}3\\ \\text{m}$ di sebelah timur muatan uji $q_3 = +2\\ \\mu\\text{C}$, sedangkan muatan $q_2 = +4\\ \\mu\\text{C}$ berada $0{,}3\\ \\text{m}$ di sebelah utara $q_3$ ($k = 9 \\times 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$). Besar resultan gaya Coulomb yang dialami muatan $q_3$ adalah...',
      options: ['$1{,}0\\ \\text{N}$', '$1{,}4\\ \\text{N}$', '$0{,}2\\ \\text{N}$', '$0{,}5\\ \\text{N}$'],
      answer: 'A',
      hint: 'Gaya dari $q_1$ ke barat dan dari $q_2$ ke selatan saling tegak lurus ($90^\\circ$).',
      solution: '$F_1 = \\dfrac{9 \\times 10^9 \\times 3 \\times 10^{-6} \\times 2 \\times 10^{-6}}{0{,}3^2} = 0{,}6\\ \\text{N}$ ke barat.\n$F_2 = \\dfrac{9 \\times 10^9 \\times 4 \\times 10^{-6} \\times 2 \\times 10^{-6}}{0{,}3^2} = 0{,}8\\ \\text{N}$ ke selatan.\nKarena saling tegak lurus, $F_{\\text{res}} = \\sqrt{0{,}6^2 + 0{,}8^2} = 1{,}0\\ \\text{N}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah elektron ($m = 9 \\times 10^{-31}\\ \\text{kg}$, $|q| = 1{,}6 \\times 10^{-19}\\ \\text{C}$) dilepas dari keadaan diam pada pelat berpotensial $0\\ \\text{V}$ dan dipercepat menuju pelat sejajar berpotensial $+45\\ \\text{V}$ dalam ruang hampa. Kelajuan elektron tepat saat mencapai pelat $+45\\ \\text{V}$ adalah...',
      options: ['$2 \\times 10^6\\ \\text{m/s}$', '$1{,}6 \\times 10^7\\ \\text{m/s}$', '$4 \\times 10^6\\ \\text{m/s}$', '$8 \\times 10^6\\ \\text{m/s}$'],
      answer: 'C',
      hint: 'Usaha medan listrik berubah seluruhnya menjadi energi kinetik elektron: $|q|\\Delta V = \\dfrac{1}{2} m v^2$.',
      solution: '$\\dfrac{1}{2} m v^2 = |q|\\Delta V \\implies v = \\sqrt{\\dfrac{2 |q| \\Delta V}{m}} = \\sqrt{\\dfrac{2 \\times 1{,}6 \\times 10^{-19} \\times 45}{9 \\times 10^{-31}}} = \\sqrt{16 \\times 10^{12}} = 4 \\times 10^6\\ \\text{m/s}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah kapasitor $4\\ \\mu\\text{F}$ dimuati hingga tegangan $30\\ \\text{V}$ lalu diputuskan dari baterai. Kapasitor tersebut kemudian dihubungkan paralel dengan sebuah kapasitor $2\\ \\mu\\text{F}$ yang mula-mula tidak bermuatan. Energi listrik yang hilang menjadi panas dan percikan saat kedua kapasitor dihubungkan adalah...',
      options: ['$1{,}8\\ \\text{mJ}$', '$0{,}6\\ \\text{mJ}$', '$1{,}2\\ \\text{mJ}$', '$0\\ \\text{mJ}$'],
      answer: 'B',
      hint: 'Gunakan kekekalan muatan $Q = (C_1 + C_2)V_{\\text{akhir}}$, lalu bandingkan energi awal dan energi akhir.',
      solution: 'Energi awal: $W_0 = \\dfrac{1}{2}(4\\ \\mu\\text{F})(30)^2 = 1.800\\ \\mu\\text{J} = 1{,}8\\ \\text{mJ}$.\nMuatan total tetap $Q = 4 \\times 30 = 120\\ \\mu\\text{C}$. Tegangan akhir gabungan paralel: $V\' = \\dfrac{120}{4 + 2} = 20\\ \\text{V}$.\nEnergi akhir: $W\' = \\dfrac{1}{2}(6\\ \\mu\\text{F})(20)^2 = 1.200\\ \\mu\\text{J} = 1{,}2\\ \\text{mJ}$.\nEnergi yang hilang: $\\Delta W = 1{,}8 - 1{,}2 = 0{,}6\\ \\text{mJ}$. Jawaban: **B**.'
    })
  ]
});
