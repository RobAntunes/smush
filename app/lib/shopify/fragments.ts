// Reusable GraphQL fragments for Shopify Storefront API

export const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    id
    title
    availableForSale
    sku
    price {
      amount
      currencyCode
    }
    compareAtPrice {
      amount
      currencyCode
    }
    selectedOptions {
      name
      value
    }
  }
` as const;

export const PRODUCT_IMAGE_FRAGMENT = `#graphql
  fragment ProductImage on Image {
    url
    altText
    width
    height
  }
` as const;

export const MONEY_FRAGMENT = `#graphql
  fragment Money on MoneyV2 {
    amount
    currencyCode
  }
` as const;

export const SELLING_PLAN_FRAGMENT = `#graphql
  fragment SellingPlan on SellingPlan {
    id
    name
    description
    options {
      name
      value
    }
    priceAdjustments {
      adjustmentValue {
        ... on SellingPlanFixedAmountPriceAdjustment {
          adjustmentAmount {
            amount
            currencyCode
          }
        }
        ... on SellingPlanPercentagePriceAdjustment {
          adjustmentPercentage
        }
      }
    }
    recurringDeliveries
  }
` as const;
