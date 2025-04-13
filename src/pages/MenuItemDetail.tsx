
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Tag, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

// This would ideally come from an API or database
const menuItemsData = [
  {
    id: "truffle-risotto",
    name: "Truffle Infused Risotto",
    description: "Creamy Arborio rice infused with black truffle and topped with aged Parmesan",
    fullDescription: "Our signature risotto is made with premium Arborio rice, slowly cooked to perfection with white wine and rich vegetable broth. Infused with aromatic black truffle and finished with aged Parmesan cheese, this dish represents the height of Italian culinary tradition with a modern twist.",
    price: "$24",
    category: "starters",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    featured: true,
    prepTime: "25 minutes",
    servingSize: "1-2 people",
    ingredients: ["Arborio rice", "Black truffle", "Aged Parmesan", "White wine", "Vegetable broth", "Shallots", "Butter", "Olive oil", "Salt and pepper"],
    dietaryInfo: ["Vegetarian", "Gluten-free"],
    chefNote: "The secret to perfect risotto is patience - add the broth slowly and stir constantly for the creamiest texture."
  },
  {
    id: "beef-tenderloin",
    name: "Aged Beef Tenderloin",
    description: "28-day dry-aged beef tenderloin with red wine reduction and seasonal vegetables",
    fullDescription: "Our premium beef tenderloin is dry-aged for 28 days to concentrate its flavor and ensure exceptional tenderness. Cooked to your preference and served with a rich red wine reduction, roasted seasonal vegetables, and truffle-infused mashed potatoes. A true celebration of exceptional ingredients treated with respect.",
    price: "$42",
    category: "mains",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: true,
    prepTime: "35 minutes",
    servingSize: "1 person",
    ingredients: ["28-day dry-aged beef tenderloin", "Red wine", "Beef stock", "Seasonal vegetables", "Truffle", "Potatoes", "Butter", "Herbs", "Salt and pepper"],
    dietaryInfo: ["Gluten-free"],
    chefNote: "For the perfect medium-rare, we recommend an internal temperature of 130-135°F."
  },
  {
    id: "chocolate-souffle",
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream and raspberry coulis",
    fullDescription: "Our delicate chocolate soufflé is made with premium dark chocolate and served piping hot, creating a perfect contrast with the cold vanilla bean ice cream. The raspberry coulis adds a touch of acidity that complements the rich chocolate. This dessert is made to order and requires a 20-minute preparation time.",
    price: "$16",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1611329695518-1763fc1a4c85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    featured: true,
    prepTime: "20 minutes",
    servingSize: "1 person",
    ingredients: ["Dark chocolate", "Eggs", "Butter", "Sugar", "Flour", "Vanilla beans", "Cream", "Raspberries"],
    dietaryInfo: ["Vegetarian", "Contains gluten, dairy, and eggs"],
    chefNote: "The perfect soufflé must be served immediately - that's why we prepare each one fresh to order."
  },
  {
    id: "scallops",
    name: "Pan-Seared Scallops",
    description: "Fresh scallops seared to perfection, served with pea purée and crispy pancetta",
    fullDescription: "Our hand-selected scallops are pan-seared to achieve a golden crust while maintaining a tender, sweet interior. Served on a bed of vibrant pea purée and garnished with crispy pancetta, this starter showcases the delicate flavor of premium seafood enhanced by complementary ingredients.",
    price: "$28",
    category: "starters",
    image: "https://images.unsplash.com/photo-1535140728325-a4d3707eee59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    featured: true,
    prepTime: "15 minutes",
    servingSize: "1 person",
    ingredients: ["Fresh sea scallops", "Pancetta", "Fresh peas", "Butter", "Lemon", "Microgreens", "Salt and pepper"],
    dietaryInfo: ["Contains dairy"],
    chefNote: "The key to perfect scallops is a very hot pan and minimal handling - we sear them for just 2 minutes per side."
  }
];

const MenuItemDetail = () => {
  const { itemId } = useParams();
  const menuItem = menuItemsData.find(item => item.id === itemId);
  
  if (!menuItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="heading-lg text-restaurant-dark-brown mb-4">Menu Item Not Found</h2>
            <p className="text-restaurant-medium-brown mb-6">The menu item you're looking for doesn't exist or has been removed.</p>
            <Link to="/#menu" className="btn-primary">Return to Menu</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero image section */}
        <div 
          className="h-[40vh] lg:h-[50vh] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${menuItem.image})` }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-end">
            <div className="container mx-auto px-4 py-8">
              <Link to="/#menu" className="inline-flex items-center text-white mb-4 hover:text-restaurant-cream transition-colors">
                <ArrowLeft className="mr-2" size={16} />
                Back to menu
              </Link>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h4 className="text-restaurant-accent text-sm uppercase tracking-wider">{menuItem.category}</h4>
                <h1 className="heading-lg text-restaurant-dark-brown">{menuItem.name}</h1>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-2xl font-serif text-restaurant-accent font-bold">{menuItem.price}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center">
                <Clock size={20} className="text-restaurant-accent mr-2" />
                <div>
                  <h4 className="font-medium text-restaurant-dark-brown">Prep Time</h4>
                  <p className="text-restaurant-medium-brown">{menuItem.prepTime}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users size={20} className="text-restaurant-accent mr-2" />
                <div>
                  <h4 className="font-medium text-restaurant-dark-brown">Serving</h4>
                  <p className="text-restaurant-medium-brown">{menuItem.servingSize}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Tag size={20} className="text-restaurant-accent mr-2" />
                <div>
                  <h4 className="font-medium text-restaurant-dark-brown">Dietary</h4>
                  <p className="text-restaurant-medium-brown">{menuItem.dietaryInfo.join(", ")}</p>
                </div>
              </div>
            </div>
            
            <div className="prose max-w-none mb-12">
              <h2 className="heading-sm text-restaurant-dark-brown mb-4">Description</h2>
              <p className="text-restaurant-medium-brown mb-8">{menuItem.fullDescription}</p>
              
              <h2 className="heading-sm text-restaurant-dark-brown mb-4">Ingredients</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                {menuItem.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-restaurant-medium-brown">{ingredient}</li>
                ))}
              </ul>
              
              <div className="bg-restaurant-cream p-6 rounded-lg border border-restaurant-light-brown">
                <div className="flex items-center mb-2">
                  <Award size={20} className="text-restaurant-accent mr-2" />
                  <h3 className="font-serif font-bold text-restaurant-dark-brown">Chef's Note</h3>
                </div>
                <p className="text-restaurant-medium-brown italic">{menuItem.chefNote}</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/#reservations" className="btn-primary">Book a Table</Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MenuItemDetail;
