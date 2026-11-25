/**
 * Paket Soal Terstruktur: OSN-K IPA SMP 2024 (35 soal pilihan ganda teks lengkap)
 * Sumber: scraped_raw/osnk-ipa-smp-2024.md (40 soal sumber; 3 soal bergambar/tabel, 1 soal tanpa kunci jawaban, dan 1 soal dengan data tidak konsisten dilewati).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai pembahasan.' }];

export default {
  id: 'osnk-ipa-smp-2024',
  slug: 'osnk-ipa-smp-2024',
  subject: 'olimpiade-sains',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'OSN-K IPA SMP 2024',
  relatedChapterIds: [
    'ipa7-bab2-zat-dan-perubahannya',
    'ipa7-bab3-suhu-kalor-pemuaian',
    'ipa7-bab5-klasifikasi-makhluk-hidup',
    'ipa7-bab6-ekologi-keanekaragaman-hayati',
    'ipa8-bab1-sel',
    'ipa8-bab2-struktur-fungsi-tubuh',
    'ipa8-bab3-usaha-energi-pesawat-sederhana',
    'ipa8-bab4-getaran-gelombang-cahaya',
    'ipa9-bab2-koordinasi-reproduksi-homeostasis',
    'ipa9-bab3-tekanan',
    'ipa9-bab4-listrik-magnet-energi-alternatif',
    'ipa9-bab6-pewarisan-sifat-bioteknologi'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K IPA SMP 2024',
  totalMarks: 35,
  instructions:
    'Kerjakan seluruh 35 soal pilihan ganda berikut. Setiap jawaban benar bernilai 1 poin (total 35 poin). Paket ini memuat 35 butir soal teks lengkap dari total 40 soal pada naskah sumber OSN-K IPA SMP 2024; sebanyak 5 butir dilewati, terdiri atas 3 butir yang bergantung pada gambar/tabel yang tidak tersedia (nomor sumber: 1, 12, dan 15), 1 butir tanpa kunci jawaban pada naskah sumber (nomor sumber: 8), serta 1 butir dengan data yang tidak konsisten secara ilmiah pada naskah sumber (nomor sumber: 11, karena titik uap $8^\\circ\\text{C}$ membuat zat berwujud gas pada suhu ruang sehingga pilihan A dan D sama-sama benar). Butir yang disertakan berasal dari nomor sumber 2, 3, 4, 5, 6, 7, 9, 10, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, dan 40.',
  source: {
    org: 'OSN-K (Olimpiade Sains Nasional tingkat Kabupaten/Kota)',
    file: 'scraped_raw/osnk-ipa-smp-2024.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Pilihan Ganda',
      marks: 35,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (35 soal, masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Pernikahan antara wanita dan pria yang keduanya berpenglihatan normal melahirkan seorang anak laki-laki yang buta warna dan dua orang anak perempuan berpenglihatan normal. Dari kasus ini dapat diketahui bahwa ....\n\nA. ayah adalah homozigot dominan\nB. ibu adalah homozigot resesif\nC. ibu adalah carrier\nD. ayah adalah carrier',
          answer: 'C. ibu adalah carrier',
          principle:
            'Buta warna merupakan sifat terpaut kromosom seks $X$ yang dikendalikan oleh alel resesif ($X^c$). Laki-laki hanya memiliki satu kromosom $X$ (hemizigot), sedangkan perempuan memiliki dua kromosom $X$.',
          solution:
            'Misalkan alel penglihatan normal adalah $X^C$ dan alel buta warna adalah $X^c$.\n- Ayah berpenglihatan normal, sehingga genotipenya $X^C Y$ (bukan homozigot dominan dan bukan pula carrier karena hanya memiliki satu kromosom $X$).\n- Anak laki-laki menderita buta warna, sehingga genotipenya $X^c Y$. Kromosom $Y$ pasti diwariskan dari ayah, sedangkan kromosom $X^c$ pasti berasal dari ibu.\n- Karena ibu berpenglihatan normal namun mewariskan alel $X^c$, genotipe ibu harus heterozigot $X^C X^c$ (pembawa sifat atau *carrier*).\n- Kedua anak perempuan mewarisi $X^C$ dari ayah sehingga berpenglihatan normal ($X^C X^C$ atau $X^C X^c$).',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Seorang dokter menyatakan bahwa lensa mata pasiennya tidak rata di semua bagian, sehingga sinar sejajar tidak dibiaskan dengan kekuatan yang sama. Kelainan ini dapat diperbaiki dengan memakai kacamata berlensa silindris. Pasien tersebut mengalami kelainan mata yang disebut ....\n\nA. miopi\nB. hipermetropi\nC. astigmatisma\nD. presbiopi',
          answer: 'C. astigmatisma',
          principle:
            'Kelengkungan kornea atau lensa mata yang tidak simetris/tidak rata menyebabkan berkas cahaya pada bidang vertikal dan horizontal tidak terfokus pada satu titik yang sama di retina (astigmatisma).',
          solution:
            'Mari tinjau tiap kelainan refraksi mata:\n- **Miopi (rabun jauh):** bayangan jatuh di depan retina; dikoreksi dengan lensa cekung (negatif).\n- **Hipermetropi (rabun dekat):** bayangan jatuh di belakang retina; dikoreksi dengan lensa cembung (positif).\n- **Astigmatisma (mata silinder):** kelengkungan permukaan kornea atau lensa mata tidak merata sehingga sinar sejajar dibiaskan pada jarak fokus yang berbeda-beda; dikoreksi dengan lensa silindris.\n- **Presbiopi (mata tua):** berkurangnya daya akomodasi akibat melemahnya elastisitas lensa dan otot siliaris pada usia lanjut; dikoreksi dengan lensa rangkap (bifokal).',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Dalam suatu rantai makanan, makhluk hidup yang memakan produsen merupakan konsumen tingkat ke- ... dan akan menduduki tingkat trofik ke- ....\n\nA. satu; satu\nB. satu; dua\nC. dua; satu\nD. dua; dua',
          answer: 'B. satu; dua',
          principle:
            'Tingkat trofik I ditempati oleh produsen (autotrof), sedangkan organisme herbivora yang memakan produsen langsung menempati posisi konsumen tingkat I sekaligus tingkat trofik II.',
          solution:
            'Urutan dalam rantai makanan perumput adalah:\n1. **Produsen** (tumbuhan/fitoplankton) $\\rightarrow$ tingkat trofik I.\n2. **Konsumen tingkat I / satu** (herbivora pemakan produsen) $\\rightarrow$ tingkat trofik II / dua.\n3. **Konsumen tingkat II / dua** (karnivora kecil) $\\rightarrow$ tingkat trofik III / tiga.\n\nDengan demikian, makhluk hidup pemakan produsen adalah konsumen tingkat **satu** dan menduduki tingkat trofik **dua**.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Kingdom berikut ini yang selnya tidak memiliki dinding sel adalah ....\n\nA. fungi\nB. bakteri\nC. tumbuhan\nD. protista',
          answer: 'D. protista',
          principle:
            'Dalam klasifikasi lima kingdom, sel bakteri (Monera), Fungi, dan Tumbuhan (Plantae) selalu memiliki dinding sel dengan penyusun khas, sedangkan kelompok Protista mirip hewan (Protozoa) tidak memiliki dinding sel.',
          solution:
            'Perbandingan keberadaan dinding sel pada keempat pilihan:\n- **Fungi:** memiliki dinding sel tersusun atas zat kitin.\n- **Bakteri (Monera):** memiliki dinding sel tersusun atas peptidoglikan.\n- **Tumbuhan (Plantae):** memiliki dinding sel tersusun atas selulosa.\n- **Protista:** kingdom yang heterogen; meskipun protista mirip tumbuhan (alga) memiliki dinding sel, protista mirip hewan (**Protozoa**, seperti *Amoeba* dan *Paramecium*) serta kapang lendir pada fase plasmodium **tidak memiliki dinding sel**.\n\nJadi, di antara keempat kingdom pada pilihan, yang selnya dapat tidak memiliki dinding sel adalah **protista**.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Keanekaragaman hayati yang tinggi di daerah tropis dimungkinkan oleh adanya faktor berikut, kecuali ....\n\nA. curah hujan yang tinggi\nB. suhu yang hangat\nC. perbedaan suhu yang relatif tinggi\nD. cahaya matahari ada sepanjang tahun',
          answer: 'C. perbedaan suhu yang relatif tinggi',
          principle:
            'Wilayah tropis memiliki iklim stabil dengan suhu hangat, fluktuasi suhu harian/musiman yang kecil, curah hujan melimpah, dan penyinaran matahari sepanjang tahun sehingga mendukung produktivitas primer dan keanekaragaman hayati yang tinggi.',
          solution:
            'Faktor abiotik utama yang menopang tingginya biodiversitas hutan hujan tropis meliputi:\n- Curah hujan tahunan yang tinggi (pilihan A benar).\n- Suhu udara hangat yang sesuai bagi laju metabolisme dan pertumbuhan organisme (pilihan B benar).\n- Penyinaran cahaya matahari sepanjang tahun untuk fotosintesis optimal (pilihan D benar).\n\nSebaliknya, daerah tropis justru dicirikan oleh **perbedaan (fluktuasi) suhu antar musim yang relatif kecil/rendah**, bukan tinggi. Oleh karena itu, pengecualian yang dimaksud adalah pilihan **C**.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Organel sel yang berperan untuk mendetoksifikasi racun adalah ....\n\nA. lisosom\nB. mitokondria\nC. peroksisom\nD. badan Golgi',
          answer: 'C. peroksisom',
          principle:
            'Peroksisom mengandung enzim oksidase dan katalase yang menguraikan senyawa peroksida beracun ($\\text{H}_2\\text{O}_2$) serta berperan dalam detoksifikasi senyawa toksik (misalnya alkohol di sel hati).',
          solution:
            'Fungsi masing-masing organel pada pilihan:\n- **Lisosom:** pencernaan intraseluler menggunakan enzim hidrolitik dan autofagi organel rusak.\n- **Mitokondria:** respirasi seluler aerob untuk menghasilkan $\\text{ATP}$.\n- **Peroksisom:** mengoksidasi asam lemak rantai sangat panjang dan menetralkan racun (termasuk menguraikan hidrogen peroksida $\\text{H}_2\\text{O}_2$ menjadi $\\text{H}_2\\text{O}$ dan $\\text{O}_2$ oleh enzim katalase).\n- **Badan Golgi:** modifikasi, pengemasan, dan sekresi protein/lipid.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Pada suatu hari Ani meminum air sebanyak $300\\ \\text{mL}$ per hari, sedangkan Eni meminum air sebanyak $2\\ \\text{liter}$ per hari. Berdasarkan perbandingan tersebut maka perbedaan urin yang dihasilkan Ani dan Eni pada keesokan harinya adalah ....\n\nA. Ani mengekskresikan urin banyak, berwarna kuning pekat; Eni mengekskresikan urin banyak berwarna kuning pucat\nB. Eni mengekskresikan urin banyak berwarna kuning pucat; Ani mengekskresikan urin sedikit, berwarna kuning pekat\nC. Ani mengekskresikan urin sedikit, berwarna kuning pekat; Eni mengekskresikan urin sedikit berwarna kuning pucat\nD. Eni mengekskresikan urin sedikit berwarna kuning pucat; Ani mengekskresikan urin banyak, berwarna kuning pucat',
          answer: 'B. Eni mengekskresikan urin banyak berwarna kuning pucat; Ani mengekskresikan urin sedikit, berwarna kuning pekat',
          principle:
            'Homeostasis osmoregulasi oleh ginjal dan hormon antidiuretik (ADH): asupan air sedikit memicu sekresi ADH tinggi sehingga reabsorpsi air meningkat dan urin menjadi sedikit serta pekat; asupan air banyak menekan ADH sehingga urin banyak dan encer.',
          solution:
            'Analisis osmoregulasi cairan tubuh (diperiksa dan diverifikasi secara ilmiah):\n- **Ani** hanya minum $300\\ \\text{mL}$ air: osmolalitas darah meningkat sehingga kelenjar hipofisis posterior melepaskan lebih banyak **ADH** (*antidiuretic hormone*). Permeabilitas tubulus kolektivus ginjal terhadap air meningkat, air banyak diserap kembali ke darah, sehingga Ani mengekskresikan **urin sedikit dan berwarna kuning pekat**.\n- **Eni** minum $2\\ \\text{liter}$ air: osmolalitas darah rendah sehingga sekresi ADH ditekan. Reabsorpsi air di tubulus kolektivus menurun, sehingga Eni mengekskresikan **urin banyak dan berwarna kuning pucat** (lebih encer).\n\nPilihan yang tepat secara ilmiah adalah **B**.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Saat melakukan olahraga, denyut jantung dan pernapasan menjadi semakin lebih cepat. Setelah ia melakukan istirahat, denyut jantung dan pernapasannya menjadi normal kembali. Mekanisme tersebut dimungkinkan karena adanya ....\n\nA. saraf simpatik\nB. saraf parasimpatik\nC. sumsum lanjutan\nD. sumsum tulang belakang',
          answer: 'B. saraf parasimpatik',
          principle:
            'Sistem saraf otonom terdiri atas saraf simpatik (memacu aktivitas organ saat kondisi aktif/stres) dan saraf parasimpatik (memperlambat dan mengembalikan kerja organ ke kondisi istirahat normal).',
          solution:
            'Ketika berolahraga, divisi **saraf simpatik** memacu peningkatan frekuensi denyut jantung dan laju pernapasan untuk mencukupi kebutuhan oksigen otot. Setelah berhenti dan beristirahat, divisi **saraf parasimpatik** (terutama melalui saraf vagus) bekerja antagonis menurunkan laju pacu jantung dan frekuensi pernapasan hingga kembali ke keadaan basal/normal.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Seorang ahli merancang termometer yang memiliki titik tetap bawah $10^\\circ\\text{T}$. Pada tekanan $1\\ \\text{atm}$, air bersuhu $50^\\circ\\text{C}$ terukur sama dengan $50^\\circ\\text{T}$, maka air mendidih pada suhu ... $^\\circ\\text{T}$.\n\nA. $110$\nB. $100$\nC. $90$\nD. $80$',
          answer: 'C. $90$',
          principle:
            'Skala dua termometer linear memenuhi kesebandingan selisih suhu terhadap titik tetap bawahnya: $\\frac{T - T_0}{C - C_0} = \\text{konstan}$.',
          solution:
            'Pada tekanan $1\\ \\text{atm}$, titik beku air adalah $C_0 = 0^\\circ\\text{C}$ (bersesuaian dengan $T_0 = 10^\\circ\\text{T}$) dan titik didih air adalah $C_b = 100^\\circ\\text{C}$. Diketahui pada suhu $C_1 = 50^\\circ\\text{C}$ termometer menunjukkan $T_1 = 50^\\circ\\text{T}$ (catatan: pada naskah sumber tertulis $50^\\circ\\text{T}$ untuk suhu air yang seharusnya $50^\\circ\\text{C}$).\n\nDengan kesebandingan skala linear:\n$$\\frac{T_b - T_0}{C_b - C_0} = \\frac{T_1 - T_0}{C_1 - C_0}$$\nSubstitusikan nilai-nilainya:\n$$\\frac{T_b - 10}{100 - 0} = \\frac{50 - 10}{50 - 0} = \\frac{40}{50} = \\frac{4}{5}$$\nSehingga:\n$$T_b - 10 = \\frac{4}{5} \\times 100 = 80 \\implies T_b = 90^\\circ\\text{T}.$$',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Sebuah mesin listrik digunakan untuk menarik balok bermassa $100\\ \\text{kg}$ yang sedang diam, dengan gaya konstan. Gaya gesek antara lantai dan balok dianggap konstan sebesar $30\\ \\text{N}$. Jika saat berpindah sejauh $1\\ \\text{m}$, kecepatan benda $0{,}20\\ \\text{m/s}$, usaha yang dilakukan mesin pada balok sebesar .... joule.\n\nA. $230$\nB. $50$\nC. $32$\nD. $2$',
          answer: 'C. $32$',
          principle:
            'Teorema usaha–energi: usaha total semua gaya yang bekerja pada benda sama dengan perubahan energi kinetiknya, $W_{\\text{total}} = W_{\\text{mesin}} + W_{\\text{gesek}} = \\Delta E_k$.',
          solution:
            'Diketahui:\n- Massa balok $m = 100\\ \\text{kg}$, kecepatan awal $v_0 = 0$, kecepatan akhir $v = 0{,}20\\ \\text{m/s}$.\n- Gaya gesek kinetis $f_k = 30\\ \\text{N}$, perpindahan $s = 1\\ \\text{m}$.\n\nSecara simbolik, dari teorema usaha–energi:\n$$W_{\\text{mesin}} - f_k s = \\frac{1}{2} m v^2 - \\frac{1}{2} m v_0^2$$\n$$W_{\\text{mesin}} = f_k s + \\frac{1}{2} m v^2$$\nSubstitusikan nilai dalam satuan SI:\n$$W_{\\text{mesin}} = (30\\ \\text{N})(1\\ \\text{m}) + \\frac{1}{2}(100\\ \\text{kg})(0{,}20\\ \\text{m/s})^2 = 30 + 50(0{,}04) = 30 + 2 = 32\\ \\text{J}.$$',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Sebuah bola konduktor pejal berjari-jari $8\\ \\text{cm}$ dan bermuatan $q = 8 \\times 10^{-11}\\ \\text{C}$. Potensial sebuah titik di dalam bola yang berjarak $5\\ \\text{cm}$ dari pusat bola adalah .... volt. Nilai $(k = 9 \\times 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2)$.\n\nA. $6{,}0$\nB. $7{,}5$\nC. $9{,}0$\nD. $14{,}5$',
          answer: 'C. $9{,}0$',
          principle:
            'Pada bola konduktor bermuatan dalam kesetimbangan elektrostatik, seluruh muatan tersebar di permukaan sehingga medan listrik di dalam bola bernilai nol dan potensial listrik di setiap titik di dalam bola ($r \\le R$) bernilai konstan sama dengan potensial di permukaannya: $V = \\frac{kq}{R}$.',
          solution:
            'Diketahui $R = 8\\ \\text{cm} = 8 \\times 10^{-2}\\ \\text{m}$, $r = 5\\ \\text{cm} < R$, $q = 8 \\times 10^{-11}\\ \\text{C}$, dan $k = 9 \\times 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$.\n\nKarena titik berada di dalam bola konduktor ($r < R$), tidak ada medan listrik di bagian dalam ($E = 0$), sehingga usaha memindahkan muatan uji dari permukaan ke titik $r$ adalah nol. Dengan demikian potensial pada $r = 5\\ \\text{cm}$ sama dengan potensial di permukaan bola:\n$$V = \\frac{k q}{R}$$\nSubstitusi nilai SI:\n$$V = \\frac{(9 \\times 10^9)(8 \\times 10^{-11})}{8 \\times 10^{-2}} = \\frac{72 \\times 10^{-2}}{8 \\times 10^{-2}} = 9{,}0\\ \\text{V}.$$',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Sebuah pipa U berisi air dan minyak dengan jumlah yang sama. Massa jenis air dan minyak berturut-turut adalah $1\\ \\text{g/cm}^3$ dan $0{,}9\\ \\text{g/cm}^3$. Jika tinggi kolom minyak $20\\ \\text{cm}$, selisih tinggi kolom minyak dan air sama dengan .... $\\text{mm}$.\n\nA. $15$\nB. $18$\nC. $20$\nD. $27$',
          answer: 'C. $20$',
          principle:
            'Hukum pokok hidrostatika: tekanan hidrostatik pada kedalaman bidang batas setimbang di kedua kaki pipa U bernilai sama, sehingga $\\rho_{\\text{air}} g h_{\\text{air}} = \\rho_{\\text{minyak}} g h_{\\text{minyak}}$.',
          solution:
            'Misalkan tinggi kolom minyak di atas bidang batas adalah $h_m = 20\\ \\text{cm}$ dan tinggi kolom air di atas bidang batas adalah $h_a$. Dari kesetimbangan tekanan hidrostatik:\n$$\\rho_a g h_a = \\rho_m g h_m \\implies h_a = \\frac{\\rho_m}{\\rho_a} h_m$$\nSubstitusi $\\rho_a = 1\\ \\text{g/cm}^3$, $\\rho_m = 0{,}9\\ \\text{g/cm}^3$, dan $h_m = 20\\ \\text{cm}$:\n$$h_a = \\frac{0{,}9}{1} \\times 20\\ \\text{cm} = 18\\ \\text{cm}.$$\nSelisih tinggi permukaan kolom minyak dan air adalah:\n$$\\Delta h = h_m - h_a = 20\\ \\text{cm} - 18\\ \\text{cm} = 2\\ \\text{cm} = 20\\ \\text{mm}.$$',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Sebuah bola plastik dengan volume $100\\ \\text{cm}^3$ diletakkan di air. Diamati bahwa tiga per empat bagian bola berada di dalam air. Kemudian, bola ditekan ke bawah, sehingga seluruh bagiannya tepat berada di dalam air. Jika massa jenis air $1\\ \\text{g/cm}^3$, besar gaya tekan itu sama dengan .... $\\text{N}$. Anggaplah percepatan gravitasi di tempat itu $10\\ \\text{m/s}^2$.\n\nA. $0{,}75$\nB. $0{,}25$\nC. $0{,}075$\nD. $0{,}025$',
          answer: 'B. $0{,}25$',
          principle:
            'Hukum Archimedes dan kesetimbangan gaya: gaya tekan ke bawah yang diperlukan untuk menenggelamkan seluruh benda sama dengan tambahan gaya apung dari seperempat bagian volume yang semula berada di atas permukaan air.',
          solution:
            'Diketahui:\n- Volume total bola $V = 100\\ \\text{cm}^3 = 10^{-4}\\ \\text{m}^3$.\n- Massa jenis air $\\rho_f = 1\\ \\text{g/cm}^3 = 1000\\ \\text{kg/m}^3$, dan $g = 10\\ \\text{m/s}^2$.\n\nSaat mengapung bebas, berat bola $w$ setimbang dengan gaya apung pada $\\frac{3}{4}$ volume:\n$$w = \\rho_f g \\left(\\frac{3}{4} V\\right)$$\nSaat seluruh bola ditekan tepat tenggelam seluruhnya, kesetimbangan gaya vertikal memenuhi:\n$$F_{\\text{tekan}} + w = \\rho_f g V$$\nSehingga gaya tekan yang diperlukan adalah:\n$$F_{\\text{tekan}} = \\rho_f g V - \\rho_f g \\left(\\frac{3}{4} V\\right) = \\frac{1}{4} \\rho_f g V$$\nSubstitusi satuan SI:\n$$F_{\\text{tekan}} = \\frac{1}{4} (1000\\ \\text{kg/m}^3)(10\\ \\text{m/s}^2)(10^{-4}\\ \\text{m}^3) = 0{,}25\\ \\text{N}.$$',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Sebuah pegas digantungkan secara vertikal. Setelah diberi beban, panjang pegas itu bertambah sebesar $L$. Kemudian, beban ditarik sedikit ke bawah dan dilepaskan, sehingga bergerak naik-turun dengan frekuensi $\\frac{10\\sqrt{5}}{\\pi}\\ \\text{Hz}$. Jika besar percepatan gravitasi di tempat itu $10\\ \\text{m/s}^2$, $L$ sama dengan .... $\\text{cm}$.\n\nA. $1{,}3$\nB. $1{,}0$\nC. $0{,}8$\nD. $0{,}5$',
          answer: 'D. $0{,}5$',
          principle:
            'Pada sistem pegas vertikal yang setimbang dengan pertambahan panjang $L$, berlaku $kL = mg$ sehingga $\\frac{k}{m} = \\frac{g}{L}$ dan frekuensi osilasi harmonik sederhana memenuhi $f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}} = \\frac{1}{2\\pi}\\sqrt{\\frac{g}{L}}$.',
          solution:
            'Dari syarat kesetimbangan statis pegas vertikal bermassa $m$:\n$$k L = m g \\implies \\frac{k}{m} = \\frac{g}{L}$$\nFrekuensi gerak harmonik sederhana sistem pegas–massa:\n$$f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}} = \\frac{1}{2\\pi}\\sqrt{\\frac{g}{L}}$$\nKuadratkan kedua ruas untuk menyatakan $L$ secara simbolik:\n$$f^2 = \\frac{g}{4\\pi^2 L} \\implies L = \\frac{g}{4\\pi^2 f^2}$$\nSubstitusikan $g = 10\\ \\text{m/s}^2$ dan $f = \\frac{10\\sqrt{5}}{\\pi}\\ \\text{Hz}$ (sehingga $f^2 = \\frac{500}{\\pi^2}\\ \\text{Hz}^2$):\n$$L = \\frac{10}{4\\pi^2 \\cdot \\frac{500}{\\pi^2}} = \\frac{10}{2000} = 0{,}005\\ \\text{m} = 0{,}5\\ \\text{cm}.$$',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Pada sebuah lampu tertulis $60\\ \\text{W}/220\\ \\text{V}$. Jika lampu tersebut dipasang pada tegangan $110\\ \\text{V}$, maka daya listriknya menjadi .... watt.\n\nA. $60$\nB. $30$\nC. $20$\nD. $15$',
          answer: 'D. $15$',
          principle:
            'Dengan menganggap hambatan filamen lampu $R$ tetap, daya listrik sebanding dengan kuadrat tegangan: $P = \\frac{V^2}{R}$, sehingga $\\frac{P_2}{P_1} = \\left(\\frac{V_2}{V_1}\\right)^2$.',
          solution:
            'Dari spesifikasi lampu $P_1 = 60\\ \\text{W}$ pada $V_1 = 220\\ \\text{V}$, hambatan lampu adalah $R = \\frac{V_1^2}{P_1}$.\nKetika dipasang pada tegangan $V_2 = 110\\ \\text{V}$:\n$$P_2 = \\frac{V_2^2}{R} = \\left(\\frac{V_2}{V_1}\\right)^2 P_1$$\nSubstitusi nilai:\n$$P_2 = \\left(\\frac{110}{220}\\right)^2 \\times 60\\ \\text{W} = \\left(\\frac{1}{2}\\right)^2 \\times 60\\ \\text{W} = \\frac{1}{4} \\times 60\\ \\text{W} = 15\\ \\text{W}.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Perhatikan pernyataan berikut:\n1. gliserol dan asam lemak menjadi lipid\n2. glukosa berubah menjadi $\\text{CO}_2$ dan $\\text{H}_2\\text{O}$\n3. $\\text{ATP}$ menjadi $\\text{ADP}$\n\nYang merupakan proses katabolisme adalah ....\n\nA. $1, 2, 3$\nB. $1, 2$\nC. $2, 3$\nD. $1, 3$',
          answer: 'C. $2, 3$',
          principle:
            'Katabolisme adalah reaksi metabolisme berupa pemecahan/penguraian molekul kompleks atau berenergi tinggi menjadi molekul lebih sederhana dengan melepaskan energi, sedangkan anabolisme adalah reaksi penyusunan/sintesis.',
          solution:
            'Evaluasi tiap proses:\n1. **Gliserol dan asam lemak menjadi lipid:** reaksi penyusunan molekul sederhana menjadi makromolekul kompleks (sintesis/esterifikasi), termasuk **anabolisme**.\n2. **Glukosa berubah menjadi $\\text{CO}_2$ dan $\\text{H}_2\\text{O}$:** respirasi seluler yang memecah glukosa untuk menghasilkan energi, termasuk **katabolisme**.\n3. **$\\text{ATP}$ menjadi $\\text{ADP}$:** reaksi hidrolisis pemutusan ikatan gugus fosfat berenergi tinggi menjadi molekul lebih sederhana sambil melepaskan energi, termasuk reaksi **katabolik/eksergonik**.\n\nJadi, proses katabolisme ditunjukkan oleh nomor **2 dan 3**.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Berikut merupakan alat dan bahan untuk percobaan pada tumbuhan:\n1. respirometer\n2. alat timbang\n3. kertas kobalt\n4. bromtimol\n\nTerjadinya transpirasi pada tumbuhan melalui stomata dan kutikula dapat diketahui dengan menggunakan ....\n\nA. $1, 2, 3$\nB. $1, 2, 4$\nC. $2, 3$\nD. $1, 4$',
          answer: 'C. $2, 3$',
          principle:
            'Transpirasi adalah penguapan air oleh tumbuhan; keberadaannya dapat dideteksi melalui hilangnya massa air tumbuhan (metode gravimetri dengan alat timbang) dan indikator kelembapan/uap air (kertas kobalt(II) klorida $\\text{CoCl}_2$).',
          solution:
            'Tinjauan fungsi masing-masing alat dan bahan (diverifikasi secara ilmiah):\n1. **Respirometer:** digunakan untuk mengukur laju **respirasi** (penyerapan $\\text{O}_2$), bukan transpirasi (alat pengukur transpirasi adalah *potometer*).\n2. **Alat timbang (neraca):** mengukur berkurangnya massa tumbuhan dalam pot tertutup akibat penguapan air (transpirasi).\n3. **Kertas kobalt (kobalt(II) klorida):** kertas indikator yang berubah warna dari biru menjadi merah muda saat menyerap uap air yang keluar melalui stomata/kutikula.\n4. **Bromtimol biru:** indikator asam–basa untuk mendeteksi perubahan pH akibat keberadaan $\\text{CO}_2$ dalam percobaan respirasi atau fotosintesis.\n\nOleh karena itu, alat dan bahan untuk mengetahui transpirasi adalah nomor **2 dan 3** (pilihan **C**).',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Berikut ini adalah beberapa interaksi dalam suatu komunitas:\n1. amensalisme\n2. kompetisi\n3. parasitisme\n4. mutualisme\n\nJenis interaksi yang memberikan keuntungan minimal pada salah satu pihak yang berinteraksi adalah ....\n\nA. $1, 2$\nB. $2, 4$\nC. $1, 3$\nD. $3, 4$',
          answer: 'D. $3, 4$',
          principle:
            'Dalam interaksi antarspesies, tanda $(+)$ menunjukkan pihak yang diuntungkan, $(-)$ dirugikan, dan $(0)$ netral. "Keuntungan minimal pada salah satu pihak" berarti paling sedikit satu pihak bertanda $(+)$.',
          solution:
            'Klasifikasi dampak interaksi:\n1. **Amensalisme $(-, 0)$:** satu pihak dirugikan, pihak lain tidak terpengaruh (tidak ada yang untung).\n2. **Kompetisi $(-, -)$:** kedua pihak sama-sama dirugikan karena memperebutkan sumber daya terbatas.\n3. **Parasitisme $(+, -)$:** satu pihak (parasit) mendapat keuntungan dan inang dirugikan.\n4. **Mutualisme $(+, +)$:** kedua pihak sama-sama mendapat keuntungan (berarti minimal satu pihak—bahkan keduanya—untung).\n\nJadi interaksi yang sesuai adalah nomor **3 dan 4**.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Berikut adalah hewan yang dapat ditemukan di ekosistem mangrove:\n1. keong\n2. kerang\n3. ikan\n4. kepiting\n\nDi antara hewan tersebut, yang memiliki kekerabatan paling dekat adalah ....\n\nA. $1, 2, 3$\nB. $1, 2$\nC. $3, 4$\nD. $2, 4$',
          answer: 'B. $1, 2$',
          principle:
            'Kekerabatan taksonomi paling dekat dimiliki oleh organisme yang berada dalam takson yang sama pada tingkat filum atau kelas yang sama.',
          solution:
            'Klasifikasi taksonomi keempat hewan tersebut:\n1. **Keong:** Filum **Mollusca** (Kelas Gastropoda).\n2. **Kerang:** Filum **Mollusca** (Kelas Bivalvia).\n3. **Ikan:** Filum **Chordata** (Subfilum Vertebrata).\n4. **Kepiting:** Filum **Arthropoda** (Subfilum Crustacea).\n\nKarena keong dan kerang tergolong dalam satu filum yang sama, yaitu Mollusca, keduanya memiliki kekerabatan paling dekat (**1 dan 2**).',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Apabila seseorang makan bahan makanan yang mengandung:\n1. amilum\n2. protein\n3. glukosa\n4. lemak\n5. asam amino\n\nZat makanan yang mengalami pencernaan kimia adalah ....\n\nA. $1, 2, 3$\nB. $2, 3, 4$\nC. $1, 2, 4$\nD. $3, 4, 5$',
          answer: 'C. $1, 2, 4$',
          principle:
            'Pencernaan kimiawi adalah pemecahan makromolekul (polimer) menjadi molekul monomer sederhana oleh enzim pencernaan; molekul yang sudah berupa monomer langsung diserap tanpa pencernaan kimiawi.',
          solution:
            'Tinjauan tiap zat makanan:\n1. **Amilum (pati):** polisakarida, dipecah secara kimiawi oleh enzim amilase dan disakaridase menjadi glukosa.\n2. **Protein:** polipeptida, dipecah secara kimiawi oleh pepsin, tripsin, dan peptidase menjadi asam amino.\n3. **Glukosa:** sudah berupa monosakarida (monomer), langsung diserap di usus halus tanpa pencernaan kimiawi.\n4. **Lemak (trigliserida):** dipecah secara kimiawi oleh enzim lipase menjadi asam lemak dan gliserol.\n5. **Asam amino:** sudah berupa monomer protein, langsung diserap tanpa pencernaan kimiawi.\n\nJadi zat yang mengalami pencernaan kimia adalah nomor **1, 2, dan 4**.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Sebuah benda bermassa $20\\ \\text{gram}$ dilepaskan dari ketinggian $8\\ \\text{m}$ di atas lantai. Percepatan gravitasi di tempat itu $10\\ \\text{m/s}^2$. Pernyataan berikut berhubungan dengan keadaan benda saat satu sekon setelah dilepaskan:\n1. Energi kinetik lebih kecil dari energi potensial.\n2. Energi potensial menjadi $\\frac{5}{8}$ dari semula.\n3. Benda berada $5\\ \\text{m}$ di atas lantai.\n4. Kecepatan benda $10\\ \\text{m/s}$.\n\nPernyataan yang benar ditunjukkan oleh nomor ....\n\nA. $1$ dan $4$\nB. $1, 2,$ dan $4$\nC. $1, 2, 3,$ dan $4$\nD. $4$',
          answer: 'D. $4$',
          principle:
            'Gerak jatuh bebas ($v_0 = 0$) memenuhi $v = gt$ dan jarak tempuh vertikal $\\Delta h = \\frac{1}{2}gt^2$, sedangkan ketinggian dari lantai adalah $h = h_0 - \\Delta h$.',
          solution:
            'Diketahui $m = 20\\ \\text{g} = 0{,}02\\ \\text{kg}$, $h_0 = 8\\ \\text{m}$, $g = 10\\ \\text{m/s}^2$, $v_0 = 0$, dan $t = 1\\ \\text{s}$.\n- Jarak jatuh benda dalam $t = 1\\ \\text{s}$:\n$$\\Delta h = \\frac{1}{2} g t^2 = \\frac{1}{2}(10)(1)^2 = 5\\ \\text{m}$$\n- Ketinggian benda dari lantai: $h = h_0 - \\Delta h = 8 - 5 = 3\\ \\text{m}$. Jadi pernyataan 3 (berada $5\\ \\text{m}$ di atas lantai) **salah**.\n- Kecepatan benda saat $t = 1\\ \\text{s}$:\n$$v = g t = 10 \\times 1 = 10\\ \\text{m/s}$$\nJadi pernyataan 4 **benar**.\n- Energi potensial awal $E_{p,0} = mgh_0 = 0{,}02 \\times 10 \\times 8 = 1{,}6\\ \\text{J}$ dan saat $t = 1\\ \\text{s}$ adalah $E_p = mgh = 0{,}02 \\times 10 \\times 3 = 0{,}6\\ \\text{J}$, sehingga $\\frac{E_p}{E_{p,0}} = \\frac{3}{8}$. Jadi pernyataan 2 **salah**.\n- Energi kinetik saat $t = 1\\ \\text{s}$ adalah $E_k = \\frac{1}{2}mv^2 = \\frac{1}{2}(0{,}02)(10)^2 = 1{,}0\\ \\text{J} > E_p = 0{,}6\\ \\text{J}$. Jadi pernyataan 1 **salah**.\n\nHanya pernyataan **4** yang benar.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Berikut ini merupakan contoh-contoh peristiwa yang berhubungan dengan perubahan zat:\n1. fotosintesis pada tumbuhan\n2. singkong menjadi tapai\n3. besi berkarat\n4. beras menjadi nasi\n\nDari contoh-contoh di atas, yang merupakan perubahan kimia ditunjukkan oleh nomor ....\n\nA. $1$ dan $3$\nB. $2$ dan $4$\nC. $1, 2,$ dan $3$\nD. $1, 2, 3,$ dan $4$',
          answer: 'D. $1, 2, 3,$ dan $4$',
          principle:
            'Perubahan kimia adalah perubahan zat yang menghasilkan zat baru dengan sifat berbeda dan bersifat ireversibel (tidak dapat kembali ke bentuk asal dengan cara fisika sederhana).',
          solution:
            'Evaluasi tiap peristiwa dalam konteks perubahan zat:\n1. **Fotosintesis:** $\\text{CO}_2$ dan $\\text{H}_2\\text{O}$ bereaksi membentuk glukosa dan $\\text{O}_2$ (perubahan kimia).\n2. **Singkong menjadi tapai:** fermentasi pati oleh ragi menjadi glukosa, etanol, dan asam organik (perubahan kimia).\n3. **Besi berkarat:** reaksi oksidasi besi oleh oksigen dan air membentuk karat besi oksida terhidrat (perubahan kimia).\n4. **Beras menjadi nasi:** dalam pembelajaran IPA SMP, pemasakan beras hingga menjadi nasi digolongkan sebagai perubahan kimia karena terjadi perubahan struktur pati (gelatinisasi) akibat pemanasan sehingga menghasilkan sifat lunak dan tidak dapat kembali menjadi beras.\n\nJadi keempatnya ditunjukkan oleh nomor **1, 2, 3, dan 4**.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Sebuah sumber bunyi merambatkan energi ke segala arah dalam bentuk gelombang longitudinal.\n1. Daerah pancaran gelombangnya berbentuk bola.\n2. Jika jaraknya dijadikan $4$ kali maka intensitasnya menjadi $\\frac{1}{2}$ kali.\n3. Perbandingan intensitas bunyi pada jarak $1$ dan $2$ meter terhadap sumber adalah $4 : 1$.\n4. Jika jaraknya dijadikan $4$ kali maka energinya menjadi $\\frac{1}{4}$ kali.\n\nDari pernyataan di atas yang benar adalah nomor ....\n\nA. $1, 2, 3$\nB. $1, 3$\nC. $2, 4$\nD. $4$ saja',
          answer: 'B. $1, 3$',
          principle:
            'Sumber titik memancarkan gelombang ke segala arah dengan muka gelombang berbentuk permukaan bola berluas $A = 4\\pi r^2$, sehingga intensitas bunyi berbanding terbalik dengan kuadrat jarak: $I = \\frac{P}{4\\pi r^2} \\propto \\frac{1}{r^2}$.',
          solution:
            'Evaluasi tiap pernyataan:\n1. **Benar:** gelombang merambat ke segala arah secara isotropis sehingga muka gelombangnya berbentuk permukaan bola.\n2. **Salah:** karena $I \\propto \\frac{1}{r^2}$, jika jarak $r$ dijadikan $4$ kali, intensitasnya menjadi $\\frac{1}{4^2} = \\frac{1}{16}$ kali (bukan $\\frac{1}{2}$ kali).\n3. **Benar:** perbandingan intensitas pada $r_1 = 1\\ \\text{m}$ dan $r_2 = 2\\ \\text{m}$ adalah\n$$\\frac{I_1}{I_2} = \\left(\\frac{r_2}{r_1}\\right)^2 = \\left(\\frac{2}{1}\\right)^2 = 4 : 1.$$\n4. **Salah:** energi total gelombang yang melewati permukaan bola berpusat di sumber tetap kekal (dalam medium tanpa serapan), sedangkan energi per satuan luas/intensitasnya menjadi $\\frac{1}{16}$ kali, bukan $\\frac{1}{4}$ kali.\n\nJadi pernyataan yang benar adalah **1 dan 3**.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Dari kejauhan sebuah benda bergerak konstan $10\\ \\text{cm/s}$ mendekati sebuah cermin konvergen dengan panjang fokal cermin $20\\ \\text{cm}$. Pada $t = 0$ jarak benda ke cermin $60\\ \\text{cm}$. Jika dinyatakan bahwa:\n1. bayangan benda bergerak mendekati cermin,\n2. pada $t = 0$ bayangan benda terbentuk $30\\ \\text{cm}$ di depan cermin,\n3. pada $t < 4$ detik bayangan benda tampak pada cermin,\n4. pada $t > 4$ detik bayangan benda tampak pada cermin,\n\npernyataan yang benar adalah ....\n\nA. $1, 2,$ dan $3$\nB. $1$ dan $3$\nC. $2$ dan $4$\nD. $1, 2, 3,$ dan $4$',
          answer: 'C. $2$ dan $4$',
          principle:
            'Cermin konvergen adalah cermin cekung dengan $f > 0$. Persamaan cermin memenuhi $\\frac{1}{s} + \\frac{1}{s\'} = \\frac{1}{f} \\implies s\' = \\frac{sf}{s - f}$. Bayangan nyata ($s\' > 0$) terbentuk di depan cermin dan ditangkap layar, sedangkan bayangan maya ($s\' < 0$) berada di belakang cermin dan tampak pada cermin.',
          solution:
            'Diketahui $f = +20\\ \\text{cm}$ dan jarak benda sebagai fungsi waktu adalah $s(t) = 60 - 10t\\ \\text{cm}$.\n- **Pernyataan 2 (Benar):** pada $t = 0$, $s = 60\\ \\text{cm}$, sehingga\n$$s\' = \\frac{sf}{s - f} = \\frac{60 \\times 20}{60 - 20} = \\frac{1200}{40} = +30\\ \\text{cm}$$\nTanda positif berarti bayangan nyata dan terletak $30\\ \\text{cm}$ di depan cermin.\n- **Pernyataan 1 (Salah):** selama $0 \\le t < 4\\ \\text{s}$, benda bergerak mendekati fokus ($s$ turun dari $60\\ \\text{cm}$ menuju $20\\ \\text{cm}$). Nilai $s\' = \\frac{20s}{s - 20}$ justru membesar dari $30\\ \\text{cm}$ menuju $\\infty$, sehingga bayangan nyata bergerak **menjauhi** cermin.\n- **Pernyataan 3 (Salah) dan 4 (Benar):** benda mencapai titik fokus ($s = 20\\ \\text{cm}$) saat $60 - 10t = 20 \\implies t = 4\\ \\text{s}$. Untuk $t < 4\\ \\text{s}$ ($s > f$), bayangan bersifat nyata di depan cermin (tidak tampak di dalam cermin). Untuk $t > 4\\ \\text{s}$ ($0 < s < f$), $s\' < 0$ sehingga terbentuk bayangan maya, tegak, diperbesar di belakang cermin yang tampak langsung pada cermin.\n\nJadi pernyataan yang benar adalah **2 dan 4**.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Sebuah benda berada di lantai kasar dan diikatkan pada ujung sebuah pegas mendatar dengan konstanta pegas $40\\ \\text{N/m}$. Ujung lain pegas diikatkan pada dinding. Benda digeser, sehingga pegas memanjang sebesar $1\\ \\text{cm}$, kemudian dilepaskan. Benda berhenti tepat di titik seimbang. Jika dinyatakan bahwa:\n1. energi mekanik berkurang,\n2. besar gaya gesek antara benda dan lantai sama dengan $0{,}2\\ \\text{N}$,\n3. usaha gaya gesek sebesar energi potensial maksimum,\n4. usaha gaya gesek sebesar $0{,}001\\ \\text{joule}$,\n\npernyataan yang benar adalah ....\n\nA. $1, 2,$ dan $3$\nB. $1$ dan $3$\nC. $2$ dan $4$\nD. $1, 2, 3,$ dan $4$',
          answer: 'A. $1, 2,$ dan $3$',
          principle:
            'Perubahan energi mekanik sama dengan usaha gaya non-konservatif (gaya gesek): $\\Delta E_m = E_{m,\\text{akhir}} - E_{m,\\text{awal}} = W_{\\text{gesek}} = -f_k \\Delta x$.',
          solution:
            'Diketahui $k = 40\\ \\text{N/m}$ dan simpangan awal $x_0 = 1\\ \\text{cm} = 0{,}01\\ \\text{m}$.\n- **Pernyataan 1 (Benar):** saat dilepas ($v_0 = 0$), energi mekanik awal sama dengan energi potensial pegas maksimum:\n$$E_{m,\\text{awal}} = E_{p,\\text{maks}} = \\frac{1}{2} k x_0^2 = \\frac{1}{2}(40)(0{,}01)^2 = 0{,}002\\ \\text{J}$$\nKetika benda berhenti tepat di titik seimbang ($x = 0$, $v = 0$), $E_{m,\\text{akhir}} = 0$, sehingga energi mekanik berkurang.\n- **Pernyataan 3 (Benar) dan 4 (Salah):** besar usaha gaya gesek sama dengan berkurangnya energi mekanik, yaitu $|W_{\\text{gesek}}| = E_{p,\\text{maks}} = 0{,}002\\ \\text{J}$ (bukan $0{,}001\\ \\text{J}$).\n- **Pernyataan 2 (Benar):** selama bergerak sejauh $x_0 = 0{,}01\\ \\text{m}$ menuju titik seimbang:\n$$f_k \\cdot x_0 = \\frac{1}{2} k x_0^2 \\implies f_k = \\frac{1}{2} k x_0 = \\frac{1}{2}(40)(0{,}01) = 0{,}2\\ \\text{N}.$$\n\nJadi pernyataan yang benar adalah **1, 2, dan 3**.',
          rubric: OK
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Perpindahan air dari tanah ke dalam akar melalui rambut akar dikarenakan adanya perbedaan konsentrasi air di tanah lebih tinggi dibandingkan di dalam sel.\n\nSEBAB\n\nPerpindahan air dari tanah ke dalam akar merupakan proses difusi.\n\nA. Keduanya pernyataan Benar dan berhubungan\nB. Keduanya pernyataan Benar dan tidak berhubungan\nC. Salah satu pernyataan Benar\nD. Kedua pernyataan Salah',
          answer: 'C. Salah satu pernyataan Benar',
          principle:
            'Osmosis adalah perpindahan molekul pelarut (air) melalui membran semipermeabel dari daerah dengan potensial/konsentrasi air lebih tinggi (hipotonis) ke daerah dengan potensial/konsentrasi air lebih rendah (hipertonis).',
          solution:
            '- **Pernyataan pertama Benar:** cairan sitoplasma dan vakuola sel rambut akar mengandung zat terlarut lebih pekat daripada air tanah, sehingga konsentrasi (potensial) air di tanah lebih tinggi daripada di dalam sel rambut akar, mendorong air masuk ke dalam akar.\n- **Pernyataan kedua Salah:** perpindahan air menembus membran semipermeabel sel akar disebut proses **osmosis**, bukan difusi biasa.\n\nKarena satu pernyataan benar dan satu salah, jawaban yang tepat adalah **C**.',
          rubric: OK
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Spesies adalah kumpulan individu yang dapat saling kawin dan menghasilkan keturunan yang fertil.\n\nSEBAB\n\nKumpulan individu yang spesiesnya berbeda dalam suatu habitat dan waktu yang tertentu disebut populasi.\n\nA. Keduanya pernyataan Benar dan berhubungan\nB. Keduanya pernyataan Benar dan tidak berhubungan\nC. Salah satu pernyataan Benar\nD. Kedua pernyataan Salah',
          answer: 'C. Salah satu pernyataan Benar',
          principle:
            'Menurut konsep spesies biologis, suatu spesies terdiri atas individu-individu yang mampu kawin silang secara alami dan menghasilkan keturunan fertil. Kumpulan individu sejenis (satu spesies) pada habitat dan waktu tertentu disebut populasi, sedangkan kumpulan berbagai populasi berbeda spesies disebut komunitas.',
          solution:
            '- **Pernyataan pertama Benar:** definisi klasik spesies secara biologis adalah kelompok individu yang dapat saling berkawin (*interbreeding*) dan menghasilkan keturunan yang subur (fertil).\n- **Pernyataan kedua Salah:** kumpulan individu dari spesies yang **berbeda** dalam suatu habitat dan waktu tertentu disebut **komunitas**, sedangkan **populasi** adalah kumpulan individu dari spesies yang **sama**.\n\nKarena satu pernyataan benar dan satu salah, jawabannya adalah **C**.',
          rubric: OK
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Sel otot jantung merupakan satu-satunya tipe sel yang terdapat pada jantung.\n\nSEBAB\n\nOrgan merupakan kumpulan dari sel sejenis yang berdiferensiasi untuk menjalankan fungsi tertentu.\n\nA. Keduanya pernyataan Benar dan berhubungan\nB. Keduanya pernyataan Benar dan tidak berhubungan\nC. Salah satu pernyataan Benar\nD. Kedua pernyataan Salah',
          answer: 'D. Kedua pernyataan Salah',
          principle:
            'Tingkat organisasi kehidupan: kumpulan sel sejenis dengan bentuk dan fungsi sama membentuk jaringan, sedangkan kumpulan beberapa jaringan berbeda yang bekerja sama menjalankan fungsi tertentu membentuk organ.',
          solution:
            '- **Pernyataan pertama Salah:** jantung adalah organ sehingga tidak hanya tersusun atas sel otot jantung, melainkan juga mengandung jaringan ikat (fibroblas, katup), jaringan epitel/endotel pada pembuluh darah koroner dan endokardium, serta serabut saraf otonom.\n- **Pernyataan kedua Salah:** kumpulan sel sejenis yang berdiferensiasi menjalankan fungsi tertentu adalah definisi **jaringan**, bukan organ.\n\nKarena kedua pernyataan salah, jawabannya adalah **D**.',
          rubric: OK
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Setelah biji mengalami imbibisi, embrio akan mengeluarkan hormon giberelin yang memberi sinyal pada aleuron untuk menyintesis enzim amilase.\n\nSEBAB\n\nGiberelin akan menghidrolisis pati menjadi glukosa yang dibutuhkan dalam proses perkecambahan.\n\nA. Keduanya pernyataan Benar dan berhubungan\nB. Keduanya pernyataan Benar dan tidak berhubungan\nC. Salah satu pernyataan Benar\nD. Kedua pernyataan Salah',
          answer: 'C. Salah satu pernyataan Benar',
          principle:
            'Dalam perkecambahan biji, giberelin berperan sebagai hormon sinyal transkripsi gen amilase pada lapisan aleuron, sedangkan reaksi hidrolisis pati menjadi gula sederhana dikatalisis oleh enzim $\\alpha$-amilase.',
          solution:
            '- **Pernyataan pertama Benar:** masuknya air ke dalam biji (imbibisi) mengaktifkan embrio untuk mensekresikan hormon giberelin menuju lapisan aleuron endosperma guna merangsang sintesis dan sekresi enzim hidrolitik seperti amilase.\n- **Pernyataan kedua Salah:** yang secara langsung menghidrolisis pati (amilum) menjadi maltosa/glukosa adalah **enzim amilase**, bukan hormon giberelinnya secara langsung.\n\nKarena satu pernyataan benar dan satu salah, jawabannya adalah **C**.',
          rubric: OK
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Pemberian hormon estrogen dan progesteron bagi seorang wanita dapat mencegah ovulasi terjadi.\n\nSEBAB\n\nPenggunaan estrogen dan progesteron bertujuan untuk menghambat produksi FSH dan LH oleh kelenjar hipofisis.\n\nA. Keduanya pernyataan Benar dan berhubungan\nB. Keduanya pernyataan Benar dan tidak berhubungan\nC. Salah satu pernyataan Benar\nD. Kedua pernyataan Salah',
          answer: 'A. Keduanya pernyataan Benar dan berhubungan',
          principle:
            'Mekanisme umpan balik negatif (*negative feedback*) pada poros hipotalamus–hipofisis–ovarium: kadar estrogen dan progesteron yang dipertahankan stabil menekan sekresi GnRH, FSH, dan LH sehingga pematangan folikel dan lonjakan LH (pemicu ovulasi) terhambat.',
          solution:
            '- **Pernyataan pertama Benar:** kombinasi hormon estrogen dan progesteron (seperti pada pil kontrasepsi oral) efektif mencegah terjadinya ovulasi.\n- **Pernyataan kedua Benar:** kadar estrogen dan progesteron eksogen memberikan umpan balik negatif ke hipotalamus dan kelenjar hipofisis anterior sehingga menekan produksi FSH (pematangan folikel terhambat) serta mencegah lonjakan LH (ovulasi tidak terjadi).\n- **Hubungan sebab-akibat:** pernyataan kedua menjelaskan secara langsung mekanisme fisiologis mengapa pernyataan pertama terjadi.\n\nOleh karena itu, keduanya benar dan berhubungan (**A**).',
          rubric: OK
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'Energi kinetik merupakan besaran turunan dari besaran-besaran pokok berupa massa dan kecepatan.\n\nSEBAB\n\nBesarnya energi kinetik suatu benda dipengaruhi oleh massa dan kecepatan gerak benda tersebut.\n\nA. Keduanya pernyataan Benar dan berhubungan\nB. Keduanya pernyataan Benar dan tidak berhubungan\nC. Salah satu pernyataan Benar\nD. Kedua pernyataan Salah',
          answer: 'C. Salah satu pernyataan Benar',
          principle:
            'Energi kinetik dirumuskan $E_k = \\frac{1}{2}mv^2$ dengan dimensi $[\\text{M}][\\text{L}]^2[\\text{T}]^{-2}$; besaran pokok penyusunnya adalah massa, panjang, dan waktu (bukan kecepatan, karena kecepatan sendiri adalah besaran turunan).',
          solution:
            '- **Pernyataan pertama Salah:** kecepatan bukan termasuk tujuh besaran pokok SI, melainkan besaran turunan dari panjang dan waktu. Jadi energi kinetik diturunkan dari besaran pokok **massa, panjang, dan waktu**.\n- **Pernyataan kedua Benar:** sesuai persamaan $E_k = \\frac{1}{2}mv^2$, besar energi kinetik bergantung pada massa ($m$) dan kelajuan/kecepatan ($v$) benda.\n\nKarena satu pernyataan benar dan satu salah, jawabannya adalah **C**.',
          rubric: OK
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'Pada rangkaian resonansi arus bolak-balik, nilai impedansi ($Z$) rangkaian sama dengan nilai hambatan murninya ($R$).\n\nSEBAB\n\nPada keadaan resonansi, nilai reaktansi induktif ($X_L$) sama besarnya dengan nilai reaktansi kapasitif ($X_C$).\n\nA. Keduanya pernyataan Benar dan berhubungan\nB. Keduanya pernyataan Benar dan tidak berhubungan\nC. Salah satu pernyataan Benar\nD. Kedua pernyataan Salah',
          answer: 'A. Keduanya pernyataan Benar dan berhubungan',
          principle:
            'Impedansi rangkaian seri $RLC$ arus bolak-balik adalah $Z = \\sqrt{R^2 + (X_L - X_C)^2}$. Pada kondisi resonansi, $X_L = X_C$ sehingga $Z = R$ (minimum) dan arus mencapai nilai maksimum.',
          solution:
            '- **Pernyataan pertama Benar:** saat terjadi resonansi pada rangkaian seri $RLC$, impedansi mencapai nilai minimum yaitu $Z = R$.\n- **Pernyataan kedua Benar:** syarat terjadinya resonansi adalah reaktansi induktif sama dengan reaktansi kapasitif ($X_L = X_C$).\n- **Hubungan sebab-akibat:** karena $X_L = X_C$, suku $(X_L - X_C)^2$ dalam $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ menjadi nol sehingga $Z = \\sqrt{R^2} = R$.\n\nJadi kedua pernyataan benar dan saling berhubungan (**A**).',
          rubric: OK
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Syarat terdengarnya bunyi oleh manusia dengan pendengaran normal salah satunya adalah frekuensi sumber bernilai antara $20\\ \\text{Hz} - 20\\ \\text{kHz}$.\n\nSEBAB\n\nSemakin tinggi frekuensi sumber maka intensitas bunyi semakin besar.\n\nA. Keduanya pernyataan Benar dan berhubungan\nB. Keduanya pernyataan Benar dan tidak berhubungan\nC. Salah satu pernyataan Benar\nD. Kedua pernyataan Salah',
          answer: 'C. Salah satu pernyataan Benar',
          principle:
            'Rentang pendengaran manusia normal (audiosonik) adalah $20\\ \\text{Hz}$ hingga $20\\ \\text{kHz}$. Frekuensi menentukan tinggi-rendah nada (*pitch*), sedangkan intensitas/kuat bunyi ditentukan terutama oleh daya sumber (amplitudo) dan jarak ($I = \\frac{P}{4\\pi r^2}$).',
          solution:
            '- **Pernyataan pertama Benar:** bunyi dapat didengar telinga manusia normal apabila berada dalam rentang frekuensi audiosonik ($20\\ \\text{Hz}$ sampai $20{.}000\\ \\text{Hz}$), di samping adanya sumber bunyi dan medium perambat.\n- **Pernyataan kedua Salah:** intensitas bunyi tidak selalu membesar hanya karena frekuensinya bertambah tinggi; pada daya pancar tetap, intensitas bergantung pada daya per satuan luas ($I = \\frac{P}{A}$) dan sangat dipengaruhi oleh amplitudo serta jarak dari sumber, sedangkan frekuensi menentukan tinggi-rendah nada.\n\nKarena satu pernyataan benar dan satu salah, jawabannya adalah **C**.',
          rubric: OK
        },
        {
          label: '34',
          marks: 1,
          prompt:
            'Bayangan akhir yang dihasilkan sebuah teropong bintang bersifat sama tegak dengan benda.\n\nSEBAB\n\nBayangan akhir yang dihasilkan sebuah teropong bintang bersifat maya.\n\nA. Keduanya pernyataan Benar dan berhubungan\nB. Keduanya pernyataan Benar dan tidak berhubungan\nC. Salah satu pernyataan Benar\nD. Kedua pernyataan Salah',
          answer: 'C. Salah satu pernyataan Benar',
          principle:
            'Teropong bintang (teropong bias astronomi) menggunakan dua lensa cembung (objektif dan okuler) tanpa lensa pembalik: objektif membentuk bayangan nyata terbalik, lalu okuler berfungsi sebagai lup membentuk bayangan akhir maya, terbalik terhadap benda asli, dan diperbesar.',
          solution:
            '- **Pernyataan pertama Salah:** bayangan oleh lensa objektif bersifat nyata dan **terbalik**; karena lensa okuler bekerja seperti lup (membentuk bayangan searah dengan bayangan objektif), bayangan akhir tetap **terbalik** terhadap benda aslinya (bukan sama tegak).\n- **Pernyataan kedua Benar:** bayangan akhir yang dibentuk oleh lensa okuler untuk diamati mata bersifat **maya**, terbalik, dan diperbesar.\n\nKarena satu pernyataan benar dan satu salah, jawabannya adalah **C**.',
          rubric: OK
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'Sebuah bandul sederhana berayun di dalam air. Amplitudo simpangan bandul makin lama makin kecil dan pada akhirnya bandul berhenti.\n\nSEBAB\n\nSelama berayun jumlah energi potensial dan energi kinetik bandul berkurang.\n\nA. Keduanya pernyataan Benar dan berhubungan\nB. Keduanya pernyataan Benar dan tidak berhubungan\nC. Salah satu pernyataan Benar\nD. Kedua pernyataan Salah',
          answer: 'A. Keduanya pernyataan Benar dan berhubungan',
          principle:
            'Osilasi teredam: gaya hambat fluida (air) melakukan usaha negatif terhadap bandul sehingga energi mekanik total ($E_m = E_p + E_k$) terus berkurang menjadi energi termal dan simpangan maksimum (amplitudo) mengecil hingga berhenti.',
          solution:
            '- **Pernyataan pertama Benar:** saat bandul berayun dalam air, gaya gesek/hambat fluida meredam gerak ayunan sehingga amplitudo berkurang terus-menerus sampai bandul diam.\n- **Pernyataan kedua Benar:** jumlah energi potensial dan energi kinetik (energi mekanik total $E_m = E_p + E_k$) berkurang selama berayun karena sebagian energi diubah menjadi panas oleh gaya hambat air.\n- **Hubungan sebab-akibat:** pada titik balik simpangan maksimum ($v = 0$), energi mekanik bandul sebanding dengan energi potensial maksimum (bergantung pada ketinggian/amplitudo simpangan). Berkurangnya $E_p + E_k$ secara langsung menyebabkan amplitudo simpangan makin lama makin kecil hingga berhenti.\n\nJadi keduanya benar dan saling berhubungan (**A**).',
          rubric: OK
        }
      ]
    }
  ]
};
