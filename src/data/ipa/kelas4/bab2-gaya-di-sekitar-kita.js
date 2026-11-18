import { bab, soal } from '../author.js';

export default bab({
  grade: 4,
  number: 2,
  slug: 'gaya-di-sekitar-kita',
  title: 'Gaya di Sekitar Kita',
  element: 'Pemahaman IPAS (Energi dan Perubahannya): jenis gaya serta pengaruhnya terhadap arah, gerak, dan bentuk benda',
  summary: {
    overview: 'Setiap kali kita mendorong meja, menarik tali timba, mengerem sepeda, atau menjatuhkan bola, kita sedang berhubungan dengan gaya. Bab ini membahas berbagai jenis gaya di sekitar kita—gaya otot, gaya gesek, gaya pegas, gaya magnet, dan gaya gravitasi—serta pengaruh gaya terhadap arah, gerak, dan bentuk benda.',
    coreConcepts: [
      'Pengertian Gaya dan Gaya Otot: Gaya adalah tarikan atau dorongan yang bekerja pada suatu benda. Gaya yang berasal dari tenaga otot manusia atau hewan disebut gaya otot. Contohnya menendang bola, mengangkat tas sekolah, menarik gerobak, dan mengayuh sepeda.',
      'Gaya Gesek dan Cara Mengaturnya: Gaya gesek terjadi ketika dua permukaan benda saling bersentuhan dan arahnya selalu melawan arah gerak benda. Gaya gesek dapat diperbesar agar tidak terpeleset (misalnya alur pada sol sepatu dan ban kendaraan, atau pul pada sepatu bola) dan diperkecil agar benda lebih mudah digerakkan (misalnya memberi oli pada rantai sepeda dan memasang roda pada koper).',
      'Gaya Pegas: Gaya pegas adalah gaya yang dihasilkan oleh benda elastis atau lentur yang ditarik maupun ditekan lalu berusaha kembali ke bentuk asalnya. Contohnya karet ketapel yang ditarik, per pada bolpoin dan kasur pegas, serta busur panah.',
      'Gaya Magnet: Gaya magnet adalah gaya tarik atau tolak dari magnet terhadap benda tertentu tanpa harus bersentuhan langsung. Benda yang ditarik kuat oleh magnet disebut benda magnetis (besi, baja, nikel), sedangkan kayu, plastik, kertas, dan kaca tidak ditarik magnet. Magnet mempunyai kutub utara dan selatan: kutub tidak senama tarik-menarik, sedangkan kutub senama tolak-menolak.',
      'Gaya Gravitasi: Gaya gravitasi bumi adalah gaya tarik bumi yang menyebabkan setiap benda selalu jatuh ke bawah menuju permukaan tanah. Karena gaya gravitasi, buah yang terlepas dari ranting jatuh ke tanah, air mengalir ke tempat yang lebih rendah, dan benda tidak melayang ke udara.',
      'Pengaruh Gaya terhadap Benda: Gaya dapat membuat benda diam menjadi bergerak (bola ditendang), benda bergerak menjadi melambat atau berhenti (sepeda direm), mengubah arah gerak benda (bola dipukul balik saat bermain kasti), dan mengubah bentuk benda (plastisin ditekan atau kaleng diremas). Gaya yang searah saling menambah, sedangkan gaya berlawanan arah saling mengurangi.'
    ],
    keyFormulas: [
      { label: 'Gabungan gaya searah', formula: '\\text{Gaya total} = \\text{Gaya } 1 + \\text{Gaya } 2' },
      { label: 'Selisih gaya berlawanan arah', formula: '\\text{Selisih gaya} = \\text{Gaya lebih besar} - \\text{Gaya lebih kecil}' },
      { label: 'Pengaruh gaya pada benda', formula: '\\text{Tarikan atau Dorongan} \\implies \\text{Ubah gerak, arah, atau bentuk}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung selisih gaya berlawanan arah',
        problem: 'Beni mendorong lemari ke kanan dengan gaya 24 N, sementara permukaan lantai memberikan gaya gesek ke kiri sebesar 8 N. Berapa selisih gaya yang menggerakkan lemari ke kanan?',
        solution: 'Karena kedua gaya berlawanan arah, kita kurangkan gaya yang lebih besar dengan gaya yang lebih kecil:\n$24 - 8 = 16\\ \\text{N}$.\nJadi, selisih gaya yang menggerakkan lemari ke kanan adalah **16 N**.'
      },
      {
        title: 'Menggabungkan dua gaya searah melawan satu gaya lain',
        problem: 'Dalam permainan tarik tambang, tim kanan menarik dengan gaya 14 N dan 16 N, sedangkan tim kiri menarik dengan gaya 22 N. Tim mana yang menang dan berapa selisih gayanya?',
        solution: 'Total gaya tim kanan = $14 + 16 = 30\\ \\text{N}$.\nGaya tim kiri = $22\\ \\text{N}$.\nSelisih gaya = $30 - 22 = 8\\ \\text{N}$ ke kanan.\nJadi, **tim kanan** menang dengan selisih **8 N**.'
      },
      {
        title: 'Mengidentifikasi jenis dan pengaruh gaya',
        problem: 'Seorang kiper menangkap bola yang melaju kencang ke arah gawang menggunakan kedua tangannya. Gaya apa yang digunakan dan apa pengaruhnya terhadap bola?',
        solution: 'Kiper menggunakan **gaya otot** tangannya. Pengaruhnya adalah **menghentikan gerak bola** (dari bergerak menjadi diam).'
      }
    ],
    misconceptions: [
      'Mengira magnet dapat menarik semua benda berbahan logam. Kenyataannya, kaleng aluminium, kawat tembaga, atau perhiasan emas tidak ditarik magnet; magnet menarik kuat benda berbahan besi, baja, atau nikel.',
      'Menganggap gaya gesek selalu merugikan karena menghambat gerak. Tanpa gaya gesek, kita akan terpeleset saat berjalan dan sepeda atau mobil tidak bisa direm.',
      'Mengira gaya hanya bisa menggerakkan benda. Gaya juga dapat menghentikan gerak, membelokkan arah gerak, serta mengubah bentuk benda.'
    ],
    tutorTip: 'Cocokkan ciri kejadiannya: tenaga manusia/hewan = gaya otot; dua permukaan bergesekan = gaya gesek; benda lentur memantul = gaya pegas; kutub utara-selatan = gaya magnet; benda jatuh ke bawah = gaya gravitasi.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Kegiatan berikut yang merupakan contoh pemanfaatan gaya otot adalah...',
      options: [
        'jarum kompas selalu menunjuk arah utara',
        'ayah mendorong gerobak berisi pasir',
        'buah kelapa jatuh dari pohonnya',
        'paku besi menempel pada ujung magnet'
      ],
      answer: 'B',
      hint: 'Gaya otot berasal dari tenaga manusia atau hewan.',
      solution: 'Mendorong gerobak menggunakan tenaga otot tangan dan kaki manusia, sehingga termasuk **gaya otot**. Pilihan A dan D memakai gaya magnet, sedangkan C adalah gaya gravitasi. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Seorang anak menekan dan membentuk adonan plastisin menjadi patung kura-kura. Peristiwa ini membuktikan bahwa gaya dapat...',
      options: [
        'mengubah warna asli benda',
        'membuat benda melayang di udara',
        'menghilangkan massa benda',
        'mengubah bentuk benda'
      ],
      answer: 'D',
      hint: 'Bentuk plastisin sebelum dan sesudah ditekan berbeda.',
      solution: 'Plastisin yang ditekan dengan tangan berubah bentuknya menjadi patung. Hal ini membuktikan bahwa gaya dapat **mengubah bentuk benda**. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Ketapel dapat melontarkan batu kecil ketika karetnya ditarik lalu dilepaskan. Gaya yang bekerja pada karet ketapel disebut...',
      options: ['gaya pegas', 'gaya magnet', 'gaya gravitasi', 'gaya gesek'],
      answer: 'A',
      hint: 'Karet merupakan benda lentur (elastis) yang kembali ke bentuk semula.',
      solution: 'Karet ketapel bersifat lentur; saat ditarik lalu dilepas, ia kembali ke bentuk semula sambil mendorong batu. Gaya ini disebut **gaya pegas**. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Daun kering yang terlepas dari rantingnya selalu jatuh ke permukaan tanah karena adanya...',
      options: [
        'gaya dorong dari dalam tanah',
        'gaya pegas pada batang pohon',
        'gaya gravitasi bumi',
        'gaya magnet pada daun'
      ],
      answer: 'C',
      hint: 'Bumi menarik semua benda di dekatnya ke arah bawah.',
      solution: 'Semua benda yang dilepaskan dari ketinggian jatuh ke tanah karena ditarik oleh **gaya gravitasi bumi**. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Kelompok benda berikut yang semuanya dapat ditarik oleh magnet adalah...',
      options: [
        'penggaris kayu, karet penghapus, dan gelas kaca',
        'paku besi, jarum jahit, dan penjepit kertas besi',
        'sedotan plastik, kertas lipat, dan saputangan kain',
        'pensil kayu, uang plastik, dan daun kering'
      ],
      answer: 'B',
      hint: 'Magnet menarik kuat benda yang terbuat dari besi atau baja.',
      solution: '**Paku besi, jarum jahit, dan penjepit kertas besi** terbuat dari bahan magnetis (besi/baja) sehingga dapat ditarik oleh magnet. Kayu, karet, kaca, plastik, kertas, dan kain tidak ditarik magnet. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah kotak didorong dengan gaya otot ke kanan sebesar 18 N di atas lantai kayu, sementara lantai memberikan gaya gesek ke kiri sebesar 6 N seperti pada gambar. Berapa selisih gaya yang menggerakkan kotak ke kanan?',
      options: ['24 N', '6 N', '12 N', '3 N'],
      answer: 'C',
      hint: 'Gaya dorong dan gaya gesek arahnya berlawanan, sehingga dikurangkan.',
      solution: 'Karena arah gaya dorong (ke kanan) berlawanan dengan gaya gesek (ke kiri), selisih gayanya adalah $18 - 6 = 12\\ \\text{N}$ ke kanan. Jawaban: **C**.',
      visual: {
        type: 'force',
        props: {
          title: 'Gaya Dorong dan Gaya Gesek',
          bodyLabel: 'kotak',
          forces: [
            { dir: 'right', label: 'dorong 18 N' },
            { dir: 'left', label: 'gesek 6 N' }
          ]
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Sol sepatu sepak bola dibuat memiliki pul atau tonjolan di bagian bawahnya. Tujuan utama bentuk sol seperti ini adalah...',
      options: [
        'memperkecil gaya gesek agar pemain mudah tergelincir',
        'mengurangi massa sepatu ketika dibawa berlari',
        'memperbesar gaya gesek agar pemain tidak terpeleset di rumput lapangan',
        'menghilangkan gaya gravitasi saat pemain melompat'
      ],
      answer: 'C',
      hint: 'Permukaan kasar atau bergerigi menambah cengkeraman terhadap tanah.',
      solution: 'Tonjolan pada sol sepatu membuat permukaan bawah menjadi kasar sehingga **memperbesar gaya gesek** dengan rumput dan mencegah pemain terpeleset. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Ayah memasang roda kecil di bagian bawah lemari kayu yang berat sebelum memindahkannya ke sudut kamar. Pemasangan roda memudahkan pemindahan karena...',
      options: [
        'roda menghilangkan gaya gravitasi pada lemari',
        'roda membuat permukaan lantai menjadi lebih kasar',
        'roda mengurangi jumlah barang di dalam lemari',
        'roda memperkecil gaya gesek antara lemari dan lantai'
      ],
      answer: 'D',
      hint: 'Benda yang menggelinding bergesekan jauh lebih kecil daripada benda yang digeser.',
      solution: 'Menggelindingkan lemari beroda menghasilkan **gaya gesek yang jauh lebih kecil** dibandingkan menggeser alas lemari langsung di lantai, sehingga lebih ringan didorong. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Saat bermain bola kasti, bola yang melambung datang ke arah pemukul lalu dipukul menggunakan tongkat kayu sehingga berbalik arah menuju lapangan. Peristiwa ini menunjukkan bahwa gaya dapat...',
      options: [
        'mengubah wujud bola menjadi gas',
        'mengubah arah gerak benda',
        'menghilangkan berat bola',
        'membuat bola tetap diam selamanya'
      ],
      answer: 'B',
      hint: 'Perhatikan perubahan jalur terbang bola sebelum dan sesudah dipukul.',
      solution: 'Pukulan tongkat memberikan gaya pada bola sehingga bola yang semula datang ke pemukul berbalik ke lapangan. Hal ini membuktikan gaya dapat **mengubah arah gerak benda**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Ketika kutub utara sebuah magnet batang didekatkan pada kutub utara magnet batang lainnya, yang akan terjadi adalah kedua magnet...',
      options: [
        'saling tolak-menolak',
        'saling tarik-menarik dengan kuat',
        'menyatu secara permanen',
        'kehilangan semua sifat kemagnetannya'
      ],
      answer: 'A',
      hint: 'Ingat aturan interaksi kutub senama pada magnet.',
      solution: 'Kutub magnet yang **senama** (utara dengan utara, atau selatan dengan selatan) apabila didekatkan akan **saling tolak-menolak**. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dalam permainan tarik tambang pada gambar, Ani menarik peti ke kanan dengan gaya 15 N dan Budi ikut menarik ke kanan dengan gaya 20 N. Sementara itu, Ciko menarik peti ke kiri dengan gaya 25 N. Ke arah mana peti bergerak dan berapa selisih gayanya?',
      options: [
        'ke kanan dengan selisih 10 N',
        'ke kiri dengan selisih 10 N',
        'ke kanan dengan selisih 60 N',
        'peti tetap diam karena gayanya sama besar'
      ],
      answer: 'A',
      hint: 'Jumlahkan dulu gaya Ani dan Budi yang searah ke kanan, lalu kurangkan dengan gaya Ciko ke kiri.',
      solution: 'Total gaya ke kanan = $15 + 20 = 35\\ \\text{N}$.\nGaya ke kiri = $25\\ \\text{N}$.\nKarena $35 > 25$, peti bergerak **ke kanan** dengan selisih $35 - 25 = 10\\ \\text{N}$. Jawaban: **A**.',
      visual: {
        type: 'force',
        props: {
          title: 'Gaya Tarik pada Peti',
          bodyLabel: 'peti',
          forces: [
            { dir: 'right', label: 'Ani 15 N' },
            { dir: 'right', label: 'Budi 20 N' },
            { dir: 'left', label: 'Ciko 25 N' }
          ]
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Rani meluncurkan mobil mainan dari papan miring yang sama tinggi menuju tiga permukaan lintasan: lantai keramik licin, karpet berbulu, dan lintasan berpasir. Mobil mainan melaju paling jauh di lantai keramik karena...',
      options: [
        'lantai keramik menarik mobil dengan gaya magnet',
        'gaya gravitasi di atas karpet menjadi jauh lebih besar',
        'mobil mainan bertambah berat saat melewati pasir',
        'gaya gesek pada lantai keramik paling kecil'
      ],
      answer: 'D',
      hint: 'Permukaan yang paling halus menghambat gerak paling sedikit.',
      solution: 'Permukaan lantai keramik paling halus dan licin sehingga menghasilkan **gaya gesek paling kecil** terhadap roda mobil mainan. Akibatnya mobil dapat meluncur paling jauh. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah karet gelang digantung lalu diberi beban 100 gram sehingga bertambah panjang 2 cm. Jika beban diganti dengan beban yang lebih berat yaitu 300 gram (selama karet tidak putus), perubahan panjang karet yang paling mungkin adalah...',
      options: [
        'berkurang menjadi kurang dari 2 cm',
        'bertambah lebih panjang daripada 2 cm',
        'tetap tepat 2 cm tidak berubah',
        'karet langsung memendek menjadi kaku'
      ],
      answer: 'B',
      hint: 'Semakin besar gaya tarikan pada benda elastis, semakin besar regangannya.',
      solution: 'Beban 300 gram memberikan tarikan lebih besar daripada beban 100 gram, sehingga karet meregang **lebih panjang daripada 2 cm**. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dua lembar kertas yang ukuran dan massanya sama dijatuhkan bersamaan dari ketinggian yang sama: lembar pertama dibiarkan terbuka lebar, sedangkan lembar kedua diremas menjadi gumpalan kecil. Kertas yang diremas menyentuh lantai lebih dahulu karena...',
      options: [
        'massa kertas yang diremas berubah menjadi lebih besar',
        'gaya gravitasi tidak bekerja pada kertas yang terbuka',
        'kertas yang diremas memperoleh gaya magnet dari lantai',
        'hambatan gesekan udara pada kertas terbuka lebih besar sehingga memperlambat jatuhnya'
      ],
      answer: 'D',
      hint: 'Permukaan yang lebar mengenai lebih banyak udara saat jatuh.',
      solution: 'Kertas yang terbuka memiliki permukaan luas sehingga mendapat **gaya gesek (hambatan) udara yang lebih besar** yang menahan jatuhnya. Kertas gumpalan memiliki hambatan udara lebih kecil sehingga jatuh lebih cepat. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah sepeda sedang melaju lurus ke depan di jalan datar. Sebelum berbelok di tikungan jalan, pengendara memutar setang ke kiri sambil menarik tuas rem perlahan. Peristiwa ini menunjukkan bahwa gaya dapat...',
      options: [
        'mengubah arah gerak sekaligus memperlambat gerak benda',
        'mengubah bentuk sepeda menjadi lebih ringan',
        'menghilangkan gaya gravitasi di tikungan jalan',
        'bekerja tanpa sentuhan pada rantai sepeda'
      ],
      answer: 'A',
      hint: 'Memutar setang mengubah arah; menarik rem mengubah kelajuan sepeda.',
      solution: 'Memutar setang **mengubah arah gerak** sepeda ke kiri, sedangkan gaya gesek dari rem **memperlambat gerak** sepeda agar aman saat berbelok. Jawaban: **A**.'
    })
  ]
});
