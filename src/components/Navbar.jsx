import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getCartCount } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl md:text-3xl font-serif font-semibold text-charcoal tracking-wide transition-all duration-300 group-hover:text-gold">
              Peachwood
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-sans text-sm tracking-wide uppercase transition-all duration-300 ${
                isActive('/')
                  ? 'text-gold font-semibold'
                  : 'text-charcoal hover:text-gold'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`font-sans text-sm tracking-wide uppercase transition-all duration-300 ${
                isActive('/products')
                  ? 'text-gold font-semibold'
                  : 'text-charcoal hover:text-gold'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/cart"
              className={`relative font-sans text-sm tracking-wide uppercase transition-all duration-300 ${
                isActive('/cart')
                  ? 'text-gold font-semibold'
                  : 'text-charcoal hover:text-gold'
              }`}
            >
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu - Cart Icon */}
          <div className="md:hidden">
            <Link to="/cart" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-charcoal hover:text-gold transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4 flex justify-center space-x-6">
          <Link
            to="/"
            className={`font-sans text-xs tracking-wide uppercase transition-all duration-300 ${
              isActive('/')
                ? 'text-gold font-semibold'
                : 'text-charcoal hover:text-gold'
            }`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`font-sans text-xs tracking-wide uppercase transition-all duration-300 ${
              isActive('/products')
                ? 'text-gold font-semibold'
                : 'text-charcoal hover:text-gold'
            }`}
          >
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
