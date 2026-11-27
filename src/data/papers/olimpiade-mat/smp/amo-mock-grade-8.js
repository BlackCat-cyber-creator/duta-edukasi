/**
 * Paket Soal: AMO Mock Test — Grade 8 (Secondary 2)
 * Sumber: American Mathematics Olympiad Secondary 2 (Grade 8) Mock Test Paper Set 1 (AMO-MOCK-UP-Grade-8.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15, Section B 16–20, dan Section C 21–25) dimuat lengkap.
 * Soal 6, 8, 16, dan 23 dilengkapi diagram (.webp).
 */
export default {
  id: 'amo-mock-g8',
  slug: 'amo-mock-grade-8',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'AMO Mock Test — Grade 8: arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'smp8-bab1-bilangan-berpangkat',
    'smp8-bab2-teorema-pythagoras',
    'smp8-bab3-persamaan-pertidaksamaan-linear',
    'smp8-bab4-relasi-fungsi'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMO',
  title: 'AMO Mock Test — Grade 8',
  totalMarks: 100,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 3 marks each (45 marks). Section B has 5 open-ended questions worth 5 marks each (25 marks). Section C has 5 open-ended questions worth 6 marks each (30 marks). Diagrams for Questions 6, 8, 16, and 23 are provided as figures.',
  source: {
    org: 'AMO',
    file: 'AMO-MOCK-UP-Grade-8.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section A: Multiple Choice',
      marks: 45,
      stem: 'Choose the one correct answer for each question (15 questions, 3 marks each).',
      parts: [
        {
          label: '1',
          marks: 3,
          prompt:
            'How many numbers of the series have a terminating decimal expansion?\n$$\\frac{1}{1}, \\frac{1}{2}, \\frac{1}{3}, \\ldots, \\frac{1}{98}, \\frac{1}{99}, \\frac{1}{100}$$\n\nA. $15$\nB. $16$\nC. $14$\nD. $13$\nE. $18$',
          answer: 'A. $15$',
          principle:
            'A reduced fraction $\\frac{1}{n}$ has a terminating decimal expansion if and only if the prime factorization of $n$ contains no primes other than $2$ and $5$, i.e., $n = 2^a 5^b$.',
          solution:
            'Since every fraction $\\frac{1}{n}$ ($1 \\le n \\le 100$) is already in lowest terms, it has a terminating decimal expansion precisely when $n = 2^a 5^b$ for non-negative integers $a, b$. Listing all such $n \\le 100$ by powers of $5$:\n- $b = 0$ ($5^0 = 1$): $2^0, 2^1, 2^2, 2^3, 2^4, 2^5, 2^6 \\implies 1, 2, 4, 8, 16, 32, 64$ ($7$ numbers).\n- $b = 1$ ($5^1 = 5$): $5 \\cdot 2^0, 5 \\cdot 2^1, 5 \\cdot 2^2, 5 \\cdot 2^3, 5 \\cdot 2^4 \\implies 5, 10, 20, 40, 80$ ($5$ numbers).\n- $b = 2$ ($5^2 = 25$): $25 \\cdot 2^0, 25 \\cdot 2^1, 25 \\cdot 2^2 \\implies 25, 50, 100$ ($3$ numbers).\n\nSince $5^3 = 125 > 100$, there are no further cases. Total count:\n$$7 + 5 + 3 = 15.$$',
          rubric: [
            { code: 'M2', text: 'Characterizes terminating unit fractions as $n = 2^a 5^b \\le 100$ and enumerates the cases by $b = 0, 1, 2$.' },
            { code: 'A1', text: 'Counts $15$ numbers, option A.' }
          ]
        },
        {
          label: '2',
          marks: 3,
          prompt:
            'Solve:\n$$\\sqrt{4^3} - \\sqrt[3]{2^6}$$\n\nA. $2$\nB. $4$\nC. $8$\nD. $12$\nE. $1$',
          answer: 'B. $4$',
          principle:
            'Rewrite powers with base $2$ and apply $\\sqrt[m]{a^k} = a^{k/m}$.',
          solution:
            'Express both radicals in terms of powers of $2$:\n$$\\sqrt{4^3} = \\sqrt{(2^2)^3} = \\sqrt{2^6} = 2^{6/2} = 2^3 = 8,$$\n$$\\sqrt[3]{2^6} = 2^{6/3} = 2^2 = 4.$$\nSubtracting gives:\n$$8 - 4 = 4.$$',
          rubric: [
            { code: 'M2', text: 'Simplifies $\\sqrt{4^3} = 8$ and $\\sqrt[3]{2^6} = 4$.' },
            { code: 'A1', text: 'Computes $8 - 4 = 4$, option B.' }
          ]
        },
        {
          label: '3',
          marks: 3,
          prompt:
            'Solve the following:\n$$(\\sqrt[3]{7} - 1) \\times (\\sqrt[3]{49} + \\sqrt[3]{7} + 1)$$\n\nA. $48$\nB. $50$\nC. $6$\nD. $8$\nE. $7$',
          answer: 'C. $6$',
          principle:
            'Recognize the difference-of-cubes identity $(a - b)(a^2 + ab + b^2) = a^3 - b^3$.',
          solution:
            'Let $a = \\sqrt[3]{7}$ and $b = 1$. Since $a^2 = (\\sqrt[3]{7})^2 = \\sqrt[3]{49}$, the product matches $(a - b)(a^2 + ab + b^2)$:\n$$(\\sqrt[3]{7} - 1)(\\sqrt[3]{49} + \\sqrt[3]{7} + 1) = (\\sqrt[3]{7})^3 - 1^3 = 7 - 1 = 6.$$',
          rubric: [
            { code: 'M2', text: 'Applies the difference-of-cubes factorization $(a - 1)(a^2 + a + 1) = a^3 - 1$ with $a = \\sqrt[3]{7}$.' },
            { code: 'A1', text: 'Evaluates $7 - 1 = 6$, option C.' }
          ]
        },
        {
          label: '4',
          marks: 3,
          prompt:
            'How many positive integers $N$ satisfy the following equation?\n$$441 - 42N + N^2 = 64$$\n\nA. $2$\nB. $1$\nC. $0$\nD. $4$\nE. $3$',
          answer: 'A. $2$',
          principle:
            'Factor the left-hand side as a perfect square $(N - 21)^2$ and take square roots.',
          solution:
            'Notice that $441 = 21^2$ and $42 = 2 \\times 21$, so the equation becomes:\n$$(N - 21)^2 = 64.$$\nTaking square roots yields $N - 21 = \\pm 8$, which gives:\n$$N = 21 + 8 = 29 \\quad \\text{or} \\quad N = 21 - 8 = 13.$$\nBoth $13$ and $29$ are positive integers, so there are $2$ solutions.',
          rubric: [
            { code: 'M2', text: 'Rewrites the equation as $(N - 21)^2 = 64$ and solves for $N = 13, 29$.' },
            { code: 'A1', text: 'Counts $2$ positive integer solutions, option A.' }
          ]
        },
        {
          label: '5',
          marks: 3,
          prompt:
            'Find the sum of all the unique prime factors of $656656$.\n\nA. $74$\nB. $1044$\nC. $553$\nD. $473$\nE. $687$',
          answer: 'A. $74$',
          principle:
            'Factor out the repeating block $656656 = 656 \\times 1001$ and prime-factorize $656$ and $1001$ separately.',
          solution:
            'Write $656656$ as a product using its repeating three-digit block:\n$$656656 = 656 \\times 1001.$$\nFactor each part into primes:\n- $656 = 16 \\times 41 = 2^4 \\times 41$\n- $1001 = 7 \\times 11 \\times 13$\n\nHence $656656 = 2^4 \\times 7 \\times 11 \\times 13 \\times 41$. The unique prime factors are $2, 7, 11, 13,$ and $41$, whose sum is:\n$$2 + 7 + 11 + 13 + 41 = 74.$$',
          rubric: [
            { code: 'M2', text: 'Factorizes $656656 = 656 \\times 1001 = 2^4 \\times 7 \\times 11 \\times 13 \\times 41$.' },
            { code: 'A1', text: 'Sums the distinct prime factors to $74$, option A.' }
          ]
        },
        {
          label: '6',
          marks: 3,
          prompt:
            'In the adjoining figure, $AB$ is the diameter of the circle and $C, D$ lie on the same side of the diameter. If $\\angle ABC = 75^\\circ$ and $\\angle DAC = 33^\\circ$, then find the measurement of $\\angle DCA$, in degrees.\n\nA. $33$\nB. $24$\nC. $72$\nD. $42$\nE. $27$',
          figures: [
            {
              src: '/papers/amo-mock-g8/fig-6.webp',
              alt: 'Circle with diameter AB and points C and D on the same semicircle, showing angles at A and B.',
              caption: 'Circle diagram for Question 6.'
            }
          ],
          answer: 'D. $42$',
          principle:
            'Use Thales’s theorem (an angle inscribed in a semicircle is $90^\\circ$) and the opposite-angle property of cyclic quadrilaterals.',
          solution:
            'Because $AB$ is a diameter of the circle, $\\angle ACB = 90^\\circ$. In right-angled $\\triangle ABC$:\n$$\\angle CAB = 90^\\circ - \\angle ABC = 90^\\circ - 75^\\circ = 15^\\circ.$$\nTherefore:\n$$\\angle DAB = \\angle DAC + \\angle CAB = 33^\\circ + 15^\\circ = 48^\\circ.$$\nSince $A, B, C, D$ lie on the circle, $ABCD$ is a cyclic quadrilateral, so opposite angles sum to $180^\\circ$:\n$$\\angle DCB = 180^\\circ - \\angle DAB = 180^\\circ - 48^\\circ = 132^\\circ.$$\nFinally, subtracting $\\angle ACB = 90^\\circ$ gives:\n$$\\angle DCA = \\angle DCB - \\angle ACB = 132^\\circ - 90^\\circ = 42^\\circ.$$',
          rubric: [
            { code: 'M2', text: 'Uses $\\angle ACB = 90^\\circ$ to find $\\angle DAB = 48^\\circ$ and cyclic quadrilateral $ABCD$ to get $\\angle DCB = 132^\\circ$.' },
            { code: 'A1', text: 'Computes $\\angle DCA = 42^\\circ$, option D.' }
          ]
        },
        {
          label: '7',
          marks: 3,
          prompt:
            'A metal cylinder is re-casted into a cone with twice the radius. If the height of the cylinder was $12\\text{ m}$, then what is the height of the new cone?\n\nA. $24\\text{ m}$\nB. $16\\text{ m}$\nC. $6\\text{ m}$\nD. $9\\text{ m}$\nE. $36\\text{ m}$',
          answer: 'D. $9\\text{ m}$',
          principle:
            'Equate the volume of the cylinder $\\pi r^2 H$ to the volume of the cone $\\frac{1}{3}\\pi R^2 h$.',
          solution:
            'Let the radius of the cylinder be $r$, so its volume is $\\pi r^2 \\times 12$. The new cone has radius $R = 2r$ and height $h$. Equating volumes:\n$$\\pi r^2 (12) = \\frac{1}{3}\\pi (2r)^2 h = \\frac{4}{3}\\pi r^2 h.$$\nDividing both sides by $\\pi r^2$ gives:\n$$12 = \\frac{4}{3}h \\implies h = 12 \\times \\frac{3}{4} = 9\\text{ m}.$$',
          rubric: [
            { code: 'M2', text: 'Sets up the volume conservation equation $\\pi r^2 (12) = \\frac{1}{3}\\pi (2r)^2 h$.' },
            { code: 'A1', text: 'Solves $h = 9\\text{ m}$, option D.' }
          ]
        },
        {
          label: '8',
          marks: 3,
          prompt:
            'In the diagram, $ABC$ is a right-angled triangle, $AD = 4$ and $CD = 6$. Find the length of $DB$ if $CD$ is perpendicular to $AB$.\n\nA. $8$\nB. $9$\nC. $10$\nD. $4$\nE. $12$',
          figures: [
            {
              src: '/papers/amo-mock-g8/fig-8.webp',
              alt: 'Right-angled triangle ABC with right angle at C and altitude CD perpendicular to hypotenuse AB.',
              caption: 'Right-angled triangle diagram for Question 8.'
            }
          ],
          answer: 'B. $9$',
          principle:
            'By similarity of the two sub-triangles formed by the altitude to the hypotenuse ($\\triangle ADC \\sim \\triangle CDB$), $CD^2 = AD \\cdot DB$.',
          solution:
            'Since $\\angle ACB = 90^\\circ$ and $CD \\perp AB$, we have $\\angle ACD = 90^\\circ - \\angle A = \\angle CBD$. Thus right triangles $\\triangle ADC$ and $\\triangle CDB$ are similar:\n$$\\frac{CD}{AD} = \\frac{DB}{CD} \\implies CD^2 = AD \\cdot DB.$$\nSubstituting $AD = 4$ and $CD = 6$:\n$$6^2 = 4 \\cdot DB \\implies DB = \\frac{36}{4} = 9.$$',
          rubric: [
            { code: 'M2', text: 'Establishes $\\triangle ADC \\sim \\triangle CDB$ to obtain $CD^2 = AD \\cdot DB$.' },
            { code: 'A1', text: 'Computes $DB = 9$, option B.' }
          ]
        },
        {
          label: '9',
          marks: 3,
          prompt:
            'A rhombus of the length $17$ and the length of one of its diagonals is $16$. Find the length of the other diagonal.\n\nA. $15$\nB. $30$\nC. $32$\nD. $34$\nE. $\\sqrt{545}$',
          answer: 'B. $30$',
          principle:
            'The diagonals of a rhombus bisect each other at right angles, forming four congruent right triangles whose hypotenuse is the side length.',
          solution:
            'Each side of the rhombus has length $17$. The given diagonal of length $16$ is bisected into two segments of length $\\frac{16}{2} = 8$. Let the half-length of the other diagonal be $x$. By the Pythagorean theorem on one of the four right triangles:\n$$x^2 + 8^2 = 17^2 \\implies x = \\sqrt{289 - 64} = \\sqrt{225} = 15.$$\nTherefore, the length of the other diagonal is:\n$$2x = 2 \\times 15 = 30.$$',
          rubric: [
            { code: 'M2', text: 'Applies the Pythagorean theorem $x^2 + 8^2 = 17^2$ to find the half-diagonal $x = 15$.' },
            { code: 'A1', text: 'Doubles to obtain diagonal length $30$, option B.' }
          ]
        },
        {
          label: '10',
          marks: 3,
          prompt:
            'Tom travels first $25\\text{ km}$ with a speed of $60\\text{ km/h}$. Then due to the conditions of the remaining road, he had to slow down and travel the rest of the distance with a speed of $x\\text{ km/h}$. If the average speed over $50\\text{ km}$ was found to be $40\\text{ km/h}$, find the value of $x$.\n\nA. $36$\nB. $20$\nC. $30$\nD. $15$\nE. None of these',
          answer: 'C. $30$',
          principle:
            'Average speed equals total distance divided by total time: $\\bar{v} = \\frac{D_1 + D_2}{t_1 + t_2}$.',
          solution:
            'The total distance is $50\\text{ km}$, so the remaining distance is $50 - 25 = 25\\text{ km}$. The total time required at an average speed of $40\\text{ km/h}$ is:\n$$t_{\\text{total}} = \\frac{50}{40} = \\frac{5}{4}\\text{ h}.$$\nThe first $25\\text{ km}$ takes $\\frac{25}{60} = \\frac{5}{12}\\text{ h}$, so the second $25\\text{ km}$ takes:\n$$\\frac{25}{x} = \\frac{5}{4} - \\frac{5}{12} = \\frac{15 - 5}{12} = \\frac{10}{12} = \\frac{5}{6}\\text{ h}.$$\nSolving for $x$ gives:\n$$x = 25 \\times \\frac{6}{5} = 30.$$',
          rubric: [
            { code: 'M2', text: 'Sets up $\\frac{25}{60} + \\frac{25}{x} = \\frac{50}{40}$ for total travel time.' },
            { code: 'A1', text: 'Solves $x = 30$, option C.' }
          ]
        },
        {
          label: '11',
          marks: 3,
          prompt:
            'Count the number of square numbers between $(6^4 + 1)$ and $(4^6 - 1)$.\n\nA. $28$\nB. $17$\nC. $29$\nD. $16$\nE. $27$',
          answer: 'E. $27$',
          principle:
            'Notice that $6^4 = 36^2$ and $4^6 = 64^2$, so squares strictly between $36^2 + 1$ and $64^2 - 1$ are $37^2$ through $63^2$.',
          solution:
            'Rewrite both endpoints using squares:\n$$6^4 + 1 = (6^2)^2 + 1 = 36^2 + 1 = 1297,$$\n$$4^6 - 1 = (4^3)^2 - 1 = 64^2 - 1 = 4095.$$\nFor an integer $k$, the condition $36^2 + 1 \\le k^2 \\le 64^2 - 1$ holds precisely when $37 \\le k \\le 63$. The number of such squares is:\n$$63 - 37 + 1 = 27.$$',
          rubric: [
            { code: 'M2', text: 'Identifies $6^4 = 36^2$ and $4^6 = 64^2$, bounding $37 \\le k \\le 63$.' },
            { code: 'A1', text: 'Counts $63 - 37 + 1 = 27$, option E.' }
          ]
        },
        {
          label: '12',
          marks: 3,
          prompt:
            'Find the $1000^{\\text{th}}$ root of\n$$10^{(10^{10})}$$\n\nA. $10^{10^7}$\nB. $10^{7^{10}}$\nC. $\\sqrt{10}^{\\sqrt{10}^{\\sqrt{10}}}$\nD. $7^{10^{10}}$\nE. $10^{\\frac{1}{10}}$',
          answer: 'A. $10^{10^7}$',
          principle:
            'Taking the $n^{\\text{th}}$ root divides the exponent by $n$: $\\sqrt[n]{10^E} = 10^{E/n}$.',
          solution:
            'Taking the $1000^{\\text{th}}$ root means raising to the power $\\frac{1}{1000} = 10^{-3}$:\n$$\\left(10^{10^{10}}\\right)^{\\frac{1}{10^3}} = 10^{\\frac{10^{10}}{10^3}} = 10^{10^{10-3}} = 10^{10^7}.$$',
          rubric: [
            { code: 'M2', text: 'Applies the power rule $\\left(10^{10^{10}}\\right)^{1/10^3} = 10^{10^{10}/10^3}$.' },
            { code: 'A1', text: 'Simplifies to $10^{10^7}$, option A.' }
          ]
        },
        {
          label: '13',
          marks: 3,
          prompt:
            'A cuboid has faces of area $24, 15, 10$ square units. If the lengths of the sides of the cuboid are $a, b, c$ then find $abc + 2(a + b + c)$.\n\nA. $72.5$\nB. $49$\nC. $90$\nD. $85$\nE. Insufficient information',
          answer: 'D. $85$',
          principle:
            'Multiply the three face areas $(ab)(bc)(ca) = (abc)^2$ to find the volume $abc$, then recover each edge length.',
          solution:
            'Without loss of generality, let $ab = 24$, $bc = 15$, and $ca = 10$. Multiplying all three equations gives:\n$$(abc)^2 = 24 \\times 15 \\times 10 = 3600 \\implies abc = 60.$$\nDividing $abc = 60$ by each face area determines the side lengths:\n$$a = \\frac{60}{15} = 4, \\quad b = \\frac{60}{10} = 6, \\quad c = \\frac{60}{24} = 2.5.$$\nTherefore:\n$$abc + 2(a + b + c) = 60 + 2(4 + 6 + 2.5) = 60 + 25 = 85.$$',
          rubric: [
            { code: 'M2', text: 'Computes $abc = \\sqrt{24 \\times 15 \\times 10} = 60$ and finds edges $4, 6, 2.5$.' },
            { code: 'A1', text: 'Evaluates $60 + 2(12.5) = 85$, option D.' }
          ]
        },
        {
          label: '14',
          marks: 3,
          prompt:
            'What is the greatest number of regions can $7$ lines divide a circle into?\n\nA. $14$\nB. $28$\nC. $29$\nD. $15$\nE. $35$',
          answer: 'C. $29$',
          principle:
            'Each new line maximizes the number of new regions by intersecting all previous lines at distinct interior points, giving $R_n = 1 + \\frac{n(n+1)}{2}$.',
          solution:
            'When $n$ chords are drawn in general position inside a circle (no two parallel, no three concurrent), the $k$-th line crosses the previous $k - 1$ lines at $k - 1$ distinct points, splitting $k$ existing regions and adding $k$ new regions. Starting from $R_0 = 1$:\n$$R_n = 1 + 1 + 2 + \\cdots + n = 1 + \\frac{n(n + 1)}{2}.$$\nFor $n = 7$:\n$$R_7 = 1 + \\frac{7 \\times 8}{2} = 1 + 28 = 29.$$',
          rubric: [
            { code: 'M2', text: 'Uses the maximum region formula $1 + \\frac{n(n+1)}{2}$ for $n = 7$.' },
            { code: 'A1', text: 'Computes $29$ regions, option C.' }
          ]
        },
        {
          label: '15',
          marks: 3,
          prompt:
            'How many unique necklaces can be made such that they contain $7$ equally spaced beads of $7$ different colours?\n\nA. $5040$\nB. $720$\nC. $2520$\nD. $360$\nE. $840$',
          answer: 'D. $360$',
          principle:
            'A necklace of $n \\ge 3$ distinct beads is invariant under both rotations ($n$ symmetries) and reflections ($2$ orientations), giving $\\frac{(n - 1)!}{2}$ distinct arrangements.',
          solution:
            'First, arrange $7$ distinct beads around a fixed circle up to rotation in $(7 - 1)! = 6! = 720$ ways. Because a necklace can be flipped over in $3$D space (reflection symmetry, and no arrangement of $7$ distinct colours is symmetric under reflection), each necklace is counted twice. Thus the number of unique necklaces is:\n$$\\frac{6!}{2} = \\frac{720}{2} = 360.$$',
          rubric: [
            { code: 'M2', text: 'Accounts for both circular rotation $(7 - 1)!$ and necklace flip symmetry $\\div 2$.' },
            { code: 'A1', text: 'Computes $360$, option D.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Open-Ended Questions',
      marks: 25,
      stem: 'Write the exact numerical answer for each question (5 questions, 5 marks each).',
      parts: [
        {
          label: '16',
          marks: 5,
          prompt:
            'In the figure, the difference between any two neighbouring horizontal and vertical dots is $1$. Find the area of the triangle.',
          figures: [
            {
              src: '/papers/amo-mock-g8/fig-16.webp',
              alt: 'Rectangular lattice of equally spaced dots containing an inscribed triangle with vertices on the grid boundary.',
              caption: 'Dot-grid triangle for Question 16.'
            }
          ],
          answer: '$15$',
          answerNumeric: [{ value: 15, unit: '' }],
          principle:
            'Enclose the triangle in the smallest axis-aligned bounding rectangle on the lattice and subtract the three surrounding right triangles (or apply Pick’s theorem).',
          solution:
            'Set up coordinates with $(0, 0)$ at the bottom-left dot. The grid has $8$ dots horizontally ($x = 0$ to $7$) and $7$ dots vertically ($y = 0$ to $6$). The three vertices of the triangle are at:\n$$A = (0, 3), \\quad B = (3, 0), \\quad C = (7, 6).$$\nEnclose $\\triangle ABC$ inside the $7 \\times 6$ bounding rectangle $[0, 7] \\times [0, 6]$, which has area $7 \\times 6 = 42$. The three right-angled triangles outside $\\triangle ABC$ inside this rectangle have areas:\n- Bottom-left: $\\frac{1}{2} \\times 3 \\times 3 = 4.5$\n- Top-left: $\\frac{1}{2} \\times 7 \\times 3 = 10.5$\n- Bottom-right: $\\frac{1}{2} \\times 4 \\times 6 = 12$\n\nSubtracting these from the rectangle area gives:\n$$\\text{Area}(\\triangle ABC) = 42 - (4.5 + 10.5 + 12) = 42 - 27 = 15.$$',
          rubric: [
            { code: 'M3', text: 'Identifies the vertex coordinates $(0,3), (3,0), (7,6)$ in the $7 \\times 6$ unit lattice and subtracts the three surrounding right triangles ($4.5 + 10.5 + 12 = 27$).' },
            { code: 'A2', text: 'Obtains area $15$.' }
          ]
        },
        {
          label: '17',
          marks: 5,
          prompt:
            'If $n! = n \\times (n - 1) \\times \\dots \\times 2 \\times 1$, find the simplest value of the following.\n$$\\frac{20! + 21!}{2 \\times 19! + 4 \\times 19! + 16 \\times 19!}$$',
          answer: '$20$',
          answerNumeric: [{ value: 20, unit: '' }],
          principle:
            'Factor out the smallest factorial $19!$ from both the numerator and the denominator.',
          solution:
            'Rewrite $20! = 20 \\times 19!$ and $21! = 21 \\times 20 \\times 19! = 420 \\times 19!$. Factoring $19!$ out of both numerator and denominator:\n$$\\frac{20! + 21!}{(2 + 4 + 16) \\times 19!} = \\frac{19! \\times (20 + 420)}{22 \\times 19!} = \\frac{440}{22} = 20.$$',
          rubric: [
            { code: 'M3', text: 'Factors $19!$ from numerator and denominator to obtain $\\frac{20 + 21 \\times 20}{2 + 4 + 16}$.' },
            { code: 'A2', text: 'Simplifies $\\frac{440}{22} = 20$.' }
          ]
        },
        {
          label: '18',
          marks: 5,
          prompt:
            'What is the number of unique $4$ letter words that can be formed with the word MATHS?',
          answer: '$120$',
          answerNumeric: [{ value: 120, unit: '' }],
          principle:
            'Count permutations without repetition of $4$ letters chosen from $5$ distinct letters: $P(5, 4) = 5 \\times 4 \\times 3 \\times 2$.',
          solution:
            'The word `MATHS` consists of $5$ distinct letters: M, A, T, H, S. To form a $4$-letter word using these letters without repetition:\n- $5$ choices for the $1^{\\text{st}}$ letter,\n- $4$ choices for the $2^{\\text{nd}}$ letter,\n- $3$ choices for the $3^{\\text{rd}}$ letter,\n- $2$ choices for the $4^{\\text{th}}$ letter.\n\nThus the total number of unique $4$-letter arrangements is:\n$$5 \\times 4 \\times 3 \\times 2 = 120.$$',
          rubric: [
            { code: 'M3', text: 'Applies permutation count $P(5, 4) = 5 \\times 4 \\times 3 \\times 2$ for $4$ distinct letters from $5$.' },
            { code: 'A2', text: 'Computes $120$.' }
          ]
        },
        {
          label: '19',
          marks: 5,
          prompt:
            'In a $3$-digit number $XYZ$, $X$, $Y$ and $Z$ are non-zero digits in an arithmetic progression. If $XYZ - ZXY = M$, find the largest value of $M$, a $3$-digit number ($X, Z \\ne 0$).',
          answer: '$756$',
          answerNumeric: [{ value: 756, unit: '' }],
          principle:
            'Expand $XYZ - ZXY = 90X + 9Y - 99Z$ and substitute the arithmetic progression condition $2Y = X + Z$.',
          solution:
            'Writing the $3$-digit numbers in base $10$:\n$$M = (100X + 10Y + Z) - (100Z + 10X + Y) = 90X + 9Y - 99Z.$$\nBecause $X, Y, Z$ are in an arithmetic progression, $Y = \\frac{X + Z}{2}$ (so $X$ and $Z$ have the same parity). Substituting $Y$ gives:\n$$M = 90X + \\frac{9}{2}(X + Z) - 99Z = \\frac{189X - 189Z}{2} = \\frac{189}{2}(X - Z).$$\nTo maximize $M$, we maximize $X - Z$ using non-zero digits $1 \\le Z < X \\le 9$ of the same parity. Taking $X = 9$ and $Z = 1$ gives $Y = \\frac{9 + 1}{2} = 5$, so:\n$$M = 951 - 195 = 756.$$',
          rubric: [
            { code: 'M3', text: 'Expresses $M = \\frac{189}{2}(X - Z)$ using $2Y = X + Z$ and identifies $X = 9, Z = 1, Y = 5$.' },
            { code: 'A2', text: 'Computes $M = 756$.' }
          ]
        },
        {
          label: '20',
          marks: 5,
          prompt:
            'In a class of $50$ students, if $15$ like Maths, $27$ like English and $13$ like none, then how many like both Maths and English?',
          answer: '$5$',
          answerNumeric: [{ value: 5, unit: '' }],
          principle:
            'Use the two-set inclusion–exclusion principle: $|M \\cup E| = |M| + |E| - |M \\cap E|$.',
          solution:
            'Out of $50$ students, $13$ like neither subject, so the number of students who like at least one of Maths or English is:\n$$50 - 13 = 37.$$\nBy inclusion–exclusion:\n$$|M \\cap E| = |M| + |E| - |M \\cup E| = 15 + 27 - 37 = 5.$$',
          rubric: [
            { code: 'M3', text: 'Finds $|M \\cup E| = 50 - 13 = 37$ and applies inclusion–exclusion $15 + 27 - 37$.' },
            { code: 'A2', text: 'Obtains $5$ students.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Section C: Open-Ended Questions',
      marks: 30,
      stem: 'Write the exact numerical answer for each question (5 questions, 6 marks each).',
      parts: [
        {
          label: '21',
          marks: 6,
          prompt:
            'The numbers $411$, $666$ and $870$ give the [same] remainder when divided by a positive integer $N$. Find the greatest possible value of $N$.',
          answer: '$51$',
          answerNumeric: [{ value: 51, unit: '' }],
          principle:
            'If three numbers leave the same remainder upon division by $N$, then $N$ divides all pairwise differences, so the largest $N$ is $\\gcd(b - a, c - b)$.',
          solution:
            'Let $r$ be the common remainder. Since $411 \\equiv 666 \\equiv 870 \\pmod N$, $N$ must divide the pairwise differences:\n$$666 - 411 = 255, \\qquad 870 - 666 = 204, \\qquad 870 - 411 = 459.$$\nThus the greatest possible value of $N$ is:\n$$\\gcd(255, 204) = \\gcd(204, 51) = 51.$$\nIndeed, $411 = 8 \\times 51 + 3$, $666 = 13 \\times 51 + 3$, and $870 = 17 \\times 51 + 3$.',
          rubric: [
            { code: 'M4', text: 'Deduces that $N$ divides $666 - 411 = 255$ and $870 - 666 = 204$, reducing the problem to $\\gcd(255, 204)$.' },
            { code: 'A2', text: 'Finds $N = 51$.' }
          ]
        },
        {
          label: '22',
          marks: 6,
          prompt:
            'In a sequence of numbers, each subsequent term is the sum of cubes of digits of the previous term. If one such sequence starts with the number $244$, find the $2021^{\\text{st}}$ term in it.',
          answer: '$244$',
          answerNumeric: [{ value: 244, unit: '' }],
          principle:
            'Compute the first few terms to detect periodicity and reduce the index modulo the cycle length.',
          solution:
            'Compute consecutive terms starting from $a_1 = 244$:\n$$a_2 = 2^3 + 4^3 + 4^3 = 8 + 64 + 64 = 136,$$\n$$a_3 = 1^3 + 3^3 + 6^3 = 1 + 27 + 216 = 244.$$\nThe sequence immediately alternates with period $2$: $244, 136, 244, 136, \\ldots$, so every odd-indexed term equals $244$ and every even-indexed term equals $136$. Since $2021$ is odd:\n$$a_{2021} = 244.$$',
          rubric: [
            { code: 'M4', text: 'Computes $a_2 = 136$ and $a_3 = 244$, establishing the $2$-cycle $(244, 136)$.' },
            { code: 'A2', text: 'Uses odd index $2021$ to conclude $a_{2021} = 244$.' }
          ]
        },
        {
          label: '23',
          marks: 6,
          prompt:
            'In how many ways can you reach any circle on the $10^{\\text{th}}$ row from the circle on the top if you can only move down left or right but cannot pass through the black circle?',
          figures: [
            {
              src: '/papers/amo-mock-g8/fig-23.webp',
              alt: 'Triangular lattice of circles with downward-left and downward-right arrows and one solid black circle near the middle.',
              caption: 'Triangular path lattice for Question 23.'
            }
          ],
          answer: '$320$',
          answerNumeric: [{ value: 320, unit: '' }],
          principle:
            'Subtract the number of paths passing through the blocked circle from the unrestricted total $2^9 = 512$ (or sum row totals down the Pascal lattice).',
          solution:
            'From row $1$ (the single top circle) to row $10$, each valid path makes $9$ downward-left or downward-right steps, giving $2^9 = 512$ unrestricted paths.\n\nIn the diagram, the black circle is the middle ($3^{\\text{rd}}$) circle on row $5$:\n- Number of ways to reach the black circle from row $1$ ($4$ steps: $2$ left, $2$ right) is $\\binom{4}{2} = 6$.\n- Number of ways to continue from the black circle to row $10$ ($5$ unrestricted steps) is $2^5 = 32$.\n\nThus $6 \\times 32 = 192$ paths pass through the black circle, leaving:\n$$512 - 192 = 320\\text{ valid paths}.$$\n(Equivalently, tracking row sums: rows $1$–$4$ have sums $1, 2, 4, 8$; removing the middle circle on row $5$ leaves $1 + 4 + 0 + 4 + 1 = 10$ paths to row $5$; doubling at each of the remaining $5$ steps gives $10 \\times 2^5 = 320$. Note: the printed answer key lists `0326`, which is a typographical slip for $320$.)',
          rubric: [
            { code: 'M4', text: 'Finds $2^9 = 512$ total paths and subtracts $\\binom{4}{2} \\cdot 2^5 = 192$ paths through the row-$5$ middle circle (or doubles row $5$ sum $10$ five times).' },
            { code: 'A2', text: 'Obtains $320$ valid paths.' }
          ]
        },
        {
          label: '24',
          marks: 6,
          prompt:
            'Find the maximum value of the following expression.\n$$\\sqrt{781 - X} + \\sqrt{X - 59}$$',
          answer: '$38$',
          answerNumeric: [{ value: 38, unit: '' }],
          principle:
            'Apply the Cauchy–Schwarz inequality $(u + v)^2 \\le 2(u^2 + v^2)$ to eliminate $X$ inside the sum of squares.',
          solution:
            'For the expression to be real-valued, $59 \\le X \\le 781$. Let $u = \\sqrt{781 - X}$ and $v = \\sqrt{X - 59}$. Then:\n$$u^2 + v^2 = (781 - X) + (X - 59) = 722.$$\nBy the Cauchy–Schwarz inequality (or $(u - v)^2 \\ge 0$):\n$$(u + v)^2 \\le 2(u^2 + v^2) = 2 \\times 722 = 1444 = 38^2,$$\nso $u + v \\le 38$. Equality holds when $u = v$, i.e., $781 - X = X - 59 \\iff X = 420$. Hence the maximum value is $38$.',
          rubric: [
            { code: 'M4', text: 'Uses $(u + v)^2 \\le 2(u^2 + v^2)$ with $u^2 + v^2 = 722$ (or squares and optimizes $2uv$) and verifies equality at $X = 420$.' },
            { code: 'A2', text: 'Obtains maximum value $38$.' }
          ]
        },
        {
          label: '25',
          marks: 6,
          prompt:
            'The factorisation of a *semi-prime* number is $p_1 \\times p_2$ where $p_1$ and $p_2$ are prime numbers. Let the probability that the sum of faces of $3$ standard dice is a semi-prime number be $\\frac{a}{b}$ in simplest form. Find the value of $a + b$.',
          answer: '$139$',
          answerNumeric: [{ value: 139, unit: '' }],
          principle:
            'Identify all squarefree semi-primes $p_1 \\times p_2$ ($p_1 \\ne p_2$) within the possible $3$-dice sums $[3, 18]$ and count the outcomes for each sum out of $6^3 = 216$.',
          solution:
            'When rolling $3$ standard $6$-sided dice, the sum $S$ lies in $3 \\le S \\le 18$, and there are $6^3 = 216$ equally likely outcomes. Taking $p_1, p_2$ to be distinct primes, the semi-prime sums in $[3, 18]$ are:\n- $6 = 2 \\times 3$: compositions $(a,b,c) \\ge 1$ summing to $6$ give $\\binom{6-1}{2} = \\binom{5}{2} = 10$ outcomes.\n- $10 = 2 \\times 5$: $\\binom{9}{2} - 3\\binom{3}{2} = 36 - 9 = 27$ outcomes.\n- $14 = 2 \\times 7$: by symmetry with sum $21 - 14 = 7$, $\\binom{6}{2} = 15$ outcomes.\n- $15 = 3 \\times 5$: by symmetry with sum $21 - 15 = 6$, $\\binom{5}{2} = 10$ outcomes.\n\nTotal favourable outcomes:\n$$10 + 27 + 15 + 10 = 62.$$\nThus the probability is:\n$$\\frac{62}{216} = \\frac{31}{108},$$\nwith $\\gcd(31, 108) = 1$. Therefore, $a + b = 31 + 108 = 139$.',
          rubric: [
            { code: 'M4', text: 'Identifies valid semi-prime sums $6, 10, 14, 15$ and counts $10 + 27 + 15 + 10 = 62$ outcomes out of $216$.' },
            { code: 'A2', text: 'Reduces $\\frac{62}{216} = \\frac{31}{108}$ and computes $a + b = 139$.' }
          ]
        }
      ]
    }
  ]
};
