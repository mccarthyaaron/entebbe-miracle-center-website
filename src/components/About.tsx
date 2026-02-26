import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Grid */}
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Community"
              width={800}
              height={1000}
              sizes="(min-width: 768px) 25vw, 50vw"
              className="w-full h-auto rounded-lg shadow-lg transform translate-y-8"
            />
            <Image
              src="https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Worship"
              width={800}
              height={1000}
              sizes="(min-width: 768px) 25vw, 50vw"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2">
            <h3 className="text-accent font-bold uppercase tracking-wider mb-2">Who We Are</h3>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">A Family of Faith, Hope, and Love</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Entebbe Miracle Center is more than just a building; we are a vibrant community of believers dedicated to spreading the Gospel of Jesus Christ. 
              Located in the heart of Entebbe, we believe in the power of prayer, the layout of miracles, and the restoration of destiny.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you are looking for spiritual growth, a place to belong, or an encounter with God, our doors are open to you. 
              Come and witness the transforming power of God's love.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-xl font-bold text-primary">Our Mission</h4>
                <p className="text-sm text-gray-500">To resurrect hope and empower lives through the Word.</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-xl font-bold text-primary">Service Times</h4>
                <p className="text-sm text-gray-500">Sundays: 9:00 AM & 11:00 AM<br/>Wednesdays: 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
