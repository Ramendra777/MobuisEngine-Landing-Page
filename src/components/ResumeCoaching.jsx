import { motion } from 'framer-motion';

const plans = [
  {
    title: "Resume Rebuild",
    price: "$1000",
    description: "Crafted for senior to VP-level professionals ready for their next big step.",
    features: [
      "3× 30–min coaching",
      "Focused on storytelling, not just formatting",
      "Analyst + full application team on Pacific hours",
      "Tailored to your target industry, company, or role",
      "Direct work with our co-founder (ex–Google, JP Morgan)",
      "Executive coaching from UC Berkeley alum with 10+ yrs experience",
      "Resume Rebuild portfolio available upon request",
    ],
  },
  {
    title: "Interview Prep",
    price: "$500",
    description: "Two sessions to sharpen your story, confidence, and clarity — fast.",
    features: [
      "2× 45–min live coaching with our co-founder",
      "Real-time, practical feedback",
      "Build clarity, empathy & executive presence",
      "For senior and leadership roles — technical & non-technical",
    ],
  },
];

const ResumeCoaching = () => {
  return (
    <section id="resume-coaching" className="py-20 bg-white text-center max-w-[1500px] mx-auto">
      {/* Heading */}
      <motion.h2
        className="text-h2 font-sora text-primary mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Resume Building & Coaching
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="font-dm text-primary text-p2 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Let’s talk about where you’re headed — and how your resume can get you there.{" "}
        <a href="#" className="underline text-primary hover:text-secondary font-bold">Schedule a call to get started</a>.
      </motion.p>

      {/* Plans */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="w-80 border border-primary rounded-2xl p-8 flex flex-col justify-between hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Title & Description */}
            <div className="flex flex-col items-start text-left mb-6">
              <h3 className="text-primary font-sora text-xl mb-2">{plan.title}</h3>
              <p className="font-dm text-primary text-p2">{plan.description}</p>
            </div>

            {/* Price */}
            <div className="text-primary font-sora text-3xl font-bold mb-6">
              {plan.price} <span className="text-p2 font-normal text-lg">one time</span>
            </div>

            <hr className="border-gray-300 mb-6" />

            {/* Features */}
            <ul className="space-y-3 text-left font-dm text-p2 text-primary">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-8 bg-primary text-white font-semibold px-6 py-3 rounded-full text-[18px] hover:bg-secondary transition duration-300">
              Get Started →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResumeCoaching;