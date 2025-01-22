import React from 'react';
import { Building2, FileText, Home, Calculator, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Company Formation',
    description: 'Build web-based solutions that enhance customer experience',
  },
  {
    icon: FileText,
    title: 'Company Secretarial Services',
    description: 'Make data-driven decisions and utilize technology to reach business goals',
  },
  {
    icon: Home,
    title: 'Virtual Office Address',
    description: 'Foster customer relationships by effectively serving your market',
  },
  {
    icon: Calculator,
    title: 'Annual Compliance Services',
    description: 'Turn your ideas into modern products with our design experts',
  },
  {
    icon: BookOpen,
    title: 'Payroll Services',
    description: 'Expand your business across the globe with minimal effort',
  },
  {
    icon: BookOpen,
    title: 'Bookkeeping Services',
    description: 'Steering user behaviours with creative design, data insight & technology',
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
            See All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;