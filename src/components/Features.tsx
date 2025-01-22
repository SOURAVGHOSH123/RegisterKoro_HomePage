import React from 'react';
import { Shield, DollarSign, Award, Headphones, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Confident & Safe',
    description: 'All your private information is safe with us',
  },
  {
    icon: DollarSign,
    title: 'No Hidden Fee',
    description: 'Everything is put before you with no hidden charges or conditions',
  },
  {
    icon: Award,
    title: 'Guaranteed Satisfaction',
    description: 'We ensure that all our services meet your expectations',
  },
  {
    icon: Headphones,
    title: 'Expert CA/CS Assistance',
    description: 'Professional support from our expert team',
  },
  {
    icon: Lock,
    title: 'Confidential & Safe',
    description: 'All your private information is protected',
  },
];

const Features = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Register Karo</h2>
          <p className="text-gray-600">
            It is with consistent services and results that make the best deal with the people and that is what helps us to serve the business better.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 bg-gradient-to-br from-pink-100 to-blue-255 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;