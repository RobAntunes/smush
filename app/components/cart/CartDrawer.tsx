import { useCart } from '@shopify/hydrogen-react';
import { CartLineItem } from './CartLineItem';
import { CartSummary } from './CartSummary';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { lines, totalQuantity } = useCart();

  if (!isOpen) return null;

  const cartLines = lines?.edges || [];
  const isEmpty = cartLines.length === 0;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-serif">
            Your Cart {totalQuantity > 0 && `(${totalQuantity})`}
          </h2>
          <button
            onClick={onClose}
            className="text-2xl text-cream-600 hover:text-cream-800"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isEmpty ? (
            <div className="text-center py-12">
              <p className="text-cream-600 mb-6">Your cart is empty</p>
              <a
                href="/collections/all"
                className="btn inline-block"
                onClick={onClose}
              >
                Continue Shopping
              </a>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4">
                {cartLines.map(({ node }: any) => (
                  <CartLineItem key={node.id} line={node} />
                ))}
              </div>

              {/* Cart Summary */}
              <CartSummary />
            </>
          )}
        </div>
      </div>
    </>
  );
}
