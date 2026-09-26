import React from 'react';
import { Award, Heart, CheckCircle2, ShieldCheck, Sparkles, MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import doctorImg from '../assets/images/doctor_moin_consultation_1790417529920.jpg';

interface DoctorSectionProps {
  onOpenBooking: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="doctor" className="py-20 md:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
            <span>Lead Practitioner Profile</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Clinical Experience & Patient Ethos</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight [text-wrap:balance]">
            Meet Dr. Moin — Renowned for gentle precision & honest care.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Patients across Gulshan-e-Iqbal and broader Karachi consistently highlight Dr. Moin's gentle bedside manner, clinical accuracy, and steadfast commitment to economical treatment plans.
          </p>
        </div>

        {/* Profile Card Layout */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Doctor Image Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="aspect-4/3 sm:aspect-1/1 rounded-2xl overflow-hidden bg-slate-100 shadow-xs border border-slate-200/60">
                  <img
                    src={doctorImg}
                    alt="Dr. Moin consulting in City Dental Clinic"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Under image credentials card */}
                <div className="mt-4 p-4 bg-teal-50/70 rounded-2xl border border-teal-100/90 text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-teal-950 font-heading">Dr. Moin</span>
                    <span className="text-[11px] font-medium text-teal-800 bg-white px-2 py-0.5 rounded-full border border-teal-200">
                      BDS, Dental Surgeon
                    </span>
                  </div>
                  <p className="text-slate-600 leading-normal">
                    Over 16 years of restorative and pain-free dental surgery in Karachi.
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Story & Principles Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-slate-900">
                  "Gentle hands, truthful counsel, and zero unnecessary treatments."
                </h3>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  In patient reviews spanning over a decade, one compliment appears repeatedly: Dr. Moin takes the time to explain exactly what is happening inside your mouth. Whether dealing with a hesitant child, a nervous adult undergoing their first root canal, or an elderly patient needing restorative bridges, Dr. Moin prioritizes comfort and unhurried clinical care.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs sm:text-sm font-heading mb-1">
                    <Heart className="w-4 h-4 text-teal-600" />
                    <span>Anxiety-Conscious Technique</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    Micro-calibrated anesthesia and calm explanations ensure patients feel relaxed throughout.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs sm:text-sm font-heading mb-1">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    <span>Affordable & Honest Pricing</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    Direct diagnosis with no hidden fees or recommendations for unneeded cosmetic overhauls.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs sm:text-sm font-heading mb-1">
                    <Sparkles className="w-4 h-4 text-teal-600" />
                    <span>Tooth Preservation First</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    Every biological effort is made to save natural teeth before considering extraction.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs sm:text-sm font-heading mb-1">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span>Trusted Gulshan Community Tie</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    Recommended across families in Block 3 and surrounding areas for consistent, friendly service.
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-all duration-200 shadow-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Consult with Dr. Moin</span>
                </button>
                <a
                  href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                    'Hello Dr. Moin, I would like to schedule a dental consultation at City Dental Clinic.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-teal-800 bg-teal-50 border border-teal-200 rounded-full hover:bg-teal-100 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-teal-600" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
