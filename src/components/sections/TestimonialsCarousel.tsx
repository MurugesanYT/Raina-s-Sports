
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    sport: 'Volleyball',
    rating: 5,
    comment: 'Coach Suresh transformed my game completely. His personalized approach and technical expertise helped me secure a spot in the state team.',
    image: 'https://placehold.co/60x60.png',
    achievement: 'State Team Player',
    videoTestimonial: true
  },
  {
    name: 'Rahul Kumar',
    sport: 'Football',
    rating: 5,
    comment: 'The mental conditioning and fitness regime here is exceptional. I improved my performance by 40% in just 6 months.',
    image: 'https://placehold.co/60x60.png',
    achievement: 'District Champion',
    videoTestimonial: false
  },
  {
    name: 'Anjali Patel',
    sport: 'Yoga',
    rating: 5,
    comment: 'Beyond physical training, I found inner peace and balance. The holistic approach here is truly life-changing.',
    image: 'https://placehold.co/60x60.png',
    achievement: 'Wellness Coach',
    videoTestimonial: true
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-orange-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Star className="h-3 w-3 mr-1" />
            Success Stories
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">What Our Athletes Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from real athletes who achieved their dreams with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="relative flex-shrink-0">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  {currentTestimonial.videoTestimonial && (
                    <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                      <Play className="h-3 w-3 text-white fill-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-grow">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <blockquote className="text-lg text-foreground mb-4 leading-relaxed">
                    "{currentTestimonial.comment}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < currentTestimonial.rating 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <Badge variant="secondary">{currentTestimonial.achievement}</Badge>
                  </div>
                  
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">{currentTestimonial.name}</div>
                    <div className="text-muted-foreground">{currentTestimonial.sport} Athlete</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-6">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" onClick={prevTestimonial}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextTestimonial}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
