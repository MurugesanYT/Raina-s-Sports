
import { useState } from 'react';

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

export function useBookingFormValidation() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
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

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return {
    errors,
    validateForm,
    clearError,
    setErrors
  };
}
