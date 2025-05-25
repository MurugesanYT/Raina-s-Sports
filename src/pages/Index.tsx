
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HomeCoachBio } from '@/components/sections/HomeCoachBio';
import { 
  Dumbbell, 
  CalendarDays, 
  Star, 
  Image,
  CalendarRange,
  Images,
  StarHalf
} from 'lucide-react';

const quickNavItems = [
  {
    title: 'Class Schedules',
    description: 'View our comprehensive training schedule',
    href: '/schedule',
    icon: CalendarRange,
    color: 'from-teal-500 to-teal-600'
  },
  {
    title: 'Photo & Video Gallery',
    description: 'Explore our training sessions and achievements',
    href: '/gallery',
    icon: Images,
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Client Reviews',
    description: 'Read testimonials from our athletes',
    href: '/reviews',
    icon: StarHalf,
    color: 'from-teal-600 to-orange-500'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sports-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Dumbbell className="h-16 w-16 text-primary mx-auto mb-6 animate-bounce-gentle" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Welcome to Raina's Sports
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Unlock your potential with expert coaching in a variety of sports and transformative yoga sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/schedule" className="flex items-center space-x-2">
                  <CalendarDays className="h-5 w-5" />
                  <span>View Class Schedule</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/reviews" className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>Read Reviews</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Biography Section */}
      <HomeCoachBio />

      {/* Quick Navigation Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Explore Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover everything we offer to help you reach your fitness and athletic goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {quickNavItems.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className={`bg-gradient-to-r ${item.color} text-white`}>
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-8 w-8" />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Link to={item.href}>Explore</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
