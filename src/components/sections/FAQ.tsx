import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      q: "What documents do I need for property transfer in Kenya?",
      a: "Typical requirements include the original title, KRA PIN certificates of both buyer and seller, ID/Passport copies, land rent and rates clearance certificates, and a valuation report."
    },
    {
      q: "How long does it take to register a new company?",
      a: "With the modern BRS system, company registration in Kenya typically takes 2-5 working days once all documentation is correctly submitted."
    },
    {
      q: "Do you offer online legal consultations?",
      a: "Yes, we offer virtual consultations via Zoom, Microsoft Teams, or Google Meet for clients who cannot visit our Nairobi offices."
    },
    {
      q: "What is the process for trademark registration?",
      a: "The process involves a name search, application submission to KIPI, examination, advertisement in the Industrial Property Journal, and finally registration if no oppositions are raised."
    },
    {
      q: "How are legal fees calculated?",
      a: "Fees are generally governed by the Advocates Remuneration Order, but we also offer fixed-fee arrangements for specific corporate and conveyancing tasks."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest text-sm uppercase">Common Questions</span>
          <h2 className="text-3xl lg:text-5xl text-navy mt-4">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-100 py-2">
              <AccordionTrigger className="text-navy font-serif text-lg lg:text-xl text-left hover:no-underline hover:text-gold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans leading-relaxed text-base pt-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};