import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Us */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">About Styluno</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Welcome to <span className="text-pink-500 font-semibold">Styluno</span>, your one-stop destination for luxury salon services. Book appointments with ease and experience beauty at your fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {["Home", "Services", "Book Appointment", "About Us"].map((item, index) => (
              <li key={index}>
                <a href="/" className="hover:text-pink-400 transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-pink-500"></i> +91 9640590686
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-envelope text-pink-500"></i> styluno@salon.com
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-pink-500"></i> Hyderabad,India
            </li>
          </ul>
          <div className="mt-6 flex space-x-4 text-xl">
            {[
              { icon: "fab fa-facebook-f", href: "/" },
              { icon: "fab fa-twitter", href: "/" },
              { icon: "fab fa-instagram", href: "/" },
              { icon: "fab fa-linkedin-in", href: "/" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-pink-400 transition duration-300"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        &copy; 2025 <span className="text-white font-semibold">Styluno</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
