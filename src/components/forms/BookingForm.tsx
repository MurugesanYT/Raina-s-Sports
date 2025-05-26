
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, User, Phone, Mail } from 'lucide-react';

interface BookingFormProps {
  onClose: () => void;
}

export function BookingForm({ onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sport: '',
    preferredTime: '',
    experience: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Booking Confirmed!",
      description: "We'll contact you within 24 hours to schedule your consultation.",
    });

    setIsSubmitting(false);
    onClose();
  };

  return (
    <Card className="w-full border-0 shadow-none">
      <CardHeader className="text-center pb-4">
        <CardTitle className="flex items-center justify-center space-x-2 text-xl">
          <CalendarDays className="h-5 w-5 text-primary" />
          <span>Book Free Consultation</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Start your journey with a personalized consultation
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="name" className="flex items-center space-x-1">
                <User className="h-3 w-3" />
                <span>Full Name</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>Email</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>Phone Number</span>
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="+91 98765 43210"
                required
              />
            </div>
            
            <div>
              <Label>Sport/Program Interest</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, sport: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a sport or program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="volleyball">Volleyball</SelectItem>
                  <SelectItem value="cricket">Cricket</SelectItem>
                  <SelectItem value="kho-kho">Kho-kho</SelectItem>
                  <SelectItem value="kabaddi">Kabaddi</SelectItem>
                  <SelectItem value="yoga">Yoga</SelectItem>
                  <SelectItem value="meditation">Meditation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>Experience Level</span>
              </Label>
              <RadioGroup
                value={formData.experience}
                onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}
                className="flex space-x-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner" className="text-sm">Beginner</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate" className="text-sm">Intermediate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced" className="text-sm">Advanced</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <Label htmlFor="message">Additional Message (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Tell us about your goals or any specific requirements..."
                rows={3}
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Booking...' : 'Book Free Consultation'}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            By booking, you agree to our terms and conditions. We'll contact you within 24 hours.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
