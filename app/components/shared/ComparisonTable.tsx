import { Eyebrow } from './Eyebrow';
import { Button } from './Button';

export function ComparisonTable() {
  const replacements = [
    { product: 'Morning Coffee', replaced: 'Matcha + MCT dual-fuel energy', savings: '~€3/day' },
    { product: 'Greens Powder', replaced: 'Spirulina, chlorella, wheatgrass, moringa', savings: '~€2/day' },
    { product: 'Nootropic Stack', replaced: 'Five adaptogenic mushrooms at clinical doses', savings: '~€2/day' },
    { product: 'Multivitamin', replaced: 'Acerola cherry + broad-spectrum micronutrients', savings: '~€1/day' },
    { product: 'Focus Supplement', replaced: 'L-theanine + caffeine synergy from matcha', savings: '~€1.50/day' },
  ];

  return (
    <section className="section relative">
      {/* Circles bleed in from adjacent sections */}

      <div className="container max-w-5xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Eyebrow className="justify-center">One Scoop</Eyebrow>
          <h2>Replace Five Products With One.</h2>
          <p className="text-cream-600 mt-4 font-thin">
            SMUSH consolidates your entire morning stack into a single 10g serving.
            Every ingredient at clinical doses. Every milligram disclosed. €2 per day.
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
            <tbody>
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

        <div className="text-center mt-14 flex justify-start flex-col">
          <Button className='w-[20%]' href="/collections/all">Try The Pouch — €60</Button>
          <p className="text-xs text-cream-500 mt-4 font-thin">30-day supply. Free shipping over €120. 30-day guarantee.</p>
        </div>
      </div>
    </section>
  );
}
