import React from 'react';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { NavTab } from '../types';

interface HeroProps {
  setActiveTab: (tab: NavTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab }) => {
  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image with Solid Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=2000&q=85"
          alt="Clean City Initiative Volunteers cleaning up city park in hi-vis vests"
          className="w-full h-full object-cover object-center filter brightness-60 scale-105 transform transition-transform duration-10000 hover:scale-100"
        />
        {/* Solid Overlay */}
        <div className="absolute inset-0 bg-[#0f221f]/85" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>501(c)(3) Registered Non-Profit Community Organization</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Clean Streets, <br />
            <span className="text-emerald-400">
              Bright Futures
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
            We are a community-led environmental initiative dedicated to city cleanup and holistic social support for the homeless. Together, we are restoring our city's health and building a brighter future for all.
          </p>

          {/* Key Stat Highlights */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-teal-800/60 max-w-xl">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">15,000+</div>
              <div className="text-xs text-slate-300 font-medium">Lbs Trash Removed Annually</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">200+</div>
              <div className="text-xs text-slate-300 font-medium">Parks Restored & Maintained</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-300">1,200+</div>
              <div className="text-xs text-slate-300 font-medium">Unhoused Individuals Assisted</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActiveTab('events')}
              className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-xl transition-all text-base cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 text-emerald-200" />
              <span>Join Next Cleanup</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => setActiveTab('groups')}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold px-5 py-3.5 rounded-xl transition-all text-sm cursor-pointer"
            >
              <Users className="w-4 h-4 text-teal-300" />
              <span>Community Groups</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
