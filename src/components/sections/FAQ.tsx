"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqsData } from "@/config/site";

const SPRING_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="pt-12 pb-12 md:pt-16 md:pb-16 bg-white border-t border-gray-200/80 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: SPRING_EASE }}
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brandColor mb-1.5">
            Quick Answers
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Frequently Asked <span className="text-brandColor">Questions</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-lg mx-auto">
            Everything you need to know about booking, driver assignment, vehicle classes, and 24/7 travel support.
          </p>
        </motion.div>

        {/* ACCORDION LIST — smooth AnimatePresence height animation */}
        <div
          className="space-y-2.5"
          role="region"
          aria-label="FAQ Accordion"
        >
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: SPRING_EASE }}
                className={`rounded-2xl border overflow-hidden transition-colors duration-200 ${
                  isOpen
                    ? "bg-orange-50/40 border-brandColor/35 shadow-sm"
                    : "bg-gray-50/60 border-gray-200/80 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  id={headerId}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-3.5 font-bold text-gray-900 hover:text-brandColor transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brandColor rounded-2xl btn-press"
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

                {/* Smooth height animation on open/close */}
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
                        height: { duration: 0.3, ease: SPRING_EASE },
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
