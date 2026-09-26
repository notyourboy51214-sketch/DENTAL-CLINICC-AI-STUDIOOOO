import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Copy, 
  Check, 
  MessageCircle, 
  Navigation,
  Compass
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
            <span>Finding City Dental Clinic</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Gulshan-e-Iqbal, Karachi</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight [text-wrap:balance]">
            Convenient neighborhood access & evening timings.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Located in Block 3, Gulshan-e-Iqbal with easy approach from University Road, Rashid Minhas Road, and Disco Bakery surroundings.
          </p>
        </div>

        {/* 2-Column Location & Contact Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Address Card */}
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200/80 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-slate-900 text-sm sm:text-base">
                      Clinic Location
                    </h3>
                    <p className="text-[11px] text-teal-700 font-medium">Plus Code: {CLINIC_INFO.plusCode}</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="px-3 py-1.5 rounded-full bg-white hover:bg-teal-50 border border-slate-200 text-slate-600 hover:text-teal-700 text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy complete address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed pl-1">
                {CLINIC_INFO.address}
              </p>

              <div className="pt-2 text-xs text-slate-500 border-t border-slate-200/60 space-y-1">
                <p>• Landmark: Block 3 Gulshan-e-Iqbal, near central commercial zone</p>
                <p>• Ground floor accessibility with convenient curbside parking</p>
              </div>
            </div>

            {/* Timings & Contact Quick Strip */}
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-slate-900 text-sm">
                    Operating Hours
                  </h3>
                  <p className="text-xs text-teal-800 font-semibold mt-0.5">
                    Open Daily: 11:00 AM – 10:00 PM
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-normal pl-1">
                Open 7 days a week, including Saturday and Sunday evenings for working families.
              </p>
            </div>

            {/* Direct Instant Action Strip */}
            <div className="p-6 bg-teal-900 text-white rounded-3xl space-y-4">
              <div className="space-y-1">
                <h4 className="font-heading font-semibold text-white text-base">
                  Need Immediate Help?
                </h4>
                <p className="text-xs text-teal-200 leading-relaxed">
                  Call or WhatsApp our reception desk directly for live queue status and urgent toothache assistance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-teal-900 font-semibold text-xs hover:bg-teal-50 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                    'Hello City Dental Clinic, I need assistance finding your clinic or booking a consultation.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-teal-800/90 text-white border border-teal-700 font-semibold text-xs hover:bg-teal-700 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-teal-300" />
                  <span>WhatsApp Clinic</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[420px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200/80 relative shadow-xs flex flex-col">
              
              {/* Top Map Header Bar */}
              <div className="p-4 bg-white/95 backdrop-blur-xs border-b border-slate-200/70 flex items-center justify-between text-xs z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-medium text-slate-800">
                    City Dental Clinic — Block 3, Gulshan-e-Iqbal
                  </span>
                </div>
                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative flex-1 w-full">
                <iframe
                  title="City Dental Clinic Karachi Map Location"
                  src="https://maps.google.com/maps?q=City+Dental+Clinic+Block+3+Gulshan-e-Iqbal+Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[380px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Bottom Quick Guide */}
              <div className="p-3.5 bg-slate-50 border-t border-slate-200/70 text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-2">
                <span>Coordinates: 24.919° N, 67.098° E</span>
                <span className="text-teal-700 font-medium">Easily reached via University Road & Sir Shah Muhammad Suleman Rd</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
