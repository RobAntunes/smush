import { Eyebrow } from './Eyebrow';
import { DecoCircles } from './DecoCircles';
import { useScrollReveal } from '~/hooks/useScrollReveal';

export function TrustSignals() {
  const signals = [
    {
      title: 'Clinical Doses Backed by Research',
      description:
        'Every ingredient meets or exceeds the minimum effective dose from published clinical studies. Lion\'s mane at 1000mg for neurogenesis. Cordyceps at 1000mg for ATP production. Reishi at 1000mg for stress adaptation. Matcha at 2000mg for sustained focus. The doses that work — not the trace amounts that fit a marketing budget.',
    },
    {
      title: 'Zero Proprietary Blends',
      description:
        'Every milligram of every ingredient, disclosed. No "proprietary blend" labels hiding underdosed fillers. No pixie-dusted trace amounts. You know exactly what you\'re consuming — every dose, every day.',
    },
    {
      title: 'Third-Party Tested, EU GMP-Certified',
      description:
        'Manufactured in GMP-certified European facilities under the EU\'s strictest quality standards. Every batch independently tested by ISO-certified labs for purity, potency, heavy metals, and microbial contamination. 100% vegan. Non-GMO. Zero artificial anything.',
    },
    {
      title: '30-Day Money-Back Guarantee',
      description:
        'One full pouch, 30 days. If you don\'t notice a meaningful difference in energy, clarity, and focus — full refund, no questions. We formulated this for ourselves first. We know it works.',
    },
  ];

  const header = useScrollReveal();
  const list = useScrollReveal({ staggerChildren: true });

  return (
    <section className="section bg-cream-100 relative" aria-label="SMUSH quality and trust standards">
      <DecoCircles count={2} />

      <div className="container max-w-5xl relative z-10">
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className="text-center mb-20 max-w-3xl mx-auto scroll-reveal"
        >
          <Eyebrow className="justify-center">Quality Standards</Eyebrow>
          <h2>Built on Evidence, Not Marketing Hype</h2>
        </div>

        <div className="p-1">
          <div
            ref={list.ref as React.RefObject<HTMLDivElement>}
            className="space-y-0 border-t border-cream-300 p-2! scroll-reveal"
          >
            {signals.map((signal, i) => (
              <div key={signal.title} className="stagger-child border-b p-2! border-cream-300 py-10 grid md:grid-cols-3 gap-8 items-start">
                <h3 className="text-xl font-serif text-cream-800 md:col-span-1">
                  <span className="text-xs font-sans text-cream-400 tracking-widest uppercase block mb-2">0{i + 1}</span>
                  {signal.title}
                </h3>
                <p className="text-base leading-relaxed text-cream-600 font-thin md:col-span-2">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
