export type NavTab = 'home' | 'calendar' | 'sponsors';

export interface EventItem {
  id: string;
  title: string;
  date: string; // ISO format "YYYY-MM-DD" or formatted string e.g. "2026-08-01"
  formattedDate?: string;
  time: string;
  location: string;
  category: 'Cleanup' | 'Tree Planting' | 'Social Support' | 'Workshop';
  description: string;
  spotsLeft: number;
  totalSpots: number;
  imageUrl: string;
}

export interface SponsorItem {
  id: string;
  name: string;
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Community Partner';
  logoUrl?: string;
  description: string;
  contribution: string;
  websiteUrl?: string;
}
