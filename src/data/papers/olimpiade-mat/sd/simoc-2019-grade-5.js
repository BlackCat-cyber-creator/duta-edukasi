/**
 * Paket Soal: SIMOC 2019 Grade 5 (Primary 5)
 * Sumber: Singapore International Math Olympiad Challenge 2019, Grade 5 Contest (Grade-5-SIMOC-2019.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 7, 12, 16, 24, dan 25 dilengkapi gambar potongan asli (.webp).
 */
export default {
  id: 'simoc-2019-g5',
  slug: 'simoc-2019-grade-5',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'SIMOC 2019 Grade 5: arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan',
    'sd5-bab4-keliling-bangun-datar',
    'sd5-bab5-luas-daerah-bangun-datar'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SIMOC',
  title: 'SIMOC 2019 Grade 5',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks; 1 mark deducted for a wrong answer in the live contest). Section B has 10 short-answer questions worth 4 marks each (40 marks; no deduction for wrong answers). Diagrams for Questions 7, 12, 16, 24, and 25 are provided as figures.',
  source: {
    org: 'SIMOC',
    file: 'Grade-5-SIMOC-2019.pdf',
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
            'Calculate\n$$(2018 - 2016) + (2016 - 2014) + (2014 - 2012) + \\dots + (6 - 4) + (4 - 2)$$\n\nA. $2$\nB. $1008$\nC. $1009$\nD. $2016$\nE. None of the Above',
          answer: 'D. $2016$',
          principle:
            'Notice that every pair has difference $2$, or cancel adjacent opposite terms by telescoping.',
          solution:
            'Each parenthesized pair evaluates to $2$:\n$$2018 - 2016 = 2, \\quad 2016 - 2014 = 2, \\quad \\dots, \\quad 4 - 2 = 2.$$\nThe subtracted even numbers run from $2$ to $2016$, which gives $\\frac{2016}{2} = 1008$ pairs. Therefore:\n$$1008 \\times 2 = 2016.$$\n(Equivalently, removing parentheses telescopes $-2016 + 2016$, $-2014 + 2014$, $\\dots$, $-4 + 4$, leaving $2018 - 2 = 2016$.)',
          rubric: [
            { code: 'M1', text: 'Finds that there are $1008$ pairs each equal to $2$ (or applies telescoping cancellation).' },
            { code: 'A1', text: 'Computes $2016$, option D.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'It is given that $n! = n \\times (n - 1) \\times (n - 2) \\times \\dots \\times 2 \\times 1$. For example, $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$. What is the remainder when $1! + 2! + 3! + 4! + \\dots + 19! + 20!$ is divided by $20$?\n\nA. $12$\nB. $13$\nC. $14$\nD. $15$\nE. None of the Above',
          answer: 'B. $13$',
          principle:
            'Every factorial from $5!$ onward contains both $5$ and $4$ as factors, so it is a multiple of $20$ and contributes $0$ to the remainder.',
          solution:
            'For every $n \\ge 5$, $n!$ includes the factors $5$ and $4$, so $n!$ is divisible by $5 \\times 4 = 20$. Thus, only the first four terms affect the remainder modulo $20$:\n$$1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33.$$\nDividing $33$ by $20$ gives $33 = 1 \\times 20 + 13$, so the remainder is $13$.',
          rubric: [
            { code: 'M1', text: 'Shows that $n!$ is divisible by $20$ for all $n \\ge 5$ and sums $1! + 2! + 3! + 4! = 33$.' },
            { code: 'A1', text: 'Finds remainder $13$, option B.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'What is the remainder when the number $\\underbrace{2222222222}_{10\\text{ }2\\text{s}}$ is divided by $7$?\n\nA. $3$\nB. $4$\nC. $5$\nD. $6$\nE. None of the Above',
          answer: 'A. $3$',
          principle:
            'Any $6$-digit repdigit $aaaaaa = a \\times 111111$ is divisible by $7$ because $111111 = 7 \\times 15873$.',
          solution:
            'Since $111111 = 7 \\times 15873$, any block of six identical digits is divisible by $7$. Break the $10$-digit number into its first six $2$s and last four $2$s:\n$$2222222222 = 222222 \\times 10000 + 2222.$$\nBecause $222222$ is a multiple of $7$, the remainder equals that of $2222$ divided by $7$:\n$$2222 = 7 \\times 317 + 3.$$\nTherefore, the remainder is $3$.',
          rubric: [
            { code: 'M1', text: 'Uses $7 \\mid 222222$ to reduce the $10$-digit number to $2222$.' },
            { code: 'A1', text: 'Divides $2222$ by $7$ to obtain remainder $3$, option A.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'In how many ways can three students in a class receive grades $A$, $B$, $C$ or $D$ so that no two students receive the same grade.\n\nA. $6$\nB. $24$\nC. $27$\nD. $64$\nE. None of the Above',
          answer: 'B. $24$',
          principle:
            'Assign grades sequentially using the multiplication principle, reducing the number of available grades by $1$ after each student.',
          solution:
            'Assign grades to the three students one by one:\n- The first student can receive any of the $4$ grades ($A, B, C,$ or $D$).\n- The second student can receive any of the remaining $3$ grades.\n- The third student can receive any of the remaining $2$ grades.\n\nBy the multiplication principle, the total number of ways is:\n$$4 \\times 3 \\times 2 = 24.$$',
          rubric: [
            { code: 'M1', text: 'Applies the multiplication principle with $4$, $3$, and $2$ choices.' },
            { code: 'A1', text: 'Computes $24$, option B.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'The total number of apples and pears in a container is $220$. Ben later gave away $38$ pears and $\\frac{5}{9}$ of the apples. The remaining apples and the remaining pears in the container were now equal in number. How many pears were there in the container at first?\n\nA. $38$\nB. $56$\nC. $94$\nD. $182$',
          answer: 'C. $94$',
          principle:
            'Express the initial number of apples as $9$ equal units so that giving away $\\frac{5}{9}$ leaves $4$ units, matching the remaining pears.',
          solution:
            'Let the initial number of apples be $9$ units.\n- After giving away $\\frac{5}{9}$ of the apples ($5$ units), $4$ units of apples remain.\n- Since the remaining pears equal the remaining apples, $4$ units of pears remain, meaning the initial number of pears is $4\\text{ units} + 38$.\n\nUsing the total of $220$ fruits:\n$$9\\text{ units} + (4\\text{ units} + 38) = 220 \\implies 13\\text{ units} = 182 \\implies 1\\text{ unit} = 14.$$\nThus, the number of pears at first was:\n$$4 \\times 14 + 38 = 56 + 38 = 94.$$',
          rubric: [
            { code: 'M1', text: 'Sets initial apples to $9$ units and initial pears to $4\\text{ units} + 38$, obtaining $13\\text{ units} = 182$.' },
            { code: 'A1', text: 'Finds $1\\text{ unit} = 14$ and computes $94$ pears, option C.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'The clock in my bedroom shows the time which is four minutes ahead the real time. When the real time is 7:00 AM, it shows 7:04 AM. The clock in my kitchen is also faulty. When the one in the bedroom shows 8:55 AM, the one in the kitchen shows 8:53 AM. I can\'t trust the clock in Dad\'s car, either. When I got in the car yesterday, the clock in the kitchen showed 8:30 PM and the clock in the car said 8:24 PM. When I arrived to school, the clock outside the building showed 9:01 AM and the clock in the car said 8:56 AM. What did the clock outside school show when I got up at 6:30 AM, according to my bedroom clock?\n\nA. 6:22 AM\nB. 6:24 AM\nC. 6:26 AM\nD. 6:27 AM\nE. None of the Above',
          answer: 'D. 6:27 AM',
          principle:
            'Chain each clock\'s offset relative to the real time step by step.',
          solution:
            'Express each clock relative to the real time:\n1. **Bedroom clock:** $+4$ minutes relative to real time.\n2. **Kitchen clock:** $2$ minutes behind the bedroom clock ($8:53$ vs $8:55$), so $+4 - 2 = +2$ minutes relative to real time.\n3. **Car clock:** $6$ minutes behind the kitchen clock ($8:24$ vs $8:30$), so $+2 - 6 = -4$ minutes relative to real time.\n4. **School clock:** $5$ minutes ahead of the car clock ($9:01$ vs $8:56$), so $-4 + 5 = +1$ minute relative to real time.\n\nWhen the bedroom clock shows $6:30\\text{ AM}$, the real time is $6:30 - 4\\text{ min} = 6:26\\text{ AM}$. Since the school clock is $1$ minute ahead of the real time, it shows:\n$$6:26 + 1\\text{ min} = 6:27\\text{ AM}.$$',
          rubric: [
            { code: 'M1', text: 'Chains the clock offsets to determine that the school clock is $1$ minute ahead of real time (or $3$ minutes behind the bedroom clock).' },
            { code: 'A1', text: 'Finds $6:27\\text{ AM}$, option D.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'In the figure below, $AB = AC = BC = BD$. What is the measure of $\\angle D$ in degrees?\n\nA. $15$\nB. $30$\nC. $60$\nD. $120$\nE. None of the Above',
          figures: [
            {
              src: '/papers/simoc-2019-g5/fig-7.webp',
              alt: 'Triangle ABC with side AB extended to D such that segments AB, AC, BC, and BD are marked equal.',
              caption: 'Equilateral and isosceles triangle configuration for Question 7.'
            }
          ],
          answer: 'B. $30$',
          principle:
            'An equilateral triangle has all angles equal to $60^\\circ$, and an exterior angle of a triangle equals the sum of the two opposite interior angles.',
          solution:
            'Since $AB = AC = BC$, $\\triangle ABC$ is equilateral, so $\\angle ABC = 60^\\circ$.\nBecause $ABD$ is a straight line, $\\angle CBD = 180^\\circ - 60^\\circ = 120^\\circ$.\nIn $\\triangle BCD$, $BC = BD$, so the base angles are equal: $\\angle BCD = \\angle D$. Therefore:\n$$\\angle D = \\frac{180^\\circ - 120^\\circ}{2} = 30^\\circ.$$',
          rubric: [
            { code: 'M1', text: 'Identifies $\\angle ABC = 60^\\circ$ and $\\angle CBD = 120^\\circ$ in isosceles $\\triangle BCD$.' },
            { code: 'A1', text: 'Computes $\\angle D = 30^\\circ$, option B.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'John\'s speed of climbing up a mountain is $2\\text{ km/h}$. His speed of descent is $6\\text{ km/h}$. What is his average speed (in $\\text{km/h}$) for the whole journey?\n\nA. $3$\nB. $4$\nC. $5$\nD. $6$\nE. $8$',
          answer: 'A. $3$',
          principle:
            'Average speed equals total distance divided by total time, not the arithmetic mean of the two speeds.',
          solution:
            'Assume the one-way distance up the mountain is $6\\text{ km}$ (the LCM of $2$ and $6$).\n- Time to climb up: $\\frac{6}{2} = 3\\text{ hours}$.\n- Time to descend: $\\frac{6}{6} = 1\\text{ hour}$.\n\nTotal distance is $6 + 6 = 12\\text{ km}$, and total time is $3 + 1 = 4\\text{ hours}$. Thus, the average speed is:\n$$\\frac{12}{4} = 3\\text{ km/h}.$$',
          rubric: [
            { code: 'M1', text: 'Uses total distance divided by total time (e.g., choosing a convenient one-way distance such as $6\\text{ km}$).' },
            { code: 'A1', text: 'Computes average speed $3\\text{ km/h}$, option A.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'In a class of $42$ students, $18$ students are in the Math club, $5$ students are in both the Math Club and Science Club, and $14$ students are not in any clubs. How many students are in the Science Club?\n\nA. $10$\nB. $15$\nC. $24$\nD. $28$\nE. None of the Above',
          answer: 'B. $15$',
          principle:
            'Apply the inclusion-exclusion principle: $|M \\cup S| = |M| + |S| - |M \\cap S|$.',
          solution:
            'First, find the number of students in at least one club:\n$$42 - 14 = 28\\text{ students}.$$\nOf these $28$ students, $18$ are in the Math Club, so the number of students in the Science Club only is:\n$$28 - 18 = 10\\text{ students}.$$\nIncluding the $5$ students in both clubs, the total number of students in the Science Club is:\n$$10 + 5 = 15.$$',
          rubric: [
            { code: 'M1', text: 'Subtracts $14$ from $42$ to get $28$ students in at least one club and applies inclusion-exclusion.' },
            { code: 'A1', text: 'Obtains $15$ students, option B.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'Given that a number $3A4A6A9A2$ is divisible by $11$, what is the value of $A$?\n\nA. $5$\nB. $6$\nC. $7$\nD. $8$\nE. None of the Above',
          answer: 'B. $6$',
          principle:
            'A number is divisible by $11$ if and only if the difference between the sum of its digits in odd positions and the sum of its digits in even positions is a multiple of $11$.',
          solution:
            'Compute the alternating digit sums of $3A4A6A9A2$:\n- Sum of digits in the $1$st, $3$rd, $5$th, $7$th, and $9$th places: $3 + 4 + 6 + 9 + 2 = 24$.\n- Sum of digits in the $2$nd, $4$th, $6$th, and $8$th places: $A + A + A + A = 4A$.\n\nFor divisibility by $11$, the difference $24 - 4A$ must be a multiple of $11$. Since $0 \\le A \\le 9$, we have $-12 \\le 24 - 4A \\le 24$, so $24 - 4A \\in \\{-11, 0, 11, 22\\}$. Only $24 - 4A = 0$ gives an integer digit:\n$$4A = 24 \\implies A = 6.$$',
          rubric: [
            { code: 'M1', text: 'Sets up the divisibility-by-$11$ condition that $24 - 4A$ is a multiple of $11$.' },
            { code: 'A1', text: 'Solves for digit $A = 6$, option B.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'John was computing for the average of the fractions $\\frac{3}{4}, \\frac{4}{5}, \\frac{7}{9}, \\frac{9}{11}$ when he mistakenly interchanged the numerator and the denominator of one of the given fractions. What is the greatest possible difference between the new average and the supposed average of the original set of fractions?\n\nA. $\\frac{17}{140}$\nB. $\\frac{9}{80}$\nC. $\\frac{7}{48}$\nD. $\\frac{10}{99}$\nE. None of the Above',
          answer: 'C. $\\frac{7}{48}$',
          principle:
            'Changing one of $4$ numbers by $\\Delta$ changes their average by $\\frac{\\Delta}{4}$.',
          solution:
            'When a fraction $\\frac{a}{b}$ is replaced by $\\frac{b}{a}$, the sum of the $4$ fractions changes by $\\frac{b}{a} - \\frac{a}{b}$, so the average changes by $\\frac{1}{4}\\left(\\frac{b}{a} - \\frac{a}{b}\\right)$. Compute this change for each fraction:\n- $\\frac{3}{4}$: $\\frac{1}{4}\\left(\\frac{4}{3} - \\frac{3}{4}\\right) = \\frac{1}{4} \\times \\frac{7}{12} = \\frac{7}{48}$.\n- $\\frac{4}{5}$: $\\frac{1}{4}\\left(\\frac{5}{4} - \\frac{4}{5}\\right) = \\frac{1}{4} \\times \\frac{9}{20} = \\frac{9}{80}$.\n- $\\frac{7}{9}$: $\\frac{1}{4}\\left(\\frac{9}{7} - \\frac{7}{9}\\right) = \\frac{1}{4} \\times \\frac{32}{63} = \\frac{8}{63}$.\n- $\\frac{9}{11}$: $\\frac{1}{4}\\left(\\frac{11}{9} - \\frac{9}{11}\\right) = \\frac{1}{4} \\times \\frac{40}{99} = \\frac{10}{99}$.\n\nComparing the four differences, $\\frac{7}{48} \\approx 0.1458$ is larger than $\\frac{8}{63} \\approx 0.1270$, $\\frac{9}{80} = 0.1125$, and $\\frac{10}{99} \\approx 0.1010$. Thus, the greatest possible difference is $\\frac{7}{48}$.',
          rubric: [
            { code: 'M1', text: 'Identifies that inverting the smallest fraction $\\frac{3}{4}$ produces the largest increase $\\frac{1}{4}\\left(\\frac{4}{3} - \\frac{3}{4}\\right)$.' },
            { code: 'A1', text: 'Computes $\\frac{7}{48}$, option C.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'How many triangles are there in the figure below?\n\nA. $21$\nB. $63$\nC. $42$\nD. $84$\nE. None of the Above',
          figures: [
            {
              src: '/papers/simoc-2019-g5/fig-12.webp',
              alt: 'Large triangle divided by five line segments from the top vertex to the base and three transverse line segments across the sides.',
              caption: 'Subdivided triangle diagram for Question 12.'
            }
          ],
          answer: 'D. $84$',
          principle:
            'Every triangle in the figure uses the top vertex and two of the seven rays, bounded below by one of the four transverse lines.',
          solution:
            'All triangles have the top vertex as their apex. Along the base, the five interior segments divide the base into $6$ smaller intervals, so the number of ways to choose a base segment on any single transverse line is:\n$$1 + 2 + 3 + 4 + 5 + 6 = 21.$$\nThere are $4$ transverse lines (the bottom base plus $3$ crossbars above it). Multiplying gives the total number of triangles:\n$$21 \\times 4 = 84.$$',
          rubric: [
            { code: 'M1', text: 'Counts $21$ triangles per horizontal level and identifies $4$ levels.' },
            { code: 'A1', text: 'Computes $21 \\times 4 = 84$, option D.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'The operation $\\otimes$ is defined as $a \\otimes b = \\frac{a}{b} + \\frac{1}{a + b + ab - M}$. If it is known that $1 \\otimes 2 = \\frac{3}{4}$, find the value of $5 \\otimes 6$.\n\nA. $\\frac{97}{120}$\nB. $\\frac{103}{120}$\nC. $\\frac{6}{7}$\nD. $\\frac{7}{6}$\nE. None of the Above',
          answer: 'B. $\\frac{103}{120}$',
          principle:
            'Substitute the known pair $(1, 2)$ into the definition to solve for the constant $M$, then evaluate $5 \\otimes 6$.',
          solution:
            'Substitute $a = 1$ and $b = 2$ into the definition:\n$$1 \\otimes 2 = \\frac{1}{2} + \\frac{1}{1 + 2 + 1 \\times 2 - M} = \\frac{3}{4}.$$\nSubtract $\\frac{1}{2}$ from both sides:\n$$\\frac{1}{5 - M} = \\frac{3}{4} - \\frac{1}{2} = \\frac{1}{4} \\implies 5 - M = 4 \\implies M = 1.$$\nNow evaluate $5 \\otimes 6$ with $M = 1$:\n$$5 \\otimes 6 = \\frac{5}{6} + \\frac{1}{5 + 6 + 5 \\times 6 - 1} = \\frac{5}{6} + \\frac{1}{40} = \\frac{100}{120} + \\frac{3}{120} = \\frac{103}{120}.$$',
          rubric: [
            { code: 'M1', text: 'Substitutes $1 \\otimes 2 = \\frac{3}{4}$ to find $M = 1$.' },
            { code: 'A1', text: 'Computes $5 \\otimes 6 = \\frac{103}{120}$, option B.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'The ratio of the perimeter of a rectangle to the length of one of its sides is $14 : 3$. If the area of the rectangle is $27\\text{ cm}^2$, how long is the longer side?\n\nA. $3\\text{ cm}$\nB. $6\\text{ cm}$\nC. $18\\text{ cm}$\nD. $24\\text{ cm}$\nE. None of the Above',
          answer: 'B. $6\\text{ cm}$',
          principle:
            'Represent the perimeter and the given side in ratio units to find the ratio of the two sides, then use the area to solve for $1$ unit.',
          solution:
            'Let the perimeter be $14u$ and one side be $3u$. Since the perimeter is twice the sum of the two adjacent sides, the sum of the two sides is $7u$, so the other side is:\n$$7u - 3u = 4u.$$\nUsing the area of the rectangle:\n$$3u \\times 4u = 27 \\implies 12u^2 = 27 \\implies u^2 = \\frac{27}{12} = \\frac{9}{4} \\implies u = \\frac{3}{2}\\text{ cm}.$$\nTherefore, the longer side has length:\n$$4u = 4 \\times \\frac{3}{2} = 6\\text{ cm}.$$',
          rubric: [
            { code: 'M1', text: 'Finds the sides in the ratio $3u : 4u$ and sets $12u^2 = 27$ to get $u = \\frac{3}{2}\\text{ cm}$.' },
            { code: 'A1', text: 'Computes the longer side $6\\text{ cm}$, option B.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Amy, working alone, can finish painting a house in $36$ hours while Brad, working alone, can finish painting the same house in $48$ hours. Each of them works exactly $8$ hours everyday. However, Amy rests every Tuesday and Thursday while Brad rests every Wednesday. If they start painting the house together on a Monday, on what day of the week will they finish painting the house in the least possible amount of time.\n\nA. Wednesday\nB. Thursday\nC. Friday\nD. Saturday\nE. Sunday',
          answer: 'C. Friday',
          principle:
            'Convert each person\'s hourly rate into a daily fraction of the house and accumulate the work day by day according to their rest schedules.',
          solution:
            'In an $8$-hour workday:\n- Amy paints $\\frac{8}{36} = \\frac{2}{9} = \\frac{4}{18}$ of the house per working day.\n- Brad paints $\\frac{8}{48} = \\frac{1}{6} = \\frac{3}{18}$ of the house per working day.\n\nTrack the cumulative work starting on Monday:\n- **Monday** (Amy and Brad): $\\frac{4}{18} + \\frac{3}{18} = \\frac{7}{18}$ (total $\\frac{7}{18}$).\n- **Tuesday** (Brad only): $\\frac{3}{18}$ (total $\\frac{10}{18}$).\n- **Wednesday** (Amy only): $\\frac{4}{18}$ (total $\\frac{14}{18}$).\n- **Thursday** (Brad only): $\\frac{3}{18}$ (total $\\frac{17}{18}$).\n- **Friday** (Amy and Brad): $\\frac{1}{18}$ remains, and together they paint $\\frac{7}{18}$ in a full day, so they finish on **Friday**.',
          rubric: [
            { code: 'M1', text: 'Computes daily rates $\\frac{2}{9}$ (Amy) and $\\frac{1}{6}$ (Brad) and sums work through Thursday as $\\frac{17}{18}$.' },
            { code: 'A1', text: 'Concludes the house is finished on Friday, option C.' }
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
            'The perimeter of parallelogram $ABCD$ is $68$. Parallelogram $ABCD$ has been divided into $9$ smaller parallelograms by $4$ parallel lines. The perimeters of four of the smaller parallelograms are $34$, $38$, $20$ and $24$ as shown. Find the perimeter of the shaded region.',
          figures: [
            {
              src: '/papers/simoc-2019-g5/fig-16.webp',
              alt: 'Parallelogram ABCD divided by two pairs of parallel lines into nine smaller parallelograms with four corner perimeters labeled 34, 38, 20, and 24 and the central region shaded.',
              caption: 'Subdivided parallelogram ABCD for Question 16.'
            }
          ],
          answer: '$10$',
          principle:
            'Adding the perimeters of two diagonally opposite corner parallelograms covers every boundary segment of the big parallelogram except the sides of the central shaded parallelogram.',
          solution:
            'Let the four parallel lines divide the horizontal side into segments $x_1, x_2, x_3$ and the slanted side into segments $y_1, y_2, y_3$ (with $x_2$ and $y_2$ being the sides of the central shaded parallelogram).\nThe perimeters of the top-left and bottom-right corner parallelograms are:\n$$2(x_1 + y_1) = 34 \\quad\\text{and}\\quad 2(x_3 + y_3) = 24.$$\nAdding them gives:\n$$2(x_1 + x_3 + y_1 + y_3) = 34 + 24 = 58.$$\nSince the perimeter of $ABCD$ is $2(x_1 + x_2 + x_3 + y_1 + y_2 + y_3) = 68$, subtracting gives the perimeter of the shaded parallelogram:\n$$2(x_2 + y_2) = 68 - 58 = 10.$$',
          rubric: [
            { code: 'M2', text: 'Sums a pair of opposite corner perimeters ($34 + 24 = 58$ or $38 + 20 = 58$) to represent the outer segments without the central region.' },
            { code: 'A2', text: 'Subtracts from $68$ to find $10$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'In the multiplication sentence, $ABC \\times DE = FG \\times HI = 5568$, the $9$ letters represent the digits from $1$ to $9$ and they are used only once. What is the value of the $3$-digit number $ABC$?',
          answer: '$174$',
          principle:
            'Prime-factorize $5568$ and list all valid $2$-digit factor pairs $(FG, HI)$ and $3$-digit by $2$-digit factor pairs $(ABC, DE)$ with distinct nonzero digits.',
          solution:
            'Prime-factorize $5568$:\n$$5568 = 2^6 \\times 3 \\times 29 = 192 \\times 29.$$\nOne factor in each product must be a multiple of $29$. The $2$-digit multiples of $29$ are $29$, $58$, and $87$. Check $FG \\times HI = 5568$ with $2$-digit numbers:\n- $29 \\times 192$ ($192$ has $3$ digits, invalid for $FG \\times HI$).\n- $58 \\times 96 = 5568$ (digits $5, 8, 9, 6$ are all distinct).\n- $87 \\times 64 = 5568$ (digits $8, 7, 6, 4$ are all distinct).\n\nNow check $ABC \\times DE = 5568$ using the remaining five digits:\n- If $(FG, HI) = (87, 64)$, the remaining digits are $\\{1, 2, 3, 5, 9\\}$. The only $2$-digit divisors of $5568$ made from these digits are $12$, $15$ (not a divisor), $24$ (uses $4$), $32$, and $96$ (uses $6$), and the valid quotients $5568 \\div 12 = 464$, $5568 \\div 32 = 174$, and $5568 \\div 29 = 192$ all repeat digits or use already-taken digits.\n- If $(FG, HI) = (58, 96)$, the remaining digits are $\\{1, 2, 3, 4, 7\\}$. Testing $DE = 32$ gives:\n$$5568 \\div 32 = 174,$$\nwhich uses $\\{1, 7, 4\\}$ and $\\{3, 2\\}$ cleanly without repetition.\n\nTherefore, $174 \\times 32 = 58 \\times 96 = 5568$, so $ABC = 174$.',
          rubric: [
            { code: 'M2', text: 'Prime-factorizes $5568 = 2^6 \\times 3 \\times 29$ and identifies the candidate $2$-digit product $58 \\times 96 = 5568$.' },
            { code: 'A2', text: 'Finds $174 \\times 32 = 5568$ using digits $1$–$9$ once each, giving $ABC = 174$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'Elvis took several mathematics tests. He scored $76$ in one of the tests and his average score for all the tests was $85$. If he obtained $92$ instead of $76$, his average score would be $89$. How many tests did Elvis take?',
          answer: '$4$',
          principle:
            'Divide the change in the total score by the change in the average score to obtain the number of tests.',
          solution:
            'Replacing a score of $76$ with $92$ increases the total score by:\n$$92 - 76 = 16\\text{ points}.$$\nThis increases the average score by:\n$$89 - 85 = 4\\text{ points per test}.$$\nTherefore, the number of tests Elvis took is:\n$$\\frac{16}{4} = 4.$$',
          rubric: [
            { code: 'M2', text: 'Computes the total increase $92 - 76 = 16$ and average increase $89 - 85 = 4$.' },
            { code: 'A2', text: 'Divides $16 \\div 4$ to get $4$ tests.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'A special key in a calculator when pressed, displays the number $1 - \\frac{1}{x}$, when $x$ was displayed before. For example, when $2$ is displayed and the special key is pressed, the calculator will display $\\frac{1}{2}$ since $1 - \\frac{1}{2} = \\frac{1}{2}$. Initially, the number $2019$ is displayed in the calculator. Find the number that will be displayed after pressing the special key $2019$ times.',
          answer: '$2019$',
          principle:
            'Compute the first few iterates to discover a repeating cycle of length $3$, then use the remainder of $2019$ modulo $3$.',
          solution:
            'Track the displayed number after each press starting from $x_0 = 2019$:\n- After $1$ press: $1 - \\frac{1}{2019} = \\frac{2018}{2019}$.\n- After $2$ presses: $1 - \\frac{2019}{2018} = -\\frac{1}{2018}$.\n- After $3$ presses: $1 - (-2018) = 2019$.\n\nThe sequence repeats every $3$ presses. Since $2019 = 3 \\times 673$ is a multiple of $3$, after $2019$ presses the calculator returns to the initial number:\n$$2019.$$',
          rubric: [
            { code: 'M2', text: 'Computes the first three iterates to establish the cycle of length $3$.' },
            { code: 'A2', text: 'Uses $3 \\mid 2019$ to conclude the displayed value is $2019$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'Larry tells Mary and Jerry that he is thinking of two consecutive integers from $1$ to $10$. He tells Mary one of the numbers, and he tells Jerry the other number. Then the following conversation occurs between Mary and Jerry:\n\n*Mary:* I don\'t know your number.\n*Jerry:* I don\'t know your number, either.\n*Mary:* Ah, now I know your number.\n\nAssuming both Mary and Jerry used correct logic, what is the sum of the possible numbers Mary could have?',
          answer: '$22$ (official SIMOC key: $11$)',
          principle:
            'Eliminate endpoint cases after each "I don\'t know" statement using common-knowledge deduction, then find which values for Mary leave a unique neighbor for Jerry.',
          solution:
            'Let $M$ be Mary\'s number and $J$ be Jerry\'s number, where $M, J \\in \\{1, 2, \\dots, 10\\}$ and $|M - J| = 1$.\n1. **Mary says "I don\'t know your number."** If $M = 1$ (only neighbor $2$) or $M = 10$ (only neighbor $9$), Mary would know $J$. Thus $M \\in \\{2, 3, 4, 5, 6, 7, 8, 9\\}$.\n2. **Jerry says "I don\'t know your number, either."** Similarly $J \\notin \\{1, 10\\}$. Moreover, Jerry now knows $M \\notin \\{1, 10\\}$: if $J = 2$, Jerry would deduce $M = 3$; if $J = 9$, Jerry would deduce $M = 8$. Hence, under full deductive logic, $J \\in \\{3, 4, 5, 6, 7, 8\\}$.\n3. **Mary says "Ah, now I know your number."** Mary can uniquely identify $J$ in $\\{3, 4, 5, 6, 7, 8\\}$ when only one of her neighbors lies in that set:\n   - $M = 2 \\implies J = 3$,\n   - $M = 3 \\implies J = 4$,\n   - $M = 8 \\implies J = 7$,\n   - $M = 9 \\implies J = 8$.\n\nUnder full common-knowledge logic, Mary\'s possible numbers are $2, 3, 8, 9$, with sum $2 + 3 + 8 + 9 = 22$. *(Note: The official SIMOC 2019 answer key lists $11$ from $2 + 9$, obtained by ruling out only $J = 1$ and $J = 10$ in Step 2.)*',
          rubric: [
            { code: 'M2', text: 'Eliminates $M \\in \\{1, 10\\}$ from Mary\'s first statement and narrows Jerry\'s possible values from Jerry\'s statement.' },
            { code: 'A2', text: 'Finds Mary\'s valid possibilities and sums them to $22$ (noting official SIMOC key $11$).' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'Andrew, Bob, Carl and David together decided to buy a new air conditioning unit. The amount given by the eldest, Andrew, is one-half the total amount given by his $3$ other siblings. The amount given by the second eldest, Bob, is one-third the total amount given by his $3$ other siblings. The amount given by the third eldest, Carl, is one-fourth the total amount given by his $3$ other siblings. If the amount given by the youngest, David, is $40$ dollars less than the amount given by Bob, what is the cost of the air conditioner?',
          answer: '$1200$ dollars',
          principle:
            'Convert each sibling\'s ratio relative to the other three into a fraction of the total cost: if $A : (B+C+D) = 1 : k$, then $A = \\frac{1}{k+1}$ of the total.',
          solution:
            'Let the total cost of the air conditioner be $T$.\n- Andrew gives $\\frac{1}{2}$ of the other three combined, so Andrew gives $\\frac{1}{1+2} = \\frac{1}{3}T$.\n- Bob gives $\\frac{1}{3}$ of the other three combined, so Bob gives $\\frac{1}{1+3} = \\frac{1}{4}T$.\n- Carl gives $\\frac{1}{4}$ of the other three combined, so Carl gives $\\frac{1}{1+4} = \\frac{1}{5}T$.\n\nTherefore, David\'s share is:\n$$D = \\left(1 - \\frac{1}{3} - \\frac{1}{4} - \\frac{1}{5}\\right)T = \\left(1 - \\frac{20 + 15 + 12}{60}\\right)T = \\frac{13}{60}T.$$\nSince Bob gives $\\frac{1}{4}T = \\frac{15}{60}T$, the difference between Bob and David is:\n$$\\left(\\frac{15}{60} - \\frac{13}{60}\\right)T = \\frac{2}{60}T = \\frac{1}{30}T = 40\\text{ dollars}.$$\nThus, the total cost is $T = 40 \\times 30 = 1200$ dollars.',
          rubric: [
            { code: 'M2', text: 'Converts the shares of Andrew ($\\frac{1}{3}$), Bob ($\\frac{1}{4}$), and Carl ($\\frac{1}{5}$) to find David\'s share $\\frac{13}{60}T$.' },
            { code: 'A2', text: 'Equates $\\frac{1}{30}T = 40$ dollars to obtain $1200$ dollars.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'John and James are brothers. The ratio of the monthly income of John to James is $4:3$ while the ratio of their monthly expenses is $11:7$. Last year, each of them saved $9,000$ dollars for the whole year. How much is James\' monthly income?',
          answer: '$1800$ dollars',
          principle:
            'Because both brothers save the same amount each month, the difference between their monthly incomes equals the difference between their monthly expenses.',
          solution:
            'Each brother\'s monthly savings is:\n$$\\frac{9000}{12} = 750\\text{ dollars}.$$\nSince $\\text{Income} - \\text{Expense} = \\text{Savings}$ is the same for both brothers, the difference in their incomes equals the difference in their expenses.\n- Income ratio: $4 : 3$ (difference $= 1$ income part).\n- Expense ratio: $11 : 7$ (difference $= 4$ expense parts).\n\nScale the income ratio by $4$ so both differences equal $4$ parts:\n- John\'s income $= 16u$, James\' income $= 12u$.\n- John\'s expense $= 11u$, James\' expense $= 7u$.\n\nTheir equal monthly savings is $16u - 11u = 12u - 7u = 5u$, so:\n$$5u = 750 \\implies u = 150\\text{ dollars}.$$\nTherefore, James\' monthly income is $12 \\times 150 = 1800$ dollars.',
          rubric: [
            { code: 'M2', text: 'Finds monthly savings $750$ dollars and equates the income difference to the expense difference ($5u = 750$).' },
            { code: 'A2', text: 'Computes James\' monthly income as $1800$ dollars.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'Find the value of the following.\n$$\\frac{2019 \\times 2020}{505 + 505^2} + \\frac{2019 \\times 2020}{506 + 506^2} + \\frac{2019 \\times 2020}{507 + 507^2} + \\dots + \\frac{2019 \\times 2020}{672 + 672^2}$$',
          answer: '$2016$',
          principle:
            'Factor $k + k^2 = k(k + 1)$ in each denominator and split $\\frac{1}{k(k + 1)} = \\frac{1}{k} - \\frac{1}{k + 1}$ to form a telescoping sum.',
          solution:
            'Factor $2019 \\times 2020$ out of the sum and rewrite each denominator $k + k^2 = k(k + 1)$:\n$$2019 \\times 2020 \\left(\\frac{1}{505 \\times 506} + \\frac{1}{506 \\times 507} + \\dots + \\frac{1}{672 \\times 673}\\right).$$\nUsing the identity $\\frac{1}{k(k + 1)} = \\frac{1}{k} - \\frac{1}{k + 1}$, the sum telescopes:\n$$\\left(\\frac{1}{505} - \\frac{1}{506}\\right) + \\left(\\frac{1}{506} - \\frac{1}{507}\\right) + \\dots + \\left(\\frac{1}{672} - \\frac{1}{673}\\right) = \\frac{1}{505} - \\frac{1}{673} = \\frac{168}{505 \\times 673}.$$\nMultiply by $2019 \\times 2020$, noting that $2019 = 3 \\times 673$ and $2020 = 4 \\times 505$:\n$$2019 \\times 2020 \\times \\frac{168}{505 \\times 673} = 3 \\times 4 \\times 168 = 2016.$$',
          rubric: [
            { code: 'M2', text: 'Uses $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$ to telescope the sum to $\\frac{1}{505} - \\frac{1}{673} = \\frac{168}{505 \\times 673}$.' },
            { code: 'A2', text: 'Simplifies using $2019 = 3 \\times 673$ and $2020 = 4 \\times 505$ to obtain $2016$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'Calvin\'s house is located at the point $C$ as shown in the figure shown. Ed, whose house is located at point $E$, wants to visit Calvin. The segments on the grid are the only roads that Ed can use to move to other points in the grid. Ed also wants to visit Sam, whose house is located at point $S$. If Ed starts from his house and he can only move up or to the right. In how many ways can Ed go to Calvin\'s house if he wants to visit Sam first?',
          figures: [
            {
              src: '/papers/simoc-2019-g5/fig-24.webp',
              alt: 'A 6 by 4 rectangular grid of roads with point E at the bottom-left corner, point S two units right and one unit up from E, and point C at the top-right corner.',
              caption: 'Grid road map connecting points E, S, and C for Question 24.'
            }
          ],
          answer: '$105$',
          principle:
            'Multiply the number of shortest paths from $E$ to $S$ by the number of shortest paths from $S$ to $C$.',
          solution:
            'Break the journey into two independent stages:\n1. **From $E$ to $S$:** Ed moves $2$ units right and $1$ unit up ($3$ steps total). The number of paths is:\n$$\\binom{3}{1} = 3.$$\n2. **From $S$ to $C$:** Ed moves $4$ units right and $3$ units up ($7$ steps total). The number of paths is:\n$$\\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35.$$\n\nBy the multiplication principle, the total number of routes from $E$ to $C$ via $S$ is:\n$$3 \\times 35 = 105.$$',
          rubric: [
            { code: 'M2', text: 'Splits the route at $S$ and computes $3$ paths from $E$ to $S$ and $35$ paths from $S$ to $C$.' },
            { code: 'A2', text: 'Multiplies $3 \\times 35$ to get $105$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'A large square and two congruent smaller squares share a vertex. The large square touches the other two squares as shown. The areas of the three squares are $160$, $10$ and $10\\text{ cm}^2$, and points $D$, $E$, and $H$ are three of the vertices of the three squares as shown. Find the area of triangle $EDH$.',
          figures: [
            {
              src: '/papers/simoc-2019-g5/fig-25.webp',
              alt: 'A large square with vertex D at bottom-left, sharing its top-right corner with two congruent smaller squares whose outer vertices are labeled E and H, forming triangle EDH.',
              caption: 'Three squares and triangle EDH for Question 25.'
            }
          ],
          answer: '$65\\text{ cm}^2$',
          principle:
            'Enclose $\\triangle EDH$ inside a square of side $a + b$ and subtract the three surrounding right triangles, using $a^2 = 160$, $b^2 = 10$, and $ab = \\sqrt{a^2 b^2} = 40$.',
          solution:
            'Let $a$ be the side length of the large square and $b$ be the side length of each small square. Then:\n$$a^2 = 160, \\quad b^2 = 10, \\quad\\text{and}\\quad ab = \\sqrt{160 \\times 10} = \\sqrt{1600} = 40\\text{ cm}^2.$$\nEnclose the entire figure inside a bounding square whose bottom-left corner is $D$, top edge passes through $E$, and right edge passes through $H$. Its side length is $a + b$, so its area is:\n$$(a + b)^2 = a^2 + 2ab + b^2 = 160 + 2(40) + 10 = 250\\text{ cm}^2.$$\nRemove the three right triangles outside $\\triangle EDH$ inside this bounding square:\n- **Top-left triangle** (legs $a + b$ and $a - b$): $\\frac{1}{2}(a^2 - b^2) = \\frac{1}{2}(160 - 10) = 75\\text{ cm}^2$.\n- **Top-right triangle** (legs $2b$ and $b$): $\\frac{1}{2}(2b)(b) = b^2 = 10\\text{ cm}^2$.\n- **Bottom-right triangle** (legs $a + b$ and $a$): $\\frac{1}{2}(a^2 + ab) = \\frac{1}{2}(160 + 40) = 100\\text{ cm}^2$.\n\nTherefore, the area of $\\triangle EDH$ is:\n$$250 - 75 - 10 - 100 = 65\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Uses $a^2 = 160$, $b^2 = 10$, and $ab = 40$ to enclose $\\triangle EDH$ in a square of area $250\\text{ cm}^2$ and compute the three corner triangles ($75$, $10$, and $100\\text{ cm}^2$).' },
            { code: 'A2', text: 'Subtracts to find $65\\text{ cm}^2$.' }
          ]
        }
      ]
    }
  ]
};
