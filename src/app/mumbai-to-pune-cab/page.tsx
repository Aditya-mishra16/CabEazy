import React from "react";
import type { Metadata } from "next";
import SEOLandingTemplate from "@/components/seo/SEOLandingTemplate";

export const metadata: Metadata = {
  title: "Mumbai to Pune Cab - One-Way & Round-Trip Taxi | Cabeazy",
  description: "Book a Mumbai to Pune cab with Cabeazy. Enjoy reliable, safe intercity highway transfers on the Express Highway with verified drivers and flat rates.",
  alternates: {
    canonical: "https://www.cabeazy.in/mumbai-to-pune-cab",
  },
};

const detailedContent = [
  "The Mumbai-Pune corridor is one of the busiest highway travel routes in Western India. Cabeazy's Mumbai to Pune cab service is designed for business commuters, travelers heading to Mumbai International Airport (BOM), and families looking for a comfortable, stress-free road trip on the Mumbai-Pune Expressway.",
  "We arrange both one-way intercity drops and comprehensive round-trip highway travel. Our specialized outstation dispatch desk coordinates the entire trip lifecycle — verifying driver background status, checking vehicle condition, and providing real-time highway support.",
  "Travel safely with experienced drivers who understand the Mumbai-Pune Expressway route, toll points, bypass routes, and standard rest-stop options. With Cabeazy, you pay transparent flat outstation rates with zero hidden charges or surprise tolls, keeping your budget clear from start to finish."
];

const features = [
  { title: "One-Way Drops", description: "Pay only for the single-way distance between Mumbai and Pune, with zero return fare charges." },
  { title: "Expressway Experts", description: "Assigned chauffeurs have extensive experience in high-speed Expressway navigation and mountain ghat safety." },
  { title: "Airport Pickups & Drops", description: "Reliable airport cab service directly from BOM Airport terminals to Hinjawadi, Baner, Kothrud, and Pune city." },
  { title: "AC Hatchbacks, Sedans & SUVs", description: "Choose a sanitized vehicle category based on your travel luggage and group size." }
];

const faqs = [
  { question: "How long does a cab journey from Mumbai to Pune take?", answer: "A typical trip between Mumbai and Pune takes about 3 to 4 hours (approximately 150 km) depending on traffic conditions and your exact pickup/drop-off points." },
  { question: "Are toll charges included in the Mumbai to Pune cab fare?", answer: "We provide clear, transparent quotes. Toll charges for the Mumbai-Pune Expressway are either included or clearly estimated upfront in your customized quote." },
  { question: "Can I get picked up directly from Mumbai Airport T2 and dropped in Hinjawadi?", answer: "Yes, this is one of our most popular airport outstation routes. We arrange direct passenger pickups from BOM Airport T2 arrival exit gates with drops across Hinjawadi, Baner, Wakad, and PCMC." }
];

export default function MumbaiToPuneCabPage() {
  return (
    <SEOLandingTemplate
      h1="Mumbai to Pune Cab"
      description="Book a Mumbai to Pune cab with Cabeazy. Enjoy reliable, safe intercity highway transfers on the Express Highway with verified drivers and flat rates."
      canonicalUrl="https://www.cabeazy.in/mumbai-to-pune-cab"
      breadcrumbItems={[{ name: "Mumbai to Pune Cab", url: "/mumbai-to-pune-cab" }]}
      detailedContent={detailedContent}
      features={features}
      faqs={faqs}
    />
  );
}
