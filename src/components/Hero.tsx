import React from 'react';
import { Search, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-yellow-400 w-5 h-5" />
              <p className="text-sm">Google Rating</p>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your trusted partner<br />
              for compliance business needs
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              An online business compliance platform that helps entrepreneurs and other individuals with various registrations, tax filings, and other legal matters.
            </p>
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">4.5+</span>
                <span className="text-sm text-gray-600">Customer Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">20,000+</span>
                <span className="text-sm text-gray-600">Cases</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">99.8%</span>
                <span className="text-sm text-gray-600">Financial Stability</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
                Talk An Expert
              </button>
              <button className="flex items-center gap-2 text-blue-900 hover:text-blue-800">
                <span>See how it works</span>
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/src/assets/images/hero/business-illustration.jpg"
              alt="Business Illustration"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;