import Banner from "./components/HomePageBanner/Banner";
import Ourwork from "./components/HomePageBanner/Ourwork";
import Services from "./components/HomePageBanner/services";
import Testimonials from "./components/HomePageBanner/Testimonials";
import ContactCTA from "./components/HomePageBanner/ContactCTA";

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
