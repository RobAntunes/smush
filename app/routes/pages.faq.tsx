import { useState, useEffect } from 'react';
import type { MetaFunction } from '@remix-run/node';
import { Eyebrow } from '~/components/shared/Eyebrow';
import { Button } from '~/components/shared/Button';
import { DecoCircles } from '~/components/shared/DecoCircles';
import { useScrollReveal } from '~/hooks/useScrollReveal';
import { faqs, faqsByCategory, type FAQ } from '~/data/faq';

export const meta: MetaFunction = () => {
  return [
    { title: 'FAQ — Mushroom Matcha Blend Questions | SMUSH' },
    {
      name: 'description',
      content:
        'Answers to common questions about SMUSH mushroom matcha supergreens blend — ingredients, caffeine content, clinical dosing, shipping to EU & UK, vegan certifications, and our 30-day money-back guarantee.',
    },
    { property: 'og:title', content: 'Frequently Asked Questions | SMUSH' },
    {
      property: 'og:description',
      content: 'Everything you need to know about SMUSH — ingredients, dosing, shipping, subscriptions, and our 30-day guarantee.',
    },
    { property: 'og:url', content: 'https://smush.eu/pages/faq' },
  ];
};

// FAQPage JSON-LD for Google featured snippets + AI citation
function buildFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function FAQCategory({ category, label, faqs: categoryFaqs }: { category: string; label: string; faqs: FAQ[] }) {
  const sectionReveal = useScrollReveal();

  return (
    <div
      ref={sectionReveal.ref as React.RefObject<HTMLDivElement>}
      className="mb-16 scroll-reveal"
    >
      <h2 className="text-2xl font-serif mb-8">{label}</h2>
      <div className="space-y-0">
        {categoryFaqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-cream-300" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-cream-700 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="font-normal text-lg pr-8" itemProp="name">{faq.question}</h3>
        <span
          className={`text-2xl flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <span className="text-cream-600 leading-relaxed block" itemProp="text">{faq.answer}</span>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [entered, setEntered] = useState(false);

  const categoryLabels: Record<FAQ['category'], string> = {
    product: 'Product',
    ingredients: 'Ingredients',
    shipping: 'Shipping',
    subscriptions: 'Subscriptions',
    returns: 'Returns',
  };

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema()) }}
      />

      {/* Hero Section */}
      <section className="section-hero container relative">
        <DecoCircles count={2} parallaxSpeed={0.1} />
        <div className="max-w-4xl mx-auto text-center relative z-10 hero-entrance" data-entered={entered ? 'true' : undefined}>
          <Eyebrow className="text-center justify-center">Support</Eyebrow>
          <h1>Frequently Asked Questions</h1>
          <p className="text-xl text-cream-600 max-w-3xl mx-auto font-thin leading-relaxed">
            Everything you need to know about our mushroom matcha supergreens blend.
            Can't find what you're looking for?{' '}
            <a href="mailto:hello@smush.eu" className="underline text-cream-700 hover:text-cream-800 transition-colors">
              Email us directly
            </a>.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section container" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto">
          {Object.entries(faqsByCategory).map(([category, categoryFaqs]) => (
            <FAQCategory
              key={category}
              category={category}
              label={categoryLabels[category as FAQ['category']]}
              faqs={categoryFaqs}
            />
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section bg-cream-800 text-cream-100 relative">
        <DecoCircles count={2} dark parallaxSpeed={0.15} />
        <div className="container max-w-3xl text-center relative z-10">
          <h2 className="text-cream-100 mb-6">Still Have Questions?</h2>
          <p className="text-lg text-cream-300 mb-10 font-thin">
            Real humans, not chatbots. We typically respond within 24 hours.
          </p>
          <a
            href="mailto:hello@smush.eu"
            className="btn inline-block"
          >
            Contact Support
          </a>
        </div>
      </section>
    </>
  );
}
