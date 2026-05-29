import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const projects = [
  { image: '/battaliontreeimage2.webp' },
  { image: '/battaliontreeimage5.webp' },
  { image: '/battaliontreeimage3.webp' },
  { image: '/battaliontreeimage6.webp' },
];

export default function OurWork() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Handle keyboard navigation for lightbox
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
    <section className="bg-brand-dark pt-24 pb-6 relative overflow-hidden">
      
      {/* Header Container (matches Services) */}
      <div className="container mx-auto px-6 mb-16 relative">
        {/* Background text effect */}
        <div className="absolute -top-8 md:-top-16 left-6 pointer-events-none opacity-[0.02] z-0">
          <h2 className="text-5xl sm:text-6xl md:text-[140px] font-bold text-white uppercase tracking-wider whitespace-nowrap">
            EXCELLENCE
          </h2>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
          <div className="flex">
            <div className="hidden md:block w-[2px] bg-brand-red mr-8 h-24"></div>
            <div>
              <span className="text-brand-red font-bold tracking-wider text-sm mb-2 block uppercase">Portfolio</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide">
                OUR WORK
              </h2>
            </div>
          </div>
          <Link to="/our-work" className="flex items-center gap-2 text-white hover:text-brand-red transition-colors font-bold tracking-wider uppercase text-sm group">
            VIEW GALLERY <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Gallery Container */}
      <div className="w-full px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1920px] mx-auto relative z-10">
          {projects.map((project, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedIndex(i)}
              className="group relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden bg-brand-darker cursor-pointer border border-white/5"
            >
              <img 
                src={project.image} 
                alt={`Project ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-700 z-10 flex items-center justify-center">
                <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100" />
              </div>
              
              {/* Line Embellishments & Hover Effect */}
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

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            onClick={() => setSelectedIndex((prev) => (prev! - 1 + projects.length) % projects.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 hidden sm:block z-50"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <img 
            src={projects[selectedIndex].image} 
            alt={`Project ${selectedIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain relative z-40"
          />

          <button 
            onClick={() => setSelectedIndex((prev) => (prev! + 1) % projects.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 hidden sm:block z-50"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          {/* Mobile controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-8 sm:hidden z-50">
            <button 
              onClick={() => setSelectedIndex((prev) => (prev! - 1 + projects.length) % projects.length)}
              className="text-white/50 hover:text-white transition-colors p-4"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={() => setSelectedIndex((prev) => (prev! + 1) % projects.length)}
              className="text-white/50 hover:text-white transition-colors p-4"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
