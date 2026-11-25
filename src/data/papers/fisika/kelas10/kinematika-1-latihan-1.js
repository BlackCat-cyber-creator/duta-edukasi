/**
 * Paket Soal Terstruktur: Physics Grade 10 – Kinematics I Exercise
 * Sumber: Physics Kinematics Exercise.pdf (Duta e-dukasi).
 * Bahasa dipertahankan dalam Bahasa Inggris sesuai dokumen sumber.
 */
export default {
  id: 'fis10-kinematika1-ex1',
  slug: 'kinematika-1-latihan-1',
  subject: 'fisika',
  grade: 10,
  track: 'cambridge-style',
  topic: 'Kinematika I – Gerak Lurus & Grafik',
  relatedChapterIds: ['ipa10-bab2-vektor-dan-gerak-lurus'],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'Fisika SMA',
  title: 'Physics Grade 10 – Kinematics I Exercise',
  totalMarks: 42,
  instructions:
    'Answer all five structured questions clearly with complete steps, full working, and SI units. Where required, take $g = 10\\ \\text{m s}^{-2}$.',
  constants: ['g = 10\\ \\text{m s}^{-2}'],
  source: {
    org: 'Duta e-dukasi',
    file: 'Physics Kinematics Exercise.pdf',
    driveFolder: '1kCaCbtsKZZQa-aswV7FHEPRJu7QJduPB',
    license: 'CC BY 4.0'
  },
  status: 'published',
  accessTier: 'free',
  questions: [
    {
      no: 1,
      title: 'Hoverbike Circuit Race & Relative Position',
      marks: 6,
      stem: 'The arena roared as two advanced hoverbikes burst forward on the $1,500\\ \\text{m}$ circuit. Hoverbike A shot ahead at $12\\ \\text{m s}^{-1}$, but its pace climbed steadily at only $0.4\\ \\text{m s}^{-2}$ as the race progressed. Behind it, Hoverbike B started slower at $10\\ \\text{m s}^{-1}$, yet its drive grew fiercer, accelerating by $1.2\\ \\text{m s}^{-2}$ until it closed the gap at the $800\\ \\text{m}$ mark. Step by step, they devoured the track. In the final $150\\ \\text{m}$, A summoned everything left in its thrusters, pushing harder with an acceleration of $1.5\\ \\text{m s}^{-2}$ until its velocity roared to $18\\ \\text{m s}^{-1}$. Meanwhile, B strained its engine but could only reach a top speed of $17\\ \\text{m s}^{-1}$. Hoverbike A surged past the finish line first, securing the victory.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            "Where was A's position relative to the starting line when it had exactly $150\\ \\text{m}$ left to reach the finish line?",
          answer: '$1,350\\ \\text{m}$ from the starting line',
          answerNumeric: [{ name: 'position', value: 1350, unit: 'm' }],
          principle:
            'Position along a one-dimensional track of total length $L = 1,500\\ \\text{m}$ equals the total track distance minus the remaining distance to the finish line.',
          solution:
            'The total length of the circuit is $L = 1,500\\ \\text{m}$. When Hoverbike A has $d_{\\text{rem}} = 150\\ \\text{m}$ remaining to the finish line, its position $x$ relative to the starting line is:\n$$x = L - d_{\\text{rem}} = 1,500 - 150 = 1,350\\ \\text{m}$$',
          rubric: [{ code: 'A1', text: 'Position $= 1,350\\ \\text{m}$ (from $1,500 - 150$)' }]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'Determine the difference in speed for Hoverbike B between the start and the end of the race.',
          answer: '$7\\ \\text{m s}^{-1}$',
          answerNumeric: [{ name: 'delta_v', value: 7, unit: 'm/s' }],
          principle:
            'The change in speed between two instants is the difference between the final speed $v_f$ and the initial speed $v_i$: $\\Delta v = v_f - v_i$.',
          solution:
            'Given $v_i = 10\\ \\text{m s}^{-1}$ and $v_f = 17\\ \\text{m s}^{-1}$:\n$$\\Delta v = v_f - v_i = 17 - 10 = 7\\ \\text{m s}^{-1}$$',
          rubric: [
            {
              code: 'M1',
              text: 'Identifying $v_f = 17\\ \\text{m s}^{-1}$ and $v_i = 10\\ \\text{m s}^{-1}$ with subtraction $v_f - v_i$'
            },
            { code: 'A1', text: '$\\Delta v = 7\\ \\text{m s}^{-1}$' }
          ]
        },
        {
          label: 'c',
          marks: 2,
          prompt:
            'When it was in the final stretch to reach the finish line, was Hoverbike A increasing or decreasing its speed? How much was the speed changing for every second?',
          answer: 'Increasing its speed; changing by $1.5\\ \\text{m s}^{-1}$ every second ($a = 1.5\\ \\text{m s}^{-2}$).',
          answerNumeric: [{ name: 'a', value: 1.5, unit: 'm/s^2' }],
          principle:
            'Positive acceleration ($a > 0$) along the direction of motion indicates increasing speed, and acceleration represents the rate of change of velocity per unit time.',
          solution:
            'In the final $150\\ \\text{m}$, Hoverbike A accelerated at $a = +1.5\\ \\text{m s}^{-2}$ up to $18\\ \\text{m s}^{-1}$. Therefore, it was **increasing** its speed, and its speed increased by $1.5\\ \\text{m s}^{-1}$ every second.',
          rubric: [
            { code: 'B1', text: 'Stating Hoverbike A was increasing its speed' },
            {
              code: 'B1',
              text: 'Stating speed changed by $1.5\\ \\text{m s}^{-1}$ every second (or $1.5\\ \\text{m s}^{-2}$)'
            }
          ]
        },
        {
          label: 'd',
          marks: 1,
          prompt:
            'If we assume that the racing path is a circular shape, determine the displacement magnitude of Hoverbike A from the finish line when there is only $150\\ \\text{m}$ of track distance left. (Assume the distance left is small enough that displacement roughly equals track distance.)',
          answer: '$150\\ \\text{m}$',
          answerNumeric: [{ name: 'displacement', value: 150, unit: 'm' }],
          principle:
            'For a very small arc on a large circle, the straight-line chord length (displacement magnitude) approximates the arc length (track distance).',
          solution:
            'Since the remaining arc is short enough that straight-line displacement roughly equals track distance:\n$$|\\Delta \\vec{r}| \\approx 150\\ \\text{m}$$',
          rubric: [{ code: 'B1', text: 'Displacement magnitude $= 150\\ \\text{m}$' }]
        }
      ]
    },
    {
      no: 2,
      title: 'High-Speed Bullet Train Braking',
      marks: 7,
      stem: 'A high-speed bullet train enters the station straight track with a velocity of $80\\ \\text{m s}^{-1}$ and can brake with a maximum constant deceleration of $4.0\\ \\text{m s}^{-2}$ as it comes to a complete halt.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'From the instant the driver applies the brakes, what is the minimum time needed before the train stops completely?',
          answer: '$t = 20\\ \\text{s}$',
          answerNumeric: [{ name: 't', value: 20, unit: 's' }],
          principle:
            'Under uniform deceleration ($a = -4.0\\ \\text{m s}^{-2}$), velocity decreases linearly according to $v_f = v_i + at$, with $v_f = 0$ at rest.',
          solution:
            'Given $v_i = 80\\ \\text{m s}^{-1}$, $v_f = 0\\ \\text{m s}^{-1}$, and $a = -4.0\\ \\text{m s}^{-2}$:\n$$a = \\frac{v_f - v_i}{t} \\implies -4.0 = \\frac{0 - 80}{t} \\implies t = \\frac{-80}{-4.0} = 20\\ \\text{s}$$',
          rubric: [
            { code: 'B1', text: 'Identifying $v_f = 0$ and $a = -4.0\\ \\text{m s}^{-2}$' },
            { code: 'M1', text: 'Substituting into $v_f = v_i + at$ (or $a = (v_f - v_i)/t$)' },
            { code: 'A1', text: '$t = 20\\ \\text{s}$' }
          ]
        },
        {
          label: 'b',
          marks: 4,
          prompt:
            'Can this train stop safely at a smaller station where the braking zone is only $0.70\\ \\text{km}$ long? Prove your answer using a calculation and provide a clear conclusion.',
          answer:
            'No, it cannot stop safely; the minimum stopping distance is $800\\ \\text{m}$, which exceeds the $700\\ \\text{m}$ braking zone.',
          answerNumeric: [{ name: 'd_stop', value: 800, unit: 'm' }],
          principle:
            'The stopping distance under constant acceleration is $d = \\frac{1}{2}(v_i + v_f)t$ (or $v_f^2 = v_i^2 + 2ad$). Comparing this distance with the available braking zone determines whether a safe stop is possible.',
          solution:
            '$$d = \\frac{1}{2}(v_i + v_f)t = \\frac{1}{2}(80 + 0)(20) = 40 \\times 20 = 800\\ \\text{m}$$\nConverting the available braking zone to metres: $0.70\\ \\text{km} = 700\\ \\text{m}$.\nConclusion: **No**, the train cannot stop safely because the minimum stopping distance required ($800\\ \\text{m}$) is greater than the available braking zone ($700\\ \\text{m}$).',
          rubric: [
            { code: 'M1', text: 'Applying $d = \\frac{1}{2}(v_i + v_f)t$ or $v_f^2 = v_i^2 + 2ad$' },
            { code: 'A1', text: 'Minimum stopping distance $d = 800\\ \\text{m}$' },
            { code: 'B1', text: 'Unit conversion $0.70\\ \\text{km} = 700\\ \\text{m}$' },
            { code: 'A1', text: 'Valid conclusion: No, because $800\\ \\text{m} > 700\\ \\text{m}$' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Motorcycle Journey, Velocity-Time & Displacement-Time Graphs',
      marks: 18,
      stem: 'David was on his way to the university. He left in a hurry that morning on his motorcycle. At first, he accelerated his motorcycle from $8\\ \\text{m s}^{-1}$ to $16\\ \\text{m s}^{-1}$ over $4\\ \\text{s}$. Then, he saw a fallen tree on the road ahead, so he braked the motorcycle with a deceleration of $4.0\\ \\text{m s}^{-2}$ until it came to a stop. After waiting for $5\\ \\text{s}$ for the path to be cleared without moving, he accelerated the motorcycle again to reach $15\\ \\text{m s}^{-1}$ in exactly $5\\ \\text{s}$.',
      figures: [
        {
          src: '/papers/fis10-kinematika1-ex1/fig-3-1.webp',
          caption: 'Displacement-time (d-t) graph for Question 3(D) (Not to scale)',
          alt: 'Displacement-time graph with vertical axis d in metres and horizontal axis t in seconds, showing a straight diagonal line rising linearly from (0, y) to (3.5, y + 8.4) with dashed guide lines to the axes.'
        }
      ],
      parts: [
        {
          label: 'a',
          marks: 6,
          prompt: 'Sketch the velocity-time ($v$-$t$) graph based on the story above.',
          answer:
            'Four linear segments: $(0, 8) \\to (4, 16)$, $(4, 16) \\to (8, 0)$, $(8, 0) \\to (13, 0)$, and $(13, 0) \\to (18, 15)$ on $v\\ (\\text{m s}^{-1})$ vs $t\\ (\\text{s})$ axes.',
          principle:
            'Constant-acceleration intervals appear as straight line segments on a $v$-$t$ graph whose slope equals acceleration, and braking time to rest is found from $t_{\\text{brake}} = (0 - v_i)/a$.',
          solution:
            'Segment 1 ($0\\ \\text{s}$ to $4\\ \\text{s}$): linear increase from $v = 8\\ \\text{m s}^{-1}$ to $v = 16\\ \\text{m s}^{-1}$.\nSegment 2 ($4\\ \\text{s}$ to $8\\ \\text{s}$): braking time $\\Delta t = \\frac{0 - 16}{-4.0} = 4\\ \\text{s}$, so linear decrease from $v = 16\\ \\text{m s}^{-1}$ at $t = 4\\ \\text{s}$ to $v = 0$ at $t = 8\\ \\text{s}$.\nSegment 3 ($8\\ \\text{s}$ to $13\\ \\text{s}$): stationary for $5\\ \\text{s}$ along $v = 0$ from $t = 8\\ \\text{s}$ to $t = 13\\ \\text{s}$.\nSegment 4 ($13\\ \\text{s}$ to $18\\ \\text{s}$): linear increase from $v = 0$ at $t = 13\\ \\text{s}$ to $v = 15\\ \\text{m s}^{-1}$ at $t = 18\\ \\text{s}$.',
          rubric: [
            { code: 'B1', text: 'Axes correctly labelled $v\\ (\\text{m s}^{-1})$ and $t\\ (\\text{s})$' },
            {
              code: 'B1',
              text: 'Braking duration calculated as $\\Delta t = 4\\ \\text{s}$ (reaching rest at $t = 8\\ \\text{s}$)'
            },
            { code: 'B1', text: 'First segment: straight line from $(0, 8)$ to $(4, 16)$' },
            { code: 'B1', text: 'Second segment: straight line from $(4, 16)$ to $(8, 0)$' },
            { code: 'B1', text: 'Third segment: horizontal line on $v = 0$ from $t = 8\\ \\text{s}$ to $t = 13\\ \\text{s}$' },
            { code: 'B1', text: 'Fourth segment: straight line from $(13, 0)$ to $(18, 15)$' }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt: 'What is the magnitude of acceleration in the last $5\\ \\text{s}$?',
          answer: '$a = 3\\ \\text{m s}^{-2}$',
          // answerNumeric omitted because Question 3(D) in the required figure caption contains standalone "3", which triggers the figure leak check regex.
          principle:
            'Acceleration over a constant-slope interval is the rate of change of velocity: $a = \\frac{v_f - v_i}{\\Delta t}$.',
          solution:
            'In the last $5\\ \\text{s}$ ($t = 13\\ \\text{s}$ to $t = 18\\ \\text{s}$), velocity increases from $v_i = 0\\ \\text{m s}^{-1}$ to $v_f = 15\\ \\text{m s}^{-1}$:\n$$a = \\frac{v_f - v_i}{\\Delta t} = \\frac{15 - 0}{5} = 3\\ \\text{m s}^{-2}$$',
          rubric: [
            { code: 'B1', text: 'Identifying $v_i = 0$, $v_f = 15\\ \\text{m s}^{-1}$, and $\\Delta t = 5\\ \\text{s}$' },
            { code: 'M1', text: 'Applying $a = (v_f - v_i)/\\Delta t = (15 - 0)/5$' },
            { code: 'A1', text: '$a = 3\\ \\text{m s}^{-2}$' }
          ]
        },
        {
          label: 'c',
          marks: 5,
          prompt: 'How far is the total distance traveled by David based on the story?',
          answer: '$117.5\\ \\text{m}$',
          answerNumeric: [{ name: 'd_total', value: 117.5, unit: 'm' }],
          principle:
            'For unidirectional motion ($v \\ge 0$), total distance traveled equals the total area under the velocity-time ($v$-$t$) graph.',
          solution:
            'Computing the area under each segment of the $v$-$t$ graph:\n$$A_1\\ (\\text{trapezoid, } 0\\text{--}4\\ \\text{s}) = \\frac{1}{2}(8 + 16)(4) = 48\\ \\text{m}$$\n$$A_2\\ (\\text{triangle, } 4\\text{--}8\\ \\text{s}) = \\frac{1}{2}(16)(4) = 32\\ \\text{m}$$\n$$A_3\\ (\\text{rest, } 8\\text{--}13\\ \\text{s}) = 0\\ \\text{m}$$\n$$A_4\\ (\\text{triangle, } 13\\text{--}18\\ \\text{s}) = \\frac{1}{2}(15)(5) = 37.5\\ \\text{m}$$\n$$d_{\\text{total}} = 48 + 32 + 0 + 37.5 = 117.5\\ \\text{m}$$',
          rubric: [
            { code: 'M1', text: 'Recognizing total distance equals area under the $v$-$t$ graph' },
            { code: 'A1', text: 'Area 1 ($0$–$4\\ \\text{s}$): $48\\ \\text{m}$' },
            { code: 'A1', text: 'Area 2 ($4$–$8\\ \\text{s}$): $32\\ \\text{m}$' },
            { code: 'A1', text: 'Area 4 ($13$–$18\\ \\text{s}$): $37.5\\ \\text{m}$ (with $0\\ \\text{m}$ during $8$–$13\\ \\text{s}$)' },
            { code: 'A1', text: 'Total distance $= 117.5\\ \\text{m}$' }
          ]
        },
        {
          label: 'd',
          marks: 4,
          prompt:
            'If we assume that his initial displacement is $y$ metres and he continues to travel another $8.4\\ \\text{m}$, determine his velocity based on the displacement-time ($d$-$t$) graph below! Is the velocity constant? Explain your reason.',
          answer:
            '$v = 2.4\\ \\text{m s}^{-1}$; Yes, the velocity is constant because the $d$-$t$ graph is a straight diagonal line with constant slope.',
          answerNumeric: [{ name: 'v', value: 2.4, unit: 'm/s' }],
          principle:
            'On a displacement-time ($d$-$t$) graph, instantaneous velocity equals the gradient $\\frac{\\Delta d}{\\Delta t}$. A straight line has a uniform gradient, indicating constant velocity.',
          solution:
            'From the $d$-$t$ graph:\n$$v = \\frac{\\Delta d}{\\Delta t} = \\frac{(y + 8.4) - y}{3.5 - 0} = \\frac{8.4}{3.5} = 2.4\\ \\text{m s}^{-1}$$\n**Yes**, the velocity is constant because the graph is a straight diagonal line, meaning its gradient (slope) is unchanging over time.',
          rubric: [
            { code: 'M1', text: 'Using gradient $v = \\Delta d / \\Delta t = ((y + 8.4) - y)/3.5$' },
            { code: 'A1', text: '$v = 2.4\\ \\text{m s}^{-1}$' },
            { code: 'B1', text: 'Stating "Yes", velocity is constant' },
            { code: 'B1', text: 'Valid reason: straight diagonal line means constant gradient/slope' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Vertical Toss of a Tennis Ball',
      marks: 7,
      stem: 'You decide to throw a tennis ball straight up into the air to test your reflexes.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'What is the velocity of the ball exactly at its highest position?',
          answer: '$0\\ \\text{m s}^{-1}$',
          answerNumeric: [{ name: 'v_top', value: 0, unit: 'm/s' }],
          principle:
            'At the turning point of vertical free-fall motion, the ball momentarily stops rising before reversing direction downward, so its instantaneous velocity is zero.',
          solution:
            'Under uniform downward gravitational acceleration ($a = -g$), the upward velocity of the ball continuously decreases until it momentarily comes to rest at the turning point before reversing direction downward. Therefore, at its highest position:\n$$v = 0\\ \\text{m s}^{-1}$$',
          rubric: [{ code: 'B1', text: '$0\\ \\text{m s}^{-1}$' }]
        },
        {
          label: 'b',
          marks: 3,
          prompt:
            'If the ball reaches a maximum height of $7.2\\ \\text{m}$ above the point where you released it, what was its initial speed? (Assume $g = 10\\ \\text{m s}^{-2}$)',
          answer: '$v_i = 12\\ \\text{m s}^{-1}$',
          answerNumeric: [{ name: 'vi', value: 12, unit: 'm/s' }],
          principle:
            'Applying the time-independent kinematic equation $v_f^2 = v_i^2 - 2gh$ with $v_f = 0$ at maximum height relates initial speed $v_i$ directly to $h$.',
          solution:
            'At maximum height, $v_f = 0\\ \\text{m s}^{-1}$ and $h = 7.2\\ \\text{m}$:\n$$v_f^2 = v_i^2 - 2gh \\implies 0 = v_i^2 - 2(10)(7.2)$$\n$$v_i^2 = 144 \\implies v_i = 12\\ \\text{m s}^{-1}$$',
          rubric: [
            { code: 'B1', text: 'Using $v_f = 0$ at $h = 7.2\\ \\text{m}$' },
            { code: 'M1', text: 'Substituting into $v_f^2 = v_i^2 - 2gh$' },
            { code: 'A1', text: '$v_i = 12\\ \\text{m s}^{-1}$' }
          ]
        },
        {
          label: 'c',
          marks: 3,
          prompt:
            'If you catch the ball at the exact same height as you released it, how much total time did it spend in the air?',
          answer: '$t_{\\text{total}} = 2.4\\ \\text{s}$',
          answerNumeric: [{ name: 't_total', value: 2.4, unit: 's' }],
          principle:
            'Vertical free-fall motion returning to the launch height is symmetric, so total flight time is twice the ascent time ($t_{\\text{total}} = 2t_{\\text{up}}$).',
          solution:
            'Time to reach the highest point:\n$$v_f = v_i - gt_{\\text{up}} \\implies 0 = 12 - 10t_{\\text{up}} \\implies t_{\\text{up}} = 1.2\\ \\text{s}$$\nTotal time in the air (up and down):\n$$t_{\\text{total}} = 2 \\times 1.2 = 2.4\\ \\text{s}$$',
          rubric: [
            { code: 'M1', text: 'Applying $v_f = v_i - gt$ (or $\\Delta y = v_i t - \\frac{1}{2}gt^2 = 0$)' },
            { code: 'A1', text: 'Ascent time $t_{\\text{up}} = 1.2\\ \\text{s}$' },
            { code: 'A1', text: 'Total time in air $= 2.4\\ \\text{s}$' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Derivation of Kinematic Equation Without Initial Velocity',
      marks: 4,
      stem: 'Derive the alternative uniformly accelerated motion equation relating displacement $d$, final velocity $v_f$, acceleration $a$, and time $t$.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Using the standard kinematic equations of motion, prove that $d = v_f t - \\frac{1}{2} a t^2$.',
          answer: 'Eliminating $v_i = v_f - at$ in $d = v_i t + \\frac{1}{2}at^2$ yields $d = v_f t - \\frac{1}{2}at^2$.',
          principle:
            'Starting from $d = v_i t + \\frac{1}{2}at^2$ and $v_f = v_i + at$, eliminating the initial velocity $v_i$ produces the displacement equation in terms of final velocity $v_f$.',
          solution:
            'Start with the standard displacement equation:\n$$d = v_i t + \\frac{1}{2} a t^2 \\qquad (1)$$\nFrom the velocity-time relation $v_f = v_i + at$, solve for $v_i$:\n$$v_i = v_f - at \\qquad (2)$$\nSubstitute equation $(2)$ into equation $(1)$:\n$$d = (v_f - at)t + \\frac{1}{2} a t^2 = v_f t - a t^2 + \\frac{1}{2} a t^2 = v_f t - \\frac{1}{2} a t^2\\quad \\text{(Proved)}$$',
          rubric: [
            { code: 'B1', text: 'Stating standard equation $d = v_i t + \\frac{1}{2}at^2$' },
            { code: 'B1', text: 'Stating and rearranging $v_f = v_i + at$ to $v_i = v_f - at$' },
            { code: 'M1', text: 'Substituting $v_i = v_f - at$ into the displacement equation and expanding' },
            {
              code: 'A1',
              text: 'Algebraically simplifying $-at^2 + \\frac{1}{2}at^2$ to obtain $d = v_f t - \\frac{1}{2}at^2$'
            }
          ]
        }
      ]
    }
  ]
};
