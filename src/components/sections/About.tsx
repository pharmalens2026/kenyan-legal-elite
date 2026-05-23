import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ShieldCheck, Handshake, Award, Users } from 'lucide-react';

export const About = () => {
  const values = [
    { icon: <ShieldCheck className="text-gold" />, title: 'Integrity', desc: 'Unwavering commitment to ethical legal practice.' },
    { icon: <Award className="text-gold" />, title: 'Excellence', desc: 'Precision and quality in every case we handle.' },
    { icon: <Scale className="text-gold" />, title: 'Confidentiality', desc: 'Your privacy and trust are our highest priorities.' },
    { icon: <Handshake className="text-gold" />, title: 'Professionalism', desc: 'Global standards of corporate legal conduct.' },
    { icon: <Users className="text-gold" />, title: 'Client Commitment', desc: 'Personalized service tailored to your needs.' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-bold tracking-widest text-sm uppercase">About the Firm</span>
          <h2 className="text-3xl lg:text-5xl text-navy mt-4 mb-8">A Legacy of Legal Precision and Client Trust</h2>
          <div className="space-y-6 text-gray-700 font-sans leading-relaxed">
            <p>
              Tobiko Njoroge & Company Advocates is a modern, full-service law firm based in Nairobi, Kenya. We have established ourselves as a cornerstone of corporate excellence, providing sophisticated legal solutions to a diverse clientele including multinationals, SMEs, and private individuals.
            </p>
            <p>
              Our approach combines deep legal expertise with a thorough understanding of the Kenyan and international business landscapes. We believe in proactive legal counsel that minimizes risk and maximizes opportunities for our clients.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="border-l-4 border-gold pl-4">
              <h4 className="text-3xl font-bold text-navy">15+</h4>
              <p className="text-sm text-gray-500 uppercase tracking-tighter">Years of Experience</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <h4 className="text-3xl font-bold text-navy">500+</h4>
              <p className="text-sm text-gray-500 uppercase tracking-tighter">Clients Represented</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square bg-navy relative overflow-hidden">
             <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e9466e17-97f8-4d7f-a5b8-44c3c1d3f5fd/legal-consultation-meeting-1a2b6f1c-1778667207617.webp" 
              alt="Lawyers in consultation" 
              className="object-cover w-full h-full opacity-80"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-gold p-10 hidden lg:block">
            <p className="text-navy font-serif text-2xl font-bold italic">"Excellence in every detail."</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-32">
        <h3 className="text-center text-navy text-2xl lg:text-4xl mb-16">Our Core Values</h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="p-4 rounded-full border border-gold/20 bg-gold/5">
                  {v.icon}
                </div>
              </div>
              <h5 className="text-navy font-bold mb-3">{v.title}</h5>
              <p className="text-sm text-gray-500 font-sans">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};