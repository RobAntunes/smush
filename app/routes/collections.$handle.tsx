import { json, type MetaFunction } from '@remix-run/node';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { ProductCard } from '~/components/product/ProductCard';
import { Eyebrow } from '~/components/shared/Eyebrow';
import { COLLECTION_QUERY } from '~/lib/shopify/queries/collection';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `${data?.collection?.title || 'Shop'} | SMUSH.` },
    {
      name: 'description',
      content: data?.collection?.description || 'Shop premium functional beverages from SMUSH.',
    },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { handle } = params;

  if (!handle) {
    throw new Response('Not Found', { status: 404 });
  }

  // Mock collection data
  const mockCollection = {
    id: 'gid://shopify/Collection/1',
    title: 'All Products',
    description: 'Shop our complete range of premium functional beverages',
    products: {
      edges: [{
        node: {
          id: 'gid://shopify/Product/1',
          title: 'The Pouch',
          handle: 'the-pouch',
          description: 'An 11-ingredient masterpiece designed to replace your coffee and multivitamin.',
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
        },
      }],
    },
  };

  return json({ collection: mockCollection });
}

export default function CollectionPage() {
  const { collection } = useLoaderData<typeof loader>();
  const products = collection.products.edges.map((edge: any) => edge.node);

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero container">
        <div className="max-w-4xl mx-auto text-center">
          <Eyebrow className="text-center justify-center">Shop</Eyebrow>
          <h1>{collection.title}</h1>
          {collection.description && (
            <p className="text-xl text-cream-600 max-w-3xl mx-auto font-thin leading-relaxed">
              {collection.description}
            </p>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="section container">
        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-cream-600">No products found in this collection.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Info Banner */}
      <section className="section bg-cream-100">
        <div className="container max-w-5xl text-center">
          <h2 className="mb-16">Why Choose SMUSH?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-8 h-8 border-2 border-cream-700 mx-auto mb-6" />
              <h3 className="font-serif text-xl mb-4">Clinical Doses</h3>
              <p className="text-base text-cream-600 leading-relaxed">
                Every ingredient at research-backed therapeutic levels—not the trace
                amounts you'll find in most wellness products.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 border-2 border-cream-700 mx-auto mb-6" />
              <h3 className="font-serif text-xl mb-4">Full Transparency</h3>
              <p className="text-base text-cream-600 leading-relaxed">
                No proprietary blends, no hidden fillers. Complete ingredient disclosure
                down to the milligram. Your body, your right to know.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 border-2 border-cream-700 mx-auto mb-6" />
              <h3 className="font-serif text-xl mb-4">30-Day Guarantee</h3>
              <p className="text-base text-cream-600 leading-relaxed">
                Try SMUSH risk-free. Not satisfied? Full refund, no questions asked.
                We only succeed if you do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
