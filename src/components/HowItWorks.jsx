import { motion } from 'framer-motion';

const steps = [
  { number: "1", title: "Submit Intake Form" },
  { number: "2", title: "We do the search and curation for list of jobs" },
  { number: "3", title: "You approve, we do the tedious part (applying)" },
  { number: "4", title: "You get the interviews" },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white text-center max-w-[1500px] mx-auto">
      <motion.h2
        className="text-h2 font-sora text-primary mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        How we work?
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-12 px-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center w-64 font-dm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Circle with number */}
            <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center text-2xl text-dark mb-4">
              {step.number}
            </div>

            {/* Horizontal Line */}
            <div className="w-24 h-px bg-primary mb-4"></div>

            {/* Step Title */}
            <p className="text-primary text-p1 text-center">{step.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;