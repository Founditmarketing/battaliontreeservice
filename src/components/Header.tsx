import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Phone, Mail, MapPin, Facebook, ChevronDown } from 'lucide-react';

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
);

export default function Header({ isLoaded = true }: { isLoaded?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState('tree-removal');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Search Data Index
  const searchablePages = [
    { title: 'Home', path: '/', keywords: ['home', 'battalion', 'tree service', 'kountze', 'texas', 'jimmy', 'professional'] },
    { title: 'About Us', path: '/about', keywords: ['about us', 'veteran', 'history', 'team', 'jimmy pirtle', 'experience'] },
    { title: 'Contact Us', path: '/contact', keywords: ['contact', 'phone', 'email', 'address', 'estimate', '409-673-5443', 'get in touch', 'message'] },
    { title: 'Our Work', path: '/our-work', keywords: ['our work', 'portfolio', 'gallery', 'photos', 'images', 'pictures', 'projects'] },
    { title: 'Reviews', path: '/reviews', keywords: ['reviews', 'testimonials', 'feedback', '5 star', 'clients', 'community'] },
    { title: 'Tree Removal', path: '/services/tree-removal', keywords: ['tree removal', 'cutting', 'take down', 'hazardous', 'dangerous tree', 'dead tree'] },
    { title: 'Tree Trimming', path: '/services/tree-trimming', keywords: ['tree trimming', 'pruning', 'shaping', 'branches', 'canopy', 'health'] },
    { title: 'Stump Grinding', path: '/services/stump-grinding', keywords: ['stump grinding', 'root removal', 'clear yard', 'stumps'] },
    { title: 'Emergency Service', path: '/services/emergency-service', keywords: ['emergency service', 'storm damage', 'fallen tree', '24/7', 'urgent', 'disaster'] },
    { title: 'Lot Clearing', path: '/services/lot-clearing', keywords: ['lot clearing', 'land clearing', 'brush removal', 'construction site', 'acreage'] },
  ];

  // Filtering Logic
  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : searchablePages.filter(page => {
        const query = searchQuery.toLowerCase();
        return page.title.toLowerCase().includes(query) || 
               page.keywords.some(keyword => keyword.toLowerCase().includes(query));
      });

  const servicesMap: Record<string, { title: string, image: string, path: string }> = {
    'tree-removal': { title: 'Tree Removal', image: '/services/battaliontreeremoval.jpeg', path: '/services/tree-removal' },
    'tree-trimming': { title: 'Tree Trimming & Pruning', image: '/services/battaliontreetrimming.jpeg', path: '/services/tree-trimming' },
    'stump-grinding': { title: 'Stump Grinding', image: '/services/battalionstumpgrinding.jpeg', path: '/services/stump-grinding' },
    'emergency-service': { title: 'Emergency Service', image: '/services/battalionemergencyservice.jpeg', path: '/services/emergency-service' },
    'lot-clearing': { title: 'Lot Clearing', image: '/services/battalionlotclearing.jpeg', path: '/services/lot-clearing' },
  };

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '#' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Reviews', href: '/reviews' },
  ];

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-white/5 transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img src="/battalionlogo.webp" alt="Battalion Tree Service" className="h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider leading-none text-white whitespace-nowrap">
                BATTALION
              </span>
              <span className="text-sm tracking-[0.2em] text-brand-red uppercase font-semibold">
                Tree Service
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                {link.name === 'Services' ? (
                  <>
                    <div className="cursor-pointer text-sm font-medium text-gray-300 group-hover:text-white transition-colors flex items-center gap-1 py-6">
                      Services <ChevronDown className="w-4 h-4" />
                    </div>
                    {/* Mega Menu Dropdown */}
                    <div className="fixed top-[80px] left-1/2 -translate-x-1/2 w-[85vw] max-w-5xl bg-brand-dark border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl flex z-50 overflow-hidden">
                       
                       {/* Left Section (Dynamic Image) */}
                       <div className="w-5/12 relative hidden md:block bg-brand-darker">
                         <div className="absolute inset-0 transition-opacity duration-300">
                           <img 
                             src={servicesMap[hoveredService].image} 
                             alt={servicesMap[hoveredService].title} 
                             className="w-full h-full object-cover opacity-70"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/90 via-transparent to-transparent"></div>
                           <div className="absolute bottom-8 left-8 right-8">
                             <h3 className="text-white font-bold text-2xl uppercase tracking-wider leading-tight">{servicesMap[hoveredService].title}</h3>
                             <div className="w-12 h-1 bg-brand-red mt-4"></div>
                           </div>
                         </div>
                       </div>

                       {/* Right Section (Links Grid) */}
                       <div className="w-full md:w-7/12 p-8 lg:p-12">
                         <h4 className="text-brand-red font-bold text-sm uppercase tracking-widest mb-6 pb-4 border-b border-white/10">Professional Tree Care</h4>
                         
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                           {Object.entries(servicesMap).map(([key, service]) => (
                             <Link 
                               key={key}
                               to={service.path} 
                               onMouseEnter={() => setHoveredService(key)}
                               className="group/link flex items-center gap-4 p-4 hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300"
                             >
                               <div className="w-2 h-2 shrink-0 bg-brand-red/30 group-hover/link:bg-brand-red group-hover/link:scale-150 transition-all duration-300 rotate-45"></div>
                               <span className="text-gray-300 group-hover/link:text-white font-medium transition-colors text-sm md:text-base">{service.title}</span>
                             </Link>
                           ))}
                         </div>
                         
                         <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                           <p className="text-sm text-gray-400 font-medium">Need immediate assistance?</p>
                           <a href="tel:4096735443" className="text-brand-red font-bold hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-wider bg-white/5 px-4 py-2 hover:bg-brand-red">
                             <Phone className="w-4 h-4" /> (409) 673-5443
                           </a>
                         </div>
                       </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-6 inline-block"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          <button 
            className={`text-gray-300 hover:text-white transition-colors ml-4 ${isSearchOpen ? 'text-brand-red' : ''}`}
            onClick={() => { setIsSearchOpen(!isSearchOpen); setMobileMenuOpen(false); }}
          >
            <Search className="w-5 h-5" />
          </button>
          
          <Link to="/contact" className="relative group bg-brand-red border border-brand-red text-white text-sm font-bold uppercase tracking-wider py-3 px-6 overflow-hidden ml-4 inline-block">
            <span className="relative z-10 group-hover:text-brand-red transition-colors duration-500">GET IN TOUCH</span>
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
        </nav>

        {/* Mobile menu buttons */}
        <div className="flex items-center gap-6 lg:hidden">
          <button 
            className={`text-white hover:text-brand-red transition-colors ${isSearchOpen ? 'text-brand-red' : ''}`}
            onClick={() => { setIsSearchOpen(!isSearchOpen); setMobileMenuOpen(false); }}
          >
            <Search className="w-6 h-6" />
          </button>
          <button 
            className="text-white hover:text-brand-red transition-colors"
            onClick={() => { setMobileMenuOpen(true); setIsSearchOpen(false); }}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>
    </header>

    {/* Search Dropdown Overlay */}
    {isSearchOpen && (
      <>
        {/* Invisible backdrop to close search when clicking outside */}
        <div 
          className="fixed inset-0 z-[45]" 
          onClick={() => setIsSearchOpen(false)}
        ></div>
        
        {/* Search Window */}
        <div className="fixed top-[80px] right-6 lg:right-[15vw] w-[calc(100vw-3rem)] max-w-sm bg-brand-dark border border-white/10 shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <input
              autoFocus
              type="text"
              placeholder="Search the site..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors font-sans"
            />
          </div>
          <div className="max-h-64 overflow-y-auto p-4">
            {searchQuery.trim() === '' ? (
              <p className="text-gray-500 text-sm italic">Enter keywords (e.g. trimming, hazardous, contact...)</p>
            ) : searchResults.length > 0 ? (
              <div className="flex flex-col gap-1">
                {searchResults.map((result, i) => (
                  <Link 
                    key={i} 
                    to={result.path}
                    onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                    className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 text-sm transition-colors border-l-2 border-transparent hover:border-brand-red"
                  >
                    {result.title}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-brand-red text-sm font-medium">Cannot be found.</p>
            )}
          </div>
        </div>
      </>
    )}

    {/* Mobile Menu Overlay */}
    <div 
      className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={() => setMobileMenuOpen(false)}
    ></div>

    {/* Mobile Menu Panel */}
    <div className={`fixed top-0 right-0 h-full w-[85%] sm:w-[400px] bg-brand-dark border-l border-white/10 z-[70] lg:hidden transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
      <div className="flex justify-between items-center p-6 border-b border-white/10">
        <span className="text-xl font-bold tracking-wider text-white">MENU</span>
        <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-brand-red transition-colors">
          <X className="w-8 h-8" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 flex flex-col">
        <ul className="flex flex-col gap-6 mb-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.name === 'Services' ? (
                <div>
                   <div 
                     className="text-2xl font-medium text-gray-300 hover:text-white cursor-pointer flex items-center justify-between transition-colors"
                     onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                   >
                     Services
                     <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                   </div>
                   <div className={`flex flex-col gap-4 pl-6 border-l-2 border-brand-red/30 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                       <Link onClick={() => setMobileMenuOpen(false)} to="/services/tree-removal" className="text-lg text-gray-400 hover:text-white transition-colors">Tree Removal</Link>
                       <Link onClick={() => setMobileMenuOpen(false)} to="/services/tree-trimming" className="text-lg text-gray-400 hover:text-white transition-colors">Tree Trimming & Pruning</Link>
                       <Link onClick={() => setMobileMenuOpen(false)} to="/services/stump-grinding" className="text-lg text-gray-400 hover:text-white transition-colors">Stump Grinding</Link>
                       <Link onClick={() => setMobileMenuOpen(false)} to="/services/emergency-service" className="text-lg text-gray-400 hover:text-white transition-colors">Emergency Service</Link>
                       <Link onClick={() => setMobileMenuOpen(false)} to="/services/lot-clearing" className="text-lg text-gray-400 hover:text-white transition-colors">Lot Clearing</Link>
                   </div>
                </div>
              ) : (
                <Link
                  to={link.href}
                  className="text-2xl font-medium text-gray-300 hover:text-white block transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
          <li className="mt-4">
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-brand-red text-white text-center font-bold uppercase tracking-wider py-4 px-6 inline-block hover:bg-brand-red/90 transition-colors shadow-lg shadow-brand-red/20"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
        
        <div className="mt-auto border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 mb-8">
            <a href="tel:4096735443" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
              <Phone className="w-5 h-5 text-brand-red shrink-0" />
              <span className="text-sm">(409) 673-5443</span>
            </a>
            <a href="mailto:Jimmypirtle30@aol.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5 text-brand-red shrink-0" />
              <span className="text-sm truncate">Jimmypirtle30@aol.com</span>
            </a>
            <div className="flex items-start gap-4 text-gray-400">
              <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <span className="text-sm">4029 Glaze Rd.,<br/>Kountze, TX 77625</span>
            </div>
          </div>
          
          <div className="flex flex-row items-center justify-between gap-6">
            <a href="https://www.bbb.org/us/tx/kountze/profile/tree-service/battalion-tree-service-0845-90079879" target="_blank" rel="noreferrer" className="inline-block hover:scale-105 transition-transform duration-300">
              <img src="/bbblogo.png" alt="Better Business Bureau" className="h-14 w-auto object-contain" />
            </a>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="https://www.google.com/search?q=battalion+tree+service&rlz=1C5CHFA_enUS1003US1005&oq=bat&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhAIARAuGMcBGLEDGNEDGIAEMgYIAhBFGDkyBwgDEC4YgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPNIBBzg1OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#sv=CAESzQEKuQEStgEKd0FNbjMteVNBNHFiaUFpMzRiNXB2SWZLYzYzbHVzWTM1aFkwNThvdUNDZUZibWxnanFUTkxzNW5QUy0zVWpKSmZYejgzdXB2YTBTeXhkYW9UNDVtV01Cd1NiOHhJVUZEdlJVODdkaTZKSXMyVjJDbWhlX0UxV2tzEhc4N1FaYXJ6MU9KZkdwODRQNHBTTTZRNBoiQUpLTEZtSUc3dHdGcjB3am9jaTZObm10V2x6Vkw1NWtHQRIEODEwNRoBMyoAMAA4AUAAGAAg5ILnnwNKAhAC" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><GoogleIcon className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/profile.php?id=100092550350040" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.yelp.com/biz/battalion-tree-service-kountze?dd_referrer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity"><img src="/yelplogo.png" alt="Yelp" className="w-5 h-5 object-contain invert brightness-0 opacity-70 hover:opacity-100" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
