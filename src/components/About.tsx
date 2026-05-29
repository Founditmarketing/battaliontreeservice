import React from 'react';
import { Link } from 'react-router-dom';

export default function About({ showButton = true, hideBackgroundTitle = false }: { showButton?: boolean; hideBackgroundTitle?: boolean }) {
  return (
    <section className="bg-brand-dark py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Background text effect */}
        {!hideBackgroundTitle && (
          <div className="absolute -top-8 md:-top-16 left-6 pointer-events-none opacity-[0.02] z-0">
            <h2 className="text-5xl sm:text-6xl md:text-[140px] font-bold text-white uppercase tracking-wider whitespace-nowrap">
              EXPERIENCE
            </h2>
          </div>
        )}
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 relative z-10">
          
          {/* Left Text Block */}
          <div className="lg:w-1/2 flex relative">
            <div className="hidden md:block w-[2px] bg-brand-red mr-8 lg:mr-12 shrink-0 self-stretch mt-2 mb-2"></div>
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                TREE CARE AT <span className="text-brand-red">THE HIGHEST LEVEL</span>
              </h2>
              
              <h3 className="text-base md:text-2xl text-white font-medium mb-6 leading-relaxed">
                Battalion Tree Service is a local contractor driven to deliver tree care projects at the highest level of safety and precision.
              </h3>
              
              <div className="flex flex-col gap-2 mb-6">
                <span className="text-brand-red font-bold uppercase tracking-wider text-xs md:text-sm">Veteran Owned & operated since 2019</span>
                <span className="text-brand-red font-bold uppercase tracking-wider text-xs md:text-sm">Owner: Jimmy Pirtle</span>
              </div>
              
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-8">
                Since our founding, Battalion has successfully delivered complex and high-risk tree removal projects across the region. We have built a reputation for excellence that is rooted in our commitment to fostering long-term relationships with our clients and communities. We believe that the foundation of any successful project lies in transparent business practices, open communication, and a collaborative approach. Our adaptive company culture allows us to remain flexible and responsive to the evolving needs of the industry, ensuring that we consistently exceed expectations while maintaining the highest standards of safety and integrity.
              </p>
              
              {showButton && (
                <Link to="/about" className="relative group bg-brand-red border border-brand-red text-white text-sm font-bold uppercase tracking-wider py-4 px-8 overflow-hidden shadow-lg shadow-brand-red/20 mt-4 inline-block text-center w-max">
                  <span className="relative z-10 group-hover:text-brand-red transition-colors duration-500">LEARN MORE ABOUT US</span>
                  <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                  <div className="absolute inset-0 pointer-events-none z-20">
                     <div className="absolute top-0 left-0 h-[1px] w-0 bg-brand-red group-hover:w-full transition-all duration-700 ease-out"></div>
                     <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-brand-red group-hover:w-full transition-all duration-700 ease-out"></div>
                     <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-brand-red group-hover:h-full transition-all duration-700 ease-out"></div>
                     <div className="absolute top-0 right-0 w-[1px] h-0 bg-brand-red group-hover:h-full transition-all duration-700 ease-out"></div>
                     <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-transparent group-hover:border-brand-red group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                     <div className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-transparent group-hover:border-brand-red group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                     <div className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-transparent group-hover:border-brand-red group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                     <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-transparent group-hover:border-brand-red group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                  </div>
                </Link>
              )}
            </div>
          </div>
          
          {/* Right Image Block */}
          <div className="lg:w-1/2 relative mt-4 lg:mt-0 group cursor-default p-4">
            {/* The outer red border with spacing */}
            <div className="absolute inset-0 border border-brand-red/40 pointer-events-none"></div>
            
            <div className="relative z-10 overflow-hidden bg-brand-darker h-full">
              <img 
                src="/battalionaboutimage.jpeg" 
                alt="Tree removal expert in safety gear" 
                className="w-full aspect-square md:aspect-auto md:h-[600px] object-cover object-top shadow-2xl transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              
              {/* Line Embellishments & Hover Effect */}
              <div className="absolute inset-6 z-20 pointer-events-none transition-all duration-500 group-hover:inset-4">
                <div className="absolute inset-0 border border-white/10 group-hover:border-transparent transition-colors duration-500"></div>
                <div className="absolute top-0 left-0 h-[1px] w-0 bg-brand-red group-hover:w-full transition-all duration-700 ease-out"></div>
                <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-brand-red group-hover:w-full transition-all duration-700 ease-out"></div>
                <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-brand-red group-hover:h-full transition-all duration-700 ease-out"></div>
                <div className="absolute top-0 right-0 w-[1px] h-0 bg-brand-red group-hover:h-full transition-all duration-700 ease-out"></div>
                <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t-2 border-l-2 border-white/30 group-hover:border-brand-red group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
                <div className="absolute -top-[1px] -right-[1px] w-6 h-6 border-t-2 border-r-2 border-white/30 group-hover:border-brand-red group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
                <div className="absolute -bottom-[1px] -left-[1px] w-6 h-6 border-b-2 border-l-2 border-white/30 group-hover:border-brand-red group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
                <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-b-2 border-r-2 border-white/30 group-hover:border-brand-red group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
