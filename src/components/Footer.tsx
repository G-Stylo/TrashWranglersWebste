import React from 'react';
import { Sun, Mail, Phone, MapPin, Calendar, Heart, ExternalLink } from 'lucide-react';
import { NavTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-100 text-slate-800 border-t border-slate-200 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div 
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-black text-xl text-slate-900 block leading-tight">
                  Clean City Initiative
                </span>
                <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-widest">
                  Clean Streets, Bright Futures
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              We are a community-led initiative restoring city health, reviving parks, and empowering homeless neighbors through dignity, work opportunities, and social support.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
              <li>
                <button
                  onClick={() => setActiveTab('home')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Sun className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Home & Mission Overview</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('calendar')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Future Events Calendar</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('sponsors')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Heart className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Our Sponsors & Partners</span>
                </button>
              </li>
              <li>
                <a
                  href="https://example.org/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 transition-colors cursor-pointer flex items-center gap-2 text-emerald-700 font-bold"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Make a Donation (External Site)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Contact & Outreach</h4>
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>742 Elm Street, Suite 100, Metro City, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>(555) 321-CLEAN (25326)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>contact@cleancityinitiative.org</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Clean City Initiative. Built for community environmental stewardship.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('calendar')}
              className="hover:text-slate-900 transition-colors font-medium cursor-pointer"
            >
              Event Calendar
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveTab('sponsors')}
              className="text-emerald-700 hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              Sponsors & Partners
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
