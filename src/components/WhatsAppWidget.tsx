import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customQuery, setCustomQuery] = useState('');

  const quickOptions = [
    {
      label: 'Book Consultation with Dr. Moin',
      text: 'Hello Dr. Moin, I would like to schedule a dental checkup at City Dental Clinic.',
    },
    {
      label: 'Inquire About Treatment Pricing',
      text: 'Hello City Dental Clinic, could you please provide pricing details for dental treatments?',
    },
    {
      label: 'Emergency Toothache Help',
      text: 'Hello, I have acute dental pain right now and need urgent advice or a walk-in slot today.',
    },
    {
      label: 'Clinic Location & Directions',
      text: 'Hello, could you share landmark directions to City Dental Clinic in Block 3, Gulshan-e-Iqbal?',
    },
  ];

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuery.trim()) return;
    const url = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
      customQuery.trim()
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setCustomQuery('');
    setIsOpen(false);
  };

  const handleSelectQuick = (text: string) => {
    const url = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <aside aria-label="WhatsApp Quick Connect" className="fixed bottom-5 right-5 z-40">
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-teal-700 text-white p-4.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-heading font-bold text-white text-sm">
                  CD
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-teal-700 rounded-full" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm leading-tight">
                  City Dental Clinic
                </h4>
                <p className="text-[11px] text-teal-100 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3" />
                  <span>Dr. Moin · Open Daily till 10 PM</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3 max-h-80 overflow-y-auto">
            {/* Friendly Greeting Bubble */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-xs border border-slate-100 text-xs text-slate-700 shadow-2xs space-y-1">
              <p className="font-semibold text-teal-900">
                Welcome to City Dental Clinic
              </p>
              <p className="text-slate-600 leading-relaxed">
                How may we help your smile today? Choose a common inquiry below or type a message directly to Dr. Moin's desk:
              </p>
            </div>

            {/* Quick Option Buttons */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider pl-1">
                Common Requests:
              </p>
              {quickOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectQuick(opt.text)}
                  className="w-full text-left p-2.5 bg-white hover:bg-teal-50/70 border border-slate-200/80 hover:border-teal-200 rounded-xl text-xs text-slate-700 transition-colors flex items-center justify-between gap-2 cursor-pointer shadow-2xs"
                >
                  <span className="truncate">{opt.label}</span>
                  <MessageCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Custom Message Input Footer */}
          <form onSubmit={handleSendCustom} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your question..."
              value={customQuery}
              onChange={(e) => setCustomQuery(e.target.value)}
              className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-full focus:outline-hidden focus:border-teal-600 text-slate-900"
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-colors shadow-2xs cursor-pointer"
              aria-label="Send WhatsApp message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
        aria-label="Open WhatsApp direct chat"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-300 rounded-full" />
        </div>
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          WhatsApp Dr. Moin
        </span>
      </button>
    </aside>
  );
};
