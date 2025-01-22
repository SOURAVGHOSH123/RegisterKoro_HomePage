import React from 'react';

const About = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-2">About <span className="text-orange-500">Register Karo</span></h2>
            <p className="text-gray-600 mb-6">
              We have been using RegisterKaro as our DevOps vendor for our SaaS service applications over the last couple of years and I'm extremely pleased with their performance, ability to execute, and willingness to adapt to our ever-changing environment. They're a consistent vendor with a practical about customer satisfaction. We've built a solid team that has successfully delivered on projects forecasting upcoming opportunities.
            </p>
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
              Learn More
            </button>
          </div>
          <div className="lg:w-1/2">
            <img
              src="\src\assets\about\team_meeting.png"
              alt="Team"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;