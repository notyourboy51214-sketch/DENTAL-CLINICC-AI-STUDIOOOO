/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { DoctorSection } from './components/DoctorSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceModal } from './components/ServiceModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { ServiceItem } from './types';

export default function App() {
  const [modalService, setModalService] = useState<ServiceItem | null>(null);
  const [preselectedBookingService, setPreselectedBookingService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedBookingService(serviceTitle);
    }
    const appointmentEl = document.getElementById('appointment');
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Trust Bar (Rating, Reviews, Hours, Address) */}
        <TrustBar />

        {/* 3. Meet Dr. Moin */}
        <DoctorSection onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Services */}
        <ServicesSection
          onSelectService={(service) => setModalService(service)}
          onQuickBook={(serviceTitle) => handleOpenBooking(serviceTitle)}
        />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Testimonials */}
        <TestimonialsSection />

        {/* 7. Pricing / Treatment Packages */}
        <PricingSection onOpenBooking={() => handleOpenBooking()} />

        {/* 8. FAQ */}
        <FaqSection />

        {/* 9. Appointment Booking Form */}
        <AppointmentSection
          preselectedService={preselectedBookingService}
          onClearPreselectedService={() => setPreselectedBookingService(undefined)}
        />

        {/* 10. Location & Map */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating WhatsApp Quick Action Widget */}
      <WhatsAppWidget />

      {/* Service Detail Modal */}
      <ServiceModal
        service={modalService}
        onClose={() => setModalService(null)}
        onSelectBooking={(serviceTitle) => handleOpenBooking(serviceTitle)}
      />
    </div>
  );
}
