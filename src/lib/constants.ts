
export const navigationItems = [
  { title: 'Home', href: '/' },
  { title: 'Programs', href: '/programs' },
  { title: 'Schedule', href: '/schedule' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Reviews', href: '/reviews' },
];

export const siteConfig = {
  name: "Raina's Sports Academy",
  description: "Premier sports training and coaching academy",
  url: "https://rainas-sports.com",
};

export const coachDetails = {
  name: "Raina Kumar",
  title: "Professional Sports Coach & Fitness Expert",
  profession: "Professional Sports Coach & Fitness Expert",
  experience: "15+ Years",
  certifications: ["FIFA Licensed Coach", "Yoga Alliance Certified", "Sports Science Degree"],
  qualifications: ["FIFA Licensed Coach", "Yoga Alliance Certified", "Sports Science Degree"],
  bio: "Passionate about developing athletes at all levels, from beginners to professionals. Specializing in football, volleyball, and holistic fitness training.",
  image: "/placeholder.svg",
  profileImageUrl: "/placeholder.svg",
  dataAiHint: "Professional sports coach Raina Kumar in action during training session",
  motto: "Excellence through dedication, growth through challenge, success through teamwork.",
  achievements: [
    "Trained 500+ athletes",
    "95% student success rate",
    "FIFA certified coach",
    "15+ years experience",
    "Multiple championship wins",
    "Youth development expert"
  ],
  specialties: [
    { name: "Football", icon: "Goal" },
    { name: "Volleyball", icon: "Volleyball" },
    { name: "Fitness", icon: "PersonStanding" },
    { name: "Yoga", icon: "Brain" },
    { name: "Team Building", icon: "Users" },
    { name: "Goal Setting", icon: "Target" }
  ],
  phone: "+91 98765 43210",
  email: "raina@rainasports.com"
};

export const sportToIconMap = {
  'Elite Football Training': '⚽',
  'Volleyball Excellence': '🏐',
  'Yoga & Meditation': '🧘‍♀️',
  'cricket': '🏏',
  'kho-kho': '🏃‍♂️',
  'kabaddi': '🤼‍♂️'
};

export const statsData = [
  { label: 'Students Trained', value: 500, suffix: '+', icon: Users },
  { label: 'Years Experience', value: 15, suffix: '+', icon: Calendar },
  { label: 'Success Rate', value: 95, suffix: '%', icon: Target },
  { label: 'Programs', value: 6, suffix: '', icon: Award }
];

// Import icons for statsData
import { Users, Calendar, Target, Award } from 'lucide-react';

export const programsData = [
  {
    id: 'elite-football',
    title: 'Elite Football Training',
    description: 'Professional football coaching for all skill levels',
    icon: '⚽',
    duration: '90 minutes',
    level: 'All Levels',
    maxParticipants: 15,
    price: 2500,
    features: [
      'Technical skills development',
      'Tactical understanding',
      'Physical conditioning',
      'Mental preparation',
      'Match simulation',
      'Individual feedback'
    ],
    schedule: [
      { day: 'Monday', time: '6:00 AM - 7:30 AM' },
      { day: 'Wednesday', time: '6:00 AM - 7:30 AM' },
      { day: 'Friday', time: '6:00 AM - 7:30 AM' },
      { day: 'Saturday', time: '4:00 PM - 5:30 PM' }
    ]
  },
  {
    id: 'volleyball-excellence',
    title: 'Volleyball Excellence',
    description: 'Master the fundamentals and advanced techniques of volleyball',
    icon: '🏐',
    duration: '75 minutes',
    level: 'Beginner to Advanced',
    maxParticipants: 12,
    price: 2000,
    features: [
      'Serving techniques',
      'Spiking and blocking',
      'Team coordination',
      'Court positioning',
      'Game strategies',
      'Fitness conditioning'
    ],
    schedule: [
      { day: 'Tuesday', time: '5:30 AM - 6:45 AM' },
      { day: 'Thursday', time: '5:30 AM - 6:45 AM' },
      { day: 'Saturday', time: '2:00 PM - 3:15 PM' }
    ]
  },
  {
    id: 'yoga-meditation',
    title: 'Yoga & Meditation',
    description: 'Mind-body wellness through yoga and meditation practices',
    icon: '🧘‍♀️',
    duration: '60 minutes',
    level: 'All Levels',
    maxParticipants: 20,
    price: 1500,
    features: [
      'Flexibility training',
      'Stress relief',
      'Mental clarity',
      'Breathing techniques',
      'Balance improvement',
      'Mindfulness practice'
    ],
    schedule: [
      { day: 'Monday', time: '7:00 AM - 8:00 AM' },
      { day: 'Wednesday', time: '7:00 AM - 8:00 AM' },
      { day: 'Friday', time: '7:00 AM - 8:00 AM' },
      { day: 'Sunday', time: '8:00 AM - 9:00 AM' }
    ]
  },
  {
    id: 'cricket-coaching',
    title: 'Cricket Coaching',
    description: 'Comprehensive cricket training covering all aspects of the game',
    icon: '🏏',
    duration: '120 minutes',
    level: 'Beginner to Professional',
    maxParticipants: 16,
    price: 3000,
    features: [
      'Batting techniques',
      'Bowling variations',
      'Fielding skills',
      'Match tactics',
      'Fitness training',
      'Mental toughness'
    ],
    schedule: [
      { day: 'Tuesday', time: '4:00 PM - 6:00 PM' },
      { day: 'Thursday', time: '4:00 PM - 6:00 PM' },
      { day: 'Sunday', time: '6:00 AM - 8:00 AM' }
    ]
  },
  {
    id: 'kho-kho-training',
    title: 'Kho-Kho Training',
    description: 'Traditional Indian sport focusing on speed, agility, and strategy',
    icon: '🏃‍♂️',
    duration: '90 minutes',
    level: 'All Levels',
    maxParticipants: 14,
    price: 1800,
    features: [
      'Speed development',
      'Agility training',
      'Quick reflexes',
      'Team coordination',
      'Strategic thinking',
      'Endurance building'
    ],
    schedule: [
      { day: 'Monday', time: '5:00 PM - 6:30 PM' },
      { day: 'Friday', time: '5:00 PM - 6:30 PM' }
    ]
  },
  {
    id: 'kabaddi-mastery',
    title: 'Kabaddi Mastery',
    description: 'Master the ancient sport of Kabaddi with modern training methods',
    icon: '🤼‍♂️',
    duration: '90 minutes',
    level: 'Intermediate to Advanced',
    maxParticipants: 12,
    price: 2200,
    features: [
      'Raiding techniques',
      'Defensive strategies',
      'Physical strength',
      'Mental toughness',
      'Team tactics',
      'Competition preparation'
    ],
    schedule: [
      { day: 'Wednesday', time: '5:00 PM - 6:30 PM' },
      { day: 'Saturday', time: '6:00 PM - 7:30 PM' }
    ]
  }
];
