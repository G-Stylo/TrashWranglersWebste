import React from 'react';
import { NotificationItem } from '../types';
import { Bell, CheckCircle2, AlertTriangle, Sparkles, Calendar, Megaphone } from 'lucide-react';

interface NotificationsViewProps {
  notifications: NotificationItem[];
  onMarkAllRead: () => void;
  onToggleRead: (id: string) => void;
}

export const NotificationsView: React.FC<NotificationsViewProps> = ({
  notifications,
  onMarkAllRead,
  onToggleRead,
}) => {
  const getIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'milestone':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'urgent':
        return <AlertTriangle className="w-5 h-5 text-rose-400" />;
      case 'event':
        return <Calendar className="w-5 h-5 text-teal-400" />;
      default:
        return <Megaphone className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="py-12 bg-slate-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <Bell className="w-6 h-6 text-emerald-400" />
              <h1 className="text-3xl font-black text-white">Community Updates & Alerts</h1>
            </div>
            <p className="text-slate-300 text-sm mt-1">
              Stay informed on cleanups, weather notices, and milestone achievements.
            </p>
          </div>

          <button
            onClick={onMarkAllRead}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Mark All as Read</span>
          </button>
        </div>

        {/* Notifications Feed */}
        <div className="space-y-4">
          {notifications.map((item) => (
            <div
              key={item.id}
              onClick={() => onToggleRead(item.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                item.read
                  ? 'bg-slate-900/60 border-slate-800 text-slate-400'
                  : 'bg-slate-800/90 border-teal-600/50 text-white shadow-lg ring-1 ring-emerald-500/20'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex-shrink-0">
                {getIcon(item.type)}
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className={`text-base font-bold ${item.read ? 'text-slate-300' : 'text-white'}`}>
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">{item.timestamp}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{item.message}</p>
              </div>

              {!item.read && (
                <span className="w-2.5 h-2.5 bg-amber-400 rounded-full flex-shrink-0 mt-2" />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
