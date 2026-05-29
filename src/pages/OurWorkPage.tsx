import React, { useState, useEffect } from 'react';
import CallToAction from '../components/CallToAction';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const projects = [
  { image: '/battaliontreeimage2.webp' },
  { image: '/battaliontreeimage3.webp' },
  { image: '/battaliontreeimage4.webp' },
  { image: '/battaliontreeimage5.webp' },
  { image: '/battaliontreeimage6.webp' },
  { image: '/battalliontreeimage1.jpg' },
  { image: '/services/battaliontreetrimming.jpeg' },
  { image: '/services/battalionstumpgrinding.jpeg' },
  { image: '/services/battalionemergencyservice.jpeg' },
  { image: '/services/battalionlotclearing.jpeg' },
  { image: '/services/battaliontreeremoval.jpeg' },
  { image: '/battalionaboutimage.jpeg' },
];

export default function OurWorkPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev! + 1) % projects.length);
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev! - 1 + projects.length) % projects.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-brand-darker flex flex-col font-sans pt-20">
      {/* Hero Section (Matching About/Service Pages) */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 flex items-center overflow-hidden border-b border-white/5">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear hover:scale-105"
          style={{ backgroundImage: 'url("/services/battalionstumpgrinding.jpeg")' }}
        ></div>
        
        {/* Consistent Dark Overlay, slightly darker on left */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-darker/80 to-brand-darker/50"></div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col max-w-4xl animate-slide-up-reveal">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-brand-red"></div>
              <span className="text-brand-red font-bold uppercase tracking-widest text-sm md:text-base">Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-widest font-sans leading-none mb-4">
              OUR <span className="text-brand-red">WORK</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium tracking-wide">
              A visual showcase of precision, safety, and excellence in the field.
            </p>
          </div>
        </div>
        
        {/* Decorative Lines */}
        <div className="absolute top-0 right-10 w-[1px] h-full bg-white/5 z-0"></div>
        <div className="absolute top-0 right-32 w-[1px] h-full bg-white/5 z-0"></div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-brand-dark p-6 md:p-12 lg:p-16 xl:p-24 relative overflow-hidden">
        <div className="w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedIndex(i)}
                className="group relative aspect-square w-full overflow-hidden bg-brand-darker cursor-pointer border border-white/5 shadow-xl"
              >
                <img 
                  src={project.image} 
                  alt={`Project ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-700 z-10 flex items-center justify-center">
                  <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100" />
                </div>
                
                {/* Line Embellishments & Hover Effect (Matches Homepage Gallery) */}
                <div className="absolute inset-6 z-20 pointer-events-none transition-all duration-500 group-hover:inset-4">
                  <div className="absolute inset-0 border border-transparent transition-colors duration-500"></div>
                  <div className="absolute top-0 left-0 h-[1px] w-0 bg-brand-red group-hover:w-full transition-all duration-700 ease-out"></div>
                  <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-brand-red group-hover:w-full transition-all duration-700 ease-out"></div>
                  <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-brand-red group-hover:h-full transition-all duration-700 ease-out"></div>
                  <div className="absolute top-0 right-0 w-[1px] h-0 bg-brand-red group-hover:h-full transition-all duration-700 ease-out"></div>
                  <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/30 group-hover:border-brand-red group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                  <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/30 group-hover:border-brand-red group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                  <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/30 group-hover:border-brand-red group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                  <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/30 group-hover:border-brand-red group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-[110]"
          >
            <X className="w-10 h-10" />
          </button>
          
          <button 
            onClick={() => setSelectedIndex((prev) => (prev! - 1 + projects.length) % projects.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 hidden sm:block z-[110] hover:scale-110"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          
          <img 
            src={projects[selectedIndex].image} 
            alt={`Project ${selectedIndex + 1}`}
            className="max-w-[95vw] max-h-[90vh] object-contain relative z-[100] shadow-2xl"
          />

          <button 
            onClick={() => setSelectedIndex((prev) => (prev! + 1) % projects.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 hidden sm:block z-[110] hover:scale-110"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
          
          {/* Mobile controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-12 sm:hidden z-[110]">
            <button 
              onClick={() => setSelectedIndex((prev) => (prev! - 1 + projects.length) % projects.length)}
              className="text-white/50 hover:text-white transition-colors p-4 bg-black/50 rounded-full backdrop-blur-md"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={() => setSelectedIndex((prev) => (prev! + 1) % projects.length)}
              className="text-white/50 hover:text-white transition-colors p-4 bg-black/50 rounded-full backdrop-blur-md"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}

      {/* Global Call To Action */}
      <CallToAction />
    </div>
  );
}
