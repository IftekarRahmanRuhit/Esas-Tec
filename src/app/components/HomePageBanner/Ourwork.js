'use client';

import { motion } from 'framer-motion';

export default function Ourwork() {
  const processSteps = [
    {
      id: 1,
      title: "Requirements Gathering",
      description: "We dive deep into your business needs, technical requirements, and user expectations to create a solid foundation for your project.",
      icon: "🔍",
      position: "top-right"
    },
    {
      id: 2,
      title: "Architecture Planning",
      description: "Our technical architects design scalable solutions, choose optimal tech stacks, and create detailed project roadmaps with clear milestones.",
      icon: "🏗️",
      position: "top-left"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "We craft intuitive user interfaces and seamless user experiences through wireframes, mockups, and interactive prototypes.",
      icon: "🎨",
      position: "middle-right"
    },
    {
      id: 4,
      title: "Agile Development",
      description: "Our development team builds your solution using modern frameworks, clean code practices, and continuous integration workflows.",
      icon: "💻",
      position: "middle-left"
    },
    {
      id: 5,
      title: "Quality Assurance",
      description: "Comprehensive testing across multiple environments ensures your application is robust, secure, and performs flawlessly.",
      icon: "🔧",
      position: "bottom-right"
    },
    {
      id: 6,
      title: "Launch & Maintenance",
      description: "We handle deployment, monitoring, and provide ongoing support to keep your application running smoothly and efficiently.",
      icon: "🚀",
      position: "bottom-left"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-4">
            Our Development Methodology
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Building Digital Excellence
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            We follow a proven development methodology that combines industry best practices with innovative approaches to deliver exceptional software solutions.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting Lines */}
          <div className="absolute inset-0 hidden lg:block">
            {/* Horizontal Lines */}
            <motion.div 
              className="absolute top-1/4 left-1/2 w-1/4 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/4 w-1/4 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute top-3/4 left-1/2 w-1/4 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            
            {/* Vertical Lines */}
            <motion.div 
              className="absolute top-1/4 left-1/2 w-0.5 h-1/2 bg-gradient-to-b from-cyan-400 to-transparent"
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`relative ${
                  step.position.includes('left') ? 'lg:justify-self-start' : 'lg:justify-self-end'
                }`}
                variants={stepVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 group">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-sm">{step.id}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 text-lg mb-8">
            Ready to transform your ideas into powerful software solutions?
          </p>
          <motion.a 
            href="https://www.facebook.com/profile.php?id=61579740698712"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
