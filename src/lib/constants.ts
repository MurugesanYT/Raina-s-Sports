
export const navigationItems = [
  { title: 'Home', href: '/' },
  { title: 'Programs', href: '/programs' },
  { title: 'Schedule', href: '/schedule' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Reviews', href: '/reviews' },
];

export const siteConfig = {
  name: "Suresh's Sports Academy",
  description: "Premier sports training and coaching academy",
  url: "https://suresh-sports.com",
};

export const coachDetails = {
  name: "P.T. Suresh",
  title: "Professional Sports Coach & Physical Education Expert",
  profession: "Professional Sports Coach & Physical Education Expert",
  experience: "15+ Years",
  certifications: ["BCA (Bachelor of Computer Applications)", "B.P.Ed (Bachelor of Physical Education)"],
  qualifications: ["BCA (Bachelor of Computer Applications)", "B.P.Ed (Bachelor of Physical Education)"],
  bio: "Passionate about developing athletes at all levels, from beginners to professionals. Specializing in football, volleyball, kho-kho, kabaddi, cricket, yoga and meditation training.",
  image: "https://i.ibb.co/TBCcTCXC/P-T-SURESH-SIR-PHOTO-FOR-SITE.jpg",
  profileImageUrl: "https://i.ibb.co/TBCcTCXC/P-T-SURESH-SIR-PHOTO-FOR-SITE.jpg",
  dataAiHint: "coach portrait",
  motto: "Excellence through dedication, growth through challenge, success through teamwork.",
  achievements: [
    "Trained 500+ athletes",
    "95% student success rate",
    "BCA & B.P.Ed qualified",
    "15+ years experience",
    "Multiple championship wins",
    "Youth development expert"
  ],
  specialties: [
    { name: "Football", icon: "Goal" },
    { name: "Volleyball", icon: "Volleyball" },
    { name: "Kho-kho", icon: "Users" },
    { name: "Kabaddi", icon: "Users2" },
    { name: "Cricket", icon: "Target" },
    { name: "Yoga", icon: "PersonStanding" },
    { name: "Meditation", icon: "Brain" }
  ],
  phone: "+918667603395",
  email: "sureshtreferee@gmail.com"
};

export const sportToIconMap = {
  'Elite Football Training': '⚽',
  'Volleyball Excellence': '🏐',
  'Yoga & Meditation': '🧘‍♀️',
  'Cricket Coaching': '🏏',
  'Kho-Kho Training': '🏃‍♂️',
  'Kabaddi Mastery': '🤼‍♂️'
};

// Import icons for statsData
import { Users, Calendar, Target, Award } from 'lucide-react';

export const statsData = [
  { label: 'Students Trained', value: 500, suffix: '+', icon: Users },
  { label: 'Years Experience', value: 15, suffix: '+', icon: Calendar },
  { label: 'Success Rate', value: 95, suffix: '%', icon: Target },
  { label: 'Programs', value: 6, suffix: '', icon: Award }
];

export const programsData = [
  {
    id: 'elite-football',
    title: 'Elite Football Training',
    description: 'Professional football coaching for all skill levels with comprehensive technical and tactical development',
    icon: '⚽',
    duration: '90 minutes',
    level: 'All Levels',
    maxParticipants: 15,
    price: 2500,
    features: [
      'Technical skills development - Ball control, passing, shooting',
      'Tactical understanding - Formation play, positioning',
      'Physical conditioning - Strength, speed, endurance',
      'Mental preparation - Focus, confidence building',
      'Match simulation - Real game scenarios',
      'Individual feedback - Personal skill assessment'
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
    description: 'Master volleyball fundamentals and advanced techniques with focus on team coordination and competitive play',
    icon: '🏐',
    duration: '75 minutes',
    level: 'Beginner to Advanced',
    maxParticipants: 12,
    price: 2000,
    features: [
      'Serving techniques - Float, jump, and topspin serves',
      'Spiking and blocking - Attack and defense mechanics',
      'Team coordination - Communication and sync',
      'Court positioning - Rotation and movement strategies',
      'Game strategies - Offensive and defensive plays',
      'Fitness conditioning - Jumping, agility, core strength'
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
    description: 'Holistic wellness through traditional yoga practices and mindfulness meditation for mental and physical balance',
    icon: '🧘‍♀️',
    duration: '60 minutes',
    level: 'All Levels',
    maxParticipants: 20,
    price: 1500,
    features: [
      'Flexibility training - Asanas for improved mobility',
      'Stress relief - Relaxation and tension release',
      'Mental clarity - Focus and concentration enhancement',
      'Breathing techniques - Pranayama practices',
      'Balance improvement - Physical and mental stability',
      'Mindfulness practice - Present moment awareness'
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
    description: 'Comprehensive cricket training covering batting, bowling, fielding with modern techniques and match strategies',
    icon: '🏏',
    duration: '120 minutes',
    level: 'Beginner to Professional',
    maxParticipants: 16,
    price: 3000,
    features: [
      'Batting techniques - Stance, grip, shot selection, timing',
      'Bowling variations - Pace, spin, line and length control',
      'Fielding skills - Catching, throwing, ground fielding',
      'Match tactics - Game awareness, strategy implementation',
      'Fitness training - Cricket-specific conditioning',
      'Mental toughness - Pressure handling, concentration'
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
    description: 'Traditional Indian sport training focusing on speed, agility, strategy, and team coordination for competitive play',
    icon: '🏃‍♂️',
    duration: '90 minutes',
    level: 'All Levels',
    maxParticipants: 14,
    price: 1800,
    features: [
      'Speed development - Sprint training, acceleration drills',
      'Agility training - Quick direction changes, footwork',
      'Quick reflexes - Reaction time improvement',
      'Team coordination - Chain formation, communication',
      'Strategic thinking - Chasing and defending tactics',
      'Endurance building - Stamina for continuous play'
    ],
    schedule: [
      { day: 'Monday', time: '5:00 PM - 6:30 PM' },
      { day: 'Friday', time: '5:00 PM - 6:30 PM' }
    ]
  },
  {
    id: 'kabaddi-mastery',
    title: 'Kabaddi Mastery',
    description: 'Master the ancient sport of Kabaddi with modern training methods, focusing on raiding and defensive strategies',
    icon: '🤼‍♂️',
    duration: '90 minutes',
    level: 'Intermediate to Advanced',
    maxParticipants: 12,
    price: 2200,
    features: [
      'Raiding techniques - Toe touch, hand touch, advanced raids',
      'Defensive strategies - Chain formation, ankle holds',
      'Physical strength - Core, leg, and grip strength',
      'Mental toughness - Breath control, pressure handling',
      'Team tactics - Coordination between raiders and defenders',
      'Competition preparation - Tournament-level training'
    ],
    schedule: [
      { day: 'Wednesday', time: '5:00 PM - 6:30 PM' },
      { day: 'Saturday', time: '6:00 PM - 7:30 PM' }
    ]
  }
];
