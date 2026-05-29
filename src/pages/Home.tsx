import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import About from '../components/About';
import Services from '../components/Services';
import OurWork from '../components/OurWork';
import Stats from '../components/Stats';
import Reviews from '../components/Reviews';
import CallToAction from '../components/CallToAction';

export default function Home({ isLoaded }: { isLoaded: boolean }) {
  return (
    <>
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
