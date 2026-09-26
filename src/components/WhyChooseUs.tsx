import React from 'react';
import { 
  ShieldCheck, 
  Wallet, 
  HeartHandshake, 
  Moon, 
  Smile, 
  Clock, 
  Sparkles, 
  CheckCircle 
} from 'lucide-react';
import facilityImg from '../assets/images/clinic_hygiene_facility_1790417548433.jpg';
import gentleImg from '../assets/images/gentle_smile_care_1790417561576.jpg';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
            <span>Our Commitment to You</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Why Patients Trust Us</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight [text-wrap:balance]">
            A dental experience built around safety, empathy, and fair pricing.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Visiting the dentist should never be stressful or financially intimidating. Here is why families across Karachi have made City Dental Clinic their permanent dental home.
          </p>
        </div>

        {/* Asymmetric Bento-style Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Honest & Affordable Care (Wide) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-4">
                <Wallet className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-slate-900">
                Genuinely Economical, Transparent Rates
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe exceptional healthcare should be accessible to everyday working families and students in Karachi. Dr. Moin explains costs upfront before commencing any procedure. No surprise facility fees, no predatory upselling, and no expensive redundant treatments.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Clear quotes given before work begins</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Adjusted consultation with procedure</span>
              </div>
            </div>
          </div>

          {/* Card 2: Visual Spotlight - Gentle Smile Care */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-4 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-slate-100">
              <img
                src={gentleImg}
                alt="Gentle patient dental care at City Dental Clinic"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                <p className="font-semibold font-heading">Pain-Conscious Technique</p>
                <p className="text-white/80 text-[11px]">Empathetic pacing for high-anxiety patients</p>
              </div>
            </div>

            <div className="p-3">
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you have had past traumatic dental visits or a sensitive gag reflex, Dr. Moin’s gentle hand and calm chairside presence put you completely at ease.
              </p>
            </div>
          </div>

          {/* Card 3: Visual Spotlight - Clinic Sterilization Suite */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-4 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-slate-100">
              <img
                src={facilityImg}
                alt="Autoclave sterilization station at City Dental Clinic"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                <p className="font-semibold font-heading">100% Autoclave Sterilization</p>
                <p className="text-white/80 text-[11px]">Instruments unsealed in your presence</p>
              </div>
            </div>

            <div className="p-3">
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero compromise on biological safety. Pouched sterile kits, single-use disposables, and certified surface disinfection protect every family member.
              </p>
            </div>
          </div>

          {/* Card 4: Convenient Daily & Evening Hours (Wide) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-4">
                <Moon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-slate-900">
                Open Daily until 10:00 PM
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Karachi life is demanding, and toothaches do not wait for business hours. We stay open until 10 PM 7 days a week, making it effortless to come in after your office hours, university classes, or dinner without taking time off work.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Daily: 11:00 AM – 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Walk-ins and scheduled appointments welcome</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
