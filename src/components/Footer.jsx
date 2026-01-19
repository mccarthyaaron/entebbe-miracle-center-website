import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white py-12 border-t-4 border-accent">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-serif font-bold mb-4">Entebbe<span className="text-accent">Miracle</span>Center</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            A place where miracles happen and lives are transformed. Join us for an unforgettable experience in God's presence.
          </p>
          <div className="flex space-x-4">
            {/* Social Placeholders */}
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition">F</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition">Y</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition">I</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#home" className="hover:text-accent transition">Home</a></li>
            <li><a href="#about" className="hover:text-accent transition">About Us</a></li>
            <li><a href="#ministries" className="hover:text-accent transition">Ministries</a></li>
            <li><a href="#sermons" className="hover:text-accent transition">Sermons</a></li>
            <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-accent mr-3">📍</span>
              <span>Entebbe, Uganda<br/>Plot 123, Airport Road</span>
            </li>
            <li className="flex items-center">
              <span className="text-accent mr-3">📞</span>
              <span>+256 700 123 456</span>
            </li>
            <li className="flex items-center">
              <span className="text-accent mr-3">✉️</span>
              <span>info@entebbemiraclecenter.org</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Entebbe Miracle Center Church. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
