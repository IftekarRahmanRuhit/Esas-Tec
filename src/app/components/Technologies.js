'use client';

import { motion } from 'framer-motion';

export default function Technologies() {
  const techCategories = [
    {
      category: "Frontend Development",
      technologies: [
        { name: "React", icon: "⚛️", level: 95 },
        { name: "Next.js", icon: "▲", level: 90 },
        { name: "Vue.js", icon: "💚", level: 85 },
        { name: "TypeScript", icon: "📘", level: 88 },
        { name: "Tailwind CSS", icon: "🎨", level: 92 }
      ]
    },
    {
      category: "Backend Development",
      technologies: [
        { name: "Node.js", icon: "🟢", level: 90 },
        { name: "Python", icon: "🐍", level: 85 },
        { name: "Java", icon: "☕", level: 80 },
        { name: "PostgreSQL", icon: "🐘", level: 88 },
        { name: "MongoDB", icon: "🍃", level: 85 }
      ]
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: "AWS", icon: "☁️", level: 85 },
        { name: "Docker", icon: "🐳", level: 80 },
        { name: "Kubernetes", icon: "⚓", level: 75 },
        { name: "CI/CD", icon: "🔄", level: 88 },
        { name: "Terraform", icon: "🏗️", level: 70 }
      ]
    },
    {
      category: "Mobile Development",
      technologies: [
        { name: "React Native", icon: "📱", level: 85 },
        { name: "Flutter", icon: "🦋", level: 80 },
        { name: "iOS (Swift)", icon: "🍎", level: 75 },
        { name: "Android (Kotlin)", icon: "🤖", level: 75 },
        { name: "PWA", icon: "📲", level: 90 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
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
            Our Technology Stack
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Cutting-Edge Technologies
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            We leverage the latest technologies and frameworks to build scalable, secure, and high-performance solutions.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
              variants={categoryVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">{category.category}</h3>
              
              <div className="space-y-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="space-y-2"
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="text-white font-medium">{tech.name}</span>
                      </div>
                      <span className="text-cyan-400 font-semibold">{tech.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + techIndex * 0.05 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Technologies */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Tools & Frameworks</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "GraphQL", "Redux", "Webpack", "Jest", "Git", "Figma",
                "Adobe XD", "Sketch", "InVision", "Zeplin", "Postman", "Swagger"
              ].map((tool, index) => (
                <motion.div
                  key={tool}
                  className="bg-slate-700/50 hover:bg-cyan-400/20 border border-slate-600/50 hover:border-cyan-400/50 rounded-lg p-4 text-center transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-slate-300 hover:text-cyan-400 font-medium text-sm transition-colors duration-300">
                    {tool}
                  </span>
                </motion.div>
              ))}
            </div>
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
            Need a specific technology solution? We can work with any tech stack.
          </p>
          <motion.button 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Tech Requirements
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
