import { EventItem, SponsorItem } from '../types';

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'Downtown Riverfront & Promenade Park Cleanup',
    date: '2026-08-01',
    formattedDate: 'Saturday, Aug 1, 2026',
    time: '09:00 AM - 12:30 PM',
    location: 'Riverfront Plaza (Central Gate)',
    category: 'Cleanup',
    description: 'Join local neighbors to remove litter, sort recyclables, and restore the scenic riverwalk. Trash bags, gloves, and safety equipment provided!',
    spotsLeft: 12,
    totalSpots: 60,
    imageUrl: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1000&q=80',
  },
];

export const INITIAL_SPONSORS: SponsorItem[] = [
  {
    id: 's1',
    name: 'Big 5 Sporting Goods',
    description: 'Providing support for the program in various ways',
    contribution: 'Equipment & Fleet Grant',
    websiteUrl: 'big5sportinggoods.com',
  },
];
