/**
 * Paket Soal Terstruktur: CEMC Fermat Grade 11 — 2025 (25 official questions & solutions)
 * Sumber: 2025FermatContest.pdf & 2025FermatSolution.pdf (CEMC — University of Waterloo).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Diagram pada soal 2, 5, 7, 12, dan 16
 * diekstrak dari naskah resmi ke public/papers/cemc-fermat-2025/fig-<n>.webp.
 */
export default {
  id: 'cemc-fermat-2025',
  slug: 'cemc-fermat-2025',
  subject: 'olimpiade-mat',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'CEMC Fermat Grade 11 — 2025: official CEMC Waterloo contest questions & solutions',
  relatedChapterIds: [
    'sma11-bab1-fungsi-invers',
    'sma11-bab2-lingkaran',
    'sma11-bab3-statistika-bivariat'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'Fermat',
  title: 'CEMC Fermat Grade 11 — 2025',
  totalMarks: 150,
  instructions:
    'Attempt all 25 questions (official contest time: 60 minutes; basic calculators permitted). Part A has 10 multiple-choice questions worth 5 marks each (50 marks). Part B has 10 multiple-choice questions worth 6 marks each (60 marks). Part C has 5 integer-answer questions worth 8 marks each (40 marks), where each answer is an integer from 00 to 99 inclusive (single-digit answers are coded with a leading zero, such as 07). In the official CEMC scoring system, there is no penalty for an incorrect answer and each unanswered question is worth 2 marks up to a maximum of 10 unanswered questions; this practice set scores correct answers out of 150 marks. Diagrams are not drawn to scale.',
  source: {
    org: 'CEMC — University of Waterloo',
    file: '2025FermatContest.pdf',
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
            'The value of $2 - 0 + 2 \\times 5$ is\n\nA. $-8$\nB. $10$\nC. $0$\nD. $12$\nE. $2$',
          answer: 'D. $12$',
          principle: 'Apply order of operations: evaluate multiplication before addition and subtraction.',
          solution:
            'Following order of operations, evaluate $2 \\times 5 = 10$ first:\n$$2 - 0 + 2 \\times 5 = 2 - 0 + 10 = 12.$$',
          rubric: [
            { code: 'M3', text: 'Applies order of operations to compute $2 \\times 5 = 10$ first.' },
            { code: 'A2', text: 'Evaluates $2 - 0 + 10 = 12$, option D.' }
          ]
        },
        {
          label: '2',
          marks: 5,
          prompt:
            'In a survey, each student chose their favourite day of the week. In the graph, the percentages of those surveyed who selected each day of the week is shown. If $3000$ students were surveyed, how many people chose Friday as their favourite day of the week?\n\nA. $400$\nB. $600$\nC. $700$\nD. $500$\nE. $800$',
          figures: [
            {
              src: '/papers/cemc-fermat-2025/fig-2.webp',
              alt: 'Bar graph titled Favourite Day of the Week showing percentages chosen from 0 to 25 percent for Monday through Sunday.',
              caption: 'Survey results for favourite day of the week.'
            }
          ],
          answer: 'B. $600$',
          principle: 'Read the percentage for the target category from the bar graph and multiply by the total number of respondents.',
          solution:
            'Reading the bar above Friday on the graph gives $20\\%$.\nSince $3000$ students were surveyed, the number of students who chose Friday is\n$$\\frac{20}{100} \\times 3000 = 20 \\times 30 = 600.$$',
          rubric: [
            { code: 'M3', text: 'Reads the Friday bar as $20\\%$ from the graph.' },
            { code: 'A2', text: 'Computes $20\\% \\times 3000 = 600$, option B.' }
          ]
        },
        {
          label: '3',
          marks: 5,
          prompt:
            'How many integer values of $x$ satisfy the inequality $2 < x < 14$?\n\nA. $10$\nB. $7$\nC. $13$\nD. $14$\nE. $11$',
          answer: 'E. $11$',
          principle: 'The number of integers in the closed interval $[a, b]$ is $b - a + 1$.',
          solution:
            'The integers strictly between $2$ and $14$ are $3, 4, 5, \\dots, 13$.\nCounting inclusive from $3$ to $13$ gives\n$$13 - 3 + 1 = 11\\text{ integers}.$$',
          rubric: [
            { code: 'M3', text: 'Identifies the valid integer range as $3 \\le x \\le 13$.' },
            { code: 'A2', text: 'Counts $13 - 3 + 1 = 11$ integers, option E.' }
          ]
        },
        {
          label: '4',
          marks: 5,
          prompt:
            'Rachel, Christophe and Alfonzo are paid to organize some books. In total, they are paid $50$ dollars. Alfonzo is paid $14$ dollars. Rachel is paid twice what Christophe is paid. How much is Christophe paid?\n\nA. $10$ dollars\nB. $12$ dollars\nC. $14$ dollars\nD. $16$ dollars\nE. $18$ dollars',
          answer: 'B. $12$ dollars',
          principle: 'Subtract the known share from the total, then split the remainder according to the given ratio.',
          solution:
            'After subtracting Alfonzo\'s $14$ dollars from the $50$ dollars total, Rachel and Christophe are paid\n$$50 - 14 = 36\\text{ dollars}.$$\nLet Christophe\'s pay be $c$ dollars, so Rachel is paid $2c$ dollars. Then\n$$c + 2c = 36 \\implies 3c = 36 \\implies c = 12.$$\nThus Christophe is paid $12$ dollars.',
          rubric: [
            { code: 'M3', text: 'Subtracts $50 - 14 = 36$ and sets up $c + 2c = 36$.' },
            { code: 'A2', text: 'Solves for $c = 12$ dollars, option B.' }
          ]
        },
        {
          label: '5',
          marks: 5,
          prompt:
            'In the diagram, points $P$, $Q$, $R$, and $S$ are at the intersection of gridlines in a $5 \\times 5$ grid of $1 \\times 1$ squares. The area of rectangle $PQRS$ is\n\nA. $5$\nB. $8$\nC. $4$\nD. $7$\nE. $6$',
          figures: [
            {
              src: '/papers/cemc-fermat-2025/fig-5.webp',
              alt: 'Shaded tilted rectangle PQRS whose four vertices lie on grid intersections inside a 5 by 5 grid of unit squares.',
              caption: 'Rectangle PQRS positioned on a 5 × 5 grid.'
            }
          ],
          answer: 'C. $4$',
          principle: 'Find the rectangle\'s side lengths using the Pythagorean Theorem along grid steps, then multiply length by width.',
          solution:
            'From the grid, moving from $S$ to $R$ goes $2$ units right and $2$ units down, while moving from $R$ to $Q$ goes $1$ unit right and $1$ unit up.\nBy the Pythagorean Theorem,\n$$SR = \\sqrt{2^2 + 2^2} = \\sqrt{8}, \\qquad QR = \\sqrt{1^2 + 1^2} = \\sqrt{2}.$$\nTherefore, the area of rectangle $PQRS$ is\n$$SR \\times QR = \\sqrt{8} \\times \\sqrt{2} = \\sqrt{16} = 4.$$',
          rubric: [
            { code: 'M3', text: 'Finds side lengths $SR = \\sqrt{8}$ and $QR = \\sqrt{2}$ (or partitions $PQRS$ into $8$ half-unit triangles).' },
            { code: 'A2', text: 'Computes the area as $\\sqrt{8} \\times \\sqrt{2} = 4$, option C.' }
          ]
        },
        {
          label: '6',
          marks: 5,
          prompt:
            'The current calendar year, $2025$, is a perfect square. In $n$ years from $2025$, the calendar year will again be a perfect square. The smallest possible value of $n$ is\n\nA. $2025$\nB. $100$\nC. $9$\nD. $46$\nE. $91$',
          answer: 'E. $91$',
          principle: 'Since $2025 = k^2$, the next perfect square is $(k + 1)^2$.',
          solution:
            'Because $\\sqrt{2025} = 45$, the next largest perfect square after $2025 = 45^2$ is\n$$46^2 = 2116.$$\nHence the smallest possible value of $n$ is\n$$2116 - 2025 = 91.$$',
          rubric: [
            { code: 'M3', text: 'Identifies $2025 = 45^2$ and the next perfect square $46^2 = 2116$.' },
            { code: 'A2', text: 'Subtracts $2116 - 2025 = 91$, option E.' }
          ]
        },
        {
          label: '7',
          marks: 5,
          prompt:
            'In the diagram, the target shown has three scoring areas. An arrow that hits the centre circle is worth $10$ points, an arrow that hits the shaded middle ring is worth $5$ points, and an arrow that hits the outer ring is worth $1$ point. Three arrows are shot and each hits the target. Which of the following *cannot* be the total score for the three arrows?\n\nA. $16$\nB. $11$\nC. $13$\nD. $7$\nE. $20$',
          figures: [
            {
              src: '/papers/cemc-fermat-2025/fig-7.webp',
              alt: 'Circular target with three concentric regions labeled 10 in the white centre, 5 in the shaded middle ring, and 1 in the outer ring.',
              caption: 'Concentric target with scoring regions of 10, 5, and 1 points.'
            }
          ],
          answer: 'C. $13$',
          principle: 'Use modular arithmetic mod $5$: each $10$ or $5$ is $0 \\pmod{5}$, so the number of $1$-point arrows determines the remainder mod $5$.',
          solution:
            'The scores $10$ and $5$ are both multiples of $5$. To reach a total of $13 \\equiv 3 \\pmod{5}$ using values from $\\{10, 5, 1\\}$, at least three arrows must score $1$ point each (contributing $3$). However, with three arrows total, three $1$-point arrows give a score of $3$, not $13$; reaching $13$ requires at least one $10$-point arrow in addition to three $1$-point arrows ($4$ arrows total). Thus $13$ cannot be achieved with $3$ arrows.\nFor completeness, the other four totals are achievable:\n$$16 = 10 + 5 + 1, \\quad 11 = 5 + 5 + 1, \\quad 7 = 5 + 1 + 1, \\quad 20 = 10 + 5 + 5.$$',
          rubric: [
            { code: 'M3', text: 'Shows that $13$ requires at least three $1$-point arrows and another arrow to exceed $3$, needing $\\ge 4$ arrows.' },
            { code: 'A2', text: 'Identifies $13$ as impossible (and confirms the remaining options), option C.' }
          ]
        },
        {
          label: '8',
          marks: 5,
          prompt:
            'The average of $15$ integers is $18$. The average of $5$ of these integers is $12$. What is the average of the other $10$ integers?\n\nA. $15$\nB. $21$\nC. $24$\nD. $18$\nE. $12$',
          answer: 'B. $21$',
          principle: 'Convert averages into sums: the sum of the remaining integers equals the total sum minus the known group sum.',
          solution:
            'The sum of all $15$ integers is $15 \\times 18 = 270$.\nThe sum of the $5$ selected integers is $5 \\times 12 = 60$.\nTherefore, the sum of the other $10$ integers is $270 - 60 = 210$, so their average is\n$$\\frac{210}{10} = 21.$$',
          rubric: [
            { code: 'M3', text: 'Computes the total sum $270$, the subset sum $60$, and the remaining sum $210$.' },
            { code: 'A2', text: 'Divides $210 / 10 = 21$, option B.' }
          ]
        },
        {
          label: '9',
          marks: 5,
          prompt:
            'If $x^2 - y^2 = 72$ and $x - y = 12$, the value of $x + y$ is\n\nA. $8$\nB. $60$\nC. $9$\nD. $72$\nE. $6$',
          answer: 'E. $6$',
          principle: 'Apply the difference of squares factorization $x^2 - y^2 = (x - y)(x + y)$.',
          solution:
            'Factoring the left-hand side of $x^2 - y^2 = 72$ gives\n$$(x - y)(x + y) = 72.$$\nSubstituting $x - y = 12$ yields\n$$12(x + y) = 72 \\implies x + y = \\frac{72}{12} = 6.$$',
          rubric: [
            { code: 'M3', text: 'Factors $x^2 - y^2 = (x - y)(x + y)$ and substitutes $x - y = 12$.' },
            { code: 'A2', text: 'Solves $x + y = 72 / 12 = 6$, option E.' }
          ]
        },
        {
          label: '10',
          marks: 5,
          prompt:
            'There are $186$ students on a class trip. Each student is placed into exactly one of $50$ groups. Each group has exactly $3$ students or exactly $4$ students. There are $m$ groups that have $3$ students and $n$ groups that have $4$ students. The value of $m - n$ is\n\nA. $-22$\nB. $-10$\nC. $-14$\nD. $-26$\nE. $-18$',
          answer: 'A. $-22$',
          principle: 'Set up a system of two linear equations for the total number of groups and the total number of students.',
          solution:
            'From the total number of groups and total number of students:\n$$m + n = 50, \\qquad 3m + 4n = 186.$$\nSubstituting $m = 50 - n$ into the second equation gives\n$$3(50 - n) + 4n = 186 \\implies 150 + n = 186 \\implies n = 36.$$\nThen $m = 50 - 36 = 14$, so\n$$m - n = 14 - 36 = -22.$$',
          rubric: [
            { code: 'M3', text: 'Forms $m + n = 50$ and $3m + 4n = 186$ and solves for $n = 36$, $m = 14$.' },
            { code: 'A2', text: 'Computes $m - n = -22$, option A.' }
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
            'Twelve lightbulbs are in a row. All lightbulbs are initially turned off. Angie flips the switch for every $2$nd lightbulb. Then Bilal flips the switch for every $3$rd lightbulb. Finally, Chenxhui flips the switch for every $4$th lightbulb. At the end of this process, how many lightbulbs are turned on?\n\nA. $5$\nB. $6$\nC. $7$\nD. $8$\nE. $9$',
          answer: 'A. $5$',
          principle: 'A lightbulb ends up turned on if and only if its switch is flipped an odd number of times ($1$ or $3$ times among multiples of $2, 3, 4$).',
          solution:
            'Number the lightbulbs $1$ through $12$. Each bulb starts off and ends on if it is flipped an odd number of times across multiples of $2$, $3$, and $4$:\n- **Flipped $1$ time:**\n  - Multiples of $2$ only (not $3$ or $4$): $2, 10$.\n  - Multiples of $3$ only (not $2$ or $4$): $3, 9$.\n  - Multiples of $4$ only: none (every multiple of $4$ is a multiple of $2$).\n- **Flipped $2$ times:** $4, 6, 8$ (end off).\n- **Flipped $3$ times:** $12$ (divisible by $2, 3,$ and $4$, ends on).\n- **Flipped $0$ times:** $1, 5, 7, 11$ (remain off).\n\nThe lightbulbs turned on at the end are $2, 3, 9, 10,$ and $12$, giving $5$ lightbulbs.',
          rubric: [
            { code: 'M4', text: 'Tracks the parity of flips for bulbs $1$–$12$ across multiples of $2, 3,$ and $4$.' },
            { code: 'A2', text: 'Identifies the $5$ bulbs ($2, 3, 9, 10, 12$) that end up on, option A.' }
          ]
        },
        {
          label: '12',
          marks: 6,
          prompt:
            'In the graph, the five points show the money earned versus time worked for each of five employees. Each was paid a different but fixed number of dollars per hour. Which letter represents the employee who was paid the most money per hour?\n\nA. $A$\nB. $B$\nC. $C$\nD. $D$\nE. $E$',
          figures: [
            {
              src: '/papers/cemc-fermat-2025/fig-12.webp',
              alt: 'Coordinate grid scatter plot titled Money earned vs. time worked with Money Earned on the vertical axis, Time in hours on the horizontal axis, and five labeled points A, B, C, D, and E.',
              caption: 'Money earned versus time worked for five employees.'
            }
          ],
          answer: 'A. $A$',
          principle: 'Rate of pay (dollars per hour) equals the slope of the ray from the origin $(0, 0)$ through the plotted point.',
          solution:
            'Since the vertical axis measures money earned and the horizontal axis measures time worked, each employee\'s hourly pay rate equals\n$$\\frac{\\text{Money Earned}}{\\text{Time Worked}},$$\nwhich is the slope of the line segment from the origin $(0, 0)$ to that employee\'s point.\nReading the grid coordinates in unit steps from $(0, 0)$:\n$$A = (2, 7), \\quad B = (4, 4), \\quad C = (6, 9), \\quad D = (8, 2), \\quad E = (10, 6).$$\nTheir slopes are $\\frac{7}{2} = 3.5$, $1$, $1.5$, $0.25$, and $0.6$, respectively. Point $A$ lies on the steepest ray from the origin, so Employee $A$ earned the most money per hour.',
          rubric: [
            { code: 'M4', text: 'Recognizes that hourly pay equals the slope from $(0, 0)$ to each point and compares slopes.' },
            { code: 'A2', text: 'Identifies $A$ as having the steepest slope, option A.' }
          ]
        },
        {
          label: '13',
          marks: 6,
          prompt:
            'If the equation $(x + 2)(x + t) = x^2 + bx + 12$ is true for all real numbers $x$, the value of $b$ is\n\nA. $6$\nB. $8$\nC. $10$\nD. $12$\nE. $14$',
          answer: 'B. $8$',
          principle: 'Expand the factored quadratic and equate corresponding coefficients of like powers of $x$.',
          solution:
            'Expanding the left-hand side gives\n$$(x + 2)(x + t) = x^2 + (2 + t)x + 2t.$$\nSince this equals $x^2 + bx + 12$ for all real $x$, matching the constant terms and $x$-coefficients gives\n$$2t = 12 \\implies t = 6,$$\nand therefore\n$$b = 2 + t = 2 + 6 = 8.$$',
          rubric: [
            { code: 'M4', text: 'Equates constant terms $2t = 12$ to obtain $t = 6$.' },
            { code: 'A2', text: 'Computes $b = 2 + 6 = 8$, option B.' }
          ]
        },
        {
          label: '14',
          marks: 6,
          prompt:
            'A substance doubles its volume every minute. At 9:00 a.m. a small amount of the substance was placed in a large empty container. At 9:20 a.m. the same day, the container became full. At what time was the container one-quarter full?\n\nA. 9:15 a.m.\nB. 9:10 a.m.\nC. 9:16 a.m.\nD. 9:04 a.m.\nE. 9:18 a.m.',
          answer: 'E. 9:18 a.m.',
          principle: 'Work backward from the full state: if volume doubles every minute forward, it halves every minute backward.',
          solution:
            'Because the volume doubles each minute going forward, it halves each minute going backward:\n- At 9:20 a.m., the container is full ($1$).\n- At 9:19 a.m., it was half full ($\\frac{1}{2}$).\n- At 9:18 a.m., it was one-quarter full ($\\frac{1}{4}$).',
          rubric: [
            { code: 'M4', text: 'Reverses the doubling process to halve the volume each minute backward from 9:20 a.m.' },
            { code: 'A2', text: 'Finds 9:18 a.m., option E.' }
          ]
        },
        {
          label: '15',
          marks: 6,
          prompt:
            'The hundreds digit of the *smallest* five-digit positive integer that is divisible by $12$, $13$, $14$ and $15$ is\n\nA. $2$\nB. $7$\nC. $1$\nD. $9$\nE. $3$',
          answer: 'D. $9$',
          principle: 'A positive integer is divisible by several numbers if and only if it is a multiple of their least common multiple (LCM).',
          solution:
            'Find the prime factorizations:\n$$12 = 2^2 \\times 3, \\quad 13 = 13, \\quad 14 = 2 \\times 7, \\quad 15 = 3 \\times 5.$$\nTaking the highest power of each prime gives the least common multiple:\n$$\\text{lcm}(12, 13, 14, 15) = 2^2 \\times 3 \\times 5 \\times 7 \\times 13 = 5460.$$\nThe smallest five-digit positive multiple of $5460$ (at least $10\\,000$) is\n$$2 \\times 5460 = 10\\,920,$$\nwhose hundreds digit is $9$.',
          rubric: [
            { code: 'M4', text: 'Computes $\\text{lcm}(12, 13, 14, 15) = 5460$.' },
            { code: 'A2', text: 'Finds $2 \\times 5460 = 10\\,920$ and extracts the hundreds digit $9$, option D.' }
          ]
        },
        {
          label: '16',
          marks: 6,
          prompt:
            'In the diagram, $ABCD$ is a rectangle with area $224$. Semi-circles with diameters $AD$ and $BC$ are drawn inside the rectangle. If the shortest distance between the semi-circles is $2$, the area of the shaded region is closest to\n\nA. $50$\nB. $55$\nC. $60$\nD. $65$\nE. $70$',
          figures: [
            {
              src: '/papers/cemc-fermat-2025/fig-16.webp',
              alt: 'Rectangle ABCD containing two unshaded congruent semi-circles with diameters AD and BC facing inward, with the region between them shaded.',
              caption: 'Rectangle ABCD with two interior semi-circles and shaded middle region.'
            }
          ],
          answer: 'E. $70$',
          principle: 'Express the rectangle\'s width and height in terms of the common semi-circle radius $r$, solve for $r$ from the rectangle\'s area, then subtract one full circle\'s area.',
          solution:
            'Let $r$ be the common radius of the two semi-circles, so $AD = BC = 2r$.\nThe line joining the midpoints of $AD$ and $BC$ passes through both centres and meets the two semi-circles at distance $r$ from each side, leaving the shortest gap of $2$ between them. Hence the width of the rectangle is\n$$AB = r + 2 + r = 2r + 2.$$\nUsing the rectangle\'s area $224$:\n$$2r(2r + 2) = 224 \\implies 4r^2 + 4r = 224 \\implies r^2 + r - 56 = 0 \\implies (r + 8)(r - 7) = 0.$$\nSince $r > 0$, we get $r = 7$.\nThe two semi-circles together form one full circle of radius $7$, so the shaded area is\n$$224 - \\pi(7^2) = 224 - 49\\pi \\approx 224 - 153.94 = 70.06,$$\nwhich is closest to $70$.',
          rubric: [
            { code: 'M2', text: 'Writes rectangle dimensions $2r$ by $2r + 2$ and sets $2r(2r + 2) = 224$.' },
            { code: 'M2', text: 'Solves the quadratic to find $r = 7$.' },
            { code: 'A2', text: 'Computes $224 - 49\\pi \\approx 70.06$, closest to $70$, option E.' }
          ]
        },
        {
          label: '17',
          marks: 6,
          prompt:
            'A tennis tournament starts with $8$ players. Francesca is equally likely to play against any of the other $7$ players in her first match. If Francesca plays against Dominique or Estella, the probability that Francesca wins is $\\frac{2}{5}$. If Francesca plays against any of the other $5$ players, the probability that she wins is $\\frac{3}{4}$. What is the probability that Francesca wins her first match?\n\nA. $\\frac{23}{50}$\nB. $\\frac{29}{50}$\nC. $\\frac{3}{5}$\nD. $\\frac{13}{20}$\nE. $\\frac{2}{3}$',
          answer: 'D. $\\frac{13}{20}$',
          principle: 'Apply the Law of Total Probability across the two mutually exclusive opponent groups.',
          solution:
            'Francesca plays each of the other $7$ players with probability $\\frac{1}{7}$:\n- Probability of playing Dominique or Estella and winning:\n  $$\\frac{2}{7} \\times \\frac{2}{5} = \\frac{4}{35}.$$\n- Probability of playing one of the other $5$ players and winning:\n  $$\\frac{5}{7} \\times \\frac{3}{4} = \\frac{15}{28}.$$\nAdding these two disjoint cases gives the total probability that Francesca wins:\n$$\\frac{4}{35} + \\frac{15}{28} = \\frac{16}{140} + \\frac{75}{140} = \\frac{91}{140} = \\frac{13}{20}.$$',
          rubric: [
            { code: 'M4', text: 'Sets up $\\frac{2}{7} \\cdot \\frac{2}{5} + \\frac{5}{7} \\cdot \\frac{3}{4}$ using the Law of Total Probability.' },
            { code: 'A2', text: 'Simplifies $\\frac{91}{140} = \\frac{13}{20}$, option D.' }
          ]
        },
        {
          label: '18',
          marks: 6,
          prompt:
            'In a $2000\\text{ m}$ race, Arturo, Morgan and Henri run at constant but different speeds. Arturo finishes $200\\text{ m}$ ahead of Morgan and $290\\text{ m}$ ahead of Henri. If Morgan and Henri each continue at their same speeds, how far ahead of Henri will Morgan finish?\n\nA. $90\\text{ m}$\nB. $100\\text{ m}$\nC. $110\\text{ m}$\nD. $120\\text{ m}$\nE. $130\\text{ m}$',
          answer: 'B. $100\\text{ m}$',
          principle: 'At constant speeds, the ratio of distances covered by two runners in any time interval equals the ratio of their speeds.',
          solution:
            'When Arturo finishes the $2000\\text{ m}$ race, Morgan has run $2000 - 200 = 1800\\text{ m}$ and Henri has run $2000 - 290 = 1710\\text{ m}$.\nThus the ratio of Henri\'s speed to Morgan\'s speed is\n$$\\frac{v_H}{v_M} = \\frac{1710}{1800} = \\frac{19}{20}.$$\nWhen Morgan completes the full $2000\\text{ m}$, Henri has covered\n$$\\frac{19}{20} \\times 2000 = 1900\\text{ m}.$$\nHence Morgan finishes $2000 - 1900 = 100\\text{ m}$ ahead of Henri.',
          rubric: [
            { code: 'M4', text: 'Finds the speed ratio $\\frac{v_H}{v_M} = \\frac{1710}{1800} = \\frac{19}{20}$ and scales to Morgan\'s $2000\\text{ m}$ finish.' },
            { code: 'A2', text: 'Computes $2000 - 1900 = 100\\text{ m}$, option B.' }
          ]
        },
        {
          label: '19',
          marks: 6,
          prompt:
            'The lines with equations $y = mx + 7$, $y = 2$, $x = 0$, and $y = 0$ form a trapezoid with area $3$. If $m > 0$, what is the value of $m$?\n\nA. $2$\nB. $3$\nC. $4$\nD. $5$\nE. $8$',
          answer: 'C. $4$',
          principle: 'Find the $x$-intercepts of the slanted line with the two horizontal lines $y = 0$ and $y = 2$, then use the trapezoid area formula.',
          solution:
            'Because $m > 0$, the line $y = mx + 7$ intersects $y = 0$ and $y = 2$ at negative $x$-coordinates:\n- At $y = 0$: $0 = mx + 7 \\implies x = -\\frac{7}{m}$, so the bottom base along $y = 0$ from $x = -\\frac{7}{m}$ to $x = 0$ has length $\\frac{7}{m}$.\n- At $y = 2$: $2 = mx + 7 \\implies x = -\\frac{5}{m}$, so the top base along $y = 2$ from $x = -\\frac{5}{m}$ to $x = 0$ has length $\\frac{5}{m}$.\n\nThe height between $y = 0$ and $y = 2$ is $2$, so the area of the trapezoid is\n$$\\frac{1}{2} \\left(\\frac{7}{m} + \\frac{5}{m}\\right) \\cdot 2 = \\frac{12}{m}.$$\nSetting this equal to $3$ gives\n$$\\frac{12}{m} = 3 \\implies m = 4.$$',
          rubric: [
            { code: 'M4', text: 'Determines base lengths $\\frac{7}{m}$ and $\\frac{5}{m}$ and height $2$, giving area $\\frac{12}{m}$.' },
            { code: 'A2', text: 'Solves $\\frac{12}{m} = 3$ for $m = 4$, option C.' }
          ]
        },
        {
          label: '20',
          marks: 6,
          prompt:
            'Some integers $m$ with $1 < m < 100\\,000$ have the property that the product of the digits of $m$ is equal to $200$. If $N$ is the number of such integers $m$, what is the integer formed by the rightmost two digits of $N$?\n\nA. $17$\nB. $27$\nC. $37$\nD. $47$\nE. $57$',
          answer: 'B. $27$',
          principle: 'Factor $200 = 2^3 \\cdot 5^2$: every valid number must contain two $5$s and remaining digits whose product is $8$; count by number of digits ($3$, $4$, or $5$).',
          solution:
            'Since $200 = 2^3 \\times 5^2$ and $5$ is the only nonzero digit divisible by $5$, every valid $m$ contains **exactly two** digits equal to $5$, and the remaining digits have product $8$. Note that $m$ has at most $5$ digits (since $m < 100\\,000$) and at least $3$ digits (since $9 \\times 9 = 81 < 200$):\n- **$3$-digit integers:** The digits must be a permutation of $\\{5, 5, 8\\}$, giving\n  $$\\frac{3!}{2!} = 3\\text{ integers}.$$\n- **$4$-digit integers:** Two digits are $5$, and the remaining two digits multiply to $8$, so they are either $\\{1, 8\\}$ or $\\{2, 4\\}$. Choosing $\\binom{4}{2} = 6$ positions for the two $5$s and $2$ orders for the remaining pair in each case gives\n  $$6 \\times 2 + 6 \\times 2 = 24\\text{ integers}.$$\n- **$5$-digit integers:** Two digits are $5$ ($\\binom{5}{2} = 10$ placements), and the remaining three digits multiply to $8$, which can be:\n  - $\\{1, 1, 8\\}$: $3$ permutations;\n  - $\\{1, 2, 4\\}$: $6$ permutations;\n  - $\\{2, 2, 2\\}$: $1$ permutation.\n  Thus there are $10 \\times (3 + 6 + 1) = 100$ five-digit integers.\n\nIn total, $N = 3 + 24 + 100 = 127$, whose rightmost two digits form $27$.',
          rubric: [
            { code: 'M2', text: 'Deduces every valid $m$ has two $5$s and remaining digits multiplying to $8$, with $3, 4,$ or $5$ digits.' },
            { code: 'M2', text: 'Counts $3$-digit ($3$), $4$-digit ($24$), and $5$-digit ($100$) cases accurately.' },
            { code: 'A2', text: 'Sums $N = 127$ and extracts the rightmost two digits $27$, option B.' }
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
            'The area of a right-angled triangle is $54\\text{ cm}^2$. The side lengths of the triangle are $a\\text{ cm}$, $b\\text{ cm}$, and $c\\text{ cm}$, where $a$, $b$ and $c$ are positive integers with $a < b < c$. What is the value of $c$?',
          answer: '$15$',
          principle: 'Since the hypotenuse $c$ is the longest side, $a$ and $b$ are the legs, so $ab = 2 \\times \\text{Area}$ and $a^2 + b^2 = c^2$.',
          solution:
            'Because $a < b < c$, the hypotenuse has length $c\\text{ cm}$ and the legs have lengths $a\\text{ cm}$ and $b\\text{ cm}$.\nFrom the area of $54\\text{ cm}^2$:\n$$\\frac{1}{2}ab = 54 \\implies ab = 108.$$\nListing all positive integer factor pairs $(a, b)$ of $108$ with $a < b$ and testing $c = \\sqrt{a^2 + b^2}$:\n- $(1, 108)$: $1^2 + 108^2 = 11665$ (not a square)\n- $(2, 54)$: $2^2 + 54^2 = 2920$ (not a square)\n- $(3, 36)$: $3^2 + 36^2 = 1305$ (not a square)\n- $(4, 27)$: $4^2 + 27^2 = 745$ (not a square)\n- $(6, 18)$: $6^2 + 18^2 = 360$ (not a square)\n- $(9, 12)$: $9^2 + 12^2 = 81 + 144 = 225 = 15^2$.\n\nThe unique integer solution is $(a, b, c) = (9, 12, 15)$, so $c = 15$.',
          rubric: [
            { code: 'M4', text: 'Uses area $= \\frac{1}{2}ab = 54$ to obtain $ab = 108$ and enumerates the six factor pairs with $a < b$.' },
            { code: 'M2', text: 'Tests $a^2 + b^2$ to isolate the unique Pythagorean triple $(9, 12, 15)$.' },
            { code: 'A2', text: 'Reports $c = 15$.' }
          ]
        },
        {
          label: '22',
          marks: 8,
          prompt:
            'The triple $(x, y, z)$ of integers satisfies the following system of equations:\n$$\\begin{aligned}\n2^x + 2^y + 3^{z-1} &= 2259 \\\\\n2^{x+y} + 3^z &= 7073 \\\\\n2^x + 2^y + 3^z &= 6633\n\\end{aligned}$$\nIf $P$ is equal to the product $xyz$, what is the integer formed by the rightmost two digits of $P$?',
          answer: '$44$',
          principle: 'Substitute $A = 2^x$, $B = 2^y$, and $C = 3^z$ to turn the exponential system into polynomial equations.',
          solution:
            'Let $A = 2^x$, $B = 2^y$, and $C = 3^z$. The system becomes\n$$A + B + \\frac{1}{3}C = 2259, \\qquad AB + C = 7073, \\qquad A + B + C = 6633.$$\nSubtracting the first equation from the third eliminates $A + B$:\n$$\\frac{2}{3}C = 6633 - 2259 = 4374 \\implies C = \\frac{3}{2} \\times 4374 = 6561.$$\nSince $3^8 = 6561$, we obtain $z = 8$.\nSubstituting $C = 6561$ into the remaining two equations gives\n$$A + B = 6633 - 6561 = 72, \\qquad AB = 7073 - 6561 = 512.$$\nHence $A$ and $B$ are the roots of $t^2 - 72t + 512 = (t - 64)(t - 8) = 0$, so $\\{A, B\\} = \\{8, 64\\} = \\{2^3, 2^6\\}$.\nRegardless of order, $\\{x, y\\} = \\{3, 6\\}$, and therefore\n$$P = xyz = 3 \\times 6 \\times 8 = 144.$$\nThe rightmost two digits of $P$ form $44$.',
          rubric: [
            { code: 'M3', text: 'Substitutes $A = 2^x$, $B = 2^y$, $C = 3^z$ and solves $C = 6561 \\implies z = 8$.' },
            { code: 'M3', text: 'Solves $A + B = 72$ and $AB = 512$ to get $\\{A, B\\} = \\{8, 64\\}$ and $\\{x, y\\} = \\{3, 6\\}$.' },
            { code: 'A2', text: 'Computes $P = 144$ and extracts the rightmost two digits $44$.' }
          ]
        },
        {
          label: '23',
          marks: 8,
          prompt:
            'When two ants work together they can build an anthill in $24$ minutes. When the bigger ant works alone, an anthill can be built in $14$ minutes less than when the smaller ant works alone. How many minutes does it take the smaller ant to build an anthill when working alone?',
          answer: '$56$',
          principle: 'Add the individual work rates (anthills per minute) to equal the combined work rate.',
          solution:
            'Let $y$ be the time in minutes for the smaller ant to build an anthill alone, so the bigger ant takes $y - 14$ minutes alone (with $y > 14$).\nTheir combined rate is $\\frac{1}{24}$ anthills per minute:\n$$\\frac{1}{y - 14} + \\frac{1}{y} = \\frac{1}{24}.$$\nMultiplying through by $24y(y - 14)$ gives\n$$24y + 24(y - 14) = y(y - 14) \\implies 48y - 336 = y^2 - 14y \\implies y^2 - 62y + 336 = 0.$$\nFactoring yields\n$$(y - 56)(y - 6) = 0.$$\nSince $y > 14$ (so that $y - 14 > 0$), we reject $y = 6$ and conclude $y = 56$.',
          rubric: [
            { code: 'M4', text: 'Sets up the work-rate equation $\\frac{1}{y - 14} + \\frac{1}{y} = \\frac{1}{24}$.' },
            { code: 'M2', text: 'Rearranges to $y^2 - 62y + 336 = (y - 56)(y - 6) = 0$.' },
            { code: 'A2', text: 'Selects $y = 56$ since $y > 14$.' }
          ]
        },
        {
          label: '24',
          marks: 8,
          prompt:
            'Suppose that $f(x) = x^4 + px^3 + qx^2 + rx + s$ for some real numbers $p$, $q$, $r$, $s$. In addition, $f(1) = 59$, $f(2) = 118$ and $f(3) = 177$. If $T = f(9) + f(-5)$, what is the sum of the digits of the integer equal to $T$?',
          answer: '$17$',
          principle: 'Consider the auxiliary polynomial $h(x) = f(x) - 59x$, which has roots $1, 2, 3$ and matches the degree and leading coefficient of $f(x)$.',
          solution:
            'Notice that $59 \\times 1 = 59$, $59 \\times 2 = 118$, and $59 \\times 3 = 177$.\nDefine the monic degree-$4$ polynomial\n$$h(x) = f(x) - 59x.$$\nBecause $h(1) = h(2) = h(3) = 0$ and $h$ is monic of degree $4$, there exists a real number $a$ such that\n$$h(x) = (x - 1)(x - 2)(x - 3)(x - a).$$\nThus $f(x) = 59x + (x - 1)(x - 2)(x - 3)(x - a)$. Evaluating at $x = 9$ and $x = -5$:\n$$\\begin{aligned}\nf(9) &= 59(9) + (8)(7)(6)(9 - a) = 531 + 336(9 - a), \\\\\nf(-5) &= 59(-5) + (-6)(-7)(-8)(-5 - a) = -295 + 336(5 + a).\n\\end{aligned}$$\nAdding these eliminates $a$:\n$$T = f(9) + f(-5) = (531 - 295) + 336(9 - a + 5 + a) = 236 + 336(14) = 236 + 4704 = 4940.$$\nThe sum of the digits of $T = 4940$ is $4 + 9 + 4 + 0 = 17$.',
          rubric: [
            { code: 'M4', text: 'Introduces $h(x) = f(x) - 59x = (x - 1)(x - 2)(x - 3)(x - a)$.' },
            { code: 'M2', text: 'Evaluates $f(9) + f(-5)$ so the parameter $a$ cancels, obtaining $T = 4940$.' },
            { code: 'A2', text: 'Sums the digits $4 + 9 + 4 + 0 = 17$.' }
          ]
        },
        {
          label: '25',
          marks: 8,
          prompt:
            'A sequence $a_1, a_2, \\dots$ has $a_1 = 1$, $a_2 = 3$ and $a_n = -a_{n-1} + a_{n-2}$ for each integer $n \\ge 3$. For example, $a_3 = -a_2 + a_1 = -2$. How many of the $2025$ integers $(a_1)^2, (a_2)^2, (a_3)^2, \\dots, (a_{2025})^2$ are divisible by $2025$?',
          answer: '$34$',
          principle: 'Since $2025 = 45^2$, $(a_k)^2$ is divisible by $2025$ if and only if $45 \\mid a_k$, i.e., $5 \\mid a_k$ and $9 \\mid a_k$; determine the period of divisibility modulo $5$ and modulo $9$.',
          solution:
            'Because $2025 = 45^2$, $(a_k)^2$ is divisible by $2025$ if and only if $45 \\mid a_k$, which holds if and only if both $5 \\mid a_k$ and $9 \\mid a_k$.\nCompute the first several terms of the sequence:\n$$1,\\ 3,\\ -2,\\ 5,\\ -7,\\ 12,\\ -19,\\ 31,\\ -50,\\ 81,\\ \\dots$$\nObserve the recurrence gives, for any consecutive terms $a_n, a_{n+1}$,\n$$a_{n+5} = 5a_{n+1} - 3a_n, \\qquad a_{n+12} = -144a_{n+1} + 89a_n.$$\nNotice also that no two terms at distance $1$ or $2$ can both be divisible by $5$ (or by $3$), because any two consecutive multiples of $p$ would force every term in the sequence to be divisible by $p$, contradicting $a_1 = 1$.\n- **Divisibility by $5$:** Since $a_4 = 5$ is divisible by $5$ and $a_{n+5} \\equiv -3a_n \\pmod{5}$ while no two multiples of $5$ lie at distance $1$ or $2$, we have\n  $$5 \\mid a_k \\iff k \\equiv 4 \\pmod{5}.$$\n- **Divisibility by $9$:** Similarly, $3 \\mid a_k$ occurs every $4$ terms (starting at $a_2 = 3$, so at $k \\equiv 2 \\pmod{4}$). Furthermore, $a_{10} = 81$ is divisible by $9$, and $a_{n+12} = -144a_{n+1} + 89a_n \\equiv -a_n \\pmod{9}$ since $9 \\mid 144$ and $89 \\equiv -1 \\pmod{9}$. Neither $a_{n+4} = -3a_{n+1} + 2a_n$ nor $a_{n+8} = -21a_{n+1} + 13a_n$ can be divisible by $9$ when $9 \\mid a_n$ (that would force $3 \\mid a_{n+1}$ as well as $3 \\mid a_n$, making all terms divisible by $3$). Therefore,\n  $$9 \\mid a_k \\iff k \\equiv 10 \\pmod{12}.$$\n\nBy the Chinese Remainder Theorem, $k \\equiv 4 \\pmod{5}$ and $k \\equiv 10 \\pmod{12}$ combine uniquely modulo $\\text{lcm}(5, 12) = 60$ to give\n$$k \\equiv 34 \\pmod{60}.$$\nWe count integers $m \\ge 0$ satisfying $1 \\le 60m + 34 \\le 2025$:\n$$60m \\le 1991 \\implies m \\le \\left\\lfloor \\frac{1991}{60} \\right\\rfloor = 33.$$\nThus $m \\in \\{0, 1, 2, \\dots, 33\\}$, giving $34$ values of $k$.',
          rubric: [
            { code: 'M2', text: 'Reduces $2025 \\mid a_k^2$ to $5 \\mid a_k$ and $9 \\mid a_k$.' },
            { code: 'M2', text: 'Proves $5 \\mid a_k \\iff k \\equiv 4 \\pmod{5}$ and $9 \\mid a_k \\iff k \\equiv 10 \\pmod{12}$.' },
            { code: 'M2', text: 'Combines the congruences to $k \\equiv 34 \\pmod{60}$.' },
            { code: 'A2', text: 'Counts $0 \\le m \\le 33$ for $60m + 34 \\le 2025$, obtaining $34$.' }
          ]
        }
      ]
    }
  ]
};
