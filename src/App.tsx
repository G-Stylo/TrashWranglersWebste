/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab, EventItem, SponsorItem } from './types';
import { INITIAL_EVENTS, INITIAL_SPONSORS } from './data/mockData';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OurMission } from './components/OurMission';
import { EnvironmentalImpact } from './components/EnvironmentalImpact';
import { CompassionateSupport } from './components/CompassionateSupport';
import { CommunityImpact } from './components/CommunityImpact';
import { JoinMissionForm } from './components/JoinMissionForm';

import { CalendarView } from './components/CalendarView';
import { SponsorsView } from './components/SponsorsView';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [events, setEvents] = useState<EventItem[]>(INITIAL_EVENTS);
  const [rsvpedEventIds, setRsvpedEventIds] = useState<string[]>(['e1']);
  const [sponsors] = useState<SponsorItem[]>(INITIAL_SPONSORS);

  // Event Handlers for Admin Calendar
  const handleAddEvent = (newEventData: Omit<EventItem, 'id'>) => {
    const newEvt: EventItem = {
      ...newEventData,
      id: `e_${Date.now()}`,
    };
    setEvents([newEvt, ...events]);
  };

  const handleEditEvent = (updatedEvent: EventItem) => {
    setEvents(events.map((e) => (e.id === updatedEvent.id ? updatedEvent : e)));
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter((e) => e.id !== eventId));
    setRsvpedEventIds(rsvpedEventIds.filter((id) => id !== eventId));
  };

  const handleRsvpEvent = (eventId: string) => {
    if (rsvpedEventIds.includes(eventId)) {
      setRsvpedEventIds(rsvpedEventIds.filter((id) => id !== eventId));
    } else {
      setRsvpedEventIds([...rsvpedEventIds, eventId]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-950">
      {/* Sticky Light Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Tab Views */}
      <main className="min-h-[calc(100vh-80px-280px)]">
        {activeTab === 'home' && (
          <div className="animate-fadeIn">
            {/* Hero */}
            <Hero setActiveTab={setActiveTab} />

            {/* Our Mission */}
            <OurMission />

            {/* Environmental Impact */}
            <EnvironmentalImpact />

            {/* Compassionate Support */}
            <CompassionateSupport />

            {/* Community Impact */}
            <CommunityImpact setActiveTab={setActiveTab} />

            {/* Join Volunteer Movement Form */}
            <JoinMissionForm />
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="animate-fadeIn">
            <CalendarView
              events={events}
              onAddEvent={handleAddEvent}
              onEditEvent={handleEditEvent}
              onDeleteEvent={handleDeleteEvent}
              onRsvpEvent={handleRsvpEvent}
              rsvpedEventIds={rsvpedEventIds}
            />
          </div>
        )}

        {activeTab === 'sponsors' && (
          <div className="animate-fadeIn">
            <SponsorsView sponsors={sponsors} />
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
    </div>
  );
}
