import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image with Enhanced Effects */}
      <div className="absolute inset-0 scale-105">
        <img
          className="w-full h-full object-cover transition-transform duration-[8s] ease-out hover:scale-110"
          src="https://res.cloudinary.com/dz1zt2xfc/image/upload/v1750142830/freepik__the-style-is-candid-image-photography-with-natural__73073_zb7gzu.png"
          alt="Beauty salon styling"
        />
      </div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-purple-900/40 to-pink-900/30 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10"></div>

      {/* Floating Decorative Elements - Responsive positioning */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-16 sm:top-32 right-10 sm:right-20 w-2 sm:w-3 h-2 sm:h-3 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
      <div className="absolute bottom-20 sm:bottom-40 left-10 sm:left-20 w-3 sm:w-4 h-3 sm:h-4 bg-orange-400 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute top-1/3 right-5 sm:right-10 w-1 h-1 bg-white rounded-full animate-ping opacity-30"></div>

      {/* Main Content */}
      <div className={`textPart absolute flex flex-col items-center justify-center inset-0 text-white z-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Premium Badge - Responsive */}
        <div className="inline-flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in-down">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
          ✨ Premium Beauty Experience
        </div>

        {/* Enhanced Main Heading - Responsive Typography */}
        <div className="text-center space-y-2 sm:space-y-4 mb-6 sm:mb-8">
          <p className="text-slate-200 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-medium max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2">
            Find & Book{" "}
            <span className="text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text font-semibold">
              Salons, Spas, and Stylists
            </span>{" "}
            Near You
          </p>
        </div>

        {/* Enhanced Search Bar - Fully Responsive */}
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl group">
          {/* Glow Effect */}
          <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl sm:rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
          
          {/* Search Container */}
          <div className="relative bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-2xl border border-white/20">
            
            {/* Mobile Layout (< 640px) */}
            <div className="sm:hidden">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    readOnly
                    onClick={() => navigate("/search")}
                    className="cursor-pointer flex-1 bg-transparent border-none outline-none text-gray-800 text-base placeholder-gray-500 py-3 px-2 font-medium transition-all duration-200 hover:text-gray-600"
                    placeholder="Search salons..."
                  />
                </div>
                <button 
                  onClick={() => navigate("/search")}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95 text-sm"
                >
                  Search Now
                </button>
              </div>
            </div>

            {/* Tablet and Desktop Layout (≥ 640px) */}
            <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
              {/* Search Icon */}
              <div className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl text-white shadow-lg">
                <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              {/* Input Field */}
              <input
                readOnly
                onClick={() => navigate("/search")}
                className="cursor-pointer flex-1 bg-transparent border-none outline-none text-gray-800 text-sm sm:text-base lg:text-lg placeholder-gray-500 py-3 sm:py-4 px-2 font-medium transition-all duration-200 hover:text-gray-600"
                placeholder="Search salon by city, service, or style..."
              />
              
              {/* Search Button */}
              <button 
                onClick={() => navigate("/search")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95 text-sm sm:text-base whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Popular Searches - Responsive Grid */}
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl mt-4 sm:mt-6">
          <div className="text-center mb-3">
            <span className="text-white/70 text-xs sm:text-sm font-medium">Popular Searches:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {['Hair Cut', 'Facial', 'Manicure', 'Hair Color', 'Massage'].map((term, index) => (
              <button
                key={term}
                onClick={() => navigate(`/search?q=${term}`)}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-xs sm:text-sm font-medium border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-200 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Particles - Responsive count */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(window.innerWidth < 640 ? 8 : window.innerWidth < 1024 ? 12 : 15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Custom CSS - Enhanced for responsiveness */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-6px) rotate(1deg);
          }
          50% {
            transform: translateY(-3px) rotate(-1deg);
          }
          75% {
            transform: translateY(-9px) rotate(0.5deg);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes gradient-reverse {
          0% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        
        .animate-gradient-reverse {
          background-size: 200% 200%;
          animation: gradient-reverse 4s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          .animate-float {
            animation-duration: 8s;
          }
        }

        /* Prevent horizontal scrolling on mobile */
        @media (max-width: 640px) {
          body {
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;