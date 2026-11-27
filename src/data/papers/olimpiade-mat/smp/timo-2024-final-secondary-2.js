/**
 * Paket Soal: TIMO 2024 Final Round Review — Secondary 2 (Set 2)
 * Sumber: timo-2024-frr-s2-set-2.pdf (Thailand International Mathematical Olympiad 2024 Final Round Review).
 * Seluruh 30 soal ditranskripsi utuh dalam bahasa Inggris (5 topik × 6 soal, 4 poin per soal = 120 poin).
 * Diagram pada Soal 19 dan Soal 21 dipotong bersih menjadi fig-19.webp dan fig-21.webp.
 */
export default {
  id: 'timo-2024-frr-s2',
  slug: 'timo-2024-final-secondary-2',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'TIMO 2024 Final Round Secondary 2: Logical Thinking, Algebra, Number Theory, Geometry, Combinatorics',
  relatedChapterIds: [
    'smp7-bab4-bentuk-aljabar',
    'smp8-bab2-teorema-pythagoras',
    'smp8-bab5-persamaan-garis-lurus',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'TIMO',
  title: 'TIMO 2024 Final Round \u2014 Secondary 2',
  totalMarks: 120,
  instructions:
    'Open-ended questions (1 to 30) across five topics: Logical Thinking, Algebra, Number Theory, Geometry, and Combinatorics. Write down only the final answer in simplest form (fractions reduced to lowest terms). Each correct answer scores 4 points with no penalty for wrong answers (total 120 points).',
  source: {
    org: 'TIMO',
    file: 'timo-2024-frr-s2-set-2.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Logical Thinking',
      marks: 24,
      stem: 'Open-ended questions 1 to 6. Each correct answer scores 4 points.',
      parts: [
        {
          label: '1',
          marks: 4,
          prompt:
            'Suppose there are some chickens and rabbits in a cage. The number of rabbits is four times the number of chickens. The total number of rabbits\u2019 legs is $224$ more than that of chickens. How many rabbit(s) is/are there in the cage?',
          answer: '$64$',
          principle:
            'Express both counts and leg totals in terms of one variable using $2$ legs per chicken and $4$ legs per rabbit.',
          solution:
            'Let $C$ be the number of chickens and $R$ be the number of rabbits. Then $R = 4C$, so $C = \\dfrac{R}{4}$.\nSince each rabbit has $4$ legs and each chicken has $2$ legs:\n$$4R - 2C = 224 \\implies 4R - 2\\left(\\frac{R}{4}\\right) = 224 \\implies \\frac{7R}{2} = 224 \\implies R = \\frac{224 \\times 2}{7} = 64.$$\nCheck: $64$ rabbits have $256$ legs and $16$ chickens have $32$ legs, with difference $256 - 32 = 224$.',
          rubric: [
            { code: 'M2', text: 'Sets up $R = 4C$ and $4R - 2C = 224$ to obtain $\\frac{7R}{2} = 224$.' },
            { code: 'A2', text: '$64$ rabbits.' }
          ]
        },
        {
          label: '2',
          marks: 4,
          prompt:
            'Given that the scale of the map is $1\\text{ cm} : 200\\text{ m}$ and the actual area of the bridge is $60\\text{ m}^2$, what is the area of the bridge on the map in $\\text{cm}^2$?',
          answer: '$\\dfrac{3}{2000}\\text{ cm}^2$',
          principle:
            'Area scales as the square of the linear map scale.',
          solution:
            'A linear scale of $1\\text{ cm} : 200\\text{ m}$ gives an area scale of\n$$1^2\\text{ cm}^2 : 200^2\\text{ m}^2 = 1\\text{ cm}^2 : 40000\\text{ m}^2.$$\nLet $x\\text{ cm}^2$ be the area of the bridge on the map. Then\n$$\\frac{x}{60} = \\frac{1}{40000} \\implies x = \\frac{60}{40000} = \\frac{3}{2000}\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Squares the linear scale to get $1\\text{ cm}^2 : 40000\\text{ m}^2$.' },
            { code: 'A2', text: '$\\dfrac{3}{2000}\\text{ cm}^2$.' }
          ]
        },
        {
          label: '3',
          marks: 4,
          prompt:
            'Given integers $A$, $B$, and $C$ such that $5(x - 7)^2 = Ax^2 + Bx + C$, find the value of $B + C$.',
          answer: '$175$',
          principle:
            'Expand the squared binomial and equate coefficients of like powers of $x$.',
          solution:
            'Expanding the left-hand side gives\n$$5(x - 7)^2 = 5(x^2 - 14x + 49) = 5x^2 - 70x + 245.$$\nComparing coefficients with $Ax^2 + Bx + C$ yields $A = 5$, $B = -70$, and $C = 245$. Therefore,\n$$B + C = -70 + 245 = 175.$$',
          rubric: [
            { code: 'M2', text: 'Expands $5(x - 7)^2 = 5x^2 - 70x + 245$ to identify $B = -70$ and $C = 245$.' },
            { code: 'A2', text: '$175$.' }
          ]
        },
        {
          label: '4',
          marks: 4,
          prompt:
            'For real numbers $a$, $b$, and $c$ that satisfy $(3a + b) : a = 27 : 7$ and $b : c = 6 : 5$, find $a : b : c$.',
          answer: '$7 : 6 : 5$',
          principle:
            'Solve the first proportion for $a : b$, then match the middle term $b$ to combine with $b : c$.',
          solution:
            'From the first proportion,\n$$\\frac{3a + b}{a} = \\frac{27}{7} \\implies 3 + \\frac{b}{a} = \\frac{27}{7} \\implies \\frac{b}{a} = \\frac{27}{7} - 3 = \\frac{6}{7}.$$\nThus $a : b = 7 : 6$. Since $b : c = 6 : 5$ already shares the same value $6$ for $b$, we combine them directly:\n$$a : b : c = 7 : 6 : 5.$$',
          rubric: [
            { code: 'M2', text: 'Derives $a : b = 7 : 6$ from $\\frac{3a + b}{a} = \\frac{27}{7}$.' },
            { code: 'A2', text: '$7 : 6 : 5$.' }
          ]
        },
        {
          label: '5',
          marks: 4,
          prompt:
            'Let $\\otimes$ be an operation symbol such that the following equations hold:\n$$3 \\otimes 5 = 3 \\times 5$$\n$$4 \\otimes 8 = 4 \\times 6 \\times 8$$\n$$7 \\otimes 15 = 7 \\times 9 \\times 11 \\times 13 \\times 15$$\nIt is known that $n! = n \\times (n - 1) \\times (n - 2) \\times \\cdots \\times 1$. Find the value of $\\dfrac{457!}{(8 \\otimes 456) \\times (7 \\otimes 457)}$.',
          answer: '$720$',
          principle:
            'Recognize $a \\otimes b$ as the product of integers from $a$ to $b$ stepping by $2$, so even and odd products interleave into a factorial tail.',
          solution:
            'From the given examples, $a \\otimes b$ is the product of all integers from $a$ to $b$ in steps of $2$:\n$$8 \\otimes 456 = 8 \\times 10 \\times 12 \\times \\cdots \\times 456,$$\n$$7 \\otimes 457 = 7 \\times 9 \\times 11 \\times \\cdots \\times 457.$$\nMultiplying these two products interleaves all consecutive integers from $7$ to $457$:\n$$(8 \\otimes 456) \\times (7 \\otimes 457) = 7 \\times 8 \\times 9 \\times 10 \\times \\cdots \\times 457 = \\frac{457!}{6!}.$$\nHence,\n$$\\frac{457!}{(8 \\otimes 456) \\times (7 \\otimes 457)} = 6! = 720.$$',
          rubric: [
            { code: 'M2', text: 'Combines $(8 \\otimes 456)(7 \\otimes 457) = 7 \\times 8 \\times \\cdots \\times 457 = \\frac{457!}{6!}$.' },
            { code: 'A2', text: '$720$.' }
          ]
        },
        {
          label: '6',
          marks: 4,
          prompt:
            'Suppose the real number sequence $\\{A_1, A_2, A_3, \\dots\\}$ satisfies $A_{n+1} = A_n - A_{n-1}$. If $A_1 = 129$ and $A_2 = 2024$, find the value of $A_{2024}$.',
          answer: '$2024$',
          principle:
            'Compute the first several terms of the linear recurrence to find its period, then reduce the index modulo the period.',
          solution:
            'Computing successive terms from $A_{n+1} = A_n - A_{n-1}$:\n$$A_1 = 129, \\quad A_2 = 2024,$$\n$$A_3 = 2024 - 129 = 1895,$$\n$$A_4 = 1895 - 2024 = -129,$$\n$$A_5 = -129 - 1895 = -2024,$$\n$$A_6 = -2024 - (-129) = -1895,$$\n$$A_7 = -1895 - (-2024) = 129 = A_1,$$\n$$A_8 = 129 - (-1895) = 2024 = A_2.$$\nSince two consecutive terms repeat, the sequence is periodic with period $6$. Because $2024 = 6 \\times 337 + 2$, we have\n$$A_{2024} = A_2 = 2024.$$',
          rubric: [
            { code: 'M2', text: 'Establishes that the sequence repeats with period $6$ ($A_7 = A_1$, $A_8 = A_2$).' },
            { code: 'A2', text: '$2024$.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Algebra',
      marks: 24,
      stem: 'Open-ended questions 7 to 12. Each correct answer scores 4 points.',
      parts: [
        {
          label: '7',
          marks: 4,
          prompt:
            'Given real number $x > 0$ and $x + \\dfrac{1}{x} = 1022$, find the value of $\\sqrt{x} + \\dfrac{1}{\\sqrt{x}}$.',
          answer: '$32$',
          principle:
            'Square $\\sqrt{x} + \\frac{1}{\\sqrt{x}}$ to relate it to $x + \\frac{1}{x}$.',
          solution:
            'For $x > 0$, squaring the target expression gives\n$$\\left(\\sqrt{x} + \\frac{1}{\\sqrt{x}}\\right)^2 = x + 2 + \\frac{1}{x} = 1022 + 2 = 1024 = 32^2.$$\nSince $\\sqrt{x} + \\dfrac{1}{\\sqrt{x}} > 0$, taking the positive square root yields\n$$\\sqrt{x} + \\frac{1}{\\sqrt{x}} = 32.$$',
          rubric: [
            { code: 'M2', text: 'Uses $\\left(\\sqrt{x} + \\frac{1}{\\sqrt{x}}\\right)^2 = x + 2 + \\frac{1}{x} = 1024$.' },
            { code: 'A2', text: '$32$.' }
          ]
        },
        {
          label: '8',
          marks: 4,
          prompt: 'Factorize $x^2 - 169 + 4y^2 - 4xy$.',
          answer: '$(x - 2y + 13)(x - 2y - 13)$',
          principle:
            'Group the quadratic terms into a perfect square trinomial, then apply the difference of squares.',
          solution:
            'Rearrange the terms to isolate the perfect square $(x - 2y)^2$:\n$$x^2 - 169 + 4y^2 - 4xy = (x^2 - 4xy + 4y^2) - 169 = (x - 2y)^2 - 13^2.$$\nBy the difference of squares identity $a^2 - b^2 = (a + b)(a - b)$,\n$$(x - 2y)^2 - 13^2 = (x - 2y + 13)(x - 2y - 13).$$',
          rubric: [
            { code: 'M2', text: 'Groups terms as $(x - 2y)^2 - 13^2$.' },
            { code: 'A2', text: '$(x - 2y + 13)(x - 2y - 13)$.' }
          ]
        },
        {
          label: '9',
          marks: 4,
          prompt:
            'Find the value of real number $q$ if\n$$\\begin{cases} \\dfrac{4p + 5}{7} + 4 = \\dfrac{q - 9}{2} \\\\ 4p + q = -15 \\end{cases}$$',
          answer: '$11$',
          principle:
            'Clear denominators in the first equation and eliminate $p$ using $4p = -15 - q$.',
          solution:
            'Multiply the first equation by $14$ to clear fractions:\n$$2(4p + 5) + 56 = 7(q - 9) \\implies 8p + 66 = 7q - 63 \\implies 8p = 7q - 129.$$\nFrom the second equation, $4p = -15 - q$, so multiplying by $2$ gives $8p = -30 - 2q$. Equating the two expressions for $8p$:\n$$7q - 129 = -30 - 2q \\implies 9q = 99 \\implies q = 11.$$\n(Check: $p = -\\frac{13}{2}$, and $\\frac{-26 + 5}{7} + 4 = 1 = \\frac{11 - 9}{2}$.)',
          rubric: [
            { code: 'M2', text: 'Eliminates $p$ to obtain $7q - 129 = -30 - 2q$.' },
            { code: 'A2', text: '$q = 11$.' }
          ]
        },
        {
          label: '10',
          marks: 4,
          prompt: 'How many positive integral solution(s) is/are there for $x$ if $7x - 36 < 19$?',
          answer: '$7$',
          principle:
            'Solve the linear inequality for $x$ and count the integers strictly greater than $0$ that satisfy it.',
          solution:
            'Solve for $x$:\n$$7x - 36 < 19 \\implies 7x < 55 \\implies x < \\frac{55}{7} = 7\\frac{6}{7}.$$\nThe positive integers satisfying $x < 7\\frac{6}{7}$ are $x \\in \\{1, 2, 3, 4, 5, 6, 7\\}$, so there are $7$ positive integral solutions.',
          rubric: [
            { code: 'M2', text: 'Solves $7x < 55$ to get $x < \\frac{55}{7}$.' },
            { code: 'A2', text: '$7$ positive integral solutions.' }
          ]
        },
        {
          label: '11',
          marks: 4,
          prompt:
            'Find the sum of possible value(s) of real number $x$ if $|x + 158| + |x - 273| = 2025$.',
          answer: '$115$',
          principle:
            'Split the real line at the critical points $-158$ and $273$ where each absolute value changes sign.',
          solution:
            'Check the three intervals determined by $x = -158$ and $x = 273$:\n- For $-158 \\le x \\le 273$: $|x + 158| + |x - 273| = (x + 158) + (273 - x) = 431 \\neq 2025$, so there is no solution in this interval.\n- For $x > 273$: $(x + 158) + (x - 273) = 2025 \\implies 2x - 115 = 2025 \\implies 2x = 2140 \\implies x = 1070$ (valid since $1070 > 273$).\n- For $x < -158$: $-(x + 158) - (x - 273) = 2025 \\implies -2x + 115 = 2025 \\implies -2x = 1910 \\implies x = -955$ (valid since $-955 < -158$).\n\nThe sum of all possible values of $x$ is $1070 + (-955) = 115$.',
          rubric: [
            { code: 'M2', text: 'Finds the two valid roots $x = 1070$ and $x = -955$ (and checks the middle interval has none).' },
            { code: 'A2', text: '$115$.' }
          ]
        },
        {
          label: '12',
          marks: 4,
          prompt:
            'For $1$-digit numbers $x$ and $y$, find the value of $x + y$ if $0.\\overline{yx9} = \\dfrac{263}{333}$.',
          answer: '$15$',
          principle:
            'Convert the fraction with denominator $333$ to denominator $999$ to read the $3$-digit repeating block directly.',
          solution:
            'Multiply numerator and denominator by $3$:\n$$\\frac{263}{333} = \\frac{263 \\times 3}{333 \\times 3} = \\frac{789}{999} = 0.\\overline{789}.$$\nMatching digits with $0.\\overline{yx9}$ gives $y = 7$ and $x = 8$. Therefore,\n$$x + y = 8 + 7 = 15.$$',
          rubric: [
            { code: 'M2', text: 'Converts $\\frac{263}{333} = \\frac{789}{999} = 0.\\overline{789}$ to obtain $y = 7, x = 8$.' },
            { code: 'A2', text: '$15$.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Number Theory',
      marks: 24,
      stem: 'Open-ended questions 13 to 18. Each correct answer scores 4 points.',
      parts: [
        {
          label: '13',
          marks: 4,
          prompt: 'Find the number of positive simplified proper fractions with denominator $1271$.',
          answer: '$1200$',
          principle:
            'A fraction $\\frac{k}{n}$ with $1 \\le k < n$ is simplified iff $\\gcd(k, n) = 1$, counted by Euler\u2019s totient function $\\phi(n)$.',
          solution:
            'A positive simplified proper fraction with denominator $1271$ has the form $\\dfrac{k}{1271}$ where $1 \\le k < 1271$ and $\\gcd(k, 1271) = 1$. Factorizing the denominator gives $1271 = 31 \\times 41$ (both prime).\nBy Euler\u2019s totient function,\n$$\\phi(1271) = 1271\\left(1 - \\frac{1}{31}\\right)\\left(1 - \\frac{1}{41}\\right) = 30 \\times 40 = 1200.$$',
          rubric: [
            { code: 'M2', text: 'Factorizes $1271 = 31 \\times 41$ and applies Euler\u2019s totient formula.' },
            { code: 'A2', text: '$1200$.' }
          ]
        },
        {
          label: '14',
          marks: 4,
          prompt: 'Given today is Tuesday, which day of the week will it be after $83^{543}$ days?',
          answer: 'Monday',
          principle:
            'Reduce the number of days modulo $7$ using modular exponentiation.',
          solution:
            'Since $83 = 7 \\times 12 - 1$, we have $83 \\equiv -1 \\pmod{7}$. Raising to the $543$-rd power gives\n$$83^{543} \\equiv (-1)^{543} = -1 \\equiv 6 \\pmod{7}.$$\nMoving $6$ days forward (equivalently $1$ day backward) from Tuesday lands on Monday.',
          rubric: [
            { code: 'M2', text: 'Shows $83^{543} \\equiv (-1)^{543} \\equiv -1 \\pmod{7}$.' },
            { code: 'A2', text: 'Monday.' }
          ]
        },
        {
          label: '15',
          marks: 4,
          prompt:
            'Given two positive integers, if their difference is $2024$ and their Highest Common Factor (H.C.F.) is $d$, find the largest possible value of $d$.',
          answer: '$2024$',
          principle:
            'Any common factor of two integers also divides their difference.',
          solution:
            'Let the two positive integers be $ad$ and $bd$ with $a > b \\ge 1$ and $\\gcd(a, b) = 1$. Their difference is\n$$ad - bd = d(a - b) = 2024.$$\nThus $d$ must divide $2024$, so $d \\le 2024$. Taking $a = 2, b = 1$ gives the pair $(4048, 2024)$, whose difference is $2024$ and H.C.F. is $2024$. Hence the largest possible value of $d$ is $2024$.',
          rubric: [
            { code: 'M2', text: 'Uses $d(a - b) = 2024$ to show $d \\mid 2024$ and verifies achievability.' },
            { code: 'A2', text: '$2024$.' }
          ]
        },
        {
          label: '16',
          marks: 4,
          prompt:
            'If $(x + 5)$ is a factor of polynomial $31x^2 + 628x + c$, find the value of $c$.',
          answer: '$2365$',
          principle:
            'By the Factor Theorem, $(x - r)$ divides $P(x)$ if and only if $P(r) = 0$.',
          solution:
            'Since $(x + 5)$ is a factor of $P(x) = 31x^2 + 628x + c$, we have $P(-5) = 0$:\n$$31(-5)^2 + 628(-5) + c = 0 \\implies 775 - 3140 + c = 0 \\implies c = 2365.$$',
          rubric: [
            { code: 'M2', text: 'Applies the Factor Theorem by substituting $x = -5$ into the polynomial.' },
            { code: 'A2', text: '$c = 2365$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'Find the value of expression $\\sqrt{80 - 2\\sqrt{80 - 2\\sqrt{80 - \\cdots}}}$.',
          answer: '$8$',
          principle:
            'Set the infinite nested radical equal to $x > 0$ and solve the resulting quadratic equation.',
          solution:
            'Let $x = \\sqrt{80 - 2\\sqrt{80 - 2\\sqrt{80 - \\cdots}}}$. Since the principal square root is positive, $x > 0$ and\n$$x = \\sqrt{80 - 2x}.$$\nSquaring both sides gives\n$$x^2 = 80 - 2x \\implies x^2 + 2x - 80 = 0 \\implies (x + 10)(x - 8) = 0.$$\nBecause $x > 0$, we obtain $x = 8$.',
          rubric: [
            { code: 'M2', text: 'Sets $x = \\sqrt{80 - 2x}$ to obtain $x^2 + 2x - 80 = 0$.' },
            { code: 'A2', text: '$8$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt: 'Find the sum of all positive factors of $1587$.',
          answer: '$2212$',
          principle:
            'Use the prime factorization $n = \\prod p_i^{e_i}$ and the multiplicative formula $\\sigma(n) = \\prod (1 + p_i + \\dots + p_i^{e_i})$.',
          solution:
            'Prime factorize $1587$:\n$$1587 = 3 \\times 529 = 3^1 \\times 23^2.$$\nThe sum of all positive factors of $1587$ is\n$$(3^0 + 3^1)(23^0 + 23^1 + 23^2) = (1 + 3)(1 + 23 + 529) = 4 \\times 553 = 2212.$$',
          rubric: [
            { code: 'M2', text: 'Factorizes $1587 = 3 \\times 23^2$ and sets up $(1 + 3)(1 + 23 + 23^2)$.' },
            { code: 'A2', text: '$2212$.' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Geometry',
      marks: 24,
      stem: 'Open-ended questions 19 to 24. Each correct answer scores 4 points.',
      parts: [
        {
          label: '19',
          marks: 4,
          figures: [
            {
              src: '/papers/timo-2024-frr-s2/fig-19.webp',
              alt: 'Geometry diagram showing segment BF with point A between B and F, segment BE with point C between B and E, segment AD intersecting BE at C, and parallel segments AB and DE forming pentagon BCDEF with vertex F.',
              caption: 'Diagram for Question 19 showing intersecting segments AD and BE with AB parallel to DE.'
            }
          ],
          prompt:
            'Referring to the figure below, line $AD$ and line $BE$ intersect at point $C$ and $AB \\parallel DE$. It is given that $AB = 26$, $BC = 29$, $DE = 52$, $AF = 34$, and $EF = 63$. Find the area of pentagon $BCDEF$.',
          answer: '$2982$',
          principle:
            'Use AA similarity from $AB \\parallel DE$ to find $CE$ and $BE$, then verify $\\triangle BEF$ is right-angled via the converse of Pythagoras.',
          solution:
            'Since $AB \\parallel DE$, alternate interior angles give $\\triangle ABC \\sim \\triangle DEC$ with similarity ratio $\\dfrac{DE}{AB} = \\dfrac{52}{26} = 2$. Hence\n$$CE = 2 \\cdot BC = 2 \\times 29 = 58 \\implies BE = BC + CE = 29 + 58 = 87.$$\nFrom the figure, $B, A, F$ are collinear, so $BF = AB + AF = 26 + 34 = 60$. Checking the side lengths of $\\triangle BEF$:\n$$BF^2 + EF^2 = 60^2 + 63^2 = 3^2(20^2 + 21^2) = 3^2 \\cdot 29^2 = 87^2 = BE^2.$$\nBy the converse of the Pythagorean theorem, $\\angle BFE = 90^\\circ$, so\n$$[\\triangle BEF] = \\frac{1}{2} \\times 60 \\times 63 = 1890.$$\nBecause $DE \\parallel BF$ and $EF \\perp BF$, $EF$ is perpendicular to $DE$. Since $C$ lies on $BE$ with $CE : BE = 58 : 87 = 2 : 3$, the altitude from $C$ to $DE$ is $\\dfrac{2}{3} EF = \\dfrac{2}{3} \\times 63 = 42$. Thus\n$$[\\triangle CDE] = \\frac{1}{2} \\times 52 \\times 42 = 1092.$$\nAdding the two triangles yields the area of pentagon $BCDEF$:\n$$[BCDEF] = 1890 + 1092 = 2982.$$',
          rubric: [
            { code: 'M2', text: 'Uses $\\triangle ABC \\sim \\triangle DEC$ to get $BE = 87$, proves $\\angle BFE = 90^\\circ$, and finds the altitude $42$ of $\\triangle CDE$.' },
            { code: 'A2', text: '$2982$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'Given the polar coordinates of the points $A$, $B$, and $C$ are $(19, 150^\\circ)$, $(23, 240^\\circ)$, and $(13, 330^\\circ)$ respectively, find the area of $\\triangle ABC$.',
          answer: '$368$',
          principle:
            'Compare the polar angles relative to the origin $O$ to identify collinearity and perpendicularity.',
          solution:
            'Let $O$ be the pole (origin). Because $330^\\circ - 150^\\circ = 180^\\circ$, rays $OA$ and $OC$ point in opposite directions, so $A, O, C$ are collinear with\n$$AC = OA + OC = 19 + 13 = 32.$$\nFurthermore, $240^\\circ - 150^\\circ = 90^\\circ$, which means $OB \\perp AC$. Thus $OB = 23$ is the altitude of $\\triangle ABC$ to base $AC$, giving\n$$[\\triangle ABC] = \\frac{1}{2} \\times 32 \\times 23 = 16 \\times 23 = 368.$$',
          rubric: [
            { code: 'M2', text: 'Recognizes $AC$ passes through the origin with length $19 + 13 = 32$ and $OB \\perp AC$ with height $23$.' },
            { code: 'A2', text: '$368$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          figures: [
            {
              src: '/papers/timo-2024-frr-s2/fig-21.webp',
              alt: 'A 5-by-6 rectangular grid containing three asterisk symbols placed at row 2 column 2, row 3 column 4, and row 4 column 3.',
              caption: 'Grid for Question 21 showing the positions of the three asterisks.'
            }
          ],
          prompt:
            'How many rectangle(s) containing only two \u201c$*$\u201d is/are there in the figure below?',
          answer: '$50$',
          principle:
            'Count rectangles containing each pair of asterisks by multiplying choices for top, bottom, left, and right grid boundaries, then subtract those containing all three.',
          solution:
            'Label the $5 \\times 6$ grid by rows $1$ to $5$ (top to bottom) and columns $1$ to $6$ (left to right). The three asterisks lie at $P_1 = (2, 2)$, $P_2 = (3, 4)$, and $P_3 = (4, 3)$.\n- Rectangles containing $P_1$ and $P_2$ (must span rows $2..3$ and columns $2..4$): $2$ choices for top edge $\\times$ $3$ for bottom edge $\\times$ $2$ for left edge $\\times$ $3$ for right edge $= 2 \\times 3 \\times 2 \\times 3 = 36$.\n- Rectangles containing $P_1$ and $P_3$ (must span rows $2..4$ and columns $2..3$): $2 \\times 2 \\times 2 \\times 4 = 32$.\n- Rectangles containing $P_2$ and $P_3$ (must span rows $3..4$ and columns $3..4$): $3 \\times 2 \\times 3 \\times 3 = 54$.\n- Rectangles containing all three $P_1, P_2, P_3$ (must span rows $2..4$ and columns $2..4$): $2 \\times 2 \\times 2 \\times 3 = 24$.\n\nEach rectangle containing all three asterisks was counted once in each of the three pairs, so by inclusion-exclusion the number of rectangles containing *only* two asterisks is\n$$36 + 32 + 54 - 3(24) = 122 - 72 = 50.$$',
          rubric: [
            { code: 'M2', text: 'Counts rectangles for each pair ($36, 32, 54$) and all three ($24$) and subtracts $3 \\times 24$.' },
            { code: 'A2', text: '$50$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'Find the area enclosed by the $x$-axis, $y$-axis, and the straight line $7x + 24y = 84$.',
          answer: '$21$',
          principle:
            'Find the $x$- and $y$-intercepts of the line to determine the legs of the right triangle formed with the coordinate axes.',
          solution:
            'Set $y = 0$ to find the $x$-intercept: $7x = 84 \\implies x = 12$.\nSet $x = 0$ to find the $y$-intercept: $24y = 84 \\implies y = \\dfrac{84}{24} = \\dfrac{7}{2}$.\nThe enclosed region is a right triangle with legs $12$ and $\\dfrac{7}{2}$, so its area is\n$$\\text{Area} = \\frac{1}{2} \\times 12 \\times \\frac{7}{2} = 21.$$',
          rubric: [
            { code: 'M2', text: 'Finds intercepts $x = 12$ and $y = \\frac{7}{2}$.' },
            { code: 'A2', text: '$21$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'A solid cuboid is formed by merging $1188$ cubes with side length $1\\text{ cm}$. Find the minimum value of the total surface area of the cuboid.',
          answer: '$678\\text{ cm}^2$',
          principle:
            'For a fixed volume $LWH = 1188$, the surface area $2(LW + WH + LH)$ is minimized when the integer dimensions $L, W, H$ are as close to each other as possible.',
          solution:
            'Factorize the volume $1188$ into primes:\n$$1188 = 2^2 \\times 3^3 \\times 11.$$\nTo minimize $2(LW + WH + LH)$ subject to $LWH = 1188$, choose the integer dimensions as close to $\\sqrt[3]{1188} \\approx 10.59$ as possible, namely $(9, 11, 12)$ (since $9 \\times 11 \\times 12 = 1188$). Then the minimum total surface area is\n$$2(9 \\times 11 + 11 \\times 12 + 9 \\times 12) = 2(99 + 132 + 108) = 2 \\times 339 = 678\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Factorizes $1188 = 2^2 \\times 3^3 \\times 11$ and chooses the closest dimensions $(9, 11, 12)$.' },
            { code: 'A2', text: '$678\\text{ cm}^2$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'Given two points $T(13, 18)$ and $H(6, 4)$ on the plane, if $M(x, y)$ is a point on line segment $TH$ such that $TM : MH = 2 : 5$, find $x + 2y$.',
          answer: '$39$',
          principle:
            'Apply the section formula for a point dividing segment $TH$ internally in the ratio $2 : 5$.',
          solution:
            'By the section formula with $TM : MH = 2 : 5$,\n$$x = \\frac{5(13) + 2(6)}{2 + 5} = \\frac{65 + 12}{7} = \\frac{77}{7} = 11,$$\n$$y = \\frac{5(18) + 2(4)}{2 + 5} = \\frac{90 + 8}{7} = \\frac{98}{7} = 14.$$\nThus $M = (11, 14)$, and\n$$x + 2y = 11 + 2(14) = 39.$$',
          rubric: [
            { code: 'M2', text: 'Applies the section formula to find $M(11, 14)$.' },
            { code: 'A2', text: '$39$.' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Combinatorics',
      marks: 24,
      stem: 'Open-ended questions 25 to 30. Each correct answer scores 4 points.',
      parts: [
        {
          label: '25',
          marks: 4,
          prompt:
            '$153$ cards are marked from $1$ to $153$ and $3$ of these cards are drawn at random. Find the probability that at least one of the cards drawn is a multiple of $3$ or $7$.',
          answer: '$\\dfrac{118885}{146319}$',
          principle:
            'Count multiples of $3$ or $7$ via inclusion-exclusion, then use complementary probability (subtracting the all-non-multiples case from $1$).',
          solution:
            'Among the integers $1$ to $153$, there are $\\lfloor 153/3 \\rfloor = 51$ multiples of $3$, $\\lfloor 153/7 \\rfloor = 21$ multiples of $7$, and $\\lfloor 153/21 \\rfloor = 7$ multiples of $21$. By inclusion-exclusion, the number of cards that are multiples of $3$ or $7$ is\n$$51 + 21 - 7 = 65,$$\nleaving $153 - 65 = 88$ cards that are neither.\nUsing complementary probability:\n$$P(\\text{at least one}) = 1 - \\frac{\\binom{88}{3}}{\\binom{153}{3}} = 1 - \\frac{109736}{585276} = \\frac{475540}{585276} = \\frac{118885}{146319}.$$\n(Equivalently, $\\dfrac{\\binom{65}{1}\\binom{88}{2} + \\binom{65}{2}\\binom{88}{1} + \\binom{65}{3}}{\\binom{153}{3}} = \\dfrac{248820 + 183040 + 43680}{585276} = \\dfrac{475540}{585276} = \\dfrac{118885}{146319}$.)',
          rubric: [
            { code: 'M2', text: 'Finds $65$ multiples of $3$ or $7$ ($88$ non-multiples) and sets up $1 - \\binom{88}{3}/\\binom{153}{3}$.' },
            { code: 'A2', text: '$\\dfrac{118885}{146319}$.' }
          ]
        },
        {
          label: '26',
          marks: 4,
          prompt:
            'A flight of stairs has $10$ steps. Beck can go down $1$ step, $2$ steps, $3$ steps, or $4$ steps at a time. How many different way(s) is/are there for Beck to go down the stairs?',
          answer: '$401$',
          principle:
            'Model the number of ways $a_n$ to descend $n$ steps with the $4$-step linear recurrence $a_n = a_{n-1} + a_{n-2} + a_{n-3} + a_{n-4}$.',
          solution:
            'Let $a_n$ denote the number of ways to go down $n$ steps, with $a_0 = 1$. Since the first move can be $1, 2, 3,$ or $4$ steps, $a_1 = 1$, $a_2 = 2$, $a_3 = 4$, $a_4 = 8$, and for $n \\ge 4$, $a_n = a_{n-1} + a_{n-2} + a_{n-3} + a_{n-4}$:\n\n| Step $n$ | Ways $a_n$ |\n| :---: | :---: |\n| $1$ | $1$ |\n| $2$ | $2$ |\n| $3$ | $4$ |\n| $4$ | $8$ |\n| $5$ | $15$ |\n| $6$ | $29$ |\n| $7$ | $56$ |\n| $8$ | $108$ |\n| $9$ | $208$ |\n| $10$ | $401$ |\n\nThus there are $401$ different ways.',
          rubric: [
            { code: 'M2', text: 'Applies $a_n = a_{n-1} + a_{n-2} + a_{n-3} + a_{n-4}$ with base cases $1, 2, 4, 8$.' },
            { code: 'A2', text: '$401$.' }
          ]
        },
        {
          label: '27',
          marks: 4,
          prompt:
            'There are a total of $34$ questions in a quiz with the following point rules: $10$ points will be given for a correct answer and $4$ points will be deducted for a blank or a wrong answer. At least how many questions do we need to answer correctly to get more than $160$ points?',
          answer: '$22$',
          principle:
            'Write the total score in terms of the number of correct answers $x$ and solve the strict linear inequality.',
          solution:
            'Let $x$ be the number of correct answers; then $34 - x$ questions are blank or wrong. The total score is\n$$10x - 4(34 - x) > 160 \\implies 14x - 136 > 160 \\implies 14x > 296 \\implies x > \\frac{296}{14} = 21\\frac{1}{7}.$$\nSince $x$ is an integer, at least $22$ correct answers are needed. (Check: $x = 21$ gives $158 \\le 160$, while $x = 22$ gives $172 > 160$.)',
          rubric: [
            { code: 'M2', text: 'Sets up $10x - 4(34 - x) > 160$ and obtains $x > \\frac{296}{14}$.' },
            { code: 'A2', text: '$22$ questions.' }
          ]
        },
        {
          label: '28',
          marks: 4,
          prompt:
            'It is known that $a, b, c, d$ are integers and all of them are greater than $6$. Find the number of solution sets for $a + b + c + d = 46$.',
          answer: '$1330$',
          principle:
            'Shift each variable by its minimum allowed value ($7$) to reduce to a standard stars-and-bars count of non-negative integer solutions.',
          solution:
            'Since $a, b, c, d$ are integers greater than $6$, each satisfies $\\ge 7$. Let $a\u2032 = a - 7$, $b\u2032 = b - 7$, $c\u2032 = c - 7$, and $d\u2032 = d - 7$, so $a\u2032, b\u2032, c\u2032, d\u2032 \\ge 0$ and\n$$a\u2032 + b\u2032 + c\u2032 + d\u2032 = 46 - 4(7) = 18.$$\nBy stars and bars, the number of non-negative integer solutions is\n$$\\binom{18 + 4 - 1}{4 - 1} = \\binom{21}{3} = \\frac{21 \\times 20 \\times 19}{3 \\times 2 \\times 1} = 1330.$$',
          rubric: [
            { code: 'M2', text: 'Shifts variables by $7$ to get $a\u2032 + b\u2032 + c\u2032 + d\u2032 = 18$ and applies $\\binom{21}{3}$.' },
            { code: 'A2', text: '$1330$.' }
          ]
        },
        {
          label: '29',
          marks: 4,
          prompt:
            'A number is called \u201cSpecial\u201d if each of its digits is smaller than all other digit(s) on its right, if any. For example, $123$ and $367$ are Special numbers. How many $3$-digit \u201cSpecial\u201d even numbers are there if its hundreds digit can only be $1, 3, 5$, or $7$?',
          answer: '$20$',
          principle:
            'Digits must be strictly increasing from left to right ($h < t < u$) with $u$ even; enumerate systematically by the hundreds digit $h$.',
          solution:
            'A $3$-digit Special even number $\\overline{htu}$ satisfies $h < t < u$ with $h \\in \\{1, 3, 5, 7\\}$ and $u \\in \\{2, 4, 6, 8\\}$ ($u = 0$ is impossible since $u > h \\ge 1$):\n- $h = 1$: valid pairs $(t, u)$ give $124, 126, 128, 134, 136, 138, 146, 148, 156, 158, 168, 178$ ($12$ numbers).\n- $h = 3$: $346, 348, 356, 358, 368, 378$ ($6$ numbers).\n- $h = 5$: $568, 578$ ($2$ numbers).\n- $h = 7$: no digit $t$ satisfies $7 < t < 8$ ($0$ numbers).\n\nIn total, there are $12 + 6 + 2 + 0 = 20$ such Special even numbers.',
          rubric: [
            { code: 'M2', text: 'Breaks into cases $h \\in \\{1, 3, 5, 7\\}$ with $h < t < u$ and even units digit $u$.' },
            { code: 'A2', text: '$20$.' }
          ]
        },
        {
          label: '30',
          marks: 4,
          prompt:
            'Given a standard $52$-card deck comprising $13$ ranks in each of the $4$ suits, find the probability of $3$ cards drawn from the deck having adjacent ranks (for example, $3$ cards of ranks $4$, $5$, and $6$).',
          answer: '$\\dfrac{176}{5525}$',
          principle:
            'Count the consecutive triples of ranks among $13$ ranks and multiply by the $4^3$ suit choices, then divide by $\\binom{52}{3}$.',
          solution:
            'From $13$ ranks ($1$ to $13$), there are $11$ triples of adjacent ranks: $(1,2,3), (2,3,4), \\dots, (11,12,13)$.\nFor each triple, each of the $3$ ranks can be drawn from any of the $4$ suits, giving $11 \\times 4 \\times 4 \\times 4 = 704$ favorable $3$-card hands.\nThe total number of $3$-card hands is $\\binom{52}{3} = \\dfrac{52 \\times 51 \\times 50}{6} = 22100$. Hence the probability is\n$$\\frac{11 \\times 4^3}{\\binom{52}{3}} = \\frac{704}{22100} = \\frac{176}{5525}.$$',
          rubric: [
            { code: 'M2', text: 'Counts $11 \\times 4^3$ favorable hands out of $\\binom{52}{3}$ total hands.' },
            { code: 'A2', text: '$\\dfrac{176}{5525}$.' }
          ]
        }
      ]
    }
  ]
};
