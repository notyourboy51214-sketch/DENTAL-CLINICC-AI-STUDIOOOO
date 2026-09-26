import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA, CLINIC_INFO } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Proof Adjacency */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
              <span>Patient Experiences</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>4.9 / 5.0 on Google</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight [text-wrap:balance]">
              Trusted by Gulshan families for genuine skill and honest fees.
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Read how Dr. Moin’s pain-conscious care and straightforward pricing make a lasting impression on our patients.
            </p>
          </div>

          {/* Google Review Trust Card */}
          <div className="shrink-0 p-4.5 bg-slate-50 border border-slate-200/80 rounded-3xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-teal-600 shadow-2xs">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.15z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.76-2.11-6.71-4.96H1.26v3.15C3.26 21.36 7.36 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.29 14.24c-.25-.72-.39-1.5-.39-2.24s.14-1.52.39-2.24V6.61H1.26C.46 8.21 0 10.04 0 12s.46 3.79 1.26 5.39l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.26 6.61l4.03 3.15c.95-2.85 3.59-4.96 6.71-4.96z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-amber-500">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-heading font-bold text-slate-900 text-sm">4.9</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Based on 14 authentic reviews
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials 4-Card Grid with clean unboxed metadata */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={item.id}
              style={{ transitionDelay: `${idx * 80}ms` }}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/70 hover:border-teal-200/80 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars & Treatment */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {/* Clean unboxed treatment indicator */}
                  <span className="text-xs text-teal-800 font-medium truncate max-w-[200px]">
                    {item.treatment}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{item.feedback}"
                </p>
              </div>

              {/* Author Row */}
              <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-semibold text-slate-900 text-xs sm:text-sm">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                    <span>{item.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.reviewDate}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          <span>Themes synthesized faithfully from patient reviews on Google Maps.</span>
          <span className="mx-2">·</span>
          <a
            href={CLINIC_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 hover:underline font-medium"
          >
            View City Dental Clinic on Google Maps →
          </a>
        </div>

      </div>
    </section>
  );
};
