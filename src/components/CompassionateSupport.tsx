import React from 'react';

export const CompassionateSupport: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Clean Container */}
          <div className="bg-slate-50 text-slate-900 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-sm flex flex-col justify-center border border-slate-200 relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-widest border border-amber-300">
                Social Welfare & Rehab
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                Compassionate Support
              </h2>

              {/* Body Text */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                We provide essential social programs and resources to empower unhoused community members. Our initiative focuses on dignity, stability, and long-term rehabilitation through holistic support and community engagement.
              </p>
            </div>
          </div>

          {/* Right Column: Support & Outreach Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 min-h-[380px] lg:min-h-[480px] group">
            <img
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=85"
              alt="Community caseworkers providing empathetic support and guidance"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-900/20" />
            <div className="absolute bottom-6 left-6 right-6 text-slate-900 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg">
              <div className="text-xs uppercase font-bold text-amber-800 tracking-wider">Holistic Social Work</div>
              <div className="text-lg font-extrabold text-slate-900">Dignity & Rehabilitation Center</div>
              <div className="text-xs text-slate-600">Daily casework, mental health navigation & job training</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
