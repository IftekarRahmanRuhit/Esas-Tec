import Banner from './components/Banner';
import Ourwork from './components/Ourwork';
import Services from './components/services';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Three.js Animation */}
      <Banner />
      <Ourwork />
      {/* Services Section */}
      <Services />
    </div>
  );
}
