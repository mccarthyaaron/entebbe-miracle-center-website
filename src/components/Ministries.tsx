import React from 'react';
import Image from 'next/image';

const ministries = [
  {
    title: 'Women Ministry',
    description: 'Add description........',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Youth group fellowship',
  },
  {
    title: 'Men Ministry',
    description: 'Add description........',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: "Women's ministry",
  },
  {
    title: 'Music Ministry',
    description: 'Add description........',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: "Men's fellowship",
  },
  {
    title: 'Children Ministry',
    description: 'Add description........',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Children learning',
  },
  {
    title: 'Youth Ministry',
    description: 'Add description........',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Worship and music',
  },
];

const Ministries = () => {
  return (
    <section id="ministries" className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-neutral-500 mb-2">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6 tracking-tight">Our Ministries</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Every believer has a place to serve and grow. Explore the ministries through which we live out our faith together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <article
              key={`${ministry.title}-${index}`}
              className="bg-white rounded-2xl border border-black/10 overflow-hidden hover:shadow-[0_28px_80px_-45px_rgba(0,0,0,0.55)] transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={ministry.image}
                  alt={ministry.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />
                <h4 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white drop-shadow-md tracking-tight">
                  {ministry.title}
                </h4>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {ministry.description}
                </p>
                <a
                  href="/#contact"
                  className="inline-block mt-4 text-black font-semibold text-sm hover:opacity-65 transition-colors"
                >
                  Get involved →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
