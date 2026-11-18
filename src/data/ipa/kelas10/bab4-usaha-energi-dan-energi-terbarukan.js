import { bab, soal } from '../author.js';

export default bab({
  grade: 10,
  number: 4,
  slug: 'usaha-energi-dan-energi-terbarukan',
  title: 'Usaha, Energi, dan Energi Terbarukan',
  element: 'Energi dan perubahannya: usaha, energi, dan energi terbarukan',
  summary: {
    overview: 'Konsep usaha dan energi menjadi dasar untuk memahami cara kerja mesin hingga pembangkit listrik modern. Bab ini membahas usaha oleh gaya yang membentuk sudut, energi kinetik, energi potensial gravitasi dan pegas, teorema usaha-energi, hukum kekekalan energi mekanik beserta peran gaya gesek, daya dan efisiensi konversi energi, serta pemanfaatan sumber energi terbarukan (PLTS, PLTB, PLTA, dan PLTP) untuk mengatasi krisis energi.',
    coreConcepts: [
      'Usaha oleh Gaya Membentuk Sudut: Usaha oleh gaya konstan $\\vec{F}$ yang menyebabkan perpindahan $\\vec{s}$ dirumuskan $W = F s\\cos\\theta$, dengan $\\theta$ adalah sudut antara arah gaya dan arah perpindahan. Usaha bernilai positif bila gaya searah atau membantu gerak ($0^\\circ \\le \\theta < 90^\\circ$), bernilai nol bila tegak lurus perpindahan ($\\theta = 90^\\circ$), dan bernilai negatif bila berlawanan arah gerak ($90^\\circ < \\theta \\le 180^\\circ$, seperti gaya gesek).',
      'Energi Kinetik dan Energi Potensial: Energi kinetik dimiliki benda bergerak sebesar $E_k = \\tfrac{1}{2}m v^2$. Energi potensial gravitasi di dekat permukaan bumi adalah $E_p = m g h$, sedangkan energi potensial elastis pegas yang diregangkan atau dimampatkan sejauh $\\Delta x$ adalah $E_{pp} = \\tfrac{1}{2}k(\\Delta x)^2$, dengan $k$ konstanta pegas ($F = k\\,\\Delta x$).',
      'Teorema Usaha-Energi dan Kekekalan Energi Mekanik: Usaha total oleh resultan gaya sama dengan perubahan energi kinetik benda: $W_{\\text{total}} = \\Delta E_k = \\tfrac{1}{2}m(v_2^2 - v_1^2)$. Jika hanya gaya konservatif (gravitasi atau pegas) yang bekerja, energi mekanik $E_m = E_p + E_k$ kekal ($E_{m1} = E_{m2}$). Bila ada gaya gesek, berlaku $W_{\\text{gesek}} = E_{m2} - E_{m1}$.',
      'Daya dan Efisiensi Konversi Energi: Daya adalah laju perpindahan atau perubahan energi tiap satuan waktu: $P = \\dfrac{W}{t} = F v\\cos\\theta$ (watt). Dalam setiap proses konversi energi nyata, sebagian energi terbuang menjadi kalor atau bunyi sehingga efisiensi sistem adalah $\\eta = \\dfrac{E_{\\text{keluaran}}}{E_{\\text{masukan}}} \\times 100\\% = \\dfrac{P_{\\text{keluaran}}}{P_{\\text{masukan}}} \\times 100\\%$.',
      'Energi Terbarukan Mengatasi Krisis Energi: Menipisnya cadangan bahan bakar fosil dan tingginya emisi karbon menuntut transisi ke energi terbarukan. Sumber utamanya meliputi PLTS (panel surya fotovoltaik mengubah cahaya matahari langsung menjadi listrik), PLTB (turbin angin mengubah energi kinetik angin), PLTA/mikrohidro (memanfaatkan energi potensial air mengalir dengan daya input $P = \\rho Q g h$), serta PLTP (memanfaatkan uap panas bumi sebagai energi dasar yang stabil di daerah vulkanik seperti Indonesia).'
    ],
    keyFormulas: [
      { label: 'Usaha & teorema usaha-energi', formula: 'W = F s\\cos\\theta \\qquad W_{\\text{total}} = \\Delta E_k = \\tfrac{1}{2}m(v_2^2 - v_1^2)' },
      { label: 'Energi kinetik & potensial', formula: 'E_k = \\tfrac{1}{2}m v^2 \\qquad E_p = m g h \\qquad E_{pp} = \\tfrac{1}{2}k(\\Delta x)^2' },
      { label: 'Kekekalan energi mekanik', formula: 'E_{p1} + E_{k1} = E_{p2} + E_{k2}' },
      { label: 'Daya & efisiensi konversi', formula: 'P = \\dfrac{W}{t} \\qquad \\eta = \\dfrac{P_{\\text{keluaran}}}{P_{\\text{masukan}}} \\times 100\\%' }
    ],
    workedExamples: [
      {
        title: 'Usaha gaya membentuk sudut',
        problem: 'Sebuah koper ditarik dengan gaya $40\\text{ N}$ membentuk sudut $37^\\circ$ terhadap lantai mendatar sejauh $5\\text{ m}$ ($\\cos 37^\\circ = 0{,}8$). Hitung usaha yang dilakukan gaya tersebut.',
        solution: '$W = F s\\cos\\theta = 40 \\times 5 \\times 0{,}8 = 160\\text{ J}$.'
      },
      {
        title: 'Kekekalan energi mekanik dengan gesekan',
        problem: 'Benda $2\\text{ kg}$ meluncur dari keadaan diam di puncak bidang miring kasar setinggi $5\\text{ m}$ ($g = 10\\text{ m/s}^2$). Di dasar bidang kecepatannya $8\\text{ m/s}$. Berapa energi yang hilang akibat gesekan?',
        solution: '$E_{m1} = m g h = 2 \\times 10 \\times 5 = 100\\text{ J}$.\n$E_{m2} = \\tfrac{1}{2}m v^2 = \\tfrac{1}{2}(2)(8^2) = 64\\text{ J}$.\nEnergi hilang oleh gesekan $= 100 - 64 = 36\\text{ J}$.'
      },
      {
        title: 'Menghitung daya listrik PLTA',
        problem: 'Air terjun setinggi $20\\text{ m}$ mengalir dengan debit $2\\text{ m}^3/\\text{s}$ ($\\rho = 1.000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$). Jika efisiensi PLTA $80\\%$, berapa daya listrik yang dihasilkan?',
        solution: 'Daya air masukan $P_{\\text{in}} = \\rho Q g h = 1.000 \\times 2 \\times 10 \\times 20 = 400.000\\text{ W} = 400\\text{ kW}$.\nDaya listrik keluaran $P_{\\text{out}} = 0{,}80 \\times 400\\text{ kW} = 320\\text{ kW}$.'
      }
    ],
    misconceptions: [
      'Mengira gaya yang sangat besar selalu menghasilkan usaha. Jika benda tidak berpindah ($s = 0$) atau arah gaya tegak lurus perpindahan ($\\theta = 90^\\circ$), usaha gaya itu nol.',
      'Menganggap energi hilang atau musnah saat ada gaya gesek. Energi total alam semesta tetap kekal; energi mekanik hanya berubah menjadi energi termal (kalor) dan bunyi.',
      'Menganggap panel surya (PLTS) memakai turbin seperti PLTA atau PLTB. Sel fotovoltaik mengubah energi cahaya langsung menjadi energi listrik arus searah tanpa bagian berputar.'
    ],
    tutorTip: 'Jika soal hanya menanyakan kelajuan atau pemampatan maksimum tanpa menanyakan waktu, hampir selalu lebih cepat diselesaikan dengan Kekekalan Energi Mekanik atau Teorema Usaha-Energi daripada persamaan kinematika dan Hukum Newton.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sebuah peti ditarik di atas lantai datar dengan gaya $50\\text{ N}$ yang membentuk sudut $60^\\circ$ terhadap arah perpindahan horizontal. Jika peti berpindah sejauh $8\\text{ m}$, usaha yang dilakukan gaya tersebut adalah...',
      options: ['200 J', '400 J', '$200\\sqrt{3}\\text{ J}$', '100 J'],
      answer: 'A',
      hint: 'Gunakan rumus usaha $W = F s\\cos\\theta$ dengan $\\cos 60^\\circ = 0{,}5$.',
      solution: '$W = 50 \\times 8 \\times \\cos 60^\\circ = 400 \\times 0{,}5 = 200\\text{ J}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Seorang siswa mengangkat tas bermassa $3\\text{ kg}$ (berat $30\\text{ N}$) setinggi pinggang, lalu berjalan lurus mendatar sejauh $10\\text{ m}$ dengan kecepatan tetap. Usaha yang dilakukan oleh gaya angkat tangan ke atas terhadap perpindahan mendatar tas tersebut adalah...',
      options: ['300 J', '30 J', '3 J', '0 J'],
      answer: 'D',
      hint: 'Perhatikan sudut antara gaya angkat (vertikal ke atas) dan arah perpindahan (horizontal).',
      solution: 'Arah gaya angkat ke atas membentuk sudut $90^\\circ$ terhadap perpindahan mendatar. Karena $\\cos 90^\\circ = 0$, usaha gaya tersebut adalah **$0\\text{ J}$**. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah pegas memiliki konstanta pegas $k = 200\\text{ N/m}$. Jika pegas ditarik hingga bertambah panjang $0{,}2\\text{ m}$, energi potensial elastis yang tersimpan dalam pegas adalah...',
      options: ['2 J', '4 J', '20 J', '40 J'],
      answer: 'B',
      hint: 'Gunakan rumus energi potensial pegas $E_{pp} = \\tfrac{1}{2} k (\\Delta x)^2$.',
      solution: '$E_{pp} = \\tfrac{1}{2} \\times 200 \\times (0{,}2)^2 = 100 \\times 0{,}04 = 4\\text{ J}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pembangkit listrik tenaga terbarukan yang mengubah energi radiasi cahaya matahari secara langsung menjadi energi listrik tanpa melalui turbin dan generator mekanis adalah...',
      options: [
        'PLTA (Pembangkit Listrik Tenaga Air)',
        'PLTB (Pembangkit Listrik Tenaga Bayu)',
        'PLTS (Pembangkit Listrik Tenaga Surya)',
        'PLTP (Pembangkit Listrik Tenaga Panas Bumi)'
      ],
      answer: 'C',
      hint: 'Sel fotovoltaik menghasilkan arus listrik ketika terkena foton cahaya.',
      solution: '**PLTS** memanfaatkan sel surya (fotovoltaik) yang mengubah energi cahaya matahari langsung menjadi energi listrik tanpa menggerakkan turbin mekanis. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Indonesia memiliki potensi besar untuk pengembangan PLTP (Pembangkit Listrik Tenaga Panas Bumi). Keunggulan utama PLTP dibandingkan PLTS dan PLTB dalam penyediaan listrik adalah...',
      options: [
        'tidak memerlukan jaringan kabel transmisi',
        'dapat beroperasi terus-menerus sepanjang hari tanpa bergantung pada cuaca maupun waktu siang-malam',
        'dapat dibangun di semua halaman rumah penduduk',
        'tidak melibatkan perubahan energi mekanik sama sekali'
      ],
      answer: 'B',
      hint: 'Bandingkan kestabilan pasokan panas dari dalam bumi dengan intensitas matahari atau kecepatan angin.',
      solution: 'Energi panas bumi tersedia secara kontinu di bawah permukaan bumi, sehingga **PLTP dapat beroperasi stabil 24 jam tanpa bergantung pada cuaca atau siang-malam**, menjadikannya pembangkit beban dasar yang andal. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah balok bermassa $4\\text{ kg}$ ditarik naik sepanjang bidang miring kasar bersudut kemiringan $30^\\circ$ oleh gaya sejajar bidang $F = 35\\text{ N}$ seperti pada gambar. Jika gaya gesek kinetis antara balok dan bidang $f = 5\\text{ N}$ ($g = 10\\text{ m/s}^2$), usaha total yang bekerja pada balok saat berpindah sejauh $6\\text{ m}$ ke atas bidang adalah...',
      options: ['60 J', '180 J', '210 J', '90 J'],
      answer: 'A',
      hint: 'Hitung resultan gaya sejajar bidang miring $\\Sigma F = F - m g\\sin 30^\\circ - f$, lalu kalikan dengan perpindahan $6\\text{ m}$.',
      solution: 'Komponen gaya berat sejajar bidang miring: $w\\sin 30^\\circ = 4 \\times 10 \\times 0{,}5 = 20\\text{ N}$ (ke bawah bidang).\nResultan gaya ke atas bidang: $\\Sigma F = 35 - 20 - 5 = 10\\text{ N}$.\nUsaha total: $W_{\\text{total}} = \\Sigma F \\cdot s = 10 \\times 6 = 60\\text{ J}$. Jawaban: **A**.',
      visual: {
        type: 'inclined-plane',
        props: {
          title: 'Balok pada Bidang Miring',
          angleLabel: '30°',
          massLabel: '4 kg',
          forceLabel: 'F = 35 N',
          frictionLabel: 'f = 5 N'
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah benda bermassa $2\\text{ kg}$ mula-mula bergerak dengan kelajuan $4\\text{ m/s}$, lalu dipercepat sehingga kelajuannya menjadi $10\\text{ m/s}$. Usaha total yang dilakukan pada benda tersebut adalah...',
      options: ['16 J', '100 J', '36 J', '84 J'],
      answer: 'D',
      hint: 'Gunakan teorema usaha-energi $W_{\\text{total}} = \\tfrac{1}{2}m(v_2^2 - v_1^2)$.',
      solution: '$W_{\\text{total}} = \\tfrac{1}{2} \\times 2 \\times (10^2 - 4^2) = 1 \\times (100 - 16) = 84\\text{ J}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah bola bermassa $0{,}5\\text{ kg}$ dilempar vertikal ke atas dari tanah dengan kelajuan awal $20\\text{ m/s}$ ($g = 10\\text{ m/s}^2$, gesekan udara diabaikan). Energi kinetik bola saat berada pada ketinggian $15\\text{ m}$ adalah...',
      options: ['75 J', '25 J', '100 J', '50 J'],
      answer: 'B',
      hint: 'Terapkan hukum kekekalan energi mekanik: $E_{k1} + 0 = E_{p2} + E_{k2}$.',
      solution: 'Energi mekanik awal $= \\tfrac{1}{2}(0{,}5)(20)^2 = 100\\text{ J}$.\nPada ketinggian $15\\text{ m}$, $E_{p2} = 0{,}5 \\times 10 \\times 15 = 75\\text{ J}$.\nMaka $E_{k2} = 100 - 75 = 25\\text{ J}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah panel surya memiliki luas penampang $2\\text{ m}^2$ dan menerima intensitas cahaya matahari sebesar $800\\text{ W/m}^2$. Jika efisiensi panel surya tersebut $20\\%$, daya listrik yang dihasilkannya adalah...',
      options: ['1.600 W', '160 W', '320 W', '640 W'],
      answer: 'C',
      hint: 'Hitung daya masukan $P_{\\text{in}} = I \\times A$, lalu kalikan dengan efisiensi $\\eta$.',
      solution: '$P_{\\text{in}} = 800\\text{ W/m}^2 \\times 2\\text{ m}^2 = 1.600\\text{ W}$.\n$P_{\\text{out}} = 20\\% \\times 1.600\\text{ W} = 320\\text{ W}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah mesin derek mengangkat beban bermassa $400\\text{ kg}$ secara vertikal setinggi $15\\text{ m}$ dalam waktu $20\\text{ s}$ ($g = 10\\text{ m/s}^2$). Daya keluaran rata-rata mesin derek tersebut adalah...',
      options: ['3.000 W', '60.000 W', '300 W', '1.200 W'],
      answer: 'A',
      hint: 'Hitung usaha mengangkat beban $W = m g h$, lalu bagi dengan selang waktu $t$.',
      solution: '$W = 400 \\times 10 \\times 15 = 60.000\\text{ J}$.\n$P = \\dfrac{W}{t} = \\dfrac{60.000}{20} = 3.000\\text{ W}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah balok bermassa $2\\text{ kg}$ dilepas dari keadaan diam sehingga meluncur menuruni bidang miring licin bersudut kemiringan $30^\\circ$ seperti pada gambar ($g = 10\\text{ m/s}^2$). Setelah balok menempuh jarak $10\\text{ m}$ sepanjang bidang miring, energi kinetik balok adalah...',
      options: ['200 J', '$100\\sqrt{3}\\text{ J}$', '50 J', '100 J'],
      answer: 'D',
      hint: 'Cari penurunan ketinggian vertikal $h = s\\sin 30^\\circ$, lalu gunakan kekekalan energi mekanik $E_k = m g h$.',
      solution: 'Penurunan ketinggian vertikal $h = 10\\sin 30^\\circ = 10 \\times 0{,}5 = 5\\text{ m}$.\nKarena bidang licin dan benda dilepas dari diam, $E_k = m g h = 2 \\times 10 \\times 5 = 100\\text{ J}$. Jawaban: **D**.',
      visual: {
        type: 'inclined-plane',
        props: {
          title: 'Bidang Miring Licin',
          angleLabel: '30°',
          massLabel: '2 kg'
        }
      }
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah benda bermassa $3\\text{ kg}$ meluncur dari puncak lintasan lengkung kasar setinggi $10\\text{ m}$ dari keadaan diam ($g = 10\\text{ m/s}^2$). Jika kelajuan benda saat tiba di dasar lintasan adalah $12\\text{ m/s}$, energi mekanik yang berubah menjadi kalor akibat gaya gesek adalah...',
      options: ['216 J', '84 J', '300 J', '156 J'],
      answer: 'B',
      hint: 'Hitung selisih antara energi mekanik awal di puncak dan energi mekanik akhir di dasar lintasan.',
      solution: 'Di puncak: $E_{m1} = m g h = 3 \\times 10 \\times 10 = 300\\text{ J}$.\nDi dasar: $E_{m2} = \\tfrac{1}{2}m v^2 = \\tfrac{1}{2}(3)(12^2) = 216\\text{ J}$.\nEnergi yang berubah menjadi kalor $= 300 - 216 = 84\\text{ J}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah balok bermassa $1\\text{ kg}$ meluncur di atas lantai datar licin dengan kelajuan $6\\text{ m/s}$ lalu menumbuk ujung bebas sebuah pegas mendatar berkonstanta $k = 400\\text{ N/m}$ hingga berhenti sesaat. Pemampatan maksimum pegas tersebut adalah...',
      options: ['0,03 m', '0,09 m', '0,30 m', '0,60 m'],
      answer: 'C',
      hint: 'Seluruh energi kinetik balok diubah menjadi energi potensial pegas: $\\tfrac{1}{2}m v^2 = \\tfrac{1}{2}k(\\Delta x)^2$.',
      solution: '$\\tfrac{1}{2}m v^2 = \\tfrac{1}{2}k(\\Delta x)^2 \\Rightarrow 1 \\times 6^2 = 400(\\Delta x)^2 \\Rightarrow (\\Delta x)^2 = \\dfrac{36}{400} = 0{,}09 \\Rightarrow \\Delta x = 0{,}30\\text{ m}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah PLTA memanfaatkan air terjun setinggi $40\\text{ m}$ dengan debit aliran air $5\\text{ m}^3/\\text{s}$ ($\\rho_{\\text{air}} = 1.000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$). Jika efisiensi sistem turbin dan generator mencapai $75\\%$, daya listrik yang dihasilkan PLTA tersebut adalah...',
      options: ['1,5 MW', '2,0 MW', '150 kW', '2,67 MW'],
      answer: 'A',
      hint: 'Hitung daya potensial air masukan $P_{\\text{in}} = \\rho Q g h$, lalu kalikan dengan efisiensi $75\\%$.',
      solution: '$P_{\\text{in}} = \\rho Q g h = 1.000 \\times 5 \\times 10 \\times 40 = 2.000.000\\text{ W} = 2{,}0\\text{ MW}$.\n$P_{\\text{out}} = 0{,}75 \\times 2{,}0\\text{ MW} = 1{,}5\\text{ MW}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah rumah membutuhkan energi listrik rata-rata $6\\text{ kWh}$ per hari. Rumah tersebut memasang sistem PLTS atap berkapasitas $2\\text{ kW}_\\text{p}$ dengan penyinaran matahari efektif rata-rata $4\\text{ jam}$ per hari serta efisiensi keseluruhan inverter dan baterai sebesar $90\\%$. Evaluasi yang paling tepat mengenai kecukupan energi harian sistem tersebut adalah...',
      options: [
        'tidak mencukupi karena energi yang dihasilkan hanya $5{,}4\\text{ kWh/hari}$',
        'mencukupi secara pas dengan keluaran bersih tepat $6{,}0\\text{ kWh/hari}$',
        'hanya dapat memenuhi kebutuhan listrik pada siang hari karena energi surya tidak bisa disimpan',
        'mencukupi kebutuhan harian dengan keluaran bersih $7{,}2\\text{ kWh/hari}$ dan menyisakan cadangan $1{,}2\\text{ kWh/hari}$'
      ],
      answer: 'D',
      hint: 'Kalikan kapasitas panel dengan jam penyinaran efektif lalu kalikan efisiensi sistem $90\\%$, kemudian bandingkan dengan kebutuhan $6\\text{ kWh/hari}$.',
      solution: 'Energi bruto harian $= 2\\text{ kW} \\times 4\\text{ jam} = 8\\text{ kWh}$.\nEnergi bersih setelah efisiensi $90\\%$ adalah $0{,}90 \\times 8 = 7{,}2\\text{ kWh/hari}$.\nNilai ini melebihi kebutuhan $6\\text{ kWh/hari}$ dengan sisa cadangan $7{,}2 - 6 = 1{,}2\\text{ kWh/hari}$ yang dapat disimpan di baterai untuk malam hari. Jawaban: **D**.'
    })
  ]
});
