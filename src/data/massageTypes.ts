import { MassageType } from '../types';

import nuruMasage from '../assets/nuru.jpg'
import xxxImage from '../assets/happy_ending.jpg'
import coupleImage from '../assets/couples-massages.jpg'
import shiatsuMassage from '../assets/massage-Shiatsu.jpg'
import hotStoneImage from '../assets/hot-stone.jpg'
import triggerPoint from '../assets/trigger-point.webp'
import sportMassge from '../assets/sport-massage.jpeg'
import deepTissue from '../assets/deep-tissue-massage.jpg'
import swedishMassage from '../assets/swedish-massage.jpg'
import reflexologyMassage from '../assets/facial-refelxology.jpg'

export const massageTypes: MassageType[] = [
  {
    id: 'swedish',
    name: 'Swedish Massage',
    description: 'A relaxing massage that soothess sore muscles and relieves tension.',
    durations: [60],
    priceRanges: {
      60: { min: 130, max: 150 }
    },
    image: swedishMassage,
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
    image: deepTissue,
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
    image: nuruMasage,
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
    image: reflexologyMassage,
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
    image: sportMassge,
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
    image: triggerPoint,
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
    image: hotStoneImage,
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
    image: shiatsuMassage,
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
    image: coupleImage,
    benefits: ['Injury prevention', 'Performance enhancement', 'Faster recovery', 'Flexibility improvement']
  },
  {
    id: 'happy-ending',
    name: 'XXX massage(Happy Ending)',
    description: 'Happy ending is a colloquial term for the practice of a provider offering sexual release to a client.',
    durations: [120],
    priceRanges: {
      120: { min: 300, max: 500 },
    },
    image: xxxImage,
    benefits: ['Injury prevention', 'Performance enhancement', 'Faster recovery', 'Flexibility improvement']
  }
];