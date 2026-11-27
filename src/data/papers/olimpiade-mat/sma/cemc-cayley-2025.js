/**
 * Paket Soal Terstruktur: CEMC Cayley Grade 10 — 2025 (25 official questions & solutions)
 * Sumber: 2025CayleyContest.pdf & 2025CayleySolution.pdf (CEMC — University of Waterloo).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Diagram pada soal 3, 6, 8, 12, 15,
 * 19, 20, 24, dan 25 diekstrak dari naskah resmi ke public/papers/cemc-cayley-2025/fig-<n>.webp.
 */
export default {
  id: 'cemc-cayley-2025',
  slug: 'cemc-cayley-2025',
  subject: 'olimpiade-mat',
  grade: 10,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'CEMC Cayley Grade 10 — 2025: official CEMC Waterloo contest questions & solutions',
  relatedChapterIds: [
    'sma10-bab2-barisan-deret',
    'sma10-bab4-trigonometri',
    'sma10-bab5-spltv-sptldv',
    'sma10-bab8-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'Cayley',
  title: 'CEMC Cayley Grade 10 — 2025',
  totalMarks: 150,
  instructions:
    'Attempt all 25 questions (official contest time: 60 minutes; basic calculators permitted). Part A has 10 multiple-choice questions worth 5 marks each (50 marks). Part B has 10 multiple-choice questions worth 6 marks each (60 marks). Part C has 5 integer-answer questions worth 8 marks each (40 marks), where each answer is an integer from 00 to 99 inclusive (single-digit answers are coded with a leading zero, such as 07). In the official CEMC scoring system, there is no penalty for an incorrect answer and each unanswered question is worth 2 marks up to a maximum of 10 unanswered questions; this practice set scores correct answers out of 150 marks. Diagrams are not drawn to scale.',
  source: {
    org: 'CEMC — University of Waterloo',
    file: '2025CayleyContest.pdf',
    license: 'Hak cipta pada penyelenggara (CEMC University of Waterloo); dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Part A: Multiple Choice (5 marks each)',
      marks: 50,
      stem: 'Choose the one correct answer (A, B, C, D, or E) for each question (Questions 1–10, 5 marks each).',
      parts: [
        {
          label: '1',
          marks: 5,
          prompt:
            'The value of $\\dfrac{20 + 25}{25 + 20}$ is\n\nA. $-1$\nB. $1$\nC. $0$\nD. $2025$\nE. $-2025$',
          answer: 'B. $1$',
          principle: 'Any nonzero number divided by itself equals $1$.',
          solution:
            'Evaluate the numerator and denominator:\n$$\\frac{20 + 25}{25 + 20} = \\frac{45}{45} = 1.$$',
          rubric: [
            { code: 'M3', text: 'Computes numerator $20 + 25 = 45$ and denominator $25 + 20 = 45$.' },
            { code: 'A2', text: 'Divides to obtain $1$, option B.' }
          ]
        },
        {
          label: '2',
          marks: 5,
          prompt:
            'A mother bear collects $14$ fish. She gives $4$ fish to each of her $3$ bear cubs. How many fish does the mother bear have left over?\n\nA. $0$\nB. $2$\nC. $3$\nD. $4$\nE. $5$',
          answer: 'B. $2$',
          principle: 'Subtract the total number of fish distributed from the initial total.',
          solution:
            'The mother bear gives $4 \\times 3 = 12$ fish to her $3$ cubs.\nSubtracting from the $14$ fish collected leaves\n$$14 - 12 = 2\\text{ fish}.$$',
          rubric: [
            { code: 'M3', text: 'Calculates total fish given away as $4 \\times 3 = 12$.' },
            { code: 'A2', text: 'Finds $14 - 12 = 2$ fish left over, option B.' }
          ]
        },
        {
          label: '3',
          marks: 5,
          prompt:
            'In the diagram, the large rectangle is divided into $9$ smaller rectangles. Each of the $5$ smaller shaded rectangles has a width of $4$ and each of the $4$ smaller unshaded rectangles has a width of $8$. The width, $w$, of the large rectangle is\n\nA. $20$\nB. $32$\nC. $52$\nD. $56$\nE. $68$',
          figures: [
            {
              src: '/papers/cemc-cayley-2025/fig-3.webp',
              alt: 'Large rectangle of total width w partitioned vertically into 5 shaded vertical strips alternating with 4 unshaded vertical strips.',
              caption: 'Large rectangle partitioned into 5 shaded and 4 unshaded vertical rectangles.'
            }
          ],
          answer: 'C. $52$',
          principle: 'The total width of side-by-side non-overlapping vertical strips is the sum of their individual widths.',
          solution:
            'The $5$ shaded rectangles each have width $4$, contributing $5 \\times 4 = 20$ to the width.\nThe $4$ unshaded rectangles each have width $8$, contributing $4 \\times 8 = 32$ to the width.\nSumming all $9$ widths gives\n$$w = 20 + 32 = 52.$$',
          rubric: [
            { code: 'M3', text: 'Computes the combined widths $5 \\times 4 = 20$ and $4 \\times 8 = 32$.' },
            { code: 'A2', text: 'Sums to obtain $w = 52$, option C.' }
          ]
        },
        {
          label: '4',
          marks: 5,
          prompt:
            'If the average of $n - 3$, $n - 1$, $n + 1$, and $n + 3$ is $17$, the value of $n$ is\n\nA. $13$\nB. $15$\nC. $17$\nD. $19$\nE. $21$',
          answer: 'C. $17$',
          principle: 'The average of four numbers equals one-fourth of their sum.',
          solution:
            'Since the average of the four expressions is $17$, their sum is $4 \\times 17 = 68$:\n$$(n - 3) + (n - 1) + (n + 1) + (n + 3) = 68.$$\nThe constants $-3, -1, +1, +3$ cancel in pairs, leaving\n$$4n = 68 \\implies n = \\frac{68}{4} = 17.$$',
          rubric: [
            { code: 'M3', text: 'Sets up $(n - 3) + (n - 1) + (n + 1) + (n + 3) = 4 \\times 17$ to obtain $4n = 68$.' },
            { code: 'A2', text: 'Solves for $n = 17$, option C.' }
          ]
        },
        {
          label: '5',
          marks: 5,
          prompt:
            'A theatre has $600$ seats. Exactly $25\\%$ of these seats are filled. All of the people in the seats then move to an empty theatre that has $200$ seats. What percentage of the seats in the smaller theatre are now filled?\n\nA. $50\\%$\nB. $40\\%$\nC. $60\\%$\nD. $75\\%$\nE. $55\\%$',
          answer: 'D. $75\\%$',
          principle: 'Find the constant number of people, then express it as a percentage of the smaller capacity.',
          solution:
            'The number of people in the first theatre is\n$$25\\% \\times 600 = \\frac{25}{100} \\times 600 = 150.$$\nWhen all $150$ people move into the $200$-seat theatre, the percentage of seats filled is\n$$\\frac{150}{200} \\times 100\\% = \\frac{3}{4} \\times 100\\% = 75\\%.$$',
          rubric: [
            { code: 'M3', text: 'Calculates $25\\% \\times 600 = 150$ people.' },
            { code: 'A2', text: 'Computes $\\frac{150}{200} \\times 100\\% = 75\\%$, option D.' }
          ]
        },
        {
          label: '6',
          marks: 5,
          prompt:
            'In the diagram, point $D$ is on side $AB$ of $\\triangle ABC$ and points $E$ and $F$ are on $BC$. For some positive real number $t$, the area of $\\triangle DBE$ is $t$, the area of $\\triangle DEF$ is $t$, the area of $\\triangle DFC$ is $2t$, and the area of $\\triangle DAC$ is $4t$. If the area of $\\triangle DEC$ is $63$, what is the area of $\\triangle ABC$?\n\nA. $168$\nB. $105$\nC. $84$\nD. $189$\nE. $126$',
          figures: [
            {
              src: '/papers/cemc-cayley-2025/fig-6.webp',
              alt: 'Triangle ABC with D on AB and E, F on BC partitioning the triangle into four regions labeled t, t, 2t, and 4t.',
              caption: 'Triangle ABC partitioned into four sub-triangles with areas in terms of t.'
            }
          ],
          answer: 'A. $168$',
          principle: 'Sum the areas of adjacent non-overlapping triangles to solve for $t$, then sum all four regions.',
          solution:
            'Triangle $\\triangle DEC$ consists of $\\triangle DEF$ and $\\triangle DFC$, so its area is\n$$t + 2t = 3t.$$\nGiven that the area of $\\triangle DEC$ is $63$, we have\n$$3t = 63 \\implies t = 21.$$\nThe total area of $\\triangle ABC$ is the sum of the areas of all four sub-triangles:\n$$\\text{Area}(\\triangle ABC) = t + t + 2t + 4t = 8t = 8 \\times 21 = 168.$$',
          rubric: [
            { code: 'M3', text: 'Sets $t + 2t = 63$ to find $t = 21$ and expresses $[\\triangle ABC] = 8t$.' },
            { code: 'A2', text: 'Evaluates $8 \\times 21 = 168$, option A.' }
          ]
        },
        {
          label: '7',
          marks: 5,
          prompt:
            'If $50 - 2\\sqrt{x} = 18$, the value of $x$ is\n\nA. $32$\nB. $16$\nC. $64$\nD. $256$\nE. $8$',
          answer: 'D. $256$',
          principle: 'Isolate the radical term $\\sqrt{x}$ before squaring both sides.',
          solution:
            'Rearrange the equation to isolate $\\sqrt{x}$:\n$$50 - 18 = 2\\sqrt{x} \\implies 2\\sqrt{x} = 32 \\implies \\sqrt{x} = 16.$$\nSquaring both sides gives\n$$x = 16^2 = 256.$$',
          rubric: [
            { code: 'M3', text: 'Isolates $\\sqrt{x} = 16$.' },
            { code: 'A2', text: 'Squares to obtain $x = 256$, option D.' }
          ]
        },
        {
          label: '8',
          marks: 5,
          prompt:
            'In the diagram, point $D$ lies on side $BC$ of $\\triangle ABC$ so that $AB = AD = CD$. If $\\angle ABC = 80^\\circ$, the measure of $\\angle ACD$ is\n\nA. $20^\\circ$\nB. $60^\\circ$\nC. $80^\\circ$\nD. $100^\\circ$\nE. $40^\\circ$',
          figures: [
            {
              src: '/papers/cemc-cayley-2025/fig-8.webp',
              alt: 'Triangle ABC with point D on BC, equal-length tick marks on AB, AD, and CD, and an 80-degree angle labeled at B.',
              caption: 'Triangle ABC with equal segments AB = AD = CD and angle ABC = 80 degrees.'
            }
          ],
          answer: 'E. $40^\\circ$',
          principle: 'Use base angles of isosceles triangles and supplementary angles along straight line $BC$.',
          solution:
            'Because $AB = AD$, $\\triangle ABD$ is isosceles with\n$$\\angle ADB = \\angle ABD = 80^\\circ.$$\nSince $B$, $D$, and $C$ are collinear, $\\angle ADB$ and $\\angle ADC$ are supplementary:\n$$\\angle ADC = 180^\\circ - 80^\\circ = 100^\\circ.$$\nBecause $AD = CD$, $\\triangle ADC$ is also isosceles, so $\\angle CAD = \\angle ACD$. Using the angle sum of $\\triangle ADC$:\n$$100^\\circ + 2\\,\\angle ACD = 180^\\circ \\implies 2\\,\\angle ACD = 80^\\circ \\implies \\angle ACD = 40^\\circ.$$',
          rubric: [
            { code: 'M3', text: 'Finds $\\angle ADB = 80^\\circ$ and $\\angle ADC = 100^\\circ$.' },
            { code: 'A2', text: 'Uses isosceles $\\triangle ADC$ to obtain $\\angle ACD = 40^\\circ$, option E.' }
          ]
        },
        {
          label: '9',
          marks: 5,
          prompt:
            'Teddy has $10$ rectangular blocks each of which measures $3\\text{ cm}$ by $4\\text{ cm}$ by $5\\text{ cm}$. He builds a stack that is exactly $21\\text{ cm}$ high, where each block can be stacked on any of its faces. What is the smallest number of blocks that Teddy could use to make this stack?\n\nA. $4$\nB. $5$\nC. $6$\nD. $7$\nE. $8$',
          answer: 'B. $5$',
          principle: 'Bound the minimum number of blocks using the maximum single-block height, then construct an explicit valid stack.',
          solution:
            'Each block contributes a height of $3\\text{ cm}$, $4\\text{ cm}$, or $5\\text{ cm}$.\nWith $4$ or fewer blocks, the maximum possible height is $4 \\times 5 = 20\\text{ cm} < 21\\text{ cm}$, so at least $5$ blocks are required.\nA stack of $5$ blocks can achieve $21\\text{ cm}$ by orienting $4$ blocks at height $4\\text{ cm}$ and $1$ block at height $5\\text{ cm}$:\n$$4 \\times 4 + 1 \\times 5 = 16 + 5 = 21\\text{ cm}.$$\n(Other $5$-block combinations such as $3\\times 5 + 2\\times 3 = 21$ or $2\\times 5 + 2\\times 4 + 1\\times 3 = 21$ also work.) Therefore, the smallest number of blocks is $5$.',
          rubric: [
            { code: 'M3', text: 'Shows $4$ blocks reach at most $4 \\times 5 = 20\\text{ cm} < 21\\text{ cm}$ and constructs a valid $5$-block stack.' },
            { code: 'A2', text: 'Concludes $5$ blocks, option B.' }
          ]
        },
        {
          label: '10',
          marks: 5,
          prompt:
            'If $x = \\frac{1}{4}$, which of the numbers $x$, $-x$, $x^2$, $3x$, and $\\sqrt{x}$ is the greatest?\n\nA. $x$\nB. $-x$\nC. $x^2$\nD. $3x$\nE. $\\sqrt{x}$',
          answer: 'D. $3x$',
          principle: 'Substitute $x = \\frac{1}{4}$ directly and compare the resulting fractions.',
          solution:
            'Evaluating each expression at $x = \\frac{1}{4}$:\n- $x = \\frac{1}{4} = 0.25$\n- $-x = -\\frac{1}{4} = -0.25$\n- $x^2 = \\left(\\frac{1}{4}\\right)^2 = \\frac{1}{16} = 0.0625$\n- $3x = \\frac{3}{4} = 0.75$\n- $\\sqrt{x} = \\sqrt{\\frac{1}{4}} = \\frac{1}{2} = 0.5$\n\nComparing all five values, $\\frac{3}{4}$ is the greatest, so $3x$ is greatest.',
          rubric: [
            { code: 'M3', text: 'Computes $-\\frac{1}{4}$, $\\frac{1}{16}$, $\\frac{3}{4}$, and $\\sqrt{\\frac{1}{4}} = \\frac{1}{2}$.' },
            { code: 'A2', text: 'Identifies $3x = \\frac{3}{4}$ as the greatest, option D.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Part B: Multiple Choice (6 marks each)',
      marks: 60,
      stem: 'Choose the one correct answer (A, B, C, D, or E) for each question (Questions 11–20, 6 marks each).',
      parts: [
        {
          label: '11',
          marks: 6,
          prompt:
            'The current calendar year, $2025$, is a perfect square. In $n$ years from $2025$, the calendar year will again be a perfect square. The smallest possible value of $n$ is\n\nA. $2025$\nB. $100$\nC. $9$\nD. $46$\nE. $91$',
          answer: 'E. $91$',
          principle: 'Find the square root of $2025$ and subtract $2025$ from the next consecutive integer square.',
          solution:
            'Note that $\\sqrt{2025} = 45$ since $45^2 = 2025$.\nThe smallest perfect square strictly greater than $2025$ is\n$$46^2 = 2116.$$\nThus, the smallest positive integer $n$ is\n$$n = 2116 - 2025 = 91.$$',
          rubric: [
            { code: 'M4', text: 'Recognizes $2025 = 45^2$ and computes the next square $46^2 = 2116$.' },
            { code: 'A2', text: 'Subtracts $2116 - 2025 = 91$, option E.' }
          ]
        },
        {
          label: '12',
          marks: 6,
          prompt:
            'In the diagram, a number is to be written at each of the vertices of the three pentagons. Some of the numbers have already been written.\n\nIf the sum of the numbers at the vertices of each pentagon is to be $25$, what is the value of $x$?\n\nA. $6$\nB. $7$\nC. $8$\nD. $9$\nE. $10$',
          figures: [
            {
              src: '/papers/cemc-cayley-2025/fig-12.webp',
              alt: 'Three edge-sharing pentagons with circular vertex nodes; the left pentagon shows 4, 9, 5, the right shows 7, 3, 7, and the bottom shared vertex of the middle pentagon is labeled x.',
              caption: 'Three linked pentagons with known vertex values and unknown bottom vertex x.'
            }
          ],
          answer: 'E. $10$',
          principle: 'Express the pairwise sums of the shared vertices from the outer pentagons and substitute into the middle pentagon.',
          solution:
            'Let $v$ and $w$ be the two shared vertices between the left and middle pentagons, and let $y$ and $z$ be the two shared vertices between the right and middle pentagons.\n- From the left pentagon, $4 + 9 + 5 + v + w = 25$, so\n  $$v + w = 25 - 18 = 7.$$\n- From the right pentagon, $7 + 3 + 7 + y + z = 25$, so\n  $$y + z = 25 - 17 = 8.$$\n- The middle pentagon consists of the five vertices $v, w, x, y, z$, whose sum is $25$:\n  $$(v + w) + x + (y + z) = 25 \\implies 7 + x + 8 = 25 \\implies x = 10.$$',
          rubric: [
            { code: 'M4', text: 'Finds the shared-pair sums $v + w = 7$ and $y + z = 8$ from the outer pentagons.' },
            { code: 'A2', text: 'Substitutes into $(v+w) + x + (y+z) = 25$ to get $x = 10$, option E.' }
          ]
        },
        {
          label: '13',
          marks: 6,
          prompt:
            'Farhan has a blue hat, a white hat, a blue scarf, a white scarf, and a green scarf. He randomly chooses one hat and one scarf. What is the probability that the hat and the scarf are the same colour?\n\nA. $\\frac{1}{3}$\nB. $\\frac{2}{5}$\nC. $\\frac{2}{3}$\nD. $\\frac{3}{5}$\nE. $\\frac{1}{6}$',
          answer: 'A. $\\frac{1}{3}$',
          principle: 'Count equally likely (hat, scarf) pairs or add probabilities of disjoint matching-colour events.',
          solution:
            'There are $2$ hats (blue, white) and $3$ scarves (blue, white, green), giving $2 \\times 3 = 6$ equally likely (hat, scarf) pairs.\nThe pairs with the same colour are $(\\text{blue hat}, \\text{blue scarf})$ and $(\\text{white hat}, \\text{white scarf})$, which is $2$ favourable outcomes.\nTherefore, the probability is\n$$\\frac{2}{6} = \\frac{1}{3}.$$',
          rubric: [
            { code: 'M4', text: 'Counts $2 \\times 3 = 6$ equally likely combinations and identifies the $2$ matching pairs (both blue or both white).' },
            { code: 'A2', text: 'Simplifies $\\frac{2}{6} = \\frac{1}{3}$, option A.' }
          ]
        },
        {
          label: '14',
          marks: 6,
          prompt:
            'Yesterday, $200$ people bought ice cream at the Cayley Creamery.\nA total of $85$ people ordered fudge with their ice cream.\nA total of $60$ people ordered sprinkles with their ice cream.\nA total of $32$ people ordered both fudge and sprinkles.\nHow many of the $200$ people ordered neither fudge nor sprinkles?\n\nA. $23$\nB. $55$\nC. $87$\nD. $113$\nE. $168$',
          answer: 'C. $87$',
          principle: 'Use inclusion-exclusion $|F \\cup S| = |F| + |S| - |F \\cap S|$ and subtract from the total.',
          solution:
            'By the Principle of Inclusion-Exclusion, the number of people who ordered fudge or sprinkles (or both) is\n$$85 + 60 - 32 = 113.$$\nSubtracting from the $200$ total customers gives the number who ordered neither:\n$$200 - 113 = 87.$$',
          rubric: [
            { code: 'M4', text: 'Applies inclusion-exclusion to find $85 + 60 - 32 = 113$ people ordered at least one topping.' },
            { code: 'A2', text: 'Computes $200 - 113 = 87$, option C.' }
          ]
        },
        {
          label: '15',
          marks: 6,
          prompt:
            'In the diagram, $\\triangle ABC$ is right-angled at $B$ and the semi-circle has diameter $BC$. If $AB = 20$ and $AC = 40$, what is the area of the semi-circle?\n\nA. $37.5\\pi$\nB. $75\\pi$\nC. $100\\pi$\nD. $150\\pi$\nE. $225\\pi$',
          figures: [
            {
              src: '/papers/cemc-cayley-2025/fig-15.webp',
              alt: 'Right triangle ABC with right angle at B, vertical leg AB labeled 20, hypotenuse AC labeled 40, and a semicircle drawn below diameter BC.',
              caption: 'Right triangle ABC with semicircle constructed on leg BC as diameter.'
            }
          ],
          answer: 'D. $150\\pi$',
          principle: 'Apply the Pythagorean theorem to find $BC^2$, then compute $\\frac{1}{2}\\pi r^2$ where $r = \\frac{BC}{2}$.',
          solution:
            'Since $\\triangle ABC$ is right-angled at $B$, the Pythagorean theorem gives\n$$BC^2 = AC^2 - AB^2 = 40^2 - 20^2 = 1600 - 400 = 1200.$$\nThe diameter of the semi-circle is $BC$, so its radius is $r = \\frac{BC}{2}$, meaning\n$$r^2 = \\frac{BC^2}{4} = \\frac{1200}{4} = 300.$$\nTherefore, the area of the semi-circle is\n$$\\frac{1}{2}\\pi r^2 = \\frac{1}{2}\\pi(300) = 150\\pi.$$',
          rubric: [
            { code: 'M4', text: 'Uses the Pythagorean theorem to find $BC^2 = 1200$ and $r^2 = \\frac{BC^2}{4} = 300$.' },
            { code: 'A2', text: 'Computes the semicircle area $\\frac{1}{2}\\pi(300) = 150\\pi$, option D.' }
          ]
        },
        {
          label: '16',
          marks: 6,
          prompt:
            'A jar contains $600$ marbles, each of which is either red, yellow, or green. The ratio of the number of red marbles to the number of yellow marbles to the number of green marbles is $7 : 3 : 5$. If $20$ marbles of each colour are removed, the new ratio of the number of red marbles to the number of yellow marbles to number of green marbles is\n\nA. $5 : 1 : 3$\nB. $15 : 7 : 11$\nC. $13 : 5 : 9$\nD. $9 : 5 : 7$\nE. $209 : 89 : 149$',
          answer: 'C. $13 : 5 : 9$',
          principle: 'Scale the initial ratio to match the total count $600$, subtract $20$ from each colour, and reduce by the GCD.',
          solution:
            'Let the numbers of red, yellow, and green marbles be $7n$, $3n$, and $5n$. Since the total is $600$:\n$$7n + 3n + 5n = 600 \\implies 15n = 600 \\implies n = 40.$$\nThus the jar initially holds $7(40) = 280$ red, $3(40) = 120$ yellow, and $5(40) = 200$ green marbles.\nRemoving $20$ marbles of each colour leaves $260$ red, $100$ yellow, and $180$ green marbles.\nDividing each term of $260 : 100 : 180$ by $20$ gives\n$$13 : 5 : 9.$$',
          rubric: [
            { code: 'M4', text: 'Solves $15n = 600$ to find initial counts $280, 120, 200$ and subtracts $20$ from each.' },
            { code: 'A2', text: 'Simplifies $260 : 100 : 180$ to $13 : 5 : 9$, option C.' }
          ]
        },
        {
          label: '17',
          marks: 6,
          prompt:
            'For each non-zero real number $a$, we define $a^* = \\dfrac{5}{a}$.\nThe expression $(100^*)^*$ is equal to\n\nA. $100$\nB. $\\frac{1}{4}$\nC. $20$\nD. $\\frac{1}{20}$\nE. $\\frac{1}{100}$',
          answer: 'A. $100$',
          principle: 'Apply the definition twice from the inside out (the operation $a \\mapsto \\frac{5}{a}$ is its own inverse).',
          solution:
            'First evaluate $100^*$:\n$$100^* = \\frac{5}{100} = \\frac{1}{20}.$$\nApplying the operation a second time:\n$$(100^*)^* = \\left(\\frac{1}{20}\\right)^* = \\frac{5}{1/20} = 5 \\times 20 = 100.$$',
          rubric: [
            { code: 'M4', text: 'Computes $100^* = \\frac{5}{100} = \\frac{1}{20}$ and substitutes into $\\frac{5}{a}$.' },
            { code: 'A2', text: 'Evaluates $\\frac{5}{1/20} = 100$, option A.' }
          ]
        },
        {
          label: '18',
          marks: 6,
          prompt:
            'Lavinia has one bottle with capacity $6\\text{ L}$ and another bottle with capacity $5\\text{ L}$. Both bottles are empty. She has a piece of paper with the following steps printed on it:\n(i) Fill the $6\\text{ L}$ bottle completely with water.\n(ii) Pour water from the $6\\text{ L}$ bottle into the $5\\text{ L}$ bottle until the $5\\text{ L}$ bottle is full.\n(iii) Empty the $5\\text{ L}$ bottle.\n(iv) Pour water from the $6\\text{ L}$ bottle into the $5\\text{ L}$ bottle until the $5\\text{ L}$ bottle is full or the $6\\text{ L}$ bottle is empty, whichever happens first. If the $5\\text{ L}$ bottle fills, empty the $5\\text{ L}$ bottle and return to the beginning of this step.\nLavinia completes this sequence of four steps in this order a total of $3$ times. Lavinia never spills any water. How much water will be in the $5\\text{ L}$ bottle after Lavinia is finished?\n\nA. $0\\text{ L}$\nB. $1\\text{ L}$\nC. $2\\text{ L}$\nD. $3\\text{ L}$\nE. $4\\text{ L}$',
          answer: 'D. $3\\text{ L}$',
          principle: 'Track the water volumes in both bottles step by step across each of the three repetitions.',
          solution:
            'Track the ordered pair $(V_6, V_5)$ representing the volumes in the $6\\text{ L}$ and $5\\text{ L}$ bottles:\n- **Round 1** (starting from $(0, 0)$):\n  (i) $(6, 0) \\to$ (ii) $(1, 5) \\to$ (iii) $(1, 0) \\to$ (iv) $(0, 1)$.\n- **Round 2** (starting from $(0, 1)$):\n  (i) $(6, 1) \\to$ (ii) pouring $4\\text{ L}$ fills the $5\\text{ L}$ bottle, giving $(2, 5) \\to$ (iii) $(2, 0) \\to$ (iv) $(0, 2)$.\n- **Round 3** (starting from $(0, 2)$):\n  (i) $(6, 2) \\to$ (ii) pouring $3\\text{ L}$ fills the $5\\text{ L}$ bottle, giving $(3, 5) \\to$ (iii) $(3, 0) \\to$ (iv) $(0, 3)$.\n\nAfter completing the sequence $3$ times, the $5\\text{ L}$ bottle contains $3\\text{ L}$ of water.',
          rubric: [
            { code: 'M4', text: 'Correctly traces the bottle states across Round 1 $(0,1)$, Round 2 $(0,2)$, and Round 3.' },
            { code: 'A2', text: 'Finds $3\\text{ L}$ in the $5\\text{ L}$ bottle, option D.' }
          ]
        },
        {
          label: '19',
          marks: 6,
          prompt:
            'In the diagram, $ABCD$ is a square with area $k$. Point $E$ is on side $AB$ with $AE = \\frac{1}{3}AB$. Point $G$ is on side $BC$ with $BG = \\frac{1}{4}BC$. Point $F$ is on $ED$ so that $GF$ is perpendicular to $BC$. The area of $\\triangle FGC$ is\n\nA. $\\frac{9}{32}k$\nB. $\\frac{13}{48}k$\nC. $\\frac{3}{14}k$\nD. $\\frac{7}{24}k$\nE. $\\frac{2}{7}k$',
          figures: [
            {
              src: '/papers/cemc-cayley-2025/fig-19.webp',
              alt: 'Square ABCD with point E on AB, point G on BC, segment ED, and perpendicular segment GF to BC with right-angle mark at G and segment FC.',
              caption: 'Square ABCD with segment ED and perpendicular GF forming triangle FGC.'
            }
          ],
          answer: 'A. $\\frac{9}{32}k$',
          principle: 'Choose a convenient side length (such as $12$, the LCM of $3$ and $4$) or use coordinate/similar-triangle ratios to express $[\\triangle FGC]$ in terms of $k$.',
          solution:
            'Let the side length of square $ABCD$ be $s = 12$ (so $k = s^2 = 144$).\n- Since $AE = \\frac{1}{3}(12) = 4$, we have $EB = 12 - 4 = 8$.\n- Since $BG = \\frac{1}{4}(12) = 3$, we have $GC = 12 - 3 = 9$.\n\nDrop a perpendicular from $E$ to $FG$ at $H$. Then $EBGH$ is a rectangle with $GH = EB = 8$ and $EH = BG = 3$.\nBecause $EH \\parallel AD$, right triangles $\\triangle EFH$ and $\\triangle EDA$ are similar:\n$$\\frac{FH}{EH} = \\frac{AE}{AD} = \\frac{4}{12} = \\frac{1}{3} \\implies FH = \\frac{1}{3}(3) = 1.$$\nThus $FG = GH + FH = 8 + 1 = 9$.\nThe area of right triangle $\\triangle FGC$ is\n$$\\text{Area}(\\triangle FGC) = \\frac{1}{2}(GC)(FG) = \\frac{1}{2}(9)(9) = \\frac{81}{2}.$$\nExpressing this as a fraction of $k = 144$:\n$$\\frac{81/2}{144}k = \\frac{81}{288}k = \\frac{9}{32}k.$$',
          rubric: [
            { code: 'M2', text: 'Uses similar triangles or slope of $ED$ to find $FG = \\frac{3}{4}s$ (or $9$ when $s=12$) and $GC = \\frac{3}{4}s$ (or $9$).' },
            { code: 'M2', text: 'Computes $\\text{Area}(\\triangle FGC) = \\frac{1}{2}\\left(\\frac{3}{4}s\\right)\\left(\\frac{3}{4}s\\right) = \\frac{9}{32}s^2$.' },
            { code: 'A2', text: 'Expresses the area as $\\frac{9}{32}k$, option A.' }
          ]
        },
        {
          label: '20',
          marks: 6,
          prompt:
            'In the diagram, line segment $CD$ has length $48\\text{ cm}$. Two ants, Violet and Petunia, are at point $C$ and plan to walk to point $D$. Violet walks along four congruent semi-circles above $CD$. Petunia walks along three congruent semi-circles below $CD$.\n\nViolet and Petunia start walking at the same time, and they walk at constant, but different, speeds. Petunia arrives at $D$ $12$ seconds before Violet and travels $3$ times as quickly as Violet. How long does it take Violet to walk from $C$ to $D$?\n\nA. $24$ seconds\nB. $18$ seconds\nC. $36$ seconds\nD. $16$ seconds\nE. $21$ seconds',
          figures: [
            {
              src: '/papers/cemc-cayley-2025/fig-20.webp',
              alt: 'Horizontal segment CD spanned above by four congruent semicircles end-to-end and below by three congruent semicircles end-to-end.',
              caption: 'Paths along four upper semicircles and three lower semicircles between C and D.'
            }
          ],
          answer: 'B. $18\\text{ seconds}$',
          principle: 'Compare the total arc lengths of both semicircular paths, then solve $d = vt$ using the speed ratio and time difference.',
          solution:
            'Compute the total distance each ant walks:\n- Violet walks along $4$ congruent semi-circles, each of diameter $\\frac{48}{4} = 12\\text{ cm}$, so her total distance is\n  $$4 \\times \\frac{1}{2}\\pi(12) = 24\\pi\\text{ cm}.$$\n- Petunia walks along $3$ congruent semi-circles, each of diameter $\\frac{48}{3} = 16\\text{ cm}$, so her total distance is\n  $$3 \\times \\frac{1}{2}\\pi(16) = 24\\pi\\text{ cm}.$$\n\nBoth ants walk the same distance $24\\pi\\text{ cm}$. Let $t$ seconds be Violet\'s time and $v\\text{ cm/s}$ be her speed. Then Petunia walks for $t - 12$ seconds at speed $3v\\text{ cm/s}$. Equating distances:\n$$vt = 3v(t - 12).$$\nDividing by $v > 0$ gives\n$$t = 3t - 36 \\implies 2t = 36 \\implies t = 18\\text{ seconds}.$$',
          rubric: [
            { code: 'M2', text: 'Proves both paths have equal total length $24\\pi\\text{ cm}$.' },
            { code: 'M2', text: 'Sets up $vt = 3v(t - 12)$.' },
            { code: 'A2', text: 'Solves for $t = 18\\text{ seconds}$, option B.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Part C: Integer Answer 00–99 (8 marks each)',
      marks: 40,
      stem: 'Solve each problem and give your final answer as an integer from 00 to 99 inclusive (Questions 21–25, 8 marks each).',
      parts: [
        {
          label: '21',
          marks: 8,
          prompt:
            'Points $A(-3, 5)$, $B(0, 7)$ and $C(r, t)$ lie along a line. If $BC = 4AB$ and $r > 0$, what is the value of $r + t$?',
          answer: '$27$',
          principle: 'Use directed coordinate steps (or similar right triangles) along the line from $A$ through $B$ to $C$.',
          solution:
            'Going from $A(-3, 5)$ to $B(0, 7)$, the $x$-coordinate increases by $0 - (-3) = 3$ and the $y$-coordinate increases by $7 - 5 = 2$.\nBecause $A$, $B$, and $C(r, t)$ are collinear with $r > 0$ (so $C$ lies past $B$ in the same direction from $A$ as $B$) and $BC = 4AB$, the displacement from $B$ to $C$ is $4$ times the displacement from $A$ to $B$:\n$$r = 0 + 4(3) = 12, \\qquad t = 7 + 4(2) = 15.$$\nTherefore,\n$$r + t = 12 + 15 = 27.$$',
          rubric: [
            { code: 'M4', text: 'Finds the step vector $(3, 2)$ from $A$ to $B$ and scales by $4$ in the $r > 0$ direction.' },
            { code: 'M2', text: 'Determines $r = 12$ and $t = 15$.' },
            { code: 'A2', text: 'Computes $r + t = 27$.' }
          ]
        },
        {
          label: '22',
          marks: 8,
          prompt:
            'A *Katende number* is a four-digit positive integer where the first two digits and the last two digits, in order, form two integers that are increasing consecutive multiples of some positive integer. For example, $2025$ is a Katende number because $20 = 4 \\times 5$ and $25 = 5 \\times 5$. Also, $2346$ and $2324$ are Katende numbers. How many Katende numbers are there that are greater than $2400$ and less than $2600$?',
          answer: '$11$',
          principle: 'Write the first two digits as $nm$ and the last two digits as $n(m + 1)$, so $(n, m)$ ranges over all positive divisor pairs of $24$ and $25$.',
          solution:
            'A four-digit integer strictly between $2400$ and $2600$ has first two digits equal to either $24$ or $25$. Let the last two digits form the two-digit integer $L$ ($10 \\le L \\le 99$, or $00$–$99$ with $L > 24$ or $25$, so automatically $L$ is a two-digit number).\nFor the first two digits and $L$ to be increasing consecutive multiples of some positive integer $n$, there must exist positive integers $n, m$ such that the first two digits equal $nm$ and $L = n(m + 1)$.\n- **Case 1: First two digits are $24$ (so $nm = 24$).**\n  The positive divisor pairs $(n, m)$ of $24$ are\n  $$(1, 24),\\ (2, 12),\\ (3, 8),\\ (4, 6),\\ (6, 4),\\ (8, 3),\\ (12, 2),\\ (24, 1).$$\n  Each gives a distinct $L = n(m + 1) = 24 + n$:\n  $$25, 26, 27, 28, 30, 32, 36, 48.$$\n  All $8$ lie in $[25, 99]$, producing $8$ Katende numbers ($2425, 2426, 2427, 2428, 2430, 2432, 2436, 2448$).\n- **Case 2: First two digits are $25$ (so $nm = 25$).**\n  The positive divisor pairs $(n, m)$ of $25$ are $(1, 25)$, $(5, 5)$, and $(25, 1)$, giving $L = 25 + n$:\n  $$26, 30, 50.$$\n  All $3$ lie in $[26, 99]$, producing $3$ Katende numbers ($2526, 2530, 2550$).\n\nIn total, there are $8 + 3 = 11$ such Katende numbers.',
          rubric: [
            { code: 'M3', text: 'Characterizes valid last-two-digit endings as $24 + d$ for $d \\mid 24$ and $25 + d$ for $d \\mid 25$.' },
            { code: 'M3', text: 'Lists all $8$ divisors of $24$ and $3$ divisors of $25$ and checks every resulting $L < 100$.' },
            { code: 'A2', text: 'Sums $8 + 3 = 11$.' }
          ]
        },
        {
          label: '23',
          marks: 8,
          prompt:
            'Amr, Bai, Cindy, and Derek divide $N$ coins between them so that each receives a whole number of coins. Amr receives $\\frac{1}{3}$ of the total number of coins that Bai, Cindy and Derek receive. Bai receives $\\frac{1}{5}$ of the total number of coins that Amr, Cindy and Derek receive. Cindy receives $\\frac{1}{7}$ of the total number of coins that Amr, Bai and Derek receive. If $N < 100$, what is the largest possible value of $N$?',
          answer: '$96$',
          principle: 'Rewrite each condition "a receives $\\frac{1}{k}$ of the others" as "a receives $\\frac{1}{k+1}$ of the total $N$", then take the LCM of the denominators.',
          solution:
            'Let $A, B, C, D$ be the whole numbers of coins received by Amr, Bai, Cindy, and Derek, with $A + B + C + D = N$.\n- $A = \\frac{1}{3}(B + C + D) \\implies 3A = N - A \\implies 4A = N$, so $A = \\frac{N}{4}$.\n- $B = \\frac{1}{5}(A + C + D) \\implies 5B = N - B \\implies 6B = N$, so $B = \\frac{N}{6}$.\n- $C = \\frac{1}{7}(A + B + D) \\implies 7C = N - C \\implies 8C = N$, so $C = \\frac{N}{8}$.\n\nFor $A$, $B$, and $C$ to all be whole numbers, $N$ must be divisible by $\\text{lcm}(4, 6, 8) = 24$.\nWhenever $N = 24k$ for a positive integer $k$, $A = 6k$, $B = 4k$, $C = 3k$, and\n$$D = 24k - (6k + 4k + 3k) = 11k,$$\nwhich is also a whole number.\nThe largest multiple of $24$ strictly less than $100$ is $24 \\times 4 = 96$ (giving $A = 24, B = 16, C = 12, D = 44$).',
          rubric: [
            { code: 'M4', text: 'Rewrites the three conditions as $A = \\frac{N}{4}$, $B = \\frac{N}{6}$, and $C = \\frac{N}{8}$.' },
            { code: 'M2', text: 'Finds $\\text{lcm}(4, 6, 8) = 24$ and verifies $D = \\frac{11}{24}N$ is an integer.' },
            { code: 'A2', text: 'Selects the largest multiple of $24$ below $100$, namely $96$.' }
          ]
        },
        {
          label: '24',
          marks: 8,
          prompt:
            'A circle has area $A$, a regular octagon has area $\\frac{1}{2}A$, and a regular dodecagon has area $\\frac{1}{2}A$. The circle has radius $3000$. The distance from the centre of the octagon to each of its vertices is $x$, as shown. Also, the distance from the centre of the dodecagon to each of its vertices is $y$.\n\nWhat is the integer closest to $x - y$?\n(A regular polygon is a polygon all of whose side lengths are equal and all of whose interior angles are equal. An octagon has $8$ sides and a dodecagon has $12$ sides.)',
          figures: [
            {
              src: '/papers/cemc-cayley-2025/fig-24.webp',
              alt: 'A circle on the left, a regular octagon in the middle with dashed radius x from centre to a vertex, and a regular dodecagon on the right with dashed radius y from centre to a vertex.',
              caption: 'Circle, regular octagon with circumradius x, and regular dodecagon with circumradius y.'
            }
          ],
          answer: '$65$',
          principle: 'Partition each regular $n$-gon from its centre into $n$ congruent isosceles triangles of area $\\frac{1}{2}R^2\\sin\\left(\\frac{360^\\circ}{n}\\right)$.',
          solution:
            'The circle of radius $3000$ has area $A = \\pi(3000)^2$, so each polygon has area\n$$\\frac{1}{2}A = \\frac{\\pi(3000)^2}{2} = 2\\pi(1500)^2.$$\n- **Regular octagon ($8$ sides):** Connecting the centre to the $8$ vertices forms $8$ congruent isosceles triangles, each with two sides of length $x$ and included central angle $\\frac{360^\\circ}{8} = 45^\\circ$. Thus its area is\n  $$8 \\cdot \\frac{1}{2}x^2 \\sin 45^\\circ = 4x^2 \\cdot \\frac{\\sqrt{2}}{2} = 2\\sqrt{2}\\,x^2.$$\n  Equating to $2\\pi(1500)^2$ gives\n  $$2\\sqrt{2}\\,x^2 = 2\\pi(1500)^2 \\implies x = 1500\\sqrt{\\frac{\\pi}{\\sqrt{2}}} \\approx 2235.6752.$$\n- **Regular dodecagon ($12$ sides):** Connecting the centre to the $12$ vertices forms $12$ congruent isosceles triangles, each with two sides of length $y$ and included central angle $\\frac{360^\\circ}{12} = 30^\\circ$. Thus its area is\n  $$12 \\cdot \\frac{1}{2}y^2 \\sin 30^\\circ = 6y^2 \\cdot \\frac{1}{2} = 3y^2.$$\n  Equating to $2\\pi(1500)^2$ gives\n  $$3y^2 = 2\\pi(1500)^2 \\implies y = 1500\\sqrt{\\frac{2\\pi}{3}} \\approx 2170.8038.$$\n\nTherefore,\n$$x - y \\approx 2235.6752 - 2170.8038 = 64.8714,$$\nand the integer closest to $x - y$ is $65$.',
          rubric: [
            { code: 'M3', text: 'Derives the octagon area $2\\sqrt{2}\\,x^2$ and solves for $x \\approx 2235.68$.' },
            { code: 'M3', text: 'Derives the dodecagon area $3y^2$ and solves for $y \\approx 2170.80$.' },
            { code: 'A2', text: 'Computes $x - y \\approx 64.87$ and rounds to $65$.' }
          ]
        },
        {
          label: '25',
          marks: 8,
          prompt:
            'Rita is colouring a picture of a flower. She has already coloured the centre and the stem of the flower, as shown. Next, she will colour each of the six petals with exactly one of the colours: red, orange, yellow, and blue. No two neighbouring petals can be the same colour and not all four colours need to be used. There are $N$ different-looking ways in which Rita can colour the petals. What are the rightmost two digits of $N$?',
          figures: [
            {
              src: '/papers/cemc-cayley-2025/fig-25.webp',
              alt: 'Flower illustration with a solid black circular centre, a curved black stem, and six uncoloured petals arranged around the centre.',
              caption: 'Flower with six uncoloured petals around a coloured centre and stem.'
            }
          ],
          answer: '$32$',
          principle: 'Because the stem breaks rotational symmetry, the six petals form a fixed $6$-cycle; count $4$-colourings by cases or via the chromatic polynomial $(k-1)^6 + (k-1)$.',
          solution:
            'Because the stem fixes the orientation of the flower, the $6$ petals are distinguishable and form a cycle of length $6$.\nSuppose the top petal is coloured red ($4$ symmetric choices for the colour of the top petal), and count cases by how many petals are red (at most $3$, since no two adjacent petals may share a colour):\n- **Case 1: $3$ red petals.** The red petals must alternate around the flower ($1$ placement). Each of the remaining $3$ petals can take any of the other $3$ colours independently, giving\n  $$3^3 = 27\\text{ ways}.$$\n- **Case 2: $2$ red petals.** Besides the top petal (position $1$), the second red petal can be at position $3$, $4$, or $5$ (clockwise).\n  - If the second red petal is at position $4$ (opposite), positions $2$ and $6$ each have $3$ choices, and then positions $3$ and $5$ each have $2$ choices: $3 \\times 3 \\times 2 \\times 2 = 36$ ways.\n  - If the second red petal is at position $3$ (or symmetrically position $5$), position $2$ between them has $3$ choices. The remaining $3$ consecutive petals (positions $4, 5, 6$) use only the $3$ non-red colours with adjacent petals different: either $3$ distinct colours ($3 \\times 2 \\times 1 = 6$ ways) or $2$ colours in an $u$-$v$-$u$ pattern ($3 \\times 2 = 6$ ways), giving $3 \\times (6 + 6) = 36$ ways each.\n  Thus Case 2 gives $36 + 36 + 36 = 108$ ways.\n- **Case 3: $1$ red petal.** Moving clockwise from position $1$, position $2$ has $3$ non-red choices, and positions $3, 4, 5, 6$ each have $2$ choices (differing from both red and the preceding petal; in particular, position $5$ cannot be red, so position $6$ always has two distinct forbidden colours: position $5$ and red):\n  $$3 \\times 2 \\times 2 \\times 2 \\times 2 = 48\\text{ ways}.$$\n\nWith top petal red, there are $27 + 108 + 48 = 183$ colourings. Multiplying by the $4$ choices for the top petal:\n$$N = 4 \\times 183 = 732.$$\n(Equivalently, the number of proper $k$-colourings of a $6$-cycle is $(k-1)^6 + (k-1) = 3^6 + 3 = 729 + 3 = 732$.) The rightmost two digits of $732$ are $32$.',
          rubric: [
            { code: 'M4', text: 'Fixes the top petal colour and correctly counts the three cases ($27 + 108 + 48 = 183$), or applies $(k-1)^6 + (k-1)$ for $k=4$.' },
            { code: 'M2', text: 'Computes the total $N = 4 \\times 183 = 732$.' },
            { code: 'A2', text: 'Extracts the rightmost two digits $32$.' }
          ]
        }
      ]
    }
  ]
};
