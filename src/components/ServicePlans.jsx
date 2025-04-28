import { motion } from 'framer-motion';

const plans = [
  {
    title: "April Promo",
    price: "$35/week",
    features: [
      "Curated jobs from 1M+ listings, refreshed every 48 hours",
      "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
      "Need more? Add extra apps for just $1.5 each",
      "Your own dedicated application analyst",
      "Personalized with up to 10 filters & 5 job titles",
    ],
    isPopular: false,
  },
  {
    title: "Starter",
    price: "$50/week",
    features: [
      "All the perks of the Promo Plan, plus:",
      "Resume review & story-focused feedback",
      "Dedicated search specialist",
      "Up to 50 job apps/week",
      "Extra apps at $1.5 each",
      "Analyst support within 6 hours (SLA/PST hours)",
    ],
    isPopular: true,
  },
  {
    title: "Plus",
    price: "$100/week",
    features: [
      "Everything in Starter, with more muscle:",
      "Up to 75 apps/week",
      "Apply to 15 job titles",
      "Analyst + full application team on Pacific hours",
    ],
    isPopular: false,
  },
];

const ServicePlans = () => {
  return (
    <section id="service-plans" className="py-20 bg-white max-w-[1500px] mx-auto text-center">
      {/* Heading */}
      <motion.h2
        className="text-h2 font-sora text-primary mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Job Application Service Plans
      </motion.h2>

      {/* Plans Grid */}
      <div className="flex flex-wrap justify-center gap-8 mb-16 px-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="w-80 border border-primary rounded-2xl p-8 relative flex flex-col justify-between hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Popular Badge */}
            {plan.isPopular && (
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                Popular
              </div>
            )}

            {/* Title and Price */}
            <div>
              <h3 className="text-primary font-sora text-xl mb-4">{plan.title}</h3>
              <p className="text-primary font-sora text-3xl font-bold mb-6">{plan.price}</p>

              {/* Features List */}
              <ul className="space-y-3 text-left text-p2 font-dm text-primary">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-500 text-xl">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <button className="mt-8 bg-primary text-white font-semibold px-6 py-3 rounded-full text-[18px] hover:bg-secondary transition duration-300">
              Get Started →
            </button>
          </motion.div>
        ))}
      </div>

      {/* Advance Card */}
      <motion.div
        className="mx-4 md:mx-auto bg-primary text-white rounded-3xl p-12 flex flex-col md:flex-row justify-between items-center max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Left Part */}
        <div className="flex flex-col text-left space-y-4 mb-8 md:mb-0">
          <h4 className="text-xl font-sora font-bold">Advance</h4>
          <p className="font-dm text-p2">Top-tier support for serious job hunters:</p>
          <ul className="flex flex-wrap gap-4 mt-4">
            <li className="flex items-center gap-2"><span className="text-green-300">✔</span> Everything in Plus</li>
            <li className="flex items-center gap-2"><span className="text-green-300">✔</span> Custom Resumes & Cover Letters</li>
            <li className="flex items-center gap-2"><span className="text-green-300">✔</span> 20 fully customized applications/week</li>
            <li className="flex items-center gap-2"><span className="text-green-300">✔</span> Help with complex job searches</li>
            <li className="flex items-center gap-2"><span className="text-green-300">✔</span> Access to senior resume experts, Founder & Exec Coaches</li>
          </ul>
        </div>

        {/* Right Price & Button */}
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold font-sora mb-4">$150/week</p>
          <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full text-[18px] hover:bg-light transition duration-300">
            Get Started →
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicePlans;