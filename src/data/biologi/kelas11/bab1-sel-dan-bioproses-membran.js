import { bab, dasar, sedang, tantangan } from '../author.js';

export default bab({
  grade: 11,
  number: 1,
  slug: 'sel-dan-bioproses-membran',
  title: 'Struktur Sel dan Bioproses Transpor Membran',
  element: 'Pemahaman Biologi: perbedaan sel prokariotik-eukariotik, organel sel hewan-tumbuhan, difusi, osmosis, transpor aktif, dan endositosis-eksositosis',
  summary: {
    overview: 'Sel adalah unit struktural dan fungsional terkecil makhluk hidup. Bab ini membahas teori sel, perbedaan sel prokariotik dan eukariotik, struktur serta fungsi organel pada sel hewan dan tumbuhan, model mosaik cair membran plasma, hubungan ukuran sel dengan rasio luas permukaan terhadap volume, serta mekanisme transpor melintasi membran: difusi, osmosis, transpor aktif, endositosis, dan eksositosis.',
    coreConcepts: [
      'Teori Sel dan Tipe Sel: Semua makhluk hidup tersusun atas sel, sel adalah unit fungsional terkecil, dan sel berasal dari sel yang sudah ada. Sel prokariotik tidak memiliki membran inti (DNA di nukleoid) dan ribosom 70S, sedangkan sel eukariotik memiliki inti sejati dan organel bermembran. Sel tumbuhan memiliki dinding selulosa, kloroplas, dan vakuola sentral besar; sel hewan memiliki sentriol dan lisosom.',
      'Organel dan Fungsinya: Inti menyimpan DNA dan mengendalikan sel; RE kasar (berribosom) mensintesis protein, RE halus mensintesis lipid dan detoksifikasi; badan Golgi memodifikasi, mengemas, dan mensekresikan produk sel; mitokondria menghasilkan ATP melalui respirasi aerob; kloroplas melakukan fotosintesis; lisosom mencerna dengan enzim hidrolitik; vakuola menyimpan air dan zat.',
      'Teori Endosimbiosis: Mitokondria dan kloroplas diduga berasal dari prokariota yang hidup di dalam sel inang. Buktinya, kedua organel memiliki DNA sirkuler sendiri, ribosom 70S, membran ganda, dan membelah sendiri seperti bakteri.',
      'Membran Plasma Model Mosaik Cair: Membran tersusun atas lapisan ganda fosfolipid (kepala hidrofilik di luar, ekor hidrofobik di dalam) yang disisipi protein integral dan perifer, kolesterol, serta glikoprotein. Membran bersifat selektif permeabel: molekul kecil nonpolar lewat mudah, sedangkan ion dan molekul polar memerlukan protein pengangkut.',
      'Transpor Pasif dan Osmosis: Difusi memindahkan zat dari konsentrasi tinggi ke rendah tanpa energi; difusi terfasilitasi memakai protein kanal atau pembawa. Osmosis adalah difusi air melewati membran dari potensial air tinggi ke rendah. Dalam larutan hipotonik sel hewan menggembung dan dapat lisis, sedangkan sel tumbuhan menjadi turgid; dalam larutan hipertonik sel hewan mengerut dan sel tumbuhan mengalami plasmolisis.',
      'Transpor Aktif dan Vesikular: Transpor aktif memindahkan zat melawan gradien konsentrasi dengan energi ATP, misalnya pompa Na⁺/K⁺ yang memompa 3 Na⁺ keluar dan 2 K⁺ masuk per siklus. Endositosis (fagositosis, pinositosis) memasukkan partikel besar lewat vesikel, sedangkan eksositosis mengeluarkannya.'
    ],
    keyFormulas: [
      { label: 'Rasio Luas Permukaan terhadap Volume Sel Kubus', formula: '\\dfrac{L}{V} = \\dfrac{6s^2}{s^3} = \\dfrac{6}{s}' },
      { label: 'Potensial Air Sel Tumbuhan', formula: '\\Psi = \\Psi_s + \\Psi_p' },
      { label: 'Perbesaran Mikroskop', formula: 'M = \\dfrac{\\text{ukuran bayangan}}{\\text{ukuran sebenarnya}}' },
      { label: 'Laju Difusi', formula: '\\text{laju difusi} \\propto \\dfrac{A \\cdot \\Delta C}{d}' }
    ],
    workedExamples: [
      {
        title: 'Membandingkan rasio luas permukaan terhadap volume',
        problem: 'Sel berbentuk kubus A bersisi 2 µm dan sel B bersisi 4 µm. Sel mana yang pertukaran zatnya lebih efisien?',
        solution: 'Rasio L/V = 6/s. Sel A: 6/2 = 3 µm⁻¹. Sel B: 6/4 = 1,5 µm⁻¹. Sel A memiliki rasio lebih besar sehingga difusi zat ke seluruh bagian sel lebih cepat dan efisien. Karena itu sel berukuran kecil.'
      },
      {
        title: 'Menghitung potensial air sel tumbuhan',
        problem: 'Sel tumbuhan memiliki potensial osmotik (Ψs) -0,6 MPa dan potensial tekanan (Ψp) +0,4 MPa. Hitung potensial airnya, dan prediksi arah gerak air bila sel direndam dalam air murni (Ψ = 0).',
        solution: 'Ψ sel = Ψs + Ψp = -0,6 + 0,4 = -0,2 MPa. Air bergerak dari potensial air lebih tinggi ke lebih rendah. Air murni (0) lebih tinggi daripada sel (-0,2), sehingga air masuk ke sel sampai sel turgid.'
      },
      {
        title: 'Menghitung muatan dan ATP pada pompa Na⁺/K⁺',
        problem: 'Pompa Na⁺/K⁺ bekerja 1.000 siklus. Berapa ion yang dipindahkan dan berapa ATP yang dipakai jika satu siklus memakai satu ATP?',
        solution: 'Tiap siklus mengeluarkan 3 Na⁺ dan memasukkan 2 K⁺. Dalam 1.000 siklus, 3.000 Na⁺ keluar dan 2.000 K⁺ masuk, dengan 1.000 ATP terpakai. Muatan neto yang keluar adalah 1.000 muatan positif sehingga bagian dalam sel menjadi lebih negatif.'
      }
    ],
    misconceptions: [
      'Mengira osmosis adalah perpindahan zat terlarut. Osmosis hanyalah perpindahan air melintasi membran semipermeabel menurut gradien potensial air.',
      'Menganggap mitokondria hanya ada pada hewan. Sel tumbuhan juga memiliki mitokondria karena memerlukan respirasi selular selain fotosintesis di kloroplas.',
      'Mengira sel tumbuhan akan pecah dalam larutan hipotonik. Dinding sel selulosa menahan tekanan sehingga sel menjadi turgid, bukan lisis.',
      'Menganggap transpor aktif tidak memerlukan protein. Transpor aktif selalu melibatkan protein pembawa atau pompa dan energi ATP untuk melawan gradien konsentrasi.'
    ],
    tutorTip: 'Untuk soal osmosis, tentukan dahulu larutan yang memiliki potensial air lebih tinggi (lebih encer); air selalu bergerak menuju potensial air lebih rendah (lebih pekat). Untuk soal rasio L/V, ingat bahwa semakin kecil sel semakin besar L/V.'
  },
  questions: [
    dasar(
      'Organel yang berfungsi menghasilkan ATP melalui respirasi aerob adalah...',
      ['mitokondria', 'ribosom', 'lisosom', 'badan Golgi'],
      'A',
      'Organel ini disebut pembangkit energi sel.',
      'Mitokondria menghasilkan ATP melalui respirasi aerob. Ribosom mensintesis protein, lisosom mencerna zat, dan badan Golgi memodifikasi serta mengemas produk sel.'
    ),
    dasar(
      'Struktur yang hanya dimiliki sel tumbuhan dan tidak ditemukan pada sel hewan adalah...',
      ['membran plasma', 'mitokondria', 'ribosom', 'kloroplas dan dinding sel selulosa'],
      'D',
      'Ingat organel fotosintesis dan lapisan pelindung luar membran.',
      'Sel tumbuhan memiliki kloroplas dan dinding sel selulosa, sedangkan membran plasma, mitokondria, dan ribosom dimiliki oleh sel hewan juga.'
    ),
    dasar(
      'Perpindahan molekul dari daerah berkonsentrasi tinggi ke rendah tanpa memerlukan energi disebut...',
      ['transpor aktif', 'endositosis', 'difusi', 'eksositosis'],
      'C',
      'Perhatikan kata kunci tanpa energi.',
      'Difusi adalah transpor pasif menurut gradien konsentrasi. Transpor aktif memerlukan ATP, sedangkan endositosis dan eksositosis memerlukan energi untuk membentuk vesikel.'
    ),
    dasar(
      'Menurut model mosaik cair, membran plasma tersusun atas...',
      ['lapisan tunggal protein tanpa lipid', 'lapisan ganda fosfolipid yang disisipi protein', 'selulosa dan lignin yang tersusun rapat', 'kitin yang berlapis-lapis'],
      'B',
      'Bagian fosfolipid memiliki kepala hidrofilik dan ekor hidrofobik.',
      'Membran plasma berupa lapisan ganda fosfolipid dengan protein integral dan perifer yang tertanam di dalamnya. Selulosa menyusun dinding sel tumbuhan dan kitin dinding sel fungi.'
    ),
    dasar(
      'Sel darah merah yang dimasukkan ke dalam air murni akan...',
      ['mengerut (krenasi)', 'tetap berbentuk semula', 'mengalami plasmolisis', 'membengkak dan pecah (lisis)'],
      'D',
      'Air murni bersifat hipotonik terhadap isi sel darah merah.',
      'Air masuk ke sel karena konsentrasi zat terlarut di dalam sel lebih tinggi sehingga sel membengkak dan pecah (lisis). Plasmolisis hanya terjadi pada sel tumbuhan yang berdinding sel.'
    ),
    sedang(
      'Fungsi utama retikulum endoplasma kasar adalah...',
      ['mensintesis lipid dan steroid sel', 'mensintesis protein untuk sekresi atau membran', 'menghasilkan ATP lewat respirasi aerob', 'menetralkan racun dengan enzim detoksifikasi'],
      'B',
      'Permukaannya ditempeli ribosom.',
      'Ribosom pada RE kasar mensintesis protein untuk sekresi dan membran. Sintesis lipid dan detoksifikasi dilakukan RE halus, sedangkan ATP dihasilkan mitokondria.'
    ),
    sedang(
      'Pernyataan yang benar mengenai sel prokariotik adalah...',
      ['memiliki mitokondria dan retikulum endoplasma', 'memiliki membran inti yang membungkus DNA sirkuler', 'DNA di nukleoid tanpa membran inti, ribosom 70S', 'memiliki banyak organel bermembran seperti badan Golgi'],
      'C',
      'Bandingkan lokasi DNA dan jenis organel pada prokariota.',
      'Pada prokariota DNA tidak dibungkus membran inti (nukleoid) dan ribosomnya berukuran 70S. Organel bermembran seperti mitokondria dan Golgi hanya ada pada eukariota.'
    ),
    sedang(
      'Sel berbentuk kubus bersisi 2 µm memiliki rasio luas permukaan terhadap volume sebesar...',
      ['3 µm⁻¹', '6 µm⁻¹', '12 µm⁻¹', '1,5 µm⁻¹'],
      'A',
      'Gunakan L/V = 6/s untuk kubus.',
      'Luas permukaan = 6 × 2² = 24 µm² dan volume = 2³ = 8 µm³ sehingga L/V = 24/8 = 3 µm⁻¹.'
    ),
    sedang(
      'Pada satu siklus kerja pompa natrium-kalium, yang terjadi adalah...',
      ['2 ion Na⁺ keluar dan 3 ion K⁺ masuk dengan energi ATP', '3 ion K⁺ keluar dan 2 ion Na⁺ masuk', '3 ion Na⁺ keluar dan 2 ion K⁺ masuk memakai ATP', '1 ion Na⁺ keluar dan 1 ion K⁺ masuk tanpa energi'],
      'C',
      'Pompa ini memelihara gradien Na⁺ tinggi di luar dan K⁺ tinggi di dalam sel.',
      'Pompa Na⁺/K⁺-ATPase mengeluarkan 3 Na⁺ dan memasukkan 2 K⁺ per siklus dengan memakai satu ATP, melawan gradien konsentrasi masing-masing ion.'
    ),
    sedang(
      'Sel epidermis bawang direndam dalam larutan gula pekat (hipertonik). Peristiwa yang terjadi adalah...',
      ['sel menjadi sangat turgid lalu dindingnya pecah', 'air keluar sehingga membran plasma terlepas dari dinding', 'air masuk berlebihan sehingga dinding sel terkoyak', 'tidak ada perubahan karena dinding sel kedap air sepenuhnya'],
      'B',
      'Air bergerak menuju larutan yang potensial airnya lebih rendah.',
      'Larutan hipertonik memiliki potensial air lebih rendah sehingga air keluar dari sel. Volume sitoplasma menyusut dan membran plasma terlepas dari dinding sel, yaitu plasmolisis.'
    ),
    tantangan(
      'Sel tumbuhan memiliki Ψs = -0,8 MPa dan Ψp = +0,3 MPa. Sel tersebut direndam dalam larutan bernilai Ψ = -0,3 MPa. Pernyataan yang benar adalah...',
      ['Ψ sel = -0,5 MPa dan air bergerak masuk ke dalam sel', 'Ψ sel = -1,1 MPa dan air bergerak keluar sel', 'Ψ sel = -0,5 MPa dan air bergerak keluar sel', 'Ψ sel = +0,3 MPa dan tidak ada pergerakan air'],
      'A',
      'Hitung Ψ sel, lalu bandingkan dengan Ψ larutan.',
      'Ψ sel = Ψs + Ψp = -0,8 + 0,3 = -0,5 MPa. Larutan (-0,3 MPa) memiliki potensial air lebih tinggi daripada sel (-0,5 MPa), sehingga air bergerak masuk ke dalam sel.'
    ),
    tantangan(
      'Potongan kentang direndam dalam larutan sukrosa: 0 M massanya naik 10 persen, 0,2 M naik 4 persen, 0,4 M turun 2 persen, 0,6 M turun 8 persen. Konsentrasi larutan yang isotonik dengan sel kentang kira-kira...',
      ['0,20 M', '0,40 M', '0,60 M', '0,33 M'],
      'D',
      'Titik isotonik adalah ketika perubahan massa nol; cari dengan interpolasi linear.',
      'Perubahan massa berubah dari +4 persen (0,2 M) ke -2 persen (0,4 M), selisih 6 persen per 0,2 M. Titik nol berada pada 0,2 + (4/6)(0,2) ≈ 0,33 M, sehingga larutan isotonik sekitar 0,33 M.'
    ),
    tantangan(
      'Suatu racun menghambat rantai transpor elektron mitokondria sehingga produksi ATP turun drastis. Proses transpor yang paling cepat terganggu adalah...',
      ['difusi oksigen melalui lapisan ganda fosfolipid', 'osmosis air melewati membran', 'pompa Na⁺/K⁺ yang melawan gradien konsentrasi', 'difusi terfasilitasi glukosa melalui protein kanal'],
      'C',
      'Cari proses yang bergantung langsung pada ATP.',
      'Pompa Na⁺/K⁺ adalah transpor aktif yang memerlukan ATP sehingga berhenti ketika ATP habis. Difusi sederhana, osmosis, dan difusi terfasilitasi mengikuti gradien dan tidak memerlukan ATP.'
    ),
    tantangan(
      'Makrofag menelan bakteri dengan membentuk vesikel. Urutan peristiwa selanjutnya yang tepat adalah...',
      ['fagosom bergabung dengan lisosom, lalu enzim mencerna bakteri', 'lisosom mensintesis bakteri baru di dalam fagosom sel', 'fagosom langsung pecah di sitoplasma tanpa melibatkan lisosom', 'bakteri keluar lagi lewat eksositosis tanpa pernah dicerna'],
      'A',
      'Fagositosis diikuti pencernaan intraselular oleh enzim dalam lisosom.',
      'Fagositosis membentuk fagosom yang bergabung dengan lisosom menjadi fagolisosom. Enzim hidrolitik lisosom mencerna bakteri, dan sisa yang tidak tercerna dikeluarkan lewat eksositosis.'
    ),
    tantangan(
      'Sel A berbentuk kubus bersisi 1 µm dan sel B bersisi 10 µm. Pernyataan yang benar adalah...',
      ['sel B memiliki rasio L/V lebih besar sehingga pertukaran zatnya efisien', 'sel A memiliki rasio L/V sepuluh kali sel B sehingga lebih efisien', 'kedua sel memiliki rasio L/V yang sama karena berbentuk kubus', 'sel B lebih efisien karena volumenya jauh lebih besar dari sel A'],
      'B',
      'Hitung L/V = 6/s untuk masing-masing sel.',
      'L/V sel A = 6/1 = 6 µm⁻¹, sel B = 6/10 = 0,6 µm⁻¹. Sel A memiliki rasio sepuluh kali lebih besar sehingga pertukaran zat per satuan volume lebih efisien.'
    )
  ]
});
