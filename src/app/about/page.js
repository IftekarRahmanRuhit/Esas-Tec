import AboutPageBanner from "../components/About_page/AboutPageBanner";
import OurGenesis from "../components/About_page/OurGenesis";
import OurMission from "../components/About_page/OurMission";
import Principles from "../components/About_page/Principles";
import Technologies from "../components/About_page/Technologies";
import WhyUss from "../components/About_page/WhyUs";
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
