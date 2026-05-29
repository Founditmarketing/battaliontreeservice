import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-red">
      
      {/* Map & Form Section */}
      <div className="container mx-auto px-6 py-20 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-wide">Request an Estimate</h3>
            <p className="text-gray-400 mb-8 text-sm">Fill out the form below and our team will get back to you shortly to schedule your free on-site consultation.</p>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <input type="text" placeholder="First Name" className="bg-white/5 border border-white/10 p-4 text-white placeholder-gray-500 focus:outline-none transition-colors w-full relative z-10 bg-transparent" />
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="absolute top-0 left-0 h-[1px] w-0 bg-brand-red group-focus-within:w-full transition-all duration-500 ease-out"></div>
                    <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-brand-red group-focus-within:w-full transition-all duration-500 ease-out"></div>
                    <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-brand-red group-focus-within:h-full transition-all duration-500 ease-out"></div>
                    <div className="absolute top-0 right-0 w-[1px] h-0 bg-brand-red group-focus-within:h-full transition-all duration-500 ease-out"></div>
                    <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/30 group-focus-within:border-brand-red group-focus-within:w-4 group-focus-within:h-4 transition-all duration-300"></div>
                    <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/30 group-focus-within:border-brand-red group-focus-within:w-4 group-focus-within:h-4 transition-all duration-300"></div>
                  </div>
                </div>
                <div className="relative group">
                  <input type="text" placeholder="Last Name" className="bg-white/5 border border-white/10 p-4 text-white placeholder-gray-500 focus:outline-none transition-colors w-full relative z-10 bg-transparent" />
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="absolute top-0 left-0 h-[1px] w-0 bg-brand-red group-focus-within:w-full transition-all duration-500 ease-out"></div>
                    <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-brand-red group-focus-within:w-full transition-all duration-500 ease-out"></div>
                    <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-brand-red group-focus-within:h-full transition-all duration-500 ease-out"></div>
                    <div className="absolute top-0 right-0 w-[1px] h-0 bg-brand-red group-focus-within:h-full transition-all duration-500 ease-out"></div>
                    <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/30 group-focus-within:border-brand-red group-focus-within:w-4 group-focus-within:h-4 transition-all duration-300"></div>
                    <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/30 group-focus-within:border-brand-red group-focus-within:w-4 group-focus-within:h-4 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 p-4 text-white placeholder-gray-500 focus:outline-none transition-colors w-full relative z-10 bg-transparent" />
                <div className="absolute inset-0 pointer-events-none z-20">
                  <div className="absolute top-0 left-0 h-[1px] w-0 bg-brand-red group-focus-within:w-full transition-all duration-500 ease-out"></div>
                  <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-brand-red group-focus-within:w-full transition-all duration-500 ease-out"></div>
                  <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-brand-red group-focus-within:h-full transition-all duration-500 ease-out"></div>
                  <div className="absolute top-0 right-0 w-[1px] h-0 bg-brand-red group-focus-within:h-full transition-all duration-500 ease-out"></div>
                  <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/30 group-focus-within:border-brand-red group-focus-within:w-4 group-focus-within:h-4 transition-all duration-300"></div>
                  <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/30 group-focus-within:border-brand-red group-focus-within:w-4 group-focus-within:h-4 transition-all duration-300"></div>
                </div>
              </div>

              <div className="relative group">
                <input type="tel" placeholder="Phone Number" className="bg-white/5 border border-white/10 p-4 text-white placeholder-gray-500 focus:outline-none transition-colors w-full relative z-10 bg-transparent" />
                <div className="absolute inset-0 pointer-events-none z-20">
                  <div className="absolute top-0 left-0 h-[1px] w-0 bg-brand-red group-focus-within:w-full transition-all duration-500 ease-out"></div>
                  <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-brand-red group-focus-within:w-full transition-all duration-500 ease-out"></div>
                  <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-brand-red group-focus-within:h-full transition-all duration-500 ease-out"></div>
                  <div className="absolute top-0 right-0 w-[1px] h-0 bg-brand-red group-focus-within:h-full transition-all duration-500 ease-out"></div>
                  <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/30 group-focus-within:border-brand-red group-focus-within:w-4 group-focus-within:h-4 transition-all duration-300"></div>
                  <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/30 group-focus-within:border-brand-red group-focus-within:w-4 group-focus-within:h-4 transition-all duration-300"></div>
                </div>
              </div>

              <div className="relative group">
                <textarea placeholder="Tell us about your project..." rows={4} className="bg-white/5 border border-white/10 p-4 text-white placeholder-gray-500 focus:outline-none transition-colors w-full block resize-none relative z-10 bg-transparent"></textarea>
                <div className="absolute inset-0 pointer-events-none z-20">
                  <div className="absolute top-0 left-0 h-[1px] w-0 bg-brand-red group-focus-within:w-full transition-all duration-500 ease-out"></div>
                  <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-brand-red group-focus-within:w-full transition-all duration-500 ease-out"></div>
                  <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-brand-red group-focus-within:h-full transition-all duration-500 ease-out"></div>
                  <div className="absolute top-0 right-0 w-[1px] h-0 bg-brand-red group-focus-within:h-full transition-all duration-500 ease-out"></div>
                  <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white/30 group-focus-within:border-brand-red group-focus-within:w-4 group-focus-within:h-4 transition-all duration-300"></div>
                  <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white/30 group-focus-within:border-brand-red group-focus-within:w-4 group-focus-within:h-4 transition-all duration-300"></div>
                </div>
              </div>

              <button type="submit" className="relative group bg-brand-dark border border-white/20 text-white font-bold uppercase tracking-wider py-4 px-8 mt-4 w-full sm:w-auto self-start overflow-hidden">
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">SEND MESSAGE</span>
                <div className="absolute inset-0 bg-brand-red translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                <div className="absolute inset-0 pointer-events-none z-20">
                   <div className="absolute top-0 left-0 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-700 ease-out"></div>
                   <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-700 ease-out"></div>
                   <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-white group-hover:h-full transition-all duration-700 ease-out"></div>
                   <div className="absolute top-0 right-0 w-[1px] h-0 bg-white group-hover:h-full transition-all duration-700 ease-out"></div>
                   <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-transparent group-hover:border-white group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                   <div className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-transparent group-hover:border-white group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                   <div className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-transparent group-hover:border-white group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                   <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-transparent group-hover:border-white group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                </div>
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-auto min-h-[400px] bg-white/5 border border-white/10 p-2 relative group">
            <div className="absolute inset-0 border border-brand-red/30 group-hover:border-brand-red transition-colors duration-500 pointer-events-none z-20"></div>
            <iframe 
              src="https://maps.google.com/maps?q=4029%20Glaze%20Rd%2C%20Kountze%2C%20TX%2077625&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 p-2 w-full h-full object-cover"
            ></iframe>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/battalionlogo.webp" alt="Battalion Tree Service" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-wider leading-none text-white whitespace-nowrap">
                  BATTALION
                </span>
                <span className="text-sm tracking-[0.2em] text-brand-red uppercase font-semibold">
                  Tree Service
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Commanding precision and safety in every project. Building a legacy of excellence in professional tree care. Serving the Golden Triangle since 2019.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="https://www.google.com/search?q=battalion+tree+service&rlz=1C5CHFA_enUS1003US1005&oq=bat&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhAIARAuGMcBGLEDGNEDGIAEMgYIAhBFGDkyBwgDEC4YgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPNIBBzg1OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#sv=CAESzQEKuQEStgEKd0FNbjMteVNBNHFiaUFpMzRiNXB2SWZLYzYzbHVzWTM1aFkwNThvdUNDZUZibWxnanFUTkxzNW5QUy0zVWpKSmZYejgzdXB2YTBTeXhkYW9UNDVtV01Cd1NiOHhJVUZEdlJVODdkaTZKSXMyVjJDbWhlX0UxV2tzEhc4N1FaYXJ6MU9KZkdwODRQNHBTTTZRNBoiQUpLTEZtSUc3dHdGcjB3am9jaTZObm10V2x6Vkw1NWtHQRIEODEwNRoBMyoAMAA4AUAAGAAg5ILnnwNKAhAC" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-red transition-all">
                <GoogleIcon className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100092550350040" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-red transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.yelp.com/biz/battalion-tree-service-kountze?dd_referrer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-brand-red transition-all">
                <img src="/yelplogo.png" alt="Yelp" className="w-5 h-5 object-contain invert brightness-0 opacity-70 hover:opacity-100" />
              </a>
            </div>
            <a href="https://www.bbb.org/us/tx/kountze/profile/tree-service/battalion-tree-service-0845-90079879" target="_blank" rel="noreferrer" className="inline-block hover:scale-105 transition-transform duration-300">
              <img src="/bbblogo.png" alt="Better Business Bureau" className="h-16 w-auto object-contain" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-white/10 pb-4 inline-block">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm block">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm block">About Us</Link></li>
              <li><Link to="/services/tree-removal" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm block">Our Services</Link></li>
              <li><Link to="/our-work" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm block">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm block">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-white/10 pb-4 inline-block">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services/tree-removal" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm block">Tree Removal</Link></li>
              <li><Link to="/services/tree-trimming" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm block">Trimming & Pruning</Link></li>
              <li><Link to="/services/stump-grinding" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm block">Stump Grinding</Link></li>
              <li><Link to="/services/lot-clearing" className="text-gray-400 hover:text-white hover:pl-2 transition-all text-sm block">Lot Clearing</Link></li>
              <li><Link to="/services/emergency-service" className="text-brand-red hover:text-white transition-all text-sm block font-bold">24/7 Emergency Response</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-white/10 pb-4 inline-block">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">4029 Glaze Rd.,<br/>Kountze, TX 77625</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-gray-400 text-sm">(409) 673-5443</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-gray-400 text-sm">Jimmypirtle30@aol.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-white/5 bg-brand-darker py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Battalion Tree Service. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
