import { bab, soal } from '../author.js';

export default bab({
  grade: 10,
  number: 4,
  slug: 'hukum-dasar-dan-stoikiometri',
  title: 'Hukum Dasar Kimia dan Stoikiometri',
  element: 'Pemahaman Kimia: hukum kekekalan massa, perbandingan tetap, konsep mol, pereaksi pembatas, dan rumus empiris-molekul',
  summary: {
    overview: 'Stoikiometri mempelajari hubungan kuantitatif antara pereaksi dan hasil reaksi berdasarkan hukum-hukum dasar kimia yang ditemukan secara eksperimental. Bab ini membahas Hukum Kekekalan Massa Lavoisier, Hukum Perbandingan Tetap Proust, Hukum Kelipatan Berganda Dalton, Hukum Perbandingan Volume Gay-Lussac, Hipotesis Avogadro, penyetaraan persamaan reaksi, konsep mol beserta kaitannya dengan massa, jumlah partikel, dan volume gas, penentuan rumus empiris dan rumus molekul, serta analisis pereaksi pembatas dan persen hasil reaksi.',
    coreConcepts: [
      'Hukum-hukum Dasar Kimia: Hukum Lavoisier menyatakan massa total zat sebelum dan sesudah reaksi dalam sistem tertutup adalah tetap. Hukum Proust menyatakan perbandingan massa unsur-unsur dalam suatu senyawa murni selalu tetap. Hukum Dalton menyatakan jika dua unsur membentuk lebih dari satu senyawa dan massa satu unsur dibuat tetap, perbandingan massa unsur lainnya berupa bilangan bulat sederhana. Hukum Gay-Lussac dan Avogadro menyatakan pada suhu dan tekanan yang sama, perbandingan volume gas-gas yang bereaksi sama dengan perbandingan koefisien reaksi sekaligus perbandingan jumlah molnya.',
      'Massa Atom Relatif dan Konsep Mol: Massa atom relatif ($A_r$) dan massa molekul relatif ($M_r$) menjadi jembatan antara dunia atomik dan laboratorium. Satu mol zat mengandung tepat bilangan Avogadro $N_A = 6{,}02 \\times 10^{23}$ partikel. Jumlah mol ($n$) menghubungkan massa ($m = n \\times M_r$), jumlah partikel ($N = n \\times N_A$), volume gas STP pada $0^\\circ\\text{C}, 1\\text{ atm}$ ($V = n \\times 22{,}4\\text{ L}$), dan kondisi non-STP melalui persamaan gas ideal $PV = nRT$.',
      'Rumus Empiris, Rumus Molekul, dan Senyawa Hidrat: Rumus empiris (RE) adalah perbandingan bilangan bulat paling sederhana dari jumlah mol atom penyusun senyawa, sedangkan rumus molekul (RM) menyatakan jumlah atom sesungguhnya sebagai kelipatan $(\\text{RE})_k = \\text{RM}$ dengan $k = M_r\\text{ RM} / M_r\\text{ RE}$. Pada kristal garam hidrat $\\text{Garam} \\cdot x\\text{H}_2\\text{O}$, koefisien air kristal $x$ diperoleh dari perbandingan $n_{\\text{H}_2\\text{O}} : n_{\\text{garam anhidrat}}$.',
      'Persamaan Reaksi Setara dan Pereaksi Pembatas: Persamaan reaksi setara memastikan jumlah setiap jenis atom di ruas kiri dan kanan sama tanpa mengubah indeks rumus kimia zat. Apabila dua atau lebih pereaksi diketahui jumlahnya, pereaksi pembatas adalah zat yang memiliki rasio $(n / \\text{koefisien})$ terkecil dan habis lebih dahulu, sehingga seluruh mol produk yang terbentuk harus dihitung dari pereaksi pembatas. Efisiensi reaksi dinyatakan oleh persen hasil $(\\text{massa aktual} / \\text{massa teoretis}) \\times 100\\%$.'
    ],
    keyFormulas: [
      { label: 'Hubungan mol, massa, partikel, dan gas STP', formula: 'n = \\dfrac{m}{M_r} = \\dfrac{N}{6{,}02 \\times 10^{23}} = \\dfrac{V_{\\text{STP}}}{22{,}4\\text{ L/mol}}' },
      { label: 'Persamaan gas ideal & perbandingan gas (P, T sama)', formula: 'P V = n R T \\qquad \\dfrac{V_1}{n_1} = \\dfrac{V_2}{n_2}' },
      { label: 'Kadar unsur & penentuan rumus molekul', formula: '\\%\\,\\text{X} = \\dfrac{a \\cdot A_r\\,\\text{X}}{M_r\\text{ senyawa}} \\times 100\\% \\qquad k = \\dfrac{M_r\\text{ RM}}{M_r\\text{ RE}}' },
      { label: 'Persen hasil (rendemen reaksi)', formula: '\\%\\,\\text{Hasil} = \\dfrac{\\text{hasil aktual}}{\\text{hasil teoretis}} \\times 100\\%' }
    ],
    workedExamples: [
      {
        title: 'Menentukan pereaksi pembatas dan massa produk',
        problem: 'Sebanyak $5{,}6\\text{ gram}$ gas nitrogen ($M_r = 28$) direaksikan dengan $1{,}8\\text{ gram}$ gas hidrogen ($M_r = 2$) menurut reaksi $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\longrightarrow 2\\,\\text{NH}_3(g)$. Tentukan pereaksi pembatas dan massa $\\text{NH}_3$ ($M_r = 17$) yang terbentuk.',
        solution: 'Mol awal $n_{\\text{N}_2} = \\frac{5{,}6}{28} = 0{,}2\\text{ mol}$ dan $n_{\\text{H}_2} = \\frac{1{,}8}{2} = 0{,}9\\text{ mol}$. Bagi tiap mol dengan koefisiennya: $\\text{N}_2 = \\frac{0{,}2}{1} = 0{,}2$ dan $\\text{H}_2 = \\frac{0{,}9}{3} = 0{,}3$. Karena $0{,}2 < 0{,}3$, maka **$\\text{N}_2$** menjadi pereaksi pembatas. Mol $\\text{NH}_3 = 2 \\times 0{,}2 = 0{,}4\\text{ mol}$, sehingga massanya $0{,}4 \\times 17 = 6{,}8\\text{ gram}$.'
      },
      {
        title: 'Menentukan rumus empiris dan rumus molekul dari persen massa',
        problem: 'Suatu senyawa hidrokarbon mengandung $85{,}7\\%$ massa karbon dan $14{,}3\\%$ massa hidrogen ($A_r\\text{ C}=12, \\text{H}=1$). Jika $M_r$ senyawa tersebut adalah $56$, tentukan rumus molekulnya.',
        solution: 'Dalam $100\\text{ g}$ senyawa terdapat $85{,}7\\text{ g C}$ dan $14{,}3\\text{ g H}$. Perbandingan molnya $n_{\\text{C}} : n_{\\text{H}} = \\frac{85{,}7}{12} : \\frac{14{,}3}{1} \\approx 7{,}14 : 14{,}3 \\approx 1 : 2$, sehingga rumus empirisnya adalah $\\text{CH}_2$ ($M_r\\text{ RE} = 14$). Faktor kelipatan $k = \\frac{56}{14} = 4$, jadi rumus molekulnya adalah **$\\text{C}_4\\text{H}_8$**.'
      },
      {
        title: 'Menentukan kadar air kristal dalam senyawa hidrat',
        problem: 'Sebanyak $24{,}6\\text{ gram}$ kristal $\\text{MgSO}_4 \\cdot x\\text{H}_2\\text{O}$ dipanaskan hingga menjadi $12{,}0\\text{ gram}$ garam anhidrat $\\text{MgSO}_4$ ($M_r\\,\\text{MgSO}_4 = 120, \\text{H}_2\\text{O} = 18$). Tentukan nilai $x$.',
        solution: 'Massa air yang menguap adalah $24{,}6 - 12{,}0 = 12{,}6\\text{ gram}$. Mol $\\text{MgSO}_4 = \\frac{12{,}0}{120} = 0{,}1\\text{ mol}$ dan mol $\\text{H}_2\\text{O} = \\frac{12{,}6}{18} = 0{,}7\\text{ mol}$. Perbandingan mol $1 : x = 0{,}1 : 0{,}7 = 1 : 7$, sehingga diperoleh **$x = 7$** ($\\text{MgSO}_4 \\cdot 7\\text{H}_2\\text{O}$).'
      }
    ],
    misconceptions: [
      'Menentukan pereaksi pembatas langsung dari massa atau jumlah mol yang lebih kecil tanpa membagi dengan koefisien reaksi; seharusnya pembatas adalah zat dengan nilai $(n / \\text{koefisien})$ paling kecil.',
      'Mengubah angka indeks pada rumus kimia senyawa saat menyetarakan persamaan reaksi (misalnya mengubah $\\text{H}_2\\text{O}$ menjadi $\\text{H}_2\\text{O}_2$); penyetaraan hanya boleh dilakukan dengan mengubah koefisien di depan rumus kimia.',
      'Menggunakan faktor $22{,}4\\text{ L/mol}$ pada sembarang suhu dan tekanan; volume molar $22{,}4\\text{ L/mol}$ hanya berlaku tepat pada kondisi standar STP ($0^\\circ\\text{C}, 1\\text{ atm}$), sedangkan pada kondisi lain harus memakai $PV = nRT$ atau perbandingan gas pembanding.',
      'Mengira hukum perbandingan volume Gay-Lussac juga berlaku untuk zat padat atau cair dalam persamaan reaksi; hukum perbandingan volume hanya berlaku bagi spesi berwujud gas.'
    ],
    tutorTip: 'Di setiap soal stoikiometri reaksi, biasakan langsung mengubah seluruh data massa, partikel, atau volume ke dalam satuan **mol** di langkah pertama, lalu buat tabel Mula-mula, Bereaksi, Sisa (MRS) agar pereaksi pembatas dan zat sisa tidak pernah tertukar.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sebanyak $12\\text{ gram}$ pita magnesium dibakar sempurna di dalam wadah tertutup yang berisi gas oksigen sehingga terbentuk tepat $20\\text{ gram}$ padatan magnesium oksida ($\\text{MgO}$). Berdasarkan Hukum Kekekalan Massa Lavoisier, massa gas oksigen yang ikut bereaksi adalah...',
      options: [
        '32 gram',
        '16 gram',
        '12 gram',
        '8 gram'
      ],
      answer: 'D',
      hint: 'Dalam wadah tertutup, jumlah massa pereaksi sama persis dengan massa hasil reaksi.',
      solution: 'Menurut Hukum Kekekalan Massa, $\\text{massa Mg} + \\text{massa O}_2 = \\text{massa MgO}$. Dengan demikian, $12\\text{ g} + m_{\\text{O}_2} = 20\\text{ g}$, sehingga massa gas oksigen yang bereaksi adalah $20 - 12 = 8\\text{ gram}$. Jawaban: **D**'
    }),
    soal({
      level: 'Dasar',
      q: 'Perhatikan persamaan reaksi kimia yang belum setara berikut: $a\\,\\text{Al}(s) + b\\,\\text{HCl}(aq) \\longrightarrow c\\,\\text{AlCl}_3(aq) + d\\,\\text{H}_2(g)$. Harga koefisien $a, b, c,$ dan $d$ berturut-turut agar persamaan reaksi tersebut setara adalah...',
      options: [
        '1, 3, 1, dan 3',
        '2, 6, 2, dan 3',
        '2, 3, 2, dan 3',
        '1, 6, 1, dan 3'
      ],
      answer: 'B',
      hint: 'Setarakan atom $\\text{Cl}$ dan $\\text{H}$ secara bersamaan dengan mencari kelipatan persekutuan terkecil antara indeks $3$ pada $\\text{AlCl}_3$ dan $2$ pada $\\text{H}_2$.',
      solution: 'Jika $c = 1$, dibutuhkan $3\\text{ HCl}$, tetapi $3$ atom $\\text{H}$ menghasilkan koefisien pecahan $\\frac{3}{2}$ untuk $\\text{H}_2$. Kalikan seluruh koefisien dengan $2$ sehingga diperoleh $2\\,\\text{Al}(s) + 6\\,\\text{HCl}(aq) \\longrightarrow 2\\,\\text{AlCl}_3(aq) + 3\\,\\text{H}_2(g)$, dengan nilai $a, b, c, d$ berturut-turut $2, 6, 2,$ dan $3$. Jawaban: **B**'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada suhu dan tekanan tertentu, $10\\text{ liter}$ gas etana ($\\text{C}_2\\text{H}_6$) dibakar sempurna menurut persamaan reaksi setara: $2\\,\\text{C}_2\\text{H}_6(g) + 7\\,\\text{O}_2(g) \\longrightarrow 4\\,\\text{CO}_2(g) + 6\\,\\text{H}_2\\text{O}(g)$. Volume gas $\\text{O}_2$ yang diperlukan dan volume gas $\\text{CO}_2$ yang dihasilkan pada kondisi $P$ dan $T$ yang sama berturut-turut adalah...',
      options: [
        '35 L dan 20 L',
        '35 L dan 30 L',
        '14 L dan 20 L',
        '20 L dan 35 L'
      ],
      answer: 'A',
      hint: 'Pada suhu dan tekanan yang sama, perbandingan volume gas-gas sama dengan perbandingan koefisien reaksinya.',
      solution: 'Perbandingan koefisien $\\text{C}_2\\text{H}_6 : \\text{O}_2 : \\text{CO}_2 = 2 : 7 : 4$. Untuk $10\\text{ L}$ gas $\\text{C}_2\\text{H}_6$, diperlukan $V_{\\text{O}_2} = \\frac{7}{2} \\times 10\\text{ L} = 35\\text{ L}$ dan dihasilkan $V_{\\text{CO}_2} = \\frac{4}{2} \\times 10\\text{ L} = 20\\text{ L}$. Jawaban: **A**'
    }),
    soal({
      level: 'Dasar',
      q: 'Jumlah molekul air yang terdapat di dalam $9\\text{ gram}$ air murni ($\\text{H}_2\\text{O}$, diketahui $A_r\\text{ H} = 1, \\text{O} = 16$, dan $N_A = 6{,}02 \\times 10^{23}\\text{ mol}^{-1}$) adalah...',
      options: [
        '$1{,}204 \\times 10^{24}$ molekul',
        '$6{,}02 \\times 10^{23}$ molekul',
        '$3{,}01 \\times 10^{23}$ molekul',
        '$1{,}505 \\times 10^{23}$ molekul'
      ],
      answer: 'C',
      hint: 'Hitung $M_r\\,\\text{H}_2\\text{O}$ terlebih dahulu, cari jumlah mol ($n = m / M_r$), lalu kalikan dengan tetapan Avogadro.',
      solution: 'Massa molekul relatif $M_r\\,\\text{H}_2\\text{O} = 2(1) + 16 = 18$. Jumlah mol air $n = \\frac{9}{18} = 0{,}5\\text{ mol}$. Jumlah molekulnya adalah $N = 0{,}5 \\times 6{,}02 \\times 10^{23} = 3{,}01 \\times 10^{23}$ molekul. Jawaban: **C**'
    }),
    soal({
      level: 'Dasar',
      q: 'Volume yang ditempati oleh $11\\text{ gram}$ gas karbon dioksida ($\\text{CO}_2$, diketahui $A_r\\text{ C} = 12, \\text{O} = 16$) apabila diukur pada keadaan standar STP ($0^\\circ\\text{C}, 1\\text{ atm}$, $V_m = 22{,}4\\text{ L/mol}$) adalah...',
      options: [
        '22,4 L',
        '11,2 L',
        '8,96 L',
        '5,6 L'
      ],
      answer: 'D',
      hint: 'Cari jumlah mol gas $\\text{CO}_2$ ($M_r = 44$), lalu kalikan dengan volume molar standar $22{,}4\\text{ L/mol}$.',
      solution: 'Massa molekul relatif $M_r\\,\\text{CO}_2 = 12 + 2(16) = 44$. Jumlah mol $\\text{CO}_2$ adalah $n = \\frac{11}{44} = 0{,}25\\text{ mol}$. Pada kondisi STP, volumenya $V = 0{,}25 \\times 22{,}4 = 5{,}6\\text{ L}$. Jawaban: **D**'
    }),
    soal({
      level: 'Sedang',
      q: 'Perbandingan massa besi ($\\text{Fe}$) dan belerang ($\\text{S}$) untuk membentuk senyawa besi(II) sulfida ($\\text{FeS}$) adalah tetap sebesar $7 : 4$. Jika $21\\text{ gram}$ serbuk besi direaksikan dengan $15\\text{ gram}$ serbuk belerang, massa $\\text{FeS}$ yang terbentuk beserta massa pereaksi yang tersisa adalah...',
      options: [
        '33 gram $\\text{FeS}$ dan sisa 3 gram belerang',
        '36 gram $\\text{FeS}$ tanpa ada zat yang tersisa',
        '33 gram $\\text{FeS}$ dan sisa 3 gram besi',
        '28 gram $\\text{FeS}$ dan sisa 8 gram belerang'
      ],
      answer: 'A',
      hint: 'Bagi masing-masing massa mula-mula dengan angka perbandingannya ($21/7$ dan $15/4$) untuk mengetahui unsur mana yang habis lebih dahulu.',
      solution: 'Faktor pengali besi adalah $\\frac{21}{7} = 3$, sedangkan faktor pengali belerang adalah $\\frac{15}{4} = 3{,}75$. Karena lebih kecil, $21\\text{ gram}$ besi habis bereaksi dan hanya memerlukan belerang sebanyak $3 \\times 4 = 12\\text{ gram}$. Dengan demikian terbentuk $21 + 12 = 33\\text{ gram}$ $\\text{FeS}$ dan tersisa $15 - 12 = 3\\text{ gram}$ belerang. Jawaban: **A**'
    }),
    soal({
      level: 'Sedang',
      q: 'Nitrogen dan oksigen dapat membentuk dua jenis senyawa oksida. Sebanyak $15\\text{ gram}$ oksida I tersusun dari $7\\text{ gram}$ nitrogen dan $8\\text{ gram}$ oksigen, sedangkan $46\\text{ gram}$ oksida II tersusun dari $14\\text{ gram}$ nitrogen dan $32\\text{ gram}$ oksigen. Jika massa nitrogen dibuat tetap sama, perbandingan massa oksigen pada oksida I terhadap oksida II sesuai Hukum Dalton adalah...',
      options: [
        '1 : 4',
        '1 : 2',
        '2 : 3',
        '3 : 4'
      ],
      answer: 'B',
      hint: 'Samakan terlebih dahulu massa nitrogen pada kedua senyawa menjadi $14\\text{ gram}$ dengan mengalikan komposisi oksida I sebesar $2$ kali.',
      solution: 'Pada oksida I, perbandingan $\\text{N} : \\text{O} = 7 : 8$, yang jika massa nitrogen dijadikan $14\\text{ gram}$ menjadi $14\\text{ g N} : 16\\text{ g O}$. Pada oksida II, untuk $14\\text{ g N}$ terdapat $32\\text{ g O}$. Dengan demikian perbandingan massa oksigen pada oksida I terhadap oksida II adalah $16 : 32 = 1 : 2$. Jawaban: **B**'
    }),
    soal({
      level: 'Sedang',
      q: 'Suatu senyawa hidrokarbon mengandung $80\\%$ massa unsur karbon dan $20\\%$ massa unsur hidrogen ($A_r\\text{ C} = 12, \\text{H} = 1$). Apabila massa molekul relatif senyawa tersebut adalah $30$, rumus molekul senyawa hidrokarbon itu adalah...',
      options: [
        '$\\text{CH}_3$',
        '$\\text{C}_2\\text{H}_4$',
        '$\\text{C}_3\\text{H}_8$',
        '$\\text{C}_2\\text{H}_6$'
      ],
      answer: 'D',
      hint: 'Tentukan rumus empiris dari perbandingan mol $\\text{C} : \\text{H}$, lalu bandingkan $M_r$ senyawa dengan $M_r$ rumus empirisnya.',
      solution: 'Dalam $100\\text{ g}$ senyawa terdapat $80\\text{ g C}$ dan $20\\text{ g H}$, sehingga $n_{\\text{C}} : n_{\\text{H}} = \\frac{80}{12} : \\frac{20}{1} = 6{,}67 : 20 = 1 : 3$. Rumus empirisnya adalah $\\text{CH}_3$ dengan $M_r\\text{ RE} = 12 + 3 = 15$. Faktor kelipatan $k = \\frac{30}{15} = 2$, sehingga rumus molekulnya adalah $(\\text{CH}_3)_2 = \\text{C}_2\\text{H}_6$. Jawaban: **D**'
    }),
    soal({
      level: 'Sedang',
      q: 'Untuk pemupukan lahan pertanian dibutuhkan tepat $14\\text{ kg}$ unsur nitrogen ($\\text{N}$). Massa pupuk urea murni, $\\text{CO(NH}_2)_2$, yang harus disiapkan agar memenuhi kebutuhan nitrogen tersebut adalah... ($A_r\\text{ C}=12, \\text{O}=16, \\text{N}=14, \\text{H}=1$)',
      options: [
        '15 kg',
        '28 kg',
        '30 kg',
        '60 kg'
      ],
      answer: 'C',
      hint: 'Hitung $M_r$ urea dan perhatikan bahwa setiap $1$ molekul $\\text{CO(NH}_2)_2$ mengandung $2$ atom nitrogen.',
      solution: 'Massa molekul relatif urea $M_r\\,\\text{CO(NH}_2)_2 = 12 + 16 + 2(14 + 2) = 60$. Dalam $60\\text{ bagian}$ massa urea terdapat $2 \\times 14 = 28\\text{ bagian}$ massa nitrogen. Oleh karena itu, massa urea yang diperlukan adalah $\\frac{60}{28} \\times 14\\text{ kg} = 30\\text{ kg}$. Jawaban: **C**'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebanyak $5{,}4\\text{ gram}$ logam aluminium ($A_r = 27$) dimasukkan ke dalam larutan yang mengandung $0{,}4\\text{ mol}$ $\\text{H}_2\\text{SO}_4$ menurut persamaan reaksi setara: $2\\,\\text{Al}(s) + 3\\,\\text{H}_2\\text{SO}_4(aq) \\longrightarrow \\text{Al}_2(\\text{SO}_4)_3(aq) + 3\\,\\text{H}_2(g)$. Volume gas hidrogen yang dihasilkan pada keadaan STP adalah...',
      options: [
        '6,72 L',
        '8,96 L',
        '4,48 L',
        '13,44 L'
      ],
      answer: 'A',
      hint: 'Tentukan pereaksi pembatas antara $\\text{Al}$ ($0{,}2\\text{ mol}$) dan $\\text{H}_2\\text{SO}_4$ ($0{,}4\\text{ mol}$) dengan membagi mol masing-masing terhadap koefisiennya.',
      solution: 'Mol awal $n_{\\text{Al}} = \\frac{5{,}4}{27} = 0{,}2\\text{ mol}$ dan $n_{\\text{H}_2\\text{SO}_4} = 0{,}4\\text{ mol}$. Perbandingan $\\frac{n}{\\text{koefisien}}$ untuk $\\text{Al}$ adalah $\\frac{0{,}2}{2} = 0{,}10$, sedangkan untuk $\\text{H}_2\\text{SO}_4$ adalah $\\frac{0{,}4}{3} \\approx 0{,}133$. Jadi $\\text{Al}$ adalah pereaksi pembatas. Mol $\\text{H}_2 = \\frac{3}{2} \\times 0{,}2 = 0{,}3\\text{ mol}$, sehingga volume pada STP adalah $0{,}3 \\times 22{,}4 = 6{,}72\\text{ L}$. Jawaban: **A**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak $4{,}92\\text{ gram}$ kristal garam hidrat magnesium sulfat ($\\text{MgSO}_4 \\cdot x\\text{H}_2\\text{O}$) dipanaskan hingga beratnya konstan dan menyisakan $2{,}40\\text{ gram}$ padatan anhidrat $\\text{MgSO}_4$. Jika diketahui $A_r\\text{ Mg} = 24, \\text{S} = 32, \\text{O} = 16,$ dan $\\text{H} = 1$, rumus kimia kristal garam hidrat tersebut adalah...',
      options: [
        '$\\text{MgSO}_4 \\cdot 5\\text{H}_2\\text{O}$',
        '$\\text{MgSO}_4 \\cdot 7\\text{H}_2\\text{O}$',
        '$\\text{MgSO}_4 \\cdot 6\\text{H}_2\\text{O}$',
        '$\\text{MgSO}_4 \\cdot 4\\text{H}_2\\text{O}$'
      ],
      answer: 'B',
      hint: 'Selisih massa sebelum dan sesudah pemanasan adalah massa $\\text{H}_2\\text{O}$ yang menguap; bandingkan mol $\\text{MgSO}_4$ ($M_r = 120$) dengan mol $\\text{H}_2\\text{O}$ ($M_r = 18$).',
      solution: 'Massa air kristal yang terlepas $= 4{,}92 - 2{,}40 = 2{,}52\\text{ gram}$. Jumlah mol garam anhidrat $n_{\\text{MgSO}_4} = \\frac{2{,}40}{120} = 0{,}02\\text{ mol}$ dan jumlah mol air $n_{\\text{H}_2\\text{O}} = \\frac{2{,}52}{18} = 0{,}14\\text{ mol}$. Perbandingan $1 : x = 0{,}02 : 0{,}14 = 1 : 7$, sehingga rumusnya adalah $\\text{MgSO}_4 \\cdot 7\\text{H}_2\\text{O}$. Jawaban: **B**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pembakaran sempurna $4{,}6\\text{ gram}$ suatu senyawa organik yang hanya mengandung unsur $\\text{C}$, $\\text{H}$, dan $\\text{O}$ menghasilkan $8{,}8\\text{ gram}$ gas $\\text{CO}_2$ dan $5{,}4\\text{ gram}$ uap air ($A_r\\text{ C}=12, \\text{H}=1, \\text{O}=16$). Jika massa molekul relatif senyawa tersebut adalah $46$, rumus molekul senyawa organik tersebut adalah...',
      options: [
        '$\\text{CH}_2\\text{O}$',
        '$\\text{C}_2\\text{H}_4\\text{O}$',
        '$\\text{C}_2\\text{H}_4\\text{O}_2$',
        '$\\text{C}_2\\text{H}_6\\text{O}$'
      ],
      answer: 'D',
      hint: 'Hitung mol dan massa atom $\\text{C}$ dari $\\text{CO}_2$ ($M_r = 44$) serta atom $\\text{H}$ dari $\\text{H}_2\\text{O}$ ($M_r = 18$), lalu kurangkan dari massa sampel untuk memperoleh massa oksigen.',
      solution: 'Mol $\\text{C} = n_{\\text{CO}_2} = \\frac{8{,}8}{44} = 0{,}2\\text{ mol}$ ($m_{\\text{C}} = 2{,}4\\text{ g}$). Mol $\\text{H} = 2 \\times n_{\\text{H}_2\\text{O}} = 2 \\times \\frac{5{,}4}{18} = 0{,}6\\text{ mol}$ ($m_{\\text{H}} = 0{,}6\\text{ g}$). Massa oksigen dalam sampel $= 4{,}6 - (2{,}4 + 0{,}6) = 1{,}6\\text{ g}$, sehingga $n_{\\text{O}} = \\frac{1{,}6}{16} = 0{,}1\\text{ mol}$. Perbandingan $n_{\\text{C}} : n_{\\text{H}} : n_{\\text{O}} = 0{,}2 : 0{,}6 : 0{,}1 = 2 : 6 : 1$, menghasilkan $\\text{C}_2\\text{H}_6\\text{O}$ yang tepat memiliki $M_r = 46$. Jawaban: **D**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pada reaksi sintesis amonia: $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\longrightarrow 2\\,\\text{NH}_3(g)$, sebanyak $14\\text{ gram}$ gas $\\text{N}_2$ ($A_r\\text{ N}=14$) direaksikan dengan $6\\text{ gram}$ gas $\\text{H}_2$ ($A_r\\text{ H}=1$). Jika persen hasil (rendemen) reaksi tersebut hanya mencapai $60\\%$, pereaksi pembatas dan massa gas $\\text{NH}_3$ yang benar-benar diperoleh berturut-turut adalah...',
      options: [
        '$\\text{H}_2$ dan 20,4 gram',
        '$\\text{N}_2$ dan 17,0 gram',
        '$\\text{N}_2$ dan 10,2 gram',
        '$\\text{H}_2$ dan 10,2 gram'
      ],
      answer: 'C',
      hint: 'Tentukan hasil teoretis dari pereaksi pembatas terlebih dahulu, lalu kalikan dengan persen hasil $60\\%$.',
      solution: 'Mol awal $n_{\\text{N}_2} = \\frac{14}{28} = 0{,}5\\text{ mol}$ ($0{,}5 / 1 = 0{,}5$) dan $n_{\\text{H}_2} = \\frac{6}{2} = 3{,}0\\text{ mol}$ ($3{,}0 / 3 = 1{,}0$). Karena lebih kecil, $\\text{N}_2$ adalah pereaksi pembatas. Mol $\\text{NH}_3$ teoretis $= 2 \\times 0{,}5 = 1{,}0\\text{ mol}$ atau $17\\text{ gram}$. Dengan rendemen $60\\%$, massa aktual $\\text{NH}_3 = 60\\% \\times 17\\text{ g} = 10{,}2\\text{ gram}$. Jawaban: **C**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak $9{,}0\\text{ gram}$ paduan logam aluminium ($A_r = 27$) dan magnesium ($A_r = 24$) tepat habis bereaksi dengan larutan $\\text{HCl}$ berlebih menghasilkan $10{,}08\\text{ liter}$ gas $\\text{H}_2$ pada keadaan STP ($22{,}4\\text{ L/mol}$) sesuai reaksi: $2\\,\\text{Al}(s) + 6\\,\\text{HCl}(aq) \\longrightarrow 2\\,\\text{AlCl}_3(aq) + 3\\,\\text{H}_2(g)$ dan $\\text{Mg}(s) + 2\\,\\text{HCl}(aq) \\longrightarrow \\text{MgCl}_2(aq) + \\text{H}_2(g)$. Persentase massa aluminium dalam paduan tersebut adalah...',
      options: [
        '60%',
        '54%',
        '40%',
        '36%'
      ],
      answer: 'A',
      hint: 'Misalkan massa $\\text{Al} = x\\text{ gram}$ sehingga massa $\\text{Mg} = (9 - x)\\text{ gram}$, lalu jumlahkan mol gas $\\text{H}_2$ dari kedua reaksi.',
      solution: 'Total mol gas $\\text{H}_2 = \\frac{10{,}08}{22{,}4} = 0{,}45\\text{ mol}$. Jika massa $\\text{Al} = x$ dan massa $\\text{Mg} = 9 - x$, maka $\\frac{3}{2}\\left(\\frac{x}{27}\\right) + \\frac{9 - x}{24} = 0{,}45 \\implies \\frac{x}{18} + \\frac{9 - x}{24} = 0{,}45$. Kalikan kedua ruas dengan $72$: $4x + 3(9 - x) = 32{,}4 \\implies x = 5{,}4\\text{ gram}$. Persentase massa aluminium adalah $\\frac{5{,}4}{9{,}0} \\times 100\\% = 60\\%$. Jawaban: **A**'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pembakaran sempurna $4\\text{ liter}$ suatu gas hidrokarbon $\\text{C}_x\\text{H}_y$ memerlukan tepat $18\\text{ liter}$ gas oksigen ($\\text{O}_2$) dan menghasilkan $12\\text{ liter}$ gas karbon dioksida ($\\text{CO}_2$) beserta uap air pada suhu dan tekanan yang sama. Rumus molekul gas hidrokarbon $\\text{C}_x\\text{H}_y$ tersebut adalah...',
      options: [
        '$\\text{C}_3\\text{H}_4$',
        '$\\text{C}_3\\text{H}_6$',
        '$\\text{C}_3\\text{H}_8$',
        '$\\text{C}_4\\text{H}_8$'
      ],
      answer: 'B',
      hint: 'Gunakan persamaan umum pembakaran $\\text{C}_x\\text{H}_y + (x + \\frac{y}{4})\\,\\text{O}_2 \\longrightarrow x\\,\\text{CO}_2 + \\frac{y}{2}\\,\\text{H}_2\\text{O}$ dan ubah perbandingan volume menjadi koefisien.',
      solution: 'Pada $P$ dan $T$ yang sama, perbandingan volume gas $\\text{C}_x\\text{H}_y : \\text{O}_2 : \\text{CO}_2 = 4 : 18 : 12 = 1 : 4{,}5 : 3$. Dari persamaan reaksi pembakaran sempurna, diperoleh $x = 3$ dan koefisien $\\text{O}_2$ yaitu $x + \\frac{y}{4} = 4{,}5$. Substitusi $x = 3$ menghasilkan $\\frac{y}{4} = 1{,}5 \\implies y = 6$. Jadi rumus molekul hidrokarbon tersebut adalah $\\text{C}_3\\text{H}_6$. Jawaban: **B**'
    })
  ]
});
