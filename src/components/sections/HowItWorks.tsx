"use client";

import React from "react";
import { motion } from "motion/react";
import { Car, Send, UserCheck, MapPin, ArrowRight } from "lucide-react";
import { howItWorksSteps, getWhatsAppLink } from "@/config/site";

const stepIcons = [Car, Send, UserCheck, MapPin];
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-16 pb-8 md:pt-24 md:pb-12 bg-white border-t border-gray-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brandColor mb-2">
            Seamless &amp; Transparent
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            How Booking Works with <span className="text-brandColor">Cabeazy</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Tell us where you need to go. Cabeazy arranges your vehicle, assigns an experienced
            driver, and ensures a smooth journey from start to finish.
          </p>
        </motion.div>

        {/* 4-Step Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howItWorksSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Car;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: EASE }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-gray-50/80 rounded-3xl p-6 sm:p-7 border border-gray-200/80 hover:border-brandColor/40 hover:bg-white shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative cursor-default"
              >
                <div>
                  {/* Step number badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      className="w-12 h-12 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-center group-hover:bg-brandColor group-hover:border-brandColor transition-colors duration-300"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-5 h-5 text-brandColor group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <span className="text-2xl font-black text-gray-200 group-hover:text-brandColor/25 font-mono transition-colors duration-300">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-brandColor transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center gap-1 text-[11px] font-bold text-brandColor">
                  <span>Step {step.step}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
        >
          <a
            href={getWhatsAppLink("Hi Cabeazy, I want to book a ride.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-bold shadow-sm btn-press transition"
          >
            <span>Ready to Travel? Get an Instant Quote</span>
            <ArrowRight className="w-4 h-4 text-brandColor" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
