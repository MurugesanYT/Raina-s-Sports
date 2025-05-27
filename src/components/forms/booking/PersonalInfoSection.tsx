
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Phone, AlertCircle } from 'lucide-react';

interface PersonalInfoSectionProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    age: string;
    emergencyContact: string;
  };
  errors: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
}

export function PersonalInfoSection({ formData, errors, onInputChange }: PersonalInfoSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center space-x-2">
        <User className="h-5 w-5 text-primary" />
        <span>Personal Information</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="required">Full Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => onInputChange('name', e.target.value)}
            placeholder="Enter your full name"
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <AlertCircle className="h-3 w-3 mr-1" />
              {errors.name}
            </p>
          )}
        </div>
        
        <div>
          <Label htmlFor="age" className="required">Age</Label>
          <Input
            id="age"
            type="number"
            min="5"
            max="100"
            value={formData.age}
            onChange={(e) => onInputChange('age', e.target.value)}
            placeholder="Your age"
            className={errors.age ? 'border-red-500' : ''}
          />
          {errors.age && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <AlertCircle className="h-3 w-3 mr-1" />
              {errors.age}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email" className="required flex items-center space-x-1">
            <Mail className="h-3 w-3" />
            <span>Email Address</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => onInputChange('email', e.target.value)}
            placeholder="your.email@example.com"
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <AlertCircle className="h-3 w-3 mr-1" />
              {errors.email}
            </p>
          )}
        </div>
        
        <div>
          <Label htmlFor="phone" className="required flex items-center space-x-1">
            <Phone className="h-3 w-3" />
            <span>Phone Number</span>
          </Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => onInputChange('phone', e.target.value)}
            placeholder="+91 98765 43210"
            className={errors.phone ? 'border-red-500' : ''}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <AlertCircle className="h-3 w-3 mr-1" />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="emergencyContact" className="required">Emergency Contact</Label>
        <Input
          id="emergencyContact"
          value={formData.emergencyContact}
          onChange={(e) => onInputChange('emergencyContact', e.target.value)}
          placeholder="Emergency contact number"
          className={errors.emergencyContact ? 'border-red-500' : ''}
        />
        {errors.emergencyContact && (
          <p className="text-red-500 text-xs mt-1 flex items-center">
            <AlertCircle className="h-3 w-3 mr-1" />
            {errors.emergencyContact}
          </p>
        )}
      </div>
    </div>
  );
}
