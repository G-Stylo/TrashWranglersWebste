import React from 'react';
import { Calendar, Heart, ArrowRight, TreePine, Sparkles, ExternalLink } from 'lucide-react';
import { NavTab } from '../types';

interface HeroProps {
  setActiveTab: (tab: NavTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab }) => {
  return (
    <section className="relative py-16 lg:py-24 bg-emerald-50/60 text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Community Environmental & Social Initiative</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Clean Streets, <br />
              <span className="text-emerald-700">
                Bright Futures
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              We are a community-led environmental initiative dedicated to city cleanups, park restoration, and holistic social support for unhoused neighbors. Together, we build a cleaner, safer city for everyone.
            </p>

            {/* Key Stat Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-700">15,000+</div>
                <div className="text-xs text-slate-600 font-semibold">Lbs Trash Removed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-800">200+</div>
                <div className="text-xs text-slate-600 font-semibold">Parks Restored</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-teal-800">1,200+</div>
                <div className="text-xs text-slate-600 font-semibold">Neighbors Supported</div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setActiveTab('calendar')}
                className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3.5 rounded-2xl shadow-md transition-all text-base cursor-pointer transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 text-emerald-100" />
                <span>Future Events Calendar</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => setActiveTab('sponsors')}
                className="flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold px-6 py-3.5 rounded-2xl shadow-sm transition-all text-sm cursor-pointer"
              >
                <Heart className="w-4 h-4 text-emerald-700" />
                <span>Our Sponsors</span>
              </button>

              <a
                href="https://example.org/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold px-5 py-3.5 rounded-2xl shadow-sm transition-all text-sm cursor-pointer"
              >
                <span>Make a Donation</span>
                <ExternalLink className="w-4 h-4 text-slate-600" />
              </a>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] lg:aspect-[5/6] group">
              <img
                src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1200&q=85"
                alt="Community volunteers cleaning up city park"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/20" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-slate-900">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                  <TreePine className="w-4 h-4" />
                  <span>City Restoration</span>
                </div>
                <div className="text-base font-extrabold text-slate-900">Saturday Community Cleanup Squads</div>
                <div className="text-xs text-slate-600">Join over 1,500 active residents making a difference</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
