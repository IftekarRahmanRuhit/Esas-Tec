'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Cloud, Smartphone, Brush, Database, ArrowRight } from 'lucide-react';

export default function ServicesCard() {
  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "We build bespoke, high-performance websites and web applications from the ground up, tailored precisely to your business logic and user needs. Our solutions are scalable, secure, and built on modern technology stacks for future-proof performance.",
      features: [
        "Full-Stack MERN/Next.js Development",
        "Headless CMS Integration",
        "Progressive Web Apps (PWAs)",
        "API Development & Integration"
      ],
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Our design process goes beyond aesthetics. We create intuitive, user-centric interfaces that captivate your audience, enhance usability, and elevate your brand's digital presence.",
      features: [
        "User Interface & Experience Design",
        "Responsive Web & App Design",
        "Wireframing & Prototyping",
        "Usability Testing"
      ],
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Cloud,
      title: "SaaS & Platform Development",
      description: "Turn your innovative idea into a market-ready Software-as-a-Service (SaaS) platform. We handle everything from architecture design and multi-tenancy to subscription management and cloud deployment.",
      features: [
        "Scalable Cloud Architecture",
        "Multi-Tenant Application Design",
        "Subscription & Billing Integration",
        "Robust Security Protocols"
      ],
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Building intuitive and high-performance native applications for both Android and iOS platforms, designed to provide a seamless user experience and drive engagement.",
      features: [
        "Native Android App Development",
        "Native iOS App Development",
        "Cross-Platform Solutions (React Native)",
        "App Store & Play Store Deployment"
      ],
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Brush,
      title: "Graphic Design & Branding",
      description: "We create compelling visual identities, from logos to complete brand guides, that resonate with your audience and make a lasting impression on the market.",
      features: [
        "Logo Design & Brand Identity",
        "Marketing & Social Media Graphics",
        "Print & Packaging Design",
        "Custom Illustrations"
      ],
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: Database,
      title: "Database & Backend Solutions",
      description: "Robust backend infrastructure and database solutions that power your applications with high performance, security, and scalability for enterprise-level operations.",
      features: [
        "Database Architecture & Design",
        "API Development & Integration",
        "Cloud Infrastructure Setup",
        "Performance Optimization"
      ],
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

  const cardVariants = {
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
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
              Our Services
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Professional{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital services designed to transform your business and drive growth through innovative technology solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
                             <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl p-8 h-full backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 overflow-hidden flex flex-col">
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                                 {/* Features List */}
                 <div className="relative mb-8 flex-grow">
                   <ul className="space-y-3">
                     {service.features.map((feature, featureIndex) => (
                       <li key={featureIndex} className="flex items-start gap-3">
                         <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                         <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                       </li>
                     ))}
                   </ul>
                 </div>

                 {/* CTA Button */}
                 <div className="relative mt-auto">
                   <button className={`group/btn w-full bg-gradient-to-r ${service.gradient} text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-3`}>
                     Book a Meeting
                     <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                   </button>
                 </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-300 mb-8 text-lg">
              Let&apos;s discuss how we can transform your ideas into powerful digital solutions that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-3">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-cyan-400 hover:text-slate-900">
                View Our Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
