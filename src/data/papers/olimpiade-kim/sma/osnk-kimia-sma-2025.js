/**
 * Paket Soal Terstruktur: OSN-K Kimia SMA 2025 (30 soal pilihan ganda terverifikasi)
 * Sumber: scraped_raw/osnk-kimia-sma-2025.md (arsip pembahasan OSN-K Kimia SMA 2025, 51 item: 50 soal unik + 1 duplikat).
 * Dimuat 30 soal teks-lengkap terverifikasi (Ksp-1, Ksp-2, Ksp-4, Ksp-5; Spektroskopi-2, Spektroskopi-4, Spektroskopi-5; Organik-4; Redoks-1, Redoks-2, Redoks-4; Termokimia-1 s.d. Termokimia-5; Laju-4; Asam-Basa-1, Asam-Basa-4; Koligatif-1 s.d. Koligatif-4; Gas-1 s.d. Gas-3; Kesetimbangan-1, Kesetimbangan-2; Orbital Molekul-1; Stoikiometri-1).
 * Dilewati 21 item: 13 soal unik bergantung gambar/grafik/spektrum/struktur/tabel gambar (Ksp-6, Ksp-7, Spektroskopi-1, Organik-1, Organik-2, Organik-3, Redoks-3, Termokimia-6, Laju-1, Laju-3, Struktur Atom-1, Koordinasi-1, Lewis-1), 1 item duplikat bergambar (Redoks-5 = Ksp-6), serta 7 soal teks-lengkap dengan data/redaksi inkonsisten, salah cetak satuan OCR, atau opsi ambigu (Ksp-3, Spektroskopi-3, Spektroskopi-6, Laju-2, Asam-Basa-2, Asam-Basa-3, Kristal-1).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-kim-sma-2025',
  slug: 'osnk-kimia-sma-2025',
  subject: 'olimpiade-kim',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'OSN-K Kimia SMA 2025',
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
    'kimia12-bab4-senyawa-karbon-dan-makromolekul'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Kimia SMA 2025',
  totalMarks: 30,
  instructions:
    'Kerjakan seluruh 30 soal pilihan ganda berikut (masing-masing bernilai 1 poin). Dari 51 item arsip OSN-K Kimia SMA 2025 (50 soal unik dan 1 duplikat), dimuat 30 soal pilihan ganda teks-lengkap yang terverifikasi lengkap (Ksp-1, Ksp-2, Ksp-4, Ksp-5; Spektroskopi-2, Spektroskopi-4, Spektroskopi-5; Organik-4; Redoks-1, Redoks-2, Redoks-4; Termokimia-1 s.d. Termokimia-5; Laju-4; Asam-Basa-1, Asam-Basa-4; Koligatif-1 s.d. Koligatif-4; Gas-1 s.d. Gas-3; Kesetimbangan-1, Kesetimbangan-2; Orbital Molekul-1; Stoikiometri-1) dan dilewati 21 item: 13 soal unik yang bergantung pada gambar/grafik/spektrum/struktur (Ksp-6, Ksp-7, Spektroskopi-1, Organik-1, Organik-2, Organik-3, Redoks-3, Termokimia-6, Laju-1, Laju-3, Struktur Atom-1, Koordinasi-1, Lewis-1), 1 item duplikat bergambar (Redoks-5), serta 7 soal yang datanya inkonsisten, salah cetak satuan OCR, atau opsinya ambigu pada naskah arsip (Ksp-3, Spektroskopi-3, Spektroskopi-6, Laju-2, Asam-Basa-2, Asam-Basa-3, Kristal-1).',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-kimia-sma-2025.md',
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
            'Sebanyak $1\\text{ L}$ larutan kalsium oksalat jenuh pada $50\\,^\\circ\\mathrm{C}$ didinginkan hingga temperatur $25\\,^\\circ\\mathrm{C}$. Massa kalsium oksalat yang akan mengendap adalah ....\n($K_{\\text{sp}}\\ \\mathrm{CaC_2O_4} = 4{,}0 \\times 10^{-9}$ pada $50\\,^\\circ\\mathrm{C}$ dan $2{,}3 \\times 10^{-9}$ pada $25\\,^\\circ\\mathrm{C}$)\n\nA. $1{,}53\\text{ mg}$\nB. $1{,}96\\text{ mg}$\nC. $2{,}18\\text{ mg}$\nD. $3{,}06\\text{ mg}$\nE. $3{,}92\\text{ mg}$',
          answer: 'B. $1{,}96\\text{ mg}$',
          principle:
            'Kelarutan molar garam $1:1$ memenuhi $s = \\sqrt{K_{\\text{sp}}}$; massa zat yang mengendap saat pendinginan adalah $m_{\\text{endap}} = V(s_{\\text{awal}} - s_{\\text{akhir}})M_r$.',
          solution:
            'Kesetimbangan kelarutan kalsium oksalat dalam air adalah:\n$$\\mathrm{CaC_2O_4}(s) \\rightleftharpoons \\mathrm{Ca^{2+}}(aq) + \\mathrm{C_2O_4^{2-}}(aq) \\implies K_{\\text{sp}} = s^2 \\implies s = \\sqrt{K_{\\text{sp}}}.$$\nSecara simbolik, selisih kelarutan molar antara $T_1 = 50\\,^\\circ\\mathrm{C}$ dan $T_2 = 25\\,^\\circ\\mathrm{C}$ menentukan massa endapan dalam volume $V$:\n$$m_{\\text{endap}} = V\\left(\\sqrt{K_{\\text{sp},1}} - \\sqrt{K_{\\text{sp},2}}\\right)M_r.$$\nDengan $M_r(\\mathrm{CaC_2O_4}) = 40{,}08 + 2(12{,}01) + 4(16{,}00) = 128{,}10\\text{ g/mol}$ dan $V = 1\\text{ L}$:\n$$s_{50} = \\sqrt{4{,}0 \\times 10^{-9}} = \\sqrt{40 \\times 10^{-10}} \\approx 6{,}3246 \\times 10^{-5}\\text{ mol/L},$$\n$$s_{25} = \\sqrt{2{,}3 \\times 10^{-9}} = \\sqrt{23 \\times 10^{-10}} \\approx 4{,}7958 \\times 10^{-5}\\text{ mol/L}.$$\nMaka:\n$$m_{\\text{endap}} = 1\\text{ L} \\times (6{,}3246 - 4{,}7958) \\times 10^{-5}\\text{ mol/L} \\times 128{,}10\\text{ g/mol} = 1{,}958 \\times 10^{-3}\\text{ g} \\approx 1{,}96\\text{ mg}.$$',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Rasio kelarutan kalsium fluorida di dalam $\\mathrm{Ca(NO_3)_2}\\ 0{,}1\\text{ M}$ terhadap kelarutannya dalam $\\mathrm{NaF}\\ 0{,}1\\text{ M}$ adalah .... ($K_{\\text{sp}}\\ \\mathrm{CaF_2} = 5{,}3 \\times 10^{-9}$)\n\nA. $1:1$\nB. $100:1$\nC. $217:1$\nD. $868:1$\nE. $2076:1$',
          answer: 'C. $217:1$',
          principle:
            'Efek ion senama menekan kelarutan melalui tetapan hasil kali kelarutan $K_{\\text{sp}} = [\\mathrm{Ca^{2+}}][\\mathrm{F^-}]^2$.',
          solution:
            'Reaksi pelarutan kalsium fluorida:\n$$\\mathrm{CaF_2}(s) \\rightleftharpoons \\mathrm{Ca^{2+}}(aq) + 2\\mathrm{F^-}(aq), \\qquad K_{\\text{sp}} = [\\mathrm{Ca^{2+}}][\\mathrm{F^-}]^2.$$\n1. Dalam $\\mathrm{Ca(NO_3)_2}$ dengan konsentrasi $C_1 = 0{,}1\\text{ M}$, $[\\mathrm{Ca^{2+}}] = C_1 + s_1 \\approx C_1$ (karena $s_1 \\ll C_1$) dan $[\\mathrm{F^-}] = 2s_1$:\n$$K_{\\text{sp}} \\approx C_1(2s_1)^2 = 4C_1 s_1^2 \\implies s_1 = \\sqrt{\\frac{K_{\\text{sp}}}{4C_1}}.$$\n2. Dalam $\\mathrm{NaF}$ dengan konsentrasi $C_2 = 0{,}1\\text{ M}$, $[\\mathrm{Ca^{2+}}] = s_2$ dan $[\\mathrm{F^-}] = C_2 + 2s_2 \\approx C_2$ (karena $s_2 \\ll C_2$):\n$$K_{\\text{sp}} \\approx s_2 C_2^2 \\implies s_2 = \\frac{K_{\\text{sp}}}{C_2^2}.$$\nRasio kelarutan secara simbolik adalah:\n$$\\frac{s_1}{s_2} = \\frac{C_2^2}{2\\sqrt{C_1 K_{\\text{sp}}}}.$$\nSubstitusikan $C_1 = C_2 = 0{,}1\\text{ M}$ dan $K_{\\text{sp}} = 5{,}3 \\times 10^{-9}$:\n$$\\frac{s_1}{s_2} = \\frac{0{,}01}{2\\sqrt{0{,}1 \\times 5{,}3 \\times 10^{-9}}} = \\frac{10^{-2}}{2\\sqrt{5{,}3 \\times 10^{-10}}} = \\frac{10^3}{2\\sqrt{5{,}3}} \\approx 217{,}2 \\approx 217:1.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Magnesium fosfat memiliki kelarutan dalam air sebesar $1{,}03\\text{ mg/L}$ pada $298\\text{ K}$. Konstanta hasil kali kelarutan ($K_{\\text{sp}}$) magnesium fosfat adalah ....\n\nA. $1{,}54 \\times 10^{-11}$\nB. $2{,}43 \\times 10^{-16}$\nC. $6{,}44 \\times 10^{-21}$\nD. $1{,}01 \\times 10^{-25}$\nE. $4{,}57 \\times 10^{-28}$',
          answer: 'D. $1{,}01 \\times 10^{-25}$',
          principle:
            'Untuk garam $\\mathrm{A_3B_2}$ yang terdisosiasi menjadi $3\\mathrm{A^{2+}} + 2\\mathrm{B^{3-}}$, hubungan antara kelarutan molar $s$ dan $K_{\\text{sp}}$ adalah $K_{\\text{sp}} = 108s^5$.',
          solution:
            'Persamaan kesetimbangan kelarutan magnesium fosfat:\n$$\\mathrm{Mg_3(PO_4)_2}(s) \\rightleftharpoons 3\\mathrm{Mg^{2+}}(aq) + 2\\mathrm{PO_4^{3-}}(aq).$$\nJika kelarutan molar adalah $s = \\dfrac{m/V}{M_r}$, maka $[\\mathrm{Mg^{2+}}] = 3s$ dan $[\\mathrm{PO_4^{3-}}] = 2s$, sehingga:\n$$K_{\\text{sp}} = (3s)^3(2s)^2 = 27s^3 \\cdot 4s^2 = 108s^5 = 108\\left(\\frac{m/V}{M_r}\\right)^5.$$\nDengan $m/V = 1{,}03\\text{ mg/L} = 1{,}03 \\times 10^{-3}\\text{ g/L}$ dan $M_r(\\mathrm{Mg_3(PO_4)_2}) = 3(24) + 2(31) + 8(16) = 262\\text{ g/mol}$:\n$$s = \\frac{1{,}03 \\times 10^{-3}}{262} \\approx 3{,}931 \\times 10^{-6}\\text{ mol/L},$$\n$$K_{\\text{sp}} = 108 \\times (3{,}931 \\times 10^{-6})^5 \\approx 1{,}01 \\times 10^{-25}.$$\n(Jika memakai $M_r$ IUPAC $262{,}86\\text{ g/mol}$, diperoleh $K_{\\text{sp}} \\approx 9{,}98 \\times 10^{-26}$, tetap paling mendekati $1{,}01 \\times 10^{-25}$.)',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Suatu larutan diketahui mengandung $\\mathrm{Br^-}$ dan $\\mathrm{Cl^-}$ dengan konsentrasi masing-masing $0{,}01\\text{ M}$. Ke dalam larutan tersebut dilakukan penambahan larutan $\\mathrm{AgNO_3}$ secara bertahap. Persentase $\\mathrm{Br^-}$ yang mengendap saat $\\mathrm{Cl^-}$ mulai ikut mengendap adalah .... ($K_{\\text{sp}}\\ \\mathrm{AgBr} = 3{,}3 \\times 10^{-13}$, $K_{\\text{sp}}\\ \\mathrm{AgCl} = 1{,}8 \\times 10^{-10}$)\n\nA. $81{,}70\\%$\nB. $96{,}70\\%$\nC. $98{,}17\\%$\nD. $99{,}82\\%$\nE. $99{,}98\\%$',
          answer: 'D. $99{,}82\\%$',
          principle:
            'Pengendapan bertingkat terjadi mulai dari garam dengan $K_{\\text{sp}}$ lebih kecil; saat garam kedua mulai jenuh, $[\\mathrm{Ag^+}]$ mengunci konsentrasi anion pertama yang tersisa.',
          solution:
            'Karena $K_{\\text{sp}}(\\mathrm{AgBr}) < K_{\\text{sp}}(\\mathrm{AgCl})$ dan $[\\mathrm{Br^-}]_0 = [\\mathrm{Cl^-}]_0 = C_0$, maka $\\mathrm{AgBr}$ mengendap lebih dahulu. Tepat saat $\\mathrm{AgCl}$ mulai mengendap:\n$$[\\mathrm{Ag^+}] = \\frac{K_{\\text{sp}}(\\mathrm{AgCl})}{[\\mathrm{Cl^-}]_0}.$$\nPada konsentrasi $[\\mathrm{Ag^+}]$ tersebut, sisa $[\\mathrm{Br^-}]$ yang masih larut memenuhi:\n$$[\\mathrm{Br^-}]_{\\text{sisa}} = \\frac{K_{\\text{sp}}(\\mathrm{AgBr})}{[\\mathrm{Ag^+}]} = \\frac{K_{\\text{sp}}(\\mathrm{AgBr})}{K_{\\text{sp}}(\\mathrm{AgCl})} [\\mathrm{Cl^-}]_0.$$\nPersentase $\\mathrm{Br^-}$ yang sudah mengendap adalah:\n$$\\%\\,\\text{mengendap} = \\left(1 - \\frac{[\\mathrm{Br^-}]_{\\text{sisa}}}{[\\mathrm{Br^-}]_0}\\right) \\times 100\\% = \\left(1 - \\frac{K_{\\text{sp}}(\\mathrm{AgBr})}{K_{\\text{sp}}(\\mathrm{AgCl})}\\right) \\times 100\\%.$$\nSubstitusikan nilai $K_{\\text{sp}}$:\n$$\\%\\,\\text{mengendap} = \\left(1 - \\frac{3{,}3 \\times 10^{-13}}{1{,}8 \\times 10^{-10}}\\right) \\times 100\\% = \\left(1 - 1{,}833 \\times 10^{-3}\\right) \\times 100\\% = 99{,}817\\% \\approx 99{,}82\\%.$$',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Dalam spektrum $^1\\mathrm{H}$ NMR, sebuah sinyal proton muncul sebagai triplet dengan intensitas puncak yang sama ($1:2:1$). Apa yang ditunjukkan oleh pola pemisahan ini tentang lingkungan proton tersebut?\n\nA. Proton tersebut berdekatan dengan satu proton lain\nB. Proton tersebut berdekatan dengan dua proton setara (ekuivalen)\nC. Proton tersebut tidak berpasangan dengan proton tetangga mana pun\nD. Proton tersebut berdekatan dengan tiga proton yang setara (ekuivalen)\nE. Proton tersebut berdekatan dengan empat proton yang setara (ekuivalen)',
          answer: 'B. Proton tersebut berdekatan dengan dua proton setara (ekuivalen)',
          principle:
            'Aturan pemisahan $n+1$ pada spektroskopi $^1\\mathrm{H}$ NMR menyatakan bahwa $n$ proton tetangga yang ekuivalen menghasilkan $n+1$ puncak dengan rasio intensitas koefisien binomial (segitiga Pascal).',
          solution:
            'Untuk kopling spin-spin orde pertama dengan $n$ proton tetangga yang setara secara kimia dan magnetik, sinyal proton terpecah menjadi multiplet berjumlah $n + 1$ garis dengan perbandingan intensitas mengikuti baris ke-$n$ segitiga Pascal:\n- $n = 0 \\implies 1$ puncak (singlet).\n- $n = 1 \\implies 2$ puncak (doublet, $1:1$).\n- $n = 2 \\implies 3$ puncak (triplet, $1:2:1$).\n- $n = 3 \\implies 4$ puncak (quartet, $1:3:3:1$).\n- $n = 4 \\implies 5$ puncak (quintet, $1:4:6:4:1$).\nKarena sinyal teramati sebagai triplet ($1:2:1$), maka $n + 1 = 3 \\implies n = 2$, artinya proton tersebut berdekatan dengan dua proton tetangga yang setara (ekuivalen).',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Panjang gelombang foton yang dipancarkan pada transisi elektronik dari keadaan tereksitasi ketiga ke keadaan tereksitasi pertama pada ion $\\mathrm{He^+}$ adalah ....\n\nA. $25{,}6\\text{ nm}$\nB. $51{,}2\\text{ nm}$\nC. $102{,}4\\text{ nm}$\nD. $121{,}5\\text{ nm}$\nE. $486{,}0\\text{ nm}$',
          answer: 'D. $121{,}5\\text{ nm}$',
          principle:
            'Persamaan Rydberg untuk ion hidrogenik dengan nomor atom $Z$ pada transisi emisi $n_i \\to n_f$: $\\dfrac{1}{\\lambda} = R_{\\mathrm{H}} Z^2 \\left(\\dfrac{1}{n_f^2} - \\dfrac{1}{n_i^2}\\right)$.',
          solution:
            'Pada sistem hidrogenik ($\\mathrm{He^+}$, $Z = 2$), tingkat dasar adalah $n = 1$, keadaan tereksitasi pertama adalah $n_f = 2$, keadaan tereksitasi kedua adalah $n = 3$, dan keadaan tereksitasi ketiga adalah $n_i = 4$.\nRumus panjang gelombang foton emisi:\n$$\\lambda = \\frac{1}{R_{\\mathrm{H}} Z^2 \\left(\\dfrac{1}{n_f^2} - \\dfrac{1}{n_i^2}\\right)}.$$\nSubstitusikan $Z = 2$, $n_i = 4$, $n_f = 2$, dan $R_{\\mathrm{H}} = 1{,}097 \\times 10^7\\text{ m}^{-1}$:\n$$\\frac{1}{\\lambda} = 1{,}097 \\times 10^7\\text{ m}^{-1} \\times 2^2 \\left(\\frac{1}{2^2} - \\frac{1}{4^2}\\right) = 4{,}388 \\times 10^7 \\times \\frac{3}{16} = 8{,}2275 \\times 10^6\\text{ m}^{-1}.$$\nSehingga:\n$$\\lambda = \\frac{1}{8{,}2275 \\times 10^6\\text{ m}^{-1}} = 1{,}2154 \\times 10^{-7}\\text{ m} \\approx 121{,}5\\text{ nm}.$$',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Dalam spektrum massa dari suatu senyawa, teramati dua puncak ion molekul pada $m/z = 78$ dan $m/z = 80$, dengan rasio intensitas relatif sekitar $3:1$. Fitur struktur atau rumus molekul manakah yang paling mungkin untuk senyawa ini?\n\nA. Senyawa mengandung satu atom brom\nB. Senyawa mengandung dua atom brom\nC. Senyawa mengandung dua atom klor\nD. Senyawa mengandung satu atom klor\nE. Senyawa mengandung satu atom sulfur',
          answer: 'D. Senyawa mengandung satu atom klor',
          principle:
            'Pola isotop $M : (M+2) \\approx 3:1$ merupakan ciri khas satu atom klorin ($^{35}\\mathrm{Cl} \\approx 75{,}8\\%$ dan $^{37}\\mathrm{Cl} \\approx 24{,}2\\%$).',
          solution:
            'Selisih kedua puncak ion molekul adalah $80 - 78 = 2$, menunjukkan puncak $M$ dan $M+2$ dengan rasio intensitas $3:1$. Tinjau kelimpahan isotop alami masing-masing unsur:\n- Satu atom $\\mathrm{Cl}$ ($^{35}\\mathrm{Cl} : {^{37}\\mathrm{Cl}} \\approx 75\\% : 25\\% = 3:1$) menghasilkan pola $M : (M+2) \\approx 3:1$ (misalnya $\\mathrm{C_3H_7Cl}$ dengan $M = 78$ dan $M+2 = 80$).\n- Satu atom $\\mathrm{Br}$ ($^{79}\\mathrm{Br} : {^{81}\\mathrm{Br}} \\approx 50{,}7\\% : 49{,}3\\% \\approx 1:1$) menghasilkan pola $M : (M+2) \\approx 1:1$, bukan $3:1$.\n- Dua atom $\\mathrm{Br}$ menghasilkan tiga puncak $M : (M+2) : (M+4) \\approx 1:2:1$.\n- Dua atom $\\mathrm{Cl}$ menghasilkan tiga puncak $M : (M+2) : (M+4) \\approx 9:6:1$.\n- Satu atom $\\mathrm{S}$ ($^{34}\\mathrm{S} \\approx 4{,}2\\%$) menghasilkan $(M+2)$ sangat kecil ($\\approx 4{,}4\\%$ terhadap $M$).\nJadi, senyawa tersebut mengandung satu atom klor.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Jika $0{,}15\\text{ mol}$ $\\mathrm{HSCH_2CH_2OH}$ bereaksi secara berurutan pada suhu $25\\,^\\circ\\mathrm{C}$ dengan $0{,}30\\text{ mol}$ $\\mathrm{NaH}$, $0{,}15\\text{ mol}$ $\\mathrm{CH_3CH_2Br}$ dan $\\mathrm{H_2O}$, maka produk utama yang terbentuk adalah ....\n\nA. $\\mathrm{HSCH_2CH_2OCH_2CH_3}$\nB. $\\mathrm{CH_3CH_2SCH_2CH_2OCH_2CH_3}$\nC. $\\mathrm{CH_3CH_2SCH_2CH_2OH}$\nD. $\\mathrm{CH_2=CH_2}$\nE. $\\mathrm{CH_3CH_3}$',
          answer: 'C. $\\mathrm{CH_3CH_2SCH_2CH_2OH}$',
          principle:
            'Basa kuat $\\mathrm{NaH}$ ($2$ ekuivalen) mendeprotonasi gugus $-\\mathrm{SH}$ dan $-\\mathrm{OH}$ menjadi dianion; pada reaksi $\\mathrm{S_N2}$ dengan alkil bromida ($1$ ekuivalen), ion tiolat ($-\\mathrm{S^-}$) jauh lebih nukleofilik dan polarizabel daripada ion alkoksida ($-\\mathrm{O^-}$).',
          solution:
            'Tinjau urutan stoikiometri dan reaktivitas setiap tahap:\n1. Deprotonasi dengan $2$ ekuivalen $\\mathrm{NaH}$ ($0{,}30\\text{ mol}$ untuk $0{,}15\\text{ mol}$ substrat):\nGugus tiol ($\\mathrm{p}K_a \\approx 10$) terdeprotonasi lebih dulu, lalu sisa $\\mathrm{NaH}$ mendeprotonasi gugus alkohol ($\\mathrm{p}K_a \\approx 16$) membentuk garam dianion:\n$$\\mathrm{HSCH_2CH_2OH} + 2\\mathrm{NaH} \\rightarrow \\mathrm{NaSCH_2CH_2ONa} + 2\\mathrm{H_2}.$$\n2. Alkilasi $\\mathrm{S_N2}$ dengan $1$ ekuivalen $\\mathrm{CH_3CH_2Br}$ ($0{,}15\\text{ mol}$):\nMenurut konsep HSAB, atom sulfur pada $-\\mathrm{S^-}$ lebih besar dan lebih mudah terpolarisasi (nukleofil lunak) dibandingkan oksigen pada $-\\mathrm{O^-}$ (nukleofil keras), sehingga serangan nukleofilik pada karbon elektrofilik $\\mathrm{CH_3CH_2Br}$ berlangsung selektif pada atom S:\n$$\\mathrm{NaSCH_2CH_2ONa} + \\mathrm{CH_3CH_2Br} \\rightarrow \\mathrm{CH_3CH_2SCH_2CH_2ONa} + \\mathrm{NaBr}.$$\n3. Protonasi (work-up) dengan $\\mathrm{H_2O}$ mengembalikan gugus alkohol:\n$$\\mathrm{CH_3CH_2SCH_2CH_2ONa} + \\mathrm{H_2O} \\rightarrow \\mathrm{CH_3CH_2SCH_2CH_2OH} + \\mathrm{NaOH}.$$\nProduk utamanya adalah $2$-(etiltio)etanol ($\\mathrm{CH_3CH_2SCH_2CH_2OH}$).',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Sel elektrolisis terdiri dua elektroda tembaga yang dicelupkan dalam larutan tembaga(II) sulfat. Jika arus $0{,}35\\text{ A}$ dialirkan melalui sel tersebut selama $1300\\text{ detik}$, manakah di antara pernyataan berikut yang benar?\n\nA. Massa anode bertambah $0{,}15\\text{ g}$\nB. Massa anode bertambah $0{,}30\\text{ g}$\nC. Massa anode berkurang $0{,}15\\text{ g}$\nD. Massa anode berkurang $0{,}30\\text{ g}$\nE. Massa anode tetap',
          answer: 'C. Massa anode berkurang $0{,}15\\text{ g}$',
          principle:
            'Pada elektrolisis dengan elektroda aktif $\\mathrm{Cu}$, anode teroksidasi menjadi $\\mathrm{Cu^{2+}}$ (massanya berkurang) sesuai Hukum Faraday I: $m = \\dfrac{I \\cdot t \\cdot M_r}{n \\cdot F}$.',
          solution:
            'Pada sel elektrolisis larutan $\\mathrm{CuSO_4}$ dengan elektroda tembaga (elektroda aktif):\n- Anode (oksidasi): $\\mathrm{Cu}(s) \\rightarrow \\mathrm{Cu^{2+}}(aq) + 2e^-$ (anode larut sehingga massanya berkurang).\n- Katode (reduksi): $\\mathrm{Cu^{2+}}(aq) + 2e^- \\rightarrow \\mathrm{Cu}(s)$ (massa katode bertambah).\nBerdasarkan Hukum Faraday I dengan $n = 2$:\n$$m_{\\mathrm{Cu}} = \\frac{I \\cdot t \\cdot A_r(\\mathrm{Cu})}{n \\cdot F}.$$\nSubstitusikan $I = 0{,}35\\text{ A}$, $t = 1300\\text{ s}$, $A_r(\\mathrm{Cu}) = 63{,}55\\text{ g/mol}$, dan $F = 96485\\text{ C/mol}$:\n$$m_{\\mathrm{Cu}} = \\frac{0{,}35 \\times 1300 \\times 63{,}55}{2 \\times 96485} = \\frac{455 \\times 63{,}55}{192970} \\approx 0{,}1498\\text{ g} \\approx 0{,}15\\text{ g}.$$\nJadi, massa anode berkurang $0{,}15\\text{ g}$.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Potensial sel $\\mathrm{Ni}(s) \\mid \\mathrm{Ni^{2+}}(aq)\\ (1{,}00\\text{ M}) \\parallel \\mathrm{Ag^+}(aq)\\ (1{,}00\\text{ M}) \\mid \\mathrm{Ag}(s)$ pada $298\\text{ K}$ adalah $1{,}05\\text{ V}$. Ke dalam masing-masing sel ditambahkan natrium sianida dengan konsentrasi $\\mathrm{CN^-}$ $1{,}00\\text{ M}$. Jika diketahui $K_f\\ [\\mathrm{Ni(CN)_4}]^{2-} = 2{,}0 \\times 10^{31}$ dan $K_f\\ [\\mathrm{Ag(CN)_2}]^- = 9{,}8 \\times 10^{21}$, potensial sel yang baru adalah ....\n\nA. $0{,}68\\text{ V}$\nB. $0{,}78\\text{ V}$\nC. $1{,}33\\text{ V}$\nD. $1{,}43\\text{ V}$\nE. $1{,}57\\text{ V}$',
          answer: 'A. $0{,}68\\text{ V}$',
          principle:
            'Pembentukan kompleks menurunkan konsentrasi ion logam bebas $[\\mathrm{Ni^{2+}}]$ dan $[\\mathrm{Ag^+}]$; potensial sel baru dihitung dengan persamaan Nernst $E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\dfrac{0{,}0592}{n}\\log Q$ pada $298\\text{ K}$.',
          solution:
            'Reaksi sel keseluruhan ($n = 2$):\n$$\\mathrm{Ni}(s) + 2\\mathrm{Ag^+}(aq) \\rightarrow \\mathrm{Ni^{2+}}(aq) + 2\\mathrm{Ag}(s), \\qquad E^\\circ_{\\text{sel}} = 1{,}05\\text{ V}.$$\nDengan penambahan berlebih $\\mathrm{NaCN}$ hingga konsentrasi kesetimbangan $[\\mathrm{CN^-}] = 1{,}00\\text{ M}$ pada tiap setengah sel, karena $K_f$ sangat besar, hampir seluruh ion logam membentuk kompleks ($[\\mathrm{Ni(CN)_4^{2-}}] \\approx 1{,}00\\text{ M}$ dan $[\\mathrm{Ag(CN)_2^-}] \\approx 1{,}00\\text{ M}$):\n$$[\\mathrm{Ni^{2+}}] = \\frac{[\\mathrm{Ni(CN)_4^{2-}}]}{K_{f,\\mathrm{Ni}}[\\mathrm{CN^-}]^4} = \\frac{1{,}00}{2{,}0 \\times 10^{31} \\times 1{,}00^4} = 5{,}0 \\times 10^{-32}\\text{ M},$$\n$$[\\mathrm{Ag^+}] = \\frac{[\\mathrm{Ag(CN)_2^-}]}{K_{f,\\mathrm{Ag}}[\\mathrm{CN^-}]^2} = \\frac{1{,}00}{9{,}8 \\times 10^{21} \\times 1{,}00^2} \\approx 1{,}0204 \\times 10^{-22}\\text{ M}.$$\nKuosien reaksi $Q$ dan potensial sel baru menurut persamaan Nernst:\n$$Q = \\frac{[\\mathrm{Ni^{2+}}]}{[\\mathrm{Ag^+}]^2} = \\frac{5{,}0 \\times 10^{-32}}{(1{,}0204 \\times 10^{-22})^2} \\approx 4{,}802 \\times 10^{12},$$\n$$E_{\\text{sel}} = E^\\circ_{\\text{sel}} - \\frac{0{,}0592}{2}\\log Q = 1{,}05 - 0{,}0296\\log(4{,}802 \\times 10^{12}) = 1{,}05 - 0{,}0296(12{,}681) \\approx 0{,}675\\text{ V} \\approx 0{,}68\\text{ V}.$$',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Elektrolisis $1{,}00\\text{ g}$ garam tembaga(II) membutuhkan arus $0{,}100\\text{ A}$ selama $123\\text{ menit}$ untuk mengendapkan seluruh logam tembaga. Rumus kimia garam tembaga tersebut adalah ....\n\nA. $\\mathrm{CuCl_2}$\nB. $\\mathrm{Cu(CH_3COO)_2}$\nC. $\\mathrm{Cu(NO_3)_2}$\nD. $\\mathrm{CuBr_2}$\nE. $\\mathrm{Cu(ClO_4)_2}$',
          answer: 'E. $\\mathrm{Cu(ClO_4)_2}$',
          principle:
            'Dari Hukum Faraday, mol garam tembaga(II) sama dengan mol $\\mathrm{Cu}$ yang mengendap: $n_{\\text{garam}} = n_{\\mathrm{Cu}} = \\dfrac{I \\cdot t}{2F}$, sehingga $M_r = \\dfrac{m_{\\text{garam}}}{n_{\\text{garam}}}$.',
          solution:
            'Setengah reaksi reduksi tembaga(II) memerlukan $n = 2$ mol elektron per mol $\\mathrm{Cu}$:\n$$\\mathrm{Cu^{2+}}(aq) + 2e^- \\rightarrow \\mathrm{Cu}(s).$$\nSecara simbolik, massa molar garam tembaga(II) adalah:\n$$M_r = \\frac{m_{\\text{garam}}}{n_{\\mathrm{Cu}}} = \\frac{2F \\cdot m_{\\text{garam}}}{I \\cdot t}.$$\nSubstitusikan $m_{\\text{garam}} = 1{,}00\\text{ g}$, $I = 0{,}100\\text{ A}$, $t = 123 \\times 60 = 7380\\text{ s}$, dan $F = 96500\\text{ C/mol}$:\n$$M_r = \\frac{2 \\times 96500 \\times 1{,}00}{0{,}100 \\times 7380} = \\frac{193000}{738} \\approx 261{,}5\\text{ g/mol}.$$\nBandingkan massa molar tiap pilihan:\n- $\\mathrm{CuCl_2}$: $134{,}45\\text{ g/mol}$\n- $\\mathrm{Cu(CH_3COO)_2}$: $181{,}63\\text{ g/mol}$\n- $\\mathrm{Cu(NO_3)_2}$: $187{,}56\\text{ g/mol}$\n- $\\mathrm{CuBr_2}$: $223{,}35\\text{ g/mol}$\n- $\\mathrm{Cu(ClO_4)_2}$: $63{,}55 + 2(35{,}45 + 64{,}00) = 262{,}45\\text{ g/mol}$\nNilai yang paling mendekati hasil perhitungan ($261{,}5\\text{ g/mol}$) adalah $\\mathrm{Cu(ClO_4)_2}$.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Es pada suhu $0\\,^\\circ\\mathrm{C}$ ditempatkan dalam cangkir styrofoam yang berisi $361\\text{ g}$ minuman ringan pada suhu $23\\,^\\circ\\mathrm{C}$. Panas jenis minuman tersebut hampir sama dengan panas jenis air. Sebagian es tetap ada setelah es dan minuman ringan mencapai suhu keseimbangan $0\\,^\\circ\\mathrm{C}$. Abaikan kapasitas panas cangkir. Jika diperlukan $334\\text{ J}$ untuk mencairkan $1\\text{ g}$ es pada $0\\,^\\circ\\mathrm{C}$ dan kalor jenis air $4{,}184\\text{ J}\\cdot\\mathrm{g}^{-1}\\cdot{^\\circ\\mathrm{C}}^{-1}$, maka massa es yang telah mencair adalah ....\n\nA. $84\\text{ g}$\nB. $94\\text{ g}$\nC. $104\\text{ g}$\nD. $114\\text{ g}$\nE. $124\\text{ g}$',
          answer: 'C. $104\\text{ g}$',
          principle:
            'Asas Black (kekekalan kalor): kalor yang dilepaskan minuman saat mendingin hingga $0\\,^\\circ\\mathrm{C}$ sama dengan kalor laten yang diserap untuk melebur sebagian es, $m_{\\text{min}}c\\Delta T = m_{\\text{es}}L_f$.',
          solution:
            'Karena masih tersisa es pada kesetimbangan termal, suhu akhir campuran adalah $0\\,^\\circ\\mathrm{C}$ dan seluruh kalor dari minuman digunakan untuk melebur es:\n$$q_{\\text{lepas}} = q_{\\text{serap}} \\implies m_{\\text{min}} c \\Delta T = m_{\\text{es}} L_f \\implies m_{\\text{es}} = \\frac{m_{\\text{min}} c \\Delta T}{L_f}.$$\nSubstitusikan $m_{\\text{min}} = 361\\text{ g}$, $c = 4{,}184\\text{ J}\\cdot\\mathrm{g}^{-1}\\cdot{^\\circ\\mathrm{C}}^{-1}$, $\\Delta T = 23 - 0 = 23\\,^\\circ\\mathrm{C}$, dan $L_f = 334\\text{ J/g}$:\n$$m_{\\text{es}} = \\frac{361 \\times 4{,}184 \\times 23}{334} = \\frac{34739{,}75}{334} \\approx 104{,}01\\text{ g} \\approx 104\\text{ g}.$$',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Jika suatu reaksi dilakukan pada $50\\,^\\circ\\mathrm{C}$, laju reaksi meningkat sebanyak $10\\times$ lipat dibandingkan pada $25\\,^\\circ\\mathrm{C}$. Energi pengaktifan reaksi tersebut adalah ....\n\nA. $+73{,}71\\text{ kJ}\\cdot\\mathrm{mol}^{-1}$\nB. $-73{,}71\\text{ kJ}\\cdot\\mathrm{mol}^{-1}$\nC. $+147{,}42\\text{ kJ}\\cdot\\mathrm{mol}^{-1}$\nD. $-147{,}42\\text{ kJ}\\cdot\\mathrm{mol}^{-1}$\nE. $+12{,}15\\text{ kJ}\\cdot\\mathrm{mol}^{-1}$',
          answer: 'A. $+73{,}71\\text{ kJ}\\cdot\\mathrm{mol}^{-1}$',
          principle:
            'Bentuk dua titik persamaan Arrhenius menghubungkan rasio tetapan laju pada dua suhu dengan energi pengaktifan: $\\ln\\left(\\dfrac{k_2}{k_1}\\right) = \\dfrac{E_a}{R}\\left(\\dfrac{1}{T_1} - \\dfrac{1}{T_2}\\right)$.',
          solution:
            'Pada konsentrasi pereaksi yang sama, perbandingan laju sama dengan perbandingan tetapan laju ($k_2/k_1 = 10$). Dari persamaan Arrhenius:\n$$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right) = \\frac{E_a}{R}\\cdot\\frac{T_2 - T_1}{T_1 T_2} \\implies E_a = \\frac{R T_1 T_2 \\ln(k_2/k_1)}{T_2 - T_1}.$$\nDengan $T_1 = 25 + 273 = 298\\text{ K}$, $T_2 = 50 + 273 = 323\\text{ K}$, $R = 8{,}314\\text{ J}\\cdot\\mathrm{mol}^{-1}\\cdot\\mathrm{K}^{-1}$, dan $\\ln 10 \\approx 2{,}302585$:\n$$E_a = \\frac{8{,}314 \\times 298 \\times 323 \\times 2{,}302585}{323 - 298} = \\frac{8{,}314 \\times 96254 \\times 2{,}302585}{25} \\approx 73706\\text{ J/mol} = +73{,}71\\text{ kJ}\\cdot\\mathrm{mol}^{-1}.$$',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Suatu gas mengembang volumenya dari $26{,}7\\text{ mL}$ menjadi $89{,}3\\text{ mL}$ pada suhu konstan. Kerja yang terlibat jika gas mengembang pada ruang hampa dan tekanan konstan $2{,}8\\text{ atm}$ sebesar ....\n\nA. $0$ dan $-18\\text{ J}$\nB. $0$ dan $18\\text{ J}$\nC. $0$ dan $-9\\text{ J}$\nD. $-9$ dan $-18\\text{ J}$\nE. $9$ dan $18\\text{ J}$',
          answer: 'A. $0$ dan $-18\\text{ J}$',
          principle:
            'Kerja tekanan-volume pada tekanan luar konstan dirumuskan sebagai $w = -P_{\\text{eks}}\\Delta V$, dengan konversi $1\\text{ L}\\cdot\\mathrm{atm} = 101{,}325\\text{ J}$.',
          solution:
            'Perubahan volume gas adalah:\n$$\\Delta V = V_2 - V_1 = 89{,}3\\text{ mL} - 26{,}7\\text{ mL} = 62{,}6\\text{ mL} = 0{,}0626\\text{ L}.$$\n1. Ekspansi bebas dalam ruang hampa ($P_{\\text{eks}} = 0$):\n$$w_1 = -P_{\\text{eks}}\\Delta V = 0\\text{ J}.$$\n2. Ekspansi melawan tekanan luar konstan $P_{\\text{eks}} = 2{,}8\\text{ atm}$:\n$$w_2 = -P_{\\text{eks}}\\Delta V = -2{,}8\\text{ atm} \\times 0{,}0626\\text{ L} = -0{,}17528\\text{ L}\\cdot\\mathrm{atm}.$$\nKonversikan ke joule ($1\\text{ L}\\cdot\\mathrm{atm} = 101{,}325\\text{ J}$):\n$$w_2 = -0{,}17528 \\times 101{,}325\\text{ J} \\approx -17{,}76\\text{ J} \\approx -18\\text{ J}.$$\nJadi kerja yang terlibat berturut-turut adalah $0$ dan $-18\\text{ J}$.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Istilah hidrogen ekonomi didasarkan pada hidrogen yang diproduksi dari air menggunakan energi matahari. Gas tersebut kemudian dibakar sebagai bahan bakar:\n$$2\\mathrm{H_2}(g) + \\mathrm{O_2}(g) \\rightarrow 2\\mathrm{H_2O}(l)$$\nEnergi yang dihasilkan oleh pembakaran gas hidrogen akan disetarakan dengan pembakaran bahan bakar oktana. Diketahui massa jenis oktana adalah $2{,}66\\text{ kg/galon}$, entalpi pembentukan standar oktana adalah $-249{,}9\\text{ kJ/mol}$, entalpi pembentukan standar $\\mathrm{CO_2}$ adalah $-393{,}5\\text{ kJ/mol}$, dan entalpi pembentukan standar $\\mathrm{H_2O}$ adalah $-285{,}8\\text{ kJ/mol}$. Volume gas hidrogen pada $25\\,^\\circ\\mathrm{C}$ dan $1\\text{ atm}$ yang diperlukan untuk menghasilkan sejumlah energi yang setara dengan yang dihasilkan oleh pembakaran satu galon oktana ($\\mathrm{C_8H_{18}}$) adalah ....\n\nA. $10{,}89\\text{ L}$\nB. $108{,}98\\text{ L}$\nC. $497{,}8\\text{ L}$\nD. $1089{,}80\\text{ L}$\nE. $10898\\text{ L}$',
          answer: 'E. $10898\\text{ L}$',
          principle:
            'Kalor pembakaran dihitung dari $\\Delta H^\\circ_{\\text{rxn}} = \\sum n\\Delta H_f^\\circ(\\text{produk}) - \\sum m\\Delta H_f^\\circ(\\text{reaktan})$, lalu disetarakan dengan $n_{\\mathrm{H_2}}$ dan dikonversi ke volume melalui persamaan gas ideal $V = \\dfrac{nRT}{P}$.',
          solution:
            '1. Reaksi pembakaran $1\\text{ mol}$ oktana:\n$$\\mathrm{C_8H_{18}}(l) + \\tfrac{25}{2}\\mathrm{O_2}(g) \\rightarrow 8\\mathrm{CO_2}(g) + 9\\mathrm{H_2O}(l),$$\n$$\\Delta H^\\circ_c(\\mathrm{C_8H_{18}}) = \\left[8(-393{,}5) + 9(-285{,}8)\\right] - (-249{,}9) = -5720{,}2 + 249{,}9 = -5470{,}3\\text{ kJ/mol}.$$\n2. Energi dari $1\\text{ galon}$ oktana ($m = 2660\\text{ g}$, $M_r = 8(12{,}011)+18(1{,}008) = 114{,}23\\text{ g/mol}$):\n$$n_{\\mathrm{C_8H_{18}}} = \\frac{2660}{114{,}23} \\approx 23{,}286\\text{ mol} \\implies q = 23{,}286 \\times 5470{,}3 \\approx 1{,}2738 \\times 10^5\\text{ kJ}.$$\n3. Untuk pembakaran $1\\text{ mol}$ $\\mathrm{H_2}$ menghasilkan $\\mathrm{H_2O}(l)$, $\\Delta H^\\circ_c(\\mathrm{H_2}) = -285{,}8\\text{ kJ/mol}$, sehingga:\n$$n_{\\mathrm{H_2}} = \\frac{q}{|\\Delta H^\\circ_c(\\mathrm{H_2})|} = \\frac{1{,}2738 \\times 10^5}{285{,}8} \\approx 445{,}70\\text{ mol}.$$\n4. Volume $\\mathrm{H_2}$ pada $T = 298\\text{ K}$ dan $P = 1\\text{ atm}$ ($R = 0{,}08205\\text{ L}\\cdot\\mathrm{atm}\\cdot\\mathrm{mol}^{-1}\\cdot\\mathrm{K}^{-1}$):\n$$V = \\frac{n_{\\mathrm{H_2}}RT}{P} = \\frac{445{,}70 \\times 0{,}08205 \\times 298}{1} \\approx 10898\\text{ L}.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Sebanyak $200\\text{ mL}$ $\\mathrm{HCl}\\ 0{,}862\\text{ M}$ dicampur dengan $200\\text{ mL}$ $\\mathrm{Ba(OH)_2}\\ 0{,}431\\text{ M}$ dalam kalorimeter bertekanan konstan dengan kapasitas kalor yang dapat diabaikan. Suhu awal larutan $\\mathrm{HCl}$ dan $\\mathrm{Ba(OH)_2}$ adalah sama pada $20{,}48\\,^\\circ\\mathrm{C}$. Asumsikan bahwa massa jenis dan kalor jenis larutan sama dengan air (masing-masing $1{,}00\\text{ g/mL}$ dan $4{,}184\\text{ J}\\cdot\\mathrm{g}^{-1}\\cdot{^\\circ\\mathrm{C}}^{-1}$), dan kalor netralisasi adalah $-56{,}2\\text{ kJ/mol}$. Suhu akhir larutan tersebut adalah ....\n\nA. $8{,}9\\,^\\circ\\mathrm{C}$\nB. $14{,}7\\,^\\circ\\mathrm{C}$\nC. $26{,}3\\,^\\circ\\mathrm{C}$\nD. $32{,}1\\,^\\circ\\mathrm{C}$\nE. $40{,}0\\,^\\circ\\mathrm{C}$',
          answer: 'C. $26{,}3\\,^\\circ\\mathrm{C}$',
          principle:
            'Kalor yang dilepaskan reaksi netralisasi ($n_{\\mathrm{H_2O}} |\\Delta H_{\\text{net}}|$) menaikkan suhu total larutan menurut $q = m_{\\text{tot}}c\\Delta T$.',
          solution:
            'Persamaan reaksi netralisasi:\n$$\\mathrm{Ba(OH)_2}(aq) + 2\\mathrm{HCl}(aq) \\rightarrow \\mathrm{BaCl_2}(aq) + 2\\mathrm{H_2O}(l).$$\nHitung jumlah mol masing-masing pereaksi:\n$$n_{\\mathrm{HCl}} = 0{,}862\\text{ M} \\times 0{,}200\\text{ L} = 0{,}1724\\text{ mol},$$\n$$n_{\\mathrm{Ba(OH)_2}} = 0{,}431\\text{ M} \\times 0{,}200\\text{ L} = 0{,}0862\\text{ mol}.$$\nKeduanya tepat habis bereaksi ($n_{\\mathrm{HCl}} = 2n_{\\mathrm{Ba(OH)_2}}$) membentuk $n_{\\mathrm{H_2O}} = 0{,}1724\\text{ mol}$.\nSecara simbolik, kenaikan suhu larutan dengan volume total $V_{\\text{tot}} = 400\\text{ mL}$ ($m_{\\text{tot}} = \\rho V_{\\text{tot}} = 400\\text{ g}$) adalah:\n$$\\Delta T = \\frac{n_{\\mathrm{H_2O}} |\\Delta H_{\\text{net}}|}{m_{\\text{tot}} c} = \\frac{0{,}1724 \\times 56200\\text{ J}}{400\\text{ g} \\times 4{,}184\\text{ J}\\cdot\\mathrm{g}^{-1}\\cdot{^\\circ\\mathrm{C}}^{-1}} = \\frac{9688{,}88}{1673{,}6} \\approx 5{,}79\\,^\\circ\\mathrm{C}.$$\nMaka suhu akhir larutan adalah:\n$$T_{\\text{akhir}} = T_{\\text{awal}} + \\Delta T = 20{,}48\\,^\\circ\\mathrm{C} + 5{,}79\\,^\\circ\\mathrm{C} = 26{,}27\\,^\\circ\\mathrm{C} \\approx 26{,}3\\,^\\circ\\mathrm{C}.$$',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Gas kloroetana, $\\mathrm{C_2H_5Cl}$, terdekomposisi menjadi gas etena dan asam klorida sesuai persamaan reaksi berikut:\n$$\\mathrm{C_2H_5Cl}(g) \\rightarrow \\mathrm{C_2H_4}(g) + \\mathrm{HCl}(g)$$\nDekomposisi $\\mathrm{C_2H_5Cl}$ mengikuti reaksi orde-1. Pada $800\\text{ K}$, konsentrasi $\\mathrm{C_2H_5Cl}$ berkurang dari $0{,}098\\text{ M}$ menjadi $0{,}016\\text{ M}$ selama $340\\text{ s}$. Pada wadah yang berbeda dengan temperatur $800\\text{ K}$, terdapat gas kloroetana dengan tekanan $0{,}040\\text{ atm}$. Waktu yang diperlukan agar tekanan total di dalam wadah menjadi $0{,}065\\text{ atm}$ adalah ....\n\nA. $120{,}4\\text{ detik}$\nB. $15{,}21\\text{ detik}$\nC. $282{,}1\\text{ detik}$\nD. $184{,}1\\text{ detik}$\nE. $450{,}1\\text{ detik}$',
          answer: 'D. $184{,}1\\text{ detik}$',
          principle:
            'Untuk reaksi gas orde-1 pada $T$ konstan, $\\ln\\left(\\dfrac{C_0}{C_t}\\right) = \\ln\\left(\\dfrac{P_0}{P_t}\\right) = kt$, dengan tekanan parsial reaktan diperoleh dari stoikiometri tekanan total.',
          solution:
            '1. Menentukan tetapan laju $k$ pada $800\\text{ K}$:\n$$k = \\frac{1}{t_1}\\ln\\left(\\frac{[\\mathrm{C_2H_5Cl}]_0}{[\\mathrm{C_2H_5Cl}]_{t_1}}\\right) = \\frac{1}{340\\text{ s}}\\ln\\left(\\frac{0{,}098}{0{,}016}\\right) = \\frac{\\ln(6{,}125)}{340} \\approx 5{,}3305 \\times 10^{-3}\\text{ s}^{-1}.$$\n2. Pada wadah kedua ($P_0 = 0{,}040\\text{ atm}$), jika tekanan $\\mathrm{C_2H_5Cl}$ yang terurai sebesar $x$, maka pada kesetimbangan sesaat:\n$$P_{\\mathrm{C_2H_5Cl}} = P_0 - x, \\quad P_{\\mathrm{C_2H_4}} = x, \\quad P_{\\mathrm{HCl}} = x \\implies P_{\\text{tot}} = (P_0 - x) + x + x = P_0 + x.$$\nSehingga $x = P_{\\text{tot}} - P_0 = 0{,}065 - 0{,}040 = 0{,}025\\text{ atm}$ dan tekanan sisa reaktan:\n$$P_t = P_0 - x = 0{,}040 - 0{,}025 = 0{,}015\\text{ atm}.$$\n3. Waktu reaksi yang diperlukan:\n$$t = \\frac{1}{k}\\ln\\left(\\frac{P_0}{P_t}\\right) = \\frac{\\ln(0{,}040/0{,}015)}{5{,}3305 \\times 10^{-3}\\text{ s}^{-1}} = \\frac{\\ln(8/3)}{5{,}3305 \\times 10^{-3}} \\approx 184{,}0\\text{ s} \\approx 184{,}1\\text{ detik}.$$',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Sifat kimia senyawa oksida logam dapat sebagai oksida basa, oksida asam, atau oksida amfoter dalam larutan. Di antara pasangan senyawa oksida-oksida di bawah ini yang merupakan oksida asam yaitu ....\n\nA. $\\mathrm{Na_2O}$ dan $\\mathrm{MgO}$\nB. $\\mathrm{Al_2O_3}$ dan $\\mathrm{Cr_2O_3}$\nC. $\\mathrm{CrO_3}$ dan $\\mathrm{Mn_2O_7}$\nD. $\\mathrm{FeO}$ dan $\\mathrm{PbO}$\nE. $\\mathrm{TiO_2}$ dan $\\mathrm{ZnO}$',
          answer: 'C. $\\mathrm{CrO_3}$ dan $\\mathrm{Mn_2O_7}$',
          principle:
            'Oksida logam dengan bilangan oksidasi sangat tinggi bersifat kovalen dan asam (bereaksi dengan air membentuk asam okso), sedangkan bilangan oksidasi rendah bersifat basa dan menengah bersifat amfoter.',
          solution:
            'Evaluasi sifat keasaman tiap pasangan oksida:\n- $\\mathrm{Na_2O}$ ($\\mathrm{Na^+}$, $+1$) dan $\\mathrm{MgO}$ ($\\mathrm{Mg^{2+}}$, $+2$): oksida basa.\n- $\\mathrm{Al_2O_3}$ ($+3$) dan $\\mathrm{Cr_2O_3}$ ($+3$): oksida amfoter.\n- $\\mathrm{CrO_3}$ ($\\mathrm{Cr^{VI}}$, $+6$) dan $\\mathrm{Mn_2O_7}$ ($\\mathrm{Mn^{VII}}$, $+7$): logam berbilangan oksidasi tinggi sehingga ikatannya kovalen dan bersifat oksida asam ($\\mathrm{CrO_3} + \\mathrm{H_2O} \\rightarrow \\mathrm{H_2CrO_4}$; $\\mathrm{Mn_2O_7} + \\mathrm{H_2O} \\rightarrow 2\\mathrm{HMnO_4}$).\n- $\\mathrm{FeO}$ ($+2$, basa) dan $\\mathrm{PbO}$ ($+2$, amfoter).\n- $\\mathrm{TiO_2}$ ($+4$, amfoter) dan $\\mathrm{ZnO}$ ($+2$, amfoter).\nJadi pasangan oksida asam adalah $\\mathrm{CrO_3}$ dan $\\mathrm{Mn_2O_7}$.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Larutan metilamina $0{,}100\\text{ M}$ sebanyak $40\\text{ mL}$ yang dititrasi dengan larutan asam klorida $0{,}100\\text{ M}$ akan menghasilkan sistem bufer dengan kapasitas tertinggi pada kondisi volume $\\mathrm{HCl}$ dan $\\mathrm{pH}$ larutan masing-masing sebesar .... (Diketahui $K_b$ metilamina $= 4{,}4 \\times 10^{-4}$)\n\nA. $5\\text{ mL}$ dan $\\mathrm{pH} = 11{,}49$\nB. $10\\text{ mL}$ dan $\\mathrm{pH} = 11{,}12$\nC. $20\\text{ mL}$ dan $\\mathrm{pH} = 10{,}64$\nD. $30\\text{ mL}$ dan $\\mathrm{pH} = 10{,}16$\nE. $40\\text{ mL}$ dan $\\mathrm{pH} = 5{,}97$',
          answer: 'C. $20\\text{ mL}$ dan $\\mathrm{pH} = 10{,}64$',
          principle:
            'Kapasitas bufer mencapai nilai maksimum pada titik setengah ekuivalen, ketika $[\\text{basa lemah}] = [\\text{asam konjugat}]$ dan $\\mathrm{pH} = \\mathrm{p}K_a = 14 - \\mathrm{p}K_b$.',
          solution:
            '1. Reaksi titrasi metilamina dengan asam klorida:\n$$\\mathrm{CH_3NH_2}(aq) + \\mathrm{HCl}(aq) \\rightarrow \\mathrm{CH_3NH_3^+}(aq) + \\mathrm{Cl^-}(aq).$$\nMol awal $\\mathrm{CH_3NH_2} = 0{,}100\\text{ M} \\times 40\\text{ mL} = 4{,}00\\text{ mmol}$, sehingga volume titik ekuivalen adalah $V_{\\text{ek}} = 40\\text{ mL}$.\n2. Kapasitas bufer tertinggi tercapai saat tepat setengah dari basa lemah telah dititrasi ($[\\mathrm{CH_3NH_2}] = [\\mathrm{CH_3NH_3^+}]$), yaitu pada titik setengah ekuivalen:\n$$V_{\\mathrm{HCl}} = \\frac{1}{2} V_{\\text{ek}} = \\frac{40\\text{ mL}}{2} = 20\\text{ mL}.$$\n3. Pada kondisi tersebut, persamaan Henderson–Hasselbalch memberikan:\n$$\\mathrm{p}K_b = -\\log(4{,}4 \\times 10^{-4}) = 4 - \\log(4{,}4) \\approx 3{,}36,$$\n$$\\mathrm{pH} = \\mathrm{p}K_a = 14 - \\mathrm{p}K_b = 14 - 3{,}36 = 10{,}64.$$',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Sebanyak $0{,}10\\text{ mol}$ $\\mathrm{NaCl}$ dan $0{,}05\\text{ mol}$ $\\mathrm{CaCl_2}$ dilarutkan dalam $180\\text{ g}$ air ($M_r = 18\\text{ g/mol}$) pada $25\\,^\\circ\\mathrm{C}$. Kedua garam mengalami ionisasi sempurna. Jika tekanan uap jenuh air murni pada suhu tersebut adalah $23{,}8\\text{ mmHg}$, maka tekanan uap larutan tersebut adalah ....\n\nA. $21{,}99\\text{ mmHg}$\nB. $22{,}34\\text{ mmHg}$\nC. $22{,}99\\text{ mmHg}$\nD. $23{,}33\\text{ mmHg}$\nE. $23{,}99\\text{ mmHg}$',
          answer: 'C. $22{,}99\\text{ mmHg}$',
          principle:
            'Menurut Hukum Raoult untuk larutan elektrolit terdisosiasi sempurna, tekanan uap larutan memenuhi $P = P^\\circ X_{\\text{pelarut}}$ dengan $X_{\\text{pelarut}} = \\dfrac{n_{\\text{air}}}{n_{\\text{air}} + \\sum i_k n_k}$.',
          solution:
            'Hitung jumlah mol masing-masing komponen:\n- Mol air: $n_{\\text{air}} = \\dfrac{180\\text{ g}}{18\\text{ g/mol}} = 10\\text{ mol}$.\n- $\\mathrm{NaCl} \\rightarrow \\mathrm{Na^+} + \\mathrm{Cl^-}$ ($i = 2$): $n_{\\text{ion},1} = 2 \\times 0{,}10 = 0{,}20\\text{ mol}$.\n- $\\mathrm{CaCl_2} \\rightarrow \\mathrm{Ca^{2+}} + 2\\mathrm{Cl^-}$ ($i = 3$): $n_{\\text{ion},2} = 3 \\times 0{,}05 = 0{,}15\\text{ mol}$.\nTotal mol partikel terlarut $n_{\\text{ion}} = 0{,}20 + 0{,}15 = 0{,}35\\text{ mol}$.\nFraksi mol pelarut dan tekanan uap larutan:\n$$X_{\\text{air}} = \\frac{n_{\\text{air}}}{n_{\\text{air}} + n_{\\text{ion}}} = \\frac{10}{10 + 0{,}35} = \\frac{10}{10{,}35},$$\n$$P = P^\\circ X_{\\text{air}} = 23{,}8\\text{ mmHg} \\times \\frac{10}{10{,}35} \\approx 22{,}995\\text{ mmHg} \\approx 22{,}99\\text{ mmHg}.$$',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Sebanyak $0{,}12\\text{ g}$ asam lemah $\\mathrm{HX}$ ($M_r = 61\\text{ g/mol}$) dilarutkan dalam $25{,}0\\text{ g}$ air (massa jenis $= 1\\text{ g/mL}$), sehingga titik didih larutan meningkat sebesar $0{,}052\\,^\\circ\\mathrm{C}$ ($K_b$ air $= 0{,}512\\,^\\circ\\mathrm{C}\\cdot\\mathrm{kg/mol}$). Nilai tetapan disosiasi asam ($K_a$) $\\mathrm{HX}$ adalah .... (Asumsikan proses pelarutan tidak menyebabkan perubahan volume larutan secara signifikan)\n\nA. $7{,}5 \\times 10^{-5}$\nB. $1{,}3 \\times 10^{-4}$\nC. $3{,}2 \\times 10^{-4}$\nD. $5{,}0 \\times 10^{-3}$\nE. $9{,}3 \\times 10^{-3}$',
          answer: 'E. $9{,}3 \\times 10^{-3}$',
          principle:
            'Dari kenaikan titik didih $\\Delta T_b = i K_b m$ diperoleh faktor van\'t Hoff $i = 1 + \\alpha$, kemudian tetapan ionisasi asam dihitung melalui $K_a = \\dfrac{C\\alpha^2}{1 - \\alpha}$.',
          solution:
            '1. Molalitas (dan molaritas karena volume larutan dianggap tetap sama dengan volume air $25{,}0\\text{ mL}$):\n$$m = \\frac{m_{\\mathrm{HX}}/M_r}{m_{\\text{air}}(\\text{kg})} = \\frac{0{,}12 / 61}{0{,}025} \\approx 0{,}07869\\text{ mol/kg} \\implies C \\approx 0{,}07869\\text{ M}.$$\n2. Faktor van\'t Hoff $i$ dan derajat ionisasi $\\alpha$ untuk asam monoprotik $\\mathrm{HX} \\rightleftharpoons \\mathrm{H^+} + \\mathrm{X^-}$ ($i = 1 + \\alpha$):\n$$i = \\frac{\\Delta T_b}{K_b m} = \\frac{0{,}052}{0{,}512 \\times 0{,}07869} \\approx 1{,}2907 \\implies \\alpha = i - 1 \\approx 0{,}2907.$$\n3. Tetapan ionisasi asam $K_a$:\n$$K_a = \\frac{C\\alpha^2}{1 - \\alpha} = \\frac{0{,}07869 \\times (0{,}2907)^2}{1 - 0{,}2907} \\approx 9{,}37 \\times 10^{-3} \\approx 9{,}3 \\times 10^{-3}.$$',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Sebanyak $6{,}57\\text{ g}$ campuran kalium nitrat ($M_r = 101\\text{ g/mol}$) dan aluminium sulfat ($M_r = 342\\text{ g/mol}$) dilarutkan dalam $100\\text{ g}$ air. Selisih titik beku larutan tersebut dengan titik beku air murni adalah $1{,}93\\,^\\circ\\mathrm{C}$ ($K_f$ air $= 1{,}86\\,^\\circ\\mathrm{C}\\cdot\\mathrm{kg/mol}$). Persentase massa kalium nitrat dalam campuran adalah .... (Asumsikan bahwa zat terlarut mengalami ionisasi sempurna)\n\nA. $22{,}6\\%$\nB. $33{,}3\\%$\nC. $50{,}0\\%$\nD. $66{,}7\\%$\nE. $77{,}4\\%$',
          answer: 'A. $22{,}6\\%$',
          principle:
            'Penurunan titik beku campuran elektrolit memenuhi $\\Delta T_f = K_f \\cdot \\dfrac{\\sum i_k n_k}{m_{\\text{pelarut}}(\\text{kg})}$.',
          solution:
            'Misalkan massa $\\mathrm{KNO_3}$ ($i_1 = 2$) adalah $x\\text{ g}$, sehingga massa $\\mathrm{Al_2(SO_4)_3}$ ($i_2 = 5$) adalah $(m_{\\text{tot}} - x) = (6{,}57 - x)\\text{ g}$.\nTotal mol partikel ion per massa pelarut $m_{\\text{air}} = 0{,}100\\text{ kg}$ memenuhi:\n$$\\Delta T_f = \\frac{K_f}{m_{\\text{air}}}\\left(\\frac{2x}{101} + \\frac{5(6{,}57 - x)}{342}\\right).$$\nSubstitusikan $\\Delta T_f = 1{,}93\\,^\\circ\\mathrm{C}$ dan $K_f = 1{,}86\\,^\\circ\\mathrm{C}\\cdot\\mathrm{kg/mol}$:\n$$\\frac{1{,}93}{18{,}6} = \\frac{2x}{101} + \\frac{32{,}85 - 5x}{342} = \\frac{684x + 3317{,}85 - 505x}{34542} = \\frac{179x + 3317{,}85}{34542}.$$\nKalikan silang untuk memperoleh $x$:\n$$179x + 3317{,}85 = \\frac{1{,}93 \\times 34542}{18{,}6} \\approx 3584{,}20 \\implies 179x \\approx 266{,}35 \\implies x \\approx 1{,}488\\text{ g}.$$\nPersentase massa $\\mathrm{KNO_3}$ dalam campuran:\n$$\\%\\,\\mathrm{KNO_3} = \\frac{1{,}488}{6{,}57} \\times 100\\% \\approx 22{,}65\\% \\approx 22{,}6\\%.$$',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Larutan $\\mathrm{X}$ merupakan larutan biner yang menunjukkan penyimpangan positif terhadap Hukum Raoult. Pernyataan manakah yang sesuai dengan fenomena tersebut?\n\nA. Tekanan uap larutan $\\mathrm{X}$ lebih rendah dari larutan ideal\nB. Proses pelarutan bersifat eksotermik\nC. Titik didih larutan $\\mathrm{X}$ lebih tinggi daripada larutan ideal\nD. Zat terlarut dalam larutan $\\mathrm{X}$ mengalami ionisasi sempurna\nE. Interaksi sesama zat terlarut lebih kuat daripada zat terlarut pelarut',
          answer: 'E. Interaksi sesama zat terlarut lebih kuat daripada zat terlarut pelarut',
          principle:
            'Penyimpangan positif dari Hukum Raoult terjadi ketika interaksi antarmolekul tak sejenis ($A\\text{--}B$) lebih lemah daripada interaksi antarmolekul sejenis ($A\\text{--}A$ dan $B\\text{--}B$).',
          solution:
            'Pada penyimpangan positif Hukum Raoult:\n- Gaya tarik antara zat terlarut dan pelarut lebih lemah dibandingkan interaksi sesama zat murni ($A\\text{--}A$ atau $B\\text{--}B$), sehingga molekul lebih mudah menguap.\n- Akibatnya, tekanan uap larutan lebih tinggi dari nilai ideal ($P > P_{\\text{ideal}}$), titik didih lebih rendah dari ideal, dan proses pencampuran bersifat endotermik ($\\Delta H_{\\text{lar}} > 0$).\nOleh karena itu, pernyataan A, B, C, dan D salah, sedangkan pernyataan E benar.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Seorang siswa ingin mengidentifikasi suatu gas tertentu dengan membandingkan dengan gas metana melalui percobaan laju efusi gas dalam suatu kontainer pada $T$ dan $P$ yang sama. Dari hasil percobaan, diketahui bahwa rasio laju efusi gas metana terhadap gas tersebut adalah $2$ berbanding $1$. Kemungkinan gas tersebut adalah ....\n\nA. $\\mathrm{NO_2}$\nB. $\\mathrm{NO}$\nC. $\\mathrm{CO_2}$\nD. $\\mathrm{SO_2}$\nE. $\\mathrm{NH_3}$',
          answer: 'D. $\\mathrm{SO_2}$',
          principle:
            'Hukum Efusi Graham pada suhu dan tekanan yang sama: $\\dfrac{r_1}{r_2} = \\sqrt{\\dfrac{M_2}{M_1}}$.',
          solution:
            'Berdasarkan Hukum Graham:\n$$\\frac{r_{\\mathrm{CH_4}}}{r_{\\mathrm{X}}} = \\sqrt{\\frac{M_{\\mathrm{X}}}{M_{\\mathrm{CH_4}}}} \\implies M_{\\mathrm{X}} = M_{\\mathrm{CH_4}} \\left(\\frac{r_{\\mathrm{CH_4}}}{r_{\\mathrm{X}}}\\right)^2.$$\nDengan $M_{\\mathrm{CH_4}} = 16\\text{ g/mol}$ dan rasio $\\dfrac{r_{\\mathrm{CH_4}}}{r_{\\mathrm{X}}} = 2$:\n$$M_{\\mathrm{X}} = 16 \\times 2^2 = 64\\text{ g/mol}.$$\nPeriksa massa molar opsi: $M(\\mathrm{NO_2}) = 46$, $M(\\mathrm{NO}) = 30$, $M(\\mathrm{CO_2}) = 44$, $M(\\mathrm{SO_2}) = 32 + 2(16) = 64\\text{ g/mol}$, $M(\\mathrm{NH_3}) = 17$. Jadi gas tersebut adalah $\\mathrm{SO_2}$.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Dua buah sampel gas, $\\mathrm{Ar}$ dan $\\mathrm{He}$, berada pada kondisi suhu, tekanan, dan volume yang sama. Dengan mengasumsikan kedua gas bersifat ideal, pernyataan di bawah ini yang benar terkait dengan jumlah partikel ($N$), kecepatan rata-rata ($\\bar{v}_{\\text{rms}}$), dan densitas ($\\rho$) adalah ....\n\nA. $N_{\\mathrm{Ar}} = N_{\\mathrm{He}}$, $\\bar{v}_{\\text{rms, Ar}} > \\bar{v}_{\\text{rms, He}}$, dan $\\rho_{\\mathrm{Ar}} > \\rho_{\\mathrm{He}}$\nB. $N_{\\mathrm{Ar}} = N_{\\mathrm{He}}$, $\\bar{v}_{\\text{rms, Ar}} < \\bar{v}_{\\text{rms, He}}$, dan $\\rho_{\\mathrm{Ar}} > \\rho_{\\mathrm{He}}$\nC. $N_{\\mathrm{Ar}} > N_{\\mathrm{He}}$, $\\bar{v}_{\\text{rms, Ar}} = \\bar{v}_{\\text{rms, He}}$, dan $\\rho_{\\mathrm{Ar}} < \\rho_{\\mathrm{He}}$\nD. $N_{\\mathrm{Ar}} = N_{\\mathrm{He}}$, $\\bar{v}_{\\text{rms, Ar}} = \\bar{v}_{\\text{rms, He}}$, dan $\\rho_{\\mathrm{Ar}} = \\rho_{\\mathrm{He}}$\nE. $N_{\\mathrm{Ar}} > N_{\\mathrm{He}}$, $\\bar{v}_{\\text{rms, Ar}} > \\bar{v}_{\\text{rms, He}}$, dan $\\rho_{\\mathrm{Ar}} = \\rho_{\\mathrm{He}}$',
          answer: 'B. $N_{\\mathrm{Ar}} = N_{\\mathrm{He}}$, $\\bar{v}_{\\text{rms, Ar}} < \\bar{v}_{\\text{rms, He}}$, dan $\\rho_{\\mathrm{Ar}} > \\rho_{\\mathrm{He}}$',
          principle:
            'Dari persamaan gas ideal dan teori kinetik gas: $N = \\dfrac{PV}{k_{\\mathrm{B}}T}$, $v_{\\text{rms}} = \\sqrt{\\dfrac{3RT}{M}}$, dan $\\rho = \\dfrac{PM}{RT}$.',
          solution:
            'Karena kedua gas ideal berada pada $P$, $V$, dan $T$ yang sama, dan diketahui $M_{\\mathrm{Ar}} = 40\\text{ g/mol} > M_{\\mathrm{He}} = 4\\text{ g/mol}$:\n1. Jumlah partikel: $N = \\dfrac{PV}{k_{\\mathrm{B}}T}$, hanya bergantung pada $P, V, T$, sehingga $N_{\\mathrm{Ar}} = N_{\\mathrm{He}}$.\n2. Kecepatan rms: $v_{\\text{rms}} = \\sqrt{\\dfrac{3RT}{M}}$ berbanding terbalik dengan $\\sqrt{M}$, sehingga $\\bar{v}_{\\text{rms, Ar}} < \\bar{v}_{\\text{rms, He}}$.\n3. Densitas gas ideal: $\\rho = \\dfrac{PM}{RT}$ sebanding dengan $M$, sehingga $\\rho_{\\mathrm{Ar}} > \\rho_{\\mathrm{He}}$.\nKombinasi yang tepat adalah pilihan B.',
          rubric: OK
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Suatu sampel gas $\\mathrm{N_2}$ yang dikumpulkan di atas permukaan air pada $25\\,^\\circ\\mathrm{C}$ dan tekanan $732\\text{ mmHg}$ memiliki volume sebesar $250\\text{ mL}$. Volume gas $\\mathrm{N_2}$ kering tersebut pada kondisi $0\\,^\\circ\\mathrm{C}$ dan $1\\text{ atm}$ adalah .... (Tekanan uap murni $\\mathrm{H_2O}$ pada $25\\,^\\circ\\mathrm{C} = 24\\text{ mmHg}$)\n\nA. $213{,}4\\text{ mL}$\nB. $220{,}6\\text{ mL}$\nC. $227{,}8\\text{ mL}$\nD. $249{,}5\\text{ mL}$\nE. $270{,}0\\text{ mL}$',
          answer: 'A. $213{,}4\\text{ mL}$',
          principle:
            'Tekanan parsial gas kering di atas air mengikuti Hukum Dalton $P_{\\mathrm{N_2}} = P_{\\text{tot}} - P_{\\mathrm{H_2O}}$, lalu dikonversi ke kondisi baru melalui hukum gas gabungan $\\dfrac{P_1 V_1}{T_1} = \\dfrac{P_2 V_2}{T_2}$.',
          solution:
            'Tekanan parsial gas $\\mathrm{N_2}$ kering pada kondisi awal ($T_1 = 25 + 273 = 298\\text{ K}$, $V_1 = 250\\text{ mL}$):\n$$P_1 = P_{\\text{tot}} - P_{\\mathrm{H_2O}} = 732\\text{ mmHg} - 24\\text{ mmHg} = 708\\text{ mmHg}.$$\nPada kondisi akhir $T_2 = 0 + 273 = 273\\text{ K}$ dan $P_2 = 1\\text{ atm} = 760\\text{ mmHg}$, hukum gas gabungan memberikan:\n$$V_2 = V_1 \\cdot \\frac{P_1}{P_2} \\cdot \\frac{T_2}{T_1} = 250\\text{ mL} \\times \\frac{708}{760} \\times \\frac{273}{298} \\approx 213{,}36\\text{ mL} \\approx 213{,}4\\text{ mL}.$$',
          rubric: OK
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Dalam air (massa jenis $= 1\\text{ g/mL}$), reaksi kesetimbangan berikut berlangsung pada suhu rendah:\n$$\\mathrm{A}(aq) + \\mathrm{B}(aq) \\rightleftharpoons \\mathrm{C}(aq)$$\nPada awal reaksi, kedua reaktan memiliki jumlah (mol) yang sama. Sebelum produk terbentuk, titik beku larutan adalah $-0{,}410\\,^\\circ\\mathrm{C}$. Setelah sistem mencapai kesetimbangan, titik beku larutan meningkat menjadi $-0{,}328\\,^\\circ\\mathrm{C}$. Seluruh spesi merupakan senyawa nonelektrolit dan nonvolatil. Nilai tetapan kesetimbangan ($K$) untuk reaksi tersebut adalah .... ($K_f$ air $= 1{,}86\\,^\\circ\\mathrm{C}\\cdot\\mathrm{kg/mol}$; asumsikan bahwa proses pelarutan dan reaksi tidak menyebabkan perubahan volume larutan)\n\nA. $2{,}5$\nB. $10{,}1$\nC. $25{,}2$\nD. $100{,}8$\nE. $186{,}0$',
          answer: 'B. $10{,}1$',
          principle:
            'Penurunan titik beku nonelektrolit $\\Delta T_f = K_f m_{\\text{tot}}$ mengukur molalitas total seluruh spesi terlarut, sehingga perubahan jumlah partikel akibat reaksi $\\mathrm{A} + \\mathrm{B} \\rightleftharpoons \\mathrm{C}$ menentukan komposisi kesetimbangan.',
          solution:
            'Karena pelarut air memiliki massa jenis $1\\text{ g/mL}$ dan reaksi berlangsung encer tanpa perubahan volume, konsentrasi molar hampir sama dengan molalitas ($M \\approx m$).\n1. Keadaan awal ($[\\mathrm{A}]_0 = [\\mathrm{B}]_0 = c$, $[\\mathrm{C}]_0 = 0$):\n$$m_{\\text{awal}} = 2c = \\frac{\\Delta T_{f,\\text{awal}}}{K_f} = \\frac{0{,}410}{1{,}86} \\approx 0{,}22043\\text{ mol/kg} \\implies c \\approx 0{,}11022\\text{ M}.$$\n2. Saat kesetimbangan, misalkan $y$ adalah konsentrasi $\\mathrm{C}$ yang terbentuk:\n$$[\\mathrm{A}] = c - y, \\qquad [\\mathrm{B}] = c - y, \\qquad [\\mathrm{C}] = y.$$\nTotal konsentrasi partikel terlarut menjadi $m_{\\text{akhir}} = (c - y) + (c - y) + y = 2c - y = m_{\\text{awal}} - y$:\n$$m_{\\text{akhir}} = \\frac{\\Delta T_{f,\\text{akhir}}}{K_f} = \\frac{0{,}328}{1{,}86} \\approx 0{,}17634\\text{ mol/kg},$$\n$$y = m_{\\text{awal}} - m_{\\text{akhir}} = 0{,}22043 - 0{,}17634 = 0{,}04409\\text{ M}.$$\nMaka $[\\mathrm{A}] = [\\mathrm{B}] = 0{,}11022 - 0{,}04409 = 0{,}06613\\text{ M}$, dan tetapan kesetimbangannya:\n$$K = \\frac{[\\mathrm{C}]}{[\\mathrm{A}][\\mathrm{B}]} = \\frac{0{,}04409}{(0{,}06613)^2} \\approx 10{,}08 \\approx 10{,}1.$$',
          rubric: OK
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Perhatikan reaksi kesetimbangan yang melibatkan reaksi di bawah ini:\n$$\\tfrac{1}{2}\\mathrm{N_2}(g) + \\mathrm{O_2}(g) \\rightleftharpoons \\mathrm{NO_2}(g) \\qquad (K_1)$$\n$$2\\mathrm{NO_2}(g) \\rightleftharpoons 2\\mathrm{NO}(g) + \\mathrm{O_2}(g) \\qquad (K_2)$$\n$$\\mathrm{NOBr}(g) \\rightleftharpoons \\mathrm{NO}(g) + \\tfrac{1}{2}\\mathrm{Br_2}(g) \\qquad (K_3)$$\nTetapan kesetimbangan untuk reaksi pembentukan $1\\text{ mol}$ gas $\\mathrm{NOBr}$ adalah ....\n\nA. $K_1 K_2 (K_3)^{1/2}$\nB. $K_1 - \\frac{K_2}{2} - K_3$\nC. $K_1 (K_2)^{1/2} K_3$\nD. $K_1 + (K_2)^{1/2} - K_3$\nE. $\\frac{K_1 (K_2)^{1/2}}{K_3}$',
          answer: 'E. $\\frac{K_1 (K_2)^{1/2}}{K_3}$',
          principle:
            'Jika reaksi dikalikan faktor $n$, tetapan kesetimbangan dipangkatkan $n$ ($K^n$); jika dibalik, menjadi $1/K$; dan jika beberapa reaksi dijumlahkan, tetapan kesetimbangannya dikalikan.',
          solution:
            'Reaksi target pembentukan $1\\text{ mol}$ $\\mathrm{NOBr}(g)$ dari unsur-unsurnya adalah:\n$$\\tfrac{1}{2}\\mathrm{N_2}(g) + \\tfrac{1}{2}\\mathrm{O_2}(g) + \\tfrac{1}{2}\\mathrm{Br_2}(g) \\rightleftharpoons \\mathrm{NOBr}(g).$$\nSusun persamaan reaksi dari ketiga data:\n1. Reaksi (1) tetap: $\\tfrac{1}{2}\\mathrm{N_2}(g) + \\mathrm{O_2}(g) \\rightleftharpoons \\mathrm{NO_2}(g)$, dengan $K_1\' = K_1$.\n2. Reaksi (2) dikalikan $\\tfrac{1}{2}$: $\\mathrm{NO_2}(g) \\rightleftharpoons \\mathrm{NO}(g) + \\tfrac{1}{2}\\mathrm{O_2}(g)$, dengan $K_2\' = K_2^{1/2}$.\n3. Reaksi (3) dibalik: $\\mathrm{NO}(g) + \\tfrac{1}{2}\\mathrm{Br_2}(g) \\rightleftharpoons \\mathrm{NOBr}(g)$, dengan $K_3\' = \\dfrac{1}{K_3}$.\nJumlahkan ketiganya (spesi antara $\\mathrm{NO_2}$ dan $\\mathrm{NO}$ saling meniadakan, dan $\\mathrm{O_2} - \\tfrac{1}{2}\\mathrm{O_2} = \\tfrac{1}{2}\\mathrm{O_2}$):\n$$K = K_1\' \\cdot K_2\' \\cdot K_3\' = \\frac{K_1 (K_2)^{1/2}}{K_3}.$$',
          rubric: OK
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Pernyataan berikut yang benar mengenai spesi $\\mathrm{NF}$, $\\mathrm{NF^+}$, dan $\\mathrm{NF^-}$ adalah ....\n(I) $\\mathrm{NF}$ bersifat diamagnetik\n(II) Panjang ikatan tertinggi dimiliki oleh $\\mathrm{NF^-}$\n(III) HOMO semua spesi adalah orbital $\\pi^*$\n(IV) Orde ikatan $\\mathrm{NF}$ adalah $2{,}5$\n\nA. Semua benar\nB. (I), (II), (III) benar\nC. (I), (II), (IV) benar\nD. (II) dan (III) benar\nE. (III) dan (IV) benar',
          answer: 'D. (II) dan (III) benar',
          principle:
            'Molekul $\\mathrm{NF}$ memiliki $5 + 7 = 12$ elektron valensi (isoelektronik dengan $\\mathrm{O_2}$); sifat magnetik, HOMO, dan panjang ikatan ditentukan dari pengisian orbital molekul $\\sigma_{2s}, \\sigma_{2s}^*, \\sigma_{2p}, \\pi_{2p}, \\pi_{2p}^*$.',
          solution:
            'Konfigurasi elektron valensi orbital molekul $\\mathrm{NF}$ ($12$ elektron valensi) menempatkan $8$ elektron pada $\\sigma_{2s}^2 (\\sigma_{2s}^*)^2$ dan $\\sigma_{2p}^2 \\pi_{2p}^4$, serta $2$ elektron terakhir pada sepasang orbital degenerat $\\pi_{2p}^*$ (masing-masing $1$ elektron berarah spin sejajar):\n- (I) Salah: $\\mathrm{NF}$ memiliki $2$ elektron tak berpasangan pada $\\pi_{2p}^*$, sehingga bersifat paramagnetik.\n- (II) Benar: Orde ikatan $\\mathrm{NF^+}$ ($11\\ e^-$, $(\\pi^*)^1$) $= 2{,}5$; $\\mathrm{NF}$ ($12\\ e^-$, $(\\pi^*)^2$) $= 2{,}0$; dan $\\mathrm{NF^-}$ ($13\\ e^-$, $(\\pi^*)^3$) $= 1{,}5$. Orde ikatan terendah dimiliki $\\mathrm{NF^-}$, sehingga ikatannya paling panjang.\n- (III) Benar: Pada ketiga spesi ($1$, $2$, dan $3$ elektron di $\\pi_{2p}^*$), orbital terisi tertinggi (HOMO) semuanya adalah $\\pi_{2p}^*$.\n- (IV) Salah: Orde ikatan $\\mathrm{NF}$ adalah $\\dfrac{8 - 4}{2} = 2{,}0$ (bukan $2{,}5$).\nJadi pernyataan yang benar adalah (II) dan (III).',
          rubric: OK
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Sebanyak $50\\text{ cm}^3$ suatu gas yang kemungkinan termasuk golongan alkana, alkena, atau alkuna membutuhkan $325\\text{ cm}^3$ oksigen untuk pembakaran sempurnanya (kedua volume diukur pada $T$ dan $P$ yang sama). Gas tersebut memiliki rumus molekul ....\n\nA. $\\mathrm{C_4H_8}$\nB. $\\mathrm{C_4H_{10}}$\nC. $\\mathrm{C_4H_{14}}$\nD. $\\mathrm{C_8H_{14}}$\nE. $\\mathrm{C_8H_{18}}$',
          answer: 'B. $\\mathrm{C_4H_{10}}$',
          principle:
            'Berdasarkan Hukum Gay-Lussac dan Avogadro pada $T$ dan $P$ yang sama, perbandingan volume gas sama dengan perbandingan koefisien reaksi pembakaran $\\mathrm{C}_x\\mathrm{H}_y + \\left(x + \\dfrac{y}{4}\\right)\\mathrm{O_2} \\rightarrow x\\mathrm{CO_2} + \\dfrac{y}{2}\\mathrm{H_2O}$.',
          solution:
            'Persamaan reaksi pembakaran sempurna hidrokarbon $\\mathrm{C}_x\\mathrm{H}_y$:\n$$\\mathrm{C}_x\\mathrm{H}_y(g) + \\left(x + \\frac{y}{4}\\right)\\mathrm{O_2}(g) \\rightarrow x\\mathrm{CO_2}(g) + \\frac{y}{2}\\mathrm{H_2O}(l).$$\nDari perbandingan volume pada $T$ dan $P$ yang sama:\n$$x + \\frac{y}{4} = \\frac{V_{\\mathrm{O_2}}}{V_{\\mathrm{C}_x\\mathrm{H}_y}} = \\frac{325}{50} = 6{,}5.$$\nUji ketiga deret homolog untuk $x = n$ bilangan bulat:\n- Alkana ($y = 2n + 2$): $n + \\dfrac{2n + 2}{4} = 1{,}5n + 0{,}5 = 6{,}5 \\implies 1{,}5n = 6 \\implies n = 4$ (bilangan bulat, $\\mathrm{C_4H_{10}}$).\n- Alkena ($y = 2n$): $1{,}5n = 6{,}5 \\implies n = \\dfrac{13}{3}$ (bukan bilangan bulat).\n- Alkuna ($y = 2n - 2$): $1{,}5n - 0{,}5 = 6{,}5 \\implies n = \\dfrac{14}{3}$ (bukan bilangan bulat).\nMaka rumus molekul gas tersebut adalah $\\mathrm{C_4H_{10}}$.',
          rubric: OK
        }
      ]
    }
  ]
};
