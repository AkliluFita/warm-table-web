
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-20 pb-16 section-container bg-restaurant-light-brown">
        <div className="text-center mb-16">
          <h4 className="uppercase tracking-widest text-restaurant-accent mb-2">Our Gallery</h4>
          <h2 className="heading-lg text-restaurant-dark-brown mb-4">Visual Journey</h2>
          <p className="text-restaurant-medium-brown max-w-2xl mx-auto">
            Explore our complete collection of culinary creations and memorable moments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg cursor-pointer group relative"
            >
              <img 
                src={`https://images.unsplash.com/photo-${1500000000000 + index}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-restaurant-dark-brown bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;
