import { bab, dasar, sedang, tantangan } from '../author.js';

export default bab({
  grade: 10,
  number: 1,
  slug: 'keanekaragaman-hayati-dan-klasifikasi',
  title: 'Keanekaragaman Hayati dan Klasifikasi Makhluk Hidup',
  element: 'Pemahaman Biologi: tingkat keanekaragaman gen-jenis-ekosistem, tata nama binomial, kladogram, dan upaya pelestarian',
  summary: {
    overview: 'Keanekaragaman hayati (biodiversitas) adalah keragaman makhluk hidup pada tingkat gen, jenis, dan ekosistem. Bab ini membahas mengapa Indonesia disebut negara megabiodiversitas, cara ilmuwan mengelompokkan makhluk hidup dalam hierarki takson dan tiga domain, aturan tata nama binomial Linnaeus, pembacaan kunci determinasi serta kladogram berdasarkan ciri turunan bersama, hingga indeks kuantitatif keanekaragaman dan upaya pelestarian in situ maupun ex situ.',
    coreConcepts: [
      'Tiga Tingkat Keanekaragaman Hayati: Keanekaragaman gen adalah variasi sifat dalam satu spesies (varietas padi, warna bunga mawar). Keanekaragaman jenis adalah perbedaan antarspesies dalam satu komunitas (harimau, macan tutul, singa). Keanekaragaman ekosistem adalah ragam habitat, komunitas, dan proses ekologi (hutan hujan, mangrove, terumbu karang, savana).',
      'Megabiodiversitas Indonesia: Letak tropis, ribuan pulau, rentang iklim, serta pertemuan paparan Sunda dan Sahul menjadikan Indonesia kaya spesies dan endemisme. Wilayah fauna Asiatik, peralihan (Wallacea), dan Australis dipisahkan oleh Garis Wallace dan Garis Weber, sehingga flora-fauna tiap wilayah berbeda khas.',
      'Hierarki Takson dan Tiga Domain: Linnaeus menyusun takson bertingkat: Domain, Kingdom, Filum, Kelas, Ordo, Famili, Genus, Spesies. Takson makin ke bawah makin sempit dan makin mirip. Sistem tiga domain (Woese) membagi kehidupan menjadi Bacteria, Archaea, dan Eukarya berdasarkan struktur sel serta rRNA; dinding sel Bacteria memuat peptidoglikan sedangkan Archaea tidak.',
      'Tata Nama Binomial: Nama ilmiah terdiri atas dua kata Latin: nama genus (huruf awal kapital) dan epitet spesies (huruf kecil semua), dicetak miring atau digarisbawahi terpisah, misalnya Panthera tigris. Subspesies ditambah kata ketiga (trinomial), misalnya Panthera tigris sumatrae untuk harimau Sumatra.',
      'Kunci Determinasi dan Kladogram: Kunci determinasi dikotom berisi pasangan pernyataan berlawanan yang mengarahkan identifikasi sampai ke nama takson. Kladogram adalah diagram percabangan hubungan kekerabatan berdasarkan sinapomorfi (ciri turunan bersama); dua takson yang berbagi percabangan paling baru berkerabat paling dekat.',
      'Ancaman dan Pelestarian: Ancaman utama adalah hilangnya habitat, eksploitasi berlebih, spesies invasif, pencemaran, dan perubahan iklim. Pelestarian in situ dilakukan di habitat asli (taman nasional, cagar alam, suaka margasatwa), sedangkan ex situ di luar habitat asli (kebun binatang, kebun raya, bank gen, penangkaran). Status IUCN meliputi LC, NT, VU, EN, CR, EW, dan EX.'
    ],
    keyFormulas: [
      { label: 'Kelimpahan Relatif Spesies', formula: 'p_i = \\dfrac{n_i}{N} \\qquad \\text{Kerapatan} = \\dfrac{\\text{jumlah individu}}{\\text{luas area}}' },
      { label: 'Indeks Keanekaragaman Simpson', formula: 'D = 1 - \\sum_{i=1}^{S} \\left(\\dfrac{n_i}{N}\\right)^2' },
      { label: 'Indeks Shannon-Wiener', formula: "H' = -\\sum_{i=1}^{S} p_i \\ln p_i" },
      { label: 'Hierarki Takson Linnaeus', formula: '\\text{Domain} \\to \\text{Kingdom} \\to \\text{Filum} \\to \\text{Kelas} \\to \\text{Ordo} \\to \\text{Famili} \\to \\text{Genus} \\to \\text{Spesies}' }
    ],
    workedExamples: [
      {
        title: 'Membandingkan keanekaragaman dua komunitas dengan indeks Simpson',
        problem: 'Komunitas A berisi 4 spesies masing-masing 25 individu. Komunitas B berisi 4 spesies dengan jumlah 70, 10, 10, dan 10 individu. Komunitas manakah yang lebih beragam?',
        solution: 'Total individu keduanya N = 100. Komunitas A: Σp² = 4 × (0,25)² = 0,25 sehingga D = 1 − 0,25 = 0,75. Komunitas B: Σp² = (0,70)² + 3 × (0,10)² = 0,49 + 0,03 = 0,52 sehingga D = 1 − 0,52 = 0,48. Kekayaan spesies sama (4), tetapi kemerataan A lebih tinggi sehingga komunitas A lebih beragam (D lebih besar).'
      },
      {
        title: 'Menulis dan menafsirkan nama ilmiah',
        problem: 'Tulis nama ilmiah harimau Sumatra, dan jelaskan arti setiap katanya jika nama lengkapnya adalah Panthera tigris sumatrae.',
        solution: 'Panthera adalah genus (huruf awal kapital), tigris adalah epitet spesies (huruf kecil), dan sumatrae adalah epitet subspesies. Seluruh nama dicetak miring. Karena ada tiga kata, penamaannya trinomial. Harimau Sumatra dan harimau Benggala sama-sama spesies Panthera tigris tetapi subspesiesnya berbeda.'
      },
      {
        title: 'Menentukan kerabat terdekat dari kladogram ciri',
        problem: 'Lamprey (tanpa rahang), hiu (berahang), katak (berahang, bertungkai), kadal (berahang, bertungkai, beramnion), kucing (berahang, bertungkai, beramnion, berambut). Siapa kerabat terdekat kucing?',
        solution: 'Kucing berbagi ciri turunan bersama (sinapomorfi) berupa amnion hanya dengan kadal, sedangkan katak, hiu, dan lamprey tidak memiliki amnion. Percabangan yang memisahkan kucing dan kadal paling baru, sehingga kerabat terdekat kucing adalah kadal.'
      }
    ],
    misconceptions: [
      'Mengira keanekaragaman gen sama dengan keanekaragaman jenis. Keanekaragaman gen terjadi di dalam satu spesies yang sama (misal berbagai varietas mangga), bukan antarspesies.',
      'Menganggap spesies selalu berbeda genus jika namanya berbeda. Dua spesies dapat satu genus (Panthera tigris dan Panthera leo), yang berbeda hanya epitet spesiesnya.',
      'Membaca kladogram seolah organisme di ujung kanan paling maju. Posisi ujung hanya urutan penulisan; yang menentukan kekerabatan adalah titik percabangan bersama.',
      'Mengira pelestarian ex situ lebih baik daripada in situ. In situ menjaga seluruh ekosistem dan proses evolusi, sedangkan ex situ umumnya menjadi pelengkap penyelamatan spesies yang terancam.'
    ],
    tutorTip: 'Untuk soal indeks keanekaragaman, hitung dahulu proporsi p = n/N tiap spesies, kuadratkan lalu jumlahkan. Dua komunitas dengan jumlah spesies sama lebih beragam bila kemerataannya lebih tinggi. Untuk kladogram, cari ciri yang dimiliki bersama oleh sebagian kecil takson: takson yang berbagi ciri paling spesifik adalah saudara terdekat.'
  },
  questions: [
    dasar(
      'Berbagai varietas padi seperti Rojolele, Pandanwangi, dan IR64 menunjukkan keanekaragaman hayati tingkat...',
      ['ekosistem', 'gen', 'jenis', 'bioma'],
      'B',
      'Perhatikan bahwa semua varietas tersebut masih satu spesies, yaitu padi.',
      'Variasi sifat dalam satu spesies yang sama (rasa, aroma, ketahanan hama) disebabkan perbedaan gen sehingga termasuk keanekaragaman tingkat gen. Tingkat jenis membandingkan antarspesies, tingkat ekosistem membandingkan antarhabitat.'
    ),
    dasar(
      'Penulisan nama ilmiah harimau (dicetak miring) yang sesuai kaidah tata nama binomial adalah...',
      ['Panthera tigris', 'panthera tigris', 'Panthera Tigris', 'panthera Tigris'],
      'A',
      'Ingat aturan huruf awal: genus kapital, epitet spesies huruf kecil.',
      'Dalam tata nama binomial Linnaeus, kata pertama (genus) diawali huruf kapital dan kata kedua (epitet spesies) seluruhnya huruf kecil. Dengan demikian penulisan yang benar adalah Panthera tigris.'
    ),
    dasar(
      'Urutan takson dari yang paling luas hingga paling sempit yang benar adalah...',
      ['Spesies - Genus - Famili - Ordo - Kelas', 'Kingdom - Kelas - Filum - Ordo - Famili', 'Filum - Kingdom - Kelas - Famili - Ordo', 'Kingdom - Filum - Kelas - Ordo - Famili'],
      'D',
      'Hafalkan urutan: Kingdom, Filum, Kelas, Ordo, Famili, Genus, Spesies.',
      'Hierarki takson Linnaeus dari terluas ke tersempit adalah Kingdom, Filum, Kelas, Ordo, Famili, Genus, Spesies. Pilihan lain menukar letak filum, kelas, atau membalik urutan.'
    ),
    dasar(
      'Indonesia dikenal sebagai negara megabiodiversitas terutama karena...',
      ['memiliki wilayah daratan terluas di dunia', 'seluruh wilayahnya beriklim kutub yang stabil', 'letaknya di wilayah tropis berbentuk kepulauan dengan beragam ekosistem sehingga banyak spesies endemik', 'tidak memiliki pemisah wilayah fauna sehingga persebarannya seragam'],
      'C',
      'Kaitkan iklim tropis, ribuan pulau, dan keberadaan Garis Wallace-Weber.',
      'Iklim tropis, ribuan pulau, dan beragam ekosistem (hutan hujan, mangrove, terumbu karang) mendorong tingginya jumlah spesies dan endemisme. Indonesia bukan negara terluas dan persebaran faunanya tidak seragam karena dipisahkan Garis Wallace dan Weber.'
    ),
    dasar(
      'Perangkat identifikasi berisi pasangan pernyataan yang saling berlawanan (1a-1b, 2a-2b, dan seterusnya) disebut...',
      ['kunci determinasi dikotom', 'kladogram', 'piramida ekologi', 'herbarium'],
      'A',
      'Kata dikotom berarti bercabang dua.',
      'Kunci determinasi dikotom menyajikan dua pilihan berlawanan pada setiap langkah sehingga pengguna dibimbing sampai nama takson. Kladogram menggambarkan kekerabatan, piramida ekologi menggambarkan energi atau biomassa, herbarium adalah koleksi spesimen kering.'
    ),
    sedang(
      'Suatu hutan memuat tiga spesies pohon dengan jumlah 50, 30, dan 20 individu. Indeks keanekaragaman Simpson (D = 1 - Σp²) hutan tersebut adalah...',
      ['0,38', '0,50', '0,62', '0,80'],
      'C',
      'Hitung p tiap spesies (0,5; 0,3; 0,2), kuadratkan, jumlahkan, lalu kurangkan dari 1.',
      'p = 0,5; 0,3; 0,2 sehingga Σp² = 0,25 + 0,09 + 0,04 = 0,38. Maka D = 1 - 0,38 = 0,62.'
    ),
    sedang(
      'Pernyataan yang benar mengenai pembagian kehidupan menjadi tiga domain adalah...',
      ['Archaea dan Eukarya sama-sama berdinding sel peptidoglikan', 'dinding sel Bacteria mengandung peptidoglikan sedangkan dinding sel Archaea tidak', 'Bacteria memiliki inti sel sejati berselaput', 'Eukarya merupakan organisme prokariotik uniseluler'],
      'B',
      'Bandingkan komposisi dinding sel dan ada tidaknya membran inti.',
      'Peptidoglikan merupakan ciri dinding sel Bacteria, sedangkan Archaea tidak memilikinya. Bacteria dan Archaea sama-sama prokariotik (tanpa inti sejati), sedangkan Eukarya memiliki inti sel sejati.'
    ),
    sedang(
      'Lamprey (tanpa rahang), hiu (berahang), katak (berahang, bertungkai), kadal (berahang, bertungkai, beramnion), dan kucing (berahang, bertungkai, beramnion, berambut). Berdasarkan ciri turunan bersama, kerabat terdekat kucing di antara kelompok tersebut adalah...',
      ['lamprey', 'hiu', 'katak', 'kadal'],
      'D',
      'Cari ciri yang dimiliki kucing bersama hanya satu kelompok lain.',
      'Amnion hanya dimiliki kucing dan kadal sehingga keduanya berbagi sinapomorfi yang paling baru. Katak, hiu, dan lamprey tidak beramnion, jadi kerabat terdekat kucing adalah kadal.'
    ),
    sedang(
      'Contoh upaya pelestarian secara in situ adalah...',
      ['penetapan Taman Nasional Ujung Kulon untuk melindungi badak Jawa di habitat aslinya', 'penangkaran harimau di kebun binatang kota', 'penyimpanan benih tanaman langka dalam bank gen', 'pemeliharaan anggrek langka di kebun raya'],
      'A',
      'In situ berarti di tempat asli (habitat alami).',
      'Taman nasional dan cagar alam menjaga spesies di habitat aslinya sehingga termasuk in situ. Kebun binatang, bank gen, dan kebun raya berada di luar habitat asli sehingga merupakan pelestarian ex situ.'
    ),
    sedang(
      'Badak Jawa tercatat berstatus Critically Endangered (CR) pada Daftar Merah IUCN. Arti status tersebut adalah...',
      ['spesies telah punah di alam liar', 'spesies berisiko rendah dan populasinya melimpah', 'spesies menghadapi risiko kepunahan yang sangat tinggi di alam liar', 'spesies belum dievaluasi statusnya'],
      'C',
      'CR berada satu tingkat di bawah EW (punah di alam).',
      'Critically Endangered berarti berisiko kepunahan sangat tinggi di alam liar. Punah di alam adalah EW, risiko rendah adalah LC, belum dievaluasi adalah NE.'
    ),
    tantangan(
      'Padang rumput P memuat 4 spesies masing-masing 25 individu, sedangkan padang rumput Q memuat 4 spesies dengan jumlah 85, 5, 5, dan 5 individu. Simpulan yang paling tepat adalah...',
      ['kekayaan spesies P lebih tinggi daripada Q', 'indeks Simpson Q lebih tinggi daripada P', 'keduanya identik karena jumlah individunya sama', 'kekayaan spesies keduanya sama, tetapi kemerataan P lebih tinggi sehingga keanekaragaman P lebih besar'],
      'D',
      'Bandingkan jumlah spesies dan pola sebaran individu, lalu hitung D masing-masing.',
      'Kekayaan spesies keduanya 4. D untuk P = 1 - 4(0,25)² = 0,75, sedangkan D untuk Q = 1 - (0,85² + 3 × 0,05²) = 1 - 0,73 = 0,27. Kemerataan P lebih tinggi sehingga keanekaragamannya lebih besar.'
    ),
    tantangan(
      'Macan tutul Jawa bernama ilmiah Panthera pardus melas, sedangkan macan tutul Afrika bernama ilmiah Panthera pardus pardus. Simpulan yang tepat adalah...',
      ['keduanya spesies berbeda dari genus berbeda', 'keduanya satu spesies (Panthera pardus) tetapi berbeda subspesies', 'keduanya berbeda genus tetapi satu famili', 'keduanya memiliki nama binomial yang sama persis'],
      'B',
      'Hitung jumlah kata dan bandingkan dua kata pertama.',
      'Dua kata pertama sama (Panthera pardus) berarti genus dan spesiesnya sama. Kata ketiga (melas dan pardus) menunjukkan subspesies yang berbeda.'
    ),
    tantangan(
      'Eceng gondok yang berasal dari Amerika Selatan berkembang pesat di Rawa Pening, menutup permukaan air dan menurunkan jumlah spesies asli. Tumbuhan ini tergolong...',
      ['spesies endemik Rawa Pening', 'spesies kunci yang melestarikan komunitas', 'spesies invasif yang menekan spesies asli', 'spesies yang punah di alam'],
      'C',
      'Perhatikan asal spesies dan dampaknya pada spesies asli.',
      'Spesies asing yang berkembang pesat dan menekan spesies asli disebut spesies invasif, yang merupakan salah satu ancaman utama keanekaragaman hayati.'
    ),
    tantangan(
      'Taksa W, X, Y, dan Z memiliki ciri berikut: ciri 1 dimiliki X, Y, dan Z; ciri 2 dimiliki Y dan Z; ciri 3 hanya dimiliki Z. Pernyataan yang benar adalah...',
      ['W paling dekat kekerabatannya dengan Z', 'X dan W merupakan saudara terdekat', 'Z merupakan takson paling basal', 'Y dan Z berbagi nenek moyang bersama yang paling baru, sedangkan W berkerabat paling jauh'],
      'D',
      'Susun kladogram dari ciri yang dimiliki sedikit takson ke ciri yang dimiliki banyak takson.',
      'Kladogramnya berbentuk (W, (X, (Y, Z))). Ciri 1 memisahkan W dari X, Y, Z; ciri 2 memisahkan X dari Y dan Z. Y dan Z berbagi percabangan paling baru sehingga saudara terdekat, sementara W paling basal.'
    ),
    tantangan(
      'Pada plot seluas 50 m² ditemukan 45 individu spesies X, 30 individu spesies Y, 15 individu spesies Z, dan 10 individu spesies W. Kerapatan dan kerapatan relatif spesies Y berturut-turut adalah...',
      ['0,3 individu/m² dan 60%', '0,6 individu/m² dan 30%', '0,9 individu/m² dan 45%', '0,6 individu/m² dan 60%'],
      'B',
      'Kerapatan = individu per luas; kerapatan relatif = kerapatan spesies dibagi kerapatan total.',
      'Kerapatan Y = 30 / 50 = 0,6 individu/m². Total individu = 100 sehingga kerapatan total = 2 individu/m². Kerapatan relatif Y = 0,6 / 2 × 100% = 30%.'
    )
  ]
});
