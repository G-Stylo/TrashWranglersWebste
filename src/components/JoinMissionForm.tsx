import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Users, Sparkles } from 'lucide-react';

interface JoinMissionFormProps {
  onAddVolunteer?: (data: { firstName: string; lastName: string; email: string; district: string }) => void;
}

export const JoinMissionForm: React.FC<JoinMissionFormProps> = ({ onAddVolunteer }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('Central District');
  const [activityInterest, setActivityInterest] = useState('Street & Park Cleanups');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const districts = [
    'Central District',
    'North Riverfront',
    'East Parklands',
    'South Urban Core',
    'Westside Neighborhoods',
  ];

  const activities = [
    'Street & Park Cleanups',
    'Recycling & Waste Sorting',
    'Tree Planting & Gardening',
    'Social Support & Outreach',
    'Event Coordination',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) return;

    if (onAddVolunteer) {
      onAddVolunteer({ firstName, lastName, email, district });
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Section Heading */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-teal-900 px-4 py-1.5 rounded-full border border-emerald-500/30 inline-block">
            Volunteer Network
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Join Our Volunteer Movement
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Become an active contributor to our city's cleanliness and community wellbeing. Sign up to get notified of upcoming cleanups and events in your district.
          </p>
        </div>

        {/* Dark Teal Container */}
        <div className="bg-[#1d413c] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-teal-800 relative overflow-hidden">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Box Header */}
              <div className="border-b border-teal-700/60 pb-5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Clean City Initiative
                </h3>
                <p className="text-sm sm:text-base text-teal-100 mt-1">
                  Sign up today to join thousands of volunteers making a tangible impact.
                </p>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-teal-200 mb-1.5">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 bg-teal-950 rounded-xl border border-teal-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-teal-200 mb-1.5">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 bg-teal-950 rounded-xl border border-teal-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-teal-200 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-teal-950 rounded-xl border border-teal-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                />
              </div>

              {/* District & Activity Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-teal-200 mb-1.5">
                    Preferred District
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-4 py-3 bg-teal-950 rounded-xl border border-teal-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                  >
                    {districts.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-teal-200 mb-1.5">
                    Primary Interest
                  </label>
                  <select
                    value={activityInterest}
                    onChange={(e) => setActivityInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-teal-950 rounded-xl border border-teal-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                  >
                    {activities.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Users className="w-5 h-5 text-white" />
                  <span>Join Volunteer Movement</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-teal-200 space-x-2">
                <span>🌱 Over 1,500 Active Volunteers</span>
                <span>•</span>
                <span>Weekly Events & Supplies Provided</span>
              </div>
            </form>
          ) : (
            /* Thank You / Confirmation Screen */
            <div className="py-8 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-500 text-slate-950 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white">Welcome, {firstName}!</h3>
                <p className="text-emerald-300 font-medium text-base">
                  You are now registered as an official Clean City Initiative volunteer in {district}.
                </p>
                <p className="text-xs text-slate-200 max-w-md mx-auto">
                  We have sent event orientation guidelines and upcoming weekend schedule details to <span className="font-bold text-white">{email}</span>.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-bold text-xs cursor-pointer"
                >
                  Register Another Member
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
