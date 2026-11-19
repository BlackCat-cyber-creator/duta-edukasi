import { bab, soal } from '../author.js';

export default bab({
  grade: 11,
  number: 2,
  slug: 'termokimia',
  title: 'Termokimia dan Perubahan Entalpi',
  element: 'Pemahaman Kimia: reaksi eksoterm-endoterm, kalorimetri, Hukum Hess, entalpi pembentukan standar, dan energi ikatan',
  summary: {
    overview: 'Termokimia mempelajari perubahan energi kalor yang menyertai reaksi kimia dan perubahan fasa pada tekanan tetap sebagai perubahan entalpi (Delta H). Bab ini membahas pembedaan sistem dan lingkungan pada reaksi eksoterm dan endoterm, penulisan persamaan termokimia serta jenis entalpi standar, pengukuran kalor reaksi dengan kalorimetri, serta perhitungan perubahan entalpi secara tidak langsung melalui Hukum Hess, data entalpi pembentukan standar, dan energi ikatan rata-rata.',
    coreConcepts: [
      'Sistem, Lingkungan, Reaksi Eksoterm dan Endoterm: Sistem adalah bagian yang menjadi pusat pengamatan (pereaksi dan produk), sedangkan lingkungan adalah segala sesuatu di luar sistem (pelarut, wadah, udara). Pada reaksi eksoterm, sistem melepas kalor ke lingkungan sehingga suhu lingkungan naik dan $\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}} < 0$. Pada reaksi endoterm, sistem menyerap kalor dari lingkungan sehingga suhu lingkungan turun dan $\\Delta H > 0$.',
      'Persamaan Termokimia dan Entalpi Standar: Persamaan termokimia mencantumkan koefisien stoikiometri, wujud zat ($s, l, g, aq$), dan nilai $\\Delta H$. Jika koefisien reaksi dikali $k$, nilai $\\Delta H$ ikut dikali $k$; jika reaksi dibalik, tanda $\\Delta H$ berubah berlawanan. Jenis entalpi standar ($25^\\circ\\text{C}, 1\\text{ atm}$) meliputi entalpi pembentukan standar ($\\Delta H^\\circ_f$, membentuk $1\\text{ mol}$ senyawa dari unsur stabilnya), penguraian standar ($\\Delta H^\\circ_d$), dan pembakaran standar ($\\Delta H^\\circ_c$).',
      'Kalorimetri dan Perhitungan Kalor Reaksi: Pada tekanan tetap, kalor reaksi sama dengan perubahan entalpi ($q_p = \\Delta H$). Energi kalor yang diserap atau dilepaskan larutan dan kalorimeter dihitung dari $q_{\\text{larutan}} = m\\,c\\,\\Delta T$ dan $q_{\\text{kal}} = C_{\\text{kal}}\\,\\Delta T$. Berdasarkan hukum kekekalan energi, $q_{\\text{reaksi}} = -(q_{\\text{larutan}} + q_{\\text{kal}})$, lalu entalpi molar diperoleh dengan membagi $q_{\\text{reaksi}}$ oleh jumlah mol zat bereaksi ($\\Delta H = q_{\\text{reaksi}} / n$).',
      'Hukum Hess dan Entalpi Pembentukan Standar: Menurut Hukum Hess, perubahan entalpi reaksi tidak bergantung pada lintasan atau jumlah tahap reaksi, melainkan hanya pada keadaan awal dan akhir. Dengan demikian, beberapa persamaan reaksi dapat dibalik, dikalikan, dan dijumlahkan untuk memperoleh reaksi target. Secara umum dari data pembentukan standar berlaku $\\Delta H_{\\text{reaksi}} = \\sum n\\,\\Delta H^\\circ_{f,\\text{produk}} - \\sum m\\,\\Delta H^\\circ_{f,\\text{reaktan}}$, dengan $\\Delta H^\\circ_f$ unsur bebas stabil bernilai nol.',
      'Energi Ikatan Rata-Rata: Reaksi kimia dapat dipandang sebagai pemutusan ikatan pada reaktan (memerlukan energi, endoterm) diikuti pembentukan ikatan baru pada produk (melepaskan energi, eksoterm). Nilai perubahan entalpi reaksi dalam fasa gas dapat diperkirakan menggunakan energi ikatan rata-rata melalui persamaan $\\Delta H_{\\text{reaksi}} = \\sum E_{\\text{ikatan putus (reaktan)}} - \\sum E_{\\text{ikatan terbentuk (produk)}}$.'
    ],
    keyFormulas: [
      { label: 'Kalorimetri pada tekanan tetap', formula: 'q_{\\text{reaksi}} = -\\left(m\\,c\\,\\Delta T + C_{\\text{kal}}\\,\\Delta T\\right) \\qquad \\Delta H = \\dfrac{q_{\\text{reaksi}}}{n}' },
      { label: 'Entalpi dari data pembentukan standar', formula: '\\Delta H_{\\text{reaksi}} = \\sum n\\,\\Delta H^\\circ_{f,\\text{produk}} - \\sum m\\,\\Delta H^\\circ_{f,\\text{reaktan}}' },
      { label: 'Entalpi dari energi ikatan rata-rata', formula: '\\Delta H_{\\text{reaksi}} = \\sum E_{\\text{pemutusan (reaktan)}} - \\sum E_{\\text{pembentukan (produk)}}' }
    ],
    workedExamples: [
      {
        title: 'Menentukan entalpi netralisasi dengan kalorimetri',
        problem: 'Sebanyak $50\\text{ mL}$ $\\text{HCl}\\ 1\\text{ M}$ dicampurkan dengan $50\\text{ mL}$ $\\text{NaOH}\\ 1\\text{ M}$ dalam kalorimeter sederhana ($C_{\\text{kal}} = 0$). Suhu awal $25{,}0^\\circ\\text{C}$ naik menjadi $31{,}5^\\circ\\text{C}$. Jika $\\rho = 1\\text{ g/mL}$ dan $c = 4{,}2\\text{ J/(g}\\cdot^\\circ\\text{C)}$, tentukan $\\Delta H$ netralisasi per mol air.',
        solution: 'Massa total larutan $m = (50 + 50)\\text{ mL} \\times 1\\text{ g/mL} = 100\\text{ g}$, dengan $\\Delta T = 31{,}5 - 25{,}0 = 6{,}5^\\circ\\text{C}$. Kalor yang diserap larutan $q_{\\text{larutan}} = 100 \\times 4{,}2 \\times 6{,}5 = 2730\\text{ J} = 2{,}73\\text{ kJ}$, sehingga $q_{\\text{reaksi}} = -2{,}73\\text{ kJ}$. Jumlah mol $\\text{H}_2\\text{O}$ yang terbentuk $= 0{,}05\\text{ L} \\times 1\\text{ M} = 0{,}05\\text{ mol}$. Maka $\\Delta H = \\frac{-2{,}73\\text{ kJ}}{0{,}05\\text{ mol}} = -54{,}6\\text{ kJ/mol}$.'
      },
      {
        title: 'Menghitung perubahan entalpi dengan Hukum Hess',
        problem: 'Diketahui $\\text{C}(s) + \\text{O}_2(g) \\longrightarrow \\text{CO}_2(g)\\ (\\Delta H = -394\\text{ kJ})$ dan $\\text{CO}(g) + \\frac{1}{2}\\text{O}_2(g) \\longrightarrow \\text{CO}_2(g)\\ (\\Delta H = -283\\text{ kJ})$. Hitung $\\Delta H$ reaksi $\\text{C}(s) + \\frac{1}{2}\\text{O}_2(g) \\longrightarrow \\text{CO}(g)$.',
        solution: 'Reaksi pertama dipertahankan ($\\Delta H_1 = -394\\text{ kJ}$), sedangkan reaksi kedua dibalik agar $\\text{CO}(g)$ berada di sisi produk ($\\Delta H_2 = +283\\text{ kJ}$). Penjumlahan kedua reaksi mengeliminasi $\\text{CO}_2(g)$ dan $\\frac{1}{2}\\text{O}_2(g)$, sehingga menghasilkan $\\Delta H = -394 + 283 = -111\\text{ kJ}$.'
      },
      {
        title: 'Menghitung perubahan entalpi dari data energi ikatan',
        problem: 'Hitung $\\Delta H$ reaksi $\\text{H}_2(g) + \\text{Cl}_2(g) \\longrightarrow 2\\text{HCl}(g)$ jika diketahui $E_{\\text{H}-\\text{H}} = 436\\text{ kJ/mol}$, $E_{\\text{Cl}-\\text{Cl}} = 242\\text{ kJ/mol}$, dan $E_{\\text{H}-\\text{Cl}} = 431\\text{ kJ/mol}$.',
        solution: 'Energi pemutusan ikatan reaktan $= 1(436) + 1(242) = 678\\text{ kJ}$. Energi pembentukan ikatan produk $= 2(431) = 862\\text{ kJ}$. Jadi $\\Delta H = 678 - 862 = -184\\text{ kJ}$.'
      }
    ],
    misconceptions: [
      'Mengira reaksi yang membuat gelas reaksi terasa panas adalah reaksi endoterm, padahal rasa panas menunjukkan kalor dilepas dari sistem reaksi ke lingkungan (termometer dan tangan) sehingga tergolong eksoterm ($\\Delta H < 0$).',
      'Membalik rumus energi ikatan menjadi produk dikurangi reaktan seperti rumus $\\Delta H^\\circ_f$. Pada $\\Delta H^\\circ_f$ rumusnya $\\text{produk} - \\text{reaktan}$, sedangkan pada energi ikatan rumusnya $\\text{reaktan (putus)} - \\text{produk (terbentuk)}$.',
      'Lupa membagi nilai $q_{\\text{reaksi}}$ dengan jumlah mol zat yang bereaksi ketika melaporkan entalpi molar ($\\text{kJ/mol}$).'
    ],
    tutorTip: 'Ingat pasangan tanda berlawanan antara kalor dan entalpi: jika termometer naik ($\\Delta T > 0$), reaksi melepas kalor (eksoterm, $\\Delta H$ negatif). Selain itu, hafalkan perbedaan dua rumus selisih: $\\Delta H^\\circ_f$ pakai "Kanan kurang Kiri", sedangkan Energi Ikatan pakai "Kiri kurang Kanan" (Putus kurang Bentuk).'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Ketika serbuk urea dilarutkan ke dalam gelas kimia berisi air, dinding gelas terasa dingin dan suhu air pada termometer turun. Berdasarkan pengamatan tersebut, pelarutan urea tergolong...',
      options: [
        'reaksi eksoterm karena sistem melepaskan kalor ke lingkungan dengan $\\Delta H < 0$',
        'reaksi eksoterm karena suhu lingkungan meningkat akibat pelepasan energi',
        'reaksi endoterm karena sistem menyerap kalor dari lingkungan dengan $\\Delta H > 0$',
        'reaksi endoterm karena sistem melepaskan kalor ke udara sekitar dengan $\\Delta H < 0$'
      ],
      answer: 'C',
      hint: 'Air dan gelas kimia berperan sebagai lingkungan; turunnya suhu lingkungan menandakan kalor berpindah masuk ke dalam sistem.',
      solution: 'Air dan wadah gelas adalah lingkungan bagi proses pelarutan. Penurunan suhu air menandakan energi kalor diserap oleh sistem dari lingkungan, sehingga proses ini adalah **reaksi endoterm** dengan perubahan entalpi positif ($\\Delta H > 0$). Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Persamaan termokimia yang tepat untuk menyatakan entalpi pembentukan standar ($\\Delta H^\\circ_f$) gas amonia adalah...',
      options: [
        '$\\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g) \\longrightarrow \\text{NH}_3(g) \\quad \\Delta H^\\circ = -46\\text{ kJ}$',
        '$\\text{N}_2(g) + 3\\text{H}_2(g) \\longrightarrow 2\\text{NH}_3(g) \\quad \\Delta H^\\circ = -92\\text{ kJ}$',
        '$\\text{N}(g) + 3\\text{H}(g) \\longrightarrow \\text{NH}_3(g) \\quad \\Delta H^\\circ = -1170\\text{ kJ}$',
        '$\\text{NH}_3(g) \\longrightarrow \\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g) \\quad \\Delta H^\\circ = +46\\text{ kJ}$'
      ],
      answer: 'A',
      hint: 'Entalpi pembentukan standar selalu didefinisikan untuk pembentukan tepat $1\\text{ mol}$ senyawa dari unsur-unsur bebasnya dalam wujud standar.',
      solution: 'Syarat $\\Delta H^\\circ_f$ adalah terbentuknya tepat **$1\\text{ mol}$ senyawa** di sisi produk dari **unsur-unsur stabilnya** pada keadaan standar ($\\text{N}_2(g)$ dan $\\text{H}_2(g)$). Hanya persamaan $\\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g) \\longrightarrow \\text{NH}_3(g)$ yang memenuhi kedua syarat tersebut. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada diagram tingkat energi suatu reaksi eksoterm, posisi tingkat energi produk dan nilai perubahan entalpinya yang benar adalah...',
      options: [
        'entalpi produk lebih tinggi daripada reaktan dan $\\Delta H > 0$',
        'entalpi produk sama dengan reaktan dan $\\Delta H = 0$',
        'entalpi produk lebih rendah daripada reaktan dan $\\Delta H > 0$',
        'entalpi produk lebih rendah daripada reaktan dan $\\Delta H < 0$'
      ],
      answer: 'D',
      hint: 'Gunakan hubungan $\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}}$ dan ingat bahwa reaksi eksoterm melepaskan energi.',
      solution: 'Karena reaksi eksoterm melepaskan kalor ke lingkungan, kandungan energi (entalpi) produk lebih rendah daripada reaktan ($H_{\\text{produk}} < H_{\\text{reaktan}}$), sehingga $\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}} < 0$ (bernilai negatif). Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Hukum Hess menyatakan bahwa perubahan entalpi suatu reaksi kimia...',
      options: [
        'selalu berbanding terbalik dengan jumlah mol pereaksi yang digunakan',
        'hanya bergantung pada keadaan awal dan keadaan akhir, tidak bergantung pada lintasan reaksinya',
        'hanya berlaku apabila reaksi berlangsung dalam satu tahap pada suhu ruang',
        'sama dengan selisih energi aktivasi reaksi maju dan energi kalorimeter'
      ],
      answer: 'B',
      hint: 'Entalpi termasuk fungsi keadaan dalam termodinamika.',
      solution: 'Entalpi ($H$) merupakan fungsi keadaan. Oleh karena itu, Hukum Hess menegaskan bahwa $\\Delta H$ reaksi total hanya ditentukan oleh keadaan awal (reaktan) dan keadaan akhir (produk), terlepas dari rute atau jumlah tahap reaksi yang dilalui. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Di antara zat berikut ini, spesi yang memiliki nilai entalpi pembentukan standar ($\\Delta H^\\circ_f$) sama dengan nol pada kondisi $25^\\circ\\text{C}, 1\\text{ atm}$ adalah...',
      options: [
        '$\\text{CO}_2(g)$',
        '$\\text{H}_2\\text{O}(l)$',
        '$\\text{O}_2(g)$',
        '$\\text{O}_3(g)$'
      ],
      answer: 'C',
      hint: 'Nilai $\\Delta H^\\circ_f = 0$ dimiliki oleh unsur bebas dalam bentuk alotropi yang paling stabil pada keadaan standar.',
      solution: 'Unsur bebas dalam bentuk stabil pada $25^\\circ\\text{C}$ dan $1\\text{ atm}$ ditetapkan memiliki $\\Delta H^\\circ_f = 0\\text{ kJ/mol}$. Gas oksigen ($\\text{O}_2(g)$) adalah bentuk stabil unsur oksigen, sedangkan ozon ($\\text{O}_3(g)$) adalah alotropi yang kurang stabil sehingga $\\Delta H^\\circ_f > 0$, dan $\\text{CO}_2$ serta $\\text{H}_2\\text{O}$ merupakan senyawa. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebanyak $50\\text{ mL}$ larutan $\\text{HCl}\\ 1\\text{ M}$ dicampurkan dengan $50\\text{ mL}$ larutan $\\text{NaOH}\\ 1\\text{ M}$ dalam kalorimeter plastik (kapasitas kalor kalorimeter diabaikan). Suhu awal kedua larutan $25{,}0^\\circ\\text{C}$ naik menjadi $31{,}5^\\circ\\text{C}$. Jika massa jenis larutan $1\\text{ g/mL}$ dan kalor jenis larutan $4{,}2\\text{ J/(g}\\cdot^\\circ\\text{C)}$, nilai $\\Delta H$ netralisasi per mol $\\text{H}_2\\text{O}$ yang terbentuk adalah...',
      options: [
        '$-54{,}6\\text{ kJ/mol}$',
        '$+54{,}6\\text{ kJ/mol}$',
        '$-2{,}73\\text{ kJ/mol}$',
        '$-27{,}3\\text{ kJ/mol}$'
      ],
      answer: 'A',
      hint: 'Hitung kalor larutan $q = m\\,c\\,\\Delta T$ dengan massa total $100\\text{ g}$, lalu ubah tandanya menjadi negatif dan bagi dengan $0{,}05\\text{ mol}$.',
      solution: 'Massa total larutan $m = 50 + 50 = 100\\text{ g}$ dan $\\Delta T = 31{,}5 - 25{,}0 = 6{,}5^\\circ\\text{C}$. Kalor yang diserap larutan $q_{\\text{larutan}} = 100 \\times 4{,}2 \\times 6{,}5 = 2730\\text{ J} = 2{,}73\\text{ kJ}$, sehingga $q_{\\text{reaksi}} = -2{,}73\\text{ kJ}$. Jumlah mol $\\text{H}_2\\text{O} = 0{,}05\\text{ L} \\times 1\\text{ M} = 0{,}05\\text{ mol}$. Maka $\\Delta H = \\frac{-2{,}73}{0{,}05} = -54{,}6\\text{ kJ/mol}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Diketahui persamaan termokimia pembakaran gas metana: $\\text{CH}_4(g) + 2\\text{O}_2(g) \\longrightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l)\\quad \\Delta H = -890\\text{ kJ}$. Jika $3{,}2\\text{ gram}$ gas metana ($M_r = 16$) dibakar sempurna, besarnya kalor yang dibebaskan adalah...',
      options: [
        '$89\\text{ kJ}$',
        '$178\\text{ kJ}$',
        '$356\\text{ kJ}$',
        '$445\\text{ kJ}$'
      ],
      answer: 'B',
      hint: 'Hitung jumlah mol metana terlebih dahulu dengan $n = m / M_r$, kemudian kalikan dengan kalor pembakaran per mol.',
      solution: 'Jumlah mol metana yang dibakar adalah $n = \\frac{3{,}2\\text{ g}}{16\\text{ g/mol}} = 0{,}2\\text{ mol}$. Karena pembakaran $1\\text{ mol}$ $\\text{CH}_4$ membebaskan $890\\text{ kJ}$, pembakaran $0{,}2\\text{ mol}$ membebaskan kalor sebesar $0{,}2 \\times 890\\text{ kJ} = 178\\text{ kJ}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Diketahui dua persamaan termokimia berikut:\n(1) $\\text{C}(s) + \\text{O}_2(g) \\longrightarrow \\text{CO}_2(g) \\quad \\Delta H = -394\\text{ kJ}$\n(2) $\\text{CO}(g) + \\frac{1}{2}\\text{O}_2(g) \\longrightarrow \\text{CO}_2(g) \\quad \\Delta H = -283\\text{ kJ}$\nBerdasarkan Hukum Hess, perubahan entalpi untuk reaksi $\\text{C}(s) + \\frac{1}{2}\\text{O}_2(g) \\longrightarrow \\text{CO}(g)$ adalah...',
      options: [
        '$-677\\text{ kJ}$',
        '$+111\\text{ kJ}$',
        '$+677\\text{ kJ}$',
        '$-111\\text{ kJ}$'
      ],
      answer: 'D',
      hint: 'Pertahankan reaksi (1) dan balik reaksi (2) agar $\\text{CO}(g)$ berada di sisi produk sebelum menjumlahkan kedua persamaan.',
      solution: 'Biarkan reaksi (1) tetap ($\\Delta H_1 = -394\\text{ kJ}$) dan balik reaksi (2) menjadi $\\text{CO}_2(g) \\longrightarrow \\text{CO}(g) + \\frac{1}{2}\\text{O}_2(g)$ dengan $\\Delta H_2 = +283\\text{ kJ}$. Setelah dijumlahkan, $\\text{CO}_2(g)$ dan $\\frac{1}{2}\\text{O}_2(g)$ saling meniadakan sehingga $\\Delta H = -394 + 283 = -111\\text{ kJ}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Diketahui data entalpi pembentukan standar: $\\Delta H^\\circ_f\\ \\text{C}_2\\text{H}_6(g) = -85\\text{ kJ/mol}$, $\\Delta H^\\circ_f\\ \\text{CO}_2(g) = -394\\text{ kJ/mol}$, dan $\\Delta H^\\circ_f\\ \\text{H}_2\\text{O}(l) = -286\\text{ kJ/mol}$. Perubahan entalpi untuk reaksi pembakaran $1\\text{ mol}$ gas etana: $\\text{C}_2\\text{H}_6(g) + \\frac{7}{2}\\text{O}_2(g) \\longrightarrow 2\\text{CO}_2(g) + 3\\text{H}_2\\text{O}(l)$ adalah...',
      options: [
        '$-1731\\text{ kJ}$',
        '$-1476\\text{ kJ}$',
        '$-1561\\text{ kJ}$',
        '$-595\\text{ kJ}$'
      ],
      answer: 'C',
      hint: 'Gunakan rumus $\\Delta H = \\sum n\\,\\Delta H^\\circ_{f,\\text{produk}} - \\sum m\\,\\Delta H^\\circ_{f,\\text{reaktan}}$ dan ingat $\\Delta H^\\circ_f\\ \\text{O}_2(g) = 0$.',
      solution: '$\\sum \\Delta H^\\circ_{f,\\text{produk}} = 2(-394) + 3(-286) = -788 - 858 = -1646\\text{ kJ}$. $\\sum \\Delta H^\\circ_{f,\\text{reaktan}} = 1(-85) + \\frac{7}{2}(0) = -85\\text{ kJ}$. Maka $\\Delta H = -1646 - (-85) = -1561\\text{ kJ}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Diketahui data energi ikatan rata-rata: $\\text{H}-\\text{H} = 436\\text{ kJ/mol}$, $\\text{Cl}-\\text{Cl} = 242\\text{ kJ/mol}$, dan $\\text{H}-\\text{Cl} = 431\\text{ kJ/mol}$. Nilai perubahan entalpi untuk reaksi $\\text{H}_2(g) + \\text{Cl}_2(g) \\longrightarrow 2\\text{HCl}(g)$ adalah...',
      options: [
        '$-184\\text{ kJ}$',
        '$+184\\text{ kJ}$',
        '$+247\\text{ kJ}$',
        '$-247\\text{ kJ}$'
      ],
      answer: 'A',
      hint: 'Hitung jumlah energi pemutusan ikatan reaktan dikurangi jumlah energi pembentukan ikatan produk.',
      solution: 'Ikatan yang diputus di reaktan: $1\\ (\\text{H}-\\text{H}) + 1\\ (\\text{Cl}-\\text{Cl}) = 436 + 242 = 678\\text{ kJ}$. Ikatan yang terbentuk di produk: $2\\ (\\text{H}-\\text{Cl}) = 2 \\times 431 = 862\\text{ kJ}$. Sehingga $\\Delta H = 678 - 862 = -184\\text{ kJ}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pembakaran sempurna $1{,}2\\text{ gram}$ karbon grafit ($A_r\\ \\text{C} = 12$) di dalam kalorimeter bom yang berisi $500\\text{ gram}$ air menaikkan suhu sistem dari $24{,}0^\\circ\\text{C}$ menjadi $39{,}0^\\circ\\text{C}$. Jika kalor jenis air $4{,}2\\text{ J/(g}\\cdot^\\circ\\text{C)}$ dan kapasitas kalor kalorimeter bom adalah $520\\text{ J/}^\\circ\\text{C}$, entalpi pembakaran molar karbon ($\\Delta H_c^\\circ$) adalah...',
      options: [
        '$-315\\text{ kJ/mol}$',
        '$-393\\text{ kJ/mol}$',
        '$-471\\text{ kJ/mol}$',
        '$-786\\text{ kJ/mol}$'
      ],
      answer: 'B',
      hint: 'Jumlahkan kalor yang diserap oleh air dan oleh kalorimeter bom sebelum membagi dengan jumlah mol karbon ($0{,}1\\text{ mol}$).',
      solution: 'Kenaikan suhu $\\Delta T = 39{,}0 - 24{,}0 = 15{,}0^\\circ\\text{C}$. Kalor diserap air: $q_{\\text{air}} = 500 \\times 4{,}2 \\times 15 = 31500\\text{ J} = 31{,}5\\text{ kJ}$. Kalor diserap bom kalorimeter: $q_{\\text{kal}} = 520 \\times 15 = 7800\\text{ J} = 7{,}8\\text{ kJ}$. Total kalor reaksi $q_{\\text{reaksi}} = -(31{,}5 + 7{,}8) = -39{,}3\\text{ kJ}$. Karena $n_{\\text{C}} = \\frac{1{,}2}{12} = 0{,}1\\text{ mol}$, maka $\\Delta H_c^\\circ = \\frac{-39{,}3\\text{ kJ}}{0{,}1\\text{ mol}} = -393\\text{ kJ/mol}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Diketahui tiga persamaan termokimia berikut:\n(1) $\\text{C}_2\\text{H}_4(g) + 3\\text{O}_2(g) \\longrightarrow 2\\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l) \\quad \\Delta H = -1411\\text{ kJ}$\n(2) $2\\text{C}_2\\text{H}_6(g) + 7\\text{O}_2(g) \\longrightarrow 4\\text{CO}_2(g) + 6\\text{H}_2\\text{O}(l) \\quad \\Delta H = -3120\\text{ kJ}$\n(3) $2\\text{H}_2(g) + \\text{O}_2(g) \\longrightarrow 2\\text{H}_2\\text{O}(l) \\quad \\Delta H = -572\\text{ kJ}$\nNilai perubahan entalpi untuk reaksi hidrogenasi etena $\\text{C}_2\\text{H}_4(g) + \\text{H}_2(g) \\longrightarrow \\text{C}_2\\text{H}_6(g)$ adalah...',
      options: [
        '$-423\\text{ kJ}$',
        '$+137\\text{ kJ}$',
        '$-286\\text{ kJ}$',
        '$-137\\text{ kJ}$'
      ],
      answer: 'D',
      hint: 'Kalikan reaksi (2) dan (3) dengan $\\frac{1}{2}$, balik reaksi (2), lalu jumlahkan ketiganya bersama reaksi (1).',
      solution: 'Susun tiga langkah: reaksi (1) tetap ($-1411\\text{ kJ}$); reaksi (2) dibalik dan dikali $\\frac{1}{2}$ menjadi $2\\text{CO}_2(g) + 3\\text{H}_2\\text{O}(l) \\longrightarrow \\text{C}_2\\text{H}_6(g) + \\frac{7}{2}\\text{O}_2(g)$ dengan $\\Delta H = +1560\\text{ kJ}$; reaksi (3) dikali $\\frac{1}{2}$ menjadi $\\text{H}_2(g) + \\frac{1}{2}\\text{O}_2(g) \\longrightarrow \\text{H}_2\\text{O}(l)$ dengan $\\Delta H = -286\\text{ kJ}$. Jumlah ketiganya menghasilkan reaksi target dengan $\\Delta H = -1411 + 1560 - 286 = -137\\text{ kJ}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Diketahui reaksi hidrogenasi etena: $\\text{CH}_2=\\text{CH}_2(g) + \\text{H}_2(g) \\longrightarrow \\text{CH}_3-\\text{CH}_3(g)\\quad \\Delta H = -137\\text{ kJ}$. Jika diketahui energi ikatan rata-rata $\\text{C}-\\text{H} = 413\\text{ kJ/mol}$, $\\text{H}-\\text{H} = 436\\text{ kJ/mol}$, dan $\\text{C}-\\text{C} = 348\\text{ kJ/mol}$, besar energi ikatan rata-rata $\\text{C}=\\text{C}$ adalah...',
      options: [
        '$512\\text{ kJ/mol}$',
        '$738\\text{ kJ/mol}$',
        '$601\\text{ kJ/mol}$',
        '$464\\text{ kJ/mol}$'
      ],
      answer: 'C',
      hint: 'Hitung jumlah ikatan pada struktur Lewis $\\text{C}_2\\text{H}_4$ (empat $\\text{C}-\\text{H}$ dan satu $\\text{C}=\\text{C}$) serta $\\text{C}_2\\text{H}_6$ (enam $\\text{C}-\\text{H}$ dan satu $\\text{C}-\\text{C}$).',
      solution: 'Ikatan putus di reaktan: $1\\,E_{\\text{C}=\\text{C}} + 4(413) + 1(436) = E_{\\text{C}=\\text{C}} + 2088\\text{ kJ}$. Ikatan terbentuk di produk: $1(348) + 6(413) = 348 + 2478 = 2826\\text{ kJ}$. Maka $\\Delta H = (E_{\\text{C}=\\text{C}} + 2088) - 2826 = -137 \\implies E_{\\text{C}=\\text{C}} - 738 = -137 \\implies E_{\\text{C}=\\text{C}} = 601\\text{ kJ/mol}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pembakaran sempurna $11\\text{ gram}$ gas propana ($\\text{C}_3\\text{H}_8$, $M_r = 44$) pada keadaan standar melepaskan kalor sebesar $555\\text{ kJ}$. Jika diketahui $\\Delta H^\\circ_f\\ \\text{CO}_2(g) = -394\\text{ kJ/mol}$ dan $\\Delta H^\\circ_f\\ \\text{H}_2\\text{O}(l) = -286\\text{ kJ/mol}$, nilai entalpi pembentukan standar ($\\Delta H^\\circ_f$) gas propana adalah...',
      options: [
        '$+106\\text{ kJ/mol}$',
        '$-106\\text{ kJ/mol}$',
        '$-212\\text{ kJ/mol}$',
        '$-154\\text{ kJ/mol}$'
      ],
      answer: 'B',
      hint: 'Cari dahulu $\\Delta H_c^\\circ$ untuk $1\\text{ mol}$ $\\text{C}_3\\text{H}_8$, lalu gunakan persamaan $\\Delta H_c^\\circ = [3\\,\\Delta H^\\circ_f(\\text{CO}_2) + 4\\,\\Delta H^\\circ_f(\\text{H}_2\\text{O})] - \\Delta H^\\circ_f(\\text{C}_3\\text{H}_8)$.',
      solution: 'Jumlah mol propana $= \\frac{11}{44} = 0{,}25\\text{ mol}$, sehingga $\\Delta H_c^\\circ(\\text{C}_3\\text{H}_8) = \\frac{-555\\text{ kJ}}{0{,}25\\text{ mol}} = -2220\\text{ kJ/mol}$. Persamaan pembakaran: $\\text{C}_3\\text{H}_8(g) + 5\\text{O}_2(g) \\longrightarrow 3\\text{CO}_2(g) + 4\\text{H}_2\\text{O}(l)$. Jadi $-2220 = [3(-394) + 4(-286)] - \\Delta H^\\circ_f(\\text{C}_3\\text{H}_8) = (-1182 - 1144) - \\Delta H^\\circ_f(\\text{C}_3\\text{H}_8) = -2326 - \\Delta H^\\circ_f(\\text{C}_3\\text{H}_8)$. Diperoleh $\\Delta H^\\circ_f(\\text{C}_3\\text{H}_8) = -2326 + 2220 = -106\\text{ kJ/mol}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Diketahui $\\Delta H_c^\\circ\\ \\text{CH}_4(g) = -890\\text{ kJ/mol}$ ($M_r = 16$) dan $\\Delta H_c^\\circ\\ \\text{C}_3\\text{H}_8(g) = -2220\\text{ kJ/mol}$ ($M_r = 44$). Apabila suatu proses pemanasan memerlukan energi kalor sebesar $4440\\text{ kJ}$ melalui pembakaran sempurna, kesimpulan yang paling tepat mengenai perbandingan kedua bahan bakar tersebut adalah...',
      options: [
        'propana memiliki nilai kalor per gram lebih tinggi daripada metana sehingga massanya lebih hemat',
        'kedua bahan bakar mengemisikan jumlah mol $\\text{CO}_2$ yang tepat sama untuk menghasilkan $4440\\text{ kJ}$',
        'metana memerlukan massa lebih besar dan menghasilkan emisi $\\text{CO}_2$ lebih banyak daripada propana',
        'metana memiliki nilai kalor per gram lebih tinggi ($55{,}6\\text{ kJ/g}$ vs $50{,}5\\text{ kJ/g}$) dan mengemisikan $\\text{CO}_2$ lebih sedikit ($< 5\\text{ mol}$) dibandingkan propana ($6\\text{ mol}$)'
      ],
      answer: 'D',
      hint: 'Hitung kalor per gram ($|\\Delta H_c^\\circ| / M_r$) dan jumlah mol $\\text{CO}_2$ yang terbentuk untuk menghasilkan kalor $4440\\text{ kJ}$ pada masing-masing bahan bakar.',
      solution: 'Nilai kalor metana $= \\frac{890}{16} \\approx 55{,}6\\text{ kJ/g}$, sedangkan propana $= \\frac{2220}{44} \\approx 50{,}5\\text{ kJ/g}$. Untuk menyuplai $4440\\text{ kJ}$, propana membutuhkan tepat $2\\text{ mol}$ ($88\\text{ g}$) dan menghasilkan $2 \\times 3 = 6\\text{ mol}\\ \\text{CO}_2$. Sebaliknya, metana hanya membutuhkan $\\frac{4440}{890} \\approx 4{,}99\\text{ mol}$ ($79{,}8\\text{ g}$) dan menghasilkan $4{,}99\\text{ mol}\\ \\text{CO}_2$ ($< 5\\text{ mol}$). Jawaban: **D**.'
    })
  ]
});
