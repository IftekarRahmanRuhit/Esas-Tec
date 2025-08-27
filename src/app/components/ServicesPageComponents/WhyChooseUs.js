'use client';

import { motion } from 'framer-motion';
import { Award, Clock, Users, Shield, Zap, Headphones, Star, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: Award,
      title: "Award-Winning Quality",
      description: "Recognized for excellence in web development and digital innovation with industry awards and certifications.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Agile development methodology ensures quick turnaround times without compromising on quality or functionality.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of experience in cutting-edge technologies and industry best practices.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures and robust infrastructure ensure your applications are safe and scalable.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Zap,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to keep your digital solutions running smoothly.",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Headphones,
      title: "Dedicated Communication",
      description: "Transparent project management with regular updates and direct access to your development team.",
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Expert Developers", icon: Users },
    { number: "24/7", label: "Support Available", icon: Headphones }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
              content: "Esas Tec transformed our vision into a powerful digital platform. Their expertise and dedication exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      content: "The team delivered our project on time and within budget. Their technical expertise and communication were outstanding.",
      rating: 5
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

  const itemVariants = {
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
              Why Choose Us
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            The{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Competitive Edge
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with creative innovation to deliver digital solutions that drive real business results and exceed expectations.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-slate-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 overflow-hidden">
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${advantage.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="relative text-slate-300 leading-relaxed">
                  {advantage.description}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>



        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Experience the Difference?
            </h3>
            <p className="text-slate-300 mb-8 text-lg">
              Join hundreds of satisfied clients who have transformed their businesses with our innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.facebook.com/profile.php?id=61579740698712" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-3">
                Get Started Today
                <CheckCircle className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579740698712" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-cyan-400 hover:text-slate-900">
                View Case Studies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
