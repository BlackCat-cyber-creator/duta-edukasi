/**
 * Paket Soal Terstruktur: OSN-K Matematika SMP 2026 (25 soal pilihan ganda)
 * Sumber: osnk_mat_smp_2026.pdf (naskah soal diketik ulang). Soal bergambar dinyatakan ulang dalam teks.
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-mat-smp-2026',
  slug: 'osnk-matematika-smp-2026',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'OSN-K Matematika SMP 2026',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp8-bab1-bilangan-berpangkat',
    'smp8-bab2-teorema-pythagoras',
    'smp8-bab6-statistika'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SMP 2026',
  totalMarks: 25,
  instructions:
    'Kerjakan seluruh 25 soal pilihan ganda. Setiap jawaban benar bernilai 1 poin. Naskah ini merupakan soal OSN-K Matematika SMP 2026 yang diketik ulang; soal yang aslinya bergambar telah dinyatakan ulang dalam teks.',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'osnk_mat_smp_2026.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 25,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (25 soal, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            '$\\text{FPB}(m,n) + \\text{KPK}(m,n) = 26$. Berapa pasangan terurut $(m,n)$ yang memenuhi?\n\nA. $4$\nB. $5$\nC. $6$\nD. $7$',
          answer: 'D. $7$',
          principle: 'Jika $\\gcd(m,n)=g$, maka $m=gx$, $n=gy$ dengan $\\gcd(x,y)=1$ dan $\\text{KPK}=gxy$.',
          solution:
            'Tulis $m = gx$, $n = gy$ dengan $\\gcd(x,y)=1$. Maka $\\text{FPB}=g$ dan $\\text{KPK}=gxy$, sehingga $g(1+xy) = 26$ dan $g \\in \\{1, 2, 13, 26\\}$.\n- $g=1$: $xy=25$, pasangan saling prima terurut: $(1,25),(25,1)$ ($(5,5)$ tidak saling prima): $2$ pasangan.\n- $g=2$: $xy=12$: $(1,12),(12,1),(3,4),(4,3)$: $4$ pasangan.\n- $g=13$: $xy=1$: $(1,1)$: $1$ pasangan.\n- $g=26$: $xy=0$ tidak mungkin.\nTotal $2+4+1=7$, yaitu $(m,n) = (1,25),(25,1),(2,24),(24,2),(6,8),(8,6),(13,13)$.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Jika\n$$A = \\frac{1}{9+\\sqrt{73}} + \\frac{1}{\\sqrt{73}+\\sqrt{65}} + \\frac{1}{\\sqrt{65}+\\sqrt{57}} + \\frac{1}{\\sqrt{57}+\\sqrt{49}}$$\ndan\n$$B = \\frac{1}{81 \\cdot 73} + \\frac{1}{73 \\cdot 65} + \\frac{1}{65 \\cdot 57} + \\frac{1}{57 \\cdot 49},$$\nmaka nilai $\\left(A^2\\sqrt{B}\\right)^{-1}$ adalah ....\n\nA. $504$\nB. $504\\sqrt{2}$\nC. $126$\nD. $126\\sqrt{2}$',
          answer: 'A. $504$',
          principle: 'Merasionalkan penyebut dan deret teleskopik.',
          solution:
            'Tulis $9=\\sqrt{81}$. Selisih kuadrat bilangan di bawah akar berurutan adalah $8$, sehingga $\\frac{1}{\\sqrt{p}+\\sqrt{q}} = \\frac{\\sqrt{p}-\\sqrt{q}}{p-q} = \\frac{\\sqrt p - \\sqrt q}{8}$ untuk $p-q=8$. Maka\n$$A = \\frac{\\sqrt{81}-\\sqrt{73}+\\sqrt{73}-\\sqrt{65}+\\sqrt{65}-\\sqrt{57}+\\sqrt{57}-\\sqrt{49}}{8} = \\frac{9-7}{8} = \\frac14.$$\nUntuk $B$: $\\frac{1}{73\\cdot 81} = \\frac18\\left(\\frac1{73}-\\frac1{81}\\right)$, dan seterusnya, sehingga\n$$B = \\frac18\\left(\\frac1{49}-\\frac1{81}\\right) = \\frac18 \\cdot \\frac{32}{3969} = \\frac{4}{3969}, \\quad \\sqrt{B} = \\frac{2}{63}.$$\nJadi $A^2\\sqrt B = \\frac1{16}\\cdot\\frac{2}{63} = \\frac1{504}$ dan kebalikannya adalah $504$.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Bilangan bulat $x$ dan $y$ memenuhi $-6 \\le x \\le 4$ dan $5 \\le y \\le 10$. Jika $z = x^2 - y$, maka nilai $z$ yang mungkin adalah ....\n\nA. $-10 \\le z \\le 31$\nB. $-5 \\le z \\le 26$\nC. $-46 \\le z \\le 11$\nD. $11 \\le z \\le 31$',
          answer: 'A. $-10 \\le z \\le 31$',
          principle: 'Menentukan nilai minimum dan maksimum $x^2 - y$ dari batas variabel.',
          solution:
            'Untuk $-6 \\le x \\le 4$ bulat, $x^2$ bernilai antara $0$ (saat $x=0$) dan $36$ (saat $x=-6$). Untuk $5\\le y\\le 10$, $y$ bernilai antara $5$ dan $10$.\nNilai terkecil $z = 0 - 10 = -10$ dan nilai terbesar $z = 36 - 5 = 31$. Jadi $z$ berada pada selang $-10 \\le z \\le 31$ (kedua batas tercapai). Hanya pilihan A yang memuat batas bawah dan batas atas yang benar.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Diketahui\n$$f(n) = \\frac{4060}{n^2+7n+12}.$$\nNilai $f(1)+f(2)+f(3)+\\cdots+f(2026)$ adalah ....\n\nA. $1011$\nB. $1013$\nC. $2026$\nD. $4060$',
          answer: 'B. $1013$',
          principle: 'Pecahan parsial dan jumlah teleskopik.',
          solution:
            '$n^2+7n+12 = (n+3)(n+4)$, sehingga $f(n) = 4060\\left(\\frac{1}{n+3}-\\frac{1}{n+4}\\right)$. Jumlahnya teleskopik:\n$$\\sum_{n=1}^{2026} f(n) = 4060\\left(\\frac14 - \\frac{1}{2030}\\right) = 4060 \\cdot \\frac{2026}{8120} = \\frac{2026}{2} = 1013.$$',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Terdapat $n$ bilangan bulat positif berbeda yang jumlahnya $2026$. Setiap bilangan tersebut hanya memiliki tepat satu faktor prima yaitu $p$. Nilai $n$ adalah ....\n\nA. $7$\nB. $8$\nC. $9$\nD. $10$',
          answer: 'B. $8$',
          principle: 'Bilangan dengan tepat satu faktor prima $p$ berbentuk $p^k$ ($k\\ge1$); untuk $p=2$ berlaku keunikan representasi biner.',
          solution:
            'Setiap bilangan berbentuk $p^k$ dengan $k \\ge 1$, sehingga jumlahnya habis dibagi $p$. Karena $2026 = 2 \\times 1013$ dan $1013$ prima, maka $p=2$ atau $p=1013$.\nJika $p=1013$, bilangan yang mungkin $1013, 1013^2, \\ldots$ dan jumlah beberapa bilangan berbeda tidak mungkin tepat $2026$ (hanya $1013$ yang $\\le 2026$). Jadi $p=2$.\nMaka $2026$ adalah jumlah pangkat dua berbeda: dalam biner $2026 = 1024+512+256+128+64+32+8+2$, delapan suku, dan representasi biner tunggal. Jadi $n=8$.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Diketahui $a,b,c$ adalah bilangan real tak nol berbeda yang memenuhi\n$$a+\\frac{1}{b} = b+\\frac{1}{c} = c+\\frac{1}{a}.$$\nNilai $(abc)^2$ adalah ....\n\nA. $0$\nB. $0{,}5$\nC. $1$\nD. $2$',
          answer: 'C. $1$',
          principle: 'Mengalikan ketiga selisih yang diperoleh dari kesamaan siklik.',
          solution:
            'Dari $a+\\frac1b = b+\\frac1c$: $a-b = \\frac1c-\\frac1b = \\frac{b-c}{bc}$. Dari $b+\\frac1c = c+\\frac1a$: $b-c = \\frac{c-a}{ca}$. Dari $c+\\frac1a = a+\\frac1b$: $c-a = \\frac{a-b}{ab}$.\nKalikan ketiganya:\n$$(a-b)(b-c)(c-a) = \\frac{(b-c)(c-a)(a-b)}{(abc)^2}.$$\nKarena $a,b,c$ berbeda, $(a-b)(b-c)(c-a)\\ne0$, sehingga $(abc)^2=1$.\nContoh yang ada: $a=-5$, $b=\\frac14$, $c=-\\frac45$ memberi ketiga bentuk sama dengan $-1$ dan $abc=1$.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Di rumah Pak Budi yang ditinggal pergi berlibur, lampu teras diberi saklar otomatis yang akan mulai menyala pada pukul 18.30, atau 19.00, atau 19.30, atau 20.00, atau 20.30, atau 21.00 secara acak (keenam pilihan sama mungkin). Lampu tersebut kemudian akan otomatis padam pada suatu titik waktu antara pukul 23.00 sampai dengan pukul 01.00 pagi harinya (tersebar merata pada selang tersebut). Misalkan diketahui pada malam ini lampu tersebut menyala selama $t$ jam. Peluang bahwa lampu menyala selama $4<t<5$ adalah ....\n\nA. $\\frac{1}{2}$\nB. $\\frac{1}{3}$\nC. $\\frac{3}{4}$\nD. $\\frac{1}{5}$',
          answer: 'B. $\\frac{1}{3}$',
          principle: 'Peluang total: rata-rata peluang bersyarat atas setiap waktu mulai, dengan waktu padam berdistribusi seragam.',
          solution:
            'Ukur waktu dalam jam dengan waktu padam $T$ seragam pada $[23, 25]$ (panjang $2$). Waktu menyala $t = T - s$ untuk waktu mulai $s$.\n- $s=18{,}5$: $t \\in [4{,}5;\\,6{,}5]$, $P(4<t<5) = \\frac{0{,}5}{2}=\\frac14$.\n- $s=19$: $t\\in[4,6]$, $P=\\frac12$.\n- $s=19{,}5$: $t\\in[3{,}5;\\,5{,}5]$, $P=\\frac{1}{2}$ (untuk $4<t<5$).\n- $s=20$: $t\\in[3,5]$, $P=\\frac12$.\n- $s=20{,}5$: $t\\in[2{,}5;\\,4{,}5]$, $P=\\frac{0{,}5}{2}=\\frac14$.\n- $s=21$: $t\\in[2,4]$, $P=0$.\nRata-rata: $\\frac16\\left(\\frac14+\\frac12+\\frac12+\\frac12+\\frac14+0\\right)=\\frac16\\cdot 2=\\frac13$.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Diketahui\n$$f(n) = \\begin{cases} 0, & \\text{untuk } n \\text{ kelipatan } 5, \\\\ n^n, & \\text{untuk } n \\text{ yang lain.} \\end{cases}$$\nTentukan digit satuan dari $f(1)+f(2)+f(3)+\\cdots+f(2026)$.\n\nA. $2$\nB. $4$\nC. $6$\nD. $8$',
          answer: 'D. $8$',
          principle: 'Digit satuan $n^n$ periodik dengan periode $20$ terhadap $n$ (basis modulo $10$, pangkat modulo $4$).',
          solution:
            'Digit satuan $n^n$ ditentukan oleh $n \\bmod 10$ (basis) dan $n \\bmod 4$ (pangkat), sehingga periodik dengan periode $\\text{KPK}(10,4)=20$. Untuk $n \\equiv 1,2,\\ldots,20 \\pmod{20}$, digit satuan $f(n)$ adalah\n$$1,4,7,6,0,6,3,6,9,0,1,6,3,6,0,6,7,4,9,0.$$\n(Contoh: $3^3=27\\to7$; $7^7$: $7^3\\to3$; $8^8$: $8^4\\to6$; $12^{12}$: $2^{12}\\to6$; $18^{18}$: $8^2\\to4$; kelipatan $5$ bernilai $0$.) Jumlah satu periode $=84$.\n$2026 = 20\\times101 + 6$: ada $101$ periode penuh ($n=1,\\ldots,2020$) dengan jumlah $101\\times 84 = 8484$, ditambah $f(2021)+\\cdots+f(2026)$ dengan digit $1+4+7+6+0+6 = 24$.\nTotal berdigit satuan sama dengan digit satuan $8484+24 = 8508$, yaitu $8$.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Jika tripel bilangan kubik adalah jumlahan pangkat tiga dari tiga bilangan bulat berurutan. Sebagai contoh $1^3+2^3+3^3=36$ merupakan tripel bilangan kubik terkecil. Maka nilai tripel bilangan kubik $5$ digit terkecil yang merupakan kelipatan $10$ adalah ....\n\nA. $12240$\nB. $24120$\nC. $42420$\nD. $81810$',
          answer: 'B. $24120$',
          principle: 'Jumlah tiga kubus berurutan $(m-1)^3+m^3+(m+1)^3 = 3m^3+6m$.',
          solution:
            'Dengan tiga bilangan berurutan $m-1, m, m+1$: $(m-1)^3+m^3+(m+1)^3 = 3m^3+6m$.\n- $m=14$: $8316$ (masih $4$ digit).\n- $m=15$: $10215$; $m=16$: $12384$; $m=17$: $14841$; $m=18$: $17604$; $m=19$: $20691$ (tidak ada yang berakhir $0$).\n- $m=20$: $3\\cdot8000+120 = 24120$, kelipatan $10$.\nKarena nilainya naik terhadap $m$, tripel $5$ digit terkecil yang kelipatan $10$ adalah $24120$.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Jika $a,b,c,d$ adalah empat bilangan real berbeda yang memenuhi persamaan\n$$(7+4\\sqrt{3})^{x^4-8} + (7-4\\sqrt{3})^{x^4-8} = 14,$$\nnilai dari\n$$\\frac{a^2-1}{a^2+1} + \\frac{b^2-1}{b^2+1} + \\frac{c^2-1}{c^2+1} + \\frac{d^2-1}{d^2+1}$$\nadalah ....\n\nA. $\\frac{11-2\\sqrt{7}}{3}$\nB. $\\frac{13-2\\sqrt{7}}{3}$\nC. $\\frac{11+2\\sqrt{7}}{3}$\nD. $\\frac{13+2\\sqrt{7}}{3}$',
          answer: 'A. $\\frac{11-2\\sqrt{7}}{3}$',
          principle: 'Karena $(7+4\\sqrt3)(7-4\\sqrt3)=1$, persamaan berbentuk $t+\\frac1t=14$.',
          solution:
            'Misalkan $t=(7+4\\sqrt3)^{x^4-8}$; karena $(7+4\\sqrt3)(7-4\\sqrt3)=1$, $(7-4\\sqrt3)^{x^4-8}=\\frac1t$. Maka $t+\\frac1t=14$, sehingga $t=7\\pm4\\sqrt3$, yaitu $x^4-8=\\pm1$.\nJadi $x^4=9$ atau $x^4=7$. Empat akar real berbeda: $x=\\pm\\sqrt3$ dan $x=\\pm\\sqrt[4]{7}$, sehingga kuadratnya adalah $3,3,\\sqrt7,\\sqrt7$.\n$$\\text{Jumlah} = 2\\cdot\\frac{3-1}{3+1} + 2\\cdot\\frac{\\sqrt7-1}{\\sqrt7+1} = 1 + 2\\cdot\\frac{(\\sqrt7-1)^2}{6} = 1 + \\frac{8-2\\sqrt7}{3} = \\frac{11-2\\sqrt7}{3}.$$',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Diketahui suatu data $10$ bilangan bulat dengan bilangan terkecil $1900$ dan rata-ratanya $2026$. Jika ditambahkan data ke-$11$, maka rata-ratanya berkurang $60$. Nilai jangkauan terbesar yang mungkin dari ke-$11$ data tersebut adalah ....\n\nA. $1260$\nB. $1366$\nC. $1794$\nD. $2574$',
          answer: 'C. $1794$',
          principle: 'Jumlah data = rata-rata $\\times$ banyak data; jangkauan = data terbesar $-$ data terkecil.',
          solution:
            'Jumlah $10$ data $=20260$. Rata-rata baru $=1966$, jumlah $11$ data $=11\\times1966=21626$, sehingga data ke-$11$ adalah $21626-20260=1366$. Nilai ini lebih kecil dari $1900$, jadi data terkecil dari $11$ data adalah $1366$.\nData terbesar dari $10$ data awal maksimum bila sembilan data lainnya sekecil mungkin, yaitu masing-masing $1900$: $20260-9\\times1900 = 3160$.\nJangkauan terbesar $=3160-1366=1794$.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Suatu barisan bilangan genap positif dapat ditulis sebagai berikut:\n$$2,4,2,4,6,4,2,4,6,8,6,4,\\ldots$$\ndan dapat dikelompokkan sebagai berikut:\n$$\\{2,4\\},\\ \\{2,4,6,4\\},\\ \\{2,4,6,8,6,4\\},\\ldots$$\nSuku ke-$2026$ barisan bilangan tersebut adalah ....\n\nA. $46$\nB. $88$\nC. $90$\nD. $92$',
          answer: 'D. $92$',
          principle: 'Pola kelompok: kelompok ke-$k$ memuat $2k$ suku; jumlah suku sampai kelompok ke-$K$ adalah $K(K+1)$.',
          solution:
            'Kelompok ke-$k$ naik dari $2$ sampai $2(k+1)$ ($k+1$ suku) lalu turun dari $2k$ sampai $4$ ($k-1$ suku), jadi memuat $2k$ suku. Sampai kelompok ke-$K$ terdapat $2+4+\\cdots+2K = K(K+1)$ suku.\n$44\\cdot45=1980 < 2026 \\le 45\\cdot46=2070$. Jadi suku ke-$2026$ ada di kelompok ke-$45$ pada urutan ke-$2026-1980=46$.\nKelompok ke-$45$ naik $2,4,\\ldots,92$ (sebanyak $46$ suku), sehingga suku ke-$46$ adalah $92$.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Jumlah bilangan asli $n < 200$ yang mungkin sehingga terdapat bilangan asli $k$ dan $m$ yang memenuhi persamaan\n$$\\frac{n^2+1}{n+k} = k \\quad \\text{dan} \\quad \\frac{n^3-k}{n+k} = m$$\ndengan $n-k$ ganjil adalah ....\n\nA. $4$\nB. $24$\nC. $210$\nD. $609$',
          answer: 'C. $210$',
          principle: 'Persamaan $n^2-nk-k^2=-1$ hanya dipenuhi oleh pasangan bilangan Fibonacci berurutan.',
          solution:
            'Persamaan pertama: $n^2+1 = k(n+k)$, yaitu $n^2-nk-k^2=-1$. Jika $(n,k)$ penyelesaian dengan $n>k$, maka $(k,\\,n-k)$ membuat nilai $n^2-nk-k^2$ berganti tanda; dengan penurunan ini, semua penyelesaian bulat positif adalah pasangan Fibonacci berurutan $(F_{j+1},F_j)$ dengan $j$ ganjil: $(1,1),(3,2),(8,5),(21,13),(55,34),(144,89),(377,233),\\ldots$. Untuk $n<200$ yang tersisa: $n=1,3,8,21,55,144$.\nSyarat $n-k$ ganjil: $1-1=0$ (genap, gugur); $3-2=1$, $8-5=3$, $55-34=21$, $144-89=55$ (ganjil, lolos); $21-13=8$ (genap, gugur).\nSyarat kedua dipenuhi: $m=\\frac{27-2}{5}=5$, $\\frac{512-5}{13}=39$, $\\frac{166375-34}{89}=1869$, $\\frac{2985984-89}{233}=12815$ (semuanya bilangan asli).\nJumlah $n$: $3+8+55+144=210$.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Diberikan dua persegi $ABCD$ dan $DEFG$ dengan titik sudut yang sama di $D$; kedua persegi dinamai searah, yaitu urutan $A \\to B \\to C \\to D$ dan $D \\to E \\to F \\to G$ sama-sama berlawanan arah jarum jam. Titik $E$ dan $F$ berada di dalam daerah $ABCD$. Panjang ruas garis yang menghubungkan $B$ dan $E$ adalah $3$ cm. Nilai $\\frac{BF}{AE}$ adalah ....\n\nA. $\\sqrt{2}$\nB. $\\sqrt{3}$\nC. $4$\nD. $5$',
          answer: 'A. $\\sqrt{2}$',
          principle: 'Rotasi 45 derajat disertai perbesaran $\\sqrt2$ (kesebangunan putar) pada diagonal persegi.',
          solution:
            '$DB$ adalah diagonal $ABCD$ sehingga $DB=\\sqrt2\\,DA$ dan $\\angle ADB=45^\\circ$. Demikian pula $DF$ diagonal $DEFG$: $DF=\\sqrt2\\,DE$ dan $\\angle EDF=45^\\circ$, dengan arah putar yang sama.\nJadi rotasi berpusat di $D$ sebesar $45^\\circ$ yang diikuti perbesaran $\\sqrt2$ memetakan $A\\mapsto B$ dan $E\\mapsto F$. Akibatnya ruas $AE$ dipetakan ke ruas $BF$, sehingga $BF=\\sqrt2\\,AE$ dan $\\frac{BF}{AE}=\\sqrt2$. Data $BE=3$ cm tidak diperlukan.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Persegi panjang $ABCD$ dengan $AD=36$ cm. Lingkaran $p$ dengan jari-jari $10$ cm menyinggung sisi $AD$ dan $CD$. Lingkaran $q$ dengan jari-jari $16$ cm menyinggung $AB$ dan $BC$ serta menyinggung lingkaran $p$. Selisih panjang sisi $AB$ dan $BC$ adalah ....\n\nA. $10$ cm\nB. $14$ cm\nC. $16$ cm\nD. $24$ cm',
          answer: 'B. $14$ cm',
          principle: 'Dua lingkaran bersinggungan luar: jarak pusat sama dengan jumlah jari-jari; gunakan Teorema Pythagoras.',
          solution:
            'Pasang koordinat $D=(0,0)$, $A=(0,36)$, $C=(w,0)$, $B=(w,36)$ dengan $AB=w$. Lingkaran $p$ menyinggung $AD$ ($x=0$) dan $CD$ ($y=0$): pusat $(10,10)$. Lingkaran $q$ menyinggung $AB$ ($y=36$) dan $BC$ ($x=w$): pusat $(w-16,\\,20)$.\nBersinggungan luar: jarak pusat $=10+16=26$:\n$$(w-26)^2 + (20-10)^2 = 26^2 \\implies (w-26)^2 = 576 \\implies w = 50 \\text{ atau } w=2.$$\n$w=2$ mustahil (lingkaran $q$ berdiameter $32$). Jadi $AB=50$, $BC=AD=36$, selisih $=14$ cm. (Singgungan dalam memerlukan jarak $6$, tidak mungkin karena selisih tinggi pusat sudah $10$.)',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Persegi $ABCD$ (dengan $A$ kiri bawah, $B$ kanan bawah, $C$ kanan atas, $D$ kiri atas) dibagi menjadi $16$ persegi kecil yang kongruen, membentuk kisi $4\\times4$. Setiap persegi kecil akan diwarnai dengan satu warna secara acak dari dua warna yang tersedia, merah atau hitam. Peluang di setiap baris dan kolom terdapat tepat dua persegi berwarna merah dapat dinyatakan dalam pecahan sederhana $\\frac{m}{2^n}$, nilai $m+n$ adalah ....\n\nA. $60$\nB. $90$\nC. $93$\nD. $106$',
          answer: 'A. $60$',
          principle: 'Pencacahan matriks biner $4\\times4$ dengan jumlah tiap baris dan kolom sama dengan $2$.',
          solution:
            'Total pewarnaan $=2^{16}$. Hitung pewarnaan dengan tiap baris dan kolom tepat $2$ merah. Baris 1: $\\binom42=6$ cara. Baris 2 menurut banyak kolom merah yang sama dengan baris 1:\n- sama persis ($1$ cara): sisa kebutuhan kolom $(0,0,2,2)$, baris 3 dan 4 sama-sama $(0,0,1,1)$: $1$ cara;\n- tumpang tindih $1$ kolom ($2\\times2=4$ cara): sisa kebutuhan $(0,1,1,2)$, satu kolom perlu di kedua baris dan dua kolom lain masing-masing sekali: $2$ cara;\n- saling komplemen ($1$ cara): sisa kebutuhan $(1,1,1,1)$, baris 3 dan 4 saling komplemen: $\\binom42=6$ cara.\nUntuk tiap baris 1: $1\\cdot1+4\\cdot2+1\\cdot6=15$ cara. Total $6\\times15=90$.\nPeluang $=\\frac{90}{2^{16}}=\\frac{45}{2^{15}}$, sehingga $m=45$, $n=15$, dan $m+n=60$.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            '$ABCD$ adalah sebuah persegi panjang dengan $A$ kiri bawah, $B$ kanan bawah, $C$ kanan atas, dan $D$ kiri atas. Titik $Q$ terletak pada sisi $CD$ dan titik $P$ pada sisi $BC$. Persegi panjang dilipat sepanjang garis $PQ$ sehingga titik $C$ jatuh tepat pada sebuah titik $C\'$ di sisi $AB$. Diketahui $\\angle PQC = 30^\\circ$ dan $BC=9$ cm. Panjang $PQ$ adalah ....\n\nA. $12$ cm\nB. $15$ cm\nC. $6\\sqrt{3}$ cm\nD. $9\\sqrt{3}$ cm',
          answer: 'A. $12$ cm',
          principle: 'Pelipatan adalah pencerminan terhadap garis lipatan: panjang dan sudut dipertahankan.',
          solution:
            'Pencerminan terhadap $PQ$ memetakan $C$ ke $C\'$, sehingga $QC\'=QC$ dan $\\angle PQC\'=\\angle PQC=30^\\circ$. Maka $\\angle CQC\'=60^\\circ$.\n$Q$ berada pada ketinggian $BC=9$ di atas $AB$, dan $C\'$ pada $AB$. Garis $QC\'$ membentuk sudut $60^\\circ$ dengan sisi atas, sehingga $QC\'\\sin60^\\circ=9$, yaitu $QC\'=6\\sqrt3$ dan $QC=6\\sqrt3$.\nPada segitiga siku-siku $QCP$ (siku-siku di $C$) dengan $\\angle PQC=30^\\circ$: $PQ=\\frac{QC}{\\cos30^\\circ}=\\frac{6\\sqrt3}{\\sqrt3/2}=12$ cm.\nPemeriksaan: $PC=QC\\tan30^\\circ=6$, $PB=3$, $C\'B=6\\sqrt3-3\\sqrt3=3\\sqrt3$, dan $PB^2+C\'B^2=9+27=36=(PC\')^2$.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Himpunan $A$ adalah himpunan yang beranggota $10$ bilangan bulat yang diambil dari bilangan $1$ sampai dengan $20$, dengan ketentuan:\n- Rata-rata anggota himpunan $A$ adalah $10{,}5$.\n- Terdapat $5$ pasangan anggota $A$ yang masing-masing jumlahnya $21$.\n\nBanyaknya himpunan $A$ yang mungkin adalah ....\n\nA. $24$\nB. $186$\nC. $208$\nD. $252$',
          answer: 'D. $252$',
          principle: 'Setiap bilangan $x$ hanya berpasangan jumlah $21$ dengan $21-x$, sehingga pasangan-pasangan itu saling lepas.',
          solution:
            'Bilangan $1$ sampai $20$ terbagi menjadi $10$ pasangan berjumlah $21$: $(1,20),(2,19),\\ldots,(10,11)$. Setiap bilangan hanya punya satu mitra, sehingga $5$ pasangan anggota $A$ yang berjumlah $21$ saling lepas dan memakai $10$ anggota, yaitu seluruh anggota $A$. Jadi $A$ adalah gabungan $5$ dari $10$ pasangan tersebut.\nSyarat rata-rata terpenuhi otomatis: jumlahnya $5\\times21=105$, rata-rata $10{,}5$.\nBanyak himpunan: $\\binom{10}{5}=252$.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Banyaknya pasangan bilangan real $(a,b)$ yang mengakibatkan himpunan penyelesaian sistem persamaan\n$$\\begin{cases} x+y = \\sqrt{2xy+4x+4y-4}, \\\\ ax+by = 1 \\end{cases}$$\ntidak kosong dan menyebabkan semua $(x,y)$ merupakan pasangan bilangan bulat adalah ....\n\nA. $4$\nB. $6$\nC. $8$\nD. $10$',
          answer: 'C. $8$',
          principle: 'Persamaan pertama menggambarkan sebuah lingkaran; persamaan kedua sebuah garis yang tidak melalui titik asal.',
          solution:
            'Kuadratkan persamaan pertama (dengan $x+y\\ge0$): $(x+y)^2=2xy+4x+4y-4 \\implies x^2+y^2-4x-4y+4=0 \\implies (x-2)^2+(y-2)^2=4$. Semua titik lingkaran ini punya $x+y\\ge4-2\\sqrt2>0$, jadi persamaan pertama setara dengan lingkaran tersebut.\nTitik bulat pada lingkaran: $(0,2),(4,2),(2,0),(2,4)$.\nGaris $ax+by=1$ (tidak melalui titik asal) harus memotong lingkaran hanya di titik-titik bulat tersebut:\n- Memotong di dua titik bulat: ada $\\binom42=6$ garis ($y=2$, $x=2$, $x+y=2$, $x+y=6$, $x-y=-2$, $x-y=2$), semuanya tidak melalui titik asal, sehingga masing-masing memberi satu pasangan $(a,b)$.\n- Menyinggung di satu titik bulat: garis singgung di $(4,2)$ adalah $x=4$ (yaitu $a=\\frac14$, $b=0$) dan di $(2,4)$ adalah $y=4$ (yaitu $a=0$, $b=\\frac14$), keduanya valid; garis singgung di $(0,2)$ ($x=0$) dan $(2,0)$ ($y=0$) melalui titik asal sehingga tidak berbentuk $ax+by=1$.\nTotal $6+2=8$ pasangan $(a,b)$.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Diberikan persegi $ABCD$ dimana $AB$ sejajar sumbu $X$ dan $AD$ sejajar sumbu $Y$. Jika $B(10,15)$ dan $D(30,35)$, persegi tersebut dipotong oleh garis lurus dengan persamaan $3x+2y=78$, maka luas segilima yang terbentuk adalah ....\n\nA. $173$\nB. $273$\nC. $373$\nD. $393$',
          answer: 'C. $373$',
          principle: 'Luas segilima = luas persegi dikurangi luas segitiga siku-siku yang terpotong.',
          solution:
            '$B$ dan $D$ adalah titik sudut yang berseberangan, sehingga persegi tersebut berupa daerah $10\\le x\\le30$, $15\\le y\\le35$ (sisi $20$, luas $400$).\nGaris $3x+2y=78$: di $x=10$, $y=24$ (titik $(10,24)$ pada sisi kiri); di $y=15$, $x=16$ (titik $(16,15)$ pada sisi bawah); pada sisi lain garis keluar dari persegi (di $x=30$, $y=-6$; di $y=35$, $x=\\frac83<10$). Jadi garis memotong sudut $(10,15)$, membentuk segitiga siku-siku dengan kaki $9$ dan $6$, luas $\\frac12\\cdot9\\cdot6=27$.\nSisanya berupa segilima dengan luas $400-27=373$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Untuk setiap himpunan bagian tak kosong dari $S=\\{1,2,3,\\ldots,9\\}$ didefinisikan nilai tok-tik dari himpunan bagian dengan mengikuti ketentuan sebagai berikut:\n- Urutkan semua anggotanya dari yang terbesar hingga terkecil.\n- Berikan tanda kurang ($-$) dan tambah ($+$) secara bergantian di antara setiap $2$ angka dimulai dengan tanda kurang setelah angka besar dan hitung hasilnya.\n\nSebagai contoh, nilai tok-tik dari $\\{1,2,4,6,9\\}$ adalah $9-6+4-2+1=6$ dan untuk $S$ adalah $5$. Jumlah nilai tok-tik dari semua himpunan bagian tak kosong dari $S$ adalah ....\n\nA. $9$\nB. $512$\nC. $2304$\nD. $4678$',
          answer: 'C. $2304$',
          principle: 'Hitung kontribusi tiap anggota: tanda ditentukan oleh banyak anggota yang lebih besar di himpunan bagian; penjumlahan tanda berganti membatalkan.',
          solution:
            'Fokus pada anggota $i$. Tandanya $(-1)^{t}$, dengan $t$ banyaknya anggota himpunan bagian yang lebih besar dari $i$. Himpunan bagian yang memuat $i$ ditentukan oleh pilihan anggota yang lebih besar dari $i$ (dari $9-i$ bilangan) dan anggota yang lebih kecil (dari $i-1$ bilangan, bebas: $2^{i-1}$ cara).\nKontribusi total $i$: $i\\cdot2^{i-1}\\cdot\\sum_{T\\subseteq\\{i+1,\\ldots,9\\}}(-1)^{|T|}$. Jumlah $\\sum(-1)^{|T|}=0$ bila $9-i\\ge1$ dan $=1$ bila $i=9$ (hanya $T=\\emptyset$).\nJadi hanya $i=9$ yang berkontribusi: $9\\cdot2^8=2304$.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Suatu mesin generator bilangan setiap kali dioperasikan dapat menghasilkan secara acak satu bilangan bulat positif dari $1$ sampai $9$. Jika Anita mengoperasikan mesin tersebut $3$ kali dan mengalikan ketiga bilangan yang dihasilkan, maka peluang dari hasil perkalian ketiganya merupakan bilangan prima adalah ....\n\nA. $\\frac{12}{729}$\nB. $\\frac{15}{729}$\nC. $\\frac{18}{729}$\nD. $\\frac{21}{729}$',
          answer: 'A. $\\frac{12}{729}$',
          principle: 'Hasil kali bilangan asli bernilai prima hanya jika tepat satu faktor prima dan sisanya bernilai $1$.',
          solution:
            'Hasil kali tiga bilangan asli bernilai prima tepat bila satu bilangan prima dan dua lainnya sama dengan $1$. Bilangan prima di $1$ sampai $9$: $2,3,5,7$ ($4$ buah). Posisi bilangan prima: $3$ pilihan.\nBanyak hasil yang diinginkan $=3\\times4=12$ dari $9^3=729$ kemungkinan. Peluang $=\\frac{12}{729}$.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Diketahui persegi panjang $ABCD$ dengan $AB=10\\sqrt3$ dan $AD=5\\sqrt3$, akan dibuat lingkaran berjari-jari $10-5\\sqrt3$ yang jarak pusatnya ke titik $A$ adalah $5\\sqrt3$. Luas daerah persegi panjang $ABCD$ yang tidak mungkin berada di daerah lingkaran-lingkaran adalah ....\n\nA. $150-25\\pi$\nB. $150-25\\pi-\\frac{25}{2}\\sqrt3$\nC. $150-25\\pi(2\\sqrt3-3)$\nD. $150-\\frac{25}{2}\\sqrt3-25\\pi\\left(2\\sqrt3-3\\frac13\\right)$',
          answer: 'D. $150-\\frac{25}{2}\\sqrt3-25\\pi\\left(2\\sqrt3-3\\frac13\\right)$',
          principle: 'Gabungan semua lingkaran berpusat pada jarak tetap dari $A$ adalah cincin (annulus) yang berpusat di $A$.',
          solution:
            'Pusat lingkaran berada pada jarak $d=5\\sqrt3$ dari $A$ dan jari-jarinya $r=10-5\\sqrt3<d$. Gabungan semua lingkaran adalah cincin dengan jari-jari dalam $d-r=10\\sqrt3-10$ dan jari-jari luar $d+r=10$, berpusat di $A$.\nPasang $A$ di titik asal, $AB$ pada sumbu $x$, $AD$ pada sumbu $y$: persegi panjang adalah $[0,10\\sqrt3]\\times[0,5\\sqrt3]$ (luas $150$).\nLuas seperempat cincin di kuadran pertama: $\\frac\\pi4\\left(10^2-(10\\sqrt3-10)^2\\right)=\\frac\\pi4(200\\sqrt3-300)=25\\pi(2\\sqrt3-3)$.\nBagian yang melewati sisi $DC$ ($y>5\\sqrt3$): lingkaran luar memotong $y=5\\sqrt3$ di $x=5$ (sudut $60^\\circ$), sedangkan lingkaran dalam (jari-jari $\\approx7{,}32<5\\sqrt3$) tidak mencapainya. Luas bagian itu $=$ juring $60^\\circ$ sampai $90^\\circ$ jari-jari $10$ dikurangi segitiga $A,(5,5\\sqrt3),(0,5\\sqrt3)$ $=\\frac{25\\pi}{3}-\\frac{25\\sqrt3}{2}$. Batas $x\\le10\\sqrt3$ tidak berpengaruh (jari-jari luar $10<10\\sqrt3$).\nLuas daerah tertutup di dalam persegi panjang: $25\\pi(2\\sqrt3-3)-\\frac{25\\pi}{3}+\\frac{25\\sqrt3}{2}$.\nLuas yang tidak mungkin tertutup:\n$$150-\\frac{25}{2}\\sqrt3-25\\pi\\left(2\\sqrt3-3-\\frac13\\right)=150-\\frac{25}{2}\\sqrt3-25\\pi\\left(2\\sqrt3-3\\frac13\\right).$$',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Sebuah prisma segi enam beraturan dengan alas $ABCDEF$ (titik-titik berurutan mengelilingi alas) dan rusuk tegak dari $A,B,C,D,E,F$ dipotong oleh bidang datar yang memotong semua rusuk tegaknya di titik $P,Q,R,S,T,U$ berturut-turut (titik $P$ pada rusuk tegak dari $A$, $Q$ dari $B$, dan seterusnya), sehingga terbentuk bangun $ABCDEF.PQRSTU$. Bagian atasnya adalah segi enam $PQRSTU$ yang belum tentu merupakan segi enam beraturan. Jika $AP=a$, $BQ=b$, $CR=c$ dengan $a,b,c$ adalah tiga bilangan berbeda yang merupakan anggota himpunan $\\{8,15,17\\}$ (dalam suatu urutan), maka nilai terbesar yang mungkin untuk $AP+BQ+CR+DS+ET+FU$ adalah ....\n\nA. $80$\nB. $96$\nC. $120$\nD. $144$',
          answer: 'D. $144$',
          principle: 'Tinggi titik pada bidang miring adalah fungsi linear (afin) dari posisi alasnya.',
          solution:
            'Misalkan $O$ pusat alas dan $h_0$ tinggi bidang di atas $O$. Tinggi bidang pada titik alas $X$ adalah fungsi afin dari posisi $X$.\nPada segi enam beraturan, $\\vec{OA}+\\vec{OC}=\\vec{OB}$, sehingga tinggi bidang di atas $B$ adalah $h_0+L(\\vec{OB}) = h_0+L(\\vec{OA})+L(\\vec{OC})$ dengan $L$ linear. Karena $L(\\vec{OA})=a-h_0$ dan $L(\\vec{OC})=c-h_0$, diperoleh $b=h_0+(a-h_0)+(c-h_0)$, yaitu $h_0=a+c-b$.\nTitik berseberangan $D,E,F$ simetris terhadap $O$ dari $A,B,C$, sehingga $DS=2h_0-a$, $ET=2h_0-b$, $FU=2h_0-c$. Jumlahnya\n$$AP+BQ+CR+DS+ET+FU=6h_0=6(a+c-b).$$\nAgar maksimum, $b$ terkecil dan $a,c$ terbesar: $b=8$, $\\{a,c\\}=\\{15,17\\}$, memberi $6(32-8)=144$. Semua tinggi tetap positif: $h_0=24$, $DS=31$ (untuk $a=17$), $ET=40$, $FU=33$.\n(Jika $a,c$ boleh sama, $a=c=17$ dan $b=8$ memberi $156$ yang tidak ada di pilihan; maka $a,b,c$ dipahami berbeda.)',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Dua buah lingkaran $L_1$ dan $L_2$ tidak berpotongan atau bersinggungan. Diketahui jari-jari $L_1$ lebih besar dari jari-jari $L_2$. Misalkan $L_1$ berpusat di $B$ dan $L_2$ berpusat di $A$. Titik $C$ di luar $L_1$ dan $L_2$ sehingga $BC$ tegak lurus $AC$. Ruas garis $AB$ memotong $L_1$ di $O$ dan memotong $L_2$ di $D$. Garis yang melalui $D$ tegak lurus $AB$ dan memotong pertengahan sisi $AC$ di $E$. Titik $F$ pada $L_2$ sehingga $AF$ sejajar $BC$ dan $BF>BA$. Jika $AO=OB$, $AC=12$, $BC=16$, maka $BF=\\ldots$\n\nA. $\\frac25\\sqrt{3301}$\nB. $\\frac25\\sqrt{2801}$\nC. $\\frac25\\sqrt{2581}$\nD. $\\frac25\\sqrt{1861}$',
          answer: 'A. $\\frac25\\sqrt{3301}$',
          principle: 'Kesebangunan segitiga siku-siku dan Teorema Pythagoras dalam koordinat.',
          solution:
            'Segitiga $ABC$ siku-siku di $C$ dengan $AC=12$, $BC=16$, sehingga $AB=20$ dan $\\cos A=\\frac{AC}{AB}=\\frac35$.\n$E$ adalah titik tengah $AC$, jadi $AE=6$. $DE\\perp AB$ di $D$, sehingga segitiga $ADE$ siku-siku di $D$ dan $AD=AE\\cos A=6\\cdot\\frac35=\\frac{18}5$. Karena $D$ pada $L_2$ berpusat $A$, jari-jari $L_2$ adalah $\\frac{18}{5}$, sehingga $AF=\\frac{18}5$. (Syarat $O$ titik tengah $AB$: jari-jari $L_1=10$; kedua lingkaran saling lepas karena $20>10+\\frac{18}5$.)\nPasang koordinat $C=(0,0)$, $A=(12,0)$, $B=(0,16)$. $AF\\parallel BC$ (sumbu $y$), jadi $F=\\left(12,\\pm\\frac{18}5\\right)$.\n- $F=\\left(12,\\frac{18}{5}\\right)$: $BF^2=144+\\left(\\frac{62}{5}\\right)^2=\\frac{7444}{25}<400=BA^2$, tidak memenuhi $BF>BA$.\n- $F=\\left(12,-\\frac{18}{5}\\right)$: $BF^2=144+\\left(\\frac{98}{5}\\right)^2=\\frac{13204}{25}>400$, memenuhi.\nJadi $BF=\\frac{\\sqrt{13204}}5=\\frac{2\\sqrt{3301}}5$.',
          rubric: OK
        }
      ]
    }
  ]
};
