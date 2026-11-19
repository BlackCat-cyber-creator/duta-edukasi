import { bab, soal } from '../author.js';

export default bab({
  grade: 10,
  number: 2,
  slug: 'sistem-periodik-unsur',
  title: 'Sistem Periodik Unsur dan Sifat Keperiodikan',
  element: 'Pemahaman Kimia: golongan, periode, jari-jari atom, energi ionisasi, afinitas elektron, dan elektronegativitas',
  summary: {
    overview: 'Sistem periodik unsur modern mengklasifikasikan seluruh unsur kimia berdasarkan keteraturan konfigurasi elektron sehingga sifat fisika dan kimianya dapat diprediksi secara sistematis. Bab ini mempelajari sejarah perkembangan sistem periodik unsur, penentuan golongan (utama dan transisi) serta periode dan blok dari konfigurasi elektron, hingga pola kecenderungan beserta anomali jari-jari atom, jari-jari ion, energi ionisasi, afinitas elektron, dan keelektronegatifan.',
    coreConcepts: [
      'Perkembangan Sistem Periodik Unsur: Klasifikasi unsur berkembang dari Triade Dobereiner (kelompok tiga unsur dengan massa tengah rata-rata), hukum Oktaf Newlands (pengulangan sifat tiap delapan unsur), tabel periodik Mendeleev (berdasarkan massa atom dan menyisakan ruang kosong bagi unsur belum ditemukan), hingga Sistem Periodik Modern oleh Henry Moseley yang menyusun unsur berdasarkan kenaikan nomor atom.',
      'Penentuan Periode, Golongan, dan Blok: Nomor periode sama dengan bilangan kuantum utama ($n$) terbesar pada kulit valensi. Unsur blok $s$ dan $p$ termasuk golongan utama ($\\text{IA}$–$\\text{VIIIA}$) dengan jumlah elektron valensi $ns^a$ atau $ns^a\\,np^b$. Unsur blok $d$ termasuk golongan transisi ($\\text{IB}$–$\\text{VIIIB}$) yang ditentukan oleh jumlah elektron $ns^a\\,(n-1)d^b$: jumlah $3$–$7$ adalah $\\text{IIIB}$–$\\text{VIIB}$, jumlah $8$–$10$ adalah $\\text{VIIIB}$, jumlah $11$ adalah $\\text{IB}$, dan jumlah $12$ adalah $\\text{IIB}$.',
      'Jari-jari Atom dan Jari-jari Ion: Jari-jari atom adalah jarak dari inti ke kulit elektron terluar. Dalam satu golongan dari atas ke bawah jari-jari atom membesar karena jumlah kulit bertambah; dalam satu periode dari kiri ke kanan mengecil karena muatan inti efektif bertambah pada jumlah kulit yang sama. Kation selalu lebih kecil daripada atom netralnya, sedangkan anion lebih besar; pada deret isoelektronik, semakin besar nomor atom, semakin kecil jari-jarinya.',
      'Energi Ionisasi dan Anomalinya: Energi ionisasi ($EI$) adalah energi minimum untuk melepas satu elektron dari atom atau ion berwujud gas. Umumnya $EI$ meningkat ke kanan dalam satu periode dan menurun ke bawah dalam satu golongan. Namun terjadi anomali pada periode 2 dan 3: $EI_1$ golongan $\\text{IIA}$ ($ns^2$) sedikit lebih besar daripada $\\text{IIIA}$ ($ns^2\\,np^1$), dan golongan $\\text{VA}$ ($ns^2\\,np^3$, setengah penuh stabil) sedikit lebih besar daripada $\\text{VIA}$ ($ns^2\\,np^4$).',
      'Afinitas Elektron dan Keelektronegatifan: Afinitas elektron ($AE$) adalah perubahan energi ketika satu atom netral berwujud gas menerima satu elektron membentuk anion. Keelektronegatifan adalah kecenderungan atom menarik pasangan elektron dalam ikatan kimia (terbesar pada fluorin, $\\text{F}$). Secara umum $AE$ makin negatif dan keelektronegatifan makin besar ke kanan dalam satu periode serta makin kecil ke bawah dalam satu golongan, dengan pengecualian $\\text{Cl}$ yang memiliki $AE$ lebih negatif daripada $\\text{F}$ akibat tolakan elektron pada kulit $2p$ $\\text{F}$ yang sempit.'
    ],
    keyFormulas: [
      { label: 'Proses energi ionisasi pertama', formula: '\\text{X}(g) + EI_1 \\longrightarrow \\text{X}^+(g) + e^-' },
      { label: 'Proses afinitas elektron pertama', formula: '\\text{X}(g) + e^- \\longrightarrow \\text{X}^-(g) + \\text{energi}' },
      { label: 'Aturan golongan blok d (a + b)', formula: '\\text{Golongan} = ns^a\\,(n-1)d^b \\implies \\begin{cases} 3\\text{--}7 & \\text{IIIB--VIIB} \\\\ 8\\text{--}10 & \\text{VIIIB} \\\\ 11, 12 & \\text{IB, IIB} \\end{cases}' },
      { label: 'Tren sifat periodik (kiri ke kanan, periode sama)', formula: 'r_{\\text{atom}} \\downarrow \\quad | \\quad EI \\uparrow \\quad | \\quad \\chi\\text{ (elektronegativitas)} \\uparrow' }
    ],
    workedExamples: [
      {
        title: 'Menentukan golongan dan periode unsur transisi',
        problem: 'Tentukan letak unsur $_{26}\\text{Fe}$ dalam sistem periodik unsur modern.',
        solution: 'Konfigurasi elektron $_{26}\\text{Fe}$ adalah $[\\text{Ar}]\\,3d^6\\,4s^2$. Nilai $n$ terbesar pada konfigurasi tersebut adalah $4$ sehingga unsur terletak pada **periode 4**. Elektron valensinya menempati $4s^2\\,3d^6$ (blok $d$) dengan jumlah $2 + 6 = 8$, sehingga berada pada **golongan VIIIB**.'
      },
      {
        title: 'Mengurutkan jari-jari deret isoelektronik',
        problem: 'Urutkan spesi $_{8}\\text{O}^{2-}$, $_{9}\\text{F}^-$, $_{11}\\text{Na}^+$, dan $_{12}\\text{Mg}^{2+}$ dari jari-jari terkecil ke terbesar.',
        solution: 'Keempat spesi sama-sama memiliki $10$ elektron ($1s^2\\,2s^2\\,2p^6$). Semakin banyak proton di inti, tarikan inti terhadap $10$ elektron tersebut semakin kuat dan ukurannya semakin menyusut. Karena jumlah proton $\\text{Mg}^{2+}\\,(12) > \\text{Na}^+\\,(11) > \\text{F}^-\\,(9) > \\text{O}^{2-}\\,(8)$, maka urutan jari-jari dari terkecil ke terbesar adalah **$\\text{Mg}^{2+} < \\text{Na}^+ < \\text{F}^- < \\text{O}^{2-}$**.'
      },
      {
        title: 'Menentukan golongan dari lonjakan energi ionisasi',
        problem: 'Suatu unsur periode 3 memiliki data energi ionisasi bertingkat ($\\text{kJ/mol}$): $EI_1 = 738$, $EI_2 = 1.451$, $EI_3 = 7.733$, dan $EI_4 = 10.543$. Tentukan golongan unsur tersebut.',
        solution: 'Lonjakan paling ekstrem terjadi antara $EI_2$ ($1.451$) dan $EI_3$ ($7.733$, naik lebih dari lima kali lipat). Hal ini menunjukkan dua elektron pertama berada pada kulit terluar ($3s^2$), sedangkan elektron ketiga harus dilepas dari kulit dalam yang stabil seperti gas mulia. Oleh karena itu, unsur tersebut memiliki $2$ elektron valensi dan berada pada **golongan IIA** ($_{12}\\text{Mg}$).'
      }
    ],
    misconceptions: [
      'Mengira unsur golongan transisi $\\text{IB}$ hanya memiliki $1$ elektron pada subkulit valensi; sebenarnya konfigurasi akhirnya adalah $ns^1\\,(n-1)d^{10}$ dengan total $11$ elektron di subkulit $s$ dan $d$.',
      'Menganggap urutan energi ionisasi dari kiri ke kanan dalam satu periode selalu naik tanpa pengecualian; faktanya golongan $\\text{IIA} > \\text{IIIA}$ dan $\\text{VA} > \\text{VIA}$.',
      'Menyamakan keelektronegatifan gas mulia sebagai nilai tertinggi karena terletak paling kanan; gas mulia umumnya sangat stabil dan sukar berikatan sehingga skala keelektronegatifan Pauling tertinggi dimiliki oleh fluorin ($\\text{F}$).',
      'Mengira ion negatif lebih kecil daripada atom netralnya karena menarik elektron; tambahan elektron memperbesar tolakan antarelektron sehingga jari-jari anion lebih besar daripada atom netralnya.'
    ],
    tutorTip: 'Ingat pola sederhana tabel periodik ke kanan atas (menuju Fluorin): ukuran atom makin kecil, sedangkan energi ionisasi, afinitas elektron, dan keelektronegatifan makin besar. Kebalikannya mengarah ke kiri bawah (menuju Fransium/Sesium): jari-jari dan sifat logam paling besar.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Dasar penyusunan unsur-unsur dalam Sistem Periodik Unsur Modern yang dikemukakan oleh Henry Moseley dan membetulkan kekurangan tabel Mendeleev adalah kenaikan...',
      options: [
        'massa atom relatif unsur',
        'jumlah neutron di dalam inti',
        'nomor atom (jumlah proton)',
        'bilangan massa rata-rata isotop'
      ],
      answer: 'C',
      hint: 'Moseley menemukan keteraturan sifat unsur melalui spektrum sinar-X yang berbanding lurus dengan muatan inti.',
      solution: 'Mendeleev menyusun unsur berdasarkan kenaikan massa atom sehingga ada beberapa pasangan unsur yang posisinya terbalik terhadap sifat kimianya. Moseley membuktikan bahwa sifat periodik unsur merupakan fungsi dari kenaikan nomor atom ($Z$). Jawaban: **C**'
    }),
    soal({
      level: 'Dasar',
      q: 'Unsur belerang memiliki nomor atom $16$. Letak unsur tersebut dalam sistem periodik unsur modern adalah...',
      options: [
        'golongan VIA, periode 3',
        'golongan IVA, periode 3',
        'golongan VIA, periode 2',
        'golongan VIB, periode 3'
      ],
      answer: 'A',
      hint: 'Tuliskan konfigurasi elektron $_{16}\\text{S}$, lalu perhatikan kulit terluar ($n$) dan jumlah elektron pada subkulit $s$ dan $p$ terluar.',
      solution: 'Konfigurasi elektron $_{16}\\text{S}$ adalah $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4$. Kulit terluar adalah $n = 3$ sehingga berada pada periode $3$. Elektron valensinya menempati $3s^2\\,3p^4$ (blok $p$) sebanyak $2 + 4 = 6$ elektron, sehingga termasuk golongan VIA. Jawaban: **A**'
    }),
    soal({
      level: 'Dasar',
      q: 'Dalam satu golongan dari atas ke bawah pada sistem periodik unsur, jari-jari atom cenderung semakin besar karena...',
      options: [
        'muatan inti berkurang sehingga gaya tarik inti melemah',
        'jumlah elektron valensi bertambah banyak di kulit terluar',
        'energi ionisasi meningkat tajam ke arah bawah golongan',
        'jumlah kulit elektron bertambah sehingga jarak inti ke elektron terluar makin jauh'
      ],
      answer: 'D',
      hint: 'Bandingkan konfigurasi kulit unsur periode 2, periode 3, dan periode 4 dalam satu golongan yang sama.',
      solution: 'Setiap turun satu periode dalam satu golongan, jumlah kulit atom bertambah satu lapis. Bertambahnya kulit elektron serta efek perisai dari elektron kulit dalam membuat ukuran atom membesar dari atas ke bawah. Jawaban: **D**'
    }),
    soal({
      level: 'Dasar',
      q: 'Dari kiri ke kanan dalam satu periode (selain golongan gas mulia), nilai keelektronegatifan unsur cenderung meningkat. Faktor utama penyebab kecenderungan ini adalah...',
      options: [
        'bertambahnya jumlah kulit elektron yang melindungi elektron valensi',
        'bertambahnya muatan inti efektif pada jumlah kulit yang sama sehingga tarikan inti menguat',
        'menurunnya energi ionisasi sehingga elektron mudah terlepas dalam ikatan',
        'membesarnya jari-jari atom sehingga awan elektron mudah terpolarisasi'
      ],
      answer: 'B',
      hint: 'Dalam satu periode, proton bertambah satu per satu sementara kulit utama elektronnya tidak bertambah.',
      solution: 'Dari kiri ke kanan dalam satu periode, jumlah kulit tetap sedangkan jumlah proton di inti bertambah sehingga muatan inti efektif meningkat dan jari-jari mengecil. Akibatnya tarikan inti atom terhadap pasangan elektron ikatan semakin kuat. Jawaban: **B**'
    }),
    soal({
      level: 'Dasar',
      q: 'Di antara unsur $_{3}\\text{Li}$, $_{11}\\text{Na}$, $_{12}\\text{Mg}$, dan $_{19}\\text{K}$, unsur yang memiliki jari-jari atom paling besar sekaligus paling mudah membentuk ion positif adalah...',
      options: [
        '$_{3}\\text{Li}$',
        '$_{12}\\text{Mg}$',
        '$_{19}\\text{K}$',
        '$_{11}\\text{Na}$'
      ],
      answer: 'C',
      hint: 'Unsur paling mudah membentuk kation berada di golongan IA bagian bawah karena jari-jarinya besar dan energi ionisasinya rendah.',
      solution: '$_{3}\\text{Li}$, $_{11}\\text{Na}$, dan $_{19}\\text{K}$ berada pada golongan IA berturut-turut di periode 2, 3, dan 4, sedangkan $_{12}\\text{Mg}$ berada di golongan IIA periode 3. Unsur $_{19}\\text{K}$ memiliki jumlah kulit terbanyak ($4$ kulit) sehingga jari-jarinya paling besar dan elektron valensinya paling mudah dilepaskan. Jawaban: **C**'
    }),
    soal({
      level: 'Sedang',
      q: 'Suatu unsur transisi mangan ($_{25}\\text{Mn}$) digunakan dalam paduan baja. Posisi unsur tersebut dalam sistem periodik unsur modern adalah...',
      options: [
        'golongan VB, periode 4',
        'golongan VIIA, periode 4',
        'golongan VIIB, periode 3',
        'golongan VIIB, periode 4'
      ],
      answer: 'D',
      hint: 'Tuliskan konfigurasi elektron $_{25}\\text{Mn}$ dan jumlahkan elektron pada subkulit $4s$ dan $3d$.',
      solution: 'Konfigurasi elektron $_{25}\\text{Mn}$ adalah $[\\text{Ar}]\\,3d^5\\,4s^2$. Kulit terluar adalah $n = 4$ (periode 4), sedangkan elektron valensinya menempati $4s^2\\,3d^5$ (blok $d$) dengan jumlah $2 + 5 = 7$, sehingga terletak pada golongan VIIB. Jawaban: **D**'
    }),
    soal({
      level: 'Sedang',
      q: 'Suatu unsur $\\text{X}$ terletak pada golongan VB dan periode 4 dalam sistem periodik unsur. Jika di dalam inti atom $\\text{X}$ terdapat $28$ neutron, nomor massa atom $\\text{X}$ adalah...',
      options: [
        '48',
        '51',
        '52',
        '55'
      ],
      answer: 'B',
      hint: 'Golongan VB periode 4 berarti blok $d$ dengan konfigurasi valensi $4s^2\\,3d^3$.',
      solution: 'Unsur golongan VB periode 4 memiliki konfigurasi elektron $[\\text{Ar}]\\,3d^3\\,4s^2$, sehingga jumlah elektron dan protonnya ($Z$) adalah $18 + 3 + 2 = 23$. Nomor massa atom $A = Z + n = 23 + 28 = 51$. Jawaban: **B**'
    }),
    soal({
      level: 'Sedang',
      q: 'Diketahui spesi ion isoelektronik $_{8}\\text{O}^{2-}$, $_{9}\\text{F}^-$, $_{11}\\text{Na}^+$, dan $_{12}\\text{Mg}^{2+}$. Urutan jari-jari ion tersebut dari yang paling kecil ke yang paling besar adalah...',
      options: [
        '$\\text{Mg}^{2+} < \\text{Na}^+ < \\text{F}^- < \\text{O}^{2-}$',
        '$\\text{O}^{2-} < \\text{F}^- < \\text{Na}^+ < \\text{Mg}^{2+}$',
        '$\\text{Na}^+ < \\text{Mg}^{2+} < \\text{O}^{2-} < \\text{F}^-$',
        '$\\text{F}^- < \\text{O}^{2-} < \\text{Mg}^{2+} < \\text{Na}^+$'
      ],
      answer: 'A',
      hint: 'Keempat ion memiliki $10$ elektron. Bandingkan jumlah proton di inti masing-masing ion.',
      solution: 'Seluruh ion memiliki jumlah elektron sama ($10$ elektron). Semakin besar nomor atom, semakin banyak proton yang menarik awan elektron ke arah inti sehingga jari-jari makin kecil. Urutan nomor atom terbalik dengan ukuran jari-jari: $\\text{Mg}^{2+}$ ($12$ proton) paling kecil, diikuti $\\text{Na}^+$ ($11$), $\\text{F}^-$ ($9$), dan $\\text{O}^{2-}$ ($8$) paling besar. Jawaban: **A**'
    }),
    soal({
      level: 'Sedang',
      q: 'Data energi ionisasi bertingkat ($\\text{kJ/mol}$) untuk suatu unsur periode 3 adalah $EI_1 = 578$, $EI_2 = 1.817$, $EI_3 = 2.745$, $EI_4 = 11.577$, dan $EI_5 = 14.842$. Berdasarkan data tersebut, unsur ini berada pada golongan dan cenderung membentuk ion stabil...',
      options: [
        'golongan IA dan membentuk ion $\\text{X}^+$',
        'golongan IVA dan membentuk ion $\\text{X}^{4+}$',
        'golongan IIIA dan membentuk ion $\\text{X}^{3+}$',
        'golongan VA dan membentuk ion $\\text{X}^{3-}$'
      ],
      answer: 'C',
      hint: 'Cari lompatan nilai energi ionisasi yang jauh lebih besar (lebih dari 3–4 kali nilai sebelumnya).',
      solution: 'Lonjakan terbesar terjadi dari $EI_3 = 2.745\\text{ kJ/mol}$ ke $EI_4 = 11.577\\text{ kJ/mol}$. Ini menunjukkan pelepasan elektron ke-4 sudah menyentuh kulit dalam yang sangat stabil, sehingga atom hanya memiliki $3$ elektron valensi (golongan IIIA) dan stabil sebagai ion $\\text{X}^{3+}$. Jawaban: **C**'
    }),
    soal({
      level: 'Sedang',
      q: 'Meskipun fluorin ($_{9}\\text{F}$) lebih elektronegatif daripada klorin ($_{17}\\text{Cl}$), nilai afinitas elektron klorin ($-349\\text{ kJ/mol}$) justru lebih eksotermik daripada fluorin ($-328\\text{ kJ/mol}$). Alasan yang paling tepat untuk fenomena ini adalah...',
      options: [
        'klorin memiliki energi ionisasi yang lebih besar daripada fluorin',
        'klorin memiliki jumlah kulit lebih sedikit sehingga inti lebih dekat ke elektron masuk',
        'fluorin termasuk unsur metaloid sehingga sukar menarik elektron bebas',
        'ukuran orbital $2p$ fluorin sangat sempit sehingga tolakan antarelektron lebih besar saat menerima elektron baru'
      ],
      answer: 'D',
      hint: 'Pertimbangkan kerapatan muatan negatif pada kulit kedua ($2p$) dibandingkan kulit ketiga ($3p$).',
      solution: 'Atom fluorin berukuran sangat kecil sehingga $7$ elektron valensinya berdesakan pada kulit $n = 2$. Ketika satu elektron tambahan masuk ke subkulit $2p$, tolakan antarelektron sangat kuat dan mengurangi energi yang dilepaskan dibandingkan saat elektron masuk ke subkulit $3p$ klorin yang lebih lapang. Jawaban: **D**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Secara umum energi ionisasi pertama meningkat dari kiri ke kanan dalam satu periode. Namun, energi ionisasi pertama nitrogen ($_{7}\\text{N} = 1.402\\text{ kJ/mol}$) tercatat lebih besar daripada oksigen ($_{8}\\text{O} = 1.314\\text{ kJ/mol}$). Penjelasan mekanika kuantum yang tepat untuk anomali ini adalah...',
      options: [
        'nitrogen memiliki subkulit $2p^3$ setengah penuh yang simetris dan stabil, sedangkan oksigen pada $2p^4$ mulai memiliki pasangan elektron yang saling bertolakan',
        'oksigen memiliki jari-jari atom lebih besar daripada nitrogen sehingga jarak elektron terluarnya ke inti lebih jauh',
        'muatan inti efektif atom nitrogen lebih besar daripada atom oksigen akibat efek perisai subkulit $2s$',
        'elektron yang dilepaskan dari nitrogen berasal dari subkulit $2s$, sedangkan pada oksigen berasal dari subkulit $2p$'
      ],
      answer: 'A',
      hint: 'Bandingkan diagram orbital subkulit $2p$ pada $_{7}\\text{N}$ ($2p^3$) dan $_{8}\\text{O}$ ($2p^4$).',
      solution: 'Konfigurasi $_{7}\\text{N}$ adalah $1s^2\\,2s^2\\,2p^3$ di mana ketiga orbital $2p$ terisi tepat setengah penuh ($1$ elektron tiap orbital) sehingga sangat stabil. Pada $_{8}\\text{O}$ ($1s^2\\,2s^2\\,2p^4$), elektron keempat harus berpasangan dalam satu orbital $2p$, menimbulkan tolakan antarelektron yang mempermudah pelepasan satu elektron tersebut. Jawaban: **A**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pada keadaan dasar, elektron terakhir atom unsur $\\text{P}$ memiliki bilangan kuantum $n = 3, \\ l = 0, \\ m = 0, \\ s = -\\frac{1}{2}$, sedangkan elektron terakhir atom unsur $\\text{Q}$ memiliki bilangan kuantum $n = 3, \\ l = 1, \\ m = 0, \\ s = -\\frac{1}{2}$. Pernyataan perbandingan sifat keperiodikan kedua unsur tersebut yang benar adalah...',
      options: [
        'unsur $\\text{P}$ terletak pada golongan IIA periode 3 dan memiliki keelektronegatifan lebih besar daripada $\\text{Q}$',
        'jari-jari atom $\\text{P}$ lebih besar daripada $\\text{Q}$, sedangkan energi ionisasi pertama $\\text{Q}$ lebih besar daripada $\\text{P}$',
        'unsur $\\text{P}$ dan $\\text{Q}$ berada pada golongan yang sama dengan $\\text{Q}$ terletak satu periode di bawah $\\text{P}$',
        'unsur $\\text{Q}$ lebih bersifat logam daripada $\\text{P}$ karena jumlah kulitnya lebih banyak'
      ],
      answer: 'B',
      hint: 'Tentukan dahulu konfigurasi lengkap dan nomor atom masing-masing dari bilangan kuantumnya ($3s^2$ vs $3p^5$).',
      solution: 'Elektron terakhir $\\text{P}$ ($3, 0, 0, -\\frac{1}{2}$) berakhir di $3s^2$ ($_{12}\\text{Mg}$, golongan IIA periode 3), sedangkan $\\text{Q}$ ($3, 1, 0, -\\frac{1}{2}$) berakhir di $3p^5$ ($_{17}\\text{Cl}$, golongan VIIA periode 3). Karena sama-sama di periode 3 dan $\\text{Q}$ di kanan $\\text{P}$, jari-jari $\\text{P} > \\text{Q}$, sedangkan energi ionisasi dan keelektronegatifan $\\text{Q} > \\text{P}$. Jawaban: **B**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu unsur logam transisi $\\text{M}$ berada pada periode 4 dan membentuk ion $\\text{M}^+$ yang memiliki konfigurasi elektron $[\\text{Ar}]\\,3d^{10}$. Letak unsur $\\text{M}$ dalam sistem periodik unsur modern adalah...',
      options: [
        'golongan VIIIB, periode 4',
        'golongan IIB, periode 4',
        'golongan IA, periode 4',
        'golongan IB, periode 4'
      ],
      answer: 'D',
      hint: 'Kembalikan $1$ elektron ke kulit terluar ion $\\text{M}^+$ untuk menemukan konfigurasi atom netral $\\text{M}$ ($_{29}\\text{Cu}$).',
      solution: 'Ion $\\text{M}^+$ memiliki $18 + 10 = 28$ elektron, sehingga atom netral $\\text{M}$ memiliki $29$ elektron dengan konfigurasi $[\\text{Ar}]\\,3d^{10}\\,4s^1$ (tembaga). Jumlah elektron pada $4s + 3d = 1 + 10 = 11$, yang dalam sistem periodik termasuk **golongan IB** dan **periode 4**. Jawaban: **D**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Diketahui empat unsur pada periode 3, yaitu $_{12}\\text{Mg}$, $_{13}\\text{Al}$, $_{15}\\text{P}$, dan $_{16}\\text{S}$. Urutan kenaikan energi ionisasi pertama yang paling tepat untuk keempat unsur tersebut adalah...',
      options: [
        '$\\text{Mg} < \\text{Al} < \\text{P} < \\text{S}$',
        '$\\text{Mg} < \\text{Al} < \\text{S} < \\text{P}$',
        '$\\text{Al} < \\text{Mg} < \\text{S} < \\text{P}$',
        '$\\text{Al} < \\text{Mg} < \\text{P} < \\text{S}$'
      ],
      answer: 'C',
      hint: 'Perhatikan kedua anomali energi ionisasi periode 3 pada pasangan $\\text{IIA}$–$\\text{IIIA}$ ($\\text{Mg}$ vs $\\text{Al}$) dan $\\text{VA}$–$\\text{VIA}$ ($\\text{P}$ vs $\\text{S}$).',
      solution: 'Secara umum $EI_1$ periode 3 naik ke kanan, sehingga pasangan $(\\text{Mg}, \\text{Al})$ lebih rendah daripada $(\\text{P}, \\text{S})$. Namun $\\text{Mg}$ ($3s^2$) lebih stabil daripada $\\text{Al}$ ($3s^2\\,3p^1$) sehingga $EI_1(\\text{Al}) < EI_1(\\text{Mg})$, dan $\\text{P}$ ($3p^3$ setengah penuh) lebih stabil daripada $\\text{S}$ ($3p^4$) sehingga $EI_1(\\text{S}) < EI_1(\\text{P})$. Urutan naiknya menjadi $\\text{Al} < \\text{Mg} < \\text{S} < \\text{P}$. Jawaban: **C**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Unsur $\\text{A}$ terletak pada periode 2 golongan IVA, sedangkan unsur $\\text{B}$ terletak satu periode di bawah $\\text{A}$ dan dua golongan di sebelah kanan $\\text{A}$. Pernyataan berikut yang paling tepat mengenai unsur $\\text{A}$ dan $\\text{B}$ adalah...',
      options: [
        'jari-jari atom $\\text{B}$ lebih kecil daripada $\\text{A}$ karena muatan inti $\\text{B}$ lebih besar',
        'unsur $\\text{B}$ bernomor atom $16$, menempati blok $p$, dan cenderung menangkap $2$ elektron membentuk ion $\\text{B}^{2-}$',
        'unsur $\\text{A}$ dan $\\text{B}$ sama-sama terletak pada blok $s$ serta memiliki $4$ elektron valensi',
        'energi ionisasi pertama $\\text{B}$ lebih besar daripada $\\text{A}$ karena memiliki lebih banyak proton'
      ],
      answer: 'B',
      hint: 'Identifikasi nomor atom $\\text{A}$ (periode 2, IVA = $_{6}\\text{C}$), lalu tentukan letak $\\text{B}$ (periode 3, VIA).',
      solution: 'Unsur $\\text{A}$ di periode 2 golongan IVA adalah $_{6}\\text{C}$, sedangkan $\\text{B}$ di periode 3 golongan VIA adalah $_{16}\\text{S}$ ($[\\text{Ne}]\\,3s^2\\,3p^4$). $\\text{B}$ berada pada blok $p$ dengan $6$ elektron valensi sehingga cenderung menangkap $2$ elektron membentuk ion $\\text{B}^{2-}$. Jari-jari $\\text{B}$ lebih besar daripada $\\text{A}$ karena memiliki $3$ kulit, dan energi ionisasi pertamanya lebih kecil daripada $\\text{A}$. Jawaban: **B**'
    })
  ]
});
