
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Goal, 
  Volleyball, 
  Users, 
  Target, 
  PersonStanding, 
  Brain,
  Clock,
  Users2,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const featuredPrograms = [
  {
    title: 'Elite Football Training',
    description: 'Advanced football techniques and strategies for competitive players',
    icon: Goal,
    duration: '12 weeks',
    level: 'Advanced',
    participants: 8,
    maxParticipants: 12,
    price: '₹15,000',
    features: ['Professional Coaching', 'Video Analysis', 'Fitness Training', 'Match Preparation'],
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Volleyball Excellence',
    description: 'Master volleyball skills from basics to advanced techniques',
    icon: Volleyball,
    duration: '10 weeks',
    level: 'Intermediate',
    participants: 15,
    maxParticipants: 20,
    price: '₹12,000',
    features: ['Team Strategy', 'Spike Training', 'Defense Techniques', 'Tournament Prep'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Yoga & Meditation',
    description: 'Complete wellness program combining yoga and meditation',
    icon: PersonStanding,
    duration: '8 weeks',
    level: 'All Levels',
    participants: 25,
    maxParticipants: 30,
    price: '₹8,000',
    features: ['Stress Relief', 'Flexibility', 'Mental Clarity', 'Energy Boost'],
    color: 'from-purple-500 to-purple-600'
  }
];

export function FeaturedPrograms() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <TrendingUp className="h-3 w-3 mr-1" />
            Featured Programs
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">Popular Training Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our most successful programs designed for athletes of all levels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredPrograms.map((program, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white dark:bg-slate-800">
              <CardHeader className={`bg-gradient-to-r ${program.color} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="flex items-center justify-between relative z-10">
                  <program.icon className="h-8 w-8" />
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {program.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-2">{program.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{program.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                      Duration
                    </span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <Users2 className="h-4 w-4 mr-1 text-muted-foreground" />
                      Participants
                    </span>
                    <span className="font-medium">{program.participants}/{program.maxParticipants}</span>
                  </div>
                  
                  <Progress 
                    value={(program.participants / program.maxParticipants) * 100} 
                    className="h-2"
                  />
                </div>
                
                <div className="space-y-2 mb-4">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{program.price}</span>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {program.maxParticipants - program.participants} spots left
                  </Badge>
                </div>
                
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
