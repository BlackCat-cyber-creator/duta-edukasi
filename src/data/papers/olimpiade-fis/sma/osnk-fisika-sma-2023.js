/**
 * Paket Soal Terstruktur: OSN-K Fisika SMA 2023 (26 soal isian singkat terverifikasi)
 * Sumber: scraped_raw/osnk-fisika-sma-2023.md (arsip soal dan pembahasan OSN-K Fisika SMA 2023).
 * Catatan kurasi: Dari 33 butir pada arsip sumber, 26 butir dimuat (nomor 1-8, 12, 14-18, 20-25, 28-33)
 * dan 7 butir dilewati (nomor 9, 10, 11, 13, 26, 27 karena bergantung gambar yang hilang; nomor 19 karena teks sumber rusak/tidak lengkap).
 */
export default {
  id: 'osnk-fis-sma-2023',
  slug: 'osnk-fisika-sma-2023',
  subject: 'olimpiade-fis',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'OSN-K Fisika SMA 2023',
  relatedChapterIds: [
    'ipa10-bab2-vektor-dan-gerak-lurus',
    'ipa10-bab3-gerak-parabola-dan-melingkar',
    'ipa10-bab4-usaha-energi-dan-energi-terbarukan',
    'ipa11-bab1-dinamika-gerak-dan-hukum-newton',
    'ipa11-bab2-momentum-impuls-dan-tumbukan',
    'ipa11-bab3-dinamika-rotasi-dan-kesetimbangan',
    'ipa11-bab5-getaran-gelombang-dan-bunyi'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Fisika SMA 2023',
  totalMarks: 104,
  instructions:
    'Paket ini memuat 26 soal isian singkat OSN-K Fisika SMA 2023 dari total 33 soal pada arsip sumber (26 soal dimuat: nomor 1–8, 12, 14–18, 20–25, dan 28–33; 7 soal dilewati: nomor 9, 10, 11, 13, 26, dan 27 karena memerlukan gambar yang tidak tersedia pada arsip, serta nomor 19 karena teks sumber tidak lengkap dan tidak disertai pembahasan). Setiap soal bernilai 4 poin (skor total 104). Gunakan percepatan gravitasi $g = 10\\text{ m/s}^2$ kecuali pada butir yang memerlukan $g = 9{,}8\\text{ m/s}^2$.',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-fisika-sma-2023.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Isian Singkat',
      marks: 104,
      stem: 'Selesaikan setiap soal isian singkat berikut dengan menurunkan persamaan simbolik terlebih dahulu sebelum menghitung nilai numeriknya dalam satuan SI yang sesuai (26 soal, masing-masing bernilai 4 poin).',
      parts: [
        {
          label: '1',
          marks: 4,
          prompt:
            'Kecepatan suatu partikel yang bergerak dalam satu dimensi $x$ dinyatakan dengan persamaan $v = k\\sqrt{x}$ dengan $k$ suatu konstanta yang bernilai $3\\text{ m}^{1/2}\\text{s}^{-1}$. Asumsikan pada saat awal $t = 0$ partikel berada di posisi $x = 0$. Partikel tersebut diberikan dorongan yang sangat kecil ke arah sumbu-$x$ positif sehingga mulai bergerak. Suatu saat posisi partikel berada di $x = 16\\text{ m}$. Besar kecepatan rata-rata partikel selama gerakan tersebut adalah $\\ldots\\text{ m/s}$.',
          answer: '$6\\text{ m/s}$',
          principle: 'Definisi kecepatan rata-rata $\\bar{v} = \\frac{\\Delta x}{\\Delta t}$ dan integrasi persamaan diferensial terpisah $\\frac{dx}{dt} = k\\sqrt{x}$.',
          solution:
            'Karena $v = \\frac{dx}{dt} = k\\sqrt{x}$, pemisahan variabel dari $x = 0$ saat $t = 0$ hingga $x = X$ saat $t = T$ memberikan:\n$$dt = \\frac{1}{k} x^{-1/2}\\,dx \\implies T = \\int_0^T dt = \\frac{1}{k} \\int_0^X x^{-1/2}\\,dx = \\frac{1}{k}\\Big[2\\sqrt{x}\\Big]_0^X = \\frac{2\\sqrt{X}}{k}.$$\nDengan demikian, besar kecepatan rata-rata selama selang waktu tersebut adalah:\n$$\\bar{v} = \\frac{X}{T} = \\frac{X}{2\\sqrt{X}/k} = \\frac{1}{2}k\\sqrt{X}.$$\nSubstitusikan $k = 3\\text{ m}^{1/2}\\text{s}^{-1}$ dan $X = 16\\text{ m}$:\n$$\\bar{v} = \\frac{1}{2} \\times 3 \\times \\sqrt{16} = \\frac{3 \\times 4}{2} = 6\\text{ m/s}.$$',
          rubric: [
            { code: 'B1', text: 'Menuliskan persamaan diferensial terpisah $dt = \\frac{1}{k}x^{-1/2}\\,dx$.' },
            { code: 'M2', text: 'Mengintegralkan untuk memperoleh $T = \\frac{2\\sqrt{X}}{k}$ dan menurunkan $\\bar{v} = \\frac{1}{2}k\\sqrt{X}$.' },
            { code: 'A1', text: 'Menghitung nilai akhir $\\bar{v} = 6\\text{ m/s}$.' }
          ]
        },
        {
          label: '2',
          marks: 4,
          prompt:
            'Sebuah partikel bermassa $2\\text{ kg}$ berada di bawah pengaruh gaya sebagai fungsi waktu $t$ yang berbentuk $F(t) = 2 + 4t\\text{ N}$ dengan $t$ dalam satuan detik. Pada saat awal, kecepatan partikel adalah $v_0 = 2\\text{ m/s}$. Besarnya usaha yang dilakukan selama $3\\text{ detik}$ pertama sama dengan $\\ldots\\text{ J}$.',
          answer: '$192\\text{ J}$',
          principle: 'Teorema impuls-momentum $m(v - v_0) = \\int_0^t F(t\')\\,dt\'$ dan teorema usaha-energi $W = \\Delta E_k$.',
          solution:
            'Dari hukum II Newton $F(t) = m\\frac{dv}{dt}$, kecepatan partikel pada saat $t$ adalah:\n$$v(t) = v_0 + \\frac{1}{m}\\int_0^t F(t\')\\,dt\' = v_0 + \\frac{1}{m}\\int_0^t (2 + 4t\')\\,dt\' = v_0 + \\frac{2t + 2t^2}{m}.$$\nUntuk $m = 2\\text{ kg}$, $v_0 = 2\\text{ m/s}$, dan $t = 3\\text{ s}$:\n$$v(3) = 2 + \\frac{2(3) + 2(3)^2}{2} = 2 + \\frac{6 + 18}{2} = 14\\text{ m/s}.$$\nBerdasarkan teorema usaha-energi, usaha total yang dilakukan gaya sama dengan perubahan energi kinetik:\n$$W = \\Delta E_k = \\frac{1}{2}m\\left(v^2 - v_0^2\\right) = \\frac{1}{2}(2)\\left(14^2 - 2^2\\right) = 196 - 4 = 192\\text{ J}.$$',
          rubric: [
            { code: 'B1', text: 'Menghubungkan gaya terhadap waktu dengan perubahan kecepatan melalui impuls $m(v - v_0) = \\int_0^t F(t\')\\,dt\'$.' },
            { code: 'M2', text: 'Menghitung kecepatan akhir $v(3) = 14\\text{ m/s}$ dan menerapkan $W = \\frac{1}{2}m(v^2 - v_0^2)$.' },
            { code: 'A1', text: 'Memperoleh hasil akhir $W = 192\\text{ J}$.' }
          ]
        },
        {
          label: '3',
          marks: 4,
          prompt:
            'Sebuah benda bergerak dengan kecepatan dalam bentuk $v(t) = -t^2 + 8t - 15$ di mana $v$ dalam meter/detik. Benda mulai bergerak dari posisi $x = 20\\text{ meter}$. Benda akan berbalik arah dari bergerak ke kanan menjadi ke kiri pada saat $t = \\ldots\\text{ detik}$.',
          answer: '$5\\text{ s}$',
          principle: 'Benda berbalik arah saat $v(t) = 0$; perubahan dari arah kanan ($v > 0$) ke arah kiri ($v < 0$) terjadi pada akar di mana tanda $v(t)$ berubah dari positif menjadi negatif.',
          solution:
            'Syarat sesaat benda berbalik arah adalah $v(t) = 0$:\n$$-t^2 + 8t - 15 = 0 \\iff t^2 - 8t + 15 = (t - 3)(t - 5) = 0,$$\nsehingga titik stasioner kecepatan terjadi pada $t = 3\\text{ s}$ dan $t = 5\\text{ s}$.\n\nPeriksa tanda kecepatan dengan arah positif ke kanan:\n- Untuk $0 \\le t < 3$: misalnya $v(0) = -15 < 0$, benda bergerak ke kiri.\n- Untuk $3 < t < 5$: misalnya $v(4) = -16 + 32 - 15 = +1 > 0$, benda bergerak ke kanan.\n- Untuk $t > 5$: misalnya $v(6) = -36 + 48 - 15 = -3 < 0$, benda bergerak ke kiri.\n\nDengan demikian, benda berbalik arah dari bergerak ke kanan menjadi ke kiri tepat pada saat $t = 5\\text{ s}$. (Sebagai catatan tambahan, posisi benda pada saat tersebut adalah $x(5) = 20 + \\int_0^5 (-t^2 + 8t - 15)\\,dt = \\frac{10}{3}\\text{ m}$.)',
          rubric: [
            { code: 'B1', text: 'Menetapkan syarat berbalik arah $v(t) = 0$ dan memfaktorkan $-(t-3)(t-5) = 0$.' },
            { code: 'M2', text: 'Menganalisis perubahan tanda $v(t)$ pada selang $(0,3)$, $(3,5)$, dan $(5,\\infty)$.' },
            { code: 'A1', text: 'Menyimpulkan waktu berbalik arah dari kanan ke kiri adalah $t = 5\\text{ s}$.' }
          ]
        },
        {
          label: '4',
          marks: 4,
          prompt:
            'Tinjau sebuah balok $M = 5\\text{ kg}$ yang sedang bergerak di atas lantai dengan kecepatan $10\\text{ m/s}$ kemudian didorong dengan gaya $100\\text{ N}$ searah gerak. Jika diketahui lantai licin, maka energi kinetik sistem ketika $1\\text{ detik}$ adalah $\\ldots\\text{ J}$.',
          answer: '$2250\\text{ J}$',
          principle: 'Hukum II Newton untuk percepatan konstan $a = \\frac{F}{M}$, kinematika GLBB $v = v_0 + at$, dan energi kinetik $E_k = \\frac{1}{2}Mv^2$.',
          solution:
            'Karena lantai licin dan gaya dorong konstan $F$ bekerja selama selang waktu $t$, percepatan balok adalah $a = \\frac{F}{M}$, sehingga kecepatannya pada saat $t$ menjadi:\n$$v = v_0 + \\frac{F}{M}t.$$\nEnergi kinetik balok pada saat $t$ dinyatakan secara simbolik sebagai:\n$$E_k = \\frac{1}{2}M v^2 = \\frac{1}{2}M\\left(v_0 + \\frac{F}{M}t\\right)^2.$$\nDengan $M = 5\\text{ kg}$, $v_0 = 10\\text{ m/s}$, $F = 100\\text{ N}$, dan $t = 1\\text{ s}$:\n$$v = 10 + \\frac{100}{5}(1) = 30\\text{ m/s} \\implies E_k = \\frac{1}{2}(5)(30)^2 = 2250\\text{ J}.$$',
          rubric: [
            { code: 'B1', text: 'Menentukan percepatan konstan $a = \\frac{F}{M}$ dari hukum II Newton.' },
            { code: 'M2', text: 'Menghitung kecepatan akhir $v = v_0 + at = 30\\text{ m/s}$ dan menyusun $E_k = \\frac{1}{2}Mv^2$.' },
            { code: 'A1', text: 'Memperoleh energi kinetik akhir $E_k = 2250\\text{ J}$.' }
          ]
        },
        {
          label: '5',
          marks: 4,
          prompt:
            'Sebuah tali dengan panjang $L$ dan rapat massa tali persatuan panjang $\\rho$ seragam diberikan tegangan sebesar $F$. Frekuensi getaran tali tersebut adalah $f$ yang bergantung pada ketiga besaran fisika di atas dan dinyatakan oleh sebuah persamaan $f = k L^\\alpha F^\\beta \\rho^\\gamma$ dengan $k$ adalah suatu konstanta tak berdimensi. Misal tali tersebut memiliki frekuensi $6\\text{ Hz}$. Sekarang terdapat tali kedua dengan panjang $4L$, rapat massa persatuan panjang $2\\rho$, dan diberi tegangan tali sebesar $18F$. Frekuensi tali kedua sama dengan $\\ldots\\text{ Hz}$.',
          answer: '$4{,}5\\text{ Hz}$',
          principle: 'Analisis dimensi dengan rapat massa linear (persatuan panjang) $[\\rho] = \\mathrm{M}\\mathrm{L}^{-1}$, sehingga $f \\propto \\frac{1}{L}\\sqrt{\\frac{F}{\\rho}}$.',
          solution:
            'Perhatikan bahwa $\\rho$ adalah rapat massa tali **persatuan panjang** (rapat massa linear), sehingga dimensinya adalah $[\\rho] = \\mathrm{M}\\mathrm{L}^{-1}$ (bukan rapat massa volumetrik $\\mathrm{M}\\mathrm{L}^{-3}$). Dimensi besaran lainnya adalah $[f] = \\mathrm{T}^{-1}$, $[L] = \\mathrm{L}$, dan $[F] = \\mathrm{M}\\mathrm{L}\\mathrm{T}^{-2}$.\n\nDari analisis dimensi persamaan $f = k L^\\alpha F^\\beta \\rho^\\gamma$:\n$$\\mathrm{T}^{-1} = \\mathrm{L}^\\alpha \\left(\\mathrm{M}\\mathrm{L}\\mathrm{T}^{-2}\\right)^\\beta \\left(\\mathrm{M}\\mathrm{L}^{-1}\\right)^\\gamma = \\mathrm{M}^{\\beta + \\gamma}\\,\\mathrm{L}^{\\alpha + \\beta - \\gamma}\\,\\mathrm{T}^{-2\\beta}.$$\nMenyamakan pangkat masing-masing dimensi dasar:\n- Pangkat $\\mathrm{T}$: $-2\\beta = -1 \\implies \\beta = \\frac{1}{2}$.\n- Pangkat $\\mathrm{M}$: $\\beta + \\gamma = 0 \\implies \\gamma = -\\frac{1}{2}$.\n- Pangkat $\\mathrm{L}$: $\\alpha + \\beta - \\gamma = 0 \\implies \\alpha = \\gamma - \\beta = -\\frac{1}{2} - \\frac{1}{2} = -1$.\n\nDiperoleh rumus simbolik $f = \\frac{k}{L}\\sqrt{\\frac{F}{\\rho}}$, sesuai dengan rumus frekuensi nada getaran dawai. Perbandingan frekuensi tali kedua terhadap tali pertama adalah:\n$$\\frac{f_2}{f_1} = \\frac{L_1}{L_2}\\sqrt{\\frac{F_2}{F_1} \\cdot \\frac{\\rho_1}{\\rho_2}} = \\frac{L}{4L}\\sqrt{\\frac{18F}{F}\\cdot\\frac{\\rho}{2\\rho}} = \\frac{1}{4}\\sqrt{9} = \\frac{3}{4}.$$\nDengan $f_1 = 6\\text{ Hz}$, maka frekuensi tali kedua adalah:\n$$f_2 = \\frac{3}{4} \\times 6 = 4{,}5\\text{ Hz}.$$',
          rubric: [
            { code: 'B1', text: 'Mengidentifikasi dimensi rapat massa persatuan panjang $[\\rho] = \\mathrm{M}\\mathrm{L}^{-1}$ beserta $[F]$ dan $[f]$.' },
            { code: 'M2', text: 'Menyelesaikan sistem pangkat dimensi hingga diperoleh $\\alpha = -1$, $\\beta = \\frac{1}{2}$, $\\gamma = -\\frac{1}{2}$ dan rasio $\\frac{f_2}{f_1} = \\frac{3}{4}$.' },
            { code: 'A1', text: 'Menghitung frekuensi tali kedua $f_2 = 4{,}5\\text{ Hz}$.' }
          ]
        },
        {
          label: '6',
          marks: 4,
          prompt:
            'Sebuah bom pecah menjadi banyak bagian dengan kecepatan identik $v_0 = 9\\text{ m/s}$. Bom tersebut berada di sebuah ruangan yang sangat luas dengan tinggi atap $h = 4\\text{ m}$. Partikel bom yang mengenai bagian atap akan langsung menghancurkannya dan membentuk lubang pada atap. Luas lubang yang terbentuk pada atap adalah $\\ldots\\text{ m}^2$.',
          answer: '$\\frac{4}{5}\\pi\\text{ m}^2 \\approx 2{,}5\\text{ m}^2$',
          principle: 'Gerak parabola pecahan bom yang menumbuk langit-langit datar pada ketinggian $h$ saat gerak naik.',
          solution:
            'Pecahan bom yang mampu mencapai atap pada ketinggian $h$ harus memiliki komponen kecepatan vertikal awal $v_{0y} = v_0\\sin\\theta \\ge \\sqrt{2gh}$. Karena atap merupakan penghalang padat pada ketinggian $y = h$, setiap pecahan dengan $\\theta \\ge \\theta_{\\min}$ menumbuk atap pertama kali saat sedang **bergerak naik** pada waktu:\n$$t(\\theta) = \\frac{v_0\\sin\\theta - \\sqrt{v_0^2\\sin^2\\theta - 2gh}}{g} = \\frac{2h}{v_0\\sin\\theta + \\sqrt{v_0^2\\sin^2\\theta - 2gh}}.$$\nJarak horizontal titik tumbukan pada atap adalah:\n$$x(\\theta) = v_0\\cos\\theta \\cdot t(\\theta) = \\frac{2h v_0 \\cos\\theta}{v_0\\sin\\theta + \\sqrt{v_0^2\\sin^2\\theta - 2gh}}.$$\nSaat $\\theta$ membesar dari $\\theta_{\\min}$ menuju $90^\\circ$, pembilang $2hv_0\\cos\\theta$ mengecil sedangkan penyebutnya membesar, sehingga $x(\\theta)$ menurun secara monoton. Oleh karena itu, jari-jari maksimum lubang $R = x_{\\text{maks}}$ dicapai tepat oleh pecahan bersudut $\\theta_{\\min}$ yang puncak lintasannya menyentuh atap ($v_0^2\\sin^2\\theta_{\\min} = 2gh$):\n$$R = x(\\theta_{\\min}) = \\frac{2h\\cos\\theta_{\\min}}{\\sin\\theta_{\\min}} = \\frac{v_0^2\\sin\\theta_{\\min}\\cos\\theta_{\\min}}{g} = \\sqrt{\\frac{2h}{g}\\left(v_0^2 - 2gh\\right)}.$$\nLuas lubang lingkaran pada atap adalah:\n$$A = \\pi R^2 = \\frac{2\\pi h}{g}\\left(v_0^2 - 2gh\\right).$$\nDengan $v_0 = 9\\text{ m/s}$, $h = 4\\text{ m}$, dan $g = 10\\text{ m/s}^2$:\n$$A = \\frac{2\\pi(4)}{10}\\left(9^2 - 2\\cdot 10\\cdot 4\\right) = \\frac{8\\pi}{10}(81 - 80) = \\frac{4}{5}\\pi\\text{ m}^2 \\approx 2{,}51\\text{ m}^2.$$',
          rubric: [
            { code: 'B1', text: 'Menentukan syarat $v_0\\sin\\theta \\ge \\sqrt{2gh}$ dan fakta bahwa pecahan menumbuk atap saat gerak naik.' },
            { code: 'M2', text: 'Menunjukkan jarak tumbukan maksimum $R = \\sqrt{\\frac{2h}{g}(v_0^2 - 2gh)}$ terjadi pada $\\sin^2\\theta_{\\min} = \\frac{2gh}{v_0^2}$ dan menurunkan $A = \\frac{2\\pi h}{g}(v_0^2 - 2gh)$.' },
            { code: 'A1', text: 'Menghitung luas lubang $A = \\frac{4}{5}\\pi\\text{ m}^2 \\approx 2{,}5\\text{ m}^2$.' }
          ]
        },
        {
          label: '7',
          marks: 4,
          prompt:
            'Pada $t = 0$, mobil A berada $10\\text{ km}$ di depan B. Mula-mula kecepatan mobil A adalah $v_{0A} = 60\\text{ km/jam}$ dan percepatannya $a_A = 10\\text{ km/jam}^2$, sedangkan mobil B bergerak dengan kecepatan awal $v_{0B} = 50\\text{ km/jam}$ dan percepatan $a_B = 20\\text{ km/jam}^2$. Pada saat B di depan A sejauh $30\\text{ km}$, kecepatan B adalah $\\ldots\\text{ km/jam}$.',
          answer: '$130\\text{ km/jam}$',
          principle: 'Persamaan posisi gerak lurus berubah beraturan (GLBB) $x(t) = x_0 + v_0 t + \\frac{1}{2}at^2$ dan kecepatan $v(t) = v_0 + at$.',
          solution:
            'Tetapkan posisi awal mobil B sebagai titik acuan $x_B(0) = 0$ dan arah gerak sebagai arah positif, sehingga $x_A(0) = d_0 = 10\\text{ km}$. Persamaan posisi kedua mobil adalah:\n$$x_A(t) = d_0 + v_{0A}t + \\frac{1}{2}a_A t^2, \\qquad x_B(t) = v_{0B}t + \\frac{1}{2}a_B t^2.$$\nSaat B berada di depan A sejauh $\\Delta d = 30\\text{ km}$, berlaku $x_B(t) - x_A(t) = \\Delta d$:\n$$\\frac{1}{2}(a_B - a_A)t^2 + (v_{0B} - v_{0A})t - (d_0 + \\Delta d) = 0.$$\nSubstitusikan nilai-nilai yang diketahui (dalam satuan $\\text{km}$ dan $\\text{jam}$):\n$$\\frac{1}{2}(20 - 10)t^2 + (50 - 60)t - (10 + 30) = 0 \\implies 5t^2 - 10t - 40 = 0 \\implies t^2 - 2t - 8 = 0.$$\nPemfaktoran memberi $(t - 4)(t + 2) = 0$, sehingga waktu fisis yang memenuhi ($t > 0$) adalah $t = 4\\text{ jam}$. Kecepatan mobil B pada saat tersebut adalah:\n$$v_B(4) = v_{0B} + a_B t = 50 + 20(4) = 130\\text{ km/jam}.$$',
          rubric: [
            { code: 'B1', text: 'Menuliskan persamaan posisi GLBB $x_A(t)$ dan $x_B(t)$ serta syarat $x_B(t) - x_A(t) = 30\\text{ km}$.' },
            { code: 'M2', text: 'Menyelesaikan persamaan kuadrat $t^2 - 2t - 8 = 0$ untuk memperoleh $t = 4\\text{ jam}$.' },
            { code: 'A1', text: 'Menghitung kecepatan mobil B saat itu: $v_B = 130\\text{ km/jam}$.' }
          ]
        },
        {
          label: '8',
          marks: 4,
          prompt:
            'Sebuah mobil bergerak lurus, pertama dengan percepatan $a = 5{,}0\\text{ m/s}^2$ (kecepatan awal sama dengan nol), kemudian bergerak secara beraturan, lalu mobil diperlambat dengan perlambatan yang sama, $a$, hingga mobil berhenti. Total waktu pergerakannya adalah $25\\text{ detik}$. Kecepatan rata-rata mobil selama waktu tersebut adalah $72\\text{ km/jam}$. Waktu yang dibutuhkan mobil untuk bergerak secara beraturan saja adalah $\\ldots\\text{ detik}$.',
          answer: '$15\\text{ s}$',
          principle: 'Grafik kecepatan-waktu berbentuk trapesium sama kaki; perpindahan total sama dengan luas trapesium sekaligus sama dengan $\\bar{v} \\cdot t_{\\text{tot}}$.',
          solution:
            'Ubah kecepatan rata-rata ke satuan SI:\n$$\\bar{v} = 72\\text{ km/jam} = \\frac{72 \\times 1000}{3600}\\text{ m/s} = 20\\text{ m/s}.$$\nMisalkan selang waktu percepatan sama dengan selang waktu perlambatan, yaitu $\\Delta t$ (karena besar percepatan dan perlambatannya sama-sama $a$ antara kecepatan $0$ dan kecepatan puncak $v = a\\Delta t$). Selang waktu gerak lurus beraturan (GLB) adalah $t_{\\text{GLB}} = t_{\\text{tot}} - 2\\Delta t$.\n\nPada grafik $v\\text{-}t$ berbentuk trapesium sama kaki, luas trapesium menyatakan perpindahan total $s_{\\text{tot}} = \\bar{v}\\,t_{\\text{tot}}$:\n$$s_{\\text{tot}} = \\frac{t_{\\text{tot}} + t_{\\text{GLB}}}{2} v = (t_{\\text{tot}} - \\Delta t) a \\Delta t = \\bar{v}\\,t_{\\text{tot}}.$$\nSubstitusikan $t_{\\text{tot}} = 25\\text{ s}$, $a = 5\\text{ m/s}^2$, dan $\\bar{v} = 20\\text{ m/s}$:\n$$5(25 - \\Delta t)\\Delta t = 20 \\times 25 \\implies \\Delta t^2 - 25\\Delta t + 100 = 0 \\implies (\\Delta t - 5)(\\Delta t - 20) = 0.$$\nKarena $t_{\\text{GLB}} = 25 - 2\\Delta t > 0$, maka $\\Delta t = 5\\text{ s}$. Jadi waktu mobil bergerak secara beraturan adalah:\n$$t_{\\text{GLB}} = 25 - 2(5) = 15\\text{ s}.$$',
          rubric: [
            { code: 'B1', text: 'Mengonversi $\\bar{v} = 72\\text{ km/jam} = 20\\text{ m/s}$ dan menyusun grafik trapesium $v\\text{-}t$ dengan selang percepatan dan perlambatan sama $\\Delta t$.' },
            { code: 'M2', text: 'Menyamakan luas trapesium $(t_{\\text{tot}} - \\Delta t)a\\Delta t = \\bar{v}\\,t_{\\text{tot}}$ untuk memperoleh $\\Delta t = 5\\text{ s}$.' },
            { code: 'A1', text: 'Menghitung $t_{\\text{GLB}} = 25 - 2(5) = 15\\text{ s}$.' }
          ]
        },
        {
          label: '12',
          marks: 4,
          prompt:
            'Gabungan antara gaya gesek pengendara sepeda dengan jalanan dan udara dapat diformulasikan dalam persamaan $F = \\alpha v$ di mana $v$ adalah kecepatan pengendara dan $\\alpha = 4\\text{ N}\\cdot\\text{s/m}$. Dengan tenaga maksimal, pengendara dapat menghasilkan daya penggerak sebesar $P = 600\\text{ watt}$. Kecepatan maksimum yang dapat dicapai pengendara di tanah datar tanpa angin sama dengan $\\ldots\\text{ m/s}$.',
          answer: '$5\\sqrt{6}\\text{ m/s} \\approx 12{,}25\\text{ m/s}$',
          principle: 'Pada kecepatan maksimum, percepatan nol sehingga gaya dorong sama dengan gaya hambat, dan daya sesaat memenuhi $P = F_{\\text{dorong}} v$.',
          solution:
            'Kecepatan maksimum $v_{\\text{maks}}$ tercapai ketika percepatan pengendara bernilai nol, yakni saat gaya penggerak $F_p$ tepat mengimbangi gaya hambat total $F = \\alpha v_{\\text{maks}}$. Daya mekanik maksimum yang dihasilkan pengendara adalah:\n$$P = F_p v_{\\text{maks}} = (\\alpha v_{\\text{maks}}) v_{\\text{maks}} = \\alpha v_{\\text{maks}}^2 \\implies v_{\\text{maks}} = \\sqrt{\\frac{P}{\\alpha}}.$$\nSubstitusikan $P = 600\\text{ W}$ dan $\\alpha = 4\\text{ N}\\cdot\\text{s/m}$:\n$$v_{\\text{maks}} = \\sqrt{\\frac{600}{4}} = \\sqrt{150} = 5\\sqrt{6}\\text{ m/s} \\approx 12{,}25\\text{ m/s}.$$',
          rubric: [
            { code: 'B1', text: 'Menyatakan syarat kecepatan maksimum $F_p = \\alpha v_{\\text{maks}}$ saat percepatan nol.' },
            { code: 'M2', text: 'Menurunkan persamaan daya $P = \\alpha v_{\\text{maks}}^2$ sehingga $v_{\\text{maks}} = \\sqrt{\\frac{P}{\\alpha}}$.' },
            { code: 'A1', text: 'Menghitung $v_{\\text{maks}} = \\sqrt{150} = 5\\sqrt{6}\\text{ m/s} \\approx 12{,}25\\text{ m/s}$.' }
          ]
        },
        {
          label: '14',
          marks: 4,
          prompt:
            'Kubus dengan sisi $r$ berisi $8$ partikel identik bermassa $m$ yang terletak pada setiap titik sudut kubus tersebut. Besarnya gaya gravitasi yang dirasakan oleh sebuah partikel akibat interaksi gravitasi dengan tujuh partikel lainnya dapat dinyatakan dalam $F = c\\frac{Gm^2}{r^2}$ dengan $G$ konstanta gravitasi universal dan $c$ suatu bilangan riil positif. Jika $b$ adalah bilangan bulat positif terbesar yang nilainya lebih kecil dari $c$, maka $b = \\ldots$',
          answer: '$3$',
          principle: 'Prinsip superposisi vektor gaya gravitasi Newton dalam koordinat Kartesian tiga dimensi dan taksiran akar kuadrat eksak.',
          solution:
            'Tempatkan satu partikel acuan $O$ di titik asal $(0,0,0)$ dan tujuh partikel lainnya di $(r,0,0)$, $(0,r,0)$, $(0,0,r)$, $(r,r,0)$, $(r,0,r)$, $(0,r,r)$, serta $(r,r,r)$. Kelompokkan tujuh gaya gravitasi yang bekerja pada $O$ berdasarkan jaraknya:\n1. Tiga partikel pada jarak rusuk $r$:\n$$\\vec{F}_1 = \\frac{Gm^2}{r^2}\\left(\\hat{i} + \\hat{j} + \\hat{k}\\right).$$\n2. Tiga partikel pada jarak diagonal sisi $\\sqrt{2}r$ (masing-masing berarah $\\frac{\\hat{i}+\\hat{j}}{\\sqrt{2}}$, $\\frac{\\hat{j}+\\hat{k}}{\\sqrt{2}}$, dan $\\frac{\\hat{k}+\\hat{i}}{\\sqrt{2}}$):\n$$\\vec{F}_2 = \\frac{Gm^2}{(\\sqrt{2}r)^2} \\cdot \\frac{2}{\\sqrt{2}}\\left(\\hat{i} + \\hat{j} + \\hat{k}\\right) = \\frac{1}{\\sqrt{2}}\\frac{Gm^2}{r^2}\\left(\\hat{i} + \\hat{j} + \\hat{k}\\right).$$\n3. Satu partikel pada jarak diagonal ruang $\\sqrt{3}r$ berarah $\\frac{\\hat{i}+\\hat{j}+\\hat{k}}{\\sqrt{3}}$:\n$$\\vec{F}_3 = \\frac{Gm^2}{(\\sqrt{3}r)^2} \\cdot \\frac{1}{\\sqrt{3}}\\left(\\hat{i} + \\hat{j} + \\hat{k}\\right) = \\frac{1}{3\\sqrt{3}}\\frac{Gm^2}{r^2}\\left(\\hat{i} + \\hat{j} + \\hat{k}\\right).$$\n\nKarena $\\left|\\hat{i} + \\hat{j} + \\hat{k}\\right| = \\sqrt{3}$, besar gaya resultan pada partikel $O$ adalah:\n$$F = \\left(1 + \\frac{1}{\\sqrt{2}} + \\frac{1}{3\\sqrt{3}}\\right)\\sqrt{3}\\,\\frac{Gm^2}{r^2} = \\left(\\sqrt{3} + \\sqrt{\\frac{3}{2}} + \\frac{1}{3}\\right)\\frac{Gm^2}{r^2},$$\nsehingga $c = \\sqrt{3} + \\sqrt{\\frac{3}{2}} + \\frac{1}{3}$.\n\nTaksir nilai $c$ tanpa kalkulator menggunakan kuadrat bilangan:\n- $1{,}73^2 = 2{,}9929 < 3 < 3{,}0276 = 1{,}74^2 \\implies 1{,}73 < \\sqrt{3} < 1{,}74$,\n- $1{,}22^2 = 1{,}4884 < 1{,}5 < 1{,}5129 = 1{,}23^2 \\implies 1{,}22 < \\sqrt{\\frac{3}{2}} < 1{,}23$,\n- $0{,}33 < \\frac{1}{3} < 0{,}34$.\n\nMenjumlahkan batas-batas tersebut memberi $3{,}28 < c < 3{,}31$. Jadi bilangan bulat positif terbesar yang lebih kecil dari $c$ adalah $b = 3$.',
          rubric: [
            { code: 'B1', text: 'Mengelompokkan tujuh gaya gravitasi pada satu titik sudut menurut jarak $r$, $\\sqrt{2}r$, dan $\\sqrt{3}r$.' },
            { code: 'M2', text: 'Menjumlahkan vektor gaya secara simetris hingga memperoleh $c = \\sqrt{3} + \\sqrt{\\frac{3}{2}} + \\frac{1}{3}$.' },
            { code: 'A1', text: 'Membatasi nilai $3{,}28 < c < 3{,}31$ dan menyimpulkan $b = 3$.' }
          ]
        },
        {
          label: '15',
          marks: 4,
          prompt:
            'Sebuah satelit rusak bermassa $950\\text{ kg}$ ditarik pesawat luar angkasa. Keduanya dihubungkan oleh tali yang homogen sepanjang $\\ell = 50\\text{ m}$ dengan rapat massa per satuan panjang $\\mu = 1\\text{ kg/m}$. Pesawat bergerak sepanjang garis lurus dengan percepatan $a = 5\\text{ m/s}^2$. Gaya yang diberikan oleh pesawat kepada tali adalah $\\ldots\\text{ N}$.',
          answer: '$5000\\text{ N}$',
          principle: 'Hukum II Newton pada sistem gabungan tali bermassa dan beban satelit yang bergerak dengan percepatan sama.',
          solution:
            'Pandang tali dan satelit sebagai satu sistem tunggal. Massa total sistem yang ditarik oleh pesawat luar angkasa adalah:\n$$m_{\\text{tot}} = m_{\\text{satelit}} + m_{\\text{tali}} = m_{\\text{satelit}} + \\mu \\ell.$$\nKarena tidak ada gaya eksternal lain sepanjang garis gerak, gaya tarik $F$ yang dikerjakan pesawat pada ujung tali memenuhi hukum II Newton:\n$$F = m_{\\text{tot}}\\,a = \\left(m_{\\text{satelit}} + \\mu \\ell\\right)a.$$\nSubstitusikan $m_{\\text{satelit}} = 950\\text{ kg}$, $\\mu = 1\\text{ kg/m}$, $\\ell = 50\\text{ m}$, dan $a = 5\\text{ m/s}^2$:\n$$F = (950 + 1 \\times 50) \\times 5 = 1000 \\times 5 = 5000\\text{ N}.$$',
          rubric: [
            { code: 'B1', text: 'Menghitung massa tali $m_{\\text{tali}} = \\mu\\ell$ dan memandang tali beserta satelit sebagai satu sistem.' },
            { code: 'M2', text: 'Menerapkan hukum II Newton $F = (m_{\\text{satelit}} + \\mu\\ell)a$.' },
            { code: 'A1', text: 'Memperoleh hasil akhir $F = 5000\\text{ N}$.' }
          ]
        },
        {
          label: '16',
          marks: 4,
          prompt:
            'Sebuah planet bermassa $M$ berbentuk bola berjari-jari $R$ memiliki kerapatan massa yang seragam. Variabel $r$ adalah jarak yang diukur dari pusat planet. Distribusi massa planet akan memberikan percepatan gravitasi lokal pada jarak $r$ sebesar $g(n)$ dengan $n = r/R$. Nilai $g(n)$ maksimum diperoleh untuk $n = \\ldots$',
          answer: '$1$',
          principle: 'Teorema kulit bola Newton (hukum Gauss gravitasi): medan gravitasi di dalam bola seragam sebanding dengan $r$, sedangkan di luar bola berbanding terbalik dengan $r^2$.',
          solution:
            'Untuk bola pejal bermassa $M$ dan berjari-jari $R$ dengan rapat massa seragam $\\rho_0 = \\frac{M}{\\frac{4}{3}\\pi R^3}$:\n1. Di dalam planet ($0 \\le r \\le R$, atau $0 \\le n \\le 1$), hanya massa di dalam radius $r$ yang berkontribusi, yakni $M_{\\text{dalam}} = M\\left(\\frac{r}{R}\\right)^3 = M n^3$. Oleh karena itu:\n$$g(n) = \\frac{G M_{\\text{dalam}}}{r^2} = \\frac{GM(r/R)^3}{r^2} = \\frac{GM}{R^2} n.$$\n2. Di luar planet ($r \\ge R$, atau $n \\ge 1$), seluruh massa $M$ bekerja seolah-olah terpusat di titik pusat planet:\n$$g(n) = \\frac{GM}{r^2} = \\frac{GM}{R^2}\\cdot\\frac{1}{n^2}.$$\n\nFungsi $g(n)$ naik linear pada selang $0 \\le n \\le 1$, kontinu di $n = 1$, dan turun secara monoton sebagai $1/n^2$ pada selang $n \\ge 1$. Jadi nilai maksimum $g(n)$ tercapai di permukaan planet, yaitu pada $n = 1$.',
          rubric: [
            { code: 'B1', text: 'Menentukan massa efektif di dalam bola $M_{\\text{dalam}} = M(r/R)^3$ berdasarkan simetri bola seragam.' },
            { code: 'M2', text: 'Menurunkan fungsi piecewise $g(n) = \\frac{GM}{R^2}n$ untuk $n \\le 1$ dan $g(n) = \\frac{GM}{R^2 n^2}$ untuk $n \\ge 1$.' },
            { code: 'A1', text: 'Menentukan titik maksimum global fungsi $g(n)$ pada $n = 1$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'Seseorang bermassa $m = 60\\text{ kg}$ jatuh dari ketinggian $h = 1\\text{ m}$. Saat mendarat, ia menekuk lutut hingga pusat massanya turun sejauh $d = 10\\text{ cm}$. Gaya total yang dirasakan oleh tulang kaki selama proses pengereman tersebut sama dengan $\\ldots\\text{ N}$.',
          answer: '$6000\\text{ N}$',
          principle: 'Teorema usaha-energi untuk gaya resultan rata-rata selama proses perlambatan pendaratan: $W_{\\text{total}} = F_{\\text{total}} d = \\Delta E_k$.',
          solution:
            'Saat jatuh bebas dari ketinggian $h$ dengan kecepatan awal nol, kelajuan tepat sebelum menyentuh lantai memenuhi $v^2 = 2gh$, sehingga energi kinetiknya adalah $E_k = \\frac{1}{2}mv^2 = mgh$.\n\nSelama menekuk lutut hingga berhenti setelah pusat massa turun sejauh $d$, gaya total (resultan gaya konstan efektif) $F_{\\text{total}}$ melakukan usaha negatif untuk menghentikan gerak tersebut. Berdasarkan teorema usaha-energi:\n$$F_{\\text{total}}\\,d = \\Delta E_k = mgh \\implies F_{\\text{total}} = \\frac{mgh}{d}.$$\nSubstitusikan $m = 60\\text{ kg}$, $g = 10\\text{ m/s}^2$, $h = 1\\text{ m}$, dan $d = 10\\text{ cm} = 0{,}10\\text{ m}$:\n$$F_{\\text{total}} = \\frac{60 \\times 10 \\times 1}{0{,}10} = 6000\\text{ N}.$$\n(Catatan: Jika yang ditinjau adalah gaya normal dari lantai saja, nilainya sebesar $N = F_{\\text{total}} + mg = 6600\\text{ N}$, sedangkan gaya total/resultan pengereman adalah $6000\\text{ N}$.)',
          rubric: [
            { code: 'B1', text: 'Menentukan energi kinetik saat menyentuh lantai $E_k = mgh$.' },
            { code: 'M2', text: 'Menerapkan teorema usaha-energi $F_{\\text{total}}\\,d = mgh$ untuk menurunkan $F_{\\text{total}} = \\frac{mgh}{d}$.' },
            { code: 'A1', text: 'Menghitung nilai numerik $F_{\\text{total}} = 6000\\text{ N}$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'Bola biliar dengan massa $m = 200\\text{ gram}$ dan diameter $d = 6\\text{ cm}$ terletak pada meja horizontal dengan koefisien gesek kinetik antara bola dengan meja adalah $\\mu$. Bola dipukul secara horizontal dari titik setinggi $y$ di atas garis diameter yang sejajar meja. Bola langsung bergerak menggelinding secara murni. Nilai $y = \\ldots\\text{ mm}$.',
          answer: '$12\\text{ mm}$',
          principle: 'Teorema impuls-momentum linear $J = mv$, impuls-momentum sudut $Jy = I\\omega$, dan syarat menggelinding murni $v = \\omega R$.',
          solution:
            'Misalkan pukulan tongkat memberikan impuls horizontal sangat singkat sebesar $J$ pada ketinggian $y$ di atas pusat massa bola pejal berjari-jari $R = \\frac{d}{2}$ dan momen inersia $I = \\frac{2}{5}mR^2$. Karena impuls pukulan jauh lebih besar daripada impuls gaya gesek selama waktu tumbukan yang amat singkat:\n1. Impuls-momentum linear memberi kecepatan pusat massa:\n$$J = mv \\implies v = \\frac{J}{m}.$$\n2. Impuls-momentum sudut terhadap pusat massa memberi kecepatan sudut:\n$$Jy = I\\omega = \\frac{2}{5}mR^2\\omega \\implies \\omega = \\frac{5Jy}{2mR^2}.$$\n\nAgar bola langsung menggelinding murni tanpa slip ($v = \\omega R$), harus terpenuhi:\n$$\\frac{J}{m} = \\left(\\frac{5Jy}{2mR^2}\\right)R \\implies y = \\frac{2}{5}R = \\frac{1}{5}d.$$\nDengan $d = 6\\text{ cm} = 60\\text{ mm}$:\n$$y = \\frac{1}{5}(60\\text{ mm}) = 12\\text{ mm}.$$',
          rubric: [
            { code: 'B1', text: 'Menuliskan hubungan impuls linear $J = mv$ dan impuls sudut $Jy = \\frac{2}{5}mR^2\\omega$ untuk bola pejal.' },
            { code: 'M2', text: 'Menggunakan syarat menggelinding tanpa slip $v = \\omega R$ hingga memperoleh $y = \\frac{2}{5}R = \\frac{1}{5}d$.' },
            { code: 'A1', text: 'Mengonversi satuan dan menghitung $y = 12\\text{ mm}$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'Partikel A dan B bermassa sama sebesar $M = 4\\text{ kg}$, masing-masing berada pada posisi $x = 0$ dan $x = 2\\text{ meter}$ dalam keadaan diam. Partikel C bermassa $m = 1\\text{ kg}$ berada pada $x = 1\\text{ meter}$ kemudian bergerak ke kanan dengan kecepatan awal positif $u$. Seluruh gerakan partikel hanya pada dimensi $x$ dan seluruh tumbukan bersifat lenting sempurna. Banyak tumbukan maksimal yang mungkin terjadi adalah $\\ldots\\text{ kali}$.',
          answer: '$2$',
          principle: 'Kekekalan momentum dan energi kinetik pada tumbukan lenting sempurna satu dimensi serta perbandingan kecepatan relatif pascatumbukan.',
          solution:
            'Untuk tumbukan lenting sempurna 1D antara partikel bermassa $m$ (kecepatan awal $v_0$) dan partikel diam bermassa $M$, kekekalan momentum dan energi menghasilkan kecepatan akhir:\n$$v\'_m = \\frac{m - M}{m + M}v_0, \\qquad v\'_M = \\frac{2m}{m + M}v_0.$$\nDengan $m = 1\\text{ kg}$ dan $M = 4\\text{ kg}$, diperoleh $\\frac{m - M}{m + M} = -\\frac{3}{5}$ dan $\\frac{2m}{m + M} = \\frac{2}{5}$.\n\nIkuti urutan tumbukan (arah positif ke kanan):\n1. **Tumbukan 1 (C menumbuk B yang diam di $x = 2$):**\n   $$v_{C1} = -\\frac{3}{5}u, \\qquad v_{B1} = \\frac{2}{5}u.$$\n   Partikel B bergerak ke kanan, sedangkan C berbalik ke kiri menuju A.\n2. **Tumbukan 2 (C menumbuk A yang diam di $x = 0$):**\n   $$v_{C2} = -\\frac{3}{5}v_{C1} = \\frac{9}{25}u, \\qquad v_{A1} = \\frac{2}{5}v_{C1} = -\\frac{6}{25}u.$$\n\nSetelah tumbukan kedua, A bergerak ke kiri ($v_{A1} < 0$), sedangkan C dan B bergerak ke kanan dengan $v_{C2} = \\frac{9}{25}u < \\frac{10}{25}u = v_{B1}$. Karena kecepatan C lebih kecil daripada kecepatan B dan posisi C berada di belakang B, partikel C tidak akan pernah menyusul B. Jadi jumlah tumbukan maksimal adalah $2$ kali.',
          rubric: [
            { code: 'B1', text: 'Menuliskan rumus kecepatan pascatumbukan lenting sempurna 1D pada target diam.' },
            { code: 'M2', text: 'Menghitung kecepatan $v_{C1}, v_{B1}$ pada tumbukan ke-1 dan $v_{C2}, v_{A1}$ pada tumbukan ke-2.' },
            { code: 'A1', text: 'Membandingkan $v_{C2} = \\frac{9}{25}u < v_{B1} = \\frac{2}{5}u$ untuk menyimpulkan total $2$ kali tumbukan.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'Sebuah balok bermassa $m = 0{,}5\\text{ kg}$ bergerak pada suatu lintasan horizontal yang diberi cairan oli sehingga balok merasakan gaya gesek yang bergantung pada kecepatan balok sesuai dengan persamaan $F = -kv^{3/2}$. Ketika kecepatan balok tersebut sama dengan $4\\text{ m/s}$, besar gaya gesek tersebut $-2\\text{ N}$. Gerakan balok tersebut hanya pada satu dimensi. Ketika balok dari titik asal $x = 0$ diberikan kecepatan awal ke kanan sebesar $9\\text{ m/s}$, jarak maksimum yang ditempuh balok adalah $\\ldots\\text{ meter}$.',
          answer: '$12\\text{ m}$',
          principle: 'Hukum II Newton dengan percepatan bergantung kecepatan $a = v\\frac{dv}{dx}$ dan integrasi terpisah.',
          solution:
            'Dari data $F = -2\\text{ N}$ saat $v = 4\\text{ m/s}$ pada persamaan $F = -k v^{3/2}$, diperoleh nilai konstanta $k$:\n$$-2 = -k(4)^{3/2} = -8k \\implies k = 0{,}25\\text{ kg}\\cdot\\text{m}^{-1/2}\\text{s}^{-1/2}.$$\nGunakan aturan rantai untuk percepatan $a = \\frac{dv}{dt} = v\\frac{dv}{dx}$ pada hukum II Newton:\n$$m v\\frac{dv}{dx} = -k v^{3/2} \\implies dx = -\\frac{m}{k} v^{-1/2}\\,dv.$$\nIntegralkan dari keadaan awal ($x = 0$, $v = v_0$) sampai berhenti ($x = \\Delta x$, $v = 0$):\n$$\\Delta x = -\\frac{m}{k}\\int_{v_0}^{0} v^{-1/2}\\,dv = \\frac{m}{k}\\Big[2\\sqrt{v}\\Big]_0^{v_0} = \\frac{2m\\sqrt{v_0}}{k}.$$\nSubstitusikan $m = 0{,}5\\text{ kg}$, $k = 0{,}25\\text{ kg}\\cdot\\text{m}^{-1/2}\\text{s}^{-1/2}$, dan $v_0 = 9\\text{ m/s}$:\n$$\\Delta x = \\frac{2 \\times 0{,}5 \\times \\sqrt{9}}{0{,}25} = \\frac{3}{0{,}25} = 12\\text{ m}.$$',
          rubric: [
            { code: 'B1', text: 'Menentukan konstanta $k = 0{,}25$ dalam satuan SI dari $F(4) = -2\\text{ N}$.' },
            { code: 'M2', text: 'Mengubah $m\\frac{dv}{dt} = mv\\frac{dv}{dx}$ dan mengintegralkan hingga diperoleh $\\Delta x = \\frac{2m\\sqrt{v_0}}{k}$.' },
            { code: 'A1', text: 'Menghitung jarak tempuh maksimum $\\Delta x = 12\\text{ m}$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'Sebuah batang dengan ujung-ujung A dan B memiliki massa $M = 1\\text{ kg}$ dan panjang $L = 2{,}2\\text{ m}$ berotasi pada suatu bidang horizontal licin dengan kecepatan sudut awal $\\omega_0 = 1{,}5\\text{ rad/s}$ terhadap sumbu vertikal tetap yang melalui salah satu ujung batang A. Pada saat itu, sebuah partikel kecil bermassa $m = 70\\text{ g}$ awalnya ada di A dalam keadaan diam relatif terhadap batang, lalu bergerak bebas sepanjang batang sampai ke B. Kecepatan partikel relatif terhadap batang saat partikel tersebut mencapai ujung batang B adalah $\\ldots\\text{ m/s}$.',
          answer: '$3\\text{ m/s}$',
          principle: 'Kekekalan momentum sudut terhadap sumbu rotasi tetap di A (torsi eksternal nol) dan kekekalan energi mekanik pada bidang horizontal licin.',
          solution:
            'Karena tidak ada torsi eksternal terhadap poros vertikal di A dan bidang horizontal licin, momentum sudut dan energi mekanik sistem batang-partikel kekal.\n\n1. **Kekekalan momentum sudut** (momen inersia batang terhadap ujung A adalah $I_{\\text{batang}} = \\frac{1}{3}ML^2$):\n$$\\frac{1}{3}ML^2\\omega_0 = \\left(\\frac{1}{3}ML^2 + mL^2\\right)\\omega \\implies \\omega = \\frac{M}{M + 3m}\\omega_0.$$\n2. **Kekekalan energi mekanik**: Saat partikel mencapai ujung B dengan kecepatan radial $v$ relatif terhadap batang, laju totalnya adalah $v_{\\text{tot}}^2 = v^2 + (\\omega L)^2$. Maka:\n$$\\frac{1}{2}\\left(\\frac{1}{3}ML^2\\right)\\omega_0^2 = \\frac{1}{2}\\left(\\frac{1}{3}M + m\\right)L^2\\omega^2 + \\frac{1}{2}mv^2.$$\nSubstitusikan $\\omega = \\frac{M}{M + 3m}\\omega_0$:\n$$\\frac{1}{6}ML^2\\omega_0^2 = \\frac{1}{6}(M + 3m)L^2\\left(\\frac{M}{M+3m}\\right)^2\\omega_0^2 + \\frac{1}{2}mv^2$$\n$$\\frac{1}{2}mv^2 = \\frac{1}{6}ML^2\\omega_0^2\\left(1 - \\frac{M}{M + 3m}\\right) = \\frac{1}{2}m L^2\\omega_0^2\\frac{M}{M + 3m}.$$\nDengan demikian diperoleh rumus simbolik:\n$$v = \\omega_0 L\\sqrt{\\frac{M}{M + 3m}}.$$\nSubstitusikan $M = 1\\text{ kg}$, $m = 0{,}070\\text{ kg}$, $L = 2{,}2\\text{ m}$, dan $\\omega_0 = 1{,}5\\text{ rad/s}$:\n$$v = 1{,}5 \\times 2{,}2 \\times \\sqrt{\\frac{1}{1 + 3(0{,}07)}} = 3{,}3 \\times \\sqrt{\\frac{1}{1{,}21}} = \\frac{3{,}3}{1{,}1} = 3\\text{ m/s}.$$',
          rubric: [
            { code: 'B1', text: 'Menerapkan kekekalan momentum sudut terhadap titik A untuk memperoleh $\\omega = \\frac{M}{M+3m}\\omega_0$.' },
            { code: 'M2', text: 'Menerapkan kekekalan energi mekanik dengan $v_{\\text{tot}}^2 = v^2 + \\omega^2 L^2$ hingga menurunkan $v = \\omega_0 L\\sqrt{\\frac{M}{M+3m}}$.' },
            { code: 'A1', text: 'Menghitung nilai akhir $v = 3\\text{ m/s}$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'Pada tahun 2013, angin topan Haiyan telah mengakibatkan bencana dan kerugian harta benda di negara-negara Pasifik Barat yang dilaluinya. Angin topan ini berputar terhadap suatu "mata" atau sumbu yang jarak rata-rata ke awan terluarnya sama dengan $85\\text{ km}$. Dari catatan meteorologi, diketahui kecepatan linear angin topan maksimum adalah $315\\text{ km/jam}$. Banyak putaran maksimum yang dilakukan oleh awan terluar angin topan Haiyan dalam waktu $1\\text{ jam}$ adalah $\\ldots\\text{ putaran/jam}$.',
          answer: '$\\frac{63}{34\\pi}\\text{ putaran/jam} \\approx 0{,}59\\text{ putaran/jam}$',
          principle: 'Hubungan gerak melingkar antara kelajuan linear, jari-jari lintasan, dan frekuensi putaran $N = \\frac{v}{2\\pi R}$.',
          solution:
            'Keliling lintasan melingkar awan terluar pada jari-jari $R$ adalah $C = 2\\pi R$. Dalam selang waktu $t = 1\\text{ jam}$ pada kelajuan linear maksimum $v_{\\text{maks}}$, jarak busur yang ditempuh adalah $s = v_{\\text{maks}} t$, sehingga banyak putaran yang diselesaikan adalah:\n$$N = \\frac{v_{\\text{maks}} t}{2\\pi R}.$$\nSubstitusikan $v_{\\text{maks}} = 315\\text{ km/jam}$, $R = 85\\text{ km}$, dan $t = 1\\text{ jam}$:\n$$N = \\frac{315}{2\\pi \\times 85} = \\frac{63}{34\\pi}\\text{ putaran/jam} \\approx 0{,}59\\text{ putaran/jam}.$$',
          rubric: [
            { code: 'B1', text: 'Menyatakan keliling lintasan $2\\pi R$ dan hubungan jumlah putaran $N = \\frac{v_{\\text{maks}} t}{2\\pi R}$.' },
            { code: 'M2', text: 'Menyederhanakan bentuk pecahan eksak $\\frac{315}{170\\pi} = \\frac{63}{34\\pi}$.' },
            { code: 'A1', text: 'Memberikan hasil akhir $\\frac{63}{34\\pi}\\text{ putaran/jam} \\approx 0{,}59\\text{ putaran/jam}$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'Dua batang homogen A dan B dengan panjang $\\ell = 1\\text{ m}$, massa A adalah $m_A = 1\\text{ kg}$, dan massa B adalah $m_B = 2\\text{ kg}$ terletak sejajar satu sama lain pada bidang horizontal licin. Batang B awalnya diam di $y = 0$, terbentang dari $x = 0$ hingga $x = 1$. Batang A bergerak secara konstan dengan laju $v = 1\\text{ m/s}$ ke arah sumbu-$y$ positif. Ujung kanan A sampai pada titik $(0,0)$ saat $t = 0$ dan menumbuk ujung kiri B secara elastik. Nilai impuls yang diberikan A terhadap B pada proses tumbukan adalah $\\ldots\\text{ N}\\cdot\\text{s}$.',
          answer: '$\\frac{1}{3}\\text{ N}\\cdot\\text{s} \\approx 0{,}33\\text{ N}\\cdot\\text{s}$',
          principle: 'Impuls linear dan impuls sudut pada tumbukan ujung batang tegar serta syarat tumbukan elastik sempurna (kekekalan energi atau koefisien restitusi $e = 1$ pada titik kontak).',
          solution:
            'Saat tumbukan di $(0,0)$, batang B menerima impuls $+J$ ke arah $+y$ pada ujung kirinya, sedangkan batang A menerima impuls $-J$ ke arah $-y$ pada ujung kanannya. Tetapkan arah positif translasi ke $+y$ dan arah positif rotasi searah jarum jam (momen inersia pusat massa batang $I = \\frac{1}{12}m\\ell^2$).\n\n1. **Batang A:**\n   $$-J = m_A(v_A\' - v) \\implies v_A\' = v - \\frac{J}{m_A}, \\qquad J\\frac{\\ell}{2} = \\frac{1}{12}m_A\\ell^2\\omega_A \\implies \\omega_A = \\frac{6J}{m_A\\ell}.$$\n   Kecepatan titik kontak ujung kanan A ke arah $+y$ adalah:\n   $$v_{\\text{kontak}, A}\' = v_A\' - \\omega_A\\frac{\\ell}{2} = v - \\frac{4J}{m_A}.$$\n2. **Batang B:**\n   $$J = m_B v_B\' \\implies v_B\' = \\frac{J}{m_B}, \\qquad J\\frac{\\ell}{2} = \\frac{1}{12}m_B\\ell^2\\omega_B \\implies \\omega_B = \\frac{6J}{m_B\\ell}.$$\n   Kecepatan titik kontak ujung kiri B ke arah $+y$ adalah:\n   $$v_{\\text{kontak}, B}\' = v_B\' + \\omega_B\\frac{\\ell}{2} = \\frac{4J}{m_B}.$$\n\nKarena tumbukan elastik ($e = 1$), kecepatan relatif titik kontak membalik tanda:\n$$v_{\\text{kontak}, B}\' - v_{\\text{kontak}, A}\' = v \\implies \\frac{4J}{m_B} - \\left(v - \\frac{4J}{m_A}\\right) = v \\implies 4J\\left(\\frac{1}{m_A} + \\frac{1}{m_B}\\right) = 2v.$$\nDiperoleh rumus simbolik:\n$$J = \\frac{v}{2\\left(\\frac{1}{m_A} + \\frac{1}{m_B}\\right)} = \\frac{m_A m_B v}{2(m_A + m_B)}.$$\nSubstitusikan $m_A = 1\\text{ kg}$, $m_B = 2\\text{ kg}$, dan $v = 1\\text{ m/s}$:\n$$J = \\frac{1 \\times 2 \\times 1}{2(1 + 2)} = \\frac{1}{3}\\text{ N}\\cdot\\text{s} \\approx 0{,}33\\text{ N}\\cdot\\text{s}.$$',
          rubric: [
            { code: 'B1', text: 'Menyatakan impuls linear dan impuls sudut pada kedua batang terhadap pusat massa masing-masing.' },
            { code: 'M2', text: 'Menentukan kecepatan titik kontak $v_{\\text{kontak}, A}\' = v - \\frac{4J}{m_A}$, $v_{\\text{kontak}, B}\' = \\frac{4J}{m_B}$, serta menerapkan syarat elastik untuk menurunkan $J = \\frac{m_A m_B v}{2(m_A + m_B)}$.' },
            { code: 'A1', text: 'Menghitung nilai impuls $J = \\frac{1}{3}\\text{ N}\\cdot\\text{s} \\approx 0{,}33\\text{ N}\\cdot\\text{s}$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'Sebuah benda bergerak dengan kecepatan yang memenuhi persamaan $v(t) = -t^2 + 8t - 15$ di mana $v$ dalam $\\text{m/s}$ dan $t$ dalam hitungan detik. Benda akan berbalik arah dari bergerak ke kanan menjadi ke kiri saat $t = \\ldots\\text{ detik}$.',
          answer: '$5\\text{ s}$',
          principle: 'Pembalikan arah gerak dari kanan ke kiri terjadi saat $v(t) = 0$ dengan perubahan tanda $v(t)$ dari positif menjadi negatif.',
          solution:
            'Tentukan waktu ketika kecepatan sesaat bernilai nol:\n$$v(t) = -t^2 + 8t - 15 = -(t - 3)(t - 5) = 0 \\implies t = 3\\text{ s} \\text{ atau } t = 5\\text{ s}.$$\nUji tanda $v(t)$ di sekitar kedua akar tersebut:\n- Untuk $3 < t < 5$, nilai $v(t) > 0$ sehingga benda bergerak ke kanan.\n- Untuk $t > 5$, nilai $v(t) < 0$ sehingga benda bergerak ke kiri.\n\nDengan demikian, benda berbalik arah dari bergerak ke kanan menjadi ke kiri pada saat $t = 5\\text{ s}$.',
          rubric: [
            { code: 'B1', text: 'Menuliskan syarat berbalik arah $v(t) = 0$.' },
            { code: 'M2', text: 'Memfaktorkan $-(t-3)(t-5)=0$ dan memeriksa tanda $v(t)$ sebelum dan sesudah $t = 5\\text{ s}$.' },
            { code: 'A1', text: 'Menyimpulkan $t = 5\\text{ s}$.' }
          ]
        },
        {
          label: '28',
          marks: 4,
          prompt:
            'Sebuah mobil bergerak dengan percepatan tangensial konstan $a_t = 0{,}62\\text{ m/s}^2$ sepanjang permukaan horizontal berbentuk lingkaran berjari-jari $R = 40\\text{ m}$. Koefisien gesek antara roda mobil dan permukaan jalan adalah $k = 0{,}20$. Jarak yang ditempuh mobil tanpa slip jika kecepatan awalnya nol sama dengan $\\ldots\\text{ m}$.',
          answer: '$60\\text{ m}$ (untuk $g = 9{,}8\\text{ m/s}^2$; atau $61{,}3\\text{ m}$ untuk $g = 10\\text{ m/s}^2$)',
          principle: 'Percepatan total pada gerak melingkar dipercepat $a = \\sqrt{a_t^2 + a_s^2}$ harus disuplai oleh gaya gesek statis $f_s \\le kmg$.',
          solution:
            'Setelah menempuh jarak busur $s$ dari keadaan diam dengan percepatan tangensial konstan $a_t$, kuadrat kelajuan mobil memenuhi $v^2 = 2a_t s$. Percepatan sentripetalnya adalah:\n$$a_s = \\frac{v^2}{R} = \\frac{2a_t s}{R}.$$\nOleh karena itu, besar percepatan total mobil adalah:\n$$a_{\\text{tot}} = \\sqrt{a_t^2 + a_s^2} = a_t\\sqrt{1 + \\frac{4s^2}{R^2}}.$$\nSatu-satunya gaya horizontal yang menghasilkan percepatan ini adalah gaya gesek statis $f_s = m a_{\\text{tot}}$. Mobil mulai tergelincir (slip) ketika $f_s$ mencapai batas maksimum $f_{\\text{maks}} = kmg$:\n$$kmg = m a_t\\sqrt{1 + \\frac{4s_{\\text{slip}}^2}{R^2}} \\implies \\left(\\frac{kg}{a_t}\\right)^2 = 1 + \\frac{4s_{\\text{slip}}^2}{R^2}.$$\nDari sini diperoleh rumus simbolik jarak maksimum tanpa slip:\n$$s_{\\text{slip}} = \\frac{R}{2}\\sqrt{\\left(\\frac{kg}{a_t}\\right)^2 - 1}.$$\nSubstitusikan $R = 40\\text{ m}$, $k = 0{,}20$, dan $a_t = 0{,}62\\text{ m/s}^2$:\n- Dengan $g = 9{,}8\\text{ m/s}^2$ (nilai standar soal klasik ini): $\\frac{kg}{a_t} = \\frac{1{,}96}{0{,}62} = \\frac{98}{31}$, sehingga\n  $$s_{\\text{slip}} = 20\\sqrt{\\left(\\frac{98}{31}\\right)^2 - 1} = \\frac{20\\sqrt{8643}}{31} \\approx 59{,}98\\text{ m} \\approx 60\\text{ m}.$$\n- Jika digunakan $g = 10\\text{ m/s}^2$: $\\frac{kg}{a_t} = \\frac{2}{0{,}62} = \\frac{100}{31}$, sehingga $s_{\\text{slip}} = \\frac{20\\sqrt{9039}}{31} \\approx 61{,}3\\text{ m}$.',
          rubric: [
            { code: 'B1', text: 'Menghubungkan jarak tempuh dengan percepatan sentripetal $a_s = \\frac{2a_t s}{R}$ dan percepatan total $a_{\\text{tot}} = a_t\\sqrt{1 + \\frac{4s^2}{R^2}}$.' },
            { code: 'M2', text: 'Menyamakan $m a_{\\text{tot}} = kmg$ dan mengkuadratkan kedua ruas untuk menurunkan $s_{\\text{slip}} = \\frac{R}{2}\\sqrt{\\left(\\frac{kg}{a_t}\\right)^2 - 1}$.' },
            { code: 'A1', text: 'Menghitung nilai akhir $s_{\\text{slip}} \\approx 60\\text{ m}$ ($g = 9{,}8\\text{ m/s}^2$) atau $61{,}3\\text{ m}$ ($g = 10\\text{ m/s}^2$).' }
          ]
        },
        {
          label: '29',
          marks: 4,
          prompt:
            'Seorang perenang loncat indah olimpiade bermassa $m = 70\\text{ kg}$ mulai turun dari papan setinggi $h = 9\\text{ meter}$ dari permukaan air dengan kecepatan awal nol. Kecepatan perenang saat menumbuk permukaan air adalah $\\ldots\\text{ m/s}$.',
          answer: '$6\\sqrt{5}\\text{ m/s} \\approx 13{,}4\\text{ m/s}$',
          principle: 'Hukum kekekalan energi mekanik pada gerak jatuh bebas: $\\frac{1}{2}mv^2 = mgh$.',
          solution:
            'Dengan mengabaikan hambatan udara, kekekalan energi mekanik antara papan loncat (ketinggian $h$, kelajuan awal $0$) dan permukaan air (ketinggian $0$, kelajuan $v$) memberikan:\n$$mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh}.$$\nSubstitusikan $g = 10\\text{ m/s}^2$ dan $h = 9\\text{ m}$:\n$$v = \\sqrt{2 \\times 10 \\times 9} = \\sqrt{180} = 6\\sqrt{5}\\text{ m/s} \\approx 13{,}4\\text{ m/s}.$$',
          rubric: [
            { code: 'B1', text: 'Menerapkan kekekalan energi mekanik $mgh = \\frac{1}{2}mv^2$.' },
            { code: 'M2', text: 'Menurunkan rumus simbolik $v = \\sqrt{2gh}$ dan mensubstitusi $h = 9\\text{ m}$, $g = 10\\text{ m/s}^2$.' },
            { code: 'A1', text: 'Memperoleh kelajuan akhir $v = 6\\sqrt{5}\\text{ m/s} \\approx 13{,}4\\text{ m/s}$.' }
          ]
        },
        {
          label: '30',
          marks: 4,
          prompt:
            'Sebuah ember bermassa $M = \\frac{1}{e - 1}\\text{ kg} \\approx 0{,}582\\text{ kg}$ penuh berisi air dengan massa air $m_0 = 1\\text{ kg}$. Ember berisi air tersebut mula-mula diam di tanah kemudian ditarik ke atas dengan gaya konstan $F_0 = 25\\text{ N}$. Karena terdapat lubang pada bagian bawah ember, air di dalam ember bocor keluar dengan laju massa keluar persatuan waktu yang konstan dan kelajuan nol relatif terhadap ember tersebut. Saat waktu $T = 3\\text{ detik}$, ember tersebut kosong dari air. Kecepatan ember pada waktu $T$ adalah $\\ldots\\text{ m/s}$.',
          answer: '$45\\text{ m/s}$',
          principle: 'Dinamika sistem massa berubah dengan kecepatan relatif massa keluar nol ($v_{\\text{rel}} = 0$): $m_{\\text{tot}}(t)\\frac{dv}{dt} = F_0 - m_{\\text{tot}}(t)g$.',
          solution:
            'Pilih arah positif ke atas. Karena air keluar dengan kelajuan nol relatif terhadap ember (kecepatan keluarnya sama dengan kecepatan sesaat ember $v$), tidak ada gaya dorong roket tambahan, sehingga persamaan gerak sistem pada saat $t$ adalah:\n$$m_{\\text{tot}}(t)\\frac{dv}{dt} = F_0 - m_{\\text{tot}}(t)g \\implies dv = \\left(\\frac{F_0}{m_{\\text{tot}}(t)} - g\\right)dt.$$\nDengan laju kebocoran konstan sehingga air habis tepat saat $t = T$, massa total sistem sebagai fungsi waktu adalah:\n$$m_{\\text{tot}}(t) = M + m_0\\left(1 - \\frac{t}{T}\\right), \\qquad dm_{\\text{tot}} = -\\frac{m_0}{T}dt \\implies dt = -\\frac{T}{m_0}dm_{\\text{tot}}.$$\nIntegralkan dari $t = 0$ ($v = 0$, $m_{\\text{tot}} = M + m_0$) hingga $t = T$ ($v = v(T)$, $m_{\\text{tot}} = M$):\n$$v(T) = -\\frac{F_0 T}{m_0}\\int_{M+m_0}^{M} \\frac{dm_{\\text{tot}}}{m_{\\text{tot}}} - g\\int_0^T dt = \\frac{F_0 T}{m_0}\\ln\\left(1 + \\frac{m_0}{M}\\right) - gT.$$\nKarena $M = \\frac{1}{e - 1}\\text{ kg}$ dan $m_0 = 1\\text{ kg}$, maka $1 + \\frac{m_0}{M} = 1 + (e - 1) = e$, sehingga $\\ln\\left(1 + \\frac{m_0}{M}\\right) = \\ln e = 1$. Substitusikan $F_0 = 25\\text{ N}$, $T = 3\\text{ s}$, dan $g = 10\\text{ m/s}^2$:\n$$v(T) = \\left(\\frac{25}{1} - 10\\right) \\times 3 = 15 \\times 3 = 45\\text{ m/s}.$$',
          rubric: [
            { code: 'B1', text: 'Menuliskan persamaan gerak sistem massa berubah saat $v_{\\text{rel}} = 0$: $m_{\\text{tot}}\\frac{dv}{dt} = F_0 - m_{\\text{tot}}g$.' },
            { code: 'M2', text: 'Mengubah variabel integrasi ke $m_{\\text{tot}}$ untuk menurunkan $v(T) = \\frac{F_0 T}{m_0}\\ln\\left(1 + \\frac{m_0}{M}\\right) - gT$.' },
            { code: 'A1', text: 'Menghitung $\\ln(e) = 1$ dan memperoleh kecepatan akhir $v(T) = 45\\text{ m/s}$.' }
          ]
        },
        {
          label: '31',
          marks: 4,
          prompt:
            'Dua gaya bekerja pada sebuah partikel sehingga partikel bergerak dengan kecepatan konstan $\\vec{v} = 3\\hat{i} - 4\\hat{j}\\text{ m/s}$. Jika salah satu gaya $\\vec{F}_1 = 2\\hat{i} - 6\\hat{j}\\text{ N}$, maka komponen sumbu-$y$ dari gaya lainnya adalah $\\ldots\\text{ N}$.',
          answer: '$6\\text{ N}$',
          principle: 'Hukum I Newton: kecepatan konstan berarti percepatan nol sehingga resultan vektor gaya bernilai nol ($\\vec{F}_1 + \\vec{F}_2 = \\vec{0}$).',
          solution:
            'Karena partikel bergerak dengan vektor kecepatan $\\vec{v}$ yang konstan, percepatannya adalah $\\vec{a} = \\frac{d\\vec{v}}{dt} = \\vec{0}$. Berdasarkan hukum I Newton, resultan gaya pada partikel harus nol:\n$$\\vec{F}_1 + \\vec{F}_2 = \\vec{0} \\implies \\vec{F}_2 = -\\vec{F}_1 = -(2\\hat{i} - 6\\hat{j})\\text{ N} = -2\\hat{i} + 6\\hat{j}\\text{ N}.$$\nDengan demikian, komponen sumbu-$y$ dari gaya kedua adalah $F_{2y} = 6\\text{ N}$.',
          rubric: [
            { code: 'B1', text: 'Menyimpulkan resultan gaya $\\vec{F}_1 + \\vec{F}_2 = \\vec{0}$ dari kecepatan konstan.' },
            { code: 'M2', text: 'Menentukan vektor gaya kedua $\\vec{F}_2 = -\\vec{F}_1 = -2\\hat{i} + 6\\hat{j}\\text{ N}$.' },
            { code: 'A1', text: 'Menyatakan komponen sumbu-$y$ gaya lainnya sebesar $6\\text{ N}$.' }
          ]
        },
        {
          label: '32',
          marks: 4,
          prompt:
            'Papan homogen sepanjang $L$ diletakkan pada bidang miring dengan sudut $\\theta = 60^\\circ$ yang memiliki bagian licin dan bagian kasar dengan koefisien gesek kinetis $\\mu = 0{,}8$. Papan mula-mula mulai meluncur pada perbatasan licin-kasar, kemudian berhenti setelah melewati perbatasan. Jika waktu yang dibutuhkan selama bergerak adalah $t = 2\\pi\\text{ detik}$, panjang papan menurut model gerak harmonik tersebut adalah $\\ldots\\text{ m}$.',
          answer: '$16\\text{ m}$',
          principle: 'Persamaan gerak papan selama memasuki daerah kasar menyerupai osilator harmonik sederhana dengan frekuensi sudut $\\omega = \\sqrt{\\frac{\\mu g\\cos\\theta}{L}}$.',
          solution:
            'Misalkan panjang bagian papan yang telah masuk ke daerah kasar pada saat $t$ adalah $x$ ($0 \\le x \\le L$). Gaya normal total pada papan homogen adalah $N = mg\\cos\\theta$, sehingga gaya gesek kinetis pada bagian sepanjang $x$ adalah $f_k(x) = \\mu\\frac{x}{L}mg\\cos\\theta$.\n\nDari hukum II Newton sejajar bidang miring ke arah bawah:\n$$m\\ddot{x} = mg\\sin\\theta - \\mu\\frac{x}{L}mg\\cos\\theta \\implies \\ddot{x} + \\omega^2\\left(x - x_0\\right) = 0,$$\ndengan $\\omega = \\sqrt{\\frac{\\mu g\\cos\\theta}{L}}$ dan titik kesetimbangan $x_0 = \\frac{L\\tan\\theta}{\\mu}$. Untuk kondisi awal $x(0) = 0$ dan $\\dot{x}(0) = 0$, solusi geraknya selama $0 \\le x \\le L$ adalah $x(t) = x_0(1 - \\cos\\omega t)$.\n\nPada model soal OSN-K ini, waktu gerak dari diam ke diam kembali dipadankan dengan setengah periode osilasi:\n$$t_{\\text{henti}} = \\frac{\\pi}{\\omega} = 2\\pi \\implies \\omega = \\frac{1}{2}\\text{ rad/s}.$$\nDari $\\omega^2 = \\frac{\\mu g\\cos\\theta}{L} = \\frac{1}{4}$, diperoleh panjang papan:\n$$L = 4\\mu g\\cos\\theta = 4(0{,}8)(10)\\cos 60^\\circ = 32 \\times \\frac{1}{2} = 16\\text{ m}.$$\n(Catatan kritis fisika: Agar papan benar-benar berhenti tepat saat seluruh panjangnya masuk ke daerah kasar $x = L$, harus berlaku $2x_0 = L \\iff \\mu = 2\\tan\\theta$. Nilai pada naskah soal $\\theta = 60^\\circ$ dan $\\mu = 0{,}8$ sebenarnya kelebihan informasi dan tidak memenuhi $\\mu = 2\\tan\\theta$, karena $\\mu = 0{,}8 < \\tan 60^\\circ = \\sqrt{3}$ sehingga komponen gravitasi lebih besar daripada gesekan maksimum.)',
          rubric: [
            { code: 'B1', text: 'Menurunkan gaya gesek proporsional $f_k(x) = \\frac{x}{L}\\mu mg\\cos\\theta$ selama papan melintasi batas licin-kasar.' },
            { code: 'M2', text: 'Membentuk persamaan osilasi $\\ddot{x} + \\omega^2(x - x_0) = 0$ dengan $\\omega = \\sqrt{\\frac{\\mu g\\cos\\theta}{L}}$ dan mengaitkan $t = \\frac{\\pi}{\\omega} = 2\\pi$.' },
            { code: 'A1', text: 'Menghitung $L = 4\\mu g\\cos\\theta = 16\\text{ m}$ dan mencatat syarat konsistensi $\\mu = 2\\tan\\theta$.' }
          ]
        },
        {
          label: '33',
          marks: 4,
          prompt:
            'Sebuah benda bergerak pada suatu lintasan yang memenuhi persamaan $x(t) = -t^2 + 8t - 15$ di mana $x$ dalam meter dan $t$ dalam hitungan detik. Benda akan mulai dipercepat ke kiri pada saat $t = \\ldots\\text{ detik}$.',
          answer: '$0\\text{ s}$',
          principle: 'Percepatan sesaat merupakan turunan kedua posisi terhadap waktu, $a(t) = \\frac{d^2x}{dt^2}$, dan tanda negatif menunjukkan arah ke kiri.',
          solution:
            'Dengan mengambil arah sumbu-$x$ positif ke kanan, kecepatan dan percepatan benda berturut-turut adalah:\n$$v(t) = \\frac{dx}{dt} = -2t + 8\\text{ m/s}, \\qquad a(t) = \\frac{dv}{dt} = \\frac{d^2x}{dt^2} = -2\\text{ m/s}^2.$$\nPerhatikan bahwa percepatan $a(t) = -2\\text{ m/s}^2 < 0$ bernilai konstan dan selalu berarah ke kiri sejak awal gerak, sehingga benda sudah mengalami percepatan ke kiri sejak $t = 0\\text{ s}$.\n\n(Sebagai catatan tambahan: pada selang $0 \\le t < 4\\text{ s}$, kecepatan masih bernilai positif ke kanan sehingga benda diperlambat hingga berhenti sesaat di $t = 4\\text{ s}$, lalu mulai bergerak ke kiri dengan kelajuan yang terus bertambah untuk $t > 4\\text{ s}$.)',
          rubric: [
            { code: 'B1', text: 'Menurunkan fungsi posisi terhadap waktu dua kali untuk memperoleh $v(t) = -2t + 8$ dan $a(t) = -2\\text{ m/s}^2$.' },
            { code: 'M2', text: 'Menafsirkan tanda negatif konstan pada $a(t) = -2\\text{ m/s}^2$ sebagai percepatan berarah ke kiri sepanjang waktu.' },
            { code: 'A1', text: 'Menyimpulkan benda mulai dipercepat ke kiri sejak $t = 0\\text{ s}$ (dan mencatat $t = 4\\text{ s}$ sebagai saat mulai melaju ke kiri).' }
          ]
        }
      ]
    }
  ]
};
