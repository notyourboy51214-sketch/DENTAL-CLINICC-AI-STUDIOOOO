import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Ethos Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-teal-800/80 border border-teal-600 flex items-center justify-center text-teal-300">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4.5 h-4.5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.69 2 6 4.69 6 8c0 2.22 1.21 4.15 3 5.19V19c0 1.66 1.34 3 3 3s3-1.34 3-3v-5.81c1.79-1.04 3-2.97 3-5.19 0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4 0 1.67-1.02 3.1-2.5 3.7V19c0 .55-.45 1-1 1s-1-.45-1-1v-7.3C10.02 11.1 9 9.67 9 8c0-2.21 1.79-4 4-4z" />
                </svg>
              </span>
              <span className="font-heading font-semibold text-lg text-white tracking-tight">
                City Dental Clinic
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Dedicated to compassionate, honest, and affordable oral health care for families in Gulshan-e-Iqbal and throughout Karachi. Led by Dr. Moin.
            </p>

            <div className="pt-1 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-teal-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Open Daily till 10 PM
              </span>
              <span aria-hidden="true">·</span>
              <span>4.9★ Rating on Google</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Dental Services
                </a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-teal-300 transition-colors">
                  Meet Dr. Moin
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-teal-300 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-teal-300 transition-colors">
                  Treatment Pricing
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-teal-300 transition-colors">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-300 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Clinical Procedures */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-wider">
              Key Treatments
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Diagnostic Dental Consultation</li>
              <li>Ultrasonic Scaling & Polishing</li>
              <li>Composite Aesthetic Fillings</li>
              <li>Painless Root Canal Treatment</li>
              <li>Wisdom Tooth Extractions</li>
              <li>Cosmetic Teeth Whitening</li>
              <li>Crowns, Bridges & Prosthetics</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-wider">
              Clinic Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {CLINIC_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-teal-300">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Open Daily: 11:00 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full text-center px-4 py-2 text-xs font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-full transition-colors cursor-pointer"
              >
                Schedule an Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} City Dental Clinic Karachi. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Dr. Moin Dental Practice</span>
            <span aria-hidden="true">·</span>
            <span>Gulshan-e-Iqbal Block 3</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
