import React, { useState } from 'react';
import { EventItem } from '../types';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Edit2,
  Trash2,
  Lock,
  Unlock,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  X,
  Search,
  Filter,
  Grid,
  List,
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface CalendarViewProps {
  events: EventItem[];
  onAddEvent: (newEvent: Omit<EventItem, 'id'>) => void;
  onEditEvent: (updatedEvent: EventItem) => void;
  onDeleteEvent: (eventId: string) => void;
  onRsvpEvent: (eventId: string) => void;
  rsvpedEventIds: string[];
}

export const CalendarView: React.FC<CalendarViewProps> = ({
  events,
  onAddEvent,
  onEditEvent,
  onDeleteEvent,
  onRsvpEvent,
  rsvpedEventIds,
}) => {
  // Admin Mode state
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPasswordPrompt, setAdminPasswordPrompt] = useState(false);
  const [adminKey, setAdminKey] = useState('');
  const [adminError, setAdminError] = useState('');

  // Calendar view mode
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

  // Month navigation (default August 2026)
  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 1)); // Month index 7 = August

  // Category filter & Search
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);
  const [viewingEvent, setViewingEvent] = useState<EventItem | null>(null);

  // Form State for Add / Edit
  const [formData, setFormData] = useState({
    title: '',
    date: '2026-08-15',
    time: '09:00 AM - 12:00 PM',
    location: '',
    category: 'Cleanup' as EventItem['category'],
    description: '',
    spotsLeft: 20,
    totalSpots: 30,
    imageUrl: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1000&q=80',
  });

  // Admin Login Handler
  const handleToggleAdmin = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      setAdminPasswordPrompt(true);
      setAdminError('');
      setAdminKey('');
    }
  };

  const handleAdminAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminKey === 'admin123' || adminKey === 'admin' || adminKey.trim().length > 0) {
      setIsAdmin(true);
      setAdminPasswordPrompt(false);
      setAdminError('');
    } else {
      setAdminError('Invalid access key. Use "admin" or "admin123"');
    }
  };

  // Month Navigation
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  // Generate Calendar Days
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysArray = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    daysArray.push(d);
  }

  // Filter events
  const filteredEvents = events.filter((evt) => {
    const matchesCategory =
      selectedCategory === 'All' || evt.category === selectedCategory;
    const matchesSearch =
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate = selectedDate ? evt.date === selectedDate : true;
    return matchesCategory && matchesSearch && matchesDate;
  });

  // Open Add Modal
  const handleOpenAddModal = () => {
    setFormData({
      title: '',
      date: `${year}-${String(month + 1).padStart(2, '0')}-15`,
      time: '09:00 AM - 12:00 PM',
      location: '',
      category: 'Cleanup',
      description: '',
      spotsLeft: 25,
      totalSpots: 30,
      imageUrl: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1000&q=80',
    });
    setIsAddModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEditModal = (evt: EventItem) => {
    setEditingEvent(evt);
    setFormData({
      title: evt.title,
      date: evt.date,
      time: evt.time,
      location: evt.location,
      category: evt.category,
      description: evt.description,
      spotsLeft: evt.spotsLeft,
      totalSpots: evt.totalSpots,
      imageUrl: evt.imageUrl,
    });
  };

  // Save Event
  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.location) return;

    // Convert date YYYY-MM-DD to formatted string
    const [y, m, d] = formData.date.split('-');
    const dateObj = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
    const formatted = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    if (editingEvent) {
      onEditEvent({
        ...editingEvent,
        ...formData,
        formattedDate: formatted,
      });
      setEditingEvent(null);
    } else {
      onAddEvent({
        ...formData,
        formattedDate: formatted,
      });
      setIsAddModalOpen(false);
    }
  };

  const getCategoryBadgeClass = (category: EventItem['category']) => {
    switch (category) {
      case 'Cleanup':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Tree Planting':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Social Support':
        return 'bg-teal-100 text-teal-900 border-teal-300';
      case 'Workshop':
        return 'bg-sky-100 text-sky-900 border-sky-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 bg-slate-50 min-h-screen text-slate-900">
      
      {/* Top Header & Admin Control Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1">
              <CalendarIcon className="w-3.5 h-3.5 text-emerald-700" />
              Community Event Schedule
            </span>
            {isAdmin && (
              <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-300 flex items-center gap-1">
                <Unlock className="w-3.5 h-3.5 text-amber-700" />
                Admin Access Enabled
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Future Events Calendar
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Browse upcoming cleanups, planting days, and workshops. Admins can update and manage event listings.
          </p>
        </div>

        {/* Action Controls & Admin Mode Switch */}
        <div className="flex flex-wrap items-center gap-3">
          {isAdmin && (
            <button
              onClick={handleOpenAddModal}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl shadow transition-all text-sm cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Future Event</span>
            </button>
          )}

          {/* Admin Toggle */}
          <button
            onClick={handleToggleAdmin}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              isAdmin
                ? 'bg-amber-500 text-slate-950 border-amber-600 shadow'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
            }`}
          >
            {isAdmin ? <Unlock className="w-4 h-4 text-slate-950" /> : <Lock className="w-4 h-4 text-slate-600" />}
            <span>{isAdmin ? 'Exit Admin Mode' : 'Admin Login'}</span>
          </button>
        </div>
      </div>

      {/* Admin Auth Modal */}
      {adminPasswordPrompt && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-5 relative">
            <button
              onClick={() => setAdminPasswordPrompt(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Admin Mode Access</h3>
                <p className="text-xs text-slate-500">Only authorized organizers can edit calendar events.</p>
              </div>
            </div>

            <form onSubmit={handleAdminAuth} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Access Key / Password
                </label>
                <input
                  type="password"
                  placeholder="Enter admin password (e.g. admin)"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                {adminError && <p className="text-xs text-rose-600 mt-1 font-semibold">{adminError}</p>}
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setAdminPasswordPrompt(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow"
                >
                  Authenticate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Filter & View Switcher Toolbar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search & Category Filter */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Search Box */}
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search event title or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1 overflow-x-auto py-1">
            {['All', 'Cleanup', 'Tree Planting', 'Social Support', 'Workshop'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* View Mode Toggle (Grid/Calendar vs List) */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          {selectedDate && (
            <button
              onClick={() => setSelectedDate(null)}
              className="text-xs text-emerald-700 font-bold hover:underline mr-2"
            >
              Clear Date Filter
            </button>
          )}

          <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200">
            <button
              onClick={() => setViewMode('calendar')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                viewMode === 'calendar' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Calendar Grid</span>
            </button>

            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                viewMode === 'list' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>Event List</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Calendar Month View */}
      {viewMode === 'calendar' ? (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-6">
          
          {/* Calendar Month Navigation Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-black text-slate-900">
                {monthName} {year}
              </h2>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                ({events.length} future events scheduled)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevMonth}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                title="Previous Month"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextMonth}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                title="Next Month"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Calendar Grid Header (Days of week) */}
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold uppercase text-slate-500 tracking-wider">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>

          {/* Calendar Days Cells */}
          <div className="grid grid-cols-7 gap-2 sm:gap-3">
            {daysArray.map((dayNum, index) => {
              if (dayNum === null) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="min-h-[90px] sm:min-h-[110px] rounded-2xl bg-slate-50/50 border border-transparent"
                  />
                );
              }

              // Match date YYYY-MM-DD
              const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
              const dayEvents = events.filter((e) => e.date === dateStr);
              const isSelected = selectedDate === dateStr;

              return (
                <div
                  key={`day-${dayNum}`}
                  onClick={() => {
                    if (dayEvents.length > 0) {
                      setSelectedDate(selectedDate === dateStr ? null : dateStr);
                    }
                  }}
                  className={`min-h-[90px] sm:min-h-[110px] p-2 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/30'
                      : dayEvents.length > 0
                      ? 'bg-white border-emerald-200 hover:border-emerald-400 hover:shadow-md'
                      : 'bg-white border-slate-200 opacity-80'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs sm:text-sm font-extrabold ${isSelected ? 'text-emerald-800' : 'text-slate-800'}`}>
                      {dayNum}
                    </span>
                    {dayEvents.length > 0 && (
                      <span className="text-[10px] bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded-full">
                        {dayEvents.length}
                      </span>
                    )}
                  </div>

                  {/* Events Badges in Date Cell */}
                  <div className="space-y-1 mt-1">
                    {dayEvents.slice(0, 2).map((e) => (
                      <div
                        key={e.id}
                        onClick={(evt) => {
                          evt.stopPropagation();
                          setViewingEvent(e);
                        }}
                        className={`text-[10px] font-bold p-1 rounded-lg truncate border cursor-pointer ${getCategoryBadgeClass(
                          e.category
                        )}`}
                        title={e.title}
                      >
                        {e.title}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <div className="text-[9px] font-semibold text-slate-500 pl-1">
                        +{dayEvents.length - 2} more
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      ) : null}

      {/* Events Card Grid (Filtered / Selected) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">
            {selectedDate
              ? `Events for ${selectedDate}`
              : viewMode === 'list'
              ? 'All Scheduled Future Events'
              : 'Upcoming Event Details'}
          </h3>
          <span className="text-xs text-slate-500 font-semibold">
            Showing {filteredEvents.length} event{filteredEvents.length === 1 ? '' : 's'}
          </span>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <AlertCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h4 className="text-lg font-bold text-slate-800">No future events found</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              There are no events matching your filter criteria. {isAdmin && 'Click "Add Future Event" above to create one!'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((evt) => {
              const isRsvped = rsvpedEventIds.includes(evt.id);

              return (
                <div
                  key={evt.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-emerald-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {/* Event Top Banner */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={evt.imageUrl}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/30" />
                    <span
                      className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full border shadow ${getCategoryBadgeClass(
                        evt.category
                      )}`}
                    >
                      {evt.category}
                    </span>

                    {/* Admin Action Buttons */}
                    {isAdmin && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        <button
                          onClick={() => handleOpenEditModal(evt)}
                          className="p-2 rounded-xl bg-white/90 hover:bg-white text-slate-800 hover:text-emerald-700 shadow font-bold cursor-pointer transition-transform hover:scale-110"
                          title="Edit Event (Admin)"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDeleteEvent(evt.id)}
                          className="p-2 rounded-xl bg-white/90 hover:bg-white text-rose-600 hover:text-rose-700 shadow font-bold cursor-pointer transition-transform hover:scale-110"
                          title="Delete Event (Admin)"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Event Details */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-emerald-800 font-bold">
                        <CalendarIcon className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{evt.formattedDate || evt.date}</span>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        {evt.title}
                      </h4>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {evt.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <span>{evt.time}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{evt.location}</span>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                          <Users className="w-4 h-4 text-slate-400" />
                          <span>{evt.spotsLeft} spots left</span>
                        </div>

                        <button
                          onClick={() => onRsvpEvent(evt.id)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            isRsvped
                              ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                              : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow'
                          }`}
                        >
                          {isRsvped ? '✓ RSVP Confirmed' : 'RSVP Now'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* View Event Modal */}
      {viewingEvent && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-fadeIn">
            <button
              onClick={() => setViewingEvent(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-900/60 hover:bg-slate-900 text-white rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56">
              <img
                src={viewingEvent.imageUrl}
                alt={viewingEvent.title}
                className="w-full h-full object-cover"
              />
              <span className={`absolute bottom-3 left-4 text-xs font-bold px-3 py-1 rounded-full border ${getCategoryBadgeClass(viewingEvent.category)}`}>
                {viewingEvent.category}
              </span>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">{viewingEvent.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{viewingEvent.description}</p>

              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold">{viewingEvent.formattedDate || viewingEvent.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span>{viewingEvent.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>{viewingEvent.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-500 font-semibold">
                  {viewingEvent.spotsLeft} spots available of {viewingEvent.totalSpots}
                </span>

                <button
                  onClick={() => {
                    onRsvpEvent(viewingEvent.id);
                    setViewingEvent(null);
                  }}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs cursor-pointer ${
                    rsvpedEventIds.includes(viewingEvent.id)
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow'
                  }`}
                >
                  {rsvpedEventIds.includes(viewingEvent.id) ? 'Cancel RSVP' : 'RSVP Now'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add / Edit Event Admin Modal */}
      {(isAddModalOpen || editingEvent) && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-slate-200 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsAddModalOpen(false);
                setEditingEvent(null);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1.5 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {editingEvent ? 'Edit Future Event' : 'Add New Future Event'}
                </h3>
                <p className="text-xs text-slate-500">Admin management mode</p>
              </div>
            </div>

            <form onSubmit={handleSaveForm} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">
                  Event Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Riverfront Park Cleanup"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">
                    Event Date (YYYY-MM-DD) *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value as EventItem['category'] })
                    }
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Cleanup">Cleanup</option>
                    <option value="Tree Planting">Tree Planting</option>
                    <option value="Social Support">Social Support</option>
                    <option value="Workshop">Workshop</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">
                    Time Range
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 09:00 AM - 12:00 PM"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">
                    Location / Meeting Point *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Oakwood Park Gate"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the activity, required gear, etc."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">
                  Cover Image URL
                </label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/..."
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddModalOpen(false);
                    setEditingEvent(null);
                  }}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow cursor-pointer"
                >
                  {editingEvent ? 'Save Changes' : 'Create Event'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
