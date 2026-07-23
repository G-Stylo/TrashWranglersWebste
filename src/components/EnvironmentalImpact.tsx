import React from 'react';
import { CheckCircle2, TreePine, Recycle, Trash2, TrendingDown } from 'lucide-react';

export const EnvironmentalImpact: React.FC = () => {
  const points = [
    {
      icon: Trash2,
      text: '15,000+ lbs of trash removed from our city streets annually.',
    },
    {
      icon: TreePine,
      text: '200+ city parks restored and maintained through community cleanups.',
    },
    {
      icon: Recycle,
      text: '100% of collected waste is sorted and recycled into local programs.',
    },
    {
      icon: TrendingDown,
      text: 'Our efforts have reduced local pollution by 35% in the past year.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-100 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: City Park Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[380px] lg:min-h-[480px] group">
            <img
              src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=85"
              alt="Restored city park with vibrant flower beds and clean pathways"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-950/40" />
            <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-slate-900 border border-white/20">
              <div className="text-xs uppercase font-bold text-emerald-300 tracking-wider">Restored Location</div>
              <div className="text-lg font-bold">Oakwood Community Park & Arboretum</div>
              <div className="text-xs text-slate-200">Maintained bi-weekly by North District Eco Guardians</div>
            </div>
          </div>

          {/* Right Column: Dark Green Container */}
          <div className="bg-[#1d413c] text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl flex flex-col justify-center border border-teal-800 relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900 text-emerald-300 text-xs font-extrabold uppercase tracking-widest border border-emerald-500/30">
                Environmental Metrics
              </div>

              {/* Exact Title */}
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Environmental Impact
              </h2>

              {/* Bullet Points */}
              <ul className="space-y-5 pt-2">
                {points.map((pt, idx) => {
                  return (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-teal-900 border border-teal-600/50 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed">
                        {pt.text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Sub-text footer */}
              <div className="pt-4 border-t border-teal-700/60 flex items-center justify-between text-xs text-teal-200">
                <span>Verified by Regional Ecology Board</span>
                <span className="font-semibold text-amber-300">Updated July 2026</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
