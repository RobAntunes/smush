import { json, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { ProductHero } from '~/components/product/ProductHero';
import { TickerBanner } from '~/components/shared/TickerBanner';
import { BenefitsBreakdown } from '~/components/shared/BenefitsBreakdown';
import { IngredientGrid } from '~/components/product/IngredientGrid';
import { StatsSection } from '~/components/shared/StatsSection';
import { LifestyleTestimonial } from '~/components/shared/LifestyleTestimonial';
import { ComparisonTable } from '~/components/shared/ComparisonTable';
import { TrustSignals } from '~/components/shared/TrustSignals';
import { NewsletterCTA } from '~/components/shared/NewsletterCTA';
import { SectionDivider } from '~/components/shared/SectionDivider';
import { createStorefrontClient } from '@shopify/hydrogen';

export const meta: MetaFunction = () => {
  return [
    { title: 'SMUSH — Mushroom Matcha Supergreens Blend | Adaptogenic Coffee Alternative' },
    {
      name: 'description',
      content:
        'SMUSH combines 2000mg ceremonial matcha, four adaptogenic mushrooms at clinical doses (lion\'s mane, cordyceps, reishi, chaga), and four supergreens into one 10g scoop. A clinically dosed coffee alternative — €2/day. EU GMP-certified.',
    },
    {
      name: 'keywords',
      content: 'mushroom matcha blend, adaptogenic mushroom supplement, mushroom coffee alternative, greens powder with mushrooms, lion\'s mane matcha, functional mushroom powder, nootropic supplement focus, AG1 alternative, ceremonial matcha mushroom, adaptogenic greens powder',
    },
    { property: 'og:title', content: 'SMUSH — Mushroom Matcha Supergreens Blend' },
    {
      property: 'og:description',
      content: 'Ceremonial matcha + 5 adaptogenic mushrooms + supergreens. One scoop replaces your coffee, multivitamin, and nootropic stack. Clinical doses. Full transparency. €2/day.',
    },
    { property: 'og:url', content: 'https://smush.eu/' },
    { property: 'og:image', content: 'https://smush.eu/images/og-home.jpg' },
  ];
};

// Homepage Product JSON-LD
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'SMUSH Mushroom Matcha Supergreens Blend',
  description:
    'Premium functional powder combining 2000mg ceremonial matcha, 4 adaptogenic mushrooms (1000mg lion\'s mane, 1000mg cordyceps, 1000mg reishi, 500mg chaga), 4 supergreens (1000mg spirulina, 1000mg chlorella, 500mg wheatgrass, 500mg moringa), 200mg acerola cherry, and 1300mg MCT. 11 clinically dosed ingredients totaling 10g per serving.',
  image: 'https://smush.eu/images/mockup.png',
  brand: { '@type': 'Brand', name: 'SMUSH' },
  category: 'Health & Wellness > Dietary Supplements > Mushroom Supplements',
  offers: {
    '@type': 'Offer',
    url: 'https://smush.eu/products/the-pouch',
    priceCurrency: 'EUR',
    price: '59.99',
    availability: 'https://schema.org/InStock',
    priceValidUntil: '2026-12-31',
    seller: { '@type': 'Organization', name: 'SMUSH' },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: 'EUR',
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'EU',
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        businessDays: {
          '@type': 'QuantitativeValue',
          minValue: 2,
          maxValue: 4,
        },
      },
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1200',
    bestRating: '5',
    worstRating: '1',
  },
};

export async function loader() {
  return json({ product: null });
}

export default function Index() {
  const { product } = useLoaderData<typeof loader>();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* 1. Hero — vertical-centered, left text + right product image */}
      <ProductHero product={product} />

      {/* 2. Ticker — trust signals scroll, creates visual break */}
      <TickerBanner />

      {/* 3. Benefits — what happens after your first scoop (3 pillars) */}
      <BenefitsBreakdown />

      {/* 4. Stats bar — dark, high contrast, anchors key numbers */}
      <StatsSection />

      {/* 5. Ingredients — open formula grid with hover reveal */}
      <IngredientGrid />

      <SectionDivider variant="diamond" />

      {/* 6. Social Proof — 3 testimonials side by side */}
      <LifestyleTestimonial />

      {/* 7. Value — what SMUSH replaces in your daily stack */}
      <ComparisonTable />

      <SectionDivider variant="dots" />

      {/* 8. Trust — evidence-based claims in editorial layout */}
      <TrustSignals />

      {/* 9. Newsletter CTA — dark section, urgency, discount offer */}
      <NewsletterCTA />
    </>
  );
}
