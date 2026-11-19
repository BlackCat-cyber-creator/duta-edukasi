import { bab, dasar, sedang, tantangan } from '../author.js';

export default bab({
  grade: 10,
  number: 4,
  slug: 'ekosistem-dan-perubahan-lingkungan',
  title: 'Ekosistem, Daur Biogeokimia, dan Perubahan Lingkungan',
  element: 'Pemahaman Biologi: aliran energi, piramida ekologi, siklus karbon-nitrogen, pencemaran lingkungan, dan pemanasan global',
  summary: {
    overview: 'Ekosistem adalah satuan interaksi makhluk hidup dengan lingkungan abiotiknya melalui aliran energi satu arah dan daur materi yang berulang. Bab ini membahas komponen dan interaksi ekosistem, rantai makanan, piramida ekologi dan aturan 10 persen, daur karbon, nitrogen, serta fosfor, dinamika populasi, suksesi, pencemaran, eutrofikasi, biomagnifikasi, hingga pemanasan global dan upaya mitigasinya.',
    coreConcepts: [
      'Komponen dan Interaksi Ekosistem: Komponen biotik terdiri atas produsen, konsumen, dan pengurai, sedangkan komponen abiotik meliputi cahaya, suhu, air, tanah, dan udara. Tingkat organisasi: individu, populasi, komunitas, ekosistem, bioma, biosfer. Interaksi meliputi kompetisi, predasi, mutualisme, komensalisme, dan parasitisme.',
      'Aliran Energi dan Piramida Ekologi: Energi mengalir satu arah dari matahari ke produsen lalu ke konsumen tingkat berikutnya. Hanya sekitar 10 persen energi yang diteruskan ke tingkat trofik berikutnya (aturan Lindeman); sisanya hilang sebagai panas respirasi dan sisa. Piramida energi selalu tegak, sedangkan piramida jumlah dan biomassa dapat terbalik.',
      'Daur Biogeokimia: Karbon berpindah lewat fotosintesis, respirasi, pembakaran, dan dekomposisi. Nitrogen bergerak melalui fiksasi, nitrifikasi, asimilasi, amonifikasi, dan denitrifikasi. Fosfor tidak memiliki fase gas sehingga berpindah dari batuan ke tanah, air, dan organisme, lalu mengendap kembali.',
      'Dinamika Populasi: Kepadatan populasi adalah jumlah individu per satuan luas. Ukuran populasi berubah oleh natalitas, mortalitas, imigrasi, dan emigrasi. Pertumbuhan tanpa batas berbentuk eksponensial (kurva J), sedangkan pertumbuhan yang dibatasi daya dukung (K) berbentuk logistik (kurva S).',
      'Suksesi: Suksesi primer dimulai di habitat tanpa tanah (lava, batuan gundul) dengan lumut kerak sebagai pionir, sedangkan suksesi sekunder terjadi pada lahan yang tanahnya masih ada (bekas kebakaran atau ladang). Suksesi berakhir pada komunitas klimaks yang relatif stabil.',
      'Pencemaran dan Pemanasan Global: Eutrofikasi adalah pengayaan nitrat dan fosfat yang memicu ledakan alga dan menurunkan oksigen terlarut. Biomagnifikasi adalah peningkatan konsentrasi zat tak terurai (DDT, merkuri) di sepanjang rantai makanan. Pemanasan global dipicu peningkatan gas rumah kaca (CO₂, CH₄, N₂O), berbeda dari penipisan ozon oleh CFC.'
    ],
    keyFormulas: [
      { label: 'Transfer Energi Antartingkat Trofik', formula: 'E_{n+1} = 0{,}1 \\times E_n \\qquad E_n = E_0 \\times (0{,}1)^{n}' },
      { label: 'Produktivitas Primer Bersih', formula: '\\text{PPN} = \\text{PPK} - R' },
      { label: 'Kepadatan dan Perubahan Ukuran Populasi', formula: 'D = \\dfrac{N}{A} \\qquad N_t = N_0 + (B + I) - (D_m + E)' },
      { label: 'Pertumbuhan Logistik', formula: '\\dfrac{dN}{dt} = rN\\left(1 - \\dfrac{N}{K}\\right)' }
    ],
    workedExamples: [
      {
        title: 'Menghitung energi yang sampai ke konsumen puncak',
        problem: 'Produsen menyimpan 20.000 kJ energi. Pada rantai produsen, herbivora, karnivora I, karnivora II, berapa energi yang tersedia bagi karnivora II?',
        solution: 'Karnivora II berada tiga tingkat di atas produsen sehingga energi = 20.000 × (0,1)³ = 20.000 × 0,001 = 20 kJ.'
      },
      {
        title: 'Menghitung ukuran dan kepadatan populasi',
        problem: 'Populasi rusa awal 400 ekor pada kawasan 50 km². Dalam setahun lahir 30, mati 10, imigrasi 5, dan emigrasi 15. Berapa ukuran dan kepadatan populasi akhir?',
        solution: 'N akhir = 400 + 30 - 10 + 5 - 15 = 410 ekor. Kepadatan = 410 / 50 = 8,2 ekor/km².'
      },
      {
        title: 'Menghitung produktivitas primer bersih',
        problem: 'Produktivitas primer kotor suatu padang rumput 1.200 g C/m²/tahun dan respirasi tumbuhannya 700 g C/m²/tahun. Berapa produktivitas primer bersih?',
        solution: 'PPN = PPK - R = 1.200 - 700 = 500 g C/m²/tahun. Nilai ini adalah energi yang tersedia bagi konsumen.'
      }
    ],
    misconceptions: [
      'Menganggap energi didaur ulang seperti materi. Energi mengalir satu arah dan akhirnya lepas sebagai panas, sedangkan materi (C, N, P) didaur ulang.',
      'Mengira piramida jumlah selalu tegak. Pada rantai pohon besar, ulat, dan burung, jumlah produsen lebih sedikit daripada konsumen primer sehingga piramida jumlah tidak tegak.',
      'Menyamakan pemanasan global dengan penipisan lapisan ozon. Pemanasan global akibat gas rumah kaca yang menahan radiasi inframerah, sedangkan penipisan ozon akibat CFC yang meningkatkan UV-B.',
      'Menganggap pengurai hanya mengurus bangkai. Pengurai mengembalikan unsur hara dari semua bahan organik mati sehingga menjadi penggerak utama daur biogeokimia.'
    ],
    tutorTip: 'Untuk soal energi antartingkat trofik, hitung jumlah panah dari produsen lalu kalikan 0,1 sebanyak jumlah panah tersebut. Pada pertumbuhan populasi, ingat rumus: N akhir = N awal + (lahir + imigrasi) - (mati + emigrasi), dan pertumbuhan logistik tercepat terjadi saat N = K/2.'
  },
  questions: [
    dasar(
      'Kumpulan beberapa populasi spesies berbeda yang hidup bersama pada waktu dan tempat yang sama disebut...',
      ['individu', 'populasi', 'ekosistem', 'komunitas'],
      'D',
      'Populasi hanya terdiri atas satu spesies.',
      'Komunitas adalah kumpulan populasi berbagai spesies di suatu tempat. Ekosistem mencakup komunitas bersama lingkungan abiotiknya.'
    ),
    dasar(
      'Dalam ekosistem, bakteri dan jamur pengurai berperan sebagai...',
      ['produsen yang mengubah energi cahaya menjadi energi kimia', 'dekomposer yang menguraikan bahan organik mati menjadi zat anorganik', 'konsumen tingkat pertama pemakan tumbuhan', 'konsumen puncak pemakan hewan'],
      'B',
      'Pengurai mengembalikan unsur hara ke tanah.',
      'Pengurai (dekomposer) menguraikan sisa organisme menjadi unsur anorganik yang dapat dipakai kembali produsen, sehingga menutup daur materi.'
    ),
    dasar(
      'Anggrek yang menempel pada batang pohon untuk memperoleh cahaya tanpa merugikan pohon inangnya menunjukkan hubungan...',
      ['mutualisme', 'parasitisme', 'komensalisme', 'kompetisi'],
      'C',
      'Satu pihak diuntungkan, pihak lain tidak dirugikan maupun diuntungkan.',
      'Pada komensalisme satu pihak (anggrek) diuntungkan, pihak lain (pohon inang) tidak terpengaruh. Mutualisme saling menguntungkan, parasitisme merugikan inang.'
    ),
    dasar(
      'Piramida ekologi yang selalu berbentuk tegak (tidak pernah terbalik) adalah piramida...',
      ['energi', 'jumlah', 'biomassa', 'jumlah dan biomassa'],
      'A',
      'Energi selalu berkurang di setiap tingkat trofik.',
      'Karena energi yang diteruskan hanya sekitar 10 persen di setiap tingkat, piramida energi selalu tegak. Piramida jumlah dan biomassa dapat terbalik pada kasus tertentu.'
    ),
    dasar(
      'Gas rumah kaca utama yang dihasilkan pembakaran bahan bakar fosil dan memicu pemanasan global adalah...',
      ['oksigen (O₂)', 'karbon dioksida (CO₂)', 'nitrogen (N₂)', 'helium (He)'],
      'B',
      'Gas ini juga dipakai tumbuhan dalam fotosintesis.',
      'Pembakaran bahan bakar fosil melepaskan CO₂ yang menahan radiasi inframerah dan meningkatkan suhu bumi. O₂, N₂, dan He bukan gas rumah kaca utama.'
    ),
    sedang(
      'Pada rantai makanan rumput, belalang, katak, ular, elang, energi pada rumput 100.000 kJ. Dengan efisiensi 10 persen, energi yang tersedia bagi ular adalah...',
      ['100 kJ', '1.000 kJ', '10 kJ', '10.000 kJ'],
      'A',
      'Ular berada tiga tingkat di atas rumput.',
      'Rumput 100.000, belalang 10.000, katak 1.000, ular 100 kJ. Dengan rumus: 100.000 × (0,1)³ = 100 kJ.'
    ),
    sedang(
      'Proses kembalinya nitrogen ke atmosfer dalam bentuk gas N₂ dari nitrat oleh bakteri dalam tanah disebut...',
      ['nitrifikasi', 'fiksasi nitrogen', 'amonifikasi', 'denitrifikasi'],
      'D',
      'Proses ini mengubah nitrat menjadi nitrogen bebas.',
      'Denitrifikasi mengubah nitrat menjadi gas N₂ yang dilepas ke udara. Nitrifikasi mengoksidasi amonia, fiksasi mengubah N₂ menjadi amonia, amonifikasi menguraikan protein menjadi amonia.'
    ),
    sedang(
      'Populasi serangga awal 400 ekor. Dalam sebulan lahir 120, mati 60, imigrasi 20, dan emigrasi 40. Ukuran populasi akhir adalah...',
      ['400 ekor', '420 ekor', '440 ekor', '460 ekor'],
      'C',
      'N akhir = N awal + lahir + imigrasi - mati - emigrasi.',
      'N = 400 + 120 + 20 - 60 - 40 = 440 ekor.'
    ),
    sedang(
      'Dampak langsung eutrofikasi di danau akibat limbah detergen dan pupuk yang kaya fosfat dan nitrat adalah...',
      ['ledakan populasi alga yang menurunkan oksigen terlarut sehingga organisme air mati', 'meningkatnya keanekaragaman ikan di danau', 'menurunnya suhu air secara drastis', 'meningkatnya penetrasi cahaya ke dasar danau'],
      'A',
      'Alga yang mati diuraikan oleh bakteri aerob yang menghabiskan oksigen.',
      'Nutrien berlebih memicu blooming alga. Setelah mati, alga diuraikan bakteri aerob yang menghabiskan oksigen terlarut sehingga ikan dan organisme lain mati.'
    ),
    sedang(
      'Pestisida DDT yang tidak mudah terurai menumpuk dengan konsentrasi paling tinggi pada...',
      ['produsen', 'konsumen puncak', 'pengurai', 'air tempat DDT dilarutkan'],
      'B',
      'Zat ini terakumulasi sepanjang rantai makanan.',
      'Pada biomagnifikasi, zat beracun tidak terurai terkonsentrasi semakin tinggi pada tingkat trofik lebih atas sehingga konsentrasi tertinggi ada pada konsumen puncak seperti elang atau burung pemangsa.'
    ),
    tantangan(
      'Pernyataan yang benar mengenai suksesi adalah...',
      ['suksesi sekunder dimulai dari batuan gundul tanpa tanah', 'pionir pada suksesi primer adalah pohon besar berkayu', 'suksesi primer dimulai pada habitat tanpa tanah dengan lumut kerak sebagai pionir, sedangkan suksesi sekunder terjadi di lahan yang tanahnya masih ada', 'suksesi primer dan sekunder selalu berlangsung dalam waktu yang sama'],
      'C',
      'Bandingkan kondisi awal lahan pada kedua jenis suksesi.',
      'Suksesi primer dimulai pada substrat tanpa tanah (lava, batuan) dengan lumut kerak sebagai pionir, memakan waktu lama. Suksesi sekunder terjadi pada lahan yang tanah dan bijinya masih ada, sehingga lebih cepat.'
    ),
    tantangan(
      'Suatu padang rumput memiliki produktivitas primer kotor (PPK) 1.200 g C/m²/tahun, dan tumbuhannya melepaskan 700 g C/m²/tahun melalui respirasi. Produktivitas primer bersih (PPN) padang rumput tersebut adalah...',
      ['1.900 g C/m²/tahun', '1.200 g C/m²/tahun', '700 g C/m²/tahun', '500 g C/m²/tahun'],
      'D',
      'PPN = PPK dikurangi respirasi autotrof.',
      'PPN = PPK - R = 1.200 - 700 = 500 g C/m²/tahun, yaitu energi yang tersedia bagi konsumen.'
    ),
    tantangan(
      'Pada sebuah pohon mangga terdapat 5.000 ulat yang dimakan 40 ekor burung. Piramida jumlah rantai pohon mangga, ulat, burung adalah...',
      ['tidak tegak, bagian tengah paling lebar karena produsen lebih sedikit daripada konsumen primer', 'tegak sempurna karena produsen paling banyak', 'berbentuk segitiga terbalik sempurna dengan produsen paling banyak', 'tidak dapat disusun karena burung bukan konsumen'],
      'A',
      'Bandingkan jumlah individu pada tiap tingkat trofik, bukan jumlah energinya.',
      'Satu pohon (produsen) jauh lebih sedikit daripada 5.000 ulat, sedangkan burung hanya 40. Tingkat tengah terbanyak sehingga piramida jumlah tidak tegak dan bagian tengahnya paling lebar.'
    ),
    tantangan(
      'Kolam ikan memiliki daya dukung (K) 1.000 ekor dan tumbuh mengikuti kurva logistik. Laju pertambahan populasi paling cepat terjadi saat jumlah ikan sekitar...',
      ['100 ekor', '1.000 ekor', '500 ekor', '0 ekor'],
      'C',
      'Pada kurva logistik, laju paling cepat terjadi di titik belok kurva S.',
      'Laju pertumbuhan logistik dN/dt = rN(1 - N/K) maksimum pada N = K/2 = 500 ekor. Di N = K laju nol karena populasi mencapai daya dukung.'
    ),
    tantangan(
      'Pernyataan yang tepat mengenai pemanasan global dan penipisan ozon adalah...',
      ['keduanya disebabkan terutama oleh peningkatan CO₂ di stratosfer', 'penipisan ozon adalah penyebab utama efek rumah kaca', 'gas rumah kaca menyebabkan UV-B lebih banyak mencapai permukaan bumi', 'CFC menipiskan ozon sehingga UV-B meningkat, sedangkan pemanasan global terutama akibat peningkatan CO₂ dan CH₄ yang menahan radiasi inframerah'],
      'D',
      'Identifikasi gas penyebab dan lapisan atmosfer yang terdampak pada masing-masing masalah.',
      'CFC merusak ozon stratosfer sehingga lebih banyak UV-B tiba di bumi. Pemanasan global terutama disebabkan CO₂ dan CH₄ di troposfer yang menahan radiasi inframerah. Keduanya masalah berbeda.'
    )
  ]
});
