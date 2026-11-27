/**
 * Paket Soal: IMSO Mathematics — Short Answer Simulation 1
 * Sumber: 08. [KARon-IMSO23] - Simulasi 1 Short Answer_Student.pdf (25 soal isian singkat).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Gambar pada soal 5, 13, 22, dan 23
 * diambil dari potongan langsung halaman PDF ke format WebP. Seluruh jawaban diverifikasi
 * secara mandiri menggunakan Python.
 */
export default {
  id: 'imso-mat-simulasi-1',
  slug: 'imso-matematika-simulasi-1',
  subject: 'olimpiade-mat',
  grade: 6,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'IMSO Mathematics Short Answer Practice: fractions, geometry, number theory, combinatorics',
  relatedChapterIds: [
    'sd5-bab2-kpk-fpb',
    'sd5-bab5-luas-daerah-bangun-datar',
    'sd6-bab1-pecahan-desimal',
    'sd6-bab4-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'IMSO',
  title: 'IMSO Mathematics \u2014 Short Answer Simulation 1',
  totalMarks: 25,
  instructions:
    'Attempt all 25 short-answer questions (1 mark each, total 25 marks; no calculators). Write each final answer in simplest form and include units where requested. Questions 5, 13, 22, and 23 include diagrams from the original paper.',
  source: {
    org: 'IMSO',
    file: '08. [KARon-IMSO23] - Simulasi 1 Short Answer_Student.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Short Answer',
      marks: 25,
      stem: 'Answer all 25 short-answer questions (1 mark each).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'We define:\n$$\\boxed{2} = 1 \\times 2 \\times 3, \\quad \\boxed{3} = 2 \\times 3 \\times 4, \\quad \\boxed{4} = 3 \\times 4 \\times 5, \\quad \\boxed{5} = 4 \\times 5 \\times 6, \\dots$$\nIf $\\dfrac{1}{\\boxed{6}} - \\dfrac{1}{\\boxed{7}} = \\dfrac{1}{\\boxed{7}} \\times A$, what is the value of $A$?',
          answer: '$\\dfrac{3}{5}$',
          principle:
            'Factor out the common consecutive integers in $\\boxed{n} = (n - 1)n(n + 1)$ instead of multiplying out the large denominators.',
          solution:
            'By the pattern, $\\boxed{n} = (n - 1) \\times n \\times (n + 1)$, so:\n$$\\boxed{6} = 5 \\times 6 \\times 7 = 210, \\qquad \\boxed{7} = 6 \\times 7 \\times 8 = 336.$$\nMultiply both sides of $\\dfrac{1}{\\boxed{6}} - \\dfrac{1}{\\boxed{7}} = \\dfrac{1}{\\boxed{7}} \\times A$ by $\\boxed{7}$:\n$$A = \\frac{\\boxed{7}}{\\boxed{6}} - 1 = \\frac{6 \\times 7 \\times 8}{5 \\times 6 \\times 7} - 1 = \\frac{8}{5} - 1 = \\frac{3}{5}.$$',
          rubric: [{ code: 'A1', text: 'Correctly evaluates $\\boxed{6}$ and $\\boxed{7}$ to find $A = \\frac{3}{5}$ (or $0.6$).' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'What is the value of the irreducible fraction $\\dfrac{n}{m}$, where $0.17 < \\dfrac{n}{m} < 0.18$ and $m$ is as small as possible?',
          answer: '$\\dfrac{3}{17}$',
          principle:
            'Take reciprocals of the inequality $0.17 < \\frac{n}{m} < 0.18$ to bound $\\frac{m}{n}$, then test the smallest positive integers $n = 1, 2, 3, \\dots$ for an integer $m$ in the interval.',
          solution:
            'Taking reciprocals reverses the inequality:\n$$\\frac{1}{0.18} < \\frac{m}{n} < \\frac{1}{0.17} \\implies 5\\frac{5}{9} < \\frac{m}{n} < 5\\frac{15}{17}.$$\nTesting small positive values of $n$:\n- For $n = 1$: $5.55\\dots < m < 5.88\\dots$ gives no integer $m$.\n- For $n = 2$: $11.11\\dots < m < 11.76\\dots$ gives no integer $m$.\n- For $n = 3$: $16.66\\dots < m < 17.64\\dots$ yields $m = 17$.\n\nCheck: $\\gcd(3, 17) = 1$, and $\\frac{3}{17} \\approx 0.1765$, which lies strictly between $0.17$ and $0.18$. Since any $n \\ge 4$ requires $m > 22$, the smallest denominator is $m = 17$, giving $\\frac{3}{17}$.',
          rubric: [{ code: 'A1', text: 'Finds the smallest-denominator fraction $\\frac{3}{17}$.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'The average of the ages of the mother, the father and their three children is $21$, whereas the children alone average $11$. How many years is the age of the father, given that the father is $4$ years older than the mother?',
          answer: '$38\\text{ years}$',
          principle:
            'Subtract the total age of the children from the total age of the whole family to obtain the sum of the parents\u2019 ages, then solve the sum-and-difference problem.',
          solution:
            'The sum of the ages of all $5$ family members is $5 \\times 21 = 105$ years.\nThe sum of the ages of the $3$ children is $3 \\times 11 = 33$ years.\nTherefore, the sum of the mother\u2019s and father\u2019s ages is:\n$$105 - 33 = 72\\text{ years}.$$\nSince the father is $4$ years older than the mother, the father\u2019s age is:\n$$\\frac{72 + 4}{2} = \\frac{76}{2} = 38\\text{ years}.$$',
          rubric: [{ code: 'A1', text: 'Computes the parents\u2019 sum $72$ and finds the father\u2019s age $38\\text{ years}$.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'A television show has $483$ episodes. If the show starts on Saturday and broadcasts every day with three episodes each day, on what day will the last episode be broadcasted?',
          answer: 'Friday',
          principle:
            'Divide total episodes by episodes per day to get the total number of broadcast days, then reduce modulo $7$.',
          solution:
            'At $3$ episodes per day, the show runs for:\n$$\\frac{483}{3} = 161\\text{ days}.$$\nBecause $161 = 7 \\times 23$, the broadcast lasts exactly $23$ complete $7$-day weeks. Each week starting on Saturday ends on Friday, so the $161$st day (the last episode) is broadcast on **Friday**.',
          rubric: [{ code: 'A1', text: 'Finds $161$ days $= 23$ weeks and identifies Friday.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'What is the perimeter, in $\\text{cm}$, of the figure below, given that all the angles are right angles?',
          figures: [
            {
              src: '/papers/imso-mat-simulasi-1/fig-5.webp',
              alt: 'A rectilinear polygon with all right angles, an overall top width labeled 8 cm, a left height labeled 5 cm, and an upper cutout depth labeled 2 cm.',
              caption: 'Rectilinear polygon for Question 5.'
            }
          ],
          answer: '$30\\text{ cm}$',
          principle:
            'Project horizontal and vertical segments of a rectilinear polygon onto opposite sides, accounting separately for any inward indentation.',
          solution:
            'Every angle is a right angle, so we sum the horizontal and vertical edges separately:\n- **Horizontal edges:** Moving along the top boundary (including the recessed horizontal steps) spans $8\\text{ cm}$ from left to right, and the two bottom horizontal segments span $8\\text{ cm}$ from right to left. Total horizontal length $= 8 + 8 = 16\\text{ cm}$.\n- **Vertical edges:** The left edge goes up $5\\text{ cm}$, and the two outer downward steps on the right together drop $5\\text{ cm}$. In addition, the top cutout drops down $2\\text{ cm}$ and rises back up $2\\text{ cm}$ to reach the top edge. Total vertical length $= 5 + 5 + 2 + 2 = 14\\text{ cm}$.\n\nHence, the perimeter is:\n$$16 + 14 = 30\\text{ cm}.$$',
          rubric: [{ code: 'A1', text: 'Sums all horizontal and vertical segments correctly to get $30\\text{ cm}$.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'There are $32$ coins such that all of them have a different weight. At least how many weighings on a standard $2$-pan balance are needed to be able to determine both the heaviest and the second heaviest coins?',
          answer: '$35$',
          principle:
            'Use a knockout tournament to find the heaviest coin in $n - 1$ comparisons, then compare only the $\\lceil \\log_2 n \\rceil$ coins beaten directly by the winner.',
          solution:
            'Because the coins can have arbitrary distinct positive weights, weighing equal groups of two or more coins cannot identify which individual coin is heaviest; pairwise ($1$-vs-$1$) comparisons are optimal.\n1. **Find the heaviest coin:** Pair the $32$ coins into $16$ matches ($16$ weighings), then pair the $16$ winners ($8$ weighings), then $4$, $2$, and $1$ weighing in the final. Every eliminated coin loses once, so this takes $32 - 1 = 31$ weighings.\n2. **Find the second heaviest coin:** The second heaviest coin can only lose to the heaviest coin itself. In a balanced $32$-coin bracket ($2^5 = 32$), the champion won $5$ matches, so exactly $5$ coins were defeated directly by the heaviest coin.\n3. Finding the heaviest among those $5$ candidates requires $5 - 1 = 4$ additional weighings.\n\nBy tournament lower bounds ($n + \\lceil \\log_2 n \\rceil - 2$), this cannot be improved. Thus, at least $31 + 4 = 35$ weighings are needed.',
          rubric: [{ code: 'A1', text: 'Finds the minimum $31 + 4 = 35$ weighings.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Divide $108$ students into four groups such that two times the number of students in group $1$ is:\n(i) half of the number of students in group $2$,\n(ii) $2$ less than the number of students in group $3$,\n(iii) $2$ more than the number of students in group $4$.\nFind the number of students in group $1$.',
          answer: '$12$',
          principle:
            'Express the size of each group in terms of group $1$ and equate their sum to the total number of students.',
          solution:
            'Let $x$ be the number of students in group $1$. From the three conditions:\n- $2x = \\dfrac{g_2}{2} \\implies g_2 = 4x$,\n- $2x = g_3 - 2 \\implies g_3 = 2x + 2$,\n- $2x = g_4 + 2 \\implies g_4 = 2x - 2$.\n\nSumming all four groups gives:\n$$x + 4x + (2x + 2) + (2x - 2) = 108 \\implies 9x = 108 \\implies x = 12.$$\nCheck: the groups have $12, 48, 26, 22$ students, whose sum is $108$.',
          rubric: [{ code: 'A1', text: 'Forms $9x = 108$ and finds $12$ students in group $1$.' }]
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'We have $10$ different natural positive numbers, exactly $7$ of which are divisible by $9$, exactly $7$ are divisible by $12$, and exactly $7$ by $15$. Find the least value of the biggest number out of all ten.',
          answer: '$240$',
          principle:
            'Count total divisibility memberships across the $10$ numbers to force multiples of pairwise LCMs ($36$, $45$, $60$) and triple LCM ($180$).',
          solution:
            'Let $A, B, C$ be the subsets of the $10$ numbers divisible by $9, 12, 15$, respectively. Each has size $7$, so $|A| + |B| + |C| = 21$.\nLet $n_3$ be the count of numbers in all three sets (multiples of $\\operatorname{lcm}(9, 12, 15) = 180$), $n_2$ the count in exactly two sets, $n_1$ in one set, and $n_0$ in none. Then:\n$$3n_3 + 2n_2 + n_1 = 21, \\qquad n_3 + n_2 + n_1 + n_0 = 10.$$\nSubtracting the second equation from the first gives $2n_3 + n_2 - n_0 = 11$, so $2n_3 + n_2 \\ge 11$.\n- If $n_3 = 0$, then $n_2 \\ge 11$, impossible since there are only $10$ numbers.\n- If the largest number is under $360$, at most one multiple of $180$ exists ($180$ itself), so $n_3 = 1$, forcing $n_2 \\ge 9$. Since $n_3 + n_2 \\le 10$, we must have $n_3 = 1$ and $n_2 = 9$ (with $n_1 = n_0 = 0$).\n\nBecause each of $A, B, C$ has size $7$ and $180$ belongs to all three, the remaining $9$ numbers must split equally across the three pairwise intersections: $3$ multiples of $\\operatorname{lcm}(9, 12) = 36$ (not by $180$), $3$ multiples of $\\operatorname{lcm}(9, 15) = 45$ (not by $180$), and $3$ multiples of $\\operatorname{lcm}(12, 15) = 60$ (not by $180$).\nThe three smallest positive multiples of $60$ not divisible by $180$ are $60, 120, 240$. Hence the largest number must be at least $240$.\nThis minimum is achieved by the $10$ numbers:\n$$36,\\ 45,\\ 60,\\ 72,\\ 90,\\ 108,\\ 120,\\ 135,\\ 180,\\ 240.$$',
          rubric: [{ code: 'A1', text: 'Proves the lower bound and exhibits a valid set with maximum $240$.' }]
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Calculate the product of all the positive divisors of $120$: $1 \\times 2 \\times 3 \\times 4 \\times \\dots \\times 120$. It is known that this product is divisible by some $2^k$ where $k$ is an integer. What is the largest possible value of $k$?',
          answer: '$116$',
          principle:
            'Apply Legendre\u2019s formula to count the exponent of $2$ in the printed product $1 \\times 2 \\times 3 \\times \\dots \\times 120 = 120!$.',
          solution:
            'For the explicitly printed product $1 \\times 2 \\times 3 \\times \\dots \\times 120 = 120!$, the largest power of $2$ dividing $120!$ is given by Legendre\u2019s formula:\n$$k = \\left\\lfloor \\frac{120}{2} \\right\\rfloor + \\left\\lfloor \\frac{120}{4} \\right\\rfloor + \\left\\lfloor \\frac{120}{8} \\right\\rfloor + \\left\\lfloor \\frac{120}{16} \\right\\rfloor + \\left\\lfloor \\frac{120}{32} \\right\\rfloor + \\left\\lfloor \\frac{120}{64} \\right\\rfloor$$\n$$= 60 + 30 + 15 + 7 + 3 + 1 = 116.$$\n*(Note: The original contest sheet wrote "positive divisors of $120$" alongside the printed factorial $1 \\times 2 \\times \\dots \\times 120$; if one literally took the product of only the $16$ divisors of $120 = 2^3 \\cdot 3 \\cdot 5$, that product equals $120^{16/2} = 120^8$, which has $2$-adic valuation $3 \\times 8 = 24$.)*',
          rubric: [{ code: 'A1', text: 'Applies Legendre\u2019s formula to $120!$ to obtain $k = 116$.' }]
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Five different integer numbers $a, b, c, d, e$ (not necessarily positive) are such that\n$$(4 - a)(4 - b)(4 - c)(4 - d)(4 - e) = 12.$$\nFind the sum $a + b + c + d + e$.',
          answer: '$17$',
          principle:
            'Factor $12$ into five distinct integers (using both positive and negative factors), then solve for the sum from $20 - (a+b+c+d+e)$.',
          solution:
            'Since $a, b, c, d, e$ are distinct integers, the five factors $x_1 = 4 - a$, $x_2 = 4 - b$, $x_3 = 4 - c$, $x_4 = 4 - d$, $x_5 = 4 - e$ are five distinct integers whose product is $12 = 2^2 \\times 3$.\nAmong the divisors of $12$, at most two can have absolute value $1$ ($\\pm 1$) and at most two can have absolute value $2$ ($\\pm 2$). To form a product of $12$ using $5$ distinct integers, we must take both $\\pm 1$, both $\\pm 2$, and one factor of magnitude $3$. To make the overall product $+12$ (since $(-1)(1)(-2)(2) = +4$), the fifth factor must be $+3$.\nThus the five factors are $\\{-2, -1, 1, 2, 3\\}$, and their sum is:\n$$(-2) + (-1) + 1 + 2 + 3 = 3.$$\nTherefore:\n$$(4 - a) + (4 - b) + (4 - c) + (4 - d) + (4 - e) = 20 - (a + b + c + d + e) = 3,$$\nwhich gives $a + b + c + d + e = 17$.',
          rubric: [{ code: 'A1', text: 'Identifies the factors $\\{-2, -1, 1, 2, 3\\}$ and finds $a + b + c + d + e = 17$.' }]
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'There are $100$ students in the second year of Bawne High School. Among them, $43$ students took biology, $35$ students took physics, $42$ students took chemistry, $12$ students took physics and chemistry, $15$ students took biology and physics, $17$ students took biology and chemistry, and $7$ students took all three courses. Find out how many students are not taking any courses.',
          answer: '$17$',
          principle:
            'Use the three-set Principle of Inclusion\u2013Exclusion to find the number of students taking at least one subject.',
          solution:
            'Let $B, P, C$ be the sets of students taking biology, physics, and chemistry. By Inclusion\u2013Exclusion:\n$$|B \\cup P \\cup C| = |B| + |P| + |C| - |B \\cap P| - |B \\cap C| - |P \\cap C| + |B \\cap P \\cap C|$$\n$$= 43 + 35 + 42 - 15 - 17 - 12 + 7 = 83.$$\nHence, the number of students not taking any of the three courses is:\n$$100 - 83 = 17.$$',
          rubric: [{ code: 'A1', text: 'Applies Inclusion\u2013Exclusion to get $83$ enrolled and $17$ taking none.' }]
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'In a quadrilateral $ABCD$, $AD \\perp CD$ and $AB \\perp CB$. If $BC = 1$, $CD = 2$, and $AD = 3$, calculate $AB$.',
          answer: '$2\\sqrt{3}$',
          principle:
            'Draw diagonal $AC$ to split the quadrilateral into two right triangles sharing the same hypotenuse.',
          solution:
            'Since $AD \\perp CD$ and $AB \\perp CB$, both $\\triangle ADC$ and $\\triangle ABC$ are right triangles with shared hypotenuse $AC$.\nApplying the Pythagorean theorem to $\\triangle ADC$:\n$$AC^2 = AD^2 + CD^2 = 3^2 + 2^2 = 9 + 4 = 13.$$\nApplying the Pythagorean theorem to $\\triangle ABC$:\n$$AB^2 = AC^2 - BC^2 = 13 - 1^2 = 12 \\implies AB = \\sqrt{12} = 2\\sqrt{3}.$$',
          rubric: [{ code: 'A1', text: 'Uses $AC^2 = 13$ to obtain $AB = 2\\sqrt{3}$.' }]
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'In the diagram below, $ABCD$ is a square where $M$ is the midpoint of $AB$. If line $AC$ intersects $DM$ at point $E$ and the area of quadrilateral $BCEM$ is $400\\text{ cm}^2$, then what is the area, in $\\text{cm}^2$, of square $ABCD$?',
          figures: [
            {
              src: '/papers/imso-mat-simulasi-1/fig-13.webp',
              alt: 'Square ABCD with midpoint M on top side AB, diagonal AC intersecting segment DM at E, and region BCEM shaded.',
              caption: 'Square ABCD with shaded quadrilateral BCEM for Question 13.'
            }
          ],
          answer: '$960\\text{ cm}^2$',
          principle:
            'Use similar triangles $\\triangle AME \\sim \\triangle CDE$ to find the area of $\\triangle AME$ as a fraction of the square, then subtract from $\\triangle ABC$.',
          solution:
            'Let the side length of square $ABCD$ be $s$, so its total area is $s^2$.\nBecause $AM \\parallel CD$ and $M$ is the midpoint of $AB$, triangles $\\triangle AME$ and $\\triangle CDE$ are similar with ratio:\n$$\\frac{AM}{CD} = \\frac{1}{2}.$$\nTherefore, the altitude from $E$ to $AM$ is $\\frac{1}{1 + 2} s = \\frac{1}{3} s$. The area of $\\triangle AME$ is:\n$$[\\triangle AME] = \\frac{1}{2} \\cdot AM \\cdot \\frac{s}{3} = \\frac{1}{2} \\cdot \\frac{s}{2} \\cdot \\frac{s}{3} = \\frac{s^2}{12}.$$\nSince $[\\triangle ABC] = \\frac{1}{2} s^2$, the shaded area is:\n$$[BCEM] = [\\triangle ABC] - [\\triangle AME] = \\frac{1}{2} s^2 - \\frac{1}{12} s^2 = \\frac{5}{12} s^2.$$\nSetting $\\frac{5}{12} s^2 = 400$ gives:\n$$s^2 = 400 \\times \\frac{12}{5} = 960\\text{ cm}^2.$$',
          rubric: [{ code: 'A1', text: 'Establishes $\\frac{5}{12} s^2 = 400$ and solves for $960\\text{ cm}^2$.' }]
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'A train begins crossing the $450\\text{ meter}$ long bridge at noon, and crosses the bridge completely $45$ seconds later. A silent observer notices that the train takes $15$ seconds to pass. Calculate the speed of the train in meters per second.',
          answer: '$15\\text{ m/s}$',
          principle:
            'Passing a stationary observer covers the train\u2019s own length, while crossing a bridge covers the train\u2019s length plus the bridge\u2019s length.',
          solution:
            'Let $v$ (in $\\text{m/s}$) be the speed of the train and $L$ (in $\\text{m}$) be its length.\n- Passing the observer takes $15$ seconds, so $L = 15v$.\n- Crossing the $450\\text{ m}$ bridge completely takes $45$ seconds, so $L + 450 = 45v$.\n\nSubtracting the first equation from the second eliminates $L$:\n$$450 = 45v - 15v = 30v \\implies v = \\frac{450}{30} = 15\\text{ m/s}.$$',
          rubric: [{ code: 'A1', text: 'Uses $30v = 450$ to find $15\\text{ m/s}$.' }]
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'In a competition, there were five competitors: Ali, Benny, Chin, Din and Eddy. Before the competition began, four spectators had made the following predictions:\n- Spectator 1: \u201cBenny will get the 4th place and Eddy will get the 2nd place.\u201d\n- Spectator 2: \u201cDin will get the 1st place and Chin will get the 3rd place.\u201d\n- Spectator 3: \u201cEddy will get the 3rd place and Ali will get the 4th place.\u201d\n- Spectator 4: \u201cAli will get the 3rd place and Benny will get the 1st place.\u201d\n\nIt turned out that each spectator had one prediction correct and one prediction incorrect. Who got the 3rd place in the competition?',
          answer: 'Chin',
          principle:
            'Test a single hypothesis on Spectator 4 (or Spectator 1) and propagate the forced true/false assignments across the remaining spectators.',
          solution:
            'Look at Spectator 4\u2019s two claims: either Ali is 3rd, or Benny is 1st (not both).\n- **Case 1 (Ali is 3rd):** Then Benny is not 1st. In Spectator 3, \u201cEddy is 3rd\u201d and \u201cAli is 4th\u201d would both be false, contradicting that Spectator 3 got one prediction right.\n- **Case 2 (Benny is 1st):** Then Ali is not 3rd.\n  - From Spectator 4: Benny $= 1$st (true), Ali $\\ne 3$rd.\n  - From Spectator 2: Din $\\ne 1$st (since Benny is 1st), so Chin $= 3$rd must be true.\n  - From Spectator 3: Eddy $\\ne 3$rd (since Chin is 3rd), so Ali $= 4$th must be true.\n  - From Spectator 1: Benny $\\ne 4$th (since Ali is 4th), so Eddy $= 2$nd must be true.\n\nThis leaves Din in 5th place, giving the unique consistent ranking: 1st Benny, 2nd Eddy, 3rd Chin, 4th Ali, 5th Din. Thus **Chin** got 3rd place.',
          rubric: [{ code: 'A1', text: 'Deduces the unique ranking and identifies Chin in 3rd place.' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'How many natural numbers with a product of the digits $120$ are there, if the digit $1$ is excluded?',
          answer: '$68$',
          principle:
            'Factor $120 = 2^3 \\times 3 \\times 5$ into digits from $\\{2, 3, \\dots, 9\\}$, list all valid digit multisets, and count their distinct permutations.',
          solution:
            'Since the digit $1$ is excluded, every digit comes from $\\{2, 3, 4, 5, 6, 7, 8, 9\\}$, and $120 = 2^3 \\times 3 \\times 5$ requires one digit $5$ and factorizations of $24 = 2^3 \\times 3$ into digits from $\\{2, 3, 4, 6, 8\\}$.\nGrouping by the number of digits:\n- **$3$ digits:** $(5, 8, 3)$ gives $3! = 6$ numbers; $(5, 6, 4)$ gives $3! = 6$ numbers. Subtotal $= 12$.\n- **$4$ digits:** $(5, 6, 2, 2)$ gives $\\frac{4!}{2!} = 12$ numbers; $(5, 4, 3, 2)$ gives $4! = 24$ numbers. Subtotal $= 36$.\n- **$5$ digits:** $(5, 3, 2, 2, 2)$ gives $\\frac{5!}{3!} = 20$ numbers. Subtotal $= 20$.\n\nAdding all cases gives:\n$$12 + 36 + 20 = 68.$$',
          rubric: [{ code: 'A1', text: 'Enumerates all digit multisets and sums their permutations to get $68$.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'In a town festival, there is a horse parade event where all of the horses were assigned numbers starting from $1, 2, 3, \\dots$. Ria took part in the event and rode the horse which has the largest sum of the digits from all the assigned numbers. If the total number of digits used in numbering the horses is $2022$, then what is the number of the horse that Ria rode?',
          answer: '$699$',
          principle:
            'Count the digits used by $1$-digit and $2$-digit numbers to find the last $3$-digit horse number, then maximize the digit sum within that range.',
          solution:
            'Count the digits used in consecutive blocks:\n- $1$-digit numbers ($1$ to $9$): $9 \\times 1 = 9$ digits.\n- $2$-digit numbers ($10$ to $99$): $90 \\times 2 = 180$ digits.\n\nTogether, numbers $1$ through $99$ use $9 + 180 = 189$ digits. The remaining digits belong to $3$-digit numbers:\n$$2022 - 189 = 1833\\text{ digits} \\implies \\frac{1833}{3} = 611\\text{ three-digit numbers}.$$\nSo the highest horse number is $99 + 611 = 710$.\nNow compare the largest digit sums among integers from $1$ to $710$:\n- From $700$ to $710$: the largest digit sum is at $709$, giving $7 + 0 + 9 = 16$.\n- Below $700$: the largest digit sum is at $699$, giving $6 + 9 + 9 = 24$.\n\nThus Ria rode horse number $699$.',
          rubric: [{ code: 'A1', text: 'Finds the last horse $710$ and maximizes the digit sum at $699$.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'What is the maximum number of $1 \\times 1 \\times 4$ blocks that can fit inside a $6 \\times 6 \\times 6$ box such that each of the faces of the blocks are parallel to the corresponding faces of the box?',
          answer: '$52$',
          principle:
            'Color $2 \\times 2 \\times 2$ subcubes in a 3D checkerboard pattern to prove an upper bound, then construct an explicit packing that meets it.',
          solution:
            'Divide the $6 \\times 6 \\times 6$ box into $3 \\times 3 \\times 3 = 27$ subcubes of size $2 \\times 2 \\times 2$, indexed by $(i, j, k)$ with $i, j, k \\in \\{0, 1, 2\\}$. Color a $2 \\times 2 \\times 2$ subcube *even* if $i + j + k$ is even and *odd* if $i + j + k$ is odd.\nThere are $14$ even subcubes and $13$ odd subcubes ($13 \\times 8 = 104$ odd unit cells).\nEvery $1 \\times 1 \\times 4$ block parallel to the box axes spans four consecutive unit coordinates in $\\{0, 1, 2, 3, 4, 5\\}$ (either $\\{0,1,2,3\\}$, $\\{1,2,3,4\\}$, or $\\{2,3,4,5\\}$), which always hits two cells in one subcube parity and two cells in the other. Hence every block covers **exactly $2$ odd cells**.\nBecause there are only $104$ odd cells, at most $\\frac{104}{2} = 52$ blocks can fit.\n\nThis bound is achievable:\n- Fill a $6 \\times 6 \\times 4$ section of the box with $36$ vertical $1 \\times 1 \\times 4$ blocks.\n- In each of the two remaining $6 \\times 6 \\times 1$ layers, place $8$ horizontal $1 \\times 1 \\times 4$ blocks (for example, $4$ blocks covering a $4 \\times 4$ corner, $2$ blocks along a $2 \\times 4$ strip, and $2$ blocks along a $4 \\times 2$ strip, leaving a $2 \\times 2$ corner empty in each layer).\n\nTotal blocks $= 36 + 8 + 8 = 52$.',
          rubric: [{ code: 'A1', text: 'Proves the bound $52$ (with $2 \\times 2 \\times 2$ coloring) and matches it.' }]
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'What is the largest five-digit positive integer satisfying all of the following properties?\n(i) The last two digits is $19$.\n(ii) It is divisible by $19$.\n(iii) The sum of all digits is $19$.',
          answer: '$51319$',
          principle:
            'Write the number as $100 \\cdot \\overline{abc} + 19$ so divisibility by $19$ reduces to $19 \\mid \\overline{abc}$, with digit sum $a + b + c = 9$.',
          solution:
            'Let the five-digit number be $\\overline{abc19} = 100 \\cdot \\overline{abc} + 19$.\n- From (iii), $a + b + c + 1 + 9 = 19 \\implies a + b + c = 9$.\n- From (ii), $19 \\mid (100 \\cdot \\overline{abc} + 19) \\implies 19 \\mid 100 \\cdot \\overline{abc}$. Since $\\gcd(19, 100) = 1$, $\\overline{abc}$ itself must be a $3$-digit multiple of $19$ with digit sum $9$.\n\nCheck $3$-digit multiples of $19$ whose digits sum to $9$ (notice $19 \\times 9 = 171$):\n- $171 \\times 1 = 171$ ($1 + 7 + 1 = 9$)\n- $171 \\times 2 = 342$ ($3 + 4 + 2 = 9$)\n- $171 \\times 3 = 513$ ($5 + 1 + 3 = 9$)\n- $171 \\times 4 = 684$ ($6 + 8 + 4 = 18 \\ne 9$)\n- $171 \\times 5 = 855$ ($8 + 5 + 5 = 18 \\ne 9$)\n\nAny multiple of $19$ not divisible by $9$ has digit sum congruent to something other than $0 \\pmod 9$, so it cannot sum to $9$. Thus the largest valid $\\overline{abc}$ is $513$, giving the five-digit number $51319$.',
          rubric: [{ code: 'A1', text: 'Finds $51319$ as the largest valid five-digit number.' }]
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'A pizza parlor offers $5$ different toppings: pepperoni, mushrooms, broccoli, onions, and meatballs. Slices can be topped with any number of toppings, even no toppings. If a pizza lover buys a different type of pizza slice every day, how many days will it take to get a slice of each type of pizza?',
          answer: '$32$',
          principle:
            'Each of the $5$ toppings can independently be either included or excluded, giving $2^5$ subsets.',
          solution:
            'For each of the $5$ toppings, there are $2$ choices: include it or leave it off. Including the slice with $0$ toppings (the empty subset), the total number of distinct pizza types is:\n$$2^5 = 32.$$\nBuying one different type each day takes $32$ days.',
          rubric: [{ code: 'A1', text: 'Computes $2^5 = 32$ days.' }]
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'How many positive integers $n$ less than $100$ are there such that $n!$ is divisible by the sum of the first $n$ positive integers?\nNote: $n! = 1 \\times 2 \\times \\dots \\times (n - 1) \\times n$',
          answer: '$75$',
          principle:
            'Rewrite $\\frac{n(n+1)}{2} \\mid n!$ as $(n + 1) \\mid 2(n - 1)!$ and classify when $n + 1$ is prime versus composite.',
          solution:
            'The sum of the first $n$ positive integers is $\\frac{n(n+1)}{2}$. Since $n! = n \\cdot (n - 1)!$, we have:\n$$\\frac{n!}{n(n+1)/2} = \\frac{2(n - 1)!}{n + 1}.$$\nThis is an integer if and only if $(n + 1) \\mid 2(n - 1)!$.\n- If $n + 1$ is an **odd prime** $p \\ge 3$, then none of $2, 1, 2, \\dots, p - 2$ is divisible by $p$, so $p \\nmid 2(p - 2)!$.\n- If $n = 1$ ($n + 1 = 2$) or $n = 3$ ($n + 1 = 4$), direct substitution works: $\\frac{2(0!)}{2} = 1$ and $\\frac{2(2!)}{4} = 1$.\n- If $n + 1 \\ge 6$ is **composite**, then either $n + 1 = ab$ with $2 \\le a < b \\le n - 1$ (so both $a$ and $b$ appear in $(n - 1)!$), or $n + 1 = p^2$ for a prime $p \\ge 3$ (so $p$ and $2p \\le p^2 - 2 = n - 1$ both appear in $(n - 1)!$). In both cases $(n + 1) \\mid (n - 1)!$.\n\nThus the condition fails if and only if $n + 1$ is an odd prime with $n < 100$, i.e., $3 \\le n + 1 \\le 97$. There are $25$ primes at most $100$, of which $24$ are odd ($3$ through $97$). Therefore, the number of valid integers $n \\in \\{1, 2, \\dots, 99\\}$ is:\n$$99 - 24 = 75.$$',
          rubric: [{ code: 'A1', text: 'Excludes the $24$ values $n = p - 1$ for odd primes $p \\le 97$ to obtain $75$.' }]
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'In the figure, $B$ is the mid-point of $AD$, $C$ is the mid-point of $DE$, $A$ is the mid-point of $EF$, and $M$ is the midpoint of $AF$. If the area of $\\triangle AMB$ is $6\\text{ cm}^2$, how many $\\text{cm}^2$ is the remaining area of $\\triangle DEF$?',
          figures: [
            {
              src: '/papers/imso-mat-simulasi-1/fig-22.webp',
              alt: 'Triangle DEF with point A on side EF, C on side DE, B on segment AD, and M on segment AF.',
              caption: 'Triangle DEF with midpoints A, B, C, and M for Question 22.'
            }
          ],
          answer: '$42\\text{ cm}^2$',
          principle:
            'Compare bases along $EF$ and heights from $D$ and $B$ to express $[\\triangle AMB]$ as a fraction of $[\\triangle DEF]$, then subtract $[\\triangle AMB]$.',
          solution:
            'Because $M$ is the midpoint of $AF$ and $A$ is the midpoint of $EF$:\n$$AM = \\frac{1}{2} AF = \\frac{1}{4} EF.$$\nBecause $B$ is the midpoint of $AD$ and $A$ lies on $EF$, the perpendicular height from $B$ to line $EF$ is $\\frac{1}{2}$ the perpendicular height from $D$ to line $EF$.\nComparing triangle areas:\n$$[\\triangle AMB] = \\frac{1}{4} \\times \\frac{1}{2} [\\triangle DEF] = \\frac{1}{8} [\\triangle DEF].$$\nSince $[\\triangle AMB] = 6\\text{ cm}^2$, the area of $\\triangle DEF$ is $8 \\times 6 = 48\\text{ cm}^2$, so the remaining area of $\\triangle DEF$ is:\n$$48 - 6 = 42\\text{ cm}^2.$$',
          rubric: [{ code: 'A1', text: 'Finds $[\\triangle DEF] = 48\\text{ cm}^2$ and remaining area $42\\text{ cm}^2$.' }]
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Alex and Betty are facing each other. Between them, written on the ground, is a sequence of digits and plus signs, as shown in the figure below. From their points of view, Alex and Betty see two different expressions. Two digits can be filled in the two squares so that their expressions have the same value. What is that value?',
          figures: [
            {
              src: '/papers/imso-mat-simulasi-1/fig-23.webp',
              alt: 'Alex on the left and Betty on the right facing a vertical addition expression containing two blank squares between them.',
              caption: 'Alex and Betty viewing the expression on the ground for Question 23.'
            }
          ],
          answer: '$421$',
          principle:
            'Only digits that remain valid digits when rotated $180^\\circ$ ($0, 1, 6, 8, 9$) can be placed in the two squares; equate Alex\u2019s expression and Betty\u2019s upside-down reading.',
          solution:
            'Reading left-to-right from Alex\u2019s side (top to bottom in the figure), Alex sees:\n$$89 + 16 + 69 + 6\\boxed{x} + \\boxed{y}8 + 88,$$\nwhere $x$ is the upper blank digit and $y$ is the lower blank digit.\nWhen rotated $180^\\circ$ for Betty (bottom to top in the figure), the digits transform as $0 \\leftrightarrow 0$, $1 \\leftrightarrow 1$, $6 \\leftrightarrow 9$, and $8 \\leftrightarrow 8$, so Betty sees:\n$$88 + 8\\boxed{y\'} + \\boxed{x\'}9 + 69 + 91 + 68,$$\nwhere $x\', y\'$ are the rotated images of $x, y$.\n\nEquating the two sums:\n$$(89 + 16 + 69 + 88) + (60 + x) + (10y + 8) = (88 + 69 + 91 + 68) + (80 + y\') + (10x\' + 9)$$\n$$330 + x + 10y = 405 + 10x\' + y\' \\implies 10y + x - 10x\' - y\' = 75.$$\nTesting the valid strobogrammatic digits $x, y \\in \\{0, 1, 6, 8, 9\\}$:\n- Setting $y = 9$ ($y\' = 6$) and $x = 1$ ($x\' = 1$) gives $90 + 1 - 10 - 6 = 75$.\n- No other choice from $\\{0, 1, 6, 8, 9\\}$ satisfies $10y + x - 10x\' - y\' = 75$ (for $y \\le 8$, $10y + x \\le 89$, so $10x\' + y\' \\le 14$, forcing $x\' \\in \\{0, 1\\}$ and $y\' \\le 4$, which fails for $y \\in \\{0, 1, 6, 8\\}$).\n\nCheck: Alex sees $89 + 16 + 69 + 61 + 98 + 88 = 421$, and Betty sees $88 + 86 + 19 + 69 + 91 + 68 = 421$.',
          rubric: [{ code: 'A1', text: 'Finds $x = 1, y = 9$ and the common sum $421$.' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'How many five-digit numbers have the digits descending from left to right without repetition? (Let\u2019s say the number is $\\overline{abcde}$, then $a > b > c > d > e$.)',
          answer: '$252$',
          principle:
            'Any subset of $5$ distinct digits chosen from $\\{0, 1, \\dots, 9\\}$ has a unique strictly decreasing arrangement, and its largest digit is automatically nonzero.',
          solution:
            'Every $5$-digit number $\\overline{abcde}$ with $a > b > c > d > e$ corresponds uniquely to a $5$-element subset of the $10$ digits $\\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\\}$: once $5$ distinct digits are chosen, there is only one way to sort them in strictly decreasing order, and the leading digit $a$ is at least $4 > 0$.\nTherefore, the count is:\n$$\\binom{10}{5} = \\frac{10 \\times 9 \\times 8 \\times 7 \\times 6}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 252.$$',
          rubric: [{ code: 'A1', text: 'Computes $\\binom{10}{5} = 252$.' }]
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'During a week, five university students $A, B, C, D$ and $E$ attended lectures from Monday to Friday. Given that:\n- For each day from Monday to Friday, exactly three of them attended lectures while the other two were absent.\n- No students were absent for $2$ consecutive days, and no students attended lectures for $3$ consecutive days.\n- $E$ was absent for $2$ more days than $B$; there was only one day when $A$ and $C$ both attended lectures; $C$ attended lecture on Monday.\n\nWho were the $3$ students that attended lectures on Friday?',
          answer: '$A, B, D$',
          principle:
            'List the valid $5$-day attendance strings avoiding $00$ (two consecutive absences) and $111$ (three consecutive attendances), then enforce the daily totals and constraints.',
          solution:
            'Represent each student\u2019s Monday\u2013Friday schedule as a $5$-bit string of $1$ (present) and $0$ (absent). Avoiding `00` (two consecutive absences) and `111` (three consecutive attendances) allows at least $1$ and at most $3$ absences:\n- $3$ absences: only `01010` ($2$ presences).\n- $1$ absence: only `11011` ($4$ presences).\n- $2$ absences: `11010`, `10110`, `10101`, `01101`, `01011` ($3$ presences each).\n\n1. **Determine $B$ and $E$:** Since $E$ was absent $2$ more days than $B$, the only possible pair of absence counts is $(1, 3)$, forcing $B = \\text{\\texttt{11011}}$ and $E = \\text{\\texttt{01010}}$.\n2. **Analyze Wednesday and Tuesday:** On Wednesday, both $B$ and $E$ are absent, so **all three** of $A, C, D$ must attend on Wednesday. Thus $A$ and $C$ both attend on Wednesday, which must be the **only** day they attend together.\n3. **Determine $A, C, D$ across the remaining days:**\n   - $C$ attended on Monday, so $A$ was absent on Monday (since $A$ and $C$ share only Wednesday). Avoiding `00` forces $A$ to attend on Tuesday.\n   - On Tuesday, $B$ and $E$ already attend, leaving only one slot among $A, C, D$; since $A$ attends Tuesday, both $C$ and $D$ are absent on Tuesday.\n   - On Thursday, $B$ and $E$ again attend, leaving only one slot among $A, C, D$. If $C$ were absent on Thursday, $C$ would attend Friday (`10101`), forcing $A$ to be absent on both Thursday and Friday (`01100`), which violates the no-consecutive-absences rule. Therefore $C$ must attend on Thursday and be absent on Friday (`10110`).\n   - Since $C$ takes the single remaining slot on Thursday, both $A$ and $D$ are absent on Thursday. Avoiding `00` then forces both $A$ and $D$ to attend on Friday (giving $A = \\text{\\texttt{01101}}$ and $D = \\text{\\texttt{10101}}$, which also fills the third Monday slot alongside $B$ and $C$).\n\nSummary of the unique schedule:\n- $A$: `01101` (Tue, Wed, Fri)\n- $B$: `11011` (Mon, Tue, Thu, Fri)\n- $C$: `10110` (Mon, Wed, Thu)\n- $D$: `10101` (Mon, Wed, Fri)\n- $E$: `01010` (Tue, Thu)\n\nTherefore, the $3$ students who attended lectures on Friday are **$A, B, D$**.',
          rubric: [{ code: 'A1', text: 'Deduces the unique Monday\u2013Friday attendance table and identifies $A, B, D$ on Friday.' }]
        }
      ]
    }
  ]
};
