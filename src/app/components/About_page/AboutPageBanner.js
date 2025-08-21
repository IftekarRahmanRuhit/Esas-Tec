'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

export default function AboutPageBanner() {
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

    // Create animated particles with optimized count
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800; // Reduced from 2000 for better performance
    const posArray = new Float32Array(particlesCount * 3);
    const sizeArray = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create more particles towards the center
      const radius = Math.random() * 8;
      const angle = Math.random() * Math.PI * 2;
      const centerDensity = Math.random() * 0.7 + 0.3;
      
      posArray[i] = Math.cos(angle) * radius * centerDensity;
      posArray[i + 1] = (Math.random() - 0.5) * 6 * centerDensity;
      posArray[i + 2] = Math.sin(angle) * radius * centerDensity;
      
      // Vary particle sizes
      sizeArray[i / 3] = Math.random() * 0.04 + 0.01;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizeArray, 1));

    // Create particle material with cyan/blue colors
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.04, // Slightly larger particles to compensate for reduced count
      color: 0x00ffff,
      transparent: true,
      opacity: 0.7, // Reduced opacity for smoother look
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create floating geometric shapes with optimized count
    const createShape = (geometry, color, scale = 1) => {
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.1, // Reduced opacity
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
    const colors = [0x00ffff, 0x0080ff, 0x40a0ff, 0x80c0ff];
    
    // Reduced number of shapes for better performance
    shapes.push(createShape(new THREE.BoxGeometry(2, 2, 2), colors[0], 1.2));
    shapes.push(createShape(new THREE.SphereGeometry(1.5, 12, 12), colors[1], 1.1)); // Reduced segments
    shapes.push(createShape(new THREE.TorusGeometry(1.2, 0.3, 12, 24), colors[2], 1.3)); // Reduced segments
    shapes.push(createShape(new THREE.OctahedronGeometry(1.3), colors[3], 1.0));

    shapes.forEach(shape => scene.add(shape));

    camera.position.z = 8;

    // Optimized animation loop with better performance
    let time = 0;
    let animationId;
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.008; // Slower animation for smoother performance

      // Rotate particles with optimized speeds
      particlesMesh.rotation.x = time * 0.05;
      particlesMesh.rotation.y = time * 0.08;

      // Animate shapes with reduced complexity
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.003 * (index + 1);
        shape.rotation.y += 0.003 * (index + 1);
        shape.rotation.z += 0.002 * (index + 1);
        
        // Simplified floating motion
        shape.position.y = Math.sin(time * 0.5 + index) * 0.4;
        shape.position.x = Math.cos(time * 0.4 + index) * 0.3;
      });

      // Minimal camera movement
      camera.position.x = Math.sin(time * 0.1) * 0.3;
      camera.position.y = Math.cos(time * 0.08) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize with throttling
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!container) return;
        
        const newRect = container.getBoundingClientRect();
        camera.aspect = newRect.width / newRect.height;
        camera.updateProjectionMatrix();
        renderer.setSize(newRect.width, newRect.height);
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-16">
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
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-8 py-3">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                ⭐ About REnova Tech
              </p>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Engineering the Future of{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            We are more than a digital agency; we are architects of the future, crafting intelligent and immersive web experiences that drive growth and inspire innovation.
          </motion.p>

          {/* Additional Description */}
          <motion.p 
            className="text-base sm:text-lg mb-12 max-w-3xl mx-auto text-slate-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            With cutting-edge technology and creative expertise, we transform ideas into powerful digital solutions that connect, engage, and deliver exceptional results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25">
              Explore Our Work
            </button>
            <button className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
              Meet Our Team
            </button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="text-center p-6 rounded-xl backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-3xl font-bold mb-2 text-cyan-400">500+</div>
              <div className="text-sm text-slate-300">Projects Delivered</div>
            </div>
            <div className="text-center p-6 rounded-xl backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-3xl font-bold mb-2 text-cyan-400">98%</div>
              <div className="text-sm text-slate-300">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 rounded-xl backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
              <div className="text-3xl font-bold mb-2 text-cyan-400">10+</div>
              <div className="text-sm text-slate-300">Years of Excellence</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

