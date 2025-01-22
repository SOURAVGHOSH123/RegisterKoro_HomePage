import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    image: '/src/assets/images/blog/startup.jpg',
    title: 'Small Business & Startup',
    link: 'https://www.registerkaro.in/post/the-companies-act-2013-section-138-internal-audit',
    date: 'Jan 2023',
    categories: ['Management'],
    description: 'Get to know the secrets of transforming your business into a digital-first organization.',
  },
  {
    image: '/src/assets/images/blog/scale-up.jpg',
    title: 'Scale-Up Company Offer',
    link: 'https://www.registerkaro.in/post/the-companies-act-2013-section-138-internal-audit',
    date: 'Jan 2023',
    categories: ['Research', 'Enterprise'],
    description: 'Mental models and simple explanations of complex concepts and relationships.',
  },
  {
    image: '/src/assets/images/blog/growth.jpg',
    title: 'Growing Business Package',
    link: 'https://www.registerkaro.in/post/the-companies-act-2013-section-138-internal-audit',
    date: 'Jan 2023',
    categories: ['Audit', 'Digital'],
    description: 'Introduction to transforming your business. Learn the basics of digital transformation.',
  },
  {
    image: '/src/assets/images/blog/scale-up.jpg',
    title: 'Growing Business Package',
    link: 'https://www.registerkaro.in/post/the-companies-act-2013-section-138-internal-audit',
    date: 'Jan 2023',
    categories: ['Audit', 'Digital'],
    description: 'Introduction to transforming your business. Learn the basics of digital transformation.',
  },
  {
    image: '/src/assets/images/blog/startup.jpg',
    title: 'Growing Business Package',
    link: 'https://www.registerkaro.in/post/the-companies-act-2013-section-138-internal-audit',
    date: 'Jan 2023',
    categories: ['Audit', 'Digital'],
    description: 'Introduction to transforming your business. Learn the basics of digital transformation.',
  },
  {
    image: '/src/assets/images/blog/growth.jpg',
    title: 'Growing Business Package',
    link: 'https://www.registerkaro.in/post/the-companies-act-2013-section-138-internal-audit',
    date: 'Jan 2023',
    categories: ['Audit', 'Digital'],
    description: 'Introduction to transforming your business. Learn the basics of digital transformation.',
  },
];

const DigitalTransformation = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Accelerate Digital Transformation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                </div>
                <a href={post.link}><h3 className="text-xl font-semibold mb-2">{post.title}</h3></a>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category, idx) => (
                    <span key={idx} className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
            Show more blogs <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;