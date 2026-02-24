import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ministries from './components/Ministries';
import Sermons from './components/Sermons';
import Giving from './components/Giving';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-secondary">
      <Navbar />
      <Hero />
      <About />
      <Ministries />
      <Sermons />
      <Giving />
      <Footer />
    </div>
  )
}

export default App;
