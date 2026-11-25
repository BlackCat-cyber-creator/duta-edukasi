/**
 * Paket Soal Terstruktur: OSN-K Biologi SMA 2024 (14 skenario x 4 pernyataan Benar/Salah = 56 butir)
 * Sumber: scraped_raw/osnk-biologi-sma-2024.md (50 skenario). Hanya 14 skenario yang 100% dapat dijawab dari teks tanpa gambar/grafik/tabel yang hilang yang dimuat.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-bio-sma-2024',
  slug: 'osnk-biologi-sma-2024',
  subject: 'olimpiade-bio',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'OSN-K Biologi SMA 2024',
  relatedChapterIds: [
    'biologi10-bab4-ekosistem-dan-perubahan-lingkungan',
    'biologi11-bab1-sel-dan-bioproses-membran',
    'biologi11-bab3-sistem-gerak-sirkulasi-dan-pencernaan',
    'biologi12-bab1-pertumbuhan-perkembangan-dan-metabolisme',
    'biologi12-bab2-substansi-genetik-dan-pembelahan-sel',
    'biologi12-bab3-hukum-mendel-dan-hereditas-manusia',
    'biologi12-bab4-evolusi-dan-bioteknologi'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Biologi SMA 2024',
  totalMarks: 56,
  instructions:
    'Paket soal ini memuat 14 skenario terpilih (56 butir pernyataan Benar/Salah, masing-masing bernilai 1 poin; total 56 poin) dari 50 skenario naskah asli OSN-K Biologi SMA 2024. Skenario yang dimuat adalah nomor asli 2, 7, 9, 10, 19, 31, 36, 38, 39, 40, 42, 44, 46, dan 50 karena seluruh pernyataannya dapat dijawab tuntas secara teoretis dan kuantitatif dari teks. Sebanyak 36 skenario lain dilewati (nomor asli 1, 3, 4, 5, 6, 8, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 37, 41, 43, 45, 47, 48, dan 49) karena bergantung pada gambar, grafik, foto mikroskopi/anatomi, tabel, atau pohon filogenetik yang tidak terlampir pada arsip teks.',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-biologi-sma-2024.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Pematangan Oosit Katak & Jalur MAPK (Nomor Asli 2)',
      marks: 4,
      stem:
        'Aktivasi atau pematangan oosit katak ditandai melalui modul pensinyalan MAP kinase. Peningkatan hormon progesteron memicu modul ini dengan merangsang penerjemahan mRNA Mos. Protein Mos kemudian memulai kaskade fosforilasi sehingga berujung pada aktivasi oosit. Pematangan mudah dinilai secara visual dengan adanya bintik putih di tengah-tengah permukaan oosit yang berwarna coklat. Tentukan apakah pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Mos merupakan MAP kinase kinase kinase (MAPKKK) dan MEK1 merupakan MAP kinase kinase (MAPKK) pada oosit katak.',
          answer: 'Benar',
          principle: 'Hierarki tiga tingkat kaskade fosforilasi MAPK: MAPKKK $\\rightarrow$ MAPKK $\\rightarrow$ MAPK.',
          solution:
            'Pada oosit katak (*Xenopus*), protein serin/treonin kinase c-Mos bertindak sebagai **MAPKKK** yang disintesis *de novo* setelah stimulasi progesteron. Mos memfosforilasi dan mengaktifkan **MEK1** (yang merupakan **MAPKK**), dan MEK1 selanjutnya memfosforilasi p42 MAPK/ERK2 (**MAPK**) pada residu treonin dan tirosin untuk memicu aktivasi MPF dan pematangan meiosis.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Penambahan miRNA yang menarget mRNA Mos dapat menghambat pematangan oosit katak.',
          answer: 'Benar',
          principle: 'Interferensi RNA oleh miRNA menekan translasi atau mempercepat degradasi mRNA target.',
          solution:
            'Pematangan oosit katak bergantung pada translasi mRNA maternal *mos* menjadi protein Mos yang menginisiasi kaskade MAPK. Jika miRNA yang komplementer terhadap mRNA *mos* diintroduksikan, kompleks RISC akan mengikat mRNA *mos* sehingga menghambat translasi atau memicu degradasinya. Akibatnya protein Mos tidak terbentuk, kaskade MAPK gagal aktif, dan pematangan oosit terhambat.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'MAP kinase yang terfosforilasi dapat menjadi marka molekuler untuk aktivasi oosit katak.',
          answer: 'Benar',
          principle: 'Aktivasi jalur MAPK ditandai oleh fosforilasi ganda (p-MAPK) oleh MAPKK.',
          solution:
            'Dalam keadaan oosit belum matang (terhenti di profase I), MAPK berada dalam bentuk tidak terfosforilasi dan inaktif. Ketika sinyal progesteron mengaktifkan Mos dan MEK1, MAPK mengalami fosforilasi ganda (p-MAPK/ERK2 teraktivasi) bersamaan dengan pecahnya vesikel germinal (GVBD). Karena itu, deteksi p-MAPK (misalnya melalui Western blot dengan antibodi spesifik fosfo-MAPK) menjadi marka molekuler yang sahih untuk aktivasi oosit.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Reseptor hormon progesteron pada oosit katak merupakan reseptor intraseluler.',
          answer: 'Salah',
          principle: 'Pematangan oosit oleh progesteron menggunakan jalur pensinyalan nongenomik melalui reseptor membran.',
          solution:
            'Meskipun pada sel somatik hormon steroid umumnya bekerja melalui reseptor nuklear intraseluler untuk mengatur transkripsi, pematangan oosit katak oleh progesteron berlangsung tanpa memerlukan transkripsi (nongenomik). Progesteron berikatan dengan **reseptor progesteron membran** (*membrane progestin receptor*, seperti $\\text{mPR}\\beta$) di permukaan membran plasma oosit untuk menghambat adenilat siklase, menurunkan cAMP/PKA, dan memicu translasi mRNA *mos*.',
          rubric: OK
        }
      ]
    },
    {
      no: 2,
      title: 'Metabolisme Karbon Bakteri & Biosintesis Makromolekul (Nomor Asli 7)',
      marks: 4,
      stem:
        'Berdasarkan konsep jalur metabolisme karbon utama bakteri (glikolisis, pembentukan asetil-KoA, siklus Krebs, serta hubungan dengan biosintesis makromolekul seluler), tentukan apakah pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Monomer penyusun enzim sel bakteri sebagian berasal dari konversi senyawa kimia yang dihasilkan selama siklus Krebs.',
          answer: 'Benar',
          principle: 'Intermediet siklus Krebs berperan sebagai prekursor amfibolik biosintesis asam amino.',
          solution:
            'Enzim tersusun atas rantai polipeptida dengan monomer berupa **asam amino**. Siklus Krebs bersifat amfibolik: selain menghasilkan energi reduksi, senyawa intermedietnya menjadi rangka karbon untuk sintesis asam amino. Misalnya, $\\alpha$-ketoglutarat dikonversi menjadi glutamat (prekursor glutamin, prolin, dan arginin), sedangkan oksaloasetat dikonversi menjadi aspartat (prekursor asparagin, metionin, treonin, dan lisin).',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Asam amino hasil translasi dari kodon UAA dihasilkan dari konversi senyawa kimia yang dihasilkan selama proses glikolisis.',
          answer: 'Salah',
          principle: 'Kodon UAA adalah kodon stop (terminasi) dalam kode genetik standar.',
          solution:
            'Pada kode genetik standar, triplet `UAA` (bersama `UAG` dan `UGA`) merupakan **kodon stop (terminasi)** yang dikenali oleh faktor pelepas (*release factor*) untuk menghentikan sintesis polipeptida. Kodon `UAA` tidak memiliki tRNA pengadaptasi dan tidak mengode asam amino apa pun, sehingga pernyataan ini keliru.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Acetyl Co-A merupakan prekursor dari senyawa pembentuk membran sel bakteri.',
          answer: 'Benar',
          principle: 'Asetil-KoA adalah substrat awal biosintesis asam lemak penyusun fosfolipid membran.',
          solution:
            'Membran sel bakteri tersusun atas lapisan ganda **fosfolipid** yang ekor hidrofobiknya berupa rantai asam lemak. Biosintesis asam lemak di sitoplasma bakteri dimulai dari karboksilasi **asetil-KoA** menjadi malonil-KoA oleh asetil-KoA karboksilase, diikuti pemanjangan rantai karbon dua atom demi dua atom dari unit asetil-KoA.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Asam amino dan asam lemak sama-sama mengandung unsur C, H, dan N.',
          answer: 'Salah',
          principle: 'Perbedaan komposisi unsur kimia gugus fungsi pada asam amino dan asam lemak.',
          solution:
            'Asam amino memiliki gugus amina ($-\\text{NH}_2$) dan gugus karboksil ($-\\text{COOH}$), sehingga pasti mengandung unsur C, H, O, dan N (ditambah S pada sistein dan metionin). Sebaliknya, asam lemak adalah asam karboksilat berantai hidrokarbon panjang yang hanya mengandung unsur **C, H, dan O** tanpa atom nitrogen (N).',
          rubric: OK
        }
      ]
    },
    {
      no: 3,
      title: 'Prinsip Molekuler Polymerase Chain Reaction / PCR (Nomor Asli 9)',
      marks: 4,
      stem:
        'Polymerase chain reaction (PCR) adalah suatu teknik dalam biologi molekuler untuk memperbanyak fragmen DNA tertentu. PCR dijalankan dalam siklus-siklus yang terdiri atas tahapan denaturasi, annealing (penempelan primer), dan elongasi (pembentukan untai DNA baru). Tentukan apakah pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Setelah siklus ke-5, jumlah untai DNA baru yang terbentuk adalah sebanyak 32 kali lipat.',
          answer: 'Benar',
          principle: 'Amplifikasi eksponensial PCR mengikuti deret geometri $2^n$ per $n$ siklus.',
          solution:
            'Pada kondisi ideal dengan efisiensi $100\\%$, setiap siklus PCR menggandakan jumlah salinan DNA target. Setelah $n = 5$ siklus dari 1 molekul DNA untai ganda awal ($2$ untai templat), jumlah total DNA hasil amplifikasi mencapai $2^5 = 32$ kali lipat molekul DNA awal ($32$ molekul DNA untai ganda atau $64$ untai total, dengan $62$ untai di antaranya merupakan untai hasil sintesis baru). Dalam konvensi perhitungan amplifikasi PCR tingkat olimpiade SMA, faktor kelipatan setelah siklus ke-5 dinyatakan sebagai $2^5 = 32$ kali lipat.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Enzim yang digunakan dalam proses elongasi berasal dari organisme mesofilik.',
          answer: 'Salah',
          principle: 'PCR memerlukan DNA polimerase termostabil agar bertahan pada suhu denaturasi.',
          solution:
            'Tahap denaturasi PCR menggunakan suhu $94^\\circ\\text{C}–97^\\circ\\text{C}$ yang akan menyebabkan denaturasi permanen pada protein organisme mesofilik (yang hidup optimal pada suhu sedang, sekitar $20^\\circ\\text{C}–45^\\circ\\text{C}$). Oleh sebab itu, enzim elongasi PCR diisolasi dari organisme **termofilik/hipertermofilik**, seperti *Taq* polimerase dari bakteri *Thermus aquaticus*.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Perlakuan suhu tinggi ($94^{\\circ}\\text{C} – 97^{\\circ}\\text{C}$) menggantikan fungsi enzim helikase pada replikasi.',
          answer: 'Benar',
          principle: 'Denaturasi termal memutus ikatan hidrogen antar-pasangan basa komplementer DNA.',
          solution:
            'Dalam replikasi DNA *in vivo*, enzim helikase menggunakan energi ATP untuk memutus ikatan hidrogen antara dua untai DNA sehingga terbentuk garpu replikasi beruntai tunggal. Dalam PCR *in vitro*, pemisahan dua untai DNA cetakan dicapai secara fisik melalui pemanasan tinggi pada suhu $94^\\circ\\text{C}–97^\\circ\\text{C}$.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Primer yang digunakan dalam PCR merupakan molekul RNA.',
          answer: 'Salah',
          principle: 'Primer PCR berupa oligonukleotida DNA sintetik, bukan primer RNA seperti pada sel.',
          solution:
            'Pada replikasi seluler *in vivo*, enzim primase memang menyintesis primer RNA pendek. Namun pada reaksi PCR *in vitro*, primer yang dirancang dan ditambahkan adalah **oligonukleotida DNA untai tunggal** ($\\approx 18–25$ nukleotida) karena DNA jauh lebih stabil terhadap panas dan basa serta langsung menjadi bagian permanen dari produk amplikon.',
          rubric: OK
        }
      ]
    },
    {
      no: 4,
      title: 'Biogenesis Eksosom dan Topologi Membran Sel (Nomor Asli 10)',
      marks: 4,
      stem:
        'Eksosom adalah vesikel berukuran nano yang disekresikan oleh hampir semua jenis sel. Sekresi eksosom terjadi ketika terdapat fusi antara badan multivesikular (MVB) dan membran plasma. Biogenesis eksosom adalah mekanisme kontrol kualitas protein, dan setelah dilepaskan, eksosom mengirimkan sinyal ke sel lain. Berdasarkan mekanisme biogenesis eksosom dan topologi membran sel eukariotik, tentukan apakah pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Konten pada lumen eksosom dapat berasal dari lumen badan Golgi.',
          answer: 'Salah',
          principle: 'Invaginasi membran endosom membentuk ILV/eksosom memerangkap isi sitosol, bukan lumen organel.',
          solution:
            'Eksosom berasal dari vesikel intraluminal (ILV) yang terbentuk melalui **pertunasan ke dalam** (*inward budding*) membran pembatas endosom akhir menjadi badan multivesikular (MVB). Saat membran endosom melekuk ke arah lumen endosom, materi yang terperangkap di dalam lumen ILV (yang kelak menjadi lumen eksosom) berasal dari **sitosol**, sedangkan lumen badan Golgi setara secara topologis dengan lumen endosom/MVB dan ruang ekstraseluler di luar eksosom.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Domain protein transmembran yang terglikosilasi akan berada pada lumen eksosom.',
          answer: 'Salah',
          principle: 'Topologi membran dipertahankan: domain non-sitosolik selalu menghadap lumen organel atau sisi ekstraseluler.',
          solution:
            'Glikosilasi protein terjadi pada sisi luminal RE dan badan Golgi (ekivalen topologis dengan sisi luar membran plasma dan lumen endosom). Ketika membran endosom melakukan invaginasi membentuk ILV, domain protein transmembran yang terglikosilasi tetap menghadap ke **lumen MVB (sisi luar ILV)**. Setelah MVB berfusi dengan membran plasma, domain terglikosilasi tersebut berada pada **permukaan ekstraseluler** eksosom, bukan di dalam lumennya.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Protein di lumen RE yang ditransport ke eksosom akan berada dalam intraluminal vesicle.',
          answer: 'Salah',
          principle: 'Protein terlarut jalur sekretori berada di ruang lumen MVB di luar vesikel intraluminal.',
          solution:
            'Protein terlarut dari lumen RE yang berpindah melalui vesikel ke badan Golgi dan endosom akan berada di **lumen endosom/MVB**, yaitu ruang di antara membran pembatas MVB dan bagian luar ILV. Protein ini tidak masuk ke bagian dalam ILV (yang berisi sitosol) dan akan dilepaskan sebagai protein bebas ke ruang ekstraseluler saat MVB berfusi dengan membran plasma.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Glikolipid dapat ditemukan di sisi ekstraseluler dari eksosom.',
          answer: 'Benar',
          principle: 'Glikolipid terdistribusi asimetris pada lapisan luar (non-sitosolik) membran plasma dan eksosom.',
          solution:
            'Glikolipid disintesis di sisi luminal badan Golgi dan ditransport ke **lapisan luar (ekstraseluler)** membran plasma. Setelah endositosis (menghadap lumen endosom), invaginasi ke dalam membentuk ILV (menghadap permukaan luar ILV di dalam MVB), serta fusi MVB dengan membran plasma, orientasi lapisan tersebut tetap terjaga sehingga glikolipid berada pada **sisi ekstraseluler** membran eksosom.',
          rubric: OK
        }
      ]
    },
    {
      no: 5,
      title: 'Adaptasi Sistem Pencernaan Herbivora vs Karnivora (Nomor Asli 19)',
      marks: 4,
      stem:
        'Berdasarkan jenis makanannya, mamalia dapat digolongkan sebagai herbivora, karnivora dan omnivora. Herbivora memakan makanan yang kaya karbohidrat dan serat. Sedangkan, karnivora memakan daging sehingga lebih rentan terserang patogen yang menyerang sesama hewan. Kondisi ini mengharuskan sistem pencernaan karnivora memiliki kemampuan untuk membunuh patogen yang lebih baik dari herbivora. Di sisi lain, herbivora harus memiliki sistem pencernaan yang memungkinkannya mencerna makanan kaya serat dan kaya karbohidrat. Tentukan apakah pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Saliva yang kaya amilase ditemukan pada herbivora namun tidak pada karnivora.',
          answer: 'Benar',
          principle: 'Kesesuaian enzim pencernaan oral dengan komposisi substrat utama dalam pakan.',
          solution:
            'Makanan herbivora kaya akan pati (amilum) dan polisakarida tumbuhan, sehingga banyak mamalia herbivora menghasilkan enzim $\\alpha$-amilase dalam saliva untuk memulai pemecahan pati menjadi maltosa di rongga mulut. Sebaliknya, karnivora sejati memakan jaringan hewan yang didominasi protein dan lemak dengan kandungan pati sangat minim, sehingga kelenjar salivanya tidak mensekresikan amilase.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Beberapa herbivora memiliki lambung yang lebih kompleks dibandingkan dengan karnivora.',
          answer: 'Benar',
          principle: 'Adaptasi ruang fermentasi mikrobial pada lambung ruminansia (*foregut fermenters*).',
          solution:
            'Hewan herbivora ruminansia (seperti sapi, domba, dan rusa) memiliki lambung majemuk yang terbagi menjadi empat kompartemen (rumen, retikulum, omasum, dan abomasum) untuk menampung mikroorganisme simbiotik penghasil selulase. Struktur ini jauh lebih kompleks dibandingkan lambung tunggal sederhana pada mamalia karnivora.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Untuk ukuran tubuh yang sama, hewan herbivora memiliki usus besar yang lebih panjang daripada hewan karnivora.',
          answer: 'Benar',
          principle: 'Alometri saluran pencernaan: pakan berserat tinggi memerlukan waktu retensi dan ruang fermentasi lebih besar.',
          solution:
            'Selulosa dinding sel tumbuhan jauh lebih sulit dicerna dibandingkan protein dan lemak daging. Secara anatomi komparatif (misalnya perbandingan koala dan koyote pada ukuran tubuh setara), herbivora memiliki saluran pencernaan yang jauh lebih panjang dibandingkan karnivora, mencakup usus halus serta **sekum dan usus besar (kolon)** yang panjang dan berkembang baik sebagai lokasi fermentasi serat (pada *hindgut fermenters*) serta penyerapan air dan asam lemak rantai pendek.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Meski sama-sama asam, pH lambung hewan karnivora lebih tinggi dari hewan herbivora.',
          answer: 'Salah',
          principle: 'Skala pH berbanding terbalik dengan konsentrasi ion $\\text{H}^+$ (keasaman).',
          solution:
            'Karnivora rentan terpapar patogen jaringan hewan dari bangkai atau mangsa sehingga membutuhkan sekresi asam klorida ($\\text{HCl}$) lambung yang sangat kuat untuk membunuh mikroba dan mengaktifkan pepsinogen dalam mencerna daging. Lingkungan yang **lebih asam** berarti memiliki nilai **pH lebih rendah** (misalnya $\\text{pH} \\approx 1–2$), bukan lebih tinggi dibandingkan herbivora.',
          rubric: OK
        }
      ]
    },
    {
      no: 6,
      title: 'Pewarisan Silsilah DNA Mitokondria / mtDNA (Nomor Asli 31)',
      marks: 4,
      stem:
        'Pak Tobi sedang mempelajari silsilah keluarganya. Ia ingin mengetahui kira-kira siapa saja yang memiliki sekuens DNA mitokondria (mtDNA) yang sama dengannya (dengan asumsi tidak terdapat mutasi apapun). Tentukan apakah kerabat berikut ini pasti memiliki sekuens mtDNA yang sama (Benar) atau tidak (Salah) dengan Pak Tobi!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Neneknya.',
          answer: 'Salah',
          principle: 'Pewarisan maternal mtDNA hanya menelusuri garis ibu, sedangkan seseorang memiliki dua nenek.',
          solution:
            'DNA mitokondria (mtDNA) pada manusia diwariskan secara **maternal** (hanya dari ibu ke semua anaknya melalui sitoplasma ovum). Pak Tobi menerima mtDNA dari ibunya, yang menerimanya dari **nenek pihak ibu**. Namun istilah "neneknya" juga dapat merujuk pada **nenek pihak ayah** yang mtDNA-nya tidak diwariskan kepada ayah maupun Pak Tobi, sehingga tidak *pasti* sama.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Anak kandung perempuannya.',
          answer: 'Salah',
          principle: 'Ayah tidak mewariskan mtDNA kepada keturunannya.',
          solution:
            'Mitokondria sperma terletak di bagian leher/tengah dan umumnya tidak masuk atau didegradasi setelah fertilisasi (mitofagi paternal), sehingga seluruh mtDNA zigot berasal dari sel telur ibu. Karena Pak Tobi adalah laki-laki, anak kandung perempuannya menerima mtDNA dari istrinya (ibu si anak), bukan dari Pak Tobi.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Bibinya.',
          answer: 'Salah',
          principle: 'Hanya saudara perempuan kandung dari ibu (bibi pihak ibu) yang berbagi garis mtDNA yang sama.',
          solution:
            'Jika yang dimaksud adalah bibi dari pihak ayah (saudara perempuan ayah) atau bibi karena pernikahan (istri paman), sekuens mtDNA-nya berasal dari garis keluarga lain dan tidak sama dengan mtDNA ibu Pak Tobi. Hanya bibi biologis dari pihak ibu yang memiliki mtDNA identik, sehingga secara umum tidak *pasti* sama.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Adik kandung perempuannya.',
          answer: 'Benar',
          principle: 'Semua anak kandung dari ibu biologis yang sama mewarisi klon mtDNA maternal yang identik.',
          solution:
            'Pak Tobi dan adik kandung perempuannya berasal dari **ibu biologis yang sama**. Dengan asumsi tidak ada mutasi atau heteroplasmi, keduanya menerima salinan mtDNA identik dari sitoplasma oosit ibu mereka (meski hanya adik perempuannya yang kelak dapat meneruskan mtDNA tersebut ke anak-anaknya).',
          rubric: OK
        }
      ]
    },
    {
      no: 7,
      title: 'Kesetimbangan Hardy-Weinberg Sistem Golongan Darah ABO (Nomor Asli 36)',
      marks: 4,
      stem:
        'Sebuah populasi sedang berada dalam kesetimbangan Hardy-Weinberg. Sebanyak $36\\%$ individu dari populasi itu, atau setara dengan $19.440$ orang, diketahui memiliki golongan darah $O$. Sementara itu, sebanyak $4.320$ orang bergolongan darah $AB$. Tentukan apakah pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Frekuensi alel golongan darah $A$ lebih tinggi dibandingkan $B$.',
          answer: 'Salah',
          principle: 'Kesetimbangan Hardy-Weinberg tiga alel: $(p + q + r)^2 = 1$ dengan $p = f(I^A)$, $q = f(I^B)$, $r = f(i)$.',
          solution:
            'Hitung ukuran total populasi $N$ terlebih dahulu:\n$$N = \\frac{19.440}{0{,}36} = 54.000\\text{ orang}.$$\nFrekuensi genotipe golongan darah $O$ ($ii$) adalah $r^2 = 0{,}36$, sehingga $r = \\sqrt{0{,}36} = 0{,}6$. Maka $p + q = 1 - r = 0{,}4$.\nFrekuensi golongan darah $AB$ ($I^A I^B$) adalah:\n$$2pq = \\frac{4.320}{54.000} = \\frac{432}{5400} = \\frac{8}{100} = 0{,}08 \\implies pq = 0{,}04.$$\nDari $(p - q)^2 = (p + q)^2 - 4pq = (0{,}4)^2 - 4(0{,}04) = 0{,}16 - 0{,}16 = 0$, diperoleh $p = q = 0{,}2$. Jadi frekuensi alel $A$ dan $B$ **sama besar**, tidak lebih tinggi.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Orang bergolongan darah $O$ berjumlah paling banyak dibandingkan golongan darah lain.',
          answer: 'Benar',
          principle: 'Distribusi frekuensi fenotipe ABO pada kesetimbangan Hardy-Weinberg.',
          solution:
            'Dengan $p = 0{,}2$, $q = 0{,}2$, dan $r = 0{,}6$, frekuensi setiap golongan darah adalah:\n- $O$ ($ii$): $r^2 = (0{,}6)^2 = 0{,}36$ ($36\\%$)\n- $A$ ($I^A I^A + I^A i$): $p^2 + 2pr = (0{,}2)^2 + 2(0{,}2)(0{,}6) = 0{,}04 + 0{,}24 = 0{,}28$ ($28\\%$)\n- $B$ ($I^B I^B + I^B i$): $q^2 + 2qr = (0{,}2)^2 + 2(0{,}2)(0{,}6) = 0{,}04 + 0{,}24 = 0{,}28$ ($28\\%$)\n- $AB$ ($I^A I^B$): $2pq = 2(0{,}2)(0{,}2) = 0{,}08$ ($8\\%$)\nTerlihat golongan darah $O$ ($36\\%$) berjumlah paling banyak dibandingkan $A$ ($28\\%$), $B$ ($28\\%$), dan $AB$ ($8\\%$).',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Persentase individu homozigot lebih tinggi dibandingkan heterozigot.',
          answer: 'Salah',
          principle: 'Jumlah frekuensi genotipe homozigot $p^2 + q^2 + r^2$ dibandingkan heterozigot $2pq + 2pr + 2qr$.',
          solution:
            'Total frekuensi individu homozigot ($I^A I^A$, $I^B I^B$, dan $ii$) adalah:\n$$p^2 + q^2 + r^2 = (0{,}2)^2 + (0{,}2)^2 + (0{,}6)^2 = 0{,}04 + 0{,}04 + 0{,}36 = 0{,}44 = 44\\%.$$\nTotal frekuensi individu heterozigot ($I^A i$, $I^B i$, dan $I^A I^B$) adalah:\n$$1 - 0{,}44 = 0{,}56 = 56\\%.$$\nKarena $44\\% < 56\\%$, persentase homozigot justru lebih rendah daripada heterozigot.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Sebuah biro jodoh berhasil mempertemukan sepasang orang secara acak. Peluang kedua orang tersebut bergolongan darah $AB$ adalah kurang dari $1\\%$.',
          answer: 'Benar',
          principle: 'Aturan perkalian peluang dua kejadian saling bebas pada pemilihan acak.',
          solution:
            'Peluang satu individu acak dalam populasi bergolongan darah $AB$ adalah $P(AB) = 2pq = 0{,}08$. Karena dua orang dipertemukan secara acak dan saling bebas, peluang keduanya bergolongan darah $AB$ adalah:\n$$P(\\text{keduanya } AB) = 0{,}08 \\times 0{,}08 = 0{,}0064 = 0{,}64\\% < 1\\%.$$',
          rubric: OK
        }
      ]
    },
    {
      no: 8,
      title: 'Domestikasi Brassica oleracea & Spesiasi Alopoliploid (Nomor Asli 38)',
      marks: 4,
      stem:
        'Domestikasi merupakan proses mengadopsi spesies liar ke lingkungan hidup sehari-hari. Peristiwa ini didukung oleh proses alami maupun campur tangan manusia. Salah satu organisme terdomestikasi yang umum kita jumpai adalah *Brassica oleracea* atau kubis/kol. Spesies ini disilangkan intraspesies sehingga menghasilkan banyak produk seperti kale, brussel sprout, brokoli, dan sebagainya. Produk-produk tersebut berasal dari proses *selective breeding* untuk memfokuskan bagian mana dari tanaman yang akan dipanen. Selain itu, persilangan antarspesies (*B. oleracea*, *B. nigra*, dan *B. rapa*) juga dilakukan baik secara alami maupun artifisial menghasilkan spesies-spesies baru (*B. carinata*, *B. napus*, dan *B. juncea*). Tentukan apakah pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Berdasarkan konsep spesies biologis, persilangan antara brokoli dan kohlrabi akan menghasilkan keturunan yang fertil.',
          answer: 'Benar',
          principle: 'Konsep spesies biologis: anggota spesies yang sama mampu kawin silang menghasilkan keturunan fertil.',
          solution:
            'Brokoli dan kohlrabi (seperti halnya kale, kubis, kembang kol, dan *brussel sprout*) bukan spesies berbeda, melainkan kultivar hasil seleksi artifisial dari satu spesies yang sama, yaitu *Brassica oleracea* ($2n = 18$). Oleh karena itu, persilangan keduanya menghasilkan keturunan yang viabel dan fertil.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Persilangan yang menghasilkan *B. carinata*, *B. napus*, dan *B. juncea* harus diikuti dengan replikasi DNA tanpa sitokinesis agar menghasilkan kromosom homolog.',
          answer: 'Benar',
          principle: 'Spesiasi alopoliploid (Segitiga U *Brassica*) memerlukan penggandaan kromosom agar meiosis dapat berlangsung normal.',
          solution:
            'Menurut model Segitiga U, *B. napus* ($AACC$), *B. juncea* ($AABB$), dan *B. carinata* ($BBCC$) merupakan **alopoliploid** hasil hibridisasi antarspesies *B. rapa* ($AA$), *B. nigra* ($BB$), dan *B. oleracea* ($CC$). Hibrid F1 antarspesies ($AC$, $AB$, atau $BC$) awalnya steril karena kromosom kedua induk tidak saling homolog sehingga gagal berpasangan saat meiosis. Diperlukan **penggandaan kromosom** (replikasi DNA/mitosis tanpa sitokinesis atau fusi gamet tak tereduksi) agar setiap kromosom memiliki pasangan homolog ($AACC$, $AABB$, $BBCC$) sehingga spesies baru menjadi fertil.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Persilangan *B. nigra* dengan *B. rapa* perlu melewati sawar (barrier) prazigotik maupun pascazigotik untuk menghasilkan spesies baru.',
          answer: 'Benar',
          principle: 'Isolasi reproduktif prazigotik dan pascazigotik menghambat hibridisasi antarspesies berbeda.',
          solution:
            '*Brassica nigra* dan *Brassica rapa* adalah dua spesies biologis yang berbeda sehingga secara alami terpisah oleh **sawar prazigotik** (misalnya perbedaan waktu berbunga, preferensi polinator, atau inkompatibilitas serbuk sari-putik) dan **sawar pascazigotik** (misalnya kematian embrio hibrid atau sterilitas hibrid F1 akibat ketiadaan kromosom homolog). Pembentukan spesies baru (*B. juncea*) hanya berhasil setelah kedua jenis sawar tersebut terlampaui (termasuk melalui alopoliploidi).',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Produk-produk persilangan intraspesies *B. oleracea* (kale, brussel sprout, brokoli, dan sebagainya) umumnya memiliki perbedaan pada ekspresi gen, genotipe, dan jumlah kromosom.',
          answer: 'Salah',
          principle: 'Kultivar dalam satu spesies memiliki perbedaan alel dan regulasi ekspresi gen dengan jumlah kromosom yang sama.',
          solution:
            'Seluruh produk domestikasi intraspesies *B. oleracea* mengalami seleksi pada gen-gen pengatur perkembangan organ tertentu (misalnya kuncup bunga pada brokoli, batang pada kohlrabi, atau daun pada kale), sehingga berbeda dalam **genotipe** (komposisi alel) dan **pola ekspresi gen**. Namun karena berasal dari spesies yang sama, **jumlah kromosomnya tetap sama** ($2n = 18$), tidak berbeda.',
          rubric: OK
        }
      ]
    },
    {
      no: 9,
      title: 'Plastisitas Fenotipik Stomata dan Ekologi Respon Lingkungan (Nomor Asli 39)',
      marks: 4,
      stem:
        'Individu tanaman A diletakkan pada lingkungan dengan kadar $\\text{CO}_2$ yang berbeda. Pada kadar $\\text{CO}_2$ tinggi, daun-daun baru yang tumbuh memiliki jumlah stomata yang lebih sedikit dibandingkan ketika diletakkan di lingkungan dengan kadar $\\text{CO}_2$ yang lebih rendah. Tentukan apakah pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Keterangan di atas menunjukkan proses evolusi yang bekerja pada individu tanaman A.',
          answer: 'Salah',
          principle: 'Evolusi adalah perubahan frekuensi alel pada populasi lintas generasi, bukan perubahan fenotipe satu individu.',
          solution:
            'Individu organisme tidak berevolusi; yang berevolusi adalah **populasi** dari generasi ke generasi. Penurunan jumlah stomata pada daun baru milik satu individu tanaman A sebagai respons terhadap peningkatan $\\text{CO}_2$ merupakan contoh **plastisitas fenotipik** (penyesuaian perkembangan/aklimasi fisiologis dalam satu individu), bukan evolusi.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Proses serupa juga terjadi pada *Daphnia* ketika terjadi peningkatan tekanan predasi. Struktur-struktur defensif akan tumbuh pada individu-individu *Daphnia*. Ketika tekanan predasi hilang, struktur-struktur defensif tadi akan mengecil hingga hilang.',
          answer: 'Benar',
          principle: 'Pertahanan terinduksi (*inducible defenses*) pada *Daphnia* adalah contoh klasik plastisitas fenotipik.',
          solution:
            'Seperti respons stomata terhadap $\\text{CO}_2$, *Daphnia* menunjukkan **plastisitas fenotipik** yang dipicu sinyal kimia predator (*kairomone*). Ketika ada sinyal predator, *Daphnia* mengembangkan struktur defensif (*helmet* kepala yang runcing dan duri ekor lebih panjang) untuk menyulitkan pemangsaan; saat tekanan predasi hilang, struktur tersebut tidak dibentuk atau mengecil guna menghemat energi reproduksi.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Terjadi perubahan genotipe pada individu tanaman A yang mengakibatkan berubahnya jumlah stomata pada daun.',
          answer: 'Salah',
          principle: 'Plastisitas fenotipik mengubah fenotipe melalui regulasi ekspresi gen tanpa mengubah urutan DNA.',
          solution:
            'Selama hidup individu tanaman A, urutan nukleotida DNA (**genotipe**) di sel-selnya tidak berubah akibat perbedaan kadar $\\text{CO}_2$. Perubahan kerapatan stomata pada daun baru disebabkan oleh perubahan sinyal perkembangan dan **regulasi ekspresi gen** pada jaringan meristem/epidermis daun.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Kemampuan organisme untuk menghasilkan fenotipe-fenotipe berbeda sesuai dengan kondisi lingkungannya, seperti pada contoh di atas, memiliki basis genetik.',
          answer: 'Benar',
          principle: 'Norma reaksi (*norm of reaction*) plastisitas fenotipik dikodekan oleh genom dan dapat berevolusi.',
          solution:
            'Meskipun perbedaan fenotipe dipicu oleh faktor lingkungan, kapasitas untuk mendeteksi kadar $\\text{CO}_2$ (atau kairomon) dan mengaktifkan jalur transduksi sinyal pembentuk stomata dikodekan oleh **gen-gen regulator** di dalam genom. Oleh karena itu, plastisitas fenotipik (norma reaksi) merupakan sifat yang terwariskan dan dapat dibentuk oleh seleksi alam.',
          rubric: OK
        }
      ]
    },
    {
      no: 10,
      title: 'Efek Leher Botol Populasi (Bottleneck) dan Inbreeding pada Cheetah (Nomor Asli 40)',
      marks: 4,
      stem:
        'Cheetah (*Acinonyx jubatus*), yang dikenal sebagai hewan darat tercepat, berjumlah kurang dari $20.000$ individu pada rentang distribusinya di sub-Sahara Afrika yang semakin mengecil. Terdapat dua subspesies cheetah, *A. jubatus jubatus* di Afrika bagian Selatan dan *A. jubatus raineyi* di Afrika bagian timur. Secara konservasi, cheetah digolongkan sebagai hewan *endangered*/terancam punah. Upaya untuk mengembangbiakkan cheetah juga mengalami kesulitan, sehingga dilakukan berbagai analisis reproduktif dan genetik dari spesies tersebut. Belakangan diperkirakan bahwa populasi cheetah telah mengalami *bottleneck*/leher botol yang diikuti oleh *inbreeding*. Tentukan apakah pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Di masa Pleistosen dan Pliosen terdapat minimal empat spesies paleontologi (hanya ada bukti fosil), dan empat subspesies yang memiliki persebaran di Amerika Utara, Eropa, Asia, dan Afrika.',
          answer: 'Benar',
          principle: 'Catatan fosil Pliosen–Pleistosen menunjukkan radiasi geografis luas garis keturunan cheetah sebelum penyusutan populasi.',
          solution:
            'Berdasarkan kajian evolusi dan genetika konservasi cheetah (O\'Brien dkk.), pada masa Pliosen dan Pleistosen kelompok cheetah dan kucing mirip cheetah memiliki keanekaragaman jauh lebih tinggi—mencakup sedikitnya empat spesies paleontologi (*Acinonyx pardinensis*, *A. intermedius*, serta bentuk Amerika Utara *Miracinonyx inexpectatus* dan *M. trumani* dalam literatur klasik) serta berbagai subspesies yang tersebar di Amerika Utara, Eropa, Asia, dan Afrika—sebelum peristiwa kepunahan Pleistosen akhir menyisakan populasi kecil *A. jubatus*.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Variasi molekuler RFLP untuk lokus MHC, yaitu salah satu lokus paling polimorfik di mamalia, pada kedua subspesies cheetah saat ini jauh lebih tinggi dibandingkan spesies-spesies lainnya.',
          answer: 'Salah',
          principle: 'Efek *bottleneck* dan *inbreeding* menurunkan drastis keragaman genetik, termasuk pada kompleks MHC.',
          solution:
            'Kompleks histokompatibilitas utama (**MHC**) umumnya sangat polimorfik pada mamalia karena seleksi penyeimbang terhadap patogen. Namun akibat *bottleneck* populasi yang ekstrem pada cheetah modern, variasi RFLP lokus MHC-nya justru **sangat rendah/hampir monomorfik** dibandingkan mamalia lain. Hal ini dibuktikan secara eksperimental melalui cangkok kulit antar-individu cheetah yang tidak berkerabat yang ternyata diterima tanpa penolakan imun.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Variasi protein sel dan karakteristik morfologi dari tengkorak cheetah saat ini menunjukkan tingkat variasi yang setara dengan galur murni tikus laboratorium.',
          answer: 'Benar',
          principle: 'Keseragaman alozim dan asimetri morfologi tengkorak menjadi bukti klasik homozigositas tinggi akibat *inbreeding*.',
          solution:
            'Penelitian klasik O\'Brien dkk. menemukan bahwa heterozigositas protein/enzim (alozim) pada cheetah mendekati nol serta variasi dan asimetri morfologi tengkoraknya berada pada tingkat yang **setara dengan galur murni (*inbred strains*) tikus laboratorium** hasil perkawinan sekerabat puluhan generasi.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Saat ini cheetah memiliki spermatozoa yang normal, fekunditas meningkat, serta mortalitas anakan rendah.',
          answer: 'Salah',
          principle: 'Depresi silang dalam (*inbreeding depression*) menurunkan kualitas gamet, kesuburan, dan kesintasan anakan.',
          solution:
            'Tingginya homozigositas alel-alel resesif merugikan akibat *inbreeding* menyebabkan **depresi silang dalam** (*inbreeding depression*). Pada cheetah modern, hal ini tampak dari tingginya proporsi spermatozoa abnormal (sekitar $70\\%$ atau lebih), **fekunditas yang rendah** (sulit berkembang biak), serta **mortalitas anakan yang tinggi**.',
          rubric: OK
        }
      ]
    },
    {
      no: 11,
      title: 'Etologi: Perilaku Hierarki Dominansi (Pecking Order) Ayam (Nomor Asli 42)',
      marks: 4,
      stem:
        'Pada Ayam (*Gallus gallus*), terdapat perilaku *pecking order*, yaitu perilaku mematuk akan dilakukan oleh anak ayam dan ayam dengan dominansi tertinggi akan ditentukan oleh proses saling mematuk ini. Dominansi ini lalu menentukan urutan makan dari ayam hingga dewasa. Tentukan apakah pernyataan berikut Benar atau Salah!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Perilaku ini akan meningkatkan *fitness* dari setiap individu dalam populasi ayam.',
          answer: 'Salah',
          principle: 'Hierarki dominansi memberikan keuntungan akses sumber daya secara asimetris kepada individu berperingkat tinggi.',
          solution:
            'Meskipun *pecking order* dapat mengurangi frekuensi perkelahian berdarah dalam kelompok setelah hierarki terbentuk, perilaku ini tidak meningkatkan *fitness* **setiap** individu secara merata. Individu berperingkat rendah (subordinat) memperoleh akses pakan lebih sedikit dan lebih terlambat sehingga laju pertumbuhan serta keberhasilan reproduksinya (*fitness*) lebih rendah dibandingkan individu dominan.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Kausa proksimat dari perilaku ini adalah untuk meningkatkan *fitness* ayam unggul dan meningkatkan laju reproduksinya.',
          answer: 'Salah',
          principle: 'Perbedaan kausa proksimat (mekanisme pemicu langsung) dan kausa ultimat (nilai adaptif evolusioner).',
          solution:
            'Peningkatan *fitness* dan laju reproduksi menjelaskan **mengapa** perilaku tersebut dipertahankan oleh seleksi alam (fungsi evolusioner), sehingga termasuk **kausa ultimat** (*ultimate cause*). Sebaliknya, **kausa proksimat** (*proximate cause*) berkaitan dengan mekanisme langsung pemicu perilaku, seperti stimulus visual individu lain, kadar hormon (misalnya testosteron), dan sirkuit saraf.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Perilaku ini termasuk dalam kategori *classical conditioning* yang mengasosiasikan stimulus patukan ayam lain dan ketersediaan makanan.',
          answer: 'Salah',
          principle: 'Pembentukan hierarki dominansi melibatkan perilaku agonistik dan *operant conditioning* (*trial-and-error*).',
          solution:
            'Dalam *classical conditioning* (pengondisian klasik Pavlovian), hewan belajar mengasosiasikan stimulus netral dengan refleks fisiologis otomatis sebelum respons terjadi. Sebaliknya, pada *pecking order*, individu belajar melalui interaksi agonistik dan konsekuensi perilakunya (menang mendapat makanan/posisi dominan; kalah menghindari patukan untuk mengurangi cedera), yang merupakan bentuk **operant conditioning** (*trial-and-error learning*) serta pengenalan sosial.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt: '*Pecking order* akan menyebabkan distribusi makanan tidak merata pada setiap ayam.',
          answer: 'Benar',
          principle: 'Dominansi sosial mengatur prioritas akses terhadap sumber daya terbatas seperti pakan.',
          solution:
            'Sesuai dengan fungsi sosial hierarki dominansi yang dijelaskan pada skenario, peringkat dominansi menentukan urutan akses makan. Ayam berperingkat tertinggi makan terlebih dahulu dan memperoleh porsi terbanyak atau berkualitas terbaik, sedangkan ayam berperingkat bawah hanya memperoleh sisa, sehingga distribusi makanan menjadi tidak merata.',
          rubric: OK
        }
      ]
    },
    {
      no: 12,
      title: 'Strategi Sejarah Hidup: Seleksi-r vs Seleksi-K (Nomor Asli 44)',
      marks: 4,
      stem:
        'Prof. Gitonobel menemukan suatu spesies tumbuhan baru yang ia sebut *Tobiphyta esculenta*. Ia membawa sampel tumbuhan tersebut kepada Anda sebagai koleganya yang tepercaya. Sewaktu berdiskusi dengan beliau, terdapat sedikit perdebatan di antara kalian berdua.\nProfesor: "Saya rasa, *T. esculenta* merupakan spesies terseleksi-$r$."\nAnda: "Anda keliru. *T. esculenta* merupakan spesies terseleksi-$K$."\nProfesor: "Masa, sih? Ayo kita buktikan!"\nAnda sangat percaya diri bahwa pendapat Anda benar. Oleh karena itu, tentukan apakah karakteristik berikut cenderung mendukung (Benar) atau tidak mendukung (Salah) pendapat Anda!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Tumbuhan ini mengkolonisasi daerah gersang yang belum pernah dihidupi spesies apapun sebelumnya.',
          answer: 'Salah',
          principle: 'Spesies pionir pada habitat baru yang tidak stabil umumnya merupakan spesies terseleksi-$r$.',
          solution:
            'Organisme yang mengkolonisasi daerah gersang pada tahap awal suksesi primer membutuhkan kemampuan dispersi cepat, pertumbuhan dini yang pesat, dan laju reproduksi tinggi pada kepadatan populasi rendah. Ciri tersebut adalah karakteristik **spesies terseleksi-$r$**, sehingga **tidak mendukung** klaim bahwa tumbuhan ini terseleksi-$K$.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Tumbuhan ini mengikuti pola pertumbuhan eksponensial.',
          answer: 'Salah',
          principle: 'Pertumbuhan eksponensial mencirikan seleksi-$r$; seleksi-$K$ tumbuh secara logistik mendekati daya dukung $K$.',
          solution:
            'Populasi spesies terseleksi-$r$ berfluktuasi tajam dan sering mengalami fase pertumbuhan eksponensial ($dN/dt = r_{\\max} N$) ketika sumber daya melimpah tanpa banyak kompetisi. Sebaliknya, spesies terseleksi-$K$ hidup dalam populasi stabil mendekati daya dukung lingkungan ($K$) dengan pertumbuhan logistik terbatas densitas. Dengan demikian ciri ini tidak mendukung pendapat Anda.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Tumbuhan ini menunjukkan pola reproduksi semelparitas.',
          answer: 'Salah',
          principle: 'Semelparitas (*big-bang reproduction*) umum pada seleksi-$r$, sedangkan iteroparitas dominan pada seleksi-$K$.',
          solution:
            'Semelparitas adalah strategi bereproduksi satu kali sepanjang hidup dengan menghasilkan keturunan (biji/spora) sangat banyak dalam sekali peristiwa lalu mati, yang merupakan ciri khas **terseleksi-$r$**. Spesies **terseleksi-$K$** umumnya bersifat **iteroparitas** (bereproduksi berulang kali selama masa hidup yang panjang dengan investasi energi lebih besar per keturunan).',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Tumbuhan ini merupakan tumbuhan dikotil.',
          answer: 'Benar',
          principle: 'Sebagian besar tumbuhan berkayu berumur panjang yang berstrategi-$K$ termasuk kelompok dikotil/eudikotil.',
          solution:
            'Dalam ekologi tumbuhan, banyak spesies pionir semusim dan herba berdaur hidup singkat (terseleksi-$r$) berupa rumput-rumputan atau herba monokotil, sedangkan mayoritas tumbuhan berkayu sejati (pohon dan semak keras berumur panjang dengan pertumbuhan sekunder oleh kambium vaskular, yang umumnya berstrategi-$K$ di komunitas klimaks) merupakan tumbuhan **dikotil**. Oleh sebab itu, statusnya sebagai dikotil cenderung konsisten dan mendukung dugaan strategi-$K$.',
          rubric: OK
        }
      ]
    },
    {
      no: 13,
      title: 'Aliran Energi dan Efisiensi Trofik dalam Ekosistem (Nomor Asli 46)',
      marks: 4,
      stem:
        'Tentukan apakah pernyataan berikut Benar atau Salah mengenai aliran energi dan peredaran senyawa kimia dalam ekosistem!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Energi yang mengalir dalam ekosistem mengacu kepada energi cahaya yang dikonversi menjadi energi kimia oleh produsen primer.',
          answer: 'Salah',
          principle: 'Produsen primer mencakup fotoautotrof (energi cahaya) dan kemoautotrof (energi kimia anorganik).',
          solution:
            'Tidak semua ekosistem bergantung pada energi cahaya matahari. Pada ekosistem tertentu seperti ventilasi hidrotermal laut dalam atau gua sulfida, produsen primer merupakan bakteri/arkea **kemoautotrof** yang mengonversi **energi kimia dari oksidasi senyawa anorganik** (misalnya $\\text{H}_2\\text{S}$ atau $\\text{NH}_3$) menjadi energi kimia organik tanpa melibatkan energi cahaya. Jadi definisi pada pernyataan ini terlalu sempit.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Masuknya energi dari luar siklus secara berkelanjutan diperlukan karena besarnya energi yang hilang antarorganisme.',
          answer: 'Benar',
          principle: 'Hukum II Termodinamika: materi bersiklus, sedangkan energi mengalir satu arah dan terdisipasi sebagai panas.',
          solution:
            'Berbeda dengan unsur kimia yang didaur ulang dalam siklus biogeokimia, energi tidak dapat didaur ulang. Pada setiap pemindahan antar-tingkat trofik, sebagian besar energi (umumnya sekitar $90\\%$) hilang ke lingkungan sebagai panas melalui respirasi seluler dan biomassa yang tidak tercerna. Oleh karena itu, ekosistem memerlukan pasokan energi eksternal secara terus-menerus agar tetap berjalan.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Jumlah energi yang hilang paling besar terjadi antara konsumen tersier dengan dekomposer.',
          answer: 'Salah',
          principle: 'Total energi absolut menurun drastis di setiap tingkat trofik dari dasar ke puncak piramida energi.',
          solution:
            'Karena efisiensi ekologi antar-tingkat trofik hanya sekitar $10\\%$, jumlah energi absolut yang tersedia pada tingkat produsen primer jauh lebih besar dibandingkan tingkat trofik atas. Akibatnya, **jumlah absolut energi yang hilang paling besar** terjadi pada langkah awal antara **produsen primer dan konsumen primer**, sedangkan pada konsumen tersier energi tersisa sudah sangat kecil.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Panjangnya rantai makanan ditentukan oleh banyaknya energi yang keluar/terbuang di setiap tingkatan trofik.',
          answer: 'Benar',
          principle: 'Hipotesis energetika membatasi panjang rantai makanan hingga $4–5$ tingkat trofik.',
          solution:
            'Sesuai dengan **hipotesis energetika** (*energetic hypothesis*), karena sekitar $85–95\\%$ energi terbuang pada setiap perpindahan tingkat trofik, energi kimia yang tersisa pada tingkat ke-4 atau ke-5 menjadi terlalu sedikit untuk menopang populasi predator puncak yang stabil. Semakin besar energi yang hilang di tiap tingkat trofik, semakin pendek rantai makanan tersebut.',
          rubric: OK
        }
      ]
    },
    {
      no: 14,
      title: 'Prinsip Parsimoni dalam Rekonstruksi Pohon Filogenetik (Nomor Asli 50)',
      marks: 4,
      stem:
        'Tentukan apakah pernyataan berikut Benar atau Salah mengenai prinsip parsimoni dalam pembuatan pohon filogenetik!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Pohon filogenetik dibuat berdasarkan karakter morfologi fosil karena fosil memberikan penjelasan paling sederhana mengenai evolusi.',
          answer: 'Salah',
          principle: 'Prinsip *maximum parsimony* berlaku umum untuk data molekuler maupun morfologi (taksa hidup ataupun fosil).',
          solution:
            'Prinsip parsimoni (pisau cukur Occam dalam sistematika) adalah kriteria pemilihan hipotesis pohon evolusi, bukan keharusan penggunaan data fosil. Rekonstruksi filogenetik dengan parsimoni dapat menggunakan sekuens DNA/protein, data morfologi organisme hidup, maupun data fosil secara terpisah atau terpadu.',
          rubric: OK
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Cabang-cabang di pohon filogenetik harus dibuat berdasarkan pada sebanyak mungkin karakter turunan yang dimiliki bersama.',
          answer: 'Salah',
          principle: 'Parsimoni meminimalkan jumlah total langkah perubahan evolusioner (termasuk homoplasi), bukan sekadar menghitung kemiripan terbanyak.',
          solution:
            'Meskipun pengelompokan kladistik menggunakan karakter turunan bersama (sinapomorfi), prinsip **parsimoni** secara khusus memilih pohon yang membutuhkan **jumlah perubahan evolusioner total paling sedikit** untuk menjelaskan seluruh karakter. Mengelompokkan taksa berdasarkan karakter terbanyak secara mentah tanpa meminimalkan homoplasi (evolusi konvergen dan reversi) tidak tepat mendefinisikan parsimoni.',
          rubric: OK
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Pohon filogenetik harus memiliki sesedikit mungkin titik percabangan.',
          answer: 'Salah',
          principle: 'Jumlah titik percabangan (nodus internal) ditentukan oleh jumlah taksa $n$, yaitu $n-1$ pada pohon biner berakar.',
          solution:
            'Titik percabangan (*nodes*) menggambarkan peristiwa divergensi garis keturunan. Untuk $n$ spesies/taksa yang dianalisis dalam pohon filogenetik berakar yang terpecah penuh (*fully resolved/dichotomous*), setiap topologi kandidat memiliki jumlah titik percabangan yang sama ($n - 1$). Yang diminimalkan oleh parsimoni adalah jumlah **perubahan karakter** pada cabang-cabangnya, bukan jumlah titik percabangannya.',
          rubric: OK
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Pohon filogenetik harus memiliki sesedikit mungkin perubahan evolusioner baik dalam hal urutan DNA maupun karakter morfologi.',
          answer: 'Benar',
          principle: 'Definisi *maximum parsimony*: hipotesis evolusi terbaik memerlukan jumlah mutasi atau transisi karakter paling sedikit.',
          solution:
            'Menurut prinsip **parsimoni maksimum** (*maximum parsimony*), di antara semua kemungkinan pohon filogenetik, pohon yang paling mungkin benar adalah pohon yang menjelaskan distribusi data—baik berupa perubahan basa nukleotida DNA maupun perubahan karakter morfologi—dengan **jumlah langkah perubahan evolusioner paling sedikit** (meminimalkan asumsi kejadian homoplasi).',
          rubric: OK
        }
      ]
    }
  ]
};
