/**
 * Paket Soal Terstruktur: Latihan OSN IPA SMP (Fisika) 2023 (30 soal lengkap)
 * Sumber: osn_fis_smp_2023.pdf (30 soal sumber Paket A Fisika; seluruh 5 soal bergambar/grafik pada nomor 1, 2, 16, 21, dan 28 telah dipulihkan).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osn-ipa-smp-fisika-2023',
  slug: 'osn-ipa-smp-fisika-2023',
  subject: 'olimpiade-sains',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'OSN IPA SMP (Fisika) 2023: besaran dan satuan, kinematika, dinamika dan momentum, usaha-energi, fluida dan tekanan, suhu-kalor, getaran-gelombang-bunyi, optika geometri dan fisis, kelistrikan dan kemagnetan, serta tata surya',
  relatedChapterIds: [
    'ipa7-bab1-hakikat-ilmu-sains',
    'ipa7-bab3-suhu-kalor-pemuaian',
    'ipa7-bab4-gerak-dan-gaya',
    'ipa7-bab7-bumi-dan-tata-surya',
    'ipa8-bab3-usaha-energi-pesawat-sederhana',
    'ipa8-bab4-getaran-gelombang-cahaya',
    'ipa9-bab3-tekanan',
    'ipa9-bab4-listrik-magnet-energi-alternatif'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'Latihan OSN IPA SMP (Fisika) 2023',
  totalMarks: 35,
  instructions:
    'Kerjakan seluruh 30 butir soal Fisika berikut sesuai nomor asli naskah sumber (`osn_fis_smp_2023.pdf`, Paket A Fisika, nomor 1–30). Penilaian: Bagian I (Pilihan Ganda, 10 soal: nomor 1–10), Bagian II (Pilihan 1234, 10 soal: nomor 11–20), dan Bagian III (Sebab-Akibat, 5 soal: nomor 21–25) masing-masing bernilai 1 poin (total 25 poin); Bagian IV (Isian Singkat, 5 soal: nomor 26–30) masing-masing bernilai 2 poin (total 10 poin), sehingga skor maksimum 35 poin.',
  source: {
    org: 'OSN-K',
    file: 'osn_fis_smp_2023.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian I: Pilihan Ganda',
      marks: 10,
      stem: 'Pilihlah satu jawaban yang paling tepat (10 soal dari nomor asli 1–10; masing-masing 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          figures: [
            {
              src: '/papers/osn-ipa-smp-fisika-2023/fig-1.webp',
              caption: 'Grafik percepatan terhadap waktu untuk benda A, B, dan C.',
              alt: 'Tiga grafik percepatan dalam m/s^2 terhadap waktu dalam sekon untuk benda A, B, dan C berupa pulsa persegi panjang konstan pada selang waktu tertentu.'
            }
          ],
          prompt:
            'Gambar berikut menunjukkan percepatan benda A, B, dan C yang bergerak pada sumbu-$x$.\n\nKecepatan awal benda A, B, dan C berturut-turut adalah $-2\\text{ m/s}$, $0\\text{ m/s}$, dan $+1\\text{ m/s}$. Urutan benda berdasarkan kecepatan akhirnya dari kecepatan terbesar ke kecepatan terkecil adalah ....\n\nA. A, B, C\nB. B, C, A\nC. C, B, A\nD. A, C, B',
          answer: 'B. B, C, A',
          principle:
            'Perubahan kecepatan suatu benda sama dengan luas daerah di bawah kurva percepatan terhadap waktu ($\\Delta v = \\int a\\,dt = a \\cdot \\Delta t$ untuk percepatan konstan), sehingga kecepatan akhir memenuhi $v_f = v_0 + \\Delta v$.',
          solution:
            'Hitung perubahan kecepatan $\\Delta v = a \\cdot \\Delta t$ dari luas kurva percepatan-waktu masing-masing benda:\n- **Benda A:** $a_A = 4\\text{ m/s}^2$ selama $\\Delta t_A = 3 - 1 = 2\\text{ s}$, sehingga $\\Delta v_A = 4 \\times 2 = +8\\text{ m/s}$.\n  $$v_{fA} = v_{0A} + \\Delta v_A = -2 + 8 = 6\\text{ m/s}.$$\n- **Benda B:** $a_B = 2\\text{ m/s}^2$ selama $\\Delta t_B = 8 - 4 = 4\\text{ s}$, sehingga $\\Delta v_B = 2 \\times 4 = +8\\text{ m/s}$.\n  $$v_{fB} = v_{0B} + \\Delta v_B = 0 + 8 = 8\\text{ m/s}.$$\n- **Benda C:** $a_C = 6\\text{ m/s}^2$ selama $\\Delta t_C = 10 - 9 = 1\\text{ s}$, sehingga $\\Delta v_C = 6 \\times 1 = +6\\text{ m/s}$.\n  $$v_{fC} = v_{0C} + \\Delta v_C = 1 + 6 = 7\\text{ m/s}.$$\n\nUrutan dari kecepatan akhir terbesar ke terkecil adalah $8\\text{ m/s} > 7\\text{ m/s} > 6\\text{ m/s}$, yaitu **B, C, A** (pilihan B).',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          figures: [
            {
              src: '/papers/osn-ipa-smp-fisika-2023/fig-2.webp',
              caption: 'Grafik energi potensial dan energi kinetik benda terhadap waktu.',
              alt: 'Grafik garis energi dalam Joule terhadap waktu dalam sekon yang menampilkan kurva Energi Kinetik menurun linear dan kurva Energi Potensial meningkat linear.'
            }
          ],
          prompt:
            'Sebuah benda bergerak pada sebuah bidang di bawah pengaruh gaya gravitasi. Grafik energi potensial dan energi kinetik benda terhadap waktu ditunjukkan pada gambar.\n\nPernyataan yang benar untuk gerak benda tersebut adalah ....\n\nA. benda bergerak pada bidang datar licin\nB. benda bergerak pada bidang datar kasar\nC. benda bergerak pada bidang miring licin\nD. benda bergerak pada bidang miring kasar',
          answer: 'C. benda bergerak pada bidang miring licin',
          principle:
            'Perubahan energi potensial gravitasi ($\\Delta E_p = m g \\Delta h \\ne 0$) menunjukkan adanya perubahan ketinggian (bidang miring), sedangkan energi mekanik total yang konstan ($E_m = E_k + E_p = \\text{tetap}$) menunjukkan tidak ada energi yang hilang akibat gaya gesek (bidang licin).',
          solution:
            'Baca nilai energi kinetik $E_k$ dan energi potensial $E_p$ pada setiap detik dari grafik:\n- $t = 0\\text{ s}$: $E_k = 80\\text{ J}$, $E_p = 0\\text{ J} \\implies E_m = 80\\text{ J}$\n- $t = 1\\text{ s}$: $E_k = 70\\text{ J}$, $E_p = 10\\text{ J} \\implies E_m = 80\\text{ J}$\n- $t = 2\\text{ s}$: $E_k = 60\\text{ J}$, $E_p = 20\\text{ J} \\implies E_m = 80\\text{ J}$\n- $t = 3\\text{ s}$: $E_k = 50\\text{ J}$, $E_p = 30\\text{ J} \\implies E_m = 80\\text{ J}$\n- $t = 4\\text{ s}$: $E_k = 40\\text{ J}$, $E_p = 40\\text{ J} \\implies E_m = 80\\text{ J}$\n- $t = 5\\text{ s}$: $E_k = 30\\text{ J}$, $E_p = 50\\text{ J} \\implies E_m = 80\\text{ J}$\n\n1. Karena $E_p$ terus bertambah dari $0$ hingga $50\\text{ J}$, ketinggian benda berubah (naik), sehingga benda bergerak pada **bidang miring** (bukan bidang datar).\n2. Karena energi mekanik total $E_m = E_k + E_p$ selalu konstan sebesar $80\\text{ J}$, tidak ada energi mekanik yang berubah menjadi panas akibat gesekan, sehingga bidang tersebut **licin**.\n\nJadi, pernyataan yang benar adalah benda bergerak pada bidang miring licin (pilihan C).',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Pada tekanan $1\\text{ atm}$ suhu air mendidih yang terukur oleh sebuah termometer adalah $80$ derajat. Saat digunakan untuk mengukur air bersuhu $60^\\circ\\text{C}$, termometer ini menunjukkan hasil pengukuran sebesar $52$ derajat. Pada tekanan $1\\text{ atm}$ air membeku pada suhu ... derajat.\n\nA. $-20$\nB. $-14$\nC. $10$\nD. $20$',
          answer: 'C. $10$',
          principle:
            'Dua skala termometer linear dihubungkan melalui perbandingan selisih suhu terhadap rentang titik tetap bawah (titik beku) dan titik tetap atas (titik didih) pada tekanan $1\\text{ atm}$: $\\frac{T_X - T_{X,\\text{beku}}}{T_{X,\\text{didih}} - T_{X,\\text{beku}}} = \\frac{T_C - 0}{100 - 0}$.',
          solution:
            'Misalkan titik beku air pada termometer $X$ adalah $T_b$ (dalam derajat $X$), dan diketahui titik didih air pada $1\\text{ atm}$ adalah $80$ derajat $X$. Pada skala Celsius, titik beku air adalah $0^\\circ\\text{C}$ dan titik didih air adalah $100^\\circ\\text{C}$.\n\nKarena kedua skala bersifat linear, untuk bacaan $T_X = 52$ yang bersesuaian dengan $T_C = 60^\\circ\\text{C}$ berlaku:\n$$\\frac{52 - T_b}{80 - T_b} = \\frac{60 - 0}{100 - 0} = \\frac{3}{5}$$\nKalikan silang kedua ruas:\n$$5(52 - T_b) = 3(80 - T_b)$$\n$$260 - 5T_b = 240 - 3T_b$$\n$$260 - 240 = 5T_b - 3T_b \\implies 2T_b = 20 \\implies T_b = 10\\text{ derajat}.$$\nJadi, pada tekanan $1\\text{ atm}$ air membeku pada suhu $10$ derajat (pilihan C).',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Pada suatu bejana, sepotong logam bermassa $50\\text{ gram}$ terendam di dalam $500\\text{ mL}$ air pada suhu setimbang $26^\\circ\\text{C}$. Ke dalam bejana tersebut dituangkan $500\\text{ mL}$ air bersuhu $86^\\circ\\text{C}$ sehingga suhu akhir yang dicapai sebesar $36^\\circ\\text{C}$. Massa jenis dan kalor jenis air adalah $1\\text{ kg/liter}$ dan $4{,}2\\text{ kJ/kg}\\cdot{}^\\circ\\text{C}$. Jika kalor yang diserap/dilepas bejana diabaikan, kalor jenis logam sama dengan ... $\\text{kJ/kg}\\cdot{}^\\circ\\text{C}$.\n\nA. $8{,}4$\nB. $16{,}8$\nC. $84{,}0$\nD. $168{,}0$',
          answer: 'D. $168{,}0$',
          principle:
            'Asas Black menyatakan bahwa dalam sistem terisolasi (kalor bejana diabaikan), kalor yang dilepaskan air panas sama dengan jumlah kalor yang diserap air dingin dan logam: $Q_{\\text{lepas}} = Q_{\\text{serap}}$.',
          solution:
            'Konversi seluruh besaran ke satuan SI (atau $\\text{kg}$ dan $\\text{kJ}$ secara konsisten):\n- Massa logam: $m_L = 50\\text{ g} = 0{,}05\\text{ kg}$.\n- Volume air dingin $500\\text{ mL} = 0{,}5\\text{ L}$, sehingga massanya $m_1 = \\rho V_1 = (1\\text{ kg/L})(0{,}5\\text{ L}) = 0{,}5\\text{ kg}$.\n- Volume air panas $500\\text{ mL} = 0{,}5\\text{ L}$, sehingga massanya $m_2 = 0{,}5\\text{ kg}$.\n- Kalor jenis air: $c_{\\text{air}} = 4{,}2\\text{ kJ/(kg}\\cdot{}^\\circ\\text{C)} = 4200\\text{ J/(kg}\\cdot\\text{K)}$.\n\nTerapkan Asas Black menuju suhu setimbang $T_f = 36^\\circ\\text{C}$:\n$$Q_{\\text{lepas, air panas}} = Q_{\\text{serap, air dingin}} + Q_{\\text{serap, logam}}$$\n$$m_2 c_{\\text{air}} (86 - 36) = m_1 c_{\\text{air}} (36 - 26) + m_L c_L (36 - 26)$$\nSubstitusi nilai numerik (dalam $\\text{kJ}$):\n$$0{,}5 \\times 4{,}2 \\times 50 = 0{,}5 \\times 4{,}2 \\times 10 + 0{,}05 \\times c_L \\times 10$$\n$$105 = 21 + 0{,}5\\,c_L$$\n$$0{,}5\\,c_L = 105 - 21 = 84$$\n$$c_L = \\frac{84}{0{,}5} = 168{,}0\\text{ kJ/kg}\\cdot{}^\\circ\\text{C}.$$\nJadi, kalor jenis logam adalah $168{,}0\\text{ kJ/kg}\\cdot{}^\\circ\\text{C}$ (pilihan D).',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Suatu kawat dengan panjang $0{,}5\\text{ m}$ berada pada medan magnet homogen $20\\text{ mikrotesla}$ dengan arah masuk bidang gambar. Jika kawat tersebut dialiri arus $4\\text{ A}$ ke arah kanan, gaya Lorentz yang bekerja pada kawat tersebut adalah ....\n\nA. $2{,}5\\text{ mikronewton}$ ke atas\nB. $2{,}5\\text{ mikronewton}$ ke bawah\nC. $40\\text{ mikronewton}$ ke atas\nD. $40\\text{ mikronewton}$ ke bawah',
          answer: 'C. $40\\text{ mikronewton}$ ke atas',
          principle:
            'Besar gaya Lorentz pada kawat lurus berarus dalam medan magnet homogen adalah $F = B I L \\sin\\theta$, sedangkan arahnya ditentukan dengan kaidah tangan kanan (ibu jari arah arus $I$, empat jari arah medan magnet $B$, dan telapak tangan menunjukkan arah gaya $F$).',
          solution:
            'Diketahui dalam satuan SI:\n- $L = 0{,}5\\text{ m}$\n- $B = 20\\ \\mu\\text{T} = 20 \\times 10^{-6}\\text{ T}$ (masuk bidang gambar)\n- $I = 4\\text{ A}$ (ke kanan, tegak lurus medan magnet sehingga $\\theta = 90^\\circ$ dan $\\sin 90^\\circ = 1$)\n\n1. **Menghitung besar gaya Lorentz:**\n$$F = B I L \\sin 90^\\circ = (20 \\times 10^{-6}\\text{ T})(4\\text{ A})(0{,}5\\text{ m})(1) = 40 \\times 10^{-6}\\text{ N} = 40\\ \\mu\\text{N}.$$\n\n2. **Menentukan arah gaya Lorentz:**\nDengan kaidah tangan kanan terbuka: arahkan ibu jari ke kanan (arah arus $I$) dan keempat jari menembus masuk ke bidang gambar (arah medan $B$). Telapak tangan menghadap ke atas, sehingga gaya Lorentz bekerja ke arah **atas**.\n\nJadi, gaya Lorentz sebesar $40\\text{ mikronewton}$ ke atas (pilihan C).',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Jika dipasang paralel pada tegangan $110\\text{ volt}$ maka daya total tiga buah lampu identik sebesar $45\\text{ watt}$. Besar daya sebuah lampu tersebut jika dipasang pada tegangan $220\\text{ volt}$ adalah ... watt.\n\nA. $45$\nB. $60$\nC. $90$\nD. $180$',
          answer: 'B. $60$',
          principle:
            'Pada rangkaian paralel, setiap lampu menerima tegangan sumber yang sama sehingga daya masing-masing lampu identik adalah seperjumlah lampu dari daya total, dan untuk hambatan tetap $R$ berlaku $P = \\frac{V^2}{R} \\propto V^2$.',
          solution:
            'Ketika $3$ lampu identik dipasang paralel pada tegangan $V_1 = 110\\text{ V}$, daya totalnya $P_{\\text{total}} = 45\\text{ W}$. Karena ketiganya identik dan menerima tegangan yang sama ($110\\text{ V}$), daya sebuah lampu pada tegangan $110\\text{ V}$ adalah:\n$$P_1 = \\frac{P_{\\text{total}}}{3} = \\frac{45\\text{ W}}{3} = 15\\text{ W}.$$\nHambatan sebuah lampu (diasumsikan tetap) memenuhi $P_1 = \\frac{V_1^2}{R}$:\n$$R = \\frac{110^2}{15}\\ \\Omega.$$\nJika sebuah lampu tersebut dipasang pada tegangan $V_2 = 220\\text{ V}$, dayanya menjadi:\n$$P_2 = \\frac{V_2^2}{R} = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 = 15 \\times \\left(\\frac{220}{110}\\right)^2 = 15 \\times 2^2 = 15 \\times 4 = 60\\text{ W}.$$\nJadi, besar daya sebuah lampu adalah $60\\text{ watt}$ (pilihan B).',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Tiga pipa vertikal A, B, dan C saling terhubung di bawahnya. Ke dalam sistem pipa itu diisikan suatu cairan. Tiap pipa memiliki piston sebagai penutup yang dapat bergerak naik atau turun tanpa gesekan. Rasio diameter pipa A, B, dan C adalah $1 : 3 : 6$. Jika $m_A$, $m_B$, $m_C$ berturut-turut adalah massa beban yang diletakkan pada piston A, B, C, dan $m_A = 1\\text{ kg}$, maka agar sistem setimbang ....\n\nA. $m_B = 1{,}8\\text{ kg}$ dan $m_C = 28{,}8\\text{ kg}$\nB. $m_B = 3{,}0\\text{ kg}$ dan $m_C = 6{,}0\\text{ kg}$\nC. $m_B = 4{,}5\\text{ kg}$ dan $m_C = 18{,}0\\text{ kg}$\nD. $m_B = 9{,}0\\text{ kg}$ dan $m_C = 36{,}0\\text{ kg}$',
          answer: 'D. $m_B = 9{,}0\\text{ kg}$ dan $m_C = 36{,}0\\text{ kg}$',
          principle:
            'Menurut Hukum Pascal, tekanan pada fluida statis yang saling berhubungan di ketinggian yang sama adalah sama besar ($\\frac{F_A}{A_A} = \\frac{F_B}{A_B} = \\frac{F_C}{A_C}$), dengan luas penampang lingkaran $A = \\frac{1}{4}\\pi d^2 \\propto d^2$.',
          solution:
            'Agar ketiga piston setimbang pada ketinggian yang sama, tekanan oleh masing-masing beban pada cairan harus sama:\n$$\\frac{m_A g}{A_A} = \\frac{m_B g}{A_B} = \\frac{m_C g}{A_C}$$\nKarena percepatan gravitasi $g$ sama dan $A = \\frac{1}{4}\\pi d^2$, massa beban sebanding dengan kuadrat diameter pipa:\n$$m_A : m_B : m_C = d_A^2 : d_B^2 : d_C^2 = 1^2 : 3^2 : 6^2 = 1 : 9 : 36.$$\nDiketahui $m_A = 1\\text{ kg}$, maka:\n$$m_B = 9 \\times 1\\text{ kg} = 9{,}0\\text{ kg}, \\qquad m_C = 36 \\times 1\\text{ kg} = 36{,}0\\text{ kg}.$$\nJadi, jawaban yang benar adalah D.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Dua buah jarum berdiri tegak di depan sebuah lensa. Setiap jarum berjarak $1\\text{ m}$ terhadap lensa dan jarak antar jarum $1{,}2\\text{ cm}$. Jika kuat lensa itu $-5\\text{ dioptri}$, jarak antar kedua bayangan jarum adalah ... $\\text{cm}$.\n\nA. $0{,}20$\nB. $0{,}25$\nC. $0{,}30$\nD. $0{,}35$',
          answer: 'A. $0{,}20$',
          principle:
            'Hubungan kuat lensa, jarak benda, dan jarak bayangan dinyatakan oleh $P = \\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s\'}$ (dalam satuan meter untuk dioptri), sedangkan perbesaran linear $M = \\left|\\frac{s\'}{s}\\right|$ menskalakan ukuran serta jarak arah melintang (transversal) bayangan.',
          solution:
            'Diketahui kuat lensa $P = -5\\text{ dioptri} = -5\\text{ m}^{-1}$ (lensa cekung/divergen) dan jarak kedua jarum dari lensa sama, yaitu $s = 1\\text{ m}$.\n\n1. **Menentukan jarak bayangan $s\'$:**\n$$\\frac{1}{s\'} = P - \\frac{1}{s} = -5\\text{ m}^{-1} - \\frac{1}{1\\text{ m}} = -6\\text{ m}^{-1} \\implies s\' = -\\frac{1}{6}\\text{ m}.$$\nTanda negatif menunjukkan bayangan bersifat maya (di depan lensa).\n\n2. **Menghitung perbesaran linear $M$:**\n$$M = \\left|\\frac{s\'}{s}\\right| = \\frac{1/6\\text{ m}}{1\\text{ m}} = \\frac{1}{6}.$$\n\n3. **Menghitung jarak antar bayangan:**\nKarena kedua jarum berjarak sama terhadap lensa dengan jarak pemisah melintang $d = 1{,}2\\text{ cm}$, jarak antar kedua bayangannya tereduksi oleh faktor perbesaran $M$:\n$$d\' = M \\times d = \\frac{1}{6} \\times 1{,}2\\text{ cm} = 0{,}20\\text{ cm}.$$\nJadi, jarak antar kedua bayangan jarum adalah $0{,}20\\text{ cm}$ (pilihan A).',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Sebuah alat musik memiliki dawai dengan panjang $60\\text{ cm}$. Ketika dipetik, pada dawai merambat gelombang dengan kecepatan $330\\text{ m/s}$. Frekuensi nada dasar dawai adalah ....\n\nA. $198\\text{ Hz}$\nB. $275\\text{ Hz}$\nC. $396\\text{ Hz}$\nD. $550\\text{ Hz}$',
          answer: 'B. $275\\text{ Hz}$',
          principle:
            'Pada dawai yang terikat kedua ujungnya, pola gelombang stasioner nada dasar ($n = 1$) memiliki panjang dawai sama dengan setengah panjang gelombang ($L = \\frac{1}{2}\\lambda_1$), sehingga $f_1 = \\frac{v}{2L}$.',
          solution:
            'Konversi panjang dawai ke satuan SI:\n$$L = 60\\text{ cm} = 0{,}60\\text{ m}.$$\nPada nada dasar, terbentuk satu perut di tengah dan dua simpul di ujung sehingga panjang gelombang dasar adalah:\n$$\\lambda_1 = 2L = 2 \\times 0{,}60\\text{ m} = 1{,}20\\text{ m}.$$\nDengan cepat rambat gelombang $v = 330\\text{ m/s}$, frekuensi nada dasarnya adalah:\n$$f_1 = \\frac{v}{\\lambda_1} = \\frac{330\\text{ m/s}}{1{,}20\\text{ m}} = 275\\text{ Hz}.$$\nJadi, frekuensi nada dasar dawai adalah $275\\text{ Hz}$ (pilihan B).',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Kapal laut patroli yang sedang diam memancarkan dua pulsa ultrasonik dengan interval waktu $10\\text{ s}$ untuk mendeteksi pergerakan sebuah kapal nelayan. Cepat rambat pulsa ultrasonik di udara adalah $340\\text{ m/s}$. Jika pulsa pantul masing-masing terdeteksi $5\\text{ s}$ dan $6\\text{ s}$ setelah dipancarkan, laju kapal nelayan sama dengan ... $\\text{m/s}$.\n\nA. $8{,}5$\nB. $11$\nC. $17$\nD. $34$',
          answer: 'C. $17$',
          principle:
            'Jarak objek dari sonar saat pulsa dipantulkan adalah $s = \\frac{v_{\\text{bunyi}} \\cdot t_{\\text{pulsa}}}{2}$ (pergi-pulang), dan laju kapal adalah perubahan jarak dibagi selang waktu antar pengukuran.',
          solution:
            'Diketahui cepat rambat pulsa ultrasonik di udara $v = 340\\text{ m/s}$.\n\n1. **Jarak kapal nelayan pada dua pengukuran:**\n- Saat pulsa pertama ($t_1 = 5\\text{ s}$): $s_1 = \\frac{v \\cdot t_1}{2} = \\frac{340 \\times 5}{2} = 850\\text{ m}$.\n- Saat pulsa kedua ($t_2 = 6\\text{ s}$): $s_2 = \\frac{v \\cdot t_2}{2} = \\frac{340 \\times 6}{2} = 1020\\text{ m}$.\n\nPertambahan jarak kapal nelayan adalah:\n$$\\Delta s = s_2 - s_1 = 1020\\text{ m} - 850\\text{ m} = 170\\text{ m}.$$\n\n2. **Laju kapal nelayan:**\nDalam penyelesaian standar soal ujian dengan pendekatan $v_{\\text{kapal}} \\ll v_{\\text{bunyi}}$, selang waktu antar kedua posisi diambil sama dengan interval pemancaran pulsa $\\Delta t = 10\\text{ s}$:\n$$v_{\\text{kapal}} = \\frac{\\Delta s}{\\Delta t} = \\frac{170\\text{ m}}{10\\text{ s}} = 17\\text{ m/s}.$$\n*(Catatan ketelitian kinematika: jika dihitung eksak dari selisih waktu tepat saat pulsa memantul di kapal, $t_{\\text{pantul},1} = 2{,}5\\text{ s}$ dan $t_{\\text{pantul},2} = 10 + 3 = 13\\text{ s}$ sehingga $\\Delta t_{\\text{pantul}} = 10{,}5\\text{ s}$ dan $v_{\\text{kapal}} = \\frac{170}{10{,}5} \\approx 16{,}2\\text{ m/s}$, yang juga paling dekat ke $17\\text{ m/s}$.)*\n\nJadi, pilihan yang tepat adalah C ($17\\text{ m/s}$).',
          rubric: OK
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian II: Pilihan 1234',
      marks: 10,
      stem: 'Tentukan pernyataan bernomor yang benar untuk setiap soal (10 soal dari nomor asli 11–20; masing-masing 1 poin).',
      parts: [
        {
          label: '11',
          marks: 1,
          prompt:
            'Sebuah benda bermassa $5\\text{ kg}$ ditembakkan vertikal dari suatu landasan. Energi kinetik benda pada ketinggian $0\\text{ m}$ sampai $5\\text{ m}$ terhadap landasan ditunjukkan pada tabel berikut:\n- Posisi $0\\text{ m}$: Energi kinetik $400\\text{ J}$\n- Posisi $1\\text{ m}$: Energi kinetik $355\\text{ J}$\n- Posisi $2\\text{ m}$: Energi kinetik $310\\text{ J}$\n- Posisi $3\\text{ m}$: Energi kinetik $265\\text{ J}$\n- Posisi $4\\text{ m}$: Energi kinetik $220\\text{ J}$\n- Posisi $5\\text{ m}$: Energi kinetik $175\\text{ J}$\n\nPernyataan berikut berkaitan dengan gerak benda tersebut:\n1. Percepatan benda sebesar $9{,}8\\text{ m/s}^2$.\n2. Posisi $8{,}9\\text{ m}$ di atas landasan adalah posisi tertinggi benda.\n3. Ketika energi kinetik benda sama dengan $355\\text{ J}$, energi potensialnya sama dengan $220\\text{ J}$.\n4. Energi potensial terbesar yang dapat dimiliki benda adalah $400\\text{ J}$.\n\nPernyataan yang benar adalah pernyataan nomor ....\n\nA. $1$ dan $3$\nB. $2$ dan $3$\nC. $1$ dan $4$\nD. $2$ dan $4$',
          answer: 'D. $2$ dan $4$',
          principle:
            'Pada gerak vertikal konservatif, hukum kekekalan energi mekanik memberikan $\\Delta E_k = -\\Delta E_p = -m g \\Delta h$ dan energi mekanik total konstan $E_m = E_k + E_p = 400\\text{ J}$.',
          solution:
            'Dari tabel, setiap kenaikan ketinggian $\\Delta h = 1\\text{ m}$, energi kinetik berkurang secara konstan sebesar $45\\text{ J}$ ($400 \\to 355 \\to 310 \\to \\dots$). Karena energi mekanik kekal ($E_m = E_k(0) + E_p(0) = 400 + 0 = 400\\text{ J}$):\n\n1. **Pernyataan 1 salah:** Pertambahan energi potensial tiap $1\\text{ m}$ adalah $\\Delta E_p = m g \\Delta h = 45\\text{ J}$. Untuk $m = 5\\text{ kg}$ dan $\\Delta h = 1\\text{ m}$, besar percepatan gravitasi efektif adalah:\n$$g = \\frac{45\\text{ J}}{(5\\text{ kg})(1\\text{ m})} = 9{,}0\\text{ m/s}^2 \\ne 9{,}8\\text{ m/s}^2.$$\n\n2. **Pernyataan 2 benar:** Di titik tertinggi, $E_k = 0$ sehingga $E_p = 400\\text{ J}$:\n$$m g h_{\\max} = 400 \\implies 45\\,h_{\\max} = 400 \\implies h_{\\max} = \\frac{400}{45} = \\frac{80}{9} \\approx 8{,}89\\text{ m} \\approx 8{,}9\\text{ m}.$$\n\n3. **Pernyataan 3 salah:** Saat $E_k = 355\\text{ J}$ (posisi $1\\text{ m}$), energi potensialnya adalah $E_p = E_m - E_k = 400 - 355 = 45\\text{ J} \\ne 220\\text{ J}$.\n\n4. **Pernyataan 4 benar:** Energi potensial terbesar dicapai di titik tertinggi ketika seluruh energi kinetik awal ($400\\text{ J}$) berubah menjadi energi potensial, yaitu $E_{p,\\max} = 400\\text{ J}$.\n\nJadi, pernyataan yang benar adalah $2$ dan $4$ (pilihan D).',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Seorang anak mengendarai sepeda dengan kecepatan tetap. Suatu saat anak tersebut melempar sebutir telur vertikal ke arah atas relatif terhadapnya. Pernyataan berikut berkaitan dengan gerak tersebut:\n1. Telur jatuh mengenai anak.\n2. Gaya yang bekerja pada telur sama dengan berat telur.\n3. Percepatan telur ketika naik dan ketika turun berlawanan arah.\n4. Ketika telur bergerak turun, arah kecepatannya vertikal ke bawah relatif terhadap pohon di pinggir jalan.\n\nPernyataan yang benar adalah pernyataan nomor ....\n\nA. $1$ dan $2$\nB. $1$, $2$, dan $3$\nC. $2$, $3$, dan $4$\nD. $4$',
          answer: 'A. $1$ dan $2$',
          principle:
            'Dengan mengabaikan hambatan udara, benda yang dilempar ke atas dari kerangka berkecepatan konstan memiliki komponen kecepatan horizontal yang sama dengan pengamat dan hanya mengalami gaya berat $w = mg$ (percepatan gravitasi $g$ selalu ke bawah).',
          solution:
            'Analisis masing-masing pernyataan (hambatan udara diabaikan):\n1. **Benar:** Sesaat setelah dilempar, telur mewarisi kecepatan horizontal sepeda yang konstan ($v_x = v_{\\text{anak}}$). Karena tidak ada gaya horizontal, posisi horizontal telur selalu tepat di atas anak sepanjang geraknya sehingga telur jatuh kembali mengenai anak.\n2. **Benar:** Selama melayang di udara tanpa gesekan udara, satu-satunya gaya yang bekerja pada telur adalah gaya gravitasi Bumi, yaitu berat telur $w = mg$.\n3. **Salah:** Gaya berat selalu mengarah ke pusat Bumi (vertikal ke bawah), sehingga percepatan gravitasi $\\vec{g}$ baik saat telur naik maupun turun tetap berarah sama (vertikal ke bawah).\n4. **Salah:** Relatif terhadap pohon di pinggir jalan (kerangka diam), telur memiliki kecepatan horizontal $v_x \\ne 0$ ke depan sekaligus kecepatan vertikal $v_y$ ke bawah saat turun; arah resultan kecepatannya miring ke depan-bawah, bukan vertikal ke bawah.\n\nJadi, pernyataan yang benar adalah $1$ dan $2$ (pilihan A).',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Berikut ini merupakan satuan panjang atau jarak yang biasa digunakan:\n1. mile\n2. inch\n3. foot\n4. meter\n\nSatuan jarak yang merupakan sistem metrik atau sistem satuan internasional ditunjukkan oleh nomor ....\n\nA. $4$\nB. $1$ dan $3$\nC. $2$ dan $4$\nD. $1$, $2$, $3$ dan $4$',
          answer: 'A. $4$',
          principle:
            'Dalam Sistem Satuan Internasional (SI) dan sistem metrik, satuan pokok untuk besaran panjang adalah meter ($\\text{m}$), sedangkan mile, inch, dan foot termasuk sistem satuan Imperial/AS.',
          solution:
            'Tinjau sistem satuan tiap nama:\n- **mile** (mil), **inch** (inci), dan **foot** (kaki) merupakan satuan panjang dalam sistem Imperial / Anglo-Saxon.\n- **meter** ($\\text{m}$) merupakan satuan pokok panjang dalam sistem metrik dan Sistem Satuan Internasional (SI).\n\nJadi, satu-satunya satuan metrik/SI pada daftar adalah nomor $4$ (pilihan A).',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Zat cair X dan Y bermassa sama, bersuhu $T_X$ dan $T_Y$, ditempatkan secara terpisah. Perbandingan kalor jenis kedua zat tersebut adalah $2 : 3$.\n1. Jika $T_X = T_Y$ kemudian keduanya diberi sejumlah kalor yang sama, kenaikan suhu X lebih kecil dari kenaikan suhu Y.\n2. Jika $T_X < T_Y$ kemudian keduanya dicampur, kenaikan suhu X sama dengan penurunan suhu Y.\n3. Jika $T_X = T_Y$, agar diperoleh suhu akhir yang sama, X harus menyerap kalor yang lebih besar dari kalor yang diserap Y.\n4. Jika $T_X < T_Y$ kemudian keduanya dicampur, suhu akhir X sama dengan suhu akhir Y.\n\nPernyataan yang benar adalah pernyataan nomor ....\n\nA. $4$\nB. $1$ dan $3$\nC. $2$ dan $4$\nD. $1$, $2$, $3$ dan $4$',
          answer: 'A. $4$',
          principle:
            'Kalor sensibel memenuhi $Q = m c \\Delta T$ sehingga untuk massa sama berlaku $\\Delta T = \\frac{Q}{mc}$ berbanding terbalik dengan kalor jenis $c$; pada kesetimbangan termal campuran, suhu akhir kedua zat sama besar.',
          solution:
            'Diketahui $m_X = m_Y = m$ dan $\\frac{c_X}{c_Y} = \\frac{2}{3}$, artinya $c_X < c_Y$.\n1. **Salah:** Jika $Q$ dan $m$ sama, $\\Delta T = \\frac{Q}{mc}$. Karena $c_X < c_Y$, maka $\\Delta T_X > \\Delta T_Y$ (kenaikan suhu X lebih *besar*, bukan lebih kecil).\n2. **Salah:** Saat dicampur (tanpa kehilangan kalor ke lingkungan), $Q_{\\text{serap},X} = Q_{\\text{lepas},Y} \\implies m c_X \\Delta T_X = m c_Y \\Delta T_Y$. Karena $c_X \\ne c_Y$, maka $\\Delta T_X \\ne \\Delta T_Y$ (lebih tepatnya $\\Delta T_X = \\frac{3}{2}\\Delta T_Y$).\n3. **Salah:** Untuk $\\Delta T$ dan $m$ sama, $Q = m c \\Delta T$. Karena $c_X < c_Y$, kalor yang diserap X lebih *kecil* daripada Y ($Q_X < Q_Y$).\n4. **Benar:** Ketika dua zat bersentuhan/dicampur hingga mencapai kesetimbangan termal, suhu akhir kedua zat menjadi sama ($T_{\\text{akhir},X} = T_{\\text{akhir},Y}$).\n\nJadi, pernyataan yang benar hanya nomor $4$ (pilihan A).',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Diketahui beberapa besaran fisika sebagai berikut:\n1. luas keping sejajar\n2. jarak antara dua keping sejajar\n3. permeabilitas magnetik bahan\n4. permitivitas listrik bahan\n5. konduktivitas listrik bahan\n\nBesaran yang dapat mempengaruhi nilai kapasitansi sebuah kapasitor keping sejajar adalah ....\n\nA. $1$, $2$ dan $3$\nB. $2$, $3$ dan $5$\nC. $1$, $2$ dan $4$\nD. $2$, $4$ dan $5$',
          answer: 'C. $1$, $2$ dan $4$',
          principle:
            'Kapasitansi kapasitor keping sejajar berisi dielektrik dinyatakan oleh $C = \\varepsilon \\frac{A}{d} = \\varepsilon_r \\varepsilon_0 \\frac{A}{d}$.',
          solution:
            'Berdasarkan rumus kapasitansi kapasitor keping sejajar:\n$$C = \\varepsilon \\frac{A}{d}$$\ndengan:\n- $A$: luas penampang keping sejajar (nomor $1$),\n- $d$: jarak antar dua keping sejajar (nomor $2$),\n- $\\varepsilon = \\varepsilon_r \\varepsilon_0$: permitivitas listrik bahan dielektrik di antara kedua keping (nomor $4$).\n\nPermeabilitas magnetik ($\\mu$, nomor $3$) berkaitan dengan medan magnet/induktansi, dan konduktivitas listrik (nomor $5$) bukan penentu kapasitas penyimpanan muatan elektrostatik pada dielektrik ideal.\n\nJadi, besaran yang memengaruhi kapasitansi adalah $1$, $2$, dan $4$ (pilihan C).',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          figures: [
            {
              src: '/papers/osn-ipa-smp-fisika-2023/fig-16.webp',
              caption: 'Magnet batang di dekat kumparan kawat yang terhubung ke galvanometer.',
              alt: 'Diagram magnet batang dengan kutub S di kiri dan U di kanan di sebelah kiri kumparan solenoida yang kedua ujungnya A dan B terhubung ke galvanometer.'
            }
          ],
          prompt:
            'Perhatikan gambar magnet batang, kawat kumparan, dan galvanometer di bawah ini.\n\nPernyataan berikut berkaitan dengan gerak magnet batang di atas:\n1. saat magnet digeser ke kiri, arus induksi mengalir dari A ke B\n2. saat magnet digeser ke kiri, arus induksi mengalir dari B ke A\n3. saat magnet digeser ke kanan, arus induksi mengalir dari A ke B\n4. saat magnet digeser ke kanan, arus induksi mengalir dari B ke A\n5. saat magnet digeser ke atas, arus induksi mengalir dari B ke A\n6. saat magnet digeser ke bawah, arus induksi mengalir dari A ke B\n\nPernyataan yang benar adalah ....\n\nA. $1$ dan $3$\nB. $2$ dan $3$\nC. $1$ dan $5$\nD. $4$ dan $6$',
          answer: 'B. $2$ dan $3$',
          principle:
            'Menurut Hukum Lenz, arah arus induksi dalam kumparan selalu menimbulkan medan magnet induksi yang menentang perubahan fluks magnetik penyebabnya.',
          solution:
            'Pada gambar, kutub utara (U) magnet batang menghadap ke sisi kiri kumparan sehingga fluks magnetik dari magnet menembus kumparan ke arah kanan:\n- **Saat magnet digeser ke kanan (mendekati kumparan):** fluks magnetik ke kanan melalui kumparan bertambah. Sesuai Hukum Lenz, kumparan melawan pertambahan fluks tersebut dengan menghasilkan medan magnet induksi ke arah kiri (sisi kiri kumparan menjadi kutub U). Dengan aturan genggaman tangan kanan (ibu jari ke kiri) mengikuti arah lilitan pada gambar dari terminal $A$ ke $B$, arus induksi mengalir dari **A ke B** (pernyataan $3$ benar, pernyataan $4$ salah).\n- **Saat magnet digeser ke kiri (menjauhi kumparan):** fluks magnetik ke kanan berkurang, sehingga kumparan menghasilkan medan magnet induksi ke arah kanan untuk mempertahankannya. Arah arus induksi berbalik, yakni mengalir dari **B ke A** (pernyataan $2$ benar, pernyataan $1$ salah).\n- **Saat magnet digeser ke atas atau ke bawah:** kedua gerakan menjauhkan sumbu magnet dari sumbu kumparan sehingga fluks magnetik berkurang (sama seperti digeser ke kiri), sehingga arah arus induksi adalah dari B ke A (pernyataan $6$ salah).\n\nBerdasarkan pilihan yang tersedia, pasangan pernyataan yang benar adalah $2$ dan $3$ (pilihan B).',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Sebuah pipa U diisi air. Kedua ujung kaki pipa U itu, sebut saja kaki A dan kaki B, dibiarkan terbuka. Apabila sedikit di atas kaki A ditiupkan udara secara mendatar dan konstan,\n(1) tekanan udara di permukaan air di kaki A dan kaki B sama besar,\n(2) permukaan air di kaki A dan B bergerak naik turun bergantian,\n(3) permukaan air di kaki A lebih tinggi dari permukaan air di kaki B,\n(4) pada ketinggian yang sama, tekanan air di kaki B dan di kaki A sama besar.\n\nPernyataan yang benar adalah ....\n\nA. (1), (2), dan (3)\nB. (1) dan (3)\nC. (2) dan (4)\nD. (3) dan (4)',
          answer: 'D. (3) dan (4)',
          principle:
            'Asas Bernoulli menyatakan bahwa pada aliran fluida yang lebih cepat tekanannya lebih rendah ($P_A < P_B$), dan hukum pokok hidrostatika menyatakan bahwa pada kedalaman/ketinggian yang sama di dalam fluida diam yang terhubung, tekanan totalnya sama besar.',
          solution:
            'Ketika udara ditiupkan mendatar dan konstan di atas ujung pipa A:\n- **(1) Salah:** Menurut Asas Bernoulli, kelajuan udara di atas kaki A lebih besar daripada udara diam di atas kaki B, sehingga tekanan udara tepat di atas permukaan air kaki A lebih kecil daripada tekanan atmosfer di kaki B ($P_A < P_B$).\n- **(2) Salah:** Karena tiupan udara berlangsung konstan, sistem mencapai keadaan setimbang statis baru, bukan berosilasi naik turun terus-menerus.\n- **(3) Benar:** Karena tekanan udara di kaki B lebih besar daripada di kaki A ($P_B > P_A$), udara menekan permukaan air di kaki B turun dan mendorong permukaan air di kaki A naik hingga lebih tinggi dari kaki B.\n- **(4) Benar:** Setelah air setimbang dan diam, menurut hukum pokok hidrostatika pada satu fluida kontinu (air dalam pipa U), titik-titik yang berada pada garis mendatar (ketinggian yang sama) di kaki A dan kaki B memiliki tekanan hidrostatis total yang sama besar ($P_A + \\rho_{\\text{air}} g \\Delta h = P_B$).\n\nJadi, pernyataan yang benar adalah (3) dan (4) (pilihan D).',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Seberkas cahaya putih merambat di udara, kemudian menembus sebuah kaca planparalel dengan sudut datang tidak nol, selanjutnya keluar ke udara.\n(1) Cahaya keluar dari kaca planparalel dalam keadaan terurai dalam banyak warna.\n(2) Arah rambat cahaya yang masuk ke kaca planparalel dan keluar dari kaca planparalel saling sejajar.\n(3) Panjang gelombang cahaya di udara dan di dalam kaca planparalel tidak berbeda.\n(4) Di dalam kaca planparalel cahaya terurai dalam banyak warna.\n\nPernyataan yang benar adalah ....\n\nA. (1), (2), dan (3)\nB. (1) dan (3)\nC. (2) dan (4)\nD. (3) dan (4)',
          answer: 'C. (2) dan (4)',
          principle:
            'Pembiasan pada kaca planparalel dengan dua permukaan sejajar menghasilkan sudut keluar sama dengan sudut datang awal ($\\theta_{\\text{keluar}} = \\theta_{\\text{datang}}$), sedangkan indeks bias kaca bergantung pada panjang gelombang cahaya (dispersi).',
          solution:
            'Tinjau pembiasan cahaya putih (polikromatik) melalui kaca planparalel dengan $\\theta_1 \\ne 0$:\n- **(4) Benar:** Kaca memiliki indeks bias yang sedikit berbeda untuk tiap warna/panjang gelombang (dispersi), sehingga saat masuk ke dalam kaca pada sudut datang $\\theta_1 \\ne 0$, tiap warna dibiaskan dengan sudut bias $\\theta_2$ berbeda ($n_{\\text{udara}}\\sin\\theta_1 = n_{\\lambda}\\sin\\theta_2$) dan terurai di dalam kaca.\n- **(2) Benar:** Saat keluar dari sisi seberang yang sejajar menuju udara kembali, berlaku $n_{\\lambda}\\sin\\theta_2 = n_{\\text{udara}}\\sin\\theta_3$, sehingga $\\sin\\theta_3 = \\sin\\theta_1 \\implies \\theta_3 = \\theta_1$ untuk semua warna. Artinya berkas yang keluar tetap sejajar dengan arah berkas masuk.\n- **(1) Salah:** Karena setiap warna keluar kembali ke udara dengan sudut $\\theta_3 = \\theta_1$ yang sama (tidak menyebar membentuk kipas sudut seperti pada prisma), berkas-berkas sejajarnya tetap saling bertumpuk dan tampak putih.\n- **(3) Salah:** Frekuensi gelombang tetap, tetapi cepat rambat di dalam kaca berkurang menjadi $v = \\frac{c}{n}$, sehingga panjang gelombangnya di dalam kaca mengecil menjadi $\\lambda_{\\text{kaca}} = \\frac{\\lambda_{\\text{udara}}}{n} < \\lambda_{\\text{udara}}$.\n\nJadi, pernyataan yang benar adalah (2) dan (4) (pilihan C).',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Berikut ini pernyataan mengenai gelombang:\n1) arah getar di udara sejajar dengan arah rambat,\n2) makin dekat dengan sumber, maka makin kuat intensitasnya,\n3) lebih cepat merambat pada zat padat daripada zat cair dan gas,\n4) gelombang dapat terpolarisasi.\n\nPernyataan yang benar tentang gelombang bunyi adalah ....\n\nA. $1$, $2$, dan $3$\nB. $1$, $3$, dan $4$\nC. $2$, $3$, dan $4$\nD. $1$, $2$, dan $4$',
          answer: 'A. $1$, $2$, dan $3$',
          principle:
            'Gelombang bunyi adalah gelombang mekanik longitudinal di fluida sehingga tidak dapat terpolarisasi, intensitasnya berbanding terbalik dengan kuadrat jarak ($I = \\frac{P}{4\\pi r^2}$), dan cepat rambatnya paling besar pada medium padat yang lebih kaku.',
          solution:
            'Evaluasi sifat gelombang bunyi:\n1. **Benar:** Di udara (fluida), gelombang bunyi merupakan gelombang longitudinal (berupa rapatan dan regangan) sehingga arah getar partikel sejajar dengan arah rambat gelombang.\n2. **Benar:** Untuk sumber titik dengan daya $P$, intensitas bunyi memenuhi $I = \\frac{P}{4\\pi r^2}$; makin kecil jarak $r$ dari sumber, makin besar intensitasnya.\n3. **Benar:** Cepat rambat bunyi bergantung pada kekakuan/modulus elastisitas medium. Zat padat umumnya jauh lebih kaku dibanding zat cair dan gas, sehingga $v_{\\text{padat}} > v_{\\text{cair}} > v_{\\text{gas}}$.\n4. **Salah:** Polarisasi hanya dapat terjadi pada gelombang **transversal** (seperti cahaya), tidak pada gelombang longitudinal seperti bunyi di udara.\n\nJadi, pernyataan yang benar adalah $1$, $2$, dan $3$ (pilihan A).',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Pernyataan berikut berkaitan dengan efek Doppler:\n1) Efek Doppler adalah pergeseran frekuensi gelombang akibat gerak relatif antara sumber gelombang dan pengamat.\n2) Efek Doppler dapat terjadi pada gelombang bunyi, namun tidak pada gelombang cahaya.\n3) Saat sumber gelombang dan pengamat bergerak saling menjauh, frekuensi gelombang yang teramati lebih kecil.\n4) Saat sumber gelombang dan pengamat bergerak saling mendekat, frekuensi gelombang yang teramati lebih kecil.\n\nPernyataan yang benar adalah ....\n\nA. $1$, $2$, dan $3$\nB. $1$ dan $3$\nC. $1$ dan $4$\nD. $2$ dan $4$',
          answer: 'B. $1$ dan $3$',
          principle:
            'Efek Doppler terjadi pada semua jenis gelombang (termasuk bunyi dan cahaya) sebagai perubahan frekuensi teramati akibat gerak relatif sumber dan pengamat: frekuensi naik saat saling mendekat dan turun saat saling menjauh.',
          solution:
            'Evaluasi tiap pernyataan mengenai efek Doppler:\n1. **Benar:** Efek Doppler didefinisikan sebagai perubahan/pergeseran frekuensi (dan panjang gelombang) yang diterima pengamat dibandingkan frekuensi sumber akibat gerak relatif antara sumber dan pengamat.\n2. **Salah:** Efek Doppler tidak hanya terjadi pada gelombang bunyi, tetapi juga pada gelombang elektromagnetik/cahaya (misalnya pergeseran merah/*redshift* galaksi yang menjauh).\n3. **Benar:** Saat sumber dan pengamat saling menjauh, muka gelombang yang tiba di pengamat lebih jarang sehingga frekuensi teramati $f_p < f_s$ (lebih kecil).\n4. **Salah:** Saat sumber dan pengamat saling mendekat, muka gelombang diterima lebih rapat sehingga frekuensi teramati lebih *besar* ($f_p > f_s$), bukan lebih kecil.\n\nJadi, pernyataan yang benar adalah $1$ dan $3$ (pilihan B).',
          rubric: OK
        }
      ]
    },
    {
      no: 3,
      title: 'Bagian III: Sebab-Akibat',
      marks: 5,
      stem: 'Tentukan hubungan kebenaran pernyataan dan alasan pada setiap soal (5 soal dari nomor asli 21–25; masing-masing 1 poin).',
      parts: [
        {
          label: '21',
          marks: 1,
          figures: [
            {
              src: '/papers/osn-ipa-smp-fisika-2023/fig-21.webp',
              caption: 'Kurva jarak tempuh terhadap waktu tempuh perjalanan sepeda.',
              alt: 'Grafik jarak tempuh pada sumbu vertikal terhadap waktu tempuh pada sumbu horizontal dengan segmen menanjak melengkung, segmen datar mendatar, dan segmen garis lurus miring.'
            }
          ],
          prompt:
            'Gambar berikut merupakan kurva jarak tempuh terhadap waktu dari seorang anak yang berangkat ke sekolah dengan mengendarai sepeda.\n\nGrafik tersebut menunjukkan bahwa selama keberangkatan ke sekolah, anak tersebut pernah berhenti sebelum sampai sekolah.\nSEBAB\nGaris-garis lurus pada kurva tersebut menunjukkan kecepatan sepeda sama dengan nol.\n\nKedua pernyataan di atas adalah...\n\nA. benar dan berhubungan\nB. benar tetapi tidak berhubungan\nC. hanya satu yang benar\nD. tidak benar',
          answer: 'C. hanya satu yang benar',
          principle:
            'Pada grafik jarak tempuh terhadap waktu ($s$–$t$), kemiringan (gradien) kurva menyatakan laju/kecepatan sesaat ($v = \\frac{\\Delta s}{\\Delta t}$): garis mendatar (gradien nol) berarti berhenti ($v = 0$), sedangkan garis lurus miring berarti bergerak dengan kecepatan konstan tidak nol ($v \\ne 0$).',
          solution:
            '- **Pernyataan pertama (benar):** Pada grafik jarak tempuh terhadap waktu, terdapat bagian kurva yang berbentuk garis lurus mendatar (horizontal), di mana jarak tempuh tidak bertambah meskipun waktu terus berjalan. Artinya laju anak sama dengan nol (pernah berhenti sebelum tiba di sekolah).\n- **Pernyataan kedua (salah):** Tidak semua garis lurus pada kurva menunjukkan kecepatan sama dengan nol. Selain garis lurus mendatar ($v = 0$), grafik juga memuat segmen garis lurus miring menanjak di bagian akhir yang memiliki kemiringan positif konstan, yang berarti sepeda bergerak dengan kecepatan tetap tidak nol ($v > 0$).\n\nKarena hanya pernyataan pertama yang benar, jawaban yang tepat adalah C.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Saat direbus sampai matang, cairan kuning dan putih telur berubah wujud menjadi padat. Perubahan seperti ini merupakan perubahan fisika.\nSEBAB\nMembeku merupakan perubahan fisika yang terjadi saat suatu benda berubah wujud dari cair menjadi padat dengan menyerap kalor.\n\nKedua pernyataan di atas adalah...\n\nA. benar dan berhubungan\nB. benar tetapi tidak berhubungan\nC. hanya satu yang benar\nD. tidak benar',
          answer: 'D. tidak benar',
          principle:
            'Pemadatan putih dan kuning telur saat direbus adalah denaturasi protein (perubahan kimia ireversibel), sedangkan proses membeku (cair ke padat) berlangsung dengan **melepaskan** kalor.',
          solution:
            '- **Pernyataan pertama (salah):** Pemadatan cairan putih dan kuning telur saat direbus disebabkan oleh denaturasi dan koagulasi protein akibat pemanasan. Sifat zat baru berbeda dan tidak dapat kembali menjadi cairan telur mentah apabila didinginkan, sehingga merupakan **perubahan kimia**, bukan perubahan fisika.\n- **Pernyataan kedua (salah):** Membeku memang perubahan fisika dari wujud cair menjadi padat, tetapi proses tersebut terjadi dengan **melepaskan kalor** ke lingkungan (seperti air yang didinginkan dalam *freezer* menjadi es), bukan menyerap kalor.\n\nKarena kedua pernyataan salah, jawaban yang benar adalah D.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Gerhana bulan yang terjadi saat posisi bulan berada di daerah penumbra bayangan bumi dinamakan gerhana bulan total.\nSEBAB\nPada saat gerhana bulan total, sinar matahari yang menuju bulan sepenuhnya tertutup oleh bumi.\n\nKedua pernyataan di atas adalah...\n\nA. benar dan berhubungan\nB. benar tetapi tidak berhubungan\nC. hanya satu yang benar\nD. tidak benar',
          answer: 'C. hanya satu yang benar',
          principle:
            'Gerhana bulan total terjadi ketika seluruh piringan Bulan berada di dalam bayangan inti Bumi (umbra), sedangkan ketika Bulan hanya melintasi bayangan kabur (penumbra) terjadi gerhana bulan penumbra.',
          solution:
            '- **Pernyataan pertama (salah):** Ketika Bulan berada di daerah bayangan penumbra Bumi (masih menerima sebagian cahaya Matahari), peristiwa yang terjadi disebut **gerhana bulan penumbra**, bukan gerhana bulan total.\n- **Pernyataan kedua (benar):** Gerhana bulan total terjadi ketika Bulan masuk sepenuhnya ke daerah umbra Bumi, sehingga cahaya langsung Matahari menuju Bulan tertutup seluruhnya oleh Bumi.\n\nKarena hanya satu pernyataan yang benar, jawaban yang benar adalah C.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Gelombang cahaya putih merupakan gabungan banyak gelombang cahaya dengan berbagai panjang gelombang.\nSEBAB\nCepat rambat gelombang cahaya di udara tidak bergantung pada panjang gelombang.\n\nKedua pernyataan di atas adalah...\n\nA. benar dan berhubungan\nB. benar tetapi tidak berhubungan\nC. hanya satu yang benar\nD. tidak benar',
          answer: 'B. benar tetapi tidak berhubungan',
          principle:
            'Cahaya putih bersifat polikromatik (tersusun atas spektrum berbagai panjang gelombang cahaya tampak), dan dalam tingkat fisika sekolah di udara/vakum semua panjang gelombang cahaya merambat dengan kelajuan yang praktis sama ($c \\approx 3 \\times 10^8\\text{ m/s}$).',
          solution:
            '- **Pernyataan pertama (benar):** Cahaya putih (polikromatik) terdiri atas perpaduan berbagai warna spektrum cahaya tampak (merah hingga ungu) yang masing-masing memiliki panjang gelombang berbeda.\n- **Pernyataan kedua (benar):** Di ruang hampa dan secara praktis di udara ($n_{\\text{udara}} \\approx 1{,}0003$), cepat rambat gelombang cahaya tidak bergantung pada panjang gelombangnya (hampir konstan sebesar $c \\approx 3 \\times 10^8\\text{ m/s}$).\n- **Hubungan sebab-akibat (tidak berhubungan):** Sifat bahwa kelajuan cahaya di udara sama untuk berbagai panjang gelombang tidak menjelaskan mengapa cahaya putih tersusun atas gabungan banyak panjang gelombang.\n\nJadi, kedua pernyataan benar tetapi tidak berhubungan (pilihan B).',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Perubahan warna langit dari biru pada siang hari menjadi jingga pada sore hari merupakan contoh peristiwa hamburan cahaya.\nSEBAB\nHamburan cahaya matahari pada atmosfer bumi disebabkan oleh interaksi gelombang cahaya dengan partikel-partikel di atmosfer.\n\nKedua pernyataan di atas adalah...\n\nA. benar dan berhubungan\nB. benar tetapi tidak berhubungan\nC. hanya satu yang benar\nD. tidak benar',
          answer: 'B. benar tetapi tidak berhubungan',
          principle:
            'Hamburan cahaya di atmosfer terjadi akibat interaksi cahaya Matahari dengan molekul udara/partikel atmosfer, sedangkan perubahan warna langit dari biru (siang) ke jingga (sore) disebabkan oleh ketergantungan hamburan Rayleigh pada panjang gelombang dan panjang lintasan cahaya di atmosfer.',
          solution:
            '- **Pernyataan pertama (benar):** Warna biru langit pada siang hari dan jingga kemerahan saat senja merupakan fenomena hamburan cahaya Matahari oleh atmosfer Bumi (hamburan Rayleigh).\n- **Pernyataan kedua (benar):** Hamburan cahaya Matahari terjadi karena gelombang cahaya berinteraksi dengan molekul gas dan partikel-partikel kecil di atmosfer.\n- **Hubungan sebab-akibat (tidak berhubungan):** Alasan kedua hanya menjelaskan penyebab umum terjadinya hamburan di atmosfer, tetapi tidak menjelaskan *mengapa terjadi perubahan warna* dari biru ke jingga (yang terjadi karena cahaya berpanjang gelombang pendek seperti biru dihamburkan lebih kuat sepanjang lintasan atmosfer yang lebih panjang pada sore hari sehingga cahaya merah-jingga yang dominan mencapai mata pengamat).\n\nJadi, kedua pernyataan benar tetapi tidak berhubungan (pilihan B).',
          rubric: OK
        }
      ]
    },
    {
      no: 4,
      title: 'Bagian IV: Isian Singkat',
      marks: 10,
      stem: 'Tuliskan jawaban singkat beserta satuan yang diminta (5 soal dari nomor asli 26–30; masing-masing 2 poin).',
      parts: [
        {
          label: '26',
          marks: 2,
          prompt:
            'Sebuah balok bermassa $5\\text{ kg}$ yang sedang bergerak dengan kecepatan $8\\text{ m/s}$ menumbuk balok lain bermassa $3\\text{ kg}$ yang diam pada permukaan horizontal dan licin. Jika setelah tumbukan kedua balok tersebut saling menempel satu sama lain, kecepatan kedua balok sesaat setelah tumbukan sama dengan ... $\\text{m/s}$.',
          answer: '$5\\text{ m/s}$',
          answerNumeric: [{ name: 'kecepatan', value: 5, unit: 'm/s' }],
          principle:
            'Pada tumbukan tak lenting sempurna di permukaan horizontal licin (tidak ada gaya luar horizontal), berlaku hukum kekekalan momentum linear: $m_1 v_1 + m_2 v_2 = (m_1 + m_2) v\'$.',
          solution:
            'Diketahui dalam satuan SI:\n- $m_1 = 5\\text{ kg}$, $v_1 = 8\\text{ m/s}$\n- $m_2 = 3\\text{ kg}$, $v_2 = 0\\text{ m/s}$\n\nKarena kedua balok menempel setelah tumbukan, keduanya bergerak dengan kecepatan akhir bersama $v\'$. Dari hukum kekekalan momentum:\n$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v\'$$\n$$(5\\text{ kg})(8\\text{ m/s}) + (3\\text{ kg})(0\\text{ m/s}) = (5\\text{ kg} + 3\\text{ kg}) v\'$$\n$$40\\text{ kg}\\cdot\\text{m/s} = (8\\text{ kg}) v\' \\implies v\' = \\frac{40}{8} = 5\\text{ m/s}.$$',
          rubric: [
            { code: 'M1', text: 'Menerapkan hukum kekekalan momentum untuk tumbukan tak lenting sempurna $m_1 v_1 + m_2 v_2 = (m_1 + m_2) v\'$.' },
            { code: 'A1', text: 'Menghitung kecepatan akhir $v\' = 5\\text{ m/s}$ dengan tepat.' }
          ]
        },
        {
          label: '27',
          marks: 2,
          prompt:
            'Pada setiap sentimeter kubik awan cumulus dapat berisi $210$ tetes air berdiameter $20\\ \\mu\\text{m}$. Jika awan cumulus setebal $200\\text{ m}$ menutupi kawasan seluas $1\\text{ km}^2$, massa air yang terkandung di dalamnya adalah ... $\\text{kg}$. Gunakan nilai $\\pi = \\frac{22}{7}$ dan massa jenis air $1\\text{ kg/liter}$.',
          answer: '$176\\,000\\text{ kg}$',
          answerNumeric: [{ name: 'massa_air', value: 176000, unit: 'kg' }],
          principle:
            'Massa total air dalam awan adalah hasil kali jumlah seluruh tetes air, volume satu tetes bola $V_1 = \\frac{4}{3}\\pi r^3$, dan massa jenis air $\\rho = 1000\\text{ kg/m}^3$.',
          solution:
            'Konversi seluruh besaran ke satuan SI:\n1. **Volume total awan:**\n$$A = 1\\text{ km}^2 = (10^3\\text{ m})^2 = 10^6\\text{ m}^2, \\qquad h = 200\\text{ m}.$$\n$$V_{\\text{awan}} = A \\times h = 10^6\\text{ m}^2 \\times 200\\text{ m} = 2 \\times 10^8\\text{ m}^3.$$\n\n2. **Jumlah seluruh tetes air:**\nKonsentrasi tetes $n = 210\\text{ tetes/cm}^3 = 210 \\times 10^6\\text{ tetes/m}^3 = 2{,}1 \\times 10^8\\text{ tetes/m}^3$.\n$$N = n \\times V_{\\text{awan}} = (2{,}1 \\times 10^8\\text{ m}^{-3})(2 \\times 10^8\\text{ m}^3) = 4{,}2 \\times 10^{16}\\text{ tetes}.$$\n\n3. **Volume satu tetes air:**\nDiameter $d = 20\\ \\mu\\text{m}$, sehingga jari-jari $r = 10\\ \\mu\\text{m} = 10^{-5}\\text{ m}$.\n$$V_1 = \\frac{4}{3}\\pi r^3 = \\frac{4}{3} \\times \\frac{22}{7} \\times (10^{-5}\\text{ m})^3 = \\frac{88}{21} \\times 10^{-15}\\text{ m}^3.$$\n\n4. **Volume total dan massa air:**\n$$V_{\\text{air}} = N \\times V_1 = (4{,}2 \\times 10^{16}) \\times \\frac{88}{21} \\times 10^{-15}\\text{ m}^3 = 2 \\times 88\\text{ m}^3 = 176\\text{ m}^3.$$\nKarena massa jenis air $\\rho = 1\\text{ kg/liter} = 1000\\text{ kg/m}^3$:\n$$m_{\\text{air}} = \\rho \\times V_{\\text{air}} = (1000\\text{ kg/m}^3)(176\\text{ m}^3) = 176\\,000\\text{ kg}.$$',
          rubric: [
            { code: 'M1', text: 'Menghitung volume awan ($2 \\times 10^8\\text{ m}^3$), jumlah tetes total ($4{,}2 \\times 10^{16}$), dan volume satu tetes bola dengan konversi satuan SI yang konsisten.' },
            { code: 'A1', text: 'Memperoleh massa total air $176\\,000\\text{ kg}$ dengan tepat.' }
          ]
        },
        {
          label: '28',
          marks: 2,
          figures: [
            {
              src: '/papers/osn-ipa-smp-fisika-2023/fig-28.webp',
              caption: 'Rangkaian hambatan listrik antara terminal A, B, C, dan D.',
              alt: 'Diagram rangkaian hambatan listrik berbentuk tangga dengan jalur atas dan jalur bawah antara terminal A dan B serta dua cabang vertikal dan ujung kanan terbuka di C dan D.'
            }
          ],
          prompt:
            'Perhatikan rangkaian hambatan listrik berikut ini.\n\nHambatan pengganti antara ujung A dan B adalah ... ohm.',
          answer: '$\\frac{52}{7}\\text{ ohm}$ ($\\approx 7{,}43\\text{ ohm}$)',
          answerNumeric: [{ name: 'hambatan_pengganti', value: 7.43, unit: 'ohm' }],
          principle:
            'Cabang rangkaian yang berujung terbuka tidak dialiri arus listrik sehingga tidak memengaruhi hambatan ekivalen; hambatan disederhanakan dengan aturan seri ($R_s = \\sum R_i$) dan paralel ($\\frac{1}{R_p} = \\sum \\frac{1}{R_i}$).',
          solution:
            'Karena terminal $C$ dan $D$ terbuka (tidak terhubung ke mana pun), arus listrik tidak mengalir melalui dua resistor $2\\ \\Omega$ paling kanan di cabang atas maupun cabang bawah.\n\n1. **Sederhanakan cabang seri di sebelah kanan cabang $6\\ \\Omega$:**\nTiga hambatan yang dilewati arus pada loop kanan tersusun seri:\n$$R_{\\text{seri}} = 2\\ \\Omega + 4\\ \\Omega + 2\\ \\Omega = 8\\ \\Omega.$$\n\n2. **Gabungkan secara paralel dengan hambatan vertikal $6\\ \\Omega$:**\n$$R_p = \\frac{6 \\times 8}{6 + 8} = \\frac{48}{14} = \\frac{24}{7}\\ \\Omega.$$\n\n3. **Tambahkan dua hambatan $2\\ \\Omega$ yang terhubung seri ke terminal A dan B:**\n$$R_{AB} = 2\\ \\Omega + \\frac{24}{7}\\ \\Omega + 2\\ \\Omega = 4 + \\frac{24}{7} = \\frac{52}{7}\\ \\Omega \\approx 7{,}43\\ \\Omega.$$\n\n*(Catatan: kunci pada naskah sumber menuliskan $8\\text{ ohm}$, kemungkinan karena salah cetak nilai hambatan pada salah satu cabang vertikal pada gambar sumber; untuk rangkaian sesuai nilai yang tertera pada gambar, hambatan penggantinya adalah $\\frac{52}{7}\\text{ ohm} \\approx 7{,}43\\text{ ohm}$.)*',
          rubric: [
            { code: 'M1', text: 'Mengabaikan cabang terbuka di C dan D serta menghitung susunan seri-paralel $R_p = 6 \\parallel (2 + 4 + 2) = \\frac{24}{7}\\ \\Omega$.' },
            { code: 'A1', text: 'Menjumlahkan hambatan seri dengan cabang menuju A dan B hingga memperoleh $R_{AB} = \\frac{52}{7}\\text{ ohm} \\approx 7{,}43\\text{ ohm}$.' }
          ]
        },
        {
          label: '29',
          marks: 2,
          prompt:
            'Dua cermin divergen A dan B disusun saling berhadapan, sehingga sumbu keduanya segaris. Panjang fokus kedua cermin tidak sama. Sebuah benda ditaruh tepat di tengah-tengah di antara kedua cermin. Besar bayangan oleh cermin A $0{,}5$ kali besar benda. Jika besar bayangan oleh cermin B $1{,}6$ kali besar bayangan oleh cermin A, panjang fokus cermin B sama dengan ... kali panjang fokus cermin A.',
          answer: '$4$',
          answerNumeric: [{ name: 'rasio_fokus', value: 4, unit: 'kali' }],
          principle:
            'Untuk cermin divergen (cermin cembung) dengan jarak fokus negatif $f = -|f|$ dan benda nyata pada jarak $s > 0$, persamaan cermin $\\frac{1}{s} + \\frac{1}{s\'} = -\\frac{1}{|f|}$ menghasilkan perbesaran bayangan $M = \\left|\\frac{s\'}{s}\\right| = \\frac{|f|}{|f| + s}$.',
          solution:
            'Karena benda diletakkan tepat di tengah-tengah antara kedua cermin, jarak benda ke cermin A dan ke cermin B sama besar: $s_A = s_B = s > 0$.\n\nPada cermin divergen (cermin cembung), jarak fokus bernilai negatif ($f = -|f|$):\n$$\\frac{1}{s\'} = -\\frac{1}{|f|} - \\frac{1}{s} = -\\frac{|f| + s}{|f| s} \\implies s\' = -\\frac{|f| s}{|f| + s}.$$\nOleh karena itu, besar perbesaran bayangan adalah:\n$$M = \\left|\\frac{s\'}{s}\\right| = \\frac{|f|}{|f| + s}.$$\n\n1. **Untuk cermin A ($M_A = 0{,}5 = \\frac{1}{2}$):**\n$$\\frac{|f_A|}{|f_A| + s} = \\frac{1}{2} \\implies 2|f_A| = |f_A| + s \\implies s = |f_A|.$$\n\n2. **Untuk cermin B ($M_B = 1{,}6 \\times M_A = 1{,}6 \\times 0{,}5 = 0{,}8 = \\frac{4}{5}$):**\n$$\\frac{|f_B|}{|f_B| + s} = \\frac{4}{5} \\implies 5|f_B| = 4|f_B| + 4s \\implies |f_B| = 4s.$$\n\nSubstitusikan $s = |f_A|$:\n$$|f_B| = 4|f_A| \\implies \\frac{f_B}{f_A} = 4.$$\nJadi, panjang fokus cermin B sama dengan $4$ kali panjang fokus cermin A.',
          rubric: [
            { code: 'M1', text: 'Menurunkan hubungan perbesaran cermin divergen $M = \\frac{|f|}{|f| + s}$ sehingga $s = |f_A|$ dan $M_B = 0{,}8$.' },
            { code: 'A1', text: 'Menentukan rasio panjang fokus $\\frac{f_B}{f_A} = 4$ dengan tepat.' }
          ]
        },
        {
          label: '30',
          marks: 2,
          prompt:
            'Sebuah sumber titik bunyi memancar dengan daya keluaran $0{,}16\\pi\\text{ watt}$. Jika intensitas ambang pendengaran manusia adalah $10^{-12}\\text{ watt/m}^2$, maka pada jarak $2\\text{ m}$ dari sumber:\na. intensitas bunyi sama dengan ... $\\text{watt/m}^2$,\nb. taraf intensitas bunyi sama dengan ... $\\text{dB}$.',
          answer: 'a. $0{,}01\\text{ W/m}^2$; b. $100\\text{ dB}$',
          answerNumeric: [
            { name: 'intensitas', value: 0.01, unit: 'W/m^2' },
            { name: 'taraf_intensitas', value: 100, unit: 'dB' }
          ],
          principle:
            'Gelombang bunyi dari sumber titik merambat merata ke permukaan bola berjari-jari $r$ dengan intensitas $I = \\frac{P}{4\\pi r^2}$, dan taraf intensitasnya adalah $TI = 10\\log_{10}\\left(\\frac{I}{I_0}\\right)$.',
          solution:
            'Diketahui dalam satuan SI:\n- Daya sumber $P = 0{,}16\\pi\\text{ W}$\n- Jarak pengamat $r = 2\\text{ m}$\n- Intensitas ambang $I_0 = 10^{-12}\\text{ W/m}^2$\n\n**a. Menghitung intensitas bunyi ($I$):**\n$$I = \\frac{P}{4\\pi r^2} = \\frac{0{,}16\\pi\\text{ W}}{4\\pi (2\\text{ m})^2} = \\frac{0{,}16}{16}\\text{ W/m}^2 = 0{,}01\\text{ W/m}^2 = 10^{-2}\\text{ W/m}^2.$$\n\n**b. Menghitung taraf intensitas bunyi ($TI$):**\n$$TI = 10\\log_{10}\\left(\\frac{I}{I_0}\\right) = 10\\log_{10}\\left(\\frac{10^{-2}}{10^{-12}}\\right) = 10\\log_{10}(10^{10}) = 10 \\times 10 = 100\\text{ dB}.$$',
          rubric: [
            { code: 'A1', text: 'Menghitung intensitas bunyi $I = 0{,}01\\text{ W/m}^2$ dengan tepat.' },
            { code: 'A1', text: 'Menghitung taraf intensitas bunyi $TI = 100\\text{ dB}$ dengan tepat.' }
          ]
        }
      ]
    }
  ]
};
