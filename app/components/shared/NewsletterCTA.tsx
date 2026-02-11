import { Button } from './Button';
import { DecoCircles } from './DecoCircles';

export function NewsletterCTA() {
  return (
    <section className="bg-cream-800 py-24 relative">
      <DecoCircles count={3} dark />

      <div className="container max-w-3xl text-center relative z-10">
        <span className="eyebrow text-cream-400 justify-center mb-6">Limited Launch</span>
        <h2 className="text-cream-100 text-4xl md:text-5xl mb-6">
          10% Off Your First Pouch.
        </h2>
        <p className="text-lg text-cream-300 mb-12 max-w-xl mx-auto">
          Join the early community. Get your discount code, plus weekly insights on
          performance nutrition, ingredient science, and the SMUSH ritual.
        </p>

        <form className="max-w-lg mx-auto mb-0">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-5 border border-cream-600 bg-transparent text-cream-100 placeholder:text-cream-500 focus:outline-none focus:border-cream-400 transition-colors text-base font-thin"
              required
            />
            <button
              type="submit"
              className="px-8 py-5 bg-cream-100 text-cream-800 font-medium uppercase tracking-wider text-sm border border-cream-100 hover:bg-transparent hover:text-cream-100 transition-all duration-300 sm:whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </div>
          <p className="text-xs text-cream-500 mt-5 mb-0">
            No spam. Unsubscribe anytime. Join 1,200+ early adopters.
          </p>
        </form>
      </div>
    </section>
  );
}
