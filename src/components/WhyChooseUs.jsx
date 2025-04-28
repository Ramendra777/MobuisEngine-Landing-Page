import { motion } from 'framer-motion';

const cards = [
  {
    icon: "/handshake-icon.svg", // Put icons in public folder
    title: "Tried, Tested, Trusted",
    description: "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.",
  },
  {
    icon: "/user-icon.svg",
    title: "Real People, Real Help",
    description: "A hands–on team that actually cares — guiding you through every twist in your career path.",
  },
  {
    icon: "/star-icon.svg",
    title: "Beat the Line",
    description: "We search, shortlist, and apply for you, so your name shows up first — every single day.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-[#EBF1FF] text-center max-w-[1500px] mx-auto">
      {/* Heading */}
      <motion.h2
        className="text-h2 font-sora text-primary mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Why Choose Us?
      </motion.h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-transparent border border-primary rounded-2xl p-8 w-80 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <img src={card.icon} alt={card.title} className="w-10 h-10 mb-6" />

            {/* Title */}
            <h3 className="text-primary font-sora text-lg font-semibold mb-4">
              {card.title}
            </h3>

            {/* Description */}
            <p className="font-dm text-primary text-p2 leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;