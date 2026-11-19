import { bab, dasar, sedang, tantangan } from '../author.js';

export default bab({
  grade: 10,
  number: 2,
  slug: 'virus-bakteri-dan-protista',
  title: 'Virus, Monera (Bakteri), dan Protista',
  element: 'Pemahaman Biologi: struktur dan siklus litik-lisogenik virus, klasifikasi Archaebacteria-Eubacteria, serta Protista mirip hewan/tumbuhan/jamur',
  summary: {
    overview: 'Virus, bakteri, dan protista mewakili kehidupan paling sederhana yang berperan besar sebagai penyebab penyakit sekaligus penopang daur materi dan bioteknologi. Bab ini membahas struktur virus dan dua siklus replikasinya (litik dan lisogenik), ciri bakteri meliputi bentuk, pewarnaan Gram, reproduksi, dan peranannya, klasifikasi Archaebacteria dan Eubacteria, serta tiga kelompok Protista (mirip hewan, tumbuhan, dan jamur) beserta contoh peranannya bagi manusia.',
    coreConcepts: [
      'Struktur Virus dan Sifat Aselular: Virus berukuran 20-300 nm, tersusun atas materi genetik (DNA atau RNA, tidak keduanya) yang dibungkus kapsid protein, dan sebagian memiliki selubung (amplop). Virus tidak memiliki sitoplasma, ribosom, dan metabolisme sendiri sehingga menjadi parasit obligat intrasel. Bakteriofag memiliki kepala, selubung ekor, dan serabut ekor.',
      'Siklus Litik dan Lisogenik: Siklus litik terdiri atas adsorpsi, penetrasi, sintesis (replikasi dan translasi), perakitan, dan lisis sel inang. Pada siklus lisogenik, DNA virus menyatu dengan DNA inang sebagai profag, diwariskan saat sel membelah, dan dapat beralih ke siklus litik jika terinduksi (misalnya sinar UV). Retrovirus seperti HIV memakai enzim reverse transkriptase untuk menyalin RNA menjadi DNA.',
      'Ciri dan Klasifikasi Bakteri: Bakteri adalah prokariota uniseluler. Archaebacteria (halofil, termofil, metanogen) hidup di lingkungan ekstrem dan tidak berdinding sel peptidoglikan, sedangkan Eubacteria memiliki peptidoglikan. Bentuk sel: kokus (bulat), basil (batang), spirilum (spiral), dan vibrio (koma). Pewarnaan Gram membedakan Gram positif (peptidoglikan tebal, ungu) dan Gram negatif (peptidoglikan tipis dengan membran luar, merah muda).',
      'Reproduksi dan Variasi Genetik Bakteri: Bakteri berkembang biak aseksual dengan pembelahan biner. Variasi genetik diperoleh melalui rekombinasi genetik: konjugasi (kontak langsung lewat pili), transformasi (mengambil DNA bebas dari lingkungan), dan transduksi (pemindahan DNA oleh bakteriofag). Mekanisme ini mempercepat penyebaran gen resistensi antibiotik.',
      'Peran Bakteri bagi Lingkungan dan Manusia: Rhizobium dan Azotobacter memfiksasi nitrogen; Nitrosomonas dan Nitrobacter melakukan nitrifikasi; Lactobacillus mengolah yoghurt; Escherichia coli dipakai untuk memproduksi insulin rekombinan. Bakteri patogen contohnya Salmonella typhi (tifus), Mycobacterium tuberculosis (TBC), dan Vibrio cholerae (kolera).',
      'Tiga Kelompok Protista: Protista mirip hewan (protozoa) dikelompokkan berdasarkan alat gerak: Rhizopoda (kaki semu, Amoeba), Ciliata (silia, Paramecium), Flagellata (flagel, Trypanosoma), dan Apicomplexa (tanpa alat gerak, Plasmodium). Protista mirip tumbuhan (alga) berfotosintesis, misalnya Euglena, diatom, dan ganggang merah/cokelat/hijau. Protista mirip jamur meliputi jamur lendir dan Oomycota.'
    ],
    keyFormulas: [
      { label: 'Pertumbuhan Eksponensial Bakteri', formula: 'N_t = N_0 \\cdot 2^{n} \\qquad n = \\dfrac{t}{g}' },
      { label: 'Titer Virus (Uji Plak)', formula: '\\text{PFU/mL} = \\dfrac{\\text{jumlah plak}}{\\text{faktor pengenceran} \\times \\text{volume (mL)}}' },
      { label: 'Perbesaran Mikroskop Cahaya', formula: 'M_{\\text{total}} = M_{\\text{okuler}} \\times M_{\\text{objektif}} \\qquad \\text{ukuran asli} = \\dfrac{\\text{ukuran bayangan}}{M_{\\text{total}}}' },
      { label: 'Tahapan Siklus Litik', formula: '\\text{adsorpsi} \\to \\text{penetrasi} \\to \\text{sintesis} \\to \\text{perakitan} \\to \\text{lisis}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung jumlah bakteri setelah waktu tertentu',
        problem: 'Satu sel bakteri memiliki waktu generasi 20 menit. Berapa jumlah sel setelah 3 jam jika kondisi pertumbuhan ideal?',
        solution: 'Waktu 3 jam = 180 menit sehingga jumlah generasi n = 180 / 20 = 9. Jumlah sel N = N₀ × 2ⁿ = 1 × 2⁹ = 512 sel.'
      },
      {
        title: 'Menghitung titer virus dari uji plak',
        problem: 'Dari 0,1 mL suspensi bakteriofag pada pengenceran 10⁻⁶ terbentuk 45 plak. Berapa titer fag pada suspensi awal?',
        solution: 'Titer = jumlah plak / (faktor pengenceran × volume) = 45 / (10⁻⁶ × 0,1) = 45 / 10⁻⁷ = 4,5 × 10⁸ PFU/mL.'
      },
      {
        title: 'Menentukan ukuran asli dari perbesaran mikroskop',
        problem: 'Paramecium diamati dengan lensa okuler 10× dan objektif 40×. Panjang bayangannya yang diukur adalah 40 mm. Berapa ukuran sebenarnya?',
        solution: 'Perbesaran total = 10 × 40 = 400×. Ukuran asli = 40 mm / 400 = 0,1 mm = 100 µm, sesuai kisaran ukuran Paramecium.'
      }
    ],
    misconceptions: [
      'Menganggap virus adalah sel prokariotik sederhana. Virus bukan sel: tidak punya sitoplasma, membran sel, maupun ribosom dan hanya aktif replikasi di dalam sel inang.',
      'Mengira antibiotik dapat mengobati flu atau infeksi virus. Antibiotik menarget struktur bakteri (dinding peptidoglikan, ribosom bakteri) yang tidak dimiliki virus.',
      'Menganggap semua bakteri merugikan. Banyak bakteri menguntungkan: pengurai, pemfiksasi nitrogen, penghasil yoghurt, dan flora normal usus.',
      'Menyamakan semua protista dengan hewan sederhana. Protista terdiri atas tiga kelompok berbeda (mirip hewan, tumbuhan, dan jamur); alga misalnya berfotosintesis dan bukan protozoa.'
    ],
    tutorTip: 'Untuk soal pertumbuhan bakteri, ubah semua waktu ke satuan yang sama lebih dahulu, hitung n = t/g, lalu pangkatkan 2. Untuk soal protista, kelompokkan dengan kata kunci alat gerak (kaki semu, silia, flagel, tanpa alat gerak) atau kemampuan fotosintesis.'
  },
  questions: [
    dasar(
      'Bagian virus yang tersusun atas protein dan membungkus materi genetik disebut...',
      ['nukleoid', 'ribosom', 'kapsid', 'plasmid'],
      'C',
      'Ingat bahwa virus tidak memiliki ribosom maupun nukleoid.',
      'Kapsid adalah selubung protein pelindung materi genetik virus (DNA atau RNA). Nukleoid dan plasmid adalah struktur bakteri, ribosom tidak dimiliki virus.'
    ),
    dasar(
      'Virus disebut parasit obligat intraselular karena...',
      ['dapat tumbuh pada media agar nutrien', 'berkembang biak dengan pembelahan biner', 'memiliki ribosom sendiri untuk sintesis protein', 'hanya dapat bereplikasi di dalam sel inang hidup karena tidak memiliki perangkat metabolisme sendiri'],
      'D',
      'Kaitkan dengan sifat virus yang aselular.',
      'Virus tidak memiliki ribosom, enzim metabolisme, dan sumber energi sendiri sehingga memakai mesin sel inang untuk bereplikasi. Karena itu virus tidak dapat dibiakkan pada media buatan tanpa sel hidup.'
    ),
    dasar(
      'Bakteri yang selnya berbentuk batang disebut...',
      ['basil', 'kokus', 'spirilum', 'vibrio'],
      'A',
      'Bentuk bulat disebut kokus, spiral disebut spirilum.',
      'Basil adalah bakteri berbentuk batang, misalnya Escherichia coli. Kokus berbentuk bulat, spirilum berbentuk spiral, dan vibrio berbentuk koma.'
    ),
    dasar(
      'Rhizobium yang hidup di bintil akar tanaman kacang-kacangan berperan dalam...',
      ['mengubah amonia menjadi nitrat', 'memfiksasi nitrogen bebas (N₂) menjadi senyawa amonia', 'mengubah nitrat menjadi gas nitrogen', 'melakukan fotosintesis anoksigenik'],
      'B',
      'Bintil akar adalah tempat fiksasi nitrogen.',
      'Rhizobium bersimbiosis dengan akar polong-polongan dan memfiksasi N₂ dari udara menjadi amonia yang dapat dipakai tumbuhan. Nitrifikasi dilakukan Nitrosomonas dan Nitrobacter, sedangkan perubahan nitrat menjadi N₂ adalah denitrifikasi.'
    ),
    dasar(
      'Plasmodium penyebab malaria tergolong protista mirip hewan dari kelompok...',
      ['Rhizopoda', 'Ciliata', 'Flagellata', 'Apicomplexa (Sporozoa)'],
      'D',
      'Plasmodium tidak memiliki alat gerak khusus pada fase dewasa.',
      'Plasmodium adalah anggota Apicomplexa (Sporozoa), parasit tanpa alat gerak yang ditularkan oleh nyamuk Anopheles betina. Rhizopoda bergerak dengan kaki semu, Ciliata dengan silia, Flagellata dengan flagel.'
    ),
    sedang(
      'Urutan tahap siklus litik bakteriofag yang benar adalah...',
      ['penetrasi - adsorpsi - sintesis - perakitan - lisis', 'adsorpsi - penetrasi - sintesis - perakitan - lisis', 'adsorpsi - sintesis - penetrasi - lisis - perakitan', 'lisis - adsorpsi - penetrasi - sintesis - perakitan'],
      'B',
      'Virus harus menempel dahulu sebelum memasukkan materi genetiknya.',
      'Fag menempel pada reseptor inang (adsorpsi), menyuntikkan DNA (penetrasi), membuat komponen virus baru (sintesis), merakit partikel (perakitan), lalu menghancurkan sel inang (lisis).'
    ),
    sedang(
      'Perbedaan utama siklus lisogenik dengan siklus litik adalah...',
      ['pada lisogenik DNA virus menyatu dengan DNA inang sebagai profag dan diwariskan ke sel anak tanpa lisis segera', 'pada lisogenik sel inang segera pecah setelah virus masuk', 'pada litik DNA virus selalu menjadi profag', 'siklus lisogenik menghasilkan ratusan virus baru seketika'],
      'A',
      'Profag adalah DNA virus yang tersisip dalam kromosom inang.',
      'Pada siklus lisogenik, DNA virus terintegrasi sebagai profag dan ikut direplikasi bersama DNA inang tanpa menghancurkan sel. Sel baru pecah pada siklus litik atau ketika profag terinduksi menjadi aktif.'
    ),
    sedang(
      'Bakteri Gram positif tampak berwarna ungu setelah pewarnaan Gram karena...',
      ['dinding selnya tipis sehingga kristal violet mudah terlepas oleh alkohol', 'tidak memiliki dinding sel sama sekali', 'lapisan peptidoglikannya tebal sehingga menahan kristal violet setelah dicuci alkohol', 'memiliki membran luar berisi lipopolisakarida'],
      'C',
      'Bandingkan ketebalan peptidoglikan Gram positif dan Gram negatif.',
      'Peptidoglikan tebal pada Gram positif mempertahankan kompleks kristal violet-iodium sehingga tetap ungu. Gram negatif berpeptidoglikan tipis dengan membran luar sehingga warna ungu luntur dan menyerap safranin (merah muda).'
    ),
    sedang(
      'Satu sel bakteri membelah setiap 30 menit pada kondisi optimum. Jumlah sel setelah 4 jam adalah...',
      ['128 sel', '256 sel', '512 sel', '1.024 sel'],
      'B',
      'Hitung dahulu jumlah generasi n = t / g.',
      'Waktu 4 jam = 240 menit sehingga n = 240 / 30 = 8. Jumlah sel = 2⁸ = 256.'
    ),
    sedang(
      'Pasangan bakteri dan perannya dalam daur nitrogen yang benar adalah...',
      ['Nitrosomonas: mengubah nitrat menjadi nitrit', 'Nitrobacter: mengubah amonia menjadi nitrit', 'Rhizobium: mengubah nitrat menjadi gas nitrogen', 'Nitrobacter: mengubah nitrit menjadi nitrat'],
      'D',
      'Nitrifikasi berlangsung dua tahap: amonia, nitrit, lalu nitrat.',
      'Nitrosomonas mengoksidasi amonia menjadi nitrit, kemudian Nitrobacter mengoksidasi nitrit menjadi nitrat. Rhizobium memfiksasi N₂, bukan mengubah nitrat.'
    ),
    tantangan(
      'Antibiotik penisilin menghambat pembentukan dinding peptidoglikan bakteri, tetapi tidak efektif mengobati influenza. Alasan yang paling tepat adalah...',
      ['virus influenza terlalu kecil untuk dijangkau antibiotik', 'virus influenza tidak memiliki materi genetik', 'virus tidak memiliki dinding peptidoglikan maupun metabolisme sendiri sehingga sasaran antibiotik tidak ada', 'virus influenza termasuk bakteri Gram negatif'],
      'C',
      'Tentukan apa sasaran kerja penisilin dan apakah virus memilikinya.',
      'Penisilin bekerja pada sintesis peptidoglikan, struktur yang tidak dimiliki virus. Virus juga memakai mesin sel inang untuk bereplikasi sehingga tidak ada proses bakteri yang dapat dihambat.'
    ),
    tantangan(
      'Dari 0,1 mL suspensi bakteriofag pengenceran 10⁻⁶ diperoleh 45 plak pada lapisan bakteri. Titer fag pada suspensi awal adalah...',
      ['4,5 × 10⁸ PFU/mL', '4,5 × 10⁷ PFU/mL', '4,5 × 10⁶ PFU/mL', '4,5 × 10⁹ PFU/mL'],
      'A',
      'Titer = plak / (pengenceran × volume).',
      'Titer = 45 / (10⁻⁶ × 0,1) = 45 / 10⁻⁷ = 4,5 × 10⁸ PFU/mL.'
    ),
    tantangan(
      'Bakteri resisten antibiotik memindahkan plasmid berisi gen resistensi ke bakteri peka melalui kontak langsung memakai pili. Proses tersebut disebut...',
      ['transformasi', 'transduksi', 'pembelahan biner', 'konjugasi'],
      'D',
      'Perhatikan kata kunci pili dan kontak langsung antarsel.',
      'Konjugasi adalah perpindahan DNA antarbakteri melalui pili. Transformasi mengambil DNA bebas dari lingkungan, transduksi memakai bakteriofag sebagai pembawa DNA, dan pembelahan biner tidak memindahkan gen antarindividu.'
    ),
    tantangan(
      'Suatu virus bergenom RNA membawa enzim reverse transkriptase. Alur informasi genetik pada awal infeksi virus tersebut adalah...',
      ['RNA diterjemahkan menjadi protein, lalu protein disalin menjadi DNA', 'RNA virus disalin menjadi DNA, DNA menyatu ke genom inang, lalu ditranskripsi dan ditranslasi menjadi komponen virus', 'DNA virus ditranskripsi menjadi RNA kemudian kembali menjadi DNA', 'protein virus disalin langsung menjadi RNA inang'],
      'B',
      'Reverse transkriptase menyalin RNA menjadi DNA.',
      'Retrovirus seperti HIV menyalin RNA genomnya menjadi DNA dengan reverse transkriptase, DNA itu terintegrasi ke kromosom inang (provirus), lalu mengikuti jalur transkripsi dan translasi inang untuk membentuk komponen virus baru.'
    ),
    tantangan(
      'Preparat Paramecium diamati dengan lensa okuler 10× dan objektif 40×. Jika panjang bayangan yang terukur pada gambar 40 mm, ukuran sebenarnya Paramecium adalah...',
      ['1 µm', '10 µm', '100 µm', '400 µm'],
      'C',
      'Ukuran asli = ukuran bayangan dibagi perbesaran total.',
      'Perbesaran total = 10 × 40 = 400×. Ukuran asli = 40 mm / 400 = 0,1 mm = 100 µm.'
    )
  ]
});
