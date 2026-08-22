"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { MapPin, Navigation, Clock, CheckCircle2, MessageCircle } from "lucide-react";
import { servicesData, getWhatsAppLink } from "@/config/site";

const iconMap = {
  MapPin,
  Navigation,
  Clock,
  Shield: CheckCircle2,
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// 3D tilt card — mouse-follow perspective on desktop, gracefully degrades on touch
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springCfg = { stiffness: 280, damping: 28, mass: 0.5 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [6, -6]), springCfg);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-6, 6]), springCfg);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="pt-6 md:pt-10 pb-20 md:pb-28 bg-white overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brandColor mb-2">
            What We Arrange
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Vehicle Booking &amp;{" "}
            <span className="text-brandColor">Chauffeur Services</span>
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            One-way intercity drops, city airport transfers, or full-day rentals — CabEazy arranges
            comfortable, clean rides with verified assigned chauffeurs for your destination.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName as keyof typeof iconMap] || MapPin;
            const whatsappUrl = getWhatsAppLink(
              `Hi CabEazy, I would like to enquire about ${service.title}.`
            );

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.65, delay: idx * 0.15, ease: EASE }}
                className="h-full"
              >
                <TiltCard className="relative bg-gray-50 rounded-3xl p-8 border border-gray-200/80 hover:border-brandColor/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full cursor-default">
                  {service.badge && (
                    <span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-brandColor/10 text-brandColor text-xs font-bold border border-brandColor/20">
                      {service.badge}
                    </span>
                  )}

                  <div style={{ transform: "translateZ(12px)" }}>
                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 group-hover:bg-brandColor group-hover:border-brandColor group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-7 h-7 text-brandColor group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-xs font-semibold text-brandColor mb-4">{service.tagline}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{service.description}</p>

                    <ul className="space-y-2.5 mb-8 border-t border-gray-200/70 pt-5">
                      {service.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-brandColor mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ transform: "translateZ(12px)" }}>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-brandColor text-gray-900 hover:text-white border border-gray-200 hover:border-brandColor text-sm font-bold shadow-sm btn-press transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
