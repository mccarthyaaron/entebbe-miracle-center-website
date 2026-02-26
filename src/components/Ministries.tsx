import React from 'react';
import Image from 'next/image';

const ministries = [
  {
    title: 'Add ministry title........',
    description: 'Add description........',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Youth group fellowship',
  },
  {
    title: "Add ministry title........",
    description: 'Add description........',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: "Women's ministry",
  },
  {
    title: "Add ministry title........",
    description: 'Add description........',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: "Men's fellowship",
  },
  {
    title: 'Add ministry title........',
    description: 'Add description........',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Children learning',
  },
  {
    title: 'Add ministry title........',
    description: 'Add description........',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Worship and music',
  },
  {
    title: 'Add ministry title........',
    description:'Add description........',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Community outreach',
  },
];

const Ministries = () => {
  return (
    <section id="ministries" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-accent font-bold uppercase tracking-wider mb-2">What We Do</h3>
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Ministries</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every believer has a place to serve and grow. Explore the ministries through which we live out our faith together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <article
              key={`${ministry.title}-${index}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={ministry.image}
                  alt={ministry.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-60" />
                <h4 className="absolute bottom-4 left-4 right-4 text-xl font-serif font-bold text-white drop-shadow-md">
                  {ministry.title}
                </h4>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {ministry.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-4 text-accent font-semibold text-sm hover:text-primary transition-colors"
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
