import { bab, soal } from '../author.js';

export default bab({
  grade: 11,
  number: 1,
  slug: 'hidrokarbon-dan-minyak-bumi',
  title: 'Hidrokarbon, Isomer, dan Minyak Bumi',
  element: 'Pemahaman Kimia: kekhasan atom karbon, alkana, alkena, alkuna, isomeri, fraksi minyak bumi, dan angka oktan',
  summary: {
    overview: 'Senyawa hidrokarbon adalah senyawa karbon paling sederhana yang hanya tersusun atas unsur karbon (C) dan hidrogen (H), namun membentuk keragaman struktur yang luar biasa berkat kekhasan atom karbon. Bab ini membahas jenis atom karbon (primer, sekunder, tersier, kuarterner), tata nama dan sifat deret homolog alkana, alkena, dan alkuna, isomeri struktur dan geometri cis-trans, reaksi khas hidrokarbon, serta pemurnian minyak bumi dan mutu bahan bakar (bilangan oktan).',
    coreConcepts: [
      'Kekhasan Atom Karbon dan Posisi Karbon: Atom karbon bernomor atom 6 memiliki 4 elektron valensi sehingga mampu membentuk 4 ikatan kovalen (tunggal, rangkap dua, atau rangkap tiga) serta berikatan sesama atom karbon membentuk rantai terbuka (lurus atau bercabang) dan tertutup (siklik). Berdasarkan jumlah atom C lain yang diikat secara langsung, atom C dibedakan menjadi C primer (1 C lain), C sekunder (2 C lain), C tersier (3 C lain), dan C kuarterner (4 C lain).',
      'Deret Homolog Alkana, Alkena, dan Alkuna: Alkana adalah hidrokarbon jenuh berikatan tunggal dengan rumus umum $\\text{C}_n\\text{H}_{2n+2}$ dan akhiran -ana. Alkena adalah hidrokarbon tak jenuh dengan satu ikatan rangkap dua ($\\text{C}=\\text{C}$), rumus umum $\\text{C}_n\\text{H}_{2n}$, dan akhiran -ena. Alkuna memiliki satu ikatan rangkap tiga ($\\text{C}\\equiv\\text{C}$), rumus umum $\\text{C}_n\\text{H}_{2n-2}$, dan akhiran -una. Penamaan IUPAC memilih rantai terpanjang (mengandung ikatan rangkap untuk alkena/alkuna) dan penomoran terkecil pada ikatan rangkap atau cabang.',
      'Isomeri Struktur dan Isomeri Geometri: Isomer adalah senyawa dengan rumus molekul sama tetapi struktur atau penataan ruangnya berbeda. Isomer struktur meliputi isomer rangka (perbedaan kerangka rantai utama/cabang), isomer posisi (perbedaan letak ikatan rangkap atau gugus), dan isomer gugus fungsi (misalnya alkena dengan sikloalkana untuk $\\text{C}_n\\text{H}_{2n}$). Alkena menunjukkan isomeri geometri cis–trans apabila setiap atom C berikatan rangkap mengikat dua gugus yang berbeda.',
      'Reaksi Khas Senyawa Hidrokarbon: Alkana yang relatif sukar bereaksi umumnya mengalami reaksi substitusi dengan halogen di bawah sinar UV serta reaksi pembakaran. Alkena dan alkuna lebih reaktif dan mengalami reaksi adisi (pemutusan ikatan rangkap oleh $\\text{H}_2$, $\\text{X}_2$, atau $\\text{HX}$). Pada adisi asam halida ($\\text{HX}$) terhadap alkena asimetris berlaku aturan Markovnikov: atom H terikat pada atom C ikatan rangkap yang mengikat lebih banyak atom H.',
      'Fraksi Minyak Bumi dan Bilangan Oktan: Minyak mentah dipisahkan menjadi fraksi-fraksinya melalui distilasi bertingkat berdasarkan perbedaan titik didih, menghasilkan gas/LPG, eter petroleum, bensin, nafta, kerosin, solar, pelumas, dan residu (aspal). Mutu bensin dinyatakan dengan bilangan oktan berdasarkan kesetaraan ketukan terhadap campuran isooktana ($2{,}2{,}4$-trimetilpentana, oktan $100$) dan n-heptana (oktan $0$). Peningkatan oktan dilakukan melalui perengkahan/reformasi serta penambahan aditif ramah lingkungan seperti MTBE atau etanol.'
    ],
    keyFormulas: [
      { label: 'Rumus umum deret homolog', formula: '\\text{Alkana: } \\text{C}_n\\text{H}_{2n+2} \\quad | \\quad \\text{Alkena: } \\text{C}_n\\text{H}_{2n} \\quad | \\quad \\text{Alkuna: } \\text{C}_n\\text{H}_{2n-2}' },
      { label: 'Pembakaran sempurna hidrokarbon', formula: '\\text{C}_x\\text{H}_y + \\left(x + \\dfrac{y}{4}\\right)\\text{O}_2 \\longrightarrow x\\,\\text{CO}_2 + \\dfrac{y}{2}\\,\\text{H}_2\\text{O}' },
      { label: 'Bilangan oktan campuran standar', formula: '\\text{RON} = \\text{fraksi isooktana} \\times 100 + \\text{fraksi }n\\text{-heptana} \\times 0' }
    ],
    workedExamples: [
      {
        title: 'Menentukan jenis atom karbon dan nama IUPAC',
        problem: 'Tentukan nama IUPAC serta jumlah atom C primer, sekunder, tersier, dan kuarterner pada senyawa $\\text{CH}_3-\\text{C}(\\text{CH}_3)_2-\\text{CH}_2-\\text{CH}(\\text{CH}_3)-\\text{CH}_3$.',
        solution: 'Rantai terpanjang terdiri atas $5$ atom C (pentana). Penomoran dimulai dari kiri agar cabang memiliki nomor terkecil ($2,2,4$ bukan $2,4,4$), sehingga namanya adalah **$2{,}2{,}4$-trimetilpentana** (isooktana). Atom C ujung dan ketiga cabang metil masing-masing mengikat 1 C lain ($5$ C primer); $-\\text{CH}_2-$ di C3 mengikat 2 C lain ($1$ C sekunder); $-\\text{CH}-$ di C4 mengikat 3 C lain ($1$ C tersier); dan atom C2 mengikat 4 C lain ($1$ C kuarterner).'
      },
      {
        title: 'Menentukan hasil adisi Markovnikov pada alkena',
        problem: 'Tuliskan produk utama reaksi adisi antara $2$-metilpropena dengan gas $\\text{HCl}$.',
        solution: 'Struktur $2$-metilpropena adalah $\\text{CH}_2=\\text{C}(\\text{CH}_3)_2$. Atom C1 ($=\\text{CH}_2$) mengikat $2$ atom H, sedangkan atom C2 ($=\\text{C}<$) tidak mengikat atom H. Sesuai aturan Markovnikov, atom H masuk ke C1 dan atom Cl masuk ke C2, menghasilkan produk utama **$2$-kloro-$2$-metilpropana** ($\\text{CH}_3-\\text{CCl}(\\text{CH}_3)-\\text{CH}_3$).'
      },
      {
        title: 'Menentukan rumus molekul hidrokarbon dari data pembakaran',
        problem: 'Pembakaran sempurna $2\\text{ liter}$ gas hidrokarbon $\\text{C}_x\\text{H}_y$ memerlukan $9\\text{ liter}$ gas $\\text{O}_2$ dan menghasilkan $6\\text{ liter}$ gas $\\text{CO}_2$ pada suhu dan tekanan sama. Tentukan rumus molekul hidrokarbon tersebut.',
        solution: 'Perbandingan volume gas sebanding dengan koefisien reaksi: $\\text{C}_x\\text{H}_y : \\text{O}_2 : \\text{CO}_2 = 2 : 9 : 6 = 1 : 4{,}5 : 3$. Maka $x = 3$ dan $x + \\frac{y}{4} = 4{,}5 \\implies 3 + \\frac{y}{4} = 4{,}5 \\implies y = 6$. Rumus molekulnya adalah **$\\text{C}_3\\text{H}_6$** (propena atau siklopropana).'
      }
    ],
    misconceptions: [
      'Memilih rantai lurus horizontal sebagai rantai utama tanpa memeriksa belokan ke gugus etil atau propil yang ternyata menghasilkan rantai karbon lebih panjang.',
      'Menyamakan syarat isomer cis–trans hanya dengan adanya ikatan rangkap $\\text{C}=\\text{C}$, padahal $1$-alkena dengan gugus $=\\text{CH}_2$ pada ujungnya tidak memiliki isomer cis–trans karena mengikat dua atom H identik.',
      'Menganggap bilangan oktan $92$ berarti bensin benar-benar mengandung $92\\%$ senyawa isooktana murni, padahal bilangan oktan hanyalah nilai acuan sifat anti-ketukan yang setara dengan campuran $92\\%$ isooktana dan $8\\%$ n-heptana.'
    ],
    tutorTip: 'Saat memberi nama hidrokarbon bercabang, selalu telusuri semua kemungkinan ujung rantai terlebih dahulu sebelum menomori. Untuk memeriksa apakah suatu alkena punya isomer cis–trans, tutup satu per satu atom C ikatan rangkap: jika salah satu ujung mengikat dua gugus kembar (seperti $=\\text{CH}_2$), langsung eliminasi karena tidak punya isomer geometri.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Kemampuan atom karbon membentuk rantai panjang, bercabang, dan siklik yang sangat beragam terutama disebabkan oleh sifat khas karbon, yaitu...',
      options: [
        'memiliki jari-jari atom yang besar dan sifat logam kuat',
        'memiliki $4$ elektron valensi yang dapat membentuk $4$ ikatan kovalen stabil',
        'mudah melepaskan seluruh elektronnya membentuk ion $\\text{C}^{4+}$',
        'hanya mampu membentuk ikatan ionik dengan atom hidrogen'
      ],
      answer: 'B',
      hint: 'Ingat konfigurasi elektron karbon ($Z = 6$) dan jenis ikatan yang dibentuk antarsesama unsur nonlogam.',
      solution: 'Atom karbon ($Z = 6$) memiliki konfigurasi elektron $2\\ 4$, sehingga mempunyai $4$ elektron valensi untuk membentuk $4$ ikatan kovalen yang kuat dengan sesama atom karbon maupun atom lain, serta ukurannya relatif kecil sehingga ikatan $\\text{C}-\\text{C}$ stabil. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Perhatikan struktur senyawa hidrokarbon $\\text{CH}_3-\\text{C}(\\text{CH}_3)_2-\\text{CH}_2-\\text{CH}(\\text{CH}_3)-\\text{CH}_3$. Jumlah atom karbon primer, sekunder, tersier, dan kuarterner secara berurutan pada senyawa tersebut adalah...',
      options: [
        '$4$ primer, $2$ sekunder, $1$ tersier, dan $1$ kuarterner',
        '$5$ primer, $2$ sekunder, $0$ tersier, dan $1$ kuarterner',
        '$5$ primer, $1$ sekunder, $1$ tersier, dan $1$ kuarterner',
        '$6$ primer, $1$ sekunder, $1$ tersier, dan $0$ kuarterner'
      ],
      answer: 'C',
      hint: 'Hitung jumlah atom C lain yang terikat langsung pada tiap atom C; gugus $-\\text{CH}_3$ selalu tergolong C primer.',
      solution: 'Senyawa memiliki $8$ atom C: lima gugus $-\\text{CH}_3$ (ujung kiri, dua cabang di C2, satu cabang di C4, dan ujung kanan) masing-masing mengikat 1 atom C lain ($5$ C primer); satu gugus $-\\text{CH}_2-$ di C3 mengikat 2 atom C lain ($1$ C sekunder); satu gugus $-\\text{CH}-$ di C4 mengikat 3 atom C lain ($1$ C tersier); dan atom C2 mengikat 4 atom C lain ($1$ C kuarterner). Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Di antara rumus molekul berikut, yang merupakan anggota deret homolog alkuna adalah...',
      options: [
        '$\\text{C}_4\\text{H}_6$',
        '$\\text{C}_4\\text{H}_8$',
        '$\\text{C}_4\\text{H}_{10}$',
        '$\\text{C}_5\\text{H}_{12}$'
      ],
      answer: 'A',
      hint: 'Deret homolog alkuna memenuhi rumus umum $\\text{C}_n\\text{H}_{2n-2}$.',
      solution: 'Dengan rumus umum alkuna $\\text{C}_n\\text{H}_{2n-2}$, untuk $n = 4$ diperoleh $\\text{C}_4\\text{H}_{2(4)-2} = \\text{C}_4\\text{H}_6$. Adapun $\\text{C}_4\\text{H}_8$ memenuhi $\\text{C}_n\\text{H}_{2n}$ (alkena/sikloalkana), sedangkan $\\text{C}_4\\text{H}_{10}$ dan $\\text{C}_5\\text{H}_{12}$ memenuhi $\\text{C}_n\\text{H}_{2n+2}$ (alkana). Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pemisahan minyak bumi mentah menjadi fraksi-fraksi seperti gas, bensin, kerosin, dan solar di kilang minyak menggunakan prinsip distilasi bertingkat yang didasarkan pada perbedaan...',
      options: [
        'massa jenis dan warna cairan',
        'kelarutan hidrokarbon dalam air',
        'kadar belerang tiap fraksi',
        'titik didih komponen hidrokarbon'
      ],
      answer: 'D',
      hint: 'Semakin panjang rantai karbon hidrokarbon, semakin kuat gaya antar-molekul London dan semakin tinggi suhunya untuk menguap.',
      solution: 'Distilasi bertingkat memisahkan campuran hidrokarbon berdasarkan perbedaan **titik didih** akibat variasi panjang rantai karbon. Fraksi berantai pendek bertitik didih rendah menguap dan mengembun di bagian atas menara, sedangkan fraksi berantai panjang keluar di bagian bawah. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Suatu bahan bakar bensin memiliki nilai oktan (RON) $92$. Pernyataan yang tepat mengenai arti angka oktan tersebut adalah...',
      options: [
        'bensin mengandung tepat $92\\%$ gas metana dan $8\\%$ solar',
        'mutu anti-ketukannya setara campuran $92\\%$ isooktana dan $8\\%$ $n$-heptana',
        'bensin tersebut dapat membebaskan $92\\%$ energi panas tanpa menghasilkan $\\text{CO}_2$',
        'mutu anti-ketukannya setara campuran $92\\%$ $n$-heptana dan $8\\%$ isooktana'
      ],
      answer: 'B',
      hint: 'Isooktana diberi indeks oktan $100$ karena ketahanannya terhadap ketukan (knocking), sedangkan $n$-heptana diberi indeks $0$.',
      solution: 'Bilangan oktan $92$ berarti ketahanan bensin terhadap pembakaran dini (knocking) setara dengan campuran acuan **$92\\%$ volume isooktana** ($2{,}2{,}4$-trimetilpentana, oktan $100$) dan **$8\\%$ volume $n$-heptana** (oktan $0$). Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Nama IUPAC yang tepat untuk senyawa alkana dengan struktur $\\text{CH}_3-\\text{CH}_2-\\text{CH}(\\text{CH}_3)-\\text{CH}(\\text{C}_2\\text{H}_5)-\\text{CH}_2-\\text{CH}_3$ adalah...',
      options: [
        '$3$-metil-$4$-etilheksana',
        '$2{,}3$-dietilpentana',
        '$3$-etil-$4$-metilheksana',
        '$4$-etil-$3$-metilheksana'
      ],
      answer: 'C',
      hint: 'Jika penomoran dari kedua ujung memberikan himpunan nomor cabang yang sama, utamakan cabang yang lebih dahulu menurut urutan abjad.',
      solution: 'Rantai terpanjang terdiri atas $6$ atom C (heksana). Penomoran dari kiri maupun dari kanan sama-sama menempatkan cabang pada posisi $3$ dan $4$. Karena abjad **e**til mendahului **m**etil, penomoran dilakukan dari kanan sehingga etil di C3 dan metil di C4: **$3$-etil-$4$-metilheksana**. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Nama IUPAC yang benar untuk senyawa alkena $\\text{CH}_3-\\text{CH}=\\text{C}(\\text{CH}_3)-\\text{CH}_2-\\text{CH}_3$ adalah...',
      options: [
        '$3$-metil-$2$-pentena',
        '$3$-metil-$3$-pentena',
        '$2$-etil-$2$-butena',
        '$2$-metil-$3$-pentena'
      ],
      answer: 'A',
      hint: 'Pilih rantai terpanjang yang memuat ikatan rangkap dua, lalu beri nomor dari ujung terdekat dengan ikatan rangkap tersebut.',
      solution: 'Rantai utama terpanjang yang mengandung ikatan rangkap terdiri atas $5$ atom C (pentena). Penomoran dimulai dari ujung kiri agar ikatan rangkap berada pada C2–C3 ($2$-pentena), bukan dari kanan (C3–C4). Cabang metil terikat di C3, sehingga namanya **$3$-metil-$2$-pentena**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Di antara senyawa alkena berikut ini, yang memiliki isomer geometri *cis*–*trans* adalah...',
      options: [
        '$1$-butena',
        '$2$-metilpropena',
        '$2$-metil-$2$-butena',
        '$2$-pentena'
      ],
      answer: 'D',
      hint: 'Syarat isomer cis–trans pada alkena adalah kedua atom C ikatan rangkap masing-masing mengikat dua gugus yang berbeda.',
      solution: 'Pada $2$-pentena ($\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_2\\text{CH}_3$), C2 mengikat $-\\text{H}$ dan $-\\text{CH}_3$ (berbeda) serta C3 mengikat $-\\text{H}$ dan $-\\text{C}_2\\text{H}_5$ (berbeda), sehingga memiliki bentuk *cis* dan *trans*. Pada ketiga senyawa lain, minimal satu atom C rangkap mengikat dua gugus identik (dua $-\\text{H}$ atau dua $-\\text{CH}_3$). Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Reaksi antara propena ($\\text{CH}_3-\\text{CH}=\\text{CH}_2$) dan asam bromida ($\\text{HBr}$) menghasilkan produk utama berupa...',
      options: [
        '$1$-bromopropana',
        '$2$-bromopropana',
        '$1{,}2$-dibromopropana',
        'propana'
      ],
      answer: 'B',
      hint: 'Terapkan aturan Markovnikov saat mengadisi $\\text{HBr}$ ke ikatan rangkap asimetris.',
      solution: 'Pada $\\text{CH}_3-\\text{CH}=\\text{CH}_2$, atom C ujung ($=\\text{CH}_2$) mengikat $2$ atom H sedangkan C tengah ($-\\text{CH}=$) hanya mengikat $1$ atom H. Menurut aturan Markovnikov, atom H masuk ke C ujung dan atom Br masuk ke C tengah membentuk $\\text{CH}_3-\\text{CHBr}-\\text{CH}_3$ (**$2$-bromopropana**). Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Urutan fraksi minyak bumi dari yang memiliki titik didih paling rendah hingga paling tinggi adalah...',
      options: [
        'kerosin — bensin — gas (LPG) — solar',
        'bensin — gas (LPG) — solar — kerosin',
        'gas (LPG) — bensin — kerosin — solar',
        'solar — kerosin — bensin — gas (LPG)'
      ],
      answer: 'C',
      hint: 'Titik didih fraksi minyak bumi meningkat seiring bertambahnya jumlah atom karbon penyusun rantai.',
      solution: 'Jumlah atom karbon tiap fraksi meningkat berturut-turut: gas/LPG ($\\text{C}_1$–$\\text{C}_4$), bensin ($\\text{C}_5$–$\\text{C}_{10}$), kerosin ($\\text{C}_{11}$–$\\text{C}_{14}$), dan solar ($\\text{C}_{15}$–$\\text{C}_{18}$). Pertambahan massa molekul relatif membuat titik didih meningkat sesuai urutan **gas (LPG) — bensin — kerosin — solar**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Banyaknya isomer struktur (tidak termasuk isomer geometri *cis*–*trans*) yang tergolong senyawa alkena rantai terbuka dengan rumus molekul $\\text{C}_5\\text{H}_{10}$ adalah...',
      options: [
        '$5$ isomer',
        '$6$ isomer',
        '$4$ isomer',
        '$7$ isomer'
      ],
      answer: 'A',
      hint: 'Daftarkan posisi ikatan rangkap pada kerangka rantai utama $5$ atom C (pentena), lalu pada kerangka $4$ atom C bercabang satu metil (metilbutena).',
      solution: 'Isomer struktur alkena rantai terbuka $\\text{C}_5\\text{H}_{10}$ meliputi: (1) $1$-pentena, (2) $2$-pentena, (3) $2$-metil-$1$-butena, (4) $3$-metil-$1$-butena, dan (5) $2$-metil-$2$-butena. Kerangka propana bercabang dua metil dengan ikatan rangkap tidak mungkin terbentuk karena C tengah melebihi valensi $4$. Jadi terdapat **$5$ isomer struktur** alkena rantai terbuka. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pembakaran sempurna $4\\text{ liter}$ suatu gas hidrokarbon $\\text{C}_x\\text{H}_y$ pada suhu dan tekanan tertentu memerlukan tepat $26\\text{ liter}$ gas $\\text{O}_2$ dan menghasilkan $16\\text{ liter}$ gas $\\text{CO}_2$. Rumus molekul hidrokarbon dan deret homolognya berturut-turut adalah...',
      options: [
        '$\\text{C}_4\\text{H}_8$ dan alkena',
        '$\\text{C}_4\\text{H}_6$ dan alkuna',
        '$\\text{C}_3\\text{H}_8$ dan alkana',
        '$\\text{C}_4\\text{H}_{10}$ dan alkana'
      ],
      answer: 'D',
      hint: 'Sederhanakan perbandingan volume $\\text{C}_x\\text{H}_y : \\text{O}_2 : \\text{CO}_2$ untuk menentukan $x$, lalu setarakan atom O pada reaksi pembakaran.',
      solution: 'Perbandingan volume pada $(T, P)$ sama adalah $4 : 26 : 16 = 1 : 6{,}5 : 4$. Reaksi setaranya: $\\text{C}_x\\text{H}_y + (x + \\frac{y}{4})\\text{O}_2 \\longrightarrow x\\,\\text{CO}_2 + \\frac{y}{2}\\,\\text{H}_2\\text{O}$. Dari koefisien $\\text{CO}_2$ diperoleh $x = 4$. Dari koefisien $\\text{O}_2$ diperoleh $4 + \\frac{y}{4} = 6{,}5 \\implies \\frac{y}{4} = 2{,}5 \\implies y = 10$. Senyawanya adalah **$\\text{C}_4\\text{H}_{10}$** yang memenuhi $\\text{C}_n\\text{H}_{2n+2}$ (**alkana**). Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak $5{,}6\\text{ gram}$ suatu senyawa alkena tepat menghilangkan warna merah cokelat dari $16\\text{ gram}$ larutan bromin ($\\text{Br}_2$, $M_r = 160$) melalui reaksi adisi sempurna. Jika $A_r\\ \\text{C} = 12$ dan $\\text{H} = 1$, rumus molekul alkena tersebut adalah...',
      options: [
        '$\\text{C}_2\\text{H}_4$',
        '$\\text{C}_3\\text{H}_6$',
        '$\\text{C}_4\\text{H}_8$',
        '$\\text{C}_5\\text{H}_{10}$'
      ],
      answer: 'C',
      hint: 'Satu mol alkena bermono-ikatan rangkap tepat bereaksi dengan $1\\text{ mol}$ $\\text{Br}_2$ membentuk dibromoalkana.',
      solution: 'Mol $\\text{Br}_2 = \\frac{16}{160} = 0{,}1\\text{ mol}$. Persamaan adisi alkena $\\text{C}_n\\text{H}_{2n} + \\text{Br}_2 \\longrightarrow \\text{C}_n\\text{H}_{2n}\\text{Br}_2$ menunjukkan $n_{\\text{alkena}} = n_{\\text{Br}_2} = 0{,}1\\text{ mol}$. Massa molar alkena $M_r = \\frac{5{,}6\\text{ g}}{0{,}1\\text{ mol}} = 56$. Karena $M_r\\ \\text{C}_n\\text{H}_{2n} = 14n = 56$, didapat $n = 4$, sehingga rumus molekulnya **$\\text{C}_4\\text{H}_8$**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu campuran gas metana ($\\text{CH}_4$) dan etena ($\\text{C}_2\\text{H}_4$) yang bervolume total $10\\text{ liter}$ dibakar sempurna dengan oksigen berlebih pada suhu dan tekanan sama sehingga menghasilkan $14\\text{ liter}$ gas $\\text{CO}_2$. Persentase volume gas metana dalam campuran awal adalah...',
      options: [
        '$60\\%$',
        '$40\\%$',
        '$50\\%$',
        '$70\\%$'
      ],
      answer: 'A',
      hint: 'Misalkan volume $\\text{CH}_4 = x\\text{ liter}$ dan volume $\\text{C}_2\\text{H}_4 = (10 - x)\\text{ liter}$, lalu hitung total volume $\\text{CO}_2$ dari koefisien atom C.',
      solution: 'Setiap $1\\text{ L}$ $\\text{CH}_4$ menghasilkan $1\\text{ L}$ $\\text{CO}_2$, sedangkan setiap $1\\text{ L}$ $\\text{C}_2\\text{H}_4$ menghasilkan $2\\text{ L}$ $\\text{CO}_2$. Jika $V_{\\text{CH}_4} = x$ dan $V_{\\text{C}_2\\text{H}_4} = 10 - x$, maka $x + 2(10 - x) = 14 \\implies 20 - x = 14 \\implies x = 6\\text{ L}$. Persentase volume $\\text{CH}_4 = \\frac{6}{10} \\times 100\\% = 60\\%$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Penggunaan zat aditif tetraetil timbal atau TEL ($\\text{Pb}(\\text{C}_2\\text{H}_5)_4$) sebagai peningkat angka oktan bensin telah dilarang dan diganti dengan etanol atau MTBE serta proses reformasi katalitik hidrokarbon rantai lurus menjadi rantai bercabang. Alasan kimia dan lingkungan paling tepat yang mendasari kebijakan tersebut adalah...',
      options: [
        'TEL menurunkan nilai kalor pembakaran bensin menjadi nol dan memicu reaksi endoterm',
        'etanol dan hidrokarbon bercabang memiliki rantai karbon lebih panjang sehingga menaikkan titik didih bensin',
        'TEL meningkatkan emisi gas $\\text{O}_2$ berlebih yang mempercepat korosi knalpot mesin',
        'pembakaran TEL melepaskan partikulat timbal beracun ke udara serta berisiko meracuni konverter katalitik, sedangkan hidrokarbon bercabang dan oksigenat menaikkan angka oktan tanpa pencemaran logam berat'
      ],
      answer: 'D',
      hint: 'Bandingkan dampak residu logam berat Pb terhadap kesehatan dan lingkungan dengan mekanisme kerja oksigenat serta hidrokarbon bercabang.',
      solution: 'TEL mengandung logam berat timbal (Pb) yang saat dibakar menghasilkan partikulat timbal toksik (bersifat neurotoksik di udara) dan merusak katalis pada konverter katalitik. Sebagai pengganti, struktur hidrokarbon bercabang dan senyawa oksigenat (MTBE/etanol) terbakar lebih terkendali sehingga meningkatkan ketahanan ketukan (angka oktan) tanpa emisi logam berat. Jawaban: **D**.'
    })
  ]
});
