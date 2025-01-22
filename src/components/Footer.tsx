import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'START A BUSINESS': [
      'Features',
      'Business Solutions',
      'Integrations',
      'Enterprise',
      'Growth Solutions',
    ],
    'GOVERNMENT REGISTRATION': [
      'Partners',
      'Community',
      'Developers',
      'App',
      'Blog',
    ],
    'COMPLIANCE & TAX': [
      'Channels',
      'Scale',
      'Watch the Demo',
      'Our Competition',
    ],
    'BIS & CDSCO': [
      'About Us',
      'News',
      'Leadership',
      'Media Kit',
    ],
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <p className="text-sm mb-4">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-500 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-orange-500">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={`${category}-${link}-${index}`}>
                    <a href="#" className="text-sm hover:text-orange-500 transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-sm">
          <p>© 2024 RegisterKaro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;