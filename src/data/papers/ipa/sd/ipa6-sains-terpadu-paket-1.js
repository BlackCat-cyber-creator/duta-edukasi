/**
 * Paket Soal Terstruktur: Latihan IPA SD Kelas 6: Sains Terpadu & Tata Surya
 * 20 soal: Bagian A (15 Pilihan Ganda A–D @ 1 poin) + Bagian B (5 Isian Singkat @ 1 poin); total 20 poin.
 */
const OK1 = [{ code: 'A1', text: 'Konsep dan jawaban IPA tepat sesuai pembahasan.' }];

export default {
  id: 'ipa6-sains-terpadu-p1',
  slug: 'ipa6-sains-terpadu-paket-1',
  subject: 'ipa',
  grade: 6,
  track: 'kurikulum-merdeka',
  accessTier: 'free',
  topic: 'IPAS / IPA SD Kelas 6: sistem gerak dan adaptasi makhluk hidup, listrik dan magnet, energi terbarukan, serta tata surya',
  relatedChapterIds: [
    'ipa6-bab1-rangka-dan-mekanika-gerak-tubuh',
    'ipa6-bab2-penghematan-dan-energi-alternatif',
    'ipa6-bab3-sistem-tata-surya',
    'ipa6-bab4-rotasi-revolusi-bumi-dan-gerhana'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'Latihan Kurikulum',
  title: 'Latihan IPA SD Kelas 6: Sains Terpadu & Tata Surya',
  totalMarks: 20,
  instructions:
    'Paket ini berisi 20 soal IPAS/IPA Kelas 6 Kurikulum Merdeka (15 pilihan ganda dan 5 isian singkat, masing-masing bernilai 1 poin; total 20 poin).',
  source: {
    org: 'Tim Akademik Duta e-dukasi',
    file: 'original-curated-batch-10',
    license: 'Hak cipta materi kurasi asli Duta e-dukasi'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Pilihan Ganda (15 Soal)',
      marks: 15,
      stem: 'Pilihlah satu jawaban yang paling tepat (masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt: 'Sendi yang memungkinkan gerakan ke segala arah, seperti antara tulang lengan atas dan gelang bahu, disebut ....\n\nA. sendi engsel\nB. sendi peluru\nC. sendi putar\nD. sendi pelana',
          answer: 'B. sendi peluru',
          principle: 'Sendi peluru memiliki ujung tulang berbentuk bola yang masuk ke mangkuk sendi sehingga bebas bergerak ke segala arah.',
          solution: 'Hubungan antara tulang lengan atas dan tulang belikat (gelang bahu) merupakan sendi peluru (opsi B).',
          rubric: OK1
        },
        {
          label: '2',
          marks: 1,
          prompt: 'Kelainan tulang belakang yang melengkung terlalu jauh ke arah samping membentuk huruf S atau C disebut ....\n\nA. kifosis\nB. lordosis\nC. skoliosis\nD. osteoporosis',
          answer: 'C. skoliosis',
          principle: 'Kifosis membungkuk ke belakang, lordosis ke depan, dan skoliosis menyamping.',
          solution: 'Lengkungan tulang belakang ke samping disebut skoliosis (opsi C).',
          rubric: OK1
        },
        {
          label: '3',
          marks: 1,
          prompt: 'Tumbuhan kaktus memiliki daun berbentuk duri dan batang tebal berdaging yang berfungsi utama untuk ....\n\nA. mempercepat penguapan dan menyimpan makanan\nB. mengurangi penguapan air dan menyimpan cadangan air\nC. menarik serangga penyerbuk\nD. mengapung di permukaan air',
          answer: 'B. mengurangi penguapan air dan menyimpan cadangan air',
          principle: 'Adaptasi xerofit di lingkungan kering menekan transpirasi sekaligus menyimpan air.',
          solution: 'Daun kecil/duri memperkecil penguapan, sedangkan batang tebal (sukulen) menyimpan cadangan air (opsi B).',
          rubric: OK1
        },
        {
          label: '4',
          marks: 1,
          prompt: 'Kelelawar mampu terbang dan berburu mangsa di kegelapan malam menggunakan sistem pemantulan gelombang bunyi berfrekuensi tinggi yang disebut ....\n\nA. mimikri\nB. ekolokasi\nC. autotomi\nD. hibernasi',
          answer: 'B. ekolokasi',
          principle: 'Ekolokasi memancarkan bunyi ultrasonik lalu mendeteksi gema pantulan dari benda/mangsa.',
          solution: 'Kemampuan navigasi dengan pantulan ultrasonik disebut ekolokasi (opsi B).',
          rubric: OK1
        },
        {
          label: '5',
          marks: 1,
          prompt: 'Keuntungan utama rangkaian listrik paralel dibandingkan rangkaian seri untuk instalasi lampu di rumah adalah ....\n\nA. membutuhkan kabel yang lebih sedikit\nB. jika satu lampu padam, lampu lainnya tetap menyala\nC. nyala lampu makin redup ketika ditambah cabang\nD. biaya pemasangan paling murah',
          answer: 'B. jika satu lampu padam, lampu lainnya tetap menyala',
          principle: 'Setiap cabang pada rangkaian paralel menerima tegangan sumber yang sama secara independen.',
          solution: 'Pada rangkaian paralel, tiap lampu memiliki jalur arus sendiri sehingga gangguan satu lampu tidak memadamkan lampu lain (opsi B).',
          rubric: OK1
        },
        {
          label: '6',
          marks: 1,
          prompt: 'Cara membuat magnet dengan melilitkan kawat tembaga berisolasi pada paku besi lalu menghubungkannya ke baterai disebut ....\n\nA. induksi\nB. menggosok\nC. elektromagnetik\nD. pemanasan',
          answer: 'C. elektromagnetik',
          principle: 'Arus listrik searah pada kumparan menghasilkan medan magnet (elektromagnet).',
          solution: 'Pembuatan magnet menggunakan arus listrik pada lilitan kawat disebut cara elektromagnetik (opsi C).',
          rubric: OK1
        },
        {
          label: '7',
          marks: 1,
          prompt: 'Contoh pemanfaatan energi terbarukan yang mengubah energi cahaya matahari langsung menjadi energi listrik adalah ....\n\nA. turbin air (PLTA)\nB. panel surya (PLTS)\nC. pembangkit panas bumi (PLTP)\nD. mesin diesel',
          answer: 'B. panel surya (PLTS)',
          principle: 'Sel fotovoltaik pada panel surya mengubah energi radiasi matahari menjadi listrik.',
          solution: 'Panel surya (PLTS) mengonversi cahaya matahari langsung menjadi energi listrik (opsi B).',
          rubric: OK1
        },
        {
          label: '8',
          marks: 1,
          prompt: 'Bahan bakar berikut yang termasuk sumber energi fosil tak terbarukan adalah ....\n\nA. biodiesel\nB. biogas\nC. batu bara\nD. energi pasang surut',
          answer: 'C. batu bara',
          principle: 'Batu bara, minyak bumi, dan gas alam terbentuk jutaan tahun dari fosil sehingga tidak terbarukan.',
          solution: 'Batu bara merupakan energi fosil tak terbarukan (opsi C).',
          rubric: OK1
        },
        {
          label: '9',
          marks: 1,
          prompt: 'Planet dalam tata surya yang memiliki ukuran paling besar serta dijuluki planet raksasa gas adalah ....\n\nA. Saturnus\nB. Jupiter\nC. Uranus\nD. Neptunus',
          answer: 'B. Jupiter',
          principle: 'Urutan ukuran planet dari terbesar: Jupiter, Saturnus, Uranus, Neptunus, Bumi, Venus, Mars, Merkurius.',
          solution: 'Jupiter merupakan planet terbesar di Tata Surya (opsi B).',
          rubric: OK1
        },
        {
          label: '10',
          marks: 1,
          prompt: 'Sabuk asteroid utama di Tata Surya terletak di antara orbit dua planet, yaitu ....\n\nA. Bumi dan Mars\nB. Mars dan Jupiter\nC. Jupiter dan Saturnus\nD. Venus dan Bumi',
          answer: 'B. Mars dan Jupiter',
          principle: 'Sabuk asteroid memisahkan planet dalam (terestrial) dan planet luar (Jovian).',
          solution: 'Sabuk asteroid terletak di antara orbit Mars dan Jupiter (opsi B).',
          rubric: OK1
        },
        {
          label: '11',
          marks: 1,
          prompt: 'Peristiwa gerak semu harian Matahari dari timur ke barat serta pergantian siang dan malam disebabkan oleh ....\n\nA. revolusi Bumi mengelilingi Matahari\nB. rotasi Bumi pada porosnya\nC. revolusi Bulan mengelilingi Bumi\nD. kemiringan orbit Bulan',
          answer: 'B. rotasi Bumi pada porosnya',
          principle: 'Bumi berputar pada porosnya dari barat ke timur selama sekitar $24$ jam.',
          solution: 'Rotasi Bumi menyebabkan pergantian siang-malam dan gerak semu harian benda langit (opsi B).',
          rubric: OK1
        },
        {
          label: '12',
          marks: 1,
          prompt: 'Gerhana Matahari total terjadi apabila ....\n\nA. Bumi berada di antara Matahari dan Bulan\nB. Bulan berada pada daerah umbra Bumi\nC. posisi Matahari–Bulan–Bumi segaris dan bayangan umbra Bulan jatuh di permukaan Bumi\nD. Bumi masuk ke penumbra Matahari',
          answer: 'C. posisi Matahari–Bulan–Bumi segaris dan bayangan umbra Bulan jatuh di permukaan Bumi',
          principle: 'Gerhana Matahari terjadi pada fase bulan baru saat Bulan menghalangi cahaya Matahari ke Bumi.',
          solution: 'Saat Matahari–Bulan–Bumi segaris dan wilayah Bumi berada di umbra Bulan, terjadi gerhana Matahari total (opsi C).',
          rubric: OK1
        },
        {
          label: '13',
          marks: 1,
          prompt: 'Dasar perhitungan kalender Hijriah (Komariah) adalah ....\n\nA. rotasi Bumi\nB. revolusi Bumi mengelilingi Matahari\nC. revolusi Bulan mengelilingi Bumi\nD. rotasi Matahari',
          answer: 'C. revolusi Bulan mengelilingi Bumi',
          principle: 'Kalender Komariah berpatokan pada siklus fase Bulan (sekitar $29{,}5$ hari per bulan).',
          solution: 'Kalender Hijriah disusun berdasarkan periode revolusi Bulan mengelilingi Bumi (opsi C).',
          rubric: OK1
        },
        {
          label: '14',
          marks: 1,
          prompt: 'Tindakan menghemat energi listrik yang paling tepat dilakukan di lingkungan sekolah adalah ....\n\nA. menyalakan seluruh lampu kelas sepanjang hari agar terang\nB. membuka tirai jendela pada siang hari dan mematikan lampu serta AC saat kelas kosong\nC. membiarkan proyektor tetap menyala selama jam istirahat\nD. menggunakan peralatan berdaya besar tanpa pengaturan',
          answer: 'B. membuka tirai jendela pada siang hari dan mematikan lampu serta AC saat kelas kosong',
          principle: 'Memaksimalkan pencahayaan alami siang hari dan memutus beban listrik tak terpakai.',
          solution: 'Opsi B memanfaatkan cahaya alami serta mematikan perangkat saat tidak digunakan.',
          rubric: OK1
        },
        {
          label: '15',
          marks: 1,
          prompt: 'Benda angkasa kecil yang tersusun dari es, debu, dan gas serta membentuk ekor bercahaya menjauhi Matahari saat mendekati Matahari adalah ....\n\nA. meteorit\nB. asteroid\nC. komet\nD. satelit',
          answer: 'C. komet',
          principle: 'Sublimasi es komet dan dorongan angin surya membentuk koma dan ekor komet.',
          solution: 'Ciri khas ekor yang selalu menjauhi Matahari dimiliki oleh komet (opsi C).',
          rubric: OK1
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Isian Singkat (5 Soal)',
      marks: 5,
      stem: 'Tuliskan jawaban singkat yang tepat untuk setiap pertanyaan berikut (masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '16',
          marks: 1,
          prompt: 'Planet yang paling dekat dengan Matahari dan memiliki kala revolusi terpendek adalah ....',
          answer: 'Merkurius',
          principle: 'Urutan planet dari Matahari dimulai dari Merkurius.',
          solution: 'Merkurius berjarak paling dekat dengan Matahari (kala revolusi sekitar $88$ hari Bumi).',
          rubric: OK1
        },
        {
          label: '17',
          marks: 1,
          prompt: 'Kemampuan cicak memutuskan ekornya saat terancam predator disebut ....',
          answer: 'Autotomi',
          principle: 'Adaptasi tingkah laku untuk mengalihkan perhatian pemangsa.',
          solution: 'Cicak melakukan autotomi dengan memutuskan ekornya yang masih bergerak.',
          rubric: OK1
        },
        {
          label: '18',
          marks: 1,
          prompt: 'Jika kutub utara magnet didekatkan dengan kutub utara magnet lain, gaya yang timbul adalah saling ....',
          answer: 'Tolak-menolak',
          principle: 'Kutub magnet senama tolak-menolak, kutub tidak senama tarik-menarik.',
          solution: 'Kutub utara berhadapan dengan kutub utara menghasilkan gaya tolak-menolak.',
          rubric: OK1
        },
        {
          label: '19',
          marks: 1,
          prompt: 'Gerhana Bulan terjadi pada saat fase Bulan ....',
          answer: 'Purnama',
          principle: 'Saat gerhana Bulan, posisi Matahari–Bumi–Bulan segaris sehingga sisi Bulan yang menghadap Bumi tersinari penuh sebelum masuk bayangan Bumi.',
          solution: 'Gerhana Bulan selalu berlangsung pada fase Bulan purnama.',
          rubric: OK1
        },
        {
          label: '20',
          marks: 1,
          prompt: 'Alat yang berfungsi memutus dan menyambungkan arus listrik pada sebuah rangkaian sederhana adalah ....',
          answer: 'Sakelar',
          principle: 'Sakelar mengontrol terbuka atau tertutupnya rangkaian listrik.',
          solution: 'Sakelar memutus (posisi off) dan menyambungkan (posisi on) aliran arus listrik.',
          rubric: OK1
        }
      ]
    }
  ]
};
