import React from 'react';
import { GraduationCap, Award, Clock, FileCheck2, CheckCircle2, ExternalLink, Users } from 'lucide-react';
import { NavTab } from '../types';

interface StudentServiceHoursProps {
  setActiveTab?: (tab: NavTab) => void;
}

export const StudentServiceHours: React.FC<StudentServiceHoursProps> = ({ setActiveTab }) => {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc_placeholder_form_id/viewform';

  const benefits = [
    {
      icon: FileCheck2,
      title: 'Official Hour Verification',
      description: 'On-site digital or paper signatures for school logs, National Honor Society (NHS), IB, and college applications.',
    },
    {
      icon: Clock,
      title: 'Flexible Student Schedules',
      description: 'Weekend morning cleanups and weekday afternoon park restoration shifts designed around school hours.',
    },
    {
      icon: Award,
      title: 'Student Leadership Opportunities',
      description: 'Earn extra service credits by becoming a Student Squad Leader, managing tool stations, or leading peer groups.',
    },
  ];

  const steps = [
    { step: '01', title: 'Register', desc: 'Fill out our volunteer Google Form or sign up for an upcoming event.' },
    { step: '02', title: 'Participate', desc: 'Join a 2–3 hour cleanup, tree planting, or outreach event in your district.' },
    { step: '03', title: 'Get Verified', desc: 'Bring your school service form for an instant signature after your shift.' },
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-100 text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <GraduationCap className="w-4 h-4 text-emerald-700" />
            <span>High School & Youth Volunteers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Earn Community Service Hours
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Fulfill your high school graduation requirements, NHS hours, or college resume credits while making a real difference in your local community parks and streets.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, index) => {
            const Icon = b.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{b.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Simple 3-Step Process Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">How Students Get Service Credits</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              We make the verification process simple, fast, and transparent for students, parents, and school administrators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative">
                <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  Step {s.step}
                </span>
                <h4 className="text-lg font-bold text-slate-900 pt-1">{s.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Action CTAs for Students */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-slate-100">
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-7 py-3.5 rounded-2xl shadow-md transition-all text-sm cursor-pointer"
            >
              <GraduationCap className="w-5 h-5 text-emerald-100" />
              <span>Sign Up as a Student Volunteer</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-90" />
            </a>

            {setActiveTab && (
              <button
                onClick={() => setActiveTab('calendar')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3.5 rounded-2xl border border-slate-300 transition-all text-sm cursor-pointer"
              >
                <Users className="w-4 h-4 text-emerald-700" />
                <span>View Event Calendar</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
