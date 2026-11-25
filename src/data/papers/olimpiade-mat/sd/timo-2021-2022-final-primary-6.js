/**
 * Paket Soal: TIMO 2021–2022 Final Round — Primary 6 (Thailand International Mathematical Olympiad)
 * Sumber: timo_2021_2022_p6_final.pdf (30 open-ended questions, 5 points each, total 150 points).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Gambar pada soal 19, 21, dan 23 direkonstruksi
 * sebagai SVG vektor yang identik dengan naskah asli. Seluruh jawaban diverifikasi secara mandiri.
 */
export default {
  id: 'timo-2021-2022-final-p6',
  slug: 'timo-2021-2022-final-primary-6',
  subject: 'olimpiade-mat',
  grade: 6,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'TIMO 2021–2022 Final Round Primary 6: Logical Thinking, Arithmetic, Number Theory, Geometry, and Combinatorics',
  relatedChapterIds: [
    'sd5-bab2-kpk-fpb',
    'sd6-bab1-pecahan-desimal',
    'sd6-bab2-rasio',
    'sd6-bab4-peluang',
    'smp7-bab1-bilangan-bulat',
    'smp8-bab2-teorema-pythagoras'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'TIMO',
  title: 'TIMO 2021–2022 Final Round — Primary 6',
  totalMarks: 150,
  instructions:
    'Open-ended questions (1st–30th): write down only the final answer in simplest form. Each correct answer scores 5 points and there is no penalty for wrong answers (total 150 points). No calculators are allowed. Include units where the question asks for a measurement. Questions 19, 21, and 23 are accompanied by reconstructed vector diagrams matching the original paper.',
  source: {
    org: 'TIMO',
    file: 'timo_2021_2022_p6_final.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Logical Thinking',
      marks: 30,
      stem: 'Open-ended questions 1 to 6. Each correct answer scores 5 points.',
      parts: [
        {
          label: '1',
          marks: 5,
          prompt: 'Find the average of the following $8$ numbers:\n$$1234,\\ 999,\\ 1020,\\ 1300,\\ 950,\\ 1100,\\ 880,\\ 1013$$',
          answer: '$1062$',
          principle: 'The arithmetic mean equals the total sum divided by the count of numbers; using a convenient reference number ($1000$) simplifies mental addition.',
          solution:
            'Using $1000$ as a reference value, find the signed difference of each number from $1000$:\n$$+234,\\ -1,\\ +20,\\ +300,\\ -50,\\ +100,\\ -120,\\ +13.$$\nAdd these offsets together:\n$$(234 + 300 + 100 + 20 + 13) - (1 + 50 + 120) = 667 - 171 = 496.$$\nSo the total sum is $8 \\times 1000 + 496 = 8496$.\nDividing by $8$ gives the average:\n$$\\frac{8496}{8} = 1000 + \\frac{496}{8} = 1000 + 62 = 1062.$$',
          rubric: [
            { code: 'M3', text: 'Computes the total sum $8496$ (directly or via offsets from $1000$).' },
            { code: 'A2', text: 'Average $1062$.' }
          ]
        },
        {
          label: '2',
          marks: 5,
          prompt:
            'There are $19$ pieces of red chopsticks, $5$ pieces of green chopsticks and $9$ pieces of orange chopsticks mixed together. If you want to get $2$ pairs of green chopsticks and $2$ pairs of red chopsticks in the dark, at least how many pieces of chopsticks are needed to be taken?',
          answer: '$32$',
          principle: 'Apply the worst-case (Pigeonhole) principle: consider the largest possible draw that still avoids completing both required sets.',
          solution:
            '$2$ pairs of green chopsticks means $4$ green chopsticks, and $2$ pairs of red chopsticks means $4$ red chopsticks.\nTo guarantee *both* at least $4$ green and at least $4$ red in the dark, consider the worst-case scenarios where one requirement is still unmet:\n- Case 1 (missing the $4$th green): take all $9$ orange, all $19$ red, and $3$ green chopsticks, for $9 + 19 + 3 = 31$ chopsticks.\n- Case 2 (missing the $4$th red): take all $9$ orange, all $5$ green, and $3$ red chopsticks, for $9 + 5 + 3 = 17$ chopsticks.\n\nThe worst case has $31$ chopsticks, so taking $31 + 1 = 32$ chopsticks guarantees at least $4$ green and at least $4$ red chopsticks.',
          rubric: [
            { code: 'M3', text: 'Identifies the worst case of $9$ orange + $19$ red + $3$ green = $31$ chopsticks.' },
            { code: 'A2', text: 'Minimum number of chopsticks $32$.' }
          ]
        },
        {
          label: '3',
          marks: 5,
          prompt:
            'It requires $80$ minutes to cut a piece of wood into $9$ sections. If the time required for each cut is the same, how many minute(s) is/are required to cut the wood into $7$ sections? (You cannot stack the wood and cut pieces together.)',
          answer: '$60\\text{ minutes}$',
          principle: 'Cutting a single strip into $n$ sections requires $n - 1$ cuts, not $n$ cuts.',
          solution:
            'Cutting a piece of wood into $9$ sections requires $9 - 1 = 8$ cuts.\nSince $8$ cuts take $80$ minutes, each cut takes\n$$\\frac{80}{8} = 10\\text{ minutes}.$$\nCutting a piece of wood into $7$ sections requires $7 - 1 = 6$ cuts, so the total time needed is\n$$6 \\times 10 = 60\\text{ minutes}.$$',
          rubric: [
            { code: 'M3', text: 'Uses $9 - 1 = 8$ cuts ($10$ minutes per cut) and $7 - 1 = 6$ cuts.' },
            { code: 'A2', text: '$60\\text{ minutes}$.' }
          ]
        },
        {
          label: '4',
          marks: 5,
          prompt:
            'There are some chickens and rabbits in a cage. The number of chickens is $4$ times the number of rabbits. They have $192$ legs in total. How many chicken(s) is/are there?',
          answer: '$64$',
          principle: 'Group animals according to the given ratio (4 chickens + 1 rabbit) or form a linear equation in the number of rabbits.',
          solution:
            'Let $r$ be the number of rabbits. Then there are $4r$ chickens.\nEach chicken has $2$ legs and each rabbit has $4$ legs, so the total number of legs is\n$$2(4r) + 4r = 8r + 4r = 12r.$$\nSetting $12r = 192$ gives\n$$r = \\frac{192}{12} = 16\\text{ rabbits}.$$\nTherefore, the number of chickens is $4r = 4 \\times 16 = 64$.\nCheck: $64 \\times 2 + 16 \\times 4 = 128 + 64 = 192$ legs.',
          rubric: [
            { code: 'M3', text: 'Sets up $2(4r) + 4r = 192$ and finds $r = 16$ rabbits.' },
            { code: 'A2', text: '$64$ chickens.' }
          ]
        },
        {
          label: '5',
          marks: 5,
          prompt:
            'It takes $A$, $B$, $C$, and $D$ $10$, $20$, $30$, and $60$ days respectively to finish a mission alone. How many day(s) is/are needed for them to finish the same task together?',
          answer: '$5\\text{ days}$',
          principle: 'Add the individual daily work rates (fractions of the task completed per day), then take the reciprocal of the combined rate.',
          solution:
            'In $1$ day, the fractions of the task completed by $A$, $B$, $C$, and $D$ are $\\frac{1}{10}$, $\\frac{1}{20}$, $\\frac{1}{30}$, and $\\frac{1}{60}$ respectively.\nWorking together, their combined daily rate is\n$$\\frac{1}{10} + \\frac{1}{20} + \\frac{1}{30} + \\frac{1}{60} = \\frac{6 + 3 + 2 + 1}{60} = \\frac{12}{60} = \\frac{1}{5}\\text{ of the task per day}.$$\nThus, finishing the entire task together takes\n$$\\frac{1}{1/5} = 5\\text{ days}.$$',
          rubric: [
            { code: 'M3', text: 'Adds the daily rates $\\frac{1}{10} + \\frac{1}{20} + \\frac{1}{30} + \\frac{1}{60} = \\frac{1}{5}$.' },
            { code: 'A2', text: '$5\\text{ days}$.' }
          ]
        },
        {
          label: '6',
          marks: 5,
          prompt:
            'All Grade 6 students at a school were born in the same year. If there must be at least $4$ students with the same date of birth, at least how many Grade 6 student(s) is/are there?',
          answer: '$1099$',
          principle: 'By the Generalized Pigeonhole Principle, to guarantee $4$ items in one category across up to $366$ possible dates in a year (worst case: a leap year), take $366 \\times 3 + 1$.',
          solution:
            'The problem does not specify whether the shared birth year is a common year ($365$ days) or a leap year ($366$ days). To *guarantee* that at least $4$ students share the same date of birth regardless of which year it is, we must account for the worst case of $366$ possible dates of birth.\nIn the worst case where no date has $4$ students yet, each of the $366$ dates has at most $3$ students:\n$$366 \\times 3 = 1098\\text{ students}.$$\nAdding $1$ more student forces at least one date of birth to have $3 + 1 = 4$ students:\n$$1098 + 1 = 1099.$$',
          rubric: [
            { code: 'M3', text: 'Uses $366$ possible dates in the worst case and computes $366 \\times 3 = 1098$.' },
            { code: 'A2', text: '$1099$ students.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Arithmetic',
      marks: 30,
      stem: 'Open-ended questions 7 to 12. Each correct answer scores 5 points.',
      parts: [
        {
          label: '7',
          marks: 5,
          prompt:
            'Find the value of\n$$\\frac{1}{2022 \\times 2023} + \\frac{1}{2023 \\times 2024} + \\frac{1}{2024 \\times 2025} + \\cdots + \\frac{1}{8086 \\times 8087} + \\frac{1}{8087 \\times 8088}.$$',
          answer: '$\\frac{1}{2696}$',
          principle: 'Split each term using the telescoping identity $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ so intermediate fractions cancel in pairs.',
          solution:
            'Using $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ on every term:\n$$\\begin{aligned}\n\\text{Sum} &= \\left(\\frac{1}{2022} - \\frac{1}{2023}\\right) + \\left(\\frac{1}{2023} - \\frac{1}{2024}\\right) + \\cdots + \\left(\\frac{1}{8087} - \\frac{1}{8088}\\right) \\\\\n&= \\frac{1}{2022} - \\frac{1}{8088}.\n\\end{aligned}$$\nSince $8088 = 4 \\times 2022$, we have\n$$\\frac{1}{2022} - \\frac{1}{8088} = \\frac{4}{8088} - \\frac{1}{8088} = \\frac{3}{8088} = \\frac{1}{2696}.$$',
          rubric: [
            { code: 'M3', text: 'Telescopes the sum to $\\frac{1}{2022} - \\frac{1}{8088}$.' },
            { code: 'A2', text: '$\\frac{1}{2696}$ in simplest form.' }
          ]
        },
        {
          label: '8',
          marks: 5,
          prompt: 'Find the value of\n$$3 - 5 + 12 - 19 + 26 - 33 + \\cdots - 215 + 222 - 229 + 236.$$',
          answer: '$122$',
          principle: 'Group consecutive pairs after the first term so each pair simplifies to a constant difference.',
          solution:
            'Keep the leading $3$ separate and group the remaining terms in pairs:\n$$3 + (-5 + 12) + (-19 + 26) + (-33 + 40) + \\cdots + (-215 + 222) + (-229 + 236).$$\nEach pair equals $+7$, and the numbers $5, 12, 19, \\dots, 236$ form an arithmetic sequence with common difference $7$.\nThe count of numbers from $5$ to $236$ is\n$$\\frac{236 - 5}{7} + 1 = \\frac{231}{7} + 1 = 33 + 1 = 34,$$\nwhich forms $\\frac{34}{2} = 17$ pairs. Therefore, the total value is\n$$3 + 17 \\times 7 = 3 + 119 = 122.$$',
          rubric: [
            { code: 'M3', text: 'Groups into $17$ pairs each equal to $7$ after the initial $3$.' },
            { code: 'A2', text: '$122$.' }
          ]
        },
        {
          label: '9',
          marks: 5,
          prompt: 'Find the value of\n$$5\\frac{1}{4} \\times 14 + 7\\frac{1}{6} \\times 5 + 2\\frac{1}{3} \\times 8.$$',
          answer: '$128$',
          principle: 'Separate each mixed number into its integer part and fractional part, distribute the multiplication, and add over a common denominator.',
          solution:
            'Split each mixed number into whole and fractional parts:\n$$\\begin{aligned}\n5\\frac{1}{4} \\times 14 + 7\\frac{1}{6} \\times 5 + 2\\frac{1}{3} \\times 8 &= \\left(5 \\times 14 + \\frac{14}{4}\\right) + \\left(7 \\times 5 + \\frac{5}{6}\\right) + \\left(2 \\times 8 + \\frac{8}{3}\\right) \\\\\n&= (70 + 35 + 16) + \\left(\\frac{7}{2} + \\frac{5}{6} + \\frac{8}{3}\\right) \\\\\n&= 121 + \\frac{21 + 5 + 16}{6} \\\\\n&= 121 + \\frac{42}{6} = 121 + 7 = 128.\n\\end{aligned}$$',
          rubric: [
            { code: 'M3', text: 'Evaluates the three products cleanly (e.g. $73\\frac{1}{2} + 35\\frac{5}{6} + 18\\frac{2}{3}$ or whole/fraction split $121 + \\frac{42}{6}$).' },
            { code: 'A2', text: '$128$.' }
          ]
        },
        {
          label: '10',
          marks: 5,
          prompt: 'Find the value of\n$$2020 \\times 1357 - 2021 \\times 1356.$$',
          answer: '$664$',
          principle: 'Rewrite adjacent integers ($1357 = 1356 + 1$ and $2021 = 2020 + 1$) to cancel the large product $2020 \\times 1356$.',
          solution:
            'Rewrite $1357 = 1356 + 1$ and $2021 = 2020 + 1$:\n$$\\begin{aligned}\n2020 \\times 1357 - 2021 \\times 1356 &= 2020 \\times (1356 + 1) - (2020 + 1) \\times 1356 \\\\\n&= (2020 \\times 1356 + 2020) - (2020 \\times 1356 + 1356) \\\\\n&= 2020 - 1356 = 664.\n\\end{aligned}$$',
          rubric: [
            { code: 'M3', text: 'Expands to cancel $2020 \\times 1356$, reducing to $2020 - 1356$.' },
            { code: 'A2', text: '$664$.' }
          ]
        },
        {
          label: '11',
          marks: 5,
          prompt: 'Find the value of\n$$3 + 8 + 13 + 18 + \\cdots + 188 + 193 + 198.$$',
          answer: '$4020$',
          principle: 'Use the arithmetic series formula: count the number of terms $n = \\frac{\\text{last} - \\text{first}}{d} + 1$, then multiply $n$ by the average of the first and last terms.',
          solution:
            'This is an arithmetic sequence with first term $a = 3$, common difference $d = 5$, and last term $l = 198$.\nThe number of terms is\n$$n = \\frac{198 - 3}{5} + 1 = \\frac{195}{5} + 1 = 39 + 1 = 40.$$\nBy pairing terms from both ends, the sum is\n$$\\frac{40 \\times (3 + 198)}{2} = 20 \\times 201 = 4020.$$',
          rubric: [
            { code: 'M3', text: 'Finds $n = 40$ terms and applies $\\frac{n(a+l)}{2}$.' },
            { code: 'A2', text: '$4020$.' }
          ]
        },
        {
          label: '12',
          marks: 5,
          prompt: 'Find the value of\n$$3 \\times 4 + 4 \\times 5 + 5 \\times 6 + \\cdots + 29 \\times 30 + 30 \\times 31 + 31 \\times 32.$$',
          answer: '$10904$',
          principle: 'Use the consecutive-product telescoping identity $k(k+1) = \\frac{k(k+1)(k+2) - (k-1)k(k+1)}{3}$.',
          solution:
            'Notice that for any integer $k$,\n$$k(k+1) = \\frac{k(k+1)(k+2) - (k-1)k(k+1)}{3}.$$\nSumming from $k = 3$ to $k = 31$, all intermediate terms telescope and cancel:\n$$\\begin{aligned}\n\\sum_{k=3}^{31} k(k+1) &= \\frac{31 \\times 32 \\times 33 - 2 \\times 3 \\times 4}{3} \\\\\n&= 31 \\times 32 \\times 11 - 2 \\times 4 \\\\\n&= 992 \\times 11 - 8 \\\\\n&= 10912 - 8 = 10904.\n\\end{aligned}$$',
          rubric: [
            { code: 'M3', text: 'Applies the sum formula $\\frac{31 \\times 32 \\times 33 - 2 \\times 3 \\times 4}{3}$ (or sums $\\sum k^2 + \\sum k$).' },
            { code: 'A2', text: '$10904$.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Number Theory',
      marks: 30,
      stem: 'Open-ended questions 13 to 18. Each correct answer scores 5 points.',
      parts: [
        {
          label: '13',
          marks: 5,
          prompt:
            'The remainder of dividing a positive integer $K$ by $33$ is $4$. Given that the remainder is not zero, what is the remainder of dividing $(4K - 8)$ by $8$?',
          answer: '$4$',
          principle: 'Reduce $4K - 8$ modulo $8$: any multiple of $4$ leaves remainder $0$ or $4$ upon division by $8$.',
          solution:
            'Since $K$ leaves remainder $4$ when divided by $33$, we can write $K = 33m + 4$ for some non-negative integer $m$.\nSubstitute this into $4K - 8$:\n$$4K - 8 = 4(33m + 4) - 8 = 132m + 8.$$\nNow divide $132m + 8$ by $8$:\n- $8$ is divisible by $8$.\n- $132 = 8 \\times 16 + 4$, so $132m = 8(16m) + 4m$.\n\nThus the remainder of $4K - 8$ modulo $8$ is the remainder of $4m$ modulo $8$, which is $0$ when $m$ is even and $4$ when $m$ is odd.\nBecause the problem states that the remainder is *not* zero, $m$ must be odd, and the remainder is $4$.',
          rubric: [
            { code: 'M3', text: 'Shows that $4K - 8 = 132m + 8 \\equiv 4m \\pmod{8}$, so the possible remainders are $0$ or $4$.' },
            { code: 'A2', text: 'Uses the non-zero remainder condition to conclude $4$.' }
          ]
        },
        {
          label: '14',
          marks: 5,
          prompt: 'If a $9$-digit number $\\overline{20221A345}$ is divisible by $7$ and $A < 7$, find the value of $A$.',
          answer: '$1$',
          principle: 'Apply the alternating $3$-digit-block divisibility test for $7$ (since $1001 = 7 \\times 11 \\times 13$) or reduce place values modulo $7$.',
          solution:
            'Break the $9$-digit number into $3$-digit blocks from right to left: $202$, $21A$, and $345$.\nBy the alternating-sum rule for $7$ (since $10^3 \\equiv -1 \\pmod{7}$),\n$$202 - (210 + A) + 345 = 337 - A$$\nmust be divisible by $7$.\nNow divide $337$ by $7$: $337 = 7 \\times 48 + 1$, so $337 \\equiv 1 \\pmod{7}$.\nTherefore, $1 - A \\equiv 0 \\pmod{7}$, and since $0 \\le A < 7$, we get $A = 1$.\nCheck: $202211345 \\div 7 = 28887335$.',
          rubric: [
            { code: 'M3', text: 'Reduces $\\overline{20221A345} \\equiv 337 - A \\equiv 1 - A \\pmod{7}$ (or tests digits $0$–$6$).' },
            { code: 'A2', text: '$A = 1$.' }
          ]
        },
        {
          label: '15',
          marks: 5,
          prompt:
            'Find the last digit of\n$$12 \\times 13 \\times 18 \\times 22 \\times 23 \\times 28 \\times 32 \\times 33 \\times 38 \\times 42 \\times 43 \\times 48.$$',
          answer: '$6$',
          principle: 'The units digit of a product depends only on the units digits of its factors (modulo $10$).',
          solution:
            'Keep only the last (units) digit of each factor:\n- $(12 \\times 13 \\times 18)$ ends in the same digit as $2 \\times 3 \\times 8 = 48$, which ends in $8$.\n- The same units digits $2, 3, 8$ repeat in the $20$s, $30$s, and $40$s, giving $4$ groups each ending in $8$.\n\nSo the overall product has the same last digit as $8^4$:\n$$8^2 = 64 \\equiv 4 \\pmod{10}, \\qquad 8^4 = (8^2)^2 \\equiv 4^2 = 16 \\equiv 6 \\pmod{10}.$$\nHence, the last digit is $6$.',
          rubric: [
            { code: 'M3', text: 'Reduces the product modulo $10$ to $(2 \\times 3 \\times 8)^4 \\equiv 8^4 \\pmod{10}$.' },
            { code: 'A2', text: 'Last digit $6$.' }
          ]
        },
        {
          label: '16',
          marks: 5,
          prompt: 'Find the number of all positive factors of $3600$.',
          answer: '$45$',
          principle: 'If $N = p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}$, the number of positive factors is $(a_1 + 1)(a_2 + 1)\\cdots(a_k + 1)$.',
          solution:
            'Find the prime factorization of $3600$:\n$$3600 = 36 \\times 100 = (2^2 \\times 3^2) \\times (2^2 \\times 5^2) = 2^4 \\times 3^2 \\times 5^2.$$\nUsing the divisor-counting formula, the number of positive factors is\n$$(4 + 1)(2 + 1)(2 + 1) = 5 \\times 3 \\times 3 = 45.$$',
          rubric: [
            { code: 'M3', text: 'Factorizes $3600 = 2^4 \\times 3^2 \\times 5^2$ and sets up $(4+1)(2+1)(2+1)$.' },
            { code: 'A2', text: '$45$ positive factors.' }
          ]
        },
        {
          label: '17',
          marks: 5,
          prompt: 'There are $3$ prime numbers. Their product is $124$. Find the maximum possible value of the sum of these $3$ numbers.',
          answer: '$35$',
          principle: 'By unique prime factorization, factor $124$ completely into primes to identify all possible triples.',
          solution:
            'Factorize $124$ into prime factors:\n$$124 = 2 \\times 62 = 2 \\times 2 \\times 31.$$\nNote that $31$ is prime, and $2$ is prime. By the Fundamental Theorem of Arithmetic, $2, 2, 31$ is the *only* multiset of $3$ prime numbers whose product is $124$.\nThus their sum is\n$$2 + 2 + 31 = 35.$$',
          rubric: [
            { code: 'M3', text: 'Finds the prime factorization $124 = 2 \\times 2 \\times 31$.' },
            { code: 'A2', text: 'Maximum sum $35$.' }
          ]
        },
        {
          label: '18',
          marks: 5,
          prompt: 'The sum of $10$ consecutive even numbers is $490$. Find the third smallest number.',
          answer: '$44$',
          principle: 'For an even number of consecutive even integers, the average sits halfway between the two middle numbers.',
          solution:
            'The average of the $10$ consecutive even numbers is\n$$\\frac{490}{10} = 49.$$\nSince $49$ lies exactly halfway between the $5$th and $6$th numbers, those two middle even numbers must be $48$ and $50$.\nCounting down in steps of $2$ from the $5$th number ($48$):\n- $4$th smallest: $46$\n- $3$rd smallest: $44$\n- $2$nd smallest: $42$\n- Smallest: $40$\n\n(Check: $40 + 42 + 44 + 46 + 48 + 50 + 52 + 54 + 56 + 58 = 490$.)\nHence, the third smallest number is $44$.',
          rubric: [
            { code: 'M3', text: 'Finds the average $49$, placing the two middle numbers at $48$ and $50$ (or solves $10x + 90 = 490$).' },
            { code: 'A2', text: 'Third smallest number $44$.' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Geometry',
      marks: 30,
      stem: 'Open-ended questions 19 to 24. Each correct answer scores 5 points.',
      parts: [
        {
          label: '19',
          marks: 5,
          prompt: 'How many rectangle(s) containing both $2$ "$*$" is/are there in the figure below?',
          figures: [
            {
              src: '/papers/timo-2021-2022-final-p6/fig-19.svg',
              alt: 'A 4-row by 6-column grid with one asterisk in row 2 column 5 and one asterisk in row 3 column 4.',
              caption: 'Grid of 4 rows by 6 columns with two cells marked by asterisks.'
            }
          ],
          answer: '$32$',
          principle: 'A grid rectangle is uniquely determined by choosing its top, bottom, left, and right boundary lines outside the required cells.',
          solution:
            'The grid has $4$ rows (horizontal lines $0$ to $4$ from top to bottom) and $6$ columns (vertical lines $0$ to $6$ from left to right).\nThe two "$*$" cells lie in row $2$, column $5$ and row $3$, column $4$.\nFor a rectangle to enclose *both* "$*$" cells, its four sides must satisfy:\n- **Top edge**: must be above row $2$ $\\implies$ $2$ choices (line $0$ or line $1$).\n- **Bottom edge**: must be below row $3$ $\\implies$ $2$ choices (line $3$ or line $4$).\n- **Left edge**: must be to the left of column $4$ $\\implies$ $4$ choices (lines $0, 1, 2,$ or $3$).\n- **Right edge**: must be to the right of column $5$ $\\implies$ $2$ choices (line $5$ or line $6$).\n\nMultiplying the independent choices gives\n$$2 \\times 2 \\times 4 \\times 2 = 32\\text{ rectangles}.$$',
          rubric: [
            { code: 'M3', text: 'Counts valid boundary choices: $2$ top $\\times$ $2$ bottom $\\times$ $4$ left $\\times$ $2$ right.' },
            { code: 'A2', text: '$32$ rectangles.' }
          ]
        },
        {
          label: '20',
          marks: 5,
          prompt:
            'If the radius of a circle is $7$, and the side length of a square is half of the circumference of the circle, find the perimeter of the square. (Answer in terms of $\\pi$.)',
          answer: '$28\\pi$',
          principle: 'Use $C = 2\\pi r$ for the circumference of a circle and $P = 4s$ for the perimeter of a square.',
          solution:
            'The circumference of a circle with radius $r = 7$ is\n$$C = 2\\pi r = 2\\pi \\times 7 = 14\\pi.$$\nThe side length of the square is half of this circumference:\n$$s = \\frac{14\\pi}{2} = 7\\pi.$$\nTherefore, the perimeter of the square is\n$$P = 4s = 4 \\times 7\\pi = 28\\pi.$$',
          rubric: [
            { code: 'M3', text: 'Finds circumference $14\\pi$ and square side length $7\\pi$.' },
            { code: 'A2', text: 'Perimeter $28\\pi$.' }
          ]
        },
        {
          label: '21',
          marks: 5,
          prompt: 'How many rectangle(s) is/are there in the figure below?',
          figures: [
            {
              src: '/papers/timo-2021-2022-final-p6/fig-21.svg',
              alt: 'An L-shaped grid formed by a 2-by-5 horizontal strip on top and a 2-by-2 extension below the rightmost two columns.',
              caption: 'L-shaped grid composed of 2 rows of 5 cells and 2 lower rows of 2 cells on the right.'
            }
          ],
          answer: '$66$',
          principle: 'Decompose the L-shape into two overlapping full rectangles and apply Inclusion–Exclusion, remembering that an $m \\times n$ grid has $\\binom{m+1}{2}\\binom{n+1}{2}$ rectangles.',
          solution:
            'Every rectangle inside the L-shaped figure lies completely inside either the top $2 \\times 5$ horizontal block or the right $4 \\times 2$ vertical block (no rectangle can extend simultaneously to the left columns and bottom rows).\n- Rectangles in the $2 \\times 5$ top block: $\\binom{3}{2} \\times \\binom{6}{2} = 3 \\times 15 = 45$.\n- Rectangles in the $4 \\times 2$ right block: $\\binom{5}{2} \\times \\binom{3}{2} = 10 \\times 3 = 30$.\n- Rectangles in their $2 \\times 2$ overlap (counted twice): $\\binom{3}{2} \\times \\binom{3}{2} = 3 \\times 3 = 9$.\n\nBy the Inclusion–Exclusion Principle, the total number of rectangles is\n$$45 + 30 - 9 = 66.$$',
          rubric: [
            { code: 'M3', text: 'Computes $45$ in the $2 \\times 5$ block, $30$ in the $4 \\times 2$ block, and subtracts the $9$ overlapping rectangles.' },
            { code: 'A2', text: '$66$ rectangles.' }
          ]
        },
        {
          label: '22',
          marks: 5,
          prompt: 'It is known that the lengths of the legs of a right-angled triangle are $33\\text{ cm}$ and $44\\text{ cm}$ respectively. Find the length of the hypotenuse.',
          answer: '$55\\text{ cm}$',
          principle: 'Apply the Pythagorean theorem $c = \\sqrt{a^2 + b^2}$, or recognize a scaled $3$-$4$-$5$ Pythagorean triple.',
          solution:
            'Notice that $33 = 11 \\times 3$ and $44 = 11 \\times 4$. Scaling the classic $3$-$4$-$5$ right triangle by $11$ gives hypotenuse $11 \\times 5 = 55\\text{ cm}$.\nDirectly by the Pythagorean theorem:\n$$c = \\sqrt{33^2 + 44^2} = \\sqrt{1089 + 1936} = \\sqrt{3025} = 55\\text{ cm}.$$',
          rubric: [
            { code: 'M3', text: 'Applies $c^2 = 33^2 + 44^2 = 3025$ or scales the $3$-$4$-$5$ triple by $11$.' },
            { code: 'A2', text: '$55\\text{ cm}$.' }
          ]
        },
        {
          label: '23',
          marks: 5,
          prompt: 'How many rectangle(s) not containing "$*$" is/are there in the figure below?',
          figures: [
            {
              src: '/papers/timo-2021-2022-final-p6/fig-23.svg',
              alt: 'A 5-row by 4-column grid containing a single asterisk in row 2 column 2.',
              caption: 'Grid of 5 rows by 4 columns with one cell marked by an asterisk.'
            }
          ],
          answer: '$102$',
          principle: 'Use complementary counting: subtract the number of rectangles containing the "$*$" cell from the total number of rectangles in the grid.',
          solution:
            'The grid has $5$ rows and $4$ columns.\nFirst, count all rectangles in the $5 \\times 4$ grid:\n$$\\binom{6}{2} \\times \\binom{5}{2} = 15 \\times 10 = 150.$$\nNext, count how many rectangles *contain* the "$*$" cell at row $2$, column $2$:\n- Top edge above row $2$: $2$ choices (lines $0, 1$).\n- Bottom edge below row $2$: $4$ choices (lines $2, 3, 4, 5$).\n- Left edge left of column $2$: $2$ choices (lines $0, 1$).\n- Right edge right of column $2$: $3$ choices (lines $2, 3, 4$).\n\nSo $2 \\times 4 \\times 2 \\times 3 = 48$ rectangles contain "$*$".\nSubtracting gives the number of rectangles *not* containing "$*$":\n$$150 - 48 = 102.$$',
          rubric: [
            { code: 'M3', text: 'Finds $150$ total rectangles and $48$ rectangles containing "$*$".' },
            { code: 'A2', text: '$102$ rectangles.' }
          ]
        },
        {
          label: '24',
          marks: 5,
          prompt:
            'The area of a rectangle is $1080$. If the sides of the rectangle are integers, how many different value(s) of the perimeter of this rectangle is/are there?',
          answer: '$16$',
          principle: 'Factor $1080$ into primes to count its unordered positive factor pairs $\\{a, b\\}$; by Vieta’s formulas, distinct unordered pairs with the same product have distinct sums $a + b$.',
          solution:
            'Let the integer side lengths be $a$ and $b$ with $ab = 1080$. First factorize $1080$:\n$$1080 = 10 \\times 108 = (2 \\times 5) \\times (2^2 \\times 3^3) = 2^3 \\times 3^3 \\times 5^1.$$\nThe total number of positive factors of $1080$ is\n$$(3 + 1)(3 + 1)(1 + 1) = 4 \\times 4 \\times 2 = 32.$$\nBecause $1080$ is not a perfect square, these $32$ divisors pair up into $\\frac{32}{2} = 16$ distinct unordered pairs $\\{a, b\\}$ with $a < b$ and $ab = 1080$.\nMoreover, two distinct pairs with the same product cannot have the same sum $a + b$ (since $a$ and $b$ are uniquely determined as the roots of $t^2 - (a+b)t + 1080 = 0$). Therefore, all $16$ pairs yield $16$ different perimeters $2(a + b)$.',
          rubric: [
            { code: 'M3', text: 'Finds $1080 = 2^3 \\times 3^3 \\times 5$ has $32$ factors, giving $16$ unordered side-length pairs.' },
            { code: 'A2', text: '$16$ different perimeter values.' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Combinatorics',
      marks: 30,
      stem: 'Open-ended questions 25 to 30. Each correct answer scores 5 points.',
      parts: [
        {
          label: '25',
          marks: 5,
          prompt: 'In how many possible way(s) can $15$ identical books be distributed to $4$ distinct boxes such that every box contains at least one book?',
          answer: '$364$',
          principle: 'Stars and Bars: distributing $n$ identical items into $k$ distinct non-empty boxes equals choosing $k - 1$ dividers from the $n - 1$ gaps between items.',
          solution:
            'Line up the $15$ identical books in a row. There are $15 - 1 = 14$ gaps between adjacent books.\nTo split them into $4$ non-empty groups for the $4$ distinct boxes, we choose $4 - 1 = 3$ of those $14$ gaps to place dividers:\n$$\\binom{14}{3} = \\frac{14 \\times 13 \\times 12}{3 \\times 2 \\times 1} = 14 \\times 13 \\times 2 = 364.$$',
          rubric: [
            { code: 'M3', text: 'Applies Stars and Bars to set up $\\binom{15-1}{4-1} = \\binom{14}{3}$.' },
            { code: 'A2', text: '$364$ ways.' }
          ]
        },
        {
          label: '26',
          marks: 5,
          prompt:
            'It is given that the total weight of $5$ watermelons and $5$ oranges is $2000\\text{ g}$. The weight of a watermelon is the same as that of $4$ oranges. What is the weight of $1$ watermelon?',
          answer: '$320\\text{ g}$',
          principle: 'Divide the total weight equation by $5$ to find the combined weight of $1$ watermelon and $1$ orange, then substitute the weight ratio.',
          solution:
            'Since $5$ watermelons and $5$ oranges weigh $2000\\text{ g}$, $1$ watermelon and $1$ orange together weigh\n$$\\frac{2000}{5} = 400\\text{ g}.$$\nBecause $1$ watermelon weighs the same as $4$ oranges, $1$ watermelon + $1$ orange equals $4 + 1 = 5$ oranges.\nThus $1$ orange weighs $\\frac{400}{5} = 80\\text{ g}$, and $1$ watermelon weighs\n$$4 \\times 80 = 320\\text{ g}.$$',
          rubric: [
            { code: 'M3', text: 'Finds $1\\text{ watermelon} + 1\\text{ orange} = 400\\text{ g}$, equal to $5$ oranges ($80\\text{ g}$ each).' },
            { code: 'A2', text: '$320\\text{ g}$.' }
          ]
        },
        {
          label: '27',
          marks: 5,
          prompt:
            'Numbers are drawn from the $120$ integers $651$ to $770$. At least how many number(s) has/have to be drawn to ensure that there are two numbers whose difference is $22$?',
          answer: '$67$',
          principle: 'Partition the $120$ integers into $22$ residue chains modulo $22$ (where consecutive elements differ by $22$) and find the maximum number of elements pickable with no adjacent pair.',
          solution:
            'Group the $120$ integers $651, 652, \\dots, 770$ by their remainder modulo $22$, forming $22$ sequences each increasing by $22$.\nSince $120 = 22 \\times 5 + 10$:\n- $10$ sequences have $6$ numbers (e.g., $651, 673, 695, 717, 739, 761$).\n- $12$ sequences have $5$ numbers (e.g., $661, 683, 705, 727, 749$).\n\nIn a chain of $6$ numbers, we can pick at most $3$ numbers without picking two adjacent ones (positions $1, 3, 5$). Similarly, in a chain of $5$ numbers, we can pick at most $3$ non-adjacent numbers (positions $1, 3, 5$).\nSo across all $22$ chains, at most $22 \\times 3 = 66$ numbers can be drawn without any pair differing by $22$.\nDrawing $1$ more guarantees a pair with difference $22$:\n$$66 + 1 = 67.$$',
          rubric: [
            { code: 'M3', text: 'Splits $120$ integers into $22$ chains of length $5$ or $6$, allowing at most $3$ picks per chain ($66$ total).' },
            { code: 'A2', text: '$67$ numbers.' }
          ]
        },
        {
          label: '28',
          marks: 5,
          prompt:
            '$4$ boys and $4$ girls queue in a row. If no boys can stand next to another boy and no girls can stand next to another girl, how many different arrangement(s) is/are there?',
          answer: '$1152$',
          principle: 'Equal numbers of boys and girls with neither group adjacent forces strict alternation (`BGBGBGBG` or `GBGBGBGB`), then permute within each group.',
          solution:
            'For no two boys to stand together and no two girls to stand together, the $4$ boys and $4$ girls must alternate along the queue. There are $2$ valid gender patterns:\n$$B\\,G\\,B\\,G\\,B\\,G\\,B\\,G \\qquad\\text{or}\\qquad G\\,B\\,G\\,B\\,G\\,B\\,G\\,B.$$\nFor each pattern, the $4$ boys can be arranged in $4! = 24$ ways and the $4$ girls can be arranged in $4! = 24$ ways.\nTherefore, the total number of arrangements is\n$$2 \\times 24 \\times 24 = 2 \\times 576 = 1152.$$',
          rubric: [
            { code: 'M3', text: 'Identifies the $2$ alternating patterns and computes $2 \\times 4! \\times 4!$.' },
            { code: 'A2', text: '$1152$ arrangements.' }
          ]
        },
        {
          label: '29',
          marks: 5,
          prompt:
            'A flight of stairs has $12$ steps. Andy can go up $1$ step, $2$ steps, or $3$ steps each time. The $5$th and $6$th steps cannot be stepped on as they are destroyed. How many way(s) is/are there for Andy to go up the stairs?',
          answer: '$91$',
          principle: 'Use the Tribonacci recurrence $w(n) = w(n-1) + w(n-2) + w(n-3)$ with $w(5) = w(6) = 0$.',
          solution:
            'Let $w(n)$ be the number of ways to reach step $n$, starting at $w(0) = 1$. Since Andy can climb $1, 2,$ or $3$ steps at a time and steps $5$ and $6$ are forbidden ($w(5) = w(6) = 0$):\n- $w(1) = w(0) = 1$\n- $w(2) = w(1) + w(0) = 1 + 1 = 2$\n- $w(3) = w(2) + w(1) + w(0) = 2 + 1 + 1 = 4$\n- $w(4) = w(3) + w(2) + w(1) = 4 + 2 + 1 = 7$\n- $w(5) = 0,\\quad w(6) = 0$\n- $w(7) = w(6) + w(5) + w(4) = 0 + 0 + 7 = 7$ (must jump $4 \\to 7$)\n- $w(8) = w(7) + w(6) + w(5) = 7 + 0 + 0 = 7$\n- $w(9) = w(8) + w(7) + w(6) = 7 + 7 + 0 = 14$\n- $w(10) = w(9) + w(8) + w(7) = 14 + 7 + 7 = 28$\n- $w(11) = w(10) + w(9) + w(8) = 28 + 14 + 7 = 49$\n- $w(12) = w(11) + w(10) + w(9) = 49 + 28 + 14 = 91$.',
          rubric: [
            { code: 'M3', text: 'Computes $w(4) = 7$, sets $w(5) = w(6) = 0$, and propagates the recurrence up to $w(12)$.' },
            { code: 'A2', text: '$91$ ways.' }
          ]
        },
        {
          label: '30',
          marks: 5,
          prompt: 'A fair die is thrown twice. Find the probability of getting at least one "$2$".',
          answer: '$\\frac{11}{36}$',
          principle: 'Use complementary probability: $P(\\text{at least one } 2) = 1 - P(\\text{no } 2\\text{ on either throw})$.',
          solution:
            'There are $6 \\times 6 = 36$ equally likely outcomes when throwing a fair $6$-sided die twice.\nOn each throw, there are $5$ outcomes that are *not* "$2$" ($1, 3, 4, 5, 6$), so the number of pairs with *no* "$2$" at all is $5 \\times 5 = 25$.\nSubtracting from all $36$ outcomes gives the number of favorable outcomes:\n$$36 - 25 = 11.$$\nThus, the probability of getting at least one "$2$" is $\\frac{11}{36}$.',
          rubric: [
            { code: 'M3', text: 'Finds $36$ total outcomes and $5 \\times 5 = 25$ outcomes with no "$2$".' },
            { code: 'A2', text: '$\\frac{11}{36}$.' }
          ]
        }
      ]
    }
  ]
};
