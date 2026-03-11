export const siteData = {
  name: 'Kush Dutta',
  tagline: 'Your Personal Trainer & Fitness Coach',
  heroSubtext: 'No matter where you are in your fitness journey — just starting out or looking to break through a plateau — I\'ll help you get stronger, feel confident, and actually enjoy the process.',
  ctaText: 'Book a Free Consultation',

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Results', href: '#results' },
    { label: 'Programs', href: '#programs' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],

  about: {
    title: 'Why Train With Me?',
    text: [
      'I know the gym can feel overwhelming — confusing machines, complicated diets, and advice that doesn\'t seem to work. I\'ve been there, and I\'ve spent 8+ years learning what actually works so you don\'t have to figure it out alone.',
      'My approach is simple: we start where you are, set realistic goals, and build habits that stick. No crash diets, no ego lifting, no cookie-cutter plans. Just a program built around your life, your body, and what you actually enjoy.',
      'Whether you want to lose weight, build muscle, get more energy, or just feel comfortable in the gym — I\'ll guide you every step of the way.',
    ],
    credentials: [
      'Certified Personal Trainer (ISSA)',
      'Sports Nutrition Specialist',
      '200+ Clients Coached',
      'Beginner-Friendly Approach',
    ],
  },

  achievements: {
    title: 'Real Results',
    subtitle: 'Here\'s what\'s possible with the right guidance and consistency',
    items: [
      { title: 'Average Client Fat Loss', placement: '8–12 kg', category: 'In the first 6 months' },
      { title: 'Clients Who Stick With It', placement: '90%', category: 'Retention rate after 3 months' },
      { title: 'Beginners Coached', placement: '120+', category: 'From zero gym experience to confident' },
      { title: 'Avg. Strength Gain', placement: '40–60%', category: 'On key lifts in 12 weeks' },
      { title: 'Client Satisfaction', placement: '4.9 / 5', category: 'Based on client feedback' },
      { title: 'Competition Titles', placement: '6 Wins', category: 'National & state level — I practice what I preach' },
    ],
  },

  programs: {
    title: 'How I Can Help You',
    subtitle: 'Pick what fits your life — every program is built around your goals and schedule',
    items: [
      {
        icon: 'FaDumbbell',
        title: 'Gym Starter Program',
        description: 'New to the gym? I\'ll teach you proper form, build your confidence with equipment, and create a simple routine you can actually follow. No judgement, no jargon — just steady progress.',
      },
      {
        icon: 'FaLaptop',
        title: 'Online Coaching',
        description: 'Can\'t make it in person? Get a fully personalized plan delivered to your phone — workout videos, weekly check-ins, form reviews, and direct access to me via WhatsApp.',
      },
      {
        icon: 'FaAppleAlt',
        title: 'Nutrition Guidance',
        description: 'No fad diets or extreme restrictions. I\'ll create an eating plan around foods you already enjoy, with clear portion guidance and meal ideas that fit your lifestyle.',
      },
      {
        icon: 'FaTrophy',
        title: 'Level-Up Coaching',
        description: 'Already comfortable in the gym but stuck in a rut? I\'ll audit your routine, fix what\'s holding you back, and design a progressive program to push past your plateau.',
      },
    ],
  },

  pricing: {
    title: 'Simple, Honest Pricing',
    subtitle: 'No hidden fees, no lock-in contracts — just choose what works for you',
    tiers: [
      {
        name: 'Starter',
        price: '4,999',
        period: '/month',
        description: 'Great for getting started',
        features: [
          'Personalized workout plan',
          'Basic nutrition guidelines',
          'Monthly progress check-in',
          'Email & chat support',
        ],
        highlighted: false,
      },
      {
        name: 'Pro',
        price: '9,999',
        period: '/month',
        description: 'Most popular — best value',
        features: [
          'Custom training program',
          'Detailed meal plan',
          'Weekly video check-ins',
          'Form correction via video',
          'Direct WhatsApp access',
          'Plan adjustments as you progress',
        ],
        highlighted: true,
      },
      {
        name: 'Premium',
        price: '19,999',
        period: '/month',
        description: 'Full hands-on coaching',
        features: [
          'Everything in Pro',
          'Daily accountability check-ins',
          'In-person sessions (if local)',
          'Priority response time',
          'Advanced progress tracking',
          'Supplement & recovery guidance',
          'Unlimited plan revisions',
        ],
        highlighted: false,
      },
    ],
  },

  testimonials: {
    title: 'What My Clients Say',
    subtitle: 'Real people, real stories — no bodybuilding experience required',
    items: [
      {
        name: 'Rahul Sharma',
        text: 'I hadn\'t stepped inside a gym in my life. Kush made me feel welcome from day one, taught me everything from scratch, and within 6 months I\'d lost 15kg. I actually look forward to working out now.',
        role: 'Started from scratch — lost 15kg',
      },
      {
        name: 'Priya Mehta',
        text: 'I tried so many YouTube routines and nothing stuck. Kush\'s online coaching gave me structure and someone to be accountable to. That\'s what made the difference. Best investment I\'ve made in myself.',
        role: 'Online coaching client',
      },
      {
        name: 'Amit Patel',
        text: 'I\'d been going to the gym for 2 years with barely any progress. Kush completely overhauled my routine and nutrition — I gained more in 3 months with him than I did in the previous 2 years alone.',
        role: 'Broke through a 2-year plateau',
      },
      {
        name: 'Sneha Kapoor',
        text: 'What I love about training with Kush is that he actually listens. He built a diet plan I could stick to without giving up the foods I enjoy. It never felt like a punishment — just a better way of eating.',
        role: 'Nutrition & training client',
      },
    ],
  },

  contact: {
    title: 'Let\'s Talk About Your Goals',
    subtitle: 'Book a free consultation — no pressure, no commitment. Just a conversation about where you are and where you want to be.',
    formspreeId: 'YOUR_FORMSPREE_ID',
    whatsapp: '+91XXXXXXXXXX',
    email: 'kush@example.com',
    instagram: 'https://instagram.com/kushdutta',
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Kush Dutta. All rights reserved.`,
    tagline: 'Helping everyday people build strength, confidence, and lasting habits.',
  },
}
