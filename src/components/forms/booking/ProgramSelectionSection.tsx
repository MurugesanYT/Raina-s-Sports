
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Award, AlertCircle } from 'lucide-react';

interface ProgramSelectionSectionProps {
  formData: {
    sport: string;
    preferredTime: string;
    experience: string;
  };
  errors: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
}

export function ProgramSelectionSection({ formData, errors, onInputChange }: ProgramSelectionSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Program Selection</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="required">Sport/Program Interest</Label>
          <Select 
            value={formData.sport}
            onValueChange={(value) => onInputChange('sport', value)}
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
          <Select onValueChange={(value) => onInputChange('preferredTime', value)}>
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
          onValueChange={(value) => onInputChange('experience', value)}
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
  );
}
