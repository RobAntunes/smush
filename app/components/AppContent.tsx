import { useState } from 'react';
import { Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { useCart } from '@shopify/hydrogen-react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { CartDrawer } from './cart/CartDrawer';

export function AppContent() {
  const { totalQuantity } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Header
        cartCount={totalQuantity || 0}
        onCartClick={() => setCartOpen(true)}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <ScrollRestoration />
      <Scripts />
    </>
  );
}
