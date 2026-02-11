import { useCart } from '@shopify/hydrogen-react';
import { Button } from '../shared/Button';

export function CartSummary() {
  const { cost, checkoutUrl } = useCart();

  if (!cost) {
    return null;
  }

  const currencySymbol = cost.subtotalAmount.currencyCode === 'EUR' ? '€' : '$';
  const subtotal = parseFloat(cost.subtotalAmount.amount).toFixed(2);
  const total = parseFloat(cost.totalAmount.amount).toFixed(2);

  return (
    <div className="border-t border-gray-200 pt-6 mt-6">
      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-cream-600">Subtotal</span>
          <span>{currencySymbol}{subtotal}</span>
        </div>
        {cost.totalTaxAmount && parseFloat(cost.totalTaxAmount.amount) > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-cream-600">Tax</span>
            <span>{currencySymbol}{parseFloat(cost.totalTaxAmount.amount).toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>{currencySymbol}{total}</span>
        </div>
      </div>

      <a
        href={checkoutUrl}
        className="btn w-full text-center block"
      >
        Proceed to Checkout
      </a>

      <p className="text-xs text-cream-600 text-center mt-4">
        Shipping and taxes calculated at checkout
      </p>
    </div>
  );
}
