import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";

export default function MobileFloatingBar() {
  const whatsappUrl = getWhatsAppLink("Hi CabEazy, I would like to enquire about vehicle booking.");

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center justify-center gap-2.5 py-4 text-sm font-bold text-gray-900 bg-white hover:bg-gray-50 border-r border-gray-200 active:bg-gray-100 transition"
          aria-label={`Call CabEazy at ${siteConfig.phone}`}
        >
          <Phone className="w-4 h-4 text-brandColor flex-shrink-0" />
          <span>Call Now</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 py-4 text-sm font-bold text-white bg-brandColor hover:bg-brandColor-hover active:bg-brandColor-hover transition"
          aria-label="Chat with CabEazy on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 flex-shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
