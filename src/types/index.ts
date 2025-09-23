export interface MassageType {
  id: string;
  name: string;
  description: string;
  durations: number[];
  priceRanges: {
    [duration: number]: {
      min: number;
      max: number;
    };
  };
  image: string;
  benefits: string[];
}

export interface Masseuse {
  id: string;
  name: string;
  photo: string;
  bio: string;
  experience: number;
  specialties: string[];
  rating: number;
  reviewCount: number;
  gender: 'Male' | 'Female';
  isAvailable: boolean;
  priceRange: {
    min: number;
    max: number;
  };
}

export interface BookingData {
  masseuse?: Masseuse;
  massageType?: MassageType;
  duration?: number;
  location: string;
  preferredDate: string;
  preferredTime: string;
  customOffer: number;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  specialRequests?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}