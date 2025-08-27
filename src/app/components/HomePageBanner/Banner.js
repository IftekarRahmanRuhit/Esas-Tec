'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Banner() {
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

    // Create animated particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create particle material with cyan/blue colors
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create floating geometric shapes
    const createShape = (geometry, color) => {
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.15,
        wireframe: true
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
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
    
    // Add different geometric shapes
    shapes.push(createShape(new THREE.BoxGeometry(2.5, 2.5, 2.5), colors[0]));
    shapes.push(createShape(new THREE.SphereGeometry(2, 20, 20), colors[1]));
    shapes.push(createShape(new THREE.TorusGeometry(1.8, 0.4, 20, 40), colors[2]));
    shapes.push(createShape(new THREE.OctahedronGeometry(1.5), colors[3]));
    shapes.push(createShape(new THREE.TetrahedronGeometry(1.8), colors[0]));

    shapes.forEach(shape => scene.add(shape));

    camera.position.z = 6;

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.015;

      // Rotate particles
      particlesMesh.rotation.x = time * 0.1;
      particlesMesh.rotation.y = time * 0.15;

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.008 * (index + 1);
        shape.rotation.y += 0.008 * (index + 1);
        shape.rotation.z += 0.005 * (index + 1);
        shape.position.y = Math.sin(time + index) * 0.8;
        shape.position.x = Math.cos(time * 0.5 + index) * 0.5;
      });

      // Camera movement
      camera.position.x = Math.sin(time * 0.3) * 0.8;
      camera.position.y = Math.cos(time * 0.2) * 0.5;

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

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
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
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Esas Tec
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-slate-300">
            Transforming ideas into digital reality with cutting-edge technology solutions
          </p>

          {/* Description */}
          <p className="text-lg mb-12 max-w-3xl mx-auto text-slate-400">
            We specialize in creating innovative software solutions that drive business growth and deliver exceptional user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://www.facebook.com/profile.php?id=61579740698712" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25">
              Get Started
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579740698712" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-xl backdrop-blur-sm bg-slate-800/50 border border-slate-700">
              <div className="text-3xl font-bold mb-2 text-cyan-400">80+</div>
              <div className="text-sm text-slate-300">Projects Completed</div>
            </div>
            <div className="text-center p-6 rounded-xl backdrop-blur-sm bg-slate-800/50 border border-slate-700">
              <div className="text-3xl font-bold mb-2 text-cyan-400">50+</div>
              <div className="text-sm text-slate-300">Happy Clients</div>
            </div>
            <div className="text-center p-6 rounded-xl backdrop-blur-sm bg-slate-800/50 border border-slate-700">
              <div className="text-3xl font-bold mb-2 text-cyan-400">3+</div>
              <div className="text-sm text-slate-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
