/**
 * Paket Soal: SASMO 2020 Grade 8 (Secondary 2)
 * Sumber: Singapore and Asian Schools Math Olympiad 2020, Secondary 2 / Grade 8 Contest (2020-SASMO-G8.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 5, 9, 12, 16, 17, dan 23 dilengkapi diagram (.webp).
 */
export default {
  id: 'sasmo-2020-g8',
  slug: 'sasmo-2020-grade-8',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'SASMO 2020 Grade 8 (Secondary 2): arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'smp8-bab1-bilangan-berpangkat',
    'smp8-bab2-teorema-pythagoras',
    'smp8-bab3-persamaan-pertidaksamaan-linear',
    'smp8-bab6-statistika'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2020 Grade 8 (Secondary 2)',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Diagrams for Questions 5, 9, 12, 16, 17, and 23 are provided as figures.',
  source: {
    org: 'SASMO',
    file: '2020-SASMO-G8.pdf',
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
            'Find the value of the following.\n$$2020 \\times 20 - 20 \\times 20 + 2020$$\n\nA. $2020$\nB. $42020$\nC. $40000$\nD. $40202$\nE. None of the above',
          answer: 'B. $42020$',
          principle:
            'Factor out the common factor $20$ from the first two terms to simplify the multiplication before adding.',
          solution:
            'Factor $20$ from the first two terms:\n$$2020 \\times 20 - 20 \\times 20 + 2020 = 20(2020 - 20) + 2020 = 20 \\times 2000 + 2020 = 40000 + 2020 = 42020.$$',
          rubric: [
            { code: 'M1', text: 'Factors out $20$ to write $20(2020 - 20) + 2020 = 20 \\times 2000 + 2020$.' },
            { code: 'A1', text: 'Computes $42020$, option B.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Simplify $3^1 \\times 3^3 \\times 3^5 \\times 3^7 \\times 3^9 \\times 3^{11} \\times 3^{13} \\times 3^{15} \\times 3^{17} \\times \\left(\\frac{1}{3}\\right)^{75}$.\n\nA. $27$\nB. $81$\nC. $243$\nD. $729$\nE. None of the above',
          answer: 'D. $729$',
          principle:
            'Combine powers with the same base by adding exponents, and rewrite $\\left(\\frac{1}{3}\\right)^{75}$ as $3^{-75}$.',
          solution:
            'Sum the odd exponents $1 + 3 + 5 + \\cdots + 17$. There are $9$ odd integers from $1$ to $17$, so their sum is $9^2 = 81$ (or $\\frac{9(1 + 17)}{2} = 81$).\nTherefore:\n$$3^{81} \\times \\left(\\frac{1}{3}\\right)^{75} = 3^{81} \\times 3^{-75} = 3^{81 - 75} = 3^6 = 729.$$',
          rubric: [
            { code: 'M1', text: 'Sums the exponents $1 + 3 + \\cdots + 17 = 81$ and subtracts $75$ to obtain $3^6$.' },
            { code: 'A1', text: 'Evaluates $3^6 = 729$, option D.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'Which of the following is equal to $ax - 2by + 3c$ if $x = 3a - 4b^2$, $y = 4b - 3c^2$, and $z = -2bc$?\n\nA. $3a^2 - 4ab^2 - 8b^2$\nB. $3a^2 - 4ab^2 - 8b^2 + 12bc^2$\nC. $3a^2 - 4ab^2 - 8b^2 - 12bc^2$\nD. $3a^2 - 4ab^2 + 8b^2 + 12bc^2$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Substitute the expressions for $x$ and $y$ directly into $ax - 2by + 3c$, distribute carefully, and ignore the unused variable $z$.',
          solution:
            'Substitute $x = 3a - 4b^2$ and $y = 4b - 3c^2$ into $ax - 2by + 3c$ (note that $z = -2bc$ is redundant):\n$$ax - 2by + 3c = a(3a - 4b^2) - 2b(4b - 3c^2) + 3c$$\n$$= 3a^2 - 4ab^2 - 8b^2 + 6bc^2 + 3c.$$\nThis expression does not match options A, B, C, or D, so the correct choice is E.',
          rubric: [
            { code: 'M1', text: 'Substitutes $x$ and $y$ and expands to $3a^2 - 4ab^2 - 8b^2 + 6bc^2 + 3c$.' },
            { code: 'A1', text: 'Identifies that none of A–D matches, option E.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Find the value of $N$ in the equation below.\n$$\\frac{1 + 2 + 3 + \\cdots + 120}{110} = \\frac{2 + 4 + 6 + N}{2}$$\n\nA. $232$\nB. $242$\nC. $252$\nD. $262$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Use the arithmetic series formula $1 + 2 + \\cdots + k = \\frac{k(k + 1)}{2}$ to evaluate the left-hand side before solving for $N$.',
          solution:
            'Evaluate the numerator on the left-hand side:\n$$1 + 2 + 3 + \\cdots + 120 = \\frac{120 \\times 121}{2} = 60 \\times 121.$$\nDivide by $110$:\n$$\\frac{60 \\times 121}{110} = \\frac{6 \\times 121}{11} = 6 \\times 11 = 66.$$\nSubstitute into the equation:\n$$66 = \\frac{2 + 4 + 6 + N}{2} = \\frac{12 + N}{2} \\implies 12 + N = 132 \\implies N = 120.$$\nSince $120$ is not among A–D, the answer is E.',
          rubric: [
            { code: 'M1', text: 'Simplifies the left-hand side to $66$ and sets up $\\frac{12 + N}{2} = 66$.' },
            { code: 'A1', text: 'Solves $N = 120$, option E.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'A large rectangle in the figure below is divided into nine smaller rectangles. The areas of five rectangles have been given. What is the sum of the areas of the remaining four rectangles?\n\nA. $\\frac{10}{3}$\nB. $2$\nC. $3$\nD. $\\frac{5}{2}$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g8/fig-5.webp',
              alt: 'A large rectangle divided into a 3 by 3 grid of nine smaller rectangles, with areas 1, 1/6, 1/2, 1/3, and 2/3 labeled inside five of the cells and four cells blank.',
              caption: 'Nine-rectangle area puzzle for Question 5.'
            }
          ],
          answer: 'A. $\\frac{10}{3}$',
          principle:
            'Rectangles in the same column share the same width and rectangles in the same row share the same height, so their area ratios are equal across rows and columns.',
          solution:
            'Label the column widths from left to right as $A, B, C$ and the row heights from top to bottom as $D, E, F$. Let the unknown areas be $W$ (top-left), $X$ (top-right), $Y$ (middle), and $Z$ (bottom-right).\n1. Comparing rows $2$ and $3$ in column $1$: $\\frac{E}{F} = \\frac{1/6}{1/3} = \\frac{1}{2}$, so:\n$$Y = \\frac{1}{2} \\times \\frac{2}{3} = \\frac{1}{3}, \\qquad Z = 2 \\times \\frac{1}{2} = 1.$$\n2. Comparing columns $1$ and $2$ in row $3$: $\\frac{A}{B} = \\frac{1/3}{2/3} = \\frac{1}{2}$, so:\n$$W = \\frac{1}{2} \\times 1 = \\frac{1}{2}.$$\n3. Comparing columns $1$ and $3$ in row $2$: $\\frac{C}{A} = \\frac{1/2}{1/6} = 3$, so:\n$$X = 3W = 3 \\times \\frac{1}{2} = \\frac{3}{2}.$$\n\nTherefore, the sum of the areas of the remaining four rectangles is:\n$$W + X + Y + Z = \\frac{1}{2} + \\frac{3}{2} + \\frac{1}{3} + 1 = 3 + \\frac{1}{3} = \\frac{10}{3}.$$',
          rubric: [
            { code: 'M1', text: 'Uses row and column area ratios to find $W = \\frac{1}{2}$, $X = \\frac{3}{2}$, $Y = \\frac{1}{3}$, and $Z = 1$.' },
            { code: 'A1', text: 'Sums the four areas to $\\frac{10}{3}$, option A.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'Denote $n \\Delta m = (n - 1)(n - 2) \\cdots (n - m)$. For example, $5 \\Delta 3 = 4 \\times 3 \\times 2$. If $8 \\Delta x = 840$, what is the value of $x \\Delta (x - 3)$?\n\nA. $6$\nB. $12$\nC. $24$\nD. $36$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Factor $840$ as a product of consecutive decreasing integers starting from $7$ to determine $x$, then apply the definition of $\\Delta$.',
          solution:
            'By definition, $8 \\Delta x = 7 \\times 6 \\times \\cdots \\times (8 - x) = 840$.\nDivide $840$ by consecutive decreasing integers starting from $7$:\n$$7 \\times 6 = 42, \\qquad 42 \\times 5 = 210, \\qquad 210 \\times 4 = 840.$$\nHence the last factor is $8 - x = 4$, which gives $x = 4$.\nNow compute $x \\Delta (x - 3)$:\n$$4 \\Delta (4 - 3) = 4 \\Delta 1 = 4 - 1 = 3.$$\nSince $3$ is not listed among A–D, the answer is E.',
          rubric: [
            { code: 'M1', text: 'Factors $840 = 7 \\times 6 \\times 5 \\times 4$ to deduce $8 - x = 4$, so $x = 4$.' },
            { code: 'A1', text: 'Evaluates $4 \\Delta 1 = 3$, option E.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'The value of $\\frac{2022^3 - 2 \\times 2022^2 - 2020}{2021^3 + 2 \\times 2021^2 - 2023}$ can be written as $\\frac{a}{b}$ where $\\text{HCF}(a, b) = 1$. What is the value of $a + b$?\n\nA. $4039$\nB. $4041$\nC. $4043$\nD. $4045$\nE. None of the above',
          answer: 'C. $4043$',
          principle:
            'Substitute $n = 2021$ (so $2022 = n + 1$) to turn the large numerical expression into polynomials that factor and cancel.',
          solution:
            'Let $n = 2021$. Then $2022 = n + 1$, $2020 = n - 1$, and $2023 = n + 2$.\nRewrite the numerator:\n$$(n + 1)^3 - 2(n + 1)^2 - (n - 1) = (n + 1)^2[(n + 1) - 2] - (n - 1)$$\n$$= (n + 1)^2(n - 1) - (n - 1) = (n - 1)[(n + 1)^2 - 1] = (n - 1)(n^2 + 2n) = n(n - 1)(n + 2).$$\nRewrite the denominator:\n$$n^3 + 2n^2 - (n + 2) = n^2(n + 2) - (n + 2) = (n + 2)(n^2 - 1) = (n - 1)(n + 1)(n + 2).$$\nCancelling the common factors $(n - 1)(n + 2)$ gives:\n$$\\frac{n(n - 1)(n + 2)}{(n - 1)(n + 1)(n + 2)} = \\frac{n}{n + 1} = \\frac{2021}{2022}.$$\nSince $\\text{HCF}(2021, 2022) = 1$, we have $a = 2021$ and $b = 2022$, so $a + b = 2021 + 2022 = 4043$.',
          rubric: [
            { code: 'M1', text: 'Substitutes $n = 2021$ and factors numerator and denominator to simplify to $\\frac{n}{n + 1} = \\frac{2021}{2022}$.' },
            { code: 'A1', text: 'Computes $a + b = 4043$, option C.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'If $x < -4$, simplify the expression $\\left|1 - \\sqrt{(x + 3)^2}\\right|$.\n\nA. $x + 2$\nB. $-x - 2$\nC. $x + 4$\nD. $-x - 4$\nE. None of the above',
          answer: 'D. $-x - 4$',
          principle:
            'Use $\\sqrt{u^2} = |u|$ and evaluate each absolute value by checking the sign of its interior expression for $x < -4$.',
          solution:
            'Since $x < -4$, we have $x + 3 < -1 < 0$, so:\n$$\\sqrt{(x + 3)^2} = |x + 3| = -(x + 3) = -x - 3.$$\nSubstitute this into the expression:\n$$\\left|1 - \\sqrt{(x + 3)^2}\\right| = |1 - (-x - 3)| = |x + 4|.$$\nAgain, since $x < -4$, we have $x + 4 < 0$, so:\n$$|x + 4| = -(x + 4) = -x - 4.$$',
          rubric: [
            { code: 'M1', text: 'Applies $\\sqrt{(x+3)^2} = |x + 3| = -x - 3$ for $x < -4$ to obtain $|x + 4|$.' },
            { code: 'A1', text: 'Simplifies $|x + 4| = -x - 4$, option D.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'In the figure below, $HE$ is parallel to $DB$, $GE$ is perpendicular to $BG$, and $DF$ is also perpendicular to $HF$. If $\\angle H = 138^\\circ$, and the measurement of $\\angle B$ is $4$ degrees more than the measurement of $\\angle D$, find the measurement of $\\angle E$.\n\nA. $134^\\circ$\nB. $44^\\circ$\nC. $46^\\circ$\nD. $138^\\circ$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g8/fig-9.webp',
              alt: 'A hexagon with vertices labeled H, E, G, B, D, and F in clockwise order, where top edge HE and bottom edge DB are horizontal.',
              caption: 'Hexagon HEGBDF for Question 9.'
            }
          ],
          answer: 'A. $134^\\circ$',
          principle:
            'Draw an auxiliary line through $F$ parallel to $HE$ and $DB$ to find $\\angle D$, then use the interior angle sum of a hexagon, $(6 - 2) \\times 180^\\circ = 720^\\circ$.',
          solution:
            'Extend a ray $FX$ inside the hexagon from $F$ parallel to both $HE$ and $DB$.\nSince $HE \\parallel FX$, co-interior angles sum to $180^\\circ$, so:\n$$\\angle HFX = 180^\\circ - \\angle H = 180^\\circ - 138^\\circ = 42^\\circ.$$\nBecause $DF \\perp HF$, $\\angle HFD = 90^\\circ$, so:\n$$\\angle DFX = 90^\\circ - 42^\\circ = 48^\\circ.$$\nSince $FX \\parallel DB$, co-interior angles give:\n$$\\angle D = 180^\\circ - 48^\\circ = 132^\\circ.$$\nThen $\\angle B = \\angle D + 4^\\circ = 136^\\circ$. We are also given $\\angle G = 90^\\circ$ and $\\angle F = 90^\\circ$.\nUsing the sum of interior angles of hexagon $HEGBDF$, $(6 - 2) \\times 180^\\circ = 720^\\circ$:\n$$\\angle E = 720^\\circ - (\\angle H + \\angle F + \\angle D + \\angle B + \\angle G)$$\n$$= 720^\\circ - (138^\\circ + 90^\\circ + 132^\\circ + 136^\\circ + 90^\\circ) = 720^\\circ - 586^\\circ = 134^\\circ.$$',
          rubric: [
            { code: 'M1', text: 'Finds $\\angle D = 132^\\circ$ and $\\angle B = 136^\\circ$ using parallel lines and right angles.' },
            { code: 'A1', text: 'Subtracts from $720^\\circ$ to get $\\angle E = 134^\\circ$, option A.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'In the list below, how many fractions are in its simplest form?\n$$\\frac{1}{2020}, \\frac{2}{2020}, \\frac{3}{2020}, \\cdots, \\frac{199}{2020}, \\frac{200}{2020}$$\n\nA. $121$\nB. $59$\nC. $79$\nD. $144$\nE. None of the above',
          answer: 'C. $79$',
          principle:
            'Factorize $2020$ into primes and use the Principle of Inclusion–Exclusion to count numerators from $1$ to $200$ sharing no prime factor with $2020$.',
          solution:
            'Prime factorize $2020$:\n$$2020 = 2^2 \\times 5 \\times 101.$$\nA fraction $\\frac{k}{2020}$ is in simplest form if and only if $k$ is not divisible by $2$, $5$, or $101$.\nAmong $1, 2, \\ldots, 200$:\n- Multiples of $2$: $\\frac{200}{2} = 100$.\n- Multiples of $5$: $\\frac{200}{5} = 40$.\n- Multiples of $10$: $\\frac{200}{10} = 20$.\n- Multiples of $101$: only $101$ itself ($1$ number, which is not divisible by $2$ or $5$).\n\nBy Inclusion–Exclusion, the number of numerators divisible by $2$, $5$, or $101$ is:\n$$100 + 40 - 20 + 1 = 121.$$\nThus, the number of fractions in simplest form is:\n$$200 - 121 = 79.$$',
          rubric: [
            { code: 'M1', text: 'Factorizes $2020 = 2^2 \\times 5 \\times 101$ and counts $121$ reducible numerators via Inclusion–Exclusion.' },
            { code: 'A1', text: 'Finds $200 - 121 = 79$, option C.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'Boris wants to write all five-digit numbers using all the digits $1, 2, 3, 4$ and $5$. The numbers are such that the even digits are in increasing order from left to right, for example $32145$ and $25341$. How many numbers can Boris write?\n\nA. $45$\nB. $52$\nC. $60$\nD. $64$\nE. None of the above',
          answer: 'C. $60$',
          principle:
            'By symmetry, exactly half of all $5!$ permutations of $\\{1, 2, 3, 4, 5\\}$ place $2$ before $4$.',
          solution:
            'Without restrictions, there are $5! = 120$ five-digit numbers using each of the digits $1, 2, 3, 4, 5$ once.\nThe only even digits are $2$ and $4$, so requiring the even digits to be in increasing order from left to right means $2$ appears to the left of $4$.\nFor every valid number where $2$ appears before $4$, swapping $2$ and $4$ gives a unique number where $4$ appears before $2$. Hence exactly half of the $120$ permutations satisfy the condition:\n$$\\frac{120}{2} = 60.$$',
          rubric: [
            { code: 'M1', text: 'Recognizes there are $5! = 120$ permutations and half have $2$ before $4$ by symmetry.' },
            { code: 'A1', text: 'Computes $60$, option C.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'In quadrilateral $ABCD$, $M$ and $N$ are midpoints of sides $AB$ and $DC$, respectively. The segments $AN, BN, DM$ and $CM$ divide the quadrilateral into $7$ parts $S_1, S_2, S_3, S_4, S_5, S_6$ and $S_7$ of different areas. Which of the following relationships involving the areas is true?\n\nA. $S_2 + S_4 = S_6$\nB. $S_1 + S_7 = S_4$\nC. $S_2 + S_3 = S_4$\nD. $S_1 + S_6 = S_4$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g8/fig-12.webp',
              alt: 'Quadrilateral ABCD with midpoint M on top side AB and midpoint N on bottom side DC; segments AN, BN, DM, and CM divide the interior into seven regions labeled S_1 through S_7.',
              caption: 'Quadrilateral ABCD divided into seven regions for Question 12.'
            }
          ],
          answer: 'B. $S_1 + S_7 = S_4$',
          principle:
            'Compare $\\text{Area}(\\triangle DMC)$ with $\\text{Area}(\\triangle ADN) + \\text{Area}(\\triangle BNC)$ using perpendicular heights from $A$, $M$, and $B$ to line $DC$.',
          solution:
            'Drop perpendiculars from $A$, $M$, and $B$ to line $DC$ with lengths $h_a$, $h_m$, and $h_b$, respectively. Since $M$ is the midpoint of $AB$, $h_m$ is the midline of the trapezoid formed by the perpendiculars from $A$ and $B$ to $DC$, so:\n$$h_m = \\frac{h_a + h_b}{2} \\implies h_a + h_b = 2h_m.$$\nSince $N$ is the midpoint of $DC$, $DN = NC = \\frac{1}{2}DC$. Thus:\n$$\\text{Area}(\\triangle ADN) + \\text{Area}(\\triangle BNC) = \\frac{1}{2} \\cdot DN \\cdot h_a + \\frac{1}{2} \\cdot NC \\cdot h_b = \\frac{1}{2} \\cdot DN \\cdot (h_a + h_b) = DN \\cdot h_m.$$\nOn the other hand:\n$$\\text{Area}(\\triangle DMC) = \\frac{1}{2} \\cdot DC \\cdot h_m = \\frac{1}{2} \\cdot (2 \\cdot DN) \\cdot h_m = DN \\cdot h_m.$$\nHence $\\text{Area}(\\triangle ADN) + \\text{Area}(\\triangle BNC) = \\text{Area}(\\triangle DMC)$. Expressing these in terms of the seven regions:\n$$(S_1 + S_3) + (S_6 + S_7) = S_3 + S_4 + S_6.$$\nCancelling $S_3 + S_6$ from both sides yields:\n$$S_1 + S_7 = S_4.$$',
          rubric: [
            { code: 'M1', text: 'Shows $\\text{Area}(\\triangle ADN) + \\text{Area}(\\triangle BNC) = \\text{Area}(\\triangle DMC)$ using $h_m = \\frac{h_a + h_b}{2}$ and $DN = NC$.' },
            { code: 'A1', text: 'Cancels $S_3 + S_6$ to get $S_1 + S_7 = S_4$, option B.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'If today is Tuesday, what day of the week will it be $2^{2020}$ days from today?\n\nA. Wednesday\nB. Thursday\nC. Friday\nD. Saturday\nE. None of the above',
          answer: 'B. Thursday',
          principle:
            'Find the repeating cycle of powers of $2$ modulo $7$ since there are $7$ days in a week.',
          solution:
            'Compute the remainders of $2^n$ when divided by $7$:\n$$2^1 \\equiv 2, \\quad 2^2 \\equiv 4, \\quad 2^3 \\equiv 1, \\quad 2^4 \\equiv 2, \\quad \\ldots \\pmod{7}.$$\nThe remainders repeat with period $3$ ($2, 4, 1, 2, 4, 1, \\ldots$). Since $2020 = 3 \\times 673 + 1$, we have $2020 \\equiv 1 \\pmod{3}$, so:\n$$2^{2020} = (2^3)^{673} \\times 2^1 \\equiv 1^{673} \\times 2 = 2 \\pmod{7}.$$\nCounting $2$ days forward from Tuesday gives Thursday.',
          rubric: [
            { code: 'M1', text: 'Finds the period-$3$ cycle of $2^n \\pmod{7}$ and reduces $2^{2020} \\equiv 2 \\pmod{7}$.' },
            { code: 'A1', text: 'Advances $2$ days from Tuesday to Thursday, option B.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Ellie, Violet, Audrey, Tom and Chris are Secondary 1 or 3 students. They study in either Greenwich Secondary School or Westwood Secondary School. It is also given that:\n- Tom and Chris are from different schools.\n- Ellie and Audrey go to the same school.\n- Three students go to Greenwich Secondary School and the other two are from Westwood Secondary School.\n- Violet and Chris are from the same grade.\n- Audrey and Tom study at different levels.\n- Three students study in Secondary 1 and the other two students in Secondary 3.\n\nIf one of them is Secondary 3 student from Westwood Secondary School, who is that person?\n\nA. Ellie\nB. Violet\nC. Audrey\nD. Tom\nE. Chris',
          answer: 'D. Tom',
          principle:
            'Use the count constraints ($3$ vs $2$) on pairs sharing the same attribute or opposite attributes to pin down schools first and grades second.',
          solution:
            'First determine the schools ($3$ at Greenwich, $2$ at Westwood):\n- Since Tom and Chris are in different schools, one is at Greenwich and one is at Westwood.\n- Among the remaining three (Ellie, Audrey, Violet), $2$ are at Greenwich and $1$ is at Westwood.\n- Since Ellie and Audrey go to the same school, they cannot both be at Westwood (there is only $1$ Westwood spot left among the three). Thus Ellie and Audrey are at Greenwich, and Violet is at Westwood.\n\nNext determine the grades ($3$ in Sec 1, $2$ in Sec 3):\n- Since Audrey and Tom are at different levels, one is in Sec 1 and one is in Sec 3.\n- Among the remaining three (Violet, Chris, Ellie), $2$ are in Sec 1 and $1$ is in Sec 3.\n- Since Violet and Chris are in the same grade, they must both be in Sec 1 (and Ellie is in Sec 3).\n\nNow check who can be a Secondary 3 student from Westwood Secondary School:\n- Ellie and Audrey are from Greenwich.\n- Violet and Chris are in Secondary 1.\nThe only remaining student is Tom, so Tom is the Secondary 3 student from Westwood Secondary School.',
          rubric: [
            { code: 'M1', text: 'Deduces Ellie and Audrey are at Greenwich (eliminating both), and Violet and Chris are in Sec 1 (eliminating both).' },
            { code: 'A1', text: 'Concludes Tom is the Sec 3 Westwood student, option D.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'In Mathematics, the product of the first $n$ positive integers is written as $n! = n \\times (n - 1) \\times \\cdots 1$. For example, $2! = 2 \\times 1$ and $7! = 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1$. How many integers from $1$ to $40$ cannot be the number of consecutive digit "0"s at the end of $n!$, for some integer $n$?\n\nA. $0$\nB. $6$\nC. $7$\nD. $10$\nE. None of the above',
          answer: 'C. $7$',
          principle:
            'The number of trailing zeros in $n!$ increases only at multiples of $5$, jumping by $k$ whenever $n$ is a multiple of $5^k$ (skipping $k - 1$ values).',
          solution:
            'The number of trailing zeros of $n!$ equals the exponent of $5$ in $n!$, given by Legendre\'s formula:\n$$v_5(n!) = \\left\\lfloor\\frac{n}{5}\\right\\rfloor + \\left\\lfloor\\frac{n}{25}\\right\\rfloor + \\cdots$$\nWhenever $n$ crosses a multiple of $5$, $v_5(n!)$ increases by $1$ at ordinary multiples of $5$, but jumps by $2$ at multiples of $25$ (up to $n = 124$, where $25, 50, 75, 100$ are multiples of $25$, and at $n = 125$ it jumps by $3$):\n- $24! \\to 4$ zeros, $25! \\to 6$ zeros (skips $5$).\n- $49! \\to 10$ zeros, $50! \\to 12$ zeros (skips $11$).\n- $74! \\to 16$ zeros, $75! \\to 18$ zeros (skips $17$).\n- $99! \\to 22$ zeros, $100! \\to 24$ zeros (skips $23$).\n- $124! \\to 28$ zeros, $125! \\to 31$ zeros (skips $29$ and $30$).\n- $149! \\to 35$ zeros, $150! \\to 37$ zeros (skips $36$).\n- $174! \\to 41$ zeros, $175! \\to 43$ zeros (above $40$).\n\nThus the integers from $1$ to $40$ that cannot occur are $5, 11, 17, 23, 29, 30, 36$ — a total of $7$ integers.',
          rubric: [
            { code: 'M1', text: 'Identifies the skipped zero counts at multiples of $25$ and $125$: $5, 11, 17, 23, 29, 30, 36$.' },
            { code: 'A1', text: 'Counts $7$ impossible integers, option C.' }
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
            'The following bar chart shows the responses made by all Secondary 2 students from Integrity Secondary School in a multiple-choice question. All the horizontal lines are equally spaced. The correct answer scores $2$ points, $0$ points for no response and $-1$ point for the wrong answer. The total points scored by all the students is $-240$. If the correct answer is B, how many students solved the question correctly?',
          figures: [
            {
              src: '/papers/sasmo-2020-g8/fig-16.webp',
              alt: 'Vertical bar chart titled Secondary 2 students responses with six bars labeled A, B, C, D, E, and No response drawn against equally spaced horizontal gridlines.',
              caption: 'Bar chart of Secondary 2 student responses for Question 16.'
            }
          ],
          answer: '$280$',
          principle:
            'Let one vertical grid spacing equal $x$ students, read the bar heights in grid units, and equate the total score to $-240$.',
          solution:
            'Let $1$ vertical grid spacing represent $x$ students. Reading the six bar heights from the equally spaced horizontal lines:\n- A: $3x$\n- B: $7x$\n- C: $5x$\n- D: $8x$\n- E: $4x$\n- No response: $4x$\n\nStudents who chose B (correct) scored $2$ points each, students who chose A, C, D, or E (wrong) scored $-1$ point each, and "No response" scored $0$ points:\n$$\\text{Total points} = 2(7x) - 1(3x + 5x + 8x + 4x) + 0(4x) = 14x - 20x = -6x.$$\nSetting $-6x = -240$ gives $x = 40$.\nTherefore, the number of students who answered B correctly is:\n$$7x = 7 \\times 40 = 280.$$',
          rubric: [
            { code: 'M2', text: 'Reads the bar heights ($3, 7, 5, 8, 4, 4$ units) and forms $14x - 20x = -240 \\implies x = 40$.' },
            { code: 'A2', text: 'Computes $7 \\times 40 = 280$ students.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt: 'How many squares are there in the figure below?',
          figures: [
            {
              src: '/papers/sasmo-2020-g8/fig-17.webp',
              alt: 'Two 8 by 8 square grids placed side by side and offset vertically by 4 units so they share a vertical boundary segment of length 4 small squares.',
              caption: 'Composite grid of two 8 by 8 squares for Question 17.'
            }
          ],
          answer: '$418$',
          principle:
            'Count the squares lying completely inside each $8 \\times 8$ grid first, then count any squares that straddle the shared vertical boundary segment.',
          solution:
            'The figure consists of two $8 \\times 8$ square grids placed side by side and offset vertically by $4$ units, sharing a vertical boundary segment of length $4$ small squares.\n\n1. **Squares inside one $8 \\times 8$ grid:**\nEach $8 \\times 8$ grid contains squares of sizes $1 \\times 1$ through $8 \\times 8$:\n$$1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2 + 7^2 + 8^2 = 204.$$\nAcross both grids, this gives $2 \\times 204 = 408$ squares.\n\n2. **Squares crossing the shared $4$-unit vertical segment:**\nAny square straddling the shared boundary must lie vertically within the $4$-unit-tall shared band, so its side length is between $2$ and $4$:\n- **$2 \\times 2$ squares:** $1$ horizontal position $\\times$ $3$ vertical positions $= 3$.\n- **$3 \\times 3$ squares:** $2$ horizontal positions $\\times$ $2$ vertical positions $= 4$.\n- **$4 \\times 4$ squares:** $3$ horizontal positions $\\times$ $1$ vertical position $= 3$.\n\nAdding everything together gives:\n$$408 + 3 + 4 + 3 = 418.$$',
          rubric: [
            { code: 'M2', text: 'Counts $2 \\times 204 = 408$ squares inside the two $8 \\times 8$ grids and systematically counts $3 + 4 + 3 = 10$ boundary-crossing squares.' },
            { code: 'A2', text: 'Total $418$ squares.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            "Chloe and her cousin left home for the cinema at $11.40$ a.m. Chloe walked at $100\\text{ metres/minute}$ while her cousin walked at $60\\text{ m/min}$. Ten minutes after arriving at the cinema, Chloe realised she had forgot her wallet and so she walked back home. On her way home, Chloe met her cousin who was still on the way to cinema, at $12.10$ p.m. How far away was Chloe's home from the cinema, in metres?",
          answer: '$1900$',
          principle:
            'At the meeting time ($30$ minutes after departure), the sum of the distance Chloe walked back from the cinema and the distance her cousin walked from home equals the home-to-cinema distance.',
          solution:
            'Let $x$ minutes be the time Chloe took to walk from home to the cinema, so the distance between home and the cinema is $100x$ metres.\nFrom $11.40$ a.m. to $12.10$ p.m. is $30$ minutes:\n- Her cousin walked continuously for $30$ minutes at $60\\text{ m/min}$, covering $60 \\times 30 = 1800$ metres from home.\n- Chloe spent $x$ minutes walking to the cinema and $10$ minutes at the cinema, so she walked back toward home for $(30 - x - 10) = (20 - x)$ minutes, covering $100(20 - x) = 2000 - 100x$ metres from the cinema.\n\nBecause they met at $12.10$ p.m., their distances from the two ends sum to the full distance:\n$$1800 + (2000 - 100x) = 100x \\implies 3800 = 200x \\implies x = 19.$$\nThus, the distance from Chloe\'s home to the cinema is:\n$$100 \\times 19 = 1900\\text{ metres}.$$',
          rubric: [
            { code: 'M2', text: 'Computes the cousin\'s distance $1800\\text{ m}$ and Chloe\'s return distance $100(20 - x)$, setting $1800 + 2000 - 100x = 100x$.' },
            { code: 'A2', text: 'Solves $x = 19$ minutes and obtains $1900$ metres.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'Find the sum of all positive integers $n$ so that $n^2 + 11n + 52$ is a perfect square.',
          answer: '$17$',
          principle:
            'Multiply by $4$ and complete the square to transform the quadratic into a difference of two squares equal to a constant.',
          solution:
            'Let $n^2 + 11n + 52 = x^2$ for some positive integer $x$. Multiply both sides by $4$ and complete the square:\n$$4n^2 + 44n + 208 = 4x^2 \\implies (2n + 11)^2 + 87 = (2x)^2.$$\nLet $m = 2n + 11$. Since $n \\ge 1$, $m \\ge 13$ is an odd integer:\n$$(2x)^2 - m^2 = 87 \\implies (2x + m)(2x - m) = 87.$$\nSince $2x + m > 2x - m > 0$ and $87 = 1 \\times 87 = 3 \\times 29$, there are two factor pairs:\n1. $2x + m = 29$ and $2x - m = 3 \\implies m = \\frac{29 - 3}{2} = 13 \\implies 2n + 11 = 13 \\implies n = 1$.\n2. $2x + m = 87$ and $2x - m = 1 \\implies m = \\frac{87 - 1}{2} = 43 \\implies 2n + 11 = 43 \\implies n = 16$.\n\nCheck: for $n = 1$, $1 + 11 + 52 = 64 = 8^2$; for $n = 16$, $256 + 176 + 52 = 484 = 22^2$.\nHence the sum of all such positive integers $n$ is:\n$$1 + 16 = 17.$$',
          rubric: [
            { code: 'M2', text: 'Completes the square to $(2x + 2n + 11)(2x - 2n - 11) = 87$ and tests the factor pairs of $87$.' },
            { code: 'A2', text: 'Finds $n = 1$ and $n = 16$, summing to $17$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'The six-digit number $7A34B4$ is divisible by $36$. If $B$ is a prime number, find the value of $A$.',
          answer: '$7$',
          principle:
            'Divisibility by $36$ requires divisibility by both $4$ (last two digits) and $9$ (sum of digits), since $\\gcd(4, 9) = 1$.',
          solution:
            'Since $36 = 4 \\times 9$ and $\\gcd(4, 9) = 1$, the number $7A34B4$ must be divisible by both $4$ and $9$:\n1. **Divisibility by $4$:** The two-digit ending $B4$ must be divisible by $4$. Among prime digits $B \\in \\{2, 3, 5, 7\\}$, only $24$ is divisible by $4$, so $B = 2$.\n2. **Divisibility by $9$:** The sum of the digits must be a multiple of $9$:\n$$7 + A + 3 + 4 + 2 + 4 = 20 + A.$$\nSince $A$ is a single digit ($0 \\le A \\le 9$), the only multiple of $9$ in $[20, 29]$ is $27$, giving:\n$$20 + A = 27 \\implies A = 7.$$',
          rubric: [
            { code: 'M2', text: 'Uses divisibility by $4$ and primality of $B$ to get $B = 2$, then applies the divisibility rule for $9$.' },
            { code: 'A2', text: 'Finds $A = 7$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'The operator $\\wedge$ acts on two integers to give the following outcomes:\n$$4 \\wedge 8 = 2412$$\n$$5 \\wedge 9 = 2812$$\n$$1 \\wedge 7 = 1618$$\n$$2 \\wedge 3 = 103$$\n\nWhat is the value of $7 \\wedge 8$?',
          answer: '$303$',
          principle:
            'Split each outcome into two concatenated parts formed from $a + b$ and $b - a$.',
          solution:
            'Notice that each outcome concatenates $2(a + b)$ followed by $3(b - a)$:\n- $4 \\wedge 8$: $2(4 + 8) = 24$ and $3(8 - 4) = 12 \\implies 2412$.\n- $5 \\wedge 9$: $2(5 + 9) = 28$ and $3(9 - 5) = 12 \\implies 2812$.\n- $1 \\wedge 7$: $2(1 + 7) = 16$ and $3(7 - 1) = 18 \\implies 1618$.\n- $2 \\wedge 3$: $2(2 + 3) = 10$ and $3(3 - 2) = 3 \\implies 103$.\n\nApplying the same rule to $7 \\wedge 8$:\n$$2(7 + 8) = 30, \\qquad 3(8 - 7) = 3,$$\nwhich concatenates to $303$.',
          rubric: [
            { code: 'M2', text: 'Identifies the concatenation pattern $[2(a + b)][3(b - a)]$.' },
            { code: 'A2', text: 'Computes $7 \\wedge 8 = 303$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'An election for the mayoralty post consists of $5$ candidates: A, B, C, D, and E. There are $1400$ eligible voters. In the middle of the manual count, A got $300$ votes, B got $154$ votes, C got $194$ votes, D got $281$ votes, and E got $266$ votes. There were also $9$ invalid votes. What is the least number of votes that A needs to get in order to ensure that he wins the mayoralty post?',
          answer: '$389$',
          principle:
            'Consider the worst-case scenario where all remaining uncounted votes are split solely between A and the closest challenger D.',
          solution:
            'First calculate the number of remaining uncounted votes:\n$$1400 - (300 + 154 + 194 + 281 + 266 + 9) = 1400 - 1204 = 196\\text{ votes}.$$\nIn the worst-case scenario for A, all $196$ remaining votes go only to A or to the closest runner-up, D (who currently has $281$ votes).\nIf A receives $k$ of the remaining $196$ votes and D receives $196 - k$, then A is guaranteed to beat D strictly when:\n$$300 + k > 281 + (196 - k) \\implies 2k > 177 \\implies k \\ge 89.$$\nThus, the least total number of votes A needs to ensure victory is:\n$$300 + 89 = 389.$$',
          rubric: [
            { code: 'M2', text: 'Finds $196$ remaining votes and sets up $300 + k > 281 + (196 - k)$ against runner-up D.' },
            { code: 'A2', text: 'Obtains $k = 89$ additional votes, for a total of $389$ votes.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'In the diagram, $ABC$ is a right-angled triangle with $\\angle C = 90^\\circ$. Points $D$ and $E$ are on the segments $BC$ and $AC$ such that $BD : DC = 2 : 3$, $AE : EC = 3 : 2$, $AD = 4$, and $BE = \\sqrt{10}$. Find the value of $57 \\times AB^2$.',
          figures: [
            {
              src: '/papers/sasmo-2020-g8/fig-23.webp',
              alt: 'Right-angled triangle ABC with right angle at bottom-left vertex C, point E on vertical leg AC, point D on horizontal leg BC, and intersecting segments AD and BE.',
              caption: 'Right-angled triangle ABC with segments AD and BE for Question 23.'
            }
          ],
          answer: '$1200$',
          principle:
            'Set $AC = 5x$ and $BC = 5y$ from the given $2:3$ and $3:2$ ratios, then apply the Pythagorean theorem to $\\triangle EBC$, $\\triangle ADC$, and $\\triangle ABC$.',
          solution:
            'Let $AC = 5x$ and $BC = 5y$. From the given ratios, $EC = 2x$ (with $AE = 3x$) and $CD = 3y$ (with $BD = 2y$).\nApplying the Pythagorean theorem to $\\triangle EBC$ and $\\triangle ADC$:\n$$EC^2 + BC^2 = BE^2 \\implies (2x)^2 + (5y)^2 = 10 \\implies 4x^2 + 25y^2 = 10,$$\n$$AC^2 + CD^2 = AD^2 \\implies (5x)^2 + (3y)^2 = 16 \\implies 25x^2 + 9y^2 = 16.$$\nMultiply the first equation by $25$ and the second by $4$, then subtract:\n$$(100x^2 + 625y^2) - (100x^2 + 36y^2) = 250 - 64 \\implies 589y^2 = 186 \\implies y^2 = \\frac{186}{589} = \\frac{6}{19}.$$\nSubstitute $y^2 = \\frac{6}{19}$ back into $4x^2 + 25y^2 = 10$:\n$$4x^2 = 10 - \\frac{150}{19} = \\frac{40}{19} \\implies x^2 = \\frac{10}{19}.$$\nFinally, apply the Pythagorean theorem to $\\triangle ABC$:\n$$AB^2 = AC^2 + BC^2 = 25(x^2 + y^2) = 25\\left(\\frac{10}{19} + \\frac{6}{19}\\right) = \\frac{400}{19}.$$\nTherefore:\n$$57 \\times AB^2 = 57 \\times \\frac{400}{19} = 3 \\times 400 = 1200.$$',
          rubric: [
            { code: 'M2', text: 'Forms $4x^2 + 25y^2 = 10$ and $25x^2 + 9y^2 = 16$ and solves $x^2 = \\frac{10}{19}, y^2 = \\frac{6}{19}$.' },
            { code: 'A2', text: 'Computes $AB^2 = \\frac{400}{19}$ and $57 \\times AB^2 = 1200$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'Two-way roads are constructed between Town A, Town B and Town C. It is given that the number of direct roads between any two of the towns is at least three and at most ten. One can go from Town A to Town C directly or via Town B in a total of $33$ different ways. One can go from Town B to Town C directly or via Town A in a total of $23$ different ways. In how many ways can one go from Town B to Town A?',
          answer: '$21$',
          principle:
            'Subtract the two route-count equations and factor the resulting bilinear expression to apply integer bounds $3 \\le a, b, c \\le 10$.',
          solution:
            'Let $c$ be the number of direct roads between A and B, $a$ between B and C, and $b$ between C and A, where $3 \\le a, b, c \\le 10$ are integers.\nFrom the two given conditions:\n$$b + ca = 33 \\qquad (1)$$\n$$a + bc = 23 \\qquad (2)$$\nSubtract $(2)$ from $(1)$ and factor:\n$$(b + ca) - (a + bc) = 33 - 23 \\implies c(a - b) - (a - b) = 10 \\implies (c - 1)(a - b) = 10.$$\nSince $3 \\le c \\le 10$, we have $2 \\le c - 1 \\le 9$. The positive divisors of $10$ in $[2, 9]$ are $2$ and $5$:\n- **Case 1:** $c - 1 = 2$ and $a - b = 5$, so $c = 3$ and $a = b + 5$. Substituting into $(1)$ gives $b + 3(b + 5) = 33 \\implies 4b = 18$, which has no integer solution.\n- **Case 2:** $c - 1 = 5$ and $a - b = 2$, so $c = 6$ and $a = b + 2$. Substituting into $(1)$ gives $b + 6(b + 2) = 33 \\implies 7b = 21 \\implies b = 3$, and $a = 5$.\n\nAll bounds $3 \\le a, b, c \\le 10$ are satisfied by $(a, b, c) = (5, 3, 6)$. Thus, the number of ways to go from Town B to Town A (directly or via Town C) is:\n$$c + ab = 6 + 5 \\times 3 = 21.$$',
          rubric: [
            { code: 'M2', text: 'Subtracts $b + ca = 33$ and $a + bc = 23$ to obtain $(c - 1)(a - b) = 10$ and finds $(a, b, c) = (5, 3, 6)$.' },
            { code: 'A2', text: 'Computes $c + ab = 21$ ways.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'In the following cryptarithm, all the different letters stand for different digits.\n$$\\begin{array}{crrrrr} & & & W & I & N \\\\ + & S & A & S & M & O \\\\ \\hline & M & E & D & A & L \\end{array}$$\nIf $N = 4$ and $M = 6$, find the value of the sum $M + E + D + A + L$.',
          answer: '$19$',
          principle:
            'Determine the leading digits $S, A, E$ from the ten-thousands and thousands carries first, then resolve the remaining five distinct digits by testing the ones column.',
          solution:
            'We are given $N = 4$ and $M = 6$ in $WIN + SASMO = MEDAL$:\n1. **Ten-thousands column:** Since $WIN$ is a $3$-digit number, the carryover into the ten-thousands column is at most $1$. Because $S \\ne M = 6$, there must be a carryover of $1$, giving $S + 1 = 6 \\implies S = 5$.\n2. **Thousands column:** For $A$ plus the hundreds carryover (at most $1$) to produce a carryover into the ten-thousands column, we must have $A + 1 \\ge 10$, so $A = 9$, and $9 + 1 = 10$ gives $E = 0$.\n\nSubstituting $N = 4, M = 6, S = 5, A = 9, E = 0$, the unused digits for $\\{W, I, O, D, L\\}$ are $\\{1, 2, 3, 7, 8\\}$, and the addition becomes:\n$$WI4 + 5956O = 60D9L.$$\nConsider the ones column $4 + O \\equiv L \\pmod{10}$ with $O, L \\in \\{1, 2, 3, 7, 8\\}$:\n- **If $O < 6$:** No carry from the ones column, so the tens column gives $I + 6 = 9 \\implies I = 3$. The only pair from $\\{1, 2, 3, 7, 8\\}$ with $4 + O = L$ is $O = 3, L = 7$, which forces $O = I = 3$ (invalid).\n- **If $O \\ge 6$:** Carryover of $1$ into the tens column, so $1 + I + 6 = 9 \\implies I = 2$. Then $O = 7$ gives $4 + 7 = 11 \\implies L = 1$ (whereas $O = 8$ gives $L = 2 = I$, invalid).\n\nWith $I = 2, O = 7, L = 1$, the remaining digits $\\{3, 8\\}$ go to $W$ and $D$. Since the hundreds column must carry $1$ to the thousands column, $W + 5 = 10 + D \\implies W = 8$ and $D = 3$.\nCheck: $824 + 59567 = 60391$, with all digits distinct.\nTherefore:\n$$M + E + D + A + L = 6 + 0 + 3 + 9 + 1 = 19.$$',
          rubric: [
            { code: 'M2', text: 'Deduces $S = 5, A = 9, E = 0$ from carries and solves $O = 7, L = 1, I = 2, W = 8, D = 3$.' },
            { code: 'A2', text: 'Computes $M + E + D + A + L = 6 + 0 + 3 + 9 + 1 = 19$.' }
          ]
        }
      ]
    }
  ]
};
