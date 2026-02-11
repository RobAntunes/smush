import { json } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { CartProvider } from '@shopify/hydrogen-react';
import { AppContent } from './components/AppContent';
import appStyles from './styles/app.css?url';

export function links() {
  return [{ rel: 'stylesheet', href: appStyles }];
}

export async function loader() {
  return json({
    publicStoreDomain: process.env.PUBLIC_STORE_DOMAIN || '',
    publicStorefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN || '',
  });
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <CartProvider
          storeDomain={`https://${data.publicStoreDomain}`}
          storefrontAccessToken={data.publicStorefrontToken}
          countryCode="US"
          languageCode="EN"
        >
          <AppContent />
        </CartProvider>
      </body>
    </html>
  );
}
