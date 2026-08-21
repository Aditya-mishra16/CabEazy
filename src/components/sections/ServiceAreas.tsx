import React from "react";
import { MapPin, ArrowRight, Globe } from "lucide-react";
import { serviceLocations, getWhatsAppLink } from "@/config/site";

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-20 bg-gray-50 border-t border-gray-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brandColor">
              Pan-India &amp; Maharashtra Coverage
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Cab Booking Services Across{" "}
              <span className="text-brandColor">Mumbai &amp; All Over India</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              From our operational headquarters in Mumbai to interconnected network hubs across Maharashtra, Gujarat, Delhi NCR, Karnataka, Rajasthan, Goa, and all across India, CabEazy delivers reliable doorstep cab pickups 24/7.
            </p>

            <div className="space-y-3 pt-2 text-left">
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs hover-lift transition">
                <MapPin className="w-5 h-5 text-brandColor mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Mumbai Operational Hub &amp; Airport Transfers
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Covering Andheri, Powai, Bandra, BKC, Borivali, Dadar, Thane, Navi Mumbai, Mumbai International Airport (BOM), and CST/LTT Terminus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs hover-lift transition">
                <Globe className="w-5 h-5 text-brandColor mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    Pan-India Interstate Highway Permits
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Commercial tourist permits for seamless intercity road travel across all Indian states and tourist corridors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT GRID OF SERVICE LOCATIONS */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center justify-between">
                <span>Featured Service Corridors</span>
                <span className="text-xs font-semibold text-brandColor">
                  100+ Cities Network
                </span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceLocations.map((loc, idx) => {
                  const whatsappUrl = getWhatsAppLink(
                    `Hi CabEazy, I want to book a cab for ${loc.name}. Please share availability and quote.`
                  );

                  return (
                    <a
                      key={idx}
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group btn-press ${
                        loc.popular
                          ? "bg-orange-50/50 border-brandColor/20 hover:border-brandColor hover:bg-orange-50"
                          : "bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brandColor" />
                        {loc.popular && (
                          <span className="text-[10px] font-bold text-brandColor uppercase tracking-wider">
                            Popular
                          </span>
                        )}
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-800 group-hover:text-brandColor transition">
                        {loc.name}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Need a ride from another location or state in India?</span>
                <a
                  href={getWhatsAppLink("Hi CabEazy, do you provide service in my city / state in India?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brandColor hover:underline flex items-center gap-1 btn-press"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
