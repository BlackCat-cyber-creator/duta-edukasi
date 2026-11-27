/**
 * Paket Soal: SASMO 2019 Primary 6 (Grade 6)
 * Sumber: Singapore and Asian Schools Math Olympiad 2019, Primary 6 Contest (2019-SASMO-G6.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 3, 6, 15, 16, 18, 22, dan 23 dilengkapi diagram (.webp hasil crop dari naskah resmi).
 */
export default {
  id: 'sasmo-2019-g6',
  slug: 'sasmo-2019-primary-6',
  subject: 'olimpiade-mat',
  grade: 6,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'SASMO 2019 Primary 6 (Grade 6): arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'sd6-bab1-pecahan-desimal',
    'sd6-bab2-rasio',
    'sd6-bab3-kubus-balok',
    'sd6-bab4-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2019 Primary 6 (Grade 6)',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Diagrams for Questions 3, 6, 15, 16, 18, 22, and 23 are provided as figures.',
  source: {
    org: 'SASMO',
    file: '2019-SASMO-G6.pdf',
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
            'Find the sum of all digits of the following product:\n$$693 \\times 333$$\n\nA. $230769$\nB. $229669$\nC. $27$\nD. $34$\nE. None of the above',
          answer: 'C. $27$',
          principle:
            'Factor out $3$ from $693$ to convert $333$ into $999 = 1000 - 1$, making the multiplication effortless.',
          solution:
            'Rewrite $693$ as $231 \\times 3$ and group $3$ with $333$:\n$$693 \\times 333 = 231 \\times (3 \\times 333) = 231 \\times 999 = 231 \\times (1000 - 1) = 231000 - 231 = 230769.$$\nThe sum of all digits of $230769$ is:\n$$2 + 3 + 0 + 7 + 6 + 9 = 27.$$',
          rubric: [
            { code: 'M1', text: 'Computes the product $693 \\times 333 = 230769$ (e.g., via $231 \\times 999$).' },
            { code: 'A1', text: 'Sums the digits to obtain $27$, option C.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'In a school, $52$ students were given vouchers for a bookstore or cafeteria. Twenty of them received bookstore vouchers and $39$ students received cafeteria vouchers. How many students received both vouchers?\n\nA. $8$\nB. $9$\nC. $10$\nD. $11$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Apply the inclusion-exclusion principle: the overlap equals the sum of the two group counts minus the total number of students.',
          solution:
            'Total vouchers distributed across the two types:\n$$20 + 39 = 59.$$\nSince $52$ students received at least one voucher, the number of students counted twice (receiving both vouchers) is:\n$$59 - 52 = 7.$$\nBecause $7$ is not listed among options A–D, the correct choice is **E. None of the above**.',
          rubric: [
            { code: 'M1', text: 'Applies inclusion-exclusion: $(20 + 39) - 52 = 7$.' },
            { code: 'A1', text: 'Identifies option E (None of the above).' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'A cube is a solid consisting of identical squares. A cube has $6$ faces. A "dodecahedron" is a solid consisting of identical pentagons ($5$-sided shapes), as illustrated below. If a dodecahedron has $12$ faces, how many edges does it have?\n\nA. $5$\nB. $20$\nC. $12$\nD. $30$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2019-g6/fig-3.webp',
              alt: 'Line drawings of a cube made of square faces on the left and a dodecahedron made of regular pentagonal faces on the right.',
              caption: 'Cube and dodecahedron illustrations for Question 3.'
            }
          ],
          answer: 'D. $30$',
          principle:
            'Multiply the number of faces by the sides per face, then divide by $2$ because every edge is shared by exactly $2$ adjacent faces.',
          solution:
            'Each of the $12$ pentagonal faces has $5$ edges, giving $12 \\times 5 = 60$ face-edges.\nSince each edge of the solid is shared by exactly $2$ faces, every edge has been counted twice. Therefore, the number of edges is:\n$$60 \\div 2 = 30.$$',
          rubric: [
            { code: 'M1', text: 'Computes $12 \\times 5 = 60$ face-edges and divides by $2$ for shared edges.' },
            { code: 'A1', text: 'Finds $30$ edges, option D.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            "William has $3$ books: *Charlotte's Web*, *Little Prince* and *Hobbit*. How many ways can he arrange these books in a row such that *Hobbit* and *Charlotte's Web* are next to each other?\n\nA. $6$\nB. $2$\nC. $4$\nD. $12$\nE. None of the above",
          answer: 'C. $4$',
          principle:
            "Treat the two adjacent books as a single block to arrange with the remaining book, then multiply by the $2$ internal orders of the block.",
          solution:
            "Group *Hobbit* and *Charlotte's Web* together as one block. There are $2! = 2$ ways to order this block and *Little Prince*, and $2! = 2$ ways to order *Hobbit* and *Charlotte's Web* within the block, giving $2 \\times 2 = 4$ arrangements:\n1. *Hobbit* – *Charlotte's Web* – *Little Prince*\n2. *Charlotte's Web* – *Hobbit* – *Little Prince*\n3. *Little Prince* – *Hobbit* – *Charlotte's Web*\n4. *Little Prince* – *Charlotte's Web* – *Hobbit*",
          rubric: [
            { code: 'M1', text: 'Counts arrangements with the two books grouped as a block ($2! \\times 2!$) or lists all valid permutations.' },
            { code: 'A1', text: 'Obtains $4$ ways, option C.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Clayton gave $77$ baseball cards to his friend and $112$ baseball cards to his brother. In the end, Clayton is left with $441$ baseball cards. What percentage of his original number of cards did Clayton give away?\n\nA. $70\\%$\nB. $60\\%$\nC. $40\\%$\nD. $30\\%$\nE. None of the above',
          answer: 'D. $30\\%$',
          principle:
            'Find both the total number of cards given away and the original total before computing the percentage.',
          solution:
            'The number of cards Clayton gave away is:\n$$77 + 112 = 189.$$\nAdding the $441$ cards left gives his original number of cards:\n$$189 + 441 = 630.$$\nTherefore, the percentage of cards given away is:\n$$\\frac{189}{630} \\times 100\\% = \\frac{3}{10} \\times 100\\% = 30\\%.$$',
          rubric: [
            { code: 'M1', text: 'Finds $189$ cards given away out of $630$ original cards.' },
            { code: 'A1', text: 'Computes $30\\%$, option D.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'In the diagram, $ABCD$ and $CEFG$ are squares, and $CED$ is an equilateral triangle. Find the measurement (in degrees) of the angle $\\angle EAC$.\n\nA. $45^\\circ$\nB. $36^\\circ$\nC. $32^\\circ$\nD. $30^\\circ$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2019-g6/fig-6.webp',
              alt: 'Geometry figure showing two squares ABCD and CEFG joined by an equilateral triangle CED sharing sides CD and CE.',
              caption: 'Squares ABCD and CEFG with equilateral triangle CED for Question 6.'
            }
          ],
          answer: 'D. $30^\\circ$',
          principle:
            'Use the equal side lengths of square $ABCD$ and equilateral triangle $CED$ to identify isosceles triangle $ADE$, then subtract $\\angle EAD$ from the $45^\\circ$ diagonal angle $\\angle CAD$.',
          solution:
            'In square $ABCD$, $\\angle CDA = 90^\\circ$ and diagonal $AC$ bisects $\\angle DAB$, so $\\angle CAD = 45^\\circ$.\nIn equilateral triangle $CED$, $\\angle CDE = 60^\\circ$. Thus:\n$$\\angle ADE = \\angle CDA + \\angle CDE = 90^\\circ + 60^\\circ = 150^\\circ.$$\nSince $AD = CD$ (sides of square $ABCD$) and $CD = DE$ (sides of equilateral triangle $CED$), we have $AD = DE$, so $\\triangle ADE$ is isosceles with:\n$$\\angle EAD = \\frac{180^\\circ - 150^\\circ}{2} = 15^\\circ.$$\nTherefore:\n$$\\angle EAC = \\angle CAD - \\angle EAD = 45^\\circ - 15^\\circ = 30^\\circ.$$',
          rubric: [
            { code: 'M1', text: 'Finds $\\angle ADE = 150^\\circ$ and uses $AD = DE$ to obtain $\\angle EAD = 15^\\circ$.' },
            { code: 'A1', text: 'Subtracts from $\\angle CAD = 45^\\circ$ to get $30^\\circ$, option D.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            "Annabelle, Betty, Cynthia and Dora are playing a new video game. After the first round of the game:\n- Cynthia's number of gold coins is equal to the average number of gold coins Annabelle and Betty have.\n- Annabelle's number of gold coins is half of Betty's.\n- Betty and Dora got the same number of gold coins.\n- Dora got $10$ more gold coins than Cynthia.\n\nWhat is their total number of gold coins after the first round?\n\nA. $140$\nB. $130$\nC. $70$\nD. Insufficient data\nE. None of the above",
          answer: 'B. $130$',
          principle:
            "Express everyone's coin count in units relative to Annabelle's count, then match the difference between Dora and Cynthia to $10$.",
          solution:
            "Let Annabelle have $2$ units of gold coins. Then:\n- Betty has $2 \\times 2 = 4$ units.\n- Dora has the same as Betty, so Dora has $4$ units.\n- Cynthia has the average of Annabelle and Betty: $\\frac{2 + 4}{2} = 3$ units.\n\nSince Dora got $10$ more coins than Cynthia:\n$$4\\text{ units} - 3\\text{ units} = 1\\text{ unit} = 10\\text{ coins}.$$\nTheir total number of coins is $2 + 4 + 3 + 4 = 13\\text{ units}$, which equals:\n$$13 \\times 10 = 130.$$",
          rubric: [
            { code: 'M1', text: 'Models the four counts as $2u, 4u, 3u, 4u$ and equates $4u - 3u = 10$.' },
            { code: 'A1', text: 'Computes the total $13u = 130$, option B.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'Each of the $3$-digit numbers $ABC$, $BCA$ and $CAB$ is even and divisible by $9$. If $A$, $B$ and $C$ are different digits, find the value of $A + B + C$.\n\nA. $18$\nB. $9$\nC. $20$\nD. $12$\nE. None of the above',
          answer: 'A. $18$',
          principle:
            'Use the units-digit rule for evenness on all three cyclic shifts to show all three digits are even, then apply the divisibility rule for $9$.',
          solution:
            'Because $ABC$, $BCA$, and $CAB$ are all even, their units digits $C$, $A$, and $B$ must all be even digits.\nSince each number is divisible by $9$, the sum of its digits $A + B + C$ must be a multiple of $9$.\nBecause $A$, $B$, and $C$ are distinct even digits (so each is at least $0$, and in fact nonzero since each starts a $3$-digit number, so chosen from $\\{2, 4, 6, 8\\}$), their sum is even and satisfies:\n$$2 + 4 + 6 = 12 \\le A + B + C \\le 4 + 6 + 8 = 18.$$\nThe only even multiple of $9$ in this range is $18$ (achieved by $\\{4, 6, 8\\}$). Hence $A + B + C = 18$.',
          rubric: [
            { code: 'M1', text: 'Deduces $A, B, C$ are distinct nonzero even digits whose sum is a multiple of $9$.' },
            { code: 'A1', text: 'Concludes $A + B + C = 18$, option A.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'Consider all the whole numbers from $1$ to $50$. Which of the following is NOT true about them?\n\nA. The number of even numbers is the same as the number of odd numbers.\nB. Writing all the digits, the digit "$0$" is the least occurring digit.\nC. There are more $2$-digit numbers than $1$-digit numbers.\nD. The number of multiples of $5$ is the same as the number of multiples of $7$.\nE. The average of the $50$ numbers is not a whole number.',
          answer: 'D. The number of multiples of 5 is the same as the number of multiples of 7.',
          principle:
            'Check each statement directly on the interval $1$ to $50$ (parity counts, digit frequencies, digit lengths, multiples, and mean).',
          solution:
            'Verify each statement for the whole numbers $1, 2, \\ldots, 50$:\n- **A is true:** There are $25$ even numbers and $25$ odd numbers.\n- **B is true:** The digit $0$ appears $5$ times ($10, 20, 30, 40, 50$), and every nonzero digit appears at least $5$ times ($1, 2, 3, 4$ appear $15$ times each; $5$ appears $6$ times; $6, 7, 8, 9$ appear $5$ times each), so $0$ is tied for the least occurring digit.\n- **C is true:** There are $9$ one-digit numbers ($1$–$9$) and $41$ two-digit numbers ($10$–$50$).\n- **D is NOT true:** There are $50 \\div 5 = 10$ multiples of $5$, whereas there are only $\\lfloor 50 / 7 \\rfloor = 7$ multiples of $7$ ($7, 14, 21, 28, 35, 42, 49$).\n- **E is true:** The average is $\\frac{1 + 50}{2} = 25.5$, which is not a whole number.\n\nThus statement **D** is NOT true.',
          rubric: [
            { code: 'M1', text: 'Counts $10$ multiples of $5$ and $7$ multiples of $7$ in $1$–$50$.' },
            { code: 'A1', text: 'Identifies statement D as false.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'A pipe can fill up an empty tank with water in $4$ hours. However, due to the leakage in the tank, the pipe fills the empty tank in $12$ hours. If the tank is full of water and the pipe is removed, how long will the leakage take to empty the full tank?\n\nA. $6$ hours\nB. $8$ hours\nC. $9$ hours\nD. $16$ hours\nE. None of the above',
          answer: 'A. $6$ hours',
          principle:
            'Subtract the net filling rate (with the leak) from the pipe-alone filling rate to find the leakage rate per hour.',
          solution:
            'In $1$ hour:\n- The pipe alone fills $\\frac{1}{4}$ of the tank.\n- With the leak, the net amount filled is $\\frac{1}{12}$ of the tank.\n\nTherefore, the leakage empties:\n$$\\frac{1}{4} - \\frac{1}{12} = \\frac{3 - 1}{12} = \\frac{2}{12} = \\frac{1}{6}\\text{ of the tank per hour}.$$\nHence the leakage takes $1 \\div \\frac{1}{6} = 6$ hours to empty a full tank.',
          rubric: [
            { code: 'M1', text: 'Subtracts rates: $\\frac{1}{4} - \\frac{1}{12} = \\frac{1}{6}$ tank per hour.' },
            { code: 'A1', text: 'Obtains $6$ hours, option A.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'Seventy days after the day before yesterday is Friday. Which day of the week is tomorrow?\n\nA. Friday\nB. Saturday\nC. Sunday\nD. Thursday\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Since $70$ days is an exact multiple of $7$, the weekday repeats identically, allowing us to step forward from the day before yesterday to tomorrow.',
          solution:
            'Because $70 = 10 \\times 7$ is an exact number of weeks, $70$ days after the day before yesterday has the same day of the week as the day before yesterday.\n- Day before yesterday: Friday.\n- Yesterday: Saturday.\n- Today: Sunday.\n- Tomorrow: Monday.\n\nSince Monday is not among options A–D, the answer is **E. None of the above**.',
          rubric: [
            { code: 'M1', text: 'Uses $70 \\equiv 0 \\pmod{7}$ to deduce the day before yesterday is Friday, so today is Sunday.' },
            { code: 'A1', text: 'Finds tomorrow is Monday, option E.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'At $12$ p.m., the hour and minute hand point in the same direction. What is the exact time between $6$ p.m. and $7$ p.m. when the hour and minute hand point in the same direction?\n\nA. $6\\text{:}30$ p.m.\nB. $6\\text{:}32\\frac{8}{11}$ p.m.\nC. $6\\text{:}33\\frac{3}{11}$ p.m.\nD. $6\\text{:}32\\frac{7}{11}$ p.m.\nE. None of the above',
          answer: 'B. $6\\text{:}32\\frac{8}{11}$ p.m.',
          principle:
            'Track the angular speeds from $6\\text{:}00$ p.m.: the minute hand moves at $6^\\circ\\text{/min}$ starting at $0^\\circ$, while the hour hand moves at $0.5^\\circ\\text{/min}$ starting at $180^\\circ$.',
          solution:
            'Let $x$ be the number of minutes after $6\\text{:}00$ p.m. when the two hands overlap.\n- At $6\\text{:}00$ p.m., the hour hand is at $6 \\times 30^\\circ = 180^\\circ$ clockwise from $12$, and it moves $30^\\circ \\div 60 = 0.5^\\circ$ per minute, reaching $180 + 0.5x$ degrees.\n- The minute hand starts at $0^\\circ$ and moves $360^\\circ \\div 60 = 6^\\circ$ per minute, reaching $6x$ degrees.\n\nSetting their angles equal:\n$$6x = 180 + 0.5x \\implies 5.5x = 180 \\implies \\frac{11}{2}x = 180 \\implies x = \\frac{360}{11} = 32\\frac{8}{11}.$$\nThus the hands point in the same direction at $6\\text{:}32\\frac{8}{11}$ p.m.',
          rubric: [
            { code: 'M1', text: 'Sets up $6x = 180 + 0.5x$ (relative speed $5.5^\\circ\\text{/min}$ closing $180^\\circ$).' },
            { code: 'A1', text: 'Solves $x = 32\\frac{8}{11}$, giving $6\\text{:}32\\frac{8}{11}$ p.m., option B.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            "Four athletes run in a marathon, and made the following statements:\n- Tom: I'm the fastest.\n- Jack: I'm the slowest.\n- Lionel: I'm neither the slowest nor the fastest.\n- Robert: I'm not the fastest.\n\nIf exactly $3$ of them are telling the truth, who is the slowest?\n\nA. Tom\nB. Jack\nC. Lionel\nD. Robert\nE. Insufficient data",
          answer: 'D. Robert',
          principle:
            'Exactly $1$ athlete is lying; test which single statement can be false without creating a contradiction.',
          solution:
            'Since $3$ athletes tell the truth, exactly $1$ athlete is lying:\n- **If Tom lied:** Tom is not the fastest, while Jack (slowest), Lionel (neither), and Robert (not fastest) tell the truth. Then nobody is the fastest, a contradiction.\n- **If Lionel lied:** Lionel is either fastest or slowest, while Tom (fastest) and Jack (slowest) tell the truth, so neither extreme is available for Lionel, a contradiction.\n- **If Robert lied:** Robert is the fastest, while Tom (also fastest) tells the truth, a contradiction.\n- **If Jack lied:** Jack is not the slowest, while Tom is the fastest, Lionel is neither fastest nor slowest, and Robert is not the fastest. Since Tom, Jack, and Lionel are all not the slowest, **Robert** must be the slowest.\n\nTherefore, **Robert** is the slowest.',
          rubric: [
            { code: 'M1', text: 'Eliminates Tom, Lionel, and Robert as the single liar, leaving Jack as the only possible liar.' },
            { code: 'A1', text: 'Concludes Robert is the slowest, option D.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'The product of all whole numbers from $2$ to $M$ is a multiple of $1365$. What is the least possible value of $M$?\n\nA. $13$\nB. $15$\nC. $65$\nD. $1365$\nE. None of the above',
          answer: 'A. $13$',
          principle:
            'Find the prime factorization of $1365$; the factorial $M!$ must contain every prime power in $1365$.',
          solution:
            'Factor $1365$ into primes:\n$$1365 = 5 \\times 273 = 5 \\times 3 \\times 91 = 3 \\times 5 \\times 7 \\times 13.$$\nSince $3, 5, 7,$ and $13$ are distinct primes, $2 \\times 3 \\times \\cdots \\times M = M!$ is divisible by $1365$ if and only if $M$ is at least as large as the greatest prime factor, $13$.\nFor $M = 13$, the product $2 \\times 3 \\times \\cdots \\times 13$ includes $3, 5, 7,$ and $13$, so the least possible value of $M$ is $13$.',
          rubric: [
            { code: 'M1', text: 'Prime-factorizes $1365 = 3 \\times 5 \\times 7 \\times 13$.' },
            { code: 'A1', text: 'Identifies the largest prime factor $13$ as the least $M$, option A.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Find the missing figure in the diagram below.\n\nA. Option A (see figure)\nB. Option B (see figure)\nC. Option C (see figure)\nD. Option D (see figure)\nE. Option E (see figure)',
          figures: [
            {
              src: '/papers/sasmo-2019-g6/fig-15.webp',
              alt: 'A 3 by 3 grid of squares containing small upward and downward triangles with a question mark in the bottom-right cell, above five answer choices labeled A through E.',
              caption: 'Grid pattern puzzle and options A–E for Question 15.'
            }
          ],
          answer: 'D. Option D',
          principle:
            'Compare the top two cells in each column position by position (top-left, top-right, center, bottom-left, bottom-right) to find how they combine into the third cell.',
          solution:
            'Checking Columns 1 and 2 from top to bottom reveals the position-by-position rule combining the $1$st and $2$nd cells into the $3$rd cell:\n1. If both cells have a triangle pointing in the **same** direction, the $3$rd cell has a triangle pointing in the **opposite** direction.\n2. If both cells have triangles pointing in **opposite** directions, the position is **blank** in the $3$rd cell.\n3. If **only one** cell has a triangle in that position, the **same** triangle appears in the $3$rd cell.\n\nApplying these rules to Column 3 (Cell 1: center $\\triangle$, bottom-left $\\nabla$, bottom-right $\\triangle$; Cell 2: top-right $\\nabla$, center $\\triangle$, bottom-left $\\triangle$):\n- **Top-left:** blank + blank $\\to$ blank.\n- **Top-right:** blank + $\\nabla$ $\\to$ $\\nabla$.\n- **Center:** $\\triangle$ + $\\triangle$ (same) $\\to$ $\\nabla$ (opposite).\n- **Bottom-left:** $\\nabla$ + $\\triangle$ (opposite) $\\to$ blank.\n- **Bottom-right:** $\\triangle$ + blank $\\to$ $\\triangle$.\n\nThis matches **Option D**.',
          rubric: [
            { code: 'M1', text: 'Identifies the three column-combination rules for matching, opposite, and single triangles.' },
            { code: 'A1', text: 'Applies the rules to Column 3 to select Option D.' }
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
          prompt: 'How many triangles are there in the diagram?',
          figures: [
            {
              src: '/papers/sasmo-2019-g6/fig-16.webp',
              alt: 'A symmetric geometric grid composed of small equilateral triangles arranged in four horizontal rows ending in two downward tips at the bottom.',
              caption: 'Triangular grid diagram for Question 16.'
            }
          ],
          answer: '$32$',
          principle:
            'Count triangles systematically by size (number of $1$-part triangles inside them: $1$-part, $4$-part, and $9$-part) and orientation (pointing downward vs. upward).',
          solution:
            'Group the triangles by the number of smallest ($1$-part) equilateral triangles they contain:\n- **$1$-part triangles (side length $1$):**\n  - Pointing down: $3$ (row 1) $+ 4$ (row 2) $+ 3$ (row 3) $+ 2$ (row 4) $= 12$.\n  - Pointing up: $2$ (row 1) $+ 3$ (row 2) $+ 2$ (row 3) $+ 0$ (row 4) $= 7$.\n  - Subtotal $= 12 + 7 = 19$.\n- **$4$-part triangles (side length $2$):**\n  - Pointing down: $2$ (bases on top line) $+ 3$ (bases on $2$nd line) $+ 2$ (bases on $3$rd line) $= 7$.\n  - Pointing up: $2$ (bases on $3$rd line) $+ 1$ (base on $4$th line) $= 3$.\n  - Subtotal $= 7 + 3 = 10$.\n- **$9$-part triangles (side length $3$):**\n  - Pointing down: $1$ (base on top line) $+ 2$ (bases on $2$nd line) $= 3$.\n  - Pointing up: $0$.\n  - Subtotal $= 3$.\n- Larger triangles ($16$-part): $0$.\n\nTotal number of triangles:\n$$19 + 10 + 3 = 32.$$',
          rubric: [
            { code: 'M2', text: 'Categorizes triangles by size and orientation: $19$ ($1$-part), $10$ ($4$-part), and $3$ ($9$-part).' },
            { code: 'A2', text: 'Sums to $32$ triangles.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'Find the numerator of the following sum in its simplest form.\n$$\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots + \\frac{1}{128}$$',
          answer: '$127$',
          principle:
            'Each partial sum of powers of $\\frac{1}{2}$ equals $1$ minus the last term added (or add over the common denominator $128$).',
          solution:
            'Notice the pattern of partial sums:\n$$\\frac{1}{2} = 1 - \\frac{1}{2}, \\quad \\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4} = 1 - \\frac{1}{4}, \\quad \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} = \\frac{7}{8} = 1 - \\frac{1}{8}.$$\nContinuing up to $\\frac{1}{128}$:\n$$\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots + \\frac{1}{128} = 1 - \\frac{1}{128} = \\frac{127}{128}.$$\nSince $\\gcd(127, 128) = 1$, the fraction $\\frac{127}{128}$ is in simplest form, so its numerator is $127$.',
          rubric: [
            { code: 'M2', text: 'Evaluates the geometric sum as $1 - \\frac{1}{128} = \\frac{127}{128}$.' },
            { code: 'A2', text: 'Extracts the numerator $127$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            "The following bar chart shows Nicki's usage time of her phone in four months. The percentage decrease in the amount of usage time remains the same every following month. Find Nicki's total number of usage time, in hours, during these four months. Round off your answer to the nearest whole number.",
          figures: [
            {
              src: '/papers/sasmo-2019-g6/fig-18.webp',
              alt: 'Bar chart of monthly phone usage hours from September to December, with September labeled 300, October labeled 240, and progressively shorter unlabeled bars for November and December.',
              caption: 'Monthly phone usage bar chart for Question 18.'
            }
          ],
          answer: '$886$',
          principle:
            'Find the constant monthly percentage decrease from September to October, apply it to find November and December, then sum and round.',
          solution:
            'From September ($300$ hours) to October ($240$ hours), the percentage decrease is:\n$$\\frac{300 - 240}{300} \\times 100\\% = \\frac{60}{300} \\times 100\\% = 20\\%.$$\nThus each month is $100\\% - 20\\% = 80\\%$ (or $0.8$) of the previous month:\n- **September:** $300$ hours\n- **October:** $240$ hours\n- **November:** $240 \\times 0.8 = 192$ hours\n- **December:** $192 \\times 0.8 = 153.6$ hours\n\nTotal usage time over the four months:\n$$300 + 240 + 192 + 153.6 = 885.6\\text{ hours}.$$\nRounded to the nearest whole number, the total is $886$.',
          rubric: [
            { code: 'M2', text: 'Finds the $20\\%$ monthly decrease and computes November ($192$) and December ($153.6$).' },
            { code: 'A2', text: 'Sums to $885.6$ and rounds to $886$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'What is the missing number in the sequence below?\n$$131,\\ 228,\\ 331,\\ 430,\\ 531,\\ 630,\\ 731,\\ ?,\\ 930$$',
          answer: '$831$',
          principle:
            'Read the first digit as the month number ($1$ to $9$) and the last two digits as the number of days in that month in an ordinary (non-leap) year.',
          solution:
            'Each term pairs the month number $m$ with the number of days in month $m$ of an ordinary year:\n- $131$: Month $1$ (January) has $31$ days\n- $228$: Month $2$ (February) has $28$ days\n- $331$: Month $3$ (March) has $31$ days\n- $430$: Month $4$ (April) has $30$ days\n- $531$: Month $5$ (May) has $31$ days\n- $630$: Month $6$ (June) has $30$ days\n- $731$: Month $7$ (July) has $31$ days\n- $930$: Month $9$ (September) has $30$ days\n\nSince Month $8$ (August) has $31$ days, the missing number is $831$.',
          rubric: [
            { code: 'M2', text: 'Recognizes the pattern as month number followed by days in that month ($228$ for February, etc.).' },
            { code: 'A2', text: 'Determines August ($8$) has $31$ days, giving $831$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            "Andrew, Barry, Cassie and Drake bought some candies from a grocery shop. The number of candies Andrew bought is equal to $\\frac{1}{3}$ of the total number of candies of Barry, Cassie and Drake. Barry's number of candies is equal to $25\\%$ of the total number of candies of Andrew, Cassie and Drake. The ratio of Cassie's candies to the total number of candies of the other three is $2:5$. Drake bought $3$ candies less than Cassie. How many candies did four of them buy altogether?",
          answer: '$140$ candies',
          principle:
            'Convert each part-to-rest ratio into a part-to-total fraction, scale to a common total ($\\text{lcm}(4, 5, 7) = 140$ units), and compare Cassie and Drake.',
          solution:
            'Let $A, B, C, D$ be the numbers of candies bought by Andrew, Barry, Cassie, and Drake, and let $T = A + B + C + D$.\n- $A = \\frac{1}{3}(B + C + D) \\implies A : (B + C + D) = 1 : 3$, so $A = \\frac{1}{4}T$.\n- $B = 25\\%(A + C + D) = \\frac{1}{4}(A + C + D) \\implies B : (A + C + D) = 1 : 4$, so $B = \\frac{1}{5}T$.\n- $C : (A + B + D) = 2 : 5$, so $C = \\frac{2}{7}T$.\n\nUsing the common denominator $\\text{lcm}(4, 5, 7) = 140$, let $T = 140$ units:\n- $A = \\frac{1}{4} \\times 140 = 35$ units\n- $B = \\frac{1}{5} \\times 140 = 28$ units\n- $C = \\frac{2}{7} \\times 140 = 40$ units\n- $D = 140 - 35 - 28 - 40 = 37$ units\n\nSince Drake bought $3$ candies less than Cassie:\n$$40\\text{ units} - 37\\text{ units} = 3\\text{ units} = 3\\text{ candies} \\implies 1\\text{ unit} = 1\\text{ candy}.$$\nTherefore, the four of them bought $140$ candies altogether.',
          rubric: [
            { code: 'M2', text: 'Expresses shares out of $140$ total units ($A=35, B=28, C=40, D=37$) and equates $C - D = 3$ units to $3$.' },
            { code: 'A2', text: 'Finds the total $140$ candies.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'Tom selected $30$ different whole numbers such that the product of any $11$ numbers is always even. The sum of the $30$ numbers is an odd number. Find the least possible sum of these numbers.',
          answer: '$543$',
          principle:
            'For every product of $11$ chosen numbers to be even, there can be at most $10$ odd numbers; for the total sum to be odd, the count of odd numbers must be odd ($\\le 9$).',
          solution:
            'First, note that in SASMO whole numbers here are the positive integers $1, 2, 3, \\ldots$ (if $0$ were included, $0$ is even, which we check below; note the official SASMO convention uses positive whole numbers starting from $1$).\n- If there were $11$ or more odd numbers among the $30$ numbers, choosing $11$ of them would give an odd product. Hence there are at most $10$ odd numbers.\n- Because the sum of the $30$ numbers is odd, the number of odd numbers in the selection must be odd. Thus there are at most $9$ odd numbers (and at least $21$ even numbers).\n\nTo minimize the sum of $30$ distinct positive whole numbers with at most $9$ odd numbers, pick the $9$ smallest odd numbers ($1, 3, 5, \\ldots, 17$) and the $21$ smallest even numbers ($2, 4, 6, \\ldots, 42$):\n- Sum of the $9$ odd numbers: $1 + 3 + \\cdots + 17 = 9^2 = 81$.\n- Sum of the $21$ even numbers: $2 + 4 + \\cdots + 42 = 2(1 + 2 + \\cdots + 21) = 2 \\times \\frac{21 \\times 22}{2} = 462$.\n\nTherefore, the least possible sum is:\n$$81 + 462 = 543.$$',
          rubric: [
            { code: 'M2', text: 'Proves at most $9$ odd numbers can be chosen (at most $10$ for even $11$-products, and an odd count for an odd sum).' },
            { code: 'A2', text: 'Sums the $9$ smallest odds ($81$) and $21$ smallest evens ($462$) to obtain $543$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'The diagram below shows triangular tracks $ABC$ and $ABD$ from above. Triangles $ABC$ and $ABD$ are equilateral, and the perimeter of the triangular track $ABC$ is $168$ metres. Matt runs around the track in the direction $A \\to B \\to C \\to A$ at $3\\text{ m/s}$ (metres per second). Jack runs around the track in the direction $A \\to B \\to D \\to A$ at $7\\text{ m/s}$. If Matt and Jack start running from point $A$ at the same time, how many seconds later will they meet each other for the first time at point $A$?',
          figures: [
            {
              src: '/papers/sasmo-2019-g6/fig-22.webp',
              alt: 'Two equilateral triangles ABC and ABD sharing side AB, with vertex C to the left and vertex D to the right.',
              caption: 'Triangular tracks ABC and ABD for Question 22.'
            }
          ],
          answer: '$168$ seconds',
          principle:
            'Find the lap time of each runner around their equilateral triangle of perimeter $168\\text{ m}$, then take the least common multiple (LCM) of their lap times.',
          solution:
            'Because $\\triangle ABC$ and $\\triangle ABD$ are equilateral and share side $AB$, both tracks have the same perimeter of $168\\text{ m}$.\n- **Matt’s lap time:** $168 \\div 3 = 56\\text{ seconds}$, so Matt returns to $A$ at $56, 112, 168, \\ldots$ seconds.\n- **Jack’s lap time:** $168 \\div 7 = 24\\text{ seconds}$, so Jack returns to $A$ at $24, 48, 72, 96, 120, 144, 168, \\ldots$ seconds.\n\nThe first time both are back at point $A$ simultaneously is:\n$$\\text{lcm}(56, 24) = 168\\text{ seconds}.$$',
          rubric: [
            { code: 'M2', text: 'Computes lap times $56\\text{ s}$ (Matt) and $24\\text{ s}$ (Jack) and takes their LCM.' },
            { code: 'A2', text: 'Obtains $168$ seconds.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'In the diagram, $ABCD$ and $DEFG$ are squares with $AB = 9\\text{ cm}$ and $DE = 5\\text{ cm}$. If $\\angle CDG = 90^\\circ$, find the area (in $\\text{cm}^2$) of the shaded quadrilateral.',
          figures: [
            {
              src: '/papers/sasmo-2019-g6/fig-23.webp',
              alt: 'Square ABCD of side 9 cm adjacent to smaller square DEFG of side 5 cm along a shared vertical line CDE, with segments BE and CF forming a shaded quadrilateral.',
              caption: 'Squares ABCD and DEFG with shaded quadrilateral for Question 23.'
            }
          ],
          answer: '$45\\text{ cm}^2$',
          principle:
            'Express the shaded quadrilateral $CHEI$ by adding $\\triangle CEF$ and $\\triangle ECB$ and subtracting the unshaded triangles $\\triangle IEF$ and $\\triangle HCB$ along line $AG$.',
          solution:
            'Let $H$ be the intersection of $BE$ and $AG$, and let $I$ be the intersection of $CF$ and $AG$. Note that $C, D, E$ are collinear with $CE = CD + DE = 9 + 5 = 14\\text{ cm}$, and both $BC \\perp CE$ and $EF \\perp CE$.\nCompute the areas of the four right triangles:\n- $\\text{Area}(\\triangle CEF) = \\frac{1}{2} \\times CE \\times EF = \\frac{1}{2} \\times 14 \\times 5 = 35\\text{ cm}^2$.\n- $\\text{Area}(\\triangle ECB) = \\frac{1}{2} \\times CE \\times BC = \\frac{1}{2} \\times 14 \\times 9 = 63\\text{ cm}^2$.\n- $\\text{Area}(\\triangle IEF)$: Since $IG$ is parallel to $EF$, triangle $\\triangle IEF$ has base $EF = 5\\text{ cm}$ and height $DE = 5\\text{ cm}$, so $\\text{Area}(\\triangle IEF) = \\frac{1}{2} \\times 5 \\times 5 = \\frac{25}{2}\\text{ cm}^2$.\n- $\\text{Area}(\\triangle HCB)$: Similarly, $\\triangle HCB$ has base $BC = 9\\text{ cm}$ and height $CD = 9\\text{ cm}$, so $\\text{Area}(\\triangle HCB) = \\frac{1}{2} \\times 9 \\times 9 = \\frac{81}{2}\\text{ cm}^2$.\n\nNotice that $\\triangle CEF$ and $\\triangle ECB$ cover the shaded quadrilateral $CHEI$ plus $\\triangle IEF$ and $\\triangle HCB$. Therefore:\n$$\\text{Area}(CHEI) = 35 + 63 - \\frac{25}{2} - \\frac{81}{2} = 98 - \\frac{106}{2} = 98 - 53 = 45\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Computes $\\text{Area}(\\triangle CEF)=35$, $\\text{Area}(\\triangle ECB)=63$, $\\text{Area}(\\triangle IEF)=\\frac{25}{2}$, and $\\text{Area}(\\triangle HCB)=\\frac{81}{2}$.' },
            { code: 'A2', text: 'Subtracts to get $45\\text{ cm}^2$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'In the following cryptarithm, all the different letters stand for different digits. What is the value of the sum $O + D + A + G$?\n$$\\begin{array}{r} G\\,O\\,O\\,D \\\\ +\\;\\; D\\,O\\,G \\\\ \\hline D\\,G\\,D\\,A \\end{array}$$',
          answer: '$24$',
          principle:
            'Analyze the thousands and hundreds columns first to constrain $D = G + 1$ and $O \\in \\{8, 9\\}$, then test carries into the tens and ones columns.',
          solution:
            '1. **Thousands column:** Adding a $3$-digit number to $G O O D$ changes the thousands digit from $G$ to $D$, so there is a carry of $1$ into the thousands place and $D = G + 1$.\n2. **Hundreds column:** We have $O + D$ (plus a possible carry of $1$ from the tens place) equal to $10 + G$. Since $D = G + 1$, this gives $O + G + 1 (+1) = 10 + G$, so $O + 1 (+1) = 10$, meaning $O \\in \\{8, 9\\}$.\n3. **Case $O = 9$:** In the tens column, $O + O + c_1 = 18 + c_1$ ends in $D$ (where $c_1 \\in \\{0, 1\\}$ is the carry from the ones column). If $c_1 = 1$, then $D = 9 = O$, which is invalid since distinct letters represent distinct digits. If $c_1 = 0$, then $D = 8$ and $G = 7$, which forces the ones column $D + G = 8 + 7 = 15$ to produce $c_1 = 1$, a contradiction.\n4. **Case $O = 8$:** For the hundreds column to carry $1$ and yield $G$, there must be a carry of $1$ from the tens column ($O + O + c_1 = 16 + c_1 \\ge 10$) and $8 + (G + 1) + 1 = 10 + G$, which holds automatically. In the tens column, $16 + c_1$ has units digit $D$, so $D = 6$ (if $c_1 = 0$) or $D = 7$ (if $c_1 = 1$). Since $G = D - 1$, $D + G \\ge 6 + 5 = 11 \\ge 10$, so the ones column definitely produces carry $c_1 = 1$. Thus $D = 7$, $G = 6$, and $A = (7 + 6) - 10 = 3$.\n\nCheck: $6887 + 786 = 7673$, with distinct digits $G = 6, O = 8, D = 7, A = 3$.\nTherefore:\n$$O + D + A + G = 8 + 7 + 3 + 6 = 24.$$',
          rubric: [
            { code: 'M2', text: 'Deduces $D = G + 1$, $O \\in \\{8, 9\\}$, eliminates $O = 9$, and solves $O = 8, D = 7, G = 6, A = 3$.' },
            { code: 'A2', text: 'Computes $O + D + A + G = 24$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'January $23$, $2019$ can be written as $8$-digit date format $23/01/2019$. September $2$, $2019$ can be written as $8$-digit date format $02/09/2019$. How many digit "$1$" are there in all $8$-digit dates of the year $2019$?\n*(For example, the date $25/01/2019$ consists of two "$1$" digits.)*',
          answer: '$681$',
          principle:
            'Count occurrences of the digit $1$ separately across the year part ($2019$), the month part ($01$–$12$), and the day part ($01$–$28/30/31$).',
          solution:
            'Count the digit "$1$" in each part of `DD/MM/2019` across all $365$ days of $2019$ (a non-leap year):\n1. **Year part (`2019`):** Every date has one "$1$", giving $365$ occurrences.\n2. **Month part (`MM`):**\n   - January (`01`, $31$ days): $31 \\times 1 = 31$.\n   - October (`10`, $31$ days): $31 \\times 1 = 31$.\n   - November (`11`, $30$ days): $30 \\times 2 = 60$.\n   - December (`12`, $31$ days): $31 \\times 1 = 31$.\n   - Subtotal for months $= 31 + 31 + 60 + 31 = 153$.\n3. **Day part (`DD`):**\n   - Days $1$–$28$ contain "$1$" in `01, 10, 11, 12, ..., 19, 21`, which is $1 + 1 + 2 + 8 + 1 = 13$ occurrences per month.\n   - Days $29$–$30$ contain zero "$1$"s.\n   - Day `31` adds one "$1$" in each of the $7$ thirty-one-day months.\n   - Across all $12$ months, the day-part count is $12 \\times 13 + 7 = 156 + 7 = 163$.\n\nTotal number of "$1$" digits:\n$$365 + 153 + 163 = 681.$$',
          rubric: [
            { code: 'M2', text: 'Separates counts for year ($365$), month ($31+31+60+31=153$), and day ($12 \\times 13 + 7 = 163$).' },
            { code: 'A2', text: 'Sums to $681$.' }
          ]
        }
      ]
    }
  ]
};
