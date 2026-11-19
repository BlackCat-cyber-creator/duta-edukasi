/**
 * Paket Soal Terstruktur: Physics Grade 10 – Kinematics II (Advanced Exercise)
 * Sumber: Physics Kinematics Advanced Exercise.pdf (Duta e-dukasi).
 * Bahasa dipertahankan dalam Bahasa Inggris sesuai dokumen sumber.
 */
export default {
  id: 'fis10-kinematika2-adv',
  slug: 'kinematika-2-lanjutan',
  subject: 'fisika',
  grade: 10,
  track: 'cambridge-style',
  topic: 'Kinematika Lanjutan – Gerak Lurus, Reaksi & Grafik',
  relatedChapterIds: ['ipa10-bab2-vektor-dan-gerak-lurus'],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'Fisika SMA',
  title: 'Physics Grade 10 – Kinematics II (Advanced Exercise)',
  totalMarks: 41,
  instructions:
    'Answer the following questions clearly. Show your complete steps and calculations if needed. Take $g = 10\\ \\text{m s}^{-2}$ where applicable and neglect air resistance.',
  constants: ['g = 10\\ \\text{m s}^{-2}'],
  source: {
    org: 'Duta e-dukasi',
    file: 'Physics Kinematics Advanced Exercise.pdf',
    driveFolder: '1kCaCbtsKZZQa-aswV7FHEPRJu7QJduPB',
    license: 'CC BY 4.0'
  },
  status: 'published',
  accessTier: 'free',
  questions: [
    {
      no: 1,
      title: 'Autonomous Rovers on a 2,500 m Track',
      marks: 8,
      stem: 'Two autonomous experimental rovers, $\\text{X}$ and $\\text{Y}$, are being tested on a $2,500\\ \\text{m}$ track. Rover $\\text{X}$ passes the starting line with an initial velocity of $15\\ \\text{m s}^{-1}$, accelerating steadily at $0.8\\ \\text{m s}^{-2}$. Rover $\\text{Y}$ experiences a slight system delay and only crosses the starting line exactly $4.0\\ \\text{s}$ after Rover $\\text{X}$. Rover $\\text{Y}$ starts from rest ($0\\ \\text{m s}^{-1}$) but engages a powerful thruster that provides a constant acceleration of $3.0\\ \\text{m s}^{-2}$. Both rovers maintain their respective accelerations as they race towards the finish line.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            "Where is Rover $\\text{X}$'s position relative to the starting line when it has exactly $200\\ \\text{m}$ left to reach the finish line?",
          answer: '$2,300\\ \\text{m}$ from the starting line',
          answerNumeric: [{ name: 'd', value: 2300, unit: 'm' }],
          principle:
            'The position relative to the starting line equals the total track length minus the remaining distance to the finish line.',
          solution: '$$x = 2,500 - 200 = 2,300\\ \\text{m}$$',
          rubric: [{ code: 'A1', text: 'Position from starting line $= 2,300\\ \\text{m}$' }]
        },
        {
          label: 'b',
          marks: 3,
          prompt:
            'Determine the exact difference in speed between Rover $\\text{X}$ and Rover $\\text{Y}$ exactly at $t = 10\\ \\text{s}$ after Rover $\\text{X}$ started.',
          answer: '$5\\ \\text{m s}^{-1}$',
          answerNumeric: [{ name: 'dv', value: 5, unit: 'm/s' }],
          principle:
            'Under constant acceleration, instantaneous speed is $v_f = v_i + at$. Because Rover $\\text{Y}$ starts $4.0\\ \\text{s}$ after Rover $\\text{X}$, its elapsed acceleration time at $t = 10\\ \\text{s}$ is $t_{\\text{Y}} = 10 - 4.0 = 6.0\\ \\text{s}$.',
          solution:
            '$$v_{f\\text{X}} = v_{i\\text{X}} + a_{\\text{X}} t_{\\text{X}} = 15 + 0.8(10) = 15 + 8 = 23\\ \\text{m s}^{-1}$$\n$$t_{\\text{Y}} = 10 - 4.0 = 6.0\\ \\text{s} \\implies v_{f\\text{Y}} = v_{i\\text{Y}} + a_{\\text{Y}} t_{\\text{Y}} = 0 + 3.0(6.0) = 18\\ \\text{m s}^{-1}$$\n$$\\Delta v = |v_{f\\text{X}} - v_{f\\text{Y}}| = 23 - 18 = 5\\ \\text{m s}^{-1}$$',
          rubric: [
            { code: 'M1', text: 'Calculating $v_{f\\text{X}} = 15 + 0.8(10) = 23\\ \\text{m s}^{-1}$' },
            { code: 'M1', text: 'Using $t_{\\text{Y}} = 10 - 4.0 = 6.0\\ \\text{s}$ to get $v_{f\\text{Y}} = 18\\ \\text{m s}^{-1}$' },
            { code: 'A1', text: 'Speed difference $= 5\\ \\text{m s}^{-1}$' }
          ]
        },
        {
          label: 'c',
          marks: 2,
          prompt:
            'If Rover $\\text{Y}$ suddenly applies its emergency brakes at the $2,000\\ \\text{m}$ mark and its speed decreases by $2.5\\ \\text{m s}^{-1}$ every second, is it accelerating or decelerating? State its acceleration value.',
          answer: 'Decelerating; $a = -2.5\\ \\text{m s}^{-2}$',
          answerNumeric: [{ name: 'a', value: -2.5, unit: 'm/s^2' }],
          principle:
            'When an object’s speed decreases over time while moving in the positive direction, it is decelerating and its acceleration has a negative sign.',
          solution:
            'Because its speed decreases by $2.5\\ \\text{m s}^{-1}$ every second, Rover $\\text{Y}$ is decelerating.\n$$a = \\frac{\\Delta v}{\\Delta t} = -2.5\\ \\text{m s}^{-2}$$',
          rubric: [
            { code: 'B1', text: 'Stating that Rover $\\text{Y}$ is decelerating (since its speed decreases)' },
            { code: 'A1', text: 'Acceleration value $a = -2.5\\ \\text{m s}^{-2}$' }
          ]
        },
        {
          label: 'd',
          marks: 2,
          prompt:
            'Assume the $2,500\\ \\text{m}$ test track is perfectly circular. Determine the magnitude of displacement of Rover $\\text{X}$ from the starting point exactly when it reaches the $1,250\\ \\text{m}$ mark of the track.',
          answer: '$\\dfrac{2500}{\\pi}\\ \\text{m}\\ (\\approx 795.8\\ \\text{m})$',
          answerNumeric: [{ name: 'd', value: 795.8, unit: 'm' }],
          principle:
            'Reaching the $1,250\\ \\text{m}$ mark along a $2,500\\ \\text{m}$ circular circumference means completing exactly half a revolution, so the straight-line displacement equals the circle’s diameter $D = C/\\pi$.',
          solution:
            '$$C = \\pi D \\implies 2500 = \\pi D \\implies D = \\frac{2500}{\\pi}\\ \\text{m} \\approx 795.8\\ \\text{m}$$',
          rubric: [
            { code: 'M1', text: 'Recognizing half-circle path gives displacement equal to diameter $D = C/\\pi$' },
            { code: 'A1', text: '$\\dfrac{2500}{\\pi}\\ \\text{m}$ (or $\\approx 795.8\\ \\text{m}$)' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Reaction Time and Emergency Braking',
      marks: 7,
      stem: 'A driver in a sports car is cruising down a straight highway with a velocity of $45\\ \\text{m s}^{-1}$. Suddenly, a large deer jumps onto the road exactly $120\\ \\text{m}$ ahead of the car. The driver has a reaction time of $0.8\\ \\text{s}$ before their foot physically presses the brake pedal. Once pressed, the brakes provide a maximum constant deceleration of $10\\ \\text{m s}^{-2}$.',
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'From the exact moment the driver sees the deer, what is the total time needed for the car to come to a complete stop?',
          answer: '$t_{\\text{total}} = 5.3\\ \\text{s}$',
          answerNumeric: [{ name: 't', value: 5.3, unit: 's' }],
          principle:
            'Total stopping time is the sum of the reaction time (at constant velocity) and the braking time (uniform deceleration to $v_f = 0$).',
          solution:
            'Reaction time: $t_r = 0.8\\ \\text{s}$.\nBraking time:\n$$v_f = v_i + at_b \\implies 0 = 45 - 10t_b \\implies 10t_b = 45 \\implies t_b = 4.5\\ \\text{s}$$\nTotal time:\n$$t_{\\text{total}} = t_r + t_b = 0.8 + 4.5 = 5.3\\ \\text{s}$$',
          rubric: [
            { code: 'B1', text: 'Including reaction time $t_r = 0.8\\ \\text{s}$' },
            { code: 'M1', text: 'Using $v_f = v_i + at$ to obtain braking time $t_b = 4.5\\ \\text{s}$' },
            { code: 'A1', text: 'Total stopping time $t_{\\text{total}} = 5.3\\ \\text{s}$' }
          ]
        },
        {
          label: 'b',
          marks: 4,
          prompt:
            'Will the car hit the deer before stopping? Prove your answer by calculating the total stopping distance and providing a clear conclusion.',
          answer: '$d_{\\text{total}} = 137.25\\ \\text{m}$; yes, the car will hit the deer',
          answerNumeric: [{ name: 'd_total', value: 137.25, unit: 'm' }],
          principle:
            'During reaction time the car travels at constant velocity ($d_r = v t_r$), and during braking it decelerates uniformly ($v_f^2 = v_i^2 + 2ad_b$). Comparing $d_r + d_b$ with $120\\ \\text{m}$ determines whether a collision occurs.',
          solution:
            'Reaction distance:\n$$d_r = v t_r = 45 \\times 0.8 = 36\\ \\text{m}$$\nBraking distance:\n$$v_f^2 = v_i^2 + 2ad_b \\implies 0 = 45^2 + 2(-10)d_b \\implies 20d_b = 2025 \\implies d_b = 101.25\\ \\text{m}$$\nTotal stopping distance:\n$$d_{\\text{total}} = d_r + d_b = 36 + 101.25 = 137.25\\ \\text{m}$$\nConclusion: Yes, the car will hit the deer because the total stopping distance ($137.25\\ \\text{m}$) is greater than the distance to the deer ($120\\ \\text{m}$).',
          rubric: [
            { code: 'M1', text: 'Calculating reaction distance $d_r = 45 \\times 0.8 = 36\\ \\text{m}$' },
            { code: 'M1', text: 'Calculating braking distance $d_b = 101.25\\ \\text{m}$ using $v_f^2 = v_i^2 + 2ad_b$' },
            { code: 'A1', text: 'Total stopping distance $d_{\\text{total}} = 137.25\\ \\text{m}$' },
            { code: 'A1', text: 'Valid conclusion: car hits the deer since $137.25\\ \\text{m} > 120\\ \\text{m}$' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Rocket-Powered Bicycle and Motion Graphs',
      marks: 14,
      stem: 'Sarah is testing a newly invented rocket-powered bicycle. Starting from rest, she accelerates uniformly to reach $24\\ \\text{m s}^{-1}$ in $6\\ \\text{s}$. She then maintains this constant speed for $4\\ \\text{s}$. Suddenly, a drag-parachute accidentally deploys, causing a harsh deceleration of $6\\ \\text{m s}^{-2}$ until her speed drops to $6\\ \\text{m s}^{-1}$. She maintains this $6\\ \\text{m s}^{-1}$ speed for $5\\ \\text{s}$ before gently braking to a complete stop over the final $3\\ \\text{s}$.',
      figures: [
        {
          src: '/papers/fis10-kinematika2-adv/fig-3-1.webp',
          caption: 'Displacement-time (d-t) graph for Question 3(C) (Not to scale)',
          alt: 'Displacement-time graph with d (m) on the vertical axis and t (s) on the horizontal axis, showing a straight line descending uniformly from 200 m at t = 0 s to 50 m at t = 10.0 s.'
        }
      ],
      parts: [
        {
          label: 'a',
          marks: 6,
          prompt:
            'Sketch the velocity-time ($v$-$t$) graph representing the entire journey based on the story.',
          answer:
            'Piecewise linear $v$-$t$ graph through $(0,0) \\to (6,24) \\to (10,24) \\to (13,6) \\to (18,6) \\to (21,0)$',
          principle:
            'Constant acceleration produces straight-line segments on a $v$-$t$ graph, while constant velocity produces horizontal segments. The parachute deceleration time is $\\Delta t = \\frac{v_f - v_i}{a} = \\frac{6 - 24}{-6} = 3\\ \\text{s}$.',
          solution:
            'Label horizontal axis $t\\ (\\text{s})$ and vertical axis $v\\ (\\text{m s}^{-1})$, then plot five straight segments:\n1. $t = 0$ to $6\\ \\text{s}$: linear rise from $0$ to $24\\ \\text{m s}^{-1}$.\n2. $t = 6$ to $10\\ \\text{s}$: horizontal line at $24\\ \\text{m s}^{-1}$.\n3. $t = 10$ to $13\\ \\text{s}$ (duration $\\Delta t = \\frac{6 - 24}{-6} = 3\\ \\text{s}$): linear drop from $24$ to $6\\ \\text{m s}^{-1}$.\n4. $t = 13$ to $18\\ \\text{s}$: horizontal line at $6\\ \\text{m s}^{-1}$.\n5. $t = 18$ to $21\\ \\text{s}$: linear drop from $6$ to $0\\ \\text{m s}^{-1}$.',
          rubric: [
            { code: 'B1', text: 'Axes properly labelled with $t\\ (\\text{s})$ and $v\\ (\\text{m s}^{-1})$ and key values ($6, 24$ and $6, 10, 13, 18, 21$)' },
            { code: 'B1', text: 'Straight line from $(0, 0)$ to $(6, 24)$' },
            { code: 'B1', text: 'Horizontal line from $(6, 24)$ to $(10, 24)$' },
            { code: 'M1', text: 'Correctly calculating deceleration duration $3\\ \\text{s}$ to mark $t = 13\\ \\text{s}$' },
            { code: 'B1', text: 'Straight line from $(10, 24)$ down to $(13, 6)$ and horizontal from $(13, 6)$ to $(18, 6)$' },
            { code: 'B1', text: 'Straight line from $(18, 6)$ down to $(21, 0)$' }
          ]
        },
        {
          label: 'b',
          marks: 4,
          prompt: 'Calculate the total distance Sarah traveled during this entire test run.',
          answer: '$252\\ \\text{m}$',
          answerNumeric: [{ name: 'd', value: 252, unit: 'm' }],
          principle:
            'The total distance traveled in one-directional motion equals the total area under the velocity-time ($v$-$t$) graph.',
          solution:
            'Area 1 (Triangle, $0$–$6\\ \\text{s}$): $\\tfrac{1}{2} \\times 6 \\times 24 = 72\\ \\text{m}$\nArea 2 (Rectangle, $6$–$10\\ \\text{s}$): $4 \\times 24 = 96\\ \\text{m}$\nArea 3 (Trapezoid, $10$–$13\\ \\text{s}$): $\\tfrac{1}{2} \\times (24 + 6) \\times 3 = 45\\ \\text{m}$\nArea 4 (Rectangle, $13$–$18\\ \\text{s}$): $5 \\times 6 = 30\\ \\text{m}$\nArea 5 (Triangle, $18$–$21\\ \\text{s}$): $\\tfrac{1}{2} \\times 3 \\times 6 = 9\\ \\text{m}$\n$$d_{\\text{total}} = 72 + 96 + 45 + 30 + 9 = 252\\ \\text{m}$$',
          rubric: [
            { code: 'M1', text: 'Using total area under the $v$-$t$ graph' },
            { code: 'M1', text: 'Computing areas for first three stages ($72\\ \\text{m}$, $96\\ \\text{m}$, $45\\ \\text{m}$)' },
            { code: 'A1', text: 'Computing areas for final two stages ($30\\ \\text{m}$, $9\\ \\text{m}$)' },
            { code: 'A1', text: 'Total distance $= 252\\ \\text{m}$' }
          ]
        },
        {
          label: 'c',
          marks: 4,
          prompt:
            'Analyze the displacement-time ($d$-$t$) graph in the figure, which represents a different vehicle returning to its base. Determine its velocity. Is the velocity constant, and in what direction is it moving?',
          answer:
            '$v = -15\\ \\text{m s}^{-1}$; yes, the velocity is constant; moving in the opposite direction (returning backwards)',
          answerNumeric: [{ name: 'v', value: -15, unit: 'm/s' }],
          principle:
            'The velocity of an object is equal to the gradient (slope) of its displacement-time ($d$-$t$) graph. A straight line indicates constant velocity, and a negative slope indicates motion opposite to the positive reference direction.',
          solution:
            '$$v = \\frac{d_f - d_i}{t_f - t_i} = \\frac{50 - 200}{10.0 - 0} = \\frac{-150}{10.0} = -15\\ \\text{m s}^{-1}$$\nYes, the velocity is constant because the graph is a straight line with a uniform slope. The negative sign indicates the vehicle is moving in the opposite direction (returning backwards toward its base).',
          rubric: [
            { code: 'M1', text: 'Computing gradient $v = \\frac{50 - 200}{10.0 - 0}$' },
            { code: 'A1', text: 'Velocity $v = -15\\ \\text{m s}^{-1}$' },
            { code: 'B1', text: 'Stating velocity is constant because the $d$-$t$ graph is a straight line' },
            { code: 'B1', text: 'Stating opposite/backwards direction indicated by the negative slope' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Vertical Throw from a Balcony',
      marks: 8,
      stem: 'You stand on the edge of a balcony that is $15\\ \\text{m}$ above the ground. You throw a heavy ball straight up into the air with an initial velocity of $10\\ \\text{m s}^{-1}$. (Assume air resistance is negligible and $g = 10\\ \\text{m s}^{-2}$.)',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'What is the velocity of the ball at its highest point?',
          answer: '$0\\ \\text{m s}^{-1}$',
          answerNumeric: [{ name: 'v', value: 0, unit: 'm/s' }],
          principle:
            'At the apex of vertical free-fall motion, the ball momentarily stops rising before reversing direction, so its instantaneous velocity is zero.',
          solution: '$$v_{\\text{peak}} = 0\\ \\text{m s}^{-1}$$',
          rubric: [{ code: 'B1', text: 'Stating $0\\ \\text{m s}^{-1}$ at the highest point' }]
        },
        {
          label: 'b',
          marks: 3,
          prompt: 'What is the maximum height the ball reaches measured from the ground?',
          answer: '$H_{\\max} = 20\\ \\text{m}$',
          answerNumeric: [{ name: 'Hmax', value: 20, unit: 'm' }],
          principle:
            'The maximum height above the ground equals the balcony height ($15\\ \\text{m}$) plus the vertical rise $\\Delta h$ gained until $v_f = 0$.',
          solution:
            '$$v_f^2 = v_i^2 - 2g\\Delta h \\implies 0 = 10^2 - 2(10)\\Delta h \\implies 20\\Delta h = 100 \\implies \\Delta h = 5\\ \\text{m}$$\n$$H_{\\max} = 15 + 5 = 20\\ \\text{m}$$',
          rubric: [
            { code: 'M1', text: 'Applying $v_f^2 = v_i^2 - 2g\\Delta h$ with $v_f = 0$' },
            { code: 'A1', text: 'Height gained above balcony $\\Delta h = 5\\ \\text{m}$' },
            { code: 'A1', text: 'Maximum height from ground $= 20\\ \\text{m}$' }
          ]
        },
        {
          label: 'c',
          marks: 4,
          prompt:
            'From the moment you throw it, how much total time does it take for the ball to finally hit the ground below?',
          answer: '$t = 3\\ \\text{s}$',
          answerNumeric: [{ name: 't', value: 3, unit: 's' }],
          principle:
            'Total flight time is the sum of the ascent time to the peak ($t_{\\text{up}}$) and the free-fall descent time from $20\\ \\text{m}$ to the ground ($t_{\\text{down}}$).',
          solution:
            'Time to go up:\n$$v_f = v_i - gt_{\\text{up}} \\implies 0 = 10 - 10t_{\\text{up}} \\implies t_{\\text{up}} = 1\\ \\text{s}$$\nTime to fall from $20\\ \\text{m}$ ($v_i = 0$):\n$$d = v_i t_{\\text{down}} + \\frac{1}{2}g t_{\\text{down}}^2 \\implies 20 = 0 + 5t_{\\text{down}}^2 \\implies t_{\\text{down}}^2 = 4 \\implies t_{\\text{down}} = 2\\ \\text{s}$$\n$$t_{\\text{total}} = t_{\\text{up}} + t_{\\text{down}} = 1 + 2 = 3\\ \\text{s}$$',
          rubric: [
            { code: 'M1', text: 'Calculating ascent time $t_{\\text{up}} = 1\\ \\text{s}$' },
            { code: 'M1', text: 'Applying $d = \\tfrac{1}{2}gt_{\\text{down}}^2$ for descent from $20\\ \\text{m}$' },
            { code: 'A1', text: 'Descent time $t_{\\text{down}} = 2\\ \\text{s}$' },
            { code: 'A1', text: 'Total time $t_{\\text{total}} = 3\\ \\text{s}$' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Derivation of the Timeless Kinematic Equation',
      marks: 4,
      stem: 'Using the standard kinematic equations of motion, prove the timeless equation: $v_f^2 = v_i^2 + 2ad$.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Prove that $v_f^2 = v_i^2 + 2ad$ starting from the standard kinematic equations of motion.',
          answer: '$v_f^2 = v_i^2 + 2ad$ (derived by eliminating $t$)',
          principle:
            'Combining the average-velocity displacement equation $d = \\frac{1}{2}(v_i + v_f)t$ with the velocity-time relation $v_f = v_i + at$ eliminates $t$ and yields the difference of squares.',
          solution:
            'Start with the two standard kinematic equations:\n$$(1)\\ d = \\frac{1}{2}(v_i + v_f)t \\qquad (2)\\ v_f = v_i + at$$\nRearrange equation $(2)$ to solve for $t$:\n$$t = \\frac{v_f - v_i}{a}$$\nSubstitute $t$ into equation $(1)$:\n$$d = \\frac{1}{2}(v_i + v_f)\\left(\\frac{v_f - v_i}{a}\\right) = \\frac{v_f^2 - v_i^2}{2a}$$\nMultiply both sides by $2a$ and rearrange:\n$$2ad = v_f^2 - v_i^2 \\implies v_f^2 = v_i^2 + 2ad$$',
          rubric: [
            { code: 'B1', text: 'Stating $d = \\tfrac{1}{2}(v_i + v_f)t$ and $v_f = v_i + at$' },
            { code: 'M1', text: 'Rearranging to $t = \\dfrac{v_f - v_i}{a}$ and substituting into $d$' },
            { code: 'M1', text: 'Expanding difference of squares to $d = \\dfrac{v_f^2 - v_i^2}{2a}$' },
            { code: 'A1', text: 'Rearranging cleanly to $v_f^2 = v_i^2 + 2ad$' }
          ]
        }
      ]
    }
  ]
};
