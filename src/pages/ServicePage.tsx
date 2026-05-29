import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import Stats from '../components/Stats';

const servicesData = {
  'tree-removal': {
    title: 'Tree Removal',
    subtitle: 'Safe & Precise',
    image: '/battaliontreeimage2.webp',
    description: 'Safe removal of dead, diseased, or hazardous trees utilizing advanced rigging and safety protocols.',
    bodyText: 'Tree removal is a highly technical task that requires precision, experience, and the right equipment. Whether a tree is dead, diseased, posing a hazard to your property, or simply in the way of a new construction project, our team handles it with the utmost care. We utilize advanced rigging techniques to safely dismantle trees piece by piece, minimizing any risk of damage to your home, landscape, or surrounding structures. From the initial assessment to the final cleanup, we ensure a seamless and safe removal process.',
  },
  'tree-trimming': {
    title: 'Tree Trimming',
    subtitle: 'Health & Aesthetics',
    image: '/services/battaliontreetrimming.jpeg',
    description: 'Shaping, thinning, and height reduction for health, appearance, and structural integrity.',
    bodyText: 'Proper tree trimming and pruning are essential for maintaining the health, beauty, and structural integrity of your trees. Our expert arborists understand the specific needs of different tree species. We provide precise shaping, canopy thinning to improve sunlight penetration and air circulation, and targeted height reduction. Regular maintenance not only enhances the aesthetic appeal of your landscape but also prevents future hazards by removing weak or dead branches before they fall.',
  },
  'stump-grinding': {
    title: 'Stump Grinding',
    subtitle: 'Clear the Way',
    image: '/services/battalionstumpgrinding.jpeg',
    description: 'Complete stump grinding and root removal to clear space for new landscaping or construction.',
    bodyText: 'After a tree is removed, the remaining stump can be an unsightly hazard and a breeding ground for pests. Our comprehensive stump grinding services ensure that the stump and major root systems are completely ground down below the surface. This allows you to immediately repurpose the area, whether you plan to plant new grass, install a garden bed, or build a new structure. We leave your yard clean, level, and ready for its next chapter.',
  },
  'emergency-service': {
    title: 'Emergency Service',
    subtitle: '24/7 Response',
    image: '/services/battalionemergencyservice.jpeg',
    description: '24/7 storm damage response and dangerous tree takedowns to protect your property.',
    bodyText: 'Nature is unpredictable, and severe storms can cause immediate, dangerous damage to the trees on your property. When a tree falls on your home, blocks your driveway, or threatens to collapse, you need immediate professional help. Battalion Tree Service offers 24/7 emergency response. Our highly trained crews are equipped to mobilize quickly, safely remove the hazardous tree, and secure your property from further damage, providing you with peace of mind when you need it most.',
  },
  'lot-clearing': {
    title: 'Lot Clearing',
    subtitle: 'Prepare the Ground',
    image: '/services/battalionlotclearing.jpeg',
    description: 'Comprehensive land preparation for construction, yard expansion, or complete brush overhaul.',
    bodyText: 'Whether you are preparing a lot for new construction, expanding your usable yard space, or simply overhauling an overgrown property, our lot clearing services provide a clean slate. We handle everything from the removal of large trees and dense brush to extensive stump grinding and debris haul-off. Utilizing heavy-duty equipment and strategic planning, we efficiently clear your land while adhering to local regulations and environmental best practices.',
  }
};

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Scroll to top when loading a new service page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!serviceId || !(serviceId in servicesData)) {
    return <Navigate to="/" replace />;
  }

  const service = servicesData[serviceId as keyof typeof servicesData];

  return (
    <div className="min-h-screen bg-brand-darker flex flex-col font-sans pt-20">
      {/* Dynamic Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 flex items-center overflow-hidden border-b border-white/5">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear hover:scale-105"
          style={{ backgroundImage: `url("${service.image}")` }}
        ></div>
        
        {/* Consistent Dark Overlay, slightly darker on left */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-darker/80 to-brand-darker/50"></div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col max-w-4xl animate-slide-up-reveal">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-brand-red"></div>
              <span className="text-brand-red font-bold uppercase tracking-widest text-sm md:text-base">{service.subtitle}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-widest font-sans leading-none mb-4">
              {service.title.split(' ')[0]} <span className="text-brand-red">{service.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium tracking-wide">
              {service.description}
            </p>
          </div>
        </div>
        
        {/* Decorative Lines */}
        <div className="absolute top-0 right-10 w-[1px] h-full bg-white/5 z-0"></div>
        <div className="absolute top-0 right-32 w-[1px] h-full bg-white/5 z-0"></div>
      </section>

      {/* Main Body Content (Template Layout) */}
      <section className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 relative z-10">
            
            {/* Left Text Block */}
            <div className="lg:w-1/2 flex relative">
              <div className="hidden md:block w-[2px] bg-brand-red mr-8 lg:mr-12 shrink-0 self-stretch mt-2 mb-2"></div>
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-8 leading-tight uppercase">
                  EXPERT <span className="text-brand-red">CARE & PRECISION</span>
                </h2>
                
                <h3 className="text-base md:text-2xl text-white font-medium mb-6 leading-relaxed">
                  {service.description}
                </h3>
                
                <div className="flex flex-col gap-2 mb-6">
                  <span className="text-brand-red font-bold uppercase tracking-wider text-xs md:text-sm">Veteran Owned & operated since 2019</span>
                  <span className="text-brand-red font-bold uppercase tracking-wider text-xs md:text-sm">Safety First Execution</span>
                </div>
                
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-8">
                  {service.bodyText}
                </p>
                
              </div>
            </div>
            
            {/* Right Image Block */}
            <div className="hidden lg:block lg:w-1/2 relative group cursor-default p-4">
              {/* The outer red border with spacing */}
              <div className="absolute inset-0 border border-brand-red/40 pointer-events-none"></div>
              
              <div className="relative z-10 overflow-hidden bg-brand-darker h-full">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full aspect-square md:aspect-auto md:h-[600px] object-cover object-center shadow-2xl transition-transform duration-1000 group-hover:scale-105"
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

      {/* Global Call To Action */}
      <CallToAction />
    </div>
  );
}
