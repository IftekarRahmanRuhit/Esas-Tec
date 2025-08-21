import React from 'react'

export default function PortfolioCard() {
  const projects = [
    {
      title: "Eaglesteelfurniture",
      description: "EagleSteel Furniture is a modern eCommerce platform built for a premium furniture brand. It showcases a wide range of stylish steel, wood, and plastic furniture with exclusive offers and discounts. The site delivers a smooth shopping experience with categories, deals, and order management features.",
      technologies: ["React", "Node.js", "Express.js"],
      client: "Eaglesteelfurniture",
      type: "Web App",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Weddingfotostation",
      description: "WeddingFotoStation is a modern wedding storytelling website we crafted with elegance and simplicity. It beautifully showcases love stories through films and photography, with a clean and emotional design. The site blends aesthetics and functionality to create an immersive experience for couples.",
      technologies: ["React", "Node.js", "Express.js", "GSAP"],
      client: "Weddingfotostation Team",
      type: "Web App",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our latest work that showcases innovation, creativity, and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-out group">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-700 text-white text-xs font-medium rounded-full hover:bg-blue-600 transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider">Client</p>
                      <p className="text-white font-medium">{project.client}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider">Type</p>
                      <p className="text-white font-medium">{project.type}</p>
                    </div>
                  </div>
                </div>

                <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 ease-out">
                  Live Preview
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 ease-out">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
