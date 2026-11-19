import { bab, dasar, sedang, tantangan } from '../author.js';

export default bab({
  grade: 10,
  number: 3,
  slug: 'fungi-plantae-dan-animalia',
  title: 'Fungi, Plantae, dan Animalia',
  element: 'Pemahaman Biologi: ciri morfologi dan daur hidup lumut-paku-tumbuhan berbiji, struktur hifa fungi, serta filum hewan invertebrata dan vertebrata',
  summary: {
    overview: 'Fungi, Plantae, dan Animalia adalah tiga kingdom eukariotik multiseluler yang paling sering dijumpai sehari-hari. Bab ini membahas ciri hifa dan klasifikasi fungi, perbedaan lumut, paku, dan tumbuhan berbiji termasuk pergiliran keturunan dan fertilisasi ganda, serta pengelompokan hewan invertebrata (Porifera sampai Echinodermata) dan vertebrata berdasarkan simetri tubuh, rongga tubuh, alat gerak, dan kerangka.',
    coreConcepts: [
      'Ciri dan Klasifikasi Fungi: Fungi bersifat eukariotik, heterotrof secara absorptif (mengeluarkan enzim ke lingkungan lalu menyerap nutrien), berdinding sel kitin, dan tersusun atas hifa yang membentuk miselium. Zygomycota berhifa tanpa sekat dan membentuk zigospora (Rhizopus), Ascomycota membentuk askus dengan askospora (Saccharomyces, Penicillium), Basidiomycota membentuk basidium dengan basidiospora (jamur tiram dan merang).',
      'Simbiosis Fungi: Lumut kerak (lichen) adalah simbiosis mutualisme antara fungi dan alga atau sianobakteri, sedangkan mikoriza adalah simbiosis antara fungi dan akar tumbuhan yang membantu penyerapan air serta mineral, terutama fosfat. Fungi juga berperan sebagai pengurai dan bahan fermentasi (tempe, tape, roti).',
      'Lumut dan Paku: Lumut (Bryophyta) tidak berpembuluh dan fase dominannya gametofit yang menempel pada sporofit. Paku (Pteridophyta) berpembuluh (xilem dan floem), berspora, dan fase dominannya sporofit yang berdaun, berbatang, dan berakar; gametofitnya berupa protalus kecil yang hidup bebas.',
      'Tumbuhan Berbiji dan Fertilisasi Ganda: Gymnospermae berbiji terbuka (Pinus, Cycas, Ginkgo, Gnetum) tanpa bunga sejati. Angiospermae berbiji tertutup dalam ovarium, terbagi menjadi monokotil dan dikotil, dan mengalami fertilisasi ganda: satu sperma membuahi ovum membentuk zigot (2n), sperma lain bergabung dengan dua inti kandung lembaga sekunder membentuk endosperma (3n).',
      'Invertebrata: Porifera (spons, berpori, koanosit), Cnidaria (knidosit, polip dan medusa), Platyhelminthes (cacing pipih, tanpa rongga tubuh), Nematoda (cacing gilig, pseudoselomata), Annelida (bersegmen, selomata), Mollusca (tubuh lunak, mantel, radula), Arthropoda (kaki beruas, eksoskeleton kitin), dan Echinodermata (kulit berduri, simetri radial pada dewasa, sistem ambulakral).',
      'Vertebrata dan Kelas Arthropoda: Vertebrata terbagi atas Pisces (insang, sirip), Amphibia (metamorfosis, kulit lembap), Reptilia (bersisik, telur bercangkang), Aves (berbulu, berdarah panas, sayap), dan Mammalia (berambut, kelenjar susu). Insecta bertubuh tiga bagian dengan tiga pasang kaki, Arachnida bertubuh dua bagian dengan empat pasang kaki dan tanpa antena.'
    ],
    keyFormulas: [
      { label: 'Pergiliran Keturunan (Metagenesis)', formula: '\\text{sporofit}\\,(2n) \\xrightarrow{\\text{meiosis}} \\text{spora}\\,(n) \\longrightarrow \\text{gametofit}\\,(n) \\xrightarrow{\\text{mitosis}} \\text{gamet}\\,(n) \\xrightarrow{\\text{fertilisasi}} \\text{zigot}\\,(2n)' },
      { label: 'Fertilisasi Ganda Angiospermae', formula: 'n_{\\text{sperma}} + n_{\\text{ovum}} \\to 2n_{\\text{zigot}} \\qquad n_{\\text{sperma}} + (n + n)_{\\text{inti polar}} \\to 3n_{\\text{endosperma}}' },
      { label: 'Tingkat Ploidi pada Daur Hidup Tumbuhan', formula: '\\text{spora} = n \\quad \\text{gamet} = n \\quad \\text{zigot} = 2n \\quad \\text{endosperma} = 3n' }
    ],
    workedExamples: [
      {
        title: 'Menentukan jumlah kromosom pada daur hidup jagung',
        problem: 'Sel tubuh jagung memiliki 20 kromosom (2n = 20). Berapa kromosom pada spora, sel telur, dan endosperma?',
        solution: 'Spora dan sel telur adalah sel haploid (n) sehingga masing-masing 10 kromosom. Endosperma terbentuk dari penggabungan satu sperma (n) dan dua inti kandung lembaga sekunder (n + n) sehingga bersifat triploid (3n) = 30 kromosom.'
      },
      {
        title: 'Mengidentifikasi kelas Arthropoda dari ciri morfologi',
        problem: 'Hewan A memiliki tiga bagian tubuh, tiga pasang kaki, dan satu pasang antena. Hewan B memiliki dua bagian tubuh, empat pasang kaki, dan tidak memiliki antena. Tentukan kelas masing-masing.',
        solution: 'Hewan A memiliki kepala, dada, dan abdomen dengan enam kaki dan antena sehingga termasuk Insecta (misalnya belalang). Hewan B memiliki sefalotoraks dan abdomen dengan delapan kaki tanpa antena sehingga termasuk Arachnida (misalnya laba-laba).'
      },
      {
        title: 'Menentukan filum fungi dari struktur reproduksinya',
        problem: 'Jamur P berhifa tanpa sekat dan membentuk zigospora. Jamur Q membentuk askus berisi askospora. Jamur R membentuk tubuh buah berbentuk payung dengan basidium. Tentukan filum masing-masing.',
        solution: 'Hifa tanpa sekat dengan zigospora menandakan Zygomycota (misalnya Rhizopus). Askus dengan askospora menandakan Ascomycota (misalnya Saccharomyces). Basidium pada tubuh buah berbentuk payung menandakan Basidiomycota (misalnya jamur tiram).'
      }
    ],
    misconceptions: [
      'Menganggap jamur termasuk tumbuhan karena tidak bergerak. Fungi heterotrof, tidak berklorofil, dan berdinding sel kitin sehingga berada pada kingdom tersendiri dan lebih dekat dengan hewan daripada tumbuhan.',
      'Mengira paku dan lumut sama-sama berbiji. Lumut dan paku berkembang biak dengan spora; hanya Gymnospermae dan Angiospermae yang menghasilkan biji.',
      'Mengira semua cacing berada dalam satu filum. Cacing pipih (Platyhelminthes), cacing gilig (Nematoda), dan cacing bersegmen (Annelida) adalah tiga filum yang berbeda.',
      'Menganggap semua mamalia melahirkan. Monotremata seperti platipus dan landak semut bertelur, tetapi tetap tergolong mamalia karena berambut dan menyusui anaknya.'
    ],
    tutorTip: 'Untuk soal daur hidup tumbuhan, tandai tingkat ploidi di setiap tahap: meiosis mengubah 2n menjadi n, fertilisasi mengubah n menjadi 2n. Untuk soal klasifikasi hewan, urutkan pertanyaan: simetri tubuh, ada tidaknya rongga tubuh, segmentasi, lalu alat gerak atau eksoskeleton.'
  },
  questions: [
    dasar(
      'Dinding sel fungi tersusun atas...',
      ['kitin', 'selulosa', 'peptidoglikan', 'lignin'],
      'A',
      'Zat ini juga menyusun kerangka luar serangga.',
      'Dinding sel fungi tersusun atas kitin. Selulosa menyusun dinding sel tumbuhan, peptidoglikan dinding sel bakteri, dan lignin memperkuat jaringan kayu.'
    ),
    dasar(
      'Pada tumbuhan lumut, fase yang dominan dalam daur hidupnya adalah...',
      ['sporofit berpembuluh yang berdaun sejati', 'zigot yang hidup bebas', 'gametofit haploid yang berklorofil dan hidup bebas', 'spora yang berukuran paling besar'],
      'C',
      'Lumut tidak berpembuluh dan sporofitnya menempel pada tumbuhan induk.',
      'Pada lumut, tumbuhan hijau yang tampak sehari-hari adalah gametofit haploid (n). Sporofitnya (2n) berukuran kecil, tidak mandiri, dan menempel pada gametofit.'
    ),
    dasar(
      'Pinus dan Cycas yang bijinya tidak terlindung dalam ovarium termasuk kelompok...',
      ['Angiospermae', 'Gymnospermae', 'Pteridophyta', 'Bryophyta'],
      'B',
      'Gymnos berarti telanjang.',
      'Tumbuhan berbiji terbuka (biji tidak tertutup daun buah) disebut Gymnospermae, misalnya Pinus, Cycas, Ginkgo, dan Gnetum. Angiospermae berbiji tertutup.'
    ),
    dasar(
      'Hewan yang tubuhnya terdiri atas kepala, dada, dan abdomen serta memiliki tiga pasang kaki termasuk kelas...',
      ['Arachnida', 'Crustacea', 'Myriapoda', 'Insecta'],
      'D',
      'Hitung jumlah kaki dan bagian tubuhnya.',
      'Insecta bertubuh tiga bagian (kepala, dada, abdomen) dengan tiga pasang kaki. Arachnida memiliki delapan kaki, Crustacea memiliki dua pasang antena, dan Myriapoda memiliki banyak ruas dan kaki.'
    ),
    dasar(
      'Ciri khas Aves (burung) yang membedakannya dari kelas vertebrata lain adalah...',
      ['kulit berkelenjar lendir dan bermetamorfosis', 'tubuh tertutup sisik kering dan suhu tubuh bergantung lingkungan', 'tubuh tertutup bulu, berdarah panas, dan tungkai depan berupa sayap', 'memiliki kelenjar susu, berambut, dan sebagian besar melahirkan'],
      'C',
      'Pikirkan struktur penutup tubuh khas burung.',
      'Aves memiliki bulu, berdarah panas (endoterm), dan tungkai depan termodifikasi menjadi sayap. Kelenjar lendir dan metamorfosis ciri Amphibia, sisik ciri Reptilia, kelenjar susu ciri Mammalia.'
    ),
    sedang(
      'Rhizopus oryzae pembuat tempe digolongkan ke Zygomycota karena...',
      ['membentuk basidium berisi basidiospora pada tubuh buah', 'membentuk askus berisi delapan askospora dalam kantung', 'hifanya bersekat dan tidak membentuk spora', 'hifanya tidak bersekat dan reproduksi seksualnya membentuk zigospora'],
      'D',
      'Zygo berasal dari zigospora.',
      'Zygomycota memiliki hifa senositik (tanpa sekat melintang) dan reproduksi seksual menghasilkan zigospora. Basidium khas Basidiomycota, askus khas Ascomycota.'
    ),
    sedang(
      'Lumut kerak (lichen) merupakan hasil simbiosis antara...',
      ['fungi dengan alga atau sianobakteri yang saling menguntungkan', 'fungi dengan akar tumbuhan tingkat tinggi yang membantu serapan hara', 'alga dengan bakteri patogen yang merugikan salah satu pihak', 'lumut hati dengan tumbuhan paku yang hidup berdampingan'],
      'A',
      'Simbiosis fungi dengan akar disebut mikoriza, bukan lichen.',
      'Lichen adalah mutualisme: fungi melindungi dan menyediakan air serta mineral, sedangkan alga atau sianobakteri berfotosintesis menyediakan makanan. Simbiosis fungi dengan akar adalah mikoriza.'
    ),
    sedang(
      'Perbedaan utama tumbuhan paku dengan lumut adalah...',
      ['paku tidak berpembuluh sedangkan lumut sudah memiliki xilem dan floem', 'paku berpembuluh dengan sporofit dominan, lumut tak berpembuluh dengan gametofit dominan', 'paku berbiji sedangkan lumut berkembang biak dengan spora saja', 'fase dominan paku adalah gametofit yang berukuran lebih besar'],
      'B',
      'Bandingkan keberadaan xilem-floem dan fase dominan masing-masing.',
      'Paku memiliki xilem dan floem sehingga tumbuh lebih besar, dan fase dominannya sporofit. Lumut tidak berpembuluh, fase dominannya gametofit. Keduanya berkembang biak dengan spora, bukan biji.'
    ),
    sedang(
      'Sel tubuh jagung memiliki 20 kromosom (2n = 20). Jumlah kromosom pada sel endosperma bijinya adalah...',
      ['10', '20', '40', '30'],
      'D',
      'Endosperma angiospermae bersifat triploid (3n).',
      'Endosperma terbentuk dari satu sperma (n = 10) dan dua inti kandung lembaga sekunder (2 × 10). Jumlah kromosomnya 10 + 20 = 30 (3n).'
    ),
    sedang(
      'Cacing tanah bertubuh bersegmen (metameri), memiliki rongga tubuh sejati, dan bergerak dengan bantuan seta. Cacing tanah termasuk filum...',
      ['Annelida', 'Nematoda', 'Platyhelminthes', 'Mollusca'],
      'A',
      'Annulus berarti cincin.',
      'Tubuh bersegmen seperti cincin dan selomata adalah ciri Annelida. Nematoda tidak bersegmen dan pseudoselomata, Platyhelminthes pipih dan tanpa rongga tubuh, Mollusca bertubuh lunak tanpa segmen.'
    ),
    tantangan(
      'Bintang laut dewasa bersimetri radial, berkulit berduri, dan bergerak dengan kaki tabung yang digerakkan sistem ambulakral. Filum bintang laut adalah...',
      ['Cnidaria', 'Echinodermata', 'Mollusca', 'Porifera'],
      'B',
      'Echinos berarti duri, derma berarti kulit.',
      'Kulit berduri, simetri radial pada dewasa, dan sistem ambulakral berkaki tabung adalah ciri Echinodermata. Cnidaria memiliki knidosit, Mollusca bermantel, Porifera berpori tanpa jaringan sejati.'
    ),
    tantangan(
      'Hewan memiliki ciri: bilateral simetris, tidak bersegmen, rongga tubuh semu (pseudoselom), saluran pencernaan lengkap, dan tubuh gilig berkutikula. Hewan tersebut adalah...',
      ['cacing pita', 'cacing tanah', 'cacing gelang (Ascaris)', 'Hydra'],
      'C',
      'Tubuh gilig dan pseudoselomata adalah ciri khas satu filum cacing.',
      'Tubuh gilig dengan kutikula dan pseudoselom adalah ciri Nematoda, misalnya cacing gelang Ascaris. Cacing pita berasal dari Platyhelminthes, cacing tanah dari Annelida, Hydra dari Cnidaria.'
    ),
    tantangan(
      'Tumbuhan berbiji lebih berhasil menguasai habitat darat dibandingkan paku terutama karena...',
      ['embrio terlindungi biji berbekal cadangan makanan dan penyerbukan tidak memerlukan air', 'sperma tumbuhan berbiji berflagel dan berenang bebas di permukaan tanah yang basah', 'fase gametofitnya dominan, berukuran besar, dan hidup bebas di tanah', 'tidak memiliki jaringan pembuluh sehingga tubuhnya lebih ringan dan mudah menyebar'],
      'A',
      'Bandingkan ketergantungan pembuahan pada air dan perlindungan embrio.',
      'Biji melindungi embrio dari kekeringan dan menyediakan cadangan makanan, sedangkan penyerbukan membuat pembuahan tidak bergantung pada air bebas. Paku memerlukan air agar sperma berflagel dapat berenang menuju sel telur.'
    ),
    tantangan(
      'Sel daun sebuah tumbuhan paku memiliki 48 kromosom. Pernyataan yang benar mengenai daur hidupnya adalah...',
      ['spora memiliki 48 kromosom karena dibentuk melalui mitosis', 'protalus memiliki 48 kromosom karena tumbuh dari sel diploid', 'sel telur memiliki 48 kromosom karena berasal dari sel daun', 'spora dan protalus memiliki 24 kromosom, sedangkan zigot memiliki 48 kromosom'],
      'D',
      'Spora dibentuk melalui meiosis pada sporangium.',
      'Daun paku adalah sporofit diploid (2n = 48). Meiosis di sporangium menghasilkan spora haploid (24) yang tumbuh menjadi protalus (24). Gamet juga 24, dan peleburannya menghasilkan zigot (48).'
    ),
    tantangan(
      'Pernyataan yang benar mengenai kelas vertebrata adalah...',
      ['Amphibia berkulit kering bersisik dan bertelur bercangkang keras', 'Reptilia berdarah panas dan berkelenjar susu untuk anaknya', 'Mammalia berambut dan berkelenjar susu; sebagian besar melahirkan, kecuali monotremata', 'Pisces bernapas dengan paru-paru dan memiliki sirip tungkai'],
      'C',
      'Periksa penutup tubuh, suhu tubuh, dan cara bereproduksi masing-masing kelas.',
      'Mammalia dicirikan oleh rambut dan kelenjar susu; mayoritas melahirkan, tetapi monotremata (platipus, landak semut) bertelur. Amphibia berkulit lembap, Reptilia berdarah dingin, dan Pisces bernapas dengan insang.'
    )
  ]
});
