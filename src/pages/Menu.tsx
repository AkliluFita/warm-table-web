
import FeaturedMenu from '@/components/FeaturedMenu';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Menu = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-20 pb-16">
        <FeaturedMenu />
      </section>
      <Footer />
    </div>
  );
};

export default Menu;
