import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">How do we do it?</h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-8">
        <div>
          <div className="bg-primary text-white rounded-full p-6 inline-block mb-4">1</div>
          <p>Upload Resume</p>
        </div>
        <div>
          <div className="bg-primary text-white rounded-full p-6 inline-block mb-4">2</div>
          <p>Resume Rewrite</p>
        </div>
        <div>
          <div className="bg-primary text-white rounded-full p-6 inline-block mb-4">3</div>
          <p>ATS Optimization</p>
        </div>
        <div>
          <div className="bg-primary text-white rounded-full p-6 inline-block mb-4">4</div>
          <p>Job Matching</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
