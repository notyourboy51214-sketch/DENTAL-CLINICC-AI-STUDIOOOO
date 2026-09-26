import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Dr. Moin', href: '#doctor' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 py-3'
          : 'bg-white/80 backdrop-blur-xs py-4.5 border-b border-slate-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone Top Bar Contract */}
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-slate-900 group transition-opacity hover:opacity-90"
            aria-label="City Dental Clinic Home"
          >
            <span className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-600 transition-colors group-hover:bg-teal-100/70">
              <svg
                viewBox="0 0 24 24"
                className="w-4.5 h-4.5 fill-current"
                aria-hidden="true"
              >
                <path d="M12 2C8.69 2 6 4.69 6 8c0 2.22 1.21 4.15 3 5.19V19c0 1.66 1.34 3 3 3s3-1.34 3-3v-5.81c1.79-1.04 3-2.97 3-5.19 0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4 0 1.67-1.02 3.1-2.5 3.7V19c0 .55-.45 1-1 1s-1-.45-1-1v-7.3C10.02 11.1 9 9.67 9 8c0-2.21 1.79-4 4-4z" />
              </svg>
            </span>
            <span className="font-heading font-semibold text-lg sm:text-xl tracking-tight text-slate-900">
              City Dental Clinic
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-teal-700 hover:underline hover:underline-offset-4 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                'Hello City Dental Clinic, I would like to inquire about booking an appointment with Dr. Moin.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-teal-800 bg-teal-50 border border-teal-200/70 rounded-full hover:bg-teal-100 transition-all duration-200 shadow-xs"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-teal-600" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4.5 py-2 text-xs font-semibold text-white bg-teal-600 rounded-full shadow-xs hover:bg-teal-700 hover:shadow-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 pb-4 space-y-1 bg-white rounded-2xl p-4 shadow-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-teal-50 hover:text-teal-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-700 bg-slate-50 rounded-full"
              >
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                  'Hello City Dental Clinic, I would like to inquire about booking an appointment with Dr. Moin.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-teal-800 bg-teal-50 rounded-full border border-teal-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-teal-600" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
