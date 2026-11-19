/**
 * Paket Soal Terstruktur: Simulasi Olimpiade Sains Kabupaten (OSK) IPA SMP – Paket 1
 * Sumber: Soal Latihan OSK IPA SMP.pdf (Duta e-dukasi).
 * Bahasa asli tiap butir soal dipertahankan dalam Bahasa Indonesia.
 */
export default {
  id: 'olim-smp-ipa-osk',
  slug: 'osk-ipa-smp-simulasi-1',
  subject: 'olimpiade-sains',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'olympiad-pro',
  topic: 'Simulasi OSK IPA SMP (Biologi, Fisika & Kimia)',
  relatedChapterIds: [
    'ipa7-bab5-klasifikasi-makhluk-hidup',
    'ipa8-bab1-pengenalan-sel'
  ],
  lang: 'id',
  title: 'Simulasi Olimpiade Sains Kabupaten (OSK) IPA SMP – Paket 1',
  totalMarks: 60,
  instructions:
    'Kerjakan seluruh 60 soal (50 Pilihan Ganda pada Bagian A dan 10 Isian Singkat pada Bagian B) dalam waktu 120 menit. Gunakan $g = 10\\ \\text{m/s}^2$ apabila tidak disebutkan lain pada soal.',
  source: {
    org: 'Duta e-dukasi',
    file: 'Soal Latihan OSK IPA SMP.pdf',
    driveFolder: '1-l6x2B19j9xQ0d1',
    license: 'CC BY 4.0'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Soal Pilihan Ganda',
      marks: 50,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal (nomor 1–50).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Sel hewan diamati di bawah mikroskop elektron dan ditemukan memiliki retikulum endoplasma kasar (REK) serta badan Golgi yang sangat melimpah. Berdasarkan struktur tersebut, fungsi utama dari sel ini kemungkinan besar adalah...\nA. menghasilkan energi berupa ATP dalam jumlah besar\nB. mensekresikan protein atau enzim ke luar sel\nC. melakukan detoksifikasi racun dan obat-obatan\nD. mensintesis lipid dan hormon steroid',
          answer: 'B. mensekresikan protein atau enzim ke luar sel',
          principle:
            'Retikulum endoplasma kasar (REK) ditempeli ribosom untuk sintesis protein, sedangkan badan Golgi memodifikasi, memilah, dan mengemas protein tersebut dalam vesikel untuk disekresikan.',
          solution:
            'RE kasar berperan menyintesis protein yang ditujukan untuk sekresi atau membran, lalu badan Golgi memodifikasi dan mengemas protein atau enzim tersebut ke dalam vesikel sekretori untuk dikeluarkan melalui eksositosis. Produksi ATP dilakukan mitokondria, sedangkan detoksifikasi dan sintesis lipid/steroid merupakan peran RE halus.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '2',
          marks: 1,
          figures: [
            {
              src: '/papers/olim-smp-ipa-osk/fig-2.webp',
              alt: 'Skema sel berbentuk lingkaran dengan dua titik di kutub atas dan bawah yang dihubungkan garis halus ke dua pasang lengkungan di bagian tengah sel (Soal No. 2)',
              caption: 'Skema pembelahan sel untuk Soal No. 2.'
            }
          ],
          prompt:
            'Perhatikan skema pembelahan sel berikut!\nFase pembelahan sel yang ditunjukkan oleh gambar di atas terjadi peristiwa...\nA. Kromosom homolog bergerak ke arah kutub yang berlawanan.\nB. Kromatid saudara terpisah dan bergerak menuju kutub sel.\nC. Kromosom berjajar di bidang ekuator membentuk pelat metafase.\nD. Membran inti mulai terbentuk kembali di sekitar set kromosom.',
          answer: 'B. Kromatid saudara terpisah dan bergerak menuju kutub sel.',
          principle:
            'Pada fase anafase mitosis, benang spindel memendek sehingga kromatid saudara berpisah pada sentromer dan ditarik menuju masing-masing kutub sel yang berlawanan.',
          solution:
            'Gambar memperlihatkan tahap anafase pembelahan mitosis: sentromer membelah sehingga kromatid saudara terpisah dan masing-masing kromatid bergerak ditarik benang spindel menuju dua kutub sel yang berlawanan.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Jika sel darah merah (eritrosit) manusia dimasukkan ke dalam larutan garam 5%, peristiwa yang akan terjadi pada sel tersebut adalah...\nA. mengalami lisis karena air dari luar masuk ke dalam sel (hipotonis)\nB. mengalami turgiditas karena dinding sel menahan tekanan osmotik\nC. mengalami krenasi karena cairan sel keluar menuju larutan (hipertonis)\nD. mengalami plasmolisis karena terlepasnya membran dari dinding sel',
          answer: 'C. mengalami krenasi karena cairan sel keluar menuju larutan (hipertonis)',
          principle:
            'Osmosis menggerakkan air dari larutan berkonsentrasi zat terlarut rendah (hipotonis) menuju larutan berkonsentrasi zat terlarut tinggi (hipertonis) melintasi membran semipermeabel.',
          solution:
            'Konsentrasi garam fisiologis darah sekitar $0{,}9\\%$, sehingga larutan garam $5\\%$ bersifat hipertonis terhadap sitoplasma eritrosit. Akibatnya air keluar dari dalam sel secara osmosis dan sel darah merah mengerut (mengalami krenasi).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Dua spesies Paramecium ditumbuhkan dalam tabung reaksi yang sama dengan sumber makanan terbatas. Populasi P. aurelia terus meningkat sementara P. caudatum menurun hingga mati. Prinsip ekologi ini disebut...\nA. Simbiosis parasitisme\nB. Predasi intraspesifik\nC. Suksesi primer ekosistem\nD. Eksklusi kompetitif',
          answer: 'D. Eksklusi kompetitif',
          principle:
            'Prinsip eksklusi kompetitif Gause menyatakan bahwa dua spesies yang menempati relung ekologi (niche) identik dan bersaing memperebutkan sumber daya terbatas yang sama tidak dapat hidup berdampingan secara stabil.',
          solution:
            'Percobaan klasik Gause antara *Paramecium aurelia* dan *Paramecium caudatum* menunjukkan spesies yang lebih efisien memanfaatkan sumber makanan terbatas akan mendominasi dan menyingkirkan kompetitornya hingga punah lokal; fenomena ini disebut eksklusi kompetitif.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Struktur modifikasi epidermis daun yang berfungsi mengurangi penguapan pada tumbuhan xerofit adalah...\nA. trikoma dan stomata tipe kriptofor\nB. lenti sel dan hidatoda\nC. jaringan spons dan korteks tebal\nD. floem primer dan xilem sekunder',
          answer: 'A. trikoma dan stomata tipe kriptofor',
          principle:
            'Tumbuhan xerofit beradaptasi di lingkungan kering dengan memodifikasi epidermis daun untuk menahan lapisan udara lembap di sekitar stomata dan menekan laju transpirasi.',
          solution:
            'Trikoma (rambut epidermis) menahan angin di permukaan daun agar kelembapan terjaga, sedangkan stomata tipe kriptofor (tersembunyi di dalam lekukan epidermis) mengurangi paparan langsung cahaya dan udara kering sehingga menekan penguapan air.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Seorang peneliti mengukur laju respirasi kecambah menggunakan respirometer dan menambahkan kristal KOH pada ujung tabung. Fungsi utama kristal KOH tersebut adalah...\nA. meningkatkan kadar oksigen dalam tabung\nB. mengikat uap air yang dihasilkan selama respirasi\nC. mengikat gas $\\text{CO}_2$ agar pergerakan indikator valid mengukur konsumsi $\\text{O}_2$\nD. menjaga kestabilan suhu udara di dalam sistem tertutup',
          answer: 'C. mengikat gas $\\text{CO}_2$ agar pergerakan indikator valid mengukur konsumsi $\\text{O}_2$',
          principle:
            'Pada respirasi aerob, kecambah menyerap gas $\\text{O}_2$ dan melepaskan gas $\\text{CO}_2$; tanpa pengikat $\\text{CO}_2$, perubahan total volume gas sulit teramati.',
          solution:
            'Kristal $\\text{KOH}$ bereaksi mengikat gas $\\text{CO}_2$ hasil respirasi menjadi karbonat. Dengan demikian, penurunan tekanan dan volume udara dalam tabung respirometer murni mencerminkan jumlah gas $\\text{O}_2$ yang dikonsumsi kecambah.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Hewan dengan ciri: eksoskeleton dari kitin, dua pasang antena, tubuh sefalotoraks dan abdomen, bernapas dengan insang, diklasifikasikan ke dalam kelas...\nA. Arachnida\nB. Insecta\nC. Crustacea\nD. Myriapoda',
          answer: 'C. Crustacea',
          principle:
            'Filum Arthropoda diklasifikasikan berdasarkan pembagian segmen tubuh, jumlah antena, jumlah kaki, dan alat pernapasannya.',
          solution:
            'Ciri khas kelas Crustacea (seperti udang dan kepiting) adalah memiliki dua pasang antena, tubuh terbagi menjadi sefalotoraks dan abdomen, eksoskeleton berkitin keras, serta bernapas menggunakan insang. Insecta hanya memiliki sepasang antena dan trakea, sedangkan Arachnida tidak memiliki antena.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Pengujian empat jenis cairan menunjukkan cairan X membuat lakmus merah tetap merah dan lakmus biru menjadi merah. Cairan X memiliki sifat...\nA. menghasilkan ion $\\text{OH}^-$ di dalam air\nB. merasa licin jika bersentuhan dengan kulit\nC. mampu menetralisir larutan cuka\nD. mampu menghantarkan listrik (elektrolit) dan memiliki $\\text{pH} < 7$',
          answer: 'D. mampu menghantarkan listrik (elektrolit) dan memiliki $\\text{pH} < 7$',
          principle:
            'Larutan asam memerahkan kertas lakmus biru, memiliki $\\text{pH} < 7$, melepaskan ion $\\text{H}^+$ dalam air, serta dapat menghantarkan arus listrik karena terionisasi menjadi ion-ion.',
          solution:
            'Cairan X mengubah lakmus biru menjadi merah dan lakmus merah tetap merah, menandakan cairan X bersifat asam. Sifat larutan asam antara lain memiliki $\\text{pH} < 7$ dan bersifat elektrolit. Opsi A, B, dan C merupakan ciri larutan basa.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Reaksi terang fotosintesis terjadi di tilakoid, sedangkan reaksi gelap di stroma. Produk reaksi terang yang digunakan langsung dalam reaksi gelap adalah...\nA. Glukosa dan Oksigen\nB. $\\text{CO}_2$ dan Air\nC. ATP dan NADPH\nD. $\\text{NADP}^+$ dan ADP',
          answer: 'C. ATP dan NADPH',
          principle:
            'Reaksi terang mengubah energi cahaya menjadi energi kimia sementara berupa ATP dan daya pereduksi NADPH untuk menggerakkan siklus Calvin di stroma.',
          solution:
            'Selama reaksi terang di membran tilakoid, dihasilkan $\\text{O}_2$ (dilepaskan ke lingkungan) serta ATP dan NADPH yang ditransfer ke stroma untuk mereduksi $\\text{CO}_2$ menjadi glukosa pada reaksi gelap (siklus Calvin).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Peran utama pundi-pundi udara (saccus pneumaticus) pada burung saat terbang adalah...\nA. sebagai tempat utama terjadinya pertukaran gas $\\text{O}_2$ dan $\\text{CO}_2$\nB. menyimpan cadangan udara agar paru-paru tetap mendapat udara segar saat ekspirasi\nC. memperberat tubuh agar keseimbangan saat menukik terjaga\nD. menyaring udara kotor dari partikel debu sebelum masuk paru-paru',
          answer: 'B. menyimpan cadangan udara agar paru-paru tetap mendapat udara segar saat ekspirasi',
          principle:
            'Sistem pernapasan burung menggunakan aliran udara searah melalui paru-paru dengan bantuan pundi-pundi udara saat inspirasi maupun ekspirasi.',
          solution:
            'Pundi-pundi udara (*saccus pneumaticus*) tidak melakukan pertukaran gas secara langsung, melainkan menampung cadangan udara segar dan mengalirkannya ke paru-paru ketika burung mengepakkan sayap dan saat fase ekspirasi sehingga pasokan $\\text{O}_2$ tetap kontinu.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Jaringan otot pada dinding lambung memiliki karakteristik struktural dan fungsional berupa...\nA. berbentuk silindris bercabang, inti sel banyak, bekerja secara sadar\nB. berbentuk gelendong, inti sel satu di tengah, bekerja secara otonom\nC. berbentuk silindris panjang, tak bergaris lintang, bekerja cepat dan mudah lelah\nD. berbentuk gelendong bercabang, bekerja di bawah sistem saraf somatik',
          answer: 'B. berbentuk gelendong, inti sel satu di tengah, bekerja secara otonom',
          principle:
            'Organ dalam saluran pencernaan tersusun atas jaringan otot polos yang dikendalikan oleh sistem saraf otonom (involunter).',
          solution:
            'Dinding lambung tersusun oleh otot polos dengan ciri sel berbentuk gelendong meruncing di kedua ujung, memiliki satu inti sel terletak di tengah, tidak berlurik, berkontraksi lambat namun tidak mudah lelah, dan bekerja di luar kesadaran (otonom).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Pot tanaman diletakkan horizontal di tempat gelap. Ujung batang tumbuh melengkung ke atas akibat distribusi hormon auksin yang tidak merata. Gerak ini disebut...\nA. Tigmotropisme positif\nB. Fototropisme negatif\nC. Gravitropisme negatif\nD. Fotonasti',
          answer: 'C. Gravitropisme negatif',
          principle:
            'Tropisme adalah gerak bagian tumbuhan yang arahnya ditentukan oleh arah datangnya rangsangan; respons batang menjauhi arah gravitasi merupakan gravitropisme (geotropisme) negatif.',
          solution:
            'Di tempat gelap tidak ada rangsangan cahaya, sehingga pertumbuhan batang melengkung ke atas dipicu oleh gaya gravitasi. Auksin menumpuk di sisi bawah batang dan memacu pemanjangan sel sisi bawah lebih cepat sehingga batang membengkok ke atas menjauhi pusat bumi (gravitropisme negatif).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Agar pertukaran gas dapat berlangsung baik melalui permukaan tubuhnya, cacing tanah memerlukan lingkungan yang...\nA. kering agar gas oksigen dapat berdifusi dengan cepat\nB. lembap agar oksigen terlarut dalam air sebelum berdifusi ke darah\nC. tergenang air agar $\\text{CO}_2$ dapat mengendap\nD. terbuka tanpa tanah liat agar pori-pori kulit melebar',
          answer: 'B. lembap agar oksigen terlarut dalam air sebelum berdifusi ke darah',
          principle:
            'Permukaan respirasi integumen pada cacing tanah harus selalu lembap karena gas pernapasan hanya dapat berdifusi melewati membran sel apabila berada dalam keadaan terlarut.',
          solution:
            'Cacing tanah bernapas melalui seluruh permukaan kulit yang tipis dan kaya kapiler darah. Kelembapan permukaan tubuh memungkinkan oksigen melarut terlebih dahulu dalam lapisan mukus/air sebelum berdifusi masuk ke pembuluh darah kapiler.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Aliran getah pada jaringan floem yang mengangkut hasil fotosintesis dari daun menuju akar utamanya dipicu oleh mekanisme...\nA. gaya kapilaritas dan daya isap daun\nB. gradien tekanan osmotik akibat pemuatan gula (sugar loading) secara aktif\nC. tekanan akar yang mendorong air ke atas\nD. tarikan transpirasi yang menghasilkan tekanan negatif pembuluh',
          answer: 'B. gradien tekanan osmotik akibat pemuatan gula (sugar loading) secara aktif',
          principle:
            'Hipotesis aliran tekanan (Münch) menjelaskan translokasi floem melalui perbedaan tekanan turgor antara organ sumber (daun) dan organ penyimpan/pengguna (akar).',
          solution:
            'Pemuatan sukrosa secara aktif ke pembuluh tapis di daun menurunkan potensial air sehingga air dari xilem masuk secara osmosis dan menaikkan tekanan turgor. Gradien tekanan ini mendorong cairan floem mengalir ke bagian akar tempat gula dibongkar dan dipakai.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Perilaku ikan Salmon yang menetas di sungai, bermigrasi ke laut, lalu kembali ke sungai asalnya untuk bereproduksi dipandu oleh ingatan sensoris yang disebut...\nA. Habituasi\nB. Imprinting (perekaman)\nC. Classical conditioning\nD. Trial and error',
          answer: 'B. Imprinting (perekaman)',
          principle:
            '*Imprinting* (perekaman) adalah bentuk pembelajaran perilaku permanen yang terjadi pada periode kritis awal kehidupan suatu organisme.',
          solution:
            'Anak ikan salmon merekam profil bau kimiawi khas aliran sungai tempat mereka menetas melalui proses *imprinting* olfaktori pada fase awal hidupnya, yang kelak menuntun mereka pulang ke sungai asal saat dewasa untuk bertelur.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Sistem gurat sisi (lateral line) pada anatomi ikan berfungsi untuk...\nA. mendeteksi perubahan tekanan air dan getaran arus\nB. memancarkan gelombang sonar pasif\nC. mendeteksi mangsa melalui panas tubuh\nD. mensekresikan lendir untuk mengurangi gesekan air',
          answer: 'A. mendeteksi perubahan tekanan air dan getaran arus',
          principle:
            'Gurat sisi (*linea lateralis*) adalah organ mekanoreseptor khas ikan dan amfibi akuatik yang peka terhadap pergerakan serta getaran di dalam air.',
          solution:
            'Sel-sel rambut sensoris (neuromast) sepanjang saluran gurat sisi merespons perubahan tekanan hidrostatik, arah arus air, serta getaran mekanis dari pergerakan mangsa, predator, atau benda di sekitarnya.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Tekanan darah menunjukkan angka sistol dan diastol (misal 120/80 mmHg). Angka 120 mmHg menunjukkan tekanan pada pembuluh arteri saat...\nA. serambi (atrium) jantung berkontraksi maksimal\nB. bilik (ventrikel) jantung berkontraksi memompa darah ke aorta\nC. darah kotor dari paru-paru masuk ke serambi kiri\nD. katup trikuspidalis terbuka dan darah mengalir pasif',
          answer: 'B. bilik (ventrikel) jantung berkontraksi memompa darah ke aorta',
          principle:
            'Tekanan darah sistolik adalah tekanan maksimum pada dinding pembuluh arteri ketika ventrikel jantung berkontraksi.',
          solution:
            'Angka sistol ($120\\ \\text{mmHg}$) terjadi ketika otot bilik (ventrikel) kiri jantung berkontraksi memompa darah bertekanan tinggi keluar melalui aorta ke seluruh tubuh, sedangkan diastol ($80\\ \\text{mmHg}$) menunjukkan tekanan saat jantung berelaksasi.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Percobaan labu leher angsa Louis Pasteur berhasil menggugurkan teori generatio spontanea karena...\nA. menggunakan air kaldu sapi yang sangat kaya nutrisi\nB. merebus kaldu pada suhu sangat tinggi hingga steril sempurna\nC. membiarkan sistem terbuka terhadap udara namun mikroba terperangkap di leher pipa\nD. menutup rapat labu agar udara pembawa spora tidak masuk',
          answer: 'C. membiarkan sistem terbuka terhadap udara namun mikroba terperangkap di leher pipa',
          principle:
            'Eksperimen Pasteur membuktikan teori biogenesis (*omne vivum ex vivo*) dengan tetap memberi akses udara ("daya hidup") tanpa membiarkan mikroorganisme dari luar masuk ke kaldu.',
          solution:
            'Desain pipa leher angsa tetap membiarkan udara keluar-masuk labu, tetapi bentuk lengkungannya menjebak debu dan spora mikroba agar tidak mencapai kaldu steril. Kaldu baru keruh ketika leher labu dipatahkan atau dimiringkan, membuktikan mikroba berasal dari udara luar, bukan muncul spontan.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Dalam sistem klasifikasi 5 kingdom (Whittaker), pembeda utama antara Kingdom Monera dan Protista adalah...\nA. Monera bersifat multiseluler, Protista uniseluler\nB. Monera memiliki dinding sel peptidoglikan, Protista tidak\nC. Monera merupakan organisme prokariotik, Protista eukariotik\nD. Monera bereproduksi secara seksual, Protista aseksual',
          answer: 'C. Monera merupakan organisme prokariotik, Protista eukariotik',
          principle:
            'Sistem 5 kingdom Whittaker memisahkan organisme bersel sederhana berdasarkan ada tidaknya membran inti sejati (struktur sel prokariotik vs eukariotik).',
          solution:
            'Kingdom Monera (bakteri dan sianobakteri) mencakup seluruh organisme prokariotik (belum memiliki membran inti dan organel bermembran), sedangkan Kingdom Protista terdiri atas organisme eukariotik (memiliki inti sel bermembran) yang sebagian besar uniseluler.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Siklus hidup virus di mana materi genetik virus berintegrasi dengan kromosom bakteri tanpa langsung menghancurkan sel inang disebut...\nA. Siklus litik\nB. Siklus lisogenik\nC. Fase adsorpsi\nD. Fase eklifase',
          answer: 'B. Siklus lisogenik',
          principle:
            'Replikasi bakteriofag dapat berlangsung melalui siklus litik (memecah sel inang) atau siklus lisogenik (membentuk profag laten bersama DNA inang).',
          solution:
            'Pada siklus lisogenik, DNA virus menyisip ke dalam kromosom bakteri membentuk profag dan ikut bereplikasi setiap kali bakteri membelah tanpa menyebabkan lisis sel inang secara langsung.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Pada penampang melintang daun dikotil, jaringan dengan intensitas fotosintesis tertinggi yang tersusun atas sel kolumnar rapat adalah...\nA. Epidermis atas\nB. Jaringan spons (bunga karang)\nC. Jaringan palisade (tiang)\nD. Berkas pengangkut (xilem dan floem)',
          answer: 'C. Jaringan palisade (tiang)',
          principle:
            'Jaringan mesofil palisade berada tepat di bawah epidermis atas dan tersusun rapat vertikal dengan kandungan kloroplas terbanyak.',
          solution:
            'Sel-sel jaringan palisade (jaringan tiang) berbentuk silindris memanjang yang tersusun rapat dan mengandung jauh lebih banyak kloroplas dibanding jaringan spons, menjadikannya lokasi utama fotosintesis pada daun dikotil.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Penyakit mosaik pada tanaman tembakau (Tobacco Mosaic Disease) disebabkan oleh patogen berupa...\nA. Bakteri berspora\nB. Fungi patogenik\nC. Virus RNA\nD. Nematoda parasit',
          answer: 'C. Virus RNA',
          principle:
            '*Tobacco Mosaic Virus* (TMV) adalah virus tumbuhan berbentuk batang heliks dengan materi genetik berupa RNA utas tunggal.',
          solution:
            'Penyakit bercak kuning (mosaik) pada daun tembakau disebabkan oleh infeksi *Tobacco Mosaic Virus* (TMV) yang memiliki genom berupa virus RNA.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Persilangan ercis berbiji bulat kuning heterozigot sempurna (BbKk) dengan ercis berbiji keriput hijau (bbkk) menghasilkan rasio fenotip...\nA. 9 : 3 : 3 : 1\nB. 1 : 1 : 1 : 1\nC. 3 : 1\nD. 1 : 2 : 1',
          answer: 'B. 1 : 1 : 1 : 1',
          principle:
            'Persilangan uji silang (*test cross*) dihibrid heterozigot dengan individu resesif ganda menghasilkan proporsi gamet yang langsung mencerminkan rasio fenotip keturunan.',
          solution:
            'Individu $BbKk$ membentuk 4 macam gamet ($BK, Bk, bK, bk$) dengan peluang sama, sedangkan individu $bbkk$ hanya menghasilkan gamet $bk$. Hasil persilangannya adalah $BbKk : Bbkk : bbKk : bbkk = 1 : 1 : 1 : 1$, sehingga rasio fenotipnya $1 : 1 : 1 : 1$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Buta warna merupakan kelainan resesif terpaut kromosom X. Jika wanita pembawa sifat menikah dengan pria normal, probabilitas mereka memiliki anak laki-laki buta warna (dari total anak laki-laki) adalah...\nA. 0%\nB. 25%\nC. 50%\nD. 100%',
          answer: 'C. 50%',
          principle:
            'Anak laki-laki menerima kromosom $Y$ dari ayah dan satu kromosom $X$ secara acak dari ibu.',
          solution:
            'Ibu pembawa sifat bergenotip $X^C X^c$ dan ayah normal $X^C Y$. Anak laki-laki ($XY$) memperoleh $Y$ dari ayah dan memiliki dua kemungkinan kromosom $X$ dari ibu, yaitu $X^C$ (normal, $50\\%$) atau $X^c$ (buta warna, $50\\%$). Jadi probabilitasnya dari total anak laki-laki adalah $50\\%$.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Titik beku air pada termometer X adalah 20°X dan titik didihnya 140°X. Jika suhu ruangan terukur 50°X, suhu tersebut dalam Celcius adalah...\nA. 25 °C\nB. 30 °C\nC. 40 °C\nD. 60 °C',
          answer: 'A. 25 °C',
          principle:
            'Perbandingan selisih suhu terhadap rentang titik tetap bawah dan titik tetap atas pada dua termometer linier adalah konstan: $\\frac{T_X - T_{bX}}{T_{aX} - T_{bX}} = \\frac{T_C - 0}{100 - 0}$.',
          solution:
            '$$\\frac{50 - 20}{140 - 20} = \\frac{T_C}{100} \\implies \\frac{30}{120} = \\frac{T_C}{100} \\implies T_C = \\frac{1}{4} \\times 100 = 25^\\circ\\text{C}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Pengukuran diameter koin dengan mikrometer sekrup (ketelitian 0,01 mm) menunjukkan skala utama 4,5 mm dan skala nonius garis ke-12. Diameter koin adalah...\nA. 4,62 mm\nB. 4,51 mm\nC. 4,12 mm\nD. 5,70 mm',
          answer: 'A. 4,62 mm',
          principle:
            'Hasil pengukuran mikrometer sekrup adalah penjumlahan pembacaan skala utama dengan hasil kali skala nonius dan ketelitian alat ($0{,}01\\ \\text{mm}$).',
          solution:
            '$$d = \\text{Skala Utama} + (\\text{Skala Nonius} \\times 0{,}01\\ \\text{mm}) = 4{,}5\\ \\text{mm} + (12 \\times 0{,}01\\ \\text{mm}) = 4{,}62\\ \\text{mm}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Mobil A melaju konstan 15 m/s ke kanan. Mobil B dari arah berlawanan melaju 25 m/s ke kiri. Jika jarak awal keduanya 200 m, mereka berpapasan pada jarak... (dari posisi awal A)\nA. 75 meter\nB. 100 meter\nC. 125 meter\nD. 150 meter',
          answer: 'A. 75 meter',
          principle:
            'Dua benda yang bergerak saling mendekat pada gerak lurus beraturan bertemu saat jumlah jarak tempuh keduanya sama dengan jarak pisah awal: $s_A + s_B = s_0$.',
          solution:
            'Waktu berpapasan:\n$$t = \\frac{s_0}{v_A + v_B} = \\frac{200}{15 + 25} = \\frac{200}{40} = 5\\ \\text{s}.$$\nJarak dari posisi awal A:\n$$s_A = v_A \\times t = 15 \\times 5 = 75\\ \\text{meter}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Sebanyak 200 gram air 80°C dicampur dengan 300 gram air 20°C dalam isolator. Suhu akhir campuran saat kesetimbangan termal adalah... (c air = 1 kal/g°C)\nA. 40 °C\nB. 44 °C\nC. 50 °C\nD. 56 °C',
          answer: 'B. 44 °C',
          principle:
            'Asas Black dalam sistem terisolasi menyatakan kalor yang dilepas zat bersuhu tinggi sama dengan kalor yang diterima zat bersuhu rendah ($Q_{\\text{lepas}} = Q_{\\text{terima}}$).',
          solution:
            'Karena kedua zat sama-sama air ($c$ sama):\n$$m_1 c (T_1 - T) = m_2 c (T - T_2)$$\n$$200(80 - T) = 300(T - 20) \\implies 160 - 2T = 3T - 60 \\implies 5T = 220 \\implies T = 44^\\circ\\text{C}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Panci presto membuat daging lebih cepat empuk saat direbus karena...\nA. tekanan tinggi menurunkan kapasitas kalor jenis air\nB. tekanan tinggi mempercepat laju radiasi panas ke daging\nC. tekanan tinggi meningkatkan titik didih air menjadi lebih dari 100°C\nD. tekanan tertutup mengkonversi energi kinetik uap menjadi potensial',
          answer: 'C. tekanan tinggi meningkatkan titik didih air menjadi lebih dari 100°C',
          principle:
            'Titik didih cairan bergantung pada tekanan uap di atas permukaannya; kenaikan tekanan meningkatkan titik didih zat cair.',
          solution:
            'Panci presto tertutup rapat sehingga uap air yang terperangkap meningkatkan tekanan di dalam panci. Tekanan tinggi menaikkan titik didih air hingga melampaui $100^\\circ\\text{C}$ (sekitar $120^\\circ\\text{C}$), sehingga proses pematangan daging berlangsung lebih cepat.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Batang logam P dan Q seukuran disambung seri. Ujung P 100°C, ujung Q 20°C. Jika konduktivitas termal kP = 3kQ, suhu sambungan logam tersebut adalah...\nA. 40 °C\nB. 60 °C\nC. 75 °C\nD. 80 °C',
          answer: 'D. 80 °C',
          principle:
            'Pada konduksi kalor tunak melalui dua batang seukuran yang disambung seri, laju aliran kalor di kedua batang sama besar: $\\frac{k_P A \\Delta T_P}{L} = \\frac{k_Q A \\Delta T_Q}{L}$.',
          solution:
            'Karena $A$ dan $L$ sama:\n$$k_P(100 - T) = k_Q(T - 20)$$\nSubstitusi $k_P = 3k_Q$:\n$$3k_Q(100 - T) = k_Q(T - 20) \\implies 300 - 3T = T - 20 \\implies 4T = 320 \\implies T = 80^\\circ\\text{C}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'Balok 4 kg meluncur dari puncak bidang miring licin setinggi 5 meter. Saat balok mencapai dasar, energi kinetiknya adalah... (g = 10 m/s2)\nA. 20 Joule\nB. 100 Joule\nC. 200 Joule\nD. 400 Joule',
          answer: 'C. 200 Joule',
          principle:
            'Pada lintasan licin tanpa gesekan, hukum kekekalan energi mekanik berlaku sehingga energi potensial di puncak seluruhnya berubah menjadi energi kinetik di dasar.',
          solution:
            '$$E_k = E_p = mgh = 4 \\times 10 \\times 5 = 200\\ \\text{Joule}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'Gaya F = 50 N mendorong peti 20 kg sejauh 4 meter di lantai kasar (μk = 0,1). Jika g = 10 m/s2, kerja bersih (usaha total) yang bekerja pada peti adalah...\nA. 120 Joule\nB. 160 Joule\nC. 200 Joule\nD. 280 Joule',
          answer: 'A. 120 Joule',
          principle:
            'Usaha total merupakan hasil kali resultan gaya sejajar perpindahan dengan besar perpindahannya: $W_{\\text{net}} = (F - f_k) \\times s$.',
          solution:
            'Gaya gesek kinetis:\n$$f_k = \\mu_k N = \\mu_k mg = 0{,}1 \\times 20 \\times 10 = 20\\ \\text{N}.$$\nGaya bersih $F_{\\text{net}} = 50 - 20 = 30\\ \\text{N}$, sehingga usaha total:\n$$W = F_{\\text{net}} \\times s = 30 \\times 4 = 120\\ \\text{Joule}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Pompa air menaikkan 300 kg air dari sumur 10 meter dalam 1 menit. Jika efisiensi pompa 50% dan g = 10 m/s2, daya listrik masukannya adalah...\nA. 250 Watt\nB. 500 Watt\nC. 1000 Watt\nD. 3000 Watt',
          answer: 'C. 1000 Watt',
          principle:
            'Efisiensi daya adalah perbandingan daya keluaran terhadap daya masukan: $\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}}$, dengan $P_{\\text{out}} = \\frac{mgh}{t}$.',
          solution:
            'Usaha mengangkat air:\n$$W = mgh = 300 \\times 10 \\times 10 = 30.000\\ \\text{J}.$$\nDaya keluaran dalam $t = 60\\ \\text{s}$:\n$$P_{\\text{out}} = \\frac{30.000}{60} = 500\\ \\text{Watt}.$$\nDaya listrik masukan dengan efisiensi $50\\% = 0{,}5$:\n$$P_{\\text{in}} = \\frac{P_{\\text{out}}}{\\eta} = \\frac{500}{0{,}5} = 1000\\ \\text{Watt}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '34',
          marks: 1,
          prompt:
            'Pada mesin Atwood mendatar, balok A (6 kg) di meja licin dihubungkan tali ke balok B (4 kg) yang menggantung. Percepatan sistem saat B dilepas adalah... (g=10 m/s2)\nA. 4 m/s2\nB. 5 m/s2\nC. 6 m/s2\nD. 10 m/s2',
          answer: 'A. 4 m/s2',
          principle:
            'Menurut Hukum II Newton pada sistem dua benda terhubung tali di bidang datar licin, percepatan sistem sama dengan gaya penggerak dibagi massa total.',
          solution:
            'Gaya penggerak hanya berasal dari berat balok B yang menggantung:\n$$w_B = m_B g = 4 \\times 10 = 40\\ \\text{N}.$$\nPercepatan sistem:\n$$a = \\frac{w_B}{m_A + m_B} = \\frac{40}{6 + 4} = 4\\ \\text{m/s}^2.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'Peluru ditembakkan mendatar dari tebing setinggi 45 meter dengan kecepatan 20 m/s. Jika gesekan udara diabaikan (g = 10 m/s2), jarak horizontal jatuhnya peluru adalah...\nA. 30 meter\nB. 45 meter\nC. 60 meter\nD. 90 meter',
          answer: 'C. 60 meter',
          principle:
            'Gerak parabola mendatar memisahkan gerak jatuh bebas pada arah vertikal ($h = \\frac{1}{2}gt^2$) dan gerak lurus beraturan pada arah horizontal ($x = v_0 t$).',
          solution:
            'Waktu tempuh hingga menyentuh dasar:\n$$h = \\frac{1}{2}gt^2 \\implies 45 = 5t^2 \\implies t^2 = 9 \\implies t = 3\\ \\text{s}.$$\nJarak horizontal jatuhnya peluru:\n$$x = v_0 \\times t = 20 \\times 3 = 60\\ \\text{meter}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '36',
          marks: 1,
          prompt:
            'Perbandingan kecepatan sudut antara jarum penunjuk jam (pendek) dan jarum penunjuk menit (panjang) pada jam analog adalah...\nA. 1 : 12\nB. 1 : 60\nC. 12 : 1\nD. 60 : 1',
          answer: 'A. 1 : 12',
          principle:
            'Kecepatan sudut ($\\omega$) suatu gerak melingkar beraturan berbanding terbalik dengan periode putarannya ($T$): $\\omega = \\frac{2\\pi}{T}$.',
          solution:
            'Jarum penunjuk jam (pendek) menyelesaikan $1$ putaran penuh dalam $T_{\\text{jam}} = 12\\ \\text{jam}$, sedangkan jarum penunjuk menit (panjang) menyelesaikan $1$ putaran penuh dalam $T_{\\text{menit}} = 1\\ \\text{jam}$.\n$$\\omega_{\\text{jam}} : \\omega_{\\text{menit}} = \\frac{1}{12} : \\frac{1}{1} = 1 : 12.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '37',
          marks: 1,
          prompt:
            'Dongkrak hidrolik memiliki pengisap kecil berdiameter 2 cm dan besar 10 cm. Jika pengisap kecil diberi gaya 50 N, gaya angkat pada pengisap besar adalah...\nA. 250 N\nB. 500 N\nC. 1250 N\nD. 2500 N',
          answer: 'C. 1250 N',
          principle:
            'Hukum Pascal menyatakan tekanan pada fluida tertutup diteruskan sama besar ke segala arah: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$, dengan luas lingkaran sebanding kuadrat diameter.',
          solution:
            '$$F_2 = F_1 \\left(\\frac{d_2}{d_1}\\right)^2 = 50 \\times \\left(\\frac{10}{2}\\right)^2 = 50 \\times 25 = 1250\\ \\text{N}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '38',
          marks: 1,
          prompt:
            'Air mengalir pada pipa luas 20 cm2 dengan kecepatan 3 m/s. Jika pipa menyempit menjadi 5 cm2, debit air pada bagian sempit tersebut adalah...\nA. 1,5 liter/sekon\nB. 3,0 liter/sekon\nC. 6,0 liter/sekon\nD. 12,0 liter/sekon',
          answer: 'C. 6,0 liter/sekon',
          principle:
            'Menurut persamaan kontinuitas untuk fluida tak termampatkan, debit aliran ($Q = A \\cdot v$) konstan di setiap penampang pipa.',
          solution:
            'Dengan $A_1 = 20\\ \\text{cm}^2$ dan $v_1 = 3\\ \\text{m/s} = 300\\ \\text{cm/s}$, debit aliran bernilai sama di bagian sempit:\n$$Q = A_1 v_1 = 20 \\times 300 = 6000\\ \\text{cm}^3/\\text{s} = 6{,}0\\ \\text{liter/sekon}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '39',
          marks: 1,
          prompt:
            'Gaya yang menyebabkan permukaan air di dalam tabung kaca kapiler membentuk meniskus cekung adalah...\nA. Gaya kohesi lebih besar daripada gaya adhesi\nB. Gaya adhesi lebih besar daripada gaya kohesi\nC. Gaya kohesi sama kuat dengan gaya adhesi\nD. Gaya gravitasi menarik tepi cairan lebih kuat',
          answer: 'B. Gaya adhesi lebih besar daripada gaya kohesi',
          principle:
            'Meniskus cekung terbentuk ketika gaya tarik antarpartikel tak sejenis (adhesi) lebih kuat daripada gaya tarik antarpartikel sejenis (kohesi).',
          solution:
            'Gaya adhesi antara molekul air dan dinding kaca lebih besar daripada gaya kohesi antarmolekul air sendiri, sehingga air membasahi dinding kaca dan naik membentuk lengkungan cekung (meniskus cekung).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '40',
          marks: 1,
          prompt:
            'Bandul matematis berayun dari titik simpang kiri maksimum ke simpang kanan maksimum dalam 1,5 detik. Frekuensi getaran bandul tersebut adalah...\nA. 0,33 Hz\nB. 0,67 Hz\nC. 1,50 Hz\nD. 3,00 Hz',
          answer: 'A. 0,33 Hz',
          principle:
            'Satu getaran penuh adalah gerak bolak-balik kembali ke posisi awal; dari simpang kiri maksimum ke kanan maksimum baru menempuh setengah getaran ($\\frac{1}{2}T$).',
          solution:
            'Periode getaran penuh:\n$$T = 2 \\times 1{,}5 = 3{,}0\\ \\text{detik}.$$\nFrekuensi getaran:\n$$f = \\frac{1}{T} = \\frac{1}{3} \\approx 0{,}33\\ \\text{Hz}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '41',
          marks: 1,
          prompt:
            'Kapal menembakkan sonar ultrasonik (cepat rambat 1.500 m/s). Jika gema diterima 4 sekon setelah dipancarkan, kedalaman laut tersebut adalah...\nA. 1.500 meter\nB. 3.000 meter\nC. 4.500 meter\nD. 6.000 meter',
          answer: 'B. 3.000 meter',
          principle:
            'Gelombang sonar menempuh lintasan bolak-balik (dari kapal ke dasar laut lalu kembali ke kapal), sehingga kedalaman $s = \\frac{v \\cdot t}{2}$.',
          solution:
            '$$s = \\frac{v \\times t}{2} = \\frac{1500 \\times 4}{2} = 3000\\ \\text{meter}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '42',
          marks: 1,
          prompt:
            'Gelombang transversal memiliki jarak antar bukit terdekat 1,2 meter. Jika 15 gelombang penuh lewat dalam 3 detik, cepat rambat gelombang adalah...\nA. 2,4 m/s\nB. 3,6 m/s\nC. 4,8 m/s\nD. 6,0 m/s',
          answer: 'D. 6,0 m/s',
          principle:
            'Cepat rambat gelombang adalah hasil kali panjang gelombang dan frekuensinya: $v = \\lambda \\cdot f$.',
          solution:
            'Jarak dua bukit terdekat adalah panjang gelombang $\\lambda = 1{,}2\\ \\text{m}$. Frekuensi:\n$$f = \\frac{n}{t} = \\frac{15}{3} = 5\\ \\text{Hz}.$$\nCepat rambat gelombang:\n$$v = \\lambda \\times f = 1{,}2 \\times 5 = 6{,}0\\ \\text{m/s}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '43',
          marks: 1,
          prompt:
            'Benda 4 cm diletakkan 10 cm di depan cermin cekung berjari-jari 30 cm. Sifat dan letak bayangannya adalah...\nA. Nyata, terbalik, 30 cm di depan cermin\nB. Maya, tegak, 30 cm di belakang cermin\nC. Nyata, tegak, 15 cm di depan cermin\nD. Maya, terbalik, 15 cm di belakang cermin',
          answer: 'B. Maya, tegak, 30 cm di belakang cermin',
          principle:
            'Persamaan cermin lengkung $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s\'}$ dengan $f = \\frac{R}{2}$; tanda negatif pada $s\'$ menunjukkan bayangan maya, tegak, dan terletak di belakang cermin.',
          solution:
            'Jarak fokus cermin cekung bernilai positif: $f = \\frac{R}{2} = \\frac{30}{2} = +15\\ \\text{cm}$. Untuk jarak benda $s = 10\\ \\text{cm}$:\n$$\\frac{1}{s\'} = \\frac{1}{f} - \\frac{1}{s} = \\frac{1}{15} - \\frac{1}{10} = \\frac{2 - 3}{30} = -\\frac{1}{30} \\implies s\' = -30\\ \\text{cm}.$$\nKarena $s\' < 0$, bayangan bersifat maya, tegak, dan berada $30\\ \\text{cm}$ di belakang cermin.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '44',
          marks: 1,
          prompt:
            'Cahaya merambat dari kaca (n=1,5) menuju air (n=1,33). Pernyataan yang benar terkait cahaya saat memasuki air adalah...\nA. Cepat rambat bertambah, panjang gelombang bertambah, frekuensi tetap\nB. Cepat rambat berkurang, panjang gelombang berkurang, frekuensi tetap\nC. Cepat rambat bertambah, panjang gelombang tetap, frekuensi bertambah\nD. Cepat rambat tetap, panjang gelombang bertambah, frekuensi berkurang',
          answer: 'A. Cepat rambat bertambah, panjang gelombang bertambah, frekuensi tetap',
          principle:
            'Saat cahaya berpindah antar-medium, frekuensinya selalu tetap, sedangkan cepat rambat ($v = c/n$) dan panjang gelombang ($\\lambda = v/f$) berbanding terbalik dengan indeks bias medium.',
          solution:
            'Karena cahaya berpindah dari medium lebih rapat ($n_{\\text{kaca}} = 1{,}5$) ke medium lebih renggang ($n_{\\text{air}} = 1{,}33$), indeks bias mengecil sehingga cepat rambat $v$ bertambah, panjang gelombang $\\lambda$ ikut bertambah, sementara frekuensi $f$ tetap konstan.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '45',
          marks: 1,
          prompt:
            'Seseorang kesulitan membaca dan harus menjauhkan koran hingga 50 cm. Agar ia dapat membaca di jarak normal 25 cm, kekuatan kacamata yang dibutuhkan adalah...\nA. -2 Dioptri\nB. +2 Dioptri\nC. -4 Dioptri\nD. +4 Dioptri',
          answer: 'B. +2 Dioptri',
          principle:
            'Penderita rabun dekat (hipermetropi) ditolong lensa cembung berkekuatan $P = \\frac{100}{s_n} - \\frac{100}{PP}$ (dengan $s_n$ dan titik dekat $PP$ dalam cm).',
          solution:
            'Dengan jarak baca normal $s_n = 25\\ \\text{cm}$ dan titik dekat mata $PP = 50\\ \\text{cm}$:\n$$P = \\frac{100}{25} - \\frac{100}{50} = 4 - 2 = +2\\ \\text{Dioptri}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '46',
          marks: 1,
          prompt:
            'Kawat tembaga panjang L, jari-jari r memiliki hambatan R. Jika kawat dibentuk ulang sehingga panjangnya menjadi 2L dan jari-jarinya ½ r, hambatannya menjadi...\nA. 2 R\nB. 4 R\nC. 8 R\nD. 16 R',
          answer: 'C. 8 R',
          principle:
            'Hambatan kawat penghantar memenuhi $R = \\rho \\frac{L}{A} = \\rho \\frac{L}{\\pi r^2}$, berbanding lurus dengan panjang dan berbanding terbalik dengan kuadrat jari-jari.',
          solution:
            'Dengan hambatan jenis $\\rho$ tetap:\n$$\\frac{R\'}{R} = \\frac{L\'}{L} \\cdot \\left(\\frac{r}{r\'}\\right)^2 = \\frac{2L}{L} \\cdot \\left(\\frac{r}{\\frac{1}{2}r}\\right)^2 = 2 \\times 2^2 = 8 \\implies R\' = 8R.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '47',
          marks: 1,
          prompt:
            'Muatan q1 = +4 μC di x = 0 cm, dan q2 = +9 μC di x = 10 cm. Posisi muatan uji q3 agar Resultan Gaya Coulomb nol harus berada di x = ...\nA. 2 cm\nB. 4 cm\nC. 5 cm\nD. 6 cm',
          answer: 'B. 4 cm',
          principle:
            'Agar resultan gaya Coulomb pada muatan uji antara dua muatan sejenis bernilai nol, titik keseimbangan terletak di antara keduanya dengan syarat $\\frac{k q_1}{r_1^2} = \\frac{k q_2}{r_2^2}$.',
          solution:
            'Misalkan $q_3$ berada di posisi $x$ (dengan $0 < x < 10\\ \\text{cm}$):\n$$\\frac{\\sqrt{q_1}}{x} = \\frac{\\sqrt{q_2}}{10 - x} \\implies \\frac{\\sqrt{4}}{x} = \\frac{\\sqrt{9}}{10 - x} \\implies \\frac{2}{x} = \\frac{3}{10 - x}$$\n$$20 - 2x = 3x \\implies 5x = 20 \\implies x = 4\\ \\text{cm}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '48',
          marks: 1,
          prompt:
            'Trafo step-down dihubungkan AC 220 Volt. Lilitan primer 1000, sekunder 250. Jika sekunder terpasang lampu 55 Watt, arus kumparan primer adalah...\nA. 0,25 Ampere\nB. 0,50 Ampere\nC. 1,00 Ampere\nD. 4,00 Ampere',
          answer: 'A. 0,25 Ampere',
          principle:
            'Pada transformator ideal, daya listrik primer sama dengan daya listrik sekunder ($P_p = P_s = V_p I_p$).',
          solution:
            'Karena trafo dianggap ideal tanpa rugi daya, daya masukan primer sama dengan daya beban di sekunder ($P_p = P_s = 55\\ \\text{Watt}$):\n$$I_p = \\frac{P_p}{V_p} = \\frac{55}{220} = 0{,}25\\ \\text{Ampere}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '49',
          marks: 1,
          prompt:
            'Bumi mengalami pergantian musim di kutub utara dan selatan. Fenomena astronomis ini disebabkan oleh...\nA. Rotasi bumi dan revolusi bulan mengelilingi bumi\nB. Revolusi bumi mengelilingi matahari dan kemiringan sumbu 23,5°\nC. Bentuk orbit elips yang merubah jarak bumi-matahari\nD. Gaya pasang surut gravitasi terhadap ekuator',
          answer: 'B. Revolusi bumi mengelilingi matahari dan kemiringan sumbu 23,5°',
          principle:
            'Pergantian musim di belahan bumi utara dan selatan ditentukan oleh perubahan sudut datang sinar matahari sepanjang tahun akibat kemiringan sumbu rotasi bumi saat berevolusi.',
          solution:
            'Sumbu rotasi bumi miring sekitar $23{,}5^\\circ$ terhadap garis tegak lurus bidang ekliptika. Saat bumi berevolusi mengelilingi matahari, belahan bumi utara dan selatan secara bergantian condong ke arah atau menjauhi matahari sehingga terjadi pergantian musim.',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        },
        {
          label: '50',
          marks: 1,
          prompt:
            'Kawat lurus berarus searah ke Utara berada dalam medan magnet arah ke Barat. Menurut Hukum Lorentz, arah gaya magnetiknya menuju...\nA. Bawah (menuju pusat bumi)\nB. Atas (menjauhi pusat bumi)\nC. Timur\nD. Selatan',
          answer: 'B. Atas (menjauhi pusat bumi)',
          principle:
            'Arah gaya Lorentz memenuhi aturan tangan kanan untuk perkalian silang $\\vec{F} = I(\\vec{L} \\times \\vec{B})$.',
          solution:
            'Menggunakan kaidah tangan kanan: arahkan ibu jari ke arah arus (Utara) dan jari telunjuk ke arah medan magnet (Barat), maka arah dorongan telapak tangan / jari tengah mengarah tegak lurus ke Atas (menjauhi pusat bumi).',
          rubric: [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }]
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Soal Isian Singkat',
      marks: 10,
      stem: 'Tuliskan jawaban singkat yang tepat untuk setiap soal (nomor 51–60).',
      parts: [
        {
          label: '51',
          marks: 1,
          prompt:
            'Selaput pelindung ganda berdinding viseral dan parietal yang membungkus jantung dan berisi cairan pelumas disebut...',
          answer: 'Perikardium',
          principle:
            'Jantung dilindungi oleh kantong membran serosa berlapis ganda untuk meredam gesekan mekanis ketika berkontraksi.',
          solution:
            'Perikardium merupakan selaput pembungkus jantung yang terdiri atas lapisan viseral (epikardium) dan parietal dengan rongga berisi cairan perikardial sebagai pelumas.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '52',
          marks: 1,
          prompt:
            'Uji fotosintesis Sachs membuktikan daun menghasilkan senyawa polisakarida saat warnanya berubah biru kehitaman ditetesi Lugol. Senyawa itu adalah...',
          answer: 'Amilum (pati)',
          principle:
            'Larutan iodin/Lugol merupakan reagen spesifik penguji keberadaan polisakarida pati (amilum) dengan menghasilkan kompleks berwarna biru kehitaman.',
          solution:
            'Percobaan Sachs membuktikan bahwa bagian daun yang terkena cahaya matahari melakukan fotosintesis dan menyimpan cadangan karbohidrat dalam bentuk amilum (pati), yang bereaksi biru kehitaman saat ditetesi larutan Lugol.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '53',
          marks: 1,
          prompt:
            'Buah apel digolongkan sebagai buah semu karena bagian dagingnya tidak berkembang dari ovarium melainkan dari...',
          answer: 'Dasar bunga (reseptakulum)',
          principle:
            'Buah semu terbentuk apabila bagian utama yang membesar menjadi daging buah berasal dari bagian bunga selain bakal buah (ovarium).',
          solution:
            'Pada buah apel (tipe pome), bagian daging buah yang lunak dan dapat dimakan berkembang dari pembesaran dasar bunga (*receptaculum* / hipantium) yang membungkus bakal buah.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '54',
          marks: 1,
          prompt:
            'Ayah bergolongan darah A heterozigot dan ibu B heterozigot. Probabilitas mereka melahirkan anak pertama golongan darah O adalah ... %',
          answer: '25%',
          answerNumeric: [{ name: 'probabilitas', value: 25, unit: '%' }],
          principle:
            'Sistem golongan darah ABO dikendalikan alel ganda $I^A$, $I^B$ (kodominan), dan $i$ (resesif); golongan darah O bergenotip $ii$.',
          solution:
            'Persilangan ayah $I^A i$ dengan ibu $I^B i$ menghasilkan empat kemungkinan genotip sama besar: $I^A I^B$ (AB), $I^A i$ (A), $I^B i$ (B), dan $ii$ (O). Probabilitas memperoleh anak bergenotip $ii$ (golongan darah O) adalah $\\frac{1}{4} = 25\\%$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '55',
          marks: 1,
          prompt:
            'Produksi hormon ADH yang sangat rendah menyebabkan reabsorpsi air di ginjal gagal sehingga urin berlimpah (poliuria). Penyakit ini disebut...',
          answer: 'Diabetes insipidus',
          principle:
            'Hormon antidiuretik (ADH / vasopresin) mengatur permeabilitas tubulus distal dan duktus kolektivus ginjal terhadap penyerapan kembali air.',
          solution:
            'Kekurangan sekresi ADH menyebabkan tubulus ginjal gagal menyerap kembali air sehingga tubuh mengeluarkan urin sangat encer dalam volume besar (poliuria); gangguan ini disebut diabetes insipidus.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '56',
          marks: 1,
          prompt:
            'Roda mobil berjari-jari 35 cm berputar tanpa slip 200 putaran/menit. Jarak linier yang ditempuh mobil selama 1 menit (π=22/7) adalah ... meter.',
          answer: '440 meter',
          answerNumeric: [{ name: 'jarak', value: 440, unit: 'm' }],
          principle:
            'Pada roda yang menggelinding tanpa slip, jarak tempuh satu putaran penuh sama dengan keliling roda ($2\\pi r$).',
          solution:
            'Dengan $r = 35\\ \\text{cm} = 0{,}35\\ \\text{m}$ dan $n = 200$ putaran dalam $1$ menit:\n$$s = n \\times 2\\pi r = 200 \\times 2 \\times \\frac{22}{7} \\times 0{,}35 = 200 \\times 2{,}2 = 440\\ \\text{meter}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '57',
          marks: 1,
          prompt:
            'Kubus kayu massa jenis 0,75 g/cm3 terapung di air (1,0 g/cm3). Persentase volume kubus yang berada di atas permukaan air adalah ... %.',
          answer: '25%',
          answerNumeric: [{ name: 'persentase_volume', value: 25, unit: '%' }],
          principle:
            'Pada benda terapung berlaku kesetimbangan gaya berat dan gaya Archimedes: $\\frac{V_{\\text{celup}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{benda}}}{\\rho_{\\text{fluida}}}$.',
          solution:
            'Fraksi volume yang tercelup di dalam air:\n$$\\frac{V_{\\text{celup}}}{V_{\\text{total}}} = \\frac{0{,}75}{1{,}0} = 75\\%.$$\nPersentase volume kubus yang muncul di atas permukaan air adalah $100\\% - 75\\% = 25\\%$.',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '58',
          marks: 1,
          prompt:
            'Rangkaian paralel R1=6 Ω dan R2=3 Ω dirangkai seri dengan R3=8 Ω. Jika tegangan total 10 Volt, kuat arus totalnya adalah ... Ampere.',
          answer: '1 Ampere',
          answerNumeric: [{ name: 'kuat_arus', value: 1, unit: 'A' }],
          principle:
            'Hambatan pengganti gabungan paralel-seri dihitung bertahap sebelum menerapkan Hukum Ohm $I = \\frac{V}{R_{\\text{total}}}$.',
          solution:
            'Hambatan paralel $R_1$ dan $R_2$:\n$$R_p = \\frac{R_1 \\times R_2}{R_1 + R_2} = \\frac{6 \\times 3}{6 + 3} = 2\\ \\Omega.$$\nHambatan total seri dengan $R_3$:\n$$R_{\\text{total}} = R_p + R_3 = 2 + 8 = 10\\ \\Omega.$$\nKuat arus total:\n$$I = \\frac{V}{R_{\\text{total}}} = \\frac{10}{10} = 1\\ \\text{Ampere}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '59',
          marks: 1,
          prompt:
            'Peluru 10 gram melesat 200 m/s menembus balok statis sedalam 5 cm sebelum berhenti. Besar gaya hambat rata-rata balok adalah ... Newton.',
          answer: '4000 Newton',
          answerNumeric: [{ name: 'gaya_hambat', value: 4000, unit: 'N' }],
          principle:
            'Menurut teorema usaha-energi kinetik, besar usaha gaya hambat sama dengan perubahan energi kinetik peluru hingga berhenti: $F \\cdot s = \\frac{1}{2}mv^2$.',
          solution:
            'Konversi satuan: $m = 10\\ \\text{g} = 0{,}01\\ \\text{kg}$ dan $s = 5\\ \\text{cm} = 0{,}05\\ \\text{m}$.\n$$F \\times s = \\frac{1}{2}mv^2 \\implies F \\times 0{,}05 = \\frac{1}{2} \\times 0{,}01 \\times 200^2$$\n$$0{,}05 F = 200 \\implies F = \\frac{200}{0{,}05} = 4000\\ \\text{Newton}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        },
        {
          label: '60',
          marks: 1,
          prompt:
            'Bola 2 kg dilepas dari bidang miring licin setinggi 3,2 meter. Berdasarkan kekekalan energi, kecepatan bola saat di dasar adalah ... m/s.',
          answer: '8 m/s',
          answerNumeric: [{ name: 'kecepatan', value: 8, unit: 'm/s' }],
          principle:
            'Pada bidang miring licin, energi potensial di ketinggian $h$ berubah seluruhnya menjadi energi kinetik di dasar: $mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh}$.',
          solution:
            '$$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 3{,}2} = \\sqrt{64} = 8\\ \\text{m/s}.$$',
          rubric: [{ code: 'A1', text: 'Jawaban akhir eksak benar.' }]
        }
      ]
    }
  ]
};
