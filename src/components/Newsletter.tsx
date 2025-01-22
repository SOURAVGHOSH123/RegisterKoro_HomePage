import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Welcome to your new digital reality. Now.
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </div>
        </form>
        {isSubmitted && (
          <div className="mt-4 flex items-center justify-center gap-2 text-white">
            <CheckCircle className="w-5 h-5" />
            <span>Thank you for subscribing!</span>
          </div>
        )}
        <div className="flex justify-center gap-8 mt-8">
          <div className="flex items-center gap-2 text-white">
            <CheckCircle className="w-5 h-5" />
            <span>Instant results</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <CheckCircle className="w-5 h-5" />
            <span>User-friendly interface</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <CheckCircle className="w-5 h-5" />
            <span>Personalized customization</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;