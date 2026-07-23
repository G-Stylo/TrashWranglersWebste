import React, { useState } from 'react';
import { BookingSlot } from '../types';
import { Calendar, Clock, MapPin, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';

interface BookOnlineViewProps {
  services: BookingSlot[];
  onBookService: (serviceName: string, date: string, time: string) => void;
}

export const BookOnlineView: React.FC<BookOnlineViewProps> = ({ services, onBookService }) => {
  const [selectedService, setSelectedService] = useState<BookingSlot | null>(null);
  const [selectedDate, setSelectedDate] = useState('Aug 3, 2026');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [bookedSuccess, setBookedSuccess] = useState(false);

  const availableDates = ['Aug 3, 2026', 'Aug 4, 2026', 'Aug 5, 2026', 'Aug 7, 2026', 'Aug 8, 2026'];
  const availableTimes = ['09:00 AM', '10:30 AM', '01:00 PM', '03:30 PM'];

  const handleConfirmBooking = () => {
    if (selectedService) {
      onBookService(selectedService.serviceName, selectedDate, selectedTime);
      setBookedSuccess(true);
    }
  };

  return (
    <div className="py-12 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="border-b border-slate-800 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Resource Scheduling
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">
            Book Equipment & Services Online
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-1 max-w-2xl">
            Reserve cleanup equipment wagons, schedule volunteer orientation, or book a consultation with our homeless social support team.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-800/90 rounded-3xl p-6 border border-slate-700 hover:border-teal-500/60 transition-all shadow-xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                    {service.price}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white">{service.serviceName}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{service.description}</p>

                <div className="flex items-center gap-1.5 text-xs text-teal-300 pt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{service.location}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Days: {service.availableDays.join(', ')}
                </span>

                <button
                  onClick={() => {
                    setSelectedService(service);
                    setBookedSuccess(false);
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow transition-all cursor-pointer flex items-center gap-1"
                >
                  <span>Select Time</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Dialog Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-6 shadow-2xl relative">
              
              {!bookedSuccess ? (
                <>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase text-emerald-400">Scheduling Appointment</span>
                    <h3 className="text-2xl font-black text-white">{selectedService.serviceName}</h3>
                    <p className="text-xs text-slate-300">{selectedService.location}</p>
                  </div>

                  {/* Date Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Select Date</label>
                    <div className="flex flex-wrap gap-2">
                      {availableDates.map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setSelectedDate(d)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            selectedDate === d
                              ? 'bg-emerald-500 text-slate-950 font-extrabold'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Select Time Slot</label>
                    <div className="grid grid-cols-2 gap-2">
                      {availableTimes.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTime(t)}
                          className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            selectedTime === t
                              ? 'bg-amber-400 text-slate-950 font-extrabold'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleConfirmBooking}
                      className="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold cursor-pointer shadow-lg"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </>
              ) : (
                /* Success screen */
                <div className="py-6 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-500 text-slate-950 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Booking Confirmed!</h3>
                  <p className="text-sm text-slate-200">
                    You are booked for <span className="font-bold text-emerald-300">{selectedService.serviceName}</span> on <span className="font-bold text-white">{selectedDate}</span> at <span className="font-bold text-white">{selectedTime}</span>.
                  </p>
                  <p className="text-xs text-slate-400">
                    A confirmation pass has been added to your "My Subscriptions & Bookings" tab.
                  </p>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
