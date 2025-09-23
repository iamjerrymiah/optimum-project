import { MassageType } from '../types';

export const massageTypes: MassageType[] = [
  {
    id: 'swedish',
    name: 'Swedish Massage',
    description: 'A relaxing massage that soothess sore muscles and relieves tension.',
    durations: [60],
    priceRanges: {
      60: { min: 130, max: 150 }
    },
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: ['Stress relief', 'Improved circulation', 'Muscle relaxation', 'Better sleep']
  },
  {
    id: 'deep-tissue',
    name: 'Deep Tissue Massage',
    description: 'A intense massage protocol that targets muscles and soft tissue deep below the surface.',
    durations: [90],
    priceRanges: {
      90: { min: 160, max: 200 }
    },
    image: 'https://images.pexels.com/photos/6663050/pexels-photo-6663050.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: ['Pain relief', 'Injury recovery', 'Improved mobility', 'Tension release']
  },
  {
    id: 'nuru',
    name: 'Nuru Massage',
    description: 'Sensual and erotic massage between partners using full body contact to relax, the masseuse uses her entire body to massage the client(NUDE).',
    durations: [60],
    priceRanges: {
      60: { min: 180, max: 250 },
    },
    image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: ['Increased flexibility', 'Energy balance', 'Stress reduction', 'Improved posture']
  },
  {
    id: 'reflexology',
    name: 'Reflexology',
    description: 'Focus on pressure points in feet, hands and ears to restore natural energy level.',
    durations: [60],
    priceRanges: {
      60: { min: 120, max: 150 }
    },
    image: 'https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: ['Aromatherapy benefits', 'Deep relaxation', 'Mood enhancement', 'Skin nourishment']
  },
  {
    id: 'sports',
    name: 'Sports Massage',
    description: 'May improve flexibilty, reduce the risk of injury and help heal repetitive muscle damage.',
    durations: [60],
    priceRanges: {
      60: { min: 120, max: 150 },
    },
    image: 'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: ['Injury prevention', 'Performance enhancement', 'Faster recovery', 'Flexibility improvement']
  },
  {
    id: 'trigger-point',
    name: 'Trigger Point Massage',
    description: 'incorporates relaxing strokes combined with deep pressure to help manage chronic pain.',
    durations: [60],
    priceRanges: {
      60: { min: 130, max: 150 },
    },
    image: 'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: ['Injury prevention', 'Performance enhancement', 'Faster recovery', 'Flexibility improvement']
  },
  {
    id: 'hot-stone',
    name: 'Hot Stone Massage',
    description: 'Is a relaxing massage often conducted in spas to help ease musle tension and promote relaxation.',
    durations: [90],
    priceRanges: {
      90: { min: 150, max: 200 },
    },
    image: 'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: ['Injury prevention', 'Performance enhancement', 'Faster recovery', 'Flexibility improvement']
  },
  {
    id: 'shiastu',
    name: 'Shiastu Massage',
    description: 'A healthy therapy that promotes stress and tension relief and can help the body head itself.',
    durations: [90],
    priceRanges: {
      90: { min: 120, max: 150 },
    },
    image: 'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: ['Injury prevention', 'Performance enhancement', 'Faster recovery', 'Flexibility improvement']
  },
  {
    id: 'couple',
    name: 'Couples Massage',
    description: 'Couples massage i a relaxing and erotic body partner massage depending on the speciality chosen.',
    durations: [120],
    priceRanges: {
      120: { min: 300, max: 500 },
    },
    image: 'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: ['Injury prevention', 'Performance enhancement', 'Faster recovery', 'Flexibility improvement']
  }
];