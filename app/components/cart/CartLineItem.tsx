import { useCart } from '@shopify/hydrogen-react';

interface CartLineItemProps {
  line: {
    id: string;
    quantity: number;
    merchandise: {
      id: string;
      title: string;
      price: {
        amount: string;
        currencyCode: string;
      };
      product: {
        title: string;
        featuredImage?: {
          url: string;
          altText?: string;
        };
      };
    };
    sellingPlanAllocation?: {
      sellingPlan: {
        name: string;
      };
    };
  };
}

export function CartLineItem({ line }: CartLineItemProps) {
  const { linesUpdate, linesRemove } = useCart();
  const { merchandise, quantity, sellingPlanAllocation } = line;
  const currencySymbol = merchandise.price.currencyCode === 'EUR' ? '€' : '$';
  const lineTotal = (parseFloat(merchandise.price.amount) * quantity).toFixed(2);

  const updateQuantity = async (newQuantity: number) => {
    if (newQuantity === 0) {
      await linesRemove([line.id]);
    } else {
      await linesUpdate([{ id: line.id, quantity: newQuantity }]);
    }
  };

  return (
    <div className="flex gap-4 py-4 border-b border-gray-200">
      {/* Product Image */}
      {merchandise.product.featuredImage && (
        <div className="w-24 h-24 bg-gray-100 rounded flex-shrink-0">
          <img
            src={merchandise.product.featuredImage.url}
            alt={merchandise.product.featuredImage.altText || merchandise.product.title}
            className="w-full h-full object-cover rounded"
          />
        </div>
      )}

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="font-semibold text-base">{merchandise.product.title}</h3>
        {merchandise.title !== 'Default Title' && (
          <p className="text-sm text-cream-600">{merchandise.title}</p>
        )}
        {sellingPlanAllocation && (
          <p className="text-xs text-cream-700 mt-1">
            {sellingPlanAllocation.sellingPlan.name}
          </p>
        )}

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => updateQuantity(quantity - 1)}
            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="text-sm font-medium w-8 text-center">{quantity}</span>
          <button
            onClick={() => updateQuantity(quantity + 1)}
            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="font-semibold">
          {currencySymbol}{lineTotal}
        </p>
        <button
          onClick={() => linesRemove([line.id])}
          className="text-xs text-cream-600 hover:text-cream-800 mt-2"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
