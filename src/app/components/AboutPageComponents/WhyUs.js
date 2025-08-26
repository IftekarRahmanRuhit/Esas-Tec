'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Clock, CheckCircle } from 'lucide-react';

export default function WhyUs() {
  const stats = [
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: Star,
      color: "from-yellow-400 to-orange-500"
    },
    {
      number: "50+",
      label: "Projects Delivered",
      icon: CheckCircle,
      color: "from-green-400 to-emerald-500"
    },
    {
      number: "24/7",
      label: "Dedicated Support",
      icon: Clock,
      color: "from-blue-400 to-cyan-500"
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
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-8">
            Why Partner with Esas Tec?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Choosing the right digital partner is crucial for success. We blend deep technical excellence 
            with a creative, forward-thinking vision to deliver solutions that are not just built to work, 
            but are engineered to excel and outperform. Our commitment to innovation and client satisfaction sets us apart.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <motion.div 
                className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl p-8 text-center backdrop-blur-sm hover:border-slate-600/50 transition-all duration-500 overflow-hidden"
                variants={hoverVariants}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon with gradient background */}
                <div className="relative flex justify-center mb-6">
                  <div className={`p-4 bg-gradient-to-br ${stat.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Statistic number */}
                <h3 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </h3>

                {/* Statistic label */}
                <p className="relative text-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Button content */}
            <span className="relative">Start Your Project Today</span>
            <ArrowRight className="relative ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
