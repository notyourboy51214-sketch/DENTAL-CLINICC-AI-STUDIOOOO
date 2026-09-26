import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  AlertCircle,
  Send
} from 'lucide-react';
import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';
import { AppointmentFormData } from '../types';

interface AppointmentSectionProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  preselectedService,
  onClearPreselectedService,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phoneNumber: '',
    service: preselectedService || SERVICES_DATA[0].title,
    preferredDate: '',
    preferredTime: 'Evening (6:00 PM – 8:00 PM)',
    notes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<AppointmentFormData | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Set default min date to today
  const todayStr = new Date().toISOString().split('T')[0];

  const timeSlots = [
    'Morning (11:00 AM – 1:00 PM)',
    'Afternoon (1:00 PM – 4:00 PM)',
    'Late Afternoon (4:00 PM – 6:00 PM)',
    'Evening (6:00 PM – 8:00 PM)',
    'Night (8:00 PM – 10:00 PM)',
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Please enter your phone/WhatsApp number';
    } else if (formData.phoneNumber.trim().length < 10) {
      errs.phoneNumber = 'Please enter a valid 10-11 digit contact number';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const generateWhatsAppMessage = (data: AppointmentFormData) => {
    return encodeURIComponent(
      `Hello City Dental Clinic!\n\n` +
      `I would like to confirm my dental appointment with Dr. Moin:\n` +
      `• Patient Name: ${data.fullName}\n` +
      `• Phone Number: ${data.phoneNumber}\n` +
      `• Treatment: ${data.service}\n` +
      `• Preferred Date: ${data.preferredDate}\n` +
      `• Time Slot: ${data.preferredTime}\n` +
      (data.notes ? `• Notes/Symptoms: ${data.notes}\n` : '') +
      `\nPlease let me know if this slot is available. Thank you!`
    );
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      service: SERVICES_DATA[0].title,
      preferredDate: '',
      preferredTime: 'Evening (6:00 PM – 8:00 PM)',
      notes: '',
    });
    if (onClearPreselectedService) {
      onClearPreselectedService();
    }
  };

  return (
    <section id="appointment" className="py-20 md:py-28 bg-slate-50/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
            <span>Direct Scheduling</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Fast Confirmation</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight [text-wrap:balance]">
            Book an Appointment with Dr. Moin
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Fill in your preferred date and time below. We will confirm your slot quickly via call or WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden">
          
          {isSubmitted && submittedData ? (
            /* Successful Confirmation State */
            <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <h3 className="font-heading text-2xl font-semibold text-slate-900">
                  Appointment Request Received!
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thank you, <strong className="text-slate-800">{submittedData.fullName}</strong>. Your request for <span className="font-medium text-teal-900">{submittedData.service}</span> has been logged for <span className="font-semibold text-slate-800">{submittedData.preferredDate}</span> ({submittedData.preferredTime}).
                </p>
              </div>

              {/* Direct WhatsApp Instant Forward Button */}
              <div className="p-5 bg-teal-50/70 rounded-2xl border border-teal-200/80 max-w-md mx-auto space-y-3">
                <div className="flex items-center justify-center gap-2 text-teal-900 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  Instant Confirmation via WhatsApp
                </div>
                <p className="text-xs text-slate-600">
                  Click below to open WhatsApp with your booking details already written out for Dr. Moin.
                </p>
                <a
                  href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${generateWhatsAppMessage(
                    submittedData
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Request to Dr. Moin's WhatsApp</span>
                </a>
              </div>

              <div>
                <button
                  onClick={resetForm}
                  className="text-xs font-medium text-slate-500 hover:text-slate-800 underline underline-offset-4 cursor-pointer"
                >
                  Book another appointment or make changes
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g., Tariq Mahmood"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={`w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 text-slate-900 ${
                        errors.fullName
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-slate-200 focus:border-teal-500'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="e.g., 0331 2177298"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneNumber: e.target.value })
                      }
                      className={`w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 text-slate-900 ${
                        errors.phoneNumber
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-slate-200 focus:border-teal-500'
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

              </div>

              {/* Service Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Preferred Service / Reason for Visit
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-slate-900"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.approxRate.split('(')[0].trim()})
                    </option>
                  ))}
                  <option value="General Oral Consultation & Toothache Checkup">
                    General Toothache / Immediate Checkup
                  </option>
                  <option value="Other / Free Assessment Inquiry">
                    Other Inquiries / Second Opinion
                  </option>
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Date */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      min={todayStr}
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDate: e.target.value })
                      }
                      className={`w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 text-slate-900 ${
                        errors.preferredDate
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-slate-200 focus:border-teal-500'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                {/* Time Slot */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredTime: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-slate-900"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Additional Notes or Symptoms (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe any symptoms, previous treatments, sensitivity, or dental anxiety..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full p-4 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-slate-900 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  Open daily 11 AM – 10 PM. No cancellation or registration penalties.
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-teal-600 rounded-full shadow-xs hover:bg-teal-700 hover:shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Appointment</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
