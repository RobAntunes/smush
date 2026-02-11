import { Link } from '@remix-run/react';

export function Footer() {
  return (
    <footer className="bg-cream-800 text-cream-50 py-16 border-t border-cream-700">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-serif font-bold tracking-tight mb-4 text-cream-100">
              SMUSH.
            </div>
            <p className="text-sm text-cream-400 leading-relaxed">
              Nootropics + supergreens. Clinical doses. Full transparency. Formulated in Barcelona.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-normal uppercase tracking-widest text-cream-400 mb-5">Product</h4>
            <div className="flex flex-col gap-3">
              <Link to="/pages/formula" className="text-sm text-cream-300 hover:text-cream-100 transition-colors">Formula</Link>
              <Link to="/pages/ritual" className="text-sm text-cream-300 hover:text-cream-100 transition-colors">Ritual</Link>
              <Link to="/collections/all" className="text-sm text-cream-300 hover:text-cream-100 transition-colors">Shop</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-normal uppercase tracking-widest text-cream-400 mb-5">Company</h4>
            <div className="flex flex-col gap-3">
              <Link to="/pages/about" className="text-sm text-cream-300 hover:text-cream-100 transition-colors">About</Link>
              <Link to="/pages/faq" className="text-sm text-cream-300 hover:text-cream-100 transition-colors">FAQ</Link>
              <a href="mailto:hello@smush.eu" className="text-sm text-cream-300 hover:text-cream-100 transition-colors">Contact</a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xs font-normal uppercase tracking-widest text-cream-400 mb-5">Based In</h4>
            <div className="flex flex-col gap-3 text-sm text-cream-300">
              <span>Barcelona — HQ</span>
              <span>Berlin — Operations</span>
              <span>London — Growth</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream-700 pt-8 text-center">
          <p className="text-xs text-cream-500">
            &copy; 2026 SMUSH. Functional Blends S.L. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
