import { bab, soal } from '../author.js';

export default bab({
  grade: 11,
  number: 4,
  slug: 'kesetimbangan-kimia',
  title: 'Kesetimbangan Kimia dan Pergeserannya',
  element: 'Pemahaman Kimia: kesetimbangan dinamis, tetapan Kc dan Kp, derajat disosiasi, dan prinsip Le Chatelier',
  summary: {
    overview: 'Banyak reaksi kimia bersifat dapat balik (reversibel) dan mencapai keadaan kesetimbangan dinamis dalam sistem tertutup. Bab ini membahas ciri kesetimbangan dinamis, perumusan tetapan kesetimbangan konsentrasi (Kc) dan tekanan parsial (Kp) untuk sistem homogen maupun heterogen, manipulasi nilai K, perhitungan komposisi setimbang dan derajat disosiasi, serta prediksi arah pergeseran kesetimbangan berdasarkan prinsip Le Chatelier dan penerapannya dalam industri.',
    coreConcepts: [
      'Reaksi Reversibel dan Kesetimbangan Dinamis: Dalam sistem tertutup, reaksi dapat balik mencapai keadaan setimbang ketika laju reaksi ke kanan sama dengan laju reaksi ke kiri ($v_{\\text{maju}} = v_{\\text{balik}}$). Secara mikroskopik kedua reaksi terus berlangsung tanpa henti, sedangkan secara makroskopik konsentrasi tiap zat tetap konstan (tidak harus sama besar).',
      'Tetapan Kesetimbangan Kc dan Kp: Untuk reaksi homogen $aA + bB \\rightleftharpoons cC + dD$, tetapan kesetimbangan konsentrasi adalah $K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$ dan untuk fasa gas berlaku $K_p = \\frac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b}$. Pada kesetimbangan heterogen, zat padat murni ($s$) dan cairan murni ($l$) tidak dimasukkan ke dalam rumus $K_c$ maupun $K_p$ karena keaktifannya konstan. Nilai $K_p$ dan $K_c$ dihubungkan oleh $K_p = K_c(RT)^{\\Delta n}$ dengan $\\Delta n = \\sum n_{\\text{gas produk}} - \\sum n_{\\text{gas reaktan}}$.',
      'Manipulasi Tetapan Kesetimbangan dan Kuosien Reaksi: Jika persamaan reaksi dibalik, tetapan barunya menjadi $1/K$; jika koefisien reaksi dikali $n$, tetapan barunya menjadi $K^n$; jika beberapa reaksi dijumlahkan, tetapan totalnya adalah hasil kali masing-masing tetapan ($K_{\\text{total}} = K_1 \\times K_2$). Arah reaksi menuju kesetimbangan ditentukan dengan membandingkan kuosien reaksi ($Q$) terhadap $K$: jika $Q < K$ reaksi bergeser ke kanan, jika $Q > K$ bergeser ke kiri, dan jika $Q = K$ sistem sudah setimbang.',
      'Derajat Disosiasi dan Tabel Komposisi Setimbang: Derajat disosiasi ($\\alpha$) menyatakan fraksi zat mula-mula yang terurai hingga tercapai kesetimbangan: $\\alpha = \\frac{n_{\\text{terurai}}}{n_{\\text{mula-mula}}}$ ($0 \\le \\alpha \\le 1$). Perhitungan komposisi setimbang dilakukan melalui skema Mula-mula, Reaksi, Setimbang (MRS) sesuai perbandingan koefisien reaksi pada baris reaksi.',
      'Prinsip Le Chatelier dan Aplikasi Industri: Apabila sistem setimbang diberi gangguan (aksi), sistem akan bergeser untuk mengurangi pengaruh gangguan tersebut hingga tercapai kesetimbangan baru. Penambahan konsentrasi suatu zat menggeser kesetimbangan menjauhi zat itu; peningkatan tekanan (pengecilan volume) menggeser ke jumlah mol gas lebih kecil; sedangkan kenaikan suhu menggeser ke arah reaksi endoterm ($\\Delta H > 0$). Hanya perubahan suhu yang mengubah nilai $K$, sedangkan katalis hanya mempercepat tercapainya kesetimbangan.'
    ],
    keyFormulas: [
      { label: 'Tetapan kesetimbangan konsentrasi & tekanan', formula: 'K_c = \\dfrac{[C]^c[D]^d}{[A]^a[B]^b} \\qquad K_p = \\dfrac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b}' },
      { label: 'Hubungan Kp dan Kc', formula: 'K_p = K_c\\,(R\\,T)^{\\Delta n} \\qquad \\Delta n = \\sum n_{\\text{gas produk}} - \\sum n_{\\text{gas reaktan}}' },
      { label: 'Derajat disosiasi dan tekanan parsial', formula: '\\alpha = \\dfrac{n_{\\text{terurai}}}{n_{\\text{mula-mula}}} \\qquad P_i = \\dfrac{n_i}{n_{\\text{total}}}\\,P_{\\text{total}}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung Kc dari data tabel Mula-mula, Reaksi, Setimbang',
        problem: 'Dalam wadah $2\\text{ liter}$ dipanaskan $0{,}8\\text{ mol}$ $\\text{SO}_3$ menurut $2\\text{SO}_3(g) \\rightleftharpoons 2\\text{SO}_2(g) + \\text{O}_2(g)$. Saat setimbang terbentuk $0{,}2\\text{ mol}$ $\\text{O}_2$. Hitunglah $K_c$.',
        solution: 'Dari terbentuknya $0{,}2\\text{ mol}$ $\\text{O}_2$, sesuai koefisien maka $\\text{SO}_3$ bereaksi $0{,}4\\text{ mol}$ dan $\\text{SO}_2$ terbentuk $0{,}4\\text{ mol}$. Saat setimbang: $n_{\\text{SO}_3} = 0{,}8 - 0{,}4 = 0{,}4\\text{ mol}$, $n_{\\text{SO}_2} = 0{,}4\\text{ mol}$, dan $n_{\\text{O}_2} = 0{,}2\\text{ mol}$. Bagi dengan volume $2\\text{ L}$: $[\\text{SO}_3] = 0{,}2\\text{ M}$, $[\\text{SO}_2] = 0{,}2\\text{ M}$, $[\\text{O}_2] = 0{,}1\\text{ M}$. Maka $K_c = \\frac{(0{,}2)^2(0{,}1)}{(0{,}2)^2} = 0{,}1$.'
      },
      {
        title: 'Menentukan nilai Kp dari derajat disosiasi',
        problem: 'Sebanyak $2\\text{ mol}$ gas $\\text{N}_2\\text{O}_4$ terurai menurut $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$ dengan derajat disosiasi $\\alpha = 0{,}5$ pada tekanan total $6\\text{ atm}$. Tentukan $K_p$.',
        solution: 'Jumlah $\\text{N}_2\\text{O}_4$ terurai $= 0{,}5 \\times 2 = 1\\text{ mol}$, membentuk $2\\text{ mol}$ $\\text{NO}_2$. Saat setimbang tersisa $1\\text{ mol}$ $\\text{N}_2\\text{O}_4$ dan $2\\text{ mol}$ $\\text{NO}_2$ ($n_{\\text{total}} = 3\\text{ mol}$). Tekanan parsial: $P_{\\text{N}_2\\text{O}_4} = \\frac{1}{3} \\times 6 = 2\\text{ atm}$ dan $P_{\\text{NO}_2} = \\frac{2}{3} \\times 6 = 4\\text{ atm}$. Jadi $K_p = \\frac{(4)^2}{2} = 8$.'
      },
      {
        title: 'Memprediksi arah reaksi menggunakan kuosien reaksi Q',
        problem: 'Pada suhu $450^\\circ\\text{C}$, reaksi $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$ memiliki $K_c = 49$. Jika dalam wadah $1\\text{ L}$ dicampurkan masing-masing $3\\text{ mol}$ $\\text{H}_2$, $\\text{I}_2$, dan $\\text{HI}$, ke arah mana reaksi bergeser dan berapa $[\\text{HI}]$ saat setimbang?',
        solution: 'Kuosien awal $Q_c = \\frac{3^2}{3 \\times 3} = 1 < K_c$, sehingga reaksi bergeser **ke kanan**. Jika berkurang $x\\text{ M}$ $\\text{H}_2$ dan $\\text{I}_2$, saat setimbang $[\\text{H}_2] = [\\text{I}_2] = 3 - x$ dan $[\\text{HI}] = 3 + 2x$. Dari $\\frac{(3+2x)^2}{(3-x)^2} = 49 \\implies \\frac{3+2x}{3-x} = 7 \\implies 3 + 2x = 21 - 7x \\implies x = 2\\text{ M}$. Sehingga $[\\text{HI}]_{\\text{setimbang}} = 3 + 2(2) = 7\\text{ M}$.'
      }
    ],
    misconceptions: [
      'Menganggap pada saat kesetimbangan tercapai konsentrasi reaktan selalu sama dengan konsentrasi produk ($[R] = [P]$). Yang sama saat setimbang adalah laju reaksi maju dan balik ($v_{\\text{maju}} = v_{\\text{balik}}$), sedangkan konsentrasi keduanya konstan dan umumnya tidak sama.',
      'Memasukkan zat berwujud padat ($s$) atau cairan murni ($l$) ke dalam rumus $K_c$ dan $K_p$, padahal hanya spesi berwujud gas ($g$) dan larutan ($aq$) yang masuk dalam $K_c$, serta hanya gas ($g$) dalam $K_p$.',
      'Mengira peningkatan tekanan atau penambahan konsentrasi pereaksi mengubah nilai tetapan $K_c$ atau $K_p$. Nilai $K$ hanya bergantung pada **suhu**; aksi selain suhu hanya mengubah posisi kesetimbangan hingga perbandingan $Q$ kembali sama dengan $K$.'
    ],
    tutorTip: 'Selalu ubah jumlah mol setimbang menjadi molaritas ($n/V$) sebelum dimasukkan ke rumus $K_c$, kecuali jika $\\Delta n = 0$ di mana volume saling meniadakan. Untuk soal Le Chatelier tentang tekanan atau volume, hitung total koefisien **hanya pada fasa gas ($g$)** saja!'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Pernyataan berikut yang paling tepat menggambarkan ciri keadaan kesetimbangan dinamis dalam suatu reaksi kimia reversibel di sistem tertutup adalah...',
      options: [
        'reaksi kimia telah berhenti total sehingga tidak ada lagi perubahan di tingkat molekul',
        'konsentrasi seluruh pereaksi selalu tepat sama dengan konsentrasi seluruh produk',
        'jumlah mol pereaksi yang tersisa selalu bernilai nol pada akhir reaksi',
        'reaksi maju dan reaksi balik terus berlangsung dengan laju yang sama sehingga konsentrasi tiap spesi tetap konstan'
      ],
      answer: 'D',
      hint: 'Kata "dinamis" berarti proses perubahan secara mikroskopik tidak berhenti, melainkan saling mengimbangi.',
      solution: 'Pada kesetimbangan dinamis, laju reaksi ke kanan sama dengan laju reaksi ke kiri ($v_{\\text{maju}} = v_{\\text{balik}}$). Akibatnya, secara mikroskopik reaksi tetap berjalan dua arah, namun secara makroskopik konsentrasi tiap zat tidak berubah lagi terhadap waktu. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Ungkapan tetapan kesetimbangan $K_c$ dan $K_p$ yang tepat untuk reaksi dekomposisi termal kalsium karbonat $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$ berturut-turut adalah...',
      options: [
        '$K_c = \\dfrac{[\\text{CaO}][\\text{CO}_2]}{[\\text{CaCO}_3]}$ dan $K_p = \\dfrac{P_{\\text{CaO}} \\cdot P_{\\text{CO}_2}}{P_{\\text{CaCO}_3}}$',
        '$K_c = [\\text{CO}_2]$ dan $K_p = P_{\\text{CO}_2}$',
        '$K_c = \\dfrac{1}{[\\text{CO}_2]}$ dan $K_p = \\dfrac{1}{P_{\\text{CO}_2}}$',
        '$K_c = [\\text{CaO}][\\text{CO}_2]$ dan $K_p = P_{\\text{CO}_2}$'
      ],
      answer: 'B',
      hint: 'Zat padat murni ($s$) tidak dimasukkan ke dalam persamaan tetapan kesetimbangan heterogen.',
      solution: 'Pada kesetimbangan heterogen, padatan murni $\\text{CaCO}_3(s)$ dan $\\text{CaO}(s)$ memiliki konsentrasi konstan sehingga tidak disertakan dalam ungkapan tetapan kesetimbangan. Hanya spesi gas $\\text{CO}_2(g)$ yang masuk ke rumus, menghasilkan $K_c = [\\text{CO}_2]$ dan $K_p = P_{\\text{CO}_2}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Perhatikan sistem kesetimbangan ion kompleks berwarna merah darah: $\\text{Fe}^{3+}(aq) + \\text{SCN}^-(aq) \\rightleftharpoons \\text{FeSCN}^{2+}(aq)$. Jika ke dalam larutan ditambahkan beberapa tetes larutan $\\text{FeCl}_3$ pekat pada suhu tetap, perubahan yang terjadi adalah...',
      options: [
        'kesetimbangan bergeser ke kiri dan warna larutan memudar',
        'kesetimbangan tidak bergeser karena ion $\\text{Cl}^-$ bersifat netral',
        'kesetimbangan bergeser ke kanan sehingga warna merah darah semakin pekat',
        'nilai tetapan kesetimbangan $K_c$ meningkat tajam tanpa pergeseran spesi'
      ],
      answer: 'C',
      hint: 'Penambahan $\\text{FeCl}_3$ meningkatkan konsentrasi ion $\\text{Fe}^{3+}$ di ruas kiri kesetimbangan.',
      solution: 'Ionisasi $\\text{FeCl}_3$ menambah konsentrasi pereaksi $\\text{Fe}^{3+}$. Menurut prinsip Le Chatelier, sistem merespons dengan menggeser kesetimbangan **ke kanan** untuk mengurangi kelebihan $\\text{Fe}^{3+}$, sehingga ion kompleks merah darah $\\text{FeSCN}^{2+}$ bertambah banyak dan warna larutan makin pekat. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Penambahan katalis ke dalam sistem reaksi reversibel yang belum mencapai kesetimbangan akan memberikan pengaruh berupa...',
      options: [
        'mempercepat tercapainya keadaan setimbang tanpa menggeser posisi kesetimbangan maupun mengubah nilai $K$',
        'menggeser kesetimbangan ke arah produk sehingga hasil reaksi menjadi lebih banyak',
        'memperbesar nilai $K_c$ pada reaksi endoterm dan memperkecil $K_c$ pada reaksi eksoterm',
        'mempercepat laju reaksi maju saja tanpa memengaruhi laju reaksi balik'
      ],
      answer: 'A',
      hint: 'Katalis menurunkan energi aktivasi baik untuk reaksi maju maupun reaksi balik dalam besar yang sama.',
      solution: 'Katalis menurunkan penghalang energi aktivasi untuk arah maju dan arah balik secara seimbang, sehingga kedua laju reaksi meningkat dengan faktor yang sama. Akibatnya keadaan setimbang tercapai lebih cepat, tetapi komposisi setimbang dan nilai $K$ tidak berubah. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Suatu reaksi kesetimbangan eksoterm $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)\\ (\\Delta H = -198\\text{ kJ})$ berada dalam wadah tertutup. Jika suhu sistem dinaikkan, dampak yang tepat terhadap arah pergeseran dan nilai $K_c$ adalah...',
      options: [
        'bergeser ke kanan dan nilai $K_c$ bertambah besar',
        'bergeser ke kanan dan nilai $K_c$ tetap konstan',
        'bergeser ke kiri dan nilai $K_c$ bertambah besar',
        'bergeser ke kiri dan nilai $K_c$ mengecil'
      ],
      answer: 'D',
      hint: 'Kenaikan suhu selalu menggeser kesetimbangan ke arah reaksi yang menyerap kalor (endoterm).',
      solution: 'Karena reaksi ke kanan bersifat eksoterm ($\\Delta H < 0$), arah kebalikannya (ke kiri) bersifat endoterm. Ketika suhu dinaikkan, kesetimbangan bergeser ke arah endoterm (**ke kiri**), sehingga konsentrasi produk $\\text{SO}_3$ berkurang, konsentrasi reaktan bertambah, dan nilai $K_c$ **mengecil**. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dalam sebuah bejana tertutup bervolume $2\\text{ liter}$, sebanyak $0{,}8\\text{ mol}$ gas $\\text{SO}_3$ dipanaskan hingga terjadi kesetimbangan $2\\text{SO}_3(g) \\rightleftharpoons 2\\text{SO}_2(g) + \\text{O}_2(g)$. Jika pada saat setimbang terdapat $0{,}2\\text{ mol}$ gas $\\text{O}_2$, nilai tetapan kesetimbangan $K_c$ pada suhu tersebut adalah...',
      options: [
        '$0{,}20$',
        '$0{,}10$',
        '$0{,}40$',
        '$0{,}05$'
      ],
      answer: 'B',
      hint: 'Gunakan tabel MRS untuk menentukan jumlah mol $\\text{SO}_3$ dan $\\text{SO}_2$ saat setimbang, lalu bagi seluruh mol dengan volume $2\\text{ liter}$ sebelum masuk ke $K_c$.',
      solution: 'Terbentuknya $0{,}2\\text{ mol}$ $\\text{O}_2$ berarti $\\text{SO}_3$ yang bereaksi adalah $2 \\times 0{,}2 = 0{,}4\\text{ mol}$ dan $\\text{SO}_2$ yang terbentuk adalah $0{,}4\\text{ mol}$. Saat setimbang tersisa $0{,}8 - 0{,}4 = 0{,}4\\text{ mol}$ $\\text{SO}_3$, $0{,}4\\text{ mol}$ $\\text{SO}_2$, dan $0{,}2\\text{ mol}$ $\\text{O}_2$. Dengan $V = 2\\text{ L}$, konsentrasinya adalah $[\\text{SO}_3] = 0{,}2\\text{ M}$, $[\\text{SO}_2] = 0{,}2\\text{ M}$, dan $[\\text{O}_2] = 0{,}1\\text{ M}$. Nilai $K_c = \\frac{[\\text{SO}_2]^2[\\text{O}_2]}{[\\text{SO}_3]^2} = \\frac{(0{,}2)^2(0{,}1)}{(0{,}2)^2} = 0{,}10$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebanyak $0{,}5\\text{ mol}$ gas $\\text{PCl}_5$ dipanaskan dalam wadah tertutup sehingga terdisosiasi sebagian menurut reaksi $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$. Jika pada keadaan setimbang derajat disosiasi $\\text{PCl}_5$ adalah $\\alpha = 0{,}4$, jumlah mol total seluruh gas saat setimbang adalah...',
      options: [
        '$0{,}7\\text{ mol}$',
        '$0{,}5\\text{ mol}$',
        '$0{,}6\\text{ mol}$',
        '$0{,}9\\text{ mol}$'
      ],
      answer: 'A',
      hint: 'Hitung mol $\\text{PCl}_5$ yang terurai $= \\alpha \\times n_{\\text{awal}}$, lalu jumlahkan mol semua spesi pada keadaan setimbang.',
      solution: 'Mol $\\text{PCl}_5$ yang terurai $= 0{,}4 \\times 0{,}5 = 0{,}2\\text{ mol}$. Sesuai koefisien $1:1:1$, terbentuk $0{,}2\\text{ mol}$ $\\text{PCl}_3$ dan $0{,}2\\text{ mol}$ $\\text{Cl}_2$, sementara $\\text{PCl}_5$ bersisa $0{,}5 - 0{,}2 = 0{,}3\\text{ mol}$. Jumlah mol total gas setimbang $= 0{,}3 + 0{,}2 + 0{,}2 = 0{,}7\\text{ mol}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Diketahui reaksi kesetimbangan $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ mempunyai tetapan kesetimbangan $K_c = 16$ pada suhu $T$. Pada suhu yang sama, nilai $K_c$ untuk reaksi $\\text{NH}_3(g) \\rightleftharpoons \\frac{1}{2}\\text{N}_2(g) + \\frac{3}{2}\\text{H}_2(g)$ adalah...',
      options: [
        '$0{,}0625$',
        '$4{,}0$',
        '$0{,}25$',
        '$8{,}0$'
      ],
      answer: 'C',
      hint: 'Perhatikan bahwa persamaan kedua merupakan hasil pembalikan dan pengalian koefisien persamaan pertama dengan $\\frac{1}{2}$.',
      solution: 'Membalik reaksi mengubah tetapan menjadi $\\frac{1}{16}$. Kemudian mengalikan semua koefisien dengan $\\frac{1}{2}$ memangkatkan nilai tetapan dengan $\\frac{1}{2}$ (diakarkan), sehingga $K\'_c = \\sqrt{\\frac{1}{16}} = \\frac{1}{4} = 0{,}25$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pada suhu $127^\\circ\\text{C}$ ($T = 400\\text{ K}$), reaksi kesetimbangan $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$ memiliki tetapan $K_c = 0{,}25$. Jika $R = 0{,}082\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$, nilai tetapan kesetimbangan tekanan parsial ($K_p$) reaksi tersebut adalah...',
      options: [
        '$0{,}25$',
        '$2{,}62$',
        '$32{,}8$',
        '$8{,}2$'
      ],
      answer: 'D',
      hint: 'Gunakan rumus $K_p = K_c(RT)^{\\Delta n}$ dengan $\\Delta n = \\sum n_{\\text{gas produk}} - \\sum n_{\\text{gas reaktan}}$.',
      solution: 'Untuk $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$, nilai $\\Delta n = 2 - 1 = 1$. Substitusi $K_c = 0{,}25$, $R = 0{,}082$, dan $T = 400\\text{ K}$ memberikan $K_p = 0{,}25 \\times (0{,}082 \\times 400)^1 = 0{,}25 \\times 32{,}8 = 8{,}2$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pada sistem kesetimbangan gas $2\\text{NO}_2(g)\\text{ (cokelat)} \\rightleftharpoons \\text{N}_2\\text{O}_4(g)\\text{ (tak berwarna)}$, jika volume wadah diperkecil menjadi setengahnya pada suhu tetap, perubahan yang terjadi pada sistem adalah...',
      options: [
        'kesetimbangan bergeser ke kiri menghasilkan lebih banyak $\\text{NO}_2$ dan nilai $K_c$ membesar',
        'kesetimbangan bergeser ke kanan menuju pembentukan $\\text{N}_2\\text{O}_4$ dengan nilai $K_c$ tetap',
        'kesetimbangan tidak bergeser karena perubahan volume tidak memengaruhi fasa gas',
        'kesetimbangan bergeser ke kanan dan nilai $K_c$ ikut meningkat dua kali lipat'
      ],
      answer: 'B',
      hint: 'Memperkecil volume berarti memperbesar tekanan total; sistem akan bergeser ke arah jumlah koefisien gas yang lebih kecil.',
      solution: 'Pengecilan volume menaikkan tekanan sistem, sehingga menurut prinsip Le Chatelier kesetimbangan bergeser ke sisi dengan jumlah mol gas lebih kecil: dari $2\\text{ mol}$ $\\text{NO}_2$ ke $1\\text{ mol}$ $\\text{N}_2\\text{O}_4$ (**ke kanan**). Karena suhu dijaga konstan, nilai $K_c$ tetap tidak berubah. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak $2\\text{ mol}$ gas $\\text{N}_2\\text{O}_4$ dimasukkan ke dalam bejana tertutup dan terdisosiasi menurut kesetimbangan $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$. Pada keadaan setimbang tercapai derajat disosiasi $\\alpha = 0{,}5$ dengan tekanan total gas sebesar $6\\text{ atm}$. Nilai tetapan kesetimbangan $K_p$ reaksi tersebut adalah...',
      options: [
        '$8$',
        '$4$',
        '$2$',
        '$16$'
      ],
      answer: 'A',
      hint: 'Hitung fraksi mol tiap gas pada keadaan setimbang untuk menentukan tekanan parsial $P_{\\text{N}_2\\text{O}_4}$ dan $P_{\\text{NO}_2}$, lalu substitusikan ke $K_p$.',
      solution: 'Mol $\\text{N}_2\\text{O}_4$ terurai $= 0{,}5 \\times 2 = 1\\text{ mol}$, sehingga terbentuk $2\\text{ mol}$ $\\text{NO}_2$ dan tersisa $1\\text{ mol}$ $\\text{N}_2\\text{O}_4$. Total mol gas setimbang $= 1 + 2 = 3\\text{ mol}$. Tekanan parsial masing-masing gas: $P_{\\text{N}_2\\text{O}_4} = \\frac{1}{3} \\times 6 = 2\\text{ atm}$ dan $P_{\\text{NO}_2} = \\frac{2}{3} \\times 6 = 4\\text{ atm}$. Maka $K_p = \\frac{(P_{\\text{NO}_2})^2}{P_{\\text{N}_2\\text{O}_4}} = \\frac{4^2}{2} = 8$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pada suhu $450^\\circ\\text{C}$, reaksi kesetimbangan $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$ mempunyai tetapan $K_c = 49$. Jika ke dalam wadah bervolume $1\\text{ liter}$ dimasukkan $3\\text{ mol}$ $\\text{H}_2$, $3\\text{ mol}$ $\\text{I}_2$, dan $3\\text{ mol}$ $\\text{HI}$, arah reaksi serta konsentrasi $\\text{HI}$ setelah tercapai kesetimbangan adalah...',
      options: [
        'bergeser ke kiri hingga $[\\text{HI}] = 1\\text{ M}$',
        'bergeser ke kanan hingga $[\\text{HI}] = 5\\text{ M}$',
        'bergeser ke kanan hingga $[\\text{HI}] = 7\\text{ M}$',
        'sudah berada dalam kesetimbangan dengan $[\\text{HI}] = 3\\text{ M}$'
      ],
      answer: 'C',
      hint: 'Hitung dahulu $Q_c = [\\text{HI}]^2 / ([\\text{H}_2][\\text{I}_2])$ untuk mengetahui arah pergeseran, lalu susun persamaan setimbangnya dan tarik akar kuadrat.',
      solution: 'Kuosien awal $Q_c = \\frac{3^2}{3 \\times 3} = 1 < K_c = 49$, sehingga reaksi bergeser **ke kanan**. Misalkan $x\\text{ M}$ $\\text{H}_2$ dan $\\text{I}_2$ bereaksi: saat setimbang $[\\text{H}_2] = 3 - x$, $[\\text{I}_2] = 3 - x$, dan $[\\text{HI}] = 3 + 2x$. Persamaan $\\frac{(3+2x)^2}{(3-x)^2} = 49$ memberikan $\\frac{3+2x}{3-x} = 7 \\implies 3 + 2x = 21 - 7x \\implies 9x = 18 \\implies x = 2\\text{ M}$. Dengan demikian $[\\text{HI}] = 3 + 2(2) = 7\\text{ M}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Dalam wadah bervolume $1\\text{ liter}$ pada suhu tertentu terdapat kesetimbangan $\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{CO}_2(g) + \\text{H}_2(g)$ dengan susunan setimbang: $0{,}5\\text{ mol}$ $\\text{CO}$, $0{,}5\\text{ mol}$ $\\text{H}_2\\text{O}$, $1{,}0\\text{ mol}$ $\\text{CO}_2$, dan $1{,}0\\text{ mol}$ $\\text{H}_2$. Jika suhu dipertahankan tetap, berapa mol gas $\\text{CO}$ yang harus ditambahkan ke dalam wadah agar jumlah mol $\\text{CO}_2$ pada kesetimbangan baru meningkat menjadi $1{,}2\\text{ mol}$?',
      options: [
        '$0{,}2\\text{ mol}$',
        '$0{,}9\\text{ mol}$',
        '$0{,}6\\text{ mol}$',
        '$1{,}2\\text{ mol}$'
      ],
      answer: 'B',
      hint: 'Hitung nilai $K_c$ dari data setimbang awal ($K_c = 4$), lalu susun komposisi setimbang baru setelah $\\text{CO}_2$ naik sebesar $0{,}2\\text{ mol}$.',
      solution: 'Nilai $K_c$ awal $= \\frac{1{,}0 \\times 1{,}0}{0{,}5 \\times 0{,}5} = 4$. Jika ditambahkan $a\\text{ mol}$ $\\text{CO}$, reaksi bergeser ke kanan sebesar $0{,}2\\text{ mol}$ agar $\\text{CO}_2$ menjadi $1{,}2\\text{ mol}$. Komposisi setimbang baru ($V = 1\\text{ L}$): $[\\text{CO}] = 0{,}5 + a - 0{,}2 = 0{,}3 + a$, $[\\text{H}_2\\text{O}] = 0{,}5 - 0{,}2 = 0{,}3$, $[\\text{CO}_2] = 1{,}2$, dan $[\\text{H}_2] = 1{,}0 + 0{,}2 = 1{,}2$. Maka $\\frac{1{,}2 \\times 1{,}2}{(0{,}3 + a)(0{,}3)} = 4 \\implies \\frac{4{,}8}{0{,}3 + a} = 4 \\implies 0{,}3 + a = 1{,}2 \\implies a = 0{,}9\\text{ mol}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Diketahui dua reaksi kesetimbangan pada suhu yang sama:\n(1) $\\text{A}(g) + \\text{B}(g) \\rightleftharpoons \\text{C}(g) \\quad K_1 = 4$\n(2) $2\\text{C}(g) \\rightleftharpoons \\text{D}(g) + \\text{E}(g) \\quad K_2 = 9$\nNilai tetapan kesetimbangan $K_c$ untuk reaksi gabungan $2\\text{A}(g) + 2\\text{B}(g) \\rightleftharpoons \\text{D}(g) + \\text{E}(g)$ pada suhu tersebut adalah...',
      options: [
        '$13$',
        '$25$',
        '$36$',
        '$144$'
      ],
      answer: 'D',
      hint: 'Kalikan reaksi (1) dengan $2$ terlebih dahulu sehingga kuadratkan $K_1$, lalu kalikan nilai tetapan hasil penjumlahan kedua reaksi.',
      solution: 'Mengalikan koefisien reaksi (1) dengan $2$ menghasilkan $2\\text{A}(g) + 2\\text{B}(g) \\rightleftharpoons 2\\text{C}(g)$ dengan $K\'_1 = K_1^2 = 4^2 = 16$. Menjumlahkan persamaan ini dengan reaksi (2) mengeliminasi $2\\text{C}(g)$, sehingga tetapan reaksi totalnya adalah hasil kali keduanya: $K_c = K\'_1 \\times K_2 = 16 \\times 9 = 144$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sintesis amonia industri melalui proses Haber–Bosch mengikuti reaksi eksoterm $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)\\ (\\Delta H = -92\\text{ kJ})$. Di pabrik, proses ini tidak dijalankan pada suhu ruang meskipun suhu rendah menggeser kesetimbangan ke kanan, melainkan dioperasikan pada suhu sekitar $450^\\circ\\text{C}$, tekanan tinggi $\\sim 200\\text{ atm}$, dan memakai katalis besi. Pertimbangan ilmiah yang paling tepat untuk kondisi operasi tersebut adalah...',
      options: [
        'suhu menengah dipilih sebagai kompromi agar laju reaksi cukup cepat secara ekonomis meskipun $K_p$ sedikit turun, sedangkan tekanan tinggi menggeser kesetimbangan ke produk ($\\text{NH}_3$) dan katalis mempercepat tercapainya kesetimbangan',
        'suhu $450^\\circ\\text{C}$ membuat reaksi berubah menjadi endoterm sehingga nilai $K_p$ mencapai nilai maksimumnya',
        'katalis besi hanya dapat menggeser kesetimbangan ke arah kanan apabila dioperasikan di atas suhu $400^\\circ\\text{C}$',
        'tekanan $200\\text{ atm}$ menaikkan nilai tetapan kesetimbangan $K_p$ untuk mengimbangi penurunan $K_p$ akibat pemanasan'
      ],
      answer: 'A',
      hint: 'Gabungkan sudut pandang termodinamika (prinsip Le Chatelier tentang suhu dan tekanan) dengan sudut pandang kinetika kimia (laju reaksi pada suhu rendah dan fungsi katalis).',
      solution: 'Secara termodinamika (Le Chatelier), perolehan $\\text{NH}_3$ optimum terjadi pada suhu rendah (karena eksoterm) dan tekanan tinggi ($4\\text{ mol gas} \\to 2\\text{ mol gas}$). Akan tetapi, pada suhu rendah laju reaksi berjalan sangat lambat sehingga tidak efisien secara industri. Oleh sebab itu diterapkan **kompromi kinetik–termodinamika**: suhu $\\sim 450^\\circ\\text{C}$ plus katalis $\\text{Fe}$ membuat reaksi cepat mencapai kesetimbangan, sementara tekanan tinggi ($\\sim 200\\text{ atm}$) menggeser kesetimbangan ke kanan untuk menjaga rendemen $\\text{NH}_3$. Jawaban: **A**.'
    })
  ]
});
