
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
  StarHalf,
  Trophy,
  Timer,
  Medal,
  Zap
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
    'B.P.Ed (Bachelor of Physical Education)',
    'Certified Sports Nutritionist',
    'Advanced Yoga Instructor (500 RYT)',
    'Sports Psychology Certification'
  ],
  profession: 'Elite Sports Coach & Wellness Expert',
  specialties: trainingSpecialties,
  phone: '+918667603395',
  email: 'sureshtreferee@gmail.com',
  profileImageUrl: 'https://i.ibb.co/TBCcTCXC/P-T-SURESH-SIR-PHOTO-FOR-SITE.jpg',
  dataAiHint: 'coach portrait',
  experience: '15+ Years',
  achievements: [
    'Trained 500+ Athletes',
    'National Level Referee',
    'Sports Excellence Award 2023',
    'Wellness Coach of the Year'
  ],
  motto: 'Excellence is not a skill, it\'s an attitude'
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

export const statsData = [
  { label: 'Students Trained', value: '500+', icon: Users },
  { label: 'Years Experience', value: '15+', icon: Trophy },
  { label: 'Success Rate', value: '95%', icon: Target },
  { label: 'Programs', value: '20+', icon: Medal }
];

export const programFeatures = [
  {
    title: 'Personalized Training',
    description: 'Customized programs based on your goals and fitness level',
    icon: Target
  },
  {
    title: 'Performance Tracking',
    description: 'Monitor your progress with detailed analytics and reports',
    icon: Timer
  },
  {
    title: 'Nutrition Guidance',
    description: 'Expert nutritional advice to fuel your athletic performance',
    icon: Zap
  },
  {
    title: 'Mental Conditioning',
    description: 'Sports psychology techniques for peak mental performance',
    icon: Brain
  }
];
