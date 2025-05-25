
export interface CoachDetails {
  name: string;
  qualifications: string[];
  profession: string;
  specialties: TrainingSpecialty[];
  phone: string;
  email: string;
  profileImageUrl: string;
  dataAiHint: string;
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
}

export interface GalleryMedia {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  title?: string;
  dataAiHint: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}
