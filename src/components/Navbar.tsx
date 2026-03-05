'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Button from './Button';

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMinistriesMenuOpen, setIsMinistriesMenuOpen] = useState(false);
  const isHomeRoute = pathname === '/';
  const useSolidNavbar = isScrolled || !isHomeRoute;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinksBeforeMinistries = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
  ];
  const navLinksAfterMinistries = [
    { name: 'Sermons', href: '/#sermons' },
    { name: 'Contact', href: '/#contact' },
  ];
  const ministryLinks = [
    { name: 'Women Ministry', href: '/ministires/women-ministry' },
    { name: 'Men Ministry', href: '/ministires/men-ministry' },
    { name: 'Music Ministry', href: '/ministires/music-ministry' },
    { name: 'Children Ministry', href: '/ministires/children-ministry' },
    { name: 'Youth Ministry', href: '/ministires/youth-ministry' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        useSolidNavbar
          ? 'bg-white/92 backdrop-blur border-b border-black/10 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 flex justify-between items-center">
        <a
          href="/#home"
          className={`text-sm md:text-base font-semibold tracking-tight ${
            useSolidNavbar ? 'text-black' : 'text-white'
          }`}
        >
          Entebbe Miracle Center Church
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-7">
          {navLinksBeforeMinistries.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium tracking-tight hover:opacity-70 transition-colors ${
                useSolidNavbar ? 'text-neutral-700' : 'text-neutral-200'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setIsMinistriesMenuOpen(true)}
            onMouseLeave={() => setIsMinistriesMenuOpen(false)}
          >
            <button
              type="button"
              className={`text-sm font-medium tracking-tight hover:opacity-70 transition-colors ${
                useSolidNavbar ? 'text-neutral-700' : 'text-neutral-200'
              }`}
              onClick={() => setIsMinistriesMenuOpen((prev) => !prev)}
              aria-expanded={isMinistriesMenuOpen}
              aria-haspopup="menu"
            >
              Ministries
            </button>
            <div
              className={`absolute left-0 top-full pt-2 w-56 transition ${
                isMinistriesMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="rounded-xl border border-black/10 bg-white shadow-lg p-2">
                {ministryLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                    onClick={() => setIsMinistriesMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {navLinksAfterMinistries.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium tracking-tight hover:opacity-70 transition-colors ${
                useSolidNavbar ? 'text-neutral-700' : 'text-neutral-200'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="primary"
            className="py-2 px-4"
            onClick={() => {
              const section = document.getElementById('giving');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#giving';
              }
            }}
          >
            Give Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden h-10 w-10 grid place-items-center rounded-lg border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 ${
            useSolidNavbar ? 'border-black/15 text-black' : 'border-white/20 text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span>{isMobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur border-b border-black/10 py-5 px-5 flex flex-col space-y-4">
          {navLinksBeforeMinistries.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-neutral-700 hover:text-black text-sm font-medium tracking-tight"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-1">
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-500 mb-2">Ministries</p>
            <div className="flex flex-col gap-2">
              {ministryLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-black text-sm font-medium tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          {navLinksAfterMinistries.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-neutral-700 hover:text-black text-sm font-medium tracking-tight"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <Button
            variant="primary"
            className="w-full text-center mt-1"
            onClick={() => {
              setIsMobileMenuOpen(false);
              const section = document.getElementById('giving');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#giving';
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
