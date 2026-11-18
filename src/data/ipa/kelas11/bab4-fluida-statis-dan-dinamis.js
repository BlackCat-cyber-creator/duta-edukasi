import { bab, soal } from '../author.js';

export default bab({
  grade: 11,
  number: 4,
  slug: 'fluida-statis-dan-dinamis',
  title: 'Mekanika Fluida Statis dan Dinamis',
  element: 'Pemahaman Fisika: mekanika fluida statis dan dinamis',
  summary: {
    overview: 'Bagaimana dongkrak hidrolik mengangkat mobil berat, mengapa kapal baja bermassa ribuan ton bisa mengapung, dan apa yang membuat sayap pesawat menghasilkan gaya angkat di udara? Bab ini mempelajari fluida statis — tekanan hidrostatis, pipa U, hukum Pascal, hukum Archimedes, tegangan permukaan, dan kapilaritas — serta fluida dinamis melalui persamaan kontinuitas, hukum Bernoulli, dan berbagai penerapannya.',
    coreConcepts: [
      'Tekanan Hidrostatis dan Pipa U: Tekanan total pada kedalaman $h$ di bawah permukaan fluida terbuka adalah $P = P_0 + \\rho g h$, dengan $P_0$ tekanan atmosfer. Berdasarkan hukum pokok hidrostatika, titik-titik pada kedalaman sama dalam satu jenis fluida homogen yang terhubung memiliki tekanan sama; pada pipa U berisi dua cairan tak bercampur berlaku $\\rho_1 h_1 = \\rho_2 h_2$.',
      'Hukum Pascal dan Sistem Hidrolik: Tekanan yang diberikan pada fluida tertutup diteruskan sama besar ke segala arah: $\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}$. Karena luas penampang lingkaran sebanding dengan kuadrat diameternya ($A \\propto d^2$), perbandingan gaya menjadi $\\dfrac{F_2}{F_1} = \\left(\\dfrac{d_2}{d_1}\\right)^2$, yang dimanfaatkan pada dongkrak, rem, dan mesin pres hidrolik.',
      'Hukum Archimedes dan Gaya Apung: Setiap benda yang tercelup sebagian atau seluruhnya dalam fluida mengalami gaya ke atas sebesar berat fluida yang dipindahkan: $F_A = \\rho_f g V_{\\text{tercelup}}$. Benda terapung jika $\\rho_b < \\rho_f$ dengan fraksi tercelup $\\dfrac{V_{\\text{tercelup}}}{V_b} = \\dfrac{\\rho_b}{\\rho_f}$ dan $F_A = w$; melayang jika $\\rho_b = \\rho_f$; serta tenggelam jika $\\rho_b > \\rho_f$.',
      'Tegangan Permukaan dan Kapilaritas: Tegangan permukaan ($\\gamma = F/L$, atau $F/(2L)$ untuk selaput ganda) muncul akibat gaya tarik antarmolekul di permukaan cairan. Perbandingan gaya kohesi dan adhesi menentukan bentuk meniskus (cekung untuk air di kaca, cembung untuk raksa) serta kenaikan atau penurunan cairan di pipa sempit (kapilaritas): $h = \\dfrac{2\\gamma\\cos\\theta}{\\rho g r}$.',
      'Fluida Ideal dan Persamaan Kontinuitas: Fluida ideal bersifat tak termampatkan, tunak (stasioner), non-viskos, dan tak berolak. Pada aliran fluida tunak, debit aliran $Q = \\dfrac{V}{t} = A v$ bernilai konstan sepanjang pipa sehingga berlaku persamaan kontinuitas $A_1 v_1 = A_2 v_2$: kelajuan fluida meningkat ketika melewati penampang yang lebih sempit.',
      'Hukum Bernoulli dan Penerapannya: Hukum Bernoulli menyatakan kekekalan energi mekanik per satuan volume pada aliran fluida ideal: $P + \\tfrac{1}{2}\\rho v^2 + \\rho g h = \\text{konstan}$. Pada bagian pipa berkecepatan tinggi, tekanan statisnya turun. Prinsip ini menjelaskan teorema Torricelli pada tangki bocor ($v = \\sqrt{2gh}$), alat ukur debit venturimeter, karburator, serta gaya angkat sayap pesawat $F = \\tfrac{1}{2}\\rho_{\\text{udara}}(v_{\\text{atas}}^2 - v_{\\text{bawah}}^2)A$.'
    ],
    keyFormulas: [
      { label: 'Tekanan hidrostatis & pipa U', formula: 'P = P_0 + \\rho g h \\qquad \\rho_1 h_1 = \\rho_2 h_2' },
      { label: 'Hukum Pascal & Archimedes', formula: '\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2} \\qquad F_A = \\rho_f\\, g\\, V_{\\text{tercelup}}' },
      { label: 'Tegangan permukaan & kapilaritas', formula: '\\gamma = \\dfrac{F}{L} \\qquad h = \\dfrac{2\\gamma\\cos\\theta}{\\rho g r}' },
      { label: 'Debit & kontinuitas', formula: 'Q = \\dfrac{V}{t} = A v \\qquad A_1 v_1 = A_2 v_2' },
      { label: 'Persamaan Bernoulli & Torricelli', formula: 'P + \\tfrac{1}{2}\\rho v^2 + \\rho g h = \\text{konstan} \\qquad v = \\sqrt{2gh}' },
      { label: 'Gaya angkat sayap pesawat', formula: 'F_{\\text{angkat}} = \\tfrac{1}{2}\\rho_{\\text{udara}}(v_{\\text{atas}}^2 - v_{\\text{bawah}}^2)A' }
    ],
    workedExamples: [
      {
        title: 'Menentukan massa jenis cairan pada pipa U',
        problem: 'Pipa U berisi air ($\\rho_a = 1.000\\text{ kg/m}^3$), lalu salah satu kakinya diisi minyak setinggi $15\\text{ cm}$. Jika selisih ketinggian permukaan air pada kedua kaki pipa $12\\text{ cm}$, berapa massa jenis minyak?',
        solution: 'Tarik garis bidang batas minyak–air: tekanan di kedua kaki pada ketinggian tersebut sama.\n$\\rho_m h_m = \\rho_a h_a \\Rightarrow \\rho_m(15) = 1.000(12) \\Rightarrow \\rho_m = \\dfrac{12.000}{15} = 800\\text{ kg/m}^3$.'
      },
      {
        title: 'Hukum Kontinuitas dan Bernoulli pada pipa mendatar',
        problem: 'Air ($\\rho = 1.000\\text{ kg/m}^3$) mengalir melalui pipa mendatar dari penampang $A_1 = 20\\text{ cm}^2$ berkecepatan $2\\text{ m/s}$ dan tekanan $150\\text{ kPa}$ menuju penampang sempit $A_2 = 10\\text{ cm}^2$. Hitung kelajuan dan tekanan air pada penampang sempit.',
        solution: 'Kontinuitas: $v_2 = \\dfrac{A_1}{A_2}v_1 = \\dfrac{20}{10} \\times 2 = 4\\text{ m/s}$.\nBernoulli ($h_1 = h_2$): $P_2 = P_1 - \\tfrac{1}{2}\\rho(v_2^2 - v_1^2) = 150.000 - 500(16 - 4) = 150.000 - 6.000 = 144.000\\text{ Pa} = 144\\text{ kPa}$.'
      },
      {
        title: 'Jarak pancaran tangki bocor (Torricelli)',
        problem: 'Sebuah tangki berisi air setinggi $5\\text{ m}$ memiliki lubang kecil pada dindingnya pada ketinggian $3{,}2\\text{ m}$ di atas lantai ($g = 10\\text{ m/s}^2$). Berapa jarak mendatar jatuhnya air di lantai dari dinding tangki?',
        solution: 'Kedalaman lubang dari permukaan air $h_1 = 5 - 3{,}2 = 1{,}8\\text{ m}$, sehingga $v = \\sqrt{2gh_1} = \\sqrt{2 \\times 10 \\times 1{,}8} = 6\\text{ m/s}$.\nWaktu jatuh dari ketinggian $h_2 = 3{,}2\\text{ m}$: $t = \\sqrt{\\dfrac{2h_2}{g}} = \\sqrt{\\dfrac{6{,}4}{10}} = 0{,}8\\text{ s}$.\nJarak mendatar: $x = v \\cdot t = 6 \\times 0{,}8 = 4{,}8\\text{ m}$.'
      }
    ],
    misconceptions: [
      'Menganggap tekanan fluida paling besar di bagian pipa yang paling sempit karena alirannya berdesakan. Menurut kontinuitas laju aliran justru membesar di bagian sempit, sehingga menurut Bernoulli tekanan statisnya malah turun.',
      'Mengira benda terapung menerima gaya apung yang lebih besar daripada beratnya. Selama benda diam terapung, gaya apung tepat sama besar dengan berat benda ($F_A = w$), hanya saja bagian yang tercelup kurang dari volume totalnya.',
      'Mengukur nilai $h$ pada rumus semburan Torricelli ($v = \\sqrt{2gh}$) dari dasar wadah. Nilai $h$ adalah kedalaman lubang diukur dari permukaan bebas fluida di bagian atas.'
    ],
    tutorTip: 'Jika soal Pascal atau Kontinuitas membandingkan diameter pipa ($d_1$ dan $d_2$), ingat bahwa luas $A \\propto d^2$: jika diameter menjadi dua kali lipat, luas menjadi empat kali lipat!'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Seorang penyelam berada pada kedalaman $20\\text{ m}$ di bawah permukaan air danau ($\\rho = 1.000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$). Jika tekanan udara di permukaan danau sebesar $P_0 = 1 \\times 10^5\\text{ Pa}$, tekanan mutlak (total) yang dialami penyelam adalah...',
      options: ['2 × 10⁵ Pa', '3 × 10⁵ Pa', '1 × 10⁵ Pa', '2,2 × 10⁵ Pa'],
      answer: 'B',
      hint: 'Tekanan mutlak menjumlahkan tekanan atmosfer $P_0$ dan tekanan hidrostatis $\\rho g h$.',
      solution: '$P = P_0 + \\rho g h = 1 \\times 10^5 + (1.000)(10)(20) = 1 \\times 10^5 + 2 \\times 10^5 = 3 \\times 10^5\\text{ Pa}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Raksa di dalam pipa kaca sempit membentuk meniskus cembung dan permukaannya turun lebih rendah daripada permukaan raksa di luar pipa. Penyebab utama fenomena kapilaritas tersebut adalah...',
      options: [
        'gaya adhesi antara raksa dan kaca lebih besar daripada gaya kohesi antarpartikel raksa',
        'tekanan atmosfer di dalam pipa kapiler selalu lebih besar daripada di luar pipa',
        'massa jenis raksa lebih kecil daripada massa jenis air',
        'gaya kohesi antarpartikel raksa lebih besar daripada gaya adhesi antara raksa dan kaca'
      ],
      answer: 'D',
      hint: 'Bandingkan gaya tarik antarmolekul sejenis (kohesi) dengan gaya tarik terhadap dinding kaca (adhesi).',
      solution: 'Raksa membentuk sudut kontak tumpul (meniskus cembung) dan mengalami penurunan kapiler karena **gaya kohesi antarpartikel raksa lebih besar daripada gaya adhesi antara raksa dan dinding kaca**. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Air mengalir tenang melalui pipa berpenampang lingkaran. Di bagian berdiameter $d_1 = 6\\text{ cm}$, kelajuan air adalah $v_1 = 2\\text{ m/s}$. Ketika melewati bagian yang menyempit dengan diameter $d_2 = 3\\text{ cm}$, kelajuan aliran air menjadi...',
      options: ['8 m/s', '4 m/s', '1 m/s', '0,5 m/s'],
      answer: 'A',
      hint: 'Karena $A \\propto d^2$, persamaan kontinuitas memberi $v_2 = v_1 (d_1 / d_2)^2$.',
      solution: '$v_2 = v_1\\left(\\dfrac{d_1}{d_2}\\right)^2 = 2 \\times \\left(\\dfrac{6}{3}\\right)^2 = 2 \\times 4 = 8\\text{ m/s}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pesawat terbang memperoleh gaya angkat ke atas akibat desain penampang sayap (airfoil) yang lebih cembung di bagian atas. Menurut prinsip Bernoulli, keadaan aliran udara yang menghasilkan gaya angkat tersebut adalah...',
      options: [
        'laju udara di bawah sayap lebih besar sehingga tekanannya lebih besar daripada di atas sayap',
        'laju udara di atas sayap lebih kecil sehingga tekanannya lebih kecil daripada di bawah sayap',
        'laju udara di atas sayap lebih besar sehingga tekanannya lebih kecil daripada di bawah sayap',
        'laju udara di atas dan bawah sayap sama besar, tetapi massa jenis udara di bawah lebih kecil'
      ],
      answer: 'C',
      hint: 'Pada Hukum Bernoulli, kelajuan aliran fluida yang lebih tinggi menghasilkan tekanan statis yang lebih rendah.',
      solution: 'Aliran udara melewati sisi atas sayap lebih cepat sehingga **tekanan di atas sayap lebih kecil daripada tekanan di bawah sayap**. Selisih tekanan inilah yang mendorong sayap ke atas. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Perhatikan sistem dongkrak hidrolik pada gambar. Pengisap kecil berluas penampang $A_1 = 25\\text{ cm}^2$ dan pengisap besar berluas penampang $A_2 = 500\\text{ cm}^2$. Untuk menahan beban seberat $F_2 = 16.000\\text{ N}$ pada pengisap besar secara setimbang, gaya tekan minimal $F_1$ pada pengisap kecil adalah...',
      options: ['320 N', '800 N', '400 N', '1.600 N'],
      answer: 'B',
      hint: 'Gunakan Hukum Pascal $\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}$.',
      solution: '$F_1 = F_2 \\times \\dfrac{A_1}{A_2} = 16.000 \\times \\dfrac{25}{500} = \\dfrac{16.000}{20} = 800\\text{ N}$. Jawaban: **B**.',
      visual: {
        type: 'hydraulic',
        props: {
          title: 'Dongkrak Hidrolik',
          smallForce: 'F₁ = ?',
          smallArea: 'A₁ = 25 cm²',
          bigForce: 'F₂ = 16.000 N',
          bigArea: 'A₂ = 500 cm²'
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah pipa U mula-mula diisi air bermassa jenis $1.000\\text{ kg/m}^3$. Ke dalam salah satu kaki pipa dituangkan minyak setinggi $15\\text{ cm}$ yang tidak bercampur dengan air sehingga terjadi selisih tinggi permukaan air sebesar $12\\text{ cm}$. Massa jenis minyak tersebut adalah...',
      options: ['1.250 kg/m³', '900 kg/m³', '750 kg/m³', '800 kg/m³'],
      answer: 'D',
      hint: 'Samakan tekanan hidrostatis di bidang batas minyak dan air: $\\rho_{\\text{minyak}} h_{\\text{minyak}} = \\rho_{\\text{air}} h_{\\text{air}}$.',
      solution: '$\\rho_m \\times 15 = 1.000 \\times 12 \\Rightarrow \\rho_m = \\dfrac{12.000}{15} = 800\\text{ kg/m}^3$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah balok es bermassa jenis $900\\text{ kg/m}^3$ terapung di permukaan larutan garam bermassa jenis $1.200\\text{ kg/m}^3$. Persentase volume balok es yang muncul di atas permukaan larutan adalah...',
      options: ['25%', '75%', '33%', '20%'],
      answer: 'A',
      hint: 'Hitung terlebih dahulu fraksi volume yang tercelup dari $V_{\\text{celup}} / V = \\rho_b / \\rho_f$, lalu kurangkan dari $100\\%$.',
      solution: 'Fraksi volume tercelup $= \\dfrac{\\rho_b}{\\rho_f} = \\dfrac{900}{1.200} = 0{,}75 = 75\\%$.\nVolume yang muncul di atas permukaan $= 100\\% - 75\\% = 25\\%$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah logam berbentuk kubus ditimbang di udara memiliki berat $50\\text{ N}$, sedangkan ketika dicelupkan seluruhnya ke dalam air ($\\rho = 1.000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$) berat semunya terbaca $30\\text{ N}$. Massa jenis logam tersebut adalah...',
      options: ['1.500 kg/m³', '3.000 kg/m³', '2.500 kg/m³', '5.000 kg/m³'],
      answer: 'C',
      hint: 'Selisih berat di udara dan di air sama dengan gaya apung $F_A = \\rho_{\\text{air}} g V$, dari situ cari volume benda $V$.',
      solution: '$F_A = 50 - 30 = 20\\text{ N} \\Rightarrow V = \\dfrac{20}{1.000 \\times 10} = 2 \\times 10^{-3}\\text{ m}^3$.\nMassa logam $m = \\dfrac{50}{10} = 5\\text{ kg}$, sehingga $\\rho = \\dfrac{5}{2 \\times 10^{-3}} = 2.500\\text{ kg/m}^3$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah kawat lurus sepanjang $10\\text{ cm}$ ditempatkan mendatar pada bingkai U yang dicelupkan ke larutan sabun sehingga terbentuk selaput sabun berpermukaan ganda. Jika gaya minimum sebesar $0{,}012\\text{ N}$ diperlukan untuk menahan kawat agar tidak tertarik selaput, besar tegangan permukaan larutan sabun tersebut adalah...',
      options: ['0,12 N/m', '0,06 N/m', '0,03 N/m', '0,24 N/m'],
      answer: 'B',
      hint: 'Selaput sabun memiliki dua permukaan (depan dan belakang), sehingga panjang efektif batas permukaannya $2L$.',
      solution: '$\\gamma = \\dfrac{F}{2L} = \\dfrac{0{,}012}{2 \\times 0{,}1} = \\dfrac{0{,}012}{0{,}2} = 0{,}06\\text{ N/m}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Air naik setinggi $4\\text{ cm}$ di dalam pipa kapiler kaca berjari-jari $r$. Jika digunakan pipa kapiler kaca kedua berisi air yang sama namun berjari-jari $\\tfrac{1}{2}r$, ketinggian kenaikan air di pipa kedua adalah...',
      options: ['8 cm', '2 cm', '16 cm', '1 cm'],
      answer: 'A',
      hint: 'Pada rumus kapilaritas $h = \\dfrac{2\\gamma\\cos\\theta}{\\rho g r}$, tinggi kenaikan berbanding terbalik dengan jari-jari pipa.',
      solution: 'Karena $h \\propto \\dfrac{1}{r}$, memperkecil jari-jari menjadi $\\tfrac{1}{2}r$ membuat ketinggian kenaikan menjadi dua kali lipat: $h_2 = 2 \\times 4 = 8\\text{ cm}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Air ($\\rho = 1.000\\text{ kg/m}^3$) mengalir dalam pipa mendatar dari bagian berpenampang $A_1 = 40\\text{ cm}^2$ menuju bagian menyempit $A_2 = 10\\text{ cm}^2$. Jika kelajuan air di penampang besar $v_1 = 2\\text{ m/s}$ dan tekanannya $P_1 = 120\\text{ kPa}$, tekanan air di penampang kecil adalah...',
      options: ['150 kPa', '108 kPa', '60 kPa', '90 kPa'],
      answer: 'D',
      hint: 'Hitung $v_2$ dengan $A_1 v_1 = A_2 v_2$, lalu gunakan $P_1 + \\tfrac{1}{2}\\rho v_1^2 = P_2 + \\tfrac{1}{2}\\rho v_2^2$.',
      solution: '$v_2 = \\dfrac{40}{10} \\times 2 = 8\\text{ m/s}$.\n$P_2 = P_1 - \\tfrac{1}{2}\\rho(v_2^2 - v_1^2) = 120.000 - 500(64 - 4) = 120.000 - 30.000 = 90.000\\text{ Pa} = 90\\text{ kPa}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah tangki terbuka berisi air setinggi $5\\text{ m}$ dari tanah. Pada dinding tangki terdapat lubang kebocoran kecil pada ketinggian $3{,}2\\text{ m}$ di atas tanah ($g = 10\\text{ m/s}^2$). Jarak mendatar jatuhnya pancaran air pertama kali di tanah diukur dari dinding tangki adalah...',
      options: ['2,4 m', '3,6 m', '4,8 m', '6,0 m'],
      answer: 'C',
      hint: 'Kedalaman lubang dari permukaan air $h_1 = 5 - 3{,}2 = 1{,}8\\text{ m}$; gunakan $x = 2\\sqrt{h_1 h_2}$.',
      solution: 'Kelajuan semburan $v = \\sqrt{2 g h_1} = \\sqrt{2 \\times 10 \\times 1{,}8} = 6\\text{ m/s}$.\nWaktu jatuh $t = \\sqrt{\\dfrac{2(3{,}2)}{10}} = 0{,}8\\text{ s}$, sehingga jarak mendatar $x = 6 \\times 0{,}8 = 4{,}8\\text{ m}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah pesawat ringan memiliki luas total kedua sayap sebesar $20\\text{ m}^2$. Saat terbang mendatar, kelajuan aliran udara di atas sayap adalah $80\\text{ m/s}$ dan di bawah sayap adalah $60\\text{ m/s}$. Jika massa jenis udara $1{,}2\\text{ kg/m}^3$, besar gaya angkat yang bekerja pada sayap pesawat adalah...',
      options: ['16,8 kN', '33,6 kN', '28,0 kN', '67,2 kN'],
      answer: 'B',
      hint: 'Gunakan $F_{\\text{angkat}} = \\tfrac{1}{2}\\rho_{\\text{udara}}(v_{\\text{atas}}^2 - v_{\\text{bawah}}^2)A$.',
      solution: '$F = \\tfrac{1}{2}(1{,}2)(80^2 - 60^2)(20) = 0{,}6(6.400 - 3.600)(20) = 0{,}6 \\times 2.800 \\times 20 = 33.600\\text{ N} = 33{,}6\\text{ kN}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Air mengalir melalui venturimeter tanpa manometer dengan luas penampang besar $A_1 = 10\\text{ cm}^2$ dan penampang sempit $A_2 = 5\\text{ cm}^2$. Jika selisih ketinggian kolom air pada kedua tabung vertikal di atasnya adalah $60\\text{ cm}$ ($g = 10\\text{ m/s}^2$), kelajuan air pada penampang besar adalah...',
      options: ['2 m/s', '4 m/s', '1 m/s', '3 m/s'],
      answer: 'A',
      hint: 'Substitusikan $v_2 = 2 v_1$ ke persamaan $\\rho g h = \\tfrac{1}{2}\\rho(v_2^2 - v_1^2)$.',
      solution: 'Dari kontinuitas, $v_2 = \\dfrac{10}{5}v_1 = 2v_1$.\nDari Bernoulli: $gh = \\tfrac{1}{2}(v_2^2 - v_1^2) \\Rightarrow 10(0{,}6) = \\tfrac{1}{2}(4v_1^2 - v_1^2) \\Rightarrow 6 = \\tfrac{3}{2}v_1^2 \\Rightarrow v_1^2 = 4 \\Rightarrow v_1 = 2\\text{ m/s}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah balok kayu bervolume $0{,}008\\text{ m}^3$ dan bermassa jenis $600\\text{ kg/m}^3$ terapung di air ($\\rho_{\\text{air}} = 1.000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$). Massa beban maksimum yang dapat diletakkan di atas balok agar permukaan atas balok tepat sejajar dengan permukaan air adalah...',
      options: ['4,8 kg', '8,0 kg', '3,2 kg', '2,4 kg'],
      answer: 'C',
      hint: 'Saat permukaan atas balok sejajar air, seluruh volume balok tercelup sehingga gaya apung mencapai nilai maksimum $\\rho_{\\text{air}} g V$.',
      solution: 'Gaya apung maksimum $F_{A,\\text{maks}} = 1.000 \\times 10 \\times 0{,}008 = 80\\text{ N}$.\nBerat kayu $w_k = 600 \\times 0{,}008 \\times 10 = 48\\text{ N}$.\nBerat beban tambahan maksimum $= 80 - 48 = 32\\text{ N}$, sehingga $m_{\\text{beban}} = 3{,}2\\text{ kg}$. Jawaban: **C**.'
    })
  ]
});
