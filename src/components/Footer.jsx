const Footer = () => {
    return (
      <footer className="bg-secondary text-white py-8 text-center text-p2 font-dm">
        <div className="max-w-5xl mx-auto px-4">
          <p>© 2025 MobiusEngine.ai | All rights reserved</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="mailto:info@mobiusengine.ai" className="hover:underline">info@mobiusengine.ai</a>
            <a href="tel:+11234567890" className="hover:underline">+1 123 456 7890</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;