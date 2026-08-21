"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Navigation } from "lucide-react";
import { siteConfig, vehiclesData, getWhatsAppLink } from "@/config/site";

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

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gray-950 text-white scroll-mt-16"
    >
      {/* BACKGROUND IMAGE WITH GRADIENT OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/HeroSectionBgImage.jpg"
          alt="CabEazy vehicle booking and driver assignment services"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center opacity-35 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-transparent to-gray-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-fade-in-up">
            {/* Top Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandColor/15 border border-brandColor/30 text-brandColor text-xs sm:text-sm font-semibold backdrop-blur-md animate-float-gentle">
              <ShieldCheck className="w-4 h-4 text-brandColor" />
              <span>Assigned Verified Chauffeurs &bull; 24/7 Booking Support</span>
            </div>

            {/* MAIN H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Book a Vehicle for <span className="text-brandColor">Your Journey</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Tell us where you need to go, and CabEazy will match your trip with an experienced, verified driver and a clean, comfortable vehicle. Enjoy punctual doorstep pickup, upfront clarity, and zero dynamic surge charges.
            </p>

            {/* Proof Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brandColor" />
                <span>Zero Surge Pricing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brandColor" />
                <span>All Vehicle Classes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brandColor" />
                <span>Instant WhatsApp Quote</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brandColor hover:bg-brandColor-hover text-white px-7 py-3.5 rounded-2xl text-base font-bold shadow-lg hover:shadow-floating btn-press transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get a Quote on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-2xl text-base font-semibold backdrop-blur-sm btn-press transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-brandColor" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* RIGHT ENQUIRY HELPER CARD */}
          <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none animate-fade-in-up">
            <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 relative hover-lift">
              {/* Trip Type Tabs */}
              <div className="flex rounded-xl bg-gray-100 p-1 mb-5">
                <button
                  type="button"
                  onClick={() => setTripType("oneway")}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
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
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    tripType === "roundtrip"
                      ? "bg-brandColor text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Round-Trip / Hourly
                </button>
              </div>

              <form onSubmit={handleWhatsAppEnquiry} className="space-y-4">
                {/* Pickup */}
                <div>
                  <label htmlFor="hero-pickup" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <input
                      id="hero-pickup"
                      type="text"
                      placeholder="Enter pickup address or city..."
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition"
                    />
                    <Navigation className="w-4 h-4 text-brandColor absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label htmlFor="hero-drop" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Destination
                  </label>
                  <div className="relative">
                    <input
                      id="hero-drop"
                      type="text"
                      placeholder="Where do you need to go?"
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition"
                    />
                    <Navigation className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Vehicle Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Select Vehicle Class
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {vehiclesData.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setVehicleType(v.name)}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          vehicleType === v.name
                            ? "border-brandColor bg-orange-50/80 text-brandColor ring-1 ring-brandColor"
                            : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                        }`}
                      >
                        <span className="block text-xs font-bold truncate">{v.category}</span>
                        <span className="block text-[11px] font-medium text-gray-500 mt-0.5">
                          {v.seats} Seats
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-sm shadow-md transition-all duration-200 btn-press"
                  >
                    <span>Get Instant Quote on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-brandColor" />
                  </button>
                </div>

                <p className="text-[11px] text-center text-gray-500 pt-0.5">
                  ⚡ 24/7 Availability &bull; Quick driver assignment
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
