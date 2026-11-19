import { bab, dasar, sedang, tantangan } from '../author.js';

export default bab({
  grade: 12,
  number: 4,
  slug: 'evolusi-dan-bioteknologi',
  title: 'Mekanisme Evolusi, Hukum Hardy–Weinberg, dan Bioteknologi',
  element: 'Pemahaman Biologi: teori evolusi Darwin-Lamarck, spesiasi, perhitungan frekuensi alel Hardy-Weinberg, rekayasa genetika, PCR, dan kultur jaringan',
  summary: {
    overview: 'Evolusi adalah perubahan frekuensi alel dalam populasi dari generasi ke generasi, sedangkan bioteknologi memanfaatkan makhluk hidup atau komponennya untuk menghasilkan produk dan jasa. Bab ini membahas bukti evolusi, teori Lamarck dan Darwin, mekanisme evolusi (mutasi, aliran gen, hanyutan genetik, seleksi alam), spesiasi, Hukum Hardy-Weinberg, bioteknologi konvensional dan modern termasuk rekayasa genetika, PCR, kultur jaringan, serta isu etika dan keamanan hayati.',
    coreConcepts: [
      'Bukti Evolusi dan Teori Evolusi: Bukti evolusi meliputi fosil, homologi anatomi (sirip paus dan lengan manusia), homologi embriologi dan molekuler, serta organ vestigial; struktur analog (sayap burung dan serangga) hanya menunjukkan konvergensi. Lamarck mengusulkan penggunaan-tak penggunaan organ dan pewarisan sifat perolehan, sedangkan Darwin mengusulkan seleksi alam: variasi yang diwariskan, produksi keturunan berlebih, dan keberhasilan reproduksi yang berbeda.',
      'Mekanisme Perubahan Frekuensi Alel: Mutasi menghasilkan alel baru, aliran gen memindahkan alel antarpopulasi, dan hanyutan genetik (efek pendiri dan efek leher botol) mengubah frekuensi alel secara acak pada populasi kecil. Seleksi alam dapat bersifat stabilisasi, direksional, atau disruptif. Populasi, bukan individu, yang berevolusi.',
      'Spesiasi: Menurut konsep spesies biologis, spesies adalah kelompok populasi yang dapat kawin silang dan menghasilkan keturunan subur. Isolasi reproduktif prazigotik (geografis, habitat, temporal, perilaku, mekanik, gamet) dan pascazigotik (hibrida mati atau mandul) memisahkan spesies. Spesiasi alopatrik terjadi karena pemisahan geografis, sedangkan simpatrik tanpa pemisahan geografis.',
      'Hukum Hardy-Weinberg: Populasi besar, kawin acak, tanpa mutasi, tanpa migrasi, dan tanpa seleksi berada dalam kesetimbangan: frekuensi alel dan genotipe tidak berubah. Dua alel memiliki frekuensi p dan q dengan p + q = 1, dan frekuensi genotipe p² + 2pq + q² = 1; frekuensi heterozigot adalah 2pq.',
      'Bioteknologi Konvensional dan Rekayasa Genetika: Bioteknologi konvensional memakai fermentasi (tempe, tape, yoghurt, keju). Rekayasa genetika memotong gen target dengan enzim restriksi, menyisipkannya ke vektor (plasmid) dengan DNA ligase, lalu memasukkannya ke sel inang (transformasi), contohnya insulin rekombinan dari Escherichia coli dan tanaman transgenik Bt.',
      'PCR, Kultur Jaringan, dan Etika: PCR memperbanyak DNA melalui siklus denaturasi (sekitar 95 derajat Celsius), annealing primer, dan ekstensi (sekitar 72 derajat Celsius) oleh Taq polimerase. Kultur jaringan memanfaatkan totipotensi sel tumbuhan dengan media berisi auksin dan sitokinin. Penerapan bioteknologi menuntut pertimbangan etika dan keamanan hayati, misalnya produk transgenik dan biopirasi.'
    ],
    keyFormulas: [
      { label: 'Kesetimbangan Hardy-Weinberg', formula: 'p + q = 1 \\qquad p^2 + 2pq + q^2 = 1' },
      { label: 'Frekuensi Alel dan Heterozigot', formula: 'q = \\sqrt{q^2} \\qquad f(\\text{heterozigot}) = 2pq' },
      { label: 'Frekuensi Alel dari Jumlah Genotipe', formula: 'p = \\dfrac{2N_{AA} + N_{Aa}}{2N}' },
      { label: 'Amplifikasi PCR', formula: 'N = N_0 \\times 2^{n}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung frekuensi pembawa dari frekuensi penderita',
        problem: 'Albinisme (aa) terjadi pada 1 dari 10.000 kelahiran. Hitung frekuensi alel a, alel A, dan pembawa (Aa) bila populasi setimbang.',
        solution: 'q² = 1/10.000 = 0,0001 sehingga q = 0,01 dan p = 1 - 0,01 = 0,99. Frekuensi pembawa = 2pq = 2 × 0,99 × 0,01 = 0,0198, atau sekitar 2 persen (kira-kira 1 dari 50 orang).'
      },
      {
        title: 'Menghitung frekuensi alel dan menguji kesetimbangan',
        problem: 'Populasi 500 orang terdiri atas 245 AA, 210 Aa, dan 45 aa. Hitung frekuensi A dan a, lalu periksa apakah populasi setimbang Hardy-Weinberg.',
        solution: 'p = (2 × 245 + 210) / (2 × 500) = 700 / 1.000 = 0,7 dan q = 0,3. Harapan genotipe: AA = 0,49 × 500 = 245, Aa = 0,42 × 500 = 210, aa = 0,09 × 500 = 45, sama dengan data sehingga populasi setimbang.'
      },
      {
        title: 'Menghitung hasil amplifikasi PCR',
        problem: 'Satu molekul DNA target diamplifikasi dengan PCR. Hitung jumlah salinan setelah 10 dan 30 siklus (efisiensi 100 persen).',
        solution: 'Setelah 10 siklus: 2¹⁰ = 1.024 salinan. Setelah 30 siklus: 2³⁰ ≈ 1,07 × 10⁹ salinan.'
      }
    ],
    misconceptions: [
      'Mengira individu dapat berevolusi dalam masa hidupnya. Seleksi bekerja pada individu, tetapi yang berevolusi adalah populasi karena frekuensi alelnya berubah.',
      'Menganggap evolusi bertujuan menuju kesempurnaan. Evolusi tidak memiliki tujuan; sifat yang bertahan hanyalah yang menguntungkan pada lingkungan tertentu.',
      'Mengira manusia berevolusi dari kera modern. Manusia dan kera modern memiliki nenek moyang bersama yang telah punah.',
      'Menganggap PCR memperbanyak protein. PCR memperbanyak fragmen DNA, bukan protein.'
    ],
    tutorTip: 'Pada soal Hardy-Weinberg, mulailah dari genotipe resesif karena q² = frekuensi penderita, kemudian cari q dengan akar, p = 1 - q, dan 2pq untuk pembawa. Untuk soal PCR, ingat bahwa jumlah salinan menggandakan diri setiap siklus.'
  },
  questions: [
    dasar(
      'Pasangan organ yang termasuk homolog adalah...',
      ['mata gurita dan mata manusia', 'duri kaktus dan duri mawar', 'sirip dada paus dan lengan manusia', 'sayap burung dan sayap kupu-kupu'],
      'C',
      'Organ homolog berasal dari asal yang sama tetapi fungsinya dapat berbeda.',
      'Sirip dada paus dan lengan manusia memiliki pola tulang yang sama (homolog), menunjukkan nenek moyang bersama. Pilihan lain adalah organ analog yang fungsinya sama tetapi asalnya berbeda.'
    ),
    dasar(
      'Teori evolusi Lamarck menyatakan bahwa...',
      ['organ yang sering digunakan akan berkembang dan sifat yang diperoleh dapat diwariskan', 'individu dengan variasi yang sesuai lingkungan bertahan lebih baik', 'mutasi acak menjadi satu-satunya sumber variasi', 'semua spesies muncul bersamaan'],
      'A',
      'Ingat contoh leher jerapah yang memanjang karena sering digunakan.',
      'Lamarck mengemukakan penggunaan dan tak penggunaan organ serta pewarisan sifat perolehan. Gagasan seleksi alam adalah milik Darwin.'
    ),
    dasar(
      'Inti dari teori seleksi alam Darwin adalah...',
      ['sifat yang diperoleh selama hidup diwariskan ke keturunan', 'individu dengan variasi yang sesuai lingkungan lebih berhasil bertahan dan bereproduksi', 'organisme berubah karena kebutuhan', 'semua individu dalam populasi memiliki sifat yang sama'],
      'B',
      'Seleksi alam bekerja pada variasi yang sudah ada.',
      'Dalam populasi terdapat variasi yang dapat diwariskan. Individu dengan sifat sesuai lingkungan memiliki peluang bertahan dan beranak lebih besar sehingga sifat itu makin umum pada generasi berikutnya.'
    ),
    dasar(
      'Pada populasi yang setimbang Hardy-Weinberg, jika frekuensi alel dominan p = 0,7, maka frekuensi alel resesif q adalah...',
      ['0,7', '0,49', '0,21', '0,3'],
      'D',
      'Gunakan p + q = 1.',
      'p + q = 1 sehingga q = 1 - 0,7 = 0,3.'
    ),
    dasar(
      'Enzim yang memotong DNA pada urutan basa tertentu dalam rekayasa genetika adalah...',
      ['enzim restriksi', 'DNA polimerase', 'ligase', 'helikase'],
      'A',
      'Enzim ini disebut juga gunting molekuler.',
      'Enzim restriksi mengenali dan memotong urutan basa spesifik sehingga gen target dapat dipisahkan. DNA ligase menyambung fragmen DNA, DNA polimerase mensintesis DNA, helikase membuka heliks.'
    ),
    sedang(
      'Insulin manusia diproduksi oleh bakteri Escherichia coli melalui rekayasa genetika dengan cara...',
      ['menumbuhkan bakteri pada media yang diberi hormon insulin', 'menyuntikkan insulin ke dalam bakteri agar membelah', 'mengawinkan bakteri dengan sel pankreas manusia', 'menyisipkan gen insulin manusia ke plasmid bakteri lalu memasukkannya ke sel bakteri'],
      'D',
      'Bakteri harus membawa gen insulin agar dapat membuat protein tersebut.',
      'Gen insulin dipotong dengan enzim restriksi, disisipkan ke plasmid dengan ligase, lalu plasmid rekombinan dimasukkan ke E. coli (transformasi) sehingga bakteri memproduksi insulin manusia.'
    ),
    sedang(
      'Dasar terjadinya kultur jaringan pada tumbuhan adalah sifat...',
      ['meiosis pada sel somatik', 'mutasi terarah', 'totipotensi sel tumbuhan', 'fertilisasi ganda'],
      'C',
      'Satu sel dapat tumbuh menjadi individu utuh.',
      'Totipotensi adalah kemampuan sel tumbuhan untuk tumbuh menjadi individu utuh pada media yang sesuai dengan hormon auksin dan sitokinin.'
    ),
    sedang(
      'Urutan tahap dalam satu siklus PCR yang benar adalah...',
      ['ekstensi - annealing - denaturasi', 'denaturasi - annealing - ekstensi', 'annealing - denaturasi - ekstensi', 'denaturasi - ekstensi - annealing'],
      'B',
      'Untai DNA harus dipisah dahulu sebelum primer menempel.',
      'DNA didenaturasi (sekitar 95 derajat Celsius), primer menempel (annealing), lalu Taq polimerase memperpanjang untai baru (ekstensi sekitar 72 derajat Celsius).'
    ),
    sedang(
      'Dua spesies katak hidup di kolam yang sama tetapi musim kawinnya berbeda sehingga tidak terjadi perkawinan. Hal ini merupakan isolasi...',
      ['geografis', 'mekanik', 'hibrida mandul', 'temporal (prazigotik)'],
      'D',
      'Perbedaan waktu perkawinan mencegah pembuahan.',
      'Isolasi temporal terjadi karena perbedaan waktu reproduksi sehingga pembuahan tidak terjadi (prazigotik). Isolasi geografis disebabkan pemisahan tempat.'
    ),
    sedang(
      'Populasi kupu-kupu menurun drastis akibat kebakaran hutan dan frekuensi alel pada populasi yang tersisa berubah secara acak. Peristiwa ini disebut...',
      ['efek pendiri', 'efek leher botol', 'aliran gen', 'seleksi direksional'],
      'B',
      'Populasi menyusut tajam oleh bencana sehingga keragaman alel hilang secara acak.',
      'Penurunan jumlah populasi secara drastis akibat bencana dan perubahan frekuensi alel secara acak disebut efek leher botol (bottleneck effect), salah satu bentuk hanyutan genetik.'
    ),
    tantangan(
      'Albinisme (aa) terjadi pada 1 dari 10.000 kelahiran dalam populasi yang setimbang Hardy-Weinberg. Frekuensi pembawa (heterozigot) adalah sekitar...',
      ['0,0198', '0,01', '0,0001', '0,98'],
      'A',
      'Cari q dari akar q², lalu hitung 2pq.',
      'q² = 0,0001 sehingga q = 0,01 dan p = 0,99. Frekuensi pembawa 2pq = 2 × 0,99 × 0,01 = 0,0198.'
    ),
    tantangan(
      'Populasi 500 orang terdiri atas 245 AA, 210 Aa, dan 45 aa. Frekuensi alel A dan status kesetimbangan populasi tersebut adalah...',
      ['0,7 dan tidak setimbang', '0,5 dan setimbang', '0,7 dan setimbang', '0,3 dan setimbang'],
      'C',
      'Hitung p, lalu bandingkan genotipe yang diharapkan dengan data.',
      'p = (2 × 245 + 210) / 1.000 = 0,7 dan q = 0,3. Harapan: AA = 245, Aa = 210, aa = 45, sama dengan data sehingga populasi setimbang.'
    ),
    tantangan(
      'Satu molekul DNA diamplifikasi dengan PCR dan efisiensi 100 persen. Jumlah salinan DNA setelah 10 siklus adalah...',
      ['100', '1.024', '2.048', '512'],
      'B',
      'Jumlah salinan menggandakan diri tiap siklus.',
      'Jumlah salinan = 2¹⁰ = 1.024.'
    ),
    tantangan(
      'Populasi tupai terpisah oleh sungai baru. Setelah ribuan generasi kedua populasi tidak dapat kawin silang. Proses ini disebut...',
      ['spesiasi simpatrik', 'spesiasi parapatrik', 'spesiasi alopatrik', 'mutasi tunggal pada satu individu'],
      'C',
      'Pemisahan geografis menjadi pemicu utama.',
      'Spesiasi alopatrik terjadi ketika hambatan geografis memisahkan populasi sehingga aliran gen terhenti dan populasi berkembang secara terpisah hingga terjadi isolasi reproduktif.'
    ),
    tantangan(
      'Setelah polusi jelaga di Inggris, ngengat Biston betularia yang berwarna gelap menjadi lebih banyak daripada yang berwarna terang. Penjelasan yang paling tepat adalah...',
      ['ngengat gelap lebih tersamar dari predator sehingga lebih banyak bertahan dan bereproduksi, dan frekuensi alel gelap meningkat', 'ngengat berubah menjadi gelap karena jelaga lalu mewariskan warna itu', 'jelaga secara terarah memicu mutasi warna gelap', 'perubahan terjadi murni karena hanyutan genetik'],
      'A',
      'Bandingkan penjelasan Darwin dan Lamarck.',
      'Variasi warna sudah ada dalam populasi. Pada batang pohon berjelaga, ngengat gelap lebih sulit terlihat predator sehingga lebih banyak bertahan dan berkembang biak, meningkatkan frekuensi alel warna gelap (seleksi alam).'
    )
  ]
});
