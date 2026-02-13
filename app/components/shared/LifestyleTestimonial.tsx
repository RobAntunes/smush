import { testimonials } from '~/data/testimonials';
import { DecoCircles } from './DecoCircles';
import { useScrollReveal } from '~/hooks/useScrollReveal';

export function LifestyleTestimonial() {
  const grid = useScrollReveal({ staggerChildren: true });

  return (
    <section className="section bg-cream-100 relative">
      <DecoCircles count={2} />

      <div className="container max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <span className="eyebrow justify-center">Real People, Real Results</span>
        </div>

        <div
          ref={grid.ref as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-3 gap-px bg-cream-300 scroll-reveal"
        >
          {testimonials.map((t, i) => (
            <div key={i} className="stagger-child bg-cream-50 p-12 text-center flex flex-col justify-between relative">
              {i === 0 && <span className="deco-quote absolute -top-12 left-6 scroll-reveal reveal-scale">"</span>}
              <blockquote className="text-xl font-serif text-cream-800 mb-8 leading-snug font-thin relative z-10">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="text-sm font-normal text-cream-700">{t.author}</p>
                <p className="text-xs text-cream-500 uppercase tracking-wider mt-1">
                  {t.role}{t.location && ` — ${t.location}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
