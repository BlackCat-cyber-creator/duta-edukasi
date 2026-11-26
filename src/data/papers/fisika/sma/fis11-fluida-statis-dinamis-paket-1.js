/**
 * Paket Soal Terstruktur: Latihan Fisika SMA Kelas 11: Fluida Statis & Fluida Dinamis
 * 15 soal: Bagian A (10 Pilihan Ganda A–E @ 1 poin) + Bagian B (5 Uraian Analisis @ 4 poin); total 30 poin.
 */
const OK1 = [{ code: 'A1', text: 'Jawaban dan konsep fisika tepat sesuai pembahasan.' }];
const OK4 = [
  { code: 'M2', text: 'Merumuskan hukum fluida statis/dinamis serta mengonversi satuan SI dengan tepat.' },
  { code: 'A2', text: 'Menurunkan hasil numerik akhir dan satuan dengan benar.' }
];

export default {
  id: 'fis11-fluida-statis-dinamis-p1',
  slug: 'fis11-fluida-statis-dinamis-paket-1',
  subject: 'fisika',
  grade: 11,
  track: 'kurikulum-merdeka',
  accessTier: 'free',
  topic: 'Fisika SMA Kelas 11: tekanan hidrostatis, hukum Pascal, gaya apung Archimedes, tegangan permukaan, persamaan kontinuitas, dan asas Bernoulli',
  relatedChapterIds: [
    'ipa11-bab4-fluida-statis-dan-dinamis',
    'ipa11-bab1-dinamika-gerak-dan-hukum-newton'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'Latihan Kurikulum',
  title: 'Latihan Fisika SMA Kelas 11: Fluida Statis & Fluida Dinamis',
  totalMarks: 30,
  instructions:
    'Paket ini terdiri atas Bagian A (10 pilihan ganda @ 1 poin) dan Bagian B (5 uraian analisis @ 4 poin; total 30 poin). Gunakan $g = 10\\ \\text{m/s}^2$ dan massa jenis air $\\rho_{\\text{air}} = 1000\\ \\text{kg/m}^3$ kecuali dinyatakan lain.',
  source: {
    org: 'Tim Akademik Duta e-dukasi',
    file: 'original-curated-batch-10',
    license: 'Hak cipta materi kurasi asli Duta e-dukasi'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Pilihan Ganda (10 Soal)',
      marks: 10,
      stem: 'Pilihlah satu jawaban yang paling tepat (masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt: 'Seorang penyelam berada pada kedalaman $4\\ \\text{m}$ di bawah permukaan air tawar ($\\rho = 1000\\ \\text{kg/m}^3$, $g = 10\\ \\text{m/s}^2$). Besar tekanan hidrostatis yang dialaminya adalah ....\n\nA. $4\\ \\text{kPa}$\nB. $20\\ \\text{kPa}$\nC. $40\\ \\text{kPa}$\nD. $400\\ \\text{kPa}$\nE. $104\\ \\text{kPa}$',
          answer: 'C. $40\\ \\text{kPa}$',
          principle: 'Tekanan hidrostatis $P_h = \\rho g h$.',
          solution: '$$P_h = 1000 \\times 10 \\times 4 = 40.000\\ \\text{Pa} = 40\\ \\text{kPa}$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '2',
          marks: 1,
          prompt: 'Sebuah pompa hidrolik memiliki pengisap kecil berluas penampang $20\\ \\text{cm}^2$ dan pengisap besar $400\\ \\text{cm}^2$. Agar pengisap besar mampu mengangkat beban $12.000\\ \\text{N}$, gaya tekan minimum pada pengisap kecil adalah ....\n\nA. $300\\ \\text{N}$\nB. $400\\ \\text{N}$\nC. $600\\ \\text{N}$\nD. $800\\ \\text{N}$\nE. $1.200\\ \\text{N}$',
          answer: 'C. $600\\ \\text{N}$',
          principle: 'Hukum Pascal: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$.',
          solution: '$$F_1 = F_2 \\cdot \\frac{A_1}{A_2} = 12.000 \\times \\frac{20}{400} = 600\\ \\text{N}$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '3',
          marks: 1,
          prompt: 'Sebuah balok kayu homogen bermassa jenis $750\\ \\text{kg/m}^3$ terapung di atas air ($\\rho = 1000\\ \\text{kg/m}^3$). Persentase volume balok yang muncul di atas permukaan air adalah ....\n\nA. $20\\%$\nB. $25\\%$\nC. $50\\%$\nD. $75\\%$\nE. $80\\%$',
          answer: 'B. $25\\%$',
          principle: 'Saat terapung, fraksi volume tercelup sama dengan $\\frac{\\rho_{\\text{benda}}}{\\rho_{\\text{fluida}}}$.',
          solution: 'Fraksi tercelup $= \\frac{750}{1000} = 75\\%$, sehingga bagian yang muncul di permukaan adalah $100\\% - 75\\% = 25\\%$ (opsi B).',
          rubric: OK1
        },
        {
          label: '4',
          marks: 1,
          prompt: 'Batu bermassa di udara ditimbang sebesar $20\\ \\text{N}$ ($m = 2\\ \\text{kg}$), lalu saat dicelupkan seluruhnya ke dalam air beratnya terbaca $15\\ \\text{N}$. Volume batu tersebut adalah ....\n\nA. $2 \\times 10^{-4}\\ \\text{m}^3$\nB. $4 \\times 10^{-4}\\ \\text{m}^3$\nC. $5 \\times 10^{-4}\\ \\text{m}^3$\nD. $1 \\times 10^{-3}\\ \\text{m}^3$\nE. $2 \\times 10^{-3}\\ \\text{m}^3$',
          answer: 'C. $5 \\times 10^{-4}\\ \\text{m}^3$',
          principle: 'Gaya apung $F_A = w_{\\text{udara}} - w_{\\text{air}} = \\rho_{\\text{air}} g V$.',
          solution: '$F_A = 20 - 15 = 5\\ \\text{N}$, maka $V = \\frac{F_A}{\\rho g} = \\frac{5}{1000 \\times 10} = 5 \\times 10^{-4}\\ \\text{m}^3$ (opsi C).',
          rubric: OK1
        },
        {
          label: '5',
          marks: 1,
          prompt: 'Sebuah pipa U mula-mula diisi air ($\\rho_1 = 1{,}0\\ \\text{g/cm}^3$). Pada salah satu kaki dituangkan minyak ($\\rho_2 = 0{,}8\\ \\text{g/cm}^3$) setinggi $10\\ \\text{cm}$. Selisih ketinggian permukaan minyak dan air pada kedua kaki pipa U adalah ....\n\nA. $1{,}0\\ \\text{cm}$\nB. $2{,}0\\ \\text{cm}$\nC. $4{,}0\\ \\text{cm}$\nD. $6{,}0\\ \\text{cm}$\nE. $8{,}0\\ \\text{cm}$',
          answer: 'B. $2{,}0\\ \\text{cm}$',
          principle: 'Pada bidang batas bawah yang segaris horizontal, $\\rho_{\\text{air}} h_{\\text{air}} = \\rho_{\\text{minyak}} h_{\\text{minyak}}$.',
          solution: 'Tinggi air penyeimbang $h_{\\text{air}} = \\frac{0{,}8 \\times 10}{1{,}0} = 8\\ \\text{cm}$. Selisih permukaan $= 10 - 8 = 2{,}0\\ \\text{cm}$ (opsi B).',
          rubric: OK1
        },
        {
          label: '6',
          marks: 1,
          prompt: 'Serangga air dapat berjalan di atas permukaan air yang tenang terutama karena adanya fenomena ....\n\nA. viskositas fluida\nB. tekanan hidrostatis\nC. tegangan permukaan\nD. efek Venturi\nE. gaya Stokes',
          answer: 'C. tegangan permukaan',
          principle: 'Gaya kohesi antarpartikel permukaan air membentuk lapisan elastis yang menahan beban ringan.',
          solution: 'Tegangan permukaan menahan kaki serangga agar tidak menembus permukaan air (opsi C).',
          rubric: OK1
        },
        {
          label: '7',
          marks: 1,
          prompt: 'Air mengalir melewati pipa berpenampang $A_1 = 40\\ \\text{cm}^2$ dengan kelajuan $2\\ \\text{m/s}$, lalu masuk ke bagian pipa sempit berpenampang $A_2 = 10\\ \\text{cm}^2$. Kelajuan aliran air di bagian pipa sempit adalah ....\n\nA. $0{,}5\\ \\text{m/s}$\nB. $4\\ \\text{m/s}$\nC. $6\\ \\text{m/s}$\nD. $8\\ \\text{m/s}$\nE. $16\\ \\text{m/s}$',
          answer: 'D. $8\\ \\text{m/s}$',
          principle: 'Persamaan kontinuitas fluida tak termampatkan: $A_1 v_1 = A_2 v_2$.',
          solution: '$$v_2 = \\frac{A_1}{A_2} v_1 = \\frac{40}{10} \\times 2 = 8\\ \\text{m/s}$$\n(opsi D).',
          rubric: OK1
        },
        {
          label: '8',
          marks: 1,
          prompt: 'Sebuah tangki air terbuka memiliki lubang kebocoran kecil pada kedalaman $5\\ \\text{m}$ di bawah permukaan air. Kelajuan pancaran air yang keluar dari lubang tersebut adalah ....\n\nA. $5\\ \\text{m/s}$\nB. $5\\sqrt{2}\\ \\text{m/s}$\nC. $10\\ \\text{m/s}$\nD. $10\\sqrt{2}\\ \\text{m/s}$\nE. $20\\ \\text{m/s}$',
          answer: 'C. $10\\ \\text{m/s}$',
          principle: 'Teorema Torricelli: $v = \\sqrt{2gh}$.',
          solution: '$$v = \\sqrt{2 \\times 10 \\times 5} = \\sqrt{100} = 10\\ \\text{m/s}$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '9',
          marks: 1,
          prompt: 'Air mengalir melalui pipa mendatar dengan kelajuan $v_1 = 2\\ \\text{m/s}$ di bagian lebar dan $v_2 = 6\\ \\text{m/s}$ di bagian menyempit. Selisih tekanan antara bagian lebar dan menyempit ($P_1 - P_2$) adalah ....\n\nA. $8\\ \\text{kPa}$\nB. $12\\ \\text{kPa}$\nC. $16\\ \\text{kPa}$\nD. $20\\ \\text{kPa}$\nE. $32\\ \\text{kPa}$',
          answer: 'C. $16\\ \\text{kPa}$',
          principle: 'Asas Bernoulli untuk pipa mendatar ($h_1 = h_2$): $P_1 - P_2 = \\frac{1}{2}\\rho(v_2^2 - v_1^2)$.',
          solution: '$$P_1 - P_2 = \\frac{1}{2}(1000)(6^2 - 2^2) = 500(36 - 4) = 16.000\\ \\text{Pa} = 16\\ \\text{kPa}$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '10',
          marks: 1,
          prompt: 'Gaya angkat pesawat terbang dapat dihasilkan karena bentuk penampang sayap (airfoil) dirancang sehingga ....\n\nA. kelajuan udara di atas sayap lebih kecil sehingga tekanan di atas lebih besar\nB. kelajuan udara di atas sayap lebih besar sehingga tekanan di bawah sayap lebih besar\nC. massa jenis udara di atas sayap jauh lebih tinggi daripada di bawah sayap\nD. tekanan udara di atas dan di bawah sayap dibuat sama\nE. aliran udara di bawah sayap dibuat berpusar ke atas',
          answer: 'B. kelajuan udara di atas sayap lebih besar sehingga tekanan di bawah sayap lebih besar',
          principle: 'Berdasarkan asas Bernoulli, fluida yang bergerak lebih cepat memiliki tekanan statis yang lebih rendah.',
          solution: 'Udara mengalir lebih cepat di permukaan atas sayap sehingga $P_{\\text{atas}} < P_{\\text{bawah}}$ dan muncul gaya angkat ke atas (opsi B).',
          rubric: OK1
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Uraian Analisis (5 Soal)',
      marks: 20,
      stem: 'Selesaikan ke-5 soal uraian berikut dengan menuliskan hukum fisika, penurunan rumus, dan satuan lengkap (masing-masing bernilai 4 poin).',
      parts: [
        {
          label: '11',
          marks: 4,
          prompt: 'Sebuah tangki air yang sangat luas memiliki ketinggian air total $3{,}2\\ \\text{m}$ di atas lantai datar. Sebuah lubang kecil terdapat pada dinding tangki setinggi $1{,}4\\ \\text{m}$ dari permukaan tanah. Hitunglah kelajuan pancaran air saat keluar lubang dan jarak mendatar jatuhnya air dari kaki tangki!',
          answer: 'Kelajuan $v = 6\\ \\text{m/s}$, jarak mendatar $x = \\frac{6\\sqrt{7}}{5} \\approx 3{,}17\\ \\text{m}$ (atau $x = 2\\sqrt{h_1 h_2} = 2\\sqrt{1{,}8 \\times 1{,}4}$).',
          principle: 'Kelajuan $v = \\sqrt{2g h_{\\text{atas}}}$ dan waktu jatuh $t = \\sqrt{\\frac{2h_{\\text{bawah}}}{g}}$ sehingga $x = 2\\sqrt{h_{\\text{atas}} h_{\\text{bawah}}}$.',
          solution:
            'Kedalaman lubang dari permukaan air: $h_1 = 3{,}2 - 1{,}4 = 1{,}8\\ \\text{m}$, tinggi dari tanah $h_2 = 1{,}4\\ \\text{m}$.\n1. Kelajuan keluar: $v = \\sqrt{2(10)(1{,}8)} = \\sqrt{36} = 6\\ \\text{m/s}$.\n2. Jarak mendatar: $x = 2\\sqrt{1{,}8 \\times 1{,}4} = 2\\sqrt{2{,}52} \\approx 3{,}17\\ \\text{m}$.',
          rubric: OK4
        },
        {
          label: '12',
          marks: 4,
          prompt: 'Sebuah kubus logam berongga memiliki sisi $20\\ \\text{cm}$ ($V = 8 \\times 10^{-3}\\ \\text{m}^3$) dicelupkan seluruhnya ke dalam zat cair bermassa jenis $800\\ \\text{kg/m}^3$. Jika massa kubus adalah $10\\ \\text{kg}$, hitunglah gaya apung yang dialami kubus dan gaya tegang tali bila kubus digantung menggunakan tali di dalam zat cair!',
          answer: 'Gaya apung $F_A = 64\\ \\text{N}$, gaya tegang tali $T = 36\\ \\text{N}$.',
          principle: 'Kesetimbangan benda tercelup: $T + F_A = w$.',
          solution:
            'Berat kubus $w = mg = 10 \\times 10 = 100\\ \\text{N}$.\nGaya apung: $F_A = \\rho g V = 800 \\times 10 \\times (8 \\times 10^{-3}) = 64\\ \\text{N}$.\n\nGaya tegang tali penahan: $T = w - F_A = 100 - 64 = 36\\ \\text{N}$.',
          rubric: OK4
        },
        {
          label: '13',
          marks: 4,
          prompt: 'Sebuah sayap pesawat memiliki luas total permukaan $40\\ \\text{m}^2$. Pada saat terbang mendatar, kelajuan aliran udara di bagian atas sayap adalah $120\\ \\text{m/s}$ dan di bagian bawah sayap adalah $100\\ \\text{m/s}$. Jika massa jenis udara $1{,}2\\ \\text{kg/m}^3$, hitunglah besar gaya angkat yang bekerja pada sayap!',
          answer: '$105.600\\ \\text{N}$ ($105{,}6\\ \\text{kN}$)',
          principle: 'Gaya angkat sayap $F_{\\text{angkat}} = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) A$.',
          solution:
            '$$F_{\\text{angkat}} = \\frac{1}{2}(1{,}2)(120^2 - 100^2)(40) = 0{,}6 \\times (14.400 - 10.000) \\times 40 = 0{,}6 \\times 4.400 \\times 40 = 105.600\\ \\text{N}.$$',
          rubric: OK4
        },
        {
          label: '14',
          marks: 4,
          prompt: 'Air mengalir melalui pipa mendatar berjari-jari $R_1 = 4\\ \\text{cm}$ menuju pipa berjari-jari $R_2 = 2\\ \\text{cm}$. Jika kelajuan air di pipa lebar adalah $1{,}5\\ \\text{m/s}$, hitunglah debit aliran air (dalam liter/s) serta kelajuan di pipa sempit!',
          answer: 'Kelajuan $v_2 = 6\\ \\text{m/s}$; debit $Q = 2{,}4\\pi \\approx 7{,}54\\ \\text{L/s}$.',
          principle: 'Pada penampang lingkaran, $v_2 = \\left(\\frac{R_1}{R_2}\\right)^2 v_1$ dan debit $Q = A_1 v_1$.',
          solution:
            '1. Kelajuan di pipa sempit: $v_2 = \\left(\\frac{4}{2}\\right)^2 (1{,}5) = 4 \\times 1{,}5 = 6\\ \\text{m/s}$.\n2. Luas $A_1 = \\pi (0{,}04)^2 = 1{,}6 \\times 10^{-3}\\pi\\ \\text{m}^2$, maka debit $Q = (1{,}6 \\times 10^{-3}\\pi)(1{,}5) = 2{,}4 \\times 10^{-3}\\pi\\ \\text{m}^3/\\text{s} = 2{,}4\\pi\\ \\text{L/s} \\approx 7{,}54\\ \\text{L/s}$.',
          rubric: OK4
        },
        {
          label: '15',
          marks: 4,
          prompt: 'Sebuah pipa kapiler berjari-jari $0{,}5\\ \\text{mm}$ dimasukkan tegak lurus ke dalam air ($\\rho = 1000\\ \\text{kg/m}^3$) dengan tegangan permukaan $\\gamma = 0{,}072\\ \\text{N/m}$ dan sudut kontak $\\theta = 0^\\circ$. Hitunglah tinggi kenaikan air di dalam pipa kapiler!',
          answer: '$2{,}88\\ \\text{cm}$ ($0{,}0288\\ \\text{m}$)',
          principle: 'Rumus kapilaritas: $h = \\frac{2\\gamma\\cos\\theta}{\\rho g r}$.',
          solution:
            'Ubah $r = 0{,}5\\ \\text{mm} = 5 \\times 10^{-4}\\ \\text{m}$ dan $\\cos 0^\\circ = 1$:\n$$h = \\frac{2 \\times 0{,}072 \\times 1}{1000 \\times 10 \\times 5 \\times 10^{-4}} = \\frac{0{,}144}{5} = 0{,}0288\\ \\text{m} = 2{,}88\\ \\text{cm}.$$',
          rubric: OK4
        }
      ]
    }
  ]
};
