import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1F3A]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/e9466e17-97f8-4d7f-a5b8-44c3c1d3f5fd/nairobi-skyline-hero-f1323711-1778667206070.webp')`,
        }}
      >
        {/* Multilayered overlay for better readability */}
        <div className="absolute inset-0 bg-[#0B1F3A]/80 lg:bg-gradient-to-r lg:from-[#0B1F3A] lg:via-[#0B1F3A]/70 lg:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-white pt-32 pb-20 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* The tagline - Pushed down by pt-32 to avoid Navbar overlap */}
          <div className="mb-6 overflow-hidden">
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block text-[#C8A96B] font-bold tracking-[0.4em] text-xs lg:text-sm uppercase"
            >
              Excellence • Integrity • Authority
            </motion.span>
          </div>
          
          <h1 className="text-4xl lg:text-7xl mb-8 leading-[1.1] font-serif font-bold">
            Trusted Legal Solutions for <span className="text-[#C8A96B]">Individuals & Businesses</span> in Kenya
          </h1>
          
          <p className="text-lg lg:text-2xl text-gray-200 mb-12 font-sans leading-relaxed max-w-2xl">
            Combining modern legal expertise with a client-centered approach to deliver precision, confidentiality, and corporate excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Button className="bg-[#C8A96B] hover:bg-[#B6985A] text-[#0B1F3A] font-bold rounded-none h-16 px-10 text-lg group transition-all duration-300">
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-none h-16 px-10 text-lg transition-all duration-300">
              Our Practice Areas
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical accent bar */}
      <div className="absolute right-0 top-0 h-full w-2 bg-[#C8A96B]/40 hidden lg:block"></div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
};