/**
 * Paket Soal Terstruktur: Physics Grade 10 – Kinematics II (Projectile Motion) – Paket 1
 * Sumber: Duta e-dukasi (Physics Grade 10 Kinematics II.pdf).
 * Bahasa dipertahankan dalam Bahasa Inggris sesuai dokumen sumber.
 */
export default {
  id: 'fis10-kinematika2-p1',
  slug: 'kinematika-2-paket-1',
  subject: 'fisika',
  grade: 10,
  track: 'cambridge-style',
  topic: 'Kinematika II – Gerak Parabola',
  relatedChapterIds: ['ipa10-bab3-gerak-parabola-dan-melingkar'],
  lang: 'en',
  title: 'Physics Grade 10 – Kinematics II (Projectile Motion) – Paket 1',
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
    file: 'Physics Grade 10 Kinematics II.pdf',
    driveFolder: '1kCaCbtsKZZQa-aswV7FHEPRJu7QJduPB',
    license: 'CC BY 4.0'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Angled Launch from Level Ground',
      marks: 18,
      stem: 'During a Grade 10 athletics and football skills assessment, Daniel takes a free kick from level turf at point $\\text{O}$ toward a teammate downfield. He strikes the ball so that it leaves the ground at an angle $\\theta = 60^\\circ$ above the horizontal with an initial speed $v_0 = 12\\sqrt{3}\\ \\text{m s}^{-1}$, as illustrated in Fig. 1.1. Ignore the size of the ball and air resistance.',
      figures: [
        {
          src: '/papers/fis10-kinematika2-p1/fig-1-1.webp',
          caption: 'Fig. 1.1 (Not to scale)',
          alt: 'Projectile path of a football launched from origin O on horizontal ground at angle 60 degrees above the horizontal with initial velocity vector v0, showing apex label Hmax, velocity vector v at t = 2.4 s, and horizontal range arrow R.'
        }
      ],
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Determine the initial velocity components of the ball along the horizontal axis ($v_{0x}$) and vertical axis ($v_{0y}$).',
          answer:
            '$v_{0x} = 6\\sqrt{3}\\ \\text{m s}^{-1}\\ (\\approx 10.4\\ \\text{m s}^{-1});\\quad v_{0y} = 18\\ \\text{m s}^{-1}$',
          answerNumeric: [
            { name: 'v0x', value: 10.392, unit: 'm/s' },
            { name: 'v0y', value: 18, unit: 'm/s' }
          ],
          principle:
            'Because horizontal and vertical motions in a uniform gravitational field are mutually independent, the initial launch velocity $v_0$ at $\\theta = 60^\\circ$ above the horizontal is resolved using right-triangle trigonometry into $v_{0x}$ (adjacent to $60^\\circ$) and $v_{0y}$ (opposite to $60^\\circ$).',
          solution:
            '$$v_{0x} = v_0\\cos 60^\\circ = (12\\sqrt{3}) \\times \\frac{1}{2} = 6\\sqrt{3}\\ \\text{m s}^{-1}\\ (\\approx 10.4\\ \\text{m s}^{-1})$$\n$$v_{0y} = v_0\\sin 60^\\circ = (12\\sqrt{3}) \\times \\frac{\\sqrt{3}}{2} = 6 \\times 3 = 18\\ \\text{m s}^{-1}$$',
          rubric: [
            { code: 'M1', text: 'Correct horizontal resolution $v_0\\cos 60^\\circ$' },
            { code: 'A1', text: '$v_{0x} = 6\\sqrt{3}\\ \\text{m s}^{-1}$ (or $10.4\\ \\text{m s}^{-1}$)' },
            { code: 'M1', text: 'Correct vertical resolution $v_0\\sin 60^\\circ$' },
            { code: 'A1', text: '$v_{0y} = 18\\ \\text{m s}^{-1}$ with SI units' }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt: 'Calculate the maximum vertical height $H_{\\max}$ that the ball can reach above the turf.',
          answer: '$H_{\\max} = 16.2\\ \\text{m}$',
          answerNumeric: [{ name: 'Hmax', value: 16.2, unit: 'm' }],
          principle:
            'At the highest point of the parabolic trajectory, the ball momentarily stops rising, so its vertical velocity component is zero ($v_y = 0$) under constant downward gravitational acceleration $a_y = -g = -10\\ \\text{m s}^{-2}$.',
          solution:
            '$$v_y^2 = v_{0y}^2 - 2gH_{\\max} \\implies 0 = 18^2 - 2(10)H_{\\max}$$\n$$20H_{\\max} = 324 \\implies H_{\\max} = \\frac{324}{20} = 16.2\\ \\text{m}$$',
          rubric: [
            { code: 'B1', text: 'Identifying $v_y = 0$ at maximum height' },
            { code: 'M1', text: 'Applying $v_y^2 = v_{0y}^2 - 2gH_{\\max}$ with $v_{0y} = 18\\ \\text{m s}^{-1}$' },
            { code: 'A1', text: '$H_{\\max} = 16.2\\ \\text{m}$' }
          ]
        },
        {
          label: 'c',
          marks: 3,
          prompt:
            'Calculate the total time $T$ that the ball remains in the air before landing back on the level ground.',
          answer: '$T = 3.6\\ \\text{s}$',
          answerNumeric: [{ name: 'T', value: 3.6, unit: 's' }],
          principle:
            'On level turf, the net vertical displacement upon landing is $\\Delta y = 0$, so the ascent duration equals the descent duration ($T = 2t_{\\text{up}}$).',
          solution:
            '$$t_{\\text{up}} = \\frac{v_{0y}}{g} = \\frac{18}{10} = 1.8\\ \\text{s} \\implies T = 2 \\times 1.8 = 3.6\\ \\text{s}$$',
          rubric: [
            { code: 'M1', text: 'Correct method ($\\Delta y = v_{0y}T - \\tfrac{1}{2}gT^2 = 0$ or $T = 2v_{0y}/g$)' },
            { code: 'A1', text: 'Ascent time $t_{\\text{up}} = 1.8\\ \\text{s}$' },
            { code: 'A1', text: 'Total time $T = 3.6\\ \\text{s}$' }
          ]
        },
        {
          label: 'd',
          marks: 3,
          prompt:
            'Calculate the horizontal distance $R$ between the point of kick $\\text{O}$ and the point where the ball lands.',
          answer: '$R = 21.6\\sqrt{3}\\ \\text{m}\\ (\\approx 37.4\\ \\text{m})$',
          answerNumeric: [{ name: 'R', value: 37.412, unit: 'm' }],
          principle:
            'With zero horizontal acceleration ($a_x = 0$), the ball travels horizontally at constant speed $v_{0x}$ throughout the entire flight duration $T$.',
          solution: '$$R = v_{0x}T = (6\\sqrt{3})(3.6) = 21.6\\sqrt{3}\\ \\text{m}\\ (\\approx 37.4\\ \\text{m})$$',
          rubric: [
            { code: 'M1', text: 'Applying $R = v_{0x}T$' },
            { code: 'A1', text: 'Correct substitution $(6\\sqrt{3})(3.6)$' },
            { code: 'A1', text: '$R = 21.6\\sqrt{3}\\ \\text{m}$ (or $37.4\\ \\text{m}$)' }
          ]
        },
        {
          label: 'e',
          marks: 5,
          prompt: 'Determine the speed $v$ of the ball at $t = 2.4\\ \\text{s}$ after it was kicked.',
          answer: '$v = 12\\ \\text{m s}^{-1}$',
          answerNumeric: [{ name: 'v', value: 12, unit: 'm/s' }],
          principle:
            'At $t = 2.4\\ \\text{s}$ (after passing the peak at $t = 1.8\\ \\text{s}$), the horizontal velocity remains $v_x = v_{0x}$ while the vertical velocity $v_y$ is directed downward. The instantaneous speed is the magnitude of the resultant velocity vector.',
          solution:
            '$$v_x = v_{0x} = 6\\sqrt{3}\\ \\text{m s}^{-1};\\qquad v_y = v_{0y} - gt = 18 - 10(2.4) = -6\\ \\text{m s}^{-1}$$\n$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{(6\\sqrt{3})^2 + (-6)^2} = \\sqrt{108 + 36} = \\sqrt{144} = 12\\ \\text{m s}^{-1}$$',
          rubric: [
            { code: 'B1', text: 'Stating constant $v_x = 6\\sqrt{3}\\ \\text{m s}^{-1}$' },
            { code: 'M1', text: 'Applying $v_y = v_{0y} - gt$' },
            { code: 'A1', text: '$v_y = -6\\ \\text{m s}^{-1}$' },
            { code: 'M1', text: 'Pythagoras $v = \\sqrt{v_x^2 + v_y^2}$' },
            { code: 'A1', text: '$v = 12\\ \\text{m s}^{-1}$' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Downward-Sloping Launch from a Cliff Edge',
      marks: 16,
      stem: 'Liam is an experienced snowboarder practicing on a mountain trail. He rides straight down a steep snow chute inclined at an angle $\\theta = 45^\\circ$ below the horizontal. Unbeknownst to him, the trail ends abruptly at the edge of a vertical cliff (point $\\text{A}$), situated at a height $h = 40\\ \\text{m}$ above a flat lower snowfield. Liam leaves the edge at point $\\text{A}$ with a speed $v_0 = 10\\sqrt{2}\\ \\text{m s}^{-1}$ directed along the slope, as shown in Fig. 2.1.',
      figures: [
        {
          src: '/papers/fis10-kinematika2-p1/fig-2-1.webp',
          caption: 'Fig. 2.1 (Not to scale)',
          alt: 'Cross-section of an inclined snow chute ending at a vertical cliff edge A of height h = 40 m above a flat lower snowfield, showing initial velocity vector v0 at 45 degrees below the horizontal dashed line, landing horizontal displacement x, and final velocity arrow v.'
        }
      ],
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Determine the initial velocity components $v_{0x}$ and $v_{0y}$ in both the horizontal and vertical axes at point $\\text{A}$.',
          answer: '$v_{0x} = +10\\ \\text{m s}^{-1};\\quad v_{0y} = -10\\ \\text{m s}^{-1}\\ (10\\ \\text{m s}^{-1}\\ \\text{downward})$',
          answerNumeric: [
            { name: 'v0x', value: 10, unit: 'm/s' },
            { name: 'v0y', value: -10, unit: 'm/s' }
          ],
          principle:
            'Taking rightward ($+x$) and upward ($+y$) as positive directions, a launch at $45^\\circ$ below the horizontal has a positive horizontal component and a negative (downward) vertical component.',
          solution:
            '$$v_{0x} = +v_0\\cos 45^\\circ = (10\\sqrt{2}) \\times \\frac{\\sqrt{2}}{2} = +10\\ \\text{m s}^{-1}$$\n$$v_{0y} = -v_0\\sin 45^\\circ = -(10\\sqrt{2}) \\times \\frac{\\sqrt{2}}{2} = -10\\ \\text{m s}^{-1}\\ (10\\ \\text{m s}^{-1}\\ \\text{downward})$$',
          rubric: [
            { code: 'M1', text: '$v_0\\cos 45^\\circ$' },
            { code: 'A1', text: '$v_{0x} = 10\\ \\text{m s}^{-1}$' },
            { code: 'M1', text: '$v_0\\sin 45^\\circ$' },
            { code: 'A1', text: '$v_{0y} = -10\\ \\text{m s}^{-1}$ (negative sign or explicit downward direction required)' }
          ]
        },
        {
          label: 'b',
          marks: 4,
          prompt: 'Calculate the time $t$ taken for Liam to reach the flat snowfield below after leaving the cliff edge.',
          answer: '$t = 2.0\\ \\text{s}$',
          answerNumeric: [{ name: 't', value: 2.0, unit: 's' }],
          principle:
            'Measuring vertical position from point $\\text{A}$ ($y = 0$), landing $40\\ \\text{m}$ below the cliff edge corresponds to $\\Delta y = -40\\ \\text{m}$ under downward acceleration $a_y = -10\\ \\text{m s}^{-2}$.',
          solution:
            '$$\\Delta y = v_{0y}t - \\frac{1}{2}gt^2 \\implies -40 = -10t - 5t^2$$\n$$5t^2 + 10t - 40 = 0 \\implies t^2 + 2t - 8 = 0 \\implies (t + 4)(t - 2) = 0$$\nRejecting $t = -4.0\\ \\text{s}$ (physically invalid), $t = 2.0\\ \\text{s}$.',
          rubric: [
            { code: 'M1', text: 'Substituting $\\Delta y = -40\\ \\text{m}$ and $v_{0y} = -10\\ \\text{m s}^{-1}$ with consistent signs' },
            { code: 'A1', text: 'Simplified quadratic $t^2 + 2t - 8 = 0$' },
            { code: 'M1', text: 'Valid factorization/formula' },
            { code: 'A1', text: '$t = 2.0\\ \\text{s}$' }
          ]
        },
        {
          label: 'c',
          marks: 3,
          prompt: 'Calculate the horizontal distance $x$ between the edge of the cliff and his landing position.',
          answer: '$x = 20\\ \\text{m}$',
          answerNumeric: [{ name: 'x', value: 20, unit: 'm' }],
          principle:
            'Horizontal velocity remains constant at $v_{0x} = 10\\ \\text{m s}^{-1}$ during the $2.0\\ \\text{s}$ fall.',
          solution: '$$x = v_{0x}t = 10 \\times 2.0 = 20\\ \\text{m}$$',
          rubric: [
            { code: 'M1', text: 'Applying $x = v_{0x}t$' },
            { code: 'A1', text: 'Substituting $10 \\times 2.0$' },
            { code: 'A1', text: '$x = 20\\ \\text{m}$' }
          ]
        },
        {
          label: 'd',
          marks: 5,
          prompt: 'Determine Liam’s speed $v$ at the instant he touches the snowfield.',
          answer: '$v = 10\\sqrt{10}\\ \\text{m s}^{-1}\\ (\\approx 31.6\\ \\text{m s}^{-1})$',
          answerNumeric: [{ name: 'v', value: 31.623, unit: 'm/s' }],
          principle:
            'At touchdown ($t = 2.0\\ \\text{s}$), the downward vertical velocity has increased in magnitude due to gravity, and the resultant touchdown speed is obtained by combining the orthogonal components $v_x$ and $v_y$.',
          solution:
            '$$v_x = 10\\ \\text{m s}^{-1};\\qquad v_y = v_{0y} - gt = -10 - 10(2.0) = -30\\ \\text{m s}^{-1}$$\n$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{10^2 + (-30)^2} = \\sqrt{100 + 900} = \\sqrt{1000} = 10\\sqrt{10}\\ \\text{m s}^{-1}\\ (\\approx 31.6\\ \\text{m s}^{-1})$$',
          rubric: [
            { code: 'M1', text: 'Applying $v_y = v_{0y} - gt$' },
            { code: 'A1', text: '$v_y = -30\\ \\text{m s}^{-1}$' },
            { code: 'M1', text: 'Pythagoras $v = \\sqrt{v_x^2 + v_y^2}$' },
            { code: 'A1', text: '$\\sqrt{1000}$' },
            { code: 'A1', text: '$v = 10\\sqrt{10}\\ \\text{m s}^{-1}$ (or $31.6\\ \\text{m s}^{-1}$)' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Elevated Platform Takeoff Referenced to the Vertical Axis',
      marks: 16,
      stem: 'In an indoor acrobatic gymnastics showcase, Maya performs a running takeoff from an elevated springboard platform positioned at a height $H_0 = 16.8\\ \\text{m}$ above a large safety landing airbag. At the end of the platform (point $\\text{P}$), she leaps into the air with an initial speed $v_0 = 10\\ \\text{m s}^{-1}$ by forming an angle $\\theta = 37^\\circ$ to the upward vertical axis, as depicted in Fig. 3.1.',
      figures: [
        {
          src: '/papers/fis10-kinematika2-p1/fig-3-1.webp',
          caption: 'Fig. 3.1 (Not to scale)',
          alt: 'Elevated springboard platform P at height H0 = 16.8 m above a horizontal safety landing airbag (y = 0), with initial velocity vector v0 = 10 m s^-1 at angle 37 degrees to the upward vertical dashed axis, curved trajectory reaching height Hmax above the airbag, and horizontal landing distance x.'
        }
      ],
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Calculate Maya’s initial velocity components horizontally ($v_{0x}$) and vertically ($v_{0y}$) at the instant of takeoff.',
          answer: '$v_{0x} = 6.0\\ \\text{m s}^{-1};\\quad v_{0y} = 8.0\\ \\text{m s}^{-1}$',
          answerNumeric: [
            { name: 'v0x', value: 6.0, unit: 'm/s' },
            { name: 'v0y', value: 8.0, unit: 'm/s' }
          ],
          principle:
            'Because $\\theta = 37^\\circ$ is measured with respect to the upward vertical axis, the vertical component lies adjacent to $37^\\circ$ (using $\\cos 37^\\circ$) and the horizontal component lies opposite to $37^\\circ$ (using $\\sin 37^\\circ$).',
          solution:
            '$$v_{0x} = v_0\\sin 37^\\circ = 10 \\times 0.6 = 6.0\\ \\text{m s}^{-1}$$\n$$v_{0y} = v_0\\cos 37^\\circ = 10 \\times 0.8 = 8.0\\ \\text{m s}^{-1}$$',
          rubric: [
            { code: 'M1', text: 'Assigning $\\sin 37^\\circ$ to horizontal axis' },
            { code: 'A1', text: '$v_{0x} = 6.0\\ \\text{m s}^{-1}$' },
            { code: 'M1', text: 'Assigning $\\cos 37^\\circ$ to vertical axis' },
            { code: 'A1', text: '$v_{0y} = 8.0\\ \\text{m s}^{-1}$' }
          ]
        },
        {
          label: 'b',
          marks: 3,
          prompt:
            'Given that the platform is $16.8\\ \\text{m}$ above the safety airbag, calculate the highest point $H_{\\max}$ above the airbag that she reaches during her jump.',
          answer: '$H_{\\max} = 20.0\\ \\text{m}$ above the safety airbag',
          answerNumeric: [{ name: 'Hmax', value: 20.0, unit: 'm' }],
          principle:
            'The maximum height above the airbag equals the platform’s initial elevation $H_0 = 16.8\\ \\text{m}$ plus the upward rise $\\Delta h_{\\text{up}}$ gained before vertical velocity drops to zero.',
          solution:
            '$$v_y^2 = v_{0y}^2 - 2g\\Delta h_{\\text{up}} \\implies 0 = 8.0^2 - 2(10)\\Delta h_{\\text{up}} \\implies \\Delta h_{\\text{up}} = \\frac{64}{20} = 3.2\\ \\text{m}$$\n$$H_{\\max} = H_0 + \\Delta h_{\\text{up}} = 16.8 + 3.2 = 20.0\\ \\text{m}$$',
          rubric: [
            { code: 'M1', text: 'Calculating upward rise $\\Delta h_{\\text{up}} = 3.2\\ \\text{m}$' },
            { code: 'M1', text: 'Adding platform height $H_0 = 16.8\\ \\text{m}$' },
            { code: 'A1', text: '$H_{\\max} = 20.0\\ \\text{m}$' }
          ]
        },
        {
          label: 'c',
          marks: 5,
          prompt: 'Calculate the total time $t$ it takes for Maya to reach the safety airbag after she leaves point $\\text{P}$.',
          answer: '$t = 2.8\\ \\text{s}$',
          answerNumeric: [{ name: 't', value: 2.8, unit: 's' }],
          principle:
            'Taking the takeoff point $\\text{P}$ as the vertical origin ($y = 0$), the safety airbag lies at vertical displacement $\\Delta y = -16.8\\ \\text{m}$. Solving the vertical kinematic equation gives the total air time.',
          solution:
            '$$\\Delta y = v_{0y}t - \\frac{1}{2}gt^2 \\implies -16.8 = 8.0t - 5.0t^2$$\n$$5t^2 - 8t - 16.8 = 0 \\implies 25t^2 - 40t - 84 = 0 \\implies (5t - 14)(5t + 6) = 0$$\nSince $t > 0$ (rejecting $t = -1.2\\ \\text{s}$), $t = \\dfrac{14}{5} = 2.8\\ \\text{s}$.',
          rubric: [
            { code: 'B1', text: 'Setting $\\Delta y = -16.8\\ \\text{m}$' },
            { code: 'M1', text: 'Substituting into $\\Delta y = v_{0y}t - \\tfrac{1}{2}gt^2$' },
            { code: 'A1', text: 'Correct quadratic $25t^2 - 40t - 84 = 0$' },
            { code: 'M1', text: 'Valid factorization/formula' },
            { code: 'A1', text: '$t = 2.8\\ \\text{s}$' }
          ]
        },
        {
          label: 'd',
          marks: 4,
          prompt: 'Determine her speed $v$ just as she touches the safety airbag.',
          answer: '$v = 2\\sqrt{109}\\ \\text{m s}^{-1}\\ (\\approx 20.9\\ \\text{m s}^{-1})$',
          answerNumeric: [{ name: 'v', value: 20.881, unit: 'm/s' }],
          principle:
            'The impact speed at $t = 2.8\\ \\text{s}$ is the vector resultant of the constant horizontal velocity $v_x$ and the final downward vertical velocity $v_y$ (consistent with conservation of mechanical energy).',
          solution:
            '$$v_x = 6.0\\ \\text{m s}^{-1};\\qquad v_y = v_{0y} - gt = 8.0 - 10(2.8) = -20.0\\ \\text{m s}^{-1}$$\n$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{6.0^2 + (-20.0)^2} = \\sqrt{36 + 400} = \\sqrt{436} = 2\\sqrt{109}\\ \\text{m s}^{-1}\\ (\\approx 20.9\\ \\text{m s}^{-1})$$',
          rubric: [
            { code: 'M1', text: 'Finding $v_y$ at $t = 2.8\\ \\text{s}$' },
            { code: 'A1', text: '$v_y = -20.0\\ \\text{m s}^{-1}$' },
            { code: 'M1', text: 'Pythagoras $v = \\sqrt{v_x^2 + v_y^2}$' },
            { code: 'A1', text: '$v = 2\\sqrt{109}\\ \\text{m s}^{-1}$ (or $20.9\\ \\text{m s}^{-1}$)' }
          ]
        }
      ]
    }
  ]
};
