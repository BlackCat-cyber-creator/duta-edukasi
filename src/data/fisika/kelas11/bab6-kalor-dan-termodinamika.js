import { bab, soal } from '../author.js';

export default bab({
  grade: 11,
  number: 6,
  slug: 'kalor-dan-termodinamika',
  title: 'Suhu, Kalor, Teori Kinetik Gas, dan Termodinamika',
  element: 'Pemahaman Fisika: kalor, teori kinetik gas, dan termodinamika',
  summary: {
    overview: 'Mengapa suhu rata-rata Bumi meningkat akibat gas rumah kaca, bagaimana energi termal molekul gas menghasilkan tekanan pada dinding wadah, dan mengapa mesin kalor tidak pernah mencapai efisiensi 100%? Bab ini membahas asas Black dan pemuaian, perpindahan kalor (konduksi, konveksi, radiasi), teori kinetik gas ideal, usaha dan proses-proses termodinamika pada diagram P–V, Hukum I dan II Termodinamika, serta siklus mesin Carnot.',
    coreConcepts: [
      'Asas Black, Kalor, dan Pemuaian: Dalam sistem terisolasi, kalor yang dilepas benda panas sama dengan kalor yang diterima benda dingin ($Q_{\\text{lepas}} = Q_{\\text{terima}}$), dengan $Q = mc\\Delta T$ untuk perubahan suhu dan $Q = mL$ untuk perubahan wujud. Ketika dipanaskan, zat padat memuai mengikuti $\\Delta L = L_0\\alpha\\Delta T$ dan $\\Delta V = V_0\\gamma\\Delta T$ dengan $\\gamma = 3\\alpha$.',
      'Perpindahan Kalor dan Iklim Bumi: Laju konduksi melalui batang adalah $H = \\dfrac{Q}{t} = kA\\dfrac{\\Delta T}{L}$, konveksi berlangsung lewat aliran fluida, sedangkan laju radiasi termal mengikuti hukum Stefan–Boltzmann $P = e\\sigma A T^4$ (dengan $T$ dalam Kelvin). Penyerapan kembali radiasi inframerah gelombang panjang oleh gas rumah kaca meningkatkan energi termal atmosfer dan memicu pemanasan global.',
      'Persamaan Gas Ideal dan Teori Kinetik Gas: Gas ideal memenuhi persamaan keadaan $PV = nRT = Nk_B T$. Menurut teori kinetik gas, tekanan muncul dari tumbukan lenting molekul pada dinding wadah dengan energi kinetik translasi rata-rata $\\bar{E}_k = \\tfrac{3}{2}k_B T$, laju efektif $v_{\\text{rms}} = \\sqrt{\\dfrac{3RT}{M}}$, dan energi dalam gas monoatomik $U = \\tfrac{3}{2}nRT = \\tfrac{3}{2}PV$.',
      'Usaha dan Proses-Proses Termodinamika: Usaha yang dilakukan gas saat volumenya berubah adalah luas di bawah kurva diagram $P\\text{--}V$: $W = \\int_{V_1}^{V_2} P\\,dV$. Pada proses isobarik ($P$ tetap) $W = P\\Delta V$; isokhorik ($V$ tetap) $W = 0$; isotermal ($T$ tetap) $W = nRT\\ln(V_2/V_1)$; dan adiabatik ($Q = 0$) berlaku $PV^\\gamma = \\text{konstan}$.',
      'Hukum I Termodinamika: Hukum kekekalan energi pada sistem termodinamika dinyatakan oleh $\\Delta U = Q - W$, di mana $Q > 0$ berarti sistem menyerap kalor, $W > 0$ berarti sistem melakukan usaha (memuai), dan $\\Delta U > 0$ menandakan energi dalam serta suhu gas meningkat.',
      'Hukum II Termodinamika dan Mesin Carnot: Kalor mengalir spontan dari benda bersuhu tinggi ke rendah dan tidak mungkin seluruh kalor diubah menjadi kerja dalam suatu siklus (entropi semesta selalu bertambah atau tetap). Mesin kalor ideal (siklus Carnot) yang bekerja antara reservoir panas $T_1$ dan dingin $T_2$ (dalam Kelvin) memiliki efisiensi maksimum $\\eta = \\left(1 - \\dfrac{T_2}{T_1}\\right)\\times 100\\% = \\dfrac{W}{Q_1}\\times 100\\%$.'
    ],
    keyFormulas: [
      { label: 'Asas Black & pemuaian panjang', formula: 'Q_{\\text{lepas}} = Q_{\\text{terima}} \\qquad \\Delta L = L_0\\,\\alpha\\,\\Delta T' },
      { label: 'Konduksi & radiasi Stefan–Boltzmann', formula: '\\dfrac{Q}{t} = kA\\dfrac{\\Delta T}{L} \\qquad P = e\\sigma A T^4' },
      { label: 'Gas ideal & energi kinetik gas', formula: 'PV = nRT = Nk_B T \\qquad \\bar{E}_k = \\tfrac{3}{2}k_B T \\qquad U_{\\text{mono}} = \\tfrac{3}{2}nRT' },
      { label: 'Usaha & Hukum I Termodinamika', formula: 'W = \\int_{V_1}^{V_2} P\\,dV \\qquad \\Delta U = Q - W' },
      { label: 'Usaha isobarik & isotermal', formula: 'W_{\\text{isobarik}} = P\\,\\Delta V \\qquad W_{\\text{isotermal}} = nRT\\ln\\left(\\dfrac{V_2}{V_1}\\right)' },
      { label: 'Efisiensi mesin Carnot', formula: '\\eta = \\left(1 - \\dfrac{T_2}{T_1}\\right) \\times 100\\% = \\dfrac{W}{Q_1} \\times 100\\%' }
    ],
    workedExamples: [
      {
        title: 'Asas Black pada pencampuran es dan air panas',
        problem: 'Sebanyak $100\\text{ g}$ es bersuhu $0^\\circ\\text{C}$ ($L = 80\\text{ kal/g}$) dimasukkan ke dalam $200\\text{ g}$ air bersuhu $55^\\circ\\text{C}$ ($c = 1\\text{ kal/g}^\\circ\\text{C}$). Berapa suhu akhir kesetimbangan campuran?',
        solution: 'Kalor untuk meleburkan seluruh es: $Q_{\\text{lebur}} = 100 \\times 80 = 8.000\\text{ kal}$.\nKalor maksimum yang dapat dilepas air panas hingga $0^\\circ\\text{C}$ adalah $200 \\times 1 \\times 55 = 11.000\\text{ kal} > 8.000\\text{ kal}$, sehingga seluruh es mencair.\nAsas Black: $8.000 + 100(1)(T - 0) = 200(1)(55 - T) \\Rightarrow 300T = 3.000 \\Rightarrow T = 10^\\circ\\text{C}$.'
      },
      {
        title: 'Suhu sambungan dua batang logam seri',
        problem: 'Batang P dan Q berukuran sama disambung seri dengan $k_P = 3k_Q$. Ujung bebas P bersuhu $100^\\circ\\text{C}$ dan ujung bebas Q bersuhu $20^\\circ\\text{C}$. Tentukan suhu tepat pada sambungannya.',
        solution: 'Pada keadaan tunak, laju rambatan kalor sama di kedua batang: $\\dfrac{k_P A(100 - T_s)}{L} = \\dfrac{k_Q A(T_s - 20)}{L}$.\n$3(100 - T_s) = T_s - 20 \\Rightarrow 300 - 3T_s = T_s - 20 \\Rightarrow 4T_s = 320 \\Rightarrow T_s = 80^\\circ\\text{C}$.'
      },
      {
        title: 'Efisiensi dan usaha mesin Carnot',
        problem: 'Sebuah mesin Carnot bekerja antara reservoir suhu tinggi $627^\\circ\\text{C}$ dan reservoir dingin $177^\\circ\\text{C}$ sambil menyerap kalor $2.400\\text{ J}$ per siklus. Tentukan efisiensi mesin dan usaha yang dihasilkannya.',
        solution: 'Ubah ke Kelvin: $T_1 = 627 + 273 = 900\\text{ K}$ dan $T_2 = 177 + 273 = 450\\text{ K}$.\nEfisiensi: $\\eta = 1 - \\dfrac{450}{900} = 0{,}5 = 50\\%$.\nUsaha per siklus: $W = \\eta Q_1 = 0{,}5 \\times 2.400 = 1.200\\text{ J}$.'
      }
    ],
    misconceptions: [
      'Memasukkan suhu dalam derajat Celsius ke dalam persamaan gas ideal ($PV = nRT$), radiasi ($T^4$), atau efisiensi Carnot ($1 - T_2/T_1$). Semua persamaan tersebut wajib memakai suhu mutlak dalam Kelvin ($T = t + 273$).',
      'Mengira proses isotermal ($\\Delta T = 0$) tidak memiliki perpindahan kalor maupun usaha. Pada pemuaian isotermal, $\\Delta U = 0$ sehingga seluruh kalor yang diserap diubah menjadi usaha luar ($Q = W$).',
      'Menyamakan proses adiabatik dengan proses bersuhu tetap. Adiabatik berarti tidak ada kalor masuk/keluar ($Q = 0$); ketika gas memuai secara adiabatik, suhunya justru turun karena energi dalam terpakai untuk melakukan usaha ($\\Delta U = -W$).'
    ],
    tutorTip: 'Ingat tiga identitas cepat Hukum I Termodinamika ($\\Delta U = Q - W$): Isokhorik $\\to W = 0$; Isotermal $\\to \\Delta U = 0$; Adiabatik $\\to Q = 0$. Dan selalu konversi suhu ke Kelvin kecuali saat menghitung selisih suhu $\\Delta T$!'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sebatang baja sepanjang $2\\text{ m}$ pada suhu $20^\\circ\\text{C}$ dipanaskan hingga mencapai suhu $120^\\circ\\text{C}$. Jika koefisien muai panjang baja $\\alpha = 1{,}2 \\times 10^{-5}\\ /^\\circ\\text{C}$, pertambahan panjang baja tersebut adalah...',
      options: ['2,4 mm', '1,2 mm', '4,8 mm', '0,24 mm'],
      answer: 'A',
      hint: 'Hitung $\\Delta L = L_0 \\alpha \\Delta T$ dalam meter lalu ubah ke milimeter ($1\\text{ m} = 1.000\\text{ mm}$).',
      solution: '$\\Delta T = 120 - 20 = 100^\\circ\\text{C}$.\n$\\Delta L = 2 \\times 1{,}2 \\times 10^{-5} \\times 100 = 2{,}4 \\times 10^{-3}\\text{ m} = 2{,}4\\text{ mm}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bumi menerima radiasi gelombang pendek dari Matahari, lalu memancarkan kembali energi panas ke angkasa sebagai radiasi inframerah gelombang panjang yang sebagian diserap oleh gas rumah kaca di atmosfer. Dampak fisis meningkatnya konsentrasi gas rumah kaca terhadap keseimbangan energi termal Bumi adalah...',
      options: [
        'meningkatkan laju konduksi panas dari kerak bumi ke luar angkasa secara langsung',
        'menghalangi seluruh cahaya tampak Matahari masuk sehingga suhu Bumi terus menurun',
        'memerangkap lebih banyak radiasi inframerah yang dipancarkan Bumi sehingga suhu rata-rata permukaan naik',
        'menurunkan kalor jenis air laut sehingga lautan membeku lebih cepat'
      ],
      answer: 'C',
      hint: 'Gas rumah kaca transparan terhadap cahaya tampak Matahari tetapi menyerap dan memancarkan kembali radiasi inframerah termal.',
      solution: 'Meningkatnya gas rumah kaca **memerangkap lebih banyak radiasi inframerah** yang dipancarkan permukaan Bumi, menghambat pelepasan kalor ke angkasa sehingga **suhu rata-rata permukaan Bumi meningkat** (pemanasan global). Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sejumlah gas ideal berada dalam tabung tertutup bersuhu $27^\\circ\\text{C}$. Agar energi kinetik rata-rata molekul gas menjadi $2$ kali lipat semula, suhu gas harus dinaikkan menjadi...',
      options: ['54 °C', '300 °C', '600 °C', '327 °C'],
      answer: 'D',
      hint: 'Energi kinetik rata-rata $\\bar{E}_k = \\tfrac{3}{2}k_B T$ sebanding dengan suhu mutlak dalam Kelvin.',
      solution: '$T_1 = 27 + 273 = 300\\text{ K}$. Agar $\\bar{E}_k$ menjadi $2$ kali lipat, suhu mutlak harus menjadi $T_2 = 2 \\times 300 = 600\\text{ K} = 600 - 273 = 327^\\circ\\text{C}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada suatu proses termodinamika terhadap gas ideal dalam wadah tertutup, tidak ada kalor yang masuk maupun keluar sistem ($Q = 0$), tetapi gas memuai melakukan usaha luar sehingga suhunya turun. Proses ini disebut...',
      options: ['isotermal', 'adiabatik', 'isobarik', 'isokhorik'],
      answer: 'B',
      hint: 'Cari proses yang terisolasi secara termal ($Q = 0$).',
      solution: 'Proses tanpa pertukaran kalor ($Q = 0$) disebut **proses adiabatik**. Karena memuai ($W > 0$), $\\Delta U = -W < 0$ sehingga suhu gas turun. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah mesin Carnot beroperasi di antara reservoir suhu tinggi $627^\\circ\\text{C}$ dan reservoir suhu rendah $177^\\circ\\text{C}$. Efisiensi teoretis maksimum mesin Carnot tersebut adalah...',
      options: ['28%', '72%', '50%', '60%'],
      answer: 'C',
      hint: 'Ubah kedua suhu ke Kelvin ($+ 273$), lalu gunakan $\\eta = (1 - T_2/T_1) \\times 100\\%$.',
      solution: '$T_1 = 627 + 273 = 900\\text{ K}$ dan $T_2 = 177 + 273 = 450\\text{ K}$.\n$\\eta = \\left(1 - \\dfrac{450}{900}\\right) \\times 100\\% = 50\\%$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebanyak $100\\text{ g}$ es bersuhu $0^\\circ\\text{C}$ ($L_{\\text{es}} = 80\\text{ kal/g}$) dicampur dengan $200\\text{ g}$ air bersuhu $55^\\circ\\text{C}$ ($c_{\\text{air}} = 1\\text{ kal/g}^\\circ\\text{C}$) dalam kalorimeter terisolasi. Suhu akhir campuran saat tercapai kesetimbangan termal adalah...',
      options: ['10 °C', '20 °C', '5 °C', '15 °C'],
      answer: 'A',
      hint: 'Kalor yang diserap es terdiri dari kalor lebur $m_{\\text{es}} L_{\\text{es}}$ ditambah kalor menaikkan suhu air hasil leburan dari $0^\\circ\\text{C}$ ke $T$.',
      solution: 'Asas Black: $m_{\\text{es}} L + m_{\\text{es}} c(T - 0) = m_{\\text{air}} c(55 - T)$.\n$100(80) + 100(1)T = 200(1)(55 - T) \\Rightarrow 8.000 + 100T = 11.000 - 200T \\Rightarrow 300T = 3.000 \\Rightarrow T = 10^\\circ\\text{C}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dua batang logam P dan Q yang panjang serta luas penampangnya sama disambungkan ujung ke ujung. Konduktivitas termal P tiga kali konduktivitas termal Q ($k_P = 3 k_Q$). Jika ujung bebas P dijaga pada suhu $100^\\circ\\text{C}$ dan ujung bebas Q pada $20^\\circ\\text{C}$, suhu tepat pada sambungan kedua batang dalam keadaan tunak adalah...',
      options: ['60 °C', '40 °C', '75 °C', '80 °C'],
      answer: 'D',
      hint: 'Samakan laju hantaran kalor konduksi $H_P = H_Q$ karena ukuran kedua batang identik.',
      solution: '$\\dfrac{k_P A(100 - T_s)}{L} = \\dfrac{k_Q A(T_s - 20)}{L} \\Rightarrow 3(100 - T_s) = T_s - 20 \\Rightarrow 300 - 3T_s = T_s - 20 \\Rightarrow 4T_s = 320 \\Rightarrow T_s = 80^\\circ\\text{C}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Gas ideal di dalam silinder bervolume $6\\text{ liter}$ memiliki tekanan $2 \\times 10^5\\text{ Pa}$ pada suhu $27^\\circ\\text{C}$. Gas kemudian dimampatkan hingga volumenya menjadi $2\\text{ liter}$ dan suhunya naik menjadi $127^\\circ\\text{C}$. Tekanan gas sekarang adalah...',
      options: ['6 × 10⁵ Pa', '8 × 10⁵ Pa', '4 × 10⁵ Pa', '12 × 10⁵ Pa'],
      answer: 'B',
      hint: 'Gunakan hukum gabungan gas ideal $\\dfrac{P_1 V_1}{T_1} = \\dfrac{P_2 V_2}{T_2}$ dengan $T$ dalam Kelvin.',
      solution: '$T_1 = 27 + 273 = 300\\text{ K}$ dan $T_2 = 127 + 273 = 400\\text{ K}$.\n$P_2 = P_1 \\cdot \\dfrac{V_1}{V_2} \\cdot \\dfrac{T_2}{T_1} = (2 \\times 10^5) \\times \\dfrac{6}{2} \\times \\dfrac{400}{300} = 8 \\times 10^5\\text{ Pa}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah gas ideal mengalami proses isobarik pada tekanan tetap $2 \\times 10^5\\text{ Pa}$ sehingga volumenya mengembang dari $1\\text{ m}^3$ menjadi $4\\text{ m}^3$ seperti ditunjukkan pada diagram $P\\text{--}V$. Usaha yang dilakukan oleh gas pada proses tersebut adalah...',
      options: ['200 kJ', '400 kJ', '600 kJ', '800 kJ'],
      answer: 'C',
      hint: 'Pada proses isobarik, usaha sama dengan luas persegi panjang di bawah kurva $P\\text{--}V$: $W = P(V_2 - V_1)$.',
      solution: '$W = P\\Delta V = (2 \\times 10^5)(4 - 1) = 6 \\times 10^5\\text{ J} = 600\\text{ kJ}$. Jawaban: **C**.',
      visual: {
        type: 'pv-diagram',
        props: {
          title: 'Diagram P–V Proses Isobarik',
          points: [[1, 2], [4, 2]],
          pTicks: [2],
          vTicks: [1, 4],
          pLabel: 'P (×10⁵ Pa)',
          vLabel: 'V (m³)',
          processLabel: 'Isobarik'
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Suatu sistem gas menyerap kalor sebesar $1.500\\text{ J}$ dari lingkungannya dan pada saat bersamaan dikenai usaha luar sebesar $500\\text{ J}$ karena dimampatkan. Perubahan energi dalam sistem gas tersebut adalah...',
      options: ['naik 2.000 J', 'naik 1.000 J', 'turun 1.000 J', 'turun 2.000 J'],
      answer: 'A',
      hint: 'Dalam $\\Delta U = Q - W$, kalor masuk bernilai positif ($+1.500\\text{ J}$) dan usaha yang dikenakan pada sistem bernilai negatif ($-500\\text{ J}$).',
      solution: '$\\Delta U = Q - W = 1.500 - (-500) = +2.000\\text{ J}$, sehingga energi dalam sistem **naik 2.000 J**. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Gas ideal monoatomik di dalam wadah tertutup bervolume $4\\text{ liter}$ memiliki tekanan $3 \\times 10^5\\text{ Pa}$ ($1\\text{ liter} = 10^{-3}\\text{ m}^3$). Energi dalam total gas ideal tersebut adalah...',
      options: ['1.200 J', '2.400 J', '800 J', '1.800 J'],
      answer: 'D',
      hint: 'Untuk gas ideal monoatomik, gunakan $U = \\tfrac{3}{2} nRT = \\tfrac{3}{2} P V$.',
      solution: '$U = \\tfrac{3}{2} P V = \\tfrac{3}{2}(3 \\times 10^5)(4 \\times 10^{-3}) = 1{,}5 \\times 1.200 = 1.800\\text{ J}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah benda hitam sempurna memancarkan daya radiasi sebesar $P$ pada suhu $27^\\circ\\text{C}$. Jika suhu benda dinaikkan menjadi $327^\\circ\\text{C}$, daya radiasi yang dipancarkan menjadi...',
      options: ['4P', '16P', '8P', '2P'],
      answer: 'B',
      hint: 'Gunakan hukum Stefan–Boltzmann $P \\propto T^4$ dengan $T$ dinyatakan dalam Kelvin.',
      solution: '$T_1 = 27 + 273 = 300\\text{ K}$ dan $T_2 = 327 + 273 = 600\\text{ K} = 2T_1$.\n$\\dfrac{P_2}{P_1} = \\left(\\dfrac{T_2}{T_1}\\right)^4 = 2^4 = 16$, sehingga $P_2 = 16P$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah mesin kalor bekerja dalam siklus tertutup berbentuk persegi panjang pada diagram $P\\text{--}V$ seperti pada gambar. Tekanan gas berubah antara $100\\text{ kPa}$ dan $400\\text{ kPa}$, sedangkan volumenya berubah antara $2\\text{ L}$ dan $6\\text{ L}$ ($1\\text{ L} = 10^{-3}\\text{ m}^3$). Jika siklus berjalan searah jarum jam dan kalor yang diserap dari reservoir panas dalam satu siklus sebesar $2.000\\text{ J}$, usaha bersih per siklus dan efisiensi termal mesin tersebut berturut-turut adalah...',
      options: [
        '1.200 J dan 60%',
        '1.600 J dan 80%',
        '800 J dan 40%',
        '1.200 J dan 40%'
      ],
      answer: 'A',
      hint: 'Usaha bersih satu siklus tertutup sama dengan luas persegi panjang $\\Delta P \\times \\Delta V$, lalu efisiensi $\\eta = (W / Q_1) \\times 100\\%$.',
      solution: '$\\Delta P = (400 - 100)\\text{ kPa} = 300.000\\text{ Pa}$ dan $\\Delta V = (6 - 2) \\times 10^{-3} = 4 \\times 10^{-3}\\text{ m}^3$.\n$W = 300.000 \\times 4 \\times 10^{-3} = 1.200\\text{ J}$.\nEfisiensi: $\\eta = \\dfrac{1.200}{2.000} \\times 100\\% = 60\\%$. Jawaban: **A**.',
      visual: {
        type: 'pv-diagram',
        props: {
          title: 'Siklus Termodinamika P–V',
          points: [[2, 400], [6, 400], [6, 100], [2, 100]],
          pTicks: [100, 400],
          vTicks: [2, 6],
          pLabel: 'P (kPa)',
          vLabel: 'V (L)',
          closed: true
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak $2\\text{ mol}$ gas ideal monoatomik mengalami pemuaian isobarik sehingga melakukan usaha luar sebesar $400\\text{ J}$. Besar perubahan energi dalam dan kalor yang diserap gas selama proses tersebut berturut-turut adalah...',
      options: [
        '400 J dan 800 J',
        '600 J dan 800 J',
        '600 J dan 1.000 J',
        '1.000 J dan 1.400 J'
      ],
      answer: 'C',
      hint: 'Pada proses isobarik $W = P\\Delta V = nR\\Delta T$, sedangkan pada gas monoatomik $\\Delta U = \\tfrac{3}{2}nR\\Delta T = \\tfrac{3}{2}W$.',
      solution: 'Karena $W = nR\\Delta T = 400\\text{ J}$, maka $\\Delta U = \\tfrac{3}{2}nR\\Delta T = \\tfrac{3}{2}(400) = 600\\text{ J}$.\nMenurut Hukum I Termodinamika: $Q = \\Delta U + W = 600 + 400 = 1.000\\text{ J}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah mesin Carnot yang menggunakan reservoir dingin bersuhu $300\\text{ K}$ memiliki efisiensi $40\\%$. Agar efisiensinya meningkat menjadi $60\\%$ dengan suhu reservoir dingin tetap $300\\text{ K}$, suhu reservoir panas harus dinaikkan menjadi...',
      options: ['600 K', '900 K', '650 K', '750 K'],
      answer: 'D',
      hint: 'Gunakan rumus efisiensi Carnot $\\eta = 1 - \\dfrac{T_2}{T_1\'}$ langsung untuk kondisi akhir.',
      solution: 'Pada efisiensi target $60\\%$ ($0{,}6$): $0{,}6 = 1 - \\dfrac{300}{T_1\'} \\Rightarrow \\dfrac{300}{T_1\'} = 0{,}4 \\Rightarrow T_1\' = \\dfrac{300}{0{,}4} = 750\\text{ K}$. Jawaban: **D**.'
    })
  ]
});
