export interface FAQ {
  question: string;
  answer: string;
  category: 'product' | 'ingredients' | 'shipping' | 'subscriptions' | 'returns';
}

export const faqs: FAQ[] = [
  {
    question: 'How do I prepare SMUSH?',
    answer: 'Mix one scoop (10g) with 250-300ml of hot water (80°C). Whisk vigorously until frothy. Add oat milk or honey to taste. Best consumed before 11am for optimal focus without disrupting sleep.',
    category: 'product',
  },
  {
    question: 'What does it taste like?',
    answer: 'Think premium matcha latte with earthy, slightly sweet notes. The ceremonial-grade matcha shines through, balanced by subtle umami from the mushrooms. No artificial sweeteners or flavors.',
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
    question: 'How much caffeine is in each serving?',
    answer: 'Each serving contains approximately 40-60mg of naturally occurring caffeine from matcha. That\'s about half a cup of coffee, paired with L-theanine for smooth, jitter-free energy.',
    category: 'ingredients',
  },
  {
    question: 'Why these specific dosages?',
    answer: 'Every ingredient is dosed at the minimum effective level demonstrated in peer-reviewed research. We don\'t hide behind proprietary blends or use trace amounts for label appeal. All eleven ingredients at clinical doses, fully disclosed.',
    category: 'ingredients',
  },
  {
    question: 'Where do you ship?',
    answer: 'Currently shipping to EU countries (2-4 business days) and UK (3-5 business days). Free shipping on all orders over €50. Expanding to US and Canada in Q2 2026.',
    category: 'shipping',
  },
  {
    question: 'What is your return policy?',
    answer: '30-day money-back guarantee, no questions asked. If SMUSH isn\'t for you, email us and we\'ll refund your order. Just keep the pouch—we believe in the product that much.',
    category: 'returns',
  },
  {
    question: 'How many servings per pouch?',
    answer: 'Each pouch contains 300g of blend, providing 30 servings (10g per serving). At €59.99, that\'s €2.00 per serving — less than your morning coffee, and it replaces up to five separate products.',
    category: 'product',
  },
  {
    question: 'Can I take SMUSH with other supplements?',
    answer: 'SMUSH is designed to replace your multivitamin and morning stimulant. However, it\'s safe to combine with other supplements. Consult your healthcare provider if you\'re on medication.',
    category: 'ingredients',
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
