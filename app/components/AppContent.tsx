import { useState } from 'react';
import { Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { useCart } from '@shopify/hydrogen-react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { CartDrawer } from './cart/CartDrawer';
import { ScrollProgress } from './shared/ScrollProgress';
import { ContextCardProvider } from '~/context/ContextCardProvider';
import { ContextCard } from './shared/ContextCard';

export function AppContent() {
  const { totalQuantity } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <ContextCardProvider>
      <ScrollProgress />
      <Header
        cartCount={totalQuantity || 0}
        onCartClick={() => setCartOpen(true)}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <ContextCard />
      <ScrollRestoration />
      <Scripts />
    </ContextCardProvider>
  );
}
