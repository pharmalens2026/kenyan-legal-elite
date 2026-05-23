import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Smartphone, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry. Our legal team will contact you shortly.");
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#C8A96B] font-bold tracking-widest text-sm uppercase">Contact Us</span>
            <h2 className="text-3xl lg:text-5xl text-[#0B1F3A] mt-4 mb-2 font-serif">Tobiko Njoroge & Co. Advocates</h2>
            <p className="text-gray-500 mb-10 font-sans">Professional legal counsel and representation in the heart of Nairobi.</p>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#F5F5F5] text-[#C8A96B] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-[#0B1F3A] mb-1">Office Location</h5>
                  <div className="text-gray-600 font-sans leading-relaxed">
                    <p>View Park Towers</p>
                    <p>Monrovia Street/ Utalii Lane, 11th Floor</p>
                    <p>P.O Box 35260 - 00200</p>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F5F5F5] text-[#C8A96B] shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0B1F3A] mb-1">Telephone</h5>
                    <div className="text-gray-600 font-sans space-y-1">
                      <p>+254 020 226335</p>
                      <p>020 2249505</p>
                      <p>020 2248511</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F5F5F5] text-[#C8A96B] shrink-0">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0B1F3A] mb-1">Mobile Phone</h5>
                    <p className="text-gray-600 font-sans">0715 800 338</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F5F5F5] text-[#C8A96B] shrink-0">
                    <Printer size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0B1F3A] mb-1">Fax</h5>
                    <p className="text-gray-600 font-sans">+254 020 2240534</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F5F5F5] text-[#C8A96B] shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0B1F3A] mb-1">E-mail</h5>
                    <p className="text-gray-600 font-sans break-all">info@tobikonjorogeadvocates.co.ke</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#F5F5F5] text-[#C8A96B] shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-[#0B1F3A] mb-1">Working Hours</h5>
                  <p className="text-gray-600 font-sans">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600 font-sans">Sat: 9:00 AM - 1:00 PM (By Appointment)</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#0B1F3A] text-white p-8 relative overflow-hidden">
              <h4 className="text-2xl mb-4 font-serif">Urgent Consultation?</h4>
              <p className="text-gray-300 mb-6 font-sans">Chat with our legal assistant directly via WhatsApp for quick responses.</p>
              <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-none border-none px-6">
                <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
              </Button>
              <div className="absolute -right-10 -bottom-10 text-white/5 transform -rotate-12">
                <Scale size={160} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F5F5] p-8 lg:p-12 border-t-8 border-[#C8A96B]"
          >
            <h3 className="text-2xl text-[#0B1F3A] mb-8 font-serif">Online Inquiry Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B1F3A] uppercase tracking-widest">Full Name</label>
                  <Input placeholder="John Doe" className="bg-white border-none rounded-none h-12" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B1F3A] uppercase tracking-widest">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-white border-none rounded-none h-12" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0B1F3A] uppercase tracking-widest">Case Category</label>
                <select className="w-full bg-white border-none rounded-none h-12 px-3 focus:ring-1 focus:ring-[#C8A96B] outline-none text-gray-500 font-sans">
                  <option>Corporate Law</option>
                  <option>Conveyancing & Real Estate</option>
                  <option>Litigation</option>
                  <option>Family Law</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0B1F3A] uppercase tracking-widest">Message</label>
                <Textarea placeholder="Please provide brief details of your inquiry..." className="bg-white border-none rounded-none min-h-[150px]" required />
              </div>

              <Button type="submit" className="w-full bg-[#0B1F3A] hover:bg-[#0B1F3A]/90 text-white font-bold h-14 rounded-none uppercase tracking-widest">
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Scale = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
  </svg>
);