/**
 * Indeks ringan Kimia SMA Kurikulum Merdeka (tanpa soal). Dibuat otomatis oleh
 * pipeline/build_chapter_index.mjs — jangan diedit manual; edit file bab di src/data/kimia/kelasN/.
 */

export const KIMIA_GRADE_METADATA = [
  {
    "subject": "kimia",
    "grade": 10,
    "level": "SMA",
    "phase": "Fase E",
    "description": "Hakikat Kimia & Struktur Atom, Sistem Periodik Unsur, Ikatan Kimia & Bentuk Molekul, serta Hukum Dasar Kimia & Stoikiometri",
    "chaptersCount": 4
  },
  {
    "subject": "kimia",
    "grade": 11,
    "level": "SMA",
    "phase": "Fase F",
    "description": "Senyawa Hidrokarbon & Minyak Bumi, Termokimia & Hukum Hess, Laju Reaksi, Kesetimbangan Kimia, serta Larutan Asam–Basa, Penyangga & Hidrolisis",
    "chaptersCount": 5
  },
  {
    "subject": "kimia",
    "grade": 12,
    "level": "SMA",
    "phase": "Fase F",
    "description": "Sifat Koligatif Larutan, Reaksi Redoks & Sel Elektrokimia, Kimia Unsur, serta Senyawa Karbon Gugus Fungsi & Makromolekul",
    "chaptersCount": 4
  }
];

