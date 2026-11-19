import { bab, soal } from '../author.js';

export default bab({
  grade: 11,
  number: 3,
  slug: 'laju-reaksi',
  title: 'Laju Reaksi dan Teori Tumbukan',
  element: 'Pemahaman Kimia: faktor laju reaksi, teori tumbukan, energi aktivasi, persamaan laju, dan orde reaksi',
  summary: {
    overview: 'Laju reaksi menyatakan seberapa cepat pereaksi habis atau produk terbentuk dalam suatu reaksi kimia. Bab ini mempelajari konsep stoikiometri laju reaksi, mekanisme terjadinya reaksi berdasarkan teori tumbukan dan energi aktivasi, empat faktor yang memengaruhi laju reaksi (konsentrasi, luas permukaan, suhu, dan katalis), serta penentuan orde reaksi, tetapan laju, dan hukum laju dari data eksperimen.',
    coreConcepts: [
      'Definisi dan Stoikiometri Laju Reaksi: Laju reaksi dinyatakan sebagai laju berkurangnya konsentrasi molar pereaksi atau bertambahnya konsentrasi molar produk tiap satuan waktu ($\\text{M/s}$). Untuk reaksi umum $aA + bB \\longrightarrow cC + dD$, laju masing-masing spesi sebanding dengan koefisien reaksinya: $v = -\\frac{1}{a}\\frac{\\Delta [A]}{\\Delta t} = -\\frac{1}{b}\\frac{\\Delta [B]}{\\Delta t} = +\\frac{1}{c}\\frac{\\Delta [C]}{\\Delta t} = +\\frac{1}{d}\\frac{\\Delta [D]}{\\Delta t}$.',
      'Teori Tumbukan dan Energi Aktivasi: Reaksi kimia hanya berlangsung ketika partikel pereaksi mengalami tumbukan efektif. Syarat terjadinya tumbukan efektif adalah energi kinetik partikel minimal sama dengan energi aktivasi ($E_k \\ge E_a$) untuk membentuk kompleks teraktivasi serta posisi atau orientasi tumbukan yang tepat.',
      'Faktor yang Memengaruhi Laju Reaksi: Kenaikan konsentrasi memperbanyak jumlah partikel per satuan volume sehingga frekuensi tumbukan meningkat. Memperkecil ukuran partikel (memperluas permukaan sentuh) memperbanyak area kontak reaksi heterogen. Kenaikan suhu memperbesar energi kinetik rata-rata molekul sehingga fraksi molekul dengan $E_k \\ge E_a$ bertambah drastis tanpa mengubah nilai $E_a$.',
      'Peran Katalis dalam Laju Reaksi: Katalis mempercepat laju reaksi dengan menyediakan lintasan reaksi alternatif yang memiliki energi aktivasi ($E_a$) lebih rendah. Katalis ikut terlibat dalam tahap reaksi antara tetapi terbentuk kembali di akhir reaksi, sehingga tidak ikut habis dan tidak mengubah nilai $\\Delta H$ reaksi maupun posisi kesetimbangan.',
      'Persamaan Laju dan Orde Reaksi: Hubungan laju awal dengan konsentrasi pereaksi dinyatakan melalui hukum laju $v = k[A]^m[B]^n$, dengan $k$ tetapan laju (bergantung suhu dan katalis), $m$ orde terhadap $A$, $n$ orde terhadap $B$, dan $m + n$ orde reaksi total. Nilai orde reaksi ditentukan dari data percobaan laju awal, bukan langsung dari koefisien persamaan reaksi.'
    ],
    keyFormulas: [
      { label: 'Laju reaksi rata-rata', formula: 'v_R = -\\dfrac{\\Delta [R]}{\\Delta t} \\qquad v_P = +\\dfrac{\\Delta [P]}{\\Delta t}' },
      { label: 'Persamaan hukum laju', formula: 'v = k\\,[A]^m[B]^n \\qquad \\text{Orde total} = m + n' },
      { label: 'Pengaruh kenaikan suhu terhadap laju & waktu', formula: 'v_2 = v_1 \\cdot \\alpha^{\\Delta T / \\Delta T_0} \\qquad t_2 = \\dfrac{t_1}{\\alpha^{\\Delta T / \\Delta T_0}}' },
      { label: 'Hubungan entalpi dan energi aktivasi', formula: '\\Delta H = E_{a,\\text{maju}} - E_{a,\\text{balik}}' }
    ],
    workedExamples: [
      {
        title: 'Menentukan laju reaksi berdasarkan koefisien stoikiometri',
        problem: 'Pada reaksi $4\\text{NH}_3(g) + 5\\text{O}_2(g) \\longrightarrow 4\\text{NO}(g) + 6\\text{H}_2\\text{O}(g)$, jika gas $\\text{NH}_3$ berkurang dengan laju $0{,}24\\text{ M/s}$, berapakah laju pembentukan uap $\\text{H}_2\\text{O}$?',
        solution: 'Perbandingan laju sesuai koefisien reaksi: $\\frac{v_{\\text{H}_2\\text{O}}}{v_{\\text{NH}_3}} = \\frac{6}{4}$. Jadi $v_{\\text{H}_2\\text{O}} = \\frac{6}{4} \\times 0{,}24 = 0{,}36\\text{ M/s}$.'
      },
      {
        title: 'Menentukan waktu reaksi saat suhu dinaikkan',
        problem: 'Setiap kenaikan suhu $10^\\circ\\text{C}$, laju reaksi meningkat $2$ kali lipat. Jika pada suhu $25^\\circ\\text{C}$ reaksi selesai dalam $48\\text{ menit}$, berapa lama reaksi berlangsung pada suhu $55^\\circ\\text{C}$?',
        solution: 'Selisih suhu $\\Delta T = 55 - 25 = 30^\\circ\\text{C}$. Faktor kelipatan laju $= 2^{30/10} = 2^3 = 8$ kali lebih cepat. Karena waktu berbanding terbalik dengan laju, $t_2 = \\frac{48}{8} = 6\\text{ menit}$.'
      },
      {
        title: 'Menentukan orde reaksi dan persamaan laju dari eksperimen',
        problem: 'Untuk reaksi $2\\text{NO}(g) + \\text{H}_2(g) \\longrightarrow \\text{N}_2\\text{O}(g) + \\text{H}_2\\text{O}(g)$ diperoleh data: Percobaan 1 ($[\\text{NO}]=0{,}1\\text{ M}, [\\text{H}_2]=0{,}1\\text{ M}, v=0{,}02\\text{ M/s}$), Percobaan 2 ($0{,}2\\text{ M}, 0{,}1\\text{ M}, 0{,}08\\text{ M/s}$), Percobaan 3 ($0{,}2\\text{ M}, 0{,}2\\text{ M}, 0{,}16\\text{ M/s}$). Tentukan hukum lajunya.',
        solution: 'Dari Percobaan 1 dan 2 ($[\\text{H}_2]$ tetap): $[\\text{NO}]$ menjadi $2\\times$ dan laju menjadi $\\frac{0{,}08}{0{,}02} = 4\\times = 2^2$, sehingga orde terhadap $\\text{NO}$ adalah $2$. Dari Percobaan 2 dan 3 ($[\\text{NO}]$ tetap): $[\\text{H}_2]$ menjadi $2\\times$ dan laju menjadi $\\frac{0{,}16}{0{,}08} = 2\\times = 2^1$, sehingga orde terhadap $\\text{H}_2$ adalah $1$. Persamaan lajunya: **$v = k[\\text{NO}]^2[\\text{H}_2]$**.'
      }
    ],
    misconceptions: [
      'Menyamakan orde reaksi secara langsung dengan koefisien reaksi pada persamaan kimia setara. Orde reaksi hanya boleh diambil dari data eksperimen atau mekanisme tahap lambat, bukan dari koefisien stoikiometri.',
      'Menganggap kenaikan suhu mempercepat reaksi karena suhu menurunkan energi aktivasi ($E_a$). Nilai $E_a$ hanya diturunkan oleh katalis, sedangkan suhu menaikkan energi kinetik partikel sehingga lebih banyak molekul melampaui $E_a$.',
      'Menganggap semakin besar waktu reaksi berarti lajunya semakin besar. Waktu reaksi berbanding terbalik dengan laju reaksi ($v \\propto 1/t$): waktu makin singkat berarti laju makin cepat.'
    ],
    tutorTip: 'Jika tabel percobaan laju menyajikan kolom waktu reaksi ($t$) dan bukan laju ($v$), langsung balik perbandingannya saat menghitung orde: $v_2 / v_1 = t_1 / t_2$. Untuk mengecek satuan tetapan laju $k$ dengan cepat, gunakan rumus $\\text{M}^{1 - \\text{orde total}}\\cdot\\text{s}^{-1}$.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Dalam kinetika kimia, laju suatu reaksi secara umum didefinisikan sebagai...',
      options: [
        'berkurangnya konsentrasi molar pereaksi atau bertambahnya konsentrasi molar produk tiap satuan waktu',
        'bertambahnya massa total seluruh zat pereaksi dan produk dalam wadah reaksi',
        'perbandingan antara konsentrasi produk dan pereaksi saat reaksi berhenti',
        'besarnya kalor yang dilepaskan sistem setiap kali terjadi tumbukan partikel'
      ],
      answer: 'A',
      hint: 'Selama reaksi berlangsung, konsentrasi reaktan menurun sementara konsentrasi produk meningkat terhadap waktu.',
      solution: 'Laju reaksi ($v$) mengukur perubahan konsentrasi molar pereaksi yang berkurang atau produk yang terbentuk per satuan waktu: $v = -\\frac{\\Delta [R]}{\\Delta t} = +\\frac{\\Delta [P]}{\\Delta t}$ dengan satuan $\\text{M/s}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Menurut teori tumbukan, suatu tumbukan antarpartikel pereaksi dapat menghasilkan produk reaksi (tumbukan efektif) apabila memenuhi dua syarat utama, yaitu...',
      options: [
        'reaksi berlangsung pada tekanan tinggi dan menggunakan pelarut air',
        'partikel pereaksi berwujud gas dan memiliki massa molekul sama besar',
        'jumlah mol pereaksi sama dengan koefisien reaksi dan suhu dijaga konstan',
        'memiliki energi kinetik minimal sebesar energi aktivasi ($E_a$) dan orientasi tumbukan yang tepat'
      ],
      answer: 'D',
      hint: 'Tidak semua tumbukan menghasilkan reaksi; tumbukan harus cukup kuat untuk memutus ikatan awal dan berada pada arah tumbukan yang benar.',
      solution: 'Tumbukan efektif hanya terjadi jika partikel bertumbukan dengan **orientasi geometri yang tepat** dan membawa **energi kinetik minimal sama dengan energi aktivasi ($E_k \\ge E_a$)** sehingga mampu membentuk kompleks teraktivasi. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebanyak $5\\text{ gram}$ pualam ($\\text{CaCO}_3$) berbentuk serbuk bereaksi jauh lebih cepat dengan larutan $\\text{HCl}\\ 1\\text{ M}$ dibandingkan $5\\text{ gram}$ pualam berbentuk bongkahan besar pada suhu yang sama. Faktor utama yang mempercepat reaksi pada serbuk pualam adalah...',
      options: [
        'penurunan energi aktivasi oleh serbuk $\\text{CaCO}_3$',
        'luas permukaan bidang sentuh yang lebih besar sehingga frekuensi tumbukan meningkat',
        'kenaikan konsentrasi ion $\\text{H}^+$ dalam larutan asam klorida',
        'perubahan sifat kimia $\\text{CaCO}_3$ dari padat menjadi larutan'
      ],
      answer: 'B',
      hint: 'Memecah padatan menjadi serbuk halus memperbanyak bagian permukaan luar yang dapat bertumbukan langsung dengan larutan asam.',
      solution: 'Dengan massa dan konsentrasi asam yang sama, penghalusan bongkahan menjadi serbuk memperbesar **luas permukaan bidang sentuh** padatan terhadap larutan $\\text{HCl}$. Akibatnya frekuensi tumbukan antara ion $\\text{H}^+$ dan partikel $\\text{CaCO}_3$ per detik meningkat tajam. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Penambahan katalis yang tepat ke dalam suatu sistem reaksi dapat mempercepat laju reaksi karena katalis...',
      options: [
        'menaikkan energi kinetik rata-rata seluruh molekul pereaksi',
        'memperbesar perubahan entalpi ($\\Delta H$) reaksi menjadi lebih negatif',
        'menyediakan jalur reaksi alternatif dengan energi aktivasi ($E_a$) lebih rendah',
        'menambah jumlah tumbukan dengan meningkatkan konsentrasi pereaksi'
      ],
      answer: 'C',
      hint: 'Katalis mengubah mekanisme reaksi untuk menurunkan penghalang energi puncak reaksi.',
      solution: 'Katalis mempercepat reaksi dengan membuka jalur mekanisme baru yang memiliki **energi aktivasi ($E_a$) lebih rendah**, sehingga fraksi partikel yang sanggup melampaui $E_a$ meningkat tanpa mengubah $\\Delta H$ reaksi. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Suatu reaksi memiliki persamaan laju $v = k[A]^2[B]$. Jika konsentrasi zat $A$ diperbesar menjadi $2$ kali semula sementara konsentrasi zat $B$ dan suhu dijaga tetap, laju reaksinya menjadi...',
      options: [
        '$4$ kali laju semula',
        '$2$ kali laju semula',
        '$8$ kali laju semula',
        '$\\frac{1}{4}$ kali laju semula'
      ],
      answer: 'A',
      hint: 'Substitusikan $[A]\' = 2[A]$ dan $[B]\' = [B]$ ke dalam persamaan laju $v = k[A]^2[B]$.',
      solution: 'Karena orde reaksi terhadap $A$ adalah $2$, penggandaan konsentrasi $A$ memberikan $v\' = k(2[A])^2[B] = 4\\,k[A]^2[B] = 4v$. Jadi laju reaksi menjadi **$4$ kali laju semula**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pada reaksi oksidasi amonia $4\\text{NH}_3(g) + 5\\text{O}_2(g) \\longrightarrow 4\\text{NO}(g) + 6\\text{H}_2\\text{O}(g)$, terukur bahwa gas $\\text{NH}_3$ berkurang dengan laju $0{,}24\\text{ mol}/(\\text{L}\\cdot\\text{s})$. Laju pembentukan uap air ($\\text{H}_2\\text{O}$) pada kondisi tersebut adalah...',
      options: [
        '$0{,}16\\text{ mol}/(\\text{L}\\cdot\\text{s})$',
        '$0{,}24\\text{ mol}/(\\text{L}\\cdot\\text{s})$',
        '$0{,}30\\text{ mol}/(\\text{L}\\cdot\\text{s})$',
        '$0{,}36\\text{ mol}/(\\text{L}\\cdot\\text{s})$'
      ],
      answer: 'D',
      hint: 'Perbandingan laju tiap zat dalam satu reaksi sebanding dengan perbandingan koefisien reaksinya.',
      solution: 'Berdasarkan stoikiometri laju, $\\frac{v_{\\text{H}_2\\text{O}}}{v_{\\text{NH}_3}} = \\frac{\\text{koefisien }\\text{H}_2\\text{O}}{\\text{koefisien }\\text{NH}_3} = \\frac{6}{4}$. Sehingga $v_{\\text{H}_2\\text{O}} = \\frac{6}{4} \\times 0{,}24 = 0{,}36\\text{ mol}/(\\text{L}\\cdot\\text{s})$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Di dalam wadah tertutup bervolume $2\\text{ liter}$, sebanyak $0{,}5\\text{ mol}$ gas $\\text{N}_2\\text{O}_5$ mengalami penguraian. Setelah reaksi berlangsung selama $20\\text{ detik}$, di dalam wadah tersisa $0{,}1\\text{ mol}$ gas $\\text{N}_2\\text{O}_5$. Laju penguraian rata-rata $\\text{N}_2\\text{O}_5$ adalah...',
      options: [
        '$2{,}0 \\times 10^{-2}\\text{ M/s}$',
        '$4{,}0 \\times 10^{-2}\\text{ M/s}$',
        '$1{,}0 \\times 10^{-2}\\text{ M/s}$',
        '$5{,}0 \\times 10^{-3}\\text{ M/s}$'
      ],
      answer: 'C',
      hint: 'Tentukan jumlah mol $\\text{N}_2\\text{O}_5$ yang bereaksi, bagi dengan volume wadah ($2\\text{ L}$) untuk mendapatkan perubahan molaritas, lalu bagi dengan $20\\text{ detik}$.',
      solution: 'Mol $\\text{N}_2\\text{O}_5$ yang terurai $= 0{,}5 - 0{,}1 = 0{,}4\\text{ mol}$. Perubahan konsentrasinya $\\Delta [\\text{N}_2\\text{O}_5] = \\frac{0{,}4\\text{ mol}}{2\\text{ L}} = 0{,}2\\text{ M}$. Laju penguraian rata-rata $v = \\frac{0{,}2\\text{ M}}{20\\text{ s}} = 0{,}01\\text{ M/s} = 1{,}0 \\times 10^{-2}\\text{ M/s}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Setiap kenaikan suhu sebesar $10^\\circ\\text{C}$, laju suatu reaksi berlangsung $2$ kali lebih cepat. Apabila pada suhu $25^\\circ\\text{C}$ reaksi selesai dalam waktu $48\\text{ menit}$, waktu yang diperlukan agar reaksi selesai pada suhu $55^\\circ\\text{C}$ adalah...',
      options: [
        '$6\\text{ menit}$',
        '$12\\text{ menit}$',
        '$3\\text{ menit}$',
        '$8\\text{ menit}$'
      ],
      answer: 'A',
      hint: 'Hitung banyaknya kenaikan $10^\\circ\\text{C}$ dari $25^\\circ\\text{C}$ ke $55^\\circ\\text{C}$, lalu bagi waktu awal dengan faktor pengganda lajunya.',
      solution: 'Kenaikan suhu $\\Delta T = 55 - 25 = 30^\\circ\\text{C}$, sehingga terjadi $\\frac{30}{10} = 3$ kali kelipatan $10^\\circ\\text{C}$. Laju reaksi menjadi $2^3 = 8$ kali lebih cepat, sehingga waktu reaksi menjadi $t_2 = \\frac{48\\text{ menit}}{8} = 6\\text{ menit}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Data laju awal untuk reaksi $2\\text{NO}(g) + \\text{H}_2(g) \\longrightarrow \\text{N}_2\\text{O}(g) + \\text{H}_2\\text{O}(g)$ diperoleh sebagai berikut:\n- Percobaan 1: $[\\text{NO}] = 0{,}1\\text{ M}$, $[\\text{H}_2] = 0{,}1\\text{ M}$, $v = 0{,}02\\text{ M/s}$\n- Percobaan 2: $[\\text{NO}] = 0{,}2\\text{ M}$, $[\\text{H}_2] = 0{,}1\\text{ M}$, $v = 0{,}08\\text{ M/s}$\n- Percobaan 3: $[\\text{NO}] = 0{,}2\\text{ M}$, $[\\text{H}_2] = 0{,}2\\text{ M}$, $v = 0{,}16\\text{ M/s}$\nPersamaan hukum laju reaksi tersebut adalah...',
      options: [
        '$v = k[\\text{NO}][\\text{H}_2]$',
        '$v = k[\\text{NO}]^2[\\text{H}_2]$',
        '$v = k[\\text{NO}][\\text{H}_2]^2$',
        '$v = k[\\text{NO}]^2[\\text{H}_2]^2$'
      ],
      answer: 'B',
      hint: 'Bandingkan Percobaan 1 dengan 2 untuk mencari orde $\\text{NO}$, lalu bandingkan Percobaan 2 dengan 3 untuk mencari orde $\\text{H}_2$.',
      solution: 'Pada Percobaan 1 dan 2 ($[\\text{H}_2]$ tetap): $[\\text{NO}]$ menjadi $2\\times$ dan laju menjadi $\\frac{0{,}08}{0{,}02} = 4\\times$, maka $2^m = 4 \\implies m = 2$. Pada Percobaan 2 dan 3 ($[\\text{NO}]$ tetap): $[\\text{H}_2]$ menjadi $2\\times$ dan laju menjadi $\\frac{0{,}16}{0{,}08} = 2\\times$, maka $2^n = 2 \\implies n = 1$. Hukum lajunya adalah **$v = k[\\text{NO}]^2[\\text{H}_2]$**. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Suatu reaksi kimia memiliki hukum laju $v = k[A]^2[B]$, dengan laju $v$ bersatuan $\\text{M}\\cdot\\text{s}^{-1}$ dan konsentrasi dalam $\\text{M}$. Satuan yang tepat untuk tetapan laju $k$ adalah...',
      options: [
        '$\\text{s}^{-1}$',
        '$\\text{M}\\cdot\\text{s}^{-1}$',
        '$\\text{M}^{-1}\\cdot\\text{s}^{-1}$',
        '$\\text{M}^{-2}\\cdot\\text{s}^{-1}$'
      ],
      answer: 'D',
      hint: 'Substitusikan satuan $v$ dan konsentrasi ke dalam $k = v / ([A]^2[B])$.',
      solution: 'Orde total reaksi adalah $2 + 1 = 3$. Dari $k = \\frac{v}{[A]^2[B]}$, satuannya adalah $\\frac{\\text{M}\\cdot\\text{s}^{-1}}{\\text{M}^2 \\cdot \\text{M}} = \\frac{\\text{M}\\cdot\\text{s}^{-1}}{\\text{M}^3} = \\text{M}^{-2}\\cdot\\text{s}^{-1}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Percobaan penentuan laju reaksi $A + B \\longrightarrow C$ dicatat berdasarkan waktu habisnya pereaksi pembatas:\n- Percobaan 1: $[A] = 0{,}1\\text{ M}$, $[B] = 0{,}1\\text{ M}$, waktu $t = 80\\text{ s}$\n- Percobaan 2: $[A] = 0{,}2\\text{ M}$, $[B] = 0{,}1\\text{ M}$, waktu $t = 20\\text{ s}$\n- Percobaan 3: $[A] = 0{,}1\\text{ M}$, $[B] = 0{,}2\\text{ M}$, waktu $t = 40\\text{ s}$\nJika reaksi dilakukan dengan $[A] = 0{,}4\\text{ M}$ dan $[B] = 0{,}2\\text{ M}$ pada suhu yang sama, waktu reaksi yang dibutuhkan adalah...',
      options: [
        '$5{,}0\\text{ s}$',
        '$10{,}0\\text{ s}$',
        '$2{,}5\\text{ s}$',
        '$1{,}25\\text{ s}$'
      ],
      answer: 'C',
      hint: 'Ingat bahwa laju berbanding terbalik dengan waktu ($v \\propto 1/t$). Tentukan orde $A$ dan $B$ terlebih dahulu dari perbandingan waktu.',
      solution: 'Dari Percobaan 1 ke 2 ($[B]$ tetap): $[A]$ menjadi $2\\times$ dan waktu turun menjadi $\\frac{1}{4}\\times$ sehingga laju naik $4\\times \\implies$ orde $A = 2$. Dari Percobaan 1 ke 3 ($[A]$ tetap): $[B]$ menjadi $2\\times$ dan waktu turun menjadi $\\frac{1}{2}\\times$ sehingga laju naik $2\\times \\implies$ orde $B = 1$. Dibandingkan Percobaan 3 ($[A] = 0{,}1\\text{ M}, [B] = 0{,}2\\text{ M}, t = 40\\text{ s}$), saat $[A]$ dinaikkan $4\\times$ menjadi $0{,}4\\text{ M}$ pada $[B]$ tetap, laju menjadi $4^2 = 16\\times$ lebih cepat, sehingga waktu reaksi menjadi $\\frac{40\\text{ s}}{16} = 2{,}5\\text{ s}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Reaksi gas $2P(g) + Q(g) \\longrightarrow R(g)$ mengikuti persamaan laju $v = k[P][Q]^2$. Ketika $0{,}2\\text{ mol}$ $P$ dan $0{,}2\\text{ mol}$ $Q$ dicampurkan dalam wadah $1\\text{ liter}$, laju awal reaksi terukur $0{,}04\\text{ M/s}$. Jika campuran gas yang sama dimasukkan ke dalam wadah bervolume $2\\text{ liter}$ pada suhu tetap, laju awal reaksi menjadi...',
      options: [
        '$0{,}010\\text{ M/s}$',
        '$0{,}005\\text{ M/s}$',
        '$0{,}020\\text{ M/s}$',
        '$0{,}0025\\text{ M/s}$'
      ],
      answer: 'B',
      hint: 'Memperbesar volume wadah dari $1\\text{ L}$ menjadi $2\\text{ L}$ membuat konsentrasi masing-masing gas menjadi setengahnya.',
      solution: 'Pada wadah $2\\text{ L}$, konsentrasi awal kedua gas menjadi $[P]\' = \\frac{0{,}2}{2} = 0{,}1\\text{ M} = \\frac{1}{2}[P]$ dan $[Q]\' = \\frac{0{,}2}{2} = 0{,}1\\text{ M} = \\frac{1}{2}[Q]$. Karena orde reaksi total adalah $1 + 2 = 3$, maka $v\' = k\\left(\\frac{1}{2}[P]\\right)\\left(\\frac{1}{2}[Q]\\right)^2 = \\frac{1}{8}\\,k[P][Q]^2 = \\frac{1}{8} \\times 0{,}04 = 0{,}005\\text{ M/s}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu reaksi eksoterm $X \\longrightarrow Y$ mempunyai perubahan entalpi $\\Delta H = -40\\text{ kJ/mol}$ dan energi aktivasi reaksi maju tanpa katalis $E_{a,\\text{maju}} = 110\\text{ kJ/mol}$. Jika penambahan katalis menurunkan energi kompleks teraktivasi sebesar $30\\text{ kJ/mol}$, besarnya energi aktivasi reaksi balik ($Y \\longrightarrow X$) saat menggunakan katalis adalah...',
      options: [
        '$80\\text{ kJ/mol}$',
        '$150\\text{ kJ/mol}$',
        '$70\\text{ kJ/mol}$',
        '$120\\text{ kJ/mol}$'
      ],
      answer: 'D',
      hint: 'Katalis menurunkan energi puncak kompleks teraktivasi secara sama untuk arah maju maupun arah balik tanpa mengubah nilai $\\Delta H$.',
      solution: 'Dengan katalis, energi aktivasi maju turun menjadi $E\'_{a,\\text{maju}} = 110 - 30 = 80\\text{ kJ/mol}$. Karena katalis tidak mengubah $\\Delta H$ reaksi ($-40\\text{ kJ/mol}$), hubungan $\\Delta H = E\'_{a,\\text{maju}} - E\'_{a,\\text{balik}}$ memberikan $-40 = 80 - E\'_{a,\\text{balik}} \\implies E\'_{a,\\text{balik}} = 80 + 40 = 120\\text{ kJ/mol}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Diketahui data laju awal untuk reaksi $2X + Y \\longrightarrow Z$ sebagai berikut:\n- Percobaan 1: $[X] = 0{,}10\\text{ M}$, $[Y] = 0{,}10\\text{ M}$, $v = 2{,}0 \\times 10^{-3}\\text{ M/s}$\n- Percobaan 2: $[X] = 0{,}20\\text{ M}$, $[Y] = 0{,}10\\text{ M}$, $v = 4{,}0 \\times 10^{-3}\\text{ M/s}$\n- Percobaan 3: $[X] = 0{,}30\\text{ M}$, $[Y] = 0{,}20\\text{ M}$, $v = 2{,}4 \\times 10^{-2}\\text{ M/s}$\nNilai tetapan laju $k$ beserta orde reaksi total berturut-turut adalah...',
      options: [
        '$k = 0{,}2\\text{ M}^{-1}\\cdot\\text{s}^{-1}$ dan orde total $2$',
        '$k = 2{,}0\\text{ M}^{-2}\\cdot\\text{s}^{-1}$ dan orde total $3$',
        '$k = 20\\text{ M}^{-2}\\cdot\\text{s}^{-1}$ dan orde total $3$',
        '$k = 2{,}0\\text{ M}^{-3}\\cdot\\text{s}^{-1}$ dan orde total $4$'
      ],
      answer: 'B',
      hint: 'Tentukan orde $X$ dari Percobaan 1 dan 2, lalu gunakan hasilnya pada perbandingan Percobaan 1 dan 3 untuk memperoleh orde $Y$, kemudian hitung $k$.',
      solution: 'Dari Percobaan 1 dan 2 ($[Y]$ tetap): $[X]$ naik $2\\times$ menyebabkan laju naik $2\\times$, sehingga orde $X$ adalah $m = 1$. Bandingkan Percobaan 3 ($v_3 = 24 \\times 10^{-3}$) terhadap Percobaan 1 ($v_1 = 2{,}0 \\times 10^{-3}$): $\\frac{v_3}{v_1} = 12 = \\left(\\frac{0{,}30}{0{,}10}\\right)^1 \\left(\\frac{0{,}20}{0{,}10}\\right)^n = 3 \\cdot 2^n \\implies 2^n = 4 \\implies n = 2$. Jadi orde total $= 1 + 2 = 3$. Dari Percobaan 1: $2{,}0 \\times 10^{-3} = k(0{,}10)^1(0{,}10)^2 = k(10^{-3}) \\implies k = 2{,}0\\text{ M}^{-2}\\cdot\\text{s}^{-1}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Ketika suhu suatu sistem reaksi dinaikkan dari $300\\text{ K}$ menjadi $320\\text{ K}$, laju reaksinya meningkat hingga berkali lipat. Berdasarkan kurva distribusi energi kinetik Maxwell–Boltzmann dan teori tumbukan, penjelasan ilmiah yang paling tepat untuk fenomena tersebut adalah...',
      options: [
        'kenaikan suhu menurunkan energi aktivasi ($E_a$) reaksi sehingga penghalang energi mudah dilewati',
        'pada suhu lebih tinggi semua partikel bergerak searah sehingga setiap tumbukan pasti menghasilkan produk',
        'fraksi molekul yang memiliki energi kinetik lebih besar atau sama dengan energi aktivasi ($E_k \\ge E_a$) bertambah secara signifikan, meskipun nilai $E_a$ tidak berubah',
        'kenaikan suhu mengubah reaksi endoterm menjadi eksoterm dengan melepaskan energi kompleks teraktivasi'
      ],
      answer: 'C',
      hint: 'Perhatikan kurva distribusi energi kinetik Maxwell–Boltzmann pada dua suhu berbeda terhadap garis batas tetap $E_a$.',
      solution: 'Energi aktivasi ($E_a$) bergantung pada mekanisme reaksi dan hanya berubah jika ada katalis, bukan karena perubahan suhu. Kenaikan suhu menggeser kurva distribusi Maxwell–Boltzmann ke energi kinetik lebih tinggi sehingga **luas daerah di bawah kurva di sebelah kanan $E_a$ (fraksi molekul dengan $E_k \\ge E_a$) meningkat tajam**, memperbanyak tumbukan efektif. Jawaban: **C**.'
    })
  ]
});
