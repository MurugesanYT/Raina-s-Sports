
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { coachDetails } from '@/lib/constants';
import { 
  Goal, 
  Volleyball, 
  Users, 
  Target, 
  PersonStanding, 
  Brain,
  Phone,
  Mail
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
    <section className="py-16 bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet Your Coach</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from an experienced professional dedicated to helping you achieve your athletic and wellness goals.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={coachDetails.profileImageUrl}
                  alt={coachDetails.dataAiHint}
                  data-ai-hint={coachDetails.dataAiHint}
                  className="w-full h-64 md:h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{coachDetails.name}</h3>
                <p className="text-muted-foreground mb-4">{coachDetails.profession}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Qualifications</h4>
                  <div className="space-y-2">
                    {coachDetails.qualifications.map((qualification, index) => (
                      <Badge key={index} variant="secondary" className="mr-2 mb-2">
                        {qualification}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Training Specialties</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {coachDetails.specialties.map((specialty, index) => {
                      const IconComponent = iconMap[specialty.icon as keyof typeof iconMap];
                      return (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          {IconComponent && <IconComponent className="h-4 w-4 text-primary" />}
                          <span>{specialty.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground mb-3">Contact Information</h4>
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
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
