import type { MetaFunction } from '@remix-run/node';
import { IngredientGrid } from '~/components/product/IngredientGrid';
import { Eyebrow } from '~/components/shared/Eyebrow';

export const meta: MetaFunction = () => {
  return [
    { title: 'The Formula | SMUSH.' },
    {
      name: 'description',
      content: '11 clinically-dosed ingredients. Zero compromise. Complete transparency.',
    },
  ];
};

export default function FormulaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero container">
        <div className="max-w-4xl mx-auto text-center">
          <Eyebrow className="text-center justify-center">The Science</Eyebrow>
          <h1>11 Ingredients. Zero Compromise.</h1>
          <p className="text-xl text-cream-600 max-w-3xl mx-auto font-thin leading-relaxed">
            Nootropics meet supergreens meet adaptogens. Every ingredient dosed at clinical
            research levels—not the homeopathic trace amounts you'll find in most wellness
            products. No proprietary blends hiding underdosed ingredients. No "fairy dusting."
            Just transparent, clinical-grade daily nutrition designed for professionals who
            value both effectiveness and honesty.
          </p>
        </div>
      </section>

      {/* All Ingredients */}
      <IngredientGrid showAll />

      {/* Why These Doses Section */}
      <section className="section bg-cream-100">
        <div className="container max-w-4xl">
          <h2 className="mb-12 text-center">Why These Exact Doses?</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">Clinical Dosing</h3>
              <p className="text-cream-600 leading-relaxed font-thin">
                Every ingredient is dosed at the minimum effective level demonstrated in
                peer-reviewed research. Our five mushrooms, matcha, MCT, and supergreens all hit
                or exceed the thresholds where real benefits occur — not the trace amounts that
                look good on a label but do nothing in your body.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4">Complete Transparency</h3>
              <p className="text-cream-600 leading-relaxed font-thin">
                We list every single milligram. No proprietary blends hiding underdosed ingredients
                behind marketing jargon. What's on the label is exactly what's in the pouch — not
                "mushroom blend* (*amount undisclosed)" or "proprietary nootropic matrix." You
                deserve to know what you're consuming.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4">Designed System, Not Random Mix</h3>
              <p className="text-cream-600 leading-relaxed">
                Matcha + MCT = sustained energy without glucose spikes or insulin crashes. Mushrooms +
                adaptogens = stress resilience and cognitive enhancement without overstimulation.
                Supergreens + acerola = complete micronutrient coverage in bioavailable forms. This is
                functional synergy backed by research, not throwing trendy ingredients in a blender
                and hoping for virality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section container">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-center">Quality Standards</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">Third-Party Tested</h3>
              <p className="text-cream-600">
                Every batch verified for purity, potency, heavy metals, and microbial
                contamination by independent ISO-certified labs. We don't grade our own homework.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">Non-GMO & Vegan</h3>
              <p className="text-cream-600">
                100% plant-based, sustainably sourced, zero artificial additives, sweeteners,
                colors, or preservatives. Just real ingredients at clinical doses.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">EU Manufacturing</h3>
              <p className="text-cream-600">
                Produced in GMP-certified facilities adhering to Europe's strictest quality
                standards. Higher regulatory bar than most markets globally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
