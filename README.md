# SMUSH. - Shopify Hydrogen Storefront

Premium functional beverage brand built with Shopify Hydrogen and React Router 7.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Shopify store with Storefront API access

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your Shopify credentials:
- `PUBLIC_STOREFRONT_API_TOKEN` - Your Shopify Storefront API public token
- `PUBLIC_STORE_DOMAIN` - Your Shopify store domain (e.g., your-store.myshopify.com)
- `PRIVATE_STOREFRONT_API_TOKEN` - Your Shopify Storefront API private token
- `SESSION_SECRET` - A random secret for session management

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Deployment

Deploy to Shopify Oxygen:
```bash
npm run preview
shopify hydrogen deploy
```

## Project Structure

```
smush-hydrogen/
├── app/
│   ├── components/       # React components
│   │   ├── layout/       # Header, Footer
│   │   ├── product/      # Product-related components
│   │   ├── shared/       # Reusable UI components
│   │   └── cart/         # Shopping cart components
│   ├── routes/           # Page routes (React Router 7)
│   ├── styles/           # CSS files
│   ├── lib/              # Utilities and GraphQL queries
│   ├── data/             # Static data (ingredients, FAQs)
│   └── root.tsx          # App root with CartProvider
├── public/               # Static assets
└── server.ts             # Oxygen server configuration
```

## Features

- ✅ Shopify Storefront API integration
- ✅ Shopping cart with subscriptions support
- ✅ Product pages with variant selection
- ✅ Collection/shop pages
- ✅ Content pages (Formula, Ritual, About, FAQ)
- ✅ Responsive design (mobile & desktop)
- ✅ SEO optimized with meta tags
- ✅ Luxury brand aesthetic preservation

## Design System

### Colors
- Alabaster: `#fafaf5`
- Deep Green: `#2f4f2f`
- Matcha Green: `#c4d687`

### Typography
- Headings: Playfair Display (serif)
- Body: General Sans (sans-serif)

### Key Components
- Square buttons (0px border-radius)
- Grayscale-to-color hover effects
- Marquee ticker animation
- Product image rotation effect

## Shopify Setup

### Required Products
1. Create "The Pouch" product with:
   - Price: €59.99
   - Handle: `the-pouch`
   - Product images
   - Variants (if needed)

### Required Collections
1. Create "All Products" collection with handle: `all`

### Subscriptions (Optional)
1. Set up Shopify Subscriptions
2. Create selling plan: "Subscribe & Save"
3. Attach to "The Pouch" product

## Support

For questions or issues, contact: hello@smush.eu

## License

© 2026 Smush Functional Blends. All rights reserved.
