import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const orderData = location.state?.orderData;

  // Generate random order number
  const orderNumber = `PW${Date.now().toString().slice(-8)}`;

  useEffect(() => {
    // Confetti effect would go here
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-50 via-cream to-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-12 text-center animate-fade-in">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-slide-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-12 h-12 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 animate-slide-up animate-delay-100">
          Order Placed Successfully!
        </h1>
        
        <p className="text-lg text-gray-600 mb-2 animate-slide-up animate-delay-200">
          Thank you for your purchase, {orderData?.firstName || 'valued customer'}!
        </p>
        
        <p className="text-gray-600 mb-8 animate-slide-up animate-delay-300">
          Your order has been confirmed and will be shipped shortly.
        </p>

        {/* Order Number */}
        <div className="bg-white border-2 border-gold rounded-lg p-8 mb-8 shadow-xl animate-slide-up animate-delay-400">
          <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">
            Order Number
          </p>
          <p className="text-3xl font-serif font-bold text-gold mb-4">
            {orderNumber}
          </p>
          <p className="text-sm text-gray-600">
            A confirmation email has been sent to{' '}
            <span className="font-semibold text-charcoal">
              {orderData?.email || 'your email address'}
            </span>
          </p>
        </div>

        {/* Order Details */}
        {orderData && (
          <div className="bg-cream rounded-lg p-8 mb-8 text-left animate-slide-up animate-delay-500">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
              Delivery Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wide mb-1">
                  Customer Name
                </p>
                <p className="text-charcoal font-medium">
                  {orderData.firstName} {orderData.lastName}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wide mb-1">
                  Phone Number
                </p>
                <p className="text-charcoal font-medium">{orderData.phone}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-600 uppercase tracking-wide mb-1">
                  Shipping Address
                </p>
                <p className="text-charcoal font-medium">
                  {orderData.address}, {orderData.city}, {orderData.state}{' '}
                  {orderData.zipCode}, {orderData.country}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* What's Next */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 animate-slide-up animate-delay-600">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
            What Happens Next?
          </h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-gold font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">
                  Order Confirmation
                </h3>
                <p className="text-sm text-gray-600">
                  You'll receive a confirmation email with your order details
                  within minutes.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-gold font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">
                  Quality Check & Packaging
                </h3>
                <p className="text-sm text-gray-600">
                  Our artisans carefully inspect and package your jewellery with
                  love and care.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-gold font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">
                  Shipping & Delivery
                </h3>
                <p className="text-sm text-gray-600">
                  Your order will be shipped within 2-3 business days with free
                  tracking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-700">
          <Link to="/products" className="btn-primary">
            Continue Shopping
          </Link>
          <Link to="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>

        {/* Customer Support */}
        <div className="mt-12 pt-8 border-t border-gray-200 animate-fade-in animate-delay-800">
          <p className="text-gray-600 mb-4">
            Questions about your order? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a
              href="mailto:support@peachwood.com"
              className="text-gold hover:text-gold-dark transition-colors flex items-center justify-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span>support@peachwood.com</span>
            </a>
            <a
              href="tel:+15551234567"
              className="text-gold hover:text-gold-dark transition-colors flex items-center justify-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span>(555) 123-4567</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
