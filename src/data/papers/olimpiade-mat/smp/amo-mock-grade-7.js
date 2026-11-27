/**
 * Paket Soal: AMO Mock Test — Grade 7 (Secondary 1, Mock Test Paper Set 1)
 * Sumber: American Mathematics Olympiad / SIMCC Secondary 1 (Grade 7) Mock Test Paper Set 1 (AMO-MOCK-UP-Grade-7.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15, Section B 16–20, dan Section C 21–25) dimuat lengkap.
 * Soal 7, 8, 9, 10, 11, dan 22 dilengkapi ilustrasi crop .webp.
 */
export default {
  id: 'amo-mock-g7',
  slug: 'amo-mock-grade-7',
  subject: 'olimpiade-mat',
  grade: 7,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'AMO Mock Test — Grade 7: arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab2-bilangan-rasional',
    'smp7-bab3-rasio',
    'smp7-bab4-bentuk-aljabar'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMO',
  title: 'AMO Mock Test — Grade 7',
  totalMarks: 100,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; strictly no calculators). Section A has 15 multiple-choice questions worth 3 points each (45 points). Section B has 5 open-ended questions worth 5 points each (25 points). Section C has 5 open-ended questions worth 6 points each (30 points). No points are deducted for unanswered or wrong answers. Figures are provided for Questions 7, 8, 9, 10, 11, and 22.',
  source: {
    org: 'AMO',
    file: 'AMO-MOCK-UP-Grade-7.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section A: Multiple Choice',
      marks: 45,
      stem: 'Choose the one correct answer for each question (15 questions, 3 points each).',
      parts: [
        {
          label: '1',
          marks: 3,
          prompt:
            'Find the possible value(s) of $\\sqrt{(\\sqrt{0.0081} + \\sqrt{0.0001} + \\sqrt{0.81})}$.\n\nA. $1$\nB. $-1$\nC. Both $1$ and $-1$\nD. Decimal numbers do not have square roots\nE. $\\sqrt{0.019}$',
          answer: 'A. $1$',
          principle:
            'Evaluate each inner principal square root as a decimal, sum the results, and take the principal (nonnegative) outer square root.',
          solution:
            'Compute each inner square root:\n$$\\sqrt{0.0081} = 0.09, \\qquad \\sqrt{0.0001} = 0.01, \\qquad \\sqrt{0.81} = 0.9.$$\nAdd the three values inside the outer radical:\n$$0.09 + 0.01 + 0.9 = 1.$$\nBecause the radical symbol $\\sqrt{\\cdot}$ denotes the principal (nonnegative) square root, $\\sqrt{1} = 1$.',
          rubric: [
            { code: 'M2', text: 'Evaluates $\\sqrt{0.0081} = 0.09$, $\\sqrt{0.0001} = 0.01$, and $\\sqrt{0.81} = 0.9$, summing to $1$.' },
            { code: 'A1', text: 'Takes the principal square root $\\sqrt{1} = 1$, option A.' }
          ]
        },
        {
          label: '2',
          marks: 3,
          prompt:
            'If $5$ is added to the numerator and denominator of the fraction $\\frac{6}{11}$, how will the value of the fraction change?\n\nA. No change\nB. Increase\nC. Decrease\nD. It increases by $\\frac{11}{16}$\nE. The fraction evaluates to $1$',
          answer: 'B. Increase',
          principle:
            'Form the new fraction and compare it with $\\frac{6}{11}$ using a common denominator (or note that adding a positive number to both terms of a positive proper fraction brings it closer to $1$).',
          solution:
            'Adding $5$ to both the numerator and the denominator yields $\\frac{6 + 5}{11 + 5} = \\frac{11}{16}$.\nCompare the two fractions using the common denominator $11 \\times 16 = 176$:\n$$\\frac{6}{11} = \\frac{96}{176}, \\qquad \\frac{11}{16} = \\frac{121}{176}.$$\nSince $\\frac{121}{176} > \\frac{96}{176}$, the value increases (by $\\frac{25}{176}$, not $\\frac{11}{16}$).',
          rubric: [
            { code: 'M2', text: 'Forms $\\frac{11}{16}$ and compares it with $\\frac{6}{11}$ via a common denominator.' },
            { code: 'A1', text: 'Concludes the value increases, option B.' }
          ]
        },
        {
          label: '3',
          marks: 3,
          prompt:
            'If a mother makes $x$ cakes in $2$ hours and $y$ pizzas in $3$ hours, how many cakes and pizzas altogether does she make in $6$ hours? Assume she is making both together and that she works just as fast as if she made them separately.\n\nA. $6\\left(\\frac{x}{2} + \\frac{y}{3}\\right)$\nB. $6\\left(\\frac{y}{2} + \\frac{x}{3}\\right)$\nC. $6(2x + 3y)$\nD. $6(3x + 2y)$\nE. $30$',
          answer: 'A. $6\\left(\\frac{x}{2} + \\frac{y}{3}\\right)$',
          principle:
            'Find the hourly production rate of each item, add the rates, and multiply by $6$ hours.',
          solution:
            'Her hourly rate for cakes is $\\frac{x}{2}$ cakes per hour, and her hourly rate for pizzas is $\\frac{y}{3}$ pizzas per hour.\nWorking at both simultaneously for $6$ hours produces:\n$$6\\left(\\frac{x}{2} + \\frac{y}{3}\\right)\\text{ items altogether}.$$',
          rubric: [
            { code: 'M2', text: 'Expresses the hourly rates as $\\frac{x}{2}$ cakes/hr and $\\frac{y}{3}$ pizzas/hr.' },
            { code: 'A1', text: 'Multiplies the combined rate by $6$ to obtain $6\\left(\\frac{x}{2} + \\frac{y}{3}\\right)$, option A.' }
          ]
        },
        {
          label: '4',
          marks: 3,
          prompt:
            'Sasha wants to fit an image into a box on her computer screen. Her original image was $1\\frac{1}{2}$ inches wide and $2\\frac{1}{4}$ inches tall. Her computer screen box is $4$ inches wide. She needs to adjust the box on her computer screen. How tall does the computer screen box need to be for her to fit the image exactly and snugly into the box, without squishing or stretching the image? The choices shown are in inches.\n\nA. $\\frac{9}{32}$\nB. $\\frac{27}{32}$\nC. $6$\nD. $4\\frac{3}{4}$\nE. $2\\frac{1}{2}$',
          answer: 'C. $6$',
          principle:
            'Preserve the aspect ratio (height-to-width ratio) of the original image when scaling the width to $4$ inches.',
          solution:
            'Convert the original dimensions to improper fractions:\n$$\\text{width} = 1\\frac{1}{2} = \\frac{3}{2}\\text{ in}, \\qquad \\text{height} = 2\\frac{1}{4} = \\frac{9}{4}\\text{ in}.$$\nTo avoid distortion, the ratio of height to width must stay constant:\n$$\\frac{h}{4} = \\frac{9/4}{3/2} = \\frac{9}{4} \\times \\frac{2}{3} = \\frac{3}{2}.$$\nSolving for $h$ gives:\n$$h = 4 \\times \\frac{3}{2} = 6\\text{ inches}.$$',
          rubric: [
            { code: 'M2', text: 'Sets up the aspect-ratio proportion $\\frac{h}{4} = \\frac{9/4}{3/2} = \\frac{3}{2}$.' },
            { code: 'A1', text: 'Computes $h = 6$ inches, option C.' }
          ]
        },
        {
          label: '5',
          marks: 3,
          prompt:
            'I have a set of four numbers $P, Q, R, S$ in ascending order. The average of $P, Q,$ and $R$ is $22$, and the average of $Q, R,$ and $S$ is $24$. The largest number is $27$. Then, the smallest number in this set:\n\nA. is prime\nB. is a multiple of $9$\nC. is a multiple of $11$\nD. is a multiple of $7$\nE. cannot be determined with this information',
          answer: 'D. is a multiple of $7$',
          principle:
            'Convert each three-number average into a sum and subtract the two sums to eliminate $Q + R$.',
          solution:
            'From the given averages:\n$$P + Q + R = 3 \\times 22 = 66,$$\n$$Q + R + S = 3 \\times 24 = 72.$$\nSubtracting the first equation from the second cancels $Q + R$:\n$$S - P = 72 - 66 = 6.$$\nBecause the numbers are in ascending order, $S = 27$ is the largest number and $P$ is the smallest:\n$$P = 27 - 6 = 21 = 3 \\times 7,$$\nwhich is a multiple of $7$ (and not prime, nor a multiple of $9$ or $11$).',
          rubric: [
            { code: 'M2', text: 'Finds $P + Q + R = 66$ and $Q + R + S = 72$ to get $S - P = 6$.' },
            { code: 'A1', text: 'Determines $P = 21$, a multiple of $7$, option D.' }
          ]
        },
        {
          label: '6',
          marks: 3,
          prompt:
            'The difference in the place values of the numeral $7$ in the largest and the smallest numbers formed using $3, 4, 5, 6, 7$ (each digit is used once and exactly once) is\n\nA. $69,993$\nB. $41,976$\nC. $76,536$\nD. $9,999$\nE. $70$',
          answer: 'A. $69,993$',
          principle:
            'Order the digits descending to maximize the $5$-digit number and ascending to minimize it, then subtract the two place values of $7$.',
          solution:
            'Using each of the digits $3, 4, 5, 6, 7$ once:\n- The largest number is $76,543$, in which the digit $7$ is in the ten-thousands place with place value $70,000$.\n- The smallest number is $34,567$, in which the digit $7$ is in the units place with place value $7$.\n\nThe difference in the place values of $7$ is:\n$$70,000 - 7 = 69,993.$$',
          rubric: [
            { code: 'M2', text: 'Identifies the largest number $76,543$ (place value $70,000$) and smallest $34,567$ (place value $7$).' },
            { code: 'A1', text: 'Computes $70,000 - 7 = 69,993$, option A.' }
          ]
        },
        {
          label: '7',
          marks: 3,
          prompt:
            'Assume that all sections within each of the given shapes are the same size. Consider only the area represented by the flower, the circle, etc. without including any surrounding area around it. Which fraction below represents the fraction of the shaded part of any shape in the simplest form?\n\nA. $\\frac{6}{13}$\nB. $\\frac{4}{10}$\nC. $\\frac{1}{4}$\nD. $\\frac{2}{3}$\nE. $\\frac{1}{2}$',
          figures: [
            {
              src: '/papers/amo-mock-g7/fig-7.webp',
              alt: 'Five shapes labeled i through v: two multi-petal flowers, a divided circle, a striped parallelogram, and a divided dodecagon, each partially shaded.',
              caption: 'Five partitioned shapes i through v for Question 7.'
            }
          ],
          answer: 'D. $\\frac{2}{3}$',
          principle:
            'Count the shaded and total equal sections in each shape $i$–$v$, simplify each fraction, and match against the choices.',
          solution:
            'Count the equal sections in each shape:\n- Shape $i$: $8$ shaded petals out of $12$ equal petals, giving $\\frac{8}{12} = \\frac{2}{3}$.\n- Shape $ii$: $3$ shaded sectors out of $5$ equal sectors, giving $\\frac{3}{5}$.\n- Shape $iii$: $1$ shaded strip out of $3$ equal strips, giving $\\frac{1}{3}$.\n- Shape $iv$: $5$ shaded sectors out of $12$ equal sectors, giving $\\frac{5}{12}$.\n- Shape $v$: $6$ shaded petals out of $9$ equal petals, giving $\\frac{6}{9} = \\frac{2}{3}$.\n\nIn simplest form, the matching fraction among the choices is $\\frac{2}{3}$ (option D).',
          rubric: [
            { code: 'M2', text: 'Counts shaded and total equal sections in the figures (such as $\\frac{8}{12}$ in $i$ and $\\frac{6}{9}$ in $v$).' },
            { code: 'A1', text: 'Simplifies to $\\frac{2}{3}$, option D.' }
          ]
        },
        {
          label: '8',
          marks: 3,
          prompt:
            'A tessellation is a set of figures that can cover a plane without overlapping or leaving any gaps. Tessellations with triangles would look like the following:\n\nYou can continue in the horizontal and vertical directions infinitely to place more such triangles to form larger such tightly fitted spaces with no gaps or overlaps. Consider three identical regular pentagons. In how many ways can $3$ such pentagons be arranged so that they form a tessellation?\n\nA. Zero\nB. One\nC. Two\nD. Four\nE. Infinite',
          figures: [
            {
              src: '/papers/amo-mock-g7/fig-8.webp',
              alt: 'Five alternating blue and yellow equilateral triangles fitted edge to edge with no gaps or overlaps.',
              caption: 'Example of triangles arranged without gaps or overlaps for Question 8.'
            }
          ],
          answer: 'A. Zero',
          principle:
            'Check whether multiples of the interior angle of a regular pentagon ($108^\\circ$) can fill a full $360^\\circ$ vertex or a $180^\\circ$ straight angle.',
          solution:
            'Each interior angle of a regular pentagon measures:\n$$\\frac{(5 - 2) \\times 180^\\circ}{5} = 108^\\circ.$$\nFor identical regular pentagons to tessellate without gaps or overlaps, their angles meeting at a vertex must sum to $360^\\circ$ (or $180^\\circ$ along the edge of another pentagon). However:\n$$3 \\times 108^\\circ = 324^\\circ < 360^\\circ < 432^\\circ = 4 \\times 108^\\circ,$$\nleaving an unfillable $36^\\circ$ wedge whenever $3$ regular pentagons meet at a point, and $108^\\circ$ does not divide $180^\\circ$ either.\nTherefore, regular pentagons cannot form a tessellation, so there are $0$ ways.',
          rubric: [
            { code: 'M2', text: 'Computes the interior angle $108^\\circ$ of a regular pentagon and shows $3 \\times 108^\\circ = 324^\\circ$ leaves a $36^\\circ$ gap.' },
            { code: 'A1', text: 'Concludes zero ways, option A.' }
          ]
        },
        {
          label: '9',
          marks: 3,
          prompt:
            'Look at the following graph. Which of the following sections of the graph have the highest rate of change?\n\nA. $A$ to $B$\nB. $B$ to $C$\nC. $A$ to $C$\nD. $D$ to $E$\nE. $E$ to $F$',
          figures: [
            {
              src: '/papers/amo-mock-g7/fig-9.webp',
              alt: 'Distance-Time graph with Time in minutes on the horizontal axis and Distance in kilometers on the vertical axis, plotting points A through F.',
              caption: 'Distance-Time graph for Question 9.'
            }
          ],
          answer: 'E. $E$ to $F$',
          principle:
            'On a Distance–Time graph, the average rate of change over a segment equals its slope $\\frac{\\Delta \\text{Distance}}{\\Delta \\text{Time}}$.',
          solution:
            'Read the coordinates $(\\text{Time}, \\text{Distance})$ from the graph and compute each slope:\n- $A(0, 0)$ to $B(20, 5)$: $\\frac{5 - 0}{20 - 0} = \\frac{5}{20} = 0.25\\text{ km/min}$.\n- $B(20, 5)$ to $C(45, 15)$: $\\frac{15 - 5}{45 - 20} = \\frac{10}{25} = 0.40\\text{ km/min}$.\n- $A(0, 0)$ to $C(45, 15)$: $\\frac{15 - 0}{45 - 0} = \\frac{15}{45} \\approx 0.33\\text{ km/min}$.\n- $D(70, 30)$ to $E(100, 40)$: $\\frac{40 - 30}{100 - 70} = \\frac{10}{30} \\approx 0.33\\text{ km/min}$.\n- $E(100, 40)$ to $F(120, 60)$: $\\frac{60 - 40}{120 - 100} = \\frac{20}{20} = 1.00\\text{ km/min}$.\n\nSection $E$ to $F$ is visibly the steepest and has the highest rate of change ($1.00\\text{ km/min}$).',
          rubric: [
            { code: 'M2', text: 'Compares slopes $\\frac{\\Delta \\text{Distance}}{\\Delta \\text{Time}}$ across the listed intervals.' },
            { code: 'A1', text: 'Identifies $E$ to $F$ as the steepest section, option E.' }
          ]
        },
        {
          label: '10',
          marks: 3,
          prompt:
            'A paper is folded as shown below and punched in its folded state. When the paper is opened out again, what will be the pattern of holes formed?\n\nA. Option A (see figure)\nB. Option B (see figure)\nC. Option C (see figure)\nD. Option D (see figure)\nE. None of these',
          figures: [
            {
              src: '/papers/amo-mock-g7/fig-10a.webp',
              alt: 'Four panels showing an equilateral triangle folded along its three midsegment creases into a smaller central triangle and punched near its upper-left corner.',
              caption: 'Folding and punching sequence for Question 10.'
            },
            {
              src: '/papers/amo-mock-g7/fig-10b.webp',
              alt: 'Four unfolded triangle diagrams labeled A through D showing candidate circular hole patterns.',
              caption: 'Candidate unfolded hole patterns A–D for Question 10.'
            }
          ],
          answer: 'D. Option D',
          principle:
            'Unfold the paper in reverse order, reflecting the punched hole across each fold crease one step at a time.',
          solution:
            'Trace the three folds in reverse across the $4$ congruent sub-triangles (top, bottom-left, bottom-right, and central inverted triangle):\n1. **Before unfolding:** The punch lies in the upper-left corner of the central inverted triangle, close to the top-left vertex of that central triangle.\n2. **Undo Fold 3 (bottom-right flap):** The bottom-right sub-triangle folded up-left over the central triangle across the right midsegment. The punch is near the bottom-left side of the central triangle relative to that crease—actually near the opposite corner of the central triangle—so unfolding the bottom-right flap places a hole near the bottom-right vertex of the original triangle.\n3. **Undo Fold 2 (bottom-left flap):** Reflecting across the left midsegment crease maps the punch onto the outer left edge of the bottom-left sub-triangle, just below the left midpoint.\n4. **Undo Fold 1 (top flap):** Reflecting across the horizontal midsegment crease maps the punch into the lower-left interior of the top sub-triangle, directly above the original hole.\n\nTogether, the unfolded sheet has a cluster of three holes near the left midpoint (one in the top triangle, one in the central triangle, and one along the left edge of the bottom-left triangle) plus one hole near the bottom-right corner, matching **Option D**.',
          rubric: [
            { code: 'M2', text: 'Reflects the punch across the three midsegment fold creases in reverse order.' },
            { code: 'A1', text: 'Matches the resulting four-hole pattern to option D.' }
          ]
        },
        {
          label: '11',
          marks: 3,
          prompt:
            'Which of the following Venn diagrams represents soccer players, high school Math enthusiasts, and students?\n\nA. Option A (see figure)\nB. Option B (see figure)\nC. Option C (see figure)\nD. Option D (see figure)\nE. None of these',
          figures: [
            {
              src: '/papers/amo-mock-g7/fig-11.webp',
              alt: 'Four three-circle Venn diagram arrangements labeled A through D showing different containment and overlap relationships.',
              caption: 'Venn diagram options A–D for Question 11.'
            }
          ],
          answer: 'B. Option B',
          principle:
            'Determine subset (containment) and partial-overlap relationships among the three groups.',
          solution:
            'Analyze the relationships between the three sets:\n- Every high school Math enthusiast is a student, so the circle for **high school Math enthusiasts** must lie completely inside the circle for **students**.\n- Some soccer players are students (and some of those are high school Math enthusiasts), while other soccer players are not students (for example, adult professional players). Thus the circle for **soccer players** must partially overlap both the **students** circle and the **high school Math enthusiasts** circle while extending outside the **students** circle.\n\nThis exact configuration is shown in **Option B**.',
          rubric: [
            { code: 'M2', text: 'Places high school Math enthusiasts inside students, with soccer players partially overlapping both.' },
            { code: 'A1', text: 'Selects option B.' }
          ]
        },
        {
          label: '12',
          marks: 3,
          prompt:
            '$40$ people are in a movie theatre which offers two snack options – popcorns and chips. $26$ people like popcorns but they do not like chips. $32$ students like popcorns. Everyone in the theatre likes at least one of the two snack options. Find the number of people who like both.\n\nA. $6$\nB. $8$\nC. $32$\nD. $40$\nE. Indeterminate',
          answer: 'A. $6$',
          principle:
            'Split the total set of people who like popcorn into those who like popcorn only and those who like both snacks.',
          solution:
            'Every person who likes popcorn either dislikes chips (popcorn only) or likes chips (both snacks). Referring to the $32$ moviegoers who like popcorn:\n$$\\text{Both} = (\\text{Popcorn total}) - (\\text{Popcorn only}) = 32 - 26 = 6.$$\n(The remaining $40 - 32 = 8$ people like chips only.)',
          rubric: [
            { code: 'M2', text: 'Subtracts the $26$ popcorn-only people from the $32$ people who like popcorn.' },
            { code: 'A1', text: 'Obtains $6$ people who like both, option A.' }
          ]
        },
        {
          label: '13',
          marks: 3,
          prompt:
            'The surface areas of the two spheres are in the ratio $4 : 9$. Find the ratio of their volumes.\n\nA. $2 : 3$\nB. $16 : 31$\nC. $3 : 2$\nD. $4 : 9$\nE. $8 : 27$',
          answer: 'E. $8 : 27$',
          principle:
            'For similar 3D solids (spheres), surface area scales as $r^2$ and volume scales as $r^3$.',
          solution:
            'Let the radii of the two spheres be $r_1$ and $r_2$. Since surface area $A = 4\\pi r^2$ is proportional to $r^2$:\n$$\\left(\\frac{r_1}{r_2}\\right)^2 = \\frac{4}{9} \\implies \\frac{r_1}{r_2} = \\frac{2}{3}.$$\nSince volume $V = \\frac{4}{3}\\pi r^3$ is proportional to $r^3$:\n$$\\frac{V_1}{V_2} = \\left(\\frac{r_1}{r_2}\\right)^3 = \\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27},$$\nso the ratio of their volumes is $8 : 27$.',
          rubric: [
            { code: 'M2', text: 'Finds the radius ratio $r_1 : r_2 = \\sqrt{4} : \\sqrt{9} = 2 : 3$ and cubes it for volume.' },
            { code: 'A1', text: 'Obtains $8 : 27$, option E.' }
          ]
        },
        {
          label: '14',
          marks: 3,
          prompt:
            'How many three-digit natural numbers are divisible by $7$?\n\nA. $141$\nB. $142$\nC. $143$\nD. $128$\nE. $129$',
          answer: 'D. $128$',
          principle:
            'Identify the smallest and largest three-digit multiples of $7$, or subtract $\\lfloor 99/7 \\rfloor$ from $\\lfloor 999/7 \\rfloor$.',
          solution:
            'The three-digit natural numbers range from $100$ to $999$.\n- Smallest three-digit multiple of $7$: $105 = 7 \\times 15$.\n- Largest three-digit multiple of $7$: $994 = 7 \\times 142$.\n\nCounting the multiples from $7 \\times 15$ through $7 \\times 142$ inclusive:\n$$142 - 15 + 1 = 128.$$',
          rubric: [
            { code: 'M2', text: 'Identifies the endpoints $105 = 7 \\times 15$ and $994 = 7 \\times 142$ (or $\\lfloor 999/7 \\rfloor - \\lfloor 99/7 \\rfloor$).' },
            { code: 'A1', text: 'Counts $128$ numbers, option D.' }
          ]
        },
        {
          label: '15',
          marks: 3,
          prompt:
            'A lattice point is a point in a Cartesian coordinate system such that both its $x$- and $y$-coordinates are integers. How many lattice points are there in a line with $(2, 4)$, $(3, 6)$?\n\nA. $12$\nB. $6$\nC. $1$\nD. $2$\nE. Infinitely many',
          answer: 'E. Infinitely many',
          principle:
            'Find the equation of the line passing through $(2, 4)$ and $(3, 6)$ and check which integer values of $x$ produce integer values of $y$.',
          solution:
            'The slope of the line through $(2, 4)$ and $(3, 6)$ is:\n$$m = \\frac{6 - 4}{3 - 2} = 2.$$\nUsing point-slope form with $(2, 4)$:\n$$y - 4 = 2(x - 2) \\implies y = 2x.$$\nFor every integer $x \\in \\mathbb{Z}$, the corresponding $y = 2x$ is also an integer, so $(x, 2x)$ is a lattice point on the line. Hence there are infinitely many lattice points.',
          rubric: [
            { code: 'M2', text: 'Determines the line equation $y = 2x$ from $(2, 4)$ and $(3, 6)$.' },
            { code: 'A1', text: 'Concludes every integer $x$ yields a lattice point $(x, 2x)$, so infinitely many, option E.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Open-Ended',
      marks: 25,
      stem: 'Solve each open-ended question (5 questions, 5 points each).',
      parts: [
        {
          label: '16',
          marks: 5,
          prompt:
            'Suppose you have a number with $2021$ digits. Let $P$ be its sum of digits. Let $Q$ be the sum of the digits of $P$. Let $R$ be the sum of the digits of $Q$. (Assume simple addition but not digital sum or recursive sum.) Find the largest value of $Q$.',
          answer: '$36$ (official mock key: $35$)',
          principle:
            'Bound the maximum possible value of $P$ for a $2021$-digit integer, then maximize the digit sum $Q$ over all positive integers $P$ within that bound.',
          solution:
            'A $2021$-digit number has at most $2021$ digits equal to $9$, so the largest possible value of $P$ is:\n$$P_{\\max} = 9 \\times 2021 = 18189.$$\nAny integer $P$ with $1 \\le P \\le 18189$ can be realized as the digit sum of a $2021$-digit number (for instance, $1111$ digits of $9$ followed by $910$ digits of $0$ has digit sum $1111 \\times 9 = 9999$).\n\nNow maximize $Q$, the digit sum of $P$, subject to $1 \\le P \\le 18189$:\n- For $4$-digit $P$: $P = 9999 \\le 18189$ gives $Q = 9 + 9 + 9 + 9 = 36$ (and $R = 3 + 6 = 9$).\n- For $5$-digit $P$ ($10000 \\le P \\le 18189$): the ten-thousands digit is $1$. If the thousands digit is $8$, the remaining three digits are at most $189$, giving digit sum at most $1 + 8 + 0 + 9 + 9 = 27$; if the thousands digit is at most $7$, the maximum digit sum is $1 + 7 + 9 + 9 + 9 = 35$ (at $P = 17999$).\n\nComparing both cases, the true largest possible value of $Q$ is $36$. *(Note: the printed mock answer key lists $0035$ from $P = 17999$, overlooking $P = 9999 \\le 18189$.)*',
          rubric: [
            { code: 'M3', text: 'Finds the upper bound $P \\le 9 \\times 2021 = 18189$ and checks both $4$-digit and $5$-digit candidates.' },
            { code: 'A2', text: 'Obtains $Q = 36$ at $P = 9999$ (noting official mock key $35$ from $P = 17999$).' }
          ]
        },
        {
          label: '17',
          marks: 5,
          prompt:
            'Given\n$$\\begin{array}{rrrr} & X & Y & Z \\\\ + & Z & Y & X \\\\ \\hline A & B & A & A \\end{array}$$\nwhere $A, B, X, Y, Z$ are unique positive single-digit numbers, what is the number of possible combinations for $X$ and $Z$ to satisfy this equation?',
          answer: '$4$ (official mock key: $6$)',
          principle:
            'Analyze the carries column by column from units to thousands, then enforce that $A, B, X, Y, Z$ are distinct digits in $\\{1, 2, \\ldots, 9\\}$.',
          solution:
            'Let $c_1, c_2 \\in \\{0, 1\\}$ be the carries from the units column to the tens column and from the tens column to the hundreds column, respectively.\n1. **Units and hundreds columns:** Look at the units column ($Z + X$) and hundreds column ($X + Z + c_2 = 10A + B$). Because $A, B \\ge 1$, we have $10A + B \\ge 11$, so $X + Z \\ge 10$ and $c_1 = 1$. Hence:\n   $$X + Z = 10 + A.$$\n2. **Hundreds column equation:** Substituting $X + Z = 10 + A$ into $X + Z + c_2 = 10A + B$ gives:\n   $$10 + A + c_2 = 10A + B \\implies 9A + B = 10 + c_2.$$\n   - If $c_2 = 0$, then $9A + B = 10$, forcing $A = 1, B = 1$, which violates $A \\neq B$.\n   - Therefore $c_2 = 1$, giving $9A + B = 11$, which uniquely forces $A = 1$ and $B = 2$.\n3. **Finding $Y$ and $X + Z$:** In the tens column, $2Y + c_1 = 10c_2 + A$, so:\n   $$2Y + 1 = 10(1) + 1 = 11 \\implies Y = 5,$$\n   and $X + Z = 10 + 1 = 11$.\n4. **Counting valid $(X, Z)$:** Since $A = 1, B = 2, Y = 5$ are already used and $X, Z \\in \\{1, \\ldots, 9\\}$ must be distinct from $1, 2, 5$ and from each other, the ordered pairs $(X, Z)$ with $X + Z = 11$ are:\n   $$(3, 8), \\quad (4, 7), \\quad (7, 4), \\quad (8, 3),$$\n   giving $4$ valid combinations ($358 + 853 = 1211$ and $457 + 754 = 1211$).\n\n*(Note: the printed mock answer key lists $0006$, which counts $(2, 9)$ and $(9, 2)$ without excluding $B = 2$.)*',
          rubric: [
            { code: 'M3', text: 'Uses carry analysis to deduce $A = 1$, $B = 2$, $Y = 5$, and $X + Z = 11$.' },
            { code: 'A2', text: 'Lists the $4$ valid ordered pairs $(3,8), (4,7), (7,4), (8,3)$ (noting official mock key $6$).' }
          ]
        },
        {
          label: '18',
          marks: 5,
          prompt:
            'A steel cuboid is reshaped into a cube. Initially, its length, breadth, and depth were $270\\text{ cm}$, $100\\text{ cm}$, and $64\\text{ cm}$ respectively. Find the sum of digits of the surface area of the cube.',
          answer: '$18$',
          principle:
            'Conserve volume when reshaping the cuboid into a cube: $s^3 = l \\cdot w \\cdot h$, then compute $6s^2$ and sum its digits.',
          solution:
            'The volume of the cuboid is:\n$$V = 270 \\times 100 \\times 64 = (27 \\times 10) \\times 100 \\times 64 = 27 \\times 1000 \\times 64 = 3^3 \\times 10^3 \\times 4^3.$$\nSince the steel is reshaped without loss, the cube has side length:\n$$s = \\sqrt[3]{3^3 \\times 10^3 \\times 4^3} = 3 \\times 10 \\times 4 = 120\\text{ cm}.$$\nThe surface area of the cube is:\n$$6s^2 = 6 \\times 120^2 = 6 \\times 14400 = 86400\\text{ cm}^2.$$\nThe sum of the digits of $86400$ is:\n$$8 + 6 + 4 + 0 + 0 = 18.$$',
          rubric: [
            { code: 'M3', text: 'Computes the cube side $s = \\sqrt[3]{270 \\times 100 \\times 64} = 120\\text{ cm}$ and surface area $6s^2 = 86400\\text{ cm}^2$.' },
            { code: 'A2', text: 'Sums the digits $8 + 6 + 4 + 0 + 0 = 18$.' }
          ]
        },
        {
          label: '19',
          marks: 5,
          prompt:
            'If $(3x - 4) : (y + 15)$ is a fixed ratio and if $x = \\frac{7}{3}$, then $y = 12$. Find the value of $x + y$ when $x = 2$.',
          answer: '$5$',
          principle:
            'Determine the constant ratio from the given pair $(x, y) = \\left(\\frac{7}{3}, 12\\right)$, then substitute $x = 2$ to solve for $y$.',
          solution:
            'Substitute $x = \\frac{7}{3}$ and $y = 12$ to find the fixed ratio:\n$$\\frac{3x - 4}{y + 15} = \\frac{3 \\cdot \\frac{7}{3} - 4}{12 + 15} = \\frac{7 - 4}{27} = \\frac{3}{27} = \\frac{1}{9}.$$\nNow set $x = 2$ and equate the ratio to $\\frac{1}{9}$:\n$$\\frac{3(2) - 4}{y + 15} = \\frac{1}{9} \\implies \\frac{2}{y + 15} = \\frac{1}{9} \\implies y + 15 = 18 \\implies y = 3.$$\nTherefore, when $x = 2$:\n$$x + y = 2 + 3 = 5.$$',
          rubric: [
            { code: 'M3', text: 'Finds the fixed ratio $\\frac{1}{9}$ and solves $\\frac{2}{y + 15} = \\frac{1}{9}$ to obtain $y = 3$.' },
            { code: 'A2', text: 'Computes $x + y = 2 + 3 = 5$.' }
          ]
        },
        {
          label: '20',
          marks: 5,
          prompt:
            'What is the sum of prime numbers between $2000$ and $2021$?',
          answer: '$6031$',
          principle:
            'Screen odd integers strictly between $2000$ and $2021$ for divisibility by primes up to $\\lfloor \\sqrt{2021} \\rfloor = 44$.',
          solution:
            'The odd numbers strictly between $2000$ and $2021$ that are not multiples of $3$ or $5$ are $2003, 2009, 2011, 2017$.\nTest divisibility by primes $7, 11, \\ldots, 43$:\n- $2009 = 7 \\times 287 = 7^2 \\times 41$ (composite).\n- $2003$, $2011$, and $2017$ have no prime divisors $\\le 43$, so all three are prime.\n\nTheir sum is:\n$$2003 + 2011 + 2017 = 6031.$$',
          rubric: [
            { code: 'M3', text: 'Identifies the three primes $2003$, $2011$, and $2017$ between $2000$ and $2021$.' },
            { code: 'A2', text: 'Computes $2003 + 2011 + 2017 = 6031$.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Section C: Open-Ended',
      marks: 30,
      stem: 'Solve each open-ended question (5 questions, 6 points each).',
      parts: [
        {
          label: '21',
          marks: 6,
          prompt:
            'A lattice point is a point in a Cartesian coordinate system such that both its $x$- and $y$-coordinates are integers. A point lattice is constructed by plotting all of the points $(a, b)$ such that $a$ and $b$ are positive integers. How many points in the point lattice lie on the line $y = -4x + 8$?',
          answer: '$1$',
          principle:
            'Impose the positive-integer conditions $x \\ge 1$ and $y \\ge 1$ on $y = -4x + 8$ to bound $x$.',
          solution:
            'A point $(a, b)$ in the point lattice satisfies $a, b \\in \\mathbb{Z}^+$, so $a \\ge 1$ and $b \\ge 1$.\nSubstituting $b = -4a + 8 \\ge 1$ gives:\n$$4a \\le 7 \\implies a \\le \\frac{7}{4} = 1.75.$$\nSince $a$ is a positive integer, the only possible value is $a = 1$, which yields $b = -4(1) + 8 = 4$.\nHence, only $1$ point in the point lattice—namely $(1, 4)$—lies on the line.',
          rubric: [
            { code: 'M4', text: 'Applies $x \\ge 1$ and $-4x + 8 \\ge 1$ to bound $1 \\le x \\le 1.75$ and finds $(1, 4)$.' },
            { code: 'A2', text: 'Concludes there is $1$ point.' }
          ]
        },
        {
          label: '22',
          marks: 6,
          prompt:
            'Several people were surveyed for their preference from $4$ drinks $A, B, C, D$. All the people surveyed are represented in the graph below. If the fraction of people who preferred $A$ is $\\frac{m}{n}$, find $m + n$.',
          figures: [
            {
              src: '/papers/amo-mock-g7/fig-22.webp',
              alt: 'Bar chart of Number of People versus four drinks A, B, C, and D with heights aligned to grid ticks from 50 to 250.',
              caption: 'Survey bar graph of drink preferences A, B, C, and D for Question 22.'
            }
          ],
          answer: '$16$',
          principle:
            'Read each bar height from the vertical axis, sum them to get the total surveyed, and simplify the fraction for $A$.',
          solution:
            'Read the number of people for each drink from the bar graph:\n- $A = 150$\n- $B = 100$\n- $C = 150$\n- $D = 250$\n\nThe total number of people surveyed is:\n$$150 + 100 + 150 + 250 = 650.$$\nThe fraction of people who preferred drink $A$ is:\n$$\\frac{150}{650} = \\frac{15}{65} = \\frac{3}{13}.$$\nIn simplest form, $m = 3$ and $n = 13$, so:\n$$m + n = 3 + 13 = 16.$$',
          rubric: [
            { code: 'M2', text: 'Reads bar values $A = 150$, $B = 100$, $C = 150$, $D = 250$ and finds total $650$.' },
            { code: 'M2', text: 'Reduces $\\frac{150}{650}$ to simplest form $\\frac{3}{13}$.' },
            { code: 'A2', text: 'Computes $m + n = 3 + 13 = 16$.' }
          ]
        },
        {
          label: '23',
          marks: 6,
          prompt:
            'How many three-digit natural numbers $n$ can there be such that all the three conditions given below are satisfied:\nCondition 1: $n - 14$ is divisible by $7$,\nCondition 2: $n - 24$ is divisible by $8$, and\nCondition 3: $n - 36$ is divisible by $9$.',
          answer: '$1$',
          principle:
            'Simplify each divisibility condition by noticing that the subtracted constants are already multiples of $7$, $8$, and $9$, then take the LCM.',
          solution:
            'Because $14 = 2 \\times 7$, $24 = 3 \\times 8$, and $36 = 4 \\times 9$:\n- $7 \\mid (n - 14) \\iff 7 \\mid n$,\n- $8 \\mid (n - 24) \\iff 8 \\mid n$,\n- $9 \\mid (n - 36) \\iff 9 \\mid n$.\n\nSince $7, 8,$ and $9$ are pairwise coprime, $n$ is divisible by all three if and only if $n$ is a multiple of:\n$$\\operatorname{lcm}(7, 8, 9) = 7 \\times 8 \\times 9 = 504.$$\nThe positive multiples of $504$ are $504, 1008, 1512, \\ldots$, so $504$ is the only three-digit number satisfying all three conditions. Therefore, there is $1$ such number.',
          rubric: [
            { code: 'M4', text: 'Reduces the conditions to $7, 8, 9 \\mid n$ and computes $\\operatorname{lcm}(7, 8, 9) = 504$.' },
            { code: 'A2', text: 'Finds $n = 504$ is the unique three-digit multiple, giving $1$.' }
          ]
        },
        {
          label: '24',
          marks: 6,
          prompt:
            'Simplify and round off to the nearest whole number:\n$$\\frac{16}{\\sqrt{14} + \\sqrt{10}} - \\frac{58}{3\\sqrt{5} - 4} + \\sqrt{180} + \\sqrt{160}$$',
          answer: '$7$',
          principle:
            'Rationalize the two radical denominators using conjugates, simplify $\\sqrt{180}$ and $\\sqrt{160}$, and cancel like radical terms.',
          solution:
            'Rationalize each fraction by multiplying numerator and denominator by the conjugate:\n$$\\frac{16}{\\sqrt{14} + \\sqrt{10}} = \\frac{16(\\sqrt{14} - \\sqrt{10})}{14 - 10} = 4(\\sqrt{14} - \\sqrt{10}) = 4\\sqrt{14} - 4\\sqrt{10},$$\n$$\\frac{58}{3\\sqrt{5} - 4} = \\frac{58(3\\sqrt{5} + 4)}{45 - 16} = \\frac{58(3\\sqrt{5} + 4)}{29} = 2(3\\sqrt{5} + 4) = 6\\sqrt{5} + 8.$$\nAlso simplify the remaining square roots:\n$$\\sqrt{180} = \\sqrt{36 \\times 5} = 6\\sqrt{5}, \\qquad \\sqrt{160} = \\sqrt{16 \\times 10} = 4\\sqrt{10}.$$\nSubstitute everything back into the expression:\n$$(4\\sqrt{14} - 4\\sqrt{10}) - (6\\sqrt{5} + 8) + 6\\sqrt{5} + 4\\sqrt{10} = 4\\sqrt{14} - 8 = \\sqrt{224} - 8.$$\nSince $14.9^2 = 222.01 < 224 < 225 = 15^2$, we have $\\sqrt{224} \\approx 14.97$, so $\\sqrt{224} - 8 \\approx 6.97$, which rounds to $7$.',
          rubric: [
            { code: 'M2', text: 'Rationalizes both denominators to get $4\\sqrt{14} - 4\\sqrt{10}$ and $6\\sqrt{5} + 8$.' },
            { code: 'M2', text: 'Simplifies $\\sqrt{180} = 6\\sqrt{5}$ and $\\sqrt{160} = 4\\sqrt{10}$, reducing the expression to $4\\sqrt{14} - 8$.' },
            { code: 'A2', text: 'Approximates $\\sqrt{224} - 8 \\approx 6.97$ and rounds to $7$.' }
          ]
        },
        {
          label: '25',
          marks: 6,
          prompt:
            'Use all $9$ digits exactly once — $1, 2, 3, 4, 5, 6, 7, 8, 9$ — as numerator and denominator, create a fraction equalling $\\frac{1}{3}$ (one third). The digits in the numerator and denominator should together have all the $9$ digits shown here. What is the numerator?',
          answer: '$5832$',
          principle:
            'Since denominator $= 3 \\times \\text{numerator}$ and the $9$ digits split into $4$ digits (numerator) and $5$ digits (denominator), test $4$-digit numerators starting with $5$ or higher such that the $5$-digit denominator uses the remaining digits.',
          solution:
            'Let the fraction be $\\frac{N}{D} = \\frac{1}{3}$, so $D = 3N$. Because $N$ and $D$ together use all $9$ nonzero digits $1$–$9$, $N$ must be a $4$-digit number and $D = 3N$ a $5$-digit number (so $N \\ge 3334$).\nTesting valid $4$-digit numerators with distinct nonzero digits whose triple $3N$ uses the remaining $5$ digits yields:\n$$N = 5832 \\implies D = 3 \\times 5832 = 17496,$$\nwhere $\\{5, 8, 3, 2, 1, 7, 4, 9, 6\\}$ is all nine digits $1$–$9$ once each, and $\\frac{5832}{17496} = \\frac{1}{3}$.\n*(Note: another valid pandigital fraction equalling $\\frac{1}{3}$ is $\\frac{5823}{17469}$, with numerator $5823$; the official mock answer key lists $5832$.)*',
          rubric: [
            { code: 'M4', text: 'Determines $D = 3N$ must be $5$-digit with $N$ $4$-digit and searches pandigital multiples.' },
            { code: 'A2', text: 'Obtains $\\frac{5832}{17496} = \\frac{1}{3}$ with numerator $5832$.' }
          ]
        }
      ]
    }
  ]
};
