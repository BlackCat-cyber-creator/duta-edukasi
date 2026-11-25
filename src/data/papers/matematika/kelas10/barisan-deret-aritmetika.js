/**
 * Paket Soal Terstruktur: Latihan Barisan dan Deret Aritmetika — Kelas X
 * Sumber: [12] Barisan dan Deret Aritmetika.pdf (Duta e-dukasi).
 * Bahasa asli dipertahankan dalam Bahasa Indonesia sesuai dokumen sumber.
 */
export default {
  id: 'mat10-barisan-deret-aritmetika',
  slug: 'barisan-deret-aritmetika',
  subject: 'matematika',
  grade: 10,
  track: 'kurikulum-merdeka',
  topic: 'Barisan dan Deret Aritmetika',
  relatedChapterIds: ['sma10-bab2-barisan-deret'],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'Matematika SMA',
  title: 'Latihan Barisan dan Deret Aritmetika — Kelas X',
  totalMarks: 14,
  instructions:
    'Kerjakan seluruh 5 soal uraian berikut dengan langkah penyelesaian yang jelas dan sistematis.',
  source: {
    org: 'Duta e-dukasi',
    file: '[12] Barisan dan Deret Aritmetika.pdf',
    license: 'CC BY 4.0'
  },
  status: 'published',
  accessTier: 'free',
  questions: [
    {
      no: 1,
      title: 'Menentukan Suku ke-40 Barisan Aritmetika',
      marks: 2,
      stem: 'Diberikan barisan bilangan aritmetika: $7, 5, 3, 1, \\dots$',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Tentukan nilai suku ke-$40$ ($U_{40}$) dari barisan tersebut!',
          answer: '$-71$',
          principle:
            'Suku ke-$n$ barisan aritmetika dengan suku pertama $a$ dan beda $b = U_2 - U_1$ dirumuskan sebagai $U_n = a + (n - 1)b$.',
          solution:
            'Dari barisan $7, 5, 3, 1, \\dots$, diketahui:\n- Suku pertama: $a = 7$\n- Beda antar suku: $b = 5 - 7 = -2$\n\nSubstitusikan $n = 40$, $a = 7$, dan $b = -2$ ke dalam rumus suku ke-$n$:\n$$U_n = a + (n - 1)b$$\n$$U_{40} = 7 + (40 - 1)(-2)$$\n$$U_{40} = 7 + 39 \\times (-2) = 7 + (-78) = -71$$\nJadi, suku ke-$40$ barisan aritmetika tersebut adalah $-71$.',
          rubric: [
            { code: 'B1', text: 'Mengidentifikasi suku pertama $a = 7$ dan beda $b = -2$ dengan tepat' },
            { code: 'A1', text: 'Menghitung nilai $U_{40} = -71$ dengan benar' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Menentukan Rumus Suku ke-n Barisan Aritmetika',
      marks: 2,
      stem: 'Diberikan barisan bilangan aritmetika: $5, -2, -9, -16, \\dots$',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Tentukan rumus suku ke-$n$ ($U_n$) dari barisan aritmetika tersebut!',
          answer: '$U_n = 12 - 7n$',
          principle:
            'Rumus suku ke-$n$ barisan aritmetika diperoleh dengan mensubstitusikan nilai suku pertama $a$ dan beda $b$ ke persamaan umum $U_n = a + (n - 1)b$ lalu menyederhanakannya.',
          solution:
            'Dari barisan $5, -2, -9, -16, \\dots$, diketahui:\n- Suku pertama: $a = 5$\n- Beda antar suku: $b = -2 - 5 = -7$\n\nSubstitusikan $a = 5$ dan $b = -7$ ke rumus $U_n$:\n$$U_n = a + (n - 1)b$$\n$$U_n = 5 + (n - 1)(-7)$$\n$$U_n = 5 - 7n + 7$$\n$$U_n = 12 - 7n$$\nJadi, rumus suku ke-$n$ barisan aritmetika tersebut adalah $U_n = 12 - 7n$.',
          rubric: [
            { code: 'B1', text: 'Mengidentifikasi suku pertama $a = 5$ dan beda $b = -7$ dengan tepat' },
            { code: 'A1', text: 'Menjabarkan dan menyederhanakan hingga diperoleh $U_n = 12 - 7n$' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Aplikasi Barisan Aritmetika pada Susunan Kursi Gedung',
      marks: 3,
      stem: 'Dalam suatu gedung pertunjukan disusun kursi dengan baris paling depan terdiri dari $12$ kursi, baris kedua berisi $14$ kursi, baris ketiga berisi $16$ kursi, dan seterusnya mengikuti pola yang sama.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan banyaknya kursi pada baris ke-$20$!',
          answer: '$50$ kursi',
          principle:
            'Susunan jumlah kursi tiap baris bertambah tetap sebesar $b$, sehingga membentuk barisan aritmetika dengan $U_n = a + (n - 1)b$.',
          solution:
            'Berdasarkan soal, banyak kursi setiap baris membentuk barisan aritmetika $12, 14, 16, \\dots$ dengan:\n- Suku pertama (baris ke-1): $a = 12$\n- Beda (selisih kursi tiap baris): $b = 14 - 12 = 2$\n\nBanyaknya kursi pada baris ke-$20$ ($U_{20}$) adalah:\n$$U_n = a + (n - 1)b$$\n$$U_{20} = 12 + (20 - 1)(2)$$\n$$U_{20} = 12 + 19 \\times 2 = 12 + 38 = 50$$\nJadi, banyaknya kursi pada baris ke-$20$ adalah $50$ kursi.',
          rubric: [
            { code: 'B1', text: 'Memodelkan permasalahan sebagai barisan aritmetika dengan $a = 12$ dan $b = 2$' },
            { code: 'M1', text: 'Mensubstitusi $n = 20$ ke dalam rumus $U_n = a + (n - 1)b$' },
            { code: 'A1', text: 'Memperoleh banyaknya kursi pada baris ke-$20$ adalah $50$ kursi' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Menentukan Rumus Jumlah n Suku Pertama Deret Aritmetika',
      marks: 3,
      stem: 'Diberikan deret bilangan aritmetika: $2 + 4 + 6 + \\dots + U_n$.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan rumus jumlah $n$ suku pertama ($S_n$) dari deret bilangan tersebut!',
          answer: '$S_n = n + n^2$',
          principle:
            'Jumlah $n$ suku pertama deret aritmetika dengan suku pertama $a$ dan beda $b$ dihitung menggunakan rumus $S_n = \\frac{n}{2}\\left(2a + (n - 1)b\\right)$.',
          solution:
            'Dari deret $2 + 4 + 6 + \\dots + U_n$, diketahui:\n- Suku pertama: $a = 2$\n- Beda antar suku: $b = 4 - 2 = 2$\n\nSubstitusikan nilai $a$ dan $b$ ke dalam rumus jumlah $n$ suku pertama:\n$$S_n = \\frac{n}{2}\\left(2a + (n - 1)b\\right)$$\n$$S_n = \\frac{n}{2}\\left(2(2) + (n - 1)(2)\\right)$$\n$$S_n = \\frac{n}{2}(4 + 2n - 2)$$\n$$S_n = \\frac{n}{2}(2 + 2n)$$\n$$S_n = \\frac{n}{2} \\cdot 2(1 + n) = n(1 + n) = n + n^2$$\nJadi, rumus jumlah $n$ suku pertama deret aritmetika tersebut adalah $S_n = n + n^2$.',
          rubric: [
            { code: 'B1', text: 'Mengidentifikasi $a = 2$ dan $b = 2$ dari deret yang diberikan' },
            { code: 'M1', text: 'Mensubstitusi nilai $a$ dan $b$ ke rumus $S_n = \\frac{n}{2}(2a + (n - 1)b)$' },
            { code: 'A1', text: 'Menyederhanakan bentuk aljabar hingga diperoleh $S_n = n + n^2$' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Menentukan Jumlah Suku Pertama dari Dua Suku yang Diketahui',
      marks: 4,
      stem: 'Diketahui suatu deret aritmetika memiliki suku ke-$3$ adalah $24$ dan suku ke-$6$ adalah $36$.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Tentukan jumlah $15$ suku pertama ($S_{15}$) dari deret aritmetika tersebut!',
          answer: '$660$',
          principle:
            'Dengan menggunakan $U_n = a + (n - 1)b$, dua suku yang diketahui membentuk sistem persamaan linear dua variabel dalam $a$ dan $b$. Setelah $a$ dan $b$ ditemukan, jumlah $n$ suku pertama dihitung melalui $S_n = \\frac{n}{2}\\left(2a + (n - 1)b\\right)$.',
          solution:
            'Diketahui $U_3 = 24$ dan $U_6 = 36$. Menggunakan rumus $U_n = a + (n - 1)b$, kita peroleh dua persamaan:\n$$U_3 = a + 2b = 24 \\quad \\dots \\text{(i)}$$\n$$U_6 = a + 5b = 36 \\quad \\dots \\text{(ii)}$$\n\n**Langkah 1: Eliminasi $a$ dari persamaan (i) dan (ii)**\n$$(a + 2b) - (a + 5b) = 24 - 36$$\n$$-3b = -12 \\implies b = 4$$\n\n**Langkah 2: Substitusi $b = 4$ ke persamaan (i)**\n$$a + 2(4) = 24$$\n$$a + 8 = 24 \\implies a = 24 - 8 = 16$$\n\n**Langkah 3: Hitung jumlah $15$ suku pertama ($S_{15}$)**\n$$S_n = \\frac{n}{2}\\left(2a + (n - 1)b\\right)$$\n$$S_{15} = \\frac{15}{2}\\left(2(16) + (15 - 1)(4)\\right)$$\n$$S_{15} = \\frac{15}{2}(32 + 14 \\times 4) = \\frac{15}{2}(32 + 56) = \\frac{15}{2}(88) = 15 \\times 44 = 660$$\nJadi, jumlah $15$ suku pertama deret aritmetika tersebut adalah $660$.',
          rubric: [
            { code: 'M1', text: 'Menyusun sistem persamaan $a + 2b = 24$ dan $a + 5b = 36$ dari informasi $U_3$ dan $U_6$' },
            { code: 'A1', text: 'Menemukan nilai beda $b = 4$ dan suku pertama $a = 16$ melalui eliminasi dan substitusi' },
            { code: 'M1', text: 'Mensubstitusi $n = 15$, $a = 16$, dan $b = 4$ ke rumus $S_n$' },
            { code: 'A1', text: 'Menghitung nilai akhir $S_{15} = 660$ dengan tepat' }
          ]
        }
      ]
    }
  ]
};
