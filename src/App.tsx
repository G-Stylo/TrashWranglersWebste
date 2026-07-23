/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab, EventItem, GroupItem, NotificationItem } from './types';
import {
  INITIAL_EVENTS,
  INITIAL_GROUPS,
  INITIAL_NOTIFICATIONS,
  BOOKING_SERVICES,
} from './data/mockData';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OurMission } from './components/OurMission';
import { EnvironmentalImpact } from './components/EnvironmentalImpact';
import { CompassionateSupport } from './components/CompassionateSupport';
import { CommunityImpact } from './components/CommunityImpact';
import { JoinMissionForm } from './components/JoinMissionForm';

import { GroupsView } from './components/GroupsView';
import { NotificationsView } from './components/NotificationsView';
import { EventsView } from './components/EventsView';
import { BookOnlineView } from './components/BookOnlineView';

import { NotificationDrawer } from './components/NotificationDrawer';
import { CartSubscriptionsDrawer } from './components/CartSubscriptionsDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [events, setEvents] = useState<EventItem[]>(INITIAL_EVENTS);
  const [rsvpedEventIds, setRsvpedEventIds] = useState<string[]>(['e1']);
  const [groups, setGroups] = useState<GroupItem[]>(INITIAL_GROUPS);
  const [joinedGroupIds, setJoinedGroupIds] = useState<string[]>(['g1']);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [bookings, setBookings] = useState<{ serviceName: string; date: string; time: string }[]>([
    {
      serviceName: 'Volunteer Orientation & Equipment Pick-Up',
      date: 'Aug 3, 2026',
      time: '10:00 AM',
    },
  ]);

  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  // Handlers
  const handleRsvpEvent = (eventId: string) => {
    if (rsvpedEventIds.includes(eventId)) {
      setRsvpedEventIds(rsvpedEventIds.filter((id) => id !== eventId));
    } else {
      setRsvpedEventIds([...rsvpedEventIds, eventId]);
    }
  };

  const handleJoinGroup = (groupId: string) => {
    if (joinedGroupIds.includes(groupId)) {
      setJoinedGroupIds(joinedGroupIds.filter((id) => id !== groupId));
    } else {
      setJoinedGroupIds([...joinedGroupIds, groupId]);
    }
  };

  const handleMarkAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const handleToggleRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const handleBookService = (serviceName: string, date: string, time: string) => {
    setBookings([...bookings, { serviceName, date, time }]);
  };

  const cartCount = rsvpedEventIds.length + joinedGroupIds.length + bookings.length;

  const rsvpedEventsList = events.filter((e) => rsvpedEventIds.includes(e.id));
  const joinedGroupsList = groups.filter((g) => joinedGroupIds.includes(g.id));

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      {/* Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        notifications={notifications}
        cartCount={cartCount}
        openNotificationDrawer={() => setIsNotificationDrawerOpen(true)}
        openCartDrawer={() => setIsCartDrawerOpen(true)}
      />

      {/* Main Tab Content */}
      <main className="min-h-[calc(100vh-80px-300px)]">
        {activeTab === 'home' && (
          <div className="animate-fadeIn">
            {/* Hero Section */}
            <Hero
              setActiveTab={setActiveTab}
            />

            {/* Our Mission */}
            <OurMission />

            {/* Environmental Impact */}
            <EnvironmentalImpact />

            {/* Compassionate Support */}
            <CompassionateSupport />

            {/* Our Community Impact */}
            <CommunityImpact setActiveTab={setActiveTab} />

            {/* Join Our Volunteer Movement Form */}
            <JoinMissionForm />
          </div>
        )}

        {activeTab === 'groups' && (
          <div className="animate-fadeIn">
            <GroupsView
              groups={groups}
              onJoinGroup={handleJoinGroup}
              joinedGroupIds={joinedGroupIds}
            />
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="animate-fadeIn">
            <NotificationsView
              notifications={notifications}
              onMarkAllRead={handleMarkAllRead}
              onToggleRead={handleToggleRead}
            />
          </div>
        )}

        {activeTab === 'events' && (
          <div className="animate-fadeIn">
            <EventsView
              events={events}
              onRsvpEvent={handleRsvpEvent}
              rsvpedEventIds={rsvpedEventIds}
            />
          </div>
        )}

        {activeTab === 'book' && (
          <div className="animate-fadeIn">
            <BookOnlineView
              services={BOOKING_SERVICES}
              onBookService={handleBookService}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Notification Drawer */}
      <NotificationDrawer
        isOpen={isNotificationDrawerOpen}
        onClose={() => setIsNotificationDrawerOpen(false)}
        notifications={notifications}
        onMarkAllRead={handleMarkAllRead}
        onToggleRead={handleToggleRead}
      />

      {/* Cart & Subscriptions Drawer */}
      <CartSubscriptionsDrawer
        isOpen={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
        rsvpedEvents={rsvpedEventsList}
        joinedGroups={joinedGroupsList}
        bookings={bookings}
        onRemoveRsvp={handleRsvpEvent}
        onLeaveGroup={handleJoinGroup}
      />
    </div>
  );
}
