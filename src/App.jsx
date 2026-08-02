import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoryDivider from './components/CategoryDivider';
import ProductGrid from './components/ProductGrid';
import InteractivePricingCalculator from './components/InteractivePricingCalculator';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import LiveServiceTracker from './components/LiveServiceTracker';
import CampaignBlock from './components/CampaignBlock';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingContactFAB from './components/FloatingContactFAB';
import './App.css';

export default function App() {
  const [lang, setLang] = useState('gu'); // Default Gujarati ('gu' | 'en')
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [cartCount, setCartCount] = useState(1);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'gu' ? 'en' : 'gu'));
  };

  const handleOpenBooking = (service = null) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleBookPackage = (pkgData) => {
    setCartCount((prev) => prev + 1);
    setSelectedService({
      titleGu: `કસ્ટમ બંડલ પેકેજ (${pkgData.carType}) - ₹${pkgData.total}`,
      titleEn: `CUSTOM BUNDLE PACKAGE (${pkgData.carType}) - ₹${pkgData.total}`,
    });
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-brutal-base text-brutal-primary flex flex-col justify-between selection:bg-brutal-red selection:text-white">
      
      {/* Fixed Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenBooking={() => handleOpenBooking(null)}
        cartCount={cartCount}
      />

      {/* Hero Section with HD Car On-Scroll Video Showcase */}
      <main className="flex-grow">
        <HeroSection
          lang={lang}
          onOpenBooking={() => handleOpenBooking(null)}
        />

        {/* Category Divider 1: Our Services (Left Aligned) */}
        <CategoryDivider
          titleGu="અમારી સેવાઓ // OUR SERVICES"
          titleEn="OUR SERVICES // અમારી સેવાઓ"
          subtitle={lang === 'gu' ? '3D લેઝર & સિરામિક' : '3D LASER & CERAMIC'}
          align="left"
          lang={lang}
        />

        {/* Product / Service Grid */}
        <ProductGrid
          lang={lang}
          onSelectService={(service) => {
            setCartCount((prev) => prev + 1);
            handleOpenBooking(service);
          }}
        />

        {/* Category Divider 2: Pricing Estimator (Right Aligned) */}
        <CategoryDivider
          titleGu="પેકેજ કેલ્ક્યુલેટર // ESTIMATOR"
          titleEn="PACKAGE CALCULATOR // એસ્ટીમેટ"
          subtitle={lang === 'gu' ? '૧૫% બંડલ ઓફર' : '15% BUNDLE SAVINGS'}
          align="right"
          lang={lang}
        />

        {/* Interactive Pricing Calculator */}
        <InteractivePricingCalculator
          lang={lang}
          onBookPackage={handleBookPackage}
        />

        {/* Interactive Before & After Detailing Comparison Slider */}
        <BeforeAfterSlider lang={lang} />

        {/* Category Divider 3: Live Service Tracker (Left Aligned) */}
        <CategoryDivider
          titleGu="લાઇવ સર્વિસ ટ્રેકર // STATUS"
          titleEn="LIVE SERVICE TRACKER // સ્ટેટસ"
          subtitle={lang === 'gu' ? 'પારદર્શક ડાયગ્નોસ્ટિક્સ' : 'LIVE DIAGNOSTICS'}
          align="left"
          lang={lang}
        />

        {/* Live Service Status Tracker Timeline */}
        <LiveServiceTracker lang={lang} />

        {/* Campaign Block */}
        <CampaignBlock lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Booking Dialog Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
        lang={lang}
      />

      {/* Floating Action Button (FAB) for WhatsApp Chat & Direct Call: +91 99134 33555 */}
      <FloatingContactFAB lang={lang} />
    </div>
  );
}
