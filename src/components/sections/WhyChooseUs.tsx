import React from "react";
import Image from "next/image";
import { whyChooseData } from "@/config/site";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brandColor mb-2">
            The CabEazy Difference
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Why Travelers Choose <span className="text-brandColor">CabEazy</span>
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            We built CabEazy to solve the frustrations of personal and long-distance road travel &mdash; unpredictable charges, driver cancellations, and unverified vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50/80 rounded-3xl p-7 border border-gray-200/80 hover:border-brandColor/30 hover:bg-white shadow-sm hover-lift transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-brandColor/30 transition-all duration-300">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              {item.stat && (
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-brandColor/10 text-brandColor text-[11px] font-bold mb-3">
                  {item.stat}
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
