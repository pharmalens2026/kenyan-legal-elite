import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Our Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo Section - Adjusted to be distinct and include tagline if needed */}
        <div className="flex flex-col relative z-50">
          <span className={`text-xl lg:text-2xl font-serif font-bold tracking-tight leading-none transition-colors duration-300 ${
            scrolled ? 'text-[#0B1F3A]' : 'text-white'
          }`}>
            TOBIKO NJOROGE
          </span>
          <span className={`text-[10px] lg:text-[11px] tracking-[0.25em] font-sans font-semibold mt-1 transition-colors duration-300 ${
            scrolled ? 'text-[#C8A96B]' : 'text-[#C8A96B]'
          }`}>
            & COMPANY ADVOCATES
          </span>
          {/* Subtle addition of values to brand identity without blocking */}
          <span className={`hidden lg:block text-[7px] tracking-[0.5em] mt-1.5 font-bold transition-opacity duration-300 ${
            scrolled ? 'text-[#0B1F3A]/40 opacity-100' : 'opacity-0'
          }`}>
            EXCELLENCE • INTEGRITY • AUTHORITY
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide hover:text-[#C8A96B] transition-colors duration-300 ${
                scrolled ? 'text-[#0B1F3A]' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-[#C8A96B] hover:bg-[#B6985A] text-[#0B1F3A] font-bold rounded-none px-6 transition-all duration-300 shadow-lg shadow-[#C8A96B]/20">
            Book Consultation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className={scrolled ? 'text-[#0B1F3A]' : 'text-white'} size={28} />
          ) : (
            <Menu className={scrolled ? 'text-[#0B1F3A]' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-0 left-0 w-full bg-white shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-8 space-y-5 pt-24">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#0B1F3A] font-bold text-xl border-b border-gray-100 pb-3 hover:text-[#C8A96B] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-[#C8A96B] hover:bg-[#B6985A] text-[#0B1F3A] font-bold rounded-none w-full py-6 text-lg mt-4">
            Book Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
};