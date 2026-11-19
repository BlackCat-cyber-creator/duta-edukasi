import { bab, dasar, sedang, tantangan } from '../author.js';

export default bab({
  grade: 11,
  number: 3,
  slug: 'sistem-gerak-sirkulasi-dan-pencernaan',
  title: 'Sistem Gerak, Sirkulasi Darah, dan Pencernaan',
  element: 'Pemahaman Biologi: mekanisme kontraksi otot, komponen darah dan siklus jantung, serta enzim dan penyerapan nutrisi pencernaan',
  summary: {
    overview: 'Sistem gerak, sirkulasi, dan pencernaan bekerja terpadu menyediakan energi serta menggerakkan tubuh manusia. Bab ini membahas tulang, sendi, dan mekanisme kontraksi otot menurut teori filamen geser, komponen darah, golongan darah, struktur jantung dan peredaran ganda, hingga proses pencernaan kimiawi oleh berbagai enzim dan penyerapan nutrisi di usus halus, lengkap dengan perhitungan curah jantung, tekanan arteri rerata, dan energi nutrisi.',
    coreConcepts: [
      'Tulang, Sendi, dan Otot: Rangka dewasa terdiri atas 206 tulang (aksial dan apendikular). Sendi dibedakan menjadi sendi mati, sendi kaku, dan sendi gerak (engsel, putar, pelana, peluru). Otot hanya dapat menarik sehingga bekerja berpasangan secara antagonis, misalnya biseps (fleksor) dan triseps (ekstensor). Gangguan meliputi osteoporosis, rakitis, skoliosis, kifosis, dan lordosis.',
      'Mekanisme Kontraksi Otot: Menurut teori filamen geser, ion Ca²⁺ membuka sisi pengikatan pada aktin sehingga kepala miosin dapat mengikat aktin dan menariknya menggunakan energi ATP. Filamen aktin bergeser ke tengah sarkomer dan sarkomer memendek tanpa perubahan panjang filamen itu sendiri.',
      'Darah dan Golongan Darah: Darah terdiri atas plasma (sekitar 55 persen), eritrosit (hemoglobin pengangkut O₂), leukosit (pertahanan), dan trombosit (pembekuan). Sistem ABO ditentukan aglutinogen pada eritrosit dan aglutinin pada plasma; golongan AB tidak memiliki aglutinin sehingga penerima universal, golongan O tidak memiliki aglutinogen sehingga donor universal.',
      'Jantung dan Peredaran Darah: Jantung memiliki empat ruang: atrium kanan dan kiri serta ventrikel kanan dan kiri, dengan katup trikuspid, bikuspid, dan semilunar. Peredaran darah manusia ganda dan tertutup: sirkulasi paru (ventrikel kanan, paru, atrium kiri) dan sirkulasi sistemik (ventrikel kiri, seluruh tubuh, atrium kanan). Curah jantung dan tekanan darah mencerminkan kinerja jantung.',
      'Pencernaan Kimiawi dan Penyerapan: Amilase ludah mulai mencerna pati di mulut; pepsin dengan HCl mencerna protein di lambung; empedu mengemulsi lemak, sedangkan lipase, amilase, dan tripsin pankreas bekerja di usus halus. Glukosa dan asam amino diserap vili ke kapiler darah, sedangkan asam lemak dan gliserol diserap ke pembuluh kil. Usus besar menyerap air dan membentuk feses.',
      'Energi Nutrisi dan Organ Penunjang: Karbohidrat dan protein menyediakan sekitar 4 kkal per gram, sedangkan lemak sekitar 9 kkal per gram. Hati memproduksi empedu, menyimpan glikogen, dan menetralkan racun, sedangkan pankreas menghasilkan enzim pencernaan serta insulin dan glukagon.'
    ],
    keyFormulas: [
      { label: 'Curah Jantung', formula: 'CO = HR \\times SV' },
      { label: 'Tekanan Arteri Rerata', formula: 'MAP \\approx P_d + \\dfrac{P_s - P_d}{3}' },
      { label: 'Energi Nutrisi', formula: 'E\\,(\\text{kkal}) = 4K + 4P + 9L' },
      { label: 'Jalur Peredaran Darah Ganda', formula: '\\text{atrium ka.} \\to \\text{ventrikel ka.} \\to \\text{paru} \\to \\text{atrium ki.} \\to \\text{ventrikel ki.} \\to \\text{aorta}' }
    ],
    workedExamples: [
      {
        title: 'Menghitung curah jantung',
        problem: 'Denyut jantung seseorang 75 kali per menit dan isi sekuncup 70 mL. Berapa curah jantungnya per menit?',
        solution: 'CO = HR × SV = 75 × 70 = 5.250 mL/menit = 5,25 L/menit.'
      },
      {
        title: 'Menghitung tekanan arteri rerata',
        problem: 'Tekanan darah seseorang 120/80 mmHg. Hitung tekanan arteri rerata (MAP).',
        solution: 'MAP ≈ 80 + (120 - 80) / 3 = 80 + 13,3 = 93,3 mmHg.'
      },
      {
        title: 'Menghitung energi makanan',
        problem: 'Sepiring makanan mengandung 50 g karbohidrat, 20 g protein, dan 10 g lemak. Berapa energi totalnya?',
        solution: 'E = (4 × 50) + (4 × 20) + (9 × 10) = 200 + 80 + 90 = 370 kkal.'
      }
    ],
    misconceptions: [
      'Mengira semua arteri membawa darah kaya oksigen dan semua vena membawa darah miskin oksigen. Arteri pulmonalis membawa darah miskin O₂, sedangkan vena pulmonalis membawa darah kaya O₂.',
      'Menganggap otot dapat mendorong tulang. Otot hanya dapat menarik (kontraksi) sehingga untuk gerak berlawanan diperlukan otot antagonis.',
      'Menganggap lambung adalah tempat penyerapan utama. Sebagian besar penyerapan nutrisi terjadi di usus halus yang memiliki vili dan mikrovili.',
      'Mengira empedu mengandung enzim pencernaan lemak. Empedu hanya mengemulsi lemak (menjadi butiran kecil); pemecahan kimiawinya dilakukan enzim lipase.'
    ],
    tutorTip: 'Untuk soal perhitungan jantung, jaga satuan: HR dalam kali per menit dan SV dalam mL. Untuk soal enzim pencernaan, buat tabel tiga kolom: organ, enzim, substrat dan produk, lalu telusuri jalur makanan dari mulut sampai usus besar.'
  },
  questions: [
    dasar(
      'Sendi bahu yang memungkinkan gerakan ke segala arah termasuk sendi...',
      ['engsel', 'peluru', 'putar', 'pelana'],
      'B',
      'Sendi ini berbentuk bola dan mangkuk.',
      'Sendi peluru (bahu dan pinggul) memungkinkan gerakan ke segala arah. Sendi engsel hanya satu arah, sendi putar berotasi, dan sendi pelana dua arah.'
    ),
    dasar(
      'Otot antagonis bagi otot biseps yang bekerja saat lengan diluruskan adalah...',
      ['brakialis', 'deltoid', 'triseps', 'latissimus dorsi'],
      'C',
      'Fleksor dan ekstensor bekerja berlawanan.',
      'Biseps berkontraksi untuk menekuk lengan (fleksi), sedangkan triseps berkontraksi untuk meluruskan lengan (ekstensi) sehingga triseps adalah antagonisnya.'
    ),
    dasar(
      'Komponen darah yang mengangkut oksigen karena mengandung hemoglobin adalah...',
      ['eritrosit', 'leukosit', 'trombosit', 'plasma darah'],
      'A',
      'Sel ini berwarna merah dan tidak berinti pada manusia dewasa.',
      'Eritrosit mengandung hemoglobin yang mengikat oksigen. Leukosit berperan dalam kekebalan, trombosit dalam pembekuan, dan plasma mengangkut zat terlarut.'
    ),
    dasar(
      'Ruang jantung yang memompa darah kaya oksigen ke seluruh tubuh melalui aorta adalah...',
      ['atrium kanan', 'atrium kiri', 'ventrikel kanan', 'ventrikel kiri'],
      'D',
      'Ruang ini berdinding paling tebal.',
      'Ventrikel kiri berdinding paling tebal dan memompa darah beroksigen ke aorta untuk sirkulasi sistemik. Ventrikel kanan memompa darah ke paru-paru.'
    ),
    dasar(
      'Pencernaan karbohidrat pertama kali terjadi di mulut oleh enzim...',
      ['pepsin', 'lipase', 'amilase ludah', 'tripsin'],
      'C',
      'Enzim ini mengubah pati menjadi maltosa.',
      'Amilase ludah (ptialin) menghidrolisis pati menjadi maltosa. Pepsin dan tripsin mencerna protein, lipase mencerna lemak.'
    ),
    sedang(
      'Cairan empedu berperan dalam pencernaan dengan cara...',
      ['memecah protein menjadi asam amino', 'mengubah pati menjadi maltosa', 'mengubah glukosa menjadi glikogen', 'mengemulsikan lemak menjadi butiran kecil agar mudah dicerna lipase'],
      'D',
      'Empedu tidak mengandung enzim pencernaan.',
      'Garam empedu mengemulsi lemak menjadi butiran-butiran kecil sehingga luas permukaan bertambah dan lipase dapat bekerja lebih efektif.'
    ),
    sedang(
      'Hasil pencernaan yang diserap oleh vili usus halus mengikuti jalur...',
      ['seluruhnya masuk ke kapiler darah', 'asam lemak dan gliserol ke pembuluh kil, sedangkan glukosa dan asam amino ke kapiler darah', 'glukosa ke pembuluh kil, sedangkan asam lemak ke kapiler darah', 'seluruhnya diserap di lambung lalu masuk ke jantung'],
      'B',
      'Lemak diserap lewat pembuluh limfa di dalam vili.',
      'Glukosa dan asam amino larut air sehingga masuk ke kapiler darah, sedangkan asam lemak dan gliserol diserap ke pembuluh kil (pembuluh limfa) di dalam vili.'
    ),
    sedang(
      'Seseorang bergolongan darah AB disebut penerima universal karena...',
      ['darahnya tidak memiliki aglutinin anti-A maupun anti-B', 'darahnya tidak memiliki aglutinogen', 'darahnya mengandung aglutinin anti-A dan anti-B', 'darahnya hanya dapat menerima dari golongan AB'],
      'A',
      'Aglutinin ada pada plasma dan menyerang aglutinogen asing.',
      'Golongan AB memiliki aglutinogen A dan B tetapi tidak memiliki aglutinin anti-A maupun anti-B pada plasma sehingga tidak menggumpalkan darah donor golongan A, B, AB, maupun O.'
    ),
    sedang(
      'Denyut jantung seseorang 75 kali per menit dengan isi sekuncup 70 mL. Curah jantungnya adalah...',
      ['0,93 L/menit', '4,50 L/menit', '5,25 L/menit', '52,5 L/menit'],
      'C',
      'Gunakan CO = HR × SV, lalu ubah mL menjadi L.',
      'CO = 75 × 70 = 5.250 mL/menit = 5,25 L/menit.'
    ),
    sedang(
      'Pada kontraksi otot rangka, peristiwa yang terjadi pada sarkomer adalah...',
      ['filamen aktin dan miosin sama-sama memendek', 'filamen miosin berubah menjadi aktin', 'sarkomer memanjang karena filamen saling menjauh', 'filamen aktin bergeser ke tengah di antara filamen miosin sehingga sarkomer memendek, dengan bantuan ATP dan Ca²⁺'],
      'D',
      'Panjang filamen tidak berubah, hanya posisinya bergeser.',
      'Menurut teori filamen geser, kepala miosin menarik aktin ke arah tengah sarkomer menggunakan ATP dengan bantuan ion Ca²⁺, sehingga sarkomer memendek tanpa perubahan panjang filamen.'
    ),
    tantangan(
      'Tekanan darah seseorang 120/80 mmHg. Tekanan arteri rerata (MAP) = tekanan diastol + sepertiga selisih sistol dan diastol. Nilai MAP-nya sekitar...',
      ['93 mmHg', '100 mmHg', '87 mmHg', '120 mmHg'],
      'A',
      'Hitung selisih sistol dan diastol, bagi tiga, lalu tambahkan ke diastol.',
      'MAP = 80 + (120 - 80) / 3 = 80 + 13,3 ≈ 93 mmHg.'
    ),
    tantangan(
      'Urutan jalur sirkulasi paru (sirkulasi kecil) yang benar adalah...',
      ['ventrikel kiri - paru - atrium kanan', 'ventrikel kanan - arteri pulmonalis - paru - vena pulmonalis - atrium kiri', 'ventrikel kiri - aorta - paru', 'atrium kanan - paru - ventrikel kiri'],
      'B',
      'Darah miskin oksigen harus dipompa ke paru-paru untuk memperoleh oksigen.',
      'Darah miskin oksigen dari ventrikel kanan mengalir lewat arteri pulmonalis ke paru-paru, lalu darah kaya oksigen kembali lewat vena pulmonalis menuju atrium kiri.'
    ),
    tantangan(
      'Sepiring makanan mengandung 50 g karbohidrat, 20 g protein, dan 10 g lemak. Energi total makanan tersebut adalah...',
      ['280 kkal', '320 kkal', '410 kkal', '370 kkal'],
      'D',
      'Gunakan 4 kkal/g untuk karbohidrat dan protein, 9 kkal/g untuk lemak.',
      'E = (4 × 50) + (4 × 20) + (9 × 10) = 200 + 80 + 90 = 370 kkal.'
    ),
    tantangan(
      'Seorang pasien mengalami aklorhidria (lambung hampir tidak menghasilkan HCl). Dampak yang paling mungkin adalah...',
      ['pepsinogen sulit diaktifkan menjadi pepsin sehingga pencernaan protein di lambung terganggu', 'pati tidak dapat dicerna sama sekali di mulut', 'empedu tidak dapat dibentuk oleh hati', 'penyerapan lemak di usus halus berhenti total'],
      'A',
      'HCl menciptakan suasana asam yang mengaktifkan enzim lambung.',
      'HCl mengubah pepsinogen menjadi pepsin yang aktif pada pH asam, serta membunuh bakteri. Tanpa HCl pencernaan protein di lambung terganggu, sedangkan amilase ludah, empedu, dan penyerapan lemak tidak bergantung langsung pada HCl.'
    ),
    tantangan(
      'Saat istirahat, denyut jantung 60 kali per menit dengan curah jantung 4,8 L/menit. Saat berolahraga denyut menjadi 150 kali per menit dan isi sekuncup naik 25 persen. Curah jantung saat berolahraga adalah...',
      ['12 L/menit', '18 L/menit', '15 L/menit', '10 L/menit'],
      'C',
      'Cari dahulu isi sekuncup saat istirahat dari CO dan HR.',
      'SV istirahat = 4.800 / 60 = 80 mL. Saat olahraga SV = 80 × 1,25 = 100 mL sehingga CO = 150 × 100 = 15.000 mL/menit = 15 L/menit.'
    )
  ]
});
