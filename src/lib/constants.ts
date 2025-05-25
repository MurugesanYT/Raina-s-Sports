
import { CoachDetails, TrainingSpecialty } from '@/types';
import { 
  Goal, 
  Volleyball, 
  Users, 
  Target, 
  PersonStanding, 
  Brain,
  CalendarDays,
  Star,
  Image,
  CalendarRange,
  Images,
  StarHalf
} from 'lucide-react';

export const trainingSpecialties: TrainingSpecialty[] = [
  { name: 'Football', icon: 'Goal' },
  { name: 'Volleyball', icon: 'Volleyball' },
  { name: 'Kho-kho', icon: 'Users' },
  { name: 'Kabaddi', icon: 'Users' },
  { name: 'Cricket', icon: 'Target' },
  { name: 'Yoga', icon: 'PersonStanding' },
  { name: 'Meditation', icon: 'Brain' }
];

export const coachDetails: CoachDetails = {
  name: 'Suresh T',
  qualifications: [
    'BCA (Bachelor of Computer Applications)',
    'B.P.Ed (Bachelor of Physical Education)'
  ],
  profession: 'Sports Coach & Yoga Instructor',
  specialties: trainingSpecialties,
  phone: '+918667603395',
  email: 'sureshtreferee@gmail.com',
  profileImageUrl: 'https://i.ibb.co/TBCcTCXC/P-T-SURESH-SIR-PHOTO-FOR-SITE.jpg',
  dataAiHint: 'coach portrait'
};

export const sportToIconMap: Record<string, any> = {
  'Football': Goal,
  'Volleyball': Volleyball,
  'Kho-kho': Users,
  'Kabaddi': Users,
  'Cricket': Target,
  'Yoga': PersonStanding,
  'Meditation': Brain
};

export const navigationItems = [
  { title: 'Home', href: '/', icon: 'Home' },
  { title: 'Schedules', href: '/schedule', icon: 'CalendarDays' },
  { title: 'Gallery', href: '/gallery', icon: 'Image' },
  { title: 'Reviews', href: '/reviews', icon: 'Star' }
];
