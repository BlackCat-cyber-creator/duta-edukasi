import { bab, dasar, sedang, tantangan } from '../author.js';

export default bab({
  grade: 12,
  number: 3,
  slug: 'hukum-mendel-dan-hereditas-manusia',
  title: 'Hukum Mendel, Penyimpangan Semu, dan Hereditas Manusia',
  element: 'Pemahaman Biologi: persilangan monohibrid-dihibrid, epistasis, pautan dan pindah silang, mutasi kromosom/gen, serta penurunan kelainan genetik dan golongan darah',
  summary: {
    overview: 'Pewarisan sifat dipelajari melalui hukum Mendel yang menjelaskan segregasi alel dan pemilahan bebas, serta berbagai penyimpangan semu seperti dominansi tidak sempurna, kodominansi, alel ganda, epistasis, pautan, dan pindah silang. Bab ini juga membahas hereditas manusia: golongan darah ABO, pautan seks (hemofilia dan buta warna), silsilah, serta kelainan akibat mutasi kromosom, dilengkapi perhitungan peluang, rasio fenotipe, dan nilai pindah silang.',
    coreConcepts: [
      'Istilah dan Hukum Mendel I: Gen menempati lokus pada kromosom dan memiliki bentuk alternatif yang disebut alel. Genotipe adalah susunan alel, fenotipe adalah sifat yang tampak. Hukum Mendel I (segregasi) menyatakan pasangan alel berpisah saat pembentukan gamet. Persilangan monohibrid Tt × Tt menghasilkan fenotipe 3:1 dan genotipe 1:2:1 pada F2. Uji silang dengan homozigot resesif mengungkap genotipe individu dominan.',
      'Hukum Mendel II dan Peluang: Hukum pemilahan bebas menyatakan alel dari gen berbeda memilah secara bebas. Persilangan dihibrid AaBb × AaBb menghasilkan fenotipe 9:3:3:1. Jumlah macam gamet 2 pangkat n dan jumlah genotipe F2 adalah 3 pangkat n. Peluang kejadian bebas dikalikan, sedangkan peluang kejadian saling lepas dijumlahkan.',
      'Penyimpangan Semu Hukum Mendel: Dominansi tidak sempurna menghasilkan fenotipe intermediet (rasio 1:2:1, contohnya bunga Mirabilis jalapa). Kodominansi menampakkan kedua alel (golongan darah AB). Alel ganda dijumpai pada golongan darah ABO (Iᴬ, Iᴮ, i). Epistasis memodifikasi rasio 9:3:3:1 menjadi 9:3:4, 12:3:1, 9:7, atau 15:1.',
      'Pautan dan Pindah Silang: Gen-gen pada kromosom yang sama cenderung diwariskan bersama (pautan). Pindah silang pada profase I meiosis menghasilkan gamet rekombinan. Nilai pindah silang (NPS) = jumlah rekombinan dibagi total keturunan dikali 100 persen, dan 1 persen NPS setara dengan 1 centiMorgan sebagai jarak antargen pada peta kromosom.',
      'Hereditas pada Manusia: Penentuan jenis kelamin XX (perempuan) dan XY (laki-laki). Hemofilia dan buta warna diwariskan secara resesif terpaut X; perempuan XᴴXʰ adalah pembawa, sedangkan laki-laki cukup satu alel resesif untuk sakit. Kelainan autosomal contohnya albino (resesif) dan polidaktili (dominan). Silsilah (pedigree) membantu menelusuri pola pewarisan.',
      'Mutasi Kromosom dan Kelainan Genetik: Kelainan jumlah kromosom (aneuploidi) akibat gagal berpisah (nondisjunction) meliputi sindrom Down (trisomi 21, 47 kromosom), Turner (45,X), dan Klinefelter (47,XXY). Perubahan struktur kromosom meliputi delesi, duplikasi, inversi, dan translokasi. Mutagen seperti radiasi dan bahan kimia dapat meningkatkan laju mutasi.'
    ],
    keyFormulas: [
      { label: 'Jumlah Gamet dan Genotipe F2', formula: '\\text{jumlah gamet} = 2^{n} \\qquad \\text{genotipe F}_2 = 3^{n} \\quad (n = \\text{jumlah gen heterozigot})' },
      { label: 'Aturan Peluang', formula: 'P(A \\text{ dan } B) = P(A) \\times P(B) \\qquad P(A \\text{ atau } B) = P(A) + P(B)' },
      { label: 'Rasio Fenotipe Dihibrid dan Modifikasinya', formula: '9:3:3:1 \\qquad 9:3:4 \\qquad 12:3:1 \\qquad 9:7 \\qquad 15:1' },
      { label: 'Nilai Pindah Silang', formula: '\\text{NPS} = \\dfrac{\\text{jumlah rekombinan}}{\\text{total keturunan}} \\times 100\\%' }
    ],
    workedExamples: [
      {
        title: 'Persilangan monohibrid dan perkiraan jumlah keturunan',
        problem: 'Tanaman tinggi (T) dominan atas pendek (t). Tt × Tt menghasilkan 160 keturunan. Berapa perkiraan keturunan tinggi dan pendek, dan genotipenya?',
        solution: 'Rasio genotipe 1 TT : 2 Tt : 1 tt sehingga 40 TT, 80 Tt, 40 tt. Fenotipe tinggi = 40 + 80 = 120 dan pendek = 40 (rasio 3:1).'
      },
      {
        title: 'Persilangan dihibrid dan perkiraan jumlah keturunan',
        problem: 'RrYy × RrYy (R bulat dominan, Y kuning dominan) menghasilkan 160 keturunan. Tentukan jumlah tiap fenotipe.',
        solution: 'Rasio 9:3:3:1 dari 16 bagian sehingga satu bagian = 160 / 16 = 10. Bulat kuning 90, bulat hijau 30, keriput kuning 30, keriput hijau 10.'
      },
      {
        title: 'Menghitung nilai pindah silang',
        problem: 'Uji silang menghasilkan 400 keturunan, dengan 340 bertipe parental dan 60 bertipe rekombinan. Hitung NPS dan jarak antargen.',
        solution: 'NPS = 60 / 400 × 100% = 15%. Jarak antargen pada peta kromosom adalah 15 centiMorgan.'
      }
    ],
    misconceptions: [
      'Menganggap alel dominan selalu paling banyak di populasi. Dominan hanya menggambarkan alel yang tampak pada heterozigot, bukan frekuensinya.',
      'Menganggap fenotipe sepenuhnya ditentukan genotipe. Fenotipe dipengaruhi genotipe bersama lingkungan, misalnya warna bunga hortensia yang dipengaruhi pH tanah.',
      'Mengira rasio 9:3:3:1 selalu berlaku pada dihibrid. Rasio ini berubah bila terjadi pautan, epistasis, atau penyimpangan lain.',
      'Menganggap laki-laki dapat menjadi pembawa hemofilia. Laki-laki hanya memiliki satu kromosom X sehingga satu alel resesif sudah menyebabkan sakit.'
    ],
    tutorTip: 'Untuk soal peluang, urai persilangan multi-gen menjadi persilangan monohibrid terpisah lalu kalikan peluangnya. Untuk soal pautan seks, tulis genotipe lengkap (XᴴXʰ, XᴴY) dan gunakan kotak Punnett.'
  },
  questions: [
    dasar(
      'Individu dengan genotipe Tt disebut...',
      ['homozigot dominan', 'heterozigot', 'homozigot resesif', 'hemizigot'],
      'B',
      'Heterozigot memiliki dua alel yang berbeda.',
      'Genotipe Tt memiliki dua alel berbeda sehingga disebut heterozigot. Homozigot memiliki dua alel sama (TT atau tt).'
    ),
    dasar(
      'Hukum Mendel I dikenal juga sebagai hukum...',
      ['pemilahan bebas', 'dominansi mutlak', 'pautan gen', 'segregasi (pemisahan alel pada pembentukan gamet)'],
      'D',
      'Pasangan alel berpisah ketika gamet dibentuk.',
      'Hukum Mendel I menyatakan bahwa pasangan alel berpisah secara bebas pada pembentukan gamet sehingga tiap gamet membawa satu alel. Hukum II adalah pemilahan bebas.'
    ),
    dasar(
      'Rasio fenotipe F2 persilangan monohibrid dengan dominansi penuh adalah...',
      ['3 : 1', '9 : 3 : 3 : 1', '1 : 1', '1 : 2 : 1'],
      'A',
      'Tt × Tt menghasilkan tiga individu dominan untuk satu resesif.',
      'Tt × Tt menghasilkan TT, Tt, Tt, tt sehingga fenotipe dominan : resesif = 3 : 1. Rasio 1:2:1 adalah rasio genotipe atau fenotipe pada dominansi tidak sempurna.'
    ),
    dasar(
      'Genotipe AaBb dapat menghasilkan macam gamet sebanyak...',
      ['1', '2', '4', '8'],
      'C',
      'Gunakan 2 pangkat jumlah gen heterozigot.',
      'AaBb heterozigot pada dua gen sehingga jumlah gamet = 2² = 4, yaitu AB, Ab, aB, dan ab.'
    ),
    dasar(
      'Gen penyebab hemofilia terletak pada...',
      ['autosom dan bersifat dominan', 'kromosom Y', 'kromosom 21', 'kromosom X dan bersifat resesif'],
      'D',
      'Hemofilia lebih sering ditemukan pada laki-laki.',
      'Hemofilia disebabkan gen resesif pada kromosom X. Laki-laki yang hanya memiliki satu X lebih mudah menderita daripada perempuan.'
    ),
    sedang(
      'Bunga Mirabilis jalapa merah (MM) disilangkan dengan putih (mm) menghasilkan F1 merah muda. Rasio fenotipe F2 hasil persilangan sesama F1 adalah...',
      ['3 merah : 1 putih', '9 : 3 : 3 : 1', '1 merah : 2 merah muda : 1 putih', '1 merah : 1 putih'],
      'C',
      'Dominansi tidak sempurna menghasilkan fenotipe intermediet.',
      'F1 adalah Mm (merah muda). Mm × Mm menghasilkan 1 MM (merah) : 2 Mm (merah muda) : 1 mm (putih), sehingga rasio fenotipe sama dengan rasio genotipe, yaitu 1:2:1.'
    ),
    sedang(
      'Seorang ibu bergolongan darah A heterozigot (IAi) menikah dengan ayah bergolongan darah B heterozigot (IBi). Kemungkinan golongan darah anaknya adalah...',
      ['A, B, AB, dan O masing-masing 25 persen', 'hanya AB', 'hanya O', 'hanya A dan B'],
      'A',
      'Buat kotak Punnett dari gamet IA, i dengan IB, i.',
      'Gamet ibu IA atau i, gamet ayah IB atau i. Keturunan: IAIB (AB), IAi (A), IBi (B), ii (O), masing-masing peluang 1/4.'
    ),
    sedang(
      'Pada persilangan RrYy × RrYy, peluang diperoleh keturunan bulat-kuning ($\\text{R\\_Y\\_}$) adalah...',
      ['3/16', '9/16', '1/16', '3/4'],
      'B',
      'Peluang R_ = 3/4 dan peluang Y_ = 3/4.',
      'P(R_) = 3/4 dan P(Y_) = 3/4. Karena bebas, peluang $\\text{R\\_Y\\_}$ = 3/4 × 3/4 = 9/16.'
    ),
    sedang(
      'Seorang perempuan pembawa hemofilia (XᴴXʰ) menikah dengan laki-laki normal (XᴴY). Peluang mereka memiliki anak laki-laki penderita hemofilia dari seluruh anak adalah...',
      ['25 persen', '50 persen', '0 persen', '100 persen'],
      'A',
      'Gunakan kotak Punnett dan perhatikan genotipe anak laki-laki XʰY.',
      'Keturunan: XᴴXᴴ, XᴴXʰ, XᴴY, XʰY, masing-masing 1/4. Anak laki-laki hemofilia (XʰY) = 1/4 atau 25 persen dari seluruh anak.'
    ),
    sedang(
      'Pada persilangan AaBb × AaBb dengan epistasis resesif (aa menutupi ekspresi gen B), rasio fenotipe F2 adalah...',
      ['9 : 3 : 3 : 1', '12 : 3 : 1', '9 : 7', '9 : 3 : 4'],
      'D',
      'Kelas aa__ (4 bagian dari 16) berfenotipe sama.',
      'Epistasis resesif menggabungkan kelas aaB_ dan aabb menjadi satu fenotipe (3 + 1 = 4), sehingga rasio menjadi 9 : 3 : 4.'
    ),
    tantangan(
      'Tanaman berbunga ungu (dominan) disilangkan dengan tanaman berbunga putih (resesif) dan menghasilkan 50 persen ungu dan 50 persen putih. Genotipe tanaman ungu tersebut adalah...',
      ['homozigot dominan', 'heterozigot', 'homozigot resesif', 'tidak dapat ditentukan'],
      'B',
      'Keturunan putih hanya mungkin jika induk ungu membawa alel resesif.',
      'Jika induk ungu homozigot dominan, semua keturunan akan ungu. Munculnya 50 persen putih menunjukkan induk ungu membawa alel resesif sehingga heterozigot.'
    ),
    tantangan(
      'Uji silang menghasilkan 400 keturunan, 340 bertipe parental dan 60 bertipe rekombinan. Nilai pindah silangnya adalah...',
      ['6 persen', '10 persen', '15 persen', '85 persen'],
      'C',
      'NPS dihitung dari keturunan rekombinan saja.',
      'NPS = rekombinan / total × 100% = 60 / 400 × 100% = 15 persen.'
    ),
    tantangan(
      'Pada persilangan AaBbCc × AaBbCc, peluang keturunan berfenotipe $\\text{A\\_bbC\\_}$ adalah...',
      ['9/64', '27/64', '3/16', '1/64'],
      'A',
      'Kalikan peluang tiap gen: A_, bb, dan C_.',
      'P(A_) = 3/4, P(bb) = 1/4, dan P(C_) = 3/4. Peluang total = 3/4 × 1/4 × 3/4 = 9/64.'
    ),
    tantangan(
      'Persilangan AaBb × AaBb dengan epistasis dominan (adanya A menutupi ekspresi B) menghasilkan rasio 12 : 3 : 1. Jika terdapat 160 keturunan, jumlah keturunan pada kelas terbesar adalah...',
      ['90', '100', '120', '30'],
      'C',
      'Satu bagian = jumlah keturunan dibagi 16.',
      'Satu bagian = 160 / 16 = 10. Kelas terbesar bernilai 12 bagian = 12 × 10 = 120 individu.'
    ),
    tantangan(
      'Seorang anak sindrom Down memiliki 47 kromosom dengan trisomi 21. Penyebab yang paling tepat adalah...',
      ['delesi lengan kromosom 21', 'kesalahan mitosis pada sel somatik anak', 'mutasi gen tunggal yang bersifat resesif', 'kegagalan pemisahan kromosom 21 (nondisjunction) saat meiosis pembentukan gamet'],
      'D',
      'Jumlah kromosom 47 menunjukkan kelebihan satu kromosom.',
      'Nondisjunction pada meiosis menghasilkan gamet dengan dua kromosom 21. Setelah fertilisasi dengan gamet normal terbentuk zigot trisomi 21 dengan 47 kromosom.'
    )
  ]
});
