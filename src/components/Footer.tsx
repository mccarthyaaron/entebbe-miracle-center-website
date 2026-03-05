import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-6 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-mono uppercase tracking-[0.22em] text-neutral-400 mb-6">Quick Links</h4>
          <ul className="space-y-3 text-neutral-300">
            <li><a href="/#home" className="hover:text-white transition">Home</a></li>
            <li><a href="/#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/ministires/women-ministry" className="hover:text-white transition">Ministries</a></li>
            <li><a href="/#sermons" className="hover:text-white transition">Sermons</a></li>
            <li><a href="/#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-mono uppercase tracking-[0.22em] text-neutral-400 mb-6">Contact Us</h4>
          <ul className="space-y-4 text-neutral-300">
            <li className="flex items-start">
              <span className="text-white mr-3">📮</span>
              <span>P.O Box 84, Entebbe</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">📍</span>
              <span>Entebbe, Uganda<br/>Plot 16-20 Namayirira road</span>
            </li>
            <li className="flex items-center">
              <span className="text-white mr-3">📞</span>
              <span>+256 704926399, +256 772425124, +256 756734466</span>
            </li>
            <li className="flex items-center">
              <span className="text-white mr-3">✉️</span>
              <span>miraclecathedral@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 mt-8 pt-2 border-t border-white/10 text-center text-neutral-400 text-xs">
        <p>&copy; {new Date().getFullYear()} Entebbe Miracle Center Church. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
