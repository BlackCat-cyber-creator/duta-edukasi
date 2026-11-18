import { bab, soal } from '../author.js';

export default bab({
  grade: 6,
  number: 2,
  slug: 'penghematan-dan-energi-alternatif',
  title: 'Efisiensi Energi dan Energi Terbarukan',
  element: 'Pemahaman IPAS: penghematan energi, energi alternatif, dan mitigasi perubahan iklim',
  summary: {
    overview: 'Lampu di ruang kelas, kipas angin, dan kendaraan bermotor membutuhkan energi agar dapat bekerja. Sebagian besar energi kita masih berasal dari bahan bakar fosil yang terbatas dan memicu pemanasan global. Bab ini membahas keterbatasan energi fosil dan krisis energi, cara menghemat energi di rumah dan sekolah, pemanfaatan berbagai sumber energi terbarukan di sekitar kita, serta peran efisiensi dan energi bersih dalam mitigasi perubahan iklim.',
    coreConcepts: [
      'Keterbatasan Energi Fosil dan Krisis Energi: Bahan bakar fosil seperti minyak bumi, batu bara, dan gas alam terbentuk dari sisa makhluk hidup yang tertimbun jutaan tahun lalu. Karena pembentukannya sangat lambat sementara pemakaian manusia sangat cepat, sumber energi ini bersifat tak terbarukan dan persediaannya makin menipis. Jika kebutuhan listrik dan bahan bakar terus naik sedangkan pasokan menipis, dapat terjadi krisis energi sekaligus meningkatnya emisi gas rumah kaca.',
      'Cara Menghemat Energi di Rumah dan Sekolah: Menghemat energi berarti menggunakan energi secara bijak sesuai kebutuhan agar tidak terbuang percuma. Contoh nyata: mematikan lampu, televisi, kipas, dan AC saat tidak digunakan; mengganti lampu pijar dengan lampu LED hemat energi; memanfaatkan cahaya matahari dan ventilasi alami pada siang hari; menyetrika pakaian sekaligus dalam jumlah banyak; serta berjalan kaki, bersepeda, atau naik angkutan umum untuk jarak dekat guna menghemat bahan bakar minyak.',
      'Energi Surya, Angin, dan Air: Sumber energi terbarukan berasal dari alam yang terus tersedia dan rendah emisi karbon. Panel surya pada pembangkit listrik tenaga surya (PLTS) mengubah energi cahaya matahari langsung menjadi energi listrik. Pembangkit listrik tenaga bayu atau angin (PLTB) memakai kincir untuk memutar turbin dan generator sehingga energi gerak angin berubah menjadi listrik. Pembangkit listrik tenaga air (PLTA) dan mikrohidro memanfaatkan energi gerak aliran atau jatuhan air sungai dan bendungan untuk memutar turbin penghasil listrik.',
      'Energi Panas Bumi, Biomassa, dan Biogas: Indonesia berada di jalur gunung api sehingga kaya energi panas bumi (geotermal); uap panas dari dalam bumi dialirkan untuk memutar turbin pembangkit listrik tenaga panas bumi (PLTP). Biomassa berasal dari bahan organik seperti kayu, sekam padi, dan limbah pertanian yang dapat dimanfaatkan sebagai sumber energi. Kotoran ternak dan sampah organik juga dapat difermentasi dalam tangki kedap udara menjadi biogas untuk bahan bakar memasak dan penerangan.',
      'Mitigasi Perubahan Iklim dengan Energi Bersih: Pembakaran batu bara dan bensin melepaskan gas rumah kaca seperti karbon dioksida yang menahan panas matahari di atmosfer, sehingga memicu pemanasan global, cuaca ekstrem, dan mencairnya es kutub. Upaya mitigasi bertujuan mengurangi sumber penyebabnya: menghemat pemakaian listrik dan bahan bakar, beralih ke sumber energi alternatif sesuai potensi sumber daya alam di lingkungan sekitar, serta menanam pohon untuk menyerap karbon dioksida.'
    ],
    keyFormulas: [
      { label: 'Pemakaian energi listrik', formula: '\\text{Energi (Wh)} = \\text{Daya (watt)} \\times \\text{Waktu (jam)}' },
      { label: 'Konversi satuan listrik rumah tangga', formula: '1\\ \\text{kWh} = 1.000\\ \\text{Wh}' },
      { label: 'Perubahan bentuk energi pembangkit', formula: '\\text{PLTS: cahaya} \\to \\text{listrik} \\qquad \\text{PLTA/PLTB: gerak} \\to \\text{listrik}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung penghematan lampu LED',
        problem: 'Sebuah ruang kelas memiliki 4 lampu pijar masing-masing 40 watt yang menyala 5 jam per hari. Jika diganti dengan 4 lampu LED masing-masing 10 watt untuk waktu yang sama, berapa Wh energi listrik yang dihemat setiap hari?',
        solution: 'Pemakaian awal: $4 \\times 40 \\times 5 = 800\\ \\text{Wh}$.\nSetelah diganti LED: $4 \\times 10 \\times 5 = 200\\ \\text{Wh}$.\nPenghematan harian: $800 - 200 = \\mathbf{600\\ \\text{Wh}}$.'
      },
      {
        title: 'Menentukan perubahan energi pada pembangkit',
        problem: 'Tuliskan perubahan bentuk energi yang terjadi pada PLTS dan PLTB.',
        solution: 'Pada **PLTS (panel surya)**, energi cahaya matahari diubah langsung menjadi **energi listrik**. Pada **PLTB (turbin angin)**, energi gerak angin memutar bilah kincir dan generator menjadi **energi listrik**.'
      },
      {
        title: 'Memilih energi alternatif sesuai potensi desa',
        problem: 'Desa Mekarsari berada di daerah pegunungan yang dialiri sungai berarus deras dan banyak warganya memelihara sapi perah. Sumber energi alternatif apa yang paling sesuai dikembangkan di desa itu?',
        solution: 'Aliran sungai berarus deras cocok untuk pembangkit listrik tenaga **mikrohidro** sebagai sumber listrik ramah lingkungan, sedangkan kotoran sapi perah dapat diolah menjadi **biogas** untuk bahan bakar memasak warga.'
      }
    ],
    misconceptions: [
      'Menganggap penggunaan listrik di rumah tidak memengaruhi lingkungan karena tidak mengeluarkan asap di rumah. Di banyak daerah, listrik masih dibangkitkan oleh PLTU batu bara yang menghasilkan emisi karbon dioksida.',
      'Menganggap pengisi daya ponsel yang tetap tertancap tanpa ponsel tidak memakan listrik sama sekali. Pengisi daya tersebut tetap menyerap arus kecil dan berisiko cepat panas.',
      'Menganggap semua jenis energi terbarukan cocok dibangun di sembarang tempat. Pemilihan pembangkit harus menyesuaikan potensi alam setempat, seperti angin kencang untuk PLTB atau aliran air deras untuk PLTA.'
    ],
    tutorTip: 'Untuk soal energi terbarukan, perhatikan tiga hal: potensi alam di lokasi yang disebut (matahari, angin, air, gunung api, atau limbah ternak), perubahan energinya, dan dampaknya dalam menekan gas rumah kaca.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sumber energi berikut yang tergolong bahan bakar fosil dan persediaannya akan habis jika terus dipakai adalah...',
      options: ['cahaya matahari', 'aliran air sungai', 'batu bara', 'panas bumi'],
      answer: 'C',
      hint: 'Sumber energi ini terbentuk dari sisa tumbuhan purba yang tertimbun jutaan tahun.',
      solution: '**Batu bara** merupakan bahan bakar fosil yang tidak dapat diperbarui dalam waktu singkat, berbeda dengan matahari, air, dan panas bumi yang termasuk energi terbarukan. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Panel surya yang dipasang di atap rumah bekerja dengan mengubah...',
      options: [
        'energi cahaya matahari menjadi energi listrik',
        'energi panas bumi menjadi energi gerak',
        'energi angin menjadi energi kimia',
        'energi listrik menjadi energi cahaya'
      ],
      answer: 'A',
      hint: 'Panel surya menerima sinar matahari pada siang hari untuk menyalakan alat rumah tangga.',
      solution: 'Sel surya pada panel surya menangkap sinar matahari dan mengubah **energi cahaya matahari langsung menjadi energi listrik**. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bahan bakar gas ramah lingkungan yang dihasilkan dari fermentasi kotoran ternak dan sampah organik di dalam tangki tertutup disebut...',
      options: ['bensin', 'solar', 'avtur', 'biogas'],
      answer: 'D',
      hint: 'Kata "bio" merujuk pada sumber dari makhluk hidup atau bahan organik.',
      solution: '**Biogas** diperoleh dengan menguraikan kotoran ternak atau sisa organik oleh mikroorganisme dalam tangki kedap udara sehingga menghasilkan gas metana untuk memasak. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Kebiasaan di sekolah yang paling efektif untuk menghemat energi listrik adalah...',
      options: [
        'menyalakan semua lampu kelas meskipun cahaya matahari sangat terang',
        'mematikan lampu, kipas angin, dan proyektor segera setelah kelas selesai digunakan',
        'membuka pintu ruangan saat pendingin udara (AC) menyala',
        'membiarkan komputer menyala terus sepanjang malam'
      ],
      answer: 'B',
      hint: 'Pilih tindakan yang mencegah alat listrik bekerja tanpa keperluan.',
      solution: '**Mematikan lampu, kipas, dan proyektor saat tidak dipakai** mencegah pemborosan listrik secara langsung. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Indonesia memiliki potensi besar pembangkit listrik tenaga panas bumi (PLTP) karena wilayah Indonesia...',
      options: [
        'memiliki banyak gunung api aktif',
        'berada di daerah beriklim dingin',
        'tidak memiliki hutan hujan tropis',
        'hanya terdiri atas padang pasir luas'
      ],
      answer: 'A',
      hint: 'Uap panas berasal dari batuan panas di bawah permukaan bumi.',
      solution: 'Banyaknya **gunung api aktif** di Indonesia menghasilkan kantong panas dan uap alam di dalam kerak bumi yang dapat memutar turbin PLTP. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah kipas angin berdaya 50 watt dinyalakan selama 4 jam untuk mendinginkan ruang belajar. Energi listrik yang digunakan kipas angin tersebut adalah...',
      options: ['54 Wh', '12,5 Wh', '200 Wh', '2.000 Wh'],
      answer: 'C',
      hint: 'Kalikan daya listrik (watt) dengan lama pemakaian (jam).',
      solution: 'Energi = daya × waktu = $50\\ \\text{watt} \\times 4\\ \\text{jam} = \\mathbf{200\\ \\text{Wh}}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Mengganti lampu pijar 40 watt dengan lampu LED 10 watt yang sama terangnya termasuk upaya mitigasi perubahan iklim karena...',
      options: [
        'lampu LED menghasilkan lebih banyak karbon dioksida',
        'lampu LED menyerap panas dari luar angkasa',
        'lampu LED mengubah seluruh listrik menjadi panas ruangan',
        'pemakaian listrik berkurang sehingga emisi gas rumah kaca dari pembangkit fosil ikut menurun'
      ],
      answer: 'D',
      hint: 'Sebagian besar pembangkit listrik masih memakai batu bara.',
      solution: 'Dengan memakai lampu LED, kebutuhan listrik berkurang drastis sehingga pembakaran batu bara di pembangkit listrik dan **emisi gas rumah kaca ikut berkurang**. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pada pembangkit listrik tenaga air (PLTA), air bendungan dialirkan deras melalui pipa menuju turbin dan generator. Urutan perubahan bentuk energi yang terjadi adalah...',
      options: [
        'energi kimia → energi panas → energi cahaya',
        'energi gerak air → energi gerak turbin → energi listrik',
        'energi cahaya → energi listrik → energi gerak',
        'energi listrik → energi bunyi → energi gerak'
      ],
      answer: 'B',
      hint: 'Aliran air mendorong sudu turbin hingga berputar dan memutar generator.',
      solution: 'Aliran air memiliki **energi gerak** yang memutar turbin dan generator, sehingga generator menghasilkan **energi listrik**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Selain membuat cadangan minyak dan batu bara cepat habis, penggunaan bahan bakar fosil secara berlebihan berdampak buruk bagi bumi karena...',
      options: [
        'melepaskan gas rumah kaca yang memicu pemanasan global dan perubahan iklim',
        'membuat lapisan ozon menebal terlalu cepat',
        'mengubah air laut menjadi air tawar secara tiba-tiba',
        'menghilangkan gaya gravitasi bumi di atmosfer'
      ],
      answer: 'A',
      hint: 'Pembakaran fosil menghasilkan gas karbon dioksida di atmosfer.',
      solution: 'Pembakaran bahan bakar fosil menghasilkan banyak **karbon dioksida (gas rumah kaca)** yang menahan panas di atmosfer sehingga memicu **pemanasan global dan perubahan iklim**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sinta tinggal hanya 500 meter dari sekolah. Ia memilih berjalan kaki atau bersepeda bersama teman daripada diantar mobil setiap hari. Manfaat pilihan Sinta terhadap energi dan lingkungan adalah...',
      options: [
        'memboroskan bahan bakar minyak dan menambah kemacetan',
        'mengurangi kebugaran tubuh dan menambah polusi asap',
        'menghemat bahan bakar minyak sekaligus mengurangi polusi udara dan emisi karbon',
        'meningkatkan kebutuhan listrik dari pembangkit tenaga angin'
      ],
      answer: 'C',
      hint: 'Kendaraan bermotor memakai bensin atau solar yang menghasilkan gas buang.',
      solution: 'Berjalan kaki atau bersepeda untuk jarak dekat **menghemat bahan bakar fosil** dan **mengurangi emisi gas buang** kendaraan bermotor. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Di sebuah ruang kelas terdapat 5 buah lampu masing-masing berdaya 20 watt. Biasanya semua lampu menyala 6 jam per hari. Setelah jendela dibuka agar cahaya matahari masuk, lampu cukup dinyalakan 2 jam per hari. Energi listrik yang berhasil dihemat setiap hari adalah...',
      options: ['100 Wh', '400 Wh', '600 Wh', '200 Wh'],
      answer: 'B',
      hint: 'Hitung dulu daya total 5 lampu, lalu kalikan dengan selisih jam menyala (6 − 2 jam).',
      solution: 'Total daya 5 lampu = $5 \\times 20 = 100\\ \\text{watt}$. Lama waktu yang dihemat = $6 - 2 = 4\\ \\text{jam}$. Energi yang dihemat = $100 \\times 4 = \\mathbf{400\\ \\text{Wh}}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu daerah pesisir pantai memiliki angin laut yang bertiup kencang sepanjang tahun dan sinar matahari yang terik, tetapi tidak memiliki sungai berarus deras maupun gunung api. Kombinasi pembangkit energi terbarukan yang paling cocok dikembangkan di wilayah tersebut adalah...',
      options: [
        'PLTA dan PLTP panas bumi',
        'PLTU batu bara dan PLTP panas bumi',
        'PLTA dan pembangkit mikrohidro',
        'PLTB tenaga angin dan PLTS panel surya'
      ],
      answer: 'D',
      hint: 'Sesuaikan pilihan pembangkit dengan kondisi alam angin kencang dan matahari terik.',
      solution: 'Angin pesisir yang kencang sangat mendukung **PLTB (tenaga bayu/angin)** dan sinar matahari terik cocok untuk **PLTS (panel surya)**, sedangkan PLTA dan PLTP tidak sesuai karena tidak ada sungai deras maupun gunung api. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah desa peternak sapi mengolah kotoran sapi menjadi biogas sebagai pengganti kayu bakar dan minyak tanah. Alasan program ini memberi manfaat ganda bagi mitigasi perubahan iklim adalah...',
      options: [
        'mencegah pelepasan gas metana dari tumpukan kotoran sekaligus mengurangi penebangan pohon dan pemakaian bahan bakar fosil',
        'menghilangkan seluruh oksigen di kandang agar sapi tumbuh lebih cepat',
        'mengubah kotoran sapi menjadi batu bara dan minyak bumi dalam satu hari',
        'membuat udara desa lebih panas agar tanaman cepat kering'
      ],
      answer: 'A',
      hint: 'Pikirkan dampak limbah kotoran yang dibiarkan menumpuk dan dampak bahan bakar yang digantikan.',
      solution: 'Mengolah kotoran ternak menjadi biogas **menangkap gas metana** (gas rumah kaca kuat) agar tidak lepas bebas ke atmosfer, sekaligus **mengurangi pemakaian minyak tanah dan penebangan pohon** untuk kayu bakar. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pemakaian listrik rumah keluarga Pak Amir pada bulan Januari tercatat 300 kWh. Setelah menerapkan kebiasaan hemat energi dan memakai lampu LED, pemakaian listrik bulan Februari turun menjadi 240 kWh. Persentase penghematan energi listrik yang berhasil dicapai adalah...',
      options: ['15%', '25%', '20%', '60%'],
      answer: 'C',
      hint: 'Hitung selisih pemakaian, lalu bandingkan dengan pemakaian awal bulan Januari.',
      solution: 'Penghematan = $300 - 240 = 60\\ \\text{kWh}$.\nPersentase penghematan = $\\dfrac{60}{300} \\times 100\\% = \\dfrac{1}{5} \\times 100\\% = \\mathbf{20\\%}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah sekolah memasang panel surya (PLTS) di atap gedung, lalu melengkapinya dengan baterai penyimpan energi berkapasitas besar. Fungsi utama baterai pada sistem PLTS tersebut adalah...',
      options: [
        'memperbesar intensitas sinar matahari yang jatuh ke atap sekolah',
        'menyimpan energi listrik yang dihasilkan pada siang hari agar tetap dapat dipakai saat malam hari atau cuaca mendung',
        'mengubah energi listrik kembali menjadi bahan bakar minyak',
        'menarik angin agar panel surya tetap dingin sepanjang hari'
      ],
      answer: 'B',
      hint: 'Matahari tidak bersinar pada malam hari.',
      solution: 'Panel surya hanya menghasilkan listrik saat ada cahaya matahari. **Baterai menyimpan energi listrik** berlebih pada siang hari sehingga sekolah tetap memiliki pasokan listrik pada malam hari atau saat langit mendung. Jawaban: **B**.'
    })
  ]
});
