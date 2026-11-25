/**
 * Paket Soal Terstruktur: OSN-K Kimia SMA 2023 (30 soal pilihan ganda terverifikasi)
 * Sumber: scraped_raw/osnk-kimia-sma-2023.md (naskah OSN-K Kimia SMA 2023, 50 soal).
 * 14 soal bergambar/tabel gambar/kurva/spektrum/struktur (5, 6, 19, 20, 37, 38, 39, 40, 41, 42, 45, 46, 49, 50)
 * dan 6 soal dengan data tidak lengkap/inkonsisten pada arsip teks (13, 18, 26, 30, 35, 36) dilewati.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-kim-sma-2023',
  slug: 'osnk-kimia-sma-2023',
  subject: 'olimpiade-kim',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'OSN-K Kimia SMA 2023',
  relatedChapterIds: [
    'kimia10-bab1-hakikat-kimia-dan-struktur-atom',
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
  title: 'OSN-K Kimia SMA 2023',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 30 soal pilihan ganda berikut (masing-masing bernilai 1 poin). Dari 50 soal asli OSN-K Kimia SMA 2023, dimuat 30 soal teks-lengkap terverifikasi (nomor asli: 1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 21, 22, 23, 24, 25, 27, 28, 29, 31, 32, 33, 34, 43, 44, 47, 48) dan dilewati 20 soal: 14 soal yang bergantung pada gambar/tabel gambar/kurva/struktur/skema (nomor 5, 6, 19, 20, 37, 38, 39, 40, 41, 42, 45, 46, 49, 50) serta 6 soal yang datanya tidak lengkap atau tidak konsisten pada naskah hasil arsip (nomor 13, 18, 26, 30, 35, 36).',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-kimia-sma-2023.md',
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
            'Ion perak dalam perak oksalat ($\\mathrm{Ag_2C_2O_4}$) memiliki konfigurasi elektron (keadaan dasar) yang sama dengan ....\n\nA. $\\mathrm{In^{3+}}$\nB. $\\mathrm{Kr}$\nC. $\\mathrm{Pd^{2+}}$\nD. $\\mathrm{Au^+}$\nE. $\\mathrm{Cd}$',
          answer: 'A. $\\mathrm{In^{3+}}$',
          principle:
            'Spesi isoelektronik dengan struktur kulit valensi identik memiliki jumlah elektron dan konfigurasi elektron keadaan dasar yang sama; pelepasan elektron kation dimulai dari subkulit dengan bilangan kuantum utama $n$ terbesar.',
          solution:
            'Dalam perak oksalat ($\\mathrm{Ag_2C_2O_4}$), ion oksalat bermuatan $2-$ ($\\mathrm{C_2O_4^{2-}}$), sehingga ion perak berupa $\\mathrm{Ag^+}$.\nAtom netral perak ($Z = 47$) memiliki konfigurasi keadaan dasar $[\\mathrm{Kr}]\\,4d^{10}5s^1$. Melepas $1$ elektron dari kulit terluar $5s$ menghasilkan konfigurasi $\\mathrm{Ag^+}$ ($46$ elektron):\n$$\\mathrm{Ag^+} : [\\mathrm{Kr}]\\,4d^{10}.$$\nPeriksa konfigurasi keadaan dasar masing-masing opsi:\n- $\\mathrm{In^{3+}}$ ($Z = 49$, $49 - 3 = 46$ elektron): atom $\\mathrm{In}$ memiliki konfigurasi $[\\mathrm{Kr}]\\,4d^{10}5s^25p^1$. Pelepasan $3$ elektron dari $5p^1$ dan $5s^2$ menghasilkan $[\\mathrm{Kr}]\\,4d^{10}$, identik dengan $\\mathrm{Ag^+}$.\n- $\\mathrm{Kr}$ ($Z = 36$): $[\\mathrm{Ar}]\\,3d^{10}4s^24p^6$.\n- $\\mathrm{Pd^{2+}}$ ($Z = 46$, $44$ elektron): $[\\mathrm{Kr}]\\,4d^8$.\n- $\\mathrm{Au^+}$ ($Z = 79$, $78$ elektron): $[\\mathrm{Xe}]\\,4f^{14}5d^{10}$.\n- $\\mathrm{Cd}$ ($Z = 48$): $[\\mathrm{Kr}]\\,4d^{10}5s^2$.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Dari keempat senyawa berikut, urutan senyawa yang memiliki panjang ikatan dari yang terpendek ke terpanjang adalah ....\n\nA. $\\mathrm{H_2O < CH_4 < NH_3 < HF}$\nB. $\\mathrm{HF < H_2O < NH_3 < CH_4}$\nC. $\\mathrm{HF < H_2O < CH_4 < NH_3}$\nD. $\\mathrm{CH_4 < NH_3 < HF < H_2O}$\nE. $\\mathrm{CH_4 < NH_3 < H_2O < HF}$',
          answer: 'B. $\\mathrm{HF < H_2O < NH_3 < CH_4}$',
          principle:
            'Dalam satu periode, jari-jari atom berkurang dari kiri ke kanan seiring bertambahnya muatan inti efektif, sehingga panjang ikatan kovalen tunggal $\\mathrm{X-H}$ memendek dari $\\mathrm{C}$ ke $\\mathrm{F}$.',
          solution:
            'Keempat molekul hanya memiliki ikatan kovalen tunggal antara atom pusat periode $2$ ($\\mathrm{C}, \\mathrm{N}, \\mathrm{O}, \\mathrm{F}$) dan atom hidrogen ($\\mathrm{H}$).\nDalam periode $2$, nomor atom bertambah dari $\\mathrm{C}$ ($6$) $\\to$ $\\mathrm{N}$ ($7$) $\\to$ $\\mathrm{O}$ ($8$) $\\to$ $\\mathrm{F}$ ($9$), sehingga muatan inti efektif meningkat dan jari-jari kovalen atom pusat mengecil:\n$$r_{\\mathrm{F}} < r_{\\mathrm{O}} < r_{\\mathrm{N}} < r_{\\mathrm{C}}.$$\nAkibatnya, panjang ikatan tunggal $\\mathrm{X-H}$ bertambah sesuai urutan:\n$$d(\\mathrm{H-F}) < d(\\mathrm{H-O}) < d(\\mathrm{H-N}) < d(\\mathrm{H-C}),$$\nyakni $\\mathrm{HF} \\;(\\approx 92\\text{ pm}) < \\mathrm{H_2O} \\;(\\approx 96\\text{ pm}) < \\mathrm{NH_3} \\;(\\approx 101\\text{ pm}) < \\mathrm{CH_4} \\;(\\approx 109\\text{ pm})$.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Di antara keempat molekul di bawah ini, manakah yang memiliki ikatan hidrogen dalam interaksi antarmolekulnya?\ni. $\\mathrm{CHF_3}$ (trifluorometana)\nii. $\\mathrm{C_6H_{12}O_6}$ (glukosa)\niii. $\\mathrm{C_6H_3F_3}$ (trifluorobenzena)\niv. $\\mathrm{CCl_3COOH}$ (asam trikloroasetat)\n\nA. i, ii, dan iii\nB. iv saja\nC. ii, iii, dan iv\nD. ii dan iv\nE. semua benar',
          answer: 'D. ii dan iv',
          principle:
            'Ikatan hidrogen antarmolekul klasik terbentuk ketika molekul memiliki atom $\\mathrm{H}$ yang terikat langsung secara kovalen pada atom sangat elektronegatif ($\\mathrm{F}$, $\\mathrm{O}$, atau $\\mathrm{N}$) sebagai donor, serta pasangan elektron bebas pada $\\mathrm{F}$, $\\mathrm{O}$, atau $\\mathrm{N}$ sebagai akseptor.',
          solution:
            'Evaluasi gugus fungsi pada setiap molekul:\n- i. $\\mathrm{CHF_3}$ (trifluorometana): seluruh ikatan $\\mathrm{H}$ terikat pada atom karbon ($\\mathrm{C-H}$), bukan pada $\\mathrm{F}$. Tidak terdapat gugus donor $\\mathrm{F-H}$, $\\mathrm{O-H}$, maupun $\\mathrm{N-H}$, sehingga tidak membentuk ikatan hidrogen antarmolekul klasik.\n- ii. $\\mathrm{C_6H_{12}O_6}$ (glukosa): memiliki beberapa gugus hidroksil ($\\mathrm{-OH}$), sehingga mampu bertindak sebagai donor sekaligus akseptor ikatan hidrogen antarmolekul.\n- iii. $\\mathrm{C_6H_3F_3}$ (trifluorobenzena): atom $\\mathrm{H}$ dan $\\mathrm{F}$ terikat pada cincin karbon aromatik ($\\mathrm{C-H}$ dan $\\mathrm{C-F}$); tidak ada ikatan $\\mathrm{F-H}$, sehingga tidak terbentuk ikatan hidrogen antarmolekul.\n- iv. $\\mathrm{CCl_3COOH}$ (asam trikloroasetat): memiliki gugus karboksil ($\\mathrm{-COOH}$) dengan ikatan $\\mathrm{O-H}$ dan oksigen karbonil ($\\mathrm{C=O}$), sehingga dapat membentuk ikatan hidrogen antarmolekul (termasuk dimer asam karboksilat).\nJadi hanya ii dan iv yang memiliki ikatan hidrogen antarmolekul.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Analisis kuantitatif untuk menentukan kadar senyawa tetraetiltiuram disulfida ($\\mathrm{C_{10}H_{20}N_2S_4}$) dapat dilakukan dengan mengoksidasi sulfur menjadi $\\mathrm{SO_2}$. $\\mathrm{SO_2}$ kemudian di-\\textit{bubbling} dalam larutan $\\mathrm{H_2O_2}$ hingga terbentuk $\\mathrm{H_2SO_4}$. Asam sulfat yang terbentuk dapat bereaksi dengan $\\mathrm{NaOH}$ sebagai berikut:\n$$\\mathrm{H_2SO_4}(aq) + 2\\mathrm{NaOH}(aq) \\rightarrow \\mathrm{Na_2SO_4}(aq) + 2\\mathrm{H_2O}(l)$$\nJika $\\mathrm{H_2SO_4}$ yang terbentuk membutuhkan $34{,}85\\text{ mL}$ $\\mathrm{NaOH}$ $0{,}025\\text{ M}$ untuk bereaksi, kadar $\\mathrm{C_{10}H_{20}N_2S_4}$ dalam $0{,}4605\\text{ g}$ sampel adalah .... ($\\%\\text{b/b}$)\n\nA. $7{,}00$\nB. $8{,}75$\nC. $10{,}15$\nD. $12{,}00$\nE. $17{,}50$',
          answer: 'A. $7{,}00$',
          principle:
            'Kesetimbangan stoikiometri unsur sulfur: setiap $1\\text{ mol}$ $\\mathrm{C_{10}H_{20}N_2S_4}$ mengandung $4\\text{ mol}$ atom $\\mathrm{S}$ yang dikonversi menjadi $4\\text{ mol}$ $\\mathrm{H_2SO_4}$ dan dititrasi oleh $8\\text{ mol}$ $\\mathrm{NaOH}$.',
          solution:
            'Hitung jumlah mol $\\mathrm{NaOH}$ yang bereaksi:\n$$n_{\\mathrm{NaOH}} = V \\cdot M = 34{,}85\\text{ mL} \\times 0{,}025\\text{ M} = 0{,}87125\\text{ mmol} = 8{,}7125 \\times 10^{-4}\\text{ mol}.$$\nDari persamaan reaksi titrasi $\\mathrm{H_2SO_4} + 2\\mathrm{NaOH} \\rightarrow \\mathrm{Na_2SO_4} + 2\\mathrm{H_2O}$, jumlah mol $\\mathrm{H_2SO_4}$:\n$$n_{\\mathrm{H_2SO_4}} = \\frac{1}{2} n_{\\mathrm{NaOH}} = \\frac{8{,}7125 \\times 10^{-4}}{2} = 4{,}35625 \\times 10^{-4}\\text{ mol}.$$\nKarena seluruh atom $\\mathrm{S}$ berasal dari $\\mathrm{C_{10}H_{20}N_2S_4}$ ($4$ atom $\\mathrm{S}$ per molekul $\\to 4\\mathrm{SO_2} \\to 4\\mathrm{H_2SO_4}$), maka:\n$$n_{\\mathrm{C_{10}H_{20}N_2S_4}} = \\frac{1}{4} n_{\\mathrm{H_2SO_4}} = \\frac{4{,}35625 \\times 10^{-4}}{4} = 1{,}0890625 \\times 10^{-4}\\text{ mol}.$$\nMassa molar $\\mathrm{C_{10}H_{20}N_2S_4}$:\n$$M_r = 10(12) + 20(1) + 2(14) + 4(32) = 120 + 20 + 28 + 128 = 296\\text{ g/mol}.$$\nMassa senyawa dalam sampel:\n$$m = n \\cdot M_r = 1{,}0890625 \\times 10^{-4}\\text{ mol} \\times 296\\text{ g/mol} = 0{,}032236\\text{ g}.$$\nKadar massa senyawa dalam $0{,}4605\\text{ g}$ sampel:\n$$\\%\\text{b/b} = \\frac{0{,}032236}{0{,}4605} \\times 100\\% = 7{,}00\\%.$$',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Reaksi $\\mathrm{A} \\rightarrow 2\\mathrm{B}$ memiliki tetapan laju reaksi sebesar $0{,}012\\text{ s}^{-1}$. Jika konsentrasi awal $\\mathrm{A}$ adalah $0{,}56\\text{ M}$, konsentrasi $\\mathrm{B}$ setelah reaksi berlangsung $45\\text{ detik}$ adalah ....\n\nA. $0{,}326\\text{ M}$\nB. $0{,}020\\text{ M}$\nC. $0{,}467\\text{ M}$\nD. $0{,}430\\text{ M}$\nE. $0{,}260\\text{ M}$',
          answer: 'C. $0{,}467\\text{ M}$',
          principle:
            'Satuan tetapan laju $\\text{s}^{-1}$ menunjukkan reaksi orde satu, dengan hukum laju terintegrasi $[\\mathrm{A}]_t = [\\mathrm{A}]_0 e^{-kt}$ dan hubungan stoikiometri $[\\mathrm{B}]_t = 2([\\mathrm{A}]_0 - [\\mathrm{A}]_t)$.',
          solution:
            'Dari satuan $k = 0{,}012\\text{ s}^{-1}$, reaksi $\\mathrm{A} \\rightarrow 2\\mathrm{B}$ berorde satu terhadap $\\mathrm{A}$.\nKonsentrasi $\\mathrm{A}$ yang tersisa pada $t = 45\\text{ s}$ adalah:\n$$[\\mathrm{A}]_t = [\\mathrm{A}]_0 \\, e^{-kt} = 0{,}56 \\times e^{-(0{,}012)(45)} = 0{,}56 \\times e^{-0{,}54}.$$\nDengan $e^{-0{,}54} \\approx 0{,}58275$, diperoleh:\n$$[\\mathrm{A}]_t = 0{,}56 \\times 0{,}58275 = 0{,}3263\\text{ M}.$$\nJumlah konsentrasi $\\mathrm{A}$ yang telah bereaksi:\n$$\\Delta[\\mathrm{A}] = [\\mathrm{A}]_0 - [\\mathrm{A}]_t = 0{,}56 - 0{,}3263 = 0{,}2337\\text{ M}.$$\nBerdasarkan stoikiometri reaksi $\\mathrm{A} \\rightarrow 2\\mathrm{B}$, setiap $1\\text{ mol}$ $\\mathrm{A}$ yang bereaksi menghasilkan $2\\text{ mol}$ $\\mathrm{B}$, sehingga:\n$$[\\mathrm{B}]_t = 2 \\, \\Delta[\\mathrm{A}] = 2 \\times 0{,}2337 = 0{,}4673\\text{ M} \\approx 0{,}467\\text{ M}.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Pada reaksi $\\mathrm{A} \\rightarrow \\mathrm{B}$, konsentrasi $\\mathrm{A}$ berkurang dari $0{,}1\\text{ M}$ menjadi $0{,}075\\text{ M}$ dalam waktu $10\\text{ detik}$ pada $T = 25\\,^\\circ\\mathrm{C}$. Jika reaksi dilakukan pada $T = 40\\,^\\circ\\mathrm{C}$, waktu yang diperlukan agar konsentrasi $\\mathrm{A}$ berkurang dari $0{,}1\\text{ M}$ menjadi $0{,}075\\text{ M}$ adalah $6\\text{ detik}$. Energi pengaktifan reaksi tersebut adalah ....\n\nA. $0{,}283\\text{ kJ/mol}$\nB. $260{,}47\\text{ kJ/mol}$\nC. $26{,}41\\text{ kJ/mol}$\nD. $2{,}79\\text{ kJ/mol}$\nE. $1{,}21\\text{ kJ/mol}$',
          answer: 'C. $26{,}41\\text{ kJ/mol}$',
          principle:
            'Untuk selang perubahan konsentrasi yang sama, konstanta laju berbanding terbalik dengan waktu reaksi ($k \\propto 1/t$) dan mengikuti persamaan Arrhenius $\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$.',
          solution:
            'Karena kedua percobaan menempuh perubahan konsentrasi yang identik ($0{,}1\\text{ M} \\to 0{,}075\\text{ M}$), rasio tetapan laju pada $T_2 = 40\\,^\\circ\\mathrm{C} = 313\\text{ K}$ terhadap $T_1 = 25\\,^\\circ\\mathrm{C} = 298\\text{ K}$ adalah:\n$$\\frac{k_2}{k_1} = \\frac{t_1}{t_2} = \\frac{10\\text{ s}}{6\\text{ s}} = \\frac{5}{3}.$$\nSubstitusikan ke dalam persamaan Arrhenius dalam bentuk dua suhu:\n$$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right) = \\frac{E_a}{R} \\cdot \\frac{T_2 - T_1}{T_1 T_2}.$$\nSehingga:\n$$E_a = \\frac{R \\cdot T_1 T_2 \\cdot \\ln(5/3)}{T_2 - T_1} = \\frac{8{,}314\\text{ J mol}^{-1}\\text{K}^{-1} \\times 298\\text{ K} \\times 313\\text{ K} \\times 0{,}51083}{313 - 298}.$$\n$$E_a = \\frac{396135{,}07}{15} \\approx 26409\\text{ J/mol} = 26{,}41\\text{ kJ/mol}.$$',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Larutan $\\mathrm{KNO_3}$ ($\\text{MM} = 101\\text{ g/mol}$) terionisasi sempurna di dalam air. Pada $25\\,^\\circ\\mathrm{C}$ tekanan uap air murni adalah $23{,}76\\text{ mmHg}$. Larutan yang mengandung $10\\%$ ($\\text{b/b}$) $\\mathrm{KNO_3}$ memiliki massa jenis $1{,}45\\text{ g/mL}$. Tekanan uap larutan ini adalah .... (Diketahui $\\text{MM air} = 18\\text{ g/mol}$)\n\nA. $46{,}60\\text{ mmHg}$\nB. $23{,}30\\text{ mmHg}$\nC. $23{,}76\\text{ mmHg}$\nD. $15{,}58\\text{ mmHg}$\nE. $22{,}86\\text{ mmHg}$',
          answer: 'E. $22{,}86\\text{ mmHg}$',
          principle:
            'Menurut hukum Raoult dengan faktor van \'t Hoff $i$ untuk elektrolit kuat, tekanan uap larutan pelarut volatil adalah $P_{\\text{larutan}} = X_{\\text{pelarut}} \\cdot P^\\circ_{\\text{pelarut}} = \\frac{n_{\\text{pelarut}}}{n_{\\text{pelarut}} + i\\,n_{\\text{terlarut}}} P^\\circ_{\\text{pelarut}}$.',
          solution:
            'Ambil basis $100\\text{ g}$ larutan $10\\%$ ($\\text{b/b}$) $\\mathrm{KNO_3}$, yang terdiri atas $10\\text{ g}$ $\\mathrm{KNO_3}$ dan $90\\text{ g}$ air.\nJumlah mol masing-masing komponen:\n$$n_{\\mathrm{KNO_3}} = \\frac{10\\text{ g}}{101\\text{ g/mol}} \\approx 0{,}09901\\text{ mol}, \\qquad n_{\\mathrm{H_2O}} = \\frac{90\\text{ g}}{18\\text{ g/mol}} = 5{,}00\\text{ mol}.$$\nKarena $\\mathrm{KNO_3}$ terionisasi sempurna menjadi $\\mathrm{K^+}$ dan $\\mathrm{NO_3^-}$, faktor van \'t Hoff $i = 2$, sehingga jumlah mol total partikel terlarut efektif adalah $i\\,n_{\\mathrm{KNO_3}} = 2 \\times \\frac{10}{101} = \\frac{20}{101}\\text{ mol}$.\nFraksi mol air dalam larutan:\n$$X_{\\mathrm{H_2O}} = \\frac{5}{5 + \\frac{20}{101}} = \\frac{505}{525} = \\frac{101}{105} \\approx 0{,}96190.$$\nTekanan uap larutan pada $25\\,^\\circ\\mathrm{C}$:\n$$P_{\\text{larutan}} = X_{\\mathrm{H_2O}} \\cdot P^\\circ_{\\mathrm{H_2O}} = \\frac{101}{105} \\times 23{,}76\\text{ mmHg} = 22{,}855\\text{ mmHg} \\approx 22{,}86\\text{ mmHg}.$$',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Suatu larutan mengandung benzena ($\\text{MM} = 78\\text{ g/mol}$) dan toluena ($\\text{MM} = 92\\text{ g/mol}$). Pada $85\\,^\\circ\\mathrm{C}$, fraksi mol toluena dalam fasa uap di atas larutan tersebut adalah $0{,}25$. Diketahui pada $85\\,^\\circ\\mathrm{C}$, tekanan uap murni benzena dan toluena berturut-turut adalah $130{,}5\\text{ kPa}$ dan $52{,}4\\text{ kPa}$. Larutan diasumsikan bersifat ideal. Fraksi mol toluena dalam larutan adalah ....\n\nA. $0{,}546$\nB. $0{,}354$\nC. $0{,}454$\nD. $0{,}646$\nE. $0{,}238$',
          answer: 'C. $0{,}454$',
          principle:
            'Untuk campuran biner ideal, hukum Raoult dan hukum Dalton menghubungkan fraksi mol fasa uap $y_T$ dengan fraksi mol fasa cair $x_T$ melalui $y_T = \\frac{x_T P^\\circ_T}{x_T P^\\circ_T + (1 - x_T) P^\\circ_B}$.',
          solution:
            'Misalkan fraksi mol toluena dalam larutan adalah $x_T$, maka fraksi mol benzena dalam larutan adalah $x_B = 1 - x_T$.\nBerdasarkan hukum Raoult, tekanan parsial masing-masing komponen:\n$$P_T = x_T P^\\circ_T = 52{,}4\\,x_T, \\qquad P_B = (1 - x_T) P^\\circ_B = 130{,}5\\,(1 - x_T).$$\nPada fasa uap, fraksi mol toluena diketahui $y_T = 0{,}25 = \\frac{1}{4}$:\n$$y_T = \\frac{P_T}{P_T + P_B} = \\frac{1}{4} \\implies 4P_T = P_T + P_B \\implies 3P_T = P_B.$$\nSubstitusikan nilai $P_T$ dan $P_B$:\n$$3(52{,}4\\,x_T) = 130{,}5\\,(1 - x_T)$$\n$$157{,}2\\,x_T = 130{,}5 - 130{,}5\\,x_T$$\n$$287{,}7\\,x_T = 130{,}5 \\implies x_T = \\frac{130{,}5}{287{,}7} \\approx 0{,}4536 \\approx 0{,}454.$$',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Suatu senyawa non-elektrolit dapat larut di dalam air. Sebanyak $5{,}84\\text{ gram}$ senyawa ini ditambahkan air hingga volumenya menjadi $100{,}0\\text{ mL}$. Larutan ini memiliki massa jenis $1{,}74\\text{ g/mL}$. Titik beku larutan ini adalah $-0{,}24\\,^\\circ\\mathrm{C}$. Massa molar senyawa tersebut adalah .... $\\text{g/mol}$. (Diketahui $K_f\\text{ air} = 1{,}86\\,^\\circ\\mathrm{C/molal}$)\n\nA. $452{,}6$\nB. $118{,}3$\nC. $269{,}1$\nD. $325{,}4$\nE. $660{,}2$',
          answer: 'C. $269{,}1$',
          principle:
            'Penurunan titik beku larutan non-elektrolit memenuhi $\\Delta T_f = K_f \\cdot m = K_f \\cdot \\frac{m_{\\text{zat terlarut}}}{M_r \\cdot m_{\\text{pelarut (kg)}}}$.',
          solution:
            'Hitung massa total larutan dan massa pelarut (air):\n$$m_{\\text{larutan}} = V \\cdot \\rho = 100{,}0\\text{ mL} \\times 1{,}74\\text{ g/mL} = 174{,}0\\text{ g},$$\n$$m_{\\text{air}} = m_{\\text{larutan}} - m_{\\text{zat terlarut}} = 174{,}0 - 5{,}84 = 168{,}16\\text{ g} = 0{,}16816\\text{ kg}.$$\nDari penurunan titik beku $\\Delta T_f = 0 - (-0{,}24) = 0{,}24\\,^\\circ\\mathrm{C}$, molalitas larutan adalah:\n$$m = \\frac{\\Delta T_f}{K_f} = \\frac{0{,}24}{1{,}86} = \\frac{4}{31}\\text{ molal} \\approx 0{,}12903\\text{ mol/kg}.$$\nJumlah mol zat terlarut:\n$$n = m \\cdot m_{\\text{air (kg)}} = \\frac{4}{31} \\times 0{,}16816 = 0{,}021698\\text{ mol}.$$\nMassa molar senyawa tersebut:\n$$M_r = \\frac{m_{\\text{zat terlarut}}}{n} = \\frac{5{,}84\\text{ g}}{0{,}021698\\text{ mol}} \\approx 269{,}15\\text{ g/mol} \\approx 269{,}1\\text{ g/mol}.$$',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Larutan asam monoprotik $\\mathrm{HX}$ $1{,}00\\text{ m}$ membeku pada $-1{,}93\\,^\\circ\\mathrm{C}$. Nilai $K_a$ $\\mathrm{HX}$ adalah ....\nDiketahui $K_f\\text{ air} = 1{,}86\\,^\\circ\\mathrm{C/molal}$ dan asumsikan molaritas sama dengan molalitas.\n\nA. $1{,}70 \\times 10^{-1}$\nB. $5{,}01 \\times 10^{-2}$\nC. $1{,}47 \\times 10^{-3}$\nD. $1{,}80 \\times 10^{-4}$\nE. $4{,}60 \\times 10^{-4}$',
          answer: 'C. $1{,}47 \\times 10^{-3}$',
          principle:
            'Derajat ionisasi $\\alpha$ asam lemah monoprotik $\\mathrm{HX}$ ditentukan dari faktor van \'t Hoff $i = 1 + \\alpha = \\frac{\\Delta T_f}{K_f \\cdot m}$, lalu digunakan pada hukum pengenceran Ostwald $K_a = \\frac{C\\alpha^2}{1 - \\alpha}$.',
          solution:
            'Hitung faktor van \'t Hoff dari penurunan titik beku $\\Delta T_f = 1{,}93\\,^\\circ\\mathrm{C}$:\n$$i = \\frac{\\Delta T_f}{K_f \\cdot m} = \\frac{1{,}93}{1{,}86 \\times 1{,}00} = 1{,}037634.$$\nUntuk asam monoprotik $\\mathrm{HX} \\rightleftharpoons \\mathrm{H^+} + \\mathrm{X^-}$ ($n = 2$ ion), berlaku $i = 1 + (n - 1)\\alpha = 1 + \\alpha$, sehingga:\n$$\\alpha = i - 1 = 0{,}037634.$$\nDengan asumsi $C = 1{,}00\\text{ M}$, tetapan ionisasi asam $K_a$ adalah:\n$$K_a = \\frac{C \\alpha^2}{1 - \\alpha} = \\frac{1{,}00 \\times (0{,}037634)^2}{1 - 0{,}037634} = \\frac{0{,}0014163}{0{,}962366} \\approx 1{,}47 \\times 10^{-3}.$$',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Perhatikan pernyataan berikut ini.\nI. Membutuhkan membran semipermeabel\nII. Pelarut berpindah dari konsentrasi rendah ke konsentrasi tinggi\nIII. Zat terlarut berpindah dari konsentrasi tinggi ke konsentrasi rendah\nIV. Larutan dengan molaritas yang sama selalu memiliki tekanan osmosis yang sama\nManakah pernyataan yang benar terkait peristiwa osmosis?\n\nA. I saja\nB. I, II, dan III\nC. I, II, dan IV\nD. I dan II\nE. Semua benar',
          answer: 'D. I dan II',
          principle:
            'Osmosis adalah perpindahan bersih molekul pelarut melewati membran semipermeabel dari larutan berkonsentrasi zat terlarut lebih rendah (hipotonik) ke lebih tinggi (hipertonik), dengan tekanan osmosis $\\Pi = iMRT$.',
          solution:
            'Evaluasi setiap pernyataan:\n- I. Benar: osmosis mensyaratkan adanya membran semipermeabel yang selektif meloloskan molekul pelarut dan menahan partikel zat terlarut.\n- II. Benar: aliran neto pelarut bergerak dari larutan encer (konsentrasi zat terlarut rendah, potensial kimia pelarut tinggi) menuju larutan lebih pekat (konsentrasi zat terlarut tinggi).\n- III. Salah: pada osmosis ideal, zat terlarut tidak menembus membran semipermeabel; perpindahan zat terlarut dari konsentrasi tinggi ke rendah disebut difusi.\n- IV. Salah: tekanan osmosis $\\Pi = iMRT$ bergantung juga pada faktor van \'t Hoff $i$ dan temperatur $T$; misalnya $\\mathrm{NaCl}$ $0{,}1\\text{ M}$ ($i \\approx 2$) memiliki $\\Pi$ sekitar dua kali glukosa $0{,}1\\text{ M}$ ($i = 1$) pada suhu sama.\nJadi hanya pernyataan I dan II yang benar.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Volume $\\mathrm{HCl}$ pekat $37\\%$ ($\\text{b/b}$) dengan massa jenis $1{,}184\\text{ g/mL}$ yang dibutuhkan untuk membuat $200\\text{ mL}$ larutan $\\mathrm{HCl}$ $3{,}0\\text{ M}$ adalah ....\n\nA. $25{,}0\\text{ mL}$\nB. $30{,}0\\text{ mL}$\nC. $40{,}0\\text{ mL}$\nD. $50{,}0\\text{ mL}$\nE. $60{,}0\\text{ mL}$',
          answer: 'D. $50{,}0\\text{ mL}$',
          principle:
            'Molaritas larutan pekat dihitung dari kadar massa dan massa jenis melalui $M = \\frac{10 \\times \\%(\\text{b/b}) \\times \\rho}{M_r}$, kemudian digunakan hukum pengenceran $V_1 M_1 = V_2 M_2$.',
          solution:
            'Hitung molaritas $\\mathrm{HCl}$ pekat ($M_r = 36{,}5\\text{ g/mol}$):\n$$M_1 = \\frac{10 \\times 37 \\times 1{,}184}{36{,}5} = \\frac{438{,}08}{36{,}5} \\approx 12{,}00\\text{ M}.$$\nGunakan persamaan pengenceran untuk membuat $V_2 = 200\\text{ mL}$ larutan $\\mathrm{HCl}$ $M_2 = 3{,}0\\text{ M}$:\n$$V_1 = \\frac{V_2 M_2}{M_1} = \\frac{200\\text{ mL} \\times 3{,}0\\text{ M}}{12{,}00\\text{ M}} = 50{,}0\\text{ mL}.$$',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Padatan natrium hidrida sebanyak $5{,}52\\text{ g}$ dilarutkan dengan air dihasilkan larutan sebanyak $2{,}8\\text{ L}$. Proses pelarutan tersebut menghasilkan senyawa hidroksida dan gas hidrogen. $\\mathrm{pH}$ larutan tersebut adalah ....\n\nA. $1{,}08$\nB. $4{,}56$\nC. $7{,}00$\nD. $9{,}34$\nE. $12{,}91$',
          answer: 'E. $12{,}91$',
          principle:
            'Natrium hidrida ($\\mathrm{NaH}$) bereaksi sempurna dengan air membentuk basa kuat $\\mathrm{NaOH}$ dan gas $\\mathrm{H_2}$ menurut $\\mathrm{NaH}(s) + \\mathrm{H_2O}(l) \\rightarrow \\mathrm{NaOH}(aq) + \\mathrm{H_2}(g)$.',
          solution:
            'Tuliskan persamaan reaksi setara:\n$$\\mathrm{NaH}(s) + \\mathrm{H_2O}(l) \\rightarrow \\mathrm{NaOH}(aq) + \\mathrm{H_2}(g).$$\nDengan $M_r(\\mathrm{NaH}) = 23 + 1 = 24\\text{ g/mol}$, jumlah mol $\\mathrm{NaH}$ adalah:\n$$n_{\\mathrm{NaH}} = \\frac{5{,}52\\text{ g}}{24\\text{ g/mol}} = 0{,}23\\text{ mol}.$$\nKarena $\\mathrm{NaOH}$ merupakan basa kuat yang terionisasi sempurna dan $1\\text{ mol}$ $\\mathrm{NaH}$ menghasilkan $1\\text{ mol}$ $\\mathrm{OH^-}$:\n$$[\\mathrm{OH^-}] = \\frac{0{,}23\\text{ mol}}{2{,}8\\text{ L}} = 0{,}08214\\text{ M}.$$\nHitung $\\mathrm{pOH}$ dan $\\mathrm{pH}$ (pada $25\\,^\\circ\\mathrm{C}$, $\\mathrm{p}K_w = 14{,}00$):\n$$\\mathrm{pOH} = -\\log(0{,}08214) = 1{,}0854,$$\n$$\\mathrm{pH} = 14{,}00 - 1{,}0854 = 12{,}9146 \\approx 12{,}91.$$',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Bila padatan kalium hidroksida sebanyak $0{,}056\\text{ g}$ ditambahkan ke dalam $500\\text{ mL}$ larutan bufer asetat $0{,}05\\text{ M}$ $\\mathrm{pH}$ $5{,}0$, maka $\\mathrm{pH}$ larutan bufer berubah menjadi ....\nDiketahui bufer asetat $= \\mathrm{HC_2H_3O_2 / KC_2H_3O_2}$, $K_a\\,\\mathrm{HC_2H_3O_2} = 1{,}8 \\times 10^{-5}$, $\\text{MM KOH} = 56{,}10\\text{ g/mol}$.\n\nA. $4{,}48$\nB. $4{,}74$\nC. $5{,}31$\nD. $5{,}08$\nE. $12{,}30$',
          answer: 'D. $5{,}08$',
          principle:
            'Penambahan basa kuat $\\mathrm{OH^-}$ ke dalam bufer asam mengonversi sebagian asam lemah $\\mathrm{HA}$ menjadi basa konjugasinya $\\mathrm{A^-}$, sehingga $\\mathrm{pH}$ dihitung ulang memakai persamaan Henderson–Hasselbalch.',
          solution:
            'Hitung $\\mathrm{p}K_a$ asam asetat ($\\mathrm{HA}$):\n$$\\mathrm{p}K_a = -\\log(1{,}8 \\times 10^{-5}) = 4{,}7447.$$\nDari $\\mathrm{pH}$ awal $= 5{,}0$, persamaan Henderson–Hasselbalch memberikan perbandingan mol awal basa konjugasi ($\\mathrm{A^-}$) dan asam ($\\mathrm{HA}$):\n$$\\log\\frac{n_{\\mathrm{A^-}}}{n_{\\mathrm{HA}}} = 5{,}0 - 4{,}7447 = 0{,}2553 \\implies \\frac{n_{\\mathrm{A^-}}}{n_{\\mathrm{HA}}} = 10^{0{,}2553} = 1{,}80.$$\nJumlah mol total komponen bufer dalam $500\\text{ mL}$ larutan $0{,}05\\text{ M}$ adalah $n_{\\text{total}} = 0{,}500 \\times 0{,}05 = 0{,}025\\text{ mol} = 25\\text{ mmol}$, sehingga:\n$$n_{\\mathrm{HA}} = \\frac{25}{1 + 1{,}80} = 8{,}929\\text{ mmol}, \\qquad n_{\\mathrm{A^-}} = 25 - 8{,}929 = 16{,}071\\text{ mmol}.$$\nJumlah mol $\\mathrm{KOH}$ yang ditambahkan:\n$$n_{\\mathrm{OH^-}} = \\frac{0{,}056\\text{ g}}{56{,}10\\text{ g/mol}} = 9{,}982 \\times 10^{-4}\\text{ mol} \\approx 1{,}00\\text{ mmol}.$$\nReaksi penetralan $\\mathrm{HA} + \\mathrm{OH^-} \\rightarrow \\mathrm{A^-} + \\mathrm{H_2O}$ mengubah komposisi menjadi:\n$$n_{\\mathrm{HA}}^{\\prime} = 8{,}929 - 0{,}998 = 7{,}931\\text{ mmol}, \\qquad n_{\\mathrm{A^-}}^{\\prime} = 16{,}071 + 0{,}998 = 17{,}069\\text{ mmol}.$$\nMaka $\\mathrm{pH}$ akhir larutan adalah:\n$$\\mathrm{pH} = 4{,}7447 + \\log\\left(\\frac{17{,}069}{7{,}931}\\right) = 4{,}7447 + 0{,}3329 = 5{,}078 \\approx 5{,}08.$$',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Suatu sampel gas $\\mathrm{NOCl}$ sebanyak $1{,}00\\text{ mol}$ ditempatkan ke dalam wadah bervolume $2\\text{ L}$ dan bersuhu $227\\,^\\circ\\mathrm{C}$ hingga dicapai keadaan setimbang. Pada keadaan tersebut diketahui bahwa terdapat $0{,}056\\text{ mol}$ $\\mathrm{Cl_2}$. Nilai $K_c$ dari kesetimbangan dekomposisi $\\mathrm{NOCl}$ pada suhu tersebut sesuai dengan reaksi $2\\mathrm{NOCl}(g) \\rightleftharpoons 2\\mathrm{NO}(g) + \\mathrm{Cl_2}(g)$ adalah ....\n\nA. $2{,}2 \\times 10^{-4}$\nB. $9{,}0 \\times 10^{-4}$\nC. $2{,}25 \\times 10^{-3}$\nD. $18{,}0 \\times 10^{-3}$\nE. $4{,}5 \\times 10^{-4}$',
          answer: 'E. $4{,}5 \\times 10^{-4}$',
          principle:
            'Tetapan kesetimbangan konsentrasi $K_c$ dihitung dari konsentrasi molar seluruh spesi gas saat setimbang: $K_c = \\frac{[\\mathrm{NO}]^2[\\mathrm{Cl_2}]}{[\\mathrm{NOCl}]^2}$.',
          solution:
            'Dari tabel mula-mula–bereaksi–setimbang untuk $2\\mathrm{NOCl}(g) \\rightleftharpoons 2\\mathrm{NO}(g) + \\mathrm{Cl_2}(g)$:\n- Mula-mula: $n(\\mathrm{NOCl}) = 1{,}00\\text{ mol}$, $n(\\mathrm{NO}) = 0$, $n(\\mathrm{Cl_2}) = 0$.\n- Terbentuk pada kesetimbangan: $n(\\mathrm{Cl_2}) = 0{,}056\\text{ mol}$, sehingga berdasarkan koefisien reaksi, $\\mathrm{NO}$ yang terbentuk adalah $2 \\times 0{,}056 = 0{,}112\\text{ mol}$ dan $\\mathrm{NOCl}$ yang bereaksi adalah $0{,}112\\text{ mol}$.\n- Sisa saat setimbang: $n(\\mathrm{NOCl}) = 1{,}00 - 0{,}112 = 0{,}888\\text{ mol}$.\nBagi dengan volume wadah $V = 2\\text{ L}$ untuk memperoleh konsentrasi kesetimbangan:\n$$[\\mathrm{NOCl}] = 0{,}444\\text{ M}, \\qquad [\\mathrm{NO}] = 0{,}056\\text{ M}, \\qquad [\\mathrm{Cl_2}] = 0{,}028\\text{ M}.$$\nSubstitusikan ke ekspresi $K_c$:\n$$K_c = \\frac{(0{,}056)^2 (0{,}028)}{(0{,}444)^2} = \\frac{3{,}136 \\times 10^{-3} \\times 0{,}028}{0{,}197136} = \\frac{8{,}7808 \\times 10^{-5}}{0{,}197136} \\approx 4{,}45 \\times 10^{-4} \\approx 4{,}5 \\times 10^{-4}.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Di antara reaksi kesetimbangan di bawah ini yang reaksinya bergeser ke arah kiri (ke arah pereaksi) adalah ....\nDiketahui:\n$\\mathrm{H_2C_2O_4}$: $K_{a1} = 6{,}0 \\times 10^{-2}$ dan $K_{a2} = 6{,}1 \\times 10^{-5}$\n$\\mathrm{H_3PO_4}$: $K_{a1} = 7{,}5 \\times 10^{-3}$, $K_{a2} = 6{,}2 \\times 10^{-8}$, dan $K_{a3} = 4{,}2 \\times 10^{-13}$\n\nA. $\\mathrm{H_2C_2O_4}(aq) + \\mathrm{HPO_4^{2-}}(aq) \\rightleftharpoons \\mathrm{HC_2O_4^-}(aq) + \\mathrm{H_2PO_4^-}(aq)$\nB. $\\mathrm{H_2C_2O_4}(aq) + \\mathrm{PO_4^{3-}}(aq) \\rightleftharpoons \\mathrm{HC_2O_4^-}(aq) + \\mathrm{HPO_4^{2-}}(aq)$\nC. $\\mathrm{HC_2O_4^-}(aq) + \\mathrm{PO_4^{3-}}(aq) \\rightleftharpoons \\mathrm{C_2O_4^{2-}}(aq) + \\mathrm{HPO_4^{2-}}(aq)$\nD. $\\mathrm{C_2O_4^{2-}}(aq) + \\mathrm{H_3PO_4}(aq) \\rightleftharpoons \\mathrm{HC_2O_4^-}(aq) + \\mathrm{H_2PO_4^-}(aq)$\nE. $\\mathrm{HC_2O_4^-}(aq) + \\mathrm{H_3PO_4}(aq) \\rightleftharpoons \\mathrm{H_2C_2O_4}(aq) + \\mathrm{H_2PO_4^-}(aq)$',
          answer:
            'E. $\\mathrm{HC_2O_4^-}(aq) + \\mathrm{H_3PO_4}(aq) \\rightleftharpoons \\mathrm{H_2C_2O_4}(aq) + \\mathrm{H_2PO_4^-}(aq)$',
          principle:
            'Kesetimbangan asam–basa Brønsted–Lowry memiliki tetapan $K = \\frac{K_{a,\\text{asam reaktan}}}{K_{a,\\text{asam produk}}}$; reaksi condong ke arah kiri (pereaksi) jika $K < 1$, yakni ketika asam di ruas produk lebih kuat daripada asam di ruas pereaksi.',
          solution:
            'Hitung nilai $K$ untuk setiap reaksi dari rasio $K_a$ asam pada reaktan terhadap $K_a$ asam pada produk:\n- A. $K = \\frac{K_{a1}(\\mathrm{H_2C_2O_4})}{K_{a2}(\\mathrm{H_3PO_4})} = \\frac{6{,}0 \\times 10^{-2}}{6{,}2 \\times 10^{-8}} \\approx 9{,}7 \\times 10^5 > 1$ (ke kanan).\n- B. $K = \\frac{K_{a1}(\\mathrm{H_2C_2O_4})}{K_{a3}(\\mathrm{H_3PO_4})} = \\frac{6{,}0 \\times 10^{-2}}{4{,}2 \\times 10^{-13}} \\approx 1{,}4 \\times 10^{11} > 1$ (ke kanan).\n- C. $K = \\frac{K_{a2}(\\mathrm{H_2C_2O_4})}{K_{a3}(\\mathrm{H_3PO_4})} = \\frac{6{,}1 \\times 10^{-5}}{4{,}2 \\times 10^{-13}} \\approx 1{,}5 \\times 10^8 > 1$ (ke kanan).\n- D. $K = \\frac{K_{a1}(\\mathrm{H_3PO_4})}{K_{a2}(\\mathrm{H_2C_2O_4})} = \\frac{7{,}5 \\times 10^{-3}}{6{,}1 \\times 10^{-5}} \\approx 123 > 1$ (ke kanan).\n- E. $K = \\frac{K_{a1}(\\mathrm{H_3PO_4})}{K_{a1}(\\mathrm{H_2C_2O_4})} = \\frac{7{,}5 \\times 10^{-3}}{6{,}0 \\times 10^{-2}} = 0{,}125 < 1$, sehingga kesetimbangan terletak di sebelah kiri (ke arah pereaksi).',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Perhatikan pernyataan terkait reaksi kesetimbangan untuk disosiasi merkaptoetanol pada suhu ruang:\n$$\\mathrm{HOCH_2CH_2SH}(aq) \\rightleftharpoons \\mathrm{H^+}(aq) + \\mathrm{HOCH_2CH_2S^-}(aq) \\qquad K = 1{,}91 \\times 10^{-10}$$\nI. Reaksi tersebut lebih condong ke arah pembentukan produk\nII. Komposisi total produk lebih besar dibandingkan komposisi reaktan\nIII. Jika reaksi tersebut terjadi dalam larutan basa maka kesetimbangan akan bergeser ke kanan\nIV. Pada temperatur tetap penambahan konsentrasi merkaptoetanol pada reaksi di atas akan memperbesar nilai $K$\nPernyataan yang benar adalah ....\n\nA. I, II, dan III\nB. Hanya III\nC. II dan IV\nD. III dan IV\nE. I, II, dan IV',
          answer: 'B. Hanya III',
          principle:
            'Nilai $K \\ll 1$ menandakan kesetimbangan didominasi oleh pereaksi, nilai $K$ hanya bergantung pada temperatur, dan menurut asas Le Chatelier pengurangan spesi produk menggeser kesetimbangan ke kanan.',
          solution:
            'Analisis keempat pernyataan:\n- I. Salah: karena $K = 1{,}91 \\times 10^{-10} \\ll 1$, reaksi jauh lebih condong ke arah pereaksi.\n- II. Salah: konsentrasi merkaptoetanol tak terdisosiasi jauh lebih besar daripada konsentrasi produk ion.\n- III. Benar: dalam larutan basa, ion $\\mathrm{OH^-}$ menetralkan ion $\\mathrm{H^+}$ menjadi $\\mathrm{H_2O}$ sehingga menurunkan $[\\mathrm{H^+}]$. Akibatnya kesetimbangan bergeser ke kanan untuk memulihkan $\\mathrm{H^+}$.\n- IV. Salah: tetapan kesetimbangan $K$ hanya bergantung pada suhu; penambahan konsentrasi reaktan pada suhu tetap hanya menggeser kesetimbangan tanpa mengubah nilai $K$.\nJadi hanya pernyataan III yang benar.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Gas $\\mathrm{I_2}$ dan $\\mathrm{Br_2}$ dibiarkan bereaksi dalam reaktor bervolume tetap $1{,}0\\text{ L}$ membentuk gas $\\mathrm{IBr}$ sesuai dengan reaksi berikut:\n$$\\mathrm{I_2}(g) + \\mathrm{Br_2}(g) \\rightleftharpoons 2\\mathrm{IBr}(g)$$\nJika direaksikan $76{,}2\\text{ g}$ $\\mathrm{I_2}(g)$ dengan $48{,}0\\text{ g}$ $\\mathrm{Br_2}(g)$ dan diketahui $K_p$ reaksi tersebut adalah $1{,}2 \\times 10^2$ pada $127\\,^\\circ\\mathrm{C}$, pernyataan yang tidak benar saat reaksi telah mencapai kesetimbangan adalah ....\n\nA. Tekanan parsial $\\mathrm{I_2} = 1{,}51\\text{ atm}$\nB. Konsentrasi $\\mathrm{IBr} = 0{,}508\\text{ M}$\nC. Konsentrasi $\\mathrm{Br_2} = 0{,}254\\text{ M}$\nD. $K_c = 1{,}20 \\times 10^2$\nE. Tekanan total $= 19{,}68\\text{ atm}$',
          answer: 'C. Konsentrasi $\\mathrm{Br_2} = 0{,}254\\text{ M}$',
          principle:
            'Untuk reaksi dengan $\\Delta n_g = 0$, berlaku $K_c = K_p$, jumlah mol total gas tetap konstan, dan konsentrasi kesetimbangan ditentukan dari persamaan kuadrat sempurna.',
          solution:
            'Hitung konsentrasi awal masing-masing pereaksi dalam $V = 1{,}0\\text{ L}$ ($M_r(\\mathrm{I_2}) = 254\\text{ g/mol}$, $M_r(\\mathrm{Br_2}) = 160\\text{ g/mol}$):\n$$[\\mathrm{I_2}]_0 = \\frac{76{,}2}{254 \\times 1{,}0} = 0{,}300\\text{ M}, \\qquad [\\mathrm{Br_2}]_0 = \\frac{48{,}0}{160 \\times 1{,}0} = 0{,}300\\text{ M}.$$\nKarena $\\Delta n_g = 2 - (1 + 1) = 0$, maka $K_c = K_p(RT)^{-\\Delta n_g} = K_p = 1{,}20 \\times 10^2$ (pernyataan D benar).\nMisalkan konsentrasi yang bereaksi adalah $x$:\n$$K_c = \\frac{(2x)^2}{(0{,}300 - x)^2} = 120 \\implies \\frac{2x}{0{,}300 - x} = \\sqrt{120} \\approx 10{,}9545.$$\nSelesaikan untuk $x$:\n$$2x = 3{,}2863 - 10{,}9545\\,x \\implies 12{,}9545\\,x = 3{,}2863 \\implies x \\approx 0{,}2537\\text{ M}.$$\nOleh karena itu, pada kesetimbangan:\n- $[\\mathrm{IBr}] = 2x = 0{,}5074\\text{ M} \\approx 0{,}508\\text{ M}$ (B benar).\n- $[\\mathrm{I_2}] = [\\mathrm{Br_2}] = 0{,}300 - 0{,}2537 = 0{,}0463\\text{ M}$, bukan $0{,}254\\text{ M}$ (nilai $0{,}254\\text{ M}$ adalah jumlah yang bereaksi $x$, bukan sisa setimbang, sehingga C tidak benar).\n- Pada $T = 127 + 273 = 400\\text{ K}$ dan $R = 0{,}082\\text{ L atm mol}^{-1}\\text{K}^{-1}$: $P_{\\text{total}} = 0{,}600 \\times 0{,}082 \\times 400 = 19{,}68\\text{ atm}$ (E benar) dan $P_{\\mathrm{I_2}} = 0{,}0463 \\times 0{,}082 \\times 400 \\approx 1{,}52\\text{ atm}$ ($1{,}51\\text{ atm}$ bila dibulatkan $0{,}046\\text{ M}$, A benar).',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Untuk reaksi kesetimbangan hipotetik:\n$$\\mathrm{A}(s) + \\mathrm{B}(l) \\rightleftharpoons \\mathrm{C}(g) + \\mathrm{D}(g) \\qquad \\Delta H^\\circ = 84{,}3\\text{ kJ}$$\nJika kedua reaktan tersebut diletakkan dalam wadah tertutup rapat dan dibiarkan mencapai kesetimbangan, jumlah mol $\\mathrm{C}$ dapat diturunkan dengan cara ....\n\nA. Menambah jumlah $\\mathrm{A}$ ke dalam sistem\nB. Menurunkan volume dari wadah reaksi\nC. Mengurangi jumlah $\\mathrm{D}$ dari sistem\nD. Meningkatkan temperatur reaksi\nE. Meningkatkan jumlah katalis',
          answer: 'B. Menurunkan volume dari wadah reaksi',
          principle:
            'Menurut asas Le Chatelier, penurunan volume (peningkatan tekanan) menggeser kesetimbangan ke arah sisi dengan jumlah mol gas lebih kecil; padatan/cairan murni dan katalis tidak menggeser kesetimbangan.',
          solution:
            'Periksa pengaruh setiap perlakuan terhadap kesetimbangan $\\mathrm{A}(s) + \\mathrm{B}(l) \\rightleftharpoons \\mathrm{C}(g) + \\mathrm{D}(g)$ ($\\Delta H^\\circ = +84{,}3\\text{ kJ}$, reaksi endotermik):\n- A. Penambahan padatan murni $\\mathrm{A}$ tidak mengubah posisi kesetimbangan karena aktivitas padatan murni bernilai tetap ($1$).\n- B. Penurunan volume wadah meningkatkan tekanan total sistem, sehingga kesetimbangan bergeser ke sisi dengan jumlah mol gas lebih sedikit, yakni ke kiri ($0\\text{ mol}$ gas di kiri vs $2\\text{ mol}$ gas di kanan). Akibatnya jumlah mol $\\mathrm{C}$ turun.\n- C. Pengurangan gas $\\mathrm{D}$ menggeser kesetimbangan ke kanan sehingga menambah jumlah mol $\\mathrm{C}$.\n- D. Peningkatan temperatur menggeser reaksi endotermik ke kanan sehingga menambah jumlah mol $\\mathrm{C}$.\n- E. Katalis hanya mempercepat tercapainya kesetimbangan tanpa menggeser komposisi setimbang.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Diketahui energi ikat $\\mathrm{O-O}$ dan $\\mathrm{O=O}$ berturut-turut $146$ dan $498\\text{ kJ/mol}$. Jumlah energi yang dilepaskan/diserap pada disosiasi $1\\text{ mol}$ gas hidrogen peroksida menjadi uap air dan molekul oksigen adalah ....\n\nA. diserap $103\\text{ kJ}$ energi\nB. dilepaskan $103\\text{ kJ}$ energi\nC. dilepaskan $206\\text{ kJ}$ energi\nD. diserap $203\\text{ kJ}$ energi\nE. dilepaskan $352\\text{ kJ}$ energi',
          answer: 'B. dilepaskan $103\\text{ kJ}$ energi',
          principle:
            'Perubahan entalpi reaksi dari data energi ikat rata-rata adalah $\\Delta H = \\sum D_{\\text{ikatan putus}} - \\sum D_{\\text{ikatan terbentuk}}$.',
          solution:
            'Tuliskan persamaan reaksi disosiasi $1\\text{ mol}$ gas hidrogen peroksida:\n$$\\mathrm{H_2O_2}(g) \\rightarrow \\mathrm{H_2O}(g) + \\frac{1}{2}\\mathrm{O_2}(g).$$\nIdentifikasi jenis ikatan pada pereaksi dan produk:\n- Pada $1\\text{ mol}$ $\\mathrm{H-O-O-H}$: terdapat $2\\text{ mol}$ ikatan $\\mathrm{O-H}$ dan $1\\text{ mol}$ ikatan $\\mathrm{O-O}$.\n- Pada $1\\text{ mol}$ $\\mathrm{H-O-H}$ dan $\\frac{1}{2}\\text{ mol}$ $\\mathrm{O=O}$: terdapat $2\\text{ mol}$ ikatan $\\mathrm{O-H}$ dan $\\frac{1}{2}\\text{ mol}$ ikatan $\\mathrm{O=O}$.\nKarena $2\\text{ mol}$ ikatan $\\mathrm{O-H}$ muncul di kedua ruas dan saling meniadakan, perubahan entalpinya adalah:\n$$\\Delta H = D(\\mathrm{O-O}) - \\frac{1}{2} D(\\mathrm{O=O}) = 146 - \\frac{1}{2}(498) = 146 - 249 = -103\\text{ kJ/mol}.$$\nTanda negatif menunjukkan reaksi eksotermik sehingga dilepaskan energi sebesar $103\\text{ kJ}$ untuk setiap $1\\text{ mol}$ $\\mathrm{H_2O_2}$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Berdasarkan data entalpi reaksi berikut:\n$$2\\mathrm{B}(s) + 3\\mathrm{H_2}(g) \\rightarrow \\mathrm{B_2H_6}(g) \\qquad \\Delta H^\\circ = 45\\text{ kJ}$$\n$$2\\mathrm{H_2}(g) + \\mathrm{O_2}(g) \\rightarrow 2\\mathrm{H_2O}(l) \\qquad \\Delta H^\\circ = -570\\text{ kJ}$$\n$$\\mathrm{B_2H_6}(g) + 3\\mathrm{O_2}(g) \\rightarrow \\mathrm{B_2O_3}(s) + 3\\mathrm{H_2O}(l) \\qquad \\Delta H^\\circ = -2150\\text{ kJ}$$\nEntalpi reaksi pembentukan $\\mathrm{B_2O_3}(s)$ adalah ....\n\nA. $-1250\\text{ kJ/mol}$\nB. $-2960\\text{ kJ/mol}$\nC. $-2500\\text{ kJ/mol}$\nD. $-2150\\text{ kJ/mol}$\nE. $-1535\\text{ kJ/mol}$',
          answer: 'A. $-1250\\text{ kJ/mol}$',
          principle:
            'Menurut hukum Hess, entalpi reaksi pembentukan standar $\\Delta H^\\circ_f$ merupakan perubahan entalpi pembentukan $1\\text{ mol}$ senyawa dari unsur-unsur penyusunnya dalam keadaan standar dan bersifat aditif.',
          solution:
            'Reaksi pembentukan standar $1\\text{ mol}$ $\\mathrm{B_2O_3}(s)$ adalah:\n$$2\\mathrm{B}(s) + \\frac{3}{2}\\mathrm{O_2}(g) \\rightarrow \\mathrm{B_2O_3}(s).$$\nSusun ketiga reaksi diketahui untuk memperoleh reaksi target:\n1. Tetap reaksi (1): $2\\mathrm{B}(s) + 3\\mathrm{H_2}(g) \\rightarrow \\mathrm{B_2H_6}(g)$, $\\Delta H_1^\\circ = +45\\text{ kJ}$.\n2. Tetap reaksi (3): $\\mathrm{B_2H_6}(g) + 3\\mathrm{O_2}(g) \\rightarrow \\mathrm{B_2O_3}(s) + 3\\mathrm{H_2O}(l)$, $\\Delta H_3^\\circ = -2150\\text{ kJ}$.\n3. Balik dan kalikan $\\frac{3}{2}$ reaksi (2): $3\\mathrm{H_2O}(l) \\rightarrow 3\\mathrm{H_2}(g) + \\frac{3}{2}\\mathrm{O_2}(g)$, $\\Delta H = -\\frac{3}{2}(-570) = +855\\text{ kJ}$.\nJumlahkan ketiga tahap (spesi $\\mathrm{B_2H_6}$, $3\\mathrm{H_2}$, dan $3\\mathrm{H_2O}$ saling habis):\n$$\\Delta H^\\circ_f(\\mathrm{B_2O_3}(s)) = 45 + (-2150) + 855 = -1250\\text{ kJ/mol}.$$',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Reaksi eksotermis berikut yang berlangsung spontan pada temperatur berapa pun adalah ....\ni. $\\mathrm{H_2}(g) + \\mathrm{Br_2}(l) \\rightarrow 2\\mathrm{HBr}(g)$\nii. $\\mathrm{NH_3}(g) + \\mathrm{HCl}(g) \\rightarrow \\mathrm{NH_4Cl}(s)$\niii. $2\\mathrm{H_2S}(g) + \\mathrm{SO_2}(g) \\rightarrow 3\\mathrm{S}(s) + 2\\mathrm{H_2O}(l)$\n\nA. hanya i\nB. i dan ii\nC. i dan iii\nD. ii dan iii\nE. i, ii, dan iii',
          answer: 'A. hanya i',
          principle:
            'Berdasarkan energi bebas Gibbs $\\Delta G = \\Delta H - T\\Delta S$, reaksi eksotermis ($\\Delta H < 0$) berlangsung spontan pada semua temperatur $T > 0$ jika dan hanya jika entropi sistem meningkat ($\\Delta S > 0$).',
          solution:
            'Ketiga reaksi diketahui eksotermis ($\\Delta H < 0$). Agar $\\Delta G = \\Delta H - T\\Delta S < 0$ pada suhu berapa pun, diperlukan $\\Delta S > 0$, yang umumnya ditandai oleh kenaikan jumlah mol gas ($\\Delta n_{\\text{gas}} > 0$):\n- i. $\\mathrm{H_2}(g) + \\mathrm{Br_2}(l) \\rightarrow 2\\mathrm{HBr}(g)$: $\\Delta n_{\\text{gas}} = 2 - 1 = +1 > 0 \\implies \\Delta S > 0$, sehingga selalu spontan pada temperatur berapa pun.\n- ii. $\\mathrm{NH_3}(g) + \\mathrm{HCl}(g) \\rightarrow \\mathrm{NH_4Cl}(s)$: $\\Delta n_{\\text{gas}} = 0 - 2 = -2 < 0 \\implies \\Delta S < 0$, hanya spontan pada suhu rendah.\n- iii. $2\\mathrm{H_2S}(g) + \\mathrm{SO_2}(g) \\rightarrow 3\\mathrm{S}(s) + 2\\mathrm{H_2O}(l)$: $\\Delta n_{\\text{gas}} = 0 - 3 = -3 < 0 \\implies \\Delta S < 0$, hanya spontan pada suhu rendah.\nJadi hanya reaksi i yang spontan pada temperatur berapa pun.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Notasi sel standar (elektrode $\\mathrm{Pt}$) untuk reaksi berikut adalah ....\n$$2\\mathrm{Mn^{3+}}(aq) + 2\\mathrm{I^-}(aq) \\rightarrow 2\\mathrm{Mn^{2+}}(aq) + \\mathrm{I_2}(s)$$\n\nA. $\\mathrm{Pt}(s) \\mid \\mathrm{Mn^{3+}}(aq), \\mathrm{Mn^{2+}}(aq) \\parallel \\mathrm{I^-}(aq) \\mid \\mathrm{I_2}(s) \\mid \\mathrm{Pt}(s)$\nB. $\\mathrm{Pt}(s) \\mid \\mathrm{I^-}(aq) \\mid \\mathrm{I_2}(s) \\parallel \\mathrm{Mn^{3+}}(aq), \\mathrm{Mn^{2+}}(aq) \\mid \\mathrm{Pt}(s)$\nC. $\\mathrm{Mn^{3+}}(aq) \\mid \\mathrm{Pt}(s), \\mathrm{Mn^{2+}}(aq) \\parallel \\mathrm{I^-}(aq) \\mid \\mathrm{I_2}(s) \\mid \\mathrm{Pt}(s)$\nD. $\\mathrm{Pt}(s) \\mid \\mathrm{Mn^{3+}}(aq), \\mathrm{I^-}(aq) \\parallel \\mathrm{Mn^{2+}}(aq) \\mid \\mathrm{I_2}(s) \\mid \\mathrm{Pt}(s)$\nE. $\\mathrm{Mn^{2+}}(aq) \\mid \\mathrm{Pt}(s), \\mathrm{Mn^{3+}}(aq) \\parallel \\mathrm{I^-}(aq) \\mid \\mathrm{I_2}(s) \\mid \\mathrm{Pt}(s)$',
          answer:
            'B. $\\mathrm{Pt}(s) \\mid \\mathrm{I^-}(aq) \\mid \\mathrm{I_2}(s) \\parallel \\mathrm{Mn^{3+}}(aq), \\mathrm{Mn^{2+}}(aq) \\mid \\mathrm{Pt}(s)$',
          principle:
            'Konvensi notasi sel Galvani menempatkan setengah sel oksidasi (anoda) di sebelah kiri jembatan garam ($\\parallel$) dan setengah sel reduksi (katoda) di sebelah kanan, dengan elektrode inert $\\mathrm{Pt}(s)$ di ujung paling luar.',
          solution:
            'Tentukan setengah reaksi oksidasi dan reduksi dari $2\\mathrm{Mn^{3+}}(aq) + 2\\mathrm{I^-}(aq) \\rightarrow 2\\mathrm{Mn^{2+}}(aq) + \\mathrm{I_2}(s)$:\n- Anoda (oksidasi): $2\\mathrm{I^-}(aq) \\rightarrow \\mathrm{I_2}(s) + 2e^-$, ditulis $\\mathrm{Pt}(s) \\mid \\mathrm{I^-}(aq) \\mid \\mathrm{I_2}(s)$ karena antara larutan dan padatan terdapat batas fasa ($\\mid$).\n- Katoda (reduksi): $\\mathrm{Mn^{3+}}(aq) + e^- \\rightarrow \\mathrm{Mn^{2+}}(aq)$, ditulis $\\mathrm{Mn^{3+}}(aq), \\mathrm{Mn^{2+}}(aq) \\mid \\mathrm{Pt}(s)$ dengan koma ($,$) memisahkan spesi dalam fasa larutan yang sama.\nMenggabungkan anoda di kiri dan katoda di kanan jembatan garam menghasilkan:\n$$\\mathrm{Pt}(s) \\mid \\mathrm{I^-}(aq) \\mid \\mathrm{I_2}(s) \\parallel \\mathrm{Mn^{3+}}(aq), \\mathrm{Mn^{2+}}(aq) \\mid \\mathrm{Pt}(s).$$',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Spesi kimia berikut yang cocok untuk pengisi jembatan garam pada sistem sel Galvani adalah ....\n\nA. $\\mathrm{AgCl}$\nB. $\\mathrm{C_{12}H_{22}O_{11}}$ (sukrosa)\nC. $\\mathrm{NaCl}$\nD. $\\mathrm{C_6H_6}$\nE. $\\mathrm{PbCl_2}$',
          answer: 'C. $\\mathrm{NaCl}$',
          principle:
            'Jembatan garam harus diisi oleh elektrolit kuat yang mudah larut dalam air agar dapat menghantarkan ion untuk menjaga kenetralan listrik di kedua setengah sel.',
          solution:
            'Evaluasi kelarutan dan sifat elektrolit masing-masing spesi:\n- A. $\\mathrm{AgCl}$: garam yang sangat sukar larut dalam air ($K_{sp} \\approx 1{,}8 \\times 10^{-10}$), sehingga tidak menyediakan konsentrasi ion bebas yang memadai.\n- B. $\\mathrm{C_{12}H_{22}O_{11}}$ (sukrosa): zat non-elektrolit yang tidak terdisosiasi menjadi ion.\n- C. $\\mathrm{NaCl}$: garam elektrolit kuat yang sangat mudah larut dalam air, terionisasi sempurna menjadi $\\mathrm{Na^+}$ dan $\\mathrm{Cl^-}$ untuk menyeimbangkan muatan.\n- D. $\\mathrm{C_6H_6}$ (benzena): senyawa organik nonpolar non-elektrolit dan tidak larut dalam air.\n- E. $\\mathrm{PbCl_2}$: garam yang sukar larut dalam air dingin.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Potensial sel standar untuk reaksi $\\mathrm{Cu^{2+}}(aq) + \\mathrm{Cd}(s) \\rightarrow \\mathrm{Cu}(s) + \\mathrm{Cd^{2+}}(aq)$ adalah ....\nDiketahui $E^\\circ\\,\\mathrm{Cu^{2+}}|\\mathrm{Cu} = +0{,}34\\text{ V}$ dan $E^\\circ\\,\\mathrm{Cd^{2+}}|\\mathrm{Cd} = -0{,}40\\text{ V}$.\n\nA. $+0{,}74\\text{ V}$\nB. $-0{,}74\\text{ V}$\nC. $+0{,}06\\text{ V}$\nD. $-0{,}06\\text{ V}$\nE. $+0{,}20\\text{ V}$',
          answer: 'A. $+0{,}74\\text{ V}$',
          principle:
            'Potensial sel standar dihitung dari potensial reduksi standar katoda dan anoda melalui $E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}}$.',
          solution:
            'Pada reaksi $\\mathrm{Cu^{2+}}(aq) + \\mathrm{Cd}(s) \\rightarrow \\mathrm{Cu}(s) + \\mathrm{Cd^{2+}}(aq)$:\n- Katoda (reduksi): $\\mathrm{Cu^{2+}}(aq) + 2e^- \\rightarrow \\mathrm{Cu}(s)$, $E^\\circ_{\\text{katoda}} = +0{,}34\\text{ V}$.\n- Anoda (oksidasi): $\\mathrm{Cd}(s) \\rightarrow \\mathrm{Cd^{2+}}(aq) + 2e^-$, dengan $E^\\circ_{\\text{red}}(\\mathrm{Cd^{2+}}|\\mathrm{Cd}) = -0{,}40\\text{ V}$.\nMaka potensial sel standar adalah:\n$$E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = (+0{,}34) - (-0{,}40) = +0{,}74\\text{ V}.$$',
          rubric: OK
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Massa logam barium yang dapat dihasilkan dari elektrolisis lelehan $\\mathrm{BaCl_2}$ jika diberikan arus $0{,}50\\text{ A}$ selama $30\\text{ menit}$ adalah ....\n\nA. $0{,}32\\text{ g}$\nB. $1{,}28\\text{ g}$\nC. $0{,}64\\text{ g}$\nD. $0{,}97\\text{ g}$\nE. $1{,}94\\text{ g}$',
          answer: 'C. $0{,}64\\text{ g}$',
          principle:
            'Berdasarkan hukum Faraday I, massa zat yang diendapkan pada elektroda adalah $m = \\frac{I \\cdot t \\cdot A_r}{n_e \\cdot F}$, dengan $F = 96485\\text{ C/mol}$.',
          solution:
            'Pada elektrolisis lelehan $\\mathrm{BaCl_2}$, reduksi ion barium di katoda berlangsung menurut:\n$$\\mathrm{Ba^{2+}}(l) + 2e^- \\rightarrow \\mathrm{Ba}(l),$$\nsehingga jumlah elektron yang terlibat adalah $n_e = 2$.\nKonversikan waktu ke detik: $t = 30\\text{ menit} \\times 60\\text{ s/menit} = 1800\\text{ s}$.\nMuatan listrik total:\n$$Q = I \\cdot t = 0{,}50\\text{ A} \\times 1800\\text{ s} = 900\\text{ C}.$$\nDengan massa atom relatif $A_r(\\mathrm{Ba}) = 137{,}33\\text{ g/mol}$, massa logam barium yang dihasilkan adalah:\n$$m_{\\mathrm{Ba}} = \\frac{Q}{n_e F} \\cdot A_r(\\mathrm{Ba}) = \\frac{900}{2 \\times 96485} \\times 137{,}33 \\approx 0{,}6405\\text{ g} \\approx 0{,}64\\text{ g}.$$',
          rubric: OK
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Metode karakterisasi yang tidak menggunakan gelombang elektromagnetik adalah ....\n\nA. Spektrometri massa\nB. Spektroskopi IR\nC. Spektroskopi UV-Vis\nD. Spektroskopi NMR\nE. Spektroskopi Raman',
          answer: 'A. Spektrometri massa',
          principle:
            'Spektroskopi memanfaatkan interaksi materi dengan radiasi elektromagnetik (serapan, emisi, atau hamburan), sedangkan spektrometri massa memisahkan ion bermuatan berdasarkan rasio massa terhadap muatan ($m/z$) dalam medan listrik dan magnet.',
          solution:
            'Tinjau prinsip kerja masing-masing teknik karakterisasi:\n- A. Spektrometri massa: sampel diionisasi (misalnya dengan berkas elektron berenergi tinggi) lalu fragmen ion dipisahkan berdasarkan nilai $m/z$ menggunakan medan listrik atau magnet, tanpa menggunakan gelombang elektromagnetik.\n- B. Spektroskopi IR: menggunakan radiasi inframerah untuk mengeksitasi vibrasi ikatan.\n- C. Spektroskopi UV-Vis: menggunakan radiasi ultraviolet dan tampak untuk transisi elektronik.\n- D. Spektroskopi NMR: menggunakan gelombang radio untuk transisi spin inti di dalam medan magnet.\n- E. Spektroskopi Raman: menggunakan hamburan inelastik cahaya monokromatik (laser tampak/NIR).',
          rubric: OK
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Jumlah sinyal hidrogen dan karbon pada spektrum NMR senyawa benzaldehida berturut-turut adalah ....\n\nA. $7$ dan $7$\nB. $6$ dan $7$\nC. $5$ dan $6$\nD. $4$ dan $5$\nE. $4$ dan $6$',
          answer: 'D. $4$ dan $5$',
          principle:
            'Jumlah sinyal pada spektrum $^1\\mathrm{H}$ NMR dan $^{13}\\mathrm{C}$ NMR sama dengan banyaknya lingkungan kimiawi yang tidak ekuivalen berdasarkan simetri molekul.',
          solution:
            'Benzaldehida ($\\mathrm{C_6H_5-CHO}$) memiliki bidang simetri yang membagi cincin benzena melewati atom karbon ipso ($\\mathrm{C1}$, pengikat gugus $\\mathrm{-CHO}$) dan karbon para ($\\mathrm{C4}$), sehingga posisi orto ($\\mathrm{C2/C6}$) ekuivalen dan posisi meta ($\\mathrm{C3/C5}$) juga ekuivalen.\n- Lingkungan proton ($^1\\mathrm{H}$ NMR): $1$ sinyal proton aldehida ($\\mathrm{-CHO}$), $1$ sinyal proton orto ($2\\mathrm{H}$), $1$ sinyal proton meta ($2\\mathrm{H}$), dan $1$ sinyal proton para ($1\\mathrm{H}$), total $4$ sinyal.\n- Lingkungan karbon ($^{13}\\mathrm{C}$ NMR): $1$ sinyal karbon karbonil ($\\mathrm{-CHO}$), $1$ sinyal $\\mathrm{C1}$ (ipso), $1$ sinyal $\\mathrm{C2/C6}$ (orto), $1$ sinyal $\\mathrm{C3/C5}$ (meta), dan $1$ sinyal $\\mathrm{C4}$ (para), total $5$ sinyal.\nJadi jumlah sinyal hidrogen dan karbon berturut-turut adalah $4$ dan $5$.',
          rubric: OK
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Berikut ini merupakan polimer alam, kecuali ....\n\nA. katun\nB. sutra\nC. wol\nD. nilon\nE. lateks',
          answer: 'D. nilon',
          principle:
            'Polimer alam disintesis oleh organisme hidup (seperti selulosa, protein, dan poliisoprena alam), sedangkan nilon merupakan poliamida sintetik buatan industri.',
          solution:
            'Identifikasi asal masing-masing polimer:\n- Katun: polimer alam berbasis selulosa (polisakarida dari tumbuhan kapas).\n- Sutra: polimer alam berbasis protein fibroin (dihasilkan ulat sutra).\n- Wol: polimer alam berbasis protein keratin (dari bulu domba).\n- Lateks (karet alam): polimer alam cis-$1{,}4$-poliisoprena dari getah pohon karet.\n- Nilon: polimer sintetik golongan poliamida yang dibuat melalui polimerisasi kondensasi di laboratorium/industri (misalnya nilon-$6{,}6$ dari asam adipat dan heksametilendiamina).',
          rubric: OK
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Kristal emas ($\\mathrm{Au}$) dan kristal perak ($\\mathrm{Ag}$) memiliki tipe sel satuan yang sama, yaitu kubus berpusat muka. Berdasarkan informasi tersebut, pernyataan yang benar adalah ....\ni. Massa jenis kristal $\\mathrm{Au}$ sama dengan kristal $\\mathrm{Ag}$\nii. Persen volume terisi dalam kristal $\\mathrm{Au}$ sama dengan kristal $\\mathrm{Ag}$\niii. Panjang rusuk sel satuan kristal $\\mathrm{Au}$ sama dengan kristal $\\mathrm{Ag}$\niv. Bilangan koordinasi atom penyusun kristal $\\mathrm{Au}$ sama dengan kristal $\\mathrm{Ag}$\n\nA. i, ii, dan iii\nB. iv saja\nC. i dan iii\nD. ii dan iv\nE. semua benar',
          answer: 'D. ii dan iv',
          principle:
            'Pada kisi kristal kubus berpusat muka (FCC) dengan atom-atom identik berupa bola pejal, faktor pengepakan atom ($\\approx 74{,}05\\%$) dan bilangan koordinasi ($12$) hanya bergantung pada geometri kisi, bukan pada jenis unsurnya.',
          solution:
            'Analisis setiap pernyataan untuk kristal logam FCC $\\mathrm{Au}$ dan $\\mathrm{Ag}$:\n- i. Salah: massa jenis $\\rho = \\frac{Z \\cdot A_r}{N_A \\cdot a^3}$ bergantung pada massa atom relatif ($A_r\\text{ Au} \\approx 197$ jauh lebih besar daripada $A_r\\text{ Ag} \\approx 108$), sehingga $\\rho_{\\mathrm{Au}} \\neq \\rho_{\\mathrm{Ag}}$.\n- ii. Benar: efisiensi pengepakan (persen volume terisi) sel satuan FCC adalah $\\frac{4 \\times \\frac{4}{3}\\pi r^3}{(2\\sqrt{2}\\,r)^3} = \\frac{\\pi\\sqrt{2}}{6} \\approx 74{,}05\\%$, tidak bergantung pada jari-jari atom $r$.\n- iii. Salah: panjang rusuk $a = 2\\sqrt{2}\\,r$ ditentukan oleh jari-jari atom masing-masing unsur yang berbeda.\n- iv. Benar: setiap atom pada struktur FCC dikelilingi oleh $12$ atom tetangga terdekat, sehingga bilangan koordinasi keduanya sama-sama $12$.\nJadi pernyataan yang benar adalah ii dan iv.',
          rubric: OK
        }
      ]
    }
  ]
};
