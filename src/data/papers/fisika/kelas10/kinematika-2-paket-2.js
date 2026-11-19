/**
 * Paket Soal Terstruktur: Physics Grade 10 – Kinematics II (Projectile Motion) – Paket 2
 * Sumber acuan emas Duta e-dukasi (docs/reference/gold-standard-fis10-kinematika2-p2.pdf).
 * Bahasa dipertahankan dalam Bahasa Inggris sesuai dokumen sumber (Keputusan D5).
 */
export default {
  id: 'fis10-kinematika2-p2',
  slug: 'kinematika-2-paket-2',
  subject: 'fisika',
  grade: 10,
  track: 'cambridge-style',
  topic: 'Kinematika II – Gerak Parabola',
  relatedChapterIds: ['ipa10-bab3-gerak-parabola-dan-melingkar'],
  lang: 'en',
  title: 'Physics Grade 10 – Kinematics II (Projectile Motion) – Paket 2',
  totalMarks: 50,
  instructions:
    'Answer all three structured questions with full working and SI units. Take $g = 10\\ \\text{m s}^{-2}$ and neglect air resistance.',
  constants: [
    'g = 10\\ \\text{m s}^{-2}',
    '\\sin 30^\\circ = \\cos 60^\\circ = 0.5',
    '\\cos 30^\\circ = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}',
    '\\sin 37^\\circ = \\cos 53^\\circ = 0.6',
    '\\cos 37^\\circ = \\sin 53^\\circ = 0.8'
  ],
  source: {
    org: 'Duta e-dukasi',
    file: 'Physics_Grade_10_Kinematics_II_-_Paket_2.pdf',
    driveFolder: '1kCaCbtsKZZQa-aswV7FHEPRJu7QJduPB',
    license: 'CC BY 4.0'
  },
  status: 'published',
  accessTier: 'free',
  questions: [
    {
      no: 1,
      title: 'Angled Arrow Launch on a Level Field',
      marks: 18,
      stem: 'During a Grade 10 outdoor archery assessment on a flat grass field, Sophia releases an arrow from ground level at point $\\text{O}$. The arrow leaves the bow at an angle $\\theta = 30^\\circ$ above the horizontal with an initial speed $v_0 = 40\\ \\text{m s}^{-1}$, as shown in Fig. 1.1. Neglect the release height above the ground and air resistance.',
      figures: [
        {
          src: '/papers/fis10-kinematika2-p2/fig-1-1.webp',
          caption: 'Fig. 1.1 (Not to scale)',
          alt: 'Projectile path of an arrow launched from origin O on horizontal ground at angle 30 degrees above the horizontal with initial velocity vector v0 = 40 m s^-1, showing apex label Hmax, velocity vector v at t = 2.5 s, and horizontal range arrow R.'
        }
      ],
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Determine the initial velocity components of the arrow along the horizontal axis ($v_{0x}$) and vertical axis ($v_{0y}$).',
          answer:
            '$v_{0x} = 20\\sqrt{3}\\ \\text{m s}^{-1}\\ (\\approx 34.6\\ \\text{m s}^{-1});\\quad v_{0y} = 20\\ \\text{m s}^{-1}$',
          answerNumeric: [
            { name: 'v0x', value: 34.641, unit: 'm/s' },
            { name: 'v0y', value: 20, unit: 'm/s' }
          ],
          principle:
            'Horizontal and vertical components of projectile motion are independent. Resolving $v_0 = 40\\ \\text{m s}^{-1}$ at $\\theta = 30^\\circ$ above the horizontal gives $v_{0x} = v_0\\cos 30^\\circ$ and $v_{0y} = v_0\\sin 30^\\circ$.',
          solution:
            '$$v_{0x} = v_0\\cos 30^\\circ = 40 \\times \\frac{\\sqrt{3}}{2} = 20\\sqrt{3}\\ \\text{m s}^{-1}\\ (\\approx 34.6\\ \\text{m s}^{-1})$$\n$$v_{0y} = v_0\\sin 30^\\circ = 40 \\times 0.5 = 20\\ \\text{m s}^{-1}$$',
          rubric: [
            { code: 'M1', text: 'Correct horizontal resolution $v_0\\cos 30^\\circ$' },
            { code: 'A1', text: '$v_{0x} = 20\\sqrt{3}\\ \\text{m s}^{-1}$ (or $34.6\\ \\text{m s}^{-1}$)' },
            { code: 'M1', text: 'Correct vertical resolution $v_0\\sin 30^\\circ$' },
            { code: 'A1', text: '$v_{0y} = 20\\ \\text{m s}^{-1}$ with SI units' }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt: 'Calculate the maximum vertical height $H_{\\max}$ that the arrow can reach above the ground.',
          answer: '$H_{\\max} = 20.0\\ \\text{m}$',
          answerNumeric: [{ name: 'Hmax', value: 20.0, unit: 'm' }],
          principle:
            'At maximum height, the arrow’s instantaneous vertical velocity is zero ($v_y = 0$) while experiencing constant downward gravitational acceleration $a_y = -g = -10\\ \\text{m s}^{-2}$.',
          solution:
            '$$v_y^2 = v_{0y}^2 - 2gH_{\\max} \\implies 0 = 20^2 - 2(10)H_{\\max}$$\n$$20H_{\\max} = 400 \\implies H_{\\max} = \\frac{400}{20} = 20.0\\ \\text{m}$$',
          rubric: [
            { code: 'B1', text: 'Stating $v_y = 0$ at the peak' },
            { code: 'M1', text: 'Substituting $v_{0y} = 20\\ \\text{m s}^{-1}$ into $v_y^2 = v_{0y}^2 - 2gH_{\\max}$' },
            { code: 'A1', text: '$H_{\\max} = 20.0\\ \\text{m}$' }
          ]
        },
        {
          label: 'c',
          marks: 3,
          prompt:
            'Calculate the total time $T$ that the arrow remains in the air before landing back on the level field.',
          answer: '$T = 4.0\\ \\text{s}$',
          answerNumeric: [{ name: 'T', value: 4.0, unit: 's' }],
          principle:
            'Over level ground ($\\Delta y = 0$), the trajectory is symmetric so the total flight time is twice the time taken to reach maximum height ($T = 2t_{\\text{up}}$).',
          solution:
            '$$t_{\\text{up}} = \\frac{v_{0y}}{g} = \\frac{20}{10} = 2.0\\ \\text{s} \\implies T = 2 \\times 2.0 = 4.0\\ \\text{s}$$',
          rubric: [
            { code: 'M1', text: 'Correct method ($\\Delta y = v_{0y}T - \\tfrac{1}{2}gT^2 = 0$ or $T = 2v_{0y}/g$)' },
            { code: 'A1', text: 'Ascent time $t_{\\text{up}} = 2.0\\ \\text{s}$' },
            { code: 'A1', text: 'Total time $T = 4.0\\ \\text{s}$' }
          ]
        },
        {
          label: 'd',
          marks: 3,
          prompt:
            'Calculate the horizontal distance $R$ between the release point $\\text{O}$ and the point where the arrow strikes the grass.',
          answer: '$R = 80\\sqrt{3}\\ \\text{m}\\ (\\approx 139\\ \\text{m})$',
          answerNumeric: [{ name: 'R', value: 138.564, unit: 'm' }],
          principle:
            'Since horizontal acceleration is zero ($a_x = 0$), the arrow moves horizontally with uniform velocity $v_{0x}$ throughout the $4.0\\ \\text{s}$ flight.',
          solution: '$$R = v_{0x}T = (20\\sqrt{3})(4.0) = 80\\sqrt{3}\\ \\text{m}\\ (\\approx 139\\ \\text{m})$$',
          rubric: [
            { code: 'M1', text: 'Applying $R = v_{0x}T$' },
            { code: 'A1', text: 'Correct substitution $(20\\sqrt{3})(4.0)$' },
            { code: 'A1', text: '$R = 80\\sqrt{3}\\ \\text{m}$ (or $139\\ \\text{m}$)' }
          ]
        },
        {
          label: 'e',
          marks: 5,
          prompt: 'Determine the speed $v$ of the arrow at $t = 2.5\\ \\text{s}$ after it was released.',
          answer: '$v = 35\\ \\text{m s}^{-1}$',
          answerNumeric: [{ name: 'v', value: 35, unit: 'm/s' }],
          principle:
            'At $t = 2.5\\ \\text{s}$ ($0.5\\ \\text{s}$ after passing the peak), the horizontal component remains $v_x = v_{0x}$ while the vertical component $v_y$ points downward. The resultant speed is found via Pythagoras’ theorem.',
          solution:
            '$$v_x = v_{0x} = 20\\sqrt{3}\\ \\text{m s}^{-1};\\qquad v_y = v_{0y} - gt = 20 - 10(2.5) = -5\\ \\text{m s}^{-1}$$\n$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{(20\\sqrt{3})^2 + (-5)^2} = \\sqrt{1200 + 25} = \\sqrt{1225} = 35\\ \\text{m s}^{-1}$$',
          rubric: [
            { code: 'B1', text: 'Stating constant $v_x = 20\\sqrt{3}\\ \\text{m s}^{-1}$' },
            { code: 'M1', text: 'Applying $v_y = v_{0y} - gt$' },
            { code: 'A1', text: '$v_y = -5\\ \\text{m s}^{-1}$' },
            { code: 'M1', text: 'Pythagoras $v = \\sqrt{v_x^2 + v_y^2}$' },
            { code: 'A1', text: '$v = 35\\ \\text{m s}^{-1}$' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Downhill Ledge Launch into a Valley',
      marks: 16,
      stem: 'Noah is a downhill mountain biker riding along a straight, steep trail inclined at an angle $\\theta = 37^\\circ$ below the horizontal. Unbeknownst to him, the trail ends abruptly at the edge of a vertical rocky ledge (point $\\text{A}$), situated at a height $h = 57.2\\ \\text{m}$ above a flat valley floor. Noah rides off the ledge at point $\\text{A}$ with a speed $v_0 = 15\\ \\text{m s}^{-1}$ directed along the slope, as illustrated in Fig. 2.1.',
      figures: [
        {
          src: '/papers/fis10-kinematika2-p2/fig-2-1.webp',
          caption: 'Fig. 2.1 (Not to scale)',
          alt: 'Cross-section of an inclined trail ending at a vertical rocky ledge A of height h = 57.2 m above a flat valley floor, showing initial velocity v0 = 15 m s^-1 at 37° below the horizontal dashed line, landing horizontal displacement x, and final velocity arrow v.'
        }
      ],
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Determine the initial velocity components $v_{0x}$ and $v_{0y}$ in both the horizontal and vertical axes at point $\\text{A}$.',
          answer: '$v_{0x} = +12\\ \\text{m s}^{-1};\\quad v_{0y} = -9\\ \\text{m s}^{-1}\\ (9\\ \\text{m s}^{-1}\\ \\text{downward})$',
          answerNumeric: [
            { name: 'v0x', value: 12, unit: 'm/s' },
            { name: 'v0y', value: -9, unit: 'm/s' }
          ],
          principle:
            'Defining rightward ($+x$) and upward ($+y$) as positive, launching at $37^\\circ$ below the horizontal yields a positive horizontal component and a negative (downward) vertical component.',
          solution:
            '$$v_{0x} = +v_0\\cos 37^\\circ = 15 \\times 0.8 = +12\\ \\text{m s}^{-1}$$\n$$v_{0y} = -v_0\\sin 37^\\circ = -15 \\times 0.6 = -9\\ \\text{m s}^{-1}\\ (9\\ \\text{m s}^{-1}\\ \\text{downward})$$',
          rubric: [
            { code: 'M1', text: '$v_0\\cos 37^\\circ$ for horizontal component' },
            { code: 'A1', text: '$v_{0x} = 12\\ \\text{m s}^{-1}$' },
            { code: 'M1', text: '$v_0\\sin 37^\\circ$ for vertical component' },
            { code: 'A1', text: '$v_{0y} = -9\\ \\text{m s}^{-1}$ (negative sign or explicit downward direction required)' }
          ]
        },
        {
          label: 'b',
          marks: 4,
          prompt: 'Calculate the time $t$ taken for Noah to reach the flat valley floor after leaving the ledge.',
          answer: '$t = 2.6\\ \\text{s}$',
          answerNumeric: [{ name: 't', value: 2.6, unit: 's' }],
          principle:
            'Setting point $\\text{A}$ as the origin ($y = 0$), landing $57.2\\ \\text{m}$ below the ledge gives vertical displacement $\\Delta y = -57.2\\ \\text{m}$ under downward acceleration $a_y = -10\\ \\text{m s}^{-2}$.',
          solution:
            '$$\\Delta y = v_{0y}t - \\frac{1}{2}gt^2 \\implies -57.2 = -9t - 5t^2$$\n$$5t^2 + 9t - 57.2 = 0 \\implies 25t^2 + 45t - 286 = 0 \\implies (5t - 13)(5t + 22) = 0$$\nRejecting $t = -4.4\\ \\text{s}$ (physically invalid), $t = \\dfrac{13}{5} = 2.6\\ \\text{s}$.',
          rubric: [
            { code: 'M1', text: 'Substituting $\\Delta y = -57.2\\ \\text{m}$ and $v_{0y} = -9\\ \\text{m s}^{-1}$ with consistent signs' },
            { code: 'A1', text: 'Quadratic $5t^2 + 9t - 57.2 = 0$' },
            { code: 'M1', text: 'Valid factorisation or quadratic formula' },
            { code: 'A1', text: '$t = 2.6\\ \\text{s}$' }
          ]
        },
        {
          label: 'c',
          marks: 3,
          prompt: 'Calculate the horizontal distance $x$ between the edge of the rocky ledge and his landing position.',
          answer: '$x = 31.2\\ \\text{m}$',
          answerNumeric: [{ name: 'x', value: 31.2, unit: 'm' }],
          principle:
            'Horizontal velocity remains constant at $v_{0x} = 12\\ \\text{m s}^{-1}$ throughout the $2.6\\ \\text{s}$ descent.',
          solution: '$$x = v_{0x}t = 12 \\times 2.6 = 31.2\\ \\text{m}$$',
          rubric: [
            { code: 'M1', text: 'Applying $x = v_{0x}t$' },
            { code: 'A1', text: 'Substituting $12 \\times 2.6$' },
            { code: 'A1', text: '$x = 31.2\\ \\text{m}$' }
          ]
        },
        {
          label: 'd',
          marks: 5,
          prompt: 'Determine Noah’s speed $v$ at the instant he touches the valley floor.',
          answer: '$v = 37\\ \\text{m s}^{-1}$',
          answerNumeric: [{ name: 'v', value: 37, unit: 'm/s' }],
          principle:
            'At $t = 2.6\\ \\text{s}$, gravitational acceleration increases the downward vertical velocity component, and the resultant speed is the vector magnitude of $v_x$ and $v_y$.',
          solution:
            '$$v_x = 12\\ \\text{m s}^{-1};\\qquad v_y = v_{0y} - gt = -9 - 10(2.6) = -35\\ \\text{m s}^{-1}$$\n$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{12^2 + (-35)^2} = \\sqrt{144 + 1225} = \\sqrt{1369} = 37\\ \\text{m s}^{-1}$$',
          rubric: [
            { code: 'M1', text: 'Applying $v_y = v_{0y} - gt$' },
            { code: 'A1', text: '$v_y = -35\\ \\text{m s}^{-1}$' },
            { code: 'M1', text: 'Pythagoras $v = \\sqrt{v_x^2 + v_y^2}$' },
            { code: 'A1', text: '$\\sqrt{1369}$' },
            { code: 'A1', text: '$v = 37\\ \\text{m s}^{-1}$' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'High-Diving Takeoff Referenced to the Vertical Axis',
      marks: 16,
      stem: 'In an international cliff-diving exhibition, Lucas performs a running takeoff from an elevated diving platform located at a height $H_0 = 18.0\\ \\text{m}$ above the water surface. At the end of the platform (point $\\text{P}$), he leaps into the air with an initial speed $v_0 = 15\\ \\text{m s}^{-1}$ by forming an angle $\\theta = 53^\\circ$ to the upward vertical axis, as shown in Fig. 3.1.',
      figures: [
        {
          src: '/papers/fis10-kinematika2-p2/fig-3-1.webp',
          caption: 'Fig. 3.1 (Not to scale)',
          alt: 'Elevated diving platform P at height H0 = 18.0 m above the horizontal water surface (y = 0), with initial velocity vector v0 = 15 m s^-1 at angle 53 degrees to the vertical dashed axis, curved trajectory reaching height Hmax above water, and horizontal landing distance x.'
        }
      ],
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Calculate Lucas’s initial velocity components horizontally ($v_{0x}$) and vertically ($v_{0y}$) at the instant of takeoff.',
          answer: '$v_{0x} = 12\\ \\text{m s}^{-1};\\quad v_{0y} = 9\\ \\text{m s}^{-1}$',
          answerNumeric: [
            { name: 'v0x', value: 12, unit: 'm/s' },
            { name: 'v0y', value: 9, unit: 'm/s' }
          ],
          principle:
            'Because $\\theta = 53^\\circ$ is measured relative to the upward vertical axis, the vertical component is adjacent to $53^\\circ$ (using $\\cos 53^\\circ$) and the horizontal component is opposite to $53^\\circ$ (using $\\sin 53^\\circ$).',
          solution:
            '$$v_{0x} = v_0\\sin 53^\\circ = 15 \\times 0.8 = 12\\ \\text{m s}^{-1}$$\n$$v_{0y} = v_0\\cos 53^\\circ = 15 \\times 0.6 = 9\\ \\text{m s}^{-1}$$',
          rubric: [
            { code: 'M1', text: 'Assigning $\\sin 53^\\circ$ to horizontal axis' },
            { code: 'A1', text: '$v_{0x} = 12\\ \\text{m s}^{-1}$' },
            { code: 'M1', text: 'Assigning $\\cos 53^\\circ$ to vertical axis' },
            { code: 'A1', text: '$v_{0y} = 9\\ \\text{m s}^{-1}$' }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt:
            'Given that the platform is $18.0\\ \\text{m}$ above the water, calculate the highest point $H_{\\max}$ above the water that he reaches during his dive.',
          answer: '$H_{\\max} = 22.05\\ \\text{m}$ above the water',
          answerNumeric: [{ name: 'Hmax', value: 22.05, unit: 'm' }],
          principle:
            'The maximum elevation above the water surface is the sum of the platform height $H_0 = 18.0\\ \\text{m}$ and the upward vertical rise $\\Delta h_{\\text{up}}$ where $v_y = 0$.',
          solution:
            '$$v_y^2 = v_{0y}^2 - 2g\\Delta h_{\\text{up}} \\implies 0 = 9^2 - 2(10)\\Delta h_{\\text{up}} \\implies \\Delta h_{\\text{up}} = \\frac{81}{20} = 4.05\\ \\text{m}$$\n$$H_{\\max} = H_0 + \\Delta h_{\\text{up}} = 18.0 + 4.05 = 22.05\\ \\text{m}$$',
          rubric: [
            { code: 'M1', text: 'Calculating upward rise $\\Delta h_{\\text{up}} = 4.05\\ \\text{m}$' },
            { code: 'M1', text: 'Adding platform height $H_0 = 18.0\\ \\text{m}$' },
            { code: 'A1', text: '$H_{\\max} = 22.05\\ \\text{m}$' }
          ]
        },
        {
          label: 'c',
          marks: 5,
          prompt: 'Calculate the total time $t$ it takes for Lucas to reach the water after he leaves point $\\text{P}$.',
          answer: '$t = 3.0\\ \\text{s}$',
          answerNumeric: [{ name: 't', value: 3.0, unit: 's' }],
          principle:
            'Taking takeoff point $\\text{P}$ as the vertical origin ($y = 0$), entering the water $18.0\\ \\text{m}$ below gives $\\Delta y = -18.0\\ \\text{m}$. Solving the vertical displacement quadratic gives the flight time.',
          solution:
            '$$\\Delta y = v_{0y}t - \\frac{1}{2}gt^2 \\implies -18.0 = 9t - 5t^2$$\n$$5t^2 - 9t - 18 = 0 \\implies (5t + 6)(t - 3) = 0$$\nSince $t > 0$ (rejecting $t = -1.2\\ \\text{s}$), $t = 3.0\\ \\text{s}$.',
          rubric: [
            { code: 'B1', text: 'Setting $\\Delta y = -18.0\\ \\text{m}$' },
            { code: 'M1', text: 'Substituting into $\\Delta y = v_{0y}t - \\tfrac{1}{2}gt^2$' },
            { code: 'A1', text: 'Quadratic $5t^2 - 9t - 18 = 0$' },
            { code: 'M1', text: 'Valid factorisation $(5t + 6)(t - 3) = 0$' },
            { code: 'A1', text: '$t = 3.0\\ \\text{s}$' }
          ]
        },
        {
          label: 'd',
          marks: 4,
          prompt: 'Determine his speed $v$ just as he enters the water.',
          answer: '$v = 3\\sqrt{65}\\ \\text{m s}^{-1}\\ (\\approx 24.2\\ \\text{m s}^{-1})$',
          answerNumeric: [{ name: 'v', value: 24.187, unit: 'm/s' }],
          principle:
            'At $t = 3.0\\ \\text{s}$, the water-entry speed is the resultant magnitude of the constant horizontal velocity $v_x$ and final vertical velocity $v_y$ (consistent with mechanical energy conservation).',
          solution:
            '$$v_x = 12\\ \\text{m s}^{-1};\\qquad v_y = v_{0y} - gt = 9 - 10(3.0) = -21\\ \\text{m s}^{-1}$$\n$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{12^2 + (-21)^2} = \\sqrt{144 + 441} = \\sqrt{585} = 3\\sqrt{65}\\ \\text{m s}^{-1}\\ (\\approx 24.2\\ \\text{m s}^{-1})$$',
          rubric: [
            { code: 'M1', text: 'Finding $v_y$ at $t = 3.0\\ \\text{s}$' },
            { code: 'A1', text: '$v_y = -21\\ \\text{m s}^{-1}$' },
            { code: 'M1', text: 'Pythagoras $v = \\sqrt{v_x^2 + v_y^2}$' },
            { code: 'A1', text: '$v = 3\\sqrt{65}\\ \\text{m s}^{-1}$ (or $24.2\\ \\text{m s}^{-1}$)' }
          ]
        }
      ]
    }
  ]
};
