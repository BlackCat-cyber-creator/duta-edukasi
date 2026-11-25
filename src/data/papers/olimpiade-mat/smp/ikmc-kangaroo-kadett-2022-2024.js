/**
 * Paket Soal Terstruktur: IKMC / Math Kangaroo Kadett — 2022–2024 (Grades 7–8)
 * Sumber: scraped_raw/ikmc-kangaroo-2022-2024-kadett.md (13 soal pilihan ganda bebas-gambar dimuat; 0 soal dilewati dari arsip sumber).
 */
export default {
  id: 'ikmc-kadett-2022-2024',
  slug: 'ikmc-kangaroo-kadett-2022-2024',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'IKMC / Math Kangaroo Kadett (2022-2024 Selected Text Problems)',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab2-bilangan-rasional',
    'smp7-bab3-rasio',
    'smp7-bab4-bentuk-aljabar',
    'smp8-bab3-persamaan-pertidaksamaan-linear',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'IKMC',
  title: 'IKMC / Math Kangaroo Kadett — 2022–2024 (Grades 7–8)',
  totalMarks: 48,
  instructions:
    'Attempt all 13 multiple-choice problems (no calculators). This compilation includes all 13 text-complete problems (0 skipped from the scraped source) from the 2022–2024 IKMC / Math Kangaroo Kadett papers (Grades 7–8), while diagram-dependent problems from those contests are omitted in the source archive. Problems are grouped by official point weight: 6 problems worth 3 marks each (2022 Q1, 2022 Q5, 2023 Q2, 2023 Q4, 2024 Q6, 2024 Q8), 5 problems worth 4 marks each (2022 Q15, 2023 Q15, 2023 Q20, 2024 Q13, 2024 Q20), and 2 problems worth 5 marks each (2022 Q30, 2023 Q22), for a total of 48 marks. Note: In 2023 Q4, a translation typo in the scraped text ("head" instead of "tail" in the final sentence) has been corrected so the question is mathematically consistent with the official key.',
  source: {
    org: 'IKMC / Association Kangourou sans Frontières (M3Kang)',
    file: 'scraped_raw/ikmc-kangaroo-2022-2024-kadett.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Part A: 3-Point Problems',
      marks: 18,
      stem: 'Choose the single best answer (A, B, C, D, or E) for each of the 6 problems below (3 marks each). Original contest years and problem numbers are preserved.',
      parts: [
        {
          label: '2022 Q1',
          marks: 3,
          prompt:
            'What is $(20 + 22) \\div (20 - 22)$?\n\nA. $-42$\nB. $-21$\nC. $-2$\nD. $22$\nE. $42$',
          answer: 'B. $-21$',
          principle: 'Apply order of operations by evaluating each parenthetical expression before dividing, paying attention to signs.',
          solution:
            'First compute the sum inside the first pair of parentheses:\n$$20 + 22 = 42.$$\nNext compute the difference inside the second pair of parentheses:\n$$20 - 22 = -2.$$\nNow divide the two results:\n$$42 \\div (-2) = -21.$$',
          rubric: [
            { code: 'M1', text: 'Evaluates $20 + 22 = 42$.' },
            { code: 'M1', text: 'Evaluates $20 - 22 = -2$.' },
            { code: 'A1', text: 'Computes $42 \\div (-2) = -21$, option B.' }
          ]
        },
        {
          label: '2022 Q5',
          marks: 3,
          prompt:
            'Anna, Beatrice and Clara altogether are $15$ years old. Anna and Beatrice together are $11$ years old. Beatrice and Clara together are $12$ years old. How old is the oldest of the three?\n\nA. $4$\nB. $5$\nC. $6$\nD. $7$\nE. $8$',
          answer: 'E. $8$',
          principle: 'Use a linear system of sums to isolate each individual age by subtracting pairwise sums from the total.',
          solution:
            'Let $A$, $B$, and $C$ denote the ages of Anna, Beatrice, and Clara, respectively. We are given:\n$$A + B + C = 15, \\qquad A + B = 11, \\qquad B + C = 12.$$\nSubtracting $A + B = 11$ from the total gives Clara\'s age:\n$$C = 15 - 11 = 4.$$\nSubtracting $B + C = 12$ from the total gives Anna\'s age:\n$$A = 15 - 12 = 3.$$\nSubstituting $A = 3$ and $C = 4$ into $A + B + C = 15$ gives Beatrice\'s age:\n$$B = 15 - 3 - 4 = 8.$$\nComparing $(A, B, C) = (3, 8, 4)$, the oldest of the three is $8$ years old.',
          rubric: [
            { code: 'M1', text: 'Finds $C = 15 - 11 = 4$ and $A = 15 - 12 = 3$ (or uses $(A+B)+(B+C)-(A+B+C)$).' },
            { code: 'M1', text: 'Determines $B = 8$ and obtains all three ages $(3, 8, 4)$.' },
            { code: 'A1', text: 'Identifies the maximum age as $8$, option E.' }
          ]
        },
        {
          label: '2023 Q2',
          marks: 3,
          prompt:
            'Which of the following shapes cannot be cut into two trapeziums with one single straight line?\n\nA. Triangle\nB. Rectangle\nC. Trapezium\nD. Regular hexagon\nE. Square',
          answer: 'A. Triangle',
          principle: 'Count the number of sides produced when a straight line cuts a polygon: every trapezium is a quadrilateral ($4$ sides).',
          solution:
            'A trapezium is a quadrilateral with at least one pair of parallel sides.\nConsider any single straight line cutting through a triangle:\n- If the line passes through a vertex and meets the opposite side, the triangle is divided into two triangles ($3$-sided polygons).\n- If the line does not pass through any vertex and crosses two sides, the triangle is divided into one smaller triangle ($3$ sides) and one quadrilateral ($4$ sides).\nIn neither case can a triangle be split into two quadrilaterals, so it can never be cut into two trapeziums.\n\nFor completeness, each of the other four shapes can be cut into two trapeziums with one straight line:\n- **Rectangle / Square**: draw any slanted line from one edge to the opposite parallel edge (not passing through a corner).\n- **Trapezium**: draw a line connecting a point on the top parallel base to a point on the bottom parallel base.\n- **Regular hexagon**: draw the symmetry diagonal connecting two opposite vertices, producing two congruent isosceles trapeziums.\n\nTherefore, only a **triangle** cannot be cut into two trapeziums.',
          rubric: [
            { code: 'M1', text: 'Shows that any single straight cut of a triangle yields two triangles or one triangle and one quadrilateral.' },
            { code: 'M1', text: 'Verifies valid single-line cuts into two trapeziums for rectangle, trapezium, regular hexagon, and square.' },
            { code: 'A1', text: 'Concludes Triangle, option A.' }
          ]
        },
        {
          label: '2023 Q4',
          marks: 3,
          prompt:
            'John throws $150$ coins onto a table. $60$ of them show "head", the others show "tail". He wants the same amount of coins to show "head" as "tail". How many coins that show "tail" does he have to turn over?\n\nA. $10$\nB. $15$\nC. $20$\nD. $25$\nE. $30$',
          answer: 'B. $15$',
          principle: 'Find the target equal count $\\frac{1}{2} N$ and compare it with the current count; each flipped coin changes the count by $1$.',
          solution:
            'There are $150$ coins in total, with $60$ showing "head" and $150 - 60 = 90$ showing "tail".\nTo have equal numbers of heads and tails, John needs\n$$\\frac{150}{2} = 75$$\ncoins showing "head" and $75$ coins showing "tail".\nTurning over one coin that shows "tail" increases the number of heads by $1$ and decreases the number of tails by $1$. Thus, the number of "tail" coins he must turn over is\n$$75 - 60 = 15 \\quad (\\text{equivalently, } 90 - 75 = 15).$$',
          rubric: [
            { code: 'M1', text: 'Finds that there are $90$ tails and the target count is $150 \\div 2 = 75$ of each.' },
            { code: 'M1', text: 'Sets up the difference $75 - 60$ (or $90 - 75$) for the number of tails to flip.' },
            { code: 'A1', text: 'Obtains $15$, option B.' }
          ]
        },
        {
          label: '2024 Q6',
          marks: 3,
          prompt:
            'Ria has three cards with the numbers $1$, $5$ and $11$. She wants to place the cards next to each other to form a $4$-digit number. How many different $4$-digit numbers can she form?\n\nA. $3$\nB. $4$\nC. $6$\nD. $8$\nE. $9$',
          answer: 'B. $4$',
          principle: 'List all $3!$ permutations of the cards and eliminate duplicate digit strings created when $1$ and $11$ sit adjacent.',
          solution:
            'Using all three cards ($1$, $5$, and $11$) always forms a $4$-digit number, and there are $3! = 6$ ways to order the three cards:\n1. $[1]\\,[5]\\,[11] \\to 1511$\n2. $[1]\\,[11]\\,[5] \\to 1115$\n3. $[5]\\,[1]\\,[11] \\to 5111$\n4. $[5]\\,[11]\\,[1] \\to 5111$\n5. $[11]\\,[1]\\,[5] \\to 1115$\n6. $[11]\\,[5]\\,[1] \\to 1151$\n\nNotice that placing $[1]$ and $[11]$ next to each other produces the same three-digit block $111$ regardless of their order, so $1115$ and $5111$ each appear twice.\nThus, the distinct $4$-digit numbers Ria can form are $1115, 1151, 1511,$ and $5111$, which is $4$ different numbers.',
          rubric: [
            { code: 'M1', text: 'Generates all $3! = 6$ card arrangements.' },
            { code: 'M1', text: 'Identifies the duplicate pairs ($1115$ and $5111$) caused by adjacent $1$ and $11$.' },
            { code: 'A1', text: 'Counts $4$ distinct $4$-digit numbers, option B.' }
          ]
        },
        {
          label: '2024 Q8',
          marks: 3,
          prompt:
            'There are five different kinds of fruit in a bowl: apples, grapes, cherries, strawberries and bananas. Anna likes apples, cherries, strawberries and bananas. Berta likes apples. Conny likes grapes, cherries, strawberries and bananas. Doris likes apples, grapes and cherries. Eva likes apples and cherries. The fruits are shared out so that each person gets a different kind of fruit but everybody gets a kind of fruit that they like. Who gets the cherries?\n\nA. Anna\nB. Berta\nC. Conny\nD. Doris\nE. Eva',
          answer: 'E. Eva',
          principle: 'Solve the bipartite matching by propagating forced choices from the person with the fewest liked fruits.',
          solution:
            'Trace the forced assignments step by step:\n1. **Berta** only likes **apples**, so Berta must receive **apples**.\n2. **Eva** likes only apples and cherries. Since apples have been given to Berta, Eva must receive **cherries**.\n\nWe also verify that the remaining three fruits can be validly distributed:\n3. **Doris** likes apples, grapes, and cherries. With apples and cherries taken, Doris must receive **grapes**.\n4. The remaining two fruits (strawberries and bananas) go to **Anna** and **Conny**, both of whom like both strawberries and bananas.\n\nHence, **Eva** definitely gets the cherries.',
          rubric: [
            { code: 'M1', text: 'Deduces Berta must get apples (her only liked fruit).' },
            { code: 'M1', text: 'Deduces Eva must get cherries and confirms a valid assignment exists for Doris, Anna, and Conny.' },
            { code: 'A1', text: 'Identifies Eva, option E.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Part B: 4-Point Problems',
      marks: 20,
      stem: 'Choose the single best answer (A, B, C, D, or E) for each of the 5 problems below (4 marks each). Original contest years and problem numbers are preserved.',
      parts: [
        {
          label: '2022 Q15',
          marks: 4,
          prompt:
            'How many integers between $100$ and $300$ have only odd digits?\n\nA. $25$\nB. $50$\nC. $75$\nD. $100$\nE. $150$',
          answer: 'A. $25$',
          principle: 'Apply the multiplication principle to each digit position restricted to the set of odd digits $\\{1, 3, 5, 7, 9\\}$.',
          solution:
            'An integer between $100$ and $300$ (note that $100$ and $300$ themselves contain the even digit $0$) is a $3$-digit number $\\overline{abc}$ whose hundreds digit $a$ is $1$ or $2$.\nFor every digit to be odd, each digit must belong to $\\{1, 3, 5, 7, 9\\}$:\n- **Hundreds digit $a$**: must lie in $\\{1, 2\\}$ and be odd, so $a = 1$ ($1$ choice).\n- **Tens digit $b$**: any of $\\{1, 3, 5, 7, 9\\}$ ($5$ choices).\n- **Units digit $c$**: any of $\\{1, 3, 5, 7, 9\\}$ ($5$ choices).\n\nBy the multiplication principle, the total number of such integers is\n$$1 \\times 5 \\times 5 = 25.$$',
          rubric: [
            { code: 'M1', text: 'Restricts the hundreds digit to $a = 1$ ($1$ choice).' },
            { code: 'M2', text: 'Counts $5$ odd-digit choices each for the tens and units digits.' },
            { code: 'A1', text: 'Multiplies $1 \\times 5 \\times 5 = 25$, option A.' }
          ]
        },
        {
          label: '2023 Q15',
          marks: 4,
          prompt:
            'The side lengths of a square are $1\\text{ cm}$ long. How many points on a plane surface are there that are exactly $1\\text{ cm}$ away from two corner points of the square?\n\nA. $4$\nB. $5$\nC. $6$\nD. $10$\nE. $12$',
          answer: 'E. $12$',
          principle: 'The locus of points at distance $1\\text{ cm}$ from a vertex is a unit circle; count pairwise intersections of the four unit circles and check for coincidences.',
          solution:
            'Label the vertices of the $1\\text{ cm} \\times 1\\text{ cm}$ square as $A, B, C, D$ in order. A point $P$ in the plane is $1\\text{ cm}$ away from vertex $V$ if and only if $P$ lies on the unit circle $\\mathcal{C}_V$ centered at $V$ with radius $1\\text{ cm}$.\n\nFirst, check whether any point can lie on three or four of these circles: any three vertices of the square lie on a unique circle—the circumcircle of the square—whose radius is $\\frac{\\sqrt{2}}{2}\\text{ cm} \\neq 1\\text{ cm}$. Thus, no point is $1\\text{ cm}$ from three or more vertices, so every point at distance $1\\text{ cm}$ from at least two vertices is at distance $1\\text{ cm}$ from *exactly* two vertices.\n\nThere are $\\binom{4}{2} = 6$ pairs of vertices:\n1. **Adjacent pairs ($AB$, $BC$, $CD$, $DA$ — $4$ pairs)**: For each side of length $1\\text{ cm}$, the two unit circles around its endpoints intersect at $2$ points—the third vertices of the two equilateral triangles of side $1\\text{ cm}$ built on that side (one inside the square, one outside). This gives $4 \\times 2 = 8$ points.\n2. **Opposite pairs ($AC$ and $BD$ — $2$ pairs)**: The diagonal distance is $|AC| = \\sqrt{2}\\text{ cm} < 2\\text{ cm}$, so $\\mathcal{C}_A$ and $\\mathcal{C}_C$ intersect at $2$ points, namely $B$ and $D$ (since $|AB|=|CB|=|AD|=|CD|=1\\text{ cm}$). Likewise, $\\mathcal{C}_B$ and $\\mathcal{C}_D$ intersect at $A$ and $C$. This gives $2 \\times 2 = 4$ points (the four corners of the square).\n\nSince no point lies on three circles, all $8 + 4 = 12$ points are distinct.',
          rubric: [
            { code: 'M1', text: 'Proves no point is $1\\text{ cm}$ from three vertices (circumradius $\\frac{\\sqrt{2}}{2} \\neq 1$).' },
            { code: 'M1', text: 'Finds $4 \\times 2 = 8$ intersection points from the $4$ adjacent vertex pairs.' },
            { code: 'M1', text: 'Finds $2 \\times 2 = 4$ intersection points from the $2$ opposite vertex pairs (the $4$ corners).' },
            { code: 'A1', text: 'Totals $8 + 4 = 12$ distinct points, option E.' }
          ]
        },
        {
          label: '2023 Q20',
          marks: 4,
          prompt:
            'The sum of $2023$ consecutive integers is $2023$. What is the sum of the digits of the biggest of those numbers?\n\nA. $4$\nB. $5$\nC. $6$\nD. $7$\nE. $8$',
          answer: 'A. $4$',
          principle: 'The sum of an odd number $n$ of consecutive integers equals $n$ times the middle integer.',
          solution:
            'Since $2023$ is odd, let the middle integer be $m$. Then the $2023$ consecutive integers are\n$$m - 1011,\\; m - 1010,\\; \\ldots,\\; m,\\; \\ldots,\\; m + 1010,\\; m + 1011,$$\nbecause $\\frac{2023 - 1}{2} = 1011$.\nPairing terms symmetric about $m$, their sum is\n$$2023m = 2023 \\implies m = 1.$$\nHence, the biggest of these $2023$ consecutive integers is\n$$m + 1011 = 1 + 1011 = 1012.$$\nThe sum of the digits of $1012$ is\n$$1 + 0 + 1 + 2 = 4.$$',
          rubric: [
            { code: 'M1', text: 'Writes the sum in terms of the middle integer $m$ as $2023m = 2023$, giving $m = 1$.' },
            { code: 'M2', text: 'Finds the largest integer $1 + \\frac{2023-1}{2} = 1012$.' },
            { code: 'A1', text: 'Computes the digit sum $1 + 0 + 1 + 2 = 4$, option A.' }
          ]
        },
        {
          label: '2024 Q13',
          marks: 4,
          prompt:
            'Uli can buy exactly $12$ packages of jelly babies or exactly $20$ chocolate bars with her pocket money. Uli buys $9$ packages of jelly babies. How many chocolate bars can she buy with the remaining money?\n\nA. $3$\nB. $4$\nC. $5$\nD. $6$\nE. $8$',
          answer: 'C. $5$',
          principle: 'Express both purchases as fractions of the total pocket money (or equate unit costs $12j = 20c$).',
          solution:
            'Buying $9$ packages out of $12$ possible packages uses\n$$\\frac{9}{12} = \\frac{3}{4}$$\nof Uli\'s pocket money, leaving\n$$1 - \\frac{3}{4} = \\frac{1}{4}$$\nof her pocket money.\nSince her full pocket money can buy $20$ chocolate bars, the remaining $\\frac{1}{4}$ of her pocket money can buy\n$$\\frac{1}{4} \\times 20 = 5$$\nchocolate bars.\n\n*(Check via unit prices: $12j = 20c \\implies 3j = 5c$, so the $12 - 9 = 3$ unspent jelly-baby packages equal $5$ chocolate bars.)*',
          rubric: [
            { code: 'M2', text: 'Finds that $\\frac{9}{12} = \\frac{3}{4}$ of the money is spent, leaving $\\frac{1}{4}$ (or uses $12j = 20c \\implies 3j = 5c$).' },
            { code: 'M1', text: 'Converts the remaining money into $\\frac{1}{4} \\times 20$ chocolate bars.' },
            { code: 'A1', text: 'Obtains $5$ chocolate bars, option C.' }
          ]
        },
        {
          label: '2024 Q20',
          marks: 4,
          prompt:
            'Every day, penguin Paula catches $12$ fish for her two children. Every day she gives one of her children $7$ fish and the other $5$ fish. After several days, one of her children has received $44$ fish. How many fish did the other child receive?\n\nA. $34$\nB. $40$\nC. $46$\nD. $52$\nE. $58$',
          answer: 'D. $52$',
          principle: 'Bound the number of days $n$ using minimum and maximum daily shares ($5n \\le 44 \\le 7n$) and eliminate possibilities using parity.',
          solution:
            'Suppose $n$ days have passed, and the child with $44$ fish received $7$ fish on $a$ days and $5$ fish on $b$ days, where $a, b \\ge 0$ are integers with $a + b = n$. Then:\n$$7a + 5b = 44.$$\nUsing $b = n - a$, rewrite this as\n$$5n + 2a = 44 \\qquad \\text{and} \\qquad 7n - 2b = 44.$$\nSince $a \\ge 0$ and $b \\ge 0$, we obtain the bounds:\n$$5n \\le 44 \\le 7n \\implies \\frac{44}{7} \\le n \\le \\frac{44}{5} \\implies 7 \\le n \\le 8.$$\nMoreover, from $5n + 2a = 44$, both $2a$ and $44$ are even, so $5n$ must be even, which forces $n$ to be **even**. The only even integer in $\\{7, 8\\}$ is $n = 8$.\n\nCheck: for $n = 8$, $5(8) + 2a = 44 \\implies a = 2$ and $b = 6$, giving $2 \\cdot 7 + 6 \\cdot 5 = 44$.\n\nOver $8$ days, Paula catches $12 \\times 8 = 96$ fish in total, so the other child received\n$$96 - 44 = 52 \\text{ fish}.$$',
          rubric: [
            { code: 'M1', text: 'Bounds the number of days $n$ via $5n \\le 44 \\le 7n$ to get $n \\in \\{7, 8\\}$.' },
            { code: 'M2', text: 'Uses parity in $5n + 2a = 44$ to deduce $n$ is even, hence $n = 8$.' },
            { code: 'A1', text: 'Computes $12 \\times 8 - 44 = 52$ fish, option D.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Part C: 5-Point Problems',
      marks: 10,
      stem: 'Choose the single best answer (A, B, C, D, or E) for each of the 2 problems below (5 marks each). Original contest years and problem numbers are preserved.',
      parts: [
        {
          label: '2022 Q30',
          marks: 5,
          prompt:
            'In total there are $2022$ kangaroos and some koalas living within seven parks. As many kangaroos live in each park as there are koalas in all other parks together. How many koalas in total live in the seven parks?\n\nA. $288$\nB. $337$\nC. $576$\nD. $674$\nE. $2022$',
          answer: 'B. $337$',
          principle: 'Sum the park-by-park equations over all $7$ parks to exploit symmetry between individual counts and the total.',
          solution:
            'For each park $i \\in \\{1, 2, \\ldots, 7\\}$, let $R_i$ be the number of kangaroos and $K_i$ be the number of koalas in park $i$. Let $K = \\sum_{i=1}^7 K_i$ be the total number of koalas across all seven parks.\n\nThe given condition states that for every park $i$, the number of kangaroos in park $i$ equals the total number of koalas in the other $6$ parks:\n$$R_i = K - K_i \\qquad (i = 1, 2, \\ldots, 7).$$\nSumming this equation over all $7$ parks gives\n$$\\sum_{i=1}^7 R_i = \\sum_{i=1}^7 (K - K_i) = 7K - \\sum_{i=1}^7 K_i = 7K - K = 6K.$$\nSince the total number of kangaroos is $\\sum_{i=1}^7 R_i = 2022$, we have\n$$6K = 2022 \\implies K = \\frac{2022}{6} = 337.$$\nThus, $337$ koalas live in the seven parks in total.',
          rubric: [
            { code: 'M2', text: 'Models each park as $R_i = K - K_i$ where $K$ is the total number of koalas.' },
            { code: 'M2', text: 'Sums over all $7$ parks to obtain $\\sum_{i=1}^7 R_i = 7K - K = 6K$.' },
            { code: 'A1', text: 'Solves $K = 2022 \\div 6 = 337$, option B.' }
          ]
        },
        {
          label: '2023 Q22',
          marks: 5,
          prompt:
            'Snow White organises a chess tournament for the seven dwarfs lasting several days. Every dwarf has to play every other dwarf exactly once. On Monday Grumpy plays $1$ game, Sneezy plays $2$, Sleepy $3$, Bashful $4$, Happy $5$ and Doc $6$ games. How many games does Dopey, the $7$th dwarf, play on Monday?\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$\nE. $5$',
          answer: 'C. $3$',
          principle: 'Model Monday\'s games as a simple graph on $7$ vertices and iteratively determine neighbors from the highest and lowest degrees.',
          solution:
            'Because each pair of dwarfs plays at most once in the entire tournament, no two dwarfs play each other more than once on Monday, and no dwarf plays himself.\nDetermine Monday\'s pairings by alternating between the dwarfs with the most and fewest games:\n1. **Doc ($6$ games)**: There are only $6$ other dwarfs, so Doc must play *every* other dwarf on Monday (Grumpy, Sneezy, Sleepy, Bashful, Happy, and Dopey).\n2. **Grumpy ($1$ game)**: Grumpy already played Doc, so Grumpy plays no one else on Monday.\n3. **Happy ($5$ games)**: Excluding Grumpy (whose only game was against Doc), only $5$ other dwarfs remain, so Happy must play all $5$ of them: Doc, Sneezy, Sleepy, Bashful, and Dopey.\n4. **Sneezy ($2$ games)**: Sneezy has already played Doc and Happy, which accounts for both of his games, so Sneezy plays no one else on Monday.\n5. **Bashful ($4$ games)**: Excluding Grumpy and Sneezy (who have finished their Monday games), only $4$ other dwarfs remain, so Bashful must play all $4$ of them: Doc, Happy, Sleepy, and Dopey.\n6. **Sleepy ($3$ games)**: Sleepy has now played Doc, Happy, and Bashful—all $3$ of his games—so Sleepy does not play Dopey.\n\nCounting Dopey\'s opponents on Monday, Dopey plays **Doc, Happy, and Bashful**, and no one else. Therefore, Dopey plays $3$ games on Monday.',
          rubric: [
            { code: 'M2', text: 'Deduces Doc ($6$) plays everyone including Grumpy ($1$), so Grumpy plays no one else.' },
            { code: 'M2', text: 'Deduces Happy ($5$) plays everyone except Grumpy (filling Sneezy\'s $2$), and Bashful ($4$) plays everyone except Grumpy and Sneezy (filling Sleepy\'s $3$).' },
            { code: 'A1', text: 'Counts Dopey\'s opponents (Doc, Happy, Bashful) to obtain $3$ games, option C.' }
          ]
        }
      ]
    }
  ]
};
