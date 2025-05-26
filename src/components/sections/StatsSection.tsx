
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { statsData } from '@/lib/constants';
import { TrendingUp } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <TrendingUp className="h-3 w-3 mr-1" />
            Our Impact
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">Results That Speak</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Numbers that showcase our commitment to athletic excellence and student success.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {statsData.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-teal-50 dark:from-slate-800 dark:to-slate-700 border-0">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
