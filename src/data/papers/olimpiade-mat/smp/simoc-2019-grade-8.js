/**
 * Paket Soal: SIMOC 2019 Grade 8 (Secondary 2)
 * Sumber: Singapore International Math Olympiad Challenge 2019, Secondary 2 / Grade 8 Contest (Grade-8-SIMOC-2019.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 12, 14, dan 21 dilengkapi diagram (.webp).
 */
export default {
  id: 'simoc-2019-g8',
  slug: 'simoc-2019-grade-8',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'SIMOC 2019 Grade 8: arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'smp8-bab1-bilangan-berpangkat',
    'smp8-bab2-teorema-pythagoras',
    'smp8-bab3-persamaan-pertidaksamaan-linear',
    'smp8-bab4-relasi-fungsi'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SIMOC',
  title: 'SIMOC 2019 Grade 8',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Diagrams for Questions 12, 14, and 21 are provided as figures.',
  source: {
    org: 'SIMOC',
    file: 'Grade-8-SIMOC-2019.pdf',
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
            'Find the value of\n$$\\frac{1}{\\sqrt{1^3}} + \\frac{1}{\\sqrt{1^3 + 2^3}} + \\frac{1}{\\sqrt{1^3 + 2^3 + 3^3}} + \\frac{1}{\\sqrt{1^3 + 2^3 + 3^3 + 4^3}}$$\n\nA. $\\frac{1}{15}$\nB. $\\frac{2}{15}$\nC. $\\frac{8}{5}$\nD. $\\frac{17}{3}$\nE. None of the Above',
          answer: 'C. $\\frac{8}{5}$',
          principle:
            'Use Nicomachus’s identity $\\sum_{k=1}^n k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$, or evaluate each denominator directly and sum the unit fractions.',
          solution:
            'Evaluate the sum of cubes inside each square root:\n- $\\sqrt{1^3} = \\sqrt{1} = 1$\n- $\\sqrt{1^3 + 2^3} = \\sqrt{1 + 8} = \\sqrt{9} = 3$\n- $\\sqrt{1^3 + 2^3 + 3^3} = \\sqrt{9 + 27} = \\sqrt{36} = 6$\n- $\\sqrt{1^3 + 2^3 + 3^3 + 4^3} = \\sqrt{36 + 64} = \\sqrt{100} = 10$\n\nAdding the four fractions over a common denominator of $30$ gives:\n$$1 + \\frac{1}{3} + \\frac{1}{6} + \\frac{1}{10} = \\frac{30 + 10 + 5 + 3}{30} = \\frac{48}{30} = \\frac{8}{5}.$$',
          rubric: [
            { code: 'M1', text: 'Simplifies the denominators to $1, 3, 6, 10$.' },
            { code: 'A1', text: 'Computes $1 + \\frac{1}{3} + \\frac{1}{6} + \\frac{1}{10} = \\frac{8}{5}$, option C.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'A triangle is drawn on a rectangular piece of paper. What is the greatest number of regions that can be formed?\n\nA. $2$\nB. $3$\nC. $4$\nD. $5$\nE. None of the above',
          answer: 'C. $4$',
          principle:
            'Count the interior region of the triangle (at most $1$ by convexity) and bound the number of exterior regions by how many times $3$ straight sides can intersect the rectangle’s boundary.',
          solution:
            'Let $R$ be the rectangle and $T$ be the triangle.\n1. **Achieving $4$ regions:** Place the three vertices of $T$ on three distinct sides of $R$ (for example, on the top, left, and bottom sides). The interior of $T$ forms $1$ region, while the three sides of $T$ cut off $3$ separate regions outside $T$ inside $R$ (the top-left corner, the bottom-left corner, and the right section containing the two right corners), giving $1 + 3 = 4$ regions.\n2. **Why $5$ regions is impossible:** Since both $R$ and the interior of $T$ are convex, their intersection is convex and forms at most $1$ connected region. Every exterior region inside $R$ must meet the boundary of $R$, and if all $4$ corners of $R$ lay in $4$ distinct exterior regions, each of the $4$ edges of $R$ would have to enter and exit $T$ at least twice, requiring at least $4 \\times 2 = 8$ boundary intersections. However, each of the $3$ straight sides of $T$ can intersect the boundary of the convex rectangle $R$ in at most $2$ points, giving at most $3 \\times 2 = 6$ intersections.\n\nThus the greatest number of regions is $4$.',
          rubric: [
            { code: 'M1', text: 'Demonstrates a $4$-region configuration and proves $5$ regions is impossible (at most $6 < 8$ boundary crossings).' },
            { code: 'A1', text: 'Selects $4$, option C.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'What is the value of $\\left(\\sqrt{5 + 2\\sqrt{6}} + \\sqrt{5 - 2\\sqrt{6}}\\right)^2$?\n\nA. $2$\nB. $3$\nC. $8$\nD. $9$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Expand $(a + b)^2 = a^2 + b^2 + 2ab$, or denest the nested radicals using $\\sqrt{(u \\pm v)^2} = u \\pm v$.',
          solution:
            'Let $a = \\sqrt{5 + 2\\sqrt{6}}$ and $b = \\sqrt{5 - 2\\sqrt{6}}$. Using $(a + b)^2 = a^2 + b^2 + 2ab$:\n$$a^2 + b^2 = (5 + 2\\sqrt{6}) + (5 - 2\\sqrt{6}) = 10,$$\n$$ab = \\sqrt{(5 + 2\\sqrt{6})(5 - 2\\sqrt{6})} = \\sqrt{25 - 24} = 1.$$\nTherefore:\n$$(a + b)^2 = 10 + 2(1) = 12.$$\n(Equivalently, $\\sqrt{5 \\pm 2\\sqrt{6}} = \\sqrt{3} \\pm \\sqrt{2}$, so the expression equals $(2\\sqrt{3})^2 = 12$.)\nSince $12$ is not listed among options A–D, the answer is **E. None of the above**.',
          rubric: [
            { code: 'M1', text: 'Expands $(a+b)^2 = a^2 + b^2 + 2ab$ (or denests to $\\sqrt{3} \\pm \\sqrt{2}$).' },
            { code: 'A1', text: 'Evaluates $12$ and selects option E (None of the above).' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Fermat proved that an odd prime number can be written as a sum of two perfect squares if the odd number gives a remainder of $1$, $5$ or $9$ when divided by $12$. Given that all the following choices are prime numbers, which of them can be written as a sum of two perfect squares?\n\nA. $54324223$\nB. $66843247$\nC. $73831151$\nD. $92138363$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Note that $1, 5, 9 \\pmod{12}$ are precisely the numbers congruent to $1 \\pmod 4$, so checking the last two digits modulo $4$ determines the remainder modulo $12$ (or compute each number modulo $3$ and $4$).',
          solution:
            'Any integer giving remainder $1$, $5$, or $9$ when divided by $12$ satisfies $n \\equiv 1 \\pmod 4$ (because $1 \\equiv 5 \\equiv 9 \\equiv 1 \\pmod 4$). Check the last two digits of each option modulo $4$:\n- **A:** $23 = 4 \\times 5 + 3 \\equiv 3 \\pmod 4$ (specifically $54324223 \\equiv 7 \\pmod{12}$).\n- **B:** $47 = 4 \\times 11 + 3 \\equiv 3 \\pmod 4$ (specifically $66843247 \\equiv 7 \\pmod{12}$).\n- **C:** $51 = 4 \\times 12 + 3 \\equiv 3 \\pmod 4$ (specifically $73831151 \\equiv 11 \\pmod{12}$).\n- **D:** $63 = 4 \\times 15 + 3 \\equiv 3 \\pmod 4$ (specifically $92138363 \\equiv 11 \\pmod{12}$).\n\nNone of the four primes leaves a remainder of $1, 5,$ or $9$ modulo $12$, so none can be written as a sum of two squares. The answer is **E. None of the above**.',
          rubric: [
            { code: 'M1', text: 'Reduces the condition to $n \\equiv 1 \\pmod 4$ (or finds remainders $7, 7, 11, 11 \\pmod{12}$).' },
            { code: 'A1', text: 'Concludes none of A–D works, option E.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Four empty bottles of fruit juice can be exchanged for $1$ new bottle of milk. Five empty bottles of soda can be exchanged for $1$ new bottle of fruit juice. If Sheryl initially buys $5$ dozen of soda bottles, what is the greatest number of bottles of any beverage that she can drink?\n\nA. $6$\nB. $36$\nC. $56$\nD. $75$\nE. None of the above',
          answer: 'D. $75$',
          principle:
            'Track the number of bottles drunk and exchanged step by step from soda to fruit juice to milk.',
          solution:
            'Sheryl buys $5$ dozen $= 5 \\times 12 = 60$ bottles of soda.\n1. She drinks all $60$ bottles of soda and exchanges the $60$ empty soda bottles for $60 \\div 5 = 12$ bottles of fruit juice.\n2. She drinks all $12$ bottles of fruit juice and exchanges the $12$ empty fruit juice bottles for $12 \\div 4 = 3$ bottles of milk.\n3. She drinks the $3$ bottles of milk (no further exchange is specified for milk bottles).\n\nTotal number of bottles she drinks:\n$$60 + 12 + 3 = 75.$$',
          rubric: [
            { code: 'M1', text: 'Converts $5$ dozen to $60$ sodas, exchanges for $12$ juices, then $3$ milks.' },
            { code: 'A1', text: 'Sums $60 + 12 + 3 = 75$, option D.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'What is the largest amount of money that cannot be obtained using only $3$ dollar and $8$ dollar denominations?\n\nA. $13$ dollars\nB. $23$ dollars\nC. $67$ dollars\nD. $97$ dollars\nE. $100$ dollars',
          answer: 'A. $13$ dollars',
          principle:
            'By the Chicken McNugget theorem for two coprime positive integers $a$ and $b$, the largest integer not expressible as $ax + by$ ($x, y \\ge 0$) is $ab - a - b$.',
          solution:
            'Since $\\gcd(3, 8) = 1$, the largest amount that cannot be formed as $3x + 8y$ with non-negative integers $x, y$ is:\n$$3 \\times 8 - 3 - 8 = 24 - 11 = 13\\text{ dollars}.$$\nTo verify directly: $13$ cannot be formed because $8(0) + 3x = 13$ and $8(1) + 3x = 13$ have no integer solution $x$, while three consecutive integers $14 = 3(2) + 8(1)$, $15 = 3(5) + 8(0)$, and $16 = 3(0) + 8(2)$ can all be formed, so adding multiples of $3$ generates every integer $\\ge 14$.',
          rubric: [
            { code: 'M1', text: 'Applies $ab - a - b$ for coprime $(3, 8)$ (or verifies $14, 15, 16$ are achievable while $13$ is not).' },
            { code: 'A1', text: 'Finds $13$ dollars, option A.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'One hundred and fifty students are selected to participate in a survey. The report states that $120$ students have played League of Legends, $75$ students have played Piano Tiles and $50$ students have played Battleground. What is the largest possible number of students who have played both Piano Tiles and Battleground but have never tried League of Legends?\n\nA. $15$\nB. $20$\nC. $25$\nD. $30$\nE. None of the above',
          answer: 'D. $30$',
          principle:
            'Upper-bound the target set by the complement of League of Legends players, then verify that all set-size constraints are simultaneously achievable.',
          solution:
            'Out of $150$ students, $120$ have played League of Legends, so exactly:\n$$150 - 120 = 30$$\nstudents have never tried League of Legends. Therefore, at most $30$ students can belong to the group that played both Piano Tiles and Battleground without trying League of Legends.\n\nThis upper bound of $30$ is achievable: assign $30$ non-League-of-Legends students to play both Piano Tiles and Battleground, then among the $120$ League of Legends players assign $75 - 30 = 45$ to Piano Tiles only, $50 - 30 = 20$ to Battleground only, and the remaining $120 - 45 - 20 = 55$ to League of Legends only ($30 + 45 + 20 + 55 = 150$). Hence the largest possible number is $30$.',
          rubric: [
            { code: 'M1', text: 'Finds $150 - 120 = 30$ non-League-of-Legends students and checks feasibility with $75$ and $50$.' },
            { code: 'A1', text: 'Concludes $30$, option D.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'The letters “S”, “T”, “A”, “L” and “L” are rearranged to form all five-letter words. The list of words is then arranged in dictionary order. For example, the first word is ALLST and the last word is TSLLA. What is the order of ‘STALL’ in the list?\n\nA. $45$\nB. $46$\nC. $92$\nD. $600$\nE. None of the above',
          answer: 'B. $46$',
          principle:
            'Count all distinct permutations lexicographically preceding STALL by fixing prefixes alphabetically and accounting for the two identical L’s.',
          solution:
            'The multiset of letters in alphabetical order is $\\{A, L, L, S, T\\}$. Count the distinct words that appear before **STALL**:\n- Words starting with **A** (remaining letters $L, L, S, T$): $\\frac{4!}{2!} = 12$.\n- Words starting with **L** (remaining letters $A, L, S, T$): $4! = 24$.\n- Words starting with **SA** (remaining letters $L, L, T$): $\\frac{3!}{2!} = 3$.\n- Words starting with **SL** (remaining letters $A, L, T$): $3! = 6$.\n\nThe next prefix in alphabetical order is **ST**, and the alphabetically smallest arrangement of the remaining letters $\\{A, L, L\\}$ is **ALL**, forming **STALL** immediately after those words.\nThus the position of **STALL** is:\n$$12 + 24 + 3 + 6 + 1 = 46.$$',
          rubric: [
            { code: 'M1', text: 'Counts preceding permutations starting with A ($12$), L ($24$), SA ($3$), and SL ($6$).' },
            { code: 'A1', text: 'Finds position $45 + 1 = 46$, option B.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'Some married couples participate in the Indoor Dancing Competition. Before the competition starts, every person shakes hands with each other except for his/her spouse. The organiser and his wife then enter the competition venue. They select some couples, and for each selected couple, the organiser shakes hand with the lady while his wife shakes hand with the gentleman. Given that there have been $2018$ handshakes so far, how many couples are selected to shake hands with the organiser and his wife?\n\nA. $15$\nB. $16$\nC. $17$\nD. $18$\nE. None of the above',
          answer: 'C. $17$',
          principle:
            'Express the initial handshakes among $k$ couples as $2k(k - 1)$ and the additional handshakes with $m$ selected couples as $2m$ (with $0 \\le m \\le k$).',
          solution:
            'Suppose there are $k$ participating couples, so $2k$ people initially. Each person shakes hands with everyone except themselves and their spouse ($2k - 2$ others), giving:\n$$\\frac{2k(2k - 2)}{2} = 2k(k - 1)$$ initial handshakes.\nIf $m$ couples ($0 \\le m \\le k$) are selected, each selected couple contributes $2$ additional handshakes ($1$ with the organiser and $1$ with his wife), so:\n$$2k(k - 1) + 2m = 2018 \\implies k(k - 1) + m = 1009.$$\nSince $0 \\le m \\le k$, we need $k(k - 1) \\le 1009 \\le k^2$:\n- For $k = 31$: $31 \\times 30 = 930$, giving $m = 1009 - 930 = 79 > 31$ (invalid).\n- For $k = 32$: $32 \\times 31 = 992$, giving $m = 1009 - 992 = 17 \\le 32$ (valid).\n- For $k = 33$: $33 \\times 32 = 1056 > 1009$ (invalid).\n\nTherefore, $m = 17$ couples are selected.',
          rubric: [
            { code: 'M1', text: 'Sets up $k(k - 1) + m = 1009$ with $0 \\le m \\le k$ and identifies $k = 32$.' },
            { code: 'A1', text: 'Computes $m = 1009 - 992 = 17$, option C.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'A number is written on the board. It starts with one digit “$1$”, three digits “$2$”, five digits “$3$”, $\\ldots$, $17$ digits “$9$”, $19$ digits “$0$”, $21$ digits “$1$”, $23$ digits “$2$” and so on. In other words, the number is as follows:\n$$122233333\\ldots \\underbrace{999\\ldots 999}_{17\\text{ digits}} \\underbrace{000\\ldots 000}_{19\\text{ digits}} \\underbrace{111\\ldots 111}_{21\\text{ digits}} \\underbrace{222\\ldots 222}_{23\\text{ digits}} \\ldots$$\nWhat is the $2019^{\\text{th}}$ digit of the number?\n\nA. $2$\nB. $3$\nC. $4$\nD. $5$\nE. $6$',
          answer: 'D. $5$',
          principle:
            'Use the sum of the first $k$ odd integers $1 + 3 + 5 + \\cdots + (2k - 1) = k^2$ to locate which block contains the $2019^{\\text{th}}$ digit.',
          solution:
            'The $k$-th block ($k \\ge 1$) consists of $2k - 1$ copies of the unit digit of $k$ (i.e., $k \\bmod 10$). The total number of digits in the first $k$ blocks is:\n$$1 + 3 + 5 + \\cdots + (2k - 1) = k^2.$$\nCompare $2019$ with consecutive perfect squares:\n$$44^2 = 1936 < 2019 \\le 2025 = 45^2.$$\nHence the $2019^{\\text{th}}$ digit lies in the $45^{\\text{th}}$ block, whose repeated digit is $45 \\bmod 10 = 5$.',
          rubric: [
            { code: 'M1', text: 'Uses $\\sum_{j=1}^k (2j-1) = k^2$ to bracket $44^2 = 1936 < 2019 \\le 45^2 = 2025$.' },
            { code: 'A1', text: 'Finds the digit $45 \\bmod 10 = 5$, option D.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'In the Star Event, the Lucky Award is awarded to a couple of opposite gender with the same zodiac signs. It also awards a group of at least $5$ people with the same gender and zodiac signs. For instance, $2$ couples where each pair has the opposite gender and same zodiac signs will get $1$ Prize each. Given that there are $12$ zodiac signs, at least how many people should the event organiser invite to ensure at least one Lucky Award will be given out?\n\nA. $4$\nB. $13$\nC. $49$\nD. $50$\nE. None of the above',
          answer: 'C. $49$',
          principle:
            'Apply the Pigeonhole Principle over the $12$ zodiac signs by finding the maximum number of people per sign that avoids both award conditions.',
          solution:
            'To avoid giving out any Lucky Award:\n- Within any single zodiac sign, all invited people must have the **same gender** (otherwise an opposite-gender pair with that sign wins an award).\n- Within any single zodiac sign, there can be at most **$4$ people** of that same gender (since $5$ or more people of the same gender and zodiac sign win an award).\n\nThus, across the $12$ zodiac signs, the maximum number of guests that can be invited without triggering a Lucky Award is:\n$$12 \\times 4 = 48.$$\nInviting $48 + 1 = 49$ guests guarantees that at least one zodiac sign has at least $5$ guests (either forming an opposite-gender pair or a group of $5$ of the same gender).',
          rubric: [
            { code: 'M1', text: 'Shows each of the $12$ zodiac signs can hold at most $4$ guests of one gender ($48$ total) without a prize.' },
            { code: 'A1', text: 'Concludes $48 + 1 = 49$ guests, option C.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'In the diagram below, the lines $CF$ and $AE$ meet at point $D$ and the line $AD$ bisects $\\angle BAC$. If $\\angle ADC = 90^\\circ$, which of the following options below is true?\n\nA. $\\angle ABC > \\angle ACD$\nB. $\\angle ACD > \\angle ABC$\nC. $\\angle BCF > \\angle AFC$\nD. $\\angle ACF > \\angle AFC$\nE. None of the above',
          figures: [
            {
              src: '/papers/simoc-2019-g8/fig-12.webp',
              alt: 'Triangle ABC with point F on AB, point E on BC, segments CF and AE intersecting at interior point D.',
              caption: 'Triangle ABC with intersecting cevians AE and CF at D for Question 12.'
            }
          ],
          answer: 'B. $\\angle ACD > \\angle ABC$',
          principle:
            'Use ASA triangle congruence on $\\triangle ADF$ and $\\triangle ADC$, then apply the Exterior Angle Theorem to $\\triangle BFC$.',
          solution:
            'Since $AD$ bisects $\\angle BAC$, we have $\\angle FAD = \\angle CAD$. Because $F, D, C$ are collinear and $\\angle ADC = 90^\\circ$, it follows that $\\angle ADF = 180^\\circ - 90^\\circ = 90^\\circ = \\angle ADC$. With common side $AD$, we obtain:\n$$\\triangle ADF \\cong \\triangle ADC \\quad (\\text{ASA}).$$\nHence $\\angle AFD = \\angle ACD$, i.e., $\\angle AFC = \\angle ACD$.\nNow consider $\\triangle BFC$. The angle $\\angle AFC$ is an exterior angle at vertex $F$, so:\n$$\\angle AFC = \\angle FBC + \\angle BCF = \\angle ABC + \\angle BCF > \\angle ABC.$$\nSubstituting $\\angle AFC = \\angle ACD$ yields $\\angle ACD > \\angle ABC$.',
          rubric: [
            { code: 'M1', text: 'Proves $\\triangle ADF \\cong \\triangle ADC$ to deduce $\\angle AFC = \\angle ACD$.' },
            { code: 'A1', text: 'Uses the exterior angle of $\\triangle BFC$ to conclude $\\angle ACD > \\angle ABC$, option B.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Six performances are to be included in the Singapore International Discrete Mathematics Challenge Prize Ceremony. All the performances have different durations. The third performance must be longer than the first, while the fourth performance must be longer than the second and so on. How many ways can the organiser arrange the performances?\n\nA. $6$\nB. $18$\nC. $20$\nD. $120$\nE. None of the above',
          answer: 'C. $20$',
          principle:
            'Split the six positions into two independent ordered chains ($p_1 < p_3 < p_5$ and $p_2 < p_4 < p_6$) and count the ways to partition the $6$ distinct durations into two $3$-element subsets.',
          solution:
            'Let the durations of the six performances in order be $p_1, p_2, p_3, p_4, p_5, p_6$. The condition “the third is longer than the first, the fourth is longer than the second, and so on” means:\n$$p_1 < p_3 < p_5 \\quad \\text{and} \\quad p_2 < p_4 < p_6.$$\nThere is no order constraint between the odd-indexed chain and the even-indexed chain. Once we choose which $3$ of the $6$ distinct performances occupy the odd positions $\\{1, 3, 5\\}$, their order is uniquely fixed as $p_1 < p_3 < p_5$, and the remaining $3$ performances are uniquely ordered as $p_2 < p_4 < p_6$.\nTherefore, the number of valid arrangements is:\n$$\\binom{6}{3} = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20.$$',
          rubric: [
            { code: 'M1', text: 'Decomposes the constraints into two independent chains $p_1 < p_3 < p_5$ and $p_2 < p_4 < p_6$.' },
            { code: 'A1', text: 'Computes $\\binom{6}{3} = 20$, option C.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'In the diagram below, $ABDC$ is a rectangle with dimensions $6\\text{ cm}$ by $4\\text{ cm}$ and $EFGH$ is a parallelogram. It is given that $CG = EB = 2\\text{ cm}$, $CF = BH = 3\\text{ cm}$ and $\\text{Area}(CFXG) = 5\\text{ cm}^2$. Find the area of the quadrilateral $BEXH$.\n\nA. $5$\nB. $8$\nC. $11$\nD. $14$\nE. None of the above',
          figures: [
            {
              src: '/papers/simoc-2019-g8/fig-14.webp',
              alt: 'Rectangle ABDC with vertices E on AB, H on BD, G on CD, F on AC forming parallelogram EFGH, and interior point X joined to E, F, G, and H.',
              caption: 'Rectangle ABDC and parallelogram EFGH with interior point X for Question 14.'
            }
          ],
          answer: 'B. $8$',
          principle:
            'Find the area of parallelogram $EFGH$ by subtracting the four corner right triangles from rectangle $ABDC$, then use the half-parallelogram property $\\text{Area}(\\triangle XFG) + \\text{Area}(\\triangle XEH) = \\frac{1}{2}\\text{Area}(EFGH)$.',
          solution:
            'Since $AB = CD = 6\\text{ cm}$ and $AC = BD = 4\\text{ cm}$, the remaining side segments are $AE = GD = 6 - 2 = 4\\text{ cm}$ and $AF = HD = 4 - 3 = 1\\text{ cm}$.\nThe areas of the four corner right triangles are:\n- $\\text{Area}(\\triangle CFG) = \\text{Area}(\\triangle EBH) = \\frac{1}{2} \\times 2 \\times 3 = 3\\text{ cm}^2$,\n- $\\text{Area}(\\triangle AEF) = \\text{Area}(\\triangle GDH) = \\frac{1}{2} \\times 4 \\times 1 = 2\\text{ cm}^2$.\n\nHence the area of parallelogram $EFGH$ is:\n$$\\text{Area}(EFGH) = 6 \\times 4 - (3 + 3 + 2 + 2) = 24 - 10 = 14\\text{ cm}^2.$$\nFor any point $X$ inside parallelogram $EFGH$, triangles $\\triangle XFG$ and $\\triangle XEH$ have equal opposite bases $FG = EH$ and altitudes summing to the height of the parallelogram, so:\n$$\\text{Area}(\\triangle XFG) + \\text{Area}(\\triangle XEH) = \\frac{1}{2}\\text{Area}(EFGH) = 7\\text{ cm}^2.$$\nSince $\\text{Area}(\\triangle XFG) = \\text{Area}(CFXG) - \\text{Area}(\\triangle CFG) = 5 - 3 = 2\\text{ cm}^2$, we get $\\text{Area}(\\triangle XEH) = 7 - 2 = 5\\text{ cm}^2$. Finally:\n$$\\text{Area}(BEXH) = \\text{Area}(\\triangle EBH) + \\text{Area}(\\triangle XEH) = 3 + 5 = 8\\text{ cm}^2.$$',
          rubric: [
            { code: 'M1', text: 'Computes $\\text{Area}(EFGH) = 14$ and uses $\\text{Area}(\\triangle XFG) + \\text{Area}(\\triangle XEH) = 7$.' },
            { code: 'A1', text: 'Finds $\\text{Area}(BEXH) = 3 + 5 = 8$, option B.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Information about four students: Elizabeth, Miyuki, Stephanie and Tracy are as stated below.\n1. Each of the student has a different nationality and come from Thailand, India, Singapore and Uzbekistan.\n2. Their ages are $21$, $24$, $26$ and $30$; each of them do not share the same age.\n3. Each of them plays a different musical instrument which could be a cello, drums, saxophone and horn.\n4. Stephanie is not $21$ years old.\n5. Elizabeth is from Thailand.\n6. The student playing the saxophone is not $30$ years old.\n7. Stephanie does not play the horn.\n8. The student playing the cello is not Singaporean.\n9. Miyuki is younger than Elizabeth.\n10. Stephanie is older than the student playing the saxophone.\n11. The student playing the cello is not $26$ years old.\n12. The $30$-year-old student is not Indian.\n13. Tracy is older than Stephanie.\n14. Elizabeth does not play the cello or drums.\n15. The student playing the saxophone is not Singaporean.\n16. Stephanie does not play the drums.\n\nWho plays the drums?\n\nA. Elizabeth\nB. Miyuki\nC. Stephanie\nD. Tracy\nE. Not enough information',
          answer: 'D. Tracy',
          principle:
            'Deduce the unique instrument and age orderings by combining the strict inequality clues (9, 10, 13) with elimination clues (4, 7, 14, 16).',
          solution:
            'Determine Stephanie’s instrument first:\n- By clues 7 and 16, Stephanie does not play the horn or drums.\n- By clue 10, Stephanie is older than the saxophone player, so Stephanie does not play the saxophone.\n- Therefore, **Stephanie plays the cello**.\n\nNext, determine Stephanie’s age:\n- By clue 4, Stephanie is not $21$.\n- By clue 11, since Stephanie plays the cello, she is not $26$.\n- By clue 13, Tracy is older than Stephanie, so Stephanie is not $30$.\n- Therefore, **Stephanie is $24$ years old**.\n\nNow determine the saxophone player and the remaining instruments:\n- By clue 10, the saxophone player is younger than Stephanie ($24$), so the saxophone player must be **$21$ years old**.\n- By clue 9, Elizabeth is older than Miyuki, so Elizabeth cannot be $21$. Since Tracy is older than Stephanie ($24$), Tracy cannot be $21$ either. Hence **Miyuki is $21$ years old** and **Miyuki plays the saxophone**.\n- By clue 14, Elizabeth does not play the cello or drums. Since Stephanie plays the cello and Miyuki plays the saxophone, **Elizabeth plays the horn**.\n- The only remaining student and instrument are **Tracy** and the **drums**.\n\n(Verification: Tracy and Elizabeth take ages $26$ and $30$ in either order, Tracy is Singaporean by clues 5, 8, and 15, and Miyuki and Stephanie take India and Uzbekistan in either order with the $30$-year-old non-Indian, satisfying all $16$ clues.) Thus **Tracy** plays the drums.',
          rubric: [
            { code: 'M1', text: 'Deduces Stephanie plays cello (clues 7, 10, 16), forcing Stephanie $= 24$, Miyuki $= 21$ (saxophone), and Elizabeth plays horn.' },
            { code: 'A1', text: 'Concludes Tracy plays the drums, option D.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Short Answer',
      marks: 40,
      stem: 'Write the exact integer answer for each question (10 questions, 4 marks each).',
      parts: [
        {
          label: '16',
          marks: 4,
          prompt:
            'The operator $\\bullet$ acts on two numbers to give the following outcomes:\n$$\\begin{array}{lll}\n14 \\bullet 89 = 0 & 59 \\bullet 04 = 1 & 38 \\bullet 00 = 0 \\\\\n82 \\bullet 54 = 0 & 36 \\bullet 00 = 1 & 43 \\bullet 00 = 0 \\\\\n48 \\bullet 78 = 0 & 42 \\bullet 96 = 1 & 21 \\bullet 72 = 1 \\\\\n91 \\bullet 29 = 0 & 76 \\bullet 00 = 1 & 64 \\bullet 56 = 1\n\\end{array}$$\nThe operator only returns “$0$” or “$1$”. What is the value of $20 \\bullet 00$?',
          answer: '$1$',
          answerNumeric: [{ value: 1, unit: '' }],
          principle:
            'Concatenate the two $2$-digit inputs into a $4$-digit year and test the Gregorian leap-year rule (especially century years ending in $00$).',
          solution:
            'Concatenate $A \\bullet B$ into the $4$-digit year $\\overline{AB}$:\n- Years not divisible by $4$ return $0$: $1489, 8254, 4878, 9129$.\n- Non-century years divisible by $4$ return $1$: $5904, 4296, 2172, 6456$.\n- Century years (ending in $00$) return $1$ if and only if divisible by $400$: $3600$ and $7600$ are divisible by $400$ (return $1$), whereas $3800$ and $4300$ are not divisible by $400$ (return $0$).\n\nThus $A \\bullet B = 1$ if $\\overline{AB}$ is a leap year and $0$ otherwise. Since $2000$ is divisible by $400$, it is a leap year, so:\n$$20 \\bullet 00 = 1.$$',
          rubric: [
            { code: 'M2', text: 'Identifies the rule: $\\overline{AB}$ is a leap year ($1$ if divisible by $400$, or divisible by $4$ and not $100$; $0$ otherwise).' },
            { code: 'A2', text: 'Evaluates $20 \\bullet 00 = 1$ (since $2000$ is divisible by $400$).' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'Find the positive integer value of $x$ such that $\\sqrt{x^2 - 36} + \\sqrt{x^2 + 23x - 174}$ is minimum.',
          answer: '$6$',
          answerNumeric: [{ value: 6, unit: '' }],
          principle:
            'Determine the real domain of both square roots first, then note both radicands increase for positive $x$ in the domain.',
          solution:
            'For $\\sqrt{x^2 - 36}$ to be real, we must have $x^2 - 36 \\ge 0$. Since $x$ is a positive integer, this requires $x \\ge 6$.\nChecking $x = 6$ in the second radical:\n$$6^2 + 23(6) - 174 = 36 + 138 - 174 = 0.$$\nHence at $x = 6$, the entire expression evaluates to $\\sqrt{0} + \\sqrt{0} = 0$. Since a sum of two square roots is always non-negative and both $x^2 - 36$ and $x^2 + 23x - 174$ strictly increase for $x \\ge 6$, the minimum occurs uniquely at $x = 6$.',
          rubric: [
            { code: 'M2', text: 'Finds domain $x \\ge 6$ and observes both radicands vanish at $x = 6$ (and increase for $x > 6$).' },
            { code: 'A2', text: 'Concludes $x = 6$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'Given that $x^2 - 3x + 1 = 0$, what is the value of $x^3 + \\frac{1}{x^3}$?',
          answer: '$18$',
          answerNumeric: [{ value: 18, unit: '' }],
          principle:
            'Divide the quadratic equation by $x$ (noting $x \\neq 0$) to find $x + \\frac{1}{x}$, then apply $x^3 + \\frac{1}{x^3} = \\left(x + \\frac{1}{x}\\right)^3 - 3\\left(x + \\frac{1}{x}\\right)$.',
          solution:
            'Since $x = 0$ gives $1 = 0$, we have $x \\neq 0$. Dividing $x^2 - 3x + 1 = 0$ by $x$ gives:\n$$x - 3 + \\frac{1}{x} = 0 \\implies x + \\frac{1}{x} = 3.$$\nUsing the cubic identity $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$ with $a = x$ and $b = \\frac{1}{x}$ (so $ab = 1$):\n$$x^3 + \\frac{1}{x^3} = \\left(x + \\frac{1}{x}\\right)^3 - 3\\left(x + \\frac{1}{x}\\right) = 3^3 - 3(3) = 27 - 9 = 18.$$',
          rubric: [
            { code: 'M2', text: 'Derives $x + \\frac{1}{x} = 3$ and uses $x^3 + \\frac{1}{x^3} = (x + \\frac{1}{x})^3 - 3(x + \\frac{1}{x})$.' },
            { code: 'A2', text: 'Evaluates $27 - 9 = 18$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'There are $2019$ consecutive positive integers such that $a_1 < a_2 < \\cdots < a_{2019}$. Given that $a_{202n-2} + a_{202n-1} + a_{202n} + a_{202n+1} + a_{202n+2}$ is a perfect cube and $a_{202n-1} + a_{202n} + a_{202n+1}$ is a perfect square for some positive integer $n$ where $1 \\le n < 10$. What is the smallest possible value of $a_n$?',
          answer: '$72$',
          answerNumeric: [{ value: 72, unit: '' }],
          principle:
            'Simplify the consecutive-integer sums to $5a_{202n}$ and $3a_{202n}$, use prime-exponent conditions to minimize $a_{202n}$, then maximize $n < 10$ consistent with $a_1 \\ge 1$.',
          solution:
            'Because $a_1, a_2, \\ldots, a_{2019}$ are consecutive integers ($a_k = a_1 + k - 1$), the terms symmetric around $a_{202n}$ average to $a_{202n}$:\n$$a_{202n-2} + a_{202n-1} + a_{202n} + a_{202n+1} + a_{202n+2} = 5a_{202n} = k^3,$$\n$$a_{202n-1} + a_{202n} + a_{202n+1} = 3a_{202n} = m^2,$$\nfor positive integers $k, m$. Examining the prime factorizations of $a_{202n}$:\n- From $5a_{202n} = k^3$ and $3a_{202n} = m^2$, the exponent of $5$ in $a_{202n}$ must be even and congruent to $2 \\pmod 3$, so it is at least $2$.\n- The exponent of $3$ in $a_{202n}$ must be odd and divisible by $3$, so it is at least $3$.\n- Any other prime factor has exponent divisible by $6$.\n\nThus the smallest possible value of $a_{202n}$ is $3^3 \\times 5^2 = 27 \\times 25 = 675$ (and any larger value is $675t^6$ for $t \\ge 2$, which exceeds $675 \\times 64 = 43200$).\nUsing $a_n = a_{202n} - (202n - n) = a_{202n} - 201n$, to minimize $a_n$ we take $a_{202n} = 675$ and maximize $n \\in \\{1, 2, \\ldots, 9\\}$ subject to $a_1 \\ge 1$:\n$$a_1 = 675 - 202n + 1 \\ge 1 \\implies 202n \\le 675 \\implies n \\le 3.$$\nFor $n = 3$, $a_1 = 675 - 606 + 1 = 70 \\ge 1$, giving:\n$$a_3 = 675 - 201(3) = 675 - 603 = 72.$$',
          rubric: [
            { code: 'M2', text: 'Reduces conditions to $5a_{202n} = k^3$ and $3a_{202n} = m^2$, finding minimum $a_{202n} = 3^3 \\cdot 5^2 = 675$.' },
            { code: 'A2', text: 'Maximizes $n = 3$ (since $202n \\le 675$) to obtain $a_3 = 675 - 603 = 72$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'Only one button of a calculator is working. If $x$ is the number displayed, it returns the value $x(2 + x)$. Initially, the number $1$ is displayed. The number that is shown on the calculator when it is pressed $25$ times is of the form $a^{b^c} + d$. Find the value of $a + b + c + d$.',
          answer: '$28$',
          answerNumeric: [{ value: 28, unit: '' }],
          principle:
            'Complete the square $x(2 + x) = (x + 1)^2 - 1$ to linearize the recurrence via $y_k = x_k + 1$.',
          solution:
            'Let $x_k$ be the number displayed after $k$ presses, with $x_0 = 1$. Notice that:\n$$x_{k+1} = x_k(2 + x_k) = x_k^2 + 2x_k = (x_k + 1)^2 - 1,$$\nso $x_{k+1} + 1 = (x_k + 1)^2$. Setting $y_k = x_k + 1$, we have $y_0 = 1 + 1 = 2$ and $y_{k+1} = y_k^2$. Computing the first few terms:\n$$y_0 = 2^{2^0}, \\quad y_1 = 2^{2^1}, \\quad y_2 = 2^{2^2}, \\quad \\ldots, \\quad y_{25} = 2^{2^{25}}.$$\nHence:\n$$x_{25} = y_{25} - 1 = 2^{2^{25}} - 1.$$\nMatching $a^{b^c} + d$ gives $a = 2$, $b = 2$, $c = 25$, and $d = -1$, so:\n$$a + b + c + d = 2 + 2 + 25 + (-1) = 28.$$',
          rubric: [
            { code: 'M2', text: 'Rewrites $x_{k+1} + 1 = (x_k + 1)^2$ to obtain $x_{25} = 2^{2^{25}} - 1$.' },
            { code: 'A2', text: 'Sums $a + b + c + d = 2 + 2 + 25 - 1 = 28$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'How many triangles are there in the figure below?',
          figures: [
            {
              src: '/papers/simoc-2019-g8/fig-21.webp',
              alt: 'Square border of subdivided diamond-patterned grid blocks surrounding a blank central square hole.',
              caption: 'Grid figure with diagonal segments for Question 21.'
            }
          ],
          answer: '$236$',
          answerNumeric: [{ value: 236, unit: '' }],
          principle:
            'Classify all right-angled isosceles triangles systematically by their area (in unit squares) across the $48$ unit squares and $12$ diamond blocks.',
          solution:
            'The figure consists of an $8 \\times 8$ unit-square grid with its central $4 \\times 4$ square removed, leaving $64 - 16 = 48$ unit squares arranged as $12$ diamond-patterned $2 \\times 2$ blocks. Every triangle in the figure is an isosceles right triangle. Count them by area (measured in unit squares):\n1. **Area $\\frac{1}{2}$ (legs $1, 1$, hypotenuse $\\sqrt{2}$):** Each of the $48$ unit squares is split by one diagonal into $2$ small triangles, giving $48 \\times 2 = 96$ triangles.\n2. **Area $1$ (legs $\\sqrt{2}, \\sqrt{2}$, hypotenuse $2$):** Around the center of each of the $12$ diamond blocks, pairs of small triangles share a grid leg to form $4$ triangles per block ($12 \\times 4 = 48$). In addition, across each of the $12$ shared boundaries between adjacent $2 \\times 2$ blocks, $2$ triangles of hypotenuse $2$ are formed ($12 \\times 2 = 24$). Subtotal: $48 + 24 = 72$ triangles.\n3. **Area $2$ (legs $2, 2$, hypotenuse $2\\sqrt{2}$):** Each of the four $2 \\times 8$ border strips contains $7$ overlapping $2 \\times 2$ grid squares, giving $4 \\times 7 - 4 = 24$ distinct $2 \\times 2$ grid squares inside the ring. Each such $2 \\times 2$ square has one complete diagonal of length $2\\sqrt{2}$ splitting it into $2$ triangles, giving $24 \\times 2 = 48$ triangles.\n4. **Area $4$ (legs $2\\sqrt{2}, 2\\sqrt{2}$, hypotenuse $4$):** Pairs of perpendicular length-$2\\sqrt{2}$ diagonals meet to form right triangles of hypotenuse $4$ along the edges of the ring ($4$ along the outer boundary and $4$ overlapping the inner/corner strips, $2$ orientations per side, totaling $16$ triangles).\n5. **Area $\\frac{9}{2}$ (legs $3, 3$, hypotenuse $3\\sqrt{2}$):** At each of the $4$ outer corners of the $8 \\times 8$ figure, a diagonal of length $3\\sqrt{2}$ cuts off $1$ large corner triangle of legs $3$ and $3$, giving $4$ triangles.\n\nSumming all five sizes:\n$$96 + 72 + 48 + 16 + 4 = 236.$$',
          rubric: [
            { code: 'M2', text: 'Classifies all triangles by size/area across the $48$ unit squares ($96 + 72 + 48 + 16 + 4$).' },
            { code: 'A2', text: 'Sums to $236$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'If $P(x)$ is a non-zero polynomial with all integer coefficients and has the root:\n$$x = 2019 + \\sqrt{2} + \\sqrt{3}$$\nWhat is the minimum degree of $P(x)$?',
          answer: '$4$',
          answerNumeric: [{ value: 4, unit: '' }],
          principle:
            'Shift $y = x - 2019 = \\sqrt{2} + \\sqrt{3}$ and square twice to obtain a degree-$4$ integer polynomial, then verify no lower-degree non-zero integer polynomial vanishes at $y$.',
          solution:
            'Let $y = x - 2019 = \\sqrt{2} + \\sqrt{3}$. Squaring both sides gives:\n$$y^2 = 5 + 2\\sqrt{6} \\implies y^2 - 5 = 2\\sqrt{6}.$$\nSquaring once more eliminates all square roots:\n$$(y^2 - 5)^2 = 24 \\implies y^4 - 10y^2 + 1 = 0.$$\nReplacing $y$ by $x - 2019$ yields a non-zero degree-$4$ polynomial with integer coefficients having $x = 2019 + \\sqrt{2} + \\sqrt{3}$ as a root.\n\nTo see why degree $3$ or less is impossible, suppose $ay^3 + by^2 + cy + d = 0$ for integers $a, b, c, d$. Using $y^2 = 5 + 2\\sqrt{6}$ and $y^3 = (5 + 2\\sqrt{6})(\\sqrt{2} + \\sqrt{3}) = 11\\sqrt{2} + 9\\sqrt{3}$, we obtain:\n$$(11a + c)\\sqrt{2} + (9a + c)\\sqrt{3} + 2b\\sqrt{6} + (5b + d) = 0.$$\nSince $1, \\sqrt{2}, \\sqrt{3}, \\sqrt{6}$ are linearly independent over the rationals, $2b = 0 \\implies b = 0$, $5b + d = 0 \\implies d = 0$, and $11a + c = 9a + c = 0 \\implies a = c = 0$. Thus no non-zero integer polynomial of degree $\\le 3$ works, so the minimum degree is $4$.',
          rubric: [
            { code: 'M2', text: 'Constructs $(x - 2019)^4 - 10(x - 2019)^2 + 1 = 0$ and shows degree $\\le 3$ is impossible.' },
            { code: 'A2', text: 'Concludes the minimum degree is $4$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'You are given an empty $3$ litres and $7$ litres jug. You can perform any of the following steps:\n- Fill a jug completely with water.\n- Completely empty a jug.\n- Pour water from one jug to another until either of the jugs is empty or full.\n\nWhat is the minimum number of steps required to obtain exactly $1$ litre of water in one of the jugs?',
          answer: '$4$',
          answerNumeric: [{ value: 4, unit: '' }],
          principle:
            'Track the water state $(a, b)$ in the $3$-litre and $7$-litre jugs; filling the $7$-litre jug and pouring twice into the $3$-litre jug leaves $7 - 2(3) = 1$ litre.',
          solution:
            'Write the state as $(a, b)$, where $a$ is the amount in the $3$-litre jug and $b$ is the amount in the $7$-litre jug, starting at $(0, 0)$:\n1. Fill the $7$-litre jug completely: $(0, 7)$.\n2. Pour from the $7$-litre jug into the $3$-litre jug until the $3$-litre jug is full: $(3, 4)$.\n3. Completely empty the $3$-litre jug: $(0, 4)$.\n4. Pour from the $7$-litre jug into the $3$-litre jug until the $3$-litre jug is full: $(3, 1)$.\n\nNow the $7$-litre jug contains exactly $1$ litre, achieved in $4$ steps.\nNo sequence of $3$ or fewer steps can reach $1$ litre: step 1 only gives $(3, 0)$ or $(0, 7)$; step 2 only adds $(3, 7)$, $(0, 3)$, or $(3, 4)$; step 3 from $(3, 4)$ can only give $(0, 4)$, $(3, 0)$, or $(3, 7)$, none containing $1$ litre. Hence the minimum number of steps is $4$.',
          rubric: [
            { code: 'M2', text: 'Gives the $4$-step sequence $(0,0) \\to (0,7) \\to (3,4) \\to (0,4) \\to (3,1)$ and rules out $\\le 3$ steps.' },
            { code: 'A2', text: 'Concludes $4$ steps.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'How many positive integers $n$ satisfy all the criteria below?\n- $n^2 - 3n + 2$ is divisible by $24$\n- $n^2 + 5n + 6$ is divisible by $7$\n- $n \\le 200$',
          answer: '$10$',
          answerNumeric: [{ value: 10, unit: '' }],
          principle:
            'Factor both quadratics into products of consecutive integers, solve each divisibility condition modulo $24$ and modulo $7$, and combine them using the Chinese Remainder Theorem (period $168$).',
          solution:
            'Factor both expressions:\n$$n^2 - 3n + 2 = (n - 1)(n - 2), \\qquad n^2 + 5n + 6 = (n + 2)(n + 3).$$\n1. **Condition $7 \\mid (n + 2)(n + 3)$:** Since $7$ is prime, $n + 2 \\equiv 0$ or $n + 3 \\equiv 0 \\pmod 7$, giving:\n$$n \\equiv 4 \\text{ or } 5 \\pmod 7.$$\n2. **Condition $24 \\mid (n - 1)(n - 2)$:** Note $24 = 3 \\times 8$ with $\\gcd(3, 8) = 1$, and $n - 1, n - 2$ are consecutive integers (hence coprime).\n   - For $8 \\mid (n - 1)(n - 2)$, one of the two consecutive integers must be divisible by $8$, so $n \\equiv 1$ or $2 \\pmod 8$.\n   - For $3 \\mid (n - 1)(n - 2)$, we need $n \\equiv 1$ or $2 \\pmod 3$.\n   Combining modulo $8$ and modulo $3$ gives $4$ residue classes modulo $24$:\n   $$n \\equiv 1, \\; 2, \\; 10, \\; 17 \\pmod{24}.$$\n3. **Combine modulo $24$ and modulo $7$ (period $\\text{lcm}(24, 7) = 168$):**\n   Each of the $4 \\times 2 = 8$ residue pairs $(r \\bmod 24,\\, s \\bmod 7)$ yields a unique solution modulo $168$:\n   - $n \\equiv 1 \\pmod{24}$ with $4, 5 \\pmod 7 \\implies n \\equiv 25, 145 \\pmod{168}$\n   - $n \\equiv 2 \\pmod{24}$ with $4, 5 \\pmod 7 \\implies n \\equiv 74, 26 \\pmod{168}$\n   - $n \\equiv 10 \\pmod{24}$ with $4, 5 \\pmod 7 \\implies n \\equiv 130, 82 \\pmod{168}$\n   - $n \\equiv 17 \\pmod{24}$ with $4, 5 \\pmod 7 \\implies n \\equiv 89, 137 \\pmod{168}$\n\nListing all positive integers $n \\le 200$ from these $8$ classes ($25, 26, 74, 82, 89, 130, 137, 145$, plus $25 + 168 = 193$ and $26 + 168 = 194$) gives $8 + 2 = 10$ values.',
          rubric: [
            { code: 'M2', text: 'Finds $n \\equiv 1, 2, 10, 17 \\pmod{24}$ and $n \\equiv 4, 5 \\pmod 7$, yielding $8$ solutions per $168$-cycle.' },
            { code: 'A2', text: 'Counts the $10$ valid integers in $1 \\le n \\le 200$ ($8$ in $1$–$168$ plus $193, 194$).' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'Republic of SIMOC territory consists of $2019$ islands. The government wants to build some bridges between the islands. A bridge is a two-way connection between two and exactly two islands. Due to lack of financial assistance, the government decides to build as few bridges as possible while still ensuring the connectivity between any two islands. Assume the bridge construction is optimal, what is the minimum number of bridges that must be crossed between any $2$ islands?',
          answer: '$2$',
          answerNumeric: [{ value: 2, unit: '' }],
          principle:
            'A minimally connected network on $N$ vertices is a tree ($N - 1$ edges), and the tree that minimizes the maximum distance (diameter) between any two vertices is a star graph.',
          solution:
            'To connect all $2019$ islands using as few bridges as possible, the bridge network must form a tree with $2019 - 1 = 2018$ bridges.\nTo minimize the maximum number of bridges that must be crossed when travelling between any two islands, connect $1$ central hub island directly to each of the other $2018$ islands (a star graph). Under this optimal construction:\n- Travelling between the hub and any other island requires $1$ bridge.\n- Travelling between any two non-hub islands requires crossing at most $2$ bridges (via the hub).\n\nNo tree on $2019 \\ge 3$ islands can guarantee crossing at most $1$ bridge between every pair of islands, because that would require a direct bridge between every pair ($\\binom{2019}{2}$ bridges instead of $2018$). Thus the optimal worst-case minimum number of bridges is $2$.',
          rubric: [
            { code: 'M2', text: 'Identifies the minimal network as a $2018$-bridge tree and selects a star graph to minimize its diameter.' },
            { code: 'A2', text: 'Concludes the optimal worst-case bridge count is $2$.' }
          ]
        }
      ]
    }
  ]
};
