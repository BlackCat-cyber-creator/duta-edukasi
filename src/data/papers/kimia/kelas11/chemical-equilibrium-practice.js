/**
 * Structured Practice Paper: Chemistry Grade 11 – Chemical Equilibrium Practice
 * Source: chem_equilibrium_ch5.pdf (Duta e-dukasi).
 * Original English language preserved as in the source document.
 */
export default {
  id: 'kim11-chemical-equilibrium',
  slug: 'chemical-equilibrium-practice',
  subject: 'kimia',
  grade: 11,
  track: 'cambridge-style',
  topic: 'Chemical Equilibrium',
  relatedChapterIds: ['kimia11-bab4-kesetimbangan-kimia'],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'Kimia SMA',
  title: 'Chemistry Grade 11 – Chemical Equilibrium Practice',
  totalMarks: 61,
  instructions:
    'Answer all 12 structured questions (covering Parts I–III of the source worksheet) with clear step-by-step derivations and appropriate units. Use the ideal gas constant $R = 0.082\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$ unless stated otherwise. Note: degree symbols from PDF extraction ($27^\\circ\\text{C}$, $127^\\circ\\text{C}$, $35^\\circ\\text{C}$) have been restored, and source equation/sign notes are explicitly addressed in Questions 9 and 10.',
  source: {
    org: 'Duta e-dukasi',
    file: 'chem_equilibrium_ch5.pdf',
    license: 'CC BY 4.0'
  },
  status: 'published',
  accessTier: 'free',
  questions: [
    {
      no: 1,
      title: 'Irreversible vs. Reversible Reactions',
      marks: 6,
      stem: 'Compare the fundamental characteristics of irreversible and reversible chemical reactions.',
      parts: [
        {
          label: 'a',
          marks: 6,
          prompt:
            'Write down 6 fundamental differences between an irreversible reaction and a reversible reaction in a comparison table.',
          answer:
            'Irreversible reactions proceed in one direction until at least one reactant is exhausted (usually in open systems) and do not establish dynamic equilibrium; reversible reactions proceed in both forward and reverse directions simultaneously, neither reactant is completely consumed, and they reach dynamic equilibrium in closed systems.',
          principle:
            'In an irreversible reaction ($\\longrightarrow$), products do not re-form reactants under the same conditions, whereas in a reversible reaction ($\\rightleftharpoons$), forward and reverse processes occur concurrently until their rates become equal.',
          solution:
            'Six fundamental differences between irreversible and reversible reactions are summarized below:\n\n| No. | Irreversible Reaction | Reversible Reaction |\n| :---: | :--- | :--- |\n| 1 | Proceeds in one direction only (from reactants to products, written with $\\longrightarrow$). | Proceeds in two directions simultaneously: forward and reverse (written with $\\rightleftharpoons$). |\n| 2 | Stops once the limiting reactant is completely consumed. | Continues indefinitely at the microscopic level; reactants are never completely exhausted. |\n| 3 | Products cannot readily react back to regenerate the original reactants under the same conditions. | Products can react with each other to re-form the original reactants under the same conditions. |\n| 4 | Commonly occurs in an open system (for example, when a gas escapes or a precipitate forms). | Requires a closed system so that no matter enters or leaves the reaction mixture. |\n| 5 | Does not achieve a state of chemical equilibrium. | Establishes a dynamic equilibrium when the forward rate equals the reverse rate ($v_{\\text{forward}} = v_{\\text{reverse}}$). |\n| 6 | Macroscopic concentrations change until reaction completion; product yield is governed solely by stoichiometry. | Macroscopic concentrations remain constant at equilibrium and are governed by the equilibrium constant ($K_c$ or $K_p$). |',
          rubric: [
            { code: 'B1', text: 'States reaction direction difference (one-way $\\longrightarrow$ vs. two-way $\\rightleftharpoons$)' },
            { code: 'B1', text: 'States reactant consumption difference (limiting reactant exhausted vs. reactants remain)' },
            { code: 'B1', text: 'States product reversibility difference (cannot vs. can re-form reactants)' },
            { code: 'B1', text: 'States system condition difference (open system possible vs. closed system required)' },
            { code: 'B1', text: 'States equilibrium attainment difference (no equilibrium vs. dynamic equilibrium when $v_f = v_r$)' },
            { code: 'B1', text: 'States concentration/yield behavior (stops at completion vs. constant macroscopic concentrations governed by $K$)' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Equilibrium Constant Expressions ($K_c$, $K_p$), Units, and Phase Classification',
      marks: 9,
      stem: 'For each of the following equilibrium reactions, determine whether the equilibrium is homogeneous or heterogeneous, and write the expressions and units for $K_c$ (with concentration in $\\text{M} = \\text{mol}\\cdot\\text{L}^{-1}$) and $K_p$ (with partial pressure in $\\text{atm}$).',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt: '$\\text{CO}(g) + 2\\text{H}_2(g) \\rightleftharpoons \\text{CH}_3\\text{OH}(aq)$',
          answer:
            'Heterogeneous; $K_c = \\frac{[\\text{CH}_3\\text{OH}]}{[\\text{CO}][\\text{H}_2]^2}$ (unit: $\\text{M}^{-2}$ or $\\text{L}^2\\cdot\\text{mol}^{-2}$); $K_p = \\frac{1}{P_{\\text{CO}} P_{\\text{H}_2}^2}$ (unit: $\\text{atm}^{-3}$)',
          principle:
            'Homogeneous equilibria involve only one phase, whereas heterogeneous equilibria involve two or more phases. Only gases ($g$) and aqueous solutes ($aq$) appear in $K_c$, while only gaseous species ($g$) appear in $K_p$ (pure solids, pure liquids, and aqueous species are omitted from $K_p$).',
          solution:
            '1. **Phase classification**: Reactants are gases ($g$) and the product is aqueous ($aq$), so more than one phase is present $\\implies$ **Heterogeneous equilibrium**.\n\n2. **$K_c$ expression and unit**: Both $(g)$ and $(aq)$ species are included in $K_c$:\n$$K_c = \\frac{[\\text{CH}_3\\text{OH}]}{[\\text{CO}][\\text{H}_2]^2}$$\nUnit of $K_c$: $\\frac{\\text{M}}{\\text{M} \\cdot \\text{M}^2} = \\text{M}^{-2}$ (or $\\text{L}^2\\cdot\\text{mol}^{-2}$).\n\n3. **$K_p$ expression and unit**: Only gaseous species appear in $K_p$; $\\text{CH}_3\\text{OH}(aq)$ is not a gas and is excluded:\n$$K_p = \\frac{1}{P_{\\text{CO}} \\cdot P_{\\text{H}_2}^2}$$\nUnit of $K_p$: $\\frac{1}{\\text{atm} \\cdot \\text{atm}^2} = \\text{atm}^{-3}$.',
          rubric: [
            { code: 'B1', text: 'Classifies the equilibrium correctly as heterogeneous' },
            { code: 'A1', text: 'Writes $K_c = \\frac{[\\text{CH}_3\\text{OH}]}{[\\text{CO}][\\text{H}_2]^2}$ with unit $\\text{M}^{-2}$' },
            { code: 'A1', text: 'Writes $K_p = \\frac{1}{P_{\\text{CO}} P_{\\text{H}_2}^2}$ with unit $\\text{atm}^{-3}$' }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt: '$2\\text{NO}(g) \\rightleftharpoons \\text{N}_2(g) + \\text{O}_2(g)$',
          answer:
            'Homogeneous; $K_c = \\frac{[\\text{N}_2][\\text{O}_2]}{[\\text{NO}]^2}$ (dimensionless / no unit); $K_p = \\frac{P_{\\text{N}_2} P_{\\text{O}_2}}{P_{\\text{NO}}^2}$ (dimensionless / no unit)',
          principle:
            'When all reactants and products are in the gas phase, the system is homogeneous and every species appears in both $K_c$ and $K_p$. If $\\Delta n_{\\text{gas}} = 0$, both $K_c$ and $K_p$ are dimensionless.',
          solution:
            '1. **Phase classification**: All reactants and products are gases ($g$) $\\implies$ **Homogeneous equilibrium**.\n\n2. **$K_c$ expression and unit**:\n$$K_c = \\frac{[\\text{N}_2][\\text{O}_2]}{[\\text{NO}]^2}$$\nUnit of $K_c$: $\\frac{\\text{M} \\cdot \\text{M}}{\\text{M}^2} = 1$ (dimensionless / no unit).\n\n3. **$K_p$ expression and unit**:\n$$K_p = \\frac{P_{\\text{N}_2} \\cdot P_{\\text{O}_2}}{P_{\\text{NO}}^2}$$\nUnit of $K_p$: $\\frac{\\text{atm} \\cdot \\text{atm}}{\\text{atm}^2} = 1$ (dimensionless / no unit).',
          rubric: [
            { code: 'B1', text: 'Classifies the equilibrium correctly as homogeneous' },
            { code: 'A1', text: 'Writes $K_c = \\frac{[\\text{N}_2][\\text{O}_2]}{[\\text{NO}]^2}$ and identifies it as dimensionless' },
            { code: 'A1', text: 'Writes $K_p = \\frac{P_{\\text{N}_2} P_{\\text{O}_2}}{P_{\\text{NO}}^2}$ and identifies it as dimensionless' }
          ]
        },
        {
          label: 'c',
          marks: 3,
          prompt: '$3\\text{Fe}(s) + 4\\text{CO}_2(g) \\rightleftharpoons \\text{Fe}_3\\text{O}_4(s) + 4\\text{CO}(g)$',
          answer:
            'Heterogeneous; $K_c = \\frac{[\\text{CO}]^4}{[\\text{CO}_2]^4}$ (dimensionless / no unit); $K_p = \\frac{P_{\\text{CO}}^4}{P_{\\text{CO}_2}^4}$ (dimensionless / no unit)',
          principle:
            'Pure solids ($s$) have constant molar density (unit activity) and are omitted from both $K_c$ and $K_p$. Only gaseous species enter the equilibrium expressions.',
          solution:
            '1. **Phase classification**: Both solid ($s$) and gas ($g$) phases are present $\\implies$ **Heterogeneous equilibrium**.\n\n2. **$K_c$ expression and unit**: Pure solids $\\text{Fe}(s)$ and $\\text{Fe}_3\\text{O}_4(s)$ are omitted:\n$$K_c = \\frac{[\\text{CO}]^4}{[\\text{CO}_2]^4}$$\nUnit of $K_c$: $\\frac{\\text{M}^4}{\\text{M}^4} = 1$ (dimensionless / no unit).\n\n3. **$K_p$ expression and unit**:\n$$K_p = \\frac{P_{\\text{CO}}^4}{P_{\\text{CO}_2}^4}$$\nUnit of $K_p$: $\\frac{\\text{atm}^4}{\\text{atm}^4} = 1$ (dimensionless / no unit).',
          rubric: [
            { code: 'B1', text: 'Classifies the equilibrium correctly as heterogeneous' },
            { code: 'A1', text: 'Writes $K_c = \\frac{[\\text{CO}]^4}{[\\text{CO}_2]^4}$ (omitting solids) and identifies it as dimensionless' },
            { code: 'A1', text: 'Writes $K_p = \\frac{P_{\\text{CO}}^4}{P_{\\text{CO}_2}^4}$ (omitting solids) and identifies it as dimensionless' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Manipulating $K_c$ for Modified Equilibrium Equations',
      marks: 4,
      stem: 'Given the chemical equilibrium:\n$$2\\text{S}(s) + 3\\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g) \\qquad K_c = 0.36$$\nDetermine the value of $K_c$ for each of the following reactions at the same temperature.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: '$2\\text{SO}_3(g) \\rightleftharpoons 2\\text{S}(s) + 3\\text{O}_2(g)$',
          answer: '$K_c = \\frac{25}{9} \\approx 2.78$',
          principle:
            'Reversing an equilibrium equation inverts its equilibrium constant: $K_{\\text{rev}} = \\frac{1}{K}$.',
          solution:
            'The target equation is the exact reverse of the reference equation, so:\n$$K_c\' = \\frac{1}{K_c} = \\frac{1}{0.36} = \\frac{100}{36} = \\frac{25}{9} \\approx 2.78$$',
          rubric: [
            { code: 'A1', text: 'Inverts $0.36$ to obtain $K_c\' = \\frac{25}{9} \\approx 2.78$' }
          ]
        },
        {
          label: 'b',
          marks: 1,
          prompt: '$4\\text{S}(s) + 6\\text{O}_2(g) \\rightleftharpoons 4\\text{SO}_3(g)$',
          answer: '$K_c = 0.1296$',
          principle:
            'Multiplying all stoichiometric coefficients of an equilibrium equation by a factor $n$ raises its equilibrium constant to the power $n$: $K_{\\text{new}} = K^n$.',
          solution:
            'The reference equation is multiplied by $2$, so:\n$$K_c\' = (K_c)^2 = (0.36)^2 = 0.1296$$',
          rubric: [
            { code: 'A1', text: 'Squares $0.36$ to obtain $K_c\' = 0.1296$' }
          ]
        },
        {
          label: 'c',
          marks: 1,
          prompt: '$\\text{S}(s) + \\frac{3}{2}\\text{O}_2(g) \\rightleftharpoons \\text{SO}_3(g)$',
          answer: '$K_c = 0.6$',
          principle:
            'Dividing all stoichiometric coefficients of an equilibrium equation by $2$ (multiplying by $\\frac{1}{2}$) raises its equilibrium constant to the $\\frac{1}{2}$ power (takes the square root).',
          solution:
            'The reference equation is multiplied by $\\frac{1}{2}$, so:\n$$K_c\' = (K_c)^{1/2} = \\sqrt{0.36} = 0.6$$',
          rubric: [
            { code: 'A1', text: 'Takes the square root of $0.36$ to obtain $K_c\' = 0.6$' }
          ]
        },
        {
          label: 'd',
          marks: 1,
          prompt: '$8\\text{SO}_3(g) \\rightleftharpoons 8\\text{S}(s) + 12\\text{O}_2(g)$',
          answer: '$K_c = \\left(\\frac{25}{9}\\right)^4 \\approx 59.54$',
          principle:
            'Reversing an equilibrium equation and multiplying all coefficients by $n$ transforms the equilibrium constant to $K_{\\text{new}} = \\left(\\frac{1}{K}\\right)^n$.',
          solution:
            'The reference equation is reversed and multiplied by $4$, so:\n$$K_c\' = \\left(\\frac{1}{0.36}\\right)^4 = \\left(\\frac{25}{9}\\right)^4 = \\frac{390625}{6561} \\approx 59.54$$',
          rubric: [
            { code: 'A1', text: 'Computes $(1/0.36)^4 \\approx 59.54$ correctly' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Combining $K_p$ Values Across Multiple Reactions',
      marks: 3,
      stem: 'Consider the following two gas-phase equilibrium reactions at a given temperature:\n$$\\text{Reaction 1: } \\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{H}_2(g) + \\frac{1}{2}\\text{O}_2(g) \\qquad K_{p1} = 20$$\n$$\\text{Reaction 2: } 2\\text{N}_2(g) + 6\\text{H}_2(g) \\rightleftharpoons 4\\text{NH}_3(g) \\qquad K_{p2} = 4 \\times 10^{-2}$$',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Calculate the value of $K_p$ for the target reaction: $2\\text{NH}_3(g) + 1.5\\text{O}_2(g) \\rightleftharpoons \\text{N}_2(g) + 3\\text{H}_2\\text{O}(g)$.',
          answer: '$K_p = 6.25 \\times 10^{-4}$',
          principle:
            'When chemical equilibria are added together to yield a net equation, the net equilibrium constant equals the product of the equilibrium constants of the appropriately manipulated elementary steps: $K_{\\text{net}} = K_a \\times K_b$.',
          solution:
            'Step 1: Manipulate Reaction 2 to place $2\\text{NH}_3(g)$ on the reactant side (reverse Reaction 2 and multiply by $\\frac{1}{2}$):\n$$2\\text{NH}_3(g) \\rightleftharpoons \\text{N}_2(g) + 3\\text{H}_2(g)$$\n$$K_p\' = \\left(\\frac{1}{K_{p2}}\\right)^{1/2} = \\frac{1}{\\sqrt{4 \\times 10^{-2}}} = \\frac{1}{0.2} = 5$$\n\nStep 2: Manipulate Reaction 1 to place $3\\text{H}_2\\text{O}(g)$ on the product side and cancel $3\\text{H}_2(g)$ (reverse Reaction 1 and multiply by $3$):\n$$3\\text{H}_2(g) + 1.5\\text{O}_2(g) \\rightleftharpoons 3\\text{H}_2\\text{O}(g)$$\n$$K_p\'\' = \\left(\\frac{1}{K_{p1}}\\right)^3 = \\left(\\frac{1}{20}\\right)^3 = \\frac{1}{8000} = 1.25 \\times 10^{-4}$$\n\nStep 3: Add the two manipulated equations; $3\\text{H}_2(g)$ cancels out, giving:\n$$2\\text{NH}_3(g) + 1.5\\text{O}_2(g) \\rightleftharpoons \\text{N}_2(g) + 3\\text{H}_2\\text{O}(g)$$\n$$K_p = K_p\' \\times K_p\'\' = 5 \\times (1.25 \\times 10^{-4}) = 6.25 \\times 10^{-4}$$',
          rubric: [
            { code: 'M1', text: 'Reverses and halves Reaction 2 to find $K_p\' = 5$' },
            { code: 'M1', text: 'Reverses and triples Reaction 1 to find $K_p\'\' = 1.25 \\times 10^{-4}$' },
            { code: 'A1', text: 'Multiplies the constants to obtain $K_p = 6.25 \\times 10^{-4}$' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Equilibrium Constant ($K_c$, $K_p$) and Degree of Dissociation for $\\text{Cl}_2 + \\text{H}_2\\text{O}$',
      marks: 5,
      stem: 'Consider the equilibrium reaction in a $4\\text{ L}$ vessel at $27^\\circ\\text{C}$:\n$$2\\text{Cl}_2(g) + 2\\text{H}_2\\text{O}(g) \\rightleftharpoons 4\\text{HCl}(g) + \\text{O}_2(g)$$\nAt equilibrium, the vessel contains $6\\text{ mol}$ of $\\text{Cl}_2$, $6\\text{ mol}$ of $\\text{H}_2\\text{O}$, $4\\text{ mol}$ of $\\text{HCl}$, and $1\\text{ mol}$ of $\\text{O}_2$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Calculate the concentration equilibrium constant ($K_c$).',
          answer: '$K_c = \\frac{4}{81} \\approx 4.94 \\times 10^{-2}\\ \\text{M}$',
          principle:
            '$K_c$ is evaluated using equilibrium molar concentrations $[\\text{X}] = \\frac{n_{\\text{X}}}{V}$: $K_c = \\frac{[\\text{HCl}]^4[\\text{O}_2]}{[\\text{Cl}_2]^2[\\text{H}_2\\text{O}]^2}$.',
          solution:
            'Convert the equilibrium moles in $V = 4\\text{ L}$ to molarities:\n$$[\\text{Cl}_2] = \\frac{6}{4} = 1.5\\text{ M}, \\quad [\\text{H}_2\\text{O}] = \\frac{6}{4} = 1.5\\text{ M}, \\quad [\\text{HCl}] = \\frac{4}{4} = 1.0\\text{ M}, \\quad [\\text{O}_2] = \\frac{1}{4} = 0.25\\text{ M}$$\nSubstitute into the $K_c$ expression:\n$$K_c = \\frac{[\\text{HCl}]^4[\\text{O}_2]}{[\\text{Cl}_2]^2[\\text{H}_2\\text{O}]^2} = \\frac{(1.0)^4(0.25)}{(1.5)^2(1.5)^2} = \\frac{0.25}{2.25 \\times 2.25} = \\frac{1/4}{81/16} = \\frac{4}{81} \\approx 4.94 \\times 10^{-2}\\ \\text{M}$$',
          rubric: [
            { code: 'M1', text: 'Computes equilibrium concentrations ($1.5\\text{ M}$, $1.5\\text{ M}$, $1.0\\text{ M}$, $0.25\\text{ M}$) and sets up the $K_c$ expression' },
            { code: 'A1', text: 'Calculates $K_c = \\frac{4}{81} \\approx 4.94 \\times 10^{-2}\\ \\text{M}$' }
          ]
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Determine the degree of dissociation ($\\alpha$) of $\\text{Cl}_2$ gas (assuming no $\\text{HCl}$ or $\\text{O}_2$ was present initially).',
          answer: '$\\alpha_{\\text{Cl}_2} = 0.25$ (or $25\\%$)',
          principle:
            'The degree of dissociation is $\\alpha = \\frac{n_{\\text{reacted}}}{n_{\\text{initial}}}$, where $n_{\\text{reacted}}$ is determined from product formation via reaction stoichiometry.',
          solution:
            'Forming $1\\text{ mol}$ of $\\text{O}_2$ (and $4\\text{ mol}$ of $\\text{HCl}$) consumes $2\\text{ mol}$ of $\\text{Cl}_2$ according to the $2:1$ stoichiometric ratio.\nSince $6\\text{ mol}$ of $\\text{Cl}_2$ remains at equilibrium:\n$$n_{\\text{initial}}(\\text{Cl}_2) = n_{\\text{eq}} + n_{\\text{reacted}} = 6 + 2 = 8\\text{ mol}$$\nTherefore:\n$$\\alpha_{\\text{Cl}_2} = \\frac{n_{\\text{reacted}}}{n_{\\text{initial}}} = \\frac{2}{8} = 0.25\\ (25\\%)$$',
          rubric: [
            { code: 'A1', text: 'Finds $n_{\\text{reacted}} = 2\\text{ mol}$, $n_{\\text{initial}} = 8\\text{ mol}$, and $\\alpha = 0.25$ ($25\\%$)' }
          ]
        },
        {
          label: 'c',
          marks: 2,
          prompt: 'Calculate the pressure equilibrium constant ($K_p$) at $27^\\circ\\text{C}$.',
          answer: '$K_p = \\frac{164}{135} \\approx 1.21\\ \\text{atm}$',
          principle:
            '$K_p$ and $K_c$ are related by $K_p = K_c(RT)^{\\Delta n}$, where $\\Delta n = \\sum n_{\\text{gas, products}} - \\sum n_{\\text{gas, reactants}}$ and $T$ is in Kelvin.',
          solution:
            'First calculate $\\Delta n$ and absolute temperature $T$:\n$$\\Delta n = (4 + 1) - (2 + 2) = 5 - 4 = 1$$\n$$T = 27 + 273 = 300\\text{ K}$$\nUsing $R = 0.082\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$:\n$$K_p = K_c(RT)^{\\Delta n} = \\frac{4}{81} \\times (0.082 \\times 300)^1 = \\frac{4}{81} \\times 24.6 = \\frac{98.4}{81} = \\frac{164}{135} \\approx 1.21\\ \\text{atm}$$',
          rubric: [
            { code: 'M1', text: 'Determines $\\Delta n = 1$ and $T = 300\\text{ K}$ and applies $K_p = K_c(RT)^{\\Delta n}$' },
            { code: 'A1', text: 'Computes $K_p \\approx 1.21\\ \\text{atm}$' }
          ]
        }
      ]
    },
    {
      no: 6,
      title: 'Ammonia Dissociation Equilibrium ($\\alpha$, $K_p$, and $K_c$)',
      marks: 5,
      stem: 'A total of $8\\text{ mol}$ of $\\text{NH}_3$ gas is placed in a closed chamber, where it establishes the equilibrium:\n$$2\\text{NH}_3(g) \\rightleftharpoons \\text{N}_2(g) + 3\\text{H}_2(g)$$\nAt equilibrium, $3\\text{ mol}$ of $\\text{H}_2$ gas is present, and the total pressure is $20\\text{ atm}$ at $127^\\circ\\text{C}$.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Determine the degree of dissociation ($\\alpha$) of $\\text{NH}_3$.',
          answer: '$\\alpha = 0.25$ (or $25\\%$)',
          principle:
            'Construct an ICE (Initial, Change, Equilibrium) mole table using the stoichiometric ratio $2 : 1 : 3$, then compute $\\alpha = \\frac{n_{\\text{reacted}}}{n_{\\text{initial}}}$.',
          solution:
            'Since $3\\text{ mol}$ of $\\text{H}_2$ is formed, the reaction extent gives $1\\text{ mol}$ of $\\text{N}_2$ formed and $2\\text{ mol}$ of $\\text{NH}_3$ dissociated:\n\n| Stage | $2\\text{NH}_3(g)$ | $\\text{N}_2(g)$ | $3\\text{H}_2(g)$ |\n| :--- | :---: | :---: | :---: |\n| Initial ($\\text{mol}$) | $8$ | $0$ | $0$ |\n| Change ($\\text{mol}$) | $-2$ | $+1$ | $+3$ |\n| Equilibrium ($\\text{mol}$) | $6$ | $1$ | $3$ |\n\nTherefore:\n$$\\alpha = \\frac{2}{8} = 0.25\\ (25\\%)$$',
          rubric: [
            { code: 'A1', text: 'Uses stoichiometry to find $2\\text{ mol}$ of $\\text{NH}_3$ dissociated and $\\alpha = 0.25$' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'Calculate the value of $K_p$.',
          answer: '$K_p = 3\\ \\text{atm}^2$',
          principle:
            'The partial pressure of each gas at equilibrium is $P_i = \\left(\\frac{n_i}{n_{\\text{total}}}\\right) P_{\\text{total}}$, and $K_p = \\frac{P_{\\text{N}_2} \\cdot P_{\\text{H}_2}^3}{P_{\\text{NH}_3}^2}$.',
          solution:
            'Total equilibrium moles:\n$$n_{\\text{total}} = 6 + 1 + 3 = 10\\text{ mol}$$\nPartial pressures at $P_{\\text{total}} = 20\\text{ atm}$:\n$$P_{\\text{NH}_3} = \\frac{6}{10} \\times 20 = 12\\text{ atm}, \\quad P_{\\text{N}_2} = \\frac{1}{10} \\times 20 = 2\\text{ atm}, \\quad P_{\\text{H}_2} = \\frac{3}{10} \\times 20 = 6\\text{ atm}$$\nSubstitute into $K_p$:\n$$K_p = \\frac{P_{\\text{N}_2} \\cdot P_{\\text{H}_2}^3}{P_{\\text{NH}_3}^2} = \\frac{(2)(6)^3}{(12)^2} = \\frac{2 \\times 216}{144} = \\frac{432}{144} = 3\\ \\text{atm}^2$$',
          rubric: [
            { code: 'M1', text: 'Finds $n_{\\text{total}} = 10\\text{ mol}$ and partial pressures ($12\\text{ atm}$, $2\\text{ atm}$, $6\\text{ atm}$)' },
            { code: 'A1', text: 'Calculates $K_p = 3\\ \\text{atm}^2$' }
          ]
        },
        {
          label: 'c',
          marks: 2,
          prompt: 'Calculate the value of $K_c$ at $127^\\circ\\text{C}$.',
          answer: '$K_c \\approx 2.79 \\times 10^{-3}\\ \\text{M}^2$',
          principle:
            'Rearranging $K_p = K_c(RT)^{\\Delta n}$ gives $K_c = \\frac{K_p}{(RT)^{\\Delta n}}$.',
          solution:
            'Compute $\\Delta n$ and absolute temperature $T$:\n$$\\Delta n = (1 + 3) - 2 = 2, \\qquad T = 127 + 273 = 400\\text{ K}$$\nUsing $R = 0.082\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$:\n$$RT = 0.082 \\times 400 = 32.8\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}$$\n$$K_c = \\frac{K_p}{(RT)^2} = \\frac{3}{(32.8)^2} = \\frac{3}{1075.84} \\approx 2.79 \\times 10^{-3}\\ \\text{M}^2$$',
          rubric: [
            { code: 'M1', text: 'Determines $\\Delta n = 2$, $T = 400\\text{ K}$, and sets up $K_c = K_p / (RT)^2$' },
            { code: 'A1', text: 'Computes $K_c \\approx 2.79 \\times 10^{-3}\\ \\text{M}^2$' }
          ]
        }
      ]
    },
    {
      no: 7,
      title: 'Dimerization of Nitrogen Dioxide ($K_p$ and $K_c$)',
      marks: 4,
      stem: 'A vessel initially contains $2\\text{ mol}$ of $\\text{NO}_2$ gas at $27^\\circ\\text{C}$. At equilibrium, $30\\%$ of the $\\text{NO}_2$ has combined to form $\\text{N}_2\\text{O}_4$ gas according to:\n$$2\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$$\nThe total equilibrium pressure of the gas mixture is $3.4\\text{ atm}$.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Determine the value of $K_p$.',
          answer: '$K_p = \\frac{15}{196} \\approx 7.65 \\times 10^{-2}\\ \\text{atm}^{-1}$',
          principle:
            'Use the percentage reacted to obtain equilibrium moles, then find partial pressures from mole fractions and substitute into $K_p = \\frac{P_{\\text{N}_2\\text{O}_4}}{P_{\\text{NO}_2}^2}$.',
          solution:
            'Amount of $\\text{NO}_2$ that reacts: $30\\% \\times 2\\text{ mol} = 0.6\\text{ mol}$. By the $2:1$ stoichiometry, $0.3\\text{ mol}$ of $\\text{N}_2\\text{O}_4$ forms.\n\n| Stage | $2\\text{NO}_2(g)$ | $\\text{N}_2\\text{O}_4(g)$ |\n| :--- | :---: | :---: |\n| Initial ($\\text{mol}$) | $2.0$ | $0$ |\n| Change ($\\text{mol}$) | $-0.6$ | $+0.3$ |\n| Equilibrium ($\\text{mol}$) | $1.4$ | $0.3$ |\n\nTotal equilibrium moles: $n_{\\text{total}} = 1.4 + 0.3 = 1.7\\text{ mol}$.\nPartial pressures at $P_{\\text{total}} = 3.4\\text{ atm}$:\n$$P_{\\text{NO}_2} = \\frac{1.4}{1.7} \\times 3.4 = 2.8\\text{ atm}, \\qquad P_{\\text{N}_2\\text{O}_4} = \\frac{0.3}{1.7} \\times 3.4 = 0.6\\text{ atm}$$\nSubstitute into $K_p$:\n$$K_p = \\frac{P_{\\text{N}_2\\text{O}_4}}{P_{\\text{NO}_2}^2} = \\frac{0.6}{(2.8)^2} = \\frac{0.6}{7.84} = \\frac{15}{196} \\approx 7.65 \\times 10^{-2}\\ \\text{atm}^{-1}$$',
          rubric: [
            { code: 'M1', text: 'Finds equilibrium moles ($1.4\\text{ mol}$ $\\text{NO}_2$, $0.3\\text{ mol}$ $\\text{N}_2\\text{O}_4$) and partial pressures ($2.8\\text{ atm}$, $0.6\\text{ atm}$)' },
            { code: 'A1', text: 'Computes $K_p = \\frac{15}{196} \\approx 7.65 \\times 10^{-2}\\ \\text{atm}^{-1}$' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'Determine the value of $K_c$ at $27^\\circ\\text{C}$.',
          answer: '$K_c \\approx 1.88\\ \\text{M}^{-1}$',
          principle:
            'Since $K_p = K_c(RT)^{\\Delta n}$ with $\\Delta n = 1 - 2 = -1$, we have $K_c = K_p \\cdot RT$.',
          solution:
            'With $\\Delta n = 1 - 2 = -1$ and $T = 27 + 273 = 300\\text{ K}$:\n$$K_p = K_c(RT)^{-1} \\implies K_c = K_p \\cdot RT$$\nUsing $R = 0.082\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$:\n$$K_c = \\frac{15}{196} \\times (0.082 \\times 300) = \\frac{15}{196} \\times 24.6 = \\frac{369}{196} \\approx 1.88\\ \\text{M}^{-1}$$',
          rubric: [
            { code: 'M1', text: 'Identifies $\\Delta n = -1$, $T = 300\\text{ K}$, and writes $K_c = K_p RT$' },
            { code: 'A1', text: 'Computes $K_c \\approx 1.88\\ \\text{M}^{-1}$' }
          ]
        }
      ]
    },
    {
      no: 8,
      title: 'Combining Equilibria and ICE Stoichiometry for $\\text{H}_2 + \\text{Cl}_2 \\rightleftharpoons 2\\text{HCl}$',
      marks: 5,
      stem: 'Consider the following two equilibrium reactions at the same temperature:\n$$\\text{Reaction 1: } 4\\text{H}_2(g) + 4\\text{HCl}(g) + 2\\text{N}_2(g) \\rightleftharpoons 4\\text{NH}_3(g) + 2\\text{Cl}_2(g) \\qquad K_{c1} = 625$$\n$$\\text{Reaction 2: } 2\\text{NH}_3(g) \\rightleftharpoons 3\\text{H}_2(g) + \\text{N}_2(g) \\qquad K_{c2} = 2.5 \\times 10^{-3}$$\nA third reaction between hydrogen gas and chlorine gas proceeds in a $3\\text{ L}$ container:\n$$\\text{H}_2(g) + \\text{Cl}_2(g) \\rightleftharpoons 2\\text{HCl}(g)$$\nInitially, $6\\text{ mol}$ of $\\text{H}_2$ and $6\\text{ mol}$ of $\\text{Cl}_2$ are placed in the container.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Determine the equilibrium constant ($K_c$) of the third reaction $\\text{H}_2(g) + \\text{Cl}_2(g) \\rightleftharpoons 2\\text{HCl}(g)$.',
          answer: '$K_c = 16$',
          principle:
            'Combine Reactions 1 and 2 algebraically so that intermediate species ($\\text{NH}_3$, $\\text{N}_2$) cancel, then reverse and scale the resulting equation to obtain the target reaction.',
          solution:
            'Step 1: Multiply Reaction 2 by $2$:\n$$4\\text{NH}_3(g) \\rightleftharpoons 6\\text{H}_2(g) + 2\\text{N}_2(g) \\qquad K_c\' = (2.5 \\times 10^{-3})^2 = 6.25 \\times 10^{-6}$$\n\nStep 2: Add Reaction 1 and the doubled Reaction 2 ($4\\text{NH}_3$, $2\\text{N}_2$, and $4\\text{H}_2$ cancel):\n$$4\\text{HCl}(g) \\rightleftharpoons 2\\text{H}_2(g) + 2\\text{Cl}_2(g)$$\n$$K_c\'\' = K_{c1} \\times K_c\' = 625 \\times (6.25 \\times 10^{-6}) = 3.90625 \\times 10^{-3} = \\frac{1}{256}$$\n\nStep 3: Reverse and divide by $2$ (raise to $-\\frac{1}{2}$) to obtain $\\text{H}_2(g) + \\text{Cl}_2(g) \\rightleftharpoons 2\\text{HCl}(g)$:\n$$K_c = \\left(\\frac{1}{K_c\'\'}\\right)^{1/2} = \\sqrt{256} = 16$$',
          rubric: [
            { code: 'M1', text: 'Combines Reaction 1 and $2 \\times$ Reaction 2 to find $K_c\'\' = \\frac{1}{256}$ for $4\\text{HCl} \\rightleftharpoons 2\\text{H}_2 + 2\\text{Cl}_2$' },
            { code: 'A1', text: 'Inverts and takes the square root to obtain $K_c = 16$' }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt: 'Calculate the number of moles of $\\text{H}_2$, $\\text{Cl}_2$, and $\\text{HCl}$ present when equilibrium is reached.',
          answer: '$n(\\text{H}_2) = 2\\text{ mol}$, $n(\\text{Cl}_2) = 2\\text{ mol}$, $n(\\text{HCl}) = 8\\text{ mol}$',
          principle:
            'Set up an ICE table in moles (or molarities) and solve $K_c = \\frac{[\\text{HCl}]^2}{[\\text{H}_2][\\text{Cl}_2]}$. Because $\\Delta n_{\\text{gas}} = 0$, the container volume $V = 3\\text{ L}$ cancels out.',
          solution:
            'Initial concentrations in $V = 3\\text{ L}$: $[\\text{H}_2]_0 = \\frac{6}{3} = 2\\text{ M}$ and $[\\text{Cl}_2]_0 = \\frac{6}{3} = 2\\text{ M}$. Let $x$ be the molarity of $\\text{H}_2$ that reacts:\n\n| Stage | $\\text{H}_2(g)$ | $\\text{Cl}_2(g)$ | $2\\text{HCl}(g)$ |\n| :--- | :---: | :---: | :---: |\n| Initial ($\\text{M}$) | $2$ | $2$ | $0$ |\n| Change ($\\text{M}$) | $-x$ | $-x$ | $+2x$ |\n| Equilibrium ($\\text{M}$) | $2 - x$ | $2 - x$ | $2x$ |\n\nSubstitute into $K_c = 16$:\n$$\\frac{(2x)^2}{(2 - x)^2} = 16$$\nTake the positive square root of both sides:\n$$\\frac{2x}{2 - x} = 4 \\implies 2x = 8 - 4x \\implies 6x = 8 \\implies x = \\frac{4}{3}\\text{ M}$$\nEquilibrium concentrations:\n$$[\\text{H}_2] = [\\text{Cl}_2] = 2 - \\frac{4}{3} = \\frac{2}{3}\\text{ M}, \\qquad [\\text{HCl}] = 2\\left(\\frac{4}{3}\\right) = \\frac{8}{3}\\text{ M}$$\nMultiply by $V = 3\\text{ L}$ to get equilibrium moles:\n$$n(\\text{H}_2) = \\frac{2}{3} \\times 3 = 2\\text{ mol}, \\qquad n(\\text{Cl}_2) = \\frac{2}{3} \\times 3 = 2\\text{ mol}, \\qquad n(\\text{HCl}) = \\frac{8}{3} \\times 3 = 8\\text{ mol}$$',
          rubric: [
            { code: 'M1', text: 'Sets up the ICE table and writes $\\frac{(2x)^2}{(2-x)^2} = 16$' },
            { code: 'M1', text: 'Solves correctly for $x = \\frac{4}{3}\\text{ M}$ (or $4\\text{ mol}$ reacted)' },
            { code: 'A1', text: 'Finds $n(\\text{H}_2) = 2\\text{ mol}$, $n(\\text{Cl}_2) = 2\\text{ mol}$, and $n(\\text{HCl}) = 8\\text{ mol}$' }
          ]
        }
      ]
    },
    {
      no: 9,
      title: 'Reaction Quotient ($Q_c$) and Equilibrium Composition of Nitrosyl Chloride',
      marks: 5,
      stem: 'The equilibrium constant ($K_c$) for the formation of nitrosyl chloride from nitric oxide and chlorine molecules is $6.4 \\times 10^{-2}$ at $35^\\circ\\text{C}$, written in the source worksheet as:\n$$\\text{N}_2\\text{O}_2(g) + \\text{Cl}_2(g) \\rightleftharpoons 2\\text{NOCl}(g)$$\nIn one experiment, $0.03\\text{ mol}$ of $\\text{NO}$, $0.03\\text{ mol}$ of $\\text{Cl}_2$, and $0.018\\text{ mol}$ of $\\text{NOCl}$ were mixed in a $10\\text{ L}$ flask.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Explain by calculation of $Q_c$ in which direction the equilibrium system will shift to reach equilibrium.',
          answer:
            '$Q_c > K_c$, so the system shifts to the left (toward reactants). Specifically, $Q_c = 120$ for $2\\text{NO}(g) + \\text{Cl}_2(g) \\rightleftharpoons 2\\text{NOCl}(g)$ (or $Q_c = 0.36$ if the $0.03\\text{ mol}$ reactant is treated as $\\text{N}_2\\text{O}_2$ in the printed $1:1:2$ equation).',
          principle:
            'Compare the reaction quotient $Q_c$ (computed with initial concentrations) to $K_c$: if $Q_c > K_c$, the reverse reaction is favored and the system shifts left toward reactants.',
          solution:
            '*Source Note*: The problem text specifies formation from **nitric oxide** ($\\text{NO}$) and gives $0.03\\text{ mol}$ of $\\text{NO}$, whereas the printed equation writes $\\text{N}_2\\text{O}_2(g)$ (the dimer of $2\\text{NO}$). Below we evaluate the chemically balanced $\\text{NO}$ reaction and also show the $1:1:2$ $\\text{N}_2\\text{O}_2$ reading.\n\nInitial molarities in $V = 10\\text{ L}$:\n$$[\\text{NO}]_0 = \\frac{0.03}{10} = 3.0 \\times 10^{-3}\\text{ M}, \\quad [\\text{Cl}_2]_0 = \\frac{0.03}{10} = 3.0 \\times 10^{-3}\\text{ M}, \\quad [\\text{NOCl}]_0 = \\frac{0.018}{10} = 1.8 \\times 10^{-3}\\text{ M}$$\n\n1. **Using the balanced nitric oxide equation** ($2\\text{NO}(g) + \\text{Cl}_2(g) \\rightleftharpoons 2\\text{NOCl}(g)$):\n$$Q_c = \\frac{[\\text{NOCl}]_0^2}{[\\text{NO}]_0^2[\\text{Cl}_2]_0} = \\frac{(1.8 \\times 10^{-3})^2}{(3.0 \\times 10^{-3})^2(3.0 \\times 10^{-3})} = \\frac{3.24 \\times 10^{-6}}{2.7 \\times 10^{-8}} = 120$$\nSince $Q_c = 120 > K_c = 0.064$, the equilibrium shifts **to the left** (forming more $\\text{NO}$ and $\\text{Cl}_2$).\n\n2. **Alternative (printed $1:1:2$ stoichiometry with $0.03\\text{ mol}$ taken as $\\text{N}_2\\text{O}_2$)**:\n$$Q_c = \\frac{(1.8 \\times 10^{-3})^2}{(3.0 \\times 10^{-3})(3.0 \\times 10^{-3})} = 0.36 > K_c = 0.064$$\nThis likewise gives $Q_c > K_c$, so the system still shifts **to the left**.',
          rubric: [
            { code: 'M1', text: 'Converts moles in $10\\text{ L}$ to initial concentrations and calculates $Q_c$ ($120$ for $2\\text{NO}+\\text{Cl}_2$, or $0.36$ for $\\text{N}_2\\text{O}_2+\\text{Cl}_2$)' },
            { code: 'A1', text: 'Compares $Q_c > K_c$ and concludes the system shifts to the left' }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt: 'Calculate the amount (in moles) of each substance when equilibrium is reached.',
          answer:
            'For $2\\text{NO}(g) + \\text{Cl}_2(g) \\rightleftharpoons 2\\text{NOCl}(g)$: $n(\\text{NO}) \\approx 0.0473\\text{ mol}$, $n(\\text{Cl}_2) \\approx 0.0386\\text{ mol}$, $n(\\text{NOCl}) \\approx 7.43 \\times 10^{-4}\\text{ mol}$ (under the $1:1:2$ $\\text{N}_2\\text{O}_2$ equation: $n(\\text{N}_2\\text{O}_2) \\approx 0.0346\\text{ mol}$, $n(\\text{Cl}_2) \\approx 0.0346\\text{ mol}$, $n(\\text{NOCl}) \\approx 8.76 \\times 10^{-3}\\text{ mol}$).',
          principle:
            'Since the reaction shifts left, let $x$ (or $2x$) be the concentration consumed on the product side in an ICE table and solve the equilibrium equation $K_c = 0.064$.',
          solution:
            '**Method 1: Balanced nitric oxide equation** ($2\\text{NO}(g) + \\text{Cl}_2(g) \\rightleftharpoons 2\\text{NOCl}(g)$)\n\n| Stage | $2\\text{NO}(g)$ | $\\text{Cl}_2(g)$ | $2\\text{NOCl}(g)$ |\n| :--- | :---: | :---: | :---: |\n| Initial ($\\text{M}$) | $0.003$ | $0.003$ | $0.0018$ |\n| Change ($\\text{M}$) | $+2x$ | $+x$ | $-2x$ |\n| Equilibrium ($\\text{M}$) | $0.003 + 2x$ | $0.003 + x$ | $0.0018 - 2x$ |\n\nSubstitute into $K_c = 0.064$:\n$$\\frac{(0.0018 - 2x)^2}{(0.003 + 2x)^2(0.003 + x)} = 0.064$$\nSolving this cubic equation numerically within $0 < x < 0.0009\\text{ M}$ gives $x \\approx 8.628 \\times 10^{-4}\\text{ M}$.\nEquilibrium moles in $V = 10\\text{ L}$:\n$$n(\\text{NO}) = 10(0.003 + 2x) \\approx 0.0473\\text{ mol}$$\n$$n(\\text{Cl}_2) = 10(0.003 + x) \\approx 0.0386\\text{ mol}$$\n$$n(\\text{NOCl}) = 10(0.0018 - 2x) \\approx 7.43 \\times 10^{-4}\\text{ mol}$$\n\n**Method 2: Printed $1:1:2$ equation** ($\\text{N}_2\\text{O}_2(g) + \\text{Cl}_2(g) \\rightleftharpoons 2\\text{NOCl}(g)$ with $0.03\\text{ mol}$ reactant)\n$$\\frac{(0.0018 - 2x)^2}{(0.003 + x)^2} = 0.064 \\implies \\frac{0.0018 - 2x}{0.003 + x} = \\sqrt{0.064} \\approx 0.2530$$\n$$x \\approx 4.621 \\times 10^{-4}\\text{ M}$$\nMultiplying by $10\\text{ L}$ gives $n(\\text{N}_2\\text{O}_2) = n(\\text{Cl}_2) \\approx 0.0346\\text{ mol}$ and $n(\\text{NOCl}) \\approx 8.76 \\times 10^{-3}\\text{ mol}$.',
          rubric: [
            { code: 'M1', text: 'Constructs a valid left-shifting ICE table consistent with the chosen stoichiometry' },
            { code: 'M1', text: 'Sets up and solves the $K_c = 0.064$ equation for the equilibrium extent $x$' },
            { code: 'A1', text: 'Multiplies equilibrium concentrations by $10\\text{ L}$ to report accurate equilibrium moles for all three species' }
          ]
        }
      ]
    },
    {
      no: 10,
      title: 'Le Chatelier’s Principle on the $\\text{N}_2\\text{O}_4 / \\text{NO}_2$ Equilibrium',
      marks: 5,
      stem: 'Consider the equilibrium system as given in the worksheet:\n$$\\text{N}_2\\text{O}_4(g)\\ (\\text{colorless}) \\rightleftharpoons 2\\text{NO}_2(g)\\ (\\text{brown}) \\qquad \\Delta H = -157\\text{ kJ/mol}$$',
      parts: [
        {
          label: 'a',
          marks: 5,
          prompt:
            'Complete the table for each disturbance by predicting the shift direction, effect on $K_c / K_p$, change in $[\\text{NO}_2]$, and change in mixture color (using the given $\\Delta H = -157\\text{ kJ/mol}$).',
          answer:
            '1. $\\text{N}_2\\text{O}_4$ added: right, $K$ unchanged, $[\\text{NO}_2]$ increases, darker brown. 2. $\\text{NO}_2$ lowered: right, $K$ unchanged, $[\\text{NO}_2]$ partially recovers (remains lower than initial equilibrium), paler then darkens slightly (net lighter than initial equilibrium). 3. Compressed container: left, $K$ unchanged, $[\\text{NO}_2]$ initially spikes then decreases (net higher than before compression), darker initially then fades (still darker than initial). 4. Cooling container (with given $\\Delta H < 0$): right, $K$ increases, $[\\text{NO}_2]$ increases, darker brown. 5. Piston lifted (volume increased): right, $K$ unchanged, $[\\text{NO}_2]$ initially drops then increases (net lower than before expansion), paler initially then slightly darker (net lighter).',
          principle:
            'By Le Chatelier’s principle, an equilibrium shifts to counteract an imposed change in concentration, pressure/volume, or temperature. Only a change in temperature alters the equilibrium constant $K_c$ or $K_p$.',
          solution:
            '*Note on given data*: Treat the reaction as exothermic ($\\Delta H = -157\\text{ kJ/mol}$) strictly as stated in the worksheet (in physical chemistry, $\\text{N}_2\\text{O}_4$ dissociation is actually endothermic, $+57.2\\text{ kJ/mol}$). Note also that $\\Delta n_{\\text{gas}} = 2 - 1 = +1$ (more gas moles on the product side).\n\n| Factor | Shift Direction | $K_c / K_p$ Value | Concentration of $\\text{NO}_2$ | Color of the Mixture |\n| :--- | :--- | :--- | :--- | :--- |\n| $\\text{N}_2\\text{O}_4$ gas added | Shifts right (products) | Unchanged | Increases | Turns darker brown |\n| $\\text{NO}_2$ concentration lowered | Shifts right (products) | Unchanged | Partially increases back (net lower than initial equilibrium) | Temporarily paler, then darkens slightly (net lighter than initial) |\n| Compressed container ($V\\downarrow,\\ P\\uparrow$) | Shifts left (fewer gas moles) | Unchanged | Spikes upon compression, then decreases (net higher than initial) | Darkens initially, then fades partially (net darker than initial) |\n| Cooling container ($T\\downarrow$, given $\\Delta H = -157\\text{ kJ/mol}$) | Shifts right (exothermic direction) | Increases | Increases | Turns darker brown |\n| Piston lifted ($V\\uparrow,\\ P\\downarrow$) | Shifts right (more gas moles) | Unchanged | Drops upon expansion, then increases partially (net lower than initial) | Becomes paler initially, then darkens slightly (net paler than initial) |',
          rubric: [
            { code: 'B1', text: 'Correctly completes row 1 ($\\text{N}_2\\text{O}_4$ added: right, $K$ unchanged, $[\\text{NO}_2]$ increases, darker brown)' },
            { code: 'B1', text: 'Correctly completes row 2 ($\\text{NO}_2$ lowered: right, $K$ unchanged, $[\\text{NO}_2]$ partially recovers, net lighter)' },
            { code: 'B1', text: 'Correctly completes row 3 (compressed container: left, $K$ unchanged, $[\\text{NO}_2]$ decreases after spike, net darker)' },
            { code: 'B1', text: 'Correctly completes row 4 (cooling container with given $\\Delta H < 0$: right, $K$ increases, $[\\text{NO}_2]$ increases, darker brown)' },
            { code: 'B1', text: 'Correctly completes row 5 (piston lifted: right, $K$ unchanged, $[\\text{NO}_2]$ partially increases after drop, net paler)' }
          ]
        }
      ]
    },
    {
      no: 11,
      title: 'Industrial Production of Chlorine Gas (Deacon Process)',
      marks: 4,
      stem: 'Chlorine gas can be produced through the following equilibrium reaction:\n$$4\\text{HCl}(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{H}_2\\text{O}(g) + 2\\text{Cl}_2(g) \\qquad \\Delta H = -11.7\\text{ kJ}$$',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Name the industrial process for making chlorine gas via this reaction and state major uses of chlorine gas.',
          answer:
            'Deacon process; used for water disinfection/purification, bleaching agents (pulp, paper, textiles), PVC plastic production, and manufacturing hydrochloric acid and chlorinated solvents.',
          principle:
            'The catalytic oxidation of hydrogen chloride gas by oxygen over a copper(II) chloride catalyst is historically known as the Deacon process.',
          solution:
            '- **Process name**: **Deacon process** (catalytic oxidation of $\\text{HCl}$ gas by $\\text{O}_2$, typically using a $\\text{CuCl}_2$ catalyst).\n- **Uses of chlorine gas ($\\text{Cl}_2$)**:\n  1. Disinfecting drinking water and swimming pools (killing bacteria and pathogens).\n  2. Manufacturing polymers and plastics such as polyvinyl chloride (PVC).\n  3. Producing bleaching agents (e.g., sodium hypochlorite, $\\text{NaClO}$) for paper, pulp, and textiles.\n  4. Synthesizing industrial chemicals, pharmaceuticals, and chlorinated solvents.',
          rubric: [
            { code: 'B1', text: 'Identifies the process as the Deacon process' },
            { code: 'B1', text: 'States valid industrial/practical uses of chlorine gas (e.g., water disinfection, PVC, bleaching)' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'List 5 factors that can be adjusted so that chlorine gas ($\\text{Cl}_2$) is obtained maximally.',
          answer:
            '1. Increase $[\\text{HCl}]$; 2. Increase $[\\text{O}_2]$; 3. Remove $\\text{Cl}_2$ or $\\text{H}_2\\text{O}$ continuously; 4. Increase pressure (or decrease container volume); 5. Lower temperature (keeping it high enough for an acceptable catalytic rate).',
          principle:
            'In $4\\text{HCl}(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{H}_2\\text{O}(g) + 2\\text{Cl}_2(g)$, there are $5\\text{ mol}$ of reactant gas vs. $4\\text{ mol}$ of product gas ($\\Delta n_{\\text{gas}} = -1$) and the forward reaction is exothermic ($\\Delta H = -11.7\\text{ kJ} < 0$).',
          solution:
            'To shift equilibrium to the right and maximize $\\text{Cl}_2(g)$ yield:\n1. **Increase the concentration (partial pressure) of $\\text{HCl}(g)$**: Excess reactant drives the equilibrium forward.\n2. **Increase the concentration (partial pressure) of $\\text{O}_2(g)$**: Using excess air/oxygen pushes conversion to the right.\n3. **Continuously remove $\\text{Cl}_2(g)$ and/or condense $\\text{H}_2\\text{O}(g)$**: Lowering product concentrations prevents the reverse reaction.\n4. **Increase total pressure (or decrease container volume)**: The system shifts toward fewer moles of gas ($5\\text{ mol} \\longrightarrow 4\\text{ mol}$), favoring products.\n5. **Lower the temperature** (within a practical catalytic range): Because $\\Delta H < 0$ (exothermic), cooling favors the forward reaction and increases $K_c$ and $K_p$.',
          rubric: [
            { code: 'B1', text: 'Lists three valid concentration/removal factors (increasing $[\\text{HCl}]$, increasing $[\\text{O}_2]$, removing $\\text{Cl}_2$ or $\\text{H}_2\\text{O}$)' },
            { code: 'B1', text: 'Lists both pressure/volume (increase $P$ / decrease $V$ as $\\Delta n < 0$) and temperature (lower $T$ as $\\Delta H < 0$) factors' }
          ]
        }
      ]
    },
    {
      no: 12,
      title: 'Analyzing Six Equilibrium Systems Under Disturbances',
      marks: 6,
      stem: 'Consider the following six equilibrium reactions (with the enthalpy signs $\\Delta H$ as given in the source worksheet):\n1. $3\\text{Fe}(s) + 4\\text{H}_2\\text{O}(g) \\rightleftharpoons \\text{Fe}_3\\text{O}_4(s) + 4\\text{H}_2(g) \\qquad \\Delta H = (+)$\n2. $\\text{CO}_2(g) \\rightleftharpoons \\text{C}(s) + \\text{O}_2(g) \\qquad \\Delta H = (+)$\n3. $\\text{PH}_3(g) + \\text{H}_2(g) \\rightleftharpoons \\text{PH}_5(g) \\qquad \\Delta H = (+)$\n4. $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g) \\qquad \\Delta H = (-)$\n5. $2\\text{NaHCO}_3(s) \\rightleftharpoons \\text{Na}_2\\text{CO}_3(s) + \\text{CO}_2(g) + \\text{H}_2\\text{O}(g) \\qquad \\Delta H = (-)$\n6. $2\\text{HI}(g) \\rightleftharpoons \\text{H}_2(g) + \\text{I}_2(g) \\qquad \\Delta H = (-)$',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Which equilibrium reactions have the same $K_p$ and $K_c$ value ($K_p = K_c$)?',
          answer: 'Reactions 1, 2, and 6',
          principle:
            '$K_p = K_c(RT)^{\\Delta n}$, so $K_p = K_c$ whenever the change in gas moles is zero ($\\Delta n_{\\text{gas}} = 0$).',
          solution:
            'Evaluate $\\Delta n_{\\text{gas}} = n_{\\text{gas, products}} - n_{\\text{gas, reactants}}$ (ignoring solids):\n- Reaction 1: $4 - 4 = 0 \\implies K_p = K_c$\n- Reaction 2: $1 - 1 = 0 \\implies K_p = K_c$\n- Reaction 3: $1 - 2 = -1$\n- Reaction 4: $1 - 0 = +1$\n- Reaction 5: $2 - 0 = +2$\n- Reaction 6: $(1 + 1) - 2 = 0 \\implies K_p = K_c$\n\nThus, **Reactions 1, 2, and 6** have $K_p = K_c$.',
          rubric: [
            { code: 'A1', text: 'Identifies Reactions 1, 2, and 6 (where $\\Delta n_{\\text{gas}} = 0$)' }
          ]
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Which equilibrium reactions do not shift if the container volume is increased?',
          answer: 'Reactions 1, 2, and 6',
          principle:
            'Changing volume (or total pressure) has no effect on the equilibrium position when both sides have the same number of moles of gas ($\\Delta n_{\\text{gas}} = 0$).',
          solution:
            'Reactions with $\\Delta n_{\\text{gas}} = 0$ have equal gas coefficients on both sides, so increasing volume does not shift the equilibrium. These are **Reactions 1, 2, and 6**.',
          rubric: [
            { code: 'A1', text: 'Identifies Reactions 1, 2, and 6' }
          ]
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'Which equilibrium reactions shift to the right if the temperature is increased?',
          answer: 'Reactions 1, 2, and 3',
          principle:
            'Increasing temperature favors the endothermic direction ($\\Delta H > 0$, marked $\\Delta H = +$).',
          solution:
            'The reactions with $\\Delta H = (+)$ (endothermic forward direction) are **Reactions 1, 2, and 3**. Raising the temperature shifts these three equilibria to the right.',
          rubric: [
            { code: 'A1', text: 'Identifies Reactions 1, 2, and 3 (endothermic $\\Delta H = +$)' }
          ]
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Which equilibrium reactions shift to the left if the pressure is increased?',
          answer: 'Reactions 4 and 5',
          principle:
            'Increasing pressure shifts an equilibrium toward the side with fewer moles of gas; it shifts left when $n_{\\text{gas, reactants}} < n_{\\text{gas, products}}$ ($\\Delta n_{\\text{gas}} > 0$).',
          solution:
            'Check $\\Delta n_{\\text{gas}} > 0$:\n- Reaction 4: $0\\text{ mol gas} \\longrightarrow 1\\text{ mol gas}$ ($\\Delta n = +1$) $\\implies$ shifts left.\n- Reaction 5: $0\\text{ mol gas} \\longrightarrow 2\\text{ mol gas}$ ($\\Delta n = +2$) $\\implies$ shifts left.\n(Reaction 3 has $\\Delta n = -1$ and shifts right; Reactions 1, 2, 6 have $\\Delta n = 0$.)\n\nThus, **Reactions 4 and 5** shift to the left.',
          rubric: [
            { code: 'A1', text: 'Identifies Reactions 4 and 5 (where $\\Delta n_{\\text{gas}} > 0$)' }
          ]
        },
        {
          label: 'e',
          marks: 1,
          prompt: 'Among the reactions involving $\\text{H}_2$ gas, which equilibrium reaction shifts to the right if $\\text{H}_2$ gas is increased?',
          answer: 'Reaction 3',
          principle:
            'Adding a reactant shifts the equilibrium to the right (toward products); adding a product shifts it to the left.',
          solution:
            'Inspect the reactions containing $\\text{H}_2(g)$:\n- Reaction 1: $\\text{H}_2(g)$ is a product $\\implies$ increasing $\\text{H}_2$ shifts left.\n- Reaction 3: $\\text{H}_2(g)$ is a reactant $\\implies$ increasing $\\text{H}_2$ shifts **right**.\n- Reaction 6: $\\text{H}_2(g)$ is a product $\\implies$ increasing $\\text{H}_2$ shifts left.\n\nThus, **Reaction 3** shifts to the right.',
          rubric: [
            { code: 'A1', text: 'Identifies Reaction 3 (where $\\text{H}_2(g)$ is a reactant)' }
          ]
        },
        {
          label: 'f',
          marks: 1,
          prompt: 'Among the reactions involving $\\text{CO}_2$ gas, which equilibrium reaction shifts to the left if $\\text{CO}_2$ gas is lowered?',
          answer: 'Reaction 2',
          principle:
            'Removing (lowering) a reactant shifts the equilibrium to the left to replenish it; lowering a product shifts the equilibrium to the right.',
          solution:
            'Inspect the reactions containing $\\text{CO}_2(g)$:\n- Reaction 2: $\\text{CO}_2(g)$ is a reactant $\\implies$ lowering $\\text{CO}_2$ shifts **left**.\n- Reaction 4: $\\text{CO}_2(g)$ is a product $\\implies$ lowering $\\text{CO}_2$ shifts right.\n- Reaction 5: $\\text{CO}_2(g)$ is a product $\\implies$ lowering $\\text{CO}_2$ shifts right.\n\nThus, **Reaction 2** shifts to the left.',
          rubric: [
            { code: 'A1', text: 'Identifies Reaction 2 (where $\\text{CO}_2(g)$ is a reactant)' }
          ]
        }
      ]
    }
  ]
};
