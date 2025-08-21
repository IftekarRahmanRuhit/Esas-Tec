import { Lightbulb, Handshake, Users, Award } from 'lucide-react';

export default function Principles() {
  const principles = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that are ahead of the curve."
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "Our business is built on a foundation of honesty, transparency, and unwavering trust with our clients."
    },
    {
      icon: Users,
      title: "Client-Centricity",
      description: "Our clients are our partners. We are dedicated to their success, treating their goals as our own."
    },
    {
      icon: Award,
      title: "Quality & Excellence",
      description: "We are committed to the highest standards of excellence, ensuring pixel-perfect design and flawless code."
    }
  ];

  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Principles That Guide Us
          </h2>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-blue-400/20 rounded-lg p-8 text-center hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer hover:bg-slate-800/70 hover:shadow-lg hover:shadow-blue-400/10"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-500/10 rounded-full">
                  <principle.icon className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
