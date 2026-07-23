import React from 'react';
import { Leaf, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export const OurMission: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-widest border border-emerald-300">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          <span>Core Values & Vision</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Our Mission
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
          We are dedicated to a cleaner, more compassionate city. Our mission combines environmental restoration with holistic social support, ensuring that every corner of our community is safe, clean, and welcoming for all.
        </p>

        {/* 3 Pillars Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-left">
          
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Environmental Restoration</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Organizing daily and weekly neighborhood cleanups, riverway restoration, and zero-waste recycling drives.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Holistic Social Support</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Providing hot meals, essential hygiene kits, transitional shelter navigators, and workforce rehabilitation opportunities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-900 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Community Empowerment</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Uniting residents, youth, local businesses, and municipal partners in grass-roots stewardship for lasting impact.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
