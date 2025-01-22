import React from 'react';
import { Menu, X, Search, Phone, Mail, Facebook, Twitter, Instagram, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:info@registerkaro.in" className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              www.registerkaro.in
            </a>
            <a href="tel:+918447746183" className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              +918447746183
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src="/src/assets/images/logos/logo.png" alt="RegisterKaro" className="h-10" />
                {/* <span className="ml-2 text-2xl font-bold text-blue-900">RegisterKaro</span> */}
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-900">Home</a>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-blue-900 flex items-center gap-1">
                  Our Services
                  <span className="text-xs">▼</span>
                </a>
              </div>
              <a href="#" className="text-gray-700 hover:text-blue-900">Blog</a>
              <a href="#" className="text-gray-700 hover:text-blue-900">Contact Us</a>
              <a href="#" className="text-gray-700 hover:text-blue-900">About us</a>
              <button className="flex items-center justify-center">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                Talk An Expert
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-900"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Home</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Our Services</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Blog</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Contact Us</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-900">About us</a>
                <button className="w-full text-left px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                  Talk An Expert
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;