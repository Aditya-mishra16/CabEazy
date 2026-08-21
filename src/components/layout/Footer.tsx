import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig, navLinks, servicesData, getWhatsAppLink } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppLink("Hi CabEazy, I would like to enquire about vehicle booking / get a quote.");

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden border-t border-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Decorative Brand Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brandColor/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* COLUMN 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-3xl font-black tracking-tight text-white block">
              Cab<span className="text-brandColor">Eazy</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Reliable vehicle booking and driver assignment platform. Tell us where you need to go, and we arrange a verified chauffeur with a clean, comfortable vehicle for your journey. Available 24/7.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brandColor hover:bg-brandColor-hover text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm btn-press"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-brandColor transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-brandColor transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-2.5 text-gray-400 hover:text-white group transition"
                >
                  <Phone className="w-4 h-4 text-brandColor mt-0.5 flex-shrink-0" />
                  <span className="group-hover:text-brandColor transition">
                    {siteConfig.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 text-gray-400 hover:text-white group transition"
                >
                  <Mail className="w-4 h-4 text-brandColor mt-0.5 flex-shrink-0" />
                  <span className="break-all group-hover:text-brandColor transition">
                    {siteConfig.email}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400">
                <MapPin className="w-4 h-4 text-brandColor mt-0.5 flex-shrink-0" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400">
                <Clock className="w-4 h-4 text-brandColor mt-0.5 flex-shrink-0" />
                <span>{siteConfig.operatingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 mt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-gray-400 transition">
              Services
            </a>
            <a href="#fleet" className="hover:text-gray-400 transition">
              Vehicles
            </a>
            <a href="#faq" className="hover:text-gray-400 transition">
              FAQ
            </a>
            <a href="#contact" className="hover:text-gray-400 transition">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
