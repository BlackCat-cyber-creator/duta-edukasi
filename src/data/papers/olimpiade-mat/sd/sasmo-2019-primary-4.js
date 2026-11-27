/**
 * Paket Soal: SASMO 2019 Primary 4 (Grade 4)
 * Sumber: Singapore and Asian Schools Math Olympiad 2019, Primary 4 Contest (2019-SASMO-G4.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 2, 5, 8, 10, 14, 15, 17, dan 20 dilengkapi gambar ilustrasi .webp.
 */
export default {
  id: 'sasmo-2019-g4',
  slug: 'sasmo-2019-primary-4',
  subject: 'olimpiade-mat',
  grade: 4,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'SASMO 2019 Primary 4 (Grade 4): arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd4-bab2-pecahan',
    'sd4-bab3-pola-gambar-bilangan',
    'sd4-bab5-bangun-datar'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2019 Primary 4 (Grade 4)',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Diagrams for Questions 2, 5, 8, 10, 14, 15, 17, and 20 are provided as figures.',
  source: {
    org: 'SASMO',
    file: '2019-SASMO-G4.pdf',
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
            'Find the next number in the sequence below.\n$$4, 7, 13, 22, 34, \\underline{\\quad\\quad}$$\n\nA. $15$\nB. $18$\nC. $49$\nD. $60$\nE. None of the above',
          answer: 'C. $49$',
          principle:
            'Compute consecutive differences to recognize a sequence increasing by multiples of $3$.',
          solution:
            'Find the difference between each pair of consecutive terms:\n$$7 - 4 = 3, \\quad 13 - 7 = 6, \\quad 22 - 13 = 9, \\quad 34 - 22 = 12.$$\nEach difference increases by $3$, so the next difference is $12 + 3 = 15$. Adding $15$ to $34$ gives:\n$$34 + 15 = 49.$$',
          rubric: [
            { code: 'M1', text: 'Identifies the consecutive differences $3, 6, 9, 12$ and determines the next difference is $15$.' },
            { code: 'A1', text: 'Computes $34 + 15 = 49$, option C.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'How many triangles are there in the picture below?\n\nA. $16$\nB. $12$\nC. $8$\nD. $6$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2019-g4/fig-2.webp',
              alt: 'Fish-shaped geometric outline with a divided triangular head containing a small eye triangle, two triangular fins, and a striped triangular tail.',
              caption: 'Triangle-counting figure for Question 2.'
            }
          ],
          answer: 'B. $12$',
          principle:
            'Group the triangles by region (head and fins versus the striped tail) and count systematically by strip size.',
          solution:
            'Count the triangles in each part of the figure:\n- **Head and fins ($5$ triangles):** $1$ nose-tip triangle, $1$ small eye triangle, $1$ full head triangle, $1$ top fin triangle, and $1$ bottom fin triangle. (The central body is a quadrilateral, contributing $0$ triangles.)\n- **Tail ($7$ triangles):** Three horizontal lines divide the tail into $4$ horizontal strips (two outer triangles and two middle trapezoids). Counting upward or downward from the apex along the horizontal cuts gives:\n  - $2$ single-strip triangles (topmost and bottommost),\n  - $2$ two-strip triangles (top $2$ strips and bottom $2$ strips),\n  - $2$ three-strip triangles (top $3$ strips and bottom $3$ strips),\n  - $1$ full four-strip tail triangle.\n\nSumming all triangles gives $5 + 7 = 12$.',
          rubric: [
            { code: 'M1', text: 'Counts $5$ triangles in the head and fins and systematically counts $7$ triangles in the striped tail.' },
            { code: 'A1', text: 'Obtains total $12$ triangles, option B.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'If the $3$-digit number $2M4$ is divisible by $6$, what is the smallest value of the digit $M$?\n\nA. $0$\nB. $3$\nC. $6$\nD. $9$\nE. None of the above',
          answer: 'A. $0$',
          principle:
            'A number is divisible by $6$ if and only if it is divisible by both $2$ and $3$.',
          solution:
            'Since the units digit of $2M4$ is $4$, the number is already even (divisible by $2$) for every digit $M$.\nFor divisibility by $3$, the sum of its digits must be a multiple of $3$:\n$$2 + M + 4 = 6 + M.$$\nTesting digits $0$ through $9$, $6 + M$ is divisible by $3$ when $M \\in \\{0, 3, 6, 9\\}$. The smallest possible digit is $M = 0$ (giving $204 = 6 \\times 34$).',
          rubric: [
            { code: 'M1', text: 'Applies the divisibility rules for $2$ and $3$ to require $6 + M$ to be a multiple of $3$.' },
            { code: 'A1', text: 'Finds the smallest digit $M = 0$, option A.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Eight days after the day before yesterday is Friday. Which day of the week is tomorrow?\n\nA. Friday\nB. Saturday\nC. Sunday\nD. Thursday\nE. None of the above',
          answer: 'C. Sunday',
          principle:
            'Express the reference day relative to today and reduce the net day shift modulo $7$.',
          solution:
            'The day before yesterday is $2$ days before today. Eight days after that is:\n$$-2 + 8 = +6\\text{ days from today}.$$\nSince $6$ days after today is Friday, today is $6$ days before Friday (equivalently, $1$ day after Friday), which is Saturday.\nTherefore, tomorrow is Sunday.',
          rubric: [
            { code: 'M1', text: 'Determines that $8$ days after the day before yesterday equals $6$ days after today, so today is Saturday.' },
            { code: 'A1', text: 'Concludes tomorrow is Sunday, option C.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Which of the following options are you most likely to spin?\n\nA. An even number\nB. An odd number\nC. A multiple of $3$\nD. A number bigger than $2$\nE. A number less than $4$',
          figures: [
            {
              src: '/papers/sasmo-2019-g4/fig-5.webp',
              alt: 'Circular spinner divided into six equal sectors numbered 1 through 6 in order around the wheel with a central pointer arrow.',
              caption: 'Six-sector spinner for Question 5.'
            }
          ],
          answer: 'D. A number bigger than $2$',
          principle:
            'Compare the number of favorable equal sectors out of $6$ for each event.',
          solution:
            'The spinner has $6$ equal sectors labeled $1, 2, 3, 4, 5, 6$. Count the favorable outcomes for each option:\n- **A (even):** $\\{2, 4, 6\\} \\implies 3$ sectors.\n- **B (odd):** $\\{1, 3, 5\\} \\implies 3$ sectors.\n- **C (multiple of $3$):** $\\{3, 6\\} \\implies 2$ sectors.\n- **D (bigger than $2$):** $\\{3, 4, 5, 6\\} \\implies 4$ sectors.\n- **E (less than $4$):** $\\{1, 2, 3\\} \\implies 3$ sectors.\n\nOption D has the greatest number of favorable sectors ($4$ out of $6$).',
          rubric: [
            { code: 'M1', text: 'Counts the favorable outcomes out of $6$ for each event ($3, 3, 2, 4, 3$).' },
            { code: 'A1', text: 'Selects a number bigger than $2$ ($4$ out of $6$), option D.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'Jonathan has $4$ regular dice. Each die has numbers from $1$ to $6$. Which of the following could not be the sum of the numbers on top of the $4$ dice?\n\nA. $6$\nB. $11$\nC. $19$\nD. $26$\nE. All the above numbers are possible sums',
          answer: 'D. $26$',
          principle:
            'Check the minimum and maximum possible sums of $4$ regular dice.',
          solution:
            'Each die shows at least $1$ and at most $6$. Across $4$ dice:\n- Minimum sum $= 4 \\times 1 = 4$.\n- Maximum sum $= 4 \\times 6 = 24$.\n\nEvery integer from $4$ to $24$ is achievable ($6$, $11$, and $19$ are all within $[4, 24]$), whereas $26 > 24$ cannot be formed.',
          rubric: [
            { code: 'M1', text: 'Establishes the achievable range of sums from $4$ to $24$.' },
            { code: 'A1', text: 'Identifies $26$ as impossible, option D.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'In Mathematics, the product of the first $n$ whole numbers starting from $1$ is written as $n! = 1 \\times 2 \\times 3 \\times \\dots \\times n$. For example, $2! = 1 \\times 2$ and $7! = 1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6 \\times 7$. The number of hours in September can be written as $n!$. Find the value of $n$.\n\nA. $5$\nB. $6$\nC. $7$\nD. $8$\nE. None of the above',
          answer: 'B. $6$',
          principle:
            'Multiply the number of days in September by $24$ hours per day and factor the product into consecutive integers starting from $1$.',
          solution:
            'September has $30$ days, and each day has $24$ hours, so the total number of hours is:\n$$30 \\times 24 = 720.$$\nFactoring into consecutive integers from $1$:\n$$30 \\times 24 = (5 \\times 6) \\times (1 \\times 2 \\times 3 \\times 4) = 1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6 = 6!.$$\nHence $n = 6$.',
          rubric: [
            { code: 'M1', text: 'Computes $30 \\times 24 = 720$ hours in September.' },
            { code: 'A1', text: 'Matches $720 = 6!$, giving $n = 6$, option B.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'Which of the following will form a knot when the two ends are pulled away from each other at the same time?\n\nA. A\nB. B\nC. C\nD. D\nE. E',
          figures: [
            {
              src: '/papers/sasmo-2019-g4/fig-8.webp',
              alt: 'Five orange rope arrangements labeled A through E, each showing two free frayed ends and overlapping loops.',
              caption: 'Five rope configurations labeled A through E for Question 8.'
            }
          ],
          answer: 'E. E',
          principle:
            'Follow the over-and-under crossings from one end to the other; an unknotted loop slips free when pulled, whereas alternating crossings lock into a trefoil knot.',
          solution:
            'Tracing the crossings of each rope when both ends are pulled tight:\n- In **A, B, C, and D**, at least one loop lies completely over or under the adjacent strand, allowing the twist to slide off and straighten into a plain cord.\n- In **E**, the strand alternates under, over, under, and over around the central loop, forming a closed trefoil knot that tightens rather than uncoiling when pulled.',
          rubric: [
            { code: 'M1', text: 'Analyzes the over/under crossings and eliminates unknotted loops in A through D.' },
            { code: 'A1', text: 'Identifies configuration E as forming a knot, option E.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'Adam can travel from City A to City B by a bus, a train or a plane. To get from City B to Town C, he can hire a taxi, rent a car, a motorcycle or a bicycle. There is no direct transportation from City A to Town C. How many ways can Adam travel from City A to Town C?\n\nA. $8$\nB. $7$\nC. $12$\nD. $9$\nE. None of the above',
          answer: 'C. $12$',
          principle:
            'Apply the multiplication principle to independent two-stage route choices.',
          solution:
            'Adam has $3$ transport choices from City A to City B (bus, train, plane) and $4$ transport choices from City B to Town C (taxi, car, motorcycle, bicycle).\nBy the multiplication principle, the total number of routes is:\n$$3 \\times 4 = 12.$$',
          rubric: [
            { code: 'M1', text: 'Multiplies the $3$ first-leg options by the $4$ second-leg options.' },
            { code: 'A1', text: 'Obtains $12$ ways, option C.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'What is the missing number in the diagram below?\n\nA. $150$\nB. $360$\nC. $31$\nD. $205$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2019-g4/fig-10.webp',
              alt: 'Four stacked three-box pyramids showing bottom pairs (1, 2) under 2, (3, 4) under 36, (5, 6) under a question mark, and (7, 8) under 392.',
              caption: 'Number-box pattern for Question 10.'
            }
          ],
          answer: 'A. $150$',
          principle:
            'Test arithmetic combinations of the bottom-left and bottom-right numbers that produce the top number across all given pyramids.',
          solution:
            'Check the relationship $(\\text{bottom left})^2 \\times (\\text{bottom right}) = \\text{top}$ across the given blocks:\n- First: $1^2 \\times 2 = 2$.\n- Second: $3^2 \\times 4 = 9 \\times 4 = 36$.\n- Fourth: $7^2 \\times 8 = 49 \\times 8 = 392$.\n\nApplying the same rule to the third block gives:\n$$5^2 \\times 6 = 25 \\times 6 = 150.$$',
          rubric: [
            { code: 'M1', text: 'Identifies the rule $\\text{left}^2 \\times \\text{right} = \\text{top}$ from the three known blocks.' },
            { code: 'A1', text: 'Computes $5^2 \\times 6 = 150$, option A.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'Calculate the sum of the following mixed fractions.\n$$1\\frac{1}{3} + 2\\frac{9}{12} + 3\\frac{3}{5} + 4\\frac{1}{4} + 5\\frac{4}{6} + 6\\frac{10}{25}$$\n\nA. $18$\nB. $19$\nC. $21\\frac{7}{12}$\nD. $24$\nE. None of the above',
          answer: 'D. $24$',
          principle:
            'Simplify each fraction to lowest terms first, then pair terms with matching denominators.',
          solution:
            'Reduce the reducible fractions:\n$$\\frac{9}{12} = \\frac{3}{4}, \\quad \\frac{4}{6} = \\frac{2}{3}, \\quad \\frac{10}{25} = \\frac{2}{5}.$$\nNow group pairs with the same denominator:\n- $\\left(1\\frac{1}{3} + 5\\frac{2}{3}\\right) = 7$\n- $\\left(2\\frac{3}{4} + 4\\frac{1}{4}\\right) = 7$\n- $\\left(3\\frac{3}{5} + 6\\frac{2}{5}\\right) = 10$\n\nAdding the three group totals gives:\n$$7 + 7 + 10 = 24.$$',
          rubric: [
            { code: 'M1', text: 'Simplifies $\\frac{9}{12}, \\frac{4}{6}, \\frac{10}{25}$ and pairs fractions with denominators $3, 4, 5$.' },
            { code: 'A1', text: 'Sums $7 + 7 + 10 = 24$, option D.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'The plans for Mobile Data offered by a company are given below.\n- Plan A: $20$ minutes at $2$ dollars\n- Plan B: $50$ minutes at $4$ dollars\n- Plan C: $60$ minutes at $6$ dollars\n- Plan D: $100$ minutes at $9$ dollars\n\nWhich plan offers the best rate per minute?\n\nA. Plan A\nB. Plan B\nC. Plan C\nD. Plan D\nE. None of the above',
          answer: 'B. Plan B',
          principle:
            'Compute the cost per minute (or scale every plan to $100$ minutes) to compare rates directly.',
          solution:
            'Scale each plan to a common duration of $100$ minutes (or compute cost per minute in dollars):\n- **Plan A:** $2$ dollars for $20$ min $\\implies 10$ dollars for $100$ min ($0.10$ dollars/min).\n- **Plan B:** $4$ dollars for $50$ min $\\implies 8$ dollars for $100$ min ($0.08$ dollars/min).\n- **Plan C:** $6$ dollars for $60$ min $= 1$ dollar for $10$ min $\\implies 10$ dollars for $100$ min ($0.10$ dollars/min).\n- **Plan D:** $9$ dollars for $100$ min ($0.09$ dollars/min).\n\nPlan B costs the least per minute, so it offers the best rate.',
          rubric: [
            { code: 'M1', text: 'Converts all four plans to a common basis such as cost per $100$ minutes or per minute.' },
            { code: 'A1', text: 'Selects Plan B ($0.08$ dollars/min), option B.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'A group of friends arrive at SASMO Cinema at 11:30. They watch any movie together. What is the earliest time they could finish watching both movies?\n\n| Title | Duration | Show Times |\n| :--- | :--- | :--- |\n| Adventure Park | $115$ minutes | 12:00, 14:15, 15:55, 19:05, 21:35 |\n| Monster Land | $105$ minutes | 11:00, 12:55, 16:10, 18:50, 21:35 |\n\nA. 16:00\nB. 14:40\nC. 17:50\nD. 17:55\nE. None of the above',
          answer: 'C. 17:50',
          principle:
            'Test both movie orders starting at or after 11:30 and compare the final ending times.',
          solution:
            'Evaluate both possible orders after arriving at 11:30:\n1. **Adventure Park first:** Start at 12:00 ($+115$ min $= 1$ h $55$ min) $\\to$ finish at 13:55. The next *Monster Land* show is at 16:10 ($+105$ min $= 1$ h $45$ min) $\\to$ finish at 17:55.\n2. **Monster Land first:** They missed 11:00, so they start at 12:55 ($+105$ min) $\\to$ finish at 14:40. The next *Adventure Park* show is at 15:55 ($+115$ min) $\\to$ finish at 17:50.\n\nComparing 17:50 and 17:55, the earliest completion time is 17:50.',
          rubric: [
            { code: 'M1', text: 'Computes end times for both orders (17:55 and 17:50).' },
            { code: 'A1', text: 'Finds earliest finish time 17:50, option C.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Which of the following figures has the largest fraction of its area shaded?\n\nA. Figure A\nB. Figure B\nC. Figure C\nD. Figure D\nE. Figure E',
          figures: [
            {
              src: '/papers/sasmo-2019-g4/fig-14.webp',
              alt: 'Five grid-based geometric figures labeled A through E, each partially shaded with gray squares and triangles.',
              caption: 'Five shaded grid figures A through E for Question 14.'
            }
          ],
          answer: 'D. Figure D',
          principle:
            'Measure shaded and total areas in unit grid squares, then compare the resulting fractions using a common denominator.',
          solution:
            'Let $1$ small grid square equal $1$ area unit:\n- **Figure A:** Total $= 4\\frac{1}{2}$ units; shaded $= 1 + \\frac{1}{2} + \\frac{1}{2} + \\frac{1}{2} = 2\\frac{1}{2}$ units $\\implies \\frac{2.5}{4.5} = \\frac{5}{9}$.\n- **Figure B:** Total $= 8$ units ($2 \\times 4$); shaded $= 1 + 1 + 1 + 1 = 4$ units $\\implies \\frac{4}{8} = \\frac{1}{2}$.\n- **Figure C:** Total $= 9$ units ($3 \\times 3$); shaded $= 5$ units $\\implies \\frac{5}{9}$.\n- **Figure D:** Total $= 16$ units ($4 \\times 4$); shaded $= 2 + 3 + 3 + 2 = 10$ units $\\implies \\frac{10}{16} = \\frac{5}{8}$.\n- **Figure E:** Total $= 32$ units ($4 \\times 8$); unshaded right triangles have areas $\\frac{4 \\times 1}{2} = 2$, $\\frac{2 \\times 7}{2} = 7$, and $\\frac{2 \\times 6}{2} = 6$, so shaded $= 32 - (2 + 7 + 6) = 17$ units $\\implies \\frac{17}{32}$.\n\nComparing fractions: $\\frac{5}{8} = \\frac{20}{32} > \\frac{17}{32}$, $\\frac{5}{8} > \\frac{5}{9}$, and $\\frac{5}{8} > \\frac{4}{8} = \\frac{1}{2}$. Thus Figure D has the largest shaded fraction.',
          rubric: [
            { code: 'M1', text: 'Computes the shaded fraction for each figure ($\\frac{5}{9}, \\frac{1}{2}, \\frac{5}{9}, \\frac{5}{8}, \\frac{17}{32}$).' },
            { code: 'A1', text: 'Identifies $\\frac{5}{8}$ in Figure D as largest, option D.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Study the picture below.\n\nWhich toy is the heaviest?\n\nA. Car\nB. Train\nC. Ship\nD. Submarine\nE. Impossible to know',
          figures: [
            {
              src: '/papers/sasmo-2019-g4/fig-15.webp',
              alt: 'Three balanced scales showing: one ship and one car balancing two trains; two ships balancing one train and one submarine; and two trains balancing three ships.',
              caption: 'Three balanced toy scales for Question 15.'
            }
          ],
          answer: 'A. Car',
          principle:
            'Express all toy weights in terms of one common toy using the three balance equations.',
          solution:
            'From the three balanced scales:\n1. $2\\text{ Trains} = 3\\text{ Ships}$, so $1\\text{ Train} = 1.5\\text{ Ships}$ (a Train is heavier than a Ship).\n2. $2\\text{ Ships} = 1\\text{ Train} + 1\\text{ Submarine} = 1.5\\text{ Ships} + 1\\text{ Submarine}$, so $1\\text{ Submarine} = 0.5\\text{ Ships}$.\n3. $1\\text{ Ship} + 1\\text{ Car} = 2\\text{ Trains} = 3\\text{ Ships}$, so $1\\text{ Car} = 2\\text{ Ships}$.\n\nOrdering by weight in units of $1\\text{ Ship}$: Car ($2$) $>$ Train ($1.5$) $>$ Ship ($1$) $>$ Submarine ($0.5$). Hence the Car is the heaviest.',
          rubric: [
            { code: 'M1', text: 'Uses the three balances to express Train ($1.5S$), Submarine ($0.5S$), and Car ($2S$) in terms of Ship ($S$).' },
            { code: 'A1', text: 'Concludes the Car is heaviest, option A.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Short Answer',
      marks: 40,
      stem: 'Solve each problem and write down the exact numerical answer (10 questions, 4 marks each).',
      parts: [
        {
          label: '16',
          marks: 4,
          prompt:
            'Find the sum of the whole numbers from $31$ to $41$:\n$$31 + 32 + 33 + \\dots + 40 + 41$$',
          answer: '$396$',
          principle:
            'Pair numbers symmetrically from both ends so each pair has the same sum, or multiply the count of terms by the middle number.',
          solution:
            'There are $11$ consecutive whole numbers from $31$ to $41$. Pairing opposite ends around the middle term $36$ gives $5$ pairs summing to $72$:\n$$(31 + 41) + (32 + 40) + (33 + 39) + (34 + 38) + (35 + 37) + 36$$\n$$= 5 \\times 72 + 36 = 360 + 36 = 396.$$\n(Equivalently, $11 \\times 36 = 396$.)',
          rubric: [
            { code: 'M2', text: 'Groups the $11$ terms into $5$ pairs of $72$ plus $36$ (or multiplies the count $11$ by the average $36$).' },
            { code: 'A2', text: 'Computes $396$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'The big square on the right is made up of $8$ identical rectangles and $1$ small square. The width of the rectangle is $2\\text{ cm}$ and the area of the small square is $64\\text{ cm}^2$. Find the perimeter, in $\\text{cm}$, of the big square.',
          figures: [
            {
              src: '/papers/sasmo-2019-g4/fig-17.webp',
              alt: 'A large square composed of eight identical rectangles arranged around a central small square, with the width of one rectangle labeled 2 cm.',
              caption: 'Composite square of eight rectangles and one small square for Question 17.'
            }
          ],
          answer: '$48\\text{ cm}$',
          principle:
            'Find the side length of the inner square from its area, then add the rectangle widths on opposite sides to get the outer square side length.',
          solution:
            'Since the area of the small central square is $64\\text{ cm}^2$ and $8 \\times 8 = 64$, its side length is $8\\text{ cm}$.\nEach side of the big square spans the small square plus one rectangle width of $2\\text{ cm}$ on each side:\n$$\\text{Side of big square} = 2 + 8 + 2 = 12\\text{ cm}.$$\nTherefore, the perimeter of the big square is:\n$$4 \\times 12 = 48\\text{ cm}.$$',
          rubric: [
            { code: 'M2', text: 'Finds the small square side $8\\text{ cm}$ and adds $2\\text{ cm} + 8\\text{ cm} + 2\\text{ cm} = 12\\text{ cm}$ for the big square side.' },
            { code: 'A2', text: 'Computes perimeter $48\\text{ cm}$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'Find the smallest $3$-digit number such that the product of all its digits is also a $3$-digit number.',
          answer: '$269$',
          principle:
            'Minimize digits from left to right (hundreds, tens, then ones) while ensuring the maximum possible product with the remaining digits is at least $100$.',
          solution:
            'A $3$-digit product must be at least $100$. Minimize each digit starting from the hundreds place:\n- **Hundreds digit:** If it were $1$, the greatest possible product would be $1 \\times 9 \\times 9 = 81 < 100$. Thus the smallest possible hundreds digit is $2$.\n- **Tens digit:** If it were $5$ or less, the greatest possible product would be at most $2 \\times 5 \\times 9 = 90 < 100$. Thus the smallest possible tens digit is $6$.\n- **Ones digit:** With $2$ and $6$, we need $2 \\times 6 \\times d = 12d \\ge 100$. Since $12 \\times 8 = 96 < 100$ and $12 \\times 9 = 108 \\ge 100$, the smallest ones digit is $9$.\n\nHence the smallest such $3$-digit number is $269$.',
          rubric: [
            { code: 'M2', text: 'Determines minimum hundreds digit $2$ (since $1 \\times 9 \\times 9 = 81$) and minimum tens digit $6$ (since $2 \\times 5 \\times 9 = 90$).' },
            { code: 'A2', text: 'Finds ones digit $9$ ($2 \\times 6 \\times 9 = 108$), giving $269$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'Some children are in a summer camp. If the children are divided into groups of $7$, then each child will be in a group. If the children are divided into groups of $9$, then $2$ children will be left out. What is the smallest possible number of children in the summer camp?',
          answer: '$56$',
          principle:
            'List numbers leaving remainder $2$ when divided by $9$ in ascending order and locate the first multiple of $7$.',
          solution:
            'Let $N$ be the number of children. Since $N$ divides evenly into groups of $7$, $N$ is a multiple of $7$.\nSince dividing by $9$ leaves $2$ children out, $N$ is $2$ more than a multiple of $9$:\n$$11, 20, 29, 38, 47, 56, 65, \\dots$$\nChecking each candidate for divisibility by $7$, the smallest multiple of $7$ in the list is $56$ ($56 = 7 \\times 8$ and $56 = 9 \\times 6 + 2$).',
          rubric: [
            { code: 'M2', text: 'Lists positive integers leaving remainder $2$ modulo $9$ ($11, 20, 29, 38, 47, 56, \\dots$) and tests divisibility by $7$.' },
            { code: 'A2', text: 'Finds $56$ children.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'The following bar chart shows the amount of money Mary spent, in dollars, in the first $5$ days of the last week. All the horizontal lines are equally spaced. The day with the second highest amount of money spent and the day with the lowest amount of money spent differs by $60$ dollars. On the following Saturday, Mary spent $\\frac{1}{5}$ of the total amount of money spent from Monday to Friday. How much did she spend on Saturday?',
          figures: [
            {
              src: '/papers/sasmo-2019-g4/fig-20.webp',
              alt: 'Bar chart of money spent in dollars from Monday to Friday across equally spaced horizontal grid lines, showing bar heights of 2, 4, 3, 5, and 1 grid units respectively.',
              caption: 'Daily spending bar chart from Monday to Friday for Question 20.'
            }
          ],
          answer: '$60$ dollars',
          principle:
            'Express each bar height in grid-line units, find the dollar value of $1$ unit from the given difference, and take $\\frac{1}{5}$ of the five-day total.',
          solution:
            'Let $1$ vertical grid spacing equal $1$ unit. Reading the heights from the horizontal lines:\n- Monday: $2$ units\n- Tuesday: $4$ units (second highest)\n- Wednesday: $3$ units\n- Thursday: $5$ units (highest)\n- Friday: $1$ unit (lowest)\n\nThe difference between Tuesday and Friday is $4 - 1 = 3$ units, so:\n$$3\\text{ units} = 60\\text{ dollars} \\implies 1\\text{ unit} = 20\\text{ dollars}.$$\nThe total spent from Monday to Friday is:\n$$(2 + 4 + 3 + 5 + 1)\\text{ units} = 15\\text{ units} = 15 \\times 20 = 300\\text{ dollars}.$$\nOn Saturday, Mary spent $\\frac{1}{5} \\times 300 = 60$ dollars.',
          rubric: [
            { code: 'M2', text: 'Reads the five bar heights ($2, 4, 3, 5, 1$ units), finds $1\\text{ unit} = 60 \\div 3 = 20$ dollars, and computes the five-day total $300$ dollars.' },
            { code: 'A2', text: 'Computes Saturday spending $\\frac{1}{5} \\times 300 = 60$ dollars.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'Originally, there were equal numbers of tables and chairs in a shop. After selling away $42$ tables and bringing in $24$ chairs, the number of chairs becomes $4$ times as many as tables. How many chairs were there in the shop originally?',
          answer: '$64$',
          principle:
            'Track the difference created between chairs and tables ($42 + 24$) and equate it to $4 - 1 = 3$ final table-units.',
          solution:
            'Originally, tables and chairs were equal in number. Removing $42$ tables and adding $24$ chairs creates a difference of:\n$$42 + 24 = 66$$\nbetween the final number of chairs and the final number of tables.\nSince chairs are now $4$ times tables, letting the final number of tables be $1$ unit gives $4$ units of chairs, so the difference is $4 - 1 = 3$ units:\n$$3\\text{ units} = 66 \\implies 1\\text{ unit} = 22\\text{ tables remaining}.$$\nAdding back the $42$ tables sold gives the original number of tables (and chairs):\n$$22 + 42 = 64.$$\nCheck: $64 - 42 = 22$ tables and $64 + 24 = 88 = 4 \\times 22$ chairs.',
          rubric: [
            { code: 'M2', text: 'Sets up the difference $3\\text{ units} = 42 + 24 = 66$ to find $22$ remaining tables.' },
            { code: 'A2', text: 'Adds $42$ to obtain $64$ original chairs.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'January 23, 2019 can be written as $8$-digit date format `23/01/2019`. September 2, 2019 can be written as $8$-digit date format `02/09/2019`. How many digit `3` are there in all $8$-digit dates of the year 2019?\n(For example, the date `30/03/2019` consists of two `3` digits.)',
          answer: '$85$',
          principle:
            'Count occurrences of the digit `3` separately across the year field, the month field, and the day field for all $12$ months of the non-leap year 2019.',
          solution:
            'Count the digit `3` in each part of `dd/mm/2019` across all $365$ days of 2019:\n- **Year (`2019`):** $0$ occurrences.\n- **Month (`mm`):** Only March (`03`) contains `3`, contributing $1$ digit `3` on each of its $31$ days $\\implies 31$ occurrences.\n- **Day (`dd`):**\n  - Seven $31$-day months (Jan, Mar, May, Jul, Aug, Oct, Dec) each contain `03`, `13`, `23`, `30`, `31` ($5$ times each): $7 \\times 5 = 35$.\n  - Four $30$-day months (Apr, Jun, Sep, Nov) each contain `03`, `13`, `23`, `30` ($4$ times each): $4 \\times 4 = 16$.\n  - February (28 days in 2019) contains `03`, `13`, `23`: $3$.\n\nTotal number of `3` digits:\n$$0 + 31 + 35 + 16 + 3 = 85.$$',
          rubric: [
            { code: 'M2', text: 'Counts `3` in the month field ($31$ from March) and day field across $31$-day ($35$), $30$-day ($16$), and $28$-day ($3$) months.' },
            { code: 'A2', text: 'Obtains total $85$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'In the following, all the different letters stand for different digits. What is the value of the $4$-digit number $BDEC$?\n$$\\begin{array}{rrrrr} & C & B & C & D \\\\ + & C & D & B & C \\\\ \\hline & B & D & E & C \\end{array}$$',
          answer: '$9034$',
          principle:
            'Analyze each column from ones to thousands, tracking carryovers and enforcing that distinct letters represent distinct digits.',
          solution:
            'Examine the column addition $CBCD + CDBC = BDEC$:\n1. **Ones column:** $D + C$ ends in $C$, so $D = 0$ with no carryover.\n2. **Hundreds column:** $B + D$ (plus any carry from the tens column) ends in $D = 0$. Since $D = 0$, $B + 0$ cannot be $0$ (as $B \\neq D$ and $B$ leads $BDEC$). Thus there must be a carryover of $1$ from the tens column, giving $B + 1 = 10 \\implies B = 9$, with a carryover of $1$ into the thousands column.\n3. **Thousands column:** $C + C + 1 = B = 9$, which gives $2C = 8 \\implies C = 4$.\n4. **Tens column:** $C + B = 4 + 9 = 13$, which gives $E = 3$ and matches the required carryover of $1$ into the hundreds column.\n\nCheck: $4940 + 4094 = 9034$, using distinct digits $B=9, D=0, E=3, C=4$. Thus $BDEC = 9034$.',
          rubric: [
            { code: 'M2', text: 'Deduces $D = 0$ from the ones column, $B = 9$ with a tens carryover from the hundreds column, and $C = 4$ from the thousands column.' },
            { code: 'A2', text: 'Finds $E = 3$ and $BDEC = 9034$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'Four $2$-digit numbers are made up from the digits $1, 2, 3, \\dots, 8$ with no repetition. The following are the hints about these numbers:\n- In the smallest number, the ones digit is twice the tens digit.\n- In the largest number, the sum of ones and tens digits is $9$.\n- In the second largest number, the tens digit is $5$ more than the ones digit.\n- There is only $1$ odd number among these $4$ numbers.\n\nFind the second smallest number.',
          answer: '$54$',
          principle:
            'List candidates for the smallest, largest, and second largest numbers, then enforce ordering, non-repeating digits, and having exactly one odd number.',
          solution:
            'Use the digits $\\{1, 2, 3, 4, 5, 6, 7, 8\\}$ once each:\n- **Smallest:** ones digit $= 2 \\times$ tens digit $\\implies$ candidates are $12, 24, 36, 48$ (all even).\n- **Second largest:** tens digit $=$ ones digit $+ 5 \\implies$ candidates are $61, 72, 83$.\n- **Largest:** digit sum $= 9 \\implies$ candidates are $18, 27, 36, 45, 54, 63, 72, 81$. Since it exceeds the second largest ($\\ge 61$), it must be $72$ or $81$ (which also rules out $83$ for the second largest).\n\nTest the two choices for the largest number:\n1. If the largest is $72$, the second largest must be $61$ (odd). The remaining digits $\\{3, 4, 5, 8\\}$ force the smallest to be $48$, leaving $\\{3, 5\\}$ for the second smallest, which must be odd ($53$). That creates two odd numbers ($61$ and $53$), contradicting the fourth hint.\n2. Hence the largest is $81$ (odd), and the second largest must be $72$ (even). Since $81$ is already the unique odd number, all three other numbers must be even. From the remaining digits $\\{3, 4, 5, 6\\}$, the smallest is $36$ (the only remaining option with ones $= 2 \\times$ tens). The final two digits $\\{4, 5\\}$ must form an even number, which is $54$.\n\nCheck: $36 < 54 < 72 < 81$ uses digits $1$–$8$ once each, with $81$ as the sole odd number. Thus the second smallest number is $54$.',
          rubric: [
            { code: 'M2', text: 'Narrows the largest number to $72$ or $81$, eliminates $72$ via the single-odd-number constraint, and determines $81, 72, 36$.' },
            { code: 'A2', text: 'Forms the even number $54$ from the remaining digits $\\{4, 5\\}$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'Tom had Lego blocks. He lost $4$ pieces at home and then gave $\\frac{1}{4}$ of the remaining to his friend Gary. After that, $3$ pieces got lost, then he gave $\\frac{1}{3}$ of the new remaining to another friend Fiona. Another $2$ pieces were lost, and then he gave half of the new remaining to his brother. At the end, Tom has $19$ Lego blocks left. How many Lego blocks did Tom have originally?',
          answer: '$88$',
          principle:
            'Work backwards step by step, inverting each fractional giveaway before inverting each loss.',
          solution:
            'Reverse Tom’s steps from the final $19$ blocks:\n1. **Before giving half to his brother:** $19$ was $\\frac{1}{2}$, so he had $19 \\times 2 = 38$ blocks. Before losing $2$ pieces, he had $38 + 2 = 40$ blocks.\n2. **Before giving $\\frac{1}{3}$ to Fiona:** $40$ was $\\frac{2}{3}$ of what he had before Fiona’s share, so he had $(40 \\div 2) \\times 3 = 60$ blocks. Before losing $3$ pieces, he had $60 + 3 = 63$ blocks.\n3. **Before giving $\\frac{1}{4}$ to Gary:** $63$ was $\\frac{3}{4}$ of what he had before Gary’s share, so he had $(63 \\div 3) \\times 4 = 84$ blocks. Before losing $4$ pieces at home, he had $84 + 4 = 88$ blocks.\n\nTom originally had $88$ Lego blocks.',
          rubric: [
            { code: 'M2', text: 'Works backwards through all three stages: $19 \\to 40 \\to 63 \\to 88$.' },
            { code: 'A2', text: 'Obtains $88$ Lego blocks.' }
          ]
        }
      ]
    }
  ]
};
