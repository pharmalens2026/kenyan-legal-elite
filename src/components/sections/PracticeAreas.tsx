import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  ShoppingCart, 
  Scale, 
  Leaf, 
  Plane, 
  ShieldCheck, 
  Briefcase, 
  FileText, 
  Landmark,
  ChevronRight,
  LucideIcon
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PracticeArea {
  title: string;
  Icon: LucideIcon;
  description: string;
  content: string;
}

const practices: PracticeArea[] = [
  {
    title: 'Land Law And Conveyancing',
    Icon: Home,
    description: 'Expertise in property law, transfers, and real estate transactions.',
    content: 'Our land law and conveyancing department handles all aspects of property transactions. This includes conducting due diligence, preparation and registration of transfers, charges, leases, and sectional title agreements. We ensure that our clients interests are protected in every real estate dealing, from residential purchases to complex commercial developments.',
  },
  {
    title: 'Procurement Law',
    Icon: ShoppingCart,
    description: 'Advisory on public and private procurement processes and disputes.',
    content: 'We provide comprehensive legal advice on the Public Procurement and Asset Disposal Act and its regulations. Our services include advising on tender documentation, representing clients in procurement appeals before the Administrative Review Board, and ensuring compliance with statutory procurement requirements for both public entities and private contractors.',
  },
  {
    title: 'Constitutional And Administrative Law And Practice',
    Icon: Scale,
    description: 'Guidance on constitutional rights and administrative justice.',
    content: 'We specialize in constitutional litigation, judicial reviews, and administrative law matters. Our team represents clients in asserting their fundamental rights and freedoms, challenging administrative decisions that are procedural unfair or irrational, and advising on statutory interpretation and governance frameworks.',
  },
  {
    title: 'Environmental Law And Practice',
    Icon: Leaf,
    description: 'Legal support for environmental compliance and sustainability.',
    content: 'Our environmental law practice assists clients in navigating the complex regulatory landscape of environmental protection. We advise on environmental impact assessments, waste management regulations, climate change policies, and represent clients in environmental disputes before the National Environment Tribunal and the Environment and Land Court.',
  },
  {
    title: 'Laws Dealing With Administration, Mgt & Operation Of Airports',
    Icon: Plane,
    description: 'Specialized legal services for aviation and airport management.',
    content: 'A unique niche in our practice involves the legalities of airport operations and management. We provide counsel on civil aviation regulations, ground handling agreements, airport safety and security standards, and the management of airport infrastructure. Our team stays abreast of international aviation standards to ensure local compliance.',
  },
  {
    title: 'Regulatory Laws And Practices',
    Icon: ShieldCheck,
    description: 'Assisting businesses in meeting regulatory and statutory obligations.',
    content: 'We provide strategic advice on regulatory compliance across various industries. This includes licensing, statutory reporting, data protection, consumer protection laws, and representing clients before regulatory bodies. We help businesses minimize legal risks by staying compliant with the ever-evolving statutory requirements.',
  },
  {
    title: 'Labour Law',
    Icon: Briefcase,
    description: 'Comprehensive solutions for employment and industrial relations.',
    content: 'Our labour law department handles all matters related to the employer-employee relationship. We draft employment contracts and HR policies, advise on terminations and redundancies, represent clients in industrial disputes at the Employment and Labour Relations Court, and provide guidance on trade union relations and collective bargaining agreements.',
  },
  {
    title: 'Probate And Administration',
    Icon: FileText,
    description: 'Managing estates, wills, and succession matters with sensitivity.',
    content: 'We assist clients in the administration of estates, including the preparation of wills, applications for grants of probate, and letters of administration. Our team handles succession disputes with sensitivity and professionalism, ensuring that the wishes of the deceased are respected and assets are distributed according to the law.',
  },
  {
    title: 'Banking Law And Practice',
    Icon: Landmark,
    description: 'Legal advice for financial institutions and banking transactions.',
    content: 'Our banking and finance practice serves both financial institutions and corporate borrowers. We provide expertise in perfection of securities, loan syndication, debt restructuring, and regulatory compliance for banks. We also represent clients in banking litigation and advise on electronic banking and fintech legal frameworks.',
  },
];

export const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="section-padding bg-[#F5F5F5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C8A96B] font-bold tracking-widest text-sm uppercase"
          >
            Areas of Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl text-[#0B1F3A] mt-4 font-serif"
          >
            Our Practice Areas
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#333333] max-w-2xl mx-auto mt-6 font-sans"
          >
            Tobiko Njoroge & Company Advocates provides specialized legal services across multiple sectors with precision, integrity, and strategic insight.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 group rounded-none border-t-4 border-t-[#C8A96B] flex flex-col">
                <CardHeader className="pb-4">
                  <div className="mb-6 p-3 bg-[#F5F5F5] w-fit rounded-lg group-hover:bg-[#0B1F3A] transition-colors duration-300">
                    <p.Icon className="w-8 h-8 text-[#C8A96B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-serif text-[#0B1F3A] line-clamp-2 min-h-[3.5rem]">
                    {p.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm mb-6 flex-grow font-sans">
                    {p.description}
                  </p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-fit border-[#C8A96B] text-[#C8A96B] hover:bg-[#C8A96B] hover:text-white transition-all duration-300 rounded-none group/btn"
                      >
                        Learn More
                        <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] bg-white border-t-4 border-t-[#C8A96B]">
                      <DialogHeader>
                        <div className="mb-4">
                          <p.Icon className="w-12 h-12 text-[#C8A96B]" />
                        </div>
                        <DialogTitle className="text-2xl font-serif text-[#0B1F3A] mb-4 text-left">
                          {p.title}
                        </DialogTitle>
                        <DialogDescription className="text-base text-gray-700 leading-relaxed font-sans text-left">
                          {p.content}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-8 pt-6 border-t border-gray-100 flex justify-start">
                        <Button 
                          className="bg-[#0B1F3A] text-white hover:bg-[#1a3150] rounded-none"
                          onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          Book a Consultation
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};