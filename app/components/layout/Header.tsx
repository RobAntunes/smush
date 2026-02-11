import { Link } from '@remix-run/react';
import { useState } from 'react';

interface HeaderProps {
  cartCount?: number;
  onCartClick?: () => void;
}

export function Header({ cartCount = 0, onCartClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-cream-100/90 backdrop-blur-md z-50 border-b border-cream-300">
      <div className="container flex justify-between items-center py-8">
        {/* Logo */}
        <Link to="/" className="text-3xl font-serif font-bold tracking-tight">
          SMUSH.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/pages/formula"
            className="text-cream-800 no-underline font-medium text-sm hover:text-cream-600 transition-colors"
          >
            Formula
          </Link>
          <Link
            to="/pages/ritual"
            className="text-cream-800 no-underline font-medium text-sm hover:text-cream-600 transition-colors"
          >
            Ritual
          </Link>
          <Link
            to="/collections/all"
            className="text-cream-800 no-underline font-medium text-sm hover:text-cream-600 transition-colors"
          >
            Shop
          </Link>
        </div>

        {/* Cart Button */}
        <button
          onClick={onCartClick}
          className="btn text-xs py-3 px-6"
        >
          Cart ({cartCount})
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-cream-800"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-cream-300">
          <div className="container py-6 flex flex-col gap-4">
            <Link
              to="/pages/formula"
              className="text-cream-800 no-underline font-medium text-base py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Formula
            </Link>
            <Link
              to="/pages/ritual"
              className="text-cream-800 no-underline font-medium text-base py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ritual
            </Link>
            <Link
              to="/collections/all"
              className="text-cream-800 no-underline font-medium text-base py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
