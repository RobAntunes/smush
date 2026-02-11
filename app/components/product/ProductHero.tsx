import { Link } from '@remix-run/react';
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
  const currencySymbol = currency === 'EUR' ? '€' : '$';

  return (
    <section className="container min-h-screen flex items-center relative">
      <DecoCircles count={3} />

      <div className="grid-2 w-full relative z-10">
        {/* Left Column: Content */}
        <div className="max-w-xl">
          <Eyebrow className="!text-left">Formulated in Barcelona</Eyebrow>
          <h1 className="text-left">
            Replace Your
            <br />
            Entire Stack.
          </h1>
          <p className="mb-10 text-cream-600 text-lg leading-relaxed font-thin">
            Ceremonial matcha paired with five adaptogenic mushrooms. Supergreens amplified
            by natural vitamin C. MCT for sustained fuel. Eleven synergistic ingredients that
            replace your coffee, multivitamin, and nootropic — for €2 a day.
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
              See Full Formula
            </Link>
          </div>

          {/* Key Stats */}
          <div className="flex gap-14 border-t border-cream-300 pt-10">
            <div>
              <span className="text-3xl font-serif block mb-1 text-cream-800">11</span>
              <span className="text-xs uppercase tracking-widest text-cream-500 font-thin">Ingredients</span>
            </div>
            <div>
              <span className="text-3xl font-serif block mb-1 text-cream-800">5</span>
              <span className="text-xs uppercase tracking-widest text-cream-500 font-thin">Mushrooms</span>
            </div>
            <div>
              <span className="text-3xl font-serif block mb-1 text-cream-800">€2</span>
              <span className="text-xs uppercase tracking-widest text-cream-500 font-thin">Per Serving</span>
            </div>
          </div>
        </div>

        {/* Right Column: Product Image */}
        <div className="product-image-container mt-12! fixed top-0 w-full bg-cream-100/90 backdrop-blur-md z-50">
          <div className="product-image-wrapper">
            <img
              src={product?.featuredImage?.url || '/images/mockup.png'}
              alt={product?.featuredImage?.altText || 'SMUSH. Functional Blend Pouch'}
              className="w-3/5 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
