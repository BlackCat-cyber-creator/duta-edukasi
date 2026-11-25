/**
 * Paket Soal Terstruktur: OSN-K Kimia SMA 2024 (30 soal pilihan ganda terverifikasi)
 * Sumber: scraped_raw/osnk-kimia-sma-2024.md (naskah OSN-K Kimia SMA 2024, 50 soal).
 * 15 soal bergambar/tabel gambar (11, 13, 16, 17, 18, 21, 25, 31, 40-46) dan 5 soal dengan data tidak lengkap/inkonsisten (2, 8, 12, 28, 33) dilewati.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-kim-sma-2024',
  slug: 'osnk-kimia-sma-2024',
  subject: 'olimpiade-kim',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'OSN-K Kimia SMA 2024',
  relatedChapterIds: [
    'kimia10-bab3-ikatan-kimia-dan-bentuk-molekul',
    'kimia10-bab4-hukum-dasar-dan-stoikiometri',
    'kimia11-bab2-termokimia',
    'kimia11-bab3-laju-reaksi',
    'kimia11-bab4-kesetimbangan-kimia',
    'kimia11-bab5-asam-basa-buffer-dan-hidrolisis',
    'kimia12-bab1-sifat-koligatif-larutan',
    'kimia12-bab2-redoks-dan-elektrokimia',
    'kimia12-bab3-kimia-unsur',
    'kimia12-bab4-senyawa-karbon-dan-makromolekul'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Kimia SMA 2024',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 30 soal pilihan ganda berikut (masing-masing bernilai 1 poin). Dari 50 soal asli OSN-K Kimia SMA 2024, dimuat 30 soal teks-lengkap terverifikasi (nomor asli: 1, 3, 4, 5, 6, 7, 9, 10, 14, 15, 19, 20, 22, 23, 24, 26, 27, 29, 30, 32, 34, 35, 36, 37, 38, 39, 47, 48, 49, 50) dan dilewati 20 soal: 15 soal yang bergantung pada gambar/kurva/spektrum/struktur (nomor 11, 13, 16, 17, 18, 21, 25, 31, 40, 41, 42, 43, 44, 45, 46) serta 5 soal yang datanya tidak lengkap atau tidak konsisten pada naskah hasil arsip (nomor 2, 8, 12, 28, 33).',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-kimia-sma-2024.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 30,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (30 soal pilihan ganda, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Senyawa kalsium hipoklorit ($\\mathrm{Ca(OCl)_2}$) larut baik dalam air, yang digunakan sebagai desinfektan pada kolam renang. Adanya ion hipoklorit maupun asam hipoklorit dalam air kolam tersebut dapat membunuh bakteri. Kelarutan $\\mathrm{Ca(OCl)_2}$ serta kesetimbangan asam hipoklorit dan ion hipoklorit dalam air sebagai berikut:\n$$\\mathrm{Ca(OCl)_2}(s) + 2\\mathrm{H_2O}(l) \\rightarrow 2\\mathrm{HClO}(aq) + \\mathrm{Ca(OH)_2}(s)$$\n$$\\mathrm{HClO}(aq) + \\mathrm{H_2O}(l) \\rightleftharpoons \\mathrm{ClO^-}(aq) + \\mathrm{H_3O^+}(aq) \\qquad K_a = 3{,}0 \\times 10^{-8}$$\nKadar ion hipoklorit yang tinggi dapat terdekomposisi oleh cahaya matahari. Oleh karena itu, $\\mathrm{pH}$ air kolam renang yang direkomendasikan yaitu $7{,}8$. Persentase masing-masing spesi yang terdapat dalam air kolam renang pada kondisi $\\mathrm{pH}$ tersebut adalah ....\n\nA. $\\mathrm{HClO} = 65{,}44\\%$ dan $\\mathrm{ClO^-} = 34{,}56\\%$\nB. $\\mathrm{HClO} = 33{,}33\\%$ dan $\\mathrm{ClO^-} = 66{,}67\\%$\nC. $\\mathrm{HClO} = 66{,}67\\%$ dan $\\mathrm{ClO^-} = 33{,}33\\%$\nD. $\\mathrm{HClO} = 34{,}56\\%$ dan $\\mathrm{ClO^-} = 65{,}44\\%$\nE. $\\mathrm{HClO} = 24{,}37\\%$ dan $\\mathrm{ClO^-} = 75{,}63\\%$',
          answer: 'D. $\\mathrm{HClO} = 34{,}56\\%$ dan $\\mathrm{ClO^-} = 65{,}44\\%$',
          principle:
            'Persentase fraksi mol pasangan asam-basa konjugasi ditentukan dari rasio $K_a / [\\mathrm{H_3O^+}]$ melalui persamaan kesetimbangan asam lemah.',
          solution:
            'Dari definisi tetapan ionisasi asam lemah:\n$$K_a = \\frac{[\\mathrm{ClO^-}][\\mathrm{H_3O^+}]}{[\\mathrm{HClO}]} \\implies \\frac{[\\mathrm{ClO^-}]}{[\\mathrm{HClO}]} = \\frac{K_a}{[\\mathrm{H_3O^+}]}.$$\nPada $\\mathrm{pH} = 7{,}8$, konsentrasi ion hidronium adalah:\n$$[\\mathrm{H_3O^+}] = 10^{-7{,}8} = 1{,}5849 \\times 10^{-8}\\text{ M}.$$\nMaka rasio basa konjugasi terhadap asamnya:\n$$r = \\frac{[\\mathrm{ClO^-}]}{[\\mathrm{HClO}]} = \\frac{3{,}0 \\times 10^{-8}}{1{,}5849 \\times 10^{-8}} \\approx 1{,}8929.$$\nFraksi masing-masing spesi dalam sistem total $[\\mathrm{HClO}] + [\\mathrm{ClO^-}]$ adalah:\n$$\\%\\mathrm{HClO} = \\frac{1}{1 + r} \\times 100\\% = \\frac{1}{2{,}8929} \\times 100\\% \\approx 34{,}57\\%,$$\n$$\\%\\mathrm{ClO^-} = 100\\% - 34{,}57\\% = 65{,}43\\%.$$\nNilai ini paling sesuai dengan pilihan D ($\\mathrm{HClO} = 34{,}56\\%$ dan $\\mathrm{ClO^-} = 65{,}44\\%$).',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Sebanyak $2{,}76\\text{ g}$ suatu senyawa $\\mathrm{C}_x\\mathrm{H}_y\\mathrm{O}_z$ dibakar sempurna dalam bom kalorimeter yang memiliki kapasitas sebesar $4217\\text{ J/}^\\circ\\mathrm{C}$. Bom kalorimeter direndam dalam $5\\text{ L}$ air yang mula-mula memiliki temperatur $23\\,^\\circ\\mathrm{C}$, dan kemudian naik menjadi $25{,}4\\,^\\circ\\mathrm{C}$ karena proses pembakaran. Diketahui kalor jenis air sebesar $4{,}2\\text{ J g}^{-1}\\,^\\circ\\mathrm{C}^{-1}$ dan kalor pembakaran $\\mathrm{C}_x\\mathrm{H}_y\\mathrm{O}_z$ adalah $-3026\\text{ kJ/mol}$. Senyawa $\\mathrm{C}_x\\mathrm{H}_y\\mathrm{O}_z$ yang mungkin adalah ....\n\nA. $\\mathrm{C_4H_8O_4}$\nB. $\\mathrm{C_6H_{12}O_6}$\nC. $\\mathrm{C_6H_8O_6}$\nD. $\\mathrm{C_7H_6O_2}$\nE. $\\mathrm{C_7H_6O_3}$',
          answer: 'E. $\\mathrm{C_7H_6O_3}$',
          principle:
            'Kalor yang dilepaskan reaksi pembakaran diserap oleh bom kalorimeter dan air: $q_{\\text{reaksi}} = -(C_{\\text{kal}} + m_{\\text{air}}c_{\\text{air}})\\Delta T$.',
          solution:
            'Dengan massa jenis air $\\rho = 1\\text{ g/mL}$, massa $5\\text{ L}$ air adalah $m_{\\text{air}} = 5000\\text{ g}$, dan kenaikan suhu $\\Delta T = 25{,}4 - 23{,}0 = 2{,}4\\,^\\circ\\mathrm{C}$.\nKalor total yang diserap sistem kalorimeter dan air adalah:\n$$q_{\\text{serap}} = (C_{\\text{kal}} + m_{\\text{air}} c_{\\text{air}}) \\Delta T = (4217 + 5000 \\times 4{,}2) \\times 2{,}4 = 25217 \\times 2{,}4 = 60520{,}8\\text{ J} = 60{,}5208\\text{ kJ}.$$\nKarena kalor pembakaran adalah $-3026\\text{ kJ/mol}$, jumlah mol senyawa yang terbakar:\n$$n = \\frac{q_{\\text{serap}}}{|\\Delta H_{\\text{pembakaran}}|} = \\frac{60{,}5208\\text{ kJ}}{3026\\text{ kJ/mol}} = 0{,}0200\\text{ mol}.$$\nMassa molar senyawa tersebut adalah:\n$$M_r = \\frac{m}{n} = \\frac{2{,}76\\text{ g}}{0{,}0200\\text{ mol}} = 138{,}0\\text{ g/mol}.$$\nPeriksa massa molar opsi: $\\mathrm{C_7H_6O_3} = 7(12) + 6(1) + 3(16) = 84 + 6 + 48 = 138\\text{ g/mol}$.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Posisi kesetimbangan dari reaksi di bawah ini berada di sebelah kanan.\n$$\\mathrm{N_2H_5^+} + \\mathrm{NH_3} \\rightleftharpoons \\mathrm{NH_4^+} + \\mathrm{N_2H_4}$$\n$$\\mathrm{NH_3} + \\mathrm{HBr} \\rightleftharpoons \\mathrm{NH_4^+} + \\mathrm{Br^-}$$\n$$\\mathrm{N_2H_4} + \\mathrm{HBr} \\rightleftharpoons \\mathrm{N_2H_5^+} + \\mathrm{Br^-}$$\nBerdasarkan informasi tersebut, urutan kekuatan asam yang benar adalah ....\n\nA. $\\mathrm{N_2H_5^+} > \\mathrm{N_2H_4} > \\mathrm{NH_4^+}$\nB. $\\mathrm{NH_3} > \\mathrm{N_2H_4} > \\mathrm{Br^-}$\nC. $\\mathrm{N_2H_5^+} > \\mathrm{HBr} > \\mathrm{NH_4^+}$\nD. $\\mathrm{HBr} > \\mathrm{N_2H_5^+} > \\mathrm{NH_4^+}$\nE. $\\mathrm{N_2H_5^+} > \\mathrm{NH_4^+} > \\mathrm{HBr}$',
          answer: 'D. $\\mathrm{HBr} > \\mathrm{N_2H_5^+} > \\mathrm{NH_4^+}$',
          principle:
            'Dalam kesetimbangan asam-basa Brønsted–Lowry, posisi kesetimbangan bergeser ke arah pembentukan asam dan basa yang lebih lemah.',
          solution:
            'Tinjau arah pergeseran ke kanan pada ketiga kesetimbangan:\n1. Pada reaksi $\\mathrm{N_2H_5^+} + \\mathrm{NH_3} \\rightleftharpoons \\mathrm{NH_4^+} + \\mathrm{N_2H_4}$, kesetimbangan di kanan berarti asam di kiri lebih kuat daripada asam konjugasi di kanan: $\\mathrm{N_2H_5^+} > \\mathrm{NH_4^+}$.\n2. Pada reaksi $\\mathrm{NH_3} + \\mathrm{HBr} \\rightleftharpoons \\mathrm{NH_4^+} + \\mathrm{Br^-}$, kesetimbangan di kanan berarti $\\mathrm{HBr} > \\mathrm{NH_4^+}$.\n3. Pada reaksi $\\mathrm{N_2H_4} + \\mathrm{HBr} \\rightleftharpoons \\mathrm{N_2H_5^+} + \\mathrm{Br^-}$, kesetimbangan di kanan berarti $\\mathrm{HBr} > \\mathrm{N_2H_5^+}$.\nMenggabungkan ketiga pertidaksamaan tersebut menghasilkan urutan kekuatan asam: $\\mathrm{HBr} > \\mathrm{N_2H_5^+} > \\mathrm{NH_4^+}$.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Urutan senyawa-senyawa berikut berdasarkan kenaikan titik didih adalah ....\n\nA. $\\mathrm{C_3H_8} < \\mathrm{CH_3COCH_3} < \\mathrm{H_2O} < \\mathrm{C_3H_7OH}$\nB. $\\mathrm{CH_3COCH_3} < \\mathrm{C_3H_8} < \\mathrm{H_2O} < \\mathrm{C_3H_7OH}$\nC. $\\mathrm{CH_3COCH_3} < \\mathrm{C_3H_8} < \\mathrm{C_3H_7OH} < \\mathrm{H_2O}$\nD. $\\mathrm{C_3H_8} < \\mathrm{CH_3COCH_3} < \\mathrm{C_3H_7OH} < \\mathrm{H_2O}$\nE. $\\mathrm{C_3H_8} < \\mathrm{C_3H_7OH} < \\mathrm{CH_3COCH_3} < \\mathrm{H_2O}$',
          answer: 'D. $\\mathrm{C_3H_8} < \\mathrm{CH_3COCH_3} < \\mathrm{C_3H_7OH} < \\mathrm{H_2O}$',
          principle:
            'Titik didih meningkat seiring bertambah kuatnya gaya antarmolekul: gaya dispersi London $<$ gaya dipol–dipol $<$ ikatan hidrogen tunggal $<$ jaringan ikatan hidrogen tiga dimensi.',
          solution:
            'Bandingkan interaksi antarmolekul keempat senyawa:\n- $\\mathrm{C_3H_8}$ (propana): molekul nonpolar, hanya memiliki gaya dispersi London yang lemah (titik didih $\\approx -42\\,^\\circ\\mathrm{C}$).\n- $\\mathrm{CH_3COCH_3}$ (aseton): molekul polar tanpa ikatan $\\mathrm{O-H}$, memiliki gaya dipol–dipol selain gaya dispersi (titik didih $\\approx 56\\,^\\circ\\mathrm{C}$).\n- $\\mathrm{C_3H_7OH}$ (propanol): memiliki satu gugus $-\\mathrm{OH}$ sehingga membentuk ikatan hidrogen antarmolekul (titik didih $\\approx 82\\text{–}97\\,^\\circ\\mathrm{C}$).\n- $\\mathrm{H_2O}$ (air): setiap molekul memiliki dua atom $\\mathrm{H}$ donor dan dua pasangan elektron bebas akseptor pada $\\mathrm{O}$, membentuk jaringan ikatan hidrogen yang sangat ekstensif sehingga titik didihnya paling tinggi ($100\\,^\\circ\\mathrm{C}$).\nJadi urutan kenaikan titik didih adalah $\\mathrm{C_3H_8} < \\mathrm{CH_3COCH_3} < \\mathrm{C_3H_7OH} < \\mathrm{H_2O}$.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Reaksi $\\mathrm{A}(g) \\rightarrow \\mathrm{B}(g)$ memiliki energi pengaktifan sebesar $50{,}2\\text{ kJ/mol}$. Suhu yang diperlukan agar reaksi berlangsung empat kali lebih cepat dari suhu $25\\,^\\circ\\mathrm{C}$ adalah ....\n\nA. $50{,}1\\,^\\circ\\mathrm{C}$\nB. $46{,}9\\,^\\circ\\mathrm{C}$\nC. $30{,}3\\,^\\circ\\mathrm{C}$\nD. $29{,}4\\,^\\circ\\mathrm{C}$\nE. $26{,}5\\,^\\circ\\mathrm{C}$',
          answer: 'B. $46{,}9\\,^\\circ\\mathrm{C}$',
          principle:
            'Hubungan tetapan laju reaksi dengan suhu dinyatakan oleh persamaan Arrhenius: $\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$.',
          solution:
            'Diketahui $E_a = 50{,}2\\text{ kJ/mol} = 50200\\text{ J/mol}$, $R = 8{,}314\\text{ J mol}^{-1}\\text{K}^{-1}$, $T_1 = 25 + 273{,}15 = 298{,}15\\text{ K}$, dan $k_2 / k_1 = 4$.\nDari persamaan Arrhenius:\n$$\\frac{1}{T_2} = \\frac{1}{T_1} - \\frac{R}{E_a} \\ln\\left(\\frac{k_2}{k_1}\\right).$$\nSubstitusi nilai numerik:\n$$\\frac{1}{T_2} = \\frac{1}{298{,}15} - \\frac{8{,}314 \\times \\ln 4}{50200} = 3{,}3540 \\times 10^{-3} - 2{,}2960 \\times 10^{-4} = 3{,}1244 \\times 10^{-3}\\text{ K}^{-1}.$$\nDiperoleh:\n$$T_2 = \\frac{1}{3{,}1244 \\times 10^{-3}} = 320{,}06\\text{ K} = 320{,}06 - 273{,}15 = 46{,}91\\,^\\circ\\mathrm{C} \\approx 46{,}9\\,^\\circ\\mathrm{C}.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Pembakaran sempurna $3{,}240\\text{ g}$ senyawa nonelektrolit $\\mathrm{X}$ yang mengandung karbon, hidrogen, dan oksigen menghasilkan $8{,}150\\text{ g}$ $\\mathrm{CO_2}$ dan $2{,}500\\text{ g}$ air. Senyawa $\\mathrm{X}$ sebanyak $16{,}128\\text{ g}$ dilarutkan ke dalam $281\\text{ g}$ air dan menghasilkan larutan yang memiliki titik beku $-0{,}763\\,^\\circ\\mathrm{C}$. Rumus molekul senyawa $\\mathrm{X}$ adalah .... (Diketahui $K_f$ air $= 1{,}86\\,^\\circ\\mathrm{C/m}$)\n\nA. $\\mathrm{C_7H_8O_3}$\nB. $\\mathrm{C_6H_6O_4}$\nC. $\\mathrm{C_9H_{16}O}$\nD. $\\mathrm{C_4H_{12}O_5}$\nE. $\\mathrm{C_8H_{12}O_2}$',
          answer: 'E. $\\mathrm{C_8H_{12}O_2}$',
          principle:
            'Rumus empiris diperoleh dari analisis pembakaran ($n_{\\mathrm{C}} : n_{\\mathrm{H}} : n_{\\mathrm{O}}$), sedangkan massa molar ditentukan dari penurunan titik beku $\\Delta T_f = K_f \\cdot m$.',
          solution:
            'Langkah 1: Menentukan rumus empiris dari pembakaran $3{,}240\\text{ g}$ $\\mathrm{X}$.\n$$n_{\\mathrm{C}} = n_{\\mathrm{CO_2}} = \\frac{8{,}150}{44{,}01} = 0{,}1852\\text{ mol} \\implies m_{\\mathrm{C}} = 0{,}1852 \\times 12{,}01 = 2{,}224\\text{ g},$$\n$$n_{\\mathrm{H}} = 2 n_{\\mathrm{H_2O}} = 2 \\times \\frac{2{,}500}{18{,}015} = 0{,}2775\\text{ mol} \\implies m_{\\mathrm{H}} = 0{,}2775 \\times 1{,}008 = 0{,}280\\text{ g}.$$\nMassa oksigen dalam sampel adalah:\n$$m_{\\mathrm{O}} = 3{,}240 - 2{,}224 - 0{,}280 = 0{,}736\\text{ g} \\implies n_{\\mathrm{O}} = \\frac{0{,}736}{16{,}00} = 0{,}0460\\text{ mol}.$$\nPerbandingan mol paling sederhana:\n$$n_{\\mathrm{C}} : n_{\\mathrm{H}} : n_{\\mathrm{O}} = \\frac{0{,}1852}{0{,}0460} : \\frac{0{,}2775}{0{,}0460} : 1 \\approx 4 : 6 : 1,$$\nsehingga rumus empiris adalah $\\mathrm{C_4H_6O}$ dengan massa rumus empiris $4(12) + 6(1) + 16 = 70\\text{ g/mol}$.\n\nLangkah 2: Menentukan massa molar dari $\\Delta T_f = 0{,}763\\,^\\circ\\mathrm{C}$ ($i = 1$ karena nonelektrolit).\n$$\\Delta T_f = K_f \\cdot \\frac{m_{\\mathrm{X}}}{M_r} \\cdot \\frac{1000}{m_{\\text{air}}} \\implies M_r = \\frac{K_f \\cdot m_{\\mathrm{X}} \\cdot 1000}{\\Delta T_f \\cdot m_{\\text{air}}} = \\frac{1{,}86 \\times 16{,}128 \\times 1000}{0{,}763 \\times 281} \\approx 139{,}9\\text{ g/mol}.$$\nFaktor pengali $n = \\frac{139{,}9}{70} \\approx 2$, sehingga rumus molekul $\\mathrm{X}$ adalah $(\\mathrm{C_4H_6O})_2 = \\mathrm{C_8H_{12}O_2}$.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Perhatikan pernyataan-pernyataan mengenai energi ikat berikut:\n1. Energi ikat hanya dapat digunakan pada penentuan panas reaksi-reaksi dalam fasa gas.\n2. Energi yang dibutuhkan untuk memutuskan tiga ikatan $\\mathrm{N-H}$ pada molekul $\\mathrm{NH_3}$ berturut-turut adalah sama karena tiga ikatan $\\mathrm{N-H}$ tersebut ekuivalen.\n3. Ikatan $\\mathrm{N-H}$ pada beberapa molekul berbeda seperti $\\mathrm{NH_3}$ dan $\\mathrm{CH_3NH_2}$ memiliki nilai energi ikat yang sedikit berbeda.\n\nPernyataan berikut yang tepat mengenai energi ikat adalah ....\n\nA. Hanya 1\nB. 1 dan 2\nC. 1 dan 3\nD. 2 dan 3\nE. 1, 2, dan 3',
          answer: 'C. 1 dan 3',
          principle:
            'Energi ikat rata-rata didefinisikan untuk pemutusan ikatan kovalen molekul dalam fasa gas dan nilainya bergantung pada lingkungan kimia molekul.',
          solution:
            'Evaluasi setiap pernyataan:\n- Pernyataan (1) benar: tabel energi ikat standar mengacu pada entalpi pemutusan ikatan molekul-molekul berwujud gas. Jika ada spesi padat atau cair, perubahan entalpi fase harus diperhitungkan terpisah.\n- Pernyataan (2) salah: energi disosiasi ikatan bertahap ($\\mathrm{NH_3} \\to \\mathrm{NH_2} + \\mathrm{H}$, lalu $\\mathrm{NH_2} \\to \\mathrm{NH} + \\mathrm{H}$, dan $\\mathrm{NH} \\to \\mathrm{N} + \\mathrm{H}$) tidak sama besar karena struktur elektronik fragmen radikal yang tersisa berbeda pada setiap tahap; nilai energi ikat $\\mathrm{N-H}$ di tabel adalah nilai rata-rata dari ketiga tahap tersebut.\n- Pernyataan (3) benar: substituen atau lingkungan elektron yang berbeda pada $\\mathrm{NH_3}$ dan $\\mathrm{CH_3NH_2}$ memengaruhi kekuatan ikatan $\\mathrm{N-H}$ sehingga energi disosiasinya sedikit berbeda.\nJadi pernyataan yang tepat adalah 1 dan 3.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Di antara campuran berikut yang paling mendekati sifat larutan ideal adalah ....\n\nA. $\\mathrm{CH_3COOH}$ dan $\\mathrm{H_2O}$\nB. $\\mathrm{NH_3}$ dan $\\mathrm{CH_3NH_2}$\nC. $\\mathrm{CH_3OH}$ dan $\\mathrm{NH_3}$\nD. $\\mathrm{C_6H_6}$ dan $\\mathrm{C_6H_5CH_3}$\nE. $\\mathrm{C_6H_5OH}$ dan $\\mathrm{C_6H_6}$',
          answer: 'D. $\\mathrm{C_6H_6}$ dan $\\mathrm{C_6H_5CH_3}$',
          principle:
            'Larutan ideal terbentuk apabila gaya interaksi antarmolekul sejenis ($A\\text{–}A$ dan $B\\text{–}B$) hampir sama kuatnya dengan gaya interaksi antar komponen campuran ($A\\text{–}B$), sehingga $\\Delta H_{\\text{camp}} \\approx 0$.',
          solution:
            'Benzena ($\\mathrm{C_6H_6}$) dan toluena ($\\mathrm{C_6H_5CH_3}$) sama-sama merupakan hidrokarbon aromatik nonpolar dengan struktur, ukuran molekul, dan gaya dispersi London yang sangat mirip. Akibatnya, energi interaksi $\\mathrm{C_6H_6\\text{–}C_6H_5CH_3}$ hampir identik dengan rata-rata interaksi $\\mathrm{C_6H_6\\text{–}C_6H_6}$ dan $\\mathrm{C_6H_5CH_3\\text{–}C_6H_5CH_3}$, sehingga campuran ini mengikuti hukum Raoult dengan sangat baik (larutan ideal). Sebaliknya, pasangan lain melibatkan ikatan hidrogen yang kuat atau reaksi asam–basa yang menyebabkan penyimpangan dari hukum Raoult.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Metode Winkler dapat digunakan untuk mengukur kadar oksigen terlarut (DO) dalam air. Dalam $\\mathrm{pH}$ basa, $\\mathrm{Mn^{2+}}$ dapat teroksidasi menjadi $\\mathrm{Mn^{3+}}$ membentuk endapan berwarna coklat $\\mathrm{Mn(OH)_3}$ dengan reaksi sebagai berikut:\n$$\\mathrm{Mn(OH)_2}(s) + \\mathrm{O_2}(g) + \\mathrm{H_2O}(l) \\rightarrow \\mathrm{Mn(OH)_3}(s) \\quad (\\text{belum setara})$$\n$25{,}0\\text{ mL}$ sampel air sungai diukur kadar oksigen terlarutnya dengan menambahkan $\\mathrm{Mn^{2+}}$ berlebih dan menghasilkan endapan berwarna coklat. Endapan direaksikan kembali dengan $\\mathrm{KI}$ berlebih sehingga teroksidasi menjadi $\\mathrm{I_2}$ sesuai reaksi:\n$$\\mathrm{KI}(aq) + \\mathrm{Mn(OH)_3}(s) \\rightarrow \\mathrm{I_2}(aq) + \\mathrm{Mn(OH)_2}(s) + \\mathrm{KOH}(aq) \\quad (\\text{belum setara})$$\n$\\mathrm{I_2}$ yang dilepaskan dititrasi dengan $\\mathrm{Na_2S_2O_3}$ $0{,}001\\text{ M}$ dengan reaksi:\n$$2\\mathrm{Na_2S_2O_3}(aq) + \\mathrm{I_2}(aq) \\rightarrow \\mathrm{Na_2S_4O_6}(aq) + 2\\mathrm{NaI}(aq)$$\nUntuk mencapai titik akhir dibutuhkan $25{,}0\\text{ mL}$ $\\mathrm{Na_2S_2O_3}$. Kadar oksigen terlarut dalam sampel air sungai adalah ....\n\nA. $0{,}20\\text{ mg/L}$\nB. $0{,}80\\text{ mg/L}$\nC. $2{,}00\\text{ mg/L}$\nD. $4{,}00\\text{ mg/L}$\nE. $8{,}00\\text{ mg/L}$',
          answer: 'E. $8{,}00\\text{ mg/L}$',
          principle:
            'Penyetaraan redoks bertahap dalam metode Winkler memberikan perbandingan mol stoikiometris tetap: $1\\text{ mol }\\mathrm{O_2} \\equiv 4\\text{ mol }\\mathrm{Na_2S_2O_3}$.',
          solution:
            'Setarakan kedua reaksi redoks terlebih dahulu:\n1. $4\\mathrm{Mn(OH)_2}(s) + \\mathrm{O_2}(g) + 2\\mathrm{H_2O}(l) \\rightarrow 4\\mathrm{Mn(OH)_3}(s)$\n2. $2\\mathrm{KI}(aq) + 2\\mathrm{Mn(OH)_3}(s) \\rightarrow \\mathrm{I_2}(aq) + 2\\mathrm{Mn(OH)_2}(s) + 2\\mathrm{KOH}(aq)$\n3. $2\\mathrm{Na_2S_2O_3}(aq) + \\mathrm{I_2}(aq) \\rightarrow \\mathrm{Na_2S_4O_6}(aq) + 2\\mathrm{NaI}(aq)$\n\nDari stoikiometri berantai, $1\\text{ mol }\\mathrm{O_2}$ menghasilkan $4\\text{ mol }\\mathrm{Mn(OH)_3}$, yang membebaskan $2\\text{ mol }\\mathrm{I_2}$, sehingga membutuhkan $4\\text{ mol }\\mathrm{Na_2S_2O_3}$.\nJumlah mol titran $\\mathrm{Na_2S_2O_3}$:\n$$n_{\\mathrm{Na_2S_2O_3}} = 0{,}0250\\text{ L} \\times 0{,}001\\text{ M} = 2{,}5 \\times 10^{-5}\\text{ mol}.$$\nJumlah mol $\\mathrm{O_2}$ dalam $25{,}0\\text{ mL}$ sampel:\n$$n_{\\mathrm{O_2}} = \\frac{1}{4} n_{\\mathrm{Na_2S_2O_3}} = \\frac{2{,}5 \\times 10^{-5}}{4} = 6{,}25 \\times 10^{-6}\\text{ mol}.$$\nKonsentrasi molar dan kadar massa oksigen terlarut ($M_r\\,\\mathrm{O_2} = 32\\text{ g/mol}$):\n$$[\\mathrm{O_2}] = \\frac{6{,}25 \\times 10^{-6}\\text{ mol}}{0{,}0250\\text{ L}} = 2{,}5 \\times 10^{-4}\\text{ mol/L},$$\n$$\\text{DO} = 2{,}5 \\times 10^{-4}\\text{ mol/L} \\times 32\\text{ g/mol} = 8{,}0 \\times 10^{-3}\\text{ g/L} = 8{,}00\\text{ mg/L}.$$',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Larutan asam lemah monoprotik $\\mathrm{X}$ sebanyak $50{,}00\\text{ mL}$ dititrasi oleh larutan $\\mathrm{NaOH}$ $0{,}1000\\text{ M}$. Jumlah larutan $\\mathrm{NaOH}$ yang digunakan untuk mencapai titik ekuivalen titrasi sebanyak $39{,}30\\text{ mL}$. Pada kurva titrasi, setengah titik ekuivalen diamati pada $\\mathrm{pH}$ $4{,}85$. Konsentrasi awal dan nilai $K_a$ untuk asam monoprotik tersebut adalah ....\n\nA. $0{,}0568\\text{ M}$ dan $1{,}40 \\times 10^{-5}$\nB. $0{,}0127\\text{ M}$ dan $1{,}40 \\times 10^{-5}$\nC. $0{,}0286\\text{ M}$ dan $1{,}40 \\times 10^{-4}$\nD. $0{,}0786\\text{ M}$ dan $1{,}40 \\times 10^{-5}$\nE. $0{,}0131\\text{ M}$ dan $1{,}40 \\times 10^{-4}$',
          answer: 'D. $0{,}0786\\text{ M}$ dan $1{,}40 \\times 10^{-5}$',
          principle:
            'Pada titik ekuivalen titrasi asam monoprotik oleh basa kuat monobasa berlaku $M_a V_a = M_b V_b$, sedangkan pada setengah titik ekuivalen berlaku $[\\mathrm{HA}] = [\\mathrm{A^-}]$ sehingga $\\mathrm{pH} = \\mathrm{p}K_a$.',
          solution:
            'Konsentrasi awal asam lemah $\\mathrm{X}$ dihitung dari stoikiometri titik ekuivalen:\n$$M_a = \\frac{M_b V_b}{V_a} = \\frac{0{,}1000\\text{ M} \\times 39{,}30\\text{ mL}}{50{,}00\\text{ mL}} = 0{,}0786\\text{ M}.$$\nPada setengah titik ekuivalen, separuh asam lemah telah ternetralkan sehingga $[\\mathrm{HA}] = [\\mathrm{A^-}]$. Dari persamaan Henderson–Hasselbalch:\n$$\\mathrm{pH} = \\mathrm{p}K_a + \\log\\frac{[\\mathrm{A^-}]}{[\\mathrm{HA}]} = \\mathrm{p}K_a \\implies \\mathrm{p}K_a = 4{,}85.$$\nNilai tetapan ionisasi asam:\n$$K_a = 10^{-4{,}85} = 10^{0{,}15} \\times 10^{-5} \\approx 1{,}41 \\times 10^{-5}.$$\nPasangan nilai tersebut paling sesuai dengan pilihan D ($0{,}0786\\text{ M}$ dan $1{,}40 \\times 10^{-5}$).',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Perhatikan reaksi di bawah ini yang bersifat eksoterm:\n$$4\\mathrm{NH_3}(g) + 7\\mathrm{O_2}(g) \\rightleftharpoons 4\\mathrm{NO_2}(g) + 6\\mathrm{H_2O}(g)$$\nPerubahan yang akan meningkatkan jumlah $\\mathrm{NO_2}$ dalam campuran adalah ....\n\nA. Meningkatkan temperatur\nB. Menambahkan gas $\\mathrm{Ne}$\nC. Menambahkan $\\mathrm{H_2O}$\nD. Menurunkan volume wadah reaksi\nE. Menambahkan gas $\\mathrm{HCl}$',
          answer: 'D. Menurunkan volume wadah reaksi',
          principle:
            'Menurut prinsip Le Chatelier, penurunan volume (peningkatan tekanan total) menggeser kesetimbangan gas ke arah jumlah koefisien mol gas yang lebih kecil.',
          solution:
            'Evaluasi setiap gangguan terhadap kesetimbangan:\n- A. Menaikkan suhu pada reaksi eksoterm ($\\Delta H < 0$) menggeser kesetimbangan ke arah reaktan (endoterm), sehingga $\\mathrm{NO_2}$ berkurang.\n- B. Menambahkan gas inert $\\mathrm{Ne}$ pada volume tetap tidak mengubah tekanan parsial spesi reaktan maupun produk, sehingga tidak terjadi pergeseran.\n- C. Menambahkan produk $\\mathrm{H_2O}(g)$ menggeser kesetimbangan ke kiri, sehingga $\\mathrm{NO_2}$ berkurang.\n- D. Menurunkan volume wadah meningkatkan tekanan; karena $\\Delta n_{\\text{gas}} = (4 + 6) - (4 + 7) = -1 < 0$, jumlah mol gas produk lebih sedikit daripada reaktan, sehingga kesetimbangan bergeser ke kanan dan jumlah $\\mathrm{NO_2}$ meningkat.\n- E. Menambahkan gas $\\mathrm{HCl}$ akan mengonsumsi reaktan basa $\\mathrm{NH_3}$ membentuk $\\mathrm{NH_4Cl}(s)$, sehingga kesetimbangan bergeser ke kiri dan $\\mathrm{NO_2}$ berkurang.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Di antara senyawa ion berikut yang memiliki entalpi kisi paling besar adalah ....\n\nA. $\\mathrm{MgO}$\nB. $\\mathrm{MgS}$\nC. $\\mathrm{NaF}$\nD. $\\mathrm{NaCl}$\nE. $\\mathrm{NaBr}$',
          answer: 'A. $\\mathrm{MgO}$',
          principle:
            'Berdasarkan persamaan Kapustinskii/Born–Landé, besar energi kisi berbanding lurus dengan hasil kali muatan ion $|z_+ z_-|$ dan berbanding terbalik dengan jarak antarion $r_+ + r_-$.',
          solution:
            'Bandingkan muatan dan jari-jari ion penyusunnya:\n- $\\mathrm{NaF}$, $\\mathrm{NaCl}$, $\\mathrm{NaBr}$ tersusun atas ion bermuatan $+1$ dan $-1$ ($|z_+ z_-| = 1$).\n- $\\mathrm{MgO}$ dan $\\mathrm{MgS}$ tersusun atas ion bermuatan $+2$ dan $-2$ ($|z_+ z_-| = 4$), sehingga entalpi kisinya jauh lebih besar daripada garam halida natrium.\n- Antara $\\mathrm{MgO}$ dan $\\mathrm{MgS}$, jari-jari ion $\\mathrm{O^{2-}}$ jauh lebih kecil daripada ion $\\mathrm{S^{2-}}$, sehingga jarak antarinti dalam kisi $\\mathrm{MgO}$ lebih pendek dan gaya tarik elektrostatiknya paling kuat.\nOleh karena itu, $\\mathrm{MgO}$ memiliki entalpi kisi paling besar.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Larutan jenuh yang akan memiliki konsentrasi $\\mathrm{Ag^+}$ paling tinggi adalah ....\n\nA. $\\mathrm{AgCl}$ ($K_{sp} = 1{,}8 \\times 10^{-10}$)\nB. $\\mathrm{Ag_2CO_3}$ ($K_{sp} = 8{,}1 \\times 10^{-12}$)\nC. $\\mathrm{Ag_3PO_4}$ ($K_{sp} = 1{,}8 \\times 10^{-18}$)\nD. $\\mathrm{Ag_2S}$ ($K_{sp} = 6{,}0 \\times 10^{-51}$)\nE. $\\mathrm{Ag_2CrO_4}$ ($K_{sp} = 1{,}1 \\times 10^{-12}$)',
          answer: 'B. $\\mathrm{Ag_2CO_3}$ ($K_{sp} = 8{,}1 \\times 10^{-12}$)',
          principle:
            'Dalam larutan jenuh garam sukar larut $\\mathrm{Ag}_a\\mathrm{X}_b$, kelarutan molar $s$ bergantung pada $K_{sp}$ dan stoikiometri ion, dengan $[\\mathrm{Ag^+}] = a \\cdot s$.',
          solution:
            'Hitung konsentrasi $[\\mathrm{Ag^+}]$ pada masing-masing larutan jenuh (mengabaikan hidrolisis lanjutan):\n- $\\mathrm{AgCl}$: $s = \\sqrt{K_{sp}} = \\sqrt{1{,}8 \\times 10^{-10}} = 1{,}34 \\times 10^{-5}\\text{ M} \\implies [\\mathrm{Ag^+}] = 1{,}34 \\times 10^{-5}\\text{ M}$.\n- $\\mathrm{Ag_2CO_3}$: $K_{sp} = (2s)^2(s) = 4s^3 = 8{,}1 \\times 10^{-12} \\implies s = \\sqrt[3]{2{,}025 \\times 10^{-12}} = 1{,}265 \\times 10^{-4}\\text{ M} \\implies [\\mathrm{Ag^+}] = 2s = 2{,}53 \\times 10^{-4}\\text{ M}$.\n- $\\mathrm{Ag_3PO_4}$: $K_{sp} = (3s)^3(s) = 27s^4 = 1{,}8 \\times 10^{-18} \\implies s = \\sqrt[4]{6{,}67 \\times 10^{-20}} = 1{,}61 \\times 10^{-5}\\text{ M} \\implies [\\mathrm{Ag^+}] = 3s = 4{,}82 \\times 10^{-5}\\text{ M}$.\n- $\\mathrm{Ag_2S}$: $4s^3 = 6{,}0 \\times 10^{-51} \\implies [\\mathrm{Ag^+}] = 2s \\approx 2{,}29 \\times 10^{-17}\\text{ M}$.\n- $\\mathrm{Ag_2CrO_4}$: $4s^3 = 1{,}1 \\times 10^{-12} \\implies s = 6{,}50 \\times 10^{-5}\\text{ M} \\implies [\\mathrm{Ag^+}] = 2s = 1{,}30 \\times 10^{-4}\\text{ M}$.\nJadi konsentrasi $[\\mathrm{Ag^+}]$ tertinggi terdapat pada larutan jenuh $\\mathrm{Ag_2CO_3}$.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Dua buah padatan dalam suatu wadah terdekomposisi sesuai dengan reaksi kesetimbangan berikut:\n$$\\mathrm{X}(s) \\rightleftharpoons \\mathrm{A}(g) + 2\\mathrm{B}(g) \\qquad K_{p1} = 9 \\times 10^{-3}$$\n$$\\mathrm{Y}(s) \\rightleftharpoons 2\\mathrm{B}(g) + \\mathrm{C}(g) \\qquad K_{p2} = 4{,}5 \\times 10^{-3}$$\nTekanan total dari campuran gas dalam wadah tersebut pada keadaan setimbang adalah ....\n\nA. $0{,}45\\text{ bar}$\nB. $0{,}60\\text{ bar}$\nC. $1{,}20\\text{ bar}$\nD. $4{,}50\\text{ bar}$\nE. $6{,}00\\text{ bar}$',
          answer: 'A. $0{,}45\\text{ bar}$',
          principle:
            'Pada kesetimbangan heterogen simultan dalam satu wadah tertutup, tekanan parsial spesi bersama ($\\mathrm{B}$) memenuhi kedua ungkapan $K_p$ dan stoikiometri pembentukan gas.',
          solution:
            'Misalkan pada keadaan setimbang tekanan parsial masing-masing gas adalah $P_A$, $P_B$, dan $P_C$.\nDari kedua ungkapan tetapan kesetimbangan (padatan murni tidak masuk dalam $K_p$):\n$$K_{p1} = P_A P_B^2 = 9 \\times 10^{-3}, \\qquad K_{p2} = P_C P_B^2 = 4{,}5 \\times 10^{-3}.$$\nMembagi $K_{p1}$ dengan $K_{p2}$ menghasilkan:\n$$\\frac{P_A}{P_C} = \\frac{9 \\times 10^{-3}}{4{,}5 \\times 10^{-3}} = 2 \\implies P_A = 2 P_C.$$\nBerdasarkan stoikiometri kedua dekomposisi dalam wadah yang awalnya hampa, setiap pembentukan $1\\text{ mol A}$ atau $1\\text{ mol C}$ disertai pembentukan $2\\text{ mol B}$, sehingga:\n$$P_B = 2(P_A + P_C) = 2(2 P_C + P_C) = 6 P_C.$$\nSubstitusikan ke $K_{p2}$:\n$$P_C (6 P_C)^2 = 36 P_C^3 = 4{,}5 \\times 10^{-3} \\implies P_C^3 = \\frac{4{,}5 \\times 10^{-3}}{36} = 1{,}25 \\times 10^{-4} = \\frac{1}{8} \\times 10^{-3}.$$\nAmbil akar pangkat tiga:\n$$P_C = 0{,}05\\text{ bar}.$$\nDengan demikian $P_A = 2(0{,}05) = 0{,}10\\text{ bar}$ dan $P_B = 6(0{,}05) = 0{,}30\\text{ bar}$, sehingga tekanan total campuran gas pada kesetimbangan:\n$$P_{\\text{total}} = P_A + P_B + P_C = 0{,}10 + 0{,}30 + 0{,}05 = 0{,}45\\text{ bar}.$$',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Seorang mahasiswa memerlukan larutan bufer karbonat $\\mathrm{pH}$ $10{,}00$ untuk mempelajari efek hujan asam pada batuan kapur. Bufer tersebut disiapkan dari campuran padatan $\\mathrm{Na_2CO_3}$ dan $\\mathrm{NaHCO_3}$ yang dilarutkan dalam air. Jumlah padatan $\\mathrm{Na_2CO_3}$ yang ditambahkan ke dalam $1{,}5\\text{ L}$ larutan $\\mathrm{NaHCO_3}$ $0{,}20\\text{ M}$ untuk menghasilkan larutan bufer tersebut adalah .... (Diketahui $\\mathrm{H_2CO_3}$: $K_{a1} = 4{,}3 \\times 10^{-7}$ dan $K_{a2} = 5{,}6 \\times 10^{-11}$; $M_r\\,\\mathrm{Na_2CO_3} = 106\\text{ g/mol}$)\n\nA. $17{,}88\\text{ g}$\nB. $26{,}82\\text{ g}$\nC. $56{,}55\\text{ g}$\nD. $84{,}82\\text{ g}$\nE. $89{,}71\\text{ g}$',
          answer: 'A. $17{,}88\\text{ g}$',
          principle:
            'Sistem bufer $\\mathrm{HCO_3^-/CO_3^{2-}}$ diatur oleh tahap ionisasi kedua $\\mathrm{H_2CO_3}$ ($K_{a2}$) melalui persamaan Henderson–Hasselbalch.',
          solution:
            'Pasangan asam–basa konjugasi yang berperan pada $\\mathrm{pH} = 10{,}00$ adalah $\\mathrm{HCO_3^-}$ (asam) dan $\\mathrm{CO_3^{2-}}$ (basa konjugasi), dengan:\n$$\\mathrm{p}K_{a2} = -\\log(5{,}6 \\times 10^{-11}) \\approx 10{,}25.$$\nJumlah mol $\\mathrm{HCO_3^-}$ awal dalam $1{,}5\\text{ L}$ larutan $0{,}20\\text{ M}$ adalah:\n$$n_{\\mathrm{HCO_3^-}} = 1{,}5\\text{ L} \\times 0{,}20\\text{ mol/L} = 0{,}30\\text{ mol}.$$\nDari persamaan Henderson–Hasselbalch:\n$$\\mathrm{pH} = \\mathrm{p}K_{a2} + \\log\\left(\\frac{n_{\\mathrm{CO_3^{2-}}}}{n_{\\mathrm{HCO_3^-}}}\\right) \\implies 10{,}00 = 10{,}25 + \\log\\left(\\frac{n_{\\mathrm{CO_3^{2-}}}}{0{,}30}\\right).$$\nDiperoleh:\n$$\\log\\left(\\frac{n_{\\mathrm{CO_3^{2-}}}}{0{,}30}\\right) = -0{,}25 \\implies n_{\\mathrm{CO_3^{2-}}} = 0{,}30 \\times 10^{-0{,}25} \\approx 0{,}30 \\times 0{,}5623 = 0{,}1687\\text{ mol}.$$\nMassa padatan $\\mathrm{Na_2CO_3}$ yang diperlukan adalah:\n$$m = 0{,}1687\\text{ mol} \\times 106\\text{ g/mol} \\approx 17{,}88\\text{ g}.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Diketahui $K_{sp}\\,\\mathrm{BaCrO_4} = 1{,}2 \\times 10^{-10}$. Volume $\\mathrm{Na_2CrO_4}$ $1{,}5 \\times 10^{-5}\\text{ M}$ minimum yang harus ditambahkan ke dalam larutan $1{,}00\\text{ L}$ $\\mathrm{Ba(NO_3)_2}$ $1{,}5 \\times 10^{-5}\\text{ M}$ untuk mulai mengendapkan $\\mathrm{BaCrO_4}$ adalah ....\n\nA. $0{,}53\\text{ L}$\nB. $0{,}73\\text{ L}$\nC. $1{,}00\\text{ L}$\nD. $1{,}20\\text{ L}$\nE. Larutan $\\mathrm{Na_2CrO_4}$ yang ditambahkan tidak dapat mengendapkan $\\mathrm{BaCrO_4}$',
          answer: 'E. Larutan $\\mathrm{Na_2CrO_4}$ yang ditambahkan tidak dapat mengendapkan $\\mathrm{BaCrO_4}$',
          principle:
            'Endapan terbentuk jika dan hanya jika hasil kali ion $Q_{sp} = [\\mathrm{Ba^{2+}}][\\mathrm{CrO_4^{2-}}] > K_{sp}$ setelah pencampuran.',
          solution:
            'Misalkan volume larutan $\\mathrm{Na_2CrO_4}$ yang ditambahkan adalah $V$ liter. Volume total campuran menjadi $(1 + V)\\text{ L}$, sehingga konsentrasi ion setelah pencampuran adalah:\n$$[\\mathrm{Ba^{2+}}] = \\frac{1{,}5 \\times 10^{-5} \\times 1}{1 + V}, \\qquad [\\mathrm{CrO_4^{2-}}] = \\frac{1{,}5 \\times 10^{-5} \\times V}{1 + V}.$$\nHasil kali ion $Q_{sp}$ dinyatakan sebagai:\n$$Q_{sp} = [\\mathrm{Ba^{2+}}][\\mathrm{CrO_4^{2-}}] = 2{,}25 \\times 10^{-10} \\cdot \\frac{V}{(1 + V)^2}.$$\nBerdasarkan ketaksamaan AM–GM, $(1 + V)^2 \\ge 4V$ untuk setiap $V > 0$, sehingga $\\frac{V}{(1 + V)^2} \\le \\frac{1}{4}$ (nilai maksimum tercapai saat $V = 1{,}00\\text{ L}$). Akibatnya:\n$$Q_{sp,\\text{maks}} = 2{,}25 \\times 10^{-10} \\times \\frac{1}{4} = 5{,}625 \\times 10^{-11} < K_{sp} = 1{,}2 \\times 10^{-10}.$$\nKarena $Q_{sp}$ selalu lebih kecil daripada $K_{sp}$ untuk berapapun volume $V > 0$, maka $\\mathrm{BaCrO_4}$ tidak akan pernah mengendap.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Asam kromat merupakan oksidator yang dapat digunakan dalam beberapa reaksi organik. Selain itu, asam kromat juga merupakan salah satu produk samping yang dihasilkan pada proses pelapisan logam. Di dalam air, asam kromat mengalami reaksi kesetimbangan dua tahap, yang masing-masing memiliki nilai $K_{a1} = 5$ dan $K_{a2} = 1{,}5 \\times 10^{-6}$. Bila suatu larutan asam kromat memiliki $\\mathrm{pH}$ $6{,}12$, maka perbandingan konsentrasi ion kromat dan ion hidrogen kromat adalah ....\n\nA. $1 : 2$\nB. $2 : 3$\nC. $3 : 2$\nD. $1 : 1$\nE. $2 : 1$',
          answer: 'E. $2 : 1$',
          principle:
            'Perbandingan konsentrasi ion kromat ($\\mathrm{CrO_4^{2-}}$) terhadap ion hidrogen kromat ($\\mathrm{HCrO_4^-}$) diatur langsung oleh kesetimbangan ionisasi tahap kedua $K_{a2}$.',
          solution:
            'Reaksi kesetimbangan tahap kedua asam kromat adalah:\n$$\\mathrm{HCrO_4^-}(aq) + \\mathrm{H_2O}(l) \\rightleftharpoons \\mathrm{CrO_4^{2-}}(aq) + \\mathrm{H_3O^+}(aq), \\qquad K_{a2} = \\frac{[\\mathrm{CrO_4^{2-}}][\\mathrm{H_3O^+}]}{[\\mathrm{HCrO_4^-}]} = 1{,}5 \\times 10^{-6}.$$\nPada $\\mathrm{pH} = 6{,}12$, konsentrasi ion hidronium adalah:\n$$[\\mathrm{H_3O^+}] = 10^{-6{,}12} = 10^{-0{,}12} \\times 10^{-6} \\approx 7{,}586 \\times 10^{-7}\\text{ M}.$$\nMaka rasio konsentrasi ion kromat terhadap ion hidrogen kromat adalah:\n$$\\frac{[\\mathrm{CrO_4^{2-}}]}{[\\mathrm{HCrO_4^-}]} = \\frac{K_{a2}}{[\\mathrm{H_3O^+}]} = \\frac{1{,}5 \\times 10^{-6}}{7{,}586 \\times 10^{-7}} \\approx 1{,}98 \\approx 2 : 1.$$',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Ion perak membentuk kompleks $\\mathrm{Ag(CN)_2^-}$ dengan nilai $K_f = 9{,}8 \\times 10^{21}$. Jumlah $\\mathrm{HCN}$ yang dibutuhkan untuk melarutkan $1{,}00\\text{ L}$ endapan $\\mathrm{AgCl}$ $0{,}0100\\text{ mol}$ adalah .... ($K_{sp}\\,\\mathrm{AgCl} = 1{,}8 \\times 10^{-10}$; $K_a\\,\\mathrm{HCN} = 6{,}2 \\times 10^{-10}$)\n\nA. $0{,}020\\text{ mol}$\nB. $0{,}079\\text{ mol}$\nC. $0{,}260\\text{ mol}$\nD. $1{,}520\\text{ mol}$\nE. $1{,}700\\text{ mol}$',
          answer: 'C. $0{,}260\\text{ mol}$',
          principle:
            'Tetapan kesetimbangan total pelarutan garam sukar larut dengan ligan asam lemah diperoleh dari penggabungan $K_{sp}$, $K_f$, dan $K_a$.',
          solution:
            'Gabungkan tiga kesetimbangan berikut:\n1. $\\mathrm{AgCl}(s) \\rightleftharpoons \\mathrm{Ag^+}(aq) + \\mathrm{Cl^-}(aq) \\qquad (K_{sp} = 1{,}8 \\times 10^{-10})$\n2. $\\mathrm{Ag^+}(aq) + 2\\mathrm{CN^-}(aq) \\rightleftharpoons \\mathrm{Ag(CN)_2^-}(aq) \\qquad (K_f = 9{,}8 \\times 10^{21})$\n3. $2\\mathrm{HCN}(aq) \\rightleftharpoons 2\\mathrm{H^+}(aq) + 2\\mathrm{CN^-}(aq) \\qquad (K_a^2 = (6{,}2 \\times 10^{-10})^2)$\n\nReaksi totalnya adalah:\n$$\\mathrm{AgCl}(s) + 2\\mathrm{HCN}(aq) \\rightleftharpoons \\mathrm{Ag(CN)_2^-}(aq) + \\mathrm{Cl^-}(aq) + 2\\mathrm{H^+}(aq),$$\ndengan tetapan kesetimbangan gabungan:\n$$K = K_{sp} \\cdot K_f \\cdot K_a^2 = (1{,}8 \\times 10^{-10})(9{,}8 \\times 10^{21})(6{,}2 \\times 10^{-10})^2 = 6{,}781 \\times 10^{-7}.$$\nAgar $0{,}0100\\text{ mol}$ $\\mathrm{AgCl}$ tepat larut dalam $1{,}00\\text{ L}$, konsentrasi kesetimbangan produk adalah $[\\mathrm{Ag(CN)_2^-}] = 0{,}0100\\text{ M}$, $[\\mathrm{Cl^-}] = 0{,}0100\\text{ M}$, dan $[\\mathrm{H^+}] = 0{,}0200\\text{ M}$. Substitusi ke ungkapan $K$:\n$$\\frac{(0{,}0100)(0{,}0100)(0{,}0200)^2}{[\\mathrm{HCN}]_{\\text{sisa}}^2} = 6{,}781 \\times 10^{-7} \\implies [\\mathrm{HCN}]_{\\text{sisa}} = \\sqrt{\\frac{4{,}0 \\times 10^{-8}}{6{,}781 \\times 10^{-7}}} \\approx 0{,}243\\text{ M}.$$\nTotal $\\mathrm{HCN}$ awal yang dibutuhkan adalah jumlah yang bereaksi ditambah sisa pada kesetimbangan:\n$$n_{\\mathrm{HCN,total}} = 2(0{,}0100) + 0{,}243 = 0{,}263\\text{ mol} \\approx 0{,}260\\text{ mol}.$$',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Diberikan data entalpi sebagai berikut:\n- Entalpi kisi $\\mathrm{MgCl_2}(s) = +2524\\text{ kJ/mol}$\n- Entalpi pelarutan $\\mathrm{MgCl_2}(s) = -150\\text{ kJ/mol}$\n- Entalpi hidrasi ion $\\mathrm{Cl^-}(g) = -384\\text{ kJ/mol}$\n\nEntalpi hidrasi ion $\\mathrm{Mg^{2+}}$ adalah .... $\\text{kJ/mol}$\n\nA. $-2290$\nB. $-1990$\nC. $-1906$\nD. $-1756$\nE. $-1606$',
          answer: 'C. $-1906$',
          principle:
            'Menurut hukum Hess, entalpi pelarutan senyawa ion sama dengan jumlah energi kisi (pemutusan kisi menjadi ion gas) dan entalpi hidrasi seluruh ion penyusunnya.',
          solution:
            'Siklus termokimia pelarutan $\\mathrm{MgCl_2}(s)$ menjadi ion-ion terhidrasi terdiri dari dua langkah:\n1. Pemecahan kisi padat menjadi ion gas: $\\mathrm{MgCl_2}(s) \\to \\mathrm{Mg^{2+}}(g) + 2\\mathrm{Cl^-}(g)$, dengan $\\Delta H_{\\text{kisi}} = +2524\\text{ kJ/mol}$.\n2. Hidrasi ion gas: $\\mathrm{Mg^{2+}}(g) + 2\\mathrm{Cl^-}(g) \\to \\mathrm{Mg^{2+}}(aq) + 2\\mathrm{Cl^-}(aq)$, dengan $\\Delta H_{\\text{hid}} = \\Delta H_{\\text{hid}}(\\mathrm{Mg^{2+}}) + 2\\Delta H_{\\text{hid}}(\\mathrm{Cl^-})$.\n\nBerdasarkan hukum Hess:\n$$\\Delta H_{\\text{larut}} = \\Delta H_{\\text{kisi}} + \\Delta H_{\\text{hid}}(\\mathrm{Mg^{2+}}) + 2\\Delta H_{\\text{hid}}(\\mathrm{Cl^-}).$$\nSubstitusi data yang diketahui:\n$$-150 = +2524 + \\Delta H_{\\text{hid}}(\\mathrm{Mg^{2+}}) + 2(-384) \\implies \\Delta H_{\\text{hid}}(\\mathrm{Mg^{2+}}) = -150 - 2524 + 768 = -1906\\text{ kJ/mol}.$$',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Reaksi $\\mathrm{A}(g) \\rightarrow \\mathrm{B}(g) + \\mathrm{C}(g)$ memiliki tetapan laju reaksi sebesar $2{,}26 \\times 10^{-4}\\text{ s}^{-1}$ pada $320\\,^\\circ\\mathrm{C}$. Tekanan total wadah setelah reaksi berlangsung selama $30\\text{ menit}$ adalah $1{,}2\\text{ atm}$. Derajat disosiasi $\\mathrm{A}$ saat reaksi berlangsung selama $30\\text{ menit}$ adalah ....\n\nA. $0{,}33$\nB. $0{,}30$\nC. $0{,}26$\nD. $0{,}20$\nE. $0{,}17$',
          answer: 'A. $0{,}33$',
          principle:
            'Satuan tetapan laju $\\text{s}^{-1}$ menunjukkan reaksi berorde satu, yang memenuhi hukum laju terintegrasi $[\\mathrm{A}]_t / [\\mathrm{A}]_0 = 1 - \\alpha = e^{-kt}$.',
          solution:
            'Dari satuan $k = 2{,}26 \\times 10^{-4}\\text{ s}^{-1}$, reaksi ini mengikuti kinetika orde satu. Pada reaksi orde satu, fraksi reaktan yang tersisa setelah waktu $t = 30\\text{ menit} = 1800\\text{ s}$ tidak bergantung pada tekanan awal maupun total:\n$$\\frac{[\\mathrm{A}]_t}{[\\mathrm{A}]_0} = 1 - \\alpha = e^{-kt}.$$\nHitung eksponennya:\n$$kt = (2{,}26 \\times 10^{-4}\\text{ s}^{-1})(1800\\text{ s}) = 0{,}4068.$$\nMaka:\n$$1 - \\alpha = e^{-0{,}4068} \\approx 0{,}6658 \\implies \\alpha = 1 - 0{,}6658 = 0{,}3342 \\approx 0{,}33.$$',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Di antara urutan kestabilan termal senyawa hidrida unsur golongan $14$ berikut mulai dari terendah hingga tertinggi yang paling tepat adalah ....\n\nA. $\\mathrm{CH_4} < \\mathrm{PbH_4} < \\mathrm{GeH_4} < \\mathrm{SnH_4} < \\mathrm{SiH_4}$\nB. $\\mathrm{PbH_4} < \\mathrm{SnH_4} < \\mathrm{CH_4} < \\mathrm{GeH_4} < \\mathrm{SiH_4}$\nC. $\\mathrm{PbH_4} < \\mathrm{SnH_4} < \\mathrm{GeH_4} < \\mathrm{SiH_4} < \\mathrm{CH_4}$\nD. $\\mathrm{CH_4} < \\mathrm{SiH_4} < \\mathrm{GeH_4} < \\mathrm{SnH_4} < \\mathrm{PbH_4}$\nE. $\\mathrm{GeH_4} < \\mathrm{PbH_4} < \\mathrm{SiH_4} < \\mathrm{SnH_4} < \\mathrm{CH_4}$',
          answer: 'C. $\\mathrm{PbH_4} < \\mathrm{SnH_4} < \\mathrm{GeH_4} < \\mathrm{SiH_4} < \\mathrm{CH_4}$',
          principle:
            'Dalam satu golongan dari atas ke bawah, jari-jari atom pusat bertambah besar sehingga tumpang tindih orbital dengan orbital $1s$ hidrogen makin lemah dan energi ikatan $\\mathrm{E-H}$ menurun.',
          solution:
            'Kestabilan termal hidrida golongan $14$ ($\\mathrm{EH_4}$) berbanding lurus dengan kekuatan ikatan kovalen $\\mathrm{E-H}$. Dari $\\mathrm{C}$ ke $\\mathrm{Pb}$, ukuran orbital valensi atom pusat meningkat tajam ($2sp^3 \\to 6sp^3$), sehingga tumpang tindih dengan orbital $1s$ atom $\\mathrm{H}$ semakin kurang efektif dan panjang ikatan $\\mathrm{E-H}$ semakin besar. Akibatnya, energi disosiasi ikatan $\\mathrm{E-H}$ menurun dari $\\mathrm{CH_4}$ ke $\\mathrm{PbH_4}$, sehingga urutan kestabilan termal dari terendah ke tertinggi adalah $\\mathrm{PbH_4} < \\mathrm{SnH_4} < \\mathrm{GeH_4} < \\mathrm{SiH_4} < \\mathrm{CH_4}$.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Notasi sel standar (elektrode $\\mathrm{Pt}$) untuk reaksi berikut:\n$$2\\mathrm{Mn^{3+}}(aq) + 2\\mathrm{I^-}(aq) \\rightarrow 2\\mathrm{Mn^{2+}}(aq) + \\mathrm{I_2}(s)$$\nadalah ....\n\nA. $\\mathrm{Pt}(s) \\mid \\mathrm{Mn^{3+}}(aq) \\mid \\mathrm{Mn^{2+}}(aq) \\parallel \\mathrm{I^-}(aq) \\mid \\mathrm{I_2}(s) \\mid \\mathrm{Pt}(s)$\nB. $\\mathrm{Pt}(s) \\mid \\mathrm{I^-}(aq) \\mid \\mathrm{I_2}(s) \\parallel \\mathrm{Mn^{3+}}(aq), \\mathrm{Mn^{2+}}(aq) \\mid \\mathrm{Pt}(s)$\nC. $\\mathrm{Mn^{3+}}(aq) \\mid \\mathrm{Pt}(s), \\mathrm{Mn^{2+}}(aq) \\parallel \\mathrm{I^-}(aq) \\mid \\mathrm{I_2}(s) \\mid \\mathrm{Pt}(s)$\nD. $\\mathrm{Pt}(s) \\mid \\mathrm{Mn^{3+}}(aq), \\mathrm{I^-}(aq) \\parallel \\mathrm{Mn^{2+}}(aq) \\mid \\mathrm{I_2}(s) \\mid \\mathrm{Pt}(s)$\nE. $\\mathrm{Mn^{2+}}(aq) \\mid \\mathrm{Pt}(s), \\mathrm{Mn^{3+}}(aq) \\parallel \\mathrm{I^-}(aq) \\mid \\mathrm{I_2}(s) \\mid \\mathrm{Pt}(s)$',
          answer: 'B. $\\mathrm{Pt}(s) \\mid \\mathrm{I^-}(aq) \\mid \\mathrm{I_2}(s) \\parallel \\mathrm{Mn^{3+}}(aq), \\mathrm{Mn^{2+}}(aq) \\mid \\mathrm{Pt}(s)$',
          principle:
            'Dalam notasi sel elektrokimia standar, setengah sel oksidasi (anoda) dituliskan di sebelah kiri jembatan garam ($\\parallel$), dan setengah sel reduksi (katoda) di sebelah kanan, dengan tanda koma memisahkan spesi dalam fasa sama.',
          solution:
            'Identifikasi setengah reaksi dari persamaan redoks:\n- Oksidasi (anoda): $2\\mathrm{I^-}(aq) \\rightarrow \\mathrm{I_2}(s) + 2e^-$, menggunakan elektrode inert $\\mathrm{Pt}(s)$ karena tidak ada logam aktif.\n- Reduksi (katoda): $\\mathrm{Mn^{3+}}(aq) + e^- \\rightarrow \\mathrm{Mn^{2+}}(aq)$, kedua ion berada dalam fasa larutan yang sama sehingga dipisahkan tanda koma dan memerlukan elektrode inert $\\mathrm{Pt}(s)$.\nDengan anoda di kiri dan katoda di kanan jembatan garam $\\parallel$, notasi sel yang tepat adalah $\\mathrm{Pt}(s) \\mid \\mathrm{I^-}(aq) \\mid \\mathrm{I_2}(s) \\parallel \\mathrm{Mn^{3+}}(aq), \\mathrm{Mn^{2+}}(aq) \\mid \\mathrm{Pt}(s)$.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Di antara unsur golongan $13$ berikut yang memiliki bilangan oksidasi $+1$ yang lebih stabil daripada bilangan oksidasi $+3$ adalah ....\n\nA. $\\mathrm{B}$\nB. $\\mathrm{Al}$\nC. $\\mathrm{Ga}$\nD. $\\mathrm{In}$\nE. $\\mathrm{Tl}$',
          answer: 'E. $\\mathrm{Tl}$',
          principle:
            'Efek pasangan inert (inert pair effect) menyebabkan elektron $ns^2$ pada unsur periode berat blok-$p$ semakin enggan terlibat dalam ikatan, sehingga bilangan oksidasi dua satuan lebih rendah dari golongan menjadi paling stabil.',
          solution:
            'Unsur golongan $13$ memiliki konfigurasi elektron valensi $ns^2 np^1$. Pada unsur-unsur ringan ($\\mathrm{B}, \\mathrm{Al}, \\mathrm{Ga}, \\mathrm{In}$), bilangan oksidasi $+3$ lebih stabil. Namun, pada unsur terberat talium ($\\mathrm{Tl}$, periode $6$), kontraksi lantanida dan efek relativistik menurunkan energi orbital $6s$ secara signifikan sehingga pasangan elektron $6s^2$ sukar dilepaskan (efek pasangan inert). Akibatnya, bilangan oksidasi $+1$ ($\\mathrm{Tl^+}$) jauh lebih stabil daripada $+3$ ($\\mathrm{Tl^{3+}}$ bersifat oksidator kuat).',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Potensial sel standar untuk reaksi berikut, jika $E^\\circ\\,\\mathrm{Cu^{2+}}\\mid\\mathrm{Cu} = +0{,}34\\text{ V}$ dan $E^\\circ\\,\\mathrm{Cd^{2+}}\\mid\\mathrm{Cd} = -0{,}40\\text{ V}$, adalah ....\n$$\\mathrm{Cu^{2+}}(aq) + \\mathrm{Cd}(s) \\rightarrow \\mathrm{Cu}(s) + \\mathrm{Cd^{2+}}(aq)$$\n\nA. $+0{,}76\\text{ V}$\nB. $+0{,}74\\text{ V}$\nC. $+0{,}20\\text{ V}$\nD. $+0{,}06\\text{ V}$\nE. $-0{,}06\\text{ V}$',
          answer: 'B. $+0{,}74\\text{ V}$',
          principle:
            'Potensial sel standar dihitung dari selisih potensial reduksi standar katoda dan anoda: $E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}}$.',
          solution:
            'Pada reaksi tersebut:\n- Reduksi terjadi di katoda: $\\mathrm{Cu^{2+}}(aq) + 2e^- \\rightarrow \\mathrm{Cu}(s)$, $E^\\circ_{\\text{katoda}} = +0{,}34\\text{ V}$.\n- Oksidasi terjadi di anoda: $\\mathrm{Cd}(s) \\rightarrow \\mathrm{Cd^{2+}}(aq) + 2e^-$, dengan $E^\\circ_{\\text{anoda}} = E^\\circ_{\\mathrm{Cd^{2+}}\\mid\\mathrm{Cd}} = -0{,}40\\text{ V}$.\nMaka potensial sel standar:\n$$E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = +0{,}34 - (-0{,}40) = +0{,}74\\text{ V}.$$',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Besarnya $\\mathrm{pOH}$ dari reaksi berikut jika tekanan $\\mathrm{O_2}$ adalah $1\\text{ atm}$, suhu $25\\,^\\circ\\mathrm{C}$, konsentrasi $\\mathrm{Al^{3+}}$ adalah $1{,}00\\text{ M}$, dan potensial sel terbaca $2{,}781\\text{ V}$, adalah ....\n$$3\\mathrm{O_2}(g) + 2\\mathrm{H_2O}(l) + 4\\mathrm{Al}(s) \\rightarrow 4\\mathrm{Al^{3+}}(aq) + 12\\mathrm{OH^-}(aq)$$\nDiketahui:\n$$\\mathrm{O_2}(g) + 2\\mathrm{H_2O}(l) + 4e^- \\rightarrow 4\\mathrm{OH^-}(aq) \\qquad E^\\circ = +0{,}401\\text{ V}$$\n$$\\mathrm{Al^{3+}}(aq) + 3e^- \\rightarrow \\mathrm{Al}(s) \\qquad E^\\circ = -1{,}66\\text{ V}$$\n\nA. $12{,}18$\nB. $7{,}00$\nC. $1{,}01$\nD. $2{,}45$\nE. Tidak dapat ditentukan dari data tersebut',
          answer: 'A. $12{,}18$',
          principle:
            'Potensial sel pada kondisi tak standar pada $25\\,^\\circ\\mathrm{C}$ mengikuti persamaan Nernst: $E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\frac{0{,}0591}{n} \\log Q$.',
          solution:
            'Langkah 1: Hitung $E^\\circ_{\\text{sel}}$ dan jumlah elektron yang ditransfer $n$.\n$$E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = +0{,}401 - (-1{,}66) = +2{,}061\\text{ V}.$$\nPenyetaraan $3\\mathrm{O_2}$ ($3 \\times 4e^- = 12e^-$) dan $4\\mathrm{Al}$ ($4 \\times 3e^- = 12e^-$) memberikan $n = 12$.\n\nLangkah 2: Terapkan persamaan Nernst pada $25\\,^\\circ\\mathrm{C}$ ($298{,}15\\text{ K}$):\n$$Q = \\frac{[\\mathrm{Al^{3+}}]^4 [\\mathrm{OH^-}]^{12}}{P_{\\mathrm{O_2}}^3} = \\frac{(1{,}00)^4 [\\mathrm{OH^-}]^{12}}{1^3} = [\\mathrm{OH^-}]^{12}.$$\nSubstitusi ke persamaan Nernst:\n$$E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\frac{0{,}0591}{12} \\log\\left([\\mathrm{OH^-}]^{12}\\right) = E^\\circ_{\\text{sel}} - 0{,}0591 \\log[\\mathrm{OH^-}].$$\nKarena $\\mathrm{pOH} = -\\log[\\mathrm{OH^-}]$, maka:\n$$E_{\\text{sel}} = E^\\circ_{\\text{sel}} + 0{,}0591\\,\\mathrm{pOH} \\implies 2{,}781 = 2{,}061 + 0{,}0591\\,\\mathrm{pOH}.$$\nDiperoleh:\n$$\\mathrm{pOH} = \\frac{2{,}781 - 2{,}061}{0{,}0591} = \\frac{0{,}720}{0{,}0591} \\approx 12{,}18.$$',
          rubric: OK
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Arus listrik sebesar $1{,}26\\text{ A}$ dilewatkan pada suatu sel elektrolisis yang mengandung larutan asam sulfat selama $7{,}44\\text{ jam}$. Volume gas $\\mathrm{H_2}$ yang dihasilkan pada keadaan STP adalah ....\n\nA. $22{,}4\\text{ L}$\nB. $11{,}2\\text{ L}$\nC. $3{,}91\\text{ L}$\nD. $1{,}95\\text{ L}$\nE. $0{,}39\\text{ L}$',
          answer: 'C. $3{,}91\\text{ L}$',
          principle:
            'Berdasarkan hukum Faraday I, jumlah mol elektron yang mengalir adalah $n_{e^-} = \\frac{I \\cdot t}{F}$, dengan $F = 96485\\text{ C/mol}$.',
          solution:
            'Konversikan waktu ke detik: $t = 7{,}44\\text{ jam} \\times 3600\\text{ s/jam} = 26784\\text{ s}$.\nMuatan listrik total yang dialirkan:\n$$Q = I \\cdot t = 1{,}26\\text{ A} \\times 26784\\text{ s} = 33747{,}84\\text{ C}.$$\nJumlah mol elektron:\n$$n_{e^-} = \\frac{Q}{F} = \\frac{33747{,}84}{96485} \\approx 0{,}3498\\text{ mol}.$$\nPada katoda, reduksi ion hidrogen menghasilkan gas $\\mathrm{H_2}$:\n$$2\\mathrm{H^+}(aq) + 2e^- \\rightarrow \\mathrm{H_2}(g),$$\nsehingga jumlah mol $\\mathrm{H_2}$ yang terbentuk adalah:\n$$n_{\\mathrm{H_2}} = \\frac{1}{2} n_{e^-} = \\frac{0{,}3498}{2} = 0{,}1749\\text{ mol}.$$\nPada keadaan STP ($V_m = 22{,}4\\text{ L/mol}$):\n$$V_{\\mathrm{H_2}} = 0{,}1749\\text{ mol} \\times 22{,}4\\text{ L/mol} \\approx 3{,}92\\text{ L} \\approx 3{,}91\\text{ L}.$$',
          rubric: OK
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Senyawa yang tidak akan memberikan sinyal singlet pada spektrum $^1\\mathrm{H}$ NMR adalah ....\n\nA. Etana\nB. Dietileter\nC. Dimetileter\nD. Aseton\nE. Etil asetat',
          answer: 'B. Dietileter',
          principle:
            'Dalam spektroskopi $^1\\mathrm{H}$ NMR, proton menghasilkan sinyal singlet apabila tidak memiliki proton tetangga yang tidak ekuivalen pada jarak tiga ikatan ($n = 0$ dalam aturan $n + 1$).',
          solution:
            'Analisis lingkungan proton tiap senyawa:\n- Etana ($\\mathrm{CH_3-CH_3}$): keenam proton simetris dan ekuivalen secara kimiawi, menghasilkan $1$ sinyal singlet.\n- Dietileter ($\\mathrm{CH_3-CH_2-O-CH_2-CH_3}$): gugus etil memiliki proton metil ($\\mathrm{CH_3}$, terpecah menjadi triplet oleh $2$ proton $\\mathrm{CH_2}$) dan proton metilena ($\\mathrm{CH_2}$, terpecah menjadi kuartet oleh $3$ proton $\\mathrm{CH_3}$). Tidak ada proton tanpa tetangga sehingga tidak muncul singlet.\n- Dimetileter ($\\mathrm{CH_3-O-CH_3}$): keenam proton ekuivalen, menghasilkan $1$ sinyal singlet.\n- Aseton ($\\mathrm{CH_3-CO-CH_3}$): keenam proton ekuivalen, menghasilkan $1$ sinyal singlet.\n- Etil asetat ($\\mathrm{CH_3-COO-CH_2-CH_3}$): gugus asetil $\\mathrm{CH_3-COO}-$ terisolasi dari proton tetangga sehingga memberikan sinyal singlet selain triplet dan kuartet dari gugus etil.',
          rubric: OK
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Inti-inti berikut dapat memberikan sinyal pada NMR, kecuali ....\n\nA. $^1\\mathrm{H}$\nB. $^{12}\\mathrm{C}$\nC. $^{13}\\mathrm{C}$\nD. $^{19}\\mathrm{F}$\nE. $^{31}\\mathrm{P}$',
          answer: 'B. $^{12}\\mathrm{C}$',
          principle:
            'Inti atom aktif NMR jika dan hanya jika memiliki bilangan kuantum spin inti $I \\neq 0$; inti dengan jumlah proton genap dan jumlah neutron genap memiliki $I = 0$.',
          solution:
            'Periksa komposisi nukleon setiap inti:\n- $^1\\mathrm{H}$ ($1p, 0n$): ganjil–genap $\\implies I = \\frac{1}{2}$ (aktif NMR).\n- $^{12}\\mathrm{C}$ ($6p, 6n$): genap–genap $\\implies I = 0$ (tidak memiliki momen magnetik inti, sehingga tidak memberikan sinyal NMR).\n- $^{13}\\mathrm{C}$ ($6p, 7n$): genap–ganjil $\\implies I = \\frac{1}{2}$ (aktif NMR).\n- $^{19}\\mathrm{F}$ ($9p, 10n$): ganjil–genap $\\implies I = \\frac{1}{2}$ (aktif NMR).\n- $^{31}\\mathrm{P}$ ($15p, 16n$): ganjil–genap $\\implies I = \\frac{1}{2}$ (aktif NMR).',
          rubric: OK
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Ketika molekul menyerap energi di daerah UV atau visibel, transisi yang terjadi adalah transisi ....\n\nA. Vibrasional\nB. Rotasi\nC. Elektronik\nD. Translasi\nE. Hamburan',
          answer: 'C. Elektronik',
          principle:
            'Energi foton radiasi ultraviolet dan tampak ($\\sim 150\\text{–}600\\text{ kJ/mol}$) bersesuaian dengan selisih energi antar orbital molekul (HOMO $\\to$ LUMO).',
          solution:
            'Spektrum radiasi elektromagnetik berinteraksi dengan molekul secara spesifik berdasarkan besar kuanta energinya:\n- Daerah gelombang mikro: menginduksi transisi rotasi molekul.\n- Daerah inframerah (IR): menginduksi transisi vibrasi ikatan.\n- Daerah ultraviolet dan tampak (UV–Vis): memiliki energi lebih besar yang mampu mengeksitasi elektron valensi dari orbital molekul terisi (seperti $\\pi$ atau $n$) ke orbital molekul kosong berenergi lebih tinggi (seperti $\\pi^*$ atau $\\sigma^*$), yaitu transisi elektronik.',
          rubric: OK
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Berikut ini merupakan monomer biopolimer, kecuali ....\n\nA. Asam amino\nB. Glukosa\nC. Asam palmitat\nD. Nukleotida\nE. Isoprena',
          answer: 'C. Asam palmitat',
          principle:
            'Biopolimer disusun melalui polimerisasi unit monomer berulang (protein dari asam amino, polisakarida dari monosakarida, asam nukleat dari nukleotida, karet alam dari isoprena).',
          solution:
            'Tinjau peran masing-masing senyawa:\n- Asam amino berpolimerisasi melalui ikatan peptida membentuk protein.\n- Glukosa berpolimerisasi melalui ikatan glikosidik membentuk polisakarida (pati, selulosa, glikogen).\n- Nukleotida berpolimerisasi melalui ikatan fosfodiester membentuk asam nukleat (DNA dan RNA).\n- Isoprena ($2$-metil-$1{,}3$-butadiena) merupakan unit penyusun biopolimer poliisoprena (karet alam).\n- Asam palmitat ($\\mathrm{CH_3(CH_2)_{14}COOH}$) adalah asam lemak jenuh penyusun lipid/trigliserida dan fosfolipid, yang merupakan molekul kecil teresterifikasi dengan gliserol, bukan monomer pembentuk rantai biopolimer.',
          rubric: OK
        }
      ]
    }
  ]
};
