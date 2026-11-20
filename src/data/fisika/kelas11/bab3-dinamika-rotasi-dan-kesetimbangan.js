import { bab, soal } from '../author.js';

export default bab({
  grade: 11,
  number: 3,
  slug: 'dinamika-rotasi-dan-kesetimbangan',
  title: 'Dinamika Rotasi dan Kesetimbangan Benda Tegar',
  element: 'Pemahaman Fisika: mekanika, dinamika rotasi, dan kesetimbangan benda tegar',
  summary: {
    overview: 'Mengapa gagang pintu dipasang jauh dari engsel, bagaimana penari es dapat mempercepat putarannya hanya dengan merapatkan tangan, dan mengapa tangga bisa tergelincir jika terlalu landai? Bab ini membahas torsi (momen gaya), momen inersia benda tegar, Hukum II Newton untuk gerak rotasi dan gerak menggelinding, hukum kekekalan momentum sudut, syarat kesetimbangan statis benda tegar, serta penentuan titik berat benda.',
    coreConcepts: [
      'Momen Gaya (Torsi): Torsi ($\\tau$) adalah besaran yang menyebabkan benda berputar terhadap suatu poros: $\\tau = r F \\sin\\theta$, dengan $r$ jarak dari poros ke titik kerja gaya dan $\\theta$ sudut antara $\\vec{r}$ dan $\\vec{F}$. Gaya yang garis kerjanya melewati poros ($\\theta = 0^\\circ$ atau $180^\\circ$) menghasilkan torsi nol. Tanda torsi dibedakan berdasarkan kecenderungan putaran searah atau berlawanan jarum jam.',
      'Momen Inersia Partikel dan Benda Tegar: Momen inersia ($I$) mengukur kelembaman benda terhadap perubahan gerak rotasi. Untuk sistem partikel diskret $I = \\sum m_i r_i^2$, sedangkan untuk benda tegar simetris berbentuk $I = k m R^2$: silinder pejal $k = \\tfrac{1}{2}$, silinder tipis berongga $k = 1$, bola pejal $k = \\tfrac{2}{5}$, dan bola berongga $k = \\tfrac{2}{3}$. Batang homogen bermassa $m$ dan panjang $L$ memiliki $I = \\tfrac{1}{12}mL^2$ di pusat dan $I = \\tfrac{1}{3}mL^2$ di ujung.',
      'Hukum II Newton Rotasi dan Gerak Menggelinding: Hubungan torsi total dengan percepatan sudut adalah $\\Sigma\\tau = I\\alpha$. Benda yang menggelinding tanpa selip memadukan gerak translasi dan rotasi ($v = \\omega R$, $a = \\alpha R$), sehingga energi kinetik totalnya $E_k = \\tfrac{1}{2}mv^2 + \\tfrac{1}{2}I\\omega^2 = \\tfrac{1}{2}mv^2(1 + k)$ dan percepatannya menuruni bidang miring adalah $a = \\dfrac{g\\sin\\theta}{1 + k}$.',
      'Momentum Sudut dan Kekekalannya: Momentum sudut benda berputar didefinisikan sebagai $L = I\\omega$. Jika resultan torsi eksternal terhadap poros nol ($\\Sigma\\tau = 0$), momentum sudut sistem kekal: $I_1\\omega_1 = I_2\\omega_2$. Ketika penari es merapatkan lengannya, momen inersia $I$ mengecil sehingga kecepatan sudut $\\omega$ meningkat.',
      'Syarat Kesetimbangan Benda Tegar: Benda tegar berada dalam kesetimbangan statis bila tidak mengalami percepatan translasi maupun rotasi, yakni memenuhi syarat $\\Sigma F_x = 0$, $\\Sigma F_y = 0$, dan $\\Sigma\\tau = 0$ terhadap titik poros mana pun yang dipilih.',
      'Titik Berat Benda: Titik berat adalah titik tangkap resultan gaya berat seluruh bagian benda. Untuk gabungan bangun datar homogen dengan luas $A_i$ dan titik berat $(x_i, y_i)$, koordinat titik berat gabungan ditentukan oleh $x_0 = \\dfrac{\\sum A_i x_i}{\\sum A_i}$ dan $y_0 = \\dfrac{\\sum A_i y_i}{\\sum A_i}$. Kesetimbangan benda dapat bersifat stabil, labil, atau netral.'
    ],
    keyFormulas: [
      { label: 'Momen gaya (torsi)', formula: '\\tau = r F \\sin\\theta' },
      { label: 'Momen inersia & Hukum II Newton rotasi', formula: 'I = \\sum m_i r_i^2 \\qquad \\Sigma\\tau = I\\alpha' },
      { label: 'Energi kinetik menggelinding', formula: 'E_{k,\\text{tot}} = \\tfrac{1}{2}mv^2 + \\tfrac{1}{2}I\\omega^2 = \\tfrac{1}{2}mv^2\\left(1 + \\dfrac{I}{mR^2}\\right)' },
      { label: 'Kekekalan momentum sudut', formula: 'L = I\\omega \\qquad I_1\\omega_1 = I_2\\omega_2' },
      { label: 'Kesetimbangan & titik berat', formula: '\\Sigma F = 0,\\ \\Sigma\\tau = 0 \\qquad x_0 = \\dfrac{\\sum A_i x_i}{\\sum A_i},\\quad y_0 = \\dfrac{\\sum A_i y_i}{\\sum A_i}' }
    ],
    workedExamples: [
      {
        title: 'Resultan torsi pada batang',
        problem: 'Batang ringan AC sepanjang $4\\text{ m}$ berporos di titik A. Pada jarak $2\\text{ m}$ dari A bekerja gaya $F_1 = 15\\text{ N}$ tegak lurus batang ke atas, dan di ujung C ($4\\text{ m}$ dari A) bekerja gaya $F_2 = 20\\text{ N}$ ke bawah membentuk sudut $30^\\circ$ terhadap batang. Hitung resultan torsi terhadap poros A.',
        solution: 'Torsi $F_1$ memutar berlawanan jarum jam: $\\tau_1 = 2 \\times 15 \\times \\sin 90^\\circ = 30\\text{ N}\\cdot\\text{m}$.\nTorsi $F_2$ memutar searah jarum jam: $\\tau_2 = 4 \\times 20 \\times \\sin 30^\\circ = 40\\text{ N}\\cdot\\text{m}$.\nResultan torsi: $\\Sigma\\tau = 40 - 30 = 10\\text{ N}\\cdot\\text{m}$ searah jarum jam.'
      },
      {
        title: 'Katrol bermassa menarik beban',
        problem: 'Katrol berbentuk silinder pejal bermassa $4\\text{ kg}$ ($I = \\tfrac{1}{2}m_k R^2$) berputar bebas pada porosnya. Tali yang melilit katrol digantungi beban bermassa $6\\text{ kg}$ ($g = 10\\text{ m/s}^2$). Tentukan percepatan turunnya beban.',
        solution: 'Pada beban: $mg - T = ma$. Pada katrol: $TR = I\\alpha = \\tfrac{1}{2}m_k R^2 \\cdot \\dfrac{a}{R} \\Rightarrow T = \\tfrac{1}{2}m_k a$.\nGabungkan keduanya: $mg = (m + \\tfrac{1}{2}m_k)a \\Rightarrow 60 = (6 + 2)a \\Rightarrow a = 7{,}5\\text{ m/s}^2$.'
      },
      {
        title: 'Titik berat bidang homogen bentuk huruf L',
        problem: 'Sebuah pelat tipis homogen terdiri atas persegi panjang mendatar $6\\text{ cm} \\times 2\\text{ cm}$ ($x \\in [0,6], y \\in [0,2]$) dan persegi panjang tegak $2\\text{ cm} \\times 4\\text{ cm}$ di kiri atasnya ($x \\in [0,2], y \\in [2,6]$). Tentukan koordinat titik berat pelat.',
        solution: 'Bagian 1: $A_1 = 12\\text{ cm}^2$, $(x_1, y_1) = (3, 1)$.\nBagian 2: $A_2 = 8\\text{ cm}^2$, $(x_2, y_2) = (1, 4)$.\n$x_0 = \\dfrac{12(3) + 8(1)}{12 + 8} = \\dfrac{44}{20} = 2{,}2\\text{ cm}$, dan $y_0 = \\dfrac{12(1) + 8(4)}{20} = 2{,}2\\text{ cm}$.'
      }
    ],
    misconceptions: [
      'Menganggap torsi selalu sama dengan $r \\times F$ tanpa memperhitungkan sudut kerja gaya. Jika gaya sejajar dengan lengan posisi ($\\theta = 0^\\circ$), torsinya nol.',
      'Mengira benda bermassa lebih besar akan lebih cepat menuruni bidang miring saat menggelinding. Percepatan menggelinding bergantung pada faktor bentuk $k = I/(mR^2)$, bukan massa maupun jari-jarinya.',
      'Menganggap benda yang memenuhi $\\Sigma F = 0$ pasti diam setimbang. Jika terdapat pasangan gaya sejajar berlawanan arah (kopel), $\\Sigma F = 0$ tetapi $\\Sigma\\tau \\neq 0$ sehingga benda tetap berotasi.'
    ],
    tutorTip: 'Dalam soal kesetimbangan benda tegar (batang bersandar atau berengsel), pilihlah titik poros tepat di tempat gaya reaksi engsel bekerja agar gaya yang tidak diketahui itu tidak masuk ke persamaan $\\Sigma\\tau = 0$.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sebuah kunci pas sepanjang $0{,}4\\text{ m}$ digunakan untuk memutar baut dengan gaya tarik $50\\text{ N}$ membentuk sudut $30^\\circ$ terhadap lengan kunci pas. Besar momen gaya (torsi) yang dihasilkan terhadap poros baut adalah...',
      options: ['10 N·m', '20 N·m', '17,3 N·m', '5 N·m'],
      answer: 'A',
      hint: 'Gunakan $\\tau = r F \\sin\\theta$ dengan $\\sin 30^\\circ = 0{,}5$.',
      solution: '$\\tau = r F \\sin\\theta = 0{,}4 \\times 50 \\times \\sin 30^\\circ = 20 \\times 0{,}5 = 10\\text{ N}\\cdot\\text{m}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Tiga partikel identik masing-masing bermassa $2\\text{ kg}$ terpasang pada batang ringan tak bermassa: partikel pertama di poros ($r_1 = 0$), partikel kedua berjarak $1\\text{ m}$, dan partikel ketiga berjarak $2\\text{ m}$ dari poros. Momen inersia sistem terhadap poros tersebut adalah...',
      options: ['6 kg·m²', '14 kg·m²', '8 kg·m²', '10 kg·m²'],
      answer: 'D',
      hint: 'Jumlahkan $m_i r_i^2$ untuk seluruh partikel.',
      solution: '$I = \\sum m_i r_i^2 = 2(0)^2 + 2(1)^2 + 2(2)^2 = 0 + 2 + 8 = 10\\text{ kg}\\cdot\\text{m}^2$. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Seorang penari es yang sedang berputar cepat merapatkan kedua lengannya ke tubuh sehingga kecepatan sudutnya meningkat drastis. Penjelasan fisika yang tepat atas peristiwa ini adalah...',
      options: [
        'torsi eksternal bertambah besar karena lengan ditarik ke dalam',
        'momen inersia mengecil sehingga kecepatan sudut membesar agar momentum sudut $I\\omega$ tetap',
        'energi kinetik rotasi tetap konstan selama penari merapatkan lengan',
        'momen inersia membesar berbanding lurus dengan kecepatan sudut'
      ],
      answer: 'B',
      hint: 'Tidak ada torsi luar berarti momentum sudut $L = I\\omega$ bersifat kekal.',
      solution: 'Ketika lengan dirapatkan, jarak massa terhadap sumbu putar berkurang sehingga **momen inersia $I$ mengecil**. Karena tidak ada torsi luar ($L = I\\omega$ kekal), **kecepatan sudut $\\omega$ harus membesar**. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Suatu benda tegar dikatakan berada dalam kesetimbangan statis sempurna apabila memenuhi syarat...',
      options: [
        'resultan gaya sama dengan nol meskipun resultan torsi tidak nol',
        'resultan torsi sama dengan nol meskipun benda masih bergerak dipercepat',
        'resultan gaya sama dengan nol dan resultan momen gaya terhadap titik mana pun sama dengan nol',
        'kecepatan sudut benda terus bertambah secara beraturan'
      ],
      answer: 'C',
      hint: 'Kesetimbangan benda tegar menuntut tidak adanya percepatan translasi dan percepatan rotasi.',
      solution: 'Benda tegar setimbang statis bila bebas dari gerak translasi ($\\Sigma F = 0$) dan bebas dari gerak rotasi ($\\Sigma\\tau = 0$) terhadap titik mana pun. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah bola pejal ($I = \\tfrac{2}{5}mR^2$), silinder pejal ($I = \\tfrac{1}{2}mR^2$), dan cincin tipis berongga ($I = mR^2$) dilepaskan bersamaan dari puncak bidang miring dan menggelinding tanpa selip. Urutan benda yang paling cepat hingga paling lambat tiba di dasar bidang miring adalah...',
      options: [
        'bola pejal, silinder pejal, lalu cincin tipis',
        'cincin tipis, silinder pejal, lalu bola pejal',
        'silinder pejal, bola pejal, lalu cincin tipis',
        'ketiganya tiba bersamaan jika massanya sama'
      ],
      answer: 'A',
      hint: 'Percepatan di bidang miring adalah $a = \\dfrac{g\\sin\\theta}{1 + k}$; semakin kecil nilai $k$, semakin besar percepatannya.',
      solution: 'Karena $\\frac{2}{5} < \\frac{1}{2} < 1$, percepatan bola pejal paling besar dan cincin tipis paling kecil. Jadi urutannya **bola pejal, silinder pejal, lalu cincin tipis**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Perhatikan batang ringan yang seimbang pada gambar. Sebuah beban seberat $w = 300\\text{ N}$ diletakkan pada jarak $1\\text{ m}$ di sebelah kiri titik tumpu. Jika gaya penyeimbang $F$ bekerja tegak lurus batang pada jarak $2\\text{ m}$ di sebelah kanan titik tumpu, besar gaya $F$ agar memenuhi $\\Sigma\\tau = 0$ adalah...',
      options: ['100 N', '600 N', '150 N', '200 N'],
      answer: 'C',
      hint: 'Samakan torsi berlawanan jarum jam oleh beban dengan torsi searah jarum jam oleh gaya $F$.',
      solution: '$\\Sigma\\tau = 0 \\Rightarrow w \\times L_1 = F \\times L_2 \\Rightarrow 300 \\times 1 = F \\times 2 \\Rightarrow F = 150\\text{ N}$. Jawaban: **C**.',
      visual: {
        type: 'lever',
        props: {
          title: 'Kesetimbangan Torsi pada Batang',
          loadLabel: 'w = 300 N',
          effortLabel: 'F = ?',
          loadArmLabel: '1 m',
          effortArmLabel: '2 m',
          ratio: 2
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah roda berbentuk silinder pejal homogen bermassa $4\\text{ kg}$ dan berjari-jari $0{,}5\\text{ m}$ ($I = \\tfrac{1}{2}mR^2$) ditarik tali secara tangensial dengan gaya tetap $10\\text{ N}$. Percepatan sudut yang dialami roda tersebut adalah...',
      options: ['5 rad/s²', '10 rad/s²', '20 rad/s²', '2,5 rad/s²'],
      answer: 'B',
      hint: 'Hitung dulu momen inersia $I$ dan torsi $\\tau = R \\times F$, lalu cari $\\alpha = \\tau / I$.',
      solution: '$I = \\tfrac{1}{2}(4)(0{,}5)^2 = 0{,}5\\text{ kg}\\cdot\\text{m}^2$ dan $\\tau = 0{,}5 \\times 10 = 5\\text{ N}\\cdot\\text{m}$.\n$\\alpha = \\dfrac{\\tau}{I} = \\dfrac{5}{0{,}5} = 10\\text{ rad/s}^2$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah bola pejal bermassa $5\\text{ kg}$ ($I = \\tfrac{2}{5}mR^2$) menggelinding tanpa selip di lantai datar dengan kelajuan pusat massa $4\\text{ m/s}$. Energi kinetik total bola tersebut adalah...',
      options: ['40 J', '16 J', '80 J', '56 J'],
      answer: 'D',
      hint: 'Jumlahkan energi kinetik translasi dan rotasi: $E_k = \\tfrac{1}{2}mv^2(1 + k)$ dengan $k = \\tfrac{2}{5}$.',
      solution: '$E_k = \\tfrac{1}{2}(5)(4^2)\\left(1 + \\tfrac{2}{5}\\right) = 40 \\times \\dfrac{7}{5} = 56\\text{ J}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah cakram bermomen inersia $I_1 = 4\\text{ kg}\\cdot\\text{m}^2$ berputar dengan kecepatan sudut $6\\text{ rad/s}$. Di atasnya dijatuhkan pelan-pelan cakram kedua yang diam dan seporos dengan momen inersia $I_2 = 2\\text{ kg}\\cdot\\text{m}^2$ sehingga keduanya berputar bersama. Kecepatan sudut gabungan kedua cakram adalah...',
      options: ['4 rad/s', '3 rad/s', '12 rad/s', '2 rad/s'],
      answer: 'A',
      hint: 'Gunakan kekekalan momentum sudut $I_1\\omega_1 = (I_1 + I_2)\\omega\'$.',
      solution: '$4 \\times 6 = (4 + 2)\\omega\' \\Rightarrow 24 = 6\\omega\' \\Rightarrow \\omega\' = 4\\text{ rad/s}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah pelat tipis homogen berbentuk persegi panjang berukuran $4\\text{ cm} \\times 6\\text{ cm}$ diletakkan berdiri pada alas $4\\text{ cm}$ dan tinggi $6\\text{ cm}$. Tepat di sisi atasnya ($y = 6\\text{ cm}$ hingga $y = 9\\text{ cm}$) disambung segitiga sama kaki beralas $4\\text{ cm}$ dan tinggi $3\\text{ cm}$. Tinggi titik berat bangun gabungan diukur dari alas bawahnya adalah...',
      options: ['3,5 cm', '4,0 cm', '3,8 cm', '4,5 cm'],
      answer: 'C',
      hint: 'Titik berat segitiga terletak pada $\\tfrac{1}{3}$ tinggi dari alasnya ($y_2 = 6 + \\tfrac{1}{3}(3)$).',
      solution: 'Persegi panjang: $A_1 = 4 \\times 6 = 24\\text{ cm}^2$, $y_1 = 3\\text{ cm}$.\nSegitiga: $A_2 = \\tfrac{1}{2} \\times 4 \\times 3 = 6\\text{ cm}^2$, $y_2 = 6 + 1 = 7\\text{ cm}$.\n$y_0 = \\dfrac{24(3) + 6(7)}{24 + 6} = \\dfrac{72 + 42}{30} = \\dfrac{114}{30} = 3{,}8\\text{ cm}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah batang ringan AB sepanjang $4\\text{ m}$ berporos di titik A. Pada jarak $2\\text{ m}$ dari A bekerja gaya $F_1 = 15\\text{ N}$ tegak lurus batang ke atas, dan di ujung B ($4\\text{ m}$ dari A) bekerja gaya $F_2 = 20\\text{ N}$ ke bawah membentuk sudut $30^\\circ$ terhadap batang. Besar dan arah torsi total terhadap poros A adalah...',
      options: [
        '70 N·m searah jarum jam',
        '10 N·m berlawanan jarum jam',
        '50 N·m searah jarum jam',
        '10 N·m searah jarum jam'
      ],
      answer: 'D',
      hint: 'Gaya $F_1$ ke atas memutar batang berlawanan jarum jam, sedangkan $F_2$ ke bawah memutar searah jarum jam.',
      solution: '$\\tau_1 = 2 \\times 15 = 30\\text{ N}\\cdot\\text{m}$ (berlawanan jarum jam).\n$\\tau_2 = 4 \\times 20 \\times \\sin 30^\\circ = 40\\text{ N}\\cdot\\text{m}$ (searah jarum jam).\nResultan: $40 - 30 = 10\\text{ N}\\cdot\\text{m}$ searah jarum jam. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah katrol berbentuk silinder pejal bermassa $4\\text{ kg}$ ($I = \\tfrac{1}{2}m_k R^2$) berputar bebas pada porosnya. Seutas tali ringan dililitkan pada katrol dan ujungnya digantungi beban bermassa $6\\text{ kg}$ ($g = 10\\text{ m/s}^2$). Ketika beban dilepaskan dari keadaan diam, percepatan gerak turunnya beban adalah...',
      options: ['6,0 m/s²', '7,5 m/s²', '10,0 m/s²', '5,0 m/s²'],
      answer: 'B',
      hint: 'Gabungkan persamaan translasi beban ($mg - T = ma$) dengan rotasi katrol ($TR = I\\alpha = \\tfrac{1}{2}m_k R a$).',
      solution: 'Dari rotasi katrol diperoleh $T = \\tfrac{1}{2}m_k a = 2a$.\nSubstitusi ke gerak beban: $6(10) - 2a = 6a \\Rightarrow 8a = 60 \\Rightarrow a = 7{,}5\\text{ m/s}^2$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah bola pejal ($I = \\tfrac{2}{5}mR^2$) dilepaskan dari keadaan diam di puncak bidang miring setinggi $h = 7\\text{ m}$ dan menggelinding tanpa selip hingga ke dasar ($g = 10\\text{ m/s}^2$). Kelajuan pusat massa bola saat tiba di dasar bidang miring adalah...',
      options: ['10 m/s', '14 m/s', '7 m/s', '12 m/s'],
      answer: 'A',
      hint: 'Gunakan kekekalan energi mekanik: $mgh = \\tfrac{1}{2}mv^2 + \\tfrac{1}{2}I\\omega^2$ dengan $\\omega = v/R$.',
      solution: '$mgh = \\tfrac{1}{2}mv^2\\left(1 + \\tfrac{2}{5}\\right) = \\dfrac{7}{10}mv^2$.\n$v = \\sqrt{\\dfrac{10}{7}gh} = \\sqrt{\\dfrac{10}{7} \\times 10 \\times 7} = \\sqrt{100} = 10\\text{ m/s}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah batang homogen AB bermassa $4\\text{ kg}$ dan panjang $3\\text{ m}$ berengsel di dinding pada ujung A dan ditahan mendatar oleh seutas tali di ujung B yang membentuk sudut $30^\\circ$ terhadap batang ($g = 10\\text{ m/s}^2$). Besar gaya tegangan tali penahan batang tersebut adalah...',
      options: ['20 N', '30 N', '40 N', '80 N'],
      answer: 'C',
      hint: 'Pilih engsel A sebagai poros; gaya berat bekerja di tengah batang ($1{,}5\\text{ m}$ dari A).',
      solution: '$\\Sigma\\tau_A = 0 \\Rightarrow w \\cdot \\left(\\dfrac{L}{2}\\right) = (T\\sin 30^\\circ) \\cdot L$.\n$40 \\times 1{,}5 = T(0{,}5) \\times 3 \\Rightarrow 60 = 1{,}5 T \\Rightarrow T = 40\\text{ N}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah tangga homogen bermassa $10\\text{ kg}$ bersandar pada dinding vertikal licin dan bertumpu pada lantai mendatar kasar. Jika sudut kemiringan tangga terhadap lantai adalah $53^\\circ$ ($\\tan 53^\\circ = \\tfrac{4}{3}$), koefisien gesek statis minimum antara kaki tangga dan lantai agar tangga tidak tergelincir adalah...',
      options: ['0,750', '0,500', '0,667', '0,375'],
      answer: 'D',
      hint: 'Ambil poros di kaki tangga: $w(\\tfrac{L}{2}\\cos\\theta) = N_{\\text{dinding}}(L\\sin\\theta)$ dan syarat batas $N_{\\text{dinding}} = f_s \\le \\mu_s w$.',
      solution: 'Kesetimbangan vertikal memberi $N_{\\text{lantai}} = w$, dan kesetimbangan horizontal memberi $f_s = N_{\\text{dinding}}$.\nDari $\\Sigma\\tau_{\\text{kaki}} = 0$: $w(\\tfrac{L}{2}\\cos 53^\\circ) = N_{\\text{dinding}}(L\\sin 53^\\circ) \\Rightarrow N_{\\text{dinding}} = \\dfrac{w}{2\\tan 53^\\circ}$.\nSyarat tidak selip: $\\mu_s \\ge \\dfrac{N_{\\text{dinding}}}{w} = \\dfrac{1}{2 \\times \\tfrac{4}{3}} = \\dfrac{3}{8} = 0{,}375$. Jawaban: **D**.'
    })
  ]
});
