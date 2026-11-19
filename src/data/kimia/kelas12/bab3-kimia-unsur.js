import { bab, soal } from '../author.js';

export default bab({
  grade: 12,
  number: 3,
  slug: 'kimia-unsur',
  title: 'Kimia Unsur Golongan Utama dan Transisi',
  element: 'Pemahaman Kimia: sifat dan kegunaan gas mulia, halogen, alkali, alkali tanah, periode ketiga, dan logam transisi periode keempat',
  summary: {
    overview: 'Kelimpahan dan sifat unsur-unsur kimia di alam menunjukkan keteraturan periodik yang dapat dijelaskan dari konfigurasi elektronnya. Bab ini membahas karakteristik fisis, kecenderungan kereaktifan, reaksi khas, serta kegunaan unsur golongan utama—gas mulia (VIIIA), halogen (VIIA), alkali (IA), dan alkali tanah (IIA)—perubahan sifat unsur periode ketiga dari logam menuju nonlogam dan gas mulia, keistimewaan logam transisi periode keempat beserta senyawa kompleksnya, serta proses pengolahan unsur penting di industri.',
    coreConcepts: [
      'Gas Mulia dan Kestabilan Konfigurasi: Unsur golongan VIIIA ($\\text{He}, \\text{Ne}, \\text{Ar}, \\text{Kr}, \\text{Xe}, \\text{Rn}$) memiliki kulit valensi penuh ($1s^2$ untuk $\\text{He}$ dan $ns^2 np^6$ untuk lainnya) sehingga energi ionisasinya sangat tinggi dan sangat stabil. Senyawa gas mulia paling mudah disintesis pada $\\text{Xe}$ dan $\\text{Kr}$, yaitu dengan unsur sangat elektronegatif seperti $\\text{F}$ dan $\\text{O}$ (misalnya $\\text{XeF}_2$ dan $\\text{XeF}_4$).',
      'Halogen dan Reaksi Pendesakan: Unsur golongan VIIA ($\\text{F}_2, \\text{Cl}_2, \\text{Br}_2, \\text{I}_2$) berbentuk molekul diatomik dengan titik didih meningkat dari atas ke bawah akibat bertambahnya gaya London. Daya oksidator menurun dari $\\text{F}_2 > \\text{Cl}_2 > \\text{Br}_2 > \\text{I}_2$ sehingga halogen di atas dapat mendesak ion halida di bawahnya; sebaliknya, daya reduktor halida meningkat dari $\\text{F}^- < \\text{Cl}^- < \\text{Br}^- < \\text{I}^-$.',
      'Logam Alkali dan Alkali Tanah: Logam golongan IA dan IIA merupakan reduktor kuat yang makin reaktif dari atas ke bawah seiring membesarnya jari-jari atom. Logam alkali bereaksi hebat dengan air menghasilkan basa kuat dan gas $\\text{H}_2$. Pada golongan IIA, kelarutan basa $\\text{M(OH)}_2$ meningkat ke bawah sedangkan kelarutan garam sulfat $\\text{MSO}_4$ menurun ke bawah; ion $\\text{Ca}^{2+}$ dan $\\text{Mg}^{2+}$ menyebabkan kesadahan air.',
      'Keteraturan Unsur Periode Ketiga: Dari $\\text{Na}$ ke $\\text{Ar}$, jari-jari atom mengecil, keelektronegatifan meningkat, dan energi ionisasi cenderung naik (dengan anomali $\\text{Mg} > \\text{Al}$ dan $\\text{P} > \\text{S}$ karena kestabilan subkulit penuh $3s^2$ dan setengah penuh $3p^3$). Sifat oksida dan hidroksidanya bergeser dari basa kuat ($\\text{NaOH}$), amfoter ($\\text{Al(OH)}_3$), asam lemah ($\\text{H}_2\\text{SiO}_3$), hingga asam kuat ($\\text{H}_2\\text{SO}_4, \\text{HClO}_4$).',
      'Logam Transisi Periode Keempat dan Ion Kompleks: Unsur dari $\\text{Sc}$ hingga $\\text{Zn}$ mengisi subkulit $3d$, sehingga umumnya memiliki bilangan oksidasi bervariasi, membentuk senyawa berwarna dan ion kompleks (karena adanya orbital $d$ kosong yang menerima pasangan elektron bebas dari ligan), bersifat paramagnetik bila memiliki elektron tak berpasangan, serta efektif sebagai katalis.'
    ],
    keyFormulas: [
      { label: 'Reaksi Alkali dengan Air', formula: '2\\text{M}(s) + 2\\text{H}_2\\text{O}(l) \\longrightarrow 2\\text{MOH}(aq) + \\text{H}_2(g)' },
      { label: 'Pendesakan Halogen', formula: '\\text{X}_2 + 2\\text{Y}^- \\longrightarrow 2\\text{X}^- + \\text{Y}_2 \\quad (E^\\circ_{\\text{X}_2} > E^\\circ_{\\text{Y}_2})' },
      { label: 'Sifat Amfoter Al(OH)3', formula: '\\text{Al(OH)}_3(s) + \\text{OH}^-(aq) \\longrightarrow [\\text{Al(OH)}_4]^-(aq)' },
      { label: 'Kesadahan Sementara (Pemanasan)', formula: '\\text{Ca(HCO}_3)_2(aq) \\xrightarrow{\\Delta} \\text{CaCO}_3(s) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)' }
    ],
    workedExamples: [
      {
        title: 'Memprediksi keterjadian reaksi pendesakan antarhalogen',
        problem: 'Tentukan apakah reaksi antara gas $\\text{Cl}_2$ dengan larutan $\\text{NaBr}$ dan antara padatan $\\text{I}_2$ dengan larutan $\\text{NaCl}$ dapat berlangsung secara spontan.',
        solution: 'Urutan daya oksidator halogen adalah $\\text{F}_2 > \\text{Cl}_2 > \\text{Br}_2 > \\text{I}_2$. Karena $\\text{Cl}_2$ lebih kuat mengoksidasi daripada $\\text{Br}_2$, reaksi $\\text{Cl}_2(g) + 2\\text{NaBr}(aq) \\longrightarrow 2\\text{NaCl}(aq) + \\text{Br}_2(l)$ **berlangsung spontan**. Sebaliknya, $\\text{I}_2$ lebih lemah daripada $\\text{Cl}_2$, sehingga $\\text{I}_2$ **tidak dapat** mendesak ion $\\text{Cl}^-$ dalam $\\text{NaCl}$.'
      },
      {
        title: 'Menentukan sifat magnetik dan warna ion transisi dari konfigurasi elektron',
        problem: 'Diketahui nomor atom $\\text{Ti} = 22$, $\\text{Mn} = 25$, dan $\\text{Zn} = 30$. Tentukan jumlah elektron tak berpasangan serta sifat kemagnetan ion $\\text{Mn}^{2+}$ dan $\\text{Zn}^{2+}$.',
        solution: 'Atom $\\text{Mn}$ ($Z=25$) memiliki konfigurasi $[\\text{Ar}]\\,3d^5 4s^2$. Saat melepas $2$ elektron terluar (dari $4s^2$), diperoleh $\\text{Mn}^{2+}: [\\text{Ar}]\\,3d^5$ yang memiliki **$5$ elektron tak berpasangan** sehingga bersifat **paramagnetik kuat** dan berwarna. Sementara itu, $\\text{Zn}$ ($Z=30$) $[\\text{Ar}]\\,3d^{10} 4s^2$ membentuk $\\text{Zn}^{2+}: [\\text{Ar}]\\,3d^{10}$ dengan **$0$ elektron tak berpasangan** sehingga bersifat **diamagnetik** dan tidak berwarna.'
      },
      {
        title: 'Menentukan bilangan oksidasi, bilangan koordinasi, dan nama ion kompleks',
        problem: 'Tentukan bilangan koordinasi, bilangan oksidasi atom pusat, dan nama IUPAC untuk ion kompleks $[\\text{Cu(NH}_3)_4]^{2+}$.',
        solution: 'Terdapat $4$ ligan $\\text{NH}_3$ (masing-masing monodentat), sehingga **bilangan koordinasi $= 4$**. Karena $\\text{NH}_3$ netral (muatan $0$), biloks $\\text{Cu} = \\mathbf{+2}$. Nama ligan $\\text{NH}_3$ adalah amina ($4 =$ tetraamina) dan ion kompleks bermuatan positif memakai nama biasa logamnya, sehingga namanya **ion tetraaminatembaga(II)**.'
      }
    ],
    misconceptions: [
      'Mengira elektron pada unsur transisi dilepas dari subkulit $3d$ terlebih dahulu saat membentuk kation. Seharusnya elektron pada kulit terluar ($4s$) selalu dilepas lebih dahulu sebelum elektron $3d$.',
      'Menyamakan kekuatan asam halida ($\\text{HF} > \\text{HCl} > \\text{HBr} > \\text{HI}$) dengan keelektronegatifan halogen. Faktanya, $\\text{HF}$ adalah asam lemah karena ikatan $\\text{H}-\\text{F}$ sangat kuat dan adanya ikatan hidrogen, sehingga urutan kekuatan asam halida adalah $\\text{HI} > \\text{HBr} > \\text{HCl} \\gg \\text{HF}$.',
      'Mengira titik leleh unsur periode ketiga meningkat terus dari kiri ke kanan, padahal titik leleh mencapai puncak pada silikon ($\\text{Si}$, kristal kovalen raksasa) lalu turun drastis pada fosfor ($\\text{P}_4$), belerang ($\\text{S}_8$), klorin ($\\text{Cl}_2$), dan argon ($\\text{Ar}$).',
      'Menyangka semua senyawa oksida/hidroksida logam bersifat basa; aluminium oksida ($\\text{Al}_2\\text{O}_3$) dan aluminium hidroksida ($\\text{Al(OH)}_3$) bersifat amfoter sehingga dapat larut baik dalam asam kuat maupun basa kuat.'
    ],
    tutorTip: 'Ingat pola terbalik pada golongan alkali tanah (IIA): dari $\\text{Be}$ ke $\\text{Ba}$, kelarutan basa ($\\text{OH}^-$) semakin **besar**, sedangkan kelarutan garam sulfat ($\\text{SO}_4^{2-}$) dan kromat ($\\text{CrO}_4^{2-}$) semakin **kecil**.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Unsur-unsur gas mulia (golongan VIIIA) sangat sukar bereaksi dengan unsur lain pada suhu ruang karena...',
      options: [
        'konfigurasi elektron valensinya sudah penuh (duplet/oktet) dan energi ionisasinya sangat tinggi',
        'jari-jari atomnya paling besar dibandingkan unsur lain dalam satu periode',
        'keelektronegatifannya paling besar di antara semua unsur nonlogam',
        'seluruh unsur gas mulia berwujud padat dengan ikatan logam yang kuat'
      ],
      answer: 'A',
      hint: 'Tinjau susunan elektron terluar $\\text{He}$ ($1s^2$) serta $\\text{Ne}$ hingga $\\text{Rn}$ ($ns^2 np^6$).',
      solution: 'Gas mulia memiliki konfigurasi elektron kulit terluar yang penuh ($1s^2$ pada $\\text{He}$ dan $ns^2 np^6$ pada anggota lainnya) serta energi ionisasi sangat tinggi, sehingga sangat stabil dan sukar melepas maupun menerima elektron. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pasangan unsur alkali atau alkali tanah beserta warna nyala khasnya pada uji nyala api yang benar adalah...',
      options: [
        'kalium — hijau',
        'barium — ungu',
        'kalsium — biru tua',
        'natrium — kuning keemasan'
      ],
      answer: 'D',
      hint: 'Ingat warna nyala lampu penerangan jalan berbasis uap natrium.',
      solution: 'Natrium memberikan warna nyala **kuning keemasan** yang sangat khas. Kalium berwarna ungu (lilac), kalsium jingga-merah bata, dan barium hijau kekuningan. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Pada suhu kamar ($25^\\circ\\text{C}$) dan tekanan $1\\text{ atm}$, unsur halogen yang berwujud cair berwarna cokelat kemerahan adalah...',
      options: [
        'fluorin ($\\text{F}_2$)',
        'bromin ($\\text{Br}_2$)',
        'klorin ($\\text{Cl}_2$)',
        'iodin ($\\text{I}_2$)'
      ],
      answer: 'B',
      hint: 'Dari atas ke bawah ($\\text{F}_2$ ke $\\text{I}_2$), titik didih halogen meningkat sehingga wujudnya berubah dari gas $\\to$ cair $\\to$ padat.',
      solution: 'Pada suhu ruang, $\\text{F}_2$ dan $\\text{Cl}_2$ berwujud gas, **bromin ($\\text{Br}_2$)** berwujud cair cokelat kemerahan, dan $\\text{I}_2$ berwujud padat ungu kehitaman. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Di antara hidroksida unsur periode ketiga berikut, senyawa yang bersifat amfoter (dapat bereaksi dengan asam kuat maupun basa kuat) adalah...',
      options: [
        '$\\text{NaOH}$',
        '$\\text{Mg(OH)}_2$',
        '$\\text{Al(OH)}_3$',
        '$\\text{H}_2\\text{SO}_4$'
      ],
      answer: 'C',
      hint: 'Unsur logam periode ketiga yang berada di perbatasan sifat logam dan metaloid membentuk hidroksida amfoter.',
      solution: '$\\text{NaOH}$ dan $\\text{Mg(OH)}_2$ bersifat basa, $\\text{H}_2\\text{SO}_4$ bersifat asam kuat, sedangkan **$\\text{Al(OH)}_3$** bersifat amfoter karena mampu larut dalam asam membentuk $\\text{Al}^{3+}$ maupun dalam basa kuat membentuk $[\\text{Al(OH)}_4]^-$. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Sifat berikut yang merupakan ciri khas unsur-unsur logam transisi periode keempat (kecuali $\\text{Zn}$) adalah...',
      options: [
        'memiliki bilangan oksidasi lebih dari satu macam dan senyawanya umumnya berwarna',
        'semua anggotanya merupakan nonlogam dengan titik didih di bawah $100^\\circ\\text{C}$',
        'elektron valensinya hanya mengisi subkulit $4s$ dan $4p$ tanpa melibatkan orbital $d$',
        'tidak dapat berperan sebagai katalis dalam reaksi kimia industri'
      ],
      answer: 'A',
      hint: 'Perhatikan peran orbital $3d$ yang terisi sebagian pada unsur transisi periode keempat.',
      solution: 'Karena selisih energi subkulit $3d$ dan $4s$ kecil serta orbital $3d$ terisi sebagian, logam transisi periode keempat memiliki bilangan oksidasi bervariasi, membentuk ion berwarna, dapat membentuk ion kompleks, dan banyak dipakai sebagai katalis. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Berdasarkan kecenderungan daya oksidator halogen ($\\text{F}_2 > \\text{Cl}_2 > \\text{Br}_2 > \\text{I}_2$), reaksi pendesakan antarhalogen berikut yang dapat berlangsung spontan adalah...',
      options: [
        '$\\text{I}_2(s) + 2\\text{KBr}(aq) \\longrightarrow 2\\text{KI}(aq) + \\text{Br}_2(l)$',
        '$\\text{Cl}_2(g) + 2\\text{KBr}(aq) \\longrightarrow 2\\text{KCl}(aq) + \\text{Br}_2(l)$',
        '$\\text{Br}_2(l) + 2\\text{NaCl}(aq) \\longrightarrow 2\\text{NaBr}(aq) + \\text{Cl}_2(g)$',
        '$\\text{Cl}_2(g) + 2\\text{NaF}(aq) \\longrightarrow 2\\text{NaCl}(aq) + \\text{F}_2(g)$'
      ],
      answer: 'B',
      hint: 'Halogen bebas yang terletak lebih atas dalam golongan VIIA dapat mengoksidasi (mendesak) ion halida di bawahnya.',
      solution: 'Klorin ($\\text{Cl}_2$) merupakan oksidator lebih kuat daripada bromin ($\\text{Br}_2$), sehingga $\\text{Cl}_2$ mampu mengoksidasi ion $\\text{Br}^-$ menjadi $\\text{Br}_2$. Tiga reaksi lainnya berlawanan arah dengan kekuatan oksidator halogen. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Air sadah sementara menyebabkan kerak pada ketel pemanas karena mengandung ion bikarbonat terlarut. Pasangan garam penyebab kesadahan sementara beserta cara menghilangkannya yang paling sederhana adalah...',
      options: [
        '$\\text{CaSO}_4$ dan $\\text{MgCl}_2$, dihilangkan dengan pemanasan hingga mendidih',
        '$\\text{NaCl}$ dan $\\text{K}_2\\text{SO}_4$, dihilangkan dengan penambahan tawas',
        '$\\text{CaCl}_2$ dan $\\text{MgSO}_4$, dihilangkan dengan penyaringan biasa',
        '$\\text{Ca(HCO}_3)_2$ dan $\\text{Mg(HCO}_3)_2$, dihilangkan dengan pemanasan'
      ],
      answer: 'D',
      hint: 'Kesadahan sementara mengandung anion hidrogen karbonat ($\\text{HCO}_3^-$) yang terurai saat dipanaskan menjadi endapan karbonat.',
      solution: 'Kesadahan sementara disebabkan oleh $\\text{Ca(HCO}_3)_2$ dan $\\text{Mg(HCO}_3)_2$, yang saat dipanaskan terurai menjadi endapan $\\text{CaCO}_3$ atau $\\text{MgCO}_3$, air, dan gas $\\text{CO}_2$. Garam klorida dan sulfat menyebabkan kesadahan tetap. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pada periode ketiga, energi ionisasi pertama magnesium ($Z = 12$) lebih besar daripada aluminium ($Z = 13$), sedangkan energi ionisasi pertama fosfor ($Z = 15$) lebih besar daripada belerang ($Z = 16$). Penjelasan yang tepat untuk anomali tersebut adalah...',
      options: [
        'jari-jari atom $\\text{Al}$ dan $\\text{S}$ jauh lebih besar daripada $\\text{Mg}$ dan $\\text{P}$',
        'muatan inti efektif $\\text{Mg}$ dan $\\text{P}$ lebih tinggi daripada $\\text{Al}$ dan $\\text{S}$',
        '$\\text{Mg}$ memiliki subkulit $3s^2$ yang terisi penuh dan $\\text{P}$ memiliki subkulit $3p^3$ setengah penuh yang lebih stabil',
        '$\\text{Al}$ dan $\\text{S}$ merupakan unsur gas mulia semu sehingga mudah melepaskan elektron'
      ],
      answer: 'C',
      hint: 'Bandingkan konfigurasi elektron valensi $\\text{Mg}$ vs $\\text{Al}$ dan $\\text{P}$ vs $\\text{S}$.',
      solution: 'Konfigurasi valensi $\\text{Mg}$ ($3s^2$, penuh) lebih stabil daripada $\\text{Al}$ ($3s^2 3p^1$), sehingga elektron $3p^1$ pada $\\text{Al}$ lebih mudah dilepas. Demikian pula $\\text{P}$ ($3p^3$, setengah penuh simetris) lebih stabil daripada $\\text{S}$ ($3p^4$) yang mengalami gaya tolak antar-elektron berpasangan di satu orbital $3p$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Diketahui nomor atom $\\text{Fe} = 26$, $\\text{Cu} = 29$, $\\text{Zn} = 30$, dan $\\text{Sc} = 21$. Ion logam transisi berikut yang memiliki jumlah elektron tak berpasangan terbanyak sehingga sifat paramagnetiknya paling kuat adalah...',
      options: [
        '$\\text{Fe}^{3+}$',
        '$\\text{Cu}^{2+}$',
        '$\\text{Zn}^{2+}$',
        '$\\text{Sc}^{3+}$'
      ],
      answer: 'A',
      hint: 'Tuliskan konfigurasi elektron ion dengan melepas elektron $4s$ terlebih dahulu sebelum $3d$, lalu hitung elektron tunggal di lima orbital $3d$.',
      solution: 'Konfigurasi ion: $\\text{Fe}^{3+} = [\\text{Ar}]\\,3d^5$ ($5$ elektron tak berpasangan); $\\text{Cu}^{2+} = [\\text{Ar}]\\,3d^9$ ($1$ elektron tak berpasangan); $\\text{Zn}^{2+} = [\\text{Ar}]\\,3d^{10}$ ($0$); $\\text{Sc}^{3+} = [\\text{Ar}]\\,3d^0$ ($0$). Jadi $\\text{Fe}^{3+}$ paling kuat sifat paramagnetiknya. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pasangan produk industri, bahan baku mineral/utama, dan nama proses pengolahannya yang seluruhnya benar adalah...',
      options: [
        'asam sulfat — garam batu — Proses Haber-Bosch',
        'besi kasar — bauksit — Proses Kontak',
        'amonia — bijih hematit — Proses Frasch',
        'logam aluminium — bauksit ($\\text{Al}_2\\text{O}_3$) — Proses Hall-Héroult'
      ],
      answer: 'D',
      hint: 'Cocokkan masing-masing proses industri: Hall-Héroult, Tanur Tiup, Haber-Bosch, dan Kontak.',
      solution: 'Logam aluminium diproduksi melalui elektrolisis lelehan $\\text{Al}_2\\text{O}_3$ (bauksit murni) dalam kriolit pada **Proses Hall-Héroult**. Proses Haber-Bosch membuat amonia, Proses Kontak membuat $\\text{H}_2\\text{SO}_4$, dan Tanur Tiup mengolah bijih besi hematit. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Perhatikan senyawa koordinasi $[\\text{Cr(NH}_3)_4\\text{Cl}_2]\\text{Cl}$. Pernyataan yang tepat mengenai bilangan oksidasi atom pusat $\\text{Cr}$, bilangan koordinasi, dan nama IUPAC senyawa tersebut adalah...',
      options: [
        'biloks $\\text{Cr} = +2$, bilangan koordinasi $= 4$, nama: tetraaminadiklorokromium(II) klorida',
        'biloks $\\text{Cr} = +3$, bilangan koordinasi $= 7$, nama: diklorotetraaminakromium(III) klorida',
        'biloks $\\text{Cr} = +3$, bilangan koordinasi $= 6$, nama: tetraaminadiklorokromium(III) klorida',
        'biloks $\\text{Cr} = +1$, bilangan koordinasi $= 6$, nama: tetraaminadiklorokromat(I) klorida'
      ],
      answer: 'C',
      hint: 'Hitung jumlah ligan di dalam kurung siku untuk bilangan koordinasi, muatan ion kompleks dari $1$ ion lawan $\\text{Cl}^-$, dan urutkan nama ligan secara alfabetis.',
      solution: 'Terdapat $4$ ligan $\\text{NH}_3$ dan $2$ ligan $\\text{Cl}^-$ di dalam bola koordinasi, sehingga bilangan koordinasinya $4 + 2 = 6$. Karena ion lawannya $1\\,\\text{Cl}^-$, muatan ion kompleks adalah $+1$: $x + 4(0) + 2(-1) = +1 \\implies x = +3$. Urutan abjad ligan menempatkan amina sebelum kloro pada kation kompleks, sehingga namanya **tetraaminadiklorokromium(III) klorida**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Ketika kristal $\\text{NaCl}$ direaksikan dengan $\\text{H}_2\\text{SO}_4$ pekat, dihasilkan gas $\\text{HCl}$ murni. Namun ketika kristal $\\text{NaI}$ direaksikan dengan $\\text{H}_2\\text{SO}_4$ pekat, gas $\\text{HI}$ hampir tidak diperoleh karena justru terbentuk padatan ungu $\\text{I}_2$ dan gas $\\text{H}_2\\text{S}$. Penyebab perbedaan hasil reaksi tersebut adalah...',
      options: [
        'ion $\\text{Cl}^-$ merupakan reduktor yang jauh lebih kuat daripada ion $\\text{I}^-$',
        'ion $\\text{I}^-$ adalah reduktor kuat sehingga mereduksi $\\text{H}_2\\text{SO}_4$ pekat dan teroksidasi menjadi $\\text{I}_2$',
        'asam $\\text{HI}$ bersifat lebih lemah daripada $\\text{HF}$ sehingga tidak menguap',
        '$\\text{H}_2\\text{SO}_4$ pekat hanya mampu mendesak ion halida yang berukuran kecil seperti $\\text{I}^-$'
      ],
      answer: 'B',
      hint: 'Bandingkan urutan daya reduktor ion halida ($\\text{F}^- < \\text{Cl}^- < \\text{Br}^- < \\text{I}^-$).',
      solution: 'Dari atas ke bawah, ukuran ion halida membesar dan elektron terluar makin mudah dilepaskan sehingga daya reduktor $\\text{I}^-$ paling kuat. Akibatnya, $\\text{HI}$ yang terbentuk langsung mengoksidasi diri menjadi $\\text{I}_2$ sambil mereduksi $\\text{H}_2\\text{SO}_4$ pekat menjadi $\\text{SO}_2$ atau $\\text{H}_2\\text{S}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Sebanyak $0{,}2\\text{ mol}$ $\\text{AlCl}_3$ dalam larutan ditetesi larutan $\\text{NaOH}$ sedikit demi sedikit. Mula-mula terbentuk endapan putih $\\text{Al(OH)}_3$, kemudian endapan tepat larut kembali membentuk ion $[\\text{Al(OH)}_4]^-$ saat $\\text{NaOH}$ berlebih. Jumlah mol total $\\text{NaOH}$ minimum yang dibutuhkan dari awal hingga seluruh endapan tepat larut kembali adalah...',
      options: [
        '$0{,}8\\text{ mol}$',
        '$0{,}6\\text{ mol}$',
        '$0{,}4\\text{ mol}$',
        '$0{,}2\\text{ mol}$'
      ],
      answer: 'A',
      hint: 'Jumlahkan kebutuhan $\\text{OH}^-$ pada tahap pengendapan ($3\\text{ mol}$) dan tahap pelarutan kembali ($1\\text{ mol}$) untuk setiap $1\\text{ mol } \\text{Al}^{3+}$.',
      solution: 'Tahap 1: $\\text{Al}^{3+} + 3\\text{OH}^- \\longrightarrow \\text{Al(OH)}_3(s)$ memerlukan $0{,}2 \\times 3 = 0{,}6\\text{ mol } \\text{NaOH}$. Tahap 2: $\\text{Al(OH)}_3(s) + \\text{OH}^- \\longrightarrow [\\text{Al(OH)}_4]^-$ memerlukan $0{,}2 \\times 1 = 0{,}2\\text{ mol } \\text{NaOH}$. Jadi total $\\text{NaOH}$ yang diperlukan adalah $0{,}6 + 0{,}2 = \\mathbf{0{,}8\\text{ mol}}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Suatu larutan berisi campuran ion $\\text{Mg}^{2+}$ $0{,}1\\text{ M}$ dan ion $\\text{Ba}^{2+}$ $0{,}1\\text{ M}$. Untuk memisahkan salah satu kation dalam bentuk endapan menggunakan pereaksi garam alkali tanah yang sesuai dengan tren kelarutannya, pereaksi dan endapan yang terbentuk adalah...',
      options: [
        'penambahan $\\text{Na}_2\\text{SO}_4$ encer akan mengendapkan $\\text{MgSO}_4$, sedangkan $\\text{Ba}^{2+}$ tetap larut',
        'penambahan $\\text{NaOH}$ encer akan mengendapkan $\\text{Ba(OH)}_2$, sedangkan $\\text{Mg}^{2+}$ tetap larut',
        'penambahan $\\text{Na}_2\\text{SO}_4$ encer akan mengendapkan $\\text{BaSO}_4$, sedangkan $\\text{Mg}^{2+}$ tetap larut',
        'penambahan $\\text{K}_2\\text{CrO}_4$ encer akan mengendapkan $\\text{MgCrO}_4$, sedangkan $\\text{Ba}^{2+}$ tetap larut'
      ],
      answer: 'C',
      hint: 'Ingat kelarutan garam sulfat ($\\text{MSO}_4$) dan kromat ($\\text{MCrO}_4$) golongan IIA makin kecil ke bawah, sedangkan basa $\\text{M(OH)}_2$ makin besar ke bawah.',
      solution: 'Kelarutan garam sulfat dan kromat alkali tanah menurun dari $\\text{Mg}$ ke $\\text{Ba}$, sehingga $\\text{MgSO}_4$ mudah larut sedangkan $\\text{BaSO}_4$ sangat sukar larut ($K_{sp} \\approx 10^{-10}$). Dengan demikian, penambahan $\\text{Na}_2\\text{SO}_4$ akan mengendapkan **$\\text{BaSO}_4$** dan membiarkan $\\text{Mg}^{2+}$ tetap dalam larutan. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Titik leleh unsur periode ketiga menunjukkan kenaikan tajam hingga silikon ($\\text{Si} = 1414^\\circ\\text{C}$), lalu turun drastis pada fosfor ($\\text{P}_4 = 44^\\circ\\text{C}$) sebelum naik kembali pada belerang ($\\text{S}_8 = 115^\\circ\\text{C}$) dan turun pada klorin ($\\text{Cl}_2 = -101^\\circ\\text{C}$). Penjelasan struktur dan ikatan yang tepat untuk pola tersebut adalah...',
      options: [
        '$\\text{Si}$ membentuk ikatan ionik paling kuat, sedangkan $\\text{P}_4$ dan $\\text{S}_8$ membentuk ikatan logam lemah',
        '$\\text{Si}$ membentuk jaringan kristal kovalen raksasa, sedangkan $\\text{P}_4$, $\\text{S}_8$, dan $\\text{Cl}_2$ berupa molekul diskret dengan gaya London sebanding ukuran molekul ($\\text{S}_8 > \\text{P}_4 > \\text{Cl}_2$)',
        '$\\text{S}_8$ memiliki titik leleh lebih tinggi daripada $\\text{P}_4$ karena belerang membentuk ikatan hidrogen antarmolekul',
        'penurunan titik leleh dari $\\text{Si}$ ke $\\text{Cl}_2$ disebabkan oleh melemahnya ikatan logam akibat berkurangnya elektron valensi'
      ],
      answer: 'B',
      hint: 'Bedakan antara padatan jaringan kovalen pada $\\text{Si}$ dengan molekul poliatomik diskret nonlogam setelahnya.',
      solution: 'Silikon membentuk struktur jaringan kovalen raksasa 3D sehingga membutuhkan energi sangat besar untuk meleleh. Sebaliknya, $\\text{P}_4$, $\\text{S}_8$, dan $\\text{Cl}_2$ merupakan molekul nonpolar diskret yang diikat oleh gaya dispersi London; karena massa molekul dan jumlah elektron $\\text{S}_8 > \\text{P}_4 > \\text{Cl}_2$, titik lelehnya mengikuti urutan $\\text{S}_8 > \\text{P}_4 > \\text{Cl}_2$. Jawaban: **B**.'
    })
  ]
});
