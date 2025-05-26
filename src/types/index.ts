
export interface CoachDetails {
  name: string;
  qualifications: string[];
  profession: string;
  specialties: TrainingSpecialty[];
  phone: string;
  email: string;
  profileImageUrl: string;
  dataAiHint: string;
  experience?: string;
  achievements?: string[];
  motto?: string;
}

export interface TrainingSpecialty {
  name: string;
  icon: string;
}

export interface ScheduleItem {
  id: string;
  day: string;
  time: string;
  sport: string;
  description?: string;
  location?: string;
  duration?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  maxParticipants?: number;
  currentParticipants?: number;
  price?: number;
}

export interface GalleryMedia {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  title?: string;
  dataAiHint: string;
  category?: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  sport?: string;
  verified?: boolean;
  avatar?: string;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  sport: string;
  preferredTime: string;
  message?: string;
  experience: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface ProgressData {
  date: string;
  metric: string;
  value: number;
  goal: number;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  reminders: boolean;
}
