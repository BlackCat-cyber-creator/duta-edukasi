/**
 * Paket Soal: SASMO 2022 Primary 4 (Grade 4)
 * Sumber: Singapore and Asian Schools Math Olympiad 2022, Primary 4 Contest (sasmo_2022_p4.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 2, 4, 5, 7, 9, 12, 16, 17, 18, dan 23 dilengkapi diagram (SVG vektor atau crop ilustrasi .webp).
 */
export default {
  id: 'sasmo-2022-p4',
  slug: 'sasmo-2022-primary-4',
  subject: 'olimpiade-mat',
  grade: 4,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'SASMO 2022 Primary 4: arithmetic, fractions, sequences, divisibility, 3D cubes, combinatorics, logic, and geometry',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd4-bab2-pecahan',
    'sd4-bab3-pola-gambar-bilangan',
    'sd4-bab4-luas-volume',
    'sd4-bab5-bangun-datar',
    'sd4-bab6-piktogram-diagram-batang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2022 Primary 4',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Diagrams for Questions 2, 4, 5, 7, 9, 12, 16, 17, 18, and 23 are provided as figures.',
  source: {
    org: 'SASMO',
    file: 'sasmo_2022_p4.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section A: Multiple Choice',
      marks: 30,
      stem: 'Choose the one correct answer for each question (15 questions, 2 marks each).',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            'What is the value of the following sum?\n$$299 + 297 + 295 + 296 + 298$$\n\nA. $1494$\nB. $1490$\nC. $1485$\nD. $1484$\nE. None of the above',
          answer: 'C. $1485$',
          principle:
            'Round each term close to $300$ and subtract the small offsets, or notice the five numbers are consecutive integers whose sum is $5 \\times \\text{middle term}$.',
          solution:
            'Rewrite each number relative to $300$:\n$$299 + 297 + 295 + 296 + 298 = (300 - 1) + (300 - 3) + (300 - 5) + (300 - 4) + (300 - 2)$$\n$$= 1500 - (1 + 3 + 5 + 4 + 2) = 1500 - 15 = 1485.$$\n(Alternatively, rearranging gives $295 + 296 + 297 + 298 + 299 = 5 \\times 297 = 1485$.)',
          rubric: [
            { code: 'M1', text: 'Rewrites the sum around $300$ (or pairs/orders the five consecutive integers around $297$).' },
            { code: 'A1', text: 'Computes $1485$, option C.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'The rectangle below is divided into $6$ equal squares and shaded as shown. What fraction of the rectangle is shaded?\n\nA. $\\frac{7}{12}$\nB. $\\frac{1}{2}$\nC. $\\frac{5}{11}$\nD. $\\frac{5}{12}$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2022-p4/fig-2.svg',
              alt: 'A 1 by 6 rectangle divided into 6 equal squares where five of the squares have one half shaded as a right triangle and the third square is blank.',
              caption: 'Shaded 6-square rectangle for Question 2.'
            }
          ],
          answer: 'D. $\\frac{5}{12}$',
          principle:
            'Each diagonal cuts one equal square into two equal triangles, so every square equals $2$ triangle units.',
          solution:
            'Let the area of $1$ right triangle (half of a square) be $1$ unit. Each of the $6$ equal squares has area $2$ units, so the whole rectangle has area:\n$$6 \\times 2 = 12\\text{ units}.$$\nCounting the shaded triangles across the $6$ squares (squares 1, 2, 4, 5, and 6 each have $1$ shaded triangle, while square 3 is blank) gives $5$ units.\nTherefore, the shaded fraction is $\\frac{5}{12}$.',
          rubric: [
            { code: 'M1', text: 'Expresses the rectangle as $12$ equal half-square triangles and counts $5$ shaded triangles.' },
            { code: 'A1', text: 'Fraction $\\frac{5}{12}$, option D.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'Find the next number in the sequence below.\n$$1, 4, 10, 22, 46, 94, \\ldots$$\n\nA. $190$\nB. $188$\nC. $186$\nD. $142$\nE. None of the above',
          answer: 'A. $190$',
          principle:
            'Compute the differences between consecutive terms to identify a doubling pattern.',
          solution:
            'Find the differences between consecutive terms:\n$$4 - 1 = 3, \\quad 10 - 4 = 6, \\quad 22 - 10 = 12, \\quad 46 - 22 = 24, \\quad 94 - 46 = 48.$$\nThe differences start at $3$ and double each step. The next difference is $48 \\times 2 = 96$, so the next term is:\n$$94 + 96 = 190.$$\n(Equivalently, each term satisfies $a_{n+1} = 2a_n + 2$, giving $2 \\times 94 + 2 = 190$.)',
          rubric: [
            { code: 'M1', text: 'Finds the doubling differences $3, 6, 12, 24, 48$ (or the rule $2a_n + 2$).' },
            { code: 'A1', text: 'Next number $190$, option A.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            "Which one of the following options is a missing piece of the dog's kennel?\n\nA. Option A (see figure)\nB. Option B (see figure)\nC. Option C (see figure)\nD. Option D (see figure)\nE. Option E (see figure)",
          figures: [
            {
              src: '/papers/sasmo-2022-p4/fig-4.webp',
              alt: '3D illustration of a wooden dog kennel missing its right side wall and five isometric wooden block options labeled A through E.',
              caption: 'Dog kennel 3D puzzle and options A–E for Question 4.'
            }
          ],
          answer: 'B. Option B',
          principle:
            'Match the 3D interlocking side-wall geometry of the kennel: check the lower base notch, the upper wall alignment, and the recessed step near the roof.',
          solution:
            'Inspect the missing right-side wall of the dog kennel:\n- The lower plank extends flush along the bottom edge and steps upward at the back corner to interlock with the rear wall.\n- Above the lower plank sits an inset inner horizontal beam aligned with the inner edge of the front pillar, rather than overhanging to the outside.\n- Checking options A through E against these front and rear interlocking notches shows that only **Option B** fits cleanly into the opening without overhang or gap.',
          rubric: [
            { code: 'M1', text: 'Identifies the interlocking step and inner-aligned upper beam required to close the right wall.' },
            { code: 'A1', text: 'Selects option B.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'In the square below, points $E$ and $F$ are the midpoints of $AB$ and $AD$, respectively. If the length of the square is $12\\text{ cm}$, find the area (in $\\text{cm}^2$) of the shaded region.\n\nA. $72\\text{ cm}^2$\nB. $54\\text{ cm}^2$\nC. $36\\text{ cm}^2$\nD. $18\\text{ cm}^2$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2022-p4/fig-5.svg',
              alt: 'Square ABCD with midpoints E on top side AB and F on left side AD, with quadrilateral EBDF shaded.',
              caption: 'Square ABCD with shaded region EBDF for Question 5.'
            }
          ],
          answer: 'B. $54\\text{ cm}^2$',
          principle:
            'Subtract the areas of the unshaded right triangles from the area of the whole square, or divide the square into $8$ congruent triangles.',
          solution:
            'The area of square $ABCD$ is:\n$$12 \\times 12 = 144\\text{ cm}^2.$$\nSince $E$ and $F$ are the midpoints of $AB$ and $AD$, $AE = AF = 6\\text{ cm}$.\nThe unshaded region consists of $\\triangle AEF$ and $\\triangle BCD$:\n$$\\text{Area}(\\triangle AEF) = \\frac{1}{2} \\times 6 \\times 6 = 18\\text{ cm}^2, \\qquad \\text{Area}(\\triangle BCD) = \\frac{1}{2} \\times 12 \\times 12 = 72\\text{ cm}^2.$$\nHence the shaded area is:\n$$144 - 18 - 72 = 54\\text{ cm}^2.$$\n(Equivalently, dividing the square into $8$ identical triangles of area $144 \\div 8 = 18\\text{ cm}^2$ shows the shaded region covers $3$ triangles, or $3 \\times 18 = 54\\text{ cm}^2$.)',
          rubric: [
            { code: 'M1', text: 'Finds square area $144\\text{ cm}^2$ and subtracts $\\triangle AEF$ ($18$) and $\\triangle BCD$ ($72$), or counts $3$ of $8$ equal triangles.' },
            { code: 'A1', text: 'Area $54\\text{ cm}^2$, option B.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'A number is formed by writing $2022$ consecutively for $3$ times. Which of the following statements is correct?\n\nA. The number is a multiple of $3$, $6$ and $9$.\nB. The number is a multiple of $3$ and $6$ but not a multiple of $9$.\nC. The number is a multiple of $3$ and $9$ but not a multiple of $6$.\nD. The number is a multiple of $3$ but not a multiple of $6$.\nE. None of the above',
          answer: 'A. The number is a multiple of $3$, $6$ and $9$.',
          principle:
            'Use the digit-sum divisibility rules for $3$ and $9$, and check parity (last digit) for divisibility by $6 = 2 \\times 3$.',
          solution:
            'The $12$-digit number is $202220222022$.\nEach copy of $2022$ has digit sum $2 + 0 + 2 + 2 = 6$, so the sum of all digits is:\n$$3 \\times 6 = 18.$$\nSince $18$ is divisible by both $3$ and $9$, the number is a multiple of $3$ and $9$.\nFurthermore, its last digit is $2$ (even), so it is divisible by $2$ as well as $3$, making it a multiple of $6$.\nTherefore, the number is a multiple of $3$, $6$, and $9$.',
          rubric: [
            { code: 'M1', text: 'Computes the digit sum $18$ (divisible by $3$ and $9$) and checks the even last digit $2$ (divisible by $2$, hence $6$).' },
            { code: 'A1', text: 'Selects option A.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'Angela built a pyramid using identical cubes. The pyramid is shown below from different angles. Angela paints the whole pyramid in orange colour. How many cubes have exactly $3$ sides painted in orange?\n\nA. $4$\nB. $8$\nC. $16$\nD. $35$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2022-p4/fig-7.svg',
              alt: 'Two isometric 3D views of a 3-layer centered pyramid made of 5 by 5, 3 by 3, and 1 by 1 unit cubes, showing both the top stepped layers and the 5 by 5 underside.',
              caption: 'Top and underside views of the 3-layer cube pyramid for Question 7.'
            }
          ],
          answer: 'C. $16$',
          principle:
            'Inspect each layer separately and count exposed faces on every cube, remembering that painting the whole pyramid includes its underside.',
          solution:
            'The pyramid has three centered square layers: a $5 \\times 5$ bottom layer, a $3 \\times 3$ middle layer, and a $1 \\times 1$ top cube. Painting the whole pyramid paints every exposed outer face, including the bottom face of the $5 \\times 5$ base.\n- **Top layer ($1 \\times 1$):** The single top cube has $5$ painted faces (top and $4$ sides).\n- **Middle layer ($3 \\times 3$):** The $4$ corner cubes each have $3$ painted faces (top and $2$ outer sides). The $4$ edge-middle cubes have $2$ painted faces, and the center cube has $0$.\n- **Bottom layer ($5 \\times 5$):** Each outer-ring cube has its bottom face painted as well. The $4$ corner cubes have $4$ painted faces (top, $2$ outer sides, bottom), whereas the $3$ non-corner border cubes on each of the $4$ sides have $3$ painted faces (top, $1$ outer side, bottom). That gives $3 \\times 4 = 12$ cubes. (The inner $3 \\times 3$ cubes only have $1$ painted face on the bottom.)\n\nTotal cubes with exactly $3$ sides painted:\n$$4 + 12 = 16.$$',
          rubric: [
            { code: 'M1', text: 'Identifies $4$ corner cubes in the middle $3 \\times 3$ layer and $12$ non-corner border cubes in the bottom $5 \\times 5$ layer (including painted underside).' },
            { code: 'A1', text: 'Total $16$ cubes, option C.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'How many two-digit numbers are divisible by $3$ but not by $6$?\n\nA. $14$\nB. $15$\nC. $17$\nD. $30$\nE. None of the above',
          answer: 'B. $15$',
          principle:
            'Subtract the count of two-digit multiples of $6$ from the count of two-digit multiples of $3$ (equivalently, count odd two-digit multiples of $3$).',
          solution:
            'From $1$ to $99$, there are $99 \\div 3 = 33$ multiples of $3$. Three of them ($3, 6, 9$) are one-digit numbers, so there are:\n$$33 - 3 = 30$$\ntwo-digit multiples of $3$.\nFrom $1$ to $99$, the largest multiple of $6$ is $96$, so there are $96 \\div 6 = 16$ multiples of $6$. One of them ($6$) is a one-digit number, leaving:\n$$16 - 1 = 15$$\ntwo-digit multiples of $6$.\nTherefore, the number of two-digit numbers divisible by $3$ but not by $6$ is:\n$$30 - 15 = 15.$$',
          rubric: [
            { code: 'M1', text: 'Counts $30$ two-digit multiples of $3$ and $15$ two-digit multiples of $6$.' },
            { code: 'A1', text: 'Difference $15$, option B.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'An ant is at one vertex of a cube and can only walk along the edges of the cube. It cannot walk along any edge more than once. If the length of the cube is $8\\text{ cm}$, what is the greatest distance (in $\\text{cm}$) that the ant can walk before it cannot continue?\n\nA. $72\\text{ cm}$\nB. $64\\text{ cm}$\nC. $96\\text{ cm}$\nD. $9\\text{ cm}$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2022-p4/fig-9.svg',
              alt: 'Wireframe cube with dashed hidden edges and an ant marked at the front bottom-left vertex.',
              caption: 'Cube with ant starting at one vertex for Question 9.'
            }
          ],
          answer: 'A. $72\\text{ cm}$',
          principle:
            'Every vertex of a cube has degree $3$ (odd), so at most two vertices in a single non-repeating path can use all $3$ of their edges.',
          solution:
            'A cube has $12$ edges and $8$ vertices, with $3$ edges meeting at each vertex.\nAlong a continuous path that never repeats an edge, every intermediate vertex (neither the start nor the end) must be entered and exited an equal number of times, so it can use at most $2$ of its $3$ edges—leaving at least $1$ edge unused.\nSince at least $6$ of the $8$ vertices are intermediate (and each unused edge connects $2$ vertices), at least $\\frac{6}{2} = 3$ edges of the cube must be left unused.\nThus the ant can walk along at most $12 - 3 = 9$ edges.\nA valid $9$-edge walk is easy to trace (for instance, around a $4$-edge square face, step across one edge to the opposite face, and trace $4$ edges around it: $4 + 1 + 4 = 9$ edges).\nHence the greatest distance is:\n$$9 \\times 8 = 72\\text{ cm}.$$',
          rubric: [
            { code: 'M1', text: 'Uses vertex degree $3$ (or constructs a $9$-edge path) to establish a maximum of $9$ edges.' },
            { code: 'A1', text: 'Distance $72\\text{ cm}$, option A.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'The five-digit number $411A2$ is a multiple of $9$. What digit does $A$ represent?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. None of the above',
          answer: 'B. $1$',
          principle:
            'A number is divisible by $9$ if and only if the sum of its digits is divisible by $9$.',
          solution:
            'Sum the digits of $411A2$:\n$$4 + 1 + 1 + A + 2 = 8 + A.$$\nSince $A$ is a single digit ($0 \\le A \\le 9$), $8 \\le 8 + A \\le 17$. The only multiple of $9$ in this range is $9$, so:\n$$8 + A = 9 \\implies A = 1.$$\nCheck: $41112 \\div 9 = 4568$.',
          rubric: [
            { code: 'M1', text: 'Sets up the digit-sum condition $8 + A$ is a multiple of $9$.' },
            { code: 'A1', text: '$A = 1$, option B.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'Amelia cuts a $75\\text{ cm}$ by $30\\text{ cm}$ rectangle into identical squares without any leftovers. If the length of the squares is a whole number of $\\text{cm}$, what is the least number of squares can she get?\n\nA. $2$\nB. $5$\nC. $10$\nD. $90$\nE. None of the above',
          answer: 'C. $10$',
          principle:
            'To minimize the number of identical squares, choose the largest possible whole-number side length—the highest common factor (GCD) of $75$ and $30$.',
          solution:
            'Let the side length of each square be $s\\text{ cm}$. Because there are no leftovers, $s$ must divide both $75$ and $30$:\n- Divisors of $75$: $1, 3, 5, 15, 25, 75$.\n- Divisors of $30$: $1, 2, 3, 5, 6, 10, 15, 30$.\n\nThe highest common factor is $\\gcd(75, 30) = 15\\text{ cm}$. Using the largest square size gives the fewest squares:\n$$\\frac{75}{15} \\times \\frac{30}{15} = 5 \\times 2 = 10\\text{ squares}.$$',
          rubric: [
            { code: 'M1', text: 'Finds the largest square side length $\\gcd(75, 30) = 15\\text{ cm}$.' },
            { code: 'A1', text: 'Least number of squares $5 \\times 2 = 10$, option C.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'The number in an unshaded square is obtained by adding the numbers connected to it from the row above. What number must be in the square with the question mark?\n\nA. $3$\nB. $4$\nC. $5$\nD. $6$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2022-p4/fig-12.svg',
              alt: 'Four-row inverted pyramid of alternating white and shaded squares: top row shows 2, 3, question mark, and 6 separated by shaded squares; second row shows 5 on the left; bottom square shows 32.',
              caption: 'Inverted number pyramid for Question 12.'
            }
          ],
          answer: 'C. $5$',
          principle:
            'Represent the unknown in the top row as $x$ (or $1\\text{ unit}$) and propagate the sums downward to the bottom square.',
          solution:
            'Let the number in the square with `?` be $x$. Label the empty unshaded squares in row 2 as $A$ (middle) and $B$ (right), and those in row 3 as $D$ (left) and $C$ (right):\n- Row 2: $5 = 2 + 3$, $A = 3 + x$, $B = x + 6$.\n- Row 3: $D = 5 + A = 5 + (3 + x) = 8 + x$, and $C = A + B = (3 + x) + (x + 6) = 9 + 2x$.\n- Row 4: $D + C = 32$, so:\n$$(8 + x) + (9 + 2x) = 32 \\implies 17 + 3x = 32 \\implies 3x = 15 \\implies x = 5.$$\nCheck: row 2 is $5, 8, 11$; row 3 is $13, 19$; row 4 is $13 + 19 = 32$.',
          rubric: [
            { code: 'M1', text: 'Expresses the middle and lower cells in terms of the unknown and forms $17 + 3x = 32$.' },
            { code: 'A1', text: 'Finds $? = 5$, option C.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Four boys each prepared $1$ gift for a party. How many ways can these $4$ gifts be distributed among the $4$ kids so that no one receives his own gift?\n\nA. $12$\nB. $9$\nC. $6$\nD. $1$\nE. None of the above',
          answer: 'B. $9$',
          principle:
            'Count derangements systematically by fixing the $3$ possible gifts for the first boy and listing valid assignments for the remaining three.',
          solution:
            'Label the boys $A, B, C, D$ and their respective gifts $1, 2, 3, 4$. Boy $A$ can receive gift $2$, $3$, or $4$.\n- **If $A$ gets $2$:** $(B, C, D)$ must get a permutation of $(1, 3, 4)$ with $C \\neq 3$ and $D \\neq 4$. The valid choices are $(1, 4, 3)$, $(3, 4, 1)$, and $(4, 1, 3)$ — $3$ ways.\n- **If $A$ gets $3$:** By symmetry, $(B, C, D)$ have $3$ valid ways: $(1, 4, 2)$, $(4, 1, 2)$, and $(4, 2, 1)$.\n- **If $A$ gets $4$:** By symmetry, $(B, C, D)$ have $3$ valid ways: $(1, 2, 3)$, $(3, 1, 2)$, and $(3, 2, 1)$.\n\nTotal number of distributions:\n$$3 + 3 + 3 = 9.$$',
          rubric: [
            { code: 'M1', text: 'Lists valid distributions systematically for one choice of $A$ ($3$ ways) and multiplies by $3$ choices.' },
            { code: 'A1', text: 'Total $9$ ways, option B.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Father came home and found that one of his children had eaten the whole cake he put in the fridge. He asked each of his children who did it, and their responses are shown below.\n- Andy: Cindy ate the cake.\n- Bob: Andy ate the cake.\n- Cindy: Bob is lying.\n- David: It was not Cindy who ate the cake.\n- Erik: I did not eat the cake.\n\nIf only two of the children were telling the truth, who ate the cake?\n\nA. Andy\nB. Bob\nC. Cindy\nD. David\nE. Erik',
          answer: 'E. Erik',
          principle:
            'Pair contradictory statements—each contradictory pair contributes exactly $1$ truth-teller—to deduce who else must be lying.',
          solution:
            'Notice two pairs of opposite statements:\n1. Andy ("Cindy ate it") and David ("It was not Cindy") directly contradict each other, so exactly one of Andy and David tells the truth.\n2. Bob ("Andy ate it") and Cindy ("Bob is lying") directly contradict each other, so exactly one of Bob and Cindy tells the truth.\n\nBetween these four children, there are already $1 + 1 = 2$ truth-tellers. Since only $2$ of the $5$ children are telling the truth, Erik must be lying.\nErik said "I did not eat the cake," so Erik ate the cake.',
          rubric: [
            { code: 'M1', text: 'Identifies the two contradictory pairs (Andy/David and Bob/Cindy) accounting for both truth-tellers.' },
            { code: 'A1', text: 'Concludes Erik is lying and ate the cake, option E.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            "Five years ago, Jennifer's age was five times Jason's age. Now, Jennifer's age is four times Jason's age. How old is Jennifer now?\n\nA. $20$\nB. $60$\nC. $80$\nD. $100$\nE. None of the above",
          answer: 'C. $80$',
          principle:
            'Use a unit model (or linear equation) based on their ages $5$ years ago and add $5$ years to compare their present ages.',
          solution:
            "Let Jason's age $5$ years ago be $1$ unit, so Jennifer's age $5$ years ago was $5$ units.\nNow, Jason is $1\\text{ unit} + 5$ and Jennifer is $5\\text{ units} + 5$. Since Jennifer is now $4$ times as old as Jason:\n$$5\\text{ units} + 5 = 4(1\\text{ unit} + 5) = 4\\text{ units} + 20.$$\nSubtracting $4\\text{ units} + 5$ from both sides gives $1\\text{ unit} = 15$.\nTherefore, Jennifer's age now is:\n$$5 \\times 15 + 5 = 80\\text{ years old}.$$\nCheck: $5$ years ago they were $75$ and $15$ ($75 = 5 \\times 15$); now they are $80$ and $20$ ($80 = 4 \\times 20$).",
          rubric: [
            { code: 'M1', text: 'Sets up the relation $5u + 5 = 4(u + 5)$ and solves $u = 15$.' },
            { code: 'A1', text: "Jennifer's current age $80$, option C." }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Short Answer',
      marks: 40,
      stem: 'Write down the numerical answer to each question (10 questions, 4 marks each).',
      parts: [
        {
          label: '16',
          marks: 4,
          prompt:
            'The graph below shows the number of books Mr Goh sold in a week. All the horizontal lines are equally spaced. If Mr Goh sold $999$ books in total during the week, how many more books did he sell on Monday than on Sunday?',
          figures: [
            {
              src: '/papers/sasmo-2022-p4/fig-16.svg',
              alt: 'Bar chart of books sold Monday through Sunday over 9 equally spaced horizontal gridlines, with bar heights 8, 3, 5, 8, 7, 5, and 1 units.',
              caption: 'Weekly book sales bar chart for Question 16.'
            }
          ],
          answer: '$189$',
          principle:
            'Read each bar height in grid-line units, find the value of $1$ unit from the weekly total, then multiply by the difference in units.',
          solution:
            'Let $1$ vertical grid spacing represent $1$ unit. Reading the bar heights from the horizontal lines:\n- Monday: $8$ units\n- Tuesday: $3$ units\n- Wednesday: $5$ units\n- Thursday: $8$ units\n- Friday: $7$ units\n- Saturday: $5$ units\n- Sunday: $1$ unit\n\nTotal units sold during the week:\n$$8 + 3 + 5 + 8 + 7 + 5 + 1 = 37\\text{ units}.$$\nSince $37\\text{ units} = 999\\text{ books}$, we have:\n$$1\\text{ unit} = 999 \\div 37 = 27\\text{ books}.$$\nMonday exceeds Sunday by $8 - 1 = 7\\text{ units}$, which equals:\n$$7 \\times 27 = 189\\text{ books}.$$',
          rubric: [
            { code: 'M2', text: 'Reads the seven bar heights summing to $37$ units and finds $1\\text{ unit} = 999 \\div 37 = 27$.' },
            { code: 'A2', text: 'Computes $7 \\times 27 = 189$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'It is given that (as illustrated in the figure):\n- $\\text{Rooster} \\times \\text{Rooster} + \\text{Duck} = 100$\n- $\\text{Rooster} + \\text{Duck} + \\text{Ram} = 33$\n- $\\text{Ram} + \\text{Rooster} = 14$\n\nWhat does the rooster stand for?',
          figures: [
            {
              src: '/papers/sasmo-2022-p4/fig-17.svg',
              alt: 'Three pictorial equations with Rooster, Duck, and Ram icons: Rooster times Rooster plus Duck equals 100, Rooster plus Duck plus Ram equals 33, and Ram plus Rooster equals 14.',
              caption: 'Pictorial animal equations for Question 17.'
            }
          ],
          answer: '$9$',
          principle:
            'Substitute the third equation into the second to isolate the duck, then substitute into the first equation.',
          solution:
            'From the third equation, $\\text{Ram} + \\text{Rooster} = 14$.\nSubstitute this into the second equation:\n$$\\text{Duck} + (\\text{Rooster} + \\text{Ram}) = 33 \\implies \\text{Duck} + 14 = 33 \\implies \\text{Duck} = 19.$$\nNow substitute $\\text{Duck} = 19$ into the first equation:\n$$\\text{Rooster} \\times \\text{Rooster} + 19 = 100 \\implies \\text{Rooster} \\times \\text{Rooster} = 81.$$\nSince $9 \\times 9 = 81$ (for positive whole numbers), the rooster stands for $9$.',
          rubric: [
            { code: 'M2', text: 'Finds $\\text{Duck} = 33 - 14 = 19$ and sets $\\text{Rooster}^2 = 100 - 19 = 81$.' },
            { code: 'A2', text: 'Concludes the rooster stands for $9$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt: 'How many triangles are there in the figure below?',
          figures: [
            {
              src: '/papers/sasmo-2022-p4/fig-18.svg',
              alt: 'A large symmetric triangle divided by two horizontal lines, five vertical segments, and four diagonal segments into 18 smallest triangular regions.',
              caption: 'Triangle-counting diagram for Question 18.'
            }
          ],
          answer: '$47$',
          principle:
            'Count triangles systematically by size (number of smallest triangular regions they contain) so no triangle is missed or double-counted.',
          solution:
            'Count triangles by the number of smallest ($1$-part) triangular regions they contain:\n- **$1$-part triangles:** $18$ (top row: $2$, middle row: $6$, bottom row: $10$).\n- **$2$-part triangles:** $15$.\n- **$4$-part triangles:** $8$.\n- **$8$-part triangles:** $3$.\n- **$9$-part triangles:** $2$ (each half of the whole figure along the central vertical axis).\n- **$18$-part triangles:** $1$ (the entire large triangle).\n\nTotal number of triangles:\n$$18 + 15 + 8 + 3 + 2 + 1 = 47.$$',
          rubric: [
            { code: 'M2', text: 'Categorizes triangles systematically by component size ($1$-, $2$-, $4$-, $8$-, $9$-, and $18$-part).' },
            { code: 'A2', text: 'Obtains total $47$ triangles.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'Randal subtracted $4$ from a number and then divided by $5$. Andy subtracted $5$ from the same number and then divided by $4$. They both got the same answer. What is the original number?',
          answer: '$9$',
          principle:
            'Express the original number in terms of their common quotient (model method) or equate the two algebraic expressions.',
          solution:
            'Let the common answer they both got be $u$.\n- Since Randal subtracted $4$ and divided by $5$ to get $u$, the original number was $5u + 4$.\n- Since Andy subtracted $5$ and divided by $4$ to get $u$, the original number was $4u + 5$.\n\nEquating the two expressions for the original number:\n$$5u + 4 = 4u + 5 \\implies 5u - 4u = 5 - 4 \\implies u = 1.$$\nTherefore, the original number is:\n$$5(1) + 4 = 9.$$\nCheck: $(9 - 4) \\div 5 = 1$ and $(9 - 5) \\div 4 = 1$.',
          rubric: [
            { code: 'M2', text: 'Sets up $5u + 4 = 4u + 5$ (or $\\frac{n - 4}{5} = \\frac{n - 5}{4}$) and solves.' },
            { code: 'A2', text: 'Original number $9$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'Three boys counted the number of fish in a tank. After counting, they made the following statements:\n- Albert: There are at least $15$ fish.\n- Bradd: The number of fish does not reach $15$.\n- Chris: There must be at least $2$ fish.\n\nIf one of them is correct and the number of fish was not $0$, how many fish were there in the tank?',
          answer: '$1$',
          principle:
            'Test which boy can be the unique truth-teller; if Albert were correct, Chris would also be correct.',
          solution:
            'If Albert were telling the truth (at least $15$ fish), then Chris ("at least $2$ fish") would automatically also be telling the truth, giving at least two correct statements. That contradicts the condition that only one boy is correct.\nHence Albert must be wrong, so there are fewer than $15$ fish, which makes Bradd correct.\nSince only one boy is correct, Chris must also be wrong, meaning there are fewer than $2$ fish.\nBecause the number of fish was not $0$, there must be exactly $1$ fish in the tank.',
          rubric: [
            { code: 'M2', text: 'Rules out Albert (since Albert implies Chris), proving Bradd is correct and Chris is wrong ($< 2$ fish).' },
            { code: 'A2', text: 'Concludes there is $1$ fish.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            "Tyler plays a dice game in which he rolls two dice. His score is the larger of the two numbers on the dice. For example, if he rolls $3$ and $5$, his score is $5$, and if he rolls $4$ and $4$, his score is $4$. He wins the game if his score is an even number. How many possible rolls will result in Tyler's victory?",
          answer: '$21$',
          principle:
            'Casework on the largest (even) number shown on the two dice: $6$, $4$, or $2$.',
          solution:
            'For the larger of the two numbers to be even, the maximum value rolled must be $6$, $4$, or $2$:\n- **Maximum is $6$:** Both dice are at most $6$, and at least one is $6$. There are $11$ ordered pairs: $(1,6), (2,6), (3,6), (4,6), (5,6), (6,6), (6,5), (6,4), (6,3), (6,2), (6,1)$.\n- **Maximum is $4$:** Both dice are at most $4$, and at least one is $4$. There are $7$ ordered pairs: $(1,4), (2,4), (3,4), (4,4), (4,3), (4,2), (4,1)$.\n- **Maximum is $2$:** Both dice are at most $2$, and at least one is $2$. There are $3$ ordered pairs: $(1,2), (2,2), (2,1)$.\n\nTotal winning rolls:\n$$11 + 7 + 3 = 21.$$',
          rubric: [
            { code: 'M2', text: 'Counts ordered pairs separately for maximum $6$ ($11$), $4$ ($7$), and $2$ ($3$).' },
            { code: 'A2', text: 'Total $21$ winning rolls.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'Robots are used to assemble cars in a factory. Four robots assemble $13$ cars in $15$ minutes. If all robots assemble cars at the same speed, how many cars can $14$ robots assemble in $3$ hours?',
          answer: '$546$',
          principle:
            'Scale the output proportionally by time first (from $15$ minutes to $3$ hours $= 180$ minutes) and then by the number of robots (from $4$ to $14$).',
          solution:
            'First convert $3$ hours to minutes: $3 \\text{ hours} = 180\\text{ minutes}$, which is $180 \\div 15 = 12$ intervals of $15$ minutes.\n- In $3$ hours, $4$ robots assemble:\n$$13 \\times 12 = 156\\text{ cars}.$$\n- Therefore, in $3$ hours, $2$ robots assemble $156 \\div 2 = 78$ cars.\n- Multiplying by $7$, $14$ robots assemble:\n$$78 \\times 7 = 546\\text{ cars}.$$',
          rubric: [
            { code: 'M2', text: 'Scales $4$ robots from $15$ minutes to $3$ hours ($156$ cars) and adjusts from $4$ robots to $14$ robots.' },
            { code: 'A2', text: 'Correct total $546$ cars.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'The figure below is made up of $2$ identical squares and a rectangle. The area of the square is $64\\text{ cm}^2$ and the area of the rectangle is $96\\text{ cm}^2$. Points $A$, $B$, $C$ and $D$ are on the vertices of the rectangle and squares as shown. If the breadth of the rectangle is $6\\text{ cm}$, find the area (in $\\text{cm}^2$) of the shaded region $ABCD$.',
          figures: [
            {
              src: '/papers/sasmo-2022-p4/fig-23.svg',
              alt: 'Composite figure of two identical squares and a horizontal rectangle with vertices A, B, C, and D labeled and quadrilateral ABCD shaded.',
              caption: 'Composite figure with shaded region ABCD for Question 23.'
            }
          ],
          answer: '$80\\text{ cm}^2$',
          principle:
            'Enclose the shaded quadrilateral inside a bounding rectangle and subtract the unshaded right triangles and rectangle.',
          solution:
            'Since each square has area $64\\text{ cm}^2$, its side length is $8\\text{ cm}$.\nSince the rectangle has area $96\\text{ cm}^2$ and breadth $6\\text{ cm}$, its length is $96 \\div 6 = 16\\text{ cm}$.\nEnclose the region from the leftmost edge to $D$ and from the bottom of the rectangle to the top of the upper square inside a large bounding rectangle $AEFG$ (where $E$ is the top-left vertex of the upper square, $F$ is directly above $D$ on line $EB$, and $G$ is directly below $D$ on the line containing the bottom edge of the $16 \\times 6$ rectangle):\n- Height $AE = 8 + 6 = 14\\text{ cm}$.\n- Width $AG = 16 + 8 = 24\\text{ cm}$.\n- Total bounding area $= 14 \\times 24 = 336\\text{ cm}^2$.\n\nSubtract the three unshaded parts inside $AEFG$:\n1. Top-left right triangle $\\triangle AEB$ with legs $14\\text{ cm}$ and $8\\text{ cm}$: $\\frac{1}{2} \\times 14 \\times 8 = 56\\text{ cm}^2$.\n2. Top-right rectangle $BFDC$ of width $24 - 8 = 16\\text{ cm}$ and height $8\\text{ cm}$: $16 \\times 8 = 128\\text{ cm}^2$.\n3. Bottom right triangle $\\triangle ADG$ with legs $6\\text{ cm}$ and $24\\text{ cm}$: $\\frac{1}{2} \\times 6 \\times 24 = 72\\text{ cm}^2$.\n\nHence the shaded area is:\n$$336 - 56 - 128 - 72 = 80\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Finds square side $8\\text{ cm}$, rectangle length $16\\text{ cm}$, and subtracts the unshaded pieces from the $14 \\times 24$ bounding rectangle.' },
            { code: 'A2', text: 'Shaded area $80\\text{ cm}^2$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'Derrick spent $\\frac{4}{9}$ of his money on a toy, $\\frac{3}{7}$ of his remaining money on a book and the rest of his money on $5$ cakes which cost $7$ dollars each. How much money (in dollars) did he pay for the toy?',
          answer: '$49$ dollars',
          principle:
            'Choose a total unit count equal to the product of the fraction denominators ($9 \\times 7 = 63\\text{ units}$) to keep every step integral.',
          solution:
            'Let Derrick start with $9 \\times 7 = 63$ units of money.\n- He spent $\\frac{4}{9} \\times 63 = 28$ units on the toy, leaving $63 - 28 = 35$ units.\n- He spent $\\frac{3}{7} \\times 35 = 15$ units on the book, leaving $35 - 15 = 20$ units.\n\nThe remaining $20$ units bought $5$ cakes at $7$ dollars each, so:\n$$20\\text{ units} = 5 \\times 7 = 35\\text{ dollars}.$$\nDividing by $5$ gives $4\\text{ units} = 7\\text{ dollars}$. Therefore, the toy ($28$ units $= 7 \\times 4\\text{ units}$) cost:\n$$7 \\times 7 = 49\\text{ dollars}.$$',
          rubric: [
            { code: 'M2', text: 'Tracks the remaining fraction ($\\frac{20}{63}$) equal to $35$ dollars and finds $4\\text{ units} = 7$ dollars.' },
            { code: 'A2', text: 'Toy cost $49$ dollars.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'In the following, all the different letters stand for different digits. What is the value of the $4$-digit number $ABCD$?\n$$DECD - BAB = ADA$$',
          answer: '$8301$',
          principle:
            'Rewrite the subtraction as the addition $ADA + BAB = DECD$ and analyze carryovers column by column starting from the thousands place.',
          solution:
            'Rewrite the subtraction as an addition:\n$$ADA + BAB = DECD.$$\n1. **Thousands digit $D$:** The sum of two $3$-digit numbers is at most $999 + 999 = 1998$, so $D = 1$.\n2. **Ones column ($A + B$):** The units digit of $A + B$ is $D = 1$. Since $A + B = 1$ would force $A = 0$ or $B = 0$ (impossible for leading digits), we must have $A + B = 11$ with a carryover of $1$ into the tens column.\n3. **Hundreds column ($A + B + \\text{carry}$):** Since $A + B = 11$, without a tens carryover the hundreds sum would end in $1$, giving $E = 1 = D$ (invalid because different letters stand for different digits). Thus there must be a carryover of $1$ from the tens column, giving $11 + 1 = 12$, so $E = 2$.\n4. **Tens column ($D + A + 1 = 2 + A$):** Because there is a carryover of $1$ from the tens column into the hundreds column, $2 + A \\ge 10$, so $A \\in \\{8, 9\\}$. If $A = 9$, then $2 + 9 = 11$ would give $C = 1 = D$ (impossible). Thus $A = 8$, which gives $C = 0$ and $B = 11 - 8 = 3$.\n\nCheck: $1201 - 383 = 818$ ($818 + 383 = 1201$), with all five digits $A=8, B=3, C=0, D=1, E=2$ distinct. Hence $ABCD = 8301$.',
          rubric: [
            { code: 'M2', text: 'Rewrites as $ADA + BAB = DECD$, deduces $D = 1$, $A + B = 11$, and $E = 2$ via carry analysis.' },
            { code: 'A2', text: 'Finds $A=8, B=3, C=0, D=1$, so $ABCD = 8301$.' }
          ]
        }
      ]
    }
  ]
};
