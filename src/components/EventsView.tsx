import React, { useState } from 'react';
import { EventItem } from '../types';
import { Calendar, MapPin, Clock, Users, CheckCircle2, Filter, Search, Share2, Sparkles } from 'lucide-react';

interface EventsViewProps {
  events: EventItem[];
  onRsvpEvent: (eventId: string) => void;
  rsvpedEventIds: string[];
}

export const EventsView: React.FC<EventsViewProps> = ({ events, onRsvpEvent, rsvpedEventIds }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMapLocation, setSelectedMapLocation] = useState<string | null>(null);

  const categories = ['All', 'Cleanup', 'Tree Planting', 'Social Support', 'Workshop'];

  const filteredEvents = events.filter((e) => {
    const matchesCat = selectedCategory === 'All' || e.category === selectedCategory;
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Community Calendar
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">
              Upcoming Volunteer Events
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-1 max-w-2xl">
              RSVP for local cleanups, tree-planting days, and social outreach drives. All supplies provided free of charge!
            </p>
          </div>

          <div className="bg-teal-950/80 px-4 py-2.5 rounded-2xl border border-teal-800 text-xs text-teal-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Need volunteer hours for school or court? We issue official certificates!</span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search event title or park location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900 rounded-xl border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <Filter className="w-4 h-4 text-emerald-400 flex-shrink-0 hidden sm:inline" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-extrabold'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((evt) => {
            const isRsvped = rsvpedEventIds.includes(evt.id);
            const remainingSpots = evt.spotsLeft - (isRsvped ? 1 : 0);

            return (
              <div
                key={evt.id}
                className="bg-slate-800/90 rounded-3xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-all shadow-xl flex flex-col sm:flex-row"
              >
                {/* Event Photo */}
                <div className="sm:w-2/5 h-56 sm:h-auto relative overflow-hidden">
                  <img
                    src={evt.imageUrl}
                    alt={evt.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-teal-700">
                    {evt.category}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white leading-snug">{evt.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{evt.description}</p>

                    <div className="pt-2 space-y-1.5 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-400" />
                        <span className="font-semibold text-white">{evt.date}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-400" />
                        <span>{evt.time}</span>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => setSelectedMapLocation(evt.location)}
                          className="flex items-center gap-1.5 text-teal-300 hover:underline cursor-pointer"
                        >
                          <MapPin className="w-4 h-4 text-teal-400" />
                          <span className="truncate max-w-[180px]">{evt.location}</span>
                        </button>

                        <div className="flex items-center gap-1 text-[11px] text-amber-300 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          <Users className="w-3 h-3" />
                          <span>{remainingSpots} spots left</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RSVP & Share Button */}
                  <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert(`Link copied for "${evt.title}"`);
                      }}
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700 cursor-pointer"
                      title="Share Event"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onRsvpEvent(evt.id)}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                        isRsvped
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold shadow-lg'
                      }`}
                    >
                      {isRsvped ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>RSVP Confirmed</span>
                        </>
                      ) : (
                        <span>Reserve Volunteer Spot</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map Preview Modal */}
        {selectedMapLocation && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 max-w-lg w-full space-y-4 text-center">
              <MapPin className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">Location Preview</h3>
              <p className="text-sm text-teal-300 font-semibold">{selectedMapLocation}</p>
              
              <div className="w-full h-48 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center text-slate-400 text-xs p-4">
                [ Interactive Map Preview Container: Direct navigation directions sent to your device ]
              </div>

              <button
                onClick={() => setSelectedMapLocation(null)}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer"
              >
                Close Location
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
