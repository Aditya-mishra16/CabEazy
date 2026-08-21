import React from "react";
import { Car, Send, UserCheck, MapPin, ArrowRight } from "lucide-react";
import { howItWorksSteps, getWhatsAppLink } from "@/config/site";

const stepIcons = [Car, Send, UserCheck, MapPin];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white border-t border-gray-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brandColor mb-2">
            Seamless &amp; Transparent
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            How Booking Works with <span className="text-brandColor">CabEazy</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Tell us where you need to go. CabEazy arranges your vehicle, assigns an experienced driver, and ensures a smooth journey from start to finish.
          </p>
        </div>

        {/* 4-Step Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howItWorksSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Car;

            return (
              <div
                key={step.step}
                className="bg-gray-50/80 rounded-3xl p-6 sm:p-7 border border-gray-200/80 hover:border-brandColor/40 hover:bg-white shadow-2xs hover-lift transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Step number badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-center group-hover:bg-brandColor group-hover:border-brandColor transition-colors duration-300">
                      <Icon className="w-5 h-5 text-brandColor group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-2xl font-black text-gray-300 group-hover:text-brandColor/30 font-mono transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-brandColor transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center gap-1 text-[11px] font-bold text-brandColor">
                  <span>Step {step.step}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Quick Action */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppLink("Hi CabEazy, I want to book a ride.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-bold shadow-sm btn-press transition"
          >
            <span>Ready to Travel? Get an Instant Quote</span>
            <ArrowRight className="w-4 h-4 text-brandColor" />
          </a>
        </div>
      </div>
    </section>
  );
}
