/**
 * Paket Soal: SASMO 2015 Grade 8 (Singapore and Asian Schools Math Olympiad, Secondary 2 / Division S2)
 * Sumber: Singapore and Asian Schools Math Olympiad 2015, Secondary 2 Contest (sasmo_2015_g8.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Tiga soal bergambar (1, 5, 21) dinyatakan ulang
 * secara lengkap dalam kata-kata; soal 18 dan 23 juga dinyatakan ulang secara tekstual.
 */
export default {
  id: 'sasmo-2015-g8',
  slug: 'sasmo-2015-grade-8',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'SASMO 2015 Secondary 2: number theory (divisibility, LCM, remainders, last digits), sequences, counting, geometry (angles, area, Pythagoras), algebra and cryptarithms',
  relatedChapterIds: ['smp7-bab1-bilangan-bulat', 'smp8-bab1-bilangan-berpangkat', 'smp8-bab2-teorema-pythagoras'],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2015 Grade 8',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (original time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (the official contest deducts 1 mark for a wrong answer and 0 for no answer). Section B has 10 short-answer questions worth 4 marks each (no deduction). Marks shown here count correct answers only (70 marks); the official paper adds 15 starting marks (maximum 85). Questions 1, 5 and 21 originally came with diagrams and are restated in words.',
  source: {
    org: 'SASMO',
    file: 'sasmo_2015_g8.pdf',
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
            'A big rectangle is made up of 4 identical small rectangles arranged as follows: one small rectangle stands upright (its longer side is vertical) on the left, and the other three lie flat (their longer sides are horizontal), stacked one above another, on its right; together they fill the big rectangle exactly with no gaps or overlaps. If the smaller dimension of one of the small rectangles is $9\\text{ cm}$, find the area of the big rectangle.\n\nA. $108\\text{ cm}^2$\nB. $972\\text{ cm}^2$\nC. $2015\\text{ cm}^2$\nD. Not enough given information to find\nE. None of the above',
          answer: 'B. $972\\text{ cm}^2$',
          principle:
            'Identical rectangles give equal side lengths, so the stacking condition links the longer side to the shorter side; then area = length $\\times$ width.',
          solution:
            'Let each small rectangle have shorter side $9\\text{ cm}$ and longer side $L\\text{ cm}$.\nThe upright rectangle on the left has height $L$. The three flat rectangles on the right are stacked, each of height $9$, so their total height is $3 \\times 9 = 27$. Both columns have the same height (they form one big rectangle), so $L = 27$.\nEach flat rectangle has width $L = 27$, and the upright one has width $9$, so the big rectangle measures\n$$\\text{width} = 27 + 9 = 36\\text{ cm}, \\qquad \\text{height} = 27\\text{ cm}.$$\nArea $= 36 \\times 27 = 972\\text{ cm}^2$.\nCheck: $4$ small rectangles of area $9 \\times 27 = 243$ give $4 \\times 243 = 972$.',
          rubric: [
            { code: 'M1', text: 'Finds the longer side $27\\text{ cm}$ (three shorter sides stacked equal one longer side) and the big rectangle $36 \\times 27$.' },
            { code: 'A1', text: 'Area $972\\text{ cm}^2$, option B.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt: 'Find the next term of the following sequence: $3, 2, 5, 9, 44, \\ldots$\n\nA. $86$\nB. $87$\nC. $88$\nD. $395$\nE. $2015$',
          answer: 'D. $395$',
          principle: 'Look for a recurrence in which each term is built from the two terms before it.',
          solution:
            'Test the rule "multiply the previous two terms and subtract $1$":\n$$2 \\times 3 - 1 = 5,\\qquad 5 \\times 2 - 1 = 9,\\qquad 9 \\times 5 - 1 = 44.$$\nThe rule fits every term from the third onward, so the next term is\n$$44 \\times 9 - 1 = 396 - 1 = 395.$$',
          rubric: [
            { code: 'M1', text: 'Identifies the rule $a_n = a_{n-1} a_{n-2} - 1$ and checks it on the given terms.' },
            { code: 'A1', text: 'Next term $395$, option D.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'An operator $\\star$ acts on two numbers to give the following outcomes:\n$$3 \\star 2 = 94,\\quad 5 \\star 3 = 259,\\quad 1 \\star 6 = 136,\\quad 4 \\star 9 = 1681.$$\nWhat is $5 \\star 7$ equal to?\n\nA. $2549$\nB. $3549$\nC. $4925$\nD. $4935$\nE. None of the above',
          answer: 'A. $2549$',
          principle: 'Pattern recognition: write the result as two numbers placed side by side (concatenated).',
          solution:
            'Compare each result with the squares of the two inputs:\n- $3 \\star 2$: $3^2 = 9$ and $2^2 = 4$, giving $94$.\n- $5 \\star 3$: $5^2 = 25$ and $3^2 = 9$, giving $259$.\n- $1 \\star 6$: $1^2 = 1$ and $6^2 = 36$, giving $136$.\n- $4 \\star 9$: $4^2 = 16$ and $9^2 = 81$, giving $1681$.\nSo $a \\star b$ is the square of $a$ followed by the square of $b$ written next to each other. Then $5 \\star 7$: $5^2 = 25$ and $7^2 = 49$, giving $2549$.',
          rubric: [
            { code: 'M1', text: 'Discovers the rule: square of $a$ followed by square of $b$, verified on all four examples.' },
            { code: 'A1', text: '$5 \\star 7 = 2549$, option A.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt: 'If the five-digit number $4567N$ is divisible by $12$, find $N$.\n\nA. $8$\nB. $6$\nC. $4$\nD. $2$\nE. $0$',
          answer: 'D. $2$',
          principle: 'A number is divisible by $12$ iff it is divisible by both $3$ and $4$ (coprime factors); use the digit-sum test for $3$ and the last-two-digits test for $4$.',
          solution:
            'Since $12 = 3 \\times 4$ with $\\gcd(3,4)=1$, the number must be divisible by $3$ and by $4$.\nDivisible by $3$: the digit sum $4+5+6+7+N = 22 + N$ must be a multiple of $3$, so $N \\in \\{2, 5, 8\\}$.\nDivisible by $4$: the last two digits $7N$ must be divisible by $4$. Now $72 = 4 \\times 18$ works, but $75$ and $78$ are not divisible by $4$.\nHence $N = 2$. Check: $45672 = 12 \\times 3806$.',
          rubric: [
            { code: 'M1', text: 'Applies the divisibility tests for $3$ and $4$ to narrow $N$.' },
            { code: 'A1', text: '$N = 2$, option D.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'A square and a regular hexagon share a common side. At one endpoint of this common side, the square, the hexagon and a regular polygon meet and together fill the whole angle around that vertex with no gaps or overlaps (the regular polygon is the third shape around that vertex, on the opposite side of the common side). How many sides does the regular polygon have?\n\nA. $10$\nB. $12$\nC. $20$\nD. $24$\nE. $30$',
          answer: 'B. $12$',
          principle: 'Angles around a point sum to $360^\\circ$; each interior angle of a regular $n$-gon is $180^\\circ - \\frac{360^\\circ}{n}$.',
          solution:
            'Interior angle of a regular hexagon: $\\frac{(6-2) \\times 180^\\circ}{6} = 120^\\circ$. Interior angle of the square: $90^\\circ$.\nThe three angles at the common vertex add up to $360^\\circ$, so the interior angle of the regular polygon is\n$$360^\\circ - 120^\\circ - 90^\\circ = 150^\\circ.$$\nIts exterior angle is $180^\\circ - 150^\\circ = 30^\\circ$, and the exterior angles of a convex polygon sum to $360^\\circ$, so the number of sides is\n$$\\frac{360^\\circ}{30^\\circ} = 12.$$\nCheck with the interior-angle formula: $\\frac{(12-2) \\times 180^\\circ}{12} = 150^\\circ$.',
          rubric: [
            { code: 'M1', text: 'Computes the polygon interior angle $360^\\circ - 120^\\circ - 90^\\circ = 150^\\circ$.' },
            { code: 'A1', text: '$12$ sides, option B.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'A palindromic number is a whole number that reads the same forward and backward. For example, $1221$ is a palindromic number. How many $6$-digit palindromic numbers are there?\n\nA. $190$\nB. $900$\nC. $1000$\nD. $90000$\nE. None of the above',
          answer: 'B. $900$',
          principle: 'Multiplication principle: a $6$-digit palindrome is determined by its first three digits.',
          solution:
            'A $6$-digit palindrome has the form $\\overline{abccba}$, so it is fixed by $a$, $b$, $c$.\n- $a$ is the leading digit, so $a \\in \\{1, \\ldots, 9\\}$: $9$ choices.\n- $b$ can be any digit: $10$ choices.\n- $c$ can be any digit: $10$ choices.\nThe last three digits are forced to mirror the first three, so the total is $9 \\times 10 \\times 10 = 900$.',
          rubric: [
            { code: 'M1', text: 'Notes that the first three digits determine the number, with first digit nonzero.' },
            { code: 'A1', text: '$900$, option B.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'A farmer buys $36$ metres of fence to build an enclosure to keep his livestock. He decides to erect a $4$-sided enclosure in such a way that it has the largest possible area. Find the area of the enclosure.\n\nA. $63\\text{ m}^2$\nB. $72\\text{ m}^2$\nC. $81\\text{ m}^2$\nD. $90\\text{ m}^2$\nE. None of the above',
          answer: 'C. $81\\text{ m}^2$',
          principle: 'Among all quadrilaterals with a given perimeter, the square has the largest area (Bretschneider bound plus AM-GM).',
          solution:
            'For a quadrilateral with sides $a, b, c, d$ and semi-perimeter $s$, the area satisfies $K \\le \\sqrt{(s-a)(s-b)(s-c)(s-d)}$.\nHere the perimeter is $36$, so $s = 18$ and $(s-a)+(s-b)+(s-c)+(s-d) = 4s - 36 = 36$. By AM-GM,\n$$\\sqrt[4]{(s-a)(s-b)(s-c)(s-d)} \\le \\frac{36}{4} = 9 \\implies K \\le 9^2 = 81.$$\nEquality holds when all four factors are equal, i.e. $a=b=c=d=9$, and the quadrilateral is cyclic: a square of side $9\\text{ m}$.\nThe largest possible area is $9 \\times 9 = 81\\text{ m}^2$.',
          rubric: [
            { code: 'M1', text: 'States that the maximum occurs for a square (with justification) so each side is $36 \\div 4 = 9\\text{ m}$.' },
            { code: 'A1', text: 'Area $81\\text{ m}^2$, option C.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'A number gives a remainder of $5$ when divided by $10$. Another number gives a remainder of $4$ when divided by $10$. The sum of these two numbers is multiplied by $3$ to give the third number. What is the remainder when this third number is divided by $10$?\n\nA. $4$\nB. $5$\nC. $7$\nD. $9$\nE. None of the above',
          answer: 'C. $7$',
          principle: 'Modular arithmetic: remainders can be added and multiplied before reducing.',
          solution:
            'Write the numbers as $10x + 5$ and $10y + 4$ for whole numbers $x, y$. Their sum is\n$$(10x + 5) + (10y + 4) = 10(x + y) + 9.$$\nThe third number is\n$$3\\bigl(10(x+y) + 9\\bigr) = 30(x+y) + 27 = 10\\bigl(3(x+y) + 2\\bigr) + 7.$$\nSo the remainder on division by $10$ is $7$. (Equivalently $(5 + 4) \\times 3 = 27 \\equiv 7 \\pmod{10}$.)',
          rubric: [
            { code: 'M1', text: 'Expresses the numbers as $10x+5$ and $10y+4$ (or uses remainders correctly).' },
            { code: 'A1', text: 'Remainder $7$, option C.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'A big cube is made up of $64$ small cubes. All the faces of the big cube are then painted. How many of the small cubes have exactly one painted face?\n\nA. $6$\nB. $12$\nC. $24$\nD. $72$\nE. None of the above',
          answer: 'C. $24$',
          principle: 'Counting by position: small cubes with exactly one painted face lie in the interior of a face of the big cube.',
          solution:
            'Since $64 = 4 \\times 4 \\times 4$, the big cube is $4 \\times 4 \\times 4$.\nA small cube has exactly one painted face when it lies on a face of the big cube but not on any edge. On each face this leaves the inner $2 \\times 2$ block, i.e. $4$ cubes. There are $6$ faces, so the number is\n$$6 \\times 4 = 24.$$',
          rubric: [
            { code: 'M1', text: 'Finds that the cube is $4\\times4\\times4$ and that $2\\times2 = 4$ cubes per face have exactly one painted face.' },
            { code: 'A1', text: '$24$, option C.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'If both $n$ and $\\dfrac{108}{n^3}$ are positive integers, how many possible values of $n$ are there?\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$\nE. None of the above',
          answer: 'B. $2$',
          principle: 'Prime factorisation: $n^3$ must be a perfect cube dividing $108$.',
          solution:
            'We need $n^3 \\mid 108$, where $108 = 2^2 \\times 3^3$.\nIn $n^3$ every prime exponent is a multiple of $3$ and cannot exceed the exponent in $108$. For the prime $2$ the exponent in $n^3$ must be $0$ (since $3 > 2$). For the prime $3$ it is $0$ or $3$. Any other prime cannot divide $n$.\nThus $n^3 \\in \\{1, 27\\}$, i.e. $n \\in \\{1, 3\\}$.\nCheck: $108 \\div 1 = 108$ and $108 \\div 27 = 4$; for $n=2$, $108 \\div 8 = 13.5$ is not an integer.\nThere are $2$ possible values of $n$.',
          rubric: [
            { code: 'M1', text: 'Reduces the problem to cubes dividing $108 = 2^2 \\cdot 3^3$ (or lists the factors of $108$ that are perfect cubes).' },
            { code: 'A1', text: '$2$ values ($n=1,3$), option B.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'The product of two positive integers is $100\\,000$. Neither of the two numbers has $10$ as a factor. Find the difference of these two numbers.\n\nA. $465$\nB. $1170$\nC. $3093$\nD. $6234$\nE. Not enough given information to find',
          answer: 'C. $3093$',
          principle: 'Prime factorisation: a number divisible by both $2$ and $5$ is divisible by $10$.',
          solution:
            'Since $100\\,000 = 2^5 \\times 5^5$, each number has the form $2^a 5^b$ and the other is $2^{5-a} 5^{5-b}$.\nA number containing both the primes $2$ and $5$ is a multiple of $10$, so neither number may contain both. The first number has $a = 0$ or $b = 0$; the second has $a = 5$ or $b = 5$. The only consistent possibilities are ($a=0,\\ b=5$) or ($a=5,\\ b=0$), giving the pair\n$$2^5 = 32 \\quad \\text{and} \\quad 5^5 = 3125.$$\nTheir difference is $3125 - 32 = 3093$.',
          rubric: [
            { code: 'M1', text: 'Shows that one number must be $2^5=32$ and the other $5^5=3125$.' },
            { code: 'A1', text: 'Difference $3093$, option C.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'The height of a man is $169\\text{ cm}$, correct to the nearest centimetre. What is the upper bound of the man’s height?\n\nA. $169.4\\text{ cm}$\nB. $169.45\\text{ cm}$\nC. $169.49\\text{ cm}$\nD. $169.5\\text{ cm}$\nE. $169.9\\text{ cm}$',
          answer: 'D. $169.5\\text{ cm}$',
          principle: 'Rounding bounds: a value correct to the nearest unit lies within half a unit of the stated value.',
          solution:
            'Let the height be $h$ cm. Since $169$ is correct to the nearest centimetre,\n$$168.5 \\le h < 169.5.$$\nThe upper bound of the height is therefore $169.5\\text{ cm}$ (it is the least number that is at least every possible height; it need not itself be a possible height).',
          rubric: [
            { code: 'M1', text: 'Writes the interval $168.5 \\le h < 169.5$.' },
            { code: 'A1', text: 'Upper bound $169.5\\text{ cm}$, option D.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'A circle and a rhombus are drawn on a flat surface. What is the biggest number of regions (including the unbounded region outside both shapes) that can be formed on the surface?\n\nA. $6$\nB. $7$\nC. $8$\nD. $9$\nE. $10$',
          answer: 'E. $10$',
          principle: 'A line segment meets a circle in at most $2$ points; count regions with Euler’s formula $V - E + F = 2$.',
          solution:
            'Each of the $4$ sides of the rhombus meets the circle in at most $2$ points, so the two curves cross at most $8$ times.\nSuppose they cross at $k \\ge 1$ points. These are $k$ vertices; the circle is cut into $k$ arcs and the rhombus boundary into $k$ pieces, so there are $2k$ edges. The figure is connected, so Euler’s formula gives\n$$F = E - V + 2 = 2k - k + 2 = k + 2 \\le 10.$$\nWith no crossings there are at most $3$ regions, so the maximum is at most $10$.\nIt is attained: take a square (a rhombus) and a concentric circle whose radius is larger than half the side but smaller than half the diagonal. Then every side cuts the circle twice, and the regions are: $1$ central region, $4$ corner pieces of the square outside the circle, $4$ circular caps outside the square, and $1$ outer region, a total of $1 + 4 + 4 + 1 = 10$.',
          rubric: [
            { code: 'M1', text: 'Argues that there are at most $8$ intersection points and bounds the regions by $10$ (Euler or direct count).' },
            { code: 'A1', text: 'Shows $10$ is attainable (e.g. square with a concentric circle); option E.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Find the smallest whole number $n$ for which $540n$ is a multiple of $168$.\n\nA. $2$\nB. $7$\nC. $14$\nD. $28$\nE. None of the above',
          answer: 'C. $14$',
          principle: 'Prime factorisation: $540n$ must contain every prime factor of $168$ with at least the same exponent.',
          solution:
            'Factorise: $540 = 2^2 \\times 3^3 \\times 5$ and $168 = 2^3 \\times 3 \\times 7$.\nFor $168 \\mid 540n$ we need $2^3$, $3^1$ and $7^1$ in $540n$. The number $540$ already has $3^3$ but only $2^2$ and no factor $7$, so $n$ must supply at least one more factor $2$ and one factor $7$.\nThe smallest such $n$ is $2 \\times 7 = 14$.\nCheck: $540 \\times 14 = 7560 = 168 \\times 45$.',
          rubric: [
            { code: 'M1', text: 'Compares prime factorisations of $540$ and $168$ to find the missing factors $2$ and $7$.' },
            { code: 'A1', text: '$n = 14$, option C.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'In $\\triangle ABC$, $AB = 10\\text{ cm}$, $BC = 6\\text{ cm}$ and $AC = 8\\text{ cm}$. Find the value of $\\dfrac{\\sin A}{\\sin B}$.\n\nA. $0.6$\nB. $0.75$\nC. $0.8$\nD. Cannot be found\nE. None of the above',
          answer: 'B. $0.75$',
          principle: 'Converse of the Pythagorean theorem gives a right angle; then use $\\sin = \\frac{\\text{opposite}}{\\text{hypotenuse}}$ (or the sine rule).',
          solution:
            'Since $6^2 + 8^2 = 36 + 64 = 100 = 10^2$, the triangle is right-angled at $C$ and $AB = 10$ is the hypotenuse.\n$$\\sin A = \\frac{BC}{AB} = \\frac{6}{10} = \\frac{3}{5}, \\qquad \\sin B = \\frac{AC}{AB} = \\frac{8}{10} = \\frac{4}{5}.$$\nTherefore\n$$\\frac{\\sin A}{\\sin B} = \\frac{3/5}{4/5} = \\frac{3}{4} = 0.75.$$\n(The sine rule gives the same: $\\frac{\\sin A}{\\sin B} = \\frac{BC}{AC} = \\frac{6}{8}$.)',
          rubric: [
            { code: 'M1', text: 'Recognises the right angle at $C$ (or uses the sine rule) to write both sines.' },
            { code: 'A1', text: '$0.75$, option B.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Short Answer',
      marks: 40,
      stem: 'Write down the answer to each question with working (10 questions, 4 marks each).',
      parts: [
        {
          label: '16',
          marks: 4,
          prompt:
            'There are $15$ rows of seats in a hall, each row having $20$ seats. If there are $275$ people seated in the hall, at least how many rows have an equal number of people each? (That is, find the largest $k$ such that, however the $275$ people are seated, at least $k$ rows are guaranteed to contain the same number of people.)',
          answer: '$4$',
          principle: 'Pigeonhole principle: bound the total number of people if no occupancy value occurs too often.',
          solution:
            'Each row holds between $0$ and $20$ people. Suppose that no occupancy value is shared by more than $3$ rows. To make the total as large as possible, use the largest values $20, 19, 18, 17, 16$, each in exactly $3$ rows ($15$ rows in all). The total would be at most\n$$3(20 + 19 + 18 + 17 + 16) = 3 \\times 90 = 270 < 275.$$\nThis contradicts the $275$ people present, so some occupancy value occurs in at least $4$ rows.\nThis is the best guarantee: seat $20$, $19$ and $18$ people in four rows each ($4 \\times 57 = 228$ people) and $17$, $16$, $14$ people in the remaining three rows ($47$ people). The total is $275$ and no value occurs in more than $4$ rows.\nHence at least $4$ rows must have an equal number of people.',
          rubric: [
            { code: 'M2', text: 'Assumes at most $3$ rows share a value and computes the maximum total $3(20+19+18+17+16) = 270 < 275$.' },
            { code: 'A2', text: 'Concludes $4$ rows (and checks it cannot be improved).' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'Tom drives $4000\\text{ km}$ during a trip. He rotates the tyres (four tyres on the car and one spare tyre) so that each tyre has been used for the same distance at the end of the trip. How many kilometres are covered by each tyre?',
          answer: '$3200\\text{ km}$',
          principle: 'Conservation of total tyre-distance shared equally among all tyres.',
          solution:
            'At any moment exactly $4$ tyres are on the road, so the total distance covered by all tyres together is\n$$4 \\times 4000 = 16\\,000\\text{ km}.$$\nThe $5$ tyres share this total equally, so each tyre covers\n$$\\frac{16\\,000}{5} = 3200\\text{ km}.$$',
          rubric: [
            { code: 'M2', text: 'Total tyre-distance $4 \\times 4000 = 16\\,000\\text{ km}$.' },
            { code: 'A2', text: 'Divides equally among $5$ tyres: $3200\\text{ km}$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'In the Haberdasher’s Puzzle, an equilateral triangle can be cut into four pieces that can be rearranged to form a square (a solution discovered by Henry Dudeney, 1857–1930). If the side of the square is $13\\text{ cm}$, find the side of the equilateral triangle, correct to the nearest whole number. (Note: $\\dfrac{2}{\\sqrt[4]{3}} = 1.52$, correct to three significant figures.)',
          answer: '$20\\text{ cm}$',
          principle: 'Dissection preserves area, so area of the equilateral triangle equals area of the square.',
          solution:
            'Let the square have side $l = 13$ and the triangle side $b$. Since the pieces are only rearranged, the areas are equal. The height of the equilateral triangle is $h = \\frac{\\sqrt{3}}{2} b$, so\n$$\\tfrac{1}{2} b h = \\frac{\\sqrt{3}}{4} b^2 = l^2 \\implies b^2 = \\frac{4 l^2}{\\sqrt{3}} \\implies b^4 = \\frac{16}{3} l^4.$$\nTherefore\n$$b = \\frac{2}{\\sqrt[4]{3}}\\, l \\approx 1.52 \\times 13 = 19.76 \\approx 20\\text{ cm}.$$',
          rubric: [
            { code: 'M2', text: 'Equates the areas and derives $b^4 = \\frac{16}{3} l^4$ (or $b = \\frac{2}{\\sqrt[4]{3}} l$).' },
            { code: 'A2', text: '$b \\approx 19.76$, so $20\\text{ cm}$ to the nearest whole number.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'Polite numbers are numbers that can be expressed as the sum of two or more consecutive positive integers, e.g.\n$$5 = 2 + 3, \\qquad 9 = 2 + 3 + 4 = 4 + 5.$$\nFind all the polite numbers that can be expressed as the sum of three consecutive positive integers.',
          answer: 'All multiples of $3$ except $3$: $6, 9, 12, 15, \\ldots$ (that is, $3k$ with $k \\ge 2$)',
          principle: 'Algebraic representation of consecutive integers: $n + (n+1) + (n+2) = 3(n+1)$.',
          solution:
            'Three consecutive positive integers are $n,\\ n+1,\\ n+2$ with $n \\ge 1$, and their sum is\n$$n + (n+1) + (n+2) = 3n + 3 = 3(n+1).$$\nAs $n$ runs over $1, 2, 3, \\ldots$ the quantity $n + 1$ runs over $2, 3, 4, \\ldots$, so the sums are $6, 9, 12, 15, \\ldots$.\nConversely every multiple $3m$ with $m \\ge 2$ is obtained by $n = m - 1 \\ge 1$. The number $3$ itself is not obtained because it would need $n = 0$, which is not positive.\nSo the required numbers are exactly the multiples of $3$ greater than $3$.',
          rubric: [
            { code: 'M2', text: 'Writes the sum as $3n+3 = 3(n+1)$ with $n \\ge 1$.' },
            { code: 'A2', text: 'States all multiples of $3$ except $3$ (both directions justified).' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt: 'Find the $2015$th term of the following sequence: $1, 2, 2, 3, 3, 3, 4, 4, 4, 4, \\ldots$',
          answer: '$63$',
          principle: 'The value $n$ appears $n$ times, so the last position of the value $n$ is the triangular number $\\frac{n(n+1)}{2}$.',
          solution:
            'The value $k$ occupies the positions from $\\frac{(k-1)k}{2} + 1$ to $\\frac{k(k+1)}{2}$.\nFind the smallest $k$ with $\\frac{k(k+1)}{2} \\ge 2015$, i.e. $k(k+1) \\ge 4030$. Since\n$$62 \\times 63 = 3906 < 4030 \\quad \\text{and} \\quad 63 \\times 64 = 4032 \\ge 4030,$$\nthe smallest such $k$ is $63$. Indeed $1 + 2 + \\cdots + 62 = 1953 < 2015 \\le 2016 = 1 + 2 + \\cdots + 63$, so term number $2015$ lies in the block of $63$s (positions $1954$ to $2016$).\nThe $2015$th term is $63$.',
          rubric: [
            { code: 'M2', text: 'Uses triangular numbers: positions $1954$ to $2016$ hold the value $63$ (or $62 \\cdot 63/2 = 1953 < 2015 \\le 63 \\cdot 64/2$).' },
            { code: 'A2', text: 'Term $= 63$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'A rectangle is divided by one horizontal line and one vertical line into a square and three smaller rectangles: the square is in the top-left corner, an unshaded rectangle is in the bottom-right corner (opposite the square), and the two other rectangles are shaded (one at the top-right, beside the square, and one at the bottom-left, below the square). If the perimeter of the unshaded rectangle is $54\\text{ cm}$ and the area of the square is $64\\text{ cm}^2$, find the total area of the shaded rectangles.',
          answer: '$216\\text{ cm}^2$',
          principle: 'Rearranging the shaded rectangles into one long rectangle turns the perimeter condition into a length.',
          solution:
            'The square has side $\\sqrt{64} = 8\\text{ cm}$.\nLet the unshaded rectangle have width $a$ and height $b$. The shaded rectangle beside the square has height $8$ (the side of the square) and width $a$; the shaded rectangle below the square has width $8$ and height $b$.\nThe perimeter of the unshaded rectangle is $2(a + b) = 54$, so $a + b = 27$.\nTotal shaded area:\n$$8a + 8b = 8(a + b) = 8 \\times 27 = 216\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Square side $8$; shaded rectangles have dimensions $8 \\times a$ and $8 \\times b$; $a + b = 27$ from the perimeter.' },
            { code: 'A2', text: 'Total shaded area $216\\text{ cm}^2$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt: 'Find the value of $\\sqrt{2 + \\sqrt{2 + \\sqrt{2 + \\cdots}}}$.',
          answer: '$2$',
          principle: 'Self-similarity of a nested radical: the expression under the first root equals $2 + x$ again.',
          solution:
            'Let $x = \\sqrt{2 + \\sqrt{2 + \\sqrt{2 + \\cdots}}}$. The expression repeats itself under the first root, so\n$$x = \\sqrt{2 + x} \\implies x^2 = 2 + x \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0.$$\nSince $x$ is a positive square root, $x = 2$ (the root $-1$ is rejected).\n(The value exists: the terms $\\sqrt{2},\\ \\sqrt{2+\\sqrt{2}}, \\ldots$ increase and stay below $2$, because $\\sqrt{2 + t} < 2$ whenever $t < 2$.)',
          rubric: [
            { code: 'M2', text: 'Sets $x = \\sqrt{2 + x}$ and obtains $x^2 - x - 2 = 0$.' },
            { code: 'A2', text: 'Solves and rejects the negative root: $x = 2$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'How many rectangles are there in a $6 \\times 6$ square grid (a grid of $6$ rows and $6$ columns of unit squares; count rectangles of all sizes, including squares, with sides along the grid lines)?',
          answer: '$441$',
          principle: 'A rectangle is determined by choosing two horizontal grid lines and two vertical grid lines.',
          solution:
            'The grid has $7$ horizontal and $7$ vertical lines. Each rectangle corresponds to exactly one choice of $2$ distinct horizontal lines and $2$ distinct vertical lines. Hence\n$$\\binom{7}{2} \\times \\binom{7}{2} = 21 \\times 21 = 441.$$\nCheck by size: the number of rectangles of width $w$ and height $h$ is $(7-w)(7-h)$, and summing over $w, h \\in \\{1, \\ldots, 6\\}$ gives $(6 + 5 + 4 + 3 + 2 + 1)^2 = 21^2 = 441$.',
          rubric: [
            { code: 'M2', text: 'Uses a pair of horizontal lines and a pair of vertical lines (or an equivalent systematic count).' },
            { code: 'A2', text: '$21 \\times 21 = 441$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'In the following cryptarithm, all the different letters stand for different digits. Find the $5$-digit number $EFCBH$.\n$$\\begin{array}{r} A\\,B\\,C\\,D \\\\ +\\ E\\,F\\,G\\,B \\\\ \\hline E\\,F\\,C\\,B\\,H \\end{array}$$',
          answer: '$10652$',
          principle: 'Column-by-column addition with carries, using that all letters are distinct digits.',
          solution:
            'Two $4$-digit numbers sum to less than $20\\,000$, so the leading digit of the sum is $E = 1$.\n**Thousands column.** $A + E + c = 10 + F$ where $c \\in \\{0, 1\\}$ is the carry from the hundreds column. So $F = A + c - 9$ is $0$ or $1$; since $E = 1$, we get $F = 0$ (and $A = 9 - c$).\n**Hundreds column.** $B + F + c_2 = C + 10c$, i.e. $B + c_2 = C + 10c$ (carry $c_2$ from the tens column). If $c = 1$, then $B = 9$, $c_2 = 1$ and $C = 0 = F$, a contradiction. So $c = 0$, hence $A = 9$ and $B + c_2 = C$. As $B \\ne C$, $c_2 = 1$ and $C = B + 1$.\n**Tens column.** $C + G + c_1 = B + 10$, so $(B + 1) + G + c_1 = B + 10$, i.e. $G = 9 - c_1$. Since $A = 9$, $G \\ne 9$, so $c_1 = 1$ and $G = 8$.\n**Units column.** $D + B = 10 + H$. The digits $1, 0, 9, 8$ are already used, so $B, C, D, H \\in \\{2, \\ldots, 7\\}$ are distinct. Since $H \\ge 2$, $D + B \\ge 12$, so $\\{D, B\\}$ is $\\{7, 5\\}$ or $\\{7, 6\\}$.\n- $B = 7$ gives $C = 8 = G$, impossible.\n- $B = 6$ gives $C = 7$, so $D = 7 = C$, impossible.\n- $B = 5$, $D = 7$ gives $H = 2$ and $C = 6$, all distinct.\nThe unique solution is $A = 9, B = 5, C = 6, D = 7, E = 1, F = 0, G = 8, H = 2$:\n$$9567 + 1085 = 10652,$$\nso $EFCBH = 10652$.',
          rubric: [
            { code: 'M2', text: 'Deduces $E = 1$, $F = 0$, $A = 9$ and the carries/relations $C = B + 1$, $G = 8$.' },
            { code: 'A2', text: 'Finishes the units column with $B = 5$, $D = 7$, $H = 2$, $C = 6$ and gives $10652$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt: 'Find the last five digits of $15^{2015}$.',
          answer: '$59375$',
          principle: 'The last five digits of a product depend only on the last five digits of the factors; also the Chinese Remainder Theorem with $10^5 = 2^5 \\cdot 5^5$.',
          solution:
            'Compute successive powers modulo $10^5 = 100000$:\n$$15^1 = 00015,\\ 15^2 = 00225,\\ 15^3 = 03375,\\ 15^4 = 50625,$$\n$$15^5 \\equiv 50625 \\times 15 \\equiv 59375,\\quad 15^6 \\equiv 59375 \\times 15 \\equiv 90625,\\quad 15^7 \\equiv 90625 \\times 15 \\equiv 59375.$$\nFrom $15^5$ on the last five digits alternate between $59375$ (odd exponents) and $90625$ (even exponents). Since $2015$ is odd, the last five digits are $59375$.\nCheck by the Chinese Remainder Theorem: $5^5 = 3125$ divides $15^{2015}$, so $N \\equiv 0 \\pmod{3125}$; and $15^2 = 225 \\equiv 1 \\pmod{32}$, so $15^{2015} = 15 \\cdot (15^2)^{1007} \\equiv 15 \\pmod{32}$. The number $59375 = 19 \\times 3125$ and $59375 = 32 \\times 1855 + 15$ satisfies both.',
          rubric: [
            { code: 'M2', text: 'Computes powers modulo $100000$ and finds the period $2$ pattern $59375, 90625$ (or uses CRT with $3125$ and $32$).' },
            { code: 'A2', text: 'Odd exponent selects $59375$.' }
          ]
        }
      ]
    }
  ]
};
