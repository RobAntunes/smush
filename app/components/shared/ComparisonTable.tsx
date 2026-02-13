import { Eyebrow } from './Eyebrow';
import { Button } from './Button';
import { useScrollReveal } from '~/hooks/useScrollReveal';

export function ComparisonTable() {
  const replacements = [
    { product: 'Morning Coffee', replaced: '2000mg ceremonial matcha + 1300mg MCT — dual-fuel energy', savings: '~\u20AC3/day' },
    { product: 'Greens Powder', replaced: '1000mg spirulina, 1000mg chlorella, 500mg wheatgrass, 500mg moringa', savings: '~\u20AC2/day' },
    { product: 'Nootropic Stack', replaced: '1000mg lion\'s mane, 1000mg cordyceps, 1000mg reishi, 500mg chaga', savings: '~\u20AC2/day' },
    { product: 'Multivitamin', replaced: '200mg acerola cherry vitamin C + broad-spectrum supergreen micronutrients', savings: '~\u20AC1/day' },
    { product: 'Focus Supplement', replaced: 'L-theanine + caffeine synergy from 2000mg ceremonial matcha', savings: '~\u20AC1.50/day' },
  ];

  const header = useScrollReveal();
  const tbody = useScrollReveal({ staggerChildren: true });
  const cta = useScrollReveal();

  return (
    <section className="section relative" aria-label="What SMUSH replaces — supplement comparison">
      <div className="container max-w-5xl relative z-10">
        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className="text-center mb-16 max-w-3xl mx-auto scroll-reveal"
        >
          <Eyebrow className="justify-center">Best Coffee Alternative</Eyebrow>
          <h2>Replace Five Products With One Mushroom Matcha Blend</h2>
          <p className="text-cream-600 mt-4 font-thin text-left">
            SMUSH consolidates your entire morning supplement stack into a single 10g serving.
            Adaptogenic mushrooms, ceremonial matcha, supergreens, and MCT — every ingredient
            at clinical doses, every milligram disclosed. All for {'\u20AC'}2 per day.
          </p>
        </div>

        {/* Replacement Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-cream-800">
                <th className="text-left py-5 font-sans uppercase tracking-wider text-xs text-cream-500 w-1/3">Replaces</th>
                <th className="text-left py-5 font-sans uppercase tracking-wider text-xs text-cream-800 font-medium">What's Inside SMUSH</th>
                <th className="text-right py-5 font-sans uppercase tracking-wider text-xs text-cream-500 w-1/5">You Save</th>
              </tr>
            </thead>
            <tbody
              ref={tbody.ref as React.RefObject<HTMLTableSectionElement>}
              className="scroll-reveal row-reveal"
            >
              {replacements.map((row) => (
                <tr key={row.product} className="border-b border-cream-300">
                  <td className="py-6 text-base text-cream-500 font-thin">{row.product}</td>
                  <td className="py-6 text-base font-thin text-cream-800">{row.replaced}</td>
                  <td className="py-6 text-right text-base text-cream-600 font-thin">{row.savings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          ref={cta.ref as React.RefObject<HTMLDivElement>}
          className="text-center mt-14 flex justify-start flex-col scroll-reveal"
        >
          <Button className='w-[20%]' href="/collections/all">Try The Pouch — {'\u20AC'}60</Button>
          <p className="text-xs text-cream-500 mt-4 font-thin">30-day supply. Free EU shipping from {'\u20AC'}120. 30-day money-back guarantee.</p>
        </div>
      </div>
    </section>
  );
}
