import { bab, dasar, sedang, tantangan } from '../author.js';

export default bab({
  grade: 11,
  number: 2,
  slug: 'jaringan-tumbuhan-dan-hewan',
  title: 'Struktur dan Fungsi Jaringan Tumbuhan serta Hewan',
  element: 'Pemahaman Biologi: meristem, parenkim, xilem-floem, anatomi daun-batang-akar, serta jaringan epitel, ikat, otot, dan saraf',
  summary: {
    overview: 'Jaringan adalah kumpulan sel sejenis yang bekerja sama menjalankan fungsi tertentu. Bab ini membahas jaringan meristem dan jaringan dewasa tumbuhan (epidermis, parenkim, kolenkim, sklerenkim, xilem, floem), anatomi akar, batang, dan daun, serta empat jenis jaringan hewan: epitel, ikat, otot, dan saraf, lengkap dengan hubungan struktur dan fungsinya dan cara menghitung indeks stomata serta laju transpirasi.',
    coreConcepts: [
      'Jaringan Meristem: Meristem apikal terletak di ujung akar dan batang serta menyebabkan pertumbuhan primer (memanjang). Meristem lateral (kambium vaskular dan kambium gabus) menyebabkan pertumbuhan sekunder (membesar) pada dikotil dan gymnospermae. Meristem interkalar berada di pangkal ruas, khas pada rumput dan monokotil.',
      'Jaringan Dewasa Tumbuhan: Epidermis melindungi dan memiliki kutikula, stomata, serta trikoma. Parenkim berdinding tipis dan berfungsi untuk fotosintesis, penyimpanan, dan sekresi. Kolenkim hidup dengan dinding selulosa menebal tidak merata untuk menyokong organ muda, sedangkan sklerenkim (serat dan sklereid) berdinding tebal berlignin, bersifat mati, dan memberi kekuatan.',
      'Jaringan Pengangkut: Xilem (trakea dan trakeid) tersusun atas sel mati berlignin yang mengangkut air dan mineral dari akar ke daun melalui kohesi, adhesi, dan tarikan transpirasi. Floem (tabung tapis dan sel pengiring) adalah sel hidup yang mengangkut hasil fotosintesis, terutama sukrosa, ke seluruh bagian tumbuhan.',
      'Anatomi Akar, Batang, dan Daun: Akar memiliki epidermis berbulu akar, korteks, endodermis dengan pita Kaspari, dan silinder pusat. Batang dikotil memiliki berkas pengangkut tersusun melingkar dengan kambium, sedangkan monokotil bertebaran tanpa kambium. Daun tersusun atas epidermis, mesofil (palisade dan spons), serta stomata yang dibuka-tutup oleh sel penjaga.',
      'Jaringan Epitel dan Jaringan Ikat: Epitel menyusun permukaan tubuh dan rongga organ berdasarkan bentuk (pipih, kubus, silindris) dan lapisan (selapis, berlapis). Jaringan ikat memiliki matriks yang luas: longgar, padat, adiposa, tulang rawan, tulang, dan darah (jaringan ikat cair).',
      'Jaringan Otot dan Saraf: Otot rangka bersifat lurik, berinti banyak di tepi, dan bekerja sadar. Otot polos berbentuk gelendong, berinti satu, dan bekerja tak sadar. Otot jantung lurik, bercabang, dan memiliki diskus interkalaris dengan kerja tak sadar. Jaringan saraf terdiri atas neuron (badan sel, dendrit, akson) dan sel glia penunjang.'
    ],
    keyFormulas: [
      { label: 'Indeks Stomata', formula: '\\text{IS} = \\dfrac{S}{S + E} \\times 100\\%' },
      { label: 'Laju Transpirasi (Potometer)', formula: '\\text{laju} = \\dfrac{\\Delta V}{t \\times A}' },
      { label: 'Ukuran Sebenarnya Objek Mikroskopis', formula: '\\text{ukuran sebenarnya} = \\dfrac{\\text{ukuran bayangan}}{M_{\\text{okuler}} \\times M_{\\text{objektif}}}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung indeks stomata',
        problem: 'Pada satu bidang pandang epidermis daun ditemukan 24 stomata dan 96 sel epidermis biasa. Berapa indeks stomatanya?',
        solution: 'IS = S / (S + E) × 100% = 24 / (24 + 96) × 100% = 24 / 120 × 100% = 20%.'
      },
      {
        title: 'Menghitung laju transpirasi dengan potometer',
        problem: 'Dalam 30 menit, sebuah ranting berdaun seluas 30 cm² menyerap 0,9 mL air pada potometer. Berapa laju transpirasinya?',
        solution: 'Laju = ΔV / (t × A) = 0,9 / (30 × 30) = 0,9 / 900 = 0,001 mL per menit per cm².'
      },
      {
        title: 'Mengidentifikasi tumbuhan dari penampang melintang batang',
        problem: 'Penampang batang tumbuhan P menunjukkan berkas pengangkut tersusun melingkar dengan kambium, sedangkan tumbuhan Q menunjukkan berkas tersebar tanpa kambium. Tentukan golongannya.',
        solution: 'Berkas pengangkut melingkar dan berkambium adalah ciri batang dikotil (misalnya kacang) sehingga P adalah dikotil. Berkas tersebar tanpa kambium adalah ciri monokotil (misalnya jagung) sehingga Q adalah monokotil.'
      }
    ],
    misconceptions: [
      'Mengira xilem mengangkut hasil fotosintesis. Xilem mengangkut air dan mineral dari akar ke daun, sedangkan floem mengangkut sukrosa dari daun ke seluruh tubuh.',
      'Menyamakan kolenkim dan sklerenkim. Kolenkim adalah sel hidup berdinding selulosa untuk menyokong organ muda, sedangkan sklerenkim sel mati berdinding lignin yang memberi kekuatan permanen.',
      'Menganggap otot jantung bekerja secara sadar karena berbentuk lurik. Otot jantung lurik tetapi bekerja tak sadar di bawah kendali sistem saraf otonom.',
      'Menganggap darah bukan jaringan. Darah adalah jaringan ikat cair dengan sel darah sebagai sel dan plasma sebagai matriks.'
    ],
    tutorTip: 'Untuk membedakan jaringan, hafalkan tiga kata kunci: hidup atau mati, jenis dinding sel (selulosa atau lignin), dan fungsi. Untuk jaringan otot, hafalkan tabel tiga kolom: lurik atau polos, sadar atau tak sadar, serta letak inti.'
  },
  questions: [
    dasar(
      'Jaringan yang menyebabkan pertumbuhan memanjang pada ujung akar dan batang adalah...',
      ['epidermis', 'kambium', 'meristem apikal', 'parenkim'],
      'C',
      'Apikal berarti ujung.',
      'Meristem apikal di ujung akar dan batang aktif membelah sehingga organ tumbuh memanjang (pertumbuhan primer). Kambium menyebabkan pertumbuhan membesar.'
    ),
    dasar(
      'Jaringan yang mengangkut air dan mineral dari akar menuju daun adalah...',
      ['floem', 'xilem', 'kolenkim', 'epidermis'],
      'B',
      'Pembuluh ini tersusun atas sel mati berlignin.',
      'Xilem (trakea dan trakeid) mengangkut air dan mineral dari akar ke daun. Floem mengangkut hasil fotosintesis.'
    ),
    dasar(
      'Sel yang mengatur membuka dan menutupnya stomata adalah...',
      ['sel parenkim palisade', 'sel pengiring', 'sel epidermis berbulu akar', 'sel penjaga'],
      'D',
      'Sel ini berbentuk seperti ginjal dan mengandung kloroplas.',
      'Sel penjaga mengubah bentuk akibat perubahan turgor sehingga celah stomata terbuka atau tertutup.'
    ),
    dasar(
      'Jaringan epitel yang menyusun dinding kantung udara paru-paru (alveolus) dan sangat tipis untuk memudahkan difusi adalah...',
      ['epitel pipih selapis', 'epitel silindris berlapis', 'epitel kubus berlapis', 'jaringan ikat padat'],
      'A',
      'Difusi gas berlangsung cepat melalui lapisan yang sangat tipis.',
      'Epitel pipih selapis sangat tipis sehingga memudahkan difusi O₂ dan CO₂ di alveolus dan dinding kapiler. Epitel silindris atau kubus berlapis lebih tebal untuk proteksi.'
    ),
    dasar(
      'Ciri otot rangka yang benar adalah...',
      ['berinti satu di tengah dan tidak bergaris', 'bergaris melintang (lurik), berinti banyak di tepi, dan bekerja secara sadar', 'bercabang dan memiliki diskus interkalaris', 'berbentuk gelendong dan bekerja tak sadar'],
      'B',
      'Otot rangka melekat pada tulang dan dapat digerakkan sesuai kehendak.',
      'Otot rangka berserabut lurik, berinti banyak di tepi sel, dan berkontraksi secara sadar. Pilihan C ciri otot jantung, pilihan A dan D ciri otot polos.'
    ),
    sedang(
      'Perbedaan batang dikotil dengan monokotil yang benar adalah...',
      ['dikotil berkas pengangkut tersusun melingkar dengan kambium, monokotil tersebar tanpa kambium', 'dikotil berkas pengangkut tersebar, monokotil tersusun melingkar', 'keduanya memiliki susunan berkas pengangkut yang sama', 'monokotil memiliki kambium sehingga batangnya membesar'],
      'A',
      'Kambium memungkinkan pertumbuhan membesar.',
      'Batang dikotil memiliki berkas pengangkut tersusun melingkar dan kambium sehingga dapat tumbuh membesar. Batang monokotil memiliki berkas tersebar tanpa kambium.'
    ),
    sedang(
      'Pernyataan yang benar mengenai kolenkim dan sklerenkim adalah...',
      ['kolenkim terdiri atas sel mati berdinding lignin', 'sklerenkim terdiri atas sel hidup berdinding selulosa', 'keduanya adalah jaringan meristem yang aktif membelah', 'sklerenkim berdinding tebal berlignin dan memberi kekuatan, sedangkan kolenkim berdinding selulosa tidak merata dan menyokong organ muda'],
      'D',
      'Bandingkan status hidup dan zat penyusun dinding selnya.',
      'Kolenkim hidup dengan penebalan selulosa tidak merata, menyokong organ muda yang masih tumbuh. Sklerenkim bersifat mati dengan dinding berlignin yang tebal dan memberi kekuatan.'
    ),
    sedang(
      'Hasil fotosintesis berupa sukrosa diangkut ke seluruh bagian tumbuhan melalui...',
      ['trakea', 'trakeid', 'pembuluh tapis yang dibantu sel pengiring', 'serabut sklerenkim'],
      'C',
      'Pengangkutan hasil fotosintesis disebut translokasi.',
      'Sukrosa diangkut oleh floem melalui pembuluh tapis, dibantu sel pengiring yang menyediakan energi dan protein. Trakea dan trakeid termasuk xilem.'
    ),
    sedang(
      'Jaringan ikat cair pada tubuh manusia adalah...',
      ['tulang', 'tulang rawan', 'jaringan adiposa', 'darah'],
      'D',
      'Jaringan ikat dikelompokkan berdasarkan kondisi matriksnya.',
      'Darah memiliki matriks cair (plasma) dengan sel darah sehingga disebut jaringan ikat cair. Tulang dan tulang rawan bermatriks padat, adiposa menyimpan lemak.'
    ),
    sedang(
      'Bagian neuron yang menghantarkan impuls menjauhi badan sel menuju sel berikutnya adalah...',
      ['akson', 'dendrit', 'badan sel', 'nukleus'],
      'A',
      'Dendrit menerima impuls, sedangkan bagian ini mengirimkannya.',
      'Akson menghantar impuls keluar dari badan sel ke neuron atau efektor berikutnya. Dendrit menerima rangsangan menuju badan sel.'
    ),
    tantangan(
      'Pada satu bidang pandang ditemukan 24 stomata dan 96 sel epidermis lain. Indeks stomata daun tersebut adalah...',
      ['12,5%', '25%', '20%', '80%'],
      'C',
      'Indeks stomata = stomata dibagi total (stomata ditambah sel epidermis).',
      'IS = 24 / (24 + 96) × 100% = 24 / 120 × 100% = 20%.'
    ),
    tantangan(
      'Penampang batang pohon jati menunjukkan lingkaran tahun. Pernyataan yang tepat tentang terbentuknya lingkaran tahun adalah...',
      ['dibentuk oleh meristem apikal yang aktif membelah di ujung batang', 'dibentuk oleh kambium vaskular yang menghasilkan xilem sekunder dengan ukuran sel berbeda pada musim berbeda', 'dibentuk oleh floem sekunder yang menumpuk setiap tahun', 'dibentuk oleh kolenkim yang menebal secara bertahap'],
      'B',
      'Pertumbuhan sekunder menambah diameter batang dikotil.',
      'Kambium vaskular menambah xilem sekunder ke arah dalam. Pada musim hujan sel xilem besar dan berwarna terang, sedangkan musim kemarau selnya kecil dan gelap sehingga terbentuk lingkaran tahun.'
    ),
    tantangan(
      'Dalam 30 menit, ranting berdaun seluas 30 cm² menyerap 0,9 mL air pada potometer. Laju transpirasinya adalah...',
      ['0,001 mL/(menit.cm²)', '0,03 mL/(menit.cm²)', '0,0001 mL/(menit.cm²)', '0,01 mL/(menit.cm²)'],
      'A',
      'Laju per satuan waktu dan per satuan luas daun.',
      'Laju = 0,9 / (30 menit × 30 cm²) = 0,9 / 900 = 0,001 mL per menit per cm².'
    ),
    tantangan(
      'Fungsi pita Kaspari pada endodermis akar adalah...',
      ['menyimpan cadangan pati bagi akar', 'memperbesar luas permukaan penyerapan', 'mengangkut sukrosa ke seluruh akar', 'menghalangi air dan mineral lewat dinding sel sehingga harus melewati membran sel endodermis yang selektif'],
      'D',
      'Pita ini mengandung suberin yang kedap air.',
      'Pita Kaspari bersuberin menghalangi gerak air dan mineral melalui dinding sel (jalur apoplas), memaksa zat melintasi membran plasma endodermis sehingga masuknya mineral terseleksi.'
    ),
    tantangan(
      'Kulit batang sebuah pohon dikelupas melingkar sehingga floem terputus, namun xilem masih utuh. Akibatnya dalam jangka panjang adalah...',
      ['air tidak dapat naik sehingga daun langsung layu', 'sukrosa dari daun tidak sampai ke akar sehingga akar kekurangan makanan dan akhirnya mati, sementara daun masih sementara hidup', 'fotosintesis berhenti seketika karena stomata menutup', 'akar menjadi lebih besar karena menumpuknya sukrosa'],
      'B',
      'Bedakan jalur pengangkutan air (xilem) dan hasil fotosintesis (floem).',
      'Xilem tetap utuh sehingga air terus naik ke daun yang melanjutkan fotosintesis sementara waktu. Floem yang terputus menghentikan aliran sukrosa ke akar sehingga akar kelaparan dan akhirnya pohon mati.'
    )
  ]
});
