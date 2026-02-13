import { useState, type FormEvent } from 'react';
import { DecoCircles } from './DecoCircles';
import { useScrollReveal } from '~/hooks/useScrollReveal';
import { useCountUp } from '~/hooks/useCountUp';

export function NewsletterCTA() {
  const heading = useScrollReveal();
  const formReveal = useScrollReveal();
  const badges = useScrollReveal({ staggerChildren: true });
  const discount = useCountUp({ target: 10, suffix: '%', delay: 200 });

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || status === 'submitting') return;

    setStatus('submitting');

    // TODO: Replace with actual email service integration (Klaviyo, Mailchimp, etc.)
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-20! md:py-20! relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #4a3f35 0%, #3d342b 100%)' }} aria-label="SMUSH newsletter signup — 10% discount">
      <DecoCircles count={4} dark parallaxSpeed={0.15} />

      {/* Subtle radial glow behind the content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(181,164,144,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16! md:gap-24! items-center">

          {/* Left Column — Offer */}
          <div
            ref={heading.ref as React.RefObject<HTMLDivElement>}
            className="scroll-reveal"
          >
            <span className="eyebrow text-cream-500 !text-left !mb-8 block">Limited Launch Offer</span>

            {/* Big discount number */}
            <div className="flex items-baseline gap-4! mb-8!">
              <span
                ref={discount.ref as React.RefObject<HTMLSpanElement>}
                className="text-7xl md:text-8xl font-serif text-cream-100 leading-none"
              >
                {discount.displayValue}
              </span>
              <span className="text-xl md:text-2xl font-serif text-cream-400 leading-tight">
                off your first
                <br />
                mushroom matcha pouch
              </span>
            </div>

            <p className="text-cream-400 text-base leading-relaxed max-w-md mb-8!">
              Join the early SMUSH community. Get your discount code, plus weekly
              insights on adaptogenic mushroom science and functional nutrition.
            </p>

            {/* Decorative line */}
            <div className="hidden md:block w-16 h-px bg-cream-700" aria-hidden="true" />
          </div>

          {/* Right Column — Form Card */}
          <div
            ref={formReveal.ref as React.RefObject<HTMLDivElement>}
            className="scroll-reveal reveal-right"
          >
            <div className="newsletter-card corner-frame relative border border-cream-700 p-10! md:p-12!">
              {status === 'success' ? (
                <div className="text-center py-6!">
                  <div className="w-14 h-14 rounded-full border border-cream-500 flex items-center justify-center mx-auto! mb-6!">
                    <span className="text-cream-300 text-2xl">&#10003;</span>
                  </div>
                  <h3 className="text-cream-100 font-serif text-2xl mb-3!">
                    You're In
                  </h3>
                  <p className="text-cream-400 text-sm mb-6 leading-relaxed">
                    Check your inbox for your unique 10% discount code.
                    <br />
                    Welcome to the SMUSH community.
                  </p>
                  <div className="w-12 h-px! bg-cream-600 mx-auto" aria-hidden="true" />
                </div>
              ) : (
                <>
                  <h3 className="text-cream-100! font-serif text-2xl mb-3!">
                    Claim Your 10% Discount
                  </h3>
                  <p className="text-cream-100! text-sm mb-8!">
                    Enter your email and we'll send you a unique code instantly.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4!">
                      <div>
                        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                        <input
                          id="newsletter-email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-6! py-5! border border-cream-600 bg-cream-800/50 text-cream-100 placeholder:text-cream-600 focus:outline-none focus:border-cream-400 focus:bg-cream-800 transition-all duration-300 text-base font-thin newsletter-input"
                          required
                          autoComplete="email"
                          disabled={status === 'submitting'}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full px-8! py-5! bg-cream-100 text-cream-800 font-medium uppercase tracking-wider text-sm border border-cream-100 hover:bg-transparent hover:text-cream-100 transition-all duration-300 relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10">
                          {status === 'submitting' ? 'Sending...' : 'Get 10% Off'}
                        </span>
                        <span
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    {status === 'error' && (
                      <p className="mt-4 text-sm text-red-400">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>

                  {/* Trust badges */}
                  <div
                    ref={badges.ref as React.RefObject<HTMLDivElement>}
                    className="mt-8! pt-8! border-t border-cream-700 scroll-reveal"
                  >
                    <div className="flex flex-col sm:flex-row gap-4! sm:gap-6!">
                      {[
                        { label: 'No spam, ever' },
                        { label: 'Unsubscribe anytime' },
                        { label: '1,200+ community' },
                      ].map((badge) => (
                        <span key={badge.label} className="stagger-child flex items-center gap-2! text-xs text-cream-500 tracking-wide">
                          <span className="w-4 h-4 rounded-full border border-cream-600 flex items-center justify-center text-[8px] text-cream-500" aria-hidden="true">
                            &#10003;
                          </span>
                          {badge.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
