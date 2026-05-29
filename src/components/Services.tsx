import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Tree Removal',
    description: 'Safe removal of dead, diseased, or hazardous trees utilizing advanced rigging and safety protocols.',
    image: '/battaliontreeimage2.webp',
    path: '/services/tree-removal'
  },
  {
    title: 'Tree Trimming & Pruning',
    description: 'Shaping, thinning, and height reduction for health, appearance, and structural integrity.',
    image: '/services/battaliontreetrimming.jpeg',
    path: '/services/tree-trimming'
  },
  {
    title: 'Stump Grinding',
    description: 'Complete stump grinding and root removal to clear space for new landscaping or construction.',
    image: '/services/battalionstumpgrinding.jpeg',
    path: '/services/stump-grinding'
  },
  {
    title: 'Emergency Service',
    description: '24/7 storm damage response and dangerous tree takedowns to protect your property.',
    image: '/services/battalionemergencyservice.jpeg',
    path: '/services/emergency-service'
  },
  {
    title: 'Lot Clearing',
    description: 'Comprehensive land preparation for construction, yard expansion, or complete brush overhaul.',
    image: '/services/battalionlotclearing.jpeg',
    path: '/services/lot-clearing'
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-brand-darker py-24 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 relative">
        {/* Background text solid effect */}
        <div className="absolute -top-2 md:-top-16 left-6 pointer-events-none opacity-[0.02]">
          <h2 className="text-5xl sm:text-6xl md:text-[140px] font-bold text-white uppercase tracking-wider whitespace-nowrap">
            EXPERTISE
          </h2>
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8 pt-8">
          <div className="flex">
            <div className="hidden md:block w-[2px] bg-brand-red mr-8 h-24"></div>
            <div>
              <p className="text-white font-bold tracking-widest text-sm mb-2 uppercase">Core Offerings</p>
              <h2 className="text-5xl md:text-6xl font-sans font-bold text-brand-red uppercase tracking-wide">
                OUR <span className="text-white normal-case font-sans">SERVICES</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Services Carousel */}
      <div className="relative w-full">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-6 md:px-12 xl:px-24 pb-12 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <Link 
              to={service.path}
              key={index}
              className="relative min-w-[280px] md:min-w-[400px] lg:min-w-[450px] h-[380px] md:h-[500px] group cursor-pointer snap-center shrink-0 overflow-hidden block"
            >
              <div className="absolute inset-0 bg-black/40 md:group-hover:bg-black/10 transition-all duration-700 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/95 via-brand-darker/50 to-transparent z-10"></div>
              
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-100 md:group-hover:scale-110"
              />

              {/* Line Embellishments & Hover Effect */}
              <div className="absolute inset-6 z-20 pointer-events-none transition-all duration-500 md:group-hover:inset-4">
                {/* Subtle base border */}
                <div className="absolute inset-0 border border-white/10 md:group-hover:border-transparent transition-colors duration-500"></div>
                
                {/* Animated Line Work */}
                <div className="absolute top-0 left-0 h-[1px] w-0 bg-brand-red md:group-hover:w-full transition-all duration-700 ease-out"></div>
                <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-brand-red md:group-hover:w-full transition-all duration-700 ease-out"></div>
                <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-brand-red md:group-hover:h-full transition-all duration-700 ease-out"></div>
                <div className="absolute top-0 right-0 w-[1px] h-0 bg-brand-red md:group-hover:h-full transition-all duration-700 ease-out"></div>

                {/* Corner Accents */}
                <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/30 md:group-hover:border-brand-red md:group-hover:w-8 md:group-hover:h-8 transition-all duration-500"></div>
                <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/30 md:group-hover:border-brand-red md:group-hover:w-8 md:group-hover:h-8 transition-all duration-500"></div>
                <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/30 md:group-hover:border-brand-red md:group-hover:w-8 md:group-hover:h-8 transition-all duration-500"></div>
                <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/30 md:group-hover:border-brand-red md:group-hover:w-8 md:group-hover:h-8 transition-all duration-500"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 p-6 z-30 transition-all duration-500 md:group-hover:bottom-4 md:group-hover:left-4 md:group-hover:right-4">
                <div className="flex items-center gap-3 mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                  <div className="w-8 h-[1px] bg-brand-red"></div>
                  <span className="text-brand-red text-xs font-bold uppercase tracking-widest">Service</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 leading-tight md:group-hover:text-brand-red transition-colors duration-500">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Carousel Controls */}
        <div className="container mx-auto px-6 flex justify-center items-center gap-6 mt-8">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 flex items-center justify-center bg-brand-dark hover:bg-brand-red text-white transition-colors border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-3">
            {services.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/20'}`}></div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 flex items-center justify-center bg-brand-dark hover:bg-brand-red text-white transition-colors border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
