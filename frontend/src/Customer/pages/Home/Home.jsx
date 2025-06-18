import React, { useEffect } from "react";
import { services } from "../../../Data/Services";
import HomeServiceCard from "../Home/HomeServiceCard";
import SalonList from "../Salon/SalonList";
import Banner from "../Home/Banner";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalons } from "../../../Redux/Salon/action";

const Home = () => {
  const { salon } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSalons());
  }, []);

  // Icon mapping for services
  const getServiceIcon = (serviceName) => {
    const iconMap = {
      "Hair Cut": "✂️",
      "Facial Treatment": "✨",
      "Manicure": "💅",
      "Pedicure": "🦶",
      "Massage Therapy": "💆",
      "Bridal Makeup": "👰",
      "Hair Coloring": "🎨",
      "Waxing": "🕯️",
      "Skin Whitening": "🌟",
      "Hair Straightening": "💇",
      "default": "💄"
    };
    
    // Try to find exact match first
    if (iconMap[serviceName]) {
      return iconMap[serviceName];
    }
    
    // Try partial matches
    const lowerServiceName = serviceName.toLowerCase();
    for (const [key, icon] of Object.entries(iconMap)) {
      if (key.toLowerCase().includes(lowerServiceName) || lowerServiceName.includes(key.toLowerCase())) {
        return icon;
      }
    }
    
    // Return default if no match found
    return iconMap["default"];
  };

  // Enhanced HomeServiceCard component with premium styling
  const EnhancedServiceCard = ({ item }) => {
    const serviceIcon = item.icon || getServiceIcon(item.name);
    
    return (
      <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        {/* Gradient background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 opacity-60"></div>
        
        {/* Content */}
        <div className="relative p-6 text-center">
          {/* Icon container with enhanced styling */}
          <div className="mx-auto mb-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-0.5 shadow-lg">
            <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
              <span className="text-3xl filter drop-shadow-sm">{serviceIcon}</span>
            </div>
          </div>
          
          {/* Service name */}
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
            {item.name}
          </h3>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-40"></div>
        
        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300"></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 z-10"></div>
        <Banner />
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-20 relative">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16 lg:space-y-0 lg:flex items-center gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-medium text-purple-800 mb-4">
                  ✨ Premium Beauty Services
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent leading-tight">
                  A fresh cut or a glow-up?
                </h1>
                <p className="text-xl text-gray-600 font-medium">We got you 💅</p>
                <p className="text-gray-500 leading-relaxed">
                  Discover premium beauty services tailored just for you. From cuts to colors, treatments to transformations.
                </p>
              </div>
              
              {/* Enhanced Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((item, index) => (
                  <EnhancedServiceCard key={item.id || index} item={item} />
                ))}
              </div>
            </div>

            {/* Right Gallery */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg rotate-12 opacity-80"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-60"></div>
                
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-white/50">
                  <div className="grid gap-4 grid-cols-2 grid-rows-12 h-[50vh] md:h-[80vh]">
                    <div className="row-span-7 group overflow-hidden rounded-2xl shadow-lg relative">
                      <img
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                        src="https://cdn.shopify.com/s/files/1/0255/2417/4922/files/High_skin_fade_haircut_1.png?v=1716640169"
                        alt="Beauty service 1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="row-span-5 group overflow-hidden rounded-2xl shadow-lg relative">
                      <img
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:-rotate-1"
                        src="https://images.pexels.com/photos/3331488/pexels-photo-3331488.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Beauty service 2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="row-span-7 group overflow-hidden rounded-2xl shadow-lg relative">
                      <img
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                        src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Beauty service 3"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="row-span-5 group overflow-hidden rounded-2xl shadow-lg relative">
                      <img
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:-rotate-1"
                        src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Beauty service 4"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salons Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-20 bg-white/50 backdrop-blur-sm relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600 to-pink-600"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-medium text-purple-800 mb-6">
              🏪 Discover Amazing Salons
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Your Favorite Salon
            </h2>
            <p className="text-2xl text-gray-600 font-medium mb-2">Just a Tap Away</p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Browse through our curated selection of premium salons and book your next appointment with ease.
            </p>
          </div>
          
          <div className="relative">
            <SalonList salons={salon.salons} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;