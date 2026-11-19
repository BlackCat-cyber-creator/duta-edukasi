import { bab, dasar, sedang, tantangan } from '../author.js';

export default bab({
  grade: 11,
  number: 4,
  slug: 'sistem-respirasi-ekskresi-dan-koordinasi',
  title: 'Sistem Respirasi, Ekskresi Ginjal, dan Koordinasi Saraf–Hormon',
  element: 'Pemahaman Biologi: mekanisme pernapasan dan pertukaran gas, proses filtrasi-reabsorpsi-augmentasi nefron, impuls saraf, dan sistem endokrin',
  summary: {
    overview: 'Sistem respirasi, ekskresi, dan koordinasi menjaga homeostasis tubuh manusia. Bab ini membahas mekanisme ventilasi paru dan pertukaran gas di alveolus, pengangkutan O₂ dan CO₂ dalam darah, volume dan kapasitas paru, pembentukan urin pada nefron (filtrasi, reabsorpsi, augmentasi), penghantaran impuls saraf melalui potensial aksi dan sinaps, lengkung refleks, serta peran hormon dan umpan balik negatif.',
    coreConcepts: [
      'Mekanisme Ventilasi Paru: Saat inspirasi diafragma berkontraksi dan mendatar serta otot interkostal eksternal berkontraksi sehingga volume rongga dada naik dan tekanan udara paru turun di bawah tekanan atmosfer; udara masuk. Saat ekspirasi otot-otot rileks, volume rongga dada turun, tekanan naik, dan udara keluar.',
      'Pertukaran dan Pengangkutan Gas: Pertukaran gas di alveolus berlangsung secara difusi melalui epitel pipih selapis. Oksigen diangkut sebagian besar sebagai oksihemoglobin, sedangkan CO₂ terutama diangkut sebagai ion bikarbonat (sekitar 70 persen), sisanya sebagai karbaminohemoglobin dan terlarut. CO mengikat hemoglobin jauh lebih kuat daripada O₂.',
      'Volume dan Kapasitas Paru: Volume tidal (VT) sekitar 500 mL. Kapasitas vital = VT + volume cadangan inspirasi + volume cadangan ekspirasi. Volume residu tetap tertinggal di paru. Gangguan pernapasan meliputi asma, bronkitis, emfisema, pneumonia, dan TBC.',
      'Sistem Ekskresi dan Nefron: Urin dibentuk melalui filtrasi di glomerulus (menghasilkan urin primer), reabsorpsi glukosa, asam amino, air, dan ion di tubulus kontortus proksimal serta lengkung Henle, dan augmentasi (penambahan zat sisa seperti H⁺, K⁺, NH₃) di tubulus kontortus distal. Hormon ADH dan aldosteron mengatur reabsorpsi air dan Na⁺.',
      'Sistem Saraf dan Impuls: Neuron sensorik, interneuron, dan neuron motorik menghantarkan impuls. Potensial istirahat sekitar -70 mV; depolarisasi terjadi saat Na⁺ masuk melalui kanal bergerbang voltase sampai sekitar +30 mV, kemudian repolarisasi saat K⁺ keluar. Pada sinaps, impuls dihantarkan secara kimiawi oleh neurotransmiter seperti asetilkolin. Lengkung refleks melibatkan reseptor, neuron sensorik, sumsum tulang belakang, neuron motorik, dan efektor.',
      'Sistem Endokrin dan Umpan Balik: Hormon dihasilkan kelenjar endokrin dan bekerja pada sel target. Tiroksin mengatur metabolisme, insulin menurunkan glukosa darah, glukagon meningkatkannya, dan adrenalin menyiapkan respons siaga. Pengaturan kadar hormon berlangsung melalui umpan balik negatif; kelainannya meliputi gondok, diabetes melitus, dan gigantisme.'
    ],
    keyFormulas: [
      { label: 'Kapasitas Vital dan Total Paru', formula: 'KV = VT + IRV + ERV \\qquad KTP = KV + VR' },
      { label: 'Ventilasi Alveolar', formula: '\\dot{V}_A = f \\times (V_T - V_D)' },
      { label: 'Klirens Ginjal', formula: 'C = \\dfrac{U \\cdot \\dot{V}}{P}' },
      { label: 'Potensial Aksi Neuron', formula: '-70\\ \\text{mV} \\xrightarrow{\\text{depolarisasi}} +30\\ \\text{mV} \\xrightarrow{\\text{repolarisasi}} -70\\ \\text{mV}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung kapasitas vital paru',
        problem: 'Volume tidal 500 mL, volume cadangan inspirasi 3.000 mL, volume cadangan ekspirasi 1.100 mL, dan volume residu 1.200 mL. Hitung kapasitas vital dan kapasitas total paru.',
        solution: 'KV = 500 + 3.000 + 1.100 = 4.600 mL. KTP = KV + VR = 4.600 + 1.200 = 5.800 mL.'
      },
      {
        title: 'Menghitung ventilasi alveolar',
        problem: 'Seseorang bernapas 16 kali per menit dengan volume tidal 500 mL dan ruang rugi 150 mL. Hitung ventilasi total dan ventilasi alveolar.',
        solution: 'Ventilasi total = 16 × 500 = 8.000 mL/menit. Ventilasi alveolar = 16 × (500 - 150) = 16 × 350 = 5.600 mL/menit.'
      },
      {
        title: 'Menghitung klirens kreatinin',
        problem: 'Konsentrasi kreatinin urin 120 mg/mL, laju urin 1 mL/menit, dan konsentrasi kreatinin plasma 1 mg/mL. Hitung klirens kreatinin.',
        solution: 'C = (U × V) / P = (120 × 1) / 1 = 120 mL/menit, yang mendekati laju filtrasi glomerulus normal.'
      }
    ],
    misconceptions: [
      'Mengira diafragma melengkung ke atas saat inspirasi. Saat inspirasi diafragma berkontraksi dan mendatar sehingga rongga dada membesar.',
      'Menyamakan respirasi dengan pernapasan. Pernapasan (ventilasi dan pertukaran gas) adalah proses fisik, sedangkan respirasi sel di mitokondria adalah proses kimiawi penghasil ATP.',
      'Menganggap urin primer sama dengan urin sesungguhnya. Urin primer masih mengandung glukosa dan asam amino yang hampir seluruhnya direabsorpsi sebelum menjadi urin sekunder.',
      'Menganggap impuls saraf adalah aliran elektron seperti dalam kabel. Impuls adalah perubahan potensial membran akibat pergerakan ion Na⁺ dan K⁺.'
    ],
    tutorTip: 'Untuk soal nefron, ingat tempat dan zatnya: filtrasi di glomerulus (semua molekul kecil), reabsorpsi di tubulus proksimal (glukosa dan asam amino hampir seluruhnya), augmentasi di tubulus distal. Untuk soal impuls, ingat urutan ion: Na⁺ masuk (naik), K⁺ keluar (turun).'
  },
  questions: [
    dasar(
      'Pertukaran oksigen dan karbon dioksida antara udara dan darah terjadi di...',
      ['bronkus', 'trakea', 'bronkiolus', 'alveolus'],
      'D',
      'Struktur ini berdinding sangat tipis dan dikelilingi kapiler darah.',
      'Pertukaran gas berlangsung di alveolus melalui difusi karena dindingnya sangat tipis dan dikelilingi kapiler darah. Bronkus, trakea, dan bronkiolus hanya menyalurkan udara.'
    ),
    dasar(
      'Pada saat inspirasi, otot diafragma...',
      ['berkontraksi dan mendatar sehingga volume rongga dada bertambah', 'berkontraksi dan melengkung ke atas', 'berelaksasi dan melengkung ke atas', 'tidak berubah karena hanya otot dada yang bekerja'],
      'A',
      'Volume rongga dada harus naik agar tekanan udara paru turun.',
      'Diafragma berkontraksi dan mendatar sehingga volume rongga dada bertambah dan tekanan di paru turun, memungkinkan udara masuk. Pada ekspirasi diafragma berelaksasi dan melengkung ke atas.'
    ),
    dasar(
      'Proses pembentukan urin primer di glomerulus dan kapsul Bowman disebut...',
      ['reabsorpsi', 'filtrasi', 'augmentasi', 'ekskresi'],
      'B',
      'Tekanan darah di glomerulus mendorong cairan keluar dari kapiler.',
      'Filtrasi terjadi di glomerulus, menyaring plasma kecuali sel darah dan protein besar, menghasilkan urin primer. Reabsorpsi dan augmentasi berlangsung di tubulus.'
    ),
    dasar(
      'Hormon yang menurunkan kadar glukosa darah adalah...',
      ['glukagon', 'adrenalin', 'insulin', 'tiroksin'],
      'C',
      'Hormon ini dihasilkan oleh sel beta pulau Langerhans.',
      'Insulin menurunkan glukosa darah dengan memicu penyerapan glukosa oleh sel dan pembentukan glikogen. Glukagon dan adrenalin justru menaikkan glukosa darah.'
    ),
    dasar(
      'Bagian neuron yang menerima rangsangan dan menghantarkannya ke badan sel adalah...',
      ['dendrit', 'akson', 'selubung mielin', 'sinaps'],
      'A',
      'Bagian ini bercabang-cabang pendek di dekat badan sel.',
      'Dendrit menerima rangsang dari neuron lain atau reseptor dan meneruskannya ke badan sel. Akson membawa impuls menjauhi badan sel.'
    ),
    sedang(
      'Sebagian besar karbon dioksida diangkut dalam darah dalam bentuk...',
      ['terlarut bebas dalam plasma', 'karbaminohemoglobin', 'ion bikarbonat (HCO₃⁻)', 'karboksihemoglobin'],
      'C',
      'Enzim karbonat anhidrase mengubah CO₂ dan air di dalam eritrosit.',
      'Sekitar 70 persen CO₂ diangkut sebagai ion bikarbonat yang terbentuk di eritrosit oleh enzim karbonat anhidrase. Sisanya sebagai karbaminohemoglobin dan terlarut. Karboksihemoglobin adalah ikatan hemoglobin dengan CO.'
    ),
    sedang(
      'Gas karbon monoksida (CO) berbahaya karena...',
      ['bereaksi dengan asam lambung dan merusak lambung', 'merusak dinding alveolus secara langsung', 'meningkatkan jumlah sel darah merah secara drastis', 'mengikat hemoglobin lebih kuat daripada O₂ sehingga pengangkutan oksigen menurun'],
      'D',
      'Afinitas CO terhadap hemoglobin sekitar 200 kali lebih besar daripada oksigen.',
      'CO membentuk karboksihemoglobin yang stabil sehingga hemoglobin tidak dapat mengangkut O₂ dan jaringan kekurangan oksigen.'
    ),
    sedang(
      'Glukosa dan asam amino pada filtrat glomerulus hampir seluruhnya direabsorpsi di...',
      ['glomerulus', 'tubulus kontortus proksimal', 'tubulus kontortus distal saja', 'duktus koligen'],
      'B',
      'Tubulus ini berselaput mikrovili sehingga permukaan serapnya luas.',
      'Reabsorpsi zat-zat penting terjadi terutama di tubulus kontortus proksimal yang berselaput mikrovili. Di glomerulus hanya terjadi filtrasi dan duktus koligen mengatur reabsorpsi air.'
    ),
    sedang(
      'Urutan jalur impuls pada gerak refleks yang benar adalah...',
      ['reseptor - neuron sensorik - sumsum tulang belakang - neuron motorik - efektor', 'reseptor - otak - neuron motorik - efektor', 'efektor - neuron motorik - sumsum tulang belakang - neuron sensorik - reseptor', 'reseptor - neuron motorik - sumsum tulang belakang - neuron sensorik - efektor'],
      'A',
      'Refleks tidak melewati otak sebelum respons terjadi.',
      'Pada refleks, impuls dari reseptor dibawa neuron sensorik ke sumsum tulang belakang, dihubungkan interneuron, lalu neuron motorik menuju efektor tanpa melewati otak terlebih dahulu.'
    ),
    sedang(
      'Kekurangan yodium dalam makanan dalam waktu lama dapat menyebabkan...',
      ['diabetes insipidus', 'gondok (pembesaran kelenjar tiroid)', 'gigantisme', 'akromegali'],
      'B',
      'Yodium diperlukan untuk menyusun hormon tiroksin.',
      'Yodium adalah bahan penyusun tiroksin. Kekurangannya menurunkan kadar tiroksin sehingga hipofisis terus memicu tiroid yang akhirnya membesar menjadi gondok.'
    ),
    tantangan(
      'Volume tidal 500 mL, volume cadangan inspirasi 3.000 mL, volume cadangan ekspirasi 1.100 mL, dan volume residu 1.200 mL. Kapasitas vital paru tersebut adalah...',
      ['3.500 mL', '4.100 mL', '4.600 mL', '5.800 mL'],
      'C',
      'Kapasitas vital tidak mencakup volume residu.',
      'KV = VT + IRV + ERV = 500 + 3.000 + 1.100 = 4.600 mL. Nilai 5.800 mL adalah kapasitas total paru karena ditambah volume residu.'
    ),
    tantangan(
      'Seseorang bernapas 16 kali per menit dengan volume tidal 500 mL dan ruang rugi 150 mL. Ventilasi alveolarnya adalah...',
      ['8.000 mL/menit', '2.400 mL/menit', '7.400 mL/menit', '5.600 mL/menit'],
      'D',
      'Ruang rugi tidak ikut pertukaran gas.',
      'Ventilasi alveolar = frekuensi × (VT - ruang rugi) = 16 × (500 - 150) = 16 × 350 = 5.600 mL/menit.'
    ),
    tantangan(
      'Pada fase depolarisasi potensial aksi neuron, peristiwa yang terjadi adalah...',
      ['ion K⁺ keluar dari akson melalui kanal kalium', 'ion Na⁺ masuk melalui kanal natrium bergerbang voltase sehingga bagian dalam membran menjadi positif', 'ion Cl⁻ masuk dan memperkuat muatan negatif', 'pompa Na⁺/K⁺ langsung menaikkan potensial membran'],
      'B',
      'Depolarisasi menaikkan potensial dari sekitar -70 mV menjadi positif.',
      'Rangsangan yang melampaui ambang membuka kanal Na⁺ bergerbang voltase sehingga Na⁺ masuk dan potensial naik hingga sekitar +30 mV. Setelah itu K⁺ keluar untuk repolarisasi.'
    ),
    tantangan(
      'Konsentrasi kreatinin urin 120 mg/mL, laju pembentukan urin 1 mL/menit, dan konsentrasi kreatinin plasma 1 mg/mL. Klirens kreatinin adalah...',
      ['12 mL/menit', '60 mL/menit', '120 mL/menit', '240 mL/menit'],
      'C',
      'Klirens = (U × V) dibagi P.',
      'C = (120 × 1) / 1 = 120 mL/menit.'
    ),
    tantangan(
      'Seorang pasien memiliki kadar glukosa darah sangat tinggi dan urinnya mengandung glukosa, tetapi tidak mengandung protein. Penyebab yang paling mungkin adalah...',
      ['insulin kurang sehingga beban glukosa pada filtrat melampaui kapasitas reabsorpsi tubulus proksimal', 'filtrasi glomerulus rusak sehingga protein bocor ke urin', 'ADH berlebih yang menahan air dalam darah', 'aldosteron kurang sehingga natrium terbuang'],
      'A',
      'Urin tanpa protein menandakan filtrasi glomerulus masih normal.',
      'Kekurangan insulin menaikkan glukosa darah dan glukosa pada filtrat melebihi ambang reabsorpsi tubulus sehingga muncul dalam urin (glukosuria). Tidak adanya protein menunjukkan glomerulus masih normal.'
    )
  ]
});
