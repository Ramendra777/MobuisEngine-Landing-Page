import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white text-center max-w-[1500px] mx-auto">
      {/* Heading */}
      <motion.h2
        className="text-h2 font-sora text-primary mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        What our clients have to say
      </motion.h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-4 mb-16">
        {[1, 2, 3].map((_, index) => (
          <motion.div
            key={index}
            className="relative w-80 h-64 bg-white border border-primary rounded-3xl overflow-hidden hover:scale-105 transition duration-300 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Small White Top Part */}
            <div className="flex-1 bg-white"></div>

            {/* Big Blue Bottom Part */}
            <div className="flex-[2] bg-primary p-6 text-left relative">
              <p className="text-white font-dm text-p2">
                Holly is a <span className="font-bold">senior executive</span> who got over <span className="font-bold">10 job interviews</span> and an offer she accepted
              </p>

              {/* Small Arrow Button */}
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white flex justify-center items-center">
                <span className="text-primary text-xl">↗</span>
              </div>
            </div>

            {/* Play Button Overlapping */}
            <div className="absolute top-[28%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl shadow-md">
              ▶
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="flex gap-6 justify-center">
        <button className="border-2 border-primary text-primary font-semibold px-6 py-3 rounded-full text-[18px] hover:bg-primary hover:text-white transition duration-300">
          More customer testimonials ↗
        </button>
        <button className="bg-primary text-white font-semibold px-6 py-3 rounded-full text-[18px] hover:bg-secondary transition duration-300">
          Get Started →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;