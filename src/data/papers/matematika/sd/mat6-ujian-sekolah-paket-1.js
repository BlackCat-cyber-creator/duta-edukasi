/**
 * Paket Soal Terstruktur: Latihan Ujian Sekolah Matematika Kelas 6 — Paket 1
 * 20 soal: Bagian A (15 Pilihan Ganda A–D @ 1 poin) + Bagian B (5 Uraian Singkat @ 3 poin); total 30 poin.
 */
const OK1 = [{ code: 'A1', text: 'Jawaban tepat sesuai pembahasan.' }];
const OK3 = [
  { code: 'M1', text: 'Menuliskan rumus atau langkah operasi hitung yang tepat.' },
  { code: 'M1', text: 'Melakukan perhitungan antar-langkah dengan benar.' },
  { code: 'A1', text: 'Hasil akhir dan satuan tepat sesuai pembahasan.' }
];

export default {
  id: 'mat6-ujian-sekolah-p1',
  slug: 'mat6-ujian-sekolah-paket-1',
  subject: 'matematika',
  grade: 6,
  track: 'kurikulum-merdeka',
  accessTier: 'free',
  topic: 'Ujian Sekolah Matematika SD Kelas 6: bilangan bulat, pecahan dan rasio, kubus dan balok, lingkaran/bangun datar, serta pengolahan data',
  relatedChapterIds: [
    'sd6-bab1-pecahan-desimal',
    'sd6-bab2-rasio',
    'sd6-bab3-kubus-balok',
    'sd6-bab4-peluang'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'Latihan Kurikulum',
  title: 'Latihan Ujian Sekolah Matematika Kelas 6 — Paket 1',
  totalMarks: 30,
  instructions:
    'Paket ini terdiri atas Bagian A (15 soal pilihan ganda bernilai 1 poin per soal) dan Bagian B (5 soal uraian singkat bernilai 3 poin per soal; total 30 poin). Gunakan $\\pi = \\frac{22}{7}$ kecuali dinyatakan lain.',
  source: {
    org: 'Tim Akademik Duta e-dukasi',
    file: 'original-curated-batch-10',
    license: 'Hak cipta materi kurasi asli Duta e-dukasi'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Pilihan Ganda (15 Soal)',
      marks: 15,
      stem: 'Pilihlah satu jawaban yang paling tepat (masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt: 'Hasil dari $(-18) + 45 - (-12)$ adalah ....\n\nA. $15$\nB. $29$\nC. $39$\nD. $51$',
          answer: 'C. $39$',
          principle: 'Pengurangan bilangan negatif sama dengan penjumlahan lawannya: $a - (-b) = a + b$.',
          solution: '$$(-18) + 45 - (-12) = 27 + 12 = 39$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '2',
          marks: 1,
          prompt: 'Hasil dari $2\\frac{1}{4} + 1\\frac{2}{3} - \\frac{5}{6}$ adalah ....\n\nA. $2\\frac{5}{12}$\nB. $3\\frac{1}{12}$\nC. $3\\frac{5}{12}$\nD. $3\\frac{7}{12}$',
          answer: 'B. $3\\frac{1}{12}$',
          principle: 'Ubah ke pecahan biasa atau samakan penyebut dengan KPK dari $4, 3, 6$ yaitu $12$.',
          solution: '$$\\frac{9}{4} + \\frac{5}{3} - \\frac{5}{6} = \\frac{27 + 20 - 10}{12} = \\frac{37}{12} = 3\\frac{1}{12}$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '3',
          marks: 1,
          prompt: 'Sebuah toko memberikan diskon $25\\%$ untuk tas seharga Rp240.000. Harga tas setelah diskon adalah ....\n\nA. Rp160.000\nB. Rp175.000\nC. Rp180.000\nD. Rp190.000',
          answer: 'C. Rp180.000',
          principle: 'Harga bayar setelah diskon $25\\%$ adalah $75\\%$ dari harga awal.',
          solution: 'Diskon $= 25\\% \\times 240.000 = 60.000$, sehingga harga bayar $= 240.000 - 60.000 = \\text{Rp}180.000$ (opsi C).',
          rubric: OK1
        },
        {
          label: '4',
          marks: 1,
          prompt: 'Perbandingan kelereng Andi dan Budi adalah $3 : 5$. Jika selisih kelereng mereka adalah $16$ butir, jumlah kelereng keduanya adalah ....\n\nA. $40$ butir\nB. $48$ butir\nC. $56$ butir\nD. $64$ butir',
          answer: 'D. $64$ butir',
          principle: 'Selisih rasio $5 - 3 = 2$ bagian mewakili $16$ butir, sehingga $1$ bagian $= 8$ butir.',
          solution: 'Jumlah bagian $= 3 + 5 = 8$, maka jumlah kelereng $= 8 \\times \\frac{16}{5 - 3} = 8 \\times 8 = 64$ butir (opsi D).',
          rubric: OK1
        },
        {
          label: '5',
          marks: 1,
          prompt: 'Skala pada sebuah peta adalah $1 : 500.000$. Jika jarak dua kota pada peta $6\\ \\text{cm}$, jarak sebenarnya kedua kota adalah ....\n\nA. $3\\ \\text{km}$\nB. $30\\ \\text{km}$\nC. $300\\ \\text{km}$\nD. $50\\ \\text{km}$',
          answer: 'B. $30\\ \\text{km}$',
          principle: 'Jarak sebenarnya $=$ jarak peta $\\times$ penyebut skala, lalu konversi cm ke km ($\\div 100.000$).',
          solution: '$$\\text{Jarak} = 6 \\times 500.000\\ \\text{cm} = 3.000.000\\ \\text{cm} = 30\\ \\text{km}$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '6',
          marks: 1,
          prompt: 'FPB dan KPK dari bilangan $24$ dan $36$ berturut-turut adalah ....\n\nA. $6$ dan $72$\nB. $12$ dan $72$\nC. $12$ dan $108$\nD. $18$ dan $72$',
          answer: 'B. $12$ dan $72$',
          principle: 'Faktorisasi prima: $24 = 2^3 \\times 3$ dan $36 = 2^2 \\times 3^2$.',
          solution: '$\\text{FPB} = 2^2 \\times 3 = 12$ dan $\\text{KPK} = 2^3 \\times 3^2 = 72$ (opsi B).',
          rubric: OK1
        },
        {
          label: '7',
          marks: 1,
          prompt: 'Bentuk desimal dari pecahan $\\frac{7}{8}$ adalah ....\n\nA. $0{,}78$\nB. $0{,}825$\nC. $0{,}85$\nD. $0{,}875$',
          answer: 'D. $0{,}875$',
          principle: 'Kalikan pembilang dan penyebut dengan $125$ untuk mengubah penyebut $8$ menjadi $1000$.',
          solution: '$$\\frac{7}{8} = \\frac{7 \\times 125}{8 \\times 125} = \\frac{875}{1000} = 0{,}875$$\n(opsi D).',
          rubric: OK1
        },
        {
          label: '8',
          marks: 1,
          prompt: 'Sebuah mobil menempuh jarak $180\\ \\text{km}$ dalam waktu $2\\ \\text{jam } 30\\ \\text{menit}$. Kecepatan rata-rata mobil tersebut adalah ....\n\nA. $60\\ \\text{km/jam}$\nB. $68\\ \\text{km/jam}$\nC. $72\\ \\text{km/jam}$\nD. $75\\ \\text{km/jam}$',
          answer: 'C. $72\\ \\text{km/jam}$',
          principle: 'Kecepatan rata-rata $v = \\frac{s}{t}$ dengan $2\\ \\text{jam } 30\\ \\text{menit} = 2{,}5\\ \\text{jam}$.',
          solution: '$$v = \\frac{180}{2{,}5} = 72\\ \\text{km/jam}$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '9',
          marks: 1,
          prompt: 'Keliling lingkaran dengan panjang jari-jari $14\\ \\text{cm}$ adalah ....\n\nA. $44\\ \\text{cm}$\nB. $88\\ \\text{cm}$\nC. $154\\ \\text{cm}$\nD. $616\\ \\text{cm}$',
          answer: 'B. $88\\ \\text{cm}$',
          principle: 'Keliling lingkaran $K = 2\\pi r$.',
          solution: '$$K = 2 \\times \\frac{22}{7} \\times 14 = 88\\ \\text{cm}$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '10',
          marks: 1,
          prompt: 'Luas daerah bangun trapesium dengan sisi sejajar $12\\ \\text{cm}$ dan $20\\ \\text{cm}$ serta tinggi $9\\ \\text{cm}$ adalah ....\n\nA. $126\\ \\text{cm}^2$\nB. $144\\ \\text{cm}^2$\nC. $162\\ \\text{cm}^2$\nD. $288\\ \\text{cm}^2$',
          answer: 'B. $144\\ \\text{cm}^2$',
          principle: 'Luas trapesium $= \\frac{a + b}{2} \\times t$.',
          solution: '$$L = \\frac{12 + 20}{2} \\times 9 = 16 \\times 9 = 144\\ \\text{cm}^2$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '11',
          marks: 1,
          prompt: 'Sebuah kubus memiliki panjang rusuk $12\\ \\text{cm}$. Volume kubus tersebut adalah ....\n\nA. $864\\ \\text{cm}^3$\nB. $1.440\\ \\text{cm}^3$\nC. $1.728\\ \\text{cm}^3$\nD. $1.944\\ \\text{cm}^3$',
          answer: 'C. $1.728\\ \\text{cm}^3$',
          principle: 'Volume kubus $V = s^3$.',
          solution: '$$V = 12^3 = 12 \\times 12 \\times 12 = 1.728\\ \\text{cm}^3$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '12',
          marks: 1,
          prompt: 'Sebuah balok berukuran panjang $15\\ \\text{cm}$, lebar $10\\ \\text{cm}$, dan tinggi $8\\ \\text{cm}$. Luas permukaan balok tersebut adalah ....\n\nA. $520\\ \\text{cm}^2$\nB. $640\\ \\text{cm}^2$\nC. $700\\ \\text{cm}^2$\nD. $1.200\\ \\text{cm}^2$',
          answer: 'C. $700\\ \\text{cm}^2$',
          principle: 'Luas permukaan balok $= 2(pl + pt + lt)$.',
          solution: '$$L = 2(15\\cdot 10 + 15\\cdot 8 + 10\\cdot 8) = 2(150 + 120 + 80) = 2(350) = 700\\ \\text{cm}^2$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '13',
          marks: 1,
          prompt: 'Nilai ulangan Matematika seorang siswa adalah $75, 80, 85, 90, 85, 95$. Modus dan median data tersebut berturut-turut adalah ....\n\nA. $85$ dan $82{,}5$\nB. $85$ dan $85$\nC. $80$ dan $85$\nD. $90$ dan $85$',
          answer: 'B. $85$ dan $85$',
          principle: 'Modus adalah nilai paling sering muncul; median data genap adalah rata-rata dua nilai tengah setelah diurutkan.',
          solution: 'Urutan data: $75, 80, 85, 85, 90, 95$. Nilai $85$ muncul $2$ kali (terbanyak), dan rata-rata data ke-3 serta ke-4 adalah $\\frac{85 + 85}{2} = 85$ (opsi B).',
          rubric: OK1
        },
        {
          label: '14',
          marks: 1,
          prompt: 'Sebuah wadah berisi $5$ bola merah, $3$ bola biru, dan $2$ bola hijau. Jika diambil $1$ bola secara acak, peluang terambilnya bola merah adalah ....\n\nA. $\\frac{1}{5}$\nB. $\\frac{3}{10}$\nC. $\\frac{1}{2}$\nD. $\\frac{3}{5}$',
          answer: 'C. $\\frac{1}{2}$',
          principle: 'Peluang kejadian $P(A) = \\frac{n(A)}{n(S)}$.',
          solution: 'Total bola $= 5 + 3 + 2 = 10$, sehingga $P(\\text{merah}) = \\frac{5}{10} = \\frac{1}{2}$ (opsi C).',
          rubric: OK1
        },
        {
          label: '15',
          marks: 1,
          prompt: 'Suhu udara di dalam lemari pendingin mula-mula $-4^\\circ\\text{C}$. Setelah listrik padam, suhu naik $3^\\circ\\text{C}$ setiap jam. Suhu setelah $5$ jam adalah ....\n\nA. $8^\\circ\\text{C}$\nB. $11^\\circ\\text{C}$\nC. $15^\\circ\\text{C}$\nD. $19^\\circ\\text{C}$',
          answer: 'B. $11^\\circ\\text{C}$',
          principle: 'Suhu akhir $=$ suhu awal $+$ total kenaikan suhu.',
          solution: '$$T_{\\text{akhir}} = -4 + (5 \\times 3) = -4 + 15 = 11^\\circ\\text{C}$$\n(opsi B).',
          rubric: OK1
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Uraian Singkat (5 Soal)',
      marks: 15,
      stem: 'Selesaikan setiap soal uraian berikut dengan menuliskan langkah penyelesaian yang jelas (masing-masing bernilai 3 poin).',
      parts: [
        {
          label: '16',
          marks: 3,
          prompt: 'Ibu membeli $3{,}5\\ \\text{kg}$ tepung terigu dan menggunakan $\\frac{3}{5}$ bagian untuk membuat kue, lalu membeli lagi $1{,}2\\ \\text{kg}$. Berapa kg sisa tepung terigu Ibu sekarang?',
          answer: '$2{,}6\\ \\text{kg}$',
          principle: 'Jika $\\frac{3}{5}$ bagian dipakai, maka tersisa $\\frac{2}{5}$ bagian sebelum ditambah pembelian baru.',
          solution:
            'Sisa dari persediaan awal $= \\left(1 - \\frac{3}{5}\\right) \\times 3{,}5 = \\frac{2}{5} \\times 3{,}5 = 1{,}4\\ \\text{kg}$.\n\nSetelah membeli lagi $1{,}2\\ \\text{kg}$, total persediaan menjadi:\n$$1{,}4 + 1{,}2 = 2{,}6\\ \\text{kg}.$$',
          rubric: OK3
        },
        {
          label: '17',
          marks: 3,
          prompt: 'Sebuah akuarium berbentuk balok dengan panjang $60\\ \\text{cm}$, lebar $40\\ \\text{cm}$, dan tinggi $50\\ \\text{cm}$ diisi air hingga $\\frac{3}{4}$ bagian tingginya. Berapa liter volume air di dalam akuarium tersebut?',
          answer: '$90\\ \\text{liter}$',
          principle: 'Volume air $= \\frac{3}{4} \\times p \\times l \\times t$ dan $1\\ \\text{liter} = 1.000\\ \\text{cm}^3$.',
          solution:
            'Volume penuh $= 60 \\times 40 \\times 50 = 120.000\\ \\text{cm}^3 = 120\\ \\text{liter}$.\n\nVolume air terisi $= \\frac{3}{4} \\times 120 = 90\\ \\text{liter}.$',
          rubric: OK3
        },
        {
          label: '18',
          marks: 3,
          prompt: 'Sebuah taman berbentuk persegi panjang berukuran $20\\ \\text{m} \\times 14\\ \\text{m}$, dan di tengahnya terdapat kolam berbentuk lingkaran berdiameter $7\\ \\text{m}$. Hitunglah luas taman di luar kolam (dalam $\\text{m}^2$).',
          answer: '$241{,}5\\ \\text{m}^2$',
          principle: 'Luas daerah arsiran = luas persegi panjang $-$ luas lingkaran berjari-jari $r = 3{,}5\\ \\text{m}$.',
          solution:
            'Luas persegi panjang $= 20 \\times 14 = 280\\ \\text{m}^2$.\n\nLuas kolam lingkaran ($r = \\frac{7}{2}\\ \\text{m}$):\n$$L_{\\text{kolam}} = \\frac{22}{7} \\times \\frac{7}{2} \\times \\frac{7}{2} = \\frac{77}{2} = 38{,}5\\ \\text{m}^2.$$\n\nLuas taman di luar kolam $= 280 - 38{,}5 = 241{,}5\\ \\text{m}^2$.',
          rubric: OK3
        },
        {
          label: '19',
          marks: 3,
          prompt: 'Lampu A menyala setiap $12$ detik, lampu B setiap $18$ detik, dan lampu C setiap $24$ detik. Jika ketiga lampu menyala bersamaan pada pukul $08.15.00$, pada pukul berapa ketiganya akan menyala bersamaan lagi untuk kedua kalinya?',
          answer: '$08.16.12$',
          principle: 'Kejadian berulang bersamaan dihitung dengan KPK dari ketiga periode waktu.',
          solution:
            '$12 = 2^2 \\times 3$, $18 = 2 \\times 3^2$, dan $24 = 2^3 \\times 3$, sehingga $\\text{KPK} = 2^3 \\times 3^2 = 72$ detik $= 1$ menit $12$ detik.\n\nKetiga lampu menyala bersamaan lagi pada pukul $08.15.00 + 00.01.12 = 08.16.12$.',
          rubric: OK3
        },
        {
          label: '20',
          marks: 3,
          prompt: 'Nilai rata-rata ulangan IPA dari $8$ siswa adalah $78$. Setelah nilai $2$ siswa susulan digabungkan, rata-rata kelas menjadi $80$. Berapakah rata-rata nilai kedua siswa susulan tersebut?',
          answer: '$88$',
          principle: 'Jumlah nilai dua siswa susulan = total $10$ siswa $-$ total $8$ siswa awal.',
          solution:
            'Jumlah nilai $8$ siswa $= 8 \\times 78 = 624$.\nJumlah nilai $10$ siswa $= 10 \\times 80 = 800$.\n\nJumlah nilai $2$ siswa susulan $= 800 - 624 = 176$, sehingga rata-rata keduanya $= \\frac{176}{2} = 88$.',
          rubric: OK3
        }
      ]
    }
  ]
};
