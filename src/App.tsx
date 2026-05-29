import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import OurWorkPage from './pages/OurWorkPage';
import ReviewsPage from './pages/ReviewsPage';
import FloatingContactForm from './components/FloatingContactForm';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Show the loading screen for a short duration
    const timer = setTimeout(() => {
      setIsFading(true); // Start fade-out animation
      setTimeout(() => {
        setIsLoading(false); // Remove from DOM after transition
        setIsLoaded(true); // Trigger hero/header content animations
      }, 1000); 
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-darker flex flex-col font-sans">
      <ScrollToTop />
      {isLoading && <LoadingScreen isFading={isFading} />}
      <Header isLoaded={isLoaded} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home isLoaded={isLoaded} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContactForm />
    </div>
  );
}
