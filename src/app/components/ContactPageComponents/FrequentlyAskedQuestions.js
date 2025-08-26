'use client';

import React, { useState } from "react";
import { motion } from 'framer-motion';
import { ChevronDown } from "lucide-react";

export default function FrequentlyAskedQuestions() {
  const faqData = [
    {
              title: "What services does Esas Tec offer?",
      description: "We offer comprehensive digital solutions including web development, mobile applications, UI/UX design, database solutions, cloud services, and DevOps & CI/CD. Our team specializes in creating cutting-edge digital experiences that drive business growth.",
    },
    {
      title: "How long does it typically take to complete a project?",
      description: "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
    },
    {
      title: "Do you provide ongoing support and maintenance?",
      description: "Yes, we offer comprehensive ongoing support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support. We also provide 24/7 emergency support for critical issues.",
    },
    {
      title: "What technologies and frameworks do you use?",
      description: "We use modern, industry-standard technologies including React, Node.js, Next.js, Python, and various cloud platforms. Our tech stack is chosen based on project requirements to ensure optimal performance, scalability, and maintainability.",
    },
    {
      title: "How do you handle project communication and updates?",
      description: "We maintain transparent communication through regular meetings, progress reports, and dedicated project management tools. You'll have direct access to your project team and receive weekly updates on progress, milestones, and any challenges.",
    },
    {
      title: "What is your pricing structure?",
      description: "Our pricing is project-based and depends on complexity, features, and timeline. We provide detailed quotes after understanding your requirements. We offer flexible payment terms and can work within various budget constraints while maintaining quality.",
    },
    {
      title: "Do you work with international clients?",
      description: "Absolutely! We serve clients worldwide and have experience working across different time zones and cultures. Our team is equipped to handle international projects and can accommodate various communication preferences and project requirements.",
    },
    {
      title: "What happens after I submit a project request?",
      description: "After submitting your request, we'll schedule a consultation to discuss your project in detail. We'll analyze your requirements, provide recommendations, create a project proposal, and establish timelines and milestones before beginning development.",
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-cyan-400">Questions</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and what to expect when working with us.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div 
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.article
                  key={index}
                  className="border-b border-slate-700/50 last:border-b-0"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div
                    className="flex items-center justify-between w-full py-6 cursor-pointer group"
                    onClick={() => handleClick(index)}
                  >
                    <h3 className="text-cyan-400 font-semibold text-lg md:text-xl pr-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {faq.title}
                    </h3>
                    <div className="flex-shrink-0">
                      <ChevronDown
                        className={`w-6 h-6 text-slate-400 transition-all duration-300 ${
                          openIndex === index
                            ? "rotate-180 text-cyan-400"
                            : "group-hover:text-cyan-400"
                        }`}
                      />
                    </div>
                  </div>
                  
                  <motion.div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100 pb-6"
                        : "max-h-0 opacity-0"
                    }`}
                    initial={false}
                    animate={{
                      maxHeight: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-slate-300 text-base leading-relaxed">
                      {faq.description}
                    </p>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-slate-300 mb-6">
              Still have questions? We&apos;re here to help!
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25">
              Contact Our Team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
