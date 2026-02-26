import React from 'react';
import Image from 'next/image';

const sermons = [
  {
    title: 'Add sermon title........',       // Add sermon title
    speaker: 'Add Pastor name........',       // Add Pastor name
    date: 'Add date........',                 // Add date
    excerpt: 'Add excerpt........',           // Add excerpt
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Pastor preaching',
    youtubeUrl: '...',  // Replace VIDEO_ID with your sermon's YouTube video ID
  },
  {
    title: 'Add sermon title........',          
    speaker: 'Add Minister name........',     // Add Minister name
    date: 'Add date........',                 // Add date
    excerpt: 'Add excerpt........',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Worship and word',
    youtubeUrl: '...',  // Replace VIDEO_ID with your sermon's YouTube video ID
  },
  {
    title: 'Add sermon title........',         
    speaker: 'Add Pastor name........',       // Add Pastor name
    date: 'Add date........',                 // Add date
    excerpt: 'Add excerpt........',           // Add excerpt
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Bible and message',
    youtubeUrl: '...',  // Replace VIDEO_ID with your sermon's YouTube video ID
  },
];

const Sermons = () => {
  return (
    <section id="sermons" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-accent font-bold uppercase tracking-wider mb-2">Be Fed by the Word</h3>
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Recent Sermons</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Catch up on our latest messages and let the Word of God strengthen and guide your walk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sermons.map((sermon, index) => (
            <article
              key={`${sermon.title}-${index}`}
              className="bg-secondary rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={sermon.image}
                  alt={sermon.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-accent text-sm font-semibold">{sermon.date}</span>
                  <a
                    href={sermon.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-accent/90 text-primary text-xs font-bold rounded-full hover:bg-accent transition-colors"
                  >
                    Watch
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif font-bold text-primary mb-2 line-clamp-2">
                  {sermon.title}
                </h4>
                <p className="text-gray-500 text-sm mb-2">{sermon.speaker}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {sermon.excerpt}
                </p>
                <div>
                  <a
                    href={sermon.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 px-4 text-sm rounded-full font-bold transition-all duration-300 transform hover:scale-105 bg-accent text-primary hover:bg-yellow-400 hover:shadow-lg"
                  >
                    Watch
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sermons;
