
export interface NeuroType {
  id: string;
  name: string;
  description: string;
  commonTraits: string[];
  supportTips: string[];
  icon: string;
  color: string;
}

export interface IndianStats {
  condition: string;
  percentage: number;
  estimatedCount: string;
  source: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isSpeaking?: boolean;
  imageUrl?: string;
}

export interface Sticker {
  id: string;
  name: string;
  emoji: string;
  cost: number;
  owned: boolean;
}

export interface UserProfile {
  name: string;
  age: number;
  sex: 'Male' | 'Female' | 'Other';
  standard: string;
  fatherName: string;
  motherName: string;
  mobileNumber: string;
  email: string;
  disabilityTypes: string[];
  interests: string[]; // Hyperfocus topics
  points: number;
  level: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  onboardingComplete: boolean;
  stickers: string[];
  moodHistory: { date: string; mood: string }[];
  theme: 'standard' | 'calm' | 'high-contrast';
  font: 'Inter' | 'OpenDyslexic';
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
