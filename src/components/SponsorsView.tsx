import React, { useState } from 'react';
import { SponsorItem } from '../types';
import { Heart, ExternalLink, ShieldCheck, Sparkles, Building2, Award, Gift, ArrowUpRight, Search } from 'lucide-react';

interface SponsorsViewProps {
  sponsors: SponsorItem[];
}

export const SponsorsView: React.FC<SponsorsViewProps> = ({ sponsors }) => {
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tiers = ['All', 'Platinum', 'Gold', 'Silver', 'Community Partner'];

  const filteredSponsors = sponsors.filter((s) => {
    const matchesTier = selectedTier === 'All' || s.tier === selectedTier;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.contribution.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTier && matchesSearch;
  });

  const getTierBadgeClass = (tier: SponsorItem['tier']) => {
    switch (tier) {
      case 'Platinum':
        return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'Gold':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Silver':
        return 'bg-slate-100 text-slate-800 border-slate-300';
      case 'Community Partner':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-slate-50 min-h-screen text-slate-900">
      
      {/* Hero Header & Thank You Banner */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 relative overflow-hidden">
        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300">
            <Heart className="w-3.5 h-3.5 text-emerald-700 fill-emerald-700" />
            <span>Honoring Our Supporters & Benefactors</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Thank You to Our Community Sponsors
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our city cleanups, park restorations, and unhoused outreach programs are made possible through the generous support of corporate partners, civic foundations, and local businesses. We extend our deepest gratitude for your commitment to a cleaner, brighter city.
          </p>

          {/* Prominent Donation Link Button (Redirects to External Site) */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="https://example.org/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-7 py-3.5 rounded-2xl shadow-md transition-all text-sm cursor-pointer transform hover:-translate-y-0.5"
            >
              <Gift className="w-5 h-5 text-emerald-100" />
              <span>Make a Donation</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-90" />
            </a>

            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Redirects securely to our external official donation portal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor Impact Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">100%</div>
            <div className="text-xs text-slate-600 font-semibold">Direct Program Allocation</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center flex-shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">25+</div>
            <div className="text-xs text-slate-600 font-semibold">Corporate & Civic Partners</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-900 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">$150,000+</div>
            <div className="text-xs text-slate-600 font-semibold">Community Equipment Funded</div>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search sponsor name or contribution..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 rounded-xl border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Tier Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {tiers.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTier(t)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-colors ${
                selectedTier === t
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Sponsors Grid */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">
          Featured Sponsors & Partners ({filteredSponsors.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredSponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-emerald-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Sponsor Top Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${getTierBadgeClass(sponsor.tier)}`}>
                      {sponsor.tier} Sponsor
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {sponsor.name}
                    </h3>
                  </div>

                  {sponsor.websiteUrl && (
                    <a
                      href={sponsor.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-500 hover:text-emerald-700 border border-slate-200 transition-colors cursor-pointer"
                      title="Visit Sponsor Website"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {sponsor.description}
                </p>
              </div>

              {/* Contribution Badge Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Supported Area:</span>
                <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  {sponsor.contribution}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Become a Sponsor Callout */}
      <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-bold text-slate-900">Interested in Becoming a Corporate Sponsor?</h3>
          <p className="text-xs text-slate-600 max-w-xl">
            Partner with us to provide eco-friendly equipment, fleet transport, or meal distribution. Your support directly powers local cleanups and community restoration.
          </p>
        </div>

        <a
          href="https://example.org/donate"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
        >
          <span>Support Our Mission</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
};
