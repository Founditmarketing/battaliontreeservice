import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ isFading }: { isFading: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start progress immediately after mount
    const timer = setTimeout(() => setProgress(100), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-brand-darker flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10 w-full">
        
        <div className="overflow-hidden pb-2">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-widest uppercase mb-0 font-sans text-gradient-white animate-high-end-slide">
              BATTALION
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold tracking-widest uppercase font-sans text-gradient-red animate-high-end-slide" style={{animationDelay: '150ms'}}>
              TREE SERVICE
            </h2>
          </div>
        </div>
        
        <div className="overflow-hidden mt-8">
          <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.3em] animate-slide-up-reveal" style={{animationDelay: '200ms', opacity: 0}}>
            Tree Care At The Highest Level
          </p>
        </div>

        {/* Sleek Load Bar */}
        <div className="w-48 md:w-64 h-[1px] bg-white/10 overflow-hidden mt-12 relative animate-slide-up-reveal" style={{animationDelay: '400ms', opacity: 0}}>
          <div 
            className="absolute top-0 left-0 h-full bg-brand-red transition-all ease-out" 
            style={{ width: `${progress}%`, transitionDuration: '2400ms' }}
          ></div>
        </div>
      </div>
      
      {/* Faint Image at the bottom */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none z-0">
        <img 
          src="/battalionloadscreen.png" 
          alt="Battalion Logo Accent" 
          className="w-full md:w-1/2 lg:w-1/3 opacity-[0.01] object-cover object-bottom"
        />
      </div>
    </div>
  );
}
