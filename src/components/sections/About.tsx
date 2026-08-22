import React from "react";
import Image from "next/image";
import { ShieldCheck, Car, PhoneCall, MessageCircle, UserCheck } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";

const aboutStats = [
  { value: "5,000+", label: "Completed Trips" },
  { value: "100%", label: "Verified Drivers" },
  { value: "99%", label: "Punctual Arrival" },
  { value: "24/7", label: "Human Support" },
];

const pillars = [
  {
    icon: UserCheck,
    title: "Driver Assignment",
    desc: "Every trip is assigned to a background-verified, experienced chauffeur specialized in safe highway and city driving.",
  },
  {
    icon: ShieldCheck,
    title: "Upfront Clarity",
    desc: "Transparent quotes confirmed prior to travel with zero surprise charges or peak-hour surge multipliers.",
  },
  {
    icon: Car,
    title: "Maintained Fleet",
    desc: "Clean, air-conditioned hatchbacks, sedans, SUVs, and luxury vehicles inspected regularly for passenger comfort.",
  },
  {
    icon: PhoneCall,
    title: "Dedicated Human Care",
    desc: "Our responsive travel coordinators are available 24/7 via phone and WhatsApp throughout your trip.",
  },
];

export default function About() {
  return (
    <section id="about" className="pt-14 pb-14 md:pt-18 md:pb-20 bg-gray-50 border-t border-gray-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brandColor mb-2">
            About Cabeazy
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Reliable Vehicle Booking &amp;{" "}
            <span className="text-brandColor">Driver Assignment</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Cabeazy is a specialized vehicle booking service designed to make personal, outstation, and corporate road travel predictable, comfortable, and seamless.
          </p>
        </div>

        {/* IMAGE & STORY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* IMAGE */}
          <div className="lg:col-span-6 relative h-72 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover-lift">
            <Image
              src="/images/AboutImage.jpg"
              alt="Cabeazy vehicle booking and customer journey comfort"
              fill
              sizes="(max-width: 1024px) 100vw, 550px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <span className="text-xs sm:text-sm font-bold bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20">
                Verified Drivers &bull; Quality Fleet
              </span>
            </div>
          </div>

          {/* STORY & MISSION */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              How Cabeazy Facilitates Your Travel
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              When you submit a booking request through Cabeazy, our travel team coordinates with our network of experienced, verified chauffeurs. We assign the most suitable driver with a well-maintained vehicle to pick you up at your requested time and safely transport you to your destination.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Whether you require a one-way outstation transfer, a round-trip family holiday, or a multi-stop city rental, Cabeazy eliminates the frustration of driver cancellations and unexpected fare changes.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={getWhatsAppLink("Hi Cabeazy, I would like to know more about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brandColor hover:bg-brandColor-hover text-white px-6 py-3 rounded-xl font-bold text-sm shadow-sm btn-press transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk to Travel Desk</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 px-5 py-3 rounded-xl font-semibold text-sm btn-press transition"
              >
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {aboutStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs text-center hover-lift transition"
            >
              <span className="text-3xl sm:text-4xl font-black text-brandColor block mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CORE PILLARS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs hover-lift transition"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-brandColor/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brandColor" />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">{p.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
