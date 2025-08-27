'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function ContactCTA() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState('consultation');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Get in touch via email",
              action: "hello@esastec.com",
        link: "mailto:hello@esastec.com",
      color: "from-emerald-400 to-teal-500",
      bgColor: "from-emerald-400/20 to-teal-500/20"
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Speak with our experts",
      action: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-400/20 to-indigo-500/20"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with us online",
      action: "Start Chat",
      link: "#",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-400/20 to-pink-500/20"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      description: "Message us directly",
      action: "+1 (555) 123-4567",
      link: "https://wa.me/15551234567",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-400/20 to-emerald-500/20"
    }
  ];

  const projectTypes = [
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'mobile', name: 'Mobile App', icon: '📱' },
    { id: 'design', name: 'UI/UX Design', icon: '🎨' },
    { id: 'consulting', name: 'Consulting', icon: '💡' },
    { id: 'ai', name: 'AI Solutions', icon: '🤖' },
    { id: 'other', name: 'Other', icon: '✨' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-400/3 to-blue-500/3 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/30 rounded-full"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-6 h-6 bg-blue-400/20 rounded-full"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400/25 rounded-full"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        style={{ y }}
      >
        {/* Enhanced Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <div className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-8 py-3">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                🚀 Let&apos;s Build Something Amazing Together
              </p>
            </div>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <br />
            <span className="text-white">Your Vision?</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of successful companies who&apos;ve trusted us to bring their ideas to life. 
            Let&apos;s create something extraordinary together.
          </p>
        </motion.div>

        {/* Interactive Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-2">
            <div className="flex space-x-2">
              {[
                { id: 'consultation', label: 'Free Consultation', icon: '🎯' },
                { id: 'quote', label: 'Get Quote', icon: '💰' },
                { id: 'contact', label: 'Contact Us', icon: '📞' }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dynamic Content Based on Active Tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {activeTab === 'consultation' && (
              <motion.div 
                className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-12 lg:p-16 mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-center max-w-4xl mx-auto">
                  <div className="mb-8">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-3xl">🎯</span>
                    </motion.div>
                    <h3 className="text-4xl font-bold text-white mb-6">
                      Free Strategy Session
                    </h3>
                    <p className="text-slate-300 text-xl mb-8 leading-relaxed">
                      Book a complimentary 30-minute consultation with our experts. We&apos;ll analyze your project, 
                      discuss your goals, and provide actionable insights to move forward.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                      { icon: '📋', title: 'Project Analysis', desc: 'Deep dive into your requirements' },
                      { icon: '🎯', title: 'Strategy Planning', desc: 'Custom roadmap for success' },
                      { icon: '💰', title: 'Budget Planning', desc: 'Transparent cost breakdown' }
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        className="bg-slate-700/50 rounded-2xl p-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="text-3xl mb-4">{item.icon}</div>
                        <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.a 
                      href="https://www.facebook.com/profile.php?id=61579740698712"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center space-x-3"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>📅</span>
                      <span>Schedule Free Session</span>
                    </motion.a>
                    <motion.button 
                      className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>📞</span>
                      <span>Call Now</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'quote' && (
              <motion.div 
                className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-12 lg:p-16 mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-center max-w-4xl mx-auto">
                  <div className="mb-8">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-3xl">💰</span>
                    </motion.div>
                    <h3 className="text-4xl font-bold text-white mb-6">
                      Get Your Custom Quote
                    </h3>
                    <p className="text-slate-300 text-xl mb-8 leading-relaxed">
                      Tell us about your project and receive a detailed, transparent quote within 24 hours. 
                      No hidden fees, no surprises.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                    {projectTypes.map((type, index) => (
                      <motion.button
                        key={type.id}
                        className="bg-slate-700/50 hover:bg-slate-600/50 rounded-2xl p-6 text-center transition-all duration-300 border border-slate-600/50 hover:border-cyan-400/50"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="text-2xl mb-2">{type.icon}</div>
                        <div className="text-white font-medium text-sm">{type.name}</div>
                      </motion.button>
                    ))}
                  </div>
                  
                  <motion.button 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25 flex items-center space-x-3 mx-auto"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>📝</span>
                    <span>Request Custom Quote</span>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {activeTab === 'contact' && (
              <motion.div 
                className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-12 lg:p-16 mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-center max-w-4xl mx-auto">
                  <div className="mb-8">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-3xl">📞</span>
                    </motion.div>
                    <h3 className="text-4xl font-bold text-white mb-6">
                      Multiple Ways to Connect
                    </h3>
                    <p className="text-slate-300 text-xl mb-8 leading-relaxed">
                      Choose your preferred way to get in touch. We&apos;re here to help 24/7.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactMethods.map((method, index) => (
                      <motion.a
                        key={method.title}
                        href={method.link}
                        className="group relative"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ y: -10, scale: 1.05 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`bg-gradient-to-br ${method.bgColor} backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden`}>
                          {/* Glow Effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                          
                          <div className="relative z-10">
                            <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <span className="text-2xl">{method.icon}</span>
                            </div>
                            
                            <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                              {method.title}
                            </h4>
                            <p className="text-slate-400 mb-4 text-sm">
                              {method.description}
                            </p>
                            
                            <div className={`bg-gradient-to-r ${method.color} text-white px-4 py-2 rounded-lg font-medium text-sm group-hover:scale-105 transition-transform duration-300`}>
                              {method.action}
                            </div>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Contact Form */}
        <motion.div 
          className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                Send Us a Message
              </h3>
              <p className="text-slate-300 text-xl">
                Tell us about your project and we&apos;ll get back to you within 2 hours
              </p>
            </div>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-slate-300 text-sm font-medium mb-3">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-lg"
                    placeholder="Enter your first name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-slate-300 text-sm font-medium mb-3">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-lg"
                    placeholder="Enter your last name"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                viewport={{ once: true }}
              >
                <label className="block text-slate-300 text-sm font-medium mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-lg"
                  placeholder="Enter your email address"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                viewport={{ once: true }}
              >
                <label className="block text-slate-300 text-sm font-medium mb-3">
                  Project Type *
                </label>
                <select className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-lg">
                  <option value="">Select project type</option>
                  {projectTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.icon} {type.name}</option>
                  ))}
                </select>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-slate-300 text-sm font-medium mb-3">
                  Project Details *
                </label>
                <textarea
                  rows={6}
                  className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none text-lg"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                />
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                viewport={{ once: true }}
              >
                <motion.button 
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center space-x-3 mx-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>🚀</span>
                  <span>Send Message</span>
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Office Location & Hours */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-12">
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-2xl">🏢</span>
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-6">Visit Our Office</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div>
                <h4 className="text-cyan-400 font-semibold mb-3">📍 Address</h4>
                <p className="text-slate-300">
                  123 Tech Street, Innovation District<br />
                  Dhaka, Bangladesh 1200<br />
                  Bangladesh
                </p>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold mb-3">🕒 Business Hours</h4>
                <p className="text-slate-300">
                  Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                  Saturday: 10:00 AM - 4:00 PM PST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

