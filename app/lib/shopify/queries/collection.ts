import { PRODUCT_VARIANT_FRAGMENT, PRODUCT_IMAGE_FRAGMENT } from '../fragments';

export const COLLECTION_QUERY = `#graphql
  ${PRODUCT_VARIANT_FRAGMENT}
  ${PRODUCT_IMAGE_FRAGMENT}

  query Collection($handle: String!, $first: Int!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      title
      description
      descriptionHtml
      handle
      image {
        ...ProductImage
      }
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            featuredImage {
              ...ProductImage
            }
            variants(first: 1) {
              edges {
                node {
                  ...ProductVariant
                }
              }
            }
          }
        }
      }
      seo {
        title
        description
      }
    }
  }
` as const;

export const COLLECTIONS_QUERY = `#graphql
  query Collections($first: Int!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          image {
            url
            altText
            width
            height
          }
        }
      }
    }
  }
` as const;
