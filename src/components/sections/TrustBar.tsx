import React from "react";
import { ShieldCheck, MapPin, Users, PhoneCall } from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    title: "Upfront Fare Quotes",
    subtitle: "Clear, transparent quotes with zero surge",
  },
  {
    icon: Users,
    title: "5,000+ Happy Riders",
    subtitle: "Trusted for intercity & local journeys",
  },
  {
    icon: MapPin,
    title: "50+ Cities Connected",
    subtitle: "Extensive Maharashtra & interstate coverage",
  },
  {
    icon: PhoneCall,
    title: "24/7 Support",
    subtitle: "Direct on-trip assistance anytime",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-gray-50 border-y border-gray-200/80 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover-lift transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-brandColor/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-brandColor" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 leading-tight">
                    {stat.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
