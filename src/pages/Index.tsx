
import { HeroSection } from '@/components/sections/HeroSection';
import { MainSections } from '@/components/sections/MainSections';
import { CallToAction } from '@/components/sections/CallToAction';
import { useBookingState } from '@/hooks/useBookingState';

const Index = () => {
  const { showBooking, setShowBooking } = useBookingState();

  return (
    <div className="min-h-screen">
      <HeroSection showBooking={showBooking} setShowBooking={setShowBooking} />
      <MainSections />
      <CallToAction showBooking={showBooking} setShowBooking={setShowBooking} />
    </div>
  );
};

export default Index;
