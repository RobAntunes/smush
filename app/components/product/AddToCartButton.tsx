import { useState } from 'react';
import { useCart } from '@shopify/hydrogen-react';

interface AddToCartButtonProps {
  variantId: string;
  sellingPlanId?: string;
  disabled?: boolean;
}

export function AddToCartButton({
  variantId,
  sellingPlanId,
  disabled = false,
}: AddToCartButtonProps) {
  const { linesAdd, status } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = async () => {
    try {
      const lines = [
        {
          merchandiseId: variantId,
          quantity: 1,
          ...(sellingPlanId && { sellingPlanId }),
        },
      ];

      await linesAdd(lines);
      setAdded(true);

      // Reset "added" state after 2 seconds
      setTimeout(() => setAdded(false), 2000);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const isLoading = status === 'updating';

  return (
    <button
      onClick={handleAddToCart}
      disabled={disabled || isLoading}
      className={`btn w-full ${added ? 'bg-cream-700' : ''} ${
        disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {isLoading ? 'Adding...' : added ? '✓ Added to Cart' : 'Add to Cart'}
    </button>
  );
}
