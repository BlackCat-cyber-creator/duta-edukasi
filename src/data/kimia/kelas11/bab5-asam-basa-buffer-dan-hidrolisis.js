import { bab, soal } from '../author.js';

export default bab({
  grade: 11,
  number: 5,
  slug: 'asam-basa-buffer-dan-hidrolisis',
  title: 'Asam–Basa, Larutan Penyangga, dan Hidrolisis Garam',
  element: 'Pemahaman Kimia: teori Arrhenius/Bronsted-Lowry/Lewis, perhitungan pH, titrasi, buffer, hidrolisis, dan Ksp',
  summary: {
    overview: 'Kesetimbangan ion dalam larutan berair mendasari konsep kekuatan asam–basa, titrasi netralisasi, sistem penyangga (buffer), hidrolisis garam, serta kesetimbangan kelarutan garam sukar larut. Bab ini membahas perkembangan teori asam–basa (Arrhenius, Brønsted–Lowry, dan Lewis), perhitungan pH asam dan basa kuat maupun lemah, analisis kurva dan stoikiometri titrasi, mekanisme serta pH larutan penyangga dan hidrolisis garam, hingga prediksi pengendapan melalui tetapan hasil kali kelarutan (Ksp).',
    coreConcepts: [
      'Teori Asam–Basa Arrhenius, Brønsted–Lowry, dan Lewis: Menurut Arrhenius, asam menghasilkan ion $\\text{H}^+$ dan basa menghasilkan ion $\\text{OH}^-$ dalam air. Brønsted–Lowry memperluas asam sebagai donor proton ($\\text{H}^+$) dan basa sebagai akseptor proton, sehingga terbentuk pasangan asam–basa konjugasi yang berselisih satu proton. Lewis mendefinisikan asam sebagai akseptor pasangan elektron bebas dan basa sebagai donor pasangan elektron bebas.',
      'Kekuatan Asam–Basa dan Skala pH: Pada suhu $25^\\circ\\text{C}$ berlaku $K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14}$ dan $\\text{pH} + \\text{pOH} = 14$. Asam dan basa kuat terionisasi sempurna ($[\\text{H}^+] = n_a M_a$ dan $[\\text{OH}^-] = n_b M_b$), sedangkan asam dan basa lemah terionisasi sebagian dengan tetapan $K_a$ atau $K_b$ ($[\\text{H}^+] = \\sqrt{K_a M_a}$ dan $[\\text{OH}^-] = \\sqrt{K_b M_b}$).',
      'Titrasi Asam–Basa dan Pemilihan Indikator: Pada titik ekuivalen titrasi, jumlah ekuivalen asam sama dengan jumlah ekuivalen basa ($n_a M_a V_a = n_b M_b V_b$). Titik ekuivalen bersifat netral ($\\text{pH} = 7$) untuk titrasi kuat–kuat, bersifat basa ($\\text{pH} > 7$) untuk asam lemah oleh basa kuat (cocok dengan fenolftalein), dan bersifat asam ($\\text{pH} < 7$) untuk basa lemah oleh asam kuat (cocok dengan metil merah).',
      'Larutan Penyangga dan Hidrolisis Garam: Larutan penyangga (buffer) mempertahankan pH relatif konstan saat ditambah sedikit asam, basa, atau diencerkan; terdiri atas asam lemah dengan basa konjugasinya ($[\\text{H}^+] = K_a \\frac{n_{\\text{asam}}}{n_{\\text{konjugat}}}$) atau basa lemah dengan asam konjugasinya ($[\\text{OH}^-] = K_b \\frac{n_{\\text{basa}}}{n_{\\text{konjugat}}}$). Sebaliknya, jika asam lemah dan basa kuat atau basa lemah dan asam kuat tepat habis bereaksi membentuk garam, terjadi hidrolisis sebagian pada ion lemah dengan $[\\text{OH}^-] = \\sqrt{\\frac{K_w}{K_a} M_{\\text{garam}}}$ atau $[\\text{H}^+] = \\sqrt{\\frac{K_w}{K_b} M_{\\text{garam}}}$.',
      'Kelarutan dan Hasil Kali Kelarutan Ksp: Untuk garam sukar larut $A_x B_y(s) \\rightleftharpoons x\\,A^{y+}(aq) + y\\,B^{x-}(aq)$, hasil kali kelarutan bernilai $K_{sp} = [A^{y+}]^x[B^{x-}]^y = x^x y^y s^{x+y}$. Adanya ion senama menurunkan kelarutan sesuai prinsip Le Chatelier. Pengendapan terjadi apabila kuosien hasil kali ion setelah pencampuran melebihi tetapan kelarutannya ($Q_{sp} > K_{sp}$).'
    ],
    keyFormulas: [
      { label: 'pH asam/basa lemah & hidrolisis garam', formula: '[\\text{H}^+]_{\\text{asam lemah}} = \\sqrt{K_a\\,M_a} \\qquad [\\text{OH}^-]_{\\text{garam basa}} = \\sqrt{\\dfrac{K_w}{K_a}\\,M_{\\text{anion}}}' },
      { label: 'Larutan penyangga asam & basa', formula: '[\\text{H}^+] = K_a\\,\\dfrac{n_{\\text{asam lemah}}}{n_{\\text{basa konjugasi}}} \\qquad [\\text{OH}^-] = K_b\\,\\dfrac{n_{\\text{basa lemah}}}{n_{\\text{asam konjugasi}}}' },
      { label: 'Stoikiometri titrasi netralisasi', formula: 'n_a\\,M_a\\,V_a = n_b\\,M_b\\,V_b' },
      { label: 'Hasil kali kelarutan garam', formula: 'K_{sp}(A_xB_y) = [A^{y+}]^x[B^{x-}]^y = x^x y^y\\,s^{x+y}' }
    ],
    workedExamples: [
      {
        title: 'Menentukan pH campuran penyangga tidak langsung',
        problem: 'Sebanyak $100\\text{ mL}$ $\\text{NH}_3\\ 0{,}3\\text{ M}$ ($K_b = 10^{-5}$) direaksikan dengan $100\\text{ mL}$ $\\text{HCl}\\ 0{,}1\\text{ M}$. Hitung $\\text{pH}$ larutan campuran ($\\log 2 = 0{,}3$).',
        solution: 'Mol awal $\\text{NH}_3 = 30\\text{ mmol}$ dan $\\text{HCl} = 10\\text{ mmol}$. Asam kuat habis bereaksi menghasilkan $10\\text{ mmol}$ $\\text{NH}_4^+$ serta menyisakan $30 - 10 = 20\\text{ mmol}$ $\\text{NH}_3$. Campuran membentuk buffer basa: $[\\text{OH}^-] = 10^{-5} \\times \\frac{20}{10} = 2 \\times 10^{-5}\\text{ M}$, sehingga $\\text{pOH} = 5 - 0{,}3 = 4{,}7$ dan $\\text{pH} = 14 - 4{,}7 = 9{,}3$.'
      },
      {
        title: 'Menentukan pH titik ekuivalen titrasi melalui hidrolisis garam',
        problem: 'Sebanyak $50\\text{ mL}$ $\\text{CH}_3\\text{COOH}\\ 0{,}2\\text{ M}$ ($K_a = 10^{-5}$) dititrasi tepat oleh $50\\text{ mL}$ $\\text{NaOH}\\ 0{,}2\\text{ M}$. Tentukan $\\text{pH}$ larutan pada titik ekuivalen ($K_w = 10^{-14}$).',
        solution: 'Kedua pereaksi berjumlah $10\\text{ mmol}$ sehingga tepat habis membentuk $10\\text{ mmol}$ $\\text{CH}_3\\text{COONa}$ dalam $V_{\\text{total}} = 100\\text{ mL}$ ($M_{\\text{garam}} = 0{,}1\\text{ M}$). Karena garam terhidrolisis bersifat basa, $[\\text{OH}^-] = \\sqrt{\\frac{10^{-14}}{10^{-5}} \\times 0{,}1} = \\sqrt{10^{-10}} = 10^{-5}\\text{ M}$, maka $\\text{pOH} = 5$ dan $\\text{pH} = 9$.'
      },
      {
        title: 'Menentukan kelarutan garam dalam larutan berion senama',
        problem: 'Diketahui $K_{sp}\\ \\text{AgCl} = 1{,}6 \\times 10^{-10}$. Hitung kelarutan molar $\\text{AgCl}$ di dalam larutan $\\text{CaCl}_2\\ 0{,}04\\text{ M}$.',
        solution: 'Disosiasi $\\text{CaCl}_2\\ 0{,}04\\text{ M}$ menghasilkan $[\\text{Cl}^-] = 2 \\times 0{,}04 = 0{,}08\\text{ M}$. Karena kelarutan $s$ amat kecil dibanding $0{,}08\\text{ M}$, substitusi ke $K_{sp} = [\\text{Ag}^+][\\text{Cl}^-]$ memberi $s \\times 0{,}08 = 1{,}6 \\times 10^{-10} \\implies s = 2{,}0 \\times 10^{-9}\\text{ M}$.'
      }
    ],
    misconceptions: [
      'Langsung memakai rumus buffer atau rumus hidrolisis tanpa membuat tabel reaksi stoikiometri terlebih dahulu ketika mencampurkan asam lemah dan basa kuat (atau basa lemah dan asam kuat). Jika spesi lemah tersisa, terbentuk buffer; jika kedua pereaksi tepat habis, terbentuk garam terhidrolisis.',
      'Lupa membagi mol garam hasil reaksi dengan volume total campuran sebelum memasukkan molaritas garam ke dalam rumus hidrolisis, serta lupa membagi konsentrasi awal dengan faktor pengenceran saat menghitung $Q_{sp}$ pencampuran.',
      'Menganggap ion $\\text{Cl}^-$ dalam $\\text{CaCl}_2\\ 0{,}04\\text{ M}$ berjumlah $0{,}04\\text{ M}$ saja, padahal $1\\text{ mol}$ $\\text{CaCl}_2$ melepas $2\\text{ mol}$ $\\text{Cl}^-$ sehingga $[\\text{Cl}^-] = 0{,}08\\text{ M}$.'
    ],
    tutorTip: 'Pada soal pencampuran asam dan basa, selalu buat hitungan mmol awal dan reaksi pembatasnya dulu: sisa komponen lemah berarti **Buffer** (pakai rasio mmol tanpa perlu $V_{\\text{total}}$), tepat habis berarti **Hidrolisis** (wajib cari $M_{\\text{garam}} = \\text{mmol} / V_{\\text{total}}$), sedangkan sisa komponen kuat berarti **pH Asam/Basa Kuat**.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Perhatikan reaksi kesetimbangan asam–basa berikut: $\\text{NH}_3(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{NH}_4^+(aq) + \\text{OH}^-(aq)$. Berdasarkan teori Brønsted–Lowry, pernyataan yang tepat mengenai peran spesi dalam reaksi tersebut adalah...',
      options: [
        '$\\text{NH}_3$ bertindak sebagai asam dan $\\text{NH}_4^+$ adalah asam konjugasinya',
        '$\\text{H}_2\\text{O}$ bertindak sebagai asam Brønsted–Lowry dan $\\text{OH}^-$ adalah basa konjugasinya',
        '$\\text{H}_2\\text{O}$ bertindak sebagai basa dan $\\text{NH}_4^+$ adalah basa konjugasinya',
        '$\\text{NH}_3$ bertindak sebagai donor proton kepada $\\text{H}_2\\text{O}$ untuk membentuk $\\text{OH}^-$'
      ],
      answer: 'B',
      hint: 'Asam Brønsted–Lowry melepaskan satu proton ($\\text{H}^+$) sehingga berubah menjadi basa konjugasinya.',
      solution: 'Pada reaksi tersebut, $\\text{H}_2\\text{O}$ mendonorkan satu proton ($\\text{H}^+$) kepada $\\text{NH}_3$ sehingga berperan sebagai **asam Brønsted–Lowry** dan sisanya ($\\text{OH}^-$) menjadi **basa konjugasinya**. Sementara itu, $\\text{NH}_3$ berperan sebagai basa dengan asam konjugasi $\\text{NH}_4^+$. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada reaksi pembentukan senyawa koordinasi $\\text{BF}_3 + \\text{NH}_3 \\longrightarrow \\text{F}_3\\text{B}-\\text{NH}_3$, menurut teori asam–basa Lewis peranan kedua pereaksi adalah...',
      options: [
        '$\\text{BF}_3$ sebagai asam Lewis karena menerima pasangan elektron bebas, dan $\\text{NH}_3$ sebagai basa Lewis',
        '$\\text{BF}_3$ sebagai basa Lewis karena memiliki pasangan elektron bebas pada boron, dan $\\text{NH}_3$ sebagai asam Lewis',
        'keduanya berperan sebagai basa Lewis karena tidak melibatkan transfer proton $\\text{H}^+$',
        '$\\text{NH}_3$ sebagai asam Lewis karena mendonorkan atom hidrogen kepada $\\text{BF}_3$'
      ],
      answer: 'A',
      hint: 'Atom N pada $\\text{NH}_3$ memiliki sepasang elektron bebas, sedangkan atom B pada $\\text{BF}_3$ hanya memiliki $6$ elektron valensi sehingga memiliki orbital kosong.',
      solution: 'Menurut teori Lewis, basa Lewis adalah donor pasangan elektron bebas dan asam Lewis adalah akseptor pasangan elektron bebas. Molekul $\\text{NH}_3$ mendonorkan pasangan elektron bebas dari atom N (**basa Lewis**) kepada orbital kosong atom B pada $\\text{BF}_3$ (**asam Lewis**). Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Nilai $\\text{pH}$ larutan asam sulfat ($\\text{H}_2\\text{SO}_4$) $0{,}005\\text{ M}$ yang terionisasi sempurna dalam air adalah...',
      options: [
        '$5$',
        '$3$',
        '$1$',
        '$2$'
      ],
      answer: 'D',
      hint: 'Ingat bahwa $\\text{H}_2\\text{SO}_4$ merupakan asam kuat bervalensi dua sehingga menghasilkan $2\\text{ mol}$ ion $\\text{H}^+$ per mol asam.',
      solution: 'Ionisasi sempurna $\\text{H}_2\\text{SO}_4 \\longrightarrow 2\\text{H}^+ + \\text{SO}_4^{2-}$ memberikan $[\\text{H}^+] = 2 \\times 0{,}005\\text{ M} = 0{,}01\\text{ M} = 10^{-2}\\text{ M}$. Oleh karena itu, $\\text{pH} = -\\log(10^{-2}) = 2$. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Larutan garam amonium klorida ($\\text{NH}_4\\text{Cl}$) dalam air mengalami hidrolisis sebagian sehingga larutan bersifat...',
      options: [
        'netral ($\\text{pH} = 7$) karena keduanya berasal dari elektrolit kuat',
        'basa ($\\text{pH} > 7$) karena ion $\\text{Cl}^-$ terhidrolisis menghasilkan $\\text{OH}^-$',
        'asam ($\\text{pH} < 7$) karena kation $\\text{NH}_4^+$ terhidrolisis menghasilkan ion $\\text{H}_3\\text{O}^+$',
        'amfoter karena baik $\\text{NH}_4^+$ maupun $\\text{Cl}^-$ bereaksi sempurna dengan air'
      ],
      answer: 'C',
      hint: 'Periksa asal asam dan basa pembentuk $\\text{NH}_4\\text{Cl}$; hanya ion yang berasal dari komponen lemah yang mengalami hidrolisis.',
      solution: 'Garam $\\text{NH}_4\\text{Cl}$ terbentuk dari asam kuat ($\\text{HCl}$) dan basa lemah ($\\text{NH}_3$). Kation dari basa lemah ($\\text{NH}_4^+$) mengalami hidrolisis parsial: $\\text{NH}_4^+ + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_3 + \\text{H}_3\\text{O}^+$, sehingga meningkatkan konsentrasi $\\text{H}_3\\text{O}^+$ dan membuat larutan bersifat **asam** ($\\text{pH} < 7$). Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pasangan campuran larutan berikut yang dapat membentuk larutan penyangga (buffer) adalah...',
      options: [
        '$50\\text{ mL}$ $\\text{HCl}\\ 0{,}1\\text{ M}$ dan $50\\text{ mL}$ $\\text{NaCl}\\ 0{,}1\\text{ M}$',
        '$50\\text{ mL}$ $\\text{NH}_3\\ 0{,}1\\text{ M}$ dan $50\\text{ mL}$ $\\text{NH}_4\\text{Cl}\\ 0{,}1\\text{ M}$',
        '$50\\text{ mL}$ $\\text{CH}_3\\text{COOH}\\ 0{,}1\\text{ M}$ dan $50\\text{ mL}$ $\\text{NaOH}\\ 0{,}2\\text{ M}$',
        '$50\\text{ mL}$ $\\text{NaOH}\\ 0{,}1\\text{ M}$ dan $50\\text{ mL}$ $\\text{Na}_2\\text{SO}_4\\ 0{,}1\\text{ M}$'
      ],
      answer: 'B',
      hint: 'Larutan penyangga tersusun dari pasangan asam lemah dengan basa konjugasinya atau basa lemah dengan asam konjugasinya.',
      solution: 'Campuran $\\text{NH}_3$ (basa lemah) dan garam $\\text{NH}_4\\text{Cl}$ (mengandung asam konjugasi $\\text{NH}_4^+$) langsung membentuk **larutan penyangga basa**. Pilihan lain hanya berisi asam/basa kuat dengan garam netral, atau basa kuat berlebih terhadap asam lemah. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Nilai $\\text{pH}$ larutan asam asetat ($\\text{CH}_3\\text{COOH}$) $0{,}1\\text{ M}$ yang mempunyai tetapan ionisasi $K_a = 1{,}0 \\times 10^{-5}$ adalah...',
      options: [
        '$1$',
        '$2$',
        '$5$',
        '$3$'
      ],
      answer: 'D',
      hint: 'Gunakan rumus konsentrasi ion hidrogen untuk asam lemah monoprotik: $[\\text{H}^+] = \\sqrt{K_a \\cdot M_a}$.',
      solution: 'Untuk asam lemah $\\text{CH}_3\\text{COOH}$, $[\\text{H}^+] = \\sqrt{K_a \\cdot M_a} = \\sqrt{10^{-5} \\times 0{,}1} = \\sqrt{10^{-6}} = 10^{-3}\\text{ M}$. Sehingga $\\text{pH} = -\\log(10^{-3}) = 3$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebanyak $25\\text{ mL}$ larutan asam sulfat ($\\text{H}_2\\text{SO}_4$) tepat dititrasi hingga titik ekuivalen menggunakan $50\\text{ mL}$ larutan $\\text{NaOH}\\ 0{,}2\\text{ M}$. Kemolaran larutan $\\text{H}_2\\text{SO}_4$ tersebut adalah...',
      options: [
        '$0{,}4\\text{ M}$',
        '$0{,}1\\text{ M}$',
        '$0{,}2\\text{ M}$',
        '$0{,}8\\text{ M}$'
      ],
      answer: 'C',
      hint: 'Terapkan rumus titrasi $n_a M_a V_a = n_b M_b V_b$ dengan valensi asam $n_a = 2$ dan valensi basa $n_b = 1$.',
      solution: 'Pada titik ekuivalen titrasi: $n_a M_a V_a = n_b M_b V_b \\implies 2 \\times M_a \\times 25 = 1 \\times 0{,}2 \\times 50 \\implies 50\\,M_a = 10 \\implies M_a = 0{,}2\\text{ M}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebanyak $100\\text{ mL}$ larutan $\\text{CH}_3\\text{COOH}\\ 0{,}2\\text{ M}$ ($K_a = 10^{-5}$) dicampurkan dengan $100\\text{ mL}$ larutan $\\text{CH}_3\\text{COONa}\\ 0{,}2\\text{ M}$. Nilai $\\text{pH}$ larutan penyangga yang dihasilkan adalah...',
      options: [
        '$4$',
        '$5$',
        '$6$',
        '$9$'
      ],
      answer: 'B',
      hint: 'Hitung perbandingan mol asam lemah terhadap mol garam basa konjugasinya dan masukkan ke $[\\text{H}^+] = K_a \\cdot (n_a / n_g)$.',
      solution: 'Jumlah mol $\\text{CH}_3\\text{COOH} = 100 \\times 0{,}2 = 20\\text{ mmol}$ dan mol $\\text{CH}_3\\text{COO}^- = 100 \\times 0{,}2 = 20\\text{ mmol}$. Maka $[\\text{H}^+] = K_a \\frac{n_a}{n_g} = 10^{-5} \\times \\frac{20}{20} = 10^{-5}\\text{ M}$, sehingga $\\text{pH} = 5$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Jika diketahui $K_a\\ \\text{CH}_3\\text{COOH} = 10^{-5}$ dan $K_w = 10^{-14}$, nilai $\\text{pH}$ larutan garam natrium asetat ($\\text{CH}_3\\text{COONa}$) $0{,}1\\text{ M}$ adalah...',
      options: [
        '$9$',
        '$5$',
        '$8$',
        '$10$'
      ],
      answer: 'A',
      hint: 'Garam $\\text{CH}_3\\text{COONa}$ berasal dari asam lemah dan basa kuat sehingga bersifat basa; gunakan rumus hidrolisis $[\\text{OH}^-] = \\sqrt{(K_w / K_a) \\cdot M_{\\text{anion}}}$.',
      solution: 'Ion $\\text{CH}_3\\text{COO}^-$ terhidrolisis menghasilkan ion $\\text{OH}^-$: $[\\text{OH}^-] = \\sqrt{\\frac{10^{-14}}{10^{-5}} \\times 0{,}1} = \\sqrt{10^{-10}} = 10^{-5}\\text{ M}$. Didapat $\\text{pOH} = 5$, sehingga $\\text{pH} = 14 - 5 = 9$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Diketahui tetapan hasil kali kelarutan ($K_{sp}$) magnesium hidroksida $\\text{Mg(OH)}_2$ pada suhu $25^\\circ\\text{C}$ adalah $4 \\times 10^{-12}$. Kelarutan molar ($s$) $\\text{Mg(OH)}_2$ dalam air murni pada suhu tersebut adalah...',
      options: [
        '$2 \\times 10^{-6}\\text{ M}$',
        '$1 \\times 10^{-6}\\text{ M}$',
        '$1 \\times 10^{-4}\\text{ M}$',
        '$4 \\times 10^{-4}\\text{ M}$'
      ],
      answer: 'C',
      hint: 'Tuliskan kesetimbangan kelarutan $\\text{Mg(OH)}_2(s) \\rightleftharpoons \\text{Mg}^{2+}(aq) + 2\\text{OH}^-(aq)$ untuk memperoleh ungkapan $K_{sp} = 4s^3$.',
      solution: 'Kesetimbangan pelarutan $\\text{Mg(OH)}_2(s) \\rightleftharpoons \\text{Mg}^{2+}(aq) + 2\\text{OH}^-(aq)$ menghasilkan $[\\text{Mg}^{2+}] = s$ dan $[\\text{OH}^-] = 2s$. Maka $K_{sp} = s(2s)^2 = 4s^3 = 4 \\times 10^{-12} \\implies s^3 = 10^{-12} \\implies s = 1 \\times 10^{-4}\\text{ M}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak $100\\text{ mL}$ larutan $\\text{NH}_3\\ 0{,}3\\text{ M}$ ($K_b = 10^{-5}$) dicampurkan dengan $100\\text{ mL}$ larutan $\\text{HCl}\\ 0{,}1\\text{ M}$. Jika diketahui $\\log 2 = 0{,}3$, nilai $\\text{pH}$ larutan campuran tersebut adalah...',
      options: [
        '$4{,}7$',
        '$8{,}7$',
        '$9{,}0$',
        '$9{,}3$'
      ],
      answer: 'D',
      hint: 'Hitung mol sisa basa lemah $\\text{NH}_3$ dan mol garam $\\text{NH}_4\\text{Cl}$ yang terbentuk dari reaksi pembatas $\\text{HCl}$, lalu hitung $[\\text{OH}^-]$ sistem penyangga.',
      solution: 'Mol awal $\\text{NH}_3 = 100 \\times 0{,}3 = 30\\text{ mmol}$ dan mol $\\text{HCl} = 100 \\times 0{,}1 = 10\\text{ mmol}$. Reaksi $\\text{NH}_3 + \\text{HCl} \\longrightarrow \\text{NH}_4\\text{Cl}$ menghabiskan $10\\text{ mmol}$ $\\text{HCl}$, menyisakan $20\\text{ mmol}$ $\\text{NH}_3$ dan membentuk $10\\text{ mmol}$ $\\text{NH}_4^+$. Campuran membentuk penyangga basa: $[\\text{OH}^-] = K_b \\frac{n_{\\text{basa}}}{n_{\\text{garam}}} = 10^{-5} \\times \\frac{20}{10} = 2 \\times 10^{-5}\\text{ M}$. Diperoleh $\\text{pOH} = 5 - \\log 2 = 4{,}7$, sehingga $\\text{pH} = 14 - 4{,}7 = 9{,}3$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak $50\\text{ mL}$ larutan $\\text{CH}_3\\text{COOH}\\ 0{,}2\\text{ M}$ ($K_a = 10^{-5}$) dititrasi tepat mencapai titik ekuivalen oleh $50\\text{ mL}$ larutan $\\text{NaOH}\\ 0{,}2\\text{ M}$ ($K_w = 10^{-14}$). Nilai $\\text{pH}$ pada titik ekuivalen beserta indikator yang paling tepat untuk mendeteksinya adalah...',
      options: [
        '$\\text{pH} = 9$ dengan indikator fenolftalein (trayek $\\text{pH}\\ 8{,}3\\text{–}10{,}0$)',
        '$\\text{pH} = 7$ dengan indikator bromtimol biru (trayek $\\text{pH}\\ 6{,}0\\text{–}7{,}6$)',
        '$\\text{pH} = 5$ dengan indikator metil merah (trayek $\\text{pH}\\ 4{,}2\\text{–}6{,}3$)',
        '$\\text{pH} = 8{,}85$ dengan indikator metil jingga (trayek $\\text{pH}\\ 3{,}1\\text{–}4{,}4$)'
      ],
      answer: 'A',
      hint: 'Pada titik ekuivalen keduanya tepat habis membentuk garam $\\text{CH}_3\\text{COONa}$ dalam volume total $100\\text{ mL}$; hitung molaritas garam lalu terapkan rumus hidrolisis.',
      solution: 'Mol $\\text{CH}_3\\text{COOH} = \\text{mol }\\text{NaOH} = 50 \\times 0{,}2 = 10\\text{ mmol}$, sehingga terbentuk $10\\text{ mmol}$ garam $\\text{CH}_3\\text{COONa}$ dalam $V_{\\text{total}} = 100\\text{ mL}$ ($M_{\\text{garam}} = \\frac{10}{100} = 0{,}1\\text{ M}$). Melalui hidrolisis anion: $[\\text{OH}^-] = \\sqrt{\\frac{10^{-14}}{10^{-5}} \\times 0{,}1} = 10^{-5}\\text{ M} \\implies \\text{pOH} = 5 \\implies \\text{pH} = 9$. Indikator yang trayek perubahan warnanya mencakup $\\text{pH} = 9$ adalah **fenolftalein** ($8{,}3\\text{–}10{,}0$). Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu larutan penyangga bervolume $1\\text{ liter}$ mengandung $0{,}3\\text{ mol}$ $\\text{CH}_3\\text{COOH}$ ($K_a = 10^{-5}$) dan $0{,}3\\text{ mol}$ $\\text{CH}_3\\text{COONa}$ dengan $\\text{pH}$ awal $5{,}0$. Jika ke dalam larutan tersebut ditambahkan $0{,}1\\text{ mol}$ padatan $\\text{NaOH}$ (perubahan volume diabaikan) dan diketahui $\\log 2 = 0{,}3$, nilai $\\text{pH}$ larutan menjadi...',
      options: [
        '$4{,}7$',
        '$5{,}0$',
        '$5{,}3$',
        '$13{,}0$'
      ],
      answer: 'C',
      hint: 'Ion $\\text{OH}^-$ dari basa kuat $\\text{NaOH}$ akan bereaksi dengan asam lemah $\\text{CH}_3\\text{COOH}$ sehingga mol asam berkurang $0{,}1\\text{ mol}$ dan mol basa konjugasi bertambah $0{,}1\\text{ mol}$.',
      solution: 'Reaksi penetralan $\\text{CH}_3\\text{COOH} + \\text{OH}^- \\longrightarrow \\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O}$ menurunkan mol asam menjadi $0{,}3 - 0{,}1 = 0{,}2\\text{ mol}$ dan menaikkan mol basa konjugasi menjadi $0{,}3 + 0{,}1 = 0{,}4\\text{ mol}$. Maka $[\\text{H}^+] = 10^{-5} \\times \\frac{0{,}2}{0{,}4} = 5 \\times 10^{-6}\\text{ M}$, sehingga $\\text{pH} = 6 - \\log 5 = 6 - (1 - 0{,}3) = 5{,}3$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Diketahui tetapan hasil kali kelarutan $K_{sp}\\ \\text{AgCl} = 1{,}6 \\times 10^{-10}$ pada suhu $25^\\circ\\text{C}$. Kelarutan molar $\\text{AgCl}$ di dalam larutan kalsium klorida ($\\text{CaCl}_2$) $0{,}04\\text{ M}$ adalah...',
      options: [
        '$4{,}0 \\times 10^{-9}\\text{ M}$',
        '$2{,}0 \\times 10^{-9}\\text{ M}$',
        '$1{,}3 \\times 10^{-5}\\text{ M}$',
        '$6{,}4 \\times 10^{-12}\\text{ M}$'
      ],
      answer: 'B',
      hint: 'Perhatikan bahwa setiap $1\\text{ mol}$ $\\text{CaCl}_2$ terionisasi menghasilkan $2\\text{ mol}$ ion senama $\\text{Cl}^-$.',
      solution: 'Ionisasi sempurna $\\text{CaCl}_2 \\longrightarrow \\text{Ca}^{2+} + 2\\text{Cl}^-$ menghasilkan konsentrasi ion senama $[\\text{Cl}^-] = 2 \\times 0{,}04 = 0{,}08\\text{ M}$. Dalam kesetimbangan $\\text{AgCl}(s) \\rightleftharpoons \\text{Ag}^+(aq) + \\text{Cl}^-(aq)$, karena kelarutan $s \\ll 0{,}08\\text{ M}$, diperoleh $K_{sp} = s \\cdot (0{,}08) = 1{,}6 \\times 10^{-10} \\implies s = \\frac{1{,}6 \\times 10^{-10}}{8 \\times 10^{-2}} = 2{,}0 \\times 10^{-9}\\text{ M}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak $100\\text{ mL}$ larutan $\\text{Pb(NO}_3)_2\\ 2 \\times 10^{-3}\\text{ M}$ dicampurkan dengan $100\\text{ mL}$ larutan $\\text{NaI}\\ 4 \\times 10^{-3}\\text{ M}$. Jika diketahui $K_{sp}\\ \\text{PbI}_2 = 8 \\times 10^{-9}$, pernyataan yang tepat mengenai keadaan campuran tersebut adalah...',
      options: [
        'tidak terbentuk endapan $\\text{PbI}_2$ karena $Q_{sp} = 4 \\times 10^{-9} < K_{sp}$',
        'tepat jenuh tanpa endapan karena $Q_{sp} = 8 \\times 10^{-9} = K_{sp}$',
        'terbentuk endapan $\\text{PbI}_2$ karena $Q_{sp} = 3{,}2 \\times 10^{-8} > K_{sp}$',
        'terbentuk endapan $\\text{PbI}_2$ karena $Q_{sp} = 2 \\times 10^{-6} > K_{sp}$'
      ],
      answer: 'A',
      hint: 'Hitung terlebih dahulu konsentrasi masing-masing ion setelah pengenceran dalam volume total $200\\text{ mL}$, lalu substitusikan ke $Q_{sp} = [\\text{Pb}^{2+}][\\text{I}^-]^2$.',
      solution: 'Volume total campuran $= 100 + 100 = 200\\text{ mL}$ (konsentrasi masing-masing menjadi setengahnya): $[\\text{Pb}^{2+}] = \\frac{100}{200} \\times 2 \\times 10^{-3} = 1 \\times 10^{-3}\\text{ M}$ dan $[\\text{I}^-] = \\frac{100}{200} \\times 4 \\times 10^{-3} = 2 \\times 10^{-3}\\text{ M}$. Hasil kali ionnya adalah $Q_{sp} = [\\text{Pb}^{2+}][\\text{I}^-]^2 = (1 \\times 10^{-3})(2 \\times 10^{-3})^2 = 4 \\times 10^{-9}$. Karena $Q_{sp} < K_{sp}\\ (8 \\times 10^{-9})$, larutan belum jenuh dan **tidak terbentuk endapan $\\text{PbI}_2$**. Jawaban: **A**.'
    })
  ]
});
