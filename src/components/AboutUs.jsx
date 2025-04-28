import { motion } from 'framer-motion';

const team = [
  {
    name: "Ashwin",
    description: `Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.\n\nAshwin’s vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.`,
    image: "/ashwin.png",
    linkedin: "#",
  },
  {
    name: "Nicole",
    description: `Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.\n\nWith a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.`,
    image: "/nicole.png",
    linkedin: "#",
  },
];

const AboutUs = () => {
  return (
    <section id="about-us" className="py-24 bg-gradient-to-b from-[#020024] via-[#02003a] to-[#0649E7] text-white max-w-[1500px] mx-auto">
      <motion.h2
        className="text-h2 font-sora text-center mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h2>

      <div className="flex flex-col items-center gap-24 px-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-4xl w-full justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image with LinkedIn Badge */}
            <div className="relative w-32 h-32 flex-shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-top object-cover border-2 border-white"
              />
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white/30 backdrop-blur-md border border-white flex items-center justify-center shadow-md">
                  <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-4 h-4" />
                </div>
              </a>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left font-dm text-p2 leading-relaxed">
              <p>
                <span className="font-bold">{member.name}</span> {member.description.split('\n\n').map((para, idx) => (
                  <span key={idx}>
                    <br /><br />{para}
                  </span>
                ))}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Links */}
      <div className="text-center mt-24 space-y-4 font-dm">
        <a href="#" className="underline text-p2 hover:text-light">Learn more about our Board of Advisors ↗</a><br />
        <a href="#" className="underline text-p2 hover:text-light">Follow us on our LinkedIn page ↗</a>
      </div>
    </section>
  );
};

export default AboutUs;