# Peachwood - Luxury Jewellery E-Commerce Website

A beautiful, fully functional e-commerce frontend for a luxury jewellery brand. Built with React, Vite, Tailwind CSS, and React Router DOM.

## 🌟 Features

### Core Functionality
- **Product Browsing**: Browse all jewellery items with category filtering and sorting
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add/remove items, adjust quantities, persistent cart using localStorage
- **Checkout Process**: Complete checkout form with validation
- **Order Confirmation**: Success page with order details

### Design Highlights
- **Luxury Aesthetic**: Minimal, elegant design with gold accents
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Smooth Animations**: Fade-in, slide-up, and hover effects
- **Context API**: Global state management for cart
- **localStorage**: Cart data persists across sessions

## 🎨 Design System

### Colors
- **Gold**: #D4AF37 (primary accent)
- **Peach/Cream**: #FFF9F5, #FAF8F5 (backgrounds)
- **Charcoal**: #2C2C2C (text)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Montserrat (sans-serif)

## 📁 Project Structure

```
peachwood-jewellery/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── Success.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory**
   ```bash
   cd peachwood-jewellery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The application will hot-reload as you make changes

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📄 Pages Overview

### 1. Home Page (`/`)
- Hero section with brand introduction
- Featured products showcase
- "Why Choose Us" section with trust badges
- Call-to-action section

### 2. Products Page (`/products`)
- Full product grid with all items
- Category filtering (All, Necklaces, Earrings, Rings, Bracelets)
- Sorting options (Featured, Price Low-High, Price High-Low, Name A-Z)
- Newsletter signup section

### 3. Product Details Page (`/product/:id`)
- Large product image
- Detailed product information
- Quantity selector
- Add to cart functionality
- Product specifications
- Related products section

### 4. Cart Page (`/cart`)
- List of all cart items
- Quantity adjustment
- Remove items
- Order summary with price breakdown
- Proceed to checkout

### 5. Checkout Page (`/checkout`)
- Contact information form
- Shipping address form
- Form validation
- Order summary sidebar
- Place order functionality

### 6. Success Page (`/success`)
- Order confirmation
- Order number generation
- Delivery information
- Next steps timeline
- Contact information

## 🛒 Cart Functionality

The shopping cart uses React Context API and localStorage:

- **Add to Cart**: Products can be added from product cards or detail pages
- **Update Quantity**: Increase/decrease quantity or remove items
- **Persistent Storage**: Cart data is saved to localStorage and restored on page load
- **Real-time Updates**: Cart count updates immediately across all pages

## 🎯 Key Components

### CartContext
Manages global cart state with the following methods:
- `addToCart(product)`: Add a product to cart
- `removeFromCart(productId)`: Remove a product from cart
- `updateQuantity(productId, quantity)`: Update product quantity
- `clearCart()`: Clear all items from cart
- `getCartTotal()`: Calculate total price
- `getCartCount()`: Get total number of items

### ProductCard
Reusable component for displaying product information with:
- Product image with hover zoom effect
- Quick add to cart button
- Category badge
- Product name, description, and price

### Navbar
Sticky navigation with:
- Brand logo
- Navigation links
- Shopping cart icon with item count
- Responsive mobile menu

## 🎨 Customization

### Modify Colors
Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  gold: {
    DEFAULT: '#D4AF37',  // Change gold color
    light: '#E8D7A0',
    dark: '#B8941F',
  },
  // ... other colors
}
```

### Add Products
Edit `src/data/products.js` to add or modify products:

```javascript
{
  id: 13,
  name: "Your Product Name",
  price: 99.99,
  category: "Necklaces",
  description: "Product description",
  image: "https://your-image-url.com",
  details: [
    "Detail 1",
    "Detail 2"
  ]
}
```

### Modify Fonts
Change fonts in `tailwind.config.js` and update the Google Fonts link in `index.html`.

## 🔧 Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Context API**: State management
- **localStorage**: Data persistence

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎭 Animation Classes

Custom animation classes available:
- `animate-fade-in`: Fade in effect
- `animate-slide-up`: Slide up from bottom
- `animate-float`: Floating effect
- `animate-delay-100` to `animate-delay-400`: Stagger animations

## 📝 Notes

- This is a **frontend-only** project (no backend or payment processing)
- Product images are sourced from Unsplash
- The checkout process is simulated (no real payment)
- All data is stored in the browser's localStorage

## 🤝 Contributing

This is a demo project. Feel free to fork and customize for your own needs!

## 📄 License

This project is open source and available for educational purposes.

## 🎉 Acknowledgments

- Unsplash for product images
- Google Fonts for typography
- Tailwind CSS for the design system

---

**Built with ❤️ using React + Vite + Tailwind CSS**

For questions or support, please open an issue on GitHub.
