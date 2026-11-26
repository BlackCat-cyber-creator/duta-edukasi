/**
 * Paket Soal Terstruktur: Latihan IPA SMP Kelas 7: Suhu, Kalor, Gerak, dan Gaya
 * 16 soal: Bagian A (12 Pilihan Ganda A–D @ 1 poin) + Bagian B (4 Uraian Hitungan @ 3 poin); total 24 poin.
 */
const OK1 = [{ code: 'A1', text: 'Jawaban dan konsep IPA tepat sesuai pembahasan.' }];
const OK3 = [
  { code: 'M1', text: 'Menuliskan besaran diketahui serta persamaan fisika yang tepat.' },
  { code: 'M1', text: 'Melakukan konversi satuan dan substitusi perhitungan dengan benar.' },
  { code: 'A1', text: 'Hasil akhir dan satuan tepat sesuai pembahasan.' }
];

export default {
  id: 'ipa7-kalor-gerak-gaya-p1',
  slug: 'ipa7-kalor-gerak-gaya-paket-1',
  subject: 'ipa',
  grade: 7,
  track: 'kurikulum-merdeka',
  accessTier: 'free',
  topic: 'IPA Kelas 7 SMP: konversi skala suhu, pemuaian, kalor dan asas Black, kelajuan/GLB, serta Hukum Newton pada gaya',
  relatedChapterIds: [
    'ipa7-bab3-suhu-kalor-pemuaian',
    'ipa7-bab4-gerak-dan-gaya'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'Latihan Kurikulum',
  title: 'Latihan IPA SMP Kelas 7: Suhu, Kalor, Gerak, dan Gaya',
  totalMarks: 24,
  instructions:
    'Paket ini memuat 16 soal IPA Kelas 7 SMP untuk topik Suhu, Kalor, Pemuaian, Gerak, dan Gaya: Bagian A (12 pilihan ganda @ 1 poin) dan Bagian B (4 uraian hitungan @ 3 poin; total 24 poin).',
  source: {
    org: 'Tim Akademik Duta e-dukasi',
    file: 'original-curated-batch-10',
    license: 'Hak cipta materi kurasi asli Duta e-dukasi'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Pilihan Ganda (12 Soal)',
      marks: 12,
      stem: 'Pilihlah satu jawaban yang paling tepat (masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt: 'Suhu suatu ruang diukur menggunakan termometer Celsius menunjukkan $40^\\circ\\text{C}$. Jika diukur dengan termometer Fahrenheit, suhunya adalah ....\n\nA. $72^\\circ\\text{F}$\nB. $96^\\circ\\text{F}$\nC. $104^\\circ\\text{F}$\nD. $112^\\circ\\text{F}$',
          answer: 'C. $104^\\circ\\text{F}$',
          principle: 'Konversi Celsius ke Fahrenheit: $T_F = \\frac{9}{5}T_C + 32$.',
          solution: '$$T_F = \\frac{9}{5}(40) + 32 = 72 + 32 = 104^\\circ\\text{F}$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '2',
          marks: 1,
          prompt: 'Suhu $40^\\circ\\text{C}$ jika dinyatakan dalam skala Reamur dan Kelvin berturut-turut adalah ....\n\nA. $32^\\circ\\text{R}$ dan $313\\ \\text{K}$\nB. $32^\\circ\\text{R}$ dan $233\\ \\text{K}$\nC. $50^\\circ\\text{R}$ dan $313\\ \\text{K}$\nD. $36^\\circ\\text{R}$ dan $313\\ \\text{K}$',
          answer: 'A. $32^\\circ\\text{R}$ dan $313\\ \\text{K}$',
          principle: '$T_R = \\frac{4}{5}T_C$ dan $T_K = T_C + 273$.',
          solution: '$T_R = \\frac{4}{5}(40) = 32^\\circ\\text{R}$ dan $T_K = 40 + 273 = 313\\ \\text{K}$ (opsi A).',
          rubric: OK1
        },
        {
          label: '3',
          marks: 1,
          prompt: 'Sebatang rel baja pada suhu $20^\\circ\\text{C}$ memiliki panjang $2\\ \\text{m}$ dengan koefisien muai panjang $\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$. Jika suhu naik menjadi $120^\\circ\\text{C}$, pertambahan panjang rel tersebut adalah ....\n\nA. $1{,}2\\ \\text{mm}$\nB. $2{,}4\\ \\text{mm}$\nC. $3{,}6\\ \\text{mm}$\nD. $4{,}8\\ \\text{mm}$',
          answer: 'B. $2{,}4\\ \\text{mm}$',
          principle: 'Pemuaian panjang $\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T$.',
          solution: '$$\\Delta L = 2 \\times (1{,}2 \\times 10^{-5}) \\times (120 - 20) = 2{,}4 \\times 10^{-3}\\ \\text{m} = 2{,}4\\ \\text{mm}$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '4',
          marks: 1,
          prompt: 'Kalor yang diperlukan untuk menaikkan suhu $2\\ \\text{kg}$ air ($c = 4.200\\ \\text{J/(kg}\\cdot^\\circ\\text{C)}$) dari $25^\\circ\\text{C}$ menjadi $55^\\circ\\text{C}$ adalah ....\n\nA. $126\\ \\text{kJ}$\nB. $210\\ \\text{kJ}$\nC. $252\\ \\text{kJ}$\nD. $336\\ \\text{kJ}$',
          answer: 'C. $252\\ \\text{kJ}$',
          principle: 'Kalor sensibel $Q = m \\cdot c \\cdot \\Delta T$.',
          solution: '$$Q = 2 \\times 4.200 \\times (55 - 25) = 2 \\times 4.200 \\times 30 = 252.000\\ \\text{J} = 252\\ \\text{kJ}$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '5',
          marks: 1,
          prompt: 'Peristiwa perpindahan kalor melalui zat perantara tanpa disertai perpindahan partikel-partikel zat perantara tersebut disebut ....\n\nA. konveksi\nB. konduksi\nC. radiasi\nD. evaporasi',
          answer: 'B. konduksi',
          principle: 'Konduksi menghantarkan kalor melalui tumbukan partikel zat padat tanpa aliran massa.',
          solution: 'Perpindahan kalor tanpa perpindahan partikel zat perantara disebut konduksi (opsi B).',
          rubric: OK1
        },
        {
          label: '6',
          marks: 1,
          prompt: 'Saat proses mencair atau mendidih berlangsung pada tekanan tetap, suhu zat ....\n\nA. terus meningkat sebanding kalor yang masuk\nB. menurun perlahan\nC. tetap konstan karena kalor digunakan untuk mengubah wujud zat\nD. langsung nol',
          answer: 'C. tetap konstan karena kalor digunakan untuk mengubah wujud zat',
          principle: 'Kalor laten mengubah ikatan antarpartikel tanpa mengubah energi kinetik rata-rata (suhu).',
          solution: 'Selama perubahan wujud, suhu tetap karena kalor laten memutus gaya tarik antarpartikel (opsi C).',
          rubric: OK1
        },
        {
          label: '7',
          marks: 1,
          prompt: 'Seorang pelari menempuh jarak $1{,}8\\ \\text{km}$ dalam waktu $10\\ \\text{menit}$. Kelajuan rata-rata pelari tersebut dalam satuan $\\text{m/s}$ adalah ....\n\nA. $2\\ \\text{m/s}$\nB. $3\\ \\text{m/s}$\nC. $4\\ \\text{m/s}$\nD. $5\\ \\text{m/s}$',
          answer: 'B. $3\\ \\text{m/s}$',
          principle: 'Konversikan jarak ke meter ($1.800\\ \\text{m}$) dan waktu ke sekon ($600\\ \\text{s}$), lalu $v = \\frac{s}{t}$.',
          solution: '$$v = \\frac{1.800\\ \\text{m}}{600\\ \\text{s}} = 3\\ \\text{m/s}$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '8',
          marks: 1,
          prompt: 'Sebuah sepeda bergerak lurus dengan kecepatan awal $2\\ \\text{m/s}$ lalu dipercepat beraturan hingga mencapai $14\\ \\text{m/s}$ dalam waktu $4\\ \\text{s}$. Percepatan sepeda tersebut adalah ....\n\nA. $2\\ \\text{m/s}^2$\nB. $3\\ \\text{m/s}^2$\nC. $4\\ \\text{m/s}^2$\nD. $6\\ \\text{m/s}^2$',
          answer: 'B. $3\\ \\text{m/s}^2$',
          principle: 'Percepatan rata-rata $a = \\frac{v_t - v_0}{t}$.',
          solution: '$$a = \\frac{14 - 2}{4} = \\frac{12}{4} = 3\\ \\text{m/s}^2$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '9',
          marks: 1,
          prompt: 'Sebuah balok bermassa $6\\ \\text{kg}$ ditarik ke kanan dengan gaya $30\\ \\text{N}$ dan sekaligus ditarik ke kiri dengan gaya $12\\ \\text{N}$ pada lantai licin. Percepatan balok adalah ....\n\nA. $2\\ \\text{m/s}^2$ ke kanan\nB. $3\\ \\text{m/s}^2$ ke kanan\nC. $5\\ \\text{m/s}^2$ ke kanan\nD. $7\\ \\text{m/s}^2$ ke kanan',
          answer: 'B. $3\\ \\text{m/s}^2$ ke kanan',
          principle: 'Hukum II Newton: $a = \\frac{\\sum F}{m}$.',
          solution: 'Resultan gaya $\\sum F = 30 - 12 = 18\\ \\text{N}$ ke kanan, sehingga $a = \\frac{18}{6} = 3\\ \\text{m/s}^2$ ke kanan (opsi B).',
          rubric: OK1
        },
        {
          label: '10',
          marks: 1,
          prompt: 'Ketika bus yang sedang melaju kencang direm mendadak, penumpang terdorong ke depan. Peristiwa ini sesuai dengan ....\n\nA. Hukum I Newton (kelembaman)\nB. Hukum II Newton\nC. Hukum III Newton\nD. Hukum Kekekalan Kalor',
          answer: 'A. Hukum I Newton (kelembaman)',
          principle: 'Benda cenderung mempertahankan keadaan geraknya kecuali ada gaya luar yang mengubahnya.',
          solution: 'Sifat kelembaman atau inersia tubuh mempertahankan gerak ke depan merupakan contoh Hukum I Newton (opsi A).',
          rubric: OK1
        },
        {
          label: '11',
          marks: 1,
          prompt: 'Berat sebuah benda bermassa $15\\ \\text{kg}$ di tempat dengan percepatan gravitasi $g = 9{,}8\\ \\text{m/s}^2$ adalah ....\n\nA. $14{,}7\\ \\text{N}$\nB. $147\\ \\text{N}$\nC. $150\\ \\text{N}$\nD. $153\\ \\text{N}$',
          answer: 'B. $147\\ \\text{N}$',
          principle: 'Gaya berat $w = m \\cdot g$.',
          solution: '$$w = 15 \\times 9{,}8 = 147\\ \\text{N}$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '12',
          marks: 1,
          prompt: 'Dalam perlombaan tarik tambang, jika tim A dan tim B masing-masing menarik dengan gaya $450\\ \\text{N}$ ke arah berlawanan sehingga tali tidak bergeser, besar resultan gaya pada tali adalah ....\n\nA. $900\\ \\text{N}$\nB. $450\\ \\text{N}$\nC. $225\\ \\text{N}$\nD. $0\\ \\text{N}$',
          answer: 'D. $0\\ \\text{N}$',
          principle: 'Dua gaya sama besar dan berlawanan arah menghasilkan resultan nol (kesetimbangan).',
          solution: '$$\\sum F = 450 - 450 = 0\\ \\text{N}$$\n(opsi D).',
          rubric: OK1
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Uraian Hitungan (4 Soal)',
      marks: 12,
      stem: 'Tuliskan langkah perhitungan lengkap untuk setiap soal berikut (masing-masing bernilai 3 poin).',
      parts: [
        {
          label: '13',
          marks: 3,
          prompt: 'Sebanyak $200\\ \\text{gram}$ air bersuhu $80^\\circ\\text{C}$ dicampur dengan $300\\ \\text{gram}$ air bersuhu $30^\\circ\\text{C}$ dalam wadah terisolasi. Tentukan suhu akhir campuran!',
          answer: '$50^\\circ\\text{C}$',
          principle: 'Asas Black: kalor dilepas air panas sama dengan kalor diterima air dingin ($Q_{\\text{lepas}} = Q_{\\text{terima}}$).',
          solution:
            'Karena kedua zat sama-sama air ($c$ sama), dapat langsung dicoret:\n$$m_1(T_1 - T_c) = m_2(T_c - T_2)$$\n$$200(80 - T_c) = 300(T_c - 30)$$\n$$16.000 - 200T_c = 300T_c - 9.000$$\n$$500T_c = 25.000 \\implies T_c = 50^\\circ\\text{C}.$$',
          rubric: OK3
        },
        {
          label: '14',
          marks: 3,
          prompt: 'Berapakah total kalor yang diperlukan untuk meleburkan $500\\ \\text{gram}$ es bersuhu $-10^\\circ\\text{C}$ menjadi air bersuhu $0^\\circ\\text{C}$? (Diketahui $c_{\\text{es}} = 2.100\\ \\text{J/(kg}\\cdot^\\circ\\text{C)}$ dan $L_{\\text{es}} = 336.000\\ \\text{J/kg}$.)',
          answer: '$178.500\\ \\text{J}$ ($178{,}5\\ \\text{kJ}$)',
          principle: 'Pecah menjadi dua tahap: pemanasan es $-10^\\circ\\text{C} \\to 0^\\circ\\text{C}$ ($Q_1$) dan peleburan es $0^\\circ\\text{C}$ ($Q_2$).',
          solution:
            'Massa $m = 0{,}5\\ \\text{kg}$.\n1. $Q_1 = m c_{\\text{es}} \\Delta T = 0{,}5 \\times 2.100 \\times 10 = 10.500\\ \\text{J}$.\n2. $Q_2 = m L_{\\text{es}} = 0{,}5 \\times 336.000 = 168.000\\ \\text{J}$.\n\nTotal kalor $= 10.500 + 168.000 = 178.500\\ \\text{J} = 178{,}5\\ \\text{kJ}$.',
          rubric: OK3
        },
        {
          label: '15',
          marks: 3,
          prompt: 'Sebuah mobil menempuh kota P ke kota Q yang berjarak $120\\ \\text{km}$ dengan kelajuan $60\\ \\text{km/jam}$, lalu langsung melanjutkan dari kota Q ke kota R sejauh $180\\ \\text{km}$ dengan kelajuan $90\\ \\text{km/jam}$. Hitunglah kelajuan rata-rata mobil selama seluruh perjalanan P ke R!',
          answer: '$75\\ \\text{km/jam}$',
          principle: 'Kelajuan rata-rata adalah total jarak tempuh dibagi total waktu tempuh (bukan rata-rata aritmetika kelajuan).',
          solution:
            'Waktu $t_1 = \\frac{120}{60} = 2\\ \\text{jam}$; waktu $t_2 = \\frac{180}{90} = 2\\ \\text{jam}$.\nTotal jarak $= 120 + 180 = 300\\ \\text{km}$; total waktu $= 2 + 2 = 4\\ \\text{jam}$.\n\nKelajuan rata-rata $= \\frac{300}{4} = 75\\ \\text{km/jam}$.',
          rubric: OK3
        },
        {
          label: '16',
          marks: 3,
          prompt: 'Sebuah kotak bermassa $4\\ \\text{kg}$ mula-mula diam di atas permukaan horizontal licin, kemudian didorong oleh gaya konstan $12\\ \\text{N}$ selama $5\\ \\text{sekon}$. Hitunglah percepatan dan jarak tempuh kotak selama $5\\ \\text{sekon}$ tersebut!',
          answer: 'Percepatan $a = 3\\ \\text{m/s}^2$, jarak $s = 37{,}5\\ \\text{m}$.',
          principle: 'Cari percepatan dengan $a = \\frac{F}{m}$, lalu hitung jarak GLBB dari diam $s = \\frac{1}{2}at^2$.',
          solution:
            '1. Percepatan: $a = \\frac{12}{4} = 3\\ \\text{m/s}^2$.\n2. Jarak tempuh ($v_0 = 0$): $s = \\frac{1}{2}(3)(5)^2 = \\frac{1}{2}(3)(25) = 37{,}5\\ \\text{m}$.',
          rubric: OK3
        }
      ]
    }
  ]
};
