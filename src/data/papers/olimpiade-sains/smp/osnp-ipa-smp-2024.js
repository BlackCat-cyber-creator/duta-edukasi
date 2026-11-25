/**
 * Paket Soal Terstruktur: OSN-P IPA SMP 2024 (32 soal pilihan ganda teks lengkap tanpa gambar)
 * Sumber: scraped_raw/osnp-ipa-smp-2024.md (50 butir sumber; 10 butir bergambar, 1 duplikat, dan 7 butir bermasalah/tidak lengkap dilewati).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnp-ipa-smp-2024',
  slug: 'osnp-ipa-smp-2024',
  subject: 'olimpiade-sains',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'OSN-P IPA SMP 2024',
  relatedChapterIds: [
    'ipa7-bab1-hakikat-ilmu-sains',
    'ipa7-bab4-gerak-dan-gaya',
    'ipa7-bab5-klasifikasi-makhluk-hidup',
    'ipa7-bab7-bumi-dan-tata-surya',
    'ipa8-bab1-sel',
    'ipa8-bab2-struktur-fungsi-tubuh',
    'ipa8-bab3-usaha-energi-pesawat-sederhana',
    'ipa8-bab4-getaran-gelombang-cahaya',
    'ipa9-bab1-pertumbuhan-perkembangan',
    'ipa9-bab2-koordinasi-reproduksi-homeostasis',
    'ipa9-bab3-tekanan',
    'ipa9-bab4-listrik-magnet-energi-alternatif',
    'ipa9-bab6-pewarisan-sifat-bioteknologi'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-P',
  title: 'OSN-P IPA SMP 2024',
  totalMarks: 32,
  instructions:
    'Kerjakan seluruh 32 soal pilihan ganda berikut. Setiap jawaban benar bernilai 1 poin (total 32 poin). Paket ini memuat 32 butir soal teks lengkap dari total 50 butir pada naskah sumber OSN-P IPA SMP 2024; sebanyak 18 butir dilewati, terdiri atas 10 butir yang bergantung pada gambar atau grafik (nomor sumber: 1, 7, 12, 13, 14, 16, 25, 27, 36, dan 41), 1 butir duplikat (nomor sumber: 47), serta 7 butir dengan ketidaksesuaian opsi kunci atau redaksi pada naskah sumber (nomor sumber: 15, 18, 19, 28, 30, 35, dan 44). Butir yang disertakan berasal dari nomor sumber 2, 3, 4, 5, 6, 8, 9, 10, 11, 17, 20, 21, 22, 23, 24, 26, 29, 31, 32, 33, 34, 37, 38, 39, 40, 42, 43, 45, 46, 48, 49, dan 50.',
  source: {
    org: 'OSN-P (Olimpiade Sains Nasional tingkat Provinsi)',
    file: 'scraped_raw/osnp-ipa-smp-2024.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 32,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (32 soal, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Proses transportasi zat pada sel dapat terjadi seperti di bawah ini:\n1. Perpindahan molekul secara acak mengikuti gradien konsentrasi secara langsung atau melalui bantuan protein pembawa.\n2. Perpindahan molekul air dari larutan hipotonis ke hipertonis melalui membran sel.\n3. Perpindahan molekul melawan gradien konsentrasi melalui bantuan protein pembawa atau membuat kantung membran.\n\nNama mekanisme sesuai dengan nomor urutan di atas adalah...\n\nA. Osmosis, difusi, dan transpor aktif\nB. Difusi, transpor aktif, dan osmosis\nC. Difusi, osmosis, dan transpor aktif\nD. Transpor aktif, difusi, dan osmosis',
          answer: 'C. Difusi, osmosis, dan transpor aktif',
          principle:
            'Transpor pasif (difusi dan osmosis) terjadi menuruni gradien konsentrasi/potensial air tanpa energi ATP, sedangkan transpor aktif melawan gradien konsentrasi dengan bantuan energi ATP.',
          solution:
            'Analisis masing-masing mekanisme transpor membran:\n1. Perpindahan molekul zat terlarut mengikuti gradien konsentrasi (dari konsentrasi tinggi ke rendah), baik langsung menembus lapisan ganda fosfolipid (difusi sederhana) maupun melalui protein saluran/pembawa (difusi terfasilitasi), merupakan **difusi**.\n2. Perpindahan molekul air melewati membran semipermeabel dari larutan hipotonis (konsentrasi zat terlarut rendah, potensial air tinggi) menuju larutan hipertonis (konsentrasi zat terlarut tinggi, potensial air rendah) merupakan **osmosis**.\n3. Perpindahan zat melawan gradien konsentrasi (dari rendah ke tinggi) menggunakan protein pompa atau pembentukan vesikel (kantung membran pada endositosis/eksositosis) memerlukan ATP dan disebut **transpor aktif**.\nUrutan yang tepat adalah difusi, osmosis, dan transpor aktif.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Diketahui gen $A$ memberikan warna merah dan gen $a$ memberikan warna putih pada bunga. Gen $A$ bersifat dominan terhadap gen $a$. Jika $F_1$ hasil perkawinan bunga merah ($AA$) dan bunga putih ($aa$) dikawinkan sesamanya dan menghasilkan anakan tumbuhan dengan bunga warna putih berjumlah $50$, maka jumlah tumbuhan dengan bunga warna merah heterozigot adalah...\n\nA. $50$\nB. $100$\nC. $150$\nD. $200$',
          answer: 'B. $100$',
          principle:
            'Persilangan monohibrid dominan penuh antara dua individu heterozigot ($Aa \\times Aa$) menghasilkan rasio genotipe $1\\ AA : 2\\ Aa : 1\\ aa$.',
          solution:
            'Langkah pertama, tentukan genotipe $F_1$ dari persilangan tetua homozigot:\n$$P_1 : AA \\times aa \\implies F_1 : 100\\%\\ Aa\\ (\\text{merah heterozigot}).$$\nLangkah kedua, $F_1$ disilangkan sesamanya:\n$$P_2 : Aa \\times Aa \\implies F_2 : 1\\ AA : 2\\ Aa : 1\\ aa.$$\nDiketahui jumlah individu berbunga putih ($aa$) adalah $50$. Karena rasio jumlah individu berbunga merah heterozigot ($Aa$) terhadap individu berbunga putih ($aa$) adalah $2 : 1$, maka:\n$$\\text{Jumlah } Aa = 2 \\times 50 = 100.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Sel pada jaringan xilem mengalami penebalan sehingga memiliki berlapis-lapis dinding sel. Hal tersebut menyebabkan...\n\nA. ukuran sel mengecil; ruang sitoplasma tetap\nB. ukuran sel membesar; ruang sitoplasma tetap\nC. ukuran sel tetap; ruang sitoplasma mengecil\nD. ukuran sel tetap; ruang sitoplasma membesar',
          answer: 'C. ukuran sel tetap; ruang sitoplasma mengecil',
          principle:
            'Dinding sel sekunder pada trakeid dan komponen pembuluh xilem didepositkan ke arah dalam di sebelah dalam dinding sel primer.',
          solution:
            'Setelah sel penyusun xilem mencapai ukuran penuhnya dan dinding sel primer terbentuk di bagian terluar, penebalan dinding sel sekunder (lignifikasi) berlangsung dengan penambahan lapisan lignin dan selulosa **ke arah dalam**. Karena batas terluar (dinding primer) sudah kaku, ukuran luar sel tetap, sedangkan rongga bagian dalam (ruang sitoplasma atau lumen sel) semakin menyempit/mengecil hingga akhirnya protoplas sel mati dan membentuk saluran pengangkut air.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Yang bukan merupakan contoh bioteknologi dalam bidang reproduksi adalah...\n\nA. bayi tabung\nB. hibridoma\nC. inseminasi buatan\nD. kloning',
          answer: 'B. hibridoma',
          principle:
            'Teknik hibridoma adalah fusi sel somatik penghasil antibodi dengan sel mieloma untuk memproduksi antibodi monoklonal di bidang kesehatan/imunologi, bukan teknik reproduksi organisme.',
          solution:
            'Tinjau tiap pilihan:\n- **Bayi tabung (IVF)**: fertilisasi sel telur dan sperma di luar tubuh untuk membantu reproduksi.\n- **Inseminasi buatan**: penyuntikan sperma ke saluran reproduksi betina untuk mempercepat perkembangbiakan.\n- **Kloning**: perbanyakan individu identik secara genetik melalui transfer inti sel somatik.\n- **Hibridoma**: penggabungan sel limfosit B penghasil antibodi dengan sel kanker (mieloma) untuk menghasilkan antibodi monoklonal dalam jumlah besar; teknik ini termasuk bioteknologi bidang kesehatan/kedokteran, bukan reproduksi.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Organel sel yang tidak masuk ke dalam sistem endomembran adalah...\n\nA. badan Golgi\nB. lisosom\nC. ribosom\nD. retikulum endoplasma',
          answer: 'C. ribosom',
          principle:
            'Sistem endomembran terdiri atas organel-organel bermembran yang saling berhubungan secara fisik atau melalui vesikel, sedangkan ribosom tidak memiliki membran.',
          solution:
            'Sistem endomembran pada sel eukariotik mencakup selubung nukleus, retikulum endoplasma, badan Golgi, lisosom, vakuola, dan membran plasma yang saling bertukar materi melalui pertunasan dan fusi vesikel. **Ribosom** tersusun atas rRNA dan protein tanpa selubung membran lipid, sehingga bukan merupakan bagian dari sistem endomembran.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Hormon di bawah ini merupakan fitohormon untuk merangsang diferensiasi adalah...\n\nA. Auksin, antokalin, dan asam traumalin\nB. Antokalin, filokalin, dan rhizokalin\nC. Filokalin, giberelin, dan sitokinin\nD. Rhizokalin, auksin, dan giberelin',
          answer: 'B. Antokalin, filokalin, dan rhizokalin',
          principle:
            'Kelompok fitohormon kalin berperan merangsang organogenesis (diferensiasi pembentukan organ tumbuhan): akar (rhizokalin), batang (kaulokalin), daun (filokalin), dan bunga (antokalin).',
          solution:
            'Dalam fisiologi tumbuhan, hormon **kalin** merupakan pengatur tumbuh yang secara khusus merangsang diferensiasi dan pembentukan organ spesifik:\n- **Rhizokalin**: merangsang pembentukan akar.\n- **Kaulokalin**: merangsang pembentukan batang.\n- **Filokalin**: merangsang pembentukan daun.\n- **Antokalin**: merangsang pembentukan bunga.\nSementara itu, asam traumalin berperan dalam penutupan luka (restitusi), auksin dalam pemanjangan sel dan dominansi apikal, giberelin dalam pemanjangan batang dan perkecambahan, serta sitokinin dalam pembelahan sel.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Komponen yang terlibat dalam sistem imun adaptif adalah...\n\nA. Sel B, antibodi, leukosit\nB. Sel T, antibodi, eosinofil\nC. Sel B, limfosit, interleukin\nD. Neutrofil, interferon, histamin',
          answer: 'C. Sel B, limfosit, interleukin',
          principle:
            'Sistem imun adaptif (spesifik) dijalankan oleh limfosit (sel B dan sel T) beserta antibodi dan sitokin pengatur seperti interleukin.',
          solution:
            'Sistem kekebalan tubuh terbagi atas imun bawaan (nonspesifik) dan imun adaptif (spesifik):\n- Pada pilihan A, *leukosit* masih mencakup sel imun bawaan seperti neutrofil dan basofil.\n- Pada pilihan B, *eosinofil* merupakan sel imun bawaan.\n- Pada pilihan D, *neutrofil, interferon,* dan *histamin* seluruhnya berperan pada respons imun bawaan dan inflamasi.\n- Pada pilihan C, **sel B**, **limfosit** (sel T dan sel B), dan **interleukin** (sitokin yang mengaktifkan proliferasi serta diferensiasi limfosit T dan B) merupakan komponen yang bekerja pada sistem imun adaptif.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Penyakit yang tergolong non-infeksius adalah...\n\nA. Anemia, polio, DBD\nB. Leukemia, pneumonia, diare\nC. Stroke, hepatitis, diabetes\nD. Polisitemia, Alzheimer, hipertensi',
          answer: 'D. Polisitemia, Alzheimer, hipertensi',
          principle:
            'Penyakit non-infeksius adalah gangguan kesehatan yang tidak disebabkan oleh infeksi patogen (bakteri, virus, jamur, atau parasit) dan tidak menular.',
          solution:
            'Identifikasi penyebab penyakit pada masing-masing pilihan:\n- A: Polio dan DBD disebabkan oleh infeksi virus.\n- B: Pneumonia disebabkan oleh infeksi bakteri/virus/jamur, dan sebagian besar diare akut disebabkan oleh patogen.\n- C: Hepatitis disebabkan oleh infeksi virus hepatitis.\n- D: **Polisitemia** (kelebihan produksi sel darah merah), **Alzheimer** (penyakit neurodegeneratif), dan **hipertensi** (tekanan darah tinggi) semuanya bersifat non-infeksius.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Kondisi yang mengalami kekurangan gizi dan gangguan dalam pertumbuhan disebut...\n\nA. Kwashiorkor\nB. Stunting\nC. Malnutrisi\nD. Retardasi',
          answer: 'B. Stunting',
          principle:
            'Stunting adalah kondisi gagal tumbuh pada anak akibat kekurangan gizi kronis dalam jangka panjang sehingga tinggi badan anak berada di bawah standar usianya.',
          solution:
            'Perbedaan istilah gangguan gizi dan pertumbuhan:\n- **Stunting**: kondisi gagal tumbuh akibat kekurangan gizi kronis (terutama pada 1.000 hari pertama kehidupan) yang menyebabkan gangguan pertumbuhan fisik (bertubuh pendek dibanding standar usia) serta perkembangan otak.\n- **Kwashiorkor**: kekurangan protein akut yang ditandai edema.\n- **Malnutrisi**: istilah umum untuk ketidakseimbangan asupan gizi (bisa kekurangan maupun kelebihan).\n- **Retardasi**: keterlambatan perkembangan mental atau fisik secara umum, tidak khusus merujuk pada kekurangan gizi.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Ditemukan tanaman di tepi sungai dengan ciri-ciri sebagai berikut:\n1. Berwarna hijau\n2. Mempunyai daun berbentuk sisik melingkari batang\n3. Batang berbuku-buku\n4. Mempunyai strobilus\n\nCiri-ciri di atas yang menunjukkan tanaman termasuk kelompok Pteridophyta adalah...\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$',
          answer: 'D. $4$',
          principle:
            'Tumbuhan paku ekor kuda (*Equisetum*, divisio Pteridophyta) memiliki struktur reproduksi penghasil spora berupa strobilus (kerucut sporangia) di ujung batangnya.',
          solution:
            'Deskripsi tanaman tersebut merujuk pada paku ekor kuda (*Equisetum debile*) yang sering tumbuh di tempat lembap atau tepi sungai. Warna hijau (1), daun sisik (2), dan batang berbuku-buku (3) juga dapat dijumpai pada berbagai kelompok tumbuhan berbiji (seperti bambu atau cemara). Sementara itu, di antara ciri tersebut, keberadaan **strobilus** (kumpulan sporofil pembentuk spora pada paku ekor kuda dan paku kawat) menjadi ciri alat reproduksi khas kelompok Pteridophyta yang membedakannya dari tumbuhan lumut maupun tumbuhan berbunga.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Berikut merupakan filum pada kerajaan hewan:\n1. Cnidaria\n2. Echinodermata\n3. Platyhelminthes\n4. Porifera\n\nFilum yang hanya memiliki $2$ lapisan tubuh, yaitu endodermis dan epidermis adalah...\n\nA. $1, 3$\nB. $1, 4$\nC. $2, 3$\nD. $2, 4$',
          answer: 'B. $1, 4$',
          principle:
            'Hewan diploblastik hanya memiliki dua lapisan sel/jaringan tubuh (lapisan luar epidermis/ektoderm dan lapisan dalam gastrodermis/endoderm), tidak memiliki mesoderm sejati.',
          solution:
            'Analisis lapisan tubuh masing-masing filum:\n1. **Cnidaria**: hewan diploblastik dengan lapisan luar epidermis dan lapisan dalam gastrodermis (endodermis) yang dipisahkan oleh mesoglea non-seluler.\n2. **Echinodermata**: hewan triploblastik selomata (memiliki ektoderm, mesoderm, dan endoderm).\n3. **Platyhelminthes**: hewan triploblastik aselomata.\n4. **Porifera**: memiliki dua lapisan sel utama, yaitu lapisan luar pinakoderm (epidermis) dan lapisan dalam koanoderm (endodermis), tanpa lapisan mesoderm sejati.\nJadi, filum yang hanya memiliki dua lapisan tubuh adalah 1 dan 4.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Hewan diurnal lebih banyak tidur pada malam hari.\nSEBAB\nKelenjar pineal akan menyekresikan hormon melatonin pada malam hari.\n\nKedua pernyataan di atas adalah...\n\nA. benar dan berhubungan\nB. benar tetapi tidak berhubungan\nC. hanya satu yang benar\nD. tidak benar',
          answer: 'A. benar dan berhubungan',
          principle:
            'Hormon melatonin yang disekresikan kelenjar pineal saat gelap mengatur ritme sirkadian dan memicu fase tidur pada hewan diurnal.',
          solution:
            '- **Pernyataan pertama (benar)**: Hewan diurnal aktif mencari makan dan beraktivitas pada siang hari serta beristirahat/tidur pada malam hari.\n- **Pernyataan kedua (benar)**: Kelenjar pineal di otak meningkatkan sekresi hormon melatonin ketika intensitas cahaya menurun pada malam hari.\n- **Hubungan sebab-akibat (berhubungan)**: Peningkatan kadar melatonin pada malam hari menjadi sinyal fisiologis ritme sirkadian yang menginduksi rasa kantuk dan tidur pada hewan diurnal.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Biji kopi luwak yang mengalami fermentasi bakteri pada saluran pencernaan dan dikumpulkan dari kotoran hewan luwak di habitatnya merupakan contoh produk bioteknologi konvensional.\nSEBAB\nBioteknologi konvensional adalah bioteknologi yang memanfaatkan organisme secara langsung untuk menghasilkan produk barang dan jasa yang bermanfaat bagi manusia melalui proses fermentasi.\n\nKedua pernyataan di atas adalah...\n\nA. benar dan berhubungan\nB. benar tetapi tidak berhubungan\nC. hanya satu yang benar\nD. tidak benar',
          answer: 'C. hanya satu yang benar',
          principle:
            'Bioteknologi mensyaratkan pemanfaatan agen biologis secara terarah oleh manusia dalam suatu sistem produksi, bukan sekadar proses alami tanpa intervensi teknologi.',
          solution:
            '- **Pernyataan pertama (salah)**: Biji kopi yang dimakan dan difermentasi di saluran pencernaan luwak liar di habitat alaminya lalu dikumpulkan dari kotorannya terjadi sebagai proses ekologis alami tanpa rekayasa atau pengendalian proses biologis oleh manusia, sehingga tidak tepat digolongkan sebagai produk bioteknologi.\n- **Pernyataan kedua (benar)**: Dalam definisi konvensional, bioteknologi konvensional memanfaatkan organisme/mikroorganisme secara langsung (umumnya melalui fermentasi, seperti tempe, yoghurt, dan keju) untuk menghasilkan barang dan jasa bagi manusia.\nKarena hanya satu pernyataan yang benar, jawabannya adalah C.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Mitokondria dan kloroplas merupakan organel penghasil energi pada sel tumbuhan.\nSEBAB\nMitokondria dan kloroplas dapat menghasilkan senyawa adenosine triphosphate (ATP).\n\nKedua pernyataan di atas adalah...\n\nA. benar dan berhubungan\nB. benar tetapi tidak berhubungan\nC. hanya satu yang benar\nD. tidak benar',
          answer: 'A. benar dan berhubungan',
          principle:
            'Mitokondria menghasilkan ATP melalui fosforilasi oksidatif (respirasi seluler), sedangkan kloroplas menghasilkan ATP melalui fotofosforilasi (reaksi terang fotosintesis).',
          solution:
            '- **Pernyataan pertama (benar)**: Pada sel tumbuhan terdapat mitokondria dan kloroplas yang keduanya berperan penting dalam penyediaan energi kimia bagi aktivitas sel.\n- **Pernyataan kedua (benar)**: Mitokondria menyintesis ATP dari oksidasi senyawa organik melalui fosforilasi oksidatif, dan kloroplas menyintesis ATP dari energi cahaya melalui fotofosforilasi pada reaksi terang.\n- **Hubungan sebab-akibat (berhubungan)**: Kemampuan menghasilkan molekul pembawa energi ATP inilah yang mendasari kedua organel tersebut disebut sebagai organel penghasil energi pada sel tumbuhan.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Eritrosit adalah tipe sel yang paling banyak dijumpai dalam darah.\nSEBAB\nPersentase jumlah sel darah merah dari darah pasien disebut hematokrit.\n\nKedua pernyataan di atas adalah...\n\nA. benar dan berhubungan\nB. benar tetapi tidak berhubungan\nC. hanya satu yang benar\nD. tidak benar',
          answer: 'B. benar tetapi tidak berhubungan',
          principle:
            'Eritrosit mendominasi komponen seluler darah dan proporsinya diukur sebagai nilai hematokrit, tetapi penamaan istilah hematokrit bukanlah penyebab banyaknya eritrosit.',
          solution:
            '- **Pernyataan pertama (benar)**: Dalam darah manusia, jumlah eritrosit (sekitar $4,5\\text{--}5,5 \\times 10^6\\ \\text{sel/mm}^3$) jauh melampaui jumlah leukosit dan trombosit.\n- **Pernyataan kedua (benar)**: Proporsi sel darah merah terhadap keseluruhan darah (yang diukur secara klinis sebagai persentase volume sel darah merah) disebut nilai hematokrit.\n- **Hubungan sebab-akibat (tidak berhubungan)**: Fakta bahwa proporsi sel darah merah disebut hematokrit merupakan definisi parameter klinis, bukan alasan biologis mengapa eritrosit menjadi sel terbanyak dalam darah.',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Sebuah mesin memiliki taraf intensitas bunyi $80\\ \\text{dB}$. Jika seratus mesin yang sama dibunyikan secara bersamaan, maka taraf intensitas bunyinya sekarang adalah...\n\nA. $90\\ \\text{dB}$\nB. $100\\ \\text{dB}$\nC. $120\\ \\text{dB}$\nD. $150\\ \\text{dB}$',
          answer: 'B. $100\\ \\text{dB}$',
          principle:
            'Untuk $n$ sumber bunyi identik yang berbunyi serentak, intensitas total menjadi $I_n = n I_1$, sehingga taraf intensitasnya memenuhi $TI_n = TI_1 + 10 \\log_{10} n$.',
          solution:
            'Diketahui taraf intensitas satu mesin $TI_1 = 80\\ \\text{dB}$ dan jumlah mesin $n = 100 = 10^2$.\nKarena taraf intensitas bunyi didefinisikan sebagai $TI = 10 \\log_{10}(I/I_0)$, maka untuk $n$ sumber bunyi identik:\n$$TI_n = 10 \\log_{10}\\!\\left(\\frac{n I_1}{I_0}\\right) = 10 \\log_{10}\\!\\left(\\frac{I_1}{I_0}\\right) + 10 \\log_{10} n = TI_1 + 10 \\log_{10} n.$$\nSubstitusikan nilai yang diketahui:\n$$TI_{100} = 80 + 10 \\log_{10}(10^2) = 80 + 10(2) = 100\\ \\text{dB}.$$',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Berikut ini adalah akibat yang dirasakan dari peristiwa revolusi Bumi:\n1. Terjadinya pergantian musim\n2. Terjadinya perubahan rasi bintang\n3. Terjadinya siang dan malam\n4. Terjadinya perbedaan lamanya siang dan malam\n\nJawaban yang benar adalah...\n\nA. $1, 2, 3$\nB. $1, 3, 4$\nC. $1, 2, 4$\nD. $2, 3, 4$',
          answer: 'C. $1, 2, 4$',
          principle:
            'Revolusi Bumi mengelilingi Matahari disertai kemiringan sumbu rotasi $23,5^\\circ$ menyebabkan pergantian musim, perubahan durasi siang-malam, dan perubahan rasi bintang yang tampak sepanjang tahun.',
          solution:
            'Evaluasi tiap fenomena:\n1. **Pergantian musim**: akibat revolusi Bumi dan kemiringan sumbu rotasi Bumi terhadap bidang ekliptika (benar).\n2. **Perubahan rasi bintang**: posisi Bumi terhadap bintang-bintang latar belakang berubah sepanjang orbit revolusinya sehingga rasi bintang yang terlihat di langit malam berganti tiap musim (benar).\n3. **Terjadinya siang dan malam**: akibat **rotasi** Bumi pada porosnya, bukan revolusi (salah).\n4. **Perbedaan lamanya siang dan malam**: akibat posisi belahan Bumi yang condong mendekati atau menjauhi Matahari selama berevolusi (benar).\nPernyataan yang benar adalah $1, 2, 4$.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Pada sebuah balok bermassa $200\\ \\text{gram}$ yang mula-mula diam diberikan tiga buah gaya serentak yang besarnya masing-masing $F_1 = 4\\ \\text{N}$, $F_2 = 3\\ \\text{N}$, dan $F_3 = 2\\ \\text{N}$. Arah $F_1$ dan $F_2$ ke kanan, sedangkan $F_3$ ke kiri. Kecepatan balok setelah berpindah sejauh $0,5\\ \\text{m}$ dari posisi awal adalah...\n\nA. $25\\ \\text{m/s}$\nB. $12,5\\ \\text{m/s}$\nC. $5\\ \\text{m/s}$\nD. $2,5\\ \\text{m/s}$',
          answer: 'C. $5\\ \\text{m/s}$',
          principle:
            'Menurut Teorema Usaha-Energi (atau Hukum II Newton dan kinematika GLBB), usaha gaya total sama dengan perubahan energi kinetik: $\\sum F \\cdot s = \\frac{1}{2} m v^2 - \\frac{1}{2} m v_0^2$.',
          solution:
            'Diketahui:\n$$m = 200\\ \\text{g} = 0,2\\ \\text{kg}, \\quad v_0 = 0, \\quad s = 0,5\\ \\text{m}.$$\nAmbil arah ke kanan sebagai arah positif, maka resultan gaya adalah:\n$$\\sum F = F_1 + F_2 - F_3 = 4 + 3 - 2 = 5\\ \\text{N}.$$\nBerdasarkan Hukum II Newton, percepatan balok adalah:\n$$a = \\frac{\\sum F}{m} = \\frac{5}{0,2} = 25\\ \\text{m/s}^2.$$\nDengan persamaan GLBB $v^2 = v_0^2 + 2as$:\n$$v^2 = 0 + 2(25)(0,5) = 25 \\implies v = 5\\ \\text{m/s}.$$',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Sebuah bola bermassa $50\\ \\text{gram}$ dilempar lurus ke atas dengan kecepatan $4\\ \\text{m/s}$. Percepatan gravitasi $10\\ \\text{m/s}^2$. Saat ketinggian bola mencapai $0,6\\ \\text{m}$, energi kinetik bola tersebut sebesar...\n\nA. $0,1\\ \\text{joule}$\nB. $0,2\\ \\text{joule}$\nC. $0,3\\ \\text{joule}$\nD. $0,4\\ \\text{joule}$',
          answer: 'A. $0,1\\ \\text{joule}$',
          principle:
            'Pada gerak di bawah pengaruh gaya gravitasi konservatif (gesekan udara diabaikan), berlaku kekekalan energi mekanik: $E_{k0} + E_{p0} = E_k + E_p$.',
          solution:
            'Diketahui:\n$$m = 50\\ \\text{g} = 0,05\\ \\text{kg}, \\quad v_0 = 4\\ \\text{m/s}, \\quad g = 10\\ \\text{m/s}^2, \\quad h = 0,6\\ \\text{m}.$$\nDengan menetapkan posisi pelemparan awal sebagai acuan ketinggian $h_0 = 0$, energi mekanik awal adalah:\n$$E_m = \\frac{1}{2} m v_0^2 + m g h_0 = \\frac{1}{2}(0,05)(4)^2 + 0 = 0,4\\ \\text{J}.$$\nPada ketinggian $h = 0,6\\ \\text{m}$, energi potensial bola adalah:\n$$E_p = mgh = (0,05)(10)(0,6) = 0,3\\ \\text{J}.$$\nDari kekekalan energi mekanik $E_m = E_k + E_p$, diperoleh energi kinetik bola:\n$$E_k = E_m - E_p = 0,4 - 0,3 = 0,1\\ \\text{J}.$$',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Sebuah bejana berisi penuh cairan dengan massa jenis $0,9\\ \\text{gram/cc}$. Ke dalam cairan itu dimasukkan sebuah benda secara perlahan, sehingga cairan sebanyak $100\\ \\text{cc}$ tumpah keluar dari bejana. Jika percepatan gravitasi $g = 10\\ \\text{m/s}^2$, besar gaya Archimedes yang dikerjakan cairan pada benda sama dengan...\n\nA. $0,10\\ \\text{N}$\nB. $0,45\\ \\text{N}$\nC. $0,90\\ \\text{N}$\nD. $1,00\\ \\text{N}$',
          answer: 'C. $0,90\\ \\text{N}$',
          principle:
            'Hukum Archimedes menyatakan bahwa gaya apung (gaya Archimedes) pada benda sama dengan berat fluida yang dipindahkan: $F_A = \\rho_f g V_{\\text{tumpah}}$.',
          solution:
            'Konversikan besaran ke satuan SI ($1\\ \\text{cc} = 1\\ \\text{cm}^3 = 10^{-6}\\ \\text{m}^3$):\n$$\\rho_f = 0,9\\ \\text{g/cm}^3 = 900\\ \\text{kg/m}^3, \\quad V_{\\text{tumpah}} = 100\\ \\text{cm}^3 = 10^{-4}\\ \\text{m}^3.$$\nKarena bejana awalnya penuh, volume fluida yang tumpah sama dengan volume bagian benda yang tercelup. Besar gaya Archimedes adalah:\n$$F_A = \\rho_f \\cdot g \\cdot V_{\\text{tumpah}} = 900 \\times 10 \\times 10^{-4} = 0,90\\ \\text{N}.$$',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Sebuah kendaraan melaju pada jalan yang lurus. Jika setiap $200\\ \\text{m}$ ditempuh dalam waktu $7,5\\ \\text{s}$, dapat diperkirakan kelajuan kendaraan tersebut sebesar...\n\nA. $26,7\\ \\text{km/jam}$\nB. $96\\ \\text{km/jam}$\nC. $150\\ \\text{km/jam}$\nD. $160\\ \\text{km/jam}$',
          answer: 'B. $96\\ \\text{km/jam}$',
          principle:
            'Kelajuan rata-rata dirumuskan sebagai $v = \\frac{s}{t}$, dan konversi dari $\\text{m/s}$ ke $\\text{km/jam}$ dilakukan dengan mengalikan faktor $3,6 = \\frac{3600}{1000}$.',
          solution:
            'Kelajuan dalam satuan $\\text{m/s}$ adalah:\n$$v = \\frac{s}{t} = \\frac{200\\ \\text{m}}{7,5\\ \\text{s}} = \\frac{400}{15} = \\frac{80}{3}\\ \\text{m/s}.$$\nKonversikan ke satuan $\\text{km/jam}$ ($1\\ \\text{m/s} = \\frac{3600}{1000}\\ \\text{km/jam} = \\frac{18}{5}\\ \\text{km/jam}$):\n$$v = \\frac{80}{3} \\times \\frac{18}{5} = 16 \\times 6 = 96\\ \\text{km/jam}.$$',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Sebuah balok berada di lantai licin. Balok itu diikatkan pada ujung dua pegas identik, masing-masing satu di sisi kiri dan kanan. Ujung lain masing-masing pegas diikatkan ke dinding. Balok digeser $1\\ \\text{cm}$ ke kiri, kemudian dilepaskan, sehingga berosilasi. Jika massa balok $200\\ \\text{gram}$ dan masing-masing pegas memiliki konstanta pegas $500\\ \\text{N/m}$, energi kinetik tertinggi sistem sama dengan...\n\nA. $0,00625\\ \\text{J}$\nB. $0,0125\\ \\text{J}$\nC. $0,025\\ \\text{J}$\nD. $0,05\\ \\text{J}$',
          answer: 'D. $0,05\\ \\text{J}$',
          principle:
            'Dua pegas yang mengapit balok di kiri dan kanan bekerja secara paralel dengan konstanta efektif $k_{\\text{eff}} = k_1 + k_2$, dan energi kinetik maksimum sama dengan energi potensial pegas awal di amplitudo.',
          solution:
            'Ketika balok digeser sejauh $A = 1\\ \\text{cm} = 0,01\\ \\text{m}$ ke kiri dari titik setimbang, pegas kiri tertekan sejauh $A$ dan pegas kanan teregang sejauh $A$. Kedua pegas memberikan gaya pemulih searah ke kanan sehingga tersusun **paralel**:\n$$k_{\\text{eff}} = k + k = 500 + 500 = 1000\\ \\text{N/m}.$$\nPada simpangan awal $A$ sebelum dilepaskan, energi mekanik seluruhnya berupa energi potensial elastik:\n$$E_m = \\frac{1}{2} k_{\\text{eff}} A^2 = \\frac{1}{2}(1000)(0,01)^2 = 500 \\times 10^{-4} = 0,05\\ \\text{J}.$$\nKarena lantai licin (tanpa gesekan), energi kinetik maksimum terjadi saat balok melewati titik setimbang ($x = 0$) ketika seluruh energi potensial berubah menjadi energi kinetik:\n$$E_{k,\\text{maks}} = E_m = 0,05\\ \\text{J}.$$',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Pada seutas tali terdapat dua titik yang ditandai, yaitu titik $A$ dan $B$. Jarak titik $A$ ke titik $B$ adalah $20\\ \\text{cm}$. Pada tali itu merambat gelombang dengan cepat rambat $2\\ \\text{m/s}$, sehingga titik $A$ dan $B$ berosilasi. Jika beda fase osilasi titik $A$ dan $B$ adalah $180^{\\circ}$, frekuensi osilasi masing-masing titik sama dengan...\n\nA. $10\\ \\text{Hz}$\nB. $8\\ \\text{Hz}$\nC. $5\\ \\text{Hz}$\nD. $4\\ \\text{Hz}$',
          answer: 'C. $5\\ \\text{Hz}$',
          principle:
            'Beda sudut fase $\\Delta \\theta = 180^{\\circ}$ bersesuaian dengan beda fase setengah panjang gelombang (atau kelipatan ganjilnya): $\\Delta x = \\left(n + \\frac{1}{2}\\right)\\lambda$, dan cepat rambat memenuhi $v = \\lambda f$.',
          solution:
            'Diketahui jarak dua titik $\\Delta x = 20\\ \\text{cm} = 0,2\\ \\text{m}$ dan cepat rambat $v = 2\\ \\text{m/s}$.\nBeda sudut fase $\\Delta \\theta = 180^{\\circ}$ menyatakan jarak $\\Delta x$ sama dengan kelipatan ganjil setengah panjang gelombang:\n$$\\Delta x = \\left(n + \\frac{1}{2}\\right)\\lambda, \\quad n = 0, 1, 2, \\dots$$\nUntuk nilai dasar $n = 0$ (beda fase paling sederhana $\\Delta \\varphi = \\frac{1}{2}$):\n$$0,2 = \\frac{1}{2}\\lambda \\implies \\lambda = 0,4\\ \\text{m}.$$\nDengan hubungan $v = \\lambda f$, diperoleh frekuensi:\n$$f = \\frac{v}{\\lambda} = \\frac{2}{0,4} = 5\\ \\text{Hz}.$$\n(Untuk $n \\ge 1$, frekuensinya adalah $15\\ \\text{Hz}, 25\\ \\text{Hz}, \\dots$ yang tidak ada pada pilihan, sehingga jawaban yang tepat adalah $5\\ \\text{Hz}$.)',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Berikut ini diberikan beberapa besaran fisika:\n1. massa\n2. percepatan\n3. panjang\n4. waktu\n\nBesaran yang dijadikan dasar untuk menentukan energi potensial adalah nomor...\n\nA. $1$ dan $3$\nB. $1, 2$, dan $3$\nC. $1, 3$, dan $4$\nD. $1, 2, 3$, dan $4$',
          answer: 'B. $1, 2$, dan $3$',
          principle:
            'Energi potensial gravitasi di dekat permukaan Bumi ditentukan oleh massa ($m$), percepatan gravitasi ($g$), dan ketinggian/panjang ($h$) melalui $E_p = m g h$.',
          solution:
            'Persamaan energi potensial gravitasi adalah:\n$$E_p = m \\cdot g \\cdot h.$$\nVariabel penyusun dalam rumus tersebut terdiri atas:\n- $m$: **massa** (nomor 1),\n- $g$: **percepatan** gravitasi (nomor 2),\n- $h$: ketinggian yang merupakan besaran **panjang** (nomor 3).\nOleh karena itu, besaran fisika yang langsung digunakan untuk menentukan energi potensial adalah nomor $1, 2$, dan $3$.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Sebuah lensa konvergen memiliki panjang fokus $20\\ \\text{cm}$. Di depan lensa tersebut sejauh $25\\ \\text{cm}$ ditaruh sebuah benda. Di belakang lensa itu sejauh $40\\ \\text{cm}$ diletakkan sebuah cermin konvergen dengan panjang fokus $20\\ \\text{cm}$. Bayangan akhir terbentuk sejauh ... di belakang lensa dengan sifat ...\n\nA. $25\\ \\text{cm}$, nyata\nB. $15\\ \\text{cm}$, nyata\nC. $25\\ \\text{cm}$, maya\nD. $15\\ \\text{cm}$, maya',
          answer: 'A. $25\\ \\text{cm}$, nyata',
          principle:
            'Pada sistem lensa dan cermin berurutan, bayangan yang dibentuk lensa pertama menjadi benda bagi cermin; jika bayangan lensa berada di belakang cermin, jarak benda bagi cermin bernilai negatif (benda maya).',
          solution:
            'Langkah 1 — Pembentukan bayangan oleh lensa konvergen ($f_1 = +20\\ \\text{cm}$, $s_1 = +25\\ \\text{cm}$):\n$$\\frac{1}{s_1\'} = \\frac{1}{f_1} - \\frac{1}{s_1} = \\frac{1}{20} - \\frac{1}{25} = \\frac{5 - 4}{100} = \\frac{1}{100} \\implies s_1\' = +100\\ \\text{cm}.$$\nBayangan oleh lensa cenderung terbentuk $100\\ \\text{cm}$ di belakang lensa.\n\nLangkah 2 — Cermin konvergen ($f_2 = +20\\ \\text{cm}$) diletakkan $d = 40\\ \\text{cm}$ di belakang lensa. Karena sinar konvergen dari lensa menuju titik $100\\ \\text{cm}$ di belakang lensa (atau $100 - 40 = 60\\ \\text{cm}$ di belakang cermin), bayangan lensa menjadi **benda maya** bagi cermin dengan jarak:\n$$s_2 = d - s_1\' = 40 - 100 = -60\\ \\text{cm}.$$\nHitung jarak bayangan dari cermin ($s_2\'$):\n$$\\frac{1}{s_2\'} = \\frac{1}{f_2} - \\frac{1}{s_2} = \\frac{1}{20} - \\frac{1}{-60} = \\frac{3 + 1}{60} = \\frac{4}{60} = \\frac{1}{15} \\implies s_2\' = +15\\ \\text{cm}.$$\nKarena $s_2\' > 0$, bayangan hasil pantulan cermin bersifat **nyata** dan terletak $15\\ \\text{cm}$ di depan cermin (ke arah lensa). Karena jarak cermin dari lensa adalah $40\\ \\text{cm}$, posisi bayangan dari lensa adalah:\n$$40\\ \\text{cm} - 15\\ \\text{cm} = 25\\ \\text{cm}\\ \\text{di belakang lensa}.$$',
          rubric: OK
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Dua buah lampu sejenis tertulis masing-masing $60\\ \\text{W}/220\\ \\text{V}$ dan $15\\ \\text{W}/110\\ \\text{V}$. Jika keduanya dipasang pada tegangan $110\\ \\text{V}$, maka:\n1. Dayanya memiliki perbandingan $1 : 1$\n2. Nilai hambatannya $1 : 1$\n3. Nilai hambatannya $2 : 1$\n4. Dayanya memiliki perbandingan $2 : 1$\n\nJawabannya adalah...\n\nA. $1$ dan $2$\nB. $1$ dan $3$\nC. $2$ dan $4$\nD. $3$ dan $4$',
          answer: 'A. $1$ dan $2$',
          principle:
            'Hambatan nominal lampu ditentukan dari spesifikasi tegangan dan daya terukurnya melalui $R = \\frac{V_{\\text{spesifikasi}}^2}{P_{\\text{spesifikasi}}}$, sedangkan daya aktual pada tegangan $V$ memenuhi $P = \\frac{V^2}{R}$.',
          solution:
            'Hitung hambatan masing-masing lampu dari spesifikasinya:\n$$R_1 = \\frac{V_1^2}{P_1} = \\frac{220^2}{60} = \\frac{48400}{60} = \\frac{2420}{3}\\ \\Omega,$$\n$$R_2 = \\frac{V_2^2}{P_2} = \\frac{110^2}{15} = \\frac{12100}{15} = \\frac{2420}{3}\\ \\Omega.$$\nJadi perbandingan nilai hambatannya adalah $R_1 : R_2 = 1 : 1$ (pernyataan 2 benar, 3 salah).\n\nKetika keduanya dipasang pada tegangan yang sama $V = 110\\ \\text{V}$:\n$$P_1\' = \\frac{V^2}{R_1}, \\quad P_2\' = \\frac{V^2}{R_2} \\implies P_1\' : P_2\' = R_2 : R_1 = 1 : 1$$\n(masing-masing mengonsumsi daya $15\\ \\text{W}$; pernyataan 1 benar, 4 salah). Maka pernyataan yang benar adalah $1$ dan $2$.',
          rubric: OK
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Berikut ini adalah faktor-faktor yang memengaruhi besarnya tegangan induksi pada generator:\n1. Kecepatan putar generator\n2. Banyaknya lilitan kawat\n3. Bahan magnet\n4. Luas penampang kumparan\n\nJawabannya adalah...\n\nA. $1, 2, 3$\nB. $1, 2, 4$\nC. $1, 3, 4$\nD. $2, 3, 4$',
          answer: 'B. $1, 2, 4$',
          principle:
            'Berdasarkan Hukum Induksi Faraday, gaya gerak listrik (GGL) maksimum generator arus bolak-balik dirumuskan oleh $\\varepsilon_{\\text{maks}} = N B A \\omega$.',
          solution:
            'GGL induksi maksimum pada kumparan generator yang berputar dalam medan magnet seragam adalah:\n$$\\varepsilon_{\\text{maks}} = N \\cdot B \\cdot A \\cdot \\omega,$$\ndengan:\n- $N$ = banyaknya lilitan kawat (nomor 2),\n- $B$ = kuat medan magnet,\n- $A$ = luas penampang kumparan (nomor 4),\n- $\\omega$ = kecepatan sudut / kecepatan putar generator (nomor 1).\nDengan demikian, faktor utama pada rumus tegangan induksi generator yang tercantum adalah $1, 2$, dan $4$.',
          rubric: OK
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Sebuah bandul berayun sambil dijatuhkan vertikal secara bebas dari suatu ketinggian. Anggaplah gesekan udara dapat diabaikan. Jika dinyatakan bahwa:\n1. bandul berayun makin lama makin cepat,\n2. energi kinetik bandul di simpangan terkecil tiap kali bertambah,\n3. amplitudo ayunan bandul makin lama makin besar,\n4. energi potensial bandul di simpangan terbesar tiap kali berkurang,\n\npernyataan yang benar adalah...\n\nA. $1, 2$, dan $3$\nB. $1$ dan $3$\nC. $2$ dan $4$\nD. $1, 2, 3$, dan $4$',
          answer: 'C. $2$ dan $4$',
          principle:
            'Dalam kerangka jatuh bebas dengan percepatan ke bawah $g$, gravitasi efektif bernilai nol ($g_{\\text{eff}} = g - g = 0$) sehingga tidak ada gaya pemulih gravitasi yang mempercepat ayunan, sedangkan dalam kerangka acuan Bumi ketinggian terus berkurang dan kelajuan jatuh terus bertambah.',
          solution:
            'Tinjau gerak bandul dari dua kerangka acuan:\n- Dalam kerangka yang ikut jatuh bebas bersama titik gantung bandul, percepatan gravitasi efektif adalah $g_{\\text{eff}} = g - g = 0$. Karena gaya pemulih gravitasi hilang, bandul tidak mengalami percepatan ayunan yang membuat ayunannya makin cepat (1 salah) maupun pertambahan amplitudo ayunan (3 salah).\n- Dalam kerangka pengamat di Bumi, selama sistem jatuh bebas, ketinggian bandul terus turun sehingga energi potensial gravitasinya ($E_p = mgh$) pada simpangan terbesar terus berkurang dari waktu ke waktu (4 benar), dan energi potensial tersebut terkonversi menjadi energi kinetik jatuh sehingga energi kinetik total bandul pada posisi simpangan terkecil juga terus bertambah (2 benar).\nJadi, pernyataan yang benar adalah $2$ dan $4$.',
          rubric: OK
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Apabila sebuah benda digerakkan terus mendekati sebuah cermin konvergen, bayangannya selalu bersifat nyata.\nSEBAB\nCahaya yang jatuh pada cermin konvergen dengan lintasan sejajar sumbu cermin selalu dipantulkan menuju fokus cermin.\n\nKedua pernyataan di atas adalah...\n\nA. benar dan berhubungan\nB. benar tetapi tidak berhubungan\nC. hanya satu yang benar\nD. tidak benar',
          answer: 'C. hanya satu yang benar',
          principle:
            'Cermin konvergen (cekung) membentuk bayangan maya apabila benda berada di antara fokus dan cermin ($0 < s < f$), sedangkan sinar sejajar sumbu utama selalu dipantulkan melalui titik fokus.',
          solution:
            '- **Pernyataan pertama (salah)**: Dari persamaan cermin $\\frac{1}{s\'} = \\frac{1}{f} - \\frac{1}{s}$ dengan $f > 0$, ketika benda digerakkan mendekati cermin hingga melewati titik fokus ($0 < s < f$), diperoleh $\\frac{1}{s\'} < 0 \\implies s\' < 0$. Artinya bayangan yang terbentuk bersifat **maya**, tegak, dan diperbesar, bukan selalu nyata.\n- **Pernyataan kedua (benar)**: Sesuai sifat sinar istimewa pertama cermin cekung (cermin konvergen), sinar datang yang sejajar sumbu utama selalu dipantulkan melewati titik fokus cermin.\nKarena hanya satu pernyataan yang benar, jawabannya adalah C.',
          rubric: OK
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Sebuah beban digantungkan pada sebuah pegas di udara dan dibuat berosilasi secara vertikal. Kemudian sistem pegas dan beban yang berosilasi itu dimasukkan seutuhnya ke dalam air. Jika gesekan air diabaikan, osilasi beban di dalam air lebih cepat dari osilasinya di udara.\nSEBAB\nBerat beban di dalam air lebih kecil dari beratnya di udara.\n\nKedua pernyataan di atas adalah...\n\nA. benar dan berhubungan\nB. benar tetapi tidak berhubungan\nC. hanya satu yang benar\nD. tidak benar',
          answer: 'C. hanya satu yang benar',
          principle:
            'Periode osilasi pegas-massa $T = 2\\pi\\sqrt{\\frac{m}{k}}$ tidak bergantung pada gaya konstan (seperti gravitasi maupun gaya apung), melainkan hanya pada massa dan konstanta pegas.',
          solution:
            '- **Pernyataan pertama (salah)**: Gaya apung Archimedes $F_A$ yang bekerja pada beban tercelup penuh bersifat konstan ke atas. Sama seperti gaya berat $mg$, gaya konstan hanya menggeser posisi titik setimbang pegas ke atas, tanpa mengubah konstanta pegas $k$ maupun massa beban $m$. Jika gesekan (redaman) air diabaikan, frekuensi osilasi $f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$ di dalam air **sama** dengan di udara, tidak lebih cepat.\n- **Pernyataan kedua (benar)**: Akibat adanya gaya apung ke atas dari air, berat semu beban saat berada di dalam air ($w\' = w - F_A$) lebih kecil daripada beratnya di udara.\nKarena hanya satu pernyataan yang benar, jawabannya adalah C.',
          rubric: OK
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'Semakin besar amplitudo sebuah sumber bunyi, maka nadanya semakin tinggi.\nSEBAB\nSemakin tinggi frekuensi sumber bunyi, maka intensitas bunyi semakin besar.\n\nKedua pernyataan di atas adalah...\n\nA. benar dan berhubungan\nB. benar tetapi tidak berhubungan\nC. hanya satu yang benar\nD. tidak benar',
          answer: 'D. tidak benar',
          principle:
            'Tinggi rendahnya nada bunyi ditentukan oleh frekuensi, sedangkan keras lemahnya bunyi (intensitas/taraf intensitas pada sumber berdaya tetap atau amplitudo getar) dikaitkan dengan amplitudo dan jarak pengamat.',
          solution:
            '- **Pernyataan pertama (salah)**: Amplitudo getaran menentukan kuat/lemahnya bunyi (kekerasan suara), sedangkan tinggi/rendahnya nada ditentukan oleh **frekuensi** getaran.\n- **Pernyataan kedua (salah)**: Frekuensi menentukan tinggi nada bunyi, bukan besaran penentu langsung keras tidaknya bunyi pada pembelajaran IPA SMP; untuk sumber bunyi dengan daya akustik $P$ yang sama pada jarak $r$, intensitas bunyi $I = \\frac{P}{4\\pi r^2}$ tidak meningkat hanya karena nadanya lebih tinggi.\nKarena kedua pernyataan salah, jawabannya adalah D.',
          rubric: OK
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'Sebuah penggaris dengan skala terkecil $1\\ \\text{mm}$ digunakan untuk mengukur panjang suatu benda. Jika salah satu ujung benda berada tepat pada posisi nol dan ujung lainnya berada pada posisi di antara angka $214$ dan $215\\ \\text{mm}$ skala penggaris, maka hasil pengukuran dapat dituliskan $214,1$ s.d. $214,9\\ \\text{mm}$ bergantung pada posisi ujung benda apakah lebih dekat ke angka $214$ atau $215\\ \\text{mm}$ skala penggaris.\nSEBAB\nAngka taksiran yang dituliskan dari hasil pengukuran bergantung pada kemampuan orang yang mengukur dalam memperkirakan seberapa besar lebih/kurang dari garis skala terakhir.\n\nKedua pernyataan di atas adalah...\n\nA. benar dan berhubungan\nB. benar tetapi tidak berhubungan\nC. hanya satu yang benar\nD. tidak benar',
          answer: 'D. tidak benar',
          principle:
            'Pada pengukuran tunggal menggunakan alat ukur berskala tetap seperti mistar, ketidakpastian mutlak baku adalah setengah skala terkecil ($\\Delta x = \\frac{1}{2}\\ \\text{NST}$), yang menentukan tingkat ketelitian angka taksiran.',
          solution:
            '- **Pernyataan pertama (salah)**: Penggaris memiliki nilai skala terkecil ($\\text{NST}$) sebesar $1\\ \\text{mm}$, sehingga ketidakpastian pengukuran tunggalnya adalah $\\Delta x = \\frac{1}{2} \\times 1\\ \\text{mm} = 0,5\\ \\text{mm}$. Dengan demikian, pelaporan hasil ukur dibulatkan pada ketelitian $0,5\\ \\text{mm}$ (misalnya $214,0 \\pm 0,5\\ \\text{mm}$ atau $214,5 \\pm 0,5\\ \\text{mm}$), bukan hingga ketelitian $0,1\\ \\text{mm}$ ($214,1$ s.d. $214,9\\ \\text{mm}$).\n- **Pernyataan kedua (salah)**: Penentuan angka taksiran dan batas pelaporan ketidakpastian pada pengukuran tunggal diatur oleh resolusi/skala terkecil alat ukur ($\\frac{1}{2}\\ \\text{NST}$), bukan bergantung secara subjektif pada kemampuan mata pengamat memperkirakan sepersepuluh skala.\nKarena kedua pernyataan salah, jawabannya adalah D.',
          rubric: OK
        }
      ]
    }
  ]
};
