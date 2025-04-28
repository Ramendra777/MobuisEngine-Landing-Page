import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-white text-primary max-w-[1500px] mx-auto">
      
      {/* Contact Blue Box */}
      <motion.div
        className="bg-primary text-white rounded-3xl flex items-center justify-between px-10 py-16 max-w-5xl mx-auto my-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Left Text */}
        <div className="text-left text-lg font-sora font-semibold">
          STILL HAVE<br />DOUBTS?
        </div>

        {/* Center Text */}
        <div className="text-4xl md:text-5xl font-sora font-bold text-center absolute left-1/2 transform -translate-x-1/2">
          Contact us
        </div>

        {/* Arrow Button */}
        <button className="w-12 h-12 rounded-full bg-white text-primary text-2xl flex items-center justify-center hover:bg-light transition">
          →
        </button>
      </motion.div>

      {/* Footer Top Part */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 px-8 py-12 max-w-6xl mx-auto text-center md:text-left">
        {/* Logo + Address */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src="/logo.svg" alt="MobuisEngine" className="w-36 hover:bg-primary hover:text-white transition border-primary" />
          <div className="text-p2 font-dm">
            <p className="font-bold">Address</p>
            <p>1875 Mission St Ste 103 #450<br />San Francisco, CA 94103</p>
          </div>
          <div className="text-p2 font-dm">
            <p className="font-bold">Email</p>
            <a href="mailto:finance@mobiusengine.ai" className="underline hover:text-secondary">
              finance@mobiusengine.ai
            </a>
          </div>
          <div className="text-p2 font-dm">
            <p className="font-bold">Telephone</p>
            <p>650-889-6026</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center gap-4">
          <p className="font-dm font-bold">Socials</p>
          <div className="flex gap-4">
            <a href="#" className="border-2 border-primary rounded-full p-2 hover:bg-primary hover:text-white transition">
              <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" className="border-2 border-primary rounded-full p-2 hover:bg-primary hover:text-white transition">
              <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-primary text-white py-6 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left text-p2 font-dm">
          {/* Left side copyright */}
          <p>© 2023 Mobiusservices LLC</p>

          {/* Right side links */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;