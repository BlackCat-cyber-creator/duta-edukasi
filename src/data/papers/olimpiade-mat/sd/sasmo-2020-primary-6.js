/**
 * Paket Soal: SASMO 2020 Primary 6 (Grade 6)
 * Sumber: Singapore and Asian Schools Math Olympiad 2020, Primary 6 Contest (2020-SASMO-G6.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 4, 6, 9, 13, 17, dan 23 dilengkapi diagram crop .webp.
 */
export default {
  id: 'sasmo-2020-g6',
  slug: 'sasmo-2020-primary-6',
  subject: 'olimpiade-mat',
  grade: 6,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'SASMO 2020 Primary 6 (Grade 6): arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'sd6-bab1-pecahan-desimal',
    'sd6-bab2-rasio',
    'sd6-bab3-kubus-balok',
    'sd6-bab4-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2020 Primary 6 (Grade 6)',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Diagrams for Questions 4, 6, 9, 13, 17, and 23 are provided as figures.',
  source: {
    org: 'SASMO',
    file: '2020-SASMO-G6.pdf',
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
            'Find the value of the following.\n$$2020 \\times 2020 - 2019 \\times 2021$$\n\nA. $2020$\nB. $4040$\nC. $1$\nD. $2$\nE. None of the above',
          answer: 'C. $1$',
          principle:
            'Use the difference of squares identity $(n - 1)(n + 1) = n^2 - 1$ with $n = 2020$.',
          solution:
            'Rewrite $2019$ as $2020 - 1$ and $2021$ as $2020 + 1$:\n$$2020 \\times 2020 - 2019 \\times 2021 = 2020^2 - (2020 - 1)(2020 + 1)$$\n$$= 2020^2 - (2020^2 - 1) = 1.$$',
          rubric: [
            { code: 'M1', text: 'Rewrites $2019 \\times 2021$ as $(2020 - 1)(2020 + 1) = 2020^2 - 1$.' },
            { code: 'A1', text: 'Evaluates to $1$, option C.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'What is the next number in the following pattern?\n$$1, 2, 6, 15, 31, 56, \\ldots$$\n\nA. $92$\nB. $81$\nC. $105$\nD. $78$\nE. None of the above',
          answer: 'A. $92$',
          principle:
            'Compute consecutive differences to reveal the sequence of perfect squares.',
          solution:
            'Calculate the differences between consecutive terms:\n$$2 - 1 = 1 = 1^2, \\quad 6 - 2 = 4 = 2^2, \\quad 15 - 6 = 9 = 3^2,$$\n$$31 - 15 = 16 = 4^2, \\quad 56 - 31 = 25 = 5^2.$$\nFollowing this pattern, the next difference is $6^2 = 36$, so the next number is:\n$$56 + 36 = 92.$$',
          rubric: [
            { code: 'M1', text: 'Identifies the consecutive differences as $1^2, 2^2, 3^2, 4^2, 5^2$.' },
            { code: 'A1', text: 'Adds $6^2 = 36$ to $56$ to obtain $92$, option A.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'In a supermarket, the chicken nuggets are only available in packs of either $3$ or $7$ nuggets. For example, you cannot purchase exactly $2$, $5$ or $8$ nuggets. What is the largest number of chicken nuggets that one cannot purchase?\n\nA. $231$\nB. $721$\nC. $23$\nD. $13$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Find three consecutive achievable totals (equal to the smaller pack size, $3$), from which every larger integer can be formed by adding packs of $3$; alternatively use $ab - a - b$ for coprime $a$ and $b$.',
          solution:
            'Notice that we can purchase three consecutive totals:\n$$12 = 3 \\times 4, \\qquad 13 = 3 \\times 2 + 7, \\qquad 14 = 7 \\times 2.$$\nBy adding packs of $3$ nuggets to $12$, $13$, and $14$, every integer greater than or equal to $12$ can be purchased ($15 = 12 + 3$, $16 = 13 + 3$, $17 = 14 + 3$, and so on).\nChecking $11$: using $0$ packs of $7$ gives multiples of $3$ (not $11$), and using $1$ pack of $7$ leaves $11 - 7 = 4$ (not a multiple of $3$). Thus $11$ cannot be purchased.\nSince $11$ is not listed among options A–D, the answer is E (None of the above).',
          rubric: [
            { code: 'M1', text: 'Establishes that $12, 13, 14$ (and hence all integers $\\ge 12$) are achievable while $11$ is not.' },
            { code: 'A1', text: 'Concludes the largest unpurchasable number is $11$, option E.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'In the diagram, the unshaded area is made of $4$ semicircles touching at the centre of the large circle. If the diameter of the large circle is $28\\text{ cm}$, find the area of the shaded region. (Use $\\pi = \\frac{22}{7}$)\n\nA. $616\\text{ cm}^2$\nB. $462\\text{ cm}^2$\nC. $308\\text{ cm}^2$\nD. $154\\text{ cm}^2$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g6/fig-4.webp',
              alt: 'A large circle divided by four unshaded semicircles that meet at the centre, leaving four symmetric shaded regions.',
              caption: 'Shaded circle diagram for Question 4.'
            }
          ],
          answer: 'C. $308\\text{ cm}^2$',
          principle:
            'Subtract the area of the $4$ unshaded semicircles (equivalent to $2$ smaller circles of radius $\\frac{28}{4} = 7\\text{ cm}$) from the area of the large circle.',
          solution:
            'The large circle has diameter $28\\text{ cm}$, so its radius is $R = 28 \\div 2 = 14\\text{ cm}$. Its area is:\n$$\\pi R^2 = \\frac{22}{7} \\times 14^2 = \\frac{22}{7} \\times 196 = 616\\text{ cm}^2.$$\nEach of the $4$ unshaded semicircles has diameter equal to the radius $14\\text{ cm}$ of the large circle, so its radius is $r = 14 \\div 2 = 7\\text{ cm}$. Pairing the $4$ semicircles gives $2$ full circles of radius $7\\text{ cm}$, with total unshaded area:\n$$2 \\times \\pi r^2 = 2 \\times \\frac{22}{7} \\times 7^2 = 2 \\times 154 = 308\\text{ cm}^2.$$\nTherefore, the shaded area is:\n$$616 - 308 = 308\\text{ cm}^2.$$',
          rubric: [
            { code: 'M1', text: 'Finds large circle area $616\\text{ cm}^2$ and unshaded area of $2$ circles of radius $7\\text{ cm}$ ($308\\text{ cm}^2$).' },
            { code: 'A1', text: 'Computes shaded area $308\\text{ cm}^2$, option C.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'James has tiles of size $3\\text{ cm} \\times 7\\text{ cm}$. He wants to put them on the floor of size $23\\text{ cm} \\times 10\\text{ cm}$. What is the largest number of tiles that he can put without overlapping or breaking of any tiles?\n\nA. $10$\nB. $9$\nC. $8$\nD. $7$\nE. None of the above',
          answer: 'A. $10$',
          principle:
            'Compare the total floor area with the area of one tile to get an upper bound, then construct an explicit non-overlapping tiling that achieves it.',
          solution:
            'The floor has area $23 \\times 10 = 230\\text{ cm}^2$, and each tile has area $3 \\times 7 = 21\\text{ cm}^2$. Since:\n$$230 = 21 \\times 10 + 20,$$\nat most $10$ tiles can fit on the floor.\nThis maximum of $10$ tiles can be achieved by splitting the $23\\text{ cm}$ width into $14\\text{ cm} + 9\\text{ cm}$:\n1. On the left $14\\text{ cm} \\times 10\\text{ cm}$ section, place $2$ columns of $3$ horizontal $7\\text{ cm} \\times 3\\text{ cm}$ tiles ($2 \\times 3 = 6$ tiles, occupying $14\\text{ cm} \\times 9\\text{ cm}$).\n2. On the right $9\\text{ cm} \\times 10\\text{ cm}$ section, place $3$ vertical $3\\text{ cm} \\times 7\\text{ cm}$ tiles side by side at the bottom ($9\\text{ cm} \\times 7\\text{ cm}$), and $1$ horizontal $7\\text{ cm} \\times 3\\text{ cm}$ tile in the remaining $9\\text{ cm} \\times 3\\text{ cm}$ space above them.\n\nTotal tiles placed: $6 + 3 + 1 = 10$.',
          rubric: [
            { code: 'M1', text: 'Establishes the area upper bound $\\lfloor 230 / 21 \\rfloor = 10$ and provides a valid $10$-tile packing.' },
            { code: 'A1', text: 'Largest number of tiles is $10$, option A.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'The following bar chart shows the responses made by SASMO Primary 6 students in a multiple-choice question. All the horizontal lines are equally spaced. Each student selected one of the possible choices and the correct answer is C. Find the percentage of students who answered this question correctly.\n\nA. $25\\%$\nB. $16\\%$\nC. $24\\%$\nD. $20\\%$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g6/fig-6.webp',
              alt: "Bar chart titled Primary 6 students' responses showing five vertical bars labeled A, B, C, D, and E across equally spaced horizontal gridlines.",
              caption: 'Bar chart of Primary 6 student responses for Question 6.'
            }
          ],
          answer: 'D. $20\\%$',
          principle:
            'Read each bar height in grid-spacing units and divide the units for C by the total number of units.',
          solution:
            'Taking $1$ vertical grid interval as $1$ unit, the heights of the five bars are:\n- A: $6$ units\n- B: $2$ units\n- C: $4$ units\n- D: $5$ units\n- E: $3$ units\n\nTotal units across all students:\n$$6 + 2 + 4 + 5 + 3 = 20\\text{ units}.$$\nSince C is the correct answer ($4$ units), the percentage of students who answered correctly is:\n$$\\frac{4}{20} \\times 100\\% = 20\\%.$$',
          rubric: [
            { code: 'M1', text: 'Reads the bar heights as $6, 2, 4, 5, 3$ units summing to $20$ units.' },
            { code: 'A1', text: 'Calculates $\\frac{4}{20} = 20\\%$, option D.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'Working alone, Ryan can dig a $5\\text{ m}$ by $5\\text{ m}$ by $5\\text{ m}$ hole in six hours. Castel can dig a $10\\text{ m}$ by $10\\text{ m}$ by $5\\text{ m}$ hole in twelve hours. How many hours would it take them to dig a $5\\text{ m}$ by $5\\text{ m}$ by $5\\text{ m}$ hole if they worked together?\n\nA. $4$\nB. $1$\nC. $2$\nD. $3$\nE. None of the above',
          answer: 'C. $2$',
          principle:
            'Compute each person’s digging rate in $\\text{m}^3/\\text{hour}$, add the rates, and divide the target volume by the combined rate.',
          solution:
            'Find each worker’s rate in cubic metres per hour:\n- Ryan digs $5 \\times 5 \\times 5 = 125\\text{ m}^3$ in $6$ hours, so his rate is $\\frac{125}{6}\\text{ m}^3/\\text{h}$.\n- Castel digs $10 \\times 10 \\times 5 = 500\\text{ m}^3$ in $12$ hours, so his rate is $\\frac{500}{12} = \\frac{250}{6}\\text{ m}^3/\\text{h}$.\n\nWorking together, their combined rate is:\n$$\\frac{125}{6} + \\frac{250}{6} = \\frac{375}{6}\\text{ m}^3/\\text{h}.$$\nThus, the time to dig a $125\\text{ m}^3$ hole together is:\n$$125 \\div \\frac{375}{6} = 125 \\times \\frac{6}{375} = 2\\text{ hours}.$$',
          rubric: [
            { code: 'M1', text: 'Finds Ryan’s rate $\\frac{125}{6}\\text{ m}^3/\\text{h}$ and Castel’s rate $\\frac{250}{6}\\text{ m}^3/\\text{h}$, summing to $\\frac{375}{6}\\text{ m}^3/\\text{h}$.' },
            { code: 'A1', text: 'Computes $2$ hours, option C.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'The five-digit number $A549B$ is divisible by $45$. Find the value of $A + B$.\n\nA. $0$\nB. $9$\nC. $18$\nD. $27$\nE. None of the above',
          answer: 'B. $9$',
          principle:
            'Because $45 = 5 \\times 9$ and $\\gcd(5, 9) = 1$, a number is divisible by $45$ if and only if it is divisible by both $5$ and $9$.',
          solution:
            'Since $A549B$ is divisible by $45$, it must be divisible by both $5$ and $9$:\n1. Divisibility by $5$ implies the last digit is $B = 0$ or $B = 5$.\n2. Divisibility by $9$ implies the digit sum $A + 5 + 4 + 9 + B = A + B + 18$ is divisible by $9$, so $A + B$ must be divisible by $9$.\n\nSince $A$ is a nonzero leading digit ($1 \\le A \\le 9$) and $B \\in \\{0, 5\\}$, the maximum possible value of $A + B$ is $9 + 5 = 14 < 18$.\nTherefore, the only multiple of $9$ that $A + B$ can equal is $9$ (achieved by $A = 9, B = 0$ or $A = 4, B = 5$).',
          rubric: [
            { code: 'M1', text: 'Applies divisibility by $5$ ($B \\in \\{0, 5\\}$) and divisibility by $9$ ($9 \\mid A + B$).' },
            { code: 'A1', text: 'Rules out $A + B = 18$ and concludes $A + B = 9$, option B.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'Which cube below has a top view same as the clock on the right?',
          figures: [
            {
              src: '/papers/sasmo-2020-g6/fig-9.webp',
              alt: 'A circular analog clock face with Roman numerals at the top right, alongside five red cubes labeled A, B, C, D, and E with different top clock-face orientations.',
              caption: 'Clock face and five candidate cubes for Question 9.'
            }
          ],
          answer: 'D',
          principle:
            'Compare the relative positions of the hour hand, minute hand, second hand, and the small sub-dial on the target clock with the top face of each cube (up to rotation).',
          solution:
            'Inspect the features of the reference clock face:\n- The hour hand (shorter thick hand) points to $\\text{II}$.\n- The minute hand (longer thick hand) points to $\\text{XII}$.\n- The thin second hand points just before $\\text{XII}$ (between $\\text{XI}$ and $\\text{XII}$).\n- The small circular sub-dial lies near $\\text{VII}$ and $\\text{VIII}$.\n\nCheck each cube:\n- **A:** Incorrect, because the thin second hand is between $\\text{V}$ and $\\text{VI}$.\n- **B:** Incorrect, because the small sub-dial is next to $\\text{V}$ and $\\text{VI}$.\n- **C:** Incorrect, because the hour hand points to $\\text{VI}$.\n- **E:** Incorrect, because the minute hand points to $\\text{II}$.\n\nOnly **D** matches all hand positions and the sub-dial location (rotated clockwise on the cube’s top face).',
          rubric: [
            { code: 'M1', text: 'Eliminates A, B, C, and E by checking the hands and sub-dial against the Roman numerals.' },
            { code: 'A1', text: 'Identifies cube D as matching the clock face.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'Stacy bought a pack of M&M chips. After she ate some, the ratio of the number of chips she ate to the number of remaining chips in the pack was $3 : 5$. If she eats $50$ chips more, then the new ratio will be $7 : 5$. How many M&M chips were there in the pack when Stacy bought it?\n\nA. $10$\nB. $150$\nC. $240$\nD. $140$\nE. None of the above',
          answer: 'C. $240$',
          principle:
            'Keep the total number of chips constant across both ratios by scaling to a common total number of parts.',
          solution:
            'The total number of chips in the pack stays constant:\n- Initially, $\\text{Eaten} : \\text{Remaining} = 3 : 5$, so the total is $3 + 5 = 8$ parts.\n- After eating $50$ more chips, $\\text{Eaten} : \\text{Remaining} = 7 : 5$, so the total is $7 + 5 = 12$ parts.\n\nScale both ratios to the common total $\\text{lcm}(8, 12) = 24$ (or $48$) units. Using $24$ units:\n- Initially: $\\text{Eaten} : \\text{Remaining} : \\text{Total} = 9 : 15 : 24$.\n- Afterward: $\\text{Eaten} : \\text{Remaining} : \\text{Total} = 14 : 10 : 24$.\n\nThe eaten amount increased by $14 - 9 = 5$ units, which corresponds to $50$ chips:\n$$5\\text{ units} = 50 \\implies 1\\text{ unit} = 10\\text{ chips}.$$\nTherefore, the total number of chips in the pack originally was:\n$$24 \\times 10 = 240.$$',
          rubric: [
            { code: 'M1', text: 'Equalizes the total parts in both ratios ($9:15:24$ and $14:10:24$) and equates $5\\text{ units} = 50$.' },
            { code: 'A1', text: 'Finds $240$ chips, option C.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'The minute hand of a certain clock is $3$ times as long as the hour hand. In $24$ hours, the tips of hour and minute hands travelled $1036 \\times \\pi\\text{ cm}$ in total. How long is the hour hand of the clock? (Use $\\pi = \\frac{22}{7}$)\n\nA. $7\\text{ cm}$\nB. $21\\text{ cm}$\nC. $14\\text{ cm}$\nD. $7.5\\text{ cm}$\nE. None of the above',
          answer: 'A. $7\\text{ cm}$',
          principle:
            'In $24$ hours, the hour hand completes $2$ full revolutions while the minute hand completes $24$ full revolutions.',
          solution:
            'Let the length of the hour hand be $r\\text{ cm}$, so the length of the minute hand is $3r\\text{ cm}$.\n- In $24$ hours, the hour hand makes $2$ full revolutions of radius $r$, travelling $2 \\times (2\\pi r) = 4\\pi r\\text{ cm}$.\n- In $24$ hours, the minute hand makes $24$ full revolutions of radius $3r$, travelling $24 \\times (2\\pi \\cdot 3r) = 144\\pi r\\text{ cm}$.\n\nAdding both distances:\n$$4\\pi r + 144\\pi r = 148\\pi r = 1036\\pi.$$\nDividing both sides by $\\pi$:\n$$148r = 1036 \\implies r = 1036 \\div 148 = 7\\text{ cm}.$$',
          rubric: [
            { code: 'M1', text: 'Counts $2$ revolutions for the hour hand and $24$ for the minute hand to form $148\\pi r = 1036\\pi$.' },
            { code: 'A1', text: 'Solves $r = 7\\text{ cm}$, option A.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'In Mathematics, the product of the first $n$ positive integers is written as $n! = n \\times (n - 1) \\times \\dots \\times 1$. For example, $2! = 2 \\times 1$ and $7! = 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1$. How many consecutive digit "$0$"s at the end of $8! + 9!$ are there?\n\nA. $0$\nB. $2$\nC. $1$\nD. $3$\nE. None of the above',
          answer: 'B. $2$',
          principle:
            'Factor out $8!$ from $8! + 9!$ and count the factors of $10 = 2 \\times 5$.',
          solution:
            'Factor out $8!$ from the sum:\n$$8! + 9! = 8! \\times 1 + 8! \\times 9 = 8! \\times (1 + 9) = 8! \\times 10.$$\nIn $8! = 8 \\times 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1$, there is only one factor of $5$ (and more than one factor of $2$), so $8!$ ends in exactly $1$ trailing zero ($8! = 40320$).\nMultiplying by $10$ appends one more trailing zero, giving $2$ consecutive zeros at the end of $8! + 9!$.',
          rubric: [
            { code: 'M1', text: 'Factors $8! + 9! = 8! \\times 10$ and counts one factor of $5$ inside $8!$.' },
            { code: 'A1', text: 'Concludes there are $2$ trailing zeros, option B.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Four identical rectangles are placed side by side on a $28\\text{ cm}$ by $20\\text{ cm}$ rectangular piece of paper in $2$ different ways as shown in Figures A and B. What is the difference in the perimeters of the shaded regions of Figure A and B?\n\nA. $96\\text{ cm}$\nB. $80\\text{ cm}$\nC. $32\\text{ cm}$\nD. $16\\text{ cm}$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g6/fig-13.webp',
              alt: 'Figure A and Figure B showing four identical unshaded rectangles arranged in two different ways inside a 28 cm by 20 cm sheet with shaded regions.',
              caption: 'Arrangements of four identical rectangles for Question 13.'
            }
          ],
          answer: 'D. $16\\text{ cm}$',
          principle:
            'Compute the perimeter of the L-shaped shaded region in Figure A by projecting its inner edges outward, and express the sum of the two shaded rectangle perimeters in Figure B in terms of each small rectangle’s length $x$ and width $y$.',
          solution:
            'In Figure A, pushing the inner horizontal and vertical boundaries of the L-shaped shaded region outward shows that its perimeter equals the perimeter of the full $28\\text{ cm} \\times 20\\text{ cm}$ sheet:\n$$P_A = 2 \\times (28 + 20) = 96\\text{ cm}.$$\nLet each small rectangle have length $x\\text{ cm}$ and width $y\\text{ cm}$. In Figure B, the shaded region consists of two disjoint rectangles:\n- Bottom-left shaded rectangle of dimensions $x$ by $20 - 2y$.\n- Top-right shaded rectangle of dimensions $2y$ by $20 - x$.\n\nHence the total perimeter of the shaded regions in Figure B is:\n$$P_B = 2(x + 20 - 2y) + 2(2y + 20 - x) = 2x + 40 - 4y + 4y + 40 - 2x = 80\\text{ cm}.$$\nTherefore, the difference in perimeters is:\n$$P_A - P_B = 96 - 80 = 16\\text{ cm}.$$',
          rubric: [
            { code: 'M1', text: 'Finds $P_A = 96\\text{ cm}$ and expresses $P_B = 2(x + 20 - 2y) + 2(2y + 20 - x) = 80\\text{ cm}$.' },
            { code: 'A1', text: 'Computes the difference $16\\text{ cm}$, option D.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Hailey, Lydia, Julia, Asher and Charles are Primary $4$ or $6$ students. They study in either Bright Primary School or Light Primary School.\n- Lydia and Charles are from the same grade.\n- Julia and Asher study at different levels.\n- Three students study in Primary $4$ and the other two students in Primary $6$.\n- Asher and Charles are from different schools.\n- Hailey and Julia go to the same school.\n- Three students go to Bright Primary School and the other two are from Light Primary School.\n\nIf one of them is Primary $6$ student from Light Primary School, who is that person?\n\nA. Hailey\nB. Lydia\nC. Julia\nD. Asher\nE. Charles',
          answer: 'D. Asher',
          principle:
            'Use the exact counts ($3$ Primary 4, $2$ Primary 6; $3$ Bright, $2$ Light) to deduce the school of Hailey & Julia and the grade of Lydia & Charles.',
          solution:
            'First determine the schools:\n- Asher and Charles are from different schools, so one is in Bright and one is in Light.\n- Since only $2$ students are from Light Primary School and one of Asher/Charles is already from Light, Hailey and Julia (who go to the same school) cannot both be from Light. Hence **Hailey and Julia go to Bright Primary School**.\n\nNext determine the grade levels:\n- Julia and Asher study at different levels, so one is in Primary 4 and one is in Primary 6.\n- Since only $2$ students are in Primary 6 and one of Julia/Asher is already in Primary 6, Lydia and Charles (who are in the same grade) cannot both be in Primary 6. Hence **Lydia and Charles are in Primary 4** (leaving Hailey in Primary 6).\n\nCombining these facts: the two Primary 6 students are Hailey and either Julia or Asher. Because Hailey and Julia are both in Bright Primary School, the Primary 6 student from Light Primary School must be **Asher**.',
          rubric: [
            { code: 'M1', text: 'Deduces Hailey & Julia attend Bright Primary School and Lydia & Charles are in Primary 4.' },
            { code: 'A1', text: 'Concludes Asher is the Primary 6 student from Light Primary School, option D.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'In which of the following times is the hour hand closest to the minute hand of a clock?\n\nA. $9:47$\nB. $9:48$\nC. $9:49$\nD. $9:50$\nE. $9:51$',
          answer: 'C. $9:49$',
          principle:
            'Find the exact minute $m$ after $9:00$ when the minute hand (moving at $6^\\circ/\\text{min}$) overtakes the hour hand (starting at $270^\\circ$ and moving at $0.5^\\circ/\\text{min}$).',
          solution:
            'Measuring angles clockwise from $12$:\n- Each minute, the minute hand turns by $360^\\circ \\div 60 = 6^\\circ$.\n- Each minute, the hour hand turns by $30^\\circ \\div 60 = 0.5^\\circ$.\n- At $9:00$, the hour hand is at $9 \\times 30^\\circ = 270^\\circ$.\n\nSuppose the two hands coincide at $m$ minutes after $9:00$. Then:\n$$6m = 270 + 0.5m \\implies 5.5m = 270 \\implies m = \\frac{540}{11} = 49\\frac{1}{11}.$$\nSince $49\\frac{1}{11}$ is closest to $49$, the hour hand is closest to the minute hand at $9:49$.',
          rubric: [
            { code: 'M1', text: 'Sets up $6m = 270 + 0.5m$ and solves $m = 49\\frac{1}{11}$.' },
            { code: 'A1', text: 'Selects $9:49$, option C.' }
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
            'Find the last digit of the following product.\n$$\\underbrace{2 \\times 2 \\times \\dots \\times 2}_{20\\text{ times}} \\times \\underbrace{3 \\times 3 \\times \\dots \\times 3}_{24\\text{ times}}$$',
          answer: '$6$',
          principle:
            'Pair twenty $2$s with twenty $3$s to form $6^{20}$, noting that every positive power of $6$ ends in $6$, and check the units digit of $3^4$.',
          solution:
            'Regroup twenty pairs of $2 \\times 3$ together:\n$$2^{20} \\times 3^{24} = (2 \\times 3)^{20} \\times 3^4 = 6^{20} \\times 81.$$\nEvery positive integer power of $6$ ends in the digit $6$, and $81$ ends in the digit $1$.\nMultiplying a number ending in $6$ by a number ending in $1$ gives a product whose last digit is $6 \\times 1 = 6$.',
          rubric: [
            { code: 'M2', text: 'Rewrites the product as $6^{20} \\times 3^4 = 6^{20} \\times 81$ (or finds the units digits of $2^{20}$ and $3^{24}$ separately as $6$ and $1$).' },
            { code: 'A2', text: 'Obtains last digit $6$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt: 'How many triangles are there in the figure below?',
          figures: [
            {
              src: '/papers/sasmo-2020-g6/fig-17.webp',
              alt: 'A symmetric geometric figure with a horizontal base, two vertical sides, and six intersecting diagonal segments forming multiple triangles.',
              caption: 'Triangle-counting diagram for Question 17.'
            }
          ],
          answer: '$42$',
          principle:
            'Group triangles by the number of smallest ($1$-part) regions they contain so each triangle is counted once.',
          solution:
            'Classify every triangle in the figure by the number of basic ($1$-part) regions inside it:\n- **$1$-part triangles:** $11$\n- **$2$-part triangles:** $12$\n- **$3$-part triangles:** $6$\n- **$4$-part triangles:** $6$\n- **$5$-part triangles:** $3$\n- **$7$-part triangles:** $4$\n\nSumming across all sizes gives:\n$$11 + 12 + 6 + 6 + 3 + 4 = 42.$$',
          rubric: [
            { code: 'M2', text: 'Counts triangles systematically by component region size ($1$-, $2$-, $3$-, $4$-, $5$-, and $7$-part).' },
            { code: 'A2', text: 'Finds total $42$ triangles.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'Find the value of the following.\n$$\\left(\\frac{1}{20 \\times 25} + \\frac{1}{25 \\times 30} + \\frac{1}{30 \\times 35} + \\dots + \\frac{1}{2015 \\times 2020}\\right) \\times 2020$$',
          answer: '$20$',
          principle:
            'Use partial fractions $\\frac{1}{n(n + 5)} = \\frac{1}{5}\\left(\\frac{1}{n} - \\frac{1}{n + 5}\\right)$ to telescope the sum.',
          solution:
            'For every consecutive pair of multiples of $5$, note that:\n$$\\frac{1}{n(n + 5)} = \\frac{1}{5}\\left(\\frac{1}{n} - \\frac{1}{n + 5}\\right).$$\nApplying this identity to each term inside the parentheses:\n$$\\frac{1}{5}\\left[\\left(\\frac{1}{20} - \\frac{1}{25}\\right) + \\left(\\frac{1}{25} - \\frac{1}{30}\\right) + \\dots + \\left(\\frac{1}{2015} - \\frac{1}{2020}\\right)\\right] \\times 2020.$$\nAll intermediate terms cancel, leaving:\n$$\\frac{1}{5}\\left(\\frac{1}{20} - \\frac{1}{2020}\\right) \\times 2020 = \\frac{1}{5}(101 - 1) = \\frac{100}{5} = 20.$$',
          rubric: [
            { code: 'M2', text: 'Rewrites each term using $\\frac{1}{5}\\left(\\frac{1}{n} - \\frac{1}{n+5}\\right)$ and telescopes to $\\frac{1}{5}\\left(\\frac{1}{20} - \\frac{1}{2020}\\right)$.' },
            { code: 'A2', text: 'Evaluates the expression to $20$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'The number of apples in a basket is $\\frac{4}{5}$ of the number of oranges. The ratio of the number of pears to the number of apples is $3 : 8$. The rest of the fruits are bananas and $20\\%$ of all the fruits in the baskets are oranges. The number of bananas is $48$ more than the total number of apples, oranges and pears. How many fruits are there in the basket?',
          answer: '$300$',
          principle:
            'Express all four fruit quantities in a single common ratio using the $20\\%$ share of oranges to determine the total units.',
          solution:
            'First align the ratio of oranges, apples, and pears:\n- $\\text{Apples} : \\text{Oranges} = 4 : 5 = 8 : 10$.\n- $\\text{Pears} : \\text{Apples} = 3 : 8$.\n- Hence $\\text{Oranges} : \\text{Apples} : \\text{Pears} = 10 : 8 : 3$.\n\nSince oranges ($10$ units) make up $20\\% = \\frac{1}{5}$ of all fruits, the total number of fruits is $10 \\times 5 = 50$ units.\nTherefore, the number of bananas is:\n$$50 - (10 + 8 + 3) = 29\\text{ units}.$$\nBecause there are $48$ more bananas than apples, oranges, and pears combined:\n$$29\\text{ units} - 21\\text{ units} = 8\\text{ units} = 48 \\implies 1\\text{ unit} = 6.$$\nThus, the total number of fruits in the basket is $50 \\times 6 = 300$.',
          rubric: [
            { code: 'M2', text: 'Establishes the ratio $10 : 8 : 3 : 29$ out of $50$ total units and sets $8\\text{ units} = 48$.' },
            { code: 'A2', text: 'Finds $300$ fruits in total.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'The number of digits used to number the pages of a book is twice the number of pages of the book. If the number of pages of the book is a three-digit number, how many pages does the book have?',
          answer: '$108$',
          principle:
            'Count the digits used across $1$-digit, $2$-digit, and $3$-digit page numbers in terms of the total number of pages $x$.',
          solution:
            'Let $x$ be the $3$-digit number of pages in the book ($x \\ge 100$). Count the digits used:\n- Pages $1$ to $9$: $9$ pages $\\times 1\\text{ digit} = 9$ digits.\n- Pages $10$ to $99$: $90$ pages $\\times 2\\text{ digits} = 180$ digits.\n- Pages $100$ to $x$: $(x - 99)$ pages $\\times 3\\text{ digits} = 3(x - 99)$ digits.\n\nThe total number of digits used is:\n$$9 + 180 + 3(x - 99) = 189 + 3x - 297 = 3x - 108.$$\nSince the total number of digits equals twice the number of pages:\n$$3x - 108 = 2x \\implies x = 108.$$',
          rubric: [
            { code: 'M2', text: 'Counts digits as $9 + 180 + 3(x - 99) = 3x - 108$ and equates to $2x$.' },
            { code: 'A2', text: 'Solves $x = 108$ pages.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'The diameter of Candle A is longer than that of Candle B. Candle A can burn for $24$ hours, while Candle B can burn for $16$ hours. Both were lit at the same time and had the same height two hours later. If the original height of Candle A is $168\\text{ mm}$, what is the original height (in mm) of Candle B?',
          answer: '$176\\text{ mm}$',
          principle:
            'Find Candle A’s height after $2$ hours, then equate it to the fraction of Candle B’s original height remaining after $2$ hours.',
          solution:
            'Candle A has original height $168\\text{ mm}$ and burns completely in $24$ hours, so its burn rate is:\n$$168 \\div 24 = 7\\text{ mm/hour}.$$\nAfter $2$ hours, the height of Candle A (and therefore of Candle B) is:\n$$168 - 2 \\times 7 = 154\\text{ mm}.$$\nSince Candle B burns completely in $16$ hours, in $2$ hours it burns $\\frac{2}{16} = \\frac{1}{8}$ of its height, leaving $\\frac{7}{8}$ of its original height.\nThus, the original height of Candle B is:\n$$154 \\div \\frac{7}{8} = 154 \\times \\frac{8}{7} = 176\\text{ mm}.$$',
          rubric: [
            { code: 'M2', text: 'Finds height after $2$ hours ($154\\text{ mm}$) and sets $\\frac{7}{8}$ of Candle B’s original height equal to $154\\text{ mm}$.' },
            { code: 'A2', text: 'Computes $176\\text{ mm}$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'An election for the school president position consists of $4$ candidates: Amelia, Brad, Chris and Diana. There are $382$ voters. In the middle of the manual count, Amelia got $90$ votes, Brad got $45$ votes, Chris got $69$ votes, and Diana got $78$ votes. What is the smallest number of votes that Amelia needs to get in order to ensure that she wins the position?',
          answer: '$135$',
          principle:
            'Consider the worst-case scenario where all remaining votes go exclusively to Amelia and her closest rival, Diana.',
          solution:
            'Count the remaining uncounted votes:\n$$382 - (90 + 45 + 69 + 78) = 382 - 282 = 100\\text{ votes}.$$\nTo guarantee victory, Amelia must beat her strongest challenger, Diana ($78$ votes), even in the worst case where Brad and Chris receive $0$ additional votes and all $100$ remaining votes go to Amelia or Diana.\nIn that case, Amelia and Diana share a combined final total of:\n$$90 + 78 + 100 = 268\\text{ votes}.$$\nTo strictly exceed Diana’s vote count, Amelia needs more than half of $268$ votes, so at least:\n$$\\frac{268}{2} + 1 = 135\\text{ votes}.$$',
          rubric: [
            { code: 'M2', text: 'Finds $100$ remaining votes and considers the worst-case split between Amelia and Diana ($268$ combined votes).' },
            { code: 'A2', text: 'Concludes Amelia needs at least $135$ total votes.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'In the diagram, $\\angle ABC = \\angle ADB = 90^\\circ$, $AB = BC$, $BD = 4\\text{ cm}$ and $AD = 6\\text{ cm}$. Find the area (in $\\text{cm}^2$) of triangle $BDC$.',
          figures: [
            {
              src: '/papers/sasmo-2020-g6/fig-23.webp',
              alt: 'Right triangle ABC with right angle at B and interior point D forming right angle ADB.',
              caption: 'Right triangles ABC and ADB for Question 23.'
            }
          ],
          answer: '$8\\text{ cm}^2$',
          principle:
            'Drop the altitude $DE$ from $D$ to $BC$ and use similar triangles $\\triangle DBE \\sim \\triangle ABD$ (together with $BC = AB$) so the irrational length $AB$ cancels.',
          solution:
            'Apply the Pythagorean Theorem to right triangle $ABD$:\n$$AB = \\sqrt{BD^2 + AD^2} = \\sqrt{4^2 + 6^2} = \\sqrt{52} = 2\\sqrt{13}\\text{ cm}.$$\nDrop a perpendicular $DE$ from $D$ to $BC$, so $DE$ is the height of $\\triangle BDC$ onto base $BC$.\nSince $\\angle ABC = 90^\\circ$ and $\\angle ADB = 90^\\circ$:\n$$\\angle DBE = 90^\\circ - \\angle ABD = \\angle DAB, \\qquad \\angle DEB = 90^\\circ = \\angle BDA.$$\nHence $\\triangle DBE \\sim \\triangle ABD$, which gives:\n$$\\frac{DE}{DB} = \\frac{DB}{AB} \\implies DE = \\frac{4^2}{2\\sqrt{13}} = \\frac{8}{\\sqrt{13}}\\text{ cm}.$$\nSince $BC = AB = 2\\sqrt{13}\\text{ cm}$, the area of triangle $BDC$ is:\n$$\\text{Area}(\\triangle BDC) = \\frac{1}{2} \\times BC \\times DE = \\frac{1}{2} \\times 2\\sqrt{13} \\times \\frac{8}{\\sqrt{13}} = 8\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Finds $AB = 2\\sqrt{13}$ and uses $\\triangle DBE \\sim \\triangle ABD$ to express height $DE = \\frac{8}{\\sqrt{13}}$.' },
            { code: 'A2', text: 'Computes area $8\\text{ cm}^2$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'In the following cryptarithm, all the different letters stand for different digits.\n$$\\begin{array}{rrrr} P & Q & R & S \\\\ \\times & & & 9 \\\\ \\hline S & R & Q & P \\end{array}$$\nFind the value of the $4$-digit number $PQRS$.',
          answer: '$1089$',
          principle:
            'Bound the leading digit $P$ so the product remains a $4$-digit number, then determine $S$, $Q$, and $R$ from place-value carries.',
          solution:
            '1. **Thousands digit $P$:** Since $PQRS \\times 9$ is still a $4$-digit number (and $P \\ne 0$), we must have $P = 1$ (if $P \\ge 2$, then $PQRS \\times 9 \\ge 2000 \\times 9 = 18000$, a $5$-digit number).\n2. **Ones digit $S$:** In $S \\times 9$, the units digit is $P = 1$, which uniquely forces $S = 9$ (with a carry of $8$ into the tens column).\n3. **Hundreds digit $Q$:** Because $1QRS \\times 9 < 10000$, we must have $1000 + 100Q \\le 1111$, so $Q \\in \\{0, 1\\}$. Since $Q \\ne P = 1$, we get $Q = 0$, and there can be no carry from the hundreds column into the thousands column.\n4. **Tens digit $R$:** In the tens column, the units digit of $9R + 8$ is $Q = 0$, so $9R$ ends in $2$, giving $R = 8$ (which produces $9 \\times 8 + 8 = 80$, carrying $8$ into the hundreds column, where $9 \\times 0 + 8 = 8 = R$).\n\nCheck: $1089 \\times 9 = 9801$, with distinct digits $P=1, Q=0, R=8, S=9$. Thus $PQRS = 1089$.',
          rubric: [
            { code: 'M2', text: 'Deduces $P = 1$, $S = 9$, and $Q = 0$ from $4$-digit bounds and units-digit multiplication.' },
            { code: 'A2', text: 'Finds $R = 8$ and $PQRS = 1089$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'Jason randomly placed digits $1, 2, 3, \\dots, 9$ around a circle. When he read three consecutive digits in clockwise order, he got a three-digit whole number. If there are $9$ such three-digit numbers, find the sum of the $9$ numbers.',
          answer: '$4995$',
          principle:
            'Observe by symmetry that each of the $9$ digits appears once in the hundreds place, once in the tens place, and once in the ones place across the $9$ numbers.',
          solution:
            'As we read each of the $9$ three-digit numbers starting from each of the $9$ positions around the circle:\n- Every digit $d \\in \\{1, 2, \\dots, 9\\}$ serves once as the first (hundreds) digit, contributing $100d$.\n- Every digit $d$ serves once as the second (tens) digit, contributing $10d$.\n- Every digit $d$ serves once as the third (ones) digit, contributing $1d$.\n\nTherefore, each digit $d$ contributes $100d + 10d + d = 111d$ to the total sum regardless of the arrangement:\n$$\\text{Sum} = 111 \\times (1 + 2 + 3 + \\dots + 9) = 111 \\times 45 = 4995.$$',
          rubric: [
            { code: 'M2', text: 'Uses place-value symmetry to show each digit $1$–$9$ contributes $100 + 10 + 1 = 111$ times its value.' },
            { code: 'A2', text: 'Computes $111 \\times 45 = 4995$.' }
          ]
        }
      ]
    }
  ]
};
