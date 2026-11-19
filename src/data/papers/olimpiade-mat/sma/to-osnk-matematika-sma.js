/**
 * Paket Soal Terstruktur: Try Out OSN-K Matematika SMA (20 soal isian singkat)
 * Sumber: to_osnk_mat_sma.pdf (arsip Duta e-dukasi). Kemampuan Dasar (10 soal x 2 poin) dan Kemampuan Lanjut (10 soal x 4 poin).
 */
const R2 = [
  { code: 'M1', text: 'Penalaran dan langkah penyelesaian yang benar.' },
  { code: 'A1', text: 'Jawaban akhir benar.' }
];
const R4 = [
  { code: 'M2', text: 'Penalaran dan langkah penyelesaian yang benar.' },
  { code: 'A2', text: 'Jawaban akhir benar.' }
];

export default {
  id: 'to-osnk-mat-sma',
  slug: 'try-out-osnk-matematika-sma',
  subject: 'olimpiade-mat',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'Try Out OSN-K Matematika SMA',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab8-peluang',
    'sma12-bab3-kaidah-pencacahan',
    'sma11-bab2-lingkaran'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'Try Out OSN-K Matematika SMA',
  totalMarks: 60,
  instructions:
    'Try out ini terdiri dari 20 soal isian singkat dengan waktu pengerjaan 150 menit. Kemampuan Dasar (10 soal): jawaban benar bernilai 2 poin. Kemampuan Lanjut (10 soal): jawaban benar bernilai 4 poin. Pada naskah asli, jawaban kosong bernilai 0 dan pada Kemampuan Lanjut jawaban salah bernilai -1; pada paket ini skor hanya dihitung dari jawaban benar.',
  source: {
    org: 'Try out OSN-K (arsip Duta e-dukasi)',
    file: 'to_osnk_mat_sma.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Kemampuan Dasar',
      marks: 20,
      stem: 'Jawablah setiap soal isian singkat berikut dengan jawaban akhir yang tepat (masing-masing bernilai 2 poin).',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            'Mindy ingin menghafal perkalian $1 \\times 1$ hingga $12 \\times 12$. Oleh karena itu, ia menulis semua hasil perkalian $a \\times b$, di mana $1 \\le a, b \\le 12$. Dari $144$ bilangan tersebut, berapa bilangan yang kurang dari $100$?',
          answer: '$133$',
          principle: 'Pencacahan dengan komplemen: hitung hasil kali yang tidak kurang dari $100$.',
          solution:
            'Hitung pasangan terurut $(a,b)$ dengan $ab \\ge 100$. Jika $a \\le 8$ maka $ab \\le 8 \\times 12 = 96 < 100$, jadi $a$ dan $b$ sama-sama bernilai minimal $9$.\n- $a=9$: $b=12$ ($108$): $1$ pasangan.\n- $a=10$: $b=10,11,12$: $3$ pasangan.\n- $a=11$: $b=10,11,12$: $3$ pasangan.\n- $a=12$: $b=9,10,11,12$: $4$ pasangan.\nAda $11$ pasangan dengan $ab\\ge100$, sehingga yang kurang dari $100$ ada $144-11=133$.',
          rubric: R2
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Fungsi $f$ memenuhi: untuk sembarang bilangan empat digit $\\overline{abcd}$, $f(\\overline{abcd}) = a^4 + b^3 + c^2 + d^1$. Berapakah nilai dari $f(2019) - f(2018) + f(2017) - f(2016) + \\cdots - f(2000)$?',
          answer: '$10$',
          principle: 'Mengelompokkan suku berpasangan sehingga selisih antar-pasangan konstan.',
          solution:
            'Kelompokkan menjadi $10$ pasangan $f(20c\\,d{+}1) - f(20c\\,d)$ dengan $d$ genap: $(2019,2018),(2017,2016),\\ldots,(2001,2000)$. Pada tiap pasangan, digit $a,b,c$ sama dan digit satuan berbeda $1$, sehingga selisihnya adalah $(d+1)-d=1$.\nJumlahnya $10 \\times 1 = 10$.',
          rubric: R2
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'Tiga dari $16$ petak dari sebuah persegi $4 \\times 4$ dipilih secara acak. Peluang bahwa setidaknya salah satu persegi ujung (kiri atas, kiri bawah, kanan atas, atau kanan bawah) dipilih adalah $\\frac{m}{n}$, di mana $m$ dan $n$ merupakan bilangan asli yang saling relatif prima. Carilah nilai $m + n$.',
          answer: '$45$',
          principle: 'Peluang komplemen dengan kombinasi.',
          solution:
            'Peluang tidak ada petak ujung terpilih: ketiga petak dipilih dari $12$ petak non-ujung, yaitu $\\frac{\\binom{12}{3}}{\\binom{16}{3}} = \\frac{220}{560} = \\frac{11}{28}$.\nPeluang yang dicari $=1-\\frac{11}{28}=\\frac{17}{28}$ ($\\gcd(17,28)=1$). Jadi $m+n=17+28=45$.',
          rubric: R2
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Diberikan segienam beraturan $ABCDEF$. Jumlah dari jarak $A$ ke $BC$, $CD$, $DE$, $EF$ adalah $4\\sqrt{3}$. Jika panjang sisi dari $ABCDEF$ adalah $\\frac{p}{q}$, di mana $p$ dan $q$ merupakan bilangan asli yang saling relatif prima, tentukan nilai $p + q$.',
          answer: '$7$',
          principle: 'Jarak titik ke garis pada segienam beraturan dengan koordinat atau sudut $60^\\circ$.',
          solution:
            'Misalkan panjang sisi $s$ dan pusat di titik asal: $A=(s,0)$, $B=\\left(\\frac s2,\\frac{s\\sqrt3}2\\right)$, $C=\\left(-\\frac s2,\\frac{s\\sqrt3}2\\right)$, $D=(-s,0)$, $E=\\left(-\\frac s2,-\\frac{s\\sqrt3}2\\right)$, $F=\\left(\\frac s2,-\\frac{s\\sqrt3}2\\right)$.\n- Garis $BC$: $y=\\frac{s\\sqrt3}2$, jarak dari $A$ adalah $\\frac{s\\sqrt3}{2}$. Garis $EF$ juga demikian.\n- Garis $CD$: $\\sqrt3x-y+\\sqrt3s=0$, jarak dari $A$ adalah $\\frac{|\\sqrt3s+\\sqrt3s|}{2}=\\sqrt3s$. Garis $DE$ simetris terhadap sumbu $x$, jaraknya juga $\\sqrt3 s$.\nJumlah: $\\frac{s\\sqrt3}2\\cdot2+\\sqrt3s\\cdot2=3\\sqrt3s=4\\sqrt3$, sehingga $s=\\frac43$. Maka $p+q=4+3=7$.',
          rubric: R2
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Sebuah bilangan asli $n$ dikatakan bagus jika $n$ dapat ditulis sebagai perkalian dua bilangan asli yang selisihnya $10$. Berapakah jumlah semua bilangan bagus yang juga merupakan bilangan kuadrat sempurna?',
          answer: '$144$',
          principle: 'Melengkapkan kuadrat dan memfaktorkan selisih dua kuadrat.',
          solution:
            'Bilangan bagus: $n = k(k+10)$ dengan $k \\ge 1$. Jika $n=m^2$ ($m\\ge1$), maka $(k+5)^2-m^2=25$, yaitu $(k+5-m)(k+5+m)=25$. Karena $k+5+m > 0$ dan $k+5+m > k+5-m$, pasangan faktor $(1,25)$ atau $(5,5)$.\n- $(1,25)$: $k+5=13$, $m=12$, sehingga $k=8$ dan $n=8\\times18=144=12^2$.\n- $(5,5)$: $m=0$ (tidak memenuhi, $n$ asli).\nJadi hanya $n=144$, dengan jumlah $144$.',
          rubric: R2
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'Enam puluh empat tim dengan label $T_1, T_2, \\ldots, T_{64}$ sedang berpartisipasi dalam suatu turnamen. Tim $i$ awalnya memiliki $i$ anggota, di mana $1 \\le i \\le 64$. Tim-tim tersebut bermain suatu rangkaian pertandingan. Suatu pertandingan melibatkan dua anggota tim yang berbeda, dan salah satu pemain akan kalah di akhir pertandingan. Saat seorang pemain kalah, ia dieliminasi, dan saat semua anggota dari suatu tim kalah, tim tersebut tereliminasi. Setelah tepat $2019$ pertandingan, $T_k$ memenangkan turnamen tersebut. Tentukan jumlah semua nilai $k$ yang mungkin.',
          answer: '$250$',
          principle: 'Setiap pertandingan mengeliminasi tepat satu pemain; hitung banyak pemain yang tersisa.',
          solution:
            'Total pemain $=1+2+\\cdots+64=2080$. Setelah $2019$ pertandingan, $2019$ pemain tereliminasi dan tersisa $2080-2019=61$ pemain, semuanya dari tim pemenang $T_k$. Jadi $k \\ge 61$.\nSetiap $k\\in\\{61,62,63,64\\}$ dapat terjadi: anggota $T_k$ yang tersisa ($61$ orang) selalu memenangkan pertandingan, sedangkan $k-61$ anggota lainnya dari $T_k$ kalah lebih dulu melawan pemain tim lain (pada saat masih ada tim lain), lalu seluruh $2080-k$ pemain tim lain dieliminasi. Banyak pertandingan $=(k-61)+(2080-k)=2019$, sesuai.\nJumlah nilai $k$: $61+62+63+64=250$.',
          rubric: R2
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'Diberikan fungsi $f$ dari bilangan real nonnegatif ke bilangan real nonnegatif sehingga $f(a^3)+f(b^3)+f(c^3) = 3f(a)f(b)f(c)$ dan $f(1) \\neq 1$ untuk sembarang bilangan real nonnegatif $a,b,c$. Carilah nilai $f(2019)$.',
          answer: '$0$',
          principle: 'Substitusi nilai khusus pada persamaan fungsional.',
          solution:
            'Ambil $a=b=c=1$: $3f(1)=3f(1)^3$, sehingga $f(1)\\in\\{0,1\\}$ (karena $f(1)\\ge0$). Karena $f(1)\\ne1$, maka $f(1)=0$.\nAmbil $a=b=1$ dan $c$ sembarang: $2f(1)+f(c^3)=3f(1)^2f(c)$, yaitu $f(c^3)=0$ untuk setiap $c\\ge0$. Karena $c^3$ mencakup semua bilangan real nonnegatif, $f\\equiv0$ (yang memenuhi persamaan dan syarat $f(1)\\neq1$).\nJadi $f(2019)=0$.',
          rubric: R2
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'Diberikan segitiga $ABC$ sehingga $\\angle BAC = 150^\\circ$, $BC = 74$, dan titik $D$ terletak di sisi $BC$ sehingga $BD = 14$. Jika $\\angle ADB = 60^\\circ$, luas segitiga $ABC$ dapat ditulis dalam bentuk $a\\sqrt{b}$, di mana $a, b$ merupakan bilangan asli dan $b$ tidak habis dibagi bilangan kuadrat apapun selain $1$, berapakah nilai $ab$?',
          answer: '$333$',
          principle: 'Koordinat dan identitas tangen jumlah sudut ($\\angle B+\\angle C=30^\\circ$).',
          solution:
            'Karena $\\angle BAC=150^\\circ$, $\\angle B+\\angle C=30^\\circ$. Pasang $D$ di titik asal, $B=(-14,0)$, $C=(60,0)$. Karena $\\angle ADB=60^\\circ$, $A=\\left(-\\frac d2,\\frac{d\\sqrt3}2\\right)$ dengan $d=AD$. Tinggi $h=\\frac{d\\sqrt3}{2}$, jarak mendatar dari $A$ ke $B$ adalah $p=14-\\frac d2$ dan ke $C$ adalah $q=60+\\frac d2$ (berarah), dengan $p+q=74$.\n$\\tan(B+C)=\\frac{h/p+h/q}{1-h^2/(pq)}=\\frac{h(p+q)}{pq-h^2}=\\frac1{\\sqrt3}$.\n$pq=840-23d-\\frac{d^2}4$ dan $h^2=\\frac{3d^2}4$, sehingga $\\sqrt3\\,h(p+q)=pq-h^2$ menjadi $\\sqrt3\\cdot\\frac{d\\sqrt3}{2}\\cdot74=111d=840-23d-d^2$, yaitu $d^2+134d-840=0$, $(d-6)(d+140)=0$, jadi $d=6$.\nTinggi $h=3\\sqrt3$ dan luas $=\\frac12\\cdot74\\cdot3\\sqrt3=111\\sqrt3$. Jadi $a=111$, $b=3$, dan $ab=333$.',
          rubric: R2
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'Terdapat $7$ bola di dalam kotak. Pertama-tama, Andi akan mengambil $a$ bola, di mana $a$ adalah bilangan bulat sehingga $1 \\le a \\le 6$. Kemudian, Budi akan mengambil $b$ bola, di mana $b$ adalah bilangan bulat sehingga $1 \\le b \\le 7-a$. Cindy akan mengambil semua bola yang tersisa (jika ada sisa). $N$ adalah banyaknya cara pengambilan bola jika bola-bola tersebut tidak identik. Carilah sisa ketika $N$ dibagi $1000$.',
          answer: '$932$',
          principle: 'Pencacahan dengan kombinasi dan teorema binomial.',
          solution:
            'Untuk setiap $a$, Andi memilih $\\binom7a$ cara, lalu Budi memilih himpunan bagian tak kosong dari $7-a$ bola sisa: $2^{7-a}-1$ cara (Cindy mendapat sisanya).\n$$N=\\sum_{a=1}^{6}\\binom7a\\left(2^{7-a}-1\\right)=\\sum_{a=1}^{6}\\binom7a2^{7-a}-\\sum_{a=1}^{6}\\binom7a.$$\nDengan teorema binomial, $\\sum_{a=0}^{7}\\binom7a2^{7-a}=3^7=2187$; kurangkan suku $a=0$ ($128$) dan $a=7$ ($1$): $2058$. Dan $\\sum_{a=1}^{6}\\binom7a=2^7-2=126$.\n$N=2058-126=1932$, sisa dibagi $1000$ adalah $932$.',
          rubric: R2
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'Diketahui $^{2}\\log 5 + {}^{3}\\log 6 + {}^{4}\\log 7 + {}^{5}\\log 8 = {}^{2}\\log a + {}^{3}\\log a$. Apa bilangan bulat yang terdekat dengan $a$?',
          answer: '$17$',
          principle: 'Fungsi $F(a)={}^{2}\\log a+{}^{3}\\log a$ naik tegas, sehingga $a$ dapat diapit dengan perbandingan nilai.',
          solution:
            'Hitung ruas kiri: ${}^2\\log5\\approx2{,}3219$, ${}^3\\log6\\approx1{,}6309$, ${}^4\\log7\\approx1{,}4037$, ${}^5\\log8\\approx1{,}2920$, jumlah $\\approx6{,}6486$.\n$F(a)={}^{2}\\log a+{}^{3}\\log a$ naik tegas untuk $a>0$. Dihitung: $F(16{,}5)\\approx4{,}0444+2{,}5518\\approx6{,}596<6{,}6486$ dan $F(17{,}5)\\approx4{,}1293+2{,}6054\\approx6{,}735>6{,}6486$. Jadi $16{,}5<a<17{,}5$ (sebenarnya $a\\approx16{,}87$), sehingga bilangan bulat terdekat adalah $17$.',
          rubric: R2
        }
      ]
    },
    {
      no: 2,
      title: 'Kemampuan Lanjut',
      marks: 40,
      stem: 'Jawablah setiap soal isian singkat berikut dengan jawaban akhir yang tepat (masing-masing bernilai 4 poin).',
      parts: [
        {
          label: '1',
          marks: 4,
          prompt:
            'Bilangan palindrom adalah bilangan yang bernilai sama jika dibaca dari kiri ke kanan maupun dari kanan ke kiri. Contohnya, $121$ dan $13431$ merupakan palindrom. Berapakah bilangan asli $n < 600$ terbesar sehingga $n^2$ merupakan bilangan palindrom?',
          answer: '$307$',
          principle: 'Palindrom enam angka habis dibagi $11$; angka satuan kuadrat sempurna terbatas.',
          solution:
            '$307^2=94249$ adalah palindrom. Tunjukkan tidak ada $n$ dengan $308\\le n\\le599$.\n- $308\\le n\\le316$ ($n^2$ lima angka): $n^2=94864, 95481, 96100, 96721, 97344, 97969, 98596, 99225, 99856$; tidak ada yang palindrom.\n- $317\\le n\\le599$ ($n^2$ enam angka, $\\le358801$): palindrom enam angka $\\overline{xyzzyx}=100001x+10010y+1100z=11(9091x+910y+100z)$ habis dibagi $11$, sehingga $n$ kelipatan $11$. Angka pertama $x$ sama dengan angka satuan $n^2$, dan $x\\in\\{1,2,3\\}$ (karena $n^2\\le358801$); angka satuan kuadrat tidak mungkin $2$ atau $3$, jadi $x=1$, sehingga $n^2<200000$, $n\\le446$, dan $n$ berakhir $1$ atau $9$. Kelipatan $11$ dalam $[317,446]$ yang berakhir $1$ atau $9$: $319,341,429$. Kuadratnya $101761$, $116281$, $184041$, bukan palindrom.\nJadi $n$ terbesar adalah $307$.',
          rubric: R4
        },
        {
          label: '2',
          marks: 4,
          prompt:
            'Diberikan jajar genjang $ABCD$ dengan $BC = 5$, $\\angle ABC < 90^\\circ$, dan $\\angle ACB > 90^\\circ$. Garis $AD$ dan sisi $CD$ memotong lingkaran luar $ABC$ berturut-turut di $P \\neq A$ dan $Q \\neq C$. Jika $CP = 10$ dan $CQ = 4$, tentukan panjang $AP$.',
          answer: '$7$',
          principle: 'Trapesium sama kaki pada lingkaran (tali busur sejajar) dan kuasa titik terhadap lingkaran.',
          solution:
            '$AP\\parallel BC$ (karena $AD\\parallel BC$) adalah tali busur-tali busur sejajar pada lingkaran, sehingga $ABCP$ trapesium sama kaki dan $CP=AB$. Jadi $AB=CD=10$.\nKuasa titik $D$ (di luar lingkaran) memberi $DA\\cdot DP=DQ\\cdot DC$. Dengan $DC=10$ dan $CQ=4$, $DQ=6$, sehingga $DA\\cdot DP=60$. Karena $DA=5$, $DP=12$.\nKarena $\\angle ACB>90^\\circ$, $P$ berada di seberang $A$ dari $D$ (urutan $D,A,P$), sehingga $AP=DP-DA=12-5=7$.\nKonsistensi: dengan $\\theta=\\angle ABC$, $AP=20\\cos\\theta-5$ dan $CQ=10-10\\cos\\theta=4$ memberi $\\cos\\theta=0{,}6$, memenuhi $\\cos\\theta>\\frac12$ (agar $\\angle ACB>90^\\circ$); $AP=20(0{,}6)-5=7$.',
          rubric: R4
        },
        {
          label: '3',
          marks: 4,
          prompt:
            'Misalkan $S$ adalah himpunan semua bilangan asli yang habis dibagi $3$ dan memiliki setidaknya satu digit $1$. Contohnya, $123$ merupakan anggota $S$ tetapi $456$ tidak merupakan anggota $S$. Jika peluang bahwa suatu bilangan tiga digit yang dipilih secara acak merupakan anggota $S$ adalah $\\frac{a}{b}$, di mana $a, b$ merupakan bilangan asli yang saling relatif prima, tentukan nilai $a + b$.',
          answer: '$197$',
          principle: 'Pencacahan dengan komplemen dan sisa pembagian modulo $3$.',
          solution:
            'Ada $900$ bilangan tiga digit ($100$ sampai $999$), dan $300$ di antaranya kelipatan $3$. Hitung kelipatan $3$ yang tidak memuat digit $1$.\nDigit ratusan dari $\\{2,\\ldots,9\\}$ dengan sisa mod $3$: sisa $0$: $\\{3,6,9\\}$ ($3$), sisa $1$: $\\{4,7\\}$ ($2$), sisa $2$: $\\{2,5,8\\}$ ($3$). Digit puluhan/satuan dari $\\{0,2,\\ldots,9\\}$: sisa $0$: $\\{0,3,6,9\\}$ ($4$), sisa $1$: $\\{4,7\\}$ ($2$), sisa $2$: $\\{2,5,8\\}$ ($3$).\nBanyak pasangan (puluhan, satuan) dengan jumlah sisa $0$: $4\\cdot4+2\\cdot3+3\\cdot2=28$; jumlah sisa $1$: $4\\cdot2+2\\cdot4+3\\cdot3=25$; jumlah sisa $2$: $4\\cdot3+3\\cdot4+2\\cdot2=28$.\nAgar jumlah habis dibagi $3$: ratusan sisa $0$ butuh pasangan sisa $0$: $3\\times28=84$; ratusan sisa $1$ butuh pasangan sisa $2$: $2\\times28=56$; ratusan sisa $2$ butuh pasangan sisa $1$: $3\\times25=75$. Total tanpa digit $1$: $84+56+75=215$.\nBanyak anggota $S$ tiga digit $=300-215=85$. Peluang $=\\frac{85}{900}=\\frac{17}{180}$, sehingga $a+b=197$.',
          rubric: R4
        },
        {
          label: '4',
          marks: 4,
          prompt:
            'Bilangan real $a, b, c, d$ memenuhi sistem persamaan\n$$\\begin{cases} -a - 27b - 8d = 1, \\\\ 8a + 64b + c + 27d = 0, \\\\ 27a + 125b + 8c + 64d = 1, \\\\ 64a + 216b + 27c + 125d = 8. \\end{cases}$$\nCarilah nilai dari $12a + 108b + 48d$.',
          answer: '$12$',
          principle: 'Eliminasi dan substitusi pada sistem persamaan linear.',
          solution:
            'Dari persamaan kedua: $c=-8a-64b-27d$. Substitusi ke persamaan ketiga dan keempat:\n$$-37a-387b-152d=1,\\qquad -152a-1512b-604d=8.$$\nDari persamaan pertama: $a=-1-27b-8d$. Substitusi:\n$37+612b+144d=1 \\Rightarrow 17b+4d=-1$,\n$152+2592b+612d=8 \\Rightarrow 72b+17d=-4$.\nDari yang pertama $d=\\frac{-1-17b}{4}$; substitusi: $288b-17-289b=-16$, sehingga $b=-1$, $d=4$, $a=-1+27-32=-6$, $c=48+64-108=4$.\nPemeriksaan keempat persamaan: $1$, $0$, $1$, $8$ (benar).\n$12a+108b+48d=-72-108+192=12$.',
          rubric: R4
        },
        {
          label: '5',
          marks: 4,
          prompt:
            'Tentukan jumlah tiga bilangan asli terkecil $n$ sehingga $n^4 + 4$ merupakan perkalian dari dua bilangan prima yang berbeda.',
          answer: '$23$',
          principle: 'Identitas Sophie Germain: $n^4+4=(n^2-2n+2)(n^2+2n+2)$.',
          solution:
            'Jika $n$ genap, $n^4+4$ habis dibagi $4$ sehingga tidak mungkin perkalian dua prima berbeda. $n=1$: $5$ prima (bukan perkalian dua prima). Untuk $n$ ganjil $\\ge3$, $n^4+4=(n^2-2n+2)(n^2+2n+2)$ dengan kedua faktor lebih dari $1$ dan berbeda, sehingga keduanya harus prima.\n- $n=3$: $5\\times17$ (prima, prima): ya.\n- $n=5$: $17\\times37$: ya.\n- $n=7$: $37\\times65$, $65=5\\cdot13$: tidak.\n- $n=9$: $65\\times101$: tidak.\n- $n=11$: $101\\times145$, $145=5\\cdot29$: tidak.\n- $n=13$: $145\\times197$: tidak.\n- $n=15$: $197\\times257$: keduanya prima, ya.\nTiga bilangan terkecil: $3,5,15$, jumlahnya $23$.',
          rubric: R4
        },
        {
          label: '6',
          marks: 4,
          prompt:
            'Diberikan segitiga $ABC$ yang siku-siku di $A$ dengan $AC = 8$ dan $BC = 16$. Kedua garis yang menyinggung lingkaran luar $\\triangle ABC$ di $A$ dan $B$ berpotongan di $D$. $E$ adalah titik pada sisi $AB$ sehingga $AD \\parallel CE$. Maka $DE^2$ bisa ditulis dalam bentuk $\\frac{m}{n}$, di mana $m, n$ merupakan bilangan asli yang saling relatif prima. Tentukan nilai dari $m + n$.',
          answer: '$451$',
          principle: 'Geometri koordinat; garis singgung tegak lurus jari-jari.',
          solution:
            '$AB=\\sqrt{16^2-8^2}=8\\sqrt3$. Pasang $A=(0,0)$, $B=(8\\sqrt3,0)$, $C=(0,8)$. Lingkaran luar berpusat di titik tengah $BC$: $O=(4\\sqrt3,4)$, berjari-jari $8$.\nSinggung di $A$ tegak lurus $OA$: $y=-\\sqrt3x$. Singgung di $B$ tegak lurus $OB$ (arah $(4\\sqrt3,-4)$): $y=\\sqrt3x-24$. Perpotongan: $-\\sqrt3x=\\sqrt3x-24\\Rightarrow x=4\\sqrt3$, $y=-12$, jadi $D=(4\\sqrt3,-12)$.\n$AD$ berarah $(1,-\\sqrt3)$. $E=(e,0)$ dengan $CE=(e,-8)\\parallel(1,-\\sqrt3)$: $e\\sqrt3=8$, $e=\\frac8{\\sqrt3}$ (di dalam sisi $AB$).\n$DE^2=\\left(4\\sqrt3-\\frac8{\\sqrt3}\\right)^2+144=\\left(\\frac4{\\sqrt3}\\right)^2+144=\\frac{16}3+144=\\frac{448}3$.\n$\\gcd(448,3)=1$, jadi $m+n=451$.',
          rubric: R4
        },
        {
          label: '7',
          marks: 4,
          prompt:
            'Pada suatu ronde permainan, Jimmy dan Jacob masing-masing memilih secara acak (dengan peluang yang sama) untuk melempar sebuah dadu biasa atau untuk memperoleh $1$ secara otomatis tanpa melempar dadu. Jika perkalian dari kedua mata dadu yang muncul genap, Jimmy menang. Jika tidak, maka Jacob menang. Peluang bahwa Jimmy memenangkan $3$ ronde sebelum Jacob memenangkan $3$ ronde adalah $\\frac{p}{q}$, di mana $p, q$ merupakan bilangan asli yang saling relatif prima. Tentukan sisa $p + q$ ketika dibagi $1000$.',
          answer: '$629$',
          principle: 'Peluang total per ronde, lalu distribusi "perlombaan sampai 3 kemenangan".',
          solution:
            'Peluang Jimmy menang dalam satu ronde, dengan setiap pilihan berpeluang $\\frac12$ (empat kombinasi sama mungkin):\n- Keduanya melempar: hasil kali ganjil hanya jika kedua dadu ganjil ($\\frac14$), jadi Jimmy menang $\\frac34$.\n- Satu melempar, satu otomatis $1$: hasil kali sama dengan dadu yang dilempar, genap dengan peluang $\\frac12$ (dua kombinasi).\n- Keduanya otomatis $1$: hasil kali $1$ (ganjil), Jimmy menang $0$.\n$$P(\\text{Jimmy menang ronde}) = \\frac14\\left(\\frac34+\\frac12+\\frac12+0\\right)=\\frac7{16},\\quad P(\\text{Jacob})=\\frac9{16}.$$\nJimmy menang $3$ ronde sebelum Jacob menang $3$ ronde: Jimmy menang ronde ke-$(3+k)$ dengan Jacob menang $k$ ronde ($k=0,1,2$) sebelumnya:\n$$P=\\left(\\frac7{16}\\right)^3\\left[1+3\\cdot\\frac9{16}+6\\cdot\\left(\\frac9{16}\\right)^2\\right]=\\frac{343}{4096}\\cdot\\frac{1174}{256}=\\frac{402682}{1048576}=\\frac{201341}{524288}.$$\n($201341$ ganjil, sehingga pecahan sudah sederhana.) $p+q=201341+524288=725629$, sisa dibagi $1000$ adalah $629$.\nCatatan: naskah sumber tidak memuat kata "secara acak"; pada tafsiran pemain memilih strategi optimal, peluang setiap ronde menjadi $\\frac12$ dan jawabannya $\\frac12$, yaitu $p+q=3$.',
          rubric: R4
        },
        {
          label: '8',
          marks: 4,
          prompt:
            'Jika $a$ dan $b$ adalah bilangan real sehingga $\\sqrt[3]{a}-\\sqrt[3]{b}=12$ dan $ab=\\left(\\frac{a+b+8}{6}\\right)^3$, carilah nilai $a-b$.',
          answer: '$468$',
          principle: 'Identitas $x^3+y^3+z^3-3xyz=(x+y+z)\\cdot\\frac12\\left[(x-y)^2+(y-z)^2+(z-x)^2\\right]$.',
          solution:
            'Misalkan $x=\\sqrt[3]a$ dan $y=\\sqrt[3]b$, sehingga $x-y=12$ dan $ab=(xy)^3$. Persamaan kedua menjadi $(xy)^3=\\left(\\frac{x^3+y^3+8}6\\right)^3$; karena pemangkatan tiga satu-satu pada bilangan real, $xy=\\frac{x^3+y^3+8}{6}$, yaitu\n$$x^3+y^3+2^3-3\\cdot x\\cdot y\\cdot2=0.$$\nDengan identitas di atas: $(x+y+2)\\cdot\\frac12\\left[(x-y)^2+(y-2)^2+(x-2)^2\\right]=0$. Faktor kedua nol hanya jika $x=y=2$, yang bertentangan dengan $x-y=12$. Jadi $x+y=-2$.\nDari $x-y=12$ dan $x+y=-2$: $x=5$, $y=-7$, sehingga $a=125$, $b=-343$.\nPemeriksaan: $ab=-42875$ dan $\\left(\\frac{125-343+8}{6}\\right)^3=(-35)^3=-42875$.\n$a-b=125+343=468$.',
          rubric: R4
        },
        {
          label: '9',
          marks: 4,
          prompt:
            'Untuk setiap bilangan asli $n$, misalkan $f_1(n) = n!$, dan untuk $k \\ge 2$, misalkan $f_k(n) = f_{k-1}(1) \\cdot f_{k-1}(2) \\cdots f_{k-1}(n)$. $N$ adalah bilangan asli terbesar sehingga $f_4(10)$ habis dibagi $2^N$. Berapakah jumlah dari digit-digit $N$?',
          answer: '$21$',
          principle: 'Eksponen $2$ pada perkalian adalah jumlah eksponen $2$ tiap faktor ($v_2$ bersifat aditif).',
          solution:
            'Misalkan $v_2(x)$ eksponen $2$ pada $x$. $v_2(l!)$ untuk $l=1,\\ldots,10$: $0,1,1,3,3,4,4,7,7,8$ (rumus Legendre).\n$f_2(j)=\\prod_{l=1}^{j}l!$ sehingga $v_2(f_2(j))$ adalah jumlah kumulatif: $0,1,2,5,8,12,16,23,30,38$ untuk $j=1,\\ldots,10$.\n$f_3(i)=\\prod_{j=1}^{i}f_2(j)$ sehingga $v_2(f_3(i))$ adalah jumlah kumulatif lagi: $0,1,3,8,16,28,44,67,97,135$ untuk $i=1,\\ldots,10$.\n$f_4(10)=\\prod_{i=1}^{10}f_3(i)$ sehingga $N=0+1+3+8+16+28+44+67+97+135=399$.\nJumlah digit $N$: $3+9+9=21$.',
          rubric: R4
        },
        {
          label: '10',
          marks: 4,
          prompt:
            'Segiempat konveks $ABCD$ memiliki sudut lancip $\\angle A$ dan $\\angle D$, sudut tumpul $\\angle B$ dan $\\angle C$, $AB = BC = CD = 10$, dan $AC + BD = 24\\sqrt{2}$. $M$ dan $N$ berturut-turut merupakan titik tengah $AC$ dan $BD$. Jika $MN = 5$, berapakah $AD^2$?',
          answer: '$384$',
          principle: 'Koordinat dengan sudut $\\beta=\\angle B$ dan $\\gamma=\\angle C$; rumus jumlah-ke-hasil kali dan sudut paruh.',
          solution:
            'Pasang $B=(0,0)$, $C=(10,0)$, $A=10(\\cos\\beta,\\sin\\beta)$, $D=(10-10\\cos\\gamma,\\,10\\sin\\gamma)$ dengan $\\beta=\\angle B$, $\\gamma=\\angle C$ tumpul.\n$AC^2=100(2-2\\cos\\beta)=400\\sin^2\\frac\\beta2$ sehingga $AC=20\\sin\\frac\\beta2$; demikian pula $BD=20\\sin\\frac\\gamma2$.\n$M-N=\\frac{A+C-B-D}{2}=\\frac{10}{2}(\\cos\\beta+\\cos\\gamma,\\ \\sin\\beta-\\sin\\gamma)$. $MN=5$ memberi $(\\cos\\beta+\\cos\\gamma)^2+(\\sin\\beta-\\sin\\gamma)^2=1$, yaitu $2+2\\cos(\\beta+\\gamma)=1$, $\\cos(\\beta+\\gamma)=-\\frac12$. Karena $\\beta,\\gamma$ tumpul, $\\beta+\\gamma=240^\\circ$.\nMisalkan $u=\\frac\\beta2$, $v=\\frac\\gamma2$, $u+v=120^\\circ$. $AC+BD=20(\\sin u+\\sin v)=40\\sin60^\\circ\\cos\\frac{u-v}2=20\\sqrt3\\cos\\frac{u-v}{2}=24\\sqrt2$, jadi $\\cos\\frac{u-v}2=\\frac{2\\sqrt6}5$ dan $\\cos(u-v)=2\\cdot\\frac{24}{25}-1=\\frac{23}{25}$.\n$AD^2=100\\left[(\\cos\\beta+\\cos\\gamma-1)^2+(\\sin\\beta-\\sin\\gamma)^2\\right]=100\\left[2-2(\\cos\\beta+\\cos\\gamma)\\right]$, dan $\\cos\\beta+\\cos\\gamma=2\\cos(u+v)\\cos(u-v)=-\\frac{23}{25}$.\n$AD^2=100\\left(2+\\frac{46}{25}\\right)=384$.\nKonfigurasi ada: $\\beta\\approx143{,}1^\\circ$, $\\gamma\\approx96{,}9^\\circ$ memberi $\\angle A\\approx48{,}5^\\circ$ dan $\\angle D\\approx71{,}5^\\circ$ (lancip).',
          rubric: R4
        }
      ]
    }
  ]
};
