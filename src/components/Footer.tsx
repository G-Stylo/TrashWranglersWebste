import React, { useState } from 'react';
import { Sun, Mail, Phone, MapPin, Send, ShieldCheck } from 'lucide-react';
import { NavTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#0f1d1a] text-white border-t border-teal-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div 
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow">
                <Sun className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <span className="font-black text-xl text-white block leading-tight">
                  Clean City Initiative
                </span>
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                  Clean Streets, Bright Futures
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              We are a community-led 501(c)(3) non-profit initiative restoring city health, reviving parks, and empowering homeless neighbors through dignity and support.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold bg-teal-900/60 p-2 rounded-lg border border-teal-800 inline-flex">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Registered 501(c)(3) Org #84-9204812</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors cursor-pointer">
                  • Home & Mission Overview
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('groups')} className="hover:text-white transition-colors cursor-pointer">
                  • Local Volunteer Chapters & Squads
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('events')} className="hover:text-white transition-colors cursor-pointer">
                  • Upcoming Cleanup Events & RSVP
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('book')} className="hover:text-white transition-colors cursor-pointer">
                  • Book Equipment & Consultations
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('notifications')} className="hover:text-white transition-colors cursor-pointer">
                  • Community Announcements
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400">Contact & Outreach</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>742 Elm Street, Suite 100, Metro City, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>(555) 321-CLEAN (25326)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>contact@cleancityinitiative.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400">Stay Updated</h4>
            <p className="text-xs text-slate-300">
              Receive monthly environmental impact metrics and local volunteer alerts.
            </p>

            {!subscribed ? (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-3.5 pr-10 py-2.5 bg-slate-900 rounded-xl border border-teal-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-2.5 bg-teal-900 text-emerald-300 text-xs font-bold rounded-xl border border-emerald-500/30">
                ✓ Thank you for joining our community newsletter!
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-teal-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Clean City Initiative. All rights reserved. Built for community stewardship.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setActiveTab('events')} className="text-emerald-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer">
              <span>Volunteer Events</span>
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab('notifications')} className="hover:text-white transition-colors cursor-pointer">
              Announcements
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
