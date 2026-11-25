/**
 * Paket Soal Terstruktur: AMC 8 — 2025 (18 of 25 multiple-choice questions included)
 * Source: scraped_raw/amc-8-2025.md (original 25-question contest).
 * Editing note: Original question numbering is preserved (3, 4, 6-11, 14-16, 18-20, 22-25).
 * Questions 1, 2, 5, 12, 13, 17, and 21 are skipped because they require unprinted figures, grids, graphs, or visual answer choices.
 */
const OK = [{ code: 'A1', text: 'Correct answer supported by the derivation.' }];

export default {
  id: 'amc-8-2025',
  slug: 'amc-8-2025',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'AMC 8 (2025)',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab2-bilangan-rasional',
    'smp7-bab3-rasio',
    'smp7-bab4-bentuk-aljabar',
    'smp7-bab5-kesebangunan',
    'smp8-bab3-persamaan-pertidaksamaan-linear',
    'smp8-bab6-statistika',
    'smp9-bab2-bangun-ruang',
    'smp9-bab3-transformasi-geometri'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMC 8',
  title: 'AMC 8 — 2025',
  totalMarks: 18,
  instructions:
    'The original AMC 8 (2025) paper consists of 25 multiple-choice questions (1 point each). This set includes 18 self-contained questions using their original numbering (Questions 3, 4, 6, 7, 8, 9, 10, 11, 14, 15, 16, 18, 19, 20, 22, 23, 24, and 25) and skips 7 questions (Questions 1, 2, 5, 12, 13, 17, and 21) that require unprinted figures, grids, graphs, or visual answer choices. No calculators are allowed.',
  source: {
    org: 'MAA (Mathematical Association of America) — AMC 8',
    file: 'scraped_raw/amc-8-2025.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple Choice Questions',
      marks: 18,
      stem: 'Choose the best answer (A, B, C, D, or E) for each of the 18 included questions from the 25-question contest (1 point each). Original AMC 8 problem numbers are preserved.',
      parts: [
        {
          label: '3',
          marks: 1,
          prompt:
            '*Buffalo Shuffle-o* is a card game in which all the cards are distributed evenly among all players at the start of the game. When Annika and $3$ of her friends play *Buffalo Shuffle-o*, each player is dealt $15$ cards. Suppose $2$ more friends join the next game. How many cards will be dealt to each player?\n\nA. $8$\nB. $9$\nC. $10$\nD. $11$\nE. $12$',
          answer: 'C. $10$',
          principle: 'Total cards equals $(\\text{number of players}) \\times (\\text{cards per player})$, an invariant quantity across games.',
          solution:
            'In the first game, Annika plus $3$ friends make $1 + 3 = 4$ players, each receiving $15$ cards. Thus, the deck has\n$$4 \\times 15 = 60\\text{ cards}.$$\nWhen $2$ more friends join, there are $4 + 2 = 6$ players sharing the $60$ cards evenly, so each player receives\n$$\\frac{60}{6} = 10\\text{ cards}.$$',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Lucius is counting backward by $7$s. His first three numbers are $100,$ $93,$ and $86.$ What is his $10$th number?\n\nA. $30$\nB. $37$\nC. $42$\nD. $44$\nE. $47$',
          answer: 'B. $37$',
          principle: 'Use the $n$-th term formula for an arithmetic sequence: $a_n = a_1 + (n - 1)d$.',
          solution:
            'The sequence is arithmetic with first term $a_1 = 100$ and common difference $d = -7$. To reach the $10$th number, Lucius takes $10 - 1 = 9$ steps of $-7$:\n$$a_{10} = 100 - 9 \\times 7 = 100 - 63 = 37.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Sekou writes the numbers $15,$ $16,$ $17,$ $18,$ $19.$ After he erases one of the numbers, the sum of the remaining four numbers is a multiple of $4.$ Which number did he erase?\n\nA. $15$\nB. $16$\nC. $17$\nD. $18$\nE. $19$',
          answer: 'C. $17$',
          principle: 'Reduce the total sum modulo $4$: erasing $x$ leaves a multiple of $4$ if and only if $x$ has the same remainder modulo $4$ as the full sum.',
          solution:
            'Compute the sum of all five numbers:\n$$15 + 16 + 17 + 18 + 19 = 5 \\times 17 = 85.$$\nSince $85 = 4 \\times 21 + 1$, we have $85 \\equiv 1 \\pmod{4}$. Let $x$ be the erased number. For the remaining sum $85 - x$ to be divisible by $4$, we need\n$$85 - x \\equiv 0 \\pmod{4} \\implies x \\equiv 85 \\equiv 1 \\pmod{4}.$$\nAmong $15, 16, 17, 18,$ and $19$, the only number congruent to $1 \\pmod{4}$ is $17$ (since $17 = 4 \\times 4 + 1$). Indeed, $15 + 16 + 18 + 19 = 68 = 4 \\times 17$.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'On the most recent exam in Prof. Xochi\'s class,\n- $5$ students earned a score of at least $95\\%$,\n- $13$ students earned a score of at least $90\\%$,\n- $27$ students earned a score of at least $85\\%$, and\n- $50$ students earned a score of at least $80\\%$.\n\nHow many students earned a score of at least $80\\%$ and less than $90\\%$?\n\nA. $8$\nB. $14$\nC. $22$\nD. $37$\nE. $45$',
          answer: 'D. $37$',
          principle: 'The set of students scoring in $[80\\%, 90\\%)$ is the complement of those scoring at least $90\\%$ within those scoring at least $80\\%$.',
          solution:
            'Every student who scored at least $90\\%$ is also included among the $50$ students who scored at least $80\\%$. Subtracting the $13$ students who scored at least $90\\%$ leaves those who scored at least $80\\%$ and strictly less than $90\\%$:\n$$50 - 13 = 37.$$',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Isaiah cuts open a cardboard cube along some of its edges to form a flat shape (a net), which has an area of $18$ square centimeters. What was the volume of the cube in cubic centimeters?\n\nA. $3\\sqrt{3}$\nB. $6$\nC. $9$\nD. $6\\sqrt{3}$\nE. $9\\sqrt{3}$',
          answer: 'A. $3\\sqrt{3}$',
          principle: 'A cube\'s net preserves the total area of its $6$ congruent square faces: $\\text{Surface Area} = 6s^2$ and $\\text{Volume} = s^3$.',
          solution:
            'Any net formed by cutting a cube along its edges consists of all $6$ congruent square faces of the cube without overlap. Let $s$ be the side length of the cube in centimeters. Then each face has area\n$$s^2 = \\frac{18}{6} = 3\\text{ cm}^2,$$\nso $s = \\sqrt{3}$ cm. Therefore, the volume of the cube is\n$$V = s^3 = (\\sqrt{3})^3 = 3\\sqrt{3}\\text{ cm}^3.$$',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Ningli looks at the $6$ pairs of numbers directly across from each other on a standard $12$-hour clock. She takes the average of each pair of numbers. What is the average of the resulting $6$ numbers? Give your answer as a decimal.\n\nA. $5$\nB. $6.5$\nC. $8$\nD. $9.5$\nE. $12$',
          answer: 'B. $6.5$',
          principle: 'The average of equal-sized group averages equals the overall average of all elements.',
          solution:
            'On a $12$-hour clock, the numbers $1$ through $12$ are partitioned into $6$ opposite pairs: $(1, 7), (2, 8), (3, 9), (4, 10), (5, 11),$ and $(6, 12)$. Because every pair has size $2$, the average of the $6$ pair-averages equals the overall average of all $12$ numbers:\n$$\\frac{1}{6}\\sum_{k=1}^{6} \\frac{a_k + b_k}{2} = \\frac{1 + 2 + \\cdots + 12}{12}.$$\nUsing the arithmetic progression sum $\\frac{12 \\times 13}{2} = 78$, the average is\n$$\\frac{78}{12} = \\frac{13}{2} = 6.5.$$',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Rectangle $ABCD$ has sides of length $AB = 5$ inches and $AD = 3$ inches. Rectangle $ABCD$ is rotated $90^\\circ$ clockwise around the midpoint of side $DC$ to give a second rectangle. What is the total area, in square inches, covered by the two overlapping rectangles? Give your answer as a decimal.\n\nA. $21$\nB. $22.25$\nC. $23$\nD. $23.75$\nE. $25$',
          answer: 'D. $23.75$',
          principle: 'Use inclusion-exclusion for two overlapping regions: $\\text{Area}(R_1 \\cup R_2) = \\text{Area}(R_1) + \\text{Area}(R_2) - \\text{Area}(R_1 \\cap R_2)$.',
          solution:
            'Place side $\\overline{DC}$ along the $x$-axis centered at its midpoint $M = (0, 0)$, so $D = (-2.5, 0)$, $C = (2.5, 0)$, and rectangle $ABCD$ occupies $[-2.5, 2.5] \\times [0, 3]$ (the case $[ -2.5, 2.5 ] \\times [ -3, 0 ]$ is congruent by reflection).\n\nRotating $90^\\circ$ clockwise around $(0, 0)$ sends $(x, y) \\mapsto (y, -x)$, so the second rectangle occupies $[0, 3] \\times [-2.5, 2.5]$. Their intersection is\n$$([ -2.5, 2.5 ] \\cap [0, 3]) \\times ([0, 3] \\cap [ -2.5, 2.5 ]) = [0, 2.5] \\times [0, 2.5],$$\na square of side length $2.5$ inches and area $(2.5)^2 = 6.25$ square inches.\n\nEach rectangle has area $5 \\times 3 = 15$ square inches. By inclusion-exclusion, the total covered area is\n$$15 + 15 - 6.25 = 23.75\\text{ square inches}.$$',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'A *tetromino* consists of four squares connected along their edges. There are five possible tetromino shapes—$\\mathrm{I}$ ($1 \\times 4$), $\\mathrm{O}$ ($2 \\times 2$), $\\mathrm{L}$, $\\mathrm{T}$, and $\\mathrm{S}$—which can be rotated or flipped over. Three tetrominoes are used to completely cover a $3 \\times 4$ rectangle. At least one of the tiles is an $\\mathrm{S}$ tile. What are the other two tiles?\n\nA. $\\mathrm{I}$ and $\\mathrm{L}$\nB. $\\mathrm{I}$ and $\\mathrm{T}$\nC. $\\mathrm{L}$ and $\\mathrm{L}$\nD. $\\mathrm{L}$ and $\\mathrm{S}$\nE. $\\mathrm{O}$ and $\\mathrm{T}$',
          answer: 'C. $\\mathrm{L}$ and $\\mathrm{L}$',
          principle: 'Analyze all non-trapping placements of the $\\mathrm{S}$ tetromino in a $3 \\times 4$ board to determine the remaining region uniquely.',
          solution:
            'Label the cells of the $3 \\times 4$ grid by $(r, c)$ with $1 \\le r \\le 3$ and $1 \\le c \\le 4$. An $\\mathrm{S}$ tetromino occupies a $2 \\times 3$ or $3 \\times 2$ bounding box and cannot isolate a single corner cell (which has only two neighbors).\n\n1. **Vertical $\\mathrm{S}$ ($3 \\times 2$):** If placed in columns $1$–$2$ or $3$–$4$, it always isolates one corner square (for example, $(1, 1)$ or $(3, 1)$). Thus it must lie in columns $2$–$3$, covering (up to reflection) $(1, 2), (2, 2), (2, 3), (3, 3)$. Then the $8$ remaining cells split into two disconnected $4$-cell components:\n   - Left: $(1, 1), (2, 1), (3, 1), (3, 2)$, which is an $\\mathrm{L}$ tetromino.\n   - Right: $(1, 3), (1, 4), (2, 4), (3, 4)$, which is also an $\\mathrm{L}$ tetromino.\n\n2. **Horizontal $\\mathrm{S}$ ($2 \\times 3$):** Up to symmetry, place it in rows $1$–$2$ and columns $1$–$3$. Covering $(1, 2), (1, 3), (2, 1), (2, 2)$ isolates $(1, 1)$, so it must cover $(1, 1), (1, 2), (2, 2), (2, 3)$. Then cell $(2, 1)$ has only one unoccupied neighbor, $(3, 1)$, which forces its tile to continue through $(3, 1)$ and $(3, 2)$ to $(3, 3)$—forming an $\\mathrm{L}$ tetromino $\\{(2, 1), (3, 1), (3, 2), (3, 3)\\}$—leaving $\\{(3, 4), (2, 4), (1, 4), (1, 3)\\}$, which is also an $\\mathrm{L}$ tetromino.\n\nHence, in every valid tiling, the other two tiles must be $\\mathrm{L}$ and $\\mathrm{L}$.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'A number $N$ is inserted into the list $2,$ $6,$ $7,$ $7,$ $28.$ The mean is now twice as great as the median. What is $N?$\n\nA. $7$\nB. $14$\nC. $20$\nD. $28$\nE. $34$',
          answer: 'E. $34$',
          principle: 'Compare cases for the position of $N$ in the sorted $6$-element list so the median and mean can be related algebraically.',
          solution:
            'The sum of the original five numbers is $2 + 6 + 7 + 7 + 28 = 50$, so the new mean is $\\frac{50 + N}{6}$. After inserting $N$, the list has $6$ elements, and its median is the average of the $3$rd and $4$th elements in sorted order.\n\n- **Case 1 ($N \\le 6$):** The sorted list is $(\\dots, 6, 7, 7, 28)$ with $N$ in position $1$ or $2$, so the $3$rd and $4$th elements are $6$ and $7$. Then the median is $\\frac{6 + 7}{2} = 6.5$, requiring a mean of $2(6.5) = 13$. That gives $\\frac{50 + N}{6} = 13 \\implies N = 28$, contradicting $N \\le 6$.\n- **Case 2 ($6 < N < 7$):** The sorted list is $(2, 6, N, 7, 7, 28)$, so the median is $\\frac{N + 7}{2}$ and the mean must be $N + 7$. Solving $\\frac{50 + N}{6} = N + 7$ gives $50 + N = 6N + 42 \\implies N = \\frac{8}{5}$, contradicting $6 < N < 7$.\n- **Case 3 ($N \\ge 7$):** The $3$rd and $4$th elements are both $7$, so the median is $7$. Requiring the mean to be $2 \\times 7 = 14$ gives\n$$\\frac{50 + N}{6} = 14 \\implies 50 + N = 84 \\implies N = 34,$$\nwhich indeed satisfies $N \\ge 7$.\n\nThus $N = 34$.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Kei draws a $6$-by-$6$ grid. He colors $13$ of the unit squares silver and the remaining squares gold. Kei then folds the grid in half vertically, forming pairs of overlapping unit squares. Let $m$ and $M$ equal the least and greatest possible number of gold-on-gold pairs, respectively. What is the value of $m + M?$\n\nA. $12$\nB. $14$\nC. $16$\nD. $18$\nE. $20$',
          answer: 'C. $16$',
          principle: 'Apply the Pigeonhole Principle to find the minimum overlap and integer division by $2$ to find the maximum pairing.',
          solution:
            'The $6 \\times 6$ grid has $36$ unit squares, of which $13$ are silver and $36 - 13 = 23$ are gold. Folding vertically pairs the $36$ squares into $\\frac{36}{2} = 18$ overlapping pairs.\n\n- **Minimum $m$:** To avoid gold-on-gold pairs, put at most $1$ gold square in each of the $18$ pairs. By the Pigeonhole Principle, the remaining $23 - 18 = 5$ gold squares must double up with existing gold squares, so $m \\ge 5$. Placing the $13$ silver squares in $13$ distinct pairs leaves $5$ gold-on-gold pairs, so $m = 5$.\n- **Maximum $M$:** Each gold-on-gold pair uses $2$ gold squares, so $M \\le \\lfloor 23 / 2 \\rfloor = 11$. Pairing $22$ gold squares into $11$ pairs leaves $1$ gold square paired with $1$ silver square and $6$ silver-on-silver pairs, so $M = 11$.\n\nTherefore, $m + M = 5 + 11 = 16$.',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Five distinct integers from $1$ to $10$ are chosen, and five distinct integers from $11$ to $20$ are chosen. No two numbers differ by exactly $10.$ What is the sum of the ten chosen numbers?\n\nA. $95$\nB. $100$\nC. $105$\nD. $110$\nE. $115$',
          answer: 'C. $105$',
          principle: 'Pair each number $k \\in \\{1, \\dots, 10\\}$ with $k + 10 \\in \\{11, \\dots, 20\\}$ to form a bijection between unchosen lower numbers and chosen upper numbers.',
          solution:
            'Partition $\\{1, 2, \\dots, 20\\}$ into the $10$ pairs $(k, k + 10)$ for $k = 1, 2, \\dots, 10$. Let $A$ be the set of $5$ chosen integers from $\\{1, \\dots, 10\\}$ and $B$ be the set of $5$ chosen integers from $\\{11, \\dots, 20\\}$.\n\nBecause no two chosen integers differ by $10$, none of the $5$ numbers $a + 10$ (for $a \\in A$) can be in $B$. This leaves only $10 - 5 = 5$ available integers in $\\{11, \\dots, 20\\}$, namely\n$$B = \\{k + 10 : k \\in \\{1, 2, \\dots, 10\\} \\setminus A\\}.$$\nConsequently, every $k \\in \\{1, 2, \\dots, 10\\}$ contributes either $k$ (if $k \\in A$) or $k + 10$ (if $k \\notin A$) to the total sum. Hence\n$$\\sum_{a \\in A} a + \\sum_{b \\in B} b = 5 \\times 10 + \\sum_{k=1}^{10} k = 50 + \\frac{10 \\times 11}{2} = 50 + 55 = 105.$$',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'A circle has a radius of $1$ unit, and the region between the circle and its inscribed square is shaded. In a second circle of radius $R$ units, one quarter of the region between the circle and its inscribed square is shaded. The shaded regions in the two circles have the same area. What is the radius $R,$ in units, of the second circle?\n\nA. $\\sqrt{2}$\nB. $2$\nC. $2\\sqrt{2}$\nD. $4$\nE. $4\\sqrt{2}$',
          answer: 'B. $2$',
          principle: 'Similar figures scale in area as the square of their linear scale factor (here, the ratio of radii).',
          solution:
            'Any circle and its inscribed square are similar across all radii. In a circle of radius $r$, the inscribed square has diagonal $2r$, side length $r\\sqrt{2}$, and area $(r\\sqrt{2})^2 = 2r^2$, so the region between the circle and the inscribed square has area $(\\pi - 2)r^2$.\n\nEquating the shaded area in the circle of radius $1$ to one quarter of the corresponding region in the circle of radius $R$ gives\n$$(\\pi - 2) \\cdot 1^2 = \\frac{1}{4}(\\pi - 2) R^2.$$\nDividing both sides by $\\pi - 2 > 0$ yields $R^2 = 4$, so $R = 2$.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Two towns, $A$ and $B,$ are connected by a straight road, $15$ miles long. Traveling from town $A$ to town $B,$ the speed limit changes every $5$ miles: from $25$ to $40$ to $20$ miles per hour (mph). Two cars, one at town $A$ and one at town $B,$ start moving toward each other at the same time. They drive at exactly the speed limit in each portion of the road. How far from town $A,$ in miles, will the two cars meet? Give your answer as a decimal.\n\nA. $7.75$\nB. $8$\nC. $8.25$\nD. $8.5$\nE. $8.75$',
          answer: 'D. $8.5$',
          principle: 'Compute the entry time of each car into the middle segment, then use relative speed to locate the meeting point.',
          solution:
            'Divide the $15$-mile road from $A$ to $B$ into three $5$-mile segments: $[0, 5]$ at $25$ mph, $[5, 10]$ at $40$ mph, and $[10, 15]$ at $20$ mph.\n\n- The car starting at $A$ reaches mile $5$ (entering the middle segment) after\n$$t_A = \\frac{5}{25} = \\frac{1}{5}\\text{ hour}.$$\n- The car starting at $B$ reaches mile $10$ (entering the middle segment from the right) after\n$$t_B = \\frac{5}{20} = \\frac{1}{4}\\text{ hour}.$$\n\nBetween $t_A = \\frac{1}{5}$ and $t_B = \\frac{1}{4}$, the car from $A$ drives in the middle segment at $40$ mph for $\\frac{1}{4} - \\frac{1}{5} = \\frac{1}{20}$ hour, covering\n$$40 \\times \\frac{1}{20} = 2\\text{ miles}.$$\nAt $t = \\frac{1}{4}$ hour, the car from $A$ is at mile $5 + 2 = 7$, while the car from $B$ is at mile $10$. The remaining $10 - 7 = 3$ miles are traversed by both cars at the same speed of $40$ mph, so each covers half of that distance ($1.5$ miles) before meeting. Thus they meet\n$$7 + 1.5 = 8.5\\text{ miles}$$\nfrom town $A$.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Sarika, Dev, and Rajiv are sharing a large block of cheese. They take turns cutting off half of what remains and eating it: first Sarika eats half of the cheese, then Dev eats half of the remaining half, then Rajiv eats half of what remains, then back to Sarika, and so on. They stop when the cheese is too small to see. About what fraction of the original block of cheese does Sarika eat in total?\n\nA. $\\dfrac{4}{7}$\nB. $\\dfrac{3}{5}$\nC. $\\dfrac{2}{3}$\nD. $\\dfrac{3}{4}$\nE. $\\dfrac{7}{8}$',
          answer: 'A. $\\dfrac{4}{7}$',
          principle: 'Sum an infinite geometric series $\\sum_{k=0}^{\\infty} ar^k = \\frac{a}{1 - r}$ for $|r| < 1$.',
          solution:
            'After each person\'s turn, $\\frac{1}{2}$ of the current cheese remains. Thus, in the first three turns, Sarika eats $\\frac{1}{2}$, Dev eats $\\frac{1}{4}$, and Rajiv eats $\\frac{1}{8}$, leaving $\\frac{1}{8}$ of the original block for the next round.\n\nIn every subsequent $3$-turn cycle, the amounts eaten are scaled by $\\frac{1}{8}$. Therefore, Sarika\'s total share is the infinite geometric series with first term $a = \\frac{1}{2}$ and common ratio $r = \\frac{1}{8}$:\n$$S = \\frac{1}{2} + \\frac{1}{2^4} + \\frac{1}{2^7} + \\cdots = \\frac{\\frac{1}{2}}{1 - \\frac{1}{8}} = \\frac{\\frac{1}{2}}{\\frac{7}{8}} = \\frac{4}{7}.$$',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'A classroom has a row of $35$ coat hooks. Paulina likes coats to be equally spaced, so that there is the same number of empty hooks before the first coat, after the last coat, and between every coat and the next one. Suppose there is at least $1$ coat and at least $1$ empty hook. How many different numbers of coats can satisfy Paulina\'s pattern?\n\nA. $2$\nB. $4$\nC. $5$\nD. $7$\nE. $9$',
          answer: 'D. $7$',
          principle: 'Translate the equal-spacing constraint into a Diophantine equation and factor it via Simon\'s Favorite Factoring Trick: $(c + 1)(e + 1) = 36$.',
          solution:
            'Let $c \\ge 1$ be the number of coats and let $e \\ge 1$ be the number of empty hooks in each of the $c + 1$ gaps (before the first coat, between consecutive coats, and after the last coat). Since each coat occupies $1$ hook and the total number of hooks is $35$, we have\n$$c + (c + 1)e = 35.$$\nAdding $1$ to both sides lets us factor the left-hand side:\n$$(c + 1) + (c + 1)e = 36 \\implies (c + 1)(e + 1) = 36.$$\nBecause $c \\ge 1$ and $e \\ge 1$, both factors satisfy $c + 1 \\ge 2$ and $e + 1 \\ge 2$. Since $36 = 2^2 \\times 3^2$, the total number of positive divisors of $36$ is $(2 + 1)(2 + 1) = 9$. Excluding the two invalid divisors $c + 1 = 1$ (giving $c = 0$) and $c + 1 = 36$ (giving $e = 0$), there are\n$$9 - 2 = 7$$\nvalid values for $c + 1$ (namely $2, 3, 4, 6, 9, 12, 18$), corresponding to $7$ possible numbers of coats ($c \\in \\{1, 2, 3, 5, 8, 11, 17\\}$).',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'How many four-digit numbers have all three of the following properties?\n(I) The tens digit and ones digit are both $9.$\n(II) The number is $1$ less than a perfect square.\n(III) The number is the product of exactly two prime numbers.\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $4$',
          answer: 'B. $1$',
          principle: 'Factor $a^2 - 1 = (a - 1)(a + 1)$ and use modulo $100$ congruence to restrict $a$ to multiples of $10$.',
          solution:
            'Let the four-digit number be $N = a^2 - 1$ for a positive integer $a$. By property (I), $N \\equiv 99 \\pmod{100}$, so\n$$a^2 = N + 1 \\equiv 0 \\pmod{100} \\implies 10 \\mid a.$$\nSince $N$ is a four-digit number, $1000 \\le a^2 - 1 \\le 9999$, which implies $32 \\le a \\le 100$. Together with $10 \\mid a$, the only candidates are\n$$a \\in \\{40, 50, 60, 70, 80, 90, 100\\}.$$\nUsing $N = a^2 - 1 = (a - 1)(a + 1)$, both factors $a - 1 > 1$ and $a + 1 > 1$ are divisors of $N$, so property (III) holds if and only if both $a - 1$ and $a + 1$ are prime:\n- $a = 40$: $39 = 3 \\times 13$ (composite).\n- $a = 50$: $49 = 7^2$ (composite).\n- $a = 60$: $59$ and $61$ are both prime, giving $N = 3599 = 59 \\times 61$.\n- $a = 70$: $69 = 3 \\times 23$ (composite).\n- $a = 80$: $81 = 3^4$ (composite).\n- $a = 90$: $91 = 7 \\times 13$ (composite).\n- $a = 100$: $99 = 3^2 \\times 11$ (composite).\n\nThus, there is exactly $1$ such four-digit number ($3599$).',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'In trapezoid $ABCD,$ angles $B$ and $C$ measure $60^\\circ$ and $AB = DC.$ The side lengths are all positive integers and the perimeter of $ABCD$ is $30$ units. How many non-congruent trapezoids satisfy all of these conditions?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $4$',
          answer: 'E. $4$',
          principle: 'Dissect the isosceles trapezoid into a parallelogram and an equilateral triangle to turn the perimeter condition into a linear Diophantine equation.',
          solution:
            'Since $\\angle B + \\angle C = 60^\\circ + 60^\\circ = 120^\\circ \\ne 180^\\circ$, sides $\\overline{AB}$ and $\\overline{DC}$ cannot be parallel; hence $\\overline{AD} \\parallel \\overline{BC}$.\n\nDraw the line through $A$ parallel to $\\overline{DC}$ meeting $\\overline{BC}$ at $E$. Then $ADCE$ is a parallelogram, so $EC = AD = y$ and $AE = DC = AB = x$. Moreover, $\\angle AEB = \\angle DCB = 60^\\circ$ and $\\angle B = 60^\\circ$, making $\\triangle ABE$ equilateral with $BE = x$.\n\nThe side lengths of trapezoid $ABCD$ are therefore $AB = x$, $BC = x + y$, $CD = x$, and $DA = y$, giving perimeter\n$$3x + 2y = 30.$$\nSince $x$ and $y$ are positive integers and $2y = 30 - 3x$ is even, $x$ must be an even positive integer satisfying $3x < 30$, i.e., $x < 10$. This gives four solutions:\n$$(x, y) \\in \\{(2, 12), (4, 9), (6, 6), (8, 3)\\}.$$\nEach yields a valid, non-congruent isosceles trapezoid (uniquely determined by base $y$, leg $x$, and base angles $60^\\circ$), so there are $4$ such trapezoids.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Makayla finds all the possible ways to draw a path in a $5 \\times 5$ diamond-shaped grid. Each path starts at the bottom of the grid and ends at the top, always moving one unit northeast or northwest. She computes the area of the region between each path and the right side of the grid. What is the sum of the areas determined by all possible paths?\n\nA. $2520$\nB. $3150$\nC. $3840$\nD. $4730$\nE. $5050$',
          answer: 'B. $3150$',
          principle: 'Pair each path with its vertical reflection to exploit symmetry: $\\text{Area}_{\\text{left}}(P) + \\text{Area}_{\\text{right}}(P) = 25$.',
          solution:
            'A $5 \\times 5$ grid of unit squares rotated $45^\\circ$ has total area $5 \\times 5 = 25$. Any path $P$ from the bottom vertex to the top vertex must take exactly $5$ unit steps northeast ($R$) and $5$ unit steps northwest ($L$), so the total number of valid paths is\n$$\\binom{10}{5} = \\frac{10 \\times 9 \\times 8 \\times 7 \\times 6}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 252.$$\nLet $A_R(P)$ denote the area between path $P$ and the right boundary of the grid, and let $A_L(P)$ denote the area between $P$ and the left boundary. For every path $P$, these two regions partition the $5 \\times 5$ grid, so\n$$A_L(P) + A_R(P) = 25.$$\nReflecting each path across the vertical line connecting the bottom and top vertices swaps $L$ and $R$ steps, giving a bijection on the set of all $252$ paths that swaps $A_L(P)$ and $A_R(P)$. Therefore,\n$$S = \\sum_{P} A_R(P) = \\sum_{P} A_L(P).$$\nAdding the two sums together gives\n$$2S = \\sum_{P} \\bigl(A_L(P) + A_R(P)\\bigr) = 252 \\times 25,$$\nso the required sum of areas is\n$$S = \\frac{252 \\times 25}{2} = 126 \\times 25 = 3150.$$',
          rubric: OK
        }
      ]
    }
  ]
};
