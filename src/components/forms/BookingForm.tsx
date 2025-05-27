
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';
import { database } from '@/lib/firebase';
import { ref, push } from 'firebase/database';
import { BookingFormHeader } from './booking/BookingFormHeader';
import { PersonalInfoSection } from './booking/PersonalInfoSection';
import { ProgramSelectionSection } from './booking/ProgramSelectionSection';
import { HealthGoalsSection } from './booking/HealthGoalsSection';

interface BookingFormProps {
  onClose: () => void;
  selectedProgram?: string;
}

export function BookingForm({ onClose, selectedProgram }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sport: selectedProgram || '',
    preferredTime: '',
    experience: '',
    age: '',
    emergencyContact: '',
    medicalConditions: '',
    goals: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.sport) newErrors.sport = 'Please select a program';
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    if (!formData.experience) newErrors.experience = 'Please select experience level';
    if (!formData.emergencyContact.trim()) newErrors.emergencyContact = 'Emergency contact is required';
    if (!formData.goals.trim()) newErrors.goals = 'Please tell us about your goals';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Some required fields are missing or invalid.",
        variant: "destructive"
      });
      return;
    }

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

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        sport: selectedProgram || '',
        preferredTime: '',
        experience: '',
        age: '',
        emergencyContact: '',
        medicalConditions: '',
        goals: '',
        message: ''
      });
      setErrors({});

      // Close modal after a short delay
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Detailed error saving booking:', error);
      toast({
        title: "Booking Failed",
        description: `Failed to save your booking: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Card className="w-full border-0 shadow-none max-w-2xl mx-auto">
      <BookingFormHeader />
      
      <CardContent className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <PersonalInfoSection 
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
          />

          <ProgramSelectionSection 
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
          />

          <HealthGoalsSection 
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
          />
          
          <div className="flex flex-col space-y-4">
            <Button 
              type="submit" 
              className="w-full h-12 text-lg font-semibold" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Booking Your Consultation...
                </>
              ) : (
                <>
                  <CalendarDays className="h-5 w-5 mr-2" />
                  Book Free Consultation
                </>
              )}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              By booking, you agree to our terms and conditions. We'll contact you within 24 hours to schedule your free consultation session. No payment required.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
