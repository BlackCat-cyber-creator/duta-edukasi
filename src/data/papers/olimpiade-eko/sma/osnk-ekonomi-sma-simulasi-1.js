/**
 * Paket Soal Terstruktur: Simulasi OSN-K Ekonomi SMA — Paket 1
 * Materi kurasi asli Tim Akademik Duta e-dukasi (12 Pilihan Ganda A-E @ 1 poin + 3 Isian Numerik @ 2 poin = 18 poin).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];
const R2 = [
  { code: 'M1', text: 'Penalaran, persamaan model ekonomi/akuntansi, dan langkah perhitungan benar.' },
  { code: 'A1', text: 'Jawaban numerik akhir tepat sesuai pembahasan.' }
];

export default {
  id: 'osnk-eko-sma-simulasi-1',
  slug: 'osnk-ekonomi-sma-simulasi-1',
  subject: 'olimpiade-eko',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic:
    'Simulasi OSN-K Ekonomi SMA: mikroekonomi (elastisitas, pasar, biaya produksi), makroekonomi (PDB, inflasi, pengganda), perdagangan internasional, dan akuntansi',
  relatedChapterIds: [
    'sma10-bab5-spltv-sptldv',
    'sma10-bab7-statistika',
    'sma11-bab5-turunan',
    'sma12-bab2-investasi-pinjaman'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'Simulasi OSN-K Ekonomi SMA \u2014 Paket 1',
  totalMarks: 18,
  instructions:
    'Paket simulasi ini terdiri atas 15 soal asli OSN-K Ekonomi SMA yang terbagi menjadi Bagian A (12 soal Pilihan Ganda A\u2013E, masing-masing bernilai 1 poin) dan Bagian B (3 soal Isian Numerik, masing-masing bernilai 2 poin), dengan skor maksimum 18 poin. Kerjakan seluruh soal secara cermat menggunakan prinsip analisis mikroekonomi, makroekonomi, perdagangan internasional, dan akuntansi dasar. Untuk soal Isian Numerik, tuliskan jawaban akhir berupa bilangan eksak sesuai satuan yang diminta pada masing-masing soal.',
  source: {
    org: 'Tim Akademik Duta e-dukasi',
    file: 'original-curated-batch-9',
    license: 'Hak cipta materi kurasi asli Duta e-dukasi'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Pilihan Ganda',
      marks: 12,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (12 soal pilihan ganda, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Seorang konsumen memiliki fungsi utilitas $U(X, Y) = X^{0{,}4} Y^{0{,}6}$ dan anggaran belanja sebesar $M = \\text{Rp}600.000$. Jika harga barang $X$ adalah $P_X = \\text{Rp}12.000$ per unit dan harga barang $Y$ adalah $P_Y = \\text{Rp}15.000$ per unit, maka kombinasi konsumsi $(X^*, Y^*)$ yang memaksimalkan utilitas konsumen tersebut adalah ....\n\nA. $X = 15$ unit dan $Y = 28$ unit\nB. $X = 24$ unit dan $Y = 20$ unit\nC. $X = 20$ unit dan $Y = 24$ unit\nD. $X = 25$ unit dan $Y = 20$ unit\nE. $X = 30$ unit dan $Y = 16$ unit',
          answer: 'C. $X = 20$ unit dan $Y = 24$ unit',
          principle:
            'Keseimbangan konsumen tercapai saat laju substitusi marjinal sama dengan rasio harga ($MRS_{XY} = \\frac{MU_X}{MU_Y} = \\frac{P_X}{P_Y}$) dan seluruh anggaran habis terpakai ($P_X X + P_Y Y = M$).',
          solution:
            'Dari fungsi utilitas $U(X, Y) = X^{0{,}4} Y^{0{,}6}$, utilitas marjinal masing-masing barang adalah:\n$$MU_X = \\frac{\\partial U}{\\partial X} = 0{,}4 X^{-0{,}6} Y^{0{,}6}, \\qquad MU_Y = \\frac{\\partial U}{\\partial Y} = 0{,}6 X^{0{,}4} Y^{-0{,}4}.$$\nSyarat keseimbangan konsumen:\n$$\\frac{MU_X}{MU_Y} = \\frac{P_X}{P_Y} \\implies \\frac{0{,}4 Y}{0{,}6 X} = \\frac{12.000}{15.000} \\implies \\frac{2Y}{3X} = \\frac{4}{5} \\implies Y = \\frac{6}{5} X.$$\nSubstitusikan ke kendala anggaran $12.000 X + 15.000 Y = 600.000$:\n$$12.000 X + 15.000\\left(\\frac{6}{5} X\\right) = 600.000 \\implies 12.000 X + 18.000 X = 600.000 \\implies 30.000 X = 600.000.$$\nDiperoleh $X^* = 20$ unit, dan $Y^* = \\frac{6}{5}(20) = 24$ unit. (Cara cepat untuk Cobb-Douglas $U = X^\\alpha Y^{1-\\alpha}$: $X^* = \\frac{\\alpha M}{P_X} = \\frac{0{,}4 \\times 600.000}{12.000} = 20$ dan $Y^* = \\frac{0{,}6 \\times 600.000}{15.000} = 24$.)',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Fungsi permintaan suatu komoditas dinyatakan oleh $Q_d = 180 - 3P$. Pada tingkat harga $P = 20$, nilai elastisitas harga permintaan ($E_d$) beserta dampaknya terhadap penerimaan total ($TR$) apabila harga dinaikkan sedikit adalah ....\n\nA. $E_d = -0{,}5$ (inelastis), sehingga kenaikan harga sedikit akan meningkatkan penerimaan total ($TR$)\nB. $E_d = -0{,}5$ (inelastis), sehingga kenaikan harga sedikit akan menurunkan penerimaan total ($TR$)\nC. $E_d = -2{,}0$ (elastis), sehingga kenaikan harga sedikit akan menurunkan penerimaan total ($TR$)\nD. $E_d = -1{,}0$ (elastis uniter), sehingga kenaikan harga sedikit tidak mengubah penerimaan total ($TR$)\nE. $E_d = -1{,}5$ (elastis), sehingga kenaikan harga sedikit akan meningkatkan penerimaan total ($TR$)',
          answer:
            'A. $E_d = -0{,}5$ (inelastis), sehingga kenaikan harga sedikit akan meningkatkan penerimaan total ($TR$)',
          principle:
            'Elastisitas harga titik didefinisikan sebagai $E_d = \\frac{dQ_d}{dP} \\cdot \\frac{P}{Q_d}$; pada daerah inelastis ($|E_d| < 1$), kenaikan harga menaikkan penerimaan total karena $\\frac{d(TR)}{dP} = Q_d(1 + E_d) > 0$.',
          solution:
            'Pada $P = 20$, jumlah barang yang diminta adalah:\n$$Q_d = 180 - 3(20) = 120.$$\nTurunan fungsi permintaan terhadap harga adalah $\\frac{dQ_d}{dP} = -3$. Maka elastisitas harga titiknya:\n$$E_d = \\frac{dQ_d}{dP} \\cdot \\frac{P}{Q_d} = (-3) \\cdot \\frac{20}{120} = -0{,}5.$$\nKarena $|E_d| = 0{,}5 < 1$, permintaan bersifat **inelastis**. Secara analitis, persentase penurunan kuantitas lebih kecil daripada persentase kenaikan harga, sehingga kenaikan harga sedikit akan **meningkatkan penerimaan total ($TR$)** (misalnya pada $P=20$, $TR = 20 \\times 120 = 2.400$; pada $P=21$, $TR = 21 \\times 117 = 2.457$).',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Sebuah perusahaan manufaktur memiliki fungsi biaya total jangka pendek $TC(Q) = Q^3 - 12Q^2 + 60Q + 100$. Tingkat output $Q$ dan besarnya biaya marjinal ($MC$) tepat pada saat biaya variabel rata-rata ($AVC$) mencapai nilai minimum adalah ....\n\nA. $Q = 4$ unit dan $MC = 12$\nB. $Q = 6$ unit dan $MC = 24$\nC. $Q = 6$ unit dan $MC = 40$\nD. $Q = 8$ unit dan $MC = 28$\nE. $Q = 12$ unit dan $MC = 60$',
          answer: 'B. $Q = 6$ unit dan $MC = 24$',
          principle:
            'Biaya variabel rata-rata $AVC = \\frac{VC(Q)}{Q}$ mencapai minimum saat $\\frac{d(AVC)}{dQ} = 0$, dan tepat di titik minimumnya kurva $MC$ memotong kurva $AVC$ ($MC = AVC_{\\min}$).',
          solution:
            'Dari $TC(Q) = Q^3 - 12Q^2 + 60Q + 100$, komponen biaya variabel total adalah $VC(Q) = Q^3 - 12Q^2 + 60Q$, sehingga:\n$$AVC(Q) = \\frac{VC(Q)}{Q} = Q^2 - 12Q + 60.$$\nUntuk meminimumkan $AVC(Q)$:\n$$\\frac{d(AVC)}{dQ} = 2Q - 12 = 0 \\implies Q = 6\\text{ unit}.$$\nUji turunan kedua: $\\frac{d^2(AVC)}{dQ^2} = 2 > 0$ (minimum). Substitusikan $Q = 6$ ke dalam fungsi $MC(Q) = \\frac{d(TC)}{dQ} = 3Q^2 - 24Q + 60$:\n$$MC(6) = 3(6)^2 - 24(6) + 60 = 108 - 144 + 60 = 24.$$\nNilai ini tepat sama dengan $AVC(6) = 6^2 - 12(6) + 60 = 24$.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Sebuah perusahaan beroperasi dalam pasar persaingan sempurna dengan fungsi biaya total $TC(Q) = 2Q^2 + 10Q + 50$. Jika harga jual produk yang terbentuk di pasar adalah $P = 42$, maka laba ekonomi maksimum yang dapat diperoleh perusahaan dalam jangka pendek adalah ....\n\nA. $50$\nB. $64$\nC. $72$\nD. $78$\nE. $128$',
          answer: 'D. $78$',
          principle:
            'Pada pasar persaingan sempurna, perusahaan bertindak sebagai *price taker* sehingga kondisi maksimisasi laba adalah $P = MC$ dengan syarat $P \\ge AVC$ dan $\\frac{d(MC)}{dQ} > 0$.',
          solution:
            'Biaya marjinal perusahaan adalah:\n$$MC(Q) = \\frac{d(TC)}{dQ} = 4Q + 10.$$\nSyarat maksimisasi laba $P = MC$:\n$$42 = 4Q + 10 \\implies 4Q = 32 \\implies Q^* = 8\\text{ unit}.$$\nPeriksa syarat *shutdown*: $AVC(8) = 2(8) + 10 = 26 < P = 42$, sehingga perusahaan tetap berproduksi.\nHitung penerimaan total ($TR$) dan biaya total ($TC$) pada $Q^* = 8$:\n$$TR = P \\cdot Q^* = 42 \\times 8 = 336,$$\n$$TC = 2(8)^2 + 10(8) + 50 = 128 + 80 + 50 = 258.$$\nMaka laba maksimum jangka pendek adalah:\n$$\\pi^* = TR - TC = 336 - 258 = 78.$$',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Sebuah perusahaan monopoli menghadapi fungsi permintaan pasar $P = 100 - 2Q$ dengan fungsi biaya total $TC(Q) = 20Q + 150$. Besarnya kerugian bobot mati (*deadweight loss*) yang ditimbulkan oleh kekuatan monopoli dibandingkan dengan kondisi pasar persaingan sempurna adalah ....\n\nA. $200$\nB. $300$\nC. $400$\nD. $650$\nE. $800$',
          answer: 'C. $400$',
          principle:
            'Monopolis memproduksi pada $MR = MC$, sedangkan efisiensi alokatif (persaingan sempurna) terjadi pada $P = MC$; kerugian bobot mati adalah luas segitiga kesejahteraan yang hilang sebesar $\\frac{1}{2}(P_m - MC)(Q_c - Q_m)$.',
          solution:
            'Dari fungsi permintaan $P = 100 - 2Q$, penerimaan total adalah $TR = 100Q - 2Q^2$, sehingga penerimaan marjinalnya:\n$$MR = \\frac{d(TR)}{dQ} = 100 - 4Q.$$\nDari $TC(Q) = 20Q + 150$, diperoleh $MC = 20$.\n1. **Keseimbangan Monopoli ($MR = MC$):**\n$$100 - 4Q_m = 20 \\implies 4Q_m = 80 \\implies Q_m = 20, \\qquad P_m = 100 - 2(20) = 60.$$\n2. **Keseimbangan Efisien / Persaingan Sempurna ($P = MC$):**\n$$100 - 2Q_c = 20 \\implies 2Q_c = 80 \\implies Q_c = 40.$$\n3. **Kerugian Bobot Mati (*Deadweight Loss*):**\n$$DWL = \\frac{1}{2}(P_m - MC)(Q_c - Q_m) = \\frac{1}{2}(60 - 20)(40 - 20) = \\frac{1}{2}(40)(20) = 400.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Sebuah pabrik memiliki fungsi produksi jangka panjang $Q = 10 K^{0{,}5} L^{0{,}5}$, di mana $K$ adalah jumlah mesin dan $L$ adalah jumlah tenaga kerja. Jika tingkat upah tenaga kerja adalah $w = 40$ per unit dan biaya sewa mesin adalah $r = 10$ per unit, maka biaya produksi minimum untuk menghasilkan tepat $200$ unit output adalah ....\n\nA. $500$\nB. $640$\nC. $720$\nD. $800$\nE. $1.000$',
          answer: 'D. $800$',
          principle:
            'Keseimbangan produsen (kombinasi input berbiaya minimum) tercapai saat laju substitusi teknis marjinal sama dengan rasio harga input: $MRTS_{LK} = \\frac{MP_L}{MP_K} = \\frac{w}{r}$.',
          solution:
            'Hitung produk marjinal tenaga kerja ($MP_L$) dan modal ($MP_K$):\n$$MP_L = \\frac{\\partial Q}{\\partial L} = 5 K^{0{,}5} L^{-0{,}5}, \\qquad MP_K = \\frac{\\partial Q}{\\partial K} = 5 K^{-0{,}5} L^{0{,}5}.$$\nSyarat minimisasi biaya ($\\frac{MP_L}{MP_K} = \\frac{w}{r}$):\n$$\\frac{5 K^{0{,}5} L^{-0{,}5}}{5 K^{-0{,}5} L^{0{,}5}} = \\frac{K}{L} = \\frac{40}{10} = 4 \\implies K = 4L.$$\nSubstitusikan $K = 4L$ ke target output $Q = 200$:\n$$200 = 10 (4L)^{0{,}5} L^{0{,}5} = 10(2L) = 20L \\implies L^* = 10, \\qquad K^* = 4(10) = 40.$$\nTotal biaya minimumnya adalah:\n$$C_{\\min} = wL^* + rK^* = 40(10) + 10(40) = 400 + 400 = 800.$$',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Suatu perekonomian sederhana hanya memproduksi dua barang: beras dan kain. Pada tahun dasar 2023, harga beras adalah $10$ dengan kuantitas $100$ unit, sedangkan harga kain adalah $50$ dengan kuantitas $20$ unit. Pada tahun 2024, harga beras naik menjadi $12$ dengan kuantitas $120$ unit, dan harga kain naik menjadi $60$ dengan kuantitas $30$ unit. Nilai Deflator PDB (*GDP Deflator*) pada tahun 2024 adalah ....\n\nA. $108$\nB. $112$\nC. $115$\nD. $118$\nE. $120$',
          answer: 'E. $120$',
          principle:
            'PDB Nominal dihitung dengan harga tahun berjalan, PDB Riil dihitung dengan harga tahun dasar, dan Deflator PDB dirumuskan sebagai $\\text{Deflator PDB} = \\frac{\\text{PDB Nominal}}{\\text{PDB Riil}} \\times 100$.',
          solution:
            'Hitung PDB Nominal dan PDB Riil tahun 2024 menggunakan harga tahun dasar 2023 ($P_{\\text{beras},2023} = 10$, $P_{\\text{kain},2023} = 50$):\n$$\\text{PDB Nominal}_{2024} = (12 \\times 120) + (60 \\times 30) = 1.440 + 1.800 = 3.240,$$\n$$\\text{PDB Riil}_{2024} = (10 \\times 120) + (50 \\times 30) = 1.200 + 1.500 = 2.700.$$\nDengan demikian, Deflator PDB tahun 2024 adalah:\n$$\\text{Deflator PDB}_{2024} = \\frac{3.240}{2.700} \\times 100 = 1{,}2 \\times 100 = 120.$$',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Keranjang konsumsi tetap rumah tangga untuk menghitung Indeks Harga Konsumen (IHK) terdiri atas $10\\text{ kg}$ beras, $5\\text{ liter}$ minyak goreng, dan $2\\text{ kg}$ gula. Pada tahun dasar 2023, harga ketiga komoditas berturut-turut adalah $\\text{Rp}12.000/\\text{kg}$, $\\text{Rp}14.000/\\text{liter}$, dan $\\text{Rp}15.000/\\text{kg}$. Pada tahun 2024 harganya menjadi $\\text{Rp}13.200$, $\\text{Rp}15.400$, dan $\\text{Rp}16.500$, sedangkan pada tahun 2025 menjadi $\\text{Rp}14.500$, $\\text{Rp}16.640$, dan $\\text{Rp}19.000$. Laju inflasi tahun 2025 berdasarkan IHK tersebut adalah ....\n\nA. $8{,}5\\%$\nB. $10{,}0\\%$\nC. $11{,}0\\%$\nD. $12{,}5\\%$\nE. $21{,}0\\%$',
          answer: 'B. $10{,}0\\%$',
          principle:
            'IHK tahun $t$ adalah perbandingan nilai keranjang konsumsi pada tahun $t$ terhadap tahun dasar dikali $100$, sedangkan laju inflasi tahun $t$ adalah $\\pi_t = \\frac{\\text{IHK}_t - \\text{IHK}_{t-1}}{\\text{IHK}_{t-1}} \\times 100\\%$.',
          solution:
            'Hitung biaya keranjang konsumsi setiap tahun:\n- Tahun dasar 2023: $(10 \\times 12.000) + (5 \\times 14.000) + (2 \\times 15.000) = 120.000 + 70.000 + 30.000 = \\text{Rp}220.000$.\n- Tahun 2024: $(10 \\times 13.200) + (5 \\times 15.400) + (2 \\times 16.500) = 132.000 + 77.000 + 33.000 = \\text{Rp}242.000$.\n- Tahun 2025: $(10 \\times 14.500) + (5 \\times 16.640) + (2 \\times 19.000) = 145.000 + 83.200 + 38.000 = \\text{Rp}266.200$.\n\nHitung indeks harga:\n$$\\text{IHK}_{2024} = \\frac{242.000}{220.000} \\times 100 = 110, \\qquad \\text{IHK}_{2025} = \\frac{266.200}{220.000} \\times 100 = 121.$$\nMaka laju inflasi pada tahun 2025 adalah:\n$$\\pi_{2025} = \\frac{121 - 110}{110} \\times 100\\% = \\frac{11}{110} \\times 100\\% = 10{,}0\\%.$$',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Diketahui data model makroekonomi suatu negara dalam perekonomian terbuka (dalam miliar satuan mata uang): fungsi konsumsi $C = 200 + 0{,}75Y_d$ dengan $Y_d = Y - T$, pajak $T = 100$, investasi $I = 295$, pengeluaran pemerintah $G = 250$, ekspor $X = 150$, dan fungsi impor $M = 100 + 0{,}15Y$. Besarnya pendapatan nasional keseimbangan ($Y^*$) negara tersebut adalah ....\n\nA. $1.440$\nB. $1.600$\nC. $1.800$\nD. $2.400$\nE. $2.880$',
          answer: 'C. $1.800$',
          principle:
            'Keseimbangan pendapatan nasional perekonomian terbuka memenuhi identitas $Y = C + I + G + (X - M)$ dengan pengganda perekonomian terbuka $k = \\frac{1}{1 - c + m}$.',
          solution:
            'Substitusikan seluruh komponen ke dalam persamaan keseimbangan $Y = C + I + G + X - M$:\n$$Y = \\left[200 + 0{,}75(Y - 100)\\right] + 295 + 250 + 150 - (100 + 0{,}15Y).$$\nSederhanakan suku konstanta (pengeluaran otonom) dan koefisien $Y$:\n$$Y = (200 - 75 + 295 + 250 + 150 - 100) + (0{,}75 - 0{,}15)Y$$\n$$Y = 720 + 0{,}60Y \\implies 0{,}40Y = 720 \\implies Y^* = \\frac{720}{0{,}40} = 1.800.$$',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Seorang eksportir di Indonesia menerima pembayaran hasil ekspor sebesar $\\text{USD}\\,10.000$ dan menukarkan seluruhnya ke rupiah di sebuah bank devisa. Pada saat yang sama, ia harus membeli $\\text{EUR}\\,4.000$ di bank yang sama untuk membayar bahan baku impor. Jika bank menetapkan kurs beli $\\text{USD} = \\text{Rp}15.400$ dan kurs jual $\\text{USD} = \\text{Rp}15.600$, serta kurs beli $\\text{EUR} = \\text{Rp}16.500$ dan kurs jual $\\text{EUR} = \\text{Rp}16.800$, maka sisa uang rupiah yang dimiliki eksportir tersebut adalah ....\n\nA. $\\text{Rp}86.800.000$\nB. $\\text{Rp}88.000.000$\nC. $\\text{Rp}88.400.000$\nD. $\\text{Rp}88.800.000$\nE. $\\text{Rp}90.000.000$',
          answer: 'A. $\\text{Rp}86.800.000$',
          principle:
            'Kurs beli dan kurs jual selalu dilihat dari sudut pandang bank: ketika nasabah menjual valuta asing ke bank maka berlaku **kurs beli**, dan ketika nasabah membeli valuta asing dari bank maka berlaku **kurs jual**.',
          solution:
            '1. Eksportir menukarkan (menjual) $\\text{USD}\\,10.000$ ke bank, sehingga bank membeli USD menggunakan **kurs beli USD** ($\\text{Rp}15.400$):\n$$\\text{Rupiah diterima} = 10.000 \\times \\text{Rp}15.400 = \\text{Rp}154.000.000.$$\n2. Eksportir membeli $\\text{EUR}\\,4.000$ dari bank, sehingga bank menjual EUR menggunakan **kurs jual EUR** ($\\text{Rp}16.800$):\n$$\\text{Rupiah dibayarkan} = 4.000 \\times \\text{Rp}16.800 = \\text{Rp}67.200.000.$$\n3. Sisa rupiah yang dimiliki eksportir:\n$$\\text{Sisa} = \\text{Rp}154.000.000 - \\text{Rp}67.200.000 = \\text{Rp}86.800.000.$$',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Dalam $1$ hari kerja, seorang pekerja di Negara A dapat memproduksi $12$ unit tekstil atau $6$ unit baja, sedangkan seorang pekerja di Negara B dapat memproduksi $8$ unit tekstil atau $8$ unit baja. Berdasarkan teori keunggulan komparatif David Ricardo, pola spesialisasi perdagangan dan nilai tukar internasional (*terms of trade*) yang saling menguntungkan bagi kedua negara adalah ....\n\nA. Negara A mengekspor baja, Negara B mengekspor tekstil, dengan nilai tukar $1\\text{ baja} = 0{,}8\\text{ tekstil}$\nB. Negara A mengekspor tekstil, Negara B mengekspor baja, dengan nilai tukar $1\\text{ baja} = 0{,}8\\text{ tekstil}$\nC. Negara A mengekspor baja, Negara B mengekspor tekstil, dengan nilai tukar $1\\text{ baja} = 1{,}5\\text{ tekstil}$\nD. Negara A mengekspor tekstil, Negara B mengekspor baja, dengan nilai tukar $1\\text{ baja} = 1{,}5\\text{ tekstil}$\nE. Negara A mengekspor tekstil, Negara B mengekspor baja, dengan nilai tukar $1\\text{ baja} = 2{,}5\\text{ tekstil}$',
          answer:
            'D. Negara A mengekspor tekstil, Negara B mengekspor baja, dengan nilai tukar $1\\text{ baja} = 1{,}5\\text{ tekstil}$',
          principle:
            'Suatu negara memiliki keunggulan komparatif pada barang dengan biaya peluang (*opportunity cost*) terendah, dan *terms of trade* yang menguntungkan terletak di antara biaya peluang kedua negara.',
          solution:
            'Hitung biaya peluang masing-masing barang:\n- **Negara A:** menghasilkan $12$ tekstil mengorbankan $6$ baja, sehingga biaya peluang $1\\text{ tekstil} = \\frac{6}{12} = 0{,}5\\text{ baja}$, dan biaya peluang $1\\text{ baja} = \\frac{12}{6} = 2\\text{ tekstil}$.\n- **Negara B:** menghasilkan $8$ tekstil mengorbankan $8$ baja, sehingga biaya peluang $1\\text{ tekstil} = 1\\text{ baja}$, dan biaya peluang $1\\text{ baja} = 1\\text{ tekstil}$.\n\nBandingkan biaya peluang:\n- Untuk **tekstil**: Negara A ($0{,}5\\text{ baja}$) $<$ Negara B ($1\\text{ baja}$), sehingga **Negara A berspesialisasi dan mengekspor tekstil**.\n- Untuk **baja**: Negara B ($1\\text{ tekstil}$) $<$ Negara A ($2\\text{ tekstil}$), sehingga **Negara B berspesialisasi dan mengekspor baja**.\n\nNilai tukar internasional yang saling menguntungkan untuk $1\\text{ baja}$ harus berada pada interval $1\\text{ tekstil} < \\text{harga } 1\\text{ baja} < 2\\text{ tekstil}$. Di antara pilihan yang tersedia, hanya $1\\text{ baja} = 1{,}5\\text{ tekstil}$ yang memenuhi syarat tersebut.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Pada awal periode akuntansi, sebuah perusahaan jasa memiliki total aset sebesar $\\text{Rp}450\\text{ juta}$ dan total liabilitas sebesar $\\text{Rp}180\\text{ juta}$. Selama periode berjalan, perusahaan memperoleh pendapatan jasa $\\text{Rp}140\\text{ juta}$, menanggung beban usaha $\\text{Rp}85\\text{ juta}$, menerima setoran modal tambahan dari pemilik $\\text{Rp}30\\text{ juta}$, dan pemilik melakukan penarikan pribadi (*prive*) $\\text{Rp}15\\text{ juta}$. Apabila pada akhir periode liabilitas perusahaan tercatat sebesar $\\text{Rp}200\\text{ juta}$, maka total aset perusahaan pada akhir periode adalah ....\n\nA. $\\text{Rp}490\\text{ juta}$\nB. $\\text{Rp}510\\text{ juta}$\nC. $\\text{Rp}525\\text{ juta}$\nD. $\\text{Rp}530\\text{ juta}$\nE. $\\text{Rp}540\\text{ juta}$',
          answer: 'E. $\\text{Rp}540\\text{ juta}$',
          principle:
            'Persamaan dasar akuntansi menyatakan $\\text{Aset} = \\text{Liabilitas} + \\text{Ekuitas}$, dengan perubahan ekuitas mengikuti $\\text{Ekuitas Akhir} = \\text{Ekuitas Awal} + \\text{Setoran Modal} + \\text{Laba Bersih} - \\text{Prive}$.',
          solution:
            '1. Hitung ekuitas awal periode:\n$$\\text{Ekuitas Awal} = \\text{Aset Awal} - \\text{Liabilitas Awal} = 450 - 180 = \\text{Rp}270\\text{ juta}.$$\n2. Hitung laba bersih periode berjalan:\n$$\\text{Laba Bersih} = \\text{Pendapatan} - \\text{Beban} = 140 - 85 = \\text{Rp}55\\text{ juta}.$$\n3. Hitung ekuitas akhir periode:\n$$\\text{Ekuitas Akhir} = 270 + 30 + 55 - 15 = \\text{Rp}340\\text{ juta}.$$\n4. Hitung total aset akhir periode menggunakan persamaan dasar akuntansi:\n$$\\text{Aset Akhir} = \\text{Liabilitas Akhir} + \\text{Ekuitas Akhir} = 200 + 340 = \\text{Rp}540\\text{ juta}.$$',
          rubric: OK
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Isian Numerik',
      marks: 6,
      stem: 'Selesaikan ketiga soal isian numerik berikut dengan menuliskan jawaban akhir berupa bilangan eksak sesuai satuan yang diminta pada masing-masing soal (masing-masing bernilai 2 poin).',
      parts: [
        {
          label: '13',
          marks: 2,
          prompt:
            'Seorang monopolis melakukan diskriminasi harga derajat ketiga pada dua pasar yang terpisah sempurna. Fungsi permintaan di Pasar 1 adalah $P_1 = 100 - Q_1$ dan di Pasar 2 adalah $P_2 = 80 - 2Q_2$. Biaya produksi total perusahaan memenuhi $TC(Q) = 20Q + 200$ dengan $Q = Q_1 + Q_2$. Tentukan total laba maksimum yang diperoleh monopolis tersebut!',
          answer: '$1850$',
          principle:
            'Monopolis yang melakukan diskriminasi harga derajat ketiga memaksimalkan laba dengan menyamakan penerimaan marjinal di setiap pasar terhadap biaya marjinal bersama ($MR_1 = MR_2 = MC$).',
          solution:
            'Dari fungsi biaya total $TC(Q) = 20Q + 200$, biaya marjinalnya konstan sebesar $MC = 20$.\n1. **Pasar 1:** $TR_1 = (100 - Q_1)Q_1 = 100Q_1 - Q_1^2 \\implies MR_1 = 100 - 2Q_1$.\nSyarat optimal $MR_1 = MC$:\n$$100 - 2Q_1 = 20 \\implies 2Q_1 = 80 \\implies Q_1^* = 40, \\qquad P_1^* = 100 - 40 = 60.$$\nPenerimaan di Pasar 1: $TR_1 = 60 \\times 40 = 2.400$.\n\n2. **Pasar 2:** $TR_2 = (80 - 2Q_2)Q_2 = 80Q_2 - 2Q_2^2 \\implies MR_2 = 80 - 4Q_2$.\nSyarat optimal $MR_2 = MC$:\n$$80 - 4Q_2 = 20 \\implies 4Q_2 = 60 \\implies Q_2^* = 15, \\qquad P_2^* = 80 - 2(15) = 50.$$\nPenerimaan di Pasar 2: $TR_2 = 50 \\times 15 = 750$.\n\n3. **Total Laba Maksimum:**\nTotal output $Q^* = Q_1^* + Q_2^* = 40 + 15 = 55$, sehingga:\n$$TR_{\\text{tot}} = 2.400 + 750 = 3.150, \\qquad TC = 20(55) + 200 = 1.100 + 200 = 1.300.$$\n$$\\pi_{\\text{maks}} = TR_{\\text{tot}} - TC = 3.150 - 1.300 = 1.850.$$',
          rubric: R2
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Suatu perekonomian tertutup (angka dalam triliun rupiah) dimodelkan oleh fungsi konsumsi $C = 150 + 0{,}8Y_d$, pajak proporsional $T = 50 + 0{,}25Y$ dengan $Y_d = Y - T$, investasi $I = 250$, dan pengeluaran pemerintah $G = 200$. Apabila PDB potensial perekonomian tersebut adalah $Y_p = 1.650$ triliun rupiah, berapakah tambahan pengeluaran pemerintah ($\\Delta G$, dalam triliun rupiah) yang diperlukan agar pendapatan nasional keseimbangan tepat mencapai PDB potensial?',
          answer: '$100$',
          principle:
            'Pada perekonomian tertutup dengan pajak proporsional $T = T_0 + tY$, angka pengganda pengeluaran pemerintah adalah $k_G = \\frac{1}{1 - c(1 - t)}$, sehingga $\\Delta Y = k_G \\cdot \\Delta G$.',
          solution:
            '1. **Hitung pendapatan nasional keseimbangan awal ($Y^*$):**\nSubstitusikan $Y_d = Y - (50 + 0{,}25Y) = 0{,}75Y - 50$ ke fungsi konsumsi:\n$$C = 150 + 0{,}8(0{,}75Y - 50) = 150 + 0{,}6Y - 40 = 110 + 0{,}6Y.$$\nDari keseimbangan $Y = C + I + G$:\n$$Y = (110 + 0{,}6Y) + 250 + 200 = 560 + 0{,}6Y \\implies 0{,}4Y = 560 \\implies Y^* = 1.400\\text{ triliun rupiah}.$$\n\n2. **Hitung angka pengganda fiskal dan $\\Delta G$:**\n$$k_G = \\frac{1}{1 - c(1 - t)} = \\frac{1}{1 - 0{,}8(1 - 0{,}25)} = \\frac{1}{1 - 0{,}6} = \\frac{1}{0{,}4} = 2{,}5.$$\nKesenjangan output yang harus ditutup adalah $\\Delta Y = Y_p - Y^* = 1.650 - 1.400 = 250$ triliun rupiah, sehingga:\n$$\\Delta G = \\frac{\\Delta Y}{k_G} = \\frac{250}{2{,}5} = 100\\text{ triliun rupiah}.$$',
          rubric: R2
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Data persediaan dan transaksi barang dagang sebuah perusahaan ritel selama satu tahun buku (dalam juta rupiah) tercatat sebagai berikut: persediaan barang dagang awal $45$, pembelian kotor $220$, beban angkut pembelian $12$, retur pembelian $15$, potongan pembelian $7$, persediaan barang dagang akhir $55$, dan penjualan bersih $310$. Hitunglah besarnya Harga Pokok Penjualan (HPP) perusahaan tersebut (dalam juta rupiah)!',
          answer: '$200$',
          principle:
            'Harga Pokok Penjualan dihitung melalui $\\text{Pembelian Bersih} = \\text{Pembelian Kotor} + \\text{Beban Angkut Pembelian} - \\text{Retur} - \\text{Potongan}$, lalu $\\text{HPP} = \\text{Persediaan Awal} + \\text{Pembelian Bersih} - \\text{Persediaan Akhir}$.',
          solution:
            '1. **Hitung Pembelian Bersih:**\n$$\\text{Pembelian Bersih} = 220 + 12 - 15 - 7 = 210\\text{ juta rupiah}.$$\n2. **Hitung Barang Tersedia untuk Dijual (BTUD):**\n$$\\text{BTUD} = \\text{Persediaan Awal} + \\text{Pembelian Bersih} = 45 + 210 = 255\\text{ juta rupiah}.$$\n3. **Hitung Harga Pokok Penjualan (HPP):**\n$$\\text{HPP} = \\text{BTUD} - \\text{Persediaan Akhir} = 255 - 55 = 200\\text{ juta rupiah}.$$\n(Catatan: data penjualan bersih sebesar $310$ juta rupiah digunakan apabila diminta menghitung laba kotor sebesar $310 - 200 = 110$ juta rupiah, bukan untuk menghitung HPP.)',
          rubric: R2
        }
      ]
    }
  ]
};
