/**
 * Paket Soal: SASMO 2019 Grade 8 (Secondary 2)
 * Sumber: Singapore and Asian Schools Math Olympiad 2019, Secondary 2 / Grade 8 Contest (2019-SASMO-G8.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 9, 14, 15, 16, 17, dan 23 dilengkapi diagram (.webp).
 */
export default {
  id: 'sasmo-2019-g8',
  slug: 'sasmo-2019-grade-8',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'SASMO 2019 Grade 8 (Secondary 2): arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'smp8-bab1-bilangan-berpangkat',
    'smp8-bab3-persamaan-pertidaksamaan-linear',
    'smp8-bab4-relasi-fungsi',
    'smp8-bab6-statistika'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2019 Grade 8 (Secondary 2)',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Diagrams for Questions 9, 14, 15, 16, 17, and 23 are provided as figures.',
  source: {
    org: 'SASMO',
    file: '2019-SASMO-G8.pdf',
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
            'In Mathematics, the product of the first $n$ positive integers is written as $n! = n \\times (n - 1) \\times \\cdots \\times 1$. For example, $2! = 2 \\times 1$ and $7! = 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1$. Evaluate:\n$$9 + (8 + 7) \\times (6! \\div 5 - 4 - 3 - 2 - 1)$$\n\nA. $955$\nB. $2019$\nC. $2034$\nD. $3216$\nE. None of the above',
          answer: 'B. $2019$',
          principle:
            'Follow the order of operations: evaluate $6! \\div 5$ inside the parentheses first, then simplify both parenthetical expressions before multiplying and adding.',
          solution:
            'Compute $6! \\div 5$:\n$$6! \\div 5 = (6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1) \\div 5 = 6 \\times 4 \\times 3 \\times 2 \\times 1 = 144.$$\nSubtract the remaining numbers in the second parenthesis:\n$$6! \\div 5 - 4 - 3 - 2 - 1 = 144 - 10 = 134.$$\nFinally, evaluate the full expression:\n$$9 + (8 + 7) \\times 134 = 9 + 15 \\times 134 = 9 + 2010 = 2019.$$',
          rubric: [
            { code: 'M1', text: 'Computes $6! \\div 5 = 144$ and simplifies the second bracket to $134$.' },
            { code: 'A1', text: 'Evaluates $9 + 15 \\times 134 = 2019$, option B.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Which of the following is correct?\n\nA. $(a + b)^3 = a^3 + b^3$\nB. $-10^2 = 100$\nC. $\\sqrt{x^2 + 9y^2} = x + 3y$\nD. $\\dfrac{x}{x + y} = \\dfrac{x}{x} + \\dfrac{x}{y}$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Check standard algebraic identities and order of operations carefully; powers and roots do not distribute across addition, and a denominator cannot be split.',
          solution:
            'Test each statement:\n- **A is false:** $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 \\neq a^3 + b^3$ (for example, when $a = b = 1$, $(1+1)^3 = 8 \\neq 1^3 + 1^3 = 2$).\n- **B is false:** By order of operations, exponentiation precedes negation, so $-10^2 = -(10^2) = -100 \\neq 100$.\n- **C is false:** $(x + 3y)^2 = x^2 + 6xy + 9y^2 \\neq x^2 + 9y^2$ in general (for example, when $x = 1, y = 1$, $\\sqrt{10} \\neq 4$).\n- **D is false:** $\\frac{x}{x} + \\frac{x}{y} = 1 + \\frac{x}{y} = \\frac{x + y}{y} \\neq \\frac{x}{x + y}$ (for example, when $x = y = 1$, $\\frac{1}{2} \\neq 2$).\n\nSince A, B, C, and D are all incorrect, the answer is **E. None of the above**.',
          rubric: [
            { code: 'M1', text: 'Identifies the algebraic or order-of-operations flaw in options A through D.' },
            { code: 'A1', text: 'Selects option E (None of the above).' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'The highest common factor (HCF) of two positive integers is $3$. If the sum of the two integers is $21$, which could NOT be their least common multiple (LCM)?\n\nA. $18$\nB. $30$\nC. $36$\nD. $7$\nE. None of the above',
          answer: 'D. $7$',
          principle:
            'Write the two integers as $3a$ and $3b$ with $\\gcd(a, b) = 1$, or note that the LCM must always be a multiple of the HCF.',
          solution:
            'Let the two positive integers be $3a$ and $3b$, where $a$ and $b$ are coprime positive integers. Their sum is:\n$$3a + 3b = 21 \\implies a + b = 7.$$\nSince $a$ and $b$ are positive and coprime, the possible unordered pairs $(a, b)$ are $(1, 6)$, $(2, 5)$, and $(3, 4)$, corresponding to the integer pairs:\n- $(3, 18)$ with $\\text{LCM}(3, 18) = 18$,\n- $(6, 15)$ with $\\text{LCM}(6, 15) = 30$,\n- $(9, 12)$ with $\\text{LCM}(9, 12) = 36$.\n\n(Moreover, the LCM of two integers is always divisible by their HCF $3$, whereas $7$ is not divisible by $3$.) Thus $7$ cannot be their LCM.',
          rubric: [
            { code: 'M1', text: 'Finds the valid pairs $(3, 18)$, $(6, 15)$, $(9, 12)$ and their LCMs (or notes LCM must be divisible by $3$).' },
            { code: 'A1', text: 'Identifies $7$, option D.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'If the five-digit number $\\overline{5D68D}$ is divisible by $36$, find the value of $D$.\n\nA. $0$\nB. $2$\nC. $4$\nD. $8$\nE. None of the above',
          answer: 'C. $4$',
          principle:
            'Since $36 = 4 \\times 9$ and $\\gcd(4, 9) = 1$, a number is divisible by $36$ if and only if it is divisible by both $4$ and $9$.',
          solution:
            '1. **Divisibility by $4$:** The two-digit number formed by the last two digits, $\\overline{8D}$, must be divisible by $4$. For a single digit $D$, this requires:\n$$D \\in \\{0, 4, 8\\}.$$\n2. **Divisibility by $9$:** The sum of the digits must be divisible by $9$:\n$$5 + D + 6 + 8 + D = 19 + 2D.$$\nTesting the candidates:\n- $D = 0$: $19 + 0 = 19$ (not divisible by $9$),\n- $D = 4$: $19 + 8 = 27$ (divisible by $9$),\n- $D = 8$: $19 + 16 = 35$ (not divisible by $9$).\n\nHence $D = 4$ (and indeed $54684 = 36 \\times 1519$).',
          rubric: [
            { code: 'M1', text: 'Applies divisibility by $4$ ($D \\in \\{0, 4, 8\\}$) and divisibility by $9$ ($9 \\mid 19 + 2D$).' },
            { code: 'A1', text: 'Determines $D = 4$, option C.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'If $X = 0.0000125$ and $Y = 0.00008$, which of the following has the greatest value?\n\nA. $X + Y$\nB. $X - Y$\nC. $X \\times Y$\nD. $X \\div Y$\nE. None of the above',
          answer: 'D. $X \\div Y$',
          principle:
            'Compare the magnitudes directly: adding two tiny positive decimals remains tiny, subtracting gives a negative value, multiplying makes the result even smaller, while dividing numbers of similar scale produces a ratio near $1$.',
          solution:
            'Evaluate or compare each option:\n- $X + Y = 0.0000125 + 0.00008 = 0.0000925$.\n- $X - Y = 0.0000125 - 0.00008 = -0.0000675 < 0$.\n- $X \\times Y = 0.0000125 \\times 0.00008 = 10^{-9} < X + Y$.\n- $X \\div Y = \\dfrac{0.0000125}{0.00008} = \\dfrac{12.5}{80} = \\dfrac{125}{800} = \\dfrac{5}{32} = 0.15625$.\n\nClearly $0.15625$ is the greatest value, so **D. $X \\div Y$** is largest.',
          rubric: [
            { code: 'M1', text: 'Compares $X + Y = 0.0000925$ against $X \\div Y = \\frac{125}{800} = 0.15625$ (and eliminates $X - Y < 0$ and $X \\times Y$).' },
            { code: 'A1', text: 'Selects $X \\div Y$, option D.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'The price of an ice cream cone in a shop has increased by $20\\%$. How many ice cream cones can now be bought using the amount of money that used to buy the same $60$ ice cream cones?\n\nA. $50$\nB. $48$\nC. $40$\nD. $56$\nE. None of the above',
          answer: 'A. $50$',
          principle:
            'For a fixed total budget, the quantity purchased is inversely proportional to the unit price.',
          solution:
            'Let the original price of one ice cream cone be $P$. The fixed amount of money is $60P$.\nAfter a $20\\%$ increase, the new price is $P_{\\text{new}} = 1.2P = \\frac{6}{5}P$.\nThe number of cones that can now be bought is:\n$$\\frac{60P}{1.2P} = \\frac{60}{1.2} = 50.$$',
          rubric: [
            { code: 'M1', text: 'Sets up total budget $60P$ divided by the new price $1.2P$.' },
            { code: 'A1', text: 'Computes $50$ cones, option A.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'The following calculations lead to the conclusion that $\\pi > 2019$.\n$$\\begin{aligned}\n\\text{Let } x = \\pi \\,(3.14159\\ldots),\\; y = 3 \\text{ and } z = 2019 &\\qquad (1) \\\\\n-x \\le -y \\text{ and } z - y > 0 &\\qquad (2) \\\\\nx \\ge y \\text{ and } z > y &\\qquad (3) \\\\\n\\text{Then } x \\ge z &\\qquad (4) \\\\\n\\text{Therefore, } \\pi > 2019 &\\qquad (5)\n\\end{aligned}$$\nWhich of the following transition steps is the first that contains an error?\n\nA. (1) to (2)\nB. (2) to (3)\nC. (3) to (4)\nD. (4) to (5)\nE. None of the above',
          answer: 'C. (3) to (4)',
          principle:
            'Check the logical validity of each implication; knowing two numbers are both greater than a third number gives no ordering between those two numbers.',
          solution:
            'Check each transition in order:\n- **(1) to (2):** Valid, since $\\pi > 3 \\implies -\\pi \\le -3$ and $2019 - 3 = 2016 > 0$.\n- **(2) to (3):** Valid, obtained by multiplying $-x \\le -y$ by $-1$ (reversing the inequality sign) and adding $y$ to both sides of $z - y > 0$.\n- **(3) to (4):** **Invalid.** Knowing $x \\ge y$ and $z > y$ only says both $x$ and $z$ are at least $y$; it does not imply $x \\ge z$ (for example, $3.14159\\ldots \\ge 3$ and $2019 > 3$, yet $3.14159\\ldots < 2019$).\n\nTherefore, the first error occurs in **(3) to (4)**.',
          rubric: [
            { code: 'M1', text: 'Verifies transitions (1)$\\to$(2) and (2)$\\to$(3) are valid and identifies that $x \\ge y, z > y$ does not imply $x \\ge z$.' },
            { code: 'A1', text: 'Selects (3) to (4), option C.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'Consider all the integers from $1$ to $200$. Which of the following is NOT true about them?\n\nA. The sum of all even numbers is greater than the sum of all odd numbers.\nB. Writing all the digits, the digit $0$ is the least occurring digit.\nC. The average of the even numbers is greater than the average of the odd numbers.\nD. $(\\text{Sum of all even numbers}) - (\\text{Sum of all odd numbers}) = 200$\nE. The average of the $200$ numbers is not a positive integer.',
          answer: 'D. $(\\text{Sum of all even numbers}) - (\\text{Sum of all odd numbers}) = 200$',
          principle:
            'Pair each even integer $2k$ with the preceding odd integer $2k - 1$ for $k = 1, 2, \\ldots, 100$: each pair contributes a difference of $1$.',
          solution:
            'Pair the $100$ even integers and $100$ odd integers:\n$$(\\text{Sum of evens}) - (\\text{Sum of odds}) = (2 - 1) + (4 - 3) + \\cdots + (200 - 199) = 100 \\times 1 = 100.$$\nChecking all five statements:\n- **A is true:** $10100 > 10000$.\n- **B is true:** Digit $0$ never appears in the tens/hundreds leading positions and appears $31$ times in total, whereas digits $1$–$9$ each appear at least $40$ times ($40$ times for $3$–$9$, $41$ for $2$, $140$ for $1$).\n- **C is true:** The average of the $100$ even integers is $\\frac{2 + 200}{2} = 101$, while the average of the $100$ odd integers is $\\frac{1 + 199}{2} = 100$.\n- **D is false:** The difference is $100$, not $200$.\n- **E is true:** The average of $1$ to $200$ is $\\frac{1 + 200}{2} = 100.5$, which is not an integer.',
          rubric: [
            { code: 'M1', text: 'Computes $(\\text{Sum of evens}) - (\\text{Sum of odds}) = 100 \\times 1 = 100$.' },
            { code: 'A1', text: 'Identifies statement D as NOT true.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt: 'Which cube below will be formed when the net on the right is folded?',
          figures: [
            {
              src: '/papers/sasmo-2019-g8/fig-9.webp',
              alt: 'Unfolded six-square cube net at top right with patterns of diagonals, crossed diagonals, a 2x2 grid, a grey square, and a white square, above five candidate 3D cube views labeled A, B, C, D, and E.',
              caption: 'Cube net and five candidate cubes A–E for Question 9.'
            }
          ],
          answer: 'B',
          principle:
            'Track which faces are opposite in the net (separated by one square in a straight strip) and check the orientation of each pattern around a shared vertex.',
          solution:
            'In the net, let the three vertical faces in the left column be Top (diagonal rising right), Front (diagonal falling right), and Bottom ($2 \\times 2$ grid). Folding the three horizontal faces to the right places: Right (grey small square), Back (crossed diagonals), and Left (white small square).\nCheck each option:\n- **A:** Invalid; when viewing the $2 \\times 2$ grid on the front, the face with the white square is on top, placing the rising diagonal on the right rather than the left.\n- **B:** Valid; placing the crossed-diagonals face on top and rotating so the $2 \\times 2$ grid is on the left puts the white small square on the front right, matching the net.\n- **C:** Invalid; the $2 \\times 2$ grid, falling diagonal, and crossed diagonals do not share a common corner in the shown configuration (the falling diagonal does not meet that corner of the grid/cross).\n- **D:** Invalid; the grey small square and white small square are opposite faces in the net, so they cannot be adjacent.\n- **E:** Invalid; the two faces with single diagonals are opposite each other in the net, so they cannot share an edge.\n\nTherefore, only cube **B** can be formed.',
          rubric: [
            { code: 'M1', text: 'Eliminates A, C, D, and E using opposite-face pairs and edge/vertex orientations.' },
            { code: 'A1', text: 'Concludes cube B can be formed.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'How many consecutive zeros are there in the end of $2^{11} \\times 3^7 \\times 5^5 \\times 7^3 \\times 11^2$?\n\nA. $11$\nB. $16$\nC. $6$\nD. $5$\nE. None of the above',
          answer: 'D. $5$',
          principle:
            'Each trailing zero comes from one factor of $10 = 2 \\times 5$, so the number of trailing zeros equals $\\min(\\text{exponent of } 2, \\text{exponent of } 5)$.',
          solution:
            'A trailing zero is produced by each pair $2 \\times 5 = 10$. In the prime factorisation:\n$$2^{11} \\times 3^7 \\times 5^5 \\times 7^3 \\times 11^2 = (2 \\times 5)^5 \\times 2^6 \\times 3^7 \\times 7^3 \\times 11^2 = 10^5 \\times (2^6 \\times 3^7 \\times 7^3 \\times 11^2).$$\nSince the remaining factor $2^6 \\times 3^7 \\times 7^3 \\times 11^2$ is not divisible by $5$ (and hence not by $10$), there are exactly $\\min(11, 5) = 5$ consecutive trailing zeros.',
          rubric: [
            { code: 'M1', text: 'Pairs $2$ and $5$ factors to extract $10^5$.' },
            { code: 'A1', text: 'Obtains $5$ trailing zeros, option D.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'The sum of the speeds of two cyclists is $34\\text{ km/h}$. If the first cyclist cycles for $3$ hours and the second cyclist cycles for $7$ hours, then the total distance they travel will be $150\\text{ km}$. Assuming both cyclists cycle at a constant rate, what is the difference between their speeds?\n\nA. $12\\text{ km/h}$\nB. $11\\text{ km/h}$\nC. $10\\text{ km/h}$\nD. $9\\text{ km/h}$\nE. $8\\text{ km/h}$',
          answer: 'C. $10\\text{ km/h}$',
          principle:
            'Set up two linear equations in the speeds $a$ and $b$ using $\\text{distance} = \\text{speed} \\times \\text{time}$ and solve simultaneously.',
          solution:
            'Let the speeds of the first and second cyclists be $a\\text{ km/h}$ and $b\\text{ km/h}$. From the given conditions:\n$$a + b = 34 \\qquad (1)$$\n$$3a + 7b = 150 \\qquad (2)$$\nMultiply $(1)$ by $3$ to get $3a + 3b = 102$, and subtract from $(2)$:\n$$(3a + 7b) - (3a + 3b) = 150 - 102 \\implies 4b = 48 \\implies b = 12.$$\nSubstituting back into $(1)$ gives $a = 34 - 12 = 22$.\nTherefore, the difference between their speeds is:\n$$22 - 12 = 10\\text{ km/h}.$$',
          rubric: [
            { code: 'M1', text: 'Sets up $a + b = 34$ and $3a + 7b = 150$ and solves for $a = 22, b = 12$.' },
            { code: 'A1', text: 'Computes speed difference $10\\text{ km/h}$, option C.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'Find the value of\n$$\\left[\\sqrt{1 + 2 + 3 + \\cdots + 100}\\right],$$\nwhere $[x]$ is the greatest integer less than or equal to $x$. For example, $[13.54] = 13$.\n\nA. $69$\nB. $70$\nC. $71$\nD. $72$\nE. None of the above',
          answer: 'C. $71$',
          principle:
            'Compute the sum inside the square root using the triangular-number formula, then sandwich it between two consecutive perfect squares.',
          solution:
            'First compute the sum of the first $100$ positive integers:\n$$1 + 2 + 3 + \\cdots + 100 = \\frac{100 \\times 101}{2} = 5050.$$\nCompare $5050$ with nearby squares:\n$$71^2 = 5041 < 5050 < 5184 = 72^2.$$\nTaking square roots gives $71 < \\sqrt{5050} < 72$, so:\n$$\\left[\\sqrt{1 + 2 + 3 + \\cdots + 100}\\right] = 71.$$',
          rubric: [
            { code: 'M1', text: 'Evaluates $1 + 2 + \\cdots + 100 = 5050$ and bounds $71^2 = 5041 < 5050 < 72^2 = 5184$.' },
            { code: 'A1', text: 'Obtains $71$, option C.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Which of the following fractions is the largest?\n\nA. $\\dfrac{60}{119}$\nB. $\\dfrac{64}{127}$\nC. $\\dfrac{62}{123}$\nD. $\\dfrac{63}{125}$\nE. $\\dfrac{61}{121}$',
          answer: 'A. $\\dfrac{60}{119}$',
          principle:
            'Each fraction has the form $\\frac{n}{2n - 1}$; compare how far each exceeds $\\frac{1}{2}$ (or compare their reciprocals $2 - \\frac{1}{n}$).',
          solution:
            'Every option has the form $\\frac{n}{2n - 1}$ for $n \\in \\{60, 61, 62, 63, 64\\}$. Rewrite each fraction relative to $\\frac{1}{2}$:\n$$\\frac{n}{2n - 1} = \\frac{1}{2} + \\frac{1}{2(2n - 1)}$$\n(or take reciprocals: $\\frac{2n - 1}{n} = 2 - \\frac{1}{n}$, which is smallest when $n$ is smallest).\nSince $\\frac{1}{2(2n - 1)}$ decreases as $n$ increases, the largest fraction corresponds to the smallest $n$, namely $n = 60$:\n$$\\frac{60}{119} > \\frac{61}{121} > \\frac{62}{123} > \\frac{63}{125} > \\frac{64}{127}.$$',
          rubric: [
            { code: 'M1', text: 'Expresses $\\frac{n}{2n-1} = \\frac{1}{2} + \\frac{1}{2(2n-1)}$ (or compares reciprocals $2 - \\frac{1}{n}$).' },
            { code: 'A1', text: 'Identifies $\\frac{60}{119}$ as largest, option A.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'A leader asked his $6$ followers what is inside the gift box he saw. These $6$ followers are sitting around a table. Two of them are truth-tellers and they are sitting next to each other. Two followers are liars and they are sitting next to each other as well. Each of the remaining two followers is either a truth-teller or liar, and they are not sitting next to each other. The responses of the followers are shown in the picture below.\n\nWhat is inside the gift box?\n\nA. Camera\nB. Laptop\nC. Wallet\nD. Watch\nE. Insufficient data',
          figures: [
            {
              src: '/papers/sasmo-2019-g8/fig-14.webp',
              alt: 'Circular seating diagram of six followers around a table with four speech bubbles displaying candidate gift items and two followers without speech bubbles.',
              caption: 'Seating arrangement and responses of the six followers for Question 14.'
            }
          ],
          answer: 'D. Watch',
          principle:
            'Two adjacent truth-tellers must give the exact same answer; use the seating constraints (two adjacent truth-tellers, two adjacent liars, and two non-adjacent remaining seats) to test the possible locations of the adjacent truth-tellers.',
          solution:
            'Label the $6$ seats clockwise starting from top-left: $1$ ("Laptop"), $2$ ("Wallet"), $3$ (blank), $4$ ("Camera"), $5$ (blank), $6$ ("Watch"), and note seat $7$? Look at the $6$ seats around the table in clockwise order from top-left:\n- Top-left: "Laptop"\n- Top-right: "Wallet"\n- Right: "Camera"\n- Bottom-right: no speech bubble\n- Bottom-left: "Watch"\n- Left: "Camera"\n\nBecause the two known truth-tellers sit next to each other and must both report the true contents of the gift box, neither can be in a pair of adjacent seats with two different visible answers. The only adjacent seats that can give the same answer are those involving the two silent/unspecified seats—namely (Right "Camera", Bottom-right) or (Bottom-right, Bottom-left "Watch"):\n- **Case 1: Right ("Camera") and Bottom-right are the adjacent truth-tellers** (so the gift is a Camera). Then Left ("Camera") is also a truth-teller, leaving three liars: Top-left ("Laptop"), Top-right ("Wallet"), and Bottom-left ("Watch"). However, Top-left and Top-right are adjacent liars, leaving Left (truth-teller) and Bottom-left (liar) as the remaining two—and they are **adjacent**, contradicting the condition that the remaining two are not sitting next to each other.\n- **Case 2: Bottom-right and Bottom-left ("Watch") are the adjacent truth-tellers** (so the gift is a Watch). Then the other four seats are liars ("Laptop", "Wallet", Right "Camera", Left "Camera"). Here Top-left and Top-right can be the adjacent liars, while Left and Right are the remaining two liars—and they are opposite each other (not adjacent), satisfying all conditions.\n\nTherefore, **Watch** is inside the gift box.',
          rubric: [
            { code: 'M1', text: 'Identifies the two candidate adjacent truth-teller pairs involving the silent bottom-right seat and rules out Case 1 by non-adjacency.' },
            { code: 'A1', text: 'Concludes Watch is inside the gift box, option D.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'In the diagram, $ABCD$ is a square with $AB = 20\\text{ cm}$, $AD$ is a diameter of the semicircle, and $AB$ is a radius of the quadrant. Find the area (in $\\text{cm}^2$) of the shaded region.\n\nA. $75\\pi\\text{ cm}^2$\nB. $50\\pi\\text{ cm}^2$\nC. $(75\\pi - 100)\\text{ cm}^2$\nD. $(50\\pi - 100)\\text{ cm}^2$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2019-g8/fig-15.webp',
              alt: 'Square ABCD with diagonal AC, a semicircle inside the square on diameter AD, and a quarter circle centered at A with radius AB, showing two shaded regions bounded by these curves and AC.',
              caption: 'Square ABCD with semicircle and quadrant for Question 15.'
            }
          ],
          answer: 'D. $(50\\pi - 100)\\text{ cm}^2$',
          principle:
            'Use symmetry across the diagonal $AC$ (and the vertical midline of the semicircle) to move the lower shaded crescent into the upper unshaded half of the semicircle.',
          solution:
            'Let $E$ be the intersection of the semicircle (with diameter $AD = 20\\text{ cm}$) and diagonal $AC$, and let $F$ be the intersection of the quadrant (centered at $A$ with radius $AB = 20\\text{ cm}$) and diagonal $AC$.\nSince $\\angle CAD = 45^\\circ$, the chord $AE$ subtends $90^\\circ$ on the semicircle, so $AE = ED$ and the circular segments cut off by chords $AE$ and $ED$ have equal area.\nMoving the shaded segment on chord $AE$ onto the congruent unshaded segment on chord $ED$ transforms the entire shaded region into sector $FAD$ minus $\\triangle EAD$:\n- **Area of sector $FAD$:** Half of the quadrant of radius $20\\text{ cm}$:\n$$\\frac{1}{8}\\pi (20)^2 = 50\\pi\\text{ cm}^2.$$\n- **Area of $\\triangle EAD$:** Because $E$ lies at the midpoint of the semicircle on $AD$ (at $45^\\circ$ on the diagonal $AC$ of square $ABCD$), $E$ is the center of the square, at perpendicular height $10\\text{ cm}$ above $AD$. Thus $\\triangle EAD$ has base $20\\text{ cm}$ and height $10\\text{ cm}$ (one quarter of the square):\n$$\\text{Area}(\\triangle EAD) = \\frac{1}{2} \\times 20 \\times 10 = 100\\text{ cm}^2.$$\n\nTherefore, the area of the shaded region is:\n$$(50\\pi - 100)\\text{ cm}^2.$$',
          rubric: [
            { code: 'M1', text: 'Transfers the circular segment on $AE$ to $ED$ to reduce the shaded area to $\\text{Area}(\\text{sector } FAD) - \\text{Area}(\\triangle EAD)$.' },
            { code: 'A1', text: 'Computes $(50\\pi - 100)\\text{ cm}^2$, option D.' }
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
              src: '/papers/sasmo-2019-g8/fig-16.webp',
              alt: 'Symmetric grid of small equilateral triangles arranged in five horizontal rows ending in two downward tips at the bottom.',
              caption: 'Triangular grid diagram for Question 16.'
            }
          ],
          answer: '$59$',
          principle:
            'Count triangles systematically by size (the number of smallest unit triangles inside each) and orientation (pointing downward vs. pointing upward).',
          solution:
            'Classify every triangle by the number of smallest ($1$-part) unit triangles it contains:\n1. **$1$-part triangles (side $1$):**\n   - Pointing down (by row from top to bottom): $4 + 5 + 4 + 3 + 2 = 18$.\n   - Pointing up (by row from top to bottom): $3 + 4 + 3 + 2 + 0 = 12$.\n   - Total $1$-part triangles $= 18 + 12 = 30$.\n2. **$4$-part triangles (side $2$):**\n   - Pointing down: $4 + 3 + 3 + 2 = 12$.\n   - Pointing up: $3 + 2 + 1 = 6$.\n   - Total $4$-part triangles $= 12 + 6 = 18$.\n3. **$9$-part triangles (side $3$):**\n   - Pointing down: $3 + 2 + 2 = 7$.\n   - Pointing up: $1$ (centered in rows $2$–$4$).\n   - Total $9$-part triangles $= 7 + 1 = 8$.\n4. **$16$-part triangles (side $4$):**\n   - Pointing down: $3$ (one starting at the top row, and two starting at the second row).\n   - Pointing up: $0$.\n   - Total $16$-part triangles $= 3$.\n\nNo triangle of side $5$ or larger fits inside the grid. Summing all sizes gives:\n$$30 + 18 + 8 + 3 = 59.$$',
          rubric: [
            { code: 'M2', text: 'Counts triangles systematically by size: $1$-part ($30$), $4$-part ($18$), $9$-part ($8$), and $16$-part ($3$).' },
            { code: 'A2', text: 'Obtains total $59$ triangles.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'The bar chart below shows the time Lou spent in the gym last week. The average time of the first $3$ days was $72\\%$ of the average time of the last $4$ days. Given the total time spent in the gym last week was $183$ minutes, how long, in minutes, did he spend time in the gym last week Wednesday?\n(Round off your answer to the nearest integer.)',
          figures: [
            {
              src: '/papers/sasmo-2019-g8/fig-17.webp',
              alt: 'Bar chart of minutes spent in the gym from Monday to Sunday with Monday labeled 21, Tuesday labeled 14, Saturday labeled 32, and the other four days unlabeled.',
              caption: 'Weekly gym time bar chart for Question 17.'
            }
          ],
          answer: '$29$',
          principle:
            'Express the sum of the last $4$ days in terms of the sum of the first $3$ days using the ratio of their averages, then solve using the weekly total.',
          solution:
            'Let $x$ be the number of minutes Lou spent in the gym on Wednesday. From the bar chart, Monday is $21$ minutes and Tuesday is $14$ minutes, so the total for the first $3$ days is $21 + 14 + x = 35 + x$, and their average is $\\frac{35 + x}{3}$.\nSince the average of the first $3$ days is $72\\%$ of the average of the last $4$ days, the average of the last $4$ days is:\n$$\\frac{1}{0.72} \\times \\frac{35 + x}{3} = \\frac{25}{18} \\times \\frac{35 + x}{3}.$$\nMultiplying by $4$ gives the total time for the last $4$ days. Adding the first $3$ days gives the weekly total $183$:\n$$(35 + x) + 4 \\times \\frac{25}{54}(35 + x) = 183 \\implies (35 + x)\\left(1 + \\frac{50}{27}\\right) = 183.$$\nHence:\n$$\\frac{77}{27}(35 + x) = 183 \\implies 35 + x = \\frac{183 \\times 27}{77} = \\frac{4941}{77} \\approx 64.1688,$$\n$$x = \\frac{4941}{77} - 35 = \\frac{2246}{77} \\approx 29.1688.$$\nRounding to the nearest integer gives $29$.',
          rubric: [
            { code: 'M2', text: 'Sets up $(35 + x) + \\frac{4}{0.72} \\cdot \\frac{35 + x}{3} = 183$ using Monday $= 21$ and Tuesday $= 14$.' },
            { code: 'A2', text: 'Solves $x = \\frac{2246}{77} \\approx 29.17$ and rounds to $29$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt: 'What is the remainder when $2018! + 13$ is divided by $2019$?',
          answer: '$13$',
          principle:
            'Factor $2019$ into smaller positive integers; if all distinct prime-power factors (or coprime factors) appear separately inside $2018!$, then $2019$ divides $2018!$.',
          solution:
            'Factor $2019$:\n$$2019 = 3 \\times 673.$$\nBoth $3$ and $673$ are distinct integers less than or equal to $2018$, so both appear as factors in $2018! = 2018 \\times 2017 \\times \\cdots \\times 2 \\times 1$. Therefore, $2018!$ is divisible by $3 \\times 673 = 2019$.\nSince $2018! \\equiv 0 \\pmod{2019}$ and $0 \\le 13 < 2019$, the remainder when $2018! + 13$ is divided by $2019$ is $13$.',
          rubric: [
            { code: 'M2', text: 'Factors $2019 = 3 \\times 673$ and notes both $3$ and $673$ appear in $2018!$, so $2019 \\mid 2018!$.' },
            { code: 'A2', text: 'Concludes the remainder is $13$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'The operator $\\otimes$ acts on two numbers to give the following outcomes:\n$$2 \\otimes 6 = 44$$\n$$4 \\otimes 10 = 87$$\n$$8 \\otimes 18 = 1613$$\n$$16 \\otimes 22 = 2019$$\nFind the value of $7 \\otimes 9$.',
          answer: '$78$',
          principle:
            'Split each outcome into two concatenated parts (prefix and suffix) and identify the simple arithmetic rule generating each part from the two inputs.',
          solution:
            'Split each outcome into two numbers written side by side:\n- $2 \\otimes 6 = 44 \\to (4,\\, 4)$, where $6 - 2 = 4$ and $\\frac{2 + 6}{2} = 4$.\n- $4 \\otimes 10 = 87 \\to (8,\\, 7)$, where $10 - 2 = 8$ and $\\frac{4 + 10}{2} = 7$.\n- $8 \\otimes 18 = 1613 \\to (16,\\, 13)$, where $18 - 2 = 16$ and $\\frac{8 + 18}{2} = 13$.\n- $16 \\otimes 22 = 2019 \\to (20,\\, 19)$, where $22 - 2 = 20$ and $\\frac{16 + 22}{2} = 19$.\n\nSo the rule concatenates $(b - 2)$ followed by $\\frac{a + b}{2}$. Applying this to $7 \\otimes 9$:\n- Prefix: $9 - 2 = 7$.\n- Suffix: $\\frac{7 + 9}{2} = 8$.\n\nConcatenating gives $78$.',
          rubric: [
            { code: 'M2', text: 'Identifies the concatenation rule: prefix $b - 2$ and suffix $\\frac{a + b}{2}$.' },
            { code: 'A2', text: 'Computes $7 \\otimes 9 = 78$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            "In a camp, $134$ students received a burger and $62$ received an ice cream. Fifteen students received burger and ice cream but not fries, and $31$ students received all the three types of food. Given there are $200$ students in this camp, what is the largest possible number of students who didn't get any of the three types of food?",
          answer: '$50$',
          principle:
            'Use a three-set Venn diagram (or inclusion-exclusion) to find the minimum possible size of the union $\\text{Burger} \\cup \\text{Ice Cream} \\cup \\text{Fries}$, which maximizes the complement.',
          solution:
            'Let $B$, $I$, and $F$ denote the sets of students who received a burger, ice cream, and fries, respectively.\nWe know:\n- $|B \\cap I \\cap F| = 31$.\n- $|(B \\cap I) \\setminus F| = 15$, so $|B \\cap I| = 31 + 15 = 46$.\n- $|B| = 134$ and $|I| = 62$.\n\nTherefore, the number of students who received at least a burger or an ice cream is:\n$$|B \\cup I| = |B| + |I| - |B \\cap I| = 134 + 62 - 46 = 150.$$\nSince $|B \\cup I \\cup F| \\ge |B \\cup I| = 150$, with equality attainable when no student receives fries alone (i.e. $F \\subseteq B \\cup I$, for instance all $F$-only students $= 0$ and the other $F$ overlaps fit inside $B \\setminus I$ and $I \\setminus B$), the maximum number of students who received none of the three items is:\n$$200 - 150 = 50.$$',
          rubric: [
            { code: 'M2', text: 'Computes $|B \\cup I| = 134 + 62 - (31 + 15) = 150$.' },
            { code: 'A2', text: 'Subtracts from $200$ (with $0$ fries-only students) to obtain $50$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'The number $X$ is a composite number with all different digits, and the product of its digits is $360$. What is the greatest possible value of $\\dfrac{X}{10}$?\n(Round off your answer to the nearest integer.)',
          answer: '$9542$',
          principle:
            'To maximize $X$, maximize the number of distinct nonzero digits first (noting $1$ can be included to increase digit count without changing the product), then arrange them in descending order and verify compositeness.',
          solution:
            'Factor $360$ into primes:\n$$360 = 2^3 \\times 3^2 \\times 5.$$\nA $6$-digit number with all distinct nonzero digits has digit product at least $1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6 = 720 > 360$, so $X$ has at most $5$ digits.\nTo get the largest $5$-digit number with distinct digits whose product is $360$, include the digit $1$ and choose the largest possible remaining four digits: starting with $9 = 3^2$ and $5$, the remaining product is $2^3 = 8$, which splits into distinct digits $4$ and $2$ (whereas $8$ and $1$ would force a repeated $1$ or only $4$ digits).\nArranging $\\{9, 5, 4, 2, 1\\}$ in descending order gives:\n$$X = 95421.$$\nCheck compositeness: its digit sum is $9 + 5 + 4 + 2 + 1 = 21$, which is divisible by $3$, so $95421$ is composite ($95421 = 3 \\times 31807$).\nFinally, $\\frac{X}{10} = 9542.1$, which rounds to $9542$.',
          rubric: [
            { code: 'M2', text: 'Shows $X$ has at most $5$ digits and determines the maximum distinct-digit set $\\{9, 5, 4, 2, 1\\}$, giving $X = 95421$ (divisible by $3$).' },
            { code: 'A2', text: 'Rounds $\\frac{95421}{10} = 9542.1$ to $9542$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'Evaluate\n$$15120 \\times \\left(\\frac{2}{1 \\times 2 \\times 3} + \\frac{3}{1 \\times 2 \\times 3 \\times 4} + \\cdots + \\frac{6}{1 \\times 2 \\times 3 \\times \\cdots \\times 7}\\right)$$',
          answer: '$7557$',
          principle:
            'Rewrite each fraction $\\frac{k}{(k+1)!}$ as $\\frac{(k+1) - 1}{(k+1)!} = \\frac{1}{k!} - \\frac{1}{(k+1)!}$ so the sum telescopes.',
          solution:
            'Notice the identity for each term:\n$$\\frac{n - 1}{n!} = \\frac{n}{n!} - \\frac{1}{n!} = \\frac{1}{(n - 1)!} - \\frac{1}{n!}.$$\nApplying this to $n = 3, 4, 5, 6, 7$:\n$$\\frac{2}{3!} + \\frac{3}{4!} + \\frac{4}{5!} + \\frac{5}{6!} + \\frac{6}{7!} = \\left(\\frac{1}{2!} - \\frac{1}{3!}\\right) + \\left(\\frac{1}{3!} - \\frac{1}{4!}\\right) + \\cdots + \\left(\\frac{1}{6!} - \\frac{1}{7!}\\right) = \\frac{1}{2!} - \\frac{1}{7!}.$$\nSince $7! = 5040$ and $15120 = 3 \\times 5040 = 3 \\times 7!$, multiplying out gives:\n$$15120 \\times \\left(\\frac{1}{2} - \\frac{1}{5040}\\right) = 7560 - 3 = 7557.$$',
          rubric: [
            { code: 'M2', text: 'Telescopes the series via $\\frac{n-1}{n!} = \\frac{1}{(n-1)!} - \\frac{1}{n!}$ to $\\frac{1}{2!} - \\frac{1}{7!}$.' },
            { code: 'A2', text: 'Multiplies by $15120 = 3 \\times 7!$ to obtain $7557$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'The large rectangle below is made up of $4$ rectangles with their areas indicated in the diagram below. What is the area, in $\\text{cm}^2$, of the shaded region?',
          figures: [
            {
              src: '/papers/sasmo-2019-g8/fig-23.webp',
              alt: 'Large rectangle divided into four smaller rectangles with areas 160, 40, 30, and 10 square centimeters, and two triangles shaded between the top-left and bottom-right corners.',
              caption: 'Four-rectangle figure with shaded region for Question 23.'
            }
          ],
          answer: '$6\\text{ cm}^2$',
          principle:
            'Use the ratio of the top-row area to the bottom-row area to find the ratio of the two row heights, then express the shaded triangles in terms of the shared horizontal cut.',
          solution:
            'Let the upper row have height $c$ and the lower row have height $e$. Let the upper-row widths be $a$ (left, area $160$) and $b$ (right, area $40$), and the lower-row widths be $d$ (left, area $30$) and $f$ (right, area $10$).\nSince both rows have the same total width $a + b = d + f$:\n$$\\frac{c}{e} = \\frac{(a + b)c}{(d + f)e} = \\frac{160 + 40}{30 + 10} = \\frac{200}{40} = 5, \\quad \\text{so } c = 5e.$$\nAlong the horizontal line separating the two rows, the width of the left-top rectangle is $a$ and the width of the left-bottom rectangle is $d$. Notice that:\n$$\\frac{a}{a + b} = \\frac{160}{200} = \\frac{4}{5}, \\qquad \\frac{d}{d + f} = \\frac{30}{40} = \\frac{3}{4}.$$\nHence the segment along the horizontal dividing line between the two vertical cuts has length:\n$$s = a - d = \\left(\\frac{4}{5} - \\frac{3}{4}\\right)W = \\frac{1}{20}W,$$\nwhere $W = a + b = d + f$ is the total width of the large rectangle. The shaded region consists of two triangles sharing base $s$, with heights $c$ (above) and $e$ (below), so its total area is:\n$$\\frac{1}{2} s (c + e) = \\frac{1}{2} \\left(\\frac{1}{20} W\\right)(c + e) = \\frac{1}{40} \\times \\text{Area}(\\text{large rectangle}) = \\frac{240}{40} = 6\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Finds the horizontal segment $s = \\left(\\frac{4}{5} - \\frac{3}{4}\\right)W = \\frac{1}{20}W$ shared by the two shaded triangles.' },
            { code: 'A2', text: 'Computes shaded area $\\frac{1}{2} \\cdot \\frac{1}{20} W (c + e) = \\frac{240}{40} = 6\\text{ cm}^2$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'In the following cryptarithm, all the different letters stand for different digits. What is the value of the sum $O + D + A + G$?\n$$\\begin{array}{rrrrr}\n& G & O & O & D \\\\\n+ & & D & O & G \\\\\n\\hline\n& D & G & D & A\n\\end{array}$$',
          answer: '$24$',
          principle:
            'Analyze column carryovers from thousands down to ones: since $G$ increases to $D$ and the hundreds digit drops from $O + D$ back to $G$, $O$ must be large ($8$ or $9$).',
          solution:
            'All letters represent distinct digits ($G, D \\neq 0$):\n1. **Thousands column:** Since $D \\neq G$, there is a carryover of $1$ from the hundreds column, so $D = G + 1$.\n2. **Hundreds column:** Either $O + D = 10 + G$ or $O + D + 1 = 10 + G$. Substituting $D = G + 1$ gives $O + 1 = 10$ (if no tens carry) or $O + 2 = 10$ (if tens carry $= 1$), so $O \\in \\{8, 9\\}$.\n   - If $O = 9$, then in the tens column $O + O = 18$ (without a ones carry) or $O + O + 1 = 19$ (with a ones carry). Either way, the tens column produces a carry of $1$ into the hundreds column, so $O + D + 1 = 10 + G$, forcing $O = 8$, a contradiction. (Alternatively, $9 + 9 = 18$ gives $D = 8, G = 7$, which forces $D + G = 15$ to carry $1$ into the tens column, giving $D = 9 = O$, impossible.)\n   - Therefore **$O = 8$**, with a carry of $1$ from the tens column ($8 + 8 = 16$ or $8 + 8 + 1 = 17$).\n3. **Tens and ones columns:** From $O = 8$, $D \\in \\{6, 7\\}$ and $G = D - 1 \\in \\{5, 6\\}$. In both cases $D + G \\ge 6 + 5 = 11 > 10$, so the ones column produces a carry of $1$ into the tens column. Thus:\n   - Tens column: $8 + 8 + 1 = 17 \\implies D = 7$.\n   - Thousands column: $G = D - 1 = 6$.\n   - Ones column: $D + G = 7 + 6 = 13 \\implies A = 3$.\n\nCheck: $6887 + 786 = 7673$, with $G=6, O=8, D=7, A=3$ all distinct. Therefore:\n$$O + D + A + G = 8 + 7 + 3 + 6 = 24.$$',
          rubric: [
            { code: 'M2', text: 'Deduces $D = G + 1$, $O = 8$ (ruling out $O = 9$), and a carry of $1$ from the ones column.' },
            { code: 'A2', text: 'Finds $G = 6, O = 8, D = 7, A = 3$ and sums to $24$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'In the equation below, $a$, $b$ and $c$ are digits, $\\overline{aa}$ and $\\overline{bb}$ are two-digit numbers, and $\\overline{cccc}$ is a four-digit number.\n$$\\overline{aa}^2 + \\overline{bb} = \\overline{cccc}$$\nWhat is the largest possible value of $a + b + c$?',
          answer: '$18$',
          principle:
            'Factor out $11$ from every repdigit ($\\overline{aa} = 11a$, $\\overline{bb} = 11b$, $\\overline{cccc} = 1111c$) to reduce the equation to $11a^2 + b = 101c$.',
          solution:
            'Write each number in base-$10$ form:\n$$\\overline{aa} = 11a, \\qquad \\overline{bb} = 11b, \\qquad \\overline{cccc} = 1111c.$$\nSubstituting into the equation gives:\n$$(11a)^2 + 11b = 1111c \\implies 11a^2 + b = 101c.$$\nSince $1 \\le b \\le 9$ and $1 \\le c \\le 9$, $101c - 9 \\le 11a^2 \\le 101c - 1$. Testing $c \\in \\{1, 2, \\ldots, 9\\}$:\n- $c = 1$: $92 \\le 11a^2 \\le 100 \\implies a^2 = 9 \\implies a = 3, b = 101 - 99 = 2$ ($a+b+c = 6$).\n- $c = 2$: $193 \\le 11a^2 \\le 201$ (no integer $a$, since $11 \\times 16 = 176$ and $11 \\times 25 = 275$).\n- $c = 3$: $294 \\le 11a^2 \\le 302$ (none).\n- $c = 4$: $395 \\le 11a^2 \\le 403 \\implies a^2 = 36 \\implies a = 6, b = 404 - 396 = 8$ ($a+b+c = 18$).\n- $c = 5$: $496 \\le 11a^2 \\le 504$ (none, $11 \\times 49 = 539$).\n- $c = 6$: $597 \\le 11a^2 \\le 605$ (none).\n- $c = 7$: $698 \\le 11a^2 \\le 706 \\implies a^2 = 64 \\implies a = 8, b = 707 - 704 = 3$ ($a+b+c = 18$).\n- $c = 8$: $799 \\le 11a^2 \\le 807$ (none, $11 \\times 81 = 891$).\n- $c = 9$: $900 \\le 11a^2 \\le 908$ (none).\n\nCheck the two maximal triples: $66^2 + 88 = 4356 + 88 = 4444$ and $88^2 + 33 = 7744 + 33 = 7777$. Both give $a + b + c = 18$.',
          rubric: [
            { code: 'M2', text: 'Reduces $(11a)^2 + 11b = 1111c$ to $11a^2 + b = 101c$ and bounds $1 \\le b \\le 9$.' },
            { code: 'A2', text: 'Finds $(a, b, c) \\in \\{(3,2,1), (6,8,4), (8,3,7)\\}$ and maximum sum $18$.' }
          ]
        }
      ]
    }
  ]
};
