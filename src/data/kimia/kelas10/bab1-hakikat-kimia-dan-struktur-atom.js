import { bab, soal } from '../author.js';

export default bab({
  grade: 10,
  number: 1,
  slug: 'hakikat-kimia-dan-struktur-atom',
  title: 'Hakikat Kimia dan Struktur Atom',
  element: 'Pemahaman Kimia: metode ilmiah, model atom, konfigurasi elektron, dan bilangan kuantum',
  summary: {
    overview: 'Ilmu kimia mempelajari susunan, struktur, sifat, dan perubahan materi beserta energi yang menyertainya melalui metode ilmiah yang sistematis dan kerja laboratorium yang aman. Bab ini membahas hakikat kimia dan keselamatan kerja, evolusi model atom dari Dalton hingga mekanika kuantum, partikel dasar penyusun atom, penulisan konfigurasi elektron atom netral maupun ion, serta penentuan keempat bilangan kuantum elektron.',
    coreConcepts: [
      'Hakikat Kimia dan Metode Ilmiah: Kimia menjembatani fenomena makroskopik yang teramati dengan tingkat submikroskopik (atom, ion, molekul) dan representasi simbolik. Penyelidikan ilmiah menggunakan metode ilmiah yang mengendalikan variabel bebas (diubah peneliti), variabel terikat (diukur sebagai respons), dan variabel kontrol (dijaga tetap), disertai prosedur keselamatan kerja laboratorium seperti menuangkan asam pekat perlahan ke dalam air.',
      'Perkembangan Model Atom: Dalton menggambarkan atom sebagai bola pejal tak terbagi; Thomson menemukan elektron (model roti kismis); Rutherford melalui hamburan sinar alfa membuktikan atom memiliki inti bermuatan positif kecil di tengah ruang hampa; Bohr menjelaskan elektron beredar pada lintasan stasioner berenergi tertentu; dan model Mekanika Kuantum menyatakan elektron berada dalam orbital sebagai daerah kebolehjadian terbesar ditemukannya elektron.',
      'Partikel Dasar dan Notasi Nuklida: Atom tersusun atas proton ($p^+$), neutron ($n^0$) di inti, serta elektron ($e^-$) di sekitar inti. Notasi nuklida $^A_Z\\text{X}$ menunjukkan nomor atom $Z = \\text{jumlah proton}$ dan nomor massa $A = Z + \\text{jumlah neutron}$. Dua atom dengan $Z$ sama disebut isotop, $A$ sama disebut isobar, jumlah neutron sama disebut isoton, dan jumlah elektron sama disebut isoelektron.',
      'Konfigurasi Elektron Atom dan Ion: Pengisian elektron mengikuti asas Aufbau (urutan energi $1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p \\dots$), larangan Pauli, dan kaidah Hund (mengisi orbital setingkat secara tunggal dengan spin sejajar sebelum berpasangan). Untuk kestabilan subkulit setengah penuh atau penuh, $_{24}\\text{Cr}$ berkonfigurasi $[\\text{Ar}]\\,3d^5\\,4s^1$ dan $_{29}\\text{Cu}$ berkonfigurasi $[\\text{Ar}]\\,3d^{10}\\,4s^1$. Kation terbentuk dengan melepas elektron dari kulit terluar ($n$ terbesar) lebih dahulu.',
      'Bilangan Kuantum Elektron: Keadaan suatu elektron ditentukan oleh bilangan kuantum utama $n$ ($1, 2, 3, \\dots$ menyatakan kulit), azimut $l$ ($0 \\le l \\le n - 1$ untuk subkulit $s=0, p=1, d=2, f=3$), magnetik $m$ ($-l \\le m \\le +l$ menyatakan orientasi orbital), dan spin $s$ ($+\\frac{1}{2}$ atau $-\\frac{1}{2}$). Sesuai konvensi pengisian kiri ke kanan, elektron berputar tunggal mulai dari $m = -l$ hingga $+l$ ($s = +\\frac{1}{2}$) lalu berpasangan dari $m = -l$ ($s = -\\frac{1}{2}$).'
    ],
    keyFormulas: [
      { label: 'Partikel dasar nuklida netral & ion', formula: 'Z = p \\qquad n = A - Z \\qquad e = Z - \\text{muatan}' },
      { label: 'Massa atom relatif rata-rata', formula: 'A_r = \\sum (f_i \\times m_i) = \\dfrac{\\%_1 \\cdot m_1 + \\%_2 \\cdot m_2}{100\\%}' },
      { label: 'Batas nilai bilangan kuantum', formula: 'n \\ge 1, \\quad 0 \\le l \\le n - 1, \\quad -l \\le m \\le +l, \\quad s = \\pm\\tfrac{1}{2}' },
      { label: 'Kapasitas elektron kulit & subkulit', formula: 'N_{\\text{kulit}} = 2n^2 \\qquad N_{\\text{subkulit}} = 2(2l + 1)' }
    ],
    workedExamples: [
      {
        title: 'Menentukan partikel dasar pada ion',
        problem: 'Tentukan jumlah proton, elektron, dan neutron pada ion besi(III) dengan notasi $^{56}_{26}\\text{Fe}^{3+}$.',
        solution: 'Dari notasi $^{56}_{26}\\text{Fe}^{3+}$, nomor atom $Z = 26$ sehingga jumlah proton $p = 26$. Jumlah neutron $n = A - Z = 56 - 26 = 30$. Karena bermuatan $+3$, atom melepas $3$ elektron sehingga $e = 26 - 3 = 23$. Jadi terdapat $26$ proton, $23$ elektron, dan $30$ neutron.'
      },
      {
        title: 'Konfigurasi elektron dan bilangan kuantum elektron terakhir',
        problem: 'Tentukan konfigurasi elektron atom $_{15}\\text{P}$ beserta keempat bilangan kuantum elektron terakhirnya.',
        solution: 'Konfigurasi elektron $_{15}\\text{P}$ adalah $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^3$. Elektron terakhir berada pada subkulit $3p^3$, sehingga $n = 3$ dan $l = 1$. Pada tiga orbital $p$ ($m = -1, 0, +1$), ketiga elektron mengisi satu per satu dengan spin sejajar, sehingga elektron ketiga menempati $m = +1$ dengan $s = +\\frac{1}{2}$.'
      },
      {
        title: 'Konfigurasi ion logam transisi dan elektron tak berpasangan',
        problem: 'Tentukan konfigurasi elektron ion $_{25}\\text{Mn}^{2+}$ dan banyaknya elektron tidak berpasangan.',
        solution: 'Atom netral $_{25}\\text{Mn}$ memiliki konfigurasi $[\\text{Ar}]\\,3d^5\\,4s^2$. Saat membentuk ion $\\text{Mn}^{2+}$, dua elektron dilepas dari kulit terluar $4s$, menghasilkan konfigurasi $[\\text{Ar}]\\,3d^5$. Kelima orbital $3d$ masing-masing terisi $1$ elektron, sehingga terdapat $5$ elektron tidak berpasangan.'
      }
    ],
    misconceptions: [
      'Melepas elektron dari subkulit $3d$ terlebih dahulu saat membentuk kation logam transisi; seharusnya elektron selalu dilepas dari kulit dengan bilangan kuantum utama $n$ terbesar ($4s$) sebelum $3d$.',
      'Menuliskan konfigurasi atom $_{24}\\text{Cr}$ sebagai $[\\text{Ar}]\\,3d^4\\,4s^2$ dan $_{29}\\text{Cu}$ sebagai $[\\text{Ar}]\\,3d^9\\,4s^2$, padahal susunan setengah penuh ($3d^5\\,4s^1$) dan penuh ($3d^{10}\\,4s^1$) lebih stabil.',
      'Menyamakan isoton dengan isobar; isobar memiliki nomor massa $A$ sama, sedangkan isoton memiliki jumlah neutron ($A - Z$) yang sama.',
      'Menganggap bilangan kuantum azimut $l$ boleh bernilai sama dengan $n$; nilai maksimum $l$ selalu $n - 1$.'
    ],
    tutorTip: 'Untuk menentukan konfigurasi elektron ion transisi dengan cepat, tuliskan dulu konfigurasi atom netralnya sampai $4s^2\\,3d^x$, baru coret elektron pada $4s$ terlebih dahulu sesuai muatan kation sebelum mengurangi elektron di $3d$.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Seorang siswa melakukan percobaan untuk menyelidiki pengaruh suhu air terhadap massa maksimum garam dapur ($\\text{NaCl}$) yang dapat larut dalam $100\\text{ mL}$ air. Variabel terikat dalam penyelidikan tersebut adalah...',
      options: [
        'suhu air pelarut yang divariasikan',
        'massa maksimum $\\text{NaCl}$ yang dapat larut',
        'volume air yang dijaga tetap $100\\text{ mL}$',
        'jenis pengaduk dan gelas kimia yang digunakan'
      ],
      answer: 'B',
      hint: 'Variabel terikat adalah besaran yang diukur sebagai akibat perubahan variabel bebas.',
      solution: 'Suhu air adalah variabel bebas karena sengaja diubah-ubah, volume air ($100\\text{ mL}$) serta alat adalah variabel kontrol karena dijaga tetap, sedangkan massa maksimum $\\text{NaCl}$ yang larut merupakan hasil yang diukur (variabel terikat). Jawaban: **B**'
    }),
    soal({
      level: 'Dasar',
      q: 'Hasil percobaan hamburan sinar alfa pada lempeng emas tipis oleh Ernest Rutherford menunjukkan bahwa sebagian besar partikel alfa diteruskan dan hanya sebagian kecil yang dipantulkan kembali. Kesimpulan utama dari percobaan ini adalah...',
      options: [
        'sebagian besar volume atom berupa ruang hampa dengan inti bermuatan positif yang sangat kecil dan padat',
        'elektron tersebar merata di seluruh bagian bola atom yang bermuatan positif seperti roti kismis',
        'elektron mengelilingi inti pada lintasan lingkaran stasioner tanpa memancarkan energi',
        'atom merupakan partikel terkecil yang pejal dan tidak dapat dibagi lagi menjadi partikel lain'
      ],
      answer: 'A',
      hint: 'Partikel alfa bermuatan positif; sebagian besar lolos karena ruang kosong, dan sebagian kecil terpantul ketika menumbuk pusat bermuatan positif.',
      solution: 'Sebagian besar partikel alfa menembus lurus menandakan atom didominasi ruang hampa, sedangkan pantulan kecil menunjukkan adanya inti atom yang sangat kecil, padat, dan bermuatan positif di pusat atom. Jawaban: **A**'
    }),
    soal({
      level: 'Dasar',
      q: 'Ion besi(III) memiliki notasi nuklida $^{56}_{26}\\text{Fe}^{3+}$. Jumlah proton, elektron, dan neutron yang terdapat dalam ion tersebut berturut-turut adalah...',
      options: [
        '26, 26, dan 30',
        '26, 29, dan 30',
        '26, 23, dan 30',
        '30, 23, dan 26'
      ],
      answer: 'C',
      hint: 'Nomor atom menunjukkan jumlah proton; muatan $+3$ berarti atom telah melepas $3$ elektron.',
      solution: 'Nomor atom $Z = 26$ sehingga jumlah proton $p = 26$. Jumlah neutron $n = A - Z = 56 - 26 = 30$. Karena bermuatan $+3$, jumlah elektron $e = 26 - 3 = 23$. Jadi komposisinya adalah $26$, $23$, dan $30$. Jawaban: **C**'
    }),
    soal({
      level: 'Dasar',
      q: 'Pasangan nuklida berikut ini yang merupakan pasangan isoton adalah...',
      options: [
        '$^{12}_{6}\\text{C}$ dan $^{14}_{6}\\text{C}$',
        '$^{14}_{6}\\text{C}$ dan $^{14}_{7}\\text{N}$',
        '$^{23}_{11}\\text{Na}$ dan $^{27}_{13}\\text{Al}$',
        '$^{31}_{15}\\text{P}$ dan $^{32}_{16}\\text{S}$'
      ],
      answer: 'D',
      hint: 'Isoton adalah atom-atom berbeda yang memiliki jumlah neutron ($A - Z$) sama.',
      solution: 'Pada $^{31}_{15}\\text{P}$ jumlah neutronnya $31 - 15 = 16$, dan pada $^{32}_{16}\\text{S}$ jumlah neutronnya $32 - 16 = 16$. Pilihan A merupakan isotop ($Z$ sama), B merupakan isobar ($A$ sama), sedangkan C memiliki neutron $12$ dan $14$. Jawaban: **D**'
    }),
    soal({
      level: 'Dasar',
      q: 'Berdasarkan model atom Bohr, susunan konfigurasi elektron tiap kulit untuk atom kalium ($_{19}\\text{K}$) pada keadaan dasar adalah...',
      options: [
        '2, 8, 8, 1',
        '2, 8, 9',
        '2, 8, 7, 2',
        '2, 9, 8'
      ],
      answer: 'A',
      hint: 'Setelah kulit $L$ terisi $8$, kulit $M$ diisi $8$ terlebih dahulu sebelum sisa elektron masuk ke kulit $N$.',
      solution: 'Kulit $K$ ($n=1$) maksimum berisi $2$ elektron, kulit $L$ ($n=2$) berisi $8$ elektron. Sisa $9$ elektron tidak boleh langsung memenuhi kulit $M$, melainkan kulit $M$ diisi $8$ elektron dan $1$ elektron sisanya masuk ke kulit $N$, menghasilkan $2, 8, 8, 1$. Jawaban: **A**'
    }),
    soal({
      level: 'Sedang',
      q: 'Konfigurasi elektron keadaan dasar yang paling tepat untuk atom kromium ($_{24}\\text{Cr}$) adalah...',
      options: [
        '$[\\text{Ar}]\\,3d^4\\,4s^2$',
        '$[\\text{Ar}]\\,3d^6$',
        '$[\\text{Ar}]\\,3d^5\\,4s^1$',
        '$[\\text{Ar}]\\,3d^3\\,4s^2\\,4p^1$'
      ],
      answer: 'C',
      hint: 'Subkulit $3d$ yang terisi tepat setengah penuh ($3d^5$) memberikan kestabilan energi lebih tinggi.',
      solution: 'Nomor atom $_{24}\\text{Cr}$ memiliki $18$ elektron pada $[\\text{Ar}]$ ditambah $6$ elektron valensi. Agar lebih stabil dengan subkulit $d$ setengah penuh dan $s$ setengah penuh, satu elektron dari $4s$ berpindah ke $3d$ sehingga konfigurasinya menjadi $[\\text{Ar}]\\,3d^5\\,4s^1$. Jawaban: **C**'
    }),
    soal({
      level: 'Sedang',
      q: 'Jumlah elektron tidak berpasangan yang terdapat dalam ion besi(II), $_{26}\\text{Fe}^{2+}$, pada keadaan dasar adalah...',
      options: [
        '2',
        '4',
        '5',
        '6'
      ],
      answer: 'B',
      hint: 'Tuliskan konfigurasi $_{26}\\text{Fe}$, lalu lepaskan $2$ elektron dari subkulit terluar ($4s$) sebelum menerapkan kaidah Hund pada $3d$.',
      solution: 'Atom $_{26}\\text{Fe}$ berkonfigurasi $[\\text{Ar}]\\,3d^6\\,4s^2$. Saat membentuk $\\text{Fe}^{2+}$, dua elektron pada $4s^2$ dilepaskan sehingga menjadi $[\\text{Ar}]\\,3d^6$. Kelima orbital $3d$ diisi $5$ elektron tunggal dahulu lalu elektron ke-6 berpasangan di satu orbital, menyisakan $4$ elektron tidak berpasangan. Jawaban: **B**'
    }),
    soal({
      level: 'Sedang',
      q: 'Keempat bilangan kuantum elektron terakhir pada atom klorin ($_{17}\\text{Cl}$) dengan aturan pengisian orbital dari $m = -l$ ke $+l$ adalah...',
      options: [
        '$n = 3, \\ l = 1, \\ m = +1, \\ s = +\\frac{1}{2}$',
        '$n = 3, \\ l = 0, \\ m = 0, \\ s = -\\frac{1}{2}$',
        '$n = 3, \\ l = 1, \\ m = -1, \\ s = -\\frac{1}{2}$',
        '$n = 3, \\ l = 1, \\ m = 0, \\ s = -\\frac{1}{2}$'
      ],
      answer: 'D',
      hint: 'Elektron terakhir $_{17}\\text{Cl}$ menempati subkulit $3p^5$.',
      solution: 'Konfigurasi $_{17}\\text{Cl}$ adalah $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^5$. Pada subkulit $3p^5$ ($n = 3, l = 1$), tiga elektron pertama mengisi $m = -1, 0, +1$ ($s = +\\frac{1}{2}$), elektron keempat berpasangan di $m = -1$ ($s = -\\frac{1}{2}$), dan elektron kelima menempati $m = 0$ dengan $s = -\\frac{1}{2}$. Jawaban: **D**'
    }),
    soal({
      level: 'Sedang',
      q: 'Diketahui massa atom relatif rata-rata unsur klorin ($A_r\\text{ Cl}$) di alam adalah $35{,}5$ dan terdiri atas dua isotop utama, yaitu $^{35}\\text{Cl}$ (massa $35\\text{ sma}$) dan $^{37}\\text{Cl}$ (massa $37\\text{ sma}$). Persentase kelimpahan isotop $^{35}\\text{Cl}$ dan $^{37}\\text{Cl}$ di alam berturut-turut adalah...',
      options: [
        '75% dan 25%',
        '70% dan 30%',
        '60% dan 40%',
        '25% dan 75%'
      ],
      answer: 'A',
      hint: 'Misalkan fraksi $^{35}\\text{Cl}$ adalah $x$ dan fraksi $^{37}\\text{Cl}$ adalah $(1 - x)$, lalu gunakan rumus $A_r$ rata-rata.',
      solution: '$35x + 37(1 - x) = 35{,}5 \\implies 37 - 2x = 35{,}5 \\implies 2x = 1{,}5 \\implies x = 0{,}75$. Jadi kelimpahan $^{35}\\text{Cl}$ adalah $75\\%$ dan $^{37}\\text{Cl}$ adalah $25\\%$. Jawaban: **A**'
    }),
    soal({
      level: 'Sedang',
      q: 'Himpunan bilangan kuantum berikut yang **tidak diizinkan** untuk menggambarkan sebuah elektron dalam atom adalah...',
      options: [
        '$n = 3, \\ l = 2, \\ m = -1, \\ s = +\\frac{1}{2}$',
        '$n = 4, \\ l = 0, \\ m = 0, \\ s = -\\frac{1}{2}$',
        '$n = 2, \\ l = 2, \\ m = 0, \\ s = +\\frac{1}{2}$',
        '$n = 3, \\ l = 1, \\ m = +1, \\ s = -\\frac{1}{2}$'
      ],
      answer: 'C',
      hint: 'Periksa syarat batas nilai $l$ terhadap $n$ ($0 \\le l \\le n - 1$) dan $m$ terhadap $l$ ($-l \\le m \\le +l$).',
      solution: 'Untuk kulit $n = 2$, nilai bilangan kuantum azimut $l$ yang diizinkan hanyalah $0$ dan $1$ (maksimal $n - 1 = 1$). Oleh karena itu, kombinasi $n = 2, l = 2$ tidak mungkin ada. Jawaban: **C**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Ion $\\text{X}^{2-}$ memiliki elektron terakhir dengan bilangan kuantum $n = 3, \\ l = 1, \\ m = +1, \\ s = -\\frac{1}{2}$. Jumlah elektron tidak berpasangan yang dimiliki oleh atom netral $\\text{X}$ pada keadaan dasar adalah...',
      options: [
        '0',
        '2',
        '3',
        '4'
      ],
      answer: 'B',
      hint: 'Tentukan konfigurasi lengkap ion $\\text{X}^{2-}$ dari bilangan kuantum elektron terakhirnya, lalu kurangi $2$ elektron untuk memperoleh atom netral $\\text{X}$.',
      solution: 'Bilangan kuantum $n = 3, l = 1, m = +1, s = -\\frac{1}{2}$ adalah elektron terakhir pada subkulit $3p^6$, sehingga ion $\\text{X}^{2-}$ memiliki $18$ elektron. Atom netral $\\text{X}$ mempunyai $18 - 2 = 16$ elektron dengan konfigurasi $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4$. Pada $3p^4$, satu orbital berpasangan dan dua orbital terisi tunggal, sehingga ada $2$ elektron tidak berpasangan. Jawaban: **B**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu ion logam transisi $\\text{M}^{3+}$ berkonfigurasi elektron $[\\text{Ar}]\\,3d^5$ dengan elektron terakhir bernilai $n = 3, \\ l = 2, \\ m = +2, \\ s = +\\frac{1}{2}$. Jika nomor massa atom netral $\\text{M}$ adalah $56$, jumlah neutron dalam inti atom $\\text{M}$ adalah...',
      options: [
        '23',
        '26',
        '28',
        '30'
      ],
      answer: 'D',
      hint: 'Tambahkan kembali $3$ elektron ke ion $\\text{M}^{3+}$ untuk menemukan nomor atom $Z$ sebelum menghitung $A - Z$.',
      solution: 'Ion $\\text{M}^{3+}$ dengan konfigurasi $[\\text{Ar}]\\,3d^5$ memiliki $18 + 5 = 23$ elektron. Karena ion bermuatan $+3$ terbentuk dengan melepas $3$ elektron dari atom netral, atom $\\text{M}$ memiliki $23 + 3 = 26$ elektron sehingga nomor atom $Z = 26$. Jumlah neutron $n = A - Z = 56 - 26 = 30$. Jawaban: **D**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dalam penyelidikan laju reaksi antara pita magnesium ($\\text{Mg}$) dan larutan $\\text{HCl}$, seorang siswa mengukur waktu hingga pita $\\text{Mg}$ habis bereaksi pada berbagai konsentrasi $\\text{HCl}$. Saat menyiapkan larutan dari $\\text{HCl}$ pekat, ia menuangkan akuades langsung ke dalam gelas kimia berisi $\\text{HCl}$ pekat. Evaluasi variabel dan keselamatan kerja yang tepat adalah...',
      options: [
        'konsentrasi $\\text{HCl}$ sebagai variabel bebas dan waktu reaksi sebagai variabel terikat; pengenceran keliru karena $\\text{HCl}$ pekat harus dituang perlahan ke dalam air',
        'waktu reaksi sebagai variabel bebas dan massa $\\text{Mg}$ sebagai variabel terikat; pengenceran sudah benar karena air mendinginkan asam pekat dari atas',
        'massa $\\text{Mg}$ sebagai variabel bebas dan suhu larutan sebagai variabel terikat; pengenceran keliru karena asam pekat harus langsung dipanaskan dahulu',
        'konsentrasi $\\text{HCl}$ sebagai variabel kontrol dan waktu reaksi sebagai variabel bebas; pengenceran sudah aman jika dilakukan tanpa pengadukan'
      ],
      answer: 'A',
      hint: 'Ingat aturan keselamatan pengenceran asam kuat pekat ("asam ke air", bukan sebaliknya) dan bedakan penyebab (bebas) dengan hasil ukur (terikat).',
      solution: 'Konsentrasi $\\text{HCl}$ sengaja divariasikan sehingga menjadi variabel bebas, sedangkan waktu habisnya pita $\\text{Mg}$ yang diukur adalah variabel terikat. Menuangkan air ke asam pekat berbahaya karena pelarutan bersifat sangat eksotermik dan air di lapisan atas dapat mendidih serta memercikkan asam; seharusnya asam pekat dituang perlahan ke dalam air sambil diaduk. Jawaban: **A**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pada keadaan dasar, banyaknya elektron yang menempati kulit $M$ ($n = 3$) dan banyaknya elektron tidak berpasangan pada atom netral tembaga ($_{29}\\text{Cu}$) berturut-turut adalah...',
      options: [
        '18 dan 2',
        '17 dan 1',
        '18 dan 1',
        '16 dan 3'
      ],
      answer: 'C',
      hint: 'Perhatikan pengecualian kestabilan subkulit penuh $3d^{10}$ pada konfigurasi elektron atom tembaga.',
      solution: 'Atom $_{29}\\text{Cu}$ mengalami penataan elektron menjadi $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,3d^{10}\\,4s^1$ karena subkulit $3d^{10}$ penuh lebih stabil. Seluruh subkulit pada kulit $M$ ($n = 3$) adalah $3s^2\\,3p^6\\,3d^{10}$ yang menampung $2 + 6 + 10 = 18$ elektron, sedangkan elektron tidak berpasangan hanya terdapat $1$ buah di orbital $4s^1$. Jawaban: **C**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu atom netral $\\text{Y}$ pada keadaan dasar memiliki tepat $6$ elektron pada orbital dengan bilangan kuantum azimut $l = 0$ dan $10$ elektron pada orbital dengan bilangan kuantum azimut $l = 1$. Jumlah elektron tidak berpasangan serta keempat bilangan kuantum elektron terakhir atom $\\text{Y}$ berturut-turut adalah...',
      options: [
        '3 elektron; $n = 3, \\ l = 1, \\ m = +1, \\ s = +\\frac{1}{2}$',
        '2 elektron; $n = 3, \\ l = 1, \\ m = -1, \\ s = -\\frac{1}{2}$',
        '2 elektron; $n = 3, \\ l = 1, \\ m = +1, \\ s = -\\frac{1}{2}$',
        '1 elektron; $n = 3, \\ l = 1, \\ m = 0, \\ s = -\\frac{1}{2}$'
      ],
      answer: 'B',
      hint: 'Orbital dengan $l = 0$ adalah subkulit $s$ ($1s, 2s, 3s$), sedangkan $l = 1$ adalah subkulit $p$ ($2p, 3p$).',
      solution: 'Sebanyak $6$ elektron dengan $l = 0$ mengisi $1s^2, 2s^2, 3s^2$, sedangkan $10$ elektron dengan $l = 1$ mengisi $2p^6$ dan $3p^4$, sehingga konfigurasinya adalah $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4$ ($Z = 16$). Pada $3p^4$, tiga elektron mengisi $m = -1, 0, +1$ ($s = +\\frac{1}{2}$) dan elektron keempat berpasangan di $m = -1$ ($s = -\\frac{1}{2}$), menyisakan $2$ elektron tidak berpasangan. Jawaban: **B**'
    })
  ]
});
