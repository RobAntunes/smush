import { useState, useEffect } from 'react';
import type { MetaFunction } from '@remix-run/node';
import { IngredientGrid } from '~/components/product/IngredientGrid';
import { Eyebrow } from '~/components/shared/Eyebrow';
import { DecoCircles } from '~/components/shared/DecoCircles';
import { useScrollReveal } from '~/hooks/useScrollReveal';
import { Button } from '~/components/shared/Button';

export const meta: MetaFunction = () => {
  return [
    { title: 'The Formula — 11 Clinically Dosed Mushroom & Supergreen Ingredients | SMUSH' },
    {
      name: 'description',
      content:
        'Explore all 11 ingredients in SMUSH: ceremonial matcha (2000mg), lion\'s mane (1000mg), cordyceps (1000mg), reishi (1000mg), chaga (500mg), spirulina (1000mg), chlorella (1000mg), wheatgrass (500mg), moringa (500mg), acerola cherry (200mg), and MCT powder (1300mg). Every dose backed by peer-reviewed research.',
    },
    { property: 'og:title', content: 'The SMUSH Formula — Every Ingredient, Every Milligram' },
    {
      property: 'og:description',
      content: '11 clinically dosed ingredients. Adaptogenic mushrooms + ceremonial matcha + supergreens. Complete dose transparency.',
    },
    { property: 'og:url', content: 'https://smush.eu/pages/formula' },
  ];
};

export default function FormulaPage() {
  const [entered, setEntered] = useState(false);
  const dosesSection = useScrollReveal();
  const dosesList = useScrollReveal({ staggerChildren: true });
  const qualityHeader = useScrollReveal();
  const qualityGrid = useScrollReveal({ staggerChildren: true });

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero container relative">
        <DecoCircles count={2} parallaxSpeed={0.1} />
        <div className="max-w-4xl mx-auto text-center relative z-10 hero-entrance" data-entered={entered ? 'true' : undefined}>
          <Eyebrow className="text-center justify-center">The Science</Eyebrow>
          <h1>11 Clinically Dosed Ingredients. Zero Proprietary Blends.</h1>
          <p className="text-xl text-cream-600 max-w-3xl mx-auto font-thin leading-relaxed">
            Every ingredient dosed at levels demonstrated in peer-reviewed research —
            not the trace amounts found in most adaptogenic supplements.
            No proprietary blends. No filler. 10g of transparent, clinical-grade nutrition.
          </p>
        </div>
      </section>

      {/* All Ingredients */}
      <IngredientGrid showAll />

      {/* Why These Doses Section */}
      <section className="section bg-cream-100 relative">
        <DecoCircles count={2} dark />
        <div className="container max-w-4xl relative z-10">
          <h2
            ref={dosesSection.ref as React.RefObject<HTMLHeadingElement>}
            className="mb-12 text-center scroll-reveal text-reveal"
          >
            Why These Exact Doses Matter
          </h2>
          <div
            ref={dosesList.ref as React.RefObject<HTMLDivElement>}
            className="space-y-8 scroll-reveal"
          >
            <div className="stagger-child">
              <h3 className="font-serif text-2xl mb-4">Clinical Dosing, Not Marketing Dosing</h3>
              <p className="text-cream-600 leading-relaxed font-thin">
                Every ingredient meets or exceeds the minimum effective dose from peer-reviewed
                research. Lion's mane at 1000mg for neurogenesis. Cordyceps at 1000mg for ATP production.
                Reishi at 1000mg for stress adaptation. Matcha at 2000mg for L-theanine + caffeine synergy.
                These are the doses where real benefits occur — not the 50mg trace amounts that
                deliver nothing measurable.
              </p>
            </div>
            <div className="stagger-child">
              <h3 className="font-serif text-2xl mb-4">Complete Label Transparency</h3>
              <p className="text-cream-600 leading-relaxed font-thin">
                Every milligram disclosed. When you see "Mushroom Blend 500mg" on another product,
                you have no idea if that's 490mg of the cheapest mushroom and 10mg of lion's mane.
                With SMUSH, you know exactly what's inside — always.
              </p>
            </div>
            <div className="stagger-child">
              <h3 className="font-serif text-2xl mb-4">Three Systems, One Scoop</h3>
              <p className="text-cream-600 leading-relaxed">
                Not eleven random ingredients — three functional systems in parallel.
                <strong className="text-cream-800"> Energy:</strong> 2000mg ceremonial matcha + 1300mg MCT
                for dual-fuel energy without crashes. <strong className="text-cream-800">Cognition:</strong> Four
                adaptogenic mushrooms (lion's mane, reishi, chaga, cordyceps) for focus, memory, and stress
                resilience. <strong className="text-cream-800">Nutrition:</strong> Four supergreens + acerola cherry
                for broad-spectrum micronutrients with enhanced bioavailability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section container">
        <div className="max-w-4xl mx-auto">
          <h2
            ref={qualityHeader.ref as React.RefObject<HTMLHeadingElement>}
            className="mb-12 text-center scroll-reveal text-reveal"
          >
            Quality & Safety Standards
          </h2>
          <div
            ref={qualityGrid.ref as React.RefObject<HTMLDivElement>}
            className="grid md:grid-cols-3 gap-12 scroll-reveal"
          >
            <div className="stagger-child text-center">
              <h3 className="font-serif text-xl mb-4">Third-Party Tested</h3>
              <p className="text-cream-600">
                Every batch independently verified by ISO-certified labs for purity,
                potency, heavy metals, and microbial contamination.
              </p>
            </div>
            <div className="stagger-child text-center">
              <h3 className="font-serif text-xl mb-4">Vegan, Non-GMO, Clean</h3>
              <p className="text-cream-600">
                100% plant-based. Zero artificial additives, sweeteners, colors, or preservatives.
                Gluten-free. No soy. No dairy. Just eleven clinical-dose ingredients.
              </p>
            </div>
            <div className="stagger-child text-center">
              <h3 className="font-serif text-xl mb-4">EU GMP-Certified</h3>
              <p className="text-cream-600">
                Manufactured in GMP-certified European facilities under the EU's strictest
                quality standards — a higher bar than most markets globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream-800 text-cream-100">
        <div className="container max-w-3xl text-center">
          <h2 className="text-cream-100 mb-6">See the Formula in Action</h2>
          <p className="text-xl mb-8 text-cream-300 font-thin">
            30 servings per pouch. 11 clinical doses per scoop. €2/day.
          </p>
          <Button href="/collections/all">Shop The Pouch — €60</Button>
        </div>
      </section>
    </>
  );
}
