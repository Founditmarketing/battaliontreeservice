import React from 'react';
import About from '../components/About';
import CallToAction from '../components/CallToAction';
import Stats from '../components/Stats';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-darker flex flex-col font-sans pt-20">
      {/* Secondary Hero Section (Template) */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 flex items-center overflow-hidden border-b border-white/5">
        {/* Background Image with Slow Pan */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear hover:scale-105"
          style={{ backgroundImage: 'url("/services/battaliontreetrimming.jpeg")' }}
        ></div>
        
        {/* Consistent Dark Overlay, slightly darker on left */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-darker/80 to-brand-darker/50"></div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col max-w-4xl animate-slide-up-reveal">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-brand-red"></div>
              <span className="text-brand-red font-bold uppercase tracking-widest text-sm md:text-base">Our Story</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-widest font-sans leading-none mb-4">
              ABOUT <span className="text-brand-red">US</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium tracking-wide">
              Rooted in precision. Driven by excellence.
            </p>
          </div>
        </div>
        
        {/* Decorative Lines */}
        <div className="absolute top-0 right-10 w-[1px] h-full bg-white/5 z-0"></div>
        <div className="absolute top-0 right-32 w-[1px] h-full bg-white/5 z-0"></div>
      </section>

      {/* Main Body Content (Reusing About component with button hidden) */}
      <About showButton={false} hideBackgroundTitle={true} />

      {/* Stats Section */}
      <Stats />

      {/* Global Call To Action */}
      <CallToAction />
    </div>
  );
}
