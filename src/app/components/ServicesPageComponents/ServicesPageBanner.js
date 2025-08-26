'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { ArrowRight, Code, Smartphone, Palette, Database, Image } from 'lucide-react';

export default function ServicesPageBanner() {
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

    // Create animated particles with service-themed colors
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1200;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 15;
      posArray[i + 1] = (Math.random() - 0.5) * 10;
      posArray[i + 2] = (Math.random() - 0.5) * 15;
      
      // Create gradient colors for particles
      const color = new THREE.Color();
      color.setHSL(0.5 + Math.random() * 0.1, 0.8, 0.6 + Math.random() * 0.4);
      colorArray[i] = color.r;
      colorArray[i + 1] = color.g;
      colorArray[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    // Create particle material with service-themed colors
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create floating service-themed geometric shapes
    const createShape = (geometry, color, scale = 1) => {
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.12,
        wireframe: true
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(scale, scale, scale);
      mesh.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 12
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      return mesh;
    };

    const shapes = [];
    const serviceColors = [0x00ffff, 0x0080ff, 0x40a0ff, 0x80c0ff, 0x00d4ff, 0x0099cc];
    
    // Add service-themed geometric shapes
    shapes.push(createShape(new THREE.BoxGeometry(2, 2, 2), serviceColors[0], 1.2)); // Web Development
    shapes.push(createShape(new THREE.SphereGeometry(1.8, 16, 16), serviceColors[1], 1.1)); // Mobile Apps
    shapes.push(createShape(new THREE.TorusGeometry(1.5, 0.3, 16, 32), serviceColors[2], 1.3)); // UI/UX
    shapes.push(createShape(new THREE.OctahedronGeometry(1.4), serviceColors[3], 1.0)); // Database
    shapes.push(createShape(new THREE.TetrahedronGeometry(1.6), serviceColors[4], 1.1)); // Graphic Design

    shapes.forEach(shape => scene.add(shape));

    camera.position.z = 8;

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.012;

      // Rotate particles with service-themed movement
      particlesMesh.rotation.x = time * 0.08;
      particlesMesh.rotation.y = time * 0.12;

      // Animate shapes with service-themed patterns
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.006 * (index + 1);
        shape.rotation.y += 0.006 * (index + 1);
        shape.rotation.z += 0.004 * (index + 1);
        
        // Service-themed floating motion
        shape.position.y = Math.sin(time * 0.6 + index * 0.5) * 0.6;
        shape.position.x = Math.cos(time * 0.4 + index * 0.3) * 0.4;
        shape.position.z = Math.sin(time * 0.3 + index * 0.2) * 0.3;
      });

      // Subtle camera movement
      camera.position.x = Math.sin(time * 0.2) * 0.4;
      camera.position.y = Math.cos(time * 0.15) * 0.3;

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

  const services = [
    { icon: Code, name: "Web Development", color: "from-cyan-400 to-blue-500" },
    { icon: Smartphone, name: "Mobile Apps", color: "from-blue-400 to-purple-500" },
    { icon: Palette, name: "UI/UX Design", color: "from-purple-400 to-pink-500" },
    { icon: Database, name: "Database Solutions", color: "from-green-400 to-emerald-500" },
    { icon: Image, name: "Graphic Design", color: "from-orange-400 to-red-500" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
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
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-6rem)] px-4 sm:px-6 lg:px-8 py-16">
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
                Comprehensive Digital Solutions
              </p>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Professional{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Digital Services
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            className="text-xl sm:text-2xl lg:text-3xl mb-8 font-medium text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Transforming Ideas Into Powerful Digital Solutions
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            We deliver cutting-edge web development, mobile applications, and digital solutions 
            that drive business growth and exceed client expectations with innovative technology.
          </motion.p>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-cyan-400/40 transition-all duration-300 group-hover:bg-slate-800/70">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white text-xs font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    {service.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <button className="group px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25 flex items-center gap-3">
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
              Get Free Quote
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <div className="text-center p-6 rounded-xl backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 group hover:scale-105">
              <div className="text-3xl font-bold mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-sm text-slate-300">Projects Delivered</div>
            </div>
            <div className="text-center p-6 rounded-xl backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 group hover:scale-105">
              <div className="text-3xl font-bold mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-sm text-slate-300">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 rounded-xl backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 group hover:scale-105">
              <div className="text-3xl font-bold mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-sm text-slate-300">Years of Excellence</div>
            </div>
            <div className="text-center p-6 rounded-xl backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 group hover:scale-105">
              <div className="text-3xl font-bold mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm text-slate-300">Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
