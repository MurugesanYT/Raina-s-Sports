
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, User, Phone, Mail, Award, CheckCircle, AlertCircle } from 'lucide-react';
import { database } from '@/lib/firebase';
import { ref, push } from 'firebase/database';

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
      <CardHeader className="text-center pb-6 bg-gradient-to-r from-teal-50 to-orange-50 dark:from-teal-950 dark:to-orange-950 rounded-t-lg">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <CalendarDays className="h-8 w-8 text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">
          Book Your Free Consultation
        </CardTitle>
        <p className="text-muted-foreground">
          Start your fitness journey with a personalized consultation session
        </p>
        <Badge variant="secondary" className="mx-auto">
          <CheckCircle className="h-3 w-3 mr-1" />
          100% Free • No Commitment
        </Badge>
      </CardHeader>
      
      <CardContent className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information Section */}
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
                  onChange={(e) => handleInputChange('name', e.target.value)}
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
                  onChange={(e) => handleInputChange('age', e.target.value)}
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
                  onChange={(e) => handleInputChange('email', e.target.value)}
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
                  onChange={(e) => handleInputChange('phone', e.target.value)}
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
                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
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

          {/* Program Selection Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Program Selection</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="required">Sport/Program Interest</Label>
                <Select 
                  value={formData.sport}
                  onValueChange={(value) => handleInputChange('sport', value)}
                >
                  <SelectTrigger className={errors.sport ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Elite Football Training">⚽ Elite Football Training</SelectItem>
                    <SelectItem value="Volleyball Excellence">🏐 Volleyball Excellence</SelectItem>
                    <SelectItem value="Yoga & Meditation">🧘‍♀️ Yoga & Meditation</SelectItem>
                    <SelectItem value="cricket">🏏 Cricket Training</SelectItem>
                    <SelectItem value="kho-kho">🏃‍♂️ Kho-kho</SelectItem>
                    <SelectItem value="kabaddi">🤼‍♂️ Kabaddi</SelectItem>
                  </SelectContent>
                </Select>
                {errors.sport && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.sport}
                  </p>
                )}
              </div>

              <div>
                <Label>Preferred Training Time</Label>
                <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">🌅 Morning (6-10 AM)</SelectItem>
                    <SelectItem value="afternoon">☀️ Afternoon (12-4 PM)</SelectItem>
                    <SelectItem value="evening">🌇 Evening (5-8 PM)</SelectItem>
                    <SelectItem value="flexible">⏰ Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label className="required flex items-center space-x-1">
                <Award className="h-3 w-3" />
                <span>Experience Level</span>
              </Label>
              <RadioGroup
                value={formData.experience}
                onValueChange={(value) => handleInputChange('experience', value)}
                className="flex space-x-6 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner" className="text-sm">🌱 Beginner</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate" className="text-sm">📈 Intermediate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced" className="text-sm">🏆 Advanced</Label>
                </div>
              </RadioGroup>
              {errors.experience && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.experience}
                </p>
              )}
            </div>
          </div>

          {/* Health & Goals Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Health & Goals</h3>
            
            <div>
              <Label htmlFor="medicalConditions">Medical Conditions (if any)</Label>
              <Textarea
                id="medicalConditions"
                value={formData.medicalConditions}
                onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                placeholder="Any medical conditions, injuries, or limitations we should know about..."
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="goals" className="required">Your Fitness Goals</Label>
              <Textarea
                id="goals"
                value={formData.goals}
                onChange={(e) => handleInputChange('goals', e.target.value)}
                placeholder="What do you want to achieve? (e.g., lose weight, build muscle, improve performance, learn new skills...)"
                rows={3}
                className={errors.goals ? 'border-red-500' : ''}
              />
              {errors.goals && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {errors.goals}
                </p>
              )}
            </div>
            
            <div>
              <Label htmlFor="message">Additional Message (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Any questions or additional information you'd like to share..."
                rows={2}
              />
            </div>
          </div>
          
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
