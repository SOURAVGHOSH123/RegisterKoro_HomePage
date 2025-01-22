import React from 'react';

const clients = [
  'src/assets/images/blog/client1.png',
  '/blog/client2.png',
  'src/assets/images/blog/client1.png',
  'src/assets/images/blog/client2.png',
  'src/assets/images/blog/client1.png',
  'src/assets/images/blog/client2.png',
];

const ProcessSteps = () => {
  const steps = [
    { icon: '📝', title: 'Fill up Application Form' },
    { icon: '💳', title: 'Make Online Payment' },
    { icon: '👥', title: 'Executive will Process Application' },
    { icon: '📧', title: 'Get Confirm Mail' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-12 bg-orange-500 py-4 rounded-lg">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center gap-2 text-white px-4">
          <span className="text-2xl">{step.icon}</span>
          <span className="font-medium">{step.title}</span>
          {index < steps.length - 1 && (
            <span className="ml-4 text-white/50">→</span>
          )}
        </div>
      ))}
    </div>
  );
};

const HappyClients = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Happy Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-12">
          {[...Array(18)].map((_, index) => (
            <div key={index} className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-sm">Logo {index + 1}</div>
            </div>
          ))}
        </div>
        <ProcessSteps />
      </div>
    </section>
  );
};

export default HappyClients;