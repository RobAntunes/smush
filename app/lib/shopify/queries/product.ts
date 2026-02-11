import { PRODUCT_VARIANT_FRAGMENT, PRODUCT_IMAGE_FRAGMENT, SELLING_PLAN_FRAGMENT } from '../fragments';

export const PRODUCT_QUERY = `#graphql
  ${PRODUCT_VARIANT_FRAGMENT}
  ${PRODUCT_IMAGE_FRAGMENT}
  ${SELLING_PLAN_FRAGMENT}

  query Product($handle: String!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      description
      descriptionHtml
      handle
      vendor
      tags
      productType
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            ...ProductImage
          }
        }
      }
      featuredImage {
        ...ProductImage
      }
      variants(first: 20) {
        edges {
          node {
            ...ProductVariant
          }
        }
      }
      sellingPlanGroups(first: 5) {
        edges {
          node {
            name
            appName
            options {
              name
              values
            }
            sellingPlans(first: 10) {
              edges {
                node {
                  ...SellingPlan
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

export const PRODUCTS_QUERY = `#graphql
  ${PRODUCT_VARIANT_FRAGMENT}
  ${PRODUCT_IMAGE_FRAGMENT}

  query Products($first: Int!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
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
  }
` as const;

export const FEATURED_PRODUCT_QUERY = `#graphql
  ${PRODUCT_VARIANT_FRAGMENT}
  ${PRODUCT_IMAGE_FRAGMENT}

  query FeaturedProduct($handle: String!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      description
      handle
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
` as const;
