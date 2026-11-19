/**
 * Paket Soal Terstruktur: Laju Reaksi Kimia Kelas XI – Paket 1
 * Sumber: LAJU REAKSI KIMIA KELAS XI - PAKET 1.pdf (Duta e-dukasi).
 * Bahasa asli dipertahankan dalam Bahasa Indonesia sesuai dokumen sumber.
 */
export default {
  id: 'kim11-laju-reaksi-p1',
  slug: 'laju-reaksi-paket-1',
  subject: 'kimia',
  grade: 11,
  track: 'kurikulum-merdeka',
  topic: 'Laju Reaksi Kimia Kelas XI (Paket 1)',
  relatedChapterIds: ['kimia11-bab3-laju-reaksi'],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'Kimia SMA',
  title: 'Laju Reaksi Kimia Kelas XI – Paket 1',
  totalMarks: 35,
  instructions:
    'Kerjakan seluruh 15 soal uraian terstruktur berikut dengan langkah penyelesaian yang jelas dan satuan yang tepat.',
  source: {
    org: 'Duta e-dukasi',
    file: 'LAJU REAKSI KIMIA KELAS XI - PAKET 1.pdf',
    driveFolder: '1-l6x2B19j9xQ0d1',
    license: 'CC BY 4.0'
  },
  status: 'published',
  accessTier: 'free',
  questions: [
    {
      no: 1,
      title: 'Stoikiometri Laju Reaksi Sintesis Amonia',
      marks: 2,
      stem: 'Dalam reaksi fasa gas untuk sintesis amonia:\n$$4\\text{NH}_3(g) + 5\\text{O}_2(g) \\longrightarrow 4\\text{NO}(g) + 6\\text{H}_2\\text{O}(g)$$\ndiketahui laju rata-rata pengurangan gas oksigen ($\\text{O}_2$) adalah $1{,}5 \\times 10^{-2}\\ \\text{M}\\cdot\\text{s}^{-1}$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Berdasarkan perbandingan stoikiometri, tentukan besarnya laju pembentukan uap air ($\\text{H}_2\\text{O}$) dan laju reaksi ($v$) keseluruhan dari sistem tersebut!',
          answer:
            '$v_{\\text{H}_2\\text{O}} = 1{,}8 \\times 10^{-2}\\ \\text{M}\\cdot\\text{s}^{-1}$; $v = 3{,}0 \\times 10^{-3}\\ \\text{M}\\cdot\\text{s}^{-1}$',
          principle:
            'Laju reaksi keseluruhan ($v$) sebanding dengan laju perubahan konsentrasi masing-masing spesi dibagi koefisien stoikiometrinya: $v = -\\frac{1}{5}\\frac{\\Delta[\\text{O}_2]}{\\Delta t} = +\\frac{1}{6}\\frac{\\Delta[\\text{H}_2\\text{O}]}{\\Delta t}$.',
          solution:
            'Diketahui laju pengurangan $\\text{O}_2$: $v_{\\text{O}_2} = -\\frac{\\Delta[\\text{O}_2]}{\\Delta t} = 1{,}5 \\times 10^{-2}\\ \\text{M}\\cdot\\text{s}^{-1}$.\n\nLaju pembentukan $\\text{H}_2\\text{O}$:\n$$v_{\\text{H}_2\\text{O}} = \\frac{\\text{Koefisien }\\text{H}_2\\text{O}}{\\text{Koefisien }\\text{O}_2} \\times v_{\\text{O}_2} = \\frac{6}{5} \\times (1{,}5 \\times 10^{-2}) = 1{,}8 \\times 10^{-2}\\ \\text{M}\\cdot\\text{s}^{-1}$$\nLaju reaksi keseluruhan ($v$):\n$$v = \\frac{1}{5} v_{\\text{O}_2} = \\frac{1}{5}(1{,}5 \\times 10^{-2}) = 3{,}0 \\times 10^{-3}\\ \\text{M}\\cdot\\text{s}^{-1}$$',
          rubric: [
            { code: 'A1', text: 'Menghitung laju pembentukan uap air $v_{\\text{H}_2\\text{O}} = 1{,}8 \\times 10^{-2}\\ \\text{M}\\cdot\\text{s}^{-1}$ dengan tepat' },
            { code: 'A1', text: 'Menghitung laju reaksi keseluruhan $v = 3{,}0 \\times 10^{-3}\\ \\text{M}\\cdot\\text{s}^{-1}$ dengan tepat' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Penentuan Orde, Persamaan Laju, dan Tetapan Laju Reaksi',
      marks: 4,
      stem: 'Data eksperimen penentuan laju awal untuk reaksi $2\\text{A}(aq) + \\text{B}(aq) \\longrightarrow \\text{A}_2\\text{B}(aq)$ disajikan pada tabel berikut:\n\n| Eksperimen | $[\\text{A}]$ awal ($\\text{M}$) | $[\\text{B}]$ awal ($\\text{M}$) | Laju Awal ($\\text{M}\\cdot\\text{s}^{-1}$) |\n| :---: | :---: | :---: | :---: |\n| 1 | 0,1 | 0,1 | $2{,}0 \\times 10^{-3}$ |\n| 2 | 0,2 | 0,1 | $8{,}0 \\times 10^{-3}$ |\n| 3 | 0,1 | 0,2 | $4{,}0 \\times 10^{-3}$ |\n\nBerdasarkan data di atas, tentukan:',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'orde reaksi terhadap $\\text{A}$ dan $\\text{B}$,',
          answer: 'Orde terhadap $\\text{A} = 2$ dan orde terhadap $\\text{B} = 1$',
          principle:
            'Orde reaksi suatu reaktan ditentukan dengan membandingkan dua percobaan ketika konsentrasi reaktan lain dibuat tetap: $\\frac{v_2}{v_1} = \\left(\\frac{[\\text{A}]_2}{[\\text{A}]_1}\\right)^m \\left(\\frac{[\\text{B}]_2}{[\\text{B}]_1}\\right)^n$.',
          solution:
            'Orde terhadap $\\text{A}$ (bandingkan Eksperimen 2 dan 1, di mana $[\\text{B}]$ tetap):\n$$\\left(\\frac{0{,}2}{0{,}1}\\right)^m = \\frac{8{,}0 \\times 10^{-3}}{2{,}0 \\times 10^{-3}} \\implies 2^m = 4 \\implies m = 2$$\nOrde terhadap $\\text{B}$ (bandingkan Eksperimen 3 dan 1, di mana $[\\text{A}]$ tetap):\n$$\\left(\\frac{0{,}2}{0{,}1}\\right)^n = \\frac{4{,}0 \\times 10^{-3}}{2{,}0 \\times 10^{-3}} \\implies 2^n = 2 \\implies n = 1$$',
          rubric: [
            { code: 'A1', text: 'Menentukan orde reaksi terhadap $\\text{A} = 2$' },
            { code: 'A1', text: 'Menentukan orde reaksi terhadap $\\text{B} = 1$' }
          ]
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'persamaan laju reaksi, dan',
          answer: '$v = k[\\text{A}]^2[\\text{B}]$',
          principle:
            'Persamaan hukum laju reaksi menghubungkan laju reaksi dengan tetapan laju dan konsentrasi reaktan berpangkat ordenya masing-masing: $v = k[\\text{A}]^m[\\text{B}]^n$.',
          solution:
            'Substitusi orde reaksi $m = 2$ dan $n = 1$ ke persamaan umum hukum laju:\n$$v = k[\\text{A}]^2[\\text{B}]$$',
          rubric: [
            { code: 'A1', text: 'Menuliskan persamaan laju reaksi $v = k[\\text{A}]^2[\\text{B}]$ dengan benar' }
          ]
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'nilai tetapan laju reaksi ($k$) beserta satuannya yang tepat.',
          answer: '$k = 2{,}0\\ \\text{M}^{-2}\\cdot\\text{s}^{-1}$',
          principle:
            'Nilai dan satuan tetapan laju $k$ diperoleh dengan menyubstitusikan data salah satu eksperimen ke persamaan laju: $k = \\frac{v}{[\\text{A}]^2[\\text{B}]}$, dengan satuan $\\text{M}^{1-\\text{orde total}}\\cdot\\text{s}^{-1}$.',
          solution:
            'Gunakan data Eksperimen 1:\n$$k = \\frac{v}{[\\text{A}]^2[\\text{B}]} = \\frac{2{,}0 \\times 10^{-3}\\ \\text{M}\\cdot\\text{s}^{-1}}{(0{,}1\\ \\text{M})^2(0{,}1\\ \\text{M})} = \\frac{2{,}0 \\times 10^{-3}}{10^{-3}}\\ \\text{M}^{-2}\\cdot\\text{s}^{-1} = 2{,}0\\ \\text{M}^{-2}\\cdot\\text{s}^{-1}$$',
          rubric: [
            { code: 'A1', text: 'Nilai $k = 2{,}0$ dan satuan $\\text{M}^{-2}\\cdot\\text{s}^{-1}$ tepat' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Penentuan Waktu Reaksi dari Hukum Laju',
      marks: 2,
      stem: 'Reaksi antara zat $\\text{P}$ dan $\\text{Q}$ diamati waktu reaksinya sehingga diperoleh data sebagai berikut:\n\n| Eksperimen | $[\\text{P}]$ awal ($\\text{M}$) | $[\\text{Q}]$ awal ($\\text{M}$) | Waktu Reaksi ($\\text{s}$) |\n| :---: | :---: | :---: | :---: |\n| 1 | 0,2 | 0,2 | 80 |\n| 2 | 0,4 | 0,2 | 40 |\n| 3 | 0,4 | 0,4 | 10 |\n| 4 | 0,8 | 0,1 | $t$ |',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Laju reaksi diketahui berbanding terbalik dengan waktu reaksi. Tentukan nilai $t$ pada eksperimen ke-4 dengan memanfaatkan hukum laju yang diperoleh dari eksperimen 1 hingga 3!',
          answer: '$t = 80\\ \\text{detik}$',
          principle:
            'Karena $v \\propto \\frac{1}{t}$, perbandingan laju antarpercobaan sama dengan perbandingan kebalikan waktu reaksinya: $\\frac{v_b}{v_a} = \\frac{t_a}{t_b}$.',
          solution:
            'Orde $\\text{P}$ (Eksperimen 2 dan 1): $[\\text{P}]$ naik $2\\times$, $[\\text{Q}]$ tetap, $t$ turun dari $80\\ \\text{s}$ menjadi $40\\ \\text{s}$ (laju naik $2\\times$), maka orde $\\text{P} = 1$.\n\nOrde $\\text{Q}$ (Eksperimen 3 dan 2): $[\\text{Q}]$ naik $2\\times$, $[\\text{P}]$ tetap, $t$ turun dari $40\\ \\text{s}$ menjadi $10\\ \\text{s}$ (laju naik $4\\times$), maka orde $\\text{Q} = 2$.\n\nHukum laju: $v = k[\\text{P}][\\text{Q}]^2 \\implies \\frac{1}{t} = k\'[\\text{P}][\\text{Q}]^2$.\n\nBandingkan Eksperimen 4 dan 1:\n$$\\frac{1/t}{1/80} = \\frac{[\\text{P}]_4[\\text{Q}]_4^2}{[\\text{P}]_1[\\text{Q}]_1^2} = \\frac{(0{,}8)(0{,}1)^2}{(0{,}2)(0{,}2)^2} = \\frac{0{,}008}{0{,}008} = 1$$\nKarena laju relatif sama (rasio $= 1$), maka waktu reaksinya juga sama, yakni $t = 80\\ \\text{detik}$.',
          rubric: [
            { code: 'M1', text: 'Menentukan orde reaksi ($\\text{P} = 1$, $\\text{Q} = 2$) dan hukum laju $v = k[\\text{P}][\\text{Q}]^2$' },
            { code: 'A1', text: 'Menghitung $t = 80\\ \\text{detik}$ menggunakan perbandingan laju berbanding terbalik dengan waktu' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Laju Reaksi Stoikiometrik pada Kondisi STP',
      marks: 2,
      stem: 'Sebanyak $5{,}0\\ \\text{gram}$ serbuk batu kapur ($\\text{CaCO}_3$, $M_r = 100$) direaksikan dengan $100\\ \\text{mL}$ larutan $\\text{HCl}$ $2{,}0\\ \\text{M}$ menurut persamaan reaksi:\n$$\\text{CaCO}_3(s) + 2\\text{HCl}(aq) \\longrightarrow \\text{CaCl}_2(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$$\nSetelah bereaksi selama $20\\ \\text{detik}$, volume gas $\\text{CO}_2$ yang ditampung adalah $1{,}12\\ \\text{L}$ pada kondisi STP.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Hitunglah rata-rata laju pembentukan gas $\\text{CO}_2$ (dalam $\\text{mol/s}$) dan rata-rata laju pengurangan konsentrasi larutan $\\text{HCl}$ (dalam $\\text{M/s}$) dengan asumsi volume larutan tidak berubah!',
          answer:
            '$v_{\\text{CO}_2} = 2{,}5 \\times 10^{-3}\\ \\text{mol/s}$; $v_{\\text{HCl}} = 0{,}05\\ \\text{M/s}$',
          principle:
            'Pada kondisi STP, $1\\ \\text{mol}$ gas menempati volume $22{,}4\\ \\text{L}$. Jumlah mol $\\text{HCl}$ yang bereaksi berhubungan secara stoikiometrik dengan mol $\\text{CO}_2$ yang terbentuk, dan laju pengurangan konsentrasi adalah $\\frac{\\Delta[\\text{HCl}]}{\\Delta t}$.',
          solution:
            'Mol $\\text{CO}_2$ yang terbentuk:\n$$n_{\\text{CO}_2} = \\frac{1{,}12\\ \\text{L}}{22{,}4\\ \\text{L/mol}} = 0{,}05\\ \\text{mol}$$\nLaju pembentukan $\\text{CO}_2$:\n$$v_{\\text{CO}_2} = \\frac{\\Delta n}{\\Delta t} = \\frac{0{,}05\\ \\text{mol}}{20\\ \\text{s}} = 2{,}5 \\times 10^{-3}\\ \\text{mol/s}$$\nBerdasarkan koefisien reaksi, mol $\\text{HCl}$ yang bereaksi:\n$$n_{\\text{HCl}} = 2 \\times n_{\\text{CO}_2} = 2 \\times 0{,}05\\ \\text{mol} = 0{,}1\\ \\text{mol}$$\nDengan volume larutan $V = 100\\ \\text{mL} = 0{,}1\\ \\text{L}$, penurunan konsentrasi $\\text{HCl}$ adalah:\n$$\\Delta[\\text{HCl}] = \\frac{0{,}1\\ \\text{mol}}{0{,}1\\ \\text{L}} = 1{,}0\\ \\text{M}$$\nLaju pengurangan konsentrasi $\\text{HCl}$:\n$$v_{\\text{HCl}} = \\frac{1{,}0\\ \\text{M}}{20\\ \\text{s}} = 0{,}05\\ \\text{M/s}$$',
          rubric: [
            { code: 'A1', text: 'Menghitung laju pembentukan gas $\\text{CO}_2 = 2{,}5 \\times 10^{-3}\\ \\text{mol/s}$' },
            { code: 'A1', text: 'Menghitung laju pengurangan konsentrasi $\\text{HCl} = 0{,}05\\ \\text{M/s}$' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Perbandingan Mekanisme Kenaikan Suhu dan Penambahan Katalis',
      marks: 2,
      stem: 'Kenaikan suhu sebesar $10^\\circ\\text{C}$ dan penambahan katalis heterogen secara empiris sama-sama dapat mempercepat laju reaksi kimia.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Berdasarkan Teori Tumbukan dan konsep Energi Aktivasi, analisislah perbedaan mekanisme dasar dari kedua faktor tersebut dalam meningkatkan laju reaksi!',
          answer:
            'Kenaikan suhu meningkatkan energi kinetik rata-rata molekul (tanpa menurunkan $E_a$) sehingga lebih banyak fraksi partikel memiliki $E \\geq E_a$, sedangkan katalis menurunkan $E_a$ melalui jalur reaksi alternatif (tanpa menaikkan energi kinetik partikel).',
          principle:
            'Laju reaksi bergantung pada frekuensi tumbukan efektif, yaitu tumbukan partikel yang memiliki orientasi tepat dan energi minimum sebesar Energi Aktivasi ($E_a$).',
          solution:
            '- **Suhu**: Peningkatan suhu menaikkan energi kinetik rata-rata molekul reaktan. Akibatnya, jumlah fraksi molekul yang memiliki energi sama dengan atau melampaui Energi Aktivasi ($E \\geq E_a$) meningkat drastis dan frekuensi tumbukan efektif menjadi lebih tinggi, sementara nilai $E_a$ tetap.\n- **Katalis**: Katalis tidak menambah energi kinetik partikel, melainkan menyediakan jalur mekanisme alternatif dengan Energi Aktivasi ($E_a$) yang lebih rendah. Dengan menurunnya ambang $E_a$, lebih banyak partikel yang mampu bereaksi meskipun suhu dan energi kinetiknya tidak dinaikkan.',
          rubric: [
            { code: 'B1', text: 'Menjelaskan efek kenaikan suhu terhadap energi kinetik rata-rata dan fraksi partikel dengan $E \\geq E_a$' },
            { code: 'B1', text: 'Menjelaskan efek katalis yang menyediakan jalur alternatif dengan $E_a$ lebih rendah tanpa mengubah energi kinetik partikel' }
          ]
        }
      ]
    },
    {
      no: 6,
      title: 'Pengaruh Suhu terhadap Waktu Reaksi',
      marks: 2,
      stem: 'Laju dari suatu reaksi tertentu diketahui akan meningkat tiga kali lipat setiap kali suhu dinaikkan sebesar $15^\\circ\\text{C}$. Reaksi tersebut dijalankan pada suhu $25^\\circ\\text{C}$ dan memerlukan waktu $162\\ \\text{menit}$ untuk selesai.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Pada suhu berapakah sistem tersebut harus dijalankan agar reaksi selesai hanya dalam waktu $2\\ \\text{menit}$?',
          answer: '$85^\\circ\\text{C}$',
          principle:
            'Laju reaksi berbanding terbalik dengan waktu reaksi ($v \\propto \\frac{1}{t}$), sehingga hubungan waktu reaksi terhadap kenaikan suhu mengikuti $\\frac{t_1}{t_2} = n^{\\frac{T_2 - T_1}{\\Delta T}}$.',
          solution:
            'Diketahui faktor kelipatan laju $n = 3$ setiap $\\Delta T = 15^\\circ\\text{C}$, $T_1 = 25^\\circ\\text{C}$, $t_1 = 162\\ \\text{menit}$, dan $t_2 = 2\\ \\text{menit}$.\n$$\\frac{t_1}{t_2} = n^{\\frac{T_2 - T_1}{\\Delta T}} \\implies \\frac{162}{2} = 3^{\\frac{T_2 - 25}{15}}$$\n$$81 = 3^{\\frac{T_2 - 25}{15}} \\implies 3^4 = 3^{\\frac{T_2 - 25}{15}}$$\n$$\\frac{T_2 - 25}{15} = 4 \\implies T_2 - 25 = 60 \\implies T_2 = 85^\\circ\\text{C}$$',
          rubric: [
            { code: 'M1', text: 'Menyusun persamaan hubungan waktu dan suhu $\\frac{162}{2} = 3^{(T_2 - 25)/15}$' },
            { code: 'A1', text: 'Menyelesaikan persamaan hingga memperoleh $T_2 = 85^\\circ\\text{C}$' }
          ]
        }
      ]
    },
    {
      no: 7,
      title: 'Laju Penguraian Gas Berdasarkan Perubahan Tekanan Total',
      marks: 3,
      stem: 'Gas dinitrogen pentoksida terurai secara isotermal pada ruang bervolume tetap menurut persamaan reaksi:\n$$2\\text{N}_2\\text{O}_5(g) \\longrightarrow 4\\text{NO}_2(g) + \\text{O}_2(g)$$\nSebuah wadah kosong diisi dengan gas $\\text{N}_2\\text{O}_5$ murni dengan tekanan awal $200\\ \\text{mmHg}$. Setelah $5\\ \\text{menit}$ berlalu, tekanan total di dalam wadah tersebut berubah menjadi $260\\ \\text{mmHg}$.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Tentukan laju rata-rata penguraian gas $\\text{N}_2\\text{O}_5$ dalam satuan $\\text{mmHg/menit}$!',
          answer: '$8\\ \\text{mmHg/menit}$',
          principle:
            'Pada suhu dan volume tetap, tekanan parsial gas berbanding lurus dengan jumlah molnya, sehingga komposisi reaksi dapat disusun menggunakan tabel mula-mula, reaksi, dan akhir (MRS) dalam satuan tekanan serta Hukum Dalton ($P_{\\text{total}} = \\sum P_i$).',
          solution:
            'Misalkan tekanan gas $\\text{N}_2\\text{O}_5$ yang terurai sebesar $2x\\ \\text{mmHg}$:\n- Tekanan akhir $\\text{N}_2\\text{O}_5$: $200 - 2x$\n- Tekanan akhir $\\text{NO}_2$: $4x$\n- Tekanan akhir $\\text{O}_2$: $x$\n\nTekanan total pada $t = 5\\ \\text{menit}$:\n$$P_{\\text{total}} = (200 - 2x) + 4x + x = 200 + 3x$$\nDiketahui $P_{\\text{total}} = 260\\ \\text{mmHg}$:\n$$200 + 3x = 260 \\implies 3x = 60 \\implies x = 20\\ \\text{mmHg}$$\nTekanan $\\text{N}_2\\text{O}_5$ yang terurai adalah $2x = 40\\ \\text{mmHg}$, sehingga:\n$$v_{\\text{N}_2\\text{O}_5} = \\frac{40\\ \\text{mmHg}}{5\\ \\text{menit}} = 8\\ \\text{mmHg/menit}$$',
          rubric: [
            { code: 'M1', text: 'Menyusun stoikiometri tekanan parsial $(200 - 2x)$, $4x$, dan $x$' },
            { code: 'M1', text: 'Menghitung $x = 20\\ \\text{mmHg}$ dari $P_{\\text{total}} = 200 + 3x = 260$' },
            { code: 'A1', text: 'Menghitung laju penguraian $v_{\\text{N}_2\\text{O}_5} = 8\\ \\text{mmHg/menit}$' }
          ]
        }
      ]
    },
    {
      no: 8,
      title: 'Penurunan Hukum Laju dari Mekanisme Dua Tahap',
      marks: 2,
      stem: 'Suatu reaksi fasa gas $2\\text{NO}(g) + \\text{O}_2(g) \\longrightarrow 2\\text{NO}_2(g)$ diyakini tidak berlangsung dalam satu tahap, melainkan melalui dua tahap elementer berikut:\n- Tahap 1: $\\text{NO}(g) + \\text{O}_2(g) \\rightleftharpoons \\text{NO}_3(g)$ (Cepat, kesetimbangan dengan $k_1$ dan $k_{-1}$)\n- Tahap 2: $\\text{NO}_3(g) + \\text{NO}(g) \\longrightarrow 2\\text{NO}_2(g)$ (Lambat, dengan laju reaksi $k_2$)',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Dengan asumsi Tahap 2 merupakan tahap penentu laju, turunkan persamaan hukum laju reaksi secara matematis dan hilangkan keberadaan spesi intermediet dari persamaan akhir tersebut!',
          answer: '$v = k_{\\text{total}}[\\text{NO}]^2[\\text{O}_2]$ (dengan $k_{\\text{total}} = \\frac{k_2 k_1}{k_{-1}}$)',
          principle:
            'Laju keseluruhan reaksi ditentukan oleh tahap paling lambat (tahap penentu laju), sedangkan konsentrasi spesi intermediet dieliminasi menggunakan kesetimbangan cepat pada tahap sebelumnya.',
          solution:
            'Tahap lambat (Tahap 2) adalah penentu laju:\n$$v = k_2[\\text{NO}_3][\\text{NO}]$$\nKarena $\\text{NO}_3$ adalah intermediet, substitusikan dari kesetimbangan cepat Tahap 1 ($v_{\\text{maju}} = v_{\\text{balik}}$):\n$$k_1[\\text{NO}][\\text{O}_2] = k_{-1}[\\text{NO}_3] \\implies [\\text{NO}_3] = \\frac{k_1}{k_{-1}}[\\text{NO}][\\text{O}_2]$$\nSubstitusi $[\\text{NO}_3]$ ke persamaan laju Tahap 2:\n$$v = k_2\\left(\\frac{k_1}{k_{-1}}[\\text{NO}][\\text{O}_2]\\right)[\\text{NO}] = \\left(\\frac{k_2 k_1}{k_{-1}}\\right)[\\text{NO}]^2[\\text{O}_2]$$\nDengan mendefinisikan tetapan laju gabungan $k_{\\text{total}} = \\frac{k_2 k_1}{k_{-1}}$, diperoleh:\n$$v = k_{\\text{total}}[\\text{NO}]^2[\\text{O}_2]$$',
          rubric: [
            { code: 'M1', text: 'Menuliskan hukum laju tahap lambat $v = k_2[\\text{NO}_3][\\text{NO}]$ dan menyatakan $[\\text{NO}_3]$ dari kesetimbangan Tahap 1' },
            { code: 'A1', text: 'Menurunkan persamaan akhir $v = k_{\\text{total}}[\\text{NO}]^2[\\text{O}_2]$ bebas intermediet' }
          ]
        }
      ]
    },
    {
      no: 9,
      title: 'Laju Seketika pada Reaksi Peluruhan Orde Pertama',
      marks: 2,
      stem: 'Suatu reaksi peluruhan gas murni merupakan reaksi elementer orde pertama dengan waktu paruh ($t_{1/2}$) konstan sebesar $30\\ \\text{menit}$. Reaktan gas tersebut pada awalnya dilarutkan hingga mencapai konsentrasi $0{,}8\\ \\text{M}$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Hitunglah laju reaksi seketika pada saat $t = 90\\ \\text{menit}$! (Gunakan pendekatan $\\ln 2 = 0{,}693$)',
          answer: '$2{,}31 \\times 10^{-3}\\ \\text{M/menit}$',
          principle:
            'Untuk reaksi orde pertama, tetapan laju memenuhi $k = \\frac{\\ln 2}{t_{1/2}}$, konsentrasi sisa setelah $n$ waktu paruh adalah $[\\text{A}]_t = [\\text{A}]_0 \\left(\\frac{1}{2}\\right)^n$, dan laju seketika memenuhi $v = k[\\text{A}]_t$.',
          solution:
            'Tetapan laju orde pertama:\n$$k = \\frac{\\ln 2}{t_{1/2}} = \\frac{0{,}693}{30\\ \\text{menit}} = 0{,}0231\\ \\text{menit}^{-1}$$\nPada $t = 90\\ \\text{menit}$, jumlah siklus waktu paruh adalah $n = \\frac{90}{30} = 3$ siklus. Konsentrasi sisa setelah 3 siklus:\n$$[\\text{A}]_t = 0{,}8 \\times \\left(\\frac{1}{2}\\right)^3 = 0{,}8 \\times \\frac{1}{8} = 0{,}1\\ \\text{M}$$\nLaju reaksi seketika pada $t = 90\\ \\text{menit}$:\n$$v = k[\\text{A}]_t = 0{,}0231\\ \\text{menit}^{-1} \\times 0{,}1\\ \\text{M} = 0{,}00231\\ \\text{M/menit} = 2{,}31 \\times 10^{-3}\\ \\text{M/menit}$$',
          rubric: [
            { code: 'M1', text: 'Menghitung $k = 0{,}0231\\ \\text{menit}^{-1}$ dan konsentrasi sisa $[\\text{A}]_t = 0{,}1\\ \\text{M}$' },
            { code: 'A1', text: 'Menghitung laju seketika $v = 2{,}31 \\times 10^{-3}\\ \\text{M/menit}$' }
          ]
        }
      ]
    },
    {
      no: 10,
      title: 'Analisis Diagram Profil Energi Reaksi',
      marks: 3,
      stem: 'Pada suatu diagram profil energi dari sebuah reaksi $\\text{X} + \\text{Y} \\longrightarrow \\text{Z}$, tercatat bahwa entalpi zat-zat reaktan adalah $40\\ \\text{kJ}$ dan entalpi produk adalah $-10\\ \\text{kJ}$. Energi aktivasi ($E_a$) untuk reaksi maju (ke kanan) tanpa katalis adalah $70\\ \\text{kJ}$. Penggunaan suatu enzim spesifik mampu menurunkan energi aktivasi sebesar $25\\ \\text{kJ}$. Hitunglah:',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Perubahan entalpi ($\\Delta H$) reaksi,',
          answer: '$\\Delta H = -50\\ \\text{kJ}$ (eksoterm)',
          principle:
            'Perubahan entalpi reaksi merupakan selisih entalpi produk dan entalpi reaktan: $\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}}$.',
          solution:
            '$$\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}} = -10\\ \\text{kJ} - 40\\ \\text{kJ} = -50\\ \\text{kJ}$$',
          rubric: [
            { code: 'A1', text: 'Menghitung $\\Delta H = -50\\ \\text{kJ}$ dengan tanda negatif yang tepat' }
          ]
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Energi aktivasi reaksi maju berkatalis, dan',
          answer: '$E_{a,\\text{katalis}} = 45\\ \\text{kJ}$',
          principle:
            'Katalis (enzim) menurunkan energi puncak keadaan transisi sehingga energi aktivasi berkurang sebesar besarnya penurunan energi aktivasi tersebut.',
          solution:
            '$$E_{a,\\text{katalis}} = E_{a,\\text{tanpa katalis}} - \\text{penurunan} = 70\\ \\text{kJ} - 25\\ \\text{kJ} = 45\\ \\text{kJ}$$',
          rubric: [
            { code: 'A1', text: 'Menghitung $E_{a,\\text{katalis}} = 45\\ \\text{kJ}$' }
          ]
        },
        {
          label: 'c',
          marks: 1,
          prompt:
            'Energi aktivasi reaksi balik ($\\text{Z} \\longrightarrow \\text{X} + \\text{Y}$) tanpa menggunakan katalis!',
          answer: '$E_{a,\\text{balik}} = 120\\ \\text{kJ}$',
          principle:
            'Selisih energi antara keadaan transisi (puncak kurva) dan produk merupakan energi aktivasi reaksi balik: $E_{a,\\text{balik}} = E_{a,\\text{maju}} - \\Delta H$.',
          solution:
            'Karena reaksi maju melepaskan $50\\ \\text{kJ}$ dan puncaknya berada $70\\ \\text{kJ}$ di atas reaktan, jarak energi dari produk ($-10\\ \\text{kJ}$) ke puncak kompleks teraktivasi ($40 + 70 = 110\\ \\text{kJ}$) adalah:\n$$E_{a,\\text{balik}} = E_{a,\\text{maju}} - \\Delta H = 70\\ \\text{kJ} - (-50\\ \\text{kJ}) = 120\\ \\text{kJ}$$',
          rubric: [
            { code: 'A1', text: 'Menghitung $E_{a,\\text{balik}} = 120\\ \\text{kJ}$ dengan tepat' }
          ]
        }
      ]
    },
    {
      no: 11,
      title: 'Efek Kompresi Volume Gas terhadap Laju Reaksi',
      marks: 2,
      stem: 'Diketahui suatu reaksi gas homogen $2\\text{X}(g) + 3\\text{Y}(g) \\longrightarrow \\text{X}_2\\text{Y}_3(g)$ memiliki persamaan laju empiris $v = k[\\text{X}]^2[\\text{Y}]$. Reaktan awalnya direaksikan di ruang tertutup sehingga menghasilkan laju mula-mula $v_0$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Tentukan seberapa besar perubahan laju reaksi yang baru (dinyatakan dalam $v_0$) apabila gas ditekan secara isotermal hingga volume ruang menjadi setengah dari volume semula!',
          answer: '$8v_0$ ($8$ kali lebih cepat)',
          principle:
            'Konsentrasi molar berbanding terbalik dengan volume wadah ($C = \\frac{n}{V}$). Memperkecil volume gas secara isotermal menjadi setengahnya akan menggandakan konsentrasi setiap reaktan gas menjadi dua kali lipat.',
          solution:
            'Jika volume diubah menjadi $V\' = \\frac{1}{2}V_{\\text{awal}}$, maka konsentrasi setiap zat gas menjadi $2$ kali semula:\n$$[\\text{X}]\' = 2[\\text{X}],\\qquad [\\text{Y}]\' = 2[\\text{Y}]$$\nLaju mula-mula adalah $v_0 = k[\\text{X}]^2[\\text{Y}]$, sehingga laju akhir menjadi:\n$$v\' = k(2[\\text{X}])^2(2[\\text{Y}]) = k(4[\\text{X}]^2)(2[\\text{Y}]) = 8k[\\text{X}]^2[\\text{Y}] = 8v_0$$\nJadi, laju reaksi yang baru menjadi $8v_0$ ($8$ kali lebih cepat).',
          rubric: [
            { code: 'M1', text: 'Menentukan bahwa konsentrasi masing-masing gas menjadi $2\\times$ semula saat volume diperkecil menjadi $\\frac{1}{2}V$' },
            { code: 'A1', text: 'Menyubstitusikan ke hukum laju hingga memperoleh $v\' = 8v_0$' }
          ]
        }
      ]
    },
    {
      no: 12,
      title: 'Hukum Laju Multivariabel Tiga Komponen',
      marks: 3,
      stem: 'Perhatikan data kinetika untuk reaksi $\\text{BrO}_3^-(aq) + 5\\text{Br}^-(aq) + 6\\text{H}^+(aq) \\longrightarrow 3\\text{Br}_2(aq) + 3\\text{H}_2\\text{O}(l)$ berikut:\n\n| Percobaan | $[\\text{BrO}_3^-]$ ($\\text{M}$) | $[\\text{Br}^-]$ ($\\text{M}$) | $[\\text{H}^+]$ ($\\text{M}$) | Laju ($\\text{M}\\cdot\\text{s}^{-1}$) |\n| :---: | :---: | :---: | :---: | :---: |\n| 1 | 0,1 | 0,1 | 0,1 | $8{,}0 \\times 10^{-4}$ |\n| 2 | 0,2 | 0,1 | 0,1 | $1{,}6 \\times 10^{-3}$ |\n| 3 | 0,1 | 0,2 | 0,1 | $1{,}6 \\times 10^{-3}$ |\n| 4 | 0,1 | 0,1 | 0,2 | $3{,}2 \\times 10^{-3}$ |',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Berdasarkan data multivariabel tersebut, tentukan persamaan laju reaksinya dan hitunglah laju reaksi apabila konsentrasi awal ketiga reaktan masing-masing dibuat $0{,}3\\ \\text{M}$!',
          answer:
            '$v = 8{,}0[\\text{BrO}_3^-][\\text{Br}^-][\\text{H}^+]^2$ (atau $v = k[\\text{BrO}_3^-][\\text{Br}^-][\\text{H}^+]^2$ dengan $k = 8{,}0\\ \\text{M}^{-3}\\cdot\\text{s}^{-1}$); $v = 6{,}48 \\times 10^{-2}\\ \\text{M/s}$',
          principle:
            'Orde tiap komponen dicari dengan membandingkan dua percobaan yang hanya memvariasikan komponen tersebut, lalu tetapan laju $k$ dihitung dari salah satu percobaan untuk memprediksi laju pada kondisi konsentrasi baru.',
          solution:
            'Menentukan orde masing-masing reaktan:\n- Orde $\\text{BrO}_3^-$ (Percobaan 2 & 1): konsentrasi naik $2\\times$ ($0{,}2/0{,}1$), laju naik $2\\times$ ($1{,}6 \\times 10^{-3} / 8{,}0 \\times 10^{-4}$), maka orde $= 1$.\n- Orde $\\text{Br}^-$ (Percobaan 3 & 1): konsentrasi naik $2\\times$, laju naik $2\\times$, maka orde $= 1$.\n- Orde $\\text{H}^+$ (Percobaan 4 & 1): konsentrasi naik $2\\times$, laju naik $4\\times$ ($3{,}2 \\times 10^{-3} / 8{,}0 \\times 10^{-4}$), maka orde $= 2$.\n\nPersamaan laju reaksi:\n$$v = k[\\text{BrO}_3^-][\\text{Br}^-][\\text{H}^+]^2$$\nNilai tetapan laju $k$ (dari Percobaan 1):\n$$8{,}0 \\times 10^{-4} = k(0{,}1)(0{,}1)(0{,}1)^2 = k(10^{-4}) \\implies k = 8{,}0\\ \\text{M}^{-3}\\cdot\\text{s}^{-1}$$\nJika konsentrasi awal ketiganya $0{,}3\\ \\text{M}$:\n$$v = 8{,}0 \\times (0{,}3)(0{,}3)(0{,}3)^2 = 8{,}0 \\times 0{,}0081 = 0{,}0648\\ \\text{M/s} = 6{,}48 \\times 10^{-2}\\ \\text{M/s}$$',
          rubric: [
            { code: 'M1', text: 'Menentukan orde ketiga reaktan dan menuliskan $v = k[\\text{BrO}_3^-][\\text{Br}^-][\\text{H}^+]^2$' },
            { code: 'M1', text: 'Menghitung nilai tetapan laju $k = 8{,}0\\ \\text{M}^{-3}\\cdot\\text{s}^{-1}$' },
            { code: 'A1', text: 'Menghitung laju saat semua konsentrasi $0{,}3\\ \\text{M}$ sebesar $6{,}48 \\times 10^{-2}\\ \\text{M/s}$ ($0{,}0648\\ \\text{M/s}$)' }
          ]
        }
      ]
    },
    {
      no: 13,
      title: 'Penalaran Konsep Waktu Paruh',
      marks: 2,
      stem: 'Berikut merupakan data pemantauan konsentrasi terhadap waktu untuk reaksi dekomposisi $\\text{A} \\longrightarrow \\text{Produk}$:\n\n| Waktu (menit) | $[\\text{A}]$ ($\\text{M}$) |\n| :---: | :---: |\n| 0 | 1,00 |\n| 10 | 0,50 |\n| 20 | 0,25 |',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Tanpa melakukan regresi linear panjang, gunakanlah penalaran konsep waktu paruh untuk menentukan orde reaksi terhadap reaktan $\\text{A}$, dan hitunglah nilai tetapan laju reaksinya ($k$) dalam satuan $\\text{menit}^{-1}$!',
          answer: 'Orde $1$; $k = 0{,}0693\\ \\text{menit}^{-1}$',
          principle:
            'Hanya reaksi orde pertama yang memiliki waktu paruh ($t_{1/2}$) konstan dan tidak bergantung pada konsentrasi awal reaktan, dengan hubungan $k = \\frac{\\ln 2}{t_{1/2}}$.',
          solution:
            'Dari tabel, konsentrasi $\\text{A}$ turun setengahnya dari $1{,}00\\ \\text{M}$ menjadi $0{,}50\\ \\text{M}$ dalam waktu $10\\ \\text{menit}$. Untuk turun setengahnya lagi dari $0{,}50\\ \\text{M}$ menjadi $0{,}25\\ \\text{M}$, dibutuhkan tambahan waktu yang sama yaitu $10\\ \\text{menit}$ (total $20\\ \\text{menit}$). Karena waktu paruh ($t_{1/2} = 10\\ \\text{menit}$) konstan dan tidak bergantung pada konsentrasi, reaksi ini dipastikan berorde $1$.\n\nTetapan laju ($k$):\n$$k = \\frac{\\ln 2}{t_{1/2}} = \\frac{0{,}693}{10\\ \\text{menit}} = 0{,}0693\\ \\text{menit}^{-1}$$',
          rubric: [
            { code: 'B1', text: 'Menyimpulkan reaksi berorde $1$ karena waktu paruhnya konstan ($t_{1/2} = 10\\ \\text{menit}$)' },
            { code: 'A1', text: 'Menghitung tetapan laju $k = 0{,}0693\\ \\text{menit}^{-1}$' }
          ]
        }
      ]
    },
    {
      no: 14,
      title: 'Identifikasi Katalis dan Intermediet dalam Mekanisme Ozon',
      marks: 2,
      stem: 'Peristiwa penipisan lapisan ozon di stratosfer oleh atom klorin radikal ($\\text{Cl}$) diyakini terjadi menurut dua tahap elementer berantai:\n- Tahap 1: $\\text{O}_3(g) + \\text{Cl}(g) \\longrightarrow \\text{ClO}(g) + \\text{O}_2(g)$\n- Tahap 2: $\\text{ClO}(g) + \\text{O}(g) \\longrightarrow \\text{Cl}(g) + \\text{O}_2(g)$\n- Reaksi Total: $\\text{O}_3(g) + \\text{O}(g) \\longrightarrow 2\\text{O}_2(g)$',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Berdasarkan tinjauan mekanisme reaksi secara konseptual, identifikasi manakah spesi yang bertindak sebagai katalis dan manakah spesi yang merupakan intermediet (zat antara). Sertakan argumen Anda!',
          answer: 'Katalis: $\\text{Cl}(g)$; Intermediet: $\\text{ClO}(g)$',
          principle:
            'Katalis hadir sejak awal sebagai reaktan pada tahap awal lalu diregenerasi kembali pada tahap berikutnya, sedangkan intermediet terbentuk sebagai produk pada tahap awal dan habis dikonsumsi pada tahap berikutnya sehingga keduanya tidak muncul dalam persamaan reaksi total.',
          solution:
            '- **Katalis adalah $\\text{Cl}(g)$**: $\\text{Cl}$ ikut bereaksi (dikonsumsi) pada Tahap 1, namun terbentuk kembali secara utuh sebagai produk pada Tahap 2 sehingga jumlah totalnya tidak berkurang dalam reaksi keseluruhan.\n- **Intermediet (Zat Antara) adalah $\\text{ClO}(g)$**: $\\text{ClO}$ baru terbentuk pada Tahap 1 sebagai produk perantara, lalu langsung dikonsumsi sepenuhnya sebagai reaktan pada Tahap 2 sehingga tidak muncul pada persamaan reaksi total.',
          rubric: [
            { code: 'B1', text: 'Mengidentifikasi $\\text{Cl}(g)$ sebagai katalis beserta alasan (dikonsumsi di awal, diregenerasi di akhir)' },
            { code: 'B1', text: 'Mengidentifikasi $\\text{ClO}(g)$ sebagai intermediet beserta alasan (terbentuk di Tahap 1, habis bereaksi di Tahap 2)' }
          ]
        }
      ]
    },
    {
      no: 15,
      title: 'Perhitungan Energi Aktivasi dengan Persamaan Arrhenius',
      marks: 2,
      stem: 'Tetapan laju dari suatu reaksi spesifik ($k$) melonjak tepat menjadi dua kali lipat ($k_2 = 2k_1$) ketika suhu sistem dinaikkan dari $300\\ \\text{K}$ menjadi $310\\ \\text{K}$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Dengan menggunakan Persamaan Arrhenius, hitunglah besarnya Energi Aktivasi ($E_a$) reaksi tersebut dalam satuan $\\text{kJ/mol}$! (Gunakan Konstanta Gas Universal $R = 8{,}314\\ \\text{J/(mol}\\cdot\\text{K)}$ dan $\\ln 2 = 0{,}693$).',
          answer: '$53{,}58\\ \\text{kJ/mol}$ (atau $53{,}583\\ \\text{kJ/mol}$)',
          answerNumeric: [{ name: 'Ea', value: 53.58, unit: 'kJ/mol' }],
          principle:
            'Hubungan tetapan laju reaksi pada dua suhu berbeda dinyatakan oleh bentuk logaritmik Persamaan Arrhenius: $\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$.',
          solution:
            'Diketahui $k_2 / k_1 = 2$, $T_1 = 300\\ \\text{K}$, dan $T_2 = 310\\ \\text{K}$:\n$$\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$\n$$\\ln(2) = \\frac{E_a}{8{,}314}\\left(\\frac{1}{300} - \\frac{1}{310}\\right)$$\n$$0{,}693 = \\frac{E_a}{8{,}314}\\left(\\frac{310 - 300}{300 \\times 310}\\right) = \\frac{E_a}{8{,}314}\\left(\\frac{10}{93000}\\right) = \\frac{E_a}{8{,}314}\\left(\\frac{1}{9300}\\right)$$\n$$E_a = 0{,}693 \\times 8{,}314 \\times 9300 = 53582{,}90\\ \\text{J/mol} \\approx 53{,}583\\ \\text{kJ/mol} \\approx 53{,}58\\ \\text{kJ/mol}$$',
          rubric: [
            { code: 'M1', text: 'Menyubstitusikan data ke bentuk dua suhu Persamaan Arrhenius dengan satuan Kelvin yang benar' },
            { code: 'A1', text: 'Menghitung $E_a \\approx 53{,}58\\ \\text{kJ/mol}$ ($53{,}583\\ \\text{kJ/mol}$)' }
          ]
        }
      ]
    }
  ]
};
