import { bab, soal } from '../author.js';

export default bab({
  grade: 12,
  number: 4,
  slug: 'senyawa-karbon-dan-makromolekul',
  title: 'Senyawa Turunan Alkana, Benzena, dan Makromolekul',
  element: 'Pemahaman Kimia: gugus fungsi alkohol, eter, aldehida, keton, asam karboksilat, ester, benzena, polimer, karbohidrat, dan protein',
  summary: {
    overview: 'Sifat kimia dan kegunaan senyawa organik ditentukan oleh gugus fungsinya. Bab ini membahas tata nama, keisomeran (struktur, fungsi, dan optis), serta reaksi khas dan identifikasi senyawa turunan alkana—alkohol, eter, aldehida, keton, asam karboksilat, ester, dan haloalkana—struktur aromatik benzena beserta reaksi substitusi elektrofilik dan aturan pengarah substituen, serta makromolekul meliputi polimer sintetik, karbohidrat, dan protein.',
    coreConcepts: [
      'Gugus Fungsi dan Keisomeran Turunan Alkana: Gugus fungsi menentukan sifat fisis dan reaksi kimia suatu senyawa. Tiga pasangan isomer fungsi utama meliputi alkohol ($\\text{R}-\\text{OH}$) dan eter ($\\text{R}-\\text{O}-\\text{R}\'$) berumus umum $\\text{C}_n\\text{H}_{2n+2}\\text{O}$; aldehida ($\\text{R}-\\text{CHO}$) dan keton ($\\text{R}-\\text{CO}-\\text{R}\'$) berumus umum $\\text{C}_n\\text{H}_{2n}\\text{O}$; serta asam karboksilat ($\\text{R}-\\text{COOH}$) dan ester ($\\text{R}-\\text{COOR}\'$) berumus umum $\\text{C}_n\\text{H}_{2n}\\text{O}_2$.',
      'Reaksi Khas dan Identifikasi Gugus Fungsi: Alkohol bereaksi dengan logam $\\text{Na}$ membebaskan gas $\\text{H}_2$ (sedangkan eter tidak). Oksidasi alkohol primer menghasilkan aldehida lalu asam karboksilat, alkohol sekunder menghasilkan keton, dan alkohol tersier tidak teroksidasi oleh oksidator sedang. Aldehida mereduksi pereaksi Tollens (cermin perak) dan Fehling (endapan merah bata $\\text{Cu}_2\\text{O}$), sedangkan keton tidak bereaksi.',
      'Benzena dan Substitusi Elektrofilik: Benzena ($\\text{C}_6\\text{H}_6$) memiliki enam elektron $\\pi$ yang terdelokalisasi membentuk resonansi stabil sehingga lebih mudah mengalami substitusi elektrofilik (halogenasi, nitrasi, sulfonasi, alkilasi Friedel-Crafts) daripada adisi. Pada disubstitusi, gugus pendorong elektron ($-\\text{OH}, -\\text{NH}_2, -\\text{CH}_3, -\\text{Cl}$) mengarahkan substituen baru ke posisi orto/para, sedangkan gugus penarik elektron ($-\\text{NO}_2, -\\text{COOH}, -\\text{SO}_3\\text{H}$) mengarahkan ke posisi meta.',
      'Polimer Adisi dan Polimer Kondensasi: Polimer adalah makromolekul yang tersusun atas pengulangan monomer. Polimerisasi adisi terjadi pada monomer berikatan rangkap tanpa melepaskan molekul kecil (contoh: polietilena, PVC, teflon). Polimerisasi kondensasi menggabungkan monomer bergugus fungsi ganda disertai pelepasan molekul kecil seperti $\\text{H}_2\\text{O}$ (contoh: nilon-$6,6$, dakron, protein, dan selulosa).',
      'Karbohidrat dan Protein dalam Biokimia: Karbohidrat terbagi atas monosakarida (glukosa, fruktosa, galaktosa), disakarida (maltosa, laktosa, sukrosa), dan polisakarida (amilum, glikogen, selulosa); amilum diuji dengan iodin (biru-ungu) dan gula pereduksi dengan Benedict/Fehling. Protein adalah polimer asam amino yang dihubungkan ikatan peptida ($-\\text{CO}-\\text{NH}-$); asam amino bersifat amfoter membentuk ion zwitter dan dideteksi melalui uji Biuret (ungu), Xantoproteat (kuning-jingga), dan timbal(II) asetat (endapan hitam).'
    ],
    keyFormulas: [
      { label: 'Oksidasi Alkohol Primer', formula: '\\text{R}-\\text{CH}_2\\text{OH} \\xrightarrow{[\\text{O}]} \\text{R}-\\text{CHO} \\xrightarrow{[\\text{O}]} \\text{R}-\\text{COOH}' },
      { label: 'Reaksi Esterifikasi Fischer', formula: '\\text{R}-\\text{COOH} + \\text{R}\'-\\text{OH} \\xrightleftharpoons{\\text{H}^+} \\text{R}-\\text{COOR}\' + \\text{H}_2\\text{O}' },
      { label: 'Uji Tollens pada Aldehida', formula: '\\text{R}-\\text{CHO} + 2[\\text{Ag(NH}_3)_2]^+ + 3\\text{OH}^- \\longrightarrow \\text{R}-\\text{COO}^- + 2\\text{Ag}(s) + 4\\text{NH}_3 + 2\\text{H}_2\\text{O}' },
      { label: 'Massa Polimer Kondensasi Linear', formula: 'M_r(\\text{polimer}) = N \\cdot M_r(\\text{monomer}) - (N - 1) \\cdot M_r(\\text{H}_2\\text{O})' }
    ],
    workedExamples: [
      {
        title: 'Membedakan isomer alkohol, eter, aldehida, dan keton dengan uji laboratorium',
        problem: 'Dua senyawa berisomer $\\text{C}_3\\text{H}_6\\text{O}$ dinamai senyawa A dan B. Senyawa A menghasilkan cermin perak saat dipanaskan dengan pereaksi Tollens, sedangkan senyawa B tidak bereaksi. Tentukan struktur dan nama IUPAC A dan B.',
        solution: 'Rumus $\\text{C}_3\\text{H}_6\\text{O}$ sesuai untuk aldehida dan keton. Karena A positif terhadap uji Tollens, A adalah aldehida yaitu **propanal** ($\\text{CH}_3\\text{CH}_2\\text{CHO}$). Senyawa B yang tidak bereaksi dengan Tollens adalah isomernya berupa keton, yaitu **propanon** atau aseton ($\\text{CH}_3\\text{COCH}_3$).'
      },
      {
        title: 'Menentukan produk substitusi kedua pada turunan benzena',
        problem: 'Toluena direaksikan dengan campuran $\\text{HNO}_3$ dan $\\text{H}_2\\text{SO}_4$ pekat berlebih pada suhu rendah menghasilkan produk mononitro. Posisi manakah yang dominan terbentuk dan bagaimana namanya?',
        solution: 'Pada toluena ($\\text{C}_6\\text{H}_5\\text{CH}_3$), gugus metil ($-\\text{CH}_3$) merupakan pengarah *orto* dan *para*. Oleh karena itu, reaksi nitrasi menghasilkan campuran dominan ***orto*-nitrotoluena** ($2$-nitrotoluena) dan ***para*-nitrotoluena** ($4$-nitrotoluena).'
      },
      {
        title: 'Menghitung massa NaOH pada penyabunan (saponifikasi) lemak',
        problem: 'Sebanyak $89\\text{ g}$ lemak gliseril tristearat ($M_r = 890$) disabunkan sempurna menggunakan larutan $\\text{NaOH}$ ($M_r = 40$). Hitung massa $\\text{NaOH}$ yang diperlukan.',
        solution: 'Satu mol trigliserida mengandung $3$ gugus ester sehingga memerlukan $3\\text{ mol}$ $\\text{NaOH}$. Jumlah mol lemak $= \\dfrac{89}{890} = 0{,}1\\text{ mol}$, sehingga dibutuhkan $n_{\\text{NaOH}} = 3 \\times 0{,}1 = 0{,}3\\text{ mol}$. Massa $\\text{NaOH} = 0{,}3 \\times 40 = \\mathbf{12\\text{ g}}$.'
      }
    ],
    misconceptions: [
      'Menyangka ikatan rangkap pada cincin benzena dapat dengan mudah mengalami reaksi adisi seperti alkena biasa. Karena adanya stabilitas resonansi aromatik, benzena jauh lebih menyukai substitusi elektrofilik daripada adisi.',
      'Menganggap sukrosa (gula tebu) dapat mereduksi pereaksi Benedict atau Fehling karena rasanya manis dan terdiri atas glukosa dan fruktosa. Faktanya, gugus karbonil anomerik keduanya saling terkunci dalam ikatan glikosidik sehingga sukrosa merupakan gula non-pereduksi.',
      'Salah menentukan bagian alkil dan alkanoat saat menamai ester ($\\text{R}-\\text{COO}-\\text{R}\'$): nama **alkil** selalu berasal dari gugus $-\\text{R}\'$ yang terikat pada atom oksigen tunggal (asal alkohol), bukan dari rantai karbon di sebelah gugus karbonil $\\text{C}=\\text{O}$.',
      'Mengira plastik polietena atau PVC termasuk polimer kondensasi; keduanya terbentuk dari adisi ikatan rangkap $\\text{C}=\\text{C}$ tanpa melepaskan molekul kecil seperti air.'
    ],
    tutorTip: 'Untuk penamaan ester $\\text{R}-\\text{COO}-\\text{R}\'$ secara cepat, tarik garis pemisah di antara $\\text{C}=\\text{O}$ dan $-\\text{O}-\\text{R}\'$: gugus yang membawa $\\text{C}=\\text{O}$ menjadi nama belakang **-anoat** (asal asam karboksilat), sedangkan gugus yang menempel di $-\\text{O}-$ menjadi nama depan **alkil** (asal alkohol).'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Pasangan golongan senyawa turunan alkana yang saling berisomer fungsi dengan rumus molekul umum $\\text{C}_n\\text{H}_{2n}\\text{O}_2$ adalah...',
      options: [
        'alkohol dan eter',
        'aldehida dan keton',
        'alkanol dan alkanon',
        'asam karboksilat dan ester'
      ],
      answer: 'D',
      hint: 'Hitung jumlah atom $\\text{O}$ dan ikatan rangkap $\\text{C}=\\text{O}$ pada tiap golongan.',
      solution: 'Asam karboksilat ($\\text{R}-\\text{COOH}$) dan ester ($\\text{R}-\\text{COOR}\'$) sama-sama memiliki dua atom oksigen dan satu ikatan rangkap $\\text{C}=\\text{O}$, sehingga keduanya berisomer fungsi dengan rumus umum $\\text{C}_n\\text{H}_{2n}\\text{O}_2$. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Nama IUPAC yang tepat untuk senyawa alkohol dengan rumus struktur $\\text{CH}_3-\\text{CH}(\\text{OH})-\\text{CH}(\\text{CH}_3)-\\text{CH}_3$ adalah...',
      options: [
        '$2$-metil-$3$-butanol',
        '$3$-metil-$2$-butanol',
        '$2$-metil-$2$-butanol',
        '$3$-metil-$1$-butanol'
      ],
      answer: 'B',
      hint: 'Penomoran rantai karbon utama terpanjang dimulai dari ujung yang paling dekat dengan gugus fungsi $-\\text{OH}$.',
      solution: 'Rantai utama terdiri dari $4$ atom karbon (butana). Penomoran dimulai dari kiri agar gugus $-\\text{OH}$ memperoleh nomor terkecil ($\\text{C}-2$), sehingga cabang metil berada di $\\text{C}-3$. Nama IUPAC-nya adalah **$3$-metil-$2$-butanol**. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Di antara senyawa berikut, senyawa yang bereaksi positif membentuk cermin perak dengan pereaksi Tollens maupun endapan merah bata dengan pereaksi Fehling adalah...',
      options: [
        'propanal ($\\text{CH}_3\\text{CH}_2\\text{CHO}$)',
        'propanon ($\\text{CH}_3\\text{COCH}_3$)',
        'etoksietana ($\\text{CH}_3\\text{CH}_2\\text{OCH}_2\\text{CH}_3$)',
        'asam propanoat ($\\text{CH}_3\\text{CH}_2\\text{COOH}$)'
      ],
      answer: 'A',
      hint: 'Uji Tollens dan Fehling membedakan gugus aldehida ($-\\text{CHO}$) yang mudah teroksidasi dari keton ($-\\text{CO}-$).',
      solution: 'Gugus aldehida pada **propanal** mudah dioksidasi menjadi karboksilat oleh pereaksi Tollens (mengendapkan perak) dan Fehling (mengendapkan $\\text{Cu}_2\\text{O}$ merah bata), sedangkan keton, eter, dan asam propanoat tidak bereaksi. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Suatu senyawa turunan benzena memiliki gugus karboksil ($-\\text{COOH}$) pada atom $\\text{C}-1$ dan gugus nitro ($-\\text{NO}_2$) pada atom $\\text{C}-3$ cincin benzena. Nama yang tepat untuk senyawa tersebut adalah...',
      options: [
        '*orto*-nitrobenzoat',
        'asam *para*-nitrobenzoat',
        'asam $3$-nitrobenzoat',
        '$3$-karboksinitrobenzena'
      ],
      answer: 'C',
      hint: 'Gugus $-\\text{COOH}$ memiliki prioritas tertinggi sehingga induknya adalah asam benzoat pada posisi $\\text{C}-1$.',
      solution: 'Karena gugus $-\\text{COOH}$ menempati prioritas utama sebagai asam benzoat ($\\text{C}-1$), posisi $1,3$ disebut *meta* atau nomor $3$. Maka nama senyawa tersebut adalah **asam $3$-nitrobenzoat** (asam *meta*-nitrobenzoat). Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Seorang siswa menguji ekstrak bahan pangan dan memperoleh hasil uji Biuret berwarna ungu serta uji Xantoproteat berwarna kuning-jingga setelah dipanaskan dengan $\\text{HNO}_3$ pekat. Simpulan yang paling tepat adalah sampel mengandung...',
      options: [
        'amilum dan gula pereduksi',
        'lemak jenuh dan gliserol',
        'polisakarida berikatan glikosidik',
        'protein dengan ikatan peptida dan asam amino bercincin benzena'
      ],
      answer: 'D',
      hint: 'Uji Biuret mendeteksi ikatan peptida, sedangkan uji Xantoproteat mendeteksi cincin aromatik pada protein.',
      solution: 'Warna ungu pada uji Biuret membuktikan adanya ikatan peptida (protein), sementara warna kuning-jingga pada uji Xantoproteat membuktikan keberadaan residu asam amino yang memiliki cincin benzena seperti fenilalanin atau tirosin. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Suatu senyawa dengan rumus molekul $\\text{C}_4\\text{H}_{10}\\text{O}$ bereaksi dengan logam natrium membebaskan gas hidrogen, tetapi tidak mengalami perubahan warna ketika dipanaskan bersama oksidator $\\text{K}_2\\text{Cr}_2\\text{O}_7$ dalam suasana asam. Senyawa tersebut adalah...',
      options: [
        '$2$-metil-$2$-propanol',
        '$1$-butanol',
        '$2$-butanol',
        'etoksietana'
      ],
      answer: 'A',
      hint: 'Bereaksi dengan $\\text{Na}$ menandakan adanya gugus $-\\text{OH}$ (alkohol), sedangkan tidak teroksidasi $\\text{K}_2\\text{Cr}_2\\text{O}_7$ menunjukkan jenis alkohol tersier.',
      solution: 'Reaksi dengan $\\text{Na}$ menyingkirkan etoksietana (eter). Tidak teroksidasi oleh $\\text{K}_2\\text{Cr}_2\\text{O}_7/\\text{H}^+$ menunjukkan senyawa adalah **alkohol tersier**, karena atom $\\text{C}$ pengikat $-\\text{OH}$ tidak memiliki atom $\\text{H}$: **$2$-metil-$2$-propanol**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Jika asam etanoat ($\\text{CH}_3\\text{COOH}$) dipanaskan bersama $1$-propanol ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH}$) dengan sedikit katalis $\\text{H}_2\\text{SO}_4$ pekat, ester utama yang dihasilkan adalah...',
      options: [
        'etil propanoat',
        'propil propanoat',
        'propil etanoat',
        'etil metanoat'
      ],
      answer: 'C',
      hint: 'Gugus alkil ester berasal dari alkoholnya ($1$-propanol), sedangkan gugus alkanoat berasal dari asam karboksilatnya (asam etanoat).',
      solution: 'Reaksi esterifikasi $\\text{CH}_3\\text{COOH} + \\text{HOCH}_2\\text{CH}_2\\text{CH}_3 \\rightleftharpoons \\text{CH}_3\\text{COOCH}_2\\text{CH}_2\\text{CH}_3 + \\text{H}_2\\text{O}$ menghasilkan ester dengan bagian alkil dari propanol dan bagian karboksilat dari asam etanoat, yaitu **propil etanoat**. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pada reaksi nitrasi benzena menggunakan campuran $\\text{HNO}_3$ pekat dan $\\text{H}_2\\text{SO}_4$ pekat untuk menghasilkan nitrobenzena, peran utama $\\text{H}_2\\text{SO}_4$ pekat dan spesi elektrofil yang menyerang cincin benzena berturut-turut adalah...',
      options: [
        'sebagai pereaksi adisi dan menghasilkan radikal $\\text{NO}_2$',
        'sebagai katalis pembentuk ion nitronium ($\\text{NO}_2^+$) sebagai elektrofil',
        'sebagai oksidator yang membentuk anion nitrat ($\\text{NO}_3^-$) sebagai nukleofil',
        'sebagai pelarut netral yang memutus ikatan rangkap $\\text{C}=\\text{C}$ benzena'
      ],
      answer: 'B',
      hint: 'Asam sulfat pekat lebih kuat daripada asam nitrat sehingga memprotonasi $\\text{HNO}_3$ hingga melepaskan $\\text{H}_2\\text{O}$.',
      solution: '$\\text{H}_2\\text{SO}_4$ pekat memprotonasi gugus $-\\text{OH}$ pada $\\text{HNO}_3$ sehingga melepaskan $\\text{H}_2\\text{O}$ dan membentuk ion nitronium ($\\text{NO}_2^+$), yang bertindak sebagai elektrofil kuat menyerang awan elektron $\\pi$ benzena. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Di antara polimer sintetik berikut, polimer yang terbentuk melalui reaksi **polimerisasi kondensasi** beserta pasangan monomer penyusunnya yang benar adalah...',
      options: [
        'polivinil klorida (PVC) dari monomer kloroetena',
        'teflon (PTFE) dari monomer tetrafluoroetena',
        'polietilena dari monomer etena',
        'nilon-$6,6$ dari monomer asam adipat dan $1,6$-diaminoheksana'
      ],
      answer: 'D',
      hint: 'Polimerisasi kondensasi terjadi antara monomer bergugus fungsi ganda dengan melepas molekul kecil seperti $\\text{H}_2\\text{O}$, bukan pembukaan ikatan rangkap $\\text{C}=\\text{C}$.',
      solution: 'PVC, teflon, dan polietilena terbentuk lewat polimerisasi adisi monomer alkena. Sebaliknya, **nilon-$6,6$** adalah poliamida hasil polimerisasi kondensasi asam adipat (dikarboksilat) dan $1,6$-diaminoheksana (diamina) yang melepaskan molekul $\\text{H}_2\\text{O}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Suatu disakarida tidak menghasilkan endapan merah bata ketika dipanaskan bersama pereaksi Fehling maupun Benedict, tetapi setelah dihidrolisis dengan asam encer menghasilkan campuran glukosa dan fruktosa. Disakarida yang dimaksud adalah...',
      options: [
        'maltosa',
        'sukrosa',
        'laktosa',
        'selobiosa'
      ],
      answer: 'B',
      hint: 'Cari disakarida yang termasuk gula non-pereduksi karena gugus hemiasetal dan hemiketalnya saling berikatan.',
      solution: '**Sukrosa** merupakan gula non-pereduksi (negatif terhadap Fehling/Benedict) karena karbon anomerik glukosa dan fruktosa terikat bersama membentuk ikatan glikosidik; hidrolisisnya menghasilkan glukosa dan fruktosa (gula invert). Maltosa dan laktosa keduanya adalah gula pereduksi. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Senyawa karbon $\\text{X}$ berumus molekul $\\text{C}_3\\text{H}_6\\text{O}_2$ tidak memerahkan lakmus biru dan tidak bereaksi dengan logam $\\text{Na}$. Hidrolisis $\\text{X}$ dalam suasana asam menghasilkan asam karboksilat $\\text{Y}$ dan alkohol $\\text{Z}$. Diketahui $\\text{Y}$ **tidak** bereaksi dengan pereaksi Tollens, sedangkan $\\text{Z}$ jika dioksidasi menghasilkan aldehida yang membentuk cermin perak dengan Tollens. Senyawa $\\text{X}$ adalah...',
      options: [
        'metil etanoat',
        'etil metanoat',
        'asam propanoat',
        'propil metanoat'
      ],
      answer: 'A',
      hint: 'Bandingkan hasil hidrolisis metil etanoat ($\\text{CH}_3\\text{COOCH}_3$) dengan etil metanoat ($\\text{HCOOCH}_2\\text{CH}_3$); ingat keunikan asam metanoat terhadap Tollens.',
      solution: 'Tidak memerahkan lakmus dan tidak bereaksi dengan $\\text{Na}$ menunjukkan $\\text{X}$ adalah ester $\\text{C}_3\\text{H}_6\\text{O}_2$, kemungkinannya metil etanoat atau etil metanoat. Etil metanoat terhidrolisis menjadi asam metanoat ($\\text{HCOOH}$) yang masih memiliki gugus $-\\text{CHO}$ sehingga positif terhadap Tollens. Karena $\\text{Y}$ negatif Tollens, $\\text{Y}$ pasti asam etanoat ($\\text{CH}_3\\text{COOH}$) dan $\\text{Z}$ adalah metanol ($\\text{CH}_3\\text{OH}$), sehingga $\\text{X}$ adalah **metil etanoat**. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Di antara isomer alkohol berikut, senyawa yang memiliki atom karbon kiral (asimetris) sehingga bersifat optis aktif dan dapat memutar bidang cahaya terpolarisasi adalah...',
      options: [
        '$1$-butanol',
        '$2$-metil-$2$-butanol',
        '$2$-butanol',
        '$3$-pentanol'
      ],
      answer: 'C',
      hint: 'Periksa apakah terdapat atom karbon yang mengikat tepat empat gugus berbeda.',
      solution: 'Pada **$2$-butanol** ($\\text{CH}_3-\\text{CH}(\\text{OH})-\\text{CH}_2\\text{CH}_3$), atom karbon $\\text{C}-2$ mengikat empat gugus berbeda sekaligus: $-\\text{H}$, $-\\text{OH}$, $-\\text{CH}_3$, dan $-\\text{CH}_2\\text{CH}_3$, sehingga bersifat kiral dan optis aktif. Ketiga senyawa lainnya memiliki sedikitnya dua gugus identik pada setiap karbonnya. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Untuk mensintesis senyawa ***meta*-kloronitrobenzena** dari bahan baku benzena melalui dua tahap reaksi substitusi elektrofilik, urutan reaksi dan pereaksi yang paling tepat adalah...',
      options: [
        'klorinasi ($\\text{Cl}_2/\\text{FeCl}_3$) dilanjutkan nitrasi ($\\text{HNO}_3/\\text{H}_2\\text{SO}_4$)',
        'alkilasi ($\\text{CH}_3\\text{Cl}/\\text{AlCl}_3$) dilanjutkan klorinasi ($\\text{Cl}_2/\\text{FeCl}_3$)',
        'sulfonasi ($\\text{H}_2\\text{SO}_4$ berasap) dilanjutkan klorinasi tanpa pemisahan gugus sulfonat',
        'nitrasi ($\\text{HNO}_3/\\text{H}_2\\text{SO}_4$) dilanjutkan klorinasi ($\\text{Cl}_2/\\text{FeCl}_3$)'
      ],
      answer: 'D',
      hint: 'Tentukan gugus mana ($-\\text{NO}_2$ atau $-\\text{Cl}$) yang berperan sebagai pengarah *meta* agar harus dimasukkan pada tahap pertama.',
      solution: 'Gugus nitro ($-\\text{NO}_2$) adalah penarik elektron sekaligus pengarah *meta*, sedangkan gugus kloro ($-\\text{Cl}$) adalah pengarah *orto/para*. Oleh karena itu, benzena harus di-**nitrasi lebih dahulu** menjadi nitrobenzena, barulah diklorinasi dengan $\\text{Cl}_2/\\text{FeCl}_3$ agar $-\\text{Cl}$ masuk ke posisi *meta* menghasilkan *meta*-kloronitrobenzena. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak $44{,}5\\text{ g}$ lemak gliseril tristearat ($M_r = 890$) disabunkan secara sempurna dengan larutan natrium hidroksida ($M_r\\text{ NaOH} = 40$) menghasilkan gliserol dan sabun natrium stearat. Massa $\\text{NaOH}$ murni yang bereaksi adalah...',
      options: [
        '$2{,}0\\text{ g}$',
        '$6{,}0\\text{ g}$',
        '$4{,}0\\text{ g}$',
        '$12{,}0\\text{ g}$'
      ],
      answer: 'B',
      hint: 'Setiap $1\\text{ mol}$ trigliserida memiliki $3$ ikatan ester sehingga bereaksi dengan $3\\text{ mol}$ $\\text{NaOH}$.',
      solution: 'Jumlah mol lemak $= \\dfrac{44{,}5}{890} = 0{,}05\\text{ mol}$. Pada reaksi saponifikasi, $1\\text{ mol}$ trigliserida tepat bereaksi dengan $3\\text{ mol}$ $\\text{NaOH}$, sehingga $n_{\\text{NaOH}} = 3 \\times 0{,}05 = 0{,}15\\text{ mol}$. Massa $\\text{NaOH} = 0{,}15 \\times 40 = \\mathbf{6{,}0\\text{ g}}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak $100$ molekul asam amino glisin ($\\text{NH}_2-\\text{CH}_2-\\text{COOH}$, $M_r = 75$) berpolimerisasi kondensasi membentuk satu rantai polipeptida linear dengan melepaskan molekul air ($M_r = 18$). Jumlah ikatan peptida yang terbentuk dan nilai $M_r$ polipeptida tersebut berturut-turut adalah...',
      options: [
        '$100$ ikatan peptida dan $M_r = 7500$',
        '$99$ ikatan peptida dan $M_r = 5700$',
        '$99$ ikatan peptida dan $M_r = 5718$',
        '$100$ ikatan peptida dan $M_r = 5718$'
      ],
      answer: 'C',
      hint: 'Penggabungan $N$ monomer secara linear membentuk $(N - 1)$ ikatan peptida dan melepaskan $(N - 1)$ molekul $\\text{H}_2\\text{O}$.',
      solution: 'Sebanyak $100$ molekul glisin membentuk $100 - 1 = \\mathbf{99}$ ikatan peptida dengan melepaskan $99$ molekul $\\text{H}_2\\text{O}$. Massa molekul relatif polipeptida $= (100 \\times 75) - (99 \\times 18) = 7500 - 1782 = \\mathbf{5718}$. Jawaban: **C**.'
    })
  ]
});
