import { useRef } from "react";
import { Toaster } from "./components/ui/sonner";
import { HeroSection } from "./components/HeroSection";
import { GallerySection } from "./components/GallerySection";
import { HighlightsSection } from "./components/HighlightsSection";
import { BookingSection } from "./components/BookingSection";
import { RatesPoliciesSection } from "./components/RatesPoliciesSection";
import { LocationSection } from "./components/LocationSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <Toaster position="top-center" />
      
      <HeroSection 
        onCheckAvailability={scrollToBooking}
        onRequestBook={scrollToContact}
      />
      
      <GallerySection />
      
      <HighlightsSection />
      
      <BookingSection />
      
      <RatesPoliciesSection />
      
      <LocationSection />
      
      <FAQSection />
      
      <ContactSection />
      
      <Footer />
    </div>
  );
}
