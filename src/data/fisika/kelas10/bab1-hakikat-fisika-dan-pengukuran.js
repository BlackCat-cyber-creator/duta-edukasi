import { bab, soal } from '../author.js';

export default bab({
  grade: 10,
  number: 1,
  slug: 'hakikat-fisika-dan-pengukuran',
  title: 'Hakikat Fisika, Besaran, dan Pengukuran',
  element: 'Keterampilan proses: sistem pengukuran dalam kerja ilmiah',
  summary: {
    overview: 'Fisika mempelajari gejala alam secara kuantitatif melalui pengamatan, eksperimen, dan pengukuran yang teliti. Bab ini membahas hakikat fisika dan metode ilmiah, besaran pokok beserta besaran turunan, analisis dimensi, aturan angka penting dan notasi ilmiah, pembacaan alat ukur presisi (jangka sorong dan mikrometer sekrup), serta analisis ketidakpastian pada pengukuran tunggal dan berulang.',
    coreConcepts: [
      'Hakikat Fisika dan Metode Ilmiah: Fisika dipandang sebagai produk (fakta, konsep, prinsip, hukum, teori), proses (metode ilmiah), dan sikap (objektif, jujur, teliti, terbuka). Metode ilmiah meliputi observasi, merumuskan masalah, menyusun hipotesis, merancang dan melakukan eksperimen (mengendalikan variabel bebas, terikat, dan kontrol), menganalisis data, serta menarik kesimpulan.',
      'Besaran Pokok, Besaran Turunan, dan Dimensi: Tujuh besaran pokok SI beserta dimensinya adalah panjang $[L]$, massa $[M]$, waktu $[T]$, suhu $[\\Theta]$, kuat arus listrik $[I]$, intensitas cahaya $[J]$, dan jumlah zat $[N]$. Dimensi besaran turunan diturunkan dari definisinya, misalnya gaya $[M][L][T]^{-2}$ dan usaha $[M][L]^2[T]^{-2}$. Analisis dimensi berguna memeriksa kebenaran suatu persamaan fisis dan menentukan kesetaraan dua besaran.',
      'Notasi Ilmiah dan Aturan Angka Penting: Notasi ilmiah menuliskan bilangan sebagai $a \\times 10^n$ dengan $1 \\le a < 10$ dan $n$ bilangan bulat. Semua angka bukan nol, angka nol di antara bukan nol, serta nol di kanan angka desimal setelah angka bukan nol adalah angka penting, sedangkan nol di kiri angka bukan nol bukan angka penting. Hasil penjumlahan/pengurangan mengikuti desimal paling sedikit, sedangkan perkalian/pembagian mengikuti jumlah angka penting paling sedikit.',
      'Alat Ukur Presisi dalam Kerja Ilmiah: Mistar memiliki ketelitian $1\\text{ mm}$ ($0{,}1\\text{ cm}$), jangka sorong memiliki ketelitian $0{,}1\\text{ mm}$ ($0{,}01\\text{ cm}$) untuk mengukur diameter luar, diameter dalam, dan kedalaman, sedangkan mikrometer sekrup memiliki ketelitian $0{,}01\\text{ mm}$ untuk benda tipis seperti tebal pelat atau diameter kawat. Hasil ukur = pembacaan skala utama + (skala nonius atau putar $\\times$ ketelitian alat).',
      'Ketidakpastian Pengukuran Tunggal dan Berulang: Setiap pengukuran mengandung kesalahan sistematis (kalibrasi, kesalahan nol, paralaks) dan kesalahan acak. Pada pengukuran tunggal, ketidakpastian mutlak bernilai setengah skala terkecil: $\\Delta x = \\frac{1}{2}\\text{ nst}$ dan dilaporkan sebagai $x = (x_0 \\pm \\Delta x)$. Pada pengukuran berulang $N$ kali, nilai terbaik adalah rata-rata $\\bar{x}$ dengan ketidakpastian simpangan baku rata-rata $\\Delta x = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{N(N-1)}}$. Tingkat ketelitian dinyatakan dengan ketidakpastian relatif $KR = \\frac{\\Delta x}{\\bar{x}} \\times 100\\%$.'
    ],
    keyFormulas: [
      { label: 'Dimensi besaran mekanika', formula: '[F] = [M][L][T]^{-2} \\qquad [W] = [M][L]^2[T]^{-2}' },
      { label: 'Notasi ilmiah', formula: 'a \\times 10^n \\quad (1 \\le a < 10,\\ n \\in \\mathbb{Z})' },
      { label: 'Ketidakpastian tunggal & relatif', formula: '\\Delta x = \\tfrac{1}{2}\\,\\text{nst} \\qquad KR = \\dfrac{\\Delta x}{x_0} \\times 100\\%' },
      { label: 'Ketidakpastian berulang', formula: '\\Delta x = \\dfrac{1}{N}\\sqrt{\\dfrac{N\\sum x_i^2 - (\\sum x_i)^2}{N - 1}}' }
    ],
    workedExamples: [
      {
        title: 'Menentukan dimensi konstanta pegas',
        problem: 'Hukum Hooke menyatakan $F = k\\,\\Delta x$, dengan $F$ gaya dan $\\Delta x$ pertambahan panjang. Tentukan dimensi konstanta pegas $k$.',
        solution: '$k = \\dfrac{F}{\\Delta x}$, sehingga $[k] = \\dfrac{[M][L][T]^{-2}}{[L]} = [M][T]^{-2}$ dengan satuan SI $\\text{kg/s}^2$ atau $\\text{N/m}$.'
      },
      {
        title: 'Operasi angka penting',
        problem: 'Sebuah pelat persegi panjang memiliki panjang $12{,}4\\text{ cm}$ dan lebar $2{,}1\\text{ cm}$. Tentukan luas pelat menurut aturan angka penting.',
        solution: '$12{,}4$ memiliki 3 AP dan $2{,}1$ memiliki 2 AP. Hasil perkaliannya $12{,}4 \\times 2{,}1 = 26{,}04\\text{ cm}^2$. Dibulatkan ke jumlah AP paling sedikit (2 AP) menjadi **$26\\text{ cm}^2$**.'
      },
      {
        title: 'Pembacaan mikrometer sekrup dan ketidakpastian',
        problem: 'Pada pengukuran tebal pelat dengan mikrometer sekrup (nst $0{,}01\\text{ mm}$), skala utama menunjukkan $2{,}5\\text{ mm}$ dan skala putar menunjuk garis ke-18. Tuliskan hasil pelaporan pengukuran tunggalnya.',
        solution: 'Hasil pembacaan $x_0 = 2{,}5 + 18 \\times 0{,}01 = 2{,}68\\text{ mm}$. Ketidakpastian tunggal $\\Delta x = \\frac{1}{2} \\times 0{,}01 = 0{,}005\\text{ mm}$. Pelaporan menjadi **$(2{,}680 \\pm 0{,}005)\\text{ mm}$**.'
      }
    ],
    misconceptions: [
      'Menganggap angka nol di sebelah kiri angka bukan nol pada bilangan desimal (misalnya pada $0{,}0045$) termasuk angka penting. Nol tersebut hanya penanda koma, sehingga $0{,}0045$ hanya memiliki 2 angka penting.',
      'Menyamakan ketepatan (akurasi) dengan ketelitian (presisi). Akurasi berarti dekat dengan nilai sebenarnya, sedangkan presisi berarti hasil pengukuran yang diulang saling berdekatan.',
      'Lupa melihat garis setengah milimeter pada skala utama mikrometer sekrup sehingga hasil ukur meleset $0{,}5\\text{ mm}$.',
      'Menganggap dua besaran dengan satuan berbeda pasti berbeda dimensi, padahal usaha ($\\text{J}$) dan momen gaya ($\\text{N}\\cdot\\text{m}$) berdimensi sama, yaitu $[M][L]^2[T]^{-2}$.'
    ],
    tutorTip: 'Selalu ingat 3 dimensi dasar mekanika ($[M], [L], [T]$). Jika lupa dimensi suatu besaran, turunkan dari rumus paling sederhana yang mengandung besaran itu lalu ganti tiap variabel dengan dimensinya.'
  },
  questions: [
    soal({
      level: 'Dasar',
      q: 'Pasangan besaran pokok, satuan SI, dan dimensi berikut yang seluruhnya benar adalah...',
      options: [
        'massa — gram — $[M]$',
        'suhu — kelvin — $[\\Theta]$',
        'kuat arus — volt — $[I]$',
        'kecepatan — m/s — $[L][T]^{-1}$'
      ],
      answer: 'B',
      hint: 'Periksa apakah ketiganya benar-benar termasuk 7 besaran pokok SI.',
      solution: 'Suhu adalah besaran pokok dengan satuan SI kelvin dan dimensi $[\\Theta]$. Massa satuannya kilogram, kuat arus satuannya ampere, sedangkan kecepatan adalah besaran turunan. Jawaban: **B**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Berdasarkan Hukum II Newton $F = m \\cdot a$, dimensi dari besaran gaya adalah...',
      options: [
        '$[M][L][T]^{-2}$',
        '$[M][L][T]^{-1}$',
        '$[M][L]^2[T]^{-2}$',
        '$[M][L]^{-1}[T]^{-2}$'
      ],
      answer: 'A',
      hint: 'Massa berdimensi $[M]$ dan percepatan berdimensi $[L][T]^{-2}$.',
      solution: '$[F] = [m][a] = [M] \\cdot [L][T]^{-2} = [M][L][T]^{-2}$. Jawaban: **A**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Hasil pengukuran panjang sebuah batang adalah $0{,}04050\\text{ m}$. Jumlah angka penting pada hasil pengukuran tersebut adalah...',
      options: ['2 angka penting', '3 angka penting', '4 angka penting', '5 angka penting'],
      answer: 'C',
      hint: 'Nol di sebelah kiri angka 4 tidak dihitung, sedangkan nol di antara dan di kanan angka desimal bukan nol dihitung.',
      solution: 'Dua angka nol di sebelah kiri angka 4 bukan angka penting. Angka $4, 0, 5,$ dan $0$ di belakang koma adalah angka penting, sehingga seluruhnya ada **4 angka penting**. Jawaban: **C**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Penulisan notasi ilmiah yang tepat untuk panjang gelombang cahaya $0{,}0000725\\text{ m}$ adalah...',
      options: [
        '$72{,}5 \\times 10^{-6}\\text{ m}$',
        '$0{,}725 \\times 10^{-4}\\text{ m}$',
        '$7{,}25 \\times 10^{5}\\text{ m}$',
        '$7{,}25 \\times 10^{-5}\\text{ m}$'
      ],
      answer: 'D',
      hint: 'Dalam notasi ilmiah $a \\times 10^n$, koefisien $a$ harus memenuhi $1 \\le a < 10$.',
      solution: 'Koma digeser 5 langkah ke kanan agar diperoleh $a = 7{,}25$ (antara 1 dan 10), sehingga pangkat sepuluhnya menjadi $-5$: **$7{,}25 \\times 10^{-5}\\text{ m}$**. Jawaban: **D**.'
    }),
    soal({
      level: 'Dasar',
      q: 'Untuk mengukur ketebalan selembar pelat aluminium tipis dengan ketelitian hingga $0{,}01\\text{ mm}$, alat ukur yang paling tepat digunakan adalah...',
      options: ['mikrometer sekrup', 'jangka sorong', 'mistar milimeter', 'rol meter'],
      answer: 'A',
      hint: 'Bandingkan nilai skala terkecil (nst) masing-masing alat ukur panjang.',
      solution: '**Mikrometer sekrup** memiliki ketelitian $0{,}01\\text{ mm}$, lebih teliti dibandingkan jangka sorong ($0{,}1\\text{ mm}$) maupun mistar ($1\\text{ mm}$). Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Seorang siswa mengukur diameter luar silinder menggunakan jangka sorong berketelitian $0{,}01\\text{ cm}$. Skala utama tepat di sebelah kiri angka nol nonius menunjukkan $4{,}2\\text{ cm}$, sedangkan garis nonius ke-6 berimpit tepat dengan garis skala utama. Diameter silinder tersebut adalah...',
      options: ['4,20 cm', '4,80 cm', '4,26 cm', '4,06 cm'],
      answer: 'C',
      hint: 'Hasil = skala utama + (garis nonius $\\times$ $0{,}01\\text{ cm}$).',
      solution: 'Hasil pengukuran $= 4{,}2\\text{ cm} + (6 \\times 0{,}01\\text{ cm}) = 4{,}2 + 0{,}06 = 4{,}26\\text{ cm}$. Jawaban: **C**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Pada pengukuran diameter sebuah kawat tembaga dengan mikrometer sekrup, skala utama menunjukkan $3{,}5\\text{ mm}$ dan garis ke-24 pada skala putar berimpit dengan sumbu mendatar skala utama. Hasil pengukuran diameter kawat adalah...',
      options: ['3,24 mm', '3,74 mm', '3,524 mm', '5,90 mm'],
      answer: 'B',
      hint: 'Skala putar bernilai $0{,}01\\text{ mm}$ per skala dan ditambahkan pada pembacaan skala utama $3{,}5\\text{ mm}$.',
      solution: 'Hasil pengukuran $= 3{,}5\\text{ mm} + (24 \\times 0{,}01\\text{ mm}) = 3{,}5 + 0{,}24 = 3{,}74\\text{ mm}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Dua batang kayu memiliki panjang masing-masing $2{,}34\\text{ m}$ dan $1{,}2\\text{ m}$. Jika kedua batang disambung memanjang, panjang totalnya menurut aturan angka penting adalah...',
      options: ['3,54 m', '3,50 m', '4 m', '3,5 m'],
      answer: 'D',
      hint: 'Pada penjumlahan angka penting, hasil akhir hanya boleh memiliki satu angka taksiran (mengikuti angka di belakang koma paling sedikit).',
      solution: 'Hasil hitung $2{,}34 + 1{,}2 = 3{,}54\\text{ m}$. Bilangan $1{,}2$ hanya memiliki 1 angka di belakang koma, sehingga hasil dibulatkan menjadi **$3{,}5\\text{ m}$**. Jawaban: **D**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah kartu nama berbentuk persegi panjang diukur panjangnya $12{,}4\\text{ cm}$ dan lebarnya $2{,}1\\text{ cm}$. Luas kartu nama tersebut menurut aturan angka penting adalah...',
      options: ['$26\\text{ cm}^2$', '$26{,}0\\text{ cm}^2$', '$26{,}04\\text{ cm}^2$', '$30\\text{ cm}^2$'],
      answer: 'A',
      hint: 'Pada perkalian, jumlah angka penting hasil sama dengan jumlah angka penting paling sedikit dari faktornya.',
      solution: 'Bilangan $12{,}4$ memiliki 3 AP dan $2{,}1$ memiliki 2 AP. Hasil kali $12{,}4 \\times 2{,}1 = 26{,}04\\text{ cm}^2$ dibulatkan menjadi 2 AP, yaitu **$26\\text{ cm}^2$**. Jawaban: **A**.'
    }),
    soal({
      level: 'Sedang',
      q: 'Sebuah benda diukur tunggal menggunakan jangka sorong berketelitian $0{,}01\\text{ cm}$ dan menghasilkan pembacaan $2{,}45\\text{ cm}$. Penulisan hasil pengukuran beserta ketidakpastiannya yang tepat adalah...',
      options: [
        '$(2{,}45 \\pm 0{,}01)\\text{ cm}$',
        '$(2{,}45 \\pm 0{,}05)\\text{ cm}$',
        '$(2{,}450 \\pm 0{,}005)\\text{ cm}$',
        '$(2{,}450 \\pm 0{,}010)\\text{ cm}$'
      ],
      answer: 'C',
      hint: 'Ketidakpastian pengukuran tunggal $\\Delta x = \\frac{1}{2} \\times \\text{nst}$, dan jumlah angka desimal nilai ukur disamakan dengan $\\Delta x$.',
      solution: '$\\Delta x = \\frac{1}{2} \\times 0{,}01\\text{ cm} = 0{,}005\\text{ cm}$ (3 angka di belakang koma). Karena itu nilai ukur ditulis $2{,}450\\text{ cm}$, sehingga pelaporannya **$(2{,}450 \\pm 0{,}005)\\text{ cm}$**. Jawaban: **C**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Hukum gravitasi Newton dinyatakan dengan $F = G\\dfrac{m_1 m_2}{r^2}$, dengan $F$ gaya tarik, $m_1$ dan $m_2$ massa, serta $r$ jarak kedua benda. Dimensi konstanta gravitasi universal $G$ adalah...',
      options: [
        '$[M][L]^3[T]^{-2}$',
        '$[M]^{-1}[L]^3[T]^{-2}$',
        '$[M]^{-1}[L]^2[T]^{-2}$',
        '$[M]^{-2}[L]^3[T]^{-1}$'
      ],
      answer: 'B',
      hint: 'Nyatakan $G = \\dfrac{F r^2}{m_1 m_2}$, lalu substitusi dimensi masing-masing besaran.',
      solution: '$[G] = \\dfrac{[F][r]^2}{[m_1][m_2]} = \\dfrac{[M][L][T]^{-2} \\cdot [L]^2}{[M]^2} = [M]^{-1}[L]^3[T]^{-2}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Periode ayunan bandul sederhana diduga bergantung pada panjang tali $l$ dan percepatan gravitasi $g$ menurut persamaan $T = k\\,l^a g^b$, dengan $k$ konstanta tak berdimensi. Nilai $a$ dan $b$ menurut analisis dimensi adalah...',
      options: [
        '$a = 1$ dan $b = -1$',
        '$a = -\\tfrac{1}{2}$ dan $b = \\tfrac{1}{2}$',
        '$a = 2$ dan $b = -1$',
        '$a = \\tfrac{1}{2}$ dan $b = -\\tfrac{1}{2}$'
      ],
      answer: 'D',
      hint: 'Samakan pangkat $[L]$ dan $[T]$ di ruas kiri $[T]^1$ dan ruas kanan $[L]^a ([L][T]^{-2})^b$.',
      solution: '$[L]^0 [T]^1 = [L]^{a+b} [T]^{-2b}$. Dari pangkat $[T]$: $-2b = 1 \\Rightarrow b = -\\tfrac{1}{2}$. Dari pangkat $[L]$: $a + b = 0 \\Rightarrow a = \\tfrac{1}{2}$. Jawaban: **D**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Pengukuran diameter sebuah kelereng dilakukan berulang sebanyak 5 kali dan diperoleh data: $10{,}4\\text{ mm}$; $10{,}8\\text{ mm}$; $11{,}0\\text{ mm}$; $11{,}2\\text{ mm}$; dan $11{,}6\\text{ mm}$. Jika digunakan ketidakpastian simpangan baku rata-rata $\\Delta x = \\sqrt{\\dfrac{\\sum (x_i - \\bar{x})^2}{N(N-1)}}$, pelaporan hasil pengukuran yang tepat adalah...',
      options: [
        '$(11{,}0 \\pm 0{,}2)\\text{ mm}$',
        '$(11{,}0 \\pm 0{,}4)\\text{ mm}$',
        '$(11{,}0 \\pm 0{,}6)\\text{ mm}$',
        '$(11{,}2 \\pm 0{,}2)\\text{ mm}$'
      ],
      answer: 'A',
      hint: 'Hitung rata-rata $\\bar{x}$ terlebih dahulu, lalu jumlahkan kuadrat selisih tiap data terhadap $\\bar{x}$.',
      solution: 'Rata-rata $\\bar{x} = \\dfrac{10{,}4 + 10{,}8 + 11{,}0 + 11{,}2 + 11{,}6}{5} = 11{,}0\\text{ mm}$.\nJumlah kuadrat selisih $= (-0{,}6)^2 + (-0{,}2)^2 + 0^2 + 0{,}2^2 + 0{,}6^2 = 0{,}80$.\n$\\Delta x = \\sqrt{\\dfrac{0{,}80}{5 \\times 4}} = \\sqrt{0{,}04} = 0{,}2\\text{ mm}$. Jadi hasilnya **$(11{,}0 \\pm 0{,}2)\\text{ mm}$**. Jawaban: **A**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Saat rahang mikrometer sekrup dirapatkan sempurna tanpa benda, alat sudah menunjuk angka $+0{,}02\\text{ mm}$ (kesalahan titik nol positif). Ketika digunakan untuk mengukur tebal kawat, skala menunjukkan $1{,}85\\text{ mm}$. Tebal kawat sebenarnya adalah...',
      options: ['1,87 mm', '1,83 mm', '1,85 mm', '1,65 mm'],
      answer: 'B',
      hint: 'Karena alat sudah terbaca lebih besar $+0{,}02\\text{ mm}$ saat nol, hasil pembacaan harus dikoreksi dengan mengurangkan kesalahan nol tersebut.',
      solution: 'Hasil sebenarnya $=$ pembacaan alat $-$ kesalahan titik nol $= 1{,}85\\text{ mm} - 0{,}02\\text{ mm} = 1{,}83\\text{ mm}$. Jawaban: **B**.'
    }),
    soal({
      level: 'Tantangan',
      q: 'Siswa P melaporkan panjang meja $(25{,}0 \\pm 0{,}5)\\text{ cm}$, sedangkan siswa Q melaporkan panjang papan $(50{,}0 \\pm 0{,}5)\\text{ cm}$. Pernyataan yang benar mengenai ketelitian kedua pengukuran tersebut adalah...',
      options: [
        'Pengukuran P dan Q sama teliti karena ketidakpastian mutlaknya sama-sama $0{,}5\\text{ cm}$.',
        'Pengukuran P lebih teliti karena ketidakpastian relatifnya $2\\%$, sedangkan Q $1\\%$.',
        'Pengukuran Q lebih teliti karena ketidakpastian relatifnya $1\\%$, lebih kecil daripada P sebesar $2\\%$.',
        'Pengukuran P lebih teliti karena panjang meja lebih pendek.'
      ],
      answer: 'C',
      hint: 'Ketelitian pengukuran ditentukan oleh ketidakpastian relatif $KR = \\dfrac{\\Delta x}{\\bar{x}} \\times 100\\%$; makin kecil $KR$, makin teliti.',
      solution: '$KR_P = \\dfrac{0{,}5}{25{,}0} \\times 100\\% = 2\\%$, sedangkan $KR_Q = \\dfrac{0{,}5}{50{,}0} \\times 100\\% = 1\\%$. Karena $KR_Q < KR_P$, **pengukuran Q lebih teliti**. Jawaban: **C**.'
    })
  ]
});