export const ALL_KIMIA_CHAPTERS_INDEX = [
  {
    "id": "kimia10-bab1-hakikat-kimia-dan-struktur-atom",
    "subject": "kimia",
    "grade": 10,
    "level": "SMA",
    "phase": "Fase E",
    "chapterIndex": 0,
    "title": "Bab 1: Hakikat Kimia dan Struktur Atom",
    "track": null,
    "element": "Pemahaman Kimia: metode ilmiah, model atom, konfigurasi elektron, dan bilangan kuantum",
    "coreConcepts": [
      "Hakikat Kimia dan Metode Ilmiah: Kimia menjembatani fenomena makroskopik yang teramati dengan tingkat submikroskopik (atom, ion, molekul) dan representasi simbolik. Penyelidikan ilmiah menggunakan metode ilmiah yang mengendalikan variabel bebas (diubah peneliti), variabel terikat (diukur sebagai respons), dan variabel kontrol (dijaga tetap), disertai prosedur keselamatan kerja laboratorium seperti menuangkan asam pekat perlahan ke dalam air.",
      "Perkembangan Model Atom: Dalton menggambarkan atom sebagai bola pejal tak terbagi; Thomson menemukan elektron (model roti kismis); Rutherford melalui hamburan sinar alfa membuktikan atom memiliki inti bermuatan positif kecil di tengah ruang hampa; Bohr menjelaskan elektron beredar pada lintasan stasioner berenergi tertentu; dan model Mekanika Kuantum menyatakan elektron berada dalam orbital sebagai daerah kebolehjadian terbesar ditemukannya elektron.",
      "Partikel Dasar dan Notasi Nuklida: Atom tersusun atas proton ($p^+$), neutron ($n^0$) di inti, serta elektron ($e^-$) di sekitar inti. Notasi nuklida $^A_Z\\text{X}$ menunjukkan nomor atom $Z = \\text{jumlah proton}$ dan nomor massa $A = Z + \\text{jumlah neutron}$. Dua atom dengan $Z$ sama disebut isotop, $A$ sama disebut isobar, jumlah neutron sama disebut isoton, dan jumlah elektron sama disebut isoelektron.",
      "Konfigurasi Elektron Atom dan Ion: Pengisian elektron mengikuti asas Aufbau (urutan energi $1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p \\dots$), larangan Pauli, dan kaidah Hund (mengisi orbital setingkat secara tunggal dengan spin sejajar sebelum berpasangan). Untuk kestabilan subkulit setengah penuh atau penuh, $_{24}\\text{Cr}$ berkonfigurasi $[\\text{Ar}]\\,3d^5\\,4s^1$ dan $_{29}\\text{Cu}$ berkonfigurasi $[\\text{Ar}]\\,3d^{10}\\,4s^1$. Kation terbentuk dengan melepas elektron dari kulit terluar ($n$ terbesar) lebih dahulu.",
      "Bilangan Kuantum Elektron: Keadaan suatu elektron ditentukan oleh bilangan kuantum utama $n$ ($1, 2, 3, \\dots$ menyatakan kulit), azimut $l$ ($0 \\le l \\le n - 1$ untuk subkulit $s=0, p=1, d=2, f=3$), magnetik $m$ ($-l \\le m \\le +l$ menyatakan orientasi orbital), dan spin $s$ ($+\\frac{1}{2}$ atau $-\\frac{1}{2}$). Sesuai konvensi pengisian kiri ke kanan, elektron berputar tunggal mulai dari $m = -l$ hingga $+l$ ($s = +\\frac{1}{2}$) lalu berpasangan dari $m = -l$ ($s = -\\frac{1}{2}$)."
    ],
    "tutorTip": "Untuk menentukan konfigurasi elektron ion transisi dengan cepat, tuliskan dulu konfigurasi atom netralnya sampai $4s^2\\,3d^x$, baru coret elektron pada $4s$ terlebih dahulu sesuai muatan kation sebelum mengurangi elektron di $3d$.",
    "questionCount": 15
  },
  {
    "id": "kimia10-bab2-sistem-periodik-unsur",
    "subject": "kimia",
    "grade": 10,
    "level": "SMA",
    "phase": "Fase E",
    "chapterIndex": 1,
    "title": "Bab 2: Sistem Periodik Unsur dan Sifat Keperiodikan",
    "track": null,
    "element": "Pemahaman Kimia: golongan, periode, jari-jari atom, energi ionisasi, afinitas elektron, dan elektronegativitas",
    "coreConcepts": [
      "Perkembangan Sistem Periodik Unsur: Klasifikasi unsur berkembang dari Triade Dobereiner (kelompok tiga unsur dengan massa tengah rata-rata), hukum Oktaf Newlands (pengulangan sifat tiap delapan unsur), tabel periodik Mendeleev (berdasarkan massa atom dan menyisakan ruang kosong bagi unsur belum ditemukan), hingga Sistem Periodik Modern oleh Henry Moseley yang menyusun unsur berdasarkan kenaikan nomor atom.",
      "Penentuan Periode, Golongan, dan Blok: Nomor periode sama dengan bilangan kuantum utama ($n$) terbesar pada kulit valensi. Unsur blok $s$ dan $p$ termasuk golongan utama ($\\text{IA}$–$\\text{VIIIA}$) dengan jumlah elektron valensi $ns^a$ atau $ns^a\\,np^b$. Unsur blok $d$ termasuk golongan transisi ($\\text{IB}$–$\\text{VIIIB}$) yang ditentukan oleh jumlah elektron $ns^a\\,(n-1)d^b$: jumlah $3$–$7$ adalah $\\text{IIIB}$–$\\text{VIIB}$, jumlah $8$–$10$ adalah $\\text{VIIIB}$, jumlah $11$ adalah $\\text{IB}$, dan jumlah $12$ adalah $\\text{IIB}$.",
      "Jari-jari Atom dan Jari-jari Ion: Jari-jari atom adalah jarak dari inti ke kulit elektron terluar. Dalam satu golongan dari atas ke bawah jari-jari atom membesar karena jumlah kulit bertambah; dalam satu periode dari kiri ke kanan mengecil karena muatan inti efektif bertambah pada jumlah kulit yang sama. Kation selalu lebih kecil daripada atom netralnya, sedangkan anion lebih besar; pada deret isoelektronik, semakin besar nomor atom, semakin kecil jari-jarinya.",
      "Energi Ionisasi dan Anomalinya: Energi ionisasi ($EI$) adalah energi minimum untuk melepas satu elektron dari atom atau ion berwujud gas. Umumnya $EI$ meningkat ke kanan dalam satu periode dan menurun ke bawah dalam satu golongan. Namun terjadi anomali pada periode 2 dan 3: $EI_1$ golongan $\\text{IIA}$ ($ns^2$) sedikit lebih besar daripada $\\text{IIIA}$ ($ns^2\\,np^1$), dan golongan $\\text{VA}$ ($ns^2\\,np^3$, setengah penuh stabil) sedikit lebih besar daripada $\\text{VIA}$ ($ns^2\\,np^4$).",
      "Afinitas Elektron dan Keelektronegatifan: Afinitas elektron ($AE$) adalah perubahan energi ketika satu atom netral berwujud gas menerima satu elektron membentuk anion. Keelektronegatifan adalah kecenderungan atom menarik pasangan elektron dalam ikatan kimia (terbesar pada fluorin, $\\text{F}$). Secara umum $AE$ makin negatif dan keelektronegatifan makin besar ke kanan dalam satu periode serta makin kecil ke bawah dalam satu golongan, dengan pengecualian $\\text{Cl}$ yang memiliki $AE$ lebih negatif daripada $\\text{F}$ akibat tolakan elektron pada kulit $2p$ $\\text{F}$ yang sempit."
    ],
    "tutorTip": "Ingat pola sederhana tabel periodik ke kanan atas (menuju Fluorin): ukuran atom makin kecil, sedangkan energi ionisasi, afinitas elektron, dan keelektronegatifan makin besar. Kebalikannya mengarah ke kiri bawah (menuju Fransium/Sesium): jari-jari dan sifat logam paling besar.",
    "questionCount": 15
  },
  {
    "id": "kimia10-bab3-ikatan-kimia-dan-bentuk-molekul",
    "subject": "kimia",
    "grade": 10,
    "level": "SMA",
    "phase": "Fase E",
    "chapterIndex": 2,
    "title": "Bab 3: Ikatan Kimia, Bentuk Molekul, dan Gaya Antarmolekul",
    "track": null,
    "element": "Pemahaman Kimia: ikatan ion, kovalen, koordinasi, logam, teori VSEPR, kepolaran, dan gaya antarmolekul",
    "coreConcepts": [
      "Kestabilan Atom dan Ikatan Ion: Atom mencapai kestabilan dengan memenuhi kaidah duplet ($2$ elektron valensi seperti $\\text{He}$) atau oktet ($8$ elektron valensi), meski ada pengecualian seperti oktet tak lengkap ($\\text{BF}_3$, $\\text{BeCl}_2$) dan oktet berkembang ($\\text{PCl}_5$, $\\text{SF}_6$). Ikatan ion terjadi melalui transfer elektron dari logam pembentuk kation ke nonlogam pembentuk anion; kristal ionik bertitik leleh tinggi, rapuh, dan menghantarkan listrik hanya saat lelehan atau larutan.",
      "Ikatan Kovalen, Koordinasi, dan Ikatan Logam: Ikatan kovalen terbentuk dari pemakaian bersama satu atau lebih pasangan elektron antarnonlogam (tunggal, rangkap dua, atau rangkap tiga). Pada ikatan kovalen koordinasi, pasangan elektron ikatan berasal dari salah satu atom saja (seperti $\\text{NH}_3$ menyumbangkan PEB ke $\\text{H}^+$ pada $\\text{NH}_4^+$). Ikatan logam terjadi akibat gaya tarik antara kisi kation logam dan lautan elektron valensi yang terdelokalisasi bebas.",
      "Teori VSEPR dan Hibridisasi Dasar: Bentuk molekul ditentukan oleh jumlah pasangan elektron ikatan ($X$) dan pasangan elektron bebas ($E$) pada atom pusat melalui notasi $AX_nE_m$, dengan kekuatan tolakan $\\text{PEB--PEB} > \\text{PEB--PEI} > \\text{PEI--PEI}$. Dua domain menghasilkan bentuk linear ($sp$, $180^\\circ$); tiga domain menghasilkan trigonal planar ($sp^2$, $120^\\circ$) atau huruf V ($AX_2E$); empat domain ($sp^3$) menghasilkan tetrahedral ($AX_4$, $109{,}5^\\circ$), piramida trigonal ($AX_3E$, $\\approx 107^\\circ$), atau bengkok ($AX_2E_2$, $\\approx 104{,}5^\\circ$); lima dan enam domain menghasilkan bipiramida trigonal dan oktahedral.",
      "Kepolaran Ikatan dan Molekul: Ikatan kovalen bersifat polar bila terdapat perbedaan keelektronegatifan antara dua atom yang berikatan. Namun kepolaran molekul keseluruhan ditentukan oleh resultan vektor momen dipol: molekul simetris tanpa PEB seperti $\\text{CO}_2$, $\\text{BF}_3$, dan $\\text{CCl}_4$ bersifat nonpolar karena momen dipolnya saling meniadakan, sedangkan molekul asimetris seperti $\\text{NH}_3$, $\\text{H}_2\\text{O}$, dan $\\text{SO}_2$ bersifat polar.",
      "Gaya Antarmolekul dan Sifat Fisik Zat: Gaya antarmolekul meliputi gaya London (dispersi) yang dimiliki semua molekul dan menguat seiring bertambahnya $M_r$ serta luas permukaan kontak, gaya dipol–dipol antarmolekul polar, dan ikatan hidrogen antara atom $\\text{H}$ yang terikat pada atom sangat elektronegatif ($\\text{F}$, $\\text{O}$, atau $\\text{N}$) dengan pasangan elektron bebas atom $\\text{F}$, $\\text{O}$, atau $\\text{N}$ molekul lain. Semakin kuat gaya antarmolekul, semakin tinggi titik didih zat."
    ],
    "tutorTip": "Selalu hitung PEB atom pusat sebelum menebak bentuk dan kepolaran molekul: hampir semua molekul biner $AX_n$ dengan $0$ PEB (seperti linear $AX_2$, segitiga datar $AX_3$, tetrahedral $AX_4$, bipiramida trigonal $AX_5$, oktahedral $AX_6$) bersifat simetris dan nonpolar!",
    "questionCount": 15
  },
  {
    "id": "kimia10-bab4-hukum-dasar-dan-stoikiometri",
    "subject": "kimia",
    "grade": 10,
    "level": "SMA",
    "phase": "Fase E",
    "chapterIndex": 3,
    "title": "Bab 4: Hukum Dasar Kimia dan Stoikiometri",
    "track": null,
    "element": "Pemahaman Kimia: hukum kekekalan massa, perbandingan tetap, konsep mol, pereaksi pembatas, dan rumus empiris-molekul",
    "coreConcepts": [
      "Hukum-hukum Dasar Kimia: Hukum Lavoisier menyatakan massa total zat sebelum dan sesudah reaksi dalam sistem tertutup adalah tetap. Hukum Proust menyatakan perbandingan massa unsur-unsur dalam suatu senyawa murni selalu tetap. Hukum Dalton menyatakan jika dua unsur membentuk lebih dari satu senyawa dan massa satu unsur dibuat tetap, perbandingan massa unsur lainnya berupa bilangan bulat sederhana. Hukum Gay-Lussac dan Avogadro menyatakan pada suhu dan tekanan yang sama, perbandingan volume gas-gas yang bereaksi sama dengan perbandingan koefisien reaksi sekaligus perbandingan jumlah molnya.",
      "Massa Atom Relatif dan Konsep Mol: Massa atom relatif ($A_r$) dan massa molekul relatif ($M_r$) menjadi jembatan antara dunia atomik dan laboratorium. Satu mol zat mengandung tepat bilangan Avogadro $N_A = 6{,}02 \\times 10^{23}$ partikel. Jumlah mol ($n$) menghubungkan massa ($m = n \\times M_r$), jumlah partikel ($N = n \\times N_A$), volume gas STP pada $0^\\circ\\text{C}, 1\\text{ atm}$ ($V = n \\times 22{,}4\\text{ L}$), dan kondisi non-STP melalui persamaan gas ideal $PV = nRT$.",
      "Rumus Empiris, Rumus Molekul, dan Senyawa Hidrat: Rumus empiris (RE) adalah perbandingan bilangan bulat paling sederhana dari jumlah mol atom penyusun senyawa, sedangkan rumus molekul (RM) menyatakan jumlah atom sesungguhnya sebagai kelipatan $(\\text{RE})_k = \\text{RM}$ dengan $k = M_r\\text{ RM} / M_r\\text{ RE}$. Pada kristal garam hidrat $\\text{Garam} \\cdot x\\text{H}_2\\text{O}$, koefisien air kristal $x$ diperoleh dari perbandingan $n_{\\text{H}_2\\text{O}} : n_{\\text{garam anhidrat}}$.",
      "Persamaan Reaksi Setara dan Pereaksi Pembatas: Persamaan reaksi setara memastikan jumlah setiap jenis atom di ruas kiri dan kanan sama tanpa mengubah indeks rumus kimia zat. Apabila dua atau lebih pereaksi diketahui jumlahnya, pereaksi pembatas adalah zat yang memiliki rasio $(n / \\text{koefisien})$ terkecil dan habis lebih dahulu, sehingga seluruh mol produk yang terbentuk harus dihitung dari pereaksi pembatas. Efisiensi reaksi dinyatakan oleh persen hasil $(\\text{massa aktual} / \\text{massa teoretis}) \\times 100\\%$."
    ],
    "tutorTip": "Di setiap soal stoikiometri reaksi, biasakan langsung mengubah seluruh data massa, partikel, atau volume ke dalam satuan **mol** di langkah pertama, lalu buat tabel Mula-mula, Bereaksi, Sisa (MRS) agar pereaksi pembatas dan zat sisa tidak pernah tertukar.",
    "questionCount": 15
  },
  {
    "id": "kimia11-bab1-hidrokarbon-dan-minyak-bumi",
    "subject": "kimia",
    "grade": 11,
    "level": "SMA",
    "phase": "Fase F",
    "chapterIndex": 0,
    "title": "Bab 1: Hidrokarbon, Isomer, dan Minyak Bumi",
    "track": null,
    "element": "Pemahaman Kimia: kekhasan atom karbon, alkana, alkena, alkuna, isomeri, fraksi minyak bumi, dan angka oktan",
    "coreConcepts": [
      "Kekhasan Atom Karbon dan Posisi Karbon: Atom karbon bernomor atom 6 memiliki 4 elektron valensi sehingga mampu membentuk 4 ikatan kovalen (tunggal, rangkap dua, atau rangkap tiga) serta berikatan sesama atom karbon membentuk rantai terbuka (lurus atau bercabang) dan tertutup (siklik). Berdasarkan jumlah atom C lain yang diikat secara langsung, atom C dibedakan menjadi C primer (1 C lain), C sekunder (2 C lain), C tersier (3 C lain), dan C kuarterner (4 C lain).",
      "Deret Homolog Alkana, Alkena, dan Alkuna: Alkana adalah hidrokarbon jenuh berikatan tunggal dengan rumus umum $\\text{C}_n\\text{H}_{2n+2}$ dan akhiran -ana. Alkena adalah hidrokarbon tak jenuh dengan satu ikatan rangkap dua ($\\text{C}=\\text{C}$), rumus umum $\\text{C}_n\\text{H}_{2n}$, dan akhiran -ena. Alkuna memiliki satu ikatan rangkap tiga ($\\text{C}\\equiv\\text{C}$), rumus umum $\\text{C}_n\\text{H}_{2n-2}$, dan akhiran -una. Penamaan IUPAC memilih rantai terpanjang (mengandung ikatan rangkap untuk alkena/alkuna) dan penomoran terkecil pada ikatan rangkap atau cabang.",
      "Isomeri Struktur dan Isomeri Geometri: Isomer adalah senyawa dengan rumus molekul sama tetapi struktur atau penataan ruangnya berbeda. Isomer struktur meliputi isomer rangka (perbedaan kerangka rantai utama/cabang), isomer posisi (perbedaan letak ikatan rangkap atau gugus), dan isomer gugus fungsi (misalnya alkena dengan sikloalkana untuk $\\text{C}_n\\text{H}_{2n}$). Alkena menunjukkan isomeri geometri cis–trans apabila setiap atom C berikatan rangkap mengikat dua gugus yang berbeda.",
      "Reaksi Khas Senyawa Hidrokarbon: Alkana yang relatif sukar bereaksi umumnya mengalami reaksi substitusi dengan halogen di bawah sinar UV serta reaksi pembakaran. Alkena dan alkuna lebih reaktif dan mengalami reaksi adisi (pemutusan ikatan rangkap oleh $\\text{H}_2$, $\\text{X}_2$, atau $\\text{HX}$). Pada adisi asam halida ($\\text{HX}$) terhadap alkena asimetris berlaku aturan Markovnikov: atom H terikat pada atom C ikatan rangkap yang mengikat lebih banyak atom H.",
      "Fraksi Minyak Bumi dan Bilangan Oktan: Minyak mentah dipisahkan menjadi fraksi-fraksinya melalui distilasi bertingkat berdasarkan perbedaan titik didih, menghasilkan gas/LPG, eter petroleum, bensin, nafta, kerosin, solar, pelumas, dan residu (aspal). Mutu bensin dinyatakan dengan bilangan oktan berdasarkan kesetaraan ketukan terhadap campuran isooktana ($2{,}2{,}4$-trimetilpentana, oktan $100$) dan n-heptana (oktan $0$). Peningkatan oktan dilakukan melalui perengkahan/reformasi serta penambahan aditif ramah lingkungan seperti MTBE atau etanol."
    ],
    "tutorTip": "Saat memberi nama hidrokarbon bercabang, selalu telusuri semua kemungkinan ujung rantai terlebih dahulu sebelum menomori. Untuk memeriksa apakah suatu alkena punya isomer cis–trans, tutup satu per satu atom C ikatan rangkap: jika salah satu ujung mengikat dua gugus kembar (seperti $=\\text{CH}_2$), langsung eliminasi karena tidak punya isomer geometri.",
    "questionCount": 15
  },
  {
    "id": "kimia11-bab2-termokimia",
    "subject": "kimia",
    "grade": 11,
    "level": "SMA",
    "phase": "Fase F",
    "chapterIndex": 1,
    "title": "Bab 2: Termokimia dan Perubahan Entalpi",
    "track": null,
    "element": "Pemahaman Kimia: reaksi eksoterm-endoterm, kalorimetri, Hukum Hess, entalpi pembentukan standar, dan energi ikatan",
    "coreConcepts": [
      "Sistem, Lingkungan, Reaksi Eksoterm dan Endoterm: Sistem adalah bagian yang menjadi pusat pengamatan (pereaksi dan produk), sedangkan lingkungan adalah segala sesuatu di luar sistem (pelarut, wadah, udara). Pada reaksi eksoterm, sistem melepas kalor ke lingkungan sehingga suhu lingkungan naik dan $\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}} < 0$. Pada reaksi endoterm, sistem menyerap kalor dari lingkungan sehingga suhu lingkungan turun dan $\\Delta H > 0$.",
      "Persamaan Termokimia dan Entalpi Standar: Persamaan termokimia mencantumkan koefisien stoikiometri, wujud zat ($s, l, g, aq$), dan nilai $\\Delta H$. Jika koefisien reaksi dikali $k$, nilai $\\Delta H$ ikut dikali $k$; jika reaksi dibalik, tanda $\\Delta H$ berubah berlawanan. Jenis entalpi standar ($25^\\circ\\text{C}, 1\\text{ atm}$) meliputi entalpi pembentukan standar ($\\Delta H^\\circ_f$, membentuk $1\\text{ mol}$ senyawa dari unsur stabilnya), penguraian standar ($\\Delta H^\\circ_d$), dan pembakaran standar ($\\Delta H^\\circ_c$).",
      "Kalorimetri dan Perhitungan Kalor Reaksi: Pada tekanan tetap, kalor reaksi sama dengan perubahan entalpi ($q_p = \\Delta H$). Energi kalor yang diserap atau dilepaskan larutan dan kalorimeter dihitung dari $q_{\\text{larutan}} = m\\,c\\,\\Delta T$ dan $q_{\\text{kal}} = C_{\\text{kal}}\\,\\Delta T$. Berdasarkan hukum kekekalan energi, $q_{\\text{reaksi}} = -(q_{\\text{larutan}} + q_{\\text{kal}})$, lalu entalpi molar diperoleh dengan membagi $q_{\\text{reaksi}}$ oleh jumlah mol zat bereaksi ($\\Delta H = q_{\\text{reaksi}} / n$).",
      "Hukum Hess dan Entalpi Pembentukan Standar: Menurut Hukum Hess, perubahan entalpi reaksi tidak bergantung pada lintasan atau jumlah tahap reaksi, melainkan hanya pada keadaan awal dan akhir. Dengan demikian, beberapa persamaan reaksi dapat dibalik, dikalikan, dan dijumlahkan untuk memperoleh reaksi target. Secara umum dari data pembentukan standar berlaku $\\Delta H_{\\text{reaksi}} = \\sum n\\,\\Delta H^\\circ_{f,\\text{produk}} - \\sum m\\,\\Delta H^\\circ_{f,\\text{reaktan}}$, dengan $\\Delta H^\\circ_f$ unsur bebas stabil bernilai nol.",
      "Energi Ikatan Rata-Rata: Reaksi kimia dapat dipandang sebagai pemutusan ikatan pada reaktan (memerlukan energi, endoterm) diikuti pembentukan ikatan baru pada produk (melepaskan energi, eksoterm). Nilai perubahan entalpi reaksi dalam fasa gas dapat diperkirakan menggunakan energi ikatan rata-rata melalui persamaan $\\Delta H_{\\text{reaksi}} = \\sum E_{\\text{ikatan putus (reaktan)}} - \\sum E_{\\text{ikatan terbentuk (produk)}}$."
    ],
    "tutorTip": "Ingat pasangan tanda berlawanan antara kalor dan entalpi: jika termometer naik ($\\Delta T > 0$), reaksi melepas kalor (eksoterm, $\\Delta H$ negatif). Selain itu, hafalkan perbedaan dua rumus selisih: $\\Delta H^\\circ_f$ pakai \"Kanan kurang Kiri\", sedangkan Energi Ikatan pakai \"Kiri kurang Kanan\" (Putus kurang Bentuk).",
    "questionCount": 15
  },
  {
    "id": "kimia11-bab3-laju-reaksi",
    "subject": "kimia",
    "grade": 11,
    "level": "SMA",
    "phase": "Fase F",
    "chapterIndex": 2,
    "title": "Bab 3: Laju Reaksi dan Teori Tumbukan",
    "track": null,
    "element": "Pemahaman Kimia: faktor laju reaksi, teori tumbukan, energi aktivasi, persamaan laju, dan orde reaksi",
    "coreConcepts": [
      "Definisi dan Stoikiometri Laju Reaksi: Laju reaksi dinyatakan sebagai laju berkurangnya konsentrasi molar pereaksi atau bertambahnya konsentrasi molar produk tiap satuan waktu ($\\text{M/s}$). Untuk reaksi umum $aA + bB \\longrightarrow cC + dD$, laju masing-masing spesi sebanding dengan koefisien reaksinya: $v = -\\frac{1}{a}\\frac{\\Delta [A]}{\\Delta t} = -\\frac{1}{b}\\frac{\\Delta [B]}{\\Delta t} = +\\frac{1}{c}\\frac{\\Delta [C]}{\\Delta t} = +\\frac{1}{d}\\frac{\\Delta [D]}{\\Delta t}$.",
      "Teori Tumbukan dan Energi Aktivasi: Reaksi kimia hanya berlangsung ketika partikel pereaksi mengalami tumbukan efektif. Syarat terjadinya tumbukan efektif adalah energi kinetik partikel minimal sama dengan energi aktivasi ($E_k \\ge E_a$) untuk membentuk kompleks teraktivasi serta posisi atau orientasi tumbukan yang tepat.",
      "Faktor yang Memengaruhi Laju Reaksi: Kenaikan konsentrasi memperbanyak jumlah partikel per satuan volume sehingga frekuensi tumbukan meningkat. Memperkecil ukuran partikel (memperluas permukaan sentuh) memperbanyak area kontak reaksi heterogen. Kenaikan suhu memperbesar energi kinetik rata-rata molekul sehingga fraksi molekul dengan $E_k \\ge E_a$ bertambah drastis tanpa mengubah nilai $E_a$.",
      "Peran Katalis dalam Laju Reaksi: Katalis mempercepat laju reaksi dengan menyediakan lintasan reaksi alternatif yang memiliki energi aktivasi ($E_a$) lebih rendah. Katalis ikut terlibat dalam tahap reaksi antara tetapi terbentuk kembali di akhir reaksi, sehingga tidak ikut habis dan tidak mengubah nilai $\\Delta H$ reaksi maupun posisi kesetimbangan.",
      "Persamaan Laju dan Orde Reaksi: Hubungan laju awal dengan konsentrasi pereaksi dinyatakan melalui hukum laju $v = k[A]^m[B]^n$, dengan $k$ tetapan laju (bergantung suhu dan katalis), $m$ orde terhadap $A$, $n$ orde terhadap $B$, dan $m + n$ orde reaksi total. Nilai orde reaksi ditentukan dari data percobaan laju awal, bukan langsung dari koefisien persamaan reaksi."
    ],
    "tutorTip": "Jika tabel percobaan laju menyajikan kolom waktu reaksi ($t$) dan bukan laju ($v$), langsung balik perbandingannya saat menghitung orde: $v_2 / v_1 = t_1 / t_2$. Untuk mengecek satuan tetapan laju $k$ dengan cepat, gunakan rumus $\\text{M}^{1 - \\text{orde total}}\\cdot\\text{s}^{-1}$.",
    "questionCount": 15
  },
  {
    "id": "kimia11-bab4-kesetimbangan-kimia",
    "subject": "kimia",
    "grade": 11,
    "level": "SMA",
    "phase": "Fase F",
    "chapterIndex": 3,
    "title": "Bab 4: Kesetimbangan Kimia dan Pergeserannya",
    "track": null,
    "element": "Pemahaman Kimia: kesetimbangan dinamis, tetapan Kc dan Kp, derajat disosiasi, dan prinsip Le Chatelier",
    "coreConcepts": [
      "Reaksi Reversibel dan Kesetimbangan Dinamis: Dalam sistem tertutup, reaksi dapat balik mencapai keadaan setimbang ketika laju reaksi ke kanan sama dengan laju reaksi ke kiri ($v_{\\text{maju}} = v_{\\text{balik}}$). Secara mikroskopik kedua reaksi terus berlangsung tanpa henti, sedangkan secara makroskopik konsentrasi tiap zat tetap konstan (tidak harus sama besar).",
      "Tetapan Kesetimbangan Kc dan Kp: Untuk reaksi homogen $aA + bB \\rightleftharpoons cC + dD$, tetapan kesetimbangan konsentrasi adalah $K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$ dan untuk fasa gas berlaku $K_p = \\frac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b}$. Pada kesetimbangan heterogen, zat padat murni ($s$) dan cairan murni ($l$) tidak dimasukkan ke dalam rumus $K_c$ maupun $K_p$ karena keaktifannya konstan. Nilai $K_p$ dan $K_c$ dihubungkan oleh $K_p = K_c(RT)^{\\Delta n}$ dengan $\\Delta n = \\sum n_{\\text{gas produk}} - \\sum n_{\\text{gas reaktan}}$.",
      "Manipulasi Tetapan Kesetimbangan dan Kuosien Reaksi: Jika persamaan reaksi dibalik, tetapan barunya menjadi $1/K$; jika koefisien reaksi dikali $n$, tetapan barunya menjadi $K^n$; jika beberapa reaksi dijumlahkan, tetapan totalnya adalah hasil kali masing-masing tetapan ($K_{\\text{total}} = K_1 \\times K_2$). Arah reaksi menuju kesetimbangan ditentukan dengan membandingkan kuosien reaksi ($Q$) terhadap $K$: jika $Q < K$ reaksi bergeser ke kanan, jika $Q > K$ bergeser ke kiri, dan jika $Q = K$ sistem sudah setimbang.",
      "Derajat Disosiasi dan Tabel Komposisi Setimbang: Derajat disosiasi ($\\alpha$) menyatakan fraksi zat mula-mula yang terurai hingga tercapai kesetimbangan: $\\alpha = \\frac{n_{\\text{terurai}}}{n_{\\text{mula-mula}}}$ ($0 \\le \\alpha \\le 1$). Perhitungan komposisi setimbang dilakukan melalui skema Mula-mula, Reaksi, Setimbang (MRS) sesuai perbandingan koefisien reaksi pada baris reaksi.",
      "Prinsip Le Chatelier dan Aplikasi Industri: Apabila sistem setimbang diberi gangguan (aksi), sistem akan bergeser untuk mengurangi pengaruh gangguan tersebut hingga tercapai kesetimbangan baru. Penambahan konsentrasi suatu zat menggeser kesetimbangan menjauhi zat itu; peningkatan tekanan (pengecilan volume) menggeser ke jumlah mol gas lebih kecil; sedangkan kenaikan suhu menggeser ke arah reaksi endoterm ($\\Delta H > 0$). Hanya perubahan suhu yang mengubah nilai $K$, sedangkan katalis hanya mempercepat tercapainya kesetimbangan."
    ],
    "tutorTip": "Selalu ubah jumlah mol setimbang menjadi molaritas ($n/V$) sebelum dimasukkan ke rumus $K_c$, kecuali jika $\\Delta n = 0$ di mana volume saling meniadakan. Untuk soal Le Chatelier tentang tekanan atau volume, hitung total koefisien **hanya pada fasa gas ($g$)** saja!",
    "questionCount": 15
  },
  {
    "id": "kimia11-bab5-asam-basa-buffer-dan-hidrolisis",
    "subject": "kimia",
    "grade": 11,
    "level": "SMA",
    "phase": "Fase F",
    "chapterIndex": 4,
    "title": "Bab 5: Asam–Basa, Larutan Penyangga, dan Hidrolisis Garam",
    "track": null,
    "element": "Pemahaman Kimia: teori Arrhenius/Bronsted-Lowry/Lewis, perhitungan pH, titrasi, buffer, hidrolisis, dan Ksp",
    "coreConcepts": [
      "Teori Asam–Basa Arrhenius, Brønsted–Lowry, dan Lewis: Menurut Arrhenius, asam menghasilkan ion $\\text{H}^+$ dan basa menghasilkan ion $\\text{OH}^-$ dalam air. Brønsted–Lowry memperluas asam sebagai donor proton ($\\text{H}^+$) dan basa sebagai akseptor proton, sehingga terbentuk pasangan asam–basa konjugasi yang berselisih satu proton. Lewis mendefinisikan asam sebagai akseptor pasangan elektron bebas dan basa sebagai donor pasangan elektron bebas.",
      "Kekuatan Asam–Basa dan Skala pH: Pada suhu $25^\\circ\\text{C}$ berlaku $K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14}$ dan $\\text{pH} + \\text{pOH} = 14$. Asam dan basa kuat terionisasi sempurna ($[\\text{H}^+] = n_a M_a$ dan $[\\text{OH}^-] = n_b M_b$), sedangkan asam dan basa lemah terionisasi sebagian dengan tetapan $K_a$ atau $K_b$ ($[\\text{H}^+] = \\sqrt{K_a M_a}$ dan $[\\text{OH}^-] = \\sqrt{K_b M_b}$).",
      "Titrasi Asam–Basa dan Pemilihan Indikator: Pada titik ekuivalen titrasi, jumlah ekuivalen asam sama dengan jumlah ekuivalen basa ($n_a M_a V_a = n_b M_b V_b$). Titik ekuivalen bersifat netral ($\\text{pH} = 7$) untuk titrasi kuat–kuat, bersifat basa ($\\text{pH} > 7$) untuk asam lemah oleh basa kuat (cocok dengan fenolftalein), dan bersifat asam ($\\text{pH} < 7$) untuk basa lemah oleh asam kuat (cocok dengan metil merah).",
      "Larutan Penyangga dan Hidrolisis Garam: Larutan penyangga (buffer) mempertahankan pH relatif konstan saat ditambah sedikit asam, basa, atau diencerkan; terdiri atas asam lemah dengan basa konjugasinya ($[\\text{H}^+] = K_a \\frac{n_{\\text{asam}}}{n_{\\text{konjugat}}}$) atau basa lemah dengan asam konjugasinya ($[\\text{OH}^-] = K_b \\frac{n_{\\text{basa}}}{n_{\\text{konjugat}}}$). Sebaliknya, jika asam lemah dan basa kuat atau basa lemah dan asam kuat tepat habis bereaksi membentuk garam, terjadi hidrolisis sebagian pada ion lemah dengan $[\\text{OH}^-] = \\sqrt{\\frac{K_w}{K_a} M_{\\text{garam}}}$ atau $[\\text{H}^+] = \\sqrt{\\frac{K_w}{K_b} M_{\\text{garam}}}$.",
      "Kelarutan dan Hasil Kali Kelarutan Ksp: Untuk garam sukar larut $A_x B_y(s) \\rightleftharpoons x\\,A^{y+}(aq) + y\\,B^{x-}(aq)$, hasil kali kelarutan bernilai $K_{sp} = [A^{y+}]^x[B^{x-}]^y = x^x y^y s^{x+y}$. Adanya ion senama menurunkan kelarutan sesuai prinsip Le Chatelier. Pengendapan terjadi apabila kuosien hasil kali ion setelah pencampuran melebihi tetapan kelarutannya ($Q_{sp} > K_{sp}$)."
    ],
    "tutorTip": "Pada soal pencampuran asam dan basa, selalu buat hitungan mmol awal dan reaksi pembatasnya dulu: sisa komponen lemah berarti **Buffer** (pakai rasio mmol tanpa perlu $V_{\\text{total}}$), tepat habis berarti **Hidrolisis** (wajib cari $M_{\\text{garam}} = \\text{mmol} / V_{\\text{total}}$), sedangkan sisa komponen kuat berarti **pH Asam/Basa Kuat**.",
    "questionCount": 15
  },
  {
    "id": "kimia12-bab1-sifat-koligatif-larutan",
    "subject": "kimia",
    "grade": 12,
    "level": "SMA",
    "phase": "Fase F",
    "chapterIndex": 0,
    "title": "Bab 1: Sifat Koligatif Larutan Elektrolit dan Nonelektrolit",
    "track": null,
    "element": "Pemahaman Kimia: molalitas, fraksi mol, penurunan tekanan uap, kenaikan titik didih, penurunan titik beku, tekanan osmotik, dan faktor van't Hoff",
    "coreConcepts": [
      "Molalitas dan Fraksi Mol: Molalitas ($m$) menyatakan jumlah mol zat terlarut dalam $1\\text{ kg}$ pelarut ($m = \\frac{n}{p(\\text{kg})}$) dan tidak dipengaruhi suhu. Fraksi mol ($X$) menyatakan perbandingan mol suatu komponen terhadap jumlah mol total larutan, dengan $X_{\\text{terlarut}} + X_{\\text{pelarut}} = 1$.",
      "Penurunan Tekanan Uap Menurut Hukum Raoult: Kehadiran zat terlarut yang sukar menguap menghalangi penguapan molekul pelarut di permukaan, sehingga tekanan uap larutan lebih rendah daripada pelarut murni ($P = P^0 \\cdot X_{\\text{pelarut}}$ dan $\\Delta P = P^0 \\cdot X_{\\text{terlarut}}$).",
      "Kenaikan Titik Didih dan Penurunan Titik Beku: Penurunan tekanan uap larutan menyebabkan rentang wujud cair melebar: titik didih larutan naik sebesar $\\Delta T_b = m \\cdot K_b \\cdot i$ dan titik bekunya turun sebesar $\\Delta T_f = m \\cdot K_f \\cdot i$. Pada diagram fase $P$-$T$, kurva larutan bergeser di bawah dan di kiri kurva pelarut murni.",
      "Tekanan Osmotik dan Keseimbangan Cairan: Tekanan osmotik ($\\Pi = M \\cdot R \\cdot T \\cdot i$) adalah tekanan luar minimum yang diperlukan untuk menghentikan aliran pelarut melalui membran semipermeabel dari larutan encer ke larutan pekat. Larutan dengan tekanan osmotik sama disebut isotonik; lebih rendah disebut hipotonik; lebih tinggi disebut hipertonik.",
      "Faktor van't Hoff pada Larutan Elektrolit: Zat elektrolit terionisasi menghasilkan lebih banyak partikel terlarut dibandingkan jumlah mol mula-mulanya. Faktor pengali koligatif dirumuskan $i = 1 + (n - 1)\\alpha$, dengan $n$ jumlah ion per rumus kimia dan $\\alpha$ derajat ionisasi ($\\alpha = 1$ untuk elektrolit kuat; $0 < \\alpha < 1$ untuk elektrolit lemah; $i = 1$ untuk nonelektrolit)."
    ],
    "tutorTip": "Saat membandingkan sifat koligatif beberapa larutan dengan konsentrasi setara, cukup bandingkan hasil kali konsentrasi dan jumlah partikel ($m \\cdot i$ atau $M \\cdot i$). Semakin besar nilainya, semakin besar $\\Delta P$, $\\Delta T_b$, $\\Delta T_f$, dan $\\Pi$, sehingga titik didih makin tinggi tetapi titik beku dan tekanan uap makin rendah.",
    "questionCount": 15
  },
  {
    "id": "kimia12-bab2-redoks-dan-elektrokimia",
    "subject": "kimia",
    "grade": 12,
    "level": "SMA",
    "phase": "Fase F",
    "chapterIndex": 1,
    "title": "Bab 2: Reaksi Redoks, Sel Volta, dan Elektrolisis",
    "track": null,
    "element": "Pemahaman Kimia: penyetaraan redoks, potensial elektroda standar, deret Volta, sel elektrokimia, korosi, dan Hukum Faraday",
    "coreConcepts": [
      "Penyetaraan Reaksi Redoks: Reaksi redoks disetarakan agar jumlah atom dan muatan di ruas kiri sama dengan ruas kanan. Pada metode setengah reaksi dalam suasana asam, kekurangan atom $\\text{O}$ ditambah $\\text{H}_2\\text{O}$ dan kekurangan $\\text{H}$ ditambah $\\text{H}^+$; dalam suasana basa, ruas kelebihan $\\text{O}$ ditambah $\\text{H}_2\\text{O}$ dan ruas seberangnya ditambah $2\\text{OH}^-$ per atom $\\text{O}$.",
      "Sel Volta dan Potensial Sel Standar: Sel Volta mengubah energi kimia menjadi energi listrik melalui reaksi redoks spontan ($E^\\circ_{\\text{sel}} > 0$). Anoda adalah kutub negatif tempat terjadinya oksidasi, sedangkan katoda adalah kutub positif tempat terjadinya reduksi. Elektron mengalir melalui rangkaian luar dari anoda menuju katoda, sementara jembatan garam menyeimbangkan muatan ion.",
      "Deret Volta dan Kereaktifan Logam: Deret Volta mengurutkan logam berdasarkan potensial reduksi standar ($E^\\circ$) dari paling negatif (reduktor kuat, mudah teroksidasi) ke paling positif (oksidator ion kuat, mudah tereduksi): $\\text{Li}-\\text{K}-\\text{Ba}-\\text{Ca}-\\text{Na}-\\text{Mg}-\\text{Al}-\\text{Mn}-\\text{Zn}-\\text{Cr}-\\text{Fe}-\\text{Ni}-\\text{Sn}-\\text{Pb}-(\\text{H})-\\text{Cu}-\\text{Hg}-\\text{Ag}-\\text{Pt}-\\text{Au}$. Logam di sebelah kiri mampu mendesak ion logam di sebelah kanannya.",
      "Korosi Besi dan Cara Pencegahannya: Korosi adalah oksidasi logam oleh oksigen dan air membentuk oksida terhidrasi seperti $\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$. Korosi dipercepat oleh elektrolit, asam, dan kontak dengan logam lebih mulia ($E^\\circ$ lebih besar), serta dapat dicegah melalui pelapisan cat/minyak, elektroplating, paduan logam, atau proteksi katodik memakai anoda korban seperti $\\text{Mg}$ atau $\\text{Zn}$.",
      "Sel Elektrolisis dan Hukum Faraday: Sel elektrolisis menggunakan energi listrik untuk memaksa reaksi redoks tak spontan terjadi (katoda kutub negatif reduksi; anoda kutub positif oksidasi). Massa zat yang dihasilkan sebanding dengan muatan listrik yang mengalir ($Q = I \\cdot t$), dengan $1\\text{ Faraday} = 96.500\\text{ C/mol } e^-$."
    ],
    "tutorTip": "Hafalkan akronim **KRAO** (**K**atoda **R**eduksi, **A**noda **O**ksidasi) untuk semua jenis sel, serta **KPAN** (**K**atoda **P**ositif, **A**noda **N**egatif) khusus untuk sel Volta, dan **KNAP** untuk sel Elektrolisis.",
    "questionCount": 15
  },
  {
    "id": "kimia12-bab3-kimia-unsur",
    "subject": "kimia",
    "grade": 12,
    "level": "SMA",
    "phase": "Fase F",
    "chapterIndex": 2,
    "title": "Bab 3: Kimia Unsur Golongan Utama dan Transisi",
    "track": null,
    "element": "Pemahaman Kimia: sifat dan kegunaan gas mulia, halogen, alkali, alkali tanah, periode ketiga, dan logam transisi periode keempat",
    "coreConcepts": [
      "Gas Mulia dan Kestabilan Konfigurasi: Unsur golongan VIIIA ($\\text{He}, \\text{Ne}, \\text{Ar}, \\text{Kr}, \\text{Xe}, \\text{Rn}$) memiliki kulit valensi penuh ($1s^2$ untuk $\\text{He}$ dan $ns^2 np^6$ untuk lainnya) sehingga energi ionisasinya sangat tinggi dan sangat stabil. Senyawa gas mulia paling mudah disintesis pada $\\text{Xe}$ dan $\\text{Kr}$, yaitu dengan unsur sangat elektronegatif seperti $\\text{F}$ dan $\\text{O}$ (misalnya $\\text{XeF}_2$ dan $\\text{XeF}_4$).",
      "Halogen dan Reaksi Pendesakan: Unsur golongan VIIA ($\\text{F}_2, \\text{Cl}_2, \\text{Br}_2, \\text{I}_2$) berbentuk molekul diatomik dengan titik didih meningkat dari atas ke bawah akibat bertambahnya gaya London. Daya oksidator menurun dari $\\text{F}_2 > \\text{Cl}_2 > \\text{Br}_2 > \\text{I}_2$ sehingga halogen di atas dapat mendesak ion halida di bawahnya; sebaliknya, daya reduktor halida meningkat dari $\\text{F}^- < \\text{Cl}^- < \\text{Br}^- < \\text{I}^-$.",
      "Logam Alkali dan Alkali Tanah: Logam golongan IA dan IIA merupakan reduktor kuat yang makin reaktif dari atas ke bawah seiring membesarnya jari-jari atom. Logam alkali bereaksi hebat dengan air menghasilkan basa kuat dan gas $\\text{H}_2$. Pada golongan IIA, kelarutan basa $\\text{M(OH)}_2$ meningkat ke bawah sedangkan kelarutan garam sulfat $\\text{MSO}_4$ menurun ke bawah; ion $\\text{Ca}^{2+}$ dan $\\text{Mg}^{2+}$ menyebabkan kesadahan air.",
      "Keteraturan Unsur Periode Ketiga: Dari $\\text{Na}$ ke $\\text{Ar}$, jari-jari atom mengecil, keelektronegatifan meningkat, dan energi ionisasi cenderung naik (dengan anomali $\\text{Mg} > \\text{Al}$ dan $\\text{P} > \\text{S}$ karena kestabilan subkulit penuh $3s^2$ dan setengah penuh $3p^3$). Sifat oksida dan hidroksidanya bergeser dari basa kuat ($\\text{NaOH}$), amfoter ($\\text{Al(OH)}_3$), asam lemah ($\\text{H}_2\\text{SiO}_3$), hingga asam kuat ($\\text{H}_2\\text{SO}_4, \\text{HClO}_4$).",
      "Logam Transisi Periode Keempat dan Ion Kompleks: Unsur dari $\\text{Sc}$ hingga $\\text{Zn}$ mengisi subkulit $3d$, sehingga umumnya memiliki bilangan oksidasi bervariasi, membentuk senyawa berwarna dan ion kompleks (karena adanya orbital $d$ kosong yang menerima pasangan elektron bebas dari ligan), bersifat paramagnetik bila memiliki elektron tak berpasangan, serta efektif sebagai katalis."
    ],
    "tutorTip": "Ingat pola terbalik pada golongan alkali tanah (IIA): dari $\\text{Be}$ ke $\\text{Ba}$, kelarutan basa ($\\text{OH}^-$) semakin **besar**, sedangkan kelarutan garam sulfat ($\\text{SO}_4^{2-}$) dan kromat ($\\text{CrO}_4^{2-}$) semakin **kecil**.",
    "questionCount": 15
  },
  {
    "id": "kimia12-bab4-senyawa-karbon-dan-makromolekul",
    "subject": "kimia",
    "grade": 12,
    "level": "SMA",
    "phase": "Fase F",
    "chapterIndex": 3,
    "title": "Bab 4: Senyawa Turunan Alkana, Benzena, dan Makromolekul",
    "track": null,
    "element": "Pemahaman Kimia: gugus fungsi alkohol, eter, aldehida, keton, asam karboksilat, ester, benzena, polimer, karbohidrat, dan protein",
    "coreConcepts": [
      "Gugus Fungsi dan Keisomeran Turunan Alkana: Gugus fungsi menentukan sifat fisis dan reaksi kimia suatu senyawa. Tiga pasangan isomer fungsi utama meliputi alkohol ($\\text{R}-\\text{OH}$) dan eter ($\\text{R}-\\text{O}-\\text{R}'$) berumus umum $\\text{C}_n\\text{H}_{2n+2}\\text{O}$; aldehida ($\\text{R}-\\text{CHO}$) dan keton ($\\text{R}-\\text{CO}-\\text{R}'$) berumus umum $\\text{C}_n\\text{H}_{2n}\\text{O}$; serta asam karboksilat ($\\text{R}-\\text{COOH}$) dan ester ($\\text{R}-\\text{COOR}'$) berumus umum $\\text{C}_n\\text{H}_{2n}\\text{O}_2$.",
      "Reaksi Khas dan Identifikasi Gugus Fungsi: Alkohol bereaksi dengan logam $\\text{Na}$ membebaskan gas $\\text{H}_2$ (sedangkan eter tidak). Oksidasi alkohol primer menghasilkan aldehida lalu asam karboksilat, alkohol sekunder menghasilkan keton, dan alkohol tersier tidak teroksidasi oleh oksidator sedang. Aldehida mereduksi pereaksi Tollens (cermin perak) dan Fehling (endapan merah bata $\\text{Cu}_2\\text{O}$), sedangkan keton tidak bereaksi.",
      "Benzena dan Substitusi Elektrofilik: Benzena ($\\text{C}_6\\text{H}_6$) memiliki enam elektron $\\pi$ yang terdelokalisasi membentuk resonansi stabil sehingga lebih mudah mengalami substitusi elektrofilik (halogenasi, nitrasi, sulfonasi, alkilasi Friedel-Crafts) daripada adisi. Pada disubstitusi, gugus pendorong elektron ($-\\text{OH}, -\\text{NH}_2, -\\text{CH}_3, -\\text{Cl}$) mengarahkan substituen baru ke posisi orto/para, sedangkan gugus penarik elektron ($-\\text{NO}_2, -\\text{COOH}, -\\text{SO}_3\\text{H}$) mengarahkan ke posisi meta.",
      "Polimer Adisi dan Polimer Kondensasi: Polimer adalah makromolekul yang tersusun atas pengulangan monomer. Polimerisasi adisi terjadi pada monomer berikatan rangkap tanpa melepaskan molekul kecil (contoh: polietilena, PVC, teflon). Polimerisasi kondensasi menggabungkan monomer bergugus fungsi ganda disertai pelepasan molekul kecil seperti $\\text{H}_2\\text{O}$ (contoh: nilon-$6,6$, dakron, protein, dan selulosa).",
      "Karbohidrat dan Protein dalam Biokimia: Karbohidrat terbagi atas monosakarida (glukosa, fruktosa, galaktosa), disakarida (maltosa, laktosa, sukrosa), dan polisakarida (amilum, glikogen, selulosa); amilum diuji dengan iodin (biru-ungu) dan gula pereduksi dengan Benedict/Fehling. Protein adalah polimer asam amino yang dihubungkan ikatan peptida ($-\\text{CO}-\\text{NH}-$); asam amino bersifat amfoter membentuk ion zwitter dan dideteksi melalui uji Biuret (ungu), Xantoproteat (kuning-jingga), dan timbal(II) asetat (endapan hitam)."
    ],
    "tutorTip": "Untuk penamaan ester $\\text{R}-\\text{COO}-\\text{R}'$ secara cepat, tarik garis pemisah di antara $\\text{C}=\\text{O}$ dan $-\\text{O}-\\text{R}'$: gugus yang membawa $\\text{C}=\\text{O}$ menjadi nama belakang **-anoat** (asal asam karboksilat), sedangkan gugus yang menempel di $-\\text{O}-$ menjadi nama depan **alkil** (asal alkohol).",
    "questionCount": 15
  }
];
