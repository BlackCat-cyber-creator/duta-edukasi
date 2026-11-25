/**
 * Paket Soal Terstruktur: OSN-P Fisika SMA 2024
 * Sumber: scraped_raw/osnp-fisika-sma-2024.md (6 dari 7 nomor soal uraian; 17 sub-soal).
 * Soal nomor 6 serta sub-soal 2(a) dan 4(b)(ii) dilewati karena mutlak memerlukan gambar yang tidak tersedia pada berkas arsip.
 */
export default {
  id: 'osnp-fis-sma-2024',
  slug: 'osnp-fisika-sma-2024',
  subject: 'olimpiade-fis',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'OSN-P Fisika SMA 2024',
  relatedChapterIds: [
    'ipa10-bab4-usaha-energi-dan-energi-terbarukan',
    'ipa11-bab1-dinamika-gerak-dan-hukum-newton',
    'ipa11-bab2-momentum-impuls-dan-tumbukan',
    'ipa11-bab3-dinamika-rotasi-dan-kesetimbangan',
    'ipa11-bab4-fluida-statis-dan-dinamis'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-P',
  title: 'OSN-P Fisika SMA 2024',
  totalMarks: 75,
  instructions:
    'Paket ini memuat 6 dari 7 nomor soal uraian asli OSN-P Fisika SMA 2024 (total 17 sub-soal yang disertakan: nomor 1(a–b), 2(b), 3(a–c), 4(a, b(i), c, d, e), 5(a–d), dan 7(a–b); total 75 poin). Soal nomor 6 seluruhnya (6(a–d)), sub-soal 2(a), dan sub-soal 4(b)(ii) dilewati karena memerlukan gambar atau diagram yang tidak tersedia pada arsip. Kerjakan setiap soal dengan penurunan matematis dan fisis yang lengkap serta satuan SI yang tepat.',
  source: {
    org: 'OSN-P (Olimpiade Sains Nasional tingkat Provinsi)',
    file: 'scraped_raw/osnp-fisika-sma-2024.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Batang Uniform di Atas Lantai Kasar',
      marks: 9,
      stem: 'Sebuah batang uniform dengan massa $M$ dan panjang $L$ diletakkan di atas lantai horizontal di mana koefisien gesek kinetik antara batang dan lantai tersebut adalah $\\mu$. Sebuah gaya $F$ diterapkan pada titik A yang berjarak $s$ dari pusat batang ($0 < s \\le \\frac{L}{2}$) dengan arah selalu tegak lurus batang sedemikian rupa sehingga titik A selalu bergerak dengan laju konstan $v$ dengan arah tegak lurus terhadap batang.',
      parts: [
        {
          label: 'a',
          marks: 6,
          prompt: 'Tentukan jarak pusat rotasi sesaat dari titik pusat batang!',
          answer: '$z = \\sqrt{s^2 + \\frac{L^2}{4}} - s$',
          principle:
            'Pada gerak kuasistatik di atas lantai kasar dengan gesekan seragam, resultan gaya tegak lurus batang dan resultan torsi sama dengan nol; distribusi gaya gesek berbalik arah tepat di titik pusat rotasi sesaat.',
          solution:
            'Karena titik A bergerak dengan laju konstan $v$ dan arah gaya $F$ selalu tegak lurus batang, batang bergerak kuasistatik terhadap suatu titik poros rotasi sesaat (sebut titik B) yang diam sesaat terhadap lantai. Agar torsi $F$ terhadap pusat massa (PM) dapat diimbangi oleh torsi gaya gesek, titik B harus berada pada jarak $z$ ($0 < z < \\frac{L}{2}$) dari PM di sisi batang yang berlawanan dengan titik A.\n\nDengan kerapatan massa linear $\\lambda = \\frac{M}{L}$:\n- Segmen batang dari B menuju dan melewati A memiliki panjang $\\frac{L}{2} + z$ dan bergerak searah $\\vec{F}$, sehingga gaya gesek kinetik padanya melawan $\\vec{F}$ sebesar:\n$$f_1 = \\mu M g \\frac{\\frac{L}{2} + z}{L}$$\ndan berpusat kerja pada jarak $\\frac{1}{2}\\left(\\frac{L}{2} + z\\right)$ dari B.\n- Segmen batang di sisi lain B memiliki panjang $\\frac{L}{2} - z$ dan bergerak berlawanan arah dengan $\\vec{F}$, sehingga gaya gesek kinetik padanya searah $\\vec{F}$ sebesar:\n$$f_2 = \\mu M g \\frac{\\frac{L}{2} - z}{L}$$\ndan berpusat kerja pada jarak $\\frac{1}{2}\\left(\\frac{L}{2} - z\\right)$ dari B.\n\nKesetimbangan gaya pada arah tegak lurus batang ($\\Sigma F_\\perp = 0$):\n$$F - f_1 + f_2 = 0 \\implies F = \\mu M g \\frac{\\left(\\frac{L}{2} + z\\right) - \\left(\\frac{L}{2} - z\\right)}{L} = \\mu M g \\frac{2z}{L}.$$\n\nKesetimbangan torsi terhadap titik B ($\\Sigma \\tau_B = 0$, lengan momen $F$ adalah $z + s$):\n$$F(z + s) - f_1 \\cdot \\frac{1}{2}\\left(\\frac{L}{2} + z\\right) - f_2 \\cdot \\frac{1}{2}\\left(\\frac{L}{2} - z\\right) = 0$$\n$$F(z + s) = \\frac{\\mu M g}{2L}\\left[\\left(\\frac{L}{2} + z\\right)^2 + \\left(\\frac{L}{2} - z\\right)^2\\right] = \\mu M g \\frac{L^2 + 4z^2}{4L}.$$\n\nSubstitusikan $F = \\mu M g \\frac{2z}{L}$:\n$$\\mu M g \\frac{2z}{L}(z + s) = \\mu M g \\frac{L^2 + 4z^2}{4L}$$\n$$8z^2 + 8sz = L^2 + 4z^2 \\implies 4z^2 + 8sz - L^2 = 0.$$\nMenggunakan rumus kuadrat dan mengambil akar positif ($z > 0$):\n$$z = \\frac{-8s + \\sqrt{64s^2 + 16L^2}}{8} = \\sqrt{s^2 + \\frac{L^2}{4}} - s.$$\n(Perhatikan bahwa untuk $s > 0$, $\\sqrt{s^2 + \\frac{L^2}{4}} < s + \\frac{L}{2}$, sehingga $0 < z < \\frac{L}{2}$ konsisten dengan asumsi awal.)',
          rubric: [
            {
              code: 'B1',
              text: 'Memodelkan titik pusat rotasi sesaat B berjarak $z$ dari pusat batang di sisi berlawanan dari A serta menentukan arah gaya gesek kinetik pada kedua segmen'
            },
            {
              code: 'M1',
              text: 'Menerapkan $\\Sigma F_\\perp = 0$ dan memperoleh $F = \\mu M g \\frac{2z}{L}$'
            },
            {
              code: 'M2',
              text: 'Menuliskan $\\Sigma \\tau_B = 0$ dengan titik kerja masing-masing gaya gesek di tengah segmen'
            },
            {
              code: 'M1',
              text: 'Mengeliminasi $F$ hingga diperoleh persamaan kuadrat $4z^2 + 8sz - L^2 = 0$'
            },
            {
              code: 'A1',
              text: 'Memilih akar positif $z = \\sqrt{s^2 + \\frac{L^2}{4}} - s$'
            }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt: 'Hitung besar gaya $F$ yang diperlukan agar kondisi di atas tercapai!',
          answer: '$F = \\mu M g\\left(\\sqrt{\\frac{4s^2}{L^2} + 1} - \\frac{2s}{L}\\right)$',
          principle:
            'Substitusi jarak pusat rotasi sesaat $z$ ke persamaan kesetimbangan gaya $F = \\mu M g \\frac{2z}{L}$.',
          solution:
            'Substitusikan hasil bagian (a), $z = \\sqrt{s^2 + \\frac{L^2}{4}} - s$, ke dalam hubungan $F = \\mu M g \\frac{2z}{L}$:\n$$F = \\frac{2\\mu M g}{L}\\left(\\sqrt{s^2 + \\frac{L^2}{4}} - s\\right) = \\mu M g\\left(\\sqrt{\\frac{4s^2}{L^2} + 1} - \\frac{2s}{L}\\right).$$',
          rubric: [
            { code: 'M1', text: 'Mensubstitusikan nilai $z$ ke dalam $F = \\mu M g \\frac{2z}{L}$' },
            { code: 'M1', text: 'Menyerap faktor $\\frac{2}{L}$ ke dalam bentuk akar kuadrat' },
            {
              code: 'A1',
              text: 'Memperoleh $F = \\mu M g\\left(\\sqrt{\\frac{4s^2}{L^2} + 1} - \\frac{2s}{L}\\right)$'
            }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Silinder Pejal Homogen di Sudut Dinding-Lantai',
      marks: 6,
      stem: 'Diketahui sebuah silinder pejal homogen memiliki jari-jari $R$ dan massa $m$. (Catatan: Sub-soal (a) dilewati karena memerlukan gambar tampak atas yang tidak tersedia pada arsip; hanya sub-soal (b) yang disertakan.)',
      parts: [
        {
          label: 'b',
          marks: 6,
          prompt:
            'Silinder secara bebas diputar pada sumbunya dengan kecepatan sudut $\\omega_0$ dan kemudian diletakkan secara mendatar di suatu sudut dinding-lantai. Koefisien gesekan antara dinding-lantai dengan silinder adalah $\\mu$. Berapa putarankah yang dilakukan silinder sebelum ia berhenti? Nyatakan dalam $\\mu$, $\\omega_0$, $R$, dan $g$.',
          answer: '$n = \\frac{\\omega_0^2 R}{8\\pi g}\\left(\\frac{\\mu^2 + 1}{\\mu^2 + \\mu}\\right)$',
          principle:
            'Kesetimbangan gaya translasi pada pusat massa silinder dan hukum II Newton untuk rotasi $\\Sigma \\tau = I \\alpha$ di bawah aksi gaya gesek kinetik dari dinding dan lantai.',
          solution:
            'Agar silinder tetap bertahan di sudut dinding-lantai sambil melambat hingga berhenti (alih-alih menggelinding menjauhi dinding), arah putaran awal harus membuat sisi bawah silinder bergerak menjauhi dinding sehingga gaya gesek lantai $f_l$ mengarah ke dinding (melawan gaya normal dinding $N_d$), dan sisi yang menyentuh dinding bergerak ke bawah sehingga gaya gesek dinding $f_d$ mengarah ke atas.\n\nKarena silinder mengalami slip pada kedua permukaan kontak:\n$$f_d = \\mu N_d, \\qquad f_l = \\mu N_l.$$\nPusat massa silinder diam ($\\Sigma F_x = 0$ dan $\\Sigma F_y = 0$):\n- Arah horizontal ($\\Sigma F_x = 0$):\n$$N_d - f_l = 0 \\implies N_d = \\mu N_l \\implies N_l = \\frac{N_d}{\\mu}.$$\n- Arah vertikal ($\\Sigma F_y = 0$):\n$$f_d + N_l - mg = 0 \\implies \\mu N_d + \\frac{N_d}{\\mu} = mg \\implies N_d\\left(\\frac{\\mu^2 + 1}{\\mu}\\right) = mg.$$\nDiperoleh gaya normal dan gaya gesek:\n$$N_d = \\frac{\\mu mg}{\\mu^2 + 1}, \\qquad N_l = \\frac{mg}{\\mu^2 + 1},$$\n$$f_d = \\frac{\\mu^2 mg}{\\mu^2 + 1}, \\qquad f_l = \\frac{\\mu mg}{\\mu^2 + 1}.$$\n\nKedua gaya gesek menimbulkan torsi hambat terhadap sumbu silinder ($I = \\frac{1}{2}mR^2$):\n$$(f_d + f_l)R = I\\alpha \\implies \\frac{(\\mu^2 + \\mu)mg}{\\mu^2 + 1} R = \\frac{1}{2}mR^2\\alpha \\implies \\alpha = \\frac{2g}{R}\\left(\\frac{\\mu^2 + \\mu}{\\mu^2 + 1}\\right).$$\n\nSudut rotasi total hingga berhenti ($\\omega = 0$):\n$$0 = \\omega_0^2 - 2\\alpha\\,\\Delta\\theta \\implies \\Delta\\theta = \\frac{\\omega_0^2}{2\\alpha} = \\frac{\\omega_0^2 R}{4g}\\left(\\frac{\\mu^2 + 1}{\\mu^2 + \\mu}\\right).$$\nJumlah putaran penuh adalah $n = \\frac{\\Delta\\theta}{2\\pi}$:\n$$n = \\frac{\\omega_0^2 R}{8\\pi g}\\left(\\frac{\\mu^2 + 1}{\\mu^2 + \\mu}\\right).$$',
          rubric: [
            {
              code: 'B1',
              text: 'Menentukan arah gaya normal ($N_d, N_l$) dan gaya gesek kinetik ($f_d = \\mu N_d$, $f_l = \\mu N_l$) pada sudut dinding-lantai'
            },
            {
              code: 'M2',
              text: 'Menerapkan $\\Sigma F_x = 0$ dan $\\Sigma F_y = 0$ untuk memperoleh $N_d = \\frac{\\mu mg}{\\mu^2 + 1}$ dan $N_l = \\frac{mg}{\\mu^2 + 1}$'
            },
            {
              code: 'M1',
              text: 'Menghitung perlambatan sudut $\\alpha = \\frac{2g}{R}\\left(\\frac{\\mu^2 + \\mu}{\\mu^2 + 1}\\right)$ dari $(f_d + f_l)R = \\frac{1}{2}mR^2\\alpha$'
            },
            { code: 'M1', text: 'Menentukan sudut tempuh total $\\Delta\\theta = \\frac{\\omega_0^2}{2\\alpha}$' },
            {
              code: 'A1',
              text: 'Memperoleh jumlah putaran $n = \\frac{\\omega_0^2 R}{8\\pi g}\\left(\\frac{\\mu^2 + 1}{\\mu^2 + \\mu}\\right)$'
            }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Bejana Air Berotasi dan Torsi Viskos',
      marks: 12,
      stem: 'Sebuah bejana berbentuk silinder berisi air diputar terhadap sumbu vertikalnya dengan kecepatan sudut konstan $\\omega$.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Tentukan bentuk permukaan bebas dari air (nyatakan dalam $\\omega$, $r$, dan $g$)!',
          answer: 'Berbentuk paraboloid dengan profil $h(r) = h_0 + \\frac{\\omega^2 r^2}{2g}$ ($h_0$ ketinggian permukaan di sumbu rotasi $r=0$)',
          principle:
            'Pada kerangka berotasi, permukaan bebas fluida merupakan bidang ekipotensial sehingga resultan gaya berat dan gaya sentrifugal pada elemen permukaan selalu tegak lurus terhadap permukaan.',
          solution:
            'Tinjau elemen fluida bermassa $dm$ di permukaan bebas pada jarak radial $r$ dari sumbu rotasi dalam kerangka acuan yang ikut berotasi dengan laju sudut $\\omega$. Elemen fluida tersebut diam dalam kesetimbangan statik di bawah pengaruh gaya berat $dm\\,g$ ke bawah, gaya sentrifugal $dm\\,\\omega^2 r$ mendatar menjauhi sumbu, dan gaya tekanan $F_p$ dari fluida di bawahnya yang tegak lurus permukaan bebas.\n\nJika permukaan bebas membentuk sudut $\\theta$ terhadap bidang horizontal:\n$$F_p \\sin\\theta = dm\\,\\omega^2 r, \\qquad F_p \\cos\\theta = dm\\,g.$$\nDengan membagi kedua persamaan:\n$$\\frac{dh}{dr} = \\tan\\theta = \\frac{\\omega^2 r}{g}.$$\nIntegrasikan terhadap $r$ dari sumbu rotasi $r = 0$ (dengan ketinggian $h = h_0$) hingga $r$:\n$$\\int_{h_0}^{h(r)} dh = \\frac{\\omega^2}{g} \\int_0^r r\\,dr \\implies h(r) = h_0 + \\frac{\\omega^2 r^2}{2g}.$$\nPersamaan ini menunjukkan penampang vertikal berupa parabola, sehingga permukaan bebas air berbentuk **paraboloid**.',
          rubric: [
            {
              code: 'B1',
              text: 'Menganalisis kesetimbangan elemen permukaan pada kerangka berotasi (gaya berat, gaya sentrifugal, dan gaya tekanan tegak lurus permukaan)'
            },
            { code: 'M1', text: 'Menurunkan gradien permukaan $\\frac{dh}{dr} = \\frac{\\omega^2 r}{g}$' },
            { code: 'M1', text: 'Mengintegrasikan persamaan diferensial dari $r = 0$ ($h = h_0$)' },
            {
              code: 'A1',
              text: 'Menyatakan bentuk paraboloid dengan persamaan $h(r) = h_0 + \\frac{\\omega^2 r^2}{2g}$'
            }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt:
            'Tentukan distribusi tekanan air di dasar bejana sepanjang jari-jarinya jika tekanan di titik pusatnya sama dengan $p_0$!',
          answer: '$p(r) = p_0 + \\frac{1}{2}\\rho\\omega^2 r^2$ (dengan $\\rho$ massa jenis air)',
          principle:
            'Tekanan hidrostatik vertikal pada setiap jarak radial $r$ sebanding dengan kedalaman kolom fluida $h(r)$ di atas titik tersebut.',
          solution:
            'Misalkan $\\rho$ adalah massa jenis air dan $p_u$ adalah tekanan udara di atas permukaan bebas. Karena tidak ada percepatan vertikal, kesetimbangan hidrostatik sepanjang arah vertikal pada jarak radial $r$ memberikan:\n$$p(r) = p_u + \\rho g h(r).$$\nDi pusat dasar bejana ($r = 0$), tekanannya adalah $p_0 = p_u + \\rho g h_0$. Substitusikan $h(r) = h_0 + \\frac{\\omega^2 r^2}{2g}$ dari bagian (a):\n$$p(r) = p_u + \\rho g\\left(h_0 + \\frac{\\omega^2 r^2}{2g}\\right) = (p_u + \\rho g h_0) + \\frac{1}{2}\\rho\\omega^2 r^2 = p_0 + \\frac{1}{2}\\rho\\omega^2 r^2.$$',
          rubric: [
            {
              code: 'B1',
              text: 'Menuliskan tekanan dasar pada pusat $p_0 = p_u + \\rho g h_0$ dan pada jari-jari $r$ sebesar $p(r) = p_u + \\rho g h(r)$'
            },
            { code: 'M1', text: 'Mensubstitusikan $h(r) = h_0 + \\frac{\\omega^2 r^2}{2g}$' },
            { code: 'A1', text: 'Memperoleh $p(r) = p_0 + \\frac{1}{2}\\rho\\omega^2 r^2$' }
          ]
        },
        {
          label: 'c',
          marks: 5,
          prompt:
            'Sebuah piringan horizontal tipis berjari-jari $R = 10\\ \\text{cm}$ diletakkan di dalam rongga silinder tersebut dan isi airnya diganti dengan minyak yang viskositasnya $\\eta = 0{,}08\\ \\text{Pa}\\cdot\\text{s}$. Jarak bebas antara piringan dan bidang horizontal rongga tersebut adalah $h = 1{,}0\\ \\text{mm}$. Hitunglah daya yang dihasilkan oleh gaya viskos yang bekerja pada piringan ketika berputar dengan kecepatan sudut $\\omega = 60\\ \\text{rad/s}$! Abaikan efek tepi yang terjadi.',
          answer: '$\\frac{72\\pi}{5}\\ \\text{W} \\approx 45{,}2\\ \\text{W}$',
          principle:
            'Hukum viskositas Newton pada lapisan fluida tipis ($dF_v = \\eta \\frac{v}{h} dA$) diintegralkan terhadap luas piringan untuk memperoleh torsi hambat $\\tau_v$ dan daya $P = \\tau_v \\omega$.',
          solution:
            'Tinjau elemen cincin tipis pada permukaan bawah piringan berjari-jari $r$ dengan lebar $dr$ dan luas $dA = 2\\pi r\\,dr$. Laju tangensial elemen tersebut adalah $v = \\omega r$. Karena jarak bebas lapisan minyak terhadap bidang horizontal rongga yang diam sangat tipis ($h = 1{,}0\\ \\text{mm} \\ll R$), gradien kecepatannya adalah $\\frac{\\omega r}{h}$.\n\nGaya hambat viskos pada elemen cincin:\n$$dF_v = \\eta \\frac{\\omega r}{h}\\,dA = \\frac{2\\pi\\eta\\omega}{h} r^2\\,dr.$$\nElemen torsi hambat viskos terhadap sumbu putar:\n$$d\\tau_v = r\\,dF_v = \\frac{2\\pi\\eta\\omega}{h} r^3\\,dr.$$\nIntegrasikan dari $r = 0$ hingga $r = R$:\n$$\\tau_v = \\frac{2\\pi\\eta\\omega}{h} \\int_0^R r^3\\,dr = \\frac{2\\pi\\eta\\omega}{h}\\cdot\\frac{R^4}{4} = \\frac{\\pi\\eta\\omega R^4}{2h}.$$\nDaya yang dihasilkan oleh gaya viskos adalah:\n$$P = \\tau_v \\omega = \\frac{\\pi\\eta\\omega^2 R^4}{2h}.$$\n\nSubstitusikan nilai dalam satuan SI ($\\eta = 0{,}08\\ \\text{Pa}\\cdot\\text{s}$, $\\omega = 60\\ \\text{rad/s}$, $R = 0{,}10\\ \\text{m}$, $h = 1{,}0 \\times 10^{-3}\\ \\text{m}$):\n$$P = \\frac{\\pi (0{,}08)(60)^2 (0{,}10)^4}{2(1{,}0 \\times 10^{-3})} = \\frac{\\pi (0{,}08)(3600)(10^{-4})}{2 \\times 10^{-3}} = \\frac{28{,}8\\pi}{2} = \\frac{72\\pi}{5}\\ \\text{W} \\approx 45{,}2\\ \\text{W}.$$',
          rubric: [
            {
              code: 'B1',
              text: 'Menerapkan hukum viskositas Newton $dF_v = \\eta \\frac{\\omega r}{h}(2\\pi r\\,dr)$ pada elemen cincin'
            },
            { code: 'M1', text: 'Menuliskan elemen torsi $d\\tau_v = r\\,dF_v = \\frac{2\\pi\\eta\\omega}{h}r^3\\,dr$' },
            { code: 'M1', text: 'Mengintegrasikan untuk memperoleh torsi total $\\tau_v = \\frac{\\pi\\eta\\omega R^4}{2h}$' },
            { code: 'M1', text: 'Menentukan persamaan daya $P = \\tau_v \\omega = \\frac{\\pi\\eta\\omega^2 R^4}{2h}$' },
            {
              code: 'A1',
              text: 'Menghitung nilai SI dengan benar: $P = \\frac{72\\pi}{5}\\ \\text{W} \\approx 45{,}2\\ \\text{W}$'
            }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Lintasan Brachistochrone dan Sifat Tautokron',
      marks: 21,
      stem: 'Waktu pergerakan benda dari titik O ke A di bawah pengaruh percepatan gravitasi bumi $g$ akan bervariasi terhadap bentuk lintasan benda tersebut. Terdapat satu lintasan licin yang menyebabkan waktu pergerakan menjadi minimum, lintasan tersebut bernama brachistochrone. Lintasan ini memiliki fungsi kurva parametrik:\n$$x = a(\\theta - \\sin\\theta), \\qquad y = -a(1 - \\cos\\theta),$$\ndi mana $\\theta$ merupakan sebuah parameter dan $a$ adalah suatu konstanta tertentu yang dapat dicari. Tinjau sebuah titik B yang merupakan titik terendah lintasan tersebut. Jarak vertikal O ke B adalah $h$, dan benda tidak memiliki kecepatan awal saat dilepaskan dari O. (Catatan: Sub-soal (b)(ii) dilewati karena merujuk pada Gambar 2 yang tidak tersedia pada arsip.)',
      parts: [
        {
          label: 'a',
          marks: 5,
          prompt: 'Nyatakan $a$ dalam $h$! Tentukan waktu pergerakan benda dari titik O ke B ($t$)!',
          answer: '$a = \\frac{h}{2}$ dan $t = \\pi\\sqrt{\\frac{h}{2g}}$',
          principle:
            'Kekekalan energi mekanik pada lintasan licin menghubungkan laju $v = \\frac{ds}{dt}$ dengan koordinat vertikal $y$, lalu diintegralkan terhadap parameter sikloid $\\theta$.',
          solution:
            'Titik terendah B terjadi ketika $y = -a(1 - \\cos\\theta)$ mencapai nilai minimum, yakni saat $\\frac{dy}{d\\theta} = -a\\sin\\theta = 0$ dengan $\\cos\\theta = -1$, yaitu pada $\\theta = \\pi$. Pada posisi ini $y_B = -2a$. Karena jarak vertikal dari O ($y = 0$) ke B adalah $h$, maka $2a = h$ atau:\n$$a = \\frac{h}{2}.$$\n(Sekaligus koordinat B adalah $x_B = \\pi a = \\frac{\\pi h}{2}$, $y_B = -h$.)\n\nKarena lintasan licin dan benda dilepas dari diam di O ($y=0$), kekekalan energi mekanik memberikan:\n$$0 = \\frac{1}{2}mv^2 + mgy \\implies v = \\sqrt{-2gy} = \\sqrt{2ga(1 - \\cos\\theta)}.$$\nDiferensialkan persamaan kurva untuk mendapatkan elemen panjang busur $ds = \\sqrt{dx^2 + dy^2}$:\n$$dx = a(1 - \\cos\\theta)\\,d\\theta, \\qquad dy = -a\\sin\\theta\\,d\\theta,$$\n$$ds = a\\sqrt{(1 - \\cos\\theta)^2 + \\sin^2\\theta}\\,d\\theta = a\\sqrt{1 - 2\\cos\\theta + \\cos^2\\theta + \\sin^2\\theta}\\,d\\theta = a\\sqrt{2(1 - \\cos\\theta)}\\,d\\theta.$$\nElemen waktu tempuh $dt = \\frac{ds}{v}$ menjadi konstan terhadap $\\theta$:\n$$dt = \\frac{a\\sqrt{2(1 - \\cos\\theta)}\\,d\\theta}{\\sqrt{2ga(1 - \\cos\\theta)}} = \\sqrt{\\frac{a}{g}}\\,d\\theta.$$\nIntegrasikan dari titik O ($\\theta = 0$) hingga titik B ($\\theta = \\pi$) dan substitusikan $a = \\frac{h}{2}$:\n$$t = \\int_0^\\pi \\sqrt{\\frac{a}{g}}\\,d\\theta = \\pi\\sqrt{\\frac{a}{g}} = \\pi\\sqrt{\\frac{h}{2g}}.$$',
          rubric: [
            {
              code: 'A1',
              text: 'Menentukan titik terendah pada $\\theta = \\pi$ sehingga $2a = h \\implies a = \\frac{h}{2}$'
            },
            {
              code: 'M1',
              text: 'Menggunakan kekekalan energi mekanik untuk memperoleh $v = \\sqrt{-2gy} = \\sqrt{2ga(1 - \\cos\\theta)}$'
            },
            {
              code: 'M1',
              text: 'Menurunkan elemen panjang busur $ds = a\\sqrt{2(1 - \\cos\\theta)}\\,d\\theta$'
            },
            { code: 'M1', text: 'Menyederhanakan $dt = \\frac{ds}{v} = \\sqrt{\\frac{a}{g}}\\,d\\theta$' },
            {
              code: 'A1',
              text: 'Mengintegrasikan dari $0$ hingga $\\pi$ dan memperoleh $t = \\pi\\sqrt{\\frac{h}{2g}}$'
            }
          ]
        },
        {
          label: 'b(i)',
          marks: 4,
          prompt:
            'Jika lintasan O ke B adalah garis lurus, tentukan waktu pergerakannya ($t_i$)! Bandingkan dengan jawaban soal bagian (a), apakah lebih besar atau lebih kecil?',
          answer: '$t_i = \\sqrt{\\pi^2 + 4}\\sqrt{\\frac{h}{2g}}$, lebih besar daripada $t$ pada bagian (a)',
          principle:
            'Gerak lurus berubah beraturan (GLBB) pada bidang miring licin dengan percepatan $g\\sin\\beta$.',
          solution:
            'Dari hasil bagian (a), posisi titik B adalah $(x_B, y_B) = \\left(\\frac{\\pi h}{2}, -h\\right)$. Jika lintasan dari O ke B berupa garis lurus, sudut kemiringan $\\beta$ terhadap arah horizontal memenuhi:\n$$\\tan\\beta = \\frac{h}{\\pi h / 2} = \\frac{2}{\\pi} \\implies \\sin\\beta = \\frac{2}{\\sqrt{\\pi^2 + 4}}.$$\nPanjang lintasan miring OB adalah $L_{OB} = \\frac{h}{\\sin\\beta} = \\frac{h}{2}\\sqrt{\\pi^2 + 4}$. Pada bidang miring licin, percepatan sejajar lintasan bernilai konstan $a_s = g\\sin\\beta$. Dari persamaan GLBB dengan kecepatan awal nol:\n$$L_{OB} = \\frac{1}{2}(g\\sin\\beta)t_i^2 \\implies t_i = \\sqrt{\\frac{2h}{g\\sin^2\\beta}} = \\sqrt{\\frac{2h}{g \\cdot \\frac{4}{\\pi^2 + 4}}} = \\sqrt{\\pi^2 + 4}\\sqrt{\\frac{h}{2g}}.$$\nKarena $\\sqrt{\\pi^2 + 4} > \\pi$, maka $t_i > t$: waktu tempuh garis lurus **lebih besar** daripada waktu tempuh lintasan brachistochrone.',
          rubric: [
            {
              code: 'M1',
              text: 'Menentukan kemiringan garis lurus OB sehingga $\\sin\\beta = \\frac{2}{\\sqrt{\\pi^2 + 4}}$'
            },
            { code: 'M1', text: 'Menerapkan GLBB pada bidang miring $t_i = \\sqrt{\\frac{2h}{g\\sin^2\\beta}}$' },
            { code: 'A1', text: 'Memperoleh $t_i = \\sqrt{\\pi^2 + 4}\\sqrt{\\frac{h}{2g}}$' },
            { code: 'B1', text: 'Membandingkan $\\sqrt{\\pi^2 + 4} > \\pi$ dan menyimpulkan $t_i > t$ (lebih besar)' }
          ]
        },
        {
          label: 'c',
          marks: 6,
          prompt:
            'Setelah mencapai titik B benda akan melanjutkan gerakannya. Tinjau saat benda sudah bergerak dengan jarak tempuh $s$ dari titik B (sekarang ambil acuan $s = 0$ dan $t = 0$ di titik B). Tentukan persamaan gerak benda! Tentukan juga jarak tempuhnya sebagai fungsi waktu, $s(t)$!',
          answer: 'Persamaan gerak $\\ddot{s} + \\frac{g}{2h}s = 0$ (atau $\\ddot{s} + \\frac{g}{4a}s = 0$) dan $s(t) = 2h\\sin\\left(\\sqrt{\\frac{g}{2h}}\\,t\\right)$ (atau secara umum untuk energi $E$: $s(t) = \\sqrt{\\frac{8Ea}{mg}}\\sin\\left(\\frac{1}{2}\\sqrt{\\frac{g}{a}}\\,t\\right)$)',
          principle:
            'Panjang busur $s$ pada kurva sikloid diukur dari titik terendah menghasilkan energi potensial kuadratik $U(s) = \\frac{mg}{8a}s^2$, sehingga dinamikanya identik dengan gerak harmonik sederhana.',
          solution:
            'Pindahkan acuan koordinat ke titik B $(\\pi a, -2a)$ dengan mendefinisikan $X = x - \\pi a$, $Y = y + 2a$, serta parameter baru $\\psi = \\theta - \\pi$ (sehingga $\\psi = 0$ di titik B). Menggunakan $\\sin(\\psi + \\pi) = -\\sin\\psi$ dan $\\cos(\\psi + \\pi) = -\\cos\\psi$, diperoleh:\n$$X = a(\\psi + \\sin\\psi), \\qquad Y = a(1 - \\cos\\psi).$$\n\nHitung elemen panjang busur $ds$:\n$$ds = \\sqrt{dX^2 + dY^2} = a\\sqrt{(1 + \\cos\\psi)^2 + \\sin^2\\psi}\\,d\\psi = a\\sqrt{2(1 + \\cos\\psi)}\\,d\\psi = 2a\\cos\\left(\\frac{\\psi}{2}\\right)d\\psi.$$\nIntegrasi dari $\\psi = 0$ ($s = 0$) memberikan panjang busur $s$:\n$$s = 4a\\sin\\left(\\frac{\\psi}{2}\\right).$$\nSementara itu, ketinggian vertikal terhadap B dapat dinyatakan langsung dalam $s$:\n$$Y = a(1 - \\cos\\psi) = 2a\\sin^2\\left(\\frac{\\psi}{2}\\right) = \\frac{s^2}{8a}.$$\n\nDengan memilih energi potensial acuan $U = 0$ di titik B, energi mekanik total $E$ benda adalah:\n$$E = \\frac{1}{2}m\\dot{s}^2 + mgY = \\frac{1}{2}m\\dot{s}^2 + \\frac{mg}{8a}s^2.$$\nKarena $E$ kekal ($\\frac{dE}{dt} = 0$, untuk $\\dot{s} \\ne 0$):\n$$m\\dot{s}\\ddot{s} + \\frac{mg}{4a}s\\dot{s} = 0 \\implies \\ddot{s} + \\frac{g}{4a}s = 0.$$\nDengan $a = \\frac{h}{2}$, persamaan gerak harmonik sederhana ini adalah:\n$$\\ddot{s} + \\frac{g}{2h}s = 0.$$\n(Dalam parameter $\\psi$, persamaan geraknya ekuivalen dengan $2a\\ddot{\\psi}(1 + \\cos\\psi) - a\\dot{\\psi}^2\\sin\\psi + g\\sin\\psi = 0$.)\n\nSolusi persamaan gerak dengan syarat awal $s(0) = 0$ berbentuk $s(t) = A\\sin(\\Omega t)$, di mana frekuensi sudut osilasi adalah $\\Omega = \\sqrt{\\frac{g}{4a}} = \\sqrt{\\frac{g}{2h}}$. Jika energi total benda terhadap B adalah $E$, laju di B adalah $\\dot{s}(0) = A\\Omega = \\sqrt{\\frac{2E}{m}}$, sehingga $A = \\sqrt{\\frac{8Ea}{mg}}$ dan:\n$$s(t) = \\sqrt{\\frac{8Ea}{mg}}\\sin\\left(\\frac{1}{2}\\sqrt{\\frac{g}{a}}\\,t\\right).$$\nKhusus untuk benda yang dilepaskan dari diam di titik O, energinya adalah $E = mgh = 2mga$, sehingga $A = 4a = 2h$ dan:\n$$s(t) = 2h\\sin\\left(\\sqrt{\\frac{g}{2h}}\\,t\\right)$$\n(berlaku sepanjang lintasan sikloid hingga mencapai titik tertinggi di sisi seberang pada $s = 2h$).',
          rubric: [
            {
              code: 'M1',
              text: 'Menggeser koordinat ke B dengan $\\psi = \\theta - \\pi$ sehingga $X = a(\\psi + \\sin\\psi)$ dan $Y = a(1 - \\cos\\psi)$'
            },
            {
              code: 'M1',
              text: 'Menurunkan panjang busur $s = 4a\\sin(\\psi/2)$ dan hubungan $Y = \\frac{s^2}{8a}$'
            },
            {
              code: 'M2',
              text: 'Menurunkan persamaan gerak dari kekekalan energi: $\\ddot{s} + \\frac{g}{4a}s = 0$ atau $\\ddot{s} + \\frac{g}{2h}s = 0$ (atau dalam $\\psi$)'
            },
            {
              code: 'M1',
              text: 'Mengidentifikasi solusi harmonik $s(t) = A\\sin(\\Omega t)$ dengan $\\Omega = \\sqrt{\\frac{g}{2h}}$'
            },
            {
              code: 'A1',
              text: 'Memperoleh $s(t) = 2h\\sin\\left(\\sqrt{\\frac{g}{2h}}\\,t\\right)$ (serta bentuk umum $\\sqrt{\\frac{8Ea}{mg}}\\sin\\left(\\frac{1}{2}\\sqrt{\\frac{g}{a}}\\,t\\right)$)'
            }
          ]
        },
        {
          label: 'd',
          marks: 3,
          prompt:
            'Jika pada awalnya benda dilepaskan dari posisi $y \\neq 0$ namun tetap pada fungsi lintasan brachistochrone di atas, tentukan waktu untuk mencapai titik B ($t\'$)! Jelaskan makna fisis dari jawaban tersebut!',
          answer: '$t\' = \\pi\\sqrt{\\frac{a}{g}} = \\pi\\sqrt{\\frac{h}{2g}}$; waktu tempuh ke titik terendah tidak bergantung pada ketinggian awal pelepasan (sifat tautokron/isokron).',
          principle:
            'Periode gerak harmonik sederhana $\\ddot{s} + \\Omega^2 s = 0$ tidak bergantung pada amplitudo awal osilasi.',
          solution:
            'Dari bagian (c), sepanjang kurva sikloid benda memenuhi persamaan gerak harmonik sederhana $\\ddot{s} + \\Omega^2 s = 0$ dengan frekuensi sudut $\\Omega = \\sqrt{\\frac{g}{4a}} = \\sqrt{\\frac{g}{2h}}$ yang konstan.\n\nJika benda dilepaskan dari keadaan diam pada posisi awal $y \\neq 0$ ($-h < y < 0$) di kurva tersebut, jarak busur awalnya $s_0$ bertindak sebagai amplitudo osilasi. Waktu yang dibutuhkan untuk bergerak dari titik balik ($s = -s_0$) ke titik kesetimbangan terendah B ($s = 0$) tepat sama dengan seperempat periode osilasi:\n$$t\' = \\frac{T}{4} = \\frac{1}{4}\\cdot\\frac{2\\pi}{\\Omega} = \\frac{\\pi}{2\\Omega} = \\pi\\sqrt{\\frac{a}{g}} = \\pi\\sqrt{\\frac{h}{2g}}.$$\n\n**Makna fisis:** Waktu tempuh untuk mencapai titik terendah B sama persis dengan hasil bagian (a) dan sama sekali **tidak bergantung pada posisi awal pelepasan** benda di sepanjang lintasan. Sifat istimewa ini menunjukkan bahwa kurva brachistochrone (sikloid) sekaligus merupakan kurva **tautokron** (isokron).',
          rubric: [
            {
              code: 'M1',
              text: 'Menggunakan fakta bahwa gerak sepanjang sikloid adalah osilasi harmonik dengan frekuensi sudut $\\Omega = \\sqrt{\\frac{g}{2h}}$ yang independen terhadap amplitudo'
            },
            {
              code: 'A1',
              text: 'Menghitung $t\' = \\frac{\\pi}{2\\Omega} = \\pi\\sqrt{\\frac{a}{g}} = \\pi\\sqrt{\\frac{h}{2g}}$'
            },
            {
              code: 'B1',
              text: 'Menjelaskan makna fisis sifat tautokron/isokron (waktu mencapai B tidak bergantung pada posisi awal)'
            }
          ]
        },
        {
          label: 'e',
          marks: 3,
          prompt:
            'Lintasan brachistochrone dapat dibayangkan dengan meninjau gerakan menggelinding dari sebuah roda. Tinjau titik P yang awalnya berada di posisi terendah dari sebuah roda berjari-jari $R$ yang menggelinding ke sumbu $x$ positif dengan kecepatan konstan $v$, titik tersebut akan memiliki fungsi posisi (berbentuk sikloid) yang serupa dengan kurva parametrik brachistochrone. Ambil posisi awal titik P sebagai pusat koordinat, tuliskan fungsi posisi kurva sikloid tersebut sebagai fungsi waktu, $x(t)$ dan $y(t)$!',
          answer: '$x(t) = R\\left(\\frac{vt}{R} - \\sin\\left(\\frac{vt}{R}\\right)\\right)$ dan $y(t) = R\\left(1 - \\cos\\left(\\frac{vt}{R}\\right)\\right)$',
          principle:
            'Superposisi gerak translasi pusat roda $(vt, R)$ dan gerak rotasi menggelinding tanpa slip dengan sudut putar searah jarum jam $\\theta = \\frac{vt}{R}$.',
          solution:
            'Pada $t = 0$, titik P berada di pusat koordinat $(0, 0)$ dan pusat roda C berada di $(0, R)$. Saat roda menggelinding tanpa slip ke arah $+x$ dengan kecepatan konstan $v$, setelah selang waktu $t$:\n- Pusat roda C berpindah ke koordinat $(x_C, y_C) = (vt, R)$.\n- Roda berotasi searah jarum jam sebesar sudut $\\theta = \\frac{vt}{R}$.\n\nRelatif terhadap pusat roda C, vektor posisi awal P adalah $(0, -R)$. Setelah berotasi searah jarum jam sebesar $\\theta$, posisi relatif P terhadap C menjadi $(-R\\sin\\theta, -R\\cos\\theta)$.\n\nDengan menjumlahkan posisi C dan posisi relatif P terhadap C, diperoleh:\n$$x(t) = vt - R\\sin\\theta = R\\left(\\frac{vt}{R} - \\sin\\left(\\frac{vt}{R}\\right)\\right),$$\n$$y(t) = R - R\\cos\\theta = R\\left(1 - \\cos\\left(\\frac{vt}{R}\\right)\\right).$$',
          rubric: [
            {
              code: 'B1',
              text: 'Menentukan koordinat pusat roda $(vt, R)$ dan sudut rotasi tanpa slip $\\theta = \\frac{vt}{R}$'
            },
            {
              code: 'A1',
              text: 'Memperoleh $x(t) = R\\left(\\frac{vt}{R} - \\sin\\left(\\frac{vt}{R}\\right)\\right)$'
            },
            {
              code: 'A1',
              text: 'Memperoleh $y(t) = R\\left(1 - \\cos\\left(\\frac{vt}{R}\\right)\\right)$'
            }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Model Gaya Hambat dan Defleksi dalam Cairan/Gas',
      marks: 17,
      stem: 'Suatu benda bermassa $M$ bergerak horizontal ke kanan dengan besar kecepatan $u$, menuju sebuah benda lain bermassa $m$ yang diam. Kemudian setelah terjadi tumbukan secara elastik sempurna, benda bermassa $M$ terhambur sebesar $\\alpha$ dari arah kecepatan awalnya dan besar kecepatannya menjadi $v$.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Tentukan sudut $\\alpha$ dalam besaran-besaran yang diketahui ($M$, $m$, $u$, dan $v$)!',
          answer: '$\\alpha = \\arccos\\left(\\frac{(M - m)u^2 + (M + m)v^2}{2Muv}\\right)$',
          principle:
            'Kekekalan momentum vektor dan kekekalan energi kinetik pada tumbukan elastik sempurna dua dimensi.',
          solution:
            'Misalkan kecepatan benda $m$ setelah tumbukan adalah $\\vec{w}$. Dari hukum kekekalan momentum:\n$$M\\vec{u} = M\\vec{v} + m\\vec{w} \\implies m\\vec{w} = M(\\vec{u} - \\vec{v}).$$\nKuadratkan kedua ruas (dengan sudut antara $\\vec{u}$ dan $\\vec{v}$ adalah $\\alpha$):\n$$m^2 w^2 = M^2(u^2 + v^2 - 2uv\\cos\\alpha).$$\n\nDari hukum kekekalan energi kinetik pada tumbukan elastik sempurna:\n$$\\frac{1}{2}Mu^2 = \\frac{1}{2}Mv^2 + \\frac{1}{2}mw^2 \\implies mw^2 = M(u^2 - v^2).$$\nKalikan kedua ruas dengan $m$ sehingga $m^2 w^2 = mM(u^2 - v^2)$, lalu samakan dengan persamaan momentum di atas:\n$$M^2(u^2 + v^2 - 2uv\\cos\\alpha) = mM(u^2 - v^2).$$\nBagi kedua ruas dengan $M$:\n$$M u^2 + M v^2 - 2Muv\\cos\\alpha = m u^2 - m v^2$$\n$$2Muv\\cos\\alpha = (M - m)u^2 + (M + m)v^2 \\implies \\cos\\alpha = \\frac{(M - m)u^2 + (M + m)v^2}{2Muv}.$$\nJadi sudut hambur benda $M$ adalah:\n$$\\alpha = \\arccos\\left(\\frac{(M - m)u^2 + (M + m)v^2}{2Muv}\\right).$$',
          rubric: [
            {
              code: 'M1',
              text: 'Menuliskan kekekalan momentum vektor $m\\vec{w} = M(\\vec{u} - \\vec{v})$ dan mengkuadratkannya'
            },
            { code: 'M1', text: 'Menuliskan kekekalan energi kinetik $mw^2 = M(u^2 - v^2)$' },
            {
              code: 'M1',
              text: 'Mengeliminasi $w$ untuk memperoleh $\\cos\\alpha = \\frac{(M - m)u^2 + (M + m)v^2}{2Muv}$'
            },
            {
              code: 'A1',
              text: 'Menyatakan $\\alpha = \\arccos\\left(\\frac{(M - m)u^2 + (M + m)v^2}{2Muv}\\right)$'
            }
          ]
        },
        {
          label: 'b',
          marks: 4,
          prompt:
            'Tentukan sudut hambur maksimum untuk suatu sistem dengan massa $m, M$ tertentu! (Petunjuk: Karena massa tertentu, maka $\\alpha$ hanya bervariasi terhadap keadaan akhir sistem.)',
          answer: '$\\alpha_{\\text{maks}} = \\arcsin\\left(\\frac{m}{M}\\right)$ (untuk $M > m$)',
          principle:
            'Untuk $M > m$, memaksimumkan sudut hambur $\\alpha \\in [0, \\pi]$ setara dengan meminimumkan $\\cos\\alpha$ terhadap laju akhir $v$ melalui turunan pertama atau ketaksamaan AM-GM.',
          solution:
            'Dari hasil bagian (a), tulis $\\cos\\alpha$ sebagai fungsi rasio $\\frac{v}{u}$:\n$$\\cos\\alpha = \\frac{M - m}{2M}\\left(\\frac{u}{v}\\right) + \\frac{M + m}{2M}\\left(\\frac{v}{u}\\right).$$\n\nUntuk kasus $M > m$, kedua koefisien bernilai positif. Sudut $\\alpha \\in [0, \\pi]$ mencapai nilai maksimum ketika $\\cos\\alpha$ minimum. Dengan menyamakan turunan terhadap $v$ ke nol (atau langsung memakai ketaksamaan AM-GM):\n$$\\frac{d(\\cos\\alpha)}{dv} = -\\frac{M - m}{2M}\\frac{u}{v^2} + \\frac{M + m}{2M}\\frac{1}{u} = 0 \\implies v = \\sqrt{\\frac{M - m}{M + m}}\\,u.$$\nSubstitusikan kembali ke persamaan $\\cos\\alpha$:\n$$\\cos\\alpha_{\\text{maks}} = 2\\sqrt{\\frac{M - m}{2M} \\cdot \\frac{M + m}{2M}} = \\frac{\\sqrt{M^2 - m^2}}{M} = \\sqrt{1 - \\frac{m^2}{M^2}}.$$\nKarena $\\sin^2\\alpha_{\\text{maks}} = 1 - \\cos^2\\alpha_{\\text{maks}} = \\frac{m^2}{M^2}$ dan $\\alpha_{\\text{maks}} \\in [0, \\frac{\\pi}{2}]$, diperoleh:\n$$\\sin\\alpha_{\\text{maks}} = \\frac{m}{M} \\implies \\alpha_{\\text{maks}} = \\arcsin\\left(\\frac{m}{M}\\right).$$\n(Catatan: Jika $M = m$, $\\cos\\alpha = \\frac{v}{u} \\ge 0$ sehingga $\\alpha_{\\text{maks}} = \\frac{\\pi}{2}$; jika $M < m$, $M$ dapat terpantul balik hingga $\\alpha_{\\text{maks}} = \\pi$.)',
          rubric: [
            {
              code: 'M1',
              text: 'Meminimumkan $\\cos\\alpha$ terhadap $v$ (dengan $\\frac{d\\cos\\alpha}{dv}=0$ atau ketaksamaan AM-GM untuk $M > m$)'
            },
            { code: 'M1', text: 'Memperoleh laju akhir saat hamburan maksimum $v = \\sqrt{\\frac{M - m}{M + m}}\\,u$' },
            { code: 'M1', text: 'Menghitung $\\cos\\alpha_{\\text{maks}} = \\frac{\\sqrt{M^2 - m^2}}{M}$' },
            { code: 'A1', text: 'Menyimpulkan $\\alpha_{\\text{maks}} = \\arcsin\\left(\\frac{m}{M}\\right)$' }
          ]
        },
        {
          label: 'c',
          marks: 5,
          prompt:
            'Misalkan benda bermassa $M$ berbentuk bola dengan jejari $r$ yang sangat kecil (dapat dianggap partikel titik dalam dinamikanya) memasuki cairan yang mempunyai rapat massa $\\rho$ dengan partikel bermassa $m \\ll M$ yang diam, di mana partikel-partikel cairan terdistribusi merata dan sangat rapat. Anggap setiap tumbukan (bahkan dengan sejumlah partikel) bersifat elastik, sehingga hamburan yang terjadi selalu maksimum dan menuju ke arah yang sama terhadap kecepatan massa $M$ sebelum setiap tumbukan. Tentukan jejari kelengkungan lintasan massa $M$ akibat defleksi oleh medium tersebut! (Petunjuk: Asumsikan sudut hambur $\\alpha$ sangat kecil di setiap tumbukan.)',
          answer: '$\\mathcal{R} = \\frac{M}{\\rho\\pi r^2}$',
          principle:
            'Jejari kelengkungan lintasan bidang didefinisikan sebagai $\\mathcal{R} = \\frac{ds}{d\\phi}$, dengan $d\\phi$ adalah sudut belok vektor kecepatan selama menempuh panjang busur $ds$.',
          solution:
            'Luas penampang lintang efektif bola berjejari $r$ adalah $\\sigma = \\pi r^2$. Ketika bola menempuh jarak infinitesimal $ds$ di dalam medium bermassa jenis $\\rho$, volume sapuannya adalah $dV = \\pi r^2\\,ds$ sehingga massa total partikel medium yang ditumbuk adalah:\n$$dm = \\rho\\pi r^2\\,ds,$$\ndengan jumlah partikel yang bertumbukan:\n$$dn = \\frac{dm}{m} = \\frac{\\rho\\pi r^2}{m}\\,ds.$$\n\nKarena $m \\ll M$, sudut hambur maksimum per satu tumbukan dari bagian (b) memenuhi aproksimasi sudut kecil:\n$$\\alpha_{\\text{maks}} = \\arcsin\\left(\\frac{m}{M}\\right) \\approx \\frac{m}{M}.$$\nKarena setiap tumbukan selalu membelokkan arah gerak ke sisi yang sama, sudut belok total vektor kecepatan $d\\phi$ sepanjang elemen lintasan $ds$ adalah:\n$$d\\phi = \\alpha_{\\text{maks}}\\,dn = \\frac{m}{M} \\cdot \\frac{\\rho\\pi r^2}{m}\\,ds = \\frac{\\rho\\pi r^2}{M}\\,ds.$$\n\nBerdasarkan definisi jejari kelengkungan lintasan $\\mathcal{R} = \\frac{ds}{d\\phi}$, diperoleh:\n$$\\mathcal{R} = \\frac{M}{\\rho\\pi r^2}.$$\n(Konsistensi dinamika: dalam selang $dt$, laju transfer momentum tegak lurus kecepatan menghasilkan gaya sentripetal efektif $Mv\\frac{d\\phi}{dt} = v\\frac{dm}{dt} = \\rho\\pi r^2 v^2$, sehingga $\\frac{v^2}{\\mathcal{R}} = \\frac{\\rho\\pi r^2 v^2}{M} \\implies \\mathcal{R} = \\frac{M}{\\rho\\pi r^2}$.)',
          rubric: [
            {
              code: 'B1',
              text: 'Menentukan massa dan jumlah partikel yang ditumbuk sepanjang $ds$: $dn = \\frac{\\rho\\pi r^2}{m}\\,ds$'
            },
            { code: 'M1', text: 'Menggunakan aproksimasi sudut kecil $\\alpha_{\\text{maks}} \\approx \\frac{m}{M}$' },
            {
              code: 'M2',
              text: 'Merumuskan perubahan sudut arah kecepatan $d\\phi = \\alpha_{\\text{maks}}\\,dn = \\frac{\\rho\\pi r^2}{M}\\,ds$'
            },
            {
              code: 'A1',
              text: 'Menghitung jejari kelengkungan $\\mathcal{R} = \\frac{ds}{d\\phi} = \\frac{M}{\\rho\\pi r^2}$'
            }
          ]
        },
        {
          label: 'd',
          marks: 4,
          prompt:
            'Tentukan sudut hambur terbesar massa $M$ setelah memasuki daerah berisi medium tersebut! Apakah massa $M$ dapat berbalik arah dan keluar dari daerah tersebut?',
          answer: '$\\phi_{\\text{maks}} = \\pi$; ya, massa $M$ dapat berbalik arah dan keluar dari daerah tersebut dengan laju $u e^{-\\pi}$.',
          principle:
            'Jejari kelengkungan $\\mathcal{R}$ yang konstan menghasilkan lintasan lingkaran, sementara laju berkurang secara eksponensial terhadap sudut belok $\\phi$ dan tidak pernah bernilai nol pada sudut berhingga.',
          solution:
            'Karena jejari kelengkungan $\\mathcal{R} = \\frac{M}{\\rho\\pi r^2}$ bernilai konstan (tidak bergantung pada laju $v$), lintasan massa $M$ di dalam medium berbentuk busur lingkaran berjejari $\\mathcal{R}$. Selama vektor kecepatan berbelok sebesar $d\\phi$, elemen panjang busur adalah $ds = \\mathcal{R}\\,d\\phi$, sehingga massa partikel medium yang ditumbuk adalah:\n$$dm = \\rho\\pi r^2\\,ds = \\rho\\pi r^2 \\mathcal{R}\\,d\\phi = M\\,d\\phi.$$\n\nDari bagian (b), setelah satu tumbukan pada sudut hambur maksimum dengan partikel bermassa $m \\ll M$, laju benda $M$ berkurang dengan faktor:\n$$\\frac{v_{\\text{akhir}}}{v_{\\text{awal}}} = \\sqrt{\\frac{M - m}{M + m}} = \\left(1 - \\frac{m}{M}\\right)^{1/2}\\left(1 + \\frac{m}{M}\\right)^{-1/2} \\approx 1 - \\frac{m}{M}.$$\nUntuk $dn$ tumbukan selama belokan $d\\phi$ (dengan $m\\,dn = dm = M\\,d\\phi$), perubahan diferensial laju adalah:\n$$dv = -v\\,\\frac{dm}{M} = -v\\,d\\phi.$$\nIntegrasikan dari $\\phi = 0$ ($v = u$) hingga $\\phi$:\n$$\\int_u^{v(\\phi)} \\frac{dv}{v} = -\\int_0^\\phi d\\phi\' \\implies \\ln\\left(\\frac{v(\\phi)}{u}\\right) = -\\phi \\implies v(\\phi) = u e^{-\\phi}.$$\n\nKarena $v(\\phi) = u e^{-\\phi} > 0$ untuk semua sudut berhingga, benda $M$ tidak pernah berhenti di dalam medium. Untuk medium setengah-ruang dengan batas lurus tegak lurus arah gerak awal, setelah menempuh setengah lingkaran penuh ($\\phi_{\\text{maks}} = \\pi$), massa $M$ **dapat berbalik arah dan keluar** dari daerah tersebut dengan laju akhir $v(\\pi) = u e^{-\\pi}$.',
          rubric: [
            {
              code: 'B1',
              text: 'Mengidentifikasi lintasan lingkaran berjari-jari tetap $\\mathcal{R}$ sehingga $dm = \\rho\\pi r^2\\mathcal{R}\\,d\\phi = M\\,d\\phi$'
            },
            {
              code: 'M1',
              text: 'Menurunkan hubungan peluruhan laju $dv = -v\\frac{dm}{M} = -v\\,d\\phi$ dari hasil bagian (b)'
            },
            { code: 'M1', text: 'Mengintegrasikan untuk memperoleh $v(\\phi) = u e^{-\\phi} > 0$' },
            {
              code: 'A1',
              text: 'Menyimpulkan benda berbalik arah dan keluar setelah setengah lingkaran dengan sudut hambur terbesar $\\phi_{\\text{maks}} = \\pi$'
            }
          ]
        }
      ]
    },
    {
      no: 7,
      title: 'Dua Bola Kecil dan Batang Tegar pada Dinding-Lantai Licin',
      marks: 10,
      stem: 'Dua buah bola kecil masing-masing bermassa $m_1$ dan $m_2$ dihubungkan oleh batang tegar tak bermassa dengan panjang $L$. Mula-mula posisi batang tegar dalam keadaan vertikal menempel pada dinding, dengan $m_1$ di atas dan $m_2$ di bawah. Kemudian bola $m_2$ diberikan kecepatan awal yang sangat kecil ke kanan, sehingga bola $m_1$ bergerak ke bawah. Pada suatu saat ketika bola $m_1$ mulai meninggalkan dinding, sudut antara batang dengan dinding adalah $\\theta_0$ dengan $\\sin\\theta_0 = \\frac{3}{5}$. Asumsikan dinding dan lantai licin, serta percepatan gravitasi $g$ ke bawah.',
      parts: [
        {
          label: 'a',
          marks: 7,
          prompt: 'Tentukan nilai perbandingan massa $\\frac{m_2}{m_1}$!',
          answer: '$\\frac{m_2}{m_1} = \\frac{7}{32}$',
          principle:
            'Kekekalan energi mekanik menghubungkan laju sudut $\\omega$ dengan sudut $\\theta$, sedangkan syarat lepas kontak dari dinding adalah hilangnya gaya normal dinding $N_d = \\frac{dP_x}{dt} = 0$.',
          solution:
            'Ambil sudut antara dinding vertikal dan lantai horizontal sebagai pusat koordinat $(0, 0)$. Selama $m_1$ masih menempel pada dinding ($x_1 = 0$) dan $m_2$ berada di lantai ($y_2 = 0$), pada saat batang membentuk sudut $\\theta$ terhadap dinding:\n$$y_1 = L\\cos\\theta, \\qquad x_2 = L\\sin\\theta.$$\nDengan kecepatan sudut batang $\\omega = \\dot{\\theta}$, kelajuan masing-masing bola adalah:\n$$v_1 = |\\dot{y}_1| = \\omega L\\sin\\theta \\quad (\\text{ke bawah}), \\qquad v_2 = \\dot{x}_2 = \\omega L\\cos\\theta \\quad (\\text{ke kanan}).$$\n\nDari kekekalan energi mekanik sejak kondisi awal ($\\theta = 0$, kelajuan awal dapat diabaikan) dengan acuan $U = 0$ di lantai:\n$$m_1 g L = \\frac{1}{2}m_1 v_1^2 + \\frac{1}{2}m_2 v_2^2 + m_1 g L\\cos\\theta$$\n$$2 m_1 g L(1 - \\cos\\theta) = \\omega^2 L^2(m_1\\sin^2\\theta + m_2\\cos^2\\theta).$$\nDefinisikan $n = \\frac{m_2}{m_1}$ sehingga $\\sin^2\\theta + n\\cos^2\\theta = 1 + (n - 1)\\cos^2\\theta$, maka:\n$$\\omega^2 L^2 = \\frac{2gL(1 - \\cos\\theta)}{1 + (n - 1)\\cos^2\\theta}.$$\n\nSatu-satunya gaya luar horizontal pada sistem kedua bola adalah gaya normal dinding $N_d$ pada $m_1$. Oleh karena itu, berdasarkan hukum II Newton untuk momentum horizontal sistem $P_x = m_2 v_2$:\n$$N_d = \\frac{dP_x}{dt} = m_2\\frac{dv_2}{dt} = m_2\\omega\\frac{dv_2}{d\\theta}.$$\nKetika $m_1$ tepat meninggalkan dinding pada $\\theta = \\theta_0$, gaya normal dinding lenyap ($N_d = 0$), yang berarti $\\frac{dv_2}{d\\theta} = 0$ atau $\\frac{d(v_2^2)}{d\\theta} = 0$.\n\nSubstitusikan $\\omega^2 L^2$ ke dalam $v_2^2 = \\omega^2 L^2\\cos^2\\theta$:\n$$v_2^2 = 2gL\\,\\frac{\\cos^2\\theta - \\cos^3\\theta}{1 + (n - 1)\\cos^2\\theta}.$$\nMisalkan $c = \\cos\\theta$ dan $k = n - 1$. Syarat stasioner $\\frac{d(v_2^2)}{dc} = 0$ memberikan:\n$$(2c - 3c^2)(1 + kc^2) - (c^2 - c^3)(2kc) = 0.$$\nBagi dengan $c \\ne 0$:\n$$(2 - 3c)(1 + kc^2) - 2k(c^2 - c^3) = 0 \\implies 2 - 3c - kc^3 = 0 \\implies k = \\frac{2 - 3c}{c^3}.$$\n\nDiketahui $\\sin\\theta_0 = \\frac{3}{5}$, maka $c_0 = \\cos\\theta_0 = \\frac{4}{5}$. Substitusikan $c_0$:\n$$n - 1 = k = \\frac{2 - 3\\left(\\frac{4}{5}\\right)}{\\left(\\frac{4}{5}\\right)^3} = \\frac{-\\frac{2}{5}}{\\frac{64}{125}} = -\\frac{25}{32} \\implies \\frac{m_2}{m_1} = n = 1 - \\frac{25}{32} = \\frac{7}{32}.$$',
          rubric: [
            {
              code: 'M1',
              text: 'Menentukan kelajuan kedua bola $v_1 = \\omega L\\sin\\theta$ dan $v_2 = \\omega L\\cos\\theta$'
            },
            {
              code: 'M2',
              text: 'Menerapkan kekekalan energi mekanik untuk memperoleh $\\omega^2 L^2 = \\frac{2gL(1 - \\cos\\theta)}{1 + (n - 1)\\cos^2\\theta}$'
            },
            {
              code: 'B1',
              text: 'Merumuskan syarat lepas kontak $N_d = 0 \\iff \\frac{dv_2}{dt} = 0 \\iff \\frac{d(v_2^2)}{d\\theta} = 0$'
            },
            {
              code: 'M2',
              text: 'Menurunkan $v_2^2$ terhadap $\\cos\\theta$ hingga memperoleh $n - 1 = \\frac{2 - 3\\cos\\theta_0}{\\cos^3\\theta_0}$'
            },
            {
              code: 'A1',
              text: 'Mensubstitusikan $\\cos\\theta_0 = \\frac{4}{5}$ dan memperoleh $\\frac{m_2}{m_1} = \\frac{7}{32}$'
            }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt: 'Tentukan kecepatan sudut batang ketika $m_1$ tepat meninggalkan dinding!',
          answer: '$\\omega = \\sqrt{\\frac{4g}{5L}}$',
          principle:
            'Substitusi rasio massa $\\frac{m_2}{m_1}$ dan sudut lepas kontak $\\theta_0$ ke dalam persamaan kekekalan energi untuk $\\omega$.',
          solution:
            'Substitusikan $n - 1 = -\\frac{25}{32}$ dan $\\cos\\theta_0 = \\frac{4}{5}$ ke dalam ekspresi $\\omega^2 L^2$ dari bagian (a):\n$$\\omega^2 L^2 = \\frac{2gL\\left(1 - \\frac{4}{5}\\right)}{1 - \\frac{25}{32}\\left(\\frac{4}{5}\\right)^2} = \\frac{2gL\\left(\\frac{1}{5}\\right)}{1 - \\frac{25}{32}\\cdot\\frac{16}{25}} = \\frac{\\frac{2}{5}gL}{1 - \\frac{1}{2}} = \\frac{4}{5}gL.$$\nDengan mengambil akar positif:\n$$\\omega = \\sqrt{\\frac{4g}{5L}} = 2\\sqrt{\\frac{g}{5L}}.$$',
          rubric: [
            {
              code: 'M1',
              text: 'Mensubstitusikan $n - 1 = -\\frac{25}{32}$ dan $\\cos\\theta_0 = \\frac{4}{5}$ ke dalam rumus $\\omega^2 L^2$'
            },
            { code: 'M1', text: 'Menyederhanakan pecahan hingga diperoleh $\\omega^2 L^2 = \\frac{4}{5}gL$' },
            { code: 'A1', text: 'Memperoleh $\\omega = \\sqrt{\\frac{4g}{5L}}$' }
          ]
        }
      ]
    }
  ]
};
