import { bab, dasar, sedang, tantangan } from '../author.js';

export default bab({
  grade: 12,
  number: 2,
  slug: 'substansi-genetik-dan-pembelahan-sel',
  title: 'Materi Genetik, Sintesis Protein, dan Pembelahan Sel',
  element: 'Pemahaman Biologi: struktur DNA-RNA, replikasi, transkripsi, translasi kode genetik, serta siklus sel mitosis dan meiosis',
  summary: {
    overview: 'DNA menyimpan informasi genetik yang diwariskan dan diekspresikan menjadi protein melalui transkripsi dan translasi. Bab ini membahas struktur DNA dan RNA, aturan Chargaff, replikasi semikonservatif, tahapan sintesis protein dan kode genetik, jenis mutasi gen, serta pembelahan sel melalui mitosis dan meiosis, termasuk perhitungan jumlah basa, ikatan hidrogen, jumlah DNA hasil replikasi, dan variasi genetik pada gamet.',
    coreConcepts: [
      'Struktur DNA dan RNA: Nukleotida tersusun atas gula pentosa, gugus fosfat, dan basa nitrogen. DNA berupa heliks ganda antiparalel dengan gula deoksiribosa dan basa A-T (dua ikatan hidrogen) serta G-C (tiga ikatan hidrogen). RNA berupa untai tunggal dengan gula ribosa dan basa urasil sebagai pengganti timin; jenisnya mRNA, tRNA, dan rRNA. Aturan Chargaff menyatakan A = T dan G = C.',
      'Replikasi DNA: Replikasi bersifat semikonservatif: tiap DNA anak mengandung satu untai lama dan satu untai baru (Meselson-Stahl). Helikase membuka heliks, primase membentuk primer, DNA polimerase menambah nukleotida arah 5′ ke 3′, sehingga untai pemandu dibuat kontinu dan untai tertinggal dibuat sebagai fragmen Okazaki yang disambung ligase.',
      'Transkripsi dan Translasi: Pada transkripsi di inti, RNA polimerase menyalin untai templat DNA menjadi mRNA; pada eukariota mRNA diproses (tudung, ekor poli-A, pembuangan intron). Pada translasi di ribosom, kodon mRNA (tiga basa) dibaca oleh antikodon tRNA yang membawa asam amino. Translasi dimulai pada kodon AUG (metionin) dan berhenti pada UAA, UAG, atau UGA.',
      'Kode Genetik dan Mutasi: Kode genetik bersifat triplet, degeneratif (beberapa kodon untuk satu asam amino), dan hampir universal. Mutasi substitusi dapat bersifat diam (silent), missense, atau nonsense, sedangkan insersi dan delesi dapat menggeser kerangka baca (frameshift). Contoh missense adalah anemia sel sabit akibat penggantian asam glutamat dengan valin.',
      'Siklus Sel dan Mitosis: Siklus sel terdiri atas interfase (G1, S, G2) dan fase M. Mitosis berlangsung dalam profase, metafase (kromosom berjajar di ekuator), anafase (kromatid saudara berpisah), dan telofase, diikuti sitokinesis, menghasilkan dua sel anak diploid identik untuk pertumbuhan dan perbaikan jaringan. Gangguan kendali siklus sel dapat memicu kanker.',
      'Meiosis dan Variasi Genetik: Meiosis terdiri atas meiosis I (pemisahan kromosom homolog, pindah silang pada profase I) dan meiosis II (pemisahan kromatid), menghasilkan empat sel haploid berbeda secara genetik. Variasi berasal dari pindah silang dan pemilahan bebas kromosom homolog; pada manusia kombinasi tanpa pindah silang adalah 2 pangkat 23.'
    ],
    keyFormulas: [
      { label: 'Aturan Chargaff', formula: 'A = T,\\quad G = C \\qquad A + G = T + C = 50\\%' },
      { label: 'Ikatan Hidrogen dan Panjang DNA', formula: 'H = 2A + 3G \\qquad L = \\dfrac{N}{2} \\times 0{,}34\\ \\text{nm}' },
      { label: 'Jumlah DNA Hasil Replikasi', formula: '\\text{jumlah DNA} = 2^{n} \\qquad \\text{DNA bertanda untai lama} = 2' },
      { label: 'Kombinasi Gamet', formula: '\\text{kombinasi kromosom gamet} = 2^{n}\\quad (n = 23 \\text{ pada manusia})' }
    ],
    workedExamples: [
      {
        title: 'Menghitung komposisi basa, ikatan hidrogen, dan panjang DNA',
        problem: 'DNA untai ganda memiliki 2.000 nukleotida dengan 30 persen adenin. Hitung jumlah tiap basa, ikatan hidrogen, dan panjang DNA.',
        solution: 'A = T = 30% × 2.000 = 600 dan G = C = (100 - 60)/2 = 20% × 2.000 = 400. Ikatan hidrogen = 2 × 600 + 3 × 400 = 1.200 + 1.200 = 2.400. Jumlah pasangan basa 1.000 sehingga panjang = 1.000 × 0,34 nm = 340 nm.'
      },
      {
        title: 'Menerjemahkan DNA menjadi polipeptida',
        problem: 'Untai templat DNA 3′-TAC GGT CAA ATT-5′. Tentukan mRNA dan polipeptidanya (AUG = Met, CCA = Pro, GUU = Val, UAA = stop).',
        solution: 'mRNA komplementer: 5′-AUG CCA GUU UAA-3′. Kodon dibaca: AUG = Met, CCA = Pro, GUU = Val, UAA = kodon stop. Polipeptida: Met - Pro - Val.'
      },
      {
        title: 'Memprediksi hasil replikasi semikonservatif',
        problem: 'DNA berlabel ¹⁵N pada kedua untai direplikasi dalam medium ¹⁴N selama dua generasi. Tentukan komposisi DNA pada generasi kedua.',
        solution: 'Setelah dua replikasi terdapat 2² = 4 DNA. Dua DNA bersifat hibrid (satu untai ¹⁵N dan satu untai ¹⁴N), dan dua DNA bersifat ringan (kedua untai ¹⁴N). Tidak ada DNA yang kedua untainya ¹⁵N.'
      }
    ],
    misconceptions: [
      'Mengira RNA mengandung timin. Pada RNA, urasil menggantikan timin dan gulanya ribosa, bukan deoksiribosa.',
      'Mengira mutasi selalu merugikan. Mutasi silent tidak mengubah asam amino, dan sebagian mutasi menjadi sumber variasi yang menguntungkan.',
      'Menganggap mitosis menghasilkan sel haploid. Mitosis menghasilkan dua sel anak diploid identik, sedangkan meiosis menghasilkan sel haploid.',
      'Menukar kodon dan antikodon. Kodon berada pada mRNA, sedangkan antikodon berada pada tRNA dan berpasangan komplementer dengan kodon.'
    ],
    tutorTip: 'Untuk soal transkripsi, buat pasangan komplementer dengan aturan A-U, T-A, G-C, C-G dari untai templat. Untuk soal replikasi, ingat jumlah DNA = 2 pangkat n dan selalu hanya dua DNA yang menyimpan untai lama.'
  },
  questions: [
    dasar(
      'Basa nitrogen yang hanya terdapat pada RNA adalah...',
      ['adenin', 'timin', 'guanin', 'urasil'],
      'D',
      'Basa ini menggantikan timin pada RNA.',
      'Urasil menggantikan timin pada RNA. Adenin dan guanin terdapat pada DNA maupun RNA, sedangkan timin hanya pada DNA.'
    ),
    dasar(
      'Pasangan basa pada DNA yang dihubungkan tiga ikatan hidrogen adalah...',
      ['adenin dan timin', 'adenin dan urasil', 'guanin dan sitosin', 'timin dan sitosin'],
      'C',
      'Pasangan purin-pirimidin yang paling kuat.',
      'Guanin berpasangan dengan sitosin melalui tiga ikatan hidrogen, sedangkan adenin dengan timin hanya dua ikatan hidrogen.'
    ),
    dasar(
      'Enzim yang menambahkan nukleotida baru ke untai DNA yang sedang disintesis pada replikasi adalah...',
      ['helikase', 'DNA polimerase', 'ligase', 'primase'],
      'B',
      'Helikase hanya membuka heliks.',
      'DNA polimerase menambahkan nukleotida sesuai cetakan arah 5′ ke 3′. Helikase membuka heliks, primase membuat primer, dan ligase menyambung fragmen Okazaki.'
    ),
    dasar(
      'Tahap pembentukan mRNA menggunakan DNA sebagai cetakan disebut...',
      ['transkripsi', 'translasi', 'replikasi', 'sitokinesis'],
      'A',
      'Tahap ini terjadi di inti sel eukariota.',
      'Transkripsi adalah penyalinan informasi DNA menjadi mRNA oleh RNA polimerase. Translasi menerjemahkan mRNA menjadi polipeptida di ribosom.'
    ),
    dasar(
      'Pada fase mitosis berikut, kromosom berjajar pada bidang ekuator sel pada fase...',
      ['profase', 'anafase', 'metafase', 'telofase'],
      'C',
      'Setelah fase ini kromatid saudara akan berpisah.',
      'Pada metafase kromosom berjajar di bidang ekuator dan terikat serabut spindel. Anafase memisahkan kromatid, telofase membentuk dua inti baru.'
    ),
    sedang(
      'Replikasi DNA bersifat semikonservatif, artinya...',
      ['setiap DNA anak terdiri atas satu untai lama dan satu untai baru', 'kedua untai DNA anak semuanya baru', 'DNA lama tetap utuh dan DNA baru terbentuk terpisah', 'fragmen DNA lama dan baru bercampur acak'],
      'A',
      'Semi berarti separuh.',
      'Pada replikasi semikonservatif, tiap untai DNA lama menjadi cetakan sehingga setiap DNA anak mengandung satu untai lama dan satu untai baru (percobaan Meselson-Stahl).'
    ),
    sedang(
      'Suatu molekul DNA mengandung 30 persen adenin. Persentase guanin dalam DNA tersebut adalah...',
      ['30%', '20%', '40%', '70%'],
      'B',
      'A = T dan A + G = 50 persen.',
      'A = T = 30% sehingga A + T = 60%. Sisanya 40% adalah G + C yang sama banyak, sehingga G = 20%.'
    ),
    sedang(
      'Sebuah mRNA 5′-AUG GCU UAA-3′ diterjemahkan (AUG = Met, GCU = Ala, UAA = stop). Jumlah asam amino pada polipeptida yang terbentuk adalah...',
      ['1', '3', '0', '2'],
      'D',
      'Kodon stop tidak menyandi asam amino.',
      'AUG menyandi metionin, GCU menyandi alanin, dan UAA adalah kodon stop sehingga translasi berhenti. Polipeptida terdiri atas 2 asam amino (Met-Ala).'
    ),
    sedang(
      'Peristiwa pindah silang (crossing over) terjadi pada...',
      ['metafase II', 'anafase I', 'profase I', 'telofase II'],
      'C',
      'Kromosom homolog berpasangan membentuk tetrad.',
      'Pindah silang terjadi pada profase I meiosis saat kromosom homolog berpasangan (tetrad) dan bertukar segmen kromatid sehingga menambah variasi genetik.'
    ),
    sedang(
      'Hasil akhir meiosis pada manusia dari satu sel diploid adalah...',
      ['dua sel diploid identik', 'empat sel diploid', 'dua sel haploid identik', 'empat sel haploid yang berbeda secara genetik'],
      'D',
      'Meiosis mengurangi jumlah kromosom dan menambah variasi.',
      'Meiosis I dan II menghasilkan empat sel haploid. Karena pindah silang dan pemilahan bebas, sel-sel tersebut berbeda secara genetik.'
    ),
    tantangan(
      'DNA untai ganda berisi total 2.000 nukleotida dengan 30 persen adenin. Jumlah ikatan hidrogen antarbasa pada DNA tersebut adalah...',
      ['2.400', '2.600', '3.000', '1.800'],
      'A',
      'Hitung A, T, G, C lebih dahulu, lalu gunakan H = 2A + 3G.',
      'A = T = 600 dan G = C = 400. H = (2 × 600) + (3 × 400) = 1.200 + 1.200 = 2.400.'
    ),
    tantangan(
      'Untai templat DNA 3′-TAC GGT CAA ATT-5′ ditranskripsi dan ditranslasi (AUG = Met, CCA = Pro, GUU = Val, UAA = stop; GGU = Gly, CAA = Gln). Urutan polipeptida yang terbentuk adalah...',
      ['Met - Gly - Val', 'Met - Pro - Val', 'Met - Pro - Gln', 'Tyr - Gly - Gln'],
      'B',
      'Cari mRNA komplementer dari templat, lalu baca kodon.',
      'mRNA komplementer: 5′-AUG CCA GUU UAA-3′. Pembacaan: Met, Pro, Val, lalu stop. Polipeptidanya Met - Pro - Val.'
    ),
    tantangan(
      'DNA berlabel ¹⁵N pada kedua untainya direplikasi dalam medium ¹⁴N selama dua generasi. Persentase DNA yang kedua untainya ringan (¹⁴N/¹⁴N) pada generasi kedua adalah...',
      ['0 persen', '25 persen', '75 persen', '50 persen'],
      'D',
      'Ada 2 pangkat 2 DNA, dan hanya dua yang menyimpan untai lama.',
      'Generasi kedua terdiri atas 4 DNA: 2 hibrid (¹⁵N/¹⁴N) dan 2 ringan (¹⁴N/¹⁴N). DNA ringan = 2/4 = 50 persen.'
    ),
    tantangan(
      'Perubahan kodon GAG (asam glutamat) menjadi GUG (valin) pada gen globin menyebabkan anemia sel sabit. Jenis mutasi yang terjadi adalah...',
      ['delesi satu basa yang menggeser kerangka baca', 'substitusi satu basa yang mengganti satu asam amino (missense)', 'insersi tiga basa tanpa pergeseran kerangka', 'nonsense yang membentuk kodon stop'],
      'B',
      'Hanya satu basa yang berubah dan asam aminonya berganti.',
      'Penggantian satu basa (A menjadi U pada mRNA) mengubah satu asam amino (Glu menjadi Val). Ini mutasi substitusi bertipe missense, bukan frameshift atau nonsense.'
    ),
    tantangan(
      'Manusia memiliki 23 pasang kromosom. Tanpa pindah silang, jumlah kemungkinan kombinasi kromosom pada gamet adalah...',
      ['2 pangkat 23, sekitar 8,4 juta', '23 pangkat 2, yaitu 529', '46 pangkat 2, yaitu 2.116', '2 pangkat 46, sekitar 70 triliun'],
      'A',
      'Tiap pasang homolog menyumbang dua kemungkinan secara bebas.',
      'Setiap pasang kromosom homolog berpisah secara bebas dengan dua kemungkinan sehingga kombinasi gamet = 2²³ ≈ 8,4 juta, belum termasuk variasi akibat pindah silang.'
    )
  ]
});
