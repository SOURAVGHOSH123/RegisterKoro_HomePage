import React from 'react';
import { Play, Lightbulb, Rocket, PlayIcon, PlaySquare } from 'lucide-react';

const VideoIntro = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-3">Our Video Introductions</h2>
            <p className="text-2  mb-6">Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Explore ideas together</h3>
                  <p className="text-blue-100">Bring your creative projects to life with actionable insights. Simply without integration.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bring those ideas to life</h3>
                  <p className="text-blue-100">Through authentic experience, you'll finally create actionable insights. Simply without integration.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img
              src="/src/assets/images/video/intro.jpg"
              alt="Video Introduction"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
                <Play className="w-8 h-8 text-blue-900 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;