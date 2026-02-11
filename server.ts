import { createRequestHandler } from '@shopify/remix-oxygen';
import { createStorefrontClient } from '@shopify/hydrogen';

export default {
  async fetch(
    request: Request,
    env: Env,
    executionContext: ExecutionContext
  ): Promise<Response> {
    try {
      const { storefront } = createStorefrontClient({
        storeDomain: env.PUBLIC_STORE_DOMAIN,
        publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
        privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
        storefrontApiVersion: '2024-10',
        i18n: {
          language: 'EN',
          country: 'US',
        },
      });

      const handleRequest = createRequestHandler({
        build: await import('./build/index.js'),
        mode: process.env.NODE_ENV,
        getLoadContext: () => ({
          storefront,
          env,
        }),
      });

      return await handleRequest(request, executionContext);
    } catch (error) {
      console.error(error);
      return new Response('Internal Server Error', {
        status: 500,
        statusText: 'Internal Server Error',
      });
    }
  },
};

interface Env {
  PUBLIC_STORE_DOMAIN: string;
  PUBLIC_STOREFRONT_API_TOKEN: string;
  PRIVATE_STOREFRONT_API_TOKEN: string;
  SESSION_SECRET: string;
}
