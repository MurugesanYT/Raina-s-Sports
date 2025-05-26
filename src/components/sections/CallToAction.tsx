
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { BookingForm } from '@/components/forms/BookingForm';
import { Clock, Trophy } from 'lucide-react';

interface CallToActionProps {
  showBooking: boolean;
  setShowBooking: (show: boolean) => void;
}

export function CallToAction({ showBooking, setShowBooking }: CallToActionProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-orange-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of athletes who have transformed their lives through our programs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Dialog open={showBooking} onOpenChange={setShowBooking}>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="px-8 py-3">
                <Clock className="h-5 w-5 mr-2" />
                Schedule Free Trial
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
              <BookingForm onClose={() => setShowBooking(false)} />
            </DialogContent>
          </Dialog>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3">
            <Link to="/reviews" className="flex items-center space-x-2">
              <Trophy className="h-5 w-5" />
              <span>View Success Stories</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
