import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageSquare, X, ArrowRight, CheckCircle2 } from 'lucide-react';

type Service = 'Tree Removal' | 'Tree Trimming' | 'Stump Grinding' | 'Emergency Service' | 'Other' | null;

export default function FloatingContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Service, 2: Details, 3: Success
  const [selectedService, setSelectedService] = useState<Service>(null);
  
  const location = useLocation();

  useEffect(() => {
    // Check if on contact page
    if (location.pathname === '/contact') {
      setIsVisible(false);
      setIsModalOpen(false);
      return;
    }

    const handleScroll = () => {
      // Show button after scrolling past 80% of window height
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStep(3);
    setTimeout(() => {
      setIsModalOpen(false);
      setTimeout(() => {
        setStep(1);
        setSelectedService(null);
      }, 500); // Reset after modal is closed
    }, 3000);
  };

  // Do not render anything if on contact page
  if (location.pathname === '/contact') return null;

  return (
    <>
      {/* Floating Button */}
      <div 
        className={`fixed bottom-6 right-6 z-[90] transition-all duration-500 ease-in-out ${isVisible && !isModalOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-brand-red text-white p-4 rounded-full shadow-2xl hover:bg-brand-red/90 hover:scale-110 transition-all duration-300 relative group"
        >
          <MessageSquare className="w-8 h-8" />
          <div className="absolute inset-0 rounded-full border-2 border-white/0 group-hover:border-white/20 scale-100 group-hover:scale-125 transition-all duration-500"></div>
        </button>
      </div>

      {/* Modal Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsModalOpen(false)}
      >
        {/* Modal Window */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg bg-gradient-to-br from-brand-dark/90 to-brand-darker/95 border border-white/10 p-8 shadow-2xl transition-all duration-500 ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-red"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-red"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-red"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-red"></div>

          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-white mb-2 tracking-wider flex items-center gap-3">
                <span className="w-6 h-[1px] bg-brand-red"></span>
                HOW CAN WE HELP?
              </h2>
              <p className="text-gray-400 mb-8 text-sm">Select the service you are looking for.</p>
              
              <div className="space-y-3">
                {['Tree Removal', 'Tree Trimming', 'Stump Grinding', 'Emergency Service', 'Other'].map((srv) => (
                  <button 
                    key={srv}
                    onClick={() => handleServiceSelect(srv as Service)}
                    className="w-full text-left bg-black/40 border border-white/5 hover:border-brand-red hover:bg-white/5 px-6 py-4 text-white font-medium transition-all duration-300 group flex justify-between items-center"
                  >
                    {srv}
                    <ArrowRight className="w-5 h-5 text-brand-red opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <button 
                onClick={() => setStep(1)}
                className="text-brand-red hover:text-white text-sm font-medium tracking-widest uppercase mb-6 flex items-center gap-2 transition-colors"
              >
                &larr; Back
              </button>
              <h2 className="text-2xl font-bold text-white mb-2 tracking-wider flex items-center gap-3">
                <span className="w-6 h-[1px] bg-brand-red"></span>
                YOUR DETAILS
              </h2>
              <p className="text-gray-400 mb-8 text-sm">Tell us how to reach you about your <span className="text-white font-medium">{selectedService}</span> request.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="group">
                  <label className="block text-xs text-gray-400 mb-2 uppercase tracking-widest font-bold group-focus-within:text-brand-red transition-colors">Full Name</label>
                  <input required type="text" className="w-full bg-black/40 border border-white/10 px-5 py-4 text-white focus:outline-none focus:border-brand-red focus:bg-white/5 transition-all duration-300" placeholder="John Doe" />
                </div>
                <div className="group">
                  <label className="block text-xs text-gray-400 mb-2 uppercase tracking-widest font-bold group-focus-within:text-brand-red transition-colors">Phone Number</label>
                  <input required type="tel" className="w-full bg-black/40 border border-white/10 px-5 py-4 text-white focus:outline-none focus:border-brand-red focus:bg-white/5 transition-all duration-300" placeholder="(409) 555-0123" />
                </div>
                <div className="group">
                  <label className="block text-xs text-gray-400 mb-2 uppercase tracking-widest font-bold group-focus-within:text-brand-red transition-colors">Email Address</label>
                  <input required type="email" className="w-full bg-black/40 border border-white/10 px-5 py-4 text-white focus:outline-none focus:border-brand-red focus:bg-white/5 transition-all duration-300" placeholder="john@example.com" />
                </div>
                
                <button type="submit" className="w-full relative group/btn bg-brand-red border border-brand-red text-white text-sm font-bold uppercase tracking-widest py-5 overflow-hidden transition-all mt-4">
                  <span className="relative z-10 group-hover/btn:text-brand-red transition-colors duration-500">Get My Free Quote</span>
                  <div className="absolute inset-0 bg-white translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                  <div className="absolute inset-0 pointer-events-none z-20">
                     <div className="absolute top-0 left-0 h-[1px] w-0 bg-brand-red group-hover/btn:w-full transition-all duration-700 ease-out"></div>
                     <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-brand-red group-hover/btn:w-full transition-all duration-700 ease-out"></div>
                     <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-brand-red group-hover/btn:h-full transition-all duration-700 ease-out"></div>
                     <div className="absolute top-0 right-0 w-[1px] h-0 bg-brand-red group-hover/btn:h-full transition-all duration-700 ease-out"></div>
                  </div>
                </button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in text-center py-10">
              <div className="w-20 h-20 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-brand-red" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 tracking-wider">REQUEST SENT</h2>
              <p className="text-gray-400 text-lg">
                Thank you! We've received your request for <span className="text-white font-medium">{selectedService}</span> and will contact you shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
