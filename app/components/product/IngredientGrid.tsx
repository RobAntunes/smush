import { ingredients } from '~/data/ingredients';
import { Eyebrow } from '../shared/Eyebrow';
import { DecoCircles } from '../shared/DecoCircles';

interface IngredientGridProps {
  showAll?: boolean;
  limit?: number;
}

export function IngredientGrid({ showAll = false, limit = 3 }: IngredientGridProps) {
  const displayedIngredients = showAll ? ingredients : ingredients.slice(0, limit);

  return (
    <section className="section relative">
      <DecoCircles count={2} />

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <Eyebrow className="mx-auto">Open Formula</Eyebrow>
          <h2>Every Milligram, Disclosed.</h2>
          <p className="text-cream-600 mt-4">
            No proprietary blends. No hidden fillers. Hover to explore each
            ingredient — what it does, why it's there, and the exact clinical dose.
          </p>
        </div>

        {/* Ingredient Cards Grid */}
        <div className="grid-3 gap-px max-w-6xl mx-auto bg-cream-300">
          {displayedIngredients.map((ingredient) => (
            <div
              key={ingredient.name}
              className="ingredient-card bg-cream-50 p-8 md:p-14 text-center transition-all duration-300 hover:bg-cream-100"
            >
              <img
                src={ingredient.imageUrl}
                alt={ingredient.name}
                className="ingredient-image"
              />
              <span className="block font-mono text-cream-500 font-normal mb-4 text-sm tracking-wider">
                {ingredient.dose}
              </span>
              <h3 className="font-serif text-2xl mb-3 text-cream-800">{ingredient.name}</h3>
              <p className="text-sm text-cream-600 leading-relaxed">{ingredient.benefit}</p>
            </div>
          ))}
        </div>

        {/* Show More Link */}
        {!showAll && ingredients.length > limit && (
          <div className="text-center mt-16">
            <a
              href="/pages/formula"
              className="p-3! rounded-[3px]  hover:bg-[#f6eee5] inline-block border border-cream-800 text-cream-800 px-10 py-4 text-sm font-normal uppercase tracking-wider hover:bg-cream-800 hover:text-cream-50 transition-all duration-300"
            >
              Explore All {ingredients.length} Ingredients
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
