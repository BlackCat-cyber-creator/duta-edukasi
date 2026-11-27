/**
 * Paket Soal: SASMO 2020 Primary 4 (Grade 4)
 * Sumber: Singapore and Asian Schools Math Olympiad 2020, Primary 4 Contest (2020-SASMO-G4.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 2, 5, 8, 11, 15, 17, 19, 20, dan 21 dilengkapi crop ilustrasi .webp.
 */
export default {
  id: 'sasmo-2020-g4',
  slug: 'sasmo-2020-primary-4',
  subject: 'olimpiade-mat',
  grade: 4,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'SASMO 2020 Primary 4 (Grade 4): arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd4-bab2-pecahan',
    'sd4-bab3-pola-gambar-bilangan',
    'sd4-bab5-bangun-datar'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2020 Primary 4 (Grade 4)',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Figures for Questions 2, 5, 8, 11, 15, 17, 19, 20, and 21 are provided.',
  source: {
    org: 'SASMO',
    file: '2020-SASMO-G4.pdf',
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
            'What is the value of the following sum?\n$$2814 + 3700 + 4609 + 8211 + 9106 - 22900$$\n\nA. $4450$\nB. $4540$\nC. $5540$\nD. $5450$\nE. None of the above',
          answer: 'C. $5540$',
          principle:
            'Pair numbers whose last two digits add to a multiple of $10$ or $100$ to simplify mental addition before subtracting.',
          solution:
            'Group compatible pairs first:\n$$2814 + 9106 = 11920$$\n$$4609 + 8211 = 12820$$\nNow add the remaining term and subtract $22900$:\n$$11920 + 12820 + 3700 - 22900 = 24740 + 3700 - 22900 = 28440 - 22900 = 5540.$$',
          rubric: [
            { code: 'M1', text: 'Pairs compatible addends ($2814 + 9106 = 11920$ and $4609 + 8211 = 12820$) and combines with $3700$.' },
            { code: 'A1', text: 'Computes $5540$, option C.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'If Gear $A$ rotates anti-clockwise, which of the following options is true?\n\nA. Gears $A$ and $C$ rotate in opposite directions\nB. Four gears rotate in the same direction\nC. Gear $E$ rotates clockwise\nD. Gear $C$ rotates anti-clockwise\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g4/fig-2.webp',
              alt: 'Six meshing blue gears arranged in a chain and labeled A through F from left to right.',
              caption: 'Chain of meshing gears A through F for Question 2.'
            }
          ],
          answer: 'D. Gear C rotates anti-clockwise',
          principle:
            'Two directly meshing gears always rotate in opposite directions, so directions alternate along a single gear chain.',
          solution:
            'Since adjacent meshing gears turn in opposite directions, track each gear starting from Gear $A$:\n- Gear $A$: anti-clockwise\n- Gear $B$: clockwise\n- Gear $C$: anti-clockwise\n- Gear $D$: clockwise\n- Gear $E$: anti-clockwise\n- Gear $F$: clockwise\n\nChecking the options:\n- A is false ($A$ and $C$ both rotate anti-clockwise).\n- B is false ($3$ gears rotate anti-clockwise and $3$ rotate clockwise).\n- C is false (Gear $E$ rotates anti-clockwise).\n- D is true (Gear $C$ rotates anti-clockwise).',
          rubric: [
            { code: 'M1', text: 'Alternates rotation directions along the chain from $A$ through $F$.' },
            { code: 'A1', text: 'Identifies that Gear $C$ rotates anti-clockwise, option D.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'In the fictional "Odd Island", all the numbers contain only odd digits. The order of the counting numbers is the following\n$$1, 3, 5, 7, \\ldots, 19, 31, 33, \\ldots$$\nWhat is the $55^{\\text{th}}$ counting number in the island?\n\nA. $99$\nB. $101$\nC. $197$\nD. $199$\nE. None of the above',
          answer: 'D. $199$',
          principle:
            'Group the numbers by digit length using the $5$ available odd digits ($1, 3, 5, 7, 9$).',
          solution:
            'Only the $5$ odd digits $\\{1, 3, 5, 7, 9\\}$ can be used:\n- **$1$-digit numbers:** $5$ numbers ($1, 3, 5, 7, 9$).\n- **$2$-digit numbers:** $5 \\times 5 = 25$ numbers (from $11$ to $99$).\n  Together, there are $5 + 25 = 30$ numbers with at most $2$ digits.\n- **$3$-digit numbers starting with $1$:** There are $5 \\times 5 = 25$ such numbers, from $111$ to $199$:\n  - $111, 113, 115, 117, 119$ ($5$ numbers)\n  - $131, 133, 135, 137, 139$ ($5$ numbers)\n  - $151, 153, 155, 157, 159$ ($5$ numbers)\n  - $171, 173, 175, 177, 179$ ($5$ numbers)\n  - $191, 193, 195, 197, 199$ ($5$ numbers)\n\nSince $30 + 25 = 55$, the $55^{\\text{th}}$ counting number is the last of these, which is $199$.',
          rubric: [
            { code: 'M1', text: 'Counts $5$ one-digit, $25$ two-digit, and $25$ three-digit numbers starting with $1$.' },
            { code: 'A1', text: 'Finds the $55^{\\text{th}}$ number is $199$, option D.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'How many four-digit numbers are there such that if we add $2020$ to each of the numbers, the results are still four-digit numbers?\n\nA. $7020$\nB. $6880$\nC. $6980$\nD. $7880$\nE. None of the above',
          answer: 'C. $6980$',
          principle:
            'Find the smallest and largest valid four-digit integers, then count inclusive integers using $\\text{max} - \\text{min} + 1$.',
          solution:
            'A four-digit number $n$ ranges from $1000$ to $9999$. For $n + 2020$ to remain a four-digit number, we need:\n$$n + 2020 \\le 9999 \\implies n \\le 9999 - 2020 = 7979.$$\nThe smallest valid four-digit number is $1000$ (since $1000 + 2020 = 3020$ is a four-digit number), and the largest is $7979$.\nTherefore, the count of such four-digit numbers is:\n$$7979 - 1000 + 1 = 6980.$$',
          rubric: [
            { code: 'M1', text: 'Determines the valid range $1000 \\le n \\le 9999 - 2020 = 7979$.' },
            { code: 'A1', text: 'Computes $7979 - 1000 + 1 = 6980$, option C.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'In the grid below, the first row and the first column have been filled up with numbers from $10$ to $19$. The empty cells will be filled up with numbers by adding the topmost number in the column with the leftmost number in the row. (For example, $A = 17 + 14 = 31$ and $B = 19 + 18 = 37$.) After filling up all the empty cells, what will the sum of all the numbers in the grid be?\n\nA. $745$\nB. $725$\nC. $145$\nD. $135$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g4/fig-5.webp',
              alt: 'A 5-row by 6-column grid with top row 10, 11, 13, 15, 17, 19 and first column 10, 12, 14, 16, 18, and letters A and B in two interior cells.',
              caption: 'Addition grid with headers 10 to 19 for Question 5.'
            }
          ],
          answer: 'A. $745$',
          principle:
            'Count how many times each header number appears across the header cell itself and the interior sum cells.',
          solution:
            'Each of the $5$ column headers ($11, 13, 15, 17, 19$) appears once in the first row and once in each of the $4$ interior cells below it, for a total of $1 + 4 = 5$ times.\nEach of the $4$ row headers ($12, 14, 16, 18$) appears once in the first column and once in each of the $5$ interior cells to its right, for a total of $1 + 5 = 6$ times.\nThe corner number $10$ appears once.\nTherefore, the sum of all numbers in the grid is:\n$$10 + 5 \\times (11 + 13 + 15 + 17 + 19) + 6 \\times (12 + 14 + 16 + 18)$$\n$$= 10 + 5 \\times 75 + 6 \\times 60 = 10 + 375 + 360 = 745.$$',
          rubric: [
            { code: 'M1', text: 'Counts $5$ appearances of each column header and $6$ appearances of each row header plus $10$.' },
            { code: 'A1', text: 'Computes $10 + 375 + 360 = 745$, option A.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'Each of the numbers $138$ and $243$ has digits whose product is $24$. How many three-digit numbers are there whose digits have a product of $24$?\n\nA. $8$\nB. $9$\nC. $12$\nD. $18$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'List all valid single-digit factorizations of $24$ systematically by hundreds digit (or unordered digit triples with permutations).',
          solution:
            'Find all three-digit numbers whose digits multiply to $24$ by organizing by hundreds digit:\n- **Hundreds digit $1$:** Remaining two digits multiply to $24$: $138, 146, 164, 183$ ($4$ numbers).\n- **Hundreds digit $2$:** Remaining two digits multiply to $12$: $226, 234, 243, 262$ ($4$ numbers).\n- **Hundreds digit $3$:** Remaining two digits multiply to $8$: $318, 324, 342, 381$ ($4$ numbers).\n- **Hundreds digit $4$:** Remaining two digits multiply to $6$: $416, 423, 432, 461$ ($4$ numbers).\n- **Hundreds digit $6$:** Remaining two digits multiply to $4$: $614, 622, 641$ ($3$ numbers).\n- **Hundreds digit $8$:** Remaining two digits multiply to $3$: $813, 831$ ($2$ numbers).\n\nTotal count:\n$$4 + 4 + 4 + 4 + 3 + 2 = 21.$$\nSince $21$ is not among options A–D, the correct choice is **E. None of the above**.',
          rubric: [
            { code: 'M1', text: 'Systematically enumerates valid digit triples summing to $21$ three-digit numbers.' },
            { code: 'A1', text: 'Obtains $21$, selecting option E (None of the above).' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'The month of December of a certain calendar year has exactly $5$ Saturdays and $4$ Sundays. On which day of the week does the first day of December fall?\n\nA. Monday\nB. Tuesday\nC. Wednesday\nD. Thursday\nE. None of the above',
          answer: 'D. Thursday',
          principle:
            'December has $31$ days ($4$ full weeks plus $3$ extra days), so the $3$ weekdays appearing $5$ times must be three consecutive days ending on the last day of the month.',
          solution:
            'December has $31$ days, which is $4$ full weeks ($28$ days) plus $3$ extra days. Thus, the $29^{\\text{th}}$, $30^{\\text{th}}$, and $31^{\\text{st}}$ fall on the only three weekdays that appear $5$ times in the month.\nSince Saturday appears $5$ times while Sunday appears only $4$ times, there is no Sunday after the $5^{\\text{th}}$ Saturday. Therefore, the $5^{\\text{th}}$ Saturday must be December $31$.\nCounting backward $30$ days from December $31$ (or noting that December $29, 30, 31$ are Thursday, Friday, Saturday and $29 - 28 = 1$):\n- December $1$, $8$, $15$, $22$, and $29$ all fall on **Thursday**.',
          rubric: [
            { code: 'M1', text: 'Deduces that the $5^{\\text{th}}$ Saturday must be December $31$ since Sunday only appears $4$ times.' },
            { code: 'A1', text: 'Counts back $4$ weeks and $2$ days to Thursday, option D.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'What is the missing number in the following pattern?\n\nA. $5$\nB. $10$\nC. $16$\nD. $20$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g4/fig-8.webp',
              alt: 'Four equations with numbers inside polygons: 1 in a rectangle equals 9, 2 in a hexagon equals 16, 6 in an octagon equals 4, and 1 in a pentagon equals a question mark.',
              caption: 'Polygon-number pattern for Question 8.'
            }
          ],
          answer: 'C. $16$',
          principle:
            'Relate the number of sides of each enclosing polygon to the number inside it.',
          solution:
            'Observe the relationship between the number of sides $s$ of each polygon and the number $n$ inside it:\n- Rectangle ($4$ sides) with $1$ inside: $(4 - 1)^2 = 3^2 = 9$.\n- Hexagon ($6$ sides) with $2$ inside: $(6 - 2)^2 = 4^2 = 16$.\n- Octagon ($8$ sides) with $6$ inside: $(8 - 6)^2 = 2^2 = 4$.\n\nApplying the rule $(\\text{number of sides} - \\text{inner number})^2$ to the pentagon ($5$ sides) with $1$ inside:\n$$(5 - 1)^2 = 4^2 = 16.$$',
          rubric: [
            { code: 'M1', text: 'Identifies the rule $(\\text{sides} - \\text{inner number})^2$ across the first three polygons.' },
            { code: 'A1', text: 'Computes $(5 - 1)^2 = 16$, option C.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'How many numbers are there in the list below?\n$$6\\frac{1}{3}, \\; 7, \\; 7\\frac{2}{3}, \\; 8\\frac{1}{3}, \\; \\ldots, \\; 30\\frac{1}{3}, \\; 31$$\n\nA. $25$\nB. $26$\nC. $38$\nD. $37$\nE. None of the above',
          answer: 'C. $38$',
          principle:
            'Convert every mixed number and integer to thirds so the list becomes a simple arithmetic sequence of numerators.',
          solution:
            'Rewrite each term as an improper fraction with denominator $3$:\n$$6\\frac{1}{3} = \\frac{19}{3}, \\quad 7 = \\frac{21}{3}, \\quad 7\\frac{2}{3} = \\frac{23}{3}, \\quad 8\\frac{1}{3} = \\frac{25}{3}, \\quad \\ldots, \\quad 30\\frac{1}{3} = \\frac{91}{3}, \\quad 31 = \\frac{93}{3}.$$\nThe numerators form an arithmetic sequence $19, 21, 23, \\ldots, 93$ with a common difference of $2$.\nUsing the counting formula $(\\text{last} - \\text{first}) \\div \\text{difference} + 1$:\n$$(93 - 19) \\div 2 + 1 = 74 \\div 2 + 1 = 37 + 1 = 38.$$',
          rubric: [
            { code: 'M1', text: 'Converts terms to $\\frac{19}{3}, \\frac{21}{3}, \\ldots, \\frac{93}{3}$ and applies the arithmetic sequence count formula.' },
            { code: 'A1', text: 'Computes $38$, option C.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'The five-digit number $25M48$ is a multiple of $9$. What digit does $M$ represent?\n\nA. $9$\nB. $8$\nC. $7$\nD. $6$\nE. None of the above',
          answer: 'B. $8$',
          principle:
            'A whole number is divisible by $9$ if and only if the sum of its digits is divisible by $9$.',
          solution:
            'Find the sum of the digits of $25M48$:\n$$2 + 5 + M + 4 + 8 = 19 + M.$$\nSince $M$ is a single digit ($0 \\le M \\le 9$), the sum $19 + M$ lies between $19$ and $28$. The only multiple of $9$ in this range is $27$, so:\n$$19 + M = 27 \\implies M = 8.$$\nCheck: $25848 \\div 9 = 2872$.',
          rubric: [
            { code: 'M1', text: 'Applies the divisibility rule of $9$ to get $19 + M = 27$.' },
            { code: 'A1', text: 'Finds $M = 8$, option B.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'In the figure below, $ABCD$ and $PQRS$ are rectangles. $AD = PS = 6\\text{ cm}$ and $AB = PQ = 10\\text{ cm}$. Compare the areas of the shaded region of rectangle $ABCD$ and $PQRS$. Which of the following statements below is true?\n\nA. The area of the shaded region of $ABCD$ is equal to the area of the shaded region of $PQRS$.\nB. The area of the shaded region of $ABCD$ is greater than the area of the shaded region of $PQRS$.\nC. The area of the shaded region of $ABCD$ is less than the area of the shaded region of $PQRS$.\nD. Cannot be determined\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g4/fig-11.webp',
              alt: 'Two congruent rectangles ABCD and PQRS partitioned into shaded and unshaded triangles with equal base-height sums.',
              caption: 'Shaded rectangles ABCD and PQRS for Question 11.'
            }
          ],
          answer: 'A. The area of the shaded region of ABCD is equal to the area of the shaded region of PQRS.',
          principle:
            'Use $\\text{Area}(\\triangle) = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$ within each horizontal or vertical sub-rectangle.',
          solution:
            'Both rectangles have area $10 \\times 6 = 60\\text{ cm}^2$.\n- **In $ABCD$:** A horizontal line splits the rectangle into an upper strip (height $h_1$) and a lower strip (height $h_2$), with $h_1 + h_2 = 6\\text{ cm}$.\n  - In the upper strip, the two shaded triangles have bases summing to $AB = 10\\text{ cm}$ and height $h_1$, so their combined area is $\\frac{1}{2} \\times 10 \\times h_1$.\n  - In the lower strip, the single unshaded triangle has base $10\\text{ cm}$ and height $h_2$, covering half of the lower strip, so the shaded triangles also cover $\\frac{1}{2} \\times 10 \\times h_2$.\n  - Total shaded area in $ABCD$: $\\frac{1}{2} \\times 10 \\times (h_1 + h_2) = \\frac{1}{2} \\times 60 = 30\\text{ cm}^2$.\n- **In $PQRS$:** A vertical line splits the rectangle into a left strip (width $w_1$) and a right strip (width $w_2$), with $w_1 + w_2 = 10\\text{ cm}$.\n  - In the left strip, the two unshaded triangles have bases along $PS$ summing to $6\\text{ cm}$ and height $w_1$, so the shaded area is half the strip: $\\frac{1}{2} \\times 6 \\times w_1$.\n  - In the right strip, the two unshaded triangles have bases along $QR$ summing to $6\\text{ cm}$ and height $w_2$, so the shaded area is $\\frac{1}{2} \\times 6 \\times w_2$.\n  - Total shaded area in $PQRS$: $\\frac{1}{2} \\times 6 \\times (w_1 + w_2) = \\frac{1}{2} \\times 60 = 30\\text{ cm}^2$.\n\nBoth shaded regions have the same area ($30\\text{ cm}^2$), so option **A** is true.',
          rubric: [
            { code: 'M1', text: 'Shows that the shaded region in each rectangle is exactly half of the rectangle ($30\\text{ cm}^2$).' },
            { code: 'A1', text: 'Concludes the two shaded areas are equal, option A.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            "The time now is $16:56$ and Archie's $12$-hour digital clock shows $4:56\\text{ P.M.}$ He realizes that the digits of his digital clock are in increasing consecutive order. When the time is $12:17\\text{ P.M.}$ or $\\text{A.M.}$, the clock will show $12:17\\text{ P.M.}$ or $\\text{A.M.}$ respectively. How many minutes later will Archie's clock show digits again in increasing consecutive order?\n\nA. $507$ minutes\nB. $458$ minutes\nC. $467$ minutes\nD. $407$ minutes\nE. None of the above",
          answer: 'B. $458$ minutes',
          principle:
            'List valid $12$-hour clock displays whose digits are consecutive increasing integers, noting that minutes cannot exceed $59$.',
          solution:
            "After $4:56\\text{ P.M.}$, test the possible sequences of consecutive increasing digits on a $12$-hour clock:\n- $5:67\\text{ P.M.}$ is invalid because minutes must be less than $60$.\n- Starting with $12$ hours gives $12:34\\text{ A.M.}$, whose digits $1, 2, 3, 4$ are in increasing consecutive order (and no valid $6$-, $7$-, $8$-, $9$-, $10$-, or $11$-hour time has increasing consecutive digits).\n\nNow find the elapsed time from $4:56\\text{ P.M.}$ to $12:34\\text{ A.M.}$:\n- From $4:56\\text{ P.M.}$ to $11:56\\text{ P.M.}$ is $7$ hours.\n- From $11:56\\text{ P.M.}$ to $12:34\\text{ A.M.}$ is $4 + 34 = 38$ minutes.\n\nTotal minutes:\n$$7 \\times 60 + 38 = 420 + 38 = 458\\text{ minutes}.$$",
          rubric: [
            { code: 'M1', text: 'Identifies $12:34\\text{ A.M.}$ as the next valid time ($7\\text{ h }38\\text{ min}$ later).' },
            { code: 'A1', text: 'Converts to $458$ minutes, option B.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Ali has $80$ candles. He lights $1$ candle every day. He can recycle the wax of four used candles to form a new candle. After how many days will he need to buy more candles?\n\nA. $80$\nB. $130$\nC. $132$\nD. $133$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Track both the new candles burned and the leftover wax pieces at each recycling round.',
          solution:
            'Track the candles day by day across recycling rounds:\n- Initially, $80$ candles last $80$ days and yield $80$ pieces of wax.\n- Recycling $80$ pieces at $4$ per candle makes $80 \\div 4 = 20$ new candles, which last $20$ days and yield $20$ pieces of wax.\n- Recycling $20$ pieces makes $20 \\div 4 = 5$ new candles, which last $5$ days and yield $5$ pieces of wax.\n- Recycling $4$ of those $5$ pieces makes $1$ last candle (with $1$ piece of wax left over), lasting $1$ day and leaving $1 + 1 = 2$ pieces of wax—not enough to make another candle.\n\nTotal days before needing to buy more candles:\n$$80 + 20 + 5 + 1 = 106\\text{ days}.$$\nSince $106$ is not listed in options A–D, the answer is **E. None of the above**.',
          rubric: [
            { code: 'M1', text: 'Simulates recycling rounds: $80 \\to 20 \\to 5 \\to 1$ candles.' },
            { code: 'A1', text: 'Sums $106$ days and selects option E (None of the above).' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            "Among George, Helen and Irene, only one of them watched the movie 'Avengers'. When they were asked about the movie, they gave the following replies.\n- George said: Helen watched it.\n- Helen said: I have not watched it.\n- Irene said: I have not watched it.\n\nIf two of them lied, who watched the movie?\n\nA. George\nB. Helen\nC. Irene\nD. Impossible to determine\nE. None of the above",
          answer: 'C. Irene',
          principle:
            'Test each of the three suspects as the sole viewer and count how many of the three statements become lies.',
          solution:
            'Exactly one person watched the movie, so check all three cases:\n- **Case 1 (George watched it):** George lied, Helen told the truth, and Irene told the truth ($1$ lie — invalid).\n- **Case 2 (Helen watched it):** George told the truth, Helen lied, and Irene told the truth ($1$ lie — invalid).\n- **Case 3 (Irene watched it):** George lied, Helen told the truth, and Irene lied ($2$ lies — matches the condition).\n\nTherefore, **Irene** watched the movie.',
          rubric: [
            { code: 'M1', text: 'Evaluates truth/lie counts for each of the three possible viewers.' },
            { code: 'A1', text: 'Identifies Irene as the unique case with $2$ lies, option C.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Which one of the following options is a missing piece of the cube on the right?\n\nA. Option A (see figure)\nB. Option B (see figure)\nC. Option C (see figure)\nD. Option D (see figure)\nE. Option E (see figure)',
          figures: [
            {
              src: '/papers/sasmo-2020-g4/fig-15.webp',
              alt: 'A patterned 3D cube missing its front-top-left corner block and five candidate corner-block options labeled A through E.',
              caption: 'Patterned cube with missing corner piece and options A–E for Question 15.'
            }
          ],
          answer: 'B. Option B',
          principle:
            'Check both the pattern and the exact edge-to-edge orientation on all three visible faces (top, front-left, and front-right) of the missing corner block.',
          solution:
            'Examine the three visible faces needed to complete the outer cube corner:\n- **Top face:** Must complete the light-gray diagonal band and inner dark triangle pointing toward the front-left corner.\n- **Front-left face:** Must have a dark outer corner border and a light-gray triangular frame with a dark inner edge meeting the bottom-left seam.\n- **Front-right face:** Must continue the light-gray diagonal band sloping up-right across the dark corner square.\n\nComparing options A through E, only **Option B** and **Option E** have the matching face shapes on all three sides, and only **Option B** has the correct pattern orientation (in Option E, the front-left and front-right diagonal stripes are oriented incorrectly relative to the cube edges).',
          rubric: [
            { code: 'M1', text: 'Matches the three visible face patterns and eliminates misaligned rotations.' },
            { code: 'A1', text: 'Selects option B.' }
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
          prompt: 'What is the value of $95 \\times 37 + 95 \\times 42 + 21 \\times 95$?',
          answer: '$9500$',
          principle:
            'Factor out the common factor $95$ using the distributive property.',
          solution:
            'Factor out $95$ from all three products:\n$$95 \\times 37 + 95 \\times 42 + 21 \\times 95 = 95 \\times (37 + 42 + 21)$$\n$$= 95 \\times 100 = 9500.$$',
          rubric: [
            { code: 'M2', text: 'Factors out $95$ to obtain $95 \\times (37 + 42 + 21) = 95 \\times 100$.' },
            { code: 'A2', text: 'Evaluates $9500$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt: 'How many triangles are there in the figure below?',
          figures: [
            {
              src: '/papers/sasmo-2020-g4/fig-17.webp',
              alt: 'A symmetric geometric figure bounded on the left, bottom, and right with intersecting diagonal segments dividing it into triangular and polygonal regions.',
              caption: 'Intersecting-segments triangle counting diagram for Question 17.'
            }
          ],
          answer: '$42$',
          principle:
            'Count triangles systematically by the number of smallest undivided regions (parts) they contain.',
          solution:
            'Classify every triangle in the figure by the number of undivided regions ($1$-part pieces) it spans:\n- **$1$-part triangles:** $11$\n- **$2$-part triangles:** $12$\n- **$3$-part triangles:** $6$\n- **$4$-part triangles:** $6$\n- **$5$-part triangles:** $3$\n- **$7$-part triangles:** $4$\n\nAdding all sizes together:\n$$11 + 12 + 6 + 6 + 3 + 4 = 42.$$',
          rubric: [
            { code: 'M2', text: 'Counts triangles systematically by component region size ($1$-, $2$-, $3$-, $4$-, $5$-, and $7$-part).' },
            { code: 'A2', text: 'Obtains total $42$ triangles.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'I am thinking of a number. If the number is added to $8$, the sum is multiplied by $8$, $8$ is subtracted from the product, and the difference is divided by $8$, it yields a quotient of $80$. What is this number?',
          answer: '$73$',
          principle:
            'Work backward from the final quotient of $80$ by reversing each arithmetic operation in reverse order.',
          solution:
            'Reverse each step from the final result $80$:\n1. Undo "divided by $8$": $80 \\times 8 = 640$.\n2. Undo "$8$ is subtracted": $640 + 8 = 648$.\n3. Undo "multiplied by $8$": $648 \\div 8 = 81$.\n4. Undo "added to $8$": $81 - 8 = 73$.\n\nCheck: $\\big((73 + 8) \\times 8 - 8\\big) \\div 8 = (81 \\times 8 - 8) \\div 8 = 640 \\div 8 = 80$.',
          rubric: [
            { code: 'M2', text: 'Reverses all four operations in order ($80 \\times 8 = 640$, $+8 = 648$, $\\div 8 = 81$, $-8$).' },
            { code: 'A2', text: 'Finds the original number $73$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'The graph below shows the number of guests who visited the National Museum during the first six months of $2019$. All the horizontal lines are equally spaced. If the total number of guests who visited in January and May were $200$ fewer than those in June, how many people visited the museum in total during the six months?',
          figures: [
            {
              src: '/papers/sasmo-2020-g4/fig-19.webp',
              alt: 'Bar chart titled Guests at National Museum showing monthly columns for Jan, Feb, Mar, Apr, May, and Jun across equally spaced horizontal gridlines.',
              caption: 'Monthly museum visitors bar chart for Question 19.'
            }
          ],
          answer: '$2000$',
          principle:
            'Read each bar height in grid-line units, relate the unit difference to $200$ guests, and multiply the total units by the unit value.',
          solution:
            'Let $1$ grid spacing represent $1$ unit. Reading the heights of the six bars:\n- January: $2$ units\n- February: $4$ units\n- March: $5$ units\n- April: $3$ units\n- May: $1$ unit\n- June: $5$ units\n\nTotal units across the six months:\n$$2 + 4 + 5 + 3 + 1 + 5 = 20\\text{ units}.$$\nJanuary and May combined have $2 + 1 = 3$ units, whereas June has $5$ units. Their difference is:\n$$5 - 3 = 2\\text{ units} = 200\\text{ guests} \\implies 1\\text{ unit} = 100\\text{ guests}.$$\nTherefore, the total number of guests during the six months is:\n$$20 \\times 100 = 2000.$$',
          rubric: [
            { code: 'M2', text: 'Reads bar heights ($2, 4, 5, 3, 1, 5$), sums to $20$ units, and solves $2\\text{ units} = 200$.' },
            { code: 'A2', text: 'Computes total $2000$ guests.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'The following square is divided into four rectangles as shown. The sum of the perimeters of the four rectangles is $72\\text{ cm}$. Find the side length (in $\\text{cm}$) of the square.',
          figures: [
            {
              src: '/papers/sasmo-2020-g4/fig-20.webp',
              alt: 'A square partitioned by one full horizontal segment and two partial vertical segments into four rectangles.',
              caption: 'Square partitioned into four rectangles for Question 20.'
            }
          ],
          answer: '$9\\text{ cm}$',
          principle:
            'Add the horizontal and vertical segments forming all four perimeters by projecting them onto the outer sides of the square.',
          solution:
            'Let $s$ be the side length of the square.\n- Across the two upper rectangles and two lower rectangles, the vertical sides sum to $2s$ along the left and right outer edges plus $2s$ along the internal vertical cuts (each internal cut bounds a rectangle on both sides), giving $4s$ in total.\n- Across the left and right halves, the horizontal sides sum to $2s$ along the top and bottom outer edges plus $2s$ along the internal horizontal cut (counted once for the top rectangles and once for the bottom rectangles), giving $4s$ in total.\n\nHence the sum of the four perimeters is:\n$$4s + 4s = 8s = 72\\text{ cm} \\implies s = 72 \\div 8 = 9\\text{ cm}.$$',
          rubric: [
            { code: 'M2', text: 'Establishes that the sum of the four perimeters equals $8$ times the square side length.' },
            { code: 'A2', text: 'Finds side length $9\\text{ cm}$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'One wants to colour the circles in the figure below such that any pair of circles connected by a line segment shares different colours. What is the least number of colours needed for the colouring?',
          figures: [
            {
              src: '/papers/sasmo-2020-g4/fig-21.webp',
              alt: 'Eight small circles arranged as an inner square inside an outer square, with each corner of the inner square connected to the corresponding corner of the outer square.',
              caption: 'Eight-circle network diagram for Question 21.'
            }
          ],
          answer: '$2$',
          principle:
            'Alternate two colours around each square ring and verify that every radial edge connects opposite colours.',
          solution:
            'Because connected circles cannot share a colour, at least $2$ colours are required.\nCheck whether $2$ colours—say Yellow ($Y$) and Green ($G$)—suffice by alternating around the outer $4$-cycle and reversing on the inner $4$-cycle:\n- **Outer square (clockwise from top-left):** $Y, G, Y, G$.\n- **Inner square (clockwise from top-left):** $G, Y, G, Y$.\n\nEvery edge along the outer square, every edge along the inner square, and every diagonal segment connecting an outer corner to its inner corner joins a $Y$ circle and a $G$ circle.\nThus, the least number of colours needed is $2$.',
          rubric: [
            { code: 'M2', text: 'Constructs a valid alternating $2$-colouring of the outer and inner squares with opposite colours on radial connections.' },
            { code: 'A2', text: 'Concludes the least number of colours is $2$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'Ronald McDonald, a farmer, has chickens, goats and cows in his farm. He has $40$ chickens and goats combined. He notices that $3$ times the number of his chickens is $5$ times the number of his cows. On the other hand, $2$ times the number of goats is $10$ times the number of his cows. Help Ronald McDonald determine the total number of animal feet in his farm.',
          answer: '$164$',
          principle:
            'Use unit ratios to express chickens, cows, and goats in terms of one common unit, solve from the combined chicken-and-goat count, then sum the feet.',
          solution:
            'From the given relationships:\n- $3 \\times \\text{chickens} = 5 \\times \\text{cows}$: let chickens $= 5\\text{ units}$, so cows $= 3\\text{ units}$.\n- $2 \\times \\text{goats} = 10 \\times \\text{cows}$, so $\\text{goats} = 5 \\times \\text{cows} = 5 \\times 3\\text{ units} = 15\\text{ units}$.\n\nThe combined number of chickens and goats is:\n$$5\\text{ units} + 15\\text{ units} = 20\\text{ units} = 40 \\implies 1\\text{ unit} = 2.$$\nHence the counts of each animal are:\n- Chickens: $5 \\times 2 = 10$\n- Cows: $3 \\times 2 = 6$\n- Goats: $15 \\times 2 = 30$\n\nEach chicken has $2$ feet and each cow or goat has $4$ feet, so the total number of animal feet is:\n$$10 \\times 2 + 6 \\times 4 + 30 \\times 4 = 20 + 24 + 120 = 164.$$',
          rubric: [
            { code: 'M2', text: 'Finds animal counts ($10$ chickens, $6$ cows, $30$ goats) using unit ratios.' },
            { code: 'A2', text: 'Computes total animal feet $164$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'Kate bought some pieces of candy. She ate $\\frac{1}{3}$ at home and brought the rest to school. She shared the candy with her seven friends so that each friend received $26$ pieces of candy. If Kate left with $22$ pieces of candy, how many pieces of candy did she initially buy?',
          answer: '$306$',
          principle:
            'Find how much candy Kate brought to school ($\\frac{2}{3}$ of the initial amount) by adding what she gave away and what remained.',
          solution:
            'Let the initial number of pieces of candy be $3\\text{ units}$.\nAfter eating $\\frac{1}{3}$ ($1\\text{ unit}$) at home, Kate brought $3 - 1 = 2\\text{ units}$ to school.\nAt school, she gave $7 \\times 26 = 182$ pieces to her seven friends and had $22$ pieces left, so:\n$$2\\text{ units} = 182 + 22 = 204.$$\nTherefore, $1\\text{ unit} = 204 \\div 2 = 102$, and the total amount of candy she initially bought is:\n$$3\\text{ units} = 3 \\times 102 = 306.$$',
          rubric: [
            { code: 'M2', text: 'Equates the remaining $\\frac{2}{3}$ ($2$ units) to $7 \\times 26 + 22 = 204$.' },
            { code: 'A2', text: 'Computes initial candy count $306$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'A printer printed $237$ digits for all the page numbers of a storybook. How many pages are there in the storybook?',
          answer: '$115$',
          principle:
            'Count digits in groups by page-number length: $1$-digit pages ($1$–$9$), $2$-digit pages ($10$–$99$), and $3$-digit pages ($100$ onward).',
          solution:
            'Break down the digits printed by page range:\n- **Pages $1$ to $9$ ($9$ pages):** $9 \\times 1 = 9$ digits.\n- **Pages $10$ to $99$ ($99 - 10 + 1 = 90$ pages):** $90 \\times 2 = 180$ digits.\n\nDigits remaining for $3$-digit page numbers:\n$$237 - 9 - 180 = 48\\text{ digits}.$$\nEach $3$-digit page number uses $3$ digits, so the number of $3$-digit pages is:\n$$48 \\div 3 = 16\\text{ pages}.$$\nThus, the storybook has:\n$$99 + 16 = 115\\text{ pages}.$$',
          rubric: [
            { code: 'M2', text: 'Subtracts $9 + 180 = 189$ digits for pages $1$–$99$, leaving $48$ digits ($16$ three-digit pages).' },
            { code: 'A2', text: 'Finds total $115$ pages.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'In the following, all the different letters stand for different digits.\n$$\\begin{array}{ccccc} & A & B & A & C \\\\ + & D & B & E & C \\\\ \\hline A & C & E & D & C \\end{array}$$\nFind the value of the $4$-digit number $DBEC$.',
          answer: '$9480$',
          principle:
            'Analyze column sums and carryovers from left to right and in the units column, using distinctness of the five letters.',
          solution:
            'Examine the columns of $ABAC + DBEC = ACEDC$:\n1. **Ten-thousands digit $A$:** Adding two $4$-digit numbers produces a $5$-digit sum starting with $A$, so $A = 1$ (carried from the thousands column).\n2. **Ones column ($C + C$):** The units digit of $C + C$ is $C$, which forces $C = 0$ (with no carryover).\n3. **Thousands column ($A + D = 1 + D$):** The thousands sum gives $AC = 10$ (or $10$ from $1 + D$ plus a possible carryover of $1$ from the hundreds column), so $D \\in \\{8, 9\\}$.\n   - If $D = 8$, there must be a carryover of $1$ from the hundreds column. In the tens column, $A + E = 1 + E = D = 8$ (no carryover from ones, and $1 + E < 10$), giving $E = 7$. Then in the hundreds column, $B + B$ would have to end in $E = 7$, which is impossible because $B + B$ is always even.\n   - Therefore $D = 9$, with no carryover from the hundreds column into the thousands column.\n4. **Tens column ($A + E = 1 + E$):** Since $1 + E$ produces $D = 9$ (with no carryover from the ones column), $E = 9 - 1 = 8$, and there is no carryover into the hundreds column.\n5. **Hundreds column ($B + B = E = 8$):** With no carryover into the thousands column, $B + B = 8 \\implies B = 4$.\n\nCheck: $1410 + 9480 = 10890$, and all five digits $A=1, B=4, C=0, D=9, E=8$ are distinct. Hence $DBEC = 9480$.',
          rubric: [
            { code: 'M2', text: 'Deduces $A = 1$, $C = 0$, eliminates $D = 8$ by parity of $B + B$, and finds $D = 9, E = 8, B = 4$.' },
            { code: 'A2', text: 'Determines $DBEC = 9480$.' }
          ]
        }
      ]
    }
  ]
};
