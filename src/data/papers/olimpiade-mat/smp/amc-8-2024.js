/**
 * Paket Soal Terstruktur: AMC 8 — 2024 (22 of 25 multiple-choice questions included)
 * Source: scraped_raw/amc-8-2024.md (original 25-question contest).
 * Editing note: Original question numbering is preserved (1, 2, 4, 5, 7-13, 15-25).
 * Questions 3, 6, and 14 are omitted because they depend on missing diagrams not completely described in text.
 */
const OK = [{ code: 'A1', text: 'Correct answer supported by the derivation.' }];

export default {
  id: 'amc-8-2024',
  slug: 'amc-8-2024',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'AMC 8 (2024)',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab2-bilangan-rasional',
    'smp7-bab3-rasio',
    'smp7-bab4-bentuk-aljabar',
    'smp8-bab2-teorema-pythagoras',
    'smp8-bab3-persamaan-pertidaksamaan-linear',
    'smp8-bab5-persamaan-garis-lurus',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMC 8',
  title: 'AMC 8 — 2024',
  totalMarks: 22,
  instructions:
    'The original AMC 8 (2024) paper consists of 25 multiple-choice questions (1 point each). This set includes 22 self-contained questions using their original numbering (Questions 1, 2, 4, 5, 7-13, and 15-25) and skips 3 questions (Questions 3, 6, and 14) that depend on missing diagrams not completely described in text. No calculators are allowed.',
  source: {
    org: 'MAA (Mathematical Association of America) — AMC 8',
    file: 'scraped_raw/amc-8-2024.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple Choice Questions',
      marks: 22,
      stem: 'Choose the best answer for each question (22 included questions from the 25-question contest; 1 point each).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'What is the ones digit of\n$$222,222 - 22,222 - 2,222 - 222 - 22 - 2?$$\n\nA. $0$\nB. $2$\nC. $4$\nD. $6$\nE. $8$',
          answer: 'B. $2$',
          principle: 'The ones digit of an integer equals its remainder modulo $10$, which depends only on the ones digits of the terms.',
          solution:
            'Only the ones digits affect the result modulo $10$. Reducing each term modulo $10$ gives:\n$$2 - 2 - 2 - 2 - 2 - 2 = -8 \\equiv 2 \\pmod{10}.$$\n(As a direct check, $222,222 - 22,222 = 200,000$ and $200,000 - 2,468 = 197,532$, whose ones digit is $2$.)\nThus, the ones digit is $2$.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'What is the value of this expression in decimal form?\n$$\\frac{44}{11} + \\frac{110}{44} + \\frac{44}{1100}$$\n\nA. $6.4$\nB. $6.504$\nC. $6.54$\nD. $6.9$\nE. $6.94$',
          answer: 'C. $6.54$',
          principle: 'Cancel common factors in each fraction before converting to terminating decimals.',
          solution:
            'Factor out $11$ from the numerator and denominator of each fraction:\n- $\\dfrac{44}{11} = 4$\n- $\\dfrac{110}{44} = \\dfrac{10}{4} = \\dfrac{5}{2} = 2.5$\n- $\\dfrac{44}{1100} = \\dfrac{4}{100} = 0.04$\n\nAdding these values together gives:\n$$4 + 2.5 + 0.04 = 6.54.$$',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'When Yunji added all the integers from $1$ to $9,$ she mistakenly left out a number. Her incorrect sum turned out to be a square number. Which number did Yunji leave out?\n\nA. $5$\nB. $6$\nC. $7$\nD. $8$\nE. $9$',
          answer: 'E. $9$',
          principle: 'Compute the complete sum using the triangular number formula, then identify the only perfect square within the possible range.',
          solution:
            'The sum of all integers from $1$ to $9$ is:\n$$1 + 2 + \\cdots + 9 = \\frac{9(9+1)}{2} = 45.$$\nIf Yunji left out a number $k \\in \\{1, 2, \\dots, 9\\}$, her sum was $45 - k$, which lies between $45 - 9 = 36$ and $45 - 1 = 44$.\nThe only perfect square in the interval $[36, 44]$ is $36 = 6^2$. Therefore,\n$$45 - k = 36 \\implies k = 9.$$',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Aaliyah rolls two standard $6$-sided dice. She notices that the product of the two numbers rolled is a multiple of $6.$ Which of the following integers *cannot* be the sum of the two numbers?\n\nA. $5$\nB. $6$\nC. $7$\nD. $8$\nE. $9$',
          answer: 'B. $6$',
          principle: 'A product of two integers is divisible by $6$ if and only if it has both a factor of $2$ and a factor of $3$.',
          solution:
            'We can test whether each candidate sum can be formed by two dice values $a, b \\in \\{1, 2, 3, 4, 5, 6\\}$ with $6 \\mid ab$:\n- $5 = 2 + 3$, with product $2 \\cdot 3 = 6$ (multiple of $6$).\n- $7 = 1 + 6$, with product $1 \\cdot 6 = 6$ (multiple of $6$).\n- $8 = 2 + 6$, with product $2 \\cdot 6 = 12$ (multiple of $6$).\n- $9 = 3 + 6$, with product $3 \\cdot 6 = 18$ (multiple of $6$).\n\nFor a sum of $6$, the only possible ordered rolls $(a, b)$ are $(1, 5), (2, 4), (3, 3), (4, 2),$ and $(5, 1)$, whose products are $5, 8, 9, 8,$ and $5$. None of these is divisible by $6$. Thus $6$ cannot be the sum.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'A $3 \\times 7$ rectangle is covered without overlap by $3$ shapes of tiles: $2 \\times 2,$ $1 \\times 4,$ and $1 \\times 1.$ What is the minimum possible number of $1 \\times 1$ tiles used?\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$\nE. $5$',
          answer: 'E. $5$',
          principle: 'Combine modular arithmetic on total area with a row-by-row parity invariant, then verify the bound with an explicit construction.',
          solution:
            'The $3 \\times 7$ rectangle has $21$ unit cells. Each $2 \\times 2$ tile and each $1 \\times 4$ tile covers $4$ cells, so the number $k$ of $1 \\times 1$ tiles must satisfy:\n$$k \\equiv 21 \\equiv 1 \\pmod{4}.$$\nHence $k \\in \\{1, 5, 9, \\dots\\}$.\n\nNext, examine each of the $3$ rows (each of length $7$):\n- A $1 \\times 4$ tile cannot fit vertically into a $3$-row board, so it must be placed horizontally, covering $4$ cells in one row.\n- A $2 \\times 2$ tile covers $2$ cells in each of two rows.\n\nIn every row, every larger tile covers an even number of cells ($0, 2,$ or $4$). Since each row has $7$ (an odd number) cells, each of the $3$ rows must contain at least one $1 \\times 1$ tile, giving $k \\ge 3$. The smallest integer at least $3$ satisfying $k \\equiv 1 \\pmod{4}$ is $k = 5$.\n\nTo see that $5$ is achievable, cover columns $1$–$6$ of rows $1$–$2$ with three $2 \\times 2$ tiles and columns $1$–$4$ of row $3$ with one horizontal $1 \\times 4$ tile. This leaves exactly $5$ uncovered cells—$(1,7), (2,7), (3,5), (3,6),$ and $(3,7)$—for the five $1 \\times 1$ tiles.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'On Monday Taye has $2$ dollars. Every day, he either gains $3$ dollars or doubles the amount of money he had on the previous day. How many different dollar amounts could Taye have on Thursday, $3$ days later?\n\nA. $3$\nB. $4$\nC. $5$\nD. $6$\nE. $7$',
          answer: 'D. $6$',
          principle: 'Track the set of distinct possible states day by day using a breadth-first listing.',
          solution:
            'Start on Monday with $2$ dollars and apply both operations ($+3$ and $\\times 2$) at each step:\n- **Tuesday (Day 1):** $2 + 3 = 5$ and $2 \\cdot 2 = 4$, giving the set $\\{4, 5\\}$.\n- **Wednesday (Day 2):** From $4$ we get $\\{7, 8\\}$; from $5$ we get $\\{8, 10\\}$. The distinct amounts are $\\{7, 8, 10\\}$.\n- **Thursday (Day 3):**\n  - From $7$: $10, 14$\n  - From $8$: $11, 16$\n  - From $10$: $13, 20$\n\nThe distinct dollar amounts on Thursday are $\\{10, 11, 13, 14, 16, 20\\}$, which is $6$ different amounts.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'All of the marbles in Maria\'s collection are red, green, or blue. Maria has half as many red marbles as green marbles and twice as many blue marbles as green marbles. Which of the following could be the total number of marbles in Maria\'s collection?\n\nA. $24$\nB. $25$\nC. $26$\nD. $27$\nE. $28$',
          answer: 'E. $28$',
          principle: 'Express all quantities in terms of a single integer variable to determine a divisibility condition on the total.',
          solution:
            'Let $r$ be the number of red marbles. Since there are half as many red marbles as green marbles, there are $2r$ green marbles. Since there are twice as many blue marbles as green marbles, there are $2(2r) = 4r$ blue marbles.\n\nThe total number of marbles is:\n$$r + 2r + 4r = 7r.$$\nBecause $r$ is an integer, the total number of marbles must be divisible by $7$. Among the choices $24, 25, 26, 27,$ and $28$, only $28$ is a multiple of $7$ (corresponding to $r = 4, g = 8, b = 16$).',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'In January $1980$ the Mauna Loa Observatory recorded carbon dioxide $\\text{CO}_2$ levels of $338$ ppm (parts per million). Over the years the average $\\text{CO}_2$ reading has increased by about $1.515$ ppm each year. What is the expected $\\text{CO}_2$ level in ppm in January $2030?$ Round your answer to the nearest integer.\n\nA. $399$\nB. $414$\nC. $420$\nD. $444$\nE. $459$',
          answer: 'B. $414$',
          principle: 'Model constant annual growth with a linear expression $\\text{initial value} + (\\text{rate}) \\times (\\text{elapsed years})$.',
          solution:
            'From January $1980$ to January $2030$ there are $2030 - 1980 = 50$ years. At an average increase of $1.515$ ppm per year, the total increase is:\n$$50 \\times 1.515 = 75.75\\text{ ppm}.$$\nAdding this to the $1980$ reading gives:\n$$338 + 75.75 = 413.75\\text{ ppm}.$$\nRounding to the nearest integer yields $414$.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'The coordinates of $\\triangle ABC$ are $A(5, 7),$ $B(11, 7),$ and $C(3, y),$ with $y > 7.$ The area of $\\triangle ABC$ is $12.$ What is the value of $y?$\n\nA. $8$\nB. $9$\nC. $10$\nD. $11$\nE. $12$',
          answer: 'D. $11$',
          principle: 'Use a horizontal segment as the base of the triangle so its length and perpendicular height are found directly from coordinates.',
          solution:
            'Both $A(5, 7)$ and $B(11, 7)$ lie on the horizontal line $y = 7$, so the base $\\overline{AB}$ has length:\n$$AB = 11 - 5 = 6.$$\nSince $y > 7$, the perpendicular height from $C(3, y)$ to the line $y = 7$ is $h = y - 7$. Using the triangle area formula:\n$$\\frac{1}{2} \\cdot 6 \\cdot (y - 7) = 12 \\implies 3(y - 7) = 12 \\implies y - 7 = 4 \\implies y = 11.$$',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Rohan keeps a total of $90$ guppies in $4$ fish tanks.\n- There is $1$ more guppy in the $2$nd tank than in the $1$st tank.\n- There are $2$ more guppies in the $3$rd tank than in the $2$nd tank.\n- There are $3$ more guppies in the $4$th tank than in the $3$rd tank.\n\nHow many guppies are in the $4$th tank?\n\nA. $20$\nB. $21$\nC. $23$\nD. $24$\nE. $26$',
          answer: 'E. $26$',
          principle: 'Represent consecutive differences using one unknown and solve the resulting linear equation.',
          solution:
            'Let $x$ be the number of guppies in the $1$st tank. Then:\n- $2$nd tank: $x + 1$\n- $3$rd tank: $(x + 1) + 2 = x + 3$\n- $4$th tank: $(x + 3) + 3 = x + 6$\n\nSince the total number of guppies is $90$:\n$$x + (x + 1) + (x + 3) + (x + 6) = 90 \\implies 4x + 10 = 90 \\implies 4x = 80 \\implies x = 20.$$\nTherefore, the $4$th tank contains $x + 6 = 20 + 6 = 26$ guppies.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Buzz Bunny is hopping up and down a set of stairs, one step at a time. In how many ways can Buzz start on the ground, make a sequence of $6$ hops, and end up back on the ground? (For example, one sequence of hops is up-up-down-down-up-down.)\n\nA. $4$\nB. $5$\nC. $6$\nD. $8$\nE. $12$',
          answer: 'B. $5$',
          principle: 'Valid paths returning to ground level without going below ground are Dyck paths (counted by the Catalan number $C_3$).',
          solution:
            'Represent an up-hop by $U$ and a down-hop by $D$. To return to the ground after $6$ hops, Buzz must make $3$ $U$\'s and $3$ $D$\'s. Furthermore, Buzz can never go below the ground, so in every prefix of the sequence, the number of $D$\'s cannot exceed the number of $U$\'s.\n\nListing all valid $6$-letter sequences systematically (starting with $U$ and ending with $D$):\n1. $UUUDDD$\n2. $UUDUDD$\n3. $UUDDUD$\n4. $UDUUDD$\n5. $UDUDUD$\n\n(Equivalently, this is the third Catalan number $C_3 = \\frac{1}{3+1}\\binom{6}{3} = \\frac{20}{4} = 5$.) Thus there are $5$ ways.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Let the letters $F,$ $L,$ $Y,$ $B,$ $U,$ $G$ represent distinct digits. Suppose $\\text{FLYFLY}$ is the greatest number that satisfies the equation\n$$8 \\cdot \\text{FLYFLY} = \\text{BUGBUG}.$$\nWhat is the value of $\\text{FLY} + \\text{BUG}?$\n\nA. $1089$\nB. $1098$\nC. $1107$\nD. $1116$\nE. $1125$',
          answer: 'C. $1107$',
          principle: 'Factor out $1001$ using place value ($\\overline{ABCABC} = 1001 \\cdot \\overline{ABC}$), then maximize $\\text{FLY}$ subject to distinct digits.',
          solution:
            'Notice that $\\text{FLYFLY} = 1000 \\cdot \\text{FLY} + \\text{FLY} = 1001 \\cdot \\text{FLY}$, and similarly $\\text{BUGBUG} = 1001 \\cdot \\text{BUG}$. Dividing both sides of the equation by $1001$ yields:\n$$8 \\cdot \\text{FLY} = \\text{BUG}.$$\nSince $\\text{BUG}$ is a $3$-digit number ($\\le 999$), we must have:\n$$\\text{FLY} \\le \\left\\lfloor \\frac{999}{8} \\right\\rfloor = 124.$$\nTesting from the largest candidate downward:\n- If $\\text{FLY} = 124$, then $\\text{BUG} = 8 \\cdot 124 = 992$, which repeats the digit $9$ and reuses $2$.\n- If $\\text{FLY} = 123$, then $\\text{BUG} = 8 \\cdot 123 = 984$. The six digits $1, 2, 3, 9, 8,$ and $4$ are all distinct.\n\nHence the greatest valid $\\text{FLYFLY}$ comes from $\\text{FLY} = 123$ and $\\text{BUG} = 984$, giving:\n$$\\text{FLY} + \\text{BUG} = 123 + 984 = 1107.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Minh enters the numbers $1$ through $81$ into the cells of a $9 \\times 9$ grid in some order. She calculates the product of the numbers in each row and column. What is the least number of rows and columns that could have a product divisible by $3?$\n\nA. $8$\nB. $9$\nC. $10$\nD. $11$\nE. $12$',
          answer: 'D. $11$',
          principle: 'Since $3$ is prime, a product is divisible by $3$ if and only if at least one factor is a multiple of $3$; bound the intersection of marked rows and columns.',
          solution:
            'From $1$ to $81$, there are $\\frac{81}{3} = 27$ multiples of $3$. Because $3$ is prime, a row or column has a product divisible by $3$ if and only if it contains at least one multiple of $3$.\n\nSuppose $r$ rows and $c$ columns have products divisible by $3$. Every multiple of $3$ must lie in one of these $r$ rows and one of these $c$ columns, so all $27$ multiples of $3$ must fit inside the $rc$ cells where they intersect:\n$$rc \\ge 27.$$\nIf $r + c \\le 10$, then by AM-GM (or checking $r + c = 10$):\n$$rc \\le \\left(\\frac{r + c}{2}\\right)^2 \\le 5^2 = 25 < 27,$$\nwhich is impossible. Therefore $r + c \\ge 11$.\n\nTo achieve $r + c = 11$, take $r = 5$ and $c = 6$ ($rc = 30 \\ge 27$). Place $25$ multiples of $3$ in the $5 \\times 5$ block at rows $1$–$5$, columns $1$–$5$, and place the remaining $2$ multiples of $3$ in column $6$ of rows $1$ and $2$. Then exactly $5$ rows and $6$ columns contain a multiple of $3$, for a minimum total of $5 + 6 = 11$.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'A chess king is said to *attack* all the squares one step away from it, horizontally, vertically, or diagonally. For instance, a king on the center square of a $3 \\times 3$ grid attacks all $8$ other squares. Suppose a white king and a black king are placed on different squares of a $3 \\times 3$ grid so that they do not attack each other. In how many ways can this be done?\n\nA. $20$\nB. $24$\nC. $27$\nD. $28$\nE. $32$',
          answer: 'E. $32$',
          principle: 'Partition the $3 \\times 3$ grid by square symmetry (center, corners, edge midpoints) and count valid second placements for each case.',
          solution:
            'Choose the square for the white king first, then count the non-attacked squares remaining for the black king:\n- **Center ($1$ square):** The white king attacks all $8$ other squares, leaving $0$ choices for the black king ($1 \\cdot 0 = 0$ ways).\n- **Corner ($4$ squares):** A corner king attacks $3$ squares, leaving $9 - 1 - 3 = 5$ safe squares for the black king ($4 \\cdot 5 = 20$ ways).\n- **Edge midpoint ($4$ squares):** An edge-midpoint king attacks $5$ squares, leaving $9 - 1 - 5 = 3$ safe squares for the black king ($4 \\cdot 3 = 12$ ways).\n\nSumming the disjoint cases gives $0 + 20 + 12 = 32$ ways.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Three concentric circles centered at $O$ have radii of $1,$ $2,$ and $3.$ Points $B$ and $C$ lie on the largest circle. The region between the two smaller circles is shaded, as is the portion of the region between the two larger circles bounded by central angle $BOC.$ Suppose the shaded and unshaded regions are equal in area. What is the measure of $\\angle BOC$ in degrees?\n\nA. $108$\nB. $120$\nC. $135$\nD. $144$\nE. $150$',
          answer: 'A. $108$',
          principle: 'Subtract the shaded inner annulus area from half the largest circle\'s area to find the fraction of the outer annulus covered by $\\angle BOC$.',
          solution:
            'The largest circle has radius $3$ and total area $\\pi \\cdot 3^2 = 9\\pi$. Since the shaded and unshaded regions have equal area, the total shaded area is $\\frac{9\\pi}{2}$.\n\nThe fully shaded ring between the circles of radii $1$ and $2$ has area:\n$$\\pi(2^2 - 1^2) = 3\\pi.$$\nThus, the shaded sector of the outer ring must have area:\n$$\\frac{9\\pi}{2} - 3\\pi = \\frac{3\\pi}{2}.$$\nThe entire outer ring (between radii $2$ and $3$) has area $\\pi(3^2 - 2^2) = 5\\pi$. Hence the shaded portion is\n$$\\frac{3\\pi / 2}{5\\pi} = \\frac{3}{10}$$\nof the outer ring, so the central angle is:\n$$\\angle BOC = \\frac{3}{10} \\cdot 360^\\circ = 108^\\circ.$$',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Jordan owns $15$ pairs of sneakers. Three fifths of the pairs are red and the rest are white. Two thirds of the pairs are high-top and the rest are low-top. The red high-top sneakers make up a fraction of the collection. What is the least possible value of this fraction? Express your answer as a common fraction.\n\nA. $0$\nB. $\\dfrac{1}{5}$\nC. $\\dfrac{4}{15}$\nD. $\\dfrac{1}{3}$\nE. $\\dfrac{2}{5}$',
          answer: 'C. $\\dfrac{4}{15}$',
          principle: 'Minimize the intersection $|R \\cap H|$ using $|R \\cap H| = |R| + |H| - |R \\cup H| \\ge |R| + |H| - N$.',
          solution:
            'First find the exact counts among the $15$ pairs:\n- Red sneakers: $\\frac{3}{5} \\cdot 15 = 9$ pairs (so $15 - 9 = 6$ pairs are white).\n- High-top sneakers: $\\frac{2}{3} \\cdot 15 = 10$ pairs (so $15 - 10 = 5$ pairs are low-top).\n\nBy inclusion-exclusion, the number of red high-top pairs satisfies:\n$$|\\text{Red} \\cap \\text{High-top}| = |\\text{Red}| + |\\text{High-top}| - |\\text{Red} \\cup \\text{High-top}| \\ge 9 + 10 - 15 = 4.$$\nThis minimum of $4$ is achieved when all $6$ white pairs are high-top, leaving $10 - 6 = 4$ red high-top pairs (and $5$ red low-top pairs).\n\nThus the least possible fraction is $\\dfrac{4}{15}$.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Any three vertices of the cube $PQRSTUVW$ can be connected to form a triangle. (For example, vertices $P,$ $Q,$ and $R$ can be connected to form isosceles $\\triangle PQR.$) How many of these triangles are equilateral and contain $P$ as a vertex?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $6$',
          answer: 'D. $3$',
          principle: 'Classify all vertex-to-vertex segments on a cube by their three possible lengths (edge, face diagonal, space diagonal).',
          solution:
            'Place the cube in coordinates as $[0, s]^3$ with $P = (0, 0, 0)$ (for edge length $s > 0$). The segments from $P$ to the other $7$ vertices have three possible lengths:\n1. **Cube edges (length $s$):** $(s,0,0), (0,s,0), (0,0,s)$ ($3$ vertices).\n2. **Face diagonals (length $s\\sqrt{2}$):** $(s,s,0), (s,0,s), (0,s,s)$ ($3$ vertices).\n3. **Space diagonal (length $s\\sqrt{3}$):** $(s,s,s)$ ($1$ vertex).\n\nFor $\\triangle PXY$ to be equilateral, we need $PX = PY = XY$:\n- Two cube edges from $P$ meet at $90^\\circ$, so their third side has length $s\\sqrt{2} \\ne s$.\n- Only one vertex lies at distance $s\\sqrt{3}$ from $P$, so we cannot choose two.\n- The $3$ vertices at face-diagonal distance $s\\sqrt{2}$ from $P$ are $(s,s,0), (s,0,s),$ and $(0,s,s)$. The distance between any two of them is $\\sqrt{s^2 + s^2} = s\\sqrt{2}$, which is also a face diagonal.\n\nTherefore, choosing any $2$ of these $3$ vertices forms an equilateral triangle with $P$, giving $\\binom{3}{2} = 3$ equilateral triangles.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'A group of frogs (called an *army*) is living in a tree. A frog turns green when in the shade and turns yellow when in the sun. Initially, the ratio of green to yellow frogs was $3 : 1.$ Then $3$ green frogs moved to the sunny side and $5$ yellow frogs moved to the shady side. Now the ratio is $4 : 1.$ What is the difference between the number of green frogs and yellow frogs now?\n\nA. $10$\nB. $12$\nC. $16$\nD. $20$\nE. $24$',
          answer: 'E. $24$',
          principle: 'Track the net change in each color group and set up a linear proportion from the new ratio.',
          solution:
            'Let the initial number of yellow frogs be $y$. Since the initial green-to-yellow ratio is $3 : 1$, there were initially $3y$ green frogs.\n\nAfter $3$ green frogs move to the sun (becoming yellow) and $5$ yellow frogs move to the shade (becoming green):\n- Current green frogs: $3y - 3 + 5 = 3y + 2$\n- Current yellow frogs: $y + 3 - 5 = y - 2$\n\nThe new ratio is $4 : 1$, so:\n$$\\frac{3y + 2}{y - 2} = 4 \\implies 3y + 2 = 4(y - 2) = 4y - 8 \\implies y = 10.$$\nHence there are now $3(10) + 2 = 32$ green frogs and $10 - 2 = 8$ yellow frogs, for a difference of $32 - 8 = 24$.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'A roll of tape is $4$ inches in diameter and is wrapped around a ring that is $2$ inches in diameter. The tape is $0.015$ inches thick. If the tape is completely unrolled, approximately how long would it be? Round your answer to the nearest $100$ inches.\n\nA. $300$\nB. $600$\nC. $1200$\nD. $1500$\nE. $1800$',
          answer: 'B. $600$',
          principle: 'Conservation of cross-sectional area: the area of the circular annulus equals the area of the unrolled rectangular strip.',
          solution:
            'The rolled tape forms an annulus with outer radius $R = \\frac{4}{2} = 2$ inches and inner radius $r = \\frac{2}{2} = 1$ inch. Its cross-sectional area is:\n$$\\pi(R^2 - r^2) = \\pi(2^2 - 1^2) = 3\\pi\\text{ in}^2.$$\nWhen completely unrolled to length $L$ inches, the same cross section is a rectangle of thickness $0.015$ inches and area $0.015 L$. Equating the areas gives:\n$$0.015 L = 3\\pi \\implies L = \\frac{3\\pi}{0.015} = \\frac{3000\\pi}{15} = 200\\pi\\text{ inches}.$$\nSince $3.14 < \\pi < 3.15$, we have $628 < 200\\pi < 630$. Rounded to the nearest $100$ inches, the length is $600$ inches.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Rodrigo has a very large piece of graph paper. First he draws a line segment connecting point $(0, 4)$ to point $(2, 0)$ and colors the $4$ cells whose interiors intersect the segment. Next, Rodrigo draws a line segment connecting point $(2000, 3000)$ to point $(5000, 8000).$ Again he colors the cells whose interiors intersect the segment. How many cells will he color this time?\n\nA. $6000$\nB. $6500$\nC. $7000$\nD. $7500$\nE. $8000$',
          answer: 'C. $7000$',
          principle: 'Decompose the segment at lattice points using $\\gcd(\\Delta x, \\Delta y)$, or apply the grid-crossing formula $\\Delta x + \\Delta y - \\gcd(\\Delta x, \\Delta y)$.',
          solution:
            'The segment moves $\\Delta x = 5000 - 2000 = 3000$ units right and $\\Delta y = 8000 - 3000 = 5000$ units up. Since $\\gcd(3000, 5000) = 1000$, we can divide the segment into $1000$ identical subsegments, each moving $3$ units right and $5$ units up.\n\nBecause $\\gcd(3, 5) = 1$, a subsegment passes through no interior lattice points (grid corners); it only crosses $3 - 1 = 2$ interior vertical grid lines and $5 - 1 = 4$ interior horizontal grid lines at distinct points. Starting in $1$ cell and entering a new cell at each of those $2 + 4 = 6$ grid-line crossings, each subsegment passes through the interiors of:\n$$1 + 2 + 4 = 7\\text{ cells}.$$\nConsecutive subsegments meet only at a grid corner, so their colored cells do not overlap. Thus Rodrigo colors:\n$$1000 \\times 7 = 7000\\text{ cells}.$$',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Jean made a piece of stained glass art in the shape of two mountains. One mountain peak is $8$ feet high and the other peak is $12$ feet high. Each peak forms a $90^\\circ$ angle, and the straight sides of the mountains form $45^\\circ$ angles with the ground. The artwork has an area of $183$ square feet. The sides of the mountains meet at an intersection point near the center of the artwork, $h$ feet above the ground. What is the value of $h?$\n\nA. $4$\nB. $5$\nC. $4\\sqrt{2}$\nD. $6$\nE. $5\\sqrt{2}$',
          answer: 'B. $5$',
          principle: 'A $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle of altitude $x$ has base $2x$ and area $x^2$; apply inclusion-exclusion to the overlapping union.',
          solution:
            'In any $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle resting on its hypotenuse with height $x$, the altitude splits the triangle into two congruent $45^\\circ$-$45^\\circ$-$90^\\circ$ triangles of legs $x$, so the base is $2x$ and the area is $\\frac{1}{2}(2x)(x) = x^2$.\n\nThus the two mountains have areas $8^2 = 64$ and $12^2 = 144$ square feet. Because their overlapping sides also meet the ground at $45^\\circ$ angles and intersect at height $h$, the overlapping region is itself a $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle of height $h$ and area $h^2$.\n\nBy inclusion-exclusion, the total area of the artwork is:\n$$64 + 144 - h^2 = 183 \\implies 208 - h^2 = 183 \\implies h^2 = 25 \\implies h = 5.$$',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'A small airplane has $4$ rows of seats with $3$ seats in each row. Eight passengers have boarded the plane and are distributed randomly among the seats, with every set of eight occupied seats equally likely. A married couple is next to board. What is the probability there will be $2$ adjacent seats in the same row for the couple? Express your answer as a common fraction.\n\nA. $\\dfrac{8}{15}$\nB. $\\dfrac{32}{55}$\nC. $\\dfrac{20}{33}$\nD. $\\dfrac{34}{55}$\nE. $\\dfrac{8}{11}$',
          answer: 'C. $\\dfrac{20}{33}$',
          principle: 'Use complementary counting on the $4$ empty seats and count valid distributions across rows by casework (or generating functions).',
          solution:
            'After $8$ passengers sit, there are $12 - 8 = 4$ empty seats among the $12$ seats, giving\n$$\\binom{12}{4} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = 495$$\nequally likely sets of $4$ empty seats.\n\nCount the complement: no row contains $2$ adjacent empty seats. In a single $3$-seat row, the subsets of empty seats with no two adjacent are:\n- $0$ empty seats: $1$ way\n- $1$ empty seat: $3$ ways (any of the $3$ seats)\n- $2$ empty seats: $1$ way (only the two outer seats)\n\nDistribute $4$ empty seats across the $4$ rows with at most $2$ per row (equivalently, find the coefficient of $x^4$ in $(1 + 3x + x^2)^4$):\n- **Counts $(2, 2, 0, 0)$:** $\\binom{4}{2} = 6$ ways to choose the rows, each with $1^2 \\cdot 1^2 = 1$ seat configuration $\\implies 6$.\n- **Counts $(2, 1, 1, 0)$:** $4 \\cdot \\binom{3}{2} = 12$ ways to choose the rows, each with $1 \\cdot 3^2 \\cdot 1 = 9$ seat configurations $\\implies 108$.\n- **Counts $(1, 1, 1, 1)$:** $1$ way to choose the rows, with $3^4 = 81$ seat configurations $\\implies 81$.\n\nThis gives $6 + 108 + 81 = 195$ complementary arrangements. Therefore, the probability that at least one row has $2$ adjacent empty seats is:\n$$\\frac{495 - 195}{495} = \\frac{300}{495} = \\frac{20}{33}.$$',
          rubric: OK
        }
      ]
    }
  ]
};
