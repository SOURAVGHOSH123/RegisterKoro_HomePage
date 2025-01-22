import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident.',
    author: {
      name: 'Chris',
      role: 'President and CEO, FreshMark, USA',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
  },
  {
    rating: 5,
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident.',
    author: {
      name: 'Chris',
      role: 'President and CEO, FreshMark, USA',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
  },
  {
    rating: 4,
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident.',
    author: {
      name: 'Chris',
      role: 'President and CEO, FreshMark, USA',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
  },
];

const faqs = [
  'Can I recover deleted files from desktop with this software?',
  'Can I recover deleted files from desktop with this software?',
  'Can I recover deleted files from desktop with this software?',
  'Can I recover deleted files from desktop with this software?',
  'Can I recover deleted files from desktop with this software?',
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">What people says about us</h2>
          <div className="flex gap-2">
            <button className="p-2 bg-blue-800 rounded-full hover:bg-blue-700">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="p-2 bg-blue-800 rounded-full hover:bg-blue-700">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-gray-900 p-6 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white text-gray-900 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Frequent Ask Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-50"
              >
                <span>{faq}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-2">
              Show more <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;