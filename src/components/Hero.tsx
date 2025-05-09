
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-restaurant-dark-brown bg-cover bg-center"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")'
      }}
    >
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in max-w-3xl mx-auto">
          <h4 className="text-restaurant-cream text-lg mb-2 tracking-widest uppercase">Welcome to</h4>
          <h1 className="heading-xl text-white mb-6">Saveur</h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience extraordinary flavors in an elegant atmosphere where tradition meets culinary innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className={cn("btn-primary")}>
              Explore Our Menu
            </a>
            <a href="#reservations" className={cn("btn-secondary", "bg-transparent text-white border-white hover:text-restaurant-dark-brown")}>
              Book a Table
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#menu" className="text-white opacity-75 hover:opacity-100">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
