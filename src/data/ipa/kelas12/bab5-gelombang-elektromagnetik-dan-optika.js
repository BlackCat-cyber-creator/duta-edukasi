import { bab, soal } from '../author.js';

export default bab({
  grade: 12,
  number: 5,
  slug: 'gelombang-elektromagnetik-dan-optika',
  title: 'Gelombang Elektromagnetik dan Optika Fisis–Geometris',
  element: 'Pemahaman Fisika: gelombang (gelombang elektromagnetik dan optika)',
  summary: {
    overview: 'Sinyal Wi-Fi, serat optik internet, kamera, kacamata, hingga pola warna-warni pada cakram optik semuanya tunduk pada hukum gelombang elektromagnetik dan optika. Bab ini membahas spektrum gelombang elektromagnetik dan pemanfaatannya, pembiasan dan pemantulan sempurna, pembentukan bayangan cermin dan lensa tipis, alat-alat optik (mata, lup, mikroskop, teropong), serta optika fisis meliputi interferensi celah ganda Young, difraksi kisi, dan polarisasi cahaya.',
    coreConcepts: [
      'Spektrum Gelombang Elektromagnetik: Gelombang elektromagnetik (EM) adalah gelombang transversal yang merambat di ruang hampa dengan laju $c = \\lambda f = 3 \\times 10^8\\ \\text{m/s}$ dan membawa energi foton $E = h f = \\dfrac{hc}{\\lambda}$. Urutan spektrum dari frekuensi terendah (panjang gelombang terpanjang) ke tertinggi: gelombang radio (siaran, komunikasi), gelombang mikro (radar, Wi-Fi, oven), inframerah (remote, termografi), cahaya tampak, ultraviolet (sterilisasi, pembentukan vitamin D), sinar-X (radiografi medis), dan sinar gamma (radioterapi kanker).',
      'Pembiasan dan Pemantulan Sempurna: Indeks bias mutlak medium memenuhi $n = \\dfrac{c}{v}$. Pada batas dua medium berlaku hukum Snellius: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$. Jika cahaya merambat dari medium lebih rapat ($n_1$) ke kurang rapat ($n_2 < n_1$) dengan sudut datang melebihi sudut kritis $\\sin\\theta_c = \\dfrac{n_2}{n_1}$, seluruh cahaya dipantulkan kembali (pemantulan sempurna), prinsip kerja serat optik komunikasi.',
      'Cermin Lengkung dan Lensa Tipis: Pembentukan bayangan pada cermin sferis dan lensa tipis memenuhi $\\dfrac{1}{f} = \\dfrac{1}{s} + \\dfrac{1}{s\'}$ dengan perbesaran linear $M = \\left|\\dfrac{s\'}{s}\\right| = \\dfrac{h\'}{h}$. Cermin cekung dan lensa cembung memiliki $f > 0$ (konvergen), sedangkan cermin cembung dan lensa cekung memiliki $f < 0$ (divergen). Kekuatan lensa dinyatakan dalam dioptri: $P = \\dfrac{1}{f\\ (\\text{m})} = \\dfrac{100}{f\\ (\\text{cm})}$.',
      'Alat Optik (Mata, Lup, Mikroskop, dan Teropong): Rabun jauh (miopi) dibantu lensa negatif $P = -\\dfrac{100}{\\text{PR}}$; rabun dekat (hipermetropi) dibantu lensa positif $P = \\dfrac{100}{s_n} - \\dfrac{100}{\\text{PP}}$. Lup memperbesar sudut pandang $M = \\dfrac{s_n}{f}$ (mata tak berakomodasi) atau $\\dfrac{s_n}{f} + 1$ (akomodasi maksimum). Mikroskop memiliki perbesaran total $M = M_{\\text{ob}} \\times M_{\\text{ok}}$ dengan $M_{\\text{ob}} = \\dfrac{s\'_{\\text{ob}}}{s_{\\text{ob}}}$. Teropong bintang (tak berakomodasi) memiliki $M = \\dfrac{f_{\\text{ob}}}{f_{\\text{ok}}}$ dan panjang $d = f_{\\text{ob}} + f_{\\text{ok}}$.',
      'Interferensi dan Difraksi Cahaya: Pada percobaan celah ganda Young berjarak celah $d$ dan jarak layar $L$, pola terang terjadi bila $d\\sin\\theta = \\dfrac{d y}{L} = m\\lambda$ ($m = 0, 1, 2, \\dots$) dan pola gelap bila $\\dfrac{d y}{L} = (m - \\tfrac{1}{2})\\lambda$ ($m = 1, 2, \\dots$). Pada kisi difraksi dengan $N$ garis per satuan panjang ($d = \\dfrac{1}{N}$), terang orde ke-$m$ memenuhi $d\\sin\\theta = m\\lambda$.',
      'Polarisasi Cahaya: Polarisasi membuktikan bahwa cahaya adalah gelombang transversal. Ketika cahaya tak terpolarisasi berintensitas $I_0$ melewati polarisator pertama, intensitasnya menjadi $I_1 = \\dfrac{1}{2}I_0$. Setelah melewati analisator yang membentuk sudut $\\theta$ terhadap polarisator, menurut hukum Malus intensitas keluarnya $I_2 = I_1 \\cos^2\\theta$.'
    ],
    keyFormulas: [
      { label: 'Gelombang EM & pembiasan', formula: 'c = \\lambda f \\qquad n_1\\sin\\theta_1 = n_2\\sin\\theta_2 \\qquad \\sin\\theta_c = \\dfrac{n_2}{n_1}' },
      { label: 'Cermin, lensa & daya lensa', formula: '\\dfrac{1}{f} = \\dfrac{1}{s} + \\dfrac{1}{s\'} \\qquad M = \\left|\\dfrac{s\'}{s}\\right| \\qquad P = \\dfrac{100}{f\\ (\\text{cm})}' },
      { label: 'Mikroskop & teropong (tak berakomodasi)', formula: 'M_{\\text{mik}} = \\dfrac{s\'_{\\text{ob}}}{s_{\\text{ob}}} \\cdot \\dfrac{s_n}{f_{\\text{ok}}} \\qquad M_{\\text{ter}} = \\dfrac{f_{\\text{ob}}}{f_{\\text{ok}}}' },
      { label: 'Interferensi Young & kisi difraksi', formula: '\\dfrac{d y}{L} = m\\lambda \\qquad d\\sin\\theta = m\\lambda \\quad \\left(d = \\dfrac{1}{N}\\right)' },
      { label: 'Hukum Malus (polarisasi)', formula: 'I_1 = \\dfrac{1}{2}I_0 \\qquad I_2 = I_1 \\cos^2\\theta' }
    ],
    workedExamples: [
      {
        title: 'Pembentukan bayangan lensa cembung',
        problem: 'Sebuah benda diletakkan $30\\ \\text{cm}$ di depan lensa cembung berjarak fokus $20\\ \\text{cm}$. Tentukan jarak bayangan dan perbesarannya.',
        solution: '$$\\dfrac{1}{s\'} = \\dfrac{1}{f} - \\dfrac{1}{s} = \\dfrac{1}{20} - \\dfrac{1}{30} = \\dfrac{3 - 2}{60} = \\dfrac{1}{60}$$\nDiperoleh $s\' = \\mathbf{60\\ cm}$ (bernilai positif, berarti bayangan nyata dan terbalik di belakang lensa).\nPerbesaran: $M = \\left|\\dfrac{60}{30}\\right| = \\mathbf{2\\ kali}$.'
      },
      {
        title: 'Interferensi celah ganda Young',
        problem: 'Cahaya monokromatik dengan $\\lambda = 600\\ \\text{nm}$ melewati celah ganda terpisah $0{,}3\\ \\text{mm}$. Jika layar berada $1{,}5\\ \\text{m}$ di belakang celah, hitung jarak antara terang pusat dan terang ke-2.',
        solution: 'Konversi ke satuan SI: $\\lambda = 6 \\times 10^{-7}\\ \\text{m}$, $d = 3 \\times 10^{-4}\\ \\text{m}$, $L = 1{,}5\\ \\text{m}$, $m = 2$.\n$$y = \\dfrac{m \\lambda L}{d} = \\dfrac{2 \\times 6 \\times 10^{-7} \\times 1{,}5}{3 \\times 10^{-4}} = 6 \\times 10^{-3}\\ \\text{m} = \\mathbf{6\\ mm}.$$'
      },
      {
        title: 'Polarisasi melalui dua polaroid',
        problem: 'Cahaya alami (tak terpolarisasi) dengan intensitas $100\\ \\text{W/m}^2$ melewati polarisator dan analisator yang sumbu transmisinya bersudut $30^\\circ$. Berapa intensitas cahaya yang lolos dari analisator?',
        solution: 'Setelah melewati polarisator pertama: $I_1 = \\dfrac{1}{2} I_0 = \\dfrac{1}{2}(100) = 50\\ \\text{W/m}^2$.\nSetelah melewati analisator: $I_2 = I_1 \\cos^2 30^\\circ = 50 \\times \\left(\\dfrac{\\sqrt{3}}{2}\\right)^2 = 50 \\times \\dfrac{3}{4} = \\mathbf{37{,}5\\ W/m^2}$.'
      }
    ],
    misconceptions: [
      'Menganggap sinar-X dan gelombang radio memiliki kecepatan rambat berbeda di ruang hampa. Semua gelombang elektromagnetik merambat di ruang hampa dengan kelajuan sama $c = 3 \\times 10^8\\ \\text{m/s}$; perbedaannya terletak pada frekuensi dan panjang gelombangnya.',
      'Langsung memakai $I = I_0 \\cos^2\\theta$ untuk cahaya tak terpolarisasi yang melewati dua polaroid. Cahaya tak terpolarisasi mengalami penurunan menjadi setengah ($I_1 = \\frac{1}{2} I_0$) pada polaroid pertama sebelum dikalikan $\\cos^2\\theta$ pada polaroid kedua.',
      'Menuliskan tanda jarak fokus cermin cembung atau lensa cekung sebagai bilangan positif ke dalam rumus $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s\'}$. Cermin cembung dan lensa cekung bersifat divergen sehingga $f$ wajib bertanda negatif.'
    ],
    tutorTip: 'Untuk membiasakan urutan spektrum EM dari panjang gelombang besar ke kecil (frekuensi kecil ke besar), ingat deret "Ra-Mi-In-Ta-U-X-Ga": Radio, Mikro, Inframerah, Tampak, Ultraviolet, sinar-X, Gamma. Di sisi kanan (frekuensi tinggi), energi foton $E = hf$ paling besar dan daya tembusnya paling kuat.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Urutan spektrum gelombang elektromagnetik berikut yang disusun dari **frekuensi terendah ke frekuensi tertinggi** adalah...',
      options: [
        'sinar gamma, sinar-X, ultraviolet, cahaya tampak',
        'gelombang radio, inframerah, ultraviolet, sinar-X',
        'cahaya tampak, inframerah, gelombang mikro, gelombang radio',
        'ultraviolet, cahaya tampak, inframerah, sinar gamma'
      ],
      answer: 'B',
      hint: 'Gelombang radio memiliki frekuensi paling rendah (panjang gelombang terpanjang), sedangkan sinar gamma paling tinggi.',
      solution: 'Urutan dari frekuensi terendah ke tertinggi adalah gelombang radio, gelombang mikro, inframerah, cahaya tampak, ultraviolet, sinar-X, dan sinar gamma. Urutan yang sesuai adalah **gelombang radio, inframerah, ultraviolet, sinar-X**. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah stasiun radio memancarkan gelombang elektromagnetik pada frekuensi $100\\ \\text{MHz}$ ($10^8\\ \\text{Hz}$). Jika cepat rambat gelombang di udara $3 \\times 10^8\\ \\text{m/s}$, panjang gelombang radio tersebut adalah...',
      options: ['$3\\ \\text{m}$', '$0{,}3\\ \\text{m}$', '$30\\ \\text{m}$', '$300\\ \\text{m}$'],
      answer: 'A',
      hint: 'Gunakan hubungan $c = \\lambda f$.',
      solution: '$\\lambda = \\dfrac{c}{f} = \\dfrac{3 \\times 10^8}{10^8} = 3\\ \\text{m}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Cahaya merambat di ruang hampa dengan kelajuan $3 \\times 10^8\\ \\text{m/s}$. Ketika cahaya memasuki kaca dengan indeks bias $n = 1{,}5$, kelajuan cahaya di dalam kaca menjadi...',
      options: ['$4{,}5 \\times 10^8\\ \\text{m/s}$', '$1{,}5 \\times 10^8\\ \\text{m/s}$', '$3{,}0 \\times 10^8\\ \\text{m/s}$', '$2{,}0 \\times 10^8\\ \\text{m/s}$'],
      answer: 'D',
      hint: 'Hubungan indeks bias dan kecepatan adalah $n = c / v$.',
      solution: '$v = \\dfrac{c}{n} = \\dfrac{3 \\times 10^8}{1{,}5} = 2{,}0 \\times 10^8\\ \\text{m/s}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Serat optik mengirimkan data internet berkecepatan tinggi dengan memerangkap pulsa cahaya di dalam inti serat melalui pemantulan sempurna. Dua syarat terjadinya pemantulan sempurna adalah...',
      options: [
        'cahaya merambat dari medium kurang rapat ke lebih rapat dengan sudut datang lebih kecil dari sudut kritis',
        'cahaya merambat dari medium lebih rapat ke kurang rapat dengan sudut datang sama dengan nol',
        'cahaya merambat dari medium lebih rapat ke kurang rapat dengan sudut datang lebih besar dari sudut kritis',
        'indeks bias selubung (cladding) lebih besar daripada indeks bias inti (core)'
      ],
      answer: 'C',
      hint: 'Sinar harus menuju medium berindeks bias lebih kecil dan sudut datangnya melampaui batas pembiasan $90^\\circ$.',
      solution: 'Pemantulan sempurna hanya dapat terjadi bila **cahaya merambat dari medium lebih rapat ke kurang rapat ($n_1 > n_2$) dengan sudut datang lebih besar dari sudut kritis ($\\theta_i > \\theta_c$)**. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Gejala optika fisis yang membuktikan bahwa gelombang cahaya merupakan gelombang transversal adalah...',
      options: ['pemantulan', 'pembiasan', 'interferensi', 'polarisasi'],
      answer: 'D',
      hint: 'Gelombang longitudinal (seperti bunyi) dapat memantul, membias, dan berinterferensi, tetapi tidak dapat mengalami peristiwa ini.',
      solution: 'Hanya gelombang transversal yang arah getarnya dapat disaring pada satu bidang tertentu, sehingga **polarisasi** membuktikan cahaya adalah gelombang transversal. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Perhatikan gambar pembentukan bayangan pada lensa cembung berikut. Sebuah benda diletakkan pada jarak $36\\ \\text{cm}$ di depan lensa cembung yang memiliki jarak fokus $12\\ \\text{cm}$. Jarak bayangan $s\'$ dan sifat bayangan yang terbentuk adalah...',
      options: [
        '$18\\ \\text{cm}$, nyata, terbalik, diperkecil',
        '$18\\ \\text{cm}$, maya, tegak, diperbesar',
        '$24\\ \\text{cm}$, nyata, terbalik, diperbesar',
        '$9\\ \\text{cm}$, nyata, terbalik, diperkecil'
      ],
      answer: 'A',
      hint: 'Gunakan rumus lensa tipis $\\dfrac{1}{s\'} = \\dfrac{1}{f} - \\dfrac{1}{s}$ dan bandingkan ukuran bayangan dengan $M = |s\'/s|$.',
      solution: '$\\dfrac{1}{s\'} = \\dfrac{1}{12} - \\dfrac{1}{36} = \\dfrac{3 - 1}{36} = \\dfrac{2}{36} = \\dfrac{1}{18} \\implies s\' = 18\\ \\text{cm}$.\nKarena $s\' > 0$ dan $M = \\dfrac{18}{36} = 0{,}5 < 1$, bayangan bersifat **nyata, terbalik, dan diperkecil**. Jawaban: **A**.',
      visual: {
        type: 'optics',
        props: {
          title: 'Pembentukan Bayangan Lensa Cembung',
          kind: 'convex-lens',
          focalLabel: 'f = 12 cm',
          objectDistLabel: 's = 36 cm',
          imageDistLabel: "s' = ?"
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Perhatikan diagram pembentukan bayangan pada cermin cekung berikut. Benda setinggi $6\\ \\text{cm}$ diletakkan $30\\ \\text{cm}$ di depan cermin cekung berjarak fokus $10\\ \\text{cm}$. Tinggi bayangan yang terbentuk adalah...',
      options: ['$2\\ \\text{cm}$', '$3\\ \\text{cm}$', '$6\\ \\text{cm}$', '$12\\ \\text{cm}$'],
      answer: 'B',
      hint: 'Hitung dahulu jarak bayangan $s\'$ dari $\\dfrac{1}{f} = \\dfrac{1}{s} + \\dfrac{1}{s\'}$, lalu tentukan $h\' = \\left|\\dfrac{s\'}{s}\\right| h$.',
      solution: '$\\dfrac{1}{s\'} = \\dfrac{1}{10} - \\dfrac{1}{30} = \\dfrac{3 - 1}{30} = \\dfrac{2}{30} \\implies s\' = 15\\ \\text{cm}$.\nPerbesaran: $M = \\dfrac{15}{30} = 0{,}5$, sehingga tinggi bayangan $h\' = 0{,}5 \\times 6 = 3\\ \\text{cm}$. Jawaban: **B**.',
      visual: {
        type: 'optics',
        props: {
          title: 'Pembentukan Bayangan Cermin Cekung',
          kind: 'concave-mirror',
          focalLabel: 'f = 10 cm',
          objectDistLabel: 's = 30 cm',
          objectHeightLabel: 'h = 6 cm',
          imageDistLabel: "s' = ?"
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Seorang pelajar penderita rabun jauh (miopi) hanya mampu melihat benda dengan jelas paling jauh pada jarak $200\\ \\text{cm}$. Kekuatan dan jenis lensa kacamata yang dibutuhkannya agar dapat melihat benda sangat jauh dengan jelas adalah...',
      options: [
        '$+0{,}5\\ \\text{dioptri}$ (lensa cembung)',
        '$-2{,}0\\ \\text{dioptri}$ (lensa cekung)',
        '$-0{,}5\\ \\text{dioptri}$ (lensa cekung)',
        '$+2{,}0\\ \\text{dioptri}$ (lensa cembung)'
      ],
      answer: 'C',
      hint: 'Untuk penderita miopi dengan titik jauh (PR) dalam cm, kekuatan lensa memenuhi $P = -100 / \\text{PR}$.',
      solution: 'Miopi ditolong dengan lensa cekung (negatif): $P = -\\dfrac{100}{\\text{PR}} = -\\dfrac{100}{200} = -0{,}5\\ \\text{dioptri}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Cahaya monokromatik berpanjang gelombang $500\\ \\text{nm}$ menyinari tegak lurus dua celah sempit yang terpisah sejauh $0{,}2\\ \\text{mm}$. Pola interferensi diamati pada layar yang berjarak $1{,}6\\ \\text{m}$ dari celah. Jarak antara garis terang pusat dan garis terang orde ke-2 adalah...',
      options: ['$4\\ \\text{mm}$', '$6\\ \\text{mm}$', '$12\\ \\text{mm}$', '$8\\ \\text{mm}$'],
      answer: 'D',
      hint: 'Gunakan rumus interferensi celah ganda Young $\\dfrac{d y}{L} = m \\lambda$ dengan $m = 2$.',
      solution: 'Dengan $\\lambda = 5 \\times 10^{-7}\\ \\text{m}$, $d = 2 \\times 10^{-4}\\ \\text{m}$, $L = 1{,}6\\ \\text{m}$, dan $m = 2$:\n$y = \\dfrac{2 \\times 5 \\times 10^{-7} \\times 1{,}6}{2 \\times 10^{-4}} = 8 \\times 10^{-3}\\ \\text{m} = 8\\ \\text{mm}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Cahaya tak terpolarisasi berintensitas $I_0 = 80\\ \\text{W/m}^2$ dilewatkan pada dua keping polaroid (polarisator dan analisator) yang sumbu transmisinya saling membentuk sudut $60^\\circ$. Intensitas cahaya yang keluar dari analisator adalah...',
      options: ['$10\\ \\text{W/m}^2$', '$20\\ \\text{W/m}^2$', '$40\\ \\text{W/m}^2$', '$30\\ \\text{W/m}^2$'],
      answer: 'A',
      hint: 'Polarisator pertama memotong intensitas menjadi setengahnya ($I_1 = \\frac{1}{2}I_0$), lalu analisator menerapkan hukum Malus $I_2 = I_1 \\cos^2 60^\\circ$.',
      solution: '$I_1 = \\dfrac{1}{2} \\times 80 = 40\\ \\text{W/m}^2$.\n$I_2 = I_1 \\cos^2 60^\\circ = 40 \\times \\left(\\dfrac{1}{2}\\right)^2 = 40 \\times \\dfrac{1}{4} = 10\\ \\text{W/m}^2$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Seberkas cahaya merambat di dalam suatu prisma optik transparan dengan cepat rambat $1{,}5 \\times 10^8\\ \\text{m/s}$ ($c = 3 \\times 10^8\\ \\text{m/s}$) menuju batas udara ($n_{\\text{udara}} = 1$). Sudut kritis pada batas prisma–udara agar terjadi pemantulan sempurna adalah...',
      options: ['$45^\\circ$', '$30^\\circ$', '$60^\\circ$', '$15^\\circ$'],
      answer: 'B',
      hint: 'Tentukan dahulu indeks bias prisma $n_1 = c / v$, lalu gunakan $\\sin\\theta_c = n_2 / n_1$.',
      solution: 'Indeks bias prisma: $n_1 = \\dfrac{3 \\times 10^8}{1{,}5 \\times 10^8} = 2$.\nSudut kritis menuju udara ($n_2 = 1$): $\\sin\\theta_c = \\dfrac{1}{2} \\implies \\theta_c = 30^\\circ$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Cahaya monokromatik dengan panjang gelombang $500\\ \\text{nm}$ jatuh tegak lurus pada kisi difraksi yang memiliki $5.000\\ \\text{garis/cm}$. Sudut deviasi garis terang orde ke-2 ($m = 2$) yang dihasilkan kisi adalah...',
      options: ['$15^\\circ$', '$45^\\circ$', '$30^\\circ$', '$60^\\circ$'],
      answer: 'C',
      hint: 'Cari konstanta kisi $d = \\dfrac{1\\ \\text{cm}}{5.000}$ dalam meter, lalu gunakan $d\\sin\\theta = m\\lambda$.',
      solution: 'Konstanta kisi $d = \\dfrac{10^{-2}\\ \\text{m}}{5.000} = 2 \\times 10^{-6}\\ \\text{m}$.\nUntuk $m = 2$ dan $\\lambda = 5 \\times 10^{-7}\\ \\text{m}$:\n$\\sin\\theta = \\dfrac{m\\lambda}{d} = \\dfrac{2 \\times 5 \\times 10^{-7}}{2 \\times 10^{-6}} = 0{,}5 \\implies \\theta = 30^\\circ$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah mikroskop memiliki lensa objektif dengan jarak fokus $2\\ \\text{cm}$ dan lensa okuler dengan jarak fokus $5\\ \\text{cm}$. Sebuah preparat diletakkan $2{,}5\\ \\text{cm}$ di depan lensa objektif dan diamati dengan mata **tidak berakomodasi** ($s_n = 25\\ \\text{cm}$). Perbesaran total bayangan mikroskop tersebut adalah...',
      options: ['$9\\ \\text{kali}$', '$24\\ \\text{kali}$', '$15\\ \\text{kali}$', '$20\\ \\text{kali}$'],
      answer: 'D',
      hint: 'Hitung jarak bayangan objektif $s\'_{\\text{ob}}$ dan $M_{\\text{ob}} = s\'_{\\text{ob}} / s_{\\text{ob}}$, lalu kalikan dengan $M_{\\text{ok}} = s_n / f_{\\text{ok}}$.',
      solution: 'Pada lensa objektif: $\\dfrac{1}{s\'_{\\text{ob}}} = \\dfrac{1}{2} - \\dfrac{1}{2{,}5} = 0{,}5 - 0{,}4 = 0{,}1 \\implies s\'_{\\text{ob}} = 10\\ \\text{cm}$.\n$M_{\\text{ob}} = \\dfrac{10}{2{,}5} = 4\\ \\text{kali}$.\nOkuler tak berakomodasi: $M_{\\text{ok}} = \\dfrac{25}{5} = 5\\ \\text{kali}$.\nPerbesaran total: $M = 4 \\times 5 = 20\\ \\text{kali}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah teropong bintang digunakan dengan mata tidak berakomodasi menghasilkan perbesaran sudut $10\\ \\text{kali}$ dan panjang teropong $110\\ \\text{cm}$. Jarak fokus lensa objektif dan lensa okuler teropong tersebut berturut-turut adalah...',
      options: [
        '$f_{\\text{ob}} = 100\\ \\text{cm}$ dan $f_{\\text{ok}} = 10\\ \\text{cm}$',
        '$f_{\\text{ob}} = 10\\ \\text{cm}$ dan $f_{\\text{ok}} = 100\\ \\text{cm}$',
        '$f_{\\text{ob}} = 99\\ \\text{cm}$ dan $f_{\\text{ok}} = 11\\ \\text{cm}$',
        '$f_{\\text{ob}} = 110\\ \\text{cm}$ dan $f_{\\text{ok}} = 11\\ \\text{cm}$'
      ],
      answer: 'A',
      hint: 'Untuk mata tak berakomodasi pada teropong bintang, $M = f_{\\text{ob}} / f_{\\text{ok}}$ dan $d = f_{\\text{ob}} + f_{\\text{ok}}$.',
      solution: 'Dari $M = \\dfrac{f_{\\text{ob}}}{f_{\\text{ok}}} = 10 \\implies f_{\\text{ob}} = 10 f_{\\text{ok}}$.\nSubstitusi ke $d = f_{\\text{ob}} + f_{\\text{ok}} = 110 \\implies 11 f_{\\text{ok}} = 110 \\implies f_{\\text{ok}} = 10\\ \\text{cm}$ dan $f_{\\text{ob}} = 100\\ \\text{cm}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Percobaan celah ganda Young dilakukan di udara ($n_{\\text{udara}} = 1$) dan menghasilkan jarak antara dua garis terang yang berdekatan sebesar $6\\ \\text{mm}$. Jika seluruh perangkat percobaan dicelupkan ke dalam zat cair transparan berindeks bias $n = 1{,}5$ tanpa mengubah jarak celah maupun layar, jarak antara dua garis terang berdekatan sekarang menjadi...',
      options: ['$9\\ \\text{mm}$', '$4\\ \\text{mm}$', '$6\\ \\text{mm}$', '$3\\ \\text{mm}$'],
      answer: 'B',
      hint: 'Di dalam medium berindeks bias $n$, panjang gelombang cahaya memendek menjadi $\\lambda\' = \\lambda / n$.',
      solution: 'Dalam medium berindeks bias $n = 1{,}5$, panjang gelombang cahaya berubah menjadi $\\lambda\' = \\dfrac{\\lambda}{n}$, sedangkan $d$ dan $L$ tetap.\nKarena $\\Delta y = \\dfrac{\\lambda L}{d} \\propto \\lambda$, jarak antarterang menjadi $\\Delta y\' = \\dfrac{6}{1{,}5} = 4\\ \\text{mm}$. Jawaban: **B**.'
    })
  ]
});
