import React from "react";
import { ArrowRight, MapPin, Clock, Navigation2, MessageCircle } from "lucide-react";
import { routesData, getWhatsAppLink, siteConfig } from "@/config/site";

export default function PopularRoutes() {
  return (
    <section id="routes" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brandColor mb-2">
            Frequent Travel Corridors
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Popular Outstation &amp;{" "}
            <span className="text-brandColor">Intercity Cab Routes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Travel seamlessly between major cities with verified highway chauffeurs, on-time doorstep pickup, and dedicated customer support.
          </p>
        </div>

        {/* ROUTES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {routesData.map((route) => {
            const whatsappUrl = getWhatsAppLink(
              `Hi CabEazy, I want to book a cab from ${route.from} to ${route.to}. Please share vehicle availability and quote.`
            );

            return (
              <div
                key={route.id}
                className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between hover-lift ${
                  route.highlight
                    ? "bg-gradient-to-b from-orange-50/60 to-white border-brandColor/40 shadow-md ring-1 ring-brandColor/20"
                    : "bg-gray-50/70 border-gray-200/80 hover:border-gray-300 shadow-sm"
                }`}
              >
                <div>
                  {/* FROM -> TO BADGE */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-800 shadow-2xs">
                      <Navigation2 className="w-3.5 h-3.5 text-brandColor" />
                      Intercity Route
                    </span>
                    {route.highlight && (
                      <span className="text-[11px] font-bold text-brandColor uppercase tracking-wider">
                        High Demand
                      </span>
                    )}
                  </div>

                  {/* ROUTE TITLE */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>{route.from}</span>
                    <ArrowRight className="w-5 h-5 text-brandColor flex-shrink-0" />
                    <span>{route.to}</span>
                  </h3>

                  {/* DISTANCE & DURATION */}
                  <div className="grid grid-cols-2 gap-3 mb-6 bg-white p-3.5 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <div>
                        <span className="text-[10px] uppercase font-bold text-gray-400 block">Distance</span>
                        <span className="text-xs sm:text-sm font-bold text-gray-800">{route.distance}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <div>
                        <span className="text-[10px] uppercase font-bold text-gray-400 block">Duration</span>
                        <span className="text-xs sm:text-sm font-bold text-gray-800">{route.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ACTION CTA */}
                <div className="pt-4 border-t border-gray-200/70 flex items-center justify-between gap-4">
                  <span className="text-xs font-medium text-gray-500">
                    One-Way &amp; Round-Trip
                  </span>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-brandColor text-white text-xs sm:text-sm font-bold shadow-sm btn-press transition-all duration-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Get Quote</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CUSTOM ROUTE PROMPT */}
        <div className="rounded-3xl bg-gray-900 text-white p-8 sm:p-10 shadow-lg text-center max-w-4xl mx-auto flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Traveling on a Different Route?
          </h3>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mb-6">
            We provide custom one-way and round-trip outstation cab bookings across 50+ cities in Maharashtra, Gujarat, and Goa.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={getWhatsAppLink("Hi CabEazy, I have a custom route enquiry. Please help with quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brandColor hover:bg-brandColor-hover text-white px-6 py-3 rounded-xl text-sm font-bold shadow-sm btn-press transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask for Custom Route on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-xl text-sm font-semibold btn-press transition"
            >
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
