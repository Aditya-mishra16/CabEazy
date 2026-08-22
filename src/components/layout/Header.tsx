"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { siteConfig, navLinks, getWhatsAppLink } from "@/config/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const whatsappUrl = getWhatsAppLink("Hi Cabeazy, I would like to enquire about vehicle booking.");
  const closeMenu = () => setMobileMenuOpen(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHomePage = window.location.pathname === "/";
    if (href.startsWith("/#") && isHomePage) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const elem = document.getElementById(targetId);
        if (elem) {
          // Clean offset so the section title lands right below the fixed header
          const headerOffset = 28;
          const elementPosition = elem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
        }
      }
      closeMenu();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
            : "bg-gradient-to-b from-black/60 to-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 2-column flex layout: Logo on left, Navigation + CTAs on right */}
          <nav className="flex items-center justify-between gap-6" aria-label="Main Navigation">
            {/* LEFT: Brand Logo */}
            <Link
              href="/#home"
              onClick={(e) => handleSmoothScroll(e, "/#home")}
              className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandColor rounded-lg group"
              aria-label="Cabeazy Home"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo-icon.png"
                  alt="Cabeazy Logo Icon"
                  width={36}
                  height={36}
                  className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 object-contain rounded-xl"
                  priority
                />
                <span
                  className={`text-2xl sm:text-3xl font-black tracking-tight transition-colors ${
                    scrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  Cabeazy
                </span>
              </div>
            </Link>

            {/* RIGHT SIDE GROUP: Nav Links + CTA Action Buttons */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0">
              {/* Navigation Links */}
              <div className="flex items-center gap-5 xl:gap-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`text-sm font-semibold transition-colors hover:text-brandColor whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-brandColor rounded-md px-1 py-0.5 ${
                      scrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex items-center gap-2.5 flex-shrink-0">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold border whitespace-nowrap transition-all duration-200 btn-press focus:outline-none focus-visible:ring-2 focus-visible:ring-brandColor ${
                    scrolled
                      ? "border-gray-200 text-gray-800 hover:bg-gray-50"
                      : "border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                  }`}
                  aria-label={`Call ${siteConfig.phone}`}
                >
                  <Phone className="w-4 h-4 text-brandColor flex-shrink-0" />
                  <span>Call Now</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brandColor hover:bg-brandColor-hover text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm whitespace-nowrap btn-press transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandColor"
                  aria-label="Chat with Cabeazy on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* TABLET / MOBILE: Compact Quick Actions + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden flex-shrink-0">
              <a
                href={`tel:${siteConfig.phone}`}
                className={`hidden sm:flex p-2 sm:px-3 sm:py-2 rounded-xl border transition-all btn-press items-center gap-1.5 text-xs font-semibold ${
                  scrolled
                    ? "border-gray-200 text-gray-900 bg-white"
                    : "border-white/30 text-white bg-white/10 backdrop-blur-sm"
                }`}
                aria-label="Call Cabeazy"
              >
                <Phone className="w-4 h-4 text-brandColor" />
                <span className="hidden sm:inline">Call</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex p-2 sm:px-3 sm:py-2 rounded-xl bg-brandColor text-white transition-all btn-press items-center gap-1.5 text-xs font-bold shadow-xs"
                aria-label="WhatsApp Cabeazy"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2 rounded-xl border transition btn-press ${
                  scrolled
                    ? "border-gray-200 text-gray-900 bg-white"
                    : "border-white/30 text-white bg-white/10 backdrop-blur-sm"
                }`}
                aria-label="Open Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE / TABLET DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden flex flex-col justify-end">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div className="relative bg-white rounded-t-3xl shadow-2xl p-6 z-10 animate-fade-in-up max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo-icon.png"
                  alt="Cabeazy Logo Icon"
                  width={28}
                  height={28}
                  className="w-7 h-7 flex-shrink-0 object-contain rounded-lg"
                />
                <span className="text-xl font-black text-gray-900">
                  Cabeazy
                </span>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="space-y-1 mb-6" aria-label="Mobile Navigation">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="flex items-center px-3.5 py-3 rounded-xl text-base font-semibold text-gray-800 hover:bg-orange-50 hover:text-brandColor transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTAs */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-brandColor text-white font-bold shadow-sm btn-press transition"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={closeMenu}
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 font-semibold btn-press transition"
              >
                <Phone className="w-5 h-5 text-brandColor" />
                <span>Call {siteConfig.phone} (24/7)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
