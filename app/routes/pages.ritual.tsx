import { useState, useEffect } from 'react';
import type { MetaFunction } from '@remix-run/node';
import { Eyebrow } from '~/components/shared/Eyebrow';
import { Button } from '~/components/shared/Button';
import { DecoCircles } from '~/components/shared/DecoCircles';
import { useScrollReveal } from '~/hooks/useScrollReveal';

export const meta: MetaFunction = () => {
  return [
    { title: 'How to Prepare Mushroom Matcha — The SMUSH Ritual | SMUSH' },
    {
      name: 'description',
      content:
        'Learn how to prepare SMUSH mushroom matcha blend for optimal focus and energy. Mix one 10g scoop at 80°C, consume before 11am. Tips for maximizing adaptogenic mushroom and L-theanine benefits.',
    },
    { property: 'og:title', content: 'The SMUSH Ritual — How to Prepare Your Mushroom Matcha' },
    {
      property: 'og:description',
      content: 'Step-by-step guide to preparing SMUSH mushroom matcha supergreens for maximum focus and sustained energy.',
    },
    { property: 'og:url', content: 'https://smush.eu/pages/ritual' },
  ];
};

// HowTo JSON-LD for rich snippets
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Prepare SMUSH Mushroom Matcha Blend',
  description: 'A step-by-step guide to preparing SMUSH mushroom matcha supergreens blend for optimal focus, energy, and nutrition.',
  totalTime: 'PT3M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Measure',
      text: 'Add one level scoop (10g) of SMUSH mushroom matcha blend into your favorite mug or shaker.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Mix',
      text: 'Add 250-300ml of hot water at 80°C (176°F). Whisk vigorously or shake for 30 seconds until smooth and frothy.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Customize and enjoy',
      text: 'Optionally add oat milk for creaminess, honey for sweetness, or ice for a cold brew. Consume before 11am for optimal focus.',
    },
  ],
};

