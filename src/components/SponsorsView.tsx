import React from 'react';
import { SponsorItem } from '../types';
import { Heart, ExternalLink, ShieldCheck, Gift, ArrowUpRight, Mail, Phone, Building2 } from 'lucide-react';

interface SponsorsViewProps {
  sponsors: SponsorItem[];
}

export const SponsorsView: React.FC<SponsorsViewProps> = ({ sponsors }) => {
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

      {/* Sponsors List Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">
          Featured Sponsors & Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-emerald-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Sponsor Top Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border bg-emerald-100 text-emerald-900 border-emerald-300">
                      Community Sponsor
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

      {/* Become a Sponsor Callout - Contact Us Instructions */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-800">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Interested in Becoming a Corporate Sponsor?</h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Partner with us to provide eco-friendly equipment, fleet transport, or meal distribution for city restoration.
            </p>
          </div>
        </div>

        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
          <p className="text-sm font-semibold text-slate-800">
            Please contact us directly to discuss partnership opportunities:
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold">
              <Mail className="w-4 h-4 text-emerald-700" />
              <span>contact@cleancityinitiative.org</span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-900 font-bold">
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>(555) 321-CLEAN (25326)</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
