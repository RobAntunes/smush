import { useCart } from '@shopify/hydrogen-react';
import { CartLineItem } from '~/components/cart/CartLineItem';
import { CartSummary } from '~/components/cart/CartSummary';
import { Link } from '@remix-run/react';

export default function CartPage() {
  const { lines, totalQuantity } = useCart();

  const cartLines = lines?.edges || [];
  const isEmpty = cartLines.length === 0;

  return (
    <div className="container py-32 min-h-screen">
      <h1 className="text-center mb-12">Your Cart</h1>

      {isEmpty ? (
        <div className="text-center py-20">
          <h2 className="text-3xl font-serif mb-6">Your Cart is Empty</h2>
          <p className="text-lg text-cream-600 mb-10 max-w-md mx-auto font-thin">
            Ready to upgrade your morning routine? Start with The Pouch—clinical doses
            of 11 premium ingredients in one comprehensive blend.
          </p>
          <Link to="/collections/all" className="btn inline-block">
            Shop The Collection
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <div className="space-y-4">
                {cartLines.map(({ node }: any) => (
                  <CartLineItem key={node.id} line={node} />
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div className="md:col-span-1">
              <div className="bg-cream-100 p-6 sticky top-32">
                <h3 className="text-xl font-serif mb-6">Order Summary</h3>
                <CartSummary />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
