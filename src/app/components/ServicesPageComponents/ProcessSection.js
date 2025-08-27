'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Palette, Code, TestTube, Rocket, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const processSteps = [
    {
      icon: Search,
      title: "Discovery & Research",
      description: "We begin by understanding your business goals, target audience, and technical requirements through comprehensive research and stakeholder interviews.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Strategy & Planning",
      description: "Our team develops a strategic roadmap, defining project scope, timelines, and technical architecture to ensure successful delivery.",
      gradient: "from-cyan-400 to-teal-500"
    },
    {
      icon: Palette,
      title: "Design & Prototyping",
      description: "We create intuitive user interfaces and interactive prototypes, ensuring the design aligns with your brand and user experience goals.",
      gradient: "from-teal-400 to-green-500"
    },
    {
      icon: Code,
      title: "Development & Coding",
      description: "Our expert developers build your solution using modern technologies, following best practices and maintaining code quality throughout.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: TestTube,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing across multiple devices and browsers ensures your solution is bug-free, secure, and performs optimally.",
      gradient: "from-emerald-400 to-yellow-500"
    },
    {
      icon: Rocket,
      title: "Deployment & Launch",
      description: "We handle the deployment process, ensuring smooth launch and providing ongoing support to maintain your digital solution.",
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-full px-8 py-4 mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
              Our Development Process
            </p>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
            Proven{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Methodology
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Our systematic approach ensures every project is delivered on time, within budget, and exceeds expectations through transparent communication and iterative development.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Enhanced Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-600 h-full hidden lg:block">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse"></div>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}>
                  <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 rounded-3xl p-10 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 overflow-hidden">
                    {/* Background Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    {/* Step Badge */}
                    <div className={`relative inline-flex items-center gap-3 bg-gradient-to-r ${step.gradient} text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg`}>
                      <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="uppercase tracking-wider">{step.title}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="relative text-slate-300 leading-relaxed text-lg">
                      {step.description}
                    </p>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>

                {/* Enhanced Step Icon */}
                <div className="relative z-10">
                  <div className={`relative w-24 h-24 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center shadow-2xl border-4 border-slate-950 group-hover:scale-110 transition-all duration-500`}>
                    <step.icon className="w-12 h-12 text-white" />
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  </div>
                  {/* Connection Line */}
                  <div className={`absolute top-1/2 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-6 h-0.5 bg-gradient-to-r ${index % 2 === 0 ? 'from-cyan-400 to-transparent' : 'from-transparent to-cyan-400'} hidden lg:block`}></div>
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 max-w-3xl mx-auto overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                  Get Started
                </p>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Vision?
              </h3>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Let&apos;s discuss your project requirements and kickstart the development process with our proven methodology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://www.facebook.com/profile.php?id=61579740698712" target="_blank" rel="noopener noreferrer" className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3">
                  Start Your Project
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61579740698712" target="_blank" rel="noopener noreferrer" className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:bg-cyan-400 hover:text-slate-900">
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
