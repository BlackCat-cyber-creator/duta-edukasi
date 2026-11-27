/**
 * Paket Soal: ASMOPSS 2025 Mathematics Primary (Theoretical Round)
 * Sumber: Asian Science & Mathematics Olympiad for Primary and Secondary Schools 2025,
 * Mathematics Primary (ASMOPSS 2025, Math Primary.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 17 soal asli dimuat lengkap: Part 1 Multiple Choice (1–5), Part 2 Short Answer (6–10),
 * dan Part 3 Essay (11–17). Soal 3 dilengkapi crop diagram asli (.webp).
 */
export default {
  id: 'asmopss-2025-primary',
  slug: 'asmopss-2025-primary',
  subject: 'olimpiade-mat',
  grade: 6,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'ASMOPSS 2025 Mathematics Primary: Theoretical Round (Short Answer & Essay)',
  relatedChapterIds: [
    'sd5-bab2-kpk-fpb',
    'sd5-bab5-luas-daerah-bangun-datar',
    'sd6-bab1-pecahan-desimal',
    'sd6-bab2-rasio'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'ASMOPSS',
  title: 'ASMOPSS 2025 \u2014 Mathematics Primary',
  totalMarks: 100,
  instructions:
    'Attempt all 17 questions (time allowed: 180 minutes; no calculators). Part 1 has 5 multiple-choice questions worth 2 points each (10 points). Part 2 has 5 short-answer problems worth 4 points each (20 points). Part 3 has 7 essay problems worth 10 points each (70 points). No points are deducted for incorrect answers. Question 3 includes a grid diagram.',
  source: {
    org: 'ASMOPSS',
    file: 'ASMOPSS 2025, Math Primary.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Part 1: Multiple Choice',
      marks: 10,
      stem: 'Choose the correct answer for each question (5 questions, 2 points each).',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            'A square sheet of paper $PQRS$ is given. Points $M$ and $N$ are located on side $QR$ such that $QM = MN = NR$. Points $F$ and $G$ are located on side $PS$ such that $PF = FG = GS$. The paper is then folded along line $FN$.\nWhat is the shape of the overlapping region of the paper?\n\nA. Triangle\nB. Square\nC. Pentagon (five sided polygon)\nD. Hexagon (six sided polygon)\nE. Octagon (eight sided polygon)',
          answer: 'C. Pentagon (five sided polygon)',
          principle:
            'Place the square on a coordinate grid of side $3$ and reflect the folded portion across the fold line to find which sides of the original square intersect the folded boundary.',
          solution:
            'Assign coordinates to the square of side length $3$: $P(0, 0)$, $Q(0, 3)$, $R(3, 3)$, and $S(3, 0)$.\nSince $QM = MN = NR = 1$ on $QR$, we have $M(1, 3)$ and $N(2, 3)$. Since $PF = FG = GS = 1$ on $PS$, we have $F(1, 0)$ and $G(2, 0)$.\nThe fold line $FN$ passes through $F(1, 0)$ and $N(2, 3)$, so its equation is $y = 3(x - 1)$, or $3x - y - 3 = 0$.\nReflecting a point $(x, y)$ across $3x - y - 3 = 0$ gives:\n- $P(0, 0) \\mapsto P\'(1.8, -0.6)$ (below side $PS$),\n- $Q(0, 3) \\mapsto Q\'(3.6, 1.8)$ (to the right of side $RS$).\n\nNow trace the boundary of the overlapping region inside the square:\n- Segment $FP\'$ starts at $F(1, 0)$ and goes immediately below $y = 0$, leaving the square at $F(1, 0)$.\n- Segment $P\'Q\'$ enters the square across $PS$ ($y = 0$) at $(2.25, 0)$ and exits across $RS$ ($x = 3$) at $(3, 1)$.\n- Segment $Q\'N$ re-enters across $RS$ ($x = 3$) at $(3, 2.25)$ and ends at $N(2, 3)$.\n\nThus the overlapping region is bounded by the five vertices $F(1, 0)$, $(2.25, 0)$, $(3, 1)$, $(3, 2.25)$, and $N(2, 3)$, which form a pentagon.',
          rubric: [
            {
              code: 'M1',
              text: 'Determines the reflected vertices $P\'$ and $Q\'$ across $FN$ and finds where the folded edges cross sides $PS$ and $RS$.'
            },
            {
              code: 'A1',
              text: 'Identifies the 5-sided overlapping region as a pentagon, option C.'
            }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Yosu has five daughters: Alena, Manda, Juwi, Sisi, and Tita.\nThey were born in the order given, with each daughter born two years apart.\nAlena is five times as old as Tita.\nHow old is Juwi?\n\nA. $4$\nB. $6$\nC. $8$\nD. $10$\nE. $12$',
          answer: 'B. $6$',
          principle:
            'Express all five ages in terms of the youngest daughter\'s age using the constant $2$-year gap.',
          solution:
            'Let Tita\'s age be $t$. Since each daughter was born $2$ years apart in the order Alena, Manda, Juwi, Sisi, Tita:\n- Tita $= t$\n- Sisi $= t + 2$\n- Juwi $= t + 4$\n- Manda $= t + 6$\n- Alena $= t + 8$\n\nGiven that Alena is five times as old as Tita:\n$$t + 8 = 5t \\implies 4t = 8 \\implies t = 2.$$\nTherefore, Juwi\'s age is $t + 4 = 2 + 4 = 6$.',
          rubric: [
            {
              code: 'M1',
              text: 'Sets up the $8$-year age difference between Alena and Tita and solves $t + 8 = 5t$ to get $t = 2$.'
            },
            {
              code: 'A1',
              text: 'Finds Juwi\'s age as $6$, option B.'
            }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'Given $PQRS$ is a square with side length equal to $4$.\n\nWhat is the area of the jug? (Use $\\pi = 3$)\n\nA. $6$\nB. $6.5$\nC. $7$\nD. $7.5$\nE. $8$',
          figures: [
            {
              src: '/papers/asmopss-2025-primary/fig-3.webp',
              alt: 'A four-by-four unit grid inside square PQRS showing a shaded jug-shaped region bounded by circular arcs.',
              caption: 'Grid diagram of the shaded jug inside square PQRS for Question 3.'
            }
          ],
          answer: 'E. $8$',
          principle:
            'Split the $4 \\times 4$ square into four $2 \\times 2$ quadrants and sum the areas of unit squares, quarter-circles, and their complements.',
          solution:
            'Divide the $4 \\times 4$ square $PQRS$ into four $2 \\times 2$ quadrants:\n1. **Top-left $2 \\times 2$ quadrant:** consists of $1$ full unit square, $1$ quarter-circle of radius $1$ (area $\\frac{\\pi}{4}$), and $1$ unit square minus a quarter-circle of radius $1$ (area $1 - \\frac{\\pi}{4}$). Its area is:\n   $$1 + \\frac{\\pi}{4} + \\left(1 - \\frac{\\pi}{4}\\right) = 2.$$\n2. **Top-right $2 \\times 2$ quadrant:** is a $2 \\times 2$ square with a quarter-circle of radius $2$ removed. Its area is:\n   $$2^2 - \\frac{1}{4}\\pi(2^2) = 4 - \\pi = 4 - 3 = 1.$$\n3. **Bottom-left $2 \\times 2$ quadrant:** is a quarter-circle of radius $2$. Its area is:\n   $$\\frac{1}{4}\\pi(2^2) = \\pi = 3.$$\n4. **Bottom-right $2 \\times 2$ quadrant:** consists of $1$ full unit square, $1$ unit square minus a quarter-circle of radius $1$ (area $1 - \\frac{\\pi}{4}$), and $1$ quarter-circle of radius $1$ (area $\\frac{\\pi}{4}$). Its area is:\n   $$1 + \\left(1 - \\frac{\\pi}{4}\\right) + \\frac{\\pi}{4} = 2.$$\n\nSumming all four quadrants gives:\n$$2 + 1 + 3 + 2 = 8.$$',
          rubric: [
            {
              code: 'M1',
              text: 'Decomposes the jug into unit squares and circular arc regions across the four $2 \\times 2$ quadrants.'
            },
            {
              code: 'A1',
              text: 'Computes the total area as $8$, option E.'
            }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Let $a = 0.252525\\ldots$, and $b = 0.525$.\nWhat is the digit of the $2025^{\\text{th}}$ decimal place of the product: $a \\times b$?\n\nA. $3$\nB. $4$\nC. $5$\nD. $6$\nE. $7$',
          answer: 'E. $7$',
          principle:
            'Convert the repeating decimal $a$ and terminating decimal $b$ into fractions, multiply them, and identify the repeating decimal cycle.',
          solution:
            'Convert both numbers into fractions in lowest terms:\n$$a = 0.252525\\ldots = \\frac{25}{99}, \\qquad b = 0.525 = \\frac{525}{1000} = \\frac{21}{40}.$$\nMultiply $a$ and $b$:\n$$a \\times b = \\frac{25}{99} \\times \\frac{21}{40} = \\frac{5 \\times 7}{33 \\times 8} = \\frac{35}{264}.$$\nPerforming long division on $\\frac{35}{264}$ gives:\n$$\\frac{35}{264} = 0.132575757\\ldots = 0.132\\overline{57}.$$\nStarting from the $4^{\\text{th}}$ decimal place, the digits alternate $5, 7, 5, 7, \\ldots$:\n- even decimal places ($4, 6, 8, \\ldots$) are $5$,\n- odd decimal places ($5, 7, 9, \\ldots$) are $7$.\n\nSince $2025$ is odd and $2025 \\ge 5$, the $2025^{\\text{th}}$ decimal place is $7$.',
          rubric: [
            {
              code: 'M1',
              text: 'Expresses $a \\times b = \\frac{25}{99} \\times \\frac{21}{40} = \\frac{35}{264}$ and finds its decimal expansion $0.132\\overline{57}$.'
            },
            {
              code: 'A1',
              text: 'Determines that the $2025^{\\text{th}}$ decimal digit is $7$, option E.'
            }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'If $\\frac{7}{12} + \\frac{5}{12} \\times \\frac{7}{11} + \\frac{5}{12} \\times \\frac{4}{11} \\times \\frac{7}{10} + \\frac{5}{12} \\times \\frac{4}{11} \\times \\frac{3}{10} \\times \\frac{7}{9} = \\frac{m}{n}$, with $m$ and $n$ has no common factor.\nWhat is the value of $n - m$?\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$\nE. $5$',
          answer: 'A. $1$',
          principle:
            'Interpret the sum as a telescoping/complementary probability (drawing from $7$ winning and $5$ non-winning items without replacement) or compute directly using common denominators.',
          solution:
            'Notice that the expression represents the probability of drawing at least one target item in $4$ draws without replacement from $12$ items ($7$ target, $5$ other). Its complement is drawing none of the $7$ target items in all $4$ draws:\n$$1 - \\frac{5}{12} \\times \\frac{4}{11} \\times \\frac{3}{10} \\times \\frac{2}{9} = 1 - \\frac{120}{11880} = 1 - \\frac{1}{99} = \\frac{98}{99}.$$\n(Direct check by factoring from the right: $\\frac{7}{10} + \\frac{3}{10}\\cdot\\frac{7}{9} = \\frac{28}{30} = \\frac{14}{15}$; then $\\frac{7}{11} + \\frac{4}{11}\\cdot\\frac{14}{15} = \\frac{161}{165}$; finally $\\frac{7}{12} + \\frac{5}{12}\\cdot\\frac{161}{165} = \\frac{7}{12} + \\frac{161}{396} = \\frac{231 + 161}{396} = \\frac{392}{396} = \\frac{98}{99}$.)\n\nSince $\\gcd(98, 99) = 1$, we have $m = 98$ and $n = 99$, so:\n$$n - m = 99 - 98 = 1.$$',
          rubric: [
            {
              code: 'M1',
              text: 'Simplifies the expression to the reduced fraction $\\frac{98}{99}$.'
            },
            {
              code: 'A1',
              text: 'Computes $n - m = 99 - 98 = 1$, option A.'
            }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Part 2: Short Answer Problems',
      marks: 20,
      stem: 'Solve each short-answer problem (5 questions, 4 points each).',
      parts: [
        {
          label: '6',
          marks: 4,
          prompt: 'Calculate: $(879 \\times 877) - (123 \\times 121)$.',
          answer: '$756000$',
          principle:
            'Rewrite each product as a difference of squares $(x + 1)(x - 1) = x^2 - 1$, then apply $a^2 - b^2 = (a - b)(a + b)$.',
          solution:
            'Notice that $879 \\times 877 = (878 + 1)(878 - 1) = 878^2 - 1$ and $123 \\times 121 = (122 + 1)(122 - 1) = 122^2 - 1$.\nSubtracting gives:\n$$(879 \\times 877) - (123 \\times 121) = (878^2 - 1) - (122^2 - 1) = 878^2 - 122^2.$$\nFactor using the difference of squares:\n$$878^2 - 122^2 = (878 - 122)(878 + 122) = 756 \\times 1000 = 756000.$$',
          rubric: [
            {
              code: 'M2',
              text: 'Applies $(878^2 - 1) - (122^2 - 1) = 878^2 - 122^2$ and factors $(878 - 122)(878 + 122)$.'
            },
            {
              code: 'A2',
              text: 'Evaluates the product to $756000$.'
            }
          ]
        },
        {
          label: '7',
          marks: 4,
          prompt:
            'Given a rectangular sheet of paper. Cut it into two pieces, both having the same size and shape of a pentagon (a polygon with $5$ sides). Draw to show how to cut it.',
          answer:
            'Cut along a three-segment zigzag path connecting two opposite corners through two points symmetric about the rectangle\'s center, such as $A(0, h) \\to M_1(w/4, h/2) \\to M_2(3w/4, h/2) \\to C(w, 0)$.',
          principle:
            'A $180^\\circ$ rotationally symmetric $3$-segment cut between two opposite corners preserves the $2$ remaining edges of each half and adds $3$ cut edges, giving two congruent $5$-sided polygons.',
          solution:
            'Label the rectangle $ABCD$ with vertices $A(0, h)$ (top-left), $B(w, h)$ (top-right), $C(w, 0)$ (bottom-right), and $D(0, 0)$ (bottom-left), and center $O(w/2, h/2)$.\n\nChoose two interior points symmetric about $O$ that are not collinear with $AC$, for example:\n$$M_1\\left(\\frac{w}{4}, \\frac{h}{2}\\right) \\quad \\text{and} \\quad M_2\\left(\\frac{3w}{4}, \\frac{h}{2}\\right).$$\nMake a $3$-segment cut along $A \\to M_1 \\to M_2 \\to C$:\n```\nA ---------------- B\n| \\                |\n|  M1 ---- M2      |\n|           \\      |\nD ---------------- C\n```\nVerification:\n1. **Bottom-left piece** has vertices $D, C, M_2, M_1, A$ ($5$ sides, a pentagon).\n2. **Top-right piece** has vertices $B, A, M_1, M_2, C$ ($5$ sides, a pentagon).\n3. **Congruence:** A $180^\\circ$ rotation about the center $O$ maps $D \\leftrightarrow B$, $C \\leftrightarrow A$, and $M_2 \\leftrightarrow M_1$, so the two pentagons have the exact same size and shape.',
          rubric: [
            {
              code: 'M2',
              text: 'Constructs a centrally symmetric $3$-segment cut connecting two opposite corners through two interior points not collinear with the diagonal.'
            },
            {
              code: 'A2',
              text: 'Clearly shows both resulting pieces are congruent $5$-sided polygons (pentagons).'
            }
          ]
        },
        {
          label: '8',
          marks: 4,
          prompt:
            'Determine all three-digit numbers that have the property that the number obtained by removing the first digit is $\\frac{1}{5}$ of the original number.',
          answer: '$125, 250, 375$',
          principle:
            'Write the three-digit number as $100a + m$, where $a$ is the hundreds digit and $m$ is the two-digit number formed by the remaining digits, then solve $m = \\frac{1}{5}(100a + m)$.',
          solution:
            'Let the three-digit number be $100a + m$, where $a \\in \\{1, 2, \\ldots, 9\\}$ is the first digit and $m$ ($0 \\le m \\le 99$) is the number obtained after removing $a$.\nFrom the given condition:\n$$m = \\frac{1}{5}(100a + m) \\implies 5m = 100a + m \\implies 4m = 100a \\implies m = 25a.$$\nSince $m < 100$, we must have $25a < 100$, so $a \\in \\{1, 2, 3\\}$:\n- $a = 1 \\implies m = 25 \\implies 125$ (check: $25 = \\frac{1}{5} \\times 125$),\n- $a = 2 \\implies m = 50 \\implies 250$ (check: $50 = \\frac{1}{5} \\times 250$),\n- $a = 3 \\implies m = 75 \\implies 375$ (check: $75 = \\frac{1}{5} \\times 375$).\n\nTherefore, all such three-digit numbers are $125, 250,$ and $375$.',
          rubric: [
            {
              code: 'M2',
              text: 'Sets up $m = \\frac{1}{5}(100a + m)$ and derives $m = 25a$ with $0 \\le m < 100$.'
            },
            {
              code: 'A2',
              text: 'Lists all three numbers $125, 250, 375$.'
            }
          ]
        },
        {
          label: '9',
          marks: 4,
          prompt:
            'Find the largest number $N = \\overline{x_1 x_2 \\ldots x_k}$, which satisfies all the following conditions:\ni. All the digits of $N$ are distinct.\nii. $\\overline{x_1 x_2}, \\overline{x_2 x_3}, \\ldots, \\overline{x_{k-1} x_k}$, i.e., all numbers formed with $2$ consecutive digits of $N$ are prime numbers.',
          answer: '$89731$',
          principle:
            'Any two-digit prime must end in $1, 3, 7,$ or $9$, so at most five distinct digits can appear in $N$ and maximizing $N$ starts by maximizing the length $k$ and the leading digits.',
          solution:
            'Every two-digit prime ends in $1, 3, 7,$ or $9$. Therefore, all digits after the first digit $x_1$ must belong to $\\{1, 3, 7, 9\\}$. Since all digits of $N$ are distinct, $N$ can have at most $4$ digits after $x_1$, giving maximum length $k \\le 5$.\n\nFor $N$ to have $5$ digits, $x_1$ cannot be in $\\{1, 3, 7, 9\\}$ (otherwise at most $3$ digits from $\\{1, 3, 7, 9\\}$ remain, forcing $k \\le 4$). Thus the largest possible leading digit for a $5$-digit $N$ is $x_1 = 8$, using all four digits $\\{1, 3, 7, 9\\}$ afterward:\n1. From $x_1 = 8$, the largest valid second digit in $\\{1, 3, 7, 9\\}$ is $x_2 = 9$ (since $89$ is prime).\n2. From $x_2 = 9$, the remaining candidates in $\\{1, 3, 7\\}$ give $97$ (prime), $93 = 3 \\times 31$ (composite), and $91 = 7 \\times 13$ (composite). So $x_3 = 7$ is forced.\n3. From $x_3 = 7$, the remaining digits are $\\{1, 3\\}$. Both $73$ and $71$ are prime, giving two orders for the last two digits: $731$ ($73$ and $31$ are both prime) or $713$ ($13$ is prime).\n\nComparing $89731$ and $89713$, the largest valid number is $89731$. (Check: $89, 97, 73, 31$ are all prime and the digits $8, 9, 7, 3, 1$ are distinct.)',
          rubric: [
            {
              code: 'M2',
              text: 'Deduces that digits after $x_1$ must come from $\\{1, 3, 7, 9\\}$, bounding the maximum length to $5$ digits with $x_1 = 8$.'
            },
            {
              code: 'A2',
              text: 'Finds the largest valid number $89731$ and verifies all consecutive two-digit pairs are prime.'
            }
          ]
        },
        {
          label: '10',
          marks: 4,
          prompt:
            'Let the numerator and denominator of a fraction be positive integers whose sum is $109$.\nHere are all fractions that satisfy the requirement above:\n$$\\frac{108}{1}, \\frac{107}{2}, \\ldots, \\frac{3}{106}, \\frac{2}{107}, \\frac{1}{108}$$\nWhich one of those fractions is the closest to $1$?',
          answer: '$\\frac{54}{55}$',
          principle:
            'Minimize the distance $\\left|\\frac{a}{b} - 1\\right| = \\frac{|a - b|}{b}$ by choosing $a$ and $b$ as close as possible, then compare the two middle candidates.',
          solution:
            'Let the fraction be $\\frac{a}{b}$ with positive integers $a + b = 109$. Its distance to $1$ is:\n$$\\left|\\frac{a}{b} - 1\\right| = \\frac{|a - b|}{b}.$$\nTo make this distance as small as possible, $|a - b|$ should be as small as possible while $b$ is as large as possible. Since $a + b = 109$ is odd, the smallest positive difference is $|a - b| = 1$, which occurs at the two middle fractions:\n- $\\frac{55}{54}$, with distance $\\left|\\frac{55}{54} - 1\\right| = \\frac{1}{54}$,\n- $\\frac{54}{55}$, with distance $\\left|\\frac{54}{55} - 1\\right| = \\frac{1}{55}$.\n\nSince $\\frac{1}{55} < \\frac{1}{54}$, the fraction closest to $1$ is $\\frac{54}{55}$.',
          rubric: [
            {
              code: 'M2',
              text: 'Identifies the two closest candidates $\\frac{55}{54}$ and $\\frac{54}{55}$ and expresses their distances from $1$ as $\\frac{1}{54}$ and $\\frac{1}{55}$.'
            },
            {
              code: 'A2',
              text: 'Concludes $\\frac{54}{55}$ is closest to $1$.'
            }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Part 3: Essay',
      marks: 70,
      stem: 'Write complete solutions for the following essay problems (7 questions, 10 points each).',
      parts: [
        {
          label: '11',
          marks: 10,
          prompt:
            'Given acute triangle $ABC$. Point $D$ is on side $AC$, point $E$ is on side $AB$. Segment $CE$ intersect $BD$ at $F$. Segment $AF$ intersects $ED$ at $G$. Let $[ABC]$ denotes the area of triangle $ABC$. Given that $[AEG] = 60$, $[ADG] = 40$, $[DFG] = 20$, and $[BEF] = 250$.\nFind the area of triangle $ABC$.',
          answer:
            '$[ABC] = 1350$ (note: the printed value $[BEF] = 250$ is geometrically inconsistent with the first three given areas, which uniquely force $[BEF] = 450$).',
          principle:
            'Triangles sharing an altitude have areas proportional to their bases; use area ratios along $ED$, $AF$, $BD$, and $AB$ to find every sub-region.',
          solution:
            '**Step 1: Analyze quadrilateral $AEFD$.**\nTriangles $AEG$ and $ADG$ share vertex $A$ and have bases $EG$ and $GD$ on line $ED$, so:\n$$\\frac{EG}{GD} = \\frac{[AEG]}{[ADG]} = \\frac{60}{40} = \\frac{3}{2}.$$\nTriangles $EFG$ and $DFG$ share vertex $F$ and the same bases $EG$ and $GD$, so:\n$$\\frac{[EFG]}{[DFG]} = \\frac{EG}{GD} = \\frac{3}{2} \\implies [EFG] = \\frac{3}{2} \\times 20 = 30.$$\nHence:\n$$[AEF] = 60 + 30 = 90, \\quad [ADF] = 40 + 20 = 60, \\quad [DEF] = 30 + 20 = 50.$$\n\n**Step 2: Consistency check on $[BEF]$.**\nBecause $B, F, D$ are collinear and $A, E, B$ are collinear, comparing areas with bases $BF$ and $FD$ from vertices $E$ and $A$ gives:\n$$\\frac{BF}{FD} = \\frac{[BEF]}{[DEF]} = \\frac{[ABF]}{[ADF]} = \\frac{[AEF] + [BEF]}{[ADF]}.$$\nSubstituting $[AEF] = 90$, $[DEF] = 50$, and $[ADF] = 60$:\n$$\\frac{[BEF]}{50} = \\frac{90 + [BEF]}{60} \\implies 6[BEF] = 450 + 5[BEF] \\implies [BEF] = 450.$$\n*(Source-paper note: the printed condition $[BEF] = 250$ contradicts collinearity because $\\frac{250}{50} = 5 \\neq \\frac{90 + 250}{60} = \\frac{17}{3}$. Retaining the first three areas $[AEG]=60, [ADG]=40, [DFG]=20$ gives the unique valid triangle below with $[BEF] = 450$.)*\n\n**Step 3: Compute $[CDF]$, $[BCF]$, and $[ABC]$ for $[BEF] = 450$.**\n1. $\\frac{BF}{FD} = \\frac{[BEF]}{[DEF]} = \\frac{450}{50} = 9$.\n2. $\\frac{AE}{EB} = \\frac{[AEF]}{[BEF]} = \\frac{90}{450} = \\frac{1}{5}$.\n3. Let $[CDF] = x$. Since $BF : FD = 9 : 1$, we have $[BCF] = 9x$.\n4. Also $\\frac{[ACE]}{[BCE]} = \\frac{AE}{EB} = \\frac{1}{5}$, so:\n   $$\\frac{90 + 60 + x}{450 + 9x} = \\frac{1}{5} \\implies 5(150 + x) = 450 + 9x \\implies 750 + 5x = 450 + 9x \\implies 4x = 300 \\implies x = 75.$$\nThus $[CDF] = 75$ and $[BCF] = 9 \\times 75 = 675$.\n\nSumming all regions of $\\triangle ABC$:\n$$[ABC] = [AEF] + [ADF] + [BEF] + [CDF] + [BCF] = 90 + 60 + 450 + 75 + 675 = 1350.$$',
          rubric: [
            {
              code: 'M3',
              text: 'Finds $[EFG] = 30$, $[AEF] = 90$, $[ADF] = 60$, and $[DEF] = 50$ from the ratio $EG : GD = 3 : 2$.'
            },
            {
              code: 'M3',
              text: 'Identifies the geometric inconsistency of $[BEF] = 250$ and derives the consistent value $[BEF] = 450$ with $BF : FD = 9 : 1$ and $AE : EB = 1 : 5$.'
            },
            {
              code: 'M2',
              text: 'Solves for $[CDF] = 75$ and $[BCF] = 675$.'
            },
            {
              code: 'A2',
              text: 'Obtains total area $[ABC] = 1350$.'
            }
          ]
        },
        {
          label: '12',
          marks: 10,
          prompt:
            'In the library, there are many books. $\\frac{5}{8}$ of the books are mathematics books. A quarter of the remaining are physics books, and the rest are chemistry books. The difference between the number of mathematics and chemistry books is $110$.\nHow many books are there in the library?',
          answer: '$320$',
          principle:
            'Express each subject\'s share as a fraction of the total number of books and equate the fractional difference to $110$.',
          solution:
            'Let the total number of books in the library be $N$.\n1. Mathematics books: $\\frac{5}{8}N$.\n2. Remaining books (physics and chemistry): $1 - \\frac{5}{8} = \\frac{3}{8}$ of $N$.\n3. Physics books: $\\frac{1}{4} \\times \\frac{3}{8}N = \\frac{3}{32}N$.\n4. Chemistry books (the remaining $\\frac{3}{4}$ of the remainder): $\\frac{3}{4} \\times \\frac{3}{8}N = \\frac{9}{32}N$.\n\nThe difference between mathematics and chemistry books is $110$:\n$$\\frac{5}{8}N - \\frac{9}{32}N = \\frac{20}{32}N - \\frac{9}{32}N = \\frac{11}{32}N = 110.$$\nSolving for $N$:\n$$N = 110 \\times \\frac{32}{11} = 320.$$\nCheck: Mathematics $= \\frac{5}{8}(320) = 200$, Physics $= \\frac{1}{4}(120) = 30$, Chemistry $= 90$, and $200 - 90 = 110$.',
          rubric: [
            {
              code: 'M4',
              text: 'Computes the chemistry fraction as $\\frac{3}{4} \\times \\frac{3}{8} = \\frac{9}{32}$ of the total.'
            },
            {
              code: 'M3',
              text: 'Sets up $\\left(\\frac{5}{8} - \\frac{9}{32}\\right)N = \\frac{11}{32}N = 110$.'
            },
            {
              code: 'A3',
              text: 'Finds $N = 320$ books.'
            }
          ]
        },
        {
          label: '13',
          marks: 10,
          prompt:
            'In a math test, there are $20$ questions. You get $8$ points for each correct answer and lose $5$ points for each wrong answer. You get $0$ points if you skip a question. Sisi got a total score of $13$ points.\nHow many questions did she try to solve?',
          answer: '$13$',
          principle:
            'Set up a linear Diophantine equation $8c - 5w = 13$ with non-negative integers $c, w$ constrained by $c + w \\le 20$.',
          solution:
            'Let $c$ be the number of correct answers and $w$ be the number of wrong answers, where $c, w \\ge 0$ are integers and $c + w \\le 20$.\nThe total score condition is:\n$$8c - 5w = 13 \\implies 8c = 5w + 13.$$\nSince $5w$ ends in $0$ or $5$, $5w + 13$ must end in $3$ or $8$. Because $8c$ is always even, $8c$ must end in $8$, which requires $c \\equiv 1$ or $6 \\pmod 5$, i.e., $c \\in \\{1, 6, 11, 16\\}$:\n- $c = 1$: $8(1) - 13 = -5$ (gives $w = -1 < 0$, invalid).\n- $c = 6$: $5w = 48 - 13 = 35 \\implies w = 7$. Here $c + w = 6 + 7 = 13 \\le 20$ (valid).\n- $c = 11$: $5w = 88 - 13 = 75 \\implies w = 15$, giving $c + w = 26 > 20$ (exceeds $20$ questions, invalid).\n\nThus the only solution is $c = 6$ and $w = 7$. The number of questions Sisi tried to solve is:\n$$c + w = 6 + 7 = 13.$$',
          rubric: [
            {
              code: 'M3',
              text: 'Formulates $8c - 5w = 13$ with $c, w \\ge 0$ and $c + w \\le 20$.'
            },
            {
              code: 'M4',
              text: 'Uses parity / units-digit analysis to find the unique valid pair $(c, w) = (6, 7)$.'
            },
            {
              code: 'A3',
              text: 'Computes $6 + 7 = 13$ questions tried.'
            }
          ]
        },
        {
          label: '14',
          marks: 10,
          prompt:
            'In Gasing Primary School, there are five grades: from grade $1$ up to grade $5$. There are $30$ students in total. Altogether they donated $40$ books. Students from the same grade donated equal number of books, while students from different grades donated different number of books.\nHow many students donated exactly one book?',
          answer: '$26$',
          principle:
            'Use a greedy minimum-sum bound: if every student donates at least $1$ book and the five grades donate distinct positive amounts, minimize the total donation and match it to $40$.',
          solution:
            'Let the five grades have $s_1, s_2, s_3, s_4, s_5 \\ge 1$ students, sorted so that the number of books donated per student in each grade satisfies $1 \\le b_1 < b_2 < b_3 < b_4 < b_5$.\n\nBecause the $b_i$ are distinct positive integers:\n$$b_1 \\ge 1, \\quad b_2 \\ge 2, \\quad b_3 \\ge 3, \\quad b_4 \\ge 4, \\quad b_5 \\ge 5.$$\nSince $s_1 + s_2 + s_3 + s_4 + s_5 = 30$ and each grade has at least $1$ student ($s_2, s_3, s_4, s_5 \\ge 1$), the total number of books donated is bounded below by:\n$$\\sum_{i=1}^5 s_i b_i \\ge \\sum_{i=1}^5 s_i \\cdot 1 + (b_2 - 1)s_2 + (b_3 - 1)s_3 + (b_4 - 1)s_4 + (b_5 - 1)s_5$$\n$$\\ge 30 + (2 - 1)(1) + (3 - 1)(1) + (4 - 1)(1) + (5 - 1)(1) = 30 + 1 + 2 + 3 + 4 = 40.$$\n\nEquality holds at the given total of $40$ books if and only if every inequality above is an equality:\n- $(b_1, b_2, b_3, b_4, b_5) = (1, 2, 3, 4, 5)$,\n- $s_2 = s_3 = s_4 = s_5 = 1$,\n- $s_1 = 30 - 4 = 26$.\n\nCheck: $26(1) + 1(2) + 1(3) + 1(4) + 1(5) = 26 + 14 = 40$. Therefore, $26$ students donated exactly one book.',
          rubric: [
            {
              code: 'M4',
              text: 'Orders the distinct positive donation counts $1 \\le b_1 < b_2 < b_3 < b_4 < b_5$ with $b_i \\ge i$ and $s_i \\ge 1$.'
            },
            {
              code: 'M3',
              text: 'Proves the minimum possible total donation is $30 + (1 + 2 + 3 + 4) = 40$, forcing equality in every term.'
            },
            {
              code: 'A3',
              text: 'Concludes $s_1 = 26$ students donated $1$ book.'
            }
          ]
        },
        {
          label: '15',
          marks: 10,
          prompt:
            'In the land of Gasing, the coins are of values $1, 2, 5, 10, 20, 50$ cents, and ℊ$1$ (where ℊ$1 = 100$ cents). Fibo has $x$ coins with value of $y$ cents. Aci said, "I also have $y$ coins with values of ℊ$x$".\nCan it be happened? Explain your answer.',
          answer:
            'Yes, it can happen (for example, $x = 1$ coin of $y = 2$ cents for Fibo and $y = 2$ coins of $50$ cents totaling ℊ$1$ for Aci; or with equal total values, $y = 100x$, where Fibo has $x$ coins of ℊ$1$ and Aci has $100x$ coins of $1$ cent).',
          principle:
            'Check whether $x$ coins from $\\{1, 2, 5, 10, 20, 50, 100\\}$ cents can sum to $y$ cents while $y$ coins from the same set sum to $100x$ cents.',
          solution:
            '**Yes, it can happen.**\n\nConvert all amounts to cents using ℊ$1 = 100$ cents, so ℊ$x = 100x$ cents. Each coin has value at least $1$ cent and at most $100$ cents.\n- Fibo has $x$ coins totaling $y$ cents, which requires $x \\le y \\le 100x$.\n- Aci has $y$ coins totaling $100x$ cents, which requires $y \\le 100x \\le 100y$, i.e., again $x \\le y \\le 100x$.\n\nSeveral explicit valid examples exist:\n1. **Simple example ($x = 1, y = 2$):** Fibo has $1$ coin of $2$ cents (total $2$ cents), and Aci has $2$ coins of $50$ cents (total $100$ cents $=$ ℊ$1$). In fact, for $x = 1$, every denomination $y \\in \\{1, 2, 5, 10, 20, 50, 100\\}$ works because Aci can use $y$ identical coins of value $\\frac{100}{y}$ cents ($100, 50, 20, 10, 5, 2,$ or $1$ cents respectively).\n2. **Equal-total-value example ($y = 100x$):** If "I also have..." is read as having the same total value ($y = 100x$), it still works: for any positive integer $x$, Fibo has $x$ coins of ℊ$1$ (total $100x = y$ cents), and Aci has $y = 100x$ coins of $1$ cent (total $100x$ cents $=$ ℊ$x$).\n3. **Per-coin denomination reading:** Even if each of Fibo\'s $x$ coins has value $y$ cents and each of Aci\'s $y$ coins has value ℊ$x$, taking $x = 1$ (since ℊ$1$ is the only ℊ-denominated coin) and any $y \\in \\{1, 2, 5, 10, 20, 50, 100\\}$ still works (though their total values $y$ cents and $100y$ cents would then differ).',
          rubric: [
            {
              code: 'M3',
              text: 'Converts ℊ$x$ to $100x$ cents and establishes the feasibility bounds $x \\le y \\le 100x$.'
            },
            {
              code: 'M4',
              text: 'Provides valid explicit coin constructions using the available denominations $\\{1, 2, 5, 10, 20, 50, 100\\}$ cents (including $x = 1$ or the equal-value case $y = 100x$).'
            },
            {
              code: 'A3',
              text: 'States clearly that yes, it can happen.'
            }
          ]
        },
        {
          label: '16',
          marks: 10,
          prompt:
            'Tita, Alena, and Nadia like to walk together. Their walking speeds are $100$ meters per minute, $80$ meters per minute, and $70$ meters per minute, respectively. At $3$ o\'clock, Tita and Alena leave their school and walk toward Nadia\'s house. At the same time, Nadia leaves her house and walks toward the school. The road between the school and Nadia\'s house is straight. Two minutes after Tita meets Nadia, Alena also meets Nadia.\nHow far is Nadia\'s house from the school?',
          answer: '$2550\\text{ m}$',
          principle:
            'When two people walk toward each other, the meeting time equals the initial distance divided by the sum of their speeds.',
          solution:
            'Let $D$ (in meters) be the distance between the school and Nadia\'s house.\n- **Tita and Nadia** walk toward each other with combined speed $100 + 70 = 170\\text{ m/min}$, so they meet after:\n  $$t_1 = \\frac{D}{170}\\text{ minutes}.$$\n- **Alena and Nadia** walk toward each other with combined speed $80 + 70 = 150\\text{ m/min}$, so they meet after:\n  $$t_2 = \\frac{D}{150}\\text{ minutes}.$$\n\nSince Alena meets Nadia $2$ minutes after Tita meets Nadia:\n$$t_2 - t_1 = 2 \\implies \\frac{D}{150} - \\frac{D}{170} = 2.$$\nCombine the fractions (noting $\\operatorname{lcm}(150, 170) = 2550$):\n$$\\frac{17D - 15D}{2550} = 2 \\implies \\frac{2D}{2550} = 2 \\implies D = 2550\\text{ m}.$$\n\nCheck: $t_1 = \\frac{2550}{170} = 15$ minutes and $t_2 = \\frac{2550}{150} = 17$ minutes, with $17 - 15 = 2$ minutes.',
          rubric: [
            {
              code: 'M4',
              text: 'Expresses the two meeting times using relative speeds: $t_1 = \\frac{D}{170}$ and $t_2 = \\frac{D}{150}$.'
            },
            {
              code: 'M3',
              text: 'Sets up and simplifies $\\frac{D}{150} - \\frac{D}{170} = 2$.'
            },
            {
              code: 'A3',
              text: 'Obtains $D = 2550\\text{ m}$.'
            }
          ]
        },
        {
          label: '17',
          marks: 10,
          prompt:
            'Consider the sum $s = \\overline{ab} + \\overline{bc} + \\overline{ca}$, where $\\overline{ab}, \\overline{bc}, \\overline{ca}$ are two-digit number in base $10$.\nGiven that $s$ is perfect square.\nWhat is the value of $t = \\overline{abc} + \\overline{bca} + \\overline{cab}$?',
          answer: '$1221$',
          principle:
            'Expand the base-$10$ representations of $s$ and $t$ in terms of $a + b + c$, then use the prime factor $11$ and digit bounds to determine $a + b + c$ uniquely.',
          solution:
            'Since $\\overline{ab}, \\overline{bc}, \\overline{ca}$ are two-digit numbers in base $10$, each leading digit is nonzero, so $a, b, c \\in \\{1, 2, \\ldots, 9\\}$.\nExpand $s$:\n$$s = (10a + b) + (10b + c) + (10c + a) = 11(a + b + c).$$\nSince $s$ is a perfect square and $11$ is prime, $a + b + c$ must be of the form $11k^2$ for some positive integer $k$.\nBecause $1 \\le a, b, c \\le 9$, we have:\n$$3 \\le a + b + c \\le 27.$$\nThe only multiple of $11k^2$ in $[3, 27]$ occurs at $k = 1$, giving:\n$$a + b + c = 11.$$\n(Check: $s = 11 \\times 11 = 121 = 11^2$, a perfect square.)\n\nNow expand $t$:\n$$t = (100a + 10b + c) + (100b + 10c + a) + (100c + 10a + b) = 111(a + b + c).$$\nSubstituting $a + b + c = 11$:\n$$t = 111 \\times 11 = 1221.$$',
          rubric: [
            {
              code: 'M4',
              text: 'Expands $s = 11(a + b + c)$ and $t = 111(a + b + c)$.'
            },
            {
              code: 'M3',
              text: 'Uses the perfect-square condition and $3 \\le a + b + c \\le 27$ to deduce $a + b + c = 11$.'
            },
            {
              code: 'A3',
              text: 'Computes $t = 111 \\times 11 = 1221$.'
            }
          ]
        }
      ]
    }
  ]
};
