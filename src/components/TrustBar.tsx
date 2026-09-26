import React, { useEffect, useState, useRef } from 'react';
import { Star, Clock, MapPin, Award, Users } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const TrustBar: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Gentle count-up states
  const [ratingVal, setRatingVal] = useState(4.0);
  const [reviewsVal, setReviewsVal] = useState(1);
  const [experienceVal, setExperienceVal] = useState(5);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate rating from 4.0 to 4.9 gently
          let currentRating = 4.0;
          const ratingInterval = setInterval(() => {
            currentRating += 0.1;
            if (currentRating >= 4.9) {
              setRatingVal(4.9);
              clearInterval(ratingInterval);
            } else {
              setRatingVal(parseFloat(currentRating.toFixed(1)));
            }
          }, 45);

          // Animate reviews to 14
          let currentReviews = 1;
          const reviewInterval = setInterval(() => {
            currentReviews += 1;
            if (currentReviews >= 14) {
              setReviewsVal(14);
              clearInterval(reviewInterval);
            } else {
              setReviewsVal(currentReviews);
            }
          }, 35);

          // Animate experience to 16
          let currentExp = 5;
          const expInterval = setInterval(() => {
            currentExp += 1;
            if (currentExp >= 16) {
              setExperienceVal(16);
              clearInterval(expInterval);
            } else {
              setExperienceVal(currentExp);
            }
          }, 35);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={containerRef}
      className="border-y border-slate-200/80 bg-white py-6 md:py-8 shadow-2xs relative z-10"
      aria-label="Clinic Overview & Trust Metrics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          {/* Stat 1: 4.9 Rating & Verified Reviews */}
          <div className="flex flex-col items-center text-center p-2">
            <div className="flex items-center gap-1 text-amber-500 mb-1">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
                {ratingVal.toFixed(1)}
              </span>
              <span className="text-xs font-normal text-slate-400">/ 5.0</span>
            </div>
            <p className="text-xs font-medium text-slate-600">
              <span className="font-semibold text-slate-800 tabular-nums">{reviewsVal}</span> Verified Google Reviews
            </p>
            <p className="text-[11px] text-teal-700 mt-0.5">Top-rated in Gulshan</p>
          </div>

          {/* Stat 2: Lead Dentist Experience */}
          <div className="flex flex-col items-center text-center p-2 pt-4 md:pt-2">
            <div className="flex items-center gap-1.5 text-teal-600 mb-1">
              <Award className="w-4 h-4" />
              <span className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
                {experienceVal}+
              </span>
              <span className="text-sm font-semibold text-slate-700">Years</span>
            </div>
            <p className="text-xs font-medium text-slate-600">
              Clinical Practice with Dr. Moin
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">Trusted Family Specialist</p>
          </div>

          {/* Stat 3: Daily Evening Hours */}
          <div className="flex flex-col items-center text-center p-2 pt-4 md:pt-2">
            <div className="flex items-center gap-1.5 text-teal-600 mb-1">
              <Clock className="w-4 h-4" />
              <span className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                10:00 PM
              </span>
            </div>
            <p className="text-xs font-medium text-slate-600">
              Open Daily · Mon to Sun
            </p>
            <p className="text-[11px] text-teal-700 mt-0.5">Extended Evening Slots</p>
          </div>

          {/* Stat 4: Neighborhood Location */}
          <div className="flex flex-col items-center text-center p-2 pt-4 md:pt-2">
            <div className="flex items-center gap-1.5 text-teal-600 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                Block 3, Gulshan
              </span>
            </div>
            <p className="text-xs font-medium text-slate-600">
              Karachi, Pakistan (W3JV+G3G)
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">Accessible & Central</p>
          </div>

        </div>
      </div>
    </section>
  );
};
