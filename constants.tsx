
import React from 'react';
import { Testimonial, ValueProp } from './types';

export const VALUE_PROPS: ValueProp[] = [
  {
    id: '1',
    title: 'AI Insights into Strengths',
    description: 'Catch problems before they cost you views. Our AI spots low contrast, cluttered compositions, and weak visual hooks—then tells you exactly how to fix them.',
    icon: 'fa-brain',
    color: '#8B7EC8',
    cta: 'Try AI Analysis'
  },
  {
    id: '2',
    title: 'Team Collaboration Hub',
    description: 'Stop losing feedback in Slack threads. Annotate directly on thumbnails, keep all versions organized, and get approval faster.',
    icon: 'fa-users',
    color: '#6366F1',
    cta: 'See Team Features'
  },
  {
    id: '3',
    title: 'Proven Viral Library',
    description: 'Never stare at a blank canvas again. Browse 40,000+ thumbnails from videos with 1M+ views, filtered by your niche. See what\'s working right now.',
    icon: 'fa-folder-open',
    color: '#E9D5FF',
    cta: 'Browse Library'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Will Patterson',
    handle: '@Will_Paterson10',
    text: 'I used to spend hours second-guessing my thumbnails. Now I test versions in 30 seconds and know which one will perform before I publish.',
    avatar: 'https://picsum.photos/id/64/100/100',
    rating: 5
  },
  {
    id: '2',
    name: 'Mostafa Hasan',
    handle: '@MostafaVisuals',
    text: 'As a thumbnail designer working with creators, the viral library has transformed how I approach every project. I find inspiration in seconds.',
    avatar: 'https://picsum.photos/id/65/100/100',
    rating: 5
  },
  {
    id: '3',
    name: 'Nika Shepherd',
    handle: '@nixelpixel',
    text: 'I thought this would be complicated. I was getting AI feedback on my first thumbnail within a minute. Now I use it every day.',
    avatar: 'https://picsum.photos/id/66/100/100',
    rating: 5
  }
];
