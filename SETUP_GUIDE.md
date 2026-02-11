# SMUSH. Shopify Hydrogen Setup Guide

Complete step-by-step guide to get your SMUSH. storefront running.

## Phase 1: Shopify Admin Setup

### 1.1 Create Shopify Store
1. Go to https://shopify.com and create a new store (if you don't have one)
2. Choose a store name (e.g., "smush-store")
3. Complete the initial setup

### 1.2 Enable Storefront API
1. In Shopify Admin, go to **Settings → Apps and sales channels**
2. Click **Develop apps** (at the bottom)
3. Click **Create an app**
4. Name it "Hydrogen Storefront"
5. Click **Configure Storefront API scopes**
6. Enable these scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_product_tags`
   - `unauthenticated_read_collection`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_checkouts`
7. Click **Install app**
8. Copy the following tokens (you'll need these for `.env`):
   - **Storefront API access token** (this is your PUBLIC token)
   - **Admin API access token** (this is your PRIVATE token)

### 1.3 Create Product: "The Pouch"

1. Go to **Products → Add product**
2. Fill in product details:
   ```
   Title: The Pouch
   Description: An 11-ingredient masterpiece. Ceremonial Matcha, Lion's Mane,
   and Supergreens designed to replace your coffee and multivitamin.

   Detailed Description:
   • 1500mg Ceremonial Matcha
   • 1000mg Lion's Mane
   • 500mg Cordyceps
   • 600mg Ashwagandha
   • 500mg Rhodiola Rosea
   • 200mg L-Theanine
   • 1000mg Spirulina
   • 800mg Chlorella
   • 100% DV Vitamin B Complex
   • 2000IU Vitamin D3
   • 200mg Magnesium Glycinate

   30 servings per pouch (10g per serving)
   100% vegan, gluten-free, non-GMO
   Formulated in Barcelona
   ```
3. Upload product image: `/Users/boss/Documents/smush/smush-hydrogen/public/images/mockup.png`
4. Set price: **€59.99** (or $59.99 depending on your market)
5. Under **Product organization**:
   - Product type: Supplements
   - Vendor: SMUSH
   - Tags: functional-beverage, matcha, nootropics
6. Set **Handle** (in SEO section): `the-pouch`
7. Click **Save**

### 1.4 Create Collection: "All Products"

1. Go to **Products → Collections**
2. Click **Create collection**
3. Title: **All Products**
4. Description: "Shop our complete range of premium functional beverages"
5. Collection type: **Manual** (or Automated with condition: Product type equals Supplements)
6. Add "The Pouch" to this collection
7. Set **Handle**: `all`
8. Click **Save**

### 1.5 Set Up Subscriptions (Optional but Recommended)

**Using Shopify Native Subscriptions:**

1. Go to **Products → Subscriptions** (if not visible, search in Shopify Admin)
2. Click **Create selling plan**
3. Configure plan:
   ```
   Plan name: Subscribe & Save
   Delivery frequency: Every 4 weeks
   Discount type: Percentage
   Discount value: 15% (so €50.99 instead of €59.99)
   ```
4. Click **Add products** and select "The Pouch"
5. Click **Save**

**Alternative: Using a Subscription App (Recharge, Bold, etc.):**
- Install app from Shopify App Store
- Follow app-specific setup for subscription products
- Ensure GraphQL queries in the codebase are compatible

### 1.6 Configure Shipping

1. Go to **Settings → Shipping and delivery**
2. Set up shipping zones:
   - **EU Zone**: Free shipping over €50
   - **UK Zone**: Free shipping over £50
   - **Rest of World**: Standard rates
3. Add shipping rates for each zone

### 1.7 Configure Taxes

1. Go to **Settings → Taxes and duties**
2. Enable automatic tax calculation
3. Configure for your primary markets (EU, UK, etc.)

### 1.8 Set Up Payment Providers

1. Go to **Settings → Payments**
2. Add payment providers:
   - Shopify Payments (recommended)
   - PayPal
   - Stripe (if needed)
3. Configure currency: EUR (or USD)

---

## Phase 2: Local Development Setup

### 2.1 Clone and Install

Already done! The project is at:
```
/Users/boss/Documents/smush/smush-hydrogen
```

Dependencies are installed. If you need to reinstall:
```bash
cd /Users/boss/Documents/smush/smush-hydrogen
npm install --legacy-peer-deps
```

### 2.2 Configure Environment Variables

1. Open `/Users/boss/Documents/smush/smush-hydrogen/.env`
2. Fill in your Shopify credentials from Step 1.2:
   ```env
   PUBLIC_STOREFRONT_API_TOKEN=your_public_token_here
   PUBLIC_STORE_DOMAIN=your-store.myshopify.com
   PRIVATE_STOREFRONT_API_TOKEN=your_private_token_here
   SESSION_SECRET=random_secret_string_here
   ```
3. Generate `SESSION_SECRET` with:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

### 2.3 Install Shopify CLI (if not already installed)

```bash
npm install -g @shopify/cli @shopify/theme
```

---

## Phase 3: Testing Locally

### 3.1 Start Development Server

```bash
cd /Users/boss/Documents/smush/smush-hydrogen
npm run dev
```

This will start the server at: http://localhost:3000

### 3.2 Test Core Functionality

1. **Homepage**: Visit http://localhost:3000
   - Check hero section loads
   - Verify ticker animation works
   - Check ingredient grid displays

2. **Product Page**: Visit http://localhost:3000/products/the-pouch
   - Verify product data loads from Shopify
   - Test "Add to Cart" button
   - Check subscription selector (if enabled)

3. **Cart**: Click "Cart" in header
   - Add product to cart
   - Verify cart drawer opens
   - Check quantities can be updated
   - Test "Proceed to Checkout" button

4. **Collection Page**: Visit http://localhost:3000/collections/all
   - Verify products display
   - Test product card links

5. **Content Pages**:
   - http://localhost:3000/pages/formula
   - http://localhost:3000/pages/ritual
   - http://localhost:3000/pages/about
   - http://localhost:3000/pages/faq

### 3.3 Common Issues & Fixes

**Issue: "StorefrontApiError: Invalid token"**
- Solution: Double-check your `PUBLIC_STOREFRONT_API_TOKEN` in `.env`
- Make sure you copied the **Storefront API** token, not Admin API

**Issue: "Product not found"**
- Solution: Verify product handle is exactly `the-pouch` (no caps, with hyphen)
- Check product is published to "Online Store" sales channel

**Issue: "Collection not found"**
- Solution: Verify collection handle is exactly `all`
- Ensure collection contains products

**Issue: Cart not updating**
- Solution: Check browser console for errors
- Verify Storefront API has cart write permissions enabled

**Issue: Subscription option not showing**
- Solution: Ensure selling plans are properly attached to product
- Check GraphQL query includes `sellingPlanGroups`

---

## Phase 4: Styling & Design Verification

### 4.1 Design Checklist

Compare your local site to the original `/Users/boss/Documents/smush/index.html`:

- [ ] Background color matches (`#fafaf5` alabaster)
- [ ] Typography uses Playfair Display for headings
- [ ] Typography uses General Sans for body text
- [ ] Buttons have square corners (0px border-radius)
- [ ] Ticker animation scrolls smoothly
- [ ] Product image has rotation hover effect
- [ ] Ingredient cards have grayscale → color hover
- [ ] Navigation is fixed/sticky at top
- [ ] Mobile responsive (test at 375px, 768px, 1440px widths)

### 4.2 Performance Check

1. Run Lighthouse audit:
   ```bash
   npm run build
   npm run preview
   # Open in Chrome, run Lighthouse
   ```
2. Target scores:
   - Performance: 90+
   - Accessibility: 95+
   - SEO: 100

---

## Phase 5: Deployment to Shopify Oxygen

### 5.1 Build for Production

```bash
npm run build
```

This creates optimized production files in `/build`

### 5.2 Deploy to Oxygen

```bash
shopify hydrogen deploy
```

Follow the prompts:
1. Select your Shopify store
2. Choose environment (production/staging)
3. Confirm deployment

### 5.3 Configure Custom Domain (Optional)

1. In Shopify Admin: **Settings → Domains**
2. Click **Connect existing domain**
3. Enter your domain (e.g., `shop.smush.eu`)
4. Follow DNS configuration instructions
5. Wait for SSL certificate (automatic, takes ~1 hour)

### 5.4 Post-Deployment Testing

Visit your deployed URL and test:
- [ ] All pages load correctly
- [ ] Product data appears
- [ ] Cart and checkout work end-to-end
- [ ] Subscriptions appear correctly
- [ ] Mobile responsive
- [ ] SSL certificate valid (https://)

---

## Phase 6: Final Optimizations

### 6.1 SEO Setup

1. In each page route file, verify `meta` function returns:
   - Unique title
   - Descriptive meta description
   - Open Graph tags (for social sharing)

2. In Shopify Admin: **Online Store → Preferences**
   - Set homepage title and meta description
   - Add social media links

3. Submit sitemap to Google:
   - https://your-store.myshopify.com/sitemap.xml

### 6.2 Analytics Setup

1. **Google Analytics**:
   - Go to **Settings → Apps and sales channels**
   - Install "Google Analytics" app
   - Connect your GA4 property

2. **Shopify Analytics**:
   - Available by default in **Analytics** section
   - Track orders, customers, conversion rate

### 6.3 Email & Marketing

1. Set up transactional emails:
   - **Settings → Notifications**
   - Customize order confirmation, shipping, etc.

2. Set up abandoned cart recovery:
   - Enabled by default in Shopify
   - Customize in **Settings → Checkout**

---

## Maintenance & Updates

### Updating Product Info
- Edit in Shopify Admin: changes sync automatically
- Ingredient data in `/app/data/ingredients.ts` must be updated manually

### Updating Content Pages
- Edit files in `/app/routes/pages.*.tsx`
- Rebuild and redeploy after changes

### Updating Styles
- Edit files in `/app/styles/`
- Changes hot-reload in dev mode

### Monitoring
- Check Shopify Admin → Analytics daily
- Monitor Oxygen logs for errors
- Set up uptime monitoring (e.g., Pingdom)

---

## Support & Resources

- Hydrogen Docs: https://shopify.dev/docs/custom-storefronts/hydrogen
- Storefront API: https://shopify.dev/docs/api/storefront
- Remix Docs: https://remix.run/docs
- Tailwind CSS: https://tailwindcss.com/docs

For SMUSH-specific issues:
- Email: hello@smush.eu
- Check README.md in project root

---

## Appendix: GraphQL Testing

Test your Storefront API with Shopify's GraphiQL explorer:

1. Go to: https://shopify.dev/docs/api/storefront
2. Click "GraphiQL Explorer"
3. Test queries from `/app/lib/shopify/queries/`

Example query to test:
```graphql
{
  product(handle: "the-pouch") {
    id
    title
    description
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      url
      altText
    }
  }
}
```

If this returns data, your Storefront API is working correctly!

---

**Congratulations! Your SMUSH. Hydrogen storefront is ready to launch! 🚀**
