/**
 * Paket Soal Terstruktur: Latihan Matematika SMP Kelas 9: Kesebangunan & Bangun Ruang Sisi Lengkung
 * 16 soal: Bagian A (12 Pilihan Ganda A–D @ 1 poin) + Bagian B (4 Uraian Bertahap @ 3 poin); total 24 poin.
 */
const OK1 = [{ code: 'A1', text: 'Jawaban tepat sesuai pembahasan.' }];
const OK3 = [
  { code: 'M1', text: 'Menetapkan perbandingan kesebangunan atau rumus bangun ruang sisi lengkung dengan benar.' },
  { code: 'M1', text: 'Melakukan substitusi nilai dan aljabar dengan akurat.' },
  { code: 'A1', text: 'Hasil akhir dan satuan tepat sesuai pembahasan.' }
];

export default {
  id: 'mat9-bangun-ruang-kesebangunan-p1',
  slug: 'mat9-bangun-ruang-kesebangunan-paket-1',
  subject: 'matematika',
  grade: 9,
  track: 'kurikulum-merdeka',
  accessTier: 'free',
  topic: 'Matematika Kelas 9 SMP: kesebangunan dan kekongruenan bangun datar serta luas permukaan dan volume tabung, kerucut, dan bola',
  relatedChapterIds: [
    'smp7-bab5-kesebangunan',
    'smp9-bab2-bangun-ruang'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'Latihan Kurikulum',
  title: 'Latihan Matematika SMP Kelas 9: Kesebangunan & Bangun Ruang Sisi Lengkung',
  totalMarks: 24,
  instructions:
    'Paket ini memuat 16 soal Kelas 9 SMP topik Kesebangunan & Bangun Ruang Sisi Lengkung: Bagian A (12 pilihan ganda @ 1 poin) dan Bagian B (4 uraian bertahap @ 3 poin; total 24 poin). Gunakan $\\pi = \\frac{22}{7}$ kecuali diminta dalam bentuk $\\pi$.',
  source: {
    org: 'Tim Akademik Duta e-dukasi',
    file: 'original-curated-batch-10',
    license: 'Hak cipta materi kurasi asli Duta e-dukasi'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Pilihan Ganda (12 Soal)',
      marks: 12,
      stem: 'Pilihlah satu jawaban yang tepat (masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt: 'Sebuah tiang setinggi $1{,}8\\ \\text{m}$ menghasilkan bayangan sepanjang $1{,}2\\ \\text{m}$. Pada saat yang sama, bayangan sebuah menara sepanjang $14\\ \\text{m}$. Tinggi menara tersebut adalah ....\n\nA. $18\\ \\text{m}$\nB. $20\\ \\text{m}$\nC. $21\\ \\text{m}$\nD. $24\\ \\text{m}$',
          answer: 'C. $21\\ \\text{m}$',
          principle: 'Perbandingan tinggi dan panjang bayangan pada segitiga sebangun adalah senilai.',
          solution: '$$\\frac{h}{14} = \\frac{1{,}8}{1{,}2} = \\frac{3}{2} \\implies h = 14 \\times \\frac{3}{2} = 21\\ \\text{m}$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '2',
          marks: 1,
          prompt: 'Dua persegi panjang sebangun. Persegi panjang pertama berukuran $12\\ \\text{cm} \\times 8\\ \\text{cm}$. Jika panjang persegi panjang kedua $18\\ \\text{cm}$, lebarnya adalah ....\n\nA. $10\\ \\text{cm}$\nB. $12\\ \\text{cm}$\nC. $14\\ \\text{cm}$\nD. $15\\ \\text{cm}$',
          answer: 'B. $12\\ \\text{cm}$',
          principle: 'Rasio sisi-sisi bersesuaian dua bangun sebangun selalu sama.',
          solution: '$$\\frac{l}{8} = \\frac{18}{12} = \\frac{3}{2} \\implies l = 12\\ \\text{cm}$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '3',
          marks: 1,
          prompt: 'Pada $\\triangle ABC$, garis $DE$ sejajar $BC$ dengan $D$ pada $AB$ dan $E$ pada $AC$. Jika $AD = 6\\ \\text{cm}$, $DB = 4\\ \\text{cm}$, dan $DE = 9\\ \\text{cm}$, panjang $BC$ adalah ....\n\nA. $12\\ \\text{cm}$\nB. $13{,}5\\ \\text{cm}$\nC. $15\\ \\text{cm}$\nD. $18\\ \\text{cm}$',
          answer: 'C. $15\\ \\text{cm}$',
          principle: '$\\triangle ADE \\sim \\triangle ABC$ sehingga $\\frac{AD}{AB} = \\frac{DE}{BC}$.',
          solution: '$AB = 6 + 4 = 10\\ \\text{cm}$, maka $\\frac{6}{10} = \\frac{9}{BC} \\implies BC = \\frac{90}{6} = 15\\ \\text{cm}$ (opsi C).',
          rubric: OK1
        },
        {
          label: '4',
          marks: 1,
          prompt: 'Volume sebuah tabung dengan jari-jari alas $7\\ \\text{cm}$ dan tinggi $20\\ \\text{cm}$ adalah ....\n\nA. $1.540\\ \\text{cm}^3$\nB. $2.640\\ \\text{cm}^3$\nC. $3.080\\ \\text{cm}^3$\nD. $4.400\\ \\text{cm}^3$',
          answer: 'C. $3.080\\ \\text{cm}^3$',
          principle: 'Volume tabung $V = \\pi r^2 t$.',
          solution: '$$V = \\frac{22}{7} \\times 7^2 \\times 20 = 154 \\times 20 = 3.080\\ \\text{cm}^3$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '5',
          marks: 1,
          prompt: 'Luas selimut tabung dengan jari-jari $10\\ \\text{cm}$ dan tinggi $15\\ \\text{cm}$ (nyatakan dalam $\\pi$) adalah ....\n\nA. $150\\pi\\ \\text{cm}^2$\nB. $250\\pi\\ \\text{cm}^2$\nC. $300\\pi\\ \\text{cm}^2$\nD. $500\\pi\\ \\text{cm}^2$',
          answer: 'C. $300\\pi\\ \\text{cm}^2$',
          principle: 'Luas selimut tabung $L_s = 2\\pi r t$.',
          solution: '$$L_s = 2\\pi(10)(15) = 300\\pi\\ \\text{cm}^2$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '6',
          marks: 1,
          prompt: 'Sebuah kerucut memiliki jari-jari alas $7\\ \\text{cm}$ dan tinggi $24\\ \\text{cm}$. Luas selimut kerucut tersebut adalah ....\n\nA. $528\\ \\text{cm}^2$\nB. $550\\ \\text{cm}^2$\nC. $704\\ \\text{cm}^2$\nD. $1.100\\ \\text{cm}^2$',
          answer: 'B. $550\\ \\text{cm}^2$',
          principle: 'Panjang garis pelukis $s = \\sqrt{r^2 + t^2}$ lalu $L_s = \\pi r s$.',
          solution: '$s = \\sqrt{7^2 + 24^2} = 25\\ \\text{cm}$, sehingga $L_s = \\frac{22}{7} \\times 7 \\times 25 = 550\\ \\text{cm}^2$ (opsi B).',
          rubric: OK1
        },
        {
          label: '7',
          marks: 1,
          prompt: 'Volume kerucut dengan jari-jari alas $7\\ \\text{cm}$ dan tinggi $24\\ \\text{cm}$ adalah ....\n\nA. $1.056\\ \\text{cm}^3$\nB. $1.232\\ \\text{cm}^3$\nC. $1.848\\ \\text{cm}^3$\nD. $3.696\\ \\text{cm}^3$',
          answer: 'B. $1.232\\ \\text{cm}^3$',
          principle: 'Volume kerucut $V = \\frac{1}{3}\\pi r^2 t$.',
          solution: '$$V = \\frac{1}{3} \\times \\frac{22}{7} \\times 49 \\times 24 = 154 \\times 8 = 1.232\\ \\text{cm}^3$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '8',
          marks: 1,
          prompt: 'Luas permukaan bola berjari-jari $7\\ \\text{cm}$ adalah ....\n\nA. $154\\ \\text{cm}^2$\nB. $308\\ \\text{cm}^2$\nC. $616\\ \\text{cm}^2$\nD. $1.232\\ \\text{cm}^2$',
          answer: 'C. $616\\ \\text{cm}^2$',
          principle: 'Luas permukaan bola $L = 4\\pi r^2$.',
          solution: '$$L = 4 \\times \\frac{22}{7} \\times 7^2 = 4 \\times 154 = 616\\ \\text{cm}^2$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '9',
          marks: 1,
          prompt: 'Jika jari-jari sebuah bola diperbesar menjadi $3$ kali lipat jari-jari semula, maka volumenya menjadi ... kali volume semula.\n\nA. $3$\nB. $9$\nC. $18$\nD. $27$',
          answer: 'D. $27$',
          principle: 'Volume bola berbanding lurus dengan $r^3$.',
          solution: 'Rasio volume $= 3^3 = 27$ kali semula (opsi D).',
          rubric: OK1
        },
        {
          label: '10',
          marks: 1,
          prompt: 'Sebuah foto berukuran $20\\ \\text{cm} \\times 30\\ \\text{cm}$ ditempel pada karton sehingga di sisi kiri, kanan, dan atas masih tersisa karton selebar $2\\ \\text{cm}$. Jika foto dan karton sebangun, lebar karton di bawah foto adalah ....\n\nA. $2\\ \\text{cm}$\nB. $3\\ \\text{cm}$\nC. $4\\ \\text{cm}$\nD. $5\\ \\text{cm}$',
          answer: 'C. $4\\ \\text{cm}$',
          principle: 'Bandingkan lebar dan tinggi foto dengan lebar karton ($20 + 2 + 2 = 24\\ \\text{cm}$) dan tinggi karton ($30 + 2 + x$).',
          solution: '$$\\frac{20}{30} = \\frac{24}{32 + x} \\implies 2(32 + x) = 72 \\implies 32 + x = 36 \\implies x = 4\\ \\text{cm}$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '11',
          marks: 1,
          prompt: 'Volume bola dengan diameter $42\\ \\text{cm}$ ($r = 21\\ \\text{cm}$) adalah ....\n\nA. $19.404\\ \\text{cm}^3$\nB. $29.106\\ \\text{cm}^3$\nC. $38.808\\ \\text{cm}^3$\nD. $48.510\\ \\text{cm}^3$',
          answer: 'C. $38.808\\ \\text{cm}^3$',
          principle: 'Volume bola $V = \\frac{4}{3}\\pi r^3$.',
          solution: '$$V = \\frac{4}{3} \\times \\frac{22}{7} \\times 21^3 = 88 \\times 441 = 38.808\\ \\text{cm}^3$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '12',
          marks: 1,
          prompt: 'Dua segitiga $\\triangle PQR$ dan $\\triangle XYZ$ kongruen dengan $\\angle P = \\angle X = 50^\\circ$ dan $\\angle Q = \\angle Y = 65^\\circ$. Besar sudut $\\angle Z$ adalah ....\n\nA. $50^\\circ$\nB. $65^\\circ$\nC. $75^\\circ$\nD. $115^\\circ$',
          answer: 'B. $65^\\circ$',
          principle: 'Pada dua segitiga kongruen, sudut bersesuaian sama besar dan jumlah sudut dalam segitiga $180^\\circ$.',
          solution: 'Dalam $\\triangle XYZ$: $\\angle Z = 180^\\circ - (50^\\circ + 65^\\circ) = 65^\\circ$ (opsi B).',
          rubric: OK1
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Uraian Bertahap (4 Soal)',
      marks: 12,
      stem: 'Selesaikan setiap soal uraian berikut dengan langkah lengkap (masing-masing bernilai 3 poin).',
      parts: [
        {
          label: '13',
          marks: 3,
          prompt: 'Sebuah bandul terdiri atas belahan bola berjari-jari $7\\ \\text{cm}$ dan kerucut tepat di atasnya dengan tinggi kerucut $24\\ \\text{cm}$. Hitunglah luas permukaan bandul tersebut!',
          answer: '$858\\ \\text{cm}^2$',
          principle: 'Luas permukaan bangun gabungan = luas selimut kerucut $+$ luas selimut setengah bola (bidang pertemuan di dalam tidak dihitung).',
          solution:
            'Garis pelukis kerucut $s = \\sqrt{7^2 + 24^2} = 25\\ \\text{cm}$.\nLuas selimut kerucut $= \\frac{22}{7} \\times 7 \\times 25 = 550\\ \\text{cm}^2$.\nLuas setengah bola $= 2\\pi r^2 = 2 \\times \\frac{22}{7} \\times 49 = 308\\ \\text{cm}^2$.\n\nTotal luas permukaan $= 550 + 308 = 858\\ \\text{cm}^2$.',
          rubric: OK3
        },
        {
          label: '14',
          marks: 3,
          prompt: 'Sebuah tabung berjari-jari $14\\ \\text{cm}$ dan tinggi $15\\ \\text{cm}$ penuh berisi air. Seluruh air dituangkan ke dalam kerucut-kerucut identik berjari-jari $7\\ \\text{cm}$ dan tinggi $15\\ \\text{cm}$. Berapa buah kerucut penuh yang dapat diisi?',
          answer: '$12\\ \\text{kerucut}$',
          principle: 'Banyak kerucut $= \\frac{V_{\\text{tabung}}}{V_{\\text{kerucut}}}$.',
          solution:
            '$$n = \\frac{\\pi R^2 h}{\\frac{1}{3} \\pi r^2 h} = 3 \\left(\\frac{R}{r}\\right)^2 = 3 \\left(\\frac{14}{7}\\right)^2 = 3 \\times 4 = 12\\ \\text{kerucut}.$$',
          rubric: OK3
        },
        {
          label: '15',
          marks: 3,
          prompt: 'Sebuah trapesium $ABCD$ dengan sisi sejajar $AB = 20\\ \\text{cm}$ dan $CD = 8\\ \\text{cm}$. Titik $E$ pada $AD$ dan $F$ pada $BC$ sehingga $EF \\parallel AB$ dan $\\frac{DE}{EA} = \\frac{1}{3}$. Tentukan panjang ruas garis $EF$!',
          answer: '$11\\ \\text{cm}$',
          principle: 'Gunakan rumus kesebangunan trapesium $EF = \\frac{DE \\cdot AB + EA \\cdot CD}{DE + EA}$.',
          solution:
            '$$EF = \\frac{1(20) + 3(8)}{1 + 3} = \\frac{20 + 24}{4} = \\frac{44}{4} = 11\\ \\text{cm}.$$',
          rubric: OK3
        },
        {
          label: '16',
          marks: 3,
          prompt: 'Sebuah tangki silinder berdiameter $1{,}4\\ \\text{m}$ dan panjang $2\\ \\text{m}$ diisi air melalui keran dengan debit $22\\ \\text{liter/menit}$. Berapa menit waktu yang dibutuhkan agar tangki terisi tepat setengah bagian?',
          answer: '$70\\ \\text{menit}$',
          principle: 'Volume setengah tabung $= \\frac{1}{2}\\pi r^2 t$, dengan $r = 7\\ \\text{dm}$ dan $t = 20\\ \\text{dm}$ sehingga langsung bersatuan liter ($\\text{dm}^3$).',
          solution:
            'Volume penuh $= \\frac{22}{7} \\times 7^2 \\times 20 = 3.080\\ \\text{liter}$, sehingga setengah volume $= 1.540\\ \\text{liter}$.\n\nWaktu pengisian $= \\frac{1.540}{22} = 70\\ \\text{menit}.$',
          rubric: OK3
        }
      ]
    }
  ]
};
