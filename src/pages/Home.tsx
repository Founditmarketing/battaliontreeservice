import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import About from '../components/About';
import Services from '../components/Services';
import OurWork from '../components/OurWork';
import Stats from '../components/Stats';
import Reviews from '../components/Reviews';
import CallToAction from '../components/CallToAction';
import PageSEO from '../components/PageSEO';
import { getLocalBusinessSchema } from '../data/business';

const jsonLd = getLocalBusinessSchema({
  description: 'Veteran-owned tree service in Kountze, TX offering tree removal, trimming, stump grinding, lot clearing, and 24/7 emergency storm response.',
  priceRange: '$$',
  areaServed: 'Golden Triangle, TX',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '8',
    bestRating: '5',
    worstRating: '1',
  },
});

export default function Home({ isLoaded }: { isLoaded: boolean }) {
  return (
    <>
      <PageSEO
        title="Battalion Tree Service | Tree Removal, Trimming & Stump Grinding in Kountze, TX"
        description="Veteran-owned tree service in Kountze, TX. 24/7 emergency response, tree removal, trimming, stump grinding & lot clearing. Call (409) 673-5443 for a free estimate."
        path="/"
        jsonLd={jsonLd}
      />
      <Hero isLoaded={isLoaded} />
      <Banner />
      <Services />
      <About />
      <Reviews />
      <OurWork />
      <Stats />
      <CallToAction />
    </>
  );
}
