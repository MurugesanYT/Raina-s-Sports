
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { database } from '@/lib/firebase';
import { ref, push } from 'firebase/database';

interface FormData {
  name: string;
  email: string;
  phone: string;
  sport: string;
  preferredTime: string;
  experience: string;
  age: string;
  emergencyContact: string;
  medicalConditions: string;
  goals: string;
  message: string;
}

export function useBookingFormSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = async (formData: FormData) => {
    setIsSubmitting(true);

    try {
      console.log('Attempting to save booking to Firebase...');
      console.log('Database object:', database);
      
      if (!database) {
        throw new Error('Firebase database not initialized');
      }

      const bookingsRef = ref(database, 'bookings');
      const newBooking = {
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'pending',
        submittedAt: Date.now()
      };
      
      console.log('Saving booking data:', newBooking);
      const result = await push(bookingsRef, newBooking);
      console.log('Booking saved successfully:', result.key);

      toast({
        title: "Consultation Booked Successfully! 🎉",
        description: "We'll contact you within 24 hours to confirm your free consultation.",
      });

      return true;
    } catch (error) {
      console.error('Detailed error saving booking:', error);
      toast({
        title: "Booking Failed",
        description: `Failed to save your booking: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`,
        variant: "destructive"
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitForm
  };
}
