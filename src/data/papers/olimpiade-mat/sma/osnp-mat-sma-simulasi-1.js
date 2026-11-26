/**
 * Paket Soal Terstruktur: Simulasi OSN-P Matematika SMA — Paket 1
 * 12 soal (Bagian A: 8 Isian Singkat @ 2 poin, Bagian B: 4 Uraian Pembuktian @ 7 poin; total 44 poin).
 * Materi kurasi asli Tim Akademik Duta e-dukasi.
 */
const OK2 = [
  { code: 'M1', text: 'Strategi aljabar, teori bilangan, kombinatorika, atau geometri tepat.' },
  { code: 'A1', text: 'Hasil akhir numerik tepat sesuai pembahasan.' }
];

export default {
  id: 'osnp-mat-sma-simulasi-1',
  slug: 'osnp-mat-sma-simulasi-1',
  subject: 'olimpiade-mat',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'Simulasi OSN-P Matematika SMA: aljabar, teori bilangan, geometri datar, dan kombinatorika tingkat provinsi',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab2-barisan-deret',
    'sma11-bab2-lingkaran',
    'sma12-bab3-kaidah-pencacahan'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-P',
  title: 'Simulasi OSN-P Matematika SMA — Paket 1',
  totalMarks: 44,
  instructions:
    'Paket simulasi ini mengikuti struktur resmi OSN-P Matematika SMA yang terdiri atas Bagian A (8 soal isian singkat bernilai 2 poin per soal) dan Bagian B (4 soal uraian dan pembuktian bernilai 7 poin per soal; total 44 poin). Kerjakan tanpa kalkulator dan tuliskan alasan matematis lengkap pada Bagian B.',
  source: {
    org: 'Tim Akademik Duta e-dukasi',
    file: 'original-curated-batch-9',
    license: 'Hak cipta materi kurasi asli Duta e-dukasi'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Isian Singkat (Aljabar, Teori Bilangan, Kombinatorika, Geometri)',
      marks: 16,
      stem: 'Tentukan nilai numerik eksak untuk setiap soal berikut (8 soal, masing-masing bernilai 2 poin).',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt: 'Bilangan real tak nol $x$ memenuhi $x + \\frac{1}{x} = 3$. Tentukan nilai dari $x^4 + \\frac{1}{x^4}$.',
          answer: '$47$',
          principle: 'Identitas kuadrat berulang $\\left(u + \\frac{1}{u}\\right)^2 = u^2 + \\frac{1}{u^2} + 2$ menghindari pencarian akar irasional.',
          solution:
            'Kuadratkan kedua ruas persamaan awal:\n$$x^2 + \\frac{1}{x^2} = \\left(x + \\frac{1}{x}\\right)^2 - 2 = 3^2 - 2 = 7.$$\n\nKuadratkan sekali lagi:\n$$x^4 + \\frac{1}{x^4} = \\left(x^2 + \\frac{1}{x^2}\\right)^2 - 2 = 7^2 - 2 = 49 - 2 = 47.$$',
          rubric: OK2
        },
        {
          label: '2',
          marks: 2,
          prompt: 'Tentukan banyak pasangan terurut bilangan bulat positif $(a, b)$ yang memenuhi $\\frac{1}{a} + \\frac{1}{b} = \\frac{1}{12}$.',
          answer: '$15$',
          principle: 'Faktorisasi Simon: ubah persamaan pecahan menjadi perkalian $(a - 12)(b - 12) = 144$ lalu hitung banyak pembagi positifnya.',
          solution:
            'Kalikan kedua ruas dengan $12ab$:\n$$12(a + b) = ab \\iff ab - 12a - 12b + 144 = 144 \\iff (a - 12)(b - 12) = 144.$$\n\nKarena $a, b > 0$ dan $\\frac{1}{a} < \\frac{1}{12}$, maka $a - 12 > 0$ dan $b - 12 > 0$. Setiap pembagi positif $d$ dari $144$ menghasilkan tepat satu pasangan $(a, b) = (12 + d, 12 + \\frac{144}{d})$.\n\nFaktorisasi prima $144 = 2^4 \\times 3^2$, sehingga banyak pembagi positifnya adalah:\n$$(4 + 1)(2 + 1) = 5 \\times 3 = 15.$$',
          rubric: OK2
        },
        {
          label: '3',
          marks: 2,
          prompt: 'Tentukan banyak bilangan $4$ angka berbeda yang dapat dibentuk dari angka-angka $\\{1, 2, 3, 4, 5, 6\\}$ sehingga bilangan tersebut habis dibagi $4$.',
          answer: '$96$',
          principle: 'Keterbagian $4$ ditentukan oleh dua angka terakhir; setelah memilih dua angka terakhir, dua angka depan dipilih dari sisa $4$ angka.',
          solution:
            'Suatu bilangan habis dibagi $4$ jika dan hanya jika dua angka terakhirnya membentuk bilangan kelipatan $4$. Dari himpunan $\\{1, 2, 3, 4, 5, 6\\}$ tanpa pengulangan, pasangan dua angka terakhir yang mungkin adalah:\n$$12, 16, 24, 32, 36, 52, 56, 64$$\nsebanyak $8$ pasangan.\n\nUntuk setiap pasangan dua angka terakhir, tersisa $4$ angka untuk mengisi posisi ribuan dan ratusan tanpa pengulangan, yaitu $4 \\times 3 = 12$ cara.\n\nTotal bilangan yang memenuhi adalah $8 \\times 12 = 96$.',
          rubric: OK2
        },
        {
          label: '4',
          marks: 2,
          prompt: 'Segitiga $ABC$ memiliki panjang sisi $AB = 13$, $BC = 14$, dan $CA = 15$. Jika $R$ dan $r$ berturut-turut adalah jari-jari lingkaran luar dan lingkaran dalam segitiga $ABC$, tentukan nilai $8R + r$.',
          answer: '$69$',
          principle: 'Rumus Heron $L = \\sqrt{s(s-a)(s-b)(s-c)}$, jari-jari lingkaran dalam $r = \\frac{L}{s}$, dan jari-jari lingkaran luar $R = \\frac{abc}{4L}$.',
          solution:
            'Setengah keliling segitiga adalah $s = \\frac{13 + 14 + 15}{2} = 21$. Luas segitiga menurut rumus Heron:\n$$L = \\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21 \\times 8 \\times 7 \\times 6} = \\sqrt{7056} = 84.$$\n\nJari-jari lingkaran dalam:\n$$r = \\frac{L}{s} = \\frac{84}{21} = 4.$$\n\nJari-jari lingkaran luar:\n$$R = \\frac{13 \\times 14 \\times 15}{4 \\times 84} = \\frac{2730}{336} = \\frac{65}{8}.$$\n\nMaka $8R + r = 8\\left(\\frac{65}{8}\\right) + 4 = 65 + 4 = 69$.',
          rubric: OK2
        },
        {
          label: '5',
          marks: 2,
          prompt: 'Tentukan sisa pembagian $3^{2025} + 5^{2025}$ oleh $13$.',
          answer: '$6$',
          principle: 'Aritmetika modular dan orde perkalian: cari pangkat terkecil yang kongruen dengan $1 \\pmod{13}$.',
          solution:
            'Perhatikan orde dari $3$ dan $5$ modulo $13$:\n- $3^3 = 27 \\equiv 1 \\pmod{13}$. Karena $2025 = 3 \\times 675$, diperoleh $3^{2025} = (3^3)^{675} \\equiv 1^{675} = 1 \\pmod{13}$.\n- $5^2 = 25 \\equiv -1 \\pmod{13}$, sehingga $5^4 \\equiv 1 \\pmod{13}$. Karena $2025 = 4 \\times 506 + 1$, diperoleh $5^{2025} = (5^4)^{506} \\cdot 5 \\equiv 5 \\pmod{13}$.\n\nJumlahkan keduanya:\n$$3^{2025} + 5^{2025} \\equiv 1 + 5 = 6 \\pmod{13}.$$',
          rubric: OK2
        },
        {
          label: '6',
          marks: 2,
          prompt: 'Diketahui $a, b, c$ adalah akar-akar persamaan $x^3 - 7x^2 + 14x - 5 = 0$. Tentukan nilai $a^3 + b^3 + c^3$.',
          answer: '$64$',
          principle: 'Rumus Vieta dan jumlah pangkat Newton: $p_1 = e_1$, $p_2 = e_1^2 - 2e_2$, dan $p_3 = e_1 p_2 - e_2 p_1 + 3e_3$.',
          solution:
            'Dari Teorema Vieta diperoleh $e_1 = a+b+c = 7$, $e_2 = ab+bc+ca = 14$, dan $e_3 = abc = 5$.\n\nHitung jumlah kuadrat:\n$$p_2 = a^2 + b^2 + c^2 = e_1^2 - 2e_2 = 7^2 - 2(14) = 49 - 28 = 21.$$\n\nKarena setiap akar memenuhi $x^3 = 7x^2 - 14x + 5$, jumlahkan untuk $x = a, b, c$:\n$$a^3 + b^3 + c^3 = 7(a^2+b^2+c^2) - 14(a+b+c) + 3(5) = 7(21) - 14(7) + 15 = 147 - 98 + 15 = 64.$$',
          rubric: OK2
        },
        {
          label: '7',
          marks: 2,
          prompt: 'Tentukan banyak solusi bilangan bulat tak negatif $(x_1, x_2, x_3, x_4)$ dari persamaan $x_1 + x_2 + x_3 + x_4 = 12$ yang memenuhi $x_1 \\le 4$.',
          answer: '$335$',
          principle: 'Kombinasi dengan pengulangan (stars and bars) dipadukan dengan komplemen untuk batas atas $x_1 \\le 4$.',
          solution:
            'Banyak solusi bulat tak negatif tanpa syarat batas adalah:\n$$\\binom{12 + 4 - 1}{4 - 1} = \\binom{15}{3} = \\frac{15 \\times 14 \\times 13}{6} = 455.$$\n\nBanyak solusi yang melanggar syarat ($x_1 \\ge 5$): misalkan $y_1 = x_1 - 5 \\ge 0$, sehingga $y_1 + x_2 + x_3 + x_4 = 7$. Banyaknya adalah:\n$$\\binom{7 + 4 - 1}{3} = \\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{6} = 120.$$\n\nDengan prinsip komplemen, banyak solusi yang memenuhi $x_1 \\le 4$ adalah $455 - 120 = 335$.',
          rubric: OK2
        },
        {
          label: '8',
          marks: 2,
          prompt: 'Dua tali busur sejajar $AB$ dan $CD$ terletak pada sebuah lingkaran berjari-jari $10\\ \\text{cm}$ dengan panjang $AB = 16\\ \\text{cm}$ dan $CD = 12\\ \\text{cm}$. Tentukan jarak terbesar yang mungkin antara garis $AB$ dan garis $CD$ (dalam cm).',
          answer: '$14$',
          principle: 'Garis tegak lurus dari pusat lingkaran membagi tali busur sama panjang; jarak maksimum terjadi saat kedua tali busur berada di sisi berlawanan terhadap pusat.',
          solution:
            'Misalkan $O$ pusat lingkaran, $M$ titik tengah $AB$, dan $N$ titik tengah $CD$. Maka $AM = 8\\ \\text{cm}$ dan $CN = 6\\ \\text{cm}$.\n\nDengan Teorema Pythagoras:\n$$OM = \\sqrt{10^2 - 8^2} = \\sqrt{36} = 6\\ \\text{cm}, \\qquad ON = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8\\ \\text{cm}.$$\n\nJarak terbesar tercapai apabila pusat $O$ terletak di antara kedua tali busur sejajar, yaitu:\n$$MN = OM + ON = 6 + 8 = 14\\ \\text{cm}.$$',
          rubric: OK2
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Uraian dan Pembuktian',
      marks: 28,
      stem: 'Tuliskan pembuktian dan langkah lengkap untuk ke-4 soal berikut (masing-masing bernilai 7 poin).',
      parts: [
        {
          label: 'B1',
          marks: 7,
          prompt: 'Diketahui bilangan real positif $a, b, c$ memenuhi $abc = 1$. Buktikan bahwa $(a + 1)(b + 1)(c + 1) \\ge 8$ dan tentukan kapan tanda kesamaan terjadi.',
          answer: 'Terbukti; kesamaan terjadi jika dan hanya jika $a = b = c = 1$.',
          principle: 'Ketaksamaan AM–GM untuk setiap faktor $x + 1 \\ge 2\\sqrt{x}$ lalu kalikan ketiga ketaksamaan positif.',
          solution:
            'Karena $a, b, c > 0$, menurut ketaksamaan AM–GM berlaku:\n$$a + 1 \\ge 2\\sqrt{a}, \\qquad b + 1 \\ge 2\\sqrt{b}, \\qquad c + 1 \\ge 2\\sqrt{c}.$$\n\nSemua ruas bernilai positif, sehingga hasil kali ketiga ketaksamaan tersebut mempertahankan arah tanda:\n$$(a + 1)(b + 1)(c + 1) \\ge 8\\sqrt{abc}.$$\n\nSubstitusi $abc = 1$ menghasilkan:\n$$(a + 1)(b + 1)(c + 1) \\ge 8\\sqrt{1} = 8.$$\n\nTanda kesamaan terjadi jika dan hanya jika ketiga ketaksamaan AM–GM mencapai kesamaan serentak, yaitu $a = 1$, $b = 1$, dan $c = 1$.',
          rubric: [
            { code: 'M2', text: 'Menerapkan ketaksamaan AM–GM pada masing-masing faktor $(a+1)$, $(b+1)$, dan $(c+1)$.' },
            { code: 'M3', text: 'Mengalikan ketiga ketaksamaan positif dan mensubstitusikan $abc = 1$ secara sahih.' },
            { code: 'A2', text: 'Menyimpulkan kesamaan terjadi jika dan hanya jika $a = b = c = 1$.' }
          ]
        },
        {
          label: 'B2',
          marks: 7,
          prompt: 'Tentukan semua bilangan prima $p$ sedemikian sehingga $p^2 + 2$ juga merupakan bilangan prima.',
          answer: '$p = 3$',
          principle: 'Analisis sisa pembagian modulo $3$: setiap bilangan bulat yang tidak habis dibagi $3$ memiliki kuadrat kongruen dengan $1 \\pmod{3}$.',
          solution:
            'Uji kasus menurut keterbagian $p$ oleh $3$:\n1. Jika $p = 3$, maka $p^2 + 2 = 9 + 2 = 11$, yang merupakan bilangan prima. Jadi $p = 3$ memenuhi.\n2. Jika $p \\neq 3$, karena $p$ prima maka $3 \\nmid p$, sehingga $p \\equiv 1$ atau $2 \\pmod{3}$. Dalam kedua kemungkinan tersebut berlaku $p^2 \\equiv 1 \\pmod{3}$, akibatnya:\n$$p^2 + 2 \\equiv 1 + 2 = 3 \\equiv 0 \\pmod{3}.$$\n\nKarena $p \\ge 2$, nilai $p^2 + 2 \\ge 6 > 3$ dan habis dibagi $3$, sehingga $p^2 + 2$ merupakan bilangan komposit.\n\nDengan demikian, satu-satunya bilangan prima yang memenuhi adalah $p = 3$.',
          rubric: [
            { code: 'M2', text: 'Memeriksa kasus $p = 3$ dan menunjukkan $p^2 + 2 = 11$ prima.' },
            { code: 'M3', text: 'Membuktikan $p^2 \\equiv 1 \\pmod{3}$ untuk setiap prima $p \\neq 3$ sehingga $3 \\mid (p^2 + 2)$.' },
            { code: 'A2', text: 'Menunjukkan $p^2 + 2 > 3$ sehingga komposit, lalu menyimpulkan $p = 3$ tunggal.' }
          ]
        },
        {
          label: 'B3',
          marks: 7,
          prompt: 'Setiap petak pada papan berukuran $3 \\times 7$ diwarnai merah atau biru. Buktikan bahwa pasti terdapat sebuah persegi panjang yang keempat petak sudutnya berwarna sama.',
          answer: 'Terbukti dengan Prinsip Sarang Merpati (Pigeonhole Principle).',
          principle: 'Pada setiap kolom berisi $3$ petak dengan $2$ warna, minimal $2$ petak berwarna sama; hanya ada $2 \\times \\binom{3}{2} = 6$ kemungkinan pasangan (warna, dua baris).',
          solution:
            'Tinjau masing-masing dari $7$ kolom pada papan berukuran $3 \\times 7$. Setiap kolom terdiri atas $3$ petak yang diwarnai dengan $2$ warna (merah atau biru).\n\nMenurut Prinsip Sarang Merpati, pada setiap kolom pasti terdapat minimal $2$ petak yang berwarna sama. Pilih satu pasangan baris $(r_1, r_2)$ di kolom tersebut beserta warnanya $c \\in \\{\\text{merah}, \\text{biru}\\}$ yang sama pada kedua baris itu.\n\nBanyak kemungkinan pasangan baris dari $3$ baris adalah $\\binom{3}{2} = 3$, yaitu $(1,2)$, $(1,3)$, dan $(2,3)$. Karena ada $2$ pilihan warna $c$, total kombinasi jenis $(c, r_1, r_2)$ yang mungkin hanyalah $2 \\times 3 = 6$.\n\nKarena papan memiliki $7 > 6$ kolom, menurut Prinsip Sarang Merpati pasti terdapat dua kolom berbeda $k_1$ dan $k_2$ yang memiliki kombinasi $(c, r_1, r_2)$ yang sama. Keempat petak pada perpotongan baris $r_1, r_2$ dan kolom $k_1, k_2$ membentuk persegi panjang dengan keempat sudut berwarna $c$.',
          rubric: [
            { code: 'M2', text: 'Membuktikan setiap kolom memiliki minimal $2$ petak berwarna sama.' },
            { code: 'M3', text: 'Menghitung tepat $2 \\times \\binom{3}{2} = 6$ kemungkinan kombinasi warna dan pasangan baris.' },
            { code: 'A2', text: 'Menerapkan Pigeonhole Principle pada $7 > 6$ kolom untuk mengonstruksi persegi panjang monokromatik.' }
          ]
        },
        {
          label: 'B4',
          marks: 7,
          prompt: 'Pada segitiga lancip $ABC$, garis tinggi $AD$ (dengan $D$ pada $BC$) dan $BE$ (dengan $E$ pada $CA$) berpotongan di $H$. Buktikan bahwa $CD \\cdot CB = CE \\cdot CA$ dan $\\angle CDE = \\angle CAB$.',
          answer: 'Terbukti melalui kesebangunan $\\triangle CAD \\sim \\triangle CBE$ dan segiempat siklik $ABDE$.',
          principle: 'Dua sudut siku-siku pada sisi yang sama ($\\angle ADB = \\angle AEB = 90^\\circ$) menjadikan $ABDE$ segiempat siklik sekaligus memunculkan $\\triangle CDE \\sim \\triangle CAB$.',
          solution:
            '1. **Membuktikan $CD \\cdot CB = CE \\cdot CA$:**\nPerhatikan $\\triangle CAD$ dan $\\triangle CBE$. Keduanya memiliki sudut siku-siku $\\angle CDA = \\angle CEB = 90^\\circ$ serta sudut bersama $\\angle ACD = \\angle BCE = \\angle C$.\n\nBerdasarkan kriteria sudut–sudut (AA), $\\triangle CAD \\sim \\triangle CBE$, sehingga perbandingan sisi bersesuaian memenuhi:\n$$\\frac{CD}{CE} = \\frac{CA}{CB} \\implies CD \\cdot CB = CE \\cdot CA.$$\n\n2. **Membuktikan $\\angle CDE = \\angle CAB$:**\nDari persamaan di atas diperoleh perbandingan sisi:\n$$\\frac{CD}{CA} = \\frac{CE}{CB}$$\ndengan sudut apit bersama $\\angle DCE = \\angle ACB = \\angle C$. Berdasarkan kriteria sisi–sudut–sisi (SAS), diperoleh $\\triangle CDE \\sim \\triangle CAB$.\n\nKarena kedua segitiga sebangun dengan korespondensi titik $C \\leftrightarrow C$, $D \\leftrightarrow A$, dan $E \\leftrightarrow B$, sudut yang bersesuaian sama besar:\n$$\\angle CDE = \\angle CAB.$$\n\n(Cara alternatif: karena $\\angle ADB = \\angle AEB = 90^\\circ$, keempat titik $A, B, D, E$ terletak pada lingkaran berdiameter $AB$. Pada segiempat siklik $ABDE$, sudut luar di $D$, yaitu $\\angle CDE$, sama dengan sudut dalam di hadapannya, $\\angle EAB = \\angle CAB$.)',
          rubric: [
            { code: 'M2', text: 'Membuktikan kesebangunan $\\triangle CAD \\sim \\triangle CBE$ berdasarkan kriteria AA.' },
            { code: 'M2', text: 'Menurunkan $CD \\cdot CB = CE \\cdot CA$ dari perbandingan sisi bersesuaian.' },
            { code: 'A3', text: 'Membuktikan $\\triangle CDE \\sim \\triangle CAB$ (SAS) atau segiempat siklik $ABDE$ sehingga $\\angle CDE = \\angle CAB$.' }
          ]
        }
      ]
    }
  ]
};
