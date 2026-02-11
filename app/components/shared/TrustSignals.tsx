import { Eyebrow } from './Eyebrow';
import { DecoCircles } from './DecoCircles';

export function TrustSignals() {
  const signals = [
    {
      title: 'Clinical Doses, Not Marketing Doses',
      description:
        'Every ingredient meets or exceeds the dosage used in peer-reviewed research. If the science says 500mg, we use 500mg. No trace amounts dressed up with marketing language. Clinical doses across all eleven ingredients, not just the ones on the front of the label.',
    },
    {
      title: 'Complete Label Transparency',
      description:
        'Every milligram is disclosed. We don\'t hide behind proprietary blends because we have nothing to hide. You\'re paying for ingredients that work, not for us to protect trade secrets that protect margins.',
    },
    {
      title: 'Made in the EU, Tested by Third Parties',
      description:
        'Manufactured in GMP-certified European facilities. Every batch independently tested for purity, potency, heavy metals, and microbial contamination. Vegan. Non-GMO. Zero artificial anything.',
    },
    {
      title: '30 Days, Risk Free',
      description:
        'Try one full pouch. If you don\'t feel the difference in your energy, focus, and daily clarity — we\'ll refund every cent. No forms. No hassle. We built this for ourselves first; we know it works.',
    },
  ];

  return (
    <section className="section bg-cream-100 relative">
      <DecoCircles count={2} />

      <div className="container max-w-5xl relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <Eyebrow className="justify-center">Our Standard</Eyebrow>
          <h2>Built on Evidence, Not Hype.</h2>
        </div>

        <div className="p-1">
          <div className="space-y-0 border-t border-cream-300 p-2!">
            {signals.map((signal, i) => (
              <div key={signal.title} className="border-b p-2! border-cream-300 py-10 grid md:grid-cols-3 gap-8 items-start">
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
