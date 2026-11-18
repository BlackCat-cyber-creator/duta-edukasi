import { bab, soal } from '../author.js';

export default bab({
  grade: 4,
  number: 3,
  slug: 'energi-dan-perubahannya',
  title: 'Sumber dan Perubahan Bentuk Energi',
  element: 'Pemahaman IPAS (Energi dan Perubahannya): sumber, bentuk, dan perubahan bentuk energi',
  summary: {
    overview: 'Semua aktivitas kita—mulai dari berjalan, memasak, menyalakan kipas angin, hingga menerangi ruang kelas—memerlukan energi. Bab ini membahas berbagai sumber energi di alam dan sekitar kita, bentuk-bentuk energi, serta perubahan bentuk energi pada peralatan rumah tangga dan pembangkit listrik sederhana.',
    coreConcepts: [
      'Sumber Energi di Sekitar Kita: Energi adalah kemampuan untuk melakukan kerja atau aktivitas. Sumber energi berasal dari alam maupun buatan, seperti matahari (sumber energi panas dan cahaya terbesar di bumi), air yang mengalir, angin yang bertiup, makanan bagi manusia dan hewan, baterai, serta bahan bakar seperti bensin dan gas elpiji.',
      'Bentuk-Bentuk Energi: Energi hadir dalam berbagai bentuk. Energi panas (kalor) menghangatkan atau memasak (api, matahari). Energi cahaya menerangi tempat gelap (matahari, lampu). Energi gerak dimiliki benda bergerak (kipas berputar, air sungai). Energi bunyi berasal dari benda bergetar (gitar, bel). Energi listrik menggerakkan alat elektronik. Energi kimia tersimpan dalam makanan, baterai, dan bahan bakar.',
      'Perubahan Energi pada Alat Rumah Tangga: Energi dapat berubah dari satu bentuk ke bentuk lain yang berguna. Setrika listrik, pengering rambut, dan penanak nasi mengubah energi listrik → energi panas. Kipas angin dan blender mengubah energi listrik → energi gerak. Lampu mengubah energi listrik → energi cahaya (dan sedikit panas). Televisi mengubah energi listrik → energi cahaya dan bunyi.',
      'Perubahan Energi pada Alat Bertumpu Baterai dan Bahan Bakar: Senter mengubah energi kimia pada baterai → energi listrik → energi cahaya. Jam dinding baterai mengubah energi kimia → listrik → gerak jarum jam. Pada kendaraan bermotor, bahan bakar bensin menyimpan energi kimia yang diubah mesin menjadi energi panas dan energi gerak.',
      'Panel Surya dan Pembangkit Listrik Sederhana: Sumber energi alam seperti matahari, air, dan angin dapat dimanfaatkan untuk menghasilkan listrik. Panel surya (sel surya) mengubah energi cahaya matahari langsung menjadi energi listrik. Pembangkit listrik tenaga air (PLTA) memakai aliran air untuk memutar turbin hingga menghasilkan listrik (energi gerak → energi listrik), sedangkan kincir angin memakai energi gerak angin menjadi energi listrik.',
      'Perilaku Hemat Energi: Menggunakan energi secara bijak membantu menjaga ketersediaan sumber energi alam dan mengurangi pencemaran. Contoh perilaku hemat energi adalah mematikan lampu dan kipas saat ruangan kosong, membuka jendela pada siang hari agar mendapat cahaya alami, serta berjalan kaki atau bersepeda untuk jarak dekat.'
    ],
    keyFormulas: [
      { label: 'Setrika & penanak nasi', formula: '\\text{Energi listrik} \\to \\text{Energi panas}' },
      { label: 'Kipas angin & blender', formula: '\\text{Energi listrik} \\to \\text{Energi gerak}' },
      { label: 'Panel surya', formula: '\\text{Energi cahaya matahari} \\to \\text{Energi listrik}' },
      { label: 'Senter baterai', formula: '\\text{Energi kimia} \\to \\text{Energi listrik} \\to \\text{Energi cahaya}' }
    ],
    workedExamples: [
      {
        title: 'Menentukan perubahan energi pada alat rumah tangga',
        problem: 'Ibu menyalakan setrika listrik untuk merapikan seragam sekolah, sementara di ruang tengah kipas angin dinyalakan agar udara terasa sejuk. Jelaskan perubahan bentuk energi pada kedua alat tersebut.',
        solution: 'Pada **setrika listrik**, energi listrik berubah menjadi **energi panas** untuk menghaluskan pakaian.\nPada **kipas angin**, energi listrik berubah menjadi **energi gerak** untuk memutar baling-baling.'
      },
      {
        title: 'Merunut rantai perubahan energi pada senter',
        problem: 'Saat mati lampu, Dina menyalakan senter yang berisi dua buah baterai hingga ruangan menjadi terang. Bagaimana urutan perubahan bentuk energi yang terjadi?',
        solution: 'Baterai menyimpan **energi kimia**. Ketika sakelar senter ditekan, energi kimia berubah menjadi **energi listrik**, lalu bohlam senter mengubahnya menjadi **energi cahaya**.'
      },
      {
        title: 'Memanfaatkan sumber energi alam menjadi listrik',
        problem: 'Sebuah desa pegunungan yang memiliki aliran sungai deras dan curah sinar matahari cerah ingin membangun pembangkit listrik ramah lingkungan. Alat apa yang cocok dipasang dan bagaimana perubahan energinya?',
        solution: 'Desa dapat memasang **kincir air (PLTA sederhana)** yang mengubah **energi gerak air menjadi energi listrik**, serta **panel surya** di atap rumah yang mengubah **energi cahaya matahari menjadi energi listrik**.'
      }
    ],
    misconceptions: [
      'Mengira energi yang telah dipakai langsung lenyap begitu saja. Energi tidak hilang, melainkan berubah menjadi bentuk lain—misalnya lampu yang dinyalakan menghasilkan cahaya sekaligus sedikit panas.',
      'Menganggap makanan hanya menghilangkan rasa lapar dan bukan sumber energi. Makanan menyimpan energi kimia yang diubah tubuh menjadi energi gerak untuk beraktivitas dan panas untuk menjaga suhu tubuh.',
      'Mengira baterai langsung menyimpan cahaya atau gerak. Di dalam baterai tersimpan energi kimia yang baru berubah menjadi listrik ketika dipasang pada rangkaian tertutup.'
    ],
    tutorTip: 'Untuk menentukan perubahan energi pada suatu alat, tanyakan dua hal: energi apa yang dimasukkan agar alat hidup (misal listrik, baterai, atau angin), lalu energi apa yang menjadi kegunaan utamanya!'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sumber energi panas dan cahaya terbesar yang menerangi dan menghangatkan bumi adalah...',
      options: ['baterai', 'matahari', 'minyak bumi', 'angin'],
      answer: 'B',
      hint: 'Benda langit yang memancarkan sinar sangat terang pada siang hari.',
      solution: '**Matahari** merupakan sumber energi panas dan cahaya terbesar bagi seluruh makhluk hidup di bumi. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Manusia membutuhkan makanan setiap hari agar memiliki tenaga untuk berjalan, berlari, dan belajar. Bentuk energi yang tersimpan di dalam makanan adalah...',
      options: ['energi listrik', 'energi bunyi', 'energi cahaya', 'energi kimia'],
      answer: 'D',
      hint: 'Bentuk energi ini juga tersimpan di dalam baterai dan bahan bakar.',
      solution: 'Makanan menyimpan **energi kimia** yang diolah tubuh menjadi energi gerak untuk beraktivitas dan energi panas tubuh. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Alat rumah tangga berikut yang mengubah energi listrik menjadi energi panas adalah...',
      options: ['setrika listrik', 'kipas angin', 'radio', 'bel listrik'],
      answer: 'A',
      hint: 'Pilih alat yang dimanfaatkan rasa panasnya.',
      solution: '**Setrika listrik** mengubah energi listrik menjadi **energi panas** untuk merapikan pakaian. Kipas angin menghasilkan gerak, sedangkan radio dan bel menghasilkan bunyi. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Ketika kipas angin dihubungkan ke stopkontak dan tombolnya ditekan, baling-baling kipas berputar kencang. Perubahan bentuk energi yang terjadi adalah...',
      options: [
        'energi panas menjadi energi gerak',
        'energi gerak menjadi energi listrik',
        'energi listrik menjadi energi gerak',
        'energi bunyi menjadi energi cahaya'
      ],
      answer: 'C',
      hint: 'Kipas memakai listrik untuk memutar baling-balingnya.',
      solution: 'Kipas angin menerima **energi listrik** dan mengubahnya menjadi **energi gerak** pada putaran baling-baling. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Dika memetik senar gitar sehingga terdengar alunan nada yang merdu. Perubahan bentuk energi yang terjadi saat senar dipetik adalah...',
      options: [
        'energi listrik menjadi energi bunyi',
        'energi gerak menjadi energi bunyi',
        'energi panas menjadi energi gerak',
        'energi cahaya menjadi energi bunyi'
      ],
      answer: 'B',
      hint: 'Senar bergerak bergetar saat dipetik sehingga terdengar suara.',
      solution: 'Gerakan jari memetik senar membuat senar bergetar, sehingga **energi gerak** berubah menjadi **energi bunyi**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Di atap gedung sekolah dipasang panel surya untuk membantu menyalakan lampu ruang kelas. Perubahan bentuk energi yang terjadi pada panel surya tersebut adalah...',
      options: [
        'energi angin menjadi energi panas',
        'energi listrik menjadi energi cahaya',
        'energi panas bumi menjadi energi gerak',
        'energi cahaya matahari menjadi energi listrik'
      ],
      answer: 'D',
      hint: 'Kata "surya" berarti matahari.',
      solution: '**Panel surya** menangkap **energi cahaya matahari** dan langsung mengubahnya menjadi **energi listrik** untuk keperluan sekolah atau rumah. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Saat senter bertenaga baterai dinyalakan untuk menerangi jalan yang gelap, urutan perubahan bentuk energi yang paling tepat adalah...',
      options: [
        'energi kimia → energi listrik → energi cahaya',
        'energi listrik → energi kimia → energi gerak',
        'energi panas → energi listrik → energi bunyi',
        'energi gerak → energi kimia → energi cahaya'
      ],
      answer: 'A',
      hint: 'Ingat bentuk energi yang tersimpan di dalam baterai sebelum menyalakan lampu senter.',
      solution: 'Di dalam baterai tersimpan **energi kimia** yang berubah menjadi **energi listrik** saat sakelar dinyalakan, lalu lampu mengubahnya menjadi **energi cahaya**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Contoh pemanfaatan langsung energi panas dan cahaya matahari dalam kegiatan sehari-hari di rumah adalah...',
      options: [
        'menyalakan televisi di ruang keluarga',
        'menggerakkan jarum jam dinding dengan baterai',
        'mengeringkan pakaian basah dan ikan asin di halaman',
        'memutar pisau blender untuk menghaluskan buah'
      ],
      answer: 'C',
      hint: 'Cari kegiatan yang memakai panas dan sinar matahari tanpa kabel listrik.',
      solution: 'Menjemur **pakaian basah dan ikan asin** memanfaatkan langsung energi panas matahari untuk menguapkan air. Tiga kegiatan lain memakai listrik atau baterai. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pada pembangkit listrik tenaga air (PLTA), aliran air sungai yang deras diarahkan untuk memutar turbin yang terhubung dengan generator. Perubahan bentuk energi utama pada proses tersebut adalah...',
      options: [
        'energi kimia menjadi energi panas',
        'energi gerak menjadi energi listrik',
        'energi cahaya menjadi energi bunyi',
        'energi listrik menjadi energi kimia'
      ],
      answer: 'B',
      hint: 'Air yang mengalir memiliki energi gerak untuk memutar turbin.',
      solution: 'Air yang mengalir deras memiliki **energi gerak** untuk memutar turbin dan generator, sehingga menghasilkan **energi listrik**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sepeda motor dapat berjalan di jalan raya setelah tangkinya diisi bahan bakar bensin. Perubahan bentuk energi yang terjadi di dalam mesin sepeda motor adalah...',
      options: [
        'energi kimia menjadi energi panas dan energi gerak',
        'energi listrik menjadi energi cahaya saja',
        'energi gerak menjadi energi kimia di dalam tangki',
        'energi bunyi menjadi energi listrik'
      ],
      answer: 'A',
      hint: 'Bensin menyimpan energi kimia yang dibakar mesin agar kendaraan melaju.',
      solution: 'Bensin menyimpan **energi kimia**. Pembakaran bensin di mesin menghasilkan **energi panas dan energi gerak** sehingga roda sepeda motor berputar. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah daerah pesisir pantai memiliki hembusan angin yang kencang dan stabil hampir sepanjang hari. Sumber energi ramah lingkungan yang paling sesuai dikembangkan untuk menghasilkan listrik di daerah itu adalah...',
      options: [
        'pembakaran batu bara dalam jumlah besar',
        'baterai sekali pakai untuk setiap rumah',
        'tenaga angin menggunakan kincir atau turbin angin',
        'kompor minyak tanah di sepanjang pantai'
      ],
      answer: 'C',
      hint: 'Manfaatkan potensi alam yang berlimpah dan dapat diperbarui di pesisir tersebut.',
      solution: 'Angin yang berhembus kencang di pesisir dapat memutar **kincir atau turbin angin** untuk menghasilkan listrik. Tenaga angin termasuk sumber energi terbarukan dan ramah lingkungan. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pada beberapa sepeda, terdapat alat kecil bernama dinamo yang menempel di ban sepeda. Saat anak mengayuh sepeda pada malam hari, putaran roda menggerakkan dinamo sehingga lampu depan sepeda menyala. Urutan perubahan energi sejak tubuh mengayuh hingga lampu menyala adalah...',
      options: [
        'energi cahaya → energi listrik → energi gerak',
        'energi panas → energi bunyi → energi cahaya',
        'energi listrik → energi kimia → energi gerak',
        'energi kimia makanan → energi gerak → energi listrik → energi cahaya'
      ],
      answer: 'D',
      hint: 'Mulai dari energi dalam tubuh pengayuh, putaran roda, dinamo, sampai lampu menyala.',
      solution: 'Tubuh pengayuh memakai **energi kimia** dari makanan menjadi **energi gerak** mengayuh roda. Putaran roda menggerakkan dinamo menjadi **energi listrik**, lalu bohlam mengubahnya menjadi **energi cahaya**. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Perhatikan daftar pasangan alat dan perubahan energi utamanya berikut: (1) pemanggang roti: listrik → panas, (2) televisi: listrik → cahaya dan bunyi, (3) blender: listrik → panas, (4) bel listrik: listrik → cahaya. Pasangan yang tepat ditunjukkan oleh nomor...',
      options: ['(1) dan (3)', '(1) dan (2)', '(2) dan (4)', '(3) dan (4)'],
      answer: 'B',
      hint: 'Periksa kegunaan utama blender (memutar pisau) dan bel listrik (mengeluarkan suara).',
      solution: 'Pemanggang roti mengubah listrik → panas (1 benar) dan televisi mengubah listrik → cahaya dan bunyi (2 benar). Blender utamanya listrik → gerak (3 salah), sedangkan bel listrik menghasilkan bunyi (4 salah). Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah lampu meja yang dinyalakan selama dua jam terasa hangat ketika bagian kap di dekat bohlam didekati tangan. Pengamatan ini menunjukkan bahwa...',
      options: [
        'lampu menghilangkan sebagian energi listrik sehingga musnah',
        'energi listrik di kabel berubah menjadi energi kimia',
        'sebagian energi listrik juga berubah menjadi energi panas selain energi cahaya',
        'energi cahaya berubah kembali menjadi energi gerak'
      ],
      answer: 'C',
      hint: 'Energi tidak hilang, melainkan dapat berubah menjadi lebih dari satu bentuk energi.',
      solution: 'Selain menghasilkan **energi cahaya** sebagai manfaat utama, lampu yang menyala juga melepaskan sebagian energi listrik menjadi **energi panas**, sehingga sekitar lampu terasa hangat. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pada siang hari yang cerah, jendela kelas sudah dibuka sehingga cahaya matahari menerangi ruangan dengan baik, tetapi lampu kelas masih menyala dan kipas angin tetap berputar saat semua siswa keluar beristirahat. Sikap penghematan energi yang paling tepat adalah...',
      options: [
        'mematikan lampu dan kipas angin saat kelas kosong serta memanfaatkan cahaya matahari',
        'menutup rapat semua tirai jendela lalu menyalakan seluruh lampu kelas',
        'membiarkan kipas tetap menyala agar ruangan terlihat lebih terang',
        'mengganti jendela kaca dengan dinding tertutup agar udara tidak keluar'
      ],
      answer: 'A',
      hint: 'Jangan biarkan alat listrik menyala sia-sia ketika tidak dipakai.',
      solution: 'Menghemat energi dilakukan dengan **mematikan lampu serta kipas angin saat ruangan tidak digunakan** dan **memanfaatkan cahaya matahari** pada siang hari. Jawaban: **A**.'
    })
  ]
});
