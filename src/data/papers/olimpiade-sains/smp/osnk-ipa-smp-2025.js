/**
 * Paket Soal Terstruktur: OSN-K IPA SMP 2025 (40 soal pilihan ganda teks lengkap)
 * Sumber: scraped_raw/osnk-ipa-smp-2025.md (50 soal sumber; 8 soal bergambar/tabel dan 2 soal dengan data tidak konsisten dilewati).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-ipa-smp-2025',
  slug: 'osnk-ipa-smp-2025',
  subject: 'olimpiade-sains',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'OSN-K IPA SMP 2025',
  relatedChapterIds: [
    'ipa7-bab3-suhu-kalor-pemuaian',
    'ipa7-bab4-gerak-dan-gaya',
    'ipa7-bab5-klasifikasi-makhluk-hidup',
    'ipa7-bab6-ekologi-keanekaragaman-hayati',
    'ipa7-bab7-bumi-dan-tata-surya',
    'ipa8-bab1-sel',
    'ipa8-bab2-struktur-fungsi-tubuh',
    'ipa8-bab3-usaha-energi-pesawat-sederhana',
    'ipa8-bab4-getaran-gelombang-cahaya',
    'ipa9-bab2-koordinasi-reproduksi-homeostasis',
    'ipa9-bab3-tekanan',
    'ipa9-bab4-listrik-magnet-energi-alternatif',
    'ipa9-bab6-pewarisan-sifat-bioteknologi'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K IPA SMP 2025',
  totalMarks: 40,
  instructions:
    'Kerjakan seluruh 40 soal pilihan ganda berikut. Setiap jawaban benar bernilai 1 poin (total 40 poin). Paket ini memuat 40 butir soal teks lengkap dari total 50 soal pada naskah sumber OSN-K IPA SMP 2025; sebanyak 10 butir dilewati, terdiri atas 8 butir yang bergantung pada gambar/tabel yang tidak tersedia (nomor sumber: 8, 9, 10, 12, 13, 14, 38, dan 47) serta 2 butir dengan data/pilihan yang tidak konsisten secara ilmiah pada naskah sumber (nomor sumber: 23 dan 40). Butir yang disertakan berasal dari nomor sumber 1, 2, 3, 4, 5, 6, 7, 11, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 41, 42, 43, 44, 45, 46, 48, 49, dan 50.',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-ipa-smp-2025.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 40,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (40 soal, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Eksperimen yang menjelaskan asal usul kehidupan yang diujicobakan oleh Harold Urey adalah ....\n\nA. Membandingkan struktur tubuh manusia dan primata modern\nB. Menyintesis senyawa organik dari gas-gas yang menyerupai atmosfer purba\nC. Mengamati pembelahan sel bakteri di laboratorium\nD. Membandingkan fosil-fosil manusia purba di lapisan batuan terdalam',
          answer: 'B. Menyintesis senyawa organik dari gas-gas yang menyerupai atmosfer purba',
          principle:
            'Teori evolusi kimia Urey (diuji dalam eksperimen Miller–Urey) menyatakan bahwa senyawa organik sederhana seperti asam amino dapat terbentuk secara abiotik dari gas-gas atmosfer purba ($\\text{CH}_4$, $\\text{NH}_3$, $\\text{H}_2$, dan uap air $\\text{H}_2\\text{O}$) dengan bantuan sumber energi listrik/petir.',
          solution:
            'Harold Urey mengemukakan hipotesis bahwa kondisi atmosfer Bumi purba yang bersifat reduktif (kaya metana $\\text{CH}_4$, amonia $\\text{NH}_3$, hidrogen $\\text{H}_2$, dan uap air $\\text{H}_2\\text{O}$) dengan energi dari halilintar atau radiasi ultraviolet mampu membentuk molekul organik sederhana. Hipotesis ini diuji di laboratorium oleh muridnya, Stanley Miller (1953), yang berhasil menyintesis asam amino dari campuran gas tersebut dengan loncatan bunga api listrik. Pilihan A dan D berkaitan dengan studi evolusi manusia/fosil, sedangkan pilihan C berkaitan dengan mikrobiologi dan teori biogenesis sel.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Di padang rumput, interaksi antara makhluk hidup dan lingkungannya berlangsung secara kompleks. Manakah dari pernyataan berikut yang menunjukkan interaksi biotik dengan abiotik?\n\nA. Rumput menyerap air dari tanah untuk fotosintesis.\nB. Dua ekor banteng jantan bertarung untuk memperebutkan betina.\nC. Kelembapan udara menurun akibat peningkatan suhu siang hari.\nD. Ular memangsa tikus yang melintas di rerumputan.',
          answer: 'A. Rumput menyerap air dari tanah untuk fotosintesis.',
          principle:
            'Interaksi biotik–abiotik adalah hubungan timbal balik antara komponen hidup (makhluk hidup) dan komponen tak hidup (air, tanah, cahaya, suhu, udara).',
          solution:
            'Kita evaluasi setiap pilihan:\n- A benar: rumput (komponen biotik) berinteraksi langsung dengan air dan tanah (komponen abiotik) untuk melangsungkan fotosintesis.\n- B salah: pertarungan dua banteng merupakan interaksi antarkomponen biotik (kompetisi intraspesifik).\n- C salah: kelembapan udara dan suhu keduanya merupakan komponen abiotik.\n- D salah: ular memangsa tikus merupakan interaksi predasi antarkomponen biotik.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Di sebuah taman nasional, terdapat beragam jenis tumbuhan dan hewan serta berbagai tipe habitat, mulai dari hutan hujan, padang rumput, hingga sungai. Perhatikan pernyataan berikut:\n1. Populasi jagung di lahan pertanian memiliki berbagai varietas dengan sifat tahan kekeringan dan tahan hama.\n2. Berbagai tipe habitat seperti hutan, sungai, dan rawa memberikan kondisi lingkungan yang berbeda bagi makhluk hidup.\n3. Di taman nasional tersebut ditemukan lebih dari 200 jenis burung yang berbeda.\n\nPernyataan manakah yang menunjukkan keanekaragaman pada tingkat gen, spesies, dan ekosistem secara berurutan?\n\nA. 1, 2, 3\nB. 2, 3, 1\nC. 3, 2, 1\nD. 1, 3, 2',
          answer: 'D. 1, 3, 2',
          principle:
            'Keanekaragaman hayati dibagi menjadi tiga tingkat: tingkat gen (variasi dalam satu spesies), tingkat spesies (keragaman antarjenis berbeda), dan tingkat ekosistem (keragaman tipe habitat serta komunitasnya).',
          solution:
            '- Pernyataan 1 menunjukkan variasi varietas dalam satu spesies yang sama (jagung, *Zea mays*), sehingga termasuk keanekaragaman tingkat **gen**.\n- Pernyataan 3 menunjukkan banyaknya jenis burung berbeda (>200 spesies), sehingga termasuk keanekaragaman tingkat **spesies**.\n- Pernyataan 2 menunjukkan beragam tipe habitat dan lingkungan abiotik-biotiknya (hutan, sungai, rawa), sehingga termasuk keanekaragaman tingkat **ekosistem**.\nJadi, urutan tingkat gen, spesies, dan ekosistem adalah 1, 3, 2.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Kingdom makhluk hidup yang memiliki ciri prokariotik, uniseluler, dan hidup di kondisi ekstrim adalah ....\n\nA. Protista\nB. Archaebacteria\nC. Fungi\nD. Animalia',
          answer: 'B. Archaebacteria',
          principle:
            'Archaebacteria (Archaea) merupakan organisme uniseluler prokariotik (tidak memiliki membran inti) yang banyak hidup di lingkungan ekstrem seperti sumber air panas, kadar garam tinggi, atau lingkungan anaerob.',
          solution:
            'Archaebacteria bersifat prokariotik dan uniseluler serta memiliki struktur dinding sel tanpa peptidoglikan dan membran lipid bercabang yang memungkinkannya bertahan di habitat ekstrem (ekstremofil: termoasidofil, halofil, metanogen). Sebaliknya, Protista, Fungi, dan Animalia semuanya termasuk organisme eukariotik (memiliki membran inti sejati).',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Dalam sebuah penelitian ditemukan populasi kupu-kupu di suatu hutan yang warnanya bervariasi dari terang hingga gelap. Setelah beberapa generasi, kupu-kupu dengan warna gelap lebih banyak bertahan hidup karena sulit terlihat oleh predator di batang pohon yang gelap akibat polusi. Fenomena ini merupakan contoh dari proses evolusi yang disebut ....\n\nA. Mutasi genetik\nB. Seleksi alam\nC. Migrasi populasi\nD. Rekombinasi genetik',
          answer: 'B. Seleksi alam',
          principle:
            'Seleksi alam adalah mekanisme evolusi ketika individu dengan sifat yang lebih sesuai terhadap kondisi lingkungan memiliki peluang bertahan hidup dan bereproduksi lebih tinggi.',
          solution:
            'Kasus pada soal merupakan contoh klasik melanisme industri (serupa ngengat *Biston betularia*). Perubahan lingkungan (batang pohon menghitam akibat polusi) menyebabkan predator lebih mudah memangsa individu berwarna terang, sedangkan individu berwarna gelap tersamarkan (kamuflase) sehingga lebih banyak bertahan hidup dan mewariskan alelnya ke generasi berikutnya. Proses pemilihan sifat adaptif oleh tekanan lingkungan ini disebut seleksi alam.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Sekelompok siswa melakukan survei tumbuhan di taman nasional dengan cara mengelompokkan jenis tumbuhan berdasarkan bentuk daun, warna bunga, dan ukuran batang tanpa mempertimbangkan hubungan evolusi atau genetika. Tujuannya adalah untuk memudahkan identifikasi cepat di lapangan. Metode klasifikasi yang mereka gunakan adalah ....\n\nA. Filogenetik\nB. Fenetik\nC. Molekuler\nD. Biokimia',
          answer: 'B. Fenetik',
          principle:
            'Klasifikasi fenetik (taksonomi numerik/artifisial berdasarkan kesamaan karakter teramati) mengelompokkan organisme menurut kemiripan ciri morfologi atau sifat tampak tanpa menelusuri garis keturunan evolusionernya.',
          solution:
            'Pengelompokan berdasarkan persamaan dan perbedaan ciri fisik yang dapat diamati langsung (seperti bentuk daun, warna bunga, dan ukuran batang) tanpa mempertimbangkan hubungan kekerabatan evolusi disebut klasifikasi fenetik. Klasifikasi filogenetik justru menekankan sejarah evolusi dan nenek moyang bersama, sedangkan molekuler dan biokimia menelaah kesamaan DNA, RNA, atau senyawa protein/metabolit.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Seorang siswa melakukan pengamatan jaringan daun menggunakan mikroskop. Ia menemukan bahwa sebagian besar sel di jaringan palisade mengandung banyak kloroplas, sedangkan pada jaringan epidermis terdapat sel penjaga stomata yang dapat membuka dan menutup. Pernyataan yang paling tepat mengenai hubungan antara struktur dan fungsi pada sel daun adalah ....\n\nA. Sel palisade berfungsi menyimpan air karena bentuknya rapat dan banyak kloroplas\nB. Sel penjaga stomata mengatur masuknya air untuk mengisi vakuola sel palisade\nC. Banyaknya kloroplas dalam sel palisade memungkinkan fotosintesis optimal, menghasilkan glukosa untuk pertumbuhan\nD. Stomata pada epidermis membantu penguapan air untuk menjaga suhu daun tetap stabil',
          answer: 'C. Banyaknya kloroplas dalam sel palisade memungkinkan fotosintesis optimal, menghasilkan glukosa untuk pertumbuhan',
          principle:
            'Parenkim palisade (jaringan tiang) tersusun rapat tepat di bawah epidermis atas dan kaya kloroplas sebagai tempat utama fotosintesis pada daun.',
          solution:
            'Jaringan palisade memiliki susunan sel memanjang dan sangat kaya kloroplas yang berisi klorofil untuk menyerap energi cahaya matahari secara maksimal, sehingga fotosintesis berlangsung optimal menghasilkan karbohidrat (glukosa). Sementara itu, sel penjaga stomata berfungsi mengatur membuka dan menutupnya celah stomata untuk pertukaran gas ($\\text{CO}_2$ masuk dan $\\text{O}_2$ keluar) serta mengendalikan transpirasi (bukan memasukkan air ke vakuola sel palisade).',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Di sebuah daerah gurun yang sangat panas dan kering, ditemukan beberapa makhluk hidup dengan ciri-ciri berikut:\n- Kaktus memiliki daun yang berubah menjadi duri dan batang yang tebal berfungsi menyimpan air.\n- Unta memiliki punuk yang menyimpan lemak dan bulu tebal sebagai pelindung dari panas dan dingin.\n- Burung hantu aktif di malam hari dan memiliki penglihatan tajam di kegelapan.\n- Ikan paus memiliki lapisan lemak tebal untuk menjaga suhu tubuh dalam air dingin.\n\nManakah pernyataan yang tepat mengenai tipe adaptasi yang dimiliki oleh makhluk hidup tersebut?\n\nA. Semua contoh di atas merupakan adaptasi fisiologis\nB. Kaktus dan unta menunjukkan adaptasi morfologis, sedangkan burung hantu dan ikan paus menunjukkan adaptasi fisiologis\nC. Unta dan burung hantu menunjukkan adaptasi tingkah laku, sedangkan kaktus dan ikan paus adaptasi morfologis\nD. Burung hantu dan ikan paus menunjukkan adaptasi morfologis, sedangkan kaktus dan unta adaptasi fisiologis',
          answer: 'B. Kaktus dan unta menunjukkan adaptasi morfologis, sedangkan burung hantu dan ikan paus menunjukkan adaptasi fisiologis',
          principle:
            'Adaptasi morfologis adalah penyesuaian bentuk dan struktur tubuh tampak, adaptasi fisiologis berkaitan dengan fungsi kerja organ/metabolisme dalam tubuh, sedangkan adaptasi tingkah laku berkaitan dengan pola aktivitas.',
          solution:
            'Pada deskripsi kaktus (daun termodifikasi menjadi duri, batang tebal penyimpan air) dan unta (memiliki punuk dan bulu tebal), ciri yang paling menonjol adalah penyesuaian struktur anatomi luar sehingga tergolong adaptasi morfologis. Di antara opsi yang tersedia, pilihan A keliru karena tidak semua contoh bersifat fisiologis; pilihan C keliru karena ciri unta pada soal bukan tingkah laku; pilihan D terbalik. Oleh karena itu, pilihan B merupakan jawaban yang paling tepat sesuai pengelompokan soal (penglihatan tajam di gelap pada burung hantu dan regulasi termal melalui lapisan lemak pada paus dikelompokkan sebagai penyesuaian fungsi fisiologis tubuh, walaupun sifat nokturnal burung hantu juga melibatkan aspek perilaku).',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Apa perbedaan utama antara osmoregulasi pada ikan air laut dan ikan air tawar?\n\nA. Ikan air laut memiliki konsentrasi ion yang lebih rendah daripada ikan air tawar\nB. Ikan air laut memiliki konsentrasi ion yang lebih tinggi daripada ikan air tawar\nC. Ikan air tawar tidak perlu mengatur osmoregulasi\nD. Ikan air laut dan ikan air tawar memiliki mekanisme osmoregulasi yang sama',
          answer: 'B. Ikan air laut memiliki konsentrasi ion yang lebih tinggi daripada ikan air tawar',
          principle:
            'Ikan air laut hidup di lingkungan hipertonik sehingga cenderung kehilangan air dan menerima masukan garam berlebih, sedangkan ikan air tawar hidup di lingkungan hipotonik sehingga cenderung kemasukan air dan kehilangan ion.',
          solution:
            'Ikan bertulang sejati (teleostei) air laut hidup pada lingkungan dengan salinitas tinggi (hipertonik terhadap cairan tubuhnya), sehingga menghadapi beban ion tinggi dan umumnya memiliki konsentrasi ion/osmolaritas cairan tubuh (sekitar $300\\text{–}400\\ \\text{mOsm/L}$) serta ekskresi garam yang lebih tinggi dibanding ikan air tawar (sekitar $250\\text{–}300\\ \\text{mOsm/L}$). Kedua jenis ikan sama-sama memerlukan osmoregulasi dengan mekanisme yang berlawanan (ikan air laut banyak minum dan sedikit urine pekat; ikan air tawar sedikit minum dan banyak urine encer), sehingga pilihan C dan D salah.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Bagian lambung pada hewan ruminansia yang berfungsi seperti lambung pada hewan non-ruminansia adalah ....\n\nA. Rumen\nB. Retikulum\nC. Omasum\nD. Abomasum',
          answer: 'D. Abomasum',
          principle:
            'Lambung ruminansia terdiri atas empat ruang: rumen, retikulum, omasum, dan abomasum; abomasum adalah lambung sejati yang mensekresikan asam lambung ($\\text{HCl}$) dan enzim pencernaan.',
          solution:
            'Pada sistem pencernaan ruminansia (seperti sapi dan kambing):\n- **Rumen** (perut besar) dan **retikulum** (perut jala) berperan dalam fermentasi selulosa oleh mikroorganisme.\n- **Omasum** (perut kitab) berperan menyerap air dan menggiling pakan secara mekanis.\n- **Abomasum** (perut masam) disebut lambung sejati karena menghasilkan asam klorida dan enzim pencernaan (pepsin), sehingga fungsinya sama dengan lambung pada hewan non-ruminansia.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Seorang anak menunjukkan ciri-ciri fisik di antaranya: wajah rata, mata sipit, telinga kecil, leher pendek, memiliki tangan dan kaki yang lebih pendek dari normal, serta mengalami keterlambatan perkembangan mental dan motorik. Ciri-ciri tersebut ternyata berkaitan dengan adanya penambahan 1 kromosom pada kromosom 21. Kelainan genetik ini dikenal dengan nama ....\n\nA. Turner syndrome\nB. Klinefelter syndrome\nC. Down syndrome\nD. Thalasemia',
          answer: 'C. Down syndrome',
          principle:
            'Sindrom Down disebabkan oleh trisomi pada kromosom autosom nomor 21 (memiliki 3 salinan kromosom 21, total 47 kromosom).',
          solution:
            'Penambahan 1 kromosom pada pasangan kromosom nomor 21 menghasilkan kondisi trisomi 21 ($47, +21$), yang dikenal sebagai **Down syndrome**. Sebagai pembanding:\n- *Turner syndrome*: monosomi kromosom seks X pada perempuan ($45, \\text{XO}$).\n- *Klinefelter syndrome*: kelebihan kromosom X pada laki-laki ($47, \\text{XXY}$).\n- *Thalasemia*: kelainan genetik resesif autosom pada sintesis rantai globin hemoglobin (bukan trisomi kromosom 21).',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Keuntungan apa yang diperoleh dengan penggunaan varietas hibrida dalam pertanian?\n\nA. Meningkatkan keragaman genetik\nB. Meningkatkan hasil panen dan resistensi terhadap penyakit\nC. Mengurangi biaya produksi\nD. Mengurangi ketergantungan terhadap pupuk',
          answer: 'B. Meningkatkan hasil panen dan resistensi terhadap penyakit',
          principle:
            'Varietas hibrida memanfaatkan gejala heterosis (*hybrid vigor*), yaitu keunggulan fenotipe generasi $F_1$ hasil persilangan dua galur murni unggul.',
          solution:
            'Persilangan dua galur inbrida yang berbeda secara genetik menghasilkan keturunan $F_1$ hibrida yang memiliki efek heterosis, seperti produktivitas panen yang lebih tinggi, pertumbuhan lebih seragam, dan ketahanan lebih baik terhadap hama maupun penyakit tertentu. Sebaliknya, benih hibrida biasanya lebih mahal dan membutuhkan perawatan/pemupukan optimal, serta seragam secara genetik pada populasi $F_1$-nya.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Jika seorang ayah memiliki golongan darah $\\text{AB}$, dan ibu memiliki golongan darah $\\text{A}$, maka kemungkinan golongan darah anak mereka adalah ....\n\nA. $\\text{A}$ atau $\\text{B}$ atau $\\text{AB}$\nB. $\\text{A}$ atau $\\text{B}$\nC. $\\text{B}$ atau $\\text{AB}$\nD. $\\text{AB}$ saja',
          answer: 'A. $\\text{A}$ atau $\\text{B}$ atau $\\text{AB}$',
          principle:
            'Golongan darah sistem $\\text{ABO}$ dikendalikan oleh alel ganda $I^A$, $I^B$, dan $i$ dengan $I^A$ serta $I^B$ kodominan dan keduanya dominan terhadap $i$.',
          solution:
            'Ayah bergolongan darah $\\text{AB}$ memiliki genotipe pasti $I^A I^B$. Ibu bergolongan darah $\\text{A}$ dapat memiliki genotipe homozigot $I^A I^A$ atau heterozigot $I^A i$.\n- Jika ibu $I^A I^A$: persilangan $I^A I^B \\times I^A I^A$ menghasilkan genotipe $I^A I^A$ (golongan $\\text{A}$) dan $I^A I^B$ (golongan $\\text{AB}$).\n- Jika ibu $I^A i$: persilangan $I^A I^B \\times I^A i$ menghasilkan genotipe $I^A I^A$ ($\\text{A}$), $I^A i$ ($\\text{A}$), $I^A I^B$ ($\\text{AB}$), dan $I^B i$ ($\\text{B}$).\n\nDengan menggabungkan semua kemungkinan, anak dapat memiliki golongan darah $\\text{A}$, $\\text{B}$, atau $\\text{AB}$ (tidak mungkin $\\text{O}$ karena ayah tidak memiliki alel $i$).',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Suatu sifat intermediet ditentukan oleh dua alel, $\\text{B}$ dan $\\text{b}$, dengan $\\text{B}$ sebagai alel untuk warna merah, dan $\\text{b}$ sebagai alel untuk warna putih. Jika suatu individu memiliki genotipe $\\text{Bb}$ dan menunjukkan fenotipe merah muda. Bagaimana perbandingan fenotipe keturunannya, jika disilangkan dengan individu lain yang memiliki genotipe $\\text{Bb}$?\n\nA. $25\\%$ merah : $50\\%$ merah muda : $25\\%$ putih\nB. $50\\%$ merah : $25\\%$ merah muda : $25\\%$ putih\nC. $75\\%$ merah : $25\\%$ putih\nD. $100\\%$ merah muda',
          answer: 'A. $25\\%$ merah : $50\\%$ merah muda : $25\\%$ putih',
          principle:
            'Pada pewarisan sifat intermediet (dominansi tidak penuh), heterozigot memiliki fenotipe antara kedua homozigotnya, sehingga rasio fenotipe $F_2$ persilangan monohibrid mengikuti rasio genotipe $1 : 2 : 1$.',
          solution:
            'Persilangan antarindividu heterozigot $\\text{Bb} \\times \\text{Bb}$ menghasilkan gamet $\\text{B}$ dan $\\text{b}$ dari masing-masing induk. Kombinasi genotipe keturunannya adalah:\n- $\\text{BB}$ (merah): $\\frac{1}{4} = 25\\%$\n- $\\text{Bb}$ (merah muda): $\\frac{2}{4} = 50\\%$\n- $\\text{bb}$ (putih): $\\frac{1}{4} = 25\\%$\n\nJadi, perbandingan fenotipe keturunannya adalah $25\\%$ merah : $50\\%$ merah muda : $25\\%$ putih.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Pada sebuah piringan tipis logam dengan radius $5\\ \\text{cm}$ terdapat sebuah lubang kecil dengan luas penampang $0{,}25\\ \\text{cm}^{2}$. Piringan logam itu dipanaskan, sehingga radiusnya menjadi $5{,}001\\ \\text{cm}$. Kini luas penampang lubang menjadi ....\n\nA. $0{,}4950^{2}\\ \\text{cm}^{2}$\nB. $0{,}4995^{2}\\ \\text{cm}^{2}$\nC. $0{,}4999^{2}\\ \\text{cm}^{2}$\nD. $0{,}5001^{2}\\ \\text{cm}^{2}$',
          answer: 'D. $0{,}5001^{2}\\ \\text{cm}^{2}$',
          principle:
            'Pada pemuaian termal benda padat isotropis, seluruh ukuran linear benda—termasuk ukuran rongga atau lubang di dalamnya—bertambah secara proporsional dengan faktor skala $(1 + \\alpha \\Delta T)$.',
          solution:
            'Misalkan radius awal piringan $R_0 = 5\\ \\text{cm}$ dan radius akhir $R = 5{,}001\\ \\text{cm}$. Faktor pemuaian linearnya adalah\n$$\\lambda = \\frac{R}{R_0} = \\frac{5{,}001}{5} = 1{,}0002.$$\nKarena lubang pada pelat memuai seperti bagian logam yang mengisinya, luas penampang lubang memuai sebanding dengan kuadrat faktor skala linearnya:\n$$A = A_0 \\left(\\frac{R}{R_0}\\right)^2.$$\nDiketahui luas awal lubang $A_0 = 0{,}25\\ \\text{cm}^2 = (0{,}5)^2\\ \\text{cm}^2$, maka\n$$A = (0{,}5)^2 \\cdot (1{,}0002)^2 = (0{,}5 \\times 1{,}0002)^2 = 0{,}5001^2\\ \\text{cm}^2.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Pada suhu $0^{\\circ}\\text{C}$ dan tekanan udara $1\\ \\text{atm}$, $500$ gram air dicampurkan dengan $500$ gram es dalam sebuah wadah. Dengan suhu dan tekanan udara dipertahankan, setelah beberapa waktu didapatkan dalam wadah itu ....\n\nA. $1000$ gram air\nB. $750$ gram air dan $250$ gram es\nC. $500$ gram air dan $500$ gram es\nD. $250$ gram air dan $750$ gram es',
          answer: 'C. $500$ gram air dan $500$ gram es',
          principle:
            'Pada tekanan $1\\ \\text{atm}$, suhu $0^{\\circ}\\text{C}$ adalah titik kesetimbangan fase antara air cair dan es; tanpa perpindahan kalor neto ($\\Delta T = 0$), tidak terjadi peleburan maupun pembekuan neto.',
          solution:
            'Air dan es sama-sama berada pada suhu $0^{\\circ}\\text{C}$ dan tekanan $1\\ \\text{atm}$, yaitu tepat pada titik lebur/beku normal air. Karena tidak ada perbedaan suhu antara air, es, dan kondisi lingkungan yang dipertahankan tetap pada $0^{\\circ}\\text{C}$, kalor yang dipertukarkan secara neto bernilai nol ($Q = 0$). Akibatnya, massa es yang mencair maupun air yang membeku tidak berubah secara neto, sehingga tetap terdapat $500$ gram air dan $500$ gram es.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Seseorang tampak sedang mendorong sebuah peti di suatu lantai datar. Peti bergerak dengan kecepatan konstan. Pernyataan yang benar di bawah ini adalah ....\n\nA. Orang itu tidak mengerjakan gaya pada peti.\nB. Jika lantai itu licin, usaha yang dilakukan orang itu sama dengan nol.\nC. Jika lantai itu kasar, orang itu mengerjakan gaya pada peti sebesar $1{,}5$ kali berat peti.\nD. Usaha orang itu sebanding dengan berat peti.',
          answer: 'B. Jika lantai itu licin, usaha yang dilakukan orang itu sama dengan nol.',
          principle:
            'Menurut Hukum I Newton, gerak dengan kecepatan konstan berarti resultan gaya yang bekerja pada benda sama dengan nol ($\\sum F = 0$).',
          solution:
            'Karena peti bergerak lurus dengan kecepatan konstan pada lantai datar, percepatannya $a = 0$, sehingga resultan gaya horizontal bernilai nol:\n$$\\sum F_x = F_{\\text{orang}} - f_{\\text{gesek}} = 0 \\implies F_{\\text{orang}} = f_{\\text{gesek}}.$$\n- Jika lantai licin, maka $f_{\\text{gesek}} = 0$, sehingga $F_{\\text{orang}} = 0$. Usaha yang dilakukan orang pada perpindahan $\\Delta s$ adalah $W = F_{\\text{orang}} \\Delta s = 0$ (pilihan B benar).\n- Pilihan A belum tentu benar jika lantainya kasar ($f_{\\text{gesek}} > 0$).\n- Pilihan C dan D salah karena besar gaya gesek bergantung pada koefisien gesek $\\mu_k$, bukan selalu $1{,}5$ kali berat peti, dan pada lantai licin usaha tetap nol berapapun berat peti.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Sebuah benda berada di dasar bidang miring licin, dengan kemiringan $30^{\\circ}$. Benda itu diberi kecepatan awal, sehingga bergerak naik pada bidang miring sejauh $1\\ \\text{m}$, sebelum mulai bergerak turun. Jika $g$ adalah percepatan gravitasi, kecepatan awal benda itu adalah ....\nDiketahui $\\sin 30^{\\circ} = 0{,}5$ dan $\\cos 30^{\\circ} = 0{,}5\\sqrt{3}$.\n\nA. $0{,}5\\sqrt{g}\\ \\text{m/s}$\nB. $\\sqrt{2g}\\ \\text{m/s}$\nC. $\\sqrt{g}\\ \\text{m/s}$\nD. $\\sqrt{3g}\\ \\text{m/s}$',
          answer: 'C. $\\sqrt{g}\\ \\text{m/s}$',
          principle:
            'Pada bidang miring licin (tanpa gesekan), berlaku hukum kekekalan energi mekanik: seluruh energi kinetik awal berubah menjadi energi potensial gravitasi di titik tertinggi.',
          solution:
            'Misalkan massa benda $m$, panjang lintasan naik di bidang miring $s = 1\\ \\text{m}$, dan sudut kemiringan $\\theta = 30^{\\circ}$. Ketinggian maksimum yang dicapai benda adalah\n$$h = s \\sin\\theta.$$\nDengan kekekalan energi mekanik antara dasar dan titik tertinggi ($v = 0$):\n$$\\frac{1}{2} m v_0^2 = m g h = m g s \\sin\\theta \\implies v_0 = \\sqrt{2 g s \\sin\\theta}.$$\nSubstitusikan $s = 1\\ \\text{m}$ dan $\\sin 30^{\\circ} = 0{,}5$:\n$$v_0 = \\sqrt{2 \\cdot g \\cdot 1 \\cdot 0{,}5} = \\sqrt{g}\\ \\text{m/s}.$$',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Sebuah pipa $\\text{U}$ diisi air, sehingga permukaan air di kedua kakinya sama tinggi. Kemudian, udara di salah satu kaki diberi tekanan $\\text{P}$, sehingga permukaan air di kaki itu $1\\ \\text{cm}$ lebih tinggi dari permukaan air di kaki yang lain. Jika massa jenis air $1\\ \\text{g/cc}$ dan anggaplah percepatan gravitasi $10\\ \\text{m/s}^{2}$, maka ....\n\nA. $\\text{P} = -100\\ \\text{Pa}$\nB. $\\text{P} = -50\\ \\text{Pa}$\nC. $\\text{P} = 50\\ \\text{Pa}$\nD. $\\text{P} = 100\\ \\text{Pa}$',
          answer: 'A. $\\text{P} = -100\\ \\text{Pa}$',
          principle:
            'Pada fluida statis yang setimbang, titik-titik pada ketinggian yang sama dalam satu jenis fluida kontinu memiliki tekanan hidrostatis yang sama.',
          solution:
            'Misalkan tekanan udara luar pada kaki yang terbuka adalah $P_0$, sedangkan $P$ menyatakan tekanan relatif (gauge) udara di kaki lainnya sehingga tekanan absolutnya adalah $P_0 + P$. Karena permukaan air di kaki bertekanan $P$ naik $h = 1\\ \\text{cm} = 0{,}01\\ \\text{m}$ lebih tinggi, kesetimbangan tekanan pada batas ketinggian air terendah memberikan:\n$$(P_0 + P) + \\rho g h = P_0 \\implies P = -\\rho g h.$$\nDalam satuan SI, $\\rho = 1\\ \\text{g/cm}^3 = 1000\\ \\text{kg/m}^3$, $g = 10\\ \\text{m/s}^2$, dan $h = 0{,}01\\ \\text{m}$, sehingga\n$$P = -1000 \\times 10 \\times 0{,}01 = -100\\ \\text{Pa}.$$',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Sebuah bola ditarik vertikal ke atas dengan tali pada kecepatan tetap $1\\ \\text{m/s}$. Ketika posisi bola $4\\ \\text{m}$ di atas lantai, tali putus. Bola menyentuh lantai setelah .... detik sejak tali putus.\nAnggaplah percepatan gravitasi $10\\ \\text{m/s}^{2}$.\n\nA. $1{,}2$\nB. $1{,}0$\nC. $0{,}8$\nD. $0{,}5$',
          answer: 'B. $1{,}0$',
          principle:
            'Saat tali putus, bola bergerak vertikal ke atas di bawah pengaruh gravitasi (GLBB) dengan kecepatan awal sama dengan kecepatan saat tali terlepas.',
          solution:
            'Pilih sumbu $y$ mengarah ke atas dengan lantai di $y = 0$. Saat tali putus ($t = 0$), posisi awal $y_0 = 4\\ \\text{m}$, kecepatan awal $v_0 = +1\\ \\text{m/s}$, dan percepatan $a = -g = -10\\ \\text{m/s}^2$. Persamaan posisi bola adalah\n$$y(t) = y_0 + v_0 t - \\frac{1}{2} g t^2.$$\nSaat bola menyentuh lantai, $y(t) = 0$:\n$$4 + t - 5t^2 = 0 \\implies 5t^2 - t - 4 = 0 \\implies (5t + 4)(t - 1) = 0.$$\nKarena waktu $t > 0$, diperoleh $t = 1{,}0\\ \\text{detik}$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Urutan warna pelangi dari atas ke bawah adalah merah, jingga, kuning, hijau, biru, nila, ungu. Berarti, di dalam air ....\n\nA. cahaya merah merambat sama cepat dengan cahaya biru\nB. cahaya kuning merambat lebih cepat dari cahaya hijau\nC. cahaya nila merambat lebih lambat dari cahaya ungu\nD. panjang gelombang cahaya ungu lebih besar dari panjang gelombangnya di udara',
          answer: 'B. cahaya kuning merambat lebih cepat dari cahaya hijau',
          principle:
            'Dalam medium dispersif seperti air, indeks bias $n$ meningkat dari warna merah ke ungu ($n_{\\text{merah}} < \\dots < n_{\\text{ungu}}$), sehingga kelajuan rambat $v = c/n$ semakin kecil menuju ungu.',
          solution:
            'Karena sudut deviasi cahaya pada dispersi membesar dari merah ke ungu, indeks bias air memenuhi urutan\n$$n_{\\text{merah}} < n_{\\text{jingga}} < n_{\\text{kuning}} < n_{\\text{hijau}} < n_{\\text{biru}} < n_{\\text{nila}} < n_{\\text{ungu}}.$$\nKelajuan rambat cahaya di dalam air adalah $v = \\frac{c}{n}$. Karena $n_{\\text{kuning}} < n_{\\text{hijau}}$, maka $v_{\\text{kuning}} > v_{\\text{hijau}}$, artinya cahaya kuning merambat lebih cepat daripada cahaya hijau (pilihan B benar). Panjang gelombang di dalam air adalah $\\lambda_{\\text{air}} = \\lambda_{\\text{udara}}/n < \\lambda_{\\text{udara}}$, sehingga pilihan D salah.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Seseorang dapat membaca buku dengan baik pada jarak $50\\ \\text{cm}$. Jika jarak baca normal $30\\ \\text{cm}$, orang itu membutuhkan kacamata baca berkekuatan .... dioptri.\n\nA. $-1{,}33$\nB. $-0{,}75$\nC. $+0{,}75$\nD. $+1{,}33$',
          answer: 'D. $+1{,}33$',
          principle:
            'Kekuatan lensa positif untuk penderita hipermetropi/presbiopi dihitung dari persamaan lensa tipis $P = \\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s\'}$, dengan $s$ jarak baca normal dan $s\' = -\\text{PP}$ (bayangan maya di titik dekat mata).',
          solution:
            'Diketahui jarak benda (baca normal) $s = 30\\ \\text{cm} = 0{,}30\\ \\text{m}$ dan titik dekat mata $\\text{PP} = 50\\ \\text{cm}$, sehingga jarak bayangan maya di depan lensa $s\' = -0{,}50\\ \\text{m}$. Kekuatan lensa yang dibutuhkan adalah\n$$P = \\frac{1}{s} + \\frac{1}{s\'} = \\frac{1}{0{,}30} - \\frac{1}{0{,}50} = \\frac{10}{3} - 2 = +\\frac{4}{3}\\ \\text{dioptri}.$$\nDalam bentuk desimal dua angka di belakang koma, $P = +1{,}33\\ \\text{dioptri}$.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Sebuah benda diletakkan $10\\ \\text{cm}$ di depan sebuah lensa konvergen dengan jarak fokus $5\\ \\text{cm}$. Sebuah cermin konvergen dengan jarak fokus $5\\ \\text{cm}$ ditaruh $5\\ \\text{cm}$ di belakang lensa itu. Bayangan akhir benda terbentuk pada posisi ....\n\nA. $5\\ \\text{cm}$ di depan lensa\nB. $2{,}5\\ \\text{cm}$ di belakang cermin\nC. $5\\ \\text{cm}$ di depan cermin\nD. $2{,}5\\ \\text{cm}$ di belakang lensa',
          answer: 'D. $2{,}5\\ \\text{cm}$ di belakang lensa',
          principle:
            'Pada sistem optik gabungan lensa dan cermin, bayangan dari elemen pertama menjadi benda (nyata atau maya) bagi elemen kedua dengan menerapkan persamaan $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s\'}$.',
          solution:
            '1. **Pembentukan bayangan oleh lensa konvergen** ($f_1 = +5\\ \\text{cm}$, $s_1 = +10\\ \\text{cm}$):\n$$\\frac{1}{s_1\'} = \\frac{1}{f_1} - \\frac{1}{s_1} = \\frac{1}{5} - \\frac{1}{10} = \\frac{1}{10} \\implies s_1\' = +10\\ \\text{cm}.$$\nBayangan pertama berada $10\\ \\text{cm}$ di belakang lensa.\n2. **Pembentukan bayangan oleh cermin konvergen** ($f_2 = +5\\ \\text{cm}$, jarak lensa–cermin $d = 5\\ \\text{cm}$):\nKarena $s_1\' = 10\\ \\text{cm} > d = 5\\ \\text{cm}$, sinar konvergen menuju titik $5\\ \\text{cm}$ di belakang cermin, sehingga menjadi **benda maya** bagi cermin dengan $s_2 = -(s_1\' - d) = -5\\ \\text{cm}$. Maka\n$$\\frac{1}{s_2\'} = \\frac{1}{f_2} - \\frac{1}{s_2} = \\frac{1}{5} - \\frac{1}{-5} = \\frac{2}{5} \\implies s_2\' = +2{,}5\\ \\text{cm}.$$\nTanda positif berarti bayangan hasil pemantulan cermin terletak $2{,}5\\ \\text{cm}$ di depan cermin. Karena jarak cermin dari lensa adalah $5\\ \\text{cm}$, posisi ini berada pada $5 - 2{,}5 = 2{,}5\\ \\text{cm}$ di belakang lensa.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Sebuah benda melakukan getaran harmonis sederhana pada pegas vertikal. Benda memiliki amplitudo $20\\ \\text{cm}$ dan periode $0{,}2$ detik. Maka fungsi getarnya adalah ....\n\nA. $y = 0{,}1\\ \\sin(4\\pi t)\\ \\text{m}$\nB. $y = 0{,}2\\ \\sin(8\\pi t)\\ \\text{m}$\nC. $y = 0{,}2\\ \\sin(10\\pi t)\\ \\text{m}$\nD. $y = 0{,}1\\ \\sin(10\\pi t)\\ \\text{m}$',
          answer: 'C. $y = 0{,}2\\ \\sin(10\\pi t)\\ \\text{m}$',
          principle:
            'Persamaan simpangan getaran harmonis sederhana (dengan fase awal nol) adalah $y(t) = A \\sin(\\omega t)$, di mana $\\omega = \\frac{2\\pi}{T}$.',
          solution:
            'Ubah amplitudo ke satuan meter: $A = 20\\ \\text{cm} = 0{,}2\\ \\text{m}$. Dengan periode $T = 0{,}2\\ \\text{s}$, frekuensi sudutnya adalah\n$$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{0{,}2} = 10\\pi\\ \\text{rad/s}.$$\nDengan demikian, persamaan simpangan getarnya adalah\n$$y = 0{,}2\\ \\sin(10\\pi t)\\ \\text{m}.$$',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Sebuah bandul sederhana memiliki panjang $1$ meter. Jika bandul digerakkan dengan amplitudo $5\\ \\text{cm}$, maka frekuensi bandul adalah .... ($g = 10\\ \\text{m/s}^{2}$)\n\nA. $\\frac{\\sqrt{10}}{2}$\nB. $\\frac{\\sqrt{10}}{2\\pi}$\nC. $\\frac{10}{2\\pi}$\nD. $\\frac{\\sqrt{10}}{3\\pi}$',
          answer: 'B. $\\frac{\\sqrt{10}}{2\\pi}$',
          principle:
            'Untuk simpangan kecil ($A \\ll L$), frekuensi bandul sederhana hanya bergantung pada percepatan gravitasi $g$ dan panjang tali $L$: $f = \\frac{1}{2\\pi}\\sqrt{\\frac{g}{L}}$.',
          solution:
            'Karena amplitudo $A = 5\\ \\text{cm} \\ll L = 1\\ \\text{m}$, bandul memenuhi aproksimasi sudut kecil. Frekuensi ayunan bandul adalah\n$$f = \\frac{1}{2\\pi}\\sqrt{\\frac{g}{L}} = \\frac{1}{2\\pi}\\sqrt{\\frac{10}{1}} = \\frac{\\sqrt{10}}{2\\pi}\\ \\text{Hz}.$$',
          rubric: OK
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Sebuah gelombang merambat melalui tali sepanjang $2$ meter dengan kecepatan $20\\ \\text{m/s}$. Frekuensi gelombang tersebut yakni $10\\ \\text{Hz}$. Maka panjang gelombangnya adalah ....\n\nA. $2$ meter\nB. $0{,}2$ meter\nC. $10$ meter\nD. $20$ meter',
          answer: 'A. $2$ meter',
          principle:
            'Hubungan cepat rambat gelombang $v$, frekuensi $f$, dan panjang gelombang $\\lambda$ adalah $v = \\lambda f$.',
          solution:
            'Dari persamaan dasar gelombang $v = \\lambda f$, panjang gelombangnya adalah\n$$\\lambda = \\frac{v}{f} = \\frac{20}{10} = 2\\ \\text{meter}.$$',
          rubric: OK
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Sebuah tali dipegang dua orang di bagian ujungnya dan menghasilkan getaran dengan frekuensi $2\\ \\text{Hz}$. Apabila panjang tali $5$ meter dan kecepatan rambat gelombangnya $10\\ \\text{m/s}$, maka panjang gelombang dan periode getaran masing-masing adalah ....\n\nA. $\\lambda = 2$ meter dan $T = 0{,}2$ detik\nB. $\\lambda = 5$ meter dan $T = 0{,}2$ detik\nC. $\\lambda = 5$ meter dan $T = 0{,}5$ detik\nD. $\\lambda = 2$ meter dan $T = 0{,}5$ detik',
          answer: 'C. $\\lambda = 5$ meter dan $T = 0{,}5$ detik',
          principle:
            'Panjang gelombang memenuhi $\\lambda = \\frac{v}{f}$ dan periode getaran adalah kebalikan dari frekuensi, $T = \\frac{1}{f}$.',
          solution:
            'Dengan frekuensi $f = 2\\ \\text{Hz}$ dan cepat rambat $v = 10\\ \\text{m/s}$:\n$$\\lambda = \\frac{v}{f} = \\frac{10}{2} = 5\\ \\text{meter},$$\n$$T = \\frac{1}{f} = \\frac{1}{2} = 0{,}5\\ \\text{detik}.$$',
          rubric: OK
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Dua buah partikel bermuatan berjarak $\\text{R}$ satu sama lain dan terjadi gaya tarik-menarik sebesar $\\text{F}$. Jika jarak antara kedua muatan dijadikan $3\\text{R}$, maka besarnya gaya tarik-menarik adalah ....\n\nA. $\\frac{1}{3}\\ \\text{F}$\nB. $3\\ \\text{F}$\nC. $\\frac{1}{9}\\ \\text{F}$\nD. $9\\ \\text{F}$',
          answer: 'C. $\\frac{1}{9}\\ \\text{F}$',
          principle:
            'Menurut Hukum Coulomb, gaya elektrostatis berbanding terbalik dengan kuadrat jarak antara kedua muatan: $F = k\\frac{|q_1 q_2|}{r^2}$.',
          solution:
            'Untuk pasangan muatan yang sama, $F \\propto \\frac{1}{r^2}$. Jika jarak mula-mula $r_1 = R$ dan jarak akhir $r_2 = 3R$, maka\n$$\\frac{F_2}{F_1} = \\left(\\frac{r_1}{r_2}\\right)^2 = \\left(\\frac{R}{3R}\\right)^2 = \\frac{1}{9} \\implies F_2 = \\frac{1}{9}\\ \\text{F}.$$',
          rubric: OK
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Dua buah muatan masing-masing $Q_{1} = 1\\ \\mu\\text{C}$ dan $Q_{2} = 4\\ \\mu\\text{C}$ terpisah sejauh $9\\ \\text{cm}$. Maka letak titik yang memiliki kuat medan listrik nol adalah ....\n\nA. $3\\ \\text{cm}$ dari $Q_{2}$\nB. $3\\ \\text{cm}$ dari $Q_{1}$\nC. $6\\ \\text{cm}$ dari $Q_{1}$\nD. $4\\ \\text{cm}$ dari $Q_{2}$',
          answer: 'B. $3\\ \\text{cm}$ dari $Q_{1}$',
          principle:
            'Titik bermedan listrik nol akibat dua muatan sejenis selalu terletak di garis hubung di antara kedua muatan, lebih dekat ke muatan yang nilainya lebih kecil, dengan $E_1 = E_2$.',
          solution:
            'Karena $Q_1$ dan $Q_2$ bertanda sama (keduanya positif), arah medan listrik $E_1$ dan $E_2$ saling berlawanan di antara kedua muatan. Misalkan titik berjarak $x$ dari $Q_1$, sehingga jaraknya dari $Q_2$ adalah $d - x$ dengan $d = 9\\ \\text{cm}$. Syarat medan listrik total nol:\n$$\\frac{k Q_1}{x^2} = \\frac{k Q_2}{(d - x)^2} \\implies \\frac{\\sqrt{Q_1}}{x} = \\frac{\\sqrt{Q_2}}{d - x}.$$\nSubstitusikan $Q_1 = 1\\ \\mu\\text{C}$, $Q_2 = 4\\ \\mu\\text{C}$, dan $d = 9\\ \\text{cm}$:\n$$\\frac{1}{x} = \\frac{2}{9 - x} \\implies 9 - x = 2x \\implies 3x = 9 \\implies x = 3\\ \\text{cm}\\text{ dari }Q_1.$$',
          rubric: OK
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Suatu pemanas listrik memiliki hambatan $25$ ohm dihubungkan dengan sumber tegangan $250$ volt dan bekerja selama $24$ jam, maka:\n1. Arus yang mengalir dalam pemanas $10$ ampere.\n2. Daya pemanas sebesar $2{,}5$ kWatt.\n3. Jika tarif listrik $\\text{Rp}50{,}00/\\text{kWh}$, selama waktu tersebut diperlukan biaya $\\text{Rp}300{,}00/\\text{kWh}$.\n\nPernyataan yang benar adalah ....\n\nA. 1 dan 2\nB. 1 dan 3\nC. 2 dan 3\nD. 1, 2, dan 3',
          answer: 'A. 1 dan 2',
          principle:
            'Hukum Ohm ($I = \\frac{V}{R}$), daya listrik ($P = V I$), energi listrik ($W = P t$), dan biaya pemakaian listrik.',
          solution:
            'Diketahui $R = 25\\ \\Omega$, $V = 250\\ \\text{V}$, dan $t = 24\\ \\text{jam}$.\n1. Arus listrik: $I = \\frac{V}{R} = \\frac{250}{25} = 10\\ \\text{A}$ (pernyataan 1 **benar**).\n2. Daya listrik: $P = V I = 250 \\times 10 = 2500\\ \\text{W} = 2{,}5\\ \\text{kW}$ (pernyataan 2 **benar**).\n3. Energi listrik terpakai: $W = P t = 2{,}5\\ \\text{kW} \\times 24\\ \\text{jam} = 60\\ \\text{kWh}$. Dengan tarif $\\text{Rp}50{,}00/\\text{kWh}$, total biaya adalah $60 \\times \\text{Rp}50{,}00 = \\text{Rp}3.000{,}00$, bukan $\\text{Rp}300{,}00$ (pernyataan 3 **salah**).\n\nJadi, pernyataan yang benar adalah 1 dan 2.',
          rubric: OK
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'Sebuah kumparan dengan $400$ lilitan mengalami perubahan fluks magnetik dari $0{,}6\\ \\text{Wb}$ menjadi $1{,}0\\ \\text{Wb}$ dalam waktu $0{,}2$ sekon. Maka GGL induksi yang dihasilkan sebesar ....\n\nA. $200$ volt\nB. $400$ volt\nC. $800$ volt\nD. $1.000$ volt',
          answer: 'C. $800$ volt',
          principle:
            'Menurut Hukum Faraday tentang induksi elektromagnetik, besar GGL induksi rata-rata sebanding dengan jumlah lilitan $N$ dan laju perubahan fluks magnetik: $|\\varepsilon| = N\\frac{|\\Delta \\Phi|}{\\Delta t}$.',
          solution:
            'Diketahui $N = 400$, $\\Delta \\Phi = 1{,}0 - 0{,}6 = 0{,}4\\ \\text{Wb}$, dan $\\Delta t = 0{,}2\\ \\text{s}$. Besar GGL induksinya adalah\n$$|\\varepsilon| = N\\frac{\\Delta \\Phi}{\\Delta t} = 400 \\times \\frac{0{,}4}{0{,}2} = 400 \\times 2 = 800\\ \\text{volt}.$$\n(Catatan verifikasi: hasil perhitungan eksak adalah $800$ volt pada pilihan C, sekaligus mengoreksi penanda kunci dan kesalahan ketik satuan waktu pada naskah sumber mentah).',
          rubric: OK
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'Seorang siswa mengamati seekor cacing tanah yang menggeliat menjauh ketika disentuh. Berdasarkan pengamatan tersebut menunjukkan ciri-ciri makhluk hidup ....\n\nA. berkembang biak\nB. bergerak\nC. respons terhadap rangsangan\nD. bernapas',
          answer: 'C. respons terhadap rangsangan',
          principle:
            'Iritabilitas (peka dan merespons rangsangan) adalah kemampuan makhluk hidup menerima rangsangan dari lingkungan dan memberikan tanggapan yang sesuai.',
          solution:
            'Meskipun cacing tampak bergerak, peristiwa inti yang diamati adalah timbulnya reaksi (menggeliat menjauh) akibat adanya stimulus eksternal berupa sentuhan. Hal ini secara khusus menunjukkan ciri **respons terhadap rangsangan** (iritabilitas).',
          rubric: OK
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Alat ukur yang digunakan siswa mengukur faktor abiotik kualitas lingkungan sungai secara kuantitatif adalah ....\n\nA. Jaring plankton dan lup tangan\nB. Termometer air dan DO meter\nC. Mikroskop dan kertas lakmus\nD. Kamera digital dan pH meter',
          answer: 'B. Termometer air dan DO meter',
          principle:
            'Pengukuran faktor abiotik secara kuantitatif menghasilkan data numerik parameter fisik/kimia lingkungan (seperti suhu dan kadar oksigen terlarut).',
          solution:
            '- **Termometer air** mengukur suhu air secara kuantitatif (dalam $^{\\circ}\\text{C}$) dan **DO meter** (*Dissolved Oxygen meter*) mengukur kadar oksigen terlarut secara kuantitatif (dalam $\\text{mg/L}$ atau $\\text{ppm}$); keduanya adalah parameter abiotik penting kualitas perairan (pilihan B benar).\n- Pilihan A: jaring plankton untuk sampel biotik dan lup untuk pengamatan kualitatif.\n- Pilihan C: kertas lakmus hanya indikator asam-basa kualitatif (perubahan warna), bukan nilai pH numerik presisi.\n- Pilihan D: kamera digital bukan alat ukur kuantitatif parameter abiotik.',
          rubric: OK
        },
        {
          label: '34',
          marks: 1,
          prompt:
            'Seorang siswa mengamati potongan melintang sel tumbuhan menggunakan mikroskop elektron dan mencatat beberapa ciri organel berikut:\n1. Organel terdiri atas saluran-saluran pipih yang membentang dari inti sel, permukaannya dipenuhi bintik-bintik kecil.\n2. Organel berbentuk bulat, memiliki dua lapisan membran, dan mengandung pigmen hijau.\n3. Organel besar berisi cairan, menekan sitoplasma ke tepi sel, dan hanya ditemukan pada sel tumbuhan.\n\nBerdasarkan data tersebut, pasangan organel dan fungsinya yang paling tepat adalah ....\n\nA. Nomor 1 adalah Ribosom – tempat sintesis protein\nB. Nomor 2 adalah Kloroplas – tempat respirasi seluler\nC. Nomor 1 adalah Retikulum endoplasma kasar – tempat sintesis dan pengangkutan protein\nD. Nomor 3 adalah Badan Golgi – tempat modifikasi protein',
          answer: 'C. Nomor 1 adalah Retikulum endoplasma kasar – tempat sintesis dan pengangkutan protein',
          principle:
            'Retikulum endoplasma kasar (REK) berupa sisterna pipih terhubung dengan selubung nukleus dan ditempeli ribosom (bintik kecil) untuk sintesis serta transpor protein.',
          solution:
            'Identifikasi ketiga organel dari ciri-cirinya:\n- Nomor 1: saluran pipih dari inti sel dengan bintik ribosom di permukaannya adalah **retikulum endoplasma kasar (REK)** yang berfungsi dalam sintesis dan pengangkutan protein (pilihan C benar; pilihan A keliru karena ribosom hanyalah bintik kecil tersebut, bukan sistem salurannya).\n- Nomor 2: organel bermembran ganda berpigmen hijau (klorofil) adalah **kloroplas**, yang berfungsi untuk **fotosintesis** (bukan respirasi seluler seperti pada pilihan B).\n- Nomor 3: kantong besar berisi cairan yang menekan sitoplasma ke tepi sel tumbuhan adalah **vakuola sentral** (bukan badan Golgi seperti pada pilihan D).',
          rubric: OK
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'Apa yang terjadi pada sistem pencernaan ketika seseorang mengonsumsi makanan yang tinggi serat?\n\nA. Pencernaan makanan menjadi lebih lambat\nB. Pencernaan makanan menjadi lebih cepat\nC. Penyerapan nutrisi menjadi lebih efektif\nD. Produksi asam lambung meningkat',
          answer: 'A. Pencernaan makanan menjadi lebih lambat',
          principle:
            'Serat pangan (terutama serat larut) menyerap air dan membentuk massa kental di lambung dan usus halus sehingga memperlambat pengosongan lambung serta laju pencernaan dan penyerapan zat gizi.',
          solution:
            'Makanan tinggi serat memperlambat laju pengosongan lambung dan memperpanjang waktu pencernaan enzimatik serta penyerapan glukosa di usus halus karena serat membentuk matriks/gel kental yang menghambat difusi enzim dan nutrien. Efek ini memberi rasa kenyang lebih lama dan mencegah lonjakan gula darah secara tiba-tiba (sementara di usus besar, serat membantu mempertahankan massa feses).',
          rubric: OK
        },
        {
          label: '36',
          marks: 1,
          prompt:
            'Apa yang terjadi pada sistem saraf ketika seseorang mengalami stres?\n\nA. Aktivitas sistem saraf simpatik menurun\nB. Aktivitas sistem saraf parasimpatik meningkat\nC. Aktivitas sistem saraf simpatik meningkat\nD. Produksi neurotransmitter menurun',
          answer: 'C. Aktivitas sistem saraf simpatik meningkat',
          principle:
            'Respons tubuh terhadap stres ("fight-or-flight") diaktifkan oleh cabang simpatik dari sistem saraf otonom.',
          solution:
            'Saat seseorang mengalami stres atau kondisi darurat, hipotalamus mengaktifkan **sistem saraf simpatik**, yang memicu peningkatan pelepasan adrenalin/noradrenalin, mempercepat denyut jantung, melebarkan saluran napas, dan meningkatkan aliran darah ke otot rangka. Sebaliknya, sistem saraf parasimpatik dominan saat tubuh beristirahat ("rest-and-digest") dan aktivitasnya ditekan saat stres.',
          rubric: OK
        },
        {
          label: '37',
          marks: 1,
          prompt:
            'Berikut ini adalah beberapa fungsi ginjal, kecuali ....\n\nA. Membuang racun, garam, air dan mineral berlebih\nB. Menghasilkan hormon eritropoetin\nC. Membantu mengatur tekanan darah\nD. Mengatur suhu tubuh',
          answer: 'D. Mengatur suhu tubuh',
          principle:
            'Ginjal berperan utama dalam ekskresi sisa metabolisme, osmoregulasi, pengaturan tekanan darah (sistem renin–angiotensin), dan produksi hormon eritropoetin, sedangkan termoregulasi berpusat di hipotalamus dan kulit.',
          solution:
            'Mari kita tinjau fungsi ginjal:\n- A benar: ginjal menyaring darah dan membuang urea, racun, serta kelebihan air, garam, dan mineral melalui urine.\n- B benar: ginjal menghasilkan hormon eritropoetin (EPO) yang merangsang pembentukan sel darah merah di sumsum tulang.\n- C benar: ginjal menghasilkan enzim renin dan mengatur volume cairan tubuh untuk mengendalikan tekanan darah.\n- D **bukan fungsi ginjal**: pengaturan suhu tubuh (termoregulasi) dijalankan terutama oleh pusat pengatur suhu di hipotalamus bersama kulit (kelenjar keringat dan vasodilatasi/vasokonstriksi pembuluh darah).',
          rubric: OK
        },
        {
          label: '38',
          marks: 1,
          prompt:
            'Mega trust adalah ....\n\nA. Zona subduksi yang relatif dalam dan panjang antara dua lempeng tektonik, di mana satu lempeng menunjam di bawah lempeng lainnya\nB. Zona subduksi yang relatif dangkal dan panjang antara dua lempeng tektonik, di mana satu lempeng menunjam di bawah lempeng lainnya\nC. Zona Erupsi relatif dangkal dan panjang antara dua lempeng tektonik, di mana satu lempeng menunjam di bawah lempeng lainnya\nD. Zona Erupsi relatif dangkal dan panjang antara dua lempeng tektonik, di mana satu lempeng menunjam di bawah lempeng lainnya',
          answer: 'B. Zona subduksi yang relatif dangkal dan panjang antara dua lempeng tektonik, di mana satu lempeng menunjam di bawah lempeng lainnya',
          principle:
            '*Megathrust* adalah bidang kontak antar-lempeng pada bagian dangkal dan panjang dari suatu zona subduksi tempat terakumulasinya energi regangan yang dapat memicu gempa bumi besar.',
          solution:
            'Zona *megathrust* merujuk pada bidang antarmuka sesar naik berukuran sangat besar di bagian **relatif dangkal dan memanjang** pada zona subduksi, tempat satu lempeng tektonik (umumnya lempeng samudra) menunjam ke bawah lempeng lainnya. Bagian bidang kontak dangkal ini sering terkunci sehingga mengumpulkan tegangan tektonik besar yang apabila lepas dapat menimbulkan gempa bumi berkekuatan tinggi dan berpotensi tsunami (bukan zona erupsi vulkanik seperti pada pilihan C dan D).',
          rubric: OK
        },
        {
          label: '39',
          marks: 1,
          prompt:
            'Di halaman sebuah rumah terdapat sebuah tiang dari besi dan sebuah tiang lagi dari kayu. Pada tengah malam ....\n\nA. suhu tiang besi sama dengan suhu tiang kayu\nB. suhu tiang besi lebih rendah dari suhu tiang kayu\nC. tiang kayu menyerap kalor dari udara lebih banyak daripada tiang besi\nD. tiang besi melepaskan kalor ke udara lebih banyak daripada tiang kayu',
          answer: 'A. suhu tiang besi sama dengan suhu tiang kayu',
          principle:
            'Menurut Hukum Ke-0 Termodinamika, benda-benda yang berada cukup lama di lingkungan yang sama akan mencapai kesetimbangan termal sehingga bersuhu sama dengan udara sekitarnya.',
          solution:
            'Pada tengah malam, baik tiang besi maupun tiang kayu telah berada di lingkungan udara halaman yang sama selama beberapa jam setelah matahari terbenam, sehingga keduanya mencapai kesetimbangan termal dengan udara sekitar dan memiliki **suhu yang sama**. Besi hanya *terasa* lebih dingin ketika disentuh tangan karena konduktivitas termal besi jauh lebih besar daripada kayu, sehingga lebih cepat mengalirkan kalor dari tangan.',
          rubric: OK
        },
        {
          label: '40',
          marks: 1,
          prompt:
            'Bayangan benda yang dibentuk oleh sebuah cermin konvergen ....\n\nA. selalu nyata\nB. maya, jika benda di titik fokus cermin\nC. sebesar benda, jika benda di titik fokus cermin\nD. nyata, jika benda sangat jauh dari cermin',
          answer: 'D. nyata, jika benda sangat jauh dari cermin',
          principle:
            'Untuk cermin konvergen (cermin cekung, $f > 0$), persamaan $\\frac{1}{s} + \\frac{1}{s\'} = \\frac{1}{f}$ memberikan $s\' \\to f > 0$ (bayangan nyata) ketika benda sangat jauh ($s \\to \\infty$).',
          solution:
            'Tinjau sifat bayangan cermin cekung (konvergen, $f > 0$) berdasarkan persamaan $\\frac{1}{s\'} = \\frac{1}{f} - \\frac{1}{s}$:\n- A salah: jika benda berada di antara puncak cermin dan titik fokus ($0 < s < f$), $s\' < 0$ sehingga bayangan bersifat maya.\n- B dan C salah: jika benda tepat di titik fokus ($s = f$), $\\frac{1}{s\'} = 0$ sehingga bayangan terbentuk di tak hingga ($s\' \\to \\infty$).\n- D benar: jika benda sangat jauh ($s \\to \\infty$), maka $\\frac{1}{s} \\to 0$ sehingga $\\frac{1}{s\'} \\to \\frac{1}{f}$ dan $s\' \\to +f > 0$, membentuk bayangan **nyata**, terbalik, dan sangat diperkecil di titik fokus cermin.',
          rubric: OK
        }
      ]
    }
  ]
};
