import React from 'react';
import { Shield, Users, Utensils, Home } from 'lucide-react';

export const CompassionateSupport: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Dark Green Container */}
          <div className="bg-[#1d413c] text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl flex flex-col justify-center border border-teal-800 relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900 text-amber-300 text-xs font-extrabold uppercase tracking-widest border border-amber-500/30">
                Social Welfare & Rehab
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Compassionate Support
              </h2>

              {/* Body Text */}
              <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed">
                We provide essential social programs and resources to empower the homeless community. Our initiative focuses on dignity, stability, and long-term rehabilitation through holistic support and community engagement.
              </p>

              {/* Social Pillars Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-teal-700/60">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-900 text-amber-300">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">8,500+</div>
                    <div className="text-xs text-slate-300">Warm Meals Served</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-900 text-emerald-300">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">450+</div>
                    <div className="text-xs text-slate-300">Shelter Placements</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-900 text-teal-300">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">1,200+</div>
                    <div className="text-xs text-slate-300">Clients Navigated</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-900 text-emerald-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">100%</div>
                    <div className="text-xs text-slate-300">Dignity-Centered Care</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Support & Outreach Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[380px] lg:min-h-[480px] group">
            <img
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=85"
              alt="Community caseworkers providing empathetic support and guidance"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-950/40" />
            <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-slate-900 border border-white/20">
              <div className="text-xs uppercase font-bold text-amber-300 tracking-wider">Holistic Social Work</div>
              <div className="text-lg font-bold">Dignity & Rehabilitation Center</div>
              <div className="text-xs text-slate-200">Daily casework, mental health navigation & job training</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
