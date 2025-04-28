import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroWithNavbar = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]); // Parallax move

  return (
    <header ref={ref} className="relative min-h-screen bg-gradient-to-br from-[#D6D6F2] to-[#0649E7] overflow-hidden max-w-[1500px] mx-auto">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-20 py-6 text-white font-dm text-p1">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="MobiusEngine Logo" className="h-8 w-auto" />
          <span className="text-white font-bold text-xl">MobiusEngine</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-light">Home</a>
          <a href="#about" className="hover:text-light">About Us</a>
          <a href="#plans" className="hover:text-light">Plans</a>
          <a href="#testimonials" className="hover:text-light">Testimonials</a>
          <a href="#privacy" className="hover:text-light">Privacy Policy</a>
          <button className="hover:text-light">More ▼</button>
        </div>
        <a href="#get-started" className="ml-4">
          <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full text-[20px] hover:bg-light hover:scale-105 backdrop-blur-sm transition duration-300">
            Get Started →
          </button>
        </a>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 pt-10 md:pt-20 relative">
        
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="font-sora text-white text-5xl md:text-[80px] leading-tight mb-6">
            Land job interviews <br />
            <span className="text-primary-light">10x faster</span>
          </h1>

          <p className="font-dm text-white text-lg md:text-p1 mb-8">
            Custom-built resumes that match your goals, keywords, and recruiter expectations.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white text-primary font-semibold px-8 py-4 rounded-full text-[20px] hover:bg-light backdrop-blur-sm transition duration-300"
          >
            Get Started →
          </motion.button>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          style={{ y }}
          className="flex-1 relative flex flex-col items-center justify-center mt-12 md:mt-0"
        >
          {/* Ebook Main Image */}
          <img
            src="/ebook-main.png"
            alt="Hiring Trends 2024/2025"
            className="w-72 md:w-96 object-contain relative"
          />

          {/* Download Icon pinned bottom right */}
          <div className="absolute -bottom-8 right-0 flex flex-col items-center">
            {/* Circle with Ebook Icon */}
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-lg border border-white flex justify-center items-center shadow-md">
              <img src="/ebook-icon.svg" alt="Download Ebook" className="w-8 h-8" />
            </div>
            {/* Download Text Link */}
            <a href="/ebook-main.png" download className="mt-2 text-white font-dm underline text-p2 hover:text-light">
              Download Free E-Book
            </a>
          </div>

        </motion.div>

      </div>
    </header>
  );
};

export default HeroWithNavbar;