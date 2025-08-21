'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { BookOpen, PenTool, Lightbulb } from 'lucide-react';

export default function BlogPageBanner() {
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

    // Create animated particles with blog-themed colors (starry effect)
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1200; // More particles for starry effect
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create more spread out starry effect
      posArray[i] = (Math.random() - 0.5) * 20;
      posArray[i + 1] = (Math.random() - 0.5) * 15;
      posArray[i + 2] = (Math.random() - 0.5) * 20;
      
      // Create white and light blue particles for starry effect
      const color = new THREE.Color();
      if (Math.random() > 0.7) {
        // Some cyan/blue particles
        color.setHSL(0.55 + Math.random() * 0.1, 0.8, 0.7 + Math.random() * 0.3);
      } else {
        // Mostly white particles
        color.setHSL(0, 0, 0.8 + Math.random() * 0.2);
      }
      colorArray[i] = color.r;
      colorArray[i + 1] = color.g;
      colorArray[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    // Create particle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create floating blog-themed geometric shapes
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
    const blogColors = [0x00ffff, 0x0080ff, 0x40a0ff, 0x80c0ff, 0x00d4ff, 0x0099cc];
    
    // Add blog-themed geometric shapes with prominent central sphere
    shapes.push(createShape(new THREE.SphereGeometry(3, 32, 32), blogColors[1], 1.5)); // Large central sphere
    shapes.push(createShape(new THREE.BoxGeometry(2, 2, 2), blogColors[0], 1.2)); // Knowledge
    shapes.push(createShape(new THREE.TorusGeometry(1.5, 0.3, 16, 32), blogColors[2], 1.3)); // Innovation
    shapes.push(createShape(new THREE.OctahedronGeometry(1.4), blogColors[3], 1.0)); // Insights
    shapes.push(createShape(new THREE.TetrahedronGeometry(1.6), blogColors[4], 1.1)); // Strategy

    shapes.forEach(shape => scene.add(shape));

    camera.position.z = 8;

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.008;

      // Rotate particles with blog-themed movement
      particlesMesh.rotation.x = time * 0.05;
      particlesMesh.rotation.y = time * 0.07;

      // Animate shapes with blog-themed patterns
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.003 * (index + 1);
        shape.rotation.y += 0.003 * (index + 1);
        shape.rotation.z += 0.002 * (index + 1);
        
        // Blog-themed floating motion
        shape.position.y = Math.sin(time * 0.3 + index * 0.5) * 0.4;
        shape.position.x = Math.cos(time * 0.2 + index * 0.3) * 0.3;
        shape.position.z = Math.sin(time * 0.15 + index * 0.2) * 0.2;
      });

      // Subtle camera movement
      camera.position.x = Math.sin(time * 0.1) * 0.2;
      camera.position.y = Math.cos(time * 0.08) * 0.15;

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

  const blogCategories = [
    { icon: BookOpen, name: "Technology", color: "from-cyan-400 to-blue-500" },
    { icon: PenTool, name: "Design", color: "from-blue-400 to-purple-500" },
    { icon: Lightbulb, name: "Strategy", color: "from-purple-400 to-pink-500" }
  ];

  return (
    <div className="relative h-[90vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32">
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
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Blog Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                OUR BLOG
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
            REnova Tech{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Insights
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Exploring the frontiers of technology, design, and digital strategy. Your source for industry insights and futuristic ideas.
          </motion.p>

          {/* Blog Categories */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {blogCategories.map((category, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group-hover:bg-slate-800/70">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-lg font-semibold group-hover:text-cyan-300 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
