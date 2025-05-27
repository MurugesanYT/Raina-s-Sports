
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';
import { BookingFormHeader } from './booking/BookingFormHeader';
import { PersonalInfoSection } from './booking/PersonalInfoSection';
import { ProgramSelectionSection } from './booking/ProgramSelectionSection';
import { HealthGoalsSection } from './booking/HealthGoalsSection';
import { useBookingFormData } from '@/hooks/useBookingFormData';
import { useBookingFormValidation } from '@/hooks/useBookingFormValidation';
import { useBookingFormSubmission } from '@/hooks/useBookingFormSubmission';

interface BookingFormProps {
  onClose: () => void;
  selectedProgram?: string;
}

export function BookingForm({ onClose, selectedProgram }: BookingFormProps) {
  const { formData, handleInputChange, resetForm } = useBookingFormData(selectedProgram);
  const { errors, validateForm, clearError } = useBookingFormValidation();
  const { isSubmitting, submitForm } = useBookingFormSubmission();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(formData)) {
      toast({
        title: "Please fix the errors",
        description: "Some required fields are missing or invalid.",
        variant: "destructive"
      });
      return;
    }

    const success = await submitForm(formData);
    
    if (success) {
      resetForm(selectedProgram);
      
      // Close modal after a short delay
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  const handleInputChangeWithValidation = (field: string, value: string) => {
    handleInputChange(field, value);
    clearError(field);
  };

  return (
    <Card className="w-full border-0 shadow-none max-w-2xl mx-auto">
      <BookingFormHeader />
      
      <CardContent className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <PersonalInfoSection 
            formData={formData}
            errors={errors}
            onInputChange={handleInputChangeWithValidation}
          />

          <ProgramSelectionSection 
            formData={formData}
            errors={errors}
            onInputChange={handleInputChangeWithValidation}
          />

          <HealthGoalsSection 
            formData={formData}
            errors={errors}
            onInputChange={handleInputChangeWithValidation}
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
