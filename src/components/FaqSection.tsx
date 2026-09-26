import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS_DATA, CLINIC_INFO } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
            <span>Patient Inquiries</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Everything You Need to Know</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight [text-wrap:balance]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Clear, honest answers about visiting City Dental Clinic, appointments, emergency care, and pain management.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-teal-200 bg-teal-50/20 shadow-xs'
                    : 'border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300/80'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-slate-900 text-sm sm:text-base pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-teal-100 text-teal-700' : 'bg-white text-slate-400 border border-slate-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-teal-100/50 pt-3 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-10 p-6 bg-slate-50 rounded-3xl border border-slate-200/70 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-semibold text-slate-900 text-sm">
              Have a specific clinical question?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Dr. Moin or our clinical assistant is available on WhatsApp to answer your query.
            </p>
          </div>

          <a
            href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
              'Hello City Dental Clinic, I have a question regarding a dental concern.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-teal-800 bg-white border border-teal-200 rounded-full hover:bg-teal-50 transition-colors shadow-2xs"
          >
            <MessageCircle className="w-4 h-4 text-teal-600" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
