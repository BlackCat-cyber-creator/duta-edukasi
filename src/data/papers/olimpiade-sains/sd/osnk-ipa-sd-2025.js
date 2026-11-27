/**
 * Paket Soal Terstruktur: OSN-K IPA SD 2025 (95 soal pilihan ganda)
 * Sumber: soal-osn-ipa-sd-2025.pdf (penomoran sumber 1–100; 5 nomor tidak dimuat karena
 * tidak ada di naskah [88, 90], kehilangan gambar wajib [67, 89], atau duplikat rusak [85]).
 * Bahasa asli tiap butir dipertahankan (termasuk 4 butir berbahasa Inggris: 77, 79, 80, 98).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-ipa-sd-2025',
  slug: 'osnk-ipa-sd-2025',
  subject: 'olimpiade-sains',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'OSN-K IPA SD 2025: fisika dasar, biologi, ekologi, dan metode ilmiah',
  relatedChapterIds: [
    'ipa4-bab2-gaya-di-sekitar-kita',
    'ipa4-bab4-pancaindra-dan-pengamatan-ilmiah',
    'ipa5-bab3-listrik-dan-magnet-sederhana',
    'ipa5-bab4-ekosistem-dan-siklus-air'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K IPA SD 2025',
  totalMarks: 95,
  instructions:
    'Kerjakan seluruh 95 soal pilihan ganda berikut (masing-masing bernilai 1 poin; total 95 poin). Penomoran label mengikuti nomor asli naskah sumber (1–100) dengan lima nomor dilewati: nomor 88 dan 90 tidak terdapat pada naskah sumber, nomor 67 dan 89 kehilangan gambar/grafik wajib, serta nomor 85 merupakan duplikat rusak dari nomor 84. Pada soal nomor 99, nilai $R_1 = 2\\ \\Omega$ dipulihkan dari catatan pembahasan sumber agar soal dapat diselesaikan secara utuh, dan kunci/pembahasan pada soal 11, 44, 45, serta 87 diverifikasi secara ilmiah.',
  source: {
    org: 'OSN-K',
    file: 'soal-osn-ipa-sd-2025.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 95,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (95 soal pilihan ganda; penomoran mengikuti naskah sumber).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Dalam Ilmu Pengetahuan Alam, tarikan atau dorongan disebut ....\n\nA. Suara\nB. Energi\nC. Gaya\nD. Massa',
          answer: 'C. Gaya',
          principle: 'Gaya didefinisikan sebagai tarikan atau dorongan yang dapat memengaruhi gerak, arah, atau bentuk suatu benda.',
          solution:
            'Dalam IPA, gaya merupakan interaksi berupa tarikan atau dorongan yang bekerja pada suatu benda sehingga dapat mengubah posisi, kecepatan, arah gerak, maupun bentuknya.\n- Opsi A (Suara) keliru karena merupakan gelombang getaran.\n- Opsi B (Energi) keliru karena merupakan kemampuan untuk melakukan usaha.\n- Opsi D (Massa) keliru karena menyatakan banyaknya materi yang terkandung dalam benda.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Gaya yang digunakan oleh burung ketika terbang adalah ....\n\nA. Gaya gesek\nB. Gaya dorong sayap\nC. Gaya tarik bumi\nD. Gaya pegas',
          answer: 'B. Gaya dorong sayap',
          principle: 'Saat mengepakkan sayap ke belakang dan ke bawah, burung memberikan gaya aksi pada udara dan memperoleh gaya dorong ke depan serta gaya angkat ke atas.',
          solution:
            'Burung terbang dengan cara mengepakkan sayapnya untuk mendorong udara ke bawah dan ke belakang, sehingga timbul gaya dorong sayap yang mengangkat dan menggerakkan tubuh burung ke depan.\n- Opsi A (Gaya gesek) justru menghambat gerak di udara.\n- Opsi C (Gaya tarik bumi/gravitasi) menarik burung ke bawah.\n- Opsi D (Gaya pegas) berasal dari benda elastis seperti karet atau per.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Alat pengukur gaya adalah ....\n\nA. Termometer\nB. Barometer\nC. Dinamometer\nD. Speedometer',
          answer: 'C. Dinamometer',
          principle: 'Besar gaya diukur menggunakan dinamometer (neraca pegas) berdasarkan prinsip pertambahan panjang pegas yang sebanding dengan gaya.',
          solution:
            'Dinamometer (sering disebut neraca pegas) adalah alat khusus untuk mengukur besar gaya dalam satuan newton.\n- Opsi A (Termometer) mengukur suhu.\n- Opsi B (Barometer) mengukur tekanan udara.\n- Opsi D (Speedometer) mengukur kelajuan kendaraan.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Besarnya gaya dinyatakan dalam satuan ....\n\nA. Joule\nB. Newton\nC. Watt\nD. Liter',
          answer: 'B. Newton',
          principle: 'Satuan Internasional (SI) untuk gaya adalah newton ($\\text{N}$), dengan $1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$.',
          solution:
            'Dalam Sistem Internasional (SI), besar gaya dinyatakan dalam satuan Newton ($\\text{N}$).\n- Opsi A (Joule) adalah satuan usaha atau energi.\n- Opsi C (Watt) adalah satuan daya.\n- Opsi D (Liter) adalah satuan volume.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Gaya yang mengubah bentuk benda dapat kita temukan pada ....\n\nA. Bola menggelinding\nB. Kaleng yang dilindas mobil\nC. Angin bertiup\nD. Daun jatuh',
          answer: 'B. Kaleng yang dilindas mobil',
          principle: 'Gaya tekan yang besar pada benda padat lunak atau berongga dapat mengubah bentuk fisik benda tersebut.',
          solution:
            'Kaleng yang dilindas ban mobil mendapat gaya tekan yang sangat besar sehingga penyok atau pipih; ini menunjukkan pengaruh gaya mengubah bentuk benda.\n- Opsi A, C, dan D menunjukkan pengaruh gaya yang mengubah keadaan gerak benda, bukan bentuknya.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Anak panah melesat dari busurnya karena ....\n\nA. Gaya gesek\nB. Gaya tarik\nC. Gaya dorong\nD. Gaya gravitasi',
          answer: 'C. Gaya dorong',
          principle: 'Tali busur yang direnggangkan menyimpan energi potensial pegas dan memberikan gaya dorong pada anak panah ketika dilepaskan.',
          solution:
            'Saat tali busur yang ditarik kemudian dilepaskan, kelenturan busur dan tali memberikan gaya dorong ke depan pada pangkal anak panah sehingga anak panah melesat cepat.\n- Opsi A (Gaya gesek) menghambat gerak.\n- Opsi B (Gaya tarik) dilakukan oleh pemanah sebelum melepas panah, bukan gaya yang mendorong anak panah melesat keluar.\n- Opsi D (Gaya gravitasi) menarik anak panah melengkung ke bawah.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Panas dapat terjadi karena adanya ....\n\nA. Suara\nB. Udara\nC. Sumber panas\nD. Listrik',
          answer: 'C. Sumber panas',
          principle: 'Energi panas (kalor) berasal dari benda atau proses yang berperan sebagai sumber panas, seperti Matahari, api, atau gesekan.',
          solution:
            'Segala sesuatu yang dapat menghasilkan panas disebut sumber panas (misalnya Matahari, nyala api, dan elemen pemanas). Tanpa sumber panas atau perubahan bentuk energi menjadi kalor, panas tidak muncul.\n- Opsi A, B, dan D bukan syarat umum terjadinya panas (listrik hanyalah salah satu bentuk energi yang dapat diubah menjadi panas melalui pemanas).',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Panas matahari sampai ke bumi dan panas api dapat kita rasakan disebut ....\n\nA. Konduksi\nB. Konveksi\nC. Radiasi\nD. Evaporasi',
          answer: 'C. Radiasi',
          principle: 'Radiasi adalah perpindahan panas melalui gelombang elektromagnetik tanpa memerlukan zat perantara (medium).',
          solution:
            'Ruang antara Matahari dan Bumi sebagian besar berupa ruang hampa, sehingga panas Matahari merambat melalui gelombang elektromagnetik secara radiasi. Demikian pula panas api unggun yang terasa dari samping tanpa aliran udara panas ke arah kita berpindah secara radiasi.\n- Opsi A (Konduksi) terjadi melalui zat padat tanpa perpindahan partikel.\n- Opsi B (Konveksi) terjadi melalui aliran fluida (cair/gas).\n- Opsi D (Evaporasi) adalah proses penguapan.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Bunyi yang getarannya kurang dari 20 getaran per detik disebut ....\n\nA. Ultrasonik\nB. Hipersonik\nC. Audiosonik\nD. Infrasonik',
          answer: 'D. Infrasonik',
          principle: 'Rentang frekuensi bunyi terbagi atas infrasonik ($< 20\\text{ Hz}$), audiosonik ($20\\text{--}20{.}000\\text{ Hz}$), dan ultrasonik ($> 20{.}000\\text{ Hz}$).',
          solution:
            'Frekuensi kurang dari $20$ getaran per detik ($< 20\\text{ Hz}$) disebut bunyi infrasonik dan tidak dapat didengar oleh telinga manusia normal.\n- Opsi A (Ultrasonik) memiliki frekuensi $> 20{.}000\\text{ Hz}$.\n- Opsi B (Hipersonik) merujuk pada kecepatan atau frekuensi akustik sangat tinggi ($> 10^9\\text{ Hz}$), bukan $< 20\\text{ Hz}$.\n- Opsi C (Audiosonik) berada pada rentang $20\\text{--}20{.}000\\text{ Hz}$.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Perpindahan panas melalui suatu zat tanpa disertai perpindahan partikel zat disebut ....\n\nA. Konduksi\nB. Konveksi\nC. Radiasi\nD. Refleksi',
          answer: 'A. Konduksi',
          principle: 'Konduksi (hantaran) memindahkan energi panas dari partikel berenergi tinggi ke partikel tetangganya tanpa perpindahan massa zat.',
          solution:
            'Pada konduksi, partikel-partikel zat hanya bergetar di tempat sambil meneruskan energi termal ke partikel di sebelahnya tanpa ikut berpindah posisi, seperti pada batang logam yang dipanaskan salah satu ujungnya.\n- Opsi B (Konveksi) disertai perpindahan partikel zat.\n- Opsi C (Radiasi) berlangsung tanpa zat perantara.\n- Opsi D (Refleksi) berarti pemantulan.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Hewan yang bisa mendengar bunyi infrasonik adalah ....\n\nA. Kucing\nB. Anjing\nC. Gajah\nD. Kelelawar',
          answer: 'C. Gajah',
          principle: 'Bunyi infrasonik berfrekuensi di bawah $20\\text{ Hz}$; gajah mampu mendengar dan berkomunikasi menggunakan gelombang infrasonik ($\\approx 14\\text{--}16\\text{ Hz}$).',
          solution:
            'Gajah memiliki kepekaan pendengaran pada frekuensi sangat rendah (infrasonik, $< 20\\text{ Hz}$) untuk berkomunikasi jarak jauh hingga beberapa kilometer.\n- Opsi A (Kucing) dan B (Anjing) mendengar rentang suara hingga ultrasonik, tidak peka pada infrasonik.\n- Opsi D (Kelelawar) terkenal menggunakan bunyi **ultrasonik** ($> 20{.}000\\text{ Hz}$) untuk ekolokasi, bukan infrasonik *(catatan: kunci pada naskah sumber sempat menuliskan D secara keliru)*.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Benda-benda yang dapat menghantarkan panas dengan baik disebut ....\n\nA. Isolator\nB. Konduktor\nC. Reaktor\nD. Transistor',
          answer: 'B. Konduktor',
          principle: 'Bahan dengan konduktivitas termal tinggi yang mudah mengalirkan panas disebut konduktor panas.',
          solution:
            'Konduktor panas adalah bahan yang mampu menghantarkan kalor dengan baik, misalnya logam seperti besi, aluminium, dan tembaga.\n- Opsi A (Isolator) adalah penghantar panas yang buruk.\n- Opsi C (Reaktor) dan D (Transistor) bukan istilah sifat hantar panas bahan.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Contoh benda yang dapat menghantarkan panas dengan baik adalah ....\n\nA. Plastik\nB. Kain\nC. Besi\nD. Kayu',
          answer: 'C. Besi',
          principle: 'Logam memiliki elektron bebas yang cepat memindahkan energi termal sehingga bersifat konduktor panas yang baik.',
          solution:
            'Besi merupakan logam sehingga menghantarkan panas dengan baik dan sering dipakai untuk alat masak.\n- Opsi A (Plastik), B (Kain), dan D (Kayu) adalah bahan bukan logam yang bersifat isolator panas.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Benda yang tidak dapat menghantarkan panas dengan baik disebut ....\n\nA. Konduktor\nB. Termometer\nC. Isolator\nD. Dinamometer',
          answer: 'C. Isolator',
          principle: 'Bahan yang menghambat aliran panas karena konduktivitas termalnya sangat rendah disebut isolator.',
          solution:
            'Isolator panas adalah benda yang tidak dapat menghantarkan panas dengan baik, misalnya kayu, plastik, karet, dan kain, sehingga sering digunakan sebagai pegangan panci atau pelindung panas.\n- Opsi A (Konduktor) justru menghantarkan panas dengan baik.\n- Opsi B (Termometer) dan D (Dinamometer) adalah alat ukur.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Contoh benda yang tidak dapat menghantarkan panas dengan baik adalah ....\n\nA. Aluminium\nB. Tembaga\nC. Besi\nD. Kayu',
          answer: 'D. Kayu',
          principle: 'Kayu merupakan bahan nonlogam berpori dengan hantaran kalor rendah sehingga tergolong isolator panas.',
          solution:
            'Kayu tidak menghantarkan panas dengan baik sehingga aman dijadikan pegangan peralatan masak.\n- Opsi A (Aluminium), B (Tembaga), dan C (Besi) semuanya adalah logam yang tergolong konduktor panas yang baik.',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Segala kekayaan alam yang dapat dimanfaatkan oleh manusia untuk memenuhi kebutuhan hidup disebut dengan ....\n\nA. Energi alternatif\nB. Sumber daya alam\nC. Harta karun\nD. Energi listrik',
          answer: 'B. Sumber daya alam',
          principle: 'Sumber daya alam mencakup seluruh materi maupun energi dari alam—baik hayati maupun nonhayati—yang dimanfaatkan untuk kebutuhan manusia.',
          solution:
            'Sumber daya alam (SDA) adalah segala potensi atau kekayaan alam (air, tanah, hutan, mineral, hewan, tumbuhan, dan energi alam) yang dapat dimanfaatkan manusia untuk memenuhi kebutuhan hidupnya.\n- Opsi A dan D hanya merujuk pada jenis energi tertentu, sedangkan Opsi C bukan istilah ilmiah.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Kayu yang sebagian besar digunakan sebagai bahan bangunan rumah berasal dari ....\n\nA. Tambang\nB. Hutan\nC. Sungai\nD. Sawah',
          answer: 'B. Hutan',
          principle: 'Kayu konstruksi seperti jati, meranti, dan pinus merupakan hasil sumber daya alam hayati dari ekosistem hutan.',
          solution:
            'Hutan merupakan penghasil utama kayu keras dan kayu pertukangan yang dimanfaatkan sebagai bahan bangunan rumah.\n- Opsi A (Tambang) menghasilkan mineral dan bahan bakar fosil.\n- Opsi C (Sungai) dan D (Sawah) bukan penghasil utama kayu bangunan.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Selain menanam pohon bakau, untuk mencegah terjadinya abrasi dapat dilakukan dengan ....\n\nA. Menebang pohon\nB. Membuat pemecah ombak berupa tembok beton\nC. Menambang pasir\nD. Membuang sampah ke laut',
          answer: 'B. Membuat pemecah ombak berupa tembok beton',
          principle: 'Abrasi pantai terjadi akibat pengikisan garis pantai oleh gelombang laut sehingga dicegah dengan meredam energi gelombang.',
          solution:
            'Pemecah ombak (*breakwater*) berupa tembok atau struktur beton di lepas pantai atau tepi pantai mengurangi energi hantaman ombak sebelum mencapai daratan, sehingga melengkapi peran hutan bakau dalam mencegah abrasi.\n- Opsi A, C, dan D justru merusak lingkungan pesisir dan memperparah pengikisan pantai.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Siklus hidup yang dimiliki oleh tumbuhan pisang yaitu ....\n\nA. Tunas – Muda – Dewasa\nB. Biji – Kecambah – Tunas\nC. Telur – Larva – Dewasa\nD. Akar – Batang – Daun',
          answer: 'A. Tunas – Muda – Dewasa',
          principle: 'Pisang budidaya umumnya berkembang biak secara vegetatif alami melalui tunas (anakan) yang tumbuh menjadi pohon muda lalu dewasa.',
          solution:
            'Dalam budidaya dan alam, tanaman pisang tumbuh dari tunas (anakan) yang muncul di pangkal batang induk, berkembang menjadi tanaman pisang muda, lalu menjadi pisang dewasa yang berbuah.\n- Opsi B tidak tepat karena pisang konsumsi umumnya steril/tanpa biji fungsional.\n- Opsi C adalah tahapan siklus hewan.\n- Opsi D menyebutkan organ tumbuhan, bukan tahapan siklus hidup.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Seluruh tahapan perubahan yang dimiliki dan dialami oleh makhluk hidup sepanjang hidupnya disebut ....\n\nA. Metamorfosis\nB. Perkembangbiakan\nC. Pertumbuhan\nD. Siklus hidup',
          answer: 'D. Siklus hidup',
          principle: 'Siklus hidup (daur hidup) mencakup seluruh rangkaian fase kehidupan makhluk hidup sejak terbentuk hingga dewasa dan menghasilkan keturunan.',
          solution:
            'Siklus hidup adalah keseluruhan tahapan pertumbuhan dan perkembangan yang dilalui makhluk hidup sepanjang hidupnya hingga bereproduksi.\n- Opsi A (Metamorfosis) adalah perubahan bentuk tubuh pada sebagian hewan saja.\n- Opsi B (Perkembangbiakan) hanya fase menghasilkan keturunan.\n- Opsi C (Pertumbuhan) hanya menyatakan pertambahan ukuran yang tidak dapat balik.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Tahapan awal dalam siklus hidup kupu-kupu adalah ....\n\nA. Ulat\nB. Pupa\nC. Telur\nD. Dewasa',
          answer: 'C. Telur',
          principle: 'Kupu-kupu berkembang biak secara bertelur (ovipar) dengan urutan metamorfosis sempurna: telur $\\rightarrow$ larva $\\rightarrow$ pupa $\\rightarrow$ imago.',
          solution:
            'Siklus hidup kupu-kupu dimulai ketika kupu-kupu betina meletakkan telur pada daun tumbuhan inang. Dari telur itulah kemudian menetas ulat (larva).\n- Opsi A, B, dan D merupakan tahapan lanjutan setelah telur menetas.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Tahapan kepompong dalam siklus hidup kupu-kupu disebut ....\n\nA. Larva\nB. Imago\nC. Ulat\nD. Pupa',
          answer: 'D. Pupa',
          principle: 'Dalam metamorfosis sempurna serangga, fase kepompong atau fase istirahat perubahan bentuk menuju dewasa disebut pupa.',
          solution:
            'Kepompong adalah nama umum untuk fase pupa pada kupu-kupu, yaitu tahap pembungkusan tubuh saat jaringan ulat mengalami perombakan menjadi kupu-kupu dewasa.\n- Opsi A (Larva) dan C (Ulat) adalah fase sebelum kepompong.\n- Opsi B (Imago) adalah fase dewasa.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Urutan metamorfosis sempurna adalah ....\n\nA. Telur – ulat – pupa – dewasa\nB. Telur – larva – pupa – dewasa\nC. Telur – pupa – ulat – dewasa\nD. Telur – dewasa – larva – pupa',
          answer: 'B. Telur – larva – pupa – dewasa',
          principle: 'Metamorfosis sempurna (holometabola) secara umum terdiri atas empat tahap baku: telur, larva, pupa, dan imago (dewasa).',
          solution:
            'Urutan istilah ilmiah umum untuk metamorfosis sempurna pada semua serangga holometabola (seperti kupu-kupu, nyamuk, lalat, dan kumbang) adalah telur $\\rightarrow$ larva $\\rightarrow$ pupa $\\rightarrow$ dewasa.\n- Opsi A menggunakan kata "ulat" yang hanya spesifik untuk kelompok kupu-kupu/ngengat, bukan istilah umum larva.\n- Opsi C dan D memiliki urutan tahapan yang terbalik.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Hewan yang hanya mengalami perubahan ukuran tubuh sejak lahir adalah ....\n\nA. Kupu-kupu\nB. Katak\nC. Belalang\nD. Nyamuk',
          answer: 'C. Belalang',
          principle: 'Di antara pilihan yang tersedia, kupu-kupu, katak, dan nyamuk mengalami perubahan bentuk tubuh drastis (metamorfosis sempurna/amfibi), sedangkan belalang memiliki bentuk nimfa yang sejak menetas sudah menyerupai belalang dewasa.',
          solution:
            'Belalang mengalami metamorfosis tidak sempurna (telur $\\rightarrow$ nimfa $\\rightarrow$ dewasa): sejak menetas dari telur, bentuk tubuh nimfa sudah sangat mirip belalang dewasa tanpa fase larva maupun pupa, sehingga perubahan utamanya adalah pertambahan ukuran tubuh dan pertumbuhan sayap.\n- Opsi A (Kupu-kupu) dan D (Nyamuk) mengalami metamorfosis sempurna (larva–pupa–imago).\n- Opsi B (Katak) mengalami metamorfosis dari berudu berekor dan berinsang menjadi katak berkaki dan berparu-paru.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Tahapan yang merugikan petani dalam siklus hidup kupu-kupu adalah ....\n\nA. Telur\nB. Larva\nC. Pupa\nD. Dewasa',
          answer: 'B. Larva',
          principle: 'Pada fase larva (ulat), kupu-kupu makan sangat rakus dedaunan dan pucuk tanaman pertanian untuk menyimpan cadangan energi sebelum menjadi pupa.',
          solution:
            'Larva (ulat) kupu-kupu merupakan pemakan daun yang aktif sehingga dapat merusak daun tanaman budidaya petani dan menurunkan hasil panen.\n- Opsi A (Telur) dan C (Pupa) tidak memakan bagian tanaman.\n- Opsi D (Dewasa/imago) menghisap nektar bunga dan justru membantu penyerbukan.',
          rubric: OK
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Peran hewan dalam rantai makanan adalah ....\n\nA. Menyerap air tanah\nB. Menjaga keseimbangan ekosistem\nC. Menyerap energi matahari\nD. Menghasilkan oksigen',
          answer: 'B. Menjaga keseimbangan ekosistem',
          principle: 'Hewan berperan sebagai konsumen pada berbagai tingkat trofik yang mengalirkan energi dan mengendalikan populasi organisme lain agar ekosistem tetap seimbang.',
          solution:
            'Dalam rantai makanan, hewan bertindak sebagai konsumen (herbivora, karnivora, omnivora) yang mengendalikan jumlah produsen maupun konsumen di bawahnya sehingga keseimbangan ekosistem terjaga.\n- Opsi A, C, dan D merupakan peran utama tumbuhan hijau (produsen) dalam ekosistem.',
          rubric: OK
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Daun dimakan oleh kupu-kupu pada masa ....\n\nA. Telur\nB. Dewasa\nC. Ulat\nD. Pupa',
          answer: 'C. Ulat',
          principle: 'Fase larva (ulat) memiliki mulut tipe penggigit-pengunyah untuk memakan jaringan daun.',
          solution:
            'Pada siklus hidup kupu-kupu, fase yang memakan daun adalah ulat (larva).\n- Opsi A (Telur) dan D (Pupa) tidak makan.\n- Opsi B (Dewasa) memiliki probosis pengisap nektar cairan bunga.',
          rubric: OK
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Buah jatuh dari pohon karena gaya ....\n\nA. Dorong\nB. Gesek\nC. Magnet\nD. Gravitasi',
          answer: 'D. Gravitasi',
          principle: 'Gaya gravitasi Bumi menarik seluruh benda bermassa di dekat permukaan Bumi menuju pusat Bumi.',
          solution:
            'Ketika tangkai buah yang sudah matang lepas dari dahan, gaya gravitasi Bumi menarik buah jatuh ke bawah menuju tanah.\n- Opsi A, B, dan C bukan penyebab utama jatuhnya buah dari pohon.',
          rubric: OK
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Telur katak akan menetas menjadi ....\n\nA. Katak kecil\nB. Larva\nC. Berudu\nD. Imago',
          answer: 'C. Berudu',
          principle: 'Pada daur hidup amfibi (katak), telur yang menetas di air menghasilkan fase berudu (kecebong) yang bernapas dengan insang.',
          solution:
            'Telur katak menetas di perairan menjadi berudu (kecebong) yang hidup di air dan berenang menggunakan ekor sebelum tumbuh kaki.\n- Opsi A (Katak kecil) muncul setelah berudu mengalami metamorfosis menumbuhkan kaki dan menyusutkan ekor.\n- Opsi B (Larva) dan D (Imago) lazim dipakai pada daur hidup serangga.',
          rubric: OK
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Menyalakan lampu dengan saklar merupakan pemanfaatan energi ....\n\nA. Gerak\nB. Panas\nC. Listrik dinamis\nD. Kimia',
          answer: 'C. Listrik dinamis',
          principle: 'Listrik dinamis adalah muatan listrik yang mengalir (arus listrik) melalui rangkaian tertutup ketika saklar ditutup.',
          solution:
            'Menekan saklar menutup rangkaian listrik sehingga arus listrik mengalir dari sumber tegangan menuju lampu; aliran muatan listrik ini disebut listrik dinamis.\n- Opsi A, B, dan D tidak menggambarkan aliran arus listrik melalui kabel dan saklar.',
          rubric: OK
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'Energi listrik yang dialirkan ke lampu akan berubah menjadi ....\n\nA. Energi panas\nB. Energi cahaya\nC. Energi gerak\nD. Energi kimia',
          answer: 'B. Energi cahaya',
          principle: 'Lampu dirancang sebagai pengubah energi listrik menjadi energi cahaya sebagai fungsi utamanya.',
          solution:
            'Saat arus listrik mengalir melalui lampu, energi listrik diubah terutama menjadi energi cahaya untuk menerangi ruangan (meski sebagian kecil ikut terbuang sebagai panas).\n- Opsi A bukan energi keluaran utama yang dimanfaatkan dari lampu penerangan.\n- Opsi C dan D tidak sesuai dengan fungsi lampu.',
          rubric: OK
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'Energi listrik pada setrika berubah menjadi energi ....\n\nA. Cahaya\nB. Bunyi\nC. Panas\nD. Gerak',
          answer: 'C. Panas',
          principle: 'Elemen pemanas bersambatan tinggi pada setrika mengubah energi listrik menjadi energi panas (kalor) berdasarkan efek pemanasan Joule.',
          solution:
            'Setrika listrik memanfaatkan elemen pemanas untuk mengubah energi listrik menjadi energi panas guna merapikan pakaian.\n- Opsi A (Cahaya), B (Bunyi), dan D (Gerak) bukan bentuk energi keluaran utama setrika.',
          rubric: OK
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Alat untuk mengukur besar gaya adalah ....\n\nA. Termometer\nB. Dinamometer\nC. Voltmeter\nD. Amperemeter',
          answer: 'B. Dinamometer',
          principle: 'Dinamometer (neraca pegas) mengukur gaya tarik atau berat benda secara langsung dalam satuan newton.',
          solution:
            'Besar gaya diukur menggunakan dinamometer.\n- Opsi A (Termometer) mengukur suhu.\n- Opsi C (Voltmeter) mengukur beda potensial listrik.\n- Opsi D (Amperemeter) mengukur kuat arus listrik.',
          rubric: OK
        },
        {
          label: '34',
          marks: 1,
          prompt:
            'Tiga tulang telinga penghubung gendang telinga dan rumah siput adalah ....\n\nA. Tulang dada, rusuk, dan martil\nB. Martil, landasan, dan sanggurdi\nC. Landasan, telapak, dan sirip\nD. Sanggurdi, kepala, dan siku',
          answer: 'B. Martil, landasan, dan sanggurdi',
          principle: 'Tiga tulang pendengaran (osikula) di telinga tengah tersusun berurutan dari luar ke dalam: martil (maleus), landasan (inkus), dan sanggurdi (stapes).',
          solution:
            'Getaran dari gendang telinga (membran timpani) diteruskan ke tingkap oval rumah siput (koklea) melalui tiga tulang pendengaran secara berurutan, yaitu tulang martil, tulang landasan, dan tulang sanggurdi.\n- Opsi A, C, dan D mencampurkan tulang rangka tubuh lain yang tidak berada di telinga.',
          rubric: OK
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'Hewan yang tidak memiliki ciri seperti sisik kering, berganti kulit, dan rahang fleksibel adalah ....\n\nA. Ular\nB. Buaya\nC. Belut\nD. Kadal',
          answer: 'C. Belut',
          principle: 'Sisik kering, pergantian kulit, dan ciri reptilia dimiliki ular, buaya, dan kadal, sedangkan belut adalah ikan (Pisces) berkulit licin berlendir.',
          solution:
            'Belut termasuk kelompok ikan (Pisces) yang kulitnya licin tanpa sisik kering dan bernapas dengan insang.\n- Opsi A (Ular), B (Buaya), dan D (Kadal) merupakan anggota kelas Reptilia yang tubuhnya tertutup sisik kering dan mengalami pergantian kulit (terutama ular yang juga memiliki rahang fleksibel).',
          rubric: OK
        },
        {
          label: '36',
          marks: 1,
          prompt:
            'Makhluk hidup yang berperan dalam siklus materi ekosistem adalah ....\n\nA. Tikus\nB. Elang\nC. Jamur\nD. Belalang',
          answer: 'C. Jamur',
          principle: 'Dekomposer seperti jamur dan bakteri menguraikan bahan organik mati menjadi mineral anorganik sehingga unsur hara kembali berputar dalam siklus materi.',
          solution:
            'Jamur berperan sebagai dekomposer (pengurai) yang memecah sisa organisme mati menjadi zat anorganik sederhana agar dapat diserap kembali oleh tumbuhan produsen.\n- Opsi A (Tikus), B (Elang), dan D (Belalang) adalah hewan konsumen, bukan pengurai bahan organik menjadi hara anorganik.',
          rubric: OK
        },
        {
          label: '37',
          marks: 1,
          prompt:
            'Tumbuhan berbunga tidak mungkin termasuk kelompok ....\n\nA. Angiospermae\nB. Monokotil\nC. Dikotil\nD. Gymnospermae',
          answer: 'D. Gymnospermae',
          principle: 'Tumbuhan berbiji dibagi menjadi Angiospermae (berbiji tertutup, memiliki bunga sejati) dan Gymnospermae (berbiji terbuka, alat reproduksi berupa strobilus/runjung).',
          solution:
            'Tumbuhan berbunga termasuk ke dalam divisi Angiospermae (yang terbagi lagi menjadi Monokotil dan Dikotil). Oleh karena itu, tumbuhan berbunga tidak mungkin tergolong Gymnospermae (tumbuhan berbiji terbuka seperti pinus dan pakis haji yang tidak memiliki bunga sejati).\n- Opsi A, B, dan C semuanya merupakan kelompok tumbuhan berbunga.',
          rubric: OK
        },
        {
          label: '38',
          marks: 1,
          prompt:
            'Dua organisme dengan genus yang sama kemungkinan memiliki ....\n\nA. Keluarga berbeda\nB. Spesies yang berbeda\nC. Ordo berbeda\nD. Kingdom berbeda',
          answer: 'B. Spesies yang berbeda',
          principle: 'Dalam hierarki taksonomi (Kingdom–Filum/Divisi–Kelas–Ordo–Famili–Genus–Spesies), takson yang sama di tingkat atas berarti semua takson di atasnya pasti sama, sedangkan takson di bawahnya boleh berbeda.',
          solution:
            'Jika dua organisme berada pada genus yang sama (misalnya *Panthera leo* dan *Panthera tigris*), keduanya pasti memiliki famili (keluarga), ordo, kelas, filum, dan kingdom yang sama. Tingkat di bawah genus adalah spesies, sehingga keduanya dapat memiliki spesies yang berbeda.\n- Opsi A, C, dan D mustahil berbeda apabila genusnya sudah sama.',
          rubric: OK
        },
        {
          label: '39',
          marks: 1,
          prompt:
            'Pola rantai makanan: Padi - Tikus - Ular - Elang, termasuk ekosistem ....\n\nA. Hutan\nB. Laut\nC. Sawah\nD. Gurun',
          answer: 'C. Sawah',
          principle: 'Padi adalah tumbuhan budidaya lahan basah yang menjadi produsen khas ekosistem sawah beserta hama tikus serta pemangsanya.',
          solution:
            'Rantai makanan padi $\\rightarrow$ tikus $\\rightarrow$ ular $\\rightarrow$ elang merupakan contoh klasik yang berlangsung di ekosistem sawah.\n- Opsi A, B, dan D bukan habitat budidaya padi.',
          rubric: OK
        },
        {
          label: '40',
          marks: 1,
          prompt:
            'Jika populasi ular punah, maka ....\n\nA. Populasi elang akan meningkat\nB. Populasi padi meningkat\nC. Populasi tikus meningkat\nD. Tidak terjadi apa-apa',
          answer: 'C. Populasi tikus meningkat',
          principle: 'Hilangnya predator pada suatu tingkat trofik menyebabkan populasi mangsanya melonjak dalam jangka pendek.',
          solution:
            'Pada rantai makanan padi $\\rightarrow$ tikus $\\rightarrow$ ular $\\rightarrow$ elang, ular merupakan pemangsa tikus. Jika ular punah, pemangsa tikus berkurang sehingga populasi tikus meningkat tajam.\n- Opsi A keliru karena elang kehilangan sumber makanan (ular) sehingga cenderung menurun.\n- Opsi B keliru karena tikus yang bertambah banyak akan memakan lebih banyak padi sehingga padi menurun.\n- Opsi D keliru karena perubahan satu populasi memengaruhi populasi lain.',
          rubric: OK
        },
        {
          label: '41',
          marks: 1,
          prompt:
            'Makanan tidak cepat busuk di lemari es karena ....\n\nA. Udara bersih\nB. Enzim bakteri tidak bekerja\nC. Cahaya terang\nD. Udara tidak ada',
          answer: 'B. Enzim bakteri tidak bekerja',
          principle: 'Suhu rendah di dalam lemari es memperlambat laju reaksi biokimia dan menonaktifkan sementara kerja enzim mikroorganisme pembusuk.',
          solution:
            'Pembusukan makanan disebabkan oleh aktivitas bakteri dan jamur pengurai yang menggunakan enzim. Suhu dingin di lemari es menghambat kerja enzim bakteri dan memperlambat pembelahan selnya sehingga makanan lebih awet.\n- Opsi A, C, dan D bukan alasan ilmiah utama pengawetan makanan pada suhu rendah (di dalam kulkas masih ada udara dan lampunya padam saat pintu ditutup).',
          rubric: OK
        },
        {
          label: '42',
          marks: 1,
          prompt:
            'Setelah membuat hipotesis dalam metode ilmiah, langkah selanjutnya adalah ....\n\nA. Menyusun laporan\nB. Melakukan pengamatan\nC. Melakukan penelitian\nD. Menyusun kesimpulan',
          answer: 'C. Melakukan penelitian',
          principle: 'Tahapan metode ilmiah berurutan dari observasi $\\rightarrow$ perumusan masalah $\\rightarrow$ hipotesis $\\rightarrow$ eksperimen/penelitian $\\rightarrow$ analisis data $\\rightarrow$ kesimpulan.',
          solution:
            'Hipotesis adalah dugaan sementara yang harus diuji kebenarannya melalui percobaan atau penelitian untuk mengumpulkan data empiris.\n- Opsi B (Pengamatan awal) dilakukan sebelum merumuskan hipotesis.\n- Opsi D (Kesimpulan) dan A (Laporan) disusun setelah data penelitian dianalisis.',
          rubric: OK
        },
        {
          label: '43',
          marks: 1,
          prompt:
            'Fungsi sirip pada ikan hiu adalah ....\n\nA. Mencari makanan\nB. Menangkap mangsa\nC. Menjaga keseimbangan\nD. Melindungi tubuh',
          answer: 'C. Menjaga keseimbangan',
          principle: 'Sirip berpasangan dan sirip punggung ikan berperan menstabilkan posisi tubuh serta menjaga keseimbangan dan arah saat berenang di air.',
          solution:
            'Sirip dada, sirip perut, dan sirip punggung pada hiu berfungsi menjaga keseimbangan tubuh, mencegah badan terguling, dan membantu bermanuver di dalam air.\n- Opsi A dan B dilakukan dengan indra penciuman, gurat sisi, elektroreseptor, dan rahang.\n- Opsi D dijalankan oleh sisik plakoid pada kulit hiu.',
          rubric: OK
        },
        {
          label: '44',
          marks: 1,
          prompt:
            'Hewan laut yang tidak bernapas dengan insang adalah ....\n\nA. Ikan pari\nB. Paus\nC. Ikan hiu\nD. Anjing laut',
          answer: 'B. Paus atau D. Anjing laut',
          principle: 'Mamalia laut seperti paus (Cetacea) dan anjing laut (Pinnipedia) bernapas dengan paru-paru dan muncul ke permukaan untuk mengambil oksigen, bukan dengan insang seperti ikan.',
          solution:
            'Baik **paus** (opsi B) maupun **anjing laut** (opsi D) merupakan mamalia laut yang bernapas menggunakan paru-paru, bukan insang.\n- Opsi A (Ikan pari) dan C (Ikan hiu) adalah ikan bertulang rawan (Chondrichthyes) yang bernapas dengan insang.\n*(Catatan: pada naskah sumber hanya dicantumkan D sebagai kunci jawaban, padahal opsi B juga memenuhi pernyataan soal secara ilmiah.)*',
          rubric: OK
        },
        {
          label: '45',
          marks: 1,
          prompt:
            'Darah kaya oksigen terdapat di ....\n\nA. Vena cava\nB. Vena pulmonalis\nC. Arteri renalis\nD. Arteri pulmonalis',
          answer: 'B. Vena pulmonalis atau C. Arteri renalis',
          principle: 'Vena pulmonalis membawa darah kaya oksigen dari paru-paru ke serambi kiri jantung, sedangkan arteri sistemik (termasuk arteri renalis menuju ginjal) mengalirkan darah kaya oksigen dari aorta ke seluruh tubuh.',
          solution:
            'Mari periksa kandungan oksigen darah pada keempat pembuluh tersebut:\n- **Vena pulmonalis (B)**: mengangkut darah kaya oksigen dari paru-paru menuju atrium kiri jantung.\n- **Arteri renalis (C)**: cabang dari aorta yang membawa darah kaya oksigen menuju ginjal.\n- **Vena cava (A)** dan **Arteri pulmonalis (D)**: keduanya membawa darah miskin oksigen (kaya $\\text{CO}_2$).\n*(Catatan: naskah sumber hanya menuliskan kunci C, padahal opsi B juga secara anatomis membawa darah kaya oksigen.)*',
          rubric: OK
        },
        {
          label: '46',
          marks: 1,
          prompt:
            'Glukosa diserap di ..., dan protein pertama dicerna di ....\n\nA. Usus halus, lambung\nB. Usus besar, usus halus\nC. Lambung, mulut\nD. Lambung, usus halus',
          answer: 'A. Usus halus, lambung',
          principle: 'Penyerapan sari makanan (seperti glukosa) terjadi di vili usus halus, sedangkan pencernaan kimiawi protein dimulai di lambung oleh enzim pepsin.',
          solution:
            'Glukosa hasil pemecahan karbohidrat diserap ke kapiler darah di dinding usus halus. Sementara itu, pencernaan kimiawi protein pertama kali dimulai di lambung dengan bantuan asam klorida ($\\text{HCl}$) dan enzim pepsin yang memecah protein menjadi pepton.\n- Opsi B, C, dan D salah menempatkan lokasi penyerapan glukosa maupun awal pencernaan protein.',
          rubric: OK
        },
        {
          label: '47',
          marks: 1,
          prompt:
            'Enzim pada kantung semar untuk mencerna serangga adalah ....\n\nA. Lipase\nB. Amilase\nC. Protease\nD. Tripsin',
          answer: 'C. Protease',
          principle: 'Tumbuhan pemakan serangga seperti kantung semar (*Nepenthes*) menyekresikan enzim protease (seperti nepenthesin) untuk memecah protein mangsa guna memperoleh nitrogen.',
          solution:
            'Cairan pencerna di dasar kantung semar mengandung enzim protease yang berfungsi menguraikan protein tubuh serangga menjadi peptida dan asam amino sehingga nitrogennya dapat diserap.\n- Opsi A (Lipase) memecah lemak dan Opsi B (Amilase) memecah pati.\n- Opsi D (Tripsin) adalah jenis protease spesifik yang dihasilkan oleh pankreas hewan, bukan oleh tumbuhan kantung semar.',
          rubric: OK
        },
        {
          label: '48',
          marks: 1,
          prompt:
            'Tujuan kantung semar mencerna serangga adalah untuk ....\n\nA. Menyerap cahaya\nB. Menangkap air\nC. Menyerap nutrisi\nD. Menyimpan udara',
          answer: 'C. Menyerap nutrisi',
          principle: 'Tumbuhan insektivora hidup di tanah rawa atau gambut yang miskin unsur hara nitrogen, sehingga memerangkap serangga untuk melengkapi kebutuhan nutrisinya.',
          solution:
            'Kantung semar tetap berfotosintesis menggunakan daunnya, tetapi habitatnya miskin mineral terutama nitrogen. Mencerna serangga bertujuan untuk menyerap nutrisi (nitrogen dan fosfor) dari tubuh serangga.\n- Opsi A, B, dan D bukan tujuan pencernaan serangga pada kantung semar.',
          rubric: OK
        },
        {
          label: '49',
          marks: 1,
          prompt:
            'Infeksi ginjal dapat terjadi melalui jalur berikut ini ....\n\nA. Ginjal → Ureter → Kandung kemih → Uretra\nB. Kandung kemih → Ginjal → Uretra → Ureter\nC. Uretra → Kandung kemih → Ureter → Ginjal\nD. Ureter → Kandung kemih → Uretra → Ginjal',
          answer: 'C. Uretra → Kandung kemih → Ureter → Ginjal',
          principle: 'Infeksi saluran kemih asendens berawal dari masuknya patogen melalui muara luar (uretra) lalu naik berlawanan dengan arah aliran urine menuju ginjal.',
          solution:
            'Aliran normal urine berjalan dari ginjal $\\rightarrow$ ureter $\\rightarrow$ kandung kemih $\\rightarrow$ uretra. Oleh karena itu, bakteri dari luar tubuh naik menyebabkan infeksi ginjal melalui jalur sebaliknya: uretra $\\rightarrow$ kandung kemih $\\rightarrow$ ureter $\\rightarrow$ ginjal.\n- Opsi A adalah arah keluarnya urine, bukan arah naiknya infeksi dari luar.\n- Opsi B dan D tidak sesuai urutan anatomi saluran kemih.',
          rubric: OK
        },
        {
          label: '50',
          marks: 1,
          prompt:
            'Rute bakteri dari luar menuju ginjal adalah ....\n\nA. Kandung kemih → Uretra → Ureter → Ginjal\nB. Uretra → Kandung kemih → Ureter → Ginjal\nC. Ureter → Kandung kemih → Ginjal → Uretra\nD. Ginjal → Uretra → Kandung kemih → Ureter',
          answer: 'B. Uretra → Kandung kemih → Ureter → Ginjal',
          principle: 'Bakteri memasuki saluran kemih melalui lubang luar uretra, berkembang di kandung kemih, lalu naik melalui ureter menuju ginjal.',
          solution:
            'Urutan anatomi saluran kemih dari bagian paling luar menuju ke dalam adalah uretra $\\rightarrow$ kandung kemih $\\rightarrow$ ureter $\\rightarrow$ ginjal. Dengan demikian, rute bakteri dari luar tubuh ke ginjal mengikuti urutan pada opsi B.\n- Opsi A, C, dan D menukar urutan organ saluran kemih.',
          rubric: OK
        },
        {
          label: '51',
          marks: 1,
          prompt:
            'Produksi Omega 3 sebagai suplai makanan penting bagi perkembangan otak secara massal dapat memanfaatkan teknik bioteknologi ....\n\nA. Kloning\nB. Fermentasi\nC. Kultur jaringan\nD. Radiasi isotop',
          answer: 'B. Fermentasi',
          principle: 'Asam lemak Omega-3 (seperti DHA dan EPA) dapat diproduksi secara massal dalam bioreaktor melalui fermentasi mikroalga atau mikroorganisme laut.',
          solution:
            'Produksi Omega-3 skala industri memanfaatkan teknik fermentasi mikroalga (misalnya *Schizochytrium*) di dalam tangki bioreaktor terkontrol, sehingga menghasilkan minyak kaya DHA secara cepat dan berkelanjutan tanpa bergantung penuh pada penangkapan ikan.\n- Opsi A (Kloning) menggandakan individu identik.\n- Opsi C (Kultur jaringan) memperbanyak jaringan tumbuhan secara in vitro.\n- Opsi D (Radiasi isotop) bukan teknik produksi massal senyawa pangan Omega-3.',
          rubric: OK
        },
        {
          label: '52',
          marks: 1,
          prompt:
            'Manakah metodologi bioteknologi berikut yang dapat diaplikasikan dalam pengobatan COVID-19?\n1. Hibridoma\n2. Radiasi Isotop\n3. Teknologi plasmid\n4. Kultur sel punca\n\nA. 1 dan 2\nB. 1, 3, dan 4\nC. 2 dan 3\nD. Semua benar',
          answer: 'B. 1, 3, dan 4',
          principle: 'Penanganan COVID-19 memanfaatkan antibodi monoklonal (hibridoma), protein/vaksin rekombinan (teknologi plasmid), serta terapi sel punca untuk memperbaiki kerusakan paru-paru dan meredam badai sitokin.',
          solution:
            'Tinjau masing-masing teknik bioteknologi:\n- **(1) Hibridoma**: menghasilkan antibodi monoklonal untuk terapi penetralan virus SARS-CoV-2.\n- **(2) Radiasi isotop**: tidak digunakan sebagai terapi bioteknologi pengobatan COVID-19 (lebih banyak untuk sterilisasi alat medis atau radioterapi kanker).\n- **(3) Teknologi plasmid**: digunakan dalam pembuatan vaksin rekombinan/DNA serta produksi protein antigen dan antibodi.\n- **(4) Kultur sel punca**: digunakan dalam terapi regenerasi jaringan paru-paru dan pengendalian peradangan berat (badai sitokin) pada pasien kritis.\nJadi pernyataan yang benar adalah 1, 3, dan 4.',
          rubric: OK
        },
        {
          label: '53',
          marks: 1,
          prompt:
            'Fungsi klorofil dalam fotosintesis adalah ....\n\nA. Menyerap karbon dioksida\nB. Mengikat oksigen\nC. Menangkap cahaya matahari\nD. Menghasilkan glukosa',
          answer: 'C. Menangkap cahaya matahari',
          principle: 'Klorofil adalah pigmen hijau daun di dalam kloroplas yang menyerap energi foton cahaya matahari untuk menggerakkan reaksi terang fotosintesis.',
          solution:
            'Dalam fotosintesis, klorofil berfungsi menangkap energi cahaya matahari (terutama panjang gelombang merah dan biru) untuk diubah menjadi energi kimia.\n- Opsi A keliru karena $\\text{CO}_2$ masuk melalui stomata dan diikat oleh enzim di stroma (bukan oleh klorofil).\n- Opsi B keliru karena oksigen dilepaskan sebagai hasil samping pemecahan air.\n- Opsi D keliru karena pembentukan glukosa berlangsung melalui rangkaian reaksi gelap (siklus Calvin) di stroma.',
          rubric: OK
        },
        {
          label: '54',
          marks: 1,
          prompt:
            'Pandemi Covid-19 disebabkan oleh virus ....\n\nA. HIV\nB. H1N1\nC. Sars CoV-2\nD. Ebola',
          answer: 'C. Sars CoV-2',
          principle: 'Penyakit COVID-19 (*Coronavirus Disease 2019*) disebabkan oleh virus SARS-CoV-2 (*Severe Acute Respiratory Syndrome Coronavirus 2*).',
          solution:
            'Pandemi COVID-19 disebabkan oleh koronavirus jenis baru bernama SARS-CoV-2.\n- Opsi A (HIV) menyebabkan AIDS.\n- Opsi B (H1N1) menyebabkan influenza/flu babi.\n- Opsi D (Ebola) menyebabkan demam berdarah Ebola.',
          rubric: OK
        },
        {
          label: '55',
          marks: 1,
          prompt:
            'Faktor internal yang memengaruhi pertumbuhan tumbuhan adalah ....\n\nA. Cahaya dan temperatur\nB. Nutrien dan kelembaban\nC. Gen dan hormon\nD. Temperatur dan hormon',
          answer: 'C. Gen dan hormon',
          principle: 'Faktor pertumbuhan tumbuhan dibagi menjadi faktor internal (dari dalam tubuh: gen dan fitohormon) serta faktor eksternal (dari lingkungan: cahaya, suhu, air, hara, dan kelembapan).',
          solution:
            'Gen menentukan sifat bawaan dan potensi ukuran tumbuhan, sedangkan hormon tumbuhan (seperti auksin, giberelin, dan sitokinin) mengatur pembelahan serta pemanjangan sel dari dalam tubuh tumbuhan.\n- Opsi A dan B seluruhnya adalah faktor eksternal (lingkungan).\n- Opsi D mencampurkan faktor eksternal (temperatur) dengan faktor internal (hormon).',
          rubric: OK
        },
        {
          label: '56',
          marks: 1,
          prompt:
            'Senyawa yang dapat langsung diserap oleh kapiler usus halus manusia adalah ....\n\nA. Protein\nB. Lemak\nC. Glukosa\nD. Polisakarida',
          answer: 'C. Glukosa',
          principle: 'Hanya molekul hasil pencernaan berukuran kecil dan larut air (monosakarida seperti glukosa dan asam amino) yang dapat diserap langsung ke kapiler darah usus halus.',
          solution:
            'Glukosa merupakan monosakarida sederhana yang larut dalam air sehingga dapat langsung diserap oleh sel epitel vili usus halus menuju kapiler darah.\n- Opsi A (Protein), B (Lemak), dan D (Polisakarida) masih berupa makromolekul besar yang harus dicerna lebih lanjut (dan produk lemak berupa asam lemak diserap lewat pembuluh kil/limfa, bukan langsung ke kapiler darah).',
          rubric: OK
        },
        {
          label: '57',
          marks: 1,
          prompt:
            'Tumbuhan dengan fase sporofit yang tidak dominan adalah ....\n\nA. Pakis\nB. Paku ekor kuda\nC. Lumut tanduk\nD. Angiospermae',
          answer: 'C. Lumut tanduk',
          principle: 'Pada kelompok lumut (Bryophyta), fase gametofit ($n$) bersifat dominan dan berumur panjang, sedangkan fase sporofit ($2n$) bersifat tidak dominan dan menumpang pada gametofit.',
          solution:
            'Lumut tanduk termasuk tumbuhan lumut (Bryophyta) yang kehidupan sehari-harinya didominasi oleh fase gametofit hijau yang berfotosintesis; fase sporofitnya tumbuh menempel di atas gametofit untuk menghasilkan spora.\n- Opsi A (Pakis), B (Paku ekor kuda), dan D (Angiospermae) semuanya memiliki fase sporofit yang dominan.',
          rubric: OK
        },
        {
          label: '58',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-58.webp',
              alt: 'Penampang melintang akar tumbuhan dengan lima bagian berlabel angka 1 sampai 5 dari luar ke pusat.',
              caption: 'Penampang melintang akar tumbuhan dengan bagian berlabel 1 hingga 5.'
            }
          ],
          prompt:
            'Bagian yang menunjukkan pembuluh kayu, pembuluh tapis, dan endodermis secara berurutan adalah ....\n\nA. 1, 2, 3\nB. 5, 4, 2\nC. 4, 3, 2\nD. 5, 3, 2',
          answer: 'B. 5, 4, 2',
          principle: 'Pada akar dikotil dari luar ke dalam terdapat epidermis, korteks (1), endodermis (2), perisikel (3), floem/pembuluh tapis di antara lengan bintang (4), dan xilem/pembuluh kayu berbentuk bintang di pusat (5).',
          solution:
            'Mengamati penampang melintang akar dikotil dari bagian paling dalam ke luar:\n- **Nomor 5**: struktur berbentuk bintang di pusat akar adalah **xilem (pembuluh kayu)**.\n- **Nomor 4**: jaringan di antara lengan xilem di dalam silinder pusat adalah **floem (pembuluh tapis)**.\n- **Nomor 3**: lapisan terluar silinder pusat adalah perisikel.\n- **Nomor 2**: lapisan pembatas antara korteks dan silinder pusat adalah **endodermis**.\n- **Nomor 1**: lapisan sel berdinding tipis pengisi bagian luar adalah korteks.\nJadi urutan pembuluh kayu, pembuluh tapis, dan endodermis adalah 5, 4, dan 2.',
          rubric: OK
        },
        {
          label: '59',
          marks: 1,
          prompt:
            'Nitrogen digunakan oleh tumbuhan untuk membuat senyawa ....\n\nA. Lemak dan glukosa\nB. Enzim dan vitamin\nC. Asam nukleat, klorofil, dan protein\nD. Hormon dan lipid',
          answer: 'C. Asam nukleat, klorofil, dan protein',
          principle: 'Unsur nitrogen ($\\text{N}$) merupakan penyusun penting basa nitrogen pada asam nukleat, cincin porfirin pada klorofil, dan gugus amina pada asam amino pembentuk protein.',
          solution:
            'Tumbuhan menyerap nitrogen dalam bentuk ion nitrat ($\\text{NO}_3^-$) dan amonium ($\\text{NH}_4^+$) untuk menyusun asam amino/protein, asam nukleat (DNA dan RNA), serta molekul klorofil.\n- Opsi A dan D memuat lemak/lipid serta glukosa yang hanya tersusun atas $\\text{C}$, $\\text{H}$, dan $\\text{O}$ tanpa atom nitrogen.\n- Opsi B tidak selengkap dan seakurat opsi C karena tidak semua vitamin mengandung nitrogen.',
          rubric: OK
        },
        {
          label: '60',
          marks: 1,
          prompt:
            'Pencegahan penyakit akibat virus atau bakteri dapat dilakukan melalui ....\n\nA. Transfusi darah\nB. Vaksin\nC. Obat herbal\nD. Terapi hormon',
          answer: 'B. Vaksin',
          principle: 'Vaksinasi merangsang sistem imun membentuk antibodi dan sel memori spesifik sebelum tubuh terpapar patogen virus atau bakteri yang sesungguhnya.',
          solution:
            'Vaksin berisi patogen yang dilemahkan, dimatikan, atau bagian antigennya untuk melatih sistem kekebalan tubuh mencegah infeksi virus (seperti campak dan polio) maupun bakteri (seperti difteri dan tetanus).\n- Opsi A, C, dan D bukan metode imunisasi spesifik pencegahan infeksi virus atau bakteri.',
          rubric: OK
        },
        {
          label: '61',
          marks: 1,
          prompt:
            'Makhluk hidup yang memiliki spora, hifa, dan bersel satu atau banyak termasuk dalam kingdom ....\n\nA. Plantae\nB. Protista\nC. Fungi\nD. Monera',
          answer: 'C. Fungi',
          principle: 'Ciri khas kingdom Fungi (jamur) meliputi reproduksi dengan spora, struktur tubuh berupa benang hifa pada jenis multiseluler, serta adanya anggota uniseluler (seperti ragi).',
          solution:
            'Kingdom Fungi mencakup jamur uniseluler (seperti ragi *Saccharomyces*) maupun multiseluler yang tubuhnya tersusun atas benang-benang hifa (membentuk miselium) dan berkembang biak menggunakan spora.\n- Opsi A (Plantae) semuanya multiseluler berklorofil tanpa hifa.\n- Opsi B (Protista) dan D (Monera/prokariota) tidak memiliki hifa jamur sejati.',
          rubric: OK
        },
        {
          label: '62',
          marks: 1,
          prompt:
            'Mengapa para ilmuwan menggunakan metode ilmiah?\n\nA. Untuk membuat penemuan lebih cepat\nB. Agar ide mereka diterima masyarakat\nC. Untuk mendapatkan jawaban akurat berdasarkan bukti\nD. Supaya eksperimen lebih mudah',
          answer: 'C. Untuk mendapatkan jawaban akurat berdasarkan bukti',
          principle: 'Metode ilmiah merupakan prosedur sistematis dan objektif untuk menguji hipotesis dengan data empiris agar menghasilkan kesimpulan yang dapat dipertanggungjawabkan.',
          solution:
            'Ilmuwan menerapkan metode ilmiah agar setiap kesimpulan dan jawaban atas permasalahan alam didasarkan pada pengamatan, eksperimen yang terkontrol, serta bukti objektif yang dapat diuji ulang.\n- Opsi A, B, dan D bukan tujuan utama metode ilmiah dalam sains.',
          rubric: OK
        },
        {
          label: '63',
          marks: 1,
          prompt:
            'Gigi bungsu biasanya tumbuh pada usia .... tahun\n\nA. 5–10\nB. 11–16\nC. 17–30\nD. 31–40',
          answer: 'C. 17–30',
          principle: 'Gigi bungsu (geraham ketiga) merupakan gigi permanen terakhir yang mengalami erupsi pada akhir masa remaja hingga dewasa muda.',
          solution:
            'Gigi bungsu (molar ketiga) umumnya mulai tumbuh pada rentang usia $17\\text{--}25$ tahun atau dalam kisaran $17\\text{--}30$ tahun.\n- Opsi A ($5\\text{--}10$ tahun) adalah masa pergantian gigi susu.\n- Opsi B ($11\\text{--}16$ tahun) adalah masa pertumbuhan gigi geraham kedua.\n- Opsi D ($31\\text{--}40$ tahun) melewati rentang usia normal tumbuhnya gigi bungsu.',
          rubric: OK
        },
        {
          label: '64',
          marks: 1,
          prompt:
            'Lemak dari daging diurai di ....\n\nA. Lambung\nB. Usus besar\nC. Usus halus bagian ileum\nD. Usus 12 jari',
          answer: 'D. Usus 12 jari',
          principle: 'Pencernaan kimiawi lemak secara utama berlangsung di usus dua belas jari (duodenum) melalui emulsi oleh garam empedu dan hidrolisis oleh enzim lipase pankreas.',
          solution:
            'Lemak dari daging baru diurai secara efektif di usus dua belas jari (duodenum), tempat bermuaranya cairan empedu (mengemulsikan tetes lemak) dan getah pankreas yang mengandung enzim lipase (mengubah lemak menjadi asam lemak dan gliserol).\n- Opsi A (Lambung) terutama mencerna protein.\n- Opsi B (Usus besar) menyerap air dan mineral.\n- Opsi C (Ileum) terutama tempat penyerapan sari makanan, bukan lokasi utama pencernaan awal lemak.',
          rubric: OK
        },
        {
          label: '65',
          marks: 1,
          prompt:
            'Jika menemukan ide atau gagasan, yang sebaiknya dilakukan seorang saintis adalah ....\n\nA. Membagikannya ke media sosial\nB. Menguji dengan percobaan\nC. Menyimpannya sendiri\nD. Mencari pendapat teman',
          answer: 'B. Menguji dengan percobaan',
          principle: 'Sikap ilmiah menuntut pembuktian gagasan atau hipotesis melalui penyelidikan dan percobaan yang terkontrol.',
          solution:
            'Seorang saintis menguji ide atau hipotesisnya dengan melakukan percobaan agar diperoleh data nyata yang membuktikan apakah gagasan tersebut benar atau perlu diperbaiki.\n- Opsi A, C, dan D tidak menguji kebenaran ilmiah suatu gagasan.',
          rubric: OK
        },
        {
          label: '66',
          marks: 1,
          prompt:
            'Hewan yang berjemur dan meninggalkan sisik kemungkinan termasuk kelas ....\n\nA. Mamalia\nB. Reptilia\nC. Amfibi\nD. Aves',
          answer: 'B. Reptilia',
          principle: 'Reptilia bersifat berdarah dingin (ektoterm) sehingga berjemur untuk menghangatkan tubuh, serta memiliki kulit bersisik kering yang dapat mengelupas saat berganti kulit.',
          solution:
            'Perilaku berjemur untuk mengatur suhu tubuh (termoregulasi pada hewan poikiloterm) disertai pelepasan kulit bersisik merupakan ciri khas kelas Reptilia, misalnya ular dan kadal.\n- Opsi A (Mamalia) dan D (Aves) berdarah panas (endoterm) dengan rambut atau bulu.\n- Opsi C (Amfibi) memiliki kulit lembap tanpa sisik.',
          rubric: OK
        },
        {
          label: '68',
          marks: 1,
          prompt:
            'Faktor yang merangsang pelepasan empedu ke usus halus adalah ....\n\nA. Makanan tinggi protein\nB. Makanan tinggi lemak\nC. Makanan manis\nD. Air putih',
          answer: 'B. Makanan tinggi lemak',
          principle: 'Masuknya lemak ke duodenum merangsang sel usus melepaskan hormon kolesistokinin (CCK) yang memicu kantung empedu berkontraksi menyalurkan empedu.',
          solution:
            'Ketika makanan tinggi lemak masuk ke usus dua belas jari, hormon kolesistokinin (CCK) disekresikan dan merangsang kantung empedu berkontraksi melepaskan cairan empedu untuk mengemulsikan lemak agar mudah dicerna lipase.\n- Opsi A, C, dan D tidak menjadi pemicu utama kontraksi kantung empedu.',
          rubric: OK
        },
        {
          label: '69',
          marks: 1,
          prompt:
            'Teknik bioteknologi untuk menggandakan anggrek dengan warna dan corak yang sama adalah ....\n\nA. Kloning\nB. Kultur jaringan\nC. Persilangan\nD. Hibridisasi',
          answer: 'B. Kultur jaringan',
          principle: 'Kultur jaringan memanfaatkan sifat totipotensi sel tumbuhan untuk memperbanyak tanaman dalam jumlah banyak dan sifat identik dengan induknya.',
          solution:
            'Kultur jaringan (*tissue culture*) adalah teknik perbanyakan vegetatif in vitro menggunakan potongan jaringan kecil (eksplan) anggrek pada media steril bernutrisi, sehingga menghasilkan ribuan bibit dengan warna dan corak bunga yang persis sama dengan induknya.\n- Opsi A (Kloning) umumnya merujuk pada kloning sel/embrio hewan.\n- Opsi C dan D menghasilkan keturunan dengan variasi sifat baru, bukan identik.',
          rubric: OK
        },
        {
          label: '70',
          marks: 1,
          prompt:
            'Tanaman dengan tulang daun sejajar dan akar serabut kemungkinan adalah .... dan termasuk kelas ....\n\nA. Zea mays – Monocotyledoneae\nB. Mangifera indica – Dicotyledoneae\nC. Solanum tuberosum – Dicotyledoneae\nD. Musa paradisiaca – Dicotyledoneae',
          answer: 'A. Zea mays – Monocotyledoneae',
          principle: 'Tumbuhan berkeping satu (Monocotyledoneae) dicirikan oleh sistem akar serabut dan pertulangan daun sejajar atau melengkung.',
          solution:
            '*Zea mays* (jagung) memiliki akar serabut dan tulang daun sejajar sehingga termasuk kelas Monocotyledoneae (tumbuhan monokotil).\n- Opsi B (*Mangifera indica*/mangga) dan C (*Solanum tuberosum*/kentang) merupakan dikotil berakar tunggang dan bertulang daun menyirip.\n- Opsi D keliru karena *Musa paradisiaca* (pisang) termasuk kelas Monocotyledoneae, bukan Dicotyledoneae.',
          rubric: OK
        },
        {
          label: '71',
          marks: 1,
          prompt:
            'Ciri paru-paru pada burung adalah ....\n\nA. Elastis\nB. Kaku\nC. Berlapis lendir\nD. Berpori',
          answer: 'B. Kaku',
          principle: 'Paru-paru burung berukuran relatif kecil dan bersifat kaku (tidak mengembang-kempis besar seperti paru-paru mamalia), dibantu kantong udara (pundi-pundi hawa) untuk mengalirkan udara satu arah.',
          solution:
            'Paru-paru burung melekat pada rongga dada dan bersifat kaku sehingga volumenya hampir tidak berubah saat bernapas; fungsi pemompa aliran udara dijalankan oleh kantong-kantong udara (*air sacs*).\n- Opsi A keliru karena paru-paru yang sangat elastis dan mengembang-kempis merupakan ciri mamalia.\n- Opsi C dan D bukan ciri pembeda utama struktur paru-paru burung.',
          rubric: OK
        },
        {
          label: '72',
          marks: 1,
          prompt:
            'Perbedaan arteri pulmonari dengan vena pulmonari adalah ....\n\nA. Arteri tidak memiliki katup\nB. Vena memiliki katup\nC. Arteri pulmonari memiliki katup\nD. Arteri membawa darah kaya oksigen',
          answer: 'C. Arteri pulmonari memiliki katup',
          principle: 'Pangkal arteri pulmonalis dilengkapi katup semilunar pulmonalis untuk mencegah aliran balik ke bilik kanan, sedangkan vena pulmonalis tidak memiliki katup.',
          solution:
            'Berbeda dari kebanyakan pembuluh tubuh, **arteri pulmonalis** memiliki katup semilunar pada pangkalnya (di perbatasan bilik kanan jantung), sedangkan **vena pulmonalis** tidak memiliki katup di sepanjang alirannya menuju serambi kiri.\n- Opsi A dan B keliru untuk pasangan pembuluh pulmonari tersebut.\n- Opsi D keliru karena arteri pulmonari justru membawa darah miskin oksigen menuju paru-paru.',
          rubric: OK
        },
        {
          label: '73',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-73.webp',
              alt: 'Diagram mikroskop cahaya dengan bagian-bagian yang ditandai huruf A hingga K.',
              caption: 'Bagian-bagian mikroskop cahaya berlabel huruf A sampai K.'
            }
          ],
          prompt:
            'Nilai pembesaran mikroskop seperti gambar adalah ....\n\nA. F + G\nB. F x G\nC. F – G\nD. F/G',
          answer: 'B. F x G',
          principle: 'Pembesaran total mikroskop cahaya majemuk adalah hasil kali pembesaran lensa okuler dan pembesaran lensa objektif.',
          solution:
            'Pada gambar mikroskop, huruf **F** menunjuk lensa okuler (dekat mata pengamat) dan huruf **G** menunjuk lensa objektif (dekat meja preparat). Pembesaran bayangan total diperoleh dengan mengalikan kedua perbesaran lensa tersebut:\n$$M_{\\text{total}} = M_{\\text{okuler}} \\times M_{\\text{objektif}} = F \\times G.$$\n- Opsi A, C, dan D tidak sesuai dengan hukum optika perbesaran sistem dua lensa bertingkat.',
          rubric: OK
        },
        {
          label: '74',
          marks: 1,
          prompt:
            'Mengapa mitokondria lebih banyak pada sel otot dibanding sel kulit?\n\nA. Karena otot menghasilkan hormon\nB. Karena kulit butuh cahaya\nC. Karena otot banyak kontraksi dan butuh energi\nD. Karena kulit menghasilkan keringat',
          answer: 'C. Karena otot banyak kontraksi dan butuh energi',
          principle: 'Mitokondria berfungsi menghasilkan energi kimia (ATP) melalui respirasi seluler; sel yang aktif bergerak atau berkontraksi membutuhkan lebih banyak mitokondria.',
          solution:
            'Sel otot terus-menerus melakukan kontraksi dan relaksasi untuk menggerakkan tubuh. Aktivitas mekanis tersebut membutuhkan pasokan energi (ATP) yang sangat besar, sehingga sel otot memiliki jumlah mitokondria jauh lebih banyak dibandingkan sel kulit.\n- Opsi A keliru karena otot bukan kelenjar endokrin penghasil hormon utama.\n- Opsi B dan D tidak menjelaskan perbedaan kebutuhan energi seluler antara otot dan kulit.',
          rubric: OK
        },
        {
          label: '75',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-75.webp',
              alt: 'Diagram piramida ekologi empat tingkat trofik dari dasar ke puncak yaitu Padi, Tikus, Ular, dan Burung Elang.',
              caption: 'Piramida ekologi dengan tingkat trofik Padi, Tikus, Ular, dan Burung Elang.'
            }
          ],
          prompt:
            'Pernyataan benar tentang aliran energi pada piramida ekologi adalah ....\n\nA. Energi terbanyak di puncak piramida\nB. Energi mengalir dari atas ke bawah\nC. Energi mengalir ke atas, paling sedikit di atas\nD. Semua trofik memiliki energi yang sama',
          answer: 'C. Energi mengalir ke atas, paling sedikit di atas',
          principle: 'Energi mengalir satu arah dari produsen di dasar piramida ke tingkat trofik yang lebih tinggi, dan berkurang pada setiap perpindahan (sekitar $10\\%$ diteruskan ke tingkat berikutnya).',
          solution:
            'Pada piramida energi, energi matahari ditangkap oleh produsen (Padi) di bagian dasar, lalu mengalir ke atas menuju konsumen I (Tikus), konsumen II (Ular), dan konsumen puncak (Burung Elang). Karena sebagian besar energi hilang sebagai panas metabolisme di tiap tingkat, jumlah energi yang tersedia semakin ke atas semakin sedikit.\n- Opsi A, B, dan D bertentangan dengan hukum kekekalan dan efisiensi transfer energi ekologi.',
          rubric: OK
        },
        {
          label: '76',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-76.webp',
              alt: 'Ilustrasi perbandingan struktur sel hewan dengan label 1 dan 2 serta sel tumbuhan dengan label 3 dan 4.',
              caption: 'Perbandingan struktur sel hewan (kiri) dan sel tumbuhan (kanan).'
            }
          ],
          prompt:
            'Budi meneteskan air garam pada sel hewan dan tumbuhan. Sel hewan mengerut seluruhnya, sedangkan pada sel tumbuhan hanya bagian dalam sel yang mengerut. Struktur yang menjaga bentuk sel tumbuhan tetap seperti semula adalah nomor …. dan tersusun atas senyawa ….\n\nA. 1; protein\nB. 2; lemak\nC. 4; selulosa\nD. 3; glikogen',
          answer: 'C. 4; selulosa',
          principle: 'Sel tumbuhan memiliki dinding sel kaku di bagian terluar yang tersusun atas polisakarida selulosa, sehingga bentuk luar sel tetap kokoh meski protoplasma di dalamnya mengalami plasmolisis.',
          solution:
            'Pada gambar sel sebelah kanan (sel tumbuhan):\n- **Nomor 4** menunjuk lapisan terluar yang tebal dan kaku, yaitu **dinding sel**, yang tersusun atas **selulosa** sehingga menjaga bentuk luar sel tumbuhan tidak ikut mengerut ketika air keluar akibat osmosis.\n- **Nomor 3** adalah kloroplas.\n- Pada sel hewan (kiri), **nomor 1** adalah sentriol dan **nomor 2** adalah membran sel.\nJadi jawaban yang tepat adalah nomor 4 dan tersusun atas selulosa.',
          rubric: OK
        },
        {
          label: '77',
          marks: 1,
          prompt:
            'Animals which bodies are covered with exoskeleton and appear segmented are classified into … phylum.\n\nA. Mollusca\nB. Chordata\nC. Echinodermata\nD. Arthropoda',
          answer: 'D. Arthropoda',
          principle: 'Filum Arthropoda memiliki ciri khas tubuh bersegmen (beruas-ruas), kaki berbuku-buku, serta rangka luar (eksoskeleton) berbahan kitin.',
          solution:
            'Hewan dengan tubuh bersegmen (*segmented*) dan rangka luar (*exoskeleton*) tergolong ke dalam filum **Arthropoda** (seperti serangga, laba-laba, kelabang, dan krustasea/kepiting).\n- Opsi A (Mollusca) bertubuh lunak dan tidak bersegmen.\n- Opsi B (Chordata) memiliki notokord/tulang belakang internal (endoskeleton).\n- Opsi C (Echinodermata) berkulit duri dengan rangka dalam lempeng kapur dan simetri radial.',
          rubric: OK
        },
        {
          label: '78',
          marks: 1,
          prompt:
            'Bagian dari sistem saraf yang bertanggung jawab untuk mengatur kerja otot rangka adalah ….\n\nA. Sistem saraf otonom\nB. Sistem saraf simpatik\nC. Sistem saraf parasimpatik\nD. Sistem saraf somatik',
          answer: 'D. Sistem saraf somatik',
          principle: 'Sistem saraf tepi dibagi menjadi sistem saraf somatik (mengendalikan gerak sadar otot rangka) dan sistem saraf otonom (mengatur organ dalam secara tidak sadar).',
          solution:
            'Kontraksi otot rangka (otot lurik) berlangsung di bawah kesadaran dan diatur oleh **sistem saraf somatik** yang membawa perintah motorik dari sistem saraf pusat ke otot rangka.\n- Opsi A (Otonom) beserta kedua cabangnya, yaitu B (Simpatik) dan C (Parasimpatik), mengatur aktivitas otot polos, otot jantung, dan kelenjar secara tidak sadar.',
          rubric: OK
        },
        {
          label: '79',
          marks: 1,
          prompt:
            'Which of these statements is not true about fertilization in a fern plant?\n\nA. The sperm swims through water to reach the egg.\nB. Fertilization requires moist conditions.\nC. The sperm is carried by the wind to the egg.\nD. The egg is located in the archegonium.',
          answer: 'C. The sperm is carried by the wind to the egg.',
          principle: 'Fertilisasi pada tumbuhan paku membutuhkan media air karena sel sperma berflagel harus berenang menuju sel telur di dalam arkegonium, bukan dibawa angin.',
          solution:
            'Pada tumbuhan paku (*fern*), gametofit menghasilkan sel telur di dalam arkegonium dan spermatozoid berflagel di dalam anteridium. Spermatozoid berenang melalui lapisan air di lingkungan yang lembap untuk membuahi sel telur, sehingga pernyataan bahwa sperma dibawa oleh angin (*carried by the wind*) adalah salah (*not true*).\n- Opsi A, B, dan D keliru dipilih karena ketiganya merupakan fakta yang benar tentang pembuahan pada tumbuhan paku.',
          rubric: OK
        },
        {
          label: '80',
          marks: 1,
          prompt:
            'Water in lakes can appear to have various colors, such as green, or brown. These colors can be caused by the presence of which microorganism?\n\nA. Amoeba\nB. Euglena\nC. Paramecium\nD. Hydra',
          answer: 'B. Euglena',
          principle: '*Euglena* merupakan protista mikroskopis air tawar yang memiliki kloroplas dan pigmen karotenoid sehingga kelimpahannya dapat mewarnai air danau menjadi hijau atau kecokelatan.',
          solution:
            '*Euglena* hidup melimpah di perairan tawar seperti danau dan kolam serta mengandung pigmen fotosintetik (hijau klorofil maupun pigmen kecokelatan/kemerahan pada kondisi tertentu), sehingga ledakan populasinya memberi warna hijau atau cokelat pada air.\n- Opsi A (*Amoeba*), C (*Paramecium*), dan D (*Hydra*, hewan Cnidaria multiseluler) tidak memiliki pigmen kloroplas pembentuk warna air seperti *Euglena*.',
          rubric: OK
        },
        {
          label: '81',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-81.webp',
              alt: 'Perbandingan dua sel berbentuk bulat dengan inti di tengah, sel A berukuran kecil dan sel B berukuran besar.',
              caption: 'Perbandingan ukuran sel A dan sel B.'
            }
          ],
          prompt:
            'Pernyataan yang tepat tentang perpindahan zat nutrien dan sampah metabolisme antara sel A dan B adalah ....\n\nA. Perpindahan zat pada sel A lebih efektif karena ukuran lebih besar\nB. Perpindahan zat pada sel B lebih efektif karena volumenya kecil\nC. Perpindahan zat pada sel A lebih efektif, karena rasio luas permukaan terhadap volume lebih besar\nD. Perpindahan zat pada sel B lebih efektif karena punya lebih banyak saluran',
          answer: 'C. Perpindahan zat pada sel A lebih efektif, karena rasio luas permukaan terhadap volume lebih besar',
          principle: 'Untuk sel berbentuk bola berjari-jari $r$, rasio luas permukaan terhadap volume adalah $\\frac{4\\pi r^2}{\\frac{4}{3}\\pi r^3} = \\frac{3}{r}$, sehingga sel yang lebih kecil memiliki rasio luas permukaan terhadap volume lebih besar.',
          solution:
            'Pertukaran nutrien dan limbah metabolisme terjadi melintasi membran permukaan sel. Karena sel A berukuran lebih kecil daripada sel B, rasio luas permukaan membran terhadap volume sitoplasma pada sel A lebih besar ($\\frac{3}{r_A} > \\frac{3}{r_B}$) dan jarak difusi ke inti sel lebih pendek, sehingga transpor zat pada sel A jauh lebih efektif.\n- Opsi A keliru menyebut sel A lebih besar.\n- Opsi B keliru menyebut sel B bervolume kecil.\n- Opsi D tidak berdasar pada gambar maupun konsep difusi sel.',
          rubric: OK
        },
        {
          label: '82',
          marks: 1,
          prompt:
            'Pernyataan yang tepat jika seluruh alga dihilangkan dari lumut kerak (lichen) adalah ….\n\nA. Fungi akan tumbuh lebih cepat\nB. Fungi akan menghasilkan oksigen\nC. Fungi akan kehilangan sumber senyawa organik\nD. Fungi akan menjadi autotrof',
          answer: 'C. Fungi akan kehilangan sumber senyawa organik',
          principle: 'Lumut kerak (*lichen*) adalah simbiosis mutualisme antara fungi dan alga/sianobakteri: alga memasok senyawa organik hasil fotosintesis, sementara fungi memberi perlindungan, air, dan mineral.',
          solution:
            'Dalam simbiosis lumut kerak, alga berperan sebagai organisme fotosintetik (autotrof) yang menghasilkan gula/senyawa organik bagi dirinya dan bagi fungi (heterotrof). Jika seluruh alga dihilangkan, fungi kehilangan pemasok utama makanan organiknya.\n- Opsi A, B, dan D keliru karena fungi tidak memiliki klorofil untuk menghasilkan oksigen maupun menjadi autotrof.',
          rubric: OK
        },
        {
          label: '83',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-83.webp',
              alt: 'Diagram Venn tiga himpunan ciri hewan yaitu bernapas dengan insang, bertelur, dan fertilisasi internal dengan wilayah berhuruf A, B, C, dan D.',
              caption: 'Diagram Venn ciri-ciri hewan dengan wilayah irisan A, B, C, dan D.'
            }
          ],
          prompt:
            'Perhatikan diagram venn berikut. Contoh hewan pada posisi B (memiliki eksoskeleton dan tubuh bersegmen) adalah ....\n\nA. Ikan\nB. Cacing tanah\nC. Kepiting\nD. Bintang laut',
          answer: 'C. Kepiting',
          principle: 'Pada diagram Venn, posisi B merupakan irisan ketiga himpunan: bernapas dengan insang, bertelur (ovipar), dan mengalami fertilisasi internal.',
          solution:
            'Wilayah **B** terletak di irisan ketiga lingkaran: bernapas dengan insang, bertelur, serta melakukan fertilisasi internal (yang juga sesuai dengan keterangan arthropoda bercangkang luar dan bersegmen). Di antara pilihan, **kepiting** (Crustacea) bernapas dengan insang, bertelur, melakukan fertilisasi internal, serta memiliki eksoskeleton dan tubuh bersegmen.\n- Opsi A (Ikan) umumnya mengalami fertilisasi eksternal (tidak masuk lingkaran fertilisasi internal).\n- Opsi B (Cacing tanah) bernapas melalui kulit lembap, tidak berinsang.\n- Opsi D (Bintang laut) bernapas melalui papula/kaki tabung dan fertilisasi eksternal.',
          rubric: OK
        },
        {
          label: '84',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-84.webp',
              alt: 'Grafik garis lurus kecepatan terhadap waktu yang naik secara beraturan dari sumbu vertikal ke sudut kanan atas.',
              caption: 'Grafik kecepatan benda $V\\ (\\text{m/s})$ terhadap waktu $t\\ (\\text{s})$.'
            }
          ],
          prompt:
            'Perhatikan grafik kecepatan terhadap waktu. Kecepatan benda pada detik ke-8 adalah ....\n\nA. 8 m/s\nB. 12 m/s\nC. 18 m/s\nD. 24 m/s',
          answer: 'C. 18 m/s',
          principle: 'Pada gerak lurus berubah beraturan (grafik $v\\text{--}t$ berupa garis lurus), percepatan bernilai konstan $a = \\frac{\\Delta v}{\\Delta t}$ dan $v(t) = v_0 + at$.',
          solution:
            'Dari grafik, pada $t = 0\\text{ s}$ kecepatan awal $v_0 = 2\\text{ m/s}$, dan pada $t = 10\\text{ s}$ kecepatannya mencapai $22\\text{ m/s}$. Karena grafik berupa garis lurus, percepatan benda adalah\n$$a = \\frac{22 - 2}{10 - 0} = \\frac{20}{10} = 2\\text{ m/s}^2.$$\nDengan demikian, kecepatan benda pada detik ke-$8$ ($t = 8\\text{ s}$) adalah\n$$v(8) = v_0 + a \\cdot t = 2 + 2 \\times 8 = 2 + 16 = 18\\text{ m/s}.$$\nJadi jawabannya adalah opsi C.',
          rubric: OK
        },
        {
          label: '86',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-86.webp',
              alt: 'Sistem katrol majemuk tersusun vertikal dengan beban W di bagian bawah dan gaya tarik F ke arah bawah.',
              caption: 'Susunan sistem katrol majemuk untuk mengangkat beban $W$.'
            }
          ],
          prompt:
            'Jika beban (W) memiliki berat 2400 N, maka besar gaya minimal yang dibutuhkan untuk mengangkat beban adalah …\n\nA. 600 N\nB. 800 N\nC. 1200 N\nD. 2400 N',
          answer: 'A. 600 N',
          principle: 'Pada sistem katrol majemuk dengan $n$ tali penahan beban (atau empat roda katrol seimbang pada rangkaian blok katrol), keuntungan mekanisnya adalah $KM = n$, sehingga gaya minimal $F = \\frac{W}{KM}$.',
          solution:
            'Gambar menunjukkan rangkaian sistem katrol majemuk yang terdiri atas $4$ katrol ($KM = 4$).\nUntuk mengangkat beban $W = 2{.}400\\text{ N}$, gaya minimal yang diperlukan adalah\n$$F = \\frac{W}{KM} = \\frac{2{.}400\\text{ N}}{4} = 600\\text{ N}.$$\nJadi jawabannya adalah opsi A.',
          rubric: OK
        },
        {
          label: '87',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-87.webp',
              alt: 'Tiga roda gigi A, B, dan C saling bersinggungan dengan panah biru pada pusat roda C mengarah ke antara kotak angka 1 dan 2.',
              caption: 'Susunan roda gigi A, B, dan C dengan penunjuk arah menuju angka 1 atau 2.'
            }
          ],
          prompt:
            'Jika roda A berputar searah jarum jam, maka roda B akan berputar ....\n\nA. Searah jarum jam, menuju angka 2\nB. Berlawanan arah jarum jam, menuju angka 8\nC. Diam\nD. Bergerak acak',
          answer: 'A. Searah jarum jam, menuju angka 2',
          principle: 'Dua roda gigi yang bersinggungan langsung selalu berputar dengan arah yang saling berlawanan.',
          solution:
            'Tinjau arah putar masing-masing roda gigi yang bersinggungan:\n- **Roda A** berputar **searah jarum jam**.\n- Karena **roda B** bersinggungan langsung dengan roda A, roda B berputar **berlawanan arah jarum jam**.\n- Karena **roda C** bersinggungan langsung dengan roda B, roda C kembali berputar **searah jarum jam**, sehingga jarum penunjuk biru pada roda C bergerak ke bawah **menuju angka 2**.\n*(Catatan: pada kalimat soal tertulis "roda B", namun pilihan "searah jarum jam, menuju angka 2" pada opsi A merujuk pada arah gerak roda C beserta panah birunya.)*',
          rubric: OK
        },
        {
          label: '91',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-91.webp',
              alt: 'Dua kereta ditarik gaya F yang sama; Kereta 1 memuat dua kotak X dan satu lingkaran Y, sedangkan Kereta 2 memuat dua kotak X dan dua segitiga Z.',
              caption: 'Muatan Kereta 1 dan Kereta 2 beserta legenda simbol massa $X$, $Y$, dan $Z$.'
            }
          ],
          prompt:
            'Jika kedua kereta mengalami percepatan yang sama, maka pernyataan yang tepat mengenai massa benda adalah …\n\nA. X = Z\nB. Y = 2Z\nC. Y = Z\nD. X = 2Y',
          answer: 'B. Y = 2Z',
          principle: 'Menurut Hukum II Newton ($F = m\\cdot a$), jika dua benda diberi gaya $F$ yang sama dan menghasilkan percepatan $a$ yang sama, maka massa total kedua benda harus sama.',
          solution:
            'Berdasarkan gambar:\n- Massa muatan Kereta 1 adalah $2X + Y$.\n- Massa muatan Kereta 2 adalah $2X + 2Z$.\nKarena kedua kereta (dengan massa kereta kosong identik/diabaikan) ditarik gaya $F$ yang sama dan mengalami percepatan $a$ yang sama, berlaku $m_1 = m_2$:\n$$2X + Y = 2X + 2Z \\implies Y = 2Z.$$\nJadi pernyataan yang tepat adalah opsi B.',
          rubric: OK
        },
        {
          label: '92',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-92.webp',
              alt: 'Bola pada lintasan melengkung dari titik tinggi P menurun melewati titik Q menuju bagian lintasan mendatar.',
              caption: 'Lintasan bola meluncur dari posisi $P$ melewati posisi $Q$.'
            }
          ],
          prompt:
            'Jika bola meluncur tanpa kecepatan awal, maka pernyataan yang benar adalah …\n\nA. Energi potensial selalu lebih besar dari kinetik\nB. Energi kinetik tidak berubah\nC. Energi mekanik benda di titik P dan Q sama besar\nD. Energi hilang saat bergerak',
          answer: 'C. Energi mekanik benda di titik P dan Q sama besar',
          principle: 'Pada lintasan licin tanpa gaya luar nonkonservatif (gesekan diabaikan), berlaku hukum kekekalan energi mekanik: $EM = EP + EK = \\text{konstan}$.',
          solution:
            'Selama bola meluncur di lintasan licin, energi potensial gravitasi berkurang dan berubah seluruhnya menjadi energi kinetik, sehingga jumlah keduanya (energi mekanik) di titik P dan titik Q tetap sama besar ($EM_P = EM_Q$).\n- Opsi A keliru karena di titik bawah energi kinetik dapat lebih besar daripada energi potensial.\n- Opsi B keliru karena kelajuan bertambah saat turun sehingga energi kinetik meningkat.\n- Opsi D keliru karena pada kondisi ideal tanpa gesekan tidak ada energi mekanik yang hilang.',
          rubric: OK
        },
        {
          label: '93',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-93.webp',
              alt: 'Grafik suhu T terhadap kalor Q dengan segmen miring AB, segmen datar BC pada suhu 0, segmen miring CD, dan segmen datar DE pada suhu 100.',
              caption: 'Grafik hubungan suhu $T\\ (^{\\circ}\\text{C})$ terhadap kalor $Q\\ (\\text{kal})$.'
            }
          ],
          prompt:
            'Grafik suhu terhadap kalor menunjukkan perubahan wujud pada tahap ….\n\nA. AB dan CD\nB. BC dan DE\nC. AC dan CE\nD. BD dan EF',
          answer: 'B. BC dan DE',
          principle: 'Selama proses perubahan wujud suatu zat murni, kalor yang diserap digunakan untuk memutus/melemahkan ikatan antarpartikel (kalor laten) sehingga suhu zat tetap konstan (garis mendatar).',
          solution:
            'Pada grafik pemanasan $T$ terhadap $Q$:\n- **Tahap AB**: suhu es naik hingga $0^{\\circ}\\text{C}$ (tidak ada perubahan wujud).\n- **Tahap BC**: garis mendatar pada $0^{\\circ}\\text{C}$, menunjukkan proses perubahan wujud **mencair** (es menjadi air).\n- **Tahap CD**: suhu air naik dari $0^{\\circ}\\text{C}$ ke $100^{\\circ}\\text{C}$.\n- **Tahap DE**: garis mendatar pada $100^{\\circ}\\text{C}$, menunjukkan proses perubahan wujud **menguap/mendidih** (air menjadi uap).\nJadi perubahan wujud ditunjukkan oleh tahap BC dan DE.',
          rubric: OK
        },
        {
          label: '94',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-94.webp',
              alt: 'Dua wadah berisi cairan air dan minyak dengan kubus identik yang mengapung lebih tinggi pada air dibanding pada minyak.',
              caption: 'Posisi dua kubus identik di dalam wadah berisi air dan minyak.'
            }
          ],
          prompt:
            'Dua kubus identik dicelupkan ke dalam air dan minyak. Pernyataan yang tepat adalah ….\n\nA. Massa jenis air lebih kecil dari minyak\nB. Massa jenis minyak lebih besar dari air\nC. Massa jenis minyak lebih kecil dari massa jenis air\nD. Kedua cairan memiliki massa jenis sama',
          answer: 'C. Massa jenis minyak lebih kecil dari massa jenis air',
          principle: 'Untuk benda terapung yang sama, fraksi volume yang tercelup berbanding terbalik dengan massa jenis fluida ($\\frac{V_{\\text{celup}}}{V_{\\text{benda}}} = \\frac{\\rho_{\\text{benda}}}{\\rho_{\\text{fluida}}}$).',
          solution:
            'Terlihat pada gambar bahwa bagian kubus yang tenggelam di dalam minyak lebih besar dibandingkan di dalam air (kubus mengapung lebih tinggi di air). Karena kedua kubus identik, massa jenis fluida yang lebih rapat mampu menopang kubus dengan bagian tercelup lebih sedikit. Oleh sebab itu, $\\rho_{\\text{minyak}} < \\rho_{\\text{air}}$.\n- Opsi A, B, dan D bertentangan dengan pengamatan tinggi tercelupnya kubus pada gambar.',
          rubric: OK
        },
        {
          label: '95',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-95.webp',
              alt: 'Diagram segitiga perubahan wujud antara Padat, Cair, dan Gas yang dihubungkan oleh enam panah bernomor 1 hingga 6.',
              caption: 'Diagram perubahan wujud zat beserta panah bernomor 1 sampai 6.'
            }
          ],
          prompt:
            'Proses perubahan wujud yang melepaskan kalor terjadi pada ….\n\nA. 1, 3, dan 5\nB. 2, 4, dan 6\nC. 3, 4, dan 6\nD. 1, 2, dan 5',
          answer: 'B. 2, 4, dan 6',
          principle: 'Perubahan wujud menuju keadaan partikel yang lebih rapat/teratur (membeku, mengembun, dan mengkristal/deposisi) melepaskan kalor ke lingkungan.',
          solution:
            'Identifikasi setiap panah pada diagram:\n- **1** (Padat $\\rightarrow$ Gas): menyublim (menyerap kalor).\n- **2** (Gas $\\rightarrow$ Padat): mengkristal/deposisi (**melepaskan kalor**).\n- **3** (Cair $\\rightarrow$ Gas): menguap (menyerap kalor).\n- **4** (Gas $\\rightarrow$ Cair): mengembun (**melepaskan kalor**).\n- **5** (Padat $\\rightarrow$ Cair): mencair (menyerap kalor).\n- **6** (Cair $\\rightarrow$ Padat): membeku (**melepaskan kalor**).\nJadi proses yang melepaskan kalor ditunjukkan oleh nomor 2, 4, dan 6.',
          rubric: OK
        },
        {
          label: '96',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-sd-2025/fig-96.webp',
              alt: 'Dua tabung reaksi berlabel (i) Air dan (ii) Raksa yang memperlihatkan bentuk lengkungan permukaan cairan yang saling berkebalikan.',
              caption: 'Bentuk permukaan cairan Air (i) dan Raksa (ii) di dalam tabung reaksi kaca.'
            }
          ],
          prompt:
            'Dua cairan (air dan raksa) dalam tabung reaksi menunjukkan meniskus yang berbeda. Nama fenomena dan alasannya adalah ....\n\nA. Meniskus cembung, kohesi > adhesi\nB. Meniskus cekung, adhesi > kohesi (gambar 1); meniskus cembung, kohesi > adhesi (gambar 2)\nC. Meniskus cekung, kohesi > adhesi\nD. Meniskus cembung pada air',
          answer: 'B. Meniskus cekung, adhesi > kohesi (gambar 1); meniskus cembung, kohesi > adhesi (gambar 2)',
          principle: 'Meniskus cekung terbentuk saat gaya adhesi (tarikan molekul cairan–dinding kaca) lebih besar dari kohesi, sedangkan meniskus cembung terbentuk saat gaya kohesi antarpartikel cairan lebih besar dari adhesi.',
          solution:
            'Pada gambar (i), permukaan air melengkung ke bawah (**meniskus cekung**) karena gaya adhesi antara molekul air dan dinding kaca lebih kuat daripada gaya kohesi antarmolekul air. Pada gambar (ii), permukaan raksa melengkung ke atas (**meniskus cembung**) karena gaya kohesi antaratom raksa jauh lebih kuat daripada gaya adhesinya terhadap kaca.\n- Opsi A, C, dan D tidak lengkap atau membalik hubungan kohesi dan adhesi.',
          rubric: OK
        },
        {
          label: '97',
          marks: 1,
          prompt:
            'Dua hambatan $R_1$ dan $R_2$ dirangkai seri dan paralel. Jika diberikan tegangan sama, maka ....\n\nA. Arus sama besar di seri dan paralel\nB. Arus di seri lebih kecil\nC. Arus di seri lebih besar\nD. Arus di seri sama besar, di paralel terbagi tergantung hambatan',
          answer: 'D. Arus di seri sama besar, di paralel terbagi tergantung hambatan',
          principle: 'Pada rangkaian seri tanpa percabangan, arus pada tiap komponen sama besar ($I_1 = I_2$), sedangkan pada rangkaian paralel tegangan tiap cabang sama sehingga arus terbagi sesuai hukum Ohm ($I_k = V/R_k$).',
          solution:
            'Pada rangkaian seri, hanya ada satu lintasan arus sehingga besar arus yang melewati $R_1$ dan $R_2$ sama besar. Sebaliknya, pada rangkaian paralel, arus utama terbagi ke cabang $R_1$ dan $R_2$ dengan besar masing-masing berbanding terbalik terhadap besar hambatannya ($I_1 = \\frac{V}{R_1}$ dan $I_2 = \\frac{V}{R_2}$).\n- Opsi A dan C keliru secara konsep rangkaian.\n- Opsi B hanya membandingkan arus total rangkaian seri dan paralel secara tidak lengkap dibandingkan penjelasan distribusi arus pada opsi D.',
          rubric: OK
        },
        {
          label: '98',
          marks: 1,
          prompt:
            'Which one of the following statements concerning permanent magnets is false?\n\nA. Permanent magnets have north and south poles\nB. Magnetic fields go from north to south\nC. When a magnet is cut, it forms smaller magnets\nD. When a magnet is cut in half, one piece is north, the other is south',
          answer: 'D. When a magnet is cut in half, one piece is north, the other is south',
          principle: 'Kutub magnet selalu muncul berpasangan (dipol magnetik); memotong magnet permanen menghasilkan magnet-magnet kecil baru yang tetap memiliki kutub utara dan selatan.',
          solution:
            'Setiap magnet tersusun atas jutaan domain magnetik kecil. Jika sebuah magnet dipotong menjadi dua bagian, kedua potongan langsung menjadi magnet utuh yang masing-masing memiliki kutub utara dan kutub selatan sendiri—tidak pernah terpisah menjadi satu potong kutub utara saja dan satu potong kutub selatan saja. Jadi pernyataan D salah (*false*).\n- Opsi A, B, dan C keliru dipilih karena ketiganya merupakan sifat benar magnet permanen (memiliki dua kutub, garis medan di luar magnet mengarah dari utara ke selatan, dan potongan magnet membentuk magnet lebih kecil).',
          rubric: OK
        },
        {
          label: '99',
          marks: 1,
          prompt:
            'Jika $R_1$ dan $R_2$ disusun seri dengan $R_1 = 2\\ \\Omega$ dan tegangan total $12\\text{ V}$ menghasilkan arus $2\\text{ A}$, maka besar hambatan $R_2$ adalah ….\n\nA. $2\\ \\Omega$\nB. $4\\ \\Omega$\nC. $6\\ \\Omega$\nD. $8\\ \\Omega$',
          answer: 'B. $4\\ \\Omega$',
          principle: 'Pada rangkaian seri berlaku $R_{\\text{total}} = R_1 + R_2$, dan menurut hukum Ohm $V = I \\cdot R_{\\text{total}}$.',
          solution:
            'Dari hukum Ohm, hambatan total rangkaian seri adalah\n$$R_{\\text{total}} = \\frac{V}{I} = \\frac{12\\text{ V}}{2\\text{ A}} = 6\\ \\Omega.$$\nKarena $R_1$ dan $R_2$ tersusun seri dengan $R_1 = 2\\ \\Omega$, maka\n$$R_2 = R_{\\text{total}} - R_1 = 6\\ \\Omega - 2\\ \\Omega = 4\\ \\Omega.$$\nJadi jawabannya adalah opsi B.',
          rubric: OK
        },
        {
          label: '100',
          marks: 1,
          prompt:
            'Percobaan elektromagnet dilakukan dengan melilit kawat pada logam. Agar medan magnet lebih besar, maka cara yang tepat adalah ….\n\nA. Menggunakan kawat tipis\nB. Mengurangi jumlah lilitan\nC. Menambah jumlah lilitan\nD. Mengganti logam dengan plastik',
          answer: 'C. Menambah jumlah lilitan',
          principle: 'Kuat medan magnet elektromagnet berbanding lurus dengan jumlah lilitan kawat, kuat arus listrik, serta penggunaan inti besi/feromagnetik.',
          solution:
            'Medan magnet yang dihasilkan oleh kumparan berarus listrik (elektromagnet) semakin kuat apabila jumlah lilitan kawat ditambah, arus listrik diperbesar, atau digunakan inti besi lunak.\n- Opsi A (kawat lebih tipis) memperbesar hambatan sehingga arus mengecil.\n- Opsi B (mengurangi lilitan) melemahkan medan magnet.\n- Opsi D (plastik) adalah bahan nonmagnetik sehingga tidak memperkuat medan magnet seperti inti besi.',
          rubric: OK
        }
      ]
    }
  ]
};
