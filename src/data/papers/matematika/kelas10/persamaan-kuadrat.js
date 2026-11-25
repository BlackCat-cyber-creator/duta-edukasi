/**
 * Paket Soal Terstruktur: Latihan Persamaan Kuadrat — Kelas X
 * Sumber: [6] Persamaan Kuadrat.pdf (Duta e-dukasi).
 * Bahasa asli dipertahankan dalam Bahasa Indonesia sesuai dokumen sumber.
 */
export default {
  id: 'mat10-persamaan-kuadrat',
  slug: 'persamaan-kuadrat',
  subject: 'matematika',
  grade: 10,
  track: 'kurikulum-merdeka',
  topic: 'Persamaan Kuadrat',
  relatedChapterIds: ['sma10-bab6-fungsi-kuadrat'],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'Matematika SMA',
  title: 'Latihan Persamaan Kuadrat — Kelas X',
  totalMarks: 21,
  instructions:
    'Kerjakan seluruh 8 soal uraian berikut dengan langkah penyelesaian yang jelas menggunakan analisis diskriminan, pemfaktoran, kuadrat sempurna, rumus ABC, serta penyusunan persamaan kuadrat baru.',
  source: {
    org: 'Duta e-dukasi',
    file: '[6] Persamaan Kuadrat.pdf',
    license: 'CC BY 4.0'
  },
  status: 'published',
  accessTier: 'free',
  questions: [
    {
      no: 1,
      title: 'Identifikasi Jenis Akar (D > 0)',
      marks: 2,
      stem: 'Diberikan persamaan kuadrat:\n$$x^2 + 4x + 2 = 0$$',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Tentukan jenis akar-akar persamaan kuadrat tersebut!',
          answer: 'Dua akar real yang berlainan ($D = 8 > 0$).',
          principle:
            'Jenis akar persamaan kuadrat $ax^2 + bx + c = 0$ ditentukan oleh nilai diskriminan $D = b^2 - 4ac$. Jika $D > 0$, persamaan memiliki dua akar real yang berbeda ($x_1 \\neq x_2$).',
          solution:
            'Dari persamaan $x^2 + 4x + 2 = 0$, diperoleh koefisien:\n$$a = 1, \\quad b = 4, \\quad c = 2$$\nHitung nilai diskriminan:\n$$D = b^2 - 4ac = 4^2 - 4(1)(2) = 16 - 8 = 8$$\nKarena nilai $D = 8 > 0$, persamaan kuadrat tersebut memiliki dua akar real yang berlainan ($x_1 \\neq x_2$).',
          rubric: [
            {
              code: 'B1',
              text: 'Mengidentifikasi $a = 1$, $b = 4$, $c = 2$ dan menghitung diskriminan $D = 8$'
            },
            {
              code: 'A1',
              text: 'Menyimpulkan bahwa persamaan memiliki dua akar real yang berlainan karena $D > 0$'
            }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Nilai Akar Kembar (D = 0)',
      marks: 3,
      stem: 'Diberikan persamaan kuadrat:\n$$2x^2 + 4x + 2 = 0$$',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan jenis dan nilai akar-akar persamaan kuadrat tersebut!',
          answer: 'Akar real kembar dengan nilai $x_1 = x_2 = -1$.',
          principle:
            'Jika diskriminan $D = b^2 - 4ac = 0$, persamaan kuadrat memiliki dua akar real yang sama (kembar), yaitu $x_1 = x_2 = -\\frac{b}{2a}$, yang juga dapat dicari dengan memfaktorkan bentuk kuadrat sempurna.',
          solution:
            'Dari persamaan $2x^2 + 4x + 2 = 0$, diperoleh $a = 2$, $b = 4$, dan $c = 2$.\n\nPeriksa diskriminan:\n$$D = b^2 - 4ac = 4^2 - 4(2)(2) = 16 - 16 = 0$$\nKarena $D = 0$, persamaan memiliki akar real dan kembar.\n\nSelanjutnya, tentukan nilai akar dengan menyederhanakan dan memfaktorkan persamaan:\n$$2(x^2 + 2x + 1) = 0$$\n$$2(x + 1)^2 = 0 \\implies x + 1 = 0 \\implies x_1 = x_2 = -1$$',
          rubric: [
            {
              code: 'M1',
              text: 'Menghitung diskriminan $D = 0$ dan menyimpulkan akar real kembar'
            },
            {
              code: 'M1',
              text: 'Memfaktorkan persamaan menjadi $2(x + 1)^2 = 0$ atau menggunakan rumus akar kembar $-\\frac{b}{2a}$'
            },
            {
              code: 'A1',
              text: 'Menentukan nilai akar kembar $x_1 = x_2 = -1$ dengan tepat'
            }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Identifikasi Jenis Akar Imajiner (D < 0)',
      marks: 2,
      stem: 'Diberikan persamaan kuadrat:\n$$x^2 + 2x + 4 = 0$$',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Tentukan jenis akar-akar persamaan kuadrat tersebut!',
          answer: 'Akar imajiner atau tidak real ($D = -12 < 0$).',
          principle:
            'Jika nilai diskriminan $D = b^2 - 4ac < 0$, maka akar-akar persamaan kuadrat $ax^2 + bx + c = 0$ bersifat tidak real (imajiner/kompleks).',
          solution:
            'Dari persamaan $x^2 + 2x + 4 = 0$, diperoleh koefisien:\n$$a = 1, \\quad b = 2, \\quad c = 4$$\nHitung nilai diskriminan:\n$$D = b^2 - 4ac = 2^2 - 4(1)(4) = 4 - 16 = -12$$\nKarena nilai $D = -12 < 0$, persamaan kuadrat tersebut memiliki akar yang tidak real (imajiner).',
          rubric: [
            {
              code: 'M1',
              text: 'Menghitung nilai diskriminan $D = 2^2 - 4(1)(4) = -12$'
            },
            {
              code: 'A1',
              text: 'Menyimpulkan jenis akar adalah imajiner (tidak real) karena $D < 0$'
            }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Penyelesaian dengan Metode Faktorisasi',
      marks: 3,
      stem: 'Diberikan persamaan kuadrat:\n$$5x^2 + 13x + 6 = 0$$',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Selesaikan persamaan kuadrat tersebut menggunakan metode faktorisasi!',
          answer: '$x = -\\frac{3}{5}$ atau $x = -2$',
          principle:
            'Untuk memfaktorkan $ax^2 + bx + c = 0$ dengan $a \\neq 1$, pecah suku tengah $bx$ menjadi $px + qx$ sedemikian hingga $p + q = b$ dan $p \\cdot q = a \\cdot c$, lalu faktorkan secara berkelompok.',
          solution:
            'Pada $5x^2 + 13x + 6 = 0$, kita memiliki $a = 5$, $b = 13$, dan $c = 6$, sehingga $a \\cdot c = 30$.\nDua bilangan yang hasil kalinya $30$ dan jumlahnya $13$ adalah $10$ dan $3$.\n\nPecah suku tengah dan faktorkan:\n$$5x^2 + 10x + 3x + 6 = 0$$\n$$5x(x + 2) + 3(x + 2) = 0$$\n$$(5x + 3)(x + 2) = 0$$\nDiperoleh dua kemungkinan:\n$$5x + 3 = 0 \\implies x = -\\frac{3}{5} \\quad \\text{atau} \\quad x + 2 = 0 \\implies x = -2$$',
          rubric: [
            {
              code: 'M1',
              text: 'Memecah suku tengah menjadi $10x + 3x$ dan memfaktorkan ke bentuk $(5x + 3)(x + 2) = 0$'
            },
            {
              code: 'A1',
              text: 'Menentukan akar pertama $x = -\\frac{3}{5}$ dengan benar'
            },
            {
              code: 'A1',
              text: 'Menentukan akar kedua $x = -2$ dengan benar'
            }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Penyelesaian dengan Metode Kuadrat Sempurna',
      marks: 3,
      stem: 'Diberikan persamaan kuadrat:\n$$x^2 + 6x + 5 = 0$$',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Selesaikan persamaan kuadrat tersebut menggunakan metode melengkapkan kuadrat sempurna!',
          answer: '$x = -1$ atau $x = -5$',
          principle:
            'Metode kuadrat sempurna mengubah $x^2 + bx = -c$ menjadi $(x + p)^2 = q$ dengan menambahkan $\\left(\\frac{b}{2}\\right)^2$ ke kedua ruas, karena $(x + p)^2 = x^2 + 2px + p^2$.',
          solution:
            'Pindahkan konstanta ke ruas kanan:\n$$x^2 + 6x = -5$$\nTambahkan $\\left(\\frac{6}{2}\\right)^2 = 3^2 = 9$ pada kedua ruas untuk membentuk kuadrat sempurna:\n$$x^2 + 6x + 9 = -5 + 9$$\n$$(x + 3)^2 = 4$$\nAmbil akar kuadrat kedua ruas:\n$$x + 3 = \\pm\\sqrt{4} = \\pm 2$$\n$$x = -3 \\pm 2$$\nJadi, akar-akarnya adalah $x_1 = -3 + 2 = -1$ atau $x_2 = -3 - 2 = -5$.',
          rubric: [
            {
              code: 'M1',
              text: 'Memindahkan konstanta dan menambahkan $9$ pada kedua ruas sehingga diperoleh $x^2 + 6x + 9 = 4$'
            },
            {
              code: 'M1',
              text: 'Menyederhanakan menjadi $(x + 3)^2 = 4$ dan menuliskan $x + 3 = \\pm 2$'
            },
            {
              code: 'A1',
              text: 'Menentukan himpunan penyelesaian $x = -1$ atau $x = -5$ dengan tepat'
            }
          ]
        }
      ]
    },
    {
      no: 6,
      title: 'Penyelesaian dengan Rumus Kuadrat ABC',
      marks: 3,
      stem: 'Diberikan persamaan kuadrat:\n$$x^2 + 4x - 12 = 0$$',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Selesaikan persamaan kuadrat tersebut menggunakan rumus kuadrat ABC!',
          answer: '$x = 2$ atau $x = -6$',
          principle:
            'Rumus kuadratik (ABC) untuk menyelesaikan persamaan $ax^2 + bx + c = 0$ adalah $x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.',
          solution:
            'Dari persamaan $x^2 + 4x - 12 = 0$, diperoleh $a = 1$, $b = 4$, dan $c = -12$.\n\nSubstitusi ke rumus ABC:\n$$x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{-4 \\pm \\sqrt{4^2 - 4(1)(-12)}}{2(1)}$$\n$$x_{1,2} = \\frac{-4 \\pm \\sqrt{16 + 48}}{2} = \\frac{-4 \\pm \\sqrt{64}}{2} = \\frac{-4 \\pm 8}{2}$$\nHitung masing-masing akar:\n$$x_1 = \\frac{-4 + 8}{2} = \\frac{4}{2} = 2$$\n$$x_2 = \\frac{-4 - 8}{2} = \\frac{-12}{2} = -6$$',
          rubric: [
            {
              code: 'B1',
              text: 'Mengidentifikasi $a = 1$, $b = 4$, $c = -12$ dan menyubstitusikannya ke rumus ABC'
            },
            {
              code: 'M1',
              text: 'Menghitung nilai di bawah tanda akar $\\sqrt{64} = 8$ hingga diperoleh $x_{1,2} = \\frac{-4 \\pm 8}{2}$'
            },
            {
              code: 'A1',
              text: 'Menentukan akar-akar $x_1 = 2$ dan $x_2 = -6$ dengan tepat'
            }
          ]
        }
      ]
    },
    {
      no: 7,
      title: 'Menyusun Persamaan Kuadrat dari Faktor Akar',
      marks: 2,
      stem: 'Diketahui suatu persamaan kuadrat memiliki akar-akar $-2$ dan $3$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Tentukan persamaan kuadrat yang dibentuk oleh akar-akar tersebut!',
          answer: '$x^2 - x - 6 = 0$',
          principle:
            'Jika suatu persamaan kuadrat memiliki akar-akar $x_1$ dan $x_2$, maka persamaan kuadratnya dapat disusun menggunakan perkalian faktor linear: $(x - x_1)(x - x_2) = 0$.',
          solution:
            'Diketahui $x_1 = -2$ dan $x_2 = 3$.\nSubstitusi ke bentuk perkalian faktor:\n$$(x - (-2))(x - 3) = 0$$\n$$(x + 2)(x - 3) = 0$$\nJabarkan perkaliannya:\n$$x^2 - 3x + 2x - 6 = 0$$\n$$x^2 - x - 6 = 0$$',
          rubric: [
            {
              code: 'M1',
              text: 'Menyusun bentuk faktor $(x - (-2))(x - 3) = 0$ atau $(x + 2)(x - 3) = 0$'
            },
            {
              code: 'A1',
              text: 'Menjabarkan dan menyederhanakan hingga memperoleh $x^2 - x - 6 = 0$'
            }
          ]
        }
      ]
    },
    {
      no: 8,
      title: 'Menyusun Persamaan Kuadrat Menggunakan Jumlah dan Hasil Kali Akar',
      marks: 3,
      stem: 'Diketahui suatu persamaan kuadrat memiliki akar-akar $3$ dan $-\\frac{1}{2}$.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Tentukan persamaan kuadrat tersebut dengan menggunakan rumus jumlah dan hasil kali akar!',
          answer: '$2x^2 - 5x - 3 = 0$',
          principle:
            'Berdasarkan teorema Vieta, persamaan kuadrat dengan akar-akar $x_1$ dan $x_2$ dapat disusun sebagai $x^2 - (x_1 + x_2)x + x_1 x_2 = 0$.',
          solution:
            'Diketahui $x_1 = 3$ dan $x_2 = -\\frac{1}{2}$.\n\nHitung jumlah dan hasil kali akar:\n$$x_1 + x_2 = 3 + \\left(-\\frac{1}{2}\\right) = \\frac{6}{2} - \\frac{1}{2} = \\frac{5}{2}$$\n$$x_1 \\cdot x_2 = 3 \\cdot \\left(-\\frac{1}{2}\\right) = -\\frac{3}{2}$$\nSubstitusikan ke bentuk $x^2 - (x_1 + x_2)x + x_1 x_2 = 0$:\n$$x^2 - \\frac{5}{2}x - \\frac{3}{2} = 0$$\nKalikan kedua ruas dengan $2$ agar seluruh koefisien menjadi bilangan bulat:\n$$2x^2 - 5x - 3 = 0$$',
          rubric: [
            {
              code: 'M1',
              text: 'Menghitung jumlah akar $x_1 + x_2 = \\frac{5}{2}$ dan hasil kali akar $x_1 x_2 = -\\frac{3}{2}$'
            },
            {
              code: 'M1',
              text: 'Menyubstitusi nilai jumlah dan hasil kali akar ke dalam $x^2 - (x_1 + x_2)x + x_1 x_2 = 0$'
            },
            {
              code: 'A1',
              text: 'Mengalikan kedua ruas dengan $2$ sehingga diperoleh persamaan $2x^2 - 5x - 3 = 0$'
            }
          ]
        }
      ]
    }
  ]
};
