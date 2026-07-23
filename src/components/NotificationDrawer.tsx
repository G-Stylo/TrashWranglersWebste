import React from 'react';
import { NotificationItem } from '../types';
import { X, Bell, CheckCircle2, AlertTriangle, Sparkles, Calendar, Megaphone } from 'lucide-react';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
  onMarkAllRead: () => void;
  onToggleRead: (id: string) => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllRead,
  onToggleRead,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 text-white h-full flex flex-col shadow-2xl">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-bold text-white">Notifications</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onMarkAllRead}
              className="text-xs text-emerald-400 hover:underline font-semibold cursor-pointer"
            >
              Mark read
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Content */}
        <div className="p-4 flex-1 overflow-y-auto space-y-3">
          {notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => onToggleRead(n.id)}
              className={`p-4 rounded-xl border text-xs cursor-pointer transition-all ${
                n.read
                  ? 'bg-slate-900 border-slate-800 text-slate-400'
                  : 'bg-slate-800/80 border-teal-600/40 text-slate-200'
              }`}
            >
              <div className="flex justify-between font-bold text-white mb-1">
                <span>{n.title}</span>
                <span className="text-[10px] text-slate-500">{n.timestamp}</span>
              </div>
              <p className="leading-relaxed">{n.message}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
