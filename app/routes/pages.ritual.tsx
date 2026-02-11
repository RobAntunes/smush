import type { MetaFunction } from '@remix-run/node';
import { Eyebrow } from '~/components/shared/Eyebrow';
import { Button } from '~/components/shared/Button';

export const meta: MetaFunction = () => {
  return [
    { title: 'The Ritual | SMUSH.' },
    {
      name: 'description',
      content: 'How to prepare and optimize your SMUSH ritual for peak performance.',
    },
  ];
};

export default function RitualPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero container">
        <div className="max-w-4xl mx-auto text-center">
          <Eyebrow className="text-center justify-center">The Practice</Eyebrow>
          <h1>Build Your Morning Standard.</h1>
          <p className="text-xl text-cream-600 max-w-3xl mx-auto font-thin leading-relaxed">
            A ritual is more than a routine—it's an intentional practice that anchors your day.
            Most mornings are reactive chaos. Coffee on autopilot, phone scroll, rushed breakfast.
            SMUSH asks you to pause, prepare something intentionally, and signal to yourself that
            today you're operating at your best.
          </p>
        </div>
      </section>

      {/* Preparation Steps */}
      <section className="section bg-cream-50">
        <div className="container max-w-6xl">
          <h2 className="mb-16 text-center">The Perfect Preparation</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-serif mb-6 text-cream-300 font-thin">01</div>
              <h3 className="font-serif text-2xl mb-4">Measure</h3>
              <p className="text-cream-600">
                One level scoop (10g) of SMUSH. into your favorite mug or shaker. Precision
                matters for consistent results.
              </p>
            </div>
            <div>
              <div className="text-5xl font-serif mb-6 text-cream-300 font-thin">02</div>
              <h3 className="font-serif text-2xl mb-4">Mix</h3>
              <p className="text-cream-600">
                Add 250-300ml hot water (80°C optimal for matcha). Whisk vigorously or
                shake for 30 seconds until smooth and frothy.
              </p>
            </div>
            <div>
              <div className="text-5xl font-serif mb-6 text-cream-300 font-thin">03</div>
              <h3 className="font-serif text-2xl mb-4">Customize</h3>
              <p className="text-cream-600">
                Optional: Add oat milk for creaminess, honey for sweetness, or ice for
                cold brew. Make it yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timing Section */}
      <section className="section bg-cream-100">
        <div className="container max-w-4xl">
          <h2 className="mb-12 text-center">Optimal Timing</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">Before 11am</h3>
              <p className="text-cream-600 leading-relaxed">
                Consume SMUSH in the morning on an empty stomach or with a light breakfast.
                The 40-60mg caffeine from matcha provides gentle stimulation without disrupting
                sleep when taken early. After 11am, you risk interference with your natural
                cortisol decline and evening wind-down.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4">Hydration First</h3>
              <p className="text-cream-600 leading-relaxed">
                Drink 500ml water upon waking, then prepare your SMUSH 10-15 minutes later.
                Your body is dehydrated after 8 hours of sleep—water restores cellular function
                and amplifies the cognitive benefits of adaptogens, matcha, and L-theanine.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4">Mindful Consumption</h3>
              <p className="text-cream-600 leading-relaxed">
                Take 5-10 minutes to drink slowly without distractions. No phone, no laptop.
                This isn't just fuel—it's a signal to your nervous system that the day has begun
                with intention. The ritual matters as much as the ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Maximizing Benefits */}
      <section className="section container">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-center">Maximize Your Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-cream-300 p-8 rounded-lg">
              <h3 className="font-serif text-xl mb-4">Daily Consistency</h3>
              <p className="text-cream-600">
                Adaptogens and mushrooms work cumulatively, not acutely. You'll notice subtle
                baseline improvements—better stress resilience, clearer thinking—after 2-3 weeks
                of daily use. This is about building sustainable performance, not chasing highs.
              </p>
            </div>
            <div className="border border-cream-300 p-8 rounded-lg">
              <h3 className="font-serif text-xl mb-4">Pair with Movement</h3>
              <p className="text-cream-600">
                Light exercise—yoga, walking, stretching—30 minutes after consumption enhances
                circulation and nutrient absorption. Movement also helps L-theanine and adaptogens
                regulate cortisol, amplifying the calm-alert state SMUSH creates.
              </p>
            </div>
            <div className="border border-cream-300 p-8 rounded-lg">
              <h3 className="font-serif text-xl mb-4">Track Your Focus</h3>
              <p className="text-cream-600">
                Notice when peak focus hits—usually 45-90 minutes after consumption. Everyone's
                metabolism differs, so track your personal window. Once you know it, schedule
                your most cognitively demanding work during that period.
              </p>
            </div>
            <div className="border border-cream-300 p-8 rounded-lg">
              <h3 className="font-serif text-xl mb-4">Temperature Matters</h3>
              <p className="text-cream-600">
                Water above 85°C destroys delicate compounds like L-theanine and catechins.
                Aim for 80°C (176°F)—hot enough to dissolve ingredients, cool enough to preserve
                bioactivity. If you don't have a thermometer, let boiling water rest 2 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-cream-800 text-cream-100">
        <div className="container max-w-3xl text-center">
          <h2 className="text-cream-100 mb-6">Ready to Start Your Ritual?</h2>
          <p className="text-xl mb-8 text-cream-300 font-thin">
            Join thousands of professionals who've replaced their coffee with intention.
          </p>
          <Button href="/collections/all">Shop The Pouch</Button>
        </div>
      </section>
    </>
  );
}
