
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle } from 'lucide-react';

interface HealthGoalsSectionProps {
  formData: {
    medicalConditions: string;
    goals: string;
    message: string;
  };
  errors: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
}

export function HealthGoalsSection({ formData, errors, onInputChange }: HealthGoalsSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Health & Goals</h3>
      
      <div>
        <Label htmlFor="medicalConditions">Medical Conditions (if any)</Label>
        <Textarea
          id="medicalConditions"
          value={formData.medicalConditions}
          onChange={(e) => onInputChange('medicalConditions', e.target.value)}
          placeholder="Any medical conditions, injuries, or limitations we should know about..."
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="goals" className="required">Your Fitness Goals</Label>
        <Textarea
          id="goals"
          value={formData.goals}
          onChange={(e) => onInputChange('goals', e.target.value)}
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
          onChange={(e) => onInputChange('message', e.target.value)}
          placeholder="Any questions or additional information you'd like to share..."
          rows={2}
        />
      </div>
    </div>
  );
}
