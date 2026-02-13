import { Link } from '@remix-run/react';

export function Footer() {
  return (
    <footer className="bg-cream-800 text-cream-50 pt-20 pb-16 border-t border-cream-600" role="contentinfo">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tight mb-4 text-cream-100 block" aria-label="SMUSH home">
              SMUSH.
            </Link>
            <p className="text-sm text-cream-400 leading-relaxed">
              Mushroom matcha supergreens. 11 clinical doses. Full transparency. €2/day.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-normal uppercase tracking-widest text-cream-400 mb-5">Product</h4>
            <nav className="flex flex-col gap-3" aria-label="Product links">
              <Link to="/pages/formula" className="text-sm text-cream-300 hover:text-cream-100 transition-colors">Formula & Ingredients</Link>
              <Link to="/pages/ritual" className="text-sm text-cream-300 hover:text-cream-100 transition-colors">How to Prepare</Link>
              <Link to="/collections/all" className="text-sm text-cream-300 hover:text-cream-100 transition-colors">Shop The Pouch</Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-normal uppercase tracking-widest text-cream-400 mb-5">Company</h4>
            <nav className="flex flex-col gap-3" aria-label="Company links">
              <Link to="/pages/about" className="text-sm text-cream-300 hover:text-cream-100 transition-colors">About SMUSH</Link>
              <Link to="/pages/faq" className="text-sm text-cream-300 hover:text-cream-100 transition-colors">FAQ</Link>
              <a href="mailto:hello@smush.eu" className="text-sm text-cream-300 hover:text-cream-100 transition-colors">Contact</a>
            </nav>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xs font-normal uppercase tracking-widest text-cream-400 mb-5">Based In</h4>
            <div className="flex flex-col gap-3 text-sm text-cream-300">
              <span>Barcelona — Formulation & HQ</span>
              <span>Berlin — Operations</span>
              <span>London — Growth</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream-500">
            &copy; 2026 SMUSH. Functional Blends S.L. All rights reserved.
          </p>
          <nav className="flex gap-6" aria-label="Legal">
            <Link to="/policies/privacy-policy" className="text-xs text-cream-500 hover:text-cream-300 transition-colors">Privacy Policy</Link>
            <Link to="/policies/terms-of-service" className="text-xs text-cream-500 hover:text-cream-300 transition-colors">Terms of Service</Link>
            <Link to="/policies/refund-policy" className="text-xs text-cream-500 hover:text-cream-300 transition-colors">Refund Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
