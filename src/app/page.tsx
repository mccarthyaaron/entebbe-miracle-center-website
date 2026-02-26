import About from '../components/About';
import Footer from '../components/Footer';
import Giving from '../components/Giving';
import Hero from '../components/Hero';
import Ministries from '../components/Ministries';
import Navbar from '../components/Navbar';
import Sermons from '../components/Sermons';

export default function HomePage() {
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
  );
}
