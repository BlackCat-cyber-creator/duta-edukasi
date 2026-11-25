/**
 * Paket Soal Terstruktur: KSM-K Matematika Terintegrasi MA 2018
 * Sumber: scraped_raw/ksm-matematika-2018.md (18 dari 25 soal pilihan ganda disertakan; 7 soal dilewati).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'ksm-mat-ma-2018',
  slug: 'ksm-matematika-2018',
  subject: 'olimpiade-mat',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'KSM Kabupaten/Kota Matematika Terintegrasi MA 2018',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab2-barisan-deret',
    'sma10-bab4-trigonometri',
    'sma11-bab1-fungsi-invers',
    'sma11-bab2-lingkaran',
    'sma12-bab3-kaidah-pencacahan',
    'sma12-bab4-peluang',
    'sma12-bab6-transformasi'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'KSM',
  title: 'KSM-K Matematika Terintegrasi MA 2018',
  totalMarks: 18,
  instructions:
    'Kerjakan seluruh 18 soal pilihan ganda berikut (masing-masing bernilai 1 poin; total 18 poin). Dari 25 soal pada arsip mentah KSM-K Matematika Terintegrasi MA 2018, sebanyak 18 soal disertakan dengan verifikasi penuh dan 7 soal dilewati: No. 16 (membutuhkan grafik turunan yang hilang), No. 3, 9, dan 25 (redaksi arsip memiliki galat ketik/matematis sehingga jawaban eksak tidak ada pada opsi), serta No. 14, 17, dan 21 (data kontekstual pada arsip tidak konsisten/kurang terdefinisi).',
  source: {
    org: 'Kementerian Agama RI — Kompetisi Sains Madrasah (KSM)',
    file: 'scraped_raw/ksm-matematika-2018.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 18,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (18 soal terverifikasi dari naskah KSM-K MA 2018, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Fungsi $f$ terdefinisi pada bilangan real kecuali $2$ sehingga $f\\left(\\dfrac{2x}{x-5}\\right) = 2x-1$, $x \\neq 5$. Nilai dari $f(3)+f(1)$ adalah ....\n\nA. $-2$\nB. $8$\nC. $13$\nD. $18$',
          answer: 'D. $18$',
          principle: 'Substitusi argumen fungsi dengan mencari nilai $x$ yang menghasilkan masukan yang diminta.',
          solution:
            '1. Untuk menentukan $f(3)$, selesaikan $\\dfrac{2x}{x-5} = 3$:\n$$2x = 3(x-5) \\implies 2x = 3x - 15 \\implies x = 15.$$\nSubstitusikan $x = 15$ ke rumus fungsi: $f(3) = 2(15) - 1 = 29$.\n\n2. Untuk menentukan $f(1)$, selesaikan $\\dfrac{2x}{x-5} = 1$:\n$$2x = x - 5 \\implies x = -5.$$\nSubstitusikan $x = -5$: $f(1) = 2(-5) - 1 = -11$.\n\nJadi, $f(3) + f(1) = 29 + (-11) = 18$.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Misalkan $m$ bilangan asli terkecil sehingga hasil kali $m^{\\frac{1}{6}} \\times 2^{\\frac{1}{2}} \\times 3^{\\frac{1}{3}} \\times 4^{\\frac{1}{4}}$ merupakan bilangan asli. Banyak faktor dari $m$ adalah ....\n\nA. $3$\nB. $4$\nC. $5$\nD. $6$',
          answer: 'C. $5$',
          principle: 'Sifat eksponen pecahan dan rumus banyaknya faktor positif $\\tau(p^k) = k + 1$.',
          solution:
            'Sederhanakan $4^{\\frac{1}{4}} = (2^2)^{\\frac{1}{4}} = 2^{\\frac{1}{2}}$, sehingga hasil kalinya menjadi:\n$$m^{\\frac{1}{6}} \\times 2^{\\frac{1}{2}} \\times 3^{\\frac{1}{3}} \\times 2^{\\frac{1}{2}} = 2 \\times \\left(m \\cdot 3^2\\right)^{\\frac{1}{6}}.$$\nAgar hasil kali merupakan bilangan asli, haruslah $m \\cdot 3^2 = k^6$ untuk suatu bilangan asli $k$. Karena $3^2 \\mid k^6$, maka $3 \\mid k$. Nilai $k$ terkecil adalah $k = 3$, yang memberikan:\n$$m \\cdot 3^2 = 3^6 \\implies m = 3^4 = 81.$$\nBanyak faktor positif dari $m = 3^4$ adalah $4 + 1 = 5$ (yaitu $1, 3, 9, 27, 81$).',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Pak Ali adalah muzakki yang taat memiliki seorang istri, $3$ orang anak, $2$ menantu, dan $2$ cucu. Setahun terakhir Pak Ali menyimpan $205{,}70$ gram emas dan mencapai haul. Rencananya tahun ini Pak Ali akan membayar zakat seluruh keluarganya sesuai ketetapan batas terakhir pembayaran zakat sebelum Sholat Idul Fitri 1438 H. Tepat sehari sebelum Idul Fitri 1438 H, Pak Ali mendapat kiriman emas sebesar $90$ gram dari temannya. Total zakat yang harus dibayar Pak Ali sebesar .... (berdasarkan ketetapan BAZNAS dengan $1\\text{ kg}$ beras $= \\text{Rp}10.350{,}00$ dan $1\\text{ gram}$ emas $= \\text{Rp}585.000{,}00$)\n\nA. $\\text{Rp}4.341.237{,}50$\nB. $\\text{Rp}3.242.237{,}50$\nC. $\\text{Rp}3.250.000{,}00$\nD. $\\text{Rp}3.241.237{,}50$',
          answer: 'D. $\\text{Rp}3.241.237{,}50$',
          principle: 'Kadar zakat mal emas ($2{,}5\\%$ bila mencapai nisab $85\\text{ gram}$ dan haul $1$ tahun) serta zakat fitrah ($2{,}5\\text{ kg}$ beras per jiwa).',
          solution:
            '1. **Zakat Mal (Emas):** Emas seberat $205{,}70\\text{ gram}$ telah melampaui nisab ($85\\text{ gram}$) dan mencapai haul $1$ tahun, sedangkan kiriman $90\\text{ gram}$ baru diterima sehari sebelum Idul Fitri sehingga belum mencapai haul dan belum wajib dizakati. Besar zakat emas adalah:\n$$2{,}5\\% \\times 205{,}70 \\times \\text{Rp}585.000{,}00 = \\frac{1}{40} \\times \\text{Rp}120.334.500{,}00 = \\text{Rp}3.008.362{,}50.$$\n\n2. **Zakat Fitrah:** Jumlah jiwa yang ditanggung adalah Pak Ali ($1$), istri ($1$), anak ($3$), menantu ($2$), dan cucu ($2$), total $1 + 1 + 3 + 2 + 2 = 9$ orang. Sesuai ketentuan $2{,}5\\text{ kg}$ beras per jiwa:\n$$9 \\times 2{,}5 \\times \\text{Rp}10.350{,}00 = 22{,}5 \\times \\text{Rp}10.350{,}00 = \\text{Rp}232.875{,}00.$$\n\n3. **Total Zakat:**\n$$\\text{Rp}3.008.362{,}50 + \\text{Rp}232.875{,}00 = \\text{Rp}3.241.237{,}50.$$',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Diketahui suatu barisan naik $7$ bilangan asli berurutan suku tengahnya $a$ dan suku terakhirnya $b$. Diberikan barisan lain terdiri dari $2018$ bilangan asli berurutan dengan suku awalnya $1$ dan rata-ratanya $\\dfrac{b}{2}$. Nilai dari $a$ adalah ....\n\nA. $2012$\nB. $2014$\nC. $2016$\nD. $2018$',
          answer: 'C. $2016$',
          principle: 'Rata-rata barisan aritmetika bilangan berurutan sama dengan setengah jumlah suku pertama dan suku terakhir.',
          solution:
            'Barisan kedua terdiri dari $2018$ bilangan asli berurutan mulai dari $1$, yaitu $1, 2, \\dots, 2018$. Rata-ratanya adalah:\n$$\\frac{1 + 2018}{2} = \\frac{2019}{2}.$$\nKarena rata-rata tersebut sama dengan $\\dfrac{b}{2}$, diperoleh $b = 2019$.\nPada barisan naik $7$ bilangan asli berurutan, suku tengah $a$ adalah suku ke-$4$ dan suku terakhir $b$ adalah suku ke-$7$, sehingga $b = a + 3$. Jadi:\n$$a = 2019 - 3 = 2016.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Titik $(1,1)$ dirotasikan dengan pusat $(0,0)$ sebesar $60^{\\circ}$, kemudian direfleksikan terhadap sumbu $X$. Agar kembali ke titik $(1,1)$, titik itu harus dirotasikan dengan pusat $(0,0)$ sebesar ....\n\nA. $120^{\\circ}$\nB. $150^{\\circ}$\nC. $180^{\\circ}$\nD. $210^{\\circ}$',
          answer: 'B. $150^{\\circ}$',
          principle: 'Komposisi rotasi dan refleksi terhadap sumbu-$X$ dalam koordinat kutub $(r\\cos\\theta, r\\sin\\theta)$.',
          solution:
            'Titik $(1,1)$ memiliki jarak $r = \\sqrt{2}$ dari $(0,0)$ dan sudut awal $\\theta_0 = 45^{\\circ}$.\n1. Rotasi berpusat di $(0,0)$ sebesar $+60^{\\circ}$ mengubah sudutnya menjadi $\\theta_1 = 45^{\\circ} + 60^{\\circ} = 105^{\\circ}$.\n2. Refleksi terhadap sumbu $X$ memetakan $(r\\cos\\theta, r\\sin\\theta) \\mapsto (r\\cos\\theta, -r\\sin\\theta) = (r\\cos(-\\theta), r\\sin(-\\theta))$, sehingga sudutnya menjadi $\\theta_2 = -105^{\\circ} \\equiv 255^{\\circ} \\pmod{360^{\\circ}}$.\n3. Agar kembali ke $(1,1)$ pada sudut $45^{\\circ} \\equiv 405^{\\circ} \\pmod{360^{\\circ}}$, besar rotasi berpusat di $(0,0)$ yang diperlukan adalah:\n$$405^{\\circ} - 255^{\\circ} = 150^{\\circ}.$$',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Sebagai bentuk rasa cintanya kepada Nabi Muhammad SAW, Hasan dan Husein akan mengunjungi masjid-masjid yang menjadi saksi perjuangan Nabi SAW. Masjid-masjid yang akan dikunjungi, yaitu Masjid Quba, Masjid Nabawi, dan masjid-masjid yang pernah menjadi kiblat. Hasan dan Husein berangkat dari tempat yang berbeda. Mereka tiba di masjid pertama (mungkin berbeda) pada waktu yang sama. Jika waktu yang diperlukan untuk melakukan perjalanan dari masjid ke masjid dalam satu kota adalah $a$, dari masjid ke masjid antarkota dalam satu negara adalah $2a$, sedangkan dari masjid ke masjid yang berbeda negara adalah $3a$, maka peluang Hasan dan Husein bertemu di paling banyak $3$ masjid adalah ....\n\nA. $\\frac{1}{24}$\nB. $\\frac{11}{12}$\nC. $\\frac{23}{24}$\nD. $\\frac{7}{8}$',
          answer: 'C. $\\frac{23}{24}$',
          principle: 'Peluang komplemen dan perbandingan barisan waktu tempuh yang meningkat tegas pada urutan permutasi.',
          solution:
            'Keempat masjid yang dikunjungi adalah Masjid Quba (Madinah), Masjid Nabawi (Madinah), serta dua masjid yang pernah menjadi kiblat umat Islam, yaitu Masjidil Aqsa (Yerusalem, Palestina) dan Masjidil Haram (Makkah, Arab Saudi).\nMisalkan Hasan tiba di keempat masjidnya pada waktu $0 = t_1 < t_2 < t_3 < t_4$ dan Husein pada waktu $0 = s_1 < s_2 < s_3 < s_4$ (meningkat tegas karena setiap waktu tempuh $a, 2a,$ atau $3a$ bernilai positif).\nKejadian komplemen dari "bertemu di paling banyak $3$ masjid" adalah "bertemu di seluruh $4$ masjid". Karena waktu kedatangan keduanya meningkat tegas di keempat masjid, kecocokan di semua $4$ masjid memaksa $t_k = s_k$ dan masjid ke-$k$ yang sama untuk setiap $k = 1, 2, 3, 4$, artinya urutan kunjungan Hasan dan Husein harus identik.\nDari $4! = 24$ urutan kunjungan untuk masing-masing, peluang keduanya memiliki urutan identik adalah $\\frac{24}{24 \\times 24} = \\frac{1}{24}$. Jadi peluang bertemu di paling banyak $3$ masjid adalah:\n$$1 - \\frac{1}{24} = \\frac{23}{24}.$$',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Misalkan $c(n)$ menyatakan jumlah semua faktor prima berbeda $n$ dengan $1 < n < 128$ dan $n$ komposit. Nilai maksimum $c(n)$ adalah ....\n\nA. $16$\nB. $63$\nC. $65$\nD. $127$',
          answer: 'B. $63$',
          principle: 'Faktorisasi prima bilangan komposit berbatas atas $n \\le 127$.',
          solution:
            'Karena $n$ komposit dan $1 < n < 128$, maka $n \\le 127$ dan $n$ memiliki sekurang-kurangnya dua faktor prima (dengan pengulangan):\n1. Jika $n = p^k$ ($k \\ge 2$), maka $p \\le \\lfloor\\sqrt{127}\\rfloor = 11$, sehingga $c(n) = p \\le 11$.\n2. Jika $n$ memiliki tepat dua faktor prima berbeda $p_1 < p_2$, maka $p_1 \\ge 2$ sehingga $p_2 \\le \\lfloor\\frac{127}{2}\\rfloor = 63$. Bilangan prima terbesar $\\le 63$ adalah $61$, yang dicapai oleh $n = 2 \\times 61 = 122 < 128$ dengan $c(122) = 2 + 61 = 63$. (Bila $p_1 \\ge 3$, maka $p_2 \\le \\lfloor\\frac{127}{3}\\rfloor = 42$, sehingga $c(n) \\le 3 + 41 = 44$.)\n3. Jika $n$ memiliki $3$ faktor prima berbeda $p_1 < p_2 < p_3$ (tidak mungkin $4$ karena $2\\cdot 3\\cdot 5\\cdot 7 = 210 > 127$), maka $p_1 p_2 \\ge 6$ dan $p_3 \\le \\lfloor\\frac{127}{6}\\rfloor = 21$, sehingga $p_3 \\le 19$ dan $c(n) \\le p_1 + p_2 + 19$. Karena $p_1 p_2 \\le \\lfloor\\frac{127}{p_3}\\rfloor$, untuk $p_3 = 19$ didapat $p_1 p_2 \\le 6$ sehingga $p_1=2, p_2=3$ dengan jumlah $2+3+19=24$; untuk $p_3 \\le 17$, jumlah tiga prima berbeda $< 3 \\cdot 17 = 51 < 63$.\n\nJadi nilai maksimum $c(n)$ adalah $63$.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Angka $1$ sampai $6$ ditempatkan pada masing-masing petak persegi panjang berukuran $2 \\times 3$. Peluang angka $1$ berada pada kotak yang bersebelahan dengan kotak berisi angka prima adalah ....\n\nA. $\\frac{1}{30}$\nB. $\\frac{1}{15}$\nC. $\\frac{5}{6}$\nD. $\\frac{14}{15}$',
          answer: 'D. $\\frac{14}{15}$',
          principle: 'Peluang komplemen dan pencacahan ketetanggaan ortogonal pada kisi $2 \\times 3$.',
          solution:
            'Bilangan prima pada $\\{1, 2, 3, 4, 5, 6\\}$ adalah $\\{2, 3, 5\\}$ ($3$ bilangan), sedangkan bilangan selain $1$ dan selain prima adalah $\\{4, 6\\}$ ($2$ bilangan). Dua kotak bersebelahan berarti berbagi satu sisi.\nKita hitung komplemennya, yakni susunan ketika angka $1$ **tidak** bersebelahan dengan bilangan prima mana pun:\n- Jika angka $1$ ditempatkan di salah satu dari $2$ petak tengah, ia memiliki $3$ tetangga. Karena hanya ada $2$ angka bukan prima selain $1$ (yaitu $4$ dan $6$), minimal satu tetangga pasti berisi bilangan prima. Jadi kasus ini mustahil ($0$ cara).\n- Jika angka $1$ ditempatkan di salah satu dari $4$ petak sudut, ia memiliki $2$ tetangga yang keduanya harus diisi oleh $4$ dan $6$ (sebanyak $2! = 2$ cara), sementara $3$ petak sisanya diisi $\\{2, 3, 5\\}$ (sebanyak $3! = 6$ cara).\n\nBanyak susunan komplemen adalah $4 \\times 2 \\times 6 = 48$ dari total $6! = 720$ susunan, sehingga peluang komplemennya $\\frac{48}{720} = \\frac{1}{15}$. Jadi peluang angka $1$ bersebelahan dengan angka prima adalah:\n$$1 - \\frac{1}{15} = \\frac{14}{15}.$$',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Suku banyak $f$ dan $g$ koefisiennya bilangan real. Diketahui persamaan $f(x) = 0$ memiliki $3$ solusi real berbeda, persamaan $g(x) = 0$ memiliki $4$ solusi real berbeda, dan persamaan $f(x) g(x) = 0$ memiliki $5$ solusi real berbeda. Minimal banyaknya solusi real berbeda dari $\\dfrac{g(x)}{f(x)} = 0$ dengan $f(x) \\neq 0$ adalah ....\n\nA. $2$\nB. $3$\nC. $5$\nD. $7$',
          answer: 'A. $2$',
          principle: 'Operasi himpunan pada himpunan akar real dua suku banyak.',
          solution:
            'Misalkan $A$ adalah himpunan solusi real dari $f(x) = 0$ ($|A| = 3$) dan $B$ adalah himpunan solusi real dari $g(x) = 0$ ($|B| = 4$). Persamaan $f(x)g(x) = 0$ memiliki himpunan solusi $A \\cup B$ dengan $|A \\cup B| = 5$.\nSementara itu, $\\dfrac{g(x)}{f(x)} = 0$ dengan $f(x) \\neq 0$ terpenuhi tepat ketika $g(x) = 0$ dan $f(x) \\neq 0$, yakni untuk $x \\in B \\setminus A$. Karena $B \\setminus A = (A \\cup B) \\setminus A$ dan $A \\subseteq A \\cup B$, banyaknya solusi real berbeda selalu tepat:\n$$|B \\setminus A| = |A \\cup B| - |A| = 5 - 3 = 2.$$',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Lubab diminta orang tuanya untuk bersedekah setiap Jumat kepada $2$ orang masing-masing $\\text{Rp}100.000{,}00$. Uang tersebut diletakkan oleh orang tuanya pada dompet khusus berisi $3$ lembar pecahan $\\text{Rp}50.000{,}00$, $5$ lembar pecahan $\\text{Rp}20.000{,}00$, dan $2$ lembar pecahan $\\text{Rp}10.000{,}00$. Berapa banyak cara berbeda Lubab memberikan sedekah tersebut?\n\nA. $3$\nB. $5$\nC. $7$\nD. $9$',
          answer: 'C. $7$',
          principle: 'Pencacahan komposisi pecahan uang dengan batas persediaan dan penerima yang dibedakan.',
          solution:
            'Dalam satuan $\\text{Rp}10.000{,}00$, dompet berisi $3$ lembar pecahan $5$, $5$ lembar pecahan $2$, dan $2$ lembar pecahan $1$, sedangkan setiap penerima mendapat nilai $10$. Kombinasi $(a, b, c)$ lembar $(50\\text{rb}, 20\\text{rb}, 10\\text{rb})$ yang berjumlah $10$ ($5a + 2b + c = 10$ dengan $0 \\le a \\le 3$, $0 \\le b \\le 5$, $0 \\le c \\le 2$) adalah:\n- $X = (2, 0, 0)$\n- $Y = (1, 2, 1)$\n- $Z = (0, 5, 0)$\n- $W = (0, 4, 2)$\n\nSekarang periksa pasangan berurutan $(P_1, P_2)$ untuk dua penerima yang total lembarnya tidak melebihi stok $(3, 5, 2)$:\n- $(X, Y)$ dan $(Y, X)$: total $(3, 2, 1) \\le (3, 5, 2)$ ($2$ cara)\n- $(X, Z)$ dan $(Z, X)$: total $(2, 5, 0) \\le (3, 5, 2)$ ($2$ cara)\n- $(X, W)$ dan $(W, X)$: total $(2, 4, 2) \\le (3, 5, 2)$ ($2$ cara)\n- $(Y, Y)$: total $(2, 4, 2) \\le (3, 5, 2)$ ($1$ cara)\nPasangan $(X, X)$ memerlukan $4 > 3$ lembar pecahan $50\\text{rb}$, sedangkan pasangan dari $\\{Y, Z, W\\}$ memerlukan minimal $6 > 5$ lembar $20\\text{rb}$ atau $3 > 2$ lembar $10\\text{rb}$. Jadi banyaknya cara berbeda adalah $2 + 2 + 2 + 1 = 7$.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Banyaknya bilangan real $x$ yang memenuhi persamaan\n$$\\dfrac{\\sqrt{x} + \\sqrt{1+x}}{\\sqrt{2+x}} = 2$$\nadalah ....\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$',
          answer: 'A. $0$',
          principle: 'Kemonotonan fungsi akar kuadrat pada domain terdefinisi $x \\ge 0$.',
          solution:
            'Agar seluruh bentuk akar bernilai real, diperlukan $x \\ge 0$. Untuk setiap $x \\ge 0$, berlaku $0 \\le x < x + 1 < x + 2$, sehingga $\\sqrt{x} < \\sqrt{2+x}$ dan $\\sqrt{1+x} < \\sqrt{2+x}$. Dengan demikian:\n$$\\frac{\\sqrt{x} + \\sqrt{1+x}}{\\sqrt{2+x}} < \\frac{\\sqrt{2+x} + \\sqrt{2+x}}{\\sqrt{2+x}} = 2.$$\nKarena ruas kiri selalu bernilai kurang dari $2$, tidak ada bilangan real $x$ yang memenuhi persamaan tersebut (banyaknya solusi adalah $0$).',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Diberikan segitiga $ABC$ dengan $\\angle ABC = 50^{\\circ}$. Titik $I$ merupakan titik pusat lingkaran dalam segitiga $ABC$. Titik $O$ merupakan titik pusat lingkaran luar segitiga $AIC$. Besar sudut $AOC$ adalah ....\n\nA. $115^{\\circ}$\nB. $130^{\\circ}$\nC. $230^{\\circ}$\nD. $270^{\\circ}$',
          answer: 'B. $130^{\\circ}$',
          principle: 'Rumus sudut pusat lingkaran dalam $\\angle AIC = 90^{\\circ} + \\frac{1}{2}\\angle B$ dan hubungan sudut pusat dengan sudut keliling.',
          solution:
            'Karena $I$ adalah titik pusat lingkaran dalam $\\triangle ABC$, garis $AI$ dan $CI$ berturut-turut membagi dua $\\angle BAC$ dan $\\angle BCA$, sehingga:\n$$\\angle AIC = 180^{\\circ} - \\frac{\\angle BAC + \\angle BCA}{2} = 180^{\\circ} - \\frac{180^{\\circ} - \\angle ABC}{2} = 90^{\\circ} + \\frac{50^{\\circ}}{2} = 115^{\\circ}.$$\nTitik $O$ adalah pusat lingkaran luar $\\triangle AIC$. Karena $\\angle AIC = 115^{\\circ}$ tumpul, titik $I$ berada pada busur minor $AC$, sehingga sudut keliling yang menghadap busur yang sama dari busur mayor $AC$ berukuran $180^{\\circ} - 115^{\\circ} = 65^{\\circ}$. Oleh sebab itu, besar sudut pusat $\\angle AOC$ adalah $2 \\times 65^{\\circ} = 130^{\\circ}$.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Diberikan belah ketupat $ABCD$. Titik $P, Q, R$, dan $S$ berturut-turut merupakan titik berat segitiga $ABC, BCD, CDA$, dan $DAB$. Perbandingan luas belah ketupat $PQRS$ dan $ABCD$ adalah ....\n\nA. $\\frac{1}{4}$\nB. $\\frac{1}{9}$\nC. $\\frac{1}{16}$\nD. $\\frac{1}{25}$',
          answer: 'B. $\\frac{1}{9}$',
          principle: 'Koordinat titik berat segitiga sebagai rata-rata tiga titik sudut dan perbandingan luas terhadap skala panjang diagonal.',
          solution:
            'Letakkan perpotongan diagonal belah ketupat $ABCD$ di titik asal $(0,0)$ pada sumbu koordinat dengan $A(-p,0)$, $B(0,-q)$, $C(p,0)$, dan $D(0,q)$ (diagonal sepanjang $2p$ dan $2q$). Titik berat masing-masing segitiga adalah:\n$$P = \\frac{A+B+C}{3} = \\left(0, -\\frac{q}{3}\\right), \\quad Q = \\frac{B+C+D}{3} = \\left(\\frac{p}{3}, 0\\right),$$\n$$R = \\frac{C+D+A}{3} = \\left(0, \\frac{q}{3}\\right), \\quad S = \\frac{D+A+B}{3} = \\left(-\\frac{p}{3}, 0\\right).$$\nTerlihat bahwa $PQRS$ merupakan belah ketupat dengan panjang diagonal $\\frac{2p}{3}$ dan $\\frac{2q}{3}$, yakni $\\frac{1}{3}$ kali diagonal $ABCD$. Maka perbandingan luasnya adalah:\n$$\\frac{\\text{Luas } PQRS}{\\text{Luas } ABCD} = \\frac{\\frac{1}{2} \\cdot \\frac{2p}{3} \\cdot \\frac{2q}{3}}{\\frac{1}{2} \\cdot 2p \\cdot 2q} = \\frac{1}{9}.$$',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Seorang pengembang perumahan meletakkan setiap rumah pada koordinat bulat pada dan di dalam suatu lingkaran berpusat di $(0,0)$ dan berjari-jari $2$ satuan. Rumah $A$ dan rumah $B$ berada di perumahan tersebut. Peluang rumah $A$ dan $B$ berjarak lebih dari $3$ satuan adalah ....\n\nA. $\\frac{4}{39}$\nB. $\\frac{5}{39}$\nC. $\\frac{8}{39}$\nD. $\\frac{10}{39}$',
          answer: 'B. $\\frac{5}{39}$',
          principle: 'Pencacahan titik kisi bulat dalam cakram $x^2 + y^2 \\le 4$ dan syarat jarak $d^2 > 9$.',
          solution:
            'Titik koordinat bulat $(x,y)$ yang memenuhi $x^2 + y^2 \\le 4$ terdiri atas:\n- $x^2 + y^2 = 0$: $(0,0)$ ($1$ titik)\n- $x^2 + y^2 = 1$: $(\\pm 1, 0), (0, \\pm 1)$ ($4$ titik)\n- $x^2 + y^2 = 2$: $(\\pm 1, \\pm 1)$ ($4$ titik)\n- $x^2 + y^2 = 4$: $(\\pm 2, 0), (0, \\pm 2)$ ($4$ titik)\nTotal ada $1 + 4 + 4 + 4 = 13$ rumah, sehingga banyaknya pasangan rumah berbeda adalah $\\binom{13}{2} = 78$.\n\nAgar jarak $AB > 3$, diperlukan kuadrat jarak $AB^2 \\ge 10$:\n1. Setiap titik dengan $x^2+y^2 \\le 1$ berjarak paling jauh $1 + 2 = 3$ ke titik mana pun dalam cakram, sehingga tidak menyumbang pasangan.\n2. Setiap titik di $\\{(\\pm 1, \\pm 1)\\}$ berjarak $\\sqrt{3^2 + 1^2} = \\sqrt{10} > 3$ ke tepat dua titik pada $\\{(\\pm 2, 0), (0, \\pm 2)\\}$ (misalnya $(1,1)$ ke $(-2,0)$ dan $(0,-2)$). Ini menghasilkan $4 \\times 2 = 8$ pasangan.\n3. Di antara empat titik $\\{(\\pm 2, 0), (0, \\pm 2)\\}$, hanya dua pasangan berseberangan, yakni $((2,0),(-2,0))$ dan $((0,2),(0,-2))$, yang berjarak $4 > 3$ ($2$ pasangan).\n\nTotal ada $8 + 2 = 10$ pasangan yang memenuhi, sehingga peluangnya adalah $\\frac{10}{78} = \\frac{5}{39}$.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Banyaknya solusi dari persamaan $\\sin x + \\cos 2x = -\\cos (-x) + \\sin 2x$ pada interval $[-\\pi, \\pi]$ adalah ....\n\nA. $2$\nB. $4$\nC. $5$\nD. $7$',
          answer: 'C. $5$',
          principle: 'Sifat fungsi genap $\\cos(-x) = \\cos x$ dan penyederhanaan $\\sin\\alpha \\pm \\cos\\alpha = \\sqrt{2}\\sin\\left(\\alpha \\pm \\frac{\\pi}{4}\\right)$.',
          solution:
            'Karena $\\cos(-x) = \\cos x$, persamaan dapat ditulis menjadi $\\sin x + \\cos x = \\sin 2x - \\cos 2x$. Dengan mengubah kedua ruas ke bentuk sinus tunggal:\n$$\\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right) = \\sqrt{2}\\sin\\left(2x - \\frac{\\pi}{4}\\right) \\iff \\sin\\left(2x - \\frac{\\pi}{4}\\right) = \\sin\\left(x + \\frac{\\pi}{4}\\right).$$\nDari kesamaan nilai sinus, diperoleh dua kasus untuk $k \\in \\mathbb{Z}$:\n1. $2x - \\frac{\\pi}{4} = x + \\frac{\\pi}{4} + 2k\\pi \\implies x = \\frac{\\pi}{2} + 2k\\pi$. Pada $[-\\pi, \\pi]$, hanya memenuhi $x = \\frac{\\pi}{2}$ ($1$ solusi).\n2. $2x - \\frac{\\pi}{4} = \\pi - \\left(x + \\frac{\\pi}{4}\\right) + 2k\\pi \\implies 3x = \\pi + 2k\\pi \\implies x = \\frac{(2k+1)\\pi}{3}$. Pada $[-\\pi, \\pi]$, nilai $2k+1 \\in \\{-3, -1, 1, 3\\}$ menghasilkan $x \\in \\{-\\pi, -\\frac{\\pi}{3}, \\frac{\\pi}{3}, \\pi\\}$ ($4$ solusi).\n\nSeluruh $5$ solusi tersebut berbeda dan berada dalam $[-\\pi, \\pi]$, sehingga banyaknya solusi adalah $5$.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Diberikan segi empat $ABCD$ dengan $A(-1,1)$, $B(-1,-3)$, $C(5,3)$, dan $D(1,3)$. Jarak antara titik $(2,0)$ dengan titik potong garis $AC$ dan $BD$ adalah ....\n\nA. $\\frac{1}{4}\\sqrt{2}$\nB. $\\frac{1}{2}\\sqrt{2}$\nC. $\\sqrt{2}$\nD. $\\frac{3}{2}\\sqrt{2}$',
          answer: 'D. $\\frac{3}{2}\\sqrt{2}$',
          principle: 'Persamaan garis melalui dua titik, perpotongan dua garis, dan rumus jarak Euclidean.',
          solution:
            '1. Garis $AC$ melalui $A(-1,1)$ dan $C(5,3)$ memiliki gradien $m_{AC} = \\frac{3-1}{5-(-1)} = \\frac{1}{3}$, sehingga persamaannya adalah:\n$$y - 1 = \\frac{1}{3}(x + 1) \\iff x - 3y + 4 = 0.$$\n2. Garis $BD$ melalui $B(-1,-3)$ dan $D(1,3)$ memiliki gradien $m_{BD} = \\frac{3-(-3)}{1-(-1)} = 3$, sehingga persamaannya adalah:\n$$y - 3 = 3(x - 1) \\iff y = 3x.$$\n3. Substitusikan $y = 3x$ ke persamaan garis $AC$:\n$$x - 3(3x) + 4 = 0 \\implies -8x + 4 = 0 \\implies x = \\frac{1}{2}, \\quad y = \\frac{3}{2}.$$\nTitik potong $P\\left(\\frac{1}{2}, \\frac{3}{2}\\right)$ berjarak ke $(2,0)$ sebesar:\n$$d = \\sqrt{\\left(2 - \\frac{1}{2}\\right)^2 + \\left(0 - \\frac{3}{2}\\right)^2} = \\sqrt{\\left(\\frac{3}{2}\\right)^2 + \\left(-\\frac{3}{2}\\right)^2} = \\frac{3}{2}\\sqrt{2}.$$',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Di zaman Nabi Muhammad ada $2$ muadzin, yaitu Bilal bin Rabah dan Abdullah ibnu Ummi Maktum. Mereka berada di daerah berbentuk persegi $ABCD$ dengan panjang sisi $7\\text{ hm}$. Bilal berada di titik $A$, sedangkan Abdullah berada di titik $C$. Adzan keduanya dapat terdengar sampai $7\\text{ hm}$. Luas daerah agar dapat terdengar kedua adzan tersebut adalah .... (gunakan $\\pi = \\dfrac{22}{7}$ dan satuan luas $\\text{hm}^2$)\n\nA. $28$\nB. $21$\nC. $14$\nD. $7$',
          answer: 'A. $28$',
          principle: 'Prinsip inklusi-eksklusi pada irisan dua seperempat lingkaran berjari-jari sama dengan sisi persegi.',
          solution:
            'Jangkauan suara masing-masing muadzin di dalam persegi $ABCD$ bersisi $r = 7\\text{ hm}$ membentuk seperempat lingkaran berjari-jari $7\\text{ hm}$ dengan luas $\\frac{1}{4}\\pi r^2$. Kedua seperempat lingkaran tersebut berpusat di titik sudut berhadapan ($A$ dan $C$) dan saling melingkupi di sepanjang daerah tengah sehingga gabungannya menutupi seluruh persegi $ABCD$ seluas $r^2$.\nMenurut prinsip inklusi-eksklusi, luas irisan daerah yang mendengar kedua adzan adalah:\n$$L = \\frac{1}{4}\\pi r^2 + \\frac{1}{4}\\pi r^2 - r^2 = \\left(\\frac{\\pi}{2} - 1\\right)r^2.$$\nDengan $r = 7$ dan $\\pi = \\frac{22}{7}$, diperoleh:\n$$L = \\left(\\frac{11}{7} - 1\\right) \\times 49 = \\frac{4}{7} \\times 49 = 28\\text{ hm}^2.$$',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Barisan bilangan $a_0, a_1, a_2, \\dots, a_k$ didefinisikan dengan $a_n$ sama dengan banyaknya suku pada barisan tersebut yang bernilai $n$. Sebagai contoh, saat $k=3$ barisannya adalah $a_0=1$, $a_1=2$, $a_2=1$, dan $a_3=0$. Saat $k=4$, nilai dari $a_2$ yang mungkin adalah ....\n\nA. $2$\nB. $4$\nC. $6$\nD. $8$',
          answer: 'A. $2$',
          principle: 'Invarian jumlah suku $\\sum a_n = k+1$ dan jumlah berbobot $\\sum n a_n = k+1$ pada barisan swadeskriptif.',
          solution:
            'Saat $k = 4$, barisan $(a_0, a_1, a_2, a_3, a_4)$ memiliki $5$ suku. Karena $a_n$ menyatakan banyaknya suku di dalam barisan yang bernilai $n$, maka:\n$$\\sum_{n=0}^{4} a_n = 5 \\quad \\text{dan} \\quad \\sum_{n=0}^{4} n a_n = 5$$\n(jumlah nilai seluruh suku sama dengan menghitung setiap kemunculan $n$ sebanyak $a_n$ kali). Dari syarat kedua, $2 a_2 \\le 5 \\implies a_2 \\le 2$, sehingga pilihan $4, 6,$ dan $8$ tidak mungkin.\nMemang untuk $k = 4$, barisan $(2, 1, 2, 0, 0)$ memenuhi definisi ($0$ muncul $2$ kali, $1$ muncul $1$ kali, $2$ muncul $2$ kali, sedangkan $3$ dan $4$ muncul $0$ kali), yang memberikan $a_2 = 2$.',
          rubric: OK
        }
      ]
    }
  ]
};
