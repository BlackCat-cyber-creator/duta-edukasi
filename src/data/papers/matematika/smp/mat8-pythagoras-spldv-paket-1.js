/**
 * Paket Soal Terstruktur: Latihan Matematika SMP Kelas 8: Teorema Pythagoras & SPLDV
 * 16 soal: Bagian A (12 Pilihan Ganda A–D @ 1 poin) + Bagian B (4 Uraian Bertahap @ 3 poin); total 24 poin.
 */
const OK1 = [{ code: 'A1', text: 'Jawaban tepat sesuai pembahasan.' }];
const OK3 = [
  { code: 'M1', text: 'Menyusun persamaan Pythagoras, gradien/garis, atau model SPLDV dengan tepat.' },
  { code: 'M1', text: 'Menjalankan eliminasi/substitusi atau perhitungan akar tanpa kesalahan aljabar.' },
  { code: 'A1', text: 'Kesimpulan dan satuan jawaban akhir tepat.' }
];

export default {
  id: 'mat8-pythagoras-spldv-p1',
  slug: 'mat8-pythagoras-spldv-paket-1',
  subject: 'matematika',
  grade: 8,
  track: 'kurikulum-merdeka',
  accessTier: 'free',
  topic: 'Matematika Kelas 8 SMP: Teorema Pythagoras, tripel Pythagoras, jarak dua titik, persamaan garis lurus, dan SPLDV',
  relatedChapterIds: [
    'smp8-bab2-teorema-pythagoras',
    'smp8-bab5-persamaan-garis-lurus',
    'smp9-bab1-spldv'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'Latihan Kurikulum',
  title: 'Latihan Matematika SMP Kelas 8: Teorema Pythagoras & SPLDV',
  totalMarks: 24,
  instructions:
    'Paket ini memuat 16 soal terstruktur untuk topik Teorema Pythagoras, Persamaan Garis Lurus, dan SPLDV: Bagian A (12 pilihan ganda @ 1 poin) dan Bagian B (4 uraian bertahap @ 3 poin; total 24 poin).',
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
          prompt: 'Sebuah segitiga siku-siku memiliki panjang kedua sisi siku-siku $9\\ \\text{cm}$ dan $12\\ \\text{cm}$. Panjang sisi miringnya adalah ....\n\nA. $14\\ \\text{cm}$\nB. $15\\ \\text{cm}$\nC. $16\\ \\text{cm}$\nD. $18\\ \\text{cm}$',
          answer: 'B. $15\\ \\text{cm}$',
          principle: 'Teorema Pythagoras: $c^2 = a^2 + b^2$.',
          solution: '$$c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15\\ \\text{cm}$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '2',
          marks: 1,
          prompt: 'Pasangan tiga bilangan berikut yang merupakan tripel Pythagoras adalah ....\n\nA. $(6, 9, 12)$\nB. $(8, 15, 17)$\nC. $(9, 12, 16)$\nD. $(10, 24, 25)$',
          answer: 'B. $(8, 15, 17)$',
          principle: 'Tripel Pythagoras memenuhi $a^2 + b^2 = c^2$ dengan $c$ sisi terpanjang.',
          solution: '$8^2 + 15^2 = 64 + 225 = 289 = 17^2$ (opsi B).',
          rubric: OK1
        },
        {
          label: '3',
          marks: 1,
          prompt: 'Sebuah tangga sepanjang $13\\ \\text{m}$ disandarkan pada dinding vertikal. Jika jarak kaki tangga ke dinding adalah $5\\ \\text{m}$, tinggi ujung atas tangga dari tanah adalah ....\n\nA. $8\\ \\text{m}$\nB. $10\\ \\text{m}$\nC. $12\\ \\text{m}$\nD. $14\\ \\text{m}$',
          answer: 'C. $12\\ \\text{m}$',
          principle: 'Gunakan tripel Pythagoras $(5, 12, 13)$.',
          solution: '$$h = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\ \\text{m}$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '4',
          marks: 1,
          prompt: 'Segitiga dengan panjang sisi $7\\ \\text{cm}$, $10\\ \\text{cm}$, dan $13\\ \\text{cm}$ termasuk jenis segitiga ....\n\nA. siku-siku\nB. lancip\nC. tumpul\nD. sama kaki',
          answer: 'C. tumpul',
          principle: 'Jika $c^2 > a^2 + b^2$ untuk sisi terpanjang $c$, segitiga bersifat tumpul.',
          solution: 'Karena $13^2 = 169 > 7^2 + 10^2 = 49 + 100 = 149$, maka segitiganya adalah segitiga tumpul (opsi C).',
          rubric: OK1
        },
        {
          label: '5',
          marks: 1,
          prompt: 'Jarak antara titik $A(-2, 1)$ dan titik $B(6, 7)$ pada bidang Kartesius adalah ....\n\nA. $8$ satuan\nB. $10$ satuan\nC. $12$ satuan\nD. $14$ satuan',
          answer: 'B. $10$ satuan',
          principle: 'Rumus jarak dua titik $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
          solution: '$$AB = \\sqrt{(6 - (-2))^2 + (7 - 1)^2} = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10\\ \\text{satuan}$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '6',
          marks: 1,
          prompt: 'Panjang sisi miring segitiga siku-siku sama kaki dengan panjang masing-masing kaki $8\\ \\text{cm}$ adalah ....\n\nA. $8\\ \\text{cm}$\nB. $8\\sqrt{2}\\ \\text{cm}$\nC. $8\\sqrt{3}\\ \\text{cm}$\nD. $16\\ \\text{cm}$',
          answer: 'B. $8\\sqrt{2}\\ \\text{cm}$',
          principle: 'Pada segitiga siku-siku sama kaki ($45^\\circ\\text{–}45^\\circ\\text{–}90^\\circ$), perbandingan sisinya $1 : 1 : \\sqrt{2}$.',
          solution: '$$c = \\sqrt{8^2 + 8^2} = \\sqrt{128} = 8\\sqrt{2}\\ \\text{cm}$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '7',
          marks: 1,
          prompt: 'Gradien garis yang melalui titik $(2, 5)$ dan $(6, 13)$ adalah ....\n\nA. $\\frac{1}{2}$\nB. $1$\nC. $2$\nD. $4$',
          answer: 'C. $2$',
          principle: 'Gradien $m = \\frac{y_2 - y_1}{x_2 - x_1}$.',
          solution: '$$m = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$$\n(opsi C).',
          rubric: OK1
        },
        {
          label: '8',
          marks: 1,
          prompt: 'Persamaan garis yang sejajar dengan $y = 3x - 4$ dan melalui titik $(1, 5)$ adalah ....\n\nA. $y = 3x + 2$\nB. $y = 3x + 4$\nC. $y = -\\frac{1}{3}x + 2$\nD. $y = 3x - 2$',
          answer: 'A. $y = 3x + 2$',
          principle: 'Dua garis sejajar memiliki gradien sama ($m_1 = m_2 = 3$).',
          solution: 'Gunakan $y - y_1 = m(x - x_1)$: $y - 5 = 3(x - 1) \\implies y = 3x + 2$ (opsi A).',
          rubric: OK1
        },
        {
          label: '9',
          marks: 1,
          prompt: 'Himpunan penyelesaian dari sistem persamaan $3x + 2y = 29$ dan $x + y = 12$ adalah ....\n\nA. $(4, 8)$\nB. $(5, 7)$\nC. $(6, 6)$\nD. $(7, 5)$',
          answer: 'B. $(5, 7)$',
          principle: 'Eliminasi variabel $y$ dengan mengalikan persamaan kedua oleh $2$.',
          solution: 'Kurangkan $3x + 2y = 29$ dengan $2x + 2y = 24$ sehingga $x = 5$, lalu $y = 12 - 5 = 7$ (opsi B).',
          rubric: OK1
        },
        {
          label: '10',
          marks: 1,
          prompt: 'Sebuah kapal berlayar ke arah timur sejauh $15\\ \\text{km}$, kemudian berbelok ke utara sejauh $20\\ \\text{km}$. Jarak terdekat kapal dari titik awal keberangkatan adalah ....\n\nA. $22\\ \\text{km}$\nB. $25\\ \\text{km}$\nC. $30\\ \\text{km}$\nD. $35\\ \\text{km}$',
          answer: 'B. $25\\ \\text{km}$',
          principle: 'Arah timur dan utara saling tegak lurus ($90^\\circ$).',
          solution: '$$d = \\sqrt{15^2 + 20^2} = \\sqrt{225 + 400} = \\sqrt{625} = 25\\ \\text{km}$$\n(opsi B).',
          rubric: OK1
        },
        {
          label: '11',
          marks: 1,
          prompt: 'Titik potong dua garis $2x - y = 3$ dan $x + y = 9$ adalah ....\n\nA. $(3, 6)$\nB. $(4, 5)$\nC. $(5, 4)$\nD. $(6, 3)$',
          answer: 'B. $(4, 5)$',
          principle: 'Jumlahkan kedua persamaan untuk langsung mengeliminasi $y$.',
          solution: '$(2x - y) + (x + y) = 3 + 9 \\implies 3x = 12 \\implies x = 4$, maka $y = 9 - 4 = 5$ (opsi B).',
          rubric: OK1
        },
        {
          label: '12',
          marks: 1,
          prompt: 'Panjang diagonal bidang sebuah persegi dengan panjang sisi $10\\ \\text{cm}$ adalah ....\n\nA. $10\\ \\text{cm}$\nB. $10\\sqrt{2}\\ \\text{cm}$\nC. $10\\sqrt{3}\\ \\text{cm}$\nD. $20\\ \\text{cm}$',
          answer: 'B. $10\\sqrt{2}\\ \\text{cm}$',
          principle: 'Diagonal persegi membagi persegi menjadi dua segitiga siku-siku sama kaki.',
          solution: '$$d = \\sqrt{10^2 + 10^2} = 10\\sqrt{2}\\ \\text{cm}$$\n(opsi B).',
          rubric: OK1
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Uraian Bertahap (4 Soal)',
      marks: 12,
      stem: 'Tuliskan langkah penyelesaian yang runtut untuk setiap soal berikut (masing-masing bernilai 3 poin).',
      parts: [
        {
          label: '13',
          marks: 3,
          prompt: 'Harga $4$ buku tulis dan $3$ pensil adalah Rp25.000, sedangkan harga $2$ buku tulis dan $5$ pensil adalah Rp19.500. Tentukan harga $1$ buku tulis dan $1$ pensil!',
          answer: 'Buku tulis = Rp4.750, pensil = Rp2.000 (jumlah = Rp6.750).',
          principle: 'Modelkan ke SPLDV lalu eliminasi salah satu variabel.',
          solution:
            'Misalkan harga $1$ buku $= b$ dan $1$ pensil $= p$:\n$$4b + 3p = 25.000 \\quad \\text{dan} \\quad 2b + 5p = 19.500.$$\n\nKalikan persamaan kedua dengan $2$: $4b + 10p = 39.000$. Kurangkan dengan persamaan pertama:\n$$7p = 14.000 \\implies p = 2.000.$$\n\nSubstitusi ke persamaan pertama:\n$$4b + 3(2.000) = 25.000 \\implies 4b = 19.000 \\implies b = 4.750.$$\nJadi harga $1$ buku tulis Rp4.750 dan $1$ pensil Rp2.000.',
          rubric: OK3
        },
        {
          label: '14',
          marks: 3,
          prompt: 'Sebuah balok kayu berukuran panjang $12\\ \\text{cm}$, lebar $9\\ \\text{cm}$, dan tinggi $8\\ \\text{cm}$. Hitunglah panjang diagonal ruang balok tersebut!',
          answer: '$17\\ \\text{cm}$',
          principle: 'Diagonal ruang balok $d_r = \\sqrt{p^2 + l^2 + t^2}$.',
          solution:
            'Langkah 1 (diagonal alas): $d_a = \\sqrt{12^2 + 9^2} = \\sqrt{144 + 81} = 15\\ \\text{cm}$.\nLangkah 2 (diagonal ruang): $d_r = \\sqrt{15^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17\\ \\text{cm}$.',
          rubric: OK3
        },
        {
          label: '15',
          marks: 3,
          prompt: 'Keliling sebuah persegi panjang adalah $64\\ \\text{cm}$, sedangkan selisih panjang dan lebarnya adalah $8\\ \\text{cm}$. Tentukan luas persegi panjang tersebut!',
          answer: '$240\\ \\text{cm}^2$',
          principle: 'Keliling $2(p + l) = 64 \\implies p + l = 32$, gabungkan dengan $p - l = 8$.',
          solution:
            'Dari $p + l = 32$ dan $p - l = 8$, jumlahkan keduanya:\n$$2p = 40 \\implies p = 20\\ \\text{cm}, \\qquad l = 32 - 20 = 12\\ \\text{cm}.$$\n\nLuas $= 20 \\times 12 = 240\\ \\text{cm}^2$.',
          rubric: OK3
        },
        {
          label: '16',
          marks: 3,
          prompt: 'Sebuah layang-layang $ABCD$ memiliki diagonal $AC = 16\\ \\text{cm}$ dan $BD = 21\\ \\text{cm}$ yang berpotongan tegak lurus di titik $O$ dengan $OB = 6\\ \\text{cm}$ dan $OD = 15\\ \\text{cm}$. Hitunglah keliling layang-layang tersebut!',
          answer: '$54\\ \\text{cm}$',
          principle: 'Diagonal $BD$ membagi diagonal $AC$ sama panjang sehingga $OA = OC = 8\\ \\text{cm}$.',
          solution:
            'Dari segitiga siku-siku $AOB$: $AB = \\sqrt{8^2 + 6^2} = 10\\ \\text{cm}$.\nDari segitiga siku-siku $AOD$: $AD = \\sqrt{8^2 + 15^2} = 17\\ \\text{cm}$.\n\nKeliling $= 2(AB + AD) = 2(10 + 17) = 54\\ \\text{cm}$.',
          rubric: OK3
        }
      ]
    }
  ]
};
