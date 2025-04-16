
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type MenuCategory = 'breakfast' | 'lunch' | 'drinks' | 'desserts';

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
  // Breakfast Items
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    description: "Sourdough bread topped with mashed avocado, poached eggs, and chili flakes",
    price: "$16",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: "french-toast",
    name: "Brioche French Toast",
    description: "Classic brioche French toast with maple syrup and fresh berries",
    price: "$14",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  // Lunch Items
  {
    id: "truffle-risotto",
    name: "Truffle Infused Risotto",
    description: "Creamy Arborio rice infused with black truffle and topped with aged Parmesan",
    price: "$24",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    featured: true
  },
  {
    id: "beef-tenderloin",
    name: "Aged Beef Tenderloin",
    description: "28-day dry-aged beef tenderloin with red wine reduction",
    price: "$42",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: true
  },
  // Drinks
  {
    id: "espresso-martini",
    name: "Espresso Martini",
    description: "Fresh espresso, vodka, and coffee liqueur shaken to perfection",
    price: "$14",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1621267860478-add38148f940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: "passion-mojito",
    name: "Passion Fruit Mojito",
    description: "Fresh mint, lime, passion fruit, rum, and soda water",
    price: "$12",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  // Desserts
  {
    id: "chocolate-souffle",
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream",
    price: "$16",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1611329695518-1763fc1a4c85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    featured: true
  },
  {
    id: "creme-brulee",
    name: "Vanilla Crème Brûlée",
    description: "Classic French custard with caramelized sugar crust",
    price: "$12",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  }
];

const FeaturedMenu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('breakfast');

  const featuredItems = menuItems.filter(item => item.featured);

  return (
    <section id="menu" className="section-container bg-restaurant-cream">
      <div className="text-center mb-16">
        <h4 className="uppercase tracking-widest text-restaurant-accent mb-2">Our Menu</h4>
        <h2 className="heading-lg text-restaurant-dark-brown mb-4">Culinary Delights</h2>
        <p className="text-restaurant-medium-brown max-w-2xl mx-auto">
          Experience our carefully curated menu featuring fresh, seasonal ingredients and creative culinary combinations.
        </p>
      </div>

      <div className="mb-12">
        <h3 className="heading-md text-restaurant-dark-brown mb-8 text-center">Chef's Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <Link 
              key={item.id} 
              to={`/menu/${item.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
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
                  <h4 className="font-serif font-bold text-lg text-restaurant-dark-brown group-hover:text-restaurant-accent transition-colors">{item.name}</h4>
                  <span className="text-restaurant-accent font-bold">{item.price}</span>
                </div>
                <p className="text-restaurant-medium-brown text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Tabs defaultValue="breakfast" className="w-full">
        <TabsList className="flex justify-center mb-8 bg-restaurant-light-brown/50">
          <TabsTrigger 
            value="breakfast"
            className="data-[state=active]:bg-white data-[state=active]:text-restaurant-dark-brown"
          >
            Breakfast
          </TabsTrigger>
          <TabsTrigger 
            value="lunch"
            className="data-[state=active]:bg-white data-[state=active]:text-restaurant-dark-brown"
          >
            Lunch
          </TabsTrigger>
          <TabsTrigger 
            value="drinks"
            className="data-[state=active]:bg-white data-[state=active]:text-restaurant-dark-brown"
          >
            Drinks
          </TabsTrigger>
          <TabsTrigger 
            value="desserts"
            className="data-[state=active]:bg-white data-[state=active]:text-restaurant-dark-brown"
          >
            Desserts
          </TabsTrigger>
        </TabsList>

        {['breakfast', 'lunch', 'drinks', 'desserts'].map((category) => (
          <TabsContent 
            key={category} 
            value={category}
            className="space-y-6"
          >
            <div className="grid gap-6">
              {menuItems
                .filter(item => item.category === category)
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/menu/${item.id}`}
                    className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    {item.image && (
                      <div className="w-full md:w-1/4 mb-4 md:mb-0 md:mr-6 overflow-hidden rounded-md">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-48 md:h-32 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-serif font-bold text-xl text-restaurant-dark-brown group-hover:text-restaurant-accent transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-restaurant-accent font-bold">{item.price}</span>
                      </div>
                      <p className="text-restaurant-medium-brown">{item.description}</p>
                    </div>
                  </Link>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-10 text-center">
        <Link to="/menu" className="btn-primary">View Full Menu</Link>
      </div>
    </section>
  );
};

export default FeaturedMenu;
