import { useScrollReveal } from '~/hooks/useScrollReveal';
import { useCountUp } from '~/hooks/useCountUp';

export function StatsSection() {
  const section = useScrollReveal();

  const stat1 = useCountUp({ target: 11, delay: 0 });
  const stat2 = useCountUp({ target: 5, delay: 150 });
  const stat3 = useCountUp({ target: 2, prefix: '\u20AC', delay: 300 });
  const stat4 = useCountUp({ target: 100, suffix: '%', delay: 450 });

  const stats = [
    { countUp: stat1, label: 'Clinically Dosed Ingredients' },
    { countUp: stat2, label: 'Adaptogenic Mushrooms' },
    { countUp: stat3, label: 'Per Daily Serving' },
    { countUp: stat4, label: 'Dose Transparency' },
  ];

  return (
    <section
      ref={section.ref as React.RefObject<HTMLElement>}
      className="bg-cream-800 py-20 relative scroll-reveal reveal-fade"
      aria-label="SMUSH key statistics"
    >
      <div className="container max-w-5xl relative z-10">
        <h2 className="sr-only">SMUSH Mushroom Matcha Blend by the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x md:divide-cream-700">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-8">
              <div
                ref={stat.countUp.ref as React.RefObject<HTMLDivElement>}
                className={`text-4xl md:text-5xl font-serif mb-3 text-cream-100${section.isRevealed ? ' stat-glow' : ''}`}
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
  );
}
