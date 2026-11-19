import { bab, soal } from '../author.js';

export default bab({
  grade: 10,
  number: 3,
  slug: 'ikatan-kimia-dan-bentuk-molekul',
  title: 'Ikatan Kimia, Bentuk Molekul, dan Gaya Antarmolekul',
  element: 'Pemahaman Kimia: ikatan ion, kovalen, koordinasi, logam, teori VSEPR, kepolaran, dan gaya antarmolekul',
  summary: {
    overview: 'Atom-atom di alam berikatan untuk mencapai konfigurasi elektron stabil seperti gas mulia melalui serah terima ataupun pemakaian bersama pasangan elektron. Bab ini mengkaji pembentukan dan sifat fisis ikatan ion, kovalen (tunggal, rangkap, dan koordinasi), serta ikatan logam; penentuan geometri molekul dengan teori tolakan pasangan elektron kulit valensi (VSEPR) dan hibridisasi dasar; kepolaran ikatan dan molekul; serta pengaruh gaya antarmolekul terhadap titik didih dan kelarutan zat.',
    coreConcepts: [
      'Kestabilan Atom dan Ikatan Ion: Atom mencapai kestabilan dengan memenuhi kaidah duplet ($2$ elektron valensi seperti $\\text{He}$) atau oktet ($8$ elektron valensi), meski ada pengecualian seperti oktet tak lengkap ($\\text{BF}_3$, $\\text{BeCl}_2$) dan oktet berkembang ($\\text{PCl}_5$, $\\text{SF}_6$). Ikatan ion terjadi melalui transfer elektron dari logam pembentuk kation ke nonlogam pembentuk anion; kristal ionik bertitik leleh tinggi, rapuh, dan menghantarkan listrik hanya saat lelehan atau larutan.',
      'Ikatan Kovalen, Koordinasi, dan Ikatan Logam: Ikatan kovalen terbentuk dari pemakaian bersama satu atau lebih pasangan elektron antarnonlogam (tunggal, rangkap dua, atau rangkap tiga). Pada ikatan kovalen koordinasi, pasangan elektron ikatan berasal dari salah satu atom saja (seperti $\\text{NH}_3$ menyumbangkan PEB ke $\\text{H}^+$ pada $\\text{NH}_4^+$). Ikatan logam terjadi akibat gaya tarik antara kisi kation logam dan lautan elektron valensi yang terdelokalisasi bebas.',
      'Teori VSEPR dan Hibridisasi Dasar: Bentuk molekul ditentukan oleh jumlah pasangan elektron ikatan ($X$) dan pasangan elektron bebas ($E$) pada atom pusat melalui notasi $AX_nE_m$, dengan kekuatan tolakan $\\text{PEB--PEB} > \\text{PEB--PEI} > \\text{PEI--PEI}$. Dua domain menghasilkan bentuk linear ($sp$, $180^\\circ$); tiga domain menghasilkan trigonal planar ($sp^2$, $120^\\circ$) atau huruf V ($AX_2E$); empat domain ($sp^3$) menghasilkan tetrahedral ($AX_4$, $109{,}5^\\circ$), piramida trigonal ($AX_3E$, $\\approx 107^\\circ$), atau bengkok ($AX_2E_2$, $\\approx 104{,}5^\\circ$); lima dan enam domain menghasilkan bipiramida trigonal dan oktahedral.',
      'Kepolaran Ikatan dan Molekul: Ikatan kovalen bersifat polar bila terdapat perbedaan keelektronegatifan antara dua atom yang berikatan. Namun kepolaran molekul keseluruhan ditentukan oleh resultan vektor momen dipol: molekul simetris tanpa PEB seperti $\\text{CO}_2$, $\\text{BF}_3$, dan $\\text{CCl}_4$ bersifat nonpolar karena momen dipolnya saling meniadakan, sedangkan molekul asimetris seperti $\\text{NH}_3$, $\\text{H}_2\\text{O}$, dan $\\text{SO}_2$ bersifat polar.',
      'Gaya Antarmolekul dan Sifat Fisik Zat: Gaya antarmolekul meliputi gaya London (dispersi) yang dimiliki semua molekul dan menguat seiring bertambahnya $M_r$ serta luas permukaan kontak, gaya dipol–dipol antarmolekul polar, dan ikatan hidrogen antara atom $\\text{H}$ yang terikat pada atom sangat elektronegatif ($\\text{F}$, $\\text{O}$, atau $\\text{N}$) dengan pasangan elektron bebas atom $\\text{F}$, $\\text{O}$, atau $\\text{N}$ molekul lain. Semakin kuat gaya antarmolekul, semakin tinggi titik didih zat.'
    ],
    keyFormulas: [
      { label: 'Pasangan elektron bebas atom pusat', formula: '\\text{PEB} = \\dfrac{EV_{\\text{pusat}} - \\text{elektron ikatan} - \\text{muatan}}{2}' },
      { label: 'Total domain elektron & hibridisasi', formula: 'D = n_{\\text{PEI}} + m_{\\text{PEB}} \\quad (D=2\\!:\\,sp,\\; D=3\\!:\\,sp^2,\\; D=4\\!:\\,sp^3)' },
      { label: 'Urutan kekuatan tolakan VSEPR', formula: '\\text{PEB--PEB} > \\text{PEB--PEI} > \\text{PEI--PEI}' },
      { label: 'Urutan kekuatan gaya antarmolekul', formula: '\\text{Ikatan Hidrogen} > \\text{Dipol--Dipol} > \\text{Gaya London}' }
    ],
    workedExamples: [
      {
        title: 'Menentukan bentuk molekul dan kepolaran SO2',
        problem: 'Tentukan notasi VSEPR, bentuk molekul, dan kepolaran molekul $\\text{SO}_2$ ($_{16}\\text{S}$, $_{8}\\text{O}$).',
        solution: 'Atom pusat $\\text{S}$ memiliki $6$ elektron valensi. Dua atom $\\text{O}$ masing-masing memerlukan $2$ elektron untuk membentuk ikatan rangkap dua, sehingga terpakai $4$ elektron dari $\\text{S}$ ($2$ domain PEI) dan tersisa $6 - 4 = 2$ elektron atau $1$ PEB. Notasinya adalah $AX_2E$ ($3$ domain, hibridisasi $sp^2$) dengan bentuk **bengkok (huruf V)**. Karena asimetris akibat keberadaan PEB, momen dipol ikatan $\\text{S}=\\text{O}$ tidak saling meniadakan sehingga $\\text{SO}_2$ bersifat **polar**.'
      },
      {
        title: 'Membandingkan sudut ikatan CH4, NH3, dan H2O',
        problem: 'Ketiga molekul $\\text{CH}_4$, $\\text{NH}_3$, dan $\\text{H}_2\\text{O}$ memiliki $4$ domain elektron pada atom pusatnya. Mengapa sudut ikatan $\\text{H}_2\\text{O}$ paling kecil?',
        solution: '$\\text{CH}_4$ ($AX_4$) tidak memiliki PEB sehingga sudut tetrahedralnya simetris sebesar $109{,}5^\\circ$. $\\text{NH}_3$ ($AX_3E$) memiliki $1$ PEB yang menekan ketiga PEI menjadi sekitar $107^\\circ$. $\\text{H}_2\\text{O}$ ($AX_2E_2$) memiliki $2$ PEB dengan tolakan $\\text{PEB--PEB}$ paling kuat sehingga menekan kedua ikatan $\\text{O--H}$ hingga sudutnya mengecil menjadi sekitar $104{,}5^\\circ$.'
      },
      {
        title: 'Menjelaskan perbedaan titik didih H2O dan H2S',
        problem: 'Meskipun $M_r\\,\\text{H}_2\\text{S} = 34$ lebih besar daripada $M_r\\,\\text{H}_2\\text{O} = 18$, mengapa air mendidih pada $100^\\circ\\text{C}$ sedangkan $\\text{H}_2\\text{S}$ berwujud gas pada suhu ruang (titik didih $-60^\\circ\\text{C}$)?',
        solution: 'Pada $\\text{H}_2\\text{O}$, atom $\\text{H}$ berikatan langsung dengan atom $\\text{O}$ yang sangat elektronegatif dan berukuran kecil sehingga terbentuk **ikatan hidrogen** antarmolekul yang sangat kuat. Sebaliknya, antarmolekul $\\text{H}_2\\text{S}$ hanya terdapat gaya dipol–dipol dan gaya London yang jauh lebih lemah, sehingga energi untuk memisahkan molekul $\\text{H}_2\\text{O}$ jauh lebih besar.'
      }
    ],
    misconceptions: [
      'Mengira semua molekul yang memiliki ikatan kovalen polar pasti merupakan molekul polar; kenyataannya molekul simetris seperti $\\text{CO}_2$, $\\text{BF}_3$, dan $\\text{CCl}_4$ bersifat nonpolar karena vektor momen dipolnya saling meniadakan.',
      'Menyamakan ikatan hidrogen dengan ikatan kovalen $\\text{O--H}$ di dalam satu molekul air; ikatan hidrogen adalah gaya tarik antarmolekul (antar $\\text{H}$ dari satu molekul dengan PEB $\\text{F}/\\text{O}/\\text{N}$ molekul lain), bukan ikatan intramolekul.',
      'Mengira air mendidih karena ikatan kovalen $\\text{O--H}$ putus menjadi atom $\\text{H}$ dan $\\text{O}$; penguapan hanya memutus gaya antarmolekul (ikatan hidrogen), sedangkan molekul $\\text{H}_2\\text{O}$ tetap utuh.',
      'Menghitung ikatan rangkap dua sebagai $2$ domain elektron dalam teori VSEPR; ikatan tunggal, rangkap dua, maupun rangkap tiga antardua atom sama-sama dihitung sebagai **satu** domain PEI.'
    ],
    tutorTip: 'Selalu hitung PEB atom pusat sebelum menebak bentuk dan kepolaran molekul: hampir semua molekul biner $AX_n$ dengan $0$ PEB (seperti linear $AX_2$, segitiga datar $AX_3$, tetrahedral $AX_4$, bipiramida trigonal $AX_5$, oktahedral $AX_6$) bersifat simetris dan nonpolar!'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Unsur magnesium ($_{12}\\text{Mg}$) bereaksi dengan unsur klorin ($_{17}\\text{Cl}$) membentuk senyawa stabil. Jenis ikatan yang terbentuk beserta rumus kimia senyawanya adalah...',
      options: [
        'ikatan ion dengan rumus $\\text{MgCl}_2$',
        'ikatan kovalen polar dengan rumus $\\text{MgCl}$',
        'ikatan ion dengan rumus $\\text{Mg}_2\\text{Cl}$',
        'ikatan kovalen koordinasi dengan rumus $\\text{MgCl}_2$'
      ],
      answer: 'A',
      hint: 'Tentukan muatan ion stabil masing-masing dari konfigurasi elektronnya ($_{12}\\text{Mg}$ golongan IIA, $_{17}\\text{Cl}$ golongan VIIA).',
      solution: 'Atom $_{12}\\text{Mg}$ ($2, 8, 2$) melepas $2$ elektron membentuk kation $\\text{Mg}^{2+}$, sedangkan atom $_{17}\\text{Cl}$ ($2, 8, 7$) menangkap $1$ elektron membentuk anion $\\text{Cl}^-$. Untuk menetralkan muatan, satu ion $\\text{Mg}^{2+}$ berikatan ionik dengan dua ion $\\text{Cl}^-$ membentuk $\\text{MgCl}_2$. Jawaban: **A**'
    }),
    soal({
      level: 'Dasar',
      q: 'Kristal garam dapur ($\\text{NaCl}$) pada suhu ruang berwujud padat dan tidak menghantarkan arus listrik, tetapi saat dilelehkan atau dilarutkan dalam air dapat menghantarkan listrik dengan baik. Hal ini terjadi karena...',
      options: [
        'pada fase padat $\\text{NaCl}$ bersifat kovalen nonpolar sehingga tidak bermuatan',
        'pelarut air memecah ikatan kovalen $\\text{NaCl}$ menjadi elektron bebas',
        'lelehan dan larutan $\\text{NaCl}$ melepaskan lautan elektron seperti logam',
        'pada fase padat ion $\\text{Na}^+$ dan $\\text{Cl}^-$ terikat kaku di kisi kristal, sedangkan dalam lelehan atau larutan ion-ionnya bergerak bebas'
      ],
      answer: 'D',
      hint: 'Arus listrik dalam senyawa ionik dibawa oleh ion positif dan negatif yang dapat berpindah posisi.',
      solution: 'Dalam kristal padat $\\text{NaCl}$, ion $\\text{Na}^+$ dan $\\text{Cl}^-$ terkunci pada posisi kisi sehingga tidak bisa mengalirkan muatan. Ketika dilelehkan atau dilarutkan dalam air, ion-ion tersebut terlepas dan bergerak bebas membawa muatan listrik. Jawaban: **D**'
    }),
    soal({
      level: 'Dasar',
      q: 'Logam tembaga mudah dibentuk menjadi kawat dan dapat menghantarkan panas serta listrik dengan sangat baik, berbeda dengan kristal ionik yang rapuh saat dipukul. Sifat khas logam tersebut dijelaskan oleh model ikatan logam sebagai...',
      options: [
        'ikatan kovalen terarah yang sangat kaku di antara atom-atom tembaga',
        'gaya tarik elektrostatik antara kisi kation logam dan lautan elektron valensi yang terdelokalisasi bebas',
        'gaya dipol–dipol sementara di antara molekul-molekul diatomik tembaga',
        'serah terima elektron antarsesama atom tembaga membentuk anion dan kation tetap'
      ],
      answer: 'B',
      hint: 'Ketika lapisan kation logam bergeser akibat pukulan, elektron valensi yang bergerak bebas tetap menjaga gaya tarik antaratom.',
      solution: 'Dalam ikatan logam, elektron valensi terdelokalisasi membentuk lautan elektron yang menyelimuti kation-kation logam. Elektron bebas ini menghantarkan listrik dan panas serta mencegah kation-kation sejenis langsung saling menolak ketika bergeser saat ditempa. Jawaban: **B**'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada pembentukan molekul gas nitrogen ($\\text{N}_2$, nomor atom $\\text{N} = 7$), dua atom nitrogen saling berbagi pasangan elektron agar masing-masing memenuhi kaidah oktet. Jenis ikatan kovalen di dalam molekul $\\text{N}_2$ adalah...',
      options: [
        'ikatan kovalen tunggal',
        'ikatan kovalen rangkap dua',
        'ikatan kovalen rangkap tiga',
        'ikatan kovalen koordinasi'
      ],
      answer: 'C',
      hint: 'Atom nitrogen memiliki $5$ elektron valensi sehingga masing-masing membutuhkan $3$ elektron tambahan untuk mencapai $8$.',
      solution: 'Dengan $5$ elektron valensi, tiap atom $\\text{N}$ perlu memasangkan $3$ elektronnya dengan atom $\\text{N}$ lain untuk mencapai konfigurasi oktet ($5 + 3 = 8$). Pemakaian bersama $3$ pasangan elektron membentuk ikatan kovalen rangkap tiga ($\\text{N} \\equiv \\text{N}$). Jawaban: **C**'
    }),
    soal({
      level: 'Dasar',
      q: 'Di antara senyawa hidrida golongan VIIA ($\\text{HF}$, $\\text{HCl}$, $\\text{HBr}$, dan $\\text{HI}$), $\\text{HF}$ memiliki titik didih paling tinggi ($19{,}5^\\circ\\text{C}$) meskipun massa molekul relatifnya paling kecil. Penyebab utama tingginya titik didih $\\text{HF}$ adalah...',
      options: [
        'adanya ikatan hidrogen antarmolekul $\\text{HF}$ yang sangat kuat',
        'ikatan kovalen intramolekul $\\text{H--F}$ lebih mudah putus saat dipanaskan',
        'molekul $\\text{HF}$ memiliki gaya London paling kuat karena jari-jari $\\text{F}$ terkecil',
        'senyawa $\\text{HF}$ berwujud kristal ionik pada suhu kamar'
      ],
      answer: 'A',
      hint: 'Ikatan hidrogen terjadi pada molekul yang memiliki atom $\\text{H}$ terikat langsung pada $\\text{F}$, $\\text{O}$, atau $\\text{N}$.',
      solution: 'Keelektronegatifan atom $\\text{F}$ sangat tinggi dan ukurannya kecil, sehingga atom $\\text{H}$ yang terikat pada $\\text{F}$ membentuk ikatan hidrogen antarmolekul yang jauh lebih kuat daripada gaya dipol–dipol dan gaya London pada $\\text{HCl}$, $\\text{HBr}$, maupun $\\text{HI}$. Jawaban: **A**'
    }),
    soal({
      level: 'Sedang',
      q: 'Ion amonium ($\\text{NH}_4^+$) terbentuk ketika molekul amonia ($\\text{NH}_3$) bereaksi dengan ion $\\text{H}^+$ ($\\text{NH}_3 + \\text{H}^+ \\longrightarrow \\text{NH}_4^+$). Jumlah ikatan kovalen biasa dan ikatan kovalen koordinasi dalam satu ion $\\text{NH}_4^+$ berturut-turut adalah...',
      options: [
        '4 ikatan kovalen biasa dan 0 ikatan kovalen koordinasi',
        '2 ikatan kovalen biasa dan 2 ikatan kovalen koordinasi',
        '3 ikatan kovalen biasa dan 1 ikatan kovalen koordinasi',
        '1 ikatan kovalen biasa dan 3 ikatan kovalen koordinasi'
      ],
      answer: 'C',
      hint: 'Periksa sumber elektron pembentuk ikatan antara $\\text{N}$ pada $\\text{NH}_3$ dan keempat atom $\\text{H}$ di sekitarnya.',
      solution: 'Pada $\\text{NH}_3$, atom $\\text{N}$ sudah membentuk $3$ ikatan kovalen tunggal dengan $3$ atom $\\text{H}$ (masing-masing menyumbang $1$ elektron) dan menyisakan $1$ pasangan elektron bebas. Pasangan elektron bebas tersebut seluruhnya disumbangkan oleh $\\text{N}$ untuk berikatan dengan ion $\\text{H}^+$ yang orbitalnya kosong, membentuk $1$ ikatan kovalen koordinasi. Jawaban: **C**'
    }),
    soal({
      level: 'Sedang',
      q: 'Atom pusat belerang ($_{16}\\text{S}$) berikatan kovalen dengan empat atom fluorin ($_{9}\\text{F}$) membentuk molekul $\\text{SF}_4$. Berdasarkan teori VSEPR, tipe domain elektron dan bentuk molekul $\\text{SF}_4$ berturut-turut adalah...',
      options: [
        '$AX_4$, tetrahedral',
        '$AX_4E_2$, segiempat planar',
        '$AX_4E$, piramida trigonal',
        '$AX_4E$, jungkat-jungkit (seesaw)'
      ],
      answer: 'D',
      hint: 'Hitung sisa pasangan elektron bebas atom $\\text{S}$ setelah $4$ dari $6$ elektron valensinya dipakai mengikat $4$ atom $\\text{F}$.',
      solution: 'Atom $\\text{S}$ ($6$ elektron valensi) memakai $4$ elektron untuk berikatan dengan $4$ atom $\\text{F}$ ($4$ PEI), sehingga tersisa $6 - 4 = 2$ elektron atau $1$ PEB. Notasi VSEPR-nya adalah $AX_4E$ ($5$ domain elektron), yang memiliki geometri molekul **jungkat-jungkit (seesaw)**. Jawaban: **D**'
    }),
    soal({
      level: 'Sedang',
      q: 'Di antara pasangan molekul berikut, manakah yang ikatan antaratomnya bersifat kovalen polar tetapi secara keseluruhan molekulnya bersifat **nonpolar**?',
      options: [
        '$\\text{CO}_2$ dan $\\text{CCl}_4$',
        '$\\text{NH}_3$ dan $\\text{H}_2\\text{O}$',
        '$\\text{CO}_2$ dan $\\text{NH}_3$',
        '$\\text{CCl}_4$ dan $\\text{HCl}$'
      ],
      answer: 'A',
      hint: 'Pilih pasangan molekul dengan bentuk geometri simetris dan tidak memiliki PEB pada atom pusat.',
      solution: 'Ikatan $\\text{C=O}$ dan $\\text{C--Cl}$ keduanya polar karena perbedaan keelektronegatifan, tetapi $\\text{CO}_2$ berbentuk linear ($AX_2$) dan $\\text{CCl}_4$ berbentuk tetrahedral ($AX_4$) yang simetris tanpa PEB di atom pusat sehingga momen dipolnya saling meniadakan (resultan nol). Sebaliknya $\\text{NH}_3$, $\\text{H}_2\\text{O}$, dan $\\text{HCl}$ semuanya polar. Jawaban: **A**'
    }),
    soal({
      level: 'Sedang',
      q: 'Meskipun kaidah oktet menjadi acuan kestabilan molekul, beberapa senyawa mengalami penyimpangan. Molekul berikut yang atom pusatnya mengalami **oktet tak lengkap** (kurang dari $8$ elektron di sekitar atom pusat) adalah...',
      options: [
        '$\\text{PCl}_5$',
        '$\\text{BF}_3$',
        '$\\text{SF}_6$',
        '$\\text{CH}_4$'
      ],
      answer: 'B',
      hint: 'Hitung jumlah elektron di sekitar atom pusat tiap molekul pada struktur Lewisnya.',
      solution: 'Atom boron ($_{5}\\text{B}$) hanya memiliki $3$ elektron valensi sehingga dalam $\\text{BF}_3$ hanya terbentuk $3$ ikatan kovalen tunggal atau $6$ elektron di sekitar atom pusat $\\text{B}$ (oktet tak lengkap). Sebaliknya $\\text{PCl}_5$ ($10$ elektron) dan $\\text{SF}_6$ ($12$ elektron) merupakan oktet berkembang, sedangkan $\\text{CH}_4$ tepat $8$ elektron. Jawaban: **B**'
    }),
    soal({
      level: 'Sedang',
      q: 'Molekul $\\text{CH}_4$, $\\text{NH}_3$, dan $\\text{H}_2\\text{O}$ semuanya memiliki $4$ domain elektron pada atom pusatnya, namun sudut ikatan $\\text{H--X--H}$ berturut-turut menyusut dari $109{,}5^\\circ$ menjadi $107^\\circ$ dan $104{,}5^\\circ$. Penurunan sudut ikatan ini disebabkan oleh...',
      options: [
        'penurunan keelektronegatifan dari $\\text{C}$ ke $\\text{N}$ lalu ke $\\text{O}$',
        'bertambahnya jari-jari atom pusat sehingga ikatan makin panjang',
        'perubahan hibridisasi atom pusat dari $sp^3$ ke $sp^2$ lalu $sp$',
        'bertambahnya jumlah PEB atom pusat karena tolakan $\\text{PEB--PEB} > \\text{PEB--PEI} > \\text{PEI--PEI}$'
      ],
      answer: 'D',
      hint: 'Bandingkan jumlah pasangan elektron bebas pada $\\text{CH}_4$ ($0$), $\\text{NH}_3$ ($1$), dan $\\text{H}_2\\text{O}$ ($2$).',
      solution: 'Pasangan elektron bebas menempati ruang lebih lebar daripada pasangan elektron ikatan karena hanya terikat pada satu inti atom. Semakin banyak PEB ($0$ pada $\\text{CH}_4$, $1$ pada $\\text{NH}_3$, $2$ pada $\\text{H}_2\\text{O}$), semakin kuat desakan tolakan terhadap ikatan di sekitarnya sehingga sudut ikatan menyempit. Jawaban: **D**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Unsur $\\text{A}$ memiliki konfigurasi elektron $1s^2\\,2s^2\\,2p^1$ dan unsur $\\text{B}$ memiliki konfigurasi $1s^2\\,2s^2\\,2p^5$. Jika kedua unsur membentuk senyawa kovalen $\\text{AB}_3$, hibridisasi atom pusat $\\text{A}$, bentuk molekul, dan kepolaran molekul $\\text{AB}_3$ berturut-turut adalah...',
      options: [
        '$sp^3$, piramida trigonal, dan polar',
        '$sp^2$, bengkok, dan polar',
        '$sp^2$, segitiga datar (trigonal planar), dan nonpolar',
        '$sp^3$, tetrahedral, dan nonpolar'
      ],
      answer: 'C',
      hint: 'Tentukan jumlah elektron valensi $\\text{A}$ ($3$) dan $\\text{B}$ ($7$), lalu tentukan PEI dan PEB pada $\\text{AB}_3$.',
      solution: 'Unsur $\\text{A}$ ($_{5}\\text{B}$) memiliki $3$ elektron valensi yang seluruhnya dipakai berikatan tunggal dengan $3$ atom $\\text{B}$ ($_{9}\\text{F}$, perlu $1$ elektron). Atom pusat $\\text{A}$ memiliki $3$ PEI dan $0$ PEB ($AX_3$, total $3$ domain) sehingga mengalami hibridisasi $sp^2$, berbentuk segitiga datar (trigonal planar) yang simetris, dan bersifat nonpolar. Jawaban: **C**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Diketahui tiga senyawa organik dengan massa molekul relatif berdekatan: neopentana ($M_r = 72$, rantai bercabang bulat), $n$-pentana ($M_r = 72$, rantai lurus), dan $1$-butanol ($M_r = 74$, memiliki gugus $-\\text{OH}$). Urutan titik didih ketiga senyawa dari yang paling rendah ke paling tinggi beserta penjelasannya adalah...',
      options: [
        'neopentana $< n$-pentana $< 1$-butanol, karena luas permukaan kontak gaya London $n$-pentana lebih besar daripada neopentana dan $1$-butanol memiliki ikatan hidrogen',
        '$n$-pentana $<$ neopentana $< 1$-butanol, karena percabangan pada neopentana memperkuat gaya tarik antarinti karbon',
        '$1$-butanol $<$ neopentana $< n$-pentana, karena gugus $-\\text{OH}$ bersifat polar sehingga melemahkan gaya dispersi London',
        'neopentana $< 1$-butanol $< n$-pentana, karena rantai karbon lurus selalu mengalahkan ikatan hidrogen'
      ],
      answer: 'A',
      hint: 'Pada dua senyawa nonpolar berisomer, rantai lurus memiliki luas bidang kontak antarmolekul lebih besar dibandingkan rantai bercabang.',
      solution: 'Neopentana dan $n$-pentana keduanya nonpolar sehingga hanya berinteraksi melalui gaya London, namun bentuk bulat neopentana memiliki luas permukaan kontak lebih kecil sehingga titik didihnya lebih rendah daripada $n$-pentana yang memanjang. Sementara itu, $1$-butanol memiliki gugus $-\\text{OH}$ yang membentuk ikatan hidrogen antarmolekul sehingga titik didihnya paling tinggi. Jawaban: **A**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Data sifat fisik tiga zat padat $\\text{P}$, $\\text{Q}$, dan $\\text{R}$ diperoleh dari percobaan laboratorium sebagai berikut: Zat $\\text{P}$ bertitik leleh $801^\\circ\\text{C}$, rapuh, padatan tidak menghantarkan listrik tetapi lelehannya menghantarkan listrik; Zat $\\text{Q}$ bertitik leleh $115^\\circ\\text{C}$, tidak menghantarkan listrik baik padat maupun leleh, serta larut dalam $\\text{CCl}_4$; Zat $\\text{R}$ bertitik leleh $1.085^\\circ\\text{C}$, dapat ditempa, dan menghantarkan listrik dalam wujud padat maupun lelehan. Jenis ikatan dalam zat $\\text{P}$, $\\text{Q}$, dan $\\text{R}$ berturut-turut adalah...',
      options: [
        'kovalen nonpolar, ionik, dan logam',
        'ionik, kovalen nonpolar, dan logam',
        'logam, kovalen polar, dan ionik',
        'ionik, logam, dan kovalen raksasa'
      ],
      answer: 'B',
      hint: 'Cocokkan ciri daya hantar listrik padat vs lelehan, kelenturan/kerapuhan, serta kelarutan dalam pelarut nonpolar.',
      solution: 'Zat $\\text{P}$ rapuh dan baru menghantarkan listrik saat meleleh, ciri khas senyawa **ionik**. Zat $\\text{Q}$ bertitik leleh rendah, isolator listrik di semua fase, dan larut dalam pelarut nonpolar $\\text{CCl}_4$, ciri khas kristal molekuler **kovalen nonpolar**. Zat $\\text{R}$ dapat ditempa dan konduktor listrik saat padat maupun cair, ciri khas **ikatan logam**. Jawaban: **B**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Molekul $\\text{CO}_2$ dan $\\text{SO}_2$ sama-sama memiliki rumus tipe $\\text{XO}_2$, namun $\\text{CO}_2$ bersifat nonpolar sedangkan $\\text{SO}_2$ bersifat polar. Penjelasan struktur dan geometri yang paling tepat untuk perbedaan tersebut adalah...',
      options: [
        'ikatan $\\text{C=O}$ bersifat nonpolar karena selisih elektronegatifitasnya nol, sedangkan ikatan $\\text{S=O}$ bersifat polar',
        'atom pusat $\\text{C}$ memiliki $1$ PEB yang menghasilkan bentuk linear simetris, sedangkan $\\text{S}$ memiliki $2$ PEB',
        'pada $\\text{CO}_2$ atom pusat $\\text{C}$ tidak memiliki PEB ($AX_2$, linear $180^\\circ$) sehingga dipolnya saling meniadakan, sedangkan pada $\\text{SO}_2$ atom pusat $\\text{S}$ memiliki $1$ PEB ($AX_2E$, bengkok) sehingga dipolnya tidak saling meniadakan',
        'molekul $\\text{SO}_2$ berbentuk bipiramida trigonal sedangkan $\\text{CO}_2$ berbentuk tetrahedral simetris'
      ],
      answer: 'C',
      hint: 'Bandingkan jumlah elektron valensi atom pusat $\\text{C}$ ($4$) dan $\\text{S}$ ($6$) saat keduanya membentuk dua ikatan rangkap ke atom $\\text{O}$.',
      solution: 'Atom $\\text{C}$ ($4$ elektron valensi) menggunakan seluruh elektronnya untuk membentuk dua ikatan $\\text{C=O}$ sehingga bertipe $AX_2$ (linear, nonpolar karena dua vektor dipol berlawanan arah sama besar). Atom $\\text{S}$ ($6$ elektron valensi) masih menyisakan $1$ PEB setelah mengikat $2$ atom $\\text{O}$, sehingga bertipe $AX_2E$ (bengkok) dan resultan momen dipolnya tidak nol (polar). Jawaban: **C**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Unsur $\\text{X}$ ($Z = 15$) dapat bereaksi dengan unsur $\\text{Y}$ ($Z = 17$) membentuk molekul $\\text{XY}_3$ maupun $\\text{XY}_5$ apabila gas $\\text{Y}_2$ berlebih. Perbandingan tipe VSEPR, bentuk molekul, dan sifat kepolaran antara $\\text{XY}_3$ dan $\\text{XY}_5$ berturut-turut adalah...',
      options: [
        '$\\text{XY}_3$: $AX_3$, trigonal planar, nonpolar; $\\text{XY}_5$: $AX_5$, segiempat piramida, polar',
        '$\\text{XY}_3$: $AX_3E$, piramida trigonal, nonpolar; $\\text{XY}_5$: $AX_5E$, oktahedral, polar',
        '$\\text{XY}_3$: $AX_3$, tetrahedral, polar; $\\text{XY}_5$: $AX_5$, oktahedral, nonpolar',
        '$\\text{XY}_3$: $AX_3E$, piramida trigonal, polar; $\\text{XY}_5$: $AX_5$, bipiramida trigonal, nonpolar'
      ],
      answer: 'D',
      hint: 'Unsur $\\text{X}$ ($_{15}\\text{P}$) memiliki $5$ elektron valensi dan unsur $\\text{Y}$ ($_{17}\\text{Cl}$) memiliki $7$ elektron valensi.',
      solution: 'Pada $\\text{XY}_3$ ($\\text{PCl}_3$), atom pusat memakai $3$ elektron untuk berikatan dan menyisakan $1$ PEB ($AX_3E$), sehingga bentuknya piramida trigonal dan bersifat polar. Pada $\\text{XY}_5$ ($\\text{PCl}_5$), kelima elektron valensi dipakai berikatan tanpa PEB ($AX_5$), membentuk bipiramida trigonal yang simetris sehingga bersifat nonpolar. Jawaban: **D**'
    })
  ]
});
