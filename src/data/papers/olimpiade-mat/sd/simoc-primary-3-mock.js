/**
 * Paket Soal: SIMOC Primary 3 Mock Test
 * Sumber: simoc_p3_mock.pdf (5 halaman, 20 soal dalam Section A dan Section B).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Lima soal bergambar yang tidak dapat direkonstruksi secara unik dari teks
 * (Soal 1, 6, 9, 12, 16) dilewati dengan penomoran asli tetap dipertahankan.
 * Soal 10 dilengkapi diagram vektor SVG pada public/papers/simoc-p3-mock/fig-10.svg.
 */
export default {
  id: 'simoc-p3-mock',
  slug: 'simoc-primary-3-mock',
  subject: 'olimpiade-mat',
  grade: 4,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'SIMOC Primary 3 Mock Test: sequences, pigeonhole principle, calendar and seating logic, 3D cubes, grid diagonals, cryptarithms, and number puzzles',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd4-bab3-pola-gambar-bilangan',
    'sd4-bab5-bangun-datar',
    'sd5-bab2-kpk-fpb',
    'sd6-bab3-kubus-balok'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SIMOC',
  title: 'SIMOC Primary 3 Mock Test',
  totalMarks: 46,
  instructions:
    'Attempt all 15 included questions from the SIMOC Primary 3 Mock Test (no calculators; original question numbering is preserved). Section A has 7 included multiple-choice questions worth 2 marks each ($14$ marks total), and Section B has 8 included short-answer questions worth 4 marks each ($32$ marks total). Five questions from the original paper are skipped because their required diagrams are unavailable and cannot be uniquely reconstructed from text: Questions 1, 6, 9, 12, and 16. Question 10 includes a reconstructed vector diagram of the $4$-by-$3$ example grid.',
  source: {
    org: 'SIMOC',
    file: 'simoc_p3_mock.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section A: Multiple Choice',
      marks: 14,
      stem: 'Choose the one correct answer for each included question (7 questions, 2 marks each; Questions 1, 6, and 9 are skipped because their figures are unavailable).',
      parts: [
        {
          label: '2',
          marks: 2,
          prompt:
            'Some people are standing equally spaced around a circle, and they were numbered starting from the number $1$ in a clockwise direction. If the person numbered $2$ is directly opposite the person numbered $6$, how many people are there?\n\nA. $6$\nB. $8$\nC. $10$\nD. $12$\nE. $14$',
          answer: 'B. $8$',
          principle:
            'Two opposite positions on an equally spaced circle divide the circle into two equal halves, so the step difference between them equals half the total number of people.',
          solution:
            'Moving clockwise from person $2$ to person $6$ takes\n$$6 - 2 = 4\\text{ steps}.$$\nBecause person $2$ and person $6$ are directly opposite each other, these $4$ steps cover exactly half of the circle (there are $3$ people standing between them on each side: $3, 4, 5$ on one side, and $7, 8, 1$ on the other).\nTherefore, the full circle has\n$$2 \\times 4 = 8\\text{ steps},$$\nwhich means there are $8$ people in total.\nCheck: with $8$ people numbered $1$ to $8$ clockwise, the opposite pairs are $(1,5)$, $(2,6)$, $(3,7)$, and $(4,8)$, so $2$ is indeed opposite $6$.',
          rubric: [
            { code: 'M1', text: 'Finds that the $6 - 2 = 4$ steps from $2$ to $6$ represent half of the circle.' },
            { code: 'A1', text: 'Doubles to obtain $8$ people, option B.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'A drawer contains $40$ coloured socks: $10$ black, $14$ blue and $16$ white. Daniel takes some socks from the drawer without looking at the colours of the socks. What is the least number of socks he must take so that he has at least $2$ socks of the same colour?\n\nA. $2$\nB. $3$\nC. $4$\nD. $5$\nE. None of the above',
          answer: 'C. $4$',
          principle:
            'Pigeonhole principle (worst-case analysis): to guarantee $2$ items of the same colour among $k$ colours, take $k + 1$ items.',
          solution:
            'There are $3$ different colours of socks: black, blue, and white.\nConsider the worst-case scenario where Daniel keeps avoiding a matching pair. At most, he can pick $1$ black sock, $1$ blue sock, and $1$ white sock—that is, $3$ socks all of different colours.\nAs soon as he takes a $4$th sock, its colour must be black, blue, or white, so it is guaranteed to match one of the first $3$ socks.\nHence, the least number of socks Daniel must take is $3 + 1 = 4$.',
          rubric: [
            { code: 'M1', text: 'Identifies $3$ colours and the worst case of $3$ differently coloured socks.' },
            { code: 'A1', text: 'Concludes $3 + 1 = 4$ socks, option C.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'A particular month has $5$ Thursdays. The first and the last day of the month are not Thursdays. What day is the first day of the month?\n\nA. Tuesday\nB. Wednesday\nC. Thursday\nD. Friday\nE. Saturday',
          answer: 'B. Wednesday',
          principle:
            'Five occurrences of a weekday are spaced $7$ days apart (spanning $28$ days from the 1st to the 5th), which tightly restricts the first occurrence and the month length.',
          solution:
            'Suppose the first Thursday of the month is on day $d$. Then the five Thursdays occur on days\n$$d,\\quad d + 7,\\quad d + 14,\\quad d + 21,\\quad d + 28.$$\nSince a month has at most $31$ days, we must have $d + 28 \\le 31$, so $d \\in \\{1, 2, 3\\}$.\nWe check each case using the condition that neither the first day nor the last day is a Thursday:\n- **If $d = 1$:** the $1$st day is Thursday, which violates the condition.\n- **If $d = 3$:** the $5$th Thursday is on day $3 + 28 = 31$. This forces the month to have $31$ days, making day $31$ (the last day) a Thursday, which also violates the condition.\n- **If $d = 2$:** the $5$th Thursday is on day $2 + 28 = 30$. Since the last day is not a Thursday, the month cannot end on day $30$; it must have $31$ days (ending on Friday). Here day $1$ is the day before Thursday (Wednesday), and day $31$ is Friday.\nTherefore, the first day of the month is Wednesday.',
          rubric: [
            { code: 'M1', text: 'Narrows the first Thursday to day $2$ or $3$ and eliminates day $3$ using the last-day condition.' },
            { code: 'A1', text: 'Finds day $2$ is Thursday, so day $1$ is Wednesday, option B.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Find the next term of the following sequence: $1, 1, 2, 4, 7, 13, 24, \\ldots$\n\nA. $37$\nB. $40$\nC. $44$\nD. $47$\nE. None of the above',
          answer: 'C. $44$',
          principle:
            'Look for a Tribonacci-type recurrence where each term from the fourth onward is the sum of the previous three terms.',
          solution:
            'Check the sum of each block of three consecutive terms:\n$$1 + 1 + 2 = 4,$$\n$$1 + 2 + 4 = 7,$$\n$$2 + 4 + 7 = 13,$$\n$$4 + 7 + 13 = 24.$$\nEvery term from the $4$th onward equals the sum of the three terms immediately before it.\nApplying the same rule to find the next term gives\n$$7 + 13 + 24 = 44.$$',
          rubric: [
            { code: 'M1', text: 'Identifies the rule that each term is the sum of the three preceding terms.' },
            { code: 'A1', text: 'Computes $7 + 13 + 24 = 44$, option C.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'A big cube is made up of $27$ small cubes. All the faces of the big cube are then painted. How many of the small cubes have exactly one painted face?\n\nA. $4$\nB. $6$\nC. $24$\nD. $30$\nE. None of the above',
          answer: 'B. $6$',
          principle:
            'In a painted $3 \\times 3 \\times 3$ cube, the number of painted faces on each small cube depends on its position: corner ($3$), edge-middle ($2$), face-centre ($1$), or interior ($0$).',
          solution:
            'Since $27 = 3 \\times 3 \\times 3$, the big cube is a $3 \\times 3 \\times 3$ cube.\nEach of the $6$ faces of the big cube consists of $3 \\times 3 = 9$ small square faces:\n- The $4$ corner cubes on the big cube each touch $3$ painted faces.\n- The $12$ edge-middle cubes each touch $2$ painted faces.\n- The $1$ cube in the very centre of each face touches only $1$ painted face.\n- The $1$ hidden cube in the centre of the big cube touches $0$ painted faces.\n(Check total: $8 + 12 + 6 + 1 = 27$ small cubes.)\nSince there are $6$ faces and each face has $1$ centre small cube, there are $6 \\times 1 = 6$ small cubes with exactly one painted face.',
          rubric: [
            { code: 'M1', text: 'Recognises the $3 \\times 3 \\times 3$ structure and that only the centre cube of each face has $1$ painted face.' },
            { code: 'A1', text: 'Obtains $6$ small cubes, option B.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'In a chess tournament, each player has to play one game with every other player. Five players, Albert, Ben, Charles, Dennis and Ethan, took part in the tournament. So far, Albert has played $4$ games, Ben has played $3$ games, Charles has played $2$ games and Dennis has played $1$ game. How many games has Ethan played?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $4$',
          answer: 'C. $2$',
          principle:
            'In a round-robin graph with $5$ players, deduce edges starting from players with extreme degrees ($4$ and $1$).',
          solution:
            'There are $5$ players, so each player can play at most $4$ other players (at most one game with each).\n1. **Albert ($4$ games):** Albert has played all $4$ other players: Ben, Charles, Dennis, and Ethan.\n2. **Dennis ($1$ game):** Since Dennis already played Albert, Dennis has not played Ben, Charles, or Ethan.\n3. **Ben ($3$ games):** Ben did not play Dennis (nor himself), so his $3$ games must be against the remaining $3$ players: Albert, Charles, and Ethan.\n4. **Charles ($2$ games):** Charles has already played Albert and Ben, which accounts for both of his games. Thus Charles has not played Ethan.\nTherefore, Ethan has played exactly Albert and Ben, which is $2$ games.\nCheck total games played: $\\frac{4 + 3 + 2 + 1 + 2}{2} = 6$ games, which is an integer.',
          rubric: [
            { code: 'M1', text: 'Deduces that Albert played everyone, Dennis played only Albert, and Ben played Albert, Charles, and Ethan.' },
            { code: 'A1', text: 'Concludes Ethan has played $2$ games, option C.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'The diagram shows a diagonal passing through $6$ squares of a $4$-by-$3$ rectangle. Find the number of squares passed through by a diagonal for an $8$-by-$6$ rectangle.\n\nA. $8$\nB. $10$\nC. $12$\nD. $14$\nE. $16$',
          figures: [
            {
              src: '/papers/simoc-p3-mock/fig-10.svg',
              alt: 'A 4-by-3 rectangular grid of unit squares with a straight diagonal drawn from one corner to the opposite corner, passing through six shaded squares',
              caption: 'Diagonal passing through 6 squares of a 4-by-3 rectangle (Question 10).'
            }
          ],
          answer: 'C. $12$',
          principle:
            'Scaling both side lengths of a grid rectangle by $2$ makes the diagonal pass through the exact centre grid point, splitting it into two identical smaller rectangles.',
          solution:
            'Notice that $8 = 2 \\times 4$ and $6 = 2 \\times 3$, so an $8$-by-$6$ rectangle can be split into four $4$-by-$3$ rectangles (two across and two down).\nAs the diagonal runs from the bottom-left corner $(0, 0)$ to the top-right corner $(8, 6)$, it passes directly through the midpoint $(4, 3)$, which is a grid corner:\n- In the bottom-left $4$-by-$3$ rectangle, the diagonal passes through $6$ squares.\n- In the top-right $4$-by-$3$ rectangle, the diagonal again passes through $6$ squares.\nIn total, the diagonal passes through\n$$6 + 6 = 12\\text{ squares}.$$\n(Alternatively, by the general formula for an $m \\times n$ grid, the diagonal passes through $m + n - \\gcd(m, n) = 8 + 6 - 2 = 12$ squares.)',
          rubric: [
            { code: 'M1', text: 'Observes that the $8$-by-$6$ diagonal passes through $(4,3)$, forming two $4$-by-$3$ diagonals (or applies $m + n - \\gcd(m, n)$).' },
            { code: 'A1', text: 'Computes $6 + 6 = 12$ squares, option C.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Short Answer',
      marks: 32,
      stem: 'Write down the answer to each included question with working (8 questions, 4 marks each; Questions 12 and 16 are skipped because their figures cannot be uniquely reconstructed from text).',
      parts: [
        {
          label: '11',
          marks: 4,
          prompt:
            'If $a$, $b$ and $c$ are non-zero whole numbers such that $a + b + c = a \\times b \\times c$, find a possible value for $a$, for $b$, and for $c$.',
          answer: '$a = 1$, $b = 2$, $c = 3$',
          principle:
            'Test small positive whole numbers systematically; bounding the largest factor shows that $\\{1, 2, 3\\}$ is in fact the only solution.',
          solution:
            'Try $a = 1, b = 2, c = 3$:\n$$a + b + c = 1 + 2 + 3 = 6,$$\n$$a \\times b \\times c = 1 \\times 2 \\times 3 = 6.$$\nBoth sides equal $6$, so $a = 1$, $b = 2$, $c = 3$ (in any order) works.\nTo be certain no larger solutions exist, arrange the numbers so that $1 \\le a \\le b \\le c$. Then\n$$a \\times b \\times c = a + b + c \\le c + c + c = 3c,$$\nso dividing by $c > 0$ gives $a \\times b \\le 3$:\n- If $a = 1, b = 1$: $1 + 1 + c = c$ gives $2 = 0$, impossible.\n- If $a = 1, b = 2$: $1 + 2 + c = 2c \\implies c = 3$.\n- If $a = 1, b = 3$: $1 + 3 + c = 3c \\implies 2c = 4 \\implies c = 2 < b$, which repeats $\\{1, 2, 3\\}$.\nHence $\\{1, 2, 3\\}$ is the unique triple of non-zero whole numbers satisfying the equation.',
          rubric: [
            { code: 'M2', text: 'Tests or bounds non-zero whole numbers to locate the triple $\\{1, 2, 3\\}$.' },
            { code: 'A2', text: 'States $a = 1, b = 2, c = 3$ (or any permutation) and verifies $1+2+3 = 1\\times 2\\times 3 = 6$.' }
          ]
        },
        {
          label: '13',
          marks: 4,
          prompt:
            'Four people are sitting around a table. Alice is sitting beside Ben. Charles is sitting on the left of Dennis. Ben is not sitting opposite Dennis. Who is sitting on the left of Charles?',
          answer: 'Alice',
          principle:
            'Fix one person at the circular table, place the other three using the relative direction and non-opposite clues, and verify all conditions.',
          solution:
            'Label the four seats around the table in cyclic order as one goes toward a seated person\'s left (clockwise when facing the centre of the table).\n1. Place **Dennis** in one seat. Since **Charles** is sitting on the left of Dennis, Charles sits in the next seat clockwise from Dennis.\n2. **Ben** is not sitting opposite Dennis, and Charles already occupies the seat on Dennis\'s left. Thus Ben must sit in the seat on Dennis\'s right (one step anticlockwise from Dennis).\n3. The only remaining seat is opposite Dennis, so **Alice** sits there.\nLet us check the clockwise order around the table: Dennis $\\to$ Charles $\\to$ Alice $\\to$ Ben $\\to$ Dennis.\n- Alice is beside Ben: yes, they sit next to each other.\n- Charles is on the left of Dennis: yes.\n- Ben is not opposite Dennis: yes, Ben is opposite Charles.\nTherefore, the person sitting on the left of Charles (one step clockwise from Charles) is **Alice**.\n*(Note: Even if "on the left of" were read in the opposite cyclic direction, both clues use the same convention, so Alice still sits on the left of Charles.)*',
          rubric: [
            { code: 'M2', text: 'Fixes Dennis and places Charles and Ben using the left-of and not-opposite clues.' },
            { code: 'A2', text: 'Deduces Alice occupies the seat opposite Dennis and sits on the left of Charles.' }
          ]
        },
        {
          label: '14',
          marks: 4,
          prompt:
            'Find the smallest whole number that is divisible by $5$, and leaves a remainder of $1$ when divided by $2$ or by $3$.',
          answer: '$25$',
          principle:
            'If a number leaves remainder $1$ upon division by both $2$ and $3$, then subtracting $1$ gives a common multiple of $2$ and $3$ (a multiple of $\\text{lcm}(2, 3) = 6$).',
          solution:
            'Let the number be $N$. Since $N$ leaves a remainder of $1$ when divided by $2$ and by $3$, the number $N - 1$ is divisible by both $2$ and $3$, and therefore by $\\text{lcm}(2, 3) = 6$.\nListing the whole numbers that are $1$ more than a multiple of $6$:\n$$1,\\; 7,\\; 13,\\; 19,\\; 25,\\; 31,\\; \\ldots$$\nWe also need $N$ to be divisible by $5$ (ending in $0$ or $5$). Checking the list in order:\n- $1, 7, 13, 19$ are not divisible by $5$.\n- $25$ is divisible by $5$.\nCheck: $25 \\div 5 = 5$, $25 = 2 \\times 12 + 1$, and $25 = 3 \\times 8 + 1$.\nSo the smallest such whole number is $25$.',
          rubric: [
            { code: 'M2', text: 'Uses remainder $1$ modulo $2$ and $3$ to get numbers of the form $6k + 1$ (lists $1, 7, 13, 19, 25, \\ldots$).' },
            { code: 'A2', text: 'Selects the smallest multiple of $5$, obtaining $25$.' }
          ]
        },
        {
          label: '15',
          marks: 4,
          prompt:
            'The Southeast Asian (SEA) Games is held once every two years, except in $1963$ (i.e. it was held in $1961$ and $1965$, but not in $1963$). Singapore hosted the $28$th SEA Games in $2015$. When was the first SEA Games held (although it was known as South East Asian Peninsula Games at that time)?',
          answer: '$1959$',
          principle:
            'From the $1$st edition to the $28$th edition there are $27$ gaps between consecutive Games; count $2$ years per gap plus $2$ extra years for the skipped edition in $1963$.',
          solution:
            'Between the $1$st SEA Games and the $28$th SEA Games there are\n$$28 - 1 = 27\\text{ intervals}$$ \nbetween consecutive editions.\nNormally each interval is $2$ years, which would cover $27 \\times 2 = 54$ years. However, because the Games were not held in $1963$, the interval between $1961$ and $1965$ was $4$ years instead of $2$ years—adding $2$ extra years (provided the $1$st Games were held in or before $1961$).\nSubtracting $54 + 2 = 56$ years from $2015$ gives\n$$2015 - 56 = 1959.$$\nCheck by counting forward: $1$st in $1959$, $2$nd in $1961$, ($1963$ skipped), $3$rd in $1965$, and from the $3$rd onward each $k$th edition is in $1965 + 2(k - 3)$. For $k = 28$, we get $1965 + 2 \\times 25 = 1965 + 50 = 2015$.\nThus, the first SEA Games was held in $1959$.',
          rubric: [
            { code: 'M2', text: 'Counts $27$ gaps of $2$ years plus $2$ extra years for skipping $1963$ (total $56$ years).' },
            { code: 'A2', text: 'Computes $2015 - 56 = 1959$ and checks forward.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'In the following, all the different letters stand for different digits. Find the three-digit sum $\\text{MOO}$.\n$$\\begin{array}{r} A\\,M \\\\ +\\phantom{M}\\,A \\\\ \\hline M\\,O\\,O \\end{array}$$',
          answer: '$100$',
          principle:
            'Bound the sum of a two-digit number and a one-digit number to force the leading digits of the three-digit sum.',
          solution:
            'Here $AM$ is a two-digit number (so $AM \\le 99$) and $A$ is a one-digit number (so $A \\le 9$). Their sum therefore satisfies\n$$MOO = AM + A \\le 99 + 9 = 108.$$\nSince $MOO$ is a three-digit number ($MOO \\ge 100$), it must lie between $100$ and $108$ inclusive.\nEvery integer from $100$ to $108$ has hundreds digit $1$ and tens digit $0$, so\n$$M = 1 \\qquad \\text{and} \\qquad O = 0.$$\nBecause the ones digit of $MOO$ is also $O$, the ones digit is $0$ as well, giving\n$$MOO = 100.$$\nFinally check $A$: from the units column $M + A = 1 + A$ must end in $O = 0$, so $A = 9$. Indeed,\n$$91 + 9 = 100,$$\nand the digits $A = 9$, $M = 1$, $O = 0$ are all different.\nTherefore, the three-digit sum $\\text{MOO}$ is $100$.',
          rubric: [
            { code: 'M2', text: 'Uses $AM + A \\le 108$ to deduce $M = 1$ and $O = 0$.' },
            { code: 'A2', text: 'Finds $A = 9$, checks $91 + 9 = 100$, and gives $\\text{MOO} = 100$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'Consider the following pattern:\n$$0 \\to 1$$\n$$1 \\to 0$$\n$$6 \\to 1$$\n$$8 \\to 2$$\n$$368 \\to 3$$\n$$1008 \\to 4$$\nWhat is $2015 \\to \\text{?}$',
          answer: '$1$',
          principle:
            'Visual digit puzzle: count the number of closed loops (enclosed regions) in the written digits of each number.',
          solution:
            'Notice that the output does not grow with the size of the number in an arithmetic way ($0 \\to 1$ while $1 \\to 0$). Instead, count the number of closed loops (holes) inside the digits of each number:\n- The digit $0$ has $1$ loop ($0 \\to 1$).\n- The digit $1$ has $0$ loops ($1 \\to 0$).\n- The digit $6$ has $1$ loop ($6 \\to 1$).\n- The digit $8$ has $2$ loops ($8 \\to 2$).\nCheck the multi-digit examples:\n- $368$: digit $3$ ($0$ loops) $+$ digit $6$ ($1$ loop) $+$ digit $8$ ($2$ loops) $= 0 + 1 + 2 = 3$.\n- $1008$: digit $1$ ($0$) $+$ digit $0$ ($1$) $+$ digit $0$ ($1$) $+$ digit $8$ ($2$) $= 0 + 1 + 1 + 2 = 4$.\nNow apply the rule to $2015$: digits $2$, $1$, and $5$ each have $0$ loops, while digit $0$ has $1$ loop, so\n$$0 + 1 + 0 + 0 = 1.$$',
          rubric: [
            { code: 'M2', text: 'Identifies the rule as counting the total number of closed loops in the digits.' },
            { code: 'A2', text: 'Counts the single loop in $2015$ (from the digit $0$) to obtain $1$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'The cost price of a pair of shoes was $30$ dollars. Mr Lee sold the pair of shoes to a customer for $40$ dollars. The latter gave Mr Lee a $50$-dollar note, but Mr Lee did not have enough change. So Mr Lee went to Mr Tan in the shop next door and exchanged the $50$-dollar note into smaller notes. Then Mr Lee gave the customer $10$ dollars in change.\nAfter the customer had left, Mr Tan discovered that the $50$-dollar note was a counterfeit. So Mr Lee compensated Mr Tan $50$ dollars. How much money did Mr Lee lose as compared to if the $50$-dollar note was real?',
          answer: '$50$ dollars',
          principle:
            'Compare the real-note outcome and the counterfeit-note outcome directly (or track net cash and inventory changes across all parties).',
          solution:
            'Compare what happens in the two situations:\n1. **If the $50$-dollar note were real:**\n   - Mr Lee gives away the shoes (cost $30$ dollars) and $10$ dollars in change.\n   - He exchanges the real $50$-dollar note with Mr Tan for $50$ dollars in smaller notes (net $0$ change between them) and keeps the $50$ dollars.\n   - Mr Lee\'s net outcome is $+50 - 30 - 10 = +10$ dollars (a profit of $10$ dollars).\n2. **With the counterfeit $50$-dollar note:**\n   - Mr Lee still gives away the shoes (cost $30$ dollars) and $10$ dollars in change.\n   - He receives $50$ dollars in smaller notes from Mr Tan, and later compensates Mr Tan $50$ dollars, so the transactions with Mr Tan cancel out ($+50 - 50 = 0$).\n   - Mr Lee\'s net outcome is $-30 - 10 = -40$ dollars (an actual loss of $40$ dollars).\nComparing the two outcomes, the difference between $+10$ dollars and $-40$ dollars is\n$$10 - (-40) = 50\\text{ dollars}.$$\n(Equivalently, every step involving the shoes, change, and Mr Tan\'s smaller notes is identical except that the $50$-dollar note is fake, forcing Mr Lee to pay Mr Tan $50$ dollars.)\nHence, Mr Lee lost $50$ dollars as compared to if the $50$-dollar note were real.',
          rubric: [
            { code: 'M2', text: 'Finds the net outcome with a real note ($+10$ dollars) and with the counterfeit note ($-40$ dollars), or notes the $50$-dollar compensation is the sole difference.' },
            { code: 'A2', text: 'Concludes Mr Lee lost $50$ dollars compared to the real-note case.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'There are five stacks of coins. One of the stacks contains $5$ identical counterfeit coins. Each of the remaining four stacks contains $5$ genuine coins. All the genuine coins are identical. The mass of a genuine coin is $5\\text{ g}$ while the mass of a counterfeit coin is $4\\text{ g}$. Amy does not know which stack contains counterfeit coins. She takes $1$ coin from the first stack, $2$ coins from the second stack, $3$ coins from the third stack, $4$ coins from the fourth stack, and $5$ coins from the fifth stack. Then she puts all the coins on a weighing machine and finds that the mass of all the coins is $71\\text{ g}$.\nSo which stack contains the counterfeit coins?',
          answer: 'The fourth stack',
          principle:
            'Compare the measured total mass with the mass if all weighed coins were genuine; each counterfeit coin reduces the total by $1\\text{ g}$.',
          solution:
            'First find the total number of coins Amy places on the weighing machine:\n$$1 + 2 + 3 + 4 + 5 = 15\\text{ coins}.$$\nIf all $15$ coins were genuine ($5\\text{ g}$ each), their total mass would be\n$$15 \\times 5 = 75\\text{ g}.$$\nEach counterfeit coin weighs $4\\text{ g}$ instead of $5\\text{ g}$, which is $5 - 4 = 1\\text{ g}$ lighter than a genuine coin.\nThe measured mass is $71\\text{ g}$, so the total deficit is\n$$75 - 71 = 4\\text{ g}.$$\nAt $1\\text{ g}$ lighter per counterfeit coin, there must be $4 \\div 1 = 4$ counterfeit coins on the weighing machine.\nSince Amy took $4$ coins from the **fourth stack**, the **fourth stack** contains the counterfeit coins.',
          rubric: [
            { code: 'M2', text: 'Computes the all-genuine mass $15 \\times 5 = 75\\text{ g}$ and the mass deficit $75 - 71 = 4\\text{ g}$.' },
            { code: 'A2', text: 'Identifies $4$ counterfeit coins and concludes the fourth stack.' }
          ]
        }
      ]
    }
  ]
};
