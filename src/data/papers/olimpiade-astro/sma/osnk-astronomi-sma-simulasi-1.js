/**
 * Paket Soal Terstruktur: Simulasi OSN-K Astronomi SMA — Paket 1
 * Sumber: Kurasi asli Tim Akademik Duta e-dukasi (12 Pilihan Ganda @ 1 poin + 3 Isian Numerik @ 2 poin = 18 poin).
 */
const OK_PG = [{ code: 'A1', text: 'Jawaban pilihan ganda tepat sesuai pembahasan.' }];

export default {
  id: 'osnk-astro-sma-simulasi-1',
  slug: 'osnk-astronomi-sma-simulasi-1',
  subject: 'olimpiade-astro',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic:
    'Simulasi OSN-K Astronomi SMA: mekanika orbit Kepler, hukum gravitasi, paralaks, magnitudo bintang, radiasi benda hitam, dan bola langit',
  relatedChapterIds: [
    'ipa10-bab3-gerak-parabola-dan-melingkar',
    'ipa10-bab4-usaha-energi-dan-energi-terbarukan',
    'ipa11-bab1-dinamika-gerak-dan-hukum-newton',
    'sma10-bab4-trigonometri'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'Simulasi OSN-K Astronomi SMA \u2014 Paket 1',
  totalMarks: 18,
  instructions:
    'Paket simulasi ini terdiri atas 15 soal orisinal tingkat OSN-K Astronomi SMA: 12 soal Pilihan Ganda pada Bagian A (masing-masing bernilai 1 poin) dan 3 soal Isian Numerik pada Bagian B (masing-masing bernilai 2 poin; total 18 poin). Kecuali dinyatakan lain, gunakan $1\\ \\text{pc} = 3{,}26\\ \\text{tahun cahaya}$, kecepatan orbit Bumi $v_\\oplus = 29{,}8\\ \\text{km/s}$, konstanta Stefan\u2013Boltzmann $\\sigma = 5{,}67 \\times 10^{-8}\\ \\text{W m}^{-2}\\text{K}^{-4}$, konstanta Wien $b = 2{,}898 \\times 10^{-3}\\ \\text{m}\\cdot\\text{K}$, konstanta Matahari $S_0 = 1361\\ \\text{W/m}^2$, dan $T_\\odot = 5780\\ \\text{K}$. Untuk soal Bagian B, tuliskan nilai numerik hingga satu angka di belakang koma.',
  source: {
    org: 'Tim Akademik Duta e-dukasi',
    file: 'original-curated-batch-9',
    license: 'Hak cipta materi kurasi asli Duta e-dukasi'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Soal Pilihan Ganda',
      marks: 12,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (nomor 1\u201312, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-astro-sma-simulasi-1/fig-1.svg',
              alt: 'Diagram orbit elips sebuah planet mengelilingi bintang induk M di titik fokus F1 dengan jarak perihelion r_p, jarak aphelion r_a, dan setengah sumbu panjang a.',
              caption: 'Geometri lintasan orbit elips planet mengelilingi bintang bermassa M.'
            }
          ],
          prompt:
            'Perhatikan skema orbit elips pada gambar. Sebuah eksoplanet bermassa jauh lebih kecil daripada bintang induknya mengorbit bintang bermassa $M = 0{,}50\\ M_\\odot$. Jika jarak perihelion planet $r_p = 0{,}70\\ \\text{AU}$ dan jarak aphelionnya $r_a = 3{,}30\\ \\text{AU}$, periode orbit eksoplanet tersebut adalah $\\cdots$\n\nA. $1{,}41\\ \\text{tahun}$\nB. $2{,}00\\ \\text{tahun}$\nC. $2{,}83\\ \\text{tahun}$\nD. $4{,}00\\ \\text{tahun}$\nE. $8{,}00\\ \\text{tahun}$',
          answer: 'D. $4{,}00\\ \\text{tahun}$',
          principle:
            'Hukum III Kepler bentuk Newton menghubungkan periode orbit $P$ (tahun), setengah sumbu panjang $a = \\frac{r_p + r_a}{2}$ (AU), dan massa total sistem $M_{\\text{tot}}$ ($M_\\odot$): $P^2 = \\frac{a^3}{M_{\\text{tot}}}$.',
          solution:
            'Tentukan terlebih dahulu setengah sumbu panjang $a$ dari jarak perihelion dan aphelion:\n$$a = \\frac{r_p + r_a}{2} = \\frac{0{,}70 + 3{,}30}{2} = 2{,}00\\ \\text{AU}.$$\n\nKarena massa eksoplanet dapat diabaikan terhadap massa bintang induk, massa total sistem adalah $M_{\\text{tot}} \\approx M = 0{,}50\\ M_\\odot$. Dengan Hukum III Kepler dalam satuan astronomi (AU, tahun, $M_\\odot$):\n$$P = \\sqrt{\\frac{a^3}{M / M_\\odot}} = \\sqrt{\\frac{(2{,}00)^3}{0{,}50}} = \\sqrt{\\frac{8{,}00}{0{,}50}} = \\sqrt{16} = 4{,}00\\ \\text{tahun}.$$',
          rubric: OK_PG
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Sebuah komet bergerak mengorbit Matahari pada lintasan elips dengan eksentrisitas $e = 0{,}60$. Apabila kelajuan komet ketika berada di titik aphelion adalah $v_a = 12{,}0\\ \\text{km/s}$, maka kelajuan komet saat melintas di titik perihelion adalah $\\cdots$\n\nA. $19{,}2\\ \\text{km/s}$\nB. $24{,}0\\ \\text{km/s}$\nC. $30{,}0\\ \\text{km/s}$\nD. $36{,}0\\ \\text{km/s}$\nE. $48{,}0\\ \\text{km/s}$',
          answer: 'E. $48{,}0\\ \\text{km/s}$',
          principle:
            'Hukum II Kepler (kekekalan momentum sudut orbit) menyatakan bahwa $r_p v_p = r_a v_a$, dengan $r_p = a(1 - e)$ dan $r_a = a(1 + e)$.',
          solution:
            'Pada titik aphelion dan perihelion, vektor kecepatan tegak lurus terhadap vektor posisi dari Matahari, sehingga kekekalan momentum sudut spesifik memberikan:\n$$r_p v_p = r_a v_a \\implies v_p = \\left(\\frac{r_a}{r_p}\\right) v_a.$$\n\nDengan definisi jarak aphelion $r_a = a(1 + e)$ dan perihelion $r_p = a(1 - e)$:\n$$v_p = \\left(\\frac{1 + e}{1 - e}\\right) v_a = \\left(\\frac{1 + 0{,}60}{1 - 0{,}60}\\right) \\times 12{,}0 = \\frac{1{,}60}{0{,}40} \\times 12{,}0 = 4 \\times 12{,}0 = 48{,}0\\ \\text{km/s}.$$',
          rubric: OK_PG
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Sebuah eksoplanet berbatu diketahui memiliki massa $M = 9\\ M_\\oplus$ dan jari-jari $R = 4\\ R_\\oplus$. Jika kecepatan lepas dari permukaan Bumi adalah $v_{e,\\oplus} = 11{,}2\\ \\text{km/s}$, maka kecepatan lepas dari permukaan eksoplanet tersebut adalah $\\cdots$\n\nA. $14{,}0\\ \\text{km/s}$\nB. $16{,}8\\ \\text{km/s}$\nC. $22{,}4\\ \\text{km/s}$\nD. $25{,}2\\ \\text{km/s}$\nE. $33{,}6\\ \\text{km/s}$',
          answer: 'B. $16{,}8\\ \\text{km/s}$',
          principle:
            'Kecepatan lepas dari permukaan benda langit bermassa $M$ dan berjari-jari $R$ memenuhi $v_e = \\sqrt{\\frac{2GM}{R}} \\propto \\sqrt{\\frac{M}{R}}$.',
          solution:
            'Dari kekekalan energi mekanik untuk mencapai jarak tak hingga dengan energi kinetik nol, diperoleh:\n$$v_e = \\sqrt{\\frac{2GM}{R}}.$$\n\nBandingkan dengan kecepatan lepas Bumi:\n$$\\frac{v_e}{v_{e,\\oplus}} = \\sqrt{\\frac{M / M_\\oplus}{R / R_\\oplus}} = \\sqrt{\\frac{9}{4}} = \\frac{3}{2} = 1{,}5.$$\n\nMaka kecepatan lepas dari permukaan eksoplanet tersebut adalah:\n$$v_e = 1{,}5 \\times 11{,}2\\ \\text{km/s} = 16{,}8\\ \\text{km/s}.$$',
          rubric: OK_PG
        },
        {
          label: '4',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-astro-sma-simulasi-1/fig-2.svg',
              alt: 'Diagram paralaks trigonometri bintang B yang diamati dari dua posisi orbit Bumi E1 dan E2 yang terpisah enam bulan mengelilingi Matahari S dengan sudut paralaks p dan pergeseran total 2p.',
              caption: 'Geometri pengukuran paralaks trigonometri bintang B dari garis dasar orbit Bumi.'
            }
          ],
          prompt:
            'Berdasarkan skema pengukuran paralaks pada gambar, suatu bintang dekat B diamati pada dua posisi orbit Bumi yang terpisah selang waktu $6$ bulan ($E_1$ dan $E_2$). Pergeseran sudut total yang terukur terhadap bintang latar belakang jauh adalah $2p = 0{,}16\\ \\text{detik busur}$. Jika $1\\ \\text{pc} = 3{,}26\\ \\text{tahun cahaya}$, jarak bintang B dari Matahari adalah $\\cdots$\n\nA. $12{,}50\\ \\text{tahun cahaya}$\nB. $20{,}38\\ \\text{tahun cahaya}$\nC. $40{,}75\\ \\text{tahun cahaya}$\nD. $52{,}16\\ \\text{tahun cahaya}$\nE. $81{,}50\\ \\text{tahun cahaya}$',
          answer: 'C. $40{,}75\\ \\text{tahun cahaya}$',
          principle:
            'Sudut paralaks tahunan $p$ didefinisikan berdasarkan setengah garis dasar orbit Bumi ($1\\ \\text{AU}$), sehingga jarak bintang dalam parsec memenuhi $d(\\text{pc}) = \\frac{1}{p(\\text{arcsec})}$.',
          solution:
            'Karena sudut yang diukur antara dua posisi berlawanan ($E_1$ dan $E_2$) adalah $2p = 0{,}16^{\\prime\\prime}$, sudut paralaks tahunannya adalah:\n$$p = \\frac{0{,}16^{\\prime\\prime}}{2} = 0{,}08^{\\prime\\prime}.$$\n\nJarak bintang dalam parsec adalah:\n$$d = \\frac{1}{p} = \\frac{1}{0{,}08} = 12{,}5\\ \\text{pc}.$$\n\nKonversikan ke satuan tahun cahaya:\n$$d = 12{,}5 \\times 3{,}26 = 40{,}75\\ \\text{tahun cahaya}.$$',
          rubric: OK_PG
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Sebuah teleskop mengamati suatu sistem kompak yang terdiri atas $5$ bintang identik yang masing-masing memiliki magnitudo semu $m = 5{,}00$. Jika kelima bintang tidak dapat dipisahkan secara optis dan ekstingsi antarbintang diabaikan (gunakan $\\log_{10} 5 \\approx 0{,}699$), magnitudo semu gabungan sistem tersebut adalah $\\cdots$\n\nA. $1{,}00$\nB. $2{,}50$\nC. $3{,}25$\nD. $4{,}30$\nE. $6{,}75$',
          answer: 'C. $3{,}25$',
          principle:
            'Fluks total dari sumber gabungan bersifat aditif ($F_{\\text{tot}} = \\sum F_i$), sedangkan hubungan magnitudo mengikuti persamaan Pogson $\\Delta m = -2{,}5\\log_{10}(F_{\\text{tot}}/F_1)$.',
          solution:
            'Jika fluks satu bintang adalah $F_1$, maka fluks total dari $N = 5$ bintang identik adalah $F_{\\text{tot}} = 5 F_1$.\n\nBerdasarkan rumus Pogson:\n$$m_{\\text{tot}} - m_1 = -2{,}5\\log_{10}\\left(\\frac{F_{\\text{tot}}}{F_1}\\right) = -2{,}5\\log_{10}(5).$$\n\nSubstitusi $m_1 = 5{,}00$ dan $\\log_{10} 5 \\approx 0{,}699$:\n$$m_{\\text{tot}} = 5{,}00 - 2{,}5(0{,}699) = 5{,}00 - 1{,}7475 \\approx 3{,}25.$$',
          rubric: OK_PG
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Sebuah bintang memiliki magnitudo semu visual $m_V = 10{,}5$ dan magnitudo mutlak visual $M_V = 2{,}5$. Apabila cahaya bintang tersebut mengalami ekstingsi antarbintang sebesar $A_V = 1{,}0\\ \\text{mag}$ sepanjang garis pandang, jarak bintang tersebut dari pengamat (dengan $10^{0{,}4} \\approx 2{,}512$) adalah sekitar $\\cdots$\n\nA. $100\\ \\text{pc}$\nB. $158\\ \\text{pc}$\nC. $251\\ \\text{pc}$\nD. $398\\ \\text{pc}$\nE. $631\\ \\text{pc}$',
          answer: 'C. $251\\ \\text{pc}$',
          principle:
            'Persamaan modulus jarak dengan koreksi ekstingsi antarbintang: $m_V - M_V = 5\\log_{10}(d/10\\ \\text{pc}) + A_V$.',
          solution:
            'Dari persamaan modulus jarak yang memperhitungkan ekstingsi $A_V$:\n$$m_V - M_V - A_V = 5\\log_{10}\\left(\\frac{d}{10\\ \\text{pc}}\\right).$$\n\nSubstitusi $m_V = 10{,}5$, $M_V = 2{,}5$, dan $A_V = 1{,}0$:\n$$10{,}5 - 2{,}5 - 1{,}0 = 7{,}0 = 5\\log_{10}\\left(\\frac{d}{10}\\right) \\implies \\log_{10}\\left(\\frac{d}{10}\\right) = 1{,}4.$$\n\nDengan demikian:\n$$d = 10 \\times 10^{1{,}4} = 10^2 \\times 10^{0{,}4} \\approx 100 \\times 2{,}512 \\approx 251\\ \\text{pc}.$$',
          rubric: OK_PG
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Sebuah bintang raksasa merah yang dianggap sebagai benda hitam sempurna memiliki temperatur efektif permukaan $T = 3450\\ \\text{K}$. Panjang gelombang puncak intensitas radiasi spektrum bintang tersebut adalah $\\cdots$\n\nA. $420\\ \\text{nm}$\nB. $580\\ \\text{nm}$\nC. $725\\ \\text{nm}$\nD. $840\\ \\text{nm}$\nE. $960\\ \\text{nm}$',
          answer: 'D. $840\\ \\text{nm}$',
          principle:
            'Hukum Pergeseran Wien menyatakan bahwa panjang gelombang puncak radiasi benda hitam berbanding terbalik dengan temperatur mutlaknya: $\\lambda_{\\text{maks}} T = b$.',
          solution:
            'Gunakan Hukum Pergeseran Wien dengan $b = 2{,}898 \\times 10^{-3}\\ \\text{m}\\cdot\\text{K}$ dan $T = 3450\\ \\text{K}$:\n$$\\lambda_{\\text{maks}} = \\frac{b}{T} = \\frac{2{,}898 \\times 10^{-3}\\ \\text{m}\\cdot\\text{K}}{3450\\ \\text{K}} = 8{,}40 \\times 10^{-7}\\ \\text{m}.$$\n\nKonversikan ke nanometer ($1\\ \\text{nm} = 10^{-9}\\ \\text{m}$):\n$$\\lambda_{\\text{maks}} = 840\\ \\text{nm}.$$',
          rubric: OK_PG
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Bintang $X$ memiliki temperatur efektif $T_X = 0{,}50\\ T_\\odot$ dan luminositas bolometrik $L_X = 100\\ L_\\odot$. Jika bintang $X$ dan Matahari diasumsikan memancarkan radiasi sebagai benda hitam sempurna berbentuk bola, perbandingan jari-jari bintang $X$ terhadap jari-jari Matahari ($R_X / R_\\odot$) adalah $\\cdots$\n\nA. $5$\nB. $10$\nC. $20$\nD. $40$\nE. $80$',
          answer: 'D. $40$',
          principle:
            'Hukum Stefan\u2013Boltzmann untuk bintang bola berjari-jari $R$ dan bertemperatur efektif $T$: $L = 4\\pi R^2 \\sigma T^4$.',
          solution:
            'Dari Hukum Stefan\u2013Boltzmann, perbandingan luminositas bintang $X$ terhadap Matahari adalah:\n$$\\frac{L_X}{L_\\odot} = \\left(\\frac{R_X}{R_\\odot}\\right)^2 \\left(\\frac{T_X}{T_\\odot}\\right)^4.$$\n\nSelesaikan untuk perbandingan jari-jari:\n$$\\frac{R_X}{R_\\odot} = \\sqrt{\\frac{L_X}{L_\\odot}} \\left(\\frac{T_\\odot}{T_X}\\right)^2.$$\n\nSubstitusi $L_X / L_\\odot = 100$ dan $T_X / T_\\odot = 0{,}50$:\n$$\\frac{R_X}{R_\\odot} = \\sqrt{100} \\times \\left(\\frac{1}{0{,}50}\\right)^2 = 10 \\times 2^2 = 40.$$',
          rubric: OK_PG
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Seorang pengamat berada pada lintang geografis $\\phi = 6^\\circ\\ \\text{LS}$ dan mengamati sebuah bintang yang memiliki deklinasi $\\delta = +24^\\circ$. Tinggi (altitudo) maksimum bintang tersebut di atas horizon saat berkulminasi atas di meridian pengamat adalah $\\cdots$\n\nA. $30^\\circ$\nB. $48^\\circ$\nC. $60^\\circ$\nD. $72^\\circ$\nE. $84^\\circ$',
          answer: 'C. $60^\\circ$',
          principle:
            'Pada saat kulminasi atas di meridian, jarak zenit bintang adalah $z = |\\phi - \\delta|$ (dengan konvensi lintang selatan bernilai negatif), sehingga altitudonya $h = 90^\\circ - z$.',
          solution:
            'Dengan konvensi lintang utara positif dan lintang selatan negatif, posisi pengamat berada pada $\\phi = -6^\\circ$, yang juga merupakan deklinasi titik zenit pengamat ($\\delta_Z = -6^\\circ$).\n\nJarak zenit bintang saat berkulminasi atas di meridian adalah:\n$$z = |\\phi - \\delta| = |-6^\\circ - (+24^\\circ)| = 30^\\circ.$$\n\nKarena bintang berada di sebelah utara zenit dengan jarak zenit $30^\\circ$, altitudo maksimumnya di atas horizon utara adalah:\n$$h = 90^\\circ - z = 90^\\circ - 30^\\circ = 60^\\circ.$$',
          rubric: OK_PG
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Sebuah bintang memiliki asensio rekta $\\alpha = 22^{\\text{h}}\\,40^{\\text{m}}$. Pada suatu malam pengamatan, bintang tersebut teramati berada pada sudut jam (*hour angle*) $HA = +3^{\\text{h}}\\,35^{\\text{m}}$ di sebelah barat meridian langit. Waktu bintang lokal (*Local Sidereal Time*, LST) pada saat pengamatan tersebut adalah $\\cdots$\n\nA. $01^{\\text{h}}\\,15^{\\text{m}}$\nB. $02^{\\text{h}}\\,15^{\\text{m}}$\nC. $19^{\\text{h}}\\,05^{\\text{m}}$\nD. $21^{\\text{h}}\\,15^{\\text{m}}$\nE. $23^{\\text{h}}\\,55^{\\text{m}}$',
          answer: 'B. $02^{\\text{h}}\\,15^{\\text{m}}$',
          principle:
            'Hubungan dasar tata koordinat ekuator dan waktu bintang lokal adalah $\\text{LST} = (\\alpha + HA) \\bmod 24^{\\text{h}}$.',
          solution:
            'Sudut jam $HA$ suatu bintang memenuhi hubungan:\n$$HA = \\text{LST} - \\alpha \\implies \\text{LST} = \\alpha + HA.$$\n\nSubstitusi $\\alpha = 22^{\\text{h}}\\,40^{\\text{m}}$ dan $HA = +3^{\\text{h}}\\,35^{\\text{m}}$:\n$$\\text{LST} = 22^{\\text{h}}\\,40^{\\text{m}} + 3^{\\text{h}}\\,35^{\\text{m}} = 25^{\\text{h}}\\,75^{\\text{m}} = 26^{\\text{h}}\\,15^{\\text{m}}.$$\n\nKarena satu hari sideris berperiode $24^{\\text{h}}$, kurangkan $24^{\\text{h}}$:\n$$\\text{LST} = 26^{\\text{h}}\\,15^{\\text{m}} - 24^{\\text{h}}\\,00^{\\text{m}} = 02^{\\text{h}}\\,15^{\\text{m}}.$$',
          rubric: OK_PG
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Sebuah asteroid bergerak mengelilingi Matahari dalam orbit melingkar sebidang dengan Bumi pada jarak $a = 4{,}00\\ \\text{AU}$. Dengan periode orbit Bumi $P_\\oplus = 1{,}00\\ \\text{tahun}$, selang waktu antara dua peristiwa oposisi berurutan asteroid tersebut dilihat dari Bumi (periode sinodis) adalah $\\cdots$\n\nA. $0{,}89\\ \\text{tahun}$\nB. $1{,}00\\ \\text{tahun}$\nC. $1{,}14\\ \\text{tahun}$\nD. $1{,}33\\ \\text{tahun}$\nE. $8{,}00\\ \\text{tahun}$',
          answer: 'C. $1{,}14\\ \\text{tahun}$',
          principle:
            'Tentukan periode sideris asteroid melalui Hukum III Kepler ($P = a^{3/2}$), lalu hitung periode sinodis planet superior dengan $\\frac{1}{S} = \\frac{1}{P_\\oplus} - \\frac{1}{P}$.',
          solution:
            'Pertama, hitung periode sideris asteroid mengelilingi Matahari menggunakan Hukum III Kepler:\n$$P = a^{3/2} = (4{,}00)^{3/2} = 8{,}00\\ \\text{tahun}.$$\n\nKarena $P > P_\\oplus$ (asteroid berada di luar orbit Bumi), periode sinodis $S$ memenuhi:\n$$\\frac{1}{S} = \\frac{1}{P_\\oplus} - \\frac{1}{P} = \\frac{1}{1{,}00} - \\frac{1}{8{,}00} = \\frac{7}{8}\\ \\text{tahun}^{-1}.$$\n\nDengan demikian, periode sinodis asteroid adalah:\n$$S = \\frac{8}{7} \\approx 1{,}14\\ \\text{tahun}.$$',
          rubric: OK_PG
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Sebuah wahana antariksa ditempatkan pada orbit elips heliosentris dengan setengah sumbu panjang $a = 2{,}00\\ \\text{AU}$. Jika kelajuan orbit Bumi (orbit dianggap lingkaran berjari-jari $1{,}00\\ \\text{AU}$) adalah $v_\\oplus = 29{,}8\\ \\text{km/s}$, kelajuan wahana saat melintas pada jarak $r = 1{,}00\\ \\text{AU}$ dari Matahari adalah sekitar $\\cdots$\n\nA. $21{,}1\\ \\text{km/s}$\nB. $29{,}8\\ \\text{km/s}$\nC. $36{,}5\\ \\text{km/s}$\nD. $42{,}1\\ \\text{km/s}$\nE. $51{,}6\\ \\text{km/s}$',
          answer: 'C. $36{,}5\\ \\text{km/s}$',
          principle:
            'Persamaan *vis-viva* menyatakan kelajuan orbit $v^2 = GM_\\odot\\left(\\frac{2}{r} - \\frac{1}{a}\\right)$, dengan $v_\\oplus^2 = \\frac{GM_\\odot}{1\\ \\text{AU}}$.',
          solution:
            'Dari kekekalan energi mekanik orbit (*persamaan vis-viva*), kelajuan wahana pada jarak $r$ dari Matahari adalah:\n$$v^2 = GM_\\odot\\left(\\frac{2}{r} - \\frac{1}{a}\\right).$$\n\nUntuk Bumi pada orbit lingkaran berjari-jari $r_\\oplus = 1{,}00\\ \\text{AU}$, berlaku $v_\\oplus^2 = \\frac{GM_\\odot}{1{,}00\\ \\text{AU}}$. Dengan menyatakan $r$ dan $a$ dalam satuan AU:\n$$v = v_\\oplus\\sqrt{\\frac{2}{r} - \\frac{1}{a}} = 29{,}8\\sqrt{\\frac{2}{1{,}00} - \\frac{1}{2{,}00}} = 29{,}8\\sqrt{1{,}5} \\approx 29{,}8 \\times 1{,}2247 \\approx 36{,}5\\ \\text{km/s}.$$',
          rubric: OK_PG
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Soal Isian Numerik',
      marks: 6,
      stem: 'Selesaikan ketiga soal berikut dan tuliskan hasil numerik akhirnya hingga satu angka di belakang koma (nomor 13\u201315, masing-masing bernilai 2 poin).',
      parts: [
        {
          label: '13',
          marks: 2,
          prompt:
            'Sebuah eksoplanet berbatu tanpa atmosfer berotasi cepat sehingga temperaturnya terdistribusi seragam di seluruh permukaan. Eksoplanet tersebut mengorbit bintang mirip Matahari ($L = 1{,}00\\ L_\\odot$) pada jarak $d = 2{,}00\\ \\text{AU}$ dengan albedo Bond $A = 0{,}36$. Tentukan temperatur kesetimbangan termal eksoplanet tersebut dalam satuan Kelvin (tuliskan dalam satu angka di belakang koma)!',
          answer: '$176.0$',
          principle:
            'Pada kesetimbangan radiasi planet berotasi cepat tanpa efek rumah kaca, daya serap penampang cakram planet sama dengan daya pancar radiasi benda hitam seluruh permukaan bola: $\\pi R^2 (1 - A) S = 4\\pi R^2 \\sigma T_{\\text{eq}}^4$.',
          solution:
            'Fluks radiasi bintang pada jarak $d = 2{,}00\\ \\text{AU}$ mengikuti hukum kuadrat terbalik:\n$$S = \\frac{S_0}{(d / 1\\ \\text{AU})^2} = \\frac{1361}{2{,}00^2} = 340{,}25\\ \\text{W/m}^2.$$\n\nPada kesetimbangan termal untuk planet berotasi cepat (meradiasikan energi secara isotropis dari seluruh luas permukaan $4\\pi R^2$):\n$$\\pi R^2 (1 - A) S = 4\\pi R^2 \\sigma T_{\\text{eq}}^4 \\implies T_{\\text{eq}} = \\left[\\frac{(1 - A)S}{4\\sigma}\\right]^{1/4}.$$\n\nSubstitusi $A = 0{,}36$, $S = 340{,}25\\ \\text{W/m}^2$, dan $\\sigma = 5{,}67 \\times 10^{-8}\\ \\text{W m}^{-2}\\text{K}^{-4}$:\n$$T_{\\text{eq}} = \\left[\\frac{(1 - 0{,}36) \\times 340{,}25}{4 \\times 5{,}67 \\times 10^{-8}}\\right]^{1/4} = \\left[\\frac{217{,}76}{2{,}268 \\times 10^{-7}}\\right]^{1/4} \\approx (9{,}6014 \\times 10^8)^{1/4} \\approx 176{,}03\\ \\text{K}.$$\n\nDalam ketelitian satu angka di belakang koma, diperoleh $T_{\\text{eq}} = 176{,}0\\ \\text{K}$.',
          rubric: [
            {
              code: 'M1',
              text: 'Menentukan fluks datang $S = S_0/d^2 = 340{,}25\\ \\text{W/m}^2$ dan menyusun persamaan kesetimbangan energi $(1 - A)S = 4\\sigma T_{\\text{eq}}^4$.'
            },
            {
              code: 'A1',
              text: 'Menghitung temperatur kesetimbangan akhir $176{,}0\\ \\text{K}$ dengan ketelitian satu angka di belakang koma.'
            }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Sebuah bintang tunggal diamati memiliki paralaks tahunan $p = 0{,}010\\ \\text{detik busur}$ dan magnitudo bolometrik semu $m_{\\text{bol}} = 4{,}74$. Diketahui magnitudo bolometrik mutlak Matahari adalah $M_{\\text{bol},\\odot} = 4{,}74$ dan temperatur efektif bintang tersebut adalah $T = 11560\\ \\text{K}$ ($= 2\\,T_\\odot$). Dengan mengabaikan ekstingsi antarbintang, tentukan perbandingan jari-jari bintang tersebut terhadap jari-jari Matahari ($R / R_\\odot$) dalam satu angka di belakang koma!',
          answer: '$2.5$',
          principle:
            'Gabungan relasi paralaks ($d = 1/p$), modulus jarak ($M_{\\text{bol}} = m_{\\text{bol}} - 5\\log_{10}(d/10)$), skala luminositas Pogson ($L/L_\\odot = 10^{0{,}4(M_{\\text{bol},\\odot} - M_{\\text{bol}})}$), dan Hukum Stefan\u2013Boltzmann.',
          solution:
            'Langkah 1: Hitung jarak bintang dari paralaks tahunan $p = 0{,}010^{\\prime\\prime}$:\n$$d = \\frac{1}{p} = \\frac{1}{0{,}010} = 100\\ \\text{pc}.$$\n\nLangkah 2: Hitung magnitudo bolometrik mutlak bintang:\n$$M_{\\text{bol}} = m_{\\text{bol}} - 5\\log_{10}\\left(\\frac{d}{10}\\right) = 4{,}74 - 5\\log_{10}(10) = 4{,}74 - 5{,}00 = -0{,}26.$$\n\nLangkah 3: Tentukan rasio luminositas terhadap Matahari:\n$$\\frac{L}{L_\\odot} = 10^{0{,}4(M_{\\text{bol},\\odot} - M_{\\text{bol}})} = 10^{0{,}4(4{,}74 - (-0{,}26))} = 10^{0{,}4 \\times 5{,}00} = 10^2 = 100.$$\n\nLangkah 4: Gunakan Hukum Stefan\u2013Boltzmann dengan $T / T_\\odot = 11560 / 5780 = 2{,}0$:\n$$\\frac{R}{R_\\odot} = \\sqrt{\\frac{L}{L_\\odot}} \\left(\\frac{T_\\odot}{T}\\right)^2 = \\sqrt{100} \\times \\left(\\frac{1}{2{,}0}\\right)^2 = \\frac{10}{4} = 2{,}5.$$',
          rubric: [
            {
              code: 'M1',
              text: 'Menentukan jarak $d = 100\\ \\text{pc}$, magnitudo mutlak $M_{\\text{bol}} = -0{,}26$, dan luminositas $L = 100\\ L_\\odot$.'
            },
            {
              code: 'A1',
              text: 'Menerapkan Hukum Stefan\u2013Boltzmann untuk memperoleh rasio jari-jari $R / R_\\odot = 2{,}5$.'
            }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Sebuah sistem bintang biner visual memiliki paralaks tahunan $p = 0{,}10\\ \\text{detik busur}$. Pengamatan astrometri jangka panjang menunjukkan kedua bintang mengorbit pusat massanya dengan periode $P = 25\\ \\text{tahun}$ dan setengah sumbu panjang sudut orbit relatif sebesar $\\alpha = 1{,}5\\ \\text{detik busur}$. Hitunglah massa total sistem bintang biner tersebut dalam satuan massa Matahari ($M_\\odot$) dalam satu angka di belakang koma!',
          answer: '$5.4$',
          principle:
            'Setengah sumbu panjang linear orbit biner dalam AU adalah $a = \\alpha / p$, dan massa total sistem dalam $M_\\odot$ memenuhi Hukum III Kepler Newton $M_1 + M_2 = \\frac{a^3}{P^2}$.',
          solution:
            'Langkah 1: Konversi jarak sudut $\\alpha$ menjadi setengah sumbu panjang linear $a$ (dalam AU). Pada jarak $d(\\text{pc}) = 1/p(\\text{arcsec})$, hubungan sudut kecil memberikan:\n$$a(\\text{AU}) = d(\\text{pc}) \\cdot \\alpha(\\text{arcsec}) = \\frac{\\alpha}{p} = \\frac{1{,}5}{0{,}10} = 15{,}0\\ \\text{AU}.$$\n\nLangkah 2: Terapkan Hukum III Kepler bentuk Newton dalam satuan AU, tahun, dan $M_\\odot$:\n$$M_1 + M_2 = \\frac{a^3}{P^2} = \\frac{15{,}0^3}{25^2} = \\frac{3375}{625} = 5{,}4\\ M_\\odot.$$',
          rubric: [
            {
              code: 'M1',
              text: 'Menentukan setengah sumbu panjang linear orbit relatif $a = \\alpha / p = 15{,}0\\ \\text{AU}$.'
            },
            {
              code: 'A1',
              text: 'Menghitung massa total sistem biner $M_1 + M_2 = a^3 / P^2 = 5{,}4\\ M_\\odot$.'
            }
          ]
        }
      ]
    }
  ]
};
