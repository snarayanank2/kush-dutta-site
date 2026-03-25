export interface ImageData {
  src: string
  srcSet: string
  alt: string
  width: number
  height: number
  placeholder?: string
}

const IMG_BASE = '/kush-dutta-site/optimized'

export function img(
  dir: string,
  name: string,
  alt: string,
  sizes: number[] = [400, 800, 1200],
  aspectRatio: [number, number] = [3, 4],
): ImageData {
  const srcSet = sizes
    .map((w) => `${IMG_BASE}/${dir}/${name}-${w}w.webp ${w}w`)
    .join(', ')
  const largest = sizes[sizes.length - 1] as number
  return {
    src: `${IMG_BASE}/${dir}/${name}-${largest}w.webp`,
    srcSet,
    alt,
    width: largest,
    height: Math.round(largest * (aspectRatio[1] / aspectRatio[0])),
    placeholder: `${IMG_BASE}/${dir}/${name}-placeholder.webp`,
  }
}

export const siteData = {
  name: 'Kush Dutta',
  tagline: 'Fitness Coaching for APR Residents — Right Here at the Clubhouse Gym',
  heroSubtext: 'Starting to exercise after 40 can feel daunting — but it doesn\'t have to be. I work with residents of Adarsh Palm Retreat to build strength, improve mobility, and feel energetic again. No prior gym experience needed.',
  ctaText: 'Book a Free 15-Min Chat',

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],

  about: {
    title: 'Why Train With Me?',
    image: img('about', 'kush_1', 'Kush Dutta'),
    text: [
      'After 40, your body doesn\'t come with a manual. You might be dealing with a stiff back, creaky knees, low energy, or a doctor telling you to "start exercising." But where do you even begin — and how do you do it without getting hurt?',
      'That\'s where I come in. I\'ve spent 8+ years helping people build sustainable fitness habits — with a focus on safe, progressive training that respects your body\'s needs. No extreme workouts, no crash diets, no one-size-fits-all plans.',
      'I train clients right here at the Adarsh Palm Retreat Clubhouse Gym, so there\'s no commute and no excuses. We\'ll work at your pace, focus on what matters to you — whether that\'s losing weight, managing BP or sugar, reducing joint pain, or simply having more energy for your day.',
    ],
    credentials: [
      'Certified Personal Trainer (ISSA)',
      'Sports Nutrition Specialist',
      '200+ Clients Coached (Many Over 40)',
      'Safe, Joint-Friendly Training Approach',
    ],
  },

  achievements: {
    title: 'Real Results from Real People',
    subtitle: 'What clients over 40 have achieved with consistent, safe training',
    items: [
      { title: 'Clients Over 40 Trained', placement: '80+', category: 'From complete beginners to regular exercisers' },
      { title: 'Average Weight Loss', placement: '8–12 kg', category: 'In the first 6 months' },
      { title: 'Clients Who Stick With It', placement: '90%', category: 'Retention rate after 3 months' },
      { title: 'Reduced Joint Pain', placement: '85%', category: 'Of clients report less back & knee pain' },
      { title: 'Improved Blood Work', placement: '70%', category: 'Of clients saw better BP, sugar, or cholesterol numbers' },
      { title: 'Client Satisfaction', placement: '4.9 / 5', category: 'Based on client feedback' },
    ],
  },

  gallery: {
    title: 'Training in Action',
    subtitle: 'Real sessions at the Adarsh Palm Retreat Clubhouse Gym',
    items: [
      img('gallery', 'client_1', 'Client training session'),
      img('gallery', 'client_2', 'Client training session'),
      img('gallery', 'client_3', 'Client training session'),
      img('gallery', 'client_4', 'Client training session'),
    ],
  },

  programs: {
    title: 'How I Can Help You',
    subtitle: 'Every program is designed for your body, your goals, and your pace — all sessions at the APR Clubhouse Gym',
    items: [
      {
        icon: 'FaDumbbell',
        title: 'Strength & Fitness Training',
        description: 'Build functional strength that helps you in daily life — climbing stairs, carrying groceries, playing with grandkids. I\'ll teach you proper form on every exercise so you train safely and see real progress.',
      },
      {
        icon: 'FaWalking',
        title: 'Mobility & Joint Health',
        description: 'Dealing with a stiff back, tight shoulders, or knee discomfort? We\'ll work on flexibility, joint mobility, and corrective exercises to reduce pain and move freely again.',
      },
      {
        icon: 'FaAppleAlt',
        title: 'Nutrition for 40+',
        description: 'No fad diets or extreme restrictions. I\'ll help you make smarter food choices using the Indian foods you already eat — with practical guidance for managing weight, blood sugar, and cholesterol.',
      },
      {
        icon: 'FaHeartbeat',
        title: 'Lifestyle Disease Management',
        description: 'Exercise is powerful medicine for BP, diabetes, and high cholesterol. I\'ll design a program that works alongside your doctor\'s advice to help you improve your numbers and reduce dependency on medication.',
      },
    ],
  },

  pricing: {
    title: 'Simple, Honest Pricing',
    subtitle: 'No hidden fees, no lock-in contracts — sessions at the APR Clubhouse Gym',
    tiers: [
      {
        name: 'Getting Started',
        price: '4,999',
        period: '/month',
        description: 'Perfect for your first step',
        features: [
          'Personalized workout plan',
          'Basic nutrition guidelines',
          'Monthly progress check-in',
          'WhatsApp support',
        ],
        highlighted: false,
      },
      {
        name: 'Regular Training',
        price: '9,999',
        period: '/month',
        description: 'Most popular — best results',
        features: [
          'Custom training program',
          'Detailed meal plan (Indian diet friendly)',
          'Weekly check-ins',
          'Movement assessment & correction',
          'Direct WhatsApp access',
          'Plan adjustments as you progress',
        ],
        highlighted: true,
      },
      {
        name: 'Full Support',
        price: '19,999',
        period: '/month',
        description: 'Complete hands-on coaching',
        features: [
          'Everything in Regular Training',
          'Daily accountability check-ins',
          'In-person sessions at APR Clubhouse Gym',
          'Priority response time',
          'Health metrics tracking',
          'Recovery, sleep & stress management guidance',
          'Unlimited plan revisions',
        ],
        highlighted: false,
      },
    ],
  },

  testimonials: {
    title: 'What My Clients Say',
    subtitle: 'Real residents, real transformations — no gym experience required to start',
    items: [
      {
        name: 'Suresh Krishnan',
        text: 'At 52, I hadn\'t exercised in over 20 years. My doctor told me to start or go on BP medication. Kush started me slow, taught me everything patiently, and within 4 months my blood pressure was back to normal. I feel 10 years younger.',
        role: 'Age 52 — Normalized BP without medication',
        avatar: undefined as ImageData | undefined,
      },
      {
        name: 'Anita Raghavan',
        text: 'I was terrified of the gym — I thought it was only for young people. Kush made me feel completely comfortable from day one. My knee pain is almost gone, and I\'ve lost 7 kg. My husband has now joined too!',
        role: 'Age 47 — Reduced knee pain, lost 7 kg',
        avatar: undefined as ImageData | undefined,
      },
      {
        name: 'Rajesh & Meera Iyer',
        text: 'We started training together as a couple, and it\'s been the best decision we\'ve made. The convenience of training at the clubhouse gym means we never miss a session. Our energy levels are completely different now.',
        role: 'Couple, ages 54 & 50 — Training together at APR',
        avatar: undefined as ImageData | undefined,
      },
      {
        name: 'Deepa Murthy',
        text: 'After years of back pain from sitting at a desk, I was skeptical that exercise would help. Kush designed a program specifically for my back, and the improvement has been remarkable. I wish I\'d started sooner.',
        role: 'Age 45 — IT professional, resolved chronic back pain',
        avatar: undefined as ImageData | undefined,
      },
    ],
  },

  faq: {
    title: 'Common Questions',
    subtitle: 'Starting something new raises questions — here are the ones I hear most often',
    items: [
      {
        question: 'I\'ve never exercised regularly — am I too old to start?',
        answer: 'Absolutely not. Many of my clients started in their 40s and 50s with zero gym experience. We begin with the basics, move at your pace, and build from there. It\'s never too late — and starting now is the best thing you can do for your health.',
      },
      {
        question: 'I have knee / back problems — is this safe for me?',
        answer: 'Yes — in fact, the right exercise program can significantly reduce joint pain. I\'ll assess your limitations first and design exercises that strengthen the muscles around your joints without aggravating the problem. Many clients see noticeable improvement within weeks.',
      },
      {
        question: 'I have diabetes / high BP — can I still train?',
        answer: 'Definitely. Exercise is one of the most effective tools for managing lifestyle diseases. I\'ll work within your doctor\'s guidelines and design a program that complements your treatment. Several of my clients have been able to reduce their medication with their doctor\'s approval.',
      },
      {
        question: 'Do I need to come to a gym?',
        answer: 'All sessions happen at the Adarsh Palm Retreat Clubhouse Gym — it\'s right here in your community, so there\'s no travel involved. It\'s well-equipped and I\'ll guide you through every piece of equipment.',
      },
      {
        question: 'How is this different from just joining a gym on my own?',
        answer: 'Most people who join a gym on their own either get injured, don\'t see results, or quit within a few weeks. With personal training, you get a program built for your body, expert guidance on every exercise, and someone to keep you accountable. The results are dramatically different.',
      },
      {
        question: 'What if I can\'t keep up or need to go slow?',
        answer: 'That\'s completely fine — every program is tailored to your current fitness level. There\'s no competition, no pressure. We go at the pace that\'s right for you and progress gradually. Most clients are surprised at how quickly they improve.',
      },
    ],
  },

  contact: {
    title: 'Let\'s Talk About Your Goals',
    subtitle: 'Book a free 15-minute chat — no pressure, no commitment. Just a conversation about where you are and where you want to be. I\'m based right here in Adarsh Palm Retreat.',
    whatsapp: '+919663772333',
    instagram: 'https://instagram.com/kushdutta1.0',
    youtube: 'https://www.youtube.com/@kushdutta',
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Kush Dutta. All rights reserved.`,
    tagline: 'Helping Adarsh Palm Retreat residents build strength, health, and lasting fitness habits.',
  },
}
