import AboutPageBanner from "../components/AboutPageComponents/AboutPageBanner";
import OurGenesis from "../components/AboutPageComponents/OurGenesis";
import OurMission from "../components/AboutPageComponents/OurMission";
import Principles from "../components/AboutPageComponents/Principles";
import Technologies from "../components/AboutPageComponents/Technologies";
import WhyUss from "../components/AboutPageComponents/WhyUs";
export default function About() {
  return (
    <div className="min-h-screen">
     <AboutPageBanner />
     <OurGenesis />
     <OurMission />
     <Principles />
     <Technologies />
     <WhyUss />
    </div>
  );
}
