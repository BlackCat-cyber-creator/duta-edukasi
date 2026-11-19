import { bab, dasar, sedang, tantangan } from '../author.js';

export default bab({
  grade: 11,
  number: 5,
  slug: 'sistem-imun-dan-reproduksi',
  title: 'Sistem Pertahanan Tubuh dan Sistem Reproduksi',
  element: 'Pemahaman Biologi: imunitas nonspesifik dan spesifik (antibodi/limfosit), gametogenesis, siklus menstruasi, serta perkembangan embrio',
  summary: {
    overview: 'Sistem pertahanan tubuh melindungi manusia dari patogen, sedangkan sistem reproduksi menjamin kelangsungan spesies. Bab ini membahas imunitas nonspesifik dan spesifik (limfosit B dan T, antibodi, sel memori), jenis imunitas dan vaksinasi, gangguan imun, spermatogenesis dan oogenesis, siklus menstruasi dengan pengaturan hormonnya, fertilisasi, implantasi, perkembangan embrio, serta perhitungan ambang kekebalan kelompok dan hari ovulasi.',
    coreConcepts: [
      'Pertahanan Nonspesifik: Lini pertama meliputi kulit, lendir, silia saluran napas, lisozim pada air mata dan ludah, serta asam lambung. Lini kedua meliputi fagositosis oleh neutrofil dan makrofag, sel NK, reaksi radang (histamin memicu vasodilatasi), demam, interferon, dan protein komplemen. Pertahanan ini tidak membedakan jenis patogen dan tidak membentuk memori.',
      'Imunitas Spesifik: Respons dipicu antigen dan dilakukan limfosit. Limfosit B menghasilkan antibodi (imunitas humoral) melalui sel plasma dan sel memori. Limfosit T helper mengaktifkan sistem imun, sedangkan limfosit T sitotoksik membunuh sel terinfeksi (imunitas selular). Paparan kedua pada antigen yang sama menghasilkan respons lebih cepat dan kuat karena sel memori.',
      'Jenis Imunitas dan Gangguan Imun: Imunitas aktif alami diperoleh setelah sakit, aktif buatan melalui vaksin, pasif alami melalui antibodi ibu (plasenta dan ASI), dan pasif buatan melalui serum antibodi. Gangguan meliputi alergi (hipersensitivitas), penyakit autoimun (lupus, diabetes tipe 1), dan imunodefisiensi seperti AIDS akibat HIV yang menyerang limfosit T helper.',
      'Gametogenesis: Spermatogenesis di tubulus seminiferus menghasilkan empat sperma haploid dari satu spermatogonium. Oogenesis di ovarium menghasilkan satu ovum fungsional dan tiga badan polar dari satu oogonium; meiosis II ovum baru selesai setelah fertilisasi. FSH dan LH mengatur proses ini bersama testosteron, estrogen, dan progesteron.',
      'Siklus Menstruasi: Siklus rata-rata 28 hari terdiri atas fase menstruasi (peluruhan endometrium), fase folikuler (FSH memicu perkembangan folikel dan estrogen menebalkan endometrium), ovulasi sekitar hari ke-14 akibat lonjakan LH, serta fase luteal (korpus luteum menghasilkan progesteron yang mempertahankan endometrium).',
      'Fertilisasi dan Perkembangan Embrio: Fertilisasi terjadi di tuba falopi. Zigot membelah menjadi morula, blastosis, lalu menempel di endometrium (implantasi). Gastrulasi membentuk tiga lapisan lembaga: ektoderm (kulit, saraf), mesoderm (otot, tulang, jantung), dan endoderm (saluran cerna, paru). Plasenta menghasilkan hCG yang dideteksi pada tes kehamilan.'
    ],
    keyFormulas: [
      { label: 'Ambang Kekebalan Kelompok', formula: 'H = 1 - \\dfrac{1}{R_0}' },
      { label: 'Hari Ovulasi', formula: '\\text{hari ovulasi} \\approx \\text{panjang siklus} - 14' },
      { label: 'Hasil Gametogenesis', formula: '1\\ \\text{spermatogonium} \\to 4\\ \\text{sperma} \\qquad 1\\ \\text{oogonium} \\to 1\\ \\text{ovum} + 3\\ \\text{badan polar}' },
      { label: 'Jumlah Kromosom Gamet Manusia', formula: '2n = 46 \\xrightarrow{\\text{meiosis}} n = 23' }
    ],
    workedExamples: [
      {
        title: 'Menghitung ambang kekebalan kelompok',
        problem: 'Suatu penyakit memiliki bilangan reproduksi dasar R₀ = 4. Berapa persen populasi yang harus kebal agar penularan berhenti?',
        solution: 'H = 1 - 1/R₀ = 1 - 1/4 = 0,75 sehingga minimal 75 persen populasi harus kebal. Pada R₀ = 15 (campak), H = 1 - 1/15 ≈ 93 persen.'
      },
      {
        title: 'Memprediksi hari ovulasi',
        problem: 'Seorang wanita memiliki siklus menstruasi 30 hari. Kapan ovulasi terjadi jika hari pertama menstruasi dihitung hari ke-1?',
        solution: 'Fase luteal relatif tetap sekitar 14 hari sehingga ovulasi terjadi sekitar hari ke-(30 - 14) = hari ke-16.'
      },
      {
        title: 'Menghitung jumlah gamet',
        problem: 'Sebanyak 200 spermatogonium dan 200 oogonium menyelesaikan gametogenesis. Hitung jumlah sperma dan ovum yang terbentuk.',
        solution: 'Sperma = 200 × 4 = 800. Ovum = 200 × 1 = 200 (ditambah 600 badan polar yang tidak fungsional).'
      }
    ],
    misconceptions: [
      'Mengira vaksin mengandung antibodi. Vaksin mengandung antigen yang dilemahkan atau dimatikan sehingga tubuh sendiri membentuk antibodi dan sel memori.',
      'Menyamakan HIV dengan AIDS. HIV adalah virus penyebab, sedangkan AIDS adalah sindrom kekurangan kekebalan yang muncul setelah sel T helper menurun drastis.',
      'Menganggap fertilisasi terjadi di rahim. Fertilisasi berlangsung di tuba falopi, lalu zigot bergerak ke rahim untuk implantasi.',
      'Mengira satu oogonium menghasilkan empat ovum. Pembelahan sitoplasma tidak seimbang sehingga hanya satu ovum fungsional terbentuk bersama tiga badan polar kecil.'
    ],
    tutorTip: 'Untuk soal gametogenesis, tulis alurnya dengan jumlah sel dan jenis pembelahan (mitosis, meiosis I, meiosis II) lalu hitung. Untuk soal imun, tanyakan: apakah tubuh membuat antibodi sendiri (aktif) atau menerima antibodi jadi (pasif), dan apakah sumbernya alami atau buatan.'
  },
  questions: [
    dasar(
      'Contoh pertahanan nonspesifik lini pertama pada manusia adalah...',
      ['limfosit B', 'antibodi', 'kulit dan lendir serta silia saluran napas', 'sel memori'],
      'C',
      'Lini pertama berupa penghalang fisik dan kimia.',
      'Kulit, lendir, silia saluran napas, dan asam lambung mencegah patogen masuk sebagai pertahanan nonspesifik lini pertama. Limfosit dan antibodi termasuk imunitas spesifik.'
    ),
    dasar(
      'Sel yang menghasilkan dan melepaskan antibodi adalah...',
      ['sel plasma yang berasal dari limfosit B', 'limfosit T sitotoksik', 'eritrosit', 'trombosit'],
      'A',
      'Limfosit B yang aktif berdiferensiasi menjadi sel ini.',
      'Limfosit B yang teraktivasi berdiferensiasi menjadi sel plasma yang mensekresikan antibodi. Limfosit T sitotoksik membunuh sel terinfeksi, eritrosit mengangkut O₂, dan trombosit berperan dalam pembekuan.'
    ),
    dasar(
      'Hormon yang pelepasannya memicu terjadinya ovulasi adalah...',
      ['FSH', 'progesteron', 'testosteron', 'LH'],
      'D',
      'Lonjakan hormon ini terjadi sekitar hari ke-14 siklus.',
      'Lonjakan LH (luteinizing hormone) memicu pecahnya folikel matang dan pelepasan oosit sekunder (ovulasi). FSH memicu pematangan folikel.'
    ),
    dasar(
      'Pada manusia, fertilisasi (pembuahan) terjadi di...',
      ['rahim (uterus)', 'tuba falopi (oviduk)', 'ovarium', 'vagina'],
      'B',
      'Zigot kemudian bergerak ke rahim untuk implantasi.',
      'Sperma bertemu oosit sekunder di tuba falopi. Zigot yang terbentuk membelah selama bergerak menuju rahim dan menempel di endometrium.'
    ),
    dasar(
      'Bayi memperoleh antibodi dari ibunya melalui plasenta dan ASI. Hal ini merupakan contoh imunitas...',
      ['aktif alami', 'aktif buatan', 'pasif buatan', 'pasif alami'],
      'D',
      'Bayi menerima antibodi jadi tanpa membuatnya sendiri.',
      'Antibodi diterima dari ibu secara alami tanpa pembentukan oleh tubuh bayi sendiri, sehingga imunitasnya bersifat pasif alami.'
    ),
    sedang(
      'Vaksin campak memberikan perlindungan karena...',
      ['mengandung antibodi siap pakai yang langsung menetralkan virus', 'mengandung antigen yang dilemahkan atau dimatikan sehingga memicu pembentukan antibodi dan sel memori', 'membunuh virus campak secara langsung dalam darah', 'menggantikan fungsi limfosit T helper'],
      'B',
      'Vaksin melatih sistem imun, bukan memberi antibodi.',
      'Vaksin memperkenalkan antigen yang tidak berbahaya sehingga limfosit B membentuk antibodi dan sel memori. Ketika paparan sesungguhnya terjadi, respons sekunder lebih cepat dan kuat.'
    ),
    sedang(
      'Human Immunodeficiency Virus (HIV) melemahkan sistem imun dengan cara menyerang...',
      ['limfosit T helper (CD4)', 'eritrosit', 'trombosit', 'neutrofil'],
      'A',
      'Sel ini mengoordinasikan respons imun spesifik.',
      'HIV menginfeksi dan menghancurkan limfosit T helper (CD4) yang mengaktifkan limfosit B dan T sitotoksik sehingga kekebalan tubuh melemah.'
    ),
    sedang(
      'Satu spermatogonium yang menyelesaikan spermatogenesis menghasilkan...',
      ['1 sperma haploid', '2 sperma diploid', '4 sperma haploid', '4 sperma diploid'],
      'C',
      'Meiosis menghasilkan empat sel haploid.',
      'Spermatogonium (2n) menjadi spermatosit primer, meiosis I menghasilkan dua spermatosit sekunder (n), meiosis II menghasilkan empat spermatid haploid yang berdiferensiasi menjadi empat sperma.'
    ),
    sedang(
      'Satu oogonium yang menyelesaikan oogenesis menghasilkan...',
      ['4 ovum fungsional', '2 ovum fungsional', '3 ovum dan 1 badan polar', '1 ovum fungsional dan 3 badan polar'],
      'D',
      'Pembelahan sitoplasma pada oogenesis tidak seimbang.',
      'Pembelahan sitoplasma yang tidak seimbang menyisakan sitoplasma pada satu sel besar (ovum) dan tiga badan polar kecil yang tidak fungsional.'
    ),
    sedang(
      'Pada siklus menstruasi 28 hari, ovulasi umumnya terjadi sekitar hari ke...',
      ['7', '10', '14', '21'],
      'C',
      'Fase luteal berlangsung sekitar 14 hari.',
      'Ovulasi terjadi sekitar 14 hari sebelum menstruasi berikutnya, yaitu hari ke-14 pada siklus 28 hari, setelah lonjakan LH.'
    ),
    tantangan(
      'Pada paparan pertama antigen X respons imun lambat dan lemah, sedangkan pada paparan kedua respons sangat cepat dan kuat. Penyebab utamanya adalah...',
      ['antibodi pasif dari ibu', 'sel memori yang terbentuk setelah paparan pertama', 'meningkatnya jumlah makrofag secara permanen', 'interferon yang tersimpan di plasma'],
      'B',
      'Respons sekunder bergantung pada ingatan imunologis.',
      'Setelah paparan pertama terbentuk limfosit memori yang berumur panjang. Saat antigen yang sama masuk lagi, sel memori cepat membelah dan menghasilkan antibodi dalam jumlah besar.'
    ),
    tantangan(
      'Suatu penyakit memiliki bilangan reproduksi dasar R₀ = 5. Persentase minimal populasi yang harus kebal agar kekebalan kelompok tercapai adalah...',
      ['80 persen', '20 persen', '50 persen', '95 persen'],
      'A',
      'Gunakan ambang H = 1 - 1/R₀.',
      'H = 1 - 1/5 = 1 - 0,2 = 0,8 atau 80 persen.'
    ),
    tantangan(
      'Seorang wanita memiliki siklus menstruasi 35 hari. Dengan fase luteal yang tetap sekitar 14 hari, ovulasi terjadi sekitar hari ke...',
      ['14', '17', '18', '21'],
      'D',
      'Hari ovulasi = panjang siklus dikurangi panjang fase luteal.',
      'Ovulasi terjadi pada hari ke-(35 - 14) = 21. Pada siklus lebih panjang, perbedaan terjadi pada fase folikuler, bukan fase luteal.'
    ),
    tantangan(
      'Di testis terdapat 100 spermatogonium dan di ovarium 100 oogonium. Jika semuanya menyelesaikan gametogenesis, jumlah sperma dan ovum fungsional yang terbentuk adalah...',
      ['400 sperma dan 100 ovum', '100 sperma dan 400 ovum', '400 sperma dan 400 ovum', '100 sperma dan 100 ovum'],
      'A',
      'Satu sel germinal jantan menghasilkan 4 gamet, sedangkan betina 1 gamet fungsional.',
      'Sperma = 100 × 4 = 400. Ovum fungsional = 100 × 1 = 100, ditambah 300 badan polar yang tidak fungsional.'
    ),
    tantangan(
      'Tes kehamilan mendeteksi hormon hCG. Hormon ini dihasilkan oleh...',
      ['kelenjar hipofisis anterior ibu', 'sel-sel trofoblas embrio (calon plasenta) setelah implantasi', 'korpus luteum secara mandiri sebelum pembuahan', 'ovarium sebelum ovulasi'],
      'B',
      'hCG baru muncul setelah implantasi dan mempertahankan korpus luteum.',
      'Sel trofoblas embrio mulai menghasilkan hCG setelah implantasi. hCG mempertahankan korpus luteum agar terus menghasilkan progesteron sehingga endometrium tidak meluruh.'
    )
  ]
});
