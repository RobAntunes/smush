import type { MetaFunction } from '@remix-run/node';
import { Eyebrow } from '~/components/shared/Eyebrow';
import { Button } from '~/components/shared/Button';

export const meta: MetaFunction = () => {
  return [
    { title: 'About | SMUSH.' },
    {
      name: 'description',
      content: 'The story behind SMUSH. - formulated in Barcelona for the modern professional.',
    },
  ];
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero container">
        <div className="max-w-4xl mx-auto text-center">
          <Eyebrow className="text-center justify-center">Our Story</Eyebrow>
          <h1>Formulated in Barcelona. Built for the World.</h1>
          <p className="text-xl text-cream-600 max-w-3xl mx-auto font-thin leading-relaxed">
            SMUSH started with a simple question: Why does every supplement taste terrible,
            hide behind proprietary blends, and cost more than it should? We spent six months
            finding a better answer.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section bg-cream-50">
        <div className="container max-w-4xl">
          <h2 className="mb-12 text-center">The Problem We Solved</h2>
          <div className="space-y-8 text-lg text-cream-600 leading-relaxed">
            <p>
              In 2024, we were working 12-hour days building startups in Barcelona. Between
              morning coffee, afternoon supplements, and evening vitamins, we were juggling
              5-6 different products and spending €150+/month on our wellness stack. The
              countertop was cluttered. The routine was exhausting.
            </p>
            <p>
              We asked ourselves: why can't one product deliver comprehensive daily nutrition—
              nootropics for focus, supergreens for vitality, adaptogens for stress—at a price
              that makes daily use sustainable? Why do premium supplements either taste like
              pond scum or hide their ingredients behind "proprietary blends"?
            </p>
            <p>
              Six months of R&D with nutritionists later, SMUSH was born. <strong className="text-cream-800">
              Clinical doses of 11 premium ingredients. Complete transparency on every milligram.
              €2 per serving instead of €3-4.</strong> Designed for professionals who want results
              without the luxury markup or Instagram wellness theater.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-cream-100">
        <div className="container max-w-6xl">
          <h2 className="mb-16 text-center">Our Principles</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-2xl mb-4">Radical Transparency</h3>
              <p className="text-cream-600">
                Every ingredient listed. Every dose backed by research. No proprietary
                blends hiding underdosed fillers, no "pixie dusting" trace amounts, no
                marketing BS masquerading as science.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4">Design Matters</h3>
              <p className="text-cream-600">
                We're tired of clinical tubs cluttering countertops. Functional products
                should be art objects worth displaying—something you're proud to have in
                your morning ritual, not hidden in a cupboard.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4">Quality Over Hype</h3>
              <p className="text-cream-600">
                No influencer endorsements. No exaggerated before/after photos. No false
                promises of overnight transformation. Just clinically effective ingredients
                at honest prices, designed for long-term use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Locations */}
      <section className="section container">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-center">Where We Are</h2>
          <div className="text-center">
            <div className="grid md:grid-cols-3 gap-16 mb-12">
              <div>
                <div className="text-5xl font-serif mb-4 text-cream-400">BCN</div>
                <h3 className="font-serif text-2xl mb-2">Barcelona</h3>
                <p className="text-cream-600">Formulation & HQ</p>
              </div>
              <div>
                <div className="text-5xl font-serif mb-4 text-cream-400">BER</div>
                <h3 className="font-serif text-2xl mb-2">Berlin</h3>
                <p className="text-cream-600">Operations & Fulfillment</p>
              </div>
              <div>
                <div className="text-5xl font-serif mb-4 text-cream-400">LON</div>
                <h3 className="font-serif text-2xl mb-2">London</h3>
                <p className="text-cream-600">Growth & Community</p>
              </div>
            </div>
            <p className="text-lg text-cream-600 max-w-2xl mx-auto">
              Built by a distributed team of designers, nutritionists, and operators who
              believe the modern professional deserves better. No venture capital, no
              investor pressure—just a self-funded team obsessed with quality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream-800 text-cream-100">
        <div className="container max-w-3xl text-center">
          <h2 className="text-cream-100 mb-6">Join the Movement</h2>
          <p className="text-xl mb-8 text-cream-300 font-thin">
            Thousands of professionals have switched from coffee to SMUSH. Will you?
          </p>
          <Button href="/collections/all">Try The Pouch</Button>
        </div>
      </section>
    </>
  );
}
