import React from "react";
import { Phone, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";

export default function FinalCTA() {
  const whatsappUrl = getWhatsAppLink(
    "Hi CabEazy, I am ready to book a vehicle. Please provide fare and availability."
  );

  return (
    <section id="book" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-center border border-gray-800">
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brandColor/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandColor/20 border border-brandColor/30 text-brandColor text-xs sm:text-sm font-bold animate-pulse-subtle">
              <ShieldCheck className="w-4 h-4 text-brandColor" />
              <span>Fastest Confirmation Guaranteed</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Ready to Book Your Vehicle with{" "}
              <span className="text-brandColor">CabEazy?</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Connect with our team right now on WhatsApp or direct phone call. Enjoy clear upfront quotes, verified chauffeurs, and a smooth journey.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brandColor hover:bg-brandColor-hover text-white px-8 py-4 rounded-2xl text-base font-bold shadow-lg hover:shadow-floating btn-press transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-2xl text-base font-semibold backdrop-blur-sm btn-press transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-brandColor" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>

            <p className="text-xs text-gray-400 pt-2">
              Serving Mumbai, Pune, Nashik, Shirdi, Surat &amp; 50+ Cities across Maharashtra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
