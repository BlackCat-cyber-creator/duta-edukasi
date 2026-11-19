import { bab, soal } from '../author.js';

export default bab({
  grade: 12,
  number: 2,
  slug: 'redoks-dan-elektrokimia',
  title: 'Reaksi Redoks, Sel Volta, dan Elektrolisis',
  element: 'Pemahaman Kimia: penyetaraan redoks, potensial elektroda standar, deret Volta, sel elektrokimia, korosi, dan Hukum Faraday',
  summary: {
    overview: 'Reaksi reduksi-oksidasi (redoks) melibatkan transfer elektron antara reduktor yang mengalami oksidasi dan oksidator yang mengalami reduksi. Bab ini mengupas penyetaraan reaksi redoks dengan metode setengah reaksi maupun perubahan bilangan oksidasi, prinsip kerja sel Volta sebagai penghasil arus listrik dari reaksi spontan beserta deret Volta, mekanisme korosi logam dan pencegahannya, reaksi pada sel elektrolisis yang digerakkan arus listrik luar, serta perhitungan stoikiometri elektrolisis menggunakan Hukum Faraday I dan II.',
    coreConcepts: [
      'Penyetaraan Reaksi Redoks: Reaksi redoks disetarakan agar jumlah atom dan muatan di ruas kiri sama dengan ruas kanan. Pada metode setengah reaksi dalam suasana asam, kekurangan atom $\\text{O}$ ditambah $\\text{H}_2\\text{O}$ dan kekurangan $\\text{H}$ ditambah $\\text{H}^+$; dalam suasana basa, ruas kelebihan $\\text{O}$ ditambah $\\text{H}_2\\text{O}$ dan ruas seberangnya ditambah $2\\text{OH}^-$ per atom $\\text{O}$.',
      'Sel Volta dan Potensial Sel Standar: Sel Volta mengubah energi kimia menjadi energi listrik melalui reaksi redoks spontan ($E^\\circ_{\\text{sel}} > 0$). Anoda adalah kutub negatif tempat terjadinya oksidasi, sedangkan katoda adalah kutub positif tempat terjadinya reduksi. Elektron mengalir melalui rangkaian luar dari anoda menuju katoda, sementara jembatan garam menyeimbangkan muatan ion.',
      'Deret Volta dan Kereaktifan Logam: Deret Volta mengurutkan logam berdasarkan potensial reduksi standar ($E^\\circ$) dari paling negatif (reduktor kuat, mudah teroksidasi) ke paling positif (oksidator ion kuat, mudah tereduksi): $\\text{Li}-\\text{K}-\\text{Ba}-\\text{Ca}-\\text{Na}-\\text{Mg}-\\text{Al}-\\text{Mn}-\\text{Zn}-\\text{Cr}-\\text{Fe}-\\text{Ni}-\\text{Sn}-\\text{Pb}-(\\text{H})-\\text{Cu}-\\text{Hg}-\\text{Ag}-\\text{Pt}-\\text{Au}$. Logam di sebelah kiri mampu mendesak ion logam di sebelah kanannya.',
      'Korosi Besi dan Cara Pencegahannya: Korosi adalah oksidasi logam oleh oksigen dan air membentuk oksida terhidrasi seperti $\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$. Korosi dipercepat oleh elektrolit, asam, dan kontak dengan logam lebih mulia ($E^\\circ$ lebih besar), serta dapat dicegah melalui pelapisan cat/minyak, elektroplating, paduan logam, atau proteksi katodik memakai anoda korban seperti $\\text{Mg}$ atau $\\text{Zn}$.',
      'Sel Elektrolisis dan Hukum Faraday: Sel elektrolisis menggunakan energi listrik untuk memaksa reaksi redoks tak spontan terjadi (katoda kutub negatif reduksi; anoda kutub positif oksidasi). Massa zat yang dihasilkan sebanding dengan muatan listrik yang mengalir ($Q = I \\cdot t$), dengan $1\\text{ Faraday} = 96.500\\text{ C/mol } e^-$.'
    ],
    keyFormulas: [
      { label: 'Potensial Sel Standar Volta', formula: 'E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = E^\\circ_{\\text{reduksi}} - E^\\circ_{\\text{oksidasi}}' },
      { label: 'Hukum Faraday I', formula: 'w = \\dfrac{e \\cdot I \\cdot t}{96500} \\qquad e = \\dfrac{A_r}{\\text{valensi } (n_{e^-})}' },
      { label: 'Jumlah Mol Elektron', formula: 'n_{e^-} = \\dfrac{Q}{96500} = \\dfrac{I \\cdot t}{96500}' },
      { label: 'Hukum Faraday II (Seri)', formula: '\\dfrac{w_1}{w_2} = \\dfrac{e_1}{e_2}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung potensial sel standar dan menentukan notasi sel Volta',
        problem: 'Diketahui $E^\\circ(\\text{Al}^{3+}/\\text{Al}) = -1{,}66\\text{ V}$ dan $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0{,}34\\text{ V}$. Tentukan anoda, katoda, notasi sel, serta nilai $E^\\circ_{\\text{sel}}$.',
        solution: '$E^\\circ(\\text{Cu}^{2+}/\\text{Cu})$ lebih besar sehingga $\\text{Cu}$ bertindak sebagai **katoda** (reduksi), sedangkan $\\text{Al}$ sebagai **anoda** (oksidasi). Notasi selnya adalah $\\text{Al}(s) \\mid \\text{Al}^{3+}(aq) \\parallel \\text{Cu}^{2+}(aq) \\mid \\text{Cu}(s)$. Nilai $E^\\circ_{\\text{sel}} = +0{,}34 - (-1{,}66) = \\mathbf{+2{,}00\\text{ V}}$ (reaksi berlangsung spontan).'
      },
      {
        title: 'Menentukan produk elektrolisis larutan garam dengan elektroda inert',
        problem: 'Tuliskan reaksi di katoda dan anoda pada elektrolisis larutan $\\text{KI}$ dengan elektroda platina ($\\text{Pt}$).',
        solution: 'Pada katoda, ion $\\text{K}^+$ (golongan IA) tidak tereduksi dalam larutan berair, sehingga air yang tereduksi: $2\\text{H}_2\\text{O}(l) + 2e^- \\longrightarrow \\text{H}_2(g) + 2\\text{OH}^-(aq)$. Pada anoda inert, ion halida $\\text{I}^-$ teroksidasi menjadi iodin: $2\\text{I}^-(aq) \\longrightarrow \\text{I}_2(s) + 2e^-$.'
      },
      {
        title: 'Menghitung massa endapan menggunakan Hukum Faraday I',
        problem: 'Larutan $\\text{AgNO}_3$ ($A_r\\text{ Ag} = 108$) dielektrolisis menggunakan arus listrik $5\\text{ A}$ selama $1930\\text{ detik}$. Berapa gram perak yang mengendap di katoda?',
        solution: 'Pada katoda terjadi $\\text{Ag}^+ + e^- \\longrightarrow \\text{Ag}$ sehingga valensi $= 1$ dan $e = \\dfrac{108}{1} = 108$. Dengan Hukum Faraday I, $w = \\dfrac{108 \\times 5 \\times 1930}{96500} = 108 \\times \\dfrac{9650}{96500} = 108 \\times 0{,}1 = \\mathbf{10{,}8\\text{ g}}$.'
      }
    ],
    misconceptions: [
      'Menganggap tanda kutub anoda dan katoda sama antara sel Volta dan sel elektrolisis. Pada kedua sel, anoda selalu tempat oksidasi dan katoda selalu tempat reduksi, tetapi muatan kutubnya terbalik (Volta: Anoda $-$, Katoda $+$; Elektrolisis: Anoda $+$, Katoda $-$).',
      'Mengalikan nilai $E^\\circ$ dengan koefisien reaksi ketika menyetarakan persamaan setengah reaksi. Potensial elektroda standar adalah sifat intensif sehingga nilainya tidak dikalikan koefisien stoikiometri.',
      'Mengira kation golongan IA, IIA, $\\text{Al}^{3+}$, atau $\\text{Mn}^{2+}$ tereduksi pada elektrolisis larutan berair; dalam larutan berair yang tereduksi di katoda adalah air ($\\text{H}_2\\text{O}$), kecuali pada leburan/lelehan garamnya.',
      'Menganggap tembaga atau timah yang melapisi besi melindungi besi seperti anoda korban, padahal jika lapisan tergores, besi ($E^\\circ$ lebih negatif) justru menjadi anoda dan berkarat lebih cepat.'
    ],
    tutorTip: 'Hafalkan akronim **KRAO** (**K**atoda **R**eduksi, **A**noda **O**ksidasi) untuk semua jenis sel, serta **KPAN** (**K**atoda **P**ositif, **A**noda **N**egatif) khusus untuk sel Volta, dan **KNAP** untuk sel Elektrolisis.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Bilangan oksidasi atom kromium ($\\text{Cr}$) dalam ion dikromat $\\text{Cr}_2\\text{O}_7^{2-}$ adalah...',
      options: [
        '$+3$',
        '$+4$',
        '$+6$',
        '$+7$'
      ],
      answer: 'C',
      hint: 'Jumlah bilangan oksidasi seluruh atom dalam ion poliatomik sama dengan muatan ion tersebut, dengan biloks $\\text{O} = -2$.',
      solution: 'Misalkan biloks $\\text{Cr} = x$. Maka $2x + 7(-2) = -2 \\implies 2x - 14 = -2 \\implies 2x = +12$, sehingga $x = \\mathbf{+6}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pernyataan yang benar mengenai cara kerja sel Volta adalah...',
      options: [
        'anoda bermuatan negatif dan menjadi tempat terjadinya reaksi oksidasi',
        'katoda bermuatan negatif dan menjadi tempat terjadinya reaksi reduksi',
        'elektron mengalir dari katoda menuju anoda melalui jembatan garam',
        'reaksi di dalam sel berlangsung tidak spontan dengan $E^\\circ_{\\text{sel}} < 0$'
      ],
      answer: 'A',
      hint: 'Ingat sel Volta menghasilkan listrik secara spontan (KPAN dan KRAO).',
      solution: 'Pada sel Volta, reaksi redoks berlangsung spontan ($E^\\circ_{\\text{sel}} > 0$). Anoda bermuatan negatif (tempat oksidasi) melepaskan elektron yang mengalir lewat kawat luar menuju katoda bermuatan positif (tempat reduksi). Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Perhatikan persamaan reaksi redoks setara berikut:\n$$2\\text{Fe}^{3+}(aq) + \\text{Sn}^{2+}(aq) \\longrightarrow 2\\text{Fe}^{2+}(aq) + \\text{Sn}^{4+}(aq)$$\nSpesi yang berperan sebagai reduktor adalah...',
      options: [
        '$\\text{Fe}^{3+}$',
        '$\\text{Fe}^{2+}$',
        '$\\text{Sn}^{4+}$',
        '$\\text{Sn}^{2+}$'
      ],
      answer: 'D',
      hint: 'Reduktor adalah pereaksi yang mengalami kenaikan bilangan oksidasi (oksidasi).',
      solution: 'Biloks $\\text{Sn}$ naik dari $+2$ pada $\\text{Sn}^{2+}$ menjadi $+4$ pada $\\text{Sn}^{4+}$ (mengalami oksidasi), sedangkan biloks $\\text{Fe}$ turun dari $+3$ menjadi $+2$. Dengan demikian, reduktornya adalah **$\\text{Sn}^{2+}$**. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Untuk melindungi pipa besi ($E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0{,}44\\text{ V}$) di bawah tanah dari korosi dengan metode proteksi katodik (anoda korban), logam yang paling efektif dihubungkan dengan pipa besi adalah...',
      options: [
        'tembaga ($E^\\circ = +0{,}34\\text{ V}$)',
        'magnesium ($E^\\circ = -2{,}37\\text{ V}$)',
        'timah ($E^\\circ = -0{,}14\\text{ V}$)',
        'perak ($E^\\circ = +0{,}80\\text{ V}$)'
      ],
      answer: 'B',
      hint: 'Pilih logam dengan $E^\\circ$ lebih negatif daripada besi agar lebih mudah teroksidasi sebagai anoda.',
      solution: 'Anoda korban harus memiliki potensial reduksi standar lebih negatif dari besi ($-0{,}44\\text{ V}$) sehingga logam tersebut teroksidasi menggantikan besi. Di antara pilihan, hanya **magnesium** ($-2{,}37\\text{ V}$) yang lebih negatif dari besi. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada elektrolisis larutan $\\text{CuSO}_4$ menggunakan elektroda platina ($\\text{Pt}$), reaksi yang berlangsung di katoda adalah...',
      options: [
        '$2\\text{H}_2\\text{O}(l) + 2e^- \\longrightarrow \\text{H}_2(g) + 2\\text{OH}^-(aq)$',
        '$2\\text{H}_2\\text{O}(l) \\longrightarrow \\text{O}_2(g) + 4\\text{H}^+(aq) + 4e^-$',
        '$\\text{Cu}^{2+}(aq) + 2e^- \\longrightarrow \\text{Cu}(s)$',
        '$\\text{Cu}(s) \\longrightarrow \\text{Cu}^{2+}(aq) + 2e^-$'
      ],
      answer: 'C',
      hint: 'Ion $\\text{Cu}^{2+}$ bukan kation golongan IA, IIA, $\\text{Al}^{3+}$, atau $\\text{Mn}^{2+}$, sehingga ion logamnya langsung tereduksi di katoda.',
      solution: 'Di katoda terjadi reaksi reduksi. Karena $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) > E^\\circ(\\text{H}_2\\text{O}/\\text{H}_2)$, kation $\\text{Cu}^{2+}$ tereduksi langsung menjadi logam tembaga: $\\text{Cu}^{2+}(aq) + 2e^- \\longrightarrow \\text{Cu}(s)$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Diberikan persamaan reaksi redoks dalam suasana asam berikut:\n$$a\\,\\text{MnO}_4^-(aq) + b\\,\\text{Fe}^{2+}(aq) + c\\,\\text{H}^+(aq) \\longrightarrow d\\,\\text{Mn}^{2+}(aq) + e\\,\\text{Fe}^{3+}(aq) + f\\,\\text{H}_2\\text{O}(l)$$\nNilai koefisien reaksi $a$, $b$, dan $c$ berturut-turut setelah disetarakan adalah...',
      options: [
        '$1$, $5$, dan $8$',
        '$2$, $5$, dan $16$',
        '$1$, $5$, dan $4$',
        '$1$, $3$, dan $8$'
      ],
      answer: 'A',
      hint: 'Biloks $\\text{Mn}$ turun $5$ satuan ($+7 \\to +2$), sedangkan biloks $\\text{Fe}$ naik $1$ satuan ($+2 \\to +3$).',
      solution: 'Agar serah-terima elektron setara, $1\\text{ mol } \\text{MnO}_4^-$ ($\\Delta\\text{biloks} = 5$) dipasangkan dengan $5\\text{ mol } \\text{Fe}^{2+}$ ($\\Delta\\text{biloks} = 1$). Empat atom $\\text{O}$ menghasilkan $4\\text{H}_2\\text{O}$, sehingga diperlukan $8\\text{H}^+$: $\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\longrightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$. Jadi $a=1$, $b=5$, $c=8$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Diketahui data potensial reduksi standar:\n$$\\text{Zn}^{2+}(aq) + 2e^- \\longrightarrow \\text{Zn}(s) \\quad E^\\circ = -0{,}76\\text{ V}$$\n$$\\text{Ag}^+(aq) + e^- \\longrightarrow \\text{Ag}(s) \\quad E^\\circ = +0{,}80\\text{ V}$$\nNotasi sel Volta dan nilai $E^\\circ_{\\text{sel}}$ yang dihasilkan dari kedua elektroda tersebut adalah...',
      options: [
        '$\\text{Ag}(s) \\mid \\text{Ag}^+(aq) \\parallel \\text{Zn}^{2+}(aq) \\mid \\text{Zn}(s)$ dengan $E^\\circ_{\\text{sel}} = +1{,}56\\text{ V}$',
        '$\\text{Zn}(s) \\mid \\text{Zn}^{2+}(aq) \\parallel \\text{Ag}^+(aq) \\mid \\text{Ag}(s)$ dengan $E^\\circ_{\\text{sel}} = +0{,}04\\text{ V}$',
        '$\\text{Zn}(s) \\mid \\text{Zn}^{2+}(aq) \\parallel \\text{Ag}^+(aq) \\mid \\text{Ag}(s)$ dengan $E^\\circ_{\\text{sel}} = +2{,}36\\text{ V}$',
        '$\\text{Zn}(s) \\mid \\text{Zn}^{2+}(aq) \\parallel \\text{Ag}^+(aq) \\mid \\text{Ag}(s)$ dengan $E^\\circ_{\\text{sel}} = +1{,}56\\text{ V}$'
      ],
      answer: 'D',
      hint: 'Notasi sel ditulis: Anoda $|$ Ion anoda $||$ Ion katoda $|$ Katoda, dan $E^\\circ$ tidak dikalikan koefisien reaksi.',
      solution: 'Karena $E^\\circ(\\text{Ag}^+/\\text{Ag}) > E^\\circ(\\text{Zn}^{2+}/\\text{Zn})$, $\\text{Zn}$ menjadi anoda dan $\\text{Ag}$ menjadi katoda. Notasi sel: $\\text{Zn}(s) \\mid \\text{Zn}^{2+}(aq) \\parallel \\text{Ag}^+(aq) \\mid \\text{Ag}(s)$ dengan $E^\\circ_{\\text{sel}} = +0{,}80 - (-0{,}76) = \\mathbf{+1{,}56\\text{ V}}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pada elektrolisis larutan $\\text{Na}_2\\text{SO}_4$ menggunakan elektroda grafit ($\\text{C}$), hasil reaksi yang terbentuk di ruang katoda dan ruang anoda berturut-turut adalah...',
      options: [
        'logam $\\text{Na}$ di katoda dan gas $\\text{O}_2$ (suasana asam) di anoda',
        'gas $\\text{H}_2$ (suasana basa) di katoda dan gas $\\text{O}_2$ (suasana asam) di anoda',
        'gas $\\text{O}_2$ (suasana asam) di katoda dan gas $\\text{H}_2$ (suasana basa) di anoda',
        'gas $\\text{H}_2$ di katoda dan gas $\\text{SO}_2$ di anoda'
      ],
      answer: 'B',
      hint: 'Baik $\\text{Na}^+$ maupun sisa asam oksi $\\text{SO}_4^{2-}$ tidak bereaksi dalam larutan berair, sehingga air yang tereduksi di katoda dan teroksidasi di anoda.',
      solution: 'Di katoda, air tereduksi menjadi $\\text{H}_2(g) + 2\\text{OH}^-$ (basa). Di anoda inert, $\\text{SO}_4^{2-}$ tidak teroksidasi sehingga air teroksidasi menjadi $\\text{O}_2(g) + 4\\text{H}^+$ (asam). Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Larutan $\\text{CuSO}_4$ ($A_r\\text{ Cu} = 63{,}5$) dielektrolisis menggunakan arus listrik $10\\text{ A}$ selama $965\\text{ detik}$. Massa tembaga yang mengendap di katoda adalah...',
      options: [
        '$6{,}35\\text{ g}$',
        '$1{,}588\\text{ g}$',
        '$3{,}175\\text{ g}$',
        '$12{,}70\\text{ g}$'
      ],
      answer: 'C',
      hint: 'Pada reduksi $\\text{Cu}^{2+} + 2e^- \\longrightarrow \\text{Cu}$, massa ekuivalen $e = \\dfrac{A_r}{2}$.',
      solution: 'Dengan Hukum Faraday I, $w = \\dfrac{e \\cdot I \\cdot t}{96500} = \\dfrac{(63{,}5 / 2) \\times 10 \\times 965}{96500} = 31{,}75 \\times 0{,}1 = \\mathbf{3{,}175\\text{ g}}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Empat batang paku besi identik ditempatkan dalam kondisi berbeda selama satu minggu. Kondisi yang menyebabkan paku besi paling lambat mengalami korosi adalah...',
      options: [
        'paku direndam seluruhnya dalam minyak pelumas kering pada tabung tertutup',
        'paku direndam setengah bagian dalam larutan garam dapur $\\text{NaCl}$ $1\\text{ M}$',
        'paku dililit kawat tembaga lalu direndam dalam air keran',
        'paku diletakkan di udara terbuka yang lembap dan mengandung uap asam'
      ],
      answer: 'A',
      hint: 'Korosi besi memerlukan kontak langsung dengan oksigen ($\\text{O}_2$) dan air ($\\text{H}_2\\text{O}$).',
      solution: 'Minyak pelumas kering dalam tabung tertutup mengisolasi permukaan besi dari $\\text{O}_2$ dan $\\text{H}_2\\text{O}$, sedangkan larutan garam, kontak dengan $\\text{Cu}$ ($E^\\circ$ lebih positif), dan suasana asam justru mempercepat perkaratan besi. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Perhatikan reaksi redoks disproporsionasi dalam suasana basa (belum setara) berikut:\n$$\\text{Cl}_2(g) + \\text{OH}^-(aq) \\longrightarrow \\text{Cl}^-(aq) + \\text{ClO}_3^-(aq) + \\text{H}_2\\text{O}(l)$$\nUntuk mereaksikan tepat $3\\text{ mol}$ gas $\\text{Cl}_2$ secara sempurna, jumlah mol ion $\\text{OH}^-$ yang diperlukan adalah...',
      options: [
        '$3\\text{ mol}$',
        '$4\\text{ mol}$',
        '$5\\text{ mol}$',
        '$6\\text{ mol}$'
      ],
      answer: 'D',
      hint: 'Setarakan setengah reaksi $\\text{Cl}_2 \\to 2\\text{Cl}^-$ ($2e^-$) dan $\\text{Cl}_2 \\to 2\\text{ClO}_3^-$ ($10e^-$) dalam suasana basa.',
      solution: 'Setengah reaksi reduksi (dikali $5$): $5\\text{Cl}_2 + 10e^- \\longrightarrow 10\\text{Cl}^-$. Setengah reaksi oksidasi: $\\text{Cl}_2 + 12\\text{OH}^- \\longrightarrow 2\\text{ClO}_3^- + 6\\text{H}_2\\text{O} + 10e^-$. Penjumlahan menghasilkan $6\\text{Cl}_2 + 12\\text{OH}^- \\longrightarrow 10\\text{Cl}^- + 2\\text{ClO}_3^- + 6\\text{H}_2\\text{O}$, yang disederhanakan menjadi $3\\text{Cl}_2 + 6\\text{OH}^- \\longrightarrow 5\\text{Cl}^- + \\text{ClO}_3^- + 3\\text{H}_2\\text{O}$. Jadi $3\\text{ mol}$ $\\text{Cl}_2$ memerlukan **$\\mathbf{6\\text{ mol}}$** $\\text{OH}^-$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Diketahui data potensial reduksi standar sebagai berikut:\n$$\\text{Mg}^{2+} + 2e^- \\longrightarrow \\text{Mg} \\quad E^\\circ = -2{,}37\\text{ V}$$\n$$\\text{Fe}^{2+} + 2e^- \\longrightarrow \\text{Fe} \\quad E^\\circ = -0{,}44\\text{ V}$$\n$$\\text{Cu}^{2+} + 2e^- \\longrightarrow \\text{Cu} \\quad E^\\circ = +0{,}34\\text{ V}$$\nReaksi sel yang berlangsung spontan sekaligus menghasilkan potensial sel standar $E^\\circ_{\\text{sel}} = +2{,}71\\text{ V}$ adalah...',
      options: [
        '$\\text{Mg}(s) + \\text{Fe}^{2+}(aq) \\longrightarrow \\text{Mg}^{2+}(aq) + \\text{Fe}(s)$',
        '$\\text{Mg}(s) + \\text{Cu}^{2+}(aq) \\longrightarrow \\text{Mg}^{2+}(aq) + \\text{Cu}(s)$',
        '$\\text{Fe}(s) + \\text{Mg}^{2+}(aq) \\longrightarrow \\text{Fe}^{2+}(aq) + \\text{Mg}(s)$',
        '$\\text{Cu}(s) + \\text{Fe}^{2+}(aq) \\longrightarrow \\text{Cu}^{2+}(aq) + \\text{Fe}(s)$'
      ],
      answer: 'B',
      hint: 'Hitung $E^\\circ_{\\text{sel}} = E^\\circ_{\\text{reduksi}} - E^\\circ_{\\text{oksidasi}}$ pada tiap opsi.',
      solution: 'Untuk reaksi $\\text{Mg}(s) + \\text{Cu}^{2+}(aq) \\longrightarrow \\text{Mg}^{2+}(aq) + \\text{Cu}(s)$, $\\text{Cu}^{2+}$ tereduksi ($+0{,}34\\text{ V}$) dan $\\text{Mg}$ teroksidasi ($-2{,}37\\text{ V}$), sehingga $E^\\circ_{\\text{sel}} = +0{,}34 - (-2{,}37) = \\mathbf{+2{,}71\\text{ V}} > 0$ (spontan). Reaksi $\\text{Mg} + \\text{Fe}^{2+}$ hanya menghasilkan $+1{,}93\\text{ V}$, sedangkan dua opsi lain bernilai negatif (tidak spontan). Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dua sel elektrolisis yang disusun seri masing-masing berisi larutan $\\text{AgNO}_3$ ($A_r\\text{ Ag} = 108$) dan larutan $\\text{CrCl}_3$ ($A_r\\text{ Cr} = 52$) dengan elektroda inert. Jika pada sel pertama mengendap $16{,}2\\text{ g}$ perak, massa kromium yang mengendap di katoda sel kedua adalah...',
      options: [
        '$1{,}3\\text{ g}$',
        '$5{,}2\\text{ g}$',
        '$2{,}6\\text{ g}$',
        '$7{,}8\\text{ g}$'
      ],
      answer: 'C',
      hint: 'Gunakan Hukum Faraday II ($\\dfrac{w_1}{e_1} = \\dfrac{w_2}{e_2}$) dengan $e_{\\text{Ag}} = \\dfrac{108}{1}$ dan $e_{\\text{Cr}} = \\dfrac{52}{3}$.',
      solution: 'Jumlah mol elektron yang mengalir sama pada kedua sel: $n_{e^-} = n_{\\text{Ag}} = \\dfrac{16{,}2}{108} = 0{,}15\\text{ mol}$. Pada sel kedua, $\\text{Cr}^{3+} + 3e^- \\longrightarrow \\text{Cr}$, sehingga $n_{\\text{Cr}} = \\dfrac{0{,}15}{3} = 0{,}05\\text{ mol}$ dan massa $\\text{Cr} = 0{,}05 \\times 52 = \\mathbf{2{,}6\\text{ g}}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak $500\\text{ mL}$ larutan $\\text{NaCl}$ $0{,}2\\text{ M}$ dielektrolisis dengan elektroda $\\text{Pt}$ menggunakan muatan listrik $0{,}05\\text{ Faraday}$. Jika volume larutan dianggap tetap, $\\text{pH}$ larutan setelah elektrolisis adalah...',
      options: [
        '$12$',
        '$13$',
        '$11$',
        '$1$'
      ],
      answer: 'B',
      hint: 'Hitung mol $\\text{OH}^-$ yang terbentuk di katoda dari reaksi $2\\text{H}_2\\text{O} + 2e^- \\longrightarrow \\text{H}_2 + 2\\text{OH}^-$ dan pastikan $\\text{Cl}^-$ di anoda belum habis.',
      solution: 'Mol $\\text{Cl}^-$ awal $= 0{,}5 \\times 0{,}2 = 0{,}10\\text{ mol}$, sehingga muatan $0{,}05\\text{ F}$ hanya mengoksidasi separuh $\\text{Cl}^-$ di anoda tanpa menghasilkan $\\text{H}^+$. Di katoda, $2\\text{ mol } e^-$ menghasilkan $2\\text{ mol } \\text{OH}^-$, sehingga $n_{\\text{OH}^-} = 0{,}05\\text{ mol}$. Maka $[\\text{OH}^-] = \\dfrac{0{,}05}{0{,}5} = 0{,}1\\text{ M}$, $\\text{pOH} = 1$, dan $\\text{pH} = 14 - 1 = \\mathbf{13}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Arus listrik sebesar $19{,}3\\text{ A}$ dialirkan selama $500\\text{ detik}$ untuk mengelektrolisis larutan $\\text{CuSO}_4$ menggunakan elektroda grafit. Volume total gas yang terbentuk pada keadaan STP ($V_m = 22{,}4\\text{ L/mol}$) adalah...',
      options: [
        '$2{,}24\\text{ L}$',
        '$1{,}12\\text{ L}$',
        '$0{,}28\\text{ L}$',
        '$0{,}56\\text{ L}$'
      ],
      answer: 'D',
      hint: 'Di katoda terbentuk endapan logam $\\text{Cu}$ (bukan gas), sedangkan di anoda inert air teroksidasi menghasilkan gas $\\text{O}_2$ ($4e^-$ per $1\\text{ mol O}_2$).',
      solution: 'Jumlah mol elektron $n_{e^-} = \\dfrac{19{,}3 \\times 500}{96500} = \\dfrac{9650}{96500} = 0{,}1\\text{ mol}$. Di katoda $\\text{Cu}^{2+}$ tereduksi menjadi padatan $\\text{Cu}$, sedangkan di anoda inert terjadi $2\\text{H}_2\\text{O} \\longrightarrow 4\\text{H}^+ + \\text{O}_2(g) + 4e^-$. Maka $n_{\\text{O}_2} = \\dfrac{0{,}1}{4} = 0{,}025\\text{ mol}$ dan $V_{\\text{O}_2}(\\text{STP}) = 0{,}025 \\times 22{,}4 = \\mathbf{0{,}56\\text{ L}}$. Jawaban: **D**.'
    })
  ]
});
