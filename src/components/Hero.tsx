import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Worship Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-accent font-bold tracking-widest uppercase mb-4 animate-fadeIn">Welcome Home</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Experience God's <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
            Miraculous Power
          </span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join us at Entebbe Miracle Center for a life-changing encounter with the Holy Spirit. 
          A place of healing, restoration, and divine purpose.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="https://www.google.com/maps/place/Entebbe+Miracle+Center" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="primary">
              Plan Your Visit
            </Button>
          </a>
          <a 
            href="http://www.youtube.com/@AaronMutebiMinistries" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              Watch Live
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-70 hover:opacity-100">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
