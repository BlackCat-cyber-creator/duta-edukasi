/**
 * Paket Soal Terstruktur: CEMC Euclid Grade 12 — 2025 (10 official questions, 25 parts, 100 marks)
 * Sumber: 2025EuclidContest.pdf & 2025EuclidSolution.pdf (CEMC — University of Waterloo).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Diagram pada soal 2(c), 4(a), 4(b), 6(b),
 * dan 10 diekstrak dari naskah resmi ke public/papers/cemc-euclid-2025/fig-*.webp.
 */
export default {
  id: 'cemc-euclid-2025',
  slug: 'cemc-euclid-2025',
  subject: 'olimpiade-mat',
  grade: 12,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'CEMC Euclid Grade 12 — 2025: official CEMC Waterloo contest questions & solutions',
  relatedChapterIds: [
    'sma12-bab1-barisan-deret',
    'sma12-bab3-kaidah-pencacahan',
    'sma12-bab4-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'Euclid',
  title: 'CEMC Euclid Grade 12 — 2025',
  totalMarks: 100,
  instructions:
    'Attempt all 10 questions (official contest time: 2 hours 30 minutes; each question is worth 10 marks for a total of 100 marks). Non-programmable calculating devices without internet access, communication features, stored notes/programs, CAS, or dynamic geometry software are permitted. Short Answer parts (marked with a lightbulb on the official paper) are worth 3 marks each; Full Solution parts are worth the remainder of the 10 marks for that question and require complete, well-organized mathematical justification. Express answers as simplified exact numbers unless otherwise indicated. Diagrams are not drawn to scale.',
  source: {
    org: 'CEMC — University of Waterloo',
    file: '2025EuclidContest.pdf',
    license: 'Hak cipta pada penyelenggara (CEMC University of Waterloo); dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Question 1: Linear Equations, Exponents & Intersecting Lines',
      marks: 10,
      stem: 'Parts (a) and (b) are Short Answer (3 marks each); part (c) is Full Solution (4 marks).',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: '[Short Answer] If $4(x - 2) = 2(x - 4)$, what is the value of $x$?',
          answer: '$0$',
          principle: 'Expand both sides of the linear equation and collect like terms to isolate $x$.',
          solution:
            'Expanding both sides gives\n$$4x - 8 = 2x - 8.$$\nAdding $8$ to both sides and subtracting $2x$ yields\n$$2x = 0 \\implies x = 0.$$',
          rubric: [
            { code: 'M2', text: 'Expands $4(x - 2) = 2(x - 4)$ to $4x - 8 = 2x - 8$ and simplifies to $2x = 0$.' },
            { code: 'A1', text: 'Finds $x = 0$.' }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt: '[Short Answer] If $2x = 9$, what is the value of $2^{6x - 23}$?',
          answer: '$16$',
          principle: 'Rewrite $6x$ as $3(2x)$ to substitute the given value directly into the exponent.',
          solution:
            'Since $2x = 9$, we have $6x = 3(2x) = 3(9) = 27$. Substituting into the exponent gives\n$$2^{6x - 23} = 2^{27 - 23} = 2^4 = 16.$$',
          rubric: [
            { code: 'M2', text: 'Evaluates $6x = 3(2x) = 27$ (or $x = \\frac{9}{2}$) to obtain exponent $6x - 23 = 4$.' },
            { code: 'A1', text: 'Computes $2^4 = 16$.' }
          ]
        },
        {
          label: 'c',
          marks: 4,
          prompt: '[Full Solution] Determine the coordinates of the point of intersection of the lines with equations $y = 3x + 7$ and $y = 7x + 3$.',
          answer: '$(1, 10)$',
          principle: 'Equate the two expressions for $y$ to solve for $x$, then substitute back to obtain $y$.',
          solution:
            'At the point of intersection, the $y$-coordinates are equal:\n$$3x + 7 = 7x + 3.$$\nRearranging gives\n$$4 = 4x \\implies x = 1.$$\nSubstituting $x = 1$ into $y = 3x + 7$ yields\n$$y = 3(1) + 7 = 10.$$\nChecking in the second equation, $y = 7(1) + 3 = 10$. Hence, the point of intersection has coordinates $(1, 10)$.',
          rubric: [
            { code: 'M2', text: 'Equates $3x + 7 = 7x + 3$ and solves for $x = 1$.' },
            { code: 'M1', text: 'Substitutes $x = 1$ into either line equation to obtain $y = 10$.' },
            { code: 'A1', text: 'States the coordinates $(1, 10)$ clearly.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Question 2: Radical Inequalities, Odd Integer Sums & Right Triangles',
      marks: 10,
      stem: 'Parts (a) and (b) are Short Answer (3 marks each); part (c) is Full Solution (4 marks).',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: '[Short Answer] There is one positive integer $k$ for which $3 < \\sqrt{k^2 + 4} < 4$. What is this positive integer $k$?',
          answer: '$3$',
          principle: 'Square all parts of the positive compound inequality to bound $k^2$ between two integers.',
          solution:
            'Because all three expressions are positive, squaring preserves the inequality signs:\n$$3^2 < k^2 + 4 < 4^2 \\implies 9 < k^2 + 4 < 16 \\implies 5 < k^2 < 12.$$\nAmong positive integers, $2^2 = 4$, $3^2 = 9$, and $4^2 = 16$, so the only positive integer $k$ satisfying $5 < k^2 < 12$ is $k = 3$.',
          rubric: [
            { code: 'M2', text: 'Squares the inequality to obtain $9 < k^2 + 4 < 16$ and $5 < k^2 < 12$.' },
            { code: 'A1', text: 'Identifies the unique positive integer $k = 3$.' }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt: '[Short Answer] What is the sum of the $20$ smallest odd positive integers?',
          answer: '$400$',
          principle: 'The sum of the first $n$ odd positive integers is $n^2$, or compute the arithmetic series $1 + 3 + \\dots + 39$.',
          solution:
            'The $20$ smallest odd positive integers form an arithmetic sequence with first term $a_1 = 1$, common difference $d = 2$, and $20$th term $a_{20} = 1 + 19(2) = 39$:\n$$S = 1 + 3 + 5 + \\cdots + 37 + 39.$$\nBy the arithmetic series formula (or pairing opposite ends summing to $1 + 39 = 40$),\n$$S = \\frac{20}{2}(1 + 39) = 10 \\times 40 = 400.$$',
          rubric: [
            { code: 'M2', text: 'Identifies the series $1 + 3 + \\cdots + 39$ (or uses the sum of the first $n$ odd integers $n^2$).' },
            { code: 'A1', text: 'Computes the sum $400$.' }
          ]
        },
        {
          label: 'c',
          marks: 4,
          prompt:
            '[Full Solution] In the diagram, $\\triangle BDF$ is equilateral and $\\angle FAB = \\angle BCD = \\angle DEF = 90^\\circ$. Also, $AB = 16$, $BC = 8$, $DE = 5$, and $FA = 13$. Determine the perimeter of hexagon $ABCDEF$.',
          figures: [
            {
              src: '/papers/cemc-euclid-2025/fig-2c.webp',
              alt: 'Hexagon ABCDEF containing an equilateral triangle BDF surrounded by right triangles ABF, BCD, and DEF with given leg lengths.',
              caption: 'Hexagon ABCDEF with equilateral triangle BDF and right angles at A, C, and E.'
            }
          ],
          answer: '$81$',
          principle: 'Use the Pythagorean Theorem on $\\triangle ABF$ to find the shared squared side length of equilateral $\\triangle BDF$, then apply Pythagoras to $\\triangle BCD$ and $\\triangle DEF$.',
          solution:
            'Since $\\triangle ABF$ is right-angled at $A$, the Pythagorean Theorem gives\n$$BF^2 = AB^2 + FA^2 = 16^2 + 13^2 = 256 + 169 = 425.$$\nBecause $\\triangle BDF$ is equilateral, $BD = DF = BF$, so $BD^2 = DF^2 = BF^2 = 425$.\n\nIn right-angled $\\triangle BCD$ (with $\\angle BCD = 90^\\circ$):\n$$BC^2 + CD^2 = BD^2 \\implies 8^2 + CD^2 = 425 \\implies CD^2 = 425 - 64 = 361 \\implies CD = \\sqrt{361} = 19.$$\n\nIn right-angled $\\triangle DEF$ (with $\\angle DEF = 90^\\circ$):\n$$DE^2 + EF^2 = DF^2 \\implies 5^2 + EF^2 = 425 \\implies EF^2 = 425 - 25 = 400 \\implies EF = \\sqrt{400} = 20.$$\n\nTherefore, the perimeter of hexagon $ABCDEF$ is\n$$AB + BC + CD + DE + EF + FA = 16 + 8 + 19 + 5 + 20 + 13 = 81.$$',
          rubric: [
            { code: 'M1', text: 'Computes $BF^2 = 16^2 + 13^2 = 425$ and uses $BD^2 = DF^2 = 425$.' },
            { code: 'M1', text: 'Applies the Pythagorean Theorem in $\\triangle BCD$ to find $CD = 19$.' },
            { code: 'M1', text: 'Applies the Pythagorean Theorem in $\\triangle DEF$ to find $EF = 20$.' },
            { code: 'A1', text: 'Sums all six sides to obtain perimeter $81$.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Question 3: Linear Systems, Parabolas & Proportional Reciprocals',
      marks: 10,
      stem: 'Parts (a) and (b) are Short Answer (3 marks each); part (c) is Full Solution (4 marks).',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: '[Short Answer] Suppose that $p + q + r = 18$ and $p + q = 5$ and $q + r = 9$. What is the value of $q$?',
          answer: '$-4$',
          principle: 'Add $(p + q)$ and $(q + r)$ to form $p + 2q + r$, then subtract $p + q + r$.',
          solution:
            'Adding $p + q = 5$ and $q + r = 9$ gives\n$$p + 2q + r = 5 + 9 = 14.$$\nSubtracting $p + q + r = 18$ yields\n$$q = (p + 2q + r) - (p + q + r) = 14 - 18 = -4.$$',
          rubric: [
            { code: 'M2', text: 'Combines $(p + q) + (q + r) - (p + q + r) = q$ (or solves $r = 13$ then $q$).' },
            { code: 'A1', text: 'Obtains $q = -4$.' }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt:
            '[Short Answer] The line with equation $6x + y = 24$ has its $x$-intercept at point $P$ and its $y$-intercept at point $Q$. What is an equation of the parabola whose $y$-intercept is at $Q$ and whose only $x$-intercept is at $P$?',
          answer: '$y = \\frac{3}{2}(x - 4)^2$',
          principle: 'A parabola with a single $x$-intercept at $(p, 0)$ has vertex form $y = a(x - p)^2$; determine $a$ using the $y$-intercept.',
          solution:
            'For the line $6x + y = 24$:\n- Setting $y = 0$ gives $6x = 24 \\implies x = 4$, so $P = (4, 0)$.\n- Setting $x = 0$ gives $y = 24$, so $Q = (0, 24)$.\n\nSince the parabola has its only $x$-intercept at $(4, 0)$, its vertex lies at $(4, 0)$, so its equation has the form\n$$y = a(x - 4)^2.$$\nSubstituting $(x, y) = (0, 24)$ gives\n$$24 = a(0 - 4)^2 = 16a \\implies a = \\frac{24}{16} = \\frac{3}{2}.$$\nHence, an equation of the parabola is $y = \\frac{3}{2}(x - 4)^2$ (equivalently $y = \\frac{3}{2}x^2 - 12x + 24$).',
          rubric: [
            { code: 'M1', text: 'Finds $P(4, 0)$ and $Q(0, 24)$.' },
            { code: 'M1', text: 'Uses $y = a(x - 4)^2$ and substitutes $(0, 24)$ to find $a = \\frac{3}{2}$.' },
            { code: 'A1', text: 'Writes the equation $y = \\frac{3}{2}(x - 4)^2$ (or expanded equivalent).' }
          ]
        },
        {
          label: 'c',
          marks: 4,
          prompt:
            '[Full Solution] Suppose that $\\dfrac{1}{2w} = \\dfrac{1}{3y} = \\dfrac{1}{4z}$ and $\\dfrac{1}{2w} + \\dfrac{1}{3y} + \\dfrac{1}{4z} = \\dfrac{1}{24}$. Determine the value of $w + y + z$.',
          answer: '$78$',
          principle: 'Notice that the three equal terms sum to $\\frac{1}{24}$, so each common term equals one-third of $\\frac{1}{24}$.',
          solution:
            'Let $k = \\frac{1}{2w} = \\frac{1}{3y} = \\frac{1}{4z}$. Substituting $k$ into the sum equation gives\n$$k + k + k = \\frac{1}{24} \\implies 3k = \\frac{1}{24} \\implies k = \\frac{1}{72}.$$\nTaking reciprocals yields\n$$2w = 72 \\implies w = 36, \\qquad 3y = 72 \\implies y = 24, \\qquad 4z = 72 \\implies z = 18.$$\nTherefore,\n$$w + y + z = 36 + 24 + 18 = 78.$$',
          rubric: [
            { code: 'M2', text: 'Equates the three equal terms to $\\frac{1}{3} \\cdot \\frac{1}{24} = \\frac{1}{72}$.' },
            { code: 'M1', text: 'Solves for $w = 36$, $y = 24$, and $z = 18$.' },
            { code: 'A1', text: 'Sums to obtain $w + y + z = 78$.' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Question 4: Wheel Revolutions & Similar Triangles in a Rectangle',
      marks: 10,
      stem: 'Part (a) is Short Answer (3 marks); part (b) is Full Solution (7 marks).',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            '[Short Answer] Terry\'s bicycle has a larger front wheel with radius $15\\text{ cm}$ and a smaller rear wheel with radius $9\\text{ cm}$, as shown. Terry ties a ribbon to the top of each wheel, and then starts to ride forward. Terry travels $d\\text{ cm}$ forward and stops. Both ribbons are again at the top of the wheels. What is the integer closest to the smallest possible value of $d$ with $d > 0$?',
          figures: [
            {
              src: '/papers/cemc-euclid-2025/fig-4a.webp',
              alt: 'Bicycle with a front wheel of radius 15 cm and a rear wheel of radius 9 cm, each marked with an X at its top.',
              caption: 'Bicycle with front wheel radius 15 cm and rear wheel radius 9 cm.'
            }
          ],
          answer: '$283$',
          principle: 'A ribbon returns to the top after an integer number of wheel revolutions; find the least common multiple of the two circumferences.',
          solution:
            'One complete revolution of the front wheel advances the bicycle by $2\\pi(15) = 30\\pi\\text{ cm}$, and one complete revolution of the rear wheel advances it by $2\\pi(9) = 18\\pi\\text{ cm}$.\n\nFor both ribbons to be at the top again simultaneously with $d > 0$, $d$ must be a positive common multiple of $30\\pi$ and $18\\pi$. Since $\\operatorname{lcm}(30, 18) = 90$, the smallest positive distance is\n$$d = 90\\pi \\approx 90 \\times 3.14159\\ldots \\approx 282.74\\text{ cm}.$$\n(At this distance, the front wheel completes $3$ revolutions and the rear wheel completes $5$ revolutions.) The closest integer to $d$ is $283$.',
          rubric: [
            { code: 'M1', text: 'Computes the wheel circumferences $30\\pi\\text{ cm}$ and $18\\pi\\text{ cm}$.' },
            { code: 'M1', text: 'Finds the least common multiple $d = 90\\pi\\text{ cm}$.' },
            { code: 'A1', text: 'Approximates $90\\pi \\approx 282.74$ and rounds to the nearest integer $283$.' }
          ]
        },
        {
          label: 'b',
          marks: 7,
          prompt:
            '[Full Solution] In the diagram, $ABCD$ is a rectangle with $AB = 24$ and $AD = 18$. Also, $E$ is on $BC$ with $EC = 6$. If segments $DE$ and $AC$ intersect at $F$, determine the length of $CF$.',
          figures: [
            {
              src: '/papers/cemc-euclid-2025/fig-4b.webp',
              alt: 'Rectangle ABCD with AB = 24, AD = 18, point E on side BC, and diagonal AC intersecting segment DE at F.',
              caption: 'Rectangle ABCD with diagonal AC and segment DE intersecting at F.'
            }
          ],
          answer: '$\\frac{15}{2}$',
          principle: 'Find the diagonal $AC$ by the Pythagorean Theorem, then use similar triangles $\\triangle ADF \\sim \\triangle CEF$ to split $AC$ in the ratio $AD : CE$.',
          solution:
            'Because $ABCD$ is a rectangle, $DC = AB = 24$ and $\\angle ADC = 90^\\circ$. By the Pythagorean Theorem in $\\triangle ADC$,\n$$AC = \\sqrt{AD^2 + DC^2} = \\sqrt{18^2 + 24^2} = \\sqrt{324 + 576} = \\sqrt{900} = 30.$$\n\nNow consider $\\triangle ADF$ and $\\triangle CEF$. Since $AD \\parallel BC$, alternate interior angles are equal:\n$$\\angle DAF = \\angle ECF \\quad \\text{and} \\quad \\angle ADF = \\angle CEF.$$\nThus, $\\triangle ADF \\sim \\triangle CEF$ (by AA similarity). Using the ratio of corresponding sides,\n$$\\frac{CF}{AF} = \\frac{CE}{AD} = \\frac{6}{18} = \\frac{1}{3}.$$\nHence $AF = 3\\,CF$. Since $F$ lies on segment $AC$,\n$$AC = CF + AF = CF + 3\\,CF = 4\\,CF \\implies CF = \\frac{AC}{4} = \\frac{30}{4} = \\frac{15}{2}.$$',
          rubric: [
            { code: 'M2', text: 'Uses the Pythagorean Theorem in $\\triangle ADC$ to calculate $AC = 30$.' },
            { code: 'M2', text: 'Establishes $\\triangle ADF \\sim \\triangle CEF$ using $AD \\parallel BC$ (AA similarity).' },
            { code: 'M2', text: 'Sets up $\\frac{CF}{AF} = \\frac{6}{18} = \\frac{1}{3}$ to deduce $CF = \\frac{1}{4}AC$.' },
            { code: 'A1', text: 'Evaluates $CF = \\frac{15}{2}$.' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Question 5: Combination Lock Counting & Trigonometric Geometric Sequence',
      marks: 10,
      stem: 'Part (a) is Short Answer (3 marks); part (b) is Full Solution (7 marks).',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            '[Short Answer] Alice has a lock whose combination consists of three integers $a, b, c$ which need to be entered in that order. The three integers satisfy the following:\n- each of $a$, $b$ and $c$ is between $1$ and $40$, inclusive;\n- $a$, $b$ and $c$ are all different;\n- $b$ is less than $a$, and $b$ is less than $c$; and\n- one of the integers is $20$ and another of the integers is $30$.\n\nHow many possible combinations satisfy these conditions?',
          answer: '$76$',
          principle: 'First choose the third distinct integer from the remaining $38$ numbers, assign the minimum of the three to $b$, and order the other two as $(a, c)$.',
          solution:
            'Two of the three distinct integers are $20$ and $30$. The third integer $n$ can be any integer in $\\{1, 2, \\ldots, 40\\} \\setminus \\{20, 30\\}$, giving $40 - 2 = 38$ choices for $n$.\n\nBecause $b < a$ and $b < c$, $b$ must be the smallest of the three numbers $\\{20, 30, n\\}$. Once $b$ is uniquely forced to be that smallest number, the remaining two numbers can be assigned to $(a, c)$ in either order ($2$ ways).\n\nTherefore, the total number of valid combinations $(a, b, c)$ is\n$$38 \\times 2 = 76.$$',
          rubric: [
            { code: 'M2', text: 'Identifies $38$ choices for the third distinct integer and recognizes that $b$ is forced to be the smallest, leaving $2$ orderings for $(a, c)$.' },
            { code: 'A1', text: 'Computes $38 \\times 2 = 76$.' }
          ]
        },
        {
          label: 'b',
          marks: 7,
          prompt:
            '[Full Solution] For some angles $\\theta$, the three numbers $2 - 2\\cos\\theta$, $1 + \\sin\\theta$, $2 + 2\\cos\\theta$ form a geometric sequence in that order. Determine all possible exact values of $\\cos\\theta$.\n\n(A *geometric sequence* is a sequence in which each term after the first is obtained from the previous term by multiplying it by a non-zero constant. For example, $3, 6, 12$ is a geometric sequence with three terms.)',
          answer: '$0$, $\\frac{2\\sqrt{2}}{3}$, $-\\frac{2\\sqrt{2}}{3}$',
          principle: 'Three nonzero numbers $x, y, z$ form a geometric sequence iff $y^2 = xz$; convert $\\cos^2\\theta$ to $1 - \\sin^2\\theta$ to obtain a quadratic in $\\sin\\theta$, then check nonzero terms.',
          solution:
            'Since the common ratio of a geometric sequence is non-zero, none of the three terms can be $0$, and the middle term squared equals the product of the first and third terms:\n$$(1 + \\sin\\theta)^2 = (2 - 2\\cos\\theta)(2 + 2\\cos\\theta).$$\nExpanding both sides and applying $\\cos^2\\theta = 1 - \\sin^2\\theta$ gives\n$$1 + 2\\sin\\theta + \\sin^2\\theta = 4 - 4\\cos^2\\theta = 4(1 - \\cos^2\\theta) = 4\\sin^2\\theta.$$\nRearranging into a quadratic equation in $\\sin\\theta$:\n$$3\\sin^2\\theta - 2\\sin\\theta - 1 = 0 \\implies (3\\sin\\theta + 1)(\\sin\\theta - 1) = 0.$$\nThus, $\\sin\\theta = 1$ or $\\sin\\theta = -\\frac{1}{3}$.\n\nUsing $\\cos^2\\theta = 1 - \\sin^2\\theta$:\n- When $\\sin\\theta = 1$, $\\cos^2\\theta = 1 - 1 = 0$, giving $\\cos\\theta = 0$. The sequence is $2, 2, 2$, which is a valid geometric sequence with common ratio $1$.\n- When $\\sin\\theta = -\\frac{1}{3}$, $\\cos^2\\theta = 1 - \\frac{1}{9} = \\frac{8}{9}$, giving $\\cos\\theta = \\pm \\frac{2\\sqrt{2}}{3}$. For both signs, $2 \\pm 2\\cos\\theta = 2 \\pm \\frac{4\\sqrt{2}}{3} \\ne 0$ and $1 + \\sin\\theta = \\frac{2}{3} \\ne 0$, so all three terms are non-zero and form a valid geometric sequence.\n\nTherefore, the possible exact values of $\\cos\\theta$ are $0$, $\\frac{2\\sqrt{2}}{3}$, and $-\\frac{2\\sqrt{2}}{3}$.',
          rubric: [
            { code: 'M2', text: 'Sets up $(1 + \\sin\\theta)^2 = (2 - 2\\cos\\theta)(2 + 2\\cos\\theta)$.' },
            { code: 'M2', text: 'Substitutes $1 - \\cos^2\\theta = \\sin^2\\theta$ to obtain $3\\sin^2\\theta - 2\\sin\\theta - 1 = 0$.' },
            { code: 'M1', text: 'Solves for $\\sin\\theta = 1$ and $\\sin\\theta = -\\frac{1}{3}$ (and verifies non-zero terms).' },
            { code: 'A2', text: 'Finds all three values $\\cos\\theta \\in \\left\\{0, \\frac{2\\sqrt{2}}{3}, -\\frac{2\\sqrt{2}}{3}\\right\\}$.' }
          ]
        }
      ]
    },
    {
      no: 6,
      title: 'Question 6: Circular Lattice Triangles & Quadrilateral Altitude',
      marks: 10,
      stem: 'Part (a) is Short Answer (3 marks); part (b) is Full Solution (7 marks).',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            '[Short Answer] Twelve points are equally spaced around the entire circumference of a circle. In how many ways can three of these points be chosen so that the triangle that they form has at least two sides of equal length?',
          answer: '$52$',
          principle: 'Classify isosceles (including equilateral) triangles by the ordered triple of arc-step gaps summing to $12$ around the circle, and count rotations carefully.',
          solution:
            'Two chords on a circle of $12$ equally spaced points have equal length if and only if they span the same number of unit arcs (gaps) along the minor arc. Moving clockwise around the circle, any triangle is determined by its three positive integer gap counts summing to $12$.\n\nFor the triangle to have at least two equal sides, two of the gap counts must be equal, giving five unordered gap patterns:\n- $1 + 1 + 10$: $12$ distinct triangles (one for each choice of the apex vertex).\n- $2 + 2 + 8$: $12$ distinct triangles.\n- $3 + 3 + 6$: $12$ distinct triangles.\n- $5 + 5 + 2$: $12$ distinct triangles.\n- $4 + 4 + 4$ (equilateral): rotating by $4$ steps repeats the same triangle, so there are $\\frac{12}{3} = 4$ distinct equilateral triangles.\n\nIn total, there are\n$$12 + 12 + 12 + 12 + 4 = 52$$ ways.',
          rubric: [
            { code: 'M2', text: 'Lists the five isosceles/equilateral gap configurations summing to $12$ and accounts for rotational symmetry of $(4,4,4)$.' },
            { code: 'A1', text: 'Totals $4 \\times 12 + 4 = 52$.' }
          ]
        },
        {
          label: 'b',
          marks: 7,
          prompt:
            '[Full Solution] In the diagram, quadrilateral $ABCD$ has $\\angle ABC = \\angle CDA = 90^\\circ$, $AB = 56$, $BC = 33$, $CD = 39$, and $DA = 52$. Point $P$ is on $AD$ so that $BP$ is perpendicular to $AD$. Determine the exact length of $BP$.',
          figures: [
            {
              src: '/papers/cemc-euclid-2025/fig-6b.webp',
              alt: 'Quadrilateral ABCD with right angles at B and D, perpendicular BP from B to side AD, and side lengths 56, 33, 39, and 52.',
              caption: 'Quadrilateral ABCD with right angles at B and D and altitude BP to AD.'
            }
          ],
          answer: '$\\frac{672}{13}$',
          principle: 'Draw diagonal $AC$ to split $ABCD$ into two right triangles with shared hypotenuse $AC$, then compute $\\sin(\\angle BAD) = \\sin(\\angle BAC + \\angle CAD)$.',
          solution:
            'Join $A$ to $C$. In right-angled $\\triangle ADC$ ($\\angle CDA = 90^\\circ$), the Pythagorean Theorem gives\n$$AC = \\sqrt{AD^2 + CD^2} = \\sqrt{52^2 + 39^2} = \\sqrt{13^2(4^2 + 3^2)} = 13 \\times 5 = 65.$$\nNotice that $(33, 56, 65)$ is also a Pythagorean triple ($33^2 + 56^2 = 1089 + 3136 = 4225 = 65^2$), matching $\\angle ABC = 90^\\circ$.\n\nSince $\\angle BAD = \\angle BAC + \\angle CAD$, apply the sine addition formula:\n$$\\sin(\\angle BAD) = \\sin(\\angle BAC)\\cos(\\angle CAD) + \\cos(\\angle BAC)\\sin(\\angle CAD).$$\nFrom right triangles $\\triangle ABC$ and $\\triangle ADC$:\n$$\\sin(\\angle BAC) = \\frac{33}{65}, \\quad \\cos(\\angle BAC) = \\frac{56}{65}, \\quad \\cos(\\angle CAD) = \\frac{52}{65} = \\frac{4}{5}, \\quad \\sin(\\angle CAD) = \\frac{39}{65} = \\frac{3}{5}.$$\nSubstituting these values gives\n$$\\sin(\\angle BAD) = \\frac{33}{65} \\cdot \\frac{4}{5} + \\frac{56}{65} \\cdot \\frac{3}{5} = \\frac{132 + 168}{325} = \\frac{300}{325} = \\frac{12}{13}.$$\nFinally, in right-angled $\\triangle BPA$ ($\\angle BPA = 90^\\circ$),\n$$BP = AB \\sin(\\angle BAD) = 56 \\times \\frac{12}{13} = \\frac{672}{13}.$$',
          rubric: [
            { code: 'M2', text: 'Draws diagonal $AC$ and computes $AC = \\sqrt{52^2 + 39^2} = 65$.' },
            { code: 'M3', text: 'Applies $\\sin(\\angle BAC + \\angle CAD)$ with exact side ratios to obtain $\\sin(\\angle BAD) = \\frac{12}{13}$.' },
            { code: 'M1', text: 'Expresses $BP = AB \\sin(\\angle BAD) = 56 \\cdot \\frac{12}{13}$.' },
            { code: 'A1', text: 'Obtains the exact value $\\frac{672}{13}$.' }
          ]
        }
      ]
    },
    {
      no: 7,
      title: 'Question 7: Inverse Function Tables & Logarithmic System',
      marks: 10,
      stem: 'Part (a) is Short Answer (3 marks); part (b) is Full Solution (7 marks).',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            '[Short Answer] The functions $f$ and $g$ are defined by the tables of values below:\n\n| $x$ | $f(x)$ |\n| :---: | :---: |\n| $1$ | $5$ |\n| $2$ | $3$ |\n| $3$ | $4$ |\n| $4$ | $1$ |\n| $5$ | $2$ |\n\n| $x$ | $g(x)$ |\n| :---: | :---: |\n| $1$ | $3$ |\n| $2$ | $1$ |\n| $3$ | $4$ |\n| $4$ | $5$ |\n| $5$ | $2$ |\n\nThe functions $f^{-1}$ and $g^{-1}$ are the inverse functions of $f$ and $g$, respectively. If $f^{-1}(g^{-1}(a)) = 3$, what is the value of $a$?',
          answer: '$5$',
          principle: 'Invert step by step: $f^{-1}(b) = 3 \\iff b = f(3)$, then $g^{-1}(a) = b \\iff a = g(b)$.',
          solution:
            'Let $b = g^{-1}(a)$. Since $f^{-1}(b) = 3$, applying $f$ to both sides gives\n$$b = f(3) = 4.$$\nThus $g^{-1}(a) = 4$, and applying $g$ to both sides yields\n$$a = g(4) = 5.$$',
          rubric: [
            { code: 'M2', text: 'Applies $f$ and $g$ successively to rewrite $f^{-1}(g^{-1}(a)) = 3$ as $a = g(f(3))$.' },
            { code: 'A1', text: 'Evaluates $f(3) = 4$ and $g(4) = 5$.' }
          ]
        },
        {
          label: 'b',
          marks: 7,
          prompt:
            '[Full Solution] Determine all pairs $(x, y)$ of real numbers that satisfy the following system of equations:\n$$x^2 - 8xy + 16y^2 = 0$$\n$$(\\log_{10} x)^2 + 2(\\log_{10} x)(\\log_{10} y) + (\\log_{10} y)^2 = 4$$',
          answer: '$(20, 5)$ and $\\left(\\frac{1}{5}, \\frac{1}{20}\\right)$',
          principle: 'Factor both equations as perfect squares, enforce the logarithm domain $x > 0, y > 0$, and solve for $xy$ before substituting $x = 4y$.',
          solution:
            'For $\\log_{10} x$ and $\\log_{10} y$ to be defined, we must have $x > 0$ and $y > 0$.\n\nThe first equation factors as a perfect square:\n$$(x - 4y)^2 = 0 \\implies x = 4y.$$\nThe second equation also factors as a perfect square:\n$$(\\log_{10} x + \\log_{10} y)^2 = 4 \\implies \\log_{10} x + \\log_{10} y = \\pm 2.$$\nUsing logarithm properties, $\\log_{10}(xy) = \\pm 2$, so\n$$xy = 10^2 = 100 \\quad \\text{or} \\quad xy = 10^{-2} = \\frac{1}{100}.$$\nSubstituting $x = 4y$ gives $4y^2 = 100$ or $4y^2 = \\frac{1}{100}$:\n- If $4y^2 = 100$, then $y^2 = 25$. Since $y > 0$, $y = 5$ and $x = 4(5) = 20$.\n- If $4y^2 = \\frac{1}{100}$, then $y^2 = \\frac{1}{400}$. Since $y > 0$, $y = \\frac{1}{20}$ and $x = 4\\left(\\frac{1}{20}\\right) = \\frac{1}{5}$.\n\nBoth pairs satisfy $x, y > 0$ and both equations. Therefore, all real solutions are $(x, y) = (20, 5)$ and $(x, y) = \\left(\\frac{1}{5}, \\frac{1}{20}\\right)$.',
          rubric: [
            { code: 'M2', text: 'Factors $(x - 4y)^2 = 0$ to obtain $x = 4y$ and notes domain $x > 0, y > 0$.' },
            { code: 'M2', text: 'Factors $(\\log_{10} x + \\log_{10} y)^2 = 4$ to deduce $\\log_{10}(xy) = \\pm 2$, i.e., $xy = 100$ or $xy = \\frac{1}{100}$.' },
            { code: 'M1', text: 'Substitutes $x = 4y$ and rejects negative values of $y$.' },
            { code: 'A2', text: 'Finds both pairs $(20, 5)$ and $\\left(\\frac{1}{5}, \\frac{1}{20}\\right)$.' }
          ]
        }
      ]
    },
    {
      no: 8,
      title: 'Question 8: Independent Probabilities & Palindrome Differences',
      marks: 10,
      stem: 'Both parts (a) and (b) are Full Solution (5 marks each).',
      parts: [
        {
          label: 'a',
          marks: 5,
          prompt:
            '[Full Solution] Leilei, Jerome and Farzad write a test independently. The probability that Leilei passes the test and Jerome fails the test is $\\dfrac{3}{20}$. The probability that Jerome passes and Farzad fails is $\\dfrac{1}{4}$. The probability that Leilei and Farzad both pass is $\\dfrac{2}{5}$. Determine the probability that at least one of Leilei, Jerome and Farzad fails the test.',
          answer: '$\\frac{7}{10}$',
          principle: 'By independence, express the three given joint probabilities in terms of individual pass probabilities $a, b, c$, solve the resulting quadratic for $b$, and take the complement $1 - abc$.',
          solution:
            'Let $a$, $b$, and $c$ be the probabilities that Leilei, Jerome, and Farzad pass the test, respectively, so their failure probabilities are $1 - a$, $1 - b$, and $1 - c$. By independence:\n$$a(1 - b) = \\frac{3}{20}, \\qquad b(1 - c) = \\frac{1}{4}, \\qquad ac = \\frac{2}{5}.$$\nNote that $b \\ne 0$ and $1 - b \\ne 0$ from the first two equations. Expressing $a$ and $c$ in terms of $b$:\n$$a = \\frac{3}{20(1 - b)}, \\qquad 1 - c = \\frac{1}{4b} \\implies c = 1 - \\frac{1}{4b} = \\frac{4b - 1}{4b}.$$\nSubstituting into $ac = \\frac{2}{5}$ gives\n$$\\frac{3}{20(1 - b)} \\cdot \\frac{4b - 1}{4b} = \\frac{2}{5} \\implies 3(4b - 1) = 32b(1 - b).$$\nExpanding and rearranging yields\n$$32b^2 - 20b - 3 = 0 \\implies (8b + 1)(4b - 3) = 0.$$\nSince $b > 0$, we must have $b = \\frac{3}{4}$. Then\n$$c = 1 - \\frac{1}{4(3/4)} = \\frac{2}{3}, \\qquad a = \\frac{3}{20(1 - 3/4)} = \\frac{3}{5}.$$\nThe probability that all three pass is $abc = \\frac{3}{5} \\cdot \\frac{3}{4} \\cdot \\frac{2}{3} = \\frac{3}{10}$. Therefore, the probability that at least one of them fails is\n$$1 - abc = 1 - \\frac{3}{10} = \\frac{7}{10}.$$',
          rubric: [
            { code: 'M1', text: 'Sets up $a(1 - b) = \\frac{3}{20}$, $b(1 - c) = \\frac{1}{4}$, and $ac = \\frac{2}{5}$ using independence.' },
            { code: 'M2', text: 'Eliminates $a$ and $c$ to form $32b^2 - 20b - 3 = 0$ and selects $b = \\frac{3}{4}$.' },
            { code: 'M1', text: 'Computes $a = \\frac{3}{5}$, $c = \\frac{2}{3}$, and $abc = \\frac{3}{10}$.' },
            { code: 'A1', text: 'Uses the complement $1 - abc = \\frac{7}{10}$.' }
          ]
        },
        {
          label: 'b',
          marks: 5,
          prompt:
            '[Full Solution] The integer $7447$ is a palindrome because it reads the same forwards and backwards. Suppose that positive integers $m$ and $n$ are palindromes between $1001$ and $9999$, inclusive, with $m > n$. Determine the number of pairs $(m, n)$ for which the difference $m - n$ is a multiple of $35$.',
          answer: '$91$',
          principle: 'Write $4$-digit palindromes as $1001a + 110b$ and $1001c + 110d$; since $5 \\mid 110$ and $7 \\mid 1001$, divisibility by $35 = 5 \\times 7$ decouples into $5 \\mid (a - c)$ and $7 \\mid (b - d)$.',
          solution:
            'Every four-digit palindrome between $1001$ and $9999$ has the form $\\overline{abba} = 1001a + 110b$, where $a \\in \\{1, 2, \\ldots, 9\\}$ and $b \\in \\{0, 1, \\ldots, 9\\}$. Let $m = 1001a + 110b$ and $n = 1001c + 110d$, with $a, c \\in \\{1, \\ldots, 9\\}$ and $b, d \\in \\{0, \\ldots, 9\\}$. Then\n$$m - n = 1001(a - c) + 110(b - d).$$\nSince $35 = 5 \\times 7$ with $\\gcd(5, 7) = 1$, $35 \\mid (m - n)$ if and only if both $5 \\mid (m - n)$ and $7 \\mid (m - n)$:\n- Modulo $5$: $110(b - d) \\equiv 0 \\pmod 5$ and $1001 \\equiv 1 \\pmod 5$, so $5 \\mid (m - n) \\iff 5 \\mid (a - c)$.\n- Modulo $7$: $1001 = 7 \\times 143 \\equiv 0 \\pmod 7$ and $110 \\equiv 5 \\not\\equiv 0 \\pmod 7$, so $7 \\mid (m - n) \\iff 7 \\mid (b - d)$.\n\nSince $m > n$, either $a > c$, or $a = c$ and $b > d$:\n- **Case 1 ($a > c$):** Because $a, c \\in \\{1, \\ldots, 9\\}$ and $5 \\mid (a - c)$, we must have $a - c = 5$, giving $4$ pairs: $(a, c) \\in \\{(6, 1), (7, 2), (8, 3), (9, 4)\\}$. For $(b, d)$, we need $b - d \\in \\{-7, 0, 7\\}$: $b - d = 7$ gives $3$ pairs $(7,0), (8,1), (9,2)$; $b - d = 0$ gives $10$ pairs; $b - d = -7$ gives $3$ pairs $(0,7), (1,8), (2,9)$, for $16$ pairs total. Thus Case 1 yields $4 \\times 16 = 64$ pairs $(m, n)$.\n- **Case 2 ($a = c$ and $b > d$):** There are $9$ choices for $a = c \\in \\{1, \\ldots, 9\\}$, and $b > d$ with $7 \\mid (b - d)$ forces $b - d = 7$, which gives $3$ pairs $(b, d) \\in \\{(7, 0), (8, 1), (9, 2)\\}$. Thus Case 2 yields $9 \\times 3 = 27$ pairs $(m, n)$.\n\nIn total, there are $64 + 27 = 91$ valid pairs $(m, n)$.',
          rubric: [
            { code: 'M1', text: 'Represents $m - n = 1001(a - c) + 110(b - d)$ with $a, c \\in \\{1..9\\}$ and $b, d \\in \\{0..9\\}$.' },
            { code: 'M2', text: 'Deduces $5 \\mid (a - c)$ and $7 \\mid (b - d)$ using $5 \\mid 110$ and $7 \\mid 1001$.' },
            { code: 'M1', text: 'Counts both $m > n$ cases: $a - c = 5$ ($4 \\times 16 = 64$) and $a = c, b > d$ ($9 \\times 3 = 27$).' },
            { code: 'A1', text: 'Sums to obtain $91$ pairs.' }
          ]
        }
      ]
    },
    {
      no: 9,
      title: 'Question 9: Cubic Polynomials with Arithmetic Coefficients',
      marks: 10,
      stem:
        'Suppose that $p(x) = qx^3 - rx^2 - sx + t$ for some positive integers $q < r < s < t$ which form an arithmetic sequence.\n\n(An *arithmetic sequence* is a sequence in which each term after the first is obtained from the previous term by adding a constant, called the *common difference*. For example, $3, 5, 7, 9$ are the first four terms of an arithmetic sequence.)\n\nPart (a) is worth 2 marks; parts (b) and (c) are worth 4 marks each (Full Solution).',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: '[Full Solution] Show that $x = 1$ is a root of $p(x)$.',
          answer: '$p(1) = 0$',
          principle: 'Write $q, r, s, t$ in terms of $q$ and the common difference $d$, then evaluate $p(1)$.',
          solution:
            'Let $d > 0$ be the common difference of the arithmetic sequence $q < r < s < t$, so that\n$$r = q + d, \\qquad s = q + 2d, \\qquad t = q + 3d.$$\nEvaluating $p(1)$ gives\n$$p(1) = q - r - s + t = q - (q + d) - (q + 2d) + (q + 3d) = (1 - 1 - 1 + 1)q + (-1 - 2 + 3)d = 0.$$\nSince $p(1) = 0$, $x = 1$ is a root of $p(x)$.',
          rubric: [
            { code: 'M1', text: 'Expresses $r = q + d$, $s = q + 2d$, $t = q + 3d$ (or $q + t = r + s$).' },
            { code: 'A1', text: 'Evaluates $p(1) = q - r - s + t = 0$ to conclude $x = 1$ is a root.' }
          ]
        },
        {
          label: 'b',
          marks: 4,
          prompt:
            '[Full Solution] Suppose that the average of $q, r, s, t$ is $19$ and that $p(x)$ has three rational roots. Determine the roots of $p(x)$.',
          answer: '$1$, $2$, $-\\frac{7}{5}$',
          principle: 'Center the arithmetic sequence around its average $19$, factor out $(x - 1)$, and test which integer parameter makes the quadratic discriminant a perfect square.',
          solution:
            'Since the four-term arithmetic sequence $q < r < s < t$ has average $19$, $19$ lies halfway between $r$ and $s$. Thus there is a positive integer $h$ such that\n$$r = 19 - h, \\qquad s = 19 + h,$$\nwith common difference $s - r = 2h$, so\n$$q = 19 - 3h, \\qquad t = 19 + 3h.$$\nBecause $q > 0$, we need $19 - 3h > 0$, so $h \\in \\{1, 2, 3, 4, 5, 6\\}$.\n\nBy part (a), $(x - 1)$ is a factor of $p(x)$. Polynomial division (or matching coefficients) gives\n$$p(x) = (19 - 3h)x^3 - (19 - h)x^2 - (19 + h)x + (19 + 3h) = (x - 1)\\big((19 - 3h)x^2 - 2hx - (19 + 3h)\\big).$$\nFor $p(x)$ to have three rational roots, the integer-coefficient quadratic $(19 - 3h)x^2 - 2hx - (19 + 3h)$ must have a discriminant $\\Delta$ that is a perfect square:\n$$\\Delta = (-2h)^2 - 4(19 - 3h)\\big(-(19 + 3h)\\big) = 4\\big(h^2 + 361 - 9h^2\\big) = 4(361 - 8h^2).$$\nTesting $h = 1, 2, 3, 4, 5, 6$ in $361 - 8h^2$ gives $353, 329, 289, 233, 161, 73$. Only $289 = 17^2$ is a perfect square, occurring at $h = 3$.\n\nWhen $h = 3$, $(q, r, s, t) = (10, 16, 22, 28)$ and\n$$p(x) = (x - 1)(10x^2 - 6x - 28) = 2(x - 1)(x - 2)(5x + 7).$$\nHence the roots of $p(x)$ are $x = 1$, $x = 2$, and $x = -\\frac{7}{5}$.',
          rubric: [
            { code: 'M1', text: 'Parameterizes $(q, r, s, t) = (19 - 3h, 19 - h, 19 + h, 19 + 3h)$ with $1 \\le h \\le 6$ (or $(q, d)$ pairs).' },
            { code: 'M1', text: 'Factors out $(x - 1)$ to obtain the quadratic $(19 - 3h)x^2 - 2hx - (19 + 3h)$.' },
            { code: 'M1', text: 'Computes $\\Delta = 4(361 - 8h^2)$ and identifies $h = 3$ as the unique value giving a perfect square ($\\Delta = 1156 = 34^2$).' },
            { code: 'A1', text: 'Determines all three roots $1$, $2$, and $-\\frac{7}{5}$.' }
          ]
        },
        {
          label: 'c',
          marks: 4,
          prompt:
            '[Full Solution] Prove that, for every positive integer $n > 3$, there are at least two arithmetic sequences of positive integers $q < r < s < t$ with common difference $2n$ for which $p(x)$ has three rational roots.',
          answer: 'Constructive proof via $m^2 - k^2 = 8n^2$ yielding $m = 2n^2 + 1$ and $m = n^2 + 2$',
          principle: 'Let $m$ be the average of the sequence; show the rational-root condition reduces to $m^2 - k^2 = 8n^2$ with $m > 3n$, and obtain two distinct integer solutions from factorizations of $8n^2$.',
          solution:
            'Let $m$ be the average of $q, r, s, t$. With common difference $2n$, the terms are\n$$q = m - 3n, \\quad r = m - n, \\quad s = m + n, \\quad t = m + 3n.$$\nNotice that $m = r + n$ is an integer because $r$ and $n$ are integers, and the positivity condition $0 < q < r < s < t$ holds if and only if $q = m - 3n > 0$, i.e., $m > 3n$.\n\nJust as in part (b),\n$$p(x) = (x - 1)\\big((m - 3n)x^2 - 2nx - (m + 3n)\\big),$$\nand the discriminant of the quadratic factor is\n$$\\Delta = (-2n)^2 + 4(m - 3n)(m + 3n) = 4(m^2 - 8n^2).$$\nThus $p(x)$ has three rational roots if and only if $\\Delta$ is the square of an even integer $(2k)^2$, which is equivalent to\n$$m^2 - k^2 = 8n^2 \\iff (m + k)(m - k) = 8n^2$$\nfor some non-negative integer $k$.\n\nConsider two factorizations of $8n^2$ into same-parity integers $A > B > 0$ (setting $m + k = A$ and $m - k = B$):\n1. Take $A = 4n^2$ and $B = 2$. Then\n   $$m_1 = \\frac{4n^2 + 2}{2} = 2n^2 + 1, \\qquad k_1 = 2n^2 - 1.$$\n2. Take $A = 2n^2$ and $B = 4$. Then\n   $$m_2 = \\frac{2n^2 + 4}{2} = n^2 + 2, \\qquad k_2 = n^2 - 2.$$\n\nFor every integer $n > 3$ (in fact $n \\ge 4$):\n- $m_1$ and $m_2$ are distinct integers since $m_1 - m_2 = n^2 - 1 > 0$.\n- Both satisfy $m > 3n$: indeed, $n^2 + 2 - 3n = (n - 1)(n - 2) > 0$ for $n > 3$, and $2n^2 + 1 > n^2 + 2 > 3n$.\n- Moreover, $k_1, k_2 > 0$, so $\\Delta = 4k^2 > 0$, and at $x = 1$ the quadratic evaluates to $(m - 3n) - 2n - (m + 3n) = -8n \\ne 0$, meaning the three rational roots are distinct.\n\nTherefore, for every integer $n > 3$, $m_1$ and $m_2$ produce at least two valid arithmetic sequences $q < r < s < t$ with common difference $2n$ for which $p(x)$ has three rational roots.',
          rubric: [
            { code: 'M1', text: 'Sets up $(q, r, s, t) = (m - 3n, m - n, m + n, m + 3n)$ with positivity condition $m > 3n$.' },
            { code: 'M1', text: 'Reduces rational roots to $\\Delta = 4(m^2 - 8n^2) = (2k)^2$, i.e., $(m + k)(m - k) = 8n^2$.' },
            { code: 'M1', text: 'Produces two explicit integer families $m_1 = 2n^2 + 1$ and $m_2 = n^2 + 2$ from factorizations $(4n^2)(2)$ and $(2n^2)(4)$.' },
            { code: 'A1', text: 'Verifies $m_1 \\ne m_2$ and $m_1, m_2 > 3n$ for all $n > 3$ (so $q, r, s, t$ are positive integers).' }
          ]
        }
      ]
    },
    {
      no: 10,
      title: 'Question 10: Triangular Coin-Flipping Game',
      marks: 10,
      stem:
        'An equilateral triangle is formed using $n$ rows of coins. There is $1$ coin in the first row, $2$ coins in the second row, $3$ coins in the third row, and so on, up to $n$ coins in the $n$th row. Initially, all of the coins show heads (H). Carley plays a game in which, on each turn, she chooses three mutually adjacent coins and flips these three coins over. To win the game, all of the coins must be showing tails (T) after a sequence of turns. An example game with $4$ rows of coins after a sequence of two turns is shown.\n\nNote: For a triangle with $4$ rows of coins, there are $9$ possibilities for the set of three coins that Carley can flip on a given turn. These $9$ possibilities are shown as shaded triangles `T(1,1)`, `T(2,1)`, `T(2,3)`, `T(3,1)`, `T(3,3)`, `T(3,5)` (pointing up) and `T(2,2)`, `T(3,2)`, `T(3,4)` (pointing down). Adapt this naming convention in a suitable way when answering parts (a) and (c).\n\nPart (a) is worth 2 marks; part (b) is worth 3 marks; part (c) is worth 5 marks (all Full Solution).',
      figures: [
        {
          src: '/papers/cemc-euclid-2025/fig-10-example.webp',
          alt: 'Four-row triangular array of ten coins showing heads and tails after two three-coin triangle flips.',
          caption: 'Example 4-row coin triangle after two turns.'
        },
        {
          src: '/papers/cemc-euclid-2025/fig-10-moves.webp',
          alt: 'Two 4-row diagrams labeling the six upward-pointing moves T(1,1) to T(3,5) and three downward-pointing moves T(2,2), T(3,2), T(3,4).',
          caption: 'Naming convention for the 9 valid three-coin moves in a 4-row triangle.'
        }
      ],
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: '[Full Solution] If there are $3$ rows of coins, give a sequence of $4$ turns that results in a win.',
          answer: '$T(1, 1),\\ T(2, 1),\\ T(2, 3),\\ T(2, 2)$',
          principle: 'Flipping the three corner-containing triangles once each flips the three corners once and the three edge midpoints twice; one central downward flip finishes the game.',
          solution:
            'In a $3$-row triangle there are $6$ coins and $4$ valid moves: the three upward triangles $T(1,1)$, $T(2,1)$, $T(2,3)$ and the central downward triangle $T(2,2)$.\n\nPerform the sequence of $4$ turns:\n$$T(1,1),\\quad T(2,1),\\quad T(2,3),\\quad T(2,2).$$\n- Each of the three corner coins belongs to exactly $1$ of these moves, so each corner coin is flipped $1$ time ($\\text{H} \\to \\text{T}$).\n- Each of the three edge-midpoint coins belongs to $2$ of the upward moves plus $T(2,2)$, so each midpoint coin is flipped $3$ times ($\\text{H} \\to \\text{T}$).\n\nAll $6$ coins now show T, winning the game in $4$ turns.',
          rubric: [
            { code: 'M1', text: 'Gives the valid $4$-move sequence $T(1,1), T(2,1), T(2,3), T(2,2)$ (in any order).' },
            { code: 'A1', text: 'Verifies that every coin is flipped an odd number of times (corners once, midpoints three times).' }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt: '[Full Solution] Suppose that there are $4$ rows of coins. Determine whether or not there is a sequence of turns that results in a win.',
          answer: 'No (it is impossible to win with $4$ rows)',
          principle: 'Since flips commute and two identical flips cancel, reduce each move to $0$ or $1$ uses; corner coins force the three corner moves, leaving only the center coin showing H and forcing an even number of flips on it.',
          solution:
            'There is **no** sequence of turns that results in a win when $n = 4$.\n\nBecause the order of flips does not affect the final state of any coin, and flipping the same triple twice returns all three coins to their prior states, we may assume each of the $9$ moves is used either $0$ or $1$ time.\n\nEach of the three corner coins belongs to only one move: the top coin belongs only to $T(1,1)$, the bottom-left coin only to $T(3,1)$, and the bottom-right coin only to $T(3,5)$. To flip all three corners from H to T, each of $T(1,1)$, $T(3,1)$, and $T(3,5)$ must be used exactly $1$ time.\n\nAfter applying those three moves, all $9$ outer coins show T, while the single center coin (row $3$, position $2$) has not been touched and still shows H. Any remaining moves must come from the $6$ moves around the center coin:\n$$T(2,1),\\ T(2,2),\\ T(2,3),\\ T(3,2),\\ T(3,3),\\ T(3,4),$$\nwhich form a $6$-cycle around the center hexagon. Each of the $6$ inner-ring T coins is covered by exactly two adjacent moves in this $6$-cycle. To keep all $6$ of those coins showing T, whenever one move in the $6$-cycle is used, both of its neighboring moves must also be used.\n\nSince the center coin still needs to be flipped, at least one of the $6$ moves must be used, which forces **all $6$** moves to be used. However, using all $6$ moves flips the center coin $6$ times (an even number), so the center coin remains H. Contradiction. Thus, winning with $n = 4$ rows is impossible.',
          rubric: [
            { code: 'M1', text: 'Reduces moves to $0$ or $1$ uses and shows corners force $T(1,1), T(3,1), T(3,5)$ each to be used once.' },
            { code: 'M1', text: 'Shows the remaining $6$ moves around the center coin must be used all together or not at all to preserve the surrounding $6$ coins.' },
            { code: 'A1', text: 'Concludes that using all $6$ moves flips the center coin an even number of times ($6$), so a win is impossible.' }
          ]
        },
        {
          label: 'c',
          marks: 5,
          prompt: '[Full Solution] Determine all values of $n$ for which it is possible to win the game starting with $n$ rows of coins.',
          answer: 'All positive integers $n$ such that $n \\equiv 0$ or $2 \\pmod{3}$ (i.e., $n = 3k$ or $n = 3k - 1$ for $k \\ge 1$)',
          principle: 'Prove $n = 3k$ and $n = 3k - 1$ are winnable by partitioning into $2$-row and $3$-row triangles (extending inductively by $3$-row strips), and prove $n = 3k + 1$ is impossible using a cyclic $1, 2, 3$ signed sum invariant modulo $4$.',
          solution:
            'The game can be won if and only if $n = 3k$ or $n = 3k - 1$ for some positive integer $k$ (that is, $n \\equiv 0$ or $2 \\pmod{3}$); it cannot be won when $n = 3k + 1$ ($k \\ge 0$).\n\n**1. Construction for $n = 3k$ and $n = 3k - 1$ ($k \\ge 1$):**\n- **Base cases:** For $n = 2$, a single flip wins. For $n = 3$, part (a) gives a $4$-turn win. By symmetry, a downward-pointing $2$-row or $3$-row triangle can also be won independently.\n- **Building block ($3 \\times 3$ parallelogram):** In any three consecutive rows, a slanted $3 \\times 3$ parallelogram consisting of $(r, c..c+2)$, $(r+1, c+1..c+3)$, and $(r+2, c+2..c+4)$ partitions cleanly into a downward $3$-row triangle $(r, c..c+2), (r+1, c+1..c+2), (r+2, c+2)$ of $6$ coins and an upward $2$-row triangle $(r+1, c+3), (r+2, c+3..c+4)$ of $3$ coins.\n- **Inductive step (adding $3$ rows):** Suppose an $n$-row triangle can be won by partitioning it into disjoint $2$-row and $3$-row triangles.\n  - When $n = 3k - 1$, adding $3$ rows at the bottom (lengths $3k, 3k+1, 3k+2$) gives a strip that partitions from left to right into an upward $2$-row triangle in the bottom-left corner (row counts $0, 1, 2$) followed by $k$ disjoint $3 \\times 3$ parallelograms (each contributing row counts $3, 3, 3$), totaling $(3k, 3k+1, 3k+2)$.\n  - When $n = 3k$, adding $3$ rows at the bottom (lengths $3k+1, 3k+2, 3k+3$) gives a strip that partitions from left to right into an upward $3$-row triangle on the left (row counts $1, 2, 3$) followed by $k$ disjoint $3 \\times 3$ parallelograms, totaling $(3k+1, 3k+2, 3k+3)$.\n\nSolving each $2$-row or $3$-row piece independently wins the game for every $n = 3k - 1$ and $n = 3k$ ($k \\ge 1$).\n\n**2. Impossibility for $n = 3k + 1$ ($k \\ge 0$):**\nFor $n = 1$, there are no valid moves, so winning is impossible. For $n = 3k + 1$ ($k \\ge 1$), assign each coin $(r, c)$ ($1 \\le r \\le n$, $1 \\le c \\le r$) a label $\\ell(r, c) \\in \\{1, 2, 3\\}$ according to $(r + c - 2) \\bmod 3$:\n$$\\ell(r, c) = ((r + c - 2) \\bmod 3) + 1.$$\nEvery upward triangle $\\{(r,c), (r+1,c), (r+1,c+1)\\}$ and every downward triangle $\\{(r,c), (r,c+1), (r+1,c+1)\\}$ has three consecutive values of $r + c - 2$, so every valid move flips exactly one coin of each label $1, 2, 3$.\n\nAttach a sign $+1$ to every coin showing H and $-1$ to every coin showing T, and let $S$ be the sum of all signed labels. Flipping a $(1, 2, 3)$ triple changes $S$ by\n$$\\Delta S = -2(\\pm 1 \\pm 2 \\pm 3).$$\nBecause $1 + 2 + 3 = 6$ is even and flipping any sign changes the sum inside the parentheses by an even integer ($2, 4,$ or $6$), $\\pm 1 \\pm 2 \\pm 3$ is always even, so $\\Delta S$ is always a multiple of $4$ ($0, \\pm 4, \\pm 8,$ or $\\pm 12$).\n\nFor $n = 3k + 1$, the top coin has label $\\ell(1,1) = 1$, and each subsequent $3$-row strip partitions into a bottom-left $2$-row triangle (with labels $3, 1, 2$) and $3$-coin south-east diagonals (along which $r + c - 2$ decreases by $1 \\pmod 3$ at each step, giving labels $1, 2, 3$). Since the total number of coins is\n$$C = \\frac{(3k+1)(3k+2)}{2} = 9\\frac{k(k+1)}{2} + 1 = 9t + 1 \\quad \\left(t = \\frac{k(k+1)}{2} \\in \\mathbb{Z}\\right),$$\nthere are $3t + 1$ coins labelled $1$, $3t$ coins labelled $2$, and $3t$ coins labelled $3$.\n\nInitially all coins show H, giving $S_{\\text{init}} = (1 + 2 + 3)(3t) + 1 = 18t + 1$. Winning requires all coins to show T, giving $S_{\\text{win}} = -(18t + 1)$. The required change is\n$$S_{\\text{win}} - S_{\\text{init}} = -36t - 2 \\equiv 2 \\pmod 4.$$\nSince every move changes $S$ by a multiple of $4$, $S_{\\text{win}}$ is unreachable. Thus, winning is possible if and only if $n \\equiv 0$ or $2 \\pmod{3}$ ($n \\ge 2$).',
          rubric: [
            { code: 'M2', text: 'Proves winnability for $n = 3k$ and $n = 3k - 1$ ($k \\ge 1$) by partitioning into disjoint $2$-row and $3$-row triangles and $3 \\times 3$ parallelograms.' },
            { code: 'M2', text: 'Constructs a $1,2,3$ coloring/signed-sum invariant for $n = 3k + 1$ showing every move changes $S$ by a multiple of $4$.' },
            { code: 'A1', text: 'Computes the initial-to-target change $-(36t + 2) \\equiv 2 \\pmod 4$ to prove $n = 3k + 1$ is impossible and states the full answer.' }
          ]
        }
      ]
    }
  ]
};
