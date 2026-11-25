/**
 * Paket Soal Terstruktur: AMC 12A (2023) — 23 of 25 multiple-choice problems included.
 * Source: scraped_raw/amc-12a-2023.md (MAA AMC 12A 2023).
 * Skipped 2 diagram-dependent problems whose figures are missing from the archive: Q9 and Q15.
 */
const OK = [{ code: 'A1', text: 'Correct option selected with valid supporting reasoning.' }];

export default {
  id: 'amc-12a-2023',
  slug: 'amc-12a-2023',
  subject: 'olimpiade-mat',
  grade: 12,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'AMC 12A (2023)',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab2-barisan-deret',
    'sma10-bab4-trigonometri',
    'sma10-bab5-spltv-sptldv',
    'sma10-bab6-fungsi-kuadrat',
    'sma10-bab8-peluang',
    'sma11-bab2-lingkaran',
    'sma12-bab3-kaidah-pencacahan',
    'sma12-bab4-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMC 12',
  title: 'AMC 12A — 2023',
  totalMarks: 23,
  instructions:
    'This set contains 23 multiple-choice problems from the 25-problem 2023 AMC 12A paper (included: Q1-Q8, Q10-Q14, Q16-Q25; skipped: 2 problems requiring missing diagrams, namely Q9 and Q15). Original problem numbers are preserved. In the official AMC 12 contest, a correct answer scores 6 points, an unanswered problem scores 1.5 points, and an incorrect answer scores 0 points; in this practice set, each included problem is worth 1 point (23 points total). Calculators are not allowed.',
  source: {
    org: 'MAA (Mathematical Association of America) — AMC 12A',
    file: 'scraped_raw/amc-12a-2023.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple Choice',
      marks: 23,
      stem: 'Choose the best answer (A, B, C, D, or E) for each of the 23 included problems (original AMC 12A numbering; 1 point each).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Cities $A$ and $B$ are $45$ miles apart. Alicia lives in $A$ and Beth lives in $B$. Alicia bikes towards $B$ at $18$ miles per hour. Leaving at the same time, Beth bikes toward $A$ at $12$ miles per hour. How many miles from City $A$ will they be when they meet?\n\nA. $20$\nB. $24$\nC. $25$\nD. $26$\nE. $27$',
          answer: 'E. $27$',
          principle: 'Relative speed for two objects moving toward each other is the sum of their individual speeds.',
          solution:
            'Since Alicia and Beth bike toward each other, the distance between them decreases at a combined rate of\n$$18 + 12 = 30\\text{ miles per hour}.$$\nThe time required to close the initial $45$-mile gap is\n$$t = \\frac{45}{30} = \\frac{3}{2}\\text{ hours}.$$\nIn that time, Alicia travels\n$$18 \\cdot \\frac{3}{2} = 27\\text{ miles}$$\nfrom City $A$. Thus they meet $27$ miles from City $A$.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'The weight of $\\frac{1}{3}$ of a large pizza together with $3\\frac{1}{2}$ cups of orange slices is the same as the weight of $\\frac{3}{4}$ of a large pizza together with $\\frac{1}{2}$ cup of orange slices. A cup of orange slices weighs $\\frac{1}{4}$ of a pound. What is the weight, in pounds, of a large pizza? Express your answer as a common fraction.\n\nA. $1\\frac{4}{5}$\nB. $2$\nC. $2\\frac{2}{5}$\nD. $3$\nE. $3\\frac{3}{5}$',
          answer: 'A. $1\\frac{4}{5}$',
          principle: 'Translate the weight balance into a linear equation in one variable and isolate the unknown.',
          solution:
            'Let $P$ be the weight of one large pizza in pounds. Since one cup of orange slices weighs $\\frac{1}{4}$ pound, $3\\frac{1}{2} = \\frac{7}{2}$ cups weigh $\\frac{7}{2} \\cdot \\frac{1}{4} = \\frac{7}{8}$ pound, and $\\frac{1}{2}$ cup weighs $\\frac{1}{2} \\cdot \\frac{1}{4} = \\frac{1}{8}$ pound.\nEquating the two total weights gives\n$$\\frac{1}{3}P + \\frac{7}{8} = \\frac{3}{4}P + \\frac{1}{8}.$$\nSubtracting $\\frac{1}{3}P$ and $\\frac{1}{8}$ from both sides yields\n$$\\frac{7}{8} - \\frac{1}{8} = \\left(\\frac{3}{4} - \\frac{1}{3}\\right)P \\implies \\frac{6}{8} = \\frac{9 - 4}{12}P \\implies \\frac{3}{4} = \\frac{5}{12}P.$$\nMultiplying both sides by $\\frac{12}{5}$ gives\n$$P = \\frac{3}{4} \\cdot \\frac{12}{5} = \\frac{9}{5} = 1\\frac{4}{5}.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'How many positive perfect squares less than $2023$ are divisible by $5$?\n\nA. $8$\nB. $9$\nC. $10$\nD. $11$\nE. $12$',
          answer: 'A. $8$',
          principle: 'Because $5$ is prime, $5 \\mid n^2$ if and only if $5 \\mid n$.',
          solution:
            'Let $n^2$ be a positive perfect square with $n \\in \\mathbb{Z}^+$. Since $5$ is prime, $5$ divides $n^2$ if and only if $5$ divides $n$, so we may write $n = 5k$ for some positive integer $k$.\nThe condition $n^2 < 2023$ becomes $(5k)^2 < 2023$, or $25k^2 < 2023$.\nNotice that\n$$40^2 = (5 \\cdot 8)^2 = 1600 < 2023 < 2025 = (5 \\cdot 9)^2 = 45^2.$$\nHence $k$ can be any integer from $1$ to $8$ inclusive, giving $8$ such perfect squares ($25, 100, 225, 400, 625, 900, 1225, 1600$).',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'How many digits are in the base-ten representation of $8^5 \\cdot 5^{10} \\cdot 15^5$?\n\nA. $14$\nB. $15$\nC. $16$\nD. $17$\nE. $18$',
          answer: 'E. $18$',
          principle: 'Factor into primes and group powers of $2$ and $5$ into powers of $10$.',
          solution:
            'Express every base as a product of primes:\n$$8^5 \\cdot 5^{10} \\cdot 15^5 = (2^3)^5 \\cdot 5^{10} \\cdot (3 \\cdot 5)^5 = 2^{15} \\cdot 5^{10} \\cdot 3^5 \\cdot 5^5 = 3^5 \\cdot 2^{15} \\cdot 5^{15}.$$\nGrouping $2^{15} \\cdot 5^{15} = 10^{15}$ and computing $3^5 = 243$ gives\n$$8^5 \\cdot 5^{10} \\cdot 15^5 = 243 \\cdot 10^{15}.$$\nThis integer is $243$ followed by $15$ zeros, so it has $3 + 15 = 18$ digits.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'Janet rolls a standard $6$-sided die $4$ times and keeps a running total of the numbers she rolls. What is the probability that at some point her running total will equal $3$? Express your answer as a common fraction.\n\nA. $\\dfrac{2}{9}$\nB. $\\dfrac{49}{216}$\nC. $\\dfrac{25}{108}$\nD. $\\dfrac{17}{72}$\nE. $\\dfrac{13}{54}$',
          answer: 'B. $\\dfrac{49}{216}$',
          principle: 'Since each die roll is positive, the running total is strictly increasing and can hit $3$ through mutually exclusive opening prefixes.',
          solution:
            'Every roll is at least $1$, so the running total strictly increases with each roll. In $4$ rolls, the minimum possible running total after $4$ rolls is $4 > 3$, so a running total of $3$ can occur only after $1$, $2$, or $3$ rolls, and in at most one way.\nThe mutually exclusive opening sequences whose sum is $3$ are:\n- After $1$ roll: $(3)$, with probability $\\frac{1}{6}$.\n- After $2$ rolls: $(1, 2)$ or $(2, 1)$, with probability $\\frac{2}{6^2} = \\frac{2}{36}$.\n- After $3$ rolls: $(1, 1, 1)$, with probability $\\frac{1}{6^3} = \\frac{1}{216}$.\nOnce any of these prefixes occurs, the remaining rolls cannot undo the event. Summing the probabilities yields\n$$\\frac{1}{6} + \\frac{2}{36} + \\frac{1}{216} = \\frac{36 + 12 + 1}{216} = \\frac{49}{216}.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Points $A$ and $B$ lie on the graph of $y = \\log_2 x$. The midpoint of $\\overline{AB}$ is $(6, 2)$. What is the positive difference between the $x$-coordinates of $A$ and $B$?\n\nA. $2\\sqrt{11}$\nB. $4\\sqrt{3}$\nC. $8$\nD. $4\\sqrt{5}$\nE. $9$',
          answer: 'D. $4\\sqrt{5}$',
          principle: 'Use the midpoint formula together with $\\log_2 x_1 + \\log_2 x_2 = \\log_2(x_1 x_2)$ and $|x_1 - x_2| = \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}$.',
          solution:
            'Let $A = (x_1, \\log_2 x_1)$ and $B = (x_2, \\log_2 x_2)$ with $x_1, x_2 > 0$. Since the midpoint of $\\overline{AB}$ is $(6, 2)$,\n$$\\frac{x_1 + x_2}{2} = 6 \\implies x_1 + x_2 = 12,$$\nand\n$$\\frac{\\log_2 x_1 + \\log_2 x_2}{2} = 2 \\implies \\log_2(x_1 x_2) = 4 \\implies x_1 x_2 = 2^4 = 16.$$\nNote that $x_1, x_2$ are the roots of $t^2 - 12t + 16 = 0$, which are $6 \\pm 2\\sqrt{5} > 0$ (since $36 > 20$), so both points indeed lie on the domain $x > 0$.\nTherefore, the positive difference between their $x$-coordinates is\n$$|x_1 - x_2| = \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2} = \\sqrt{12^2 - 4(16)} = \\sqrt{144 - 64} = \\sqrt{80} = 4\\sqrt{5}.$$',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'A digital display shows the current date as an $8$-digit integer consisting of a $4$-digit year, followed by a $2$-digit month, followed by a $2$-digit date within the month. For example, Arbor Day this year is displayed as $20230428$. For how many dates in $2023$ will each digit appear an even number of times in the $8$-digit display for that date?\n\nA. $5$\nB. $6$\nC. $7$\nD. $8$\nE. $9$',
          answer: 'E. $9$',
          principle: 'Track the parity of each digit\'s count in the year prefix `2023`, then enumerate valid `MMDD` strings matching the required parities.',
          solution:
            'The year `2023` contains two `2`s, one `0`, one `3`, and zero of all other digits. For every digit in the $8$-digit date `2023MMDD` to appear an even number of times, the $4$-digit string `MMDD` must have an odd number of `0`s, an odd number of `3`s, and an even number of every other digit.\nSince `MMDD` has only $4$ positions, it must contain at least one `0` and at least one `3`, and the remaining two positions cannot be `0` and `3` (which would give even counts of both). Hence the multiset of digits in `MMDD` must be $\\{0, 3, d, d\\}$ for some digit $d \\in \\{0, 1, \\dots, 9\\}$.\nWe perform casework on the valid $2$-digit month `MM` ($01 \\le \\text{MM} \\le 12$):\n1. `MM` uses `0` and `3`: only `MM = 03` (March) is valid. Then `DD` must be `dd` ($01 \\le \\text{DD} \\le 31$), giving `0311` and `0322` ($2$ dates).\n2. `MM` uses `0` and `d` ($d \\notin \\{0, 3\\}$): either `MM = 0d` or `MM = 10` (when $d = 1$).\n   - If `MM = 0d`, then `DD` uses `3` and `d`. For `DD` to be a valid day ($\\le 31$), `3d` requires $d = 1$ (giving `0131`), and `d3` requires $d \\in \\{1, 2\\}$ (giving `0113` and `0223`).\n   - If `MM = 10` ($d = 1$), then `DD` uses `1` and `3`, giving `1013` and `1031`.\n   This case contributes $5$ dates.\n3. `MM` uses `d` and `d`: only `MM = 11` ($d = 1$) is valid. Then `DD` uses `0` and `3`, giving `1103` and `1130` (both valid in November, $2$ dates).\n4. `MM` uses `3` and `d`: no valid month begins with `3`, and `03` was already counted in Case 1.\nIn total, there are $2 + 5 + 2 = 9$ valid dates.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Maureen is keeping track of the mean of her quiz scores this semester. If Maureen scores an $11$ on the next quiz, her mean will increase by $1$. If she scores an $11$ on each of the next three quizzes, her mean will increase by $2$. What is the mean of her quiz scores currently?\n\nA. $4$\nB. $5$\nC. $6$\nD. $7$\nE. $8$',
          answer: 'D. $7$',
          principle: 'Express the current total score as $mn$ (mean times count) and solve the resulting linear system.',
          solution:
            'Let $m$ be Maureen\'s current mean and $n$ be the number of quizzes she has taken so far, so her current total score is $mn$.\nScoring $11$ on the next quiz gives\n$$\\frac{mn + 11}{n + 1} = m + 1 \\implies mn + 11 = mn + m + n + 1 \\implies m + n = 10.$$\nScoring $11$ on each of the next three quizzes gives\n$$\\frac{mn + 33}{n + 3} = m + 2 \\implies mn + 33 = mn + 3m + 2n + 6 \\implies 3m + 2n = 27.$$\nSubtracting $2(m + n) = 20$ from $3m + 2n = 27$ eliminates $n$ and yields\n$$m = 7.$$\n(As a check, $n = 3$, and $\\frac{21 + 11}{4} = 8$ while $\\frac{21 + 33}{6} = 9$.)',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Positive real numbers $x$ and $y$ satisfy $y^3 = x^2$ and $(y - x)^2 = 4y^2$. What is $x + y$?\n\nA. $12$\nB. $18$\nC. $24$\nD. $36$\nE. $42$',
          answer: 'D. $36$',
          principle: 'Take square roots using the positivity constraint $x, y > 0$ to eliminate the extraneous sign, then substitute.',
          solution:
            'Taking square roots of $(y - x)^2 = 4y^2$ gives $y - x = 2y$ or $y - x = -2y$.\n- If $y - x = 2y$, then $x = -y < 0$, which contradicts $x, y > 0$.\n- Therefore $y - x = -2y$, so $x = 3y$.\nSubstituting $x = 3y$ into $y^3 = x^2$ yields\n$$y^3 = (3y)^2 = 9y^2.$$\nSince $y > 0$, dividing both sides by $y^2$ gives $y = 9$, whence $x = 3(9) = 27$. Thus\n$$x + y = 27 + 9 = 36.$$',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'What is the degree measure of the acute angle formed by lines with slopes $2$ and $\\frac{1}{3}$?\n\nA. $30$\nB. $37.5$\nC. $45$\nD. $52.5$\nE. $60$',
          answer: 'C. $45$',
          principle: 'The acute angle $\\theta$ between two non-perpendicular lines of slopes $m_1, m_2$ satisfies $\\tan\\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right|$.',
          solution:
            'Let $\\alpha$ and $\\beta$ be the inclination angles of the two lines, so $\\tan\\alpha = 2$, $\\tan\\beta = \\frac{1}{3}$, and $0^\\circ < \\beta < \\alpha < 90^\\circ$.\nThe acute angle between the lines is $\\theta = \\alpha - \\beta$. By the tangent difference formula,\n$$\\tan\\theta = \\tan(\\alpha - \\beta) = \\frac{\\tan\\alpha - \\tan\\beta}{1 + \\tan\\alpha\\tan\\beta} = \\frac{2 - \\frac{1}{3}}{1 + 2 \\cdot \\frac{1}{3}} = \\frac{\\frac{5}{3}}{\\frac{5}{3}} = 1.$$\nSince $0^\\circ < \\theta < 90^\\circ$, it follows that $\\theta = 45^\\circ$.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'What is the value of\n$$2^3 - 1^3 + 4^3 - 3^3 + 6^3 - 5^3 + \\cdots + 18^3 - 17^3?$$\n\nA. $2023$\nB. $2679$\nC. $2941$\nD. $3159$\nE. $3235$',
          answer: 'D. $3159$',
          principle: 'Group consecutive pairs $(2k)^3 - (2k - 1)^3$ into a quadratic in $k$, then apply the standard formulas for $\\sum k^2$ and $\\sum k$.',
          solution:
            'Pair the consecutive terms as $\\sum_{k=1}^{9} \\bigl((2k)^3 - (2k - 1)^3\\bigr)$. Expanding each pair gives\n$$(2k)^3 - (2k - 1)^3 = 8k^3 - (8k^3 - 12k^2 + 6k - 1) = 12k^2 - 6k + 1.$$\nSumming from $k = 1$ to $9$, we use $\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$ and $\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$:\n$$\\sum_{k=1}^{9} k^2 = \\frac{9 \\cdot 10 \\cdot 19}{6} = 285, \\qquad \\sum_{k=1}^{9} k = \\frac{9 \\cdot 10}{2} = 45.$$\nHence the total sum is\n$$12(285) - 6(45) + 9 = 3420 - 270 + 9 = 3159.$$',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'In a table tennis tournament every participant played every other participant exactly once. Although there were twice as many right-handed players as left-handed players, the number of games won by left-handed players was $40\\%$ more than the number of games won by right-handed players. (There were no ties and no ambidextrous players.) What is the total number of games played?\n\nA. $15$\nB. $36$\nC. $45$\nD. $48$\nE. $66$',
          answer: 'B. $36$',
          principle: 'Combine the divisibility of total games from the win ratio with an upper/lower bound on wins from intra-group matches.',
          solution:
            'Let $L$ be the number of left-handed players, so there are $2L$ right-handed players and $3L$ players in all. The total number of games played is\n$$G = \\binom{3L}{2} = \\frac{3L(3L - 1)}{2}.$$\nSuppose right-handed players won $R$ games; then left-handed players won $1.4R = \\frac{7}{5}R$ games. Thus\n$$G = R + \\frac{7}{5}R = \\frac{12}{5}R,$$\nwhich implies $R = \\frac{5}{12}G$ and $12 \\mid G$.\nFurthermore, every match between two right-handed players guarantees a win for a right-handed player, so right-handed players win at least $\\binom{2L}{2} = L(2L - 1)$ games:\n$$\\frac{5}{12} \\cdot \\frac{3L(3L - 1)}{2} \\ge L(2L - 1).$$\nSince $L > 0$, dividing by $L$ gives\n$$\\frac{5(3L - 1)}{8} \\ge 2L - 1 \\implies 15L - 5 \\ge 16L - 8 \\implies L \\le 3.$$\nTesting $L \\in \\{1, 2, 3\\}$:\n- $L = 1$: $G = \\binom{3}{2} = 3$ (not divisible by $12$).\n- $L = 2$: $G = \\binom{6}{2} = 15$ (not divisible by $12$).\n- $L = 3$: $G = \\binom{9}{2} = 36$ (divisible by $12$).\nThis is achievable when the $3$ left-handed players win all $18$ mixed matches and their $3$ internal matches ($21$ wins), while the $6$ right-handed players win their $15$ internal matches ($21 = 1.4 \\cdot 15$). Thus $36$ games were played.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'How many complex numbers satisfy the equation $z^5 = \\overline{z}$, where $\\overline{z}$ is the conjugate of the complex number $z$?\n\nA. $2$\nB. $3$\nC. $5$\nD. $6$\nE. $7$',
          answer: 'E. $7$',
          principle: 'Take moduli first to determine $|z|$, then multiply by $z$ and use $z\\overline{z} = |z|^2$.',
          solution:
            'Taking the modulus of both sides of $z^5 = \\overline{z}$ gives\n$$|z|^5 = |\\overline{z}| = |z| \\implies |z|\\bigl(|z|^4 - 1\\bigr) = 0.$$\nSince $|z| \\ge 0$ is real, either $|z| = 0$ or $|z| = 1$.\n- Case 1 ($|z| = 0$): $z = 0$, which satisfies $0^5 = \\overline{0}$ ($1$ solution).\n- Case 2 ($|z| = 1$): Multiplying $z^5 = \\overline{z}$ by $z$ gives $z^6 = z\\overline{z} = |z|^2 = 1$. Conversely, any $6$th root of unity satisfies $|z| = 1$ and $z^5 = z^{-1} = \\overline{z}$. There are $6$ distinct $6$th roots of unity (all nonzero).\nAltogether, there are $1 + 6 = 7$ complex solutions.',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Consider the set of complex numbers $z$ satisfying $|1 + z + z^2| = 4$. The maximum value of the imaginary part of $z$ can be written in the form $\\dfrac{\\sqrt{m}}{n}$, where $m$ and $n$ are relatively prime positive integers. What is $m + n$?\n\nA. $20$\nB. $21$\nC. $22$\nD. $23$\nE. $24$',
          answer: 'B. $21$',
          principle: 'Complete the square $1 + z + z^2 = \\left(z + \\frac{1}{2}\\right)^2 + \\frac{3}{4}$ and bound the imaginary part using $|w^2|$ and $\\operatorname{Re}(w^2)$.',
          solution:
            'Complete the square:\n$$1 + z + z^2 = \\left(z + \\frac{1}{2}\\right)^2 + \\frac{3}{4}.$$\nLet $w = z + \\frac{1}{2} = a + bi$ with $a, b \\in \\mathbb{R}$, so $\\operatorname{Im}(z) = \\operatorname{Im}(w) = b$. Then $w^2 = (a^2 - b^2) + 2abi$, and the given condition $|w^2 + \\frac{3}{4}|^2 = 16$ expands as\n$$\\left(a^2 - b^2 + \\frac{3}{4}\\right)^2 + 4a^2 b^2 = 16.$$\nUsing $(a^2 - b^2)^2 + 4a^2 b^2 = (a^2 + b^2)^2$, this simplifies to\n$$(a^2 + b^2)^2 + \\frac{3}{2}(a^2 - b^2) + \\frac{9}{16} = 16.$$\nSince $a^2 \\ge 0$, we have $(a^2 + b^2)^2 \\ge b^4$ and $\\frac{3}{2}a^2 \\ge 0$, which gives\n$$b^4 - \\frac{3}{2}b^2 + \\frac{9}{16} \\le 16 \\implies \\left(b^2 - \\frac{3}{4}\\right)^2 \\le 16.$$\nHence $b^2 - \\frac{3}{4} \\le 4$, so $b^2 \\le \\frac{19}{4}$ and $b \\le \\frac{\\sqrt{19}}{2}$.\nEquality is attained when $a = 0$ and $b = \\frac{\\sqrt{19}}{2}$, i.e., $z = -\\frac{1}{2} + \\frac{\\sqrt{19}}{2}i$ (for which $|1 + z + z^2| = | -\\frac{19}{4} + \\frac{3}{4} | = 4$). Here $m = 19$ and $n = 2$ are relatively prime, so $m + n = 21$.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Flora the frog starts at $0$ on the number line and makes a sequence of jumps to the right. In any one jump, independent of previous jumps, Flora leaps a positive integer distance $m$ with probability $\\dfrac{1}{2^m}$. What is the probability that Flora will eventually land at $10$? Express your answer as a common fraction.\n\nA. $\\dfrac{5}{512}$\nB. $\\dfrac{45}{1024}$\nC. $\\dfrac{127}{1024}$\nD. $\\dfrac{511}{1024}$\nE. $\\dfrac{1}{2}$',
          answer: 'E. $\\dfrac{1}{2}$',
          principle: 'Set up a recurrence for the probability $p_n$ of landing on $n$ by conditioning on the first jump, then prove $p_n = \\frac{1}{2}$ by strong induction.',
          solution:
            'Let $p_n$ be the probability that Flora eventually lands on $n$ for $n \\ge 0$, with $p_0 = 1$. For $n \\ge 1$, conditioning on the length $k$ of the first jump (noting that a jump $k > n$ passes $n$ permanently) gives\n$$p_n = \\sum_{k=1}^{n} \\frac{1}{2^k} p_{n-k}.$$\nWe prove by strong induction that $p_n = \\frac{1}{2}$ for all $n \\ge 1$.\n- Base case ($n = 1$): $p_1 = \\frac{1}{2} p_0 = \\frac{1}{2}$.\n- Inductive step: Assume $p_1 = p_2 = \\cdots = p_{n-1} = \\frac{1}{2}$ for some $n \\ge 2$. Then\n$$p_n = \\frac{1}{2^n} p_0 + \\sum_{k=1}^{n-1} \\frac{1}{2^k} \\cdot \\frac{1}{2} = \\frac{1}{2^n} + \\frac{1}{2}\\left(1 - \\frac{1}{2^{n-1}}\\right) = \\frac{1}{2^n} + \\frac{1}{2} - \\frac{1}{2^n} = \\frac{1}{2}.$$\nTherefore $p_{10} = \\frac{1}{2}$.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Circles $C_1$ and $C_2$ each have radius $1$, and the distance between their centers is $\\frac{1}{2}$. Circle $C_3$ is the largest circle that lies inside both $C_1$ and $C_2$ and is tangent to both. Circle $C_4$ lies inside both $C_1$ and $C_2$, is tangent to both, and is externally tangent to $C_3$. What is the radius of $C_4$? Express your answer as a common fraction.\n\nA. $\\dfrac{1}{14}$\nB. $\\dfrac{1}{12}$\nC. $\\dfrac{1}{10}$\nD. $\\dfrac{3}{28}$\nE. $\\dfrac{1}{9}$',
          answer: 'D. $\\dfrac{3}{28}$',
          principle: 'Place the centers symmetrically on a coordinate axis and express internal and external tangency via center-to-center distances.',
          solution:
            'Place the centers of $C_1$ and $C_2$ at $O_1 = \\left(-\\frac{1}{4}, 0\\right)$ and $O_2 = \\left(\\frac{1}{4}, 0\\right)$, so $O_1 O_2 = \\frac{1}{2}$.\nIf a circle of radius $R$ centered at $P$ lies inside both $C_1$ and $C_2$, then $P O_1 \\le 1 - R$ and $P O_2 \\le 1 - R$. By the triangle inequality,\n$$2(1 - R) \\ge P O_1 + P O_2 \\ge O_1 O_2 = \\frac{1}{2} \\implies 1 - R \\ge \\frac{1}{4} \\implies R \\le \\frac{3}{4}.$$\nEquality $R = \\frac{3}{4}$ holds when $P = O_3 = (0, 0)$, where $O_3 O_1 = O_3 O_2 = \\frac{1}{4} = 1 - \\frac{3}{4}$. Thus $C_3$ is centered at $(0, 0)$ with radius $\\frac{3}{4}$.\nNow let $C_4$ have radius $r$ and center $O_4$. Because $C_4$ is internally tangent to both $C_1$ and $C_2$, we have $O_4 O_1 = O_4 O_2 = 1 - r$, so $O_4$ lies on the perpendicular bisector of $\\overline{O_1 O_2}$ (the $y$-axis). By symmetry across the $x$-axis, write $O_4 = (0, k)$ with $k > 0$.\nExternal tangency between $C_4$ and $C_3$ gives $k = \\frac{3}{4} + r$, and internal tangency between $C_4$ and $C_2$ gives by the Pythagorean theorem\n$$\\left(\\frac{1}{4}\\right)^2 + k^2 = (1 - r)^2.$$\nSubstituting $k = \\frac{3}{4} + r$ yields\n$$\\frac{1}{16} + \\left(\\frac{3}{4} + r\\right)^2 = (1 - r)^2 \\implies \\frac{1}{16} + \\frac{9}{16} + \\frac{3}{2}r + r^2 = 1 - 2r + r^2.$$\nSimplifying gives $\\frac{5}{8} + \\frac{3}{2}r = 1 - 2r$, so $\\frac{7}{2}r = \\frac{3}{8}$ and $r = \\frac{3}{28}$.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'What is the product of all the solutions to the equation\n$$\\log_{7x} 2023 \\cdot \\log_{289x} 2023 = \\log_{2023x} 2023?$$\n\nA. $(\\log_{2023} 7 \\cdot \\log_{2023} 289)^2$\nB. $\\log_{2023} 7 \\cdot \\log_{2023} 289$\nC. $1$\nD. $\\log_7 2023 \\cdot \\log_{289} 2023$\nE. $(\\log_7 2023 \\cdot \\log_{289} 2023)^2$',
          answer: 'C. $1$',
          principle: 'Convert every logarithm to base $2023$ using $\\log_b 2023 = \\frac{1}{\\log_{2023} b}$ and use $7 \\cdot 289 = 2023$.',
          solution:
            'For the logarithms to be defined, $7x, 289x, 2023x$ must be positive and not equal to $1$.\nNote that $7 \\cdot 289 = 2023$. Let $t = \\log_{2023} x$, $a = \\log_{2023} 7$, and $b = \\log_{2023} 289$, so $0 < a, b < 1$ and\n$$a + b = \\log_{2023}(7 \\cdot 289) = \\log_{2023} 2023 = 1.$$\nUsing $\\log_u 2023 = \\frac{1}{\\log_{2023} u}$, the equation becomes\n$$\\frac{1}{a + t} \\cdot \\frac{1}{b + t} = \\frac{1}{1 + t} \\iff (a + t)(b + t) = 1 + t.$$\nExpanding and substituting $a + b = 1$ cancels the linear $t$ terms:\n$$t^2 + (a + b)t + ab = 1 + t \\implies t^2 = 1 - ab.$$\nSince $0 < a, b < 1$, we have $1 - ab > 0$, giving two distinct real roots $t_1, t_2 = \\pm\\sqrt{1 - ab}$ with $t_1 + t_2 = 0$.\nNeither root makes any denominator zero: at $t = -a$, $0 = 1 - a = b > 0$ fails; at $t = -b$, $0 = 1 - b = a > 0$ fails; and at $t = -1$, $(a-1)(b-1) = ab > 0 = 0$ fails.\nThus both roots correspond to valid solutions $x_1 = 2023^{t_1}$ and $x_2 = 2023^{t_2}$, whose product is\n$$x_1 x_2 = 2023^{t_1 + t_2} = 2023^0 = 1.$$',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Rows $1$, $2$, $3$, $4$, and $5$ of a triangular array of integers are shown below.\n$$\\begin{array}{ccccccccc} &&&&1&&&&\\\\ &&&1&&1&&&\\\\ &&1&&3&&1&&\\\\ &1&&5&&5&&1&\\\\ 1&&7&&11&&7&&1 \\end{array}$$\nEach row after the first row is formed by placing a $1$ at each end of the row, and each interior entry is $1$ greater than the sum of the two numbers diagonally above it in the previous row. What is the units digit of the sum of the $2023$ numbers in the $2023$rd row?\n\nA. $1$\nB. $3$\nC. $5$\nD. $7$\nE. $9$',
          answer: 'C. $5$',
          principle: 'Find a linear recurrence for the row sum $S_n$, solve it in closed form, and reduce modulo $10$.',
          solution:
            'Let $S_n$ be the sum of the entries in row $n$, so $S_1 = 1$.\nFor $n \\ge 2$, row $n$ has two $1$s at the ends and $n - 2$ interior entries. Summing all $n - 2$ pairs of adjacent entries in row $n - 1$ counts every interior entry of row $n - 1$ twice and each of the two end $1$s once, giving $2S_{n-1} - 2$. Adding the two end $1$s of row $n$ and $+1$ for each of the $n - 2$ interior entries yields\n$$S_n = (2S_{n-1} - 2) + 2 + (n - 2) = 2S_{n-1} + n - 2.$$\nRewriting this as $S_n + n = 2\\bigl(S_{n-1} + (n - 1)\\bigr)$ shows that $\\{S_n + n\\}$ is a geometric sequence with first term $S_1 + 1 = 2$ and common ratio $2$, so\n$$S_n + n = 2^n \\implies S_n = 2^n - n.$$\n(Check: $S_5 = 2^5 - 5 = 27 = 1 + 7 + 11 + 7 + 1$.)\nFor $n = 2023$, $S_{2023} = 2^{2023} - 2023$. Modulo $10$, the units digits of powers of $2$ cycle with period $4$ ($2, 4, 8, 6$). Since $2023 = 4 \\cdot 505 + 3 \\equiv 3 \\pmod 4$, we have $2^{2023} \\equiv 2^3 \\equiv 8 \\pmod{10}$. Therefore\n$$S_{2023} \\equiv 8 - 3 = 5 \\pmod{10},$$\nso the units digit is $5$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'If $A$ and $B$ are vertices of a polyhedron, define the distance $d(A, B)$ to be the minimum number of edges of the polyhedron one must traverse in order to connect $A$ and $B$. For example, if $AB$ is an edge of the polyhedron, then $d(A, B) = 1$, but if $AC$ and $CB$ are edges and $AB$ is not an edge, then $d(A, B) = 2$. Let $Q$, $R$, and $S$ be randomly chosen distinct vertices of a regular icosahedron (a regular polyhedron made up of $20$ equilateral triangles). What is the probability that $d(Q, R) > d(R, S)$? Express your answer as a common fraction.\n\nA. $\\dfrac{7}{22}$\nB. $\\dfrac{1}{3}$\nC. $\\dfrac{3}{8}$\nD. $\\dfrac{5}{12}$\nE. $\\dfrac{1}{2}$',
          answer: 'A. $\\dfrac{7}{22}$',
          principle: 'Fix $R$, classify the remaining $11$ vertices of the icosahedron by graph distance from $R$, and use symmetry between $Q$ and $S$.',
          solution:
            'A regular icosahedron has $20$ triangular faces with $5$ faces meeting at each vertex, so it has $\\frac{20 \\cdot 3}{5} = 12$ vertices, each of degree $5$.\nFix the vertex $R$. The remaining $11$ vertices split by graph distance from $R$ into:\n- $5$ vertices at distance $1$ (the neighbors of $R$),\n- $5$ vertices at distance $2$ (the vertices of the opposite pentagon adjacent to those neighbors),\n- $1$ vertex at distance $3$ (the antipodal vertex).\nThere are $11 \\cdot 10 = 110$ equally likely ordered pairs $(Q, S)$ of distinct vertices different from $R$. A tie $d(Q, R) = d(R, S)$ occurs only when both $Q$ and $S$ are at distance $1$ ($5 \\cdot 4 = 20$ pairs) or both are at distance $2$ ($5 \\cdot 4 = 20$ pairs). Hence\n$$P\\bigl(d(Q, R) = d(R, S)\\bigr) = \\frac{20 + 20}{110} = \\frac{4}{11}.$$\nBy symmetry between $Q$ and $S$, $P\\bigl(d(Q, R) > d(R, S)\\bigr) = P\\bigl(d(Q, R) < d(R, S)\\bigr)$, so\n$$P\\bigl(d(Q, R) > d(R, S)\\bigr) = \\frac{1 - \\frac{4}{11}}{2} = \\frac{7}{22}.$$',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Let $f$ be the unique function defined on the positive integers such that\n$$\\sum_{d \\mid n} d \\cdot f\\!\\left(\\frac{n}{d}\\right) = 1$$\nfor all positive integers $n$, where the sum is taken over all positive divisors of $n$. What is $f(2023)$?\n\nA. $-1536$\nB. $96$\nC. $108$\nD. $116$\nE. $144$',
          answer: 'B. $96$',
          principle: 'Divide by $n$ and reindex by $e = \\frac{n}{d}$ to isolate $f(2023)$ via inclusion-exclusion on the divisors of $2023 = 7 \\cdot 17^2$.',
          solution:
            'Divide both sides by $n$ and reindex using the complementary divisor $e = \\frac{n}{d}$:\n$$\\sum_{e \\mid n} \\frac{f(e)}{e} = \\frac{1}{n}.$$\nFactor $2023 = 7 \\cdot 289 = 7 \\cdot 17^2$. Its divisors are $1, 7, 17, 119, 289, 2023$. Writing the sum for $n = 2023, 119, 289, 17$:\n- Subtracting the sum for $n = 119 = 7 \\cdot 17$ from that for $n = 2023$ cancels all divisors not divisible by $17^2$, leaving\n$$\\frac{f(289)}{289} + \\frac{f(2023)}{2023} = \\frac{1}{2023} - \\frac{1}{119}.$$\n- Subtracting the sum for $n = 17$ from that for $n = 289 = 17^2$ leaves\n$$\\frac{f(289)}{289} = \\frac{1}{289} - \\frac{1}{17}.$$\nSubtracting the second equation from the first gives\n$$\\frac{f(2023)}{2023} = \\frac{1}{2023} - \\frac{1}{119} - \\frac{1}{289} + \\frac{1}{17}.$$\nMultiplying through by $2023$ yields\n$$f(2023) = 1 - 17 - 7 + 119 = 96.$$',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'How many ordered pairs of positive real numbers $(a, b)$ satisfy the equation\n$$(1 + 2a)(2 + 2b)(2a + b) = 32ab?$$\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. an infinite number',
          answer: 'B. $1$',
          principle: 'Apply the AM-GM inequality to each factor separately and check whether the equality conditions are consistent.',
          solution:
            'Since $a, b > 0$, apply the AM-GM inequality to each of the three factors:\n$$1 + 2a \\ge 2\\sqrt{2a}, \\qquad 2 + 2b \\ge 2\\sqrt{4b} = 4\\sqrt{b}, \\qquad 2a + b \\ge 2\\sqrt{2ab}.$$\nMultiplying these three inequalities of positive numbers gives\n$$(1 + 2a)(2 + 2b)(2a + b) \\ge (2\\sqrt{2a})(4\\sqrt{b})(2\\sqrt{2ab}) = 32ab.$$\nEquality holds if and only if equality holds in all three applications simultaneously:\n$$1 = 2a, \\qquad 2 = 2b, \\qquad 2a = b.$$\nThe first two equations yield $a = \\frac{1}{2}$ and $b = 1$, which automatically satisfies the third equation $2a = 1 = b$. Thus there is exactly $1$ solution, $(a, b) = \\left(\\frac{1}{2}, 1\\right)$.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Let $K$ be the number of sequences $A_1, A_2, \\ldots, A_n$ such that $n$ is a positive integer less than or equal to $10$, each $A_i$ is a subset of $\\{1, 2, 3, \\ldots, 10\\}$, and $A_{i-1}$ is a subset of $A_i$ for each $i$ between $2$ and $n$, inclusive. For example, $\\{\\}, \\{5, 7\\}, \\{2, 5, 7\\}, \\{2, 5, 7\\}, \\{2, 5, 6, 7, 9\\}$ is one such sequence, with $n = 5$. What is the remainder when $K$ is divided by $10$?\n\nA. $1$\nB. $3$\nC. $5$\nD. $7$\nE. $9$',
          answer: 'C. $5$',
          principle: 'Count chains of length $n$ independently element by element, then reduce each $10$th power modulo $10$.',
          solution:
            'Fix $n \\in \\{1, 2, \\dots, 10\\}$. For each element $x \\in \\{1, 2, \\dots, 10\\}$, the nested condition $A_1 \\subseteq A_2 \\subseteq \\cdots \\subseteq A_n$ means $x$ either never appears (so $x \\notin A_n$) or first appears in a unique set $A_i$ ($1 \\le i \\le n$) and stays in all subsequent sets. That gives $n + 1$ independent choices for each of the $10$ elements, so there are $(n + 1)^{10}$ valid sequences of length $n$.\nSumming over $1 \\le n \\le 10$ gives\n$$K = \\sum_{n=1}^{10} (n + 1)^{10} = \\sum_{k=2}^{11} k^{10}.$$\nSince $k^5 \\equiv k \\pmod{10}$ for every integer $k$ (as $k^5 - k$ is divisible by both $2$ and $5$), we have $k^{10} = (k^5)^2 \\equiv k^2 \\pmod{10}$. Evaluating $k^2 \\bmod 10$ for $k = 2, 3, \\dots, 11$ yields\n$$4, \\; 9, \\; 6, \\; 5, \\; 6, \\; 9, \\; 4, \\; 1, \\; 0, \\; 1.$$\nSumming these residues gives $4 + 9 + 6 + 5 + 6 + 9 + 4 + 1 + 0 + 1 = 45 \\equiv 5 \\pmod{10}$.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'There is a unique sequence of integers $a_1, a_2, \\dots, a_{2023}$ such that\n$$\\tan 2023x = \\frac{a_1 \\tan x + a_3 \\tan^3 x + a_5 \\tan^5 x + \\cdots + a_{2023} \\tan^{2023} x}{1 + a_2 \\tan^2 x + a_4 \\tan^4 x + \\cdots + a_{2022} \\tan^{2022} x}$$\nwhenever $\\tan 2023x$ is defined. What is $a_{2023}$?\n\nA. $-2023$\nB. $-2022$\nC. $-1$\nD. $1$\nE. $2023$',
          answer: 'C. $-1$',
          principle: 'Apply De Moivre\'s theorem and the binomial theorem to express $\\tan(nx) = \\frac{\\sin(nx)}{\\cos(nx)}$ as a rational function of $\\tan x$.',
          solution:
            'By De Moivre\'s theorem and the binomial theorem,\n$$\\cos 2023x + i\\sin 2023x = (\\cos x + i\\sin x)^{2023} = \\sum_{k=0}^{2023} \\binom{2023}{k} i^k \\cos^{2023-k} x \\sin^k x.$$\nEven $k = 2j$ contribute to the real part $\\cos 2023x$ with sign $i^{2j} = (-1)^j$, while odd $k = 2j + 1$ contribute to the imaginary part $\\sin 2023x$ with factor $i^{2j+1} = (-1)^j i$. Dividing both $\\sin 2023x$ and $\\cos 2023x$ by $\\cos^{2023} x$ (when $\\cos x \\neq 0$) expresses $\\tan 2023x$ as\n$$\\tan 2023x = \\frac{\\sum_{j=0}^{1011} (-1)^j \\binom{2023}{2j+1} \\tan^{2j+1} x}{\\sum_{j=0}^{1011} (-1)^j \\binom{2023}{2j} \\tan^{2j} x}.$$\nThe constant term in the denominator ($j = 0$) is $(-1)^0 \\binom{2023}{0} = 1$, matching the given form. Reading off the coefficient of $\\tan^{2023} x$ in the numerator ($2j + 1 = 2023 \\implies j = 1011$) gives\n$$a_{2023} = (-1)^{1011} \\binom{2023}{2023} = -1.$$',
          rubric: OK
        }
      ]
    }
  ]
};
