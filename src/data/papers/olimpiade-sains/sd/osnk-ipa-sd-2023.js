/**
 * Paket Soal Terstruktur: OSN-K IPA SD 2023 (29 soal teks-lengkap pilihan ganda)
 * Sumber: scraped_raw/osnk-ipa-sd-2023.md (60 soal asli; 31 soal bergambar/bergantung diagram dilewati).
 * Penomoran label butir soal mengikuti nomor asli (1–60), dan bahasa asli soal dipertahankan.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-ipa-sd-2023',
  slug: 'osnk-ipa-sd-2023',
  subject: 'olimpiade-sains',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'OSN-K IPA SD 2023',
  relatedChapterIds: [
    'ipa4-bab4-pancaindra-dan-pengamatan-ilmiah',
    'ipa5-bab1-cahaya-dan-sifatnya',
    'ipa5-bab3-listrik-dan-magnet-sederhana',
    'ipa5-bab4-ekosistem-dan-siklus-air',
    'ipa6-bab1-rangka-dan-mekanika-gerak-tubuh',
    'ipa6-bab2-penghematan-dan-energi-alternatif',
    'ipa6-bab3-sistem-tata-surya'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K IPA SD 2023',
  totalMarks: 29,
  instructions:
    'Kerjakan seluruh 29 soal pilihan ganda teks-lengkap berikut (masing-masing bernilai 1 poin; pada kompetisi asli berlaku skor $+4$ benar, $-1$ salah, $0$ kosong). Dari 60 soal pada naskah sumber, sebanyak 29 soal dimuat dengan nomor label asli dan 31 soal yang bergantung pada gambar atau diagram (nomor 3, 5, 19, 21, 22, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 48, 49, 50, 54, 56, 57, 58, dan 59) dilewati.',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-ipa-sd-2023.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 29,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (29 soal pilihan ganda, nomor butir mengikuti nomor asli naskah).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Bentuk senyawa berikut dapat langsung diserap oleh kapiler usus halus manusia, kecuali...\n\nA. Glukosa\nB. Asam lemak\nC. Asam amino\nD. Vitamin B12',
          answer: 'B. Asam lemak',
          principle:
            'Di vili usus halus, produk pencernaan yang larut air diserap langsung ke kapiler darah, sedangkan hasil pencernaan lemak diserap melalui pembuluh kil (lakteal/limfa).',
          solution:
            'Pada vili usus halus, senyawa yang larut dalam air seperti monosakarida (glukosa), asam amino, serta vitamin larut air termasuk vitamin B12 (dengan bantuan faktor intrinsik) diserap menuju kapiler darah untuk dialirkan ke hati melalui vena porta hepatika.\n\nSebaliknya, asam lemak dan monogliserida masuk ke sel epitel usus (enterosit), dirakit kembali menjadi trigliserida, lalu dikemas menjadi kilomikron yang diserap ke pembuluh kil (pembuluh limfa/getah bening), bukan langsung ke kapiler darah.\n- Opsi A (Glukosa), C (Asam amino), dan D (Vitamin B12) keliru karena ketiganya masuk ke sistem kapiler darah usus halus.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Tumbuhan dengan fase sporofit yang tidak dominan pada siklus hidupnya adalah...\n\nA. Mangga\nB. Pinus\nC. Paku sarang burung\nD. Lumut tanduk',
          answer: 'D. Lumut tanduk',
          principle:
            'Pada tumbuhan lumut (Bryophyta), generasi gametofit ($n$) bersifat dominan dan berumur panjang, sedangkan sporofit ($2n$) bersifat tidak dominan dan menumpang pada gametofit.',
          solution:
            'Dalam metagenesis tumbuhan, lumut tanduk (kelompok lumut) memiliki fase gametofit sebagai tumbuhan utama yang berfotosintesis dan hidup mandiri, sedangkan fase sporofitnya hanya tumbuh menempel pada gametofit untuk menghasilkan spora sehingga tidak dominan.\n- Opsi A (Mangga, Angiospermae) dan B (Pinus, Gymnospermae) keliru karena tumbuhan berbiji memiliki fase sporofit yang sangat dominan dan gametofit tereduksi secara mikroskopis.\n- Opsi C (Paku sarang burung, Pteridophyta) keliru karena tumbuhan paku yang tampak sehari-hari merupakan fase sporofit yang dominan.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Nitrogen adalah salah satu unsur yang esensial untuk pertumbuhan tumbuhan. Unsur tersebut digunakan oleh tumbuhan untuk membuat senyawa berikut, kecuali...\n\nA. Asam nukleat\nB. Klorofil\nC. Protein\nD. Amilum',
          answer: 'D. Amilum',
          principle:
            'Karbohidrat seperti amilum hanya tersusun atas unsur karbon ($\\text{C}$), hidrogen ($\\text{H}$), dan oksigen ($\\text{O}$), tanpa unsur nitrogen ($\\text{N}$).',
          solution:
            'Amilum (pati) merupakan polisakarida yang tersusun atas rantai monomer glukosa dengan rumus umum $(\\text{C}_6\\text{H}_{10}\\text{O}_5)_n$, sehingga hanya mengandung unsur karbon, hidrogen, dan oksigen tanpa atom nitrogen.\n- Opsi A (Asam nukleat) keliru karena DNA dan RNA tersusun atas nukleotida yang memiliki basa nitrogen.\n- Opsi B (Klorofil) keliru karena molekul klorofil memiliki cincin porfirin yang tersusun atas empat atom nitrogen mengikat atom magnesium di pusatnya.\n- Opsi C (Protein) keliru karena protein tersusun atas asam amino yang semuanya memiliki gugus amina ($-\\text{NH}_2$).',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Pencegahan penyakit yang disebabkan oleh virus atau bakteri dapat dilakukan melalui pemberian...\n\nA. Antibiotik\nB. Penisilin\nC. Vaksin\nD. Streptomisin',
          answer: 'C. Vaksin',
          principle:
            'Vaksinasi (imunisasi aktif) melatih sistem imun membentuk antibodi dan sel memori untuk mencegah infeksi yang disebabkan oleh virus maupun bakteri.',
          solution:
            'Vaksin berisi patogen yang dilemahkan, dimatikan, atau bagian antigennya untuk merangsang sistem kekebalan tubuh menghasilkan memori imunologis sehingga dapat mencegah penyakit akibat virus (seperti polio dan campak) maupun bakteri (seperti difteri dan tetanus).\n- Opsi A (Antibiotik), B (Penisilin), dan D (Streptomisin) keliru karena penisilin dan streptomisin termasuk jenis antibiotik yang berfungsi untuk mengobati infeksi bakteri yang sudah terjadi, bukan sebagai pencegah, dan tidak bekerja melawan virus.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Suatu makhluk hidup memiliki ciri-ciri, yaitu dapat memiliki satu atau banyak sel, berkembang biak menggunakan spora, dan memiliki tubuh yang tersusun atas benang-benang halus (hifa). Berdasarkan ciri tersebut, makhluk hidup ini termasuk dalam kingdom...\n\nA. Protista\nB. Fungi\nC. Plantae\nD. Animalia',
          answer: 'B. Fungi',
          principle:
            'Kingdom Fungi (jamur) berciri eukariotik, uniseluler atau multiseluler, tidak berklorofil, berkembang biak dengan spora, dan tubuh multiselulernya tersusun atas benang halus disebut hifa.',
          solution:
            'Struktur tubuh berupa benang-benang halus yang disebut hifa (membentuk miselium) disertai reproduksi menggunakan spora serta adanya anggota uniseluler (seperti ragi) maupun multiseluler (seperti jamur tempe dan jamur kuping) adalah ciri khas kingdom Fungi.\n- Opsi A (Protista) keliru karena Protista tidak memiliki struktur hifa jamur sejati.\n- Opsi C (Plantae) keliru karena tumbuhan bersifat multiseluler dengan jaringan sejati, berklorofil, dan tidak tersusun atas hifa.\n- Opsi D (Animalia) keliru karena hewan bersifat multiseluler tanpa dinding sel, tidak tersusun atas hifa, dan tidak berkembang biak dengan spora.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Mengapa para ilmuwan menggunakan metode ilmiah?\n\nA. Agar mereka mudah mendapatkan dana dan dukungan untuk penelitiannya.\nB. Agar semua permasalahan yang dihadapinya dapat diselesaikan dalam waktu singkat.\nC. Agar dapat membantu mereka menunjukkan bahwa jawaban mereka atas suatu masalah akurat berdasarkan bukti.\nD. Agar dapat dipastikan tidak ada orang lain yang melakukan percobaan yang sama seperti mereka.',
          answer: 'C. Agar dapat membantu mereka menunjukkan bahwa jawaban mereka atas suatu masalah akurat berdasarkan bukti.',
          principle:
            'Metode ilmiah adalah pendekatan sistematis berbasis observasi, hipotesis, eksperimen, dan analisis data untuk menghasilkan kesimpulan yang objektif dan dapat diverifikasi dengan bukti empiris.',
          solution:
            'Tujuan utama metode ilmiah adalah memastikan jawaban atau kesimpulan atas suatu pertanyaan sains diperoleh secara objektif, logis, dan didukung oleh bukti nyata dari pengamatan serta percobaan yang dapat diuji ulang.\n- Opsi A keliru karena metode ilmiah berkaitan dengan keabsahan pengetahuan ilmiah, bukan jaminan memperoleh dana.\n- Opsi B keliru karena penelitian ilmiah sering memerlukan waktu lama dan pengujian berulang.\n- Opsi D keliru karena salah satu prinsip sains justru keterbukaan agar peneliti lain dapat mengulang (mereplikasi) percobaan untuk menguji kebenarannya.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Gigi bungsu mulai tumbuh pada usia .... tahun.\n\nA. 1-2\nB. 17-30\nC. 6-7\nD. 10-17',
          answer: 'B. 17-30',
          principle:
            'Gigi bungsu (geraham ketiga permanen) adalah gigi permanen yang paling akhir mengalami erupsi, yaitu pada masa remaja akhir hingga dewasa muda.',
          solution:
            'Gigi geraham ketiga atau gigi bungsu merupakan gigi tetap terakhir yang muncul di bagian paling belakang rahang, umumnya mulai tumbuh pada rentang usia $17\\text{–}30$ tahun (tersering sekitar usia $17\\text{–}25$ tahun).\n- Opsi A ($1\\text{–}2$ tahun) keliru karena merupakan masa pertumbuhan gigi susu (gigi desidui) pada balita.\n- Opsi C ($6\\text{–}7$ tahun) keliru karena merupakan masa mulai tumbuhnya gigi geraham pertama permanen dan tanggalnya gigi seri susu.\n- Opsi D ($10\\text{–}17$ tahun) keliru karena merupakan fase pergantian gigi taring/premolar serta tumbuhnya gigi geraham kedua permanen sebelum gigi bungsu.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Bila kita makan daging dengan kadar lemak yang tinggi, maka lemak tersebut akan diurai di....\n\nA. Usus besar\nB. Usus halus\nC. Usus 12 jari\nD. Kantung empedu',
          answer: 'C. Usus 12 jari',
          principle:
            'Pencernaan kimiawi lemak oleh getah empedu (emulsifikasi) dan enzim lipase pankreas terjadi secara utama di usus dua belas jari (duodenum).',
          solution:
            'Usus dua belas jari (duodenum), yakni bagian pertama dari usus halus, merupakan tempat bermuaranya saluran empedu dan saluran pankreas. Di sinilah lemak diemulsikan oleh garam empedu menjadi butiran kecil lalu diuraikan oleh enzim lipase pankreas menjadi asam lemak dan gliserol.\n- Opsi A (Usus besar) keliru karena fungsi utamanya adalah penyerapan air, elektrolit, serta pembusukan sisa makanan.\n- Opsi B (Usus halus) keliru karena merupakan sebutan keseluruhan segmen (duodenum, jejunum, ileum), padahal penguraian awal dan utama oleh getah empedu serta lipase pankreas berlangsung spesifik di usus 12 jari.\n- Opsi D (Kantung empedu) keliru karena organ ini hanya menyimpan dan memekatkan cairan empedu sebelum disalurkan ke duodenum, bukan tempat lewatnya makanan.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Bila kalian menemukan suatu ide atau gagasan, maka sebagai saintis sebaiknya yang kalian lakukan adalah....\n\nA. mencocokkannya dengan buku-buku yang berhubungan\nB. menguji ide tersebut dengan melakukan percobaan\nC. mengkaji teori dengan membaca buku-buku referensi\nD. menemukan variabel-variabel untuk mendapat petunjuk',
          answer: 'B. menguji ide tersebut dengan melakukan percobaan',
          principle:
            'Dalam langkah-langkah metode ilmiah, sebuah gagasan atau hipotesis harus diuji kebenarannya secara empiris melalui percobaan (eksperimen).',
          solution:
            'Seorang ilmuwan tidak cukup hanya berasumsi atau membandingkan dengan teori yang sudah ada; setelah merumuskan gagasan atau hipotesis, langkah ilmiah yang menentukan kebenarannya adalah menguji ide tersebut melalui percobaan terkontrol untuk memperoleh data empiris.\n- Opsi A dan C keliru karena membaca atau mencocokkan dengan buku referensi hanyalah tahap kajian pustaka, bukan pembuktian empiris atas gagasan baru.\n- Opsi D keliru karena penetapan variabel merupakan bagian persiapan sebelum melakukan percobaan, bukan tindakan lengkap untuk menguji ide.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Seorang anak memiliki seekor hewan peliharaan. Setelah mengamati hewan peliharaannya, anak tersebut melihat bahwa hewan itu sesekali berjemur di bawah lampu penghangat yang ada di kandangnya. Setelah beberapa minggu, anak tersebut menemukan lembaran sisik dalam kandang hewan peliharaannya. Hewan peliharaan anak tersebut termasuk dalam kelas...\n\nA. Pisces\nB. Amphibia\nC. Reptilia\nD. Mamalia',
          answer: 'C. Reptilia',
          principle:
            'Reptilia merupakan hewan berdarah dingin (ektotermik/poikilotermik) dengan kulit kering bersisik yang mengalami pergantian kulit (ekdisis/mengelupas dalam bentuk lembaran sisik).',
          solution:
            'Perilaku berjemur di bawah lampu penghangat menunjukkan bahwa hewan tersebut mengandalkan sumber panas eksternal untuk menjaga suhu tubuhnya (ektotermik), dan adanya lembaran sisik yang terkelupas di kandang merupakan ciri khas proses ganti kulit pada hewan kelas Reptilia (seperti ular atau kadal).\n- Opsi A (Pisces) keliru karena ikan hidup di air dan sisiknya tidak mengelupas berupa lembaran kulit kering di kandang darat.\n- Opsi B (Amphibia) keliru karena amfibi berkulit tipis dan lembap tanpa sisik.\n- Opsi D (Mamalia) keliru karena mamalia bersifat endotermik (berdarah panas) dan tubuhnya berambut, bukan bersisik yang mengelupas.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Berikut adalah katup yang terdapat pada jantung:\n1. Katup Bikuspidalis\n2. Katup Trikuspidalis\n3. Katup Semilunaris\nKatup jantung yang dilalui oleh aliran darah yang miskin karbon dioksida adalah...\n\nA. 1 saja\nB. 1 dan 2 saja\nC. 1 dan 3 saja\nD. 2 dan 3 saja',
          answer: 'C. 1 dan 3 saja',
          principle:
            'Darah yang miskin karbon dioksida (kaya oksigen) mengalir pada jantung bagian kiri: dari serambi kiri melalui katup bikuspidalis ke bilik kiri, lalu melalui katup semilunaris aorta keluar ke seluruh tubuh.',
          solution:
            'Darah yang miskin karbon dioksida (kaya oksigen) kembali dari paru-paru menuju serambi kiri (atrium kiri), kemudian masuk ke bilik kiri (ventrikel kiri) melewati katup bikuspidalis (nomor 1). Selanjutnya, bilik kiri memompa darah tersebut keluar menuju aorta melewati katup semilunaris aorta (nomor 3).\n- Katup trikuspidalis (nomor 2) terletak antara serambi kanan dan bilik kanan, yang hanya dilalui oleh darah kaya karbon dioksida dari seluruh tubuh. Oleh karena itu, opsi A (mengabaikan katup semilunaris aorta) serta opsi B dan D (menyertakan katup trikuspidalis) keliru.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Berikut adalah faktor yang dapat merangsang pelepasan empedu dari kantung empedu ke dalam usus halus adalah...\n\nA. Mengkonsumsi makanan yang kaya vitamin dan serat.\nB. Mengkonsumsi makanan yang kaya lemak.\nC. Mengkonsumsi makanan yang kaya protein.\nD. Berpuasa seharian.',
          answer: 'B. Mengkonsumsi makanan yang kaya lemak.',
          principle:
            'Kehadiran lemak di usus dua belas jari merangsang sekresi hormon kolesistokinin (CCK) yang memicu kontraksi kantung empedu untuk melepaskan empedu.',
          solution:
            'Empedu berfungsi mengemulsikan lemak agar lebih mudah diuraikan oleh enzim lipase. Ketika makanan kaya lemak masuk ke usus dua belas jari, sel mukosa usus melepaskan hormon kolesistokinin (CCK) yang merangsang kantung empedu berkontraksi dan menyalurkan cairan empedu ke usus halus.\n- Opsi A (kaya vitamin dan serat) keliru karena serat tidak dicerna secara kimiawi oleh empedu.\n- Opsi C (kaya protein) keliru karena rangsangan utama pengosongan kantung empedu jauh lebih kuat dipicu oleh keberadaan lemak, sedangkan protein terutama merangsang enzim protease.\n- Opsi D (berpuasa seharian) keliru karena saat tidak ada makanan masuk, empedu justru disimpan dan dipekatkan di dalam kantung empedu.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Pak Ari merupakan pengusaha anggrek. Pak Ari memiliki sebuah anggrek dengan warna dan corak yang unik sehingga dia ingin memperbanyak anggrek tersebut untuk dijual. Jika Pak Ari menginginkan hasil anakan anggrek dengan warna dan corak yang sama persis dengan anggrek miliknya, teknik bioteknologi modern yang dapat digunakan adalah...\n\nA. Kultur jaringan\nB. Seleksi perkawinan\nC. Stek\nD. Penyerbukan silang',
          answer: 'A. Kultur jaringan',
          principle:
            'Kultur jaringan (mikropropagasi) merupakan teknik bioteknologi yang memanfaatkan sifat totipotensi sel tumbuhan untuk menghasilkan keturunan seragam yang identik secara genetik dalam jumlah besar.',
          solution:
            'Untuk memperoleh banyak anakan anggrek yang memiliki warna dan corak identik dengan induknya menggunakan bioteknologi modern, teknik yang tepat adalah kultur jaringan. Sel atau jaringan dari tanaman induk ditumbuhkan pada media steril bernutrisi sehingga membentuk planlet baru yang identik secara genetik (klon).\n- Opsi B (Seleksi perkawinan) dan D (Penyerbukan silang) keliru karena melibatkan reproduksi generatif (seksual) yang menghasilkan variasi genetik sehingga corak anakan dapat berbeda dari induknya.\n- Opsi C (Stek) keliru karena stek merupakan teknik perbanyakan vegetatif konvensional, bukan bioteknologi modern.',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Seorang anak sedang berkunjung ke suatu kebun. Anak itu melihat sebuah tanaman yang memiliki daun dengan susunan tulang daun sejajar. Setelah dicabut, tampak akar tanaman tersebut merupakan akar serabut. Tanaman tersebut kemungkinan adalah …. dan termasuk dalam kelas...\n\nA. Oryza sativa - Dicotyledoneae\nB. Zea mays - Monocotyledoneae\nC. Cycas rumphii – Cycadinae\nD. Gnetum gnemon – Coniferinae',
          answer: 'B. Zea mays - Monocotyledoneae',
          principle:
            'Tumbuhan monokotil (Monocotyledoneae) memiliki ciri khas berakar serabut dan tulang daun sejajar atau melengkung.',
          solution:
            'Ciri tulang daun sejajar dan sistem perakaran serabut dimiliki oleh tumbuhan berkeping satu atau kelas Monocotyledoneae, contohnya jagung (*Zea mays*).\n- Opsi A keliru karena meskipun *Oryza sativa* (padi) merupakan tumbuhan monokotil, ia dipasangkan dengan kelas *Dicotyledoneae* (dikotil).\n- Opsi C (*Cycas rumphii*/pakis haji) dan D (*Gnetum gnemon*/melinjo) keliru karena keduanya termasuk tumbuhan berbiji terbuka (Gymnospermae) yang berakar tunggang; selain itu, melinjo termasuk kelas *Gnetinae*, bukan *Coniferinae*.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Ciri-ciri paru-paru pada burung adalah...\n\nA. kaku\nB. dapat mengembang\nC. memiliki kantung hawa anterior\nD. berhubungan langsung dengan trachea',
          answer: 'A. kaku',
          principle:
            'Paru-paru burung berukuran relatif kecil dan bersifat kaku (tidak elastis mengembang-mengempis), sedangkan fungsi pemompa udara dilakukan oleh pundi-pundi hawa.',
          solution:
            'Pada sistem pernapasan burung (Aves), paru-paru bersifat kaku dan volumenya hampir tidak berubah saat bernapas. Udara dialirkan secara searah melewati parabronkus pada paru-paru dengan bantuan mengembang dan mengempisnya pundi-pundi hawa (kantung udara).\n- Opsi B (dapat mengembang) keliru karena bagian yang mengembang-mengempis adalah kantung udara, bukan paru-paru burung.\n- Opsi C keliru karena kantung hawa anterior dan posterior merupakan struktur tambahan di luar paru-paru, bukan bagian penyusun organ paru-paru itu sendiri.\n- Opsi D keliru karena trakea terlebih dahulu bercabang menjadi bronkus sebelum memasuki paru-paru.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Perbedaan antara arteri pulmonari dengan vena pulmonari adalah pada arteri pulmonari memiliki ciri-ciri...\n\nA. memiliki katup\nB. berdinding tipis\nC. mengandung darah yang kaya akan oksigen\nD. aliran darah menuju jantung',
          answer: 'A. memiliki katup',
          principle:
            'Pada pangkal arteri pulmonalis terdapat katup semilunaris pulmonalis untuk mencegah aliran balik darah ke bilik kanan, sedangkan vena pulmonalis tidak memiliki katup di sepanjang pembuluhnya.',
          solution:
            'Arteri pulmonalis mengalirkan darah miskin oksigen (kaya $\\text{CO}_2$) dari bilik kanan jantung menuju paru-paru. Di pangkal keluarnya dari bilik kanan terdapat katup semilunaris pulmonalis yang mencegah darah kembali ke jantung, berbeda dengan vena pulmonalis yang unik karena tidak memiliki katup di sepanjang jalannya.\n- Opsi B (berdinding tipis), C (mengandung darah yang kaya akan oksigen), dan D (aliran darah menuju jantung) keliru karena ketiga sifat tersebut merupakan ciri dari vena pulmonalis, bukan arteri pulmonalis.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Mitokondria merupakan organel sel yang menghasilkan energi berupa ATP yang penting untuk menjalankan fungsi-fungsi tubuh. Jumlah mitokondria tampak lebih banyak pada sel-sel otot dibandingkan sel-sel kulit. Hal tersebut disebabkan...\n\nA. Lokasi sel otot berada di bawah permukaan tubuh.\nB. Luas permukaan kulit lebih besar dibandingkan otot sehingga sudah mencukupi kebutuhan energi kulit.\nC. Otot banyak mengalami kontraksi sehingga memerlukan energi lebih banyak.\nD. Sel-sel kulit lebih sering beregenerasi sehingga lebih banyak selsel yang mati.',
          answer: 'C. Otot banyak mengalami kontraksi sehingga memerlukan energi lebih banyak.',
          principle:
            'Kepadatan mitokondria dalam suatu jenis sel berbanding lurus dengan kebutuhan energi (ATP) sel tersebut untuk menjalankan aktivitas metabolik atau mekanisnya.',
          solution:
            'Sel otot terus-menerus melakukan kontraksi dan relaksasi untuk menghasilkan gerakan tubuh. Proses kontraksi otot memerlukan energi kimia berupa ATP dalam jumlah sangat besar, sehingga sel otot memiliki jauh lebih banyak mitokondria sebagai organel penghasil ATP dibandingkan sel kulit.\n- Opsi A keliru karena letak sel di bawah permukaan tubuh tidak menentukan jumlah mitokondria.\n- Opsi B keliru karena luas permukaan jaringan kulit tidak menggantikan fungsi mitokondria dalam memproduksi ATP.\n- Opsi D keliru karena tingginya regenerasi sel kulit tidak menjelaskan kebutuhan energi mekanis kontinu yang jauh lebih besar pada sel otot.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Animals which bodies are covered with exoskeleton and appear segmented are classified into .... phylum.\n\nA. Echinodermata\nB. Coelenterata\nC. Mollusca\nD. Arthropoda',
          answer: 'D. Arthropoda',
          principle:
            'Filum Arthropoda memiliki ciri utama tubuh bersegmen (beruas-ruas), kaki berbuku-buku, dan rangka luar (eksoskeleton) yang tersusun atas kitin.',
          solution:
            'Hewan yang tubuhnya ditutupi rangka luar (*exoskeleton*) dan tampak bersegmen (*segmented*) termasuk dalam filum Arthropoda (seperti serangga, laba-laba, dan udang/kepiting).\n- Opsi A (Echinodermata) keliru karena hewan berkulit duri ini memiliki simetri radial sekunder dan rangka dalam berupa lempeng kapur, tanpa tubuh bersegmen.\n- Opsi B (Coelenterata/Cnidaria) keliru karena bertubuh lunak simetri radial dengan sel penyengat tanpa eksoskeleton bersegmen.\n- Opsi C (Mollusca) keliru karena bertubuh lunak dan tidak bersegmen.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Bagian dari sistem saraf yang bertanggung jawab untuk mengatur kerja otot rangka adalah....\n\nA. Sistem saraf autonom\nB. Sistem saraf simpatetik\nC. Sistem saraf parasimpatetik\nD. Sistem saraf somatik',
          answer: 'D. Sistem saraf somatik',
          principle:
            'Sistem saraf tepi terdiri atas sistem saraf somatik (sadar) yang mengendalikan otot rangka dan sistem saraf otonom (tidak sadar) yang mengendalikan organ dalam.',
          solution:
            'Gerak otot rangka (otot lurik) berlangsung di bawah kendali kesadaran kita dan diatur oleh sistem saraf somatik, yang menghantarkan impuls motorik dari sistem saraf pusat menuju otot rangka.\n- Opsi A (Sistem saraf autonom/otonom) keliru karena mengatur kerja organ dalam secara tidak sadar (otot polos, otot jantung, dan kelenjar).\n- Opsi B (simpatetik) dan C (parasimpatetik) keliru karena keduanya merupakan cabang dari sistem saraf otonom yang bekerja di luar kesadaran.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Which of these statements is not true about fertilization in a fern plant?\n\nA. An egg is produced in an archegonium.\nB. A sperm is produced in an antheridium.\nC. The sperm is carried by the wind to the egg.\nD. Eggs and sperm are produced by the gametophyte generation.',
          answer: 'C. The sperm is carried by the wind to the egg.',
          principle:
            'Fertilisasi pada tumbuhan paku membutuhkan air karena sel sperma berflagel berenang menuju sel telur di dalam arkegonium, bukan disebarkan oleh angin.',
          solution:
            'Pada siklus hidup tumbuhan paku (*fern*), generasi gametofit (protalium) menghasilkan gamet jantan (spermatozoid) di anteridium dan sel telur (ovum) di arkegonium. Spermatozoid berflagel harus berenang melalui lapisan air untuk mencapai sel telur di arkegonium, sehingga pernyataan bahwa sperma dibawa oleh angin (*carried by the wind*) adalah tidak benar.\n- Opsi A, B, dan D keliru dipilih karena ketiganya merupakan pernyataan yang benar mengenai struktur reproduksi gametofit tumbuhan paku.',
          rubric: OK
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Water in lakes can appear to have various colors, such as green, or brown. These colors can be caused by the presence of which microorganism?\n\nA. Euglena\nB. Amoeba\nC. Azotobacter\nD. Rhizobium',
          answer: 'A. Euglena',
          principle:
            '*Euglena* merupakan protista mikroskopis air tawar yang memiliki kloroplas/pigmen sehingga ledakan populasinya dapat mewarnai air danau menjadi hijau atau kecokelatan.',
          solution:
            '*Euglena* (misalnya *Euglena viridis* yang berpigmen hijau atau spesies *Euglena* lain dengan pigmen karotenoid cokelat/kemerahan) hidup melimpah di perairan tawar seperti danau dan kolam, sehingga dapat menyebabkan air tampak berwarna hijau atau kecokelatan.\n- Opsi B (*Amoeba*) keliru karena *Amoeba* tidak memiliki pigmen fotosintetik yang memberi warna mencolok pada perairan.\n- Opsi C (*Azotobacter*) dan D (*Rhizobium*) keliru karena keduanya merupakan bakteri tanah penambat nitrogen (hidup bebas di tanah atau bersimbiosis di bintil akar polong-polongan), bukan mikroorganisme berpigmen penyebab warna air danau.',
          rubric: OK
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Pernyataan yang tepat jika seluruh Alga dihilangkan dari lumut kerak (Lichen) adalah....\n\nA. Fungi akan kehilangan sumber senyawa organik.\nB. Alga akan kehilangan sumber senyawa organik.\nC. Fungi akan mulai mengering karena kurangnya kemampuan menyimpan air.\nD. Lumut kerak (Lichen) tidak akan mengalami dampak apapun.',
          answer: 'A. Fungi akan kehilangan sumber senyawa organik.',
          principle:
            'Lumut kerak (Lichen) adalah simbiosis mutualisme antara fungi dan alga/sianobakteri: alga memasok senyawa organik hasil fotosintesis, sedangkan fungi memberi perlindungan serta menyerap air dan mineral.',
          solution:
            'Di dalam simbiosis lumut kerak, komponen alga (fotobion) berperan melakukan fotosintesis untuk menghasilkan senyawa organik (karbohidrat) bagi dirinya sendiri maupun bagi fungi (mikobion) yang tidak berklorofil. Jika seluruh alga dihilangkan, maka fungi akan kehilangan sumber makanan berupa senyawa organik.\n- Opsi B keliru karena alga merupakan organisme autotrof yang membuat senyawa organiknya sendiri melalui fotosintesis, bukan bergantung pada fungi untuk memperoleh senyawa organik.\n- Opsi C keliru karena fungsi menahan kelembapan dan menyerap air serta mineral justru dijalankan oleh jaringan hifa fungi, bukan oleh alga.\n- Opsi D keliru karena rusaknya simbiosis mutualisme akan membuat lumut kerak tidak dapat bertahan hidup normal.',
          rubric: OK
        },
        {
          label: '43',
          marks: 1,
          prompt:
            'Dua hambatan (R1 dan R2) terdapat pada rangkaian seri dan rangkaian paralel, bila pada kedua rangkaian tersebut dihubungkan dengan tegangan identik, maka pernyataan berikut ini yang benar adalah...\n\nA. Arus yang melalui hambatan (R1 dan R2) pada rangkaian seri akan lebih besar sedangkan pada rangkaian paralel lebih kecil\nB. Arus yang mengalir pada rangkaian seri dan paralel akan sama besar\nC. Arus yang melalui hambatan (R1 dan R2) pada rangkaian seri akan sama besar sedangkan pada rangkaian paralel arus akan terbagi dan besarnya tergantung dari nilai hambatan (R1 dan R2)\nD. Arus yang melalui hambatan(R1 dan R2) pada rangkaian seri bergantung dari nilai hambatan, sedangkan arus di rangkaian paralel akan memiliki nilai lebih besar',
          answer: 'C. Arus yang melalui hambatan (R1 dan R2) pada rangkaian seri akan sama besar sedangkan pada rangkaian paralel arus akan terbagi dan besarnya tergantung dari nilai hambatan (R1 dan R2)',
          principle:
            'Pada rangkaian seri, arus listrik yang melewati setiap hambatan sama besar ($I_1 = I_2$), sedangkan pada rangkaian paralel tegangan tiap cabang sama sehingga arus terbagi berbanding terbalik dengan hambatan ($I_k = V/R_k$).',
          solution:
            'Pada rangkaian seri tidak terdapat percabangan sehingga seluruh muatan melewati $R_1$ dan $R_2$ secara berurutan, akibatnya kuat arus pada $R_1$ dan $R_2$ sama besar ($I_1 = I_2 = \\frac{V}{R_1+R_2}$). Sebaliknya, pada rangkaian paralel, kedua hambatan terhubung langsung pada tegangan sumber $V$ yang sama sehingga arus total terbagi ke masing-masing cabang sesuai hukum Ohm ($I_1 = \\frac{V}{R_1}$ dan $I_2 = \\frac{V}{R_2}$), bergantung pada nilai $R_1$ dan $R_2$.\n- Opsi A keliru karena hambatan pengganti seri ($R_1 + R_2$) lebih besar daripada paralel ($\\frac{R_1 R_2}{R_1 + R_2}$), sehingga arus total pada rangkaian seri justru lebih kecil daripada rangkaian paralel.\n- Opsi B keliru karena besar arus total dan arus cabang pada kedua rangkaian berbeda.\n- Opsi D keliru karena arus yang melewati $R_1$ dan $R_2$ pada rangkaian seri bernilai sama satu sama lain, bukan berbeda-beda antarhambatan.',
          rubric: OK
        },
        {
          label: '44',
          marks: 1,
          prompt:
            'Which one of the following statements concerning permanent magnets is false?...\n\nA. The north pole of a permanent magnet is attracted to a south pole.\nB. All permanent magnets are surrounded by a magnetic field.\nC. Magnetic field lines outside a permanent magnet originate from the north pole and end on the south pole.\nD. When a permanent magnet is cut in half, one piece will be a north pole and one piece will be a south pole.',
          answer: 'D. When a permanent magnet is cut in half, one piece will be a north pole and one piece will be a south pole.',
          principle:
            'Kutub magnet selalu berpasangan (dipol magnetik); memotong magnet menjadi dua tidak pernah menghasilkan kutub tunggal (monopol magnetik).',
          solution:
            'Setiap magnet permanen tersusun atas domain-domain magnetik mikroskopis yang masing-masing memiliki kutub utara dan kutub selatan. Jika sebuah magnet batang dipotong menjadi dua bagian, masing-masing potongan akan langsung menjadi magnet utuh baru dengan sepasang kutub utara dan kutub selatan sendiri, bukan satu potong menjadi kutub utara saja dan satu potong menjadi kutub selatan saja. Jadi pernyataan D salah (*false*).\n- Opsi A, B, dan C keliru dipilih karena ketiganya adalah sifat magnet yang benar: kutub tak sejenis saling tarik-menarik, setiap magnet dikelilingi medan magnet, dan garis medan magnet di luar magnet mengarah dari kutub utara ke kutub selatan.',
          rubric: OK
        },
        {
          label: '51',
          marks: 1,
          prompt:
            'Apabila efisiensi dari penggunaan energi merupakan perbandingan energi yang digunakan oleh suatu alat listrik ($E_{o}$) dengan energi yang diberikan oleh sumber listrik ($E_{i}$). Maka besarnya efisiensi dapat dinyatakan dengan persamaan berikut ini...\n\nA. $\\dfrac{E_{i} \\times E_{o}}{E_{o}} \\times 100\\%$\nB. $\\dfrac{E_{i}}{E_{o}} \\times 100\\%$\nC. $\\dfrac{E_{o}}{E_{i}} \\times 100\\%$\nD. $\\dfrac{E_{i} \\times E_{o}}{E_{i}} \\times 100\\%$',
          answer: 'C. $\\dfrac{E_{o}}{E_{i}} \\times 100\\%$',
          principle:
            'Efisiensi energi ($\\eta$) didefinisikan sebagai rasio energi keluaran yang berguna ($E_o$) terhadap energi masukan total ($E_i$) dinyatakan dalam persen: $\\eta = \\frac{E_o}{E_i} \\times 100\\%$.',
          solution:
            'Secara simbolik, efisiensi adalah perbandingan antara energi keluaran yang dimanfaatkan oleh alat ($E_o$) dengan energi masukan dari sumber ($E_i$):\n$$\\eta = \\frac{E_o}{E_i} \\times 100\\%.$$\n- Opsi A keliru karena $\\frac{E_i \\times E_o}{E_o} \\times 100\\% = E_i \\times 100\\%$, bukan rasio tak berdimensi.\n- Opsi B keliru karena $\\frac{E_i}{E_o} \\times 100\\%$ membalik masukan dan keluaran (yang nilainya akan $\\ge 100\\%$ jika ada energi hilang).\n- Opsi D keliru karena $\\frac{E_i \\times E_o}{E_i} \\times 100\\% = E_o \\times 100\\%$, juga bukan perbandingan efisiensi.',
          rubric: OK
        },
        {
          label: '52',
          marks: 1,
          prompt:
            'Pasangan jenis dan ketinggian awan yang sesuai adalah...\n\nA. Jenis Awan: Stratus — Ketinggian: 7 km - 12 km\nB. Jenis Awan: Altocumulus — Ketinggian: 2 km - 7 km\nC. Jenis Awan: Altostratus — Ketinggian: 12 km - 15 km\nD. Jenis Awan: Cirrus — Ketinggian: 1 km - 2 km',
          answer: 'B. Jenis Awan: Altocumulus — Ketinggian: 2 km - 7 km',
          principle:
            'Berdasarkan klasifikasi ketinggian awan: awan rendah ($< 2\\text{ km}$, misalnya Stratus), awan menengah ($2\\text{–}7\\text{ km}$, berawalan *Alto-*), dan awan tinggi ($> 6\\text{ km}$, berawalan *Cirro-* / Cirrus).',
          solution:
            'Awan *Altocumulus* termasuk kelompok awan menengah (ditandai awalan *Alto-*) yang umumnya terbentuk pada ketinggian $2\\text{ km} - 7\\text{ km}$ di atmosfer.\n- Opsi A (Stratus: $7\\text{–}12\\text{ km}$) keliru karena Stratus merupakan awan rendah yang berada di bawah ketinggian $2\\text{ km}$.\n- Opsi C (Altostratus: $12\\text{–}15\\text{ km}$) keliru karena Altostratus merupakan awan menengah pada kisaran $2\\text{–}7\\text{ km}$, bukan setinggi $12\\text{–}15\\text{ km}$.\n- Opsi D (Cirrus: $1\\text{–}2\\text{ km}$) keliru karena Cirrus merupakan awan tinggi yang tersusun dari kristal es pada ketinggian di atas $6\\text{ km}$.',
          rubric: OK
        },
        {
          label: '53',
          marks: 1,
          prompt:
            'Manakah diantara pasangan jenis gempa berikut yang sesuai dengan penyebab gempanya?\n\nA. Jenis Gempa: Tektonik — Penyebab Gempa: aktivitas gunung berapi\nB. Jenis Gempa: Tektonik — Penyebab Gempa: revolusi bumi\nC. Jenis Gempa: Vulkanik — Penyebab Gempa: pergerakan ombak laut\nD. Jenis Gempa: Vulkanik — Penyebab Gempa: aktivitas gunung berapi',
          answer: 'D. Jenis Gempa: Vulkanik — Penyebab Gempa: aktivitas gunung berapi',
          principle:
            'Gempa bumi diklasifikasikan berdasarkan penyebabnya: gempa tektonik akibat pergeseran lempeng kerak bumi, gempa vulkanik akibat aktivitas magma gunung berapi, dan gempa runtuhan akibat ambruknya gua/tambang.',
          solution:
            'Gempa vulkanik adalah getaran kerak bumi yang ditimbulkan oleh pergerakan magma dan tekanan gas di dalam aktivitas gunung berapi.\n- Opsi A keliru karena gempa akibat aktivitas gunung berapi disebut gempa vulkanik, sedangkan gempa tektonik disebabkan pergeseran lempeng atau patahan kerak bumi.\n- Opsi B keliru karena revolusi Bumi mengelilingi Matahari menyebabkan pergantian musim dan gerak semu tahunan Matahari, bukan gempa tektonik.\n- Opsi C keliru karena pergerakan ombak laut bukanlah penyebab gempa vulkanik.',
          rubric: OK
        },
        {
          label: '55',
          marks: 1,
          prompt:
            'Pada tahun 2006, Pluto tidak lagi dikategorikan sebagai planet. Pluto kemudian digolongkan ke dalam planet kerdil. Apakah penyebab hal tersebut?...\n\nA. Pluto tidak memiliki satelit\nB. Pluto ukurannya lebih kecil dibandingkan dengan Bulan\nC. Pluto lintasannya memotong lintasan Neptunus\nD. Pluto jaraknya lebih jauh dari Neptunus',
          answer: 'C. Pluto lintasannya memotong lintasan Neptunus',
          principle:
            'Menurut definisi planet oleh IAU (2006), sebuah planet harus mengorbit Matahari, berbentuk hampir bulat akibat gravitasinya, dan telah membersihkan lingkungan di sekitar orbitnya dari objek lain.',
          solution:
            'Pada tahun 2006, Persatuan Astronomi Internasional (IAU) menetapkan tiga syarat planet: (1) mengorbit Matahari, (2) memiliki kesetimbangan hidrostatik (bentuk hampir bulat), dan (3) membersihkan lingkungan sekitar orbitnya (*clearing the neighbourhood*). Pluto tidak memenuhi syarat ketiga karena orbitnya yang sangat lonjong masih memotong/berbagi ruang dengan lintasan Neptunus dan objek-objek Sabuk Kuiper, sehingga diklasifikasikan sebagai planet kerdil (*dwarf planet*).\n- Opsi A keliru karena Pluto memiliki satelit alami (seperti Charon, Styx, Nix, Kerberos, dan Hydra), lagi pula Merkurius dan Venus yang tidak memiliki satelit tetap berstatus planet.\n- Opsi B keliru karena perbandingan ukuran terhadap Bulan bukan kriteria definisi planet IAU.\n- Opsi D keliru karena jarak yang lebih jauh dari Neptunus bukan alasan hilangnya status planet.',
          rubric: OK
        },
        {
          label: '60',
          marks: 1,
          prompt:
            'Ketika cahaya merambat melewati medium, maka cahaya tersebut akan mengalami perubahan arah sinar terhadap garis normal. Pernyataan berikut yang benar adalah...\n\nA. dari medium rapat ke kurang rapat, sinar terbiaskan menjauhi garis normal\nB. dari medium kurang rapat ke rapat, sinar terbiaskan menjauhi garis normal\nC. dari medium rapat ke kurang rapat, sinar terpantulkan menjauhi garis normal\nD. dari medium kurang rapat ke kurang rapat, sinar terpantulkan mendekati garis normal',
          answer: 'A. dari medium rapat ke kurang rapat, sinar terbiaskan menjauhi garis normal',
          principle:
            'Menurut Hukum Snellius pada pembiasan cahaya ($n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$), cahaya dari medium lebih rapat ($n_1$ besar) ke kurang rapat ($n_2 < n_1$) merambat lebih cepat sehingga dibiaskan menjauhi garis normal ($\\theta_2 > \\theta_1$).',
          solution:
            'Pembiasan cahaya terjadi ketika cahaya melewati batas dua medium dengan kerapatan optik (indeks bias $n$) yang berbeda. Berdasarkan Hukum Snellius:\n$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2.$$\nSaat cahaya bergerak dari medium yang lebih rapat ke medium yang kurang rapat ($n_1 > n_2$), nilai $\\sin\\theta_2 > \\sin\\theta_1$ sehingga sudut bias $\\theta_2$ lebih besar daripada sudut datang $\\theta_1$, artinya sinar dibiaskan menjauhi garis normal.\n- Opsi B keliru karena dari medium kurang rapat ke medium lebih rapat ($n_1 < n_2$), sinar justru dibiaskan mendekati garis normal ($\\theta_2 < \\theta_1$).\n- Opsi C dan D keliru karena membahas pemantulan (*terpantulkan*); pada pemantulan cahaya, sudut pantul selalu sama dengan sudut datang terhadap garis normal, bukan menjauhi atau mendekati garis normal akibat perbedaan kerapatan medium.',
          rubric: OK
        }
      ]
    }
  ]
};
