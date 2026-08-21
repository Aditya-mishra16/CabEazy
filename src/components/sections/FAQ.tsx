"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqsData } from "@/config/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-white border-t border-gray-200/80 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brandColor mb-1.5">
            Quick Answers
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Frequently Asked <span className="text-brandColor">Questions</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-lg mx-auto">
            Everything you need to know about booking, driver assignment, vehicle classes, and 24/7 travel support.
          </p>
        </div>

        {/* COMPACT ACCORDION LIST */}
        <div className="space-y-2.5" role="region" aria-label="FAQ Accordion">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-orange-50/30 border-brandColor/35 shadow-2xs"
                    : "bg-gray-50/60 border-gray-200/80 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <button
                  id={headerId}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-3.5 font-bold text-gray-900 hover:text-brandColor transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brandColor rounded-2xl btn-press"
                >
                  <span className="text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-brandColor text-white rotate-180"
                        : "bg-white text-gray-400 border border-gray-200"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-brandColor/10 pt-3 animate-fade-in"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
