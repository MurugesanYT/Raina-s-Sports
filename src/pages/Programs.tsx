
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { BookingForm } from '@/components/forms/BookingForm';
import { useState } from 'react';
import { 
  Goal, 
  Volleyball, 
  PersonStanding, 
  Star,
  Users,
  Trophy,
  Target,
  CheckCircle,
  Award,
  Zap
} from 'lucide-react';

const programsData = {
  football: {
    title: "Elite Football Training",
    icon: Goal,
    color: "from-green-500 to-green-600",
    description: "Master the beautiful game with our comprehensive football training program designed for players of all skill levels.",
    detailedDescription: "Our Elite Football Training program is meticulously designed to develop well-rounded footballers who excel both on and off the pitch. We focus on technical skills, tactical understanding, physical conditioning, and mental strength.",
    benefits: [
      "Improved ball control and first touch",
      "Enhanced passing accuracy and vision",
      "Stronger shooting technique and power",
      "Better defensive positioning and tackling",
      "Increased speed, agility, and endurance",
      "Strategic game understanding",
      "Leadership and teamwork skills",
      "Mental toughness and confidence"
    ],
    curriculum: [
      {
        phase: "Foundation Phase (Weeks 1-4)",
        content: "Basic ball control, passing fundamentals, shooting basics, fitness conditioning"
      },
      {
        phase: "Development Phase (Weeks 5-8)",
        content: "Advanced dribbling, tactical awareness, set pieces, position-specific training"
      },
      {
        phase: "Mastery Phase (Weeks 9-12)",
        content: "Match situations, advanced tactics, leadership skills, performance analysis"
      }
    ],
    equipment: ["Professional footballs", "Training cones", "Goal posts", "Fitness equipment", "Video analysis tools"],
    ageGroups: ["Under 12", "Under 16", "Under 21", "Adult (21+)"],
    testimonial: "This program transformed my game completely. I went from playing local matches to being scouted by professional clubs! - Arjun P., Age 19"
  },
  volleyball: {
    title: "Volleyball Excellence",
    icon: Volleyball,
    color: "from-blue-500 to-blue-600",
    description: "Elevate your volleyball skills with our comprehensive training that covers all aspects of the sport.",
    detailedDescription: "Our Volleyball Excellence program is designed to create complete volleyball players with exceptional skills in serving, spiking, blocking, and game strategy. We emphasize both individual technique and team coordination.",
    benefits: [
      "Powerful and accurate serving technique",
      "Explosive spiking and attacking skills",
      "Solid blocking and defensive positioning",
      "Quick reflexes and court awareness",
      "Team coordination and communication",
      "Physical conditioning and jump training",
      "Mental focus and competitive spirit",
      "Leadership and sportsmanship"
    ],
    curriculum: [
      {
        phase: "Basic Skills (Weeks 1-3)",
        content: "Serving techniques, basic passing, footwork fundamentals, court positioning"
      },
      {
        phase: "Intermediate Skills (Weeks 4-7)",
        content: "Spiking mechanics, blocking techniques, advanced serving, team rotations"
      },
      {
        phase: "Advanced Play (Weeks 8-10)",
        content: "Game strategies, advanced tactics, specialized positions, tournament preparation"
      }
    ],
    equipment: ["Official volleyballs", "Net systems", "Training equipment", "Jump training tools", "Video analysis"],
    ageGroups: ["Youth (12-16)", "Junior (16-18)", "Senior (18+)", "Masters (35+)"],
    testimonial: "The training intensity and technique focus helped me make my state team. The coaches really know how to bring out the best in you! - Priya S., Age 17"
  },
  yoga: {
    title: "Yoga & Meditation",
    icon: PersonStanding,
    color: "from-purple-500 to-purple-600",
    description: "Find balance, strength, and inner peace through our holistic yoga and meditation program.",
    detailedDescription: "Our Yoga & Meditation program combines ancient wisdom with modern wellness practices to enhance physical health, mental clarity, and spiritual well-being. Perfect for athletes and non-athletes alike.",
    benefits: [
      "Increased flexibility and mobility",
      "Enhanced core strength and stability",
      "Improved breathing techniques",
      "Stress reduction and relaxation",
      "Better sleep quality",
      "Enhanced focus and concentration",
      "Injury prevention and recovery",
      "Mind-body connection"
    ],
    curriculum: [
      {
        phase: "Foundation (Weeks 1-3)",
        content: "Basic poses, breathing techniques, meditation basics, alignment principles"
      },
      {
        phase: "Development (Weeks 4-6)",
        content: "Flow sequences, advanced poses, pranayama, mindfulness practices"
      },
      {
        phase: "Mastery (Weeks 7-8)",
        content: "Advanced flows, deep meditation, yoga philosophy, personal practice development"
      }
    ],
    equipment: ["Yoga mats", "Blocks and straps", "Meditation cushions", "Essential oils", "Calming music"],
    ageGroups: ["Kids (8-12)", "Teens (13-17)", "Adults (18-60)", "Seniors (60+)"],
    testimonial: "This program changed my life! I am more flexible, calm, and focused than ever before. It is the perfect complement to my athletic training. - Rahul M., Age 25"
  }
};

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState<string>('');
  const [showBooking, setShowBooking] = useState(false);

  const handleEnrollClick = (programTitle: string) => {
    setSelectedProgram(programTitle);
    setShowBooking(true);
  };

  return (
    <div className="min-h-screen py-8 md:py-16 bg-gradient-to-br from-white via-teal-50 to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <Badge variant="outline" className="mb-4">
            <Star className="h-3 w-3 mr-1" />
            Detailed Programs
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Training Programs</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Discover comprehensive details about each of our specialized training programs designed to help you achieve excellence.
          </p>
        </div>

        {/* Programs Tabs */}
        <Tabs defaultValue="football" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-6 md:mb-8">
            <TabsTrigger value="football" className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm">
              <Goal className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Football</span>
              <span className="sm:hidden">⚽</span>
            </TabsTrigger>
            <TabsTrigger value="volleyball" className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm">
              <Volleyball className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Volleyball</span>
              <span className="sm:hidden">🏐</span>
            </TabsTrigger>
            <TabsTrigger value="yoga" className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm">
              <PersonStanding className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Yoga</span>
              <span className="sm:hidden">🧘</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(programsData).map(([key, program]) => (
            <TabsContent key={key} value={key}>
              <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-4 md:space-y-6">
                  {/* Program Header */}
                  <Card className="overflow-hidden">
                    <CardHeader className={`bg-gradient-to-r ${program.color} text-white`}>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                        <program.icon className="h-8 w-8 md:h-10 md:w-10" />
                        <div>
                          <CardTitle className="text-xl md:text-2xl">{program.title}</CardTitle>
                          <p className="text-white/90 text-sm md:text-base">{program.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6">
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {program.detailedDescription}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Benefits */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-lg md:text-xl">
                        <Trophy className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                        <span>Program Benefits</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
                        {program.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500 flex-shrink-0" />
                            <span className="text-xs md:text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Curriculum */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-lg md:text-xl">
                        <Target className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                        <span>Training Curriculum</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 md:space-y-4">
                        {program.curriculum.map((phase, index) => (
                          <div key={index} className="border-l-4 border-primary pl-3 md:pl-4">
                            <h4 className="font-semibold text-foreground text-sm md:text-base">{phase.phase}</h4>
                            <p className="text-muted-foreground text-xs md:text-sm">{phase.content}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Testimonial */}
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start space-x-3">
                        <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="italic text-foreground text-sm md:text-base">{program.testimonial}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-4 md:space-y-6">
                  {/* Quick Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base md:text-lg">Program Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 md:space-y-4">
                      <div>
                        <h4 className="font-semibold text-xs md:text-sm text-muted-foreground uppercase tracking-wide">Age Groups</h4>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {program.ageGroups.map((group, index) => (
                            <Badge key={index} variant="outline" className="text-xs">{group}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-xs md:text-sm text-muted-foreground uppercase tracking-wide">Equipment Provided</h4>
                        <div className="mt-2 space-y-1 md:space-y-2">
                          {program.equipment.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 text-xs md:text-sm">
                              <Zap className="h-3 w-3 text-primary flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Enrollment */}
                  <Card className="bg-gradient-to-br from-primary/5 to-orange-500/5">
                    <CardContent className="p-4 md:p-6">
                      <div className="text-center space-y-3 md:space-y-4">
                        <h3 className="font-bold text-lg md:text-xl">Ready to Start?</h3>
                        <p className="text-muted-foreground text-xs md:text-sm">
                          Book your free consultation to learn more about this program.
                        </p>
                        <Button 
                          onClick={() => handleEnrollClick(program.title)}
                          className="w-full"
                          size="lg"
                        >
                          Book Free Consultation
                        </Button>
                        <div className="flex items-center justify-center space-x-2 text-xs md:text-sm text-muted-foreground">
                          <Users className="h-3 w-3 md:h-4 md:w-4" />
                          <span>Limited spots available</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Booking Dialog */}
        <Dialog open={showBooking} onOpenChange={setShowBooking}>
          <DialogContent className="max-w-md md:max-w-4xl max-h-[90vh] overflow-hidden">
            <BookingForm 
              onClose={() => setShowBooking(false)} 
              selectedProgram={selectedProgram}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Programs;
