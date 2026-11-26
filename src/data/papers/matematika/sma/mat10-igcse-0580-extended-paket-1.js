/**
 * Paket Soal Terstruktur: Cambridge IGCSE Mathematics (0580) Extended Style — Paper 4 Practice
 * 10 structured multi-part questions (30 parts, 70 Marks total), strictly in English with M1/A1/B1 mark scheme.
 */
export default {
  id: 'mat10-igcse-0580-extended-p1',
  slug: 'mat10-igcse-0580-extended-paket-1',
  subject: 'matematika',
  grade: 10,
  track: 'cambridge-style',
  accessTier: 'free',
  topic: 'Cambridge IGCSE 0580 Extended Practice: algebra and quadratics, indices and surds, trigonometry and bearings, vectors, probability, and mensuration',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab3-vektor',
    'sma10-bab4-trigonometri',
    'sma10-bab6-fungsi-kuadrat'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'Cambridge IGCSE 0580',
  title: 'Cambridge IGCSE Mathematics (0580) Extended Style — Paper 4 Practice',
  totalMarks: 70,
  instructions:
    'Answer all 10 structured questions (70 Marks total). Show all working clearly; give non-exact numerical answers correct to 3 significant figures, and angles in degrees to 1 decimal place where appropriate.',
  source: {
    org: 'Tim Akademik Duta e-dukasi',
    file: 'original-curated-batch-10',
    license: 'Hak cipta materi kurasi asli Duta e-dukasi'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Indices, Surds & Algebraic Manipulation',
      marks: 7,
      stem: 'Simplify and manipulate the following algebraic expressions without a calculator.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Evaluate $27^{\\frac{2}{3}} \\times 16^{-\\frac{1}{4}}$, giving your answer as an exact fraction or decimal.',
          answer: '$\\frac{9}{2}$ ($4.5$)',
          principle: 'Apply rational exponent laws: $a^{p/q} = (\\sqrt[q]{a})^p$ and $a^{-k} = \\frac{1}{a^k}$.',
          solution: '$$27^{2/3} = (\\sqrt[3]{27})^2 = 3^2 = 9, \\qquad 16^{-1/4} = \\frac{1}{\\sqrt[4]{16}} = \\frac{1}{2}.$$\nMultiplying gives $9 \\times \\frac{1}{2} = \\frac{9}{2} = 4.5$.',
          rubric: [
            { code: 'M1', text: 'Evaluates $27^{2/3} = 9$ and $16^{-1/4} = \\frac{1}{2}$.' },
            { code: 'A1', text: 'Correct exact answer $\\frac{9}{2}$ or $4.5$.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'Expand and simplify $(3 + \\sqrt{5})^2$ in the form $a + b\\sqrt{5}$, where $a$ and $b$ are integers.',
          answer: '$14 + 6\\sqrt{5}$',
          principle: 'Use $(x + y)^2 = x^2 + 2xy + y^2$.',
          solution: '$$(3 + \\sqrt{5})^2 = 3^2 + 2(3)\\sqrt{5} + (\\sqrt{5})^2 = 9 + 6\\sqrt{5} + 5 = 14 + 6\\sqrt{5}.$$',
          rubric: [
            { code: 'M1', text: 'Expands correctly to $9 + 6\\sqrt{5} + 5$.' },
            { code: 'A1', text: 'Simplifies to $14 + 6\\sqrt{5}$.' }
          ]
        },
        {
          label: 'c',
          marks: 3,
          prompt: 'Make $x$ the subject of the formula $y = \\frac{3x + 2}{x - 4}$.',
          answer: '$x = \\frac{4y + 2}{y - 3}$',
          principle: 'Clear the fraction, collect all $x$ terms on one side, factor out $x$, and divide.',
          solution:
            '$$y(x - 4) = 3x + 2 \\implies xy - 4y = 3x + 2$$\n$$xy - 3x = 4y + 2 \\implies x(y - 3) = 4y + 2$$\n$$x = \\frac{4y + 2}{y - 3}.$$',
          rubric: [
            { code: 'M1', text: 'Multiplies both sides by $(x - 4)$ and expands $xy - 4y$.' },
            { code: 'M1', text: 'Collects $x$ terms and factorises $x(y - 3)$.' },
            { code: 'A1', text: 'Correct final subject $x = \\frac{4y + 2}{y - 3}$ (or equivalent).' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Quadratics, Inequalities & Algebraic Fractions',
      marks: 7,
      stem: 'Solve the following equations and express algebraic fractions in simplest form.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Solve $2x^2 - 7x - 15 = 0$ by factorisation.',
          answer: '$x = -1.5$ or $x = 5$',
          principle: 'Split the middle term using factors of $2 \\times (-15) = -30$ summing to $-7$ ($-10$ and $+3$).',
          solution:
            '$$2x^2 - 10x + 3x - 15 = 0 \\implies 2x(x - 5) + 3(x - 5) = 0 \\implies (2x + 3)(x - 5) = 0.$$\nHence $x = -\\frac{3}{2} = -1.5$ or $x = 5$.',
          rubric: [
            { code: 'M1', text: 'Factorises into $(2x + 3)(x - 5) = 0$.' },
            { code: 'A1', text: 'Finds $x = -1.5$ (or $-\\frac{3}{2}$).' },
            { code: 'A1', text: 'Finds $x = 5$.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'Write $\\frac{x^2 - 9}{x^2 + 5x + 6}$ as a single fraction in its simplest form.',
          answer: '$\\frac{x - 3}{x + 2}$',
          principle: 'Factorise both numerator (difference of squares) and denominator, then cancel the common factor.',
          solution: '$$\\frac{(x - 3)(x + 3)}{(x + 2)(x + 3)} = \\frac{x - 3}{x + 2}.$$',
          rubric: [
            { code: 'M1', text: 'Factorises numerator $(x-3)(x+3)$ and denominator $(x+2)(x+3)$.' },
            { code: 'A1', text: 'Cancels $(x+3)$ cleanly to $\\frac{x - 3}{x + 2}$.' }
          ]
        },
        {
          label: 'c',
          marks: 2,
          prompt: 'Solve the inequality $4(x - 1) > 7x - 19$ and state the greatest integer $x$ that satisfies it.',
          answer: '$x < 5$; greatest integer $x = 4$',
          principle: 'Expand brackets and reverse inequality sign if dividing by a negative number.',
          solution: '$$4x - 4 > 7x - 19 \\implies 15 > 3x \\implies x < 5.$$\nThe greatest integer satisfying $x < 5$ is $4$.',
          rubric: [
            { code: 'M1', text: 'Solves linear inequality correctly to obtain $x < 5$.' },
            { code: 'A1', text: 'States greatest integer $x = 4$.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Percentages, Ratio & Compound Interest',
      marks: 7,
      stem: 'Solve these financial and proportional reasoning problems.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'After a $15\\%$ discount, a laptop is sold for $\\text{USD } 680$. Calculate the original price before the discount.',
          answer: '$\\text{USD } 800$',
          principle: 'Reverse percentage: $\\text{USD } 680$ represents $85\\%$ ($0.85$) of the original price.',
          solution: '$$\\text{Original price} = \\frac{680}{0.85} = \\text{USD } 800.$$',
          rubric: [
            { code: 'M1', text: 'Divides $680$ by $0.85$ (recognising $85\\%$).' },
            { code: 'A1', text: 'Correct answer $\\text{USD } 800$.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'Ali, Ben, and Cara share $\\text{USD } 540$ in the ratio $2 : 3 : 4$. Calculate how much more Cara receives than Ali.',
          answer: '$\\text{USD } 120$',
          principle: 'Find the value of one ratio part ($540 \\div (2+3+4)$) and multiply by $(4 - 2)$.',
          solution: 'Total parts $= 2 + 3 + 4 = 9$, so $1$ part $= \\text{USD } 60$. Difference Cara $-$ Ali $= (4 - 2) \\times 60 = \\text{USD } 120$.',
          rubric: [
            { code: 'M1', text: 'Finds $1$ part $= \\frac{540}{9} = 60$.' },
            { code: 'A1', text: 'Finds difference $\\text{USD } 120$.' }
          ]
        },
        {
          label: 'c',
          marks: 3,
          prompt: 'An investor deposits $\\text{USD } 4000$ in a bank paying $4\\%$ per year compound interest. Calculate the total interest earned after $3$ years, correct to the nearest cent.',
          answer: '$\\text{USD } 499.46$',
          principle: 'Compound amount $A = P(1 + r)^n$, then subtract principal $P$.',
          solution:
            '$$A = 4000(1.04)^3 = 4000(1.124864) = \\text{USD } 4499.456.$$\nTotal interest $= 4499.456 - 4000 = \\text{USD } 499.46$.',
          rubric: [
            { code: 'M1', text: 'Uses $4000 \\times 1.04^3$.' },
            { code: 'M1', text: 'Subtracts $4000$ from the final balance.' },
            { code: 'A1', text: 'Correctly rounds interest to $\\text{USD } 499.46$.' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Functions, Inverse & Composite Functions',
      marks: 7,
      stem: 'Given $f(x) = 3x - 5$ and $g(x) = x^2 + 1$ for all real $x$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Find $f^{-1}(x)$.',
          answer: '$f^{-1}(x) = \\frac{x + 5}{3}$',
          principle: 'Set $y = 3x - 5$ and solve for $x$ in terms of $y$.',
          solution: '$$y = 3x - 5 \\implies 3x = y + 5 \\implies x = \\frac{y + 5}{3} \\implies f^{-1}(x) = \\frac{x + 5}{3}.$$',
          rubric: [
            { code: 'M1', text: 'Rearranges $y = 3x - 5$ correctly.' },
            { code: 'A1', text: 'States $f^{-1}(x) = \\frac{x + 5}{3}$.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'Find an expression for the composite function $gf(x)$ in expanded form.',
          answer: '$9x^2 - 30x + 26$',
          principle: 'Substitute $f(x)$ into $g$: $gf(x) = g(f(x)) = (3x - 5)^2 + 1$.',
          solution: '$$gf(x) = (3x - 5)^2 + 1 = 9x^2 - 30x + 25 + 1 = 9x^2 - 30x + 26.$$',
          rubric: [
            { code: 'M1', text: 'Substitutes $3x - 5$ into $g(x)$ as $(3x-5)^2 + 1$.' },
            { code: 'A1', text: 'Expands cleanly to $9x^2 - 30x + 26$.' }
          ]
        },
        {
          label: 'c',
          marks: 3,
          prompt: 'Solve the equation $fg(x) = f^{-1}(16)$, giving your answers in exact surd form.',
          answer: '$x = \\sqrt{3}$ or $x = -\\sqrt{3}$',
          principle: 'Evaluate $f^{-1}(16)$ numerically and solve $3(x^2 + 1) - 5 = 7$.',
          solution:
            'First evaluate $f^{-1}(16) = \\frac{16 + 5}{3} = 7$, and form $fg(x) = 3(x^2 + 1) - 5 = 3x^2 - 2$.\n$$3x^2 - 2 = 7 \\implies 3x^2 = 9 \\implies x^2 = 3 \\implies x = \\pm\\sqrt{3}.$$',
          rubric: [
            { code: 'M1', text: 'Evaluates $f^{-1}(16) = 7$ and writes $fg(x) = 3(x^2 + 1) - 5$.' },
            { code: 'M1', text: 'Simplifies to $3x^2 = 9 \\implies x^2 = 3$.' },
            { code: 'A1', text: 'Gives both roots $x = \\sqrt{3}$ and $x = -\\sqrt{3}$ (or $\\pm 1.73$).' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Circle Theorems & Angle Reasoning',
      marks: 7,
      stem: 'In a circle with centre $O$, chord $AB$ subtends $\\angle AOB = 104^\\circ$ at the centre. Point $C$ lies on the major arc $AB$, and point $D$ lies on the minor arc $AB$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Find $\\angle ACB$.',
          answer: '$52^\\circ$',
          principle: 'Angle at the centre is twice the angle at the circumference subtended by the same arc.',
          solution: '$$\\angle ACB = \\frac{1}{2}\\angle AOB = \\frac{1}{2}(104^\\circ) = 52^\\circ.$$',
          rubric: [
            { code: 'M1', text: 'Applies angle at centre = $2 \\times$ angle at circumference.' },
            { code: 'A1', text: 'Correct answer $52^\\circ$.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'Using cyclic quadrilateral $ACBD$, find $\\angle ADB$.',
          answer: '$128^\\circ$',
          principle: 'Opposite angles in a cyclic quadrilateral sum to $180^\\circ$.',
          solution: '$$\\angle ADB = 180^\\circ - \\angle ACB = 180^\\circ - 52^\\circ = 128^\\circ.$$',
          rubric: [
            { code: 'M1', text: 'Uses opposite angles of cyclic quadrilateral sum to $180^\\circ$.' },
            { code: 'A1', text: 'Correct answer $128^\\circ$.' }
          ]
        },
        {
          label: 'c',
          marks: 3,
          prompt: 'Line $AT$ is the tangent to the circle at $A$. Calculate the acute angle between tangent $AT$ and chord $AB$.',
          answer: '$52^\\circ$',
          principle: 'Radius $OA$ is perpendicular to tangent $AT$ ($90^\\circ$), while $\\triangle OAB$ is isosceles ($OA = OB$).',
          solution:
            'In isosceles $\\triangle OAB$ ($OA = OB$), $\\angle OAB = \\frac{180^\\circ - 104^\\circ}{2} = 38^\\circ$.\nSince radius $OA \\perp$ tangent $AT$, $\\angle OAT = 90^\\circ$.\nThus the acute angle between tangent $AT$ and chord $AB$ is $90^\\circ - 38^\\circ = 52^\\circ$ (matching $\\angle ACB = 52^\\circ$ by the Alternate Segment Theorem).',
          rubric: [
            { code: 'M1', text: 'Finds $\\angle OAB = 38^\\circ$ using isosceles $\\triangle OAB$.' },
            { code: 'M1', text: 'Uses radius perpendicular to tangent ($\\angle OAT = 90^\\circ$).' },
            { code: 'A1', text: 'Obtains $52^\\circ$.' }
          ]
        }
      ]
    },
    {
      no: 6,
      title: 'Trigonometry: Sine & Cosine Rules',
      marks: 7,
      stem: 'In triangle $PQR$, $PQ = 7\\ \\text{cm}$, $QR = 8\\ \\text{cm}$, and $\\angle PQR = 60^\\circ$.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: 'Use the cosine rule to calculate the length of $PR$, giving both the exact surd form and the value correct to 3 significant figures.',
          answer: '$\\sqrt{57}\\ \\text{cm} \\approx 7.55\\ \\text{cm}$',
          principle: 'Cosine rule: $b^2 = a^2 + c^2 - 2ac\\cos B$.',
          solution:
            '$$PR^2 = 7^2 + 8^2 - 2(7)(8)\\cos 60^\\circ = 49 + 64 - 112(0.5) = 113 - 56 = 57.$$\nThus $PR = \\sqrt{57}\\ \\text{cm} \\approx 7.55\\ \\text{cm}$.',
          rubric: [
            { code: 'M1', text: 'Substitutes correctly into the cosine rule formula.' },
            { code: 'M1', text: 'Evaluates $PR^2 = 57$.' },
            { code: 'A1', text: 'Finds $PR = \\sqrt{57} \\approx 7.55\\ \\text{cm}$.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'Calculate the area of triangle $PQR$ correct to 3 significant figures.',
          answer: '$14\\sqrt{3}\\ \\text{cm}^2 \\approx 24.2\\ \\text{cm}^2$',
          principle: 'Area of triangle $= \\frac{1}{2}ac\\sin B$.',
          solution: '$$\\text{Area} = \\frac{1}{2}(7)(8)\\sin 60^\\circ = 28 \\times \\frac{\\sqrt{3}}{2} = 14\\sqrt{3} \\approx 24.2\\ \\text{cm}^2.$$',
          rubric: [
            { code: 'M1', text: 'Applies $\\frac{1}{2}(7)(8)\\sin 60^\\circ$.' },
            { code: 'A1', text: 'Correctly computes $14\\sqrt{3} \\approx 24.2\\ \\text{cm}^2$.' }
          ]
        },
        {
          label: 'c',
          marks: 2,
          prompt: 'Calculate $\\angle QPR$ correct to 1 decimal place.',
          answer: '$66.6^\\circ$',
          principle: 'Apply the sine rule: $\\frac{\\sin P}{QR} = \\frac{\\sin Q}{PR}$.',
          solution: '$$\\sin(\\angle QPR) = \\frac{8\\sin 60^\\circ}{\\sqrt{57}} = \\frac{4\\sqrt{3}}{\\sqrt{57}} \\approx 0.91766 \\implies \\angle QPR \\approx 66.6^\\circ.$$',
          rubric: [
            { code: 'M1', text: 'Sets up sine rule $\\frac{\\sin P}{8} = \\frac{\\sin 60^\\circ}{\\sqrt{57}}$.' },
            { code: 'A1', text: 'Calculates $66.6^\\circ$ correct to 1 d.p.' }
          ]
        }
      ]
    },
    {
      no: 7,
      title: 'Mensuration: Sector, Cone & Cylinder',
      marks: 7,
      stem: 'A sector of a circle has radius $12\\ \\text{cm}$ and sector angle $150^\\circ$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Calculate the arc length of the sector in terms of $\\pi$.',
          answer: '$10\\pi\\ \\text{cm}$',
          principle: 'Arc length $l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$.',
          solution: '$$l = \\frac{150}{360} \\times 2\\pi(12) = \\frac{5}{12} \\times 24\\pi = 10\\pi\\ \\text{cm}.$$',
          rubric: [
            { code: 'M1', text: 'Uses $\\frac{150}{360} \\times 2\\pi(12)$.' },
            { code: 'A1', text: 'Simplifies to $10\\pi\\ \\text{cm}$.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'The sector is rolled up so its two straight edges meet to form an open cone. Show that the base radius $r$ of the cone is $5\\ \\text{cm}$.',
          answer: '$r = 5\\ \\text{cm}$',
          principle: 'The arc length of the sector becomes the circumference $2\\pi r$ of the circular base.',
          solution: '$$2\\pi r = 10\\pi \\implies r = \\frac{10\\pi}{2\\pi} = 5\\ \\text{cm}.$$',
          rubric: [
            { code: 'M1', text: 'Equates base circumference $2\\pi r$ to $10\\pi$.' },
            { code: 'A1', text: 'Solves cleanly to $r = 5\\ \\text{cm}$.' }
          ]
        },
        {
          label: 'c',
          marks: 3,
          prompt: 'Calculate the exact volume of the cone formed in terms of $\\pi$ and surds.',
          answer: '$\\frac{25\\sqrt{119}}{3}\\pi\\ \\text{cm}^3$ ($\\approx 285.5\\ \\text{cm}^3$)',
          principle: 'Slant height equals sector radius $12\\ \\text{cm}$; find perpendicular height via Pythagoras $h = \\sqrt{12^2 - 5^2}$ then $V = \\frac{1}{3}\\pi r^2 h$.',
          solution:
            'Height $h = \\sqrt{12^2 - 5^2} = \\sqrt{144 - 25} = \\sqrt{119}\\ \\text{cm}$.\n$$V = \\frac{1}{3}\\pi(5)^2\\sqrt{119} = \\frac{25\\sqrt{119}}{3}\\pi\\ \\text{cm}^3 \\approx 285.5\\ \\text{cm}^3.$$',
          rubric: [
            { code: 'M1', text: 'Finds cone vertical height $h = \\sqrt{12^2 - 5^2} = \\sqrt{119}$.' },
            { code: 'M1', text: 'Substitutes into $V = \\frac{1}{3}\\pi r^2 h$.' },
            { code: 'A1', text: 'Correct answer $\\frac{25\\sqrt{119}}{3}\\pi$ (or $285.5\\ \\text{cm}^3$).' }
          ]
        }
      ]
    },
    {
      no: 8,
      title: 'Vectors & Magnitude',
      marks: 7,
      stem: 'Given column vectors $\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} -1 \\\\ 5 \\end{pmatrix}$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Write $2\\mathbf{a} - \\mathbf{b}$ as a column vector.',
          answer: '$\\begin{pmatrix} 7 \\\\ -9 \\end{pmatrix}$',
          principle: 'Multiply components by scalar first, then subtract component-wise.',
          solution: '$$2\\mathbf{a} - \\mathbf{b} = \\begin{pmatrix} 6 \\\\ -4 \\end{pmatrix} - \\begin{pmatrix} -1 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ -9 \\end{pmatrix}.$$',
          rubric: [
            { code: 'M1', text: 'Computes $2\\mathbf{a} = \\begin{pmatrix} 6 \\\\ -4 \\end{pmatrix}$.' },
            { code: 'A1', text: 'Subtracts to get $\\begin{pmatrix} 7 \\\\ -9 \\end{pmatrix}$.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'Calculate the exact magnitude $|\\mathbf{a} + \\mathbf{b}|$.',
          answer: '$\\sqrt{13}$ ($\\approx 3.61$)',
          principle: 'Magnitude of $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ is $\\sqrt{x^2 + y^2}$.',
          solution: '$\\mathbf{a} + \\mathbf{b} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$, so $|\\mathbf{a} + \\mathbf{b}| = \\sqrt{2^2 + 3^2} = \\sqrt{13}$.',
          rubric: [
            { code: 'M1', text: 'Finds sum vector $\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ and applies Pythagoras.' },
            { code: 'A1', text: 'States $\\sqrt{13}$ (or $3.61$).' }
          ]
        },
        {
          label: 'c',
          marks: 3,
          prompt: 'In triangle $OXY$, $\\overrightarrow{OX} = \\mathbf{p}$, $\\overrightarrow{OY} = \\mathbf{q}$, and $M$ is the midpoint of $XY$. Point $K$ lies on $OM$ such that $OK : KM = 2 : 1$. Express $\\overrightarrow{OK}$ in terms of $\\mathbf{p}$ and $\\mathbf{q}$.',
          answer: '$\\frac{1}{3}(\\mathbf{p} + \\mathbf{q})$',
          principle: 'Find $\\overrightarrow{OM} = \\frac{1}{2}(\\mathbf{p} + \\mathbf{q})$ first, then take $\\frac{2}{3}\\overrightarrow{OM}$.',
          solution:
            '$\\overrightarrow{XY} = \\mathbf{q} - \\mathbf{p}$, so $\\overrightarrow{OM} = \\mathbf{p} + \\frac{1}{2}(\\mathbf{q} - \\mathbf{p}) = \\frac{1}{2}(\\mathbf{p} + \\mathbf{q})$.\nTherefore $\\overrightarrow{OK} = \\frac{2}{3}\\overrightarrow{OM} = \\frac{1}{3}(\\mathbf{p} + \\mathbf{q})$.',
          rubric: [
            { code: 'M1', text: 'Finds $\\overrightarrow{OM} = \\frac{1}{2}(\\mathbf{p} + \\mathbf{q})$.' },
            { code: 'M1', text: 'Uses ratio $\\overrightarrow{OK} = \\frac{2}{3}\\overrightarrow{OM}$.' },
            { code: 'A1', text: 'Simplifies to $\\frac{1}{3}(\\mathbf{p} + \\mathbf{q})$.' }
          ]
        }
      ]
    },
    {
      no: 9,
      title: 'Probability Without Replacement',
      marks: 7,
      stem: 'A bag contains $5$ red counters and $3$ blue counters. Two counters are drawn at random one after another without replacement.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Calculate the probability that both counters drawn are red.',
          answer: '$\\frac{5}{14}$',
          principle: 'Multiply conditional probabilities along the Red–Red branch ($8$ counters then $7$).',
          solution: '$$P(\\text{RR}) = \\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}.$$',
          rubric: [
            { code: 'M1', text: 'Writes product $\\frac{5}{8} \\times \\frac{4}{7}$.' },
            { code: 'A1', text: 'Simplifies fraction to $\\frac{5}{14}$.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'Calculate the probability that the two counters are of different colours.',
          answer: '$\\frac{15}{28}$',
          principle: 'Sum the two mutually exclusive outcomes: Red then Blue, or Blue then Red.',
          solution: '$$P(\\text{different}) = \\frac{5}{8}\\cdot\\frac{3}{7} + \\frac{3}{8}\\cdot\\frac{5}{7} = \\frac{15 + 15}{56} = \\frac{30}{56} = \\frac{15}{28}.$$',
          rubric: [
            { code: 'M1', text: 'Adds $P(\\text{RB}) + P(\\text{BR})$ with denominator $7$ on the second draw.' },
            { code: 'A1', text: 'Simplifies to $\\frac{15}{28}$.' }
          ]
        },
        {
          label: 'c',
          marks: 3,
          prompt: 'Calculate the probability that at least one counter drawn is red.',
          answer: '$\\frac{25}{28}$',
          principle: 'Use the complement: $1 - P(\\text{both blue})$.',
          solution:
            '$$P(\\text{BB}) = \\frac{3}{8} \\times \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28}.$$\n$$P(\\text{at least one red}) = 1 - \\frac{3}{28} = \\frac{25}{28}.$$',
          rubric: [
            { code: 'M1', text: 'Identifies complement $1 - P(\\text{BB})$ (or sums $\\text{RR}+\\text{RB}+\\text{BR}$).' },
            { code: 'M1', text: 'Computes $P(\\text{BB}) = \\frac{3}{28}$.' },
            { code: 'A1', text: 'Finds $\\frac{25}{28}$.' }
          ]
        }
      ]
    },
    {
      no: 10,
      title: 'Grouped Data Statistics',
      marks: 7,
      stem: 'The heights $h$ (in cm) of $40$ seedlings are summarised in four class intervals: $10 \\le h < 20$ ($6$ plants), $20 \\le h < 30$ ($14$ plants), $30 \\le h < 40$ ($12$ plants), and $40 \\le h < 50$ ($8$ plants).',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'State the modal class and the class interval containing the median height.',
          answer: 'Modal class $20 \\le h < 30$; median class $20 \\le h < 30$.',
          principle: 'Modal class has the highest frequency; median of $40$ values lies between the 20th and 21st observations (cumulative frequencies $6, 20, 32, 40$).',
          solution:
            'Highest frequency is $14$ in $20 \\le h < 30$ (modal class). Cumulative frequencies are $6$ ($<20$), $20$ ($<30$), $32$ ($<40$), $40$ ($<50$), so the 20th plant falls in $20 \\le h < 30$ (median class $20 \\le h < 30$).',
          rubric: [
            { code: 'B1', text: 'States modal class $20 \\le h < 30$.' },
            { code: 'B1', text: 'States median class $20 \\le h < 30$ (cumulative frequency $20$ reaches halfway).' }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt: 'Calculate an estimate of the mean height of the $40$ seedlings.',
          answer: '$30.5\\ \\text{cm}$',
          principle: 'Use class midpoints $15, 25, 35, 45$ in $\\bar{h} = \\frac{\\sum f \\cdot x_{\\text{mid}}}{\\sum f}$.',
          solution:
            '$$\\sum f x = 6(15) + 14(25) + 12(35) + 8(45) = 90 + 350 + 420 + 360 = 1220.$$\n$$\\bar{h} = \\frac{1220}{40} = 30.5\\ \\text{cm}.$$',
          rubric: [
            { code: 'M1', text: 'Uses midpoints $15, 25, 35, 45$ multiplied by frequencies.' },
            { code: 'M1', text: 'Sums to $1220$ and divides by $40$.' },
            { code: 'A1', text: 'Finds exact estimate $30.5\\ \\text{cm}$.' }
          ]
        },
        {
          label: 'c',
          marks: 2,
          prompt: 'Ten additional seedlings are measured and the new combined mean height for all $50$ seedlings becomes $31.7\\ \\text{cm}$. Find the mean height of the $10$ additional seedlings.',
          answer: '$36.5\\ \\text{cm}$',
          principle: 'Subtract the original total height ($1220\\ \\text{cm}$) from the new total height for $50$ seedlings, then divide by $10$.',
          solution:
            'New total $= 50 \\times 31.7 = 1585\\ \\text{cm}$.\nOriginal total $= 1220\\ \\text{cm}$.\nSum of the $10$ additional seedlings $= 1585 - 1220 = 365\\ \\text{cm}$, so their mean height is $\\frac{365}{10} = 36.5\\ \\text{cm}$.',
          rubric: [
            { code: 'M1', text: 'Computes $50 \\times 31.7 - 1220 = 365$.' },
            { code: 'A1', text: 'Divides by $10$ to get $36.5\\ \\text{cm}$.' }
          ]
        }
      ]
    }
  ]
};
