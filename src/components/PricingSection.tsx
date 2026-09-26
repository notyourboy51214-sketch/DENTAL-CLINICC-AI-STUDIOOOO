import React, { useState } from 'react';
import { Wallet, Check, HelpCircle, MessageCircle, Calendar, Search } from 'lucide-react';
import { PRICING_LIST, CLINIC_INFO } from '../data/clinicData';

interface PricingSectionProps {
  onOpenBooking: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Diagnostics', 'Preventive', 'Restorative', 'Endodontics', 'Surgical', 'Cosmetic'];

  const filteredPricing = PRICING_LIST.filter((item) => {
    const matchesSearch = item.procedure.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
            <span>Honest & Economical Rates</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Transparent Healthcare</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight [text-wrap:balance]">
            Affordable treatment packages with zero surprise charges.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We list approximate rate ranges openly so patients can plan with peace of mind. Dr. Moin assesses every tooth individually and provides exact pricing in writing before initiating any treatment.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-3xl border border-slate-200/80 shadow-2xs mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatment (e.g., filling, scaling)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-full focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-slate-800"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Table / Grid */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="divide-y divide-slate-100">
            {filteredPricing.length > 0 ? (
              filteredPricing.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 hover:bg-teal-50/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1 sm:max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-semibold text-slate-900 text-sm sm:text-base">
                        {item.procedure}
                      </span>
                      {item.popular && (
                        <span className="text-[10px] font-semibold text-teal-800 bg-teal-50 border border-teal-200/70 px-2 py-0.5 rounded-full">
                          Common
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <div className="text-left sm:text-right">
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider">Estimated Fee</p>
                      <p className="font-heading font-bold text-slate-900 text-sm sm:text-base tabular-nums">
                        {item.approxRange}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                        `Hello City Dental Clinic, I would like to inquire about the estimated pricing for "${item.procedure}".`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-slate-50 hover:bg-teal-50 text-slate-600 hover:text-teal-700 border border-slate-200 text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
                      title="Ask on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-teal-600" />
                      <span className="hidden sm:inline">Ask Dr. Moin</span>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-xs text-slate-500">
                No procedures found matching "{searchTerm}". Try a different keyword or contact us directly on WhatsApp.
              </div>
            )}
          </div>
        </div>

        {/* Pricing Ethics Disclaimer Banner */}
        <div className="mt-8 p-5 bg-teal-50/60 rounded-3xl border border-teal-100/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-800">Our Honest Price Guarantee:</span> Exact fees depend on tooth anatomy, degree of decay, and material chosen. We will never start a procedure without your explicit understanding and consent regarding the cost.
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-4.5 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full shadow-2xs transition-colors cursor-pointer whitespace-nowrap"
          >
            Book Initial Checkup
          </button>
        </div>

      </div>
    </section>
  );
};
