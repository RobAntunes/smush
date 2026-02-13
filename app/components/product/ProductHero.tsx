import { Link } from '@remix-run/react';
import { useState, useEffect } from 'react';
import { Eyebrow } from '../shared/Eyebrow';
import { Button } from '../shared/Button';
import { DecoCircles } from '../shared/DecoCircles';

interface ProductHeroProps {
  product?: {
    title?: string;
    description?: string;
    handle?: string;
    priceRange?: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    featuredImage?: {
      url: string;
      altText?: string;
    };
  };
  showFullDetails?: boolean;
}

export function ProductHero({ product, showFullDetails = false }: ProductHeroProps) {
  const price = product?.priceRange?.minVariantPrice?.amount || '59.99';
  const currency = product?.priceRange?.minVariantPrice?.currencyCode || 'EUR';
  const currencySymbol = currency === 'EUR' ? '\u20AC' : '$';

  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="container min-h-screen flex items-center relative" aria-label="SMUSH mushroom matcha supergreens blend hero">
      <DecoCircles count={3} parallaxSpeed={0.15} />

      <div className="grid-2 w-full relative z-10">
        {/* Left Column: Content */}
        <div className="max-w-xl hero-entrance" data-entered={entered ? 'true' : undefined}>
          <Eyebrow className="!text-left">Mushroom Matcha Supergreens</Eyebrow>
          <h1 className="text-left text-balance">
            One Scoop Replaces
            <br />
            Your Entire Stack.
          </h1>
          <p className="mb-10 text-cream-600 text-lg leading-relaxed font-thin">
            11 clinically dosed ingredients — ceremonial matcha, five adaptogenic mushrooms,
            and supergreens — replacing your coffee, greens powder, nootropic stack, and
            multivitamin. Fully transparent. {currencySymbol}2/day.
          </p>

          {/* CTAs */}
          <div className="flex gap-6 items-center mb-16">
            <Button href={product?.handle ? `/products/${product.handle}` : '/products/the-pouch'}>
              Shop The Pouch — {currencySymbol}{parseFloat(price).toFixed(0)}
            </Button>
            <Link
              to="/pages/formula"
              className="text-sm font-thin underline cursor-pointer text-cream-500 hover:text-cream-800 transition-colors"
            >
              See All 11 Ingredients
            </Link>
          </div>

          {/* Key Stats */}
          <div className="flex gap-14 border-t border-cream-300 pt-10">
            <div>
              <span className="text-3xl font-serif block mb-1 text-cream-800">11</span>
              <span className="text-xs uppercase tracking-widest text-cream-500 font-thin">Clinical Doses</span>
            </div>
            <div>
              <span className="text-3xl font-serif block mb-1 text-cream-800">5</span>
              <span className="text-xs uppercase tracking-widest text-cream-500 font-thin">Mushrooms</span>
            </div>
            <div>
              <span className="text-3xl font-serif block mb-1 text-cream-800">{currencySymbol}2</span>
              <span className="text-xs uppercase tracking-widest text-cream-500 font-thin">Per Serving</span>
            </div>
          </div>
        </div>

        {/* Right Column: Product Image */}
        <div className={`product-image-container mt-12! fixed top-0 w-full bg-cream-100/90 backdrop-blur-md z-50 hero-image-reveal${entered ? ' entered' : ''}`}>
          <div className="product-image-wrapper">
            <img
              src={product?.featuredImage?.url || '../../../assets/images/mockup-themed.png'}
              alt={product?.featuredImage?.altText || 'SMUSH mushroom matcha supergreens blend pouch — adaptogenic coffee alternative with lion\'s mane, reishi, cordyceps, ceremonial matcha, and supergreens'}
              className="w-[70%] h-auto"
              loading="eager"
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
