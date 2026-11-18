import { bab, soal } from '../author.js';

export default bab({
  grade: 12,
  number: 4,
  slug: 'rangkaian-arus-bolak-balik',
  title: 'Rangkaian Arus Bolak-Balik (AC)',
  element: 'Pemahaman Fisika: kelistrikan dan kemagnetan (rangkaian arus bolak-balik)',
  summary: {
    overview: 'Listrik jaringan rumah tangga PLN maupun transmisi tenaga antarkota menggunakan arus bolak-balik (AC) karena mudah dinaik-turunkan tegangannya. Bab ini membahas nilai efektif dan nilai maksimum tegangan serta arus sinusoidal, perilaku resistor, induktor, dan kapasitor murni dalam rangkaian AC, reaktansi induktif dan kapasitif, impedansi dan diagram fasor rangkaian seri RLC, frekuensi resonansi, serta daya rata-rata dan faktor daya.',
    coreConcepts: [
      'Tegangan dan Arus Efektif vs Maksimum: Tegangan dan arus AC berubah secara sinusoidal terhadap waktu: $V(t) = V_{\\text{maks}}\\sin(\\omega t)$ dengan $\\omega = 2\\pi f$. Alat ukur multimeter AC maupun label tegangan rumah ($220\\ \\text{V}$) menyatakan nilai efektif (RMS), sedangkan osiloskop menampilkan nilai puncak ($V_{\\text{maks}}$) dan puncak-ke-puncak ($V_{\\text{pp}} = 2V_{\\text{maks}}$). Hubungannya adalah $V_{\\text{ef}} = \\dfrac{V_{\\text{maks}}}{\\sqrt{2}}$ dan $I_{\\text{ef}} = \\dfrac{I_{\\text{maks}}}{\\sqrt{2}}$.',
      'Komponen Murni dan Reaktansi AC: Pada resistor murni ($R$), tegangan dan arus sefase ($\\varphi = 0^\\circ$). Pada induktor murni ($L$), tegangan $V_L$ mendahului arus $I$ sebesar $90^\\circ$ dengan hambatan semu berupa reaktansi induktif $X_L = \\omega L = 2\\pi f L$. Pada kapasitor murni ($C$), arus $I$ mendahului tegangan $V_C$ sebesar $90^\\circ$ dengan reaktansi kapasitif $X_C = \\dfrac{1}{\\omega C} = \\dfrac{1}{2\\pi f C}$.',
      'Impedansi, Diagram Fasor, dan Sudut Fase RLC Seri: Karena tegangan $V_R$, $V_L$, dan $V_C$ tidak sefase ($V_L$ dan $V_C$ berlawanan arah $180^\\circ$, keduanya tegak lurus terhadap $V_R$), penjumlahan dilakukan secara vektor (fasor). Impedansi total rangkaian seri RLC adalah $Z = \\sqrt{R^2 + (X_L - X_C)^2}$, tegangan total $V = \\sqrt{V_R^2 + (V_L - V_C)^2}$, arus $I = \\dfrac{V}{Z}$, dan sudut fase $\\tan\\varphi = \\dfrac{X_L - X_C}{R}$. Jika $X_L > X_C$ rangkaian bersifat induktif; jika $X_C > X_L$ bersifat kapasitif.',
      'Frekuensi Resonansi Rangkaian RLC: Resonansi terjadi saat $X_L = X_C$ ($\\omega_r L = \\dfrac{1}{\\omega_r C}$), sehingga impedansi mencapai nilai minimum ($Z = R$), arus mencapai nilai maksimum, dan tegangan serta arus kembali sefase ($\\varphi = 0^\\circ$). Frekuensi resonansinya memenuhi $f_r = \\dfrac{1}{2\\pi\\sqrt{LC}}$. Prinsip resonansi ini digunakan untuk memilih saluran frekuensi pada rangkaian penala (tuner) radio dan televisi.',
      'Daya Rata-Rata dan Faktor Daya: Induktor dan kapasitor ideal hanya menyimpan lalu mengembalikan energi ke sumber tanpa mendisipasi energi rata-rata, sehingga daya aktif rata-rata hanya diserap oleh komponen resistif: $P = V_{\\text{ef}} I_{\\text{ef}} \\cos\\varphi = I_{\\text{ef}}^2 R$. Besaran $\\cos\\varphi = \\dfrac{R}{Z} = \\dfrac{V_R}{V}$ disebut faktor daya (bernilai $0 \\le \\cos\\varphi \\le 1$). Pada instalasi industri, kapasitor ditambahkan untuk memperkecil selisih fase agar faktor daya mendekati 1.'
    ],
    keyFormulas: [
      { label: 'Nilai efektif & maksimum', formula: 'V_{\\text{ef}} = \\dfrac{V_{\\text{maks}}}{\\sqrt{2}} \\qquad I_{\\text{ef}} = \\dfrac{I_{\\text{maks}}}{\\sqrt{2}}' },
      { label: 'Reaktansi induktif & kapasitif', formula: 'X_L = \\omega L = 2\\pi f L \\qquad X_C = \\dfrac{1}{\\omega C} = \\dfrac{1}{2\\pi f C}' },
      { label: 'Impedansi & tegangan fasor RLC', formula: 'Z = \\sqrt{R^2 + (X_L - X_C)^2} \\qquad V = \\sqrt{V_R^2 + (V_L - V_C)^2}' },
      { label: 'Sudut fase & frekuensi resonansi', formula: '\\tan\\varphi = \\dfrac{X_L - X_C}{R} \\qquad f_r = \\dfrac{1}{2\\pi\\sqrt{LC}}' },
      { label: 'Daya aktif & faktor daya', formula: 'P = V_{\\text{ef}} I_{\\text{ef}} \\cos\\varphi = I_{\\text{ef}}^2 R \\qquad \\cos\\varphi = \\dfrac{R}{Z}' }
    ],
    workedExamples: [
      {
        title: 'Membaca persamaan AC dan menghitung reaktansi',
        problem: 'Sumber tegangan AC memiliki persamaan $V(t) = 200\\sqrt{2}\\sin(100\\pi t)\\ \\text{V}$ dan dihubungkan ke induktor murni $L = \\dfrac{0{,}4}{\\pi}\\ \\text{H}$. Tentukan tegangan efektif, frekuensi sumber, dan arus efektif yang mengalir.',
        solution: 'Dari persamaan $V(t) = V_{\\text{maks}}\\sin(\\omega t)$:\n$V_{\\text{maks}} = 200\\sqrt{2}\\ \\text{V} \\implies V_{\\text{ef}} = \\dfrac{200\\sqrt{2}}{\\sqrt{2}} = 200\\ \\text{V}$.\n$\\omega = 100\\pi\\ \\text{rad/s} \\implies f = \\dfrac{\\omega}{2\\pi} = \\dfrac{100\\pi}{2\\pi} = 50\\ \\text{Hz}$.\nReaktansi induktif: $X_L = \\omega L = 100\\pi \\times \\dfrac{0{,}4}{\\pi} = 40\\ \\Omega$.\nArus efektif: $I_{\\text{ef}} = \\dfrac{V_{\\text{ef}}}{X_L} = \\dfrac{200}{40} = \\mathbf{5\\ A}$.'
      },
      {
        title: 'Impedansi, faktor daya, dan daya aktif rangkaian RLC seri',
        problem: 'Resistor $R = 30\\ \\Omega$, induktor $X_L = 80\\ \\Omega$, dan kapasitor $X_C = 40\\ \\Omega$ disusun seri pada sumber AC $100\\ \\text{V}$ (efektif). Tentukan impedansi, arus efektif, faktor daya, dan daya rata-rata rangkaian.',
        solution: 'Impedansi: $Z = \\sqrt{30^2 + (80 - 40)^2} = \\sqrt{30^2 + 40^2} = 50\\ \\Omega$.\nArus efektif: $I_{\\text{ef}} = \\dfrac{V_{\\text{ef}}}{Z} = \\dfrac{100}{50} = 2\\ \\text{A}$.\nFaktor daya: $\\cos\\varphi = \\dfrac{R}{Z} = \\dfrac{30}{50} = 0{,}6$ (sifat induktif karena $X_L > X_C$).\nDaya rata-rata: $P = I_{\\text{ef}}^2 R = 2^2 \\times 30 = \\mathbf{120\\ W}$.'
      },
      {
        title: 'Frekuensi resonansi',
        problem: 'Suatu rangkaian seri RLC tersusun atas resistor $50\\ \\Omega$, induktor $40\\ \\text{mH}$, dan kapasitor $1\\ \\mu\\text{F}$. Berapakah frekuensi resonansi rangkaian tersebut?',
        solution: 'Konversi satuan ke SI: $L = 40 \\times 10^{-3}\\ \\text{H}$ dan $C = 1 \\times 10^{-6}\\ \\text{F}$.\n$$f_r = \\dfrac{1}{2\\pi\\sqrt{LC}} = \\dfrac{1}{2\\pi\\sqrt{(40 \\times 10^{-3})(1 \\times 10^{-6})}} = \\dfrac{1}{2\\pi\\sqrt{4 \\times 10^{-8}}}$$\n$$f_r = \\dfrac{1}{2\\pi (2 \\times 10^{-4})} = \\mathbf{\\dfrac{2.500}{\\pi}\\ \\text{Hz} \\approx 796\\ \\text{Hz}}.$$'
      }
    ],
    misconceptions: [
      'Menjumlahkan langsung $V_R + V_L + V_C$ untuk mendapatkan tegangan sumber RLC seri. Karena berbeda fase $90^\\circ$ dan $180^\\circ$, penjumlahan harus menggunakan diagram fasor $V = \\sqrt{V_R^2 + (V_L - V_C)^2}$, sehingga tegangan komponen seperti $V_L$ atau $V_C$ bisa saja lebih besar daripada tegangan sumber.',
      'Mengira daya rata-rata rangkaian AC dihitung dengan $P = V_{\\text{ef}} I_{\\text{ef}}$ saja. Hasil kali $V_{\\text{ef}} I_{\\text{ef}}$ adalah daya semu (VA); daya aktif yang benar-benar menjadi energi/panas wajib dikalikan faktor daya $\\cos\\varphi = R/Z$.',
      'Menganggap menaikkan frekuensi selalu memperbesar impedansi rangkaian RLC. Jika rangkaian mula-mula bersifat kapasitif ($X_C > X_L$), menaikkan frekuensi memperbesar $X_L$ dan memperkecil $X_C$ sehingga selisih $|X_L - X_C|$ mengecil dan impedansi justru turun hingga titik resonansi.'
    ],
    tutorTip: 'Buat segitiga siku-siku impedansi di kertas coretan: sisi mendatar ke kanan adalah $R$, sisi vertikal ke atas adalah $X_L - X_C$, dan sisi miringnya adalah $Z$. Dari satu segitiga itu kamu langsung memperoleh $Z = \\sqrt{R^2 + (X_L - X_C)^2}$, $\\cos\\varphi = R/Z$, dan $\\tan\\varphi = (X_L - X_C)/R$.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Tegangan listrik AC rumah tangga dari PLN terukur sebesar $220\\ \\text{V}$ (tegangan efektif). Besar tegangan maksimum (tegangan puncak) dari sumber tersebut adalah...',
      options: ['$110\\sqrt{2}\\ \\text{V}$', '$220\\sqrt{2}\\ \\text{V}$', '$440\\ \\text{V}$', '$110\\ \\text{V}$'],
      answer: 'B',
      hint: 'Hubungan tegangan efektif dan maksimum adalah $V_{\\text{ef}} = V_{\\text{maks}} / \\sqrt{2}$.',
      solution: '$V_{\\text{maks}} = V_{\\text{ef}}\\sqrt{2} = 220\\sqrt{2}\\ \\text{V}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada rangkaian arus bolak-balik yang hanya berisi komponen induktor murni, hubungan fase antara tegangan induktor ($V_L$) dan arus listrik ($I$) adalah...',
      options: [
        'tegangan $V_L$ sefase dengan arus $I$',
        'arus $I$ mendahului tegangan $V_L$ sebesar $90^\\circ$',
        'tegangan $V_L$ mendahului arus $I$ sebesar $90^\\circ$',
        'tegangan $V_L$ berlawanan fase $180^\\circ$ terhadap arus $I$'
      ],
      answer: 'C',
      hint: 'Ingat sifat induktor yang menahan perubahan arus sehingga arus tertinggal terhadap tegangan.',
      solution: 'Pada induktor murni, **tegangan $V_L$ mendahului arus $I$ sebesar $90^\\circ$** (atau arus tertinggal $90^\\circ$ dari tegangan). Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah induktor dengan induktansi $L = 0{,}2\\ \\text{H}$ dihubungkan ke sumber AC berfrekuensi sudut $\\omega = 150\\ \\text{rad/s}$. Reaktansi induktif induktor tersebut adalah...',
      options: ['$30\\ \\Omega$', '$750\\ \\Omega$', '$3\\ \\Omega$', '$15\\ \\Omega$'],
      answer: 'A',
      hint: 'Gunakan $X_L = \\omega L$.',
      solution: '$X_L = \\omega L = 150 \\times 0{,}2 = 30\\ \\Omega$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah kapasitor berkapasitansi $C = 50\\ \\mu\\text{F}$ dihubungkan dengan sumber tegangan AC berfrekuensi sudut $\\omega = 200\\ \\text{rad/s}$. Besar reaktansi kapasitifnya adalah...',
      options: ['$10\\ \\Omega$', '$50\\ \\Omega$', '$250\\ \\Omega$', '$100\\ \\Omega$'],
      answer: 'D',
      hint: 'Gunakan $X_C = \\dfrac{1}{\\omega C}$ dengan $50\\ \\mu\\text{F} = 50 \\times 10^{-6}\\ \\text{F}$.',
      solution: '$X_C = \\dfrac{1}{200 \\times 50 \\times 10^{-6}} = \\dfrac{1}{10^{-2}} = 100\\ \\Omega$. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Ketika sebuah rangkaian seri RLC berada dalam kondisi resonansi, pernyataan yang tepat adalah...',
      options: [
        'impedansi bernilai maksimum dan arus menjadi nol',
        '$X_L = X_C$ sehingga impedansi mencapai nilai minimum ($Z = R$)',
        'faktor daya bernilai $\\cos\\varphi = 0$',
        'tegangan sumber selalu lebih kecil daripada tegangan resistor $V_R$'
      ],
      answer: 'B',
      hint: 'Saat resonansi, efek induktor dan kapasitor saling meniadakan ($X_L - X_C = 0$).',
      solution: 'Resonansi terjadi saat $X_L = X_C$, sehingga impedansi $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ mencapai nilai minimum sebesar $R$, arus menjadi maksimum, dan $\\cos\\varphi = 1$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah sumber tegangan bolak-balik dinyatakan dengan persamaan $V(t) = 120\\sqrt{2}\\sin(100\\pi t)\\ \\text{V}$, dengan $t$ dalam sekon. Tegangan efektif dan frekuensi sumber AC tersebut berturut-turut adalah...',
      options: [
        '$120\\ \\text{V}$ dan $100\\ \\text{Hz}$',
        '$120\\sqrt{2}\\ \\text{V}$ dan $50\\ \\text{Hz}$',
        '$120\\ \\text{V}$ dan $50\\ \\text{Hz}$',
        '$60\\sqrt{2}\\ \\text{V}$ dan $50\\ \\text{Hz}$'
      ],
      answer: 'C',
      hint: 'Bandingkan dengan bentuk umum $V(t) = V_{\\text{maks}}\\sin(2\\pi f t)$.',
      solution: '$V_{\\text{maks}} = 120\\sqrt{2}\\ \\text{V} \\implies V_{\\text{ef}} = \\dfrac{120\\sqrt{2}}{\\sqrt{2}} = 120\\ \\text{V}$.\n$2\\pi f = 100\\pi \\implies f = 50\\ \\text{Hz}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Resistor $R = 60\\ \\Omega$, induktor dengan reaktansi $X_L = 120\\ \\Omega$, dan kapasitor dengan reaktansi $X_C = 40\\ \\Omega$ dirangkai seri dan dihubungkan dengan sumber AC $200\\ \\text{V}$ (efektif). Kuat arus efektif yang mengalir dalam rangkaian adalah...',
      options: ['$2\\ \\text{A}$', '$1\\ \\text{A}$', '$3{,}33\\ \\text{A}$', '$4\\ \\text{A}$'],
      answer: 'A',
      hint: 'Hitung impedansi $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ terlebih dahulu, lalu $I_{\\text{ef}} = V_{\\text{ef}} / Z$.',
      solution: '$Z = \\sqrt{60^2 + (120 - 40)^2} = \\sqrt{60^2 + 80^2} = 100\\ \\Omega$.\n$I_{\\text{ef}} = \\dfrac{200}{100} = 2\\ \\text{A}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dalam suatu rangkaian seri RLC, voltmeter AC mengukur tegangan efektif pada masing-masing komponen sebesar $V_R = 40\\ \\text{V}$, $V_L = 90\\ \\text{V}$, dan $V_C = 60\\ \\text{V}$. Besar tegangan efektif total sumber AC tersebut adalah...',
      options: ['$190\\ \\text{V}$', '$70\\ \\text{V}$', '$110\\ \\text{V}$', '$50\\ \\text{V}$'],
      answer: 'D',
      hint: 'Gunakan penjumlahan fasor tegangan: $V = \\sqrt{V_R^2 + (V_L - V_C)^2}$.',
      solution: '$V = \\sqrt{40^2 + (90 - 60)^2} = \\sqrt{40^2 + 30^2} = \\sqrt{1.600 + 900} = 50\\ \\text{V}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah rangkaian seri RLC memiliki induktor $L = 25\\ \\text{mH}$ dan kapasitor $C = 10\\ \\mu\\text{F}$. Frekuensi resonansi rangkaian tersebut adalah...',
      options: ['$\\dfrac{500}{\\pi}\\ \\text{Hz}$', '$\\dfrac{1.000}{\\pi}\\ \\text{Hz}$', '$\\dfrac{2.000}{\\pi}\\ \\text{Hz}$', '$\\dfrac{100}{\\pi}\\ \\text{Hz}$'],
      answer: 'B',
      hint: 'Gunakan $f_r = \\dfrac{1}{2\\pi\\sqrt{LC}}$ dengan $L = 25 \\times 10^{-3}\\ \\text{H}$ dan $C = 10 \\times 10^{-6}\\ \\text{F}$.',
      solution: '$LC = 25 \\times 10^{-3} \\times 10 \\times 10^{-6} = 25 \\times 10^{-8}\\ \\text{s}^2$, sehingga $\\sqrt{LC} = 5 \\times 10^{-4}\\ \\text{s}$.\n$f_r = \\dfrac{1}{2\\pi \\times 5 \\times 10^{-4}} = \\dfrac{10^4}{10\\pi} = \\dfrac{1.000}{\\pi}\\ \\text{Hz}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Suatu rangkaian seri RLC memiliki nilai $R = 30\\ \\Omega$, $X_L = 50\\ \\Omega$, dan $X_C = 90\\ \\Omega$. Faktor daya ($\\cos\\varphi$) dan sifat rangkaian tersebut berturut-turut adalah...',
      options: [
        '$0{,}6$, bersifat induktif',
        '$0{,}8$, bersifat kapasitif',
        '$0{,}6$, bersifat kapasitif',
        '$0{,}8$, bersifat induktif'
      ],
      answer: 'C',
      hint: 'Hitung $Z$ lalu $\\cos\\varphi = R/Z$. Karena $X_C > X_L$, tentukan sifat rangkaiannya.',
      solution: '$Z = \\sqrt{30^2 + (50 - 90)^2} = \\sqrt{30^2 + (-40)^2} = 50\\ \\Omega$.\nFaktor daya $\\cos\\varphi = \\dfrac{R}{Z} = \\dfrac{30}{50} = 0{,}6$. Karena $X_C > X_L$, arus mendahului tegangan sehingga rangkaian bersifat **kapasitif**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu rangkaian seri RLC dengan $R = 40\\ \\Omega$, $X_L = 70\\ \\Omega$, dan $X_C = 40\\ \\Omega$ dihubungkan ke sumber AC bertegangan efektif $100\\ \\text{V}$. Daya aktif rata-rata yang diserap oleh rangkaian tersebut adalah...',
      options: ['$160\\ \\text{W}$', '$200\\ \\text{W}$', '$250\\ \\text{W}$', '$120\\ \\text{W}$'],
      answer: 'A',
      hint: 'Cari impedansi $Z$ dan arus efektif $I_{\\text{ef}}$, lalu hitung $P = I_{\\text{ef}}^2 R$ (atau $V_{\\text{ef}} I_{\\text{ef}} \\cos\\varphi$).',
      solution: '$Z = \\sqrt{40^2 + (70 - 40)^2} = \\sqrt{40^2 + 30^2} = 50\\ \\Omega$.\n$I_{\\text{ef}} = \\dfrac{100}{50} = 2\\ \\text{A}$.\nDaya aktif rata-rata: $P = I_{\\text{ef}}^2 R = 2^2 \\times 40 = 160\\ \\text{W}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah kumparan (yang memiliki hambatan dalam $R$ dan induktansi $L$ seri) menarik arus $2\\ \\text{A}$ ketika dihubungkan ke baterai DC $24\\ \\text{V}$. Saat kumparan yang sama dihubungkan ke sumber AC $100\\ \\text{V}$ (efektif) berfrekuensi sudut $\\omega = 160\\ \\text{rad/s}$, arus efektifnya $5\\ \\text{A}$. Nilai induktansi $L$ kumparan adalah...',
      options: ['$125\\ \\text{mH}$', '$75\\ \\text{mH}$', '$200\\ \\text{mH}$', '$100\\ \\text{mH}$'],
      answer: 'D',
      hint: 'Pada tegangan DC ($f = 0$), $X_L = 0$ sehingga langsung diperoleh $R$. Kemudian gunakan data AC untuk mencari $Z$ dan $X_L$.',
      solution: 'Pada DC: $R = \\dfrac{V_{DC}}{I_{DC}} = \\dfrac{24}{2} = 12\\ \\Omega$.\nPada AC: $Z = \\dfrac{V_{AC}}{I_{AC}} = \\dfrac{100}{5} = 20\\ \\Omega$.\n$X_L = \\sqrt{Z^2 - R^2} = \\sqrt{20^2 - 12^2} = 16\\ \\Omega$.\n$L = \\dfrac{X_L}{\\omega} = \\dfrac{16}{160} = 0{,}1\\ \\text{H} = 100\\ \\text{mH}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu rangkaian seri RLC memiliki $R = 80\\ \\Omega$, $X_L = 20\\ \\Omega$, dan $X_C = 80\\ \\Omega$ ketika dihubungkan ke sumber AC berfrekuensi sudut $\\omega$. Jika frekuensi sudut sumber dinaikkan menjadi $2\\omega$ dengan tegangan efektif tetap, impedansi rangkaian berubah dari $100\\ \\Omega$ menjadi...',
      options: ['$60\\ \\Omega$', '$80\\ \\Omega$', '$100\\ \\Omega$', '$140\\ \\Omega$'],
      answer: 'B',
      hint: 'Ingat bahwa $X_L \\propto \\omega$ sedangkan $X_C \\propto 1/\\omega$.',
      solution: 'Ketika frekuensi sudut digandakan menjadi $2\\omega$, maka $X_L\' = 2 \\times 20 = 40\\ \\Omega$ dan $X_C\' = \\dfrac{80}{2} = 40\\ \\Omega$.\nKarena $X_L\' = X_C\'$, rangkaian mencapai resonansi sehingga $Z\' = R = 80\\ \\Omega$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah rangkaian seri RL memiliki $R = 30\\ \\Omega$ dan $X_L = 40\\ \\Omega$ pada sumber AC bertegangan efektif $100\\ \\text{V}$ dan frekuensi sudut $\\omega = 250\\ \\text{rad/s}$. Untuk memaksimalkan daya rata-rata sehingga faktor daya menjadi $\\cos\\varphi = 1$, sebuah kapasitor dipasang seri dalam rangkaian. Kapasitansi yang harus ditambahkan adalah...',
      options: ['$40\\ \\mu\\text{F}$', '$250\\ \\mu\\text{F}$', '$100\\ \\mu\\text{F}$', '$10\\ \\mu\\text{F}$'],
      answer: 'C',
      hint: 'Agar $\\cos\\varphi = 1$, rangkaian harus beresonansi sehingga $X_C = X_L$.',
      solution: 'Syarat faktor daya $1$ adalah resonansi: $X_C = X_L = 40\\ \\Omega$.\n$C = \\dfrac{1}{\\omega X_C} = \\dfrac{1}{250 \\times 40} = \\dfrac{1}{10.000} = 10^{-4}\\ \\text{F} = 100\\ \\mu\\text{F}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu rangkaian AC memiliki tegangan sumber $V(t) = 100\\sqrt{2}\\sin(100\\pi t)\\ \\text{V}$ dan arus $I(t) = 5\\sqrt{2}\\sin(100\\pi t - 53^\\circ)\\ \\text{A}$ (diketahui $\\cos 53^\\circ = 0{,}6$ dan $\\sin 53^\\circ = 0{,}8$). Hambatan murni $R$ dan daya aktif $P$ rangkaian tersebut berturut-turut adalah...',
      options: [
        '$R = 12\\ \\Omega$ dan $P = 300\\ \\text{W}$',
        '$R = 16\\ \\Omega$ dan $P = 400\\ \\text{W}$',
        '$R = 20\\ \\Omega$ dan $P = 500\\ \\text{W}$',
        '$R = 12\\ \\Omega$ dan $P = 500\\ \\text{W}$'
      ],
      answer: 'A',
      hint: 'Cari $Z = V_{\\text{ef}} / I_{\\text{ef}}$, lalu gunakan $\\cos\\varphi = R/Z$ dan $P = V_{\\text{ef}} I_{\\text{ef}} \\cos\\varphi$.',
      solution: 'Dari persamaan: $V_{\\text{ef}} = 100\\ \\text{V}$, $I_{\\text{ef}} = 5\\ \\text{A}$, dan beda fase $\\varphi = 53^\\circ$.\nImpedansi: $Z = \\dfrac{100}{5} = 20\\ \\Omega$.\nHambatan murni: $R = Z\\cos 53^\\circ = 20 \\times 0{,}6 = 12\\ \\Omega$.\nDaya aktif: $P = V_{\\text{ef}} I_{\\text{ef}} \\cos 53^\\circ = 100 \\times 5 \\times 0{,}6 = 300\\ \\text{W}$. Jawaban: **A**.'
    })
  ]
});
