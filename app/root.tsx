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
  return [
    { rel: 'stylesheet', href: appStyles },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' as const },
    { rel: 'preconnect', href: 'https://cdn.shopify.com' },
    { rel: 'canonical', href: 'https://smush.eu' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  ];
}

export async function loader() {
  return json({
    publicStoreDomain: process.env.PUBLIC_STORE_DOMAIN || '',
    publicStorefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN || '',
  });
}

// Organization + WebSite JSON-LD for GEO/SEO
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SMUSH',
  url: 'https://smush.eu',
  logo: 'https://smush.eu/images/logo.png',
  description:
    'SMUSH is a premium mushroom matcha supergreens blend combining ceremonial matcha, five adaptogenic mushrooms, and supergreens into one daily scoop. Formulated in Barcelona for sustained energy, focus, and complete daily nutrition.',
  foundingDate: '2024',
  foundingLocation: {
    '@type': 'Place',
    name: 'Barcelona, Spain',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@smush.eu',
    availableLanguage: ['English', 'Spanish'],
  },
  sameAs: [
    'https://instagram.com/drinksmush',
    'https://tiktok.com/@drinksmush',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SMUSH',
  url: 'https://smush.eu',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://smush.eu/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function App() {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#4a3f35" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="author" content="SMUSH - Functional Blends S.L." />
        <meta property="og:site_name" content="SMUSH" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://smush.eu/images/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@drinksmush" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
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
