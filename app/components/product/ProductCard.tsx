import { Link } from '@remix-run/react';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    handle: string;
    description?: string;
    priceRange: {
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
}

export function ProductCard({ product }: ProductCardProps) {
  const price = parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2);
  const currencySymbol = product.priceRange.minVariantPrice.currencyCode === 'EUR' ? '€' : '$';

  return (
    <Link
      to={`/products/${product.handle}`}
      className="group block bg-cream-50 overflow-hidden border border-cream-300 hover:border-cream-700 transition-all duration-300 hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="aspect-square bg-cream-100 relative overflow-hidden">
        {product.featuredImage ? (
          <img
            src={product.featuredImage.url}
            alt={product.featuredImage.altText || product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-cream-600">
            No image
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="font-serif text-2xl mb-2 group-hover:text-cream-700 transition-colors">
          {product.title}
        </h3>
        {product.description && (
          <p className="text-sm text-cream-600 mb-4 line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="flex justify-between items-center">
          <span className="text-xl font-normal">
            {currencySymbol}{price}
          </span>
          <span className="text-sm text-cream-700 font-thin">
            View Product →
          </span>
        </div>
      </div>
    </Link>
  );
}
