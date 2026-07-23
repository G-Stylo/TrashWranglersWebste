export type NavTab = 'home' | 'groups' | 'notifications' | 'events' | 'book';

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Cleanup' | 'Tree Planting' | 'Social Support' | 'Workshop';
  description: string;
  spotsLeft: number;
  totalSpots: number;
  imageUrl: string;
}

export interface GroupItem {
  id: string;
  name: string;
  district: string;
  leader: string;
  membersCount: number;
  description: string;
  meetingTime: string;
  imageUrl: string;
  tags: string[];
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'announcement' | 'event' | 'milestone' | 'urgent';
  read: boolean;
}

export interface BookingSlot {
  id: string;
  serviceName: string;
  duration: string;
  description: string;
  price: string;
  location: string;
  availableDays: string[];
}
