import React from 'react';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

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
          <div className="bg-gradient-to-br from-brand-dark/90 to-brand-darker/95 p-8 md:p-12 border border-white/10 relative animate-slide-up-reveal shadow-2xl" style={{ animationDelay: '150ms', opacity: 0 }}>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-red"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-red"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-red"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-red"></div>
            
            <h2 className="text-2xl font-bold text-white mb-8 tracking-wider flex items-center gap-4">
              <span className="w-8 h-[1px] bg-brand-red"></span>
              SEND A MESSAGE
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs text-gray-400 mb-2 uppercase tracking-widest font-bold group-focus-within:text-brand-red transition-colors">Full Name</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 px-5 py-4 text-white focus:outline-none focus:border-brand-red focus:bg-white/5 transition-all duration-300" placeholder="John Doe" />
                </div>
                <div className="group">
                  <label className="block text-xs text-gray-400 mb-2 uppercase tracking-widest font-bold group-focus-within:text-brand-red transition-colors">Phone</label>
                  <input type="tel" className="w-full bg-black/40 border border-white/10 px-5 py-4 text-white focus:outline-none focus:border-brand-red focus:bg-white/5 transition-all duration-300" placeholder="(409) 555-0123" />
                </div>
              </div>
              <div className="group">
                <label className="block text-xs text-gray-400 mb-2 uppercase tracking-widest font-bold group-focus-within:text-brand-red transition-colors">Email Address</label>
                <input type="email" className="w-full bg-black/40 border border-white/10 px-5 py-4 text-white focus:outline-none focus:border-brand-red focus:bg-white/5 transition-all duration-300" placeholder="john@example.com" />
              </div>
              <div className="group relative">
                <label className="block text-xs text-gray-400 mb-2 uppercase tracking-widest font-bold group-focus-within:text-brand-red transition-colors">Service Needed</label>
                <select className="w-full bg-black/40 border border-white/10 px-5 py-4 text-white focus:outline-none focus:border-brand-red focus:bg-white/5 transition-all duration-300 appearance-none cursor-pointer">
                  <option className="bg-brand-darker">Tree Removal</option>
                  <option className="bg-brand-darker">Tree Trimming</option>
                  <option className="bg-brand-darker">Stump Grinding</option>
                  <option className="bg-brand-darker">Emergency Service</option>
                  <option className="bg-brand-darker">Other</option>
                </select>
                <div className="absolute right-5 top-[40px] pointer-events-none">
                  <ChevronDown className="w-5 h-5 text-gray-400 group-focus-within:text-brand-red transition-colors" />
                </div>
              </div>
              <div className="group">
                <label className="block text-xs text-gray-400 mb-2 uppercase tracking-widest font-bold group-focus-within:text-brand-red transition-colors">Message</label>
                <textarea rows={4} className="w-full bg-black/40 border border-white/10 px-5 py-4 text-white focus:outline-none focus:border-brand-red focus:bg-white/5 transition-all duration-300" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full relative group/btn bg-brand-red border border-brand-red text-white text-sm font-bold uppercase tracking-widest py-5 overflow-hidden transition-all mt-4">
                <span className="relative z-10 group-hover/btn:text-brand-red transition-colors duration-500">Submit Request</span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                <div className="absolute inset-0 pointer-events-none z-20">
                   <div className="absolute top-0 left-0 h-[1px] w-0 bg-brand-red group-hover/btn:w-full transition-all duration-700 ease-out"></div>
                   <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-brand-red group-hover/btn:w-full transition-all duration-700 ease-out"></div>
                   <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-brand-red group-hover/btn:h-full transition-all duration-700 ease-out"></div>
                   <div className="absolute top-0 right-0 w-[1px] h-0 bg-brand-red group-hover/btn:h-full transition-all duration-700 ease-out"></div>
                </div>
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
              <a href="https://www.bbb.org/us/tx/kountze/profile/tree-service/battalion-tree-service-0845-90079879" target="_blank" rel="noreferrer" className="inline-block hover:scale-105 transition-transform duration-300">
                <img src="/bbblogo.png" alt="Better Business Bureau" className="h-16 w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
