/**
 * Paket Soal Terstruktur: Termokimia Kimia Kelas XI – Latihan Uraian
 * Sumber: termokimia_11.pdf (Duta e-dukasi arsip latihan), "Latihan Soal Essay Termokimia", 20 butir.
 * Bahasa asli dipertahankan dalam Bahasa Indonesia sesuai dokumen sumber.
 * Seluruh hasil hitung (hukum Hess, entalpi pembentukan, energi ikatan, kalorimetri) telah dihitung ulang
 * secara mandiri dan sesuai dengan kunci sumber.
 */
export default {
  id: 'kim11-termokimia-latihan',
  slug: 'termokimia-xi-latihan',
  subject: 'kimia',
  grade: 11,
  track: 'kurikulum-merdeka',
  accessTier: 'free',
  topic: 'Termokimia Kimia Kelas XI',
  relatedChapterIds: ['kimia11-bab2-termokimia'],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'Kimia SMA',
  title: 'Termokimia Kimia Kelas XI – Latihan Uraian',
  totalMarks: 51,
  instructions:
    'Kerjakan seluruh 20 soal uraian termokimia berikut dengan langkah penyelesaian yang jelas, tanda perubahan entalpi yang tepat, dan satuan yang sesuai.',
  source: {
    org: 'Duta e-dukasi arsip latihan',
    file: 'termokimia_11.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Sistem Terbuka, Tertutup, dan Terisolasi',
      marks: 3,
      stem: 'Dalam kajian termokimia, bagian alam semesta yang diamati disebut sistem, sedangkan segala sesuatu di luar sistem disebut lingkungan.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Jelaskan perbedaan mendasar antara sistem terbuka, sistem tertutup, dan sistem terisolasi dalam kajian termokimia! Berikan satu contoh untuk masing-masing sistem tersebut.',
          answer:
            'Sistem terbuka: terjadi pertukaran massa dan energi dengan lingkungan (contoh: gelas berisi air panas tanpa tutup). Sistem tertutup: hanya terjadi pertukaran energi, massa tetap (contoh: gelas air panas yang ditutup rapat). Sistem terisolasi: tidak ada pertukaran massa maupun energi (contoh: termos air panas yang ideal).',
          principle:
            'Sistem diklasifikasikan berdasarkan ada tidaknya pertukaran materi (massa) dan energi antara sistem dengan lingkungannya.',
          solution:
            '- Sistem terbuka: massa dan energi dapat berpindah antara sistem dan lingkungan. Contoh: gelas berisi air panas tanpa tutup (uap air keluar dan kalor dilepas).\n- Sistem tertutup: hanya energi (kalor) yang dapat berpindah, sedangkan massa sistem tetap. Contoh: gelas air panas yang ditutup rapat.\n- Sistem terisolasi: tidak ada perpindahan massa maupun energi. Contoh: termos air panas yang ideal.',
          rubric: [
            { code: 'B1', text: 'Menjelaskan sistem terbuka (pertukaran massa dan energi) disertai contoh yang tepat' },
            { code: 'B1', text: 'Menjelaskan sistem tertutup (hanya pertukaran energi) disertai contoh yang tepat' },
            { code: 'B1', text: 'Menjelaskan sistem terisolasi (tanpa pertukaran massa dan energi) disertai contoh yang tepat' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Reaksi yang Menyebabkan Tabung Terasa Dingin',
      marks: 2,
      stem: 'Suatu eksperimen reaksi kimia di laboratorium menghasilkan tabung reaksi yang terasa dingin saat dipegang, dan termometer menunjukkan penurunan suhu.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Termasuk jenis reaksi apakah ini? Jelaskan aliran kalor yang terjadi dan tanda perubahan entalpinya ($\\Delta H$)!',
          answer: 'Reaksi endoterm; kalor mengalir dari lingkungan ke sistem; $\\Delta H > 0$ (bertanda positif).',
          principle:
            'Reaksi endoterm menyerap kalor dari lingkungan sehingga entalpi produk lebih besar daripada entalpi reaktan ($\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}} > 0$).',
          solution:
            'Penurunan suhu pada termometer dan rasa dingin pada tabung menunjukkan bahwa lingkungan kehilangan kalor. Kalor tersebut diserap oleh sistem (campuran reaksi), sehingga reaksi tergolong endoterm.\n\nKarena sistem menerima tambahan energi, entalpi akhir (produk) lebih besar daripada entalpi awal (reaktan):\n$$\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}} > 0$$\nJadi $\\Delta H$ bernilai positif.',
          rubric: [
            { code: 'B1', text: 'Menyimpulkan reaksi endoterm dan menjelaskan kalor mengalir dari lingkungan ke sistem (suhu lingkungan turun)' },
            { code: 'B1', text: 'Menyatakan $\\Delta H > 0$ (positif) dengan alasan entalpi produk lebih besar daripada entalpi reaktan' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Jenis-jenis Entalpi Molar Standar',
      marks: 3,
      stem: 'Dalam termokimia dikenal beberapa jenis perubahan entalpi standar yang dinamai menurut jenis reaksinya, yaitu pembentukan, penguraian, dan pembakaran.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Jelaskan perbedaan antara Entalpi Pembentukan Standar ($\\Delta H^\\circ_f$), Entalpi Penguraian Standar ($\\Delta H^\\circ_d$), dan Entalpi Pembakaran Standar ($\\Delta H^\\circ_c$)!',
          answer:
            '$\\Delta H^\\circ_f$: kalor yang menyertai pembentukan $1\\ \\text{mol}$ senyawa langsung dari unsur-unsurnya pada keadaan standar. $\\Delta H^\\circ_d$: kalor yang menyertai penguraian $1\\ \\text{mol}$ senyawa menjadi unsur-unsurnya (kebalikan $\\Delta H^\\circ_f$). $\\Delta H^\\circ_c$: kalor yang menyertai pembakaran sempurna $1\\ \\text{mol}$ zat dengan gas oksigen.',
          principle:
            'Ketiganya adalah perubahan entalpi molar (per $1\\ \\text{mol}$ zat yang ditentukan) pada keadaan standar, tetapi dibedakan oleh jenis reaksinya; $\\Delta H^\\circ_d$ sama besar dan berlawanan tanda dengan $\\Delta H^\\circ_f$.',
          solution:
            '- $\\Delta H^\\circ_f$ (pembentukan): perubahan entalpi pada pembentukan $1\\ \\text{mol}$ senyawa dari unsur-unsur penyusunnya yang berada dalam bentuk paling stabil pada keadaan standar (suhu $25^\\circ\\text{C}$, tekanan $1\\ \\text{atm}$). Contoh: $\\text{C}(s) + \\text{O}_2(g) \\longrightarrow \\text{CO}_2(g)$.\n- $\\Delta H^\\circ_d$ (penguraian): perubahan entalpi pada penguraian $1\\ \\text{mol}$ senyawa menjadi unsur-unsur penyusunnya; reaksinya kebalikan dari pembentukan sehingga $\\Delta H^\\circ_d = -\\Delta H^\\circ_f$.\n- $\\Delta H^\\circ_c$ (pembakaran): perubahan entalpi pada pembakaran sempurna $1\\ \\text{mol}$ zat dengan gas $\\text{O}_2$ (selalu eksoterm, $\\Delta H^\\circ_c < 0$).',
          rubric: [
            { code: 'B1', text: 'Mendefinisikan $\\Delta H^\\circ_f$ sebagai kalor pembentukan $1\\ \\text{mol}$ senyawa dari unsur-unsurnya pada keadaan standar' },
            { code: 'B1', text: 'Mendefinisikan $\\Delta H^\\circ_d$ sebagai kalor penguraian $1\\ \\text{mol}$ senyawa menjadi unsur-unsurnya (kebalikan $\\Delta H^\\circ_f$)' },
            { code: 'B1', text: 'Mendefinisikan $\\Delta H^\\circ_c$ sebagai kalor pembakaran sempurna $1\\ \\text{mol}$ zat dengan gas oksigen' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Persamaan Termokimia Pembakaran Metana',
      marks: 2,
      stem: 'Pembakaran sempurna $1\\ \\text{mol}$ gas metana ($\\text{CH}_4$) melepaskan kalor sebesar $890\\ \\text{kJ}$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Tuliskan persamaan termokimia untuk reaksi pembakaran sempurna tersebut!',
          answer:
            '$\\text{CH}_4(g) + 2\\text{O}_2(g) \\longrightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l)\\qquad \\Delta H = -890\\ \\text{kJ/mol}$',
          principle:
            'Reaksi yang melepaskan kalor bersifat eksoterm sehingga $\\Delta H$ bertanda negatif; persamaan termokimia harus setara, mencantumkan wujud zat, dan menyertakan nilai $\\Delta H$ sesuai jumlah mol pada koefisien.',
          solution:
            'Pembakaran sempurna hidrokarbon menghasilkan $\\text{CO}_2$ dan $\\text{H}_2\\text{O}$. Persamaan yang setara untuk $1\\ \\text{mol}$ $\\text{CH}_4$:\n$$\\text{CH}_4(g) + 2\\text{O}_2(g) \\longrightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l)$$\nKarena kalor dilepaskan ke lingkungan, reaksi bersifat eksoterm sehingga\n$$\\Delta H = -890\\ \\text{kJ/mol}\\ (\\text{per mol } \\text{CH}_4)$$',
          rubric: [
            { code: 'M1', text: 'Menuliskan persamaan reaksi yang setara dengan wujud zat: $\\text{CH}_4(g) + 2\\text{O}_2(g) \\longrightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l)$' },
            { code: 'A1', text: 'Mencantumkan $\\Delta H = -890\\ \\text{kJ}$ dengan tanda negatif (eksoterm)' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Kalor yang Diserap Air',
      marks: 2,
      stem: 'Sebanyak $100\\ \\text{mL}$ air dipanaskan di dalam suatu wadah sehingga suhunya naik dari $25^\\circ\\text{C}$ menjadi $35^\\circ\\text{C}$. Massa jenis air adalah $1\\ \\text{g/mL}$ dan kalor jenis air $4{,}2\\ \\text{J/g}^\\circ\\text{C}$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Hitunglah jumlah kalor yang diserap oleh air tersebut!',
          answer: '$q = 4200\\ \\text{J} = 4{,}2\\ \\text{kJ}$',
          principle: 'Kalor yang diserap atau dilepas zat dihitung dengan $q = m \\times c \\times \\Delta T$.',
          solution:
            'Massa air: $m = \\rho \\times V = 1\\ \\text{g/mL} \\times 100\\ \\text{mL} = 100\\ \\text{g}$.\n\nKenaikan suhu: $\\Delta T = 35^\\circ\\text{C} - 25^\\circ\\text{C} = 10^\\circ\\text{C}$.\n$$q = m \\times c \\times \\Delta T = 100\\ \\text{g} \\times 4{,}2\\ \\text{J/g}^\\circ\\text{C} \\times 10^\\circ\\text{C} = 4200\\ \\text{J} = 4{,}2\\ \\text{kJ}$$\nNilai $q$ positif karena air menyerap kalor.',
          rubric: [
            { code: 'M1', text: 'Menentukan $m = 100\\ \\text{g}$ dan $\\Delta T = 10^\\circ\\text{C}$ lalu menggunakan $q = m c \\Delta T$' },
            { code: 'A1', text: 'Menghitung $q = 4200\\ \\text{J} = 4{,}2\\ \\text{kJ}$' }
          ]
        }
      ]
    },
    {
      no: 6,
      title: 'Kalorimeter Sederhana: Entalpi Netralisasi HCl dan NaOH',
      marks: 4,
      stem: 'Ke dalam suatu kalorimeter sederhana direaksikan $50\\ \\text{mL}$ larutan $\\text{HCl}$ $1\\ \\text{M}$ dengan $50\\ \\text{mL}$ larutan $\\text{NaOH}$ $1\\ \\text{M}$. Reaksi tersebut menyebabkan suhu campuran naik dari $27^\\circ\\text{C}$ menjadi $32^\\circ\\text{C}$. Kalor jenis larutan dianggap sama dengan air, yaitu $4{,}2\\ \\text{J/g}^\\circ\\text{C}$, dan massa jenis larutan $1\\ \\text{g/mL}$.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Tentukan besarnya perubahan entalpi reaksi ($\\Delta H$) untuk per mol $\\text{H}_2\\text{O}$ yang terbentuk!',
          answer: '$\\Delta H = -42\\ \\text{kJ/mol}$',
          principle:
            'Pada kalorimeter sederhana (kalor yang diserap kalorimeter diabaikan), kalor reaksi $q_{\\text{reaksi}} = -q_{\\text{larutan}} = -m c \\Delta T$, dan $\\Delta H = \\frac{q_{\\text{reaksi}}}{n}$.',
          solution:
            'Massa larutan: $V = 50 + 50 = 100\\ \\text{mL}$, sehingga $m = 100\\ \\text{g}$. Kenaikan suhu: $\\Delta T = 32 - 27 = 5^\\circ\\text{C}$.\n$$q_{\\text{larutan}} = m c \\Delta T = 100 \\times 4{,}2 \\times 5 = 2100\\ \\text{J} = 2{,}1\\ \\text{kJ}$$\nKalor ini dilepas oleh reaksi, sehingga $q_{\\text{reaksi}} = -2{,}1\\ \\text{kJ}$.\n\nMol zat: $n_{\\text{HCl}} = 0{,}050\\ \\text{L} \\times 1\\ \\text{M} = 0{,}05\\ \\text{mol}$ dan $n_{\\text{NaOH}} = 0{,}05\\ \\text{mol}$. Persamaan reaksi: $\\text{HCl} + \\text{NaOH} \\longrightarrow \\text{NaCl} + \\text{H}_2\\text{O}$, sehingga keduanya habis bereaksi dan membentuk $0{,}05\\ \\text{mol}$ $\\text{H}_2\\text{O}$.\n$$\\Delta H = \\frac{q_{\\text{reaksi}}}{n_{\\text{H}_2\\text{O}}} = \\frac{-2{,}1\\ \\text{kJ}}{0{,}05\\ \\text{mol}} = -42\\ \\text{kJ/mol}$$',
          rubric: [
            { code: 'M1', text: 'Menentukan massa larutan $100\\ \\text{g}$ dan $\\Delta T = 5^\\circ\\text{C}$' },
            { code: 'M1', text: 'Menghitung $q = 2100\\ \\text{J} = 2{,}1\\ \\text{kJ}$ dan menyatakan $q_{\\text{reaksi}} = -2{,}1\\ \\text{kJ}$ (reaksi melepas kalor)' },
            { code: 'M1', text: 'Menentukan mol $\\text{H}_2\\text{O}$ yang terbentuk $= 0{,}05\\ \\text{mol}$ (pereaksi habis bereaksi)' },
            { code: 'A1', text: 'Menghitung $\\Delta H = -42\\ \\text{kJ/mol}$ dengan tanda negatif' }
          ]
        }
      ]
    },
    {
      no: 7,
      title: 'Hukum Hess: Entalpi Pembentukan Gas SO3',
      marks: 3,
      stem: 'Diketahui persamaan termokimia berikut:\n$$\\text{S}(s) + \\text{O}_2(g) \\longrightarrow \\text{SO}_2(g)\\qquad \\Delta H = -297\\ \\text{kJ}$$\n$$2\\text{SO}_2(g) + \\text{O}_2(g) \\longrightarrow 2\\text{SO}_3(g)\\qquad \\Delta H = -198\\ \\text{kJ}$$',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Berdasarkan Hukum Hess, tentukan nilai $\\Delta H$ untuk reaksi pembentukan gas $\\text{SO}_3$: $\\text{S}(s) + \\frac{3}{2}\\text{O}_2(g) \\longrightarrow \\text{SO}_3(g)$!',
          answer: '$\\Delta H = -396\\ \\text{kJ}$',
          principle:
            'Hukum Hess: perubahan entalpi suatu reaksi hanya bergantung pada keadaan awal dan akhir, sehingga dapat diperoleh dengan menjumlahkan reaksi-reaksi bertahap; membagi koefisien dengan faktor tertentu berarti membagi $\\Delta H$ dengan faktor yang sama.',
          solution:
            'Reaksi target memuat $1\\ \\text{mol}$ $\\text{SO}_3$ di ruas kanan dan $\\text{S}(s)$ di ruas kiri.\n\nReaksi 1 dibiarkan tetap:\n$$\\text{S}(s) + \\text{O}_2(g) \\longrightarrow \\text{SO}_2(g)\\qquad \\Delta H = -297\\ \\text{kJ}$$\nReaksi 2 dibagi 2 agar koefisien $\\text{SO}_3$ menjadi 1 (nilai $\\Delta H$ ikut dibagi 2):\n$$\\text{SO}_2(g) + \\frac{1}{2}\\text{O}_2(g) \\longrightarrow \\text{SO}_3(g)\\qquad \\Delta H = \\frac{-198}{2} = -99\\ \\text{kJ}$$\nJumlahkan kedua reaksi ($\\text{SO}_2$ saling meniadakan):\n$$\\text{S}(s) + \\frac{3}{2}\\text{O}_2(g) \\longrightarrow \\text{SO}_3(g)\\qquad \\Delta H = -297 + (-99) = -396\\ \\text{kJ}$$',
          rubric: [
            { code: 'M1', text: 'Membagi reaksi 2 dengan 2 sehingga diperoleh $\\text{SO}_2 + \\frac{1}{2}\\text{O}_2 \\longrightarrow \\text{SO}_3$ dengan $\\Delta H = -99\\ \\text{kJ}$' },
            { code: 'M1', text: 'Menjumlahkan reaksi 1 dan reaksi yang telah dibagi serta mencoret $\\text{SO}_2$' },
            { code: 'A1', text: 'Memperoleh $\\Delta H = -396\\ \\text{kJ}$' }
          ]
        }
      ]
    },
    {
      no: 8,
      title: 'Entalpi Reaksi dari Entalpi Pembentukan Standar',
      marks: 3,
      stem: 'Diketahui data entalpi pembentukan standar ($\\Delta H^\\circ_f$):\n$\\text{CH}_4(g) = -75\\ \\text{kJ/mol}$\n$\\text{CO}_2(g) = -394\\ \\text{kJ/mol}$\n$\\text{H}_2\\text{O}(l) = -286\\ \\text{kJ/mol}$',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Hitunglah besarnya perubahan entalpi untuk reaksi: $\\text{CH}_4(g) + 2\\text{O}_2(g) \\longrightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l)$!',
          answer: '$\\Delta H = -891\\ \\text{kJ}$ (per mol $\\text{CH}_4$)',
          principle:
            'Perubahan entalpi reaksi dari data entalpi pembentukan: $\\Delta H^\\circ = \\sum \\Delta H^\\circ_f(\\text{produk}) - \\sum \\Delta H^\\circ_f(\\text{reaktan})$, dengan $\\Delta H^\\circ_f$ unsur bebas $= 0$ dan dikalikan koefisien reaksi.',
          solution:
            '$$\\Delta H = \\left[\\Delta H^\\circ_f\\,\\text{CO}_2 + 2\\,\\Delta H^\\circ_f\\,\\text{H}_2\\text{O}\\right] - \\left[\\Delta H^\\circ_f\\,\\text{CH}_4 + 2\\,\\Delta H^\\circ_f\\,\\text{O}_2\\right]$$\n$$\\Delta H = \\left[-394 + 2(-286)\\right] - \\left[-75 + 2(0)\\right]$$\n$$\\Delta H = (-394 - 572) - (-75) = -966 + 75 = -891\\ \\text{kJ}$$\n(Nilai $\\Delta H^\\circ_f$ untuk $\\text{O}_2(g)$ sebagai unsur bebas adalah nol.)',
          rubric: [
            { code: 'M1', text: 'Menuliskan $\\Delta H = \\sum \\Delta H^\\circ_f(\\text{produk}) - \\sum \\Delta H^\\circ_f(\\text{reaktan})$ dengan koefisien yang benar' },
            { code: 'M1', text: 'Menyubstitusikan $[-394 + 2(-286)] - [-75 + 2(0)]$ dengan $\\Delta H^\\circ_f\\ \\text{O}_2 = 0$' },
            { code: 'A1', text: 'Menghitung $\\Delta H = -891\\ \\text{kJ}$ (eksoterm)' }
          ]
        }
      ]
    },
    {
      no: 9,
      title: 'Tanda ΔH pada Reaksi Eksoterm',
      marks: 2,
      stem: 'Pada reaksi eksoterm, nilai perubahan entalpi sistem ($\\Delta H$) selalu bernilai negatif.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Mengapa hal tersebut terjadi? Jelaskan berdasarkan perbandingan entalpi reaktan dan entalpi produk!',
          answer: 'Pada reaksi eksoterm $H_{\\text{produk}} < H_{\\text{reaktan}}$, sehingga $\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}} < 0$ (negatif).',
          principle: 'Perubahan entalpi didefinisikan sebagai $\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}}$, dan reaksi eksoterm melepaskan kalor ke lingkungan.',
          solution:
            'Pada reaksi eksoterm, sistem melepaskan energi (dalam bentuk kalor) ke lingkungan. Karena energi keluar dari sistem, kandungan entalpi yang tersisa dalam produk menjadi lebih kecil daripada kandungan entalpi reaktan semula: $H_{\\text{produk}} < H_{\\text{reaktan}}$.\n\nKarena $\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}}$, selisih tersebut pasti bernilai negatif.',
          rubric: [
            { code: 'B1', text: 'Menjelaskan sistem melepaskan kalor sehingga $H_{\\text{produk}} < H_{\\text{reaktan}}$' },
            { code: 'B1', text: 'Menyimpulkan $\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}} < 0$ (negatif)' }
          ]
        }
      ]
    },
    {
      no: 10,
      title: 'Entalpi Reaksi dari Energi Ikatan Rata-rata',
      marks: 3,
      stem: 'Diketahui data energi ikatan rata-rata sebagai berikut:\n$\\text{C}{-}\\text{H} = 413\\ \\text{kJ/mol}$\n$\\text{Cl}{-}\\text{Cl} = 242\\ \\text{kJ/mol}$\n$\\text{C}{-}\\text{Cl} = 328\\ \\text{kJ/mol}$\n$\\text{H}{-}\\text{Cl} = 431\\ \\text{kJ/mol}$',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Tentukan nilai $\\Delta H$ untuk reaksi: $\\text{CH}_4 + \\text{Cl}_2 \\longrightarrow \\text{CH}_3\\text{Cl} + \\text{HCl}$!',
          answer: '$\\Delta H = -104\\ \\text{kJ/mol}$ (eksoterm)',
          principle:
            'Pada fase gas, $\\Delta H = \\sum E_{\\text{ikatan yang putus}} - \\sum E_{\\text{ikatan yang terbentuk}}$: pemutusan ikatan menyerap energi dan pembentukan ikatan melepaskan energi.',
          solution:
            'Ikatan yang putus (reaktan):\n- $4$ ikatan $\\text{C}{-}\\text{H}$: $4 \\times 413 = 1652\\ \\text{kJ}$\n- $1$ ikatan $\\text{Cl}{-}\\text{Cl}$: $1 \\times 242 = 242\\ \\text{kJ}$\n- Total energi pemutusan $= 1652 + 242 = 1894\\ \\text{kJ}$\n\nIkatan yang terbentuk (produk):\n- $3$ ikatan $\\text{C}{-}\\text{H}$: $3 \\times 413 = 1239\\ \\text{kJ}$\n- $1$ ikatan $\\text{C}{-}\\text{Cl}$: $1 \\times 328 = 328\\ \\text{kJ}$\n- $1$ ikatan $\\text{H}{-}\\text{Cl}$: $1 \\times 431 = 431\\ \\text{kJ}$\n- Total energi pembentukan $= 1239 + 328 + 431 = 1998\\ \\text{kJ}$\n$$\\Delta H = 1894 - 1998 = -104\\ \\text{kJ/mol}$$\nPemeriksaan: tiga ikatan $\\text{C}{-}\\text{H}$ tidak berubah sehingga saling meniadakan; hanya satu $\\text{C}{-}\\text{H}$ dan satu $\\text{Cl}{-}\\text{Cl}$ yang benar-benar putus, dan satu $\\text{C}{-}\\text{Cl}$ serta satu $\\text{H}{-}\\text{Cl}$ yang terbentuk: $(413 + 242) - (328 + 431) = 655 - 759 = -104\\ \\text{kJ/mol}$.',
          rubric: [
            { code: 'M1', text: 'Menghitung total energi ikatan yang putus (pereaksi) $= 1894\\ \\text{kJ}$' },
            { code: 'M1', text: 'Menghitung total energi ikatan yang terbentuk (produk) $= 1998\\ \\text{kJ}$' },
            { code: 'A1', text: 'Menghitung $\\Delta H = 1894 - 1998 = -104\\ \\text{kJ/mol}$ dengan tanda negatif' }
          ]
        }
      ]
    },
    {
      no: 11,
      title: 'Kalor Pembentukan 11 gram CO2',
      marks: 3,
      stem: 'Diketahui kalor pembentukan standar gas karbon dioksida ($\\text{CO}_2$) adalah $-394\\ \\text{kJ/mol}$. ($A_r$ $\\text{C} = 12$, $\\text{O} = 16$)',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Hitunglah jumlah kalor yang dilepaskan pada pembentukan $11$ gram gas $\\text{CO}_2$!',
          answer: '$98{,}5\\ \\text{kJ}$ dilepaskan ($q = -98{,}5\\ \\text{kJ}$)',
          principle:
            'Entalpi pembentukan standar berlaku per $1\\ \\text{mol}$ senyawa, sehingga kalor untuk massa tertentu $= n \\times |\\Delta H^\\circ_f|$ dengan $n = \\frac{m}{M_r}$.',
          solution:
            '$M_r\\ \\text{CO}_2 = 12 + 2(16) = 44\\ \\text{g/mol}$.\n$$n = \\frac{11\\ \\text{g}}{44\\ \\text{g/mol}} = 0{,}25\\ \\text{mol}$$\nPembentukan $1\\ \\text{mol}$ $\\text{CO}_2$ melepaskan $394\\ \\text{kJ}$ (karena $\\Delta H^\\circ_f = -394\\ \\text{kJ/mol}$), sehingga untuk $0{,}25\\ \\text{mol}$:\n$$q = 0{,}25\\ \\text{mol} \\times 394\\ \\text{kJ/mol} = 98{,}5\\ \\text{kJ (dilepaskan)}$$\nDengan memperhatikan angka penting ($11\\ \\text{g}$ memiliki dua angka penting), hasilnya dapat dibulatkan menjadi $\\approx 99\\ \\text{kJ}$.',
          rubric: [
            { code: 'M1', text: 'Menghitung $M_r\\ \\text{CO}_2 = 44$ dan $n = 0{,}25\\ \\text{mol}$' },
            { code: 'M1', text: 'Mengalikan $n$ dengan $394\\ \\text{kJ/mol}$' },
            { code: 'A1', text: 'Memperoleh kalor dilepaskan $98{,}5\\ \\text{kJ}$ (reaksi eksoterm)' }
          ]
        }
      ]
    },
    {
      no: 12,
      title: 'Kalor Jenis dan Kapasitas Kalor',
      marks: 3,
      stem: 'Dalam eksperimen kalorimetri, terdapat dua besaran yang sering digunakan, yaitu kalor jenis ($c$) dan kapasitas kalor ($C$).',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Jelaskan perbedaan dan hubungan matematis antara kedua besaran tersebut!',
          answer:
            'Kalor jenis $c$ adalah kalor untuk menaikkan suhu $1\\ \\text{g}$ zat sebesar $1^\\circ\\text{C}$ (satuan $\\text{J/g}^\\circ\\text{C}$); kapasitas kalor $C$ adalah kalor untuk menaikkan suhu seluruh zat atau alat sebesar $1^\\circ\\text{C}$ (satuan $\\text{J/}^\\circ\\text{C}$); hubungannya $C = m \\times c$.',
          principle:
            'Kalor jenis adalah sifat intensif suatu zat (per satuan massa), sedangkan kapasitas kalor adalah sifat ekstensif (bergantung pada massa): $q = m c \\Delta T = C \\Delta T$.',
          solution:
            '- Kalor jenis ($c$): kalor yang diperlukan untuk menaikkan suhu $1\\ \\text{g}$ suatu zat sebesar $1^\\circ\\text{C}$, bersatuan $\\text{J/g}^\\circ\\text{C}$ (sifat khas zat).\n- Kapasitas kalor ($C$): kalor yang diperlukan untuk menaikkan suhu seluruh massa zat atau alat (misalnya kalorimeter) sebesar $1^\\circ\\text{C}$, bersatuan $\\text{J/}^\\circ\\text{C}$.\n- Hubungan: $$C = m \\times c$$ sehingga $q = m c \\Delta T = C \\Delta T$.',
          rubric: [
            { code: 'B1', text: 'Mendefinisikan kalor jenis $c$ beserta satuannya ($\\text{J/g}^\\circ\\text{C}$)' },
            { code: 'B1', text: 'Mendefinisikan kapasitas kalor $C$ beserta satuannya ($\\text{J/}^\\circ\\text{C}$)' },
            { code: 'B1', text: 'Menuliskan hubungan $C = m \\times c$' }
          ]
        }
      ]
    },
    {
      no: 13,
      title: 'Kalor pada Reaksi Termit',
      marks: 3,
      stem: 'Reaksi termit digunakan untuk mengelas rel kereta api. Persamaan termokimianya adalah:\n$$2\\text{Al}(s) + \\text{Fe}_2\\text{O}_3(s) \\longrightarrow \\text{Al}_2\\text{O}_3(s) + 2\\text{Fe}(s)\\qquad \\Delta H = -852\\ \\text{kJ}$$',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Hitunglah kalor yang dilepaskan jika $5{,}4$ gram serbuk aluminium direaksikan hingga habis! ($A_r$ $\\text{Al} = 27$)',
          answer: '$85{,}2\\ \\text{kJ}$ dilepaskan',
          principle:
            'Nilai $\\Delta H$ pada persamaan termokimia berlaku untuk jumlah mol sesuai koefisien reaksi, sehingga kalor sebanding dengan jumlah mol pereaksi yang bereaksi.',
          solution:
            '$$n_{\\text{Al}} = \\frac{5{,}4\\ \\text{g}}{27\\ \\text{g/mol}} = 0{,}2\\ \\text{mol}$$\nDari persamaan, $2\\ \\text{mol}$ $\\text{Al}$ melepaskan $852\\ \\text{kJ}$. Untuk $0{,}2\\ \\text{mol}$ $\\text{Al}$:\n$$q = \\frac{0{,}2\\ \\text{mol}}{2\\ \\text{mol}} \\times 852\\ \\text{kJ} = 0{,}1 \\times 852\\ \\text{kJ} = 85{,}2\\ \\text{kJ (dilepaskan)}$$',
          rubric: [
            { code: 'M1', text: 'Menghitung $n_{\\text{Al}} = 0{,}2\\ \\text{mol}$' },
            { code: 'M1', text: 'Menggunakan perbandingan $\\frac{0{,}2}{2} \\times 852$' },
            { code: 'A1', text: 'Memperoleh kalor dilepaskan $85{,}2\\ \\text{kJ}$' }
          ]
        }
      ]
    },
    {
      no: 14,
      title: 'Pemutusan Ikatan Bersifat Endotermik',
      marks: 2,
      stem: 'Dalam konsep energi ikatan, pemutusan ikatan kimia antaratom memerlukan penyerapan energi.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Ditinjau dari konsep energi ikatan, jelaskan mengapa proses pemutusan ikatan kimia antar atom selalu bersifat endotermik (memerlukan penyerapan energi)!',
          answer:
            'Ikatan terbentuk karena gaya tarik-menarik yang menstabilkan atom-atom; memutusnya berarti mengatasi gaya tarik tersebut sehingga diperlukan energi dari lingkungan (endotermik, $\\Delta H > 0$).',
          principle:
            'Atom yang terikat berada pada energi lebih rendah (lebih stabil) daripada atom bebas, sehingga pemutusan ikatan harus menyerap energi sebesar energi ikatan tersebut.',
          solution:
            'Ikatan kimia terbentuk karena adanya gaya tarik-menarik antara elektron dan inti atom-atom yang berikatan, sehingga atom-atom yang berikatan berada pada keadaan energi yang lebih rendah dan lebih stabil daripada atom-atom bebas.\n\nUntuk memisahkan atom-atom yang terikat stabil tersebut diperlukan kerja atau energi dari luar untuk mengatasi gaya tarik itu. Energi diserap dari lingkungan ke sistem, sehingga pemutusan ikatan selalu endotermik. (Sebaliknya, pembentukan ikatan melepaskan energi dengan besar yang sama.)',
          rubric: [
            { code: 'B1', text: 'Menjelaskan bahwa ikatan terbentuk oleh gaya tarik-menarik yang menstabilkan atom-atom' },
            { code: 'B1', text: 'Menjelaskan bahwa gaya tarik harus diatasi dengan energi dari lingkungan sehingga proses bersifat endotermik' }
          ]
        }
      ]
    },
    {
      no: 15,
      title: 'Analogi Hukum Hess',
      marks: 2,
      stem: 'Hukum Hess menyatakan bahwa perubahan entalpi suatu reaksi hanya bergantung pada keadaan awal (reaktan) dan keadaan akhir (produk), serta tidak bergantung pada jalannya reaksi.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Berikan sebuah analogi fenomena fisika dalam kehidupan sehari-hari yang sejalan dengan prinsip ini!',
          answer:
            'Contoh: perubahan energi potensial (ketinggian) pendaki dari kaki ke puncak gunung sama besar, apa pun rute yang ditempuh (curam langsung atau landai berkelok melalui beberapa pos).',
          principle: 'Entalpi adalah fungsi keadaan: perubahannya hanya ditentukan oleh keadaan awal dan akhir, bukan lintasan yang ditempuh.',
          solution:
            'Analogi yang tepat adalah perubahan energi potensial gravitasi saat mendaki gunung. Selisih ketinggian antara kaki gunung (keadaan awal) dan puncak (keadaan akhir) selalu sama, tidak peduli apakah pendaki memilih rute curam yang langsung naik atau rute landai berkelok yang melewati beberapa pos (tahapan).\n\nDemikian pula $\\Delta H$ total reaksi sama, baik reaksi berlangsung satu tahap maupun beberapa tahap. Analogi lain yang diterima: perpindahan posisi (displacement) atau selisih ketinggian antara dua lantai gedung yang sama besar meskipun ditempuh lewat tangga atau lift.',
          rubric: [
            { code: 'B1', text: 'Memberikan analogi fisika yang tepat (misalnya perubahan energi potensial atau ketinggian dari kaki ke puncak gunung)' },
            { code: 'B1', text: 'Menjelaskan kesesuaiannya: hasil hanya ditentukan keadaan awal dan akhir, tidak bergantung pada jalur/tahapan yang ditempuh' }
          ]
        }
      ]
    },
    {
      no: 16,
      title: 'Persamaan Termokimia Penguraian Amonia',
      marks: 2,
      stem: 'Entalpi pembentukan standar amonia adalah $\\Delta H^\\circ_f\\ \\text{NH}_3 = -46\\ \\text{kJ/mol}$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Tuliskan persamaan termokimia untuk reaksi penguraian standar $1\\ \\text{mol}$ gas amonia ($\\text{NH}_3$)!',
          answer: '$\\text{NH}_3(g) \\longrightarrow \\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g)\\qquad \\Delta H = +46\\ \\text{kJ/mol}$',
          principle:
            'Reaksi penguraian adalah kebalikan reaksi pembentukan, sehingga nilai $\\Delta H$ sama besar tetapi tandanya berlawanan.',
          solution:
            'Reaksi pembentukan standar $\\text{NH}_3$:\n$$\\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g) \\longrightarrow \\text{NH}_3(g)\\qquad \\Delta H = -46\\ \\text{kJ/mol}$$\nPenguraian adalah kebalikannya, sehingga arah reaksi dibalik dan tanda $\\Delta H$ diubah dari negatif menjadi positif:\n$$\\text{NH}_3(g) \\longrightarrow \\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g)\\qquad \\Delta H = +46\\ \\text{kJ/mol}$$',
          rubric: [
            { code: 'M1', text: 'Menuliskan reaksi penguraian $1\\ \\text{mol}$ $\\text{NH}_3$ dengan koefisien $\\frac{1}{2}\\text{N}_2$ dan $\\frac{3}{2}\\text{H}_2$ serta wujud zat' },
            { code: 'A1', text: 'Mencantumkan $\\Delta H = +46\\ \\text{kJ/mol}$ (tanda dibalik menjadi positif)' }
          ]
        }
      ]
    },
    {
      no: 17,
      title: 'Penerapan Reaksi Eksoterm dan Endoterm',
      marks: 2,
      stem: 'Prinsip reaksi eksoterm (melepas kalor) dan endoterm (menyerap kalor) banyak dimanfaatkan dalam produk sehari-hari dan di bidang kesehatan.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Sebutkan dua contoh penerapan prinsip reaksi eksoterm atau endoterm dalam produk-produk yang sering digunakan di kehidupan sehari-hari atau di bidang kesehatan!',
          answer:
            'Eksoterm: kompres panas instan (hot pack) berisi zat kimia seperti magnesium sulfat dan air yang melepas panas untuk meredakan nyeri otot. Endoterm: kompres dingin instan (cold pack) berisi amonium nitrat dan air yang menyerap kalor sehingga suhu turun untuk mengompres memar.',
          principle: 'Pelarutan atau reaksi yang melepas kalor (eksoterm) memanaskan lingkungan, sedangkan yang menyerap kalor (endoterm) mendinginkan lingkungan.',
          solution:
            '- Eksoterm: hot pack (kompres panas instan) berisi zat kimia (misalnya magnesium sulfat atau kalsium klorida) dan air. Proses pelarutannya melepaskan kalor sehingga kantong terasa hangat untuk meredakan nyeri otot.\n- Endoterm: cold pack (kompres dingin instan) berisi amonium nitrat dan air. Pelarutannya menyerap kalor dari lingkungan sehingga suhu turun, dimanfaatkan untuk mengompres luka memar.\n\nContoh lain yang diterima: pemanas makanan swa-panas (reaksi kalsium oksida dengan air, eksoterm) dan pembakaran bahan bakar (eksoterm).',
          rubric: [
            { code: 'B1', text: 'Menyebutkan satu contoh penerapan reaksi eksoterm yang tepat disertai alasan melepas kalor' },
            { code: 'B1', text: 'Menyebutkan satu contoh penerapan reaksi endoterm yang tepat disertai alasan menyerap kalor' }
          ]
        }
      ]
    },
    {
      no: 18,
      title: 'Energi Ikatan O=O dan Kereaktifan Gas Oksigen',
      marks: 2,
      stem: 'Energi ikatan rata-rata untuk ikatan rangkap dua $\\text{O}{=}\\text{O}$ jauh lebih besar dibandingkan ikatan tunggal $\\text{O}{-}\\text{O}$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Jelaskan apa dampaknya terhadap kemudahan gas oksigen ($\\text{O}_2$) untuk bereaksi di suhu ruang!',
          answer:
            'Ikatan $\\text{O}{=}\\text{O}$ sangat kuat sehingga diperlukan energi besar untuk memutusnya; akibatnya $\\text{O}_2$ relatif stabil dan tidak mudah bereaksi di suhu ruang, dan reaksi pembakaran memerlukan energi aktivasi awal (misalnya percikan api).',
          principle:
            'Semakin besar energi ikatan, semakin sulit ikatan itu diputus; pemutusan ikatan pereaksi merupakan bagian dari energi aktivasi reaksi.',
          solution:
            'Ikatan rangkap dua memiliki kerapatan elektron yang lebih tinggi di antara kedua inti atom sehingga gaya tarik-menariknya lebih kuat daripada ikatan tunggal. Akibatnya diperlukan energi yang sangat besar untuk memutus ikatan $\\text{O}{=}\\text{O}$.\n\nHal ini menjelaskan mengapa $\\text{O}_2$ relatif stabil (tidak mudah bereaksi) pada suhu ruang, dan reaksi pembakaran yang melibatkan $\\text{O}_2$ biasanya memerlukan energi aktivasi awal (misalnya percikan api atau pemanasan) untuk mulai memutus ikatan tersebut.',
          rubric: [
            { code: 'B1', text: 'Menjelaskan bahwa ikatan rangkap $\\text{O}{=}\\text{O}$ lebih kuat sehingga memerlukan energi besar untuk diputus' },
            { code: 'B1', text: 'Menyimpulkan $\\text{O}_2$ stabil/sulit bereaksi pada suhu ruang dan perlu energi aktivasi awal (mis. percikan api)' }
          ]
        }
      ]
    },
    {
      no: 19,
      title: 'Entalpi Pembakaran Molar Metanol',
      marks: 3,
      stem: 'Pembakaran sempurna $1$ gram metanol cair ($\\text{CH}_3\\text{OH}$) dalam sebuah kalorimeter bom melepaskan kalor sebesar $22{,}6\\ \\text{kJ}$. ($A_r$ $\\text{C} = 12$, $\\text{H} = 1$, $\\text{O} = 16$)',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan entalpi pembakaran molar metanol tersebut!',
          answer: '$\\Delta H_c = -723{,}2\\ \\text{kJ/mol}$ ($\\approx -723\\ \\text{kJ/mol}$)',
          principle:
            'Entalpi pembakaran molar adalah kalor pembakaran per $1\\ \\text{mol}$ zat: $\\Delta H_c = \\frac{q_{\\text{reaksi}}}{n}$, bertanda negatif karena kalor dilepaskan.',
          solution:
            '$M_r\\ \\text{CH}_3\\text{OH} = 12 + 3(1) + 16 + 1 = 32\\ \\text{g/mol}$.\n$$n = \\frac{1\\ \\text{g}}{32\\ \\text{g/mol}} = \\frac{1}{32}\\ \\text{mol}$$\nPembakaran $\\frac{1}{32}\\ \\text{mol}$ melepaskan $22{,}6\\ \\text{kJ}$, sehingga $q_{\\text{reaksi}} = -22{,}6\\ \\text{kJ}$. Untuk $1\\ \\text{mol}$:\n$$\\Delta H_c = \\frac{-22{,}6\\ \\text{kJ}}{1/32\\ \\text{mol}} = -22{,}6 \\times 32 = -723{,}2\\ \\text{kJ/mol}$$\nDengan memperhatikan angka penting ($22{,}6$ memiliki tiga angka penting), hasilnya $\\approx -723\\ \\text{kJ/mol}$. (Pada tingkat ini kalor yang terukur diperlakukan sebagai entalpi pembakaran.)',
          rubric: [
            { code: 'M1', text: 'Menghitung $M_r = 32$ dan $n = \\frac{1}{32}\\ \\text{mol}$' },
            { code: 'M1', text: 'Mengonversi kalor ke per $1\\ \\text{mol}$: $22{,}6 \\times 32$' },
            { code: 'A1', text: 'Memperoleh $\\Delta H_c = -723{,}2\\ \\text{kJ/mol}$ dengan tanda negatif' }
          ]
        }
      ]
    },
    {
      no: 20,
      title: 'Alasan ΔHf Unsur Bebas Bernilai Nol',
      marks: 2,
      stem: 'Sesuai konvensi, nilai entalpi pembentukan standar ($\\Delta H^\\circ_f$) untuk unsur-unsur bebas seperti $\\text{O}_2(g)$, $\\text{N}_2(g)$, atau $\\text{Fe}(s)$ ditetapkan bernilai nol.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Jelaskan rasionalisasi di balik penetapan nilai nol tersebut!',
          answer:
            'Unsur bebas dalam bentuk paling stabilnya sudah berada dalam wujud alaminya, sehingga membentuknya dari dirinya sendiri tidak memerlukan reaksi atau perubahan apa pun ($\\Delta H = 0$); nilai nol juga ditetapkan sebagai titik acuan karena entalpi mutlak tidak dapat diukur, hanya selisihnya.',
          principle:
            '$\\Delta H^\\circ_f$ adalah kalor pembentukan senyawa dari unsur-unsurnya, sehingga entalpi unsur dalam bentuk paling stabil pada keadaan standar ditetapkan nol sebagai acuan.',
          solution:
            '$\\Delta H^\\circ_f$ diukur sebagai kalor yang menyertai pembentukan suatu zat dari unsur-unsur penyusunnya pada keadaan standar ($25^\\circ\\text{C}$, $1\\ \\text{atm}$). Unsur bebas yang paling stabil (misalnya $\\text{O}_2$, $\\text{N}_2$, $\\text{Fe}$) sudah berada dalam wujud alaminya, sehingga tidak ada reaksi atau perubahan fasa yang diperlukan untuk "membentuk unsur itu dari dirinya sendiri"; perubahan energinya ditetapkan nol.\n\nSecara praktis, entalpi mutlak suatu zat tidak dapat diukur, hanya perubahannya. Karena itu ditetapkan titik acuan nol (seperti permukaan laut untuk ketinggian) bagi unsur dalam bentuk paling stabil, dan entalpi senyawa dinyatakan relatif terhadap acuan itu.',
          rubric: [
            { code: 'B1', text: 'Menjelaskan unsur bebas dalam bentuk paling stabil sudah dalam wujud alaminya sehingga pembentukannya dari dirinya sendiri tidak melibatkan perubahan ($\\Delta H = 0$)' },
            { code: 'B1', text: 'Menjelaskan nilai nol sebagai titik acuan/konvensi karena entalpi mutlak tidak dapat diukur, hanya perubahannya' }
          ]
        }
      ]
    }
  ]
};
