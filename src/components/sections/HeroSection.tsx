
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { BookingForm } from '@/components/forms/BookingForm';
import { 
  Trophy, 
  CalendarDays, 
  Star, 
  Flame,
  Users,
  Medal
} from 'lucide-react';
import { useState } from 'react';

const achievements = [
  { icon: Trophy, label: 'National Championships', count: '12+' },
  { icon: Medal, label: 'Gold Medals Won', count: '45+' },
  { icon: Users, label: 'Athletes Trained', count: '500+' },
  { icon: Star, label: 'Success Rate', count: '95%' }
];

interface HeroSectionProps {
  showBooking: boolean;
  setShowBooking: (show: boolean) => void;
}

export function HeroSection({ showBooking, setShowBooking }: HeroSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-orange-50 dark:from-teal-950 dark:via-slate-900 dark:to-orange-950"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Trophy className="h-20 w-20 text-primary animate-bounce" />
              <div className="absolute -top-2 -right-2 h-6 w-6 bg-orange-500 rounded-full flex items-center justify-center">
                <Flame className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>
          
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            🏆 Award-Winning Sports Academy
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
              Raina's Sports
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed">
            Transform your athletic potential with expert coaching, cutting-edge training methods, 
            and a holistic approach to sports excellence and wellness.
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join over 500+ successful athletes who have achieved their dreams through our proven methodology, 
            personalized training programs, and world-class facilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Dialog open={showBooking} onOpenChange={setShowBooking}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  Book Free Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                <BookingForm onClose={() => setShowBooking(false)} />
              </DialogContent>
            </Dialog>
            
            <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg">
              <Link to="/programs" className="flex items-center space-x-2">
                <Star className="h-5 w-5" />
                <span>View Programs</span>
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg backdrop-blur">
                <achievement.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{achievement.count}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
