import AboutPageBanner from "../components/AboutPageComponents/AboutPageBanner";
import OurGenesis from "../components/AboutPageComponents/OurGenesis";
import OurMission from "../components/AboutPageComponents/OurMission";
import Principles from "../components/AboutPageComponents/Principles";
import Technologies from "../components/AboutPageComponents/Technologies";
import WhyUss from "../components/AboutPageComponents/WhyUs";

export const metadata = {
  title: "Esas Tec | About",
  description: "Learn about Esas Tec's journey, mission, and the innovative technologies we use to deliver exceptional digital solutions.",
};

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
