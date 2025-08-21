'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO & Founder",
      company: "TechFlow Solutions",
      rating: 5,
      content: "REnova Tech transformed our outdated systems into a modern, scalable platform. Their expertise in cloud architecture and attention to detail exceeded our expectations. The project was delivered on time and under budget, and the results have been phenomenal.",
      avatar: "SJ",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      industry: "SaaS Platform",
      projectType: "Enterprise Software",
      duration: "6 months",
      improvement: "300% performance boost"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Chief Technology Officer",
      company: "InnovateCorp",
      rating: 5,
      content: "Working with REnova Tech was a game-changer for our startup. They not only built a robust mobile app but also provided valuable insights on user experience and market positioning. The team's technical expertise and business acumen are exceptional.",
      avatar: "MC",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      industry: "FinTech",
      projectType: "Mobile Application",
      duration: "4 months",
      improvement: "500K+ downloads"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "GrowthFirst",
      rating: 5,
      content: "The digital marketing campaign designed by REnova Tech increased our online presence by 300%. Their data-driven approach and creative solutions helped us reach new markets effectively. ROI was achieved within the first quarter.",
      avatar: "ER",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      industry: "E-commerce",
      projectType: "Digital Marketing",
      duration: "3 months",
      improvement: "300% traffic increase"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Operations Manager",
      company: "GlobalTech Industries",
      rating: 5,
      content: "REnova Tech's custom software solution streamlined our entire operation. The team was professional, responsive, and delivered exactly what we needed. The automation features alone saved us 40 hours per week.",
      avatar: "DT",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      industry: "Manufacturing",
      projectType: "Custom Software",
      duration: "8 months",
      improvement: "40hrs/week saved"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Product Manager",
      company: "HealthTech Pro",
      rating: 5,
      content: "The healthcare platform developed by REnova Tech exceeded all our expectations. Their understanding of HIPAA compliance and user experience design resulted in a product that our users love and trust.",
      avatar: "LW",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      industry: "Healthcare",
      projectType: "Web Platform",
      duration: "10 months",
      improvement: "95% user satisfaction"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-400/3 to-blue-500/3 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-8 py-3">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                ⭐ Trusted by Industry Leaders
              </p>
            </div>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover how we&apos;ve helped companies transform their digital presence and achieve remarkable results.
          </p>
        </motion.div>

        {/* Statistics Bar */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">500+</div>
                <div className="text-slate-400 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">98%</div>
                <div className="text-slate-400 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">24/7</div>
                <div className="text-slate-400 text-sm">Support Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">10+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Testimonials Slider */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Main Slider Container */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-sm border border-slate-600/50">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                  }}
                  className="p-12 lg:p-16"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 text-cyan-400/20 text-6xl font-serif">&ldquo;</div>
                  
                  {/* Content Section */}
                  <div className="grid lg:grid-cols-3 gap-12 items-center">
                    {/* Testimonial Content */}
                    <div className="lg:col-span-2">
                      <div className="mb-8">
                        <p className="text-slate-300 leading-relaxed text-lg lg:text-xl italic mb-6">
                          &ldquo;{testimonials[activeIndex].content}&rdquo;
                        </p>
                        
                        {/* Project Metrics */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-cyan-400 font-bold text-lg">{testimonials[activeIndex].industry}</div>
                            <div className="text-slate-400 text-sm">Industry</div>
                          </div>
                          <div className="text-center">
                            <div className="text-cyan-400 font-bold text-lg">{testimonials[activeIndex].duration}</div>
                            <div className="text-slate-400 text-sm">Timeline</div>
                          </div>
                          <div className="text-center">
                            <div className="text-cyan-400 font-bold text-lg">{testimonials[activeIndex].improvement}</div>
                            <div className="text-slate-400 text-sm">Result</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Author Section */}
                    <div className="text-center lg:text-left">
                      <div className="relative inline-block mb-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl border-4 border-cyan-400/30 mx-auto lg:mx-0">
                          <Image
                            src={testimonials[activeIndex].image}
                            alt={testimonials[activeIndex].name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-slate-800 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="text-white font-bold text-xl mb-1">{testimonials[activeIndex].name}</h3>
                        <p className="text-slate-400 text-lg">{testimonials[activeIndex].position}</p>
                        <p className="text-cyan-400 font-semibold">{testimonials[activeIndex].company}</p>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex justify-center lg:justify-start mb-4">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                          <motion.svg 
                            key={i} 
                            className="w-6 h-6 text-yellow-400" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: i * 0.1, type: "spring" }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/90 hover:bg-cyan-400 text-slate-300 hover:text-slate-900 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-sm border border-slate-600/50 hover:border-cyan-400/50 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/90 hover:bg-cyan-400 text-slate-300 hover:text-slate-900 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-sm border border-slate-600/50 hover:border-cyan-400/50 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Professional Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === activeIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan-400"
                      layoutId="activeDot"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Auto-play Control */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  isAutoPlaying 
                    ? 'bg-cyan-400 text-slate-900 shadow-lg shadow-cyan-400/25' 
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600'
                }`}
              >
                <span>{isAutoPlaying ? '⏸️' : '▶️'}</span>
                <span>{isAutoPlaying ? 'Pause' : 'Play'}</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s create your own success story. Get in touch with our team and discover how we can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project Today
              </motion.button>
              <motion.button 
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

