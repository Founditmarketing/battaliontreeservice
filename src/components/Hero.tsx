import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, ArrowDown } from 'lucide-react';

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
);

const WORDS = ["precision!", "excellence!", "reliability!"];

export default function Hero({ isLoaded = true }: { isLoaded?: boolean }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video auto-play blocked:", e));
    }
  }, []);

  useEffect(() => {
    const word = WORDS[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText.length <= 1) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
        }
      }, 50);
    } else {
      if (currentText === word) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timer = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-[90vh] flex pt-24 pb-0 overflow-hidden">
      {/* Background Video & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/battalionherovideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 z-10"></div>
      </div>

      <div className={`w-full flex-1 flex flex-col justify-end relative transition-all duration-[1500ms] ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 w-full mb-12 lg:mb-16">
        <div className="flex flex-col lg:flex-row items-stretch">
          
          {/* Left Line & Socials (Desktop) */}
          <div className="hidden lg:flex flex-col items-center mr-16">
            <div className="w-[1px] h-32 bg-brand-red mb-8"></div>
            <div className="flex flex-col gap-6 text-gray-400">
              <a href="https://www.google.com/search?q=battalion+tree+service&rlz=1C5CHFA_enUS1003US1005&oq=bat&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhAIARAuGMcBGLEDGNEDGIAEMgYIAhBFGDkyBwgDEC4YgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPNIBBzg1OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#sv=CAESzQEKuQEStgEKd0FNbjMteVNBNHFiaUFpMzRiNXB2SWZLYzYzbHVzWTM1aFkwNThvdUNDZUZibWxnanFUTkxzNW5QUy0zVWpKSmZYejgzdXB2YTBTeXhkYW9UNDVtV01Cd1NiOHhJVUZEdlJVODdkaTZKSXMyVjJDbWhlX0UxV2tzEhc4N1FaYXJ6MU9KZkdwODRQNHBTTTZRNBoiQUpLTEZtSUc3dHdGcjB3am9jaTZObm10V2x6Vkw1NWtHQRIEODEwNRoBMyoAMAA4AUAAGAAg5ILnnwNKAhAC" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><GoogleIcon className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/profile.php?id=100092550350040" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.yelp.com/biz/battalion-tree-service-kountze?dd_referrer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity"><img src="/yelplogo.png" alt="Yelp" className="w-5 h-5 object-contain invert brightness-0 opacity-70 hover:opacity-100" /></a>
            </div>
            <div className="w-[1px] flex-1 min-h-[100px] bg-white/10 mt-8"></div>
          </div>

          {/* Main Hero Text */}
          <div className="max-w-4xl py-12 lg:py-24">
            <p className="text-gray-300 font-medium mb-6 flex items-center gap-4 text-sm tracking-widest uppercase">
              <span>Professional Tree Care <span className="hidden md:inline">| Serving the Golden Triangle since 2019</span></span>
              <span className="w-8 h-[1px] bg-brand-red inline-block"></span>
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 font-sans">
              <span className="hidden md:inline">Expert tree care building new standards of safety and </span>
              <span className="md:hidden">Expert tree care with </span>
              <br className="md:hidden" />
              <span className="text-brand-red inline-block min-h-[1em]">{currentText}<span className="animate-pulse">|</span></span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
              <span className="hidden md:inline">Our dedication to excellence means we operate with safety-first precision and a genuine passion for tree health. </span>
              <span className="md:hidden">Expert tree care with safety-first precision. </span>
              <span className="text-brand-red font-medium">Quick response, professional service, and affordable rates!</span>
            </p>
            
            <Link to="/contact" className="relative group bg-transparent border border-white text-white text-lg font-bold uppercase tracking-widest py-5 px-10 overflow-hidden inline-block text-center w-max">
            <span className="relative z-10 group-hover:text-brand-red transition-colors duration-500">GET A FREE ESTIMATE</span>
            
            {/* Hover Background */}
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            
            {/* Line Embellishments */}
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
          </div>
        </div>
      </div>

      {/* Right side text separator */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center">
        <div className="w-[1px] h-32 bg-brand-red mb-12"></div>
        <p className="[writing-mode:vertical-rl] text-white tracking-widest uppercase text-sm font-medium">
          Let's Work Together.
        </p>
        <div className="w-[1px] h-32 bg-white/10 mt-12"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 right-6 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center">
        <div className="w-[2px] h-24 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-red animate-scroll-down"></div>
        </div>
      </div>
      {/* BBB Logo Bottom Right */}
      <div className="absolute bottom-8 right-6 lg:bottom-12 lg:right-12 z-20 hidden lg:block">
        <a href="https://www.bbb.org/us/tx/kountze/profile/tree-service/battalion-tree-service-0845-90079879" target="_blank" rel="noreferrer" className="block hover:scale-105 transition-transform duration-300">
          <img src="/bbblogo.png" alt="Better Business Bureau" className="h-16 w-auto object-contain" />
        </a>
      </div>
      </div>
    </section>
  );
}