export default function RitualPage() {
  const [entered, setEntered] = useState(false);
  const stepsHeader = useScrollReveal();
  const stepsGrid = useScrollReveal({ staggerChildren: true });
  const timingHeader = useScrollReveal();
  const timingList = useScrollReveal({ staggerChildren: true });
  const tipsHeader = useScrollReveal();
  const tipsGrid = useScrollReveal({ staggerChildren: true });

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero Section */}
      <section className="section-hero container relative">
        <DecoCircles count={2} parallaxSpeed={0.1} />
        <div className="max-w-4xl mx-auto text-center relative z-10 hero-entrance" data-entered={entered ? 'true' : undefined}>
          <Eyebrow className="text-center justify-center">The Practice</Eyebrow>
          <h1>How to Prepare Your Mushroom Matcha Ritual</h1>
          <p className="text-xl text-cream-600 max-w-3xl mx-auto font-thin leading-relaxed">
            Replace coffee-on-autopilot with a three-minute adaptogenic matcha preparation
            that signals sustained focus and calm energy for the hours ahead.
          </p>
        </div>
      </section>

      {/* Preparation Steps */}
      <section className="section bg-cream-50">
        <div className="container max-w-6xl">
          <h2
            ref={stepsHeader.ref as React.RefObject<HTMLHeadingElement>}
            className="mb-16 text-center scroll-reveal text-reveal"
          >
            The Perfect Mushroom Matcha Preparation
          </h2>
          <div
            ref={stepsGrid.ref as React.RefObject<HTMLDivElement>}
            className="grid md:grid-cols-3 gap-12 scroll-reveal"
          >
            <div className="stagger-child">
              <div className="text-5xl font-serif mb-6 text-cream-300 font-thin">01</div>
              <h3 className="font-serif text-2xl mb-4">Measure</h3>
              <p className="text-cream-600">
                One level scoop (10g) into your favorite mug or shaker. All 11 clinically
                dosed ingredients in every scoop. Precision matters.
              </p>
            </div>
            <div className="stagger-child">
              <div className="text-5xl font-serif mb-6 text-cream-300 font-thin">02</div>
              <h3 className="font-serif text-2xl mb-4">Mix</h3>
              <p className="text-cream-600">
                Add 250-300ml hot water at 80°C (176°F) — optimal for preserving L-theanine
                and catechins. Whisk or shake 30 seconds until frothy. Above 85°C degrades bioactives.
              </p>
            </div>
            <div className="stagger-child">
              <div className="text-5xl font-serif mb-6 text-cream-300 font-thin">03</div>
              <h3 className="font-serif text-2xl mb-4">Customize</h3>
              <p className="text-cream-600">
                Oat milk for creaminess, raw honey for sweetness, or ice for a cold adaptogenic
                latte. Smooth, earthy base with subtle umami from the mushroom extracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timing Section */}
      <section className="section bg-cream-100 relative">
        <DecoCircles count={2} dark />
        <div className="container max-w-4xl relative z-10">
          <h2
            ref={timingHeader.ref as React.RefObject<HTMLHeadingElement>}
            className="mb-12 text-center scroll-reveal text-reveal"
          >
            When to Take Adaptogenic Mushroom Matcha
          </h2>
          <div
            ref={timingList.ref as React.RefObject<HTMLDivElement>}
            className="space-y-8 scroll-reveal"
          >
            <div className="stagger-child">
              <h3 className="font-serif text-2xl mb-4">Before 11am for Optimal Focus</h3>
              <p className="text-cream-600 leading-relaxed">
                Morning, empty stomach or with light breakfast. 40-60mg natural caffeine from
                2000mg ceremonial matcha — half a cup of coffee — paired with L-theanine for calm
                alertness. Before 11am avoids disrupting evening cortisol and sleep.
              </p>
            </div>
            <div className="stagger-child">
              <h3 className="font-serif text-2xl mb-4">Hydrate First</h3>
              <p className="text-cream-600 leading-relaxed">
                500ml water upon waking, SMUSH 10-15 minutes later. Rehydration after 8 hours
                of sleep restores cellular function and amplifies adaptogenic benefits.
              </p>
            </div>
            <div className="stagger-child">
              <h3 className="font-serif text-2xl mb-4">Mindful Preparation</h3>
              <p className="text-cream-600 leading-relaxed">
                5-10 minutes, no distractions. A signal to your nervous system that the day
                has begun with intention. Ceremonial matcha preparation has cultivated presence
                in Japan for centuries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Maximizing Benefits */}
      <section className="section container">
        <div className="max-w-4xl mx-auto">
          <h2
            ref={tipsHeader.ref as React.RefObject<HTMLHeadingElement>}
            className="mb-12 text-center scroll-reveal text-reveal"
          >
            Maximizing Adaptogenic Mushroom Benefits
          </h2>
          <div
            ref={tipsGrid.ref as React.RefObject<HTMLDivElement>}
            className="grid md:grid-cols-2 gap-8 scroll-reveal"
          >
            <div className="stagger-child border border-cream-300 p-8 rounded-lg hover:bg-cream-50 transition-colors duration-300">
              <h3 className="font-serif text-xl mb-4">Consistency Compounds</h3>
              <p className="text-cream-600">
                Adaptogens work cumulatively, not acutely. Neurogenesis and immune benefits
                build over 2-3 weeks of daily use. Sustainable performance, not a stimulant hit.
              </p>
            </div>
            <div className="stagger-child border border-cream-300 p-8 rounded-lg hover:bg-cream-50 transition-colors duration-300">
              <h3 className="font-serif text-xl mb-4">Move After</h3>
              <p className="text-cream-600">
                Light exercise 30 minutes after consumption enhances circulation and nutrient
                absorption. Movement amplifies the calm-alert state adaptogens create.
              </p>
            </div>
            <div className="stagger-child border border-cream-300 p-8 rounded-lg hover:bg-cream-50 transition-colors duration-300">
              <h3 className="font-serif text-xl mb-4">Find Your Window</h3>
              <p className="text-cream-600">
                Peak focus hits 45-90 minutes post-consumption as L-theanine + caffeine reach
                full synergy. Schedule deep work in that window.
              </p>
            </div>
            <div className="stagger-child border border-cream-300 p-8 rounded-lg hover:bg-cream-50 transition-colors duration-300">
              <h3 className="font-serif text-xl mb-4">Temperature Matters</h3>
              <p className="text-cream-600">
                80°C (176°F) preserves L-theanine and catechins. No thermometer? Let boiling
                water rest 2 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-cream-800 text-cream-100 relative">
        <DecoCircles count={2} dark parallaxSpeed={0.15} />
        <div className="container max-w-3xl text-center relative z-10">
          <h2 className="text-cream-100 mb-6">Ready to Replace Your Coffee?</h2>
          <p className="text-xl mb-8 text-cream-300 font-thin">
            30 servings. 11 clinical doses. €2/day. 30-day money-back guarantee.
          </p>
          <Button href="/collections/all">Shop The Pouch — €60</Button>
        </div>
      </section>
    </>
  );
}
