import { bab, soal } from '../author.js';

export default bab({
  grade: 11,
  number: 1,
  slug: 'dinamika-gerak-dan-hukum-newton',
  title: 'Dinamika Partikel dan Hukum Newton',
  element: 'Pemahaman Fisika: mekanika, hubungan gerak dan gaya (dinamika partikel)',
  summary: {
    overview: 'Mengapa mobil bisa tergelincir saat menikung terlalu cepat di jalan basah, dan bagaimana sistem katrol atau bidang miring mengatur percepatan beban? Bab ini mengulas penerapan tiga Hukum Newton melalui diagram benda bebas, analisis gaya normal, tegangan tali, gaya gesek statis dan kinetis, sistem banyak benda pada bidang datar maupun miring, hingga gaya sentripetal pada tikungan dan lintasan melingkar vertikal.',
    coreConcepts: [
      'Hukum Newton dan Diagram Benda Bebas: Diagram benda bebas (free-body diagram) menggambarkan seluruh gaya yang bekerja pada satu benda terisolasi beserta arahnya. Pada sumbu yang mengalami percepatan berlaku Hukum II Newton $\\Sigma \\vec{F} = m\\vec{a}$, sedangkan pada sumbu tegak lurus arah gerak yang tidak dipercepat berlaku $\\Sigma F = 0$.',
      'Gaya Normal dan Gaya Tegangan Tali: Gaya normal ($N$) selalu tegak lurus bidang sentuh; besarnya tidak selalu sama dengan berat $mg$, misalnya pada bidang miring ($N = mg\\cos\\theta$) atau lift yang dipercepat ($N = m(g \\pm a)$). Gaya tegangan tali ($T$) bekerja menarik benda sepanjang tali yang tegang; pada tali ringan dan katrol licin tak bermassa, besar $T$ sama di sepanjang tali.',
      'Gaya Gesek Statis dan Kinetis: Gaya gesek selalu melawan kecenderungan arah gerak relatif antardua permukaan. Saat benda diam, gaya gesek statis menyesuaikan gaya pendorong ($0 \\le f_s \\le f_{s,\\text{maks}}$) dengan batas maksimum $f_{s,\\text{maks}} = \\mu_s N$. Saat benda sudah bergerak, berlaku gaya gesek kinetis konstan $f_k = \\mu_k N$, dengan $\\mu_k < \\mu_s$.',
      'Dinamika pada Bidang Datar dan Bidang Miring: Pada bidang datar dengan gaya tarik bersudut $\\theta$, komponen vertikal gaya mengubah gaya normal ($N = mg \\mp F\\sin\\theta$). Pada bidang miring bersudut $\\theta$, berat $mg$ diurai menjadi komponen sejajar bidang $mg\\sin\\theta$ dan komponen tegak lurus bidang $mg\\cos\\theta$ sehingga $N = mg\\cos\\theta$.',
      'Sistem Katrol Dua Benda: Untuk dua benda yang terhubung tali melalui katrol licin, kedua benda memiliki besar percepatan sama ($a$). Metode sistem menyeluruh menghitung $a = \\dfrac{\\Sigma F_{\\text{penggerak}} - \\Sigma F_{\\text{penghambat}}}{m_1 + m_2}$, lalu meninjau salah satu benda pada diagram benda bebasnya untuk menentukan tegangan tali $T$.',
      'Dinamika Gerak Melingkar dan Gaya Sentripetal: Benda yang bergerak melingkar mengalami percepatan sentripetal ke arah pusat lintasan sebesar $a_s = \\dfrac{v^2}{R}$, sehingga resultan gaya radialnya memenuhi $\\Sigma F_s = m\\dfrac{v^2}{R}$. Pada tikungan datar, gaya sentripetal disediakan gesekan statis ($v_{\\text{maks}} = \\sqrt{\\mu_s g R}$); pada tikungan miring licin berlaku $v = \\sqrt{gR\\tan\\theta}$; pada lingkaran vertikal di titik terendah $T - mg = m\\dfrac{v^2}{R}$ dan di titik tertinggi $T + mg = m\\dfrac{v^2}{R}$.'
    ],
    keyFormulas: [
      { label: 'Hukum II Newton', formula: '\\Sigma \\vec{F} = m\\vec{a}' },
      { label: 'Gaya gesek statis maks & kinetis', formula: 'f_{s,\\text{maks}} = \\mu_s N \\qquad f_k = \\mu_k N' },
      { label: 'Bidang miring kasar', formula: 'N = mg\\cos\\theta \\qquad a = g(\\sin\\theta - \\mu_k\\cos\\theta)' },
      { label: 'Sistem katrol Atwood', formula: 'a = \\dfrac{(m_2 - m_1)g}{m_1 + m_2} \\qquad T = \\dfrac{2 m_1 m_2 g}{m_1 + m_2}' },
      { label: 'Gaya sentripetal & tikungan', formula: '\\Sigma F_s = m\\dfrac{v^2}{R} \\qquad v_{\\text{maks, datar}} = \\sqrt{\\mu_s g R} \\qquad v_{\\text{miring}} = \\sqrt{gR\\tan\\theta}' }
    ],
    workedExamples: [
      {
        title: 'Gaya tarik bersudut pada bidang datar kasar',
        problem: 'Sebuah balok bermassa $5\\text{ kg}$ ditarik di atas lantai datar kasar ($\\mu_k = 0{,}2$, $g = 10\\text{ m/s}^2$) dengan gaya $F = 50\\text{ N}$ membentuk sudut $37^\\circ$ ke atas terhadap horizontal ($\\sin 37^\\circ = 0{,}6$, $\\cos 37^\\circ = 0{,}8$). Tentukan gaya normal, gaya gesek kinetis, dan percepatan balok.',
        solution: 'Uraikan gaya tarik: $F_x = 50\\cos 37^\\circ = 40\\text{ N}$ dan $F_y = 50\\sin 37^\\circ = 30\\text{ N}$.\nKarena setimbang vertikal: $N + F_y = mg \\Rightarrow N = 50 - 30 = 20\\text{ N}$.\nGaya gesek kinetis: $f_k = \\mu_k N = 0{,}2 \\times 20 = 4\\text{ N}$.\nPercepatan horizontal: $a = \\dfrac{F_x - f_k}{m} = \\dfrac{40 - 4}{5} = 7{,}2\\text{ m/s}^2$.'
      },
      {
        title: 'Sistem katrol pada meja datar kasar',
        problem: 'Balok A ($m_A = 4\\text{ kg}$) terletak di meja datar kasar ($\\mu_k = 0{,}25$) dan terhubung tali melalui katrol licin ke beban B ($m_B = 6\\text{ kg}$) yang tergantung bebas ($g = 10\\text{ m/s}^2$). Hitung percepatan sistem dan tegangan talinya.',
        solution: 'Gaya berat B menggerakkan sistem: $w_B = 6 \\times 10 = 60\\text{ N}$.\nGaya gesek pada A menghambat gerak: $f_k = \\mu_k m_A g = 0{,}25 \\times 40 = 10\\text{ N}$.\nPercepatan sistem: $a = \\dfrac{60 - 10}{4 + 6} = 5\\text{ m/s}^2$.\nTinjau benda B: $w_B - T = m_B a \\Rightarrow T = 60 - 6(5) = 30\\text{ N}$.'
      },
      {
        title: 'Kelajuan aman di tikungan datar',
        problem: 'Sebuah mobil melewati tikungan jalan datar berjari-jari $R = 45\\text{ m}$ dengan koefisien gesek statis ban $\\mu_s = 0{,}5$ ($g = 10\\text{ m/s}^2$). Berapa kelajuan maksimum agar mobil tidak tergelincir?',
        solution: 'Gaya gesek statis maksimum bertindak sebagai gaya sentripetal: $\\mu_s mg = m\\dfrac{v_{\\text{maks}}^2}{R}$.\n$v_{\\text{maks}} = \\sqrt{\\mu_s g R} = \\sqrt{0{,}5 \\times 10 \\times 45} = \\sqrt{225} = 15\\text{ m/s}$.'
      }
    ],
    misconceptions: [
      'Menganggap gaya normal selalu sama dengan $mg$. Padahal gaya normal bergantung pada gaya vertikal lain dan kemiringan bidang, misalnya $N = mg\\cos\\theta$ pada bidang miring.',
      'Menganggap gaya gesek statis selalu bernilai $\\mu_s N$. Selama benda belum bergerak dan gaya dorong lebih kecil daripada $f_{s,\\text{maks}}$, besar gaya gesek statis tepat sama dengan gaya dorong tersebut.',
      'Mengira gaya sentripetal adalah gaya tambahan baru pada diagram benda bebas. Gaya sentripetal adalah resultan dari gaya-gaya nyata (gesekan, normal, gravitasi, atau tegangan tali) yang arahnya menuju pusat lintasan.'
    ],
    tutorTip: 'Selalu mulai dengan menggambar diagram benda bebas: proyeksikan gaya ke sumbu sejajar gerak dan sumbu tegak lurus gerak. Cari gaya normal dari sumbu tegak lurus terlebih dahulu sebelum menghitung gaya gesek!'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Sebuah balok bermassa $4\\text{ kg}$ diam di atas meja datar ($g = 10\\text{ m/s}^2$). Seseorang menekan bagian atas balok secara vertikal ke bawah dengan gaya $15\\text{ N}$. Besar gaya normal meja terhadap balok adalah...',
      options: ['25 N', '55 N', '40 N', '15 N'],
      answer: 'B',
      hint: 'Karena balok diam vertikal, gaya ke atas ($N$) mengimbangi berat balok ditambah gaya tekan ke bawah.',
      solution: 'Berat balok $w = mg = 4 \\times 10 = 40\\text{ N}$.\nKesetimbangan vertikal: $N - w - F_{\\text{tekan}} = 0 \\Rightarrow N = 40 + 15 = 55\\text{ N}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah peti bermassa $10\\text{ kg}$ berada di lantai datar dengan koefisien gesek statis $\\mu_s = 0{,}4$ dan kinetis $\\mu_k = 0{,}3$ ($g = 10\\text{ m/s}^2$). Peti didorong mendatar dengan gaya $25\\text{ N}$. Besar gaya gesek yang bekerja pada peti adalah...',
      options: ['40 N', '30 N', '15 N', '25 N'],
      answer: 'D',
      hint: 'Bandingkan gaya dorong dengan gaya gesek statis maksimum $f_{s,\\text{maks}} = \\mu_s N$ untuk mengecek apakah peti bergerak.',
      solution: '$N = mg = 100\\text{ N}$, sehingga $f_{s,\\text{maks}} = 0{,}4 \\times 100 = 40\\text{ N}$.\nKarena gaya dorong $25\\text{ N} < 40\\text{ N}$, peti tetap diam dan gaya gesek statis mengimbangi gaya dorong: $f_s = 25\\text{ N}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Seseorang bermassa $60\\text{ kg}$ berdiri di atas timbangan di dalam lift yang bergerak ke atas dengan percepatan $2\\text{ m/s}^2$ ($g = 10\\text{ m/s}^2$). Gaya normal yang terbaca pada timbangan adalah...',
      options: ['720 N', '480 N', '600 N', '120 N'],
      answer: 'A',
      hint: 'Terapkan $\\Sigma F_y = m a$ dengan gaya normal $N$ ke atas dan berat $mg$ ke bawah.',
      solution: '$N - mg = ma \\Rightarrow N = m(g + a) = 60(10 + 2) = 720\\text{ N}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sebuah mobil melaju dengan kelajuan tetap pada tikungan jalan mendatar berbentuk busur lingkaran. Pernyataan yang tepat mengenai gaya sentripetal pada mobil tersebut adalah...',
      options: [
        'bekerja menjauhi pusat kelengkungan tikungan agar mobil tidak tergelincir ke dalam',
        'merupakan gaya baru yang muncul terpisah dari gaya gesek antara ban dan aspal',
        'disediakan oleh gaya gesek statis ban yang mengarah ke pusat kelengkungan tikungan',
        'bernilai nol karena kelajuan mobil konstan'
      ],
      answer: 'C',
      hint: 'Meskipun kelajuannya tetap, arah kecepatan selalu berubah sehingga ada percepatan menuju pusat lingkaran.',
      solution: 'Pada tikungan mendatar, perubahan arah gerak mobil memerlukan percepatan sentripetal menuju pusat lintasan, dan gaya yang menyediakannya adalah **gaya gesek statis antara ban dan aspal yang mengarah ke pusat kelengkungan**. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Perhatikan diagram benda bebas sebuah balok bermassa $5\\text{ kg}$ yang ditarik mendatar ke kanan dengan gaya $F = 25\\text{ N}$ di atas lantai datar kasar ($\\mu_k = 0{,}2$, $g = 10\\text{ m/s}^2$). Jika $N$ gaya normal, $w$ gaya berat, dan $f_k$ gaya gesek kinetis, besar percepatan balok adalah...',
      options: ['5 m/s²', '3 m/s²', '2 m/s²', '7 m/s²'],
      answer: 'B',
      hint: 'Hitung gaya normal $N = mg$, lalu hitung $f_k = \\mu_k N$, dan terapkan $a = (F - f_k) / m$.',
      solution: '$N = mg = 5 \\times 10 = 50\\text{ N}$, sehingga $f_k = 0{,}2 \\times 50 = 10\\text{ N}$.\nPercepatan balok $a = \\dfrac{25 - 10}{5} = \\dfrac{15}{5} = 3\\text{ m/s}^2$. Jawaban: **B**.',
      visual: {
        type: 'force',
        props: {
          title: 'Diagram Benda Bebas Balok',
          bodyLabel: '5 kg',
          forces: [
            { dir: 'right', label: 'F = 25 N' },
            { dir: 'left', label: 'fₖ' },
            { dir: 'up', label: 'N' },
            { dir: 'down', label: 'w' }
          ]
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah koper bermassa $8\\text{ kg}$ ditarik di lantai datar kasar ($\\mu_k = 0{,}4$, $g = 10\\text{ m/s}^2$) dengan gaya $F = 50\\text{ N}$ membentuk sudut $37^\\circ$ ke atas terhadap arah mendatar ($\\sin 37^\\circ = 0{,}6$, $\\cos 37^\\circ = 0{,}8$). Percepatan koper adalah...',
      options: ['5 m/s²', '4 m/s²', '1 m/s²', '2,5 m/s²'],
      answer: 'D',
      hint: 'Gaya normal berkurang oleh komponen vertikal gaya tarik: $N = mg - F\\sin 37^\\circ$.',
      solution: '$F_x = 50 \\times 0{,}8 = 40\\text{ N}$ dan $F_y = 50 \\times 0{,}6 = 30\\text{ N}$.\n$N = 8(10) - 30 = 50\\text{ N}$, sehingga $f_k = 0{,}4 \\times 50 = 20\\text{ N}$.\n$a = \\dfrac{40 - 20}{8} = 2{,}5\\text{ m/s}^2$. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dua balok bermassa $m_1 = 2\\text{ kg}$ dan $m_2 = 3\\text{ kg}$ dihubungkan tali ringan pada lantai datar kasar dengan koefisien gesek kinetis $\\mu_k = 0{,}2$ ($g = 10\\text{ m/s}^2$). Balok $m_2$ ditarik mendatar ke kanan dengan gaya $F = 30\\text{ N}$. Besar tegangan tali penghubung kedua balok adalah...',
      options: ['12 N', '18 N', '8 N', '20 N'],
      answer: 'A',
      hint: 'Cari percepatan sistem terlebih dahulu, lalu tinjau diagram benda bebas balok $m_1$.',
      solution: 'Gesekan total $f_{\\text{tot}} = 0{,}2(2 + 3)(10) = 10\\text{ N}$.\n$a = \\dfrac{30 - 10}{2 + 3} = 4\\text{ m/s}^2$.\nPada balok $m_1$: $T - \\mu_k m_1 g = m_1 a \\Rightarrow T = 0{,}2(20) + 2(4) = 4 + 8 = 12\\text{ N}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah balok bermassa $5\\text{ kg}$ ditarik ke atas sepanjang bidang miring kasar ($\\mu_k = 0{,}25$) dengan gaya sejajar bidang $F = 60\\text{ N}$ seperti pada gambar. Jika sudut kemiringan bidang $37^\\circ$ ($\\sin 37^\\circ = 0{,}6$, $\\cos 37^\\circ = 0{,}8$, $g = 10\\text{ m/s}^2$), percepatan balok ke atas bidang miring adalah...',
      options: ['6 m/s²', '2 m/s²', '4 m/s²', '8 m/s²'],
      answer: 'C',
      hint: 'Kedua gaya penghambat menuju ke bawah bidang: komponen berat $mg\\sin 37^\\circ$ dan gaya gesek $f_k = \\mu_k mg\\cos 37^\\circ$.',
      solution: '$N = mg\\cos 37^\\circ = 5(10)(0{,}8) = 40\\text{ N}$, sehingga $f_k = 0{,}25 \\times 40 = 10\\text{ N}$.\nKomponen berat sejajar bidang $w_x = 5(10)(0{,}6) = 30\\text{ N}$.\n$a = \\dfrac{60 - 30 - 10}{5} = \\dfrac{20}{5} = 4\\text{ m/s}^2$. Jawaban: **C**.',
      visual: {
        type: 'inclined-plane',
        props: {
          title: 'Balok pada Bidang Miring',
          angleLabel: '37°',
          massLabel: '5 kg',
          forceLabel: 'F = 60 N',
          frictionLabel: 'fₖ'
        }
      }
    }),
    soal({
      level: 'Sedang',
      q: 'Dua beban bermassa $m_1 = 4\\text{ kg}$ dan $m_2 = 6\\text{ kg}$ digantung pada ujung-ujung tali yang melewati katrol tetap licin tak bermassa ($g = 10\\text{ m/s}^2$). Saat sistem dilepaskan, besar tegangan tali adalah...',
      options: ['40 N', '48 N', '60 N', '50 N'],
      answer: 'B',
      hint: 'Hitung percepatan sistem Atwood $a = \\dfrac{(m_2 - m_1)g}{m_1 + m_2}$, lalu substitusi ke salah satu benda.',
      solution: '$a = \\dfrac{(6 - 4)(10)}{4 + 6} = \\dfrac{20}{10} = 2\\text{ m/s}^2$.\nTinjau $m_1$ yang bergerak ke atas: $T - m_1 g = m_1 a \\Rightarrow T = 4(10 + 2) = 48\\text{ N}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah mobil melaju pada tikungan datar berbentuk busur lingkaran berjari-jari $R = 80\\text{ m}$. Jika koefisien gesek statis antara ban dan jalan aspal $\\mu_s = 0{,}5$ dan $g = 10\\text{ m/s}^2$, kelajuan maksimum mobil agar tidak tergelincir keluar tikungan adalah...',
      options: ['10 m/s', '25 m/s', '40 m/s', '20 m/s'],
      answer: 'D',
      hint: 'Samakan gaya gesek statis maksimum dengan gaya sentripetal: $\\mu_s mg = m v^2 / R$.',
      solution: '$v_{\\text{maks}} = \\sqrt{\\mu_s g R} = \\sqrt{0{,}5 \\times 10 \\times 80} = \\sqrt{400} = 20\\text{ m/s}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah kotak bermassa $10\\text{ kg}$ diletakkan di atas bidang miring kasar dengan sudut kemiringan $37^\\circ$ ($\\sin 37^\\circ = 0{,}6$, $\\cos 37^\\circ = 0{,}8$, $g = 10\\text{ m/s}^2$). Koefisien gesek statis dan kinetis antara kotak dan bidang berturut-turut $\\mu_s = 0{,}8$ dan $\\mu_k = 0{,}5$. Besar gaya gesek yang bekerja pada kotak adalah...',
      options: ['60 N', '64 N', '40 N', '80 N'],
      answer: 'A',
      hint: 'Periksa terlebih dahulu apakah komponen berat sejajar bidang ($mg\\sin\\theta$) mampu melampaui $f_{s,\\text{maks}} = \\mu_s mg\\cos\\theta$.',
      solution: '$w_x = 10(10)(0{,}6) = 60\\text{ N}$ dan $N = 10(10)(0{,}8) = 80\\text{ N}$.\n$f_{s,\\text{maks}} = 0{,}8 \\times 80 = 64\\text{ N}$.\nKarena $w_x = 60\\text{ N} < 64\\text{ N}$, kotak tetap diam sehingga gaya gesek statis yang bekerja tepat mengimbangi $w_x$, yaitu $60\\text{ N}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Balok A bermassa $4\\text{ kg}$ berada pada bidang miring licin bersudut $30^\\circ$ dan dihubungkan dengan tali melalui katrol licin tak bermassa ke balok B bermassa $6\\text{ kg}$ yang tergantung vertikal ($g = 10\\text{ m/s}^2$). Besar tegangan tali penghubung kedua balok saat sistem bergerak adalah...',
      options: ['20 N', '40 N', '36 N', '24 N'],
      answer: 'C',
      hint: 'Bandingkan berat balok B ($m_B g$) dengan komponen berat balok A sepanjang bidang ($m_A g\\sin 30^\\circ$) untuk menentukan arah gerak.',
      solution: '$w_B = 60\\text{ N}$ dan $w_A\\sin 30^\\circ = 40 \\times 0{,}5 = 20\\text{ N}$, sehingga B turun dan A naik.\n$a = \\dfrac{60 - 20}{4 + 6} = 4\\text{ m/s}^2$.\nTinjau balok B: $60 - T = 6(4) \\Rightarrow T = 36\\text{ N}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah balok A bermassa $6\\text{ kg}$ berada di atas meja datar kasar ($\\mu_k = 0{,}25$) dan dihubungkan seutas tali melalui katrol licin di tepi meja ke beban B bermassa $4\\text{ kg}$ yang tergantung bebas ($g = 10\\text{ m/s}^2$). Percepatan sistem dan besar tegangan tali berturut-turut adalah...',
      options: [
        '2,5 m/s² dan 15 N',
        '2,5 m/s² dan 30 N',
        '4,0 m/s² dan 24 N',
        '1,5 m/s² dan 34 N'
      ],
      answer: 'B',
      hint: 'Gaya penggerak sistem adalah $w_B$, sedangkan gaya penghambatnya hanya gaya gesek pada balok A.',
      solution: '$w_B = 40\\text{ N}$ dan $f_k = 0{,}25(60) = 15\\text{ N}$.\n$a = \\dfrac{40 - 15}{6 + 4} = 2{,}5\\text{ m/s}^2$.\nDari beban B: $T = 40 - 4(2{,}5) = 30\\text{ N}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah bola bermassa $0{,}5\\text{ kg}$ diikat pada ujung tali sepanjang $1\\text{ m}$ dan diputar dalam lintasan lingkaran vertikal ($g = 10\\text{ m/s}^2$). Saat melewati titik terendah, kelajuan bola adalah $6\\text{ m/s}$. Besar gaya tegangan tali pada saat itu adalah...',
      options: ['13 N', '18 N', '15 N', '23 N'],
      answer: 'D',
      hint: 'Di titik terendah, tegangan tali mengarah ke pusat (atas) dan berat ke bawah, sehingga $T - mg = mv^2/R$.',
      solution: '$T - mg = \\dfrac{mv^2}{R} \\Rightarrow T = 0{,}5(10) + \\dfrac{0{,}5 \\times 6^2}{1} = 5 + 18 = 23\\text{ N}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebuah tikungan jalan tol dirancang miring dengan sudut kemiringan $37^\\circ$ ($\\tan 37^\\circ = 0{,}75$) dan jari-jari kelengkungan $R = 120\\text{ m}$ ($g = 10\\text{ m/s}^2$). Kelajuan aman kendaraan agar dapat berbelok lancar meskipun jalan sangat licin (tanpa mengandalkan gesekan) adalah...',
      options: ['30 m/s', '20 m/s', '25 m/s', '40 m/s'],
      answer: 'A',
      hint: 'Pada tikungan miring licin, komponen gaya normal $N\\sin\\theta$ menjadi gaya sentripetal dan $N\\cos\\theta = mg$.',
      solution: 'Dari $\\dfrac{N\\sin\\theta}{N\\cos\\theta} = \\dfrac{mv^2/R}{mg}$, diperoleh $v = \\sqrt{gR\\tan\\theta} = \\sqrt{10 \\times 120 \\times 0{,}75} = \\sqrt{900} = 30\\text{ m/s}$. Jawaban: **A**.'
    })
  ]
});
