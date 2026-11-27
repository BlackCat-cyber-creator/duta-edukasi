/**
 * Paket Soal: CEMC Gauss Grade 8 — 2025
 * Sumber: Centre for Education in Mathematics and Computing (CEMC), University of Waterloo (2025Gauss8Contest.pdf & 2025GaussSolutions.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Semua 25 soal (Part A Q1–10, Part B Q11–20, Part C Q21–25) dimuat lengkap beserta pemotongan 9 diagram resmi ke WebP.
 */
export default {
  id: 'cemc-gauss8-2025',
  slug: 'cemc-gauss-8-2025',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'CEMC Gauss Grade 8 — 2025: official CEMC Waterloo contest questions & solutions',
  relatedChapterIds: [
    'smp8-bab1-bilangan-berpangkat',
    'smp8-bab3-persamaan-pertidaksamaan-linear',
    'smp8-bab5-persamaan-garis-lurus',
    'smp8-bab6-statistika'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'Gauss',
  title: 'CEMC Gauss Grade 8 — 2025',
  totalMarks: 150,
  instructions:
    'Attempt all 25 multiple-choice questions (original time allowed: 60 minutes; basic calculating devices without internet access, communication features, stored notes, CAS, or dynamic geometry software are permitted). Part A (Questions 1–10) is worth 5 marks each (50 marks), Part B (Questions 11–20) is worth 6 marks each (60 marks), and Part C (Questions 21–25) is worth 8 marks each (40 marks), for a total of 150 marks. In the official contest, there is no penalty for incorrect answers, and each unanswered question earns 2 marks up to a maximum of 10 unanswered questions. Diagrams are not drawn to scale.',
  source: {
    org: 'CEMC — University of Waterloo',
    file: '2025Gauss8Contest.pdf',
    license: 'Hak cipta pada penyelenggara (CEMC University of Waterloo); dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Part A',
      marks: 50,
      stem: 'Each correct answer is worth 5 marks (Questions 1–10).',
      parts: [
        {
          label: '1',
          marks: 5,
          prompt:
            'In the diagram, how many of the $24$ circles are shaded?\n\nA. $10$\nB. $12$\nC. $14$\nD. $16$\nE. $18$',
          figures: [
            {
              src: '/papers/cemc-gauss8-2025/fig-1.webp',
              alt: 'A 4 by 6 rectangular grid of 24 circles, some shaded grey and others unshaded.',
              caption: 'Grid of 24 circles arranged in 4 rows of 6.'
            }
          ],
          answer: 'B. $12$',
          principle: 'Use row-by-row symmetry or direct counting across the $4 \\times 6$ array.',
          solution:
            'The $24$ circles are arranged in $4$ rows of $6$ circles. In each row, exactly $3$ of the $6$ circles (half of the row) are shaded in an alternating pattern. Therefore, the total number of shaded circles is\n$$4 \\times 3 = 12.$$',
          rubric: [
            { code: 'M2', text: 'Identifies that $3$ of the $6$ circles in each of the $4$ rows are shaded.' },
            { code: 'A3', text: 'Computes $4 \\times 3 = 12$ shaded circles, option B.' }
          ]
        },
        {
          label: '2',
          marks: 5,
          prompt:
            'Seong-hun had $36$ dried apricot pieces that he gave to his $4$ children. Each child received the same number of pieces. How many pieces did each child receive?\n\nA. $12$\nB. $6$\nC. $3$\nD. $9$\nE. $10$',
          answer: 'D. $9$',
          principle: 'Equal sharing divides the total number of items by the number of recipients.',
          solution:
            'Dividing $36$ dried apricot pieces equally among $4$ children gives\n$$\\frac{36}{4} = 9\\text{ pieces}$$ per child.',
          rubric: [
            { code: 'M2', text: 'Sets up the equal division $\\frac{36}{4}$.' },
            { code: 'A3', text: 'Finds $9$ pieces per child, option D.' }
          ]
        },
        {
          label: '3',
          marks: 5,
          prompt:
            'Recycling is picked up every two weeks. Recycling was last picked up on May $12$. On what date is the recycling picked up next?\n\nA. May $19$\nB. May $20$\nC. May $25$\nD. May $26$\nE. May $27$',
          answer: 'D. May $26$',
          principle: 'Convert two weeks to $2 \\times 7 = 14$ days and add to the starting date within May.',
          solution:
            'Since $1$ week has $7$ days, two weeks equal $2 \\times 7 = 14$ days. Adding $14$ days to May $12$ gives\n$$12 + 14 = 26,$$ so the next recycling pickup is on May $26$.',
          rubric: [
            { code: 'M2', text: 'Converts two weeks to $14$ days.' },
            { code: 'A3', text: 'Adds $12 + 14 = 26$ to get May $26$, option D.' }
          ]
        },
        {
          label: '4',
          marks: 5,
          prompt:
            'At $8:45\\text{ a.m.}$, Aisha starts a movie that is $2$ hours and $45$ minutes long. If she watches the movie all the way through without a pause or a break, at what time will it finish?\n\nA. $10:30\\text{ a.m.}$\nB. $11:15\\text{ a.m.}$\nC. $11:30\\text{ a.m.}$\nD. $10:50\\text{ a.m.}$\nE. $10:45\\text{ a.m.}$',
          answer: 'C. $11:30\\text{ a.m.}$',
          principle: 'Add hours and minutes sequentially, regrouping $60$ minutes into $1$ hour.',
          solution:
            'Adding $2$ hours to $8:45\\text{ a.m.}$ gives $10:45\\text{ a.m.}$. Adding the remaining $45$ minutes ($15$ minutes to reach $11:00\\text{ a.m.}$ plus $30$ minutes more) gives $11:30\\text{ a.m.}$.',
          rubric: [
            { code: 'M2', text: 'Advances $8:45\\text{ a.m.}$ by $2$ hours to $10:45\\text{ a.m.}$ and adds $45$ minutes.' },
            { code: 'A3', text: 'Obtains $11:30\\text{ a.m.}$, option C.' }
          ]
        },
        {
          label: '5',
          marks: 5,
          prompt:
            'If $7x - 3 = 60$, the value of $x$ is\n\nA. $9$\nB. $7$\nC. $10$\nD. $6$\nE. $8$',
          answer: 'A. $9$',
          principle: 'Isolate the variable term by undoing subtraction, then divide by the coefficient.',
          solution:
            'Add $3$ to both sides of $7x - 3 = 60$:\n$$7x = 60 + 3 = 63.$$\nDividing by $7$ gives\n$$x = \\frac{63}{7} = 9.$$',
          rubric: [
            { code: 'M2', text: 'Adds $3$ to both sides to obtain $7x = 63$.' },
            { code: 'A3', text: 'Divides by $7$ to get $x = 9$, option A.' }
          ]
        },
        {
          label: '6',
          marks: 5,
          prompt:
            'A figure is made by placing a triangle on top of a square, as shown. The triangle is coloured either red or yellow. The square is coloured either blue or purple or green. How many different ways can the figure be coloured?\n\nA. $5$\nB. $3$\nC. $9$\nD. $6$\nE. $2$',
          figures: [
            {
              src: '/papers/cemc-gauss8-2025/fig-6.webp',
              alt: 'A composite figure showing a triangle placed directly on top of a square.',
              caption: 'Composite figure made of a triangle on top of a square.'
            }
          ],
          answer: 'D. $6$',
          principle: 'By the fundamental counting principle, multiply the numbers of independent choices.',
          solution:
            'There are $2$ colour choices for the triangle (red or yellow) and $3$ independent colour choices for the square (blue, purple, or green). By the multiplication principle, the total number of colourings is\n$$2 \\times 3 = 6.$$',
          rubric: [
            { code: 'M2', text: 'Applies the multiplication principle to $2$ triangle choices and $3$ square choices.' },
            { code: 'A3', text: 'Computes $2 \\times 3 = 6$ ways, option D.' }
          ]
        },
        {
          label: '7',
          marks: 5,
          prompt:
            'The point $(5, 7)$ is plotted on the graph shown. When $(5, 7)$ is reflected in the $x$-axis, the resulting point is\n\nA. $(5, -7)$\nB. $(-5, -7)$\nC. $(5, 7)$\nD. $(7, 5)$\nE. $(-7, -5)$',
          figures: [
            {
              src: '/papers/cemc-gauss8-2025/fig-7.webp',
              alt: 'Coordinate plane with x-axis and y-axis showing a plotted point at (5, 7) in the first quadrant.',
              caption: 'Point (5, 7) plotted on the coordinate grid.'
            }
          ],
          answer: 'A. $(5, -7)$',
          principle: 'Reflecting a point $(x, y)$ across the $x$-axis preserves $x$ and negates $y$: $(x, y) \\mapsto (x, -y)$.',
          solution:
            'Under reflection in the $x$-axis, the $x$-coordinate stays unchanged and the $y$-coordinate changes sign. Thus, $(5, 7)$ maps to $(5, -7)$.',
          rubric: [
            { code: 'M2', text: 'Uses the $x$-axis reflection rule $(x, y) \\mapsto (x, -y)$.' },
            { code: 'A3', text: 'Obtains $(5, -7)$, option A.' }
          ]
        },
        {
          label: '8',
          marks: 5,
          prompt:
            'Each of Mrs. Myer’s students voted exactly once for their favourite season. Which of the following statements about the results in the graph shown is *false*?\n\nA. Five students voted for Fall.\nB. Winter received more votes than Spring.\nC. Thirty-five students participated in this survey.\nD. More than half of the students voted for Summer.\nE. Fall and Spring received the same number of votes.',
          figures: [
            {
              src: '/papers/cemc-gauss8-2025/fig-8.webp',
              alt: 'Bar graph titled Favourite Season showing student votes on the vertical axis for Spring, Summer, Fall, and Winter.',
              caption: 'Bar graph of Mrs. Myer’s students’ favourite seasons.'
            }
          ],
          answer: 'D. More than half of the students voted for Summer.',
          principle: 'Read each bar height carefully and check the total count before testing each statement.',
          solution:
            'Reading the bar heights from the graph:\n- Spring: $5$\n- Summer: $15$\n- Fall: $5$\n- Winter: $10$\n\nThe total number of students is $5 + 15 + 5 + 10 = 35$. Checking each option:\n- A: Fall has $5$ votes (true).\n- B: Winter ($10$) $>$ Spring ($5$) (true).\n- C: Total is $35$ students (true).\n- D: Half of $35$ is $17.5$, and Summer received $15 < 17.5$ votes (false).\n- E: Fall and Spring both received $5$ votes (true).\n\nHence, statement D is false.',
          rubric: [
            { code: 'M2', text: 'Reads the four bar heights ($5, 15, 5, 10$) and finds total $35$.' },
            { code: 'A3', text: 'Shows $15 < \\frac{35}{2} = 17.5$, identifying statement D as false.' }
          ]
        },
        {
          label: '9',
          marks: 5,
          prompt:
            'Ruhab wrote the list $5, 2, 8, 7, 9$ and then erased one of the five digits. The sum of the remaining four digits was a multiple of $4$. Which number did she erase?\n\nA. $5$\nB. $2$\nC. $8$\nD. $7$\nE. $9$',
          answer: 'D. $7$',
          principle: 'Compute the total sum of all five digits, then subtract each candidate digit to see which leaves a multiple of $4$.',
          solution:
            'The sum of all five digits is\n$$5 + 2 + 8 + 7 + 9 = 31.$$\nTesting the multiples of $4$ below $31$:\n- $31 - 28 = 3$, which is not in the list.\n- $31 - 24 = 7$, which is in the list.\n\nChecking the remaining four digits when $7$ is erased: $5 + 2 + 8 + 9 = 24 = 4 \\times 6$. No other erased digit leaves a multiple of $4$ ($26, 29, 23, 22$). Thus, Ruhab erased $7$.',
          rubric: [
            { code: 'M2', text: 'Finds the total sum $31$ and tests subtracting list digits to reach a multiple of $4$.' },
            { code: 'A3', text: 'Identifies $31 - 7 = 24$ and concludes $7$ was erased, option D.' }
          ]
        },
        {
          label: '10',
          marks: 5,
          prompt:
            'An integer from $3$ to $20$, inclusive, is randomly selected. What is the probability that the integer selected is a perfect square?\n\nA. $\\frac{3}{20}$\nB. $\\frac{1}{9}$\nC. $\\frac{1}{6}$\nD. $\\frac{1}{10}$\nE. $\\frac{2}{9}$',
          answer: 'C. $\\frac{1}{6}$',
          principle: 'Probability equals the count of favourable outcomes divided by the total count of equally likely outcomes.',
          solution:
            'The number of integers from $3$ to $20$ inclusive is\n$$20 - 3 + 1 = 18.$$\nThe perfect squares in this range are $2^2 = 4$, $3^2 = 9$, and $4^2 = 16$ (since $1^2 = 1 < 3$ and $5^2 = 25 > 20$), giving $3$ favourable integers. Therefore, the probability is\n$$\\frac{3}{18} = \\frac{1}{6}.$$',
          rubric: [
            { code: 'M2', text: 'Counts $18$ integers from $3$ to $20$ inclusive and lists the $3$ squares ($4, 9, 16$).' },
            { code: 'A3', text: 'Simplifies $\\frac{3}{18} = \\frac{1}{6}$, option C.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Part B',
      marks: 60,
      stem: 'Each correct answer is worth 6 marks (Questions 11–20).',
      parts: [
        {
          label: '11',
          marks: 6,
          prompt:
            'What number goes in the box so that $\\frac{28}{32} + \\frac{1}{\\square} = 1$?\n\nA. $24$\nB. $-3$\nC. $7$\nD. $16$\nE. $8$',
          answer: 'E. $8$',
          principle: 'Subtract the known fraction from $1$ and reduce to a unit fraction.',
          solution:
            'Subtracting $\\frac{28}{32}$ from $1$ gives\n$$\\frac{1}{\\square} = 1 - \\frac{28}{32} = \\frac{32 - 28}{32} = \\frac{4}{32} = \\frac{1}{8}.$$\nHence, the number in the box is $8$.',
          rubric: [
            { code: 'M3', text: 'Computes $1 - \\frac{28}{32} = \\frac{4}{32}$ and reduces to lowest terms.' },
            { code: 'A3', text: 'Obtains $\\frac{1}{8}$ so the box equals $8$, option E.' }
          ]
        },
        {
          label: '12',
          marks: 6,
          prompt:
            'Leticia can walk $1.5\\text{ km}$ in $20$ minutes. Walking at this same rate, how far does Leticia walk in $4$ hours?\n\nA. $18\\text{ km}$\nB. $30\\text{ km}$\nC. $22.5\\text{ km}$\nD. $15\\text{ km}$\nE. $4.5\\text{ km}$',
          answer: 'A. $18\\text{ km}$',
          principle: 'Convert time to consistent units and scale distance proportionally by rate.',
          solution:
            'Since $1$ hour equals $60 = 3 \\times 20$ minutes, Leticia walks\n$$3 \\times 1.5\\text{ km} = 4.5\\text{ km}$$ in $1$ hour. At the same rate, in $4$ hours she walks\n$$4 \\times 4.5\\text{ km} = 18\\text{ km}.$$',
          rubric: [
            { code: 'M3', text: 'Finds the hourly walking speed $3 \\times 1.5 = 4.5\\text{ km/h}$ (or counts $12$ intervals of $20$ minutes).' },
            { code: 'A3', text: 'Computes $4 \\times 4.5 = 18\\text{ km}$, option A.' }
          ]
        },
        {
          label: '13',
          marks: 6,
          prompt:
            'A list of one-digit integers contains exactly one $1$, two $2$s, three $3$s, four $4$s, five $5$s, and six $6$s. What is the median of this list?\n\nA. $2$\nB. $3$\nC. $4$\nD. $5$\nE. $6$',
          answer: 'D. $5$',
          principle: 'For an ordered list of $n$ values with $n$ odd, the median is at position $\\frac{n + 1}{2}$.',
          solution:
            'The total number of integers in the list is\n$$1 + 2 + 3 + 4 + 5 + 6 = 21.$$\nThe median of $21$ ordered numbers is the $\\frac{21 + 1}{2} = 11$th value. Counting cumulative frequencies from the smallest value:\n- $1$s through $4$s occupy $1 + 2 + 3 + 4 = 10$ positions.\n- Positions $11$ through $15$ are all $5$s.\n\nTherefore, the $11$th number (the median) is $5$.',
          rubric: [
            { code: 'M3', text: 'Finds list length $21$, identifies the $11$th position as median, and sums $1+2+3+4 = 10$.' },
            { code: 'A3', text: 'Concludes the $11$th term is $5$, option D.' }
          ]
        },
        {
          label: '14',
          marks: 6,
          prompt:
            'In the diagram, which of the following pairs of angles have measures whose sum is equal to $180^\\circ$?\n\nA. $w$ and $z$\nB. $x$ and $y$\nC. $u$ and $x$\nD. $t$ and $y$\nE. $s$ and $x$',
          figures: [
            {
              src: '/papers/cemc-gauss8-2025/fig-14.webp',
              alt: 'Two parallel horizontal lines cut by a transversal line, with one 50 degree angle and seven angles labelled s, t, u, w, x, y, and z.',
              caption: 'Parallel lines intersected by a transversal with labelled angles.'
            }
          ],
          answer: 'D. $t$ and $y$',
          principle: 'Determine every angle from vertical angles, supplementary linear pairs, and parallel-line interior/corresponding angles.',
          solution:
            'Using vertical angles and straight lines around the top intersection with the $50^\\circ$ angle:\n- $t = 50^\\circ$ (vertically opposite to $50^\\circ$),\n- $s = u = 180^\\circ - 50^\\circ = 130^\\circ$ (supplementary linear pairs).\n\nSince the two horizontal lines are parallel, corresponding angles at the bottom intersection are:\n- $w = 50^\\circ$ and $z = 50^\\circ$,\n- $x = 130^\\circ$ and $y = 130^\\circ$.\n\nChecking the pairs in the options:\n- $w + z = 50^\\circ + 50^\\circ = 100^\\circ$,\n- $x + y = 130^\\circ + 130^\\circ = 260^\\circ$,\n- $u + x = 130^\\circ + 130^\\circ = 260^\\circ$,\n- $t + y = 50^\\circ + 130^\\circ = 180^\\circ$,\n- $s + x = 130^\\circ + 130^\\circ = 260^\\circ$.\n\nThus, $t$ and $y$ sum to $180^\\circ$.',
          rubric: [
            { code: 'M3', text: 'Determines $t = 50^\\circ$ and $y = x = 130^\\circ$ using vertical and parallel-line angle properties.' },
            { code: 'A3', text: 'Verifies $t + y = 180^\\circ$, option D.' }
          ]
        },
        {
          label: '15',
          marks: 6,
          prompt:
            'The ages of three students are consecutive integers. Their mean (average) age is $13$. A fourth student joins the group and the mean of their four ages is $14$. How old is the fourth student?\n\nA. $15$\nB. $18$\nC. $16$\nD. $14$\nE. $17$',
          answer: 'E. $17$',
          principle: 'Use $\\text{sum} = \\text{mean} \\times \\text{count}$ before and after the fourth student joins.',
          solution:
            'The sum of the ages of the first three students is\n$$3 \\times 13 = 39.$$\nAfter the fourth student joins, the sum of all four ages is\n$$4 \\times 14 = 56.$$\nTherefore, the fourth student’s age is\n$$56 - 39 = 17.$$',
          rubric: [
            { code: 'M3', text: 'Computes the two totals $3 \\times 13 = 39$ and $4 \\times 14 = 56$.' },
            { code: 'A3', text: 'Subtracts $56 - 39 = 17$, option E.' }
          ]
        },
        {
          label: '16',
          marks: 6,
          prompt:
            'At Doggy Daycare, there is one dog for every bowl of food, two dogs for every bowl of water, and three dogs for every bowl of treats. Every dog gets a serving of food, water and treats. If there are a total of $77$ bowls, how many dogs are there?\n\nA. $35$\nB. $77$\nC. $42$\nD. $11$\nE. $24$',
          answer: 'C. $42$',
          principle: 'Express the number of each bowl type in terms of the number of dogs $d$ and solve the linear equation.',
          solution:
            'Let $d$ be the number of dogs. Then there are $d$ bowls of food, $\\frac{d}{2}$ bowls of water, and $\\frac{d}{3}$ bowls of treats. Setting the total equal to $77$:\n$$d + \\frac{d}{2} + \\frac{d}{3} = 77.$$\nCombining fractions over the common denominator $6$:\n$$\\frac{6d + 3d + 2d}{6} = 77 \\implies \\frac{11d}{6} = 77 \\implies d = 77 \\times \\frac{6}{11} = 42.$$',
          rubric: [
            { code: 'M3', text: 'Forms $d + \\frac{d}{2} + \\frac{d}{3} = 77$ and simplifies to $\\frac{11d}{6} = 77$.' },
            { code: 'A3', text: 'Solves $d = 42$ dogs, option C.' }
          ]
        },
        {
          label: '17',
          marks: 6,
          prompt:
            'Points $B$ and $D$ lie on sides $AC$ and $CE$, respectively, of $\\triangle ACE$, as shown. If $\\angle CAE = \\angle CBD = 90^\\circ$ and $CB = BD = DE$, the measure of $\\angle ABE$ is\n\nA. $60^\\circ$\nB. $67.5^\\circ$\nC. $70^\\circ$\nD. $75^\\circ$\nE. $52.5^\\circ$',
          figures: [
            {
              src: '/papers/cemc-gauss8-2025/fig-17.webp',
              alt: 'Right triangle ACE with right angle at A, point B on AC, point D on CE, right angle CBD, and equal-length marks on CB, BD, and DE.',
              caption: 'Triangle ACE with right angles at A and B and equal segments CB, BD, and DE.'
            }
          ],
          answer: 'B. $67.5^\\circ$',
          principle: 'Chase angles through the two isosceles triangles $\\triangle CBD$ and $\\triangle BDE$, then use the straight angle along $ABC$.',
          solution:
            'In right isosceles $\\triangle CBD$, $\\angle CBD = 90^\\circ$ and $CB = BD$, so\n$$\\angle BCD = \\angle BDC = \\frac{180^\\circ - 90^\\circ}{2} = 45^\\circ.$$\nSince $C, D, E$ are collinear, $\\angle BDE$ is supplementary to $\\angle BDC$:\n$$\\angle BDE = 180^\\circ - 45^\\circ = 135^\\circ.$$\nIn isosceles $\\triangle BDE$, $BD = DE$, so\n$$\\angle DBE = \\angle DEB = \\frac{180^\\circ - 135^\\circ}{2} = 22.5^\\circ.$$\nFinally, since $A, B, C$ are collinear, $\\angle ABE + \\angle EBD + \\angle DBC = 180^\\circ$, giving\n$$\\angle ABE = 180^\\circ - 22.5^\\circ - 90^\\circ = 67.5^\\circ.$$',
          rubric: [
            { code: 'M2', text: 'Finds $\\angle BDC = 45^\\circ$ and $\\angle BDE = 135^\\circ$.' },
            { code: 'M2', text: 'Uses $BD = DE$ to get $\\angle DBE = 22.5^\\circ$.' },
            { code: 'A2', text: 'Computes $\\angle ABE = 180^\\circ - 90^\\circ - 22.5^\\circ = 67.5^\\circ$, option B.' }
          ]
        },
        {
          label: '18',
          marks: 6,
          prompt:
            'Two standard six-sided dice are rolled. If the two numbers on the top faces are multiplied, which of the following products is most likely?\n\nA. $4$\nB. $6$\nC. $9$\nD. $15$\nE. $8$',
          answer: 'B. $6$',
          principle: 'Count the number of ordered pairs $(a, b) \\in \\{1, \\ldots, 6\\}^2$ producing each candidate product.',
          solution:
            'Out of the $6 \\times 6 = 36$ equally likely ordered rolls $(a, b)$, count the pairs giving each product:\n- $4$: $(1, 4), (2, 2), (4, 1)$ $\\to 3$ ways.\n- $6$: $(1, 6), (2, 3), (3, 2), (6, 1)$ $\\to 4$ ways.\n- $9$: $(3, 3)$ $\\to 1$ way.\n- $15$: $(3, 5), (5, 3)$ $\\to 2$ ways.\n- $8$: $(2, 4), (4, 2)$ $\\to 2$ ways.\n\nSince $6$ occurs in $4$ ways (more than any other option), $6$ is the most likely product.',
          rubric: [
            { code: 'M3', text: 'Lists the ordered factorizations in $\\{1,\\ldots,6\\}^2$ for the candidate products.' },
            { code: 'A3', text: 'Identifies $6$ with $4$ outcomes as most likely, option B.' }
          ]
        },
        {
          label: '19',
          marks: 6,
          prompt:
            'How many ordered pairs of positive integers $(m, n)$ are there so that $m^2 \\times n = 2025$?\n\nA. $3$\nB. $7$\nC. $4$\nD. $5$\nE. $6$',
          answer: 'E. $6$',
          principle: 'Prime-factorize $2025$ and count all positive integers $m$ whose square divides $2025$.',
          solution:
            'First prime-factorize $2025$:\n$$2025 = 45^2 = (3^2 \\times 5)^2 = 3^4 \\times 5^2.$$\nFor $m^2$ to divide $3^4 \\times 5^2$, we can write $m = 3^a \\times 5^b$ with $2a \\le 4$ and $2b \\le 2$, so $a \\in \\{0, 1, 2\\}$ ($3$ choices) and $b \\in \\{0, 1\\}$ ($2$ choices). Each valid $m$ uniquely determines $n = \\frac{2025}{m^2}$. The $3 \\times 2 = 6$ ordered pairs $(m, n)$ are:\n$$(1, 2025),\\ (3, 225),\\ (5, 81),\\ (9, 25),\\ (15, 9),\\ (45, 1).$$\nThus, there are $6$ such ordered pairs.',
          rubric: [
            { code: 'M3', text: 'Factorizes $2025 = 3^4 \\times 5^2$ and bounds the exponents in $m = 3^a 5^b$ to $a \\in \\{0,1,2\\}, b \\in \\{0,1\\}$.' },
            { code: 'A3', text: 'Counts $3 \\times 2 = 6$ ordered pairs, option E.' }
          ]
        },
        {
          label: '20',
          marks: 6,
          prompt:
            'In the diagram, each of $a$, $b$ and $c$ is greater than zero. Which of the following expressions is *not* equal to the perimeter of this polygon?\n\nA. $4a + 4b$\nB. $a + b + 7c$\nC. $8c$\nD. $2a + 2b + 4c$\nE. $3a + 3b + 2c$',
          figures: [
            {
              src: '/papers/cemc-gauss8-2025/fig-20.webp',
              alt: 'An L-shaped orthogonal polygon with six right angles and side lengths labelled a, b, and c along with congruent side tick marks.',
              caption: 'Right-angled L-shaped polygon with side labels a, b, and c.'
            }
          ],
          answer: 'B. $a + b + 7c$',
          principle: 'Compare opposite horizontal and vertical side sums on the orthogonal L-shape to relate $a + b$ and $c$.',
          solution:
            'From the tick marks and right angles:\n- The two double-ticked horizontal segments each have length $c$, so the total width across the top edge equals $c + c = 2c$.\n- The single-ticked left vertical edge has the same length as the single-ticked top horizontal edge, so the left vertical edge also has length $2c$.\n- On the right side, the two vertical segments have lengths $a$ and $b$, which together equal the left vertical height: $a + b = 2c$.\n\nSumming all six sides of the polygon gives the perimeter\n$$P = 2c + 2c + a + c + b + c = 2(a + b) + 4c.$$\nUsing $a + b = 2c$, every side-pair of length $2c$ can be written as either $a + b$ or $2c$, giving equivalent expressions for $P = 8c$:\n- $4a + 4b = 4(2c) = 8c$,\n- $8c = 8c$,\n- $2a + 2b + 4c = 2(2c) + 4c = 8c$,\n- $3a + 3b + 2c = 3(2c) + 2c = 8c$.\n\nMeanwhile, $a + b + 7c = 2c + 7c = 9c \\neq 8c$ (since $c > 0$). Thus, $a + b + 7c$ is not equal to the perimeter.',
          rubric: [
            { code: 'M3', text: 'Uses the tick marks and orthogonal projections to establish $a + b = 2c$ and perimeter $8c$.' },
            { code: 'A3', text: 'Shows $a + b + 7c = 9c \\neq 8c$, option B.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Part C',
      marks: 40,
      stem: 'Each correct answer is worth 8 marks (Questions 21–25).',
      parts: [
        {
          label: '21',
          marks: 8,
          prompt:
            'In the diagram, each letter from $A$ to $H$ is equal to a different integer from $1$ to $8$. Also,\n\n- $H$ is a perfect square and is $1$ more than $D$\n- $5$ and $8$ are in the same row\n- $C$ is a multiple of both $G$ and $D$\n- $B$ is the largest prime number in the set\n- The value of $B + G$ is even\n\nWhat is the value of $F$?\n\nA. $2$\nB. $6$\nC. $1$\nD. $7$\nE. $8$',
          figures: [
            {
              src: '/papers/cemc-gauss8-2025/fig-21.webp',
              alt: 'A 4-row by 2-column grid of eight boxes containing letters A, B, C, D in the left column and E, F, G, H in the right column.',
              caption: 'Four-by-two grid arranging letters A through H in rows.'
            }
          ],
          answer: 'A. $2$',
          principle: 'Apply the tightest arithmetic constraints first (squares, largest prime, multiples) to narrow each cell uniquely.',
          solution:
            'The available integers are $\\{1, 2, 3, 4, 5, 6, 7, 8\\}$. Deduce the letters step by step:\n1. The only perfect squares in $\\{1, \\ldots, 8\\}$ are $1$ and $4$. Since $H = D + 1$ with $D \\ge 1$, we cannot have $H = 1$; thus $H = 4$ and $D = 3$.\n2. The largest prime number in $\\{1, \\ldots, 8\\}$ is $7$, so $B = 7$.\n3. $C$ is a multiple of $D = 3$ and $C \\neq 3$, so $C = 6$. Since $C = 6$ is also a multiple of $G$ (with $3$ and $6$ already used), $G \\in \\{1, 2\\}$.\n4. Because $B = 7$ is odd and $B + G$ is even, $G$ must be odd, forcing $G = 1$.\n5. The unassigned letters are $A, E, F$, and the remaining integers are $\\{2, 5, 8\\}$. From the $4 \\times 2$ grid, the rows are $(A, E)$, $(B, F)$, $(C, G)$, and $(D, H)$. Since $5$ and $8$ must be in the same row, they must occupy $A$ and $E$ in some order.\n\nThis leaves $F = 2$.',
          rubric: [
            { code: 'M2', text: 'Deduces $H = 4$, $D = 3$, and $B = 7$.' },
            { code: 'M3', text: 'Uses $C$ as a multiple of $G$ and $D$ and parity of $B + G$ to find $C = 6$ and $G = 1$.' },
            { code: 'A3', text: 'Places $5$ and $8$ in row $(A, E)$ and concludes $F = 2$, option A.' }
          ]
        },
        {
          label: '22',
          marks: 8,
          prompt:
            '$ABCD$ has vertices $A(-3, -2)$, $B(0, r)$, $C(6, 10)$, and $D(s, t)$. $AB$ is parallel to $CD$, $BC$ is parallel to $AD$, and $r < 0$. What is the value of $r + s + t$?\n\nA. $10$\nB. $11$\nC. $12$\nD. $13$\nE. $14$',
          answer: 'B. $11$',
          principle: 'In parallelogram $ABCD$, opposite sides are parallel and equal vectors: $\\overrightarrow{AB} = \\overrightarrow{DC}$, equivalently $A + C = B + D$.',
          solution:
            'Since $AB \\parallel CD$ and $BC \\parallel AD$, quadrilateral $ABCD$ is a parallelogram. Therefore, its diagonals bisect each other, meaning the midpoint of $AC$ equals the midpoint of $BD$, or equivalently:\n$$x_A + x_C = x_B + x_D \\quad\\text{and}\\quad y_A + y_C = y_B + y_D.$$\nSubstituting the coordinates $A(-3, -2)$, $B(0, r)$, $C(6, 10)$, and $D(s, t)$:\n$$-3 + 6 = 0 + s \\implies s = 3,$$\n$$-2 + 10 = r + t \\implies r + t = 8.$$\n*(Note: The condition $r < 0$ ensures $A, B, C, D$ are non-collinear and in cyclic order; for instance, $r = -2$ gives $D(3, 10)$ with non-zero area.)*\nSumming gives\n$$r + s + t = (r + t) + s = 8 + 3 = 11.$$',
          rubric: [
            { code: 'M3', text: 'Recognizes $ABCD$ as a parallelogram and equates diagonal sums $A + C = B + D$.' },
            { code: 'M2', text: 'Solves $s = 3$ and $r + t = 8$.' },
            { code: 'A3', text: 'Computes $r + s + t = 11$, option B.' }
          ]
        },
        {
          label: '23',
          marks: 8,
          prompt:
            'The number $2013$ is multiplied by a positive integer $n$. The last four digits of the result are $2025$. What is the sum of the digits of the smallest possible value of $n$?\n\nA. $17$\nB. $13$\nC. $15$\nD. $14$\nE. $16$',
          answer: 'E. $16$',
          principle: 'Determine the last three digits of $n$ sequentially from units to hundreds place via $2013n \\equiv 2025 \\pmod{10000}$.',
          solution:
            'Write $n = 1000k + 100a + 10b + c$ where $c, b, a$ are the units, tens, and hundreds digits of $n$. We require $2013n \\equiv 2025 \\pmod{10000}$:\n1. **Units digit ($c$):** $3c \\equiv 5 \\pmod{10}$, which uniquely gives $c = 5$. Now $2013 \\times 5 = 10065$.\n2. **Tens digit ($b$):** Considering the last two digits of $2013 \\times (10b + 5)$, we need $6 + 3b \\equiv 2 \\pmod{10}$, so $3b \\equiv 6 \\pmod{10}$, which uniquely gives $b = 2$. Now $2013 \\times 25 = 50325$.\n3. **Hundreds digit ($a$):** Adding $2013 \\times 100a \\equiv 300a \\pmod{1000}$, the hundreds digit requires $3 + 3a \\equiv 0 \\pmod{10}$, so $3a \\equiv 7 \\pmod{10}$, which uniquely gives $a = 9$.\n\nTesting $n = 925$:\n$$2013 \\times 925 = 1\\,862\\,025,$$ whose last four digits are indeed $2025$. Since the last three digits $925$ are forced and $n = 925$ works directly, the smallest positive integer is $n = 925$. The sum of its digits is\n$$9 + 2 + 5 = 16.$$',
          rubric: [
            { code: 'M3', text: 'Determines the forced digits $c = 5$ and $b = 2$ from the units and tens digits modulo $100$.' },
            { code: 'M2', text: 'Determines $a = 9$ and verifies $2013 \\times 925 = 1\\,862\\,025$.' },
            { code: 'A3', text: 'Computes digit sum $9 + 2 + 5 = 16$, option E.' }
          ]
        },
        {
          label: '24',
          marks: 8,
          prompt:
            'In the diagram, circles are *connected* if they are joined by a line segment. Each circle is filled with one integer so that\n\n- the positive difference between each pair of integers in connected circles is $d$, and\n- the sum of the five integers in the circles is $54$.\n\nFor how many different values of $d$ between $1$ and $20$ inclusive can the circles be filled in this way?\n\nA. $4$\nB. $12$\nC. $8$\nD. $20$\nE. $16$',
          figures: [
            {
              src: '/papers/cemc-gauss8-2025/fig-24.webp',
              alt: 'Five circles arranged with four at the corners of a square connected along the outer edges and a fifth centre circle connected to the top-left and bottom-right corner circles.',
              caption: 'Five-circle network showing connected pairs of circles.'
            }
          ],
          answer: 'E. $16$',
          principle: 'Parameterize all five circles in terms of the centre value $a$ and step $d$, then check modulo $5$ divisibility of the sum.',
          solution:
            'Let the centre circle contain the integer $a$. It is connected to the top-left and bottom-right corner circles, so each of those two circles is either $a + d$ or $a - d$:\n- **If both are $a + d$:** The top-right and bottom-left circles are each connected to both $a + d$ circles, so each must be either $a + 2d$ or $a$. The total sum $S$ can be:\n  - $5a + 6d$ (both $a + 2d$),\n  - $5a + 4d$ (one $a + 2d$, one $a$),\n  - $5a + 2d$ (both $a$).\n- **If both are $a - d$:** By symmetry, each of the other two corner circles is either $a - 2d$ or $a$, giving $S \\in \\{5a - 6d,\\ 5a - 4d,\\ 5a - 2d\\}$.\n- **If one is $a + d$ and one is $a - d$:** The remaining two corner circles must differ by $d$ from both $a + d$ and $a - d$, forcing both to equal $a$, which gives $S = 5a$.\n\nThus, $S = 5a + kd$ where $k \\in \\{0, \\pm 2, \\pm 4, \\pm 6\\}$. We need $5a + kd = 54$ for some integer $a$, which holds if and only if $54 - kd$ is divisible by $5$:\n- If $5 \\mid d$, then $5 \\mid kd$, so $54 - kd \\equiv 4 \\not\\equiv 0 \\pmod{5}$; hence $d \\in \\{5, 10, 15, 20\\}$ are impossible.\n- If $5 \\nmid d$, then the residues $d, 2d, 3d, 4d \\pmod 5$ cover all non-zero remainders, and in particular one of $2d, 4d, 6d, -2d$ is congruent to $54 \\equiv 4 \\pmod 5$:\n  - $d \\equiv 1 \\pmod 5 \\implies k = 4$ gives $5a + 4d = 54$;\n  - $d \\equiv 2 \\pmod 5 \\implies k = 2$ gives $5a + 2d = 54$;\n  - $d \\equiv 3 \\pmod 5 \\implies k = -2$ gives $5a - 2d = 54$;\n  - $d \\equiv 4 \\pmod 5 \\implies k = 6$ gives $5a + 6d = 54$.\n\nTherefore, every $d$ from $1$ to $20$ except the $4$ multiples of $5$ works, giving\n$$20 - 4 = 16$$ valid values of $d$.',
          rubric: [
            { code: 'M3', text: 'Classifies the $7$ possible sums $S = 5a + kd$ with $k \\in \\{0, \\pm 2, \\pm 4, \\pm 6\\}$.' },
            { code: 'M2', text: 'Proves $5 \\mid d$ gives no integer solution $a$, while every $d$ with $5 \\nmid d$ admits a valid $k$.' },
            { code: 'A3', text: 'Subtracts the $4$ multiples of $5$ from $20$ to get $16$ values, option E.' }
          ]
        },
        {
          label: '25',
          marks: 8,
          prompt:
            'The list $11, 12, 14, 23, 31, 44, 45, 46, 56, 64, 67, 74$ can be arranged so that the units digit of each number matches the tens digit of the number that follows it. For example, $12, 23, 31, 11, 14, 44, 45, 56, 67, 74, 46, 64$ is one such arrangement. How many such arrangements of the given list are possible?\n\nA. $18$\nB. $24$\nC. $36$\nD. $30$\nE. $12$',
          answer: 'B. $24$',
          principle: 'Model each two-digit number $ab$ as a directed edge $a \\to b$ and count Eulerian trails.',
          solution:
            'View each two-digit number as a directed edge from its tens digit to its units digit. Tallying in-degrees (as units digits) and out-degrees (as tens digits) for digits $1$ through $7$:\n- $1$: in-degree $2$ ($11, 31$), out-degree $3$ ($11, 12, 14$).\n- $2$: in-degree $1$ ($12$), out-degree $1$ ($23$).\n- $3$: in-degree $1$ ($23$), out-degree $1$ ($31$).\n- $4$: in-degree $4$ ($14, 44, 64, 74$), out-degree $3$ ($44, 45, 46$).\n- $5$: in-degree $1$ ($45$), out-degree $1$ ($56$).\n- $6$: in-degree $2$ ($46, 56$), out-degree $2$ ($64, 67$).\n- $7$: in-degree $1$ ($67$), out-degree $1$ ($74$).\n\nEvery Eulerian trail must start at vertex $1$ and end at vertex $4$. Moreover, edge $14$ is the unique bridge from $\\{1, 2, 3\\}$ to $\\{4, 5, 6, 7\\}$ (with no edges going back), so every valid arrangement splits into:\n1. **Sub-trail on $\\{1, 2, 3\\}$ from $1$ to $1$:** Edges are $12 \\to 23 \\to 31$ (forced 3-edge cycle) plus the self-loop $11$, which can be placed either before or after the cycle. This gives $2$ arrangements.\n2. **Bridge edge:** $14$ ($1$ way).\n3. **Sub-trail on $\\{4, 5, 6, 7\\}$ from $4$ to $4$:** Ignoring the self-loop $44$ temporarily, the remaining edges condense into two cycles at $6$ / $4$:\n   - $45 \\to 56$ is forced, and $67 \\to 74$ is forced.\n   - Either $45, 56$ is followed by $64$ (leaving $46, 67, 74$), giving two orders of the two $4$-to-$4$ loops: $(45, 56, 64;\\ 46, 67, 74)$ and $(46, 67, 74;\\ 45, 56, 64)$.\n   - Or $45, 56$ is followed by $67, 74$ (leaving $46, 64$), giving two orders: $(45, 56, 67, 74;\\ 46, 64)$ and $(46, 64;\\ 45, 56, 67, 74)$.\n   For each of these $4$ loop orders, the self-loop $44$ can be inserted at the start, at the midpoint (between the two $4$-to-$4$ loops), or at the end, giving $4 \\times 3 = 12$ arrangements.\n\nBy the multiplication principle, the total number of valid arrangements is\n$$2 \\times 1 \\times 12 = 24.$$',
          rubric: [
            { code: 'M3', text: 'Identifies start digit $1$, end digit $4$, and the unique bridge $14$ splitting $\\{1,2,3\\}$ and $\\{4,5,6,7\\}$.' },
            { code: 'M2', text: 'Counts $2$ arrangements on the $\\{1,2,3\\}$ component and $4 \\times 3 = 12$ arrangements on the $\\{4,5,6,7\\}$ component.' },
            { code: 'A3', text: 'Multiplies $2 \\times 12 = 24$ arrangements, option B.' }
          ]
        }
      ]
    }
  ]
};
