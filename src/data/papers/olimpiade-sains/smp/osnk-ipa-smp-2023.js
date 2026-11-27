/**
 * Paket Soal Terstruktur: OSN-K IPA SMP 2023 (60 soal pilihan majemuk lengkap)
 * Sumber: SOAL OSNK IPA 2023.pdf (Bagian Biologi 1–30 dan Bagian Fisika 31–60; 6 gambar soal dipulihkan ke WebP).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai konsep dan pembahasan.' }];

export default {
  id: 'osnk-ipa-smp-2023',
  slug: 'osnk-ipa-smp-2023',
  subject: 'olimpiade-sains',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'OSN-K IPA SMP 2023: fisika, biologi, dan kimia terpadu',
  relatedChapterIds: [
    'ipa8-bab1-sel',
    'ipa8-bab2-struktur-fungsi-tubuh',
    'ipa8-bab3-usaha-energi-pesawat-sederhana',
    'ipa8-bab4-getaran-gelombang-cahaya'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K IPA SMP 2023',
  totalMarks: 60,
  instructions:
    'Kerjakan seluruh 60 soal pilihan majemuk berikut sesuai naskah resmi OSN-K IPA SMP 2023. Setiap jawaban benar bernilai 1 poin (total 60 poin), terbagi atas Biologi (nomor 1–30) dan Fisika (nomor 31–60) yang mencakup pilihan ganda tunggal, pilihan majemuk 1-2-3-4, serta soal sebab-akibat.',
  source: {
    org: 'OSN-K',
    file: 'SOAL OSNK IPA 2023.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian I: Biologi — Pilihan Ganda',
      marks: 10,
      stem: 'Pilihlah jawaban A, B, C, atau D yang paling tepat untuk setiap soal berikut (10 soal, nomor 1–10; masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-smp-2023/fig-1.webp',
              caption: 'Percobaan pertukaran gas antara tikus dan tumbuhan hijau di dalam sungkup kaca tertutup.',
              alt: 'Dua baris ilustrasi percobaan sungkup kaca tertutup: baris atas berisi seekor tikus yang lemas setelah waktu tertentu, sedangkan baris bawah berisi tikus bersama tanaman pot hijau yang tetap hidup.'
            }
          ],
          prompt:
            'Pada kegiatan pembelajaran praktikum biologi dilakukan percobaan dan hasilnya ditunjukkan seperti pada gambar di bawah ini.\n\nBerdasarkan percobaan tersebut, kesimpulan yang sesuai adalah ....\n\nA. tikus membutuhkan oksigen yang dihasilkan tumbuhan untuk respirasi\nB. tikus mengalami kematian karena tertutup oleh kaca penutup\nC. tumbuhan membutuhkan oksigen untuk menghasilkan karbohidrat\nD. tumbuhan membutuhkan karbon dioksida yang dihasilkan tikus untuk respirasi',
          answer: 'A. tikus membutuhkan oksigen yang dihasilkan tumbuhan untuk respirasi',
          principle:
            'Fotosintesis pada tumbuhan hijau menghasilkan gas oksigen ($\\text{O}_2$) sebagai produk sampingan yang diperlukan hewan untuk melakukan respirasi aerob.',
          solution:
            'Pada percobaan Priestley yang digambarkan:\n- Pada sungkup kaca pertama (tanpa tumbuhan), tikus mengalami kematian karena oksigen di dalam ruang tertutup habis terpakai untuk respirasi dan digantikan oleh karbon dioksida ($\\text{CO}_2$).\n- Pada sungkup kaca kedua (dengan tumbuhan hijau dalam pot), tikus tetap hidup karena tumbuhan melakukan fotosintesis yang menyerap $\\text{CO}_2$ dan melepaskan $\\text{O}_2$, sehingga pasokan oksigen untuk respirasi tikus terjaga.\n\nPilihan B tidak menjelaskan peran tumbuhan, pilihan C keliru karena tumbuhan menyerap $\\text{CO}_2$ dan air untuk membentuk karbohidrat, dan pilihan D keliru karena tumbuhan menggunakan $\\text{CO}_2$ untuk fotosintesis (bukan respirasi). Jadi, kesimpulan yang tepat adalah pilihan **A**.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Jaringan yang berfungsi untuk tempat menyimpan cadangan makanan pada akar tanaman umbi-umbian adalah ....\n\nA. korteks\nB. endodermis\nC. perisikel\nD. empulur',
          answer: 'A. korteks',
          principle:
            'Korteks akar tersusun atas banyak lapisan sel parenkim berdinding tipis dengan vakuola besar yang berfungsi menyimpan cadangan makanan (misalnya amilum pada umbi akar).',
          solution:
            'Tinjauan fungsi masing-masing jaringan penyusun akar:\n- **Korteks:** daerah di antara epidermis dan endodermis yang didominasi jaringan parenkim penyimpan cadangan makanan.\n- **Endodermis:** lapisan pembatas antara korteks dan silinder pusat yang memiliki pita Kaspari untuk mengatur aliran air dan mineral.\n- **Perisikel (perikambium):** lapisan terluar silinder pusat yang berperan membentuk cabang akar (akar lateral).\n- **Empulur:** jaringan dasar di bagian tengah silinder pusat (sering tidak berkembang pada akar dikotil).\n\nOleh karena itu, jaringan penyimpan cadangan makanan pada akar umbi-umbian adalah **korteks** (pilihan **A**).',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Tipe ekosistem yang mempunyai kelompok organisme yang mampu berfotosintesis dalam jumlah sedikit adalah ....\n\nA. heterotrofik\nB. autotrofik\nC. pionir\nD. stabil',
          answer: 'A. heterotrofik',
          principle:
            'Ekosistem heterotrofik dicirikan oleh sedikitnya produsen fotosintetik sehingga aliran energinya bergantung pada masukan bahan organik dari luar sistem (alokton).',
          solution:
            'Berdasarkan sumber energinya, ekosistem dibedakan menjadi ekosistem autotrofik dan ekosistem heterotrofik:\n- **Ekosistem autotrofik** didominasi oleh organisme berklorofil/fotosintetik (produsen) yang mampu menyusun bahan organik secara mandiri.\n- **Ekosistem heterotrofik** memiliki organisme fotosintetik dalam jumlah sangat sedikit (atau bahkan tidak ada, misalnya ekosistem gua gelap, dasar laut dalam, atau aliran sungai yang tertutup kanopi lebat), sehingga didominasi oleh konsumen dan pengurai yang bergantung pada pasokan materi organik dari luar.\n\nJadi, jawaban yang tepat adalah **heterotrofik** (pilihan **A**).',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Sel makhluk hidup yang hanya mempunyai organel tanpa lapisan membran adalah ....\n\nA. jamur\nB. bakteri\nC. lumut\nD. amoeba',
          answer: 'B. bakteri',
          principle:
            'Sel prokariotik (seperti bakteri) tidak memiliki nukleus maupun organel bermembran (mitokondria, retikulum endoplasma, badan Golgi), melainkan hanya memiliki ribosom yang tidak bermembran.',
          solution:
            'Jamur (Fungi), lumut (Plantae), dan *Amoeba* (Protista) semuanya merupakan organisme **eukariotik** yang selnya memiliki inti bermembran serta berbagai organel bermembran (mitokondria, RE, badan Golgi, lisosom/vakuola). Sebaliknya, **bakteri** termasuk organisme **prokariotik** yang tidak memiliki organel berlapis membran dan hanya memiliki organel non-membran berupa ribosom ($70\\text{S}$). Jadi, jawabannya adalah **bakteri** (pilihan **B**).',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Sistem imun pada serangga diperankan oleh sel ....\n\nA. hemosit\nB. trombosit\nC. leukosit\nD. limfosit',
          answer: 'A. hemosit',
          principle:
            'Serangga memiliki sistem peredaran darah terbuka berisi hemolimfa, dengan sel-sel bebas bernama hemosit yang berfungsi dalam pertahanan imun (fagositosis, enkapsulasi, dan koagulasi).',
          solution:
            'Pada serangga (Arthropoda), cairan sirkulasinya disebut hemolimfa, dan sel darah yang berperan dalam sistem kekebalan bawaan (seperti fagositosis patogen, nodulasi, dan pembekuan) adalah **hemosit**. Sementara itu, trombosit, leukosit, dan limfosit merupakan komponen sel darah pada hewan vertebrata.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Impuls rangsang terjadi di sepanjang akson pada saat saraf dalam kondisi ....\n\nA. depolarisasi\nB. repolarisasi\nC. hiperpolarisasi\nD. polarisasi',
          answer: 'A. depolarisasi',
          principle:
            'Penjalaran impuls saraf (potensial aksi) terjadi akibat pembukaan saluran $\\text{Na}^+$ bergerbang voltase sehingga ion $\\text{Na}^+$ masuk ke dalam akson dan menyebabkan kondisi depolarisasi.',
          solution:
            'Tahapan potensial membran pada neuron adalah sebagai berikut:\n- **Polarisasi (istirahat):** bagian dalam membran akson bermuatan lebih negatif dibanding luar ($\\approx -70\\text{ mV}$).\n- **Depolarisasi:** saat ada rangsang ambang, kanal $\\text{Na}^+$ terbuka dan ion $\\text{Na}^+$ masuk ke dalam akson, membalikkan muatan menjadi lebih positif dan memicu potensial aksi yang merambat sebagai impuls saraf sepanjang akson.\n- **Repolarisasi:** kanal $\\text{Na}^+$ menutup dan kanal $\\text{K}^+$ terbuka sehingga $\\text{K}^+$ keluar mengembalikan potensial menuju keadaan istirahat.\n- **Hiperpolarisasi:** potensial membran sesaat lebih negatif daripada potensial istirahat sebelum kembali pulih.\n\nJadi, impuls rangsang terjadi saat saraf berada dalam kondisi **depolarisasi** (pilihan **A**).',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Perkawinan antara ibu normal heterozigot dan ayah albino dapat menghasilkan anak perempuan albino dengan peluang sebesar ... %.\n\nA. $100$\nB. $75$\nC. $50$\nD. $25$',
          answer: 'D. $25$',
          principle:
            'Albino dikendalikan alel resesif autosomal ($a$). Peluang dua kejadian bebas (genotipe anak albino dan jenis kelamin perempuan) dikalikan: $P(\\text{albino} \\cap \\text{perempuan}) = P(\\text{albino}) \\times P(\\text{perempuan})$.',
          solution:
            'Misalkan $A$ adalah alel normal (dominan) dan $a$ adalah alel albino (resesif).\n- Ibu normal heterozigot bergenotipe $Aa$.\n- Ayah albino bergenotipe $aa$.\n\nPersilangan $Aa \\times aa$ menghasilkan gamet ibu ($A$, $a$) dan gamet ayah ($a$), sehingga keturunannya memiliki rasio genotipe:\n$$\\frac{1}{2}\\, Aa \\text{ (normal pembawa)} : \\frac{1}{2}\\, aa \\text{ (albino)}.$$\nPeluang lahirnya anak albino adalah $\\frac{1}{2}$ dan peluang lahirnya anak perempuan adalah $\\frac{1}{2}$. Jadi, peluang menghasilkan anak perempuan albino adalah:\n$$P = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4} = 25\\%.$$',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Kromosom dengan sentromer yang terletak di median sehingga terbagi menjadi dua lengan yang sama dan berbentuk seperti huruf V dinamakan kromosom ....\n\nA. metasentris\nB. submetasentris\nC. akrosentris\nD. telosentris',
          answer: 'A. metasentris',
          principle:
            'Berdasarkan letak sentromernya, kromosom dengan sentromer tepat di tengah (median) membagi kromatid menjadi dua lengan sama panjang dan tampak berbentuk huruf V saat anafase (metasentris).',
          solution:
            'Pengelompokan bentuk kromosom berdasarkan posisi sentromer:\n- **Metasentris:** sentromer tepat di tengah (median), kedua lengan sama panjang, saat anafase tampak berbentuk huruf V.\n- **Submetasentris:** sentromer agak bergeser dari tengah (submedian), satu lengan lebih pendek dari lengan lainnya, berbentuk seperti huruf L atau J.\n- **Akrosentris:** sentromer terletak dekat ujung kromosom sehingga satu lengan sangat pendek dan lengan lainnya sangat panjang.\n- **Telosentris:** sentromer tepat di ujung (terminal), hanya memiliki satu lengan.\n\nJadi, jawabannya adalah **metasentris** (pilihan **A**).',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Keanekaragaman makhluk hidup dapat ditentukan dengan menghitung jumlah ....\n\nA. spesies dalam suatu habitat\nB. individu dalam suatu populasi\nC. keanekaragaman morfologi dalam suatu spesies\nD. makanan yang tersedia dalam suatu lingkungan',
          answer: 'A. spesies dalam suatu habitat',
          principle:
            'Salah satu indikator utama keanekaragaman hayati (keanekaragaman spesies) di suatu ekosistem adalah kekayaan spesies (*species richness*), yaitu banyaknya spesies berbeda dalam suatu habitat.',
          solution:
            'Keanekaragaman hayati pada tingkat komunitas atau habitat umumnya diukur dari **jumlah spesies berbeda** yang menghuni habitat tersebut (kekayaan spesies) beserta kemerataan kelimpahannya. Jumlah individu dalam satu populasi (pilihan B) hanya mengukur ukuran/kepadatan populasi satu spesies, variasi morfologi dalam satu spesies (pilihan C) hanya menyangkut keanekaragaman intraspesies/genetik, dan ketersediaan makanan (pilihan D) merupakan faktor lingkungan. Jadi, pilihan **A** paling tepat.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Perhatikan karakteristik berikut:\n1. fisik\n2. perilaku\n3. genetik\n\nVariasi dalam suatu spesies adalah perbedaan dalam karakteristik nomor ....\n\nA. $3$\nB. $1$ dan $3$\nC. $2$ dan $3$\nD. $1$, $2$, dan $3$',
          answer: 'D. $1$, $2$, dan $3$',
          principle:
            'Variasi intraspesies mencakup keragaman pada tingkat genetik maupun ekspresi fenotipenya berupa ciri fisik (morfologi/fisiologi) dan perilaku.',
          solution:
            'Individu-individu dalam satu spesies yang sama tidak identik satu sama lain. Variasi intraspesies meliputi perbedaan:\n1. **Fisik (morfologi/anatomi/fisiologi):** misalnya tinggi badan, warna bunga, atau bentuk paruh.\n2. **Perilaku (etologi):** misalnya variasi lagu kicauan burung atau pola migrasi/mencari makan.\n3. **Genetik:** perbedaan susunan alel/DNA yang mendasari variasi sifat yang diwariskan.\n\nKetiga aspek tersebut merupakan komponen variasi dalam suatu spesies, sehingga jawabannya adalah **1, 2, dan 3** (pilihan **D**).',
          rubric: OK
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian II: Biologi — Pilihan Majemuk (1, 2, 3, 4)',
      marks: 10,
      stem: 'Pilihlah satu kombinasi jawaban A, B, C, atau D yang paling tepat untuk setiap soal berikut (10 soal, nomor 11–20; masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '11',
          marks: 1,
          prompt:
            'Perhatikan pernyataan berikut:\n1. keluarnya cairan dari ujung daun jambu\n2. menguncupnya daun putri malu saat disentuh\n3. adanya bunga pada tanaman padi\n4. terdapatnya duri pada tanaman kaktus\n\nCiri makhluk hidup yang menunjukkan kemampuan berkembang, beradaptasi, dan peka terhadap rangsang secara berurutan adalah ....\n\nA. $1, 2, 3$\nB. $2, 3, 4$\nC. $3, 4, 1$\nD. $4, 1, 2$',
          answer: 'C. $3, 4, 1$',
          principle:
            'Berkembang ditunjukkan oleh perubahan menuju kedewasaan/fase reproduktif (munculnya bunga), adaptasi oleh penyesuaian struktur tubuh terhadap lingkungan (duri kaktus), dan iritabilitas oleh tanggapan terhadap rangsang.',
          solution:
            'Identifikasi ciri makhluk hidup pada tiap pernyataan:\n- **Pernyataan 3** (adanya bunga pada tanaman padi): menunjukkan **perkembangan** menuju fase reproduktif/dewasa.\n- **Pernyataan 4** (terdapatnya duri pada tanaman kaktus): menunjukkan **adaptasi** morfologi untuk mengurangi penguapan di lingkungan kering.\n- **Pernyataan 2** (menguncupnya daun putri malu saat disentuh): menunjukkan **peka terhadap rangsang** (iritabilitas/seismonasti), sedangkan **pernyataan 1** (keluarnya cairan dari ujung daun melalui hidatoda/gutasi) merupakan bentuk pengeluaran/ekskresi akibat tekanan akar dan kelembapan tinggi.\n\nDari empat pilihan yang tersedia pada naskah resmi, hanya pilihan **C ($3, 4, 1$)** yang menempatkan ciri berkembang ($3$) dan beradaptasi ($4$) pada urutan pertama dan kedua (pada naskah asli angka ketiga tertulis $1$ alih-alih $2$). Oleh karena itu, pilihan yang paling sesuai adalah **C**.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Perhatikan ciri-ciri jaringan di bawah ini:\n1. dinding tebal\n2. tidak terdapat ruang antar sel\n3. mengandung sel sklerenkim\n4. mengandung sel parenkim\n\nEpidermis dan korteks tanaman jagung memiliki karakteristik yang ditunjukkan oleh ciri jaringan nomor ....\n\nA. $1, 2, 3$\nB. $2, 3, 4$\nC. $1, 3, 4$\nD. $1, 2, 4$',
          answer: 'D. $1, 2, 4$',
          principle:
            'Jaringan epidermis tersusun sangat rapat tanpa ruang antarsel dan memiliki dinding luar yang menebal/berkutikula, sedangkan jaringan korteks tersusun atas sel-sel parenkim.',
          solution:
            'Tinjau karakteristik epidermis dan korteks pada tanaman jagung (*Zea mays*):\n- **Epidermis:** berfungsi sebagai pelindung terluar sehingga sel-selnya tersusun rapat **tidak terdapat ruang antar sel** (nomor 2) dan memiliki **dinding tebal** terutama pada sisi luar yang dilapisi kutikula/silika (nomor 1).\n- **Korteks:** merupakan jaringan dasar di bawah epidermis yang tersusun terutama oleh **sel parenkim** berdinding tipis (nomor 4) untuk menyimpan cadangan makanan maupun pertukaran udara.\n- Pernyataan 3 (mengandung sel sklerenkim) lebih mencirikan jaringan penyokong/penguat (sklerenkim seludang berkas pengangkut), bukan penyusun utama epidermis maupun parenkim korteks.\n\nJadi, jawaban yang tepat adalah **1, 2, 4** (pilihan **D**).',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Berikut ini jenis interaksi dalam suatu komunitas:\n1. herbivori\n2. kompetisi\n3. parasitisme\n4. predasi\n\nJenis interaksi yang memberikan keuntungan pada salah satu pihak namun merugikan pihak lain adalah ....\n\nA. $1, 2, 4$\nB. $2, 3, 4$\nC. $1, 3, 4$\nD. $1, 2, 3, 4$',
          answer: 'C. $1, 3, 4$',
          principle:
            'Interaksi tipe $(+, -)$ menguntungkan satu pihak dan merugikan pihak lain; contohnya meliputi predasi, herbivori, dan parasitisme, sedangkan kompetisi bertipe $(-, -)$.',
          solution:
            'Evaluasi tipe interaksi antarspesies:\n1. **Herbivori $(+, -)$:** herbivora memperoleh nutrisi (untung), sedangkan tumbuhan yang dimakan dirugikan.\n2. **Kompetisi $(-, -)$:** kedua pihak yang memperebutkan sumber daya terbatas sama-sama dirugikan.\n3. **Parasitisme $(+, -)$:** parasit mendapat nutrisi/inang (untung), sedangkan inang dirugikan.\n4. **Predasi $(+, -)$:** predator memperoleh makanan (untung), sedangkan mangsa mati/dirugikan.\n\nJadi, interaksi yang menguntungkan satu pihak dan merugikan pihak lain ditunjukkan oleh nomor **1, 3, 4** (pilihan **C**).',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Berikut ini tingkatan organisasi kehidupan makhluk hidup:\n1. sel\n2. organ\n3. jaringan\n4. sistem organ\n\nTingkatan organisasi kehidupan yang dapat kita pelajari pada jantung manusia adalah ....\n\nA. $1, 2, 3$\nB. $2, 3, 4$\nC. $1, 3, 4$\nD. $1, 2, 3,$ dan $4$',
          answer: 'A. $1, 2, 3$',
          principle:
            'Urutan tingkat organisasi kehidupan di dalam sebuah organ adalah sel $\\rightarrow$ jaringan $\\rightarrow$ organ, sedangkan sistem organ tersusun atas beberapa organ yang bekerja sama.',
          solution:
            'Jantung manusia merupakan sebuah **organ** (nomor 2) yang tersusun atas berbagai macam **jaringan** (nomor 3), seperti jaringan otot jantung, jaringan ikat, jaringan epitel, dan jaringan saraf; masing-masing jaringan tersebut dibentuk oleh **sel**-sel penyusunnya (nomor 1, misalnya sel otot jantung/kardiomiosit). Adapun **sistem organ** (nomor 4, yaitu sistem peredaran darah) merupakan tingkatan di atas jantung yang melibatkan organ lain seperti pembuluh darah. Jadi, tingkatan yang dipelajari pada jantung adalah **1, 2, 3** (pilihan **A**).',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Perhatikan beberapa kelenjar di bawah ini:\n1. kelenjar submaksila\n2. kelenjar parotis\n3. kelenjar submandibular\n4. kelenjar sublingual\n\nSaliva yang terlibat dalam sistem pencernaan dihasilkan oleh kelenjar nomor ....\n\nA. $1, 2, 3$\nB. $2, 3, 4$\nC. $3, 4, 1$\nD. $4, 1, 2$',
          answer: 'B. $2, 3, 4$',
          principle:
            'Manusia memiliki tiga pasang kelenjar ludah utama penghasil saliva: kelenjar parotis (dekat telinga), kelenjar submandibularis (di bawah rahang bawah), dan kelenjar sublingualis (di bawah lidah).',
          solution:
            'Dalam anatomi manusia dikenal tiga pasang kelenjar saliva utama berdasarkan tata nama standar modern:\n- **Kelenjar parotis** (nomor 2), terletak di depan dan bawah telinga.\n- **Kelenjar submandibular** (nomor 3), terletak di bawah rahang bawah (nama lama untuk kelenjar ini adalah kelenjar submaksila).\n- **Kelenjar sublingual** (nomor 4), terletak di dasar rongga mulut di bawah lidah.\n\nKarena submaksila (1) hanyalah sinonim lama dari submandibular (3), tiga pasang kelenjar ludah yang berbeda ditunjukkan oleh nomor **2, 3, 4** (pilihan **B**).',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Pada bagian glomerulus ginjal terjadi proses filtrasi senyawa berikut ini:\n1. air\n2. glukosa\n3. urea\n4. $\\text{NaCl}$\n\nSenyawa hasil filtrasi yang direabsorbsi pada tubulus proksimal adalah senyawa nomor ....\n\nA. $1, 2, 3$\nB. $2, 3, 4$\nC. $3, 4, 1$\nD. $4, 2, 1$',
          answer: 'D. $4, 2, 1$',
          principle:
            'Tubulus kontortus proksimal menyerap kembali (reabsorpsi) hampir seluruh zat berguna dari filtrat glomerulus, terutama seluruh glukosa, asam amino, sebagian besar air, serta ion-ion $\\text{Na}^+$ dan $\\text{Cl}^-$.',
          solution:
            'Proses pembentukan urine di nefron meliputi filtrasi di glomerulus, reabsorpsi terutama di tubulus kontortus proksimal, dan augmentasi di tubulus distal. Zat-zat berguna yang terkandung dalam urine primer hasil filtrasi, yakni **air** (1), **glukosa** (2, direabsorpsi $100\\%$ pada kondisi normal), dan garam **$\\text{NaCl}$** (4), diserap kembali ke pembuluh kapiler peritubular. Sementara itu, **urea** (3) merupakan limbah bernitrogen utama yang dipertahankan dalam filtrat untuk diekskresikan bersama urine. Jadi, jawabannya adalah **4, 2, 1** (pilihan **D**).',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Perhatikan jumlah autosom berikut:\n1. $44$ buah\n2. $46$ buah\n3. $22$ pasang\n4. $23$ pasang\n\nPada manusia jumlah autosom yang benar adalah ....\n\nA. $1, 2$\nB. $3, 4$\nC. $2, 4$\nD. $1, 3$',
          answer: 'D. $1, 3$',
          principle:
            'Sel somatik manusia bersifat diploid ($2n = 46$ kromosom atau $23$ pasang), terdiri atas $44$ buah ($22$ pasang) autosom dan $2$ buah ($1$ pasang) gonosom/kromosom seks.',
          solution:
            'Pada sel tubuh (somatik) manusia terdapat total $46$ kromosom ($23$ pasang), yang terbagi menjadi:\n- **Autosom (kromosom tubuh):** berjumlah **$44$ buah** atau **$22$ pasang** (nomor 1 dan 3).\n- **Gonosom (kromosom seks):** berjumlah $2$ buah atau $1$ pasang ($XX$ pada perempuan, $XY$ pada laki-laki).\n\nAdapun $46$ buah (2) dan $23$ pasang (4) adalah jumlah seluruh kromosom sel somatik, bukan autosom saja. Jadi, jawaban yang benar adalah **1, 3** (pilihan **D**).',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Perhatikan beberapa molekul di bawah ini:\n1. gula berupa deoksiribosa\n2. pospat berupa $\\text{PO}_4$\n3. basa purin terdiri guanin dan adenin\n4. basa pirimidin terdiri urasil dan sitosin\n\nMolekul penyusun DNA adalah molekul nomor ....\n\nA. $1, 2, 3$\nB. $1, 3$\nC. $2, 4$\nD. $1, 2, 3, 4$',
          answer: 'A. $1, 2, 3$',
          principle:
            'Setiap nukleotida DNA tersusun atas gula deoksiribosa, gugus fosfat ($\\text{PO}_4^{3-}$), dan basa nitrogen berupa purin (adenin, guanin) atau pirimidin (sitosin, timin—bukan urasil).',
          solution:
            'Periksa setiap penyusun nukleotida DNA:\n1. **Gula pentosa berupa deoksiribosa** $\\rightarrow$ benar (pada RNA gulanya ribosa).\n2. **Gugus fosfat berupa $\\text{PO}_4$** $\\rightarrow$ benar.\n3. **Basa purin terdiri atas guanin dan adenin** $\\rightarrow$ benar.\n4. **Basa pirimidin terdiri atas urasil dan sitosin** $\\rightarrow$ salah, karena pada DNA basa pirimidin adalah **timin dan sitosin**, sedangkan urasil hanya terdapat pada RNA.\n\nDengan demikian, molekul penyusun DNA ditunjukkan oleh nomor **1, 2, 3** (pilihan **A**).',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Perhatikan pernyataan berikut ini.\n1. Fotovoltaik pada proses fotosintesis menggerakkan elektron sehingga menghasilkan energi listrik.\n2. Termoelektrik pada reaksi kimia eksoterm bakteri menghasilkan panas yang menggerakkan elektron sehingga menghasilkan energi listrik.\n3. Bioelektrogenesis pada bakteri elektrogenik mampu menggerakkan elektron yang dihasilkan selama metabolisme ke elektroda untuk menghasilkan arus listrik.\n4. Fotosel yang menggunakan mikroorganisme fotosintetik menghasilkan energi listrik melalui proses kimiawi.\n\nProses pada makhluk hidup yang berpotensi menjadi sumber listrik alternatif adalah ....\n\nA. $1, 2, 3$\nB. $1, 3$\nC. $2, 4$\nD. $1, 2, 3, 4$',
          answer: 'B. $1, 3$',
          principle:
            'Energi listrik hayati dapat dipanen melalui biofotovoltaik (aliran elektron terfotosintesis dari eksitasi klorofil/fotosistem) serta bioelektrogenesis pada sel bahan bakar mikrobial (*microbial fuel cell*, MFC).',
          solution:
            'Evaluasi tiap mekanisme:\n1. **Benar:** sistem biofotovoltaik memanfaatkan eksitasi elektron oleh cahaya pada proses fotosintesis (alga, sianobakteri, atau tumbuhan) yang dialirkan melalui elektroda untuk menghasilkan arus listrik.\n2. **Salah:** bakteri tidak dimanfaatkan dengan prinsip efek termoelektrik (Seebeck) dari panas reaksi eksoterm untuk membangkitkan listrik.\n3. **Benar:** bakteri elektrogenik/eksogenik (seperti *Geobacter* dan *Shewanella*) dalam *Microbial Fuel Cell* (MFC) mentransfer elektron hasil oksidasi substrat selama metabolisme secara langsung ke anoda sehingga mengalirkan arus listrik.\n4. **Salah:** fotosel semikonduktor bekerja berdasarkan efek fotolistrik/fotovoltaik fisik, bukan "proses kimiawi mikroorganisme" seperti deskripsi tersebut.\n\nJadi, proses yang benar adalah nomor **1, 3** (pilihan **B**).',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Perhatikan pernyataan berikut.\n1. Dua spesies berasal dari spesies yang berbeda.\n2. Dua spesies memiliki ciri-ciri yang mirip.\n3. Dua spesies mengalami tekanan seleksi yang serupa.\n4. Dua spesies berasal dari habitat yang sama.\n\nDua spesies yang memiliki kekerabatan analogi adalah pernyataan nomor ....\n\nA. $1, 2, 3$\nB. $1, 3$\nC. $2, 3, 4$\nD. $1, 2, 3, 4$',
          answer: 'A. $1, 2, 3$',
          principle:
            'Analogi (hasil evolusi konvergen) terjadi ketika dua spesies yang tidak berkerabat dekat (nenek moyang berbeda) mengembangkan ciri atau organ serupa fungsinya karena mengalami tekanan seleksi lingkungan yang mirip.',
          solution:
            'Struktur analog (misalnya sayap serangga dan sayap burung, atau bentuk tubuh hidrodinamik hiu dan lumba-lumba) memiliki ciri:\n1. **Berasal dari garis keturunan/spesies asal yang berbeda** (tidak memiliki nenek moyang dekat yang sama) $\\rightarrow$ benar.\n2. **Memiliki ciri-ciri atau fungsi organ yang mirip** $\\rightarrow$ benar.\n3. **Mengalami tekanan seleksi alam yang serupa** (evolusi konvergen) $\\rightarrow$ benar.\n4. **Berasal dari habitat yang sama** $\\rightarrow$ tidak selalu, karena dua spesies dapat berada di wilayah geografis/habitat berbeda yang memiliki kondisi lingkungan serupa (misalnya kaktus di gurun Amerika dan *Euphorbia* di gurun Afrika).\n\nJadi, pernyataan yang benar adalah **1, 2, 3** (pilihan **A**).',
          rubric: OK
        }
      ]
    },
    {
      no: 3,
      title: 'Bagian III: Biologi — Sebab-Akibat',
      marks: 10,
      stem: 'Untuk setiap soal sebab-akibat berikut (10 soal, nomor 21–30; masing-masing bernilai 1 poin), tentukan hubungan antara pernyataan dan alasan dengan memilih opsi A, B, C, atau D.',
      parts: [
        {
          label: '21',
          marks: 1,
          prompt:
            'Abrasi termasuk jenis interaksi yang terjadi antar komponen abiotik\nSEBAB\nPada abrasi terjadi pengikisan di bagian permukaan tanah bagian bawah oleh pergerakan air ataupun angin\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'A. Pernyataan benar, alasan benar dan ada hubungan sebab akibat',
          principle:
            'Interaksi antar komponen abiotik melibatkan proses fisis/kimiawi antara unsur tak hidup dengan unsur tak hidup lainnya, seperti pengikisan tanah/batuan oleh air atau angin.',
          solution:
            '- **Pernyataan:** Benar. Abrasi terjadi antara air laut/aliran air atau angin (komponen abiotik) dengan batuan atau tanah (komponen abiotik), sehingga termasuk interaksi antarkomponen abiotik.\n- **Alasan:** Benar. Pada proses abrasi terjadi pengikisan permukaan batuan/tanah oleh tenaga mekanik pergerakan air ataupun angin.\n- **Hubungan sebab-akibat:** Ada hubungan sebab-akibat karena mekanisme pengikisan tanah oleh air/angin (keduanya abiotik) tersebut menjelaskan mengapa abrasi digolongkan sebagai interaksi antarkomponen abiotik.\n\nJadi, jawabannya adalah **A**.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Pada tanaman, air masuk ke dalam sel epidermis melalui proses osmosis\nSEBAB\nPada akar, air masuk melalui endodermis ke jaringan xilem\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'B. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat',
          principle:
            'Osmosis masuknya air ke sel rambut akar terjadi karena perbedaan potensial air/konsentrasi zat terlarut antara tanah dan vakuola sel epidermis, bukan disebabkan oleh aliran lanjut dari endodermis ke xilem.',
          solution:
            '- **Pernyataan:** Benar. Air tanah berpotensial air lebih tinggi (hipotonik) masuk ke dalam sel epidermis/rambut akar secara osmosis.\n- **Alasan:** Benar. Setelah melewati epidermis dan korteks, air bergerak melalui endodermis (via jalur simplas menembus pita Kaspari) menuju jaringan pembuluh xilem akar.\n- **Hubungan sebab-akibat:** Tidak ada hubungan sebab-akibat. Aliran air dari endodermis ke xilem adalah tahap pengangkutan lanjutan, bukan penyebab terjadinya peristiwa osmosis di sel epidermis.\n\nJadi, jawabannya adalah **B**.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Spesies invasif yang menyebar ke berbagai habitat baru seringkali membahayakan keberadaan spesies lain\nSEBAB\nSpesies invasif umumnya tidak mampu beradaptasi dengan lingkungan yang baru kemudian mati sehingga bangkainya mencemari dan membahayakan keberadaan spesies lain\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'C. Salah satu pernyataan atau alasan benar',
          principle:
            'Spesies invasif justru mampu beradaptasi dengan cepat, berkembang biak pesat tanpa predator alami di habitat baru, lalu mendesak spesies asli melalui kompetisi atau predasi.',
          solution:
            '- **Pernyataan:** Benar. Spesies invasif kerap mengancam kelestarian spesies asli (endemik) di habitat barunya.\n- **Alasan:** Salah. Alih-alih tidak mampu beradaptasi dan mati, spesies invasif justru memiliki kemampuan adaptasi dan reproduksi yang sangat tinggi serta sedikit predator alami, sehingga mendominasi sumber daya atau memangsa spesies lokal.\n\nKarena pernyataan benar sedangkan alasan salah, jawabannya adalah **C**.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Sel tumbuhan dan sel bakteri termasuk ke dalam tipe sel prokariota\nSEBAB\nSel tumbuhan dan sel bakteri memiliki dinding sel\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'C. Salah satu pernyataan atau alasan benar',
          principle:
            'Sel tumbuhan merupakan sel eukariota (memiliki membran inti dan organel bermembran) meskipun sama-sama memiliki dinding sel seperti bakteri yang prokariota.',
          solution:
            '- **Pernyataan:** Salah. Hanya sel bakteri yang termasuk sel prokariota, sedangkan sel tumbuhan termasuk sel eukariota karena memiliki membran inti sejati dan organel bermembran.\n- **Alasan:** Benar. Baik sel tumbuhan (tersusun atas selulosa) maupun sel bakteri (tersusun atas peptidoglikan) sama-sama memiliki dinding sel.\n\nKarena salah satu (alasan) benar dan pernyataan salah, jawabannya adalah **C**.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Melatonin berfungsi dalam mengatur ritme sirkadian.\nSEBAB\nMelatonin dihasilkan oleh kelenjar pineal anterior.\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'C. Salah satu pernyataan atau alasan benar',
          principle:
            'Hormon melatonin yang mengatur siklus tidur-bangun (ritme sirkadian) disekresikan oleh kelenjar pineal (epifisis) di otak, yang tidak memiliki pembagian lobus anterior–posterior.',
          solution:
            '- **Pernyataan:** Benar. Hormon melatonin berperan utama mengatur ritme sirkadian (siklus biologis tidur dan terjaga).\n- **Alasan:** Salah. Melatonin memang dihasilkan oleh kelenjar pineal, tetapi kelenjar pineal bukan bagian maupun berlobus "anterior" (pembagian lobus anterior dan posterior hanya dimiliki oleh kelenjar hipofisis/pituitari).\n\nKarena pernyataan benar dan alasan salah, jawabannya adalah **C**.',
          rubric: OK
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Orang akan merasakan lapar selama berpuasa\nSEBAB\nProses pengosongan lambung manusia berlangsung dalam $12$ jam\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'C. Salah satu pernyataan atau alasan benar',
          principle:
            'Waktu pengosongan lambung manusia secara fisiologis berlangsung sekitar $2$ hingga $5$ jam setelah makan (bukan $12$ jam), dan penurunan kadar glukosa darah serta pelepasan hormon ghrelin memicu rasa lapar saat berpuasa.',
          solution:
            '- **Pernyataan:** Benar. Selama berpuasa dalam jangka waktu lama, tubuh tidak menerima asupan makanan sehingga lambung kosong, hormon ghrelin meningkat, dan timbul rasa lapar.\n- **Alasan:** Salah. Proses pengosongan lambung manusia normalnya berlangsung sekitar $2\\text{–}5$ jam (rata-rata $\\approx 4$ jam bergantung komposisi makanan), bukan $12$ jam.\n\nKarena pernyataan benar dan alasan salah, jawabannya adalah **C**.',
          rubric: OK
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Kromosom seks adalah sepasang kromosom yang selalu menentukan jenis kelamin\nSEBAB\nKromosom seks dibedakan atas dua macam yaitu kromosom X dan kromosom Y\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'B. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat',
          principle:
            'Pada genetika manusia dan mamalia, kromosom seks (gonosom) menentukan jenis kelamin dan terdiri atas kromosom $X$ dan $Y$, namun penyebutan jenis $X$ dan $Y$ tidak menjelaskan mekanisme genetik penentuan kelamin.',
          solution:
            '- **Pernyataan:** Benar dalam konteks pewarisan sifat manusia/mamalia (gonosom merupakan pasangan kromosom penentu jenis kelamin individu; catatan: di luar mamalia ada sistem lain seperti $ZW$ pada burung atau faktor suhu pada beberapa reptil).\n- **Alasan:** Benar (pada sistem penentuan jenis kelamin manusia/mamalia, kromosom seks dibedakan atas kromosom $X$ dan kromosom $Y$).\n- **Hubungan sebab-akibat:** Tidak ada hubungan sebab-akibat, karena sekadar membedakan nama kromosom menjadi $X$ dan $Y$ tidak menjelaskan penyebab mengapa kromosom seks menentukan jenis kelamin (yang ditentukan oleh ekspresi gen penentu testis seperti *SRY* pada kromosom $Y$).\n\nJadi, jawabannya adalah **B**.',
          rubric: OK
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Polidaktili adalah suatu kelainan yang disebabkan oleh gen autosomal dominan $P$.\nSEBAB\nBagi orang yang menderita penyakit ini mempunyai tambahan satu atau dua jari pada tangan dan/atau kaki.\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'B. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat',
          principle:
            'Polidaktili diwariskan melalui alel dominan autosomal ($P$) sehingga penderita ($PP$ atau $Pp$) memiliki jari tambahan; adanya jari tambahan adalah ciri/akibat, bukan penyebab kelainan genetiknya.',
          solution:
            '- **Pernyataan:** Benar. Polidaktili merupakan kelainan genetik menurun yang dikendalikan oleh gen autosomal dominan $P$ (individu normal bergenotipe homozigot resesif $pp$).\n- **Alasan:** Benar. Penderita polidaktili ditandai dengan adanya tambahan satu atau lebih jari pada tangan maupun kaki.\n- **Hubungan sebab-akibat:** Tidak ada hubungan sebab-akibat (arahnya justru terbalik: munculnya jari tambahan adalah *akibat* dari ekspresi gen $P$, bukan penyebab mengapa polidaktili diwariskan oleh gen $P$).\n\nJadi, jawabannya adalah **B**.',
          rubric: OK
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Intensitas cahaya yang masuk ke mata berpengaruh terhadap jelas atau tidaknya objek\nSEBAB\nTerlihat objek oleh mata secara jelas bergantung pada daya akomodasi mata\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'B. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat',
          principle:
            'Kejelasan penglihatan dipengaruhi oleh kecukupan intensitas cahaya (diatur oleh pupil/iris agar fotoreseptor retina terangsang optimal) serta daya akomodasi lensa mata untuk memfokuskan bayangan tepat di retina.',
          solution:
            '- **Pernyataan:** Benar. Intensitas cahaya yang terlalu redup atau terlalu menyilaukan memengaruhi ketajaman penglihatan objek pada retina.\n- **Alasan:** Benar. Agar objek terlihat tajam dan tidak kabur, lensa mata harus berakomodasi (menebal atau menipis) untuk memfokuskan bayangan tepat jatuh pada retina.\n- **Hubungan sebab-akibat:** Tidak ada hubungan sebab-akibat, karena mekanisme daya akomodasi lensa (fokus jarak benda) bukanlah penyebab pengaruh intensitas cahaya (yang diatur oleh lebar pupil).\n\nJadi, jawabannya adalah **B**.',
          rubric: OK
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Biodiversitas yang rusak dapat mengganggu keseimbangan ekosistem.\nSEBAB\nSpesies tertentu yang hilang atau terancam punah dapat mengganggu rantai makanan dan berpotensi mengganggu kelangsungan hidup spesies lain.\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'A. Pernyataan benar, alasan benar dan ada hubungan sebab akibat',
          principle:
            'Setiap spesies memiliki relung ekologis dalam jaring-jaring makanan; hilangnya satu spesies memicu gangguan berantai (efek kaskade trofik) yang merusak keseimbangan ekosistem.',
          solution:
            '- **Pernyataan:** Benar. Kerusakan keanekaragaman hayati (biodiversitas) menurunkan stabilitas dan mengganggu keseimbangan ekosistem.\n- **Alasan:** Benar. Hilangnya atau punahnya spesies tertentu memutus aliran energi dalam rantai/jaring-jaring makanan sehingga mengganggu populasi predator maupun mangsanya.\n- **Hubungan sebab-akibat:** Ada hubungan sebab-akibat karena terganggunya rantai makanan akibat hilangnya spesies itulah yang secara langsung menjelaskan mengapa kerusakan biodiversitas mengganggu keseimbangan ekosistem.\n\nJadi, jawabannya adalah **A**.',
          rubric: OK
        }
      ]
    },
    {
      no: 4,
      title: 'Bagian IV: Fisika — Pilihan Ganda',
      marks: 10,
      stem: 'Pilihlah jawaban A, B, C, atau D yang paling tepat untuk setiap soal berikut (10 soal, nomor 31–40; masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '31',
          marks: 1,
          prompt:
            'Pada tabel di bawah ini ditampilkan daftar pasangan besaran turunan dan besaran pokok penyusunnya.\n\n| No. | Besaran Turunan | Besaran Pokok |\n|---|---|---|\n| 1 | Volume | panjang |\n| 2 | Energi potensial | massa, panjang, waktu |\n| 3 | Energi kinetik | massa, kecepatan |\n| 4 | Tekanan | massa, panjang, waktu |\n| 5 | Daya listrik | tegangan listrik, arus listrik |\n\nDalam tabel tersebut, pasangan besaran turunan dan besaran pokok penyusunnya yang benar ditunjukkan oleh nomor ....\n\nA. $1, 3$ dan $4$\nB. $1, 2$ dan $4$\nC. $1, 2$ dan $5$\nD. $1, 3$ dan $5$',
          answer: 'B. $1, 2$ dan $4$',
          principle:
            'Besaran pokok mekanika terdiri atas panjang ($\\text{m}$), massa ($\\text{kg}$), dan waktu ($\\text{s}$), ditambah arus listrik ($\\text{A}$) untuk kelistrikan; kecepatan dan tegangan listrik adalah besaran turunan, bukan besaran pokok.',
          solution:
            'Periksa besaran penyusun tiap baris tabel:\n1. **Volume** ($V = p \\times l \\times t$): satuan $\\text{m}^3$, hanya tersusun dari besaran pokok **panjang** $\\rightarrow$ benar.\n2. **Energi potensial** ($E_p = m g h$): satuan $\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$, tersusun dari **massa, panjang, waktu** $\\rightarrow$ benar.\n3. **Energi kinetik** ($E_k = \\frac{1}{2}mv^2$): **kecepatan** merupakan besaran turunan, bukan besaran pokok $\\rightarrow$ salah.\n4. **Tekanan** ($P = F/A = m a / A$): satuan $\\text{kg}/(\\text{m}\\cdot\\text{s}^2)$, tersusun dari **massa, panjang, waktu** $\\rightarrow$ benar.\n5. **Daya listrik** ($P = V I$): **tegangan listrik** merupakan besaran turunan, bukan besaran pokok $\\rightarrow$ salah.\n\nJadi, pasangan yang benar ditunjukkan oleh nomor **1, 2 dan 4** (pilihan **B**).',
          rubric: OK
        },
        {
          label: '32',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-smp-2023/fig-32.webp',
              caption: 'Penampang bejana termos berdinding ganda dengan ruang vakum dan lapisan pemantul.',
              alt: 'Diagram penampang termos kaca berdinding ganda yang menunjuk bagian vakum di antara dinding, lapisan pemantul perak, dan zat panas atau dingin di dalamnya.'
            }
          ],
          prompt:
            'Sebuah bejana dirancang sebagai wadah yang dapat menjaga cairan agar tetap panas atau dingin dalam waktu yang lama. Bejana tersebut memiliki dinding ganda terbuat dari bahan kaca Pyrex berlapis perak sebagai pemantul cahaya, seperti terlihat pada gambar.\n\nRuang vakum di antara dinding kaca berperan untuk meminimalkan perpindahan panas secara ....\n\nA. konduksi dan radiasi\nB. radiasi dan konveksi\nC. konduksi dan konveksi\nD. radiasi',
          answer: 'C. konduksi dan konveksi',
          principle:
            'Perpindahan kalor secara konduksi dan konveksi memerlukan medium zat perantara, sehingga ruang hampa (vakum) menghambat keduanya; sedangkan radiasi dihambat oleh lapisan pemantul perak.',
          solution:
            'Pada termos:\n- **Ruang vakum** (hampa udara) menghilangkan molekul gas di antara kedua dinding kaca sehingga kalor tidak dapat merambat secara **konduksi** maupun **konveksi** (keduanya membutuhkan medium partikel materi).\n- **Lapisan perak mengilap** berfungsi memantulkan kembali gelombang elektromagnetik inframerah untuk meminimalkan perpindahan kalor secara **radiasi** (yang tetap dapat merambat melalui ruang hampa).\n\nJadi, ruang vakum berperan meminimalkan perpindahan panas secara **konduksi dan konveksi** (pilihan **C**).',
          rubric: OK
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Dua buah bola identik A dan B terikat pada ujung-ujung sebuah batang homogen dengan panjang $2{,}0\\text{ m}$. Batang kemudian diputar dengan sumbu putar tegak lurus batang, yang letaknya $0{,}5\\text{ m}$ dari bola A. Jika $K_A$ dan $K_B$ berturut-turut adalah energi kinetik bola A dan bola B, maka ....\n\nA. $K_A = 3K_B$\nB. $3K_A = K_B$\nC. $K_A = 9K_B$\nD. $9K_A = K_B$',
          answer: 'D. $9K_A = K_B$',
          principle:
            'Kedua bola pada batang tegar yang berputar memiliki kecepatan sudut $\\omega$ yang sama, sehingga kelajuan linearnya $v = \\omega r$ dan energi kinetiknya memenuhi $K = \\frac{1}{2} m (\\omega r)^2 \\propto r^2$.',
          solution:
            'Diketahui panjang batang $L = 2{,}0\\text{ m}$ dan dua bola identik ($m_A = m_B = m$).\n- Jarak bola A ke sumbu putar: $r_A = 0{,}5\\text{ m}$.\n- Jarak bola B ke sumbu putar: $r_B = 2{,}0 - 0{,}5 = 1{,}5\\text{ m}$.\n\nKarena kedua bola ikut berputar bersama batang dengan kecepatan sudut $\\omega$ yang sama, perbandingan energi kinetiknya adalah:\n$$\\frac{K_B}{K_A} = \\frac{\\frac{1}{2} m \\omega^2 r_B^2}{\\frac{1}{2} m \\omega^2 r_A^2} = \\left(\\frac{r_B}{r_A}\\right)^2 = \\left(\\frac{1{,}5}{0{,}5}\\right)^2 = 3^2 = 9.$$\nOleh karena itu, $K_B = 9K_A$, atau ditulis **$9K_A = K_B$** (pilihan **D**).',
          rubric: OK
        },
        {
          label: '34',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-smp-2023/fig-34.webp',
              caption: 'Grafik kecepatan terhadap waktu benda yang bergerak pada sumbu-$x$.',
              alt: 'Grafik garis lurus hijau kecepatan dalam meter per sekon pada sumbu vertikal terhadap waktu dalam detik pada sumbu horizontal, berawal di kecepatan awal 10 saat nol detik dan meningkat seragam.'
            }
          ],
          prompt:
            'Sebuah benda bergerak pada sumbu-$x$. Kecepatannya berubah terhadap waktu sebagaimana ditunjukkan oleh grafik berikut.\n\nJika posisi benda pada saat $t = 0\\text{ s}$ adalah $x = 20\\text{ m}$, posisinya pada sembarang waktu $t$ diberikan oleh ....\n\nA. $x(t) = 20 + 10t - \\frac{1}{7}t^2$\nB. $x(t) = 20 + 10t + \\frac{2}{7}t^2$\nC. $x(t) = 20 + 10t - \\frac{2}{7}t^2$\nD. $x(t) = 20 + 10t + \\frac{1}{7}t^2$',
          answer: 'D. $x(t) = 20 + 10t + \\frac{1}{7}t^2$',
          principle:
            'Grafik $v\\text{–}t$ berbentuk garis lurus menunjukkan gerak lurus berubah beraturan (GLBB) dengan percepatan konstan $a = \\frac{\\Delta v}{\\Delta t}$ dan fungsi posisi $x(t) = x_0 + v_0 t + \\frac{1}{2} a t^2$.',
          solution:
            'Dari grafik terbaca garis kecepatan melalui titik $(t = 0\\text{ s},\\, v = 10\\text{ m/s})$ dan titik kisi $(t = 14\\text{ s},\\, v = 14\\text{ m/s})$.\n- Kecepatan awal: $v_0 = 10\\text{ m/s}$.\n- Percepatan konstan:\n$$a = \\frac{14 - 10}{14 - 0} = \\frac{4}{14} = \\frac{2}{7}\\text{ m/s}^2.$$\nDengan posisi awal $x_0 = 20\\text{ m}$, posisi pada waktu $t$ memenuhi persamaan GLBB:\n$$x(t) = x_0 + v_0 t + \\frac{1}{2} a t^2 = 20 + 10t + \\frac{1}{2}\\left(\\frac{2}{7}\\right)t^2 = 20 + 10t + \\frac{1}{7}t^2.$$',
          rubric: OK
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'Sebuah wadah besar berisi minyak dengan massa jenis $0{,}9\\text{ g/cc}$. Sebuah bola dengan massa $101{,}25\\text{ g}$ ditaruh ke minyak tersebut. Jika separuh bagian bola mengapung, ini berarti ....\n\nA. massa jenis bola $0{,}5\\text{ g/cc}$\nB. volume bola $250\\text{ cc}$\nC. massa jenis bola $0{,}4\\text{ g/cc}$\nD. volume bola $225\\text{ cc}$',
          answer: 'D. volume bola $225\\text{ cc}$',
          principle:
            'Pada benda yang mengapung setimbang berlaku gaya ke atas Archimedes sama dengan berat benda: $\\rho_{\\text{fluida}} \\cdot V_{\\text{tercelup}} = m_{\\text{benda}} = \\rho_{\\text{benda}} \\cdot V_{\\text{benda}}$.',
          solution:
            'Karena separuh bagian bola mengapung di atas permukaan minyak, volume bagian bola yang tercelup adalah $V_{\\text{tercelup}} = \\frac{1}{2} V_{\\text{bola}}$.\n1. Dari kesetimbangan gaya apung:\n$$\\rho_{\\text{bola}} \\cdot V_{\\text{bola}} = \\rho_{\\text{minyak}} \\cdot \\left(\\frac{1}{2} V_{\\text{bola}}\\right) \\implies \\rho_{\\text{bola}} = \\frac{1}{2} \\times 0{,}9 = 0{,}45\\text{ g/cc}.$$\n(Pilihan A dan C salah).\n2. Hitung volume total bola:\n$$V_{\\text{bola}} = \\frac{m_{\\text{bola}}}{\\rho_{\\text{bola}}} = \\frac{101{,}25\\text{ g}}{0{,}45\\text{ g/cc}} = 225\\text{ cc}.$$\nJadi, jawaban yang benar adalah **volume bola $225\\text{ cc}$** (pilihan **D**).',
          rubric: OK
        },
        {
          label: '36',
          marks: 1,
          prompt:
            'Agar bayangan yang dihasilkan lensa konvergen bersifat maya dan berukuran $3$ kali ukuran benda, maka benda harus diletakkan di depan lensa pada jarak .... kali panjang fokus lensa.\n\nA. $2/3$\nB. $3/2$\nC. $1/3$\nD. $3/1$',
          answer: 'A. $2/3$',
          principle:
            'Untuk lensa konvergen (lensa positif, $f > 0$), bayangan maya ($s\' < 0$) yang tegak dan diperbesar $M$ kali memenuhi $M = -\\frac{s\'}{s} > 0$ dan persamaan lensa tipis $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s\'}$.',
          solution:
            'Karena bayangan bersifat maya dan diperbesar $3$ kali, perbesaran bernilai positif ($M = +3$), sehingga:\n$$M = -\\frac{s\'}{s} = 3 \\implies s\' = -3s.$$\nSubstitusikan ke persamaan lensa tipis ($f > 0$):\n$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{-3s} = \\frac{3 - 1}{3s} = \\frac{2}{3s}.$$\nSehingga diperoleh:\n$$s = \\frac{2}{3} f.$$\nJadi, benda harus diletakkan pada jarak **$2/3$** kali panjang fokus lensa (pilihan **A**).',
          rubric: OK
        },
        {
          label: '37',
          marks: 1,
          prompt:
            'Karena tertiup angin, sebuah pohon bergetar dengan frekuensi $2{,}5\\text{ Hz}$. Periode getarannya adalah ... detik.\n\nA. $2{,}5$\nB. $10$\nC. $4$\nD. $0{,}4$',
          answer: 'D. $0{,}4$',
          principle:
            'Periode getaran $T$ merupakan kebalikan dari frekuensi $f$: $T = \\frac{1}{f}$.',
          solution:
            'Diketahui frekuensi getaran $f = 2{,}5\\text{ Hz}$. Maka periode getarannya adalah:\n$$T = \\frac{1}{f} = \\frac{1}{2{,}5} = \\frac{10}{25} = 0{,}4\\text{ detik}.$$',
          rubric: OK
        },
        {
          label: '38',
          marks: 1,
          prompt:
            'Jika bunyi bel sekolah merambat dengan kecepatan $340\\text{ m/s}$ dan frekuensi $500\\text{ Hz}$, panjang gelombang bunyi bel tersebut adalah ... $\\text{m}$.\n\nA. $6{,}80$\nB. $1{,}70$\nC. $0{,}68$\nD. $0{,}17$',
          answer: 'C. $0{,}68$',
          principle:
            'Hubungan cepat rambat gelombang $v$, frekuensi $f$, dan panjang gelombang $\\lambda$ dinyatakan oleh $v = \\lambda f$.',
          solution:
            'Diketahui cepat rambat bunyi $v = 340\\text{ m/s}$ dan frekuensi $f = 500\\text{ Hz}$. Panjang gelombangnya adalah:\n$$\\lambda = \\frac{v}{f} = \\frac{340}{500} = 0{,}68\\text{ m}.$$',
          rubric: OK
        },
        {
          label: '39',
          marks: 1,
          prompt:
            'Seseorang mengamati bahwa siang hari pada bulan Desember lebih lama daripada siang hari pada bulan Juni. Ini menandakan bahwa orang tersebut berada di ....\n\nA. belahan bumi bagian utara\nB. belahan bumi bagian selatan\nC. kutub utara\nD. garis khatulistiwa',
          answer: 'B. belahan bumi bagian selatan',
          principle:
            'Kemiringan sumbu rotasi Bumi ($23{,}5^\\circ$) menyebabkan pada bulan Desember belahan bumi selatan condong ke arah Matahari sehingga mengalami siang lebih lama dibanding bulan Juni.',
          solution:
            'Pada sekitar bulan Desember (solstis Desember, 21–22 Desember), kutub selatan Bumi condong menghadap Matahari (gerak semu Matahari berada di garis balik selatan $23{,}5^\\circ\\text{ LS}$), sehingga wilayah **belahan bumi bagian selatan** menerima penyinaran lebih lama (siang lebih panjang dari malam dan lebih lama daripada bulan Juni). Sebaliknya:\n- Di belahan bumi utara dan kutub utara, siang paling panjang justru terjadi pada bulan Juni (pada Desember kutub utara mengalami malam kutub).\n- Di garis khatulistiwa, lama siang dan malam hampir selalu sama ($\\approx 12$ jam) sepanjang tahun.\n\nJadi, orang tersebut berada di **belahan bumi bagian selatan** (pilihan **B**).',
          rubric: OK
        },
        {
          label: '40',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-smp-2023/fig-40.webp',
              caption: 'Rangkaian tiga buah baterai identik yang disusun paralel.',
              alt: 'Diagram rangkaian tiga cabang paralel yang masing-masing memuat satu elemen baterai dengan gaya gerak listrik E dan hambatan dalam r berorientasi searah.'
            }
          ],
          prompt:
            'Berdasarkan gambar berikut, nilai total ggl dan hambatan dalam susunan baterai tersebut adalah ....\n\nA. $3E$ dan $3r$\nB. $E/3$ dan $r/3$\nC. $E$ dan $r/3$\nD. $E/3$ dan $3r$',
          answer: 'C. $E$ dan $r/3$',
          principle:
            'Untuk $n$ sumber tegangan identik ($E, r$) yang dirangkai paralel dengan kutub sejenis terhubung bersama, ggl total tetap sama dengan $E$ dan hambatan dalam totalnya menjadi $\\frac{r}{n}$.',
          solution:
            'Gambar menunjukkan $n = 3$ baterai identik dengan ggl $E$ dan hambatan dalam $r$ disusun **paralel**:\n- Karena ketiga cabang paralel memiliki beda potensial sumber yang sama, ggl penggantinya adalah:\n$$E_{\\text{total}} = E.$$\n- Ketiga hambatan dalam $r$ terpasang paralel, sehingga hambatan dalam totalnya memenuhi:\n$$\\frac{1}{r_{\\text{total}}} = \\frac{1}{r} + \\frac{1}{r} + \\frac{1}{r} = \\frac{3}{r} \\implies r_{\\text{total}} = \\frac{r}{3}.$$\n\nJadi, nilai totalnya adalah **$E$ dan $r/3$** (pilihan **C**).',
          rubric: OK
        }
      ]
    },
    {
      no: 5,
      title: 'Bagian V: Fisika — Pilihan Majemuk (1, 2, 3, 4)',
      marks: 10,
      stem: 'Pilihlah satu kombinasi jawaban A, B, C, atau D yang paling tepat untuk setiap soal berikut (10 soal, nomor 41–50; masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '41',
          marks: 1,
          prompt:
            'Sejumlah air tertampung dalam suatu wadah yang bentuknya tidak beraturan. Seorang siswa mengukur volume air tersebut menggunakan gayung dengan cara mengisi penuh gayung untuk memindahkan air secara bertahap dari wadah ke ember, sampai air pada wadah semuanya terpindahkan ke ember. Dalam konteks pengukuran, pada kasus ini gayung merupakan:\n1. besaran\n2. satuan\n3. dimensi\n4. alat ukur\n\nJawaban yang benar adalah ....\n\nA. $1, 2, 3$\nB. $1, 3$\nC. $2, 4$\nD. $4$',
          answer: 'C. $2, 4$',
          principle:
            'Dalam pengukuran, besaran yang diukur adalah volume air, sedangkan gayung berperan ganda sebagai alat ukur sekaligus satuan tak baku (misalnya volume air $= n$ gayung).',
          solution:
            'Tinjau peran setiap istilah dalam kegiatan pengukuran tersebut:\n1. **Besaran:** salah — besaran yang diukur adalah *volume* air, bukan gayung.\n2. **Satuan:** benar — satu gayung penuh berfungsi sebagai satuan tak baku pembanding volume (hasil ukur dinyatakan dalam satuan "gayung").\n3. **Dimensi:** salah — dimensi volume adalah $[L]^3$, bukan gayung.\n4. **Alat ukur:** benar — gayung merupakan instrumen/wadah penakar yang digunakan untuk mengukur volume air.\n\nJadi, pernyataan yang benar adalah **2, 4** (pilihan **C**).',
          rubric: OK
        },
        {
          label: '42',
          marks: 1,
          prompt:
            'Pada tabel berikut ini diberikan informasi mengenai titik leleh dan titik didih beberapa bahan.\n\n| No | Bahan | Titik Leleh ($^\\circ\\text{C}$) | Titik Didih ($^\\circ\\text{C}$) |\n|---|---|---|---|\n| 1 | M | $-40{,}0$ | $350{,}0$ |\n| 2 | N | $-138{,}4$ | $0{,}5$ |\n| 3 | O | $7{,}0$ | $59{,}0$ |\n| 4 | P | $-101{,}0$ | $-35{,}0$ |\n| 5 | Q | $55{,}0$ | $160{,}0$ |\n| 6 | R | $114{,}0$ | $184{,}0$ |\n\nPada temperatur ruang, bahan:\n1. M dan O berwujud cair\n2. N dan P berwujud padat\n3. Q berwujud padat\n4. R berwujud gas\n\nJawaban yang benar adalah ....\n\nA. $1, 2, 3$\nB. $1, 3$\nC. $2, 4$\nD. $4$',
          answer: 'B. $1, 3$',
          principle:
            'Pada suhu ruang ($T \\approx 25^\\circ\\text{C}$), suatu zat berwujud padat jika $T < T_{\\text{leleh}}$, berwujud cair jika $T_{\\text{leleh}} < T < T_{\\text{didih}}$, dan berwujud gas jika $T > T_{\\text{didih}}$.',
          solution:
            'Bandingkan titik leleh dan titik didih masing-masing bahan terhadap suhu ruang ($\\approx 25^\\circ\\text{C}$):\n- **M:** $-40{,}0 < 25 < 350{,}0 \\implies$ **cair**.\n- **N:** $25 > 0{,}5 \\implies$ **gas**.\n- **O:** $7{,}0 < 25 < 59{,}0 \\implies$ **cair**.\n- **P:** $25 > -35{,}0 \\implies$ **gas**.\n- **Q:** $25 < 55{,}0 \\implies$ **padat**.\n- **R:** $25 < 114{,}0 \\implies$ **padat**.\n\nEvaluasi pernyataan:\n1. M dan O berwujud cair $\\rightarrow$ **benar**.\n2. N dan P berwujud padat $\\rightarrow$ salah (keduanya gas).\n3. Q berwujud padat $\\rightarrow$ **benar**.\n4. R berwujud gas $\\rightarrow$ salah (R berwujud padat).\n\nJadi, jawabannya adalah **1, 3** (pilihan **B**).',
          rubric: OK
        },
        {
          label: '43',
          marks: 1,
          prompt:
            'Sebuah meja didorong perlahan pada salah satu sisinya sehingga bergeser ke kanan. Akibat dorongan tersebut buku yang berada di meja ikut bergeser ke kanan. Hal ini terjadi karena:\n1. gaya tersebut juga mendorong buku secara langsung\n2. gaya tersebut menimbulkan gaya gesek pada meja ke arah kiri\n3. gaya tersebut menimbulkan gaya gesek pada meja ke arah kanan\n4. gaya tersebut menimbulkan gaya gesek pada buku ke arah kanan\n\nJawaban yang benar adalah ....\n\nA. $1, 2, 3$\nB. $1, 3$\nC. $2, 4$\nD. $4$',
          answer: 'C. $2, 4$',
          principle:
            'Buku ikut bergerak ke kanan bersama meja karena gaya gesek statis dari meja mendorong buku ke kanan; sesuai Hukum III Newton, buku pun mengerjakan gaya gesek berlawanan arah (ke kiri) pada meja.',
          solution:
            'Analisis interaksi antara dorongan, meja, dan buku:\n1. **Salah:** gaya dorong bekerja pada sisi meja, bukan langsung menyentuh atau mendorong buku.\n2. **Benar:** saat meja didorong ke kanan, buku cenderung mempertahankan keadaannya (kelembaman) sehingga muncul pasangan aksi-reaksi gaya gesek antara permukaan meja dan buku; permukaan meja mendapat gaya gesek ke arah **kiri** (begitu pula gaya gesek lantai terhadap meja berarah ke kiri).\n3. **Salah:** gaya gesek yang bekerja pada meja berarah ke kiri melawan gerak relatifnya, bukan ke kanan.\n4. **Benar:** meja memberikan gaya gesek pada buku ke arah **kanan**, yang menyebabkan buku ikut dipercepat dan bergeser ke kanan.\n\nJadi, pernyataan yang benar adalah **2, 4** (pilihan **C**).',
          rubric: OK
        },
        {
          label: '44',
          marks: 1,
          prompt:
            'Perhatikan pernyataan di bawah ini:\n1. momentum sudut tetap\n2. percepatan linear nol\n3. gaya yang bekerja tidak tetap\n4. kecepatan linear tidak tetap\n\nUntuk benda yang bergerak melingkar berlaku pernyataan nomor ....\n\nA. $1, 2, 3$\nB. $1, 3, 4$\nC. $1, 2, 4$\nD. $2, 3, 4$',
          answer: 'B. $1, 3, 4$',
          principle:
            'Pada gerak melingkar beraturan, arah vektor kecepatan linear dan arah vektor gaya sentripetal terus berubah setiap saat, percepatan sentripetal tidak nol, sedangkan momentum sudutnya konstan.',
          solution:
            'Tinjau sifat vektor pada gerak melingkar beraturan:\n1. **Momentum sudut tetap ($\\checkmark$):** $\\vec{L} = \\vec{r} \\times \\vec{p}$ memiliki besar $mvr$ dan arah tegak lurus bidang lintasan yang tetap.\n2. **Percepatan linear nol ($\\times$):** meskipun kelajuan konstan, arah kecepatan selalu berubah sehingga ada percepatan sentripetal $a_s = \\frac{v^2}{r} \\neq 0$.\n3. **Gaya yang bekerja tidak tetap ($\\checkmark$):** besar gaya sentripetal konstan, tetapi arah vektornya selalu berubah menuju pusat lingkaran, sehingga sebagai besaran vektor gaya tersebut tidak tetap.\n4. **Kecepatan linear tidak tetap ($\\checkmark$):** kelajuan konstan, tetapi arah vektor kecepatan selalu berubah menyinggung lintasan.\n\nJadi, pernyataan yang berlaku adalah **1, 3, 4** (pilihan **B**).',
          rubric: OK
        },
        {
          label: '45',
          marks: 1,
          prompt:
            'Seberkas cahaya merambat dari medium $1$ ke medium $2$ ke medium $3$. Ketika memasuki medium $2$, berkas cahaya teramati menjauhi garis normal. Ketika memasuki medium $3$, berkas cahaya teramati mendekati garis normal. Dapat ditarik kesimpulan bahwa:\n1. indeks bias medium $1$ lebih kecil dari indeks bias medium $2$\n2. frekuensi di medium $1$ sama dengan frekuensi di medium $2$\n3. cepat rambat di medium $2$ lebih besar dari cepat rambat di medium $3$\n4. panjang gelombang di medium $2$ lebih pendek dari panjang gelombang di medium $3$\n\nPernyataan yang benar adalah ....\n\nA. $1, 2, 3$\nB. $2, 3$\nC. $2, 4$\nD. $3, 4$',
          answer: 'B. $2, 3$',
          principle:
            'Menurut hukum Snellius ($n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$), cahaya menjauhi garis normal saat masuk ke medium lebih renggang ($n$ lebih kecil, $v$ dan $\\lambda$ lebih besar), sedangkan frekuensi cahaya selalu tetap.',
          solution:
            'Analisis pembiasan cahaya antar medium:\n- Dari medium $1 \\to 2$ **menjauhi garis normal** $\\implies n_1 > n_2$, sehingga $v_1 < v_2$ dan $\\lambda_1 < \\lambda_2$.\n- Dari medium $2 \\to 3$ **mendekati garis normal** $\\implies n_2 < n_3$, sehingga $v_2 > v_3$ dan $\\lambda_2 > \\lambda_3$.\n\nCek pernyataan:\n1. $n_1 < n_2$ $\\rightarrow$ salah (seharusnya $n_1 > n_2$).\n2. Frekuensi di medium $1$ sama dengan di medium $2$ $\\rightarrow$ **benar** (frekuensi gelombang cahaya ditentukan sumber dan tidak berubah saat berpindah medium).\n3. Cepat rambat di medium $2$ lebih besar dari di medium $3$ $\\rightarrow$ **benar** ($v_2 > v_3$).\n4. Panjang gelombang di medium $2$ lebih pendek dari di medium $3$ $\\rightarrow$ salah (karena $v = \\lambda f$ dan $f$ tetap, maka $\\lambda_2 > \\lambda_3$).\n\nJadi, pernyataan yang benar adalah **2, 3** (pilihan **B**).',
          rubric: OK
        },
        {
          label: '46',
          marks: 1,
          prompt:
            'Sebuah benda digerakkan dengan kecepatan tetap mendekati sebuah cermin cembung, dari jarak yang lebih besar dari panjang fokus cermin sampai jarak yang kurang dari panjang fokus cermin. Pada proses ini:\n1. sifat bayangan berubah dari maya menjadi nyata\n2. bayangan selalu terbentuk di belakang cermin\n3. bayangan bergerak mendekati cermin dengan kecepatan tetap\n4. jarak bayangan ke cermin lebih kecil dari jarak benda ke cermin\n\nPernyataan yang benar adalah ....\n\nA. $1, 2, 3$\nB. $2, 3$\nC. $2, 4$\nD. $3, 4$',
          answer: 'C. $2, 4$',
          principle:
            'Untuk benda nyata di depan cermin cembung ($f < 0, s > 0$), persamaan $\\frac{1}{s\'} = -\\frac{1}{|f|} - \\frac{1}{s}$ selalu menghasilkan $s\' = -\\frac{s|f|}{s + |f|} < 0$ (maya di belakang cermin) dan $|s\'| < s$.',
          solution:
            'Gunakan persamaan cermin cembung dengan $f = -|f| < 0$ dan jarak benda $s > 0$:\n$$\\frac{1}{s\'} = \\frac{1}{f} - \\frac{1}{s} = -\\frac{1}{|f|} - \\frac{1}{s} \\implies s\' = -\\frac{s |f|}{s + |f|}.$$\nEvaluasi tiap pernyataan:\n1. **Salah:** tanda $s\'$ selalu negatif untuk semua $s > 0$, sehingga bayangan selalu maya (tidak pernah menjadi nyata).\n2. **Benar:** karena $s\' < 0$, bayangan selalu terbentuk di belakang cermin.\n3. **Salah:** hubungan $s\'$ terhadap $s$ bersifat tak linear ($s\' = -\\frac{s|f|}{s+|f|}$), sehingga meskipun kelajuan benda $\\left|\\frac{ds}{dt}\\right|$ konstan, kelajuan bayangan tidak konstan.\n4. **Benar:** $|s\'| = s \\cdot \\frac{|f|}{s + |f|} < s$ karena $\\frac{|f|}{s + |f|} < 1$.\n\nJadi, pernyataan yang benar adalah **2, 4** (pilihan **C**).',
          rubric: OK
        },
        {
          label: '47',
          marks: 1,
          prompt:
            'Perhatikan beberapa pernyataan di bawah ini.\n1. Getaran adalah gerakan bolak-balik di sekitar titik setimbang.\n2. Frekuensi getaran adalah waktu yang diperlukan untuk menempuh satu getaran penuh.\n3. Periode adalah banyaknya getaran yang terjadi tiap detik.\n4. Amplitudo adalah jarak terjauh dari titik setimbang.\n\nPernyataan di atas yang benar adalah ....\n\nA. $1, 4$\nB. $1, 2$\nC. $1, 3$\nD. $1, 2, 3$',
          answer: 'A. $1, 4$',
          principle:
            'Getaran adalah gerak periodik bolak-balik di sekitar titik kesetimbangan, dengan simpangan maksimumnya disebut amplitudo, waktu satu getaran penuh disebut periode, dan banyaknya getaran per detik disebut frekuensi.',
          solution:
            'Evaluasi definisi besaran getaran:\n1. **Benar:** getaran didefinisikan sebagai gerak bolak-balik secara periodik melewati titik kesetimbangan.\n2. **Salah:** waktu untuk menempuh satu getaran penuh adalah **periode**, bukan frekuensi.\n3. **Salah:** banyaknya getaran tiap detik adalah **frekuensi**, bukan periode.\n4. **Benar:** amplitudo adalah simpangan (jarak) maksimum benda dari titik setimbang.\n\nJadi, pernyataan yang benar adalah **1, 4** (pilihan **A**).',
          rubric: OK
        },
        {
          label: '48',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-smp-2023/fig-48.webp',
              caption: 'Grafik gelombang transversal terhadap waktu dengan tanda jarak mendatar antara titik P dan Q.',
              alt: 'Grafik gelombang sinusoidal berlabel titik P hingga X terhadap sumbu Waktu dalam detik bernomor 1 sampai 8, dengan panah jarak mendatar 3 meter antara sumbu vertikal titik P dan garis putus-putus puncak Q pada t = 1 s.'
            }
          ],
          prompt:
            'Perhatikan gambar gelombang transversal di bawah ini.\n\n1. Besar periode gelombang adalah $4\\text{ s}$\n2. Besar panjang gelombang adalah $3\\text{ m}$\n3. Besar kecepatan gelombang adalah $3\\text{ m/s}$\n4. Besar frekuensi gelombang adalah $1/2\\text{ Hz}$\n\nPernyataan di atas yang benar adalah ....\n\nA. $1, 4$\nB. $2, 3$\nC. $1, 3$\nD. $2, 4$',
          answer: 'C. $1, 3$',
          principle:
            'Satu gelombang penuh terdiri atas satu puncak dan satu lembah ($P\\text{–}Q\\text{–}R\\text{–}S\\text{–}T$); dari panjang seperempat gelombang dan waktunya diperoleh $\\lambda$, $T$, $f = 1/T$, dan $v = \\lambda / T$.',
          solution:
            'Dari grafik gelombang:\n- Satu gelombang penuh ($P \\to Q \\to R \\to S \\to T$) ditempuh dalam selang waktu $T = 4\\text{ s}$ (pernyataan 1 **benar**).\n- Frekuensi gelombang adalah $f = \\frac{1}{T} = \\frac{1}{4}\\text{ Hz}$ (pernyataan 4 **salah**).\n- Jarak mendatar dari $P$ ke puncak $Q$ merupakan $\\frac{1}{4}$ panjang gelombang sebesar $3\\text{ m}$, sehingga panjang satu gelombang penuh adalah:\n$$\\lambda = 4 \\times 3\\text{ m} = 12\\text{ m}$$ (pernyataan 2 **salah**).\n- Cepat rambat gelombang adalah:\n$$v = \\frac{\\lambda}{T} = \\frac{12\\text{ m}}{4\\text{ s}} = 3\\text{ m/s}$$ (pernyataan 3 **benar**).\n\nJadi, pernyataan yang benar adalah **1, 3** (pilihan **C**).',
          rubric: OK
        },
        {
          label: '49',
          marks: 1,
          prompt:
            'Untuk memperbesar ggl induksi pada kumparan kawat yang berputar dalam medan magnet, dapat dilakukan dengan cara:\n1. mempercepat laju putaran pada kumparan\n2. memperbanyak lilitan pada kumparan\n3. memperkecil luas penampang kumparan\n4. memperbesar luas penampang kawat\n\nPernyataan yang benar adalah ....\n\nA. $1, 2$\nB. $1, 2, 3$\nC. $2, 3$\nD. $1, 2, 3, 4$',
          answer: 'A. $1, 2$',
          principle:
            'Ggl induksi maksimum pada generator/kumparan yang berputar dalam medan magnet seragam diberikan oleh $\\varepsilon_{\\text{maks}} = N B A \\omega$, sehingga sebanding dengan jumlah lilitan $N$, kuat medan magnet $B$, luas bidang kumparan $A$, dan kecepatan sudut putar $\\omega$.',
          solution:
            'Berdasarkan hukum induksi Faraday untuk kumparan berputar ($\\varepsilon_{\\text{maks}} = N B A \\omega$):\n1. **Mempercepat laju putaran ($\\omega$ membesar):** memperbesar ggl induksi $\\rightarrow$ **benar**.\n2. **Memperbanyak lilitan ($N$ membesar):** memperbesar ggl induksi $\\rightarrow$ **benar**.\n3. **Memperkecil luas penampang kumparan ($A$ mengecil):** justru memperkecil fluks magnetik sehingga menurunkan ggl induksi $\\rightarrow$ salah.\n4. **Memperbesar luas penampang kawat:** hanya menurunkan hambatan listrik kawat, tidak mengubah fluks magnetik maupun ggl induksi $\\rightarrow$ salah.\n\nJadi, pernyataan yang benar adalah **1, 2** (pilihan **A**).',
          rubric: OK
        },
        {
          label: '50',
          marks: 1,
          prompt:
            'Faktor-faktor penyebab terjadinya gempa bumi adalah:\n1. pergeseran lempeng bumi\n2. tanah longsor\n3. gletser\n4. letusan gunung api\n5. ledakan dinamit\n\nDi antara faktor di atas, yang dimungkinkan **bukan** merupakan faktor alam adalah ....\n\nA. $1, 4$\nB. $2, 3$\nC. $4, 5$\nD. $2, 5$',
          answer: 'D. $2, 5$',
          principle:
            'Gempa bumi dapat dipicu faktor alam murni (tektonik/lempeng, vulkanik/gunung api, glasial) maupun faktor antropogenik/buatan manusia seperti peledakan dinamit serta longsor akibat aktivitas manusia.',
          solution:
            'Tinjau asal-usul faktor pemicu getaran/gempa:\n- Pergeseran lempeng bumi (1), pergerakan gletser (3), dan letusan gunung api (4) merupakan fenomena alam murni.\n- **Ledakan dinamit** (5) jelas merupakan faktor buatan manusia (gempa buatan).\n- **Tanah longsor** (2) selain terjadi secara alami dapat pula dipicu oleh aktivitas manusia (penebangan hutan, penggalian lereng, atau penambangan), sehingga dimungkinkan bukan murni faktor alam.\n\nJadi, faktor yang dimungkinkan bukan merupakan faktor alam adalah **2, 5** (pilihan **D**).',
          rubric: OK
        }
      ]
    },
    {
      no: 6,
      title: 'Bagian VI: Fisika — Sebab-Akibat',
      marks: 10,
      stem: 'Untuk setiap soal sebab-akibat berikut (10 soal, nomor 51–60; masing-masing bernilai 1 poin), tentukan hubungan antara pernyataan dan alasan dengan memilih opsi A, B, C, atau D.',
      parts: [
        {
          label: '51',
          marks: 1,
          prompt:
            'Pada suatu eksperimen, termometer Celsius dan Fahrenheit digunakan secara bersamaan untuk mengukur suhu sejumlah air dalam bejana tertutup. Pada saat air dipanaskan, terjadi perubahan penunjukan angka pada skala termometer. Masing-masing termometer menunjukkan angka hasil pengukuran yang berbeda, tetapi perubahan suhu yang ditunjukkan oleh keduanya sama besar.\nSEBAB\nPerubahan suhu air pada eksperimen tersebut disebabkan oleh kalor yang diterima oleh sejumlah air yang sama.\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'C. Salah satu pernyataan atau alasan benar',
          principle:
            'Perbandingan rentang skala Celsius dan Fahrenheit adalah $\\Delta T_C : \\Delta T_F = 100 : 180 = 5 : 9$, sehingga selisih kenaikan suhu $\\Delta T_F = \\frac{9}{5}\\Delta T_C$ tidak sama besar angkanya.',
          solution:
            '- **Pernyataan:** Salah. Meskipun air mengalami perubahan fisis yang sama, pembacaan selisih suhu pada skala Celsius ($0\\text{–}100$) dan Fahrenheit ($32\\text{–}212$) berbeda dengan perbandingan $\\Delta T_F = \\frac{9}{5} \\Delta T_C$ (misalnya kenaikan $10^\\circ\\text{C}$ terbaca sebagai kenaikan $18^\\circ\\text{F}$).\n- **Alasan:** Benar. Kenaikan suhu sejumlah air di dalam bejana tersebut memang disebabkan oleh kalor yang diserap air.\n\nKarena alasan benar dan pernyataan salah, jawabannya adalah **C**.',
          rubric: OK
        },
        {
          label: '52',
          marks: 1,
          figures: [
            {
              src: '/papers/osnk-ipa-smp-2023/fig-52.webp',
              caption: 'Pelat logam dengan goresan melingkar dan lubang melingkar berdiameter sama.',
              alt: 'Ilustrasi pelat logam persegi panjang abu-abu yang memiliki lingkaran goresan bergaris biru di sebelah kiri dan lubang lingkaran putih di sebelah kanan.'
            }
          ],
          prompt:
            'Pada sebuah pelat logam terdapat goresan dan lubang berbentuk lingkaran dengan diameter yang sama, seperti terlihat pada gambar.\n\nJika pelat dipanaskan maka jari-jari goresan membesar sedangkan jari-jari lubang mengecil.\nSEBAB\nJika dipanaskan, pelat logam mengalami pemuaian ke segala arah sehingga lubang pada pelat bertambah kecil.\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'D. Pernyataan dan alasan salah',
          principle:
            'Pemuaian termal benda padat isotropis memperbesar seluruh dimensi linier secara seragam layaknya pembesaran fotokopi, sehingga baik jari-jari goresan maupun jari-jari lubang sama-sama membesar.',
          solution:
            '- **Pernyataan:** Salah. Ketika pelat logam dipanaskan secara merata, semua jarak antara dua titik mana pun pada logam memuai mengikuti $\\Delta L = L_0 \\alpha \\Delta T$; akibatnya diameter goresan maupun diameter lubang **sama-sama membesar** (lubang tidak mengecil).\n- **Alasan:** Salah. Pemuaian ke segala arah membuat keliling tepi lubang ikut memanjang sehingga diameter lubang bertambah **besar**, bukan bertambah kecil.\n\nKarena pernyataan dan alasan keduanya salah, jawabannya adalah **D**.',
          rubric: OK
        },
        {
          label: '53',
          marks: 1,
          prompt:
            'Dua anak kakak beradik meluncur secara bergantian pada sebuah wahana luncur. Berat sang kakak $300\\text{ newton}$ sedangkan berat sang adik $200\\text{ newton}$. Jika gesekan dapat diabaikan, waktu yang diperlukan sang kakak untuk sekali meluncur dari posisi teratas sampai terbawah sama dengan waktu yang diperlukan sang adik untuk sekali meluncur dari posisi teratas sampai terbawah\nSEBAB\nMassa anak tidak mempengaruhi kecepatan anak meluncur ke bawah.\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'A. Pernyataan benar, alasan benar dan ada hubungan sebab akibat',
          principle:
            'Pada lintasan licin di bawah gravitasi, percepatan benda $a = g \\sin\\theta$ dan kelajuannya $v = \\sqrt{2g\\Delta h}$ tidak bergantung pada massa, sehingga gerak kedua anak identik dan waktu tempuhnya sama.',
          solution:
            '- **Pernyataan:** Benar. Tanpa gesekan, percepatan sepanjang lintasan miring hanya bergantung pada percepatan gravitasi dan kemiringan lintasan ($a = g\\sin\\theta$), bukan pada berat atau massa anak, sehingga waktu tempuh dari atas ke bawah sama untuk kakak maupun adik.\n- **Alasan:** Benar. Berdasarkan kekekalan energi mekanik ($mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh}$) dan Hukum II Newton, massa anak saling meniadakan sehingga tidak memengaruhi kecepatan meluncur.\n- **Hubungan sebab-akibat:** Ada hubungan sebab-akibat karena ketidakbergantungan kecepatan dan percepatan terhadap massa menyebabkan waktu meluncur keduanya sama.\n\nJadi, jawabannya adalah **A**.',
          rubric: OK
        },
        {
          label: '54',
          marks: 1,
          prompt:
            'Dua benda bergerak yang hanya dipengaruhi oleh gaya gravitasi dapat memiliki bentuk lintasan yang berbeda\nSEBAB\nKecepatan awal mempengaruhi bentuk lintasan benda.\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'A. Pernyataan benar, alasan benar dan ada hubungan sebab akibat',
          principle:
            'Dalam medan gravitasi, besar dan arah vektor kecepatan awal menentukan jenis lintasan benda (lurus vertikal, parabola, lingkaran, elips, atau hiperbola).',
          solution:
            '- **Pernyataan:** Benar. Benda yang hanya mengalami gaya gravitasi dapat bergerak lurus (jatuh bebas/vertikal), membentuk parabola (gerak peluru), maupun elips/lingkaran/hiperbola (gerak orbit planet dan komet).\n- **Alasan:** Benar. Besar dan arah kecepatan awal relatif terhadap arah medan gravitasi menentukan bentuk geometris lintasannya.\n- **Hubungan sebab-akibat:** Ada hubungan sebab-akibat karena perbedaan kecepatan awal (misalnya sudut tembak $90^\\circ$ menghasilkan garis lurus, sedangkan sudut miring menghasilkan parabola; atau kelajuan orbit tertentu menghasilkan lingkaran vs elips) menyebabkan perbedaan bentuk lintasan.\n\nJadi, jawabannya adalah **A**.',
          rubric: OK
        },
        {
          label: '55',
          marks: 1,
          prompt:
            'Jika ke dalam sebuah pipa U dimasukkan air dan minyak goreng dengan jumlah yang sama, permukaan air lebih tinggi dari permukaan minyak goreng.\nSEBAB\nTekanan hidrostatik di pertemuan air dan minyak goreng dalam pipa itu sebanding dengan berat minyak goreng.\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'C. Salah satu pernyataan atau alasan benar',
          principle:
            'Pada pipa U setimbang berlaku $\\rho_{\\text{air}} g h_{\\text{air}} = \\rho_{\\text{minyak}} g h_{\\text{minyak}}$; karena $\\rho_{\\text{minyak}} < \\rho_{\\text{air}}$, kolom minyak lebih tinggi daripada kolom air di sisi satunya.',
          solution:
            '- **Pernyataan:** Salah. Pada kaki pipa U yang menampung minyak di atas batas pertemuan kedua fluida, massa jenis minyak lebih kecil daripada massa jenis air ($\\rho_{\\text{minyak}} < \\rho_{\\text{air}}$). Untuk menyeimbangkan tekanan hidrostatik, tinggi kolom minyak dari bidang batas lebih besar daripada tinggi kolom air di kaki sebelahnya, sehingga **permukaan minyak goreng lebih tinggi** daripada permukaan air.\n- **Alasan:** Benar. Pada penampang pipa U yang seragam, tekanan hidrostatik tepat di bidang batas pertemuan air dan minyak ditimbulkan oleh kolom minyak goreng di atasnya: $P = \\rho_{\\text{minyak}} g h_{\\text{minyak}} = \\frac{W_{\\text{minyak}}}{A}$, sehingga sebanding dengan berat minyak goreng tersebut.\n\nKarena pernyataan salah dan alasan benar, jawabannya adalah **C**.',
          rubric: OK
        },
        {
          label: '56',
          marks: 1,
          prompt:
            'Seberkas cahaya putih merambat di udara, kemudian masuk ke air. Di dalam air berkas cahaya dapat terurai menjadi berkas-berkas cahaya dengan warna berbeda-beda.\nSEBAB\nApabila merambat dari suatu medium ke medium yang berbeda, cahaya dapat berubah arah.\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'B. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat',
          principle:
            'Dispersi cahaya putih terjadi karena indeks bias suatu medium bergantung pada panjang gelombang (warna) cahaya, bukan semata-mata karena pembiasan umum saat berpindah medium.',
          solution:
            '- **Pernyataan:** Benar. Cahaya putih bersifat polikromatik sehingga ketika masuk ke air pada sudut datang miring dapat mengalami dispersi (terurai menjadi spektrum warna merah hingga ungu).\n- **Alasan:** Benar. Ketika cahaya merambat miring melintasi batas dua medium berbeda kerapatan optik, arah rambatnya berubah (pembiasan).\n- **Hubungan sebab-akibat:** Tidak ada hubungan sebab-akibat langsung yang mencukupi, karena perubahan arah (pembiasan) saja tidak menguraikan cahaya putih seandainya indeks bias medium sama untuk semua warna; penyebab terurainya warna adalah **perbedaan indeks bias (dan cepat rambat) untuk masing-masing panjang gelombang** warna cahaya di dalam air.\n\nJadi, jawabannya adalah **B**.',
          rubric: OK
        },
        {
          label: '57',
          marks: 1,
          prompt:
            'Seorang anak berteriak secara lantang di antara dua bukit yang tinggi. Setelah beberapa detik terdengar gema sebagai bunyi pantulan dari teriakannya.\nSEBAB\nJarak antara dua bukit dapat ditentukan dengan cara mengukur selang waktu antara teriakan dan gemanya, serta mengetahui cepat rambat bunyi di udara\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'B. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat',
          principle:
            'Gema terjadi karena gelombang bunyi dipantulkan oleh bidang pemantul yang cukup jauh, sedangkan perhitungan jarak dari selang waktu gema ($d = \\frac{v t}{2}$) merupakan penerapan pengukuran bunyi pantul.',
          solution:
            '- **Pernyataan:** Benar. Teriakan di antara dua bukit tinggi memantul pada tebing bukit dan kembali setelah beberapa detik sebagai gema.\n- **Alasan:** Benar. Dengan mengukur selang waktu antara bunyi asli dan gemanya dari kedua bukit ($t_1$ dan $t_2$) serta mengetahui cepat rambat bunyi $v$, jarak antara kedua bukit dapat ditentukan melalui $D = \\frac{v(t_1 + t_2)}{2}$.\n- **Hubungan sebab-akibat:** Tidak ada hubungan sebab-akibat, karena cara menghitung jarak antar bukit tidak menyebabkan timbulnya gema (penyebab gema adalah pemantulan gelombang bunyi oleh permukaan bukit yang keras dan berjarak jauh).\n\nJadi, jawabannya adalah **B**.',
          rubric: OK
        },
        {
          label: '58',
          marks: 1,
          prompt:
            'Suara manusia adalah gelombang transversal dengan frekuensi kurang dari $20\\text{ kHz}$\nSEBAB\nSuara manusia dihasilkan oleh getaran pita suara yang memampatkan atau merenggangkan udara sehingga menghasilkan bunyi\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'C. Salah satu pernyataan atau alasan benar',
          principle:
            'Bunyi di udara (termasuk suara manusia) merambat sebagai gelombang longitudinal berupa rapatan dan regangan molekul udara, bukan gelombang transversal.',
          solution:
            '- **Pernyataan:** Salah. Meskipun frekuensi suara manusia berada di bawah $20\\text{ kHz}$ (rentang audiosonik $20\\text{ Hz}\\text{–}20\\text{ kHz}$), bunyi di udara merupakan **gelombang longitudinal**, bukan gelombang transversal.\n- **Alasan:** Benar. Getaran pita suara menyebabkan udara termampatkan (rapatan) dan teregangkan (regangan) secara bergantian untuk merambatkan bunyi.\n\nKarena pernyataan salah dan alasan benar, jawabannya adalah **C**.',
          rubric: OK
        },
        {
          label: '59',
          marks: 1,
          prompt:
            'Sonar frekuensi tinggi adalah teknologi tinggi yang dapat digunakan untuk mendeteksi kedalaman laut.\nSEBAB\nKedalaman laut dapat ditentukan dengan hanya mengukur beda waktu antara bunyi yang dipancarkan dan pantulannya.\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'C. Salah satu pernyataan atau alasan benar',
          principle:
            'Penentuan kedalaman laut dengan sonar menggunakan rumus $h = \\frac{v \\cdot \\Delta t}{2}$, sehingga memerlukan informasi cepat rambat bunyi di air laut ($v$) selain beda waktu pantulan ($\\Delta t$).',
          solution:
            '- **Pernyataan:** Benar. Teknologi sonar memancarkan gelombang bunyi berfrekuensi tinggi (ultrasonik) untuk mengukur kedalaman dasar laut.\n- **Alasan:** Salah. Kedalaman laut $h = \\frac{v \\cdot \\Delta t}{2}$ tidak dapat ditentukan **hanya** dengan mengukur selang waktu $\\Delta t$ saja, karena nilai cepat rambat bunyi di air laut ($v$) juga wajib diketahui.\n\nKarena pernyataan benar dan alasan salah, jawabannya adalah **C**.',
          rubric: OK
        },
        {
          label: '60',
          marks: 1,
          prompt:
            'Besar energi potensial listrik dari muatan $15\\text{ mikrocoulomb}$ yang berada di antara dua keping sejajar dengan beda potensial $10\\text{ volt}$ adalah $150\\text{ mikrojoule}$.\nSEBAB\nEnergi potensial listrik muatan yang berada di antara dua keping sejajar tidak bergantung pada posisinya, namun sebanding dengan kapasitansi dari dua keping sejajar.\n\nA. Pernyataan benar, alasan benar dan ada hubungan sebab akibat\nB. Pernyataan benar, alasan benar dan tidak ada hubungan sebab akibat\nC. Salah satu pernyataan atau alasan benar\nD. Pernyataan dan alasan salah',
          answer: 'C. Salah satu pernyataan atau alasan benar',
          principle:
            'Besar energi potensial listrik muatan $q$ pada beda potensial $V$ adalah $U = qV$; di dalam medan listrik seragam $E$ antarkeping sejajar, energi potensial muatan bergantung pada posisinya ($U = qEd$) dan tidak sebanding dengan kapasitansi.',
          solution:
            '- **Pernyataan:** Benar. Besar perubahan/energi potensial listrik muatan $q = 15\\text{ }\\mu\\text{C}$ melintasi beda potensial $V = 10\\text{ V}$ adalah:\n$$U = q V = (15\\text{ }\\mu\\text{C})(10\\text{ V}) = 150\\text{ }\\mu\\text{J}.$$\n- **Alasan:** Salah. Dalam medan listrik homogen $E$ di antara dua keping sejajar, energi potensial suatu muatan justru **bergantung pada posisinya** ($U = q E x$, dengan $x$ jarak dari keping acuan potensial nol), dan tidak sebanding dengan kapasitansi keping sejajar $C$.\n\nKarena pernyataan benar dan alasan salah, jawabannya adalah **C**.',
          rubric: OK
        }
      ]
    }
  ]
};
