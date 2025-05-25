
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ref, get, push } from 'firebase/database';
import { database } from '@/lib/firebase';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StarHalf, Star, AlertCircle, Send } from 'lucide-react';
import { Review } from '@/types';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const reviewSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  rating: z.string().refine(val => ['1', '2', '3', '4', '5'].includes(val), 'Please select a rating'),
  comment: z.string().min(10, 'Comment must be at least 10 characters'),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

export function ReviewsView() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: '',
      rating: '',
      comment: '',
    },
  });

  const { data: reviews, isLoading, error } = useQuery({
    queryKey: ['reviews'],
    queryFn: async (): Promise<Review[]> => {
      const reviewsRef = ref(database, 'reviews');
      const snapshot = await get(reviewsRef);
      
      if (!snapshot.exists()) {
        return [];
      }
      
      const data = snapshot.val();
      return Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    },
  });

  const submitReviewMutation = useMutation({
    mutationFn: async (reviewData: ReviewFormData) => {
      const reviewsRef = ref(database, 'reviews');
      const newReview: Omit<Review, 'id'> = {
        name: reviewData.name,
        rating: parseInt(reviewData.rating),
        comment: reviewData.comment,
        date: new Date().toISOString(),
      };
      await push(reviewsRef, newReview);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
      form.reset();
      toast({
        title: 'Review submitted successfully!',
        description: 'Thank you for sharing your experience with us.',
      });
    },
    onError: () => {
      toast({
        title: 'Error submitting review',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ReviewFormData) => {
    setIsSubmitting(true);
    submitReviewMutation.mutate(data);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="space-y-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Failed to load reviews. Please try again later.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <StarHalf className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Client Testimonials</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read what our athletes and clients have to say about their experience with Raina's Sports.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Review Submission Form */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="h-5 w-5" />
                <span>Share Your Experience</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="rating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rating</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a rating" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {[1, 2, 3, 4, 5].map((rating) => (
                                <SelectItem key={rating} value={rating.toString()}>
                                  <div className="flex items-center space-x-2">
                                    <span>{rating}</span>
                                    <div className="flex">
                                      {renderStars(rating)}
                                    </div>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Review</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Share your experience with Raina's Sports..."
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Reviews List */}
          {!reviews || reviews.length === 0 ? (
            <div className="text-center py-12">
              <StarHalf className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No reviews yet</h3>
              <p className="text-muted-foreground">
                Be the first to share your experience with Raina's Sports!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{review.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            ({review.rating}/5)
                          </span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {format(new Date(review.date), 'MMMM d, yyyy')}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
