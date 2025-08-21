'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Technologies() {
  const technologies = [
    { 
      name: "HTML5", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "hover:shadow-orange-500/30"
    },
    { 
      name: "CSS3", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "hover:shadow-blue-500/30"
    },
    { 
      name: "JavaScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "hover:shadow-yellow-500/30"
    },
    { 
      name: "TypeScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "hover:shadow-blue-600/30"
    },
    { 
      name: "React", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "hover:shadow-cyan-500/30"
    },
    { 
      name: "Next.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "hover:shadow-white/30"
    },
    { 
      name: "Node.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "hover:shadow-green-500/30"
    },
    { 
      name: "Express.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "hover:shadow-gray-400/30"
    },
    { 
      name: "MongoDB", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "hover:shadow-green-600/30"
    },
    { 
      name: "PostgreSQL", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "hover:shadow-blue-700/30"
    },
    { 
      name: "Prisma", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      color: "hover:shadow-purple-500/30"
    },
    { 
      name: "Redux", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      color: "hover:shadow-purple-600/30"
    },
    { 
      name: "Tailwind CSS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      color: "hover:shadow-cyan-400/30"
    },
    { 
      name: "Docker", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "hover:shadow-blue-600/30"
    },
    { 
      name: "AWS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      color: "hover:shadow-orange-600/30"
    },
    { 
      name: "Git", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "hover:shadow-orange-700/30"
    },
    { 
      name: "GitHub", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "hover:shadow-gray-800/30"
    },
    { 
      name: "Linux", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      color: "hover:shadow-yellow-600/30"
    },
    { 
      name: "VS Code", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      color: "hover:shadow-blue-600/30"
    },
    { 
      name: "Figma", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "hover:shadow-purple-500/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#040919' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Our Technology Stack
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We leverage a powerful, modern technology stack to build robust, scalable, 
            and high-performance applications tailored to your specific needs.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Technology Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <motion.div 
                className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl p-6 text-center h-full backdrop-blur-sm hover:border-slate-600/50 transition-all duration-500 overflow-hidden ${tech.color}`}
                variants={hoverVariants}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Logo with enhanced styling */}
                <div className="relative flex justify-center mb-4">
                  <div className="p-4 bg-white/5 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 backdrop-blur-sm">
                    <div className="w-12 h-12 relative">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        fill
                        className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                        sizes="(max-width: 768px) 48px, (max-width: 1024px) 48px, 48px"
                      />
                    </div>
                  </div>
                </div>

                {/* Technology name */}
                <h3 className="relative text-white font-semibold text-sm group-hover:text-blue-300 transition-colors duration-300 group-hover:scale-105">
                  {tech.name}
                </h3>

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
