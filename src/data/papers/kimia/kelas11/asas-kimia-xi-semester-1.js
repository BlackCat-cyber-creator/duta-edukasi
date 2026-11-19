/**
 * Paket Soal Terstruktur: ASAS Kimia Kelas XI – Penilaian Akhir Semester (Paket 1)
 * Sumber: asas_kimia_11_p1.pdf (Duta e-dukasi arsip ASAS).
 * Bahasa asli dipertahankan dalam Bahasa Indonesia sesuai dokumen sumber.
 * Catatan penyuntingan: soal sumber nomor 26 (bergantung pada gambar) tidak dimuat; soal sumber
 * nomor 27-30 dinomori ulang menjadi 26-29. Soal sumber nomor 24 (menggambar grafik) dinyatakan
 * ulang sebagai deskripsi grafik secara tertulis.
 */
export default {
  id: 'kim11-asas-xi-p1',
  slug: 'asas-kimia-xi-semester-1',
  subject: 'kimia',
  grade: 11,
  track: 'kurikulum-merdeka',
  accessTier: 'free',
  topic:
    'Termokimia (kalorimetri, entalpi pembentukan, hukum Hess, energi ikatan), ikatan kimia dan bentuk molekul (ikatan ion dan kovalen, VSEPR, hibridisasi, gaya antarmolekul), kesetimbangan kimia (Kc, Kp, asas Le Chatelier), molaritas, serta laju reaksi (orde reaksi, persamaan laju, pengaruh suhu)',
  relatedChapterIds: [
    'kimia11-bab2-termokimia',
    'kimia11-bab3-laju-reaksi',
    'kimia11-bab4-kesetimbangan-kimia',
    'kimia10-bab3-ikatan-kimia-dan-bentuk-molekul'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'ASAS SMA',
  title: 'ASAS Kimia Kelas XI – Penilaian Akhir Semester (Paket 1)',
  totalMarks: 97,
  instructions:
    'Kerjakan seluruh 29 soal uraian terstruktur berikut secara sistematis dengan menuliskan rumus, langkah perhitungan, satuan, serta alasan yang jelas pada setiap jawaban. Soal berbentuk Benar–Salah wajib disertai alasan. Waktu yang disarankan: 90 menit.',
  source: {
    org: 'Duta e-dukasi arsip ASAS',
    file: 'asas_kimia_11_p1.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Pelarutan Kristal dan Reaksi Endoterm',
      marks: 3,
      stem: 'Sebanyak $12$ gram kristal senyawa Y dilarutkan ke dalam air di dalam tabung reaksi sehingga dinding tabung reaksi terasa dingin.\n\nPernyataan: "Reaksi tersebut termasuk reaksi endoterm karena kalor berpindah dari lingkungan ke sistem."',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan apakah pernyataan tersebut Benar atau Salah, kemudian jelaskan alasan Anda!',
          answer: 'Benar',
          principle:
            'Pada proses endoterm, sistem menyerap kalor dari lingkungan ($q > 0$, $\\Delta H > 0$) sehingga suhu lingkungan turun.',
          solution:
            'Kristal Y dan air membentuk sistem, sedangkan dinding tabung reaksi merupakan bagian dari lingkungan. Dinding tabung terasa dingin, artinya suhu lingkungan turun.\n\nSuhu lingkungan hanya dapat turun apabila kalor mengalir dari lingkungan ke sistem, yaitu sistem menyerap kalor ($q > 0$) sehingga $\\Delta H > 0$. Proses yang menyerap kalor dari lingkungan adalah proses endoterm. Jadi pernyataan tersebut **Benar**. (Massa $12$ gram tidak diperlukan untuk menjawab.)',
          rubric: [
            { code: 'A1', text: 'Menentukan pilihan Benar' },
            { code: 'B1', text: 'Menjelaskan bahwa kalor berpindah dari lingkungan ke sistem (sistem menyerap kalor, $\\Delta H > 0$)' },
            { code: 'B1', text: 'Mengaitkan perpindahan kalor tersebut dengan turunnya suhu lingkungan (dinding tabung terasa dingin)' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Kalorimetri: Entalpi Penetralan HCl dan NaOH',
      marks: 4,
      stem: 'Larutan $100\\ \\text{mL}$ $\\text{HCl}$ $2\\ \\text{M}$ dicampur dengan larutan $100\\ \\text{mL}$ $\\text{NaOH}$ $2\\ \\text{M}$ di dalam kalorimeter. Pencampuran tersebut menyebabkan kenaikan suhu sebesar $13^\\circ\\text{C}$. Kalor jenis air adalah $4{,}2\\ \\text{J}\\,\\text{g}^{-1}\\,{}^\\circ\\text{C}^{-1}$ dan massa jenis larutan dianggap $1\\ \\text{g/mL}$.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan nilai $\\Delta H$ penetralan (dalam $\\text{kJ/mol}$)!',
          answer: '$\\Delta H = -54{,}6\\ \\text{kJ/mol}$',
          principle:
            'Kalor yang diserap larutan $q = m \\cdot c \\cdot \\Delta T$; karena $q_{\\text{reaksi}} = -q_{\\text{larutan}}$, entalpi reaksi per mol adalah $\\Delta H = -\\frac{q_{\\text{larutan}}}{n}$.',
          solution:
            'Volume total larutan $= 100 + 100 = 200\\ \\text{mL}$, sehingga massa larutan $m = 200\\ \\text{mL} \\times 1\\ \\text{g/mL} = 200\\ \\text{g}$.\n\nKalor yang diserap larutan:\n$$q = m \\cdot c \\cdot \\Delta T = 200\\ \\text{g} \\times 4{,}2\\ \\text{J}\\,\\text{g}^{-1}\\,{}^\\circ\\text{C}^{-1} \\times 13\\ {}^\\circ\\text{C} = 10\\,920\\ \\text{J} = 10{,}92\\ \\text{kJ}$$\nMol pereaksi: $n_{\\text{HCl}} = 0{,}1\\ \\text{L} \\times 2\\ \\text{M} = 0{,}2\\ \\text{mol}$ dan $n_{\\text{NaOH}} = 0{,}1\\ \\text{L} \\times 2\\ \\text{M} = 0{,}2\\ \\text{mol}$. Keduanya bereaksi habis (perbandingan $1 : 1$) dan membentuk $0{,}2\\ \\text{mol}$ $\\text{H}_2\\text{O}$.\n\nEntalpi penetralan:\n$$\\Delta H = -\\frac{q}{n} = -\\frac{10{,}92\\ \\text{kJ}}{0{,}2\\ \\text{mol}} = -54{,}6\\ \\text{kJ/mol}$$\nCatatan angka penting: data $c = 4{,}2$ dan $\\Delta T = 13$ hanya memiliki 2 angka penting, sehingga hasil dapat dibulatkan menjadi $-55\\ \\text{kJ/mol}$; nilai $-54{,}6\\ \\text{kJ/mol}$ dipertahankan sesuai kunci sumber.',
          rubric: [
            { code: 'M1', text: 'Menghitung kalor yang diserap larutan $q = 200 \\times 4{,}2 \\times 13 = 10\\,920\\ \\text{J} = 10{,}92\\ \\text{kJ}$ dengan benar' },
            { code: 'M1', text: 'Menentukan mol pereaksi yang bereaksi, $n = 0{,}2\\ \\text{mol}$' },
            { code: 'A1', text: 'Menghitung $\\Delta H = -54{,}6\\ \\text{kJ/mol}$ (tanda negatif karena reaksi eksoterm)' }
          ]
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Tuliskan persamaan termokimia reaksi penetralan tersebut!',
          answer:
            '$\\text{HCl}(aq) + \\text{NaOH}(aq) \\longrightarrow \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l)\\qquad \\Delta H = -54{,}6\\ \\text{kJ/mol}$',
          principle:
            'Persamaan termokimia memuat persamaan reaksi setara lengkap dengan wujud zat dan nilai $\\Delta H$ (beserta tandanya) untuk koefisien yang tertulis.',
          solution:
            'Reaksi netralisasi asam kuat dan basa kuat membentuk garam dan air:\n$$\\text{HCl}(aq) + \\text{NaOH}(aq) \\longrightarrow \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l)\\qquad \\Delta H = -54{,}6\\ \\text{kJ/mol}$$\nNilai $\\Delta H$ berlaku untuk pembentukan $1\\ \\text{mol}$ $\\text{H}_2\\text{O}$.',
          rubric: [
            { code: 'A1', text: 'Menuliskan persamaan termokimia lengkap dengan wujud zat dan tanda $\\Delta H$ yang benar' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Pembakaran Etana dari Entalpi Pembentukan Standar',
      marks: 4,
      stem: 'Diketahui entalpi pembentukan standar ($\\Delta H_f^\\circ$): $\\text{CO}_2(g) = -394\\ \\text{kJ/mol}$, $\\text{H}_2\\text{O}(g) = -242\\ \\text{kJ/mol}$, dan $\\text{C}_2\\text{H}_6(g) = -84\\ \\text{kJ/mol}$. ($A_r$ C $= 12$, H $= 1$)',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Hitunglah besarnya energi yang dibebaskan pada pembakaran sempurna $6$ gram gas etana ($\\text{C}_2\\text{H}_6$)!',
          answer: '$286\\ \\text{kJ}$ dibebaskan ($\\Delta H = -286\\ \\text{kJ}$)',
          principle:
            'Entalpi reaksi dihitung dari entalpi pembentukan standar: $\\Delta H^\\circ_{\\text{reaksi}} = \\sum \\Delta H_f^\\circ(\\text{produk}) - \\sum \\Delta H_f^\\circ(\\text{pereaksi})$, dengan $\\Delta H_f^\\circ$ unsur $= 0$.',
          solution:
            'Persamaan pembakaran sempurna $1\\ \\text{mol}$ etana:\n$$\\text{C}_2\\text{H}_6(g) + \\tfrac{7}{2}\\text{O}_2(g) \\longrightarrow 2\\text{CO}_2(g) + 3\\text{H}_2\\text{O}(g)$$\n$$\\Delta H^\\circ_{\\text{pembakaran}} = [2(-394) + 3(-242)] - [(-84) + \\tfrac{7}{2}(0)] = (-788 - 726) + 84 = -1\\,430\\ \\text{kJ/mol}$$\nMassa molar $M_r\\ \\text{C}_2\\text{H}_6 = 2(12) + 6(1) = 30\\ \\text{g/mol}$, sehingga\n$$n = \\frac{6\\ \\text{g}}{30\\ \\text{g/mol}} = 0{,}2\\ \\text{mol}$$\nEnergi yang dibebaskan:\n$$Q = 0{,}2\\ \\text{mol} \\times 1\\,430\\ \\text{kJ/mol} = 286\\ \\text{kJ}$$',
          rubric: [
            { code: 'M1', text: 'Menuliskan persamaan pembakaran etana yang setara' },
            { code: 'M1', text: 'Menghitung $\\Delta H^\\circ_{\\text{pembakaran}} = -1\\,430\\ \\text{kJ/mol}$' },
            { code: 'M1', text: 'Menentukan mol etana $= 0{,}2\\ \\text{mol}$' },
            { code: 'A1', text: 'Menghitung energi yang dibebaskan $= 286\\ \\text{kJ}$' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Hukum Hess: Entalpi Pembakaran Etena',
      marks: 4,
      stem: 'Dari data persamaan termokimia berikut:\n$$\\text{C}(s) + \\text{O}_2(g) \\longrightarrow \\text{CO}_2(g)\\qquad \\Delta H = -393{,}5\\ \\text{kJ}$$\n$$\\text{H}_2(g) + \\tfrac{1}{2}\\text{O}_2(g) \\longrightarrow \\text{H}_2\\text{O}(l)\\qquad \\Delta H = -285{,}8\\ \\text{kJ}$$\n$$2\\text{C}(s) + 2\\text{H}_2(g) \\longrightarrow \\text{C}_2\\text{H}_4(g)\\qquad \\Delta H = +52{,}3\\ \\text{kJ}$$',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Tentukan perubahan entalpi ($\\Delta H$) untuk reaksi pembakaran: $\\text{C}_2\\text{H}_4(g) + 3\\text{O}_2(g) \\longrightarrow 2\\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l)$!',
          answer: '$\\Delta H = -1\\,410{,}9\\ \\text{kJ}$',
          principle:
            'Hukum Hess: perubahan entalpi suatu reaksi hanya bergantung pada keadaan awal dan akhir, sehingga dapat diperoleh dengan menjumlahkan reaksi-reaksi bertahap (membalik reaksi mengubah tanda $\\Delta H$, mengalikan koefisien mengalikan $\\Delta H$).',
          solution:
            'Susun ketiga reaksi agar jumlahnya sama dengan reaksi target:\n\n- Reaksi 1 dikali $2$: $2\\text{C}(s) + 2\\text{O}_2(g) \\longrightarrow 2\\text{CO}_2(g)$, $\\Delta H_1 = 2(-393{,}5) = -787{,}0\\ \\text{kJ}$\n- Reaksi 2 dikali $2$: $2\\text{H}_2(g) + \\text{O}_2(g) \\longrightarrow 2\\text{H}_2\\text{O}(l)$, $\\Delta H_2 = 2(-285{,}8) = -571{,}6\\ \\text{kJ}$\n- Reaksi 3 dibalik: $\\text{C}_2\\text{H}_4(g) \\longrightarrow 2\\text{C}(s) + 2\\text{H}_2(g)$, $\\Delta H_3 = -52{,}3\\ \\text{kJ}$\n\nJumlahkan ($2\\text{C}$ dan $2\\text{H}_2$ saling menghilangkan; $2\\text{O}_2 + \\text{O}_2 = 3\\text{O}_2$):\n$$\\text{C}_2\\text{H}_4(g) + 3\\text{O}_2(g) \\longrightarrow 2\\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l)$$\n$$\\Delta H = -787{,}0 + (-571{,}6) + (-52{,}3) = -1\\,410{,}9\\ \\text{kJ}$$',
          rubric: [
            { code: 'M1', text: 'Mengalikan reaksi 1 dan reaksi 2 dengan $2$ beserta $\\Delta H$-nya' },
            { code: 'M1', text: 'Membalik reaksi 3 dan mengubah tanda $\\Delta H$ menjadi $-52{,}3\\ \\text{kJ}$' },
            { code: 'M1', text: 'Menjumlahkan persamaan reaksi hingga diperoleh reaksi target' },
            { code: 'A1', text: 'Menghitung $\\Delta H = -1\\,410{,}9\\ \\text{kJ}$' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Entalpi Reaksi Adisi dari Energi Ikatan',
      marks: 4,
      stem: 'Diketahui data energi ikatan rata-rata sebagai berikut:\n\n| Ikatan | Energi ($\\text{kJ/mol}$) |\n| :---: | :---: |\n| $\\text{C=C}$ | 614 |\n| $\\text{C-C}$ | 348 |\n| $\\text{C-H}$ | 413 |\n| $\\text{C-Br}$ | 276 |\n| $\\text{H-Br}$ | 366 |',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Tentukan besarnya perubahan entalpi ($\\Delta H$) dari reaksi adisi berikut: $\\text{CH}_2\\text{=CH}_2 + \\text{H-Br} \\longrightarrow \\text{CH}_3\\text{-CH}_2\\text{-Br}$!',
          answer: '$\\Delta H = -57\\ \\text{kJ/mol}$',
          principle:
            'Dengan energi ikatan rata-rata: $\\Delta H = \\sum D(\\text{ikatan yang diputus}) - \\sum D(\\text{ikatan yang terbentuk})$.',
          solution:
            'Ikatan yang diputus (pereaksi $\\text{CH}_2\\text{=CH}_2$ dan $\\text{H-Br}$): $1\\ \\text{C=C}$, $4\\ \\text{C-H}$, dan $1\\ \\text{H-Br}$.\n$$\\sum D_{\\text{putus}} = 614 + 4(413) + 366 = 614 + 1\\,652 + 366 = 2\\,632\\ \\text{kJ/mol}$$\nIkatan yang terbentuk (produk $\\text{CH}_3\\text{-CH}_2\\text{-Br}$): $1\\ \\text{C-C}$, $5\\ \\text{C-H}$ ($3$ pada $\\text{CH}_3$ dan $2$ pada $\\text{CH}_2$), dan $1\\ \\text{C-Br}$.\n$$\\sum D_{\\text{bentuk}} = 348 + 5(413) + 276 = 348 + 2\\,065 + 276 = 2\\,689\\ \\text{kJ/mol}$$\n$$\\Delta H = 2\\,632 - 2\\,689 = -57\\ \\text{kJ/mol}$$',
          rubric: [
            { code: 'M1', text: 'Menuliskan rumus $\\Delta H = \\sum D_{\\text{putus}} - \\sum D_{\\text{bentuk}}$' },
            { code: 'M1', text: 'Menghitung total energi pemutusan ikatan $= 2\\,632\\ \\text{kJ/mol}$' },
            { code: 'M1', text: 'Menghitung total energi pembentukan ikatan $= 2\\,689\\ \\text{kJ/mol}$' },
            { code: 'A1', text: 'Menghitung $\\Delta H = -57\\ \\text{kJ/mol}$' }
          ]
        }
      ]
    },
    {
      no: 6,
      title: 'Pembentukan Ikatan Ion pada MgO',
      marks: 3,
      stem: 'Pernyataan: "Pembentukan senyawa ion $\\text{MgO}$ terjadi karena atom O melepaskan dua elektron kepada atom Mg."',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan apakah pernyataan tersebut Benar atau Salah, kemudian jelaskan alasan Anda!',
          answer: 'Salah',
          principle:
            'Ikatan ion terbentuk melalui serah terima elektron dari atom logam (cenderung melepas elektron) kepada atom nonlogam (cenderung menerima elektron).',
          solution:
            'Atom $_{12}\\text{Mg}$ memiliki konfigurasi elektron $2, 8, 2$; atom ini adalah logam yang melepas $2$ elektron membentuk ion $\\text{Mg}^{2+}$. Atom $_{8}\\text{O}$ memiliki konfigurasi $2, 6$; atom ini adalah nonlogam yang menerima $2$ elektron membentuk ion $\\text{O}^{2-}$.\n\nJadi, ikatan ion pada $\\text{MgO}$ terjadi karena atom Mg melepaskan dua elektron kepada atom O, bukan sebaliknya. Pernyataan tersebut **Salah**.',
          rubric: [
            { code: 'A1', text: 'Menentukan pilihan Salah' },
            { code: 'B1', text: 'Menjelaskan bahwa Mg (logam, $2, 8, 2$) melepas $2$ elektron membentuk $\\text{Mg}^{2+}$' },
            { code: 'B1', text: 'Menjelaskan bahwa O (nonlogam, $2, 6$) menerima $2$ elektron membentuk $\\text{O}^{2-}$' }
          ]
        }
      ]
    },
    {
      no: 7,
      title: 'Jenis Ikatan dan Rumus Senyawa Unsur P dan Q',
      marks: 3,
      stem: 'Unsur P memiliki nomor atom $12$ dan unsur Q memiliki nomor atom $17$.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan jenis ikatan dan rumus senyawa yang terbentuk antara unsur P dan Q!',
          answer: 'Ikatan ion; rumus senyawa $\\text{PQ}_2$',
          principle:
            'Atom logam golongan IIA melepas $2$ elektron membentuk kation, atom nonlogam golongan VIIA menerima $1$ elektron membentuk anion; muatan senyawa harus netral.',
          solution:
            'Konfigurasi elektron $_{12}\\text{P} = 2, 8, 2$: melepas $2$ elektron membentuk $\\text{P}^{2+}$ (logam).\n\nKonfigurasi elektron $_{17}\\text{Q} = 2, 8, 7$: menerima $1$ elektron membentuk $\\text{Q}^-$ (nonlogam).\n\nSerah terima elektron antara logam dan nonlogam menghasilkan **ikatan ion**. Agar muatan netral diperlukan $1$ ion $\\text{P}^{2+}$ dan $2$ ion $\\text{Q}^-$:\n$$\\text{P}^{2+} + 2\\text{Q}^- \\longrightarrow \\text{PQ}_2$$',
          rubric: [
            { code: 'M1', text: 'Menuliskan konfigurasi elektron P dan Q serta ion yang terbentuk ($\\text{P}^{2+}$ dan $\\text{Q}^-$)' },
            { code: 'A1', text: 'Menentukan jenis ikatan ion' },
            { code: 'A1', text: 'Menentukan rumus senyawa $\\text{PQ}_2$' }
          ]
        }
      ]
    },
    {
      no: 8,
      title: 'Terbentuknya Ikatan Kovalen',
      marks: 3,
      stem: 'Ikatan kovalen terbentuk antara atom-atom unsur nonlogam.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Jelaskan bagaimana ikatan kovalen dapat terbentuk antara dua atom nonlogam, serta tuliskan satu contoh senyawanya!',
          answer:
            'Ikatan kovalen terbentuk melalui pemakaian bersama pasangan elektron oleh dua atom nonlogam; contoh senyawa: $\\text{HCl}$ (atau $\\text{H}_2\\text{O}$, $\\text{Cl}_2$).',
          principle:
            'Atom-atom nonlogam sama-sama cenderung menarik elektron sehingga mencapai konfigurasi gas mulia (duplet atau oktet) dengan cara memakai bersama pasangan elektron ikatan.',
          solution:
            'Dua atom nonlogam sama-sama memiliki keelektronegatifan tinggi dan cenderung menarik elektron untuk mencapai konfigurasi elektron gas mulia yang stabil (kaidah duplet atau oktet). Karena tidak ada atom yang melepaskan elektron, masing-masing atom menyumbangkan elektron valensinya untuk dipakai bersama sebagai pasangan elektron ikatan (PEI).\n\nContoh: pada $\\text{HCl}$, atom $\\text{H}$ ($1$ elektron valensi) dan atom $\\text{Cl}$ ($7$ elektron valensi) memakai bersama sepasang elektron sehingga $\\text{H}$ mencapai duplet dan $\\text{Cl}$ mencapai oktet. Contoh lain: $\\text{H}_2\\text{O}$ dan $\\text{Cl}_2$.',
          rubric: [
            { code: 'B1', text: 'Menjelaskan bahwa atom nonlogam cenderung mencapai konfigurasi gas mulia (duplet/oktet) tanpa melepas elektron' },
            { code: 'B1', text: 'Menjelaskan bahwa kedua atom memakai bersama pasangan elektron ikatan' },
            { code: 'A1', text: 'Memberikan satu contoh senyawa kovalen yang benar (misalnya $\\text{HCl}$, $\\text{H}_2\\text{O}$, atau $\\text{Cl}_2$)' }
          ]
        }
      ]
    },
    {
      no: 9,
      title: 'Ikatan Kovalen Koordinasi pada Ion Hidronium',
      marks: 3,
      stem: 'Ion hidronium ($\\text{H}_3\\text{O}^+$) terbentuk dari molekul air dan ion hidrogen. (Nomor atom H $= 1$, O $= 8$)',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tunjukkan dan jelaskan ikatan kovalen koordinasi yang terbentuk pada ion hidronium ($\\text{H}_3\\text{O}^+$)!',
          answer:
            'Ikatan kovalen koordinasi pada $\\text{H}_3\\text{O}^+$ terbentuk dari satu pasangan elektron bebas (PEB) atom O pada $\\text{H}_2\\text{O}$ yang dipakai bersama dengan ion $\\text{H}^+$.',
          principle:
            'Ikatan kovalen koordinasi terbentuk jika pasangan elektron ikatan berasal seluruhnya dari satu atom (donor PEB) kepada atom/ion lain yang memiliki orbital kosong (akseptor).',
          solution:
            'Atom $_8\\text{O}$ ($2, 6$) memiliki $6$ elektron valensi. Pada $\\text{H}_2\\text{O}$, atom O memakai bersama $2$ elektronnya dengan $2$ atom H (ikatan kovalen tunggal) dan menyisakan $2$ pasangan elektron bebas (PEB).\n\nIon $\\text{H}^+$ tidak memiliki elektron (orbital $1s$ kosong), sehingga dapat menerima sepasang elektron. Satu PEB dari atom O digunakan bersama dengan $\\text{H}^+$:\n$$\\text{H}-\\underset{\\cdot\\cdot}{\\overset{\\cdot\\cdot}{\\text{O}}}-\\text{H} + \\text{H}^+ \\longrightarrow \\left[\\text{H}-\\underset{\\underset{\\text{H}}{\\mid}}{\\overset{\\cdot\\cdot}{\\text{O}}}-\\text{H}\\right]^+$$\nPasangan elektron pada ikatan $\\text{O}-\\text{H}$ yang baru berasal sepenuhnya dari atom O (donor), sedangkan $\\text{H}^+$ bertindak sebagai akseptor. Ikatan ini adalah ikatan kovalen koordinasi. Setelah terbentuk, ion $\\text{H}_3\\text{O}^+$ memiliki $3$ PEI dan $1$ PEB pada atom O, dan ketiga ikatan $\\text{O}-\\text{H}$ ekuivalen.',
          rubric: [
            { code: 'B1', text: 'Mengidentifikasi atom O pada $\\text{H}_2\\text{O}$ sebagai sumber pasangan elektron bebas (donor)' },
            { code: 'B1', text: 'Menjelaskan bahwa ion $\\text{H}^+$ memiliki orbital kosong dan bertindak sebagai akseptor pasangan elektron' },
            { code: 'B1', text: 'Menunjukkan struktur Lewis pembentukan $\\text{H}_3\\text{O}^+$ dengan satu ikatan kovalen koordinasi' }
          ]
        }
      ]
    },
    {
      no: 10,
      title: 'Daya Hantar Listrik Senyawa Ion',
      marks: 3,
      stem: 'Senyawa ion dapat menghantarkan arus listrik ketika dilarutkan dalam air maupun dalam bentuk lelehan, tetapi tidak dapat menghantarkan arus listrik dalam wujud padat.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Jelaskan mengapa hal tersebut dapat terjadi!',
          answer:
            'Dalam larutan maupun lelehan, ion-ion dapat bergerak bebas sehingga dapat membawa muatan listrik, sedangkan dalam wujud padat ion-ion terikat kaku dalam kisi kristal dan tidak dapat bergerak.',
          principle:
            'Penghantaran arus listrik oleh zat ionik memerlukan ion-ion yang bebas bergerak sebagai pembawa muatan.',
          solution:
            'Dalam wujud padat, kation dan anion tersusun rapat dan terikat kuat oleh gaya elektrostatik dalam kisi kristal sehingga tidak dapat berpindah tempat; akibatnya tidak ada pembawa muatan yang bebas dan padatan tidak menghantarkan listrik.\n\nKetika senyawa ion dilarutkan dalam air atau dilelehkan, kisi kristal terurai dan ion-ion positif serta negatif terpisah. Ion-ion tersebut bergerak bebas dan dapat membawa muatan listrik sehingga larutan dan lelehan menghantarkan arus listrik.',
          rubric: [
            { code: 'B1', text: 'Menjelaskan bahwa kisi kristal terurai/ion-ion terpisah dalam larutan atau lelehan' },
            { code: 'B1', text: 'Menjelaskan bahwa ion-ion yang bergerak bebas membawa muatan listrik sehingga menghantarkan arus' },
            { code: 'B1', text: 'Menjelaskan bahwa dalam wujud padat ion-ion terikat kaku dalam kisi kristal sehingga tidak dapat menghantarkan arus' }
          ]
        }
      ]
    },
    {
      no: 11,
      title: 'Bentuk Molekul H2O Menurut Teori VSEPR',
      marks: 3,
      stem: 'Perhatikan molekul air ($\\text{H}_2\\text{O}$). (Nomor atom H $= 1$, O $= 8$)',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan bentuk geometri molekul $\\text{H}_2\\text{O}$ berdasarkan teori tolakan pasangan elektron kulit valensi (VSEPR)!',
          answer: 'Tipe $\\text{AX}_2\\text{E}_2$; bentuk molekul bengkok (huruf V)',
          principle:
            'Menurut teori VSEPR, pasangan elektron di sekitar atom pusat (PEI dan PEB) saling tolak sehingga tersusun sejauh mungkin; bentuk molekul ditentukan oleh jumlah PEI ($n$) dan PEB ($m$) pada tipe $\\text{AX}_n\\text{E}_m$.',
          solution:
            'Atom pusat $_8\\text{O}$ ($2, 6$) memiliki $6$ elektron valensi. Dua elektron dipakai bersama dengan $2$ atom H sehingga PEI $= 2$, dan $4$ elektron sisanya membentuk $2$ pasangan elektron bebas sehingga PEB $= 2$.\n\nTipe molekul: $\\text{AX}_2\\text{E}_2$ ($4$ domain elektron, tersusun tetrahedral). Karena dua domain berupa PEB, bentuk molekulnya **bengkok (huruf V)** dengan sudut ikatan sekitar $104{,}5^\\circ$ (lebih kecil daripada $109{,}5^\\circ$ akibat tolakan PEB yang lebih besar).',
          rubric: [
            { code: 'B1', text: 'Menentukan jumlah PEI $= 2$ dan PEB $= 2$' },
            { code: 'A1', text: 'Menuliskan tipe molekul $\\text{AX}_2\\text{E}_2$' },
            { code: 'A1', text: 'Menyimpulkan bentuk molekul bengkok (huruf V)' }
          ]
        }
      ]
    },
    {
      no: 12,
      title: 'Tipe dan Bentuk Molekul SF4',
      marks: 3,
      stem: 'Perhatikan senyawa $\\text{SF}_4$. (Nomor atom S $= 16$, F $= 9$)',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan tipe molekul ($\\text{AX}_n\\text{E}_m$) dan bentuk molekul dari senyawa $\\text{SF}_4$!',
          answer: 'Tipe $\\text{AX}_4\\text{E}$; bentuk molekul jungkat-jungkit (seesaw)',
          principle:
            'Bentuk molekul ditentukan oleh jumlah pasangan elektron ikatan (PEI) dan pasangan elektron bebas (PEB) atom pusat menurut teori VSEPR.',
          solution:
            'Atom pusat $_{16}\\text{S}$ ($2, 8, 6$) memiliki $6$ elektron valensi. Empat elektron dipakai bersama dengan $4$ atom $_9\\text{F}$ (PEI $= 4$), dan $2$ elektron sisanya membentuk $1$ pasangan elektron bebas (PEB $= 1$).\n\nTotal domain elektron $= 5$ (susunan bipiramida trigonal). Tipe molekul adalah $\\text{AX}_4\\text{E}$ dan bentuk molekulnya **jungkat-jungkit (seesaw)**, dengan PEB menempati posisi ekuatorial.',
          rubric: [
            { code: 'B1', text: 'Menentukan PEI $= 4$ dan PEB $= 1$ pada atom pusat S' },
            { code: 'A1', text: 'Menuliskan tipe molekul $\\text{AX}_4\\text{E}$' },
            { code: 'A1', text: 'Menyimpulkan bentuk molekul jungkat-jungkit (seesaw)' }
          ]
        }
      ]
    },
    {
      no: 13,
      title: 'Hibridisasi Atom Pusat pada SF6',
      marks: 3,
      stem: 'Perhatikan molekul $\\text{SF}_6$. (Nomor atom S $= 16$, F $= 9$)',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan tipe hibridisasi atom pusat pada molekul $\\text{SF}_6$!',
          answer: '$sp^3d^2$',
          principle:
            'Hibridisasi adalah penggabungan orbital-orbital atom pusat (setelah promosi elektron) menjadi orbital hibrida setara yang jumlahnya sama dengan jumlah domain elektron ikatan.',
          solution:
            'Konfigurasi elektron valensi $_{16}\\text{S}$ pada keadaan dasar adalah $3s^2\\,3p^4$ dengan orbital $3d$ kosong, sehingga hanya terdapat $2$ elektron tunggal. Untuk membentuk $6$ ikatan kovalen dengan $6$ atom F diperlukan $6$ elektron tunggal.\n\nSatu elektron dari orbital $3s$ dan satu elektron dari orbital $3p$ dipromosikan ke dua orbital $3d$ kosong, sehingga konfigurasinya menjadi $3s^1\\,3p^3\\,3d^2$ ($6$ elektron tunggal). Satu orbital $s$, tiga orbital $p$, dan dua orbital $d$ bergabung membentuk $6$ orbital hibrida setara, yaitu **$sp^3d^2$** (susunan oktahedral).',
          rubric: [
            { code: 'B1', text: 'Menuliskan konfigurasi elektron valensi S dan menjelaskan perlunya $6$ elektron tunggal' },
            { code: 'B1', text: 'Menjelaskan promosi elektron $3s$ dan $3p$ ke orbital $3d$ kosong hingga terbentuk $3s^1\\,3p^3\\,3d^2$' },
            { code: 'A1', text: 'Menentukan tipe hibridisasi $sp^3d^2$' }
          ]
        }
      ]
    },
    {
      no: 14,
      title: 'Jenis Gaya Antarmolekul',
      marks: 3,
      stem: 'Jelaskan jenis gaya antarmolekul yang terjadi jika interaksi berlangsung antara pasangan molekul berikut.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Molekul nonpolar dan molekul nonpolar',
          answer: 'Gaya dispersi (gaya London)',
          principle:
            'Molekul nonpolar tidak memiliki dipol permanen; gaya tarik di antaranya berasal dari dipol sesaat dan dipol terimbas.',
          solution:
            'Awan elektron molekul nonpolar dapat berfluktuasi sehingga membentuk dipol sesaat, yang mengimbas dipol pada molekul nonpolar di sebelahnya. Gaya tarik-menarik lemah yang timbul adalah **gaya dispersi (gaya London)**.',
          rubric: [{ code: 'A1', text: 'Menyebutkan gaya dispersi (gaya London) dan menjelaskan dipol sesaat-dipol terimbas' }]
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Molekul polar dan molekul polar',
          answer: 'Gaya dipol–dipol',
          principle:
            'Molekul polar memiliki dipol permanen sehingga kutub positif satu molekul menarik kutub negatif molekul lain.',
          solution:
            'Molekul polar memiliki dipol permanen ($\\delta^+$ dan $\\delta^-$). Gaya tarik elektrostatik antara kutub positif satu molekul dan kutub negatif molekul lain disebut **gaya dipol–dipol**.',
          rubric: [{ code: 'A1', text: 'Menyebutkan gaya dipol–dipol dan menjelaskan interaksi dipol permanen' }]
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Molekul polar dan molekul nonpolar',
          answer: 'Gaya dipol–dipol terinduksi (dipol terimbas)',
          principle:
            'Dipol permanen molekul polar dapat mengimbas awan elektron molekul nonpolar sehingga terbentuk dipol terinduksi.',
          solution:
            'Dipol permanen molekul polar mengimbas awan elektron molekul nonpolar di dekatnya sehingga terbentuk dipol terinduksi (sementara). Gaya tarik yang timbul adalah **gaya dipol–dipol terinduksi**.',
          rubric: [{ code: 'A1', text: 'Menyebutkan gaya dipol–dipol terinduksi dan menjelaskan peran dipol permanen yang mengimbas molekul nonpolar' }]
        }
      ]
    },
    {
      no: 15,
      title: 'Interaksi HCl dengan O2',
      marks: 3,
      stem: 'Pernyataan: "Molekul $\\text{HCl}$ akan membentuk gaya dipol–dipol terinduksi apabila berinteraksi dengan molekul $\\text{O}_2$."',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan apakah pernyataan tersebut Benar atau Salah, kemudian jelaskan alasan Anda!',
          answer: 'Benar',
          principle:
            'Interaksi antara molekul polar dan molekul nonpolar menghasilkan gaya dipol–dipol terinduksi.',
          solution:
            'Molekul $\\text{HCl}$ bersifat polar karena $\\text{Cl}$ jauh lebih elektronegatif daripada $\\text{H}$ sehingga terdapat dipol permanen. Molekul $\\text{O}_2$ bersifat nonpolar karena tersusun dari dua atom identik sehingga tidak ada dipol permanen.\n\nInteraksi molekul polar ($\\text{HCl}$) dengan molekul nonpolar ($\\text{O}_2$) menghasilkan **gaya dipol–dipol terinduksi**. Pernyataan tersebut **Benar**.',
          rubric: [
            { code: 'A1', text: 'Menentukan pilihan Benar' },
            { code: 'B1', text: 'Mengidentifikasi $\\text{HCl}$ sebagai molekul polar (perbedaan keelektronegatifan H dan Cl) dan $\\text{O}_2$ sebagai molekul nonpolar' },
            { code: 'B1', text: 'Menyimpulkan bahwa interaksi polar–nonpolar menghasilkan gaya dipol–dipol terinduksi' }
          ]
        }
      ]
    },
    {
      no: 16,
      title: 'Ikatan Hidrogen pada HF dan CH3OH',
      marks: 3,
      stem: 'Pernyataan: "Contoh senyawa yang antarmolekulnya dapat membentuk ikatan hidrogen adalah $\\text{HF}$ dan $\\text{CH}_3\\text{OH}$."',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan apakah pernyataan tersebut Benar atau Salah, kemudian jelaskan alasan Anda!',
          answer: 'Benar',
          principle:
            'Ikatan hidrogen antarmolekul terjadi jika atom H terikat langsung pada atom yang sangat elektronegatif dan kecil (F, O, atau N) dan tertarik pada pasangan elektron bebas atom F, O, atau N molekul lain.',
          solution:
            'Syarat ikatan hidrogen: atom hidrogen terikat langsung pada atom $\\text{F}$, $\\text{O}$, atau $\\text{N}$.\n\n- Pada $\\text{HF}$, atom H terikat langsung pada atom F.\n- Pada $\\text{CH}_3\\text{OH}$ terdapat gugus $-\\text{OH}$, yaitu atom H terikat langsung pada atom O.\n\nKeduanya memenuhi syarat sehingga antarmolekulnya dapat membentuk ikatan hidrogen. Pernyataan tersebut **Benar**.',
          rubric: [
            { code: 'A1', text: 'Menentukan pilihan Benar' },
            { code: 'B1', text: 'Menyebutkan syarat ikatan hidrogen (H terikat langsung pada F, O, atau N)' },
            { code: 'B1', text: 'Menerapkan syarat tersebut pada $\\text{HF}$ (H–F) dan $\\text{CH}_3\\text{OH}$ (H–O pada gugus $-\\text{OH}$)' }
          ]
        }
      ]
    },
    {
      no: 17,
      title: 'Gaya Antarmolekul dan Titik Didih',
      marks: 3,
      stem: 'Pernyataan: "Semakin kuat gaya tarik-menarik antarmolekul suatu zat, maka semakin tinggi titik didihnya."',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan apakah pernyataan tersebut Benar atau Salah, kemudian jelaskan alasan Anda!',
          answer: 'Benar',
          principle:
            'Titik didih ditentukan oleh energi yang diperlukan untuk mengatasi gaya antarmolekul agar molekul-molekul terlepas menjadi fase gas.',
          solution:
            'Saat mendidih, molekul-molekul zat cair berubah menjadi gas sehingga gaya tarik-menarik antarmolekul harus diatasi. Semakin kuat gaya antarmolekul, semakin besar energi kalor yang diperlukan untuk memutuskannya, sehingga zat tersebut baru mendidih pada suhu yang lebih tinggi. Pernyataan tersebut **Benar**.',
          rubric: [
            { code: 'A1', text: 'Menentukan pilihan Benar' },
            { code: 'B1', text: 'Menjelaskan bahwa gaya antarmolekul harus diputuskan agar molekul lepas menjadi fase gas' },
            { code: 'B1', text: 'Menghubungkan gaya antarmolekul yang lebih kuat dengan energi kalor yang lebih besar sehingga titik didih lebih tinggi' }
          ]
        }
      ]
    },
    {
      no: 18,
      title: 'Syarat Tercapainya Kesetimbangan Dinamis',
      marks: 3,
      stem: 'Pada reaksi bolak-balik (reversibel), pereaksi dapat berubah menjadi hasil reaksi dan hasil reaksi dapat kembali menjadi pereaksi.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Jelaskan kapan suatu reaksi bolak-balik (reversibel) akan mencapai keadaan kesetimbangan kimia dinamis!',
          answer:
            'Kesetimbangan dinamis tercapai ketika laju reaksi maju sama dengan laju reaksi balik ($v_{\\text{maju}} = v_{\\text{balik}}$) dalam sistem tertutup pada suhu tetap.',
          principle:
            'Kesetimbangan kimia dinamis: laju reaksi maju sama dengan laju reaksi balik sehingga konsentrasi zat-zat tidak berubah secara makroskopik, meskipun reaksi tetap berlangsung dua arah.',
          solution:
            'Pada awal reaksi, laju reaksi maju besar dan laju reaksi balik kecil. Seiring berjalannya waktu laju maju turun dan laju balik naik. Pada sistem tertutup dan suhu tetap, keadaan **kesetimbangan dinamis** tercapai ketika\n$$v_{\\text{maju}} = v_{\\text{balik}}$$\ndengan kata lain laju pembentukan produk sama dengan laju penguraiannya kembali menjadi pereaksi. Pada kondisi ini konsentrasi pereaksi dan hasil reaksi tidak berubah lagi (secara makroskopik), meskipun secara mikroskopik reaksi tetap berlangsung dalam dua arah.',
          rubric: [
            { code: 'B1', text: 'Menyebutkan syarat $v_{\\text{maju}} = v_{\\text{balik}}$' },
            { code: 'B1', text: 'Menjelaskan bahwa laju pembentukan produk sama dengan laju penguraian produk kembali menjadi pereaksi' },
            { code: 'B1', text: 'Menyebutkan kondisi sistem tertutup, suhu tetap, dan konsentrasi zat tidak berubah secara makroskopik' }
          ]
        }
      ]
    },
    {
      no: 19,
      title: 'Tetapan Kesetimbangan Heterogen NH4HS',
      marks: 3,
      stem: 'Pada penguraian padatan amonium hidrogen sulfida terjadi kesetimbangan berikut:\n$$\\text{NH}_4\\text{HS}(s) \\rightleftharpoons \\text{NH}_3(g) + \\text{H}_2\\text{S}(g)$$',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan rumus tetapan kesetimbangan konsentrasi ($K_c$) dan tetapan kesetimbangan tekanan ($K_p$)!',
          answer: '$K_c = [\\text{NH}_3][\\text{H}_2\\text{S}]$ dan $K_p = P_{\\text{NH}_3} \\times P_{\\text{H}_2\\text{S}}$',
          principle:
            'Pada kesetimbangan heterogen, zat padat dan cairan murni tidak dimasukkan ke dalam rumus $K_c$ maupun $K_p$; hanya zat berwujud gas (dan larutan) yang diperhitungkan.',
          solution:
            'Konsentrasi dan tekanan parsial zat padat murni bernilai tetap sehingga $\\text{NH}_4\\text{HS}(s)$ tidak ditulis dalam rumus tetapan kesetimbangan. Hanya gas yang diperhitungkan, masing-masing dipangkatkan koefisien reaksinya ($1$):\n$$K_c = [\\text{NH}_3][\\text{H}_2\\text{S}]$$\n$$K_p = P_{\\text{NH}_3} \\times P_{\\text{H}_2\\text{S}}$$',
          rubric: [
            { code: 'B1', text: 'Menjelaskan bahwa zat padat $\\text{NH}_4\\text{HS}(s)$ tidak disertakan dalam rumus tetapan kesetimbangan' },
            { code: 'A1', text: 'Menuliskan $K_c = [\\text{NH}_3][\\text{H}_2\\text{S}]$ dengan benar' },
            { code: 'A1', text: 'Menuliskan $K_p = P_{\\text{NH}_3} \\times P_{\\text{H}_2\\text{S}}$ dengan benar' }
          ]
        }
      ]
    },
    {
      no: 20,
      title: 'Tetapan Kesetimbangan Konsentrasi Sintesis Amonia',
      marks: 4,
      stem: 'Dalam wadah tertutup bervolume $4$ liter terdapat kesetimbangan:\n$$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$$\nPada saat setimbang terdapat $0{,}8\\ \\text{mol}$ gas $\\text{NH}_3$, $0{,}4\\ \\text{mol}$ gas $\\text{N}_2$, dan $0{,}8\\ \\text{mol}$ gas $\\text{H}_2$.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Tentukan nilai tetapan kesetimbangan ($K_c$) untuk reaksi tersebut!',
          answer: '$K_c = 50$ (satuan $\\text{M}^{-2}$)',
          principle:
            'Untuk $a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C}$, $K_c = \\frac{[\\text{C}]^c}{[\\text{A}]^a[\\text{B}]^b}$ dengan konsentrasi dalam molaritas pada keadaan setimbang.',
          solution:
            'Konsentrasi saat setimbang ($V = 4\\ \\text{L}$):\n$$[\\text{NH}_3] = \\frac{0{,}8}{4} = 0{,}2\\ \\text{M},\\quad [\\text{N}_2] = \\frac{0{,}4}{4} = 0{,}1\\ \\text{M},\\quad [\\text{H}_2] = \\frac{0{,}8}{4} = 0{,}2\\ \\text{M}$$\n$$K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3} = \\frac{(0{,}2)^2}{(0{,}1)(0{,}2)^3} = \\frac{0{,}04}{0{,}1 \\times 0{,}008} = \\frac{0{,}04}{0{,}0008} = 50$$\nKarena $\\Delta n = 2 - 4 = -2$, satuan $K_c$ adalah $\\text{M}^{-2}$ ($\\text{L}^2/\\text{mol}^2$); pada kunci sumber nilainya dinyatakan tanpa satuan.',
          rubric: [
            { code: 'M1', text: 'Menghitung molaritas masing-masing gas saat setimbang ($0{,}2$; $0{,}1$; $0{,}2\\ \\text{M}$)' },
            { code: 'M1', text: 'Menuliskan rumus $K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$ sesuai koefisien' },
            { code: 'M1', text: 'Menyubstitusikan angka dengan tepat' },
            { code: 'A1', text: 'Menghitung $K_c = 50$' }
          ]
        }
      ]
    },
    {
      no: 21,
      title: 'Hubungan Kc dan Kp pada Penguraian PCl5',
      marks: 4,
      stem: 'Diketahui reaksi kesetimbangan:\n$$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$$\nPada suhu ruang $227^\\circ\\text{C}$ harga $K_c = 0{,}5$. ($R = 0{,}082\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$)',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Tentukan nilai $K_p$!',
          answer: '$K_p = 20{,}5$',
          principle:
            'Hubungan tetapan kesetimbangan konsentrasi dan tekanan: $K_p = K_c\\,(RT)^{\\Delta n}$, dengan $\\Delta n$ = jumlah koefisien gas produk $-$ jumlah koefisien gas pereaksi dan $T$ dalam kelvin.',
          solution:
            'Suhu mutlak: $T = 227 + 273 = 500\\ \\text{K}$.\n\nSelisih koefisien gas: $\\Delta n = (1 + 1) - 1 = 1$.\n\n$$K_p = K_c\\,(RT)^{\\Delta n} = 0{,}5 \\times (0{,}082 \\times 500)^1 = 0{,}5 \\times 41 = 20{,}5$$\nCatatan: karena $\\Delta n = 1$, $K_p$ bersatuan atm; $K_c = 0{,}5$ hanya memiliki 1 angka penting, sehingga nilai $20{,}5$ pada kunci dapat dibaca sebagai sekitar $2 \\times 10^{1}$.',
          rubric: [
            { code: 'M1', text: 'Mengubah suhu ke kelvin, $T = 500\\ \\text{K}$' },
            { code: 'M1', text: 'Menghitung $\\Delta n = 1$' },
            { code: 'M1', text: 'Menuliskan rumus $K_p = K_c(RT)^{\\Delta n}$ dan menyubstitusikan angka' },
            { code: 'A1', text: 'Menghitung $K_p = 20{,}5$' }
          ]
        }
      ]
    },
    {
      no: 22,
      title: 'Pergeseran Kesetimbangan Esterifikasi',
      marks: 3,
      stem: 'Reaksi kesetimbangan esterifikasi berlangsung sebagai berikut:\n$$\\text{CH}_3\\text{COOH}(aq) + \\text{C}_2\\text{H}_5\\text{OH}(aq) \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5(aq) + \\text{H}_2\\text{O}(l)$$\nPernyataan: "Berdasarkan asas Le Chatelier, jika konsentrasi $\\text{CH}_3\\text{COOH}$ diperbesar, maka konsentrasi $\\text{CH}_3\\text{COOC}_2\\text{H}_5$ bertambah."',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan apakah pernyataan tersebut Benar atau Salah, kemudian jelaskan alasan Anda!',
          answer: 'Benar',
          principle:
            'Asas Le Chatelier: jika pada sistem setimbang diberi gangguan (aksi), sistem bergeser untuk mengurangi pengaruh gangguan tersebut; penambahan konsentrasi suatu zat menggeser kesetimbangan ke arah yang menggunakan zat itu.',
          solution:
            'Penambahan konsentrasi pereaksi $\\text{CH}_3\\text{COOH}$ merupakan gangguan. Sistem menanggapinya dengan menggeser kesetimbangan ke arah yang mengurangi kelebihan $\\text{CH}_3\\text{COOH}$, yaitu ke kanan (arah produk). Akibatnya $\\text{CH}_3\\text{COOC}_2\\text{H}_5$ terbentuk lebih banyak sehingga konsentrasinya bertambah. Pernyataan tersebut **Benar**.',
          rubric: [
            { code: 'A1', text: 'Menentukan pilihan Benar' },
            { code: 'B1', text: 'Menjelaskan bahwa penambahan $[\\text{CH}_3\\text{COOH}]$ menggeser kesetimbangan ke kanan (arah produk) untuk mengurangi kelebihan pereaksi' },
            { code: 'B1', text: 'Menyimpulkan bahwa pergeseran ke kanan menambah konsentrasi $\\text{CH}_3\\text{COOC}_2\\text{H}_5$' }
          ]
        }
      ]
    },
    {
      no: 23,
      title: 'Molaritas Larutan Glukosa',
      marks: 4,
      stem: 'Sebanyak $9$ gram glukosa ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) dilarutkan ke dalam air hingga volume larutan menjadi $250\\ \\text{mL}$. ($M_r$ glukosa $= 180$)',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Hitunglah konsentrasi (molaritas) larutan glukosa tersebut!',
          answer: '$0{,}2\\ \\text{M}$',
          principle:
            'Molaritas $M = \\frac{n}{V(\\text{L})}$, dengan $n = \\frac{\\text{massa}}{M_r}$.',
          solution:
            'Jumlah mol glukosa:\n$$n = \\frac{9\\ \\text{g}}{180\\ \\text{g/mol}} = 0{,}05\\ \\text{mol}$$\nVolume larutan: $V = 250\\ \\text{mL} = 0{,}25\\ \\text{L}$.\n$$M = \\frac{n}{V} = \\frac{0{,}05\\ \\text{mol}}{0{,}25\\ \\text{L}} = 0{,}2\\ \\text{M}$$\n(Setara dengan $M = \\frac{9}{180} \\times \\frac{1000}{250} = 0{,}2\\ \\text{M}$.)',
          rubric: [
            { code: 'M1', text: 'Menuliskan rumus molaritas $M = \\frac{n}{V}$ dengan $n = \\frac{\\text{massa}}{M_r}$' },
            { code: 'M1', text: 'Menghitung mol glukosa $= 0{,}05\\ \\text{mol}$' },
            { code: 'M1', text: 'Mengonversi volume ($250\\ \\text{mL} = 0{,}25\\ \\text{L}$) dan menyubstitusikan' },
            { code: 'A1', text: 'Menghitung molaritas $= 0{,}2\\ \\text{M}$' }
          ]
        }
      ]
    },
    {
      no: 24,
      title: 'Grafik Laju terhadap Konsentrasi Reaksi Orde Satu',
      marks: 3,
      stem: 'Pada suatu reaksi orde $1$ terhadap pereaksi A berlaku persamaan laju $v = k[\\text{A}]$.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Gambarkan grafik hubungan laju reaksi ($v$) terhadap konsentrasi pereaksi ($[\\text{A}]$) untuk reaksi orde $1$, dan jelaskan secara tertulis bentuk grafik tersebut (sumbu, titik awal, dan kemiringan garis)!',
          answer:
            'Grafik berupa garis lurus miring ke atas yang berawal dari titik asal $(0, 0)$, dengan $[\\text{A}]$ pada sumbu mendatar dan $v$ pada sumbu tegak (gradien $= k$).',
          principle:
            'Untuk reaksi orde $1$, $v = k[\\text{A}]^1$, yaitu $v$ berbanding lurus dengan $[\\text{A}]$.',
          solution:
            'Letakkan $[\\text{A}]$ pada sumbu mendatar dan $v$ pada sumbu tegak, masing-masing diberi label.\n\nKarena $v = k[\\text{A}]$ merupakan persamaan garis lurus $y = kx$:\n- bila $[\\text{A}] = 0$ maka $v = 0$, sehingga garis melalui titik asal $(0, 0)$;\n- gradien garis sama dengan tetapan laju $k$ (positif), sehingga garis miring ke atas;\n- bila $[\\text{A}]$ dilipatduakan maka $v$ juga dilipatduakan.\n\nJadi grafiknya adalah garis lurus miring ke atas dari titik asal $(0, 0)$ ke kanan atas. (Sebagai pembanding: orde $0$ berupa garis mendatar, orde $2$ berupa kurva parabola.)',
          rubric: [
            { code: 'B1', text: 'Menetapkan sumbu dengan benar: $[\\text{A}]$ pada sumbu mendatar dan $v$ pada sumbu tegak' },
            { code: 'B1', text: 'Menyatakan grafik berupa garis lurus yang melalui titik asal $(0, 0)$' },
            { code: 'B1', text: 'Menjelaskan bahwa garis miring ke atas (gradien $= k$) karena $v$ berbanding lurus dengan $[\\text{A}]$' }
          ]
        }
      ]
    },
    {
      no: 25,
      title: 'Notasi Laju Reaksi dan Persamaan Reaksi',
      marks: 3,
      stem: 'Laju reaksi dari suatu reaksi kimia dinotasikan sebagai berikut:\n$$v = -\\frac{\\Delta[\\text{P}]}{\\Delta t},\\quad v = -\\frac{\\Delta[\\text{Q}]}{\\Delta t},\\quad v = +\\frac{\\Delta[\\text{R}]}{\\Delta t},\\quad v = +\\frac{\\Delta[\\text{S}]}{\\Delta t}$$\nPernyataan: "Persamaan reaksi yang sesuai untuk notasi laju reaksi di atas adalah $\\text{R}(g) + \\text{S}(g) \\longrightarrow \\text{P}(g) + \\text{Q}(g)$."',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan apakah pernyataan tersebut Benar atau Salah, kemudian jelaskan alasan Anda!',
          answer: 'Salah',
          principle:
            'Dalam ungkapan laju reaksi, tanda negatif menyatakan pengurangan konsentrasi pereaksi, sedangkan tanda positif menyatakan penambahan konsentrasi hasil reaksi.',
          solution:
            'Tanda negatif ($-$) pada $v = -\\frac{\\Delta[\\text{P}]}{\\Delta t}$ dan $v = -\\frac{\\Delta[\\text{Q}]}{\\Delta t}$ menunjukkan bahwa $[\\text{P}]$ dan $[\\text{Q}]$ berkurang, sehingga P dan Q adalah pereaksi. Tanda positif ($+$) pada $\\text{R}$ dan $\\text{S}$ menunjukkan bahwa $[\\text{R}]$ dan $[\\text{S}]$ bertambah, sehingga R dan S adalah hasil reaksi.\n\nKoefisien semua zat sama ($1$) karena ungkapan lajunya tidak memuat faktor pembagi. Persamaan reaksi yang sesuai adalah\n$$\\text{P}(g) + \\text{Q}(g) \\longrightarrow \\text{R}(g) + \\text{S}(g)$$\nyang merupakan kebalikan dari persamaan pada pernyataan. Jadi pernyataan tersebut **Salah**.',
          rubric: [
            { code: 'A1', text: 'Menentukan pilihan Salah' },
            { code: 'B1', text: 'Menjelaskan makna tanda negatif (pereaksi berkurang: P, Q) dan tanda positif (hasil reaksi bertambah: R, S)' },
            { code: 'B1', text: 'Menuliskan persamaan reaksi yang benar $\\text{P}(g) + \\text{Q}(g) \\longrightarrow \\text{R}(g) + \\text{S}(g)$' }
          ]
        }
      ]
    },
    {
      no: 26,
      title: 'Persamaan Laju dari Orde Reaksi yang Diketahui',
      marks: 3,
      stem: 'Perhatikan persamaan reaksi berikut:\n$$2\\text{A}(g) + \\text{B}(g) \\longrightarrow 2\\text{C}(g)$$\nDiperoleh data bahwa reaksi tersebut merupakan orde $1$ terhadap pereaksi A dan orde total reaksi adalah $3$.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan rumus persamaan laju reaksinya!',
          answer: '$v = k[\\text{A}][\\text{B}]^2$',
          principle:
            'Persamaan laju $v = k[\\text{A}]^x[\\text{B}]^y$ dengan orde total $= x + y$; orde reaksi ditentukan secara eksperimen, bukan dari koefisien persamaan reaksi.',
          solution:
            'Misalkan $v = k[\\text{A}]^x[\\text{B}]^y$. Diketahui orde terhadap A: $x = 1$ dan orde total $x + y = 3$.\n$$1 + y = 3 \\implies y = 2$$\nJadi orde terhadap B adalah $2$ dan persamaan lajunya\n$$v = k[\\text{A}][\\text{B}]^2$$\n(Orde tidak sama dengan koefisien persamaan reaksi karena reaksi tidak harus berlangsung dalam satu tahap.)',
          rubric: [
            { code: 'M1', text: 'Menuliskan $v = k[\\text{A}]^x[\\text{B}]^y$ dengan $x = 1$ dan orde total $x + y = 3$' },
            { code: 'A1', text: 'Menentukan orde terhadap B, $y = 2$' },
            { code: 'A1', text: 'Menuliskan persamaan laju $v = k[\\text{A}][\\text{B}]^2$ secara lengkap' }
          ]
        }
      ]
    },
    {
      no: 27,
      title: 'Orde Reaksi NO dan Cl2 dari Data Percobaan',
      marks: 4,
      stem: 'Pada reaksi $2\\text{NO}(g) + \\text{Cl}_2(g) \\longrightarrow 2\\text{NOCl}(g)$ diperoleh data percobaan sebagai berikut:\n\n| No. | $[\\text{NO}]$ ($\\text{M}$) | $[\\text{Cl}_2]$ ($\\text{M}$) | Laju reaksi, $v$ ($\\text{M/s}$) |\n| :---: | :---: | :---: | :---: |\n| 1 | 0,1 | 0,1 | 4 |\n| 2 | 0,1 | 0,2 | 8 |\n| 3 | 0,1 | 0,3 | 12 |\n| 4 | 0,2 | 0,1 | 16 |\n| 5 | 0,3 | 0,1 | 36 |',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Tentukan orde reaksi terhadap $\\text{NO}$, orde reaksi terhadap $\\text{Cl}_2$, dan orde reaksi total dari data percobaan di atas!',
          answer: 'Orde terhadap $\\text{NO} = 2$; orde terhadap $\\text{Cl}_2 = 1$; orde total $= 3$',
          principle:
            'Orde terhadap suatu pereaksi ditentukan dengan membandingkan dua percobaan yang konsentrasi pereaksi lainnya tetap: $\\left(\\frac{[\\text{X}]_b}{[\\text{X}]_a}\\right)^{n} = \\frac{v_b}{v_a}$.',
          solution:
            'Misalkan $v = k[\\text{NO}]^x[\\text{Cl}_2]^y$.\n\n**Orde terhadap $\\text{NO}$** (Percobaan 1 dan 4, $[\\text{Cl}_2]$ tetap $= 0{,}1\\ \\text{M}$):\n$$\\left(\\frac{0{,}2}{0{,}1}\\right)^x = \\frac{16}{4} \\implies 2^x = 4 \\implies x = 2$$\nPemeriksaan dengan Percobaan 1 dan 5: $\\left(\\frac{0{,}3}{0{,}1}\\right)^2 = 9 = \\frac{36}{4}$ (konsisten).\n\n**Orde terhadap $\\text{Cl}_2$** (Percobaan 1 dan 2, $[\\text{NO}]$ tetap $= 0{,}1\\ \\text{M}$):\n$$\\left(\\frac{0{,}2}{0{,}1}\\right)^y = \\frac{8}{4} \\implies 2^y = 2 \\implies y = 1$$\nPemeriksaan dengan Percobaan 1 dan 3: $\\left(\\frac{0{,}3}{0{,}1}\\right)^1 = 3 = \\frac{12}{4}$ (konsisten).\n\n**Orde total** $= x + y = 2 + 1 = 3$, sehingga $v = k[\\text{NO}]^2[\\text{Cl}_2]$ dengan $k = \\frac{4}{(0{,}1)^2(0{,}1)} = 4\\,000\\ \\text{M}^{-2}\\,\\text{s}^{-1}$.',
          rubric: [
            { code: 'M1', text: 'Membandingkan Percobaan 1 dan 4 ($[\\text{Cl}_2]$ tetap) untuk menentukan orde $\\text{NO}$' },
            { code: 'M1', text: 'Membandingkan Percobaan 1 dan 2 ($[\\text{NO}]$ tetap) untuk menentukan orde $\\text{Cl}_2$' },
            { code: 'A1', text: 'Memperoleh orde terhadap $\\text{NO} = 2$ dan terhadap $\\text{Cl}_2 = 1$' },
            { code: 'A1', text: 'Menghitung orde total $= 3$' }
          ]
        }
      ]
    },
    {
      no: 28,
      title: 'Laju Reaksi pada Konsentrasi Baru dari Data Percobaan',
      marks: 4,
      stem: 'Perhatikan data percobaan laju reaksi $\\text{M}(g) + 2\\text{N}(g) \\longrightarrow \\text{MN}_2(g)$ berikut:\n\n| No. | $[\\text{M}]$ ($\\text{M}$) | $[\\text{N}]$ ($\\text{M}$) | $v$ ($\\text{M/s}$) |\n| :---: | :---: | :---: | :---: |\n| 1 | 0,1 | 0,1 | $2 \\times 10^{-3}$ |\n| 2 | 0,2 | 0,1 | $4 \\times 10^{-3}$ |\n| 3 | 0,1 | 0,2 | $8 \\times 10^{-3}$ |',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Jika $[\\text{M}]$ dan $[\\text{N}]$ masing-masing diubah menjadi $0{,}3\\ \\text{M}$, hitunglah nilai laju reaksinya ($v$)!',
          answer: '$v = 0{,}054\\ \\text{M/s} = 5{,}4 \\times 10^{-2}\\ \\text{M/s}$',
          principle:
            'Tentukan orde dari data (membandingkan dua percobaan dengan satu variabel berubah), hitung tetapan laju $k$, lalu substitusikan konsentrasi baru ke persamaan laju.',
          solution:
            'Misalkan $v = k[\\text{M}]^x[\\text{N}]^y$.\n\nOrde terhadap $\\text{M}$ (Percobaan 1 dan 2, $[\\text{N}]$ tetap):\n$$\\left(\\frac{0{,}2}{0{,}1}\\right)^x = \\frac{4 \\times 10^{-3}}{2 \\times 10^{-3}} = 2 \\implies x = 1$$\nOrde terhadap $\\text{N}$ (Percobaan 1 dan 3, $[\\text{M}]$ tetap):\n$$\\left(\\frac{0{,}2}{0{,}1}\\right)^y = \\frac{8 \\times 10^{-3}}{2 \\times 10^{-3}} = 4 \\implies y = 2$$\nPersamaan laju $v = k[\\text{M}][\\text{N}]^2$. Tetapan laju dari Percobaan 1:\n$$k = \\frac{2 \\times 10^{-3}}{(0{,}1)(0{,}1)^2} = \\frac{2 \\times 10^{-3}}{10^{-3}} = 2\\ \\text{M}^{-2}\\,\\text{s}^{-1}$$\nUntuk $[\\text{M}] = [\\text{N}] = 0{,}3\\ \\text{M}$:\n$$v = 2 \\times (0{,}3)(0{,}3)^2 = 2 \\times 0{,}027 = 0{,}054\\ \\text{M/s} = 5{,}4 \\times 10^{-2}\\ \\text{M/s}$$\n(Pemeriksaan dengan perbandingan: konsentrasi M naik $3\\times$ dan N naik $3\\times$ sehingga $v$ naik $3^1 \\times 3^2 = 27$ kali, yaitu $27 \\times 2 \\times 10^{-3} = 0{,}054\\ \\text{M/s}$.)',
          rubric: [
            { code: 'M1', text: 'Menentukan orde terhadap $\\text{M}$ ($x = 1$) dan terhadap $\\text{N}$ ($y = 2$)' },
            { code: 'M1', text: 'Menghitung tetapan laju $k = 2\\ \\text{M}^{-2}\\,\\text{s}^{-1}$' },
            { code: 'M1', text: 'Menyubstitusikan $[\\text{M}] = [\\text{N}] = 0{,}3\\ \\text{M}$ ke persamaan laju' },
            { code: 'A1', text: 'Menghitung $v = 0{,}054\\ \\text{M/s}$ dengan satuan yang benar' }
          ]
        }
      ]
    },
    {
      no: 29,
      title: 'Pengaruh Kenaikan Suhu terhadap Laju Reaksi',
      marks: 4,
      stem: 'Laju reaksi dari suatu reaksi tertentu menjadi tiga kali lipat setiap kenaikan suhu $15^\\circ\\text{C}$. Suatu reaksi berlangsung pada suhu $25^\\circ\\text{C}$.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Jika suhu ditingkatkan menjadi $85^\\circ\\text{C}$, laju reaksi akan menjadi berapa kali lebih cepat dari semula?',
          answer: '$81$ kali',
          principle:
            'Jika laju menjadi $n$ kali lipat setiap kenaikan suhu $\\Delta T$, maka $v_2 = v_1 \\times n^{\\frac{T_2 - T_1}{\\Delta T}}$.',
          solution:
            'Diketahui $n = 3$, $\\Delta T = 15^\\circ\\text{C}$, $T_1 = 25^\\circ\\text{C}$, dan $T_2 = 85^\\circ\\text{C}$.\n$$\\frac{v_2}{v_1} = 3^{\\frac{85 - 25}{15}} = 3^{\\frac{60}{15}} = 3^4 = 81$$\nJadi laju reaksi menjadi $81$ kali lebih cepat dari semula.',
          rubric: [
            { code: 'M1', text: 'Menuliskan rumus $\\frac{v_2}{v_1} = n^{\\frac{T_2 - T_1}{\\Delta T}}$' },
            { code: 'M1', text: 'Menghitung selisih suhu dan pangkat $\\frac{85 - 25}{15} = 4$' },
            { code: 'M1', text: 'Menghitung $3^4$' },
            { code: 'A1', text: 'Menyimpulkan laju reaksi menjadi $81$ kali lebih cepat' }
          ]
        }
      ]
    }
  ]
};
