/**
 * Paket Soal Terstruktur: OSN-K Fisika SMA 2024 (29 soal isian numerik)
 * Sumber: scraped_raw/osnk-fisika-sma-2024.md (29 dari 40 soal disertakan; 11 soal bergantung gambar hilang dilewati, No. 20 & 22 dipulihkan bersama No. 25 & 27 dengan diagram SVG terkurasi).
 */
const OK = [
  {
    code: 'A1',
    text: 'Jawaban numerik benar dengan ketelitian satu angka di belakang koma sesuai pembahasan.'
  }
];

export default {
  id: 'osnk-fis-sma-2024',
  slug: 'osnk-fisika-sma-2024',
  subject: 'olimpiade-fis',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'OSN-K Fisika SMA 2024',
  relatedChapterIds: [
    'ipa10-bab2-vektor-dan-gerak-lurus',
    'ipa10-bab3-gerak-parabola-dan-melingkar',
    'ipa10-bab4-usaha-energi-dan-energi-terbarukan',
    'ipa11-bab1-dinamika-gerak-dan-hukum-newton',
    'ipa11-bab2-momentum-impuls-dan-tumbukan',
    'ipa11-bab5-getaran-gelombang-dan-bunyi'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Fisika SMA 2024',
  totalMarks: 29,
  instructions:
    'Paket ini memuat 29 soal isian numerik dari total 40 soal asli OSN-K Fisika SMA 2024 (termasuk soal nomor 20 dan 22 yang dipulihkan bersama nomor 25 dan 27 dengan ilustrasi diagram SVG). Sebanyak 11 soal dilewati karena memerlukan gambar asli yang belum lengkap pada berkas arsip (nomor 2, 5, 13, 26, 32, 34, 36, 37, 38, 39, dan 40). Pada soal nomor 14, penyebutan sudut kedua pada naskah asli tertulis $60^\\circ$ dan telah dikoreksi menjadi $30^\\circ$ sesuai naskah pembahasan. Gunakan percepatan gravitasi $g = 9.8\\ \\text{m/s}^2$ kecuali dinyatakan lain pada soal. Tuliskan jawaban numerik dalam satu angka di belakang koma. Setiap jawaban benar bernilai 1 poin (total 29 poin).',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-fisika-sma-2024.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Isian Numerik',
      marks: 29,
      stem: 'Selesaikan ke-29 soal berikut dengan menuliskan nilai numerik desimal hingga satu angka di belakang koma (soal disertakan: nomor 1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 33, dan 35; masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Sebuah proyektil ditembakkan dari permukaan tanah ke udara dengan kecepatan awal tertentu dan sudut elevasi $\\alpha$ terhadap horizontal. Percepatan gravitasi $g$ ke bawah dan hambatan udara diabaikan. Jika tinggi maksimum proyektil sama dengan $h$, sedangkan jangkauan mendatar maksimumnya sama dengan $R$, maka terdapat hubungan $\\tan\\alpha = n\\frac{h}{R}$ dengan nilai $n$ sama dengan $\\cdots$',
          answer: '$4.0$',
          principle:
            'Kinematika gerak parabola: komponen vertikal menentukan tinggi maksimum dan waktu terbang, sedangkan komponen horizontal menentukan jangkauan.',
          solution:
            'Misalkan kelajuan awal proyektil adalah $v_0$ dengan komponen $v_{0x} = v_0\\cos\\alpha$ dan $v_{0y} = v_0\\sin\\alpha$.\n\nPada titik tertinggi ($v_y = 0$), tinggi maksimum $h$ memenuhi:\n$$0 = v_{0y}^2 - 2gh \\implies h = \\frac{v_0^2\\sin^2\\alpha}{2g}.$$\n\nWaktu tempuh total di udara hingga kembali ke tanah ($y = 0$) adalah $t_{\\text{tot}} = \\frac{2v_0\\sin\\alpha}{g}$, sehingga jangkauan mendatarnya adalah:\n$$R = v_{0x}\\,t_{\\text{tot}} = \\frac{2v_0^2\\sin\\alpha\\cos\\alpha}{g}.$$\n\nBandingkan $h$ dan $R$:\n$$\\frac{h}{R} = \\frac{\\dfrac{v_0^2\\sin^2\\alpha}{2g}}{\\dfrac{2v_0^2\\sin\\alpha\\cos\\alpha}{g}} = \\frac{\\sin\\alpha}{4\\cos\\alpha} = \\frac{1}{4}\\tan\\alpha.$$\n\nDengan demikian, $\\tan\\alpha = 4\\frac{h}{R}$, sehingga $n = 4.0$.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Tinjaulah sebuah balok diam bermassa $10\\ \\text{kg}$. Kemudian balok tersebut didorong dengan gaya sebesar $200\\ \\text{N}$, tetapi balok tersebut tetap diam. Jika diketahui lantai kasar dengan koefisien gesek statis $\\mu_s$, maka pada sistem tersebut gaya geseknya sama dengan $\\cdots\\ \\text{N}$.',
          answer: '$200.0$',
          principle:
            'Hukum I Newton pada kesetimbangan statis: gaya gesek statis menyesuaikan besar gaya dorong hingga mencapai batas maksimumnya $\\mu_s N$.',
          solution:
            'Misalkan gaya dorong mendatar sebesar $F = 200\\ \\text{N}$ bekerja pada balok. Karena balok tetap diam, percepatan balok nol ($\\vec{a} = \\vec{0}$).\n\nDari Hukum I Newton pada arah horizontal:\n$$\\sum F_x = F - f_s = 0 \\implies f_s = F.$$\n\nSubstitusi nilai numerik menghasilkan:\n$$f_s = 200.0\\ \\text{N}.$$',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Dua bola identik dilepaskan dari ketinggian yang sama, namun bola pertama diberikan kecepatan horizontal awal sebesar $v$ sedangkan bola kedua tidak. Diketahui bahwa bola pertama mengenai batu setinggi $5\\ \\text{m}$ yang berada pada jarak horizontal $d$ dari titik awal, sedangkan bola kedua terdengar mengenai tanah beberapa saat kemudian. Jika diketahui bahwa $\\frac{gd^2}{v^2} = 20\\ \\text{m}$, maka ketinggian awal bola kedua adalah $\\cdots\\ \\text{m}$.',
          answer: '$15.0$',
          principle:
            'Independensi gerak horizontal (GLB) dan vertikal (gerak jatuh bebas) pada gerak parabola.',
          solution:
            'Misalkan ketinggian awal kedua bola adalah $h$ dan ketinggian batu adalah $s = 5\\ \\text{m}$.\n\nPada arah horizontal, bola pertama bergerak dengan kelajuan konstan $v$, sehingga waktu tempuh untuk mencapai jarak $d$ adalah:\n$$t = \\frac{d}{v}.$$\n\nPada arah vertikal, bola pertama jatuh bebas menempuh jarak $h - s$ dalam selang waktu $t$ yang sama:\n$$h - s = \\frac{1}{2}gt^2 = \\frac{1}{2}g\\left(\\frac{d}{v}\\right)^2 = \\frac{1}{2}\\left(\\frac{gd^2}{v^2}\\right).$$\n\nSubstitusi $s = 5\\ \\text{m}$ dan $\\frac{gd^2}{v^2} = 20\\ \\text{m}$:\n$$h = s + \\frac{1}{2}\\left(\\frac{gd^2}{v^2}\\right) = 5 + \\frac{1}{2}(20) = 15.0\\ \\text{m}.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Sebuah kendaraan melintasi jalanan berbentuk setengah lingkaran berjari-jari $R = 160\\ \\text{cm}$ selama $10\\ \\text{detik}$. Jika gaya gesek udara diabaikan, maka kecepatan rata-rata kendaraan selama menempuh lintasan itu adalah $\\cdots\\ \\text{cm/s}$.',
          answer: '$32.0$',
          principle:
            'Kecepatan rata-rata adalah perbandingan antara perpindahan vektor total $\\Delta\\vec{r}$ dan selang waktu $\\Delta t$ (berbeda dengan laju rata-rata yang memakai jarak tempuh).',
          solution:
            'Untuk lintasan berbentuk setengah lingkaran berjari-jari $R$, titik awal dan titik akhir berseberangan pada sebuah diameter, sehingga besar perpindahannya adalah:\n$$|\\Delta\\vec{r}| = 2R.$$\n\nBesar kecepatan rata-rata selama selang waktu $\\Delta t$ adalah:\n$$v_{\\text{rata-rata}} = \\frac{|\\Delta\\vec{r}|}{\\Delta t} = \\frac{2R}{\\Delta t}.$$\n\nSubstitusi $R = 160\\ \\text{cm}$ dan $\\Delta t = 10\\ \\text{s}$:\n$$v_{\\text{rata-rata}} = \\frac{2 \\times 160}{10} = 32.0\\ \\text{cm/s}.$$',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Seseorang bermassa $80\\ \\text{kg}$ melompat dari ketinggian $1\\ \\text{meter}$ dan ia lupa menekuk lututnya pada saat mendarat. Tubuhnya mengalami perlambatan pada jarak satu $\\text{cm}$. Gaya total rata-rata yang ia rasakan pada kakinya selama perlambatan adalah $\\cdots\\ \\text{N}$.',
          answer: '$79184.0$',
          principle:
            'Teorema usaha-energi mekanik: usaha gaya normal dari lantai menghentikan energi kinetik dan perubahan energi potensial selama jarak perlambatan.',
          solution:
            'Misalkan massa orang $m = 80\\ \\text{kg}$, ketinggian jatuh hingga menyentuh tanah $h = 1\\ \\text{m}$, jarak perlambatan $s = 1\\ \\text{cm} = 0.01\\ \\text{m}$, dan gaya rata-rata ke atas pada kaki $F$.\n\nDari keadaan diam di ketinggian $h$ hingga berhenti setelah turun sejauh $s$ dari permukaan tanah, perubahan energi kinetik total bernilai nol ($\\Delta K = 0$). Dengan teorema usaha-energi:\n$$W_{\\text{gravitasi}} + W_{\\text{kaki}} = \\Delta K = 0 \\implies mg(h + s) - Fs = 0.$$\n\nDiperoleh ungkapan simbolik untuk $F$:\n$$F = mg\\left(\\frac{h}{s} + 1\\right).$$\n\nSubstitusi $m = 80\\ \\text{kg}$, $g = 9.8\\ \\text{m/s}^2$, $h = 1\\ \\text{m}$, dan $s = 0.01\\ \\text{m}$:\n$$F = 80 \\times 9.8 \\times \\left(\\frac{1}{0.01} + 1\\right) = 784 \\times 101 = 79184.0\\ \\text{N}.$$',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Mobil A berada $25\\ \\text{km}$ di depan mobil B. Mula-mula mobil A bergerak maju meninggalkan mobil B dengan kecepatan awal $30\\ \\text{km/jam}$ dan percepatan konstan $2\\ \\text{km/jam}^2$. Satu jam kemudian mobil B mulai bergerak menyusul mobil A dengan kecepatan awal $40\\ \\text{km/jam}$ dan percepatan konstan $5\\ \\text{km/jam}^2$. Ketika mobil B tepat menyusul mobil A, kecepatan mobil B sama dengan $\\cdots\\ \\text{km/jam}$.',
          answer: '$60.0$',
          principle:
            'Kinematika gerak lurus berubah beraturan (GLBB) dua benda dengan acuan waktu dan posisi awal yang berbeda.',
          solution:
            'Tetapkan posisi awal mobil B sebagai $x = 0$ dan waktu mulai bergeraknya mobil A sebagai $t = 0$.\n\nPosisi mobil A untuk $t \\ge 0$ (dengan $d = 25\\ \\text{km}$, $v_{0A} = 30\\ \\text{km/jam}$, $a_A = 2\\ \\text{km/jam}^2$):\n$$x_A(t) = d + v_{0A}t + \\frac{1}{2}a_A t^2 = 25 + 30t + t^2.$$\n\nMobil B baru mulai bergerak pada $t = 1\\ \\text{jam}$ (dengan $v_{0B} = 40\\ \\text{km/jam}$, $a_B = 5\\ \\text{km/jam}^2$), sehingga untuk $t \\ge 1$:\n$$x_B(t) = v_{0B}(t - 1) + \\frac{1}{2}a_B(t - 1)^2 = 40(t - 1) + \\frac{5}{2}(t - 1)^2.$$\n\nSaat mobil B tepat menyusul mobil A, $x_A(t) = x_B(t)$:\n$$25 + 30t + t^2 = 40t - 40 + \\frac{5}{2}(t^2 - 2t + 1).$$\nKalikan kedua ruas dengan $2$ dan rapikan:\n$$50 + 60t + 2t^2 = 80t - 80 + 5t^2 - 10t + 5 \\implies 3t^2 + 10t - 125 = 0.$$\nFaktorkan persamaan kuadrat tersebut:\n$$(3t + 25)(t - 5) = 0.$$\nKarena harus memenuhi $t \\ge 1\\ \\text{jam}$, dipilih $t = 5\\ \\text{jam}$.\n\nKecepatan mobil B saat menyusul ($t_B = t - 1 = 4\\ \\text{jam}$):\n$$v_B = v_{0B} + a_B(t - 1) = 40 + 5(5 - 1) = 60.0\\ \\text{km/jam}.$$',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Dua bola diluncurkan dari permukaan tanah dengan kecepatan yang saling tegak lurus dengan laju masing-masingnya adalah $v_1 = 2\\ \\text{m/s}$ dan $v_2 = 2\\sqrt{3}\\ \\text{m/s}$, dan diketahui pula bahwa sudut peluncuran bola pertama terhadap tanah adalah $30^\\circ$. Jika diketahui bahwa percepatan gravitasi adalah $10\\ \\text{m/s}^2$, maka lama waktu yang dibutuhkan hingga kecepatan kedua bola tegak lurus kembali adalah $\\cdots\\ \\text{s}$.',
          answer: '$0.4$',
          principle:
            'Syarat dua vektor kecepatan saling tegak lurus adalah hasil kali titiknya bernilai nol: $\\vec{v}_1(t) \\cdot \\vec{v}_2(t) = 0$.',
          solution:
            'Karena kedua bola diluncurkan ke atas dari permukaan tanah dan saling tegak lurus, bola pertama ditembakkan pada sudut $\\theta_1 = 30^\\circ$ dan bola kedua pada sudut $\\theta_2 = 30^\\circ + 90^\\circ = 120^\\circ$ terhadap sumbu-$x$ positif.\n\nKomponen vektor kecepatan awal masing-masing:\n$$\\vec{v}_1(0) = (v_1\\cos 30^\\circ)\\hat{i} + (v_1\\sin 30^\\circ)\\hat{j} = \\sqrt{3}\\,\\hat{i} + 1\\,\\hat{j}\\ (\\text{m/s}),$$\n$$\\vec{v}_2(0) = (v_2\\cos 120^\\circ)\\hat{i} + (v_2\\sin 120^\\circ)\\hat{j} = -\\sqrt{3}\\,\\hat{i} + 3\\,\\hat{j}\\ (\\text{m/s}).$$\n\nPada saat $t$, percepatan gravitasi $\\vec{g} = -g\\hat{j}$ mengubah komponen vertikal:\n$$\\vec{v}_1(t) = \\sqrt{3}\\,\\hat{i} + (1 - gt)\\hat{j}, \\qquad \\vec{v}_2(t) = -\\sqrt{3}\\,\\hat{i} + (3 - gt)\\hat{j}.$$\n\nSyarat tegak lurus $\\vec{v}_1(t) \\cdot \\vec{v}_2(t) = 0$ menghasilkan:\n$$(\\sqrt{3})(-\\sqrt{3}) + (1 - gt)(3 - gt) = 0 \\implies -3 + 3 - 4gt + g^2 t^2 = 0 \\implies gt(gt - 4) = 0.$$\n\nUntuk $t > 0$ dengan $g = 10\\ \\text{m/s}^2$:\n$$t = \\frac{4}{g} = \\frac{4}{10} = 0.4\\ \\text{s}.$$',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Sebuah partikel telah berpindah sepanjang lintasan pada bidang $xy$ dari titik $1$ yang vektor posisinya $\\vec{r}_1 = \\hat{i} + 2\\hat{j}$ ke titik $2$ dengan vektor posisinya $\\vec{r}_2 = 2\\hat{i} - 3\\hat{j}$. Selama waktu itu partikel tersebut mengalami gaya $\\vec{F} = 3\\hat{i} + 4\\hat{j}$. Jika $\\vec{r}_1$, $\\vec{r}_2$, dan $\\vec{F}$ dalam satuan SI, usaha yang dilakukan oleh gaya $\\vec{F}$ adalah $\\cdots\\ \\text{J}$.',
          answer: '$-17.0$',
          principle:
            'Usaha oleh gaya konstan $\\vec{F}$ merupakan hasil kali titik antara vektor gaya dan vektor perpindahan: $W = \\vec{F} \\cdot \\Delta\\vec{r}$.',
          solution:
            'Vektor perpindahan partikel dari titik $1$ ke titik $2$ adalah:\n$$\\Delta\\vec{r} = \\vec{r}_2 - \\vec{r}_1 = (2\\hat{i} - 3\\hat{j}) - (\\hat{i} + 2\\hat{j}) = \\hat{i} - 5\\hat{j}\\ \\text{m}.$$\n\nUsaha yang dilakukan oleh gaya $\\vec{F} = 3\\hat{i} + 4\\hat{j}\\ \\text{N}$ adalah:\n$$W = \\vec{F} \\cdot \\Delta\\vec{r} = (3)(1) + (4)(-5) = 3 - 20 = -17.0\\ \\text{J}.$$\n(Tanda negatif menunjukkan gaya berlawanan arah dengan komponen perpindahan total sehingga besar usahanya $17.0\\ \\text{J}$.)',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Seorang anak ($m = 20\\ \\text{kg}$) duduk di atas sebuah meja datar yang dapat diputar. Meja kemudian diputar dengan kecepatan sudut sebesar $2\\ \\text{rad/detik}$. Jika koefisien gesek si anak terhadap meja $0,4$, maka jarak maksimum yang ditempuh secara radial oleh si anak di atas meja tanpa slip adalah $\\cdots\\ \\text{cm}$.',
          answer: '$98.0$',
          principle:
            'Pada gerak melingkar beraturan di bidang datar, gaya gesek statis berperan sebagai gaya sentripetal dengan syarat $f_s \\le \\mu_s N$.',
          solution:
            'Pada arah vertikal, gaya normal mengimbangi berat anak:\n$$N = mg.$$\n\nPada arah radial, satu-satunya gaya mendatar adalah gaya gesek statis $f_s$ yang memberikan percepatan sentripetal $\\omega^2 r$:\n$$f_s = m\\omega^2 r.$$\n\nAgar anak tidak slip, harus dipenuhi $f_s \\le \\mu_s N$:\n$$m\\omega^2 r \\le \\mu_s mg \\implies r \\le \\frac{\\mu_s g}{\\omega^2}.$$\n\nSubstitusi $\\mu_s = 0.4$, $g = 9.8\\ \\text{m/s}^2$, dan $\\omega = 2\\ \\text{rad/s}$:\n$$r_{\\text{maks}} = \\frac{0.4 \\times 9.8}{2^2} = 0.98\\ \\text{m} = 98.0\\ \\text{cm}.$$',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Suatu bandul matematis dengan massa $m$ dan panjang $l$ digantungkan di atap sebuah kereta yang berada pada rel dengan kemiringan $60^\\circ$ terhadap horizontal. Saat kereta direm diam terhadap tanah, perioda bandul adalah $T$, namun saat rem dilepaskan dan kereta meluncur, perioda bandul berubah menjadi $T\'$. Jika massa kereta jauh lebih besar daripada massa bandul, maka perbandingan $\\frac{T\'}{T}$ adalah $\\cdots$',
          answer: '$1.4$',
          principle:
            'Periode bandul matematis dalam kerangka dipercepat bergantung pada besar percepatan gravitasi efektif $\\vec{g}_{\\text{ef}} = \\vec{g} - \\vec{a}_{\\text{kereta}}$.',
          solution:
            'Saat kereta diam, percepatan gravitasi efektif adalah $g$, sehingga periodenya:\n$$T = 2\\pi\\sqrt{\\frac{l}{g}}.$$\n\nKetika rem dilepaskan dan kereta meluncur bebas menuruni rel licin dengan kemiringan $\\theta = 60^\\circ$ ($M_{\\text{kereta}} \\gg m$), percepatan kereta searah bidang miring ke bawah adalah $a = g\\sin\\theta$.\n\nDalam kerangka acuan kereta, komponen percepatan gravitasi sejajar bidang miring tepat ditiadakan oleh percepatan semu:\n$$g_{\\text{ef},\\parallel} = g\\sin\\theta - a = 0,$$\n\nsedangkan komponen tegak lurus bidang miring tetap:\n$$g_{\\text{ef},\\perp} = g\\cos\\theta.$$\n\nMaka $g_{\\text{ef}} = g\\cos\\theta$, dan periode bandul menjadi:\n$$T\' = 2\\pi\\sqrt{\\frac{l}{g\\cos\\theta}}.$$\n\nPerbandingan periodenya adalah:\n$$\\frac{T\'}{T} = \\frac{1}{\\sqrt{\\cos 60^\\circ}} = \\frac{1}{\\sqrt{1/2}} = \\sqrt{2} \\approx 1.4.$$',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Suatu partikel sedang bergerak dalam lintasan parabola dalam pengaruh gravitasi dengan hambatan udara diabaikan. Apabila pada saat partikel memiliki besar komponen kecepatan vertikal $9\\ \\text{m/s}$ dengan sudut kecepatan terhadap sumbu horizontal adalah $60^\\circ$, maka besar komponen kecepatan arah vertikal pada saat sudut kecepatan terhadap sumbu horizontalnya $30^\\circ$ adalah $\\cdots\\ \\text{m/s}$.',
          answer: '$3.0$',
          principle:
            'Pada gerak parabola tanpa hambatan udara, komponen kecepatan horizontal $v_x$ bersifat konstan.',
          solution:
            'Misalkan pada sudut arah kecepatan $\\theta$ terhadap horizontal, besar komponen vertikal adalah $v_y(\\theta)$ sehingga:\n$$\\tan\\theta = \\frac{v_y(\\theta)}{v_x} \\implies v_x = \\frac{v_y(\\theta)}{\\tan\\theta}.$$\n\nKarena tidak ada gaya pada arah horizontal, $v_x$ tetap konstan sepanjang lintasan:\n$$\\frac{v_y(30^\\circ)}{\\tan 30^\\circ} = \\frac{v_y(60^\\circ)}{\\tan 60^\\circ}.$$\n\nDengan $v_y(60^\\circ) = 9\\ \\text{m/s}$, $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$, dan $\\tan 60^\\circ = \\sqrt{3}$:\n$$v_y(30^\\circ) = v_y(60^\\circ)\\frac{\\tan 30^\\circ}{\\tan 60^\\circ} = 9 \\cdot \\frac{1/\\sqrt{3}}{\\sqrt{3}} = \\frac{9}{3} = 3.0\\ \\text{m/s}.$$',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Suatu sistem pegas bermassa digantungkan pada atap sebuah kereta. Pada awalnya kereta dalam keadaan diam dan diketahui bahwa pegas menyimpang sejauh $4\\ \\text{cm}$ dari panjang rileksnya. Kemudian kereta dipercepat secara horizontal dengan percepatan sebesar $a = \\frac{3}{4}g$ dengan $g$ percepatan gravitasi, sehingga sistem pegas tersebut menjadi miring dan simpangannya bertambah besar. Besar simpangan pegas baru jika diasumsikan massa tidak bergerak terhadap kereta adalah $\\cdots\\ \\text{cm}$.',
          answer: '$5.0$',
          principle:
            'Kesetimbangan massa pada kerangka acuan dipercepat: gaya pegas mengimbangi resultan gaya berat dan gaya fiktif $ma$.',
          solution:
            'Ketika kereta diam, simpangan awal pegas $s_0 = 4\\ \\text{cm}$ memenuhi kesetimbangan vertikal:\n$$k s_0 = mg.$$\n\nSaat kereta dipercepat secara horizontal dengan $a = \\frac{3}{4}g$ dan massa diam terhadap kereta pada sudut miring $\\theta$ terhadap vertikal, gaya pegas $F_s = ks$ memenuhi:\n$$ks\\cos\\theta = mg, \\qquad ks\\sin\\theta = ma.$$\n\nKuadratkan dan jumlahkan kedua persamaan menggunakan identitas $\\cos^2\\theta + \\sin^2\\theta = 1$:\n$$(ks)^2 = (mg)^2 + (ma)^2 \\implies ks = m\\sqrt{g^2 + a^2}.$$\n\nSubstitusi $a = \\frac{3}{4}g$ dan $mg = ks_0$:\n$$ks = ks_0\\sqrt{1 + \\left(\\frac{3}{4}\\right)^2} = ks_0\\sqrt{\\frac{25}{16}} = \\frac{5}{4}ks_0 \\implies s = \\frac{5}{4}s_0.$$\n\nDengan $s_0 = 4\\ \\text{cm}$:\n$$s = \\frac{5}{4} \\times 4 = 5.0\\ \\text{cm}.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Tinjau sebuah kubus dengan sisi $R$. Kemudian $7$ buah massa identik $m$ ditempatkan pada titik sudut kubus sehingga menyisakan satu titik sudut kubus yang tidak berisi massa. Jika energi potensial gravitasi sistem tersebut dapat dituliskan dalam bentuk $U_{\\text{grav}} = -\\frac{Gm^2}{R}\\left(a + \\frac{b}{\\sqrt{2}} + \\frac{c}{\\sqrt{3}}\\right)$, maka nilai $a + b + c = \\cdots$',
          answer: '$21.0$',
          principle:
            'Energi potensial gravitasi sistem banyak partikel adalah jumlah energi potensial interaksi setiap pasangan partikel berbeda $\\sum_{i < j} -\\frac{Gm_i m_j}{r_{ij}}$.',
          solution:
            'Sebuah kubus memiliki $8$ titik sudut dengan total $\\binom{8}{2} = 28$ pasangan titik sudut:\n- $12$ pasangan berjarak $R$ (rusuk kubus),\n- $12$ pasangan berjarak $\\sqrt{2}R$ (diagonal sisi),\n- $4$ pasangan berjarak $\\sqrt{3}R$ (diagonal ruang).\n\nApabila $1$ titik sudut dibiarkan kosong, maka interaksi yang hilang adalah pasangan yang terhubung ke titik sudut kosong tersebut, yaitu $3$ rusuk, $3$ diagonal sisi, dan $1$ diagonal ruang. Tersisa $\\binom{7}{2} = 21$ pasangan massa:\n- berjarak $R$: $a = 12 - 3 = 9$,\n- berjarak $\\sqrt{2}R$: $b = 12 - 3 = 9$,\n- berjarak $\\sqrt{3}R$: $c = 4 - 1 = 3$.\n\nEnergi potensial gravitasi total sistem adalah:\n$$U_{\\text{grav}} = -\\frac{Gm^2}{R}\\left(9 + \\frac{9}{\\sqrt{2}} + \\frac{3}{\\sqrt{3}}\\right).$$\n\nMaka:\n$$a + b + c = 9 + 9 + 3 = 21.0.$$',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Sebuah partikel bergerak sepanjang sumbu $x$ dengan percepatan yang dapat dituliskan sebagai $a = 6t - 2\\ \\text{m/s}^2$. Mula-mula partikel tersebut berada pada posisi $x = 40\\ \\text{m}$ dengan kecepatan awal $8\\ \\text{m/s}$ ke arah $x$ negatif. Ketika partikel tersebut berada pada keadaan diam untuk $t > 0$, posisi partikel tersebut berada di $x = \\cdots\\ \\text{m}$.',
          answer: '$28.0$',
          principle:
            'Hubungan integral kinematika satu dimensi: $v(t) = v_0 + \\int_0^t a(t\')\\,dt\'$ dan $x(t) = x_0 + \\int_0^t v(t\')\\,dt\'$.',
          solution:
            'Diketahui $x_0 = 40\\ \\text{m}$, $v_0 = -8\\ \\text{m/s}$, dan $a(t) = 6t - 2\\ \\text{m/s}^2$.\n\nIntegralkan percepatan terhadap waktu untuk memperoleh fungsi kecepatan:\n$$v(t) = v_0 + \\int_0^t (6t\' - 2)\\,dt\' = -8 + 3t^2 - 2t.$$\n\nPartikel diam saat $v(t) = 0$:\n$$3t^2 - 2t - 8 = 0 \\implies (3t + 4)(t - 2) = 0.$$\nUntuk $t > 0$, diperoleh $t = 2\\ \\text{s}$.\n\nIntegralkan kecepatan terhadap waktu untuk memperoleh posisi pada $t = 2\\ \\text{s}$:\n$$x(2) = x_0 + \\int_0^2 (-8 + 3t\'^2 - 2t\')\\,dt\' = 40 + \\Big[-8t\' + t\'^3 - t\'^2\\Big]_0^2 = 40 + (-16 + 8 - 4) = 28.0\\ \\text{m}.$$',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Suatu sistem satu dimensi memiliki energi potensial $U$ (bersatuan Joule) sebagai fungsi jarak $x$ (bersatuan meter) yang dinyatakan dalam bentuk $U(x) = 3x^2 - 4x^3$. Jika $x_0$ adalah posisi kesetimbangan stabil sistem, maka nilai $U(x_0 - 1)$ sama dengan $\\cdots\\ \\text{J}$.',
          answer: '$7.0$',
          principle:
            'Syarat kesetimbangan mekanik satu dimensi adalah $F = -\\frac{dU}{dx} = 0$, dan kesetimbangan stabil terjadi pada minimum lokal ($\\frac{d^2 U}{dx^2} > 0$).',
          solution:
            'Tentukan titik-titik kesetimbangan dari $\\frac{dU}{dx} = 0$:\n$$\\frac{dU}{dx} = 6x - 12x^2 = 6x(1 - 2x) = 0 \\implies x = 0 \\quad \\text{atau} \\quad x = \\frac{1}{2}.$$\n\nUji kestabilan menggunakan turunan kedua:\n$$\\frac{d^2 U}{dx^2} = 6 - 24x.$$\n- Pada $x = 0$: $\\frac{d^2 U}{dx^2} = 6 > 0$ (minimum lokal, kesetimbangan stabil).\n- Pada $x = \\frac{1}{2}$: $\\frac{d^2 U}{dx^2} = -6 < 0$ (maksimum lokal, kesetimbangan tak stabil).\n\nJadi $x_0 = 0$, sehingga:\n$$U(x_0 - 1) = U(-1) = 3(-1)^2 - 4(-1)^3 = 3 + 4 = 7.0\\ \\text{J}.$$',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Tinjaulah sebuah balok bermassa $5\\ \\text{kg}$ yang sedang bergerak dengan kecepatan $10\\ \\text{m/s}$, kemudian didorong oleh gaya sebesar $100\\ \\text{N}$. Jika diketahui lantai licin, maka energi kinetik sistem $1\\ \\text{detik}$ setelah didorong adalah $\\cdots\\ \\text{J}$.',
          answer: '$2250.0$',
          principle:
            'Hukum II Newton dan definisi energi kinetik $K = \\frac{1}{2}mv^2$ (atau teorema usaha-energi).',
          solution:
            'Diketahui $m = 5\\ \\text{kg}$, $v_0 = 10\\ \\text{m/s}$, $F = 100\\ \\text{N}$, dan $t = 1\\ \\text{s}$.\n\nKarena lantai licin, percepatan balok adalah:\n$$a = \\frac{F}{m}.$$\n\nKecepatan balok setelah selang waktu $t$ adalah:\n$$v(t) = v_0 + at = v_0 + \\frac{F}{m}t.$$\n\nEnergi kinetik pada saat $t$ menjadi:\n$$K(t) = \\frac{1}{2}m\\left(v_0 + \\frac{F}{m}t\\right)^2.$$\n\nSubstitusi nilai numerik pada $t = 1\\ \\text{s}$:\n$$v(1) = 10 + \\frac{100}{5}(1) = 30\\ \\text{m/s},$$\n$$K(1) = \\frac{1}{2}(5)(30)^2 = 2250.0\\ \\text{J}.$$',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Sebuah partikel bermassa $m = 100\\ \\text{g}$ dilontarkan secara horizontal oleh sebuah pegas berkonstanta $k = 100\\ \\text{N/m}$ dari pinggir sebuah tebing yang memiliki ketinggian $h = 5\\ \\text{m}$ dari permukaan laut. Benda mulanya ditekan ke arah pegas sejauh $x = 20\\ \\text{cm}$, kemudian dilepaskan. Terdapat tebing lain dengan ketinggian yang sama berjarak $d = 3\\ \\text{m}$ dari tebing pertama. Jika tiap tumbukan dianggap elastis sempurna ($g = 9.8\\ \\text{m/s}^2$), partikel akan memantul sebanyak $\\cdots$ kali sebelum sampai ke permukaan laut.',
          figures: [
            {
              src: '/papers/osnk-fis-sma-2024/fig-20.svg',
              alt: 'Skema pegas horizontal berkonstanta k melontarkan massa m secara mendatar dari tepi tebing setinggi 5 meter menghadap tebing seberang berjarak 3 meter di atas permukaan laut.',
              caption: 'Ilustrasi pegas pelontar massa m di antara dua tebing setinggi h = 5 m terpisah d = 3 m.'
            }
          ],
          answer: '$2.0$',
          principle:
            'Kekekalan energi potensial pegas menjadi energi kinetik peluncuran horizontal, dipadukan dengan gerak parabola berpantulan elastis di antara dua dinding sejajar.',
          solution:
            'Dari kekekalan energi mekanik saat pegas dilepas, kelajuan mendatar awal partikel adalah:\n$$\\frac{1}{2}kx^2 = \\frac{1}{2}mv_0^2 \\implies v_0 = x\\sqrt{\\frac{k}{m}}.$$\nSubstitusi $x = 0.20\\ \\text{m}$, $k = 100\\ \\text{N/m}$, dan $m = 0.1\\ \\text{kg}$:\n$$v_0 = 0.20\\sqrt{\\frac{100}{0.1}} = 0.20\\sqrt{1000} = 2\\sqrt{10}\\ \\text{m/s}.$$\nPada arah vertikal, pantulan elastis terhadap dinding vertikal hanya membalikkan arah kecepatan horizontal ($v_x \\to -v_x$) dan tidak mengubah gerak jatuh bebas vertikal. Waktu tempuh menuju permukaan laut adalah:\n$$t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2(5)}{9.8}} = \\frac{1}{\\sqrt{0.98}}\\ \\text{s}.$$\nTotal jarak tempuh mendatar (tanpa memedulikan arah bolak-baliknya) selama jatuh adalah:\n$$D = v_0 t = x\\sqrt{\\frac{2kh}{mg}} = 2\\sqrt{\\frac{10}{0.98}} = 2\\sqrt{10.204\\dots} \\approx 6.39\\ \\text{m}.$$\nPartikel menumbuk dinding pertama kali pada jarak mendatar $d = 3\\ \\text{m}$, kedua kali pada $2d = 6\\ \\text{m}$, dan belum mencapai $3d = 9\\ \\text{m}$ saat menyentuh laut. Jadi banyak pantulan adalah:\n$$n = \\left\\lfloor \\frac{D}{d} \\right\\rfloor = \\left\\lfloor \\frac{6.39}{3} \\right\\rfloor = 2.0\\ \\text{kali}.$$',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Gabungan antara gesekan udara dan hambatan udara pada seorang pengendara sepeda menghasilkan gaya sebesar $F = \\alpha V$, dengan $V$ adalah kecepatannya dan $\\alpha = 3\\ \\text{Ns/m}$. Jika dengan tenaga maksimal, pengendara sepeda mampu menghasilkan daya penggerak sebesar $600\\ \\text{Watt}$, maka kecepatan maksimumnya di permukaan datar yang tidak ada angin adalah $\\cdots\\ \\text{m/s}$.',
          answer: '$14.1$',
          principle:
            'Pada kecepatan maksimum (terminal) di lintasan datar, gaya penggerak tepat mengimbangi gaya hambat dan daya memenuhi $P = F_{\\text{penggerak}} V$.',
          solution:
            'Saat pengendara mencapai kelajuan maksimum $V_{\\text{maks}}$ pada jalan datar tanpa angin, percepatannya nol sehingga besar gaya penggerak sama dengan gaya hambat:\n$$F_{\\text{penggerak}} = F = \\alpha V_{\\text{maks}}.$$\n\nDaya penggerak maksimum yang dikerahkan adalah:\n$$P = F_{\\text{penggerak}} V_{\\text{maks}} = \\alpha V_{\\text{maks}}^2 \\implies V_{\\text{maks}} = \\sqrt{\\frac{P}{\\alpha}}.$$\n\nSubstitusi $P = 600\\ \\text{W}$ dan $\\alpha = 3\\ \\text{Ns/m}$:\n$$V_{\\text{maks}} = \\sqrt{\\frac{600}{3}} = \\sqrt{200} = 10\\sqrt{2} \\approx 14.1\\ \\text{m/s}.$$',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Tinjau suatu sistem silinder pejal bermassa $M$ dan berjari-jari $R$ yang terhubung pada pusatnya oleh dua pegas ke dinding tetap di kiri dan kanannya sehingga dapat berosilasi horizontal secara rotasi tanpa slip di atas lantai datar. Untuk mengetahui konstanta pegas pertama ($k_1$), dilakukan pengukuran terpisah dengan menggantungkan silinder pada pegas $k_1$ secara bebas tanpa rotasi sehingga diperoleh perioda osilasi sederhana $T_1 = \\sqrt{2}\\ \\text{detik}$. Jika diketahui $k_2 = 2k_1$, maka perioda osilasi sistem pada lantai tersebut adalah $\\cdots\\ \\text{detik}$.',
          figures: [
            {
              src: '/papers/osnk-fis-sma-2024/fig-22.svg',
              alt: 'Silinder pejal bermassa M dan jari-jari R di atas lantai datar dihubungkan pada pusatnya oleh pegas kiri dan pegas kanan ke dua dinding tetap.',
              caption: 'Sistem silinder pejal menggelinding tanpa slip antara dua pegas k1 dan k2.'
            }
          ],
          answer: '$1.0$',
          principle:
            'Kekekalan energi osilasi harmonik sistem benda tegar menggelinding tanpa slip ($E = \\frac{1}{2}(M + I/R^2)\\dot{x}^2 + \\frac{1}{2}k_{\\text{ef}}x^2$) untuk menentukan massa efektif.',
          solution:
            'Pada pengukuran gantung vertikal menggunakan pegas $k_1$ saja, perioda osilasinya memenuhi:\n$$T_1 = 2\\pi\\sqrt{\\frac{M}{k_1}}.$$\nKetika silinder pejal ($I = \\frac{1}{2}MR^2$) diletakkan horizontal di antara kedua pegas dan menggelinding tanpa slip ($\\dot{\\theta} = \\frac{\\dot{x}}{R}$), jika pusat massa bergeser sebesar $x$, salah satu pegas tertekan sejauh $x$ dan pegas lainnya teregang sejauh $x$, sehingga keduanya menghasilkan gaya pemulih searah ($k_{\\text{ef}} = k_1 + k_2$).\nEnergi mekanik total sistem saat berosilasi adalah:\n$$E = \\frac{1}{2}M\\dot{x}^2 + \\frac{1}{2}I\\left(\\frac{\\dot{x}}{R}\\right)^2 + \\frac{1}{2}(k_1 + k_2)x^2 = \\frac{1}{2}\\left(M + \\frac{1}{2}M\\right)\\dot{x}^2 + \\frac{1}{2}(k_1 + 2k_1)x^2 = \\frac{3}{4}M\\dot{x}^2 + \\frac{3}{2}k_1 x^2.$$\nDengan demikian $M_{\\text{ef}} = \\frac{3}{2}M$ dan $k_{\\text{ef}} = 3k_1$, sehingga frekuensi sudut osilasinya adalah:\n$$\\omega = \\sqrt{\\frac{k_{\\text{ef}}}{M_{\\text{ef}}}} = \\sqrt{\\frac{3k_1}{\\frac{3}{2}M}} = \\sqrt{\\frac{2k_1}{M}}.$$\nPerioda osilasi sistem horizontal menjadi:\n$$T_2 = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{M}{2k_1}} = \\frac{T_1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{\\sqrt{2}} = 1.0\\ \\text{s}.$$',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Sebuah mobil dengan massa $1200\\ \\text{kg}$ yang sedang melaju dengan kecepatan $60\\ \\text{km/jam}$ di jalan datar tiba-tiba dimasukkan ke gigi netral (yaitu dibiarkan meluncur), sehingga kecepatannya berkurang dengan cara $v = \\frac{v_0}{1 + t/60}\\ \\text{km/jam}$ di mana $t$ dalam detik. Daya yang diperlukan untuk mengendarai mobil ini dengan kecepatan $30\\ \\text{km/jam}$ di jalan yang sama adalah $\\cdots\\ \\text{kWatt}$.',
          answer: '$0.7$',
          principle:
            'Gaya hambat sebagai fungsi kecepatan diperoleh dari perlambatan saat meluncur bebas $F_{\\text{hambat}} = -m\\frac{dv}{dt}$, lalu daya konstan memenuhi $P = F_{\\text{hambat}}v$.',
          solution:
            'Nyatakan kelajuan awal dalam satuan SI:\n$$v_0 = 60\\ \\text{km/jam} = \\frac{60000}{3600} = \\frac{50}{3}\\ \\text{m/s}.$$\n\nDengan konstanta waktu $\\tau = 60\\ \\text{s}$, kelajuan saat meluncur bebas adalah $v(t) = \\frac{v_0}{1 + t/\\tau}$. Turunkan terhadap $t$:\n$$a(t) = \\frac{dv}{dt} = -\\frac{v_0/\\tau}{(1 + t/\\tau)^2} = -\\frac{1}{\\tau v_0}\\left(\\frac{v_0}{1 + t/\\tau}\\right)^2 = -\\frac{v^2}{\\tau v_0}.$$\n\nBesar gaya hambat pada kelajuan $v$ adalah:\n$$F_{\\text{hambat}}(v) = m|a| = \\frac{mv^2}{\\tau v_0}.$$\n\nUntuk mempertahankan kelajuan konstan $v = 30\\ \\text{km/jam} = \\frac{1}{2}v_0$, mesin harus memberikan gaya sebesar $F_{\\text{hambat}}(v)$, sehingga daya yang diperlukan adalah:\n$$P = F_{\\text{hambat}}(v)\\,v = \\frac{mv^3}{\\tau v_0} = \\frac{m(v_0/2)^3}{\\tau v_0} = \\frac{mv_0^2}{8\\tau}.$$\n\nSubstitusi $m = 1200\\ \\text{kg}$, $v_0 = \\frac{50}{3}\\ \\text{m/s}$, dan $\\tau = 60\\ \\text{s}$:\n$$P = \\frac{1200 \\times (50/3)^2}{8 \\times 60} = \\frac{1200 \\times 2500}{480 \\times 9} = \\frac{6250}{9}\\ \\text{W} \\approx 694.4\\ \\text{W} \\approx 0.7\\ \\text{kW}.$$',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Sebuah batu bata ($m = 0,5\\ \\text{kg}$) yang sedang bergerak dengan kecepatan $5\\ \\text{m/s}$ mulai mendaki suatu bidang miring dengan kemiringan $\\theta = 30^\\circ$ terhadap bidang horizontal. Jika koefisien gesek batu bata terhadap bidang miring $\\mu = \\frac{\\sqrt{3}}{12}$, maka posisi batu bata terhadap posisi awal di bidang miring setelah ia mendaki selama $1,3\\ \\text{detik}$ adalah $\\cdots\\ \\text{m}$.',
          answer: '$1.6$',
          principle:
            'Dinamika gerak pada bidang miring kasar dua tahap: periksa waktu berhenti di titik tertinggi dan arah gaya gesek saat benda berbalik arah turun.',
          solution:
            'Saat batu bata bergerak naik, gaya normal $N = mg\\cos\\theta$ dan gaya gesek kinetik $f_k = \\mu mg\\cos\\theta$ berarah menuruni bidang miring bersama komponen berat $mg\\sin\\theta$.\n\nPerlambatan saat naik:\n$$a_{\\text{naik}} = g(\\sin\\theta + \\mu\\cos\\theta) = g\\left(\\frac{1}{2} + \\frac{\\sqrt{3}}{12}\\cdot\\frac{\\sqrt{3}}{2}\\right) = \\frac{5}{8}g.$$\n\nDengan $g = 9.8\\ \\text{m/s}^2$, $a_{\\text{naik}} = \\frac{5}{8}(9.8) = 6.125\\ \\text{m/s}^2$. Waktu hingga berhenti sesaat di puncak adalah:\n$$t_{\\text{henti}} = \\frac{v_0}{a_{\\text{naik}}} = \\frac{5}{6.125} = \\frac{40}{49}\\ \\text{s} \\approx 0.816\\ \\text{s} < 1.3\\ \\text{s}.$$\n\nJarak maksimum yang dicapai pada $t_{\\text{henti}}$:\n$$s_{\\text{maks}} = \\frac{v_0^2}{2a_{\\text{naik}}} = \\frac{25}{12.25} = \\frac{100}{49}\\ \\text{m} \\approx 2.041\\ \\text{m}.$$\n\nKarena $\\tan 30^\\circ = \\frac{\\sqrt{3}}{3} > \\frac{\\sqrt{3}}{12} = \\mu$, batu bata tidak dapat bertahan diam di puncak dan meluncur kembali menuruni bidang miring dengan gaya gesek berarah ke atas bidang:\n$$a_{\\text{turun}} = g(\\sin\\theta - \\mu\\cos\\theta) = \\left(\\frac{1}{2} - \\frac{1}{8}\\right)g = \\frac{3}{8}g = 3.675\\ \\text{m/s}^2.$$\n\nDalam sisa waktu $\\Delta t = 1.3 - \\frac{40}{49} = \\frac{23.7}{49}\\ \\text{s} \\approx 0.484\\ \\text{s}$, batu bata turun sejauh:\n$$\\Delta s = \\frac{1}{2}a_{\\text{turun}}(\\Delta t)^2 = \\frac{1}{2}(3.675)\\left(\\frac{23.7}{49}\\right)^2 \\approx 0.430\\ \\text{m}.$$\n\nJadi posisi batu bata terhadap titik awal pada $t = 1.3\\ \\text{s}$ adalah:\n$$s(1.3) = s_{\\text{maks}} - \\Delta s \\approx 2.041 - 0.430 = 1.611\\ \\text{m} \\approx 1.6\\ \\text{m}.$$',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Sebuah batu jatuh bebas dari ketinggian $H$ dan menumbuk bidang miring bersudut $45^\\circ$ pada titik yang tingginya $h$. Akibat tumbukan ini batu bergerak dengan kecepatan mendatar. Agar total waktu yang diperlukan batu untuk mencapai tanah bersifat maksimum, maka nilai $\\frac{H}{h}$ sama dengan $\\cdots$',
          figures: [
            {
              src: '/papers/osnk-fis-sma-2024/fig-25.svg',
              alt: 'Ilustrasi batu jatuh vertikal dari ketinggian H menumbuk bidang miring bersudut 45 derajat pada ketinggian h lalu memantul mendatar ke tanah.',
              caption: 'Lintasan batu jatuh dari ketinggian H dan memantul mendatar pada bidang miring 45 derajat.'
            }
          ],
          answer: '$2.0$',
          principle:
            'Kinematika gerak jatuh bebas dua tahap dan optimasi fungsi menggunakan turunan pertama.',
          solution:
            'Tahap pertama, batu jatuh bebas vertikal dari ketinggian $H$ ke ketinggian $h$ dalam waktu:\n$$t_1 = \\sqrt{\\frac{2(H - h)}{g}}.$$\n\nTepat setelah tumbukan pada ketinggian $h$, kecepatan batu murni mendatar ($v_y = 0$), sehingga gerak vertikal tahap kedua kembali berupa jatuh bebas dari ketinggian $h$ ke tanah:\n$$t_2 = \\sqrt{\\frac{2h}{g}}.$$\n\nTotal waktu tempuh sebagai fungsi $h$ ($0 \\le h \\le H$) adalah:\n$$t(h) = t_1 + t_2 = \\sqrt{\\frac{2}{g}}\\left(\\sqrt{H - h} + \\sqrt{h}\\right).$$\n\nAgar $t(h)$ maksimum, syarat stasioner $\\frac{dt}{dh} = 0$ memberikan:\n$$-\\frac{1}{2\\sqrt{H - h}} + \\frac{1}{2\\sqrt{h}} = 0 \\implies \\sqrt{H - h} = \\sqrt{h} \\implies H - h = h \\implies H = 2h.$$\n(Uji turunan kedua $\\frac{d^2 t}{dh^2} < 0$ memastikan titik ini merupakan maksimum.)\n\nDengan demikian:\n$$\\frac{H}{h} = 2.0.$$',
          rubric: OK
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Sebuah pesawat sedang melakukan manuver dengan berputar pada trek lingkaran vertikal berjari-jari $R = 500\\ \\text{m}$ dengan kecepatan konstan $v = 360\\ \\text{km/jam}$. Jika massa pilot $m = 70\\ \\text{kg}$, maka berat pilot minimum yang akan terukur adalah $\\cdots\\ \\text{N}$.',
          figures: [
            {
              src: '/papers/osnk-fis-sma-2024/fig-27.svg',
              alt: 'Pesawat bergerak pada lintasan lingkaran vertikal berjari-jari 500 meter pada kelajuan konstan dengan gaya berat dan gaya normal kursi di puncak lintasan.',
              caption: 'Gerak melingkar vertikal pesawat pada puncak lintasan.'
            }
          ],
          answer: '$714.0$',
          principle:
            'Dinamika gerak melingkar vertikal: berat terukur (berat semu) sama dengan gaya normal $N$ yang diberikan kursi terhadap pilot.',
          solution:
            'Konversi kelajuan ke satuan SI:\n$$v = 360\\ \\text{km/jam} = 100\\ \\text{m/s}.$$\n\nPada puncak lintasan lingkaran vertikal, percepatan sentripetal $\\frac{v^2}{R} = \\frac{100^2}{500} = 20\\ \\text{m/s}^2 > g$ mengarah ke bawah, dan pesawat dalam keadaan terbalik sehingga gaya berat $mg$ serta gaya normal kursi $N$ keduanya berarah ke bawah:\n$$N + mg = m\\frac{v^2}{R} \\implies N_{\\text{atas}} = m\\left(\\frac{v^2}{R} - g\\right).$$\n(Di dasar lintasan, $N_{\\text{bawah}} = m\\left(\\frac{v^2}{R} + g\\right) > N_{\\text{atas}}$, sehingga nilai minimum terjadi di puncak.)\n\nSubstitusi $m = 70\\ \\text{kg}$, $\\frac{v^2}{R} = 20\\ \\text{m/s}^2$, dan $g = 9.8\\ \\text{m/s}^2$:\n$$N_{\\text{min}} = 70(20 - 9.8) = 70 \\times 10.2 = 714.0\\ \\text{N}.$$',
          rubric: OK
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Sebuah mobil bergerak dengan percepatan tangensial konstan $a_t = 0.62\\ \\text{m/s}^2$ sepanjang lintasan lingkaran datar berjari-jari $R = 40\\ \\text{m}$. Koefisien gesek antara roda mobil dan permukaan jalan $\\mu = 0,20$. Jika mobil mulai bergerak dari keadaan diam, maka jarak maksimum yang dapat ditempuh mobil untuk melaju tanpa tergelincir adalah $\\cdots\\ \\text{m}$.',
          answer: '$60.0$',
          principle:
            'Gaya gesek statis harus menyuplai resultan percepatan tangensial dan percepatan sentripetal sekaligus: $f_s = m\\sqrt{a_t^2 + a_s^2} \\le \\mu mg$.',
          solution:
            'Karena mobil mulai dari diam dengan percepatan tangensial konstan $a_t$, kelajuan setelah menempuh jarak $s$ adalah $v^2 = 2a_t s$, sehingga percepatan sentripetalnya adalah:\n$$a_s = \\frac{v^2}{R} = \\frac{2a_t s}{R}.$$\n\nBesar percepatan total mobil pada arah horizontal adalah:\n$$a = \\sqrt{a_t^2 + a_s^2} = a_t\\sqrt{1 + \\frac{4s^2}{R^2}}.$$\n\nGaya gesek statis $f_s = ma$ tidak boleh melampaui $\\mu N = \\mu mg$:\n$$a_t\\sqrt{1 + \\frac{4s^2}{R^2}} \\le \\mu g \\implies 1 + \\frac{4s^2}{R^2} \\le \\left(\\frac{\\mu g}{a_t}\\right)^2 \\implies s_{\\text{maks}} = \\frac{R}{2}\\sqrt{\\left(\\frac{\\mu g}{a_t}\\right)^2 - 1}.$$\n\nSubstitusi $R = 40\\ \\text{m}$, $\\mu = 0.20$, $g = 9.8\\ \\text{m/s}^2$, dan $a_t = 0.62\\ \\text{m/s}^2$:\n$$s_{\\text{maks}} = \\frac{40}{2}\\sqrt{\\left(\\frac{0.20 \\times 9.8}{0.62}\\right)^2 - 1} = 20\\sqrt{\\left(\\frac{98}{31}\\right)^2 - 1} \\approx 59.98\\ \\text{m} \\approx 60.0\\ \\text{m}.$$',
          rubric: OK
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Sebuah perahu motor bermassa $m = 200\\ \\text{kg}$ bergerak menyusuri danau dengan kecepatan $v_0 = 72\\ \\text{km/jam}$. Pada saat $t = 0$ mesin perahu dimatikan. Dengan asumsi hambatan udara diabaikan dan hambatan air sebanding dengan kecepatan perahu $F = -kv$ (nilai $k = 4\\ \\text{N}\\cdot\\text{m}^{-1}\\text{s}$), maka total jarak yang ditempuh perahu sejak mesin dimatikan hingga berhenti adalah $\\cdots\\ \\text{m}$.',
          answer: '$1000.0$',
          principle:
            'Hukum II Newton dengan gaya hambat bergantung kecepatan: gunakan aturan rantai $\\frac{dv}{dt} = v\\frac{dv}{dx}$ untuk mencari jarak tempuh langsung.',
          solution:
            'Konversi kelajuan awal ke SI: $v_0 = 72\\ \\text{km/jam} = 20\\ \\text{m/s}$.\n\nDari Hukum II Newton:\n$$m\\frac{dv}{dt} = -kv \\implies mv\\frac{dv}{dx} = -kv.$$\n\nUntuk $v > 0$, bagi kedua ruas dengan $v$ dan pisahkan variabel:\n$$dx = -\\frac{m}{k}\\,dv.$$\n\nIntegralkan dari $x = 0$ ($v = v_0$) hingga berhenti di $x = x_s$ ($v = 0$):\n$$\\int_0^{x_s} dx = -\\frac{m}{k}\\int_{v_0}^{0} dv \\implies x_s = \\frac{m v_0}{k}.$$\n\nSubstitusi $m = 200\\ \\text{kg}$, $v_0 = 20\\ \\text{m/s}$, dan $k = 4\\ \\text{N}\\cdot\\text{m}^{-1}\\text{s}$:\n$$x_s = \\frac{200 \\times 20}{4} = 1000.0\\ \\text{m}.$$',
          rubric: OK
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Suatu sistem terdiri dari dua pegas yang dihubungkan secara seri dan mempunyai konstanta pegas $k_1 = 3,2\\ \\text{N/m}$ dan $k_2 = 4,5\\ \\text{N/m}$. Usaha minimum yang harus dilakukan untuk meregangkan sistem ini sejauh $s = 2,5\\ \\text{cm}$ adalah $\\cdots\\ \\text{mJ}$.',
          answer: '$0.6$',
          principle:
            'Konstanta pegas ekivalen susunan seri memenuhi $\\frac{1}{k_{\\text{seri}}} = \\frac{1}{k_1} + \\frac{1}{k_2}$, dan usaha minimum sama dengan energi potensial pegas $\\frac{1}{2}k_{\\text{seri}}s^2$.',
          solution:
            'Konstanta pegas pengganti untuk dua pegas seri adalah:\n$$k_{\\text{seri}} = \\frac{k_1 k_2}{k_1 + k_2}.$$\n\nUsaha minimum (tanpa energi kinetik akhir) sama dengan energi potensial elastik yang tersimpan:\n$$W = \\frac{1}{2}k_{\\text{seri}}s^2 = \\frac{k_1 k_2 s^2}{2(k_1 + k_2)}.$$\n\nSubstitusi $k_1 = 3.2\\ \\text{N/m}$, $k_2 = 4.5\\ \\text{N/m}$, dan $s = 2.5\\ \\text{cm} = 0.025\\ \\text{m}$:\n$$W = \\frac{3.2 \\times 4.5 \\times (0.025)^2}{2(3.2 + 4.5)} = \\frac{14.4 \\times 6.25 \\times 10^{-4}}{15.4} \\approx 5.844 \\times 10^{-4}\\ \\text{J} \\approx 0.6\\ \\text{mJ}.$$',
          rubric: OK
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'Sebuah bandul terdiri dari tali tak bermassa yang di ujungnya diberi massa, mula-mula memiliki sudut sebesar $45^\\circ$ terhadap vertikal. Percepatan gravitasi sebesar $g$ ke bawah. Setelah dilepas tanpa kecepatan awal, nilai minimum dari percepatan total massa tersebut adalah $a$ dengan $\\frac{g}{a} = n$. Nilai $n^2$ sama dengan $\\cdots$',
          answer: '$3.0$',
          principle:
            'Percepatan total gerak melingkar tak beraturan adalah $a_{\\text{tot}} = \\sqrt{a_c^2 + a_t^2}$, dengan $a_c$ diperoleh dari kekekalan energi mekanik dan $a_t$ dari komponen tangensial gaya berat.',
          solution:
            'Misalkan panjang tali $\\ell$ dan sudut terhadap vertikal ke bawah adalah $\\theta$ ($0 \\le \\theta \\le 45^\\circ$).\n\nDari kekekalan energi mekanik sejak dilepas dari $\\theta_0 = 45^\\circ$:\n$$\\frac{1}{2}mv^2 = mg\\ell(\\cos\\theta - \\cos 45^\\circ) \\implies a_c = \\frac{v^2}{\\ell} = g(2\\cos\\theta - \\sqrt{2}).$$\n\nPercepatan tangensial berasal dari komponen gaya berat:\n$$a_t = g\\sin\\theta.$$\n\nKuadrat percepatan totalnya adalah:\n$$a_{\\text{tot}}^2 = a_c^2 + a_t^2 = g^2\\left[(2\\cos\\theta - \\sqrt{2})^2 + \\sin^2\\theta\\right] = g^2(3\\cos^2\\theta - 4\\sqrt{2}\\cos\\theta + 3).$$\n\nMisalkan $u = \\cos\\theta \\in \\left[\\frac{\\sqrt{2}}{2}, 1\\right]$. Lengkapi kuadrat sempurna:\n$$3u^2 - 4\\sqrt{2}u + 3 = 3\\left(u - \\frac{2\\sqrt{2}}{3}\\right)^2 + \\frac{1}{3}.$$\n\nKarena $\\frac{\\sqrt{2}}{2} < \\frac{2\\sqrt{2}}{3} < 1$, nilai minimum tercapai saat $\\cos\\theta = \\frac{2\\sqrt{2}}{3}$, memberikan:\n$$a^2 = \\frac{1}{3}g^2 \\implies n^2 = \\left(\\frac{g}{a}\\right)^2 = 3.0.$$',
          rubric: OK
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Setetes air hujan jatuh vertikal dalam suatu kabut sehingga massanya bertambah. Tetes air hujan tersebut tetap berbentuk bola, di mana laju pertambahan massanya sebanding dengan kecepatan dan kuadrat jari-jarinya ($\\frac{dm}{dt} \\propto v r^2$). Tetes air hujan tersebut mula-mula jatuh tanpa kecepatan awal dengan ukuran jari-jari yang dapat diabaikan. Anggap rapat massa air hujan selalu tetap, dan percepatan gravitasi $g$ ke bawah. Jika percepatan tetes air hujan tersebut sama dengan $a$, maka $\\frac{g}{a}$ sama dengan $\\cdots$',
          answer: '$7.0$',
          principle:
            'Hukum II Newton untuk sistem bermassa variabel $\\frac{d(mv)}{dt} = F_{\\text{eks}}$ dengan massa kabut awal diam.',
          solution:
            'Massa bola berjari-jari $r$ dan rapat massa $\\rho$ adalah $m = \\frac{4}{3}\\pi\\rho r^3$, sehingga:\n$$\\frac{dm}{dt} = 4\\pi\\rho r^2 \\dot{r}.$$\n\nDari syarat $\\frac{dm}{dt} = k v r^2$ (dengan $k$ konstanta positif):\n$$4\\pi\\rho r^2 \\dot{r} = k v r^2 \\implies v = \\beta\\dot{r}, \\qquad \\beta = \\frac{4\\pi\\rho}{k}.$$\n\nHukum II Newton $\\frac{d(mv)}{dt} = mg$ menjadi:\n$$\\frac{d}{dt}\\left(\\frac{4}{3}\\pi\\rho\\beta\\, r^3\\dot{r}\\right) = \\frac{4}{3}\\pi\\rho r^3 g \\implies r\\ddot{r} + 3\\dot{r}^2 = \\frac{g}{\\beta}r.$$\n\nDengan aturan rantai $\\ddot{r} = \\frac{1}{2}\\frac{d(\\dot{r}^2)}{dr}$, persamaan menjadi:\n$$\\frac{d(\\dot{r}^2)}{dr} + \\frac{6}{r}\\dot{r}^2 = \\frac{2g}{\\beta}.$$\nKalikan dengan faktor integrasi $r^6$:\n$$\\frac{d}{dr}\\left(r^6 \\dot{r}^2\\right) = \\frac{2g}{\\beta}r^6 \\implies r^6\\dot{r}^2 = \\frac{2g}{7\\beta}r^7 \\implies \\dot{r}^2 = \\frac{2g}{7\\beta}r$$\n(karena $r(0) = 0$ dan $\\dot{r}(0) = 0$).\n\nTurunkan terhadap waktu $t$:\n$$2\\dot{r}\\ddot{r} = \\frac{2g}{7\\beta}\\dot{r} \\implies \\ddot{r} = \\frac{g}{7\\beta}.$$\n\nMaka percepatan tetes air hujan adalah $a = \\dot{v} = \\beta\\ddot{r} = \\frac{g}{7}$, sehingga:\n$$\\frac{g}{a} = 7.0.$$',
          rubric: OK
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'Sebuah bola yang bergerak secara translasi bertumbukan elastik dengan bola lain yang sedang diam dan bermassa sama. Pada saat tumbukan, sudut antara garis lurus yang melalui titik pusat bola dan arah gerak awal bola yang dipukul adalah $\\alpha = 45^\\circ$. Dengan asumsi bola licin, persentase energi kinetik bola yang dipukul yang berubah menjadi energi potensial pada saat deformasi maksimum adalah $\\cdots\\ \\%$.',
          answer: '$25.0$',
          principle:
            'Pada tumbukan tak sentral bola licin, komponen kecepatan tangensial (tegak lurus garis hubung pusat) kekal, sedangkan kompresi maksimum terjadi saat komponen kecepatan normal kedua bola sama.',
          solution:
            'Misalkan kelajuan awal bola datang adalah $v_0$ dan massa tiap bola $m$, sehingga energi kinetik awal sistem adalah $K_0 = \\frac{1}{2}mv_0^2$.\n\nUraikan kecepatan awal bola datang terhadap garis hubung kedua pusat bola (arah normal $\\hat{n}$) dan arah tegak lurusnya (arah tangensial $\\hat{t}$):\n$$v_{1n,0} = v_0\\cos\\alpha, \\qquad v_{1t,0} = v_0\\sin\\alpha.$$\n\nKarena permukaan kedua bola licin, tidak ada impuls tangensial selama tumbukan sehingga komponen tangensial kedua bola tidak berubah sepanjang proses:\n$$v_{1t} = v_0\\sin\\alpha, \\qquad v_{2t} = 0.$$\n\nDeformasi maksimum terjadi ketika jarak antar pusat bola minimum, yakni saat kecepatan normal kedua bola sama ($v_{1n} = v_{2n} = v_n$). Dari kekekalan momentum sepanjang arah normal $\\hat{n}$:\n$$m v_0\\cos\\alpha + 0 = m v_n + m v_n \\implies v_n = \\frac{1}{2}v_0\\cos\\alpha.$$\n\nTotal energi kinetik sistem pada saat deformasi maksimum adalah:\n$$K_{\\text{def}} = \\frac{1}{2}m(v_n^2 + v_{1t}^2) + \\frac{1}{2}m v_n^2 = \\frac{1}{2}mv_0^2\\left(\\frac{1}{2}\\cos^2\\alpha + \\sin^2\\alpha\\right).$$\n\nEnergi potensial elastik deformasi maksimum yang tersimpan adalah selisih energi kinetik awal dan energi kinetik saat deformasi maksimum:\n$$U_{\\text{maks}} = K_0 - K_{\\text{def}} = \\frac{1}{2}mv_0^2\\left(1 - \\frac{1}{2}\\cos^2\\alpha - \\sin^2\\alpha\\right) = \\frac{1}{2}mv_0^2\\left(\\frac{1}{2}\\cos^2\\alpha\\right).$$\n\nSubstitusi $\\alpha = 45^\\circ$ ($\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$):\n$$\\frac{U_{\\text{maks}}}{K_0} \\times 100\\% = \\frac{1}{2}\\cos^2(45^\\circ) \\times 100\\% = \\frac{1}{2}\\left(\\frac{1}{2}\\right) \\times 100\\% = 25.0\\%.$$',
          rubric: OK
        }
      ]
    }
  ]
};
