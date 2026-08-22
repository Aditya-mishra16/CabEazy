"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Navigation } from "lucide-react";
import { siteConfig, vehiclesData, getWhatsAppLink } from "@/config/site";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const [tripType, setTripType] = useState<"oneway" | "roundtrip">("oneway");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicleType, setVehicleType] = useState("Sedan Prime");

  const handleWhatsAppEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi CabEazy, I would like to book a ${
      tripType === "oneway" ? "One-Way" : "Round-Trip"
    } trip:\n- Pickup: ${pickup || "My Pickup Location"}\n- Destination: ${
      drop || "My Destination"
    }\n- Vehicle Class: ${vehicleType}\nPlease share availability and quote.`;
    window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  const defaultWhatsAppUrl = getWhatsAppLink(
    "Hi CabEazy, I want to check vehicle availability and get a quote for my trip."
  );

  // text-base ensures 16px on mobile (prevents iOS zoom); sm:text-sm reverts to 14px on sm+ screens
  const inputClass =
    "w-full pl-9 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-base sm:text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition bg-white";

  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24 overflow-hidden scroll-mt-16 text-white"
    >
      {/* SCENIC HIGHWAY BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-highway.jpg"
          alt="CabEazy Scenic Open Highway Journey"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
        />
        {/* Soft overlay that preserves the scenic road while ensuring text clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/40" />
        <div className="absolute inset-0 bg-black/18" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* DESKTOP-ONLY LEFT CONTENT COLUMN — staggered entrance */}
          <div className="hidden lg:flex lg:col-span-7 flex-col space-y-6 text-left">

            {/* Verified Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-white text-xs sm:text-sm font-semibold backdrop-blur-md animate-float-gentle">
                <ShieldCheck className="w-4 h-4 text-brandColor" />
                <span>Assigned Verified Chauffeurs &bull; 24/7 Booking Support</span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
            >
              Book Your Cab with{" "}
              <span className="text-brandColor">Cabeazy</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              className="text-base sm:text-lg text-gray-100 max-w-2xl leading-relaxed drop-shadow-sm font-medium"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            >
              Tell us where you need to go, and CabEazy will match your trip with an experienced,
              verified driver and a clean, comfortable vehicle. Enjoy punctual doorstep pickup,
              upfront clarity, and zero dynamic surge charges.
            </motion.p>

            {/* Proof Points */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-sm text-gray-100 pt-1 font-semibold drop-shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4, ease: EASE }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brandColor" />
                <span>Zero Surge Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brandColor" />
                <span>All Vehicle Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brandColor" />
                <span>Instant WhatsApp Quote</span>
              </div>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              className="flex items-center gap-4 pt-2"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5, ease: EASE }}
            >
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-brandColor hover:bg-brandColor-hover text-white px-7 py-3.5 rounded-2xl text-base font-bold shadow-xl hover:shadow-2xl btn-press transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get a Quote on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2.5 bg-black/40 hover:bg-black/60 text-white border border-white/30 px-6 py-3.5 rounded-2xl text-base font-semibold backdrop-blur-md btn-press transition-all duration-200 shadow-lg"
              >
                <Phone className="w-5 h-5 text-brandColor" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </motion.div>
          </div>

          {/* QUOTE FORM CARD — enters from slight below with delay */}
          <motion.div
            className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          >
            <div className="bg-white text-gray-900 rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl border border-white/50 backdrop-blur-md relative">

              {/* Mobile-only header inside card */}
              <div className="block lg:hidden mb-4 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-brandColor/20 text-brandColor text-[11px] font-bold mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Drivers &bull; 24/7 Available</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                  Book Your Cab with <span className="text-brandColor">Cabeazy</span>
                </h1>
                <p className="text-xs text-gray-500 mt-1.5">
                  Get an instant quote and fast driver assignment
                </p>
              </div>

              {/* Trip Type Tabs */}
              <div className="flex rounded-xl bg-gray-100 p-1 mb-4 sm:mb-5">
                <button
                  type="button"
                  onClick={() => setTripType("oneway")}
                  className={`flex-1 py-2 sm:py-2.5 rounded-lg text-sm font-bold transition-all ${
                    tripType === "oneway"
                      ? "bg-brandColor text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  One-Way Trip
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("roundtrip")}
                  className={`flex-1 py-2 sm:py-2.5 rounded-lg text-sm font-bold transition-all ${
                    tripType === "roundtrip"
                      ? "bg-brandColor text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Round-Trip / Hourly
                </button>
              </div>

              <form onSubmit={handleWhatsAppEnquiry} className="space-y-3.5 sm:space-y-4">
                {/* Pickup */}
                <div>
                  <label htmlFor="hero-pickup" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <input
                      id="hero-pickup"
                      type="text"
                      placeholder="Enter pickup address or city..."
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className={inputClass}
                    />
                    <Navigation className="w-4 h-4 text-brandColor absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label htmlFor="hero-drop" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Destination
                  </label>
                  <div className="relative">
                    <input
                      id="hero-drop"
                      type="text"
                      placeholder="Where do you need to go?"
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                      className={inputClass}
                    />
                    <Navigation className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Vehicle Selection */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Select Vehicle Class
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {vehiclesData.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setVehicleType(v.name)}
                        className={`p-2 sm:p-2.5 rounded-xl border text-center transition-all ${
                          vehicleType === v.name
                            ? "border-brandColor bg-orange-50/90 text-brandColor ring-1 ring-brandColor"
                            : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                        }`}
                      >
                        <span className="block text-[11px] sm:text-xs font-bold truncate">{v.category}</span>
                        <span className="block text-[10px] sm:text-[11px] font-medium text-gray-500 mt-0.5">
                          {v.seats} Seats
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-sm shadow-md transition-all duration-200 btn-press"
                  >
                    <span>Get Instant Quote on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-brandColor" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-500 pt-0.5 px-1">
                  <span>⚡ Quick Driver Assignment</span>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-brandColor font-bold hover:underline"
                  >
                    Call {siteConfig.phone}
                  </a>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
