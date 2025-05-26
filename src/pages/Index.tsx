
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { HomeCoachBio } from '@/components/sections/HomeCoachBio';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { StatsSection } from '@/components/sections/StatsSection';
import { FeaturedPrograms } from '@/components/sections/FeaturedPrograms';
import { BookingForm } from '@/components/forms/BookingForm';
import { 
  Trophy, 
  CalendarDays, 
  Star, 
  Images,
  CalendarRange,
  StarHalf,
  Play,
  CheckCircle,
  Users,
  Target,
  Timer,
  Award,
  Zap,
  Heart,
  TrendingUp,
  Shield,
  Flame,
  Medal,
  Clock
} from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const quickNavItems = [
  {
    title: 'Class Schedules',
    description: 'View our comprehensive training schedule with real-time availability',
    href: '/schedule',
    icon: CalendarRange,
    color: 'from-teal-500 to-teal-600',
    features: ['Live Booking', 'Progress Tracking', 'Flexible Timing']
  },
  {
    title: 'Photo & Video Gallery',
    description: 'Explore our training sessions, achievements, and success stories',
    href: '/gallery',
    icon: Images,
    color: 'from-orange-500 to-orange-600',
    features: ['HD Quality', 'Virtual Tours', 'Success Stories']
  },
  {
    title: 'Client Reviews',
    description: 'Read verified testimonials and share your experience',
    href: '/reviews',
    icon: StarHalf,
    color: 'from-teal-600 to-orange-500',
    features: ['Verified Reviews', 'Video Testimonials', 'Rating System']
  }
];

const achievements = [
  { icon: Trophy, label: 'National Championships', count: '12+' },
  { icon: Medal, label: 'Gold Medals Won', count: '45+' },
  { icon: Users, label: 'Athletes Trained', count: '500+' },
  { icon: Star, label: 'Success Rate', count: '95%' }
];

const programHighlights = [
  {
    icon: Target,
    title: 'Precision Training',
    description: 'Advanced techniques for skill development'
  },
  {
    icon: Heart,
    title: 'Holistic Wellness',
    description: 'Mind, body, and spirit integration'
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics',
    description: 'Data-driven progress tracking'
  },
  {
    icon: Shield,
    title: 'Injury Prevention',
    description: 'Safe and sustainable practices'
  }
];

const Index = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
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
                <DialogContent className="max-w-md">
                  <BookingForm onClose={() => setShowBooking(false)} />
                </DialogContent>
              </Dialog>
              
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg">
                <Link to="/schedule" className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>View Programs</span>
                </Link>
              </Button>
              
              <Button variant="ghost" size="lg" className="text-primary hover:bg-primary/10 px-8 py-3 text-lg">
                <Play className="h-5 w-5 mr-2" />
                Watch Story
              </Button>
            </div>

            {/* Achievement Badges */}
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

      {/* Stats Section */}
      <StatsSection />

      {/* Program Highlights */}
      <section className="py-16 bg-gradient-to-br from-white to-teal-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Methodology</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Raina's Sports?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our unique approach combines traditional training with modern sports science
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programHighlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <highlight.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <FeaturedPrograms />

      {/* Coach Biography Section */}
      <HomeCoachBio />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Enhanced Quick Navigation Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Explore More</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Discover Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to excel in your athletic journey, all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {quickNavItems.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900">
                <CardHeader className={`bg-gradient-to-r ${item.color} text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="flex items-center space-x-3 relative z-10">
                    <item.icon className="h-8 w-8" />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Link to={item.href} className="flex items-center justify-center space-x-2">
                      <span>Explore</span>
                      <item.icon className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of athletes who have transformed their lives through our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              <Clock className="h-5 w-5 mr-2" />
              Schedule Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3">
              <Trophy className="h-5 w-5 mr-2" />
              View Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
