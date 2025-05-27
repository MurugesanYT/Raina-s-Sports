
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, CheckCircle } from 'lucide-react';

export function BookingFormHeader() {
  return (
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
  );
}
