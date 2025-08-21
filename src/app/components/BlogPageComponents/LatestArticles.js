'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export default function LatestArticles() {
  const articles = [
    {
      id: 1,
      title: "Why Custom Web Applications Are Becoming a Real Necessity for Businesses Today",
      description: "Discover how custom web applications are transforming business operations and driving growth in the digital age.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "Software Development",
      readTime: "5 min read",
      date: "March 15, 2025"
    },
    {
      id: 2,
      title: "Why Custom Web Application Development is Essential for Modern Businesses",
      description: "Learn why custom web applications are crucial for businesses to stay competitive and meet unique requirements.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      category: "Web Application Development",
      readTime: "7 min read",
      date: "March 12, 2025"
    },
    {
      id: 3,
      title: "Nexorzen: Professional Web App Development Company for Modern Businesses",
      description: "Explore how Nexorzen delivers cutting-edge web applications that drive business transformation and success.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      category: "Web Development / Digital Solutions / SaaS",
      readTime: "6 min read",
      date: "March 10, 2025"
    },
    {
      id: 4,
      title: "How Nexorzen Helps Businesses Transform Through Web App Development",
      description: "Discover the comprehensive approach Nexorzen takes to help businesses achieve digital transformation success.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "Software Development",
      readTime: "8 min read",
      date: "March 8, 2025"
    },
    {
      id: 5,
      title: "Web App Development with Nexorzen: Building Smarter Digital Solutions",
      description: "Learn how Nexorzen creates intelligent web applications that adapt to your business needs and scale with growth.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      category: "Software Development",
      readTime: "4 min read",
      date: "March 5, 2025"
    },
    {
      id: 6,
      title: "Nexorzen: Crafting Web Applications that Drive Business Growth",
      description: "Explore how our web applications are designed to accelerate business growth and improve operational efficiency.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "Web Development",
      readTime: "6 min read",
      date: "March 3, 2025"
    },
    {
      id: 7,
      title: "Nexorzen: Best Web App Development Company for Businesses in 2025",
      description: "Why Nexorzen stands out as the premier choice for web application development in the competitive market.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      category: "Software Development",
      readTime: "5 min read",
      date: "March 1, 2025"
    },
    {
      id: 8,
      title: "Nexorzen: Turning Ideas into Powerful Web Applications",
      description: "From concept to deployment, see how we transform your innovative ideas into powerful, scalable web applications.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      category: "Software Development",
      readTime: "7 min read",
      date: "February 28, 2025"
    },
    {
      id: 9,
      title: "The Future of Web Development: Trends and Technologies to Watch",
      description: "Stay ahead of the curve with insights into emerging web development trends and cutting-edge technologies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "Technology Trends",
      readTime: "9 min read",
      date: "February 25, 2025"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest <span className="text-cyan-400">Articles</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Stay updated with the latest insights, trends, and innovations in web development and digital solutions.
            </p>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Article Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {article.description}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center justify-between">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm group/link transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25">
              Load More Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
