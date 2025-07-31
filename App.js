import React from 'react';
import './App.css';

function App() {
  return (
    <div className="font-sans">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">UrbanNest</h1>
        <nav className="space-x-6">
          <a href="#home" className="text-gray-600 hover:text-black">Home</a>
          <a href="#about" className="text-gray-600 hover:text-black">About</a>
          <a href="#products" className="text-gray-600 hover:text-black">Products</a>
          <a href="#contact" className="text-gray-600 hover:text-black">Contact</a>
        </nav>
      </header>

      <section id="home" className="bg-gradient-to-r from-gray-100 to-white p-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to UrbanNest</h2>
        <p className="text-lg text-gray-700">Explore clothing, electronics, jewelry, and cosmetics — all in one place.</p>
      </section>

      <section id="about" className="p-12 bg-white">
        <h3 className="text-3xl font-semibold mb-4 text-center">About UrbanNest</h3>
        <p className="text-gray-700 max-w-3xl mx-auto text-center">
          At UrbanNest, we bring together fashion, tech, beauty, and style to offer a premium shopping experience.
          Our aim is to connect local and international buyers with high-quality, affordable products from trusted sellers.
        </p>
      </section>

      <section id="products" className="p-12 bg-gray-50">
        <h3 className="text-3xl font-semibold mb-8 text-center">Our Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow p-6 rounded-xl text-center">
            <h4 className="text-xl font-bold mb-2">Clothes</h4>
            <p className="text-gray-600">Stylish and affordable fashion for all seasons.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-xl text-center">
            <h4 className="text-xl font-bold mb-2">Electronics</h4>
            <p className="text-gray-600">Latest gadgets and devices at competitive prices.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-xl text-center">
            <h4 className="text-xl font-bold mb-2">Jewelry</h4>
            <p className="text-gray-600">Elegant jewelry crafted for every occasion.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-xl text-center">
            <h4 className="text-xl font-bold mb-2">Cosmetics</h4>
            <p className="text-gray-600">Top-quality skincare and beauty essentials.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="p-12 bg-white">
        <h3 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h3>
        <div className="max-w-xl mx-auto text-center">
          <p className="mb-4 text-gray-700">Have questions? Reach out via WhatsApp or email.</p>
          <p className="text-gray-700">📧 Email: contact@urbannest.com</p>
          <p className="text-gray-700">📱 WhatsApp: +92 300 1234567</p>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; 2025 UrbanNest. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
