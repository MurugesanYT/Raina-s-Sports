
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target,
  Heart,
  TrendingUp,
  Shield
} from 'lucide-react';

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

export function ProgramHighlights() {
  return (
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
  );
}
