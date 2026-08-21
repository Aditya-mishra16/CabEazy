"use client";

import React, { useEffect, useRef, useState } from "react";
import { Car, Navigation, ChevronUp, MapPin, Flag } from "lucide-react";

export default function ScrollProgressCar() {
  const [isVisible, setIsVisible] = useState(false);
  const [percentDisplay, setPercentDisplay] = useState(0);

  const carRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;
    let lastPercent = 0;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docEl = document.documentElement;
          const totalHeight = docEl.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;

          if (totalHeight > 0) {
            const progressRatio = Math.min(1, Math.max(0, currentScroll / totalHeight));
            const currentPercent = Math.round(progressRatio * 100);

            // Direct GPU Transform on Car (120fps, zero lag)
            if (carRef.current && trackRef.current) {
              const carWidth = 32;
              const maxTravel = Math.max(0, trackRef.current.offsetWidth - carWidth);
              const x = progressRatio * maxTravel;
              carRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
            }

            if (Math.abs(currentPercent - lastPercent) >= 1) {
              lastPercent = currentPercent;
              setPercentDisplay(currentPercent);
            }

            setIsVisible(currentScroll > 150);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const headerOffset = 28;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getStageLabel = (pct: number) => {
    if (pct < 25) return "Pickup • Exploring";
    if (pct < 60) return "En Route • Choosing Car";
    if (pct < 85) return "Cruising • Why Cabeazy";
    return "Destination Reached! 🎯";
  };

  return (
    <>
      {/* 1. DESKTOP & TABLET: FULL HIGHWAY JOURNEY CAPSULE (Hidden on mobile) */}
      <div
        className={`fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2.5 transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        role="complementary"
        aria-label="Real-time Trip Journey Progress"
      >
        {/* Main Highway Card */}
        <button
          type="button"
          onClick={scrollToContact}
          className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-xl hover:shadow-2xl rounded-2xl p-3.5 transition-all duration-200 flex flex-col gap-2 group text-left btn-press w-[260px]"
          title="Click to jump directly to Booking & Contact Desk"
        >
          {/* Header Info */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>Live Journey</span>
            </div>
            <span className="text-xs font-black text-brandColor font-mono">
              {percentDisplay}%
            </span>
          </div>

          {/* HIGHWAY TRACK WITH SOLID OPAQUE PINS & ZERO CROPPING */}
          <div
            ref={trackRef}
            className="relative w-full h-8 flex items-center px-0.5"
          >
            {/* Asphalt Road Line */}
            <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 h-2.5 bg-gray-100 rounded-full border border-gray-200 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 via-orange-400 to-brandColor transition-none origin-left"
                style={{ width: `${percentDisplay}%` }}
              />
            </div>

            {/* Start Pin: Solid Opaque Emerald Badge */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm z-0 border border-white"
              title="Pickup Point"
            >
              <MapPin className="w-3.5 h-3.5 text-white" />
            </div>

            {/* Destination Pin: Solid Opaque Brand Badge */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-brandColor text-white flex items-center justify-center shadow-sm z-0 border border-white"
              title="Destination"
            >
              <Flag className="w-3 h-3 text-white" />
            </div>

            {/* REAL-TIME MOVING VEHICLE: Opaque, Solid, Centered */}
            <div
              ref={carRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center z-10 will-change-transform pointer-events-none"
              style={{ transform: "translate3d(0, 0, 0)" }}
            >
              <div className="w-7 h-7 rounded-full bg-white text-brandColor shadow-md flex items-center justify-center border-2 border-brandColor ring-2 ring-orange-100/80">
                <Car className="w-3.5 h-3.5 text-brandColor" />
              </div>
            </div>
          </div>

          {/* Footer Label */}
          <div className="flex items-center justify-between text-[11px] text-gray-600 font-semibold pt-0.5">
            <span className="truncate">{getStageLabel(percentDisplay)}</span>
            <Navigation className="w-3 h-3 text-brandColor flex-shrink-0 group-hover:translate-x-0.5 transition-transform rotate-45" />
          </div>
        </button>

        {/* Back to Top Button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-2xl bg-gray-900 hover:bg-black text-white flex items-center justify-center shadow-lg transition-all duration-200 btn-press flex-shrink-0"
          aria-label="Scroll to top of page"
          title="Back to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>

      {/* 2. MOBILE ONLY: ULTRA-COMPACT FLOATING PILL (Never blocks content) */}
      <div
        className={`fixed bottom-20 right-3 z-40 flex md:hidden items-center gap-1.5 transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={scrollToContact}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-gray-900 border border-gray-200 shadow-md backdrop-blur-sm text-xs font-bold btn-press"
          aria-label={`Trip progress: ${percentDisplay}%. Tap to book.`}
        >
          <div className="w-5 h-5 rounded-full bg-brandColor text-white flex items-center justify-center">
            <Car className="w-3 h-3 text-white" />
          </div>
          <span className="font-mono text-brandColor font-black">{percentDisplay}%</span>
          <span className="text-[11px] text-gray-500 font-medium">Book</span>
        </button>

        <button
          type="button"
          onClick={scrollToTop}
          className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-md btn-press"
          aria-label="Back to top"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>
    </>
  );
}
