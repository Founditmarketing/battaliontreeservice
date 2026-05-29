import React, { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 7, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: ' Stars', label: 'Customer Rating' },
  { value: 100, suffix: '%', label: 'Safety Record' },
  { value: 24, suffix: '/7', label: 'Emergency Response' },
];

function CountUpNumber({ end, duration = 2000 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeProgress * end));
            
            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate);
            }
          };
          animationFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(node);
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [end, duration]);
  
  return <span ref={nodeRef}>{count}</span>;
}

export default function Stats() {
  return (
    <section className="bg-brand-red py-12 relative z-20 shadow-xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="py-6 md:py-16 px-3 md:px-6 text-center bg-white/5 hover:bg-white/10 transition-colors relative group rounded-sm overflow-hidden">
              {/* Line Embellishments & Hover Effect */}
              <div className="absolute inset-4 z-20 pointer-events-none transition-all duration-500 group-hover:inset-2">
                <div className="absolute top-0 left-0 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-700 ease-out"></div>
                <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-700 ease-out"></div>
                <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-white group-hover:h-full transition-all duration-700 ease-out"></div>
                <div className="absolute top-0 right-0 w-[1px] h-0 bg-white group-hover:h-full transition-all duration-700 ease-out"></div>
                <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-white/40 group-hover:border-white group-hover:w-6 group-hover:h-6 transition-all duration-500"></div>
                <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-white/40 group-hover:border-white group-hover:w-6 group-hover:h-6 transition-all duration-500"></div>
                <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-white/40 group-hover:border-white group-hover:w-6 group-hover:h-6 transition-all duration-500"></div>
                <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-white/40 group-hover:border-white group-hover:w-6 group-hover:h-6 transition-all duration-500"></div>
              </div>
              <h4 className="text-3xl md:text-5xl font-bold text-white mb-2 font-sans tracking-tight">
                <CountUpNumber end={stat.value} />{stat.suffix}
              </h4>
              <p className="text-white/80 text-xs md:text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
