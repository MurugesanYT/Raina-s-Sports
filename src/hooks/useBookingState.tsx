
import { useState } from 'react';

export function useBookingState() {
  const [showBooking, setShowBooking] = useState(false);

  const openBooking = () => setShowBooking(true);
  const closeBooking = () => setShowBooking(false);

  return {
    showBooking,
    setShowBooking,
    openBooking,
    closeBooking
  };
}
