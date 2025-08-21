'use client';
import { motion } from 'framer-motion';
import { Lightbulb, Handshake, Users, Award } from 'lucide-react';

export default function Principles() {
  const principles = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that are ahead of the curve.",
      gradient: "from-yellow-400 via-orange-500 to-red-500"
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "Our business is built on a foundation of honesty, transparency, and unwavering trust with our clients.",
      gradient: "from-green-400 via-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Client-Centricity",
      description: "Our clients are our partners. We are dedicated to their success, treating their goals as our own.",
      gradient: "from-blue-400 via-indigo-500 to-purple-500"
    },
    {
      icon: Award,
      title: "Quality & Excellence",
      description: "We are committed to the highest standards of excellence, ensuring pixel-perfect design and flawless code.",
      gradient: "from-purple-400 via-pink-500 to-rose-500"
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
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

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            The Principles That Guide Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Principles Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <motion.div 
                className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl p-8 text-center h-full backdrop-blur-sm hover:border-slate-600/50 transition-all duration-500 overflow-hidden"
                variants={hoverVariants}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon with gradient background */}
                <div className="relative flex justify-center mb-8">
                  <div className={`p-5 bg-gradient-to-br ${principle.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <principle.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title with gradient text */}
                <h3 className={`relative text-2xl font-bold mb-6 bg-gradient-to-r ${principle.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="relative text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {principle.description}
                </p>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
