import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-md card-hover"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-peach-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Quick Add Button - Shows on hover */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 ${
            isAdding ? 'bg-green-600' : 'bg-gold hover:bg-gold-dark'
          } text-white px-6 py-2 rounded-sm text-sm font-medium uppercase tracking-wider shadow-lg`}
          disabled={isAdding}
        >
          {isAdding ? (
            <span className="flex items-center space-x-2">
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Added!</span>
            </span>
          ) : (
            'Quick Add'
          )}
        </button>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs font-sans uppercase tracking-wide text-charcoal">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-serif font-semibold text-charcoal mb-2 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-serif font-semibold text-gold">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500 group-hover:text-gold transition-colors">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
