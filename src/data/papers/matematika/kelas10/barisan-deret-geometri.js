/**
 * Paket Soal Terstruktur: Latihan Barisan dan Deret Geometri — Kelas X
 * Sumber: [13] Barisan dan Deret Geometri.pdf (Duta e-dukasi).
 * Bahasa asli dipertahankan dalam Bahasa Indonesia sesuai dokumen sumber.
 */
export default {
  id: 'mat10-barisan-deret-geometri',
  slug: 'barisan-deret-geometri',
  subject: 'matematika',
  grade: 10,
  track: 'kurikulum-merdeka',
  topic: 'Barisan dan Deret Geometri',
  relatedChapterIds: ['sma10-bab2-barisan-deret'],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'Matematika SMA',
  title: 'Latihan Barisan dan Deret Geometri — Kelas X',
  totalMarks: 10,
  instructions:
    'Kerjakan seluruh 3 soal uraian barisan dan deret geometri berikut beserta langkah penyelesaian yang runtut dan jelas.',
  source: {
    org: 'Duta e-dukasi',
    file: '[13] Barisan dan Deret Geometri.pdf',
    license: 'CC BY 4.0'
  },
  status: 'published',
  accessTier: 'free',
  questions: [
    {
      no: 1,
      title: 'Pemotongan Kertas (Barisan Geometri)',
      marks: 3,
      stem: 'Selembar kertas dipotong menjadi dua bagian. Setiap bagian dipotong kembali menjadi dua bagian, dan seterusnya.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan jumlah potongan kertas setelah potongan kelima!',
          answer: '$32$ potongan kertas',
          principle:
            'Rumus suku ke-$n$ barisan geometri adalah $U_n = ar^{n-1}$ dengan suku pertama $a$ dan rasio $r$; pastikan indeks $n$ selaras dengan banyaknya pemotongan.',
          solution:
            'Sebelum dipotong, terdapat $1$ lembar kertas. Setiap kali dipotong menjadi dua, banyaknya potongan kertas berlipat ganda sehingga rasionya $r = 2$:\n\n- Setelah potongan ke-$1$: $U_1 = 2$ bagian\n- Setelah potongan ke-$2$: $U_2 = 4$ bagian\n- Setelah potongan ke-$3$: $U_3 = 8$ bagian\n\nDengan menetapkan suku pertama setelah potongan ke-$1$ sebagai $a = U_1 = 2$ dan rasio $r = 2$, banyaknya potongan setelah potongan kelima ($n = 5$) adalah:\n$$U_5 = a r^{5-1} = 2 \\times 2^4 = 2 \\times 16 = 32$$\n\n*(Catatan: Jika $a = 1$ diambil sebagai kondisi awal sebelum kertas dipotong, maka keadaan setelah $5$ kali pemotongan merupakan suku ke-$6$, yaitu $U_6 = 1 \\times 2^{6-1} = 2^5 = 32$ potongan kertas.)*\n\nJadi, jumlah potongan kertas setelah potongan kelima adalah $32$ potongan kertas.',
          rubric: [
            {
              code: 'B1',
              text: 'Mengidentifikasi rasio $r = 2$ dan kondisi awal $1$ lembar (atau $U_1 = 2$ setelah potongan pertama)'
            },
            {
              code: 'M1',
              text: 'Menerapkan rumus suku ke-$n$ barisan geometri $U_n = ar^{n-1}$ dengan indeks yang tepat untuk pemotongan kelima'
            },
            {
              code: 'A1',
              text: 'Memperoleh hasil akhir $32$ potongan kertas dengan benar'
            }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Menentukan Suku ke-7 dari Suku Pertama dan Suku ke-9',
      marks: 4,
      stem: 'Pada suatu deret geometri diketahui bahwa suku pertamanya adalah $3$ dan suku ke-$9$ adalah $768$.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Tentukan suku ke-$7$ deret tersebut!',
          answer: '$U_7 = 192$',
          principle:
            'Gunakan rumus suku ke-$n$ barisan geometri $U_n = ar^{n-1}$ untuk mencari nilai rasio $r$, kemudian hitung $U_7 = ar^6$.',
          solution:
            'Diketahui suku pertama $a = 3$ dan suku ke-$9$ adalah $U_9 = 768$.\n\nLangkah 1: Tentukan rasio $r$ menggunakan rumus $U_n = a r^{n-1}$:\n$$U_9 = a r^{9-1} = 768$$\n$$3 r^8 = 768$$\n$$r^8 = \\frac{768}{3} = 256$$\n$$r = \\pm \\sqrt[8]{256} = \\pm 2$$\n\nLangkah 2: Hitung suku ke-$7$ ($U_7 = a r^{7-1} = a r^6$). Karena pangkat $6$ bernilai genap, baik $r = 2$ maupun $r = -2$ menghasilkan $(\\pm 2)^6 = 64$:\n$$U_7 = 3 \\times (\\pm 2)^6 = 3 \\times 64 = 192$$\n\nJadi, suku ke-$7$ deret tersebut adalah $192$.',
          rubric: [
            {
              code: 'B1',
              text: 'Menuliskan persamaan suku ke-$9$: $U_9 = ar^8 = 768$ dengan $a = 3$'
            },
            {
              code: 'M1',
              text: 'Menghitung nilai $r^8 = \\frac{768}{3} = 256$'
            },
            {
              code: 'M1',
              text: 'Menentukan $r = \\pm 2$ dan mensubstitusi ke rumus $U_7 = ar^6$'
            },
            {
              code: 'A1',
              text: 'Memperoleh nilai akhir $U_7 = 192$ dengan tepat'
            }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Jumlah 6 Suku Pertama Deret Geometri',
      marks: 3,
      stem: 'Diberikan deret geometri $2 + 6 + 18 + \\dots$',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Tentukan jumlah $6$ suku pertama deret geometri tersebut!',
          answer: '$S_6 = 728$',
          principle:
            'Jumlah $n$ suku pertama deret geometri dengan rasio $r > 1$ dirumuskan sebagai $S_n = \\frac{a(r^n - 1)}{r - 1}$.',
          solution:
            'Dari deret geometri $2 + 6 + 18 + \\dots$, diperoleh:\n- Suku pertama: $a = 2$\n- Rasio: $r = \\frac{6}{2} = 3$ (karena $r > 1$, gunakan $S_n = \\frac{a(r^n - 1)}{r - 1}$)\n\nHitung jumlah $6$ suku pertama ($S_6$):\n$$S_6 = \\frac{2(3^6 - 1)}{3 - 1} = \\frac{2(729 - 1)}{2} = 729 - 1 = 728$$\n\n*(Pemeriksaan: keenam sukunya adalah $2, 6, 18, 54, 162, 486$ dengan jumlah $2 + 6 + 18 + 54 + 162 + 486 = 728$.)*\n\nJadi, jumlah $6$ suku pertama deret geometri tersebut adalah $728$.',
          rubric: [
            {
              code: 'B1',
              text: 'Menentukan suku pertama $a = 2$ dan rasio $r = 3$ dengan tepat'
            },
            {
              code: 'M1',
              text: 'Mensubstitusikan $a$, $r$, dan $n = 6$ ke rumus $S_n = \\frac{a(r^n - 1)}{r - 1}$'
            },
            {
              code: 'A1',
              text: 'Menghitung hasil akhir $S_6 = 728$ dengan tepat'
            }
          ]
        }
      ]
    }
  ]
};
