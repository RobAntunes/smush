import { json, type MetaFunction } from '@remix-run/node';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { ProductHero } from '~/components/product/ProductHero';
import { IngredientGrid } from '~/components/product/IngredientGrid';
import { SellingPlanSelector } from '~/components/product/SellingPlanSelector';
import { AddToCartButton } from '~/components/product/AddToCartButton';
import { PRODUCT_QUERY } from '~/lib/shopify/queries/product';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `${data?.product?.title || 'Product'} | SMUSH.` },
    {
      name: 'description',
      content: data?.product?.description || 'Premium functional beverage blend',
    },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { handle } = params;

  if (!handle) {
    throw new Response('Not Found', { status: 404 });
  }

  // Mock product data for now
  const mockProduct = {
    id: 'gid://shopify/Product/1',
    title: 'The Pouch',
    description: "11 synergistic ingredients. Ceremonial matcha, five adaptogenic mushrooms, supergreens, and MCT — designed to replace your coffee, multivitamin, and nootropic stack.",
    handle: 'the-pouch',
    priceRange: {
      minVariantPrice: {
        amount: '59.99',
        currencyCode: 'EUR',
      },
    },
    featuredImage: {
      url: '/images/mockup.png',
      altText: 'SMUSH. The Pouch',
    },
    variants: {
      edges: [{
        node: {
          id: 'gid://shopify/ProductVariant/1',
          title: 'Default',
          availableForSale: true,
          price: {
            amount: '59.99',
            currencyCode: 'EUR',
          },
        },
      }],
    },
    sellingPlanGroups: {
      edges: [],
    },
  };

  return json({ product: mockProduct });
}

export default function ProductPage() {
  const { product } = useLoaderData<typeof loader>();
  const [selectedSellingPlanId, setSelectedSellingPlanId] = useState<string | undefined>();

  // Get first variant (assuming single variant product)
  const variant = product.variants.edges[0]?.node;
  const sellingPlans = product.sellingPlanGroups.edges[0]?.node?.sellingPlans.edges.map(
    (edge: any) => edge.node
  );

  if (!variant) {
    return <div>Product variant not available</div>;
  }

  return (
    <>
      <ProductHero product={product} showFullDetails />

      <section className="container py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 text-left">Choose Your Option</h2>

          {/* Selling Plan Selector */}
          <SellingPlanSelector
            sellingPlans={sellingPlans}
            basePrice={variant.price.amount}
            currencyCode={variant.price.currencyCode}
            onSelectionChange={setSelectedSellingPlanId}
          />

          {/* Add to Cart Button */}
          <AddToCartButton
            variantId={variant.id}
            sellingPlanId={selectedSellingPlanId}
            disabled={!variant.availableForSale}
          />

          {/* Product Description */}
          {product.description && (
            <div className="mt-12">
              <h3 className="text-xl font-serif mb-4">About The Pouch</h3>
              <p className="text-cream-600 leading-relaxed font-thin">{product.description}</p>
            </div>
          )}
        </div>
      </section>

      {/* Ingredients Section */}
      <IngredientGrid showAll />

      {/* Benefits Section */}
      <section className="section bg-cream-100">
        <div className="container max-w-5xl">
          <h2 className="text-center mb-16">What You'll Experience</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <h3 className="font-serif text-2xl mb-4">Sustained Energy</h3>
              <p className="text-cream-600 leading-relaxed font-thin">
                No jitters, no crash, no afternoon collapse. Matcha and MCT create dual-fuel
                energy — caffeine for alertness, ketones for endurance. 4-6 hours of calm
                alertness from two energy pathways working in parallel.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl mb-4">Mental Clarity</h3>
              <p className="text-cream-600 leading-relaxed font-thin">
                Five adaptogenic mushrooms plus L-theanine from matcha work synergistically to
                promote alpha-wave focus states. The feeling: calm, clear, cognitively sharp — even
                under pressure.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl mb-4">Complete Nutrition</h3>
              <p className="text-cream-600 leading-relaxed font-thin">
                Four supergreens deliver broad-spectrum micronutrients while acerola cherry
                multiplies mineral absorption. One scoop covers what used to take five bottles.
                Complete daily nutrition, simplified.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
