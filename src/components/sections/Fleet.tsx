import React from "react";
import Image from "next/image";
import { Users, Briefcase, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { siteConfig, vehiclesData, getWhatsAppLink } from "@/config/site";

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 md:py-28 bg-gray-50 border-t border-gray-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brandColor mb-2">
            Available Vehicle Classes
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Choose the Right Vehicle for{" "}
            <span className="text-brandColor">Your Journey</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            From nimble city hatchbacks to spacious highway SUVs and premium group vehicles, all cars are air-conditioned and driven by verified commercial chauffeurs.
          </p>
        </div>

        {/* FLEET CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehiclesData.map((vehicle) => {
            const whatsappUrl = getWhatsAppLink(
              `Hi CabEazy, I would like to check availability and get a quote for the ${vehicle.name} (${vehicle.category}).`
            );

            return (
              <div
                key={vehicle.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:border-brandColor/40 hover-lift transition-all duration-300 flex flex-col justify-between group"
              >
                {/* TOP BADGE & IMAGE */}
                <div className="p-6 sm:p-7 pb-2 bg-gradient-to-b from-gray-50/80 to-white">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-bold">
                      {vehicle.category}
                    </span>
                    <span className="text-xs font-semibold text-brandColor bg-orange-50 px-2.5 py-1 rounded-full border border-brandColor/20">
                      AC Commercial
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 truncate">
                    {vehicle.popularModels}
                  </p>

                  {/* VEHICLE IMAGE */}
                  <div className="relative h-44 w-full my-2 overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} - ${vehicle.category} vehicle booking`}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* CAPACITY & SPECS BAR */}
                <div className="px-6 py-3 bg-gray-50 border-y border-gray-100 grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-brandColor" />
                    <span>{vehicle.seats} Passengers</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-brandColor" />
                    <span>{vehicle.luggage}</span>
                  </div>
                </div>

                {/* FEATURES LIST & CTAS */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                      Recommended For
                    </p>
                    <p className="text-xs font-medium text-gray-800 mb-4 bg-orange-50/80 p-2.5 rounded-xl border border-brandColor/15">
                      {vehicle.recommendedFor}
                    </p>

                    <ul className="space-y-2">
                      {vehicle.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-brandColor flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="space-y-2 pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brandColor hover:bg-brandColor-hover text-white font-bold text-sm shadow-sm btn-press transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 font-semibold text-xs btn-press transition"
                    >
                      <Phone className="w-3.5 h-3.5 text-gray-500" />
                      <span>Call for Availability</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
