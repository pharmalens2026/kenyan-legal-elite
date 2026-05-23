import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-serif font-bold leading-none text-white">
                TOBIKO NJOROGE
              </span>
              <span className="text-[12px] tracking-[0.2em] font-sans text-gold">
                & COMPANY ADVOCATES
              </span>
            </div>
            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8">
              A premier corporate law firm in Nairobi, providing sophisticated legal solutions with integrity and excellence since 2009.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white/50"></div> {/* Replace with actual icons if needed */}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 border-b border-gold w-fit pb-2">Practice Areas</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-sans">
              <li><a href="#" className="hover:text-gold transition-colors">Corporate & Commercial Law</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Conveyancing & Real Estate</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Litigation & Dispute Resolution</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Employment & Labour Law</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Family & Succession Law</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 border-b border-gold w-fit pb-2">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-sans">
              <li><a href="#" className="hover:text-gold transition-colors">About Our Firm</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Meet Our Team</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Legal Insights</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 border-b border-gold w-fit pb-2">Newsletter</h4>
            <p className="text-gray-400 text-sm font-sans mb-6">Subscribe to our monthly legal updates and compliance alerts.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-none px-4 py-2 w-full focus:outline-none focus:border-gold font-sans"
              />
              <button className="bg-gold text-navy font-bold px-4 py-2 hover:bg-gold/90 transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-sans">
            © {new Date().getFullYear()} Tobiko Njoroge & Company Advocates. All rights reserved.
          </p>
          <div className="flex space-x-8 text-gray-500 text-xs font-sans">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Legal Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};