import About from '../components/About';
import Footer from '../components/Footer';
import Giving from '../components/Giving';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Sermons from '../components/Sermons';

export default function HomePage() {
  return (
    <div className="font-sans text-neutral-900 bg-transparent">
      <Navbar />
      <Hero />
      <About />
      <Sermons />
      <Giving />
      <Footer />
    </div>
  );
}
