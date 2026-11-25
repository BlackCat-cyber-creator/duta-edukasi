/**
 * Paket Soal Terstruktur: SMO 2010 Senior Section (First Round) — 25 of 35 problems included.
 * Source: scraped_raw/smo-senior-2010.md (Singapore Mathematical Society — SMO 2010 Senior Section).
 * Included: 7 Multiple Choice Questions (Q1-Q3, Q6-Q9) and 18 Short Questions (Q11-Q15, Q17, Q19-Q21, Q23-Q26, Q29-Q32, Q34).
 * Skipped: 10 problems — 2 with garbled/missing OCR statements (Q4, Q16) and 8 diagram-dependent problems (Q5, Q10, Q18, Q22, Q27, Q28, Q33, Q35).
 */
const OK_MCQ = [{ code: 'A1', text: 'Correct option selected with valid supporting reasoning.' }];
const OK_SHORT = [{ code: 'A1', text: 'Correct numerical answer obtained with valid supporting reasoning.' }];

export default {
  id: 'smo-senior-2010',
  slug: 'smo-senior-2010',
  subject: 'olimpiade-mat',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'SMO 2010 Senior Section (First Round)',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab2-barisan-deret',
    'sma10-bab4-trigonometri',
    'sma10-bab5-spltv-sptldv',
    'sma10-bab6-fungsi-kuadrat',
    'sma12-bab1-barisan-deret',
    'sma12-bab3-kaidah-pencacahan'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SMO',
  title: 'SMO Senior — 2010 (First Round)',
  totalMarks: 25,
  instructions:
    'This practice set contains 25 self-contained problems from the 35-problem SMO 2010 Senior Section (First Round): 7 Multiple Choice Questions (Q1-Q3, Q6-Q9) and 18 Short Questions (Q11-Q15, Q17, Q19-Q21, Q23-Q26, Q29-Q32, Q34), preserving original problem numbers (1 mark each, 25 marks total). Skipped 10 problems from the source archive: Q4 and Q16 (incomplete/garbled OCR formulas in the source text) as well as Q5, Q10, Q18, Q22, Q27, Q28, Q33, and Q35 (diagram-dependent geometry/grid problems whose figures are not included). Calculators are not allowed.',
  source: {
    org: 'Singapore Mathematical Society — SMO Senior',
    file: 'scraped_raw/smo-senior-2010.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple Choice Questions',
      marks: 7,
      stem: 'Choose the correct letter (A, B, C, D, or E) for each of the 7 included Multiple Choice Questions (original SMO Senior numbering; 1 mark each).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Find the value of\n$$\\frac{(1 \\times 2 \\times 3) + (2 \\times 4 \\times 6) + (3 \\times 6 \\times 9) + \\cdots + (335 \\times 670 \\times 1005)}{(1 \\times 3 \\times 6) + (2 \\times 6 \\times 12) + (3 \\times 9 \\times 18) + \\cdots + (335 \\times 1005 \\times 2010)}.$$\n\nA. $\\frac{1}{3}$\nB. $\\frac{2}{3}$\nC. $\\frac{1}{6}$\nD. $\\frac{1}{2}$\nE. $\\frac{4}{9}$',
          answer: 'A. $\\frac{1}{3}$',
          principle: 'Factor out the common cubic term $k^3$ from each $k$-th product in both the numerator and the denominator.',
          solution:
            'For each $k = 1, 2, \\dots, 335$, the $k$-th term in the numerator is $(k)(2k)(3k) = (1 \\times 2 \\times 3)k^3$, and the $k$-th term in the denominator is $(k)(3k)(6k) = (1 \\times 3 \\times 6)k^3$.\nFactoring out $1^3 + 2^3 + 3^3 + \\cdots + 335^3$ from both numerator and denominator gives\n$$\\frac{(1 \\times 2 \\times 3)(1^3 + 2^3 + 3^3 + \\cdots + 335^3)}{(1 \\times 3 \\times 6)(1^3 + 2^3 + 3^3 + \\cdots + 335^3)} = \\frac{1 \\times 2 \\times 3}{1 \\times 3 \\times 6} = \\frac{6}{18} = \\frac{1}{3}.$$',
          rubric: OK_MCQ
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'If $a$, $b$, $c$, and $d$ are real numbers such that\n$$\\frac{b+c+d}{a} = \\frac{a+c+d}{b} = \\frac{a+b+d}{c} = \\frac{a+b+c}{d} = r,$$\nfind the value of $r$.\n\nA. $3$\nB. $1$\nC. $-1$\nD. $3$ or $1$\nE. $3$ or $-1$',
          answer: 'E. $3$ or $-1$',
          principle: 'Add $1$ to each ratio (or clear denominators and sum symmetrically) to factor out $a + b + c + d$.',
          solution:
            'Note that $a, b, c, d \\neq 0$ because they appear in the denominators. Clearing denominators gives\n$$b + c + d = ar, \\quad a + c + d = br, \\quad a + b + d = cr, \\quad a + b + c = dr.$$\nAdding $a, b, c, d$ respectively to the four equations yields\n$$a + b + c + d = a(r + 1) = b(r + 1) = c(r + 1) = d(r + 1).$$\nSumming all four expressions gives\n$$4(a + b + c + d) = (a + b + c + d)(r + 1) \\implies (3 - r)(a + b + c + d) = 0.$$\nHence either $r = 3$ (attained when $a = b = c = d = 1$) or $a + b + c + d = 0$. In the latter case, $b + c + d = -a$, so $r = \\frac{-a}{a} = -1$ (attained when $a = b = 1$ and $c = d = -1$). Therefore, $r$ is $3$ or $-1$.',
          rubric: OK_MCQ
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'If $0 < x < \\frac{\\pi}{2}$, $\\sin x - \\cos x = \\frac{\\pi}{4}$, and\n$$\\tan x + \\frac{1}{\\tan x} = \\frac{a}{b - \\pi^c},$$\nwhere $a$, $b$, and $c$ are positive integers, find the value of $a + b + c$.\n\nA. $8$\nB. $32$\nC. $34$\nD. $48$\nE. $50$',
          answer: 'E. $50$',
          principle: 'Square $\\sin x - \\cos x$ using $\\sin^2 x + \\cos^2 x = 1$ to express $\\sin x \\cos x$, and rewrite $\\tan x + \\cot x$ in terms of $\\sin x \\cos x$.',
          solution:
            'First note that $0 < \\frac{\\pi}{4} < 1$ (since $0 < \\pi < 4$), so there indeed exists $x \\in (0, \\frac{\\pi}{2})$ satisfying $\\sin x - \\cos x = \\frac{\\pi}{4}$. Squaring both sides gives\n$$(\\sin x - \\cos x)^2 = \\frac{\\pi^2}{16} \\implies \\sin^2 x + \\cos^2 x - 2\\sin x \\cos x = \\frac{\\pi^2}{16}.$$\nSince $\\sin^2 x + \\cos^2 x = 1$, we obtain\n$$2\\sin x \\cos x = 1 - \\frac{\\pi^2}{16} = \\frac{16 - \\pi^2}{16} \\implies \\sin x \\cos x = \\frac{16 - \\pi^2}{32}.$$\nNow express $\\tan x + \\frac{1}{\\tan x}$ in terms of $\\sin x$ and $\\cos x$:\n$$\\tan x + \\frac{1}{\\tan x} = \\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x} = \\frac{\\sin^2 x + \\cos^2 x}{\\sin x \\cos x} = \\frac{1}{\\sin x \\cos x} = \\frac{32}{16 - \\pi^2}.$$\nMatching $\\frac{a}{b - \\pi^c} = \\frac{32}{16 - \\pi^2}$ for positive integers $a, b, c$ gives $a = 32$, $b = 16$, and $c = 2$ (unique since $\\pi$ is transcendental). Thus $a + b + c = 32 + 16 + 2 = 50$.',
          rubric: OK_MCQ
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Find the number of ordered pairs $(x, y)$, where $x$ is an integer and $y$ is a perfect square, such that $y = (x - 90)^2 - 4907$.\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $4$',
          answer: 'E. $4$',
          principle: 'Write $y = m^2$ and factor the difference of two squares $(x - 90)^2 - m^2 = 4907$.',
          solution:
            'Write $y = m^2$ with integer $m \\ge 0$, and let $k = |x - 90| \\ge 0$. Notice $m = 0$ is impossible because $(x - 90)^2 = 4907$ has no integer solution ($70^2 = 4900 < 4907 < 5041 = 71^2$). Hence $m \\ge 1$ and $k > m \\ge 1$.\nThe equation becomes\n$$k^2 - m^2 = (k - m)(k + m) = 4907.$$\nFactoring $4907 = 7 \\times 701$ (where $701$ is prime), and noting that $0 < k - m < k + m$, the only possible factor pairs $(k - m, k + m)$ are $(1, 4907)$ and $(7, 701)$:\n- If $k - m = 1$ and $k + m = 4907$, then $k = 2454$ and $m = 2453$. Since $|x - 90| = 2454$, we get $x = 90 \\pm 2454 \\in \\{2544, -2364\\}$ and $y = 2453^2$.\n- If $k - m = 7$ and $k + m = 701$, then $k = 354$ and $m = 347$. Since $|x - 90| = 354$, we get $x = 90 \\pm 354 \\in \\{444, -264\\}$ and $y = 347^2$.\nIn total, there are $4$ ordered pairs $(x, y)$: $(2544, 2453^2)$, $(-2364, 2453^2)$, $(444, 347^2)$, and $(-264, 347^2)$.',
          rubric: OK_MCQ
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Let $S = \\{1, 2, 3, \\dots, 9, 10\\}$. A non-empty subset of $S$ is considered "Good" if the number of even integers in the subset is more than or equal to the number of odd integers in the same subset. For example, the subsets $\\{4, 8\\}$, $\\{3, 4, 7, 8\\}$, and $\\{1, 3, 6, 8, 10\\}$ are "Good". How many subsets of $S$ are "Good"?\n\nA. $482$\nB. $507$\nC. $575$\nD. $637$\nE. $667$',
          answer: 'D. $637$',
          principle: 'Use symmetry between the $5$ even and $5$ odd elements of $S$, together with Vandermonde\'s identity for the equal-count case.',
          solution:
            'The set $S$ contains $5$ even integers and $5$ odd integers, and has $2^{10} = 1024$ subsets in total.\nFor any subset $A \\subseteq S$, let $e(A)$ and $o(A)$ be the numbers of even and odd integers in $A$. Replacing each odd integer $2k - 1$ by $2k$ and each even integer $2k$ by $2k - 1$ ($k = 1, 2, 3, 4, 5$) gives a bijection on subsets of $S$ that swaps $e(A)$ and $o(A)$. Therefore, the number of subsets with $e(A) > o(A)$ equals the number of subsets with $e(A) < o(A)$.\nThe number of subsets with $e(A) = o(A)$ is\n$$\\sum_{k=0}^{5} \\binom{5}{k}\\binom{5}{k} = \\sum_{k=0}^{5} \\binom{5}{k}\\binom{5}{5-k} = \\binom{10}{5} = 252,$$\nwhich includes the empty set ($k = 0$). Hence the number of subsets with $e(A) > o(A)$ is\n$$\\frac{1024 - 252}{2} = 386.$$\nIncluding the $252 - 1 = 251$ non-empty subsets with $e(A) = o(A)$, the total number of "Good" subsets is $386 + 251 = 637$.',
          rubric: OK_MCQ
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'If the graph of a quadratic function $f(x) = ax^2 + bx + c$ ($a \\neq 0$) passes through two distinct points $(r, k)$ and $(s, k)$, what is $f(r + s)$?\n\nA. $2k$\nB. $c$\nC. $k - c$\nD. $2k - c$\nE. None of the above',
          answer: 'B. $c$',
          principle: 'Use Vieta\'s sum-of-roots formula on $f(x) - k = 0$ (or symmetry of a parabola about its axis $x = \\frac{r+s}{2}$).',
          solution:
            'Since $f(r) = f(s) = k$ with $r \\neq s$, $r$ and $s$ are the two distinct roots of the quadratic equation\n$$f(x) - k = ax^2 + bx + (c - k) = 0.$$\nBy Vieta\'s formulas, the sum of the roots is $r + s = -\\frac{b}{a}$.\nEvaluating $f$ at $r + s = -\\frac{b}{a}$ yields\n$$f(r + s) = a\\left(-\\frac{b}{a}\\right)^2 + b\\left(-\\frac{b}{a}\\right) + c = \\frac{b^2}{a} - \\frac{b^2}{a} + c = c.$$',
          rubric: OK_MCQ
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Find the number of positive integers $k < 100$ such that $2(3^{6n}) + k(2^{3n+1}) - 1$ is divisible by $7$ for any positive integer $n$.\n\nA. $10$\nB. $12$\nC. $13$\nD. $14$\nE. $16$',
          answer: 'D. $14$',
          principle: 'Reduce the exponential powers modulo $7$ using $3^6 \\equiv 1 \\pmod{7}$ and $2^3 \\equiv 1 \\pmod{7}$.',
          solution:
            'Observe that $3^3 = 27 \\equiv -1 \\pmod{7}$, so $3^{6n} = (3^3)^{2n} \\equiv (-1)^{2n} = 1 \\pmod{7}$. Similarly, $2^3 = 8 \\equiv 1 \\pmod{7}$, so $2^{3n+1} = 2 \\cdot (2^3)^n \\equiv 2 \\cdot 1^n = 2 \\pmod{7}$.\nTherefore, for every positive integer $n$,\n$$2(3^{6n}) + k(2^{3n+1}) - 1 \\equiv 2(1) + 2k - 1 = 2k + 1 \\pmod{7}.$$\nThis expression is divisible by $7$ if and only if\n$$2k + 1 \\equiv 0 \\pmod{7} \\iff 2k \\equiv 6 \\pmod{7} \\iff k \\equiv 3 \\pmod{7}.$$\nThe positive integers $k < 100$ satisfying $k \\equiv 3 \\pmod{7}$ are $k = 7m + 3$ for $m = 0, 1, 2, \\dots, 13$ (from $3$ up to $94$). Thus there are $14$ such positive integers $k$.',
          rubric: OK_MCQ
        }
      ]
    },
    {
      no: 2,
      title: 'Short Questions',
      marks: 18,
      stem: 'Write the exact numerical answer for each of the 18 included Short Questions (original SMO Senior numbering; 1 mark each).',
      parts: [
        {
          label: '11',
          marks: 1,
          prompt:
            'The area of a rectangle remains unchanged when either its length is increased by $6$ units and width decreased by $2$ units, or its length is decreased by $12$ units and its width increased by $6$ units. If the perimeter of the original rectangle is $x$ units, find the value of $x$.',
          answer: '$132$',
          principle: 'Translate both area-preserving transformations into linear equations in the length $L$ and width $W$.',
          solution:
            'Let the original length and width be $L$ and $W$ units, respectively. The two conditions give\n$$LW = (L + 6)(W - 2) \\quad \\text{and} \\quad LW = (L - 12)(W + 6).$$\nExpanding and cancelling $LW$ from both sides of each equation gives\n$$-2L + 6W - 12 = 0 \\implies 3W - L = 6,$$\n$$6L - 12W - 72 = 0 \\implies L - 2W = 12.$$\nAdding the two simplified equations yields $W = 18$, and substituting back gives $L = 12 + 2(18) = 48$.\nHence the perimeter of the original rectangle is $x = 2(L + W) = 2(48 + 18) = 132$ units.',
          rubric: OK_SHORT
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'For $r = 1, 2, 3, \\dots$, let $u_r = 1 + 2 + 3 + \\cdots + r$. Find the value of\n$$\\frac{1}{\\frac{1}{u_1}} + \\frac{2}{\\frac{1}{u_1} + \\frac{1}{u_2}} + \\frac{3}{\\frac{1}{u_1} + \\frac{1}{u_2} + \\frac{1}{u_3}} + \\cdots + \\frac{100}{\\frac{1}{u_1} + \\frac{1}{u_2} + \\cdots + \\frac{1}{u_{100}}}.$$',
          answer: '$2575$',
          principle: 'Evaluate the partial sums of $\\frac{1}{u_r} = \\frac{2}{r(r+1)}$ by telescoping.',
          solution:
            'Since $u_r = \\frac{r(r + 1)}{2}$, we have\n$$\\frac{1}{u_r} = \\frac{2}{r(r + 1)} = 2\\left(\\frac{1}{r} - \\frac{1}{r + 1}\\right).$$\nSumming from $r = 1$ to $i$ telescopes cleanly:\n$$\\sum_{r=1}^{i} \\frac{1}{u_r} = 2\\left(1 - \\frac{1}{i + 1}\\right) = \\frac{2i}{i + 1}.$$\nTherefore, the $i$-th term of the desired sum is\n$$\\frac{i}{\\frac{2i}{i + 1}} = \\frac{i + 1}{2}.$$\nSumming from $i = 1$ to $100$ gives\n$$\\sum_{i=1}^{100} \\frac{i + 1}{2} = \\frac{1}{2}\\left(\\frac{100 \\times 101}{2} + 100\\right) = \\frac{1}{2}(5050 + 100) = 2575.$$',
          rubric: OK_SHORT
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'If $2010! = M \\times 10^k$, where $M$ is an integer not divisible by $10$, find the value of $k$.',
          answer: '$501$',
          principle: 'Apply Legendre\'s formula to count the exponent of $5$ in $2010!$, since $v_2(2010!) > v_5(2010!)$.',
          solution:
            'Because $M$ is not divisible by $10$, $k$ is the exact exponent of $10$ in the prime factorization of $2010!$, which equals $\\min(v_2(2010!), v_5(2010!))$.\nSince factors of $2$ occur far more frequently than factors of $5$ in $2010!$, we have $k = v_5(2010!)$. By Legendre\'s formula,\n$$k = \\left\\lfloor \\frac{2010}{5} \\right\\rfloor + \\left\\lfloor \\frac{2010}{25} \\right\\rfloor + \\left\\lfloor \\frac{2010}{125} \\right\\rfloor + \\left\\lfloor \\frac{2010}{625} \\right\\rfloor = 402 + 80 + 16 + 3 = 501.$$',
          rubric: OK_SHORT
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'If $a > b > 1$ and $\\frac{1}{\\log_a b} + \\frac{1}{\\log_b a} = \\sqrt{1229}$, find the value of $\\frac{1}{\\log_{ab} b} - \\frac{1}{\\log_{ab} a}$.',
          answer: '$35$',
          principle: 'Use the change-of-base identity $\\frac{1}{\\log_x y} = \\log_y x$ and relate $(t - t^{-1})^2 = (t + t^{-1})^2 - 4$.',
          solution:
            'Since $a > b > 1$, we have $\\log_b a > 1 > \\log_a b > 0$. By the reciprocal change-of-base identity $\\frac{1}{\\log_x y} = \\log_y x$, the given condition reads\n$$\\log_b a + \\log_a b = \\sqrt{1229}.$$\nFor the target expression, we obtain\n$$\\frac{1}{\\log_{ab} b} - \\frac{1}{\\log_{ab} a} = \\log_b(ab) - \\log_a(ab) = (\\log_b a + 1) - (\\log_a b + 1) = \\log_b a - \\log_a b.$$\nBecause $\\log_b a > \\log_a b$, this difference is positive. Squaring gives\n$$(\\log_b a - \\log_a b)^2 = (\\log_b a + \\log_a b)^2 - 4(\\log_b a)(\\log_a b) = 1229 - 4(1) = 1225 = 35^2.$$\nHence $\\frac{1}{\\log_{ab} b} - \\frac{1}{\\log_{ab} a} = 35$.',
          rubric: OK_SHORT
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'For any real number $x$, let $\\lceil x \\rceil$ denote the smallest integer that is greater than or equal to $x$ and $\\lfloor x \\rfloor$ denote the largest integer that is less than or equal to $x$ (for example, $\\lceil 1.23 \\rceil = 2$ and $\\lfloor 1.23 \\rfloor = 1$). Find the value of\n$$\\sum_{k=1}^{2010} \\left\\lceil \\frac{2010}{k} - \\left\\lfloor \\frac{2010}{k} \\right\\rfloor \\right\\rceil.$$',
          answer: '$1994$',
          principle: 'The ceiling of the fractional part $\\{x\\} = x - \\lfloor x \\rfloor$ is $0$ when $x$ is an integer and $1$ otherwise.',
          solution:
            'For each $k \\in \\{1, 2, \\dots, 2010\\}$, let $r_k = \\frac{2010}{k} - \\left\\lfloor \\frac{2010}{k} \\right\\rfloor$ be the fractional part of $\\frac{2010}{k}$, so $0 \\le r_k < 1$.\n- If $k \\mid 2010$, then $\\frac{2010}{k}$ is an integer, so $r_k = 0$ and $\\lceil r_k \\rceil = 0$.\n- If $k \\nmid 2010$, then $0 < r_k < 1$, so $\\lceil r_k \\rceil = 1$.\nThus the sum counts the number of integers $k \\in \\{1, 2, \\dots, 2010\\}$ that do not divide $2010$.\nSince $2010 = 2 \\times 3 \\times 5 \\times 67$, the number of positive divisors of $2010$ is $(1 + 1)(1 + 1)(1 + 1)(1 + 1) = 16$. Hence the required sum is $2010 - 16 = 1994$.',
          rubric: OK_SHORT
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'If $a$, $b$, and $c$ are positive real numbers such that\n$$ab + a + b = bc + b + c = ca + c + a = 35,$$\nfind the value of $(a + 1)(b + 1)(c + 1)$.',
          answer: '$216$',
          principle: 'Add $1$ to each symmetric equation to factor it as $(x + 1)(y + 1) = 36$.',
          solution:
            'Adding $1$ to both sides of each equation factors them cleanly:\n$$(a + 1)(b + 1) = ab + a + b + 1 = 36,$$\n$$(b + 1)(c + 1) = bc + b + c + 1 = 36,$$\n$$(c + 1)(a + 1) = ca + c + a + 1 = 36.$$\nMultiplying all three equations together gives\n$$\\bigl[(a + 1)(b + 1)(c + 1)\\bigr]^2 = 36^3 = (6^2)^3 = 6^6.$$\nSince $a, b, c > 0$, we have $(a + 1)(b + 1)(c + 1) > 0$, so\n$$(a + 1)(b + 1)(c + 1) = 6^3 = 216.$$',
          rubric: OK_SHORT
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Find the number of ways that $2010$ can be written as a sum of one or more positive integers in non-decreasing order such that the difference between the last term and the first term is at most $1$.',
          answer: '$2010$',
          principle: 'Establish a bijection between valid sums of length $k$ ($1 \\le k \\le 2010$) and the division algorithm $2010 = kq + r$.',
          solution:
            'Suppose $2010$ is written as a sum of $k$ positive integers ($1 \\le k \\le 2010$) in non-decreasing order with the difference between the last and first terms at most $1$. Then all $k$ terms must belong to $\\{q, q + 1\\}$ for some positive integer $q$.\nIf all terms are equal, write their common value as $q$ and set $r = 0$; otherwise let $q$ be the smallest term and $r$ ($1 \\le r \\le k - 1$) be the number of terms equal to $q + 1$. In both cases, $0 \\le r \\le k - 1$ and the sum is\n$$(k - r)q + r(q + 1) = kq + r = 2010.$$\nBy the division algorithm, for each integer $k \\in \\{1, 2, \\dots, 2010\\}$, there exists a unique pair of integers $(q, r)$ with $0 \\le r \\le k - 1$ such that $2010 = kq + r$; moreover, $q = \\lfloor 2010/k \\rfloor \\ge 1$, so every term is positive. Therefore, there is exactly one valid representation for each $k = 1, 2, \\dots, 2010$, giving $2010$ ways in total.',
          rubric: OK_SHORT
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Find the largest possible value of $n$ such that there exist $n$ consecutive positive integers whose sum is equal to $2010$.',
          answer: '$60$',
          principle: 'Express the sum of $n$ consecutive integers starting at $a \\ge 1$ as $\\frac{n(2a + n - 1)}{2} = 2010$ and use parity and size bounds on $n$.',
          solution:
            'Let the $n$ consecutive positive integers be $a, a + 1, \\dots, a + n - 1$ with $a \\ge 1$ and $n \\ge 1$. Their sum is\n$$\\frac{n(2a + n - 1)}{2} = 2010 \\implies n(2a + n - 1) = 4020 = 2^2 \\times 3 \\times 5 \\times 67.$$\nSince $a \\ge 1$, we have $2a + n - 1 \\ge n + 1 > n$, which implies\n$$n^2 < n(2a + n - 1) = 4020 \\implies n \\le 63 \\quad (\\text{since } 63^2 = 3969 < 4020 < 4096 = 64^2).$$\nFurthermore, $(2a + n - 1) - n = 2a - 1$ is odd, so $n$ and $2a + n - 1$ have opposite parities. Testing the largest divisors of $4020$ not exceeding $63$ ($60$ is the largest, as the next divisor is $67 > 63$): for $n = 60$, we get $2a + 59 = \\frac{4020}{60} = 67$, which yields $a = 4 \\ge 1$ (valid: $4 + 5 + \\cdots + 63 = 2010$). Thus the largest possible value of $n$ is $60$.',
          rubric: OK_SHORT
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Determine the number of pairs of positive integers $n$ and $m$ such that\n$$1! + 2! + 3! + \\cdots + n! = m^2.$$',
          answer: '$2$',
          principle: 'Check small $n$ directly and reduce modulo $5$ for $n \\ge 4$, using the fact that squares modulo $5$ lie in $\\{0, 1, 4\\}$.',
          solution:
            'For $n \\ge 4$, every factorial $k!$ with $k \\ge 5$ is divisible by $5$, so\n$$1! + 2! + 3! + \\cdots + n! \\equiv 1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33 \\equiv 3 \\pmod{5}.$$\nHowever, for any integer $m$, $m^2 \\equiv 0, 1,$ or $4 \\pmod{5}$, so $m^2 \\not\\equiv 3 \\pmod{5}$. Hence no solutions exist for $n \\ge 4$.\nChecking $n \\in \\{1, 2, 3\\}$ directly:\n- $n = 1$: $1! = 1 = 1^2$, giving $(n, m) = (1, 1)$.\n- $n = 2$: $1! + 2! = 3$, not a perfect square.\n- $n = 3$: $1! + 2! + 3! = 1 + 2 + 6 = 9 = 3^2$, giving $(n, m) = (3, 3)$.\nThus there are $2$ pairs of positive integers $(n, m)$.',
          rubric: OK_SHORT
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Find the number of ordered pairs $(m, n)$ of positive integers $m$ and $n$ such that $m + n = 190$ and $m$ and $n$ are relatively prime.',
          answer: '$72$',
          principle: 'Since $n = 190 - m$, we have $\\gcd(m, n) = \\gcd(m, 190)$, so the count equals Euler\'s totient $\\varphi(190)$.',
          solution:
            'For any positive integers $m$ and $n$ with $m + n = 190$, we have $1 \\le m \\le 189$ and $n = 190 - m$. By the Euclidean algorithm,\n$$\\gcd(m, n) = \\gcd(m, 190 - m) = \\gcd(m, 190).$$\nThus $m$ and $n$ are relatively prime if and only if $1 \\le m < 190$ and $\\gcd(m, 190) = 1$, so the number of such ordered pairs $(m, n)$ is $\\varphi(190)$.\nFactoring $190 = 2 \\times 5 \\times 19$, we obtain\n$$\\varphi(190) = 190\\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{5}\\right)\\left(1 - \\frac{1}{19}\\right) = (2 - 1)(5 - 1)(19 - 1) = 1 \\times 4 \\times 18 = 72.$$',
          rubric: OK_SHORT
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Find the least possible value of\n$$f(x) = \\frac{9}{1 + \\cos 2x} + \\frac{25}{1 - \\cos 2x},$$\nwhere $x$ ranges over all real numbers for which $f(x)$ is defined.',
          answer: '$32$',
          principle: 'Substitute $1 + \\cos 2x = 2\\cos^2 x$ and $1 - \\cos 2x = 2\\sin^2 x$, then apply Cauchy-Schwarz (Titu\'s lemma) or AM-GM.',
          solution:
            'Using the double-angle identities $1 + \\cos 2x = 2\\cos^2 x$ and $1 - \\cos 2x = 2\\sin^2 x$ (where $\\sin x \\neq 0$ and $\\cos x \\neq 0$), we rewrite\n$$f(x) = \\frac{1}{2}\\left(\\frac{3^2}{\\cos^2 x} + \\frac{5^2}{\\sin^2 x}\\right).$$\nSince $\\cos^2 x > 0$, $\\sin^2 x > 0$, and $\\cos^2 x + \\sin^2 x = 1$, applying the Cauchy-Schwarz inequality (Titu\'s lemma) gives\n$$\\left(\\frac{3^2}{\\cos^2 x} + \\frac{5^2}{\\sin^2 x}\\right)(\\cos^2 x + \\sin^2 x) \\ge (3 + 5)^2 = 64,$$\nand hence $f(x) \\ge \\frac{64}{2} = 32$.\nEquality holds when $\\frac{3}{\\cos^2 x} = \\frac{5}{\\sin^2 x}$, i.e., $\\tan^2 x = \\frac{5}{3}$ (for instance, $\\cos^2 x = \\frac{3}{8}$ and $\\sin^2 x = \\frac{5}{8}$), which gives $f(x) = \\frac{9}{2(3/8)} + \\frac{25}{2(5/8)} = 12 + 20 = 32$. Thus the least possible value is $32$.',
          rubric: OK_SHORT
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Find the number of ways of arranging $13$ identical blue balls and $5$ identical red balls on a straight line such that between any $2$ red balls there is at least $1$ blue ball.',
          answer: '$2002$',
          principle: 'First place $1$ blue ball in each of the $4$ gaps between the $5$ red balls, then distribute the remaining $9$ blue balls into the $6$ gaps using stars and bars.',
          solution:
            'Arrange the $5$ identical red balls in a line, creating $6$ gaps (one before the first red ball, $4$ internal gaps between adjacent red balls, and one after the last red ball).\nTo ensure at least $1$ blue ball lies between any two red balls, first place $1$ blue ball in each of the $4$ internal gaps. This leaves $13 - 4 = 9$ identical blue balls to be distributed freely among the $6$ gaps.\nBy stars and bars, the number of non-negative integer solutions to $x_1 + x_2 + x_3 + x_4 + x_5 + x_6 = 9$ is\n$$\\binom{9 + 6 - 1}{6 - 1} = \\binom{14}{5} = \\frac{14 \\times 13 \\times 12 \\times 11 \\times 10}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 14 \\times 13 \\times 11 = 2002.$$',
          rubric: OK_SHORT
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'Let $S = \\{1, 2, 3, 4, \\dots, 100000\\}$. Find the least possible value of $k$ such that any subset $A$ of $S$ with $|A| = 2010$ contains two distinct numbers $a$ and $b$ with $|a - b| \\le k$.',
          answer: '$49$',
          principle: 'Partition $S$ into $2000$ blocks of $50$ consecutive integers for the Pigeonhole upper bound, and construct an arithmetic progression with common difference $49$ for the lower bound.',
          solution:
            'First, partition $S$ into $2000$ disjoint blocks of $50$ consecutive integers:\n$$S_i = \\{50i - 49, 50i - 48, \\dots, 50i\\} \\quad \\text{for } i = 1, 2, \\dots, 2000.$$\nFor any subset $A \\subseteq S$ with $|A| = 2010$, since $2010 > 2000$, the Pigeonhole Principle guarantees that at least one block $S_i$ contains two distinct elements $a, b \\in A$. Any two elements of $S_i$ satisfy $|a - b| \\le 50 - 1 = 49$, so $k = 49$ suffices.\nTo show $k < 49$ does not suffice, consider the subset\n$$A = \\{49j + 1 : j = 0, 1, 2, \\dots, 2009\\} = \\{1, 50, 99, \\dots, 98442\\}.$$\nSince $98442 \\le 100000$, we have $A \\subseteq S$ with $|A| = 2010$, and every pair of distinct elements $a, b \\in A$ satisfies $|a - b| \\ge 49$. Thus the least possible value of $k$ is $49$.',
          rubric: OK_SHORT
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Let $a$, $b$, and $c$ be integers with $a > b > c > 0$. If $b$ and $c$ are relatively prime, $b + c$ is a multiple of $a$, and $a + c$ is a multiple of $b$, determine the value of $abc$.',
          answer: '$6$',
          principle: 'Use the strict ordering $a > b > c > 0$ to pin down exact integer multiples in $a \\mid (b + c)$ and $b \\mid (a + c)$.',
          solution:
            'Since $a > b > c > 0$, we have $0 < b + c < 2a$. As $b + c$ is a positive multiple of $a$, it follows that $b + c = a$.\nSubstituting $a = b + c$ into the second condition gives that $a + c = b + 2c$ is a multiple of $b$, so $b \\mid 2c$.\nBecause $0 < c < b$, we have $0 < 2c < 2b$, which forces $2c = b$.\nFinally, since $b$ and $c$ are relatively prime, $\\gcd(2c, c) = c = 1$. Hence $c = 1$, $b = 2$, and $a = b + c = 3$, giving $abc = 3 \\times 2 \\times 1 = 6$.',
          rubric: OK_SHORT
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Find the number of subsets $\\{a, b, c\\}$ of $\\{1, 2, 3, 4, \\dots, 20\\}$ such that $a < b - 1 < c - 3$.',
          answer: '$680$',
          principle: 'Apply the bijection $(a, b, c) \\mapsto (a, b - 1, c - 3)$ to map constrained triples onto unrestricted $3$-element subsets.',
          solution:
            'In any $3$-element subset $\\{a, b, c\\} \\subseteq \\{1, 2, \\dots, 20\\}$ satisfying $a < b - 1 < c - 3$, the ordering $a < b < c$ holds automatically (since $a < b - 1 < b$ and $b < c - 2 < c$).\nDefine $a\' = a$, $b\' = b - 1$, and $c\' = c - 3$. Then $1 \\le a < b < c \\le 20$ with $a < b - 1 < c - 3$ holds if and only if\n$$1 \\le a\' < b\' < c\' \\le 17.$$\nConversely, any $3$-element subset $\\{a\', b\', c\'\\} \\subseteq \\{1, 2, \\dots, 17\\}$ with $a\' < b\' < c\'$ recovers a unique valid subset $\\{a\', b\' + 1, c\' + 3\\}$. Hence the number of such subsets is\n$$\\binom{17}{3} = \\frac{17 \\times 16 \\times 15}{3 \\times 2 \\times 1} = 17 \\times 8 \\times 5 = 680.$$',
          rubric: OK_SHORT
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'Let $f(n)$ denote the number of $0$\'s in the decimal representation of the positive integer $n$. For example, $f(10001123) = 3$ and $f(1234567) = 0$. Let\n$$M = f(1) \\times 2^{f(1)} + f(2) \\times 2^{f(2)} + f(3) \\times 2^{f(3)} + \\cdots + f(99999) \\times 2^{f(99999)}.$$\nFind the value of $M - 100000$.',
          answer: '$2780$',
          principle: 'Group integers $1 \\le n \\le 99999$ by number of digits $d$ and count the number $a_k$ of integers with exactly $k$ zeros ($1 \\le k \\le 4$).',
          solution:
            'For $1 \\le n \\le 99999$, $n$ has at most $5$ digits and at most $4$ zeros (since the leading digit is nonzero). Let $a_k$ be the number of integers $n \\in \\{1, \\dots, 99999\\}$ with $f(n) = k$, so $M = \\sum_{k=1}^{4} k a_k 2^k$.\nA $d$-digit integer ($2 \\le d \\le 5$) with $k$ zeros has $9$ choices ($1$–$9$) for its leading digit, $\\binom{d-1}{k}$ ways to place the $k$ zeros, and $9^{d-1-k}$ ways to fill the remaining digits with $1$–$9$. Summing over $d = 2, 3, 4, 5$ gives:\n- $a_1 = 9\\binom{1}{1}9^0 + 9\\binom{2}{1}9^1 + 9\\binom{3}{1}9^2 + 9\\binom{4}{1}9^3 = 9 + 162 + 2187 + 26244 = 28602$,\n- $a_2 = 9\\binom{2}{2}9^0 + 9\\binom{3}{2}9^1 + 9\\binom{4}{2}9^2 = 9 + 243 + 4374 = 4626$,\n- $a_3 = 9\\binom{3}{3}9^0 + 9\\binom{4}{3}9^1 = 9 + 324 = 333$,\n- $a_4 = 9\\binom{4}{4}9^0 = 9$.\nTherefore,\n$$M = 1(28602)(2) + 2(4626)(4) + 3(333)(8) + 4(9)(16) = 57204 + 37008 + 7992 + 576 = 102780.$$\nHence $M - 100000 = 102780 - 100000 = 2780$.',
          rubric: OK_SHORT
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'Determine the odd prime number $p$ such that the sum of digits of the number $p^4 - 5p^2 + 13$ is the smallest possible.',
          answer: '$5$',
          principle: 'Factor $p^4 - 5p^2 + 13 = (p - 2)(p - 1)(p + 1)(p + 2) + 9$ to determine its units digit for primes $p > 5$.',
          solution:
            'Let $N(p) = p^4 - 5p^2 + 13$. Testing the smallest odd primes gives:\n- For $p = 3$: $N(3) = 81 - 45 + 13 = 49$, with digit sum $4 + 9 = 13$.\n- For $p = 5$: $N(5) = 625 - 125 + 13 = 513$, with digit sum $5 + 1 + 3 = 9$.\nNow suppose $p > 5$ is prime. Rewrite\n$$N(p) = (p^4 - 5p^2 + 4) + 9 = (p^2 - 1)(p^2 - 4) + 9 = (p - 2)(p - 1)(p + 1)(p + 2) + 9.$$\nAmong the five consecutive integers $p - 2, p - 1, p, p + 1, p + 2$, one is divisible by $5$; since $p > 5$ is prime, $5 \\nmid p$, so $5$ divides $(p - 2)(p - 1)(p + 1)(p + 2)$. Also $p$ is odd, so $p - 1$ is even. Thus $(p - 2)(p - 1)(p + 1)(p + 2)$ is a positive multiple of $10$, meaning $N(p) > 9$ ends in the digit $9$.\nConsequently, for every prime $p > 5$, $N(p)$ has at least two digits with units digit $9$, so its digit sum is strictly greater than $9$. Therefore, the smallest digit sum is $9$, attained at $p = 5$.',
          rubric: OK_SHORT
        },
        {
          label: '34',
          marks: 1,
          prompt:
            'Let $P(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n$ be a polynomial in $x$ where the coefficients $a_0, a_1, a_2, \\dots, a_n$ are non-negative integers. If $P(1) = 25$ and $P(27) = 1771769$, find the value of $a_0 + 2a_1 + 3a_2 + \\cdots + (n + 1)a_n$.',
          answer: '$75$',
          principle: 'Since $a_i \\ge 0$ and $\\sum a_i = P(1) = 25 < 27$, the coefficients $a_i$ are uniquely the base-$27$ digits of $P(27)$.',
          solution:
            'Because each $a_i$ is a non-negative integer and $a_0 + a_1 + \\cdots + a_n = P(1) = 25$, we have $0 \\le a_i \\le 25 < 27$ for every $i = 0, 1, \\dots, n$.\nBy uniqueness of the base-$27$ representation, $a_0, a_1, \\dots, a_n$ are precisely the base-$27$ digits of $P(27) = 1771769$. Performing repeated division by $27$:\n- $1771769 = 27 \\times 65621 + 2 \\implies a_0 = 2$,\n- $65621 = 27 \\times 2430 + 11 \\implies a_1 = 11$,\n- $2430 = 27 \\times 90 + 0 \\implies a_2 = 0$,\n- $90 = 27 \\times 3 + 9 \\implies a_3 = 9$,\n- $3 = 27 \\times 0 + 3 \\implies a_4 = 3$.\nThus $P(x) = 2 + 11x + 9x^3 + 3x^4$ (with $P(1) = 2 + 11 + 9 + 3 = 25$). Therefore,\n$$a_0 + 2a_1 + 3a_2 + 4a_3 + 5a_4 = 2 + 2(11) + 3(0) + 4(9) + 5(3) = 2 + 22 + 0 + 36 + 15 = 75.$$',
          rubric: OK_SHORT
        }
      ]
    }
  ]
};
