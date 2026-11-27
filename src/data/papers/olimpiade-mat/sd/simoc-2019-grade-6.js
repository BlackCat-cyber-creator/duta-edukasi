/**
 * Paket Soal: SIMOC 2019 Grade 6 (Primary 6)
 * Sumber: Singapore International Math Olympiad Challenge 2019, Grade 6 Contest (Grade-6-SIMOC-2019.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 21, 24, dan 25 dilengkapi gambar potongan asli (.webp) di public/papers/simoc-2019-g6/.
 */
export default {
  id: 'simoc-2019-g6',
  slug: 'simoc-2019-grade-6',
  subject: 'olimpiade-mat',
  grade: 6,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'SIMOC 2019 Grade 6: arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'sd6-bab1-pecahan-desimal',
    'sd6-bab2-rasio',
    'sd6-bab3-kubus-balok',
    'sd6-bab4-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SIMOC',
  title: 'SIMOC 2019 Grade 6',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Diagrams for Questions 21, 24, and 25 are provided as figures.',
  source: {
    org: 'SIMOC',
    file: 'Grade-6-SIMOC-2019.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section A: Multiple Choice',
      marks: 30,
      stem: 'Choose the one correct answer for each question (15 questions, 2 marks each).',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            'What is the value of\n$$\\frac{1 \\times 2 \\times 3 + 3 \\times 6 \\times 9 + 7 \\times 14 \\times 21}{1 \\times 4 \\times 5 + 3 \\times 12 \\times 15 + 7 \\times 28 \\times 35}?$$\n\nA. $\\frac{2}{5}$\nB. $\\frac{3}{7}$\nC. $\\frac{2}{3}$\nD. $\\frac{3}{10}$\nE. None of the above',
          answer: 'D. $\\frac{3}{10}$',
          principle:
            'Factor out the common scaling factor $(1 + 3^3 + 7^3)$ from both the numerator and the denominator to simplify immediately.',
          solution:
            'Notice that each term in the numerator is a scaled copy of $1 \\times 2 \\times 3$, and each term in the denominator is a scaled copy of $1 \\times 4 \\times 5$:\n$$1 \\times 2 \\times 3 + 3 \\times 6 \\times 9 + 7 \\times 14 \\times 21 = (1 \\times 2 \\times 3)(1^3 + 3^3 + 7^3),$$\n$$1 \\times 4 \\times 5 + 3 \\times 12 \\times 15 + 7 \\times 28 \\times 35 = (1 \\times 4 \\times 5)(1^3 + 3^3 + 7^3).$$\nCanceling $(1^3 + 3^3 + 7^3)$ gives:\n$$\\frac{1 \\times 2 \\times 3}{1 \\times 4 \\times 5} = \\frac{6}{20} = \\frac{3}{10}.$$',
          rubric: [
            { code: 'M1', text: 'Factors out $(1^3 + 3^3 + 7^3)$ from both the numerator and denominator.' },
            { code: 'A1', text: 'Simplifies $\\frac{6}{20}$ to $\\frac{3}{10}$, option D.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'What is the last digit of the sum $76^{2019} + 25^{2019}$?\n\nA. $1$\nB. $5$\nC. $6$\nD. $11$\nE. None of the Above',
          answer: 'A. $1$',
          principle:
            'Any positive integer power of a number ending in $6$ ends in $6$, and any positive integer power of a number ending in $5$ ends in $5$.',
          solution:
            'Since $6 \\times 6 = 36$ ends in $6$, every positive integer power of $76$ ends in $6$.\nSince $5 \\times 5 = 25$ ends in $5$, every positive integer power of $25$ ends in $5$.\nAdding the units digits gives $6 + 5 = 11$, so the last digit of $76^{2019} + 25^{2019}$ is $1$.',
          rubric: [
            { code: 'M1', text: 'Identifies the units digits of $76^{2019}$ as $6$ and $25^{2019}$ as $5$.' },
            { code: 'A1', text: 'Finds units digit $1$ from $6 + 5 = 11$, option A.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'It takes $8$ persons $3$ days to finish baking $144$ cookies. At the same rate, how many cookies can $12$ persons bake in $6$ days?\n\nA. $12$\nB. $324$\nC. $432$\nD. $500$\nE. None of the Above',
          answer: 'C. $432$',
          principle:
            'Find the unit rate per person-day, or scale the output proportionally by both the number of persons and the number of days.',
          solution:
            'The number of cookies baked per person per day is:\n$$\\frac{144}{8 \\times 3} = \\frac{144}{24} = 6\\text{ cookies}.$$\nTherefore, $12$ persons working for $6$ days can bake:\n$$12 \\times 6 \\times 6 = 432\\text{ cookies}.$$',
          rubric: [
            { code: 'M1', text: 'Computes the rate of $6$ cookies per person-day (or scales by $\\frac{12}{8} \\times \\frac{6}{3}$).' },
            { code: 'A1', text: 'Obtains $432$ cookies, option C.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            "Allan, Bob and Charles were comparing the number of marbles they had. Allan had $\\frac{2}{3}$ of the combined number of marbles that Bob and Charles have. Bob had $\\frac{2}{5}$ of the combined number of marbles that Allan and Charles have. What fraction of the combined number of Allan's and Bob's marbles did Charles have?\n\nA. $\\frac{7}{12}$\nB. $\\frac{11}{24}$\nC. $\\frac{1}{2}$\nD. $\\frac{4}{15}$\nE. None of the Above",
          answer: 'B. $\\frac{11}{24}$',
          principle:
            'Express each person’s share as a fraction of the invariant total number of marbles.',
          solution:
            'Let $T = A + B + C$ be the total number of marbles.\n- Since $A = \\frac{2}{3}(B + C)$, Allan has $2$ parts while Bob and Charles together have $3$ parts, so $A = \\frac{2}{2+3}T = \\frac{2}{5}T$.\n- Since $B = \\frac{2}{5}(A + C)$, Bob has $2$ parts while Allan and Charles together have $5$ parts, so $B = \\frac{2}{2+5}T = \\frac{2}{7}T$.\n\nThus Charles has:\n$$C = T - \\frac{2}{5}T - \\frac{2}{7}T = \\left(1 - \\frac{14 + 10}{35}\\right)T = \\frac{11}{35}T.$$\nSince $A + B = \\frac{24}{35}T$, the required fraction is:\n$$\\frac{C}{A + B} = \\frac{11/35}{24/35} = \\frac{11}{24}.$$',
          rubric: [
            { code: 'M1', text: 'Converts both ratios to fractions of the total ($A = \\frac{2}{5}T$, $B = \\frac{2}{7}T$) and finds $C = \\frac{11}{35}T$.' },
            { code: 'A1', text: 'Computes $\\frac{C}{A+B} = \\frac{11}{24}$, option B.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'We define the least common multiple (LCM) of two fractions, $\\frac{a}{b}$ and $\\frac{c}{d}$, to be the least fraction $\\frac{x}{y}$ such that $\\frac{x}{y} \\div \\frac{a}{b}$ and $\\frac{x}{y} \\div \\frac{c}{d}$ are both integers. For example, $\\text{LCM}\\left(\\frac{1}{2}, \\frac{2}{3}\\right) = \\frac{2}{1}$, since $\\frac{2}{1} \\div \\frac{1}{2} = 4$ and $\\frac{2}{1} \\div \\frac{2}{3} = 3$, and $\\frac{2}{1}$ is the least fraction with this property. Find the $\\text{LCM}\\left(\\frac{15}{49}, \\frac{5}{21}, \\frac{25}{14}\\right)$.\n\nA. $\\frac{75}{7}$\nB. $\\frac{75}{14}$\nC. $\\frac{30}{7}$\nD. $\\frac{150}{7}$\nE. None of the Above',
          answer: 'A. $\\frac{75}{7}$',
          principle:
            'For reduced fractions, $\\text{LCM}\\left(\\frac{a_1}{b_1}, \\frac{a_2}{b_2}, \\frac{a_3}{b_3}\\right) = \\frac{\\text{lcm}(a_1, a_2, a_3)}{\\gcd(b_1, b_2, b_3)}$.',
          solution:
            'Let $\\frac{x}{y}$ be in lowest terms. For $\\frac{x}{y} \\div \\frac{a}{b} = \\frac{xb}{ya}$ to be an integer, $x$ must be a multiple of $a$ and $y$ must divide $b$ (since $\\gcd(x,y)=1$ and $\\gcd(a,b)=1$).\nTo minimize $\\frac{x}{y}$, take the smallest positive $x$ divisible by $15, 5, 25$ and the largest $y$ dividing $49, 21, 14$:\n$$x = \\text{lcm}(15, 5, 25) = 75, \\qquad y = \\gcd(49, 21, 14) = 7.$$\nHence the LCM is $\\frac{75}{7}$. (Check: $\\frac{75}{7} \\div \\frac{15}{49} = 35$, $\\frac{75}{7} \\div \\frac{5}{21} = 45$, and $\\frac{75}{7} \\div \\frac{25}{14} = 6$.)',
          rubric: [
            { code: 'M1', text: 'Uses $x = \\text{lcm}(15, 5, 25) = 75$ and $y = \\gcd(49, 21, 14) = 7$.' },
            { code: 'A1', text: 'Finds $\\frac{75}{7}$, option A.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'Find the smallest whole number that we must add to\n$$2 + 2^2 + 2^3 + \\dots + 2^{10}$$\nfor it to be divisible by $10$.\n\nA. $2$\nB. $4$\nC. $6$\nD. $8$\nE. None of the above',
          answer: 'B. $4$',
          principle:
            'Track the units digit of consecutive powers of $2$ in cycles of $4$, or evaluate the sum directly.',
          solution:
            'The units digits of $2^1, 2^2, 2^3, 2^4, \\dots$ repeat in cycles of length $4$: $2, 4, 8, 6$.\nEach complete cycle of $4$ terms has units-digit sum $2 + 4 + 8 + 6 = 20$, which ends in $0$.\nThus $2 + 2^2 + \\dots + 2^8$ ends in $0$, leaving the last two terms:\n$$2^9 + 2^{10} = 512 + 1024 = 1536,$$\nwhich has units digit $6$. (Equivalently, the entire sum is $2^{11} - 2 = 2048 - 2 = 2046$.)\nTo reach the next multiple of $10$ ($2050$), we must add $10 - 6 = 4$.',
          rubric: [
            { code: 'M1', text: 'Finds that the sum $2 + 2^2 + \\dots + 2^{10}$ ends in $6$ (equals $2046$).' },
            { code: 'A1', text: 'Determines $10 - 6 = 4$, option B.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'How many numbers between $1$ and $202$ are multiples of $3$ or $4$ but not $12$?\n\nA. $67$\nB. $117$\nC. $101$\nD. $133$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Apply inclusion-exclusion, subtracting multiples of $\\text{lcm}(3, 4) = 12$ from both counts because multiples of $12$ are excluded completely.',
          solution:
            'Count the integers from $1$ to $202$ inclusive (note $1$ and $202$ are not multiples of $3$ or $4$, so inclusive and strictly-between counts are identical):\n- Multiples of $3$: $\\lfloor 202 \\div 3 \\rfloor = 67$.\n- Multiples of $4$: $\\lfloor 202 \\div 4 \\rfloor = 50$.\n- Multiples of $12$: $\\lfloor 202 \\div 12 \\rfloor = 16$.\n\nThe count of numbers that are multiples of $3$ or $4$ (including $12$) is $67 + 50 - 16 = 101$.\nExcluding the $16$ multiples of $12$ leaves:\n$$101 - 16 = 85.$$\nSince $85$ is not among options A–D, the mathematically correct choice is **E. None of the above**. (Note: the published SIMOC 2019 answer key lists C. $101$, which corresponds to $67 + 50 - 16$ without excluding multiples of $12$.)',
          rubric: [
            { code: 'M1', text: 'Finds $67$ multiples of $3$, $50$ multiples of $4$, and $16$ multiples of $12$, subtracting $16$ from both sets.' },
            { code: 'A1', text: 'Obtains $85$ and selects option E (None of the above).' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'The ratios of the volume of a rectangular box to its length, width and height are $5:1$, $1:3$ and $5:3$, respectively. Find the surface area of the box.\n\nA. $7$\nB. $8.6$\nC. $14$\nD. $17.2$\nE. None of the Above',
          answer: 'C. $14$',
          principle:
            'Since $V = LWH$, the ratio of volume $V$ to one edge equals the product of the other two edges (one face area).',
          solution:
            'Let the length, width, and height of the box be $L, W, H$, so $V = LWH$. From the given ratios:\n$$WH = \\frac{V}{L} = 5, \\qquad LH = \\frac{V}{W} = \\frac{1}{3}, \\qquad LW = \\frac{V}{H} = \\frac{5}{3}.$$\nThe surface area of the rectangular box is twice the sum of the three distinct face areas:\n$$\\text{Surface area} = 2(WH + LH + LW) = 2\\left(5 + \\frac{1}{3} + \\frac{5}{3}\\right) = 2(5 + 2) = 14.$$',
          rubric: [
            { code: 'M1', text: 'Identifies the three face areas as $WH = 5$, $LH = \\frac{1}{3}$, and $LW = \\frac{5}{3}$.' },
            { code: 'A1', text: 'Computes surface area $2(5 + \\frac{1}{3} + \\frac{5}{3}) = 14$, option C.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'JustRunLah! had a race with $6$ runners, among them Alice and Bob. If Alice finished ahead of Bob, how many possible outcomes are there for the final rankings of the runners?\n\nA. $24$\nB. $120$\nC. $240$\nD. $360$\nE. None of the Above',
          answer: 'D. $360$',
          principle:
            'By symmetry, in all permutations of $6$ distinct runners, Alice finishes ahead of Bob in exactly half of them.',
          solution:
            'Assuming no ties, the $6$ runners can finish in $6! = 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 = 720$ possible orders.\nFor every ranking where Alice finishes ahead of Bob, swapping Alice and Bob produces a unique ranking where Bob finishes ahead of Alice.\nTherefore, exactly half of the rankings have Alice ahead of Bob:\n$$\\frac{720}{2} = 360.$$',
          rubric: [
            { code: 'M1', text: 'Finds $6! = 720$ total rankings and applies symmetry between Alice and Bob.' },
            { code: 'A1', text: 'Computes $\\frac{720}{2} = 360$, option D.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'Jerry walked into a computer store having $2000$ dollars. He bought a laptop with a $20\\%$ discount. To recover his expense, he sold the laptop for $50\\%$ more than the price he purchased it. If he had $2720$ dollars at the end, how much was the cost of the laptop without the discount?\n\nA. $1500$ dollars\nB. $1600$ dollars\nC. $1700$ dollars\nD. $1800$ dollars\nE. None of the Above',
          answer: 'D. $1800$ dollars',
          principle:
            'Relate Jerry’s net profit ($2720 - 2000 = 720$ dollars) directly to $50\\%$ of his discounted purchase price.',
          solution:
            'Jerry started with $2000$ dollars and ended with $2720$ dollars, so his net profit from selling the laptop was:\n$$2720 - 2000 = 720\\text{ dollars}.$$\nSince he sold the laptop for $50\\%$ more than the price he paid for it, his profit of $720$ dollars equals $50\\%$ (one-half) of his discounted purchase price.\nThus the discounted price he paid was:\n$$2 \\times 720 = 1440\\text{ dollars}.$$\nBecause $1440$ dollars reflects a $20\\%$ discount ($80\\%$ of the original price), the original cost without the discount was:\n$$\\frac{1440}{0.8} = 1800\\text{ dollars}.$$',
          rubric: [
            { code: 'M1', text: 'Finds profit $720$ dollars equals $50\\%$ of the discounted price ($1440$ dollars), which is $80\\%$ of the original price.' },
            { code: 'A1', text: 'Calculates $1440 \\div 0.8 = 1800$ dollars, option D.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'When is the first time after $4{:}00$ AM that the minute hand is exactly $2$ minutes past the hour hand?\n\nA. $4{:}20$ AM\nB. $4{:}24$ AM\nC. $4{:}30$ AM\nD. $4{:}36$ AM\nE. None of the above',
          answer: 'B. $4{:}24$ AM',
          principle:
            'In $60$ minutes the minute hand moves $60$ minute-marks while the hour hand moves $5$ minute-marks, so the minute hand gains $55$ minute-marks per hour ($\\frac{11}{12}$ mark per minute).',
          solution:
            'At $4{:}00$ AM, the minute hand is at $0$ and the hour hand is at the $20$-minute mark ($20$ minute-marks ahead).\nFor the minute hand to be $2$ minute-marks past the hour hand, it must gain $20 + 2 = 22$ minute-marks relative to the hour hand.\nThe relative speed is $1 - \\frac{5}{60} = \\frac{11}{12}$ minute-marks per minute, so the required time is:\n$$22 \\div \\frac{11}{12} = 22 \\times \\frac{12}{11} = 24\\text{ minutes}.$$\nTherefore, the time is $4{:}24$ AM.',
          rubric: [
            { code: 'M1', text: 'Sets up the catch-up distance $20 + 2 = 22$ minute-marks at relative speed $\\frac{11}{12}$ marks/min.' },
            { code: 'A1', text: 'Finds $24$ minutes after $4{:}00$, giving $4{:}24$ AM, option B.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'Peter brought some apples, oranges and kiwis to the local market to sell. After he sold $4$ apples, he was left with $3$ oranges for each remaining apple. He then sold $7$ oranges and was left with $3$ kiwis for each remaining orange. Finally, he sold $27$ kiwis and was left with $3$ kiwis for each remaining apple. How many kiwis did Peter bring to the local market?\n\nA. $24$\nB. $51$\nC. $66$\nD. $68$\nE. None of the Above',
          answer: 'B. $51$',
          principle:
            'Express the initial number of oranges and kiwis in terms of the final remaining apples.',
          solution:
            'Let $a$ be the number of apples remaining after Peter sold $4$ apples.\n1. Before selling any oranges, he had $3a$ oranges.\n2. After selling $7$ oranges, he had $3a - 7$ oranges left, so the number of kiwis he originally brought was:\n$$3(3a - 7) = 9a - 21.$$\n3. After selling $27$ kiwis, the remaining kiwis equal $3$ for each remaining apple ($3a$):\n$$(9a - 21) - 27 = 3a \\implies 9a - 48 = 3a \\implies 6a = 48 \\implies a = 8.$$\nTherefore, the number of kiwis Peter brought to the market was:\n$$9(8) - 21 = 72 - 21 = 51.$$',
          rubric: [
            { code: 'M1', text: 'Expresses initial kiwis as $3(3a - 7) = 9a - 21$ and solves $9a - 48 = 3a$ to get $a = 8$.' },
            { code: 'A1', text: 'Computes $9(8) - 21 = 51$ kiwis, option B.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'The long road along Orchard Street is being repaired. When $10\\%$ of the road was successfully repaired, the road management team decided to buy new equipment to speed up the road repair. As a result, the rate at which the road was being repaired increased by $20\\%$ and the time to complete the road repair decreased by $15\\%$ (compared to the original). In total, it took $144.5$ days to repair the road. How long, in days, was the original plan to finish the road repair?\n\nA. $170$\nB. $180$\nC. $190$\nD. $200$\nE. None of the Above',
          answer: 'A. $170$',
          principle:
            'Use either the $15\\%$ overall time reduction ($85\\%$ of original time $= 144.5$ days) or split the job into the $10\\%$ and $90\\%$ stages.',
          solution:
            'Let $T$ days be the original planned time to finish the repair.\nMethod 1 (using the $15\\%$ decrease in total time):\nSince the total repair time decreased by $15\\%$ compared to the original plan, the actual time of $144.5$ days represents $100\\% - 15\\% = 85\\%$ of $T$:\n$$0.85T = 144.5 \\implies T = \\frac{144.5}{0.85} = 170\\text{ days}.$$\nMethod 2 (checking with the two stages):\nThe first $10\\%$ took $0.1T$ days, and the remaining $90\\%$ at $1.2\\times$ the original rate took $\\frac{0.9}{1.2}T = 0.75T$ days, giving $0.1T + 0.75T = 0.85T = 144.5 \\implies T = 170$ days.',
          rubric: [
            { code: 'M1', text: 'Forms the equation $0.85T = 144.5$ (from $0.1T + \\frac{0.9}{1.2}T = 144.5$ or $15\\%$ time reduction).' },
            { code: 'A1', text: 'Solves $T = 170$ days, option A.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'The fractions $\\frac{a}{3}$ and $\\frac{b}{7}$ are proper fractions. If the value of $\\frac{a}{3} + \\frac{b}{7}$ is between $1.38$ and $1.39$, find $ab$.\n\nA. $6$\nB. $8$\nC. $10$\nD. $12$\nE. None of the above',
          answer: 'C. $10$',
          principle:
            'Bound the numerator $7a + 3b$ over the common denominator $21$ by multiplying the interval $(1.38, 1.39)$ by $21$.',
          solution:
            'Since $\\frac{a}{3}$ and $\\frac{b}{7}$ are proper positive fractions, $a \\in \\{1, 2\\}$ and $b \\in \\{1, 2, 3, 4, 5, 6\\}$.\nWriting over the common denominator $21$:\n$$1.38 < \\frac{7a + 3b}{21} < 1.39.$$\nMultiplying through by $21$:\n$$28.98 < 7a + 3b < 29.19.$$\nSince $7a + 3b$ is an integer, we must have $7a + 3b = 29$.\n- If $a = 1$, then $3b = 22$ (not divisible by $3$).\n- If $a = 2$, then $3b = 29 - 14 = 15 \\implies b = 5$.\n\nHence $a = 2$ and $b = 5$, giving $ab = 2 \\times 5 = 10$.',
          rubric: [
            { code: 'M1', text: 'Multiplies $1.38 < \\frac{7a+3b}{21} < 1.39$ by $21$ to deduce $7a + 3b = 29$.' },
            { code: 'A1', text: 'Finds $a = 2, b = 5$ and $ab = 10$, option C.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Find the value of\n$$\\frac{2019^2}{2019} - \\frac{2018^2}{2019} + \\frac{2017^2}{2019} - \\frac{2016^2}{2019} + \\dots - \\frac{4^2}{2019} + \\frac{3^2}{2019} - \\frac{2^2}{2019} + \\frac{1^2}{2019}$$\n\nA. $1010$\nB. $2019$\nC. $2020$\nD. $2019^2$\nE. None of the Above',
          answer: 'A. $1010$',
          principle:
            'Group consecutive alternating squares using the difference of squares identity $x^2 - (x-1)^2 = x + (x-1)$.',
          solution:
            'Combine the terms over the common denominator $2019$ and pair consecutive squares from the left:\n$$\\text{Numerator} = (2019^2 - 2018^2) + (2017^2 - 2016^2) + \\dots + (3^2 - 2^2) + 1^2.$$\nUsing $x^2 - (x - 1)^2 = (x + x - 1)(x - (x - 1)) = x + (x - 1)$:\n$$\\text{Numerator} = (2019 + 2018) + (2017 + 2016) + \\dots + (3 + 2) + 1 = \\frac{2019 \\times 2020}{2}.$$\nDividing by $2019$ yields:\n$$\\frac{2019 \\times 2020}{2 \\times 2019} = \\frac{2020}{2} = 1010.$$',
          rubric: [
            { code: 'M1', text: 'Applies $x^2 - (x-1)^2 = x + (x-1)$ to simplify the numerator to $1 + 2 + \\dots + 2019 = \\frac{2019 \\times 2020}{2}$.' },
            { code: 'A1', text: 'Divides by $2019$ to obtain $1010$, option A.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Short Answer',
      marks: 40,
      stem: 'Write down the numerical answer to each question (10 questions, 4 marks each).',
      parts: [
        {
          label: '16',
          marks: 4,
          prompt:
            'Let the operations $\\triangle$ and $\\blacksquare$ be defined for all numbers $a$ and $b$ as follows:\n$$a \\triangle b = a + 3 \\times b$$\n$$a \\blacksquare b = a + 4 \\times b$$\nFor example,\n$$4 \\triangle 7 = 4 + 3 \\times 7 = 25$$\n$$9 \\blacksquare 2 = 9 + 4 \\times 2 = 17$$\n\nIf $4 \\triangle (5 \\times y) = (5 \\times y) \\blacksquare 4$, what is the value of $15 \\times y$?',
          answer: '$18$',
          principle:
            'Substitute the definitions of $\\triangle$ and $\\blacksquare$ into both sides of the equation and solve directly for $5y$ (or $15y$).',
          solution:
            'Evaluate each side using the given definitions:\n- Left side: $4 \\triangle (5 \\times y) = 4 + 3 \\times (5 \\times y) = 4 + 15y$.\n- Right side: $(5 \\times y) \\blacksquare 4 = 5y + 4 \\times 4 = 5y + 16$.\n\nEquating both sides:\n$$4 + 15y = 5y + 16 \\implies 10y = 12 \\implies y = 1.2.$$\nTherefore:\n$$15 \\times y = 15 \\times 1.2 = 18.$$',
          rubric: [
            { code: 'M2', text: 'Translates the equation into $4 + 15y = 5y + 16$ and solves $10y = 12$.' },
            { code: 'A2', text: 'Computes $15 \\times y = 18$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'A terminating fraction is a fraction that has a terminating decimal representation. For example, $\\frac{31}{40}$ is a terminating fraction since $\\frac{31}{40} = 0.775$ while $\\frac{1}{3}$ is NOT since $\\frac{1}{3} = 0.3333\\dots$. The fraction $\\frac{1}{2020}$ is not terminating. Find the least positive integer to be multiplied to $\\frac{1}{2020}$ to make it a terminating fraction.',
          answer: '$101$',
          principle:
            'A reduced fraction has a terminating decimal if and only if its denominator has no prime factors other than $2$ and $5$.',
          solution:
            'Factorize $2020$ into primes:\n$$2020 = 20 \\times 101 = 2^2 \\times 5 \\times 101.$$\nA fraction in lowest terms terminates in base $10$ if and only if its denominator contains only the prime factors $2$ and $5$.\nTo eliminate the prime factor $101$ from the denominator of $\\frac{k}{2020}$, the integer $k$ must be a multiple of $101$.\nThe least positive integer $k$ is $101$, giving $\\frac{101}{2020} = \\frac{1}{20} = 0.05$.',
          rubric: [
            { code: 'M2', text: 'Prime-factorizes $2020 = 2^2 \\times 5 \\times 101$ and notes that $101$ must be canceled.' },
            { code: 'A2', text: 'Finds the least positive integer $101$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'Two cars, A and B, on opposite sides of a long road, are traveling towards each other. Car A is traveling at a rate of $56\\text{ km/h}$ while Car B is traveling at a rate of $48\\text{ km/h}$. Cars A and B meet for the first time when Car A has traveled $32$ kilometers past midway. How long is the road in kilometres?',
          answer: '$832$',
          principle:
            'In equal travel time, the ratio of distances traveled equals the ratio of speeds, and Car A travels $2 \\times 32 = 64\\text{ km}$ farther than Car B.',
          solution:
            'Let the total length of the road be $D\\text{ km}$. When the two cars meet, Car A has traveled $\\frac{D}{2} + 32\\text{ km}$ and Car B has traveled $\\frac{D}{2} - 32\\text{ km}$.\nThus Car A traveled $32 + 32 = 64\\text{ km}$ farther than Car B.\nSince both cars traveled for the same time, the ratio of their distances equals the ratio of their speeds:\n$$\\frac{\\text{Distance}_A}{\\text{Distance}_B} = \\frac{56}{48} = \\frac{7}{6}.$$\nRepresenting their distances as $7$ units and $6$ units, the difference of $7 - 6 = 1$ unit corresponds to $64\\text{ km}$.\nThe total distance is $7 + 6 = 13$ units:\n$$D = 13 \\times 64 = 832\\text{ km}.$$',
          rubric: [
            { code: 'M2', text: 'Finds distance difference $2 \\times 32 = 64\\text{ km}$ and uses the speed ratio $56:48 = 7:6$.' },
            { code: 'A2', text: 'Computes road length $13 \\times 64 = 832\\text{ km}$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'Simon and Peter are brothers. Working alone, Simon can paint a room $2$ times as fast as his brother Peter. But when they work together, they horseplay and as a result, each of their working rates decreases by half. Last weekend, the two boys painted the room together for $20$ minutes. After which, Peter left, leaving Simon alone to finish painting the room. Simon took another $25$ additional minutes to finish the job. How long, in minutes, did it take Simon to paint the room alone?',
          answer: '$40$',
          principle:
            'Express both boys’ normal and reduced rates in terms of Peter’s solo rate $p$ to find the total work required.',
          solution:
            'Let Peter’s normal painting rate be $p$ (per minute), so Simon’s normal rate is $2p$.\nWhen they work together, each rate drops by half:\n- Simon’s reduced rate $= p$\n- Peter’s reduced rate $= \\frac{1}{2}p$\n- Combined reduced rate $= p + \\frac{1}{2}p = \\frac{3}{2}p$.\n\nTotal work needed to paint the room is the work done together in $20$ minutes plus Simon’s solo work in $25$ minutes:\n$$\\text{Total work} = 20 \\times \\frac{3}{2}p + 25 \\times 2p = 30p + 50p = 80p.$$\nWorking alone at his normal rate of $2p$, Simon takes:\n$$\\frac{80p}{2p} = 40\\text{ minutes}.$$',
          rubric: [
            { code: 'M2', text: 'Computes the combined reduced rate $\\frac{3}{2}p$ and total work $20(\\frac{3}{2}p) + 25(2p) = 80p$.' },
            { code: 'A2', text: 'Divides $80p \\div 2p$ to obtain $40$ minutes.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            "Larry tells Mary and Jerry that he is thinking of two consecutive integers from $1$ to $10$. He tells Mary one of the numbers, and he tells Jerry the other number. Then the following conversation occurs between Mary and Jerry:\n\n- *Mary:* I don't know your number.\n- *Jerry:* I don't know your number, either.\n- *Mary:* Ah, now I know your number.\n\nAssuming both Mary and Jerry used correct logic, what is the sum of the possible numbers Mary could have?",
          answer: '$22$',
          principle:
            'Track the numbers eliminated after each public statement using common-knowledge deduction from the endpoints $1$ and $10$.',
          solution:
            "Let $M$ be Mary's number and $J$ be Jerry's number, where $M, J \\in \\{1, 2, \\dots, 10\\}$ and $|M - J| = 1$.\n1. **Mary's first statement:** Mary does not know $J$. Since $1$ has only neighbor $2$ and $10$ has only neighbor $9$, Mary cannot have $1$ or $10$. Thus both players know $M \\in \\{2, 3, 4, 5, 6, 7, 8, 9\\}$.\n2. **Jerry's statement:** Jerry still does not know $M$. If $J = 1$, he would know $M = 2$; if $J = 2$, knowing $M \\neq 1$ would force $M = 3$. Symmetrically, if $J = 10$ or $J = 9$, knowing $M \\neq 10$ would force $M = 9$ or $M = 8$. Hence $J \\in \\{3, 4, 5, 6, 7, 8\\}$.\n3. **Mary's second statement:** Mary now knows $J$, which occurs if and only if exactly one of $M - 1$ and $M + 1$ lies in $\\{3, 4, 5, 6, 7, 8\\}$. Testing each $M \\in \\{2, \\dots, 9\\}$ leaves precisely:\n   - $M = 2$ (forces $J = 3$)\n   - $M = 3$ (forces $J = 4$)\n   - $M = 8$ (forces $J = 7$)\n   - $M = 9$ (forces $J = 8$)\n\nTherefore, the sum of the possible numbers Mary could have is:\n$$2 + 3 + 8 + 9 = 22.$$\n(Note: the published SIMOC 2019 answer key lists $11 = 2 + 9$, which omits Jerry's deduction from Mary's first statement.)",
          rubric: [
            { code: 'M2', text: 'Eliminates $M \\in \\{1, 10\\}$ after Mary’s first statement and $J \\in \\{1, 2, 9, 10\\}$ after Jerry’s statement.' },
            { code: 'A2', text: 'Identifies $M \\in \\{2, 3, 8, 9\\}$ and computes their sum $22$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'Refer to the figure below. The bigger semicircle is centered at $D$ and has a radius of $9\\text{ cm}$. The smaller semicircle is centered at $E$ and has a radius of $6\\text{ cm}$. Also, $FD$ and $HE$ are perpendicular to $DB$ and $EB$, respectively. Find the area of the shaded region. (Round off your answer to the nearest whole number and use $\\pi = 3.14$.)',
          figures: [
            {
              src: '/papers/simoc-2019-g6/fig-21.webp',
              alt: 'A large semicircle centered at D with vertical radius DF and a smaller semicircle centered at E sharing endpoint B with vertical radius EH, with shaded regions between the arcs and chord FHB.',
              caption: 'Overlapping semicircles diagram for Question 21.'
            }
          ],
          answer: '$68$',
          principle:
            'Verify that $F, H, B$ are collinear, then express the shaded area by adding and subtracting quarter-circles and right triangles.',
          solution:
            'Place $D$ at $(0, 0)$ along diameter $AB$ so $A = (-9, 0)$, $B = (9, 0)$, and $F = (0, 9)$. Since $EB = 6$, we have $E = (3, 0)$, $C = (-3, 0)$, and $H = (3, 6)$.\nNotice that $\\frac{FD}{DB} = \\frac{9}{9} = 1$ and $\\frac{HE}{EB} = \\frac{6}{6} = 1$, so $\\triangle FDB$ and $\\triangle HEB$ are both isosceles right triangles sharing angle $45^\\circ$ at $B$; hence $F, H, B$ are collinear.\n\nDecompose the shaded region using the boundary $A$–$F$–$H$–$B$:\n- Area of quarter-circle $ADF$ plus $\\triangle FDB$:\n$$\\frac{1}{4}\\pi(9^2) + \\frac{1}{2}(9)(9) = \\frac{81\\pi}{4} + 40.5.$$\n- Subtract the unshaded region below segment $FHB$ inside the smaller semicircle, which consists of quarter-circle $CEH$ and $\\triangle HEB$:\n$$\\frac{1}{4}\\pi(6^2) + \\frac{1}{2}(6)(6) = 9\\pi + 18.$$\n- Add the shaded circular segment between chord $HB$ and arc $HB$:\n$$\\frac{1}{4}\\pi(6^2) - \\frac{1}{2}(6)(6) = 9\\pi - 18.$$\n\nCombining all parts (the $9\\pi$ terms cancel):\n$$\\text{Shaded area} = \\left(\\frac{81\\pi}{4} + 40.5\\right) - (9\\pi + 18) + (9\\pi - 18) = \\frac{81\\pi}{4} + 4.5.$$\nUsing $\\pi = 3.14$:\n$$\\frac{81 \\times 3.14}{4} + 4.5 = 63.585 + 4.5 = 68.085 \\approx 68\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Establishes $F, H, B$ are collinear and sets up $(\\frac{81\\pi}{4} + 40.5) - (9\\pi + 18) + (9\\pi - 18)$.' },
            { code: 'A2', text: 'Computes $\\frac{81 \\times 3.14}{4} + 4.5 = 68.085$ and rounds to $68$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'At the most how many numbers can you choose from $1000$ to $1550$ so that the sum of any three numbers is divisible by $3$?',
          answer: '$184$',
          principle:
            'Group integers by remainder modulo $3$; any subset of size $\\ge 4$ whose every triple sums to a multiple of $3$ must lie entirely in a single residue class modulo $3$.',
          solution:
            'There are $1550 - 1000 + 1 = 551$ integers from $1000$ to $1550$ inclusive. Partition them by remainder modulo $3$:\n- $0 \\pmod 3$ ($1002$ to $1548$): $\\frac{1548 - 1002}{3} + 1 = 183$ numbers.\n- $1 \\pmod 3$ ($1000$ to $1549$): $\\frac{1549 - 1000}{3} + 1 = 184$ numbers.\n- $2 \\pmod 3$ ($1001$ to $1550$): $\\frac{1550 - 1001}{3} + 1 = 184$ numbers.\n\nFor every $3$ chosen numbers to have a sum divisible by $3$, suppose at least $4$ numbers are chosen. If two numbers $a$ and $b$ have different remainders modulo $3$, then any third chosen number $c$ must satisfy $c \\equiv -(a + b) \\pmod 3$, which forces $c$ to be the third remainder; picking a fourth number $d$ repeats one remainder (say $a \\equiv d$), and then $a + d + b \\not\\equiv 0 \\pmod 3$, a contradiction.\nThus all chosen numbers (when choosing more than $3$) must share the same remainder modulo $3$. Choosing all numbers congruent to $1 \\pmod 3$ (or $2 \\pmod 3$) gives the maximum count of $184$.',
          rubric: [
            { code: 'M2', text: 'Counts residue classes modulo $3$ ($183, 184, 184$) and proves all chosen numbers (for size $> 3$) must share the same remainder mod $3$.' },
            { code: 'A2', text: 'Determines the maximum count is $184$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'Define $n! = n \\times (n - 1) \\times (n - 2) \\times \\dots \\times 2 \\times 1$ and $0! = 1$. Find the number $k$ where $k = m^n$ such that\n$$\\frac{2000!}{1000!} = k \\times (1 \\times 3 \\times 5 \\times 7 \\times \\dots \\times 1997 \\times 1999).$$\nFind the value of $m + n$.',
          answer: '$1002$',
          principle:
            'Separate $2000!$ into the product of all $1000$ even factors and all $1000$ odd factors, then factor $2$ out of every even integer.',
          solution:
            'Split $2000!$ into its even and odd factors:\n$$2000! = (2 \\times 4 \\times 6 \\times \\dots \\times 2000) \\times (1 \\times 3 \\times 5 \\times \\dots \\times 1999).$$\nFactor $2$ out of each of the $1000$ even factors:\n$$2 \\times 4 \\times 6 \\times \\dots \\times 2000 = 2^{1000} \\times (1 \\times 2 \\times 3 \\times \\dots \\times 1000) = 2^{1000} \\times 1000!.$$\nDividing by $1000!$ gives:\n$$\\frac{2000!}{1000!} = 2^{1000} \\times (1 \\times 3 \\times 5 \\times \\dots \\times 1999).$$\nComparing with $k = m^n$, we obtain $m = 2$ and $n = 1000$, so:\n$$m + n = 2 + 1000 = 1002.$$',
          rubric: [
            { code: 'M2', text: 'Factors $2000!$ into $(2^{1000} \\cdot 1000!)$ times the odd product and cancels $1000!$.' },
            { code: 'A2', text: 'Identifies $m = 2, n = 1000$ and computes $m + n = 1002$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'In triangle $ABC$, points $D$ and $E$ are on sides $BC$ and $AC$ such that $AD$ and $BE$ are perpendicular to $BC$ and $AC$, respectively. Points $F$ and $G$ are on sides $BC$ and $AC$ such that $AF$ and $BG$ divide angles $BAC$ and $ABC$ into two equal parts, respectively. If $\\angle DAF = 7^\\circ$ and $\\angle EBG = 20^\\circ$, find the measure of $\\angle C$ (in degrees).',
          figures: [
            {
              src: '/papers/simoc-2019-g6/fig-24.webp',
              alt: 'Triangle ABC with altitudes AD and BE and angle bisectors AF and BG intersecting sides BC and AC respectively.',
              caption: 'Triangle ABC with altitudes and angle bisectors for Question 24.'
            }
          ],
          answer: '$42$',
          principle:
            'The angle between an altitude and an angle bisector from the same vertex of a triangle equals half the difference of the other two angles.',
          solution:
            'In the diagram, $D$ lies between $B$ and $F$ on $BC$, and $E$ lies between $A$ and $G$ on $AC$. Let the interior angles of $\\triangle ABC$ be $A, B, C$.\n1. In right triangle $ABD$, $\\angle BAD = 90^\\circ - B$. Since $AF$ bisects $\\angle BAC$, $\\angle BAF = \\frac{A}{2}$. Therefore:\n$$\\angle DAF = \\frac{A}{2} - (90^\\circ - B) = \\frac{A + 2B - 180^\\circ}{2} = \\frac{B - C}{2} = 7^\\circ \\implies B - C = 14^\\circ.$$\n2. In right triangle $ABE$, $\\angle ABE = 90^\\circ - A$. Since $BG$ bisects $\\angle ABC$, $\\angle ABG = \\frac{B}{2}$. Therefore:\n$$\\angle EBG = \\frac{B}{2} - (90^\\circ - A) = \\frac{2A + B - 180^\\circ}{2} = \\frac{A - C}{2} = 20^\\circ \\implies A - C = 40^\\circ.$$\n\nUsing $A + B + C = 180^\\circ$:\n$$(C + 40^\\circ) + (C + 14^\\circ) + C = 180^\\circ \\implies 3C + 54^\\circ = 180^\\circ \\implies 3C = 126^\\circ \\implies C = 42^\\circ.$$',
          rubric: [
            { code: 'M2', text: 'Derives $\\frac{B - C}{2} = 7^\\circ$ and $\\frac{A - C}{2} = 20^\\circ$ from the altitudes and angle bisectors.' },
            { code: 'A2', text: 'Solves $3C + 54^\\circ = 180^\\circ$ to obtain $\\angle C = 42^\\circ$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'A large square and two congruent smaller squares share a vertex. The large square touches the other two squares as shown. The areas of the three squares are $320$, $20$ and $20\\text{ cm}^2$, and points $D$, $E$, and $H$ are three of the vertices of the three squares as shown. Find the area of triangle $EDH$ (in $\\text{cm}^2$).',
          figures: [
            {
              src: '/papers/simoc-2019-g6/fig-25.webp',
              alt: 'A large square with bottom-left vertex D sharing its top-right vertex with two congruent smaller squares having outer vertices E and H, forming triangle EDH.',
              caption: 'Three squares and triangle EDH for Question 25.'
            }
          ],
          answer: '$130$',
          principle:
            'Express the large square’s side as $4$ times the small square’s side ($\\sqrt{320} = 4\\sqrt{20}$), enclose $\\triangle EDH$ in a bounding square, and subtract the three surrounding right triangles.',
          solution:
            'Let $s$ be the side length of each smaller square, so $s^2 = 20\\text{ cm}^2$.\nSince $320 = 16 \\times 20 = (4s)^2$, the large square has side length $4s$.\n\nEnclose the entire configuration in a $5s \\times 5s$ square with bottom-left corner at $D = (0, 0)$:\n- The large square occupies $[0, 4s] \\times [0, 4s]$, sharing vertex $(4s, 4s)$ with both smaller squares.\n- The top small square sits on top of the large square at $[3s, 4s] \\times [4s, 5s]$, so $E = (3s, 5s)$.\n- The right small square sits beside the large square at $[4s, 5s] \\times [3s, 4s]$, so $H = (5s, 4s)$.\n\nThe bounding square $[0, 5s] \\times [0, 5s]$ has area $25s^2$. Subtracting the three surrounding right triangles around $\\triangle EDH$:\n- Top-left right triangle: $\\frac{1}{2}(3s)(5s) = 7.5s^2$\n- Top-right right triangle: $\\frac{1}{2}(2s)(s) = s^2$\n- Bottom-right right triangle: $\\frac{1}{2}(5s)(4s) = 10s^2$\n\nThus:\n$$\\text{Area}(\\triangle EDH) = 25s^2 - (7.5s^2 + s^2 + 10s^2) = 6.5s^2.$$\nSubstituting $s^2 = 20\\text{ cm}^2$:\n$$\\text{Area}(\\triangle EDH) = 6.5 \\times 20 = 130\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Uses side ratio $4:1$ ($s^2 = 20$) and encloses $\\triangle EDH$ in a $5s \\times 5s$ square (or shoelace coordinates) to get $6.5s^2$.' },
            { code: 'A2', text: 'Computes $6.5 \\times 20 = 130\\text{ cm}^2$.' }
          ]
        }
      ]
    }
  ]
};
