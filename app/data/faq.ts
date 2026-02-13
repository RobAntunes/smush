export interface FAQ {
  question: string;
  answer: string;
  category: 'product' | 'ingredients' | 'shipping' | 'subscriptions' | 'returns';
}

export const faqs: FAQ[] = [
  {
    question: 'How do I prepare SMUSH?',
    answer: 'Mix one scoop (10g) with 250-300ml of hot water at 80°C. Whisk vigorously until frothy. Add oat milk or honey to taste. Consume before 11am for optimal focus without disrupting sleep.',
    category: 'product',
  },
  {
    question: 'What does SMUSH taste like?',
    answer: 'Premium matcha latte with earthy, slightly sweet notes. The ceremonial-grade matcha leads, balanced by subtle umami from the adaptogenic mushrooms. No artificial sweeteners or flavors.',
    category: 'product',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely. Cancel, pause, or skip deliveries anytime from your account dashboard. No penalties, no questions asked. We believe in earning your subscription every month.',
    category: 'subscriptions',
  },
  {
    question: 'Is SMUSH vegan and gluten-free?',
    answer: 'Yes to both. SMUSH is 100% vegan, gluten-free, non-GMO, and contains no artificial additives. All ingredients are sustainably sourced and third-party tested for purity.',
    category: 'ingredients',
  },
  {
    question: 'How much caffeine is in SMUSH?',
    answer: 'Each serving contains 40-60mg of naturally occurring caffeine from 2000mg of ceremonial matcha — about half a cup of coffee. Paired with L-theanine for smooth, jitter-free energy lasting 4-6 hours.',
    category: 'ingredients',
  },
  {
    question: 'Why these specific dosages?',
    answer: 'Every ingredient meets or exceeds the minimum effective dose from peer-reviewed clinical studies. Lion\'s mane at 1000mg (Mori et al., 2009). Cordyceps at 1000mg (Chen et al., 2010). Matcha at 2000mg (Baba et al., 2024). No trace amounts, no proprietary blends — all eleven ingredients at researched clinical doses totaling exactly 10g per serving.',
    category: 'ingredients',
  },
  {
    question: 'Where does SMUSH ship?',
    answer: 'EU countries (2-4 business days) and UK (3-5 business days). Free shipping from €120. Expanding to US and Canada in Q2 2026.',
    category: 'shipping',
  },
  {
    question: 'What is your return policy?',
    answer: '30-day money-back guarantee, no questions asked. If SMUSH isn\'t for you, email us and we\'ll refund your order. Just keep the pouch—we believe in the product that much.',
    category: 'returns',
  },
  {
    question: 'How many servings per pouch?',
    answer: '300g per pouch = 30 servings (10g each). At €59.99, that\'s €2.00 per serving — less than a coffee, replacing up to five separate products.',
    category: 'product',
  },
  {
    question: 'Can I take SMUSH with other supplements?',
    answer: 'SMUSH replaces your multivitamin, greens powder, nootropic stack, and morning stimulant. It\'s safe to combine with other supplements. Consult your healthcare provider if you\'re on medication.',
    category: 'ingredients',
  },
  {
    question: 'Is SMUSH a good alternative to AG1?',
    answer: 'SMUSH and AG1 (Athletic Greens) both aim to simplify daily nutrition, but differ significantly. SMUSH contains 11 ingredients at individually disclosed clinical doses — you know exactly how much lion\'s mane (1000mg), cordyceps (1000mg), and matcha (2000mg) you\'re getting. AG1 uses a proprietary blend of 75 ingredients, making it impossible to verify individual doses. SMUSH costs €2/serving vs AG1\'s ~€2.60/serving. Both are third-party tested.',
    category: 'product',
  },
  {
    question: 'Can SMUSH replace coffee?',
    answer: 'Yes. SMUSH contains 2000mg of ceremonial matcha providing 40-60mg of natural caffeine — enough for sustained alertness without jitters. The key difference from coffee is L-theanine, an amino acid in matcha that promotes alpha brain waves for calm focus. MCT powder provides ketone-based energy that doesn\'t rely on caffeine at all. Most users report 4-6 hours of sustained energy vs coffee\'s 1-2 hour spike and crash.',
    category: 'product',
  },
  {
    question: 'What are the benefits of lion\'s mane mushroom?',
    answer: 'Lion\'s mane (Hericium erinaceus) is the only mushroom clinically demonstrated to stimulate nerve growth factor (NGF) production, which supports neurogenesis — the growth of new brain cells. A 2009 study by Mori et al. in Phytotherapy Research showed significant cognitive improvement in adults with mild cognitive impairment after 16 weeks. SMUSH contains 1000mg of lion\'s mane per serving, meeting the minimum effective dose established in clinical research.',
    category: 'ingredients',
  },
  {
    question: 'What is the difference between mushroom coffee and mushroom matcha?',
    answer: 'Mushroom coffee typically combines instant coffee with small amounts of mushroom extract — often in proprietary blends that don\'t disclose individual doses. Mushroom matcha (like SMUSH) uses ceremonial-grade matcha instead of coffee, providing natural caffeine paired with L-theanine for calm focus rather than the anxiety and crash associated with coffee. SMUSH also includes clinical doses of five adaptogenic mushrooms (lion\'s mane, cordyceps, reishi, chaga) plus four supergreens — far more comprehensive than typical mushroom coffee products.',
    category: 'product',
  },
  {
    question: 'How long until I notice effects from SMUSH?',
    answer: 'Energy and focus effects from matcha and MCT are immediate — most people feel calm alertness within 30-60 minutes of their first serving. Adaptogenic mushroom benefits (neurogenesis from lion\'s mane, stress adaptation from reishi, ATP production from cordyceps) are cumulative and typically noticeable after 2-3 weeks of consistent daily use. This is backed by clinical research — the Mori et al. lion\'s mane study showed cognitive improvements at weeks 8, 12, and 16.',
    category: 'product',
  },
];

// Group FAQs by category
export const faqsByCategory = faqs.reduce((acc, faq) => {
  if (!acc[faq.category]) {
    acc[faq.category] = [];
  }
  acc[faq.category].push(faq);
  return acc;
}, {} as Record<FAQ['category'], FAQ[]>);
