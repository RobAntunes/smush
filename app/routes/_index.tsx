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
    { title: 'SMUSH. | Nootropics + Supergreens — 11 Ingredients, €2/Day' },
    {
      name: 'description',
      content:
        "Replace your coffee, multivitamin, and nootropic stack with one scoop. Ceremonial matcha, five adaptogenic mushrooms, supergreens, and MCT — 11 synergistic ingredients at clinical doses. Full transparency. €2 per serving. Made in the EU.",
    },
    {
      property: 'og:title',
      content: 'SMUSH. | The New Morning Standard',
    },
    {
      property: 'og:description',
      content: '11 clinical-dose ingredients. Nootropics + supergreens. €2/day. Made in Barcelona.',
    },
  ];
};

export async function loader() {
  return json({ product: null });
}

export default function Index() {
  const { product } = useLoaderData<typeof loader>();

  return (
    <>
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
