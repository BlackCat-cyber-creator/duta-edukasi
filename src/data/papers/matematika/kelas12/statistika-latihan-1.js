/**
 * Paket Soal Terstruktur: Latihan Soal Statistika SMA — Paket 1
 * Sumber: 9 LATIHAN SOAL 1 STATISTIKA.pdf (Duta e-dukasi).
 * Bahasa asli dipertahankan dalam Bahasa Indonesia sesuai dokumen sumber.
 * Catatan verifikasi visual: histogram soal nomor 4 diverifikasi langsung dari
 * content-inbox/drive/batch1/9 LATIHAN SOAL 1 STATISTIKA.pdf halaman 1 karena
 * file mat12-statistika-latihan-1_p1.png terender kosong; soal nomor 7, 15-18,
 * dan 19 diverifikasi dari mat12-statistika-latihan-1_p2.png dan _p3.png.
 */
export default {
  id: 'mat12-statistika-latihan-1',
  slug: 'statistika-latihan-1',
  subject: 'matematika',
  grade: 12,
  track: 'kurikulum-merdeka',
  accessTier: 'free',
  competition: 'Matematika SMA',
  lang: 'id',
  langDisplay: 'ID',
  title: 'Latihan Soal Statistika SMA — Paket 1',
  topic: 'Statistika Deskriptif: Ukuran Pemusatan, Letak, dan Penyebaran Data',
  relatedChapterIds: ['sma10-bab7-statistika'],
  totalMarks: 20,
  instructions:
    'Kerjakan seluruh 20 soal pilihan ganda statistika berikut dengan memilih satu jawaban yang paling tepat (A, B, C, D, atau E) serta mencermati langkah perhitungan pada pembahasan. Setiap soal bernilai 1 poin (total 20 poin).',
  source: {
    org: 'Duta e-dukasi',
    file: '9 LATIHAN SOAL 1 STATISTIKA.pdf',
    license: 'CC BY 4.0'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Rataan Hitung Data Berkelompok',
      marks: 1,
      stem: 'Perhatikan tabel distribusi frekuensi berikut:\n\n| Nilai | Frekuensi |\n| :---: | :---: |\n| $40 - 44$ | $1$ |\n| $45 - 49$ | $2$ |\n| $50 - 54$ | $3$ |\n| $55 - 59$ | $6$ |\n| $60 - 64$ | $7$ |\n| $65 - 69$ | $5$ |\n| $70 - 74$ | $7$ |\n| $75 - 79$ | $9$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Nilai rataan dari data pada tabel adalah .....\n\nA. $61$\nB. $62$\nC. $63$\nD. $64$\nE. $65$',
          answer: 'E. $65$',
          principle:
            'Rataan hitung (mean) data berkelompok dihitung menggunakan titik tengah masing-masing kelas ($x_i$) dan frekuensinya ($f_i$): $\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$.',
          solution:
            'Tentukan titik tengah ($x_i = \\frac{\\text{batas bawah} + \\text{batas atas}}{2}$) dan hasil kali $f_i \\cdot x_i$ untuk tiap kelas:\n\n- Kelas $40 - 44$: $x_1 = 42,\\ f_1 = 1 \\implies f_1 x_1 = 42$\n- Kelas $45 - 49$: $x_2 = 47,\\ f_2 = 2 \\implies f_2 x_2 = 94$\n- Kelas $50 - 54$: $x_3 = 52,\\ f_3 = 3 \\implies f_3 x_3 = 156$\n- Kelas $55 - 59$: $x_4 = 57,\\ f_4 = 6 \\implies f_4 x_4 = 342$\n- Kelas $60 - 64$: $x_5 = 62,\\ f_5 = 7 \\implies f_5 x_5 = 434$\n- Kelas $65 - 69$: $x_6 = 67,\\ f_6 = 5 \\implies f_6 x_6 = 335$\n- Kelas $70 - 74$: $x_7 = 72,\\ f_7 = 7 \\implies f_7 x_7 = 504$\n- Kelas $75 - 79$: $x_8 = 77,\\ f_8 = 9 \\implies f_8 x_8 = 693$\n\nJumlah frekuensi dan jumlah hasil kali:\n$$\\sum f_i = 1 + 2 + 3 + 6 + 7 + 5 + 7 + 9 = 40$$\n$$\\sum f_i x_i = 42 + 94 + 156 + 342 + 434 + 335 + 504 + 693 = 2600$$\nMaka nilai rataannya adalah:\n$$\\bar{x} = \\frac{2600}{40} = 65.$$\nJadi, jawaban yang tepat adalah **E. 65**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat E. $65$ berdasarkan perhitungan $\\bar{x} = \\frac{2600}{40} = 65$.' }]
        }
      ]
    },
    {
      no: 2,
      title: 'Median Data Berkelompok',
      marks: 1,
      stem: 'Perhatikan tabel distribusi frekuensi berikut:\n\n| Nilai | Frekuensi |\n| :---: | :---: |\n| $50 - 54$ | $4$ |\n| $55 - 59$ | $8$ |\n| $60 - 64$ | $14$ |\n| $65 - 69$ | $35$ |\n| $70 - 74$ | $27$ |\n| $75 - 79$ | $9$ |\n| $80 - 84$ | $3$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Median dari data berkelompok pada tabel di atas adalah ....\n\nA. $67{,}93$\nB. $68{,}33$\nC. $68{,}63$\nD. $68{,}93$\nE. $69{,}33$',
          answer: 'A. $67{,}93$',
          principle:
            'Median data berkelompok terletak pada data ke-$\\frac{n}{2}$ dan dihitung dengan rumus $\\text{Me} = T_b + \\left(\\frac{\\frac{n}{2} - F_k}{f_{\\text{Me}}}\\right) \\cdot p$, dengan $T_b$ tepi bawah kelas median, $F_k$ frekuensi kumulatif sebelum kelas median, $f_{\\text{Me}}$ frekuensi kelas median, dan $p$ panjang kelas.',
          solution:
            'Hitung frekuensi total ($n$) dan frekuensi kumulatif kurang dari:\n- $50 - 54$: $f = 4,\\ F_k = 4$\n- $55 - 59$: $f = 8,\\ F_k = 12$\n- $60 - 64$: $f = 14,\\ F_k = 26$\n- $65 - 69$: $f = 35,\\ F_k = 61$\n- $70 - 74$: $f = 27,\\ F_k = 88$\n- $75 - 79$: $f = 9,\\ F_k = 97$\n- $80 - 84$: $f = 3,\\ F_k = 100$\n\nLetak median berada pada data ke-$\\frac{n}{2} = \\frac{100}{2} = 50$, yaitu pada kelas $65 - 69$ (karena $F_k$ mencapai $61 \\ge 50$).\nDiperoleh:\n- $T_b = 65 - 0{,}5 = 64{,}5$\n- $F_k = 26$\n- $f_{\\text{Me}} = 35$\n- $p = 69{,}5 - 64{,}5 = 5$\n\nSubstitusi ke rumus median:\n$$\\text{Me} = 64{,}5 + \\left(\\frac{50 - 26}{35}\\right) \\times 5 = 64{,}5 + \\frac{24}{7} \\approx 64{,}5 + 3{,}4286 \\approx 67{,}93.$$\nJadi, jawaban yang tepat adalah **A. 67,93**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat A. $67{,}93$ dari $\\text{Me} = 64{,}5 + \\frac{24}{7}$.' }]
        }
      ]
    },
    {
      no: 3,
      title: 'Modus Data Berkelompok',
      marks: 1,
      stem: 'Perhatikan tabel distribusi frekuensi tinggi badan berikut:\n\n| Tinggi (cm) | Frekuensi |\n| :---: | :---: |\n| $130 - 134$ | $2$ |\n| $135 - 139$ | $7$ |\n| $140 - 144$ | $12$ |\n| $145 - 149$ | $10$ |\n| $150 - 154$ | $14$ |\n| $155 - 159$ | $8$ |\n| $160 - 164$ | $7$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Modus dari data pada distribusi frekuensi di atas adalah ....\n\nA. $149{,}9\\ \\text{cm}$\nB. $150{,}5\\ \\text{cm}$\nC. $151{,}5\\ \\text{cm}$\nD. $152{,}0\\ \\text{cm}$\nE. $156{,}3\\ \\text{cm}$',
          answer: 'C. $151{,}5\\ \\text{cm}$',
          principle:
            'Modus data berkelompok berada pada kelas dengan frekuensi terbesar dan dirumuskan oleh $\\text{Mo} = T_b + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\cdot p$, dengan $d_1$ selisih frekuensi kelas modus dengan kelas sebelumnya dan $d_2$ selisih dengan kelas sesudahnya.',
          solution:
            'Frekuensi tertinggi adalah $14$, sehingga kelas modus adalah $150 - 154$.\nDari kelas modus tersebut diperoleh:\n- Tepi bawah: $T_b = 150 - 0{,}5 = 149{,}5$\n- Panjang kelas: $p = 154{,}5 - 149{,}5 = 5$\n- $d_1 = 14 - 10 = 4$\n- $d_2 = 14 - 8 = 6$\n\nHitung modus:\n$$\\text{Mo} = 149{,}5 + \\left(\\frac{4}{4 + 6}\\right) \\times 5 = 149{,}5 + \\frac{4}{10} \\times 5 = 149{,}5 + 2 = 151{,}5\\ \\text{cm}.$$\nJadi, jawaban yang tepat adalah **C. 151,5 cm**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat C. $151{,}5\\ \\text{cm}$.' }]
        }
      ]
    },
    {
      no: 4,
      title: 'Modus dari Histogram Berat Badan',
      marks: 1,
      stem: 'Data berat badan siswa yang disajikan pada histogram dalam dokumen sumber memiliki batas tepi kelas dan frekuensi sebagai berikut:\n\n| Tepi Kelas Berat Badan (kg) | Frekuensi ($f$) |\n| :---: | :---: |\n| $20{,}5 - 30{,}5$ | $5$ |\n| $30{,}5 - 40{,}5$ | $9$ |\n| $40{,}5 - 50{,}5$ | $16$ |\n| $50{,}5 - 60{,}5$ | $13$ |\n| $60{,}5 - 70{,}5$ | $7$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Modus dari berat badan siswa yang disajikan pada histogram tersebut adalah ....\n\nA. $43{,}5\\ \\text{kg}$\nB. $44{,}50\\ \\text{kg}$\nC. $47\\ \\text{kg}$\nD. $47{,}50\\ \\text{kg}$\nE. $47{,}78$',
          answer: 'D. $47{,}50\\ \\text{kg}$',
          principle:
            'Pada histogram yang sumbu mendatarnya menyatakan tepi kelas, tepi bawah kelas modus ($T_b$) langsung terbaca pada batas kiri batang tertinggi, dengan rumus $\\text{Mo} = T_b + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\cdot p$.',
          solution:
            'Batang tertinggi memiliki frekuensi $16$ pada interval tepi kelas $40{,}5 - 50{,}5$.\nDiperoleh:\n- $T_b = 40{,}5$\n- Panjang kelas: $p = 50{,}5 - 40{,}5 = 10$\n- $d_1 = 16 - 9 = 7$\n- $d_2 = 16 - 13 = 3$\n\nHitung modus:\n$$\\text{Mo} = 40{,}5 + \\left(\\frac{7}{7 + 3}\\right) \\times 10 = 40{,}5 + \\frac{7}{10} \\times 10 = 40{,}5 + 7 = 47{,}50\\ \\text{kg}.$$\nJadi, jawaban yang tepat adalah **D. 47,50 kg**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat D. $47{,}50\\ \\text{kg}$.' }]
        }
      ]
    },
    {
      no: 5,
      title: 'Analisis Daftar Distribusi Frekuensi',
      marks: 1,
      stem: 'Perhatikan daftar distribusi frekuensi berikut:\n\n| Data | Frekuensi |\n| :---: | :---: |\n| $1 - 5$ | $4$ |\n| $6 - 10$ | $15$ |\n| $11 - 15$ | $7$ |\n| $16 - 20$ | $3$ |\n| $21 - 25$ | $1$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Dari daftar distribusi di atas didapat bahwa:\n\nA. Median terletak pada kelas ke-3\nB. Banyaknya data seluruhnya $= 25$\nC. Jangkauan $= 24$\nD. Modus terletak pada kelas ke-3\nE. Meannya $= 10$',
          answer: 'E. Meannya $= 10$',
          principle:
            'Mean data berkelompok adalah $\\bar{x} = \\frac{\\sum f_i x_i}{n}$, kelas modus adalah kelas berfrekuensi tertinggi, kelas median memuat data ke-$\\frac{n}{2}$, dan jangkauan data berkelompok didefinisikan sebagai selisih titik tengah kelas tertinggi dan titik tengah kelas terendah.',
          solution:
            'Periksa setiap pernyataan:\n1. **Banyaknya data seluruhnya ($n$):** $n = 4 + 15 + 7 + 3 + 1 = 30$, sehingga opsi B ($25$) **salah**.\n2. **Letak median:** data ke-$\\frac{30}{2} = 15$. Karena frekuensi kumulatif kelas ke-1 adalah $4$ dan kelas ke-2 adalah $4 + 15 = 19 \\ge 15$, median terletak pada **kelas ke-2** ($6 - 10$), sehingga opsi A **salah**.\n3. **Letak modus:** frekuensi terbesar adalah $15$, yaitu pada **kelas ke-2** ($6 - 10$), sehingga opsi D **salah**.\n4. **Jangkauan data berkelompok:** dihitung dari selisih titik tengah kelas terakhir ($23$) dan titik tengah kelas pertama ($3$), yakni $23 - 3 = 20$ (nilai data mentah terkecil dan terbesar tidak diketahui pasti dari tabel berkelompok), sehingga opsi C ($24$) **salah**.\n5. **Mean ($\\bar{x}$):** titik tengah tiap kelas berturut-turut $3, 8, 13, 18, 23$:\n$$\\sum f_i x_i = 4(3) + 15(8) + 7(13) + 3(18) + 1(23) = 12 + 120 + 91 + 54 + 23 = 300$$\n$$\\bar{x} = \\frac{300}{30} = 10.$$\nJadi, pernyataan yang benar adalah **E. Meannya = 10**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat E. Meannya $= 10$.' }]
        }
      ]
    },
    {
      no: 6,
      title: 'Menentukan Frekuensi Kelas dari Nilai Median',
      marks: 1,
      stem: 'Data berikut adalah tinggi badan sekelompok siswa:\n\n| Tinggi | Frekuensi |\n| :---: | :---: |\n| $151 - 155$ | $5$ |\n| $156 - 160$ | $20$ |\n| $161 - 165$ | $k$ |\n| $166 - 170$ | $26$ |\n| $171 - 175$ | $7$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Jika median data di atas adalah $163{,}5\\ \\text{cm}$, nilai $k$ adalah ....\n\nA. $40$\nB. $42$\nC. $44$\nD. $46$\nE. $48$',
          answer: 'A. $40$',
          principle:
            'Nilai median menentukan kelas median secara langsung, sehingga frekuensi yang belum diketahui ($k$) dapat dicari dengan menyubstitusikan $\\text{Me}$ ke persamaan $\\text{Me} = T_b + \\left(\\frac{\\frac{n}{2} - F_k}{f_{\\text{Me}}}\\right) \\cdot p$.',
          solution:
            'Karena $\\text{Me} = 163{,}5\\ \\text{cm}$ berada pada interval $161 - 165$, maka kelas mediannya adalah kelas ke-3 dengan:\n- $T_b = 161 - 0{,}5 = 160{,}5$\n- $p = 165{,}5 - 160{,}5 = 5$\n- $F_k = 5 + 20 = 25$\n- $f_{\\text{Me}} = k$\n- Total frekuensi: $n = 5 + 20 + k + 26 + 7 = 58 + k$\n\nSubstitusi ke rumus median:\n$$163{,}5 = 160{,}5 + \\left(\\frac{\\frac{58 + k}{2} - 25}{k}\\right) \\times 5$$\n$$3 = \\frac{29 + 0{,}5k - 25}{k} \\times 5 \\implies \\frac{3}{5} = \\frac{4 + 0{,}5k}{k}$$\n$$0{,}6k = 4 + 0{,}5k \\implies 0{,}1k = 4 \\implies k = 40.$$\nJadi, jawaban yang tepat adalah **A. 40**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat A. $40$.' }]
        }
      ]
    },
    {
      no: 7,
      title: 'Rata-Rata Berat Badan dari Histogram Titik Tengah',
      marks: 1,
      stem: 'Histogram berat badan $50$ siswa pada gambar memiliki batang-batang dengan titik tengah ($x_i$) dan frekuensi ($f_i$) sebagai berikut:\n\n| Titik Tengah Berat Badan (kg) | Frekuensi ($f$) |\n| :---: | :---: |\n| $51$ | $5$ |\n| $54$ | $17$ |\n| $57$ | $14$ |\n| $60$ | $10$ |\n| $63$ | $4$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Rata-rata berat badan adalah .... $\\text{kg}$\n\nA. $51{,}54$\nB. $52{,}46$\nC. $56{,}54$\nD. $56{,}46$\nE. $57{,}54$',
          answer: 'D. $56{,}46$',
          principle:
            'Jika histogram mencantumkan titik tengah tiap batang pada sumbu mendatar, nilai tersebut langsung menjadi $x_i$ dalam rumus rataan $\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$.',
          solution:
            'Periksa jumlah frekuensi: $\\sum f_i = 5 + 17 + 14 + 10 + 4 = 50$ (sesuai dengan keterangan $50$ siswa).\nHitung jumlah hasil kali $f_i \\cdot x_i$:\n$$\\sum f_i x_i = 5(51) + 17(54) + 14(57) + 10(60) + 4(63)$$\n$$= 255 + 918 + 798 + 600 + 252 = 2823.$$\nRata-rata berat badan adalah:\n$$\\bar{x} = \\frac{2823}{50} = 56{,}46\\ \\text{kg}.$$\nJadi, jawaban yang tepat adalah **D. 56,46**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat D. $56{,}46$.' }]
        }
      ]
    },
    {
      no: 8,
      title: 'Simpangan Kuartil Data Tunggal',
      marks: 1,
      stem: 'Diberikan sekumpulan data tunggal: $6, 7, 7, 3, 8, 4, 6, 5, 5, 9, 10, 4, 4, 3$.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Simpangan kuartil dari data $6, 7, 7, 3, 8, 4, 6, 5, 5, 9, 10, 4, 4, 3$ adalah ....\n\nA. $1{,}5$\nB. $2{,}5$\nC. $3{,}5$\nD. $4$\nE. $7$',
          answer: 'A. $1{,}5$',
          principle:
            'Simpangan kuartil (jangkauan semiinterkuartil) dirumuskan oleh $Q_d = \\frac{1}{2}(Q_3 - Q_1)$ setelah data diurutkan dari terkecil ke terbesar.',
          solution:
            'Urutkan ke-$14$ data tersebut dari yang terkecil:\n$$3, 3, 4, 4, 4, 5, 5,\\ \\big|\\ \\ 6, 6, 7, 7, 8, 9, 10$$\nKarena $n = 14$ (genap), median membagi data tepat menjadi dua bagian masing-masing berisi $7$ data:\n- Paruh bawah ($7$ data): $3, 3, 4, \\mathbf{4}, 4, 5, 5 \\implies Q_1 = 4$ (data ke-$4$).\n- Paruh atas ($7$ data): $6, 6, 7, \\mathbf{7}, 8, 9, 10 \\implies Q_3 = 7$ (data ke-$11$).\n\nSimpangan kuartilnya adalah:\n$$Q_d = \\frac{1}{2}(Q_3 - Q_1) = \\frac{1}{2}(7 - 4) = \\frac{3}{2} = 1{,}5.$$\nJadi, jawaban yang tepat adalah **A. 1,5**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat A. $1{,}5$.' }]
        }
      ]
    },
    {
      no: 9,
      title: 'Nilai Rata-Rata Tabel Distribusi Frekuensi',
      marks: 1,
      stem: 'Perhatikan tabel distribusi frekuensi berikut (data untuk soal nomor $9 - 12$):\n\n| Data | Frekuensi |\n| :---: | :---: |\n| $20 - 24$ | $6$ |\n| $25 - 29$ | $10$ |\n| $30 - 34$ | $2$ |\n| $35 - 39$ | $5$ |\n| $40 - 44$ | $4$ |\n| $45 - 49$ | $3$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Nilai rata-rata dari tabel di atas adalah ....\n\nA. $28$\nB. $32$\nC. $36$\nD. $29$\nE. $35$',
          answer: 'B. $32$',
          principle:
            'Rata-rata data berkelompok dihitung menggunakan $\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$ dengan $x_i$ titik tengah kelas.',
          solution:
            'Tentukan titik tengah ($x_i$) dan hasil kali $f_i \\cdot x_i$:\n- $20 - 24$: $x_1 = 22,\\ f_1 = 6 \\implies 132$\n- $25 - 29$: $x_2 = 27,\\ f_2 = 10 \\implies 270$\n- $30 - 34$: $x_3 = 32,\\ f_3 = 2 \\implies 64$\n- $35 - 39$: $x_4 = 37,\\ f_4 = 5 \\implies 185$\n- $40 - 44$: $x_5 = 42,\\ f_5 = 4 \\implies 168$\n- $45 - 49$: $x_6 = 47,\\ f_6 = 3 \\implies 141$\n\nTotal frekuensi dan jumlah $f_i x_i$:\n$$\\sum f_i = 6 + 10 + 2 + 5 + 4 + 3 = 30$$\n$$\\sum f_i x_i = 132 + 270 + 64 + 185 + 168 + 141 = 960$$\nMaka rata-ratanya:\n$$\\bar{x} = \\frac{960}{30} = 32.$$\nJadi, jawaban yang tepat adalah **B. 32**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat B. $32$.' }]
        }
      ]
    },
    {
      no: 10,
      title: 'Kuartil Atas Data Berkelompok',
      marks: 1,
      stem: 'Perhatikan tabel distribusi frekuensi berikut (data untuk soal nomor $9 - 12$):\n\n| Data | Frekuensi |\n| :---: | :---: |\n| $20 - 24$ | $6$ |\n| $25 - 29$ | $10$ |\n| $30 - 34$ | $2$ |\n| $35 - 39$ | $5$ |\n| $40 - 44$ | $4$ |\n| $45 - 49$ | $3$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Kuartil atas dari tabel di atas adalah ....\n\nA. $39$\nB. $40$\nC. $41$\nD. $42$\nE. $43$',
          answer: 'A. $39$',
          principle:
            'Kuartil atas ($Q_3$) data berkelompok berada pada posisi $\\frac{3}{4}n$ dan dihitung dengan $Q_3 = T_b + \\left(\\frac{\\frac{3}{4}n - F_k}{f_{Q_3}}\\right) \\cdot p$.',
          solution:
            'Jumlah total data $n = 30$. Hitung frekuensi kumulatif:\n- $20 - 24$: $F_k = 6$\n- $25 - 29$: $F_k = 16$\n- $30 - 34$: $F_k = 18$\n- $35 - 39$: $F_k = 23$\n- $40 - 44$: $F_k = 27$\n- $45 - 49$: $F_k = 30$\n\nLetak $Q_3$ berada pada data ke-$\\frac{3}{4} \\times 30 = 22{,}5$, yakni di kelas $35 - 39$ (karena $F_k = 23 \\ge 22{,}5$).\nDiperoleh $T_b = 34{,}5$, $F_k = 18$, $f_{Q_3} = 5$, dan $p = 5$:\n$$Q_3 = 34{,}5 + \\left(\\frac{22{,}5 - 18}{5}\\right) \\times 5 = 34{,}5 + 4{,}5 = 39.$$\nJadi, jawaban yang tepat adalah **A. 39**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat A. $39$.' }]
        }
      ]
    },
    {
      no: 11,
      title: 'Kuartil Bawah Data Berkelompok',
      marks: 1,
      stem: 'Perhatikan tabel distribusi frekuensi berikut (data untuk soal nomor $9 - 12$):\n\n| Data | Frekuensi |\n| :---: | :---: |\n| $20 - 24$ | $6$ |\n| $25 - 29$ | $10$ |\n| $30 - 34$ | $2$ |\n| $35 - 39$ | $5$ |\n| $40 - 44$ | $4$ |\n| $45 - 49$ | $3$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Kuartil bawah dari tabel di atas adalah ....\n\nA. $25$\nB. $25{,}5$\nC. $26{,}5$\nD. $25{,}25$\nE. $26{,}75$',
          answer: 'D. $25{,}25$',
          principle:
            'Kuartil bawah ($Q_1$) data berkelompok berada pada posisi $\\frac{1}{4}n$ dan dihitung dengan $Q_1 = T_b + \\left(\\frac{\\frac{1}{4}n - F_k}{f_{Q_1}}\\right) \\cdot p$.',
          solution:
            'Dengan $n = 30$, letak $Q_1$ berada pada data ke-$\\frac{1}{4} \\times 30 = 7{,}5$.\nKarena $F_k$ kelas pertama adalah $6$ dan kelas kedua ($25 - 29$) mencapai $16 \\ge 7{,}5$, kelas $Q_1$ adalah $25 - 29$.\nDiperoleh $T_b = 24{,}5$, $F_k = 6$, $f_{Q_1} = 10$, dan $p = 5$:\n$$Q_1 = 24{,}5 + \\left(\\frac{7{,}5 - 6}{10}\\right) \\times 5 = 24{,}5 + \\frac{1{,}5}{2} = 24{,}5 + 0{,}75 = 25{,}25.$$\nJadi, jawaban yang tepat adalah **D. 25,25**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat D. $25{,}25$.' }]
        }
      ]
    },
    {
      no: 12,
      title: 'Simpangan Kuartil Data Berkelompok',
      marks: 1,
      stem: 'Perhatikan tabel distribusi frekuensi berikut (data untuk soal nomor $9 - 12$):\n\n| Data | Frekuensi |\n| :---: | :---: |\n| $20 - 24$ | $6$ |\n| $25 - 29$ | $10$ |\n| $30 - 34$ | $2$ |\n| $35 - 39$ | $5$ |\n| $40 - 44$ | $4$ |\n| $45 - 49$ | $3$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Simpangan kuartil dari tabel di atas adalah ....\n\nA. $6{,}125$\nB. $6{,}775$\nC. $6{,}875$\nD. $7{,}125$\nE. $7{,}5$',
          answer: 'C. $6{,}875$',
          principle:
            'Simpangan kuartil didefinisikan sebagai setengah dari jangkauan antarkuartil: $Q_d = \\frac{1}{2}(Q_3 - Q_1)$.',
          solution:
            'Dari perhitungan pada soal sebelumnya diperoleh:\n- Kuartil atas: $Q_3 = 34{,}5 + \\frac{22{,}5 - 18}{5} \\times 5 = 39$\n- Kuartil bawah: $Q_1 = 24{,}5 + \\frac{7{,}5 - 6}{10} \\times 5 = 25{,}25$\n\nSubstitusi ke rumus simpangan kuartil:\n$$Q_d = \\frac{1}{2}(Q_3 - Q_1) = \\frac{1}{2}(39 - 25{,}25) = \\frac{13{,}75}{2} = 6{,}875.$$\nJadi, jawaban yang tepat adalah **C. 6,875**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat C. $6{,}875$.' }]
        }
      ]
    },
    {
      no: 13,
      title: 'Simpangan Baku Data Tunggal',
      marks: 1,
      stem: 'Diberikan data tunggal: $3, 3, 4, 5, 5$.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Simpangan baku dari data $3, 3, 4, 5, 5$ adalah ....\n\nA. $\\frac{1}{3}\\sqrt{3}$\nB. $\\frac{2}{5}\\sqrt{5}$\nC. $\\frac{2}{5}\\sqrt{10}$\nD. $\\frac{1}{5}\\sqrt{30}$\nE. $\\frac{1}{5}\\sqrt{35}$',
          answer: 'B. $\\frac{2}{5}\\sqrt{5}$',
          principle:
            'Simpangan baku populasi data tunggal adalah akar kuadrat dari varians: $S = \\sqrt{\\frac{\\sum_{i=1}^n (x_i - \\bar{x})^2}{n}}$.',
          solution:
            'Hitung rata-rata data ($n = 5$):\n$$\\bar{x} = \\frac{3 + 3 + 4 + 5 + 5}{5} = \\frac{20}{5} = 4.$$\nHitung jumlah kuadrat simpangan terhadap rata-rata:\n$$\\sum (x_i - \\bar{x})^2 = (3 - 4)^2 + (3 - 4)^2 + (4 - 4)^2 + (5 - 4)^2 + (5 - 4)^2 = 1 + 1 + 0 + 1 + 1 = 4.$$\nMaka simpangan bakunya adalah:\n$$S = \\sqrt{\\frac{4}{5}} = \\frac{2}{\\sqrt{5}} = \\frac{2}{5}\\sqrt{5}.$$\nJadi, jawaban yang tepat adalah **B. $\\frac{2}{5}\\sqrt{5}$**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat B. $\\frac{2}{5}\\sqrt{5}$.' }]
        }
      ]
    },
    {
      no: 14,
      title: 'Varians Data Tunggal',
      marks: 1,
      stem: 'Diberikan sekumpulan data sebagai berikut: $7, 2, 3, 8, 4, 6$.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Nilai varians data di atas adalah ....\n\nA. $1$\nB. $\\frac{7}{3}$\nC. $2$\nD. $\\frac{14}{3}$\nE. $\\frac{17}{3}$',
          answer: 'D. $\\frac{14}{3}$',
          principle:
            'Varians (ragam) populasi data tunggal adalah rata-rata kuadrat simpangan tiap data terhadap rataannya: $S^2 = \\frac{\\sum_{i=1}^n (x_i - \\bar{x})^2}{n}$.',
          solution:
            'Hitung rata-rata dari $n = 6$ data:\n$$\\bar{x} = \\frac{7 + 2 + 3 + 8 + 4 + 6}{6} = \\frac{30}{6} = 5.$$\nHitung jumlah kuadrat selisih tiap data dengan $\\bar{x} = 5$:\n$$\\sum (x_i - \\bar{x})^2 = (7 - 5)^2 + (2 - 5)^2 + (3 - 5)^2 + (8 - 5)^2 + (4 - 5)^2 + (6 - 5)^2$$\n$$= 4 + 9 + 4 + 9 + 1 + 1 = 28.$$\nMaka variansnya adalah:\n$$S^2 = \\frac{28}{6} = \\frac{14}{3}.$$\nJadi, jawaban yang tepat adalah **D. $\\frac{14}{3}$**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat D. $\\frac{14}{3}$.' }]
        }
      ]
    },
    {
      no: 15,
      title: 'Rataan Berat Badan dari Histogram',
      marks: 1,
      stem: 'Berat badan siswa pada suatu kelas disajikan pada histogram (data untuk soal nomor $15 - 18$) dengan tepi kelas dan frekuensi sebagai berikut:\n\n| Tepi Kelas Berat Badan (kg) | Frekuensi ($f$) |\n| :---: | :---: |\n| $49{,}5 - 54{,}5$ | $4$ |\n| $54{,}5 - 59{,}5$ | $6$ |\n| $59{,}5 - 64{,}5$ | $8$ |\n| $64{,}5 - 69{,}5$ | $10$ |\n| $69{,}5 - 74{,}5$ | $8$ |\n| $74{,}5 - 79{,}5$ | $4$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Rataan berat badan tersebut adalah ....\n\nA. $59\\ \\text{kg}$\nB. $65\\ \\text{kg}$\nC. $63\\ \\text{kg}$\nD. $60\\ \\text{kg}$\nE. $61\\ \\text{kg}$',
          answer: 'B. $65\\ \\text{kg}$',
          principle:
            'Titik tengah batang histogram pada tepi kelas $[a, b]$ adalah $x_i = \\frac{a + b}{2}$, dan rataan dihitung dengan $\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$ (atau langsung memanfaatkan simetri distribusi frekuensi).',
          solution:
            'Tentukan titik tengah ($x_i$) tiap kelas:\n- $49{,}5 - 54{,}5$: $x_1 = 52,\\ f_1 = 4 \\implies 208$\n- $54{,}5 - 59{,}5$: $x_2 = 57,\\ f_2 = 6 \\implies 342$\n- $59{,}5 - 64{,}5$: $x_3 = 62,\\ f_3 = 8 \\implies 496$\n- $64{,}5 - 69{,}5$: $x_4 = 67,\\ f_4 = 10 \\implies 670$\n- $69{,}5 - 74{,}5$: $x_5 = 72,\\ f_5 = 8 \\implies 576$\n- $74{,}5 - 79{,}5$: $x_6 = 77,\\ f_6 = 4 \\implies 308$\n\nTotal frekuensi: $n = 4 + 6 + 8 + 10 + 8 + 4 = 40$, dan $\\sum f_i x_i = 208 + 342 + 496 + 670 + 576 + 308 = 2600$.\n$$\\bar{x} = \\frac{2600}{40} = 65\\ \\text{kg}.$$\nJadi, jawaban yang tepat adalah **B. 65 kg**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat B. $65\\ \\text{kg}$.' }]
        }
      ]
    },
    {
      no: 16,
      title: 'Modus dari Histogram Berat Badan',
      marks: 1,
      stem: 'Berat badan siswa pada suatu kelas disajikan pada histogram (data untuk soal nomor $15 - 18$) dengan tepi kelas dan frekuensi sebagai berikut:\n\n| Tepi Kelas Berat Badan (kg) | Frekuensi ($f$) |\n| :---: | :---: |\n| $49{,}5 - 54{,}5$ | $4$ |\n| $54{,}5 - 59{,}5$ | $6$ |\n| $59{,}5 - 64{,}5$ | $8$ |\n| $64{,}5 - 69{,}5$ | $10$ |\n| $69{,}5 - 74{,}5$ | $8$ |\n| $74{,}5 - 79{,}5$ | $4$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Modus dari data pada histogram di atas adalah ....\n\nA. $65$\nB. $66$\nC. $67$\nD. $68$\nE. $68{,}5$',
          answer: 'C. $67$',
          principle:
            'Modus dihitung pada kelas berfrekuensi maksimum menggunakan $\\text{Mo} = T_b + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\cdot p$.',
          solution:
            'Batang tertinggi berada pada interval tepi kelas $64{,}5 - 69{,}5$ dengan frekuensi $10$.\nDiperoleh:\n- $T_b = 64{,}5$\n- $p = 69{,}5 - 64{,}5 = 5$\n- $d_1 = 10 - 8 = 2$\n- $d_2 = 10 - 8 = 2$\n\nHitung modus:\n$$\\text{Mo} = 64{,}5 + \\left(\\frac{2}{2 + 2}\\right) \\times 5 = 64{,}5 + 2{,}5 = 67.$$\nJadi, jawaban yang tepat adalah **C. 67**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat C. $67$.' }]
        }
      ]
    },
    {
      no: 17,
      title: 'Kuartil Atas dari Histogram',
      marks: 1,
      stem: 'Berat badan siswa pada suatu kelas disajikan pada histogram (data untuk soal nomor $15 - 18$) dengan tepi kelas dan frekuensi sebagai berikut:\n\n| Tepi Kelas Berat Badan (kg) | Frekuensi ($f$) |\n| :---: | :---: |\n| $49{,}5 - 54{,}5$ | $4$ |\n| $54{,}5 - 59{,}5$ | $6$ |\n| $59{,}5 - 64{,}5$ | $8$ |\n| $64{,}5 - 69{,}5$ | $10$ |\n| $69{,}5 - 74{,}5$ | $8$ |\n| $74{,}5 - 79{,}5$ | $4$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Kuartil atas dari histogram tersebut adalah ....\n\nA. $68{,}5$\nB. $69$\nC. $69{,}25$\nD. $70{,}75$\nE. $71{,}25$',
          answer: 'D. $70{,}75$',
          principle:
            'Kuartil atas ($Q_3$) terletak pada data ke-$\\frac{3}{4}n$ dengan rumus $Q_3 = T_b + \\left(\\frac{\\frac{3}{4}n - F_k}{f_{Q_3}}\\right) \\cdot p$.',
          solution:
            'Jumlah frekuensi total $n = 40$, sehingga letak $Q_3$ adalah data ke-$\\frac{3}{4} \\times 40 = 30$.\nFrekuensi kumulatif tiap kelas:\n- $49{,}5 - 54{,}5$: $4$\n- $54{,}5 - 59{,}5$: $10$\n- $59{,}5 - 64{,}5$: $18$\n- $64{,}5 - 69{,}5$: $28$\n- $69{,}5 - 74{,}5$: $36$\n\nData ke-$30$ berada pada kelas $69{,}5 - 74{,}5$ dengan $T_b = 69{,}5$, $F_k = 28$, $f_{Q_3} = 8$, dan $p = 5$:\n$$Q_3 = 69{,}5 + \\left(\\frac{30 - 28}{8}\\right) \\times 5 = 69{,}5 + \\frac{10}{8} = 69{,}5 + 1{,}25 = 70{,}75.$$\nJadi, jawaban yang tepat adalah **D. 70,75**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat D. $70{,}75$.' }]
        }
      ]
    },
    {
      no: 18,
      title: 'Desil ke-4 dari Histogram',
      marks: 1,
      stem: 'Berat badan siswa pada suatu kelas disajikan pada histogram (data untuk soal nomor $15 - 18$) dengan tepi kelas dan frekuensi sebagai berikut:\n\n| Tepi Kelas Berat Badan (kg) | Frekuensi ($f$) |\n| :---: | :---: |\n| $49{,}5 - 54{,}5$ | $4$ |\n| $54{,}5 - 59{,}5$ | $6$ |\n| $59{,}5 - 64{,}5$ | $8$ |\n| $64{,}5 - 69{,}5$ | $10$ |\n| $69{,}5 - 74{,}5$ | $8$ |\n| $74{,}5 - 79{,}5$ | $4$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Desil ke-$4$ ($D_4$) dari data pada histogram di atas adalah ....\n\nA. $63{,}25$\nB. $62{,}125$\nC. $64{,}75$\nD. $61{,}55$\nE. $65{,}35$',
          answer: 'A. $63{,}25$',
          principle:
            'Desil ke-$i$ ($D_i$) membagi data terurut menjadi $10$ bagian sama banyak, dengan letak $D_i$ pada data ke-$\\frac{i}{10}n$ dan rumus $D_i = T_b + \\left(\\frac{\\frac{i}{10}n - F_k}{f_{D_i}}\\right) \\cdot p$.',
          solution:
            'Untuk $n = 40$, letak $D_4$ berada pada data ke-$\\frac{4}{10} \\times 40 = 16$.\nDari frekuensi kumulatif ($4, 10, 18, \\dots$), data ke-$16$ terletak pada kelas $59{,}5 - 64{,}5$.\nDiperoleh $T_b = 59{,}5$, $F_k = 10$, $f_{D_4} = 8$, dan $p = 5$:\n$$D_4 = 59{,}5 + \\left(\\frac{16 - 10}{8}\\right) \\times 5 = 59{,}5 + \\frac{30}{8} = 59{,}5 + 3{,}75 = 63{,}25.$$\nJadi, jawaban yang tepat adalah **A. 63,25**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat A. $63{,}25$.' }]
        }
      ]
    },
    {
      no: 19,
      title: 'Menentukan Frekuensi Histogram dari Nilai Rataan',
      marks: 1,
      stem: 'Histogram pada soal memiliki batang-batang dengan batas tepi kelas dan frekuensi sebagai berikut:\n\n| Tepi Kelas | Frekuensi ($f$) |\n| :---: | :---: |\n| $35{,}5 - 40{,}5$ | $5$ |\n| $40{,}5 - 45{,}5$ | $x$ |\n| $45{,}5 - 50{,}5$ | $10$ |\n| $50{,}5 - 55{,}5$ | $8$ |\n| $55{,}5 - 60{,}5$ | $4$ |',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Rata-rata hitung untuk data pada histogram tersebut adalah $48$. Dengan demikian nilai $x = \\dots$\n\nA. $6$\nB. $7$\nC. $8$\nD. $9$\nE. $10$',
          answer: 'A. $6$',
          principle:
            'Substitusi titik tengah kelas ($x_i$) dan rata-rata $\\bar{x}$ ke persamaan $\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$, atau gunakan syarat keseimbangan deviasi $\\sum f_i(x_i - \\bar{x}) = 0$.',
          solution:
            'Titik tengah tiap kelas adalah $38, 43, 48, 53, 58$.\nKarena $\\bar{x} = 48$ berimpit dengan titik tengah kelas ke-$3$, gunakan metode simpangan terhadap $48$:\n- Kelas 1 ($38$): $d_1 = 38 - 48 = -10$, $f_1 = 5 \\implies f_1 d_1 = -50$\n- Kelas 2 ($43$): $d_2 = 43 - 48 = -5$, $f_2 = x \\implies f_2 d_2 = -5x$\n- Kelas 3 ($48$): $d_3 = 48 - 48 = 0$, $f_3 = 10 \\implies f_3 d_3 = 0$\n- Kelas 4 ($53$): $d_4 = 53 - 48 = +5$, $f_4 = 8 \\implies f_4 d_4 = +40$\n- Kelas 5 ($58$): $d_5 = 58 - 48 = +10$, $f_5 = 4 \\implies f_5 d_5 = +40$\n\nSyarat $\\sum f_i d_i = 0$:\n$$-50 - 5x + 0 + 40 + 40 = 0 \\implies 30 - 5x = 0 \\implies x = 6.$$\n(Pemeriksaan langsung: $\\frac{5(38) + 6(43) + 10(48) + 8(53) + 4(58)}{5 + 6 + 10 + 8 + 4} = \\frac{1584}{33} = 48$.)\nJadi, jawaban yang tepat adalah **A. 6**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat A. $6$.' }]
        }
      ]
    },
    {
      no: 20,
      title: 'Pengaruh Transformasi Pergeseran Data terhadap Ukuran Statistika',
      marks: 1,
      stem: 'Untuk memudahkan perhitungan, semua nilai data pengamatan dikurangi $1300$. Nilai-nilai baru menghasilkan jangkauan $28$, rataan hitung $11{,}7$, simpangan kuartil $7{,}4$, dan modus $12$. Data aslinya mempunyai pernyataan:\n(1) rataan hitung $= 1311{,}7$\n(2) jangkauan $= 28$\n(3) modus $= 1312$\n(4) simpangan kuartil $= 657{,}4$',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'Pernyataan yang benar adalah ....\n\nA. $(1), (2),$ dan $(3)$\nB. $(1)$ dan $(3)$\nC. $(2)$ dan $(4)$\nD. $(4)$\nE. Semua benar',
          answer: 'A. $(1), (2),$ dan $(3)$',
          principle:
            'Jika setiap data ditransformasikan menjadi $y_i = x_i - c$ (sehingga $x_i = y_i + c$), maka ukuran pemusatan dan letak (rataan, median, modus, kuartil) berubah sebesar $+c$, sedangkan ukuran penyebaran (jangkauan, simpangan kuartil, simpangan baku, varians) tetap tidak berubah.',
          solution:
            'Karena data baru diperoleh dari $y_i = x_i - 1300$, maka data asli memenuhi $x_i = y_i + 1300$:\n1. **Rataan hitung asli:** $\\bar{x} = \\bar{y} + 1300 = 11{,}7 + 1300 = 1311{,}7$ $\\implies$ pernyataan **(1) benar**.\n2. **Jangkauan asli:** $R_x = x_{\\max} - x_{\\min} = (y_{\\max} + 1300) - (y_{\\min} + 1300) = y_{\\max} - y_{\\min} = 28$ $\\implies$ pernyataan **(2) benar**.\n3. **Modus asli:** $\\text{Mo}_x = \\text{Mo}_y + 1300 = 12 + 1300 = 1312$ $\\implies$ pernyataan **(3) benar**.\n4. **Simpangan kuartil asli:** $Q_{d,x} = \\frac{1}{2}(Q_{3,x} - Q_{1,x}) = \\frac{1}{2}((Q_{3,y} + 1300) - (Q_{1,y} + 1300)) = Q_{d,y} = 7{,}4 \\neq 657{,}4$ $\\implies$ pernyataan **(4) salah**.\n\nJadi, pernyataan yang benar adalah $(1), (2),$ dan $(3)$, yaitu **A. (1), (2), dan (3)**.',
          rubric: [{ code: 'A1', text: 'Memilih jawaban tepat A. $(1), (2),$ dan $(3)$.' }]
        }
      ]
    }
  ]
};
