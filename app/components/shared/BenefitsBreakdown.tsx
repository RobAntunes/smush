import { Eyebrow } from "./Eyebrow";
import { DecoCircles } from "./DecoCircles";
import { useScrollReveal } from '~/hooks/useScrollReveal';

export function BenefitsBreakdown() {
  const benefits = [
    {
      number: "01",
      title: "Sustained Energy Without the Crash",
      subtitle: "Dual-fuel energy from matcha + MCT.",
      description:
        "Ceremonial matcha (2000mg) delivers 40-60mg of natural caffeine while MCT produces ketones for sustained brain energy. L-theanine smooths the curve — no jitters, no crash, just 4-6 hours of calm alertness. Two energy pathways working in parallel.",
    },
    {
      number: "02",
      title: "Cognitive Focus from Adaptogenic Mushrooms",
      subtitle: "Five functional mushrooms. One nootropic stack.",
      description:
        "Lion's mane (1000mg) drives neurogenesis and memory. Cordyceps (1000mg) fuels cellular ATP. Reishi (1000mg) regulates stress response. Chaga (500mg) provides antioxidant defense. Each targets a different cognitive axis — build, fuel, protect, recover.",
    },
    {
      number: "03",
      title: "Complete Daily Nutrition in One Scoop",
      subtitle: "Your greens powder and multivitamin, replaced.",
      description:
        "Spirulina, chlorella, wheatgrass, and moringa (1000mg, 1000mg, 500mg, 500mg) deliver broad-spectrum micronutrients, complete plant protein, and concentrated chlorophyll. Acerola cherry adds natural vitamin C that enhances iron absorption up to 6x. One 10g scoop. Five fewer products.",
    },
  ];

  const header = useScrollReveal();
  const grid = useScrollReveal({ staggerChildren: true });

  return (
    <section className="section bg-cream-100 relative" aria-label="Benefits of SMUSH mushroom matcha blend">
      <DecoCircles count={2} />

      <div className="container relative z-10">
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className="mb-16 scroll-reveal"
        >
          <Eyebrow className="!text-left">Why Mushroom Matcha</Eyebrow>
          <h2 className="!text-left mb-6 font-semibold">
            What Happens After Your First Scoop
          </h2>
        </div>

        <div
          ref={grid.ref as React.RefObject<HTMLDivElement>}
          className="mx-auto grid md:grid-cols-3 gap-6 scroll-reveal"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="stagger-child bg-cream-50 text-balance rounded-2xl bg-[#f6eee588] hover:bg-[#f6eee5] px-10! py-6! hover:drop-shadow-xl hover:top-0.5 transition-all! duration-300 gap-2 flex flex-col"
            >
              <div>
                <span className="text-4xl font-serif text-cream-300 mb-6">
                  {benefit.number}
                </span>
                <h3 className="text-xl font-serif text-cream-800 mb-2">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-xs font-thin uppercase tracking-wider text-cream-500 mb-5">
                {benefit.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-cream-600 flex-1 font-extralight">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
