export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  recommendedFor: string;
  approxRate: string;
  highlights: string[];
  category: 'general' | 'restorative' | 'surgical' | 'cosmetic';
}

export interface PricingItem {
  procedure: string;
  description: string;
  approxRange: string;
  category: string;
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  reviewDate: string;
  rating: number;
  treatment: string;
  feedback: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
