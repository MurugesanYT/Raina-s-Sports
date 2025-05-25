
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ref, get } from 'firebase/database';
import { database } from '@/lib/firebase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CalendarRange, Clock, MapPin, AlertCircle } from 'lucide-react';
import { ScheduleItem } from '@/types';
import { sportToIconMap } from '@/lib/constants';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const sports = ['Football', 'Volleyball', 'Kho-kho', 'Kabaddi', 'Cricket', 'Yoga', 'Meditation'];

export function ScheduleView() {
  const [sportFilter, setSportFilter] = useState<string>('all');
  const [dayFilter, setDayFilter] = useState<string>('all');

  const { data: schedules, isLoading, error } = useQuery({
    queryKey: ['schedules'],
    queryFn: async (): Promise<ScheduleItem[]> => {
      const schedulesRef = ref(database, 'schedules');
      const snapshot = await get(schedulesRef);
      
      if (!snapshot.exists()) {
        return [];
      }
      
      const data = snapshot.val();
      return Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
    },
  });

  const filteredSchedules = schedules?.filter(schedule => {
    const sportMatch = sportFilter === 'all' || schedule.sport === sportFilter;
    const dayMatch = dayFilter === 'all' || schedule.day === dayFilter;
    return sportMatch && dayMatch;
  }) || [];

  const resetFilters = () => {
    setSportFilter('all');
    setDayFilter('all');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-40 bg-gray-200 rounded"></div>
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
              Failed to load schedules. Please try again later.
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
            <CalendarRange className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Class Schedules</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our comprehensive training schedule. Filter by sport or day to find the perfect session for you.
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filter Schedules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
                <div className="flex-1">
                  <label className="text-sm font-medium mb-2 block">Sport</label>
                  <Select value={sportFilter} onValueChange={setSportFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Sports" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sports</SelectItem>
                      {sports.map(sport => (
                        <SelectItem key={sport} value={sport}>{sport}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium mb-2 block">Day</label>
                  <Select value={dayFilter} onValueChange={setDayFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Days</SelectItem>
                      {daysOfWeek.map(day => (
                        <SelectItem key={day} value={day}>{day}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={resetFilters} variant="outline">
                  Reset Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule Grid */}
        {filteredSchedules.length === 0 ? (
          <div className="text-center py-12">
            <CalendarRange className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No schedules found</h3>
            <p className="text-muted-foreground">
              {schedules?.length === 0 
                ? "No schedules are currently available." 
                : "Try adjusting your filters to see more results."
              }
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredSchedules.map((schedule) => {
              const IconComponent = sportToIconMap[schedule.sport];
              return (
                <Card key={schedule.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                      <CardTitle className="text-lg">{schedule.sport}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <CalendarRange className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{schedule.day}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{schedule.time}</span>
                      </div>
                      {schedule.location && (
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{schedule.location}</span>
                        </div>
                      )}
                      {schedule.description && (
                        <p className="text-sm text-muted-foreground mt-3">
                          {schedule.description}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
