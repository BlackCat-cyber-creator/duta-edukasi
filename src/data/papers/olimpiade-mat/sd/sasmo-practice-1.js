/**
 * Paket Soal Terstruktur: SASMO Practice Set I
 * Sumber: SASMO Practice Set I.pdf (30 soal; soal 1 dan 2 dilewati karena teka-teki gambar/bayangan kompleks,
 * soal 3-30 dimuat sebagai soal isian singkat).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Soal 5, 6, 7, 9, 12, 14, 23, 25, 29, dan 30 dilengkapi diagram SVG vektor berdasarkan gambar asli pada PDF.
 */
export default {
  id: 'sasmo-practice-1',
  slug: 'sasmo-practice-1',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'SASMO Practice Set I: number patterns, arithmetic, logic puzzles, divisibility, combinatorics, geometry, and cryptarithms',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd4-bab3-pola-gambar-bilangan',
    'sd5-bab2-kpk-fpb',
    'sd5-bab5-luas-daerah-bangun-datar',
    'sd6-bab3-kubus-balok',
    'sd6-bab4-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO Practice Set I',
  totalMarks: 112,
  instructions:
    'Attempt all 28 short-answer questions (Questions 3 to 30) from SASMO Practice Set I without a calculator. Each correct answer carries 4 marks (112 marks total). Questions 1 and 2 (visual shadow and 3D kennel puzzle matching items with complex artwork) are omitted. Diagrams for Questions 5, 6, 7, 9, 12, 14, 23, 25, 29, and 30 are provided as vector SVG figures.',
  source: {
    org: 'SASMO',
    file: 'SASMO Practice Set I.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Short-Answer Questions',
      marks: 112,
      stem: 'Solve all 28 short-answer questions (Questions 3 to 30) without a calculator. Each correct answer carries 4 marks.',
      parts: [
        {
          label: '3',
          marks: 4,
          prompt:
            'Richard chooses any number from $1$ to $10$. He then adds $34$ to it and subtracts $29$ from the resulting sum. Afterwards, he adds $55$ to the difference. Finally, he subtracts original number from the sum. What is the number he will get after these operations?',
          answer: '$60$',
          principle:
            'Represent the chosen number as a variable $n$; subtracting it at the end cancels $n$ completely, leaving only the net change of the constants.',
          solution:
            'Let the chosen number be $n$. Following the operations in order:\n$$(n + 34 - 29 + 55) - n = (n + 60) - n = 60.$$\nRegardless of which number Richard chooses from $1$ to $10$, the final result is $60$.\nCheck with $n = 5$: $5 + 34 = 39$, $39 - 29 = 10$, $10 + 55 = 65$, $65 - 5 = 60$.',
          rubric: [
            { code: 'M2', text: 'Writes the expression $(n + 34 - 29 + 55) - n$ and cancels $n$.' },
            { code: 'A2', text: 'Computes the final result $60$.' }
          ]
        },
        {
          label: '4',
          marks: 4,
          prompt: 'What is the value of $10 - 9 + 8 - 7 + 6 - 5 + 4 - 3 + 2 - 1$?',
          answer: '$5$',
          principle: 'Group consecutive pairs $(2k) - (2k - 1) = 1$ to simplify the alternating sum.',
          solution:
            'Group the terms into $5$ pairs:\n$$(10 - 9) + (8 - 7) + (6 - 5) + (4 - 3) + (2 - 1) = 1 + 1 + 1 + 1 + 1 = 5.$$',
          rubric: [
            { code: 'M2', text: 'Groups the alternating terms into $5$ pairs each equal to $1$.' },
            { code: 'A2', text: 'Finds the sum $5$.' }
          ]
        },
        {
          label: '5',
          marks: 4,
          prompt: 'Study the pattern and find the sum of the numbers in the $10^{\\text{th}}$ column.',
          figures: [
            {
              src: '/papers/sasmo-practice-1/fig-5.svg',
              alt: 'A 2-row table showing columns 1 to 6 as (2,3), (6,3), (4,9), (12,5), (6,15), (18,7), followed by ellipsis columns.',
              caption: 'Number pattern table for Question 5.'
            }
          ],
          answer: '$41$',
          principle:
            'Separate the odd-numbered and even-numbered columns to identify the linear rule in each row.',
          solution:
            'Look at the odd columns (Columns $1, 3, 5, \\ldots$) and even columns (Columns $2, 4, 6, \\ldots$) separately:\n- In odd column $c$: top $= c + 1$ ($2, 4, 6, \\ldots$) and bottom $= 3c$ ($3, 9, 15, \\ldots$).\n- In even column $c$: top $= 3c$ ($6, 12, 18, \\ldots$) and bottom $= c + 1$ ($3, 5, 7, \\ldots$).\nSince $10$ is even, in the $10^{\\text{th}}$ column:\n$$\\text{top} = 3 \\times 10 = 30, \\qquad \\text{bottom} = 10 + 1 = 11.$$\nTherefore, the sum of the two numbers in the $10^{\\text{th}}$ column is $30 + 11 = 41$.',
          rubric: [
            { code: 'M2', text: 'Identifies the even-column rule: top $= 3c$ and bottom $= c + 1$.' },
            { code: 'M1', text: 'Finds the $10^{\\text{th}}$ column entries $30$ and $11$.' },
            { code: 'A1', text: 'Adds them to obtain $41$.' }
          ]
        },
        {
          label: '6',
          marks: 4,
          prompt:
            'The right figure is made by placing cubes on top of each other with no gaps. Not all cubes are visible. How many cubes does the figure contain?',
          figures: [
            {
              src: '/papers/sasmo-practice-1/fig-6.svg',
              alt: 'Isometric stack of unit cubes arranged in 5 vertical columns of heights 2, 1, 1, 2, and 3 from front-left to back-right.',
              caption: 'Stacked unit cubes for Question 6.'
            }
          ],
          answer: '$9$',
          principle:
            'Count the height of each vertical column in the base footprint, including hidden supporting cubes underneath.',
          solution:
            'Count the cubes column by column from front-left to back-right:\n- Front-left column: $2$ cubes high.\n- Middle-front single cube: $1$ cube.\n- Front-right single cube: $1$ cube.\n- Middle-right column behind the front-right cube: $2$ cubes high ($1$ hidden at the base).\n- Back-right tallest column: $3$ cubes high ($2$ hidden below the top cube).\nTotal number of cubes:\n$$2 + 1 + 1 + 2 + 3 = 9.$$',
          rubric: [
            { code: 'M2', text: 'Determines the column heights $2, 1, 1, 2, 3$ including supporting cubes.' },
            { code: 'A2', text: 'Sums the heights to obtain $9$ cubes.' }
          ]
        },
        {
          label: '7',
          marks: 4,
          prompt:
            'In the square below, points $E$ and $F$ are the midpoints of $AB$ and $AD$, respectively. If the length of the square is $4\\text{ cm}$, find the area (in $\\text{cm}^2$) of the shaded region.',
          figures: [
            {
              src: '/papers/sasmo-practice-1/fig-7.svg',
              alt: 'Square ABCD with midpoints E on AB and F on AD, diagonal BD, segment EF, and trapezoid EFDB shaded blue.',
              caption: 'Square ABCD with shaded region EFDB for Question 7.'
            }
          ],
          answer: '$6$',
          principle:
            'Find the shaded trapezoid area by subtracting the small unshaded corner triangle $\\triangle AEF$ from the half-square triangle $\\triangle ABD$.',
          solution:
            'Since $ABCD$ is a square of side $4\\text{ cm}$, the diagonal $BD$ cuts it in half:\n$$\\text{Area}(\\triangle ABD) = \\frac{1}{2} \\times 4 \\times 4 = 8\\text{ cm}^2.$$\nBecause $E$ and $F$ are midpoints of $AB$ and $AD$, we have $AE = AF = \\frac{4}{2} = 2\\text{ cm}$, so\n$$\\text{Area}(\\triangle AEF) = \\frac{1}{2} \\times 2 \\times 2 = 2\\text{ cm}^2.$$\nSubtracting $\\triangle AEF$ from $\\triangle ABD$ gives the shaded area:\n$$8 - 2 = 6\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Computes $\\text{Area}(\\triangle ABD) = 8\\text{ cm}^2$ and $\\text{Area}(\\triangle AEF) = 2\\text{ cm}^2$.' },
            { code: 'A2', text: 'Subtracts to get $6$.' }
          ]
        },
        {
          label: '8',
          marks: 4,
          prompt:
            'Sally is younger than Tristan but older than Umar. Vivian is younger than Winnie but elder than Sally. Who is the youngest among these five people?',
          answer: 'Umar',
          principle:
            'Translate each comparison into an inequality and chain them together relative to Sally.',
          solution:
            'From the first sentence:\n$$\\text{Umar} < \\text{Sally} < \\text{Tristan}.$$\nFrom the second sentence:\n$$\\text{Sally} < \\text{Vivian} < \\text{Winnie}.$$\nCombining both chains shows that Tristan, Vivian, and Winnie are all older than Sally, whereas Umar is younger than Sally. Hence Umar is the youngest of the five.',
          rubric: [
            { code: 'M2', text: 'Orders $\\text{Umar} < \\text{Sally} < \\text{Tristan}$ and $\\text{Sally} < \\text{Vivian} < \\text{Winnie}$.' },
            { code: 'A2', text: 'Identifies Umar as the youngest.' }
          ]
        },
        {
          label: '9',
          marks: 4,
          prompt:
            'An ant is at one vertex of a cube and can only walk along the edges of the cube. It cannot walk along any edge more than once. If the length of the cube is $4\\text{ cm}$, what is the greatest distance (in $\\text{cm}$) that the ant can walk before it cannot continue?',
          figures: [
            {
              src: '/papers/sasmo-practice-1/fig-9.svg',
              alt: 'Wireframe cube with dashed hidden back edges and an ant positioned at the front-bottom-left starting vertex.',
              caption: 'Cube wireframe and starting vertex for Question 9.'
            }
          ],
          answer: '$36$',
          principle:
            'Use graph degree parity: at every intermediate vertex of a walk without repeated edges, the ant enters and leaves in pairs (using at most $2$ edges), while only the start and end vertices can use all $3$ edges.',
          solution:
            'A cube has $8$ vertices and $12$ edges, with $3$ edges meeting at each vertex.\nAlong any path that never repeats an edge:\n- Whenever the ant passes through a vertex without starting or ending there, it uses an even number of edges ($2$ edges).\n- Only the starting vertex and ending vertex may use an odd number of edges (at most $3$ each).\nThus the maximum number of edge-ends visited is\n$$3 + 3 + 6 \\times 2 = 18,$$\nwhich gives at most $\\frac{18}{2} = 9$ edges.\nA $9$-edge walk is indeed achievable: for example, tracing $3$ edges around the bottom face, going up $1$ vertical edge, tracing $3$ edges around the top face, going down $1$ vertical edge, and taking $1$ more bottom edge (leaving $3$ edges unused). Since each edge is $4\\text{ cm}$, the greatest distance is\n$$9 \\times 4 = 36\\text{ cm}.$$',
          rubric: [
            { code: 'M2', text: 'Shows via vertex degrees that at most $9$ edges can be traversed without repetition.' },
            { code: 'A2', text: 'Multiplies $9 \\times 4 = 36\\text{ cm}$.' }
          ]
        },
        {
          label: '10',
          marks: 4,
          prompt:
            'On Saturday, Elise bought a furniture from a shop. The furniture will be sent to Elise’s house in $30$ days. On what day of the week will the furniture reach Elise’s house?',
          answer: 'Monday',
          principle: 'Days of the week repeat every $7$ days, so compute the remainder of $30$ modulo $7$.',
          solution:
            'Divide $30$ by $7$:\n$$30 = 4 \\times 7 + 2.$$\nAfter $4$ full weeks ($28$ days), it is Saturday again. Counting $2$ more days forward: Sunday ($29$), Monday ($30$). Thus the furniture arrives on Monday.',
          rubric: [
            { code: 'M2', text: 'Computes $30 \\equiv 2 \\pmod{7}$.' },
            { code: 'A2', text: 'Counts $2$ days past Saturday to get Monday.' }
          ]
        },
        {
          label: '11',
          marks: 4,
          prompt:
            'In the sequence below, each letter represents a number. The sum of any two neighboring numbers is $17$. What is the value of the letter $D$?\n\n$$A,\\; 7,\\; B,\\; C,\\; D$$',
          answer: '$10$',
          principle:
            'Use the constant adjacent-sum rule step by step from the known number $7$.',
          solution:
            'Since every pair of neighboring numbers sums to $17$:\n- $7 + B = 17 \\implies B = 10$.\n- $B + C = 17 \\implies 10 + C = 17 \\implies C = 7$.\n- $C + D = 17 \\implies 7 + D = 17 \\implies D = 10$.\n(Also $A + 7 = 17 \\implies A = 10$, so the sequence is $10, 7, 10, 7, 10$.)',
          rubric: [
            { code: 'M2', text: 'Finds $B = 10$ and $C = 7$ using adjacent sums of $17$.' },
            { code: 'A2', text: 'Concludes $D = 10$.' }
          ]
        },
        {
          label: '12',
          marks: 4,
          prompt:
            'The numbers in each row, column, and diagonal of the table below add up to $30$. What is the value of $X$?',
          figures: [
            {
              src: '/papers/sasmo-practice-1/fig-12.svg',
              alt: 'A 3 by 3 grid with 4 in top-left, 10 in center, X in middle-right, and 2 in bottom-center.',
              caption: 'Magic-sum 3 by 3 table for Question 12.'
            }
          ],
          answer: '$6$',
          principle:
            'Fill lines that already contain two known entries, working toward the column or row containing $X$.',
          solution:
            'Each row, column, and main diagonal sums to $30$:\n1. Middle column: $\\text{top-middle} + 10 + 2 = 30 \\implies \\text{top-middle} = 18$.\n2. Main diagonal (top-left to bottom-right): $4 + 10 + \\text{bottom-right} = 30 \\implies \\text{bottom-right} = 16$.\n3. Top row: $4 + 18 + \\text{top-right} = 30 \\implies \\text{top-right} = 8$.\n4. Right column: $8 + X + 16 = 30 \\implies X = 6$.\nCheck: the remaining cells are bottom-left $= 12$ and middle-left $= 14$, and every row, column, and diagonal sums to $30$.',
          rubric: [
            { code: 'M2', text: 'Finds top-middle $= 18$, bottom-right $= 16$, and top-right $= 8$.' },
            { code: 'A2', text: 'Solves $8 + X + 16 = 30$ to get $X = 6$.' }
          ]
        },
        {
          label: '13',
          marks: 4,
          prompt:
            'If the four-digit number $147B$ is divisible by $3$, how many possible values are there for the digit $B$?',
          answer: '$4$',
          principle: 'A number is divisible by $3$ if and only if the sum of its digits is divisible by $3$.',
          solution:
            'The digit sum of $147B$ is\n$$1 + 4 + 7 + B = 12 + B.$$\nSince $12$ is already a multiple of $3$, $12 + B$ is divisible by $3$ whenever $B$ itself is a multiple of $3$.\nThe single-digit multiples of $3$ are $B \\in \\{0, 3, 6, 9\\}$, giving $4$ possible values.',
          rubric: [
            { code: 'M2', text: 'Applies the divisibility rule for $3$ to get $12 + B$ divisible by $3$.' },
            { code: 'A2', text: 'Lists $B \\in \\{0, 3, 6, 9\\}$ and counts $4$ values.' }
          ]
        },
        {
          label: '14',
          marks: 4,
          prompt: 'Observe the following pattern. What is the missing number?',
          figures: [
            {
              src: '/papers/sasmo-practice-1/fig-14.svg',
              alt: 'Four 3-sector circles showing (top 35, left 6, right 4), (top 56, left 6, right 7), (top 15, left 2, right 4), and (top ?, left 4, right 7).',
              caption: 'Three-sector circle pattern for Question 14.'
            }
          ],
          answer: '$40$',
          principle:
            'Test how the bottom-left and bottom-right numbers combine to produce the top number in all three examples.',
          solution:
            'Compare the bottom two numbers $(a, b)$ with the top number in each circle:\n- Circle 1: $(6 + 1) \\times (4 + 1) = 7 \\times 5 = 35$.\n- Circle 2: $(6 + 1) \\times (7 + 1) = 7 \\times 8 = 56$.\n- Circle 3: $(2 + 1) \\times (4 + 1) = 3 \\times 5 = 15$.\n(Equivalently, $\\text{top} = a \\times b + a + b + 1$.)\nApplying this rule to Circle 4 with $a = 4$ and $b = 7$:\n$$(4 + 1) \\times (7 + 1) = 5 \\times 8 = 40.$$',
          rubric: [
            { code: 'M2', text: 'Identifies the rule $\\text{top} = (a + 1)(b + 1)$ and verifies it on the first three circles.' },
            { code: 'A2', text: 'Computes $(4 + 1)(7 + 1) = 40$.' }
          ]
        },
        {
          label: '15',
          marks: 4,
          prompt:
            'A jar of $19$ chocolates is shared among Leila, Merilyn and Nancy. Merilyn takes more than anyone else. What is the least number of chocolates she could have taken?',
          answer: '$7$',
          principle:
            'To minimize the largest share, make the other two shares as large as possible while keeping each strictly smaller than Merilyn’s share.',
          solution:
            'Let Merilyn take $m$ chocolates. Since Merilyn takes more than anyone else, Leila and Nancy can each take at most $m - 1$ chocolates.\nTherefore, the total number of chocolates satisfies\n$$m + (m - 1) + (m - 1) \\ge 19 \\implies 3m - 2 \\ge 19 \\implies 3m \\ge 21 \\implies m \\ge 7.$$\nWhen $m = 7$, the distribution $(6, 7, 6)$ sums to $19$ and satisfies $7 > 6$. Thus the least possible number is $7$.',
          rubric: [
            { code: 'M2', text: 'Bounds the total by $m + 2(m - 1) \\ge 19$ to get $m \\ge 7$.' },
            { code: 'A2', text: 'Verifies $(6, 7, 6)$ works and concludes $7$.' }
          ]
        },
        {
          label: '16',
          marks: 4,
          prompt:
            'Mother came home and found that one of her children had eaten the whole cake she put in the fridge. She asked each of her children who did it, and their responses are shown below.\n- Austin: Carlos ate the cake.\n- Benny: Austin ate the cake.\n- Carlos: Benny is lying.\n- Daniela: It was not Carlos who ate the cake.\n- Ella: I did not eat the cake.\n\nIf only two of the children were telling the truth, who ate the cake?',
          answer: 'Ella',
          principle:
            'Pair contradictory statements together: each pair contains exactly one truth-teller and one liar.',
          solution:
            'Notice two pairs of opposite statements:\n1. Austin ("Carlos ate the cake") and Daniela ("It was not Carlos who ate the cake") directly contradict each other, so **exactly one** of them tells the truth.\n2. Benny ("Austin ate the cake") and Carlos ("Benny is lying") directly contradict each other, so **exactly one** of them tells the truth.\nTogether, these four children already account for $1 + 1 = 2$ truth-tellers.\nSince only two children tell the truth in total, Ella must be lying when she says "I did not eat the cake." Therefore, **Ella** ate the cake.\nCheck: if Ella ate the cake, Carlos and Daniela tell the truth ($2$ truth-tellers), while Austin, Benny, and Ella lie ($3$ liars).',
          rubric: [
            { code: 'M2', text: 'Pairs (Austin, Daniela) and (Benny, Carlos) as two contradictory pairs yielding $2$ truth-tellers.' },
            { code: 'A2', text: 'Deduces Ella is lying and therefore Ella ate the cake.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'Alan has an old grandfather clock. The grandfather clock is moving slower than the normal clock. Every day at $9$ am, Alan corrects it from $8:30$ am to $9:00$ am. One day, Alan went on vacation for $4$ days. He left his house at $9:00$ am after resetting the clock. When Alan returned after vacation to correct the clock to $9:00$ am, what time did the clock show?',
          answer: '7:00 am',
          principle:
            'Find the clock’s constant daily loss rate and multiply by the number of days elapsed.',
          solution:
            'Every $1$ day ($24$ real hours), the grandfather clock runs from $9:00$ am to $8:30$ am, so it loses $30$ minutes per day.\nOver $4$ days without correction, the total time lost is\n$$4 \\times 30\\text{ minutes} = 120\\text{ minutes} = 2\\text{ hours}.$$\nWhen Alan returns at $9:00$ am, the clock is $2$ hours behind, so it shows $7:00$ am.',
          rubric: [
            { code: 'M2', text: 'Determines the clock loses $30$ minutes per day, totaling $2$ hours in $4$ days.' },
            { code: 'A2', text: 'Subtracts $2$ hours from $9:00$ am to get 7:00 am.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'A car takes $1$ minutes, $30$ seconds to travel a distance of $1$ kilometer. At this rate, how many kilometers will the car travel in $1$ hour?',
          answer: '$40$',
          principle:
            'Convert both times to seconds (or minutes) and divide the total time by the time per kilometer.',
          solution:
            'Convert the given times into seconds:\n- Time per $1\\text{ km}$: $1\\text{ min } 30\\text{ s} = 60 + 30 = 90\\text{ seconds}$.\n- Total time: $1\\text{ hour} = 60 \\times 60 = 3600\\text{ seconds}$.\nDistance traveled in $1$ hour:\n$$\\frac{3600}{90} = 40\\text{ km}.$$',
          rubric: [
            { code: 'M2', text: 'Converts $1\\text{ min } 30\\text{ s} = 90\\text{ s}$ and $1\\text{ h} = 3600\\text{ s}$.' },
            { code: 'A2', text: 'Divides $3600 \\div 90 = 40$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'Teacher writes down a four-digit number on a whiteboard. The hundreds digit is the sum of the tens digit and the ones digit. The thousands digit is the sum of the other three. Given that the sum of all four digits is $12$, what is the thousands digit of the number?',
          answer: '$6$',
          principle:
            'Use the total sum of all four digits together with the fact that the thousands digit equals the sum of the remaining three digits.',
          solution:
            'Let the four-digit number be $\\overline{ABCD}$. We are given:\n$$A = B + C + D \\qquad \\text{and} \\qquad A + B + C + D = 12.$$\nSubstituting $B + C + D = A$ into the sum of all four digits gives\n$$A + A = 12 \\implies 2A = 12 \\implies A = 6.$$\n(For completeness, $B = C + D$ and $B + C + D = 6$ also give $B = 3$, e.g. $6312$.)\nHence the thousands digit is $6$.',
          rubric: [
            { code: 'M2', text: 'Substitutes $B + C + D = A$ into $A + B + C + D = 12$ to obtain $2A = 12$.' },
            { code: 'A2', text: 'Finds the thousands digit $A = 6$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'The desks in a Primary $2$ classroom are arranged in straight rows. Each row has the same number of desks. Greggory sits at the desk that is in the fourth row from the front and back. He sits at the centre of his row and there are $5$ desks to his left. How many desks are in the classroom?',
          answer: '$77$',
          principle:
            'Find the total number of rows and the number of desks per row using symmetry, avoiding double-counting Greggory’s row or desk.',
          solution:
            '- Rows: being $4^{\\text{th}}$ from the front means $3$ rows are in front of him, and being $4^{\\text{th}}$ from the back means $3$ rows are behind him. Including his own row, there are\n$$3 + 1 + 3 = 7\\text{ rows}.$$\n- Desks per row: sitting at the centre with $5$ desks to his left means there are also $5$ desks to his right, giving\n$$5 + 1 + 5 = 11\\text{ desks per row}.$$\nTotal number of desks:\n$$7 \\times 11 = 77.$$',
          rubric: [
            { code: 'M2', text: 'Finds $7$ rows and $11$ desks per row.' },
            { code: 'A2', text: 'Multiplies $7 \\times 11 = 77$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'The year $2025$ is an interesting year because it contains digits $0$, $2$ and $5$. How many years later will be the next interesting year?',
          answer: '$10$',
          principle:
            'Check consecutive years after $2025$ in order until reaching the first year whose digits include $0$, $2$, and $5$.',
          solution:
            'Check years after $2025$ sequentially for the presence of digits $0$, $2$, and $5$:\n- Years $2026$ through $2034$ do not contain the digit $5$.\n- The year $2035$ contains the digits $0$, $2$, and $5$ (along with $3$).\nThus the next interesting year is $2035$, which is\n$$2035 - 2025 = 10\\text{ years later}.$$\n*(Note: if the condition were meant to allow **only** the digits $0, 2, 5$ and no other digits, the next such year would be $2050$, which is $25$ years later.)*',
          rubric: [
            { code: 'M2', text: 'Identifies $2035$ as the first year after $2025$ containing digits $0$, $2$, and $5$.' },
            { code: 'A2', text: 'Computes $2035 - 2025 = 10$ years.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt: 'It is given that $3 \\times A = 1 + 2 + 3 + 4 + 5 + 6$, what is the value of $A$?',
          answer: '$7$',
          principle: 'Evaluate the sum on the right-hand side first, then divide by $3$.',
          solution:
            'Add the numbers on the right-hand side:\n$$1 + 2 + 3 + 4 + 5 + 6 = 21.$$\nThen $3 \\times A = 21$, so\n$$A = \\frac{21}{3} = 7.$$',
          rubric: [
            { code: 'M2', text: 'Computes the sum $1 + 2 + 3 + 4 + 5 + 6 = 21$.' },
            { code: 'A2', text: 'Divides $21 \\div 3 = 7$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'In each table, the three numbers on the bottom row are used to obtain the number in the top row. If the same pattern is used in each box, what is the value of “?” ?',
          figures: [
            {
              src: '/papers/sasmo-practice-1/fig-23.svg',
              alt: 'Four 2-row number boxes: top 5 over 1,4,8; top 4 over 2,3,5; top 9 over 5,3,7; and top ? over 1,2,3.',
              caption: 'Four number-pattern boxes for Question 23.'
            }
          ],
          answer: '$2$',
          principle:
            'Compare how the left, middle, and right bottom entries combine linearly to equal the top entry in every box.',
          solution:
            'In each box, check the relation $\\text{top} = \\text{left} + \\text{right} - \\text{middle}$:\n- Box 1: $1 + 8 - 4 = 5$.\n- Box 2: $2 + 5 - 3 = 4$.\n- Box 3: $5 + 7 - 3 = 9$.\nApplying the same rule to Box 4:\n$$1 + 3 - 2 = 2.$$',
          rubric: [
            { code: 'M2', text: 'Finds the rule $\\text{top} = \\text{left} + \\text{right} - \\text{middle}$ across the first three boxes.' },
            { code: 'A2', text: 'Computes $1 + 3 - 2 = 2$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'Observe the pattern and find out the number of whole numbers in the sequence below.\n\n$$1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, \\ldots, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10$$',
          answer: '$55$',
          principle:
            'Count how many times each integer $k$ appears and sum the frequencies from $1$ to $10$.',
          solution:
            'In this sequence, each whole number $k$ from $1$ to $10$ appears exactly $k$ times ($1$ appears once, $2$ appears twice, $\\ldots$, and $10$ appears ten times).\nThe total number of terms is\n$$1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = \\frac{10 \\times 11}{2} = 55.$$',
          rubric: [
            { code: 'M2', text: 'Recognizes that each integer $k \\in \\{1, \\ldots, 10\\}$ appears $k$ times.' },
            { code: 'A2', text: 'Sums $1 + 2 + \\cdots + 10 = 55$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt: 'How many triangles are there in the figure below?',
          figures: [
            {
              src: '/papers/sasmo-practice-1/fig-25.svg',
              alt: 'A large triangle divided by a horizontal midline, a vertical altitude, and vertical and diagonal segments in each lower half.',
              caption: 'Triangle counting diagram for Question 25.'
            }
          ],
          answer: '$17$',
          principle:
            'Classify triangles systematically by region (upper half, lower half, and full-height spanning both halves) so none are missed or double-counted.',
          solution:
            'Count the triangles by where they lie relative to the horizontal midline:\n1. **Entirely above the midline:** $2$ small right triangles (left and right) and $1$ combined upper triangle, giving $3$ triangles.\n2. **Entirely below the midline:**\n   - Left outer half: $2$ small triangles + $1$ combined triangle $= 3$.\n   - Center inverted triangle: $2$ small triangles + $1$ combined triangle $= 3$.\n   - Right outer half: $2$ small triangles + $1$ combined triangle $= 3$.\n   This gives $3 + 3 + 3 = 9$ triangles.\n3. **Spanning both above and below the midline (apex at the top vertex):**\n   - Using the midline diagonals as bases: $2$ triangles (left and right of the center vertical).\n   - Using segments along the bottom base: $2$ half-base triangles (left half and right half) + $1$ whole large triangle $= 3$.\n   This gives $2 + 3 = 5$ triangles.\nTotal number of triangles:\n$$3 + 9 + 5 = 17.$$',
          rubric: [
            { code: 'M2', text: 'Counts $3$ upper triangles and $9$ lower triangles systematically.' },
            { code: 'M1', text: 'Counts the $5$ full-height triangles spanning both halves.' },
            { code: 'A1', text: 'Sums $3 + 9 + 5 = 17$.' }
          ]
        },
        {
          label: '26',
          marks: 4,
          prompt:
            'How many whole numbers smaller than $300$ can be formed with the digits $2, 5, 1$ or $3$ if each of the digits can only be used at most once in any number?',
          answer: '$28$',
          principle:
            'Count by number of digits ($1$-digit, $2$-digit, and $3$-digit numbers starting with $1$ or $2$) using the multiplication principle.',
          solution:
            'The available digits are $\\{1, 2, 3, 5\\}$ ($4$ digits), with no repetition allowed:\n- **$1$-digit numbers:** all $4$ digits work $\\implies 4$ numbers.\n- **$2$-digit numbers:** $4$ choices for the tens digit and $3$ remaining choices for the ones digit $\\implies 4 \\times 3 = 12$ numbers.\n- **$3$-digit numbers smaller than $300$:** the hundreds digit must be $1$ or $2$ ($2$ choices); then $3$ choices remain for the tens digit and $2$ choices for the ones digit $\\implies 2 \\times 3 \\times 2 = 12$ numbers.\nTotal whole numbers smaller than $300$:\n$$4 + 12 + 12 = 28.$$',
          rubric: [
            { code: 'M2', text: 'Splits into $1$-digit ($4$), $2$-digit ($12$), and $3$-digit $< 300$ ($12$) cases.' },
            { code: 'A2', text: 'Adds $4 + 12 + 12 = 28$.' }
          ]
        },
        {
          label: '27',
          marks: 4,
          prompt:
            'Fifty students numbered from $1$ to $50$ were asked to line up in a straight line. The first student in the line was asked to leave, the second student remained. The third student was asked to leave the line, the fourth student remained and so forth. This process was then repeated until there was only one student left in the line. What was the number of the only student left in the line?',
          answer: '$32$',
          principle:
            'Each elimination round removes odd positions in the current line and keeps every second student, multiplying the surviving step size by $2$.',
          solution:
            'Track which numbers survive after each round:\n- After Round 1: odd-positioned students ($1, 3, 5, \\ldots$) leave, leaving multiples of $2$: $2, 4, 6, \\ldots, 50$.\n- After Round 2: every $1^{\\text{st}}, 3^{\\text{rd}}, \\ldots$ survivor leaves, leaving multiples of $4$: $4, 8, 12, \\ldots, 48$.\n- After Round 3: multiples of $8$ remain: $8, 16, 24, 32, 40, 48$.\n- After Round 4: multiples of $16$ remain: $16, 32, 48$.\n- After Round 5: $16$ (1st) leaves, $32$ (2nd) remains, and $48$ (3rd) leaves.\nThus student $32$ (the largest power of $2$ not exceeding $50$) is the only one left.',
          rubric: [
            { code: 'M2', text: 'Shows each round keeps multiples of $2, 4, 8, 16, 32$ respectively.' },
            { code: 'A2', text: 'Identifies the last remaining student as $32$.' }
          ]
        },
        {
          label: '28',
          marks: 4,
          prompt:
            'A toy cost twice as much as $1$ notebook. Betty bought $3$ such toys and $3$ such notebooks for $72$ dollars. What was the cost (in dollars) of $1$ toy?',
          answer: '$16$',
          principle:
            'Replace each toy with $2$ notebooks to express the total cost in a single unit.',
          solution:
            'Since $1$ toy costs as much as $2$ notebooks, $3$ toys cost as much as $3 \\times 2 = 6$ notebooks.\nThus Betty’s purchase equals $6 + 3 = 9$ notebooks for $72$ dollars:\n$$1\\text{ notebook} = \\frac{72}{9} = 8\\text{ dollars}.$$\nTherefore, $1$ toy costs\n$$2 \\times 8 = 16\\text{ dollars}.$$',
          rubric: [
            { code: 'M2', text: 'Substitutes $3$ toys $= 6$ notebooks so $9$ notebooks cost $72$ dollars ($8$ dollars each).' },
            { code: 'A2', text: 'Computes the cost of $1$ toy as $16$ dollars.' }
          ]
        },
        {
          label: '29',
          marks: 4,
          prompt:
            'From the numbers $1$ to $9$, select $6$ different numbers and place them in the squares. What is the largest result you can get?',
          figures: [
            {
              src: '/papers/sasmo-practice-1/fig-29.svg',
              alt: 'Digits 1 through 9 above an expression with six empty boxes: (box + box) times (box - box) times (box divided by box) equals.',
              caption: 'Digit-placement maximization expression for Question 29.'
            }
          ],
          answer: '$728$',
          principle:
            'To maximize the product of three positive factors $(a + b)(c - d)(e \\div f)$, divide by the smallest possible divisor $f = 1$, reserve the largest digits for $a, b, c, e$, and use $d = 2$.',
          solution:
            'Let the expression be $(a + b) \\times (c - d) \\times (e \\div f)$ using $6$ distinct digits from $\\{1, 2, \\ldots, 9\\}$.\nTo maximize the product:\n- Set $f = 1$ so the division does not shrink $e$ (making $e \\div f = e$), and set $d = 2$ (the smallest remaining digit) to maximize $c - d$.\n- Choose the four largest digits $\\{6, 7, 8, 9\\}$ for $\\{a, b, c, e\\}$. Comparing assignments:\n  - If $e = 9, c = 8, a + b = 6 + 7 = 13$: $13 \\times (8 - 2) \\times 9 = 13 \\times 6 \\times 9 = 702$.\n  - If $e = 8, c = 9, a + b = 6 + 7 = 13$: $13 \\times (9 - 2) \\times 8 = 13 \\times 7 \\times 8 = 728$.\n  - If $e = 7, c = 9, a + b = 6 + 8 = 14$: $14 \\times (9 - 2) \\times 7 = 14 \\times 7 \\times 7 = 686$.\n  - If $e = 6, c = 9, a + b = 7 + 8 = 15$: $15 \\times (9 - 2) \\times 6 = 15 \\times 7 \\times 6 = 630$.\nHence the largest possible result is\n$$(6 + 7) \\times (9 - 2) \\times (8 \\div 1) = 13 \\times 7 \\times 8 = 728.$$',
          rubric: [
            { code: 'M2', text: 'Sets $f = 1$, $d = 2$, and assigns $\\{6, 7, 8, 9\\}$ to the positive slots.' },
            { code: 'A2', text: 'Maximizes the product to $(6 + 7) \\times (9 - 2) \\times (8 \\div 1) = 728$.' }
          ]
        },
        {
          label: '30',
          marks: 4,
          prompt:
            'In the addition shown, different letters represent different digits. What is the sum of $A$, $B$ and $C$?',
          figures: [
            {
              src: '/papers/sasmo-practice-1/fig-30.svg',
              alt: 'Vertical column addition of 6A, 3B9, 1C58, and D247 summing to 4321.',
              caption: 'Cryptarithm vertical addition for Question 30.'
            }
          ],
          answer: '$17$',
          principle:
            'Solve the column addition from right to left (ones to thousands), tracking every carry.',
          solution:
            'Add column by column from right to left:\n- **Ones column:** $A + 9 + 8 + 7 = A + 24$ ends in $1$. Since $0 \\le A \\le 9$, we must have $A + 24 = 31 \\implies A = 7$, with carry $3$.\n- **Tens column:** $3 + 6 + B + 5 + 4 = 18 + B$ ends in $2$. Since $0 \\le B \\le 9$, we get $18 + B = 22 \\implies B = 4$, with carry $2$.\n- **Hundreds column:** $2 + 3 + C + 2 = 7 + C$ ends in $3$. Thus $7 + C = 13 \\implies C = 6$, with carry $1$.\n- **Thousands column:** $1 + 1 + D = 4 \\implies D = 2$.\nAll four digits $A = 7, B = 4, C = 6, D = 2$ are distinct. Check: $67 + 349 + 1658 + 2247 = 4321$.\nTherefore,\n$$A + B + C = 7 + 4 + 6 = 17.$$',
          rubric: [
            { code: 'M2', text: 'Solves column by column with carries to get $A = 7$, $B = 4$, $C = 6$ (and $D = 2$).' },
            { code: 'A2', text: 'Computes $A + B + C = 7 + 4 + 6 = 17$.' }
          ]
        }
      ]
    }
  ]
};
