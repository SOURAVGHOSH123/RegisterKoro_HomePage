import React from 'react';
import { Users, Award, Globe2, Building2 } from 'lucide-react';

const stats = [
  {
    number: '1M+',
    label: 'CUSTOMERS',
    icon: Users,
  },
  {
    number: '12+',
    label: 'YEARS OF EXCELLENCE',
    icon: Award,
  },
  {
    number: '78+',
    label: 'COUNTRIES',
    icon: Globe2,
  },
  {
    number: '3287+',
    label: 'PARTNERS',
    icon: Building2,
  },
];

const Stats = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Some Numbers are important
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;