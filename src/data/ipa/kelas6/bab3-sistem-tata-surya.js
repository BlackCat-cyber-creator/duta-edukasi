import { bab, soal } from '../author.js';

export default bab({
  grade: 6,
  number: 3,
  slug: 'sistem-tata-surya',
  title: 'Sistem Tata Surya dan Karakteristik Planet',
  element: 'Pemahaman IPAS: sistem tata surya dan karakteristik benda langit',
  summary: {
    overview: 'Ketika menatap langit malam, kita melihat Bulan, bintang-bintang, dan terkadang kilatan cahaya meteor. Bumi tempat kita tinggal hanyalah satu dari delapan planet yang mengelilingi Matahari dalam sistem tata surya. Bab ini membahas Matahari sebagai pusat tata surya, urutan dan ciri delapan planet (planet dalam berbatu vs planet luar gas dan es), satelit alami, asteroid, komet, meteoroid-meteor-meteorit, serta peran gravitasi menjaga orbit planet.',
    coreConcepts: [
      'Matahari sebagai Pusat Tata Surya: Tata surya adalah susunan benda langit yang terikat gravitasi dan bergerak mengelilingi Matahari. Matahari tergolong bintang karena memancarkan cahaya dan panas sendiri dari reaksi fusi nuklir di intinya. Karena massanya jauh lebih besar daripada gabungan seluruh planet, gaya gravitasi Matahari sangat kuat sehingga mengikat semua anggota tata surya tetap pada orbitnya.',
      'Urutan Planet dan Pengelompokannya: Delapan planet berurutan dari terdekat ke Matahari adalah Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, dan Neptunus. Sabuk asteroid memisahkan dua kelompok besar: planet dalam (Merkurius, Venus, Bumi, Mars) berukuran relatif kecil dengan permukaan batuan padat; planet luar (Jupiter, Saturnus, Uranus, Neptunus) berukuran raksasa, dengan Jupiter dan Saturnus sebagai raksasa gas serta Uranus dan Neptunus sebagai raksasa es.',
      'Karakteristik Utama Delapan Planet: Merkurius planet terkecil dan terdekat dengan Matahari serta hampir tanpa atmosfer. Venus adalah planet terpanas karena atmosfer karbon dioksida yang sangat tebal memerangkap panas, dan berotasi searah jarum jam (berlawanan dengan kebanyakan planet). Bumi memiliki air cair dan atmosfer kaya oksigen sehingga mendukung kehidupan. Mars dijuluki planet merah karena permukaannya kaya oksida besi. Jupiter planet terbesar; Saturnus bercincin es dan batuan yang paling jelas; Uranus berwarna biru kehijauan dengan sumbu rotasi sangat miring; Neptunus planet terjauh berwarna biru gelap dengan angin sangat kencang.',
      'Satelit Alami dan Sabuk Asteroid: Satelit alami adalah benda langit yang mengelilingi sebuah planet dan tidak memancarkan cahaya sendiri, melainkan memantulkan cahaya Matahari. Contohnya Bulan milik Bumi, Phobos dan Deimos milik Mars, Ganymede milik Jupiter, dan Titan milik Saturnus. Asteroid adalah benda langit berbatu berukuran lebih kecil daripada planet yang sebagian besar mengorbit di sabuk asteroid antara orbit Mars dan Jupiter.',
      'Komet, Meteoroid, Meteor, dan Meteorit: Komet tersusun atas es, debu, dan gas beku; saat mendekati Matahari, esnya menguap membentuk koma dan ekor bercahaya yang selalu mengarah menjauhi Matahari karena dorongan angin surya. Meteoroid adalah pecahan batu atau logam kecil yang melayang di ruang angkasa. Ketika memasuki atmosfer bumi dan terbakar akibat gesekan udara hingga berpijar, benda itu disebut meteor (sering dijuluki bintang jatuh). Sisa batuan yang tidak habis terbakar dan jatuh mencapai permukaan bumi disebut meteorit.',
      'Gravitasi Menjaga Orbit Planet: Setiap planet memiliki gerak maju yang cenderung lurus sekaligus menerima gaya tarik gravitasi dari Matahari ke arah pusat. Perpaduan gerak maju dan tarikan gravitasi Matahari membuat planet terus bergerak mengelilingi Matahari dalam lintasan elips tanpa jatuh ke Matahari maupun terlempar ke ruang angkasa. Planet yang lebih dekat dengan Matahari menerima tarikan gravitasi lebih kuat sehingga bergerak lebih cepat dan periode orbitnya lebih singkat.'
    ],
    keyFormulas: [
      { label: 'Urutan delapan planet', formula: '\\text{Me} \\to \\text{V} \\to \\text{B} \\to \\text{Ma} \\mid \\text{Sabuk Asteroid} \\mid \\text{J} \\to \\text{S} \\to \\text{U} \\to \\text{N}' },
      { label: 'Perubahan istilah meteoroid', formula: '\\text{Meteoroid (antariksa)} \\to \\text{Meteor (atmosfer)} \\to \\text{Meteorit (permukaan bumi)}' },
      { label: 'Hubungan jarak dan periode orbit', formula: '\\text{Makin dekat Matahari} \\implies \\text{orbit makin singkat}' }
    ],
    workedExamples: [
      {
        title: 'Mengelompokkan planet dalam dan planet luar',
        problem: 'Kelompokkan Mars, Saturnus, Venus, dan Neptunus menjadi planet dalam dan planet luar, lalu jelaskan perbedaan penyusunnya.',
        solution: '**Planet dalam** adalah **Venus dan Mars** karena berada di antara Matahari dan sabuk asteroid; permukaannya tersusun atas **batuan padat**. **Planet luar** adalah **Saturnus dan Neptunus**; ukurannya raksasa dan sebagian besar tersusun atas **gas atau es**.'
      },
      {
        title: 'Membedakan meteoroid, meteor, dan meteorit',
        problem: 'Sebuah pecahan batuan angkasa melayang di luar angkasa, lalu masuk ke atmosfer bumi dan tampak menyala terang sebelum akhirnya tersisa bongkahan batu yang jatuh di padang rumput. Sebutkan nama benda itu pada ketiga tahap tersebut.',
        solution: 'Saat masih melayang di luar angkasa disebut **meteoroid**, saat terbakar berpijar di atmosfer disebut **meteor**, dan sisa batuan yang berhasil jatuh sampai permukaan bumi disebut **meteorit**.'
      },
      {
        title: 'Membandingkan lama revolusi planet',
        problem: 'Merkurius membutuhkan sekitar 88 hari untuk satu kali mengelilingi Matahari, sedangkan Bumi membutuhkan sekitar 365 hari dan Jupiter sekitar 12 tahun. Mengapa periode orbit planet luar jauh lebih lama?',
        solution: 'Karena jarak planet luar ke Matahari jauh lebih besar, **panjang lintasan orbitnya jauh lebih panjang** dan **tarikan gravitasi Matahari lebih lemah** sehingga kelajuan planet di orbitnya lebih lambat.'
      }
    ],
    misconceptions: [
      'Menganggap Merkurius adalah planet terpanas karena paling dekat dengan Matahari. Planet terpanas justru Venus karena atmosfer karbon dioksida yang tebal memerangkap panas melalui efek rumah kaca.',
      'Menganggap "bintang jatuh" adalah bintang sesungguhnya yang jatuh ke bumi. Kilatan cahaya itu adalah meteor, yaitu batuan kecil yang terbakar akibat gesekan udara di atmosfer bumi.',
      'Menganggap ekor komet selalu berada di belakang arah gerak komet. Ekor komet selalu terdorong menjauhi Matahari oleh angin surya dan radiasi Matahari, sehingga saat menjauhi Matahari ekornya justru mengarah ke depan.'
    ],
    tutorTip: 'Hafalkan urutan planet dengan "Me-Ve-Bu-Ma Ju-Sa-U-Ne", dan ingat Sabuk Asteroid tepat di antara Mars dan Jupiter yang memisahkan planet berbatu (dalam) dari raksasa gas dan es (luar).'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Benda langit yang menjadi pusat tata surya dan mampu memancarkan cahaya sendiri adalah...',
      options: ['Matahari', 'Bumi', 'Jupiter', 'Bulan'],
      answer: 'A',
      hint: 'Benda langit yang memancarkan cahaya sendiri disebut bintang.',
      solution: '**Matahari** adalah bintang di pusat tata surya yang memancarkan cahaya dan panas sendiri, sedangkan planet dan satelit hanya memantulkan cahayanya. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Kelompok planet dalam yang tersusun atas batuan padat secara berurutan dari yang terdekat dengan Matahari adalah...',
      options: [
        'Jupiter, Saturnus, Uranus, Neptunus',
        'Venus, Merkurius, Mars, Bumi',
        'Bumi, Mars, Jupiter, Saturnus',
        'Merkurius, Venus, Bumi, Mars'
      ],
      answer: 'D',
      hint: 'Keempat planet ini berada di sebelah dalam sabuk asteroid.',
      solution: 'Urutan empat **planet dalam** dari Matahari adalah **Merkurius, Venus, Bumi, Mars**. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Kumpulan benda langit berbatu yang membentuk sabuk asteroid berada di antara orbit planet...',
      options: [
        'Bumi dan Mars',
        'Mars dan Jupiter',
        'Venus dan Bumi',
        'Jupiter dan Saturnus'
      ],
      answer: 'B',
      hint: 'Sabuk ini menjadi pembatas antara kelompok planet dalam dan planet luar.',
      solution: 'Sabuk asteroid terletak di antara orbit planet keempat (**Mars**) dan planet kelima (**Jupiter**). Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Planet terbesar dalam sistem tata surya yang tersusun sebagian besar dari gas dan memiliki Bintik Merah Raksasa adalah...',
      options: ['Saturnus', 'Uranus', 'Jupiter', 'Neptunus'],
      answer: 'C',
      hint: 'Planet ini berada tepat setelah sabuk asteroid.',
      solution: '**Jupiter** adalah planet kelima sekaligus planet terbesar di tata surya dengan badai raksasa yang dikenal sebagai Bintik Merah Raksasa. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Garis cahaya terang di langit malam yang sering disebut "bintang jatuh" sebenarnya terjadi akibat pecahan batu angkasa yang terbakar saat memasuki atmosfer bumi, yang disebut...',
      options: ['meteor', 'komet', 'asteroid', 'satelit'],
      answer: 'A',
      hint: 'Gesekan dengan udara di atmosfer membuat batuan kecil ini berpijar terang.',
      solution: 'Batuan kecil dari angkasa yang terbakar dan berpijar di atmosfer bumi disebut **meteor**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Planet-planet terus bergerak mengelilingi Matahari pada lintasan orbitnya dan tidak terlempar lurus ke ruang angkasa karena adanya...',
      options: [
        'tiupan angin dari atmosfer bumi',
        'gaya magnet cincin Saturnus',
        'rotasi bulan yang mengelilingi bumi',
        'gaya tarik gravitasi Matahari yang mengikat gerak planet'
      ],
      answer: 'D',
      hint: 'Matahari memiliki massa jauh paling besar dibandingkan benda lain di tata surya.',
      solution: 'Perpaduan antara gerak maju planet dan **gaya tarik gravitasi Matahari** menjaga planet tetap bergerak pada lintasan orbitnya mengelilingi Matahari. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Perbedaan utama antara kelompok planet dalam dan kelompok planet luar dalam tata surya adalah...',
      options: [
        'planet dalam tidak memiliki gravitasi, sedangkan planet luar memiliki gravitasi',
        'planet dalam memancarkan cahaya sendiri, sedangkan planet luar tidak',
        'planet dalam berukuran kecil dan berbatu padat, sedangkan planet luar berukuran raksasa dan tersusun atas gas atau es',
        'planet dalam semuanya memiliki cincin tebal, sedangkan planet luar tidak'
      ],
      answer: 'C',
      hint: 'Bandingkan ukuran dan bahan penyusun Bumi/Mars dengan Jupiter/Uranus.',
      solution: 'Empat **planet dalam berukuran relatif kecil dan permukaannya berbatu padat**, sedangkan empat **planet luar berukuran raksasa dan tersusun atas gas (Jupiter, Saturnus) atau es (Uranus, Neptunus)**. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Meskipun Merkurius lebih dekat dengan Matahari, suhu permukaan Venus jauh lebih panas daripada Merkurius karena...',
      options: [
        'Venus memancarkan panas dari reaksi nuklir seperti bintang',
        'Venus memiliki atmosfer karbon dioksida yang sangat tebal sehingga memerangkap panas',
        'Merkurius diselimuti es tebal sepanjang tahun',
        'orbit Venus berada lebih dekat ke Matahari daripada orbit Merkurius'
      ],
      answer: 'B',
      hint: 'Ingat fungsi selimut gas yang menahan panas agar tidak keluar kembali ke angkasa.',
      solution: 'Atmosfer **Venus sangat tebal dan kaya karbon dioksida** sehingga menimbulkan efek rumah kaca ekstrem yang memerangkap panas matahari, sedangkan Merkurius hampir tidak memiliki atmosfer. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah komet tersusun atas es, debu, dan gas beku. Ketika komet melintas mendekati Matahari, ciri khas yang tampak adalah...',
      options: [
        'esnya menguap membentuk koma dan ekor bercahaya yang selalu menjauhi Matahari',
        'komet berubah menjadi planet berbatu yang diam di tempat',
        'ekornya selalu menunjuk ke arah Matahari karena tarikan gravitasi',
        'komet membeku lebih keras dan tidak terlihat dari Bumi'
      ],
      answer: 'A',
      hint: 'Panas matahari menguapkan es komet dan angin surya mendorong gasnya.',
      solution: 'Saat mendekati Matahari, panas menguapkan es komet membentuk selubung gas (koma) dan **ekor yang didorong angin surya sehingga selalu menjauhi Matahari**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Urutan penamaan yang benar bagi sebuah batu angkasa sejak masih melayang di luar angkasa, terbakar di atmosfer bumi, hingga sisa batuannya ditemukan jatuh di permukaan bumi adalah...',
      options: [
        'meteorit → meteor → meteoroid',
        'meteor → meteoroid → meteorit',
        'asteroid → komet → meteorit',
        'meteoroid → meteor → meteorit'
      ],
      answer: 'D',
      hint: 'Akhiran "-it" menandakan benda padat yang sudah sampai di tanah (seperti batu/mineral).',
      solution: 'Di ruang angkasa disebut **meteoroid**, saat berpijar terbakar di atmosfer disebut **meteor**, dan sisa yang jatuh ke permukaan bumi disebut **meteorit**. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Perhatikan data perkiraan waktu satu kali mengorbit Matahari bagi empat planet: planet P memerlukan 88 hari, planet Q memerlukan 225 hari, planet R memerlukan 365 hari, dan planet S memerlukan 12 tahun. Berdasarkan keteraturan tata surya, kesimpulan yang paling tepat mengenai jarak planet dari Matahari adalah...',
      options: [
        'planet S adalah yang paling dekat dengan Matahari',
        'planet R berada lebih dekat ke Matahari daripada planet P',
        'urutan dari yang terdekat ke Matahari adalah P, Q, R, lalu S',
        'jarak planet ke Matahari tidak memengaruhi lama waktu orbitnya'
      ],
      answer: 'C',
      hint: 'Makin dekat suatu planet ke Matahari, makin pendek lintasannya dan makin cepat geraknya.',
      solution: 'Makin dekat planet ke Matahari, waktu orbitnya makin singkat. Mengurutkan dari periode tersingkat (88 hari → 225 hari → 365 hari → 12 tahun) menghasilkan urutan jarak terdekat ke terjauh: **P (Merkurius), Q (Venus), R (Bumi), lalu S (Jupiter)**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Bulan milik Bumi dan Titan milik Saturnus tampak bercahaya terang ketika diamati di langit malam, namun keduanya tetap digolongkan sebagai satelit alami dan bukan bintang. Alasan ilmiahnya adalah...',
      options: [
        'satelit alami memancarkan cahaya dingin yang berbeda dari cahaya panas bintang',
        'keduanya tidak memancarkan cahaya sendiri melainkan memantulkan cahaya Matahari dan mengorbit planet',
        'keduanya tersusun atas gas pijar berukuran jauh lebih besar daripada Matahari',
        'keduanya diam di tempat dan tidak mengelilingi planet induknya'
      ],
      answer: 'B',
      hint: 'Bandingkan sumber cahaya bintang dengan cara kita melihat bulan dan satelit planet lain.',
      solution: 'Bulan dan Titan tidak memiliki reaksi fusi penghasil cahaya seperti bintang; keduanya **hanya memantulkan cahaya Matahari** dan bergerak **mengelilingi planet induknya sebagai satelit alami**. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah planet raksasa berada di kelompok planet luar, berwarna biru kehijauan pucat karena gas metana di atmosfernya, tergolong raksasa es, serta memiliki sumbu rotasi yang sangat miring hingga tampak menggelinding di orbitnya. Planet yang dimaksud adalah...',
      options: ['Jupiter', 'Saturnus', 'Neptunus', 'Uranus'],
      answer: 'D',
      hint: 'Planet ketujuh dari Matahari ini terkenal dengan kemiringan sumbu rotasinya yang ekstrem.',
      solution: '**Uranus** adalah planet ketujuh yang tergolong raksasa es, tampak biru kehijauan akibat metana, dan memiliki **kemiringan sumbu rotasi sangat ekstrem** sehingga tampak seperti menggelinding mengelilingi Matahari. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Jika secara khayalan gaya gravitasi Matahari tiba-tiba hilang sama sekali, kejadian yang paling mungkin dialami planet-planet yang sedang bergerak di tata surya adalah...',
      options: [
        'planet-planet akan bergerak lurus terlepas meninggalkan orbitnya ke ruang angkasa',
        'planet-planet langsung berhenti bergerak di tempatnya masing-masing',
        'semua planet segera bergerak mundur membalik arah mengelilingi Bumi',
        'planet luar akan jatuh menabrak Matahari secara bersamaan'
      ],
      answer: 'A',
      hint: 'Ingat dua unsur yang membentuk orbit melengkung: gerak maju planet dan tarikan ke pusat.',
      solution: 'Tanpa gaya tarik gravitasi Matahari yang membelokkan arah geraknya, planet akan mempertahankan gerak majunya dan **bergerak lurus terlepas meninggalkan lintasan orbitnya**. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Setelah melintas sangat dekat dengan Matahari, sebuah komet bergerak menjauhi Matahari menuju bagian luar tata surya. Arah ekor komet pada saat komet bergerak menjauh tersebut adalah...',
      options: [
        'ekor menghilang tepat sebelum komet berbalik arah',
        'ekor tertinggal di belakang kepala komet mengarah langsung ke Matahari',
        'ekor tetap mengarah menjauhi Matahari sehingga berada di depan arah gerak komet',
        'ekor selalu melingkari kepala komet seperti cincin planet Saturnus'
      ],
      answer: 'C',
      hint: 'Penentu arah ekor komet bukanlah arah gerak komet, melainkan dorongan angin surya dari Matahari.',
      solution: 'Angin surya dan radiasi Matahari selalu mendorong gas dan debu komet ke arah luar dari Matahari. Jadi ketika komet sedang bergerak menjauhi Matahari, **ekornya tetap menjauhi Matahari dan mengarah di depan kepala komet**. Jawaban: **C**.'
    })
  ]
});
