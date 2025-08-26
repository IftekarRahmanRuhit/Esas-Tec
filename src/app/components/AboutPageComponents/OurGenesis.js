'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OurGenesis() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-8 py-3">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                🚀 Our Story
              </p>
            </div>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Our Genesis
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From a spark of an idea to a digital powerhouse
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                From a Spark of an Idea to a{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Digital Powerhouse
                </span>
              </h3>
            </div>

            {/* Company Story */}
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                At <span className="text-cyan-400 font-semibold">Esas Tec</span>, we merge cutting-edge technology with creative design to create digital experiences that transcend the ordinary.
              </p>
              
              <p className="text-lg">
                Founded by passionate developers with a vision for futuristic technology, our journey began with a simple yet powerful idea: to be a digital agency that <span className="text-cyan-400 font-semibold">sets trends</span> rather than just following them.
              </p>
              
              <p className="text-lg">
                We identified a crucial market gap - the need for firms that deliver <span className="text-cyan-400 font-semibold">next-generation web experiences</span>. While others were building simple websites, we envisioned immersive, intelligent platforms that connect, engage, and inspire.
              </p>
              
              <p className="text-lg">
                Today, our dynamic team of developers, designers, and strategists creates advanced web applications, scalable SaaS solutions, and breathtaking digital experiences that push the boundaries of what&apos;s possible.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">Advanced Web Apps</h4>
                  <p className="text-slate-400 text-sm">Cutting-edge applications that drive results</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">SaaS Solutions</h4>
                  <p className="text-slate-400 text-sm">Scalable platforms for modern businesses</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">3D Experiences</h4>
                  <p className="text-slate-400 text-sm">Immersive digital worlds that captivate</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">AI Integration</h4>
                  <p className="text-slate-400 text-sm">Intelligent solutions for the future</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <button className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25">
                Discover Our Journey
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Digital Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Digital Cityscape Image */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50">
              <Image
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Futuristic Digital Cityscape"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay with Glowing Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              
              {/* Glowing Circuit Lines */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-400/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                <div className="absolute bottom-4 left-1/4 w-px h-8 bg-gradient-to-t from-cyan-400 to-transparent"></div>
                <div className="absolute bottom-4 right-1/4 w-px h-8 bg-gradient-to-t from-cyan-400 to-transparent"></div>
                <div className="absolute bottom-8 left-1/3 w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                <div className="absolute bottom-8 right-1/3 w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              </div>
              
              {/* Floating Digital Elements */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              {/* Company Logo Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-2xl shadow-cyan-400/50 mb-4">
                  <svg className="w-12 h-12 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-cyan-400 font-bold text-xl tracking-wider">ESAS TEC</h3>
              </div>
            </div>

            {/* Additional Futuristic Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
