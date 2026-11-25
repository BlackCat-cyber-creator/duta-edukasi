/**
 * Paket Soal Terstruktur: OSN-K Biologi SMA 2023 (6 skenario teks-lengkap, 24 butir Benar/Salah)
 * Sumber: scraped_raw/osnk-biologi-sma-2023.md (50 skenario sumber).
 * 42 soal bergantung pada gambar/diagram/grafik/kurva/tabel yang tidak termuat dan 2 soal memiliki inkonsistensi kunci arsip dilewati.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-bio-sma-2023',
  slug: 'osnk-biologi-sma-2023',
  subject: 'olimpiade-bio',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'OSN-K Biologi SMA 2023',
  relatedChapterIds: [
    'biologi10-bab2-virus-bakteri-dan-protista',
    'biologi11-bab1-sel-dan-bioproses-membran',
    'biologi11-bab4-sistem-respirasi-ekskresi-dan-koordinasi',
    'biologi12-bab2-substansi-genetik-dan-pembelahan-sel',
    'biologi12-bab3-hukum-mendel-dan-hereditas-manusia',
    'biologi12-bab4-evolusi-dan-bioteknologi'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Biologi SMA 2023',
  totalMarks: 24,
  instructions:
    'Kerjakan seluruh 6 skenario (masing-masing terdiri atas 4 butir pernyataan Benar/Salah, total 24 butir bernilai 1 poin per butir). Dari 50 soal pada naskah arsip OSN-K Biologi SMA 2023, dimuat 6 skenario yang 100% utuh secara teks dan terverifikasi (nomor sumber: 3, 31, 32, 36, 38, dan 42) dan dilewati 44 soal: sebanyak 42 soal bergantung pada gambar, diagram, grafik, kurva, skema, atau tabel yang tidak termuat pada arsip teks (nomor sumber: 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 34, 35, 37, 39, 40, 43, 44, 45, 46, 47, 48, 49, dan 50) serta 2 soal teks dengan kunci jawaban arsip yang tidak konsisten secara biologis (nomor sumber: 33 dan 41).',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-biologi-sma-2023.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Adaptasi Mikroorganisme Termofilik (Soal Asli No. 3)',
      marks: 4,
      stem: 'Mikroorganisme termofilik dan termofil ekstrem adalah mikroorganisme yang mampu hidup optimum berturut-turut pada suhu $41^{\\circ}\\text{C}$ hingga $122^{\\circ}\\text{C}$, seperti di sumber mata air panas, geyser, maupun celah hidrotermal (hydrothermal vents) di dasar samudra. Terdapat berbagai adaptasi fisiologis dan molekuler pada mikroorganisme termofilik untuk bertahan dan tumbuh pada kondisi ekstrem tersebut. Tentukan apakah setiap pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Protein mikroorganisme termofilik mengandung lebih banyak ikatan hidrogen dibandingkan dengan ikatan disulfida.\n\nA. Benar\nB. Salah',
          answer: 'A. Benar',
          principle:
            'Stabilitas termal protein ditopang oleh jejaring interaksi nonkovalen dalam jumlah sangat besar (terutama ikatan hidrogen dan jembatan garam) dibandingkan ikatan disulfida kovalen yang jumlahnya jauh lebih sedikit.',
          solution:
            'Pada struktur protein mikroorganisme termofilik, ikatan hidrogen terbentuk secara luas di sepanjang tulang punggung polipeptida ($\\alpha$-heliks dan $\\beta$-sheet) serta antar-rantai samping polar, sehingga jumlahnya mencapai puluhan hingga ratusan ikatan per molekul protein. Sebaliknya, ikatan disulfida ($-\\text{S}-\\text{S}-$) hanya dapat terbentuk di antara dua residu sistein yang berdekatan secara spasial. Protein termofil terutama meningkatkan kepadatan inti hidrofobik, jumlah jembatan garam (interaksi ionik), serta jejaring ikatan hidrogen untuk mencegah denaturasi pada suhu tinggi, sementara jumlah ikatan disulfidanya jauh lebih sedikit daripada ikatan hidrogen. Jadi, pernyataan ini benar.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt:
            'Akumulasi osmolit merupakan bentuk adaptasi yang umum dijumpai pada mikroorganisme termofilik.\n\nA. Benar\nB. Salah',
          answer: 'A. Benar',
          principle:
            'Osmolit kompatibel (compatible solutes) bertindak sebagai termoprotektan intraseluler yang menstabilkan struktur makromolekul pada suhu tinggi.',
          solution:
            'Banyak mikroorganisme termofilik dan hipertermofilik (terutama dari domain Archaea maupun bakteri termofil) mengakumulasi senyawa organik kecil bermuatan atau polar yang disebut osmolit (compatible solutes), seperti di-mio-inositol fosfat (DIP), mannosilgliserat, siklik 2,3-difosfogliserat, dan trehalosa. Zat-zat ini mempertahankan cangkang hidrasi di sekitar protein dan asam nukleat sehingga menstabilkan konformasi alaminya serta mencegah agregasi akibat panas ekstrem tanpa mengganggu aktivitas enzimatik sel. Jadi, pernyataan ini benar.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt:
            'Asam lemak pada membran mikroorganisme termofilik memiliki lebih sedikit ikatan rangkap.\n\nA. Benar\nB. Salah',
          answer: 'A. Benar',
          principle:
            'Asam lemak dengan lebih sedikit ikatan rangkap (lebih jenuh) memiliki rantai lurus yang tersusun rapat sehingga menaikkan titik leleh dan menjaga kestabilan membran pada suhu tinggi.',
          solution:
            'Ikatan rangkap cis pada asam lemak tak jenuh membentuk tekukan pada rantai hidrokarbon sehingga memperlebar jarak antar-fosfolipid dan meningkatkan fluiditas membran. Pada suhu lingkungan yang sangat tinggi, membran berisiko mengalami pelelehan berlebih dan kehilangan integritas selektifnya. Untuk menjaga viskositas membran tetap optimal (adaptasi homeoviskos), bakteri termofilik memperkaya proporsi asam lemak jenuh berantai panjang yang memiliki lebih sedikit ikatan rangkap (sehingga gaya van der Waals antar-rantai asil lebih kuat). Jadi, pernyataan ini benar.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt:
            '$\\%\\text{AT}$ pada genom mikroorganisme termofilik relatif lebih tinggi dibandingkan dengan mikroorganisme mesofilik.\n\nA. Benar\nB. Salah',
          answer: 'B. Salah',
          principle:
            'Pasangan basa $\\text{G}\\equiv\\text{C}$ memiliki tiga ikatan hidrogen dan interaksi penumpukan basa (base stacking) yang lebih kuat daripada pasangan $\\text{A}=\\text{T}$ yang hanya memiliki dua ikatan hidrogen.',
          solution:
            'Pada suhu ekstrem, DNA untai ganda dan RNA struktural rentan terdenaturasi menjadi untai tunggal. Pasangan basa guanin–sitosin ($\\text{G}-\\text{C}$) disatukan oleh $3$ ikatan hidrogen dan memiliki energi penumpukan basa lebih stabil dibandingkan pasangan adenin–timin ($\\text{A}-\\text{T}$) yang hanya memiliki $2$ ikatan hidrogen. Oleh karena itu, mikroorganisme termofilik umumnya memiliki kandungan $\\%\\text{GC}$ yang lebih tinggi (terutama pada gen rRNA/tRNA dan daerah pengode), bukan $\\%\\text{AT}$ yang lebih tinggi. Jika $\\%\\text{AT}$ lebih tinggi, titik leleh ($T_m$) DNA justru menjadi lebih rendah. Jadi, pernyataan ini salah.',
          rubric: OK
        }
      ]
    },
    {
      no: 2,
      title: 'Dinamika Populasi dan Spesiasi Ikan Perak (Soal Asli No. 31)',
      marks: 4,
      stem: 'Terdapat sebuah sungai di daerah tropis yang mengairi sebuah lembah. Diketahui sungai tersebut memiliki populasi ikan endemik yang disebut ikan perak. Sungai ini sering meluap ketika musim penghujan tiba. Suatu ketika, luapan sungai membentuk danau di salah satu cekungan bekas pertambangan di dekatnya. Bersamaan dengan terbentuknya danau ini, terdapat populasi ikan perak yang ikut aliran arus dan menghuni danau tersebut. Selang beberapa waktu, ketika memasuki musim kemarau, surutnya ketinggian permukaan air memisahkan danau dan sungai tersebut. Diketahui terdapat spesies burung invasif yang biasa memangsa ikan perak di danau baru itu, sehingga menyisakan sebagian kecil dari populasi ikan perak di danau bekas tambang tersebut. Tentukan apakah setiap pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Fenomena founder effect terjadi ketika banjir mengakibatkan populasi ikan perak menempati danau bekas tambang.\n\nA. Benar\nB. Salah',
          answer: 'A. Benar',
          principle:
            'Founder effect (efek pendiri) merupakan salah satu bentuk hanyutan genetik ketika sebagian kecil individu berpindah dari populasi asal dan membentuk koloni baru di habitat baru.',
          solution:
            'Ketika banjir membawa sejumlah individu ikan perak dari sungai ke cekungan bekas tambang hingga menghuni danau yang baru terbentuk, kelompok kecil yang terbawa arus tersebut hanya membawa sebagian kecil cuplikan (sampel) lungkang gen populasi sungai induknya. Akibatnya, frekuensi alel pada populasi pendiri di danau dapat berbeda secara acak dari populasi sungai asal dan memiliki keragaman genetik awal yang lebih sempit. Mekanisme inilah yang disebut founder effect. Jadi, pernyataan ini benar.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt:
            'Populasi ikan perak di danau bekas tambang tersebut mengalami bottleneck effect sehubungan dengan kehadiran spesies predator invasif.\n\nA. Benar\nB. Salah',
          answer: 'A. Benar',
          principle:
            'Bottleneck effect (efek leher botol) terjadi ketika suatu populasi mengalami penyusutan ukuran secara drastis akibat faktor mortalitas berat, sehingga memicu hanyutan genetik acak.',
          solution:
            'Setelah populasi ikan perak terbentuk di danau baru, predasi intensif oleh spesies burung invasif memangsa sebagian besar individu dan hanya menyisakan sebagian kecil populasi. Penurunan ukuran populasi yang sangat tajam ini menyebabkan banyak alel hilang secara acak dan menggeser frekuensi alel pada individu yang tersintas—ciri khas dari bottleneck effect. Jadi, pernyataan ini benar.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt:
            'Ukuran populasi yang tersisa berkorelasi positif dengan besar kemungkinan kepunahan terjadi pada populasi ikan perak.\n\nA. Benar\nB. Salah',
          answer: 'B. Salah',
          principle:
            'Populasi berukuran kecil memiliki risiko kepunahan yang lebih tinggi akibat perkawinan sekerabat, hilangnya variasi adaptif, dan kerentanan terhadap fluktuasi acak (korelasi negatif antara ukuran populasi dan peluang kepunahan).',
          solution:
            'Korelasi positif berarti apabila ukuran populasi yang tersisa semakin besar, maka kemungkinan kepunahannya juga semakin besar. Dalam ekologi populasi, justru berlaku sebaliknya: semakin kecil ukuran populasi yang tersisa, semakin besar risiko mengalami depresi silang dalam (inbreeding depression), kehilangan keragaman genetik melalui genetic drift, serta ketidakmampuan pulih dari gangguan lingkungan (pusaran kepunahan/extinction vortex). Dengan demikian, ukuran populasi yang tersisa berkorelasi negatif dengan kemungkinan kepunahan. Jadi, pernyataan ini salah.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt:
            'Memisahnya danau dan sungai dapat memicu mekanisme spesiasi simpatrik antara kedua populasi ikan perak.\n\nA. Benar\nB. Salah',
          answer: 'B. Salah',
          principle:
            'Spesiasi yang diawali oleh isolasi geografis dan terputusnya aliran gen antarpopulasi yang terpisah secara fisik adalah spesiasi alopatrik, bukan simpatrik.',
          solution:
            'Surutnya air pada musim kemarau memutus koneksi fisik antara danau bekas tambang dan sungai, sehingga kedua populasi ikan perak terisolasi secara geografis dan tidak lagi mengalami aliran gen (gene flow). Jika kedua populasi terus mengalami divergensi genetik akibat tekanan seleksi yang berbeda serta genetic drift, jenis spesiasi yang terpicu adalah **spesiasi alopatrik** (terjadi pada wilayah terpisah secara geografis), bukan spesiasi simpatrik (yang terjadi dalam area geografis yang tumpang-tindih tanpa penghalang fisik). Jadi, pernyataan ini salah.',
          rubric: OK
        }
      ]
    },
    {
      no: 3,
      title: 'Kesetimbangan Hardy-Weinberg dan Seleksi Alam pada Ikan (Soal Asli No. 32)',
      marks: 4,
      stem: 'Olivia memiliki kolam ikan yang berisi $10.000$ ikan kecil. Dalam populasi ikan tersebut, ikan homozigot untuk alel $K$ berwarna kuning dan ikan yang homozigot untuk alel $k$ berwarna putih. Ikan heterozigot memiliki tubuh berwarna kuning dengan bintik-bintik berwarna putih. Diketahui populasi ikan tersebut berada dalam kesetimbangan Hardy-Weinberg dan frekuensi alel $K$ adalah $0{,}45$. Suatu hari, Olivia melihat bahwa temannya memiliki ikan spesies lain yang besar dan indah. Olivia sangat menyukai ikan tersebut sehingga ia memutuskan untuk membeli ikan besar tersebut dan memasukkannya ke kolam ikan yang berisi ikan kecil. Ternyata, ikan besar tersebut merupakan predator dan lebih suka memangsa ikan kecil dengan bintik-bintik putih pada tubuhnya. Beberapa hari kemudian, Olivia hanya memiliki $2.000$ ikan kuning, $150$ ikan kuning dengan bintik putih, dan $3.000$ ikan putih. Tentukan apakah setiap pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Warna tubuh ikan kecil dalam kolam ikan Olivia diturunkan secara dominan tak sempurna (incomplete dominance).\n\nA. Benar\nB. Salah',
          answer: 'B. Salah',
          principle:
            'Kodominansi terjadi apabila kedua alel pada individu heterozigot diekspresikan secara penuh dan bersamaan tanpa saling bercampur menjadi warna antara.',
          solution:
            'Pada dominansi tak sempurna (incomplete dominance), individu heterozigot $Kk$ akan memunculkan fenotipe antara (intermediet), misalnya kuning pucat atau krem. Pada kasus ini, ikan heterozigot $Kk$ mengekspresikan warna kuning ($KK$) sekaligus bintik-bintik putih ($kk$) secara nyata dan terpisah pada tubuhnya. Kemunculan kedua fenotipe parental secara bersamaan pada heterozigot merupakan pola pewarisan **kodominansi**, bukan dominansi tak sempurna. Jadi, pernyataan ini salah.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt:
            'Masuknya predator menyebabkan populasi ikan kecil mengalami seleksi direksional.\n\nA. Benar\nB. Salah',
          answer: 'B. Salah',
          principle:
            'Seleksi terhadap individu heterozigot ($Kk$) yang mempertahankan kedua fenotipe ekstrem ($KK$ dan $kk$) disebut seleksi disruptif, bukan seleksi direksional.',
          solution:
            'Predator secara selektif memangsa ikan heterozigot $Kk$ (kuning berbintik putih) sehingga jumlahnya menyusut tajam menjadi $150$ ekor, sementara kedua fenotipe ekstrem homozigot—kuning polos ($KK = 2.000$) dan putih polos ($kk = 3.000$)—lebih banyak bertahan hidup. Seleksi alam yang menekan fenotipe tengah dan menguntungkan kedua ekstrem secara bersamaan disebut **seleksi disruptif** (disruptive selection), bukan seleksi direksional (yang menggeser rata-rata populasi hanya ke satu ekstrem saja). Jadi, pernyataan ini salah.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt:
            'Sebelum penambahan ikan predator, Olivia memiliki $3.025$ ikan putih.\n\nA. Benar\nB. Salah',
          answer: 'A. Benar',
          principle:
            'Dalam kesetimbangan Hardy-Weinberg dengan $p + q = 1$, frekuensi genotipe homozigot resesif $kk$ sama dengan $q^2$.',
          solution:
            'Sebelum predator dimasukkan, populasi berada dalam kesetimbangan Hardy-Weinberg dengan frekuensi alel $K$ adalah $p = 0{,}45$. Maka frekuensi alel $k$ adalah:\n$$q = 1 - p = 1 - 0{,}45 = 0{,}55.$$\nFrekuensi genotipe ikan putih ($kk$) adalah:\n$$f(kk) = q^2 = (0{,}55)^2 = 0{,}3025.$$\nDengan total populasi awal $10.000$ ekor, banyaknya ikan putih sebelum predasi adalah:\n$$0{,}3025 \\times 10.000 = 3.025\\text{ ekor}.$$\nJadi, pernyataan ini benar.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt:
            'Setelah penambahan ikan predator, frekuensi alel $k$ dalam populasi ikan kecil menjadi $0{,}634$.\n\nA. Benar\nB. Salah',
          answer: 'B. Salah',
          principle:
            'Pada sifat kodominan, frekuensi alel dihitung langsung dari cacah salinan alel di antara individu yang masih hidup: $f(k) = \\frac{N_{Kk} + 2N_{kk}}{2N_{\\text{total}}}$.',
          solution:
            'Jumlah ikan yang tersisa setelah predasi adalah:\n$$N_{\\text{total}} = 2.000 + 150 + 3.000 = 5.150\\text{ ekor}.$$\nKarena setiap individu diploid membawa $2$ alel, total seluruh salinan alel adalah $2 \\times 5.150 = 10.300$. Banyaknya alel $k$ berasal dari $1$ salinan pada tiap ikan $Kk$ ($150$) dan $2$ salinan pada tiap ikan $kk$ ($2 \\times 3.000 = 6.000$), sehingga:\n$$\\text{Total alel } k = 150 + 6.000 = 6.150.$$\nDengan demikian, frekuensi alel $k$ pascapredasi adalah:\n$$f(k) = \\frac{6.150}{10.300} = \\frac{123}{206}.$$\nMembandingkan secara eksak dengan $0{,}634 = \\frac{634}{1.000}$ melalui perkalian silang: $123 \\times 1.000 = 123.000 < 634 \\times 206 = 130.604$, sehingga $f(k) = \\frac{123}{206} < 0{,}634$ (tepatnya berada di bawah $0{,}60$). Jadi, pernyataan ini salah.',
          rubric: OK
        }
      ]
    },
    {
      no: 4,
      title: 'Interaksi Gen Letal dan Gen Intermediet pada Hewan X (Soal Asli No. 36)',
      marks: 4,
      stem: 'Anda sedang mengamati dua buah gen yang berturut-turut mengatur karakter panjang (gen $D$) dan tekstur rambut (gen $E$) pada hewan X. Genotipe $DD$ pada gen $D$ membuat rambut panjang, $Dd$ rambut pendek, dan $dd$ bersifat letal. Gen $E$ memiliki $2$ alel bersifat intermediet dengan alel $E$ mengatur sifat keriting, alel $e$ lurus, sedangkan genotipe heterozigot $Ee$ memiliki rambut bergelombang. Diketahui fenotipe letal menyebabkan gagalnya pembelahan awal zigot. Tentukan apakah setiap pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Kombinasi $2$ gen di atas dapat menghasilkan keturunan yang terdiri atas $9$ macam genotipe dan $9$ macam fenotipe.\n\nA. Benar\nB. Salah',
          answer: 'B. Salah',
          principle:
            'Zigot bergenotipe letal dini ($dd$) gagal berkembang menjadi individu hidup, sehingga hanya $2$ genotipe hidup pada lokus $D$ yang bergabung dengan $3$ genotipe pada lokus $E$.',
          solution:
            'Pada lokus $D$, genotipe $dd$ bersifat letal pada fase pembelahan awal zigot sehingga tidak pernah berkembang menjadi keturunan yang lahir. Oleh karena itu, keturunan hidup hanya dapat memiliki $2$ macam genotipe untuk gen $D$ ($DD$ dan $Dd$) yang sesuai dengan $2$ fenotipe (rambut panjang dan rambut pendek). Sementara itu, lokus $E$ bersifat intermediet sehingga menghasilkan $3$ macam genotipe ($EE$, $Ee$, $ee$) dengan $3$ fenotipe berbeda (keriting, bergelombang, lurus). Akibatnya, kombinasi kedua gen hanya menghasilkan $2 \\times 3 = 6$ macam genotipe dan $2 \\times 3 = 6$ macam fenotipe pada keturunan hidup, bukan $9$ dan $9$. Jadi, pernyataan ini salah.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt:
            'Sepasang individu heterozigot disilangkan dan diketahui menghasilkan seekor anak. Peluang dihasilkan anak berfenotipe rambut panjang bergelombang adalah $1/8$.\n\nA. Benar\nB. Salah',
          answer: 'B. Salah',
          principle:
            'Karena anak diketahui hidup dan genotipe $dd$ mati saat pembelahan awal zigot, peluang fenotipe dihitung secara bersyarat pada ruang sampel zigot non-letal ($DD$ dan $Dd$).',
          solution:
            'Persilangan sepasang individu heterozigot adalah $DdEe \\times DdEe$. Pada gen $D$ ($Dd \\times Dd$), rasio zigot adalah $\\frac{1}{4}DD : \\frac{2}{4}Dd : \\frac{1}{4}dd$. Karena $dd$ mati pada pembelahan awal dan diketahui telah lahir seekor anak (hidup), maka proporsi genotipe hidup pada lokus $D$ menjadi:\n$$P(DD \\mid \\text{hidup}) = \\frac{1/4}{3/4} = \\frac{1}{3}, \\qquad P(Dd \\mid \\text{hidup}) = \\frac{2/4}{3/4} = \\frac{2}{3}.$$\nPada gen $E$ ($Ee \\times Ee$), peluang heterozigot bergelombang adalah $P(Ee) = \\frac{2}{4} = \\frac{1}{2}$. Jadi, peluang anak yang lahir berfenotipe rambut panjang bergelombang ($DDEe$) adalah:\n$$P(DDEe \\mid \\text{hidup}) = \\frac{1}{3} \\times \\frac{1}{2} = \\frac{1}{6} \\neq \\frac{1}{8}.$$\nNilai $1/8$ keliru karena memasukkan zigot letal $dd$ ke dalam penyebut ($1/4 \\times 1/2$). Jadi, pernyataan ini salah.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt:
            'Persilangan $2$ individu heterozigot diketahui menghasilkan $4$ ekor anak. Peluang terdapat minimal $1$ anak berfenotipe rambut pendek keriting adalah lebih dari $50\\%$.\n\nA. Benar\nB. Salah',
          answer: 'A. Benar',
          principle:
            'Peluang munculnya minimal satu kejadian dari $n$ percobaan independen dihitung melalui komplemennya: $P(\\ge 1) = 1 - (1 - p)^n$.',
          solution:
            'Untuk setiap anak hidup hasil persilangan $DdEe \\times DdEe$, peluang berambut pendek ($Dd$) adalah $P(Dd \\mid \\text{hidup}) = \\frac{2}{3}$ dan peluang berambut keriting ($EE$) adalah $P(EE) = \\frac{1}{4}$. Maka peluang satu anak berfenotipe rambut pendek keriting ($DdEE$) adalah:\n$$p = \\frac{2}{3} \\times \\frac{1}{4} = \\frac{1}{6}.$$\nUntuk $4$ ekor anak yang saling bebas, peluang tidak ada satu pun anak berambut pendek keriting adalah $\\left(1 - \\frac{1}{6}\\right)^4 = \\left(\\frac{5}{6}\\right)^4 = \\frac{625}{1.296}$. Dengan demikian, peluang terdapat minimal $1$ anak berfenotipe rambut pendek keriting adalah:\n$$P(\\text{minimal } 1) = 1 - \\frac{625}{1.296} = \\frac{671}{1.296}.$$\nKarena $671 > \\frac{1.296}{2} = 648$, maka $\\frac{671}{1.296} > \\frac{1}{2} = 50\\%$. Jadi, pernyataan ini benar.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt:
            'Jika diasumsikan tidak ada faktor lain yang memengaruhi, suatu populasi yang mengalami persilangan acak akan mengalami peningkatan frekuensi alel $D$ setiap generasi, sedangkan frekuensi alel pada gen $E$ tidak mengalami perubahan.\n\nA. Benar\nB. Salah',
          answer: 'A. Benar',
          principle:
            'Eliminasi terus-menerus zigot homozigot letal $dd$ menyebabkan seleksi alam menurunkan frekuensi alel $d$ (meningkatkan frekuensi $D$) setiap generasi, sedangkan lokus $E$ yang netral tetap berada dalam kesetimbangan Hardy-Weinberg.',
          solution:
            'Pada lokus $D$, walaupun perkawinan berlangsung acak tanpa mutasi, migrasi, maupun hanyutan genetik, syarat kesetimbangan Hardy-Weinberg tidak terpenuhi karena terdapat seleksi absolut terhadap homozigot resesif letal ($dd$, kebugaran $w_{dd} = 0$). Pada setiap generasi, seluruh zigot $dd$ mati sebelum bereproduksi sehingga salinan alel $d$ terus berkurang dan frekuensi alel $D$ meningkat secara progresif. Sebaliknya, pada lokus $E$ tidak terdapat perbedaan kebugaran di antara $EE$, $Ee$, maupun $ee$, dan kedua lokus bersegregasi bebas dalam perkawinan acak, sehingga frekuensi alel $E$ dan $e$ tetap konstan dari generasi ke generasi. Jadi, pernyataan ini benar.',
          rubric: OK
        }
      ]
    },
    {
      no: 5,
      title: 'Faktor Sumber Variasi Genetik dalam Evolusi (Soal Asli No. 38)',
      marks: 4,
      stem: 'Variasi genetik merupakan salah satu syarat terjadinya evolusi. Variasi tersebut harus dapat diwariskan sehingga muncul sebagai bentuk alternatif suatu sifat dan terlihat pada populasi. Manakah dari pernyataan berikut yang termasuk (Benar) atau tidak termasuk (Salah) faktor penyebab muncul atau bertambahnya variasi genetik yang diwariskan?',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Berlakunya Hukum Mendel II.\n\nA. Benar\nB. Salah',
          answer: 'A. Benar',
          principle:
            'Hukum Mendel II (asortasi bebas) saat meiosis I menghasilkan kombinasi kromosom dan alel yang baru pada gamet.',
          solution:
            'Hukum Mendel II menyatakan bahwa pasangan alel pada lokus yang berbeda (atau pada kromosom nonhomolog yang berbeda) bersegregasi secara bebas selama pembentukan gamet pada metafase–anafase I meiosis. Pengaturan acak kromosom homolog maternal dan paternal di bidang ekuator menghasilkan $2^n$ kombinasi gamet yang berlainan pada organisme dengan $n$ pasang kromosom, sehingga memunculkan kombinasi sifat baru yang dapat diwariskan kepada keturunan. Jadi, pernyataan ini benar.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt:
            'Terjadinya perkawinan acak dari suatu generasi.\n\nA. Benar\nB. Salah',
          answer: 'A. Benar',
          principle:
            'Perkawinan acak (random mating) dan fertilisasi acak pada reproduksi seksual menyatukan gamet-gamet berbeda sehingga membentuk rekombinasi genotipe multilokus baru di dalam populasi.',
          solution:
            'Dalam reproduksi seksual, perkawinan acak memungkinkan penggabungan gamet secara acak dari individu-individu yang memiliki komposisi alel berbeda. Proses ini merombak dan mengombinasikan ulang alel-alel induk menjadi variasi genotipe diploid baru pada keturunan di setiap generasi, sekaligus mempertahankan tingkat heterozigositas populasi dibandingkan perkawinan sekerabat (inbreeding) yang justru menyusutkan keragaman genotipe. Jadi, pernyataan ini benar.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt:
            'Mutasi missense pada gen di sel somatik yang menghasilkan fenotipe baru.\n\nA. Benar\nB. Salah',
          answer: 'B. Salah',
          principle:
            'Mutasi pada sel somatik tidak diteruskan ke gamet sehingga tidak dapat diwariskan kepada generasi berikutnya.',
          solution:
            'Meskipun mutasi missense dapat mengubah urutan asam amino suatu protein dan memunculkan fenotipe baru pada sel atau jaringan tempat mutasi itu terjadi, mutasi pada **sel somatik** (sel tubuh) tidak terdapat di dalam sel-sel garis nutfah (germinal) penghasil sperma atau ovum. Karena tidak dapat diwariskan ke keturunan, mutasi somatik tidak menambah variasi genetik terwariskan yang menjadi bahan bakar evolusi populasi. Jadi, pernyataan ini salah.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt:
            'Mutasi frameshift pada gen yang menyebabkan berhentinya proses pertumbuhan dan perkembangan di usia muda.\n\nA. Benar\nB. Salah',
          answer: 'B. Salah',
          principle:
            'Mutasi yang mengakibatkan kematian atau kegagalan perkembangan sebelum individu mencapai usia reproduksi tidak dapat diwariskan ke populasi.',
          solution:
            'Mutasi frameshift (pergeseran kerangka baca akibat insersi atau delesi basa bukan kelipatan tiga) mengubah pembacaan seluruh kodon di hilir mutasi dan kerap menghasilkan protein nonfungsional atau terpotong. Apabila mutasi tersebut menghentikan pertumbuhan dan perkembangan individu di usia muda sebelum sempat bereproduksi, maka mutasi itu tidak pernah diturunkan kepada keturunan dan langsung tersingkir dari lungkang gen populasi. Jadi, pernyataan ini salah.',
          rubric: OK
        }
      ]
    },
    {
      no: 6,
      title: 'Jetlag dan Regulasi Ritme Sirkadian Manusia (Soal Asli No. 42)',
      marks: 4,
      stem: 'Jetlag merupakan kelelahan berlebih dan kemunculan efek yang dirasakan seseorang setelah melakukan penerbangan jarak jauh yang melintasi zona waktu yang berbeda. Efek-efek dari jetlag antara lain: siklus tidur terganggu, tingkat energi menurun, nafsu makan dan pencernaan terganggu, menjadi moody, mudah cemas dan tersinggung, sakit kepala, kelelahan di siang hari, kurang terjaga, serta performa kerja menurun. Tentukan apakah setiap pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Kondisi ini terkait dengan circadian cycle dan lunar cycle.\n\nA. Benar\nB. Salah',
          answer: 'B. Salah',
          principle:
            'Jetlag merupakan gangguan akibat ketidaksinkronan jam biologis internal berperiode $\\sim 24$ jam (ritme sirkadian) dengan siklus siang–malam zona waktu baru, dan tidak berkaitan dengan siklus bulan (lunar cycle).',
          solution:
            'Siklus tidur–bangun, suhu tubuh, metabolisme pencernaan, dan pelepasan hormon pada manusia dikendalikan oleh jam biologis sirkadian (circadian cycle, periode sekitar $24$ jam) yang berpusat di nukleus suprakiasmatik (SCN) hipotalamus. Penerbangan cepat lintas zona waktu menyebabkan ketidaksesuaian fase antara jam sirkadian internal dan waktu terang–gelap setempat. Sebaliknya, siklus lunar (siklus fase bulan berperiode $\\sim 29{,}5$ hari) tidak mengatur kejadian jetlag. Jadi, pernyataan ini salah.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt:
            'Tubuh manusia mengandalkan pemaparan oleh sinar matahari untuk mengatur siklus tidurnya.\n\nA. Benar\nB. Salah',
          answer: 'A. Benar',
          principle:
            'Cahaya matahari berfungsi sebagai penanda waktu eksternal utama (zeitgeber) yang diterima fotoreseptor retina menuju SCN untuk menyelaraskan ritme sirkadian tidur–bangun.',
          solution:
            'Paparan sinar matahari ditangkap oleh sel ganglion retina fotosensitif intrinsik (ipRGC) yang memiliki fotopigmen melanopsin. Impuls saraf dikirim melalui traktus retinohipotalamikus menuju nukleus suprakiasmatik (SCN) di hipotalamus. Sinyal cahaya pada siang hari menekan sekresi melatonin oleh kelenjar pineal agar tubuh tetap terjaga, sedangkan kondisi gelap memungkinkan pelepasan melatonin untuk memicu tidur. Oleh sebab itu, pemaparan sinar matahari pada waktu yang tepat merupakan mekanisme utama tubuh untuk mengatur dan menyinkronkan ulang siklus tidur. Jadi, pernyataan ini benar.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt:
            'Faktor yang terlibat pada kondisi perilaku spesifik ini antara lain melatonin, GABA, dan adrenalin.\n\nA. Benar\nB. Salah',
          answer: 'A. Benar',
          principle:
            'Regulasi tidur–bangun dan gejala fisiologis jetlag melibatkan koordinasi hormon sirkadian (melatonin), neurotransmiter inhibitor tidur (GABA), serta hormon katekolamin/stres (adrenalin).',
          solution:
            'Ketiga senyawa tersebut terlibat langsung dalam mekanisme siklus tidur dan manifestasi jetlag:\n- **Melatonin** disekresikan kelenjar pineal saat gelap untuk menyinkronkan fase tidur sirkadian.\n- **GABA** ($\\gamma$-aminobutyric acid) adalah neurotransmiter inhibitor utama di SCN dan nukleus preoptik ventrolateral (VLPO) yang meredam pusat kewaspadaan selama fase tidur.\n- **Adrenalin** (epinefrin) bersama aksis stres simpatik mengatur tingkat keterjagaan dan fluktuasi energi harian; disregulasi ritmenya selama jetlag berkontribusi pada kelelahan siang hari, kecemasan, dan perubahan suasana hati. Jadi, pernyataan ini benar.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt:
            'Jetlag dapat dicegah dengan mengonsumsi kopi dalam jumlah banyak.\n\nA. Benar\nB. Salah',
          answer: 'B. Salah',
          principle:
            'Kafein hanya menghambat reseptor adenosin untuk menutupi kantuk sementara, tetapi tidak menyetel ulang jam sirkadian di SCN sehingga tidak dapat mencegah jetlag.',
          solution:
            'Kafein dalam kopi bekerja sebagai antagonis reseptor adenosin di sistem saraf pusat yang menunda rasa kantuk sesaat. Namun, kafein tidak menyinkronkan ulang osilator sirkadian di nukleus suprakiasmatik (SCN) terhadap zona waktu baru. Mengonsumsi kopi dalam jumlah berlebihan justru dapat memperparah insomnia ketika waktu tidur malam tiba di lokasi tujuan, meningkatkan kecemasan, mengiritasi saluran cerna, dan memicu efek diuretik saat penerbangan. Jadi, pernyataan ini salah.',
          rubric: OK
        }
      ]
    }
  ]
};
