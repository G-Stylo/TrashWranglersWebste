import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { NavTab } from '../types';

interface CommunityImpactProps {
  setActiveTab: (tab: NavTab) => void;
}

export const CommunityImpact: React.FC<CommunityImpactProps> = ({ setActiveTab }) => {
  const impactCards = [
    {
      id: 1,
      title: 'Citywide Street & Park Cleanups',
      category: 'Environmental Restoration',
      description: 'Over 1,500 volunteers have mobilized across 12 city sectors to clear litter, restore riverbanks, and beautify neighborhood thoroughfares.',
      imageUrl: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80',
      badge: '15,000+ lbs Trash Cleared',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    },
    {
      id: 2,
      title: 'Recycling Sorting & Supply Drives',
      category: 'Circular Economy',
      description: 'Sorting 100% of collected plastics, aluminum, and organic matter into specialized reprocessing programs while distributing warm clothing packs.',
      imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
      badge: '100% Recycled & Diverted',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    {
      id: 3,
      title: 'Urban Forestry & Garden Planting',
      category: 'Green Canopy',
      description: 'Planting shade trees, building community garden compost beds, and establishing pollinator paths to combat urban heat and air pollution.',
      imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      badge: '200+ Parks Restored',
      badgeColor: 'bg-teal-100 text-teal-900 border-teal-300',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300 inline-block">
            Action In Motion
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Community Impact
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how our dedicated volunteers and social workers transform city streets and lives through direct, hands-on community action.
          </p>
        </div>

        {/* 3 Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-emerald-400 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/10" />
                
                {/* Top Badge */}
                <span className={`absolute top-4 left-4 ${card.badgeColor} font-extrabold text-xs px-3 py-1 rounded-full border shadow-sm`}>
                  {card.badge}
                </span>

                <span className="absolute bottom-3 left-4 text-xs font-bold text-white drop-shadow uppercase tracking-wider">
                  {card.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    Citywide Metro Area
                  </span>
                  <button
                    onClick={() => setActiveTab('calendar')}
                    className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Calendar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
