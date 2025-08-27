'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { ArrowRight, Eye, Star, Award, Users, CheckCircle } from 'lucide-react';

export default function PortfolioPageBanner() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const container = mountRef.current;
    const containerRect = container.getBoundingClientRect();
    
    const camera = new THREE.PerspectiveCamera(75, containerRect.width / containerRect.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(containerRect.width, containerRect.height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create animated particles with portfolio-themed colors
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1400;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 18;
      posArray[i + 1] = (Math.random() - 0.5) * 12;
      posArray[i + 2] = (Math.random() - 0.5) * 18;
      
      // Create gradient colors for particles
      const color = new THREE.Color();
      color.setHSL(0.5 + Math.random() * 0.15, 0.8, 0.6 + Math.random() * 0.4);
      colorArray[i] = color.r;
      colorArray[i + 1] = color.g;
      colorArray[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    // Create particle material with portfolio-themed colors
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create floating portfolio-themed geometric shapes
    const createShape = (geometry, color, scale = 1) => {
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.15,
        wireframe: true
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(scale, scale, scale);
      mesh.position.set(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 14
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      return mesh;
    };

    const shapes = [];
    const portfolioColors = [0x00ffff, 0x0080ff, 0x40a0ff, 0x80c0ff, 0x00d4ff, 0x0099cc, 0x00bfff, 0x1e90ff];
    
    // Add portfolio-themed geometric shapes
    shapes.push(createShape(new THREE.BoxGeometry(2.2, 2.2, 2.2), portfolioColors[0], 1.3)); // Portfolio Grid
    shapes.push(createShape(new THREE.SphereGeometry(1.8, 18, 18), portfolioColors[1], 1.2)); // Creative Sphere
    shapes.push(createShape(new THREE.TorusGeometry(1.6, 0.3, 18, 36), portfolioColors[2], 1.4)); // Innovation Ring
    shapes.push(createShape(new THREE.OctahedronGeometry(1.5), portfolioColors[3], 1.1)); // Excellence Diamond
    shapes.push(createShape(new THREE.TetrahedronGeometry(1.7), portfolioColors[4], 1.0)); // Success Pyramid
    shapes.push(createShape(new THREE.IcosahedronGeometry(1.3), portfolioColors[5], 1.2)); // Quality Crystal

    shapes.forEach(shape => scene.add(shape));

    camera.position.z = 8;

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Rotate particles with portfolio-themed movement
      particlesMesh.rotation.x = time * 0.06;
      particlesMesh.rotation.y = time * 0.1;

      // Animate shapes with portfolio-themed patterns
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 * (index + 1);
        shape.rotation.y += 0.005 * (index + 1);
        shape.rotation.z += 0.003 * (index + 1);
        
        // Portfolio-themed floating motion
        shape.position.y = Math.sin(time * 0.5 + index * 0.4) * 0.7;
        shape.position.x = Math.cos(time * 0.3 + index * 0.3) * 0.5;
        shape.position.z = Math.sin(time * 0.2 + index * 0.2) * 0.4;
      });

      // Subtle camera movement
      camera.position.x = Math.sin(time * 0.15) * 0.3;
      camera.position.y = Math.cos(time * 0.1) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!container) return;
      
      const newRect = container.getBoundingClientRect();
      camera.aspect = newRect.width / newRect.height;
      camera.updateProjectionMatrix();
      renderer.setSize(newRect.width, newRect.height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const portfolioStats = [
    { icon: Award, number: "150+", label: "Projects Delivered", color: "from-yellow-400 to-orange-500" },
    { icon: Star, number: "98%", label: "Client Satisfaction", color: "from-cyan-400 to-blue-500" },
    { icon: Users, number: "80+", label: "Happy Clients", color: "from-green-400 to-emerald-500" },
    { icon: CheckCircle, number: "5+", label: "Years Experience", color: "from-purple-400 to-pink-500" }
  ];

  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-12">
      {/* Three.js Background */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0"
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          pointerEvents: 'none'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(80vh-5rem)] px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                Our Portfolio
              </p>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Showcasing{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            className="text-lg sm:text-xl lg:text-2xl mb-6 font-medium text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            A Collection of Innovative Projects That Drive Results
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Explore our diverse portfolio of web applications, mobile solutions, and digital platforms 
            that demonstrate our expertise in creating cutting-edge technology solutions.
          </motion.p>

          {/* Portfolio Categories */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            {['Web Applications', 'Mobile Apps', 'E-commerce', 'SaaS Platforms'].map((category, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-cyan-400/40 transition-all duration-300 group-hover:bg-slate-800/70">
                  <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    {category}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <a href="https://www.facebook.com/profile.php?id=61579740698712" target="_blank" rel="noopener noreferrer" className="group px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25 flex items-center gap-3">
              Explore Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579740698712" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
              Start Your Project
            </a>
          </motion.div>

          {/* Portfolio Stats */}
          {/* <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            {portfolioStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 group hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
