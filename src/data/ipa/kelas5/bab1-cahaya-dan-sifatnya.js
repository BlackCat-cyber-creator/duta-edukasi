import { bab, soal } from '../author.js';

export default bab({
  grade: 5,
  number: 1,
  slug: 'cahaya-dan-sifatnya',
  title: 'Cahaya dan Alat Optik Sederhana',
  element: 'Gelombang cahaya: sifat-sifat cahaya, penglihatan, dan alat optik sederhana',
  summary: {
    overview: 'Kita dapat melihat buku, pepohonan, dan langit biru karena ada cahaya yang masuk ke mata kita. Bab ini mempelajari lima sifat utama cahaya, pembentukan bayangan pada cermin datar, cekung, dan cembung, bagian-bagian mata serta cara kerja penglihatan, hingga cara menjaga kesehatan mata dan pemanfaatan alat optik sederhana seperti lup, periskop, dan kamera.',
    coreConcepts: [
      'Sifat-Sifat Cahaya: Cahaya memiliki lima sifat utama. Pertama, merambat lurus, tampak pada sorot lampu senter dan terbentuknya bayang-bayang di belakang benda gelap. Kedua, menembus benda bening seperti kaca jendela dan air jernih (berbeda dengan benda buram seperti kertas minyak atau benda gelap seperti kayu). Ketiga, dapat dipantulkan secara teratur oleh permukaan licin seperti cermin, atau memantul baur pada permukaan kasar. Keempat, dapat dibiaskan (dibelokkan) saat melewati dua zat bening berbeda kerapatan, misalnya udara ke air. Kelima, dapat diuraikan menjadi spektrum warna (merah, jingga, kuning, hijau, biru, nila, ungu) seperti pada pelangi.',
      'Cermin Datar, Cekung, dan Cembung: Cermin datar memiliki permukaan rata dan menghasilkan bayangan maya, tegak, sama besar, serta berkebalikan kiri–kanan, dipakai sebagai cermin rias dan pada periskop. Cermin cekung melengkung ke dalam dan mengumpulkan cahaya; bayangannya tegak dan diperbesar bila benda dekat (dipakai cermin rias pembesar, dokter gigi, dan reflektor lampu senter). Cermin cembung melengkung ke luar dan menyebarkan cahaya; bayangannya selalu tegak, maya, dan diperkecil sehingga daerah pandang lebih luas, dipakai pada kaca spion kendaraan dan cermin tikungan jalan.',
      'Bagian Mata dan Cara Kerja Penglihatan: Bagian luar mata melindungi mata: alis menahan keringat, kelopak mata berkedip membasahi bola mata, dan bulu mata menyaring debu. Bagian dalam mata meliputi kornea (selaput bening terluar penerus cahaya), iris (selaput berwarna pengatur pupil), pupil (lubang tempat masuknya cahaya; mengecil saat terang dan membesar saat redup), lensa mata (memfokuskan cahaya agar jatuh tepat di retina), retina (layar penangkap bayangan), dan saraf optik (pengirim sinyal ke otak). Cahaya dari benda masuk melalui kornea → pupil → lensa → retina → saraf optik → otak.',
      'Gangguan dan Menjaga Kesehatan Mata: Gangguan penglihatan yang umum dijumpai antara lain rabun jauh (sulit melihat benda jauh dengan jelas), rabun dekat (sulit melihat benda dekat dengan jelas), dan buta warna. Agar mata tetap sehat, bacalah buku sambil duduk tegak dengan jarak sekitar 30 cm di ruangan yang cukup terang, hindari menatap layar gawai terlalu lama tanpa istirahat, jangan mengucek mata dengan tangan kotor, dan perbanyak makanan kaya vitamin A seperti wortel, bayam, pepaya, dan telur.',
      'Alat Optik Sederhana: Alat optik membantu penglihatan manusia dengan memanfaatkan sifat cahaya. Lup (kaca pembesar) menggunakan satu lensa cembung untuk mengamati benda kecil agar tampak lebih besar dan tegak. Periskop berbentuk tabung dengan dua cermin datar sejajar yang dipasang miring 45° untuk melihat benda di balik penghalang atau di permukaan laut dari kapal selam. Kamera sederhana memiliki lensa pemfokus cahaya, diafragma pengatur banyaknya cahaya seperti pupil mata, dan sensor atau film penangkap gambar seperti retina.'
    ],
    keyFormulas: [
      { label: 'Alur penglihatan pada mata', formula: '\\text{Cahaya} \\to \\text{Kornea} \\to \\text{Pupil} \\to \\text{Lensa} \\to \\text{Retina} \\to \\text{Saraf Optik} \\to \\text{Otak}' },
      { label: 'Cermin pada periskop', formula: '\\text{2 cermin datar sejajar miring } 45^\\circ \\;(\\text{memantulkan cahaya } 90^\\circ)' },
      { label: 'Urutan warna pelangi', formula: '\\text{Cahaya putih} \\to \\text{Me - Ji - Ku - Hi - Bi - Ni - U}' }
    ],
    workedExamples: [
      {
        title: 'Mengidentifikasi sifat pembiasan cahaya',
        problem: 'Saat berenang di kolam berair jernih, kaki kita terlihat lebih pendek dan dasar kolam tampak lebih dangkal daripada sebenarnya. Sifat cahaya apakah yang menyebabkan peristiwa ini?',
        solution: 'Cahaya dari kaki di dalam air keluar menuju udara, yaitu melewati dua zat bening berbeda kerapatan, sehingga arah rambatnya berbelok. Peristiwa pembelokan cahaya tersebut adalah **pembiasan cahaya**.'
      },
      {
        title: 'Memilih jenis cermin di tikungan jalan',
        problem: 'Di sebuah tikungan jalan yang sempit dan tajam sering terjadi tabrakan karena pengendara tidak melihat kendaraan dari arah berlawanan. Jenis cermin apa yang sebaiknya dipasang di tikungan tersebut?',
        solution: 'Sebaiknya dipasang **cermin cembung**, karena bayangan yang terbentuk selalu tegak dan diperkecil sehingga mampu menampilkan area jalan yang jauh lebih luas bagi pengendara.'
      },
      {
        title: 'Cara kerja pupil dan iris di ruang redup',
        problem: 'Siti masuk dari halaman yang sangat terik ke dalam ruangan yang agak gelap. Setelah beberapa saat, matanya mulai dapat melihat benda-benda di ruangan tersebut. Bagaimana mata menyesuaikan cahaya yang masuk?',
        solution: 'Di ruangan yang redup, **iris** akan melebarkan ukuran **pupil** agar cahaya yang masuk ke lensa dan retina lebih banyak, sehingga benda di dalam ruangan tampak lebih jelas.'
      }
    ],
    misconceptions: [
      'Menganggap mata memancarkan sinar ke arah benda agar bisa melihat. Mata sebenarnya menerima cahaya yang dipantulkan benda; tanpa sumber cahaya, mata tidak dapat melihat apa pun.',
      'Mengira pensil di dalam gelas berisi air benar-benar bengkok atau patah. Pensil tetap lurus, hanya cahaya yang keluar dari air dibelokkan (dibiaskan) sebelum sampai ke mata.',
      'Menganggap kaca spion dan cermin tikungan jalan memakai cermin cekung karena cakupannya lebar. Keduanya memakai cermin cembung karena menghasilkan bayangan tegak dan diperkecil sehingga bidang pandang luas.'
    ],
    tutorTip: 'Bandingkan bagian mata dengan kamera agar mudah diingat: pupil mengatur masuknya cahaya seperti diafragma kamera, lensa mata memfokuskan bayangan seperti lensa kamera, dan retina menangkap gambar seperti sensor kamera.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sinar matahari yang masuk melalui celah genting rumah ke dalam ruangan gelap tampak berupa berkas garis lurus. Peristiwa ini membuktikan bahwa cahaya memiliki sifat...',
      options: ['dapat diuraikan', 'merambat lurus', 'dapat dibiaskan', 'menembus benda gelap'],
      answer: 'B',
      hint: 'Amati bentuk berkas sinar yang masuk melalui celah sempit.',
      solution: 'Berkas cahaya matahari dari celah genting terlihat lurus tanpa membelok sendiri di udara seragam. Ini membuktikan cahaya **merambat lurus**. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Benda berikut yang tergolong benda bening sehingga mudah ditembus cahaya dengan jelas adalah...',
      options: ['kaca jendela polos', 'papan kayu jati', 'kertas karton tebal', 'lembaran seng'],
      answer: 'A',
      hint: 'Pilih benda yang memungkinkan kita melihat pemandangan di baliknya dengan jelas.',
      solution: '**Kaca jendela polos** meneruskan hampir seluruh cahaya sehingga benda di baliknya tampak jelas (benda bening). Kayu, karton, dan seng adalah benda gelap yang menghalangi cahaya. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Bagian mata yang berfungsi mengatur besar kecilnya pupil agar jumlah cahaya yang masuk ke mata sesuai kebutuhan adalah...',
      options: ['kornea', 'retina', 'saraf optik', 'iris'],
      answer: 'D',
      hint: 'Bagian ini juga memberi warna pada mata manusia.',
      solution: '**Iris** adalah selaput berwarna yang bekerja memperkecil pupil saat cahaya terang dan melebarkan pupil saat cahaya redup. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Ketika Budi berdiri di depan cermin datar di kamar mandi, sifat bayangan tubuh Budi yang terbentuk adalah...',
      options: [
        'nyata, terbalik, dan diperbesar',
        'maya, tegak, dan diperkecil',
        'maya, tegak, dan sama besar',
        'nyata, tegak, dan sama besar'
      ],
      answer: 'C',
      hint: 'Bandingkan ukuran tubuhmu dengan bayangan saat bercermin di cermin datar.',
      solution: 'Cermin datar selalu menghasilkan bayangan **maya, tegak, dan sama besar** dengan bendanya (serta bertukar posisi kiri dan kanan). Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Alat optik sederhana yang terdiri atas satu lensa cembung untuk mengamati benda-benda kecil agar tampak lebih besar adalah...',
      options: ['lup (kaca pembesar)', 'periskop', 'cermin datar', 'teropong pantul'],
      answer: 'A',
      hint: 'Sering digunakan oleh tukang jam atau siswa saat mengamati bagian bunga.',
      solution: '**Lup (kaca pembesar)** menggunakan sebuah lensa cembung untuk membentuk bayangan tegak dan diperbesar dari benda kecil. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pelangi sering muncul di langit setelah hujan reda saat matahari masih bersinar. Munculnya warna merah hingga ungu pada pelangi menunjukkan bahwa cahaya putih matahari dapat...',
      options: [
        'merambat melewati ruang hampa',
        'membuat bayangan di balik awan',
        'diuraikan menjadi berbagai warna melalui tetesan air hujan',
        'dipantulkan secara baur oleh tanah basah'
      ],
      answer: 'C',
      hint: 'Tetesan air hujan bertindak seperti prisma kecil.',
      solution: 'Tetesan air hujan membiaskan dan menguraikan cahaya putih matahari menjadi spektrum tujuh warna (me-ji-ku-hi-bi-ni-u). Ini menunjukkan sifat cahaya **dapat diuraikan**. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Seorang siswa memasukkan sendok logam ke dalam gelas bening berisi air jernih. Dari samping, sendok tampak seperti patah di perbatasan air dan udara. Sifat cahaya yang menyebabkan kejadian tersebut adalah...',
      options: [
        'pemantulan teratur pada permukaan sendok',
        'penyerapan cahaya oleh dinding gelas',
        'penguraian cahaya menjadi warna pelangi',
        'pembiasan cahaya karena melewati dua medium berbeda kerapatan'
      ],
      answer: 'D',
      hint: 'Cahaya berpindah dari air ke udara sebelum sampai ke mata.',
      solution: 'Cahaya dari bagian sendok di dalam air dibelokkan saat berpindah dari air ke udara (dua medium berbeda kerapatan). Peristiwa ini disebut **pembiasan cahaya**. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Di pertigaan jalan perumahan yang sempit dipasang sebuah cermin bundar besar di tiang agar pengendara dapat melihat kendaraan yang datang dari arah samping. Jenis cermin dan sifat bayangan yang dimanfaatkan adalah...',
      options: [
        'cermin cekung; bayangan terbalik dan diperbesar',
        'cermin cembung; bayangan selalu tegak dan diperkecil sehingga daerah pandang luas',
        'cermin datar; bayangan sama besar dan berjarak sama',
        'cermin cekung; bayangan maya dan sama besar'
      ],
      answer: 'B',
      hint: 'Cermin ini juga digunakan sebagai kaca spion mobil dan motor.',
      solution: 'Cermin di tikungan jalan dan spion kendaraan adalah **cermin cembung** karena selalu menghasilkan bayangan **tegak dan diperkecil**, sehingga area jalan yang terlihat lebih lebar. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Urutan jalannya cahaya pada mata manusia hingga otak dapat mengenali bentuk suatu benda adalah...',
      options: [
        'kornea → pupil → lensa mata → retina → saraf optik → otak',
        'pupil → kornea → retina → lensa mata → saraf optik → otak',
        'kornea → lensa mata → pupil → saraf optik → retina → otak',
        'iris → kornea → lensa mata → retina → pupil → otak'
      ],
      answer: 'A',
      hint: 'Cahaya pertama kali masuk melewati bagian bening paling luar mata, lalu melalui lubang hitam pupil.',
      solution: 'Cahaya masuk melalui **kornea**, melewati lubang **pupil**, difokuskan oleh **lensa mata** ke layar **retina**, lalu impuls dikirim melalui **saraf optik** ke **otak**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Ketika listrik padam di malam hari dan tirai jendela tertutup rapat, kita tidak dapat melihat kursi di dalam kamar meskipun mata terbuka lebar. Penyebabnya adalah...',
      options: [
        'lensa mata berhenti memfokuskan bayangan pada malam hari',
        'udara di ruangan gelap menghalangi gerak pupil',
        'tidak ada cahaya yang dipantulkan oleh kursi menuju ke mata kita',
        'kursi menyerap seluruh bagian retina'
      ],
      answer: 'C',
      hint: 'Kita bisa melihat suatu benda yang bukan sumber cahaya apabila ada cahaya yang memantul darinya.',
      solution: 'Kursi tidak menghasilkan cahaya sendiri. Kita baru dapat melihatnya jika ada cahaya dari luar yang mengenai kursi dan **dipantulkan masuk ke mata**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dita membuat periskop sederhana dari kotak kardus berbentuk tegak dan dua cermin datar untuk melihat pemandangan di balik tembok. Agar cahaya dari luar masuk dari lubang atas dan memantul tepat ke mata Dita di lubang bawah, kedua cermin datar harus dipasang...',
      options: [
        'tegak lurus satu sama lain di bagian tengah tabung',
        'mendatar sejajar lantai di bagian atas dan bawah',
        'berhadapan pada jarak dekat dengan sudut sembarang',
        'sejajar dengan kemiringan 45° menghadap lubang masuk dan lubang pengintip'
      ],
      answer: 'D',
      hint: 'Cahaya datang mendatar harus dibelokkan 90° ke bawah, lalu dibelokkan 90° lagi ke arah mata.',
      solution: 'Dua cermin datar pada periskop dipasang **sejajar dan miring 45°**: cermin atas membelokkan cahaya mendatar 90° ke bawah, dan cermin bawah membelokkannya 90° mendatar ke mata pengamat. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Raka menyinari cermin datar dan tembok putih yang permukaannya agak kasar menggunakan lampu ruangan. Raka dapat melihat bayangan wajahnya dengan jelas di cermin, tetapi tidak di tembok. Penjelasan yang paling tepat adalah...',
      options: [
        'tembok membiaskan semua cahaya ke dalam dinding',
        'permukaan tembok tidak rata sehingga memantulkan cahaya ke segala arah (pemantulan baur)',
        'tembok menyerap cahaya dan memancarkannya kembali sebagai bunyi',
        'cermin hanya memantulkan cahaya dari jarak jauh saja'
      ],
      answer: 'B',
      hint: 'Bandingkan kehalusan permukaan cermin dan tembok.',
      solution: 'Permukaan cermin sangat rata sehingga terjadi **pemantulan teratur** yang membentuk bayangan jelas. Tembok yang kasar memantulkan cahaya ke segala arah (**pemantulan baur**), sehingga bayangan wajah tidak terbentuk. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Lampu senter menggunakan cermin lengkung di belakang bohlamnya agar cahaya berkumpul dan menyorot jauh ke depan, sedangkan kaca spion mobil memakai cermin lengkung lain agar bidang pandang lebar. Jenis cermin pada lampu senter dan kaca spion secara berturut-turut adalah...',
      options: [
        'cermin cekung dan cermin cembung',
        'cermin cembung dan cermin cekung',
        'cermin datar dan cermin cekung',
        'cermin cembung dan cermin datar'
      ],
      answer: 'A',
      hint: 'Cermin yang mengumpulkan sinar bersifat cekung, sedangkan yang menyebarkan sinar bersifat cembung.',
      solution: 'Reflektor lampu senter memakai **cermin cekung** untuk mengarahkan dan mengumpulkan sinar ke depan, sedangkan spion memakai **cermin cembung** agar daerah pandangan luas. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Ani mengamati pupil mata kucing peliharaannya: saat berada di halaman siang hari yang terik celah pupilnya menyempit tajam, tetapi saat di dalam kamar redup pupilnya membesar lebar. Manfaat perubahan ukuran pupil tersebut adalah...',
      options: [
        'mengubah warna mata agar sesuai warna lingkungan',
        'membuat lensa mata berubah menjadi cermin datar',
        'membatasi cahaya berlebih saat terang dan memasukkan cukup cahaya saat redup agar penglihatan tetap jelas serta retina aman',
        'memperbesar ukuran benda jauh agar tampak dekat'
      ],
      answer: 'C',
      hint: 'Pikirkan apa akibatnya jika terlalu banyak cahaya terang masuk ke retina atau terlalu sedikit cahaya saat gelap.',
      solution: 'Pupil menyempit saat sangat terang agar retina tidak silau atau rusak oleh cahaya berlebih, dan melebar saat redup agar lebih banyak cahaya masuk sehingga tetap dapat melihat. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Budi sering membaca komik dengan jarak sangat dekat sambil berbaring di kamar yang lampunya redup. Kebiasaan ini membuat matanya cepat perih dan buram saat melihat papan tulis di kelas. Cara memperbaiki kebiasaan Budi agar kesehatan matanya terjaga adalah...',
      options: [
        'tetap berbaring namun mengganti buku dengan layar ponsel bercahaya redup',
        'membaca sambil duduk tegak dengan jarak sekitar 30 cm di tempat bercahaya cukup terang dan mengistirahatkan mata secara berkala',
        'mengucek mata berulang kali setiap kali tulisan tampak kabur',
        'menutup satu mata secara bergantian saat membaca di tempat gelap'
      ],
      answer: 'B',
      hint: 'Perhatikan posisi tubuh, jarak membaca ideal, dan pencahayaan.',
      solution: 'Posisi duduk tegak, jarak baca aman sekitar 30 cm, pencahayaan yang cukup terang, serta istirahat mata secara berkala membantu menjaga kerja lensa mata dan mencegah kelelahan mata. Jawaban: **B**.'
    })
  ]
});
