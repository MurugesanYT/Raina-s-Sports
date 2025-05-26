
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Images,
  CalendarRange,
  StarHalf,
  BookOpen,
  CheckCircle
} from 'lucide-react';

const quickNavItems = [
  {
    title: 'Training Programs',
    description: 'Explore our comprehensive sports training programs with detailed curriculum',
    href: '/programs',
    icon: BookOpen,
    color: 'from-purple-500 to-purple-600',
    features: ['Detailed Curriculum', 'Expert Coaching', 'All Skill Levels']
  },
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

export function QuickNavigation() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Explore More</Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">Discover Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to excel in your athletic journey, all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {quickNavItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900">
              <CardHeader className={`bg-gradient-to-r ${item.color} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="flex items-center space-x-3 relative z-10">
                  <item.icon className="h-8 w-8" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
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
  );
}
