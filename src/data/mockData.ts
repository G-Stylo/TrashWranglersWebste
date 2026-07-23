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
    description: 'Join 50+ local neighbors to remove litter, sort recyclables, and restore the scenic riverwalk. Trash bags, gloves, and safety equipment provided!',
    spotsLeft: 12,
    totalSpots: 60,
    imageUrl: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1000&q=80',
  },
];

export const INITIAL_SPONSORS: SponsorItem[] = [
  {
    id: 's1',
    name: 'GreenEarth Energy Foundation',
    tier: 'Platinum',
    description: 'Providing major funding for citywide cleanup equipment, electric waste haulers, and volunteer safety gear.',
    contribution: 'Equipment & Fleet Grant',
    websiteUrl: 'https://example.org/greenearth',
  },
  {
    id: 's2',
    name: 'Metro City Community Bank',
    tier: 'Platinum',
    description: 'Sponsoring our unhoused social rehabilitation programs, meal drives, and vocational training initiatives.',
    contribution: 'Social Support Partner',
    websiteUrl: 'https://example.org/metrobank',
  },
  {
    id: 's3',
    name: 'EcoTech Recycling Solutions',
    tier: 'Gold',
    description: 'Providing free processing and diversion services for all collected aluminum, glass, and electronic waste.',
    contribution: 'Waste Diversion Services',
    websiteUrl: 'https://example.org/ecotech',
  },
  {
    id: 's4',
    name: 'Oakwood Urban Nurseries',
    tier: 'Gold',
    description: 'Donating hundreds of native drought-tolerant trees, compost bags, and planting tools for city parks.',
    contribution: 'Native Flora & Trees',
    websiteUrl: 'https://example.org/oakwoodnursery',
  },
  {
    id: 's5',
    name: 'Riverfront Coffee Roasters',
    tier: 'Silver',
    description: 'Fueling our Saturday morning cleanup volunteers with fresh organic coffee and baked goods.',
    contribution: 'Volunteer Hospitality',
    websiteUrl: 'https://example.org/riverfrontcoffee',
  },
  {
    id: 's6',
    name: 'Civic Health Insurance Group',
    tier: 'Silver',
    description: 'Funding first-aid kits, hydration stations, and wellness outreach for unhoused program participants.',
    contribution: 'Health & First Aid Supplies',
    websiteUrl: 'https://example.org/civichealth',
  },
  {
    id: 's7',
    name: 'Downtown Business Improvement District',
    tier: 'Community Partner',
    description: 'Coordinating merchant participation, alley maintenance access, and storefront cleanup grants.',
    contribution: 'Civic & Merchant Liaison',
    websiteUrl: 'https://example.org/downtownbid',
  },
  {
    id: 's8',
    name: 'Harbor Logistics & Freight',
    tier: 'Community Partner',
    description: 'Donating heavy-duty industrial dumpsters and eco-friendly transport bags for large riverfront sweeps.',
    contribution: 'Logistics & Hauling',
    websiteUrl: 'https://example.org/harborlogistics',
  },
];
