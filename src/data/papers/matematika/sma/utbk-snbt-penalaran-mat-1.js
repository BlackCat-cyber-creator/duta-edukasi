/**
 * Paket Soal Terstruktur: Latihan UTBK-SNBT Penalaran Matematika — Paket 1
 * 20 soal berbasis 5 konteks nyata (4 soal per stimulus; total 20 poin).
 */
const OK1 = [
  { code: 'A1', text: 'Jawaban dan pemodelan matematis sesuai pembahasan.' }
];

export default {
  id: 'utbk-snbt-penalaran-mat-1',
  slug: 'utbk-snbt-penalaran-mat-1',
  subject: 'matematika',
  grade: 12,
  track: 'utbk-snbt',
  accessTier: 'free',
  topic: 'UTBK-SNBT Penalaran Matematika Paket 1: pemodelan konteks nyata, aritmetika sosial, statistika, peluang, fungsi, dan geometri terapan',
  relatedChapterIds: [
    'sma10-bab7-statistika',
    'sma10-bab8-peluang',
    'sma12-bab3-kaidah-pencacahan',
    'sma12-bab4-peluang'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'UTBK / SNBT',
  title: 'Latihan UTBK-SNBT: Penalaran Matematika — Paket 1',
  totalMarks: 20,
  instructions:
    'Paket ini memuat 20 soal Penalaran Matematika UTBK-SNBT yang terbagi dalam 5 stimulus kontekstual (masing-masing 4 soal bernilai 1 poin; total 20 poin). Bacalah data pada tiap konteks dengan teliti sebelum memilih opsi atau menuliskan nilai numerik.',
  source: {
    org: 'Tim Akademik Duta e-dukasi',
    file: 'original-curated-batch-9',
    license: 'Hak cipta materi kurasi asli Duta e-dukasi'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Stimulus 1: Promo Kafe dan Perhitungan Transaksi',
      marks: 4,
      stem: 'Sebuah kafe menjual kopi susu seharga Rp28.000/gelas dan roti panggang seharga Rp18.000/porsi. Kafe memberikan diskon $20\\%$ untuk subtotal belanja minimal Rp100.000 (sebelum pajak). Pajak restoran sebesar $10\\%$ dikenakan terhadap total belanja setelah diskon. Modal bahan baku per gelas kopi susu adalah Rp14.000 dan per porsi roti panggang adalah Rp9.000.',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt: 'Raka membeli $3$ gelas kopi susu dan $2$ porsi roti panggang dalam satu struk. Total yang harus dibayar Raka (termasuk pajak) adalah ....\n\nA. Rp96.000\nB. Rp105.600\nC. Rp108.000\nD. Rp112.400\nE. Rp132.000',
          answer: 'B. Rp105.600',
          principle: 'Hitung subtotal awal, cek syarat diskon, lalu tambahkan pajak $10\\%$ dari harga setelah diskon.',
          solution:
            'Subtotal $= 3(28.000) + 2(18.000) = 84.000 + 36.000 = \\text{Rp}120.000$.\n\nKarena $\\ge \\text{Rp}100.000$, berlaku diskon $20\\%$ sehingga harga setelah diskon adalah $0{,}8 \\times 120.000 = \\text{Rp}96.000$.\n\nSetelah pajak $10\\%$: $1{,}1 \\times 96.000 = \\text{Rp}105.600$ (opsi B).',
          rubric: OK1
        },
        {
          label: '2',
          marks: 1,
          prompt: 'Dina membeli $2$ gelas kopi susu dan $1$ porsi roti panggang. Total yang harus dibayar Dina (termasuk pajak) adalah ....\n\nA. Rp65.120\nB. Rp74.000\nC. Rp81.400\nD. Rp82.000\nE. Rp88.800',
          answer: 'C. Rp81.400',
          principle: 'Jika subtotal di bawah ambang diskon, tidak ada potongan harga sebelum pajak.',
          solution:
            'Subtotal $= 2(28.000) + 18.000 = 56.000 + 18.000 = \\text{Rp}74.000 < \\text{Rp}100.000$, sehingga tidak mendapat diskon.\n\nTotal setelah pajak $10\\%$: $1{,}1 \\times 74.000 = \\text{Rp}81.400$ (opsi C).',
          rubric: OK1
        },
        {
          label: '3',
          marks: 1,
          prompt: 'Jika seorang pelanggan sudah memesan $2$ gelas kopi susu, jumlah minimum porsi roti panggang yang harus ditambahkan agar berhak memperoleh diskon $20\\%$ adalah ... porsi.',
          answer: '$3$',
          principle: 'Susun pertidaksamaan linear satu variabel dan bulatkan ke bilangan bulat terkecil di atasnya.',
          solution:
            'Misalkan banyak roti adalah $n$:\n$$56.000 + 18.000n \\ge 100.000 \\iff 18.000n \\ge 44.000 \\iff n \\ge \\frac{44}{18} \\approx 2{,}44.$$\n\nJadi jumlah minimum roti panggang adalah $3$ porsi.',
          rubric: OK1
        },
        {
          label: '4',
          marks: 1,
          prompt: 'Dari transaksi Raka pada soal nomor 1 ($3$ kopi susu dan $2$ roti panggang), keuntungan bersih kafe sebelum pajak (pendapatan setelah diskon dikurangi modal bahan baku) adalah ....\n\nA. Rp24.000\nB. Rp32.000\nC. Rp36.000\nD. Rp45.600\nE. Rp60.000',
          answer: 'C. Rp36.000',
          principle: 'Laba sebelum pajak = pendapatan bersih (setelah diskon, sebelum pajak titipan) $-$ total biaya modal.',
          solution:
            'Pendapatan setelah diskon $= \\text{Rp}96.000$.\nTotal modal bahan baku $= 3(14.000) + 2(9.000) = 42.000 + 18.000 = \\text{Rp}60.000$.\n\nLaba bersih sebelum pajak $= 96.000 - 60.000 = \\text{Rp}36.000$ (opsi C).',
          rubric: OK1
        }
      ]
    },
    {
      no: 2,
      title: 'Stimulus 2: Tarif Progresif Air PDAM',
      marks: 4,
      stem: 'Perusahaan air minum menerapkan tarif bulanan progresif sebagai berikut: biaya beban tetap Rp15.000/bulan; pemakaian $0\\text{–}10\\ \\text{m}^3$ pertama dikenai Rp3.500/$\\text{m}^3$; pemakaian $11\\text{–}20\\ \\text{m}^3$ berikutnya dikenai Rp5.000/$\\text{m}^3$; dan setiap pemakaian di atas $20\\ \\text{m}^3$ dikenai Rp7.500/$\\text{m}^3$.',
      parts: [
        {
          label: '5',
          marks: 1,
          prompt: 'Tagihan bulanan untuk rumah tangga dengan pemakaian $18\\ \\text{m}^3$ adalah ....\n\nA. Rp75.000\nB. Rp85.000\nC. Rp90.000\nD. Rp95.000\nE. Rp105.000',
          answer: 'C. Rp90.000',
          principle: 'Fungsi sepotong-sepotong (piecewise): pecah volume $18 = 10 + 8$ sesuai blok tarif.',
          solution:
            'Biaya total:\n$$15.000 + 10(3.500) + 8(5.000) = 15.000 + 35.000 + 40.000 = \\text{Rp}90.000$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '6',
          marks: 1,
          prompt: 'Tagihan bulanan untuk pemakaian $26\\ \\text{m}^3$ adalah ....\n\nA. Rp130.000\nB. Rp140.000\nC. Rp145.000\nD. Rp150.000\nE. Rp160.000',
          answer: 'C. Rp145.000',
          principle: 'Pecah volume $26 = 10 + 10 + 6$ ke dalam ketiga blok tarif ditambah biaya beban tetap.',
          solution:
            'Biaya total:\n$$15.000 + 10(3.500) + 10(5.000) + 6(7.500) = 15.000 + 35.000 + 50.000 + 45.000 = \\text{Rp}145.000$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '7',
          marks: 1,
          prompt: 'Jika tagihan bulanan sebuah keluarga tercatat tepat Rp130.000, maka volume pemakaian air keluarga tersebut adalah ... $\\text{m}^3$.',
          answer: '$24$',
          principle: 'Kurangkan biaya untuk $20\\ \\text{m}^3$ pertama (Rp100.000) lalu bagi sisanya dengan tarif blok ketiga Rp7.500/$\\text{m}^3$.',
          solution:
            'Biaya untuk tepat $20\\ \\text{m}^3$ adalah $15.000 + 35.000 + 50.000 = \\text{Rp}100.000$.\n\nSisa biaya $= 130.000 - 100.000 = \\text{Rp}30.000$, yang setara dengan $\\frac{30.000}{7.500} = 4\\ \\text{m}^3$.\n\nTotal pemakaian $= 20 + 4 = 24\\ \\text{m}^3$.',
          rubric: OK1
        },
        {
          label: '8',
          marks: 1,
          prompt: 'Rata-rata biaya per $\\text{m}^3$ untuk pelanggan yang memakai $25\\ \\text{m}^3$ air dalam sebulan adalah ....\n\nA. Rp5.000\nB. Rp5.200\nC. Rp5.500\nD. Rp5.750\nE. Rp6.000',
          answer: 'C. Rp5.500',
          principle: 'Biaya rata-rata = total tagihan dibagi total volume pemakaian.',
          solution:
            'Tagihan untuk $25\\ \\text{m}^3$: $100.000 + 5(7.500) = \\text{Rp}137.500$.\n\nRata-rata per $\\text{m}^3$ $= \\frac{137.500}{25} = \\text{Rp}5.500$ (opsi C).',
          rubric: OK1
        }
      ]
    },
    {
      no: 3,
      title: 'Stimulus 3: Data Produksi Harian Bengkel Konveksi',
      marks: 4,
      stem: 'Sebuah konveksi mencatat jumlah jaket yang selesai diproduksi selama $5$ hari kerja sebagai berikut: Senin $= 42$, Selasa $= 48$, Rabu $= 50$, Kamis $= 46$, dan Jumat $= 54$ jaket.',
      parts: [
        {
          label: '9',
          marks: 1,
          prompt: 'Rata-rata produksi jaket per hari selama Senin hingga Jumat adalah ... jaket.',
          answer: '$48$',
          principle: 'Rata-rata (mean) adalah jumlah seluruh data dibagi banyak pengamatan.',
          solution:
            'Total produksi $= 42 + 48 + 50 + 46 + 54 = 240$ jaket.\nRata-rata $= \\frac{240}{5} = 48$ jaket/hari.',
          rubric: OK1
        },
        {
          label: '10',
          marks: 1,
          prompt: 'Median data produksi selama $5$ hari kerja tersebut adalah ....\n\nA. $46$\nB. $47$\nC. $48$\nD. $49$\nE. $50$',
          answer: 'C. $48$',
          principle: 'Urutkan data dari terkecil ke terbesar lalu ambil nilai tengah (data ke-3 dari 5 data).',
          solution:
            'Data terurut: $42, 46, 48, 50, 54$. Nilai tengahnya adalah $48$ (opsi C).',
          rubric: OK1
        },
        {
          label: '11',
          marks: 1,
          prompt: 'Jika bengkel menambah hari kerja Sabtu agar rata-rata produksi $6$ hari menjadi tepat $50$ jaket/hari, maka banyak jaket yang harus diproduksi pada hari Sabtu adalah ... jaket.',
          answer: '$60$',
          principle: 'Gunakan total target $6 \\times 50$ dikurangi total $5$ hari pertama.',
          solution:
            'Total target $6$ hari $= 6 \\times 50 = 300$ jaket.\nProduksi hari Sabtu $= 300 - 240 = 60$ jaket.',
          rubric: OK1
        },
        {
          label: '12',
          marks: 1,
          prompt: 'Persentase kontribusi produksi hari Jumat terhadap total produksi selama $5$ hari kerja (Senin–Jumat) adalah ....\n\nA. $20{,}0\\%$\nB. $21{,}5\\%$\nC. $22{,}5\\%$\nD. $24{,}0\\%$\nE. $25{,}0\\%$',
          answer: 'C. $22{,}5\\%$',
          principle: 'Persentase kontribusi = $\\frac{\\text{produksi Jumat}}{\\text{total 5 hari}} \\times 100\\%$.',
          solution:
            '$$\\frac{54}{240} \\times 100\\% = \\frac{9}{40} \\times 100\\% = 22{,}5\\%$$\n(opsi C).',
          rubric: OK1
        }
      ]
    },
    {
      no: 4,
      title: 'Stimulus 4: Kapasitas Tangki Air dan Debit Pipa',
      marks: 4,
      stem: 'Sebuah tangki air berbentuk tabung tertutup memiliki jari-jari alas $70\\ \\text{cm}$ dan tinggi $2\\ \\text{m}$ (gunakan $\\pi = \\frac{22}{7}$ dan $1\\ \\text{m}^3 = 1000\\ \\text{liter}$). Tangki dilengkapi pipa pengisi A berdebit $28\\ \\text{L/menit}$, pipa pengisi B berdebit $16\\ \\text{L/menit}$, serta keran penguras.',
      parts: [
        {
          label: '13',
          marks: 1,
          prompt: 'Kapasitas maksimum tangki air tersebut dalam satuan liter adalah ... liter.',
          answer: '$3080$',
          principle: 'Volume tabung $V = \\pi r^2 t$ dengan satuan konsisten (meter lalu konversi ke liter).',
          solution:
            'Dengan $r = 0{,}7\\ \\text{m}$ dan $t = 2\\ \\text{m}$:\n$$V = \\frac{22}{7} \\times (0{,}7)^2 \\times 2 = \\frac{22}{7} \\times 0{,}49 \\times 2 = 3{,}08\\ \\text{m}^3 = 3080\\ \\text{liter}.$$',
          rubric: OK1
        },
        {
          label: '14',
          marks: 1,
          prompt: 'Waktu yang diperlukan untuk mengisi tangki dari keadaan kosong hingga penuh hanya menggunakan pipa A adalah ....\n\nA. $90$ menit\nB. $100$ menit\nC. $110$ menit\nD. $120$ menit\nE. $140$ menit',
          answer: 'C. $110$ menit',
          principle: 'Waktu pengisian $t = \\frac{V}{Q}$.',
          solution:
            '$$t = \\frac{3080}{28} = 110\\ \\text{menit}$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '15',
          marks: 1,
          prompt: 'Jika pipa A dan pipa B dibuka bersamaan sejak tangki kosong, tangki akan penuh dalam waktu ... menit.',
          answer: '$70$',
          principle: 'Debit gabungan dua pipa pengisi adalah penjumlahan debit masing-masing.',
          solution:
            'Debit gabungan $= 28 + 16 = 44\\ \\text{L/menit}$.\n$$t = \\frac{3080}{44} = 70\\ \\text{menit}.$$',
          rubric: OK1
        },
        {
          label: '16',
          marks: 1,
          prompt: 'Dalam keadaan tangki penuh, keran penguras dibuka dengan debit keluar $35\\ \\text{L/menit}$ sambil sebuah pipa cadangan mengalirkan air masuk sebesar $13\\ \\text{L/menit}$. Tangki akan kosong sepenuhnya dalam waktu ....\n\nA. $88$ menit\nB. $110$ menit\nC. $125$ menit\nD. $140$ menit\nE. $154$ menit',
          answer: 'D. $140$ menit',
          principle: 'Laju pengurangan bersih = debit keluar $-$ debit masuk.',
          solution:
            'Debit bersih keluar $= 35 - 13 = 22\\ \\text{L/menit}$.\n$$t = \\frac{3080}{22} = 140\\ \\text{menit}$$\n(opsi D).',
          rubric: OK1
        }
      ]
    },
    {
      no: 5,
      title: 'Stimulus 5: Survei Ekstrakurikuler Teknologi Siswa SMA',
      marks: 4,
      stem: 'Sebuah survei terhadap $120$ siswa kelas XII menunjukkan bahwa $70$ siswa berminat pada ekstrakurikuler Coding, $55$ siswa berminat pada Robotika, dan $25$ siswa berminat pada keduanya.',
      parts: [
        {
          label: '17',
          marks: 1,
          prompt: 'Banyak siswa yang tidak berminat pada Coding maupun Robotika adalah ... siswa.',
          answer: '$20$',
          principle: 'Prinsip inklusi–eksklusi: $|C \\cup R| = |C| + |R| - |C \\cap R|$.',
          solution:
            'Banyak siswa yang berminat minimal satu ekstrakurikuler:\n$$|C \\cup R| = 70 + 55 - 25 = 100.$$\n\nSiswa yang tidak berminat keduanya $= 120 - 100 = 20$ siswa.',
          rubric: OK1
        },
        {
          label: '18',
          marks: 1,
          prompt: 'Jika dipilih $1$ siswa secara acak dari $120$ siswa tersebut, peluang terpilihnya siswa yang berminat pada tepat satu ekstrakurikuler adalah ....\n\nA. $\\frac{1}{2}$\nB. $\\frac{7}{12}$\nC. $\\frac{5}{8}$\nD. $\\frac{2}{3}$\nE. $\\frac{5}{6}$',
          answer: 'C. $\\frac{5}{8}$',
          principle: 'Tepat satu = (hanya Coding) + (hanya Robotika).',
          solution:
            'Hanya Coding $= 70 - 25 = 45$ siswa; hanya Robotika $= 55 - 25 = 30$ siswa.\nTotal tepat satu $= 45 + 30 = 75$ siswa.\n\nPeluang $= \\frac{75}{120} = \\frac{5}{8}$ (opsi C).',
          rubric: OK1
        },
        {
          label: '19',
          marks: 1,
          prompt: 'Diketahui seorang siswa yang terpilih ternyata berminat pada Coding. Peluang bahwa siswa tersebut juga berminat pada Robotika adalah ....\n\nA. $\\frac{5}{24}$\nB. $\\frac{5}{14}$\nC. $\\frac{5}{11}$\nD. $\\frac{1}{2}$\nE. $\\frac{7}{12}$',
          answer: 'B. $\\frac{5}{14}$',
          principle: 'Peluang bersyarat $P(R \\mid C) = \\frac{|C \\cap R|}{|C|}$.',
          solution:
            '$$P(R \\mid C) = \\frac{25}{70} = \\frac{5}{14}$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '20',
          marks: 1,
          prompt: 'Dari $25$ siswa yang berminat pada kedua ekstrakurikuler, sekolah akan memilih $2$ siswa sebagai perwakilan lomba tanpa memperhatikan urutan. Banyak cara pemilihan adalah ....\n\nA. $50$\nB. $250$\nC. $300$\nD. $600$\nE. $625$',
          answer: 'C. $300$',
          principle: 'Kombinasi $\\binom{n}{2} = \\frac{n(n-1)}{2}$ karena urutan tidak diperhatikan.',
          solution:
            '$$\\binom{25}{2} = \\frac{25 \\times 24}{2} = 25 \\times 12 = 300$$\n(opsi C).',
          rubric: OK1
        }
      ]
    }
  ]
};
