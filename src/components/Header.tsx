import React, { useState } from 'react';
import { NavTab, NotificationItem } from '../types';
import { Sun, Bell, ShoppingBag, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  notifications: NotificationItem[];
  cartCount: number;
  openNotificationDrawer: () => void;
  openCartDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  notifications,
  cartCount,
  openNotificationDrawer,
  openCartDrawer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const unreadNotifications = notifications.filter((n) => !n.read).length;

  const navItems: { id: NavTab; label: string; badge?: number }[] = [
    { id: 'home', label: 'Home' },
    { id: 'groups', label: 'Groups' },
    { id: 'notifications', label: 'Notifications', badge: unreadNotifications },
    { id: 'events', label: 'Events' },
    { id: 'book', label: 'Book Online' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#162925] text-white shadow-xl border-b border-teal-900/60 transition-colors">
      {/* Top Banner Notice */}
      <div className="bg-[#12221e] px-4 py-1.5 text-xs text-center text-emerald-200 border-b border-teal-900/40 font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
        <span>Join us this Saturday for the Great City Cleanup! Over 15,000 lbs of waste removed this year.</span>
        <button
          onClick={() => setActiveTab('events')}
          className="underline hover:text-white font-semibold ml-1 cursor-pointer"
        >
          RSVP Now →
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Name */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group py-2"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Sun className="w-7 h-7 text-slate-950" />
            </div>
            <div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white block leading-tight group-hover:text-emerald-300 transition-colors">
                Clean City Initiative
              </span>
              <span className="text-[11px] text-teal-300 uppercase tracking-widest font-semibold block">
                Restoring Community & Hope
              </span>
            </div>
          </div>

          {/* Desktop Nav Tabs */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white bg-teal-800 shadow-sm border border-teal-600/50'
                      : 'text-slate-200 hover:text-white hover:bg-teal-900/40'
                  }`}
                >
                  {item.label}
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="ml-1.5 inline-flex items-center justify-center px-1.5 py-0.5 text-[11px] font-bold leading-none text-white bg-rose-500 rounded-full animate-bounce">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons & Profile */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Quick Notification Bell */}
            <button
              onClick={openNotificationDrawer}
              className="relative p-2 rounded-lg text-slate-300 hover:text-white hover:bg-teal-900/50 transition-colors cursor-pointer"
              title="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadNotifications > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-amber-400 rounded-full ring-2 ring-[#162925]" />
              )}
            </button>

            {/* Cart / My Subscriptions */}
            <button
              onClick={openCartDrawer}
              className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-teal-900/50 transition-colors cursor-pointer border border-teal-800/60"
              title="My Subscriptions & Bookings"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-400" />
              <span className="hidden lg:inline">My Subscriptions</span>
              {cartCount > 0 && (
                <span className="bg-amber-500 text-slate-950 font-extrabold text-[10px] px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Profile Avatar / Badge */}
            <div className="flex items-center space-x-2 pl-1 border-l border-teal-800/60">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs ring-2 ring-emerald-400/40 shadow">
                A
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-teal-900/60"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#12221e] border-b border-teal-900 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold ${
                activeTab === item.id
                  ? 'bg-teal-800 text-white font-bold'
                  : 'text-slate-300 hover:bg-teal-900/50'
              }`}
            >
              <span>{item.label}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          
          <div className="pt-3 border-t border-teal-900 flex items-center justify-between">
            <button
              onClick={() => {
                openCartDrawer();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm text-emerald-300 font-semibold"
            >
              <ShoppingBag className="w-4 h-4" />
              My Subscriptions & Bookings ({cartCount})
            </button>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs">
                A
              </div>
              <span className="text-xs text-slate-300 font-medium">Member</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
