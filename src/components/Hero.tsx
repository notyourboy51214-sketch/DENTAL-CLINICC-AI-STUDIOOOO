import React from 'react';
import { Calendar, MessageCircle, Clock, MapPin, Star, ShieldCheck, HeartPulse } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import heroImg from '../assets/images/hero_dental_clinic_1790417515782.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-teal-50/60 via-slate-50 to-white">
      {/* Soft background ambient gradient and light clinical aesthetic */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-35 mix-blend-multiply bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/75 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quiet unboxed kicker without pill badges */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-teal-800 uppercase">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                Trusted Family Dentistry
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Gulshan-e-Iqbal, Karachi</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-teal-700">Open Daily till 10 PM</span>
            </div>

            {/* Reassuring, balanced headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-slate-900 leading-[1.18] tracking-tight [text-wrap:balance]">
              Calm, experienced dental care with transparent, affordable rates.
            </h1>

            {/* Subheadline focused on reassurance and Dr. Moin */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Led by <strong className="font-semibold text-slate-800">Dr. Moin</strong>, City Dental Clinic provides pain-conscious family treatments, thorough digital examinations, and dependable restorations in a soothing, hospital-grade sanitized environment.
            </p>

            {/* Key trust bullets with minimal thin-line icons */}
            <div className="pt-1 pb-2 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <HeartPulse className="w-3.5 h-3.5" />
                </div>
                <span>Gentle, anxiety-free pacing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Strict 100% autoclave sterilization</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>Convenient evening appointments</span>
              </div>
            </div>

            {/* Primary Action Buttons: Soft fully rounded pill shapes */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-teal-600 rounded-full shadow-xs hover:bg-teal-700 hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                  'Hello City Dental Clinic, I would like to inquire about booking an appointment with Dr. Moin.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-teal-800 bg-white border border-teal-200/90 rounded-full shadow-2xs hover:bg-teal-50/70 hover:border-teal-300 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-teal-600" />
                <span>Quick Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick Unboxed Social Proof */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-slate-800">4.9 / 5.0</span>
              <span aria-hidden="true">·</span>
              <span>14 Verified Google Reviews</span>
              <span aria-hidden="true">·</span>
              <span className="text-teal-700 font-medium">Praised for Dr. Moin's expertise & economical care</span>
            </div>

          </div>

          {/* Hero Visual Card Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer soft glowing halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-100/70 via-teal-50/40 to-sky-50/60 rounded-3xl blur-lg opacity-70 -z-10" />

              <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-sm border border-slate-200/70">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={heroImg}
                    alt="City Dental Clinic modern operatory suite"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Floating clinical note at bottom of photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-xl text-xs text-slate-700 flex items-center justify-between border border-white/60 shadow-xs">
                    <div>
                      <p className="font-semibold text-slate-900">Dr. Moin's Clinic Operatory</p>
                      <p className="text-slate-500 text-[11px]">Gulshan-e-Iqbal Block 3, Karachi</p>
                    </div>
                    <span className="text-[11px] font-medium text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/60">
                      Open Today till 10 PM
                    </span>
                  </div>
                </div>

                {/* Sub-card quick info */}
                <div className="mt-3.5 grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2.5 bg-slate-50/80 rounded-xl border border-slate-100">
                    <p className="text-slate-400 text-[11px]">Primary Dentist</p>
                    <p className="font-heading font-semibold text-slate-800 text-sm mt-0.5">Dr. Moin</p>
                    <p className="text-[10px] text-teal-700 font-medium">16+ Yrs Experience</p>
                  </div>
                  <div className="p-2.5 bg-slate-50/80 rounded-xl border border-slate-100">
                    <p className="text-slate-400 text-[11px]">Pricing Ethos</p>
                    <p className="font-heading font-semibold text-slate-800 text-sm mt-0.5">Economical</p>
                    <p className="text-[10px] text-slate-500">Transparent & Fair</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
