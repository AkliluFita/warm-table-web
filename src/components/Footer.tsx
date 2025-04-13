
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-restaurant-dark-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#home" className="font-serif text-2xl font-bold mb-4 block">Saveur</a>
            <p className="text-gray-400 mb-4">
              A fine dining experience where every dish tells a story and every visit becomes a cherished memory.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-restaurant-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-restaurant-accent">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-restaurant-accent">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Culinary Street</li>
              <li>Gourmet City, GC 12345</li>
              <li>(555) 123-4567</li>
              <li>info@saveur.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday: Closed</li>
              <li>Tuesday - Thursday: 11:30 AM - 10:00 PM</li>
              <li>Friday - Saturday: 11:30 AM - 11:00 PM</li>
              <li>Sunday: 11:30 AM - 9:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-restaurant-accent">Home</a></li>
              <li><a href="#menu" className="hover:text-restaurant-accent">Menu</a></li>
              <li><a href="#about" className="hover:text-restaurant-accent">About</a></li>
              <li><a href="#gallery" className="hover:text-restaurant-accent">Gallery</a></li>
              <li><a href="#reservations" className="hover:text-restaurant-accent">Reservations</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Saveur Restaurant. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-restaurant-accent text-sm mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-restaurant-accent text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
