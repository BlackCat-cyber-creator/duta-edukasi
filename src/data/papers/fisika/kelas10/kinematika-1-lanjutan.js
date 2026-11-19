/**
 * Paket Soal Terstruktur: Physics Grade 10 – Kinematics I (Advanced Exercise)
 * Sumber: Duta e-dukasi (Advanced Kinematics Exercise.pdf).
 * Bahasa dipertahankan dalam Bahasa Inggris sesuai dokumen sumber.
 */
export default {
  id: 'fis10-kinematika1-adv',
  slug: 'kinematika-1-lanjutan',
  subject: 'fisika',
  grade: 10,
  track: 'cambridge-style',
  topic: 'Kinematika I Lanjutan – GLBB & Gerak Vertikal',
  relatedChapterIds: ['ipa10-bab2-vektor-dan-gerak-lurus'],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'Fisika SMA',
  title: 'Physics Grade 10 – Kinematics I (Advanced Exercise)',
  totalMarks: 40,
  instructions:
    'Answer the following questions and show your calculations clearly with appropriate SI units. Where required, take $g = 10\\ \\text{m s}^{-2}$ and neglect air resistance.',
  constants: ['g = 10\\ \\text{m s}^{-2}'],
  source: {
    org: 'Duta e-dukasi',
    file: 'Advanced Kinematics Exercise.pdf',
    driveFolder: '1kCaCbtsKZZQa-aswV7FHEPRJu7QJduPB',
    license: 'CC BY 4.0'
  },
  status: 'published',
  accessTier: 'free',
  questions: [
    {
      no: 1,
      title: 'Two Hypercars on a 2,500 m Track',
      marks: 7,
      stem: "The stadium trembled as two advanced electric hypercars, Car X and Car Y, burst forward on a $2{,}500\\ \\text{m}$ racing track. Car X shot ahead at $12\\ \\text{m s}^{-1}$, maintaining a steady acceleration of $0.8\\ \\text{m s}^{-2}$ as the race dragged on. Behind it, Car Y began slightly faster at $15\\ \\text{m s}^{-1}$, and its drive grew fiercer, accelerating by $1.2\\ \\text{m s}^{-2}$ until it passed the $1{,}000\\ \\text{m}$ mark. Step by step, they devoured the ground. In the final $200\\ \\text{m}$, Car X's driver summoned everything left, pushing harder with an acceleration of $3.5\\ \\text{m s}^{-2}$ until its speed roared at $35\\ \\text{m s}^{-1}$. Meanwhile, Car Y strained to reach a final speed of $32.5\\ \\text{m s}^{-1}$. The finish came in a heartbeat, the difference no more than $0.2\\ \\text{s}$, as the crowd erupted in thunder.",
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: "Where was Car X's position when it had $200\\ \\text{m}$ left to reach the finish line?",
          answer: '$2{,}300\\ \\text{m}$ from the starting line',
          answerNumeric: [{ name: 'position', value: 2300, unit: 'm' }],
          principle:
            'Position along a one-dimensional track measured from the starting line equals the total track length minus the remaining distance to the finish line.',
          solution: '$$\\text{Position} = 2{,}500\\ \\text{m} - 200\\ \\text{m} = 2{,}300\\ \\text{m}$$',
          rubric: [{ code: 'A1', text: '$2{,}300\\ \\text{m}$ from the starting line ($2{,}500 - 200 = 2{,}300\\ \\text{m}$)' }]
        },
        {
          label: 'b',
          marks: 1,
          prompt: "Mention Car Y's speed difference when the race started compared to when it ended!",
          answer: '$17.5\\ \\text{m s}^{-1}$',
          answerNumeric: [{ name: 'deltaV', value: 17.5, unit: 'm/s' }],
          principle:
            'The change in speed between the start and finish of the race is $\\Delta v = v_f - v_i$.',
          solution:
            'Given $v_i = 15\\ \\text{m s}^{-1}$ and $v_f = 32.5\\ \\text{m s}^{-1}$:\n$$\\Delta v = v_f - v_i = 32.5 - 15 = 17.5\\ \\text{m s}^{-1}$$',
          rubric: [{ code: 'A1', text: '$17.5\\ \\text{m s}^{-1}$ ($32.5 - 15 = 17.5\\ \\text{m s}^{-1}$)' }]
        },
        {
          label: 'c',
          marks: 2,
          prompt:
            'When about to reach the finish line, was Car X increasing or decreasing its speed? How much was the speed changing for every second?',
          answer: 'Increasing its speed (accelerating) by $3.5\\ \\text{m s}^{-1}$ every second.',
          answerNumeric: [{ name: 'a', value: 3.5, unit: 'm/s^2' }],
          principle:
            'A positive acceleration in the direction of motion means the object is speeding up, and the magnitude of acceleration indicates the rate of change of speed per second.',
          solution:
            'Car X was increasing its speed (accelerating). The passage states it was pushing harder with an acceleration of $a = 3.5\\ \\text{m s}^{-2}$, which means its speed increased by $3.5\\ \\text{m s}^{-1}$ every second.',
          rubric: [
            { code: 'B1', text: 'Identifying that Car X was increasing its speed (accelerating)' },
            { code: 'B1', text: 'Stating the speed was changing by $3.5\\ \\text{m s}^{-1}$ every second ($a = 3.5\\ \\text{m s}^{-2}$)' }
          ]
        },
        {
          label: 'd',
          marks: 3,
          prompt:
            "If we assume that the racing path is perfectly circular with a total circumference of $2{,}500\\ \\text{m}$, determine the magnitude of Car X's displacement from the starting line when it has exactly $1{,}250\\ \\text{m}$ left to reach the finish line.",
          answer: '$\\dfrac{2{,}500}{\\pi}\\ \\text{m}\\ (\\approx 795.77\\ \\text{m})$',
          answerNumeric: [{ name: 'displacement', value: 795.77, unit: 'm' }],
          principle:
            'Displacement is the straight-line vector distance between the initial and final positions. Traveling halfway around a circular track ($1{,}250\\ \\text{m}$ of a $2{,}500\\ \\text{m}$ circumference) places the car diametrically opposite the start, so the displacement magnitude equals the circle’s diameter $D$.',
          solution:
            'With $1{,}250\\ \\text{m}$ remaining out of $C = 2{,}500\\ \\text{m}$, Car X has traveled $2{,}500 - 1{,}250 = 1{,}250\\ \\text{m} = \\tfrac{1}{2}C$, placing it directly opposite the starting line across the circle’s diameter $D$.\n$$C = \\pi D \\implies 2{,}500 = \\pi D \\implies D = \\frac{2{,}500}{\\pi}\\ \\text{m} \\approx 795.77\\ \\text{m}$$',
          rubric: [
            { code: 'B1', text: 'Recognizing half the circumference ($1{,}250\\ \\text{m}$) gives a displacement equal to diameter $D$' },
            { code: 'M1', text: 'Applying $C = \\pi D \\implies D = 2{,}500 / \\pi$' },
            { code: 'A1', text: '$D = \\frac{2{,}500}{\\pi}\\ \\text{m} \\approx 795.77\\ \\text{m}$' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'High-Speed Maglev Train Braking',
      marks: 7,
      stem: 'A high-speed maglev train approaches a station with a velocity of $120\\ \\text{m s}^{-1}$ and can apply its brakes to accelerate at a maximum rate of $-4.0\\ \\text{m s}^{-2}$ as it comes to rest.',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'From the instant the brakes are applied, what is the minimum time needed before the train completely stops?',
          answer: '$t = 30\\ \\text{s}$',
          answerNumeric: [{ name: 't', value: 30, unit: 's' }],
          principle:
            'Under constant deceleration $a = -4.0\\ \\text{m s}^{-2}$ from $v_i = 120\\ \\text{m s}^{-1}$ to $v_f = 0\\ \\text{m s}^{-1}$, the stopping time is governed by $v_f = v_i + at$.',
          solution:
            'Given $v_i = 120\\ \\text{m s}^{-1}$, $v_f = 0\\ \\text{m s}^{-1}$, and $a = -4.0\\ \\text{m s}^{-2}$:\n$$a = \\frac{v_f - v_i}{t} \\implies -4.0 = \\frac{0 - 120}{t} \\implies t = \\frac{-120}{-4.0} = 30\\ \\text{s}$$',
          rubric: [
            { code: 'B1', text: 'Identifying $v_f = 0\\ \\text{m s}^{-1}$ at complete rest' },
            { code: 'M1', text: 'Substituting into $v_f = v_i + at$ or $a = (v_f - v_i)/t$' },
            { code: 'A1', text: '$t = 30\\ \\text{s}$' }
          ]
        },
        {
          label: 'b',
          marks: 4,
          prompt:
            'Can this train safely stop at a station where the straight braking zone is $1.60\\ \\text{km}$ long? Prove your answer using calculations and state a clear conclusion!',
          answer:
            'No, the train cannot stop safely. The minimum stopping distance is $1{,}800\\ \\text{m}$ ($1.80\\ \\text{km}$), which exceeds the $1.60\\ \\text{km}$ braking zone.',
          answerNumeric: [
            { name: 'd', value: 1800, unit: 'm' },
            { name: 'd_km', value: 1.8, unit: 'km' }
          ],
          principle:
            'For uniformly accelerated motion, the stopping distance is $d = \\frac{v_i + v_f}{2}t$ (equivalently $v_f^2 = v_i^2 + 2ad$), which must not exceed the available $1.60\\ \\text{km}$ track length for a safe stop.',
          solution:
            '$$d = \\frac{v_i + v_f}{2}t = \\frac{120 + 0}{2} \\times 30 = 60 \\times 30 = 1{,}800\\ \\text{m} = 1.80\\ \\text{km}$$\nConclusion: No, the train cannot stop safely because the minimum stopping distance ($1.80\\ \\text{km}$) is longer than the available $1.60\\ \\text{km}$ braking zone.',
          rubric: [
            { code: 'M1', text: 'Applying $d = \\frac{v_i + v_f}{2}t$ (or $v_f^2 = v_i^2 + 2ad$)' },
            { code: 'A1', text: '$d = 1{,}800\\ \\text{m}$' },
            { code: 'A1', text: 'Converting to $1.80\\ \\text{km}$' },
            { code: 'B1', text: 'Clear conclusion: No, because $1.80\\ \\text{km} > 1.60\\ \\text{km}$' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Autonomous Delivery Drone Motion',
      marks: 15,
      stem: 'An autonomous delivery drone was on its way to drop a package. It accelerated vertically from $12\\ \\text{m s}^{-1}$ to $20\\ \\text{m s}^{-1}$ over $4\\ \\text{s}$. Then, its sensors detected a flock of birds ahead, so it automatically braked with a deceleration of $4.0\\ \\text{m s}^{-2}$ until it came to a complete stop in the air. After hovering in place for $8\\ \\text{s}$ without moving, it safely accelerated again to $18\\ \\text{m s}^{-1}$ in $6\\ \\text{s}$.',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 6,
          prompt: 'Sketch the velocity-time ($v$-$t$) graph based on the story.',
          answer:
            'Piecewise linear $v$-$t$ graph connecting $(0, 12) \\to (4, 20) \\to (9, 0) \\to (17, 0) \\to (23, 18)$, with $t$ in $\\text{s}$ and $v$ in $\\text{m s}^{-1}$.',
          answerNumeric: [
            { name: 't_stop', value: 9, unit: 's' },
            { name: 't_hover_end', value: 17, unit: 's' },
            { name: 't_total', value: 23, unit: 's' }
          ],
          principle:
            'In a $v$-$t$ graph, each constant-acceleration interval appears as a straight line segment whose slope equals the acceleration, while hovering at rest ($v = 0$) lies flat along the time axis.',
          solution:
            'Determine the key coordinates $(t, v)$ in $(\\text{s},\\ \\text{m s}^{-1})$:\n- Interval 1 ($0\\ \\text{s}$ to $4\\ \\text{s}$): straight line from $(0, 12)$ up to $(4, 20)$.\n- Interval 2 (braking at $-4.0\\ \\text{m s}^{-2}$ from $20\\ \\text{m s}^{-1}$ to $0$): $\\Delta t_2 = \\frac{20}{4.0} = 5\\ \\text{s}$, so $t = 4 + 5 = 9\\ \\text{s}$; straight line from $(4, 20)$ down to $(9, 0)$.\n- Interval 3 (hovering for $8\\ \\text{s}$): $t = 9 + 8 = 17\\ \\text{s}$; horizontal line along $v = 0$ from $(9, 0)$ to $(17, 0)$.\n- Interval 4 (accelerating to $18\\ \\text{m s}^{-1}$ in $6\\ \\text{s}$): $t = 17 + 6 = 23\\ \\text{s}$; straight line from $(17, 0)$ up to $(23, 18)$.',
          rubric: [
            { code: 'B1', text: 'Correctly labelled axes ($v$ in $\\text{m s}^{-1}$ and $t$ in $\\text{s}$)' },
            { code: 'B1', text: 'First straight segment from $(0, 12)$ to $(4, 20)$' },
            { code: 'M1', text: 'Calculating braking duration $\\Delta t_2 = 20 / 4.0 = 5\\ \\text{s}$ ($t = 9\\ \\text{s}$)' },
            { code: 'A1', text: 'Second straight segment from $(4, 20)$ to $(9, 0)$' },
            { code: 'B1', text: 'Horizontal hover segment at $v = 0$ from $(9, 0)$ to $(17, 0)$' },
            { code: 'B1', text: 'Fourth straight segment from $(17, 0)$ to $(23, 18)$' }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt: "What is the drone's acceleration during the last $6\\ \\text{s}$ of this recording?",
          answer: '$a = 3.0\\ \\text{m s}^{-2}$',
          answerNumeric: [{ name: 'a', value: 3.0, unit: 'm/s^2' }],
          principle:
            'Average (and constant) acceleration over an interval is the rate of change of velocity: $a = \\frac{v_f - v_i}{\\Delta t}$.',
          solution:
            'From $t = 17\\ \\text{s}$ to $t = 23\\ \\text{s}$, $v_i = 0\\ \\text{m s}^{-1}$, $v_f = 18\\ \\text{m s}^{-1}$, and $\\Delta t = 6\\ \\text{s}$:\n$$a = \\frac{v_f - v_i}{\\Delta t} = \\frac{18 - 0}{6} = 3.0\\ \\text{m s}^{-2}$$',
          rubric: [
            { code: 'B1', text: 'Identifying $v_i = 0\\ \\text{m s}^{-1}$, $v_f = 18\\ \\text{m s}^{-1}$, and $\\Delta t = 6\\ \\text{s}$' },
            { code: 'M1', text: 'Applying $a = (v_f - v_i)/\\Delta t$' },
            { code: 'A1', text: '$a = 3.0\\ \\text{m s}^{-2}$' }
          ]
        },
        {
          label: 'c',
          marks: 4,
          prompt: 'How far is the total changing in position (distance traveled) of the drone during this entire sequence?',
          answer: '$d_{\\text{total}} = 168\\ \\text{m}$',
          answerNumeric: [{ name: 'd_total', value: 168, unit: 'm' }],
          principle:
            'Because velocity remains non-negative throughout the entire motion, the total distance traveled equals the total area bounded between the $v$-$t$ graph and the time axis.',
          solution:
            'Sum the areas of the four segments under the $v$-$t$ graph:\n- $A_1\\ (0\\text{–}4\\ \\text{s},\\text{ trapezoid}) = \\frac{1}{2}(12 + 20)(4) = 64\\ \\text{m}$\n- $A_2\\ (4\\text{–}9\\ \\text{s},\\text{ triangle}) = \\frac{1}{2}(20)(5) = 50\\ \\text{m}$\n- $A_3\\ (9\\text{–}17\\ \\text{s},\\text{ hovering}) = 0\\ \\text{m}$\n- $A_4\\ (17\\text{–}23\\ \\text{s},\\text{ triangle}) = \\frac{1}{2}(18)(6) = 54\\ \\text{m}$\n$$d_{\\text{total}} = 64 + 50 + 0 + 54 = 168\\ \\text{m}$$',
          rubric: [
            { code: 'M1', text: 'Summing areas under the $v$-$t$ graph across all four time intervals' },
            { code: 'A1', text: 'Interval 1 trapezoid area $64\\ \\text{m}$' },
            { code: 'A1', text: 'Interval 2 triangle $50\\ \\text{m}$, interval 3 $0\\ \\text{m}$, and interval 4 triangle $54\\ \\text{m}$' },
            { code: 'A1', text: 'Total distance $168\\ \\text{m}$' }
          ]
        },
        {
          label: 'd',
          marks: 2,
          prompt:
            'If we assume the total displacement is $y$ meters and the drone continues to travel another $8.40\\ \\text{m}$ over $3.5\\ \\text{s}$ at a steady pace, determine the velocity based on this final segment. Is this velocity constant? Explain.',
          answer:
            '$v = 2.4\\ \\text{m s}^{-1}$; yes, the velocity is constant because the drone travels at a steady pace (equal displacements in equal time intervals) without acceleration.',
          answerNumeric: [{ name: 'v', value: 2.4, unit: 'm/s' }],
          principle:
            'Moving at a steady pace in a single direction corresponds to uniform linear motion ($a = 0$), where instantaneous velocity equals $\\Delta d / \\Delta t$.',
          solution:
            '$$v = \\frac{\\Delta d}{\\Delta t} = \\frac{8.40\\ \\text{m}}{3.5\\ \\text{s}} = 2.4\\ \\text{m s}^{-1}$$\nYes, the velocity is constant because the drone covers proportional displacement over time at a steady pace with zero acceleration.',
          rubric: [
            { code: 'A1', text: '$v = 8.40 / 3.5 = 2.4\\ \\text{m s}^{-1}$' },
            { code: 'B1', text: 'Stating yes, the velocity is constant and explaining (steady pace / zero acceleration / proportional displacement)' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Model Rocket Vertical Launch',
      marks: 7,
      stem: 'You decide to launch a model rocket straight up into the air from a launch pad to test its new engine.',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'What is the velocity of the rocket at its highest position?',
          answer: '$v = 0\\ \\text{m s}^{-1}$',
          answerNumeric: [{ name: 'v_top', value: 0, unit: 'm/s' }],
          principle:
            'At the turning point (maximum height) of vertical free-fall motion, the upward velocity momentarily drops to zero before reversing downward.',
          solution: 'At the highest position, the rocket momentarily stops before descending, so $v = 0\\ \\text{m s}^{-1}$.',
          rubric: [{ code: 'B1', text: 'Stating velocity at the highest position is $0\\ \\text{m s}^{-1}$' }]
        },
        {
          label: 'b',
          marks: 3,
          prompt:
            'If the rocket reaches a highest point of $45\\ \\text{m}$ above where you launched it, what was its initial launch speed? (Assume $g = 10\\ \\text{m s}^{-2}$)',
          answer: '$v_i = 30\\ \\text{m s}^{-1}$',
          answerNumeric: [{ name: 'vi', value: 30, unit: 'm/s' }],
          principle:
            'Under constant downward gravitational acceleration $a = -g = -10\\ \\text{m s}^{-2}$, vertical ascent to height $h$ satisfies $v_f^2 = v_i^2 - 2gh$.',
          solution:
            'With $v_f = 0\\ \\text{m s}^{-1}$, $h = 45\\ \\text{m}$, and $g = 10\\ \\text{m s}^{-2}$:\n$$v_f^2 = v_i^2 - 2gh \\implies 0 = v_i^2 - 2(10)(45)$$\n$$v_i^2 = 900 \\implies v_i = \\sqrt{900} = 30\\ \\text{m s}^{-1}$$',
          rubric: [
            { code: 'M1', text: 'Applying $v_f^2 = v_i^2 - 2gh$ with $v_f = 0$' },
            { code: 'A1', text: '$v_i^2 = 900$' },
            { code: 'A1', text: '$v_i = 30\\ \\text{m s}^{-1}$' }
          ]
        },
        {
          label: 'c',
          marks: 3,
          prompt:
            'If the rocket falls back and lands exactly at the same height it was launched, how long did it spend in the air in total?',
          answer: '$T = 6\\ \\text{s}$',
          answerNumeric: [{ name: 'T', value: 6, unit: 's' }],
          principle:
            'Neglecting air resistance, vertical motion back to the same launch elevation is symmetric, so total flight time is twice the ascent time ($T = 2t_{\\text{up}}$).',
          solution:
            'Find the ascent time $t_{\\text{up}}$:\n$$v_f = v_i - gt_{\\text{up}} \\implies 0 = 30 - 10t_{\\text{up}} \\implies t_{\\text{up}} = 3\\ \\text{s}$$\nBy symmetry, $t_{\\text{down}} = 3\\ \\text{s}$, so total time in the air is:\n$$T = 3 + 3 = 6\\ \\text{s}$$',
          rubric: [
            { code: 'M1', text: 'Finding ascent time using $v_f = v_i - gt_{\\text{up}}$ (or $\\Delta y = v_i T - \\frac{1}{2}gT^2 = 0$)' },
            { code: 'A1', text: 'Ascent time $t_{\\text{up}} = 3\\ \\text{s}$' },
            { code: 'A1', text: 'Total time $T = 6\\ \\text{s}$' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Derivation of the Timeless Kinematic Equation',
      marks: 4,
      stem: 'Use the fundamental equations of linear motion under constant acceleration to prove the kinematic relation below.',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt: 'Use the fundamental equations of linear motion to prove that $v_f^2 = v_i^2 + 2ad$!',
          answer: '$v_f^2 = v_i^2 + 2ad$',
          principle:
            'Eliminating the time variable $t$ between the velocity-time relation $v_f = v_i + at$ and the average-velocity displacement relation $d = \\frac{v_f + v_i}{2}t$ yields the time-independent kinematic equation.',
          solution:
            '1. Start with the displacement equation for uniform acceleration:\n$$d = \\frac{v_f + v_i}{2}t$$\n2. Rearrange $v_f = v_i + at$ to solve for $t$:\n$$t = \\frac{v_f - v_i}{a}$$\n3. Substitute $t$ into the displacement equation:\n$$d = \\left(\\frac{v_f + v_i}{2}\\right)\\left(\\frac{v_f - v_i}{a}\\right) = \\frac{v_f^2 - v_i^2}{2a}$$\n4. Multiply both sides by $2a$ and rearrange:\n$$2ad = v_f^2 - v_i^2 \\implies v_f^2 = v_i^2 + 2ad$$',
          rubric: [
            { code: 'B1', text: 'Stating $d = \\frac{v_f + v_i}{2}t$ and $v_f = v_i + at$' },
            { code: 'M1', text: 'Rearranging to obtain $t = \\frac{v_f - v_i}{a}$' },
            { code: 'M1', text: 'Substituting $t$ into $d$ to get $d = \\frac{v_f^2 - v_i^2}{2a}$' },
            { code: 'A1', text: 'Multiplying by $2a$ and completing the proof $v_f^2 = v_i^2 + 2ad$' }
          ]
        }
      ]
    }
  ]
};
