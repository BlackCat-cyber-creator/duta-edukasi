import { bab, soal } from '../author.js';

export default bab({
  grade: 5,
  number: 3,
  slug: 'listrik-dan-magnet-sederhana',
  title: 'Listrik dan Magnet dalam Kehidupan',
  element: 'Energi dan perubahannya: rangkaian listrik sederhana, magnet, dan pemanfaatannya',
  summary: {
    overview: 'Lampu belajar menyala ketika sakelar ditekan, pintu kulkas menutup rapat, dan jarum kompas selalu menunjuk arah utara–selatan. Semua peristiwa itu memanfaatkan sifat listrik dan magnet. Bab ini membahas rangkaian listrik sederhana (terbuka, tertutup, seri, dan paralel secara kualitatif), konduktor dan isolator, sifat-sifat magnet, cara membuat magnet sederhana, serta peran listrik dan magnet pada peralatan rumah tangga.',
    coreConcepts: [
      'Rangkaian Listrik Terbuka dan Tertutup: Rangkaian listrik sederhana terdiri atas sumber listrik (misalnya baterai), kabel penghantar, sakelar, dan lampu. Pada rangkaian tertutup, seluruh komponen terhubung tanpa celah dari satu kutub baterai ke kutub lainnya sehingga arus listrik mengalir dan lampu menyala. Pada rangkaian terbuka, ada kabel yang terputus atau sakelar dalam posisi mati sehingga arus tidak dapat mengalir dan lampu padam.',
      'Rangkaian Seri dan Paralel Secara Kualitatif: Pada rangkaian seri, lampu dipasang berurutan dalam satu jalur kabel tanpa cabang; jika satu lampu dilepas atau putus, jalur terputus sehingga semua lampu ikut padam, namun rangkaian ini hemat kabel (contoh: senter). Pada rangkaian paralel, setiap lampu berada pada cabang tersendiri; jika satu lampu dilepas atau padam, lampu di cabang lain tetap menyala dan nyala tiap lampu sama terang (contoh: instalasi lampu rumah dan lampu lalu lintas).',
      'Konduktor, Isolator, dan Keselamatan Listrik: Konduktor adalah bahan yang mudah menghantarkan arus listrik, seperti tembaga, besi, dan aluminium. Isolator adalah bahan yang sangat sulit menghantarkan arus listrik, seperti plastik, karet, kayu kering, dan kaca. Bagian dalam kabel terbuat dari tembaga agar arus mengalir lancar, sedangkan pembungkus kabel dan gagang obeng memakai plastik atau karet untuk melindungi tangan dari sengatan listrik. Jaga keselamatan dengan tidak menyentuh colokan saat tangan basah dan hematlah listrik dengan mematikan lampu bila tidak diperlukan.',
      'Sifat-Sifat Magnet: Magnet memiliki dua kutub, yaitu kutub utara (U atau N) dan kutub selatan (S), dengan gaya tarik terkuat berada di kedua kutubnya. Kutub sejenis (U–U atau S–S) tolak-menolak, sedangkan kutub berlawanan (U–S) tarik-menarik. Gaya magnet dapat menembus benda tipis nonmagnetik seperti kertas atau kaca. Benda yang ditarik kuat oleh magnet disebut benda magnetik (besi, baja, nikel, kobalt), sedangkan benda seperti kayu, plastik, kaca, aluminium, dan tembaga bersifat nonmagnetik.',
      'Cara Membuat Magnet dan Pemanfaatannya: Magnet sederhana dapat dibuat dari besi atau baja melalui tiga cara: menggosok satu arah berulang kali dengan magnet tetap, induksi (mendekatkan besi ke magnet tetap), dan elektromagnet (melilitkan kawat berisolasi pada paku besi lalu menghubungkannya ke baterai). Dalam kehidupan sehari-hari, sifat listrik dan magnet dimanfaatkan pada karet pintu kulkas, kompas, bel listrik (elektromagnet), serta motor listrik pada kipas angin dan blender yang mengubah energi listrik menjadi gerak.'
    ],
    keyFormulas: [
      { label: 'Syarat lampu menyala', formula: '\\text{Rangkaian tertutup} \\implies \\text{Arus listrik mengalir} \\implies \\text{Lampu menyala}' },
      { label: 'Interaksi kutub magnet', formula: '\\text{Kutub sejenis (U–U / S–S)} \\Rightarrow \\text{Tolak-menolak} \\qquad \\text{Berlawanan (U–S)} \\Rightarrow \\text{Tarik-menarik}' },
      { label: 'Perubahan energi alat rumah tangga', formula: '\\text{Lampu: Listrik} \\to \\text{Cahaya} \\qquad \\text{Kipas: Listrik} \\to \\text{Gerak} \\qquad \\text{Setrika: Listrik} \\to \\text{Panas}' }
    ],
    workedExamples: [
      {
        title: 'Memilih susunan lampu untuk rumah',
        problem: 'Keluarga Rani ingin memasang lampu di ruang tamu dan lampu di kamar tidur agar masing-masing dapat dinyalakan atau dimatikan secara terpisah. Rangkaian apa yang paling sesuai?',
        solution: 'Rumah harus menggunakan **rangkaian paralel**, karena setiap lampu berada pada jalur cabang sendiri dengan sakelar masing-masing sehingga mematikan lampu kamar tidak memadamkan lampu ruang tamu.'
      },
      {
        title: 'Memisahkan paku besi dari serbuk kayu',
        problem: 'Sekotak paku besi terjatuh dan bercampur dengan serbuk gergaji kayu kering di bengkel. Alat apa yang paling cepat untuk memisahkannya?',
        solution: 'Gunakan **magnet**! Paku besi adalah benda **magnetik** sehingga tertarik menempel pada magnet, sedangkan serbuk kayu bersifat **nonmagnetik** sehingga tetap tertinggal.'
      },
      {
        title: 'Memperkuat elektromagnet sederhana',
        problem: 'Beni melilitkan 10 lilitan kawat tembaga pada paku besi dan menghubungkannya ke 1 baterai sehingga mampu menarik 2 klip kertas. Bagaimana cara agar paku tersebut dapat menarik lebih banyak klip kertas?',
        solution: 'Kekuatan elektromagnet bertambah apabila **jumlah lilitan kawat diperbanyak** (misalnya menjadi 25 lilitan) atau **jumlah baterai ditambah secara berderet** sehingga arus listriknya lebih kuat.'
      }
    ],
    misconceptions: [
      'Menganggap semua logam ditarik oleh magnet. Logam seperti aluminium, tembaga, perak, dan emas tidak ditarik magnet; yang ditarik kuat terutama besi, baja, nikel, dan kobalt.',
      'Mengira sebuah magnet batang yang dipatahkan menjadi dua akan menghasilkan satu bagian berkutub utara saja dan bagian lain berkutub selatan saja. Setiap potongan magnet tetap memiliki dua kutub: utara dan selatan.',
      'Menganggap sakelar yang dimatikan membuat listrik di baterai langsung habis. Sakelar terbuka hanya memutus lintasan arus sehingga baterai justru lebih awet.'
    ],
    tutorTip: 'Bedakan rangkaian seri dan paralel dengan jalan: SERI seperti jalan satu jalur tanpa belokan (satu terputus, semua berhenti); PARALEL seperti jalan bercabang (satu cabang ditutup, cabang lain tetap berjalan lancar).'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Komponen pada rangkaian senter sederhana yang berfungsi memutus dan menyambungkan arus listrik dari baterai ke lampu adalah...',
      options: ['kabel tembaga', 'sakelar', 'dudukan lampu', 'kaca penutup'],
      answer: 'B',
      hint: 'Bagian ini digeser atau ditekan saat kita ingin menyalakan dan mematikan senter.',
      solution: '**Sakelar** bertugas menyambungkan (menutup rangkaian) agar arus mengalir atau memutus (membuka rangkaian) agar lampu padam. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pasangan bahan berikut ini yang keduanya tergolong konduktor listrik yang baik adalah...',
      options: [
        'karet gelang dan plastik',
        'kayu kering dan kaca',
        'kertas karton dan kain wol',
        'tembaga dan besi'
      ],
      answer: 'D',
      hint: 'Konduktor umumnya berupa bahan logam yang digunakan untuk kabel atau penghantar.',
      solution: '**Tembaga dan besi** adalah logam yang mudah menghantarkan arus listrik (konduktor). Plastik, karet, kayu kering, kaca, kertas, dan wol adalah isolator. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Di antara benda-benda di dalam kotak pensil berikut, benda yang dapat ditarik kuat oleh magnet adalah...',
      options: ['penjepit kertas dari besi', 'penggaris plastik', 'penghapus karet', 'pensil kayu'],
      answer: 'A',
      hint: 'Pilih benda yang terbuat dari bahan feromagnetik seperti besi atau baja.',
      solution: '**Penjepit kertas dari besi** termasuk benda magnetik sehingga ditarik kuat oleh magnet. Plastik, karet, dan kayu adalah benda nonmagnetik. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Apabila kutub utara sebuah magnet batang didekatkan dengan kutub selatan magnet batang lainnya, yang akan terjadi adalah...',
      options: [
        'kedua magnet tolak-menolak',
        'kedua magnet diam dan kehilangan sifat magnetnya',
        'kedua magnet saling tarik-menarik',
        'kedua kutub berubah menjadi kutub yang sama'
      ],
      answer: 'C',
      hint: 'Ingat sifat kutub magnet yang berlawanan jenis.',
      solution: 'Dua kutub magnet yang **berlawanan jenis** (utara dan selatan) apabila didekatkan akan saling **tarik-menarik**. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pembungkus bagian luar kabel listrik di rumah terbuat dari plastik atau karet karena bahan tersebut berfungsi sebagai...',
      options: [
        'penghantar arus agar lampu menyala lebih terang',
        'isolator sehingga aman disentuh dan mencegah sengatan listrik',
        'sumber listrik cadangan saat baterai habis',
        'penguat gaya tarik magnet pada kabel'
      ],
      answer: 'B',
      hint: 'Plastik dan karet tidak menghantarkan arus listrik.',
      solution: 'Plastik dan karet adalah **isolator** yang menahan arus listrik tetap di dalam kawat tembaga sehingga kabel aman dan tidak menyetrum saat disentuh. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Perhatikan gambar rangkaian dua lampu yang dihubungkan ke baterai V berikut. Lampu L₁ dan L₂ terpasang berurutan dalam satu jalur kabel. Jika lampu L₁ dilepas dari dudukannya sehingga jalurnya terputus, yang terjadi pada lampu L₂ adalah...',
      options: [
        'menyala jauh lebih terang dari semula',
        'ikut padam karena aliran listrik tidak membentuk lintasan tertutup',
        'tetap menyala dengan terang yang sama',
        'berkedip beberapa kali lalu tetap menyala'
      ],
      answer: 'B',
      hint: 'Rangkaian seri hanya memiliki satu jalur; jika satu bagian terbuka, arus tidak dapat mengalir.',
      solution: 'L₁ dan L₂ disusun **seri** dalam satu lintasan. Jika L₁ dilepas, lintasan arus menjadi terbuka sehingga arus berhenti mengalir dan lampu L₂ **ikut padam**. Jawaban: **B**.',
      visual: {
        type: 'circuit',
        props: {
          title: 'Rangkaian Dua Lampu',
          caption: 'Baterai V dihubungkan dengan lampu L₁ dan L₂',
          mode: 'series',
          batteryLabel: 'V',
          resistors: ['L₁', 'L₂']
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Tina merangkai baterai, kabel, dan sebuah bola lampu, tetapi lampu belum menyala karena salah satu ujung kabel tidak menempel pada kutub negatif baterai. Kondisi rangkaian Tina disebut...',
      options: [
        'rangkaian tertutup sehingga arus listrik tertahan di lampu',
        'rangkaian paralel yang kelebihan tegangan',
        'rangkaian terbuka sehingga arus listrik belum dapat mengalir',
        'rangkaian seri yang kekurangan isolator'
      ],
      answer: 'C',
      hint: 'Arus listrik membutuhkan jalur utuh yang tersambung dari satu kutub baterai ke kutub lainnya.',
      solution: 'Ujung kabel yang terlepas membuat lintasan terputus, disebut **rangkaian terbuka**, sehingga arus listrik tidak dapat mengalir menyalakan lampu. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Saat sebatang magnet dicelupkan ke dalam wadah berisi serbuk besi lalu diangkat, serbuk besi paling banyak menempel pada bagian...',
      options: [
        'kedua ujung kutub magnet',
        'tepat di bagian tengah batang magnet',
        'hanya di sisi sebelah kiri magnet saja',
        'merata sama tebal di seluruh permukaan magnet'
      ],
      answer: 'A',
      hint: 'Di mana letak gaya tarik terbesar sebuah magnet batang?',
      solution: 'Gaya magnet paling kuat berada pada **kedua ujung kutubnya** (kutub utara dan selatan), sehingga serbuk besi paling banyak menempel di kedua ujung tersebut. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Bayu melilitkan kawat tembaga berisolasi pada sebatang paku besi lalu menempelkan kedua ujung kawat ke kutub baterai. Paku tersebut dapat menarik beberapa jarum pentul, namun saat kawat dilepas dari baterai jarum langsung berjatuhan. Cara pembuatan magnet yang dilakukan Bayu disebut...',
      options: ['menggosok searah', 'induksi magnet tetap', 'pendinginan logam', 'elektromagnet'],
      answer: 'D',
      hint: 'Cara ini memanfaatkan aliran arus listrik untuk menimbulkan sifat magnet sementara.',
      solution: 'Membuat magnet dengan mengalirkan arus listrik melalui lilitan kawat berinti besi disebut **elektromagnet**. Sifat kemagnetannya bersifat sementara selama arus listrik mengalir. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Peralatan rumah tangga berikut ini yang bekerja dengan mengubah energi listrik menjadi energi gerak dengan bantuan magnet dan kumparan di dalam motornya adalah...',
      options: ['kipas angin', 'setrika listrik', 'penanak nasi', 'lampu pijar'],
      answer: 'A',
      hint: 'Alat manakah yang memiliki bagian berputar untuk menghasilkan hembusan angin?',
      solution: '**Kipas angin** menggunakan motor listrik yang memanfaatkan interaksi listrik dan magnet untuk memutar baling-baling (energi listrik → gerak). Setrika dan penanak nasi menghasilkan panas, sedangkan lampu menghasilkan cahaya. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Perhatikan skema tiga lampu L₁, L₂, dan L₃ yang dihubungkan ke baterai 3 V seperti pada gambar. Jika lampu L₂ tiba-tiba putus sehingga tidak dapat mengalirkan arus, keadaan lampu lainnya adalah...',
      options: [
        'hanya L₁ saja yang tetap menyala',
        'hanya L₃ saja yang tetap menyala',
        'semua lampu ikut padam bersamaan',
        'L₁ dan L₃ tetap menyala karena memiliki cabang tersendiri'
      ],
      answer: 'D',
      hint: 'Perhatikan bahwa setiap lampu tersambung pada jalurnya masing-masing ke baterai.',
      solution: 'Ketiga lampu disusun **paralel**, sehingga masing-masing mempunyai jalur cabang tersendiri menuju baterai 3 V. Putusnya L₂ tidak memutus aliran listrik ke **L₁ dan L₃**, jadi keduanya tetap menyala. Jawaban: **D**.',
      visual: {
        type: 'circuit',
        props: {
          title: 'Skema Tiga Lampu',
          caption: 'Baterai 3 V dengan lampu L₁, L₂, dan L₃',
          mode: 'parallel',
          batteryLabel: '3 V',
          resistors: ['L₁', 'L₂', 'L₃']
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Edo ingin membuat sebuah paku baja menjadi magnet sederhana tanpa menggunakan baterai. Ia menyiapkan sebuah magnet batang tetap. Langkah yang tepat agar paku baja menjadi magnet adalah...',
      options: [
        'menggosok paku dengan magnet secara bolak-balik secepat mungkin',
        'membungkus paku dengan plastik lalu mengetuknya ke lantai',
        'menggosokkan satu kutub magnet pada paku secara searah dan berulang-ulang',
        'merendam paku dan magnet bersama-sama di dalam air garam'
      ],
      answer: 'C',
      hint: 'Jika digosok bolak-balik, arah magnet elementer di dalam paku tetap berantakan.',
      solution: 'Membuat magnet dengan cara menggosok harus dilakukan **searah secara berulang-ulang** dari satu ujung ke ujung lain agar bagian-bagian magnet kecil di dalam baja tersusun rapi. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah magnet batang yang kutub utara dan selatannya sudah ditandai tidak sengaja terjatuh lalu patah menjadi dua bagian sama panjang. Pernyataan yang benar tentang kutub kedua potongan magnet tersebut adalah...',
      options: [
        'masing-masing potongan tetap memiliki kutub utara dan kutub selatan',
        'potongan kiri hanya memiliki kutub utara, potongan kanan hanya kutub selatan',
        'kedua potongan langsung kehilangan seluruh sifat kemagnetannya',
        'kedua potongan berubah menjadi kutub selatan semua'
      ],
      answer: 'A',
      hint: 'Tidak ada magnet yang hanya memiliki satu kutub saja.',
      solution: 'Setiap magnet selalu mempunyai dua kutub. Bila dipotong menjadi dua, **masing-masing potongan menjadi magnet baru yang tetap memiliki kutub utara dan kutub selatan**. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dina meletakkan klip kertas besi di atas selembar kertas karton tipis, lalu menggerakkan magnet di bawah karton tersebut. Ternyata klip kertas ikut bergerak mengikuti gerakan magnet di bawahnya. Percobaan Dina membuktikan bahwa...',
      options: [
        'karton tipis berubah menjadi logam besi saat disentuh magnet',
        'gaya magnet dapat menembus benda tipis yang bersifat nonmagnetik',
        'klip kertas bergerak karena tiupan angin di bawah karton',
        'magnet hanya bekerja apabila menempel langsung pada besi tanpa perantara'
      ],
      answer: 'B',
      hint: 'Karton berada di antara magnet dan klip, namun tarikannya tetap bekerja.',
      solution: 'Meskipun terhalang kertas karton, magnet tetap menarik dan menggerakkan klip besi. Ini membuktikan **gaya magnet dapat menembus benda tipis yang nonmagnetik**. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Andi merangkai dua lampu secara seri dengan satu baterai, sedangkan Budi merangkai dua lampu identik secara paralel dengan satu baterai serupa. Berdasarkan sifat rangkaian dan penerapannya di rumah, kesimpulan yang paling tepat adalah...',
      options: [
        'lampu Andi lebih terang karena memakai lebih sedikit kabel',
        'rangkaian seri lebih cocok untuk seluruh rumah agar satu sakelar mematikan semua ruangan',
        'lampu pada rangkaian paralel menyala lebih terang dan pemasangan paralel di rumah memungkinkan tiap lampu dimatikan terpisah untuk menghemat listrik',
        'rangkaian paralel membuat semua lampu padam bila salah satu bohlam rusak'
      ],
      answer: 'C',
      hint: 'Bandingkan terangnya nyala dan kemudahan mematikan ruangan secara mandiri.',
      solution: 'Pada rangkaian paralel, tiap lampu menerima penuh dorongan baterai sehingga **menyala lebih terang**, dan di rumah tiap ruangan dapat **dikendalikan sakelarnya masing-masing** sehingga listrik dapat dihemat. Jawaban: **C**.'
    })
  ]
});
