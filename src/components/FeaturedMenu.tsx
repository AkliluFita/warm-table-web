
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

type MenuCategory = 'starters' | 'mains' | 'desserts';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image?: string;
  featured?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: "truffle-risotto",
    name: "Truffle Infused Risotto",
    description: "Creamy Arborio rice infused with black truffle and topped with aged Parmesan",
    price: "$24",
    category: "starters",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    featured: true
  },
  {
    id: "beef-tenderloin",
    name: "Aged Beef Tenderloin",
    description: "28-day dry-aged beef tenderloin with red wine reduction and seasonal vegetables",
    price: "$42",
    category: "mains",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: true
  },
  {
    id: "chocolate-souffle",
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream and raspberry coulis",
    price: "$16",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1611329695518-1763fc1a4c85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    featured: true
  },
  {
    id: "scallops",
    name: "Pan-Seared Scallops",
    description: "Fresh scallops seared to perfection, served with pea purée and crispy pancetta",
    price: "$28",
    category: "starters",
    image: "https://images.unsplash.com/photo-1535140728325-a4d3707eee59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    featured: true
  },
  {
    id: "mushroom-soup",
    name: "Wild Mushroom Soup",
    description: "Velvety soup made with locally foraged mushrooms and white truffle oil",
    price: "$18",
    category: "starters"
  },
  {
    id: "rack-of-lamb",
    name: "Rack of Lamb",
    description: "Herb-crusted rack of lamb with rosemary jus and garlic mashed potatoes",
    price: "$38",
    category: "mains"
  },
];

const FeaturedMenu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('starters');

  const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  const featuredItems = menuItems.filter(item => item.featured);

  return (
    <section id="menu" className="section-container bg-restaurant-cream">
      <div className="text-center mb-16">
        <h4 className="uppercase tracking-widest text-restaurant-accent mb-2">Taste the excellence</h4>
        <h2 className="heading-lg text-restaurant-dark-brown mb-4">Our Seasonal Menu</h2>
        <p className="text-restaurant-medium-brown max-w-2xl mx-auto">
          Our menu changes with the seasons to bring you the freshest, locally-sourced ingredients prepared with passion and creativity.
        </p>
      </div>

      <div className="mb-12">
        <h3 className="heading-md text-restaurant-dark-brown mb-8 text-center">Chef's Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <Link 
              key={item.id} 
              to={`/menu/${item.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              {item.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-serif font-bold text-lg text-restaurant-dark-brown">{item.name}</h4>
                  <span className="text-restaurant-accent font-bold">{item.price}</span>
                </div>
                <p className="text-restaurant-medium-brown text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-restaurant-light-brown rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  activeCategory === category.id
                    ? "bg-white text-restaurant-dark-brown"
                    : "text-restaurant-dark-brown hover:bg-white/50"
                )}
                onClick={() => setActiveCategory(category.id as MenuCategory)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              to={`/menu/${item.id}`}
              className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              {item.image && (
                <div className="w-full md:w-1/4 mb-4 md:mb-0 md:mr-6 overflow-hidden rounded-md">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-32 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className={cn("flex-1", !item.image && "md:ml-0")}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-serif font-bold text-xl text-restaurant-dark-brown group-hover:text-restaurant-accent transition-colors">{item.name}</h4>
                  <span className="text-restaurant-accent font-bold">{item.price}</span>
                </div>
                <p className="text-restaurant-medium-brown">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#menu" className="btn-primary">View Full Menu</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
