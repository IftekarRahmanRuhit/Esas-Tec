import Banner from "./components/Banner";
import Ourwork from "./components/Ourwork";
import Services from "./components/services";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Three.js Animation */}
      <Banner />

      {/* Development Process */}
      <Ourwork />

      {/* Services Section */}
      <Services />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Contact & CTA Section */}
      <ContactCTA />
    </div>
  );
}
