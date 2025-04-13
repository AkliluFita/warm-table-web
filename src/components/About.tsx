
const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h4 className="uppercase tracking-widest text-restaurant-accent mb-2">Our Story</h4>
          <h2 className="heading-lg text-restaurant-dark-brown mb-6">A Passion for Culinary Excellence</h2>
          <p className="text-restaurant-medium-brown mb-4">
            Founded in 2010, Saveur began with a simple vision: to create extraordinary dining experiences that celebrate the best seasonal ingredients and culinary traditions.
          </p>
          <p className="text-restaurant-medium-brown mb-6">
            Our restaurant has grown from a small neighborhood gem to an award-winning destination for food enthusiasts seeking authentic flavors and impeccable service. We believe that dining is not just about food—it's about creating memorable moments around the table.
          </p>
          <div className="flex items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" 
              alt="Chef Signature" 
              className="w-32 h-auto"
            />
            <div>
              <h4 className="font-serif font-bold text-restaurant-dark-brown">Michel Laurent</h4>
              <p className="text-restaurant-medium-brown">Executive Chef & Founder</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Restaurant interior" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
              alt="Food plate" 
              className="w-full h-48 object-cover rounded-lg mt-8"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Chef preparing food" 
              className="w-full h-64 md:h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="w-16 h-16 bg-restaurant-cream rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-restaurant-accent">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
          </div>
          <h3 className="heading-sm text-restaurant-dark-brown mb-3">Hours</h3>
          <p className="text-restaurant-medium-brown mb-2">Lunch: 11:30 AM - 2:30 PM</p>
          <p className="text-restaurant-medium-brown">Dinner: 5:30 PM - 10:00 PM</p>
          <p className="text-restaurant-medium-brown mt-2">Closed on Mondays</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="w-16 h-16 bg-restaurant-cream rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-restaurant-accent">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <h3 className="heading-sm text-restaurant-dark-brown mb-3">Location</h3>
          <p className="text-restaurant-medium-brown mb-2">123 Culinary Street</p>
          <p className="text-restaurant-medium-brown">Gourmet City, GC 12345</p>
          <p className="text-restaurant-medium-brown mt-2">Free parking available</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="w-16 h-16 bg-restaurant-cream rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-restaurant-accent">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <h3 className="heading-sm text-restaurant-dark-brown mb-3">Contact</h3>
          <p className="text-restaurant-medium-brown mb-2">Phone: (555) 123-4567</p>
          <p className="text-restaurant-medium-brown">Email: info@saveur.com</p>
          <p className="text-restaurant-medium-brown mt-2">For large parties, please call</p>
        </div>
      </div>
    </section>
  );
};

export default About;
