import React from 'react';
import { Leaf, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export const OurMission: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-[#163631] text-white shadow-inner border-y border-teal-800/40">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-900 text-emerald-300 text-xs font-bold uppercase tracking-widest border border-emerald-500/30">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Core Values & Vision</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Our Mission
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-2xl text-slate-100 font-normal leading-relaxed max-w-3xl mx-auto">
          We are dedicated to a cleaner, more compassionate city. Our mission combines environmental restoration with holistic social support, ensuring that every corner of our community is safe, clean, and welcoming for all.
        </p>

        {/* 3 Pillars Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-left">
          
          <div className="p-6 rounded-2xl bg-[#112623] border border-teal-700/50 hover:border-emerald-400/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-900 text-emerald-300 flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Environmental Restoration</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Organizing daily and weekly neighborhood cleanups, riverway restoration, and zero-waste recycling drives.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#112623] border border-teal-700/50 hover:border-amber-400/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-900 text-amber-300 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Holistic Social Support</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Providing hot meals, essential hygiene kits, transitional shelter navigators, and workforce rehab opportunities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#112623] border border-teal-700/50 hover:border-teal-400/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-900 text-teal-300 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Community Empowerment</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Uniting residents, youth, local businesses, and municipal partners in grass-roots stewardship for lasting impact.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
