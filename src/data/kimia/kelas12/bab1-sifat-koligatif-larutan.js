import { bab, soal } from '../author.js';

export default bab({
  grade: 12,
  number: 1,
  slug: 'sifat-koligatif-larutan',
  title: 'Sifat Koligatif Larutan Elektrolit dan Nonelektrolit',
  element: "Pemahaman Kimia: molalitas, fraksi mol, penurunan tekanan uap, kenaikan titik didih, penurunan titik beku, tekanan osmotik, dan faktor van't Hoff",
  summary: {
    overview: 'Sifat koligatif larutan adalah sifat fisis larutan yang hanya bergantung pada jumlah partikel zat terlarut dan tidak bergantung pada jenis zat terlarutnya. Bab ini membahas satuan konsentrasi molalitas dan fraksi mol, empat sifat koligatif utama—penurunan tekanan uap (Hukum Raoult), kenaikan titik didih, penurunan titik beku, dan tekanan osmotik—perbandingan antara larutan nonelektrolit dan elektrolit melalui faktor van\'t Hoff, pembacaan diagram fase P-T, serta penerapannya dalam industri dan kesehatan.',
    coreConcepts: [
      'Molalitas dan Fraksi Mol: Molalitas ($m$) menyatakan jumlah mol zat terlarut dalam $1\\text{ kg}$ pelarut ($m = \\frac{n}{p(\\text{kg})}$) dan tidak dipengaruhi suhu. Fraksi mol ($X$) menyatakan perbandingan mol suatu komponen terhadap jumlah mol total larutan, dengan $X_{\\text{terlarut}} + X_{\\text{pelarut}} = 1$.',
      'Penurunan Tekanan Uap Menurut Hukum Raoult: Kehadiran zat terlarut yang sukar menguap menghalangi penguapan molekul pelarut di permukaan, sehingga tekanan uap larutan lebih rendah daripada pelarut murni ($P = P^0 \\cdot X_{\\text{pelarut}}$ dan $\\Delta P = P^0 \\cdot X_{\\text{terlarut}}$).',
      'Kenaikan Titik Didih dan Penurunan Titik Beku: Penurunan tekanan uap larutan menyebabkan rentang wujud cair melebar: titik didih larutan naik sebesar $\\Delta T_b = m \\cdot K_b \\cdot i$ dan titik bekunya turun sebesar $\\Delta T_f = m \\cdot K_f \\cdot i$. Pada diagram fase $P$-$T$, kurva larutan bergeser di bawah dan di kiri kurva pelarut murni.',
      'Tekanan Osmotik dan Keseimbangan Cairan: Tekanan osmotik ($\\Pi = M \\cdot R \\cdot T \\cdot i$) adalah tekanan luar minimum yang diperlukan untuk menghentikan aliran pelarut melalui membran semipermeabel dari larutan encer ke larutan pekat. Larutan dengan tekanan osmotik sama disebut isotonik; lebih rendah disebut hipotonik; lebih tinggi disebut hipertonik.',
      "Faktor van't Hoff pada Larutan Elektrolit: Zat elektrolit terionisasi menghasilkan lebih banyak partikel terlarut dibandingkan jumlah mol mula-mulanya. Faktor pengali koligatif dirumuskan $i = 1 + (n - 1)\\alpha$, dengan $n$ jumlah ion per rumus kimia dan $\\alpha$ derajat ionisasi ($\\alpha = 1$ untuk elektrolit kuat; $0 < \\alpha < 1$ untuk elektrolit lemah; $i = 1$ untuk nonelektrolit)."
    ],
    keyFormulas: [
      { label: 'Molalitas & Fraksi Mol', formula: 'm = \\dfrac{\\text{massa}}{M_r} \\times \\dfrac{1000}{p(\\text{g})} \\qquad X_t = \\dfrac{n_t}{n_t + n_p}' },
      { label: 'Penurunan Tekanan Uap', formula: '\\Delta P = P^0 - P = P^0 \\cdot X_t \\qquad P = P^0 \\cdot X_p' },
      { label: 'Titik Didih & Titik Beku', formula: '\\Delta T_b = m \\cdot K_b \\cdot i \\qquad \\Delta T_f = m \\cdot K_f \\cdot i' },
      { label: "Tekanan Osmotik & van't Hoff", formula: '\\Pi = M \\cdot R \\cdot T \\cdot i \\qquad i = 1 + (n - 1)\\alpha' }
    ],
    workedExamples: [
      {
        title: 'Menentukan massa molar zat dari kenaikan titik didih',
        problem: 'Sebanyak $12\\text{ g}$ zat nonelektrolit dilarutkan dalam $250\\text{ g}$ air sehingga larutan mendidih pada $100{,}208^\\circ\\text{C}$. Jika $K_b\\text{ air} = 0{,}52^\\circ\\text{C/m}$, hitunglah massa molar ($M_r$) zat tersebut.',
        solution: '$\\Delta T_b = 100{,}208 - 100 = 0{,}208^\\circ\\text{C}$. Karena nonelektrolit, $i = 1$. Maka $m = \\dfrac{\\Delta T_b}{K_b} = \\dfrac{0{,}208}{0{,}52} = 0{,}4\\text{ m}$. Selanjutnya $0{,}4 = \\dfrac{12}{M_r} \\times \\dfrac{1000}{250} = \\dfrac{48}{M_r}$, sehingga $M_r = \\dfrac{48}{0{,}4} = \\mathbf{120\\text{ g/mol}}$.'
      },
      {
        title: 'Menghitung titik beku larutan elektrolit kuat',
        problem: 'Sebanyak $14{,}2\\text{ g}$ $\\text{Na}_2\\text{SO}_4$ ($M_r = 142$) dilarutkan dalam $500\\text{ g}$ air ($K_f = 1{,}86^\\circ\\text{C/m}$). Jika $\\text{Na}_2\\text{SO}_4$ terionisasi sempurna, tentukan titik beku larutan tersebut.',
        solution: '$\\text{Na}_2\\text{SO}_4 \\longrightarrow 2\\text{Na}^+ + \\text{SO}_4^{2-}$ menghasilkan $n = 3$ ion. Karena terionisasi sempurna ($\\alpha = 1$), maka $i = 3$. Molalitas $m = \\dfrac{14{,}2}{142} \\times \\dfrac{1000}{500} = 0{,}2\\text{ m}$. Penurunan titik beku $\\Delta T_f = 0{,}2 \\times 1{,}86 \\times 3 = 1{,}116^\\circ\\text{C}$, sehingga titik beku larutan $T_f = 0 - 1{,}116 = \\mathbf{-1{,}116^\\circ\\text{C}}$.'
      },
      {
        title: 'Menghitung tekanan osmotik dan kesetaraan isotonik',
        problem: 'Hitung tekanan osmotik larutan urea $0{,}2\\text{ M}$ pada suhu $27^\\circ\\text{C}$ ($R = 0{,}082\\text{ L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\text{K}^{-1}$), dan tentukan konsentrasi larutan $\\text{NaCl}$ ($\\alpha = 1$) yang isotonik dengannya.',
        solution: '$T = 27 + 273 = 300\\text{ K}$. Untuk urea ($i = 1$), $\\Pi = 0{,}2 \\times 0{,}082 \\times 300 \\times 1 = \\mathbf{4{,}92\\text{ atm}}$. Agar isotonik, $(M \\cdot i)_{\\text{NaCl}} = (M \\cdot i)_{\\text{urea}}$. Karena $i_{\\text{NaCl}} = 2$, diperoleh $M_{\\text{NaCl}} \\times 2 = 0{,}2 \\implies M_{\\text{NaCl}} = \\mathbf{0{,}1\\text{ M}}$.'
      }
    ],
    misconceptions: [
      'Menyamakan rumus molaritas ($M$, per liter larutan) dengan molalitas ($m$, per kilogram pelarut). Untuk $\\Delta T_b$ dan $\\Delta T_f$ digunakan molalitas ($m$), sedangkan untuk $\\Pi$ digunakan molaritas ($M$).',
      'Lupa mengalikan faktor van\'t Hoff ($i$) pada larutan elektrolit, atau keliru menghitung $n$ dengan memecah ion poliatomik (misalnya $\\text{Na}_2\\text{SO}_4$ memiliki $n = 3$, bukan $7$).',
      'Menganggap penurunan tekanan uap $\\Delta P$ dihitung memakai fraksi mol pelarut ($X_p$), padahal $\\Delta P = P^0 X_{\\text{terlarut}}$ sedangkan tekanan uap larutan $P = P^0 X_{\\text{pelarut}}$.',
      'Menyangka titik beku larutan lebih tinggi daripada titik beku pelarut murni; seharusnya titik beku justru turun ($T_f = T_f^0 - \\Delta T_f$, misalnya menjadi negatif pada pelarut air).'
    ],
    tutorTip: 'Saat membandingkan sifat koligatif beberapa larutan dengan konsentrasi setara, cukup bandingkan hasil kali konsentrasi dan jumlah partikel ($m \\cdot i$ atau $M \\cdot i$). Semakin besar nilainya, semakin besar $\\Delta P$, $\\Delta T_b$, $\\Delta T_f$, dan $\\Pi$, sehingga titik didih makin tinggi tetapi titik beku dan tekanan uap makin rendah.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Pernyataan yang paling tepat mengenai sifat koligatif larutan adalah sifat larutan yang hanya bergantung pada...',
      options: [
        'jenis zat terlarut dan jenis pelarut yang digunakan',
        'jumlah partikel zat terlarut dalam larutan',
        'massa molekul relatif ($M_r$) zat terlarut',
        'derajat keasaman ($\\text{pH}$) larutan yang terbentuk'
      ],
      answer: 'B',
      hint: 'Ingat kata kunci "koligatif" yang merujuk pada kumpulan atau banyaknya partikel.',
      solution: 'Sifat koligatif larutan hanya ditentukan oleh banyaknya partikel zat terlarut (molekul atau ion) di dalam sejumlah tertentu pelarut, bukan sifat kimia atau jenis zat terlarutnya. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebanyak $18\\text{ g}$ glukosa ($M_r = 180$) dilarutkan dalam $250\\text{ g}$ air. Molalitas larutan glukosa tersebut adalah...',
      options: [
        '$0{,}4\\text{ m}$',
        '$0{,}2\\text{ m}$',
        '$0{,}5\\text{ m}$',
        '$0{,}8\\text{ m}$'
      ],
      answer: 'A',
      hint: 'Gunakan rumus $m = \\dfrac{\\text{massa}}{M_r} \\times \\dfrac{1000}{p(\\text{g})}$.',
      solution: 'Mol glukosa $= \\dfrac{18}{180} = 0{,}1\\text{ mol}$ dalam $0{,}25\\text{ kg}$ air. Maka $m = \\dfrac{0{,}1}{0{,}25} = \\mathbf{0{,}4\\text{ m}}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebanyak $1\\text{ mol}$ urea dilarutkan ke dalam $162\\text{ g}$ air ($M_r\\text{ air} = 18$). Fraksi mol urea dalam larutan tersebut adalah...',
      options: [
        '$0{,}09$',
        '$0{,}11$',
        '$0{,}90$',
        '$0{,}10$'
      ],
      answer: 'D',
      hint: 'Hitung mol air terlebih dahulu, lalu bagi mol urea dengan jumlah mol total.',
      solution: 'Mol air $= \\dfrac{162}{18} = 9\\text{ mol}$. Fraksi mol urea $X_{\\text{urea}} = \\dfrac{n_{\\text{urea}}}{n_{\\text{urea}} + n_{\\text{air}}} = \\dfrac{1}{1 + 9} = \\mathbf{0{,}10}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Penerapan sifat koligatif berupa penurunan titik beku dalam kehidupan sehari-hari ditunjukkan oleh peristiwa...',
      options: [
        'penyerapan air oleh akar tanaman melalui membran sel',
        'penggunaan cairan infus yang isotonik dengan sel darah',
        'penaburan garam dapur di jalan raya bersalju pada musim dingin',
        'desalinasi air laut menjadi air tawar melalui osmosis balik'
      ],
      answer: 'C',
      hint: 'Garam yang larut dalam lelehan es menurunkan titik beku air sehingga es mencair di bawah $0^\\circ\\text{C}$.',
      solution: 'Penaburan garam di jalan bersalju membuat larutan garam memiliki titik beku lebih rendah dari $0^\\circ\\text{C}$ sehingga salju mencair; opsi lain merupakan penerapan tekanan osmotik. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Jika kalsium klorida ($\\text{CaCl}_2$) dilarutkan dalam air dan terionisasi sempurna ($\\alpha = 1$), nilai faktor van\'t Hoff ($i$) larutan tersebut adalah...',
      options: [
        '$3$',
        '$2$',
        '$4$',
        '$1$'
      ],
      answer: 'A',
      hint: 'Tuliskan reaksi ionisasi $\\text{CaCl}_2$ untuk mengetahui jumlah total ion ($n$).',
      solution: 'Reaksi ionisasi $\\text{CaCl}_2 \\longrightarrow \\text{Ca}^{2+} + 2\\text{Cl}^-$ menghasilkan $n = 1 + 2 = 3$ ion. Karena $\\alpha = 1$, maka $i = 1 + (3 - 1)(1) = \\mathbf{3}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebanyak $30\\text{ g}$ urea ($M_r = 60$) dilarutkan dalam $81\\text{ g}$ air ($M_r = 18$) pada suhu $25^\\circ\\text{C}$. Jika tekanan uap jenuh air murni pada suhu tersebut $25\\text{ mmHg}$, tekanan uap jenuh larutan adalah...',
      options: [
        '$2{,}5\\text{ mmHg}$',
        '$20{,}0\\text{ mmHg}$',
        '$22{,}5\\text{ mmHg}$',
        '$24{,}0\\text{ mmHg}$'
      ],
      answer: 'C',
      hint: 'Tekanan uap larutan dihitung dengan $P = P^0 \\cdot X_{\\text{pelarut}}$.',
      solution: '$n_{\\text{urea}} = \\dfrac{30}{60} = 0{,}5\\text{ mol}$ dan $n_{\\text{air}} = \\dfrac{81}{18} = 4{,}5\\text{ mol}$. Fraksi mol air $X_{\\text{air}} = \\dfrac{4{,}5}{0{,}5 + 4{,}5} = 0{,}9$. Maka $P = 25 \\times 0{,}9 = \\mathbf{22{,}5\\text{ mmHg}}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebanyak $9\\text{ g}$ suatu zat nonelektrolit dilarutkan ke dalam $200\\text{ g}$ air. Larutan mendidih pada suhu $100{,}13^\\circ\\text{C}$ pada tekanan $1\\text{ atm}$ ($K_b\\text{ air} = 0{,}52^\\circ\\text{C/m}$). Massa molar zat tersebut adalah...',
      options: [
        '$90\\text{ g/mol}$',
        '$180\\text{ g/mol}$',
        '$120\\text{ g/mol}$',
        '$342\\text{ g/mol}$'
      ],
      answer: 'B',
      hint: 'Cari molalitas larutan terlebih dahulu dari $\\Delta T_b = m \\cdot K_b$.',
      solution: '$\\Delta T_b = 100{,}13 - 100 = 0{,}13^\\circ\\text{C}$, sehingga $m = \\dfrac{0{,}13}{0{,}52} = 0{,}25\\text{ m}$. Dari $m = \\dfrac{9}{M_r} \\times \\dfrac{1000}{200} = \\dfrac{45}{M_r}$, diperoleh $M_r = \\dfrac{45}{0{,}25} = \\mathbf{180\\text{ g/mol}}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Larutan asam asetat ($\\text{CH}_3\\text{COOH}$) $0{,}5\\text{ m}$ dalam air ($K_f = 1{,}86^\\circ\\text{C/m}$) mengalami ionisasi sebesar $20\\%$. Titik beku larutan tersebut adalah...',
      options: [
        '$-0{,}930^\\circ\\text{C}$',
        '$+1{,}116^\\circ\\text{C}$',
        '$-1{,}860^\\circ\\text{C}$',
        '$-1{,}116^\\circ\\text{C}$'
      ],
      answer: 'D',
      hint: 'Asam asetat terionisasi menjadi 2 ion ($\\text{H}^+$ dan $\\text{CH}_3\\text{COO}^-$) dengan $\\alpha = 0{,}2$.',
      solution: 'Untuk $n = 2$ dan $\\alpha = 0{,}2$, faktor van\'t Hoff $i = 1 + (2 - 1)(0{,}2) = 1{,}2$. Penurunan titik beku $\\Delta T_f = 0{,}5 \\times 1{,}86 \\times 1{,}2 = 1{,}116^\\circ\\text{C}$, sehingga $T_f = 0 - 1{,}116 = \\mathbf{-1{,}116^\\circ\\text{C}}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Tekanan osmotik larutan $\\text{NaCl}$ $0{,}1\\text{ M}$ (terionisasi sempurna) pada suhu $27^\\circ\\text{C}$ ($R = 0{,}082\\text{ L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\text{K}^{-1}$) adalah...',
      options: [
        '$4{,}92\\text{ atm}$',
        '$2{,}46\\text{ atm}$',
        '$0{,}492\\text{ atm}$',
        '$9{,}84\\text{ atm}$'
      ],
      answer: 'A',
      hint: 'Ubah suhu ke Kelvin ($T = 27 + 273$) dan kalikan rumus $\\Pi = M R T i$ dengan $i = 2$.',
      solution: '$T = 300\\text{ K}$ dan $i_{\\text{NaCl}} = 2$. Maka $\\Pi = 0{,}1 \\times 0{,}082 \\times 300 \\times 2 = \\mathbf{4{,}92\\text{ atm}}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Di antara larutan berair berikut (garam dianggap terionisasi sempurna), larutan yang memiliki titik didih paling tinggi adalah...',
      options: [
        'glukosa $0{,}4\\text{ m}$',
        '$\\text{NaCl}$ $0{,}2\\text{ m}$',
        '$\\text{Na}_2\\text{SO}_4$ $0{,}2\\text{ m}$',
        '$\\text{AlCl}_3$ $0{,}1\\text{ m}$'
      ],
      answer: 'C',
      hint: 'Bandingkan nilai molalitas partikel total ($m \\cdot i$) dari keempat larutan.',
      solution: 'Nilai $m \\cdot i$ masing-masing: glukosa $0{,}4 \\times 1 = 0{,}4\\text{ m}$; $\\text{NaCl}$ $0{,}2 \\times 2 = 0{,}4\\text{ m}$; $\\text{Na}_2\\text{SO}_4$ $0{,}2 \\times 3 = 0{,}6\\text{ m}$; $\\text{AlCl}_3$ $0{,}1 \\times 4 = 0{,}4\\text{ m}$. Nilai terbesar dimiliki $\\text{Na}_2\\text{SO}_4$ $0{,}2\\text{ m}$ sehingga kenaikan titik didihnya paling besar. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak $11{,}1\\text{ g}$ $\\text{CaCl}_2$ ($M_r = 111$) dilarutkan ke dalam $500\\text{ g}$ air ($K_f = 1{,}86^\\circ\\text{C/m}$). Jika larutan tersebut membeku pada suhu $-1{,}0416^\\circ\\text{C}$, derajat ionisasi $\\text{CaCl}_2$ dalam larutan adalah...',
      options: [
        '$0{,}75$',
        '$0{,}80$',
        '$0{,}85$',
        '$0{,}90$'
      ],
      answer: 'D',
      hint: 'Tentukan nilai $i$ terlebih dahulu dari $\\Delta T_f = m \\cdot K_f \\cdot i$, lalu substitusi ke $i = 1 + (n - 1)\\alpha$.',
      solution: '$m = \\dfrac{11{,}1}{111} \\times \\dfrac{1000}{500} = 0{,}2\\text{ m}$. Dari $\\Delta T_f = 1{,}0416 = 0{,}2 \\times 1{,}86 \\times i = 0{,}372\\,i$, didapat $i = \\dfrac{1{,}0416}{0{,}372} = 2{,}8$. Karena $\\text{CaCl}_2$ mempunyai $n = 3$, maka $2{,}8 = 1 + 2\\alpha \\implies \\alpha = \\mathbf{0{,}90}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pada suhu yang sama, $500\\text{ mL}$ larutan glukosa ($M_r = 180$) ternyata isotonik dengan $250\\text{ mL}$ larutan $\\text{BaCl}_2$ $0{,}1\\text{ M}$ yang terionisasi sempurna. Massa glukosa yang terlarut dalam larutan tersebut adalah...',
      options: [
        '$18\\text{ g}$',
        '$27\\text{ g}$',
        '$9\\text{ g}$',
        '$54\\text{ g}$'
      ],
      answer: 'B',
      hint: 'Isotonik pada suhu sama berarti $\\Pi_1 = \\Pi_2 \\implies (M \\cdot i)_1 = (M \\cdot i)_2$.',
      solution: '$\\text{BaCl}_2$ ($\\alpha = 1$) memiliki $n = 3$ sehingga $i = 3$. Dari kesetaraan isotonik, $M_{\\text{glukosa}} \\times 1 = 0{,}1 \\times 3 = 0{,}3\\text{ M}$. Dalam $0{,}5\\text{ L}$ larutan terdapat $n = 0{,}3 \\times 0{,}5 = 0{,}15\\text{ mol}$ glukosa, sehingga massanya $0{,}15 \\times 180 = \\mathbf{27\\text{ g}}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu senyawa organik nonelektrolit memiliki rumus empiris $\\text{CH}_2\\text{O}$ ($A_r\\text{ C}=12, \\text{H}=1, \\text{O}=16$). Sebanyak $15\\text{ g}$ senyawa ini dilarutkan dalam air hingga volume $500\\text{ mL}$ pada suhu $27^\\circ\\text{C}$ dan memberikan tekanan osmotik $4{,}1\\text{ atm}$ ($R = 0{,}082\\text{ L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\text{K}^{-1}$). Rumus molekul senyawa tersebut adalah...',
      options: [
        '$\\text{C}_6\\text{H}_{12}\\text{O}_6$',
        '$\\text{C}_3\\text{H}_6\\text{O}_3$',
        '$\\text{C}_4\\text{H}_8\\text{O}_4$',
        '$\\text{C}_2\\text{H}_4\\text{O}_2$'
      ],
      answer: 'A',
      hint: 'Hitung $M_r$ senyawa dari persamaan $\\Pi = \\dfrac{\\text{massa}}{M_r \\cdot V} R T$, lalu bandingkan dengan massa rumus empiris $\\text{CH}_2\\text{O}$.',
      solution: '$T = 300\\text{ K}$ dan $V = 0{,}5\\text{ L}$. Dari $4{,}1 = \\dfrac{15}{M_r \\times 0{,}5} \\times 0{,}082 \\times 300 = \\dfrac{30 \\times 24{,}6}{M_r}$, diperoleh $M_r = \\dfrac{738}{4{,}1} = 180\\text{ g/mol}$. Massa rumus $\\text{CH}_2\\text{O} = 30$, sehingga kelipatannya $\\dfrac{180}{30} = 6$ dan rumus molekulnya adalah **$\\text{C}_6\\text{H}_{12}\\text{O}_6$**. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah larutan zat nonelektrolit dalam air ($M_r = 18$, $K_f = 1{,}86^\\circ\\text{C/m}$) menyebabkan tekanan uap jenuh air turun dari $25{,}9\\text{ mmHg}$ menjadi $25{,}0\\text{ mmHg}$. Penurunan titik beku larutan tersebut adalah...',
      options: [
        '$1{,}86^\\circ\\text{C}$',
        '$2{,}79^\\circ\\text{C}$',
        '$3{,}72^\\circ\\text{C}$',
        '$5{,}58^\\circ\\text{C}$'
      ],
      answer: 'C',
      hint: 'Dari perbandingan $\\dfrac{n_t}{n_p} = \\dfrac{\\Delta P}{P}$, ubah $n_p$ menjadi massa air dalam kilogram untuk memperoleh molalitas.',
      solution: 'Menurut Hukum Raoult, $\\dfrac{\\Delta P}{P^0} = X_t = \\dfrac{0{,}9}{25{,}9} = \\dfrac{9}{259}$ dan $X_p = \\dfrac{250}{259}$, sehingga perbandingan mol $\\dfrac{n_t}{n_p} = \\dfrac{9}{250}$. Dalam $1\\text{ kg}$ air ($n_p = \\dfrac{1000}{18}\\text{ mol}$), molalitas larutan adalah $m = \\dfrac{9}{250} \\times \\dfrac{1000}{18} = 2{,}0\\text{ m}$. Maka $\\Delta T_f = 2{,}0 \\times 1{,}86 = \\mathbf{3{,}72^\\circ\\text{C}}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak $6\\text{ g}$ urea ($M_r = 60$) dan $5{,}85\\text{ g}$ $\\text{NaCl}$ ($M_r = 58{,}5$, terionisasi sempurna) dilarutkan bersama ke dalam $500\\text{ g}$ air ($K_b = 0{,}52^\\circ\\text{C/m}$). Titik didih larutan campuran tersebut pada tekanan $1\\text{ atm}$ adalah...',
      options: [
        '$100{,}104^\\circ\\text{C}$',
        '$100{,}156^\\circ\\text{C}$',
        '$100{,}208^\\circ\\text{C}$',
        '$100{,}312^\\circ\\text{C}$'
      ],
      answer: 'D',
      hint: 'Sifat koligatif bergantung pada jumlah mol total seluruh partikel terlarut (molekul urea + ion $\\text{Na}^+$ dan $\\text{Cl}^-$).',
      solution: 'Mol partikel urea $= \\dfrac{6}{60} \\times 1 = 0{,}1\\text{ mol}$, sedangkan mol partikel dari $\\text{NaCl}$ $= \\dfrac{5{,}85}{58{,}5} \\times 2 = 0{,}2\\text{ mol}$. Total mol partikel terlarut $= 0{,}3\\text{ mol}$ dalam $0{,}5\\text{ kg}$ air, sehingga molalitas efektif $m_{\\text{total}} = \\dfrac{0{,}3}{0{,}5} = 0{,}6\\text{ m}$. Kenaikan titik didih $\\Delta T_b = 0{,}6 \\times 0{,}52 = 0{,}312^\\circ\\text{C}$, jadi $T_b = \\mathbf{100{,}312^\\circ\\text{C}}$. Jawaban: **D**.'
    })
  ]
});
