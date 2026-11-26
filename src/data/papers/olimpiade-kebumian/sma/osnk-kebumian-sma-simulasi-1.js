/**
 * Paket Soal Terstruktur: Simulasi OSN-K Kebumian SMA — Paket 1 (15 soal pilihan ganda)
 * Sumber: Kurasi materi asli Tim Akademik Duta e-dukasi (batch 9).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-kebumian-sma-simulasi-1',
  slug: 'osnk-kebumian-sma-simulasi-1',
  subject: 'olimpiade-kebumian',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic:
    'Simulasi OSN-K Kebumian SMA: geologi dan stratigrafi, tektonik lempeng dan seismologi, meteorologi, oseanografi, serta planetologi',
  relatedChapterIds: [
    'ipa10-bab5-pemanasan-global-dan-fisika-iklim',
    'ipa11-bab4-fluida-statis-dan-dinamis',
    'ipa11-bab5-getaran-gelombang-dan-bunyi',
    'ipa12-bab6-fisika-modern-radioaktivitas-dan-digital'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'Simulasi OSN-K Kebumian SMA \u2014 Paket 1',
  totalMarks: 15,
  instructions:
    'Kerjakan seluruh 15 soal pilihan ganda berikut dengan memilih satu jawaban yang paling tepat (A, B, C, D, atau E). Setiap jawaban benar bernilai 1 poin (total 15 poin). Gunakan tetapan fisis standar yang tercantum pada masing-masing soal apabila diperlukan dalam perhitungan.',
  source: {
    org: 'Tim Akademik Duta e-dukasi',
    file: 'original-curated-batch-9',
    license: 'Hak cipta materi kurasi asli Duta e-dukasi'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 15,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (15 soal pilihan ganda, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Sebuah sampel mineral transparan hingga translusen ditemukan pada urat hidrotermal. Saat diuji sifat fisiknya di laboratorium, mineral tersebut: (i) tidak dapat digores oleh uang logam tembaga (kekerasan Mohs $3{,}5$), (ii) dapat digores oleh pisau baja (kekerasan Mohs $5{,}5$), (iii) memiliki empat arah belahan sempurna yang dapat membentuk fragmen oktahedral, dan (iv) memiliki rumus kimia $\\mathrm{CaF_2}$. Mineral yang dimaksud beserta nilai kekerasannya pada skala Mohs adalah ....\n\nA. Kalsit ($3$)\nB. Fluorit ($4$)\nC. Apatit ($5$)\nD. Ortoklas ($6$)\nE. Kuarsa ($7$)',
          answer: 'B. Fluorit ($4$)',
          principle:
            'Identifikasi mineral berdasarkan uji gores skala Mohs ($3{,}5 < H < 5{,}5$), sistem belahan khas (empat arah oktahedral), dan komposisi kimia halida.',
          solution:
            'Dari uji gores skala Mohs, mineral tidak tergores uang logam tembaga ($3{,}5$) tetapi tergores pisau baja ($5{,}5$), sehingga kekerasannya berada pada rentang $3{,}5 < H < 5{,}5$. Dari pilihan yang tersedia:\n- Kalsit ($3$) lebih lunak dari uang logam tembaga dan memiliki $3$ arah belahan rombohedral ($\\mathrm{CaCO_3}$).\n- Ortoklas ($6$) dan kuarsa ($7$) lebih keras daripada pisau baja ($5{,}5$).\n- Apatit ($5$) memiliki komposisi fosfat ($\\mathrm{Ca_5(PO_4)_3(F,Cl,OH)}$) dengan belahan buruk pada bidang basal.\n- Fluorit memiliki kekerasan standar $4$ pada skala Mohs, empat arah belahan sempurna (membentuk oktahedron), dan rumus kimia kalsium fluorida $\\mathrm{CaF_2}$.\nJadi jawaban yang tepat adalah **B. Fluorit ($4$)**.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Dua sampel batuan beku $X$ dan $Y$ berasal dari magma induk yang sama tetapi membeku pada kedalaman yang berbeda. Sampel $X$ bertekstur faneritik dengan komposisi mineral dominan berupa kuarsa ($28\\%$), ortoklas ($35\\%$), plagioklas natrium ($25\\%$), serta sedikit biotit dan muskovit ($12\\%$). Sampel $Y$ memiliki komposisi kimia dan mineralogi yang ekuivalen dengan $X$, tetapi bertekstur afanitik karena membeku cepat di permukaan sebagai lava kental. Pasangan nama batuan $X$ dan $Y$ serta kategori kandungan silika ($\\mathrm{SiO_2}$) yang benar adalah ....\n\nA. Granit dan riolit; $\\mathrm{SiO_2} > 63\\%$ (felsik)\nB. Diorit dan andesit; $\\mathrm{SiO_2}$ antara $52\\%$–$63\\%$ (intermediet)\nC. Gabro dan basal; $\\mathrm{SiO_2}$ antara $45\\%$–$52\\%$ (mafik)\nD. Peridotit dan komatiit; $\\mathrm{SiO_2} < 45\\%$ (ultramafik)\nE. Granodiorit dan dasit; $\\mathrm{SiO_2} < 52\\%$ (mafik)',
          answer: 'A. Granit dan riolit; $\\mathrm{SiO_2} > 63\\%$ (felsik)',
          principle:
            'Klasifikasi batuan beku ditentukan secara bersama oleh tekstur (laju pendinginan: faneritik plutonik vs. afanitik vulkanik) dan komposisi mineral/silika (deret reaksi Bowen cabang akhir bersifat felsik).',
          solution:
            'Dominasi mineral kuarsa ($28\\%$), K-feldspar/ortoklas ($35\\%$), dan plagioklas kaya natrium ($25\\%$) dengan sedikit mineral feromagnesian menunjukkan batuan beku bersifat **felsik** (asam) yang kaya silika ($\\mathrm{SiO_2} > 63\\%$, umumnya $65\\%$–$75\\%$).\n- Batuan beku felsik bertekstur **faneritik** (berbutir kasar karena pendinginan lambat di dalam kerak/plutonik) disebut **granit** ($X$).\n- Ekuivalennya yang bertekstur **afanitik** (berbutir sangat halus karena pendinginan cepat di permukaan/ekstrusif) disebut **riolit** ($Y$).\nOleh karena itu, pasangan yang tepat adalah **A. Granit dan riolit; $\\mathrm{SiO_2} > 63\\%$ (felsik)**.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Pada zona subduksi, lempeng samudra yang dingin menunjam dengan cepat sehingga mengalami gradien geotermal yang sangat rendah ($< 10\\,^\\circ\\mathrm{C/km}$). Akibatnya, batuan mengalami tekanan sangat tinggi ($0{,}8$–$1{,}5\\text{ GPa}$) pada suhu yang relatif rendah ($200$–$450\\,^\\circ\\mathrm{C}$). Kondisi metamorfisme regional ini menghasilkan batuan metamorf berfoliasi yang dicirikan oleh mineral indeks amfibol kaya natrium bernama glaukofan ($\\mathrm{Na_2(Mg_3Al_2)Si_8O_{22}(OH)_2}$) bersama lawsonit. Fasies metamorf yang terbentuk pada kondisi tersebut adalah ....\n\nA. Fasies sekis hijau (*greenschist*)\nB. Fasies sekis biru (*blueschist*)\nC. Fasies amfibolit (*amphibolite*)\nD. Fasies granulit (*granulite*)\nE. Fasies hornfels (*hornfels*)',
          answer: 'B. Fasies sekis biru (*blueschist*)',
          principle:
            'Fasies metamorf mencerminkan rezim tekanan ($P$) dan suhu ($T$) tertentu; rezim tekanan tinggi–suhu rendah (*HP/LT*) khas zona subduksi menghasilkan fasies sekis biru.',
          solution:
            'Setiap fasies metamorf memiliki himpunan mineral indeks serta rentang $P$–$T$ diagnostik:\n- **Fasies sekis biru (*blueschist*)** terbentuk pada rezim tekanan tinggi dan suhu rendah (*high pressure–low temperature*, khas palung dan prisma akresi zona subduksi) dengan mineral indeks utama **glaukofan** (berwarna biru keunguan) dan **lawsonit**.\n- Sekis hijau terbentuk pada $P$ dan $T$ menengah–rendah (klorit, aktinolit, epidot); amfibolit pada $T$ menengah–tinggi (hornblenda); granulit pada $T$ sangat tinggi; sedangkan hornfels adalah metamorfisme kontak pada tekanan rendah tanpa foliasi.\nJadi fasies yang terbentuk adalah **B. Fasies sekis biru (*blueschist*)**.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Pada suatu singkapan tebing sungai, teramati urutan lapisan batuan sedimen yang relatif mendatar dari bawah ke atas: batupasir $A$, serpih $B$, dan batugamping $C$. Ketiga lapisan tersebut terpotong oleh sebuah retas (*dike*) batuan beku $D$. Di atas bidang erosi yang memotong $C$ dan $D$, terendapkan lapisan konglomerat $E$ yang di dalamnya ditemukan fragmen-fragmen batugamping $C$ dan batuan beku $D$. Terakhir, sebuah sesar normal $F$ memotong seluruh perlapisan mulai dari $A$ hingga $E$. Urutan kronologi kejadian geologi dari yang paling tua ke paling muda adalah ....\n\nA. $A \\rightarrow B \\rightarrow C \\rightarrow E \\rightarrow D \\rightarrow F$\nB. $C \\rightarrow B \\rightarrow A \\rightarrow D \\rightarrow E \\rightarrow F$\nC. $A \\rightarrow B \\rightarrow C \\rightarrow D \\rightarrow \\text{erosi} \\rightarrow E \\rightarrow F$\nD. $D \\rightarrow A \\rightarrow B \\rightarrow C \\rightarrow \\text{erosi} \\rightarrow E \\rightarrow F$\nE. $A \\rightarrow B \\rightarrow C \\rightarrow F \\rightarrow D \\rightarrow \\text{erosi} \\rightarrow E$',
          answer: 'C. $A \\rightarrow B \\rightarrow C \\rightarrow D \\rightarrow \\text{erosi} \\rightarrow E \\rightarrow F$',
          principle:
            'Prinsip stratigrafi Steno (superposisi dan kemenerusan lateral), hukum pemotongan (*cross-cutting relationships*), serta hukum inklusi (*law of inclusions*).',
          solution:
            'Berdasarkan prinsip-prinsip penentuan umur relatif:\n1. **Hukum Superposisi**: Pada lapisan sedimen yang belum terbalik, lapisan paling bawah adalah yang tertua, sehingga pengendapan berlangsung berurutan dari $A \\rightarrow B \\rightarrow C$.\n2. **Hukum Pemotongan (*Cross-Cutting*)**: Retas $D$ memotong $A$, $B$, dan $C$, maka $D$ lebih muda daripada $C$.\n3. **Ketidakselarasan dan Hukum Inklusi**: Bidang erosi memotong $C$ dan $D$, lalu konglomerat $E$ mengendap di atasnya sambil mengandung fragmen $C$ dan $D$. Artinya proses erosi terjadi setelah $D$ membeku dan sebelum $E$ diendapkan.\n4. **Hukum Pemotongan**: Sesar normal $F$ memotong seluruh lapisan hingga $E$, sehingga $F$ adalah kejadian termuda.\nDengan demikian, urutan dari tertua ke termuda adalah **C. $A \\rightarrow B \\rightarrow C \\rightarrow D \\rightarrow \\text{erosi} \\rightarrow E \\rightarrow F$**.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Sebuah kristal zirkon di dalam batuan granit dianalisis dengan metode penanggalan radiometrik $^{238}\\mathrm{U}$–$^{206}\\mathrm{Pb}$ yang memiliki waktu paruh $t_{1/2} = 4{,}47 \\times 10^9\\text{ tahun}$. Pengukuran spektrometri massa menunjukkan seluruh $^{206}\\mathrm{Pb}$ berasal dari peluruhan $^{238}\\mathrm{U}$ (kandungan awal $^{206}\\mathrm{Pb}$ diabaikan) dengan rasio jumlah atom anak terhadap induk saat ini $N_{\\text{anak}}/N_{\\text{induk}} = 0{,}15$. Umur kristalisasi granit tersebut paling mendekati .... (Diketahui $\\ln(1{,}15) \\approx 0{,}13976$ dan $\\ln 2 \\approx 0{,}69315$)\n\nA. $625\\text{ juta tahun}$\nB. $742\\text{ juta tahun}$\nC. $815\\text{ juta tahun}$\nD. $901\\text{ juta tahun}$\nE. $1{,}04\\text{ miliar tahun}$',
          answer: 'D. $901\\text{ juta tahun}$',
          principle:
            'Hukum peluruhan radioaktif untuk sistem tertutup tanpa isotop anak awal: $N_{\\text{anak}}/N_{\\text{induk}} = e^{\\lambda t} - 1$, dengan konstanta peluruhan $\\lambda = \\frac{\\ln 2}{t_{1/2}}$.',
          solution:
            'Jumlah atom induk mula-mula adalah $N_0 = N_{\\text{induk}} + N_{\\text{anak}}$. Dari persamaan peluruhan $N_{\\text{induk}} = N_0 e^{-\\lambda t}$, diperoleh:\n$$\\frac{N_0}{N_{\\text{induk}}} = 1 + \\frac{N_{\\text{anak}}}{N_{\\text{induk}}} = e^{\\lambda t} \\implies t = \\frac{1}{\\lambda}\\ln\\left(1 + \\frac{N_{\\text{anak}}}{N_{\\text{induk}}}\\right) = \\frac{t_{1/2}}{\\ln 2}\\ln\\left(1 + \\frac{N_{\\text{anak}}}{N_{\\text{induk}}}\\right).$$\nSubstitusikan $t_{1/2} = 4{,}47 \\times 10^9\\text{ tahun}$ dan $N_{\\text{anak}}/N_{\\text{induk}} = 0{,}15$:\n$$t = \\frac{4{,}47 \\times 10^9}{0{,}69315} \\times \\ln(1{,}15) = \\frac{4{,}47 \\times 10^9 \\times 0{,}13976}{0{,}69315} \\approx 9{,}013 \\times 10^8\\text{ tahun} \\approx 901\\text{ juta tahun}.$$\nJadi jawabannya adalah **D. $901\\text{ juta tahun}$**.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Sebuah stasiun seismograf mencatat kedatangan gelombang primer ($P$) dari suatu gempa bumi dangkal pada pukul $08:14:20$ WIB dan gelombang sekunder ($S$) pada pukul $08:15:10$ WIB. Jika kecepatan rata-rata rambat gelombang $P$ di kerak bumi pada lintasan tersebut adalah $v_P = 6{,}0\\text{ km/s}$ dan kecepatan gelombang $S$ adalah $v_S = 3{,}5\\text{ km/s}$, maka jarak episentrum gempa dari stasiun seismograf tersebut adalah ....\n\nA. $175\\text{ km}$\nB. $300\\text{ km}$\nC. $420\\text{ km}$\nD. $480\\text{ km}$\nE. $525\\text{ km}$',
          answer: 'C. $420\\text{ km}$',
          principle:
            'Selisih waktu tiba gelombang $S$ dan $P$ sebanding dengan jarak sumber gempa: $\\Delta t = d\\left(\\frac{1}{v_S} - \\frac{1}{v_P}\\right)$.',
          solution:
            'Selisih waktu tiba antara gelombang $S$ dan gelombang $P$ adalah:\n$$\\Delta t = t_S - t_P = (08:15:10) - (08:14:20) = 50\\text{ s}.$$\nDengan menganggap gelombang $P$ dan $S$ merambat pada lintasan yang sama sepanjang jarak $d$:\n$$\\Delta t = \\frac{d}{v_S} - \\frac{d}{v_P} = d\\left(\\frac{v_P - v_S}{v_P v_S}\\right) \\implies d = \\frac{\\Delta t \\cdot v_P v_S}{v_P - v_S}.$$\nSubstitusikan nilai yang diketahui:\n$$d = \\frac{50 \\times 6{,}0 \\times 3{,}5}{6{,}0 - 3{,}5} = \\frac{50 \\times 21{,}0}{2{,}5} = 20 \\times 21{,}0 = 420\\text{ km}.$$\nJadi jarak episentrumnya adalah **C. $420\\text{ km}$**.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Dua gempa bumi tektonik terjadi pada segmen sesar yang sama. Gempa pertama memiliki magnitudo momen $M_w = 5{,}0$, sedangkan gempa kedua memiliki magnitudo momen $M_w = 7{,}0$. Dengan menggunakan hubungan empiris Gutenberg–Richter $\\log_{10} E = 4{,}8 + 1{,}5 M_w$ (dengan $E$ energi seismik dalam joule) dan skala magnitudo berbasis logaritma amplitudo gelombang ($\\Delta M = \\log_{10}(A_2/A_1)$), perbandingan amplitudo gelombang seismik maksimum dan perbandingan energi yang dilepaskan antara gempa kedua terhadap gempa pertama berturut-turut adalah ....\n\nA. $2\\text{ kali}$ dan $3\\text{ kali}$\nB. $20\\text{ kali}$ dan $300\\text{ kali}$\nC. $100\\text{ kali}$ dan $1000\\text{ kali}$\nD. $100\\text{ kali}$ dan $10000\\text{ kali}$\nE. $1000\\text{ kali}$ dan $100\\text{ kali}$',
          answer: 'C. $100\\text{ kali}$ dan $1000\\text{ kali}$',
          principle:
            'Skala magnitudo gempa bersifat logaritmik basis $10$: kenaikan $1$ satuan magnitudo setara dengan kenaikan $10$ kali amplitudo gelombang dan $10^{1{,}5} \\approx 31{,}6$ kali energi seismik.',
          solution:
            'Selisih magnitudo kedua gempa adalah $\\Delta M = 7{,}0 - 5{,}0 = 2{,}0$.\n1. **Perbandingan amplitudo**:\n$$\\log_{10}\\left(\\frac{A_2}{A_1}\\right) = \\Delta M = 2{,}0 \\implies \\frac{A_2}{A_1} = 10^{2{,}0} = 100\\text{ kali}.$$\n2. **Perbandingan energi seismik**:\n$$\\log_{10}\\left(\\frac{E_2}{E_1}\\right) = \\log_{10} E_2 - \\log_{10} E_1 = 1{,}5(M_{w2} - M_{w1}) = 1{,}5 \\times 2{,}0 = 3{,}0 \\implies \\frac{E_2}{E_1} = 10^{3{,}0} = 1000\\text{ kali}.$$\nJadi jawabannya adalah **C. $100\\text{ kali}$ dan $1000\\text{ kali}$**.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Suatu lempeng samudra bergerak ke arah barat laut dengan laju konstan melewati sebuah titik panas (*hotspot* / *mantle plume*) yang relatif stasioner di bawahnya sehingga membentuk deretan pulau vulkanik. Gunung api $P$ berjarak $420\\text{ km}$ di sebelah barat laut dari gunung api aktif saat ini $Q$ (umur $0\\text{ tahun}$). Jika hasil penanggalan radiometrik batuan basal tertua pada tahap perisai di gunung api $P$ adalah $6{,}0\\text{ juta tahun}$, kecepatan rata-rata pergerakan lempeng samudra tersebut dalam satuan $\\text{cm/tahun}$ adalah ....\n\nA. $4{,}2\\text{ cm/tahun}$\nB. $7{,}0\\text{ cm/tahun}$\nC. $14{,}0\\text{ cm/tahun}$\nD. $25{,}2\\text{ cm/tahun}$\nE. $70{,}0\\text{ cm/tahun}$',
          answer: 'B. $7{,}0\\text{ cm/tahun}$',
          principle:
            'Jejak gunung api *hotspot* merekam arah dan kecepatan gerak absolut lempeng litosfer terhadap mantel dalam melalui hubungan $v = d / t$.',
          solution:
            'Konversikan jarak $d = 420\\text{ km}$ ke sentimeter:\n$$d = 420\\text{ km} = 420 \\times 10^3\\text{ m} = 420 \\times 10^5\\text{ cm} = 4{,}2 \\times 10^7\\text{ cm}.$$\nSelang waktu pergerakan dari lokasi titik panas $Q$ ke posisi $P$ adalah $t = 6{,}0 \\times 10^6\\text{ tahun}$.\nMaka kecepatan rata-rata lempeng samudra adalah:\n$$v = \\frac{d}{t} = \\frac{4{,}2 \\times 10^7\\text{ cm}}{6{,}0 \\times 10^6\\text{ tahun}} = 7{,}0\\text{ cm/tahun}.$$\nJadi jawabannya adalah **B. $7{,}0\\text{ cm/tahun}$**.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Massa udara lembap bersuhu $28{,}0\\,^\\circ\\mathrm{C}$ dengan suhu titik embun $16{,}0\\,^\\circ\\mathrm{C}$ pada ketinggian permukaan laut ($0\\text{ m}$ dpl) dipaksa naik melewati pegunungan setinggi $3{,}5\\text{ km}$ di sisi hadap angin (*windward*), lalu turun menuruni sisi bayangan hujan (*leeward*) kembali ke ketinggian $0\\text{ m}$ dpl. Diketahui laju penurunan suhu adiabatik kering (DALR) $= 10\\,^\\circ\\mathrm{C/km}$, laju penurunan suhu titik embun $= 2\\,^\\circ\\mathrm{C/km}$, dan laju penurunan suhu adiabatik basah (MALR) $= 6\\,^\\circ\\mathrm{C/km}$. Jika seluruh uap air hasil kondensasi jatuh sebagai presipitasi di sisi *windward*, maka suhu massa udara tersebut ketika tiba kembali di ketinggian $0\\text{ m}$ dpl di sisi *leeward* adalah ....\n\nA. $24{,}0\\,^\\circ\\mathrm{C}$\nB. $28{,}0\\,^\\circ\\mathrm{C}$\nC. $31{,}0\\,^\\circ\\mathrm{C}$\nD. $34{,}0\\,^\\circ\\mathrm{C}$\nE. $36{,}0\\,^\\circ\\mathrm{C}$',
          answer: 'E. $36{,}0\\,^\\circ\\mathrm{C}$',
          principle:
            'Efek Foehn: parsel udara naik mengikuti DALR hingga paras kondensasi terangkat (LCL), kemudian mengikuti MALR hingga puncak gunung sambil melepas kalor laten, dan turun kering mengikuti DALR.',
          solution:
            '1. **Tentukan ketinggian paras kondensasi terangkat ($h_{\\text{LCL}}$)**:\nParsel udara mengalami penurunan suhu $10\\,^\\circ\\mathrm{C/km}$, sedangkan titik embun turun $2\\,^\\circ\\mathrm{C/km}$, sehingga jarak keduanya menyempit sebesar $10 - 2 = 8\\,^\\circ\\mathrm{C/km}$. Dari selisih awal $T_0 - T_{d0} = 28{,}0 - 16{,}0 = 12{,}0\\,^\\circ\\mathrm{C}$:\n$$h_{\\text{LCL}} = \\frac{12{,}0}{8} = 1{,}5\\text{ km}.$$\nSuhu udara saat mencapai LCL:\n$$T_{\\text{LCL}} = 28{,}0 - 10 \\times 1{,}5 = 13{,}0\\,^\\circ\\mathrm{C}.$$\n2. **Kenaikan dari LCL ($1{,}5\\text{ km}$) ke puncak ($3{,}5\\text{ km}$)** dengan $\\Delta h = 2{,}0\\text{ km}$ mengikuti MALR ($6\\,^\\circ\\mathrm{C/km}$):\n$$T_{\\text{puncak}} = 13{,}0 - 6 \\times 2{,}0 = 1{,}0\\,^\\circ\\mathrm{C}.$$\n3. **Penurunan di sisi *leeward* dari $3{,}5\\text{ km}$ ke $0\\text{ km}$** berlangsung secara adiabatik kering (DALR $= 10\\,^\\circ\\mathrm{C/km}$):\n$$T_{\\text{leeward}} = 1{,}0 + 10 \\times 3{,}5 = 36{,}0\\,^\\circ\\mathrm{C}.$$\nJadi jawabannya adalah **E. $36{,}0\\,^\\circ\\mathrm{C}$**.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Pada suatu sistem tekanan rendah (*low-pressure system*) yang berkembang di perairan terbuka pada lintang $15^\\circ\\text{ LS}$ (belahan bumi selatan), dalam pendekatan kesetimbangan geostrofik maupun aliran spiral ke dalam akibat sedikit gesekan permukaan, arah pembelokan gerak angin oleh gaya Coriolis serta arah putaran sirkulasi angin mengelilingi pusat tekanan rendah tersebut bila diamati dari atas adalah ....\n\nA. Dibelokkan ke kanan arah gerak; sirkulasi berlawanan arah jarum jam\nB. Dibelokkan ke kanan arah gerak; sirkulasi searah jarum jam\nC. Dibelokkan ke kiri arah gerak; sirkulasi searah jarum jam\nD. Dibelokkan ke kiri arah gerak; sirkulasi berlawanan arah jarum jam\nE. Tidak mengalami pembelokan Coriolis; bergerak radial lurus menuju pusat tekanan rendah',
          answer: 'C. Dibelokkan ke kiri arah gerak; sirkulasi searah jarum jam',
          principle:
            'Gaya semu Coriolis ($\\vec{F}_C = -2m\\vec{\\Omega} \\times \\vec{v}$) membelokkan aliran angin ke kanan di belahan bumi utara (BBU) dan ke kiri di belahan bumi selatan (BBS).',
          solution:
            'Di belahan bumi selatan ($15^\\circ\\text{ LS}$), vektor rotasi Bumi mengarah sedemikian rupa sehingga gaya Coriolis membelokkan setiap aliran fluida yang bergerak ke **kiri** arah geraknya. Ketika udara tertarik dari wilayah bertekanan tinggi di sekelilingnya menuju pusat tekanan rendah oleh gaya gradien tekanan, setiap lintasan yang mengarah ke pusat selalu dibelokkan ke kiri. Akibatnya, udara berputar mengelilingi pusat tekanan rendah membentuk sirkulasi siklonik yang **searah jarum jam** (*clockwise*) bila dilihat dari atas.\nJadi jawabannya adalah **C. Dibelokkan ke kiri arah gerak; sirkulasi searah jarum jam**.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Dengan pendekatan atmosfer isotermal bersuhu rata-rata $T = 275\\text{ K}$, tekanan udara di permukaan laut $P_0 = 1013\\text{ hPa}$, massa molar rata-rata udara kering $M = 0{,}02897\\text{ kg/mol}$, percepatan gravitasi $g = 9{,}81\\text{ m/s}^2$, dan konstanta gas universal $R = 8{,}314\\text{ J/(mol}\\cdot\\text{K)}$, ketinggian skala (*scale height*) $H = \\frac{RT}{Mg}$ dan tekanan udara pada puncak gunung setinggi $z = 4{,}0\\text{ km}$ menurut persamaan barometrik $P(z) = P_0 e^{-z/H}$ berturut-turut paling mendekati ....\n\nA. $H \\approx 6{,}42\\text{ km}$ dan $P \\approx 543\\text{ hPa}$\nB. $H \\approx 7{,}25\\text{ km}$ dan $P \\approx 584\\text{ hPa}$\nC. $H \\approx 8{,}04\\text{ km}$ dan $P \\approx 616\\text{ hPa}$\nD. $H \\approx 8{,}85\\text{ km}$ dan $P \\approx 645\\text{ hPa}$\nE. $H \\approx 9{,}60\\text{ km}$ dan $P \\approx 668\\text{ hPa}$',
          answer: 'C. $H \\approx 8{,}04\\text{ km}$ dan $P \\approx 616\\text{ hPa}$',
          principle:
            'Integrasi persamaan hidrostatik $\\frac{dP}{dz} = -\\rho g$ bersama persamaan gas ideal $P = \\frac{\\rho R T}{M}$ pada suhu konstan menghasilkan peluruhan tekanan eksponensial dengan skala ketinggian $H = \\frac{RT}{Mg}$.',
          solution:
            'Hitung ketinggian skala $H$ terlebih dahulu:\n$$H = \\frac{R T}{M g} = \\frac{8{,}314 \\times 275}{0{,}02897 \\times 9{,}81} = \\frac{2286{,}35}{0{,}2841957} \\approx 8045\\text{ m} \\approx 8{,}04\\text{ km}.$$\nSelanjutnya hitung tekanan udara pada ketinggian $z = 4{,}0\\text{ km} = 4000\\text{ m}$:\n$$P(4{,}0\\text{ km}) = P_0\\exp\\left(-\\frac{z}{H}\\right) = 1013 \\times \\exp\\left(-\\frac{4{,}0}{8{,}045}\\right) = 1013 \\times e^{-0{,}4972} \\approx 1013 \\times 0{,}6082 \\approx 616\\text{ hPa}.$$\nJadi jawabannya adalah **C. $H \\approx 8{,}04\\text{ km}$ dan $P \\approx 616\\text{ hPa}$**.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Sampel air laut dari Laut Banda dianalisis dan diketahui memiliki nilai klorinitas (*chlorinity*, $Cl$) sebesar $19{,}20$‰ (gram per kilogram air laut). Dengan menggunakan hubungan empiris prinsip perbandingan tetap Forchhammer/Knudsen $S(\\text{permil}) = 1{,}80655 \\times Cl(\\text{permil})$ serta mengetahui bahwa ion natrium ($\\mathrm{Na^+}$) menyumbang $30{,}61\\%$ dari total massa garam terlarut, salinitas sampel air laut tersebut dan massa ion $\\mathrm{Na^+}$ di dalam $2{,}0\\text{ kg}$ air laut tersebut berturut-turut paling mendekati ....\n\nA. $32{,}45$‰ dan $19{,}87\\text{ g}$\nB. $34{,}69$‰ dan $10{,}62\\text{ g}$\nC. $34{,}69$‰ dan $21{,}23\\text{ g}$\nD. $35{,}12$‰ dan $21{,}50\\text{ g}$\nE. $36{,}20$‰ dan $22{,}16\\text{ g}$',
          answer: 'C. $34{,}69$‰ dan $21{,}23\\text{ g}$',
          principle:
            'Hukum Perbandingan Tetap (Forchhammer): meskipun salinitas total air laut bervariasi secara geografis, perbandingan relatif antar-ion utama terlarut di samudra terbuka hampir konstan sehingga salinitas dapat ditentukan dari klorinitas.',
          solution:
            '1. **Menghitung salinitas ($S$)**:\n$$S = 1{,}80655 \\times Cl = 1{,}80655 \\times 19{,}20 = 34{,}68576\\text{ g/kg} \\approx 34{,}69\\text{ permil}.$$\n2. **Menghitung massa garam total dan massa ion $\\mathrm{Na^+}$ dalam $2{,}0\\text{ kg}$ air laut**:\n$$m_{\\text{garam}} = 2{,}0\\text{ kg} \\times 34{,}68576\\text{ g/kg} = 69{,}3715\\text{ g}.$$\n$$m_{\\mathrm{Na^+}} = 30{,}61\\% \\times 69{,}3715\\text{ g} = 0{,}3061 \\times 69{,}3715 \\approx 21{,}23\\text{ g}.$$\nJadi jawabannya adalah **C. $34{,}69$‰ dan $21{,}23\\text{ g}$**.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Seorang pengamat oseanografi mencatat tunggang pasang (*tidal range*, selisih tinggi muka air pasang tertinggi dan surut terendah) di sebuah pelabuhan bertipe semidiurnal. Pada tanggal $1$ Maret yang bertepatan dengan fase Bulan Baru (*New Moon*), tunggang pasang tercatat sebesar $3{,}4\\text{ m}$. Sekitar tujuh hari kemudian, Bulan memasuki fase Kuartir Pertama (*First Quarter*). Fenomena pasang surut yang terjadi pada fase Kuartir Pertama tersebut beserta kondisi tunggang pasangnya adalah ....\n\nA. Pasang purnama (*spring tide*); tunggang pasang membesar menjadi $> 3{,}4\\text{ m}$ karena posisi Matahari–Bumi–Bulan membentuk sudut $90^\\circ$\nB. Pasang perbani (*neap tide*); tunggang pasang mengecil ($< 3{,}4\\text{ m}$) karena gaya pembangkit pasang surut Matahari dan Bulan saling tegak lurus pada sudut $90^\\circ$\nC. Pasang perbani (*neap tide*); tunggang pasang tetap $3{,}4\\text{ m}$ karena pengaruh gaya gravitasi Matahari dapat diabaikan terhadap Bulan\nD. Pasang purnama (*spring tide*); tunggang pasang sama dengan $3{,}4\\text{ m}$ karena Bulan berada pada jarak perige\nE. Pasang harian tunggal (*diurnal tide*); muka air laut tidak mengalami surut selama $24\\text{ jam}$',
          answer:
            'B. Pasang perbani (*neap tide*); tunggang pasang mengecil ($< 3{,}4\\text{ m}$) karena gaya pembangkit pasang surut Matahari dan Bulan saling tegak lurus pada sudut $90^\\circ$',
          principle:
            'Interferensi gaya pembangkit pasang surut Bulan dan Matahari: konjungsi/oposisi ($0^\\circ$ atau $180^\\circ$) menghasilkan interferensi konstruktif (*spring tide*), sedangkan kuadratur ($90^\\circ$) menghasilkan interferensi destruktif (*neap tide*).',
          solution:
            'Pada fase Bulan Baru ($1$ Maret), posisi Matahari–Bumi–Bulan segaris (konjungsi), sehingga tonjolan pasang akibat Matahari dan Bulan saling menguatkan menghasilkan **pasang purnama** (*spring tide*) dengan tunggang pasang maksimum ($3{,}4\\text{ m}$).\nTujuh hari kemudian pada fase Kuartir Pertama, sistem Matahari–Bumi–Bulan berada pada konfigurasi **kuadratur** (membentuk sudut $90^\\circ$). Akibatnya, pasang tinggi akibat Matahari berimpit dengan surut akibat Bulan sehingga saling melemahkan dan menghasilkan **pasang perbani** (*neap tide*) dengan tunggang pasang minimum ($< 3{,}4\\text{ m}$; secara teoretis dengan rasio gaya pasang surut Matahari/Bulan $\\approx 0{,}46$, tunggang pasangnya turun menjadi sekitar $\\frac{1 - 0{,}46}{1 + 0{,}46} \\times 3{,}4 \\approx 1{,}26\\text{ m}$).\nJadi jawabannya adalah **B**.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Di kawasan Atlantik Utara dekat Greenland dan Laut Norwegia, air permukaan yang hangat dan asin dari Arus Teluk (*Gulf Stream*) mengalami pendinginan intensif oleh udara kutub serta penambahan garam sisa saat pembekuan es laut (*brine rejection*), sehingga membentuk massa air *North Atlantic Deep Water* (NADW). Pernyataan yang paling tepat mengenai mekanisme dan peran utama sirkulasi termohalin global (*global conveyor belt*) yang dipicu oleh proses ini adalah ....\n\nA. Air permukaan menjadi kurang padat dan menyebar di permukaan ekuator tanpa pernah tenggelam ke dasar samudra\nB. Peningkatan densitas akibat suhu rendah dan salinitas tinggi menyebabkan air tenggelam (*downwelling*) ke dasar samudra, lalu mengalir menuju samudra lain sebelum naik perlahan (*upwelling*) sambil mendistribusikan kalor dan oksigen terlarut\nC. Sirkulasi digerakkan semata-mata oleh gaya gesek angin pasat tanpa dipengaruhi perbedaan suhu ataupun salinitas\nD. Pembentukan NADW menyebabkan seluruh dasar Samudra Atlantik menjadi anoksik (kehabisan oksigen) karena tidak ada pertukaran air permukaan\nE. Proses *brine rejection* menurunkan salinitas air laut di sekitarnya sehingga mencegah terbentuknya lapisan air dalam',
          answer:
            'B. Peningkatan densitas akibat suhu rendah dan salinitas tinggi menyebabkan air tenggelam (*downwelling*) ke dasar samudra, lalu mengalir menuju samudra lain sebelum naik perlahan (*upwelling*) sambil mendistribusikan kalor dan oksigen terlarut',
          principle:
            'Densitas air laut meningkat seiring penurunan suhu dan peningkatan salinitas; gradien densitas ini menggerakkan sirkulasi termohalin global yang menghubungkan laut permukaan dan laut dalam.',
          solution:
            'Pendinginan di lintang tinggi menurunkan suhu air, sedangkan proses pembekuan es laut mengeluarkan garam (*brine rejection*) ke air di bawahnya sehingga salinitas meningkat. Kombinasi **suhu rendah** dan **salinitas tinggi** membuat densitas air permukaan melampaui massa air di bawahnya, memicu penenggelaman massa air (*downwelling*) membentuk **NADW**. Massa air dalam yang kaya oksigen ini mengalir ke selatan menuju Samudra Selatan, lalu bercabang ke Samudra Hindia dan Pasifik sebelum akhirnya mengalami *upwelling* secara bertahap. Sirkulasi ini berperan krusial dalam mengatur iklim global (transportasi kalor) serta memasok oksigen dan nutrien di kolom laut dalam.\nJadi jawaban yang tepat adalah **B**.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Dalam kajian geologi keplanetan, planet kerdil Ceres di sabuk asteroid memiliki jari-jari rata-rata $R_C = 470\\text{ km}$, massa $M_C = 9{,}38 \\times 10^{20}\\text{ kg}$, dan setengah sumbu panjang orbit mengelilingi Matahari $a = 2{,}77\\text{ SA}$ (satuan astronomi). Jika dibandingkan dengan densitas rata-rata Bumi ($\\bar{\\rho}_{\\text{Bumi}} \\approx 5{,}51\\text{ g/cm}^3$), nilai densitas rata-rata Ceres ($\\bar{\\rho}_C$), interpretasi komposisi internalnya, serta periode orbit Ceres menurut Hukum Kepler III ($T^2 = a^3$) berturut-turut paling mendekati ....\n\nA. $1{,}08\\text{ g/cm}^3$; tersusun seluruhnya dari gas hidrogen; $T \\approx 2{,}77\\text{ tahun}$\nB. $2{,}16\\text{ g/cm}^3$; campuran batuan silikat dan es air dalam proporsi signifikan; $T \\approx 4{,}61\\text{ tahun}$\nC. $2{,}16\\text{ g/cm}^3$; inti besi-nikel murni tanpa es air; $T \\approx 7{,}67\\text{ tahun}$\nD. $3{,}93\\text{ g/cm}^3$; didominasi batuan silikat kering seperti Mars; $T \\approx 4{,}61\\text{ tahun}$\nE. $5{,}42\\text{ g/cm}^3$; identik dengan komposisi planet terestrial bagian dalam; $T \\approx 11{,}86\\text{ tahun}$',
          answer:
            'B. $2{,}16\\text{ g/cm}^3$; campuran batuan silikat dan es air dalam proporsi signifikan; $T \\approx 4{,}61\\text{ tahun}$',
          principle:
            'Densitas rata-rata benda langit $\\bar{\\rho} = \\frac{M}{\\frac{4}{3}\\pi R^3}$ mencerminkan proporsi material penyusunnya (logam/batuan vs. es), sedangkan periode orbit heliosentrik memenuhi Hukum Kepler III ($T_{\\text{tahun}}^2 = a_{\\text{SA}}^3$).',
          solution:
            '1. **Menghitung volume dan densitas rata-rata Ceres**:\nDengan $R_C = 470\\text{ km} = 4{,}70 \\times 10^5\\text{ m}$:\n$$V_C = \\frac{4}{3}\\pi R_C^3 = \\frac{4}{3}\\pi (4{,}70 \\times 10^5\\text{ m})^3 \\approx 4{,}349 \\times 10^{17}\\text{ m}^3.$$\n$$\\bar{\\rho}_C = \\frac{M_C}{V_C} = \\frac{9{,}38 \\times 10^{20}\\text{ kg}}{4{,}349 \\times 10^{17}\\text{ m}^3} \\approx 2157\\text{ kg/m}^3 \\approx 2{,}16\\text{ g/cm}^3.$$\nDensitas sekitar $2{,}16\\text{ g/cm}^3$ jauh lebih rendah daripada batuan silikat murni ($\\sim 3{,}0$–$3{,}5\\text{ g/cm}^3$) maupun planet terestrial berinti besi seperti Bumi ($5{,}51\\text{ g/cm}^3$), yang mengindikasikan bahwa Ceres tersusun atas **campuran batuan silikat dan es air** (serta mineral terhidrasi) dalam proporsi yang signifikan.\n2. **Menghitung periode orbit dengan Hukum Kepler III**:\n$$T = a^{3/2} = (2{,}77)^{3/2} = \\sqrt{2{,}77^3} = \\sqrt{21{,}254} \\approx 4{,}61\\text{ tahun}.$$\nJadi jawaban yang tepat adalah **B**.',
          rubric: OK
        }
      ]
    }
  ]
};
