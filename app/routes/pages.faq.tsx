import { useState } from 'react';
import type { MetaFunction } from '@remix-run/node';
import { Eyebrow } from '~/components/shared/Eyebrow';
import { faqsByCategory, type FAQ } from '~/data/faq';

export const meta: MetaFunction = () => {
  return [
    { title: 'FAQ | SMUSH.' },
    {
      name: 'description',
      content: 'Frequently asked questions about SMUSH ingredients, shipping, and subscriptions.',
    },
  ];
};

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-cream-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-cream-700 transition-colors"
      >
        <h3 className="font-normal text-lg pr-8">{faq.question}</h3>
        <span className="text-2xl flex-shrink-0">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-6 text-cream-600 leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const categoryLabels: Record<FAQ['category'], string> = {
    product: 'Product',
    ingredients: 'Ingredients',
    shipping: 'Shipping',
    subscriptions: 'Subscriptions',
    returns: 'Returns',
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero container">
        <div className="max-w-4xl mx-auto text-center">
          <Eyebrow className="text-center justify-center">Support</Eyebrow>
          <h1>Frequently Asked Questions</h1>
          <p className="text-xl text-cream-600 max-w-3xl mx-auto font-thin leading-relaxed">
            Everything you need to know about ingredients, shipping, subscriptions, and our
            quality standards. We believe in radical transparency—if you have a question,
            we have an honest answer. Can't find what you're looking for?{' '}
            <a href="mailto:hello@smush.eu" className="underline text-cream-700 hover:text-cream-800 transition-colors">
              Email us directly
            </a>
            —we typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section container">
        <div className="max-w-4xl mx-auto">
          {Object.entries(faqsByCategory).map(([category, faqs]) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-serif mb-8">
                {categoryLabels[category as FAQ['category']]}
              </h2>
              <div className="space-y-0">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} faq={faq} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section bg-cream-100">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-6">Still Have Questions?</h2>
          <p className="text-lg text-cream-600 mb-10">
            Our team is here to help. We typically respond within 24 hours on weekdays,
            often sooner. No chatbots, no automated responses—just real humans who know
            the product inside and out.
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
