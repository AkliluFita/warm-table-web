import { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'food' | 'interior' | 'events';
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Gourmet plate with colorful vegetables",
    category: "food"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Restaurant interior with elegant lighting",
    category: "interior"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    alt: "Private dining event setup",
    category: "events"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    alt: "Seafood pasta dish",
    category: "food"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Cozy restaurant bar area",
    category: "interior"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    alt: "Chef's special salad",
    category: "food"
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="section-container bg-restaurant-light-brown">
      <div className="text-center mb-16">
        <h4 className="uppercase tracking-widest text-restaurant-accent mb-2">Visual Feast</h4>
        <h2 className="heading-lg text-restaurant-dark-brown mb-4">Our Gallery</h2>
        <p className="text-restaurant-medium-brown max-w-2xl mx-auto">
          Explore the visual story of our culinary creations, elegant venue, and memorable events.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            className="overflow-hidden rounded-lg cursor-pointer group relative"
            onClick={() => openLightbox(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
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

      <div className="mt-10 text-center">
        <Link to="/gallery" className="btn-primary">View More</Link>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-restaurant-accent"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt} 
            className="max-w-full max-h-[85vh] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
