import { useState, useEffect } from 'react';
import type { MetaFunction } from '@remix-run/node';
import { Eyebrow } from '~/components/shared/Eyebrow';
import { Button } from '~/components/shared/Button';
import { DecoCircles } from '~/components/shared/DecoCircles';
import { useScrollReveal } from '~/hooks/useScrollReveal';
import { useCountUp } from '~/hooks/useCountUp';

export const meta: MetaFunction = () => {
  return [
    { title: 'About SMUSH — Mushroom Matcha Formulated in Barcelona | SMUSH' },
    {
      name: 'description',
      content:
        'SMUSH was founded in Barcelona in 2024 to solve a simple problem: why do professionals spend €150+/month on separate supplements when one clinically dosed mushroom matcha blend can replace them all? Self-funded. Science-backed. €2/day.',
    },
    { property: 'og:title', content: 'About SMUSH — Formulated in Barcelona, Built for the World' },
    {
      property: 'og:description',
      content: 'The story behind SMUSH: a self-funded team of designers, nutritionists, and operators who believe the modern professional deserves better than proprietary blends and overpriced supplements.',
    },
    { property: 'og:url', content: 'https://smush.eu/pages/about' },
  ];
};

export default function AboutPage() {
  const [entered, setEntered] = useState(false);
  const storyHeader = useScrollReveal();
  const storyText = useScrollReveal();
  const valuesHeader = useScrollReveal();
  const valuesGrid = useScrollReveal({ staggerChildren: true });
  const locationsSection = useScrollReveal();
  const locationsGrid = useScrollReveal({ staggerChildren: true });

  const stat1 = useCountUp({ target: 11, delay: 0 });
  const stat2 = useCountUp({ target: 2, prefix: '€', delay: 150 });
  const stat3 = useCountUp({ target: 10, suffix: 'g', delay: 300 });

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero container relative">
        <DecoCircles count={3} parallaxSpeed={0.1} />
        <div className="max-w-4xl mx-auto text-center relative z-10 hero-entrance" data-entered={entered ? 'true' : undefined}>
          <Eyebrow className="text-center justify-center">Our Story</Eyebrow>
          <h1>Formulated in Barcelona. Built for the World.</h1>
          <p className="text-xl text-cream-600 max-w-3xl mx-auto font-thin leading-relaxed">
            Why does every adaptogenic supplement hide behind proprietary blends, taste terrible,
            and cost more than it should? Six months with nutritionists. One answer — a mushroom
            matcha supergreens blend that replaces five products for €2/day.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-cream-800 py-16">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-3 gap-8 md:divide-x md:divide-cream-700">
            {[
              { countUp: stat1, label: 'Clinical Doses' },
              { countUp: stat2, label: 'Per Serving' },
              { countUp: stat3, label: 'Per Scoop' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  ref={stat.countUp.ref as React.RefObject<HTMLDivElement>}
                  className="text-3xl md:text-4xl font-serif mb-2 text-cream-100"
                >
                  {stat.countUp.displayValue}
                </div>
                <div className="text-xs uppercase tracking-widest text-cream-400 font-thin">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section bg-cream-50">
        <div className="container max-w-4xl">
          <h2
            ref={storyHeader.ref as React.RefObject<HTMLHeadingElement>}
            className="mb-12 text-center scroll-reveal text-reveal"
          >
            The Problem We Solved
          </h2>
          <div
            ref={storyText.ref as React.RefObject<HTMLDivElement>}
            className="space-y-8 text-lg text-cream-600 leading-relaxed scroll-reveal reveal-fade"
          >
            <p>
              2024. 12-hour startup days in Barcelona. Five supplement products on the countertop,
              €150+/month, half hiding behind proprietary blends. We couldn't tell what we were
              actually consuming — or if it was doing anything.
            </p>
            <p>
              The question was simple: why can't one blend deliver adaptogenic mushrooms for
              cognition, ceremonial matcha for energy, and supergreens for nutrition — at a
              price that makes daily use sustainable?
            </p>
            <p>
              Six months of R&D later, SMUSH was born. <strong className="text-cream-800">11 ingredients
              at clinical doses. Every milligram disclosed. €2/serving.</strong> No luxury markup.
              No wellness theater. Just results.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-cream-100 relative">
        <DecoCircles count={2} dark />
        <div className="container max-w-6xl relative z-10">
          <h2
            ref={valuesHeader.ref as React.RefObject<HTMLHeadingElement>}
            className="mb-16 text-center scroll-reveal text-reveal"
          >
            Our Principles
          </h2>
          <div
            ref={valuesGrid.ref as React.RefObject<HTMLDivElement>}
            className="grid md:grid-cols-3 gap-12 scroll-reveal"
          >
            <div className="stagger-child">
              <h3 className="font-serif text-2xl mb-4">Radical Transparency</h3>
              <p className="text-cream-600">
                Every ingredient listed. Every milligram disclosed. Every dose backed by
                peer-reviewed research. No proprietary blends. No pixie dusting. No marketing
                masquerading as science.
              </p>
            </div>
            <div className="stagger-child">
              <h3 className="font-serif text-2xl mb-4">Design-Led Nutrition</h3>
              <p className="text-cream-600">
                Functional nutrition you're proud to display, not hide in a cupboard.
                Premium ingredients deserve premium presentation.
              </p>
            </div>
            <div className="stagger-child">
              <h3 className="font-serif text-2xl mb-4">Evidence Over Hype</h3>
              <p className="text-cream-600">
                No influencer endorsements. No exaggerated before/afters. Clinically effective
                adaptogens at honest prices, designed for sustained daily use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Locations */}
      <section className="section container">
        <div className="max-w-4xl mx-auto">
          <h2
            ref={locationsSection.ref as React.RefObject<HTMLHeadingElement>}
            className="mb-12 text-center scroll-reveal text-reveal"
          >
            Where We Are
          </h2>
          <div className="text-center">
            <div
              ref={locationsGrid.ref as React.RefObject<HTMLDivElement>}
              className="grid md:grid-cols-3 gap-16 mb-12 scroll-reveal"
            >
              <div className="stagger-child">
                <div className="text-5xl font-serif mb-4 text-cream-400">BCN</div>
                <h3 className="font-serif text-2xl mb-2">Barcelona</h3>
                <p className="text-cream-600">Formulation & HQ</p>
              </div>
              <div className="stagger-child">
                <div className="text-5xl font-serif mb-4 text-cream-400">BER</div>
                <h3 className="font-serif text-2xl mb-2">Berlin</h3>
                <p className="text-cream-600">Operations & Fulfillment</p>
              </div>
              <div className="stagger-child">
                <div className="text-5xl font-serif mb-4 text-cream-400">LON</div>
                <h3 className="font-serif text-2xl mb-2">London</h3>
                <p className="text-cream-600">Growth & Community</p>
              </div>
            </div>
            <p className="text-lg text-cream-600 max-w-2xl mx-auto">
              Designers, nutritionists, operators. Self-funded, no VC pressure — just
              obsession with delivering the best mushroom matcha blend on the market.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream-800 text-cream-100 relative">
        <DecoCircles count={2} dark parallaxSpeed={0.15} />
        <div className="container max-w-3xl text-center relative z-10">
          <h2 className="text-cream-100 mb-6">Join the Movement</h2>
          <p className="text-xl mb-8 text-cream-300 font-thin">
            One scoop. Five fewer products. €2/day. 30-day money-back guarantee.
          </p>
          <Button href="/collections/all">Try The Pouch — €60</Button>
        </div>
      </section>
    </>
  );
}
