import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here (e.g., API call)
    console.log('Subscribed with email:', email);
    // Optionally reset input
    setEmail('');
  };

  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Company</h3>
          <p className="text-gray-500 mt-3">Delivering quality products with a seamless shopping experience.</p>
          <p className="text-gray-500 mt-2">© 2024 All rights reserved.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="text-gray-500 hover:text-cyan-800 transition">Home</a></li>
            <li><a href="#" className="text-gray-500 hover:text-cyan-800 transition">Shop</a></li>
            <li><a href="#" className="text-gray-500 hover:text-cyan-800 transition">About Us</a></li>
            <li><a href="#" className="text-gray-500 hover:text-cyan-800 transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Customer Service</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="text-gray-500 hover:text-cyan-800 transition">FAQs</a></li>
            <li><a href="#" className="text-gray-500 hover:text-cyan-800 transition">Shipping & Returns</a></li>
            <li><a href="#" className="text-gray-500 hover:text-cyan-800 transition">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-500 hover:text-cyan-800 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Stay Updated</h3>
          <p className="text-gray-500 mt-3">Subscribe to our newsletter for exclusive deals and updates.</p>
          <form onSubmit={handleSubscribe} className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-cyan-800 hover:bg-cyan-800 text-white px-4 py-3 rounded-r-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8 py-4 text-center text-gray-500 text-sm">
        Care Connect @2025
      </div>
    </footer>
  );
};

export default Footer;
