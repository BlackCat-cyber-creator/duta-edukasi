/**
 * Paket Soal Terstruktur: Latihan UTBK-SNBT Penalaran Matematika — Paket 2
 * 20 soal berbasis 5 konteks nyata (bunga majemuk, trigonometri, logistik, optimasi, geometri koordinat).
 */
const OK1 = [
  { code: 'A1', text: 'Jawaban dan pemodelan matematis sesuai pembahasan.' }
];

export default {
  id: 'utbk-snbt-penalaran-mat-2',
  slug: 'utbk-snbt-penalaran-mat-2',
  subject: 'matematika',
  grade: 12,
  track: 'utbk-snbt',
  accessTier: 'free',
  topic: 'UTBK-SNBT Penalaran Matematika Paket 2: optimasi, laju perubahan, barisan dan deret, trigonometri terapan, dan geometri koordinat',
  relatedChapterIds: [
    'sma10-bab4-trigonometri',
    'sma10-bab6-fungsi-kuadrat',
    'sma12-bab2-investasi-pinjaman',
    'sma11-bab5-turunan'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'UTBK / SNBT',
  title: 'Latihan UTBK-SNBT: Penalaran Matematika — Paket 2',
  totalMarks: 20,
  instructions:
    'Paket ini memuat 20 soal Penalaran Matematika UTBK-SNBT Paket 2 yang terbagi dalam 5 stimulus kontekstual (masing-masing 4 soal bernilai 1 poin; total 20 poin).',
  source: {
    org: 'Tim Akademik Duta e-dukasi',
    file: 'original-curated-batch-9',
    license: 'Hak cipta materi kurasi asli Duta e-dukasi'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Stimulus 1: Investasi Dana Pendidikan',
      marks: 4,
      stem: 'Seseorang menanamkan modal awal sebesar Rp10.000.000 pada instrumen simpanan berbunga majemuk $10\\%$ per tahun (bunga dimajemukkan sekali setiap akhir tahun tanpa setoran maupun penarikan tambahan).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt: 'Saldo tabungan pada akhir tahun ke-$2$ adalah ....\n\nA. Rp11.000.000\nB. Rp12.000.000\nC. Rp12.100.000\nD. Rp12.200.000\nE. Rp12.500.000',
          answer: 'C. Rp12.100.000',
          principle: 'Rumus bunga majemuk $M_n = M_0(1 + i)^n$.',
          solution:
            '$$M_2 = 10.000.000 \\times (1{,}1)^2 = 10.000.000 \\times 1{,}21 = \\text{Rp}12.100.000$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '2',
          marks: 1,
          prompt: 'Saldo tabungan pada akhir tahun ke-$3$ adalah ....\n\nA. Rp13.000.000\nB. Rp13.100.000\nC. Rp13.210.000\nD. Rp13.310.000\nE. Rp13.500.000',
          answer: 'D. Rp13.310.000',
          principle: 'Kalikan saldo tahun ke-$2$ dengan faktor pertumbuhan $1{,}1$.',
          solution:
            '$$M_3 = 12.100.000 \\times 1{,}1 = \\text{Rp}13.310.000$$\n(opsi D).',
          rubric: OK1
        },
        {
          label: '3',
          marks: 1,
          prompt: 'Total akumulasi bunga yang diperoleh selama $3$ tahun tersebut adalah ....\n\nA. Rp3.000.000\nB. Rp3.100.000\nC. Rp3.210.000\nD. Rp3.310.000\nE. Rp3.400.000',
          answer: 'D. Rp3.310.000',
          principle: 'Total bunga = saldo akhir $-$ modal awal.',
          solution:
            'Total bunga $= 13.310.000 - 10.000.000 = \\text{Rp}3.310.000$ (opsi D).',
          rubric: OK1
        },
        {
          label: '4',
          marks: 1,
          prompt: 'Selisih saldo akhir tahun ke-$3$ antara simpanan bunga majemuk tersebut dibandingkan bunga tunggal $10\\%$ per tahun (dengan modal awal sama) adalah ... rupiah.',
          answer: '$310.000$',
          principle: 'Pada bunga tunggal $M_n = M_0(1 + n \\cdot i)$.',
          solution:
            'Saldo bunga tunggal 3 tahun $= 10.000.000(1 + 3 \\times 0{,}1) = \\text{Rp}13.000.000$.\nSelisih $= 13.310.000 - 13.000.000 = \\text{Rp}310.000$.',
          rubric: OK1
        }
      ]
    },
    {
      no: 2,
      title: 'Stimulus 2: Pengamatan Menara Pemancar',
      marks: 4,
      stem: 'Sebuah menara pemancar setinggi $60\\ \\text{m}$ berdiri tegak lurus pada permukaan tanah datar. Seorang pengamat (tinggi mata diabaikan) mengamati puncak menara dari titik $A$ dengan sudut elevasi $45^\\circ$, lalu berjalan menjauh segaris dengan kaki menara menuju titik $B$ sehingga sudut elevasi puncak menara menjadi $30^\\circ$.',
      parts: [
        {
          label: '5',
          marks: 1,
          prompt: 'Jarak horizontal titik $A$ ke kaki menara adalah ... meter.',
          answer: '$60$',
          principle: 'Pada segitiga siku-siku dengan sudut $45^\\circ$, $\\tan 45^\\circ = 1$ sehingga jarak alas sama dengan tinggi.',
          solution:
            '$$\\tan 45^\\circ = \\frac{60}{x_A} \\implies 1 = \\frac{60}{x_A} \\implies x_A = 60\\ \\text{m}.$$',
          rubric: OK1
        },
        {
          label: '6',
          marks: 1,
          prompt: 'Jarak horizontal titik $B$ ke kaki menara adalah ....\n\nA. $20\\sqrt{3}\\ \\text{m}$\nB. $30\\sqrt{3}\\ \\text{m}$\nC. $60\\sqrt{2}\\ \\text{m}$\nD. $60\\sqrt{3}\\ \\text{m}$\nE. $120\\ \\text{m}$',
          answer: 'D. $60\\sqrt{3}\\ \\text{m}$',
          principle: 'Gunakan $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}} = \\frac{\\text{tinggi}}{\\text{jarak alas}}$.',
          solution:
            '$$\\tan 30^\\circ = \\frac{60}{x_B} \\implies \\frac{1}{\\sqrt{3}} = \\frac{60}{x_B} \\implies x_B = 60\\sqrt{3}\\ \\text{m}$$\n(opsi D).',
          rubric: OK1
        },
        {
          label: '7',
          marks: 1,
          prompt: 'Jarak perpindahan pengamat dari titik $A$ ke titik $B$ adalah ....\n\nA. $30(\\sqrt{3} - 1)\\ \\text{m}$\nB. $60(\\sqrt{2} - 1)\\ \\text{m}$\nC. $60(\\sqrt{3} - 1)\\ \\text{m}$\nD. $60(\\sqrt{3} + 1)\\ \\text{m}$\nE. $120 - 60\\sqrt{3}\\ \\text{m}$',
          answer: 'C. $60(\\sqrt{3} - 1)\\ \\text{m}$',
          principle: 'Karena $A$ dan $B$ segaris pada sisi yang sama dari menara, $AB = x_B - x_A$.',
          solution:
            '$$AB = x_B - x_A = 60\\sqrt{3} - 60 = 60(\\sqrt{3} - 1)\\ \\text{m}$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '8',
          marks: 1,
          prompt: 'Jarak pandang lurus (garis miring) dari titik $B$ ke puncak menara adalah ... meter.',
          answer: '$120$',
          principle: 'Gunakan $\\sin 30^\\circ = \\frac{1}{2} = \\frac{\\text{tinggi}}{\\text{sisi miring}}$.',
          solution:
            '$$\\sin 30^\\circ = \\frac{60}{d} \\implies \\frac{1}{2} = \\frac{60}{d} \\implies d = 120\\ \\text{m}.$$',
          rubric: OK1
        }
      ]
    },
    {
      no: 3,
      title: 'Stimulus 3: Perencanaan Proyek Konstruksi',
      marks: 4,
      stem: 'Suatu proyek perbaikan jalan direncanakan selesai dalam $30$ hari oleh $24$ pekerja dengan laju kerja setiap pekerja diasumsikan sama. Upah setiap pekerja adalah Rp150.000 per hari kerja.',
      parts: [
        {
          label: '9',
          marks: 1,
          prompt: 'Jika proyek ingin dipercepat agar selesai tepat dalam $20$ hari sejak awal, banyak pekerja tambahan yang harus direkrut adalah ... orang.',
          answer: '$12$',
          principle: 'Total beban kerja konstan $= \\text{pekerja} \\times \\text{hari}$.',
          solution:
            'Total beban kerja $= 24 \\times 30 = 720$ orang-hari.\nUntuk $20$ hari dibutuhkan $\\frac{720}{20} = 36$ pekerja, sehingga pekerja tambahan $= 36 - 24 = 12$ orang.',
          rubric: OK1
        },
        {
          label: '10',
          marks: 1,
          prompt: 'Setelah $24$ pekerja bekerja selama $10$ hari, proyek terhenti selama $4$ hari karena cuaca ekstrem. Agar proyek tetap selesai tepat waktu sesuai rencana $30$ hari, banyak pekerja tambahan yang diperlukan untuk sisa waktu adalah ....\n\nA. $4$ orang\nB. $6$ orang\nC. $8$ orang\nD. $10$ orang\nE. $12$ orang',
          answer: 'B. $6$ orang',
          principle: 'Bandingkan sisa beban kerja dengan sisa hari efektif ($30 - 10 - 4 = 16$ hari).',
          solution:
            'Beban kerja tersisa $= 720 - (24 \\times 10) = 480$ orang-hari.\nSisa hari efektif $= 30 - 10 - 4 = 16$ hari.\n\nPekerja yang dibutuhkan $= \\frac{480}{16} = 30$ pekerja, sehingga perlu tambahan $30 - 24 = 6$ orang (opsi B).',
          rubric: OK1
        },
        {
          label: '11',
          marks: 1,
          prompt: 'Jika sejak awal hanya tersedia $18$ pekerja tanpa tambahan, waktu yang dibutuhkan untuk menyelesaikan proyek tersebut adalah ... hari.',
          answer: '$40$',
          principle: 'Waktu $= \\frac{\\text{total beban kerja}}{\\text{jumlah pekerja}}$.',
          solution:
            '$$t = \\frac{720}{18} = 40\\ \\text{hari}.$$',
          rubric: OK1
        },
        {
          label: '12',
          marks: 1,
          prompt: 'Total biaya upah seluruh pekerja hingga proyek selesai tuntas (selama beban kerja tetap $720$ orang-hari) adalah ....\n\nA. Rp96.000.000\nB. Rp100.000.000\nC. Rp108.000.000\nD. Rp112.000.000\nE. Rp120.000.000',
          answer: 'C. Rp108.000.000',
          principle: 'Biaya upah total bergantung langsung pada total orang-hari dikali upah harian.',
          solution:
            '$$\\text{Biaya upah} = 720 \\times \\text{Rp}150.000 = \\text{Rp}108.000.000$$\n(opsi C).',
          rubric: OK1
        }
      ]
    },
    {
      no: 4,
      title: 'Stimulus 4: Optimasi Pendapatan dan Laba Lokakarya',
      marks: 4,
      stem: 'Penyelenggara lokakarya memodelkan harga tiket (dalam ribu rupiah) sebagai fungsi banyak peserta $x$: $p(x) = 200 - 2x$, sehingga pendapatan total (dalam ribu rupiah) adalah $R(x) = x \\cdot p(x) = 200x - 2x^2$. Total biaya operasional (dalam ribu rupiah) adalah $C(x) = 40x + 1200$.',
      parts: [
        {
          label: '13',
          marks: 1,
          prompt: 'Jika peserta yang mendaftar sebanyak $x = 30$ orang, pendapatan total yang diperoleh penyelenggara adalah ....\n\nA. Rp3.600.000\nB. Rp4.000.000\nC. Rp4.200.000\nD. Rp4.500.000\nE. Rp4.800.000',
          answer: 'C. Rp4.200.000',
          principle: 'Substitusi langsung $x = 30$ ke fungsi pendapatan $R(x)$ (satuan ribu rupiah).',
          solution:
            '$$R(30) = 30(200 - 60) = 30 \\times 140 = 4200\\ \\text{ribu rupiah} = \\text{Rp}4.200.000$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '14',
          marks: 1,
          prompt: 'Banyak peserta $x$ yang menghasilkan pendapatan total maksimum adalah ... orang.',
          answer: '$50$',
          principle: 'Titik puncak parabola $ax^2 + bx + c$ berada di $x = -\\frac{b}{2a}$ (atau $R\'(x) = 0$).',
          solution:
            'Dari $R(x) = -2x^2 + 200x$, nilai maksimum tercapai di:\n$$x = -\\frac{200}{2(-2)} = 50\\ \\text{orang}.$$',
          rubric: OK1
        },
        {
          label: '15',
          marks: 1,
          prompt: 'Banyak peserta $x$ yang menghasilkan laba maksimum ($L(x) = R(x) - C(x)$) adalah ... orang.',
          answer: '$40$',
          principle: 'Bentuk fungsi laba $L(x) = R(x) - C(x)$ lalu tentukan sumbu simetrinya.',
          solution:
            '$$L(x) = (200x - 2x^2) - (40x + 1200) = -2x^2 + 160x - 1200.$$\n\nNilai maksimum tercapai saat:\n$$x = -\\frac{160}{2(-2)} = 40\\ \\text{orang}.$$',
          rubric: OK1
        },
        {
          label: '16',
          marks: 1,
          prompt: 'Besar laba maksimum yang dapat diraih penyelenggara lokakarya adalah ....\n\nA. Rp1.600.000\nB. Rp1.800.000\nC. Rp2.000.000\nD. Rp2.400.000\nE. Rp3.200.000',
          answer: 'C. Rp2.000.000',
          principle: 'Substitusi $x = 40$ ke fungsi laba $L(x)$.',
          solution:
            '$$L(40) = -2(40)^2 + 160(40) - 1200 = -3200 + 6400 - 1200 = 2000\\ \\text{ribu rupiah} = \\text{Rp}2.000.000$$\n(opsi C).',
          rubric: OK1
        }
      ]
    },
    {
      no: 5,
      title: 'Stimulus 5: Peta Koordinat Distribusi Logistik',
      marks: 4,
      stem: 'Pada bidang koordinat peta kota ($1$ satuan $= 1\\ \\text{km}$), lokasi Gudang $G$ berada di $(2, 3)$, Toko $A$ di $(8, 11)$, dan Toko $B$ di $(14, 3)$. Kurir menempuh lintasan lurus antar titik.',
      parts: [
        {
          label: '17',
          marks: 1,
          prompt: 'Jarak lurus dari Gudang $G$ ke Toko $A$ adalah ... km.',
          answer: '$10$',
          principle: 'Rumus jarak dua titik $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
          solution:
            '$$GA = \\sqrt{(8 - 2)^2 + (11 - 3)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10\\ \\text{km}.$$',
          rubric: OK1
        },
        {
          label: '18',
          marks: 1,
          prompt: 'Total jarak tempuh kurir untuk rute melingkar $G \\to A \\to B \\to G$ adalah ....\n\nA. $26\\ \\text{km}$\nB. $28\\ \\text{km}$\nC. $30\\ \\text{km}$\nD. $32\\ \\text{km}$\nE. $36\\ \\text{km}$',
          answer: 'D. $32\\ \\text{km}$',
          principle: 'Hitung ketiga sisi segitiga $GAB$ lalu jumlahkan sebagai keliling rute.',
          solution:
            '$GA = 10\\ \\text{km}$, $AB = \\sqrt{(14 - 8)^2 + (3 - 11)^2} = \\sqrt{36 + 64} = 10\\ \\text{km}$, dan $BG = 14 - 2 = 12\\ \\text{km}$.\nKeliling rute $= 10 + 10 + 12 = 32\\ \\text{km}$ (opsi D).',
          rubric: OK1
        },
        {
          label: '19',
          marks: 1,
          prompt: 'Luas wilayah segitiga $GAB$ yang dilingkupi rute distribusi tersebut adalah ... $\\text{km}^2$.',
          answer: '$48$',
          principle: 'Karena $G(2,3)$ dan $B(14,3)$ sejajar sumbu-$x$, alas $= 12$ dan tinggi $= 11 - 3 = 8$.',
          solution:
            '$$\\text{Luas } \\triangle GAB = \\frac{1}{2} \\times \\text{alas} \\times \\text{tinggi} = \\frac{1}{2} \\times 12 \\times 8 = 48\\ \\text{km}^2.$$',
          rubric: OK1
        },
        {
          label: '20',
          marks: 1,
          prompt: 'Jika perusahaan membangun pos istirahat tepat di titik tengah ruas garis $AB$, koordinat pos tersebut adalah ....\n\nA. $(8, 7)$\nB. $(10, 7)$\nC. $(11, 6)$\nD. $(11, 7)$\nE. $(12, 7)$',
          answer: 'D. $(11, 7)$',
          principle: 'Rumus titik tengah $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$.',
          solution:
            '$$M_{AB} = \\left(\\frac{8 + 14}{2}, \\frac{11 + 3}{2}\\right) = (11, 7)$$\n(opsi D).',
          rubric: OK1
        }
      ]
    }
  ]
};
