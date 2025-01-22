import React from 'react';
import { Apple, Store as PlayStore } from 'lucide-react';

const MobileApp = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Manage Your Services by your Mobile Phone</h2>
            <p className="text-blue-100 mb-8">
              Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.open('https://apps.apple.com', '_blank')}
                className="flex items-center gap-2 bg-black px-6 py-3 rounded-lg hover:bg-gray-900 transition"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button
                onClick={() => window.open('https://play.google.com', '_blank')}
                className="flex items-center gap-2 bg-black px-6 py-3 rounded-lg hover:bg-gray-900 transition"
              >
                <PlayStore className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="/src/assets/images/app/mobile-app.jpg"
                alt="Mobile App Preview"
                className="rounded-lg shadow-xl"
              />
              {/* <img
                src="/src/assets/images/logos/logo.png"
                alt="RegisterKaro Logo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;