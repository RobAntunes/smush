import { PRODUCT_VARIANT_FRAGMENT, MONEY_FRAGMENT } from '../fragments';

export const CART_FRAGMENT = `#graphql
  ${PRODUCT_VARIANT_FRAGMENT}
  ${MONEY_FRAGMENT}

  fragment Cart on Cart {
    id
    checkoutUrl
    totalQuantity
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              ...ProductVariant
              product {
                id
                title
                handle
                featuredImage {
                  url
                  altText
                  width
                  height
                }
              }
            }
          }
          attributes {
            key
            value
          }
          sellingPlanAllocation {
            sellingPlan {
              id
              name
              description
            }
          }
        }
      }
    }
    attributes {
      key
      value
    }
    cost {
      subtotalAmount {
        ...Money
      }
      totalAmount {
        ...Money
      }
      totalTaxAmount {
        ...Money
      }
    }
    discountCodes {
      code
      applicable
    }
  }
` as const;

export const CART_CREATE_MUTATION = `#graphql
  ${CART_FRAGMENT}

  mutation CartCreate($input: CartInput!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ...Cart
      }
      userErrors {
        field
        message
      }
    }
  }
` as const;

export const CART_LINES_ADD_MUTATION = `#graphql
  ${CART_FRAGMENT}

  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...Cart
      }
      userErrors {
        field
        message
      }
    }
  }
` as const;

export const CART_LINES_UPDATE_MUTATION = `#graphql
  ${CART_FRAGMENT}

  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...Cart
      }
      userErrors {
        field
        message
      }
    }
  }
` as const;

export const CART_LINES_REMOVE_MUTATION = `#graphql
  ${CART_FRAGMENT}

  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...Cart
      }
      userErrors {
        field
        message
      }
    }
  }
` as const;

export const CART_QUERY = `#graphql
  ${CART_FRAGMENT}

  query Cart($id: ID!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cart(id: $id) {
      ...Cart
    }
  }
` as const;
