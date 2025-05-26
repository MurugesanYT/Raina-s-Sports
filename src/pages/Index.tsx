
import { useState } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ProgramHighlights } from '@/components/sections/ProgramHighlights';
import { FeaturedPrograms } from '@/components/sections/FeaturedPrograms';
import { HomeCoachBio } from '@/components/sections/HomeCoachBio';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { QuickNavigation } from '@/components/sections/QuickNavigation';
import { CallToAction } from '@/components/sections/CallToAction';

const Index = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="min-h-screen">
      <HeroSection showBooking={showBooking} setShowBooking={setShowBooking} />
      <StatsSection />
      <ProgramHighlights />
      <FeaturedPrograms />
      <HomeCoachBio />
      <TestimonialsCarousel />
      <QuickNavigation />
      <CallToAction showBooking={showBooking} setShowBooking={setShowBooking} />
    </div>
  );
};

export default Index;
