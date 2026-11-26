/**
 * Paket Soal Terstruktur: Latihan Fisika SMA Kelas 12: Listrik Statis, Rangkaian DC & Induksi Magnet
 * 15 soal: Bagian A (10 Pilihan Ganda A–E @ 1 poin) + Bagian B (5 Uraian Perhitungan @ 4 poin); total 30 poin.
 */
const OK1 = [{ code: 'A1', text: 'Jawaban dan konsep fisika tepat sesuai pembahasan.' }];
const OK4 = [
  { code: 'M2', text: 'Menuliskan hukum listrik/magnet dan mengubah satuan mikro/mili ke SI dengan benar.' },
  { code: 'A2', text: 'Hasil akhir perhitungan dan satuan tepat sesuai pembahasan.' }
];

export default {
  id: 'fis12-listrik-magnet-p1',
  slug: 'fis12-listrik-magnet-paket-1',
  subject: 'fisika',
  grade: 12,
  track: 'kurikulum-merdeka',
  accessTier: 'free',
  topic: 'Fisika SMA Kelas 12: hukum Coulomb, kapasitor, hukum Ohm dan Kirchhoff, gaya Lorentz, serta hukum Faraday dan Lenz',
  relatedChapterIds: [
    'ipa12-bab1-listrik-statis-dan-kapasitor',
    'ipa12-bab2-listrik-arus-searah',
    'ipa12-bab3-medan-magnet-dan-induksi-elektromagnetik'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'Latihan Kurikulum',
  title: 'Latihan Fisika SMA Kelas 12: Listrik Statis, Rangkaian DC & Induksi Magnet',
  totalMarks: 30,
  instructions:
    'Paket ini terdiri atas Bagian A (10 pilihan ganda @ 1 poin) dan Bagian B (5 uraian perhitungan @ 4 poin; total 30 poin). Gunakan $k = 9 \\times 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$ dan $\\mu_0 = 4\\pi \\times 10^{-7}\\ \\text{T}\\cdot\\text{m/A}$.',
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
          prompt: 'Dua muatan listrik $q_1 = +4\\ \\mu\\text{C}$ dan $q_2 = +6\\ \\mu\\text{C}$ terpisah pada jarak $30\\ \\text{cm}$ di udara. Besar gaya Coulomb tolak-menolak antara kedua muatan adalah ....\n\nA. $0{,}8\\ \\text{N}$\nB. $1{,}2\\ \\text{N}$\nC. $2{,}4\\ \\text{N}$\nD. $3{,}6\\ \\text{N}$\nE. $4{,}8\\ \\text{N}$',
          answer: 'C. $2{,}4\\ \\text{N}$',
          principle: 'Hukum Coulomb: $F = k\\frac{|q_1 q_2|}{r^2}$.',
          solution: 'Dengan $r = 0{,}3\\ \\text{m}$:\n$$F = \\frac{(9 \\times 10^9)(4 \\times 10^{-6})(6 \\times 10^{-6})}{(0{,}3)^2} = \\frac{216 \\times 10^{-3}}{0{,}09} = 2{,}4\\ \\text{N}$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '2',
          marks: 1,
          prompt: 'Dua kapasitor $6\\ \\mu\\text{F}$ dan $3\\ \\mu\\text{F}$ dirangkai seri, kemudian rangkaian seri itu diparalelkan dengan kapasitor $4\\ \\mu\\text{F}$. Kapasitas total rangkaian adalah ....\n\nA. $2\\ \\mu\\text{F}$\nB. $4\\ \\mu\\text{F}$\nC. $6\\ \\text{F}$ ($6\\ \\mu\\text{F}$)\nD. $9\\ \\mu\\text{F}$\nE. $13\\ \\mu\\text{F}$',
          answer: 'C. $6\\ \\text{F}$ ($6\\ \\mu\\text{F}$)',
          principle: 'Seri: $\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2}$; paralel: $C_{\\text{tot}} = C_s + C_3$.',
          solution: '$\\frac{1}{C_s} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2} \\implies C_s = 2\\ \\mu\\text{F}$. Paralel dengan $4\\ \\mu\\text{F}$ menghasilkan $C_{\\text{tot}} = 2 + 4 = 6\\ \\mu\\text{F}$ (opsi C).',
          rubric: OK1
        },
        {
          label: '3',
          marks: 1,
          prompt: 'Jika rangkaian kapasitor berkapasitas total $6\\ \\mu\\text{F}$ dihubungkan dengan sumber tegangan $20\\ \\text{V}$, energi listrik yang tersimpan adalah ....\n\nA. $0{,}6\\ \\text{mJ}$\nB. $1{,}2\\ \\text{mJ}$\nC. $2{,}4\\ \\text{mJ}$\nD. $6{,}0\\ \\text{mJ}$\nE. $12{,}0\\ \\text{mJ}$',
          answer: 'B. $1{,}2\\ \\text{mJ}$',
          principle: 'Energi tersimpan dalam kapasitor $W = \\frac{1}{2}CV^2$.',
          solution: '$$W = \\frac{1}{2}(6 \\times 10^{-6})(20)^2 = 1{,}2 \\times 10^{-3}\\ \\text{J} = 1{,}2\\ \\text{mJ}$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '4',
          marks: 1,
          prompt: 'Hambatan $R_1 = 6\\ \\Omega$ dan $R_2 = 3\\ \\Omega$ disusun paralel lalu diserikan dengan $R_3 = 4\\ \\Omega$. Bila ujung-ujungnya diberi beda potensial $18\\ \\text{V}$, arus utama yang mengalir adalah ....\n\nA. $1{,}5\\ \\text{A}$\nB. $2{,}0\\ \\text{A}$\nC. $3{,}0\\ \\text{A}$\nD. $4{,}5\\ \\text{A}$\nE. $6{,}0\\ \\text{A}$',
          answer: 'C. $3{,}0\\ \\text{A}$',
          principle: 'Hukum Ohm $I = \\frac{V}{R_{\\text{tot}}}$.',
          solution: '$R_p = \\frac{6 \\times 3}{6 + 3} = 2\\ \\Omega$, maka $R_{\\text{tot}} = 2 + 4 = 6\\ \\Omega$ dan $I = \\frac{18}{6} = 3{,}0\\ \\text{A}$ (opsi C).',
          rubric: OK1
        },
        {
          label: '5',
          marks: 1,
          prompt: 'Sebuah lampu bertuliskan $24\\ \\text{W} / 12\\ \\text{V}$ dipasang pada tegangan sesuai spesifikasi selama $5$ menit. Energi listrik yang digunakan lampu tersebut adalah ....\n\nA. $120\\ \\text{J}$\nB. $1.440\\ \\text{J}$\nC. $3.600\\ \\text{J}$\nD. $7.200\\ \\text{J}$\nE. $14.400\\ \\text{J}$',
          answer: 'D. $7.200\\ \\text{J}$',
          principle: 'Energi listrik $W = P \\cdot t$ dengan $t$ dalam sekon ($5 \\times 60 = 300\\ \\text{s}$).',
          solution: '$$W = 24 \\times 300 = 7.200\\ \\text{J}$$\n(opsi D).',
          rubric: OK1
        },
        {
          label: '6',
          marks: 1,
          prompt: 'Kawat lurus sangat panjang dialiri arus listrik $10\\ \\text{A}$. Besar induksi magnetik pada jarak $5\\ \\text{cm}$ dari kawat adalah ....\n\nA. $2 \\times 10^{-5}\\ \\text{T}$\nB. $4 \\times 10^{-5}\\ \\text{T}$\nC. $6 \\times 10^{-5}\\ \\text{T}$\nD. $8 \\times 10^{-5}\\ \\text{T}$\nE. $4\\pi \\times 10^{-5}\\ \\text{T}$',
          answer: 'B. $4 \\times 10^{-5}\\ \\text{T}$',
          principle: 'Induksi magnetik kawat lurus panjang $B = \\frac{\\mu_0 I}{2\\pi a}$.',
          solution: '$$B = \\frac{(4\\pi \\times 10^{-7})(10)}{2\\pi (0{,}05)} = \\frac{2 \\times 10^{-6}}{0{,}05} = 4 \\times 10^{-5}\\ \\text{T}$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '7',
          marks: 1,
          prompt: 'Sepotong kawat sepanjang $60\\ \\text{cm}$ berarus $4\\ \\text{A}$ diletakkan tegak lurus di dalam medan magnet homogen $0{,}5\\ \\text{T}$. Besar gaya Lorentz yang bekerja pada kawat adalah ....\n\nA. $0{,}6\\ \\text{N}$\nB. $1{,}0\\ \\text{N}$\nC. $1{,}2\\ \\text{N}$\nD. $2{,}4\\ \\text{N}$\nE. $12\\ \\text{N}$',
          answer: 'C. $1{,}2\\ \\text{N}$',
          principle: 'Gaya Lorentz pada kawat berarus: $F = B I L \\sin\\theta$.',
          solution: '$$F = 0{,}5 \\times 4 \\times 0{,}6 \\times \\sin 90^\\circ = 1{,}2\\ \\text{N}$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '8',
          marks: 1,
          prompt: 'Fluks magnetik yang menembus kumparan terdiri atas $200$ lilitan berubah secara linear dari $0{,}05\\ \\text{Wb}$ menjadi $0{,}01\\ \\text{Wb}$ dalam waktu $0{,}04\\ \\text{s}$. Besar GGL induksi rata-rata yang timbul adalah ....\n\nA. $50\\ \\text{V}$\nB. $100\\ \\text{V}$\nC. $150\\ \\text{V}$\nD. $200\\ \\text{V}$\nE. $400\\ \\text{V}$',
          answer: 'D. $200\\ \\text{V}$',
          principle: 'Hukum Faraday: $|\\varepsilon| = N \\left|\\frac{\\Delta\\Phi}{\\Delta t}\\right|$.',
          solution: '$$|\\varepsilon| = 200 \\times \\frac{|0{,}01 - 0{,}05|}{0{,}04} = 200 \\times \\frac{0{,}04}{0{,}04} = 200\\ \\text{V}$$\n(opsi D).',
          rubric: OK1
        },
        {
          label: '9',
          marks: 1,
          prompt: 'Sebuah transformator ideal memiliki lilitan primer $1000$ lilitan dan sekunder $200$ lilitan. Jika tegangan primer $220\\ \\text{V}$ dan arus sekunder $5\\ \\text{A}$, maka tegangan sekunder dan arus primer berturut-turut adalah ....\n\nA. $44\\ \\text{V}$ dan $1\\ \\text{A}$\nB. $44\\ \\text{V}$ dan $25\\ \\text{A}$\nC. $110\\ \\text{V}$ dan $2{,}5\\ \\text{A}$\nD. $1.100\\ \\text{V}$ dan $1\\ \\text{A}$\nE. $1.100\\ \\text{V}$ dan $25\\ \\text{A}$',
          answer: 'A. $44\\ \\text{V}$ dan $1\\ \\text{A}$',
          principle: 'Transformator ideal memenuhi $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$.',
          solution: '$V_s = 220 \\times \\frac{200}{1000} = 44\\ \\text{V}$ dan $I_p = 5 \\times \\frac{200}{1000} = 1\\ \\text{A}$ (opsi A).',
          rubric: OK1
        },
        {
          label: '10',
          marks: 1,
          prompt: 'Menurut Hukum Lenz, arah arus induksi yang muncul pada suatu kumparan tertutup selalu bersifat ....\n\nA. searah dengan medan magnet awal\nB. menimbulkan medan magnet yang melawan perubahan fluks magnetik penyebabnya\nC. berbanding terbalik dengan jumlah lilitan\nD. menghilangkan fluks magnetik secara instan tanpa hambatan\nE. bergantung pada warna isolasi kawat',
          answer: 'B. menimbulkan medan magnet yang melawan perubahan fluks magnetik penyebabnya',
          principle: 'Tanda negatif pada $\\varepsilon = -N\\frac{d\\Phi}{dt}$ mencerminkan kekekalan energi (Hukum Lenz).',
          solution: 'Arus induksi selalu menghasilkan medan magnet induksi yang menentang perubahan fluks magnetik pemicunya (opsi B).',
          rubric: OK1
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Uraian Perhitungan (5 Soal)',
      marks: 20,
      stem: 'Tuliskan penurunan rumus dan langkah perhitungan lengkap untuk setiap soal berikut (masing-masing bernilai 4 poin).',
      parts: [
        {
          label: '11',
          marks: 4,
          prompt: 'Dua muatan titik $q_A = +9\\ \\mu\\text{C}$ dan $q_B = +16\\ \\mu\\text{C}$ terpisah pada jarak $70\\ \\text{cm}$. Di manakah letak sebuah titik $P$ pada garis hubung kedua muatan agar kuat medan listrik total di $P$ sama dengan nol?',
          answer: '$30\\ \\text{cm}$ dari $q_A$ (dan $40\\ \\text{cm}$ dari $q_B$) di antara kedua muatan.',
          principle: 'Untuk muatan sejenis, titik nol kuat medan berada di antara keduanya dengan $\\frac{\\sqrt{|q_A|}}{r_A} = \\frac{\\sqrt{|q_B|}}{r_B}$.',
          solution:
            'Misalkan jarak $P$ ke $q_A$ adalah $x\\ \\text{cm}$, sehingga jarak ke $q_B$ adalah $(70 - x)\\ \\text{cm}$. Syarat $E_A = E_B$:\n$$\\frac{k q_A}{x^2} = \\frac{k q_B}{(70 - x)^2} \\implies \\frac{3}{x} = \\frac{4}{70 - x} \\implies 4x = 210 - 3x \\implies x = 30\\ \\text{cm}.$$\nJadi titik $P$ berada $30\\ \\text{cm}$ dari $q_A$ di antara $q_A$ dan $q_B$.',
          rubric: OK4
        },
        {
          label: '12',
          marks: 4,
          prompt: 'Sebuah rangkaian satu loop tertutup terdiri atas dua baterai seri searah ($E_1 = 12\\ \\text{V}, r_1 = 1\\ \\Omega$ dan $E_2 = 6\\ \\text{V}, r_2 = 1\\ \\Omega$) serta dua resistor luar seri $R_1 = 4\\ \\Omega$ dan $R_2 = 6\\ \\Omega$. Hitunglah kuat arus rangkaian dan tegangan jepit baterai pertama ($V_{AB}$)!',
          answer: 'Kuat arus $I = 1{,}5\\ \\text{A}$, tegangan jepit baterai pertama $V_1 = 10{,}5\\ \\text{V}$.',
          principle: 'Hukum II Kirchhoff pada satu loop: $I = \\frac{\\sum E}{\\sum R + \\sum r}$, dan tegangan jepit sumber $V_1 = E_1 - I r_1$.',
          solution:
            '1. Total GGL $= 12 + 6 = 18\\ \\text{V}$; total hambatan $= 4 + 6 + 1 + 1 = 12\\ \\Omega$.\n   Kuat arus: $I = \\frac{18}{12} = 1{,}5\\ \\text{A}$.\n2. Tegangan jepit baterai pertama: $V_1 = E_1 - I r_1 = 12 - (1{,}5)(1) = 10{,}5\\ \\text{V}$.',
          rubric: OK4
        },
        {
          label: '13',
          marks: 4,
          prompt: 'Sebuah solenoida panjangnya $50\\ \\text{cm}$ memiliki $1.000$ lilitan dan dialiri arus listrik $2\\ \\text{A}$. Hitunglah besar induksi magnetik di pusat sumbu solenoida dan di salah satu ujung solenoida (nyatakan dalam $\\pi$ dan desimal)!',
          answer: 'Di pusat $B_p = 1{,}6\\pi \\times 10^{-3}\\ \\text{T} \\approx 5{,}03\\ \\text{mT}$; di ujung $B_u = 0{,}8\\pi \\times 10^{-3}\\ \\text{T} \\approx 2{,}51\\ \\text{mT}$.',
          principle: 'Medan di pusat solenoida $B_p = \\frac{\\mu_0 I N}{l}$ dan di ujung $B_u = \\frac{1}{2}B_p$.',
          solution:
            'Panjang $l = 0{,}5\\ \\text{m}$:\n$$B_p = \\frac{(4\\pi \\times 10^{-7})(2)(1000)}{0{,}5} = 1{,}6\\pi \\times 10^{-3}\\ \\text{T} \\approx 5{,}03 \\times 10^{-3}\\ \\text{T}.$$\n$$B_u = \\frac{1}{2}B_p = 0{,}8\\pi \\times 10^{-3}\\ \\text{T} \\approx 2{,}51 \\times 10^{-3}\\ \\text{T}.$$',
          rubric: OK4
        },
        {
          label: '14',
          marks: 4,
          prompt: 'Sebuah batang konduktor sepanjang $L = 0{,}5\\ \\text{m}$ digerakkan ke kanan dengan kelajuan tetap $v = 8\\ \\text{m/s}$ tegak lurus memotong medan magnet homogen $B = 0{,}4\\ \\text{T}$ di atas rel konduktor berbentuk huruf U dengan hambatan ujung $R = 4\\ \\Omega$. Hitunglah GGL induksi dan kuat arus induksi yang mengalir!',
          answer: 'GGL induksi $\\varepsilon = 1{,}6\\ \\text{V}$, kuat arus induksi $I = 0{,}4\\ \\text{A}$.',
          principle: 'GGL gerak (motional EMF) $\\varepsilon = B L v$ dan hukum Ohm $I = \\frac{\\varepsilon}{R}$.',
          solution:
            '1. $\\varepsilon = B L v = 0{,}4 \\times 0{,}5 \\times 8 = 1{,}6\\ \\text{V}$.\n2. $I = \\frac{\\varepsilon}{R} = \\frac{1{,}6}{4} = 0{,}4\\ \\text{A}$.',
          rubric: OK4
        },
        {
          label: '15',
          marks: 4,
          prompt: 'Sebuah partikel bermuatan $q = 2 \\times 10^{-6}\\ \\text{C}$ bermassa $m = 4 \\times 10^{-10}\\ \\text{kg}$ masuk tegak lurus ke dalam medan magnet homogen $B = 0{,}5\\ \\text{T}$ dengan kelajuan $v = 400\\ \\text{m/s}$. Hitunglah jari-jari lintasan melingkar partikel tersebut!',
          answer: '$0{,}16\\ \\text{m}$ ($16\\ \\text{cm}$)',
          principle: 'Gaya Lorentz berperan sebagai gaya sentripetal: $qvB = \\frac{mv^2}{R} \\implies R = \\frac{mv}{qB}$.',
          solution:
            '$$R = \\frac{mv}{qB} = \\frac{(4 \\times 10^{-10})(400)}{(2 \\times 10^{-6})(0{,}5)} = \\frac{1{,}6 \\times 10^{-7}}{10^{-6}} = 0{,}16\\ \\text{m} = 16\\ \\text{cm}.$$',
          rubric: OK4
        }
      ]
    }
  ]
};
