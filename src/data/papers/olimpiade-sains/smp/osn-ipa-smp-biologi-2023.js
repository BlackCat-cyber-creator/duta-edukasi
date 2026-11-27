/**
 * Paket Soal Terstruktur: Latihan OSN IPA SMP (Biologi) 2023
 * Sumber: osn_bio_smp_2023.pdf (30 soal lengkap).
 */
const OK = [{ code: 'A1', text: 'Jawaban benar sesuai konsep dan pembahasan.' }];

export default {
  id: 'osn-ipa-smp-biologi-2023',
  slug: 'osn-ipa-smp-biologi-2023',
  subject: 'olimpiade-sains',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'Latihan OSN IPA SMP (Biologi) 2023: fisiologi tumbuhan, biologi sel, genetika, ekologi, sistem organ, evolusi, dan bioteknologi',
  relatedChapterIds: [
    'ipa7-bab5-klasifikasi-makhluk-hidup',
    'ipa7-bab6-ekologi-keanekaragaman-hayati',
    'ipa8-bab1-sel',
    'ipa8-bab2-struktur-fungsi-tubuh',
    'ipa9-bab2-koordinasi-reproduksi-homeostasis',
    'ipa9-bab6-pewarisan-sifat-bioteknologi'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'Latihan OSN IPA SMP (Biologi) 2023',
  totalMarks: 36,
  instructions:
    'Kerjakan seluruh 30 butir soal berikut yang terbagi menjadi Bagian A (20 soal pilihan ganda dan pilihan 1234, nomor 1–20, masing-masing 1 poin), Bagian B (5 soal sebab-akibat, nomor 21–25, masing-masing 1 poin), dan Bagian C (5 soal isian singkat, nomor 26–30: nomor 26, 27, 28, dan 30 masing-masing 2 poin serta nomor 29 bernilai 3 poin), dengan total 36 poin.',
  source: {
    org: 'OSN-K',
    file: 'osn_bio_smp_2023.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Pilihan Ganda dan Pilihan 1234',
      marks: 20,
      stem: 'Pilihlah satu jawaban yang paling tepat untuk setiap soal berikut (20 butir soal, nomor 1–20; masing-masing bernilai 1 poin).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Pada pembuluh xilem, air dapat naik karena ....\n\nA. tekanan osmosis\nB. transpirasi stomata\nC. gaya gravitasi\nD. tekanan turgor sel',
          answer: 'B. transpirasi stomata',
          principle:
            'Pengangkutan air ke puncak tumbuhan tinggi dijelaskan oleh teori kohesi-tegangan (daya isap daun): penguapan air melalui stomata menciptakan tarikan (tegangan) negatif di pembuluh xilem.',
          solution:
            '1. Ketika tumbuhan membuka stomata, air menguap dari permukaan sel mesofil daun ke atmosfer (**transpirasi stomata**).\n2. Penguapan ini menurunkan potensial air di daun sehingga menarik kolom air di pembuluh xilem ke atas.\n3. Tarikan transpirasi tersebut diteruskan sepanjang pembuluh xilem dari akar ke daun berkat gaya **kohesi** antarmolekul air dan **adhesi** antara air dengan dinding xilem.\n4. Tekanan osmosis hanya membantu pemasukan air ke sel akar di bagian bawah (tekanan akar, yang tidak cukup kuat untuk menaikkan air hingga puluhan meter), gaya gravitasi justru menarik air ke bawah, dan tekanan turgor menjaga kekakuan sel.\n\nJadi, jawaban yang tepat adalah **B. transpirasi stomata**.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Perbandingan jumlah ion $\\text{Na}^+$ dan $\\text{K}^+$ melalui membran sel pada proses transpor aktif adalah ....\n\nA. $1\\text{ Na}^+$ masuk, $2\\text{ K}^+$ keluar\nB. $1\\text{ Na}^+$ keluar, $2\\text{ K}^+$ masuk\nC. $3\\text{ Na}^+$ masuk, $2\\text{ K}^+$ keluar\nD. $3\\text{ Na}^+$ keluar, $2\\text{ K}^+$ masuk',
          answer: 'D. 3 Na+ keluar, 2 K+ masuk',
          principle:
            'Pompa natrium-kalium ($\\text{Na}^+/\\text{K}^+$-ATPase) adalah transpor aktif primer yang memindahkan $3$ ion $\\text{Na}^+$ keluar sel dan $2$ ion $\\text{K}^+$ masuk ke dalam sel untuk setiap $1$ molekul ATP yang dihidrolisis.',
          solution:
            '1. Pada keadaan istirahat, konsentrasi $\\text{Na}^+$ lebih tinggi di luar sel dan konsentrasi $\\text{K}^+$ lebih tinggi di dalam sel.\n2. Untuk mempertahankan gradien elektrokimia tersebut melawan gradien konsentrasi, pompa $\\text{Na}^+/\\text{K}^+$ menggunakan energi dari hidrolisis $1$ molekul ATP.\n3. Dalam satu siklus pompa, **$3$ ion $\\text{Na}^+$ dipompa keluar sel** dan **$2$ ion $\\text{K}^+$ dipompa masuk ke dalam sel**.\n4. Perbandingan $3:2$ ini juga membuat bagian dalam membran bermuatan lebih negatif dibanding bagian luar (bersifat elektrogenik).\n\nJadi, jawaban yang tepat adalah **D. $3\\text{ Na}^+$ keluar, $2\\text{ K}^+$ masuk**.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Konsumsi oksigen anak ayam dengan berat badan $110\\text{ gram}$ ($27^\\circ\\text{C}$, $700\\text{ mmHg}$) adalah $550\\text{ mL O}_2$ per $10\\text{ menit}$. Laju respirasi anak ayam tersebut adalah ....\n\nA. $28\\text{ mL O}_2/\\text{gram}/\\text{jam}$\nB. $29\\text{ mL O}_2/\\text{gram}/\\text{jam}$\nC. $30\\text{ mL O}_2/\\text{gram}/\\text{jam}$\nD. $31\\text{ mL O}_2/\\text{gram}/\\text{jam}$',
          answer: 'C. 30 ml O2/gram/jam',
          principle:
            'Laju respirasi spesifik (laju konsumsi oksigen per satuan massa per jam) dihitung dengan mengonversi volume $\\text{O}_2$ menjadi per jam ($60\\text{ menit}$) lalu membaginya dengan massa tubuh hewan.',
          solution:
            'Diketahui:\n- Massa anak ayam ($m$) $= 110\\text{ gram}$\n- Volume $\\text{O}_2$ yang dikonsumsi $= 550\\text{ mL}$ dalam $10\\text{ menit}$\n\nLangkah perhitungan:\n1. Ubah konsumsi oksigen dari per $10\\text{ menit}$ menjadi per $1\\text{ jam}$ ($60\\text{ menit}$):\n$$\\text{Konsumsi per jam} = 550\\text{ mL} \\times \\frac{60\\text{ menit}}{10\\text{ menit}} = 550 \\times 6 = 3300\\text{ mL O}_2/\\text{jam}.$$\n2. Bagi dengan berat badan anak ayam ($110\\text{ gram}$):\n$$\\text{Laju respirasi} = \\frac{3300\\text{ mL O}_2/\\text{jam}}{110\\text{ gram}} = 30\\text{ mL O}_2/\\text{gram}/\\text{jam}.$$\n\nJadi, jawaban yang tepat adalah **C. $30\\text{ mL O}_2/\\text{gram}/\\text{jam}$**.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          figures: [
            {
              src: '/papers/osn-ipa-smp-biologi-2023/fig-4.webp',
              alt: 'Diagram anatomi organ sistem pencernaan manusia dengan label angka Romawi satu hingga dua belas',
              caption: 'Diagram sistem pencernaan manusia untuk Soal No. 4.'
            }
          ],
          prompt:
            'Perhatikan gambar organ sistem pencernaan di bawah ini.\n\nOrgan yang menghasilkan empedu, hormon sekretin, dan enzim untuk pencernaan lemak adalah ....\n\nA. V, VI, XI\nB. XI, XII, V\nC. X, VI, XII\nD. IV, V, VI',
          answer: 'C. X, VI, XII',
          principle:
            'Hati memproduksi cairan empedu (untuk mengemulsikan lemak), usus halus bagian duodenum menyekresikan hormon sekretin, dan pankreas menghasilkan enzim lipase untuk mencerna lemak.',
          solution:
            'Identifikasi organ yang ditunjuk angka Romawi pada gambar:\n- **IV:** lambung\n- **V:** usus besar (kolon transversum)\n- **VI:** usus halus (duodenum–jejunum–ileum)\n- **X:** **hati** $\\rightarrow$ organ yang **menghasilkan empedu** untuk mengemulsikan lemak.\n- **XI:** kantung empedu $\\rightarrow$ hanya menyimpan dan memekatkan empedu, bukan memproduksinya.\n- **XII:** **pankreas** $\\rightarrow$ menghasilkan getah pankreas yang mengandung **enzim lipase** untuk pencernaan lemak.\n\nSementara itu, **hormon sekretin** diproduksi oleh sel-sel mukosa **usus halus/duodenum (VI)** sebagai respons terhadap masuknya kimus asam dari lambung.\n\nJadi, urutan organ penghasil empedu, hormon sekretin, dan enzim pencerna lemak adalah **X, VI, XII** (**C**).',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Tipe jaringan pengangkut dengan urutan posisi dari luar ke dalam adalah floem luar, kambium luar, xilem, kambium dalam, floem dalam adalah ....\n\nA. kolateral terbuka\nB. kolateral tertutup\nC. bikolateral\nD. konsentris',
          answer: 'C. bikolateral',
          principle:
            'Berkas pengangkut bikolateral memiliki satu bagian xilem di tengah yang diapit oleh dua bagian floem (floem luar dan floem dalam) serta kambium.',
          solution:
            'Mari tinjau susunan masing-masing tipe berkas pengangkut:\n- **Kolateral tertutup:** xilem di dalam dan floem di luar, **tanpa** kambium di antaranya (khas tumbuhan monokotil).\n- **Kolateral terbuka:** floem di luar, kambium di tengah, dan xilem di dalam (khas batang dikotil pada umumnya).\n- **Bikolateral:** xilem berada di tengah dan diapit oleh **dua** floem dan kambium, dengan urutan dari luar ke dalam: **floem luar $\\rightarrow$ kambium luar $\\rightarrow$ xilem $\\rightarrow$ kambium dalam $\\rightarrow$ floem dalam** (ditemukan misalnya pada famili *Cucurbitaceae* dan *Solanaceae*).\n- **Konsentris:** salah satu jaringan (xilem atau floem) mengelilingi jaringan lainnya secara melingkar (amfikribal atau amfivasal).\n\nJadi, jawaban yang tepat adalah **C. bikolateral**.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Jenis kolenkim yang mengalami penebalan tangensial pada bagian dalam dan luar dinding sel terdapat pada tanaman ....\n\nA. *Apium graveolens*\nB. *Sambucus nigra*\nC. *Michelia figo*\nD. *Ageratum conyzoides*',
          answer: 'B. Sambucus nigra',
          principle:
            'Kolenkim lamelar (lempeng/papan) memiliki penebalan dinding primer terutama pada dinding tangensial (dinding dalam dan luar yang sejajar permukaan organ), contoh klasiknya terdapat pada korteks batang *Sambucus nigra*.',
          solution:
            'Berdasarkan pola penebalan dinding selnya, jaringan kolenkim dibagi menjadi beberapa tipe:\n1. **Kolenkim sudut (angular):** penebalan terjadi pada sudut-sudut pertemuan sel, misalnya pada tangkai daun *Apium graveolens* (seledri).\n2. **Kolenkim lamelar/papan (*lamellar collenchyma*):** penebalan terjadi terutama pada **dinding tangensial bagian dalam dan luar** (sejajar permukaan epidermis), sehingga tampak tersusun berlapis seperti papan tanpa ruang antarsel. Contoh klasik tumbuhan pemilik kolenkim tipe ini adalah korteks batang ***Sambucus nigra***.\n3. **Kolenkim lakunar:** penebalan terjadi di sekitar ruang antarsel.\n4. **Kolenkim anular:** penebalan merata membentuk cincin di sekeliling dinding sel.\n\nJadi, jawaban yang tepat adalah **B. *Sambucus nigra***.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Senyawa nitrogen yang dimanfaatkan oleh tumbuhan adalah ....\n\nA. amonium\nB. nitrit\nC. nitrat\nD. $\\text{N}_2$',
          answer: 'C. nitrat',
          principle:
            'Pada siklus nitrogen ekosistem darat, sebagian besar tumbuhan menyerap nitrogen anorganik dari tanah terutama dalam bentuk ion nitrat ($\\text{NO}_3^-$) hasil nitrifikasi.',
          solution:
            'Tinjau masing-masing bentuk nitrogen dalam hubungannya dengan nutrisi tumbuhan:\n- **Gas $\\text{N}_2$:** meskipun melimpah di atmosfer ($\\approx 78\\%$), ikatan rangkap tiga $\\text{N}\\equiv\\text{N}$ sangat stabil sehingga tumbuhan **tidak dapat** menyerapnya langsung tanpa fiksasi oleh bakteri (seperti *Rhizobium* atau *Azotobacter*).\n- **Nitrit ($\\text{NO}_2^-$):** merupakan senyawa antara yang singkat pada proses nitrifikasi dan bersifat toksik bagi tumbuhan jika terakumulasi.\n- **Amonium ($\\text{NH}_4^+$):** dapat diserap pada beberapa tumbuhan (seperti padi di lahan tergenang), tetapi pada tanah aerobik umumnya segera mengalami nitrifikasi menjadi nitrat.\n- **Nitrat ($\\text{NO}_3^-$):** merupakan bentuk utama senyawa nitrogen yang paling banyak diserap, diangkut melalui xilem, dan diasimilasi oleh tumbuhan darat untuk membentuk asam amino serta protein.\n\nJadi, jawaban yang tepat adalah **C. nitrat**.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Pada sel-sel beta pankreas banyak ditemukan organel ....\n\nA. badan Golgi\nB. lisosom\nC. mitokondria\nD. sitoskeleton',
          answer: 'A. badan Golgi',
          principle:
            'Sel sekretori yang aktif memproduksi dan menyekresikan hormon protein (seperti sel beta pankreas penghasil insulin) kaya akan retikulum endoplasma kasar dan badan Golgi.',
          solution:
            '1. Sel beta pada pulau Langerhans pankreas berfungsi menyintesis, mengemas, dan menyekresikan hormon **insulin** (hormon peptida/protein) ke dalam aliran darah.\n2. Hormon protein yang disekresikan keluar sel dibuat di ribosom pada retikulum endoplasma kasar, lalu dikirim ke **badan Golgi** untuk dimodifikasi, dipilah, dan dikemas ke dalam vesikula sekretori sebelum dilepaskan melalui eksositosis.\n3. Oleh karena aktivitas sekresinya yang tinggi, sel beta pankreas sangat kaya akan **badan Golgi**.\n\nJadi, jawaban yang tepat adalah **A. badan Golgi**.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Sampai saat ini, produk *Single Cell Protein* (SCP) belum dimungkinkan untuk dikonsumsi manusia secara luas karena SCP dapat menyebabkan ....\n\nA. asam urat berlebih\nB. asam lambung naik\nC. tukak lambung\nD. sembelit',
          answer: 'A. asam urat berlebih',
          principle:
            'Mikroorganisme penghasil *Single Cell Protein* (SCP) tumbuh sangat cepat sehingga memiliki kadar asam nukleat (khususnya RNA dan basa purin) yang tinggi; pemecahan purin pada manusia menghasilkan asam urat.',
          solution:
            '1. *Single Cell Protein* (SCP) adalah protein yang dihasilkan dari biomassa mikroorganisme bersel tunggal seperti khamir, bakteri, atau mikroalga.\n2. Karena sel mikroba membelah sangat cepat, kandungan **asam nukleat** (terutama RNA) di dalamnya cukup tinggi (sekitar $5\\%$–$15\\%$ berat kering).\n3. Di dalam tubuh manusia, basa nitrogen golongan **purin** (adenin dan guanin) dari pemecahan asam nukleat dimetabolisme menjadi **asam urat**.\n4. Konsumsi asam nukleat berlebih dari SCP tanpa perlakuan penurunan kadar RNA dapat memicu penumpukan asam urat (**hiperurisemia** / penyakit gout) dan batu ginjal.\n\nJadi, jawaban yang tepat adalah **A. asam urat berlebih**.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Di antara ciri-ciri berikut ini:\n1. Bermuatan negatif\n2. Terdiri basa N purin: Sitosin dan Guanin\n3. Terdiri basa N pirimidin: Adenin dan Timin\n4. Gulanya berupa ribosa yang tidak kehilangan atom oksigen\n\nyang bukan merupakan ciri-ciri DNA adalah ....\n\nA. 1, 2 dan 3\nB. 2, 3 dan 4\nC. 3, 4 dan 1\nD. 4, 1 dan 2',
          answer: 'B. 2, 3 dan 4',
          principle:
            'Molekul DNA bermuatan negatif karena gugus fosfat, memiliki gula deoksiribosa (kehilangan satu atom O pada C-$2\'$), basa purin Adenin & Guanin, serta basa pirimidin Sitosin & Timin.',
          solution:
            'Mari periksa kebenaran tiap pernyataan terhadap struktur DNA:\n1. **Bermuatan negatif — BENAR:** tulang punggung gula-fosfat DNA memiliki gugus fosfat ($\\text{PO}_4^{3-}$) yang terionisasi negatif pada pH fisiologis.\n2. **Basa N purin: Sitosin dan Guanin — SALAH:** basa purin adalah **Adenin (A) dan Guanin (G)** (bercincin ganda), sedangkan Sitosin termasuk pirimidin.\n3. **Basa N pirimidin: Adenin dan Timin — SALAH:** basa pirimidin pada DNA adalah **Sitosin (C) dan Timin (T)** (bercincin tunggal), sedangkan Adenin termasuk purin.\n4. **Gulanya berupa ribosa yang tidak kehilangan atom oksigen — SALAH:** gula penyusun DNA adalah **deoksiribosa**, yaitu gula pentosa yang kehilangan satu atom oksigen pada atom karbon nomor $2\'$ (gula ribosa tanpa kehilangan atom O dimiliki oleh RNA).\n\nKarena soal menanyakan yang **bukan** merupakan ciri-ciri DNA, pernyataan yang salah adalah **2, 3, dan 4**.\n\nJadi, jawaban yang tepat adalah **B. 2, 3 dan 4**.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Beberapa karakteristik khas *Phaeophyta* yang membedakannya dari jenis alga lain adalah ....\n1. mempunyai pigmen klorofil c dan fukosantin\n2. ditemukan di habitat tanah yang tergenang\n3. memiliki dinding sel yang terbuat dari bahan silika atau polisakarida, seperti alginat\n4. struktur sel dapat uniseluler maupun multiseluler\n\nPernyataan yang benar adalah ....\n\nA. 1 dan 2\nB. 1 dan 3\nC. 3 dan 4\nD. 2 dan 4',
          answer: 'B. 1 dan 3',
          principle:
            '*Phaeophyta* (alga cokelat) merupakan kelompok alga multiseluler penghuni perairan laut dengan pigmen dominan fukosantin (bersama klorofil $a$ dan $c$) serta dinding sel selulosa yang mengandung polisakarida alginat.',
          solution:
            'Analisis setiap pernyataan mengenai *Phaeophyta* (alga cokelat):\n1. **BENAR:** Pigmen fotosintetik khas *Phaeophyta* meliputi klorofil $a$, klorofil $c$, karotenoid, dan **fukosantin** (*fucoxanthin*) yang memberi warna cokelat.\n2. **SALAH:** *Phaeophyta* hampir seluruhnya hidup di **perairan laut** (khususnya zona intertidal hingga subtidal beriklim dingin–sedang), bukan di habitat tanah tergenang.\n3. **BENAR:** Dinding sel *Phaeophyta* tersusun atas selulosa yang dilapisi polisakarida matriks khas seperti **alginat** (asam alginat) dan fukoidan.\n4. **SALAH:** Berbeda dengan *Chlorophyta*, tidak ada anggota *Phaeophyta* yang uniseluler; semuanya **multiseluler** (berupa filamen bercabang hingga talus besar seperti *Sargassum* dan *Macrocystis*).\n\nDengan demikian, pernyataan yang benar adalah **1 dan 3**.\n\nJadi, jawaban yang tepat adalah **B. 1 dan 3**.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Di bawah ini adalah reaksi kimia eksotermik pada kelompok bakteri *Geobacter* yang dapat menghasilkan listrik:\nAnoda: $2\\text{CH}_2\\text{O} + 4\\text{OH}^- \\rightarrow 2\\text{CO}_2 + 4\\text{H}_2\\text{O} + 4e^-$\nKatoda: $\\text{O}_2 + 4\\text{H}_2\\text{O} + 4e^- \\rightarrow 4\\text{OH}^-$\n\nPerhatikan beberapa pernyataan berikut:\n1. pada kutub katoda terjadi reaksi oksidasi\n2. reaksi $\\text{O}_2 + 4\\text{H}_2\\text{O} + 4e^- \\rightarrow 4\\text{OH}^-$ merupakan reaksi reduksi\n3. elektron mengalir dari anoda ke katoda dan menghasilkan arus listrik\n4. elektron mengalir dari katoda ke anoda dan menghasilkan arus listrik\n\nPernyataan yang benar berdasarkan fenomena di atas adalah ....\n\nA. 1, 2, 3\nB. 1 dan 3\nC. 3 dan 4\nD. 2 dan 4',
          answer:
            '2 dan 3 (catatan naskah sumber: opsi tidak memuat kombinasi 2 dan 3; kunci sumber menandai B. 1 dan 3)',
          principle:
            'Pada sel elektrokimia (termasuk sel bahan bakar mikrob *Geobacter*), reaksi oksidasi (pelepasan elektron) berlangsung di anoda, reaksi reduksi (penangkapan elektron) berlangsung di katoda, dan elektron mengalir melalui penghantar luar dari anoda menuju katoda.',
          solution:
            'Mari evaluasi kebenaran setiap pernyataan berdasarkan persamaan reaksi sel:\n1. **SALAH:** Pada kutub **katoda** terjadi reaksi **reduksi** (penangkapan elektron), sedangkan oksidasi terjadi di anoda.\n2. **BENAR:** Reaksi $\\text{O}_2 + 4\\text{H}_2\\text{O} + 4e^- \\rightarrow 4\\text{OH}^-$ menangkap $4$ elektron di ruas kiri dan bilangan oksidasi oksigen turun dari $0$ (dalam $\\text{O}_2$) menjadi $-2$ (dalam $\\text{OH}^-$), sehingga merupakan **reaksi reduksi**.\n3. **BENAR:** Oksidasi di anoda melepaskan elektron ($4e^-$) yang kemudian **mengalir dari anoda menuju katoda** melalui rangkaian luar sehingga menghasilkan arus listrik.\n4. **SALAH:** Elektron tidak mengalir dari katoda ke anoda (arah sebaliknya adalah arah arus listrik konvensional, bukan aliran elektron).\n\nDengan demikian, pernyataan yang benar secara ilmiah adalah **2 dan 3**. *(Catatan: pilihan jawaban pada naskah sumber tidak menyediakan kombinasi **2 dan 3**, dan kunci pada naskah sumber menandai **B. 1 dan 3** secara keliru; selain itu koefisien reaksi pada naskah sumber dikutip apa adanya.)*',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Trauma/stres dapat memicu produksi hormon kortisol (glukokortikoid) di dalam tubuh. Berikut ini adalah data konsentrasi hormon kortisol pada darah tikus yang kakinya diberikan perlakuan stres:\n- Menit ke-$4$: $10\\text{ mg}/100\\text{ mL}$\n- Menit ke-$8$: $30\\text{ mg}/100\\text{ mL}$\n- Menit ke-$12$: $35\\text{ mg}/100\\text{ mL}$\n- Menit ke-$16$: $35\\text{ mg}/100\\text{ mL}$\n- Menit ke-$20$: $40\\text{ mg}/100\\text{ mL}$\n- Menit ke-$24$: $50\\text{ mg}/100\\text{ mL}$\n- Menit ke-$28$: $55\\text{ mg}/100\\text{ mL}$\n- Menit ke-$32$: $55\\text{ mg}/100\\text{ mL}$\n\nData lain yang dicatat pada saat yang sama adalah sebagai berikut:\n1. kadar protein darah meningkat\n2. kadar glukosa darah meningkat\n3. kadar asam lemak meningkat\n4. kadar protein darah menurun\n5. kadar glukosa darah menurun\n6. kadar asam lemak menurun\n\nPerubahan kandungan plasma darah dari menit ke-4 sampai menit ke-32 menunjukkan ....\n\nA. 1, 3 dan 5\nB. 2, 3 dan 4\nC. 1, 2 dan 6\nD. 4, 5 dan 6',
          answer: 'B. 2, 3 dan 4',
          principle:
            'Kortisol (glukokortikoid) memobilisasi energi saat stres melalui glukoneogenesis (menaikkan glukosa darah), lipolisis (menaikkan asam lemak bebas), dan katabolisme protein (proteolisis).',
          solution:
            'Dari menit ke-$4$ hingga menit ke-$32$, konsentrasi kortisol darah meningkat tajam dari $10\\text{ mg}/100\\text{ mL}$ menjadi $55\\text{ mg}/100\\text{ mL}$. Efek fisiologis peningkatan kortisol terhadap metabolisme tubuh adalah:\n1. **Kadar glukosa darah meningkat (pernyataan 2):** kortisol merangsang **glukoneogenesis** di hati dan menurunkan pemakaian glukosa oleh jaringan perifer sehingga tersedia energi cepat bagi otak dan jantung.\n2. **Kadar asam lemak meningkat (pernyataan 3):** kortisol merangsang **lipolisis** (pemecahan lemak di jaringan adiposa) untuk melepaskan asam lemak ke sirkulasi sebagai sumber energi alternatif.\n3. **Kadar protein menurun (pernyataan 4):** kortisol bersifat katabolik terhadap protein (memicu proteolisis dan menghambat sintesis protein) sehingga cadangan protein jaringan/plasma menurun karena dipecah menjadi asam amino untuk bahan baku glukoneogenesis.\n\nJadi, perubahan yang sesuai adalah **2, 3, dan 4** (**B**).',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Zat yang berperan pada kontraksi otot rangka sebagai berikut:\n1. Aktin\n2. Miosin\n3. Ion kalsium\n4. Asetilkolin\n5. ATP\n\nUrutan kerja zat di atas yang benar adalah ....\n\nA. 1-5-3-2-4\nB. 2-4-3-5-1\nC. 3-2-1-5-2\nD. 4-3-1-2-5',
          answer: 'D. 4-3-1-2-5',
          principle:
            'Kontraksi otot rangka diawali sinyal saraf (asetilkolin), diikuti pelepasan $\\text{Ca}^{2+}$ dari retikulum sarkoplasma yang membuka situs pengikatan pada aktin, lalu interaksi aktin–miosin yang digerakkan oleh hidrolisis ATP.',
          solution:
            'Urutan mekanisme kerja zat dalam kontraksi otot rangka adalah:\n1. **Asetilkolin (4):** impuls saraf motorik memicu pelepasan asetilkolin di celah sinaps neuromuskular sehingga terjadi depolarisasi membran sel otot.\n2. **Ion kalsium (3):** depolarisasi merangsang retikulum sarkoplasma melepaskan ion $\\text{Ca}^{2+}$ ke sarkoplasma.\n3. **Aktin (1):** ion $\\text{Ca}^{2+}$ berikatan dengan troponin pada filamen **aktin**, menggeser tropomiosin sehingga sisi aktif aktin terbuka.\n4. **Miosin (2):** kepala **miosin** berikatan dengan sisi aktif aktin membentuk jembatan silang (aktomiosin).\n5. **ATP (5):** hidrolisis **ATP** menyediakan energi untuk tarikan kepala miosin (*power stroke*) sehingga filamen aktin bergeser dan otot berkontraksi, serta melepaskan ikatan miosin-aktin untuk siklus berikutnya.\n\nUrutan yang benar adalah **4-3-1-2-5** (**D**).',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Berikut ini beberapa teori tentang asal usul makhluk hidup:\n1. Makhluk hidup berasal dari lingkungan $\\text{H}_2\\text{O}$ dan $\\text{CO}_2$\n2. Makhluk hidup berasal dari molekul $\\text{CH}_4$, $\\text{NH}_3$, $\\text{H}_2\\text{O}$ dan $\\text{CO}_2$\n3. Makhluk hidup berasal dari spora kehidupan\n4. Makhluk hidup berasal dari asam amino\n\nTeori asal usul makhluk hidup berdasarkan evolusi kimia adalah ....\n\nA. 1 dan 2\nB. 2 dan 3\nC. 3 dan 4\nD. 2 dan 4',
          answer: 'D. 2 dan 4',
          principle:
            'Teori evolusi kimia (Oparin–Haldane dan percobaan Miller–Urey) menyatakan bahwa molekul anorganik sederhana di atmosfer purba ($\\text{CH}_4, \\text{NH}_3, \\text{H}_2\\text{O}, \\text{H}_2/\\text{CO}_2$) bereaksi membentuk monomer organik seperti asam amino, yang kemudian berkembang menjadi makromolekul dan sel pertama.',
          solution:
            'Mari evaluasi setiap pernyataan:\n1. **Kurang lengkap (bukan pilihan utama):** $\\text{H}_2\\text{O}$ dan $\\text{CO}_2$ saja tidak memiliki sumber nitrogen ($\\text{NH}_3$) yang diperlukan untuk membentuk asam amino dan asam nukleat.\n2. **BENAR:** Atmosfer purba menurut teori evolusi kimia mengandung senyawa sederhana seperti metana ($\\text{CH}_4$), amonia ($\\text{NH}_3$), uap air ($\\text{H}_2\\text{O}$), hidrogen, dan karbon dioksida ($\\text{CO}_2$).\n3. **SALAH:** Gagasan bahwa kehidupan berasal dari "spora kehidupan" dari luar angkasa merupakan teori **panspermia** (Svante Arrhenius), bukan evolusi kimia.\n4. **BENAR:** Eksperimen Stanley Miller dan Harold Urey membuktikan bahwa gas-gas atmosfer purba yang diberi energi listrik menghasilkan monomer organik berupa **asam amino**, yang menjadi tahap awal evolusi kimia menuju protobion.\n\nJadi, pernyataan yang sesuai dengan evolusi kimia adalah **2 dan 4** (**D**).',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Perhatikan interaksi antar organisme berikut.\n1. *Pinus* sp. dengan gulma\n2. *Penicillium* sp. dengan bakteri\n3. *Dinoflagelata* sp. dengan ikan\n4. *Juglans* sp. dengan alang-alang\n5. *Zea mays* dengan gulma\n\nSimbiosis alelopati berikut ini yang tepat adalah ....\n\nA. 1, 2, dan 3\nB. 1, 3, dan 5\nC. 2, 3, dan 4\nD. 2, 4, dan 5',
          answer: 'A. 1, 2, dan 3',
          principle:
            'Alelopati (sering dikelompokkan bersama antibiosis/amensalisme pada tingkat SMP) adalah interaksi ketika suatu organisme melepaskan senyawa kimia penghambat (alelokimia, antibiotik, atau toksin) ke lingkungan yang merugikan pertumbuhan atau kelangsungan hidup organisme lain.',
          solution:
            'Tinjau tiap pasangan interaksi:\n1. ***Pinus* sp. dengan gulma — BENAR:** *Pinus* sp. menghasilkan senyawa alelokimia (fenolik dan terpen) dari serasah daun dan akarnya yang menghambat perkecambahan serta pertumbuhan gulma di bawah naungannya.\n2. ***Penicillium* sp. dengan bakteri — BENAR (konteks soal):** Jamur *Penicillium* sp. menyekresikan antibiotik penisilin yang menghambat pertumbuhan bakteri (secara ketat disebut **antibiosis**, yang dalam pengelompokan soal SMP kerap disatukan dengan alelopati/amensalisme).\n3. ***Dinoflagelata* sp. dengan ikan — BENAR (konteks soal):** Saat terjadi ledakan populasi (*red tide*), *Dinoflagelata* melepaskan neurotoksin ke perairan yang meracuni dan mematikan ikan.\n4. ***Juglans* sp. dengan alang-alang:** *Juglans* sp. (kenari hitam) juga merupakan contoh klasik alelopati penghasil senyawa juglon yang menghambat tumbuhan di sekitarnya, namun pada opsi yang tersedia nomor 1 dan 4 tidak muncul bersamaan.\n5. ***Zea mays* dengan gulma — SALAH:** interaksi utama jagung dan gulma adalah **kompetisi** memperebutkan air, cahaya, dan hara.\n\nSesuai kombinasi opsi dan kunci naskah sumber, jawaban yang dipilih adalah **A. 1, 2, dan 3**.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Berikut merupakan beberapa organel sel:\n1. retikulum endoplasma\n2. mikrotubula\n3. badan Golgi\n4. mitokondria\n\nGerak motilitas sel sperma dapat dipengaruhi adanya kelainan pada organel ....\n\nA. 1, 2, 3\nB. 1, 3\nC. 2, 4\nD. 4',
          answer: 'C. 2, 4',
          principle:
            'Motilitas (kemampuan bergerak) sel sperma bergantung pada struktur flagela yang tersusun atas mikrotubula (aksonema $9+2$) dan pasokan energi ATP dari mitokondria di bagian tengah (*midpiece*) sperma.',
          solution:
            'Tinjau peran masing-masing struktur pada pergerakan sel sperma:\n- **Mikrotubula (2):** ekor (flagel) sel sperma tersusun atas aksonema dengan pola $9$ pasang mikrotubula perifer dan $2$ mikrotubula sentral ($9+2$). Pergeseran antar-mikrotubula oleh protein motorik dinein menghasilkan gerakan cambuk flagel.\n- **Mitokondria (4):** tersusun melingkar rapat di bagian leher/tengah (*midpiece*) sperma untuk menghasilkan **ATP** melalui respirasi seluler sebagai bahan bakar pergerakan flagel.\n- **Retikulum endoplasma (1)** dan **badan Golgi (3)** berperan dalam sintesis/modifikasi protein dan pembentukan akrosom saat spermatogenesis, bukan penggerak langsung motilitas flagel.\n\nJadi, kelainan pada **2 dan 4** akan memengaruhi motilitas sperma (**C**).',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Berikut ini merupakan beberapa zat yang ada dalam daur biogeokimia:\n1. karbon dioksida\n2. sulfur\n3. nitrogen\n4. fosfor\n\nZat yang tidak termasuk dalam daur atmosfer adalah ....\n\nA. 1, 2, 3\nB. 1, 3\nC. 2, 4\nD. 4',
          answer: 'D. 4',
          principle:
            'Daur fosfor merupakan daur sedimen murni karena tidak memiliki senyawa fase gas yang bermakna di atmosfer, berbeda dengan daur karbon, nitrogen, dan sulfur yang memiliki komponen gas di atmosfer.',
          solution:
            'Periksa keterlibatan fase atmosfer (gas) pada keempat daur biogeokimia berikut:\n1. **Karbon dioksida ($\\text{CO}_2$):** berada langsung dalam bentuk gas di atmosfer dan berperan utama dalam daur karbon.\n2. **Sulfur:** memiliki fase gas di atmosfer, antara lain sebagai hidrogen sulfida ($\\text{H}_2\\text{S}$) dan sulfur dioksida ($\\text{SO}_2$) dari aktivitas vulkanik maupun pembakaran.\n3. **Nitrogen:** sekitar $78\\%$ atmosfer tersusun atas gas $\\text{N}_2$, sehingga atmosfer merupakan reservoir utama daur nitrogen.\n4. **Fosfor:** pada suhu dan tekanan permukaan Bumi, fosfor tidak membentuk gas stabil; reservoir utamanya adalah batuan fosfat di litosfer serta sedimen perairan, sehingga **tidak termasuk dalam daur atmosfer**.\n\nJadi, jawaban yang tepat adalah **D. 4**.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Kemungkinan rasio fenotipe perkawinan antara kucing hitam ekor pendek dan kucing belang macan liar ekor panjang antara lain adalah:\n1. kucing belang macan liar ekor pendek $50\\%$\n2. kucing belang macan liar ekor panjang $50\\%$\n3. kucing hitam ekor pendek $50\\%$\n4. kucing hitam ekor panjang $50\\%$\n\nJika genotipe kucing hitam ($hh$), kucing belang macan liar ($HH$), tidak berekor ($TT$), berekor panjang ($tt$), dan hibrida berekor pendek ($Tt$), maka rasio fenotipe perkawinan antara kucing hitam ekor pendek dan kucing belang macan liar ekor panjang adalah ....\n\nA. 1 dan 2\nB. 2 dan 3\nC. 3 dan 4\nD. 1 dan 4',
          answer: 'A. 1 dan 2',
          principle:
            'Persilangan dihibrida independen dapat diselesaikan dengan memisahkan masing-masing sifat (warna bulu dan panjang ekor) lalu menggabungkan peluang fenotipenya.',
          solution:
            'Tentukan genotipe kedua induk:\n- Kucing hitam ekor pendek: **$hhTt$**\n- Kucing belang macan liar ekor panjang: **$HHtt$**\n\nAnalisis persilangan $hhTt \\times HHtt$ per sifat:\n1. **Warna bulu ($hh \\times HH$):**\n   Semua keturunan bergenotipe **$Hh$** ($100\\%$). Karena alel $H$ (belang macan liar) dominan terhadap $h$ (hitam), maka **$100\\%$ keturunan berfenotipe belang macan liar**.\n2. **Panjang ekor ($Tt \\times tt$):**\n   Gamet dari $Tt$ adalah $T$ dan $t$; gamet dari $tt$ adalah $t$. Hasilnya:\n   - $50\\%$ bergenotipe **$Tt$** (ekor pendek)\n   - $50\\%$ bergenotipe **$tt$** (ekor panjang)\n\nGabungan kedua sifat:\n- $50\\%$ **$HhTt$**: kucing belang macan liar ekor pendek (pernyataan **1**)\n- $50\\%$ **$Hhtt$**: kucing belang macan liar ekor panjang (pernyataan **2**)\n\nJadi, jawaban yang tepat adalah **A. 1 dan 2**.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Golongan darah manusia diketahui adalah:\n1. O\n2. A\n3. B\n4. AB\n\nSeorang ibu bergolongan darah B mempunyai anak bergolongan darah O. Kemungkinan golongan darah ayah anak tersebut adalah ....\n\nA. 1\nB. 2 dan 3\nC. 1, 2, dan 3\nD. 1, 2, 3, dan 4',
          answer: 'C. 1, 2, dan 3',
          principle:
            'Golongan darah sistem ABO dikendalikan oleh alel ganda $I^A$, $I^B$ (kodominan), dan $I^O$ (resesif). Seorang anak bergolongan darah O ($I^O I^O$) harus menerima satu alel $I^O$ dari ibu dan satu alel $I^O$ dari ayah.',
          solution:
            '1. Anak bergolongan darah O pasti bergenotipe **$I^O I^O$**.\n2. Ibu bergolongan darah B dan memiliki anak bergenotipe $I^O I^O$, sehingga ibu harus bergenotipe heterozigot **$I^B I^O$** agar dapat menyumbangkan satu alel $I^O$.\n3. Satu alel $I^O$ lainnya pada anak wajib berasal dari ayah. Artinya, ayah harus memiliki setidaknya satu alel $I^O$:\n   - **Golongan darah O** ($I^O I^O$) $\\rightarrow$ memiliki alel $I^O$ (mungkin).\n   - **Golongan darah A** ($I^A I^O$) $\\rightarrow$ memiliki alel $I^O$ (mungkin).\n   - **Golongan darah B** ($I^B I^O$) $\\rightarrow$ memiliki alel $I^O$ (mungkin).\n   - **Golongan darah AB** ($I^A I^B$) $\\rightarrow$ **tidak memiliki** alel $I^O$ (tidak mungkin menghasilkan anak bergolongan darah O).\n\nDengan demikian, kemungkinan golongan darah ayah adalah **1, 2, dan 3** (**C**).',
          rubric: OK
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Soal Sebab-Akibat',
      marks: 5,
      stem: 'Petunjuk Soal Sebab-Akibat (5 soal, nomor asli 21–25, masing-masing bernilai 1 poin). Setiap soal terdiri atas dua bagian, yaitu Pernyataan dan Alasan, yang dipisahkan oleh kata SEBAB. Pilihlah:\n- **A.** jika pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab-akibat;\n- **B.** jika pernyataan benar, alasan benar, tetapi keduanya tidak menunjukkan hubungan sebab-akibat;\n- **C.** jika pernyataan benar dan alasan salah;\n- **D.** jika pernyataan salah dan alasan benar;\n- **E.** jika pernyataan dan alasan keduanya salah.',
      parts: [
        {
          label: '21',
          marks: 1,
          prompt:
            '**Pernyataan:** Dalam evolusi konvergen, spesies yang secara genetik tidak berkerabat dapat mengembangkan karakteristik yang serupa.\n**SEBAB**\n**Alasan:** Tekanan seleksi dan lingkungan terhadap spesies tersebut serupa.\n\nPilihlah: A, B, C, D, atau E.',
          answer: 'A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab-akibat',
          principle:
            'Evolusi konvergen terjadi ketika organisme yang tidak berkerabat dekat berevolusi memiliki ciri adaptif serupa karena menghadapi tekanan seleksi lingkungan yang sama.',
          solution:
            '1. **Pernyataan: BENAR.** Dalam evolusi konvergen, spesies dari garis keturunan berbeda (misalnya hiu yang berupa ikan dan lumba-lumba yang berupa mamalia, atau sayap burung dan kelelawar) mengembangkan struktur analog yang tampak serupa.\n2. **Alasan: BENAR.** Kedua kelompok organisme tersebut menempati relung atau menghadapi kondisi lingkungan dan tekanan seleksi alam yang serupa (misalnya kebutuhan bergerak efisien di air).\n3. **Hubungan sebab-akibat: YA.** Keserupaan tekanan seleksi dan lingkungan inilah yang secara langsung menyebabkan berkembangnya karakteristik adaptif yang mirip pada spesies yang tidak berkerabat dekat.\n\nJadi, jawabannya adalah **A**.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            '**Pernyataan:** *Cardiac output* jantung seorang pasien diukur dalam $\\text{liter}/\\text{menit}$.\n**SEBAB**\n**Alasan:** *Cardiac output* ditentukan berdasarkan tekanan darah dan frekuensi denyut jantung.\n\nPilihlah: A, B, C, D, atau E.',
          answer: 'C. Pernyataan benar dan alasan salah',
          principle:
            'Curah jantung (*cardiac output*, $CO$) adalah volume darah yang dipompa oleh masing-masing ventrikel setiap menit, dirumuskan sebagai hasil kali volume sekuncup ($SV$) dan frekuensi denyut jantung ($HR$).',
          solution:
            '1. **Pernyataan: BENAR.** *Cardiac output* (curah jantung) menyatakan volume total darah yang dipompa jantung dalam satu menit, sehingga lazim dinyatakan dalam satuan $\\text{liter}/\\text{menit}$ (sekitar $5\\text{ L}/\\text{menit}$ pada orang dewasa saat istirahat).\n2. **Alasan: SALAH.** Rumus curah jantung adalah\n$$CO = SV \\times HR,$$\ndengan $SV$ adalah **volume sekuncup (*stroke volume*)** dan $HR$ adalah **frekuensi denyut jantung (*heart rate*)**, bukan tekanan darah.\n\nKarena pernyataan benar dan alasan salah, jawabannya adalah **C**.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            '**Pernyataan:** Penyerapan unsur hara dari ujung akar ke pangkal akar semakin membesar.\n**SEBAB**\n**Alasan:** Pada pangkal akar terdapat struktur endodermis yang menyebabkan hambatan angkutan hara secara radial dari tepi ke stele.\n\nPilihlah: A, B, C, D, atau E.',
          answer: 'D. Pernyataan salah dan alasan benar',
          principle:
            'Penyerapan air dan unsur hara paling aktif berlangsung di dekat ujung akar pada zona diferensiasi (rambut akar), sedangkan bagian pangkal akar yang lebih tua mengalami suberisasi dan penebalan endodermis yang menghambat angkutan radial.',
          solution:
            '1. **Pernyataan: SALAH.** Penyerapan air dan unsur hara terbesar justru terjadi pada daerah dekat **ujung akar** (zona pematangan yang ditumbuhi **rambut akar**), kemudian **semakin menurun** ke arah pangkal akar yang sudah berkayu atau mengalami suberisasi.\n2. **Alasan: BENAR.** Pada bagian akar yang lebih tua (pangkal akar), lapisan **endodermis** dilengkapi pita Kaspari serta penebalan dinding oleh suberin/lignin yang menghambat lintasan apoplas angkutan air dan hara secara radial dari korteks (tepi) menuju silinder pusat (stele).\n\nKarena pernyataan salah dan alasan benar, jawabannya adalah **D**.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            '**Pernyataan:** Dinding sel hanya ditemukan pada sel eukariota.\n**SEBAB**\n**Alasan:** Sel pada anggota *Kingdom Plantae* dan *Fungi* merupakan sel eukariota dan keduanya memiliki dinding sel.\n\nPilihlah: A, B, C, D, atau E.',
          answer: 'D. Pernyataan salah dan alasan benar',
          principle:
            'Dinding sel dimiliki baik oleh sel prokariota (seperti bakteri dengan peptidoglikan) maupun sebagian sel eukariota (tumbuhan dengan selulosa, jamur dengan kitin, dan sebagian protista).',
          solution:
            '1. **Pernyataan: SALAH.** Dinding sel **tidak** hanya ditemukan pada sel eukariota. Sel **prokariota** (bakteri dan Archaea) hampir seluruhnya memiliki dinding sel; pada bakteri, dinding selnya tersusun atas **peptidoglikan**. Sebaliknya, sel hewan (*Animalia*) yang merupakan eukariota justru tidak memiliki dinding sel.\n2. **Alasan: BENAR.** Anggota *Kingdom Plantae* dan *Kingdom Fungi* tergolong sel **eukariota** (memiliki membran inti) dan keduanya memang memiliki dinding sel (selulosa pada *Plantae* dan kitin pada *Fungi*).\n\nKarena pernyataan salah dan alasan benar, jawaban yang sahih secara biologis adalah **D** *(catatan: kunci pada naskah sumber sempat menuliskan C secara keliru)* .',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            '**Pernyataan:** Jika kromosom mengalami peristiwa aberasi pada induk, maka fetus mengalami kecacatan.\n**SEBAB**\n**Alasan:** Aberasi kromosom mengakibatkan kerusakan dan perubahan struktur kromosom.\n\nPilihlah: A, B, C, D, atau E.',
          answer: 'A. Pernyataan benar, alasan benar, dan keduanya menunjukkan hubungan sebab-akibat',
          principle:
            'Aberasi kromosom (mutasi kromosom) mengubah struktur atau jumlah kromosom pada gamet/induk sehingga dapat mengganggu keseimbangan ekspresi gen dan menimbulkan kelainan perkembangan pada fetus.',
          solution:
            '1. **Pernyataan: BENAR.** Apabila terjadi aberasi kromosom pada sel penghasil gamet induk yang kemudian diwariskan saat fertilisasi, embrio/fetus dapat mengalami kelainan bawaan atau kecacatan genetik (misalnya sindrom akibat delesi, translokasi tidak seimbang, atau perubahan jumlah kromosom).\n2. **Alasan: BENAR.** Secara definisi, aberasi kromosom meliputi kerusakan dan perubahan struktur kromosom (seperti delesi, duplikasi, inversi, dan translokasi) maupun perubahan jumlahnya.\n3. **Hubungan sebab-akibat: YA.** Perubahan dan kerusakan struktur kromosom tersebut mengubah susunan materi genetik yang diwariskan sehingga memicu kecacatan pada fetus.\n\nJadi, jawabannya adalah **A**.',
          rubric: OK
        }
      ]
    },
    {
      no: 3,
      title: 'Bagian C: Isian Singkat',
      marks: 11,
      stem: 'Isilah bagian yang rumpang pada soal-soal berikut dengan singkat dan tepat (5 butir soal, nomor 26–30; nomor 26, 27, 28, dan 30 masing-masing bernilai 2 poin, sedangkan nomor 29 bernilai 3 poin).',
      parts: [
        {
          label: '26',
          marks: 2,
          figures: [
            {
              src: '/papers/osn-ipa-smp-biologi-2023/fig-26.webp',
              alt: 'Skema jalur pergerakan air antar sel tumbuhan berlabel x melewati sitoplasma dan y melewati dinding sel',
              caption: 'Alur pergerakan air pada sel tumbuhan untuk Soal No. 26 (Sumber: Biology, Campbell).'
            }
          ],
          prompt:
            'Gambar alur pergerakan air pada sel tumbuhan di bawah ini terdiri atas jalur x dan y.\n\na) Pergerakan air terbanyak melalui jalur ....\nb) Jalur tersebut dikenal dengan istilah ....',
          answer: 'a) x; b) simplas',
          principle:
            'Pengangkutan air antarsel tumbuhan dapat berlangsung melalui jalur simplas (melintasi sitoplasma sel melalui plasmodesmata) dan jalur apoplas (melintasi dinding sel dan ruang antarsel).',
          solution:
            'Perhatikan kedua lintasan pada gambar:\n- **Jalur (x) [garis biru]:** air bergerak dari sitoplasma satu sel ke sitoplasma sel berikutnya melewati **plasmodesmata**. Jalur ini disebut **jalur simplas**.\n- **Jalur (y) [garis merah]:** air bergerak menyusuri dinding sel dan ruang antarsel tanpa menembus membran plasma. Jalur ini disebut **jalur apoplas**.\n\nPada konteks soal ini (sesuai kunci naskah sumber), jalur yang dimaksud sebagai lintasan utama menuju silinder pusat adalah **x**, yaitu **simplas**. *(Catatan: pada korteks akar sebelum mencapai endodermis, air banyak melintasi apoplas, namun seluruh aliran air wajib dialihkan memasuki jalur simplas saat terhalang pita Kaspari di endodermis.)*\n\nJadi, jawabannya adalah **a) x** dan **b) simplas**.',
          rubric: [
            { code: 'B1', text: 'Menentukan huruf jalur x dengan tepat.' },
            { code: 'B1', text: 'Menyebutkan istilah simplas dengan tepat.' }
          ]
        },
        {
          label: '27',
          marks: 2,
          figures: [
            {
              src: '/papers/osn-ipa-smp-biologi-2023/fig-27.webp',
              alt: 'Grafik hubungan konsentrasi oksigen relatif terhadap persentase saturasi hemoglobin pada tiga variasi pH darah',
              caption: 'Kurva disosiasi oksigen–hemoglobin pada pH berbeda untuk Soal No. 27.'
            }
          ],
          prompt:
            'Hasil pengukuran saturasi hemoglobin pada pH yang berbeda ditunjukkan pada grafik di bawah ini. Kondisi pH normal adalah $7{,}4$.\n\nA. Saturasi hemoglobin seorang atlet yang baru selesai bertanding pada kondisi lingkungan oksigen relatif $80\\%$ adalah ....\nB. Saturasi hemoglobin normal pada kondisi lingkungan oksigen relatif $80\\%$ adalah ....',
          answer: 'A. 90%; B. 95%',
          principle:
            'Efek Bohr menyatakan bahwa penurunan pH darah (akibat peningkatan $\\text{CO}_2$ dan asam laktat saat aktivitas fisik berat) menurunkan afinitas hemoglobin terhadap oksigen sehingga kurva saturasi bergeser ke kanan.',
          solution:
            '1. **Atlet yang baru selesai bertanding (A):** aktivitas otot intensif menghasilkan banyak $\\text{CO}_2$ dan asam laktat sehingga pH darah turun menjadi lebih asam dari normal ($\\text{pH } 7{,}2$, kurva hitam). Pada sumbu mendatar konsentrasi oksigen relatif **$80\\%$**, titik pada kurva $\\text{pH } 7{,}2$ berada tepat di nilai saturasi **$90\\%$**.\n2. **Kondisi normal (B):** pH darah normal adalah **$7{,}4$** (kurva jingga). Pada konsentrasi oksigen relatif **$80\\%$**, titik pada kurva $\\text{pH } 7{,}4$ berada tepat di tengah antara $90\\%$ dan $100\\%$, yakni **$95\\%$**.\n\nJadi, jawabannya adalah **A. $90\\%$** dan **B. $95\\%$**.',
          rubric: [
            { code: 'B1', text: 'Membaca saturasi hemoglobin atlet pada pH 7,2 sebesar 90% dengan tepat.' },
            { code: 'B1', text: 'Membaca saturasi hemoglobin normal pada pH 7,4 sebesar 95% dengan tepat.' }
          ]
        },
        {
          label: '28',
          marks: 2,
          figures: [
            {
              src: '/papers/osn-ipa-smp-biologi-2023/fig-28.webp',
              alt: 'Grafik laju pertumbuhan tanaman terhadap waktu yang terbagi atas fase a, b, c, dan d',
              caption: 'Kurva laju pertumbuhan tanaman terhadap waktu untuk Soal No. 28.'
            }
          ],
          prompt:
            'Grafik di bawah ini menunjukkan laju pertumbuhan tanaman. Bagian kurva a, b, c, dan d merepresentasikan fase-fase dalam pertumbuhan tanaman.\n\na) Bagian-bagian yang menunjukkan pengaruh hormon ABA dalam pertumbuhan tanaman adalah ....\nb) Hormon-hormon pertumbuhan yang berperan pada bagian b adalah ....',
          answer: 'a) a dan d; b) giberelin, auksin, sitokinin',
          principle:
            'Asam absisat (ABA) berperan menghambat pertumbuhan dan mempertahankan dormansi maupun memicu penuaan/penurunan laju pertumbuhan, sedangkan fase pertumbuhan eksponensial dipacu oleh hormon pemicu tumbuh seperti auksin, giberelin, dan sitokinin.',
          solution:
            'Analisis tiap fase kurva laju pertumbuhan terhadap waktu:\n- **Fase a (fase lag / awal):** laju pertumbuhan masih sangat rendah atau terhambat sebelum perkecambahan/pertumbuhan aktif dimulai; **asam absisat (ABA)** berperan menjaga dormansi biji/tunas.\n- **Fase b (fase eksponensial / log):** laju pertumbuhan meningkat tajam berkat pembelahan dan pemanjangan sel yang cepat; proses ini dipacu oleh hormon pertumbuhan **giberelin, auksin, dan sitokinin**.\n- **Fase c (fase stasioner):** laju pertumbuhan mendatar saat tumbuhan mencapai ukuran dewasa.\n- **Fase d (fase penurunan / senesensi):** laju pertumbuhan menurun; **ABA** (bersama etilen) berperan dalam penghambatan pertumbuhan, penuaan, dan pengguguran organ.\n\nJadi, jawabannya adalah **a) a dan d** serta **b) giberelin, auksin, sitokinin**.',
          rubric: [
            { code: 'B1', text: 'Menyebutkan bagian a dan d untuk pengaruh hormon ABA dengan tepat.' },
            { code: 'B1', text: 'Menyebutkan hormon giberelin, auksin, dan sitokinin pada bagian b dengan tepat.' }
          ]
        },
        {
          label: '29',
          marks: 3,
          figures: [
            {
              src: '/papers/osn-ipa-smp-biologi-2023/fig-29.webp',
              alt: 'Tiga gambar sel tumbuhan dengan arah pergerakan molekul air keluar, masuk, dan setimbang',
              caption: 'Kondisi osmosis tiga sel tumbuhan untuk Soal No. 29.'
            }
          ],
          prompt:
            'Perhatikan gambar di bawah ini.\n\na. Kondisi konsentrasi larutan 1: ...., keadaan sel 1: ....\nb. Kondisi konsentrasi larutan 2: ...., keadaan sel 2: ....\nc. Kondisi konsentrasi larutan 3: ...., keadaan sel 3: ....',
          answer: 'a) Hipertonis dan plasmolisis; b) Hipotonis dan turgid; c) Isotonis dan flasid',
          principle:
            'Osmosis menggerakkan air dari larutan berpotensial air tinggi (hipotonis) ke larutan berpotensial air rendah (hipertonis) melintasi membran semipermeabel, menyebabkan sel tumbuhan berada dalam keadaan plasmolisis, turgid, atau flasid.',
          solution:
            'Analisis arah pergerakan air ($\\text{H}_2\\text{O}$) dan bentuk sel pada tiap panel:\n- **Gambar 1:** air bergerak **keluar** dari dalam sel karena larutan di luar lebih pekat (**hipertonis**). Akibat kehilangan air, vakuola menyusut dan membran plasma terlepas dari dinding sel (**plasmolisis**).\n- **Gambar 2:** air bergerak **masuk** ke dalam sel karena larutan di luar lebih encer (**hipotonis**). Vakuola mengembang menekan dinding sel sehingga sel menjadi tegang penuh (**turgid**).\n- **Gambar 3:** air bergerak **masuk dan keluar dalam laju seimbang** karena konsentrasi larutan di luar sama dengan di dalam sel (**isotonis**). Sel tidak tegang maupun mengkerut (**flasid**).\n\nJadi, jawabannya adalah:\n- **a.** Hipertonis dan plasmolisis\n- **b.** Hipotonis dan turgid\n- **c.** Isotonis dan flasid',
          rubric: [
            { code: 'B1', text: 'Menentukan kondisi larutan hipertonis dan keadaan sel plasmolisis pada gambar 1.' },
            { code: 'B1', text: 'Menentukan kondisi larutan hipotonis dan keadaan sel turgid pada gambar 2.' },
            { code: 'B1', text: 'Menentukan kondisi larutan isotonis dan keadaan sel flasid pada gambar 3.' }
          ]
        },
        {
          label: '30',
          marks: 2,
          prompt:
            'Salah satu contoh produk bioteknologi adalah kloning gen menggunakan enzim Endonuklease Restriksi (ER) yang berfungsi sebagai pemotong. Hasil pemotongan oleh enzim ER dapat berbentuk .... (a) dan .... (b)',
          answer: 'a) ujung lengket (sticky end) dan b) ujung tumpul (blunt end)',
          principle:
            'Enzim endonuklease restriksi mengenali urutan nukleotida spesifik (umumnya palindrom) dan memotong kedua untai DNA baik secara bertangga menghasilkan *sticky end* maupun secara lurus menghasilkan *blunt end*.',
          solution:
            'Dalam teknologi DNA rekombinan (kloning gen), enzim **endonuklease restriksi** memotong ikatan fosfodiester pada kedua untai DNA di situs pengenalan tertentu. Ada dua tipe ujung potongan yang dihasilkan:\n1. **Ujung lengket (*sticky end* / ujung runcing / ujung berjuntai):** dihasilkan ketika enzim memotong kedua untai DNA secara **tidak simetris (bertangga)**, misalnya enzim *EcoRI*, sehingga meninggalkan beberapa basa untai tunggal yang menggantung (*overhang*) dan mudah berpasangan kembali melalui ikatan hidrogen.\n2. **Ujung tumpul (*blunt end*):** dihasilkan ketika enzim memotong kedua untai DNA tepat pada posisi yang **sejajar/lurus**, misalnya enzim *SmaI*, sehingga tidak ada basa untai tunggal yang menggantung.\n\n*(Catatan: pada kunci naskah sumber sempat tertulis terbalik istilah bahasa Inggris di dalam tanda kurung; secara ilmiah, ujung tumpul adalah **blunt end** dan ujung lengket/berjuntai adalah **sticky end**.)*',
          rubric: [
            { code: 'B1', text: 'Menyebutkan ujung lengket (sticky end) dengan tepat.' },
            { code: 'B1', text: 'Menyebutkan ujung tumpul (blunt end) dengan tepat.' }
          ]
        }
      ]
    }
  ]
};
