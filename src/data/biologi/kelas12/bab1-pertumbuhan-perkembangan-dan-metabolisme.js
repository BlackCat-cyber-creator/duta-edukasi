import { bab, dasar, sedang, tantangan } from '../author.js';

export default bab({
  grade: 12,
  number: 1,
  slug: 'pertumbuhan-perkembangan-dan-metabolisme',
  title: 'Pertumbuhan, Enzim, Katabolisme, dan Anabolisme',
  element: 'Pemahaman Biologi: fitohormon, sifat dan kinetika enzim, respirasi aerob (glikolisis-Krebs-transpor elektron), fermentasi, serta reaksi terang-gelap fotosintesis',
  summary: {
    overview: 'Metabolisme adalah seluruh reaksi kimia di dalam sel yang mencakup katabolisme (pemecahan senyawa kompleks untuk menghasilkan energi) dan anabolisme (penyusunan senyawa kompleks yang memerlukan energi). Bab ini membahas fitohormon pengatur pertumbuhan tumbuhan, sifat dan kinetika enzim, tahap respirasi aerob dari glikolisis sampai transpor elektron, fermentasi, reaksi terang dan siklus Calvin pada fotosintesis, serta kemosintesis dan perhitungan kuantitatif ATP, kuosien respirasi, dan laju enzim.',
    coreConcepts: [
      'Fitohormon dan Pertumbuhan Tumbuhan: Auksin memicu pemanjangan sel, fototropisme, dan dominansi apikal. Giberelin memicu perkecambahan dan pemanjangan batang. Sitokinin memicu pembelahan sel dan menunda penuaan daun. Etilen mempercepat pematangan buah dan gugurnya daun. Asam absisat menyebabkan dormansi biji dan penutupan stomata saat kekeringan.',
      'Sifat Enzim: Enzim adalah biokatalis protein yang menurunkan energi aktivasi, bersifat spesifik (kunci-gembok dan kecocokan induksi), dan tidak habis dalam reaksi. Aktivitasnya dipengaruhi suhu (suhu terlalu tinggi menyebabkan denaturasi), pH, konsentrasi substrat dan enzim, serta inhibitor. Inhibitor kompetitif bersaing dengan substrat pada sisi aktif, sedangkan inhibitor nonkompetitif mengikat sisi lain dan mengubah bentuk enzim.',
      'Respirasi Aerob: Glikolisis di sitosol memecah satu glukosa menjadi dua piruvat dengan hasil bersih 2 ATP dan 2 NADH. Dekarboksilasi oksidatif dan siklus Krebs di matriks mitokondria menghasilkan CO₂, NADH, FADH₂, dan sedikit ATP. Transpor elektron dan fosforilasi oksidatif pada membran dalam mitokondria memakai O₂ sebagai akseptor elektron akhir, menghasilkan H₂O dan sekitar 26-28 ATP, sehingga total sekitar 30-32 ATP per glukosa.',
      'Fermentasi: Dalam kondisi tanpa oksigen, piruvat diubah menjadi etanol dan CO₂ (fermentasi alkohol pada ragi) atau asam laktat (fermentasi asam laktat pada otot dan Lactobacillus). Hasil bersih hanya 2 ATP dari glikolisis, sedangkan tahap lanjutan meregenerasi NAD⁺ agar glikolisis berlanjut.',
      'Fotosintesis: Reaksi terang di membran tilakoid menggunakan cahaya untuk fotolisis air (menghasilkan O₂, proton, dan elektron) serta membentuk ATP dan NADPH. Siklus Calvin di stroma memakai ATP dan NADPH untuk memfiksasi CO₂ dengan bantuan RuBisCO menjadi gula (G3P). Tumbuhan C4 dan CAM memiliki adaptasi untuk mengurangi fotorespirasi di lingkungan panas dan kering.',
      'Kemosintesis dan Hubungan Metabolisme: Bakteri kemosintetik (nitrifikasi, belerang, besi) memperoleh energi dari oksidasi senyawa anorganik untuk mensintesis karbohidrat. Hasil fotosintesis (glukosa dan O₂) menjadi bahan baku respirasi, sedangkan hasil respirasi (CO₂ dan H₂O) menjadi bahan baku fotosintesis sehingga keduanya saling melengkapi.'
    ],
    keyFormulas: [
      { label: 'Respirasi Aerob', formula: '\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{energi}\\ (\\approx 30\\text{-}32\\ \\text{ATP})' },
      { label: 'Fotosintesis', formula: '6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{cahaya}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2' },
      { label: 'Fermentasi Alkohol', formula: '\\text{C}_6\\text{H}_{12}\\text{O}_6 \\longrightarrow 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2 + 2\\text{ATP}' },
      { label: 'Kinetika Michaelis-Menten', formula: 'v = \\dfrac{V_{\\max}\\,[S]}{K_m + [S]}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung laju reaksi enzimatik',
        problem: 'Suatu enzim memiliki Vmax = 100 µmol/menit dan Km = 2 mM. Hitung laju reaksi pada konsentrasi substrat 2 mM dan 18 mM.',
        solution: 'Untuk [S] = 2 mM: v = 100 × 2 / (2 + 2) = 50 µmol/menit (setengah Vmax karena [S] = Km). Untuk [S] = 18 mM: v = 100 × 18 / (2 + 18) = 90 µmol/menit, mendekati Vmax.'
      },
      {
        title: 'Menentukan kuosien respirasi (RQ)',
        problem: 'Biji berlemak yang berkecambah melepaskan 7 mL CO₂ dan menyerap 10 mL O₂. Hitung RQ dan tentukan substrat respirasinya.',
        solution: 'RQ = CO₂ dilepas / O₂ dipakai = 7 / 10 = 0,7. Nilai RQ sekitar 0,7 menunjukkan lemak sebagai substrat (karbohidrat memberi RQ = 1, protein sekitar 0,8-0,9).'
      },
      {
        title: 'Menghitung kebutuhan ATP dan NADPH pada siklus Calvin',
        problem: 'Berapa ATP dan NADPH yang diperlukan untuk membentuk 2 molekul glukosa, jika satu glukosa memerlukan 18 ATP dan 12 NADPH?',
        solution: 'Untuk 2 glukosa: ATP = 2 × 18 = 36 dan NADPH = 2 × 12 = 24. Kebutuhan ini dipenuhi oleh hasil reaksi terang.'
      }
    ],
    misconceptions: [
      'Mengira enzim habis setelah satu reaksi. Enzim tidak ikut berubah pada akhir reaksi sehingga dapat dipakai berulang kali sampai rusak atau didenaturasi.',
      'Menganggap seluruh respirasi aerob berlangsung di mitokondria. Glikolisis berlangsung di sitosol; hanya tahap berikutnya yang berlangsung di mitokondria.',
      'Mengira O₂ hasil fotosintesis berasal dari CO₂. Oksigen berasal dari fotolisis air pada reaksi terang.',
      'Menganggap fermentasi tidak menghasilkan ATP. Fermentasi menghasilkan 2 ATP dari glikolisis, tetapi jauh lebih sedikit daripada respirasi aerob.'
    ],
    tutorTip: 'Untuk soal fotosintesis dan respirasi, tulis tiga hal pada tiap tahap: lokasi, masukan, dan hasil. Untuk soal enzim, gambar grafik: laju naik dengan suhu sampai optimum lalu turun tajam, dan laju jenuh (Vmax) pada konsentrasi substrat tinggi.'
  },
  questions: [
    dasar(
      'Hormon tumbuhan yang memicu pemanjangan sel dan mengarahkan fototropisme adalah...',
      ['auksin', 'etilen', 'sitokinin', 'asam absisat'],
      'A',
      'Hormon ini bergerak ke sisi yang tidak terkena cahaya.',
      'Auksin menyebabkan pemanjangan sel pada sisi yang tidak terkena cahaya sehingga batang melengkung ke arah cahaya (fototropisme). Etilen mematangkan buah, sitokinin memicu pembelahan sel.'
    ),
    dasar(
      'Hormon tumbuhan berwujud gas yang mempercepat pematangan buah adalah...',
      ['giberelin', 'etilen', 'auksin', 'sitokinin'],
      'B',
      'Buah matang dapat mematangkan buah mentah di dekatnya.',
      'Etilen adalah hormon gas yang mempercepat pematangan buah dan gugurnya daun. Giberelin memicu pemanjangan dan perkecambahan.'
    ),
    dasar(
      'Cara kerja enzim dalam mempercepat reaksi kimia adalah dengan...',
      ['meningkatkan energi aktivasi reaksi', 'mengubah arah reaksi menjadi tidak dapat balik', 'menurunkan energi aktivasi reaksi', 'bereaksi lalu habis terpakai'],
      'C',
      'Enzim tidak mengubah hasil akhir reaksi, hanya laju tercapainya.',
      'Enzim menurunkan energi aktivasi sehingga reaksi berlangsung lebih cepat. Enzim tidak habis terpakai dan tidak mengubah kesetimbangan reaksi.'
    ),
    dasar(
      'Glikolisis pada sel eukariotik berlangsung di...',
      ['matriks mitokondria', 'membran dalam mitokondria', 'stroma kloroplas', 'sitosol'],
      'D',
      'Tahap ini tidak memerlukan organel dan tidak memerlukan oksigen.',
      'Glikolisis berlangsung di sitosol dan tidak membutuhkan oksigen. Siklus Krebs berlangsung di matriks mitokondria, transpor elektron di membran dalam mitokondria.'
    ),
    dasar(
      'Akseptor elektron terakhir pada rantai transpor elektron respirasi aerob adalah...',
      ['NAD⁺', 'oksigen', 'karbon dioksida', 'piruvat'],
      'B',
      'Zat ini bergabung dengan proton membentuk air.',
      'Oksigen menerima elektron dan proton pada akhir rantai transpor elektron membentuk H₂O. Tanpa oksigen rantai tersebut terhenti.'
    ),
    sedang(
      'Hasil fotolisis air pada reaksi terang fotosintesis adalah...',
      ['glukosa dan karbon dioksida', 'ribulosa bisfosfat (RuBP)', 'ATP saja', 'elektron, proton (H⁺), dan oksigen'],
      'D',
      'Fotolisis berarti pemecahan air oleh cahaya.',
      'Cahaya memecah H₂O menjadi elektron (mengisi pusat reaksi), proton (membentuk gradien H⁺ untuk ATP), dan O₂ yang dilepaskan.'
    ),
    sedang(
      'Fermentasi alkohol oleh ragi menghasilkan...',
      ['asam laktat dan 2 ATP', 'etanol dan oksigen', 'etanol, CO₂, dan 2 ATP', 'air, CO₂, dan sekitar 30 ATP'],
      'C',
      'Ragi memecah piruvat tanpa oksigen.',
      'Pada fermentasi alkohol piruvat diubah menjadi etanol dan CO₂, dengan ATP bersih 2 dari glikolisis. Asam laktat dihasilkan pada fermentasi asam laktat.'
    ),
    sedang(
      'Aktivitas enzim menurun drastis pada suhu jauh di atas suhu optimum karena...',
      ['struktur protein enzim terdenaturasi sehingga sisi aktif berubah bentuk', 'substrat habis lebih cepat', 'enzim larut sempurna dalam air', 'kofaktor terbentuk berlebihan'],
      'A',
      'Enzim adalah protein yang rentan panas.',
      'Suhu terlalu tinggi memutuskan ikatan lemah penentu struktur tiga dimensi enzim sehingga sisi aktif berubah dan enzim tidak mengikat substrat.'
    ),
    sedang(
      'Siklus Calvin berlangsung di...',
      ['membran tilakoid', 'stroma kloroplas', 'membran luar kloroplas', 'sitosol sel mesofil'],
      'B',
      'Bagian cairan kloroplas yang mengelilingi tilakoid.',
      'Siklus Calvin berlangsung di stroma, memakai ATP dan NADPH dari reaksi terang untuk memfiksasi CO₂. Reaksi terang berlangsung di membran tilakoid.'
    ),
    sedang(
      'Hormon tumbuhan yang memicu pembelahan sel dan menunda penuaan daun adalah...',
      ['auksin', 'etilen', 'sitokinin', 'asam absisat'],
      'C',
      'Hormon ini sering dipakai pada kultur jaringan bersama auksin.',
      'Sitokinin merangsang sitokinesis (pembelahan sel) dan menunda penuaan daun. Asam absisat justru memicu dormansi dan penutupan stomata.'
    ),
    tantangan(
      'Enzim memiliki Vmax = 100 µmol/menit dan Km = 2 mM. Laju reaksi pada [S] = 18 mM adalah...',
      ['50 µmol/menit', '75 µmol/menit', '82 µmol/menit', '90 µmol/menit'],
      'D',
      'Gunakan v = Vmax[S] / (Km + [S]).',
      'v = 100 × 18 / (2 + 18) = 1.800 / 20 = 90 µmol/menit, mendekati Vmax karena substrat melimpah.'
    ),
    tantangan(
      'Pernyataan yang benar mengenai inhibitor kompetitif adalah...',
      ['bersaing dengan substrat pada sisi aktif, dan efeknya dapat dikurangi dengan menaikkan konsentrasi substrat', 'mengikat sisi selain sisi aktif dan tidak dipengaruhi konsentrasi substrat', 'selalu menurunkan Vmax tanpa dapat dipulihkan', 'menaikkan energi aktivasi dengan mengubah suhu reaksi'],
      'A',
      'Kata kompetitif berarti bersaing dengan substrat.',
      'Inhibitor kompetitif memiliki bentuk mirip substrat dan menempati sisi aktif. Dengan menambah substrat, peluang substrat berikatan naik sehingga hambatan berkurang dan Vmax dapat tercapai kembali.'
    ),
    tantangan(
      'Biji yang berkecambah melepaskan 7 mL CO₂ dan menyerap 10 mL O₂. Nilai RQ dan substrat respirasi yang paling mungkin adalah...',
      ['1,43 dan substrat karbohidrat', '0,70 dan substrat karbohidrat', '0,70 dan substrat lemak', '1,43 dan substrat lemak'],
      'C',
      'RQ = CO₂ dilepas dibagi O₂ dipakai; karbohidrat memiliki RQ sekitar 1.',
      'RQ = 7 / 10 = 0,7. Lemak mengandung relatif sedikit oksigen sehingga memerlukan banyak O₂ per CO₂ dan menghasilkan RQ sekitar 0,7, sedangkan karbohidrat menghasilkan RQ = 1.'
    ),
    tantangan(
      'Anggap respirasi aerob menghasilkan 30 ATP per glukosa dan fermentasi 2 ATP per glukosa. Selisih ATP dari 5 mol glukosa yang diproses secara aerob dan fermentasi adalah...',
      ['150 ATP', '10 ATP', '160 ATP', '140 ATP'],
      'D',
      'Hitung selisih per glukosa terlebih dahulu.',
      'Selisih per glukosa = 30 - 2 = 28 ATP. Untuk 5 mol glukosa: 5 × 28 = 140 ATP.'
    ),
    tantangan(
      'Untuk menyintesis 2 molekul glukosa pada siklus Calvin (satu glukosa memerlukan 18 ATP dan 12 NADPH), jumlah ATP dan NADPH yang diperlukan adalah...',
      ['18 ATP dan 12 NADPH', '36 ATP dan 24 NADPH', '12 ATP dan 18 NADPH', '36 ATP dan 12 NADPH'],
      'B',
      'Kalikan kebutuhan satu glukosa dengan jumlah glukosa.',
      'Untuk 2 glukosa: ATP = 2 × 18 = 36 dan NADPH = 2 × 12 = 24.'
    )
  ]
});
