import React from 'react';
import { EventItem, GroupItem } from '../types';
import { X, ShoppingBag, Calendar, Users, Clock, Trash2 } from 'lucide-react';

interface CartSubscriptionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  rsvpedEvents: EventItem[];
  joinedGroups: GroupItem[];
  bookings: { serviceName: string; date: string; time: string }[];
  onRemoveRsvp: (eventId: string) => void;
  onLeaveGroup: (groupId: string) => void;
}

export const CartSubscriptionsDrawer: React.FC<CartSubscriptionsDrawerProps> = ({
  isOpen,
  onClose,
  rsvpedEvents,
  joinedGroups,
  bookings,
  onRemoveRsvp,
  onLeaveGroup,
}) => {
  if (!isOpen) return null;

  const totalItems = rsvpedEvents.length + joinedGroups.length + bookings.length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 text-white h-full flex flex-col shadow-2xl">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-bold text-white">My Subscriptions & Activity</h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4 flex-1 overflow-y-auto space-y-6">
          {totalItems === 0 ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
              <p className="text-sm font-semibold">No active event RSVPs or subscriptions yet.</p>
              <p className="text-xs">Explore events, join volunteer squads, or book orientation!</p>
            </div>
          ) : (
            <>
              {/* RSVPed Events */}
              {rsvpedEvents.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase text-emerald-400 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>Confirmed Event RSVPs ({rsvpedEvents.length})</span>
                  </h3>
                  <div className="space-y-2">
                    {rsvpedEvents.map((evt) => (
                      <div key={evt.id} className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-white">{evt.title}</div>
                          <div className="text-[11px] text-teal-300">{evt.date} • {evt.time}</div>
                        </div>
                        <button
                          onClick={() => onRemoveRsvp(evt.id)}
                          className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-slate-700 rounded-lg cursor-pointer"
                          title="Cancel RSVP"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Joined Volunteer Squads */}
              {joinedGroups.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase text-teal-300 flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span>Joined Volunteer Squads ({joinedGroups.length})</span>
                  </h3>
                  <div className="space-y-2">
                    {joinedGroups.map((g) => (
                      <div key={g.id} className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-white">{g.name}</div>
                          <div className="text-[11px] text-slate-400">{g.district} • {g.meetingTime}</div>
                        </div>
                        <button
                          onClick={() => onLeaveGroup(g.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-700 rounded-lg cursor-pointer"
                          title="Leave Group"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Online Bookings */}
              {bookings.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase text-amber-300 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>Online Resource Bookings ({bookings.length})</span>
                  </h3>
                  <div className="space-y-2">
                    {bookings.map((b, i) => (
                      <div key={i} className="p-3 bg-slate-800 rounded-xl border border-slate-700 text-xs">
                        <div className="font-bold text-white">{b.serviceName}</div>
                        <div className="text-[11px] text-amber-300 mt-0.5">{b.date} at {b.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 text-center">
          <p className="text-[11px] text-slate-400">
            Thank you for being an active member of Clean City Initiative!
          </p>
        </div>

      </div>
    </div>
  );
};
