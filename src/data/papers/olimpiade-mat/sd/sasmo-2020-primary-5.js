/**
 * Paket Soal: SASMO 2020 Primary 5 (Grade 5)
 * Sumber: Singapore and Asian Schools Math Olympiad 2020, Primary 5 (Grade 5) Contest (2020-SASMO-G5.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 10, 11, 13, 15, 16, 23, dan 24 dilengkapi crop ilustrasi .webp.
 */
export default {
  id: 'sasmo-2020-g5',
  slug: 'sasmo-2020-primary-5',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'SASMO 2020 Primary 5 (Grade 5): arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'sd5-bab1-bilangan-cacah-100k',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan',
    'sd5-bab5-luas-daerah-bangun-datar'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2020 Primary 5 (Grade 5)',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Diagrams for Questions 10, 11, 13, 15, 16, 23, and 24 are provided as figures.',
  source: {
    org: 'SASMO',
    file: '2020-SASMO-G5.pdf',
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
            'Find the value of the following.\n$$8899 + (6677 - 2233) - 4455$$\n\nA. $8888$\nB. $8877$\nC. $8899$\nD. $8887$\nE. None of the above',
          answer: 'A. $8888$',
          principle:
            'Group numbers with matching digits ($8899 - 4455$) to simplify mental subtraction before adding.',
          solution:
            'First evaluate the bracket and regroup the subtraction:\n$$8899 + (6677 - 2233) - 4455 = 8899 + 4444 - 4455$$\n$$= (8899 - 4455) + 4444 = 4444 + 4444 = 8888.$$',
          rubric: [
            { code: 'M1', text: 'Computes $6677 - 2233 = 4444$ and regroups $8899 - 4455 = 4444$.' },
            { code: 'A1', text: 'Obtains $8888$, option A.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            "Jane thought of a number. Josh calculated one-third of Jane's number. Frank calculated two-fifths of Josh's number. If Frank got $18$, what was Jane's number?\n\nA. $2.4$\nB. $270$\nC. $45$\nD. $135$\nE. None of the above",
          answer: 'D. $135$',
          principle:
            'Work backwards by inverting each fractional operation in reverse order.',
          solution:
            "Frank's number is $\\frac{2}{5}$ of Josh's number, which equals $18$.\n- $\\frac{1}{5}$ of Josh's number $= 18 \\div 2 = 9$.\n- Josh's number $= 9 \\times 5 = 45$.\n\nJosh's number is $\\frac{1}{3}$ of Jane's number, so Jane's number is:\n$$45 \\times 3 = 135.$$",
          rubric: [
            { code: 'M1', text: "Finds Josh's number as $18 \\div \\frac{2}{5} = 45$." },
            { code: 'A1', text: "Multiplies by $3$ to get Jane's number $135$, option D." }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'In a sports league, teams can either get $7$ points or $3$ points in each match. What is the largest score that cannot be attained?\n\nA. $8$\nB. $11$\nC. $19$\nD. $22$\nE. None of the above',
          answer: 'B. $11$',
          principle:
            'Find three consecutive attainable scores ($12, 13, 14$), after which adding $3$ generates every larger integer, and check $11$ directly.',
          solution:
            'Notice three consecutive scores are attainable:\n$$12 = 3 \\times 4, \\quad 13 = 7 + 3 \\times 2, \\quad 14 = 7 \\times 2.$$\nEvery integer greater than $14$ can be reached by repeatedly adding $3$ points to $12$, $13$, or $14$.\nNow check $11$: using $7$ points at most once gives $11 - 0 = 11$ (not divisible by $3$) and $11 - 7 = 4$ (not divisible by $3$). Therefore, $11$ cannot be attained, and it is the largest such score.',
          rubric: [
            { code: 'M1', text: 'Shows $12, 13, 14$ are attainable so all scores $\\ge 12$ can be formed by adding $3$, while $11$ cannot be formed.' },
            { code: 'A1', text: 'Largest unattainable score $11$, option B.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'The percentages of boys in two classes are $30\\%$ and $60\\%$. The numbers of students in the two classes are $30$ and $45$ respectively. What is the percentage of boys in the two classes combined?\n\nA. $90\\%$\nB. $48\\%$\nC. $30\\%$\nD. $10\\%$\nE. None of the above',
          answer: 'B. $48\\%$',
          principle:
            'Compute the total number of boys and divide by the total number of students across both classes.',
          solution:
            'Find the number of boys in each class:\n- First class: $30 \\times \\frac{30}{100} = 9$ boys.\n- Second class: $45 \\times \\frac{60}{100} = 27$ boys.\n\nTotal boys $= 9 + 27 = 36$, and total students $= 30 + 45 = 75$.\nHence the combined percentage of boys is:\n$$\\frac{36}{75} \\times 100\\% = \\frac{12}{25} \\times 100\\% = 48\\%.$$',
          rubric: [
            { code: 'M1', text: 'Finds $9$ and $27$ boys ($36$ total) out of $75$ total students.' },
            { code: 'A1', text: 'Computes $\\frac{36}{75} \\times 100\\% = 48\\%$, option B.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'How many pairs of non-zero whole numbers $a$ and $b$ are there such that $a + b = 10$? Take note that $(a, b)$ and $(b, a)$ are the same pair.\n\nA. $4$\nB. $5$\nC. $6$\nD. $10$\nE. None of the above',
          answer: 'B. $5$',
          principle:
            'List all pairs $(a, b)$ systematically with $1 \\le a \\le b$ so no unordered pair is counted twice.',
          solution:
            'Listing all pairs of non-zero whole numbers $(a, b)$ with $a \\le b$ and $a + b = 10$:\n$$(1, 9), \\quad (2, 8), \\quad (3, 7), \\quad (4, 6), \\quad (5, 5).$$\nThere are $5$ such pairs.',
          rubric: [
            { code: 'M1', text: 'Lists pairs with $1 \\le a \\le b$ summing to $10$.' },
            { code: 'A1', text: 'Counts $5$ pairs, option B.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'Ted, Bob, Andi and Beti were playing "Guess The Number" game. Ted thought of a three-digit number and the others were trying to guess his number.\n- Bob said, "I guess your number is $784$."\n- Andi said, "I think it is $394$."\n- Beti said, "I think it must be $795$."\n\nTed then replied, "Each of the numbers you said shares two digits in common with mine." What is the sum of the digits of Ted\'s number?\n\nA. $395$\nB. $794$\nC. $20$\nD. $22$\nE. None of the above',
          answer: 'C. $20$',
          principle:
            'Compare pairs of guesses to identify which digits appear across multiple guesses and therefore belong to Ted\'s number.',
          solution:
            'Any two of the three guesses share at least one digit with each other, and each guess shares two digits with Ted\'s number:\n- Bob ($784$) and Andi ($394$) share the digit $4$.\n- Andi ($394$) and Beti ($795$) share the digit $9$.\n- Bob ($784$) and Beti ($795$) share the digit $7$.\n\nTaking the three digits $4, 7, 9$ gives exactly two common digits with each guess: $7$ and $4$ with $784$; $9$ and $4$ with $394$; $7$ and $9$ with $795$. (No other choice of digits gives two common digits with all three guesses.)\nTherefore, the sum of the digits of Ted\'s number is:\n$$4 + 7 + 9 = 20.$$',
          rubric: [
            { code: 'M1', text: 'Deduces Ted\'s digits must be a permutation of $4, 7, 9$.' },
            { code: 'A1', text: 'Computes $4 + 7 + 9 = 20$, option C.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'What is the missing number in the sequence below?\n$$23, \\; 19, \\; 25, \\; 26, \\; 27, \\; 33, \\; 29, \\; \\underline{\\hspace{0.8cm}}, \\; 31$$\n\nA. $40$\nB. $30$\nC. $32$\nD. $36$\nE. None of the above',
          answer: 'A. $40$',
          principle:
            'Separate the sequence into odd-positioned terms and even-positioned terms to see two arithmetic progressions.',
          solution:
            'The sequence alternates between two arithmetic sequences:\n- Odd positions ($1$st, $3$rd, $5$th, $7$th, $9$th): $23, 25, 27, 29, 31$ (increasing by $2$ each step).\n- Even positions ($2$nd, $4$th, $6$th, $8$th): $19, 26, 33, \\dots$ (increasing by $7$ each step).\n\nThe missing $8$th term is:\n$$33 + 7 = 40.$$',
          rubric: [
            { code: 'M1', text: 'Identifies the alternating pattern ($+2$ on odd positions, $+7$ on even positions).' },
            { code: 'A1', text: 'Finds $33 + 7 = 40$, option A.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'How many two-digit numbers are divisible by $4$ but not by $8$?\n\nA. $25$\nB. $22$\nC. $12$\nD. $11$\nE. None of the above',
          answer: 'D. $11$',
          principle:
            'Count all two-digit multiples of $4$, then subtract the two-digit multiples of $8$ (every multiple of $8$ is also a multiple of $4$).',
          solution:
            '- Two-digit multiples of $4$ are $12, 16, 20, \\dots, 96$, giving:\n$$\\frac{96 - 12}{4} + 1 = 21 + 1 = 22\\text{ numbers}.$$\n- Two-digit multiples of $8$ are $16, 24, 32, \\dots, 96$, giving:\n$$\\frac{96 - 16}{8} + 1 = 10 + 1 = 11\\text{ numbers}.$$\n\nSubtracting gives the number of two-digit multiples of $4$ that are not divisible by $8$:\n$$22 - 11 = 11.$$',
          rubric: [
            { code: 'M1', text: 'Counts $22$ two-digit multiples of $4$ and $11$ two-digit multiples of $8$.' },
            { code: 'A1', text: 'Subtracts to get $11$, option D.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'There are roses and lilies at a flower shop. Two roses cost $7$ dollars while three lilies cost $5$ dollars. Billy bought some roses and lilies and paid $86$ dollars. Which of the following can be the number of lilies he bought?\n\nA. $15$\nB. $21$\nC. $24$\nD. $36$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Let $a$ be the number of pairs of roses and $b$ be the number of groups of $3$ lilies, then solve $7a + 5b = 86$ in positive integers.',
          solution:
            'Let Billy buy $a$ pairs of roses ($2a$ roses) and $b$ groups of three lilies ($3b$ lilies), where $a, b \\ge 1$ are positive integers. Then:\n$$7a + 5b = 86.$$\nSince $5b$ ends in $0$ or $5$, $7a = 86 - 5b$ must end in $6$ or $1$. Checking $a \\in \\{1, 2, \\dots, 12\\}$:\n- $a = 3 \\implies 7(3) = 21 \\implies 5b = 65 \\implies b = 13$, giving $3b = 39$ lilies.\n- $a = 8 \\implies 7(8) = 56 \\implies 5b = 30 \\implies b = 6$, giving $3b = 18$ lilies.\n\nNo other integer solutions exist (if $b = 0$, $7a = 86$ has no integer solution). Neither $18$ nor $39$ appears among options A to D, so the correct choice is E.',
          rubric: [
            { code: 'M1', text: 'Sets up $7a + 5b = 86$ and finds all positive solutions $(a, b) = (3, 13)$ and $(8, 6)$.' },
            { code: 'A1', text: 'Concludes possible lily counts are $39$ or $18$, so option E.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'What is the missing number in the pattern below?\n\nA. $11$\nB. $33$\nC. $38$\nD. $55$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g5/fig-10.webp',
              alt: 'Four pictorial equations using regular polygons and a flower symbol: hexagon flower pentagon equals 11, octagon flower hexagon equals 28, pentagon flower triangle equals 16, and octagon flower triangle equals a question mark.',
              caption: 'Polygon operation pattern for Question 10.'
            }
          ],
          answer: 'D. $55$',
          principle:
            'Translate each polygon into its number of sides ($3, 5, 6, 8$) and test the relation $(a + b)(a - b) = a^2 - b^2$.',
          solution:
            'Represent each polygon by its number of sides (triangle $= 3$, pentagon $= 5$, hexagon $= 6$, octagon $= 8$):\n- Hexagon $*$ pentagon: $(6 + 5)(6 - 5) = 11 \\times 1 = 11$.\n- Octagon $*$ hexagon: $(8 + 6)(8 - 6) = 14 \\times 2 = 28$.\n- Pentagon $*$ triangle: $(5 + 3)(5 - 3) = 8 \\times 2 = 16$.\n\nApplying the same rule $a * b = (a + b)(a - b)$ to octagon $*$ triangle gives:\n$$(8 + 3)(8 - 3) = 11 \\times 5 = 55.$$',
          rubric: [
            { code: 'M1', text: 'Identifies side counts ($3, 5, 6, 8$) and the rule $(a + b)(a - b)$.' },
            { code: 'A1', text: 'Computes $(8 + 3)(8 - 3) = 55$, option D.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'The dimensions of two metal cuboids are $3 \\times 5 \\times 7$ and $6 \\times 8 \\times 10$. One of the cuboids is shown on the right. Harry melts both cuboids and forms the largest possible cuboid with base of size $9 \\times 13$. What is the height of the new cuboid?\n\nA. $4.5$\nB. $5$\nC. $6$\nD. $11$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g5/fig-11.webp',
              alt: 'Isometric illustration of a rectangular metal cuboid divided into a grid of small unit cubes.',
              caption: 'Illustration of a metal cuboid for Question 11.'
            }
          ],
          answer: 'B. $5$',
          principle:
            'Total volume is conserved when the metal cuboids are melted, so divide total volume by the new base area.',
          solution:
            'Compute the total volume of the two cuboids:\n$$V_1 = 3 \\times 5 \\times 7 = 105, \\qquad V_2 = 6 \\times 8 \\times 10 = 480.$$\n$$V_{\\text{total}} = 105 + 480 = 585.$$\nDividing by the base area $9 \\times 13 = 117$ gives the height of the new cuboid:\n$$h = \\frac{585}{9 \\times 13} = \\frac{585}{117} = 5.$$',
          rubric: [
            { code: 'M1', text: 'Finds total volume $105 + 480 = 585$ and base area $9 \\times 13 = 117$.' },
            { code: 'A1', text: 'Computes height $585 \\div 117 = 5$, option B.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'There are three boxes, one contains only apples, one contains only oranges, and one contains both apples and oranges. All the boxes are labelled as shown below.\n- Box 1 labelled: This box contains both apples and oranges.\n- Box 2 labelled: Box 1 does not contain different fruits.\n- Box 3 labelled: This box contains only one type of fruit.\n\nIf only one box is labelled correctly, which box contains both apples and oranges?\n\nA. Box 1\nB. Box 2\nC. Box 3\nD. Impossible to determine\nE. Box 1 and 2',
          answer: 'C. Box 3',
          principle:
            'Test which of the three labels can be true on its own without forcing a second label to also be true.',
          solution:
            '- If Box 1 were labelled correctly, Box 1 would contain both fruits, so Box 3 would contain only one type of fruit and Box 3\'s label would also be true (contradicting that only one label is correct).\n- If Box 3 were labelled correctly, Box 3 would contain only one type of fruit, so Box 1 could not contain both fruits; thus Box 2\'s label ("Box 1 does not contain different fruits") would also be true (contradiction).\n\nTherefore, Box 2 must be the only correctly labelled box. Consequently, Box 3 is labelled wrongly, so Box 3 must contain both apples and oranges.',
          rubric: [
            { code: 'M1', text: 'Eliminates Box 1 and Box 3 as true labels because each forces two true labels, leaving Box 2 true.' },
            { code: 'A1', text: 'Concludes Box 3 is mislabelled and contains both fruits, option C.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'In the rectangle $ABCD$, point $E$ is on the side $AB$ and point $F$ is on the side $AD$ such that $BE = \\frac{1}{3} AE$ and $DF = \\frac{2}{5} AD$. What is the ratio of areas of $ABCD$ and $FEBCD$?\n\nA. $40 : 31$\nB. $15 : 13$\nC. $48 : 35$\nD. $15 : 14$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g5/fig-13.webp',
              alt: 'Rectangle ABCD with point E on side AB, point F on side AD, and line segment EF joining them.',
              caption: 'Rectangle ABCD with segment EF for Question 13.'
            }
          ],
          answer: 'A. $40 : 31$',
          principle:
            'Assign convenient side lengths matching the given fraction denominators, then subtract $\\text{Area}(\\triangle AEF)$ from $\\text{Area}(ABCD)$.',
          solution:
            'Since $BE = \\frac{1}{3}AE$, we have $AE : EB = 3 : 1$, so let $AB = 4$ units and $AE = 3$ units.\nSince $DF = \\frac{2}{5}AD$, let $AD = 5$ parts, so $DF = 2$ parts and $AF = 3$ parts.\n- $\\text{Area}(ABCD) = 4 \\times 5 = 20$ (unit-parts).\n- $\\text{Area}(\\triangle AEF) = \\frac{1}{2} \\times AE \\times AF = \\frac{1}{2} \\times 3 \\times 3 = 4.5$ (unit-parts).\n- $\\text{Area}(FEBCD) = 20 - 4.5 = 15.5$ (unit-parts).\n\nTherefore, the required ratio is:\n$$\\text{Area}(ABCD) : \\text{Area}(FEBCD) = 20 : 15.5 = 40 : 31.$$',
          rubric: [
            { code: 'M1', text: 'Uses $AE = \\frac{3}{4}AB$ and $AF = \\frac{3}{5}AD$ to find $\\text{Area}(\\triangle AEF) = \\frac{9}{40}\\text{Area}(ABCD)$.' },
            { code: 'A1', text: 'Finds ratio $40 : 31$, option A.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'In which of the following times is the hour hand closest to the minute hand of a clock?\n\nA. $6:30$\nB. $6:31$\nC. $6:32$\nD. $6:33$\nE. $6:34$',
          answer: 'D. $6:33$',
          principle:
            'Track the angular speeds of the minute hand ($6^\\circ$ per minute) and hour hand ($0.5^\\circ$ per minute) to find when they coincide after $6:00$.',
          solution:
            'Around a clock face, each $1$-hour division is $360^\\circ \\div 12 = 30^\\circ$.\n- The minute hand moves $360^\\circ \\div 60 = 6^\\circ$ per minute.\n- The hour hand moves $30^\\circ \\div 60 = 0.5^\\circ$ per minute.\n\nAt $6:00$, the hour hand is at $6 \\times 30^\\circ = 180^\\circ$ from $12$. Let $m$ minutes past $6:00$ be the time when the hands overlap:\n$$6m = 180 + 0.5m \\implies 5.5m = 180 \\implies m = \\frac{360}{11} = 32\\frac{8}{11}.$$\nSince $32\\frac{8}{11} \\approx 32.73$ is closer to $33$ than to $32$ (and both hands move at constant speeds), the hands are closest at $6:33$.',
          rubric: [
            { code: 'M1', text: 'Solves $6m = 180 + 0.5m$ to get overlap at $m = 32\\frac{8}{11}$ minutes past $6$.' },
            { code: 'A1', text: 'Identifies $6:33$ as closest, option D.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Which one of the following options is a missing piece of the cube on the right?\n\nA. Option A\nB. Option B\nC. Option C\nD. Option D\nE. Option E',
          figures: [
            {
              src: '/papers/sasmo-2020-g5/fig-15.webp',
              alt: 'A three-dimensional patterned cube with a corner piece missing, shown above five candidate corner-piece options labelled A, B, C, D, and E.',
              caption: 'Cube with missing corner piece and options A–E for Question 15.'
            }
          ],
          answer: 'C. Option C',
          principle:
            'Determine the exact shading and diagonal triangle orientation on each of the three visible faces (top, front-left, and front-right) of the missing corner.',
          solution:
            'Inspect the three outer faces meeting at the missing front-top-center corner of the main cube:\n- **Top face:** Must have a light border strip along its outer top-left and top-right edges, with a dark triangle pointing inward at the back-left.\n- **Left (front-left) face:** Must have a dark outer frame along the left and bottom edges and a light right-angled corner/triangle inside, matching Option C\'s dark-frame-with-light-triangle orientation (eliminating A, D, and E, whose left faces are predominantly light).\n- **Right (front-right) face:** Must have a light diagonal diamond corner strip along the top-left of that face and a dark triangular corner at the bottom-right, with the light region extending to the bottom-right corner—matching Option C (whereas Option B has the diagonal strip reversed/inverted across that face).\n\nOnly Option C matches all three visible faces simultaneously.',
          rubric: [
            { code: 'M1', text: 'Matches the shading and diagonal pattern on the top, left, and right faces of the missing corner.' },
            { code: 'A1', text: 'Selects option C.' }
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
          prompt: 'How many triangles are there in the figure below?',
          figures: [
            {
              src: '/papers/sasmo-2020-g5/fig-16.webp',
              alt: 'A large triangle divided internally by two cevians from the top vertex to the base, two cevians from the bottom-right vertex, and one cevian from the bottom-left vertex.',
              caption: 'Triangle-counting figure for Question 16.'
            }
          ],
          answer: '$45$',
          principle:
            'Classify and count all triangles systematically by the number of smallest ($1$-part) regions they contain.',
          solution:
            'The figure is divided into $12$ smallest ($1$-part) regions ($10$ triangles and $2$ quadrilaterals). Counting triangles by the number of $1$-part regions inside each triangle:\n- **$1$-part triangles:** $10$\n- **$2$-part triangles:** $7$\n- **$3$-part triangles:** $10$\n- **$4$-part triangles:** $6$\n- **$5$-part triangles:** $4$\n- **$6$-part triangles:** $3$\n- **$8$-part triangles:** $4$\n- **$12$-part triangles:** $1$ (the whole large triangle)\n\nAdding all cases gives the total number of triangles:\n$$10 + 7 + 10 + 6 + 4 + 3 + 4 + 1 = 45.$$',
          rubric: [
            { code: 'M2', text: 'Systematically counts triangles by component region size ($1$- through $12$-part).' },
            { code: 'A2', text: 'Computes the total of $45$ triangles.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'Find the last digit of the following product.\n$$\\underbrace{2 \\times 2 \\times \\cdots \\times 2}_{20\\text{ times}} \\times \\underbrace{3 \\times 3 \\times \\cdots \\times 3}_{20\\text{ times}}$$',
          answer: '$6$',
          principle:
            'Pair each factor of $2$ with a factor of $3$ so the product becomes a power of $6$, whose units digit is always $6$.',
          solution:
            'Since multiplication is commutative and associative, pair each $2$ with a $3$:\n$$\\underbrace{2 \\times 2 \\times \\cdots \\times 2}_{20\\text{ times}} \\times \\underbrace{3 \\times 3 \\times \\cdots \\times 3}_{20\\text{ times}} = \\underbrace{(2 \\times 3) \\times (2 \\times 3) \\times \\cdots \\times (2 \\times 3)}_{20\\text{ times}} = \\underbrace{6 \\times 6 \\times \\cdots \\times 6}_{20\\text{ times}}.$$\nBecause $6 \\times 6 = 36$ ends in $6$, every positive integer power of $6$ ends in $6$. Thus, the last digit is $6$.',
          rubric: [
            { code: 'M2', text: 'Rewrites the product as $6^{20}$ by pairing each $2$ with a $3$.' },
            { code: 'A2', text: 'Concludes the last digit is $6$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'The ratio of the volume of water in Tank A to that in Tank C is $4 : 7$. The ratio of the volume of water in Tank B to the total volume in the $3$ tanks is $6 : 50$. If there are $5$ more litres of water in Tank A than Tank B, how much water (in litres) is there in Tank C?',
          answer: '$14\\text{ litres}$',
          principle:
            'Express the combined volume of Tanks A and C as a single unit count and scale the ratio $A : C$ to match.',
          solution:
            'From $B : (A + B + C) = 6 : 50$, let Tank B have $6$ units and the total of all three tanks be $50$ units. Then:\n$$A + C = 50 - 6 = 44\\text{ units}.$$\nThe ratio $A : C = 4 : 7$ has $4 + 7 = 11$ parts. Scaling this ratio by $44 \\div 11 = 4$ gives:\n$$A : C = 16 : 28.$$\nNow Tank A has $16$ units, Tank B has $6$ units, and Tank C has $28$ units. Since Tank A has $5$ litres more than Tank B:\n$$16 - 6 = 10\\text{ units} = 5\\text{ litres} \\implies 1\\text{ unit} = 0.5\\text{ litres}.$$\nTherefore, the volume of water in Tank C is:\n$$28 \\times 0.5 = 14\\text{ litres}.$$',
          rubric: [
            { code: 'M2', text: 'Matches $A + C = 44$ units with $A : C = 16 : 28$ and equates $16 - 6 = 10$ units to $5$ litres.' },
            { code: 'A2', text: 'Finds Tank C contains $14$ litres.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'How many four-digit numbers are there between $7500$ and $9600$ that can be formed using only the digits $3, 7, 5, 6, 8, 9$ without repetition of any digits?',
          answer: '$132$',
          principle:
            'Split into cases by the thousands digit ($7$, $8$, or $9$) and apply the multiplication principle for the remaining distinct digits.',
          solution:
            'There are $6$ available digits: $\\{3, 5, 6, 7, 8, 9\\}$, and no digit may repeat.\n1. **Thousands digit is $7$ (range $7500$ to $7999$):**\n   - Hundreds digit must be $\\ge 5$: $4$ choices ($5, 6, 8, 9$).\n   - Tens digit: $4$ remaining digits.\n   - Ones digit: $3$ remaining digits.\n   - Count: $1 \\times 4 \\times 4 \\times 3 = 48$.\n2. **Thousands digit is $8$ (range $8000$ to $8999$):**\n   - Hundreds digit: $5$ remaining digits ($3, 5, 6, 7, 9$).\n   - Tens digit: $4$ remaining digits.\n   - Ones digit: $3$ remaining digits.\n   - Count: $1 \\times 5 \\times 4 \\times 3 = 60$.\n3. **Thousands digit is $9$ (range $9000$ to $9599$):**\n   - Hundreds digit must be $< 6$: $2$ choices ($3$ or $5$).\n   - Tens digit: $4$ remaining digits.\n   - Ones digit: $3$ remaining digits.\n   - Count: $1 \\times 2 \\times 4 \\times 3 = 24$.\n\nTotal number of valid four-digit numbers:\n$$48 + 60 + 24 = 132.$$',
          rubric: [
            { code: 'M2', text: 'Counts the three thousands-digit cases correctly: $48$ ($7\\text{xxx}$), $60$ ($8\\text{xxx}$), and $24$ ($9\\text{xxx}$).' },
            { code: 'A2', text: 'Sums to $132$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'At a book fair, there were $120$ more adults than girls. The number of girls was $75\\%$ of the number of boys and $12\\%$ of the total number of people. How many adults were there at the book fair?',
          answer: '$144$',
          principle:
            'Express girls, boys, and adults each as a percentage of the total number of people at the book fair.',
          solution:
            'Let the total number of people be $100\\%$.\n- Girls $= 12\\%$ of the total.\n- Since girls are $75\\% = \\frac{3}{4}$ of boys, boys $= \\frac{4}{3} \\times 12\\% = 16\\%$ of the total.\n- Adults $= 100\\% - 12\\% - 16\\% = 72\\%$ of the total.\n\nThe difference between adults and girls is:\n$$72\\% - 12\\% = 60\\%\\text{ of the total} = 120\\text{ people}.$$\nThus $1\\%$ of the total $= 120 \\div 60 = 2$ people, and the number of adults is:\n$$72 \\times 2 = 144.$$',
          rubric: [
            { code: 'M2', text: 'Finds boys $= 16\\%$ and adults $= 72\\%$, so $60\\%$ of total $= 120$.' },
            { code: 'A2', text: 'Computes $72 \\times 2 = 144$ adults.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'The number of digits used to number the pages of a book is twice the number of pages of the book. If the number of pages of the book is a three-digit number, how many pages does the book have?',
          answer: '$108$',
          principle:
            'Sum the digits used by $1$-digit, $2$-digit, and $3$-digit page numbers, then set the total equal to $2x$.',
          solution:
            'Let the book have $x$ pages (where $100 \\le x \\le 999$):\n- Pages $1$ to $9$: $9 \\times 1 = 9$ digits.\n- Pages $10$ to $99$: $90 \\times 2 = 180$ digits.\n- Pages $100$ to $x$: $(x - 99) \\times 3 = 3x - 297$ digits.\n\nTotal number of digits used:\n$$9 + 180 + (3x - 297) = 3x - 108.$$\nSetting this equal to twice the number of pages gives:\n$$3x - 108 = 2x \\implies x = 108.$$',
          rubric: [
            { code: 'M2', text: 'Counts digits as $9 + 180 + 3(x - 99) = 3x - 108$ and sets $3x - 108 = 2x$.' },
            { code: 'A2', text: 'Solves $x = 108$ pages.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'Peter and Frank together can build a house in eight days. Peter and George together can build the same house in six days. It is given that each of them works exactly nine hours per day. If Peter alone can build the same house in $12$ days, how many hours will Frank and George work together to build a house?',
          answer: '$72\\text{ hours}$',
          principle:
            'Subtract Peter\'s daily work rate from each pair\'s daily rate to find Frank\'s and George\'s individual rates, then add them.',
          solution:
            'Express each work rate as a fraction of the house built per day:\n- $\\text{Peter} + \\text{Frank} = \\frac{1}{8}$ house per day.\n- $\\text{Peter} + \\text{George} = \\frac{1}{6}$ house per day.\n- $\\text{Peter} = \\frac{1}{12}$ house per day.\n\nSubtracting Peter\'s rate gives:\n- $\\text{Frank} = \\frac{1}{8} - \\frac{1}{12} = \\frac{3 - 2}{24} = \\frac{1}{24}$ house per day.\n- $\\text{George} = \\frac{1}{6} - \\frac{1}{12} = \\frac{2 - 1}{12} = \\frac{1}{12}$ house per day.\n\nTogether, Frank and George complete:\n$$\\frac{1}{24} + \\frac{1}{12} = \\frac{3}{24} = \\frac{1}{8}\\text{ of the house per day}.$$\nThus they take $8$ days. Since each day is $9$ hours, the total time required is:\n$$8 \\times 9 = 72\\text{ hours}.$$',
          rubric: [
            { code: 'M2', text: 'Finds Frank\'s rate $\\frac{1}{24}$ and George\'s rate $\\frac{1}{12}$, giving combined rate $\\frac{1}{8}$ house/day ($8$ days).' },
            { code: 'A2', text: 'Multiplies $8 \\times 9 = 72$ hours.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'In the diagram below, points $A$, $B$, $C$ and $D$ are the midpoints of the sides of a square. If the area of the largest square below is $390\\text{ cm}^2$, find the area of the shaded region.',
          figures: [
            {
              src: '/papers/sasmo-2020-g5/fig-23.webp',
              alt: 'A square with midpoints A, B, C, and D joined to opposite vertices, forming a central tilted square whose upper-left half is shaded.',
              caption: 'Square with midpoints A, B, C, D and shaded triangle for Question 23.'
            }
          ],
          answer: '$39\\text{ cm}^2$',
          principle:
            'Each outer right triangle combines with its neighbouring trapezoid around the central square to form a square congruent to the central square, partitioning the large square into $5$ equal squares.',
          solution:
            'The four segments from vertices to midpoints divide the large square into $1$ central tilted square, $4$ congruent small right triangles (at the corners), and $4$ congruent right trapezoids (along the sides).\nRotating each small corner triangle and fitting it onto the hypotenuse of an adjacent trapezoid forms a square congruent to the central square. Hence the large square has $5$ times the area of the central square:\n$$\\text{Area}(\\text{central square}) = \\frac{1}{5} \\times 390 = 78\\text{ cm}^2.$$\nThe shaded triangle is exactly half of the central square, so its area is:\n$$\\frac{1}{2} \\times 78 = 39\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Shows the central square is $\\frac{1}{5}$ of the large square ($78\\text{ cm}^2$) and the shaded triangle is half of it.' },
            { code: 'A2', text: 'Computes $39\\text{ cm}^2$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'One wants to colour the circles in the figure below such that any pair of circles connected by a line segment shares different colours. What is the least number of colours needed for the colouring?',
          figures: [
            {
              src: '/papers/sasmo-2020-g5/fig-24.webp',
              alt: 'A symmetric graph of ten empty circles arranged as an outer pentagon connected radially to an inner five-pointed star.',
              caption: 'Ten-circle network for Question 24.'
            }
          ],
          answer: '$3$',
          principle:
            'An odd cycle (such as the outer $5$-cycle) cannot be $2$-coloured, so at least $3$ colours are required; exhibiting a valid $3$-colouring proves $3$ is sufficient.',
          solution:
            'The outer $5$ circles form a cycle of length $5$. With only $2$ colours, alternating colours around $5$ vertices forces the $1$st and $5$th vertices to share the same colour even though they are connected. Thus at least $3$ colours are needed.\n\nThree colours—Red ($R$), Blue ($B$), and Green ($G$)—are sufficient. Going clockwise from the top:\n- **Outer pentagon:** $R, G, B, R, B$.\n- **Inner star** (each circle paired radially with the outer circle in the same clockwise order): $B, B, R, G, G$.\n\nChecking every radial spoke and every star chord shows no two connected circles share the same colour. Hence the least number of colours needed is $3$.',
          rubric: [
            { code: 'M2', text: 'Proves $2$ colours fail on the outer $5$-cycle and exhibits a valid $3$-colouring.' },
            { code: 'A2', text: 'Concludes $3$ colours are needed.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'In the following, all the different letters stand for different digits.\n$$\\begin{array}{ccccc} & F & B & F & C \\\\ + & D & B & E & C \\\\ \\hline F & C & E & D & C \\end{array}$$\nFind the value of the $4$-digit number $DBEC$.',
          answer: '$9480$',
          principle:
            'Deduce the leading carryover digit $F = 1$, find $C = 0$ from the ones column $C + C$, and resolve the remaining columns via parity and carries.',
          solution:
            '1. **Ten-thousands digit $F$:** The sum of two $4$-digit numbers is less than $20000$, so the leading digit of the $5$-digit sum must be $F = 1$.\n2. **Ones column ($C + C$):** The ones digit of $C + C$ is $C$, so $C = 0$ (with no carry into the tens column).\n3. **Tens column ($F + E = 1 + E$):** Its ones digit is $D$. Since $F = 1$ and the thousands sum $1 + D$ carries into the ten-thousands place ($10 + C = 10$), we must have $1 + D + \\text{carry} = 10$, so $D \\in \\{8, 9\\}$.\n   - If $D = 8$, there must be a carry of $1$ from the hundreds column ($B + B \\ge 10$), and in the tens column $1 + E = D = 8$ gives $E = 7$. However, $E$ is the ones digit of $B + B$ (since there is no carry from the ones column), which must be even—contradicting $E = 7$.\n   - Therefore $D = 9$, with no carry from the hundreds column. Then in the tens column $1 + E = 9 \\implies E = 8$ (no carry).\n4. **Hundreds column ($B + B = E = 8$):** With no carry into or out of the hundreds column, $2B = 8 \\implies B = 4$.\n\nCheck: $1410 + 9480 = 10890$, and all five digits $(F=1, B=4, C=0, D=9, E=8)$ are distinct. Hence $DBEC = 9480$.',
          rubric: [
            { code: 'M2', text: 'Deduces $F = 1$, $C = 0$, eliminates $D = 8$ by parity of $B + B = E$, and finds $D = 9, E = 8, B = 4$.' },
            { code: 'A2', text: 'Finds $DBEC = 9480$.' }
          ]
        }
      ]
    }
  ]
};
