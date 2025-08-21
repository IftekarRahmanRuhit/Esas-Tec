import { Rocket, Eye } from 'lucide-react';

export default function OurMission() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Our Mission */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-blue-500/10 rounded-full">
                <Rocket className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
              To empower businesses of all sizes with innovative and intelligent digital solutions. 
              We strive to drive tangible growth, enhance operational efficiency, and create a 
              lasting, positive impact for our clients in the competitive global marketplace.
            </p>
          </div>

          {/* Our Vision */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-blue-500/10 rounded-full">
                <Eye className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Vision
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
              To be a globally recognized leader and pioneer in futuristic web technology. 
              We aim to be the most trusted partner for businesses seeking to not only 
              navigate but also master the complexities of the digital frontier.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
