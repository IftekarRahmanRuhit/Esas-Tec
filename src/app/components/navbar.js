'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                {/* Logo */}
                <div className="w-10 h-10 bg-cyan-400 rounded-md flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">RT</span>
                </div>
                {/* Brand Name */}
                <span className="text-cyan-400 font-semibold text-xl">REnova Tech</span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-cyan-400 px-3 py-2 text-sm font-medium border-b-2 border-cyan-400">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Portfolio
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Contact Us
              </Link>
              <Link href="/blogs" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Blogs
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/book-meeting">
              <button className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Book a Meeting
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-b-lg">
              <Link href="/" className="text-cyan-400 block px-3 py-2 text-base font-medium border-l-4 border-cyan-400">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200">
                About
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Portfolio
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Contact Us
              </Link>
              <Link href="/blogs" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Blogs
              </Link>
              <div className="pt-4">
                <Link href="/book-meeting">
                  <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                    Book a Meeting
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
