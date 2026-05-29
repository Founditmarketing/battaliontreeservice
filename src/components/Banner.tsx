import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function Banner() {
  const trustFacts = [
    "7+ Years Experience",
    "Veteran Owned & Operated",
    "Fully Licensed & Insured",
    "24/7 Emergency Service",
    "1,000+ Projects Completed",
    "Free Estimates",
    "100% Satisfaction Rate"
  ];

  const trustItems = (
    <>
      {trustFacts.map((fact, index) => (
        <div key={index} className="flex items-center shrink-0 group/item cursor-default">
          <div className="flex items-center gap-3 text-lg font-bold tracking-widest whitespace-nowrap text-white uppercase transition-colors duration-500">
            <ShieldCheck className="w-6 h-6 text-white group-hover/item:scale-125 transition-transform duration-500" />
            <span className="group-hover/item:text-brand-dark transition-colors duration-500">{fact}</span>
          </div>
          <div className="w-12 md:w-20 h-[2px] bg-white/30 mx-6 md:mx-10"></div>
        </div>
      ))}
    </>
  );

  return (
    <section className="bg-brand-red py-4 overflow-hidden shadow-2xl relative">
      {/* Line Embellishments (Horizontal Only) */}
      <div className="absolute inset-2 pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></div>
      </div>
      
      {/* Scrolling container */}
      <div className="flex overflow-hidden group w-full relative z-10 py-1">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] shrink-0 items-center">
          {trustItems}
        </div>
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] shrink-0 items-center" aria-hidden="true">
          {trustItems}
        </div>
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] shrink-0 items-center" aria-hidden="true">
          {trustItems}
        </div>
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] shrink-0 items-center" aria-hidden="true">
          {trustItems}
        </div>
      </div>
    </section>
  );
}
