
import { useState } from 'react';

export interface BookingFormData {
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

export function useBookingFormData(selectedProgram?: string) {
  const [formData, setFormData] = useState<BookingFormData>({
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = (selectedProgram?: string) => {
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
  };

  return {
    formData,
    handleInputChange,
    resetForm
  };
}
