import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="p-6 md:p-10">
          {/* Text Content */}
          <div>
            <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2">Who We Are</p>
            <h2 className="text-center text-3xl md:text-4xl font-semibold text-black mb-6 tracking-tight">A Family of Faith, Hope, and Love</h2>
            <p className="text-neutral-700 leading-relaxed">Entebbe Miracle Center Church....</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
