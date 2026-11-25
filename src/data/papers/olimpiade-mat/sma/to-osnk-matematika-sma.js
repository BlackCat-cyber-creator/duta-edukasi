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
            'Hitung pasangan terurut $(a,b)$ dengan $1 \\le a,b \\le 12$ dan $ab \\ge 100$. Jika $a \\le 8$, maka $ab \\le 8 \\times 12 = 96 < 100$, sehingga $a$ dan $b$ masing-masing minimal $9$.\n- $a=9$: karena $9 \\times 11 = 99 < 100$, hanya $b=12$ ($108$): $1$ pasangan.\n- $a=10$: $b=10,11,12$: $3$ pasangan.\n- $a=11$: karena $11 \\times 9 = 99 < 100$, $b=10,11,12$: $3$ pasangan.\n- $a=12$: $12 \\times 9 = 108 \\ge 100$, sehingga $b=9,10,11,12$: $4$ pasangan.\nTotal ada $1+3+3+4=11$ pasangan dengan $ab\\ge100$, jadi yang kurang dari $100$ ada $144-11=133$.',
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
            'Kelompokkan menjadi $10$ pasangan berurutan $(2019,2018),(2017,2016),\\ldots,(2001,2000)$, yakni $f(\\overline{20c(d+1)}) - f(\\overline{20cd})$ dengan $c\\in\\{0,1\\}$ dan $d\\in\\{0,2,4,6,8\\}$.\nPada setiap pasangan, tiga digit awal sama dan digit satuan berbeda $1$:\n$$f(\\overline{20c(d+1)}) - f(\\overline{20cd}) = \\left(2^4+0^3+c^2+(d+1)^1\\right) - \\left(2^4+0^3+c^2+d^1\\right) = (d+1)-d = 1.$$\nJadi jumlah seluruhnya adalah $10 \\times 1 = 10$.',
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
            'Ada $4$ petak ujung dan $16-4=12$ petak bukan ujung.\nBanyak cara memilih $3$ petak seluruhnya adalah $\\binom{16}{3}=\\frac{16\\cdot15\\cdot14}{6}=560$, sedangkan banyak cara memilih $3$ petak tanpa satu pun petak ujung adalah $\\binom{12}{3}=\\frac{12\\cdot11\\cdot10}{6}=220$.\nPeluang tidak ada petak ujung terpilih adalah $\\frac{220}{560} = \\frac{11}{28}$.\nPeluang yang dicari $=1-\\frac{11}{28}=\\frac{17}{28}$ (dengan $\\gcd(17,28)=1$). Jadi $m+n=17+28=45$.',
          rubric: R2
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Diberikan segienam beraturan $ABCDEF$. Jumlah dari jarak $A$ ke $BC$, $CD$, $DE$, $EF$ adalah $4\\sqrt{3}$. Jika panjang sisi dari $ABCDEF$ adalah $\\frac{p}{q}$, di mana $p$ dan $q$ merupakan bilangan asli yang saling relatif prima, tentukan nilai $p + q$.',
          answer: '$7$',
          principle: 'Jarak titik ke garis pada segienam beraturan menggunakan koordinat atau sudut $60^\\circ$.',
          solution:
            'Misalkan panjang sisi $s$ dan pusat segienam di titik asal, dengan titik-titik sudut $A=(s,0)$, $B=\\left(\\frac s2,\\frac{s\\sqrt3}2\\right)$, $C=\\left(-\\frac s2,\\frac{s\\sqrt3}2\\right)$, $D=(-s,0)$, $E=\\left(-\\frac s2,-\\frac{s\\sqrt3}2\\right)$, dan $F=\\left(\\frac s2,-\\frac{s\\sqrt3}2\\right)$.\n- Garis $BC$: $y=\\frac{s\\sqrt3}2$, sehingga jaraknya dari $A(s,0)$ adalah $\\frac{s\\sqrt3}{2}$. Dengan simetri terhadap sumbu-$x$, jarak $A$ ke $EF$ ($y=-\\frac{s\\sqrt3}2$) juga $\\frac{s\\sqrt3}{2}$.\n- Garis $CD$ melalui $(-s,0)$ dengan gradien $\\frac{s\\sqrt3/2-0}{-s/2-(-s)}=\\sqrt3$, sehingga persamaannya $\\sqrt3x-y+\\sqrt3s=0$. Jaraknya dari $A(s,0)$ adalah $\\frac{|\\sqrt3s-0+\\sqrt3s|}{\\sqrt{(\\sqrt3)^2+(-1)^2}}=\\frac{2\\sqrt3s}{2}=\\sqrt3s$. Dengan simetri terhadap sumbu-$x$, jarak $A$ ke $DE$ juga $\\sqrt3s$.\nJumlah keempat jarak tersebut adalah $2\\cdot\\frac{s\\sqrt3}2+2\\cdot\\sqrt3s=3\\sqrt3s=4\\sqrt3$, sehingga $s=\\frac43$. Karena $\\gcd(4,3)=1$, diperoleh $p+q=4+3=7$.',
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
            'Bilangan bagus berbentuk $n = k(k+10)$ dengan $k \\ge 1$. Jika $n=m^2$ ($m\\ge1$), maka $k^2+10k=m^2$. Dengan melengkapkan kuadrat:\n$$(k+5)^2-m^2=25 \\implies (k+5-m)(k+5+m)=25.$$\nKarena $k,m\\ge1$, kedua faktor bilangan bulat dengan $k+5+m > 0$ dan $k+5+m > k+5-m$, sehingga keduanya positif dan satu-satunya kemungkinan adalah $k+5-m=1$ dan $k+5+m=25$ (pasangan $(5,5)$ menghasilkan $m=0$, tidak memenuhi).\nMenjumlahkan kedua persamaan memberi $2(k+5)=26 \\Rightarrow k+5=13 \\Rightarrow k=8$ dan $m=12$, sehingga $n=8\\times18=144=12^2$.\nJadi hanya ada satu bilangan demikian, yaitu $144$.',
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
            'Total pemain mula-mula adalah $1+2+\\cdots+64=\\frac{64\\times65}{2}=2080$. Setiap pertandingan mengeliminasi tepat $1$ pemain, sehingga setelah $2019$ pertandingan tersisa $2080-2019=61$ pemain, dan semuanya harus berasal dari tim pemenang $T_k$. Jadi $k \\ge 61$, yakni $k\\in\\{61,62,63,64\\}$.\nSetiap $k\\in\\{61,62,63,64\\}$ dapat terjadi: pertama-tama $k-61$ anggota $T_k$ kalah melawan anggota tim lain (misalnya $T_1$), lalu salah satu dari $61$ anggota $T_k$ yang tersisa mengalahkan seluruh $2080-k$ pemain dari tim-tim lainnya. Total pertandingan adalah $(k-61)+(2080-k)=2019$ dan hanya $T_k$ yang tersisa.\nJumlah semua nilai $k$ yang mungkin adalah $61+62+63+64=250$.',
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
            'Substitusi $a=b=c=1$ menghasilkan $3f(1)=3f(1)^3$, atau $f(1)\\left(f(1)^2-1\\right)=0$. Karena $f(1)\\ge0$ dan $f(1)\\neq1$, haruslah $f(1)=0$.\nSelanjutnya, ambil $a=b=1$ dan $c\\ge0$ sembarang: $2f(1)+f(c^3)=3f(1)^2f(c)$, sehingga $f(c^3)=0$ untuk setiap $c\\ge0$. Untuk sembarang $x\\ge0$, pilih $c=\\sqrt[3]{x}\\ge0$, diperoleh $f(x)=0$ (dan fungsi konstan $f\\equiv0$ memenuhi persamaan fungsional serta $f(1)\\neq1$).\nJadi $f(2019)=0$.',
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
            'Karena $\\angle BAC=150^\\circ$, maka $\\angle B+\\angle C=30^\\circ$; khususnya $\\angle B,\\angle C<30^\\circ<90^\\circ$, sehingga kaki tinggi dari $A$ jatuh di dalam ruas $BC$. Pasang $D=(0,0)$, $B=(-14,0)$, dan $C=(60,0)$ (karena $DC=74-14=60$).\nKarena $\\angle ADB=60^\\circ$, misalkan $AD=d>0$, maka $A=\\left(-\\frac d2,\\frac{d\\sqrt3}2\\right)$ dengan tinggi $h=\\frac{d\\sqrt3}{2}$. Jarak mendatar dari $A$ ke $B$ adalah $p=14-\\frac d2>0$ dan ke $C$ adalah $q=60+\\frac d2>0$, dengan $p+q=74$.\nDari $\\tan(B+C)=\\tan30^\\circ=\\frac1{\\sqrt3}$, diperoleh:\n$$\\frac{\\tan B+\\tan C}{1-\\tan B\\tan C}=\\frac{\\frac hp+\\frac hq}{1-\\frac{h^2}{pq}}=\\frac{h(p+q)}{pq-h^2}=\\frac1{\\sqrt3}\\implies \\sqrt3\\,h(p+q)=pq-h^2.$$\nHitung $pq=\\left(14-\\frac d2\\right)\\left(60+\\frac d2\\right)=840-23d-\\frac{d^2}4$ dan $h^2=\\frac{3d^2}4$, sehingga $pq-h^2=840-23d-d^2$. Sementara $\\sqrt3\\,h(p+q)=\\sqrt3\\cdot\\frac{d\\sqrt3}{2}\\cdot74=111d$.\nDidapat $111d=840-23d-d^2 \\implies d^2+134d-840=0 \\implies (d-6)(d+140)=0$. Karena $d>0$, maka $d=6$.\nJadi $h=3\\sqrt3$ dan luas $\\triangle ABC=\\frac12\\cdot74\\cdot3\\sqrt3=111\\sqrt3$. Diperoleh $a=111$, $b=3$, dan $ab=333$.',
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
            'Karena ketujuh bola berbeda, untuk setiap $a\\in\\{1,\\ldots,6\\}$, Andi memilih $a$ bola dalam $\\binom7a$ cara, lalu Budi memilih himpunan bagian tak kosong dari $7-a$ bola tersisa dalam $\\sum_{b=1}^{7-a}\\binom{7-a}{b}=2^{7-a}-1$ cara (Cindy otomatis mengambil sisanya).\n$$N=\\sum_{a=1}^{6}\\binom7a\\left(2^{7-a}-1\\right)=\\sum_{a=1}^{6}\\binom7a2^{7-a}-\\sum_{a=1}^{6}\\binom7a.$$\nDengan teorema binomial, $\\sum_{a=0}^{7}\\binom7a2^{7-a}=(2+1)^7=3^7=2187$. Kurangkan suku $a=0$ ($128$) dan $a=7$ ($1$) untuk memperoleh $\\sum_{a=1}^{6}\\binom7a2^{7-a}=2187-128-1=2058$. Selain itu, $\\sum_{a=1}^{6}\\binom7a=2^7-\\binom70-\\binom77=128-2=126$.\nJadi $N=2058-126=1932$, sehingga sisa pembagian $N$ oleh $1000$ adalah $932$.',
          rubric: R2
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'Diketahui $^{2}\\log 5 + {}^{3}\\log 6 + {}^{4}\\log 7 + {}^{5}\\log 8 = {}^{2}\\log a + {}^{3}\\log a$. Apa bilangan bulat yang terdekat dengan $a$?',
          answer: '$17$',
          principle: 'Menggunakan sifat logaritma, ketaksamaan pangkat bulat serta Bernoulli, dan fungsi naik tegas $F(a)={}^{2}\\log a+{}^{3}\\log a$ untuk mengapit $a$ dalam selang $(16{,}5;\\,17{,}5)$ tanpa kalkulator.',
          solution:
            'Sederhanakan ruas kiri dengan sifat logaritma: ${}^{3}\\log 6 = 1 + {}^{3}\\log 2$, ${}^{4}\\log 7 = \\frac12\\,{}^{2}\\log 7$, dan ${}^{5}\\log 8 = 3\\,{}^{5}\\log 2$. Perhatikan bahwa $F(a) = {}^{2}\\log a + {}^{3}\\log a$ naik tegas untuk $a>0$, dan $F(a)$ sama dengan ruas kiri ($\\text{RK}$).\n\n**Batas bawah $\\text{RK}$ dan perbandingan dengan $F(16{,}5)$:**\n- $5^{10} = 9765625 > 8388608 = 2^{23} \\implies {}^{2}\\log 5 > \\frac{23}{10}$.\n- $2^8 = 256 > 243 = 3^5 \\implies {}^{3}\\log 2 > \\frac58$, sehingga ${}^{3}\\log 6 = 1 + {}^{3}\\log 2 > \\frac{13}{8}$.\n- $7^5 = 16807 > 16384 = 4^7 \\implies {}^{4}\\log 7 > \\frac75$.\n- $2^7 = 128 > 125 = 5^3 \\implies {}^{5}\\log 2 > \\frac37$, sehingga ${}^{5}\\log 8 = 3\\,{}^{5}\\log 2 > \\frac97$.\nJumlahnya:\n$$\\text{RK} > \\frac{23}{10} + \\frac{13}{8} + \\frac75 + \\frac97 = 6 + \\frac{171}{280}.$$\nSementara $F(16{,}5) = F\\!\\left(\\frac{33}{2}\\right) = 4 + {}^{2}\\log\\frac{33}{32} + 2 + {}^{3}\\log\\frac{11}{6}$. Karena $\\left(\\frac{33}{32}\\right)^2 = \\frac{1089}{1024} = 1 + \\frac{65}{1024} < 1 + \\frac{1}{15} = \\frac{16}{15}$ (sebab $65 \\times 15 = 975 < 1024$), maka $\\left(\\frac{33}{32}\\right)^4 < \\frac{256}{225} = 1 + \\frac{31}{225} < \\frac87$ (sebab $31 \\times 7 = 217 < 225$), sehingga $\\left(\\frac{33}{32}\\right)^{20} < \\left(\\frac87\\right)^5 = \\frac{32768}{16807} < 2$, yang memberi ${}^{2}\\log\\frac{33}{32} < \\frac{1}{20}$. Juga $\\left(\\frac{11}{6}\\right)^3 = \\frac{1331}{216} < \\frac{1332}{216} = \\frac{37}{6}$ dan $\\left(\\frac{37}{6}\\right)^3 = \\frac{50653}{216} < 243 = 3^5$ (sebab $216 \\times 243 = 52488 > 50653$), sehingga $\\left(\\frac{11}{6}\\right)^9 < 3^5$ dan ${}^{3}\\log\\frac{11}{6} < \\frac59$. Jadi\n$$F(16{,}5) < 6 + \\frac{1}{20} + \\frac59 = 6 + \\frac{109}{180}.$$\nDengan perkalian silang, $\\frac{109}{180} < \\frac{171}{280}$ karena $109 \\times 14 = 1526 < 1539 = 171 \\times 9$, sehingga $F(16{,}5) < \\text{RK} = F(a) \\implies a > 16{,}5$.\n\n**Batas atas $\\text{RK}$ dan perbandingan dengan $F(17{,}5)$:**\n- $5^3 = 125 < 128 = 2^7 \\implies {}^{2}\\log 5 < \\frac73$.\n- $2^{11} = 2048 < 2187 = 3^7 \\implies {}^{3}\\log 6 = 1 + {}^{3}\\log 2 < 1 + \\frac{7}{11} = \\frac{18}{11}$.\n- $7^6 = 343^2 = 117649 < 131072 = 2^{17} = 4^{17/2} \\implies {}^{4}\\log 7 < \\frac{17}{12}$.\n- Dengan ketaksamaan Bernoulli, $\\left(1 - \\frac{3}{128}\\right)^{30} \\ge 1 - \\frac{90}{128} = \\frac{38}{128} > \\frac15$, sehingga $\\left(\\frac{128}{125}\\right)^{30} < \\frac{128}{38} < 5$. Akibatnya $2^{210} < 5^{91} \\implies {}^{5}\\log 8 = 3\\,{}^{5}\\log 2 < \\frac{273}{210} = \\frac{13}{10}$.\nJumlahnya:\n$$\\text{RK} < \\frac73 + \\frac{18}{11} + \\frac{17}{12} + \\frac{13}{10} = 6 + \\frac{151}{220}.$$\nSementara $F(17{,}5) = F\\!\\left(\\frac{35}{2}\\right) = 6 + {}^{2}\\log\\frac{35}{32} + {}^{3}\\log\\frac{35}{18}$. Dengan ekspansi binomial, $\\left(\\frac{35}{32}\\right)^9 = \\left(1+\\frac{3}{32}\\right)^9 > 1 + 9\\left(\\frac{3}{32}\\right) + 36\\left(\\frac{9}{1024}\\right) = 1 + \\frac{27}{32} + \\frac{81}{256} = \\frac{553}{256} > 2$, sehingga ${}^{2}\\log\\frac{35}{32} > \\frac19$. Juga $\\left(\\frac{35}{18}\\right)^2 = \\frac{1225}{324} > \\frac{15}{4}$ (sebab $1225 \\times 4 = 4900 > 4860 = 15 \\times 324$), maka $\\left(\\frac{35}{18}\\right)^4 > \\frac{225}{16} > 14$, sehingga $\\left(\\frac{35}{18}\\right)^5 > 14 \\cdot \\frac{35}{18} = \\frac{245}{9} > 27 = 3^3$ dan ${}^{3}\\log\\frac{35}{18} > \\frac35$. Jadi\n$$F(17{,}5) > 6 + \\frac19 + \\frac35 = 6 + \\frac{32}{45}.$$\nDengan perkalian silang, $\\frac{151}{220} < \\frac{32}{45}$ karena $151 \\times 9 = 1359 < 1408 = 32 \\times 44$, sehingga $F(a) = \\text{RK} < F(17{,}5) \\implies a < 17{,}5$.\n\nKarena $16{,}5 < a < 17{,}5$, bilangan bulat yang terdekat dengan $a$ adalah $17$.',
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
            'Perhatikan bahwa $307^2=94249$ adalah palindrom. Kita tunjukkan tidak ada $n$ dengan $308\\le n\\le599$ yang memenuhi.\n- Untuk $308\\le n\\le316$ ($n^2$ lima angka): $n^2$ berturut-turut adalah $94864$, $95481$, $96100$, $96721$, $97344$, $97969$, $98596$, $99225$, dan $99856$; tidak ada yang palindrom.\n- Untuk $317\\le n\\le599$: $100489\\le n^2\\le 358801$, sehingga $n^2$ berupa palindrom enam angka $\\overline{xyzzyx}$. Karena\n$$\\overline{xyzzyx}=100001x+10010y+1100z=11(9091x+910y+100z),$$\n$n^2$ habis dibagi $11$, dan karena $11$ prima maka $11\\mid n$. Digit pertama $x\\in\\{1,2,3\\}$ juga merupakan digit satuan $n^2$; karena digit satuan bilangan kuadrat hanya mungkin $0,1,4,5,6,9$, haruslah $x=1$. Akibatnya $n^2<200000$, yakni $n\\le447$ (sebab $447^2=199809$ dan $448^2=200704$), serta digit satuan $n$ adalah $1$ atau $9$.\nKelipatan $11$ pada selang $[317,447]$ yang berakhiran $1$ atau $9$ hanyalah $319=11\\cdot29$, $341=11\\cdot31$, dan $429=11\\cdot39$. Kuadratnya berturut-turut $101761$, $116281$, dan $184041$, semuanya bukan palindrom.\nJadi $n < 600$ terbesar yang memenuhi adalah $307$.',
          rubric: R4
        },
        {
          label: '2',
          marks: 4,
          prompt:
            'Diberikan jajar genjang $ABCD$ dengan $BC = 5$, $\\angle ABC < 90^\\circ$, dan $\\angle ACB > 90^\\circ$. Garis $AD$ dan sisi $CD$ memotong lingkaran luar $ABC$ berturut-turut di $P \\neq A$ dan $Q \\neq C$. Jika $CP = 10$ dan $CQ = 4$, tentukan panjang $AP$.',
          answer: '$7$',
          principle: 'Tali busur sejajar pada lingkaran dan kuasa titik terhadap lingkaran.',
          solution:
            'Karena $ABCD$ jajar genjang, $AD=BC=5$ dan $AD\\parallel BC$, sehingga $AP$ dan $BC$ adalah dua tali busur sejajar pada lingkaran luar $\\triangle ABC$. Oleh karena itu busur-busur di antara keduanya sama besar ($\\widehat{PB}=\\widehat{AC}$, dengan trapesium sama kaki siklis $PBCA$ yang berdiagonal $AB$ dan $CP$), sehingga $AB=CP=10$. Jadi $CD=AB=10$.\nSelanjutnya, sumbu simetri ruas $BC$ (garis bagi tegak lurus $BC$) merupakan sumbu simetri lingkaran luar $\\triangle ABC$. Karena $\\angle ACB>90^\\circ$, proyeksi $A$ pada garis $BC$ jatuh di luar ruas $BC$ di seberang $C$, sehingga $A$ berada di pihak $C$ terhadap sumbu simetri tersebut. Akibatnya titik potong kedua $P$ (pencerminan $A$ terhadap sumbu simetri) berada di pihak $B$ dari $A$ pada garis $AD$, sedangkan $\\overrightarrow{AD}=\\overrightarrow{BC}$ mengarah ke pihak $C$. Dengan demikian urutan titik pada garis $AD$ adalah $P, A, D$ (atau $D, A, P$), titik $D$ berada di luar lingkaran, dan $DP=DA+AP=5+AP$.\nDengan kuasa titik $D$ terhadap lingkaran:\n$$DA\\cdot DP=DQ\\cdot DC.$$\nKarena $Q$ terletak pada sisi $CD$, maka $DQ=DC-CQ=10-4=6$. Diperoleh $5\\cdot DP=6\\cdot10=60 \\implies DP=12$, sehingga $AP=DP-DA=12-5=7$.\nPemeriksaan konsistensi: dengan $\\theta=\\angle ABC$, $CQ=10-10\\cos\\theta=4$ memberi $\\cos\\theta=\\frac35>\\frac12$ (memenuhi $\\angle ABC<90^\\circ$ dan $AB\\cos\\theta=6>5=BC$, sehingga $\\angle ACB>90^\\circ$), dan $AP=20\\cos\\theta-5=7$.',
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
            'Ada $900$ bilangan tiga digit ($100$ sampai $999$), dan kelipatan $3$ di antaranya dari $102=3\\cdot34$ hingga $999=3\\cdot333$ ada sebanyak $333-34+1=300$ bilangan. Kita hitung banyak kelipatan $3$ tiga digit yang tidak memuat digit $1$.\n- Digit ratusan dari $\\{2,\\ldots,9\\}$ menurut sisa mod $3$: sisa $0$ ada $3$ pilihan ($3,6,9$), sisa $1$ ada $2$ pilihan ($4,7$), sisa $2$ ada $3$ pilihan ($2,5,8$).\n- Digit puluhan dan satuan masing-masing dari $\\{0,2,\\ldots,9\\}$ menurut sisa mod $3$: sisa $0$ ada $4$ pilihan ($0,3,6,9$), sisa $1$ ada $2$ pilihan ($4,7$), sisa $2$ ada $3$ pilihan ($2,5,8$).\nBanyak pasangan (puluhan, satuan) menurut jumlah sisanya mod $3$:\n- Jumlah sisa $0$ (dari $(0,0),(1,2),(2,1)$): $4\\cdot4+2\\cdot3+3\\cdot2=28$.\n- Jumlah sisa $1$ (dari $(0,1),(1,0),(2,2)$): $4\\cdot2+2\\cdot4+3\\cdot3=25$.\n- Jumlah sisa $2$ (dari $(0,2),(2,0),(1,1)$): $4\\cdot3+3\\cdot4+2\\cdot2=28$.\nAgar jumlah ketiga digit habis dibagi $3$, total bilangan tanpa digit $1$ adalah $3\\cdot28+2\\cdot28+3\\cdot25=84+56+75=215$.\nJadi banyak anggota $S$ tiga digit adalah $300-215=85$, sehingga peluangnya $\\frac{85}{900}=\\frac{17}{180}$ ($\\gcd(17,180)=1$). Diperoleh $a+b=17+180=197$.',
          rubric: R4
        },
        {
          label: '4',
          marks: 4,
          prompt:
            'Bilangan real $a, b, c, d$ memenuhi sistem persamaan\n$$\\begin{cases} -a - 27b - 8d = 1, \\\\ 8a + 64b + c + 27d = 0, \\\\ 27a + 125b + 8c + 64d = 1, \\\\ 64a + 216b + 27c + 125d = 8. \\end{cases}$$\nCarilah nilai dari $12a + 108b + 48d$.',
          answer: '$12$',
          principle: 'Identitas polinomial berderajat $\\le 3$ dengan empat akar berbeda dan turunannya.',
          solution:
            'Perhatikan koefisien pada keempat persamaan merupakan bilangan pangkat tiga berurutan. Pindahkan ruas kanan ke ruas kiri untuk membentuk polinomial berderajat paling tinggi $3$:\n$$P(x) = ax^3 + b(x+2)^3 + c(x-1)^3 + d(x+1)^3 - (x-2)^3.$$\nBerdasarkan sistem persamaan yang diberikan:\n- $P(1) = a + 27b + 8d + 1 = 0$ (dari $-a-27b-8d=1$),\n- $P(2) = 8a + 64b + c + 27d = 0$,\n- $P(3) = 27a + 125b + 8c + 64d - 1 = 0$,\n- $P(4) = 64a + 216b + 27c + 125d - 8 = 0$.\nKarena $\\deg P \\le 3$ dan $P$ memiliki empat akar berbeda ($x=1,2,3,4$), haruslah $P(x) \\equiv 0$ untuk semua $x\\in\\mathbb{R}$. Turunkan kedua ruas terhadap $x$:\n$$P\'(x) = 3ax^2 + 3b(x+2)^2 + 3c(x-1)^2 + 3d(x+1)^2 - 3(x-2)^2 \\equiv 0.$$\nSubstitusikan $x=1$ untuk melenyapkan suku $c$:\n$$P\'(1) = 3a + 27b + 0 + 12d - 3 = 0 \\implies 3a + 27b + 12d = 3.$$\nKalikan kedua ruas dengan $4$, diperoleh $12a + 108b + 48d = 12$.',
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
            'Dengan identitas Sophie Germain,\n$$n^4+4=(n^2+2)^2-(2n)^2=(n^2-2n+2)(n^2+2n+2)=\\big((n-1)^2+1\\big)\\big((n+1)^2+1\\big).$$\nJika $n$ genap, $n^4+4$ habis dibagi $4=2^2$ sehingga bukan perkalian dua prima berbeda. Untuk $n=1$, $1^4+4=5$ adalah bilangan prima (bukan perkalian dua prima). Untuk $n$ ganjil $\\ge3$, kedua faktor $A=(n-1)^2+1$ dan $B=(n+1)^2+1$ memenuhi $1<A<B$, sehingga $n^4+4$ merupakan perkalian dua prima berbeda jika dan hanya jika $A$ dan $B$ keduanya prima:\n- $n=3$: $A=5$ (prima), $B=17$ (prima): memenuhi.\n- $n=5$: $A=17$ (prima), $B=37$ (prima): memenuhi.\n- $n=7$: $A=37$, $B=65=5\\cdot13$ (komposit): tidak.\n- $n=9$: $A=65=5\\cdot13$ (komposit), $B=101$: tidak.\n- $n=11$: $A=101$, $B=145=5\\cdot29$ (komposit): tidak.\n- $n=13$: $A=145=5\\cdot29$ (komposit), $B=197$: tidak.\n- $n=15$: $A=197$ (tidak habis dibagi prima $\\le13<\\sqrt{197}$, jadi prima) dan $B=257$ (tidak habis dibagi prima $\\le13<\\sqrt{257}$, jadi prima): memenuhi.\nTiga bilangan asli terkecilnya adalah $3, 5, 15$, dengan jumlah $3+5+15=23$.',
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
            'Dengan teorema Pythagoras, $AB=\\sqrt{16^2-8^2}=\\sqrt{192}=8\\sqrt3$. Pasang $A=(0,0)$, $B=(8\\sqrt3,0)$, dan $C=(0,8)$. Karena $\\angle BAC=90^\\circ$, pusat lingkaran luar adalah titik tengah sisi miring $BC$, yakni $O=(4\\sqrt3,4)$ dengan jari-jari $8$.\n- Gradien $OA$ adalah $\\frac{4}{4\\sqrt3}=\\frac1{\\sqrt3}$, sehingga garis singgung di $A$ (tegak lurus $OA$) bergradien $-\\sqrt3$: $y=-\\sqrt3x$.\n- Gradien $OB$ adalah $\\frac{4-0}{4\\sqrt3-8\\sqrt3}=-\\frac1{\\sqrt3}$, sehingga garis singgung di $B$ (tegak lurus $OB$) bergradien $\\sqrt3$: $y=\\sqrt3(x-8\\sqrt3)=\\sqrt3x-24$.\nTitik potong $D$ memenuhi $-\\sqrt3x=\\sqrt3x-24 \\implies 2\\sqrt3x=24 \\implies x=4\\sqrt3$ dan $y=-12$, sehingga $D=(4\\sqrt3,-12)$.\nKarena $CE\\parallel AD$ (gradien $-\\sqrt3$), persamaan garis $CE$ melalui $C(0,8)$ adalah $y=8-\\sqrt3x$. Titik $E=(e,0)$ pada sisi $AB$ memenuhi $8-\\sqrt3e=0 \\implies e=\\frac{8}{\\sqrt3}=\\frac{8\\sqrt3}{3}\\in(0,8\\sqrt3)$.\nMaka\n$$DE^2=\\left(4\\sqrt3-\\frac8{\\sqrt3}\\right)^2+(-12-0)^2=\\left(\\frac4{\\sqrt3}\\right)^2+144=\\frac{16}3+144=\\frac{448}3.$$\nKarena $\\gcd(448,3)=1$, diperoleh $m+n=448+3=451$.',
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
            'Hitung peluang Jimmy menang dalam satu ronde (empat pasangan pilihan masing-masing berpeluang $\\frac14$):\n- Keduanya melempar dadu: hasil kali ganjil hanya jika kedua dadu ganjil ($\\frac12\\cdot\\frac12=\\frac14$), jadi Jimmy menang dengan peluang $1-\\frac14=\\frac34$.\n- Satu melempar dadu dan satu otomatis $1$ (ada $2$ kasus): hasil kali sama dengan mata dadu yang dilempar, genap dengan peluang $\\frac12$.\n- Keduanya otomatis $1$: hasil kali selalu $1$ (ganjil), Jimmy menang dengan peluang $0$.\n$$P(\\text{Jimmy menang ronde}) = \\frac14\\left(\\frac34+\\frac12+\\frac12+0\\right)=\\frac7{16},\\quad P(\\text{Jacob})=1-\\frac7{16}=\\frac9{16}.$$\nJimmy memenangkan $3$ ronde sebelum Jacob memenangkan $3$ ronde jika Jimmy mengakhiri lomba pada ronde ke-$(3+k)$ untuk $k\\in\\{0,1,2\\}$, yang berarti pada $2+k$ ronde pertama Jimmy menang $2$ kali dan Jacob menang $k$ kali, lalu Jimmy menang pada ronde ke-$(3+k)$:\n$$P=\\sum_{k=0}^{2}\\binom{2+k}{k}\\left(\\frac7{16}\\right)^3\\left(\\frac9{16}\\right)^k=\\left(\\frac7{16}\\right)^3\\left[1+3\\cdot\\frac9{16}+6\\cdot\\left(\\frac9{16}\\right)^2\\right]=\\frac{343}{4096}\\cdot\\frac{1174}{256}=\\frac{343}{4096}\\cdot\\frac{587}{128}=\\frac{201341}{524288}.$$\nKarena $524288=2^{19}$ dan $201341$ ganjil, $\\gcd(201341,524288)=1$. Jadi $p+q=201341+524288=725629$, bersisa $629$ saat dibagi $1000$.',
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
            'Misalkan $x=\\sqrt[3]a$ dan $y=\\sqrt[3]b$, sehingga $a=x^3$, $b=y^3$, $x-y=12$, dan $ab=(xy)^3$. Persamaan kedua menjadi $(xy)^3=\\left(\\frac{x^3+y^3+8}6\\right)^3$. Karena fungsi $t\\mapsto t^3$ satu-satu pada $\\mathbb{R}$, maka\n$$xy=\\frac{x^3+y^3+8}{6} \\iff x^3+y^3+2^3-3\\cdot x\\cdot y\\cdot2=0.$$\nDengan identitas pemfaktoran untuk $z=2$:\n$$\\frac12(x+y+2)\\left[(x-y)^2+(y-2)^2+(x-2)^2\\right]=0.$$\nKarena $x-y=12$, maka $(x-y)^2+(y-2)^2+(x-2)^2\\ge 12^2=144>0$, sehingga haruslah $x+y+2=0 \\implies x+y=-2$.\nDari $x-y=12$ dan $x+y=-2$ diperoleh $x=5$ dan $y=-7$, sehingga $a=5^3=125$ dan $b=(-7)^3=-343$.\nPemeriksaan: $ab=-42875=(-35)^3$ dan $\\left(\\frac{125-343+8}{6}\\right)^3=(-35)^3$. Jadi $a-b=125-(-343)=468$.',
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
            'Misalkan $v_2(x)$ menyatakan pangkat tertinggi $2$ yang membagi $x$. Dengan rumus Legendre $v_2(l!)=\\lfloor l/2\\rfloor+\\lfloor l/4\\rfloor+\\lfloor l/8\\rfloor$ untuk $l=1,\\ldots,10$, diperoleh nilai $v_2(l!)$ berturut-turut:\n$$0,\\;1,\\;1,\\;3,\\;3,\\;4,\\;4,\\;7,\\;7,\\;8.$$\nKarena $v_2$ bersifat aditif terhadap perkalian:\n- $v_2(f_2(j))=\\sum_{l=1}^{j}v_2(l!)$ merupakan jumlah kumulatif untuk $j=1,\\ldots,10$: $0,1,2,5,8,12,16,23,30,38$.\n- $v_2(f_3(i))=\\sum_{j=1}^{i}v_2(f_2(j))$ merupakan jumlah kumulatif berikutnya untuk $i=1,\\ldots,10$: $0,1,3,8,16,28,44,67,97,135$.\n- $N=v_2(f_4(10))=\\sum_{i=1}^{10}v_2(f_3(i))=0+1+3+8+16+28+44+67+97+135=399$.\nJumlah digit-digit $N$ adalah $3+9+9=21$.',
          rubric: R4
        },
        {
          label: '10',
          marks: 4,
          prompt:
            'Segiempat konveks $ABCD$ memiliki sudut lancip $\\angle A$ dan $\\angle D$, sudut tumpul $\\angle B$ dan $\\angle C$, $AB = BC = CD = 10$, dan $AC + BD = 24\\sqrt{2}$. $M$ dan $N$ berturut-turut merupakan titik tengah $AC$ dan $BD$. Jika $MN = 5$, berapakah $AD^2$?',
          answer: '$384$',
          principle: 'Koordinat dengan sudut $\\beta=\\angle B$ dan $\\gamma=\\angle C$, identitas trigonometri jumlah-ke-hasil kali, serta pembuktian eksistensi konveksitas dan kelancipan secara eksak.',
          solution:
            'Pasang $B=(0,0)$ dan $C=(10,0)$, dengan $A$ dan $D$ di setengah bidang atas ($y>0$). Dengan $\\beta=\\angle B\\in(90^\\circ,180^\\circ)$ dan $\\gamma=\\angle C\\in(90^\\circ,180^\\circ)$, diperoleh $A=10(\\cos\\beta,\\,\\sin\\beta)$ dan $D=(10-10\\cos\\gamma,\\,10\\sin\\gamma)$.\nPada $\\triangle ABC$ ($AB=BC=10$), $AC^2=100(2-2\\cos\\beta)=400\\sin^2\\frac\\beta2 \\implies AC=20\\sin\\frac\\beta2$; demikian pula $BD=20\\sin\\frac\\gamma2$.\nKarena $M=\\frac{A+C}2$ dan $N=\\frac{B+D}2$, vektor $M-N=\\frac{A+C-B-D}{2}=5(\\cos\\beta+\\cos\\gamma,\\;\\sin\\beta-\\sin\\gamma)$. Dari $MN=5$ ($MN^2=25$):\n$$(\\cos\\beta+\\cos\\gamma)^2+(\\sin\\beta-\\sin\\gamma)^2=1 \\implies 2+2\\cos(\\beta+\\gamma)=1 \\implies \\cos(\\beta+\\gamma)=-\\frac12.$$\nKarena $\\beta,\\gamma\\in(90^\\circ,180^\\circ)$, maka $180^\\circ<\\beta+\\gamma<360^\\circ$, sehingga $\\beta+\\gamma=240^\\circ$.\nMisalkan $u=\\frac\\beta2$ dan $v=\\frac\\gamma2$, maka $u+v=120^\\circ$. Dari $AC+BD=24\\sqrt2$:\n$$20(\\sin u+\\sin v)=40\\sin\\frac{u+v}2\\cos\\frac{u-v}2=40\\sin60^\\circ\\cos\\frac{u-v}2=20\\sqrt3\\cos\\frac{u-v}{2}=24\\sqrt2,$$\nsehingga $\\cos\\frac{u-v}2=\\frac{2\\sqrt6}5$ dan $\\cos(u-v)=2\\cos^2\\frac{u-v}2-1=2\\cdot\\frac{24}{25}-1=\\frac{23}{25}$.\nMaka $\\cos\\beta+\\cos\\gamma=2\\cos(u+v)\\cos(u-v)=2\\left(-\\frac12\\right)\\frac{23}{25}=-\\frac{23}{25}$. Hitung $AD^2$:\n$$AD^2=100\\left[(\\cos\\beta+\\cos\\gamma-1)^2+(\\sin\\beta-\\sin\\gamma)^2\\right]=100\\left[\\underbrace{(\\cos\\beta+\\cos\\gamma)^2+(\\sin\\beta-\\sin\\gamma)^2}_{=1}-2(\\cos\\beta+\\cos\\gamma)+1\\right]=100\\left(2+\\frac{46}{25}\\right)=384.$$\n\n**Pembuktian eksistensi dan ketajaman sudut (tanpa hampiran desimal):**\n1. Karena $\\left(\\frac{2\\sqrt6}5\\right)^2=\\frac{24}{25}<1$, terdapat sudut dengan $\\cos\\frac{u-v}2=\\frac{2\\sqrt6}5\\in(0,1)$. Tanpa mengurangi keumuman, ambil $u\\ge v$. Perhatikan $\\cos(u-v)=\\frac{23}{25}$ dan $\\cos30^\\circ=\\frac{\\sqrt3}2$:\n$$\\left(\\frac{23}{25}\\right)^2=\\frac{529}{625}>\\frac34=\\left(\\frac{\\sqrt3}2\\right)^2\\quad(\\text{sebab }529\\times4=2116>1875=3\\times625),$$\nsehingga $0^\\circ<u-v<30^\\circ$. Bersama $u+v=120^\\circ$, diperoleh $u\\in(60^\\circ,75^\\circ)$ dan $v\\in(45^\\circ,60^\\circ)$, jadi $\\beta=2u\\in(120^\\circ,150^\\circ)$ dan $\\gamma=2v\\in(90^\\circ,120^\\circ)$ benar-benar tumpul.\n2. Karena $\\beta,\\gamma\\in(90^\\circ,180^\\circ)$, berlaku $\\cos\\beta<0$, $\\cos\\gamma<0$, dan $\\sin\\beta,\\sin\\gamma>0$. Hasil kali silang berorientasi pada keempat titik sudut (berlawanan arah jarum jam $A\\to B\\to C\\to D\\to A$) semuanya positif: $\\overrightarrow{BC}\\times\\overrightarrow{BA}=100\\sin\\beta>0$, $\\overrightarrow{CD}\\times\\overrightarrow{CB}=100\\sin\\gamma>0$, $\\overrightarrow{AB}\\times\\overrightarrow{AD}=100\\big(\\sin\\beta-\\sin(\\beta+\\gamma)\\big)=100\\left(\\sin\\beta+\\frac{\\sqrt3}2\\right)>0$, dan $\\overrightarrow{DA}\\times\\overrightarrow{DC}=100\\left(\\sin\\gamma+\\frac{\\sqrt3}2\\right)>0$, sehingga $ABCD$ segiempat konveks.\n3. Terakhir, periksa kelancipan $\\angle A$ dan $\\angle D$ melalui hasil kali titik:\n$$\\overrightarrow{AB}\\cdot\\overrightarrow{AD}=100\\big(1-\\cos\\beta+\\cos(\\beta+\\gamma)\\big)=100\\left(\\frac12-\\cos\\beta\\right)>0,$$\n$$\\overrightarrow{DC}\\cdot\\overrightarrow{DA}=100\\big(1-\\cos\\gamma+\\cos(\\beta+\\gamma)\\big)=100\\left(\\frac12-\\cos\\gamma\\right)>0,$$\nkarena $\\cos\\beta<0$ dan $\\cos\\gamma<0$. Jadi $\\cos\\angle A>0$ dan $\\cos\\angle D>0$, memastikan $\\angle A,\\angle D<90^\\circ$ secara eksak.',
          rubric: R4
        }
      ]
    }
  ]
};
