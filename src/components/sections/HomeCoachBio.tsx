
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { coachDetails } from '@/lib/constants';
import { 
  Goal, 
  Volleyball, 
  Users, 
  Target, 
  PersonStanding, 
  Brain,
  Phone,
  Mail,
  Award,
  Star,
  Calendar,
  MessageCircle,
  Download,
  ExternalLink,
  CheckCircle,
  Quote
} from 'lucide-react';

const iconMap = {
  Goal,
  Volleyball,
  Users,
  Target,
  PersonStanding,
  Brain
};

export function HomeCoachBio() {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-teal-50 to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Award className="h-3 w-3 mr-1" />
            Meet Your Coach
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">Expert Guidance, Proven Results</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from an experienced professional with a track record of developing champions and transforming lives.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur">
            <CardContent className="p-0">
              <div className="lg:flex">
                {/* Image Section */}
                <div className="lg:w-2/5 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-500/20"></div>
                  <img
                    src={coachDetails.profileImageUrl}
                    alt={coachDetails.dataAiHint}
                    data-ai-hint={coachDetails.dataAiHint}
                    className="w-full h-80 lg:h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur border-0">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 text-sm">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-medium">4.9/5</span>
                          <span className="text-muted-foreground">• 500+ Reviews</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 p-8 lg:p-12">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">{coachDetails.name}</h3>
                      <p className="text-xl text-primary font-medium mb-3">{coachDetails.profession}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{coachDetails.experience} Experience</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="h-4 w-4" />
                          <span>Certified Professional</span>
                        </div>
                      </div>
                    </div>

                    {/* Motto */}
                    {coachDetails.motto && (
                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p className="italic text-foreground font-medium">{coachDetails.motto}</p>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                    
                    {/* Qualifications */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        Qualifications & Certifications
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {coachDetails.qualifications.map((qualification, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <Badge variant="secondary" className="text-sm">{qualification}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    {coachDetails.achievements && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Star className="h-4 w-4 mr-2 text-primary" />
                          Key Achievements
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {coachDetails.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Training Specialties */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Training Specialties</h4>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                        {coachDetails.specialties.map((specialty, index) => {
                          const IconComponent = iconMap[specialty.icon as keyof typeof iconMap];
                          return (
                            <div key={index} className="flex items-center space-x-2 p-2 bg-background rounded-lg border">
                              {IconComponent && <IconComponent className="h-4 w-4 text-primary" />}
                              <span className="text-sm font-medium">{specialty.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Contact & Actions */}
                    <div className="border-t pt-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>{coachDetails.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Mail className="h-4 w-4 text-primary" />
                            <span>{coachDetails.email}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col space-y-2">
                          <Button size="sm" className="w-full">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Book Consultation
                          </Button>
                          <Button variant="outline" size="sm" className="w-full">
                            <Download className="h-4 w-4 mr-2" />
                            Download Resume
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
