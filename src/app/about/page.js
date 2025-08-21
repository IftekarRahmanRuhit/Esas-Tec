import AboutPageBanner from "../components/AboutPageBanner";
import OurGenesis from "../components/OurGenesis";
import OurMission from "../components/OurMission";
import Principles from "../components/Principles";

export default function About() {
  return (
    <div className="min-h-screen">
     <AboutPageBanner />
     <OurGenesis />
     <OurMission />
     <Principles />
    </div>
  );
}
