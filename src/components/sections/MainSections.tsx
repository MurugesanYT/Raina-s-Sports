
import { StatsSection } from '@/components/sections/StatsSection';
import { ProgramHighlights } from '@/components/sections/ProgramHighlights';
import { FeaturedPrograms } from '@/components/sections/FeaturedPrograms';
import { HomeCoachBio } from '@/components/sections/HomeCoachBio';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { QuickNavigation } from '@/components/sections/QuickNavigation';

export function MainSections() {
  return (
    <>
      <StatsSection />
      <ProgramHighlights />
      <FeaturedPrograms />
      <HomeCoachBio />
      <TestimonialsCarousel />
      <QuickNavigation />
    </>
  );
}
