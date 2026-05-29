import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="relative py-24 md:py-32">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("/battaliontreeimage4.webp")',
        }}
      >
        <div className="absolute inset-0 bg-brand-dark/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
          READY TO ELEVATE<br/><span className="text-brand-red">YOUR LANDSCAPE?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Contact our team today for a free on-site consultation and estimate. Experience the highest standard of tree care and property transformation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white text-sm font-bold uppercase tracking-wider py-4 px-10 transition-colors shadow-lg shadow-brand-red/20 inline-block text-center">
            Request an Estimate
          </Link>
          <a href="tel:4096735443" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white text-sm font-bold uppercase tracking-wider py-4 px-10 transition-colors backdrop-blur-sm border border-white/10 inline-flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Call (409) 673-5443
          </a>
        </div>
      </div>
    </section>
  );
}
