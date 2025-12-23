
import React from 'react';
import { Testimonial, ValueProp } from './types';

export const VALUE_PROPS: ValueProp[] = [
  {
    id: '1',
    title: 'AI Insights into Strengths',
    description: 'Discover potential problems with your thumbnails before they go live. Our AI analyzes contrast, composition, and visual hooks.',
    icon: 'fa-brain',
    color: '#8B7EC8'
  },
  {
    id: '2',
    title: 'Team Collaboration Hub',
    description: 'Collaborate with your team seamlessly. Annotate directly on thumbnails, attach documents, and manage projects in one place.',
    icon: 'fa-users',
    color: '#6366F1'
  },
  {
    id: '3',
    title: 'Proven Viral Library',
    description: 'Collect inspiration from proven success. Access our database of 40k+ viral thumbnails categorized by niche and style.',
    icon: 'fa-folder-open',
    color: '#E9D5FF'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Will Patterson',
    handle: '@Will_Paterson10',
    text: 'ClickPilot is a game changer for testing and improving your YouTube thumbnails. Without it, it would be a guessing game!',
    avatar: 'https://picsum.photos/id/64/100/100',
    rating: 5
  },
  {
    id: '2',
    name: 'Mostafa Hasan',
    handle: '@MostafaVisuals',
    text: 'As someone who\'s been in the thumbnail niche for 2 years, this is hands down the best tool I\'ve ever used.',
    avatar: 'https://picsum.photos/id/65/100/100',
    rating: 5
  },
  {
    id: '3',
    name: 'Nika Shepherd',
    handle: '@nixelpixel',
    text: 'I love this tool, use it every single day for my production workflows. It adds so much clarity to the creative process.',
    avatar: 'https://picsum.photos/id/66/100/100',
    rating: 5
  }
];
