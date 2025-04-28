import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-dark to-primary text-white py-20 px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-sora font-bold mb-6">
        Land job interviews 10X faster
      </h1>
      <p className="text-lg mb-10">
        Get your resume professionally rewritten and optimized!
      </p>
      <button className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-200">
        Get Your Resume
      </button>
    </section>
  );
};

export default HeroSection;
