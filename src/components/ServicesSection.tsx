import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Smile, 
  HeartHandshake, 
  Layers, 
  Activity, 
  Scissors,
  Check
} from 'lucide-react';
import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onQuickBook: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onQuickBook,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'general', label: 'General & Preventive' },
    { id: 'restorative', label: 'Fillings & Root Canal' },
    { id: 'surgical', label: 'Painless Extractions' },
    { id: 'cosmetic', label: 'Cosmetic & Whitening' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  // Icon selector for each service
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'consultation':
        return <Activity className="w-5 h-5 text-teal-600" />;
      case 'scaling':
        return <Sparkles className="w-5 h-5 text-teal-600" />;
      case 'fillings':
        return <Layers className="w-5 h-5 text-teal-600" />;
      case 'root-canal':
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 'extractions':
        return <Scissors className="w-5 h-5 text-teal-600" />;
      case 'whitening':
        return <Smile className="w-5 h-5 text-teal-600" />;
      case 'crowns':
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 'pediatric':
        return <HeartHandshake className="w-5 h-5 text-teal-600" />;
      default:
        return <Smile className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
              <span>Clinical Services & Procedures</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Gentle & Pain-Conscious</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight [text-wrap:balance]">
              Comprehensive oral healthcare for every stage of your life.
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Every procedure is conducted under meticulous sterilization protocols with Dr. Moin's gentle, steady hand. Click any procedure to read full details or book directly.
            </p>
          </div>

          {/* Direct WhatsApp Advice Kicker */}
          <div className="shrink-0 p-4 bg-teal-50/70 border border-teal-100 rounded-2xl max-w-xs text-xs text-slate-600">
            <p className="font-semibold text-teal-950 font-heading mb-1">
              Unsure which treatment you need?
            </p>
            <p className="text-slate-500 mb-2">
              Send Dr. Moin a quick note on WhatsApp for preliminary advice.
            </p>
            <a
              href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                'Hello Dr. Moin, I am experiencing tooth discomfort and would like to ask your advice before visiting.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 font-semibold hover:underline inline-flex items-center gap-1"
            >
              Ask Dr. Moin <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Functional Category Filter (Segmented control button tabs) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid with soft rounded cards & staggered feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              style={{ transitionDelay: `${index * 50}ms` }}
              className="group bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-200/70 hover:border-teal-200/80 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Minimal icon & duration */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100/80 flex items-center justify-center text-teal-600 transition-colors group-hover:bg-teal-100/80">
                    {getServiceIcon(service.id)}
                  </div>
                  
                  {/* Clean unboxed metadata separator */}
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-semibold text-slate-900 group-hover:text-teal-900 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key feature ticks */}
                <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-200/50">
                  {service.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Rate & Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between gap-2">
                <div>
                  <p className="text-[11px] text-slate-400">Approx. fee</p>
                  <p className="text-xs font-bold text-slate-800 font-heading">
                    {service.approxRate.split('(')[0]}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-teal-700 bg-white hover:bg-teal-50 border border-slate-200 rounded-full transition-colors cursor-pointer"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onQuickBook(service.title)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full shadow-2xs transition-colors cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
