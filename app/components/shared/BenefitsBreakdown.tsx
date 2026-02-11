import { Eyebrow } from "./Eyebrow";
import { DecoCircles } from "./DecoCircles";

export function BenefitsBreakdown() {
  const benefits = [
    {
      number: "01",
      title: "Sustained Energy",
      subtitle: "4-6 hours. No crash.",
      description:
        "Matcha and MCT create a dual-fuel system — caffeine for alertness, ketones for sustained brain energy — while L-theanine smooths the curve and eliminates jitters. Two energy pathways working in parallel means no spike, no crash, just a clean arc that carries you through your deepest work block.",
    },
    {
      number: "02",
      title: "Cognitive Performance",
      subtitle: "Think sharper under pressure.",
      description:
        "Five mushrooms working as one system. Neurogenesis support meets cellular ATP production meets stress adaptation meets antioxidant defense. Each mushroom handles a different axis — build, fuel, protect, recover — so your brain operates at full capacity without burning out. A nootropic stack built for sustained demand.",
    },
    {
      number: "03",
      title: "Complete Daily Nutrition",
      subtitle: "One scoop > five bottles.",
      description:
        "Four supergreens deliver broad-spectrum micronutrients while acerola cherry multiplies iron absorption up to 6x — unlocking the full mineral density of every green in the blend. One scoop covers what used to take five bottles on your countertop. Complete daily nutrition, simplified.",
    },
  ];

  return (
    <section className="section bg-cream-100 relative">
      <DecoCircles count={2} />

      <div className="container relative z-10">
        <div className="mb-16">
          <Eyebrow className="!text-left">Three Pillars</Eyebrow>
          <h2 className="!text-left mb-6 font-semibold">
            What Happens After Your First Scoop.
          </h2>
        </div>

        <div className="mx-auto grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="bg-cream-50 text-balance rounded-2xl bg-[#f6eee588] hover:bg-[#f6eee5] px-10! py-6! hover:drop-shadow-xl hover:top-0.5 transition-all duration-300 gap-2 flex flex-col"
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
