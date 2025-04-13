
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Reservations from '@/components/Reservations';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedMenu />
      <About />
      <Gallery />
      <Reservations />
      <Footer />
    </div>
  );
};

export default Index;
