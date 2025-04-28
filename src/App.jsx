import HeroWithNavbar from './components/HeroWithNavbar';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import ServicePlans from './components/ServicePlans';
import ResumeCoaching from './components/ResumeCoaching';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="max-w-[1500px] mx-auto overflow-hidden">
      <HeroWithNavbar />
      <HowItWorks />
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
      <ServicePlans />
      <ResumeCoaching />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;