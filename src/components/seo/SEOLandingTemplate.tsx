"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, ChevronDown } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import { motion, AnimatePresence } from "motion/react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOLandingTemplateProps {
  h1: string;
  description: string;
  canonicalUrl: string;
  breadcrumbItems: BreadcrumbItem[];
  detailedContent: string[];
  features: { title: string; description: string }[];
  faqs: FAQItem[];
}

export default function SEOLandingTemplate({
  h1,
  description,
  canonicalUrl,
  breadcrumbItems,
  detailedContent,
  features,
  faqs,
}: SEOLandingTemplateProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const defaultWhatsAppUrl = getWhatsAppLink(`Hi Cabeazy, I want to book a ride through your ${h1} service.`);

  // Visual Breadcrumbs
  const visualBreadcrumbs = (
    <nav className="flex items-center gap-1.5 text-xs font-semibold text-gray-200 mb-4 drop-shadow-sm flex-wrap">
      <Link href="/" className="hover:text-brandColor transition">Home</Link>
      {breadcrumbItems.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
          {item.url ? (
            <Link href={item.url} className="hover:text-brandColor transition truncate max-w-[120px] sm:max-w-none">{item.name}</Link>
          ) : (
            <span className="text-brandColor truncate max-w-[120px] sm:max-w-none">{item.name}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );

  // Dynamic Page Schemas (WebPage + BreadcrumbList)
  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.cabeazy.in/"
      },
      ...breadcrumbItems.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": item.name,
        "item": item.url ? `https://www.cabeazy.in${item.url}` : canonicalUrl
      }))
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": h1,
    "description": description,
    "isPartOf": {
      "@id": "https://www.cabeazy.in/#website"
    },
    "breadcrumb": {
      "@id": `${canonicalUrl}#breadcrumb`
    }
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* 1. HERO BANNER */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-gray-950 text-white overflow-hidden">
        {/* Soft atmospheric overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-950/80 to-gray-950 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brandColor/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left space-y-5">
            {visualBreadcrumbs}

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brandColor/10 border border-brandColor/20 text-brandColor text-xs font-bold"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified assigned drivers &bull; 24/7 Available</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight"
            >
              {h1}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl font-medium"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-brandColor hover:bg-brandColor-hover text-white px-6 py-3.5 rounded-2xl text-sm font-bold shadow-md hover:shadow-lg btn-press transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Quote on WhatsApp</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-2xl text-sm font-semibold backdrop-blur-md btn-press transition"
              >
                <Phone className="w-4 h-4 text-brandColor" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. DETAILED EXPLANATORY CONTENT */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-6">
            Reliable Travel Coordination with Cabeazy
          </h2>
          <div className="space-y-5 text-sm sm:text-base text-gray-600 leading-relaxed">
            {detailedContent.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES / VALUE PROPS */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-10 text-center">
            Service Highlights &amp; Benefits
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-gray-200 shadow-2xs hover:border-brandColor/25 hover:shadow-sm transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-brandColor/15 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <CheckCircle2 className="w-5 h-5 text-brandColor" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PAGE ACCORDION FAQS */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-2.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-content-${index}`;
              const headerId = `faq-header-${index}`;

              return (
                <div
                  key={index}
                  className={`rounded-2xl border overflow-hidden transition-colors duration-200 ${
                    isOpen
                      ? "bg-orange-50/40 border-brandColor/35 shadow-sm"
                      : "bg-gray-50/60 border-gray-200/80 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-3.5 font-bold text-gray-900 hover:text-brandColor transition-colors rounded-2xl btn-press"
                  >
                    <span className="text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                    <motion.div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isOpen
                          ? "bg-brandColor text-white"
                          : "bg-white text-gray-400 border border-gray-200"
                      }`}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        role="region"
                        aria-labelledby={headerId}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: EASE },
                          opacity: { duration: 0.25, ease: "easeOut" },
                        }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-5 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-brandColor/10 pt-3">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. QUICK CTAS */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
            Need to Book a Safe Cab Journey?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-6">
            We arrange clean vehicles with background-verified assigned drivers. Go back to our homepage to fill out our simple booking form or call helpline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl text-sm font-bold shadow-sm btn-press transition"
            >
              <span>Go to Booking Form</span>
              <ArrowRight className="w-4 h-4 text-brandColor" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-800 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition"
            >
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
