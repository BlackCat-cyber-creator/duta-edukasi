/**
 * Paket Soal Terstruktur: SASMO Practice Set II
 * Sumber: SASMO Practice II (sasmo_practice_ii.pdf, 24 soal isian singkat).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Soal 1, 3, 11, 14, 18, 21, dan 23 dilengkapi diagram SVG vektor berdasarkan gambar asli pada PDF.
 */
export default {
  id: 'sasmo-practice-2',
  slug: 'sasmo-practice-2',
  subject: 'olimpiade-mat',
  grade: 6,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'SASMO Practice Set II: logic puzzles, number patterns, divisibility, counting, combinatorics, and geometry',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd4-bab3-pola-gambar-bilangan',
    'sd4-bab5-bangun-datar',
    'sd5-bab2-kpk-fpb',
    'sd5-bab4-keliling-bangun-datar',
    'sd6-bab4-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO Practice Set II',
  totalMarks: 96,
  instructions:
    'Attempt all 24 short-answer questions from SASMO Practice Set II (no calculators). Each correct answer carries 4 marks (96 marks total). Diagrams for Questions 1, 3, 11, 14, 18, 21, and 23 are provided as vector SVG figures.',
  source: {
    org: 'SASMO',
    file: 'sasmo_practice_ii.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Short-Answer Questions',
      marks: 96,
      stem: 'Solve all 24 short-answer questions without a calculator. Each correct answer carries 4 marks.',
      parts: [
        {
          label: '1',
          marks: 4,
          prompt:
            'In the puzzle below, each card hides a digit. What digit is hidden under the card with the question mark?',
          figures: [
            {
              src: '/papers/sasmo-practice-2/fig-1.svg',
              alt: 'Addition equation 20 plus a two-digit number formed by a card with a question mark and an empty card plus 19 equals 100.',
              caption: 'Card digit puzzle for Question 1.'
            }
          ],
          answer: '$6$',
          principle:
            'Add the known numbers first and subtract from $100$ to find the two-digit number formed by the two cards.',
          solution:
            'First add the two given numbers on the left-hand side:\n$$20 + 19 = 39.$$\nSubtract $39$ from $100$ to find the two-digit number hidden by the two cards:\n$$100 - 39 = 61.$$\nThe card with the question mark is in the tens place of $61$, so the hidden digit is $6$.\nCheck: $20 + 61 + 19 = 100$.',
          rubric: [
            { code: 'M2', text: 'Finds that the two-digit card number equals $100 - (20 + 19) = 61$.' },
            { code: 'A2', text: 'Identifies the tens digit as $6$.' }
          ]
        },
        {
          label: '2',
          marks: 4,
          prompt:
            'Gary has $20$ more candies than Mary. If Gary gives Mary $19$ of his candies, Mary would have how many more candies than Gary?',
          answer: '$18$',
          principle:
            'When one person gives $k$ items to the other, the difference between their amounts changes by $2k$.',
          solution:
            'Let Mary start with $m$ candies. Since Gary has $20$ more candies than Mary, Gary starts with $m + 20$ candies.\nAfter Gary gives $19$ candies to Mary:\n- Gary has $(m + 20) - 19 = m + 1$ candies.\n- Mary has $m + 19$ candies.\nTherefore, Mary now has\n$$(m + 19) - (m + 1) = 18$$\nmore candies than Gary.',
          rubric: [
            { code: 'M2', text: 'Expresses both amounts after the transfer: Gary has $m + 1$ and Mary has $m + 19$.' },
            { code: 'A2', text: 'Finds the difference $18$.' }
          ]
        },
        {
          label: '3',
          marks: 4,
          prompt:
            'Numbers were written in the twelve boxes shown, one number per box. For every four boxes in a row, the sum of their numbers was $12$. Most of the numbers got erased over time, but three of them remain. What number was written in the last box on the right?',
          figures: [
            {
              src: '/papers/sasmo-practice-2/fig-3.svg',
              alt: 'A horizontal strip of twelve square boxes with 0 in the second box, 1 in the seventh box, and 2 in the ninth box.',
              caption: 'Twelve-box strip with three remaining numbers for Question 3.'
            }
          ],
          answer: '$9$',
          principle:
            'If every $4$ consecutive terms have the same sum, then shifting the window by $1$ box forces terms $4$ steps apart to be equal (period $4$).',
          solution:
            'Label the numbers in the $12$ boxes from left to right as $a_1, a_2, \\ldots, a_{12}$.\nSince any four consecutive boxes sum to $12$, for each $k$ we have\n$$a_k + a_{k+1} + a_{k+2} + a_{k+3} = 12 = a_{k+1} + a_{k+2} + a_{k+3} + a_{k+4},$$\nwhich implies $a_k = a_{k+4}$. Thus the sequence repeats every $4$ boxes:\n$$a_1, a_2, a_3, a_4, \\; a_1, a_2, a_3, a_4, \\; a_1, a_2, a_3, a_4.$$\nFrom the diagram:\n- Box $2$ has $0$, so $a_2 = 0$.\n- Box $7$ (which is in position $3$ of the second block) has $1$, so $a_3 = 1$.\n- Box $9$ (which is in position $1$ of the third block) has $2$, so $a_1 = 2$.\nUsing $a_1 + a_2 + a_3 + a_4 = 12$, we get\n$$2 + 0 + 1 + a_4 = 12 \\implies a_4 = 9.$$\nThe last box on the right is Box $12$, which holds $a_4 = 9$.',
          rubric: [
            { code: 'M1', text: 'Shows that the numbers repeat with period $4$.' },
            { code: 'M1', text: 'Maps the three given numbers to $a_1 = 2$, $a_2 = 0$, and $a_3 = 1$.' },
            { code: 'A2', text: 'Computes $a_4 = 12 - (2 + 0 + 1) = 9$ for the twelfth box.' }
          ]
        },
        {
          label: '4',
          marks: 4,
          prompt:
            'Four cats — Astro, Buttons, Calico, and Duchess — bought $20$ mice altogether. Each of the four cats bought an odd number of mice, but none of them bought exactly $13$ mice. Buttons bought more mice than Astro, fewer mice than Duchess, and as many mice as Calico. How many mice did Calico buy?',
          answer: '$5$',
          principle:
            'Translate the comparisons into inequalities and test all small odd values consistent with the total sum of $20$.',
          solution:
            'Let $A, B, C, D$ be the odd numbers of mice bought by Astro, Buttons, Calico, and Duchess, respectively. The conditions state that\n$$A < B = C < D, \\qquad A + B + C + D = 20, \\qquad A, B, C, D \\in \\{1, 3, 5, 7, 9, 11, 15, \\ldots\\}.$$\nSubstituting $B = C$ gives $A + 2C + D = 20$.\nCheck the possible odd values of $A$:\n- If $A = 1$, then $2C + D = 19$ with $1 < C < D$:\n  - $C = 3 \\implies D = 13$ (forbidden, since none bought $13$).\n  - $C = 5 \\implies D = 9$ (valid: $1 < 5 = 5 < 9$, sum $= 20$).\n  - $C \\ge 7 \\implies D \\le 5 < C$ (impossible).\n- If $A = 3$, then $C \\ge 5$ and $D \\ge 7$, giving $A + 2C + D \\ge 3 + 10 + 7 = 20$. Equality holds only when $C = 5$ and $D = 7$ (valid: $3 < 5 = 5 < 7$, sum $= 20$).\n- If $A \\ge 5$, then $C \\ge 7$ and $D \\ge 9$, so $A + 2C + D \\ge 5 + 14 + 9 = 28 > 20$ (impossible).\nIn both valid solutions $(1, 5, 5, 9)$ and $(3, 5, 5, 7)$, Calico bought $5$ mice.',
          rubric: [
            { code: 'M2', text: 'Sets up $A < B = C < D$ with $A + 2C + D = 20$ and odd numbers excluding $13$.' },
            { code: 'M1', text: 'Tests odd cases to find the two valid quadruples $(1, 5, 5, 9)$ and $(3, 5, 5, 7)$.' },
            { code: 'A1', text: 'Concludes uniquely that Calico bought $5$ mice.' }
          ]
        },
        {
          label: '5',
          marks: 4,
          prompt:
            'Natasha drew five straight lines (from border to border) on a triangular piece of paper. Then she cut the paper along all these lines and got several shapes. What is the largest number of sides one of Natasha\'s shapes could have?',
          answer: '$8$',
          principle:
            'Every side of a resulting piece must lie along either one of the $3$ original triangle edges or one of the $5$ straight cut lines.',
          solution:
            'Each cut is a straight line, so every resulting piece is a convex polygon whose sides lie on distinct straight lines. There are only $3$ border lines from the original triangle and $5$ cut lines, giving $3 + 5 = 8$ lines in total. Since a convex polygon can have at most one side along each line, no piece can have more than $8$ sides.\nAn $8$-sided piece (an octagon) is indeed achievable: start with the $3$-sided triangle and make $5$ straight cuts from border to border such that each cut slices a tiny corner off the central piece without cutting through its interior. Each of the $5$ cuts adds $1$ new side to the central piece, producing an octagon with $3 + 5 = 8$ sides.',
          rubric: [
            { code: 'M2', text: 'Bounds the maximum sides by $3$ original borders $+\\, 5$ cut lines $= 8$.' },
            { code: 'M1', text: 'Explains a construction (slicing off $5$ corners) that achieves an $8$-sided polygon.' },
            { code: 'A1', text: 'States the maximum number of sides is $8$.' }
          ]
        },
        {
          label: '6',
          marks: 4,
          prompt:
            'A family has many children — brothers and sisters. Each of them wrote a statement about the family. Five of these statements are as follows:\n- I have more brothers than sisters;\n- I have more sisters than brothers;\n- I have as many brothers as sisters;\n- I have fewer sisters than brothers;\n- I have fewer brothers than sisters.\n\nWhat is the greatest possible number of these statements that can be true at the same time?',
          answer: '$4$',
          principle:
            'Pair up logically equivalent statements and compare what a boy versus a girl sees in a family with $b$ boys and $g$ girls.',
          solution:
            'Notice that two pairs of statements have the exact same meaning:\n- Statement $1$ ("more brothers than sisters") and Statement $4$ ("fewer sisters than brothers") are equivalent.\n- Statement $2$ ("more sisters than brothers") and Statement $5$ ("fewer brothers than sisters") are equivalent.\n- Statement $3$ is "as many brothers as sisters."\n\nLet the family have $b$ boys and $g$ girls ($b, g \\ge 1$). A boy has $b - 1$ brothers and $g$ sisters, while a girl has $b$ brothers and $g - 1$ sisters.\n- Suppose Statement $3$ is true for some child:\n  - If a boy wrote it, then $b - 1 = g$, so $b = g + 1$. Then every girl has $g + 1$ brothers and $g - 1$ sisters (more brothers than sisters, Statements $1$ and $4$), and no child has fewer brothers than sisters (Statements $2$ and $5$ are both false). At most $3$ statements ($1, 3, 4$) are true.\n  - Symmetrically, if a girl wrote Statement $3$, then $g = b + 1$, and at most $3$ statements ($2, 3, 5$) are true.\n- Suppose Statement $3$ is false, and instead $b = g$ (for instance, $3$ boys and $3$ girls). Then:\n  - Every boy has $b - 1$ brothers and $b$ sisters, making Statements $2$ and $5$ true.\n  - Every girl has $b$ brothers and $b - 1$ sisters, making Statements $1$ and $4$ true.\n\nThus $4$ statements ($1, 2, 4, 5$) can be true simultaneously, and $5$ is impossible.',
          rubric: [
            { code: 'M2', text: 'Groups the five statements into three equivalence classes and analyzes the $b - g$ cases.' },
            { code: 'M1', text: 'Shows that Statement $3$ limits the count to at most $3$, whereas $b = g$ makes $4$ statements true.' },
            { code: 'A1', text: 'Correct answer $4$.' }
          ]
        },
        {
          label: '7',
          marks: 4,
          prompt:
            'Dubbles the monster has twice as many ears as eyes, twice as many legs as arms, and twice as many tongues as noses. Overall he has $39$ ears, eyes, legs, arms, tongues, and noses. How many ears, legs, and tongues does Dubbles the monster have altogether?',
          answer: '$26$',
          principle:
            'Group each pair of body-part counts using the $2 : 1$ ratio so the total is $3$ times the smaller group.',
          solution:
            'Let $e$ be the number of eyes, $a$ the number of arms, and $n$ the number of noses. Then Dubbles has $2e$ ears, $2a$ legs, and $2n$ tongues.\nThe total count of all six types of body parts is\n$$(2e + e) + (2a + a) + (2n + n) = 3(e + a + n) = 39.$$\nDividing by $3$ gives\n$$e + a + n = 13.$$\nTherefore, the total number of ears, legs, and tongues is\n$$2e + 2a + 2n = 2(e + a + n) = 2 \\times 13 = 26.$$',
          rubric: [
            { code: 'M2', text: 'Expresses the total as $3(e + a + n) = 39$ to obtain $e + a + n = 13$.' },
            { code: 'A2', text: 'Computes $2(e + a + n) = 26$.' }
          ]
        },
        {
          label: '8',
          marks: 4,
          prompt:
            'How many different counting numbers are there containing only odd digits such that for each of these numbers, the sum of all of its digits equals seven?',
          answer: '$13$',
          principle:
            'Because every odd digit is odd, the sum of $k$ odd digits can equal the odd number $7$ only when $k$ is odd ($1, 3, 5,$ or $7$).',
          solution:
            'The available odd digits are $1, 3, 5, 7, 9$. Since the sum of an even number of odd digits is even, any valid number must have an odd number of digits ($1, 3, 5,$ or $7$):\n- **$1$-digit numbers:** Only $7$ ($1$ number).\n- **$3$-digit numbers:** Three odd digits summing to $7$ must be either:\n  - $\\{5, 1, 1\\}$: $3$ arrangements ($511, 151, 115$).\n  - $\\{3, 3, 1\\}$: $3$ arrangements ($331, 313, 133$).\n  Subtotal $= 6$ numbers.\n- **$5$-digit numbers:** Five odd digits summing to $7$ must be $\\{3, 1, 1, 1, 1\\}$, giving $5$ arrangements (depending on the position of $3$).\n- **$7$-digit numbers:** Only $1111111$ ($1$ number).\n\nAdding all cases gives\n$$1 + 6 + 5 + 1 = 13\\text{ numbers}.$$',
          rubric: [
            { code: 'M2', text: 'Uses parity to restrict the digit count to $1, 3, 5, 7$ and enumerates the digit multisets.' },
            { code: 'M1', text: 'Counts the permutations in each case: $1, 6, 5, 1$.' },
            { code: 'A1', text: 'Totals $13$ counting numbers.' }
          ]
        },
        {
          label: '9',
          marks: 4,
          prompt:
            'A square shape is divided into two non-overlapping rectangular shapes. Each of these two rectangular shapes is divided into three non-overlapping square shapes. Compute the sum of the perimeters of these six squares (in feet) if the perimeter of the original square is $60$ feet.',
          answer: '$140$ feet',
          principle:
            'Find the side length of the original square and determine how a rectangle of fixed height $15$ can be tiled by exactly $3$ squares.',
          solution:
            'The original square has perimeter $60\\text{ feet}$, so its side length is\n$$\\frac{60}{4} = 15\\text{ feet}.$$\nCutting it into two non-overlapping rectangles produces two rectangles of dimensions $w \\times 15$ and $(15 - w) \\times 15$ with $0 < w < 15$.\nFor a rectangle of dimensions $a \\times 15$ ($a < 15$) to be divided into exactly $3$ non-overlapping squares:\n- Either all $3$ squares have side $a$ stacked along the side of length $15$, giving $3a = 15 \\implies a = 5$ (three $5 \\times 5$ squares).\n- Or it splits into one $a \\times a$ square and two $(a/2) \\times (a/2)$ squares, giving $a + \\frac{a}{2} = 15 \\implies a = 10$ (one $10 \\times 10$ square and two $5 \\times 5$ squares).\n\nSince $w + (15 - w) = 15$, one rectangle must be $5 \\times 15$ (three $5 \\times 5$ squares) and the other must be $10 \\times 15$ (one $10 \\times 10$ square and two $5 \\times 5$ squares).\nIn total there are five $5 \\times 5$ squares and one $10 \\times 10$ square. The sum of their perimeters is\n$$5 \\times (4 \\times 5) + 1 \\times (4 \\times 10) = 100 + 40 = 140\\text{ feet}.$$',
          rubric: [
            { code: 'B1', text: 'Finds the side length of the original square is $15\\text{ feet}$.' },
            { code: 'M2', text: 'Determines the split into $5 \\times 15$ (three $5\\times 5$ squares) and $10 \\times 15$ (one $10\\times 10$ and two $5\\times 5$ squares).' },
            { code: 'A1', text: 'Computes the total perimeter $140\\text{ feet}$.' }
          ]
        },
        {
          label: '10',
          marks: 4,
          prompt:
            'In $2024$, a long row of trees was planted in the empty Mega Purnama Garden. In $2025$, a tree was planted between every two adjacent (next to each other) trees planted in the previous year. In $2026$, a tree was planted between every two adjacent trees planted in the previous years, bringing the total number of trees in Mega Purnama Garden to $877$. How many trees were planted in Mega Purnama Garden in $2025$?',
          answer: '$219$',
          principle:
            'A row of $T$ trees has $T - 1$ gaps between adjacent trees, so planting one tree in every gap changes the total from $T$ to $2T - 1$.',
          solution:
            'Let $n$ be the number of trees planted in $2024$.\n- End of $2024$: $n$ trees (forming $n - 1$ gaps).\n- In $2025$: $n - 1$ new trees are planted (one in each gap), so the total becomes\n$$n + (n - 1) = 2n - 1.$$\n- In $2026$: there are $(2n - 1) - 1 = 2n - 2$ gaps between adjacent existing trees, so $2n - 2$ new trees are planted, bringing the total to\n$$(2n - 1) + (2n - 2) = 4n - 3.$$\nSetting $4n - 3 = 877$ gives\n$$4n = 880 \\implies n = 220.$$\nHence, the number of trees planted in $2025$ was $n - 1 = 220 - 1 = 219$.\nCheck: $220 + 219 = 439$, and $439 + 438 = 877$.',
          rubric: [
            { code: 'M2', text: 'Models the three-year total as $n + (n - 1) + (2n - 2) = 4n - 3 = 877$.' },
            { code: 'M1', text: 'Solves for $n = 220$ trees planted in $2024$.' },
            { code: 'A1', text: 'Finds $n - 1 = 219$ trees planted in $2025$.' }
          ]
        },
        {
          label: '11',
          marks: 4,
          prompt:
            'How many quadrilaterals of all sizes and positions are there in the diagram, including quadrilaterals that are made up of more than one shape?',
          figures: [
            {
              src: '/papers/sasmo-practice-2/fig-11.svg',
              alt: 'A horizontal row of three adjacent squares with diagonals drawn top-left to bottom-right in the first and third squares and bottom-left to top-right in the second square.',
              caption: 'Three-square diagram with alternating diagonals for Question 11.'
            }
          ],
          answer: '$13$',
          principle:
            'Count axis-aligned rectangles separately from slanted quadrilaterals (parallelograms and trapezoids) that use one or two diagonal segments.',
          solution:
            'Label the vertices along the top edge $T_0, T_1, T_2, T_3$ and along the bottom edge $B_0, B_1, B_2, B_3$ from left to right. The three diagonals are $T_0B_1$, $B_1T_2$, and $T_2B_3$.\n1. **Axis-aligned rectangles ($6$):**\n   - Three $1 \\times 1$ squares: $T_0T_1B_1B_0$, $T_1T_2B_2B_1$, $T_2T_3B_3B_2$.\n   - Two $2 \\times 1$ rectangles: $T_0T_2B_2B_0$, $T_1T_3B_3B_1$.\n   - One $3 \\times 1$ rectangle: $T_0T_3B_3B_0$.\n2. **Slanted quadrilaterals using diagonals ($7$):**\n   - With left diagonal edge $T_0B_1$:\n     - Right vertical edge $T_2B_2$: trapezoid $T_0T_2B_2B_1$ ($1$).\n     - Right vertical edge $T_3B_3$: trapezoid $T_0T_3B_3B_1$ ($1$).\n     - Right diagonal edge $T_2B_3$: parallelogram $T_0T_2B_3B_1$ ($1$).\n   - With right diagonal edge $B_1T_2$ and left vertical edge $T_0B_0$: trapezoid $T_0T_2B_1B_0$ ($1$).\n   - With left diagonal edge $B_1T_2$ and right vertical edge $T_3B_3$: trapezoid $T_2T_3B_3B_1$ ($1$).\n   - With right diagonal edge $T_2B_3$ and a left vertical edge:\n     - Left vertical edge $T_0B_0$: trapezoid $T_0T_2B_3B_0$ ($1$).\n     - Left vertical edge $T_1B_1$: trapezoid $T_1T_2B_3B_1$ ($1$).\n\nTotal quadrilaterals $= 6 + (3 + 1 + 1 + 2) = 13$.',
          rubric: [
            { code: 'M1', text: 'Counts all $6$ axis-aligned rectangles ($3 + 2 + 1$).' },
            { code: 'M2', text: 'Systematically counts all $7$ slanted quadrilaterals ($1$ parallelogram and $6$ trapezoids).' },
            { code: 'A1', text: 'Totals $13$ quadrilaterals.' }
          ]
        },
        {
          label: '12',
          marks: 4,
          prompt:
            'Say that a counting number is "five-important" if it is a multiple of $5$ and contains the digit $5$. For instance, the numbers $125$, $55$, and $2025$ are five-important, but the numbers $59$, $2019$, and $2020$ are not. How many different five-important numbers are there between $1$ and $2025$?',
          answer: '$241$',
          principle:
            'Every multiple of $5$ ends in either $5$ or $0$; split into those two disjoint cases.',
          solution:
            'From the example ($2025$ is included), "between $1$ and $2025$" is inclusive ($1 \\le n \\le 2025$). A multiple of $5$ must end in either $5$ or $0$:\n1. **Multiples of $5$ ending in $5$:** Every such number automatically contains the digit $5$. They form the sequence $5, 15, 25, \\ldots, 2025$, which has\n$$\\frac{2025 - 5}{10} + 1 = 203\\text{ numbers}.$$\n2. **Multiples of $5$ ending in $0$:** These are $10k$ for $1 \\le k \\le 202$. Such a number $10k$ contains the digit $5$ if and only if $k$ contains the digit $5$.\n   - Among $1 \\le k \\le 99$ (treating $1$-digit numbers with leading $0$): out of $100$ numbers $00\\text{–}99$, exactly $9 \\times 9 = 81$ contain no digit $5$, so $100 - 81 = 19$ contain the digit $5$ (and $0$ does not).\n   - Among $100 \\le k \\le 199$: the hundreds digit is $1$, so again $19$ numbers contain the digit $5$.\n   - Among $200 \\le k \\le 202$: none contain the digit $5$.\n   Subtotal $= 19 + 19 = 38$ numbers.\n\nTotal five-important numbers $= 203 + 38 = 241$.',
          rubric: [
            { code: 'M1', text: 'Splits multiples of $5$ in $[1, 2025]$ into units digit $5$ ($203$ numbers) and units digit $0$.' },
            { code: 'M2', text: 'Counts multiples of $10$ containing $5$ by counting $k \\in [1, 202]$ with digit $5$ ($19 + 19 = 38$).' },
            { code: 'A1', text: 'Totals $203 + 38 = 241$.' }
          ]
        },
        {
          label: '13',
          marks: 4,
          prompt:
            'A princess is riding a horse. A bird is on her shoulder. The three of them together have how many more legs than heads?',
          answer: '$5$',
          principle:
            'Sum the legs and heads separately for all three creatures, then take the difference.',
          solution:
            'Count the legs and heads of each:\n- Princess: $2$ legs, $1$ head.\n- Horse: $4$ legs, $1$ head.\n- Bird: $2$ legs, $1$ head.\n\nTotal legs $= 2 + 4 + 2 = 8$.\nTotal heads $= 1 + 1 + 1 = 3$.\nDifference $= 8 - 3 = 5$.',
          rubric: [
            { code: 'M2', text: 'Totals $8$ legs and $3$ heads across the princess, horse, and bird.' },
            { code: 'A2', text: 'Computes $8 - 3 = 5$.' }
          ]
        },
        {
          label: '14',
          marks: 4,
          prompt:
            'A ring is a flat shape formed by an inner circle and an outer circle, as shown in the first diagram. How many rings of all sizes and types are there in the second diagram containing five circles?',
          figures: [
            {
              src: '/papers/sasmo-practice-2/fig-14.svg',
              alt: 'Left diagram shows a single shaded ring between two concentric circles; right diagram shows five concentric circles.',
              caption: 'Sample ring and five concentric circles for Question 14.'
            }
          ],
          answer: '$10$',
          principle:
            'Each ring is uniquely determined by choosing $2$ circles out of the $5$: the smaller acts as the inner boundary and the larger as the outer boundary.',
          solution:
            'Every ring in the five-circle diagram is formed by selecting one inner circle and one outer circle from the $5$ concentric circles.\nLabel the circles $1$ to $5$ from smallest (innermost) to largest (outermost):\n- Inner circle $1$ can pair with outer circle $2, 3, 4,$ or $5$ ($4$ rings).\n- Inner circle $2$ can pair with outer circle $3, 4,$ or $5$ ($3$ rings).\n- Inner circle $3$ can pair with outer circle $4$ or $5$ ($2$ rings).\n- Inner circle $4$ can pair with outer circle $5$ ($1$ ring).\n\nTotal number of rings $= 4 + 3 + 2 + 1 = \\binom{5}{2} = 10$.',
          rubric: [
            { code: 'M2', text: 'Identifies a one-to-one correspondence between rings and pairs of distinct circles.' },
            { code: 'A2', text: 'Computes $\\binom{5}{2} = 4 + 3 + 2 + 1 = 10$.' }
          ]
        },
        {
          label: '15',
          marks: 4,
          prompt:
            'Mary and Jack are standing in line. Mary is the second in line, and Jack is the third from the end. There are $12$ people in front of Jack. How many people are in line behind Mary?',
          answer: '$13$',
          principle:
            'Find the total number of people in the line using Jack\'s position from both ends, then subtract Mary\'s position from the front.',
          solution:
            'Since there are $12$ people in front of Jack, Jack is the $13$th person from the front.\nSince Jack is the $3$rd person from the end, there are $2$ people behind him.\nTherefore, the total number of people in line is\n$$12 + 1 + 2 = 15.$$\nMary is $2$nd in line, so the number of people standing behind Mary is\n$$15 - 2 = 13.$$',
          rubric: [
            { code: 'M2', text: 'Determines the total number of people in line as $12 + 1 + 2 = 15$.' },
            { code: 'A2', text: 'Subtracts $2$ to get $13$ people behind Mary.' }
          ]
        },
        {
          label: '16',
          marks: 4,
          prompt:
            'Find the largest $6$-digit number such that the sum of all its digits equals $40$.',
          answer: '$999940$',
          principle:
            'To maximize a number with a fixed digit sum, make the leftmost digits as large as possible ($9$) first.',
          solution:
            'To make the $6$-digit number as large as possible, maximize each digit from left to right (from hundred-thousands down to units), using $9$ as many times as the remaining sum allows:\n- First four digits: $9, 9, 9, 9$, which use $4 \\times 9 = 36$ of the sum.\n- Remaining digit sum: $40 - 36 = 4$.\n- Put all remaining $4$ in the tens place and $0$ in the units place.\n\nThis gives $999940$. Any larger $6$-digit number would need a digit $\\ge 5$ in the tens place after four $9$s, making the digit sum at least $36 + 5 = 41 > 40$.',
          rubric: [
            { code: 'M2', text: 'Places four $9$s in the highest place values ($4 \\times 9 = 36$) and assigns the remaining $4$ to the tens place.' },
            { code: 'A2', text: 'Correct number $999940$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'Yesterday Alice ate several candies and cookies, for a total of $12$. Today she ate $3$ fewer candies than yesterday, and twice as many cookies as yesterday, for a total of $14$. How many candies did Alice eat yesterday?',
          answer: '$7$',
          principle:
            'Set up two linear equations for yesterday\'s candies and cookies and eliminate the candies variable by subtraction.',
          solution:
            'Let $c$ be the number of candies and $k$ the number of cookies Alice ate yesterday.\nFrom the two days\' totals:\n$$c + k = 12$$\n$$(c - 3) + 2k = 14 \\implies c + 2k = 17.$$\nSubtract the first equation from the second:\n$$(c + 2k) - (c + k) = 17 - 12 \\implies k = 5.$$\nSubstitute $k = 5$ back into $c + k = 12$:\n$$c = 12 - 5 = 7.$$\nCheck: yesterday $7 + 5 = 12$; today $(7 - 3) + 2(5) = 4 + 10 = 14$.',
          rubric: [
            { code: 'M2', text: 'Writes $c + k = 12$ and $(c - 3) + 2k = 14$ (or $c + 2k = 17$).' },
            { code: 'M1', text: 'Solves for $k = 5$ cookies yesterday.' },
            { code: 'A1', text: 'Finds $c = 7$ candies yesterday.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'In a very long toy train, the first and last cars were blue. After each blue car (except the last one), there were two yellow cars. After each pair of yellow cars, there was a red car. After each red car, there was a blue car. The first five train cars are shown in the picture. Oleg picked a car and recolored all cars in front of it green. Then Joyce picked a car and recolored all cars behind it green. What is the least possible number of non-green cars in the recolored toy train if it contains $7$ more yellow cars than blue cars?',
          figures: [
            {
              src: '/papers/sasmo-practice-2/fig-18.svg',
              alt: 'A toy locomotive pulling five train cars labeled BLUE, YELLOW, YELLOW, RED, and BLUE.',
              caption: 'First five cars of the toy train for Question 18.'
            }
          ],
          answer: '$22$',
          principle:
            'The non-green cars form a contiguous segment of the repeating pattern $\\text{B, Y, Y, R}$; start and end with yellow cars to maximize $(\\#\\text{Y} - \\#\\text{B})$ for the shortest length.',
          solution:
            'Before recoloring, the train consists of the repeating $4$-car block $(\\text{B, Y, Y, R})$ followed by a final $\\text{B}$.\nBecause Oleg recolored all cars in front of his chosen car green and Joyce recolored all cars behind her chosen car green, the remaining non-green cars form a single contiguous segment of the train.\nIn each complete $4$-car block $(\\text{B, Y, Y, R})$, there are $2$ yellow cars and $1$ blue car, contributing $+1$ to $(\\#\\text{Y} - \\#\\text{B})$.\nTo reach $\\#\\text{Y} - \\#\\text{B} = 7$ with as few cars as possible, the contiguous segment should avoid unnecessary blue or red cars at its ends — so it should start right after a blue car (on a $\\text{Y}$) and end right after a pair of yellow cars (on $\\text{Y, Y}$):\n$$\\underbrace{\\text{Y, Y, R, B}}_{4} \\; \\underbrace{\\text{Y, Y, R, B}}_{4} \\; \\cdots \\; \\underbrace{\\text{Y, Y, R, B}}_{4} \\; \\text{Y, Y}.$$\nIf there are $k$ blocks of $(\\text{Y, Y, R, B})$ followed by $(\\text{Y, Y})$:\n- Number of yellow cars $= 2k + 2$.\n- Number of blue cars $= k$.\n- Difference $= (2k + 2) - k = k + 2$.\n\nSetting $k + 2 = 7$ gives $k = 5$. The total number of non-green cars is\n$$5 \\times 4 + 2 = 22.$$\nCheck: $5$ blocks of $(\\text{Y, Y, R, B})$ plus $(\\text{Y, Y})$ have $12$ yellow, $5$ blue, and $5$ red cars ($12 - 5 = 7$), and any shorter segment of the pattern has $\\#\\text{Y} - \\#\\text{B} \\le 6$.',
          rubric: [
            { code: 'M1', text: 'Recognizes that the non-green cars are a contiguous subsegment of repeating $\\text{B, Y, Y, R}$.' },
            { code: 'M2', text: 'Constructs the shortest segment achieving $\\#\\text{Y} - \\#\\text{B} = 7$: five $(\\text{Y, Y, R, B})$ blocks plus $(\\text{Y, Y})$.' },
            { code: 'A1', text: 'Computes the minimum length $22$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'Toby wrote the counting numbers from $1$ to $50$. He started this way: $123456789101112$, and stopped when he wrote $50$. How many odd digits did he write?',
          answer: '$46$',
          principle:
            'Count the odd digits ($1, 3, 5, 7, 9$) separately in the units place and in the tens place.',
          solution:
            'The odd digits are $1, 3, 5, 7, 9$. Count them by place value across all numbers from $1$ to $50$:\n- **Units place:** Half of the $50$ numbers are odd, so the units digit is odd $50 \\div 2 = 25$ times.\n- **Tens place:**\n  - $1\\text{–}9$: no tens digit ($0$).\n  - $10\\text{–}19$: tens digit is $1$ (odd), giving $10$ odd digits.\n  - $20\\text{–}29$: tens digit is $2$ (even), giving $0$.\n  - $30\\text{–}39$: tens digit is $3$ (odd), giving $10$ odd digits.\n  - $40\\text{–}49$: tens digit is $4$ (even), giving $0$.\n  - $50$: tens digit is $5$ (odd), giving $1$ odd digit.\n\nTotal odd digits written $= 25 + 10 + 10 + 1 = 46$.',
          rubric: [
            { code: 'M1', text: 'Counts $25$ odd digits in the units place.' },
            { code: 'M2', text: 'Counts $10 + 10 + 1 = 21$ odd digits in the tens place.' },
            { code: 'A1', text: 'Totals $46$ odd digits.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'Anna really likes numbers and decided to collect them. She started her collection from the number $35$, which was a birthday gift from RSM. After that, every week Anna added one more new number to the collection by selecting the smallest counting number which was neither a multiple nor a factor of any number already in the collection. What number was added to Anna\'s collection on week $10$? Note that after $10$ weeks the collection contained $11$ different numbers.',
          answer: '$31$',
          principle:
            'Carefully check both multiples and factors of $35$ (and of every newly added number) at each step — watch out for composite numbers whose prime factors were excluded.',
          solution:
            'Start at Week $0$ with $\\{35\\}$. Note that the factors of $35$ are $1, 5, 7, 35$. Trace each week:\n- **Week $1$:** $1$ divides $35$; $2$ is neither a multiple nor a factor of $35$. Add **$2$**.\n- **Week $2$:** $3$ is neither a multiple nor a factor of $35$ or $2$. Add **$3$**.\n- **Week $3$:** $4$ (mult. of $2$), $5$ (factor of $35$), $6$ (mult. of $2, 3$), $7$ (factor of $35$), $8, 9, 10$ (mult. of $2$ or $3$) are all ruled out. Add **$11$**.\n- **Week $4$:** $12$ is a multiple of $2$. Add **$13$**.\n- **Week $5$:** $14, 15, 16$ are multiples of $2$ or $3$. Add **$17$**.\n- **Week $6$:** $18$ is a multiple of $2$. Add **$19$**.\n- **Week $7$:** $20, 21, 22$ are multiples of $2$ or $3$. Add **$23$**.\n- **Week $8$:** $24$ is a multiple of $2$. Next is $25$: its only factors are $1, 5, 25$, and none of $\\{35, 2, 3, 11, 13, 17, 19, 23\\}$ divides $25$ or is a multiple of $25$! Add **$25$**.\n- **Week $9$:** $26$ (mult. of $2$), $27$ (mult. of $3$), $28$ (mult. of $2$). Add **$29$**.\n- **Week $10$:** $30$ (mult. of $2$). Add **$31$**.\n\nThe $11$-number collection after Week $10$ is $\\{35, 2, 3, 11, 13, 17, 19, 23, 25, 29, 31\\}$, so **$31$** was added on week $10$.',
          rubric: [
            { code: 'M2', text: 'Correctly excludes $1, 5, 7$ as factors of $35$ and lists Weeks $1\\text{–}7$: $2, 3, 11, 13, 17, 19, 23$.' },
            { code: 'M1', text: 'Recognizes that $25 = 5^2$ is added on Week $8$ because $5$ is not in the collection.' },
            { code: 'A1', text: 'Finds $29$ on Week $9$ and $31$ on Week $10$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'How many different ways are there to place four different digits from $1$ to $4$ inside the four square cells of a $2$-by-$2$ grid (one digit per cell) such that for every pair of digits that are $1$ apart (such as $2$ and $3$), their square cells share a side?',
          figures: [
            {
              src: '/papers/sasmo-practice-2/fig-21.svg',
              alt: 'An empty two-by-two square grid divided into four equal square cells.',
              caption: 'Two-by-two grid for Question 21.'
            }
          ],
          answer: '$8$',
          principle:
            'The sequence $1 - 2 - 3 - 4$ must walk through all $4$ cells of the $2 \\times 2$ grid moving only between cells that share a side.',
          solution:
            'In a $2 \\times 2$ grid, each cell shares a side with its $2$ neighboring cells (not the diagonally opposite cell).\nPlace the digits in order $1, 2, 3, 4$:\n- There are $4$ choices for the cell containing $1$.\n- Digit $2$ must share a side with $1$, leaving $2$ choices (either adjacent cell).\n- Once $1$ and $2$ are placed, digit $3$ must share a side with $2$ and cannot go back to $1$, leaving only $1$ choice.\n- Digit $4$ must go into the single remaining cell (which automatically shares a side with $3$ and $1$): $1$ choice.\n\nBy the multiplication principle, there are\n$$4 \\times 2 \\times 1 \\times 1 = 8\\text{ ways}.$$',
          rubric: [
            { code: 'M2', text: 'Models the placement as choosing a cell for $1$ ($4$ choices) and a direction for $2$ ($2$ choices), which fixes $3$ and $4$.' },
            { code: 'A2', text: 'Computes $4 \\times 2 \\times 1 \\times 1 = 8$ ways.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'There are several balls in the KRIS Sport Center. At least one of the balls is $1$ dollar cheaper than another one. At least one of the balls is $2$ dollars cheaper than another one. At least one of the balls is $3$ dollars cheaper than another one. At least one of the balls is $4$ dollars cheaper than another one. At least one of the balls is $6$ dollars cheaper than another one. At least one of the balls is $7$ dollars cheaper than another one. What is the least possible number of balls in the KRIS Sport Center?',
          answer: '$4$',
          principle:
            'Each pair of balls produces at most one positive price difference, so $k$ balls can produce at most $\\binom{k}{2}$ distinct differences.',
          solution:
            'The problem requires at least $6$ distinct positive differences between pairs of ball prices: $1, 2, 3, 4, 6,$ and $7$ dollars.\n- With $3$ balls, there are only $\\binom{3}{2} = 3$ pairs of balls, which can produce at most $3$ distinct price differences — not enough for $6$ differences.\n- With $4$ balls, there are $\\binom{4}{2} = 6$ pairs. We can realize all $6$ required differences using prices $p, p+1, p+3, p+7$ (for example, $1, 2, 4,$ and $8$ dollars):\n  - $2 - 1 = 1$\n  - $4 - 2 = 2$\n  - $4 - 1 = 3$\n  - $8 - 4 = 4$\n  - $8 - 2 = 6$\n  - $8 - 1 = 7$\n\nTherefore, the least possible number of balls is $4$.',
          rubric: [
            { code: 'M2', text: 'Shows $3$ balls give at most $\\binom{3}{2} = 3 < 6$ differences.' },
            { code: 'M1', text: 'Gives a valid $4$-ball price example such as $1, 2, 4, 8$ dollars covering $\\{1, 2, 3, 4, 6, 7\\}$.' },
            { code: 'A1', text: 'Concludes the minimum is $4$ balls.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'How many more triangles (of all sizes and positions) than squares (of all sizes and positions) are there in the diagram?',
          figures: [
            {
              src: '/papers/sasmo-practice-2/fig-23.svg',
              alt: 'A square with both main diagonals drawn and an inscribed diamond whose vertices are the midpoints of the outer square sides.',
              caption: 'Square with diagonals and inscribed tilted grid for Question 23.'
            }
          ],
          answer: '$14$',
          principle:
            'Count triangles by size (tiny corner, full corner, quarter-square, half-square) and count both axis-aligned and $45^\\circ$-tilted squares.',
          solution:
            'First count all **triangles**:\n- **Tiny corner right triangles:** At each of the $4$ corners of the outer square, the inscribed diamond cuts off a corner right triangle that is split in half by a main diagonal, giving $4 \\times 2 = 8$ tiny triangles.\n- **Corner right triangles:** The $4$ corner triangles formed by two outer half-sides and a side of the inscribed diamond ($4$ triangles).\n- **Quarter-square triangles:** The two main diagonals divide the outer square into $4$ large right triangles meeting at the center ($4$ triangles).\n- **Half-square triangles:** Each of the $2$ main diagonals splits the outer square into $2$ halves ($2 \\times 2 = 4$ triangles).\n- (The tilted $2 \\times 2$ grid inside the diamond contains no diagonals of its small squares, so it forms no additional triangles.)\n\nTotal triangles $= 8 + 4 + 4 + 4 = 20$.\n\nNext count all **squares**:\n- **Axis-aligned:** $1$ large outer square.\n- **Tilted at $45^\\circ$:** $4$ small tilted squares inside the diamond plus $1$ whole diamond square itself ($5$ tilted squares).\n\nTotal squares $= 1 + 4 + 1 = 6$.\n\nTherefore, there are $20 - 6 = 14$ more triangles than squares.',
          rubric: [
            { code: 'M2', text: 'Counts all $20$ triangles ($8 + 4 + 4 + 4$).' },
            { code: 'M1', text: 'Counts all $6$ squares ($1$ outer, $4$ small tilted, $1$ large diamond).' },
            { code: 'A1', text: 'Computes $20 - 6 = 14$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'There are six different cards (three red and three blue) with the letters J, O, N on them. Each card has exactly one letter, and each of these letters is on exactly two cards (one red and one blue). How many different ways are there to put all six cards in a row with letters face up and right-side up such that every card appears right next to another card with the same letter?',
          answer: '$48$',
          principle:
            'Because each letter appears on only two cards, every card is next to its matching letter if and only if the six cards form three adjacent same-letter pairs.',
          solution:
            'There are only $2$ cards for each letter ($\\text{J}_R, \\text{J}_B$; $\\text{O}_R, \\text{O}_B$; $\\text{N}_R, \\text{N}_B$). For every card to sit right next to another card with the same letter, the two $\\text{J}$ cards must be adjacent, the two $\\text{O}$ cards must be adjacent, and the two $\\text{N}$ cards must be adjacent.\nThus, any valid arrangement consists of three $2$-card letter blocks ($\\text{JJ}$, $\\text{OO}$, $\\text{NN}$) placed in a row:\n- Choose the order of the $3$ letter blocks: $3! = 6$ ways.\n- Inside the $\\text{JJ}$ block, put red-then-blue or blue-then-red: $2$ ways.\n- Inside the $\\text{OO}$ block, put red-then-blue or blue-then-red: $2$ ways.\n- Inside the $\\text{NN}$ block, put red-then-blue or blue-then-red: $2$ ways.\n\nBy the multiplication principle, the total number of arrangements is\n$$6 \\times 2 \\times 2 \\times 2 = 48.$$',
          rubric: [
            { code: 'M2', text: 'Shows the cards must form three adjacent pairs $\\text{JJ}, \\text{OO}, \\text{NN}$ in $3! = 6$ orders.' },
            { code: 'M1', text: 'Accounts for $2$ color orderings (red/blue) within each of the $3$ pairs ($2^3 = 8$).' },
            { code: 'A1', text: 'Multiplies $6 \\times 8 = 48$.' }
          ]
        }
      ]
    }
  ]
};
