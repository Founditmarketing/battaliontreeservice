import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-brand-darker py-24 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Background text effect */}
        <div className="absolute -top-8 md:-top-16 left-0 w-full flex justify-center pointer-events-none opacity-[0.02] z-0">
          <h2 className="text-5xl sm:text-6xl md:text-[140px] font-bold text-white uppercase tracking-wider whitespace-nowrap">
            TESTIMONIALS
          </h2>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
            CLIENT REVIEWS
          </h2>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-brand-red text-brand-red" />
            ))}
          </div>
          <p className="text-gray-300">See what our community has to say about our tree care services.</p>
        </div>

        <div className="relative w-full">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-6 relative group cursor-default text-left overflow-hidden min-w-[300px] md:min-w-[350px] flex-1 shrink-0 snap-center flex flex-col justify-between">
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
                
                <p className="text-gray-300 mb-6 relative z-10 text-sm leading-relaxed italic">
                  {review.text}
                </p>
                <div className="flex flex-col">
                  <span className="text-white font-bold uppercase tracking-wider text-sm">{review.name}</span>
                  <span className="text-brand-red text-xs font-medium uppercase tracking-widest">{review.time}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 flex items-center justify-center bg-brand-dark hover:bg-brand-red text-white transition-colors border border-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-3">
              {reviews.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/20'}`}></div>
              ))}
            </div>

            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 flex items-center justify-center bg-brand-dark hover:bg-brand-red text-white transition-colors border border-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
