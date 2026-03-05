import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 max-w-6xl mx-auto w-full" data-aos="fade-up">
        <div className="text-center">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] md:text-xs font-mono uppercase tracking-[0.18em] text-white/85 mb-6">
            Entebbe, Uganda
          </p>
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-white mb-5 leading-[1.05] tracking-tight">
            "Go teach and heal the body of Christ"
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Entebbe+Miracle+Center+Church+Kitoro+Entebbe" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="min-w-40">
                Visit Us
              </Button>
            </a>
            <a 
              href="http://www.youtube.com/@AaronMutebiMinistries" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="min-w-40">
                Watch Live
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-10 max-w-4xl mx-auto text-left">
          <p className="text-xl md:text-2xl font-semibold text-amber-400 tracking-tight">SERVICE TIMES</p>
          <div className="mt-2 h-px bg-amber-400/70 w-56" />

          <div className="mt-6 space-y-7">
            <div>
              <p className="text-white text-lg font-semibold tracking-[0.12em] uppercase">Sundays</p>
              <p className="text-amber-400 text-[11px] uppercase tracking-[0.16em] mt-1">First Service</p>
              <p className="text-white text-xl md:text-2xl font-light leading-none mt-1">8:00AM - 10:00AM</p>
              <p className="text-amber-400 text-[11px] uppercase tracking-[0.16em] mt-3">Second Service</p>
              <p className="text-white text-xl md:text-2xl font-light leading-none mt-1">10:00AM - 1:00PM</p>
            </div>

            <div>
              <p className="text-white text-lg font-semibold tracking-[0.12em] uppercase">Monday - Friday</p>
              <p className="text-white text-xl md:text-2xl font-light leading-none mt-1">6:00PM - 7:30PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="/#about" className="text-white/70 hover:text-white inline-flex items-center gap-2 text-xs tracking-wide">
          <span>Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
