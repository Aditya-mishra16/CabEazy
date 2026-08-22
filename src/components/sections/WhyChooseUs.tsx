"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { whyChooseData } from "@/config/site";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="pt-14 pb-14 md:pt-18 md:pb-20 bg-white scroll-mt-16">
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
            The Cabeazy Difference
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Why Travelers Choose <span className="text-brandColor">Cabeazy</span>
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            We built Cabeazy to solve the frustrations of personal and long-distance road travel &mdash;
            unpredictable charges, driver cancellations, and unverified vehicles.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              className="bg-gray-50/80 rounded-3xl p-7 border border-gray-200/80 hover:border-brandColor/30 hover:bg-white shadow-sm hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-brandColor/30"
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
              {item.stat && (
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-brandColor/10 text-brandColor text-[11px] font-bold mb-3">
                  {item.stat}
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
