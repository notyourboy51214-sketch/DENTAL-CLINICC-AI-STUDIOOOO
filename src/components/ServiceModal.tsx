import React from 'react';
import { X, Clock, Sparkles, CheckCircle2, Calendar, MessageCircle } from 'lucide-react';
import { ServiceItem } from '../types';
import { CLINIC_INFO } from '../data/clinicData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectBooking: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectBooking,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-xl border border-slate-100 max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close procedure details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 uppercase tracking-wider">
            <span>Procedure Guide</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="capitalize">{service.category} Dentistry</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-semibold text-slate-900 pr-8">
            {service.title}
          </h3>
        </div>

        {/* Rate & Duration Pill */}
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
          <div className="px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 font-semibold flex items-center gap-1.5">
            <span>Estimated Fee:</span>
            <span>{service.approxRate}</span>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Duration: {service.duration}</span>
          </div>
        </div>

        {/* Full Prose */}
        <div className="mt-5 space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>{service.fullDescription}</p>
        </div>

        {/* Recommended For */}
        <div className="mt-5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
          <span className="font-semibold text-slate-800 block mb-1">
            Recommended When Experiencing:
          </span>
          <p className="text-slate-600">{service.recommendedFor}</p>
        </div>

        {/* Clinical Highlights */}
        <div className="mt-5">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Procedure Highlights & Comfort
          </h4>
          <ul className="space-y-2">
            {service.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onSelectBooking(service.title);
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 shadow-xs transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book This Treatment</span>
          </button>

          <a
            href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
              `Hello City Dental Clinic, I would like to ask about the "${service.title}" procedure with Dr. Moin.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-teal-800 bg-teal-50 border border-teal-200/80 rounded-full hover:bg-teal-100 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-teal-600" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
