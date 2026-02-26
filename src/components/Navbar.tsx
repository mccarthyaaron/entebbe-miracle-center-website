'use client';

import React, { useState, useEffect } from 'react';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Ministries', href: '#ministries' },
    { name: 'Sermons', href: '#sermons' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className={`text-2xl font-serif font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
          Entebbe Miracle Center Church
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium hover:text-accent transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant={isScrolled ? 'primary' : 'primary'}
            className="py-2 px-6 text-sm"
            onClick={() => {
              const section = document.getElementById('giving');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.hash = '#giving';
              }
            }}
          >
            Give Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={isScrolled ? 'text-primary' : 'text-white'}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-800 hover:text-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <Button
            variant="primary"
            className="w-full text-center"
            onClick={() => {
              setIsMobileMenuOpen(false);
              const section = document.getElementById('giving');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.hash = '#giving';
              }
            }}
          >
            Give Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
