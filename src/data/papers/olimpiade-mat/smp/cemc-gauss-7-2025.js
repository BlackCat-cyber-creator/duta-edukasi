/**
 * Paket Soal: CEMC Gauss Grade 7 — 2025 (Official Contest & Solutions)
 * Sumber: Centre for Education in Mathematics and Computing (CEMC), University of Waterloo
 *         (2025Gauss7Contest.pdf & 2025GaussSolutions.pdf).
 * Seluruh 25 soal (Part A: 1–10 @ 5 poin, Part B: 11–20 @ 6 poin, Part C: 21–25 @ 8 poin)
 * dimuat lengkap dalam bahasa Inggris beserta diagram resmi (.webp) dan pembahasan terperinci.
 */
export default {
  id: 'cemc-gauss7-2025',
  slug: 'cemc-gauss-7-2025',
  subject: 'olimpiade-mat',
  grade: 7,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'CEMC Gauss Grade 7 — 2025: official CEMC Waterloo contest questions & solutions',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab2-bilangan-rasional',
    'smp7-bab4-bentuk-aljabar',
    'smp7-bab6-data-diagram'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'Gauss',
  title: 'CEMC Gauss Grade 7 — 2025',
  totalMarks: 150,
  instructions:
    'Attempt all 25 multiple-choice questions (original time allowed: 60 minutes; basic calculators permitted under CEMC guidelines without internet, communication, stored formulas/programs, CAS, or dynamic geometry). Part A has 10 questions worth 5 marks each (50 marks). Part B has 10 questions worth 6 marks each (60 marks). Part C has 5 questions worth 8 marks each (40 marks), for a total of 150 marks. In the official contest, there is no penalty for incorrect answers and each unanswered question earns 2 marks up to 10 unanswered questions; marks here reflect full credit per correct answer.',
  source: {
    org: 'CEMC — University of Waterloo',
    file: '2025Gauss7Contest.pdf',
    license: 'Hak cipta pada penyelenggara (CEMC University of Waterloo); dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Part A',
      marks: 50,
      stem: 'Each correct answer is worth $5$ marks (Questions 1–10).',
      parts: [
        {
          label: '1',
          marks: 5,
          prompt:
            'In a group of $12$ friends, each friend gives $5$ dollars to a charity. How much money does the group give in total?\n\nA. $50$ dollars\nB. $55$ dollars\nC. $60$ dollars\nD. $65$ dollars\nE. $70$ dollars',
          answer: 'C. $60$ dollars',
          principle: 'Multiply the number of friends by the amount each friend contributes.',
          solution:
            'Each of the $12$ friends contributes $5$ dollars, so the total amount given to the charity is\n$$12 \\times 5 = 60\\text{ dollars}.$$',
          rubric: [
            { code: 'M2', text: 'Sets up the multiplication $12 \\times 5$ for the total contribution.' },
            { code: 'A3', text: 'Evaluates $60$ dollars, option C.' }
          ]
        },
        {
          label: '2',
          marks: 5,
          prompt:
            'In the diagram, what fraction of the area of the regular hexagon is shaded?\n\nA. $\\frac{1}{3}$\nB. $\\frac{1}{4}$\nC. $\\frac{1}{7}$\nD. $\\frac{1}{2}$\nE. $\\frac{1}{6}$',
          figures: [
            {
              src: '/papers/cemc-gauss7-2025/fig-2.webp',
              alt: 'A regular hexagon partitioned into congruent triangles from its center with one triangle shaded.',
              caption: 'Shaded regular hexagon.'
            }
          ],
          answer: 'E. $\\frac{1}{6}$',
          principle: 'Compare the number of shaded congruent regions to the total number of congruent regions.',
          solution:
            'The three main diagonals divide the regular hexagon into $6$ congruent equilateral triangles of equal area. Since $1$ of these $6$ equal triangles is shaded, the shaded fraction of the hexagon is\n$$\\frac{1}{6}.$$',
          rubric: [
            { code: 'M2', text: 'Identifies that the regular hexagon is partitioned into $6$ equal-area triangles with $1$ shaded.' },
            { code: 'A3', text: 'States the shaded fraction $\\frac{1}{6}$, option E.' }
          ]
        },
        {
          label: '3',
          marks: 5,
          prompt:
            'The graph shows the number of apples that each of five students ate during a week. Which student ate the greatest number of apples?\n\nA. Dae\nB. Joe\nC. Etta\nD. Susie\nE. Vinh',
          figures: [
            {
              src: '/papers/cemc-gauss7-2025/fig-3.webp',
              alt: 'Bar graph titled Apples Eaten showing apple counts for five students.',
              caption: 'Bar graph of apples eaten by five students.'
            }
          ],
          answer: 'A. Dae',
          principle: 'Read the bar heights directly from the vertical axis to identify the maximum.',
          solution:
            'Reading the values from the bar graph:\n- Dae: $6$ apples\n- Joe: $3$ apples\n- Etta: $5$ apples\n- Susie: $4$ apples\n- Vinh: $1$ apple\n\nDae has the tallest bar ($6$ apples), so Dae ate the greatest number of apples.',
          rubric: [
            { code: 'M2', text: 'Reads the five bar heights ($6, 3, 5, 4, 1$) or compares bar heights.' },
            { code: 'A3', text: 'Identifies Dae as the student with the greatest count, option A.' }
          ]
        },
        {
          label: '4',
          marks: 5,
          prompt:
            'The equal-arm scale shown is balanced. One square has the same mass as\n\nA. $1$ circle\nB. $2$ circles\nC. $3$ circles\nD. $4$ circles\nE. $8$ circles',
          figures: [
            {
              src: '/papers/cemc-gauss7-2025/fig-4.webp',
              alt: 'A balanced equal-arm scale with gray squares on the left pan and gray circles on the right pan.',
              caption: 'Balanced equal-arm scale.'
            }
          ],
          answer: 'B. $2$ circles',
          principle: 'Halve both sides of a balanced scale to find the mass corresponding to one unit.',
          solution:
            'On the balanced scale, $2$ squares have the same total mass as $4$ circles. Dividing both sides equally by $2$, we find that $1$ square has the same mass as\n$$\\frac{4}{2} = 2\\text{ circles}.$$',
          rubric: [
            { code: 'M2', text: 'Equates $2$ squares to $4$ circles from the balanced scale.' },
            { code: 'A3', text: 'Divides by $2$ to get $2$ circles, option B.' }
          ]
        },
        {
          label: '5',
          marks: 5,
          prompt:
            'Which of the following is equal to the area of a square with side length $8$?\n\nA. $8 \\times 2$\nB. $2 \\times (8 + 8)$\nC. $8 \\times 8$\nD. $4 \\times 8$\nE. $8 \\times 8 \\times 8 \\times 8$',
          answer: 'C. $8 \\times 8$',
          principle: 'The area of a square with side length $s$ is $s \\times s$.',
          solution:
            'A square with side length $8$ has area $8 \\times 8 = 64$. Checking the alternatives: $8 \\times 2 = 16$, $2 \\times (8 + 8) = 32$, $4 \\times 8 = 32$, and $8 \\times 8 \\times 8 \\times 8 = 4096$. Only $8 \\times 8$ equals the area.',
          rubric: [
            { code: 'M2', text: 'Applies the square area formula $\\text{side} \\times \\text{side}$ with side length $8$.' },
            { code: 'A3', text: 'Selects $8 \\times 8$, option C.' }
          ]
        },
        {
          label: '6',
          marks: 5,
          prompt:
            'In the diagram, $\\angle PQR$ is a straight angle. The value of $x$ is\n\nA. $60$\nB. $40$\nC. $50$\nD. $70$\nE. $65$',
          figures: [
            {
              src: '/papers/cemc-gauss7-2025/fig-6.webp',
              alt: 'Straight angle PQR split by a ray at Q into an obtuse angle and an acute angle labeled x degrees.',
              caption: 'Straight angle PQR divided into two adjacent angles.'
            }
          ],
          answer: 'C. $50$',
          principle: 'Angles forming a straight angle sum to $180^\\circ$.',
          solution:
            'Since $\\angle PQR$ is a straight angle, its measure is $180^\\circ$. Therefore,\n$$130 + x = 180 \\implies x = 180 - 130 = 50.$$',
          rubric: [
            { code: 'M2', text: 'Uses the straight-angle sum $130 + x = 180$.' },
            { code: 'A3', text: 'Solves $x = 50$, option C.' }
          ]
        },
        {
          label: '7',
          marks: 5,
          prompt:
            'The list of seven numbers $3, 15, 8, 8, 9, 9, n$ has exactly one mode, which is $8$. What is the value of $n$?\n\nA. $15$\nB. $9$\nC. $3$\nD. $8$\nE. $10$',
          answer: 'D. $8$',
          principle: 'A unique mode must occur strictly more frequently than every other value in the list.',
          solution:
            'Before choosing $n$, both $8$ and $9$ appear twice while $3$ and $15$ appear once each. For $8$ to be the unique mode, $8$ must appear strictly more times than $9$. Setting $n = 8$ makes $8$ appear $3$ times (more than any other number), whereas $n = 9$ makes $9$ the mode, and $n \\in \\{3, 10, 15\\}$ leaves $8$ and $9$ tied at two appearances each.',
          rubric: [
            { code: 'M2', text: 'Observes that $8$ and $9$ both currently appear twice, so $8$ needs an extra occurrence to be the unique mode.' },
            { code: 'A3', text: 'Concludes $n = 8$, option D.' }
          ]
        },
        {
          label: '8',
          marks: 5,
          prompt:
            'Sam has only one measuring container. The volume of this container is $\\frac{1}{2}$ cup. A recipe needs $2\\frac{1}{2}$ cups of flour. How many times does Sam fill his $\\frac{1}{2}$ cup container to accurately measure the flour for this recipe?\n\nA. $3$\nB. $2\\frac{1}{2}$\nC. $10$\nD. $4\\frac{1}{2}$\nE. $5$',
          answer: 'E. $5$',
          principle: 'Divide the total required volume by the volume of one scoop.',
          solution:
            'Convert $2\\frac{1}{2}$ cups to an improper fraction: $2\\frac{1}{2} = \\frac{5}{2}$ cups. Dividing by $\\frac{1}{2}$ cup per fill gives\n$$\\frac{5}{2} \\div \\frac{1}{2} = 5\\text{ times}.$$',
          rubric: [
            { code: 'M2', text: 'Converts $2\\frac{1}{2} = \\frac{5}{2}$ and divides by $\\frac{1}{2}$.' },
            { code: 'A3', text: 'Obtains $5$, option E.' }
          ]
        },
        {
          label: '9',
          marks: 5,
          prompt:
            'The month of June has $30$ days. If in a certain year June $1$ is on a Tuesday, on which day of the week is June $30$?\n\nA. Monday\nB. Tuesday\nC. Wednesday\nD. Thursday\nE. Friday',
          answer: 'C. Wednesday',
          principle: 'Advance in multiples of $7$ days (full weeks) and step forward by the remainder.',
          solution:
            'Because a week has $7$ days, adding multiples of $7$ keeps the day of the week unchanged. Since June $1$ is a Tuesday, June $1 + 28 = \\text{June } 29$ is also a Tuesday. Therefore, June $30$ is the next day, Wednesday.',
          rubric: [
            { code: 'M2', text: 'Advances $4$ full weeks ($28$ days) from June $1$ to June $29$, which is a Tuesday.' },
            { code: 'A3', text: 'Determines June $30$ is Wednesday, option C.' }
          ]
        },
        {
          label: '10',
          marks: 5,
          prompt:
            'The words “P U G  F O R  S A L E” are written on a store window. How many of these ten letters look the same when viewed from both sides of the window?\n\nA. $3$\nB. $4$\nC. $5$\nD. $6$\nE. $7$',
          answer: 'A. $3$',
          principle: 'Viewing text through a glass window reflects each letter horizontally (left-to-right), so only letters with a vertical line of symmetry look unchanged.',
          solution:
            'Viewing the letters from the opposite side of the window reverses them horizontally (mirror image across a vertical axis). Checking each of the $10$ letters in `P U G F O R S A L E`:\n- Symmetric across a vertical axis: `U`, `O`, `A` ($3$ letters).\n- Asymmetric when reflected horizontally: `P`, `G`, `F`, `R`, `S`, `L`, `E` ($7$ letters).\n\nThus, exactly $3$ letters look the same from both sides.',
          rubric: [
            { code: 'M2', text: 'Recognizes that viewing through a window corresponds to horizontal reflection and tests vertical symmetry of each letter.' },
            { code: 'A3', text: 'Identifies `U`, `O`, `A` for a count of $3$, option A.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Part B',
      marks: 60,
      stem: 'Each correct answer is worth $6$ marks (Questions 11–20).',
      parts: [
        {
          label: '11',
          marks: 6,
          prompt:
            'The coordinates of $R$ are $(2, 6)$, as shown. After which of these translations will $R$ move to the point $(7, 0)$?\n\nA. right $9$, down $6$\nB. left $5$, up $6$\nC. right $6$, down $5$\nD. left $6$, down $5$\nE. right $5$, down $6$',
          figures: [
            {
              src: '/papers/cemc-gauss7-2025/fig-11.webp',
              alt: 'First quadrant of a coordinate grid showing point R.',
              caption: 'Coordinate grid with point R.'
            }
          ],
          answer: 'E. right $5$, down $6$',
          principle: 'Compute the horizontal change $\\Delta x$ and vertical change $\\Delta y$ between the initial and final coordinates.',
          solution:
            'To translate $R(2, 6)$ to $(7, 0)$:\n- Horizontal shift: $7 - 2 = +5$, which is $5$ units right.\n- Vertical shift: $0 - 6 = -6$, which is $6$ units down.\n\nThus, the required translation is right $5$, down $6$.',
          rubric: [
            { code: 'M2', text: 'Computes the horizontal shift $7 - 2 = +5$ (right $5$).' },
            { code: 'M2', text: 'Computes the vertical shift $0 - 6 = -6$ (down $6$).' },
            { code: 'A2', text: 'Selects right $5$, down $6$, option E.' }
          ]
        },
        {
          label: '12',
          marks: 6,
          prompt:
            'A train stops at Waterloo Station every $3$ minutes. A bus stops at Waterloo Station every $5$ minutes. A train and a bus both stop at Waterloo Station at 6:25 a.m. The next time that a train and a bus both stop at Waterloo Station at the same time is\n\nA. 6:28 a.m.\nB. 6:30 a.m.\nC. 6:33 a.m.\nD. 6:40 a.m.\nE. 6:55 a.m.',
          answer: 'D. 6:40 a.m.',
          principle: 'Two periodic events coincide next after the least common multiple (LCM) of their periods.',
          solution:
            'The train stops every $3$ minutes and the bus stops every $5$ minutes. Since $\\operatorname{lcm}(3, 5) = 15$, both vehicles stop together every $15$ minutes. Adding $15$ minutes to 6:25 a.m. gives\n$$6{:}25\\text{ a.m.} + 15\\text{ min} = 6{:}40\\text{ a.m.}$$',
          rubric: [
            { code: 'M3', text: 'Finds $\\operatorname{lcm}(3, 5) = 15$ minutes as the coincidence interval.' },
            { code: 'A3', text: 'Adds $15$ minutes to 6:25 a.m. to obtain 6:40 a.m., option D.' }
          ]
        },
        {
          label: '13',
          marks: 6,
          prompt:
            'The numbers $2, 0, 2, 5$ are repeated to form the pattern $2, 0, 2, 5, 2, 0, 2, 5, \\dots$\nIf a total of $50$ numbers are written, how many times will the number $5$ appear?\n\nA. $10$\nB. $11$\nC. $12$\nD. $13$\nE. $25$',
          answer: 'C. $12$',
          principle: 'Divide the total length by the repeating block length and check the remainder terms.',
          solution:
            'The repeating block $(2, 0, 2, 5)$ has length $4$, and $5$ appears once in each block (at position $4$). Dividing $50$ by $4$ gives\n$$50 = 12 \\times 4 + 2.$$\nThere are $12$ complete blocks followed by the first two terms $2, 0$ of the thirteenth block. Neither of the last two terms is $5$, so $5$ appears $12$ times.',
          rubric: [
            { code: 'M3', text: 'Writes $50 = 12 \\times 4 + 2$ and identifies the remainder terms as $2, 0$.' },
            { code: 'A3', text: 'Counts one $5$ per complete block to obtain $12$, option C.' }
          ]
        },
        {
          label: '14',
          marks: 6,
          prompt:
            'What number goes in the box so that $\\frac{28}{32} + \\frac{1}{\\square} = 1$?\n\nA. $24$\nB. $-3$\nC. $7$\nD. $16$\nE. $8$',
          answer: 'E. $8$',
          principle: 'Subtract the known fraction from $1$ and reduce to a unit fraction.',
          solution:
            'Subtracting $\\frac{28}{32}$ from $1$ gives\n$$\\frac{1}{\\square} = 1 - \\frac{28}{32} = \\frac{32 - 28}{32} = \\frac{4}{32} = \\frac{1}{8}.$$\nHence $\\square = 8$.',
          rubric: [
            { code: 'M3', text: 'Computes $1 - \\frac{28}{32} = \\frac{4}{32}$ and simplifies to $\\frac{1}{8}$.' },
            { code: 'A3', text: 'Finds $\\square = 8$, option E.' }
          ]
        },
        {
          label: '15',
          marks: 6,
          prompt:
            'Two standard six-sided dice are rolled. If the two numbers on the top faces are added, which of the following sums is least likely?\n\nA. $7$\nB. $8$\nC. $9$\nD. $10$\nE. $11$',
          answer: 'E. $11$',
          principle: 'Count the number of ordered pairs $(a, b) \\in \\{1, \\dots, 6\\}^2$ yielding each target sum out of $36$ equally likely outcomes.',
          solution:
            'There are $6 \\times 6 = 36$ equally likely ordered rolls $(a, b)$:\n- Sum $7$: $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ — $6$ ways.\n- Sum $8$: $(2,6),(3,5),(4,4),(5,3),(6,2)$ — $5$ ways.\n- Sum $9$: $(3,6),(4,5),(5,4),(6,3)$ — $4$ ways.\n- Sum $10$: $(4,6),(5,5),(6,4)$ — $3$ ways.\n- Sum $11$: $(5,6),(6,5)$ — $2$ ways.\n\nSince $11$ occurs in only $2$ out of $36$ ways, it is the least likely of the given sums.',
          rubric: [
            { code: 'M4', text: 'Counts the number of outcomes for each sum $7, 8, 9, 10, 11$ ($6, 5, 4, 3, 2$ ways respectively).' },
            { code: 'A2', text: 'Identifies $11$ as least likely, option E.' }
          ]
        },
        {
          label: '16',
          marks: 6,
          prompt:
            'Each of the digits $7, 1, 3, 6, 8,$ and $2$ is placed into one of the squares below to make an expression containing three $2$-digit numbers.\nWhen the first two $2$-digit numbers are added and the third is subtracted, the greatest possible result is\n\nA. $139$\nB. $145$\nC. $147$\nD. $149$\nE. $138$',
          figures: [
            {
              src: '/papers/cemc-gauss7-2025/fig-16.webp',
              alt: 'Expression template showing pairs of blank digit squares combined by addition and subtraction.',
              caption: 'Blank digit squares for the three 2-digit numbers.'
            }
          ],
          answer: 'C. $147$',
          principle: 'Maximize place-value weights: place the largest digits in the positive tens places and the smallest digits in the subtracted number.',
          solution:
            'To maximize $(10t_1 + u_1) + (10t_2 + u_2) - (10t_3 + u_3)$:\n- Assign the two largest digits, $8$ and $7$, to the positive tens digits $t_1, t_2$.\n- Assign the smallest digit, $1$, to the subtracted tens digit $t_3$.\n- Among the remaining digits $2, 3, 6$, assign the two largest ($6$ and $3$) to $u_1, u_2$ and the smallest ($2$) to $u_3$.\n\nFor example, $86 + 73 - 12 = 159 - 12 = 147$. (Swapping ones digits between the first two numbers gives the same maximum: $83 + 76 - 12 = 147$.)',
          rubric: [
            { code: 'M3', text: 'Places $8, 7$ in the positive tens digits, $1$ in the subtracted tens digit, and $6, 3, 2$ optimally in the ones digits.' },
            { code: 'A3', text: 'Evaluates $86 + 73 - 12 = 147$, option C.' }
          ]
        },
        {
          label: '17',
          marks: 6,
          prompt:
            'Savanah tossed a fair coin some number of times and $50\\%$ of those tosses resulted in tails. She then tossed the coin one final time and the result was tails. If $60\\%$ of all tosses resulted in tails, how many tosses did she make in total?\n\nA. $3$\nB. $9$\nC. $8$\nD. $5$\nE. $10$',
          answer: 'D. $5$',
          principle: 'Set up a linear equation relating the number of tails before and after the final toss.',
          solution:
            'Let $n$ be the total number of tosses Savanah made, so she made $n - 1$ tosses before the final toss. Half of those $n - 1$ tosses were tails, and the final toss was also tails, so the total number of tails is\n$$\\frac{1}{2}(n - 1) + 1.$$\nSince $60\\% = \\frac{3}{5}$ of all $n$ tosses were tails,\n$$0.5(n - 1) + 1 = 0.6n \\implies 0.5n + 0.5 = 0.6n \\implies 0.1n = 0.5 \\implies n = 5.$$\nCheck: $2$ tails in the first $4$ tosses ($50\\%$), plus $1$ more tail gives $3$ tails out of $5$ tosses ($60\\%$).',
          rubric: [
            { code: 'M3', text: 'Forms the equation $0.5(n - 1) + 1 = 0.6n$ (or matches $\\frac{3}{5}$ with $\\frac{2+1}{4+1}$).' },
            { code: 'A3', text: 'Solves $n = 5$, option D.' }
          ]
        },
        {
          label: '18',
          marks: 6,
          prompt:
            'Four of the angle measurements $62^\\circ, 85^\\circ, 99^\\circ, 108^\\circ, 114^\\circ$ are the measures of the angles in the same quadrilateral. Which angle measure is not?\n\nA. $62^\\circ$\nB. $85^\\circ$\nC. $99^\\circ$\nD. $108^\\circ$\nE. $114^\\circ$',
          answer: 'D. $108^\\circ$',
          principle: 'The interior angles of any quadrilateral sum to $360^\\circ$, so the excluded angle equals the total sum minus $360^\\circ$.',
          solution:
            'The sum of the four interior angles of a quadrilateral is $360^\\circ$. Adding all five given angle measures gives\n$$62^\\circ + 85^\\circ + 99^\\circ + 108^\\circ + 114^\\circ = 468^\\circ.$$\nSubtracting $360^\\circ$ leaves the angle that is not in the quadrilateral:\n$$468^\\circ - 360^\\circ = 108^\\circ.$$\nCheck: $62^\\circ + 85^\\circ + 99^\\circ + 114^\\circ = 360^\\circ$.',
          rubric: [
            { code: 'M3', text: 'Computes the sum of all five angles ($468^\\circ$) and subtracts the quadrilateral angle sum $360^\\circ$.' },
            { code: 'A3', text: 'Finds $108^\\circ$, option D.' }
          ]
        },
        {
          label: '19',
          marks: 6,
          prompt:
            'Ten students each receive a card numbered with a different integer from $10$ to $19$. The students are each given the checklist shown and they check off each box that describes their number. How many students check off exactly two boxes?\n\nA. $10$\nB. $9$\nC. $8$\nD. $7$\nE. $6$',
          figures: [
            {
              src: '/papers/cemc-gauss7-2025/fig-19.webp',
              alt: 'Checklist with five checkboxes for Odd Number, Even Number, Prime Number, Composite Number, and Perfect Square.',
              caption: 'Number property checklist.'
            }
          ],
          answer: 'B. $9$',
          principle: 'Partition the checklist into mutually exclusive pairs and check which numbers satisfy the extra condition.',
          solution:
            'Every integer from $10$ to $19$ is:\n- either Odd or Even (exactly $1$ of the first two boxes),\n- and, being greater than $1$, either Prime or Composite (exactly $1$ of the next two boxes).\n\nThus, every student checks off exactly $2$ of the first four boxes. A student checks off a third box if and only if their number is a perfect square. Among $10, 11, \\dots, 19$, only $16 = 4^2$ is a perfect square, so the remaining $10 - 1 = 9$ students check off exactly two boxes.',
          rubric: [
            { code: 'M4', text: 'Shows every number in $10\\text{–}19$ checks $1$ parity box and $1$ prime/composite box, leaving only perfect squares with $3$ checks.' },
            { code: 'A2', text: 'Identifies $16$ as the sole square and counts $10 - 1 = 9$ students, option B.' }
          ]
        },
        {
          label: '20',
          marks: 6,
          prompt:
            'In the diagram, $\\angle PQR = \\angle QRS = \\angle TPQ = 60^\\circ$. Also, $PT$ is parallel to $SR$ and $TS$ is parallel to $QR$. If $PQ = 10\\text{ cm}$ and $TS = 6\\text{ cm}$, the perimeter of figure $PQRST$ is\n\nA. $42\\text{ cm}$\nB. $36\\text{ cm}$\nC. $40\\text{ cm}$\nD. $38\\text{ cm}$\nE. $44\\text{ cm}$',
          figures: [
            {
              src: '/papers/cemc-gauss7-2025/fig-20.webp',
              alt: 'Polygon PQRST with angle markings, parallel arrows, and labeled side lengths.',
              caption: 'Diagram of figure PQRST.'
            }
          ],
          answer: 'A. $42\\text{ cm}$',
          principle: 'Extend $PT$ to meet $QR$ at $U$ to split the figure into an equilateral triangle and a parallelogram.',
          solution:
            'Extend segment $PT$ to meet $QR$ at point $U$.\n- Because $PT \\parallel SR$ and $TS \\parallel QR$, the quadrilateral $TURS$ is a parallelogram, so $TU = SR$ and $UR = TS = 6\\text{ cm}$.\n- In $\\triangle PQU$, $\\angle PQU = 60^\\circ$ and $\\angle QPU = 60^\\circ$, so $\\angle PUQ = 180^\\circ - 60^\\circ - 60^\\circ = 60^\\circ$. Hence $\\triangle PQU$ is equilateral with $PQ = QU = PU = 10\\text{ cm}$.\n\nWriting the perimeter of $PQRST$ using $QR = QU + UR$ and $SR = TU$:\n$$PQ + QR + SR + TS + PT = PQ + QU + UR + TU + TS + PT = PQ + QU + UR + (PT + TU) + TS.$$\nSince $PT + TU = PU = 10\\text{ cm}$, the perimeter is\n$$10 + 10 + 6 + 10 + 6 = 42\\text{ cm}.$$',
          rubric: [
            { code: 'M2', text: 'Extends $PT$ to $U$ on $QR$ to form parallelogram $TURS$ ($TU = SR$, $UR = 6\\text{ cm}$).' },
            { code: 'M2', text: 'Proves $\\triangle PQU$ is equilateral with $QU = PU = 10\\text{ cm}$.' },
            { code: 'A2', text: 'Sums the sides to $42\\text{ cm}$, option A.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Part C',
      marks: 40,
      stem: 'Each correct answer is worth $8$ marks (Questions 21–25).',
      parts: [
        {
          label: '21',
          marks: 8,
          prompt:
            'Three circles have radii $1\\text{ cm}$, $5\\text{ cm}$, and $x\\text{ cm}$. If the mean (average) area of the three circles is $30\\pi\\text{ cm}^2$, the value of $x$ is\n\nA. $64$\nB. $5$\nC. $24$\nD. $8$\nE. $2$',
          answer: 'D. $8$',
          principle: 'Multiply the mean area by $3$ to get the total area, then solve $\\pi r_1^2 + \\pi r_2^2 + \\pi r_3^2 = \\text{total area}$.',
          solution:
            'The areas of the three circles are $\\pi(1)^2 = \\pi$, $\\pi(5)^2 = 25\\pi$, and $\\pi x^2$. Because their mean area is $30\\pi\\text{ cm}^2$, the sum of the three areas is $3 \\times 30\\pi = 90\\pi\\text{ cm}^2$:\n$$\\pi + 25\\pi + x^2\\pi = 90\\pi \\implies 26 + x^2 = 90 \\implies x^2 = 64.$$\nSince $x > 0$ is a radius, $x = 8$.',
          rubric: [
            { code: 'M3', text: 'Uses the mean area $30\\pi$ to write total area $\\pi(1^2 + 5^2 + x^2) = 3 \\times 30\\pi = 90\\pi$.' },
            { code: 'M3', text: 'Solves $x^2 = 90 - 26 = 64$.' },
            { code: 'A2', text: 'Takes the positive root $x = 8$, option D.' }
          ]
        },
        {
          label: '22',
          marks: 8,
          prompt:
            'Each of three doors is painted one colour: either black or white or gold. Each colour is equally likely to be chosen for each door. What is the probability that at least one colour is not used?\n\nA. $\\frac{7}{9}$\nB. $\\frac{5}{9}$\nC. $\\frac{20}{27}$\nD. $\\frac{2}{9}$\nE. $\\frac{2}{3}$',
          answer: 'A. $\\frac{7}{9}$',
          principle: 'Use complementary counting: $P(\\text{at least one colour unused}) = 1 - P(\\text{all three colours used})$.',
          solution:
            'Each of the $3$ doors has $3$ independent colour choices, giving $3 \\times 3 \\times 3 = 27$ equally likely colourings in total.\nFor all $3$ colours to be used, the $3$ doors must receive a permutation of $\\{\\text{black}, \\text{white}, \\text{gold}\\}$, which happens in $3 \\times 2 \\times 1 = 6$ ways.\nTherefore, the probability that at least one colour is not used is\n$$1 - \\frac{6}{27} = \\frac{21}{27} = \\frac{7}{9}.$$',
          rubric: [
            { code: 'M3', text: 'Counts $3^3 = 27$ total colourings and $3! = 6$ colourings using all three colours.' },
            { code: 'M3', text: 'Applies the complement $1 - \\frac{6}{27} = \\frac{21}{27}$.' },
            { code: 'A2', text: 'Reduces to $\\frac{7}{9}$, option A.' }
          ]
        },
        {
          label: '23',
          marks: 8,
          prompt:
            'Suppose $a, b$ and $c$ are the last three digits of the six-digit integer $N = 111abc$. If $N$ is divisible by $18$, how many possibilities are there for $N$?\n\nA. $50$\nB. $55$\nC. $56$\nD. $110$\nE. $112$',
          answer: 'C. $56$',
          principle: 'Count the multiples of $18$ in the interval $[111000, 111999]$ by finding the smallest and largest multiples.',
          solution:
            'The six-digit numbers of the form $111abc$ are precisely the integers from $111\\,000$ to $111\\,999$ inclusive. Divide the endpoints by $18$:\n- $111\\,000 \\div 18 = 6166\\frac{2}{3}$, so the smallest multiple of $18$ at least $111\\,000$ is $18 \\times 6167 = 111\\,006$.\n- $111\\,999 \\div 18 = 6222\\frac{1}{6}$, so the largest multiple of $18$ at most $111\\,999$ is $18 \\times 6222 = 111\\,996$.\n\nEvery integer multiple $18k$ with $6167 \\le k \\le 6222$ lies in this range, giving\n$$6222 - 6167 + 1 = 56\\text{ possibilities for } N.$$',
          rubric: [
            { code: 'M3', text: 'Identifies the range $[111\\,000, 111\\,999]$ and finds the first multiple $18 \\times 6167 = 111\\,006$.' },
            { code: 'M3', text: 'Finds the last multiple $18 \\times 6222 = 111\\,996$.' },
            { code: 'A2', text: 'Counts $6222 - 6167 + 1 = 56$, option C.' }
          ]
        },
        {
          label: '24',
          marks: 8,
          prompt:
            'In the diagram, each row, each column, and each shape shown by the thick lines must contain the letters $A$, $B$, $C$, $D$, and $E$. If each square contains exactly one letter, what letter must be placed in the shaded square?\n\nA. $A$\nB. $B$\nC. $C$\nD. $D$\nE. $E$',
          figures: [
            {
              src: '/papers/cemc-gauss7-2025/fig-24.webp',
              alt: 'Five-by-five grid divided by thick borders into irregular regions with prefilled letters and one shaded square.',
              caption: 'Puzzle grid with thick-bordered regions.'
            }
          ],
          answer: 'B. $B$',
          principle: 'Eliminate letters row-by-row, column-by-column, and region-by-region using $[\\text{row}, \\text{col}]$ coordinates.',
          solution:
            'Label the cells $[r, c]$ ($1 \\le r, c \\le 5$) and name the five thick-bordered regions: Region $1$ (contains $[3,2]=C$ and shaded $[4,1]$), Region $2$ (top right, $[2,4]=A$), Region $3$ (middle, $[2,3]=D$), Region $4$ (right, $[5,5]=E$), and Region $5$ (bottom left, $[5,3]=B$).\n\n1. In Row $2$, $C$ cannot be in $[2,1]$ (Region $1$ already has $C$) or $[2,2]$ (Column $2$ has $C$), and $[2,3]=D$, $[2,4]=A$, so $[2,5] = C$.\n2. In Region $5$, Row $5$ already contains $E$ at $[5,5]$, so $E$ must be in $[4,2]$.\n3. Row $2$ is missing $B$ and $E$; since Column $2$ now has $E$ at $[4,2]$, we get $[2,1] = E$ and $[2,2] = B$.\n4. In Row $1$, $[1,2], [1,3], [1,4], [1,5]$ are all in Region $2$ (which already contains $A$), so $[1,1] = A$.\n5. In Region $5$, the remaining empty cells $[5,1], [5,2], [5,4]$ must contain $A, C, D$. Since Column $4$ already has $A$ at $[2,4]$ and Column $1$ already has $A$ at $[1,1]$, we get $[5,2] = A$. Moreover, Region $1$ needs $D$ in Column $1$ (at $[3,1]$ or $[4,1]$), so $[5,1] \\ne D$, forcing $[5,4] = D$ and $[5,1] = C$.\n6. Region $4$ ($[2,5]=C, [5,5]=E, [3,4], [3,5], [4,5]$) needs $A, B, D$. Column $4$ already has $A$ and $D$, so $[3,4] = B$.\n7. Finally, Region $1$ still needs $B$ and $D$ in $[3,1]$ and $[4,1]$. Since Row $3$ now contains $B$ at $[3,4]$, $[3,1]$ cannot be $B$, forcing $[3,1] = D$ and the shaded square $[4,1] = B$.',
          rubric: [
            { code: 'M3', text: 'Deduces $[2,5]=C$, $[4,2]=E$, $[2,1]=E$, $[2,2]=B$, and $[1,1]=A$.' },
            { code: 'M3', text: 'Forces $[5,2]=A$, $[5,4]=D$, and $[3,4]=B$ via column and region constraints.' },
            { code: 'A2', text: 'Places $D$ at $[3,1]$ and $B$ in the shaded square $[4,1]$, option B.' }
          ]
        },
        {
          label: '25',
          marks: 8,
          prompt:
            'In an *arithmetic grid*, adjacent numbers increase by a fixed integer $a > 0$ moving left to right within each row. Also, adjacent numbers increase by a fixed integer $b > 0$ moving top to bottom within each column. For example, the grid shown is a $3 \\times 3$ arithmetic grid with $a = 2$ and $b = 5$.\nSuppose that an $8 \\times 8$ arithmetic grid has a $1$ in the top left corner, and a number less than $75$ in the bottom right corner. How many such grids have a $45$ somewhere in column $5$?\n\nA. $6$\nB. $3$\nC. $7$\nD. $5$\nE. $4$',
          figures: [
            {
              src: '/papers/cemc-gauss7-2025/fig-25.webp',
              alt: 'Example three-by-three arithmetic grid illustrating horizontal and vertical increments.',
              caption: 'Example 3 × 3 arithmetic grid.'
            }
          ],
          answer: 'A. $6$',
          principle: 'Express the entry at row $r$, column $c$ as $1 + (c - 1)a + (r - 1)b$, bound $a + b$ from the bottom-right corner, and count positive integer solutions $(a, b)$.',
          solution:
            'With $1$ at row $1$, column $1$, the entry at row $r$, column $c$ ($1 \\le r, c \\le 8$) is\n$$[r, c] = 1 + (c - 1)a + (r - 1)b.$$\nThe bottom-right corner $[8, 8] = 1 + 7a + 7b$ is less than $75$, so\n$$1 + 7a + 7b < 75 \\implies 7(a + b) < 74 \\implies a + b \\le 10$$\nsince $a$ and $b$ are positive integers.\n\nIn column $5$, the entry in row $r$ is $[r, 5] = 1 + 4a + (r - 1)b$. Setting this equal to $45$ gives\n$$4a + (r - 1)b = 44.$$\nFor rows $r \\le 5$, $(r - 1) \\le 4$, so $4a + (r - 1)b \\le 4(a + b) \\le 40 < 44$. Thus $45$ can only appear in rows $6, 7,$ or $8$:\n- **Row $6$ ($r = 6$):** $4a + 5b = 44$. Since $4 \\mid 4a$ and $4 \\mid 44$, we need $4 \\mid b$. For $b = 4$, $a = 6$ ($a+b=10 \\le 10$); for $b = 8$, $a = 1$ ($a+b=9 \\le 10$); $b \\ge 12$ gives $a < 0$. ($2$ grids)\n- **Row $7$ ($r = 7$):** $4a + 6b = 44 \\iff 2a + 3b = 22$. Thus $2 \\mid b$: for $b = 2$, $a = 8$ ($a+b=10$); for $b = 4$, $a = 5$ ($a+b=9$); for $b = 6$, $a = 2$ ($a+b=8$); $b \\ge 8$ gives $a < 0$. ($3$ grids)\n- **Row $8$ ($r = 8$):** $4a + 7b = 44$. Thus $4 \\mid b$: for $b = 4$, $a = 4$ ($a+b=8$); $b \\ge 8$ gives $a < 0$. ($1$ grid)\n\nIn total, there are $2 + 3 + 1 = 6$ such arithmetic grids.',
          rubric: [
            { code: 'M3', text: 'Establishes $[r, c] = 1 + (c-1)a + (r-1)b$ and deduces $a + b \\le 10$ from $1 + 7a + 7b < 75$.' },
            { code: 'M3', text: 'Rules out rows $1\\text{–}5$ and finds all positive integer pairs $(a, b)$ with $a+b \\le 10$ for rows $6, 7, 8$ ($2, 3,$ and $1$ pairs).' },
            { code: 'A2', text: 'Sums $2 + 3 + 1 = 6$ grids, option A.' }
          ]
        }
      ]
    }
  ]
};
