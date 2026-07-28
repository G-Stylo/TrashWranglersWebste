import React from 'react';
import { ExternalLink, HeartHandshake, ClipboardList, ShieldCheck } from 'lucide-react';

export const JoinMissionForm: React.FC = () => {
  // Placeholder Google Form link
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc_placeholder_form_id/viewform';

  return (
    <section className="py-20 lg:py-24 bg-white text-slate-900 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        
        {/* Main Section Heading */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300 inline-block">
            Volunteer Network
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Join Our Volunteer Movement
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Become an active contributor to our city's cleanliness and community wellbeing. Please fill out our official volunteer registration form to get started.
          </p>
        </div>

        {/* Clean Callout Card with Google Form Button */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
            <HeartHandshake className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Sign Up via Google Forms
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Click the button below to open our official volunteer registration application in a new tab. Equipment, gloves, and safety vests will be provided at all events.
            </p>
          </div>

          {/* Prominent Google Form Link Button */}
          <div className="pt-2 flex flex-col items-center justify-center gap-3">
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all text-base cursor-pointer transform hover:-translate-y-0.5"
            >
              <ClipboardList className="w-5 h-5 text-emerald-100" />
              <span>Fill Out Volunteer Google Form</span>
              <ExternalLink className="w-4 h-4 text-emerald-200" />
            </a>

            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Redirects securely to our official Google Registration Form</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

