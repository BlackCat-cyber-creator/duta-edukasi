/**
 * Paket Soal Terstruktur: AMC 8 — 2026 (25 multiple-choice questions)
 * Sumber: 2026 AMC 8 Problems - AoPS Wiki.pdf (Problem 4 restored from the official 2026 AMC 8 contest).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Sebelas soal bergambar (2, 6, 11, 12, 13, 15, 17, 19, 21, 23, 25)
 * dilengkapi gambar WebP bersih dari berkas sumber PDF.
 */
export default {
  id: 'amc-8-2026',
  slug: 'amc-8-2026',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'AMC 8 2026: 25 complete problems in arithmetic, geometry, counting, probability, and number theory',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp8-bab2-teorema-pythagoras',
    'smp8-bab3-persamaan-pertidaksamaan-linear',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMC 8',
  title: 'AMC 8 \u2014 2026',
  totalMarks: 25,
  instructions:
    'Attempt all 25 multiple-choice questions (1 mark each; total 25 marks; original contest time: 40 minutes; no calculators allowed). Only one of the five choices A, B, C, D, or E is correct for each question. Question 4, omitted in the AoPS Wiki PDF export, is restored from the official 2026 AMC 8 problem set.',
  source: {
    org: 'AMC 8',
    file: '2026 AMC 8 Problems - AoPS Wiki.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple Choice Questions',
      marks: 25,
      stem: 'Choose the one correct answer (A, B, C, D, or E) for each of the 25 questions (1 mark each).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'What is the value of the following expression?\n$$1 + 2 - 3 + 4 + 5 - 6 + 7 + 8 - 9 + 10 + 11 - 12$$\n\nA. $18$\nB. $21$\nC. $24$\nD. $27$\nE. $30$',
          answer: 'A. $18$',
          principle: 'Group consecutive triples of terms with the $+, +, -$ sign pattern to simplify the arithmetic.',
          solution:
            'Group the expression into four triples of consecutive integers:\n$$(1 + 2 - 3) + (4 + 5 - 6) + (7 + 8 - 9) + (10 + 11 - 12).$$\nEvaluating each group gives:\n$$0 + 3 + 6 + 9 = 18.$$',
          rubric: [{ code: 'A1', text: 'Evaluates the grouped sum accurately to obtain $18$, option A.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'In the array shown below, three $3$s are surrounded by $2$s, which are in turn surrounded by a border of $1$s. What is the sum of the numbers in the array?\n\nA. $49$\nB. $51$\nC. $53$\nD. $55$\nE. $57$',
          figures: [
            {
              src: '/papers/amc-8-2026/fig-2.webp',
              alt: 'A 5 by 7 rectangular grid of numbers with three 3s in the center, surrounded by a ring of 2s, and an outer border of 1s.',
              caption: 'Rectangular array with concentric rings of $1$s, $2$s, and central $3$s.'
            }
          ],
          answer: 'C. $53$',
          principle: 'Count the frequency of each distinct value in the concentric rectangular layers and compute the weighted sum.',
          solution:
            'Count the occurrences of each digit in the $5 \\times 7$ array ($35$ entries in total):\n- There are $3$ copies of $3$ in the center, contributing $3 \\times 3 = 9$.\n- Surrounding them is a $3 \\times 5$ rectangle minus the $3$ central entries, giving $15 - 3 = 12$ copies of $2$, contributing $12 \\times 2 = 24$.\n- The outer border has $35 - 15 = 20$ copies of $1$, contributing $20 \\times 1 = 20$.\n\nAdding these contributions gives:\n$$9 + 24 + 20 = 53.$$',
          rubric: [{ code: 'A1', text: 'Counts each layer accurately ($20$ ones, $12$ twos, $3$ threes) and finds total $53$, option C.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Haruki has a piece of wire that is $24$ centimeters long. He wants to bend it to form each of the following shapes, one at a time.\n- A regular hexagon with side length $5\\text{ cm}$.\n- A square of area $36\\text{ cm}^2$.\n- A right triangle whose legs are $6$ and $8\\text{ cm}$ long.\n\nWhich of the shapes can Haruki make?\n\nA. Triangle only\nB. Hexagon and square only\nC. Hexagon and triangle only\nD. Square and triangle only\nE. Hexagon, triangle, and square',
          answer: 'D. Square and triangle only',
          principle: 'A wire of length $24\\text{ cm}$ can form a polygon only if its perimeter does not exceed $24\\text{ cm}$; use the Pythagorean theorem for the right triangle.',
          solution:
            'Compute the perimeter required for each shape and compare with the $24\\text{ cm}$ wire:\n- **Regular hexagon** (side $5\\text{ cm}$): perimeter is $6 \\times 5 = 30\\text{ cm} > 24\\text{ cm}$, so it cannot be made.\n- **Square** (area $36\\text{ cm}^2$): side length is $\\sqrt{36} = 6\\text{ cm}$, so perimeter is $4 \\times 6 = 24\\text{ cm}$, which fits exactly.\n- **Right triangle** (legs $6\\text{ cm}$ and $8\\text{ cm}$): by the Pythagorean theorem, the hypotenuse is $\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10\\text{ cm}$, so the perimeter is $6 + 8 + 10 = 24\\text{ cm}$, which also fits exactly.\n\nTherefore, Haruki can make the square and triangle only.',
          rubric: [{ code: 'A1', text: 'Computes all three perimeters ($30$, $24$, $24\\text{ cm}$) and selects option D.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Brynn\'s savings decreased by $20\\%$ in July, then increased by $50\\%$ in August. Brynn\'s savings are now what percent of the original amount?\n\nA. $80$\nB. $90$\nC. $100$\nD. $110$\nE. $120$',
          answer: 'E. $120$',
          principle: 'Multiply successive percentage scale factors rather than adding percentages directly.',
          solution:
            'Let Brynn\'s original savings be $100$ units (or $S$).\n- After a $20\\%$ decrease in July, her savings become $(1 - 0.20) \\times 100 = 80$.\n- After a $50\\%$ increase in August applied to the July amount, her savings become $(1 + 0.50) \\times 80 = 1.5 \\times 80 = 120$.\n\nThus, her savings are now $120\\%$ of the original amount.',
          rubric: [{ code: 'A1', text: 'Multiplies the scale factors $0.8 \\times 1.5 = 1.2$ to get $120\\%$, option E.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Casey went on a road trip that covered $100$ miles, stopping only for a lunch break along the way. The trip took $3$ hours in total and her average speed while driving was $40$ miles per hour. In minutes, how long was the lunch break?\n\nA. $15$\nB. $30$\nC. $40$\nD. $45$\nE. $60$',
          answer: 'B. $30$',
          principle: 'Subtract actual driving time ($\\text{distance} / \\text{driving speed}$) from total elapsed trip time, then convert hours to minutes.',
          solution:
            'Casey\'s driving time for $100$ miles at $40$ miles per hour is:\n$$\\frac{100}{40} = 2.5\\text{ hours}.$$\nSince the entire trip took $3$ hours, the lunch break lasted:\n$$3 - 2.5 = 0.5\\text{ hours} = 0.5 \\times 60 = 30\\text{ minutes}.$$',
          rubric: [{ code: 'A1', text: 'Finds $2.5\\text{ hours}$ driving time and $0.5\\text{ hours} = 30\\text{ minutes}$ break, option B.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Peter lives near a rectangular field that is filled with blackberry bushes. The field is $10$ meters long and $8$ meters wide, and Peter can reach any blackberries that are within $1$ meter of an edge of the field. The portion of the field he can reach is shaded in the figure below. What fraction of the area of the field can Peter reach?\n\nA. $\\frac{1}{6}$\nB. $\\frac{1}{4}$\nC. $\\frac{1}{3}$\nD. $\\frac{3}{8}$\nE. $\\frac{2}{5}$',
          figures: [
            {
              src: '/papers/amc-8-2026/fig-6.webp',
              alt: 'A rectangular field measuring 10 meters by 8 meters with a shaded border strip 1 meter wide around the inside perimeter.',
              caption: 'Rectangular field ($10\\text{ m} \\times 8\\text{ m}$) with a $1\\text{ m}$ shaded border.'
            }
          ],
          answer: 'E. $\\frac{2}{5}$',
          principle: 'Find the area of the outer border strip by subtracting the unshaded inner rectangle from the total rectangle.',
          solution:
            'The total area of the $10\\text{ m} \\times 8\\text{ m}$ field is:\n$$10 \\times 8 = 80\\text{ m}^2.$$\nRemoving a $1\\text{ m}$ strip from all four sides leaves an unshaded inner rectangle of length $10 - 2(1) = 8\\text{ m}$ and width $8 - 2(1) = 6\\text{ m}$, whose area is:\n$$8 \\times 6 = 48\\text{ m}^2.$$\nThus, the shaded area Peter can reach is $80 - 48 = 32\\text{ m}^2$, which is a fraction:\n$$\\frac{32}{80} = \\frac{2}{5}.$$',
          rubric: [{ code: 'A1', text: 'Computes $(80 - 48)/80 = 32/80 = 2/5$, option E.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Mika would like to estimate how far she can ride a new model of electric bike on a fully charged battery. She completed two trips totaling $40$ miles. The first trip used $\\frac{1}{2}$ of the total battery power, while the second trip used $\\frac{3}{10}$ of the total battery power. How many miles can this electric bike go on a fully charged battery?\n\nA. $45$\nB. $48$\nC. $50$\nD. $52$\nE. $55$',
          answer: 'C. $50$',
          principle: 'Distance traveled is proportional to the fraction of total battery power consumed.',
          solution:
            'Add the fractions of total battery power used in the two trips:\n$$\\frac{1}{2} + \\frac{3}{10} = \\frac{5}{10} + \\frac{3}{10} = \\frac{8}{10} = \\frac{4}{5}.$$\nSince $\\frac{4}{5}$ of a full battery covers $40$ miles, a full battery ($1$ unit) covers:\n$$40 \\div \\frac{4}{5} = 40 \\times \\frac{5}{4} = 50\\text{ miles}.$$',
          rubric: [{ code: 'A1', text: 'Combines battery fractions to $4/5$ and divides $40$ by $4/5$ to get $50$, option C.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'A poll asked a number of people if they liked solving mathematics problems. Exactly $74\\%$ answered "yes." What is the fewest possible number of people who could have been asked the question?\n\nA. $10$\nB. $20$\nC. $25$\nD. $50$\nE. $100$',
          answer: 'D. $50$',
          principle: 'Write the exact percentage as a fraction in lowest terms; the smallest possible total count is its reduced denominator.',
          solution:
            'Express $74\\%$ as a simplified fraction:\n$$74\\% = \\frac{74}{100} = \\frac{37}{50}.$$\nBecause $\\gcd(37, 50) = 1$, the fraction $\\frac{37}{50}$ is in lowest terms. For $74\\%$ of $N$ people to be an integer, $N$ must be a positive multiple of $50$, so the fewest possible number of people is $50$ (with $37$ answering "yes").',
          rubric: [{ code: 'A1', text: 'Reduces $74/100$ to $37/50$ and identifies $50$, option D.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'What is the value of this expression?\n$$\\frac{\\sqrt{16\\sqrt{81}}}{\\sqrt{81\\sqrt{16}}}$$\n\nA. $\\frac{4}{9}$\nB. $\\frac{2}{3}$\nC. $1$\nD. $\\frac{3}{2}$\nE. $\\frac{9}{4}$',
          answer: 'B. $\\frac{2}{3}$',
          principle: 'Evaluate nested square roots from the inside out.',
          solution:
            'Compute the inner square roots $\\sqrt{81} = 9$ and $\\sqrt{16} = 4$ first:\n$$\\frac{\\sqrt{16 \\cdot 9}}{\\sqrt{81 \\cdot 4}} = \\frac{\\sqrt{144}}{\\sqrt{324}} = \\frac{12}{18} = \\frac{2}{3}.$$\n(Equivalently, $\\frac{\\sqrt{16} \\cdot \\sqrt{9}}{\\sqrt{81} \\cdot \\sqrt{4}} = \\frac{4 \\cdot 3}{9 \\cdot 2} = \\frac{12}{18} = \\frac{2}{3}$.)',
          rubric: [{ code: 'A1', text: 'Evaluates nested radicals to $12/18 = 2/3$, option B.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Five runners completed the grueling Xmarathon: Luke, Melina, Nico, Olympia, and Pedro.\n- Nico finished $11$ minutes behind Pedro.\n- Olympia finished $2$ minutes ahead of Melina, but $3$ minutes behind Pedro.\n- Olympia finished $6$ minutes ahead of Luke.\n\nWhich runner finished fourth?\n\nA. Luke\nB. Melina\nC. Nico\nD. Olympia\nE. Pedro',
          answer: 'A. Luke',
          principle: 'Assign a reference time of $0$ to one runner (Pedro) and express every other finish time relative to that baseline.',
          solution:
            'Let Pedro\'s finish time be $0$ minutes. Using the given clues:\n- Olympia finished $3$ minutes behind Pedro $\\implies \\text{Olympia} = +3$.\n- Olympia finished $2$ minutes ahead of Melina $\\implies \\text{Melina} = 3 + 2 = +5$.\n- Olympia finished $6$ minutes ahead of Luke $\\implies \\text{Luke} = 3 + 6 = +9$.\n- Nico finished $11$ minutes behind Pedro $\\implies \\text{Nico} = +11$.\n\nOrdering from fastest to slowest gives: Pedro ($0$), Olympia ($+3$), Melina ($+5$), Luke ($+9$), Nico ($+11$). Thus, Luke finished fourth.',
          rubric: [{ code: 'A1', text: 'Orders all five runners correctly and identifies Luke as fourth, option A.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Squares of side length $1, 1, 2, 3,$ and $5$ are arranged to form the rectangle shown below. A curve is drawn by inscribing a quarter circle in each square and joining the quarter circles in order, from shortest to longest. What is the length of the curve?\n\nA. $4\\pi$\nB. $6\\pi$\nC. $\\frac{13}{2}\\pi$\nD. $8\\pi$\nE. $13\\pi$',
          figures: [
            {
              src: '/papers/amc-8-2026/fig-11.webp',
              alt: 'A rectangle tiled by five squares of side lengths 1, 1, 2, 3, and 5 with a continuous spiral made of one quarter-circle arc in each square.',
              caption: 'Fibonacci tiling of squares ($1, 1, 2, 3, 5$) with inscribed quarter-circle spiral.'
            }
          ],
          answer: 'B. $6\\pi$',
          principle: 'A quarter circle inscribed in a square of side $s$ has radius $s$ and arc length $\\frac{1}{4}(2\\pi s) = \\frac{\\pi s}{2}$.',
          solution:
            'Each quarter circle in a square of side length $s$ has radius $r = s$, so its arc length is $\\frac{1}{4}(2\\pi s) = \\frac{\\pi}{2} s$. Summing over the five squares of side lengths $1, 1, 2, 3,$ and $5$ gives:\n$$\\frac{\\pi}{2}(1 + 1 + 2 + 3 + 5) = \\frac{\\pi}{2}(12) = 6\\pi.$$',
          rubric: [{ code: 'A1', text: 'Sums the five quarter-circle arc lengths to $6\\pi$, option B.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'In the figure below, each circle will be filled with a digit from $1$ to $6$. Each digit must appear exactly once. The sum of the digits in neighboring circles is shown in the box between them. What digit must be placed in the top circle?\n\nA. $2$\nB. $3$\nC. $4$\nD. $5$\nE. it is impossible to fill the circles',
          figures: [
            {
              src: '/papers/amc-8-2026/fig-12.webp',
              alt: 'A triangle of six empty circles—three at the corners and three at the midpoints—with boxes between adjacent circles labeled 9, 10, 8, 5, 4, and 6, and a question mark in the top circle.',
              caption: 'Triangle of six circles with pairwise edge sums shown in boxes.'
            }
          ],
          answer: 'D. $5$',
          principle: 'Use difference equations along the sides to express the corner digits in terms of one corner, then test the remaining distinct digits from $1$ to $6$.',
          solution:
            'Let the top, bottom-left, and bottom-right corner circles be $T, L,$ and $R$, and let the midpoint circles between $(T, L)$, $(T, R)$, and $(L, R)$ be $a, b,$ and $c$, respectively. From the given edge sums:\n- $T + a = 9$ and $a + L = 10 \\implies L - T = 1$, so $L = T + 1$.\n- $T + b = 6$ and $b + R = 4 \\implies T - R = 2$, so $R = T - 2$.\n- Checking the bottom edge: $L + c = 8$ and $c + R = 5 \\implies L - R = 3$, which matches $(T + 1) - (T - 2) = 3$.\n\nSince $R \\ge 1$ and $L \\le 6$, we have $T \\in \\{3, 4, 5\\}$:\n- If $T = 3$: $R = 1, L = 4$, giving $b = 6 - 3 = 3 = T$ (duplicate).\n- If $T = 4$: $R = 2, L = 5$, giving $a = 9 - 4 = 5 = L$ (duplicate).\n- If $T = 5$: $R = 3, L = 6$, giving $a = 9 - 5 = 4$, $b = 6 - 5 = 1$, and $c = 8 - 6 = 2$.\n\nThis uses each digit $\\{1, 2, 3, 4, 5, 6\\}$ exactly once. Therefore, the top circle must contain $5$.',
          rubric: [{ code: 'A1', text: 'Solves the edge-sum constraints uniquely to find top digit $5$, option D.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'The figure below shows a tiling of $11$ unit squares. Each row of unit squares is shifted horizontally by half a unit relative to the row above it. A shaded square is drawn on top of the tiling. Each vertex of the shaded square is a vertex of one of the unit squares. In square units, what is the area of the shaded square?\n\nA. $10$\nB. $\\frac{21}{2}$\nC. $\\frac{32}{3}$\nD. $11$\nE. $\\frac{34}{3}$',
          figures: [
            {
              src: '/papers/amc-8-2026/fig-13.webp',
              alt: 'A brick-like tiling of unit squares with each row shifted by half a unit, overlaid with a tilted shaded square whose four vertices are marked at grid corners.',
              caption: 'Shifted unit-square tiling with an inscribed tilted square.'
            }
          ],
          answer: 'A. $10$',
          principle: 'Place a coordinate system on the grid to find the side vector $(\\Delta x, \\Delta y)$ of the tilted square; its area is $\\Delta x^2 + \\Delta y^2$.',
          solution:
            'Set up coordinates so each unit square has side length $1$ and place the bottom vertex of the shaded square at $(0, 0)$.\n- Moving along the bottom row ($y = 0$ to $y = 1$), the right vertex lies $1$ row up and $3$ unit squares to the right of $(0, 0)$, at $(3, 1)$.\n- Check the remaining vertices for a square with side vector $(3, 1)$: rotating $(3, 1)$ by $90^\\circ$ counterclockwise gives $(-1, 3)$, placing the top vertex at $(3 - 1, 1 + 3) = (2, 4)$ and the left vertex at $(-1, 3)$.\n- Verify grid alignment: rows $1$ and $3$ have vertical boundaries at integer $x$-coordinates, while rows $2$ and $4$ are shifted by $0.5$ to half-integer $x$-coordinates. Thus $(0,0), (3,1), (2,4),$ and $(-1,3)$ are all unit-square vertices, matching the diagram.\n\nThe area of the shaded square is the square of its side length:\n$$3^2 + 1^2 = 9 + 1 = 10.$$',
          rubric: [{ code: 'A1', text: 'Identifies side vector $(3, 1)$ and computes area $3^2 + 1^2 = 10$, option A.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Jami picked three equally spaced integer numbers on the number line. The sum of the first and the second numbers is $40$, while the sum of the second and third numbers is $60$. What is the sum of all three numbers?\n\nA. $70$\nB. $75$\nC. $80$\nD. $85$\nE. $90$',
          answer: 'B. $75$',
          principle: 'Represent three equally spaced numbers symmetrically as $m - d, m, m + d$ so the common difference cancels upon addition.',
          solution:
            'Let the three equally spaced integers be $m - d$, $m$, and $m + d$. From the given sums:\n$$(m - d) + m = 2m - d = 40,$$\n$$m + (m + d) = 2m + d = 60.$$\nAdding these two equations eliminates $d$:\n$$4m = 100 \\implies m = 25.$$\n(Here $d = 10$, so the numbers are $15, 25,$ and $35$.) The sum of all three numbers is:\n$$(m - d) + m + (m + d) = 3m = 3 \\times 25 = 75.$$',
          rubric: [{ code: 'A1', text: 'Finds the middle number $m = 25$ and total sum $3m = 75$, option B.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Elijah has a large collection of identical wooden cubes which are white on $4$ faces and gray on $2$ faces that share an edge. He glues some cubes together face-to-face. The figure below shows $2$ cubes being glued together, leaving $3$ gray faces visible. What is the fewest number of cubes that he could glue together to ensure that no gray faces are visible, no matter how he rotates the figure?\n\nA. $4$\nB. $6$\nC. $8$\nD. $9$\nE. $27$',
          figures: [
            {
              src: '/papers/amc-8-2026/fig-15.webp',
              alt: 'Two cubes each having four white faces and two adjacent gray faces shown before and after being glued face-to-face, leaving three gray faces visible.',
              caption: 'Example of gluing two cubes face-to-face.'
            }
          ],
          answer: 'A. $4$',
          principle: 'Compare the total number of gray faces ($2n$ for $n$ cubes) against the maximum number of glued internal face pairs.',
          solution:
            'If $n$ cubes are glued together face-to-face, they have $2n$ gray faces in total, and every gray face must be hidden inside a glued joint.\n- With $n = 1$ cube: $0$ internal joints, so $2$ gray faces are visible.\n- With $n = 2$ cubes: $1$ internal joint covers at most $2$ faces, leaving at least $4 - 2 = 2$ gray faces visible.\n- With $n = 3$ cubes: whether arranged in a straight line or an L-shape, there are only $2$ internal joints covering at most $4$ faces, leaving at least $6 - 4 = 2$ gray faces visible.\n- With $n = 4$ cubes arranged in a $2 \\times 2 \\times 1$ square layer: there are $4$ internal joints ($8$ hidden faces). Orient each cube so its two adjacent gray faces face inward toward its two neighbors in the $2 \\times 2$ ring. Then all $8$ gray faces are hidden internally and every outer face is white.\n\nHence, the fewest number of cubes required is $4$.',
          rubric: [{ code: 'A1', text: 'Proves $n \\le 3$ cannot hide all gray faces and exhibits a $2 \\times 2 \\times 1$ arrangement with $4$ cubes, option A.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Consider all positive four-digit integers consisting of only even digits. What fraction of these integers are divisible by $4$?\n\nA. $\\frac{1}{4}$\nB. $\\frac{2}{5}$\nC. $\\frac{1}{2}$\nD. $\\frac{3}{5}$\nE. $\\frac{3}{4}$',
          answer: 'D. $\\frac{3}{5}$',
          principle: 'Divisibility by $4$ depends solely on the last two digits; when the tens digit is even, $10c$ is already a multiple of $4$.',
          solution:
            'Let the four-digit integer be $\\overline{abcd}$, where $a \\in \\{2, 4, 6, 8\\}$ and $b, c, d \\in \\{0, 2, 4, 6, 8\\}$.\nAn integer is divisible by $4$ if and only if its last two digits $\\overline{cd} = 10c + d$ are divisible by $4$. Because $c$ is even, $c = 2k$ for some integer $k$, so:\n$$10c = 20k \\equiv 0 \\pmod{4}.$$\nThus, $10c + d$ is divisible by $4$ if and only if the units digit $d$ is divisible by $4$. Among the $5$ equally likely choices $\\{0, 2, 4, 6, 8\\}$ for $d$, exactly $3$ choices ($0, 4,$ and $8$) are divisible by $4$.\n\nTherefore, the fraction of such integers divisible by $4$ is $\\frac{3}{5}$.',
          rubric: [{ code: 'A1', text: 'Shows $10c \\equiv 0 \\pmod{4}$ for even $c$ and counts $d \\in \\{0, 4, 8\\}$ out of $5$, giving $3/5$, option D.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Four students are seated in a row. They chat with the people sitting next to them, then rearrange themselves so that they are no longer seated next to any of the same people. How many rearrangements are possible?\n\nA. $2$\nB. $4$\nC. $9$\nD. $12$\nE. $24$',
          figures: [
            {
              src: '/papers/amc-8-2026/fig-17.webp',
              alt: 'Four stick-figure students seated side by side in a row along a bench.',
              caption: 'Four students initially seated in a row.'
            }
          ],
          answer: 'A. $2$',
          principle: 'List permutations of $\\{1, 2, 3, 4\\}$ in which no two consecutive numbers appear adjacent to each other.',
          solution:
            'Label the students $1, 2, 3,$ and $4$ in their original seating order. The forbidden adjacent pairs (in either order) are $\\{1, 2\\}$, $\\{2, 3\\}$, and $\\{3, 4\\}$.\nCheck the possible first positions in a valid rearrangement:\n- If the rearrangement starts with $1$: the next seat must be $3$ or $4$.\n  - Starting $1, 3$: remaining digits $2, 4$ give $1, 3, 2, 4$ (invalid: $3,2$ adjacent) or $1, 3, 4, 2$ (invalid: $3,4$ adjacent).\n  - Starting $1, 4$: remaining digits $2, 3$ cannot avoid placing $2$ next to $3$ or $1$.\n- Similarly, by symmetry, starting with $4$ yields no valid arrangements.\n- If it starts with $2$: the second student must be $4$ (not $1$ or $3$), leaving $1$ and $3$. Only $2, 4, 1, 3$ avoids adjacent consecutive numbers (since $2, 4, 3, 1$ puts $4, 3$ together).\n- Symmetrically, starting with $3$ gives only $3, 1, 4, 2$.\n\nThus, there are exactly $2$ valid rearrangements: $(2, 4, 1, 3)$ and $(3, 1, 4, 2)$.',
          rubric: [{ code: 'A1', text: 'Finds the two valid permutations $(2, 4, 1, 3)$ and $(3, 1, 4, 2)$, option A.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'In how many ways can $60$ be written as the sum of two or more consecutive odd positive integers that are arranged in increasing order?\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$\nE. $5$',
          answer: 'B. $2$',
          principle: 'The sum of $k$ consecutive odd integers equals $k$ times their mean $m$, where $k$ and $m$ must have the same parity.',
          solution:
            'Suppose $60$ is written as the sum of $k \\ge 2$ consecutive odd positive integers with mean $m$. Then $k m = 60$.\n- If $k$ is odd, the middle term is $m$, which must be an odd integer. However, $60 = 2^2 \\cdot 3 \\cdot 5$ has no factor pair $(k, m)$ with $k$ odd and $m$ odd.\n- If $k$ is even, the two middle odd integers are $m - 1$ and $m + 1$, so $m$ must be an even integer.\n- For all terms to be positive, the smallest term $m - (k - 1) \\ge 1$, so $m \\ge k$.\n\nCheck even divisors $k \\ge 2$ of $60$ with $m = 60/k$ even and $m \\ge k$:\n- $k = 2 \\implies m = 30$ (even, $30 \\ge 2$): $29 + 31 = 60$.\n- $k = 4 \\implies m = 15$ (odd, invalid).\n- $k = 6 \\implies m = 10$ (even, $10 \\ge 6$): $5 + 7 + 9 + 11 + 13 + 15 = 60$.\n- $k \\ge 10 \\implies m \\le 6 < k$ (not all positive).\n\nTherefore, there are $2$ such ways.',
          rubric: [{ code: 'A1', text: 'Finds the two valid representations ($29+31$ and $5+7+9+11+13+15$), option B.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Miguel is walking with his dog, Luna. When they reach the entrance to a park, Miguel throws a ball straight ahead and continues to walk at a steady pace. Luna sprints toward the ball, which stops by a tree. As soon as the dog reaches the ball, she brings it back to Miguel. Luna runs $5$ times faster than Miguel walks. What fraction of the distance between the entrance and the tree does Miguel cover by the time Luna brings him the ball?\n\nA. $\\frac{1}{6}$\nB. $\\frac{1}{5}$\nC. $\\frac{1}{4}$\nD. $\\frac{1}{3}$\nE. $\\frac{2}{5}$',
          figures: [
            {
              src: '/papers/amc-8-2026/fig-19.webp',
              alt: 'Diagram showing a park entrance arch on the left, a tree on the right, a short solid arrow for Miguel walking right, and a dashed path for Luna running to the tree and back.',
              caption: 'Paths of Miguel and Luna between the park entrance and the tree.'
            }
          ],
          answer: 'D. $\\frac{1}{3}$',
          principle: 'When Miguel and Luna meet, the sum of the distances they traveled equals twice the distance from the entrance to the tree.',
          solution:
            'Normalize the distance from the park entrance to the tree to $1$ unit, and suppose Miguel covers a fraction $x$ of this distance by the time Luna returns the ball.\n- Miguel walks a distance of $x$.\n- Luna runs $1$ unit to the tree and then $1 - x$ units back to meet Miguel, covering a total distance of $1 + (1 - x) = 2 - x$.\n\nBecause they travel for the same amount of time and Luna runs $5$ times as fast as Miguel walks:\n$$2 - x = 5x \\implies 6x = 2 \\implies x = \\frac{1}{3}.$$',
          rubric: [{ code: 'A1', text: 'Sets up $2 - x = 5x$ and solves for $x = 1/3$, option D.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'The land of Catania uses gold coins and silver coins. Gold coins are $1\\text{ mm}$ thick and silver coins are $3\\text{ mm}$ thick. In how many ways can Taylor make a stack of coins that is $8\\text{ mm}$ tall using any arrangement of gold and silver coins, assuming order matters?\n\nA. $3$\nB. $7$\nC. $10$\nD. $13$\nE. $16$',
          answer: 'D. $13$',
          principle: 'Use a linear recurrence for ordered stacks: a stack of height $n$ ends with either a $1\\text{ mm}$ gold coin or a $3\\text{ mm}$ silver coin.',
          solution:
            'Let $a_n$ be the number of ordered stacks of height $n\\text{ mm}$. Since the top coin has thickness $1\\text{ mm}$ or $3\\text{ mm}$, for $n \\ge 3$ we have:\n$$a_n = a_{n-1} + a_{n-3},$$\nwith initial values $a_0 = 1$, $a_1 = 1$, and $a_2 = 1$. Computing term by term:\n- $a_3 = a_2 + a_0 = 1 + 1 = 2$\n- $a_4 = a_3 + a_1 = 2 + 1 = 3$\n- $a_5 = a_4 + a_2 = 3 + 1 = 4$\n- $a_6 = a_5 + a_3 = 4 + 2 = 6$\n- $a_7 = a_6 + a_4 = 6 + 3 = 9$\n- $a_8 = a_7 + a_5 = 9 + 4 = 13$.\n\nThus, there are $13$ ways to make an $8\\text{ mm}$ stack.',
          rubric: [{ code: 'A1', text: 'Applies $a_n = a_{n-1} + a_{n-3}$ up to $a_8 = 13$, option D.' }]
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Charlotte the spider is walking along a web shaped like a $5$-pointed star, shown in the figure below. The web has $5$ outer points and $5$ inner points. Each time Charlotte reaches a point, she randomly chooses a neighboring point and moves to that point. Charlotte starts at one of the outer points and makes $3$ moves (re-visiting points is allowed). What is the probability she is now at one of the outer points of the star?\n\nA. $\\frac{1}{5}$\nB. $\\frac{1}{4}$\nC. $\\frac{2}{5}$\nD. $\\frac{1}{2}$\nE. $\\frac{3}{5}$',
          figures: [
            {
              src: '/papers/amc-8-2026/fig-21.webp',
              alt: 'A 5-pointed star graph formed by five intersecting segments, with 5 outer vertex dots and 5 inner intersection dots.',
              caption: 'Five-pointed star web with $5$ outer points and $5$ inner points.'
            }
          ],
          answer: 'B. $\\frac{1}{4}$',
          principle: 'Track the probability of being at an outer vs. inner vertex after each step using the degree of each vertex type.',
          solution:
            'Observe the connections in the star graph:\n- Each outer point has $2$ neighbors, both of which are inner points.\n- Each inner point has $4$ neighbors: $2$ outer points and $2$ inner points.\n\nTrace Charlotte\'s position step by step:\n- **Move 1:** Starting at an outer point, Charlotte must move to an inner point (probability $1$).\n- **Move 2:** From an inner point, $2$ of her $4$ equally likely neighbors are outer points and $2$ are inner points. Thus, after $2$ moves, she is at an outer point with probability $\\frac{1}{2}$ and at an inner point with probability $\\frac{1}{2}$.\n- **Move 3:** If she is at an outer point, she moves to an inner point with probability $1$ (contributing $0$ to outer points). If she is at an inner point (probability $\\frac{1}{2}$), she moves to an outer point with probability $\\frac{2}{4} = \\frac{1}{2}$.\n\nTherefore, the probability she ends at an outer point after $3$ moves is:\n$$\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}.$$',
          rubric: [{ code: 'A1', text: 'Computes state probabilities over 3 steps to get $1/4$, option B.' }]
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'The integers from $1$ to $25$ are arbitrarily separated into five groups of $5$ numbers each. The median of each group is identified. Let $M$ equal the median of the five medians. What is the least possible value of $M$?\n\nA. $9$\nB. $10$\nC. $12$\nD. $13$\nE. $14$',
          answer: 'A. $9$',
          principle: 'Count how many elements must be at most $M$ (a lower bound argument), then construct an explicit partition achieving that bound.',
          solution:
            'Order the five group medians as $m_1 \\le m_2 \\le m_3 \\le m_4 \\le m_5$, so $M = m_3$.\nIn each of the three groups whose medians are $m_1, m_2,$ and $m_3$, the median is the $3$rd smallest element of its $5$-element group, so at least $3$ numbers in each of those $3$ groups are less than or equal to $m_3 = M$.\nSince the groups are disjoint, there are at least $3 \\times 3 = 9$ distinct integers from $\\{1, 2, \\dots, 25\\}$ that are $\\le M$. Hence $M \\ge 9$.\n\nTo verify $M = 9$ is achievable, partition $\\{1, \\dots, 25\\}$ into:\n$$\\{1,2,3,24,25\\},\\quad \\{4,5,6,22,23\\},\\quad \\{7,8,9,20,21\\},\\quad \\{10,11,12,18,19\\},\\quad \\{13,14,15,16,17\\}.$$\nTheir medians are $3, 6, 9, 12,$ and $15$, whose median is $M = 9$.',
          rubric: [{ code: 'A1', text: 'Establishes lower bound $M \\ge 9$ and gives an explicit partition achieving $9$, option A.' }]
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Lakshmi has $5$ round coins of diameter $4$ centimeters. She arranges the coins in $2$ rows on a table top, as shown below, and wraps an elastic band tightly around them. In centimeters, what will be the length of the band?\n\nA. $2\\pi + 20$\nB. $\\frac{5}{2}\\pi + 20$\nC. $4\\pi + 20$\nD. $\\frac{9}{2}\\pi + 20$\nE. $5\\pi + 20$',
          figures: [
            {
              src: '/papers/amc-8-2026/fig-23.webp',
              alt: 'Five congruent circular coins arranged with three in the bottom row and two nested above, enclosed tightly by a taut band.',
              caption: 'Five tangent coins of diameter $4\\text{ cm}$ wrapped tightly by an elastic band.'
            }
          ],
          answer: 'C. $4\\pi + 20$',
          principle: 'Decompose a taut band around congruent tangent disks into straight segments equal to the perimeter of the outer centers polygon plus curved arcs totaling one full circle.',
          solution:
            'Each coin has diameter $d = 4\\text{ cm}$ and radius $r = 2\\text{ cm}$. The elastic band consists of straight tangent segments and circular arcs along the four outer coins:\n- **Straight segments:** Each straight segment is parallel and equal in length to the segment joining the centers of the corresponding outer coins.\n  - Bottom segment (spanning $3$ tangent coins): $2d = 8\\text{ cm}$.\n  - Top segment (spanning $2$ tangent coins): $d = 4\\text{ cm}$.\n  - Left and right slanted segments (each between two tangent coins): $d = 4\\text{ cm}$ each.\n  The sum of the straight segments is $8 + 4 + 4 + 4 = 20\\text{ cm}$.\n- **Curved arcs:** As the band winds once around the convex shape, its normal turns through $360^\\circ$, so the curved arcs sum to the circumference of one full coin: $\\pi d = 4\\pi\\text{ cm}$.\n\nThus, the total length of the band is $4\\pi + 20\\text{ cm}$.',
          rubric: [{ code: 'A1', text: 'Computes straight length $20\\text{ cm}$ and arc length $4\\pi\\text{ cm}$ for total $4\\pi + 20$, option C.' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'The notation $n!$ (read "$n$ factorial") is defined as the product of the first $n$ positive integers. (For example, $3! = 1 \\cdot 2 \\cdot 3 = 6$.) Define the superfactorial of a positive number, denoted by $n^!$, to be the product of the factorials of the first $n$ integers. (For example, $3^! = 1! \\cdot 2! \\cdot 3! = 12$.) How many factors of $7$ appear in the prime factorization of $51^!$, the superfactorial of $51$?\n\nA. $147$\nB. $150$\nC. $156$\nD. $168$\nE. $171$',
          answer: 'E. $171$',
          principle: 'Count the multiplicity of each multiple of $7$ (and $7^2 = 49$) across all factorials $1!, 2!, \\dots, 51!$ by swapping the order of summation.',
          solution:
            'In $51^! = 1! \\cdot 2! \\cdots 51!$, each integer $m \\in \\{1, 2, \\dots, 51\\}$ appears in $k!$ for every $k \\ge m$, i.e., exactly $52 - m$ times.\n- Multiples of $7$ up to $51$ are $7, 14, 21, 28, 35, 42,$ and $49$. Each contributes one factor of $7$ per appearance, giving:\n$$(52 - 7) + (52 - 14) + (52 - 21) + (52 - 28) + (52 - 35) + (52 - 42) + (52 - 49)$$\n$$= 45 + 38 + 31 + 24 + 17 + 10 + 3 = 168.$$\n- In addition, $49 = 7^2$ contributes a second factor of $7$ in $49!, 50!,$ and $51!$, adding $52 - 49 = 3$ more factors.\n\nTotal number of factors of $7$: $168 + 3 = 171$.',
          rubric: [{ code: 'A1', text: 'Sums contributions from $7, 14, 21, 28, 35, 42, 49$ including the extra power from $49$ to obtain $171$, option E.' }]
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'In an equiangular hexagon, all interior angles measure $120^\\circ$. An example of such a hexagon with side lengths $2, 3, 1, 3, 2,$ and $2$ is shown below, inscribed in equilateral triangle $ABC$. Consider all equiangular hexagons with positive integer side lengths that can be inscribed in $\\triangle ABC$, with all six vertices on the sides of the triangle. What is the total number of such hexagons? Hexagons that differ only by a rotation or a reflection are considered the same.\n\nA. $4$\nB. $5$\nC. $6$\nD. $7$\nE. $8$',
          figures: [
            {
              src: '/papers/amc-8-2026/fig-25.webp',
              alt: 'An equilateral triangle ABC containing an inscribed shaded equiangular hexagon whose side lengths are labeled 2, 3, 1, 3, 2, and 2 around the perimeter.',
              caption: 'Example equiangular hexagon inscribed in equilateral triangle $ABC$.'
            }
          ],
          answer: 'E. $8$',
          principle: 'Removing three equilateral corner triangles of side lengths $a_1, a_2, a_3$ from equilateral $\\triangle ABC$ leaves an inscribed equiangular hexagon; classify up to symmetry of the triangle.',
          solution:
            'From the example hexagon with sides $2, 3, 1, 3, 2, 2$, each side of equilateral $\\triangle ABC$ has length $1 + 3 + 2 = 6$.\nEvery inscribed equiangular hexagon with all six vertices on the sides of $\\triangle ABC$ has three sides lying along $AB, BC,$ and $CA$, and three sides cutting off equilateral corner triangles at $A, B,$ and $C$ with positive integer side lengths $a_1, a_2,$ and $a_3$. The remaining segments along the sides of $\\triangle ABC$ are:\n$$b_1 = 6 - a_1 - a_2,\\qquad b_2 = 6 - a_2 - a_3,\\qquad b_3 = 6 - a_3 - a_1.$$\nFor all six hexagon sides to be positive integers, we need $a_1, a_2, a_3 \\ge 1$ and $a_1 + a_2 \\le 5$, $a_2 + a_3 \\le 5$, $a_3 + a_1 \\le 5$.\n\nUp to rotation and reflection of $\\triangle ABC$, we may sort $1 \\le a_1 \\le a_2 \\le a_3$; then all pairwise sums are $\\le 5$ if and only if $a_2 + a_3 \\le 5$. Listing all valid triples $(a_1, a_2, a_3)$:\n- $a_1 = 1, a_2 = 1$: $a_3 \\in \\{1, 2, 3, 4\\}$ ($4$ hexagons)\n- $a_1 = 1, a_2 = 2$: $a_3 \\in \\{2, 3\\}$ ($2$ hexagons)\n- $a_1 = 2, a_2 = 2$: $a_3 \\in \\{2, 3\\}$ ($2$ hexagons)\n\nIn total, there are $4 + 2 + 2 = 8$ non-congruent inscribed equiangular hexagons.',
          rubric: [{ code: 'A1', text: 'Parameterizes corner cuts $(a_1, a_2, a_3)$ with $1 \\le a_1 \\le a_2 \\le a_3$ and $a_2 + a_3 \\le 5$, counting $8$ hexagons, option E.' }]
        }
      ]
    }
  ]
};
