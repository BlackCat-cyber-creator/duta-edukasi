/**
 * Paket Soal Terstruktur: KSM-K Kimia Terintegrasi MA 2022 (3 soal pilihan ganda teks-lengkap terverifikasi)
 * Sumber: scraped_raw/ksm-kimia-ma-2022.md (16 butir soal KSM-K Kimia MA 2022 dari urip.info: #1, #4, #5, #8, #11, #12, #13, #14, #16, #17, #18, #19, #20, #22, #23, #27).
 * 13 soal dilewati: 12 soal bergantung pada gambar/tabel/grafik/skema/struktur yang tidak termuat pada arsip (#1, #4, #5, #8, #12, #13, #14, #16, #17, #18, #19, #20) serta 1 soal berbahasa Inggris yang juga bergantung pada gambar skema (#22).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'ksm-kim-ma-2022',
  slug: 'ksm-kimia-ma-2022',
  subject: 'olimpiade-kim',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'KSM Kabupaten/Kota Kimia Terintegrasi MA 2022',
  relatedChapterIds: [
    'kimia10-bab3-ikatan-kimia-dan-bentuk-molekul',
    'kimia11-bab4-kesetimbangan-kimia',
    'kimia11-bab5-asam-basa-buffer-dan-hidrolisis',
    'kimia12-bab3-kimia-unsur',
    'kimia12-bab4-senyawa-karbon-dan-makromolekul'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'KSM',
  title: 'KSM-K Kimia Terintegrasi MA 2022',
  totalMarks: 3,
  instructions:
    'Kerjakan seluruh 3 soal pilihan ganda berikut (masing-masing bernilai 1 poin; total 3 poin). Dari 16 soal yang terarsip pada naskah KSM-K Kimia Terintegrasi MA 2022 (nomor asli: 1, 4, 5, 8, 11, 12, 13, 14, 16, 17, 18, 19, 20, 22, 23, dan 27), dimuat 3 soal teks-lengkap terverifikasi (nomor asli: 11, 23, dan 27; pada nomor 23 rumus struktur asli terwakili secara lengkap oleh nama senyawa gliseril stearopalmitooleat). Sebanyak 13 soal dilewati: 12 soal berbahasa Indonesia karena bergantung pada gambar struktur, diagram sel/distilasi, grafik, atau tabel data yang tidak tersedia pada arsip teks (nomor 1, 4, 5, 8, 12, 13, 14, 16, 17, 18, 19, dan 20) serta 1 soal berbahasa Inggris yang juga bergantung pada skema gambar (nomor 22).',
  source: {
    org: 'Kementerian Agama RI — Kompetisi Sains Madrasah (KSM)',
    file: 'scraped_raw/ksm-kimia-ma-2022.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 3,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (3 soal pilihan ganda terintegrasi, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Dalam Al-Qur\'an surat Ar-Rum ayat 41, Allah telah memperingatkan bahwa manusia akan merasakan akibat dari kerusakan yang telah diperbuatnya di muka bumi:\n\nظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ لِيُذِيقَهُمْ بَعْضَ الَّذِي عَمِلُوا لَعَلَّهُمْ يَرْجِعُونَ\n\nSalah satu dampak nyata emisi gas $\\mathrm{CO_2}$ dan $\\mathrm{SO_2}$ adalah pencemaran udara, pemanasan global, dan hujan asam. Berikut adalah pernyataan mengenai gas $\\mathrm{CO_2}$ dan $\\mathrm{SO_2}$:\n1. Deposisi asam gas $\\mathrm{SO_2}$ lebih tinggi dibandingkan dengan gas $\\mathrm{CO_2}$.\n2. Dampak dari emisi gas $\\mathrm{CO_2}$ dan $\\mathrm{SO_2}$ dalam ayat ditunjukkan dengan kalimat الْفَسَادُ.\n3. Atom karbon pada senyawa $\\mathrm{CO_2}$ memiliki hibridisasi $sp$.\n4. Potongan ayat di bawah ini selaras dengan ayat pada wacana:\nقَالُوْٓا اَتَجْعَلُ فِيْهَا مَنْ يُّفْسِدُ فِيْهَا وَيَسْفِكُ الدِّمَاۤءَۚ\n5. Senyawa $\\mathrm{CO_2}$ dan $\\mathrm{SO_2}$ memiliki bentuk molekul yang sama.\n\nPernyataan yang benar adalah ....\n\nA. 1, 2 dan 3\nB. 2, 3 dan 5\nC. 1, 2 dan 5\nD. 1, 4 dan 5',
          answer: 'A. 1, 2 dan 3',
          principle:
            'Keasaman oksida nonlogam di atmosfer ditentukan oleh kekuatan asam okso yang terbentuk, sedangkan hibridisasi dan bentuk molekul ditentukan oleh jumlah domain elektron ikatan dan pasangan elektron bebas (PEB) di sekitar atom pusat (teori VSEPR).',
          solution:
            'Evaluasi setiap pernyataan satu per satu:\n- **Pernyataan 1 (Benar):** Di atmosfer dan air hujan, $\\mathrm{SO_2}$ larut membentuk asam sulfit ($\\mathrm{H_2SO_3}$, $K_{a1} \\sim 10^{-2}$) dan mudah teroksidasi lanjut menjadi asam sulfat ($\\mathrm{H_2SO_4}$, asam kuat), sedangkan $\\mathrm{CO_2}$ hanya membentuk asam karbonat lemah ($\\mathrm{H_2CO_3}$, $K_{a1} \\sim 10^{-7}$). Oleh karena itu, kontribusi deposisi asam oleh gas $\\mathrm{SO_2}$ jauh lebih tinggi dibandingkan gas $\\mathrm{CO_2}$.\n- **Pernyataan 2 (Benar):** Dalam QS. Ar-Rum ayat 41, kata الْفَسَادُ (*al-fasad*) bermakna kerusakan yang tampak di darat dan di laut akibat perbuatan manusia, yang selaras dengan dampak kerusakan lingkungan oleh emisi $\\mathrm{CO_2}$ dan $\\mathrm{SO_2}$.\n- **Pernyataan 3 (Benar):** Struktur Lewis $\\mathrm{CO_2}$ adalah $\\mathrm{O=C=O}$. Atom pusat $\\mathrm{C}$ ($4$ elektron valensi) membentuk dua ikatan rangkap dengan dua atom $\\mathrm{O}$ dan tidak memiliki pasangan elektron bebas ($0$ PEB), sehingga memiliki $2$ domain elektron (bilangan sterik $2$) yang berhibridisasi $sp$.\n- **Pernyataan 4 (Salah):** Potongan ayat قَالُوْٓا اَتَجْعَلُ فِيْهَا مَنْ يُّفْسِدُ فِيْهَا وَيَسْفِكُ الدِّمَاۤءَۚ (QS. Al-Baqarah ayat 30) merupakan dialog pertanyaan para malaikat ketika Allah hendak menciptakan manusia sebagai khalifah di bumi, bukan ayat peringatan tentang manusia yang merasakan akibat kerusakan lingkungan yang telah diperbuatnya agar mereka kembali ke jalan yang benar.\n- **Pernyataan 5 (Salah):** Pada $\\mathrm{CO_2}$ ($2$ domain ikatan, $0$ PEB), geometri molekulnya **linear** ($180^\\circ$). Sebaliknya, atom pusat $\\mathrm{S}$ ($6$ elektron valensi) pada $\\mathrm{SO_2}$ memiliki $2$ domain ikatan ke atom $\\mathrm{O}$ dan $1$ PEB (hibridisasi $sp^2$), sehingga bentuk molekulnya **bengkok / huruf V** (sudut ikatan $< 120^\\circ$). Jadi bentuk molekul keduanya berbeda.\n\nDengan demikian, pernyataan yang benar adalah 1, 2, dan 3.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Reaksi hidrolisis dari senyawa gliseril stearopalmitooleat akan menghasilkan senyawa berikut, kecuali ....\n\nA. $\\mathrm{H_3C(CH_2)_{16}COOH}$\nB. $\\mathrm{HOCH_2CH(OH)CH_2OH}$\nC. $\\mathrm{H_3C(CH_2)_7CH=CH(CH_2)_7CH_2OH}$\nD. $\\mathrm{H_3CCH_2(CH_2)_{13}COOH}$',
          answer: 'C. $\\mathrm{H_3C(CH_2)_7CH=CH(CH_2)_7CH_2OH}$',
          principle:
            'Hidrolisis trigliserida (triester gliserol dan tiga asam lemak) memutus ketiga ikatan ester menjadi gliserol ($1\\text{ mol}$) dan tiga asam karboksilat rantai panjang (asam lemak), bukan alkohol rantai panjang.',
          solution:
            'Senyawa **gliseril stearopalmitooleat** merupakan trigliserida campuran yang terbentuk melalui reaksi esterifikasi antara satu molekul gliserol dan tiga jenis asam lemak: asam stearat, asam palmitat, dan asam oleat.\nSecara umum, reaksi hidrolisis sempurna trigliserida adalah:\n$$\\mathrm{R_1COO-CH_2-CH(OOCR_2)-CH_2-OOCR_3} + 3\\mathrm{H_2O} \\longrightarrow \\mathrm{HOCH_2CH(OH)CH_2OH} + \\mathrm{R_1COOH} + \\mathrm{R_2COOH} + \\mathrm{R_3COOH}.$$\nIdentifikasi produk hidrolisis gliseril stearopalmitooleat:\n- **Gliserol** ($\\mathrm{HOCH_2CH(OH)CH_2OH}$) $\\to$ sesuai dengan opsi **B**.\n- **Asam stearat** (asam oktadekanoat, jenuh $\\mathrm{C_{18}}$): $\\mathrm{H_3C(CH_2)_{16}COOH}$ ($1 + 16 + 1 = 18$ atom $\\mathrm{C}$) $\\to$ sesuai dengan opsi **A**.\n- **Asam palmitat** (asam heksadekanoat, jenuh $\\mathrm{C_{16}}$): $\\mathrm{CH_3(CH_2)_{14}COOH} \\equiv \\mathrm{H_3CCH_2(CH_2)_{13}COOH}$ ($1 + 1 + 13 + 1 = 16$ atom $\\mathrm{C}$) $\\to$ sesuai dengan opsi **D**.\n- **Asam oleat** (asam *cis*-9-oktadekenoat, tak jenuh tunggal $\\mathrm{C_{18}}$): $\\mathrm{H_3C(CH_2)_7CH=CH(CH_2)_7COOH}$, yang memiliki gugus karboksil ($-\\mathrm{COOH}$).\n\nOpsi **C**, yakni $\\mathrm{H_3C(CH_2)_7CH=CH(CH_2)_7CH_2OH}$ (oleil alkohol), memiliki gugus alkohol primer ($-\\mathrm{CH_2OH}$), bukan gugus asam karboksilat ($-\\mathrm{COOH}$), sehingga **tidak** dihasilkan pada hidrolisis trigliserida tersebut.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Nabi Muhammad SAW memerintahkan kepada umatnya untuk berobat ketika sakit asalkan bukan dari benda haram:\n\nإِنَّ اللَّهَ أَنْزَلَ الدَّاءَ وَالدَّوَاءَ وَجَعَلَ لِكُلِّ دَاءٍ دَوَاءً فَتَدَاوَوْا وَلاَ تَدَاوَوْا بِحَرَامٍ\n\nMagnesium hidroksida merupakan salah satu antasida yang telah diuji kehalalannya. Nilai hasil kali kelarutan dari magnesium hidroksida adalah $1{,}2 \\times 10^{-11}$. Dari pernyataan berikut:\n1. Magnesium hidroksida dapat larut maksimum pada $\\mathrm{pH}\\;11$.\n2. Kalimat الدَّوَاءَ merupakan jamak taksir.\n3. Penambahan larutan alkali dapat meningkatkan kelarutan magnesium hidroksida.\n4. Kalimat تَدَاوَوْا merupakan fi\'il amar.\n5. Penambahan ion $\\mathrm{H^+}$ dapat meningkatkan kelarutan magnesium hidroksida.\n\nPernyataan yang benar adalah ....\n\nA. 1, 2 dan 3\nB. 2 dan 5\nC. 1, 3 dan 4\nD. 4 dan 5',
          answer: 'D. 4 dan 5',
          principle:
            'Kesetimbangan kelarutan basa sukar larut $\\mathrm{Mg(OH)_2}(s) \\rightleftharpoons \\mathrm{Mg^{2+}}(aq) + 2\\mathrm{OH^-}(aq)$ bergeser sesuai asas Le Chatelier: penambahan $\\mathrm{OH^-}$ (ion senama) menurunkan kelarutan, sedangkan penambahan $\\mathrm{H^+}$ menetralkan $\\mathrm{OH^-}$ dan meningkatkan kelarutan.',
          solution:
            'Analisis kesetimbangan kimia dan kaidah bahasa Arab pada pernyataan 1–5:\n- **Pernyataan 1 (Salah):** Kesetimbangan pelarutan $\\mathrm{Mg(OH)_2}$ dalam air murni adalah:\n$$\\mathrm{Mg(OH)_2}(s) \\rightleftharpoons \\mathrm{Mg^{2+}}(aq) + 2\\mathrm{OH^-}(aq).$$\nJika kelarutan molarnya dalam air murni adalah $s$, maka $[\\mathrm{Mg^{2+}}] = s$ dan $[\\mathrm{OH^-}] = 2s$, sehingga:\n$$K_{sp} = [\\mathrm{Mg^{2+}}][\\mathrm{OH^-}]^2 = s(2s)^2 = 4s^3 = 1{,}2 \\times 10^{-11} = 12 \\times 10^{-12} \\implies s^3 = 3 \\times 10^{-12} \\implies s = \\sqrt[3]{3} \\times 10^{-4}\\text{ M}.$$\nKarena $1{,}4^3 = 2{,}744 < 3 < 3{,}375 = 1{,}5^3$, maka $1{,}4 < \\sqrt[3]{3} < 1{,}5$ dan $[\\mathrm{OH^-}] = 2s = 2\\sqrt[3]{3} \\times 10^{-4}\\text{ M}$. Diperoleh juga batas eksak $(2\\sqrt[3]{3})^6 = 64 \\times 9 = 576 < 1000 = (\\sqrt{10})^6$, sehingga $1 < 2\\sqrt[3]{3} < 10^{1/2}$ dan:\n$$0 < \\log_{10}(2\\sqrt[3]{3}) < \\frac{1}{2} \\implies 3{,}5 < \\mathrm{pOH} = 4 - \\log_{10}(2\\sqrt[3]{3}) < 4 \\implies 10 < \\mathrm{pH} < 10{,}5.$$\nPada $\\mathrm{pH} = 11$, konsentrasi basa justru lebih tinggi ($[\\mathrm{OH^-}] = 10^{-3}\\text{ M}$) sehingga kelarutannya turun menjadi $s\' = \\frac{K_{sp}}{[\\mathrm{OH^-}]^2} = \\frac{1{,}2 \\times 10^{-11}}{(10^{-3})^2} = 1{,}2 \\times 10^{-5}\\text{ M} < s$. Selain itu, kelarutan $\\mathrm{Mg(OH)_2}$ justru jauh lebih besar pada $\\mathrm{pH}$ asam (rendah), bukan maksimum pada $\\mathrm{pH}\\;11$.\n- **Pernyataan 2 (Salah):** Kata الدَّوَاءَ (bentuk tunggal dari دَوَاءٌ, artinya "obat") adalah *isim mufrad*, bukan *jamak taksir*. Bentuk jamak taksirnya adalah أَدْوِيَةٌ.\n- **Pernyataan 3 (Salah):** Larutan alkali menyumbang ion $\\mathrm{OH^-}$ (ion senama). Berdasarkan asas Le Chatelier, kenaikan $[\\mathrm{OH^-}]$ menggeser kesetimbangan pelarutan ke kiri membentuk endapan $\\mathrm{Mg(OH)_2}$, sehingga menurunkan kelarutannya.\n- **Pernyataan 4 (Benar):** Pada kalimat فَتَدَاوَوْا ("maka berobatlah kalian"), kata تَدَاوَوْا merupakan *fi\'il amar* (kata kerja perintah) dari pola تَفَاعَلَ untuk subjek jamak orang kedua (أَنْتُمْ / kalian).\n- **Pernyataan 5 (Benar):** Ion $\\mathrm{H^+}$ bereaksi dengan ion $\\mathrm{OH^-}$ membentuk air ($\\mathrm{H^+}(aq) + \\mathrm{OH^-}(aq) \\to \\mathrm{H_2O}(l)$), sehingga menurunkan $[\\mathrm{OH^-}]$. Akibatnya kesetimbangan pelarutan $\\mathrm{Mg(OH)_2}$ bergeser ke kanan dan kelarutannya meningkat.\n\nJadi, pernyataan yang benar adalah 4 dan 5.',
          rubric: OK
        }
      ]
    }
  ]
};
