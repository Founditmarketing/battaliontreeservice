import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-darker relative overflow-hidden">
      {/* Background styling similar to hero/about */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-brand-red/5 blur-[150px] pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 pt-10">
        <div className="max-w-4xl mx-auto mb-16 text-center animate-slide-up-reveal">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-widest uppercase mb-6 font-sans">
            Get In <span className="text-brand-red">Touch</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Ready to upgrade your property? Contact us today for a free estimate or to schedule your tree service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="bg-brand-dark/50 p-8 md:p-12 border border-white/10 relative animate-slide-up-reveal" style={{ animationDelay: '150ms', opacity: 0 }}>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-red"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-red"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-red"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-red"></div>
            
            <h2 className="text-2xl font-bold text-white mb-8 tracking-wider">SEND A MESSAGE</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full bg-brand-darker border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Phone</label>
                  <input type="tel" className="w-full bg-brand-darker border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="(409) 555-0123" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Email Address</label>
                <input type="email" className="w-full bg-brand-darker border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Service Needed</label>
                <select className="w-full bg-brand-darker border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors appearance-none">
                  <option>Tree Removal</option>
                  <option>Tree Trimming</option>
                  <option>Stump Grinding</option>
                  <option>Emergency Service</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full bg-brand-darker border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-brand-red text-white font-bold uppercase tracking-widest py-4 hover:bg-white hover:text-brand-red transition-colors duration-300">
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center animate-slide-up-reveal" style={{ animationDelay: '300ms', opacity: 0 }}>
            <h2 className="text-3xl font-bold text-white mb-10 tracking-widest uppercase">
              Contact <span className="text-brand-red">Information</span>
            </h2>
            
            <div className="space-y-8">
              <a href="tel:4096735443" className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-dark flex items-center justify-center border border-white/10 group-hover:border-brand-red transition-colors shrink-0">
                  <Phone className="w-6 h-6 text-brand-red group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-white font-bold tracking-wider mb-1 uppercase">Call Us Directly</h3>
                  <p className="text-gray-400 text-lg group-hover:text-white transition-colors">(409) 673-5443</p>
                </div>
              </a>

              <a href="mailto:Jimmypirtle30@aol.com" className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-dark flex items-center justify-center border border-white/10 group-hover:border-brand-red transition-colors shrink-0">
                  <Mail className="w-6 h-6 text-brand-red group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-white font-bold tracking-wider mb-1 uppercase">Email Us</h3>
                  <p className="text-gray-400 text-lg group-hover:text-white transition-colors truncate">Jimmypirtle30@aol.com</p>
                </div>
              </a>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-dark flex items-center justify-center border border-white/10 group-hover:border-brand-red transition-colors shrink-0">
                  <MapPin className="w-6 h-6 text-brand-red group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-white font-bold tracking-wider mb-1 uppercase">Location</h3>
                  <p className="text-gray-400 text-lg group-hover:text-white transition-colors">4029 Glaze Rd.,<br/>Kountze, TX 77625</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-gray-400 mb-6 uppercase tracking-wider text-sm font-medium">Verified Business</p>
              <a href="https://www.bbb.org/us/tx/kountze/profile/tree-service/battalion-tree-service-0845-90079879" target="_blank" rel="noreferrer" className="inline-block hover:scale-105 transition-transform duration-300 bg-white/5 p-4 border border-white/10">
                <img src="/bbblogo.png" alt="Better Business Bureau" className="h-16 w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
