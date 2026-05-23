import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

export const Team = () => {
  const members = [
    {
      name: 'Tobiko Njoroge',
      role: 'Managing Partner',
      qual: 'LL.B (Hons), Dip. KSL',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Sarah Wambui',
      role: 'Senior Associate',
      qual: 'LL.B (Hons), LLM',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'David Omondi',
      role: 'Associate',
      qual: 'LL.B (Hons), Dip. KSL',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Janet Musyoka',
      role: 'Legal Assistant',
      qual: 'LL.B (Hons)',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="text-center mb-16">
        <span className="text-gold font-bold tracking-widest text-sm uppercase">Our People</span>
        <h2 className="text-3xl lg:text-5xl text-navy mt-4">Professional Legal Minds</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-6 font-sans">
          Our team consists of highly qualified legal professionals dedicated to excellence and client success.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-gray-100">
              <img 
                src={m.image} 
                alt={m.name} 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <a href="#" className="p-2 bg-white text-navy hover:bg-gold hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 bg-white text-navy hover:bg-gold hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <h4 className="text-xl text-navy mb-1">{m.name}</h4>
            <p className="text-gold font-bold text-sm uppercase tracking-wider mb-2">{m.role}</p>
            <p className="text-xs text-gray-400 font-sans">{m.qual}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};