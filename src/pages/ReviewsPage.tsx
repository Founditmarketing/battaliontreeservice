import React, { useEffect } from 'react';
import CallToAction from '../components/CallToAction';
import { Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Danielle Fike',
    time: '10 months ago',
    text: '"Battalion was across the street working on a neighbor’s trees so I walked over to ask for a quote on having a stump ground. Mr Jimmy, the owner, was very kind, offered us a good price, and came quickly, just a few days after, to do the work. The stump grinding machine made fast work of our project. I’m so glad to have it done. I’d recommend them to you for your tree removal needs."',
  },
  {
    name: 'TSWEBER12012',
    time: '6 months ago',
    text: '"GREAT prices and a great job done! Very professional and timely. Battalion was recommended to us by neighbors and we definitely recommend them as well! Thank you!!"',
  },
  {
    name: 'Barbara Hand',
    time: '9 months ago',
    text: '"Our family is thrilled that we hired Battalion Tree Service to remove three huge old trees from our property. Job was completed in a timely manner, and they even raked all the leaves and hauled them off after removing all the wood, limbs, and stumps. Well done!"',
  },
  {
    name: 'Amy Dale',
    time: 'a year ago',
    text: '"Battalion Tree Service did an amazing job on a few trees we needed taken down. Very professional and easy to work with! Cleaned everything up and you can just tell they take pride in their work. Highly recommend if you need tree work!"',
  },
  {
    name: 'Karen Latino',
    time: '8 months ago',
    text: '"JImmy ground several stumps for us and did an excellent job, very professional and I like that he is a veteran, like to support them whenever I can!"',
  },
  {
    name: 'Wesley Thompson',
    time: 'a year ago',
    text: '"Battalion Tree Service was able to take down a dead pine tree and grind a couple stumps for a very competitive price. Was able to finish job quickly and efficiently."',
  },
  {
    name: 'Ann Kaminskas',
    time: 'a year ago',
    text: '"Excellent service. Referred by our neighbor who had only high praise of this company. Estimate was acceptable. And they didn’t disappoint. Man/woman team. Gave 100%."',
  },
  {
    name: 'Jessica Bartlett',
    time: 'a year ago',
    text: '"As promised Battalion Tree service were fast, and got the job done and hauled it away for us so we didn’t have to worry about that dead tree ever again. So very grateful! Thank you so much!"',
  }
];

export default function ReviewsPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-darker flex flex-col font-sans pt-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 flex items-center overflow-hidden border-b border-white/5">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-no-repeat transition-transform duration-[10000ms] ease-linear hover:scale-105"
          style={{ 
            backgroundImage: 'url("/battalionaboutimage.jpeg")',
            backgroundPosition: 'center 22%'
          }}
        ></div>
        
        {/* Consistent Dark Overlay, slightly darker on left */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-darker/80 to-brand-darker/50"></div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col max-w-4xl animate-slide-up-reveal">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-brand-red"></div>
              <span className="text-brand-red font-bold uppercase tracking-widest text-sm md:text-base">Testimonials</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-widest font-sans leading-none mb-4">
              CLIENT <span className="text-brand-red">REVIEWS</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium tracking-wide">
              See what our community has to say about our tree care services.
            </p>
          </div>
        </div>
        
        {/* Decorative Lines */}
        <div className="absolute top-0 right-10 w-[1px] h-full bg-white/5 z-0"></div>
        <div className="absolute top-0 right-32 w-[1px] h-full bg-white/5 z-0"></div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-brand-dark pt-16 pb-24 md:pt-24 md:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-8 relative group cursor-default text-left overflow-hidden flex flex-col justify-between h-full min-h-[320px]">
                <Quote className="absolute bottom-8 right-8 w-24 h-24 text-white/5 group-hover:text-brand-red/10 transition-colors duration-500" />
                
                {/* Line Embellishments & Hover Effect */}
                <div className="absolute inset-4 z-20 pointer-events-none transition-all duration-500 group-hover:inset-2">
                  <div className="absolute top-0 left-0 h-[1px] w-0 bg-brand-red group-hover:w-full transition-all duration-700 ease-out"></div>
                  <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-brand-red group-hover:w-full transition-all duration-700 ease-out"></div>
                  <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-brand-red group-hover:h-full transition-all duration-700 ease-out"></div>
                  <div className="absolute top-0 right-0 w-[1px] h-0 bg-brand-red group-hover:h-full transition-all duration-700 ease-out"></div>
                  <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:border-brand-red group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                  <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/10 group-hover:border-brand-red group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                  <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/10 group-hover:border-brand-red group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                  <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-brand-red group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                </div>
                
                <p className="text-gray-300 mb-8 relative z-10 text-sm md:text-base leading-relaxed italic flex-grow">
                  {review.text}
                </p>
                
                <div className="flex flex-col relative z-10 mt-auto">
                  <span className="text-white font-bold uppercase tracking-wider text-sm">{review.name}</span>
                  <span className="text-brand-red text-xs font-medium uppercase tracking-widest">{review.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Call To Action */}
      <section className="relative py-24 md:py-32">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'url("/battaliontreeimage4.webp")',
          }}
        >
          <div className="absolute inset-0 bg-brand-dark/90"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
            SHARE YOUR <br/><span className="text-brand-red">EXPERIENCE</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We value your feedback. If you've enjoyed working with Battalion Tree Service, please take a moment to leave us a review.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://www.google.com/search?q=battalion+tree+service+kountze+tx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-brand-red/90 text-white text-sm font-bold uppercase tracking-wider py-4 px-10 transition-colors shadow-lg shadow-brand-red/20"
            >
              Write a Review
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
