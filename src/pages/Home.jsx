import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  // Get first 4 products as featured
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-peach-50 via-cream to-white min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal leading-tight">
                  Peachwood
                </h1>
                <p className="text-2xl md:text-3xl font-serif italic text-gold">
                  Handcrafted Elegance
                </p>
              </div>
              
              <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
                Discover our curated collection of timeless jewellery, each piece
                meticulously handcrafted to celebrate life's most precious moments.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-primary">
                  Shop Collection
                </Link>
                <Link to="/products" className="btn-secondary">
                  Explore More
                </Link>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-peach-200">
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-gold mb-1">100%</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">Handcrafted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-gold mb-1">Free</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">Shipping</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-gold mb-1">30 Day</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">Returns</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-slide-up animate-delay-200">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80"
                  alt="Elegant jewellery display"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl animate-float max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-serif font-semibold text-charcoal">Quality Guaranteed</div>
                    <div className="text-sm text-gray-600">Lifetime Warranty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="section-title">Featured Collection</h2>
            <p className="section-subtitle">
              Handpicked pieces that embody timeless beauty and craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-cream to-peach-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">The Peachwood Promise</h2>
            <p className="section-subtitle">
              Excellence in every detail, from design to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-3">
                Artisan Crafted
              </h3>
              <p className="text-gray-600">
                Each piece is meticulously handcrafted by skilled artisans with
                decades of experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-3">
                Ethically Sourced
              </h3>
              <p className="text-gray-600">
                We use only conflict-free materials and support fair trade
                practices worldwide.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-3">
                Lifetime Warranty
              </h3>
              <p className="text-gray-600">
                Every piece comes with our lifetime warranty and complimentary
                care services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Begin Your Story
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have found their perfect
            piece. Experience the Peachwood difference today.
          </p>
          <Link
            to="/products"
            className="inline-block bg-gold text-white px-8 py-4 rounded-sm font-sans font-medium uppercase text-sm tracking-wider transition-all duration-300 hover:bg-gold-dark hover:shadow-xl hover:scale-105"
          >
            Discover Your Perfect Piece
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
