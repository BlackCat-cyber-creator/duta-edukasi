/**
 * Paket Soal Terstruktur: OSN-K IPA SD 2024 (20 soal pilihan ganda pilihan tanpa gambar)
 * Sumber: scraped_raw/osnk-ipa-sd-2024.md (30 soal sumber; 10 soal bergambar dilewati).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-ipa-sd-2024',
  slug: 'osnk-ipa-sd-2024',
  subject: 'olimpiade-sains',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'OSN-K IPA SD 2024',
  relatedChapterIds: [
    'ipa4-bab4-pancaindra-dan-pengamatan-ilmiah',
    'ipa5-bab2-bunyi-dan-pendengaran',
    'ipa5-bab4-ekosistem-dan-siklus-air',
    'ipa6-bab1-rangka-dan-mekanika-gerak-tubuh'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K IPA SD 2024',
  totalMarks: 20,
  instructions:
    'Kerjakan seluruh 20 soal pilihan ganda berikut. Setiap jawaban benar bernilai 1 poin (total 20 poin). Paket ini memuat 20 butir soal teks lengkap dari total 30 soal pada naskah sumber OSN-K IPA SD 2024; sebanyak 10 butir yang bergantung pada gambar dilewati (nomor sumber: 1, 4, 5, 14, 18, 19, 20, 21, 24, dan 25). Butir yang disertakan berasal dari nomor sumber 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 22, 23, 26, 27, 28, 29, dan 30.',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-ipa-sd-2024.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 20,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (20 soal, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Tiga tulang pada telinga yang menghubungkan antara gendang telinga dengan rumah siput adalah ....\n\nA. Landasan, sanggurdi, dan martil.\nB. Martil, landasan, dan sanggurdi.\nC. Sanggurdi, landasan, dan martil.\nD. Landasan, martil, dan sanggurdi.',
          answer: 'B. Martil, landasan, dan sanggurdi.',
          principle:
            'Urutan tulang pendengaran (osikula) di telinga tengah dari luar ke dalam adalah martil (maleus), landasan (inkus), dan sanggurdi (stapes).',
          solution:
            'Gelombang bunyi menggetarkan gendang telinga (membran timpani) di batas telinga luar dan telinga tengah. Getaran ini diteruskan secara berurutan oleh tiga tulang pendengaran di telinga tengah menuju tingkap oval rumah siput (koklea): tulang martil (maleus) yang menempel pada gendang telinga, kemudian tulang landasan (inkus), dan terakhir tulang sanggurdi (stapes) yang berhubungan dengan tingkap oval rumah siput.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Berikut pernyataan yang tepat mengenai sel darah merah pada manusia adalah ....\n\nA. Komponen seluler yang terbanyak kedua setelah leukosit pada darah manusia.\nB. Memiliki kemampuan gerak amuboid dan dapat menembus ke luar pembuluh.\nC. Memiliki kandungan pigmen berupa senyawa mioglobin yang berfungsi mengikat oksigen.\nD. Sel darah merah mereduksi sebagian besar organelnya termasuk nukleus.',
          answer: 'D. Sel darah merah mereduksi sebagian besar organelnya termasuk nukleus.',
          principle:
            'Eritrosit (sel darah merah) manusia matang tidak memiliki inti sel (nukleus) dan sebagian besar organel agar optimal mengangkut oksigen melalui hemoglobin.',
          solution:
            'Mari kita periksa setiap pernyataan:\n- A salah: sel darah merah (eritrosit) merupakan komponen seluler terbanyak pertama pada darah manusia, jauh lebih banyak daripada leukosit dan trombosit.\n- B salah: kemampuan gerak amuboid dan menembus ke luar dinding pembuluh darah (diapedesis) dimiliki oleh sel darah putih (leukosit).\n- C salah: pigmen pengikat oksigen di dalam sel darah merah adalah hemoglobin, sedangkan mioglobin terdapat pada sel otot.\n- D benar: selama pematangan, sel darah merah manusia mereduksi nukleus dan sebagian besar organelnya agar tersedia ruang maksimal untuk hemoglobin dan terbentuk cakram bikonkaf yang lentur.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Makhluk hidup yang berperan penting pada keberlangsungan siklus materi di dalam ekosistem adalah ....\n\nA. Keluwing (kaki seribu)\nB. Jamur\nC. Cacing tanah\nD. Semut',
          answer: 'B. Jamur',
          principle:
            'Dekomposer (pengurai), yaitu jamur dan bakteri, menguraikan bahan organik kompleks menjadi zat anorganik sederhana agar kembali masuk ke siklus materi ekosistem.',
          solution:
            'Dalam siklus materi (daur biogeokimia) di ekosistem, sisa makhluk hidup yang telah mati harus diuraikan menjadi unsur hara anorganik agar dapat diserap kembali oleh tumbuhan (produsen). Peran utama penguraian secara kimiawi ini dijalankan oleh dekomposer, yaitu jamur dan bakteri. Keluwing, cacing tanah, dan semut tidak menguraikan bahan organik menjadi zat anorganik, melainkan berperan sebagai detritivor atau konsumen yang menghancurkan serpihan organik (detritus) secara mekanik.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Tumbuhan yang memiliki bunga tidak mungkin masuk ke dalam kelompok ....\n\nA. Gymnospermae\nB. Angiospermae\nC. Monokotil\nD. Dikotil',
          answer: 'A. Gymnospermae',
          principle:
            'Tumbuhan berbunga sejati termasuk kelompok Angiospermae (terbagi atas Monokotil dan Dikotil), sedangkan Gymnospermae (tumbuhan berbiji terbuka) tidak memiliki bunga sejati.',
          solution:
            'Tumbuhan berbiji (Spermatophyta) dikelompokkan menjadi dua subdivisi:\n- Angiospermae (tumbuhan berbiji tertutup): memiliki bunga sejati sebagai alat perkembangbiakan dan bijinya terlindung di dalam bakal buah; kelompok ini terbagi menjadi kelas Monokotil dan Dikotil.\n- Gymnospermae (tumbuhan berbiji terbuka, seperti pinus, melinjo, dan pakis haji): tidak memiliki bunga sejati, melainkan alat reproduksi berbentuk kerucut yang disebut strobilus (runjung).\nOleh karena itu, tumbuhan yang memiliki bunga tidak mungkin termasuk Gymnospermae.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Dua organisme yang mempunyai kesamaan genus memiliki kemungkinan berikut ....\n\nA. Kelas yang sama, ordo yang berbeda\nB. Kelas yang berbeda, spesies yang sama\nC. Ordo yang sama, spesies yang berbeda\nD. Ordo yang berbeda, spesies yang sama',
          answer: 'C. Ordo yang sama, spesies yang berbeda',
          principle:
            'Dalam hierarki taksonomi, kesamaan takson pada tingkat genus menjamin kesamaan seluruh takson di atasnya (famili, ordo, kelas, filum/divisi, kingdom), tetapi dapat berbeda pada tingkat spesies.',
          solution:
            'Urutan tingkatan takson dari tertinggi ke terendah adalah: Kingdom $\\rightarrow$ Filum/Divisi $\\rightarrow$ Kelas $\\rightarrow$ Ordo $\\rightarrow$ Famili $\\rightarrow$ Genus $\\rightarrow$ Spesies.\nJika dua organisme memiliki genus yang sama (misalnya singa *Panthera leo* dan harimau *Panthera tigris*), maka seluruh takson di atas genus—termasuk famili, ordo, kelas, filum, dan kingdom—pasti sama, sedangkan spesiesnya dapat berbeda. Dengan demikian, pernyataan yang mungkin dan benar adalah ordo yang sama, spesies yang berbeda.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Dalam ekosistem sawah terjadi pola interaksi antarpopulasi dalam bentuk rantai makanan sebagai berikut:\nPadi $\\rightarrow$ tikus $\\rightarrow$ ular $\\rightarrow$ elang\nApabila salah satu mata rantai kita musnahkan, misalnya ular, maka kemungkinan yang akan terjadi adalah ....\n\nA. Produktivitas padi meningkat karena terjadinya penurunan populasi tikus.\nB. Produktivitas padi menurun karena terjadinya kepunahan pada populasi tikus.\nC. Produktivitas padi menurun karena terjadi kepunahan populasi ular akan diikuti dengan penurunan jumlah populasi tikus.\nD. Produktivitas padi menurun karena kepunahan populasi ular akan diikuti dengan terjadinya peningkatan populasi tikus.',
          answer:
            'D. Produktivitas padi menurun karena kepunahan populasi ular akan diikuti dengan terjadinya peningkatan populasi tikus.',
          principle:
            'Hilangnya predator dalam rantai makanan menyebabkan peningkatan populasi mangsa (konsumen primer) yang berdampak pada menurunnya populasi produsen.',
          solution:
            'Pada rantai makanan Padi $\\rightarrow$ tikus $\\rightarrow$ ular $\\rightarrow$ elang, ular merupakan pemangsa (predator) alami bagi tikus. Apabila populasi ular dimusnahkan:\n1. Tekanan pemangsaan terhadap tikus hilang sehingga populasi tikus meningkat tajam.\n2. Bertambahnya jumlah tikus meningkatkan kerusakan dan konsumsi terhadap tanaman padi.\n3. Akibatnya, produktivitas padi di sawah tersebut menurun.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Makanan yang disimpan dalam lemari es tidak mudah membusuk. Hal tersebut disebabkan ....\n\nA. Enzim pada tubuh bakteri tidak bekerja\nB. Bakteri pembusuk mati\nC. Bakteri pembusuk cepat berkembangbiak\nD. Endospora tidak dapat tumbuh',
          answer: 'A. Enzim pada tubuh bakteri tidak bekerja',
          principle:
            'Suhu rendah di dalam lemari es menonaktifkan kerja enzim metabolisme bakteri pembusuk sehingga laju perkembangbiakan dan pembusukan terhambat, bukan mematikan bakteri.',
          solution:
            'Bakteri pembusuk membutuhkan suhu optimal agar enzim-enzim metabolismenya dapat bekerja mencerna makanan dan berkembang biak. Pada suhu dingin di dalam lemari es (sekitar $0\\text{--}4\\,^\\circ\\text{C}$), bakteri pembusuk tidak langsung mati, melainkan menjadi tidak aktif karena enzim pada tubuhnya tidak dapat bekerja efektif. Akibatnya, proses pembusukan makanan melambat secara signifikan.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Tahapan selanjutnya setelah membuat hipotesis dalam metode ilmiah adalah ....\n\nA. Melakukan analisis data\nB. Melakukan penelitian\nC. Menemukan masalah\nD. Mengambil kesimpulan',
          answer: 'B. Melakukan penelitian',
          principle:
            'Urutan langkah metode ilmiah adalah merumuskan masalah, observasi, menyusun hipotesis, melakukan penelitian/eksperimen, menganalisis data, dan mengambil kesimpulan.',
          solution:
            'Metode ilmiah dilaksanakan secara berurutan:\n1. Menemukan dan merumuskan masalah.\n2. Mengumpulkan informasi atau melakukan pengamatan awal.\n3. Menyusun hipotesis (dugaan sementara).\n4. Melakukan penelitian (percobaan/eksperimen) untuk menguji hipotesis tersebut.\n5. Melakukan analisis data hasil penelitian.\n6. Mengambil kesimpulan.\nJadi, langkah tepat setelah menyusun hipotesis adalah melakukan penelitian.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Pernyataan yang tidak tepat berkaitan dengan perbandingan gigi yang kalian miliki dengan gigi pada ayahmu adalah ....\n\nA. Jumlah gigi seri saya sama banyak dengan gigi seri ayah.\nB. Jumlah gigi geraham ayah lebih banyak dari gigi geraham saya.\nC. Jumlah gigi taring ayah lebih banyak dari gigi taring saya.\nD. Jumlah gigi geraham depan ayah dan saya sama banyak.',
          answer: 'C. Jumlah gigi taring ayah lebih banyak dari gigi taring saya.',
          principle:
            'Baik susunan gigi susu anak maupun gigi tetap dewasa memiliki jumlah gigi seri ($8$) dan gigi taring ($4$) yang sama, sedangkan jumlah gigi geraham belakang bertambah pada orang dewasa.',
          solution:
            'Manusia mengalami fase gigi susu ($20$ buah pada anak) dan gigi permanen ($32$ buah pada dewasa):\n- Jumlah gigi seri pada anak maupun dewasa sama, yaitu $8$ buah ($4$ atas, $4$ bawah).\n- Jumlah gigi taring pada anak maupun dewasa juga sama, yaitu $4$ buah ($2$ atas, $2$ bawah).\n- Jumlah gigi geraham orang dewasa lebih banyak karena gigi geraham belakang (molar) permanen dapat tumbuh hingga $12$ buah, sedangkan pada anak usia sekolah dasar akhir gigi geraham depan (premolar) telah tumbuh berangsur lengkap $8$ buah sehingga jumlahnya setara dengan geraham depan orang dewasa.\nDengan demikian, pernyataan bahwa jumlah gigi taring ayah lebih banyak daripada gigi taring anak adalah tidak tepat.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Hewan berikut yang tidak memiliki lidah adalah ....\n\nA. Penyu\nB. Tokek\nC. Ayam\nD. Buaya',
          answer: 'D. Buaya',
          principle:
            'Buaya tidak memiliki lidah bebas yang dapat digerakkan atau dijulurkan karena lidahnya melekat pada dasar rongga mulut oleh selaput.',
          solution:
            'Mari kita bandingkan keempat hewan tersebut:\n- Penyu memiliki lidah meskipun berukuran pendek dan tidak menjulur.\n- Tokek memiliki lidah lentur yang digunakan untuk menangkap mangsa dan menjilat matanya.\n- Ayam memiliki lidah runcing yang membantu mengarahkan makanan ke kerongkongan.\n- Buaya tidak memiliki lidah yang dapat digerakkan atau dijulurkan ke luar karena jaringannya melekat erat pada dasar mulut oleh selaput (berfungsi membantu menutup saluran pernapasan saat menyelam), sehingga dalam klasifikasi dasar sering disebut tidak memiliki lidah bebas.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Hewan yang tidak bernafas menggunakan insang adalah ....\n\nA. Hiu paus\nB. Udang lobster\nC. Kuda laut\nD. Anjing laut',
          answer: 'D. Anjing laut',
          principle:
            'Mamalia laut seperti anjing laut, paus, dan lumba-lumba bernapas menggunakan paru-paru, bukan insang.',
          solution:
            'Kita periksa kelompok dan alat pernapasan masing-masing hewan:\n- Hiu paus adalah ikan bertulang rawan (Pisces) yang bernapas dengan insang.\n- Udang lobster adalah krustasea air (Arthropoda) yang bernapas dengan insang.\n- Kuda laut adalah ikan bertulang sejati (Pisces) yang bernapas dengan insang.\n- Anjing laut adalah mamalia laut (Mammalia) yang bernapas dengan paru-paru dan harus muncul ke permukaan air untuk mengambil udara.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Darah yang mengandung banyak oksigen tidak akan ditemui pada bagian berikut kecuali ....\n\nA. Arteri pulmonalis\nB. Vena porta hepatica\nC. Ventrikel kanan jantung\nD. Arteri renalis',
          answer: 'D. Arteri renalis',
          principle:
            'Arteri sistemik (seperti arteri renalis yang menuju ginjal) mengalirkan darah kaya oksigen, sedangkan arteri pulmonalis dan ventrikel kanan membawa darah miskin oksigen.',
          solution:
            'Kalimat "tidak akan ditemui pada bagian berikut kecuali..." berarti kita mencari bagian yang **mengandung darah kaya oksigen ($\\text{O}_2$)**.\n- Arteri pulmonalis membawa darah kaya $\\text{CO}_2$ (miskin $\\text{O}_2$) dari ventrikel kanan ke paru-paru.\n- Vena porta hepatica membawa darah vena (miskin $\\text{O}_2$, kaya nutrien) dari saluran pencernaan menuju hati.\n- Ventrikel kanan jantung menampung dan memompa darah miskin $\\text{O}_2$ menuju paru-paru.\n- Arteri renalis merupakan cabang aorta dalam peredaran darah besar yang membawa darah kaya $\\text{O}_2$ menuju ginjal.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Berikut ini pernyataan yang tidak berkaitan dengan karakteristik tumbuhan yang beradaptasi pada lingkungan yang miskin unsur hara adalah ....\n\nA. Memiliki laju transpirasi yang tinggi.\nB. Memiliki luas permukaan akar yang besar.\nC. Memiliki rata-rata pertumbuhan yang rendah.\nD. Akar bersimbiosis dengan jamur membentuk mikoriza.',
          answer: 'A. Memiliki laju transpirasi yang tinggi.',
          principle:
            'Tumbuhan di lingkungan miskin unsur hara beradaptasi dengan memperluas bidang serap akar, bersimbiosis (mikoriza), dan memperlambat laju pertumbuhan untuk menghemat nutrien.',
          solution:
            'Tumbuhan yang hidup pada tanah miskin unsur hara melakukan berbagai penyesuaian berikut:\n- Memperluas permukaan akar agar area penyerapan mineral yang jumlahnya sedikit menjadi lebih besar (B benar).\n- Memiliki rata-rata pertumbuhan yang rendah untuk menekan kebutuhan unsur hara harian (C benar).\n- Bersimbiosis mutualisme dengan jamur membentuk mikoriza guna membantu penyerapan air dan mineral seperti fosfat (D benar).\nSebaliknya, laju transpirasi yang tinggi (A) bukanlah adaptasi pada lingkungan miskin hara karena justru mempercepat kehilangan air dan tidak menghemat nutrien.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Every year, humans deforest millions of hectares of tropical rain forest. Which of the following is a likely consequence of this deforestation?\n\nA. Animal and plant populations will be eliminated as their habitats are destroyed, leading to a decrease in biodiversity.\nB. Increased carbon dioxide will reduce ozone concentrations in the atmosphere, resulting in higher levels of ultraviolet radiation on the earth\'s surface.\nC. Lower oxygen concentrations in the atmosphere will decrease the biodiversity of terrestrial animals.\nD. Increased carbon dioxide levels in the atmosphere will reduce plant and algae growth in other biomes.',
          answer:
            'A. Animal and plant populations will be eliminated as their habitats are destroyed, leading to a decrease in biodiversity.',
          principle:
            'Deforestasi hutan hujan tropis menghancurkan habitat alami berbagai spesies sehingga menyebabkan penurunan keanekaragaman hayati (biodiversitas).',
          solution:
            'Hutan hujan tropis merupakan bioma darat dengan keanekaragaman hayati tertinggi. Mari kita evaluasi setiap opsi:\n- A benar: penebangan hutan secara masif merusak habitat tempat hidup hewan dan tumbuhan sehingga banyak populasi punah dan keanekaragaman hayati menurun drastis.\n- B salah: penipisan lapisan ozon disebabkan oleh gas perusak ozon seperti CFC, bukan oleh kenaikan kadar karbon dioksida ($\\text{CO}_2$).\n- C salah: kadar oksigen di atmosfer tidak turun secara drastis akibat deforestasi hingga memusnahkan keanekaragaman hewan darat.\n- D salah: peningkatan $\\text{CO}_2$ di atmosfer bukan penyebab penurunan pertumbuhan tumbuhan dan alga di bioma lain.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Infeksi saluran kemih dapat disebabkan oleh bakteri yang masuk dari eksternal ke lingkungan internal. Kadang-kadang, infeksi kemudian dapat naik lebih jauh ke ginjal, dan menyebabkan infeksi ginjal. Manakah rute yang harus dilalui bakteri dari lingkungan eksternal ke ginjal untuk menyebabkan infeksi semacam itu?\n\nA. Ureter $\\rightarrow$ Kantung kemih $\\rightarrow$ Uretra $\\rightarrow$ Ginjal\nB. Uretra $\\rightarrow$ Ureter $\\rightarrow$ Kantung kemih $\\rightarrow$ Ginjal\nC. Kantung kemih $\\rightarrow$ Ureter $\\rightarrow$ Uretra $\\rightarrow$ Ginjal\nD. Uretra $\\rightarrow$ Kantung kemih $\\rightarrow$ Ureter $\\rightarrow$ Ginjal.',
          answer: 'D. Uretra $\\rightarrow$ Kantung kemih $\\rightarrow$ Ureter $\\rightarrow$ Ginjal.',
          principle:
            'Aliran keluar urine adalah Ginjal $\\rightarrow$ Ureter $\\rightarrow$ Kantung kemih $\\rightarrow$ Uretra, sehingga rute infeksi yang naik dari luar ke ginjal berurutan terbalik.',
          solution:
            'Secara anatomis, jalur normal pengeluaran urine dari ginjal hingga ke luar tubuh adalah:\n$$\\text{Ginjal} \\rightarrow \\text{Ureter} \\rightarrow \\text{Kantung kemih} \\rightarrow \\text{Uretra} \\rightarrow \\text{Lingkungan eksternal}$$\nKetika bakteri masuk dari lingkungan eksternal dan naik menuju ginjal (infeksi asenden), bakteri harus menempuh lintasan tersebut dengan arah sebaliknya:\n$$\\text{Uretra} \\rightarrow \\text{Kantung kemih} \\rightarrow \\text{Ureter} \\rightarrow \\text{Ginjal}$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Produksi Omega 3 sebagai suplai makanan yang penting bagi perkembangan otak secara massal dapat memanfaatkan teknik bioteknologi ....\n\nA. Kultur sel punca\nB. Kultur jaringan\nC. Fermentasi\nD. Kloning',
          answer: 'C. Fermentasi',
          principle:
            'Produksi massal asam lemak Omega-3 (seperti DHA dan EPA) memanfaatkan mikroalga atau mikroorganisme penghasil lipid melalui proses fermentasi di dalam bioreaktor.',
          solution:
            'Selain diekstraksi dari minyak ikan, asam lemak esensial Omega-3 (DHA dan EPA) kini diproduksi secara massal, higienis, dan berkelanjutan menggunakan teknik bioteknologi fermentasi. Mikroalga laut tertentu (misalnya *Schizochytrium*) dikultivasi dalam bioreaktor melalui proses fermentasi terkendali untuk menghasilkan minyak kaya Omega-3 dalam jumlah besar. Kultur sel punca, kultur jaringan, maupun kloning tidak digunakan untuk produksi massal senyawa ini.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Perhatikan beberapa metodologi bioteknologi berikut\n1. Hibridoma\n2. Radiasi Isotop\n3. Teknologi plasmid\n4. Kultur sel punca\nManakah yang dapat diaplikasikan dalam pengobatan COVID-19?\n\nA. 1, 3, 4\nB. 2, 3, 4\nC. 1, 2\nD. 3, 4',
          answer: 'A. 1, 3, 4',
          principle:
            'Penanganan dan terapi COVID-19 memanfaatkan teknik hibridoma (antibodi monoklonal), teknologi plasmid (protein rekombinan/vaksin), dan kultur sel punca (regenerasi jaringan dan kontrol peradangan).',
          solution:
            'Kita periksa penerapan masing-masing metode pada pengobatan COVID-19:\n1. **Hibridoma**: teknik fusi sel penghasil antibodi untuk memproduksi antibodi monoklonal spesifik terhadap virus SARS-CoV-2 sebagai imunoterapi.\n2. **Radiasi isotop**: bukan metode bioteknologi pengobatan COVID-19 (umumnya dipakai dalam pencitraan diagnostik atau terapi kanker).\n3. **Teknologi plasmid**: digunakan untuk menyisipkan gen target virus ke dalam vektor/mikroorganisme guna memproduksi protein rekombinan terapeutik dan komponen vaksin.\n4. **Kultur sel punca**: sel punca mesenkimal digunakan dalam terapi klinis untuk menekan peradangan berat (badai sitokin) serta membantu perbaikan jaringan paru pasien.\nJadi, metodologi yang dapat diaplikasikan adalah 1, 3, dan 4.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Fungsi klorofil dalam fotosintesis adalah ....\n\nA. Tempat berlangsungnya fotosintesis\nB. Penangkap energi cahaya\nC. Pengikat karbon dioksida\nD. Pembentuk senyawa glukosa',
          answer: 'B. Penangkap energi cahaya',
          principle:
            'Klorofil adalah pigmen hijau pada kloroplas yang berfungsi menyerap (menangkap) energi cahaya matahari untuk menggerakkan reaksi fotosintesis.',
          solution:
            'Klorofil merupakan pigmen hijau yang terletak pada membran tilakoid di dalam organel kloroplas. Fungsi utamanya dalam fotosintesis adalah menangkap energi cahaya matahari agar dapat diubah menjadi energi kimia pada tahap reaksi terang. Adapun tempat berlangsungnya fotosintesis adalah kloroplas (opsi A), pengikatan karbon dioksida dilakukan oleh enzim RuBisCO (opsi C), dan pembentukan glukosa terjadi pada rangkaian siklus Calvin atau reaksi gelap (opsi D).',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Pada periode 2020-2022 masyarakat dunia diresahkan oleh kasus Pandemi Covid-19. Penyakit ini disebabkan oleh ....\n\nA. Sars CoV-1\nB. Sars CoV-2\nC. virus MERS\nD. virus H5N1',
          answer: 'B. Sars CoV-2',
          principle:
            'COVID-19 (*Coronavirus Disease 2019*) disebabkan oleh infeksi virus SARS-CoV-2 (*Severe Acute Respiratory Syndrome Coronavirus 2*).',
          solution:
            'Pandemi COVID-19 yang terjadi pada tahun 2020–2022 disebabkan oleh infeksi virus korona galur baru yang dinamakan SARS-CoV-2 (*Severe Acute Respiratory Syndrome Coronavirus 2*). Adapun SARS-CoV-1 menyebabkan wabah SARS pada tahun 2002–2003, virus MERS menyebabkan penyakit *Middle East Respiratory Syndrome*, dan virus H5N1 merupakan penyebab flu burung.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Tumbuhan memerlukan beberapa faktor yang dapat menunjang proses pertumbuhannya, diantaranya sebagai berikut:\n1. Nutrien\n2. Gen\n3. Hormon\n4. Cahaya\n5. Temperatur\n6. Kelembaban\nFaktor internal yang dapat mempengaruhi proses tersebut adalah ....\n\nA. 1 dan 3\nB. 2 dan 4\nC. 1 dan 4\nD. 2 dan 3',
          answer: 'D. 2 dan 3',
          principle:
            'Pertumbuhan tumbuhan dipengaruhi oleh faktor internal (gen dan hormon/fitohormon) serta faktor eksternal (nutrien, cahaya, temperatur, air, dan kelembapan).',
          solution:
            'Faktor-faktor yang memengaruhi pertumbuhan dan perkembangan tumbuhan dikelompokkan menjadi dua:\n- **Faktor internal** (berasal dari dalam tubuh tumbuhan itu sendiri): **gen** (2, penentu sifat genetik) dan **hormon** tumbuhan seperti auksin, giberelin, dan sitokinin (3).\n- **Faktor eksternal** (berasal dari lingkungan luar): **nutrien** (1), **cahaya** (4), **temperatur** (5), dan **kelembaban** (6).\nDengan demikian, faktor internal ditunjukkan oleh nomor 2 dan 3.',
          rubric: OK
        }
      ]
    }
  ]
};
