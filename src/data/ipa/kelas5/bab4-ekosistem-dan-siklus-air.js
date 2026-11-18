import { bab, soal } from '../author.js';

const KEBUN = {
  type: 'food-web',
  props: {
    title: 'Jaring-Jaring Makanan di Kebun',
    caption: '*Arah panah: dari yang dimakan ke yang memakan',
    nodes: [
      { id: 'sawi', label: 'Sawi', x: 0.50, y: 1.00 },
      { id: 'ulat', label: 'Ulat', x: 0.26, y: 0.66 },
      { id: 'siput', label: 'Siput', x: 0.74, y: 0.66 },
      { id: 'ayam', label: 'Ayam', x: 0.50, y: 0.32 },
      { id: 'katak', label: 'Katak', x: 0.84, y: 0.32 },
      { id: 'elang', label: 'Elang', x: 0.62, y: 0.00 }
    ],
    edges: [
      ['sawi', 'ulat'],
      ['sawi', 'siput'],
      ['sawi', 'ayam'],
      ['ulat', 'ayam'],
      ['siput', 'ayam'],
      ['siput', 'katak'],
      ['ayam', 'elang'],
      ['katak', 'elang']
    ]
  }
};

export default bab({
  grade: 5,
  number: 4,
  slug: 'ekosistem-dan-siklus-air',
  title: 'Ekosistem, Aliran Energi, dan Siklus Air',
  element: 'Makhluk hidup, ekosistem, dan siklus air: aliran energi serta ketersediaan air bersih',
  summary: {
    overview: 'Di kebun sekolah, kolam, atau sawah, makhluk hidup selalu berinteraksi satu sama lain serta bergantung pada air, tanah, udara, dan cahaya matahari. Bab ini membahas komponen biotik dan abiotik ekosistem, rantai makanan dan jaring-jaring makanan, keseimbangan ekosistem, serta proses siklus air dan perannya dalam menjaga ketersediaan air bersih bagi kehidupan.',
    coreConcepts: [
      'Komponen Biotik dan Abiotik Ekosistem: Ekosistem adalah kesatuan interaksi antara makhluk hidup dan lingkungan tak hidupnya di suatu tempat. Komponen biotik mencakup seluruh makhluk hidup seperti tumbuhan, hewan, jamur, dan bakteri. Komponen abiotik mencakup benda tak hidup seperti cahaya matahari, air, udara, tanah, batu, dan suhu. Tumbuhan hijau membutuhkan cahaya matahari, air, dan zat hara tanah untuk membuat makanan, sedangkan keberadaan tumbuhan menjaga kelembapan tanah dan kesegaran udara.',
      'Rantai Makanan dan Jaring-Jaring Makanan: Rantai makanan adalah peristiwa makan dan dimakan dalam urutan tertentu; panahnya menunjukkan arah aliran energi dari yang dimakan ke yang memakan. Tumbuhan hijau berperan sebagai produsen (membuat makanan lewat fotosintesis). Hewan pemakan produsen disebut konsumen I, pemakan konsumen I disebut konsumen II, hingga konsumen puncak. Sisa makhluk hidup yang mati diuraikan oleh pengurai (dekomposer) seperti bakteri dan jamur menjadi zat hara tanah. Gabungan beberapa rantai makanan yang saling berhubungan disebut jaring-jaring makanan.',
      'Keseimbangan Ekosistem: Ekosistem dikatakan seimbang apabila jumlah produsen jauh lebih banyak daripada konsumen I, dan jumlah konsumen tingkat atas lebih sedikit daripada tingkat di bawahnya. Jika satu komponen berkurang drastis atau punah—misalnya ular sawah diburu habis atau katak hilang karena pestisida—populasi mangsanya akan melonjak tidak terkendali sementara pemangsanya kekurangan makanan. Pelestarian hutan, tidak membuang limbah sembarangan, dan menghindari perburuan liar membantu menjaga keseimbangan ekosistem.',
      'Tahapan Siklus Air: Air di bumi terus berputar melalui siklus air yang digerakkan oleh panas matahari dan gravitasi bumi. Pertama, evaporasi (penguapan air dari laut, sungai, dan danau) bersama transpirasi (penguapan air dari tumbuhan) menaikkan uap air ke langit. Kedua, kondensasi (pengembunan uap air di udara dingin membentuk awan). Ketiga, presipitasi (butiran air di awan jatuh sebagai hujan). Keempat, infiltrasi (peresapan air hujan ke dalam tanah menjadi air tanah), sementara sisanya mengalir di permukaan menuju sungai dan kembali ke laut.',
      'Dampak Siklus Air bagi Ketersediaan Air Bersih: Tahap infiltrasi sangat penting untuk mengisi kembali cadangan air tanah yang menjadi sumber air sumur dan mata air saat musim kemarau. Akar pepohonan di hutan memperlambat aliran air hujan sehingga air lebih banyak meresap ke tanah dan mencegah banjir maupun tanah longsor. Penebangan hutan, penutupan halaman dengan beton tanpa resapan, dan pencemaran sungai menurunkan ketersediaan air bersih. Kita dapat menjaganya dengan menghemat air, membuat lubang biopori, menanam pohon, dan tidak membuang limbah ke sungai.'
    ],
    keyFormulas: [
      { label: 'Alur energi rantai makanan', formula: '\\text{Produsen} \\to \\text{Konsumen I} \\to \\text{Konsumen II} \\to \\text{Konsumen Puncak} \\to \\text{Pengurai}' },
      { label: 'Tahapan utama siklus air', formula: '\\text{Evaporasi} \\to \\text{Kondensasi (Awan)} \\to \\text{Presipitasi (Hujan)} \\to \\text{Infiltrasi (Air Tanah)}' }
    ],
    workedExamples: [
      {
        title: 'Memprediksi dampak perubahan populasi',
        problem: 'Pada rantai makanan rumput → belalang → katak → ular, banyak katak ditangkap sehingga jumlahnya menurun tajam. Apa dampak langsung terhadap populasi belalang dan ular?',
        solution: 'Karena pemangsa belalang (katak) berkurang, **populasi belalang meningkat**. Sebaliknya, karena sumber makanan ular berkurang, **populasi ular menurun**.'
      },
      {
        title: 'Peran pengurai bagi produsen',
        problem: 'Daun-daun kering yang gugur di lantai hutan lama-kelamaan hancur dan tanah di sekitarnya menjadi subur bagi pohon muda. Organisme apakah yang berperan menguraikan daun tersebut dan apa manfaatnya bagi produsen?',
        solution: 'Organisme yang berperan adalah **pengurai (dekomposer)** seperti bakteri dan jamur. Pengurai mengubah sisa daun menjadi **zat hara (mineral)** tanah yang kembali diserap akar tumbuhan (produsen) agar tumbuh subur.'
      },
      {
        title: 'Dampak betonisasi terhadap siklus air',
        problem: 'Sebuah permukiman menutup hampir seluruh halaman tanah dengan semen tanpa lubang resapan. Jelaskan pengaruhnya terhadap tahap infiltrasi dan sumur warga saat kemarau!',
        solution: 'Semen menghalangi air hujan meresap ke tanah sehingga **infiltrasi menurun tajam**. Air hujan lebih banyak mengalir di permukaan (rawan genangan/banjir saat hujan), dan cadangan **air tanah berkurang** sehingga sumur warga mudah kering saat kemarau.'
      }
    ],
    misconceptions: [
      'Menggambar arah panah rantai makanan dari pemakan ke yang dimakan. Panah berarti "dimakan oleh" atau aliran energi, sehingga selalu mengarah dari yang dimakan menuju pemakannya (misal sawi → ulat).',
      'Mengira siklus air hanya berupa penguapan di laut dan hujan saja. Peresapan air ke tanah (infiltrasi) dan penguapan oleh tumbuhan (transpirasi) merupakan bagian penting yang menjaga ketersediaan air tanah.',
      'Menganggap bakteri dan jamur pengurai selalu merugikan. Tanpa pengurai, bangkai dan daun gugur menumpuk dan tanah akan kekurangan zat hara untuk tumbuhan.'
    ],
    tutorTip: 'Hafalkan empat tahap utama siklus air secara urut dengan singkatan "E-K-P-I": Evaporasi (menguap), Kondensasi (mengembun jadi awan), Presipitasi (turun hujan), dan Infiltrasi (meresap ke tanah).'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Komponen abiotik dalam ekosistem kebun yang sangat dibutuhkan tumbuhan hijau untuk membuat makanan sendiri (fotosintesis) adalah...',
      options: ['cacing tanah dan ulat', 'jamur dan bakteri', 'cahaya matahari dan air', 'burung dan serangga'],
      answer: 'C',
      hint: 'Abiotik berarti komponen tak hidup.',
      solution: '**Cahaya matahari dan air** adalah komponen tak hidup (abiotik) yang diperlukan tumbuhan untuk berfotosintesis. Cacing, ulat, jamur, bakteri, burung, dan serangga adalah komponen biotik. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Dalam suatu rantai makanan di sawah, tanaman padi berperan sebagai...',
      options: ['produsen', 'konsumen tingkat I', 'konsumen puncak', 'pengurai'],
      answer: 'A',
      hint: 'Tanaman padi mampu membuat makanan sendiri menggunakan cahaya matahari.',
      solution: 'Tumbuhan hijau seperti padi membuat makanannya sendiri melalui fotosintesis, sehingga berperan sebagai **produsen**. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Tahap pada siklus air ketika air di laut, sungai, dan danau menguap menjadi uap air akibat panas matahari disebut...',
      options: ['kondensasi', 'presipitasi', 'infiltrasi', 'evaporasi'],
      answer: 'D',
      hint: 'Berasal dari kata yang berarti penguapan.',
      solution: 'Penguapan air dari permukaan perairan akibat panas matahari disebut **evaporasi**. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bakteri dan jamur yang menghancurkan sisa daun gugur serta bangkai hewan sehingga kembali menjadi zat hara penyubur tanah berperan sebagai...',
      options: ['konsumen tingkat I', 'pengurai (dekomposer)', 'produsen', 'konsumen puncak'],
      answer: 'B',
      hint: 'Mereka menguraikan sisa makhluk hidup yang telah mati.',
      solution: 'Bakteri dan jamur yang memecah sisa makhluk hidup menjadi zat hara mineral disebut **pengurai (dekomposer)**. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Ketika uap air naik ke lapisan udara yang tinggi dan dingin, uap air tersebut berubah kembali menjadi titik-titik air halus membentuk awan. Proses ini disebut...',
      options: ['transpirasi', 'infiltrasi', 'kondensasi', 'limpasan'],
      answer: 'C',
      hint: 'Artinya pengembunan.',
      solution: 'Perubahan uap air menjadi titik-titik air penyusun awan disebut **kondensasi**. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Perhatikan jaring-jaring makanan di kebun pada gambar. Organisme yang dapat berperan sebagai konsumen tingkat I karena memakan sawi secara langsung adalah...',
      options: [
        'ulat dan katak saja',
        'ulat, siput, dan ayam',
        'katak dan elang',
        'ayam dan elang saja'
      ],
      answer: 'B',
      hint: 'Ikuti semua anak panah yang keluar langsung dari produsen (Sawi).',
      solution: 'Tanda panah dari produsen (**Sawi**) langsung menuju **Ulat**, **Siput**, dan **Ayam**, artinya ketiganya memakan sawi secara langsung dan berperan sebagai konsumen tingkat I (ayam juga menjadi konsumen II bila memakan ulat atau siput). Jawaban: **B**.',
      visual: KEBUN
    }),
    soal({
      level: 'Sedang',
      q: 'Pada sebuah ekosistem padang rumput terdapat rantai makanan: rumput → rusa → harimau. Jika harimau banyak diburu sehingga jumlahnya berkurang drastis, perubahan yang paling mungkin terjadi selanjutnya adalah...',
      options: [
        'populasi rusa meningkat sehingga rumput makin banyak dimakan',
        'populasi rusa ikut punah dan rumput berhenti tumbuh',
        'populasi rumput bertambah lebat karena rusa berkurang',
        'tidak ada perubahan karena rusa tidak bergantung pada harimau'
      ],
      answer: 'A',
      hint: 'Jika pemangsa rusa berkurang, bagaimana jumlah rusa?',
      solution: 'Harimau adalah pemangsa rusa. Jika harimau berkurang, **populasi rusa meningkat** sehingga lebih banyak rumput yang dimakan. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Tahap siklus air ketika air hujan jatuh ke daratan lalu meresap melalui pori-pori tanah menuju lapisan air tanah disebut...',
      options: ['evaporasi', 'transpirasi', 'kondensasi', 'infiltrasi'],
      answer: 'D',
      hint: 'Proses ini mengisi kembali sumur dan mata air warga.',
      solution: 'Proses meresapnya air hujan ke dalam tanah membentuk air tanah disebut **infiltrasi**. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Di lingkungan sekolah, halaman sering tergenang saat hujan deras karena air tidak mudah meresap ke tanah. Upaya paling tepat yang dapat dilakukan warga sekolah untuk memperlancar tahap infiltrasi siklus air adalah...',
      options: [
        'menutup seluruh halaman yang masih bertanah dengan semen',
        'mengalirkan seluruh air hujan bersama sampah ke selokan',
        'membuat lubang resapan biopori dan menanam pohon di sekitar halaman',
        'menutup semua selokan dengan plastik agar air menguap lebih lambat'
      ],
      answer: 'C',
      hint: 'Air hujan perlu jalur agar mudah masuk ke dalam tanah.',
      solution: '**Lubang resapan biopori dan penanaman pohon** membuka pori-pori tanah sehingga air hujan cepat meresap (infiltrasi) dan genangan berkurang. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Seorang petani menyemprot kebun buahnya dengan pestisida secara berlebihan. Selain membunuh ulat hama, racun itu ikut mematikan lebah penyerbuk dan burung pemakan serangga. Akibat buruk jangka panjang bagi kebun tersebut adalah...',
      options: [
        'tanaman buah berbuah lebih lebat tanpa bantuan serangga',
        'keseimbangan ekosistem kebun terganggu dan penyerbukan bunga menurun',
        'populasi burung pemangsa hama bertambah cepat',
        'kadar air tanah di kebun langsung meningkat drastis'
      ],
      answer: 'B',
      hint: 'Pikirkan fungsi lebah bagi bunga dan fungsi burung sebagai pengendali serangga.',
      solution: 'Matinya lebah menurunkan keberhasilan penyerbukan bunga menjadi buah, sedangkan hilangnya burung merusak pengendali alami hama sehingga **keseimbangan ekosistem terganggu**. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Perhatikan jaring-jaring makanan di kebun pada gambar. Apabila populasi katak menurun drastis karena banyak ditangkap, dampak yang paling masuk akal terjadi pada ekosistem kebun tersebut adalah...',
      options: [
        'populasi siput langsung habis dan sawi tumbuh tanpa gangguan',
        'populasi elang bertambah pesat karena makanannya bertambah',
        'populasi ulat langsung punah karena dimakan elang',
        'populasi siput cenderung meningkat sehingga daun sawi lebih banyak dimakan, dan elang lebih bergantung pada ayam'
      ],
      answer: 'D',
      hint: 'Perhatikan hewan apa yang dimakan katak dan hewan apa yang memakan katak.',
      solution: 'Katak memakan siput dan dimakan oleh elang. Jika katak berkurang drastis, pemangsa siput berkurang sehingga **siput meningkat** dan lebih banyak memakan sawi, sementara **elang** kehilangan katak sehingga lebih bergantung memangsa **ayam**. Jawaban: **D**.',
      visual: KEBUN
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah hutan di daerah perbukitan ditebang habis sehingga lahannya menjadi gundul tanpa pepohonan berakar kuat. Dampak paling tepat terhadap siklus air dan ketersediaan air bersih warga di kaki bukit adalah...',
      options: [
        'aliran permukaan meningkat memicu banjir saat hujan, dan mata air menyusut saat kemarau karena infiltrasi berkurang',
        'cadangan air tanah bertambah melimpah saat musim kemarau',
        'evaporasi berhenti sehingga awan hujan tidak pernah terbentuk lagi di langit',
        'air sungai menjadi jauh lebih jernih sepanjang tahun karena tidak ada daun gugur'
      ],
      answer: 'A',
      hint: 'Tanpa akar pohon penahan air, apakah air hujan sempat meresap ke tanah?',
      solution: 'Tanpa pepohonan dan akar penahan, air hujan langsung melimpas di permukaan membawa tanah (memicu **banjir dan erosi**) sementara air yang meresap (**infiltrasi**) sedikit, sehingga cadangan air tanah dan mata air menyusut saat kemarau. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dalam sebuah ekosistem kolam alami yang sehat dan seimbang, susunan perbandingan jumlah makhluk hidup dari yang paling banyak hingga paling sedikit yang paling wajar adalah...',
      options: [
        'ikan pemangsa paling banyak, lalu ikan kecil, dan tumbuhan air paling sedikit',
        'jumlah tumbuhan air, ikan kecil, dan burung bangau harus sama persis',
        'tumbuhan air paling banyak, diikuti ikan kecil pemakan tumbuhan, dan burung bangau paling sedikit',
        'burung bangau paling banyak agar kolam bebas dari ikan kecil'
      ],
      answer: 'C',
      hint: 'Produsen harus cukup banyak untuk menopang konsumen di atasnya.',
      solution: 'Pada ekosistem seimbang, **produsen (tumbuhan air) jumlahnya paling banyak**, disusul konsumen I (ikan kecil), lalu **konsumen puncak (bangau) paling sedikit** agar sumber makanan tidak cepat habis. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Siswa kelas 5 membuat percobaan model siklus air menggunakan wadah kaca tertutup berisi air hangat di bagian bawah, lalu meletakkan es batu di atas plastik penutup wadah. Setelah beberapa menit terbentuk titik-titik air di bagian bawah plastik yang kemudian menetes jatuh kembali ke wadah. Tetesan air yang jatuh dari plastik menggambarkan tahap...',
      options: [
        'infiltrasi ke dalam batuan tanah',
        'presipitasi atau turunnya air hujan',
        'evaporasi dari sungai menuju atmosfer',
        'transpirasi melalui pori-pori daun'
      ],
      answer: 'B',
      hint: 'Titik-titik air di bagian plastik yang dingin berperan seperti awan yang sudah berat oleh butiran air.',
      solution: 'Air hangat menguap (evaporasi), lalu mengembun di plastik dingin (kondensasi), dan ketika butiran air cukup berat lalu **menetes jatuh ke bawah**, peristiwa itu menirukan **presipitasi (hujan)**. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sungai di dekat permukiman warga tampak keruh, penuh sampah plastik, dan tercemar busa deterjen sehingga banyak ikan mati dan air tidak layak pakai. Tindakan terpadu yang paling efektif untuk memulihkan ekosistem sungai dan menjaga ketersediaan air bersih adalah...',
      options: [
        'menangkap semua ikan yang tersisa lalu menutup sungai dengan beton',
        'menyemprot permukaan sungai dengan pewangi agar bau hilang',
        'membuang sampah hanya pada malam hari agar tidak menyumbat di siang hari',
        'menghentikan pembuangan sampah serta limbah ke sungai, mengolah limbah rumah tangga, dan menanam vegetasi di tepi sungai'
      ],
      answer: 'D',
      hint: 'Atasi sumber pencemaran sekaligus pulihkan daya dukung tepian sungai.',
      solution: 'Pemulihan air bersih memerlukan pengendalian dari sumbernya: **menghentikan pembuangan sampah dan limbah langsung ke sungai, mengolah air limbah rumah tangga, serta menanam tanaman di bantaran sungai** untuk menahan erosi dan menjaga resapan. Jawaban: **D**.'
    })
  ]
});
